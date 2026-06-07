---
title: WKB Approximation
tags:
  - Physics
  - University
---

### 13.1 The WKB Method

The WKB (Wentzel--Kramers--Brillouin) method provides approximate solutions to the one-dimensional
Schrodinger equation when the potential varies slowly compared to the de Broglie wavelength.

The ansatz $\psi(x) = A(x)e^{iS(x)/\hbar}$ substituted into
$-\frac{\hbar^2}{2m}\psi'' + V\psi = E\psi$ gives, to leading order in $\hbar$:

$$S(x) = \pm\int^x p(x')\,dx', \quad p(x) = \sqrt{2m[E - V(x)]}$$

The WKB wavefunctions:

$$\psi(x) \approx \frac{C}{\sqrt{p(x)}}\exp\!\left(\pm\frac{i}{\hbar}\int^x p(x')\,dx'\right) \quad \text{(classically allowed,  E > V\text{)}}$$

$$\psi(x) \approx \frac{C}{\sqrt{|p(x)|}}\exp\!\left(\pm\frac{1}{\hbar}\int^x |p(x')|\,dx'\right) \quad \text{(classically forbidden,  E < V\text{)}}$$

### 13.2 Connection Formulas

At a classical turning point ($E = V(x_0)$), the WKB approximation breaks down. The Airy function
connects the oscillating and decaying solutions:

$$\frac{2}{\sqrt{p(x)}}\cos\!\left(\frac{1}{\hbar}\int_x^{x_0} p(x')\,dx' - \frac{\pi}{4}\right) \longleftrightarrow \frac{1}{\sqrt{|p(x)|}}\exp\!\left(-\frac{1}{\hbar}\int_{x_0}^x |p(x')|\,dx'\right)$$

### 13.3 Bohr--Sommerfeld Quantisation

The WKB quantisation condition for a bound state in a potential well with turning points $a$ and
$b$:

$$\int_a^b p(x)\,dx = \left(n + \frac{1}{2}\right)\pi\hbar, \quad n = 0, 1, 2, \ldots$$

The factor of $1/2$ (Maslov index) accounts for the phase loss at each turning point.

**Application: Harmonic oscillator.** $V(x) = \frac{1}{2}m\omega^2 x^2$. Turning points at
$x = \pm\sqrt{2E/(m\omega^2)}$.

$$\int_{-A}^{A}\sqrt{2mE - m^2\omega^2 x^2}\,dx = \frac{\pi E}{\omega} = \left(n + \frac{1}{2}\right)\pi\hbar$$

$$E_n = \left(n + \frac{1}{2}\right)\hbar\omega$$

The WKB gives the exact result for the harmonic oscillator --- a fortunate coincidence due to the
quadratic potential.

**Application: Power-law potential.** For $V(x) = V_0|x/a|^\alpha$:

$$E_n \propto \left(n + \frac{1}{2}\right)^{2\alpha/(\alpha+2)}$$

<details>
<summary>Worked Example 13.1: WKB Tunnelling Through a Barrier</summary>

For a potential barrier $V(x) = V_0(1 - x^2/a^2)$ for $|x| < a$With $E < V_0$The WKB transmission
probability is:

$$T \approx \exp\!\left(-\frac{2}{\hbar}\int_{-a_0}^{a_0}\sqrt{2m(V_0(1 - x^2/a^2) - E)}\,dx\right)$$

Where $a_0 = a\sqrt{1 - E/V_0}$ is the classical turning point.

$$T \approx \exp\!\left(-\frac{2}{\hbar}\sqrt{2mV_0}\int_{-a_0}^{a_0}\sqrt{1 - E/V_0 - x^2/a^2}\,dx\right)$$

$$= \exp\!\left(-\frac{2}{\hbar}\sqrt{2mV_0}\cdot\frac{\pi a^2}{2a}(1 - E/V_0)\right)$$

$$= \exp\!\left(-\frac{\pi a}{\hbar}\sqrt{2mV_0}\left(1 - \frac{E}{V_0}\right)\right)$$

For alpha decay ($V_0 \approx 25$ MeV, $a \approx 30$ fm, $E = 5$ MeV, $m = 4 \times 931.5$
MeV/$c^2$):

$$\frac{\pi a}{\hbar c}\sqrt{2mc^2 V_0}\left(1 - \frac{E}{V_0}\right) = \frac{\pi \times 30\,\text{fm}{197\,\text{MeV}\cdot\text{fm}\sqrt{2 \times 3726 \times 25}\times 0.8}}$$

$$= 0.479 \times 432.6 \times 0.8 = 165.7$$

$$T \approx e^{-165.7} \approx 5 \times 10^{-73}$$

This extremely small probability explains the enormously long half-lives of alpha-emitting nuclei
($\sim 10^9$ years for $^{238}$U). The Geiger--Nuttall law relates $\log T_{1/2}$ to
$E^{-1/2}$Consistent with the WKB exponential dependence.

</details>

