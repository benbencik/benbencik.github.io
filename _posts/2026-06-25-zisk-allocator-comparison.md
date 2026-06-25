---
layout: post
title:  "Comparing heap allocators for zkVM guest programs"
date:   2026-06-25
categories: zkEVM Ethereum memory
excerpt: "Do we ever need to free?"
---

ZisK exposes four allocators as Cargo features in the [ziskos entrypoint](https://github.com/0xPolygonHermez/zisk/blob/main/ziskos/entrypoint/Cargo.toml): `bump`, `dlmalloc`, `talc`, and `tlfs`. Other allocators exist in the codebase but they [are disabled](https://github.com/0xPolygonHermez/zisk/blob/main/ziskos/entrypoint/src/alloc/mod.rs#L33-L37).

For evaluations I used the ZisK emulator `ziskemu`, which runs guest execution (without generating a proof) and accumulates AIR-cost. The cost derived from the execution trace translates to the proving complexity. While we ultimately care about proving time, using the emulator to measure AIR-costs is more practical.

## Allocator options

All four allocators can be selected via Cargo features.

**bump** (default): The simplest possible allocator. Keeps a pointer to the next free byte and advances it on each allocation. Memory is never reclaimed.

**dlmalloc** ([explainer](https://gee.cs.oswego.edu/dl/html/malloc.html)): Each allocated block carries a small header with its size and a flag. When a block is freed, dlmalloc adds it to a list and checks neighbors. If adjacent blocks are also free, it merges them into a larger block so future allocations can reuse the space.

**talc**: Similar mechanism to dlmalloc with merging of adjacent free blocks, but organizes free blocks into buckets.

**tlfs** ([explainer](https://ricefields.me/2024/04/20/tlsf-allocator.html)): Instead of searching a list, it uses a two-level bitmap to jump directly to a free block of the right size. Amortized O(1) alloc/free.

## How are the costs calculated

ZisK is a collection of specialised modules much like a modern CPU. Each module (state machine) has its own AIR table. Every instruction the guest executes fills rows in one or more tables. The emulator walks each instruction, looks up per-op cost constants, and accumulates into buckets:

- `MAIN`: Costs of processing each instruction without counting in the opcodes. Every read, write, arithmetic operation, function call is one row. This is the baseline cost before counting what the instruction actually does.
- `OPCODES`: Additional rows for the operation itself, on top of MAIN. For example an instruction that does a multiplication fills MAIN and OPCODES with the multiplication cost.
- `PRECOMPILES`: Specialised circuits for operations too expensive to express as RISC-V sequences. An example for precompiles is a hash function call.
- `MEMORY`: Additional rows for memory reads and writes, on top of MAIN.
- `BASE`: Fixed overhead independent of the guest program. This includes for example the overhead needed for lookup tables.

Total cost = `MAIN + OPCODES + PRECOMPILES + MEMORY + BASE`. Per-op costs are defined in [`core/src/zisk_ops_costs.rs`](https://github.com/0xPolygonHermez/zisk/blob/main/core/src/zisk_ops_costs.rs). The current memory limit is set to 512MB in [mem.rs](https://github.com/0xPolygonHermez/zisk/blob/main/core/src/mem.rs#L111).

## 50 Mainnet blocks

The first setting where I evaluated the allocator is on the mainnet blocks 24949787 - 24949836, by using [zkevm-benchmark-workload](https://github.com/eth-act/zkevm-benchmark-workload) to run the ZisK v0.16.1. I used the locally compiled ethrex stateless client from commit `b112f94`.

| Mainnet cost: ethrex b112f94 ZisK v0.16.1   | bump   | dlmalloc | talc   | tlsf   |
| ------------------------------------------- | ------ | -------- | ------ | ------ |
| Min gas block 14M: `block 24949797`         | 24.71B | 26.27B   | 26.52B | 27.53B |
| Max gas block 56M: `block 24949791`         | 77.71B | 83.18B   | 83.86B | 87.24B |
| Average over all blocks                     | 45.44B | 48.61B   | 49.02B | 51.06B |

In all cases it holds: `bump < dlmalloc < talc < tlfs`. The difference for bump and dlmalloc is consistent across the three rows (6%, 6.5%, 6.5%). We can also take a look at the distribution of the costs across the state machines.

![sm_breakdown](/assets/images/blogs/sm_breakdown.png)

As expected BASE and PRECOMPILES are identical across all allocators. The largest difference is in the MAIN costs (+9% to 16%). No matter if the allocator performs comparison or traversal to evaluate the free space, each of these steps adds complexity to the MAIN state machine. The difference on MEMORY is less significant (+5% to 8%). The allocators store some additional data in form of a header or metadata but this overhead is relatively small. *The data in the table format can be viewed in the last section of the blog.*

## EEST Fixtures

The current mainnet block gas limit is ~60M. The next Glamsterdam fork [raises it to 200M](https://ethereum.org/roadmap/glamsterdam/#state-creation-gas-cost-increase). For zkVM proving, average case performance matters less than worst-case safety. A single "prover killer" block crashing on memory limit or exceeding the block time (12s) prevents the creation of the proof.

I used fixtures generated using the [EEST benchmark suite](https://github.com/ethereum/execution-spec-tests) for 100M gas limit. To parse the generated tests for the `zkevm-benchmark-workload` I used [witness-generator-cli](https://github.com/eth-act/zkevm-benchmark-workload/tree/master/crates/witness-generator-cli).

### 100M fixtures

![air_cost_comparison](/assets/images/blogs/air_cost_comparison.png)

In these EEST tests the bump allocator still performs the best however, we see the first OOM, which is a problem. The tests like ADD and MULMOD, which do not make many allocations, unsurprisingly, do not show much difference in the total cost. But other tests like SSTORE or SLOAD show more variety.

Aside from that, we can also measure the memory usage. Or more precisely the highest address touched from the [PR1141](https://github.com/0xPolygonHermez/zisk/pull/1141) on ZisK. In this measurement `keccak_max_permutation` OOMs, and there are other tests like `modexp` and `sha256` that also allocate a lot. This suggests that for higher gas limits they might also fail.

Also notice that the difference in memory usage across dlmalloc, talc and tlfs is not that significant.

![ram_usage](/assets/images/blogs/ram_usage.png)

### Allocator comparison

Across *almost all* of the tests we are seeing `bump < dlmalloc < talc < tlfs` in terms of the AIR-costs. The profiling data also show the costs of the function calls. The average for the above EEST tests is the following:

| Compare allocator function calls | bump                   | dlmalloc | talc  | tlfs  |
| -------------------------------- | ---------------------- | -------- | ----- | ----- |
| alloc                            | too small not recorded | 1.32%    | 1.89% | 2.37% |
| free                             | too small not recorded | 0.85%    | 1.13% | 1.83% |

Bump does the least work resulting in lowest costs. After that dlmalloc is the second candidate. On native hardware, talc and tlfs can win through cache locality or fast bit operations. These advantages do not translate from standard computation to zkVM.

Without getting into too many allocator details, let's look into tests with higher gas where the memory limits become a problem. For the following measurement I will compare just dlmalloc and bump.

### 200M fixtures

As expected the tests mentioned above fail for the 200M gas limit. It is also possible to avoid the OOM by increasing the memory limit for the bump allocator on a fork of ZisK. This prevents the crashes and is even more efficient on the `modexp` test. This is by far not testing all of the possible cases. Running all of the 200M tests is just too heavy to do locally. It is possible that there exist some tests which fail even for the 1.5GB memory limit.

![air_cost_comparison_2](/assets/images/blogs/air_cost_comparison_2.png)

Below we compare the memory usage, where dlmalloc is consistently lower, making it safer for potential future L1 inclusion.

![ram_usage_200M](/assets/images/blogs/ram_usage_200M.png)

## Conclusion

The trivial bump allocator performs better on AIR cost in almost all cases, however from just the few tests tried there are OOMs and more can be seen at [zkevm-benchmark-runs](https://eth-act.github.io/zkevm-benchmark-runs/benchmarks/). From the measured cases the most viable option seems to use dlmalloc. The other alternative allocators did not bring significant advantage in the final AIR-costs or memory limits.

---

## Notes

### Useful commands

Building ELF file

```sh
docker run --rm \
   -v "$PWD":/ere-guests \
   -v "$PWD/output":/output \
   -v "$(realpath ../ethrex)":/ethrex \
   -v "/home/benb/Code/zkEVM/zisk":/zisk \
   "ghcr.io/eth-act/ere/ere-compiler-zisk:0.12.1" \
   --compiler-kind rust-customized \
   --guest-dir /ere-guests/bin/stateless-validator-ethrex/zisk \
   --output-dir /output \
   --elf-name stateless-validator-ethrex-zisk.elf
```

Generating EEST fixtures

 ```sh
 uv run fill \
  --gas-benchmark-values <gas limit> --fork Prague \
  --output <output name> --clean -n auto \
  -k "<test name>" \
  tests/benchmark/compute
 ```

Converting EEST fixtures to inputs:

```sh
EF_TEST_TRIE=default cargo run --release -p witness-generator-cli -- \
  -o <output file> \
  tests --eest-fixtures-path <input files>
```

Running ziskemu

```sh
RUST_LOG=info RAYON_NUM_THREADS=2 cargo run --release -p ere-hosts \ 
  -- --zisk-profile --zkvms zisk --bin-path <path to ere-guests>/output \ 
  stateless-validator --execution-client ethrex \
  --input-folder <path to generated inputs>
```

### Data tables

| Cost distribution mainnet: ethrex b112f94 ZisK v16.0.1 | bump   | dlmalloc | talc   | tlfs   |
| ------------------------------------------------------ | ------ | -------- | ------ | ------ |
| `MAIN`                                                 | 27.0B  | 29.5B    | 29.7B  | 31.3B  |
| `PRECOMPILES`                                          | 7.8B   | 7.8B     | 7.8B   | 7.8B   |
| `OPCODES`                                              | 6.8B   | 7.2B     | 7.5B   | 8.0B   |
| `MEMORY`                                               | 3.5B   | 3.8B     | 3.7B   | 3.7B   |
| `BASE`                                                 | 293.6M | 293.6M   | 293.6M | 293.6M |

| Cost by allocator (100M): ethrex 81484be ZisK v16.0.1 | bump    | dlmalloc | talc    | tlfs    |
| ----------------------------------------------------- | ------- | -------- | ------- | ------- |
| arithmetic[opcode_ADD-benchmark]                      | 157.82B | 157.83B  | 157.83B | 157.84B |
| arithmetic[opcode_MULMOD-benchmark]                   | 116.54B | 116.55B  | 116.55B | 116.56B |
| ecrecover[ecrecover-benchmark]                        | 78.36B  | 80.22B   | 80.74B  | 82.55B  |
| keccak_max_permutations[benchmark]                    | OOM     | 470.79B  | 470.88B | 470.90B |
| modexp[mod_1024_exp_2-benchmark]                      | 577.20B | 588.51B  | 592.20B | 594.76B |
| sha256[benchmark]                                     | 41.44B  | 41.45B   | 41.50B  | 41.55B  |
| storage_access_cold_benchmark[SLOAD-benchmark]        | 34.12B  | 37.81B   | 39.20B  | 43.656  |
| storage_access_cold_benchmark[SSTORE_new-benchmark]   | 420.88B | 430.70B  | 435.47B | 443.26B |
| storage_access_warm_benchmark[SLOAD-benchmark]        | 90.140B | 90.12B   | 90.13B  | 90.19B  |

| MEM usage by allocator (100M): ethrex 81484be ZisK v16.0.1 | bump   | dlmalloc | talc  | tlfs  |
| ---------------------------------------------------------- | ------ | -------- | ----- | ----- |
| arithmetic[opcode_ADD-benchmark]                           | 0.48%  | 0.46%    | 0.45% | 0.45% |
| arithmetic[opcode_MULMOD-benchmark]                        | 0.48%  | 0.46%    | 0.45% | 0.45% |
| ecrecover[ecrecover-benchmark]                             | 1.73%  | 0.46%    | 0.45% | 0.45% |
| keccak_max_permutations[benchmark]                         | 100%   | 0.49%    | 0.45% | 0.50% |
| modexp[mod_1024_exp_2-benchmark]                           | 91.09% | 0.46%    | 0.45% | 0.45% |
| sha256[benchmark]                                          | 50.49% | 0.55%    | 0.53% | 0.53% |
| storage_access_cold_benchmark[SLOAD-benchmark]             | 7.83%  | 3.51%    | 3.19% | 3.65% |
| storage_access_cold_benchmark[SSTORE_new-benchmark]        | 0.49%  | 0.47%    | 0.46% | 0.46% |
| storage_access_warm_benchmark[SLOAD-benchmark]             | 0.56%  | 0.46%    | 0.45% | 0.45% |

| Cost by allocator (200M): ethrex 81484be ZisK v16.0.1            | bump 512MB Mem | bump 1536MB Mem | dlmalloc |
| ---------------------------------------------------------------- | -------------- | --------------- | -------- |
| mod_arithmetic[opcode_MULMOD-mod_bits_191-benchmark]             | 2.375T         | 2.375T          | 2.375T   |
| ecrecover[ecrecover-benchmark]                                   | 156.34B        | 156.36B         | 160.06B  |
| keccak_max_permutations[benchmark]                               | OOM            | 945.27B         | 941.48B  |
| mcopy[fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark] | 335.36B        | 335.36B         | 335.37B  |
| test_modexp[mod_1024_exp_2-benchmark]                            | OOM            | 1.15T           | 1.17T    |
| sha256[benchmark]                                                | OOM            | 82.37B          | 82.40B   |

| Absolute MEM usage by allocator (200M): ethrex 81484be ZisK v16.0.1 | bump MEM 1536MB (B) | dlmalloc (B) |
| ------------------------------------------------------------------- | ------------------- | ------------ |
| mod_arithmetic[opcode_MULMOD-mod_bits_191-benchmark]                | 2,547,923           | 2,424,832    |
| ecrecover[ecrecover-benchmark]                                      | 15,836,691          | 2,424,832    |
| keccak_max_permutations[benchmark]                                  | 1,067,406,171       | 2,818,048    |
| mcopy[fixed_src_dst_True-copy_size_0-mem_size_1048576-benchmark]    | 4,123,571           | 4,128,768    |
| test_modexp[mod_1024_exp_2-benchmark]                               | 967,632,603         | 2,424,832    |
| sha256[benchmark]                                                   | 535,117,379         | 3,080,192    |
