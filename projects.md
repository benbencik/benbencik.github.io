---
layout: page
title: projects
permalink: /projects/
order: 3
---

<style>
    .card:hover .card-header h3 {
        text-decoration: underline;
    }

    .projects-section {
        display: flex;
        flex-direction: column;
        gap: 1.25rem;
    }

    .section-toggle {
        cursor: pointer;
        user-select: none;
        display: flex;
        align-items: center;
        gap: 0.5rem;
        margin-bottom: 0.25rem;
    }

    .section-toggle:hover .section-label {
        text-decoration: underline;
    }

    .section-chevron {
        display: inline-block;
        font-size: 0.5em;
        color: var(--primary-color-alt);
        transition: transform 0.2s ease;
    }

    .section-toggle.open .section-chevron {
        transform: rotate(90deg);
    }

    .section-summary {
        margin: 0.15rem 0 1.5rem 0.5rem;
        padding-left: 1rem;
    }

    .section-summary li {
        cursor: pointer;
    }

    .section-summary li:hover {
        text-decoration: underline;
        color: var(--primary-color);
    }

    .summary-meta {
        opacity: 0.65;
        font-size: 0.9em;
    }

</style>

<script>
    function toggleDescription(id) {
        var element = document.getElementById(id);
        if (element.style.display === "none") {
            element.style.display = "block";
        } else {
            element.style.display = "none";
        }
    }

    function toggleSection(id) {
        var cards = document.getElementById(id + '-cards');
        var summary = document.getElementById(id + '-summary');
        var header = document.getElementById(id + '-header');
        var open = cards.style.display === "none";
        cards.style.display = open ? "flex" : "none";
        summary.style.display = open ? "none" : "block";
        header.classList.toggle('open', open);
    }

    // Clicking a bullet opens the section and expands that specific card.
    function openFromSummary(event, sectionId, cardDescId) {
        event.stopPropagation();
        var cards = document.getElementById(sectionId + '-cards');
        if (cards.style.display === "none") {
            toggleSection(sectionId);
        }
        var desc = document.getElementById(cardDescId);
        if (desc && desc.style.display === "none") {
            desc.style.display = "block";
            desc.scrollIntoView({ behavior: "smooth", block: "center" });
        }
    }

    /* equalizeCardHeights — only needed for 2-col grid, kept for reference
    function equalizeCardHeights() { ... }
    window.addEventListener('load', equalizeCardHeights);
    */
</script>

<h2 id="hackathons-header" class="section-toggle" onclick="toggleSection('hackathons')">
    <span class="section-chevron">▶</span> <span class="section-label">Hackathons</span>
</h2>
<ul class="section-summary" id="hackathons-summary">
    <li onclick="openFromSummary(event, 'hackathons', 'flexProverDesc')">FlexProver <span class="summary-meta">— ETHGlobal Cannes 🇫🇷 | 🥈 2nd Flare Network</span></li>
    <li onclick="openFromSummary(event, 'hackathons', 'cryptoCachingDesc')">Proofs of inference <span class="summary-meta">— ETHGlobal Prague 🇨🇿 | 🥇 Hedera | 🥇 Protocol Labs</span></li>
    <li onclick="openFromSummary(event, 'hackathons', 'cryptoCachingDesc2')">Wifi-Radar <span class="summary-meta">— ETHGlobal Buenos Aires 🇦🇷</span></li>
    <li onclick="openFromSummary(event, 'hackathons', 'cryptoCachingDesc3')">CryptoCaching <span class="summary-meta">— EPFL Hackathon 🇨🇭 | 🥉 Hedera</span></li>
    <li onclick="openFromSummary(event, 'hackathons', 'HackerHouseDesc')">Verifiable Benchmarks <span class="summary-meta">— EigenLayer Hacker House Berlin 🇩🇪</span></li>
</ul>

<div class="projects-section" id="hackathons-cards" style="display: none;">
    <div class="card" onclick="toggleDescription('flexProverDesc')">
        <div class="card-header">
            <h3>FlexProver</h3>
            <div class="card-meta">ETHGlobal Cannes 2026 🇫🇷 <span class="project-award"><br>🥈 2nd Place Flare Network</span></div>
        </div>
        <p class="card-tags">
            <span class="tag">TEE</span>
            <span class="tag">Privacy</span>
            <span class="tag">DeFi</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="flexProverDesc" style="display: none;">
            <p>
                A project enabling traders to prove trading performance on-chain without exposing additional information. Users encrypt their Binance API keys via a Trusted Execution Environment (TEE), which verifies performance metrics and generates cryptographically signed attestations. Traders can selectively prove specific metrics like PnL.
            </p>
            <p>
                Built on Flare Confidential Compute (FCC), credentials are decrypted inside a secure enclave. After the exchange API is queried the signed proofs are published on-chain.
            </p>
            <div class="card-links">
                <a href="https://ethglobal.com/showcase/flexprover-7xuf8" class="button">ETH Global Showcase</a>
                <a href="https://github.com/emmatekulova/flex_prover" class="button">Github repo</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('cryptoCachingDesc')" style="border-color: color-mix(in srgb, var(--primary-color-alt) 45%, var(--border-color));">
        <div class="card-header">
            <h3>Proofs of inference</h3>
            <div class="card-meta">ETHGlobal Prague 2025 🇨🇿 <span class="project-award"><br>🥇 1st Place Hedera 🥇 1st Place Protocol Labs </span></div>
        </div>
        <p class="card-tags">
            <span class="tag">Privacy</span>
            <span class="tag">AI</span>
            <span class="tag">zkSNARK</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="cryptoCachingDesc" style="display: none;">
            <p>
                AI systems with a client-server architecture often function as black boxes, meaning users cannot independently verify whether a prediction was generated correctly using the intended model. To address this, we developed a protocol that allows users to verify the correctness of AI model predictions. For this, we utilized the established <a href="https://ezkl.xyz/">EZKL</a> library, which compiles models in ONNX format into arithmetic circuits. These circuits can then be evaluated and proven as SNARK proofs. Specifically, we demonstrated inference verification using the Halo2 proving system.
            </p>
            <p>
                Next, we built an application around this protocol. We created a web interface where users provide input to a model and receive both the output and a corresponding proof. This proof is then stored on IPFS. To enable on-chain verification, we implemented a smart contract verifier deployed on Hedera.
            </p>
            <div class="card-links">
                <a href="https://ethglobal.com/showcase/proofs-of-inference-6rug4" class="button">ETH Global Showcase</a>
                <a href="https://github.com/markhovs/proofs-of-inference" class="button">Github repo</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('cryptoCachingDesc2')">
        <div class="card-header">
            <h3>Wifi-Radar</h3>
            <div class="card-meta">ETHGlobal Buenos Aires 2025 🇦🇷<span class="project-award"></span></div>
        </div>
        <p class="card-tags">
            <span class="tag">DePin</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="cryptoCachingDesc2" style="display: none;">
            <p>
                WiFi-Radar is a decentralized, "public good" platform that helps discover true internet speed for open WiFi. The platform enables users to add and contribute WiFi hotspot data through map interface and implements a "Proof of Location" system. When a user adds a WiFi station, the system performs real-time speed tests and verifies that the user is physically present at the claimed coordinates. This prevents location imitation.
            </p>
            <div class="card-links">
                <a href="https://ethglobal.com/showcase/wifi-radar-jsqac" class="button">ETH Global Showcase</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('cryptoCachingDesc3')">
        <div class="card-header">
            <h3>CryptoCaching</h3>
            <div class="card-meta">EPFL Hackathon 2025 🇨🇭 <span class="project-award"><br>🥉 3rd Place Hedera</span></div>
        </div>
        <p class="card-tags">
            <span class="tag">Tokenization</span>
            <span class="tag">P2P</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="cryptoCachingDesc3" style="display: none;">
            <p>
                A blockchain-based alternative to traditional GeoCaching. We solved the admin maintenance problem by creating a P2P network to claim and verify cache discoveries. Each cache contains an NFC tag reprogrammed by users, with a token passing mechanism implemented on Hedera to prevent false claims of unvisited caches.
            </p>
            <div class="card-links">
                <a href="https://pitch.com/v/bsa-hackathon-2025-epfl-d2j4ds" class="button">Pitch Presentation</a>
                <a href="/assets/presentations/epfl_bsa_hackathon_2025.pdf" class="button">PDF Presentation</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('HackerHouseDesc')">
        <div class="card-header">
            <h3>Verifiable Benchmarks</h3>
            <div class="card-meta">EigenLayer Hacker House Berlin 2025 🇩🇪 <span class="project-award"></span></div>
        </div>
        <p class="card-tags">
            <span class="tag">Privacy</span>
            <span class="tag">AI</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="HackerHouseDesc" style="display: none;">
            <p>
                I was glad to participate in the EigenLayer Hacker House during Berlin Blockchain Week 2025. Thanks to EigenLayer for providing us with co-working space and accommodation for the duration of the Blockchain Week. I had the opportunity to build, meet great people, and attend numerous events throughout Berlin.
            </p>
            <p>
                I collaborated on a project with my friend Alexander Semenov from the TUM Blockchain Club. We built upon work we had previously developed at ETHGlobal in Prague. Our earlier project, which computed SNARK proofs of inference, was quite slow in execution. This time, we explored a different approach using the <a href="https://arxiv.org/pdf/2501.16007">TOPLOC</a>, which is implemented as a library. This approach provides weaker guarantees than SNARK proofs but is significantly faster and more practical for real-world applications. We integrated the entire system with the EigenLayer ecosystem, enabling proofs to be published on-chain with verification handled by an AVS (Actively Validated Service).
            </p>
            <div class="card-links">
                <a href="https://github.com/benbencik/verifiable-benchmarks" class="button">Github repo</a>
            </div>
        </div>
    </div>
</div>

<h2 id="opensource-header" class="section-toggle" onclick="toggleSection('opensource')">
    <span class="section-chevron">▶</span> <span class="section-label">Open Source Contributions</span>
</h2>
<ul class="section-summary" id="opensource-summary">
    <li onclick="openFromSummary(event, 'opensource', 'smallFpDesc')">Arkworks Small Field Support <span class="summary-meta">— arkworks-rs/algebra</span></li>
</ul>

<div class="projects-section" id="opensource-cards" style="display: none;">
    <div class="card" onclick="toggleDescription('smallFpDesc')" style="border-color: color-mix(in srgb, var(--primary-color-alt) 45%, var(--border-color));">
        <div class="card-header">
            <h3>Arkworks Small Field Support</h3>
            <div class="card-meta"><a href="https://github.com/arkworks-rs/algebra">arkworks-rs/algebra</a> • Merged March 2026</div>
        </div>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Cryptography</span>
            <span class="tag">Finite Fields</span>
        </p>
        <div id="smallFpDesc" style="display: none;">
            <p>
                Contributed small field support to <a href="https://github.com/arkworks-rs/algebra">Arkworks</a> - Rust ecosystem for zkSNARK development. The field implementation used <code>BigInt: [u64]</code> for all finite fields. This is unnecessarily expensive for fields with modulus &lt 128-bits, common in modern proof systems.
            </p>
            <p>
                Introduced <code>SmallFp</code>, a drop-in replacement that uses native Rust types (u8/u16/u32/u64) selected automatically at compile time via a new proc macro. The implementation has optimizations for popular primes like <code>BabyBear, Goldilocks, ...</code>. No breaking changes. Benchmarks show 20–35% improvement in addition, 35–60% in inversion, and up to 27% in end-to-end sumcheck. Also opens a clear path toward SIMD/vectorized field arithmetic.
            </p>
            <p>Collaboration with Andrew Zitek-Estrada (EPFL).</p>
            <div class="card-links">
                <a href="https://github.com/arkworks-rs/algebra/pull/1044" class="button">Pull Request 1044</a>
            </div>
        </div>
    </div>
</div>

<h2 id="misc-header" class="section-toggle" onclick="toggleSection('misc')">
    <span class="section-chevron">▶</span> <span class="section-label">Misc</span>
</h2>
<ul class="section-summary" id="misc-summary">
    <li onclick="openFromSummary(event, 'misc', 'ResearchChallengeDesc')">Organizing Ethereum Research Challenge <span class="summary-meta">— TUM Blockchain Conference 2025 🇩🇪</span></li>
    <li onclick="openFromSummary(event, 'misc', 'ecArithmeticDesc')">Elliptic Curve Arithmetic <span class="summary-meta">— Rust side-quest</span></li>
</ul>

<div class="projects-section" id="misc-cards" style="display: none;">
    <div class="card" onclick="toggleDescription('ResearchChallengeDesc')">
        <div class="card-header">
            <h3>Organizing Ethereum Research Challenge</h3>
            <div class="card-meta">TUM Blockchain Conference 2025 🇩🇪</div>
        </div>
        <div id="ResearchChallengeDesc" style="display: none;">
            <p>
                At the conference we had Ethereum Foundaiton as one of the main sponsors. I had a chance to look at hackathon from different side as an organizer. I was given full freedom in structuring the event. The theme of the event was MEV, and rather than providing participants with rigid tasks, I wanted to create an open-ended challenge where participants could work on topics that interested them. <a href="https://x.com/tbc_munich/status/1964342163904274556">Twitter status.</a> 
            </p>
            <p>
                In this 24-hour event with $5,000 prize pool, we received some fantastic submissions from experienced teams while also successfully onboarding newcomers. I’m really glad I had the chance to organize this event and learned a lot about what it takes to run a hackathon.
            </p>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('ecArithmeticDesc')">
        <div class="card-header">
            <h3>Elliptic Curve Arithmetic</h3>
            <div class="card-meta"></div>
        </div>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Elliptic curves</span>
            <span class="tag">Cryptography</span>
        </p>
        <div id="ecArithmeticDesc" style="display: none;">
            <p>
                EC arithmetic based on blog: <a href="https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/">Elliptic Curve Cryptography: A Gentle Introduction</a>
            </p>
            <p>
                A Rust implementation of elliptic curve cryptography primitives that includes efficient point addition,
                scalar multiplication and multiscalar multiplication. The repository features different scalar
                multiplication methods and implements Pippenger's algorithm for optimized multi-scalar multiplication.
                All operations are implemented over finite fields.
            </p>
            <div class="card-links">
                <a href="https://github.com/benbencik/simple_ec_arithemtic" class="button">Github</a>
            </div>
        </div>
    </div>
</div>

<h2 id="university-header" class="section-toggle" onclick="toggleSection('university')">
    <span class="section-chevron">▶</span> <span class="section-label">University Projects</span>
</h2>
<ul class="section-summary" id="university-summary">
    <li onclick="openFromSummary(event, 'university', 'chopinDesc')">Implementation of Chopin PCS <span class="summary-meta">— Charles University</span></li>
    <li onclick="openFromSummary(event, 'university', 'fluidDynamicsDesc')">Optimization of fluid dynamics simulation <span class="summary-meta">— TU Munich 🇩🇪</span></li>
    <li onclick="openFromSummary(event, 'university', 'mobiusDesc')">Efficient Möbius Computations on Multipermutations <span class="summary-meta">— Charles University</span></li>
    <li onclick="openFromSummary(event, 'university', 'gnnDesc')">Classification of magnetic phases by GNNs <span class="summary-meta">— Charles University</span></li>
</ul>

<div class="projects-section" id="university-cards" style="display: none;">
    <div class="card" onclick="toggleDescription('chopinDesc')">
        <div class="card-header">
            <h3>Implementation of Chopin PCS</h3>
            <div class="card-meta">Charles University • Spring 2026</div>
        </div>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Cryptography</span>
            <span class="tag">Polynomial Commitments</span>
        </p>
        <div id="chopinDesc" style="display: none;">
            <p>
                Implementation of the <a href="https://eprint.iacr.org/2026/480.pdf">Chopin polynomial commitment scheme</a> into the <a href="https://github.com/benbencik/nova">Nova</a> proof system. Chopin replaces the <a href="https://eprint.iacr.org/2025/385.pdf">Mercury</a> univariate KZG with a bivariate KZG construction. This gets significantly faster prover times and lower assumptions.
            </p>
            <p>
                Benchmarks across instance sizes log(n) = 20-25 show Chopin is <b>~60% faster</b> than Mercury.
            </p>
            <p>Work done with Pavel Hubáček.</p>
            <div class="card-links">
                <a href="https://github.com/benbencik/nova" class="button">GitHub</a>
                <a href="https://eprint.iacr.org/2026/480.pdf" class="button">Paper</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('fluidDynamicsDesc')">
        <div class="card-header">
            <h3>Optimization of fluid dynamics simulation</h3>
            <div class="card-meta">TU Munich • Spring 2025</div>
        </div>
        <p class="card-tags">
            <span class="tag">C++</span>
            <span class="tag">High-Performance-Computation</span>
        </p>
        <div id="fluidDynamicsDesc" style="display: none;">
            <p>
                This final project was part of the High-Performance Computing Praktikum at TUM. We worked on
                implementing a parallelized tsunami simulation, with a primary focus on single-core parallelism using
                SIMD operations. Our approach leveraged x86 architecture features such as vectorized addition and
                multiplication. Additionally, we addressed load imbalances present in the existing code to improve
                overall performance.
            </p>
            <div class="card-links">
                <a href="/assets/presentations/hpc_presentation.pdf" class="button">presentation</a>
                <a href="/assets/reports/hpc_report.pdf" class="button">report</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('mobiusDesc')">
        <div class="card-header">
            <h3>Efficient Möbius Computations on Multipermutations</h3>
            <div class="card-meta">Charles University • Autumn 2023 • Advisor: Vít Jelínek</div>
        </div>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Combinatorics</span>
            <span class="tag">Algorithms</span>
        </p>
        <div id="mobiusDesc" style="display: none;">
            <p>
                This Rust project efficiently computes the Möbius function for multipermutations. We model
                multipermutations within a poset to capture their ordering and interval structure, which are crucial for
                the recursive algorithm with memoization we employ. The recursive nature of the Möbius function makes it
                computationally challenging, so our focus is on achieving high efficiency. The Möbius function offers
                insights into permutation patterns which is a research interest of advisor Vít Jelínek.
            </p>
            <div class="card-links">
                <a href="https://github.com/benbencik/mobius_function" class="button">GitHub</a>
            </div>
        </div>
    </div>
    <div class="card" onclick="toggleDescription('gnnDesc')">
        <div class="card-header">
            <h3>Classification of magnetic phases by graph neural networks</h3>
            <div class="card-meta">Charles University • Spring 2023 • Advisor: Pavel Baláž</div>
        </div>
        <p class="card-tags">
            <span class="tag">PyTorch</span>
            <span class="tag">GNN</span>
            <span class="tag">Physics</span>
        </p>
        <div id="gnnDesc" style="display: none;">
            <p>
                This project, supported by the <a href="https://www.mff.cuni.cz/en/students/bc-mgr/sfg"
                    target="_blank">Student Faculty Grant</a>, explores the application of graph neural networks (GNNs)
                in physics. We encoded the magnetic configurations of the Ising model as graphs, where nodes represent
                spins and edges capture interactions. Using this model, we aimed to predict configurations with minimal
                energy. This problem is particularly interesting as it is <a href="https://arxiv.org/pdf/1302.5843"
                    target="_blank">known</a> to be NP-complete. We experimented with various GNN architectures using
                PyTorch and concluded with a report on our results, highlighting the most effective approach.
            </p>
            <div class="card-links">
                <a href="https://github.com/benbencik/sfg_gnn/" class="button">GitHub</a>
            </div>
        </div>
    </div>
</div>

<!-- ## Open Source Contributions

<div class="projects-section">
  <div class="card">
    <h3><a href="https://github.com/organization/ark-works" class="repo-link">Ark-works</a></h3>
    <div class="contribution-list">
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #123: Feature Implementation</a></div>
        <p>Added support for XYZ feature by implementing ABC algorithm, which improved performance by 25%.</p>
      </div>
      
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #456: Bug Fix</a></div>
        <p>Fixed critical authentication vulnerability by properly validating user input.</p>
      </div>
      
      <div class="contribution-item">
        <div class="contribution-title"><a href="#">Issue #789: Documentation</a></div>
        <p>Improved API documentation with examples and clearer explanations.</p>
      </div>
    </div>
  </div>
</div> -->
