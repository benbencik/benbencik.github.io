---
layout: page
permalink: /research/
title: research
---


### Memory-query Tradeoffs for Property Testing

Project done as part of the DIMACS [REU program](https://reu.dimacs.rutgers.edu/) at Rutgers University 🇺🇸 on Summer 2024.

![REU](/assets/images/DIMACS_REU_2024.jpg)

**Project description:** Property testing is a natural notion of approximation for decision problems, where given a property (or decision), the task is to distinguish whether a given instance has this property or is "far" from any instance having the property. Such tasks are widely used in various areas of TCS, such as coding theory, hardness of approximation, and graph algorithms. In this project, we will focus on property testing on graphs, and explore the impact of memory constraints on the complexity of property testing. One of the main measures of complexity for a property testing algorithm is its query complexity, which is the maximum number of input elements queried to determine whether the graph satisfies a given property.
    
<div class="button-container">
  <a href="http://reu.dimacs.rutgers.edu/~bb921/" class="button">Project Page</a>
  <a href="/assets/presentations/reu_presentation.pdf" class="button">REU Presentation</a>
</div>

<br>

---

<br>

### Reducing Polynomial Degree in PlonK zkSNARK

This project was part of my bachelor thesis. The thesis provides a comprehensive description of all rounds of the prover protocol, along with an introduction to the necessary primitives, such as elliptic curve cryptography and commitment schemes. A portion of the thesis explores the possibility of optimizing this protocol by reducing the degree of the polynomials used. This optimization takes place during the arithmetization phase, where we focus on improving the efficiency of padding before performing the FFT. Our work has led to slight performance improvements in the [Rust-based implementation by ZK Garage](https://github.com/ZK-Garage/plonk).

<div class="button-container">
  <a href="https://dspace.cuni.cz/bitstream/handle/20.500.11956/192912/130401356.pdf?sequence=1&isAllowed=y" class="button">Thesis</a>
  <a href="https://github.com/benbencik/plonk-polynomial-degree-reduction" class="button">GitHub (Optimization Implementation)</a>
  <a href="/assets/images/plonk-prover-diagram.png" class="button">Plonk Prover Diagram</a>
</div>