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

    /* Open source contributions */
    .contribution-card {
        margin-bottom: 2rem;
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        background-color: var(--content-bg-color);
    }

    .repo-link {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: bold;
    }

    .contribution-list {
        margin-top: 1rem;
    }

    .contribution-item {
        margin-bottom: 1.5rem;
        padding-left: 1rem;
        border-left: 2px solid var(--border-color);
    }

    .contribution-title {
        margin-bottom: 0.5rem;
        font-weight: bold;
    }

    .contribution-title a {
        color: var(--primary-color);
        text-decoration: none;
    }

    /* .projects-section {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
        gap: 1.25rem;
    } */

    .project-card {
        border: 1px solid var(--border-color);
        border-radius: 8px;
        padding: 1rem;
        background: var(--content-bg-color);
        transition: transform 0.2s ease;
    }
 
    /* Overwrite to make wider */
    /* .page-content .wrapper {
        max-width: 900px;
    } */

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
</script>

## Hackathons

<div class="projects-section">
    <div class="card" onclick="toggleDescription('cryptoCachingDesc')">
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
            <div class="card-meta">EighenLayer Hacker House Berlin 2025 🇩🇪 <span class="project-award"></span></div>
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

## Misc

<div class="projects-section">
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


## University Projects 

<div class="projects-section">
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
