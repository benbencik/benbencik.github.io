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

    /* Misc projects grid */
    .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
        gap: 1.5rem;
    }

    .mini-project {
        padding: 1.5rem;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        background-color: var(--content-bg-color);
        transition: transform 0.2s ease;
    }

    .mini-project:hover {
        transform: translateY(-5px);
    }

    .mini-link {
        display: inline-block;
        margin-top: 1rem;
        color: var(--primary-color);
        text-decoration: none;
        font-family: monospace;
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
</script>

<div class="projects-section">
    <h2>Hackathons</h2>
    <div class="card" onclick="toggleDescription('cryptoCachingDesc')">
        <div class="card-header">
            <h3>CryptoCaching</h3>
            <div class="card-meta">EPFL Hackathon 2025 🇨🇭 • <span class="project-award">🥉 3rd Place</span></div>
        </div>
        <p class="card-tags">
            <span class="tag">Tokenization</span>
            <span class="tag">P2P</span>
            <span class="tag">Blockchain</span>
        </p>
        <div id="cryptoCachingDesc" style="display: none;">
            <p>A blockchain-based alternative to traditional GeoCaching. We solved the admin maintenance problem by
                creating
                a P2P network to claim and verify cache discoveries. Each cache contains an NFC tag reprogrammed by
                users,
                with a token passing mechanism implemented on Hedera to prevent false claims of unvisited caches.</p>
            <div class="card-links">
                <a href="https://pitch.com/v/bsa-hackathon-2025-epfl-d2j4ds" class="button">Pitch Presentation</a>
                <a href="/assets/presentations/epfl_bsa_hackathon_2025.pdf" class="button">PDF Presentation</a>
            </div>
        </div>
    </div>
</div>

<div class="projects-section">
    <h2>Misc</h2>
    <div class="card" onclick="toggleDescription('ecArithmeticDesc')">
        <div class="card-header">
            <h3>Elliptic Curve Arithmetic</h3>
            <div class="card-meta">EC arithmetic based on blog: <a
                    href="https://andrea.corbellini.name/2015/05/17/elliptic-curve-cryptography-a-gentle-introduction/">Elliptic
                    Curve Cryptography: A Gentle Introduction</a></div>
        </div>
        <p class="card-tags">
            <span class="tag">Rust</span>
            <span class="tag">Elliptic curves</span>
            <span class="tag">Cryptography</span>
        </p>
        <div id="ecArithmeticDesc" style="display: none;">
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

<div class="projects-section">
    <h2>University Projects</h2>
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