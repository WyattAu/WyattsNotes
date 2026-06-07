---
title: Problem Set
tags:
  - Physics
  - University
---

### Problem 1

Calculate the Fermi energy and Fermi temperature for sodium. Given: electron density
$n \approx 2.65 \times 10^{28}\,\mathrm{m}^{-3}$, $m_e = 9.109 \times 10^{-31}$ kg.

<details>
<summary>Solution</summary>

$$\varepsilon_F = \frac{\hbar^2}{2m_e}(3\pi^2 n)^{2/3}$$

$$= \frac{(1.055 \times 10^{-34})^2}{2 \times 9.109 \times 10^{-31}}(3\pi^2 \times 2.65 \times 10^{28})^{2/3}$$

$(3\pi^2 \times 2.65 \times 10^{28})^{1/3} = (7.85 \times 10^{29})^{1/3} \approx 9.23 \times 10^9$

$(3\pi^2 n)^{2/3} = (9.23 \times 10^9)^2 = 8.52 \times 10^{19}$

$\varepsilon_F = \frac{1.113 \times 10^{-68}}{1.822 \times 10^{-30}} \times 8.52 \times 10^{19} \approx 5.20 \times 10^{-19}\,\mathrm{J} \approx 3.25\,\mathrm{eV}$

$T_F = \varepsilon_F/k_B = 5.20 \times 10^{-19}/1.381 \times 10^{-23} \approx 37700\,\mathrm{K}$

</details>

### Problem 2

A 3D Bose gas of $N$ particles of mass $m$ is confined to volume $V$. Show that the heat capacity at
constant volume has a discontinuity at $T = T_c$ and find the jump.

<details>
<summary>Solution</summary>

Above $T_c$ (classical regime): $C_V = \frac{3}{2}Nk_B$.

Below $T_c$: $C_V = \frac{15}{4}Nk_B\,\zeta(5/2)/\zeta(3/2) \cdot (T/T_c)^{3/2}$.

At $T = T_c^-$:

$$C_V(T_c^-) = \frac{15}{4}Nk_B \cdot \frac{\zeta(5/2)}{\zeta(3/2)}$$

$\zeta(5/2) \approx 1.341$, $\zeta(3/2) \approx 2.612$:

$$C_V(T_c^-) = \frac{15}{4} \times \frac{1.341}{2.612}\,Nk_B \approx 1.926\,Nk_B$$

At $T = T_c^+$: $C_V = \frac{3}{2}Nk_B = 1.5\,Nk_B$.

The jump is $\Delta C_V = C_V(T_c^-) - C_V(T_c^+) \approx 0.426\,Nk_B$.

</details>

### Problem 3

Derive the virial expansion for a non-ideal gas in terms of the second virial coefficient
$B_2(T)$And show that $B_2(T)$ can be expressed in terms of the two-particle interaction potential
$V(r)$.

<details>
<summary>Solution</summary>

The pressure of a real gas is expanded as
$PV/(Nk_BT) = 1 + B_2(T)\,(N/V) + B_3(T)\,(N/V)^2 + \cdots$.

For a classical gas with pairwise interaction $V(r_{12})$:

$$B_2(T) = -\frac{1}{2V}\int d^3\mathbf{r}_1\,d^3\mathbf{r}_2\,\left[e^{-\beta V(r_{12})} - 1\right]$$

$$= -2\pi \int_0^\infty \left[e^{-\beta V(r)} - 1\right] r^2\, dr$$

For a hard-sphere gas ($V(r) = \infty$ for $r < d$, $V(r) = 0$ for $r > d$):

$$B_2 = -2\pi\int_0^d (-1)\,r^2\,dr = \frac{2\pi d^3}{3} = \frac{2\pi}{3}\left(\frac{d}{2}\right)^3 \cdot 8 = 4v_0$$

Where $v_0 = \pi d^3/6$ is the volume of one sphere. The van der Waals excluded volume parameter is
$b = 4Nv_0 = N B_2$.

</details>

### Problem 4

Show that the classical limit of the Fermi-Dirac distribution reproduces the Maxwell-Boltzmann
distribution, and derive the condition for the classical limit in terms of the density of states.

<details>
<summary>Solution</summary>

The Fermi-Dirac distribution is:

$$f_{\mathrm{FD}(\varepsilon) = \frac{1}{e^{\beta(\varepsilon - \mu)} + 1}}$$

The total number of particles is:

$$N = \int_0^\infty \frac{g(\varepsilon)}{e^{\beta(\varepsilon - \mu)} + 1}\, d\varepsilon$$

In the classical limit $e^{\beta(\varepsilon - \mu)} \gg 1$The $+1$ is negligible:

$$N \approx \int_0^\infty g(\varepsilon)\, e^{-\beta(\varepsilon - \mu)}\, d\varepsilon = e^{\beta\mu} \int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon$$

$$e^{\beta\mu} = \frac{N}{\int_0^\infty g(\varepsilon)\, e^{-\beta\varepsilon}\, d\varepsilon} = \frac{N\lambda_{\mathrm{th}^3}{V}}$$

The classical limit requires $e^{\beta\mu} \ll 1$I.e., $N\lambda_{\mathrm{th}^3/V \ll 1}$Or
equivalently, the average inter-particle spacing $(V/N)^{1/3}$ must be much larger than
$\lambda_{\mathrm{th}}$.

</details>

### Problem 5

Compute the partition function for a single quantum harmonic oscillator and verify that the average
energy is $\langle E \rangle = \hbar\omega(n_B + 1/2)$ where $n_B = 1/(e^{\beta\hbar\omega} - 1)$.

<details>
<summary>Solution</summary>

$$Z_{\mathrm{HO} = \sum_{n=0}^{\infty} e^{-\beta\hbar\omega(n+1/2)} = e^{-\beta\hbar\omega/2}\sum_{n=0}^{\infty}\left(e^{-\beta\hbar\omega}\right)^n = \frac{e^{-\beta\hbar\omega/2}}{1 - e^{-\beta\hbar\omega}}}$$

$$\langle E \rangle = -\frac{\partial \ln Z}{\partial \beta} = \frac{\hbar\omega}{2} + \frac{\hbar\omega\,e^{-\beta\hbar\omega}}{1 - e^{-\beta\hbar\omega}} = \frac{\hbar\omega}{2} + \frac{\hbar\omega}{e^{\beta\hbar\omega} - 1} = \hbar\omega\left(\frac{1}{2} + n_B\right)$$

At high $T$ ($\beta \to 0$): $\langle E \rangle \to k_BT$ (equipartition). At low $T$:
$\langle E \rangle \to \hbar\omega/2$ (zero-point energy).

</details>

