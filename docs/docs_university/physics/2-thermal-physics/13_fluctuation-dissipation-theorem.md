---
title: Fluctuation-Dissipation Theorem
tags:
  - Physics
  - University
---

### 13.1 Linear Response Theory

The **fluctuation-dissipation theorem** (FDT) connects the response of a system to a small
perturbation with the spontaneous fluctuations of the system at equilibrium.

Consider a Hamiltonian $\mathcal{H}_0$ perturbed by a time-dependent field:

$$\mathcal{H}(t) = \mathcal{H}_0 - f(t)A$$

Where $A$ is an observable conjugate to the field $f(t)$. The change in $\langle A(t) \rangle$ to
first order in $f$ is:

$$\langle A(t) \rangle - \langle A \rangle_0 = \int_{-\infty}^{t} \chi_{AA}(t - t')\, f(t')\, dt'$$

Where the **response function** is:

$$\chi_{AA}(t) = \frac{i}{\hbar}\theta(t)\langle[A(t), A(0)]\rangle_0$$

### 13.2 Classical FDT

In the classical limit, the FDT takes a simpler form. The dynamic susceptibility
$\chi(\omega) = \chi'(\omega) + i\chi''(\omega)$ relates to the power spectrum $S(\omega)$ of
fluctuations:

$$S(\omega) = \frac{2k_B T}{\omega}\,\chi''(\omega)$$

For a harmonic oscillator with damping $\gamma$ and natural frequency $\omega_0$:

$$\chi''(\omega) = \frac{\gamma\omega}{(\omega_0^2 - \omega^2)^2 + \gamma^2\omega^2}$$

The fluctuation spectrum is Lorentzian, peaked at $\omega_0$.

### 13.3 Johnson--Nyquist Noise

The FDT predicts **thermal (Johnson--Nyquist) noise** in a resistor:

$$\langle V^2 \rangle = 4k_B T R \Delta f$$

Where $R$ is the resistance and $\Delta f$ is the bandwidth. This noise is fundamental — it arises
from thermal fluctuations of charge carriers and cannot be eliminated.

<details>
<summary>Worked Example 13.1: Johnson--Nyquist Noise Calculation</summary>

A $10$ k$\Omega$ resistor at room temperature ($T = 300$ K) measured with bandwidth $\Delta f = 1$
MHz:

$$\langle V^2 \rangle = 4 \times 1.38 \times 10^{-23} \times 300 \times 10^4 \times 10^6$$

$$= 4 \times 1.38 \times 10^{-23} \times 3 \times 10^{12}$$

$$= 1.66 \times 10^{-10} \text{ V}^2$$

$$V_{\text{rms} = \sqrt{1.66 \times 10^{-10}} \approx 1.29 \times 10^{-5} \text{ V} = 12.9 \text{  \mu\text{V}}}$$

This sets a fundamental limit on the sensitivity of electrical measurements.

</details>

<details>
<summary>Worked Example 13.2: Brownian Motion and Einstein Relation</summary>

The Einstein relation is a special case of the FDT for Brownian motion. The diffusion constant $D$
relates to the mobility $\mu$:

$$D = \mu k_B T$$

For a spherical particle of radius $r$ in a fluid with viscosity $\eta$:

$$\mu = \frac{1}{6\pi\eta r} \quad \text{(Stokes drag)}$$

So $D = k_B T/(6\pi\eta r)$.

For a $1$ $\mu$M diameter sphere in water ($\eta = 10^{-3}$ Pa$\cdot$S) at $T = 300$ K:

$$D = \frac{1.38 \times 10^{-23} \times 300}{6\pi \times 10^{-3} \times 0.5 \times 10^{-6}} = \frac{4.14 \times 10^{-21}}{9.42 \times 10^{-9}} \approx 4.39 \times 10^{-13} \text{ m}^2/\text{s}$$

The mean squared displacement in time $t$ is $\langle x^2 \rangle = 2Dt$. In 1 second:
$\sqrt{\langle x^2 \rangle} \approx 0.94$ $\mu$M.

</details>

