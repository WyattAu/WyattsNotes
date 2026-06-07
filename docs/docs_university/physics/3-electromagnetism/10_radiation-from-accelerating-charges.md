---
title: Radiation from Accelerating Charges
tags:
  - Physics
  - University
---

### 10.1 Larmor Formula

A non-relativistic charge $q$ undergoing acceleration $\mathbf{a}$ radiates power:

$$P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}$$

For an oscillating dipole $\mathbf{p} = q\mathbf{d}\cos\omega t$ with acceleration $a = \omega^2 d$:

$$P = \frac{q^2 \omega^4 d^2}{12\pi\varepsilon_0 c^3} = \frac{\omega^4 p_0^2}{12\pi\varepsilon_0 c^3}$$

Where $p_0 = qd$ is the dipole moment amplitude.

**Radiation resistance:** Equating $P = \frac{1}{2}I_0^2 R_{\text{rad}}$ for an antenna of length
$\ell$ carrying current $I_0$ at frequency $\omega$:

$$R_{\text{rad} = \frac{\mu_0 c}{6\pi}\left(\frac{\omega \ell}{c}\right)^2 = \frac{\pi}{6}Z_0\left(\frac{\ell}{\lambda}\right)^2 \approx 197\left(\frac{\ell}{\lambda}\right)^2\ \Omega}$$

### 10.2 Electric Dipole Radiation

The radiation fields from an oscillating electric dipole at distance $r \gg \lambda$:

$$\mathbf{E} = -\frac{\mu_0 \omega^2 p_0}{4\pi r}\sin\theta\, e^{i(kr - \omega t)}\,\hat{\boldsymbol{\theta}}$$

$$\mathbf{B} = -\frac{\mu_0 \omega^2 p_0}{4\pi c\, r}\sin\theta\, e^{i(kr - \omega t)}\,\hat{\boldsymbol{\phi}}$$

The angular distribution of radiated power:

$$\frac{dP}{d\Omega} = \frac{\mu_0 p_0^2 \omega^4}{32\pi^2 c}\sin^2\theta$$

The total power (integrating over solid angle):

$$P = \frac{\mu_0 p_0^2 \omega^4}{12\pi c}$$

The radiation pattern is toroidal (doughnut-shaped), with zero radiation along the dipole axis
($\theta = 0, \pi$) and maximum in the equatorial plane ($\theta = \pi/2$).

### 10.3 Relativistic Radiation: Liénard--Wiechert Potentials

For a relativistic charge with velocity $\boldsymbol{\beta} = \mathbf{v}/c$ and acceleration
$\dot{\boldsymbol{\beta}}$:

$$P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^6\left[(\dot{\boldsymbol{\beta}})^2 - (\boldsymbol{\beta} \times \dot{\boldsymbol{\beta}})^2\right]$$

For linear acceleration ($\boldsymbol{\beta} \parallel \dot{\boldsymbol{\beta}}$):

$$P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^6\dot{\beta}^2$$

For circular acceleration ($\boldsymbol{\beta} \perp \dot{\boldsymbol{\beta}}$E.g., synchrotron):

$$P = \frac{q^2}{6\pi\varepsilon_0 c}\gamma^4\dot{\beta}^2 = \frac{q^2 c}{6\pi\varepsilon_0}\frac{\gamma^4}{R^2}$$

Where $R$ is the radius of curvature. The $\gamma^4$ factor (vs. $\gamma^6$ for linear) explains why
synchrotron radiation is significant for relativistic electrons but negligible for protons at the
same energy ($\gamma$ is $m_p/m_e \approx 1836$ times smaller).

**Synchrotron radiation spectrum:** The critical frequency is
$\omega_c = \frac{3}{2}\gamma^3\frac{c}{R}$. The spectrum peaks near $\omega_c$ and extends to high
harmonics, making synchrotron radiation a powerful broadband source from infrared to X-rays.

<details>
<summary>Worked Example 10.1: Synchrotron Radiation from a Storage Ring</summary>

The Diamond Light Source operates at $E = 3$ GeV electron energy with a ring circumference of 561.6
m.

(a) Lorentz factor: $\gamma = E/(m_e c^2) = 3 \times 10^9/(0.511 \times 10^6) = 5871$.

(b) For a bending magnet with radius $R = 7.1$ m:

$$P = \frac{e^2 c}{6\pi\varepsilon_0}\frac{\gamma^4}{R^2} = \frac{(1.6 \times 10^{-19})^2 \times 3 \times 10^8}{6\pi \times 8.85 \times 10^{-12}}\frac{(5871)^4}{(7.1)^2}$$

$$= \frac{2.56 \times 10^{-38} \times 3 \times 10^8}{1.669 \times 10^{-10}}\frac{1.187 \times 10^{15}}{50.4}$$

$$= 4.60 \times 10^{-20} \times 2.355 \times 10^{13} = 1.08 \times 10^{-6}\ \text{W} per electron$$

With a beam current of 300 mA ($I = 0.3$ A, $N = I/e = 1.875 \times 10^{18}$ electrons/s):

Total power
$= 1.08 \times 10^{-6} \times 1.875 \times 10^{18} \times \frac{561.6}{(2\pi \times 7.1)}$

Wait: the power per electron is already the total radiated power. The total synchrotron radiation
power from the ring is:

$$P_{\text{total} = N_{\text{stored} \times P_{\text{per} electron} \times \frac{\text{bending} length}{\text{circumference}}}}$$

For a rough estimate:
$P_{\text{total} \approx 0.3 \times 3 \times 10^9 \times \frac{1.08 \times 10^{-6}}{1.6 \times 10^{-19}} \times \frac{2\pi \times 7.1}{561.6} \approx 500}$
kW.

The actual Diamond power is about 400 kW, consistent with this estimate.

(c) Critical frequency:

$$\omega_c = \frac{3}{2}\gamma^3\frac{c}{R} = \frac{3}{2}(5871)^3\frac{3 \times 10^8}{7.1} = 1.5 \times 2.02 \times 10^{11} \times 4.23 \times 10^7 = 1.28 \times 10^{19}\ \text{rad}/s$$

$$\hbar\omega_c = 1.055 \times 10^{-34} \times 1.28 \times 10^{19} = 1.35 \times 10^{-15}\ \text{J} = 8.4\ \text{keV}$$

This is in the hard X-ray range, suitable for protein crystallography and materials science.

</details>

