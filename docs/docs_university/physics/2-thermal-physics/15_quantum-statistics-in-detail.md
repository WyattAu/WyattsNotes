---
title: Quantum Statistics in Detail
tags:
  - Physics
  - University
---

### 15.1 Fermi--Dirac and Bose--Einstein Distributions

For non-interacting quantum particles:

$$\langle n_i \rangle = \frac{1}{e^{\beta(\epsilon_i - \mu)} \pm 1}$$

Where $+$ is for fermions (Fermi--Dirac) and $-$ for bosons (Bose--Einstein).

**Fermions** (half-integer spin): Pauli exclusion limits $\langle n_i \rangle \leq 1$.

**Bosons** (integer spin): No restriction on occupation number; $\langle n_i \rangle$ can diverge
when $\epsilon_i = \mu$.

### 15.2 The Fermi Gas

For a 3D gas of $N$ non-interacting fermions in volume $V$:

$$N = \sum_{\mathbf{k}} \frac{1}{e^{\beta(\hbar^2 k^2/2m - \mu)} + 1} \xrightarrow{\text{continuum} \frac{V}{(2\pi)^3}\int d^3k\, f(\epsilon_k)}$$

The **Fermi energy** at $T = 0$:

$$\epsilon_F = \frac{\hbar^2}{2m}(3\pi^2 n)^{2/3}$$

Where $n = N/V$ is the number density. The **Fermi temperature** is $T_F = \epsilon_F/k_B$.

At low temperature ($T \ll T_F$), the Sommerfeld expansion gives:

$$E = \frac{3}{5}N\epsilon_F\left[1 + \frac{5\pi^2}{12}\left(\frac{T}{T_F}\right)^2 + \cdots\right]$$

$$C_V = Nk_B\frac{\pi^2}{2}\frac{T}{T_F} + \cdots$$

The linear specific heat is a hallmark of degenerate Fermi systems.

### 15.3 The Bose Gas and Bose--Einstein Condensation

For bosons, the chemical potential must satisfy $\mu \leq \epsilon_0$ (ground state energy). When
$\mu \to \epsilon_0$A macroscopic fraction of particles condenses into the ground state.

The **critical temperature** for BEC in 3D:

$$T_c = \frac{2\pi\hbar^2}{mk_B}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}$$

Where $\zeta(3/2) \approx 2.612$.

Below $T_c$The condensate fraction is:

$$\frac{N_0}{N} = 1 - \left(\frac{T}{T_c}\right)^{3/2}$$

<details>
<summary>Worked Example 15.1: Fermi Energy of Copper</summary>

Copper has one conduction electron per atom, atomic mass $63.5$ g/mol, density $8.96$ g/cm$^3$.

$$n = \frac{8.96 \times 10^3 \text{ kg/m}^3}{63.5 \times 10^{-3} \text{ kg/mol} \times N_A = 1.41 \times 10^{29} \text{ m}^{-3} \times 6.022 \times 10^{23} = 8.49 \times 10^{28} \text{ m}^{-3}}$$

$$\epsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 \times 8.49 \times 10^{28})^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}} \times (2.52 \times 10^{30})^{2/3}$$

$$= \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 1.846 \times 10^{20}$$

$$= 6.11 \times 10^{-39} \times 1.846 \times 10^{20} = 1.13 \times 10^{-18} \text{ J}$$

$$T_F = \frac{1.13 \times 10^{-18}}{1.38 \times 10^{-23}} \approx 81\,900 \text{ K}$$

This is enormously higher than room temperature, confirming that conduction electrons in metals form
a highly degenerate Fermi gas.

</details>

<details>
<summary>Worked Example 15.2: BEC in a Trap</summary>

For $N = 10^6$ rubidium-87 atoms in a harmonic trap with frequency $\bar{\omega}/(2\pi) = 100$ Hz:

In a harmonic trap, the density of states is
$g(\epsilon) = \epsilon^2/(2\hbar^3\bar{\omega}^3)$Giving:

$$T_c = \frac{\hbar\bar{\omega}}{k_B}\left(\frac{6N}{\pi^2\zeta(3)}\right)^{1/3}$$

$$= \frac{1.055 \times 10^{-34} \times 2\pi \times 100}{1.38 \times 10^{-23}}\left(\frac{6 \times 10^6}{\pi^2 \times 1.202}\right)^{1/3}$$

$$= \frac{6.63 \times 10^{-32}}{1.38 \times 10^{-23}} \times (5.07 \times 10^5)^{1/3}$$

$$= 4.81 \times 10^{-9} \times 79.7 \approx 383 \text{ nK}$$

This is consistent with the 1995 Cornell--Wieman BEC experiment.

</details>

