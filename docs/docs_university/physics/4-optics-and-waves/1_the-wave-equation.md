---
title: The Wave Equation
tags:
  - Physics
  - University
---

### 1.1 Derivation from Maxwell's Equations

In vacuum, with no sources ($\rho = 0$, $\mathbf{J} = \mathbf{0}$), Maxwell's equations give:

$$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E} = -\nabla^2 \mathbf{E}$$

From Faraday's law: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$So:

$$\nabla \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Hence:

$$\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

This is the **electromagnetic wave equation** with wave speed $c = 1/\sqrt{\mu_0 \varepsilon_0}$.

The same equation holds for $\mathbf{B}$:

$$\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}$$

### 1.2 General Solutions

The one-dimensional wave equation:

$$\frac{\partial^2 u}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 u}{\partial t^2}$$

Has the general solution (d'Alembert’s solution):

$$u(x, t) = f(x - vt) + g(x + vt)$$

Where $f$ is a wave travelling in the $+x$ direction and $g$ in the $-x$ direction.

**Proof.** Substitute $u = f(x - vt)$. Let $\xi = x - vt$. Then $\partial u/\partial x = f'(\xi)$
$\partial^2 u/\partial x^2 = f''(\xi)$, $\partial u/\partial t = -vf'(\xi)$
$\partial^2 u/\partial t^2 = v^2 f''(\xi)$. The wave equation gives $f'' = (v^2/v^2)f''$Which Is
identically satisfied. The same holds for $g(x + vt)$. By linearity, the sum is also a solution.
$\blacksquare$

<details>
<summary>Worked Example: Verifying a wave solution</summary>

**Problem.** A string under tension has the wave equation
$\partial^2 y/\partial t^2 = 100\,\partial^2 y/\partial x^2$. Verify that
$y(x,t) = 0.03\sin(5x - 50t)$ is a solution. Find the wave speed, wavelength, frequency, and
propagation direction.

**Solution.** The wave speed is $v = \sqrt{100} = 10$ m/s. Comparing with the standard form
$y = A\sin(kx - \omega t)$: $A = 0.03$ m, $k = 5$ rad/m, $\omega = 50$ rad/s.

Verification: $\partial^2 y/\partial x^2 = -25 \times 0.03\sin(5x - 50t)$ and
$\partial^2 y/\partial t^2 = -2500 \times 0.03\sin(5x - 50t)$So
$\partial^2 y/\partial t^2 = 100 \times \partial^2 y/\partial x^2$. $\checkmark$

Wavelength: $\lambda = 2\pi/k = 2\pi/5 \approx 1.26$ m. Frequency:
$f = \omega/(2\pi) = 50/(2\pi) \approx 7.96$ Hz. Direction: the argument $5x - 50t$ indicates
propagation in the $+x$ direction.

</details>

### 1.3 Complex Representation

It is convenient to write monochromatic waves as:

$$\mathbf{E}(\mathbf{r}, t) = \mathrm{Re}\left[\tilde{\mathbf{E}}\, e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}\right]$$

Where $\tilde{\mathbf{E}}$ is the complex amplitude, $\mathbf{k}$ is the wave vector, and $\omega$
is The angular frequency. The dispersion relation is $\omega = ck = c|\mathbf{k}|$.

The wave vector satisfies $|\mathbf{k}| = 2\pi/\lambda$ and $\omega = 2\pi\nu$.

When computing intensities, the complex representation simplifies the algebra. For a plane wave with
Complex amplitude $\tilde{E}$:

$$I = \frac{1}{2}c\varepsilon_0 |\tilde{E}|^2$$

<details>
<summary>Worked Example: Complex amplitude and intensity</summary>

**Problem.** A plane wave propagating in the $+z$ direction has complex amplitude
$\tilde{\mathbf{E}} = (10 + 5i)\hat{\mathbf{x}}$ V/m in vacuum. Find the real electric field, the
Intensity, and the phase of the wave relative to $\cos(kz - \omega t)$.

**Solution.** $|\tilde{E}| = \sqrt{10^2 + 5^2} = \sqrt{125} \approx 11.18$ V/m. Phase:
$\phi = \arctan(5/10) = 26.57°$.

Real field: $\mathbf{E}(z,t) = 11.18\cos(kz - \omega t + 26.57°)\,\hat{\mathbf{x}}$ V/m.

Intensity:
$I = \frac{1}{2}c\varepsilon_0 |\tilde{E}|^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(125) = 0.166$
W/m$^2$.

</details>

### 1.4 Standing Waves

When two waves of equal amplitude and frequency travel in opposite directions, their superposition
Produces a **standing wave**. Consider:

$$u_1 = A\sin(kx - \omega t), \quad u_2 = A\sin(kx + \omega t)$$

Using the identity $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$$u(x,t) = 2A\sin(kx)\cos(\omega t)$$

This is a standing wave with the following properties:

- **Nodes** (points of zero displacement): $kx = m\pi$I.e., $x = m\lambda/2$ for
  $m = 0, 1, 2, \ldots$
- **Antinodes** (points of maximum displacement): $kx = (m + 1/2)\pi$I.e., $x = (2m+1)\lambda/4$.
- All points between two nodes oscillate **in phase** (or in antiphase with adjacent segments).
- The standing wave does not transport energy in either direction.

**Standing waves on a string of length $L$ fixed at both ends.** The boundary conditions
$u(0,t) = 0$ And $u(L,t) = 0$ require $\sin(kL) = 0$So:

$$k_n L = n\pi \implies \lambda_n = \frac{2L}{n}, \quad f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

The allowed frequencies are integer multiples of the **fundamental frequency** $f_1 = v/(2L)$. The
general solution is a superposition of all normal modes:

$$u(x,t) = \sum_{n=1}^{\infty} \left(A_n \sin k_n x \cos \omega_n t + B_n \sin k_n x \sin \omega_n t\right)$$

**Standing waves on a string fixed at one end ($x = 0$) and free at the other ($x = L$).** The free
end requires $\partial u/\partial x|_{x=L} = 0$Giving $\cos(kL) = 0$So:

$$k_n L = (n + 1/2)\pi \implies f_n = \frac{(2n+1)v}{4L}, \quad n = 0, 1, 2, \ldots$$

Only odd harmonics are present. A pipe open at one end and closed at the other behaves analogously
For sound waves.

<details>
<summary>Worked Example: Guitar string harmonics</summary>

**Problem.** A guitar string of length $L = 0.65$ m is fixed at both ends. The fundamental frequency
Is $f_1 = 330$ Hz (the note E4). Find the wave speed, the frequency of the third harmonic, and the
Positions of the nodes for the third harmonic.

**Solution.** Wave speed: $v = 2Lf_1 = 2 \times 0.65 \times 330 = 429$ m/s.

Third harmonic: $f_3 = 3f_1 = 990$ Hz. Wavelength: $\lambda_3 = 2L/3 = 0.433$ m.

Nodes at $x = m\lambda_3/2 = m(0.433/2) = 0.217m$ for $m = 0, 1, 2, 3$. Positions:
$x = 0, 0.217, 0.433, 0.650$ m (the endpoints and two interior nodes).

</details>

### 1.5 Energy Transport by Waves

For a transverse wave on a string of linear mass density $\mu$ under tension $T$With
$v = \sqrt{T/\mu}$:

**Kinetic energy** of an element $dx$:

$$dK = \frac{1}{2}\mu\,dx\left(\frac{\partial u}{\partial t}\right)^2$$

**Potential energy** (from stretching the string):

$$dU = \frac{1}{2}T\,dx\left(\frac{\partial u}{\partial x}\right)^2$$

**Proof that kinetic and potential energies are equal.** For a rightward-travelling wave
$u = f(x - vt)$:

$$\frac{\partial u}{\partial t} = -vf'(x - vt) = -v\frac{\partial u}{\partial x}$$

Since $v^2 = T/\mu$ (i.e., $T = \mu v^2$):

$$dU = \frac{1}{2}\mu v^2\left(\frac{\partial u}{\partial x}\right)^2 = \frac{1}{2}\mu\left(\frac{\partial u}{\partial t}\right)^2 = dK \quad \blacksquare$$

The total energy density (energy per unit length) is:

$$\frac{dE}{dx} = dK + dU = \mu\left(\frac{\partial u}{\partial t}\right)^2$$

**Energy flux (power):** The rate of energy transport past a point is:

$$P = -T\frac{\partial u}{\partial x}\frac{\partial u}{\partial t} = \mu v\left(\frac{\partial u}{\partial t}\right)^2$$

For a sinusoidal wave $u = A\sin(kx - \omega t)$The time-averaged power is:

$$\langle P \rangle = \frac{1}{2}\mu v \omega^2 A^2$$

The **intensity** (power per unit area, generalising to 3D) is:

$$I = \frac{1}{2}\rho v \omega^2 A^2$$

Where $\rho$ is the mass density of the medium.

<details>
<summary>Worked Example: Wave energy and power on a string</summary>

**Problem.** A steel wire of diameter 1.0 mm and density $7800$ kg/m$^3$ is under 500 N of tension.
A sinusoidal wave of amplitude 5.0 mm and frequency 200 Hz propagates along it. Find (a) the wave
Speed, (b) the average power, and (c) the intensity (power per unit cross-sectional area).

**Solution.** Cross-sectional area:
$A_{\mathrm{wire} = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}}$ m$^2$. Linear density:
$\mu = \rho A_{\mathrm{wire} = 7800 \times 7.85 \times 10^{-7} = 6.12 \times 10^{-3}}$ kg/m.

(a) $v = \sqrt{T/\mu} = \sqrt{500/(6.12 \times 10^{-3})} = \sqrt{8.17 \times 10^4} = 286$ m/s.

(b) $\omega = 2\pi \times 200 = 1257$ rad/s.
$\langle P \rangle = \frac{1}{2}\mu v \omega^2 A^2 = \frac{1}{2}(6.12 \times 10^{-3})(286)(1257)^2(5.0 \times 10^{-3})^2$
$= \frac{1}{2}(6.12 \times 10^{-3})(286)(1.58 \times 10^6)(2.5 \times 10^{-5}) = 34.7$ W.

(c) Intensity:
$I = \langle P \rangle/A_{\mathrm{wire} = 34.7/(7.85 \times 10^{-7}) = 4.42 \times 10^7}$ W/m$^2$.

</details>

### 1.6 Wave Packets and Group Velocity

A real wave is never perfectly monochromatic. A **wave packet** is a superposition of plane waves
With a narrow range of frequencies and wave vectors:

$$\psi(x,t) = \int_{-\infty}^{\infty} A(k)\, e^{i(kx - \omega(k)t)}\,dk$$

Where $A(k)$ is the spectral amplitude, peaked around $k_0$ with width $\Delta k$.

Expanding the dispersion relation around $k_0$:

$$\omega(k) \approx \omega_0 + v_g(k - k_0) + \frac{1}{2}\alpha(k - k_0)^2$$

Where $v_g = \left.d\omega/dk\right|_{k_0}$ is the **group velocity** and $\alpha = d^2\omega/dk^2$
is the **group velocity dispersion** (GVD).

Substituting and carrying out the Gaussian integral (for a Gaussian envelope $A(k)$):

$$|\psi(x,t)|^2 \propto \exp\left(-\frac{(x - v_g t)^2}{2\sigma_x^2(t)}\right)$$

Where $\sigma_x(t) = \sigma_x(0)\sqrt{1 + (\alpha t / 2\sigma_x^2(0))^2}$.

The envelope moves at $v_g$While individual wave crests move at the **phase velocity**
$v_p = \omega/k$. The packet **broadens** over time due to GVD.

- In a **non-dispersive** medium ($\omega \propto k$So $v_g = v_p$): the packet propagates without
  distortion.
- In a **normally dispersive** medium ($d^2\omega/dk^2 \gt 0$): $v_g \lt v_p$ and the packet
  broadens.

**Relation to the wave equation.** The 1D wave equation
$\partial^2 u/\partial t^2 = v^2\partial^2 u/\partial x^2$ Has dispersion relation
$\omega = \pm vk$Giving $v_g = v_p = v$ — it is non-dispersive.

<details>
<summary>Worked Example: Group velocity in a dispersive medium</summary>

**Problem.** A dispersive medium has the dispersion relation $\omega = \alpha k^2$ with
$\alpha = 5.0 \times 10^3$ m$^2$/s. For a wave packet centred at $k_0 = 200$ rad/m, Find (a) the
phase velocity, (b) the group velocity, and (c) the time for the packet width to Double, given an
initial width $\sigma_0 = 0.01$ m.

**Solution.**

(a) Phase velocity: $v_p = \omega/k = \alpha k_0 = 5.0 \times 10^3 \times 200 = 1.0 \times 10^6$
m/s.

(b) Group velocity:
$v_g = d\omega/dk = 2\alpha k_0 = 2 \times 5.0 \times 10^3 \times 200 = 2.0 \times 10^6$ m/s.

(c) GVD: $\alpha_{\mathrm{GVD} = d^2\omega/dk^2 = 2\alpha = 1.0 \times 10^4}$ m$^2$/s. The packet
width doubles when $1 + (\alpha_{\mathrm{GVD}\, t / 2\sigma_0^2)^2 = 4}$:
$\alpha_{\mathrm{GVD}\, t / 2\sigma_0^2 = \sqrt{3}}$
$t = 2\sigma_0^2\sqrt{3}/\alpha_{\mathrm{GVD} = 2(10^{-4})(1.732)/(10^4) = 3.46 \times 10^{-8}}$ s
$= 34.6$ ns.

</details>

:::caution Common Pitfall The group velocity $v_g = d\omega/dk$ describes the motion of the wave
packet envelope and equals The energy transport velocity in lossless media. However, it is only
equal to the signal velocity In regions of weak, normal dispersion. Near absorption resonances,
$v_g$ can exceed $c$ or become Negative — this does not violate causality, since the true signal
velocity (front velocity) never Exceeds $c$.



:::
