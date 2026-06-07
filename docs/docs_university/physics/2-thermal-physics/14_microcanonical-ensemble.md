---
title: Microcanonical Ensemble
tags:
  - Physics
  - University
---

The **microcanonical ensemble** describes an isolated system with fixed total energy $E$Particle
number $N$And volume $V$.

### 14.1 Density of States

The number of microstates with energy between $E$ and $E + \delta E$ is:

$$\Omega(E, V, N) = \int_{E < \mathcal{H} < E + \delta E} \frac{d^{3N}q\, d^{3N}p}{N!h^{3N}}$$

The **entropy** (Boltzmann entropy):

$$S(E, V, N) = k_B \ln \Omega(E, V, N)$$

The **temperature** is defined via:

$$\frac{1}{T} = \frac{\partial S}{\partial E}$$

### 14.2 The Ideal Gas in the Microcanonical Ensemble

For $N$ non-interacting particles in volume $V$ with total energy $E$:

$$\Omega = \frac{V^N}{N!}\frac{(2\pi m E)^{3N/2}}{E\, \Gamma(3N/2)\, h^{3N}} \cdot \frac{\delta E}{E}$$

Using Stirling's approximation and the large-argument expansion of the Gamma function:

$$S = Nk_B\left[\ln\!\left(\frac{V}{N}\right) + \frac{3}{2}\ln\!\left(\frac{4\pi m E}{3Nh^2}\right) + \frac{5}{2}\right]$$

This is the **Sackur--Tetrode equation**, identical to the canonical ensemble result (as expected by
ensemble equivalence).

From $1/T = \partial S/\partial E$:

$$E = \frac{3}{2}Nk_B T$$

Reproducing the equipartition theorem.

### 14.3 Classical Virial Theorem

For a system with Hamiltonian
$\mathcal{H} = \sum_i p_i^2/(2m_i) + U(\mathbf{r}_1, \ldots, \mathbf{r}_N)$:

$$\left\langle \sum_i \mathbf{p}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{p}_i} \right\rangle = 3Nk_B T$$

$$\left\langle \sum_i \mathbf{r}_i \cdot \frac{\partial \mathcal{H}}{\partial \mathbf{r}_i} \right\rangle = -3Nk_B T$$

For a power-law potential $U \propto r^n$This gives:

$$\langle K \rangle = \frac{n}{2}\langle U \rangle$$

(For the harmonic oscillator, $n = 2$: $\langle K \rangle = \langle U \rangle$.)

<details>
<summary>Worked Example 14.1: Density of States for $N$ Harmonic Oscillators</summary>

For $N$ independent harmonic oscillators with frequency $\omega$Total energy $E$:

$$\Omega(E) = \frac{E^{N-1}}{(N-1)!\,(\hbar\omega)^N}$$

Proof: The number of ways to distribute $E/(\hbar\omega)$ energy quanta among $N$ oscillators is the
stars-and-bars problem:

$$\Omega = \binom{n + N - 1}{N - 1} = \frac{(n+N-1)!}{n!(N-1)!}$$

Where $n = E/(\hbar\omega)$. For large $n$ using Stirling's approximation:

$$S = k_B\left[(n+N)\ln(n+N) - n\ln n - N\ln N\right]$$

$$\frac{1}{T} = \frac{\partial S}{\partial E} = \frac{k_B}{\hbar\omega}\left[\ln(n+N) - \ln n\right] = \frac{k_B}{\hbar\omega}\ln\!\left(1 + \frac{N}{n}\right)$$

At high $T$ ($n \gg N$): $E \approx Nk_B T$ (equipartition, each oscillator has energy $k_B T$).

</details>

