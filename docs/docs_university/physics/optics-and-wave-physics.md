---
title: Optics and Wave Physics
description:
  "Comprehensive university-level notes on optics and wave physics covering the wave equation
  derived from Maxwell's equations, electromagnetic wave propagation, interference, diffraction
  theory, polarization, geometric optics, Fourier optics, coherence theory, laser physics, Fresnel
  equations, dispersion, optical fibres, nonlinear optics, and computational imaging."
date: 2026-04-24T00:00:00.000Z
tags:
  - Physics
  - University
categories:
  - Physics
slug: optics-and-wave-physics
---

## 1. The Wave Equation

### 1.1 Derivation from Maxwell's Equations

In vacuum, with no sources ($\rho = 0$$\mathbf{J} = \mathbf{0}$), Maxwell's equations give:

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

Has the general solution (d'Alembert's solution):

$$u(x, t) = f(x - vt) + g(x + vt)$$

Where $f$ is a wave travelling in the $+x$ direction and $g$ in the $-x$ direction.

**Proof.** Substitute $u = f(x - vt)$. Let $\xi = x - vt$. Then $\partial u/\partial x = f'(\xi)$
$\partial^2 u/\partial x^2 = f''(\xi)$$\partial u/\partial t = -vf'(\xi)$
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

$$\mathbf{E}(\mathbf{r}, t) = \mathrm{Re\left[\tilde{\mathbf{E}}\, e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}\right]$$

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
$A_{\mathrm{wire} = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$. Linear density:
$\mu = \rho A_{\mathrm{wire} = 7800 \times 7.85 \times 10^{-7} = 6.12 \times 10^{-3}$ kg/m.

(a) $v = \sqrt{T/\mu} = \sqrt{500/(6.12 \times 10^{-3})} = \sqrt{8.17 \times 10^4} = 286$ m/s.

(b) $\omega = 2\pi \times 200 = 1257$ rad/s.
$\langle P \rangle = \frac{1}{2}\mu v \omega^2 A^2 = \frac{1}{2}(6.12 \times 10^{-3})(286)(1257)^2(5.0 \times 10^{-3})^2$
$= \frac{1}{2}(6.12 \times 10^{-3})(286)(1.58 \times 10^6)(2.5 \times 10^{-5}) = 34.7$ W.

(c) Intensity:
$I = \langle P \rangle/A_{\mathrm{wire} = 34.7/(7.85 \times 10^{-7}) = 4.42 \times 10^7$ W/m$^2$.

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

(c) GVD: $\alpha_{\mathrm{GVD} = d^2\omega/dk^2 = 2\alpha = 1.0 \times 10^4$ m$^2$/s. The packet
width doubles when $1 + (\alpha_{\mathrm{GVD}\, t / 2\sigma_0^2)^2 = 4$:
$\alpha_{\mathrm{GVD}\, t / 2\sigma_0^2 = \sqrt{3}$
$t = 2\sigma_0^2\sqrt{3}/\alpha_{\mathrm{GVD} = 2(10^{-4})(1.732)/(10^4) = 3.46 \times 10^{-8}$ s
$= 34.6$ ns.

</details>

:::caution Common Pitfall The group velocity $v_g = d\omega/dk$ describes the motion of the wave
packet envelope and equals The energy transport velocity in lossless media. However, it is only
equal to the signal velocity In regions of weak, normal dispersion. Near absorption resonances,
$v_g$ can exceed $c$ or become Negative — this does not violate causality, since the true signal
velocity (front velocity) never Exceeds $c$. :::

## 2. Electromagnetic Waves

### 2.1 Properties of EM Waves

From Maxwell's equations, the following properties hold for plane EM waves:

1. **Transversality:** $\mathbf{E}$ and $\mathbf{B}$ are perpendicular to $\mathbf{k}$ and to each
   other.
2. **Orthogonality:** $\mathbf{E} \perp \mathbf{B}$And $|\mathbf{E}| = c|\mathbf{B}|$.
3. **In-phase:** $\mathbf{E}$ and $\mathbf{B}$ oscillate in phase.
4. **Dispersion relation:** $\omega = ck$ in vacuum.

**Proof of transversality.** For a plane wave
$\mathbf{E} = \mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}$ Gauss's law gives
$i\mathbf{k}\cdot\mathbf{E}_0 = 0$So $\mathbf{k} \perp \mathbf{E}_0$. Similarly From
$\nabla \cdot \mathbf{B} = 0$: $\mathbf{k} \perp \mathbf{B}_0$. $\blacksquare$

**Proof of $|\mathbf{E}| = c|\mathbf{B}|$.** From Faraday's law for a plane wave:
$\mathbf{k} \times \mathbf{E}_0 = \omega\mathbf{B}_0$. Taking magnitudes: $kE_0 = \omega B_0$So
$E_0/B_0 = \omega/k = c$. $\blacksquare$

<details>
<summary>Worked Example: Plane wave fields and intensity</summary>

**Problem.** A plane wave in vacuum has
$\mathbf{E} = (20\hat{\mathbf{x}} + 30\hat{\mathbf{y}})\cos(kz - \omega t)$ V/m with $\lambda = 500$
nm. Find $\mathbf{B}$The intensity, and describe the polarisation state.

**Solution.** $|\mathbf{E}_0| = \sqrt{20^2 + 30^2} = \sqrt{1300} \approx 36.1$ V/m.
$B_0 = E_0/c = 36.1/(3 \times 10^8) = 1.20 \times 10^{-7}$ T.

Since $\mathbf{k} = k\hat{\mathbf{z}}$ and $\mathbf{B}_0 = \hat{\mathbf{k}} \times \mathbf{E}_0/c$:
$\mathbf{B} = (-20\hat{\mathbf{y}} + 30\hat{\mathbf{x}})B_0/E_0 \cdot \cos(kz - \omega t)/c$
$= (30\hat{\mathbf{x}} - 20\hat{\mathbf{y}})(1/c)\cos(kz - \omega t)$ T.

Intensity:
$I = \frac{1}{2}c\varepsilon_0 E_0^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(1300) = 1.73$
W/m$^2$.

Polarisation: $\mathbf{E}_0$ has components along $\hat{\mathbf{x}}$ and $\hat{\mathbf{y}}$ with a
Constant phase relationship ($\delta = 0$), so the wave is linearly polarised at angle
$\theta = \arctan(30/20) = 56.3°$ from the $x$-axis.

</details>

### 2.2 Energy and Intensity

The **Poynting vector**:

$$\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$$

Represents the energy flux (W/m$^2$). The time-averaged intensity for a plane wave:

$$I = \langle S \rangle = \frac{1}{2}c\varepsilon_0 E_0^2$$

The energy density of an EM field is:

$$u = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2 = \varepsilon_0 E^2$$

(the electric and magnetic contributions are equal for a plane wave). The intensity is related to
The energy density by $I = uc$.

**Radiation pressure.** For a perfectly absorbing surface: $P_{\mathrm{rad} = I/c$. For a perfectly
Reflecting surface: $P_{\mathrm{rad} = 2I/c$.

<details>
<summary>Worked Example: Radiation pressure from a laser</summary>

**Problem.** A 5 mW laser beam ($\lambda = 632.8$ nm) is normally incident on a perfectly reflecting
Mirror. The beam has a diameter of 1 mm. Find the radiation pressure and the force on the mirror.

**Solution.** Beam area: $A = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$. Intensity:
$I = P/A = 5 \times 10^{-3}/(7.85 \times 10^{-7}) = 6.37 \times 10^3$ W/m$^2$.

Radiation pressure (reflecting):
$P_{\mathrm{rad} = 2I/c = 2(6.37 \times 10^3)/(3 \times 10^8) = 4.25 \times 10^{-5}$ Pa.

Force:
$F = P_{\mathrm{rad} \cdot A = (4.25 \times 10^{-5})(7.85 \times 10^{-7}) = 3.34 \times 10^{-11}$ N.

</details>

### 2.3 EM Waves in Matter

In a linear, isotropic, non-magnetic medium with refractive index $n$:

$$v = \frac{c}{n}, \quad \mathbf{k} = n\frac{\omega}{c}\hat{\mathbf{k}}$$

The index of refraction is related to the relative permittivity and permeability:

$$n = \sqrt{\varepsilon_r \mu_r}$$

For non-magnetic materials ($\mu_r \approx 1$): $n \approx \sqrt{\varepsilon_r}$.

The wavelength inside a medium of refractive index $n$ is $\lambda_n = \lambda_0/n$Where $\lambda_0$
Is the vacuum wavelength. The frequency remains unchanged across the boundary.

<details>
<summary>Worked Example: EM wave propagation in glass</summary>

**Problem.** A plane wave of wavelength $\lambda_0 = 600$ nm in vacuum enters a glass slab
($n = 1.50$) at normal incidence. Find (a) the wavelength and wave speed inside the glass, (b) the
Frequency, and (c) the ratio of intensities inside and outside the glass, accounting for reflection
At the front surface.

**Solution.**

(a) $\lambda_n = \lambda_0/n = 600/1.50 = 400$ nm. $v = c/n = 2.0 \times 10^8$ m/s.

(b) $f = c/\lambda_0 = (3 \times 10^8)/(600 \times 10^{-9}) = 5.0 \times 10^{14}$ Hz (unchanged).

(c) At normal incidence:
$R = [(n_1 - n_2)/(n_1 + n_2)]^2 = [(1 - 1.5)/(1 + 1.5)]^2 = (0.5/2.5)^2 = 0.04$. Transmittance:
$T = 1 - R = 0.96$. The intensity inside the glass is $I_{\mathrm{inside} = 0.96\,I_0$But the power
per unit area Referenced to the vacuum intensity is
$I_{\mathrm{inside} = (n_2/n_1)\,T\,I_0 = 1.5 \times 0.96 \times I_0 = 1.44\,I_0$ If we compare the
electric field amplitudes squared times the respective impedances.

</details>

### 2.4 Boundary Conditions and Snell's Law

At a planar interface between two linear, isotropic media, the tangential components of $\mathbf{E}$
and $\mathbf{H}$ and the normal components of $\mathbf{D}$ and $\mathbf{B}$ are Continuous across
the boundary.

Consider a plane wave incident from medium 1 ($n_1$) onto medium 2 ($n_2$), with the interface at
$z = 0$ and the plane of incidence the $xz$-plane.

The **phase matching condition** requires the phases of all three waves (incident, reflected,
Transmitted) to match at $z = 0$ for all $x$ and $t$. This gives:

$$k_1\sin\theta_i = k_1\sin\theta_r = k_2\sin\theta_t$$

From the first equality: $\theta_i = \theta_r$ (**law of reflection**). From the second equality:
$n_1\sin\theta_i = n_2\sin\theta_t$ (**Snell's law**).

**Proof.** The incident, reflected, and transmitted fields are:

$$E_i \propto e^{i(k_{1x}x + k_{1z}z - \omega t)}, \quad E_r \propto e^{i(k_{1x}'x + k_{1z}'z - \omega t)}, \quad E_t \propto e^{i(k_{2x}x + k_{2z}z - \omega t)}$$

At $z = 0$The tangential field must be continuous for all $x$ and $t$:
$k_{1x} = k_{1x}' = k_{2x}$I.e., $k_1\sin\theta_i = k_1\sin\theta_r = k_2\sin\theta_t$. Since
$k = n\omega/c$This yields Snell's law. $\blacksquare$

### 2.5 Fresnel Equations

Applying the boundary conditions for the tangential fields yields the **Fresnel equations** for the
Amplitude reflection and transmission coefficients.

**s-polarisation** ($\mathbf{E}$ perpendicular to the plane of incidence, along $\hat{\mathbf{y}}$):
The tangential components of $\mathbf{E}$ and $\mathbf{H}$ give:

$$r_s = \frac{E_{0r}}{E_{0i}} = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}$$

$$t_s = \frac{E_{0t}}{E_{0i}} = \frac{2n_1\cos\theta_i}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**p-polarisation** ($\mathbf{E}$ parallel to the plane of incidence): The tangential components of
$\mathbf{E}$ and $\mathbf{H}$ give:

$$r_p = \frac{E_{0r}}{E_{0i}} = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}$$

$$t_p = \frac{E_{0t}}{E_{0i}} = \frac{2n_1\cos\theta_i}{n_2\cos\theta_i + n_1\cos\theta_t}$$

**Reflectance and transmittance** (energy fractions):

$$R_s = |r_s|^2, \quad T_s = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}|t_s|^2, \quad R_s + T_s = 1$$

$$R_p = |r_p|^2, \quad T_p = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}|t_p|^2, \quad R_p + T_p = 1$$

At **normal incidence** ($\theta_i = 0$): $r_s = r_p = (n_1 - n_2)/(n_1 + n_2)$ and
$R = [(n_1 - n_2)/(n_1 + n_2)]^2$.

<details>
<summary>Worked Example: Fresnel coefficients at a glass-air interface</summary>

**Problem.** Light is incident from air ($n_1 = 1.00$) onto glass ($n_2 = 1.50$) at
$\theta_i = 30°$. Calculate $r_s$$r_p$$R_s$And $R_p$.

**Solution.** From Snell's law: $\sin\theta_t = \sin 30°/1.50 = 0.333$So $\theta_t = 19.47°$.
$\cos\theta_i = \cos 30° = 0.866$$\cos\theta_t = \cos 19.47° = 0.943$.

$r_s = \frac{1.00 \times 0.866 - 1.50 \times 0.943}{1.00 \times 0.866 + 1.50 \times 0.943} = \frac{0.866 - 1.414}{0.866 + 1.414} = \frac{-0.549}{2.280} = -0.241$

$R_s = r_s^2 = 0.0580$

$r_p = \frac{1.50 \times 0.866 - 1.00 \times 0.943}{1.50 \times 0.866 + 1.00 \times 0.943} = \frac{1.299 - 0.943}{1.299 + 0.943} = \frac{0.356}{2.242} = 0.159$

$R_p = r_p^2 = 0.0252$

At this angle, p-polarised light is reflected less efficiently than s-polarised light. The Negative
sign of $r_s$ indicates a phase shift of $\pi$ upon reflection.

</details>

:::caution Common Pitfall The Fresnel coefficients $r_s$ and $r_p$ have different forms. A common
error is to swap the $n_1\cos\theta_i$ and $n_2\cos\theta_t$ terms. Remember: for $r_s$The numerator
starts with $n_1\cos\theta_i$; for $r_p$The numerator starts with $n_2\cos\theta_i$. Also, $r$ and
$t$ are Amplitude coefficients, while $R$ and $T$ are energy coefficients — they are related but not
Interchangeable. :::

### 2.6 Total Internal Reflection and Evanescent Waves

When light travels from a denser to a rarer medium ($n_1 \gt n_2$) and the angle of incidence
Exceeds the **critical angle**:

$$\theta_c = \arcsin\!\left(\frac{n_2}{n_1}\right)$$

Snell's law gives $\sin\theta_t = (n_1/n_2)\sin\theta_i \gt 1$So $\theta_t$ becomes complex. Writing
$\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$The Fresnel coefficients become complex with
$|r_s|^2 = |r_p|^2 = 1$: all energy is reflected.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa z}\, e^{i(k_x x - \omega t)}$$

Where:

$$\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}, \quad k_x = k_0 n_1\sin\theta_i$$

The field decays exponentially with penetration depth $\delta = 1/\kappa$ into the second medium,
But propagates without loss along the interface. No net energy is transported across the boundary
($T = 0$).

**Frustrated total internal reflection (FTIR).** If a third medium (with $n_3 \geq n_2$) is brought
Within a distance comparable to $\delta$ of the interface, the evanescent wave can couple into it,
Allowing energy transmission across the gap. This is the optical analogue of quantum mechanical
Tunnelling.

<details>
<summary>Worked Example: Critical angle and evanescent wave penetration</summary>

**Problem.** Light travels from glass ($n_1 = 1.50$) to air ($n_2 = 1.00$) at $\theta_i = 50°$. Find
(a) the critical angle, (b) the penetration depth for $\lambda = 500$ nm, and (c) the Propagation
constant along the interface.

**Solution.**

(a) $\theta_c = \arcsin(n_2/n_1) = \arcsin(1/1.50) = 41.8°$. Since $50° \gt 41.8°$TIR occurs.

(b) $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$
$= \frac{2\pi}{\lambda}\sqrt{(1.50)^2\sin^2 50° - 1.00^2}$
$= \frac{2\pi}{500 \times 10^{-9}}\sqrt{2.25 \times 0.587 - 1.00}$
$= (1.257 \times 10^7)\sqrt{0.320}$ $= (1.257 \times 10^7)(0.566) = 7.11 \times 10^6$ m$^{-1}$

Penetration depth: $\delta = 1/\kappa = 1.41 \times 10^{-7}$ m $= 141$ nm.

(c) $k_x = k_0 n_1\sin\theta_i = (2\pi/(500 \times 10^{-9}))(1.50)(0.766) = 1.44 \times 10^7$
m$^{-1}$.

</details>

## 3. Interference

### 3.1 Superposition Principle

When two or more waves overlap, the resultant displacement is the sum of the individual
displacements. For two coherent waves with amplitudes $E_1$ and $E_2$:

$$E = E_1 + E_2 = E_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_1) + E_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_2)$$

The time-averaged intensity is:

$$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\Delta\phi$$

Where $\Delta\phi = \phi_2 - \phi_1$ is the phase difference.

### 3.2 Double-Slit Interference (Young's Experiment)

Two slits separated by distance $d$ are illuminated by coherent light of wavelength $\lambda$. The
Screen is at distance $L \gg d$.

**Condition for bright fringes (constructive interference):**

$$d\sin\theta = m\lambda, \quad m = 0, \pm 1, \pm 2, \ldots$$

**Condition for dark fringes (destructive interference):**

$$d\sin\theta = \left(m + \frac{1}{2}\right)\lambda, \quad m = 0, \pm 1, \pm 2, \ldots$$

**Derivation.** The path difference between the two slits is $\Delta = d\sin\theta$. Constructive
Interference occurs when $\Delta = m\lambda$ (phase difference $2m\pi$), and destructive when
$\Delta = (m + 1/2)\lambda$ (phase difference $(2m+1)\pi$). $\blacksquare$

The fringe spacing on the screen:

$$\Delta y = \frac{\lambda L}{d}$$

<details>
<summary>Worked Example: Double-slit fringe calculation</summary>

**Problem.** In a Young's double-slit experiment, light of wavelength $\lambda = 550$ nm passes
Through slits separated by $d = 0.10$ mm onto a screen at $L = 2.0$ m. Find (a) the fringe spacing,
(b) the angular position of the third bright fringe, and (c) the total number of bright fringes
Visible within the central diffraction maximum (slit width $a = 0.020$ mm).

**Solution.**

(a) $\Delta y = \lambda L/d = (550 \times 10^{-9})(2.0)/(0.10 \times 10^{-3}) = 11.0 \times 10^{-3}$
m $= 11.0$ mm.

(b)
$d\sin\theta_3 = 3\lambda \implies \sin\theta_3 = 3(550 \times 10^{-9})/(0.10 \times 10^{-3}) = 0.0165$
$\theta_3 = 0.945°$.

(c) The diffraction envelope has its first minimum at
$\sin\theta = \lambda/a = 550/20 = 27.5 \times 10^{-3}$ Corresponding to interference order
$m = d\sin\theta/\lambda = (d/a) = 0.10/0.020 = 5$. Missing orders at $m = \pm 5, \pm 10, \ldots$.
Visible bright fringes: $m = 0, \pm 1, \pm 2, \pm 3, \pm 4$ Giving 9 bright fringes within the
central maximum.

</details>

### 3.3 Thin-Film Interference

Light reflecting from a thin film of thickness $t$ and refractive index $n$ undergoes interference
Between the wave reflected from the top surface and the wave reflected from the bottom surface.

**Path difference:** $2nt\cos\theta_t$ where $\theta_t$ is the angle of refraction inside the film.

A phase shift of $\pi$ occurs upon reflection from a medium of higher refractive index. The
condition For constructive interference (bright reflection) is:

$$2nt\cos\theta_t = \left(m + \frac{1}{2}\right)\lambda \quad \mathrm{(one\ phase\ shift)$$

$$2nt\cos\theta_t = m\lambda \quad \mathrm{(zero\ or\ two\ phase\ shifts)$$

:::caution Common Pitfall Always count the number of $\pi$ phase shifts that occur upon reflection.
A reflection from Low-to-high refractive index introduces a $\pi$ shift; high-to-low does not. For a
soap film in Air, there is one $\pi$ shift (at the top surface). For a coating on glass
($n_{\mathrm{coat} \lt n_{\mathrm{glass}$), there is also one shift. The conditions for constructive
and destructive interference swap depending on whether the total number of shifts is odd or even.
:::

<details>
<summary>Worked Example: Anti-reflection coating design</summary>

**Problem.** Magnesium fluoride ($n = 1.38$) is used as an anti-reflection coating on a glass lens
($n_{\mathrm{glass} = 1.52$). Find the minimum coating thickness for destructive interference in
Reflected light at $\lambda = 550$ nm (normal incidence).

**Solution.** At the air-coating interface (low to high $n$): $\pi$ phase shift. At the
coating-glass interface (low to high $n$): $\pi$ phase shift. Total: two phase shifts $\equiv$ zero
net phase shift from reflections.

For destructive interference (dark reflection) with zero net phase shift: $2nt = (m + 1/2)\lambda$.

Minimum thickness ($m = 0$): $t = \lambda/(4n) = 550/(4 \times 1.38) = 99.6$ nm.

This is the standard quarter-wave anti-reflection coating design.

</details>

<details>
<summary>Worked Example: Soap film colours</summary>

**Problem.** A soap film ($n = 1.33$) of thickness $t = 300$ nm is illuminated by white light at
Normal incidence. Which visible wavelengths are strongly reflected?

**Solution.** Air-soap (low to high): one $\pi$ phase shift. Soap-air (high to low): no shift.
Total: one phase shift. Constructive: $2nt = (m + 1/2)\lambda$.

$\lambda = 2nt/(m + 1/2) = 2(1.33)(300)/(m + 1/2) = 798/(m + 1/2)$ nm.

$m = 0$: $\lambda = 1596$ nm (infrared, not visible). $m = 1$: $\lambda = 798/1.5 = 532$ nm (green,
visible). $m = 2$: $\lambda = 798/2.5 = 319$ nm (ultraviolet, not visible).

The film appears green in reflected light.

</details>

### 3.4 Michelson Interferometer

A beam splitter divides light into two beams that travel perpendicular paths and recombine. The path
Difference $\Delta = 2(d_1 - d_2)$ determines the interference pattern.

Moving mirror $M_1$ by distance $\Delta d$ shifts the pattern by $m = 2\Delta d / \lambda$ fringes.

The Michelson interferometer is used for precise length measurements, the determination of
Refractive indices, and was historically crucial in establishing the invariance of the speed of
Light (Michelson-Morley experiment).

<details>
<summary>Worked Example: Michelson interferometer mirror displacement</summary>

**Problem.** A Michelson interferometer uses a HeNe laser ($\lambda = 632.8$ nm). When one mirror Is
displaced, 2000 fringes cross a reference point. How far was the mirror moved?

**Solution.** Each fringe corresponds to a path difference change of $\lambda$. Moving the mirror by
$\Delta d$ changes the path difference by $2\Delta d$:

$m = 2\Delta d/\lambda \implies \Delta d = m\lambda/2 = 2000 \times 632.8 \times 10^{-9}/2 = 6.328 \times 10^{-4}$
m $= 0.633$ mm.

</details>

### 3.5 Coherence Length and Fringe Visibility

The **fringe visibility** (or contrast) quantifies the sharpness of interference fringes:

$$\mathcal{V} = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$

For two-beam interference with intensities $I_1$$I_2$ and degree of temporal coherence $|\gamma|$:

$$\mathcal{V} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}\,|\gamma(\tau)|$$

For equal intensities ($I_1 = I_2$): $\mathcal{V} = |\gamma(\tau)|$.

The coherence function decays with path difference. For a Gaussian spectral profile of width
$\Delta\lambda$:

$$|\gamma(\tau)| = \exp\!\left[-\pi\left(\frac{\Delta\lambda \cdot \Delta x}{\lambda^2}\right)^2\right]$$

Where $\Delta x = c\tau$ is the path difference. Fringes become unresolvable when
$\Delta x \approx \lambda^2/\Delta\lambda = L_c$The **coherence length**.

**Implication for interferometry.** To observe interference fringes, the path difference between The
two arms must satisfy $\Delta x \ll L_c$. A sodium lamp ($\Delta\lambda \approx 0.6$ nm at
$\lambda = 589$ nm) gives $L_c \approx 0.58$ mm. A HeNe laser ($\Delta\lambda \approx 10^{-6}$ nm)
Gives $L_c \approx 350$ m — fringes are visible over enormous path differences.

### 3.6 Multiple-Beam Interference: The Fabry-Perot Etalon

A **Fabry-Perot etalon** consists of two parallel, partially reflecting surfaces separated by
Distance $d$. Multiple reflections create many beams that interfere, producing sharp transmission
Peaks.

For a lossless etalon with reflectance $R$ and transmittance $T = 1 - R$Illuminated at angle
$\theta$ inside a medium of refractive index $n$:

$$\frac{I_T}{I_0} = \frac{T^2}{(1 - R)^2 + 4R\sin^2(\delta/2)} = \frac{1}{1 + F\sin^2(\delta/2)}$$

Where $\delta = (4\pi/\lambda)\,nd\cos\theta$ is the round-trip phase and $F = 4R/(1-R)^2$ is the
**coefficient of finesse**.

**Transmission maxima** occur when $\delta = 2m\pi$ ($m = 0, 1, 2, \ldots$), i.e.,
$2nd\cos\theta = m\lambda$.

**Finesse:**

$$\mathcal{F} = \frac{\pi\sqrt{F}}{2} = \frac{\pi\sqrt{R}}{1 - R}$$

The finesse determines the sharpness of the peaks: higher $R$ gives sharper peaks.

**Free spectral range** (frequency spacing between adjacent peaks):

$$\Delta\nu_{\mathrm{FSR} = \frac{c}{2nd}$$

**Resolving power:**

$$\mathcal{R} = \frac{\lambda}{\delta\lambda} = m\mathcal{F}$$

<details>
<summary>Worked Example: Fabry-Perot resolving power</summary>

**Problem.** A Fabry-Perot etalon has plate separation $d = 1.00$ mm, refractive index $n = 1.00$
And reflectance $R = 0.90$. Find the finesse, free spectral range, and minimum resolvable wavelength
Difference at $\lambda = 500$ nm (normal incidence).

**Solution.** Finesse: $\mathcal{F} = \pi\sqrt{0.90}/(1 - 0.90) = \pi(0.949)/0.10 = 29.8$.

Free spectral range:
$\Delta\nu_{\mathrm{FSR} = c/(2nd) = (3 \times 10^8)/(2 \times 1.00 \times 10^{-3}) = 1.50 \times 10^{11}$
Hz.

Order number: $m = 2nd/\lambda = 2(1.00)(1.00 \times 10^{-3})/(500 \times 10^{-9}) = 4000$.

Resolving power: $\mathcal{R} = m\mathcal{F} = 4000 \times 29.8 = 1.19 \times 10^5$.

Minimum resolvable wavelength:
$\delta\lambda = \lambda/\mathcal{R} = 500/1.19 \times 10^5 = 4.20 \times 10^{-3}$ nm $= 4.20$ pm.

</details>

## 4. Diffraction

### 4.1 Huygens-Fresnel Principle

Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is
the Envelope of these wavelets, accounting for both amplitude and phase.

**Kirchhoff diffraction integral.** The field at point $P$ due to an aperture in a screen is:

$$E(P) = \frac{i}{\lambda}\iint_{\mathrm{aperture} E(Q)\,\frac{e^{-ikr}}{r}\cos\theta\,dS$$

Where $E(Q)$ is the field at the aperture point $Q$$r$ is the distance from $Q$ to $P$And $\theta$
Is the angle between the normal to the aperture and the direction to $P$. The obliquity factor
$\cos\theta$ ensures that wavelets do not propagate backwards. In the Fraunhofer limit
($r \to \infty$), This integral reduces to the Fourier transform of the aperture function (see
Sections 4.8 and 7.1).

### 4.2 Single-Slit Diffraction

A slit of width $a$ is illuminated by plane waves of wavelength $\lambda$.

**Intensity distribution (Fraunhofer diffraction):**

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

Where $\alpha = \frac{\pi a \sin\theta}{\lambda}$.

**Derivation.** Divide the slit into infinitesimal elements of width $dy$ at position $y$. Each
Element contributes a wavelet. The field at angle $\theta$ on a distant screen:

$$E(\theta) = \int_{-a/2}^{a/2} E_0\, e^{iky\sin\theta}\,dy = E_0 \frac{\sin\left(\frac{ka\sin\theta}{2}\right)}{\frac{k\sin\theta}{2}} = E_0 a \frac{\sin\alpha}{\alpha}$$

Where $\alpha = ka\sin\theta/2 = \pi a\sin\theta/\lambda$. Since $I \propto |E|^2$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

$\blacksquare$

**Minima:** $\alpha = m\pi$I.e., $a\sin\theta = m\lambda$ for $m = \pm 1, \pm 2, \ldots$

**Central maximum:** at $\theta = 0$With width (first zero to first zero)
$\Delta\theta = 2\lambda/a$.

The secondary maxima occur approximately midway between consecutive minima. Their intensities are:
$I_1/I_0 \approx 0.045$ (first secondary), $I_2/I_0 \approx 0.016$ (second), decreasing rapidly.

<details>
<summary>Worked Example: Single-slit diffraction intensity</summary>

**Problem.** Light of wavelength $\lambda = 580$ nm passes through a slit of width $a = 0.10$ mm.
Find (a) the angular width of the central maximum, and (b) the intensity at $\theta = 0.50°$
Relative to the central maximum.

**Solution.**

(a) First minimum at
$\sin\theta_1 = \lambda/a = 580 \times 10^{-9}/(0.10 \times 10^{-3}) = 5.80 \times 10^{-3}$ So
$\theta_1 = 0.332°$. Angular width of central maximum: $2\theta_1 = 0.664°$.

(b) $\alpha = \pi a\sin\theta/\lambda = \pi(0.10 \times 10^{-3})\sin(0.50°)/(580 \times 10^{-9})$
$= \pi(0.10 \times 10^{-3})(8.73 \times 10^{-3})/(580 \times 10^{-9}) = \pi(1.505) = 4.73$.

$I/I_0 = (\sin\alpha/\alpha)^2 = (\sin 4.73/4.73)^2 = (-0.9998/4.73)^2 = (0.2114)^2 = 0.0447$.

The intensity is about 4.5% of the central maximum.

</details>

:::caution Common Pitfall The condition for the first minimum in single-slit diffraction is
$a\sin\theta = \lambda$ (not $\lambda/2$). The factor of 2 difference from the double-slit maximum
condition ($d\sin\theta = \lambda$) Reflects the fundamentally different geometry: in single-slit
diffraction, the minimum occurs when Wavelets from the edges cancel, requiring a path difference of
one full wavelength between them. :::

### 4.3 Double-Slit with Finite Width

Combining single-slit diffraction and double-slit interference:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \cos^2\beta$$

Where $\alpha = \pi a\sin\theta/\lambda$ (diffraction envelope) and
$\beta = \pi d\sin\theta/\lambda$ (interference fringes).

The interference fringes are modulated by the diffraction envelope. **Missing orders** occur when
$\beta = m\pi$ coincides with $\alpha = n\pi$I.e., when $d/a$ is a ratio of integers.

<details>
<summary>Worked Example: Missing orders in a double-slit pattern</summary>

**Problem.** A double slit has slit width $a = 0.040$ mm and slit separation $d = 0.20$ mm,
illuminated By light of wavelength $\lambda = 550$ nm. (a) Which interference orders are missing?
(b) How many Bright fringes appear within the central diffraction envelope?

**Solution.**

(a) Missing orders occur when $d/a$ is an integer: $d/a = 0.20/0.04 = 5$. The interference orders
$m = \pm 5, \pm 10, \ldots$ coincide with diffraction minima and are missing.

(b) The central diffraction envelope extends from $\theta = -\lambda/a$ to $\theta = +\lambda/a$.
The highest visible order satisfies $d\sin\theta \lt d(\lambda/a) = (d/a)\lambda = 5\lambda$ I.e.,
$m \lt 5$. So orders $m = 0, \pm 1, \pm 2, \pm 3, \pm 4$ are visible: 9 bright fringes Within the
central envelope.

</details>

### 4.4 Diffraction Gratings

A grating with $N$ slits, each of width $a$Separated by distance $d$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

**Principal maxima:** $d\sin\theta = m\lambda$ ($m = 0, \pm 1, \pm 2, \ldots$).

The angular width of a principal maximum is $\Delta\theta = \lambda/(Nd\cos\theta)$. The **resolving
power** of a grating is:

$$R = \frac{\lambda}{\Delta\lambda} = mN$$

Where $N$ is the total number of illuminated slits.

<details>
<summary>Worked Example: Grating resolving power</summary>

**Problem.** A diffraction grating has 5000 lines/cm and is 5.0 cm wide. Find the resolving power In
the first order and the minimum resolvable wavelength difference at $\lambda = 600$ nm.

**Solution.** Total number of slits: $N = 5000 \times 5.0 = 25000$. Slit spacing: $d = 1/5000$ cm
$= 2.00 \times 10^{-6}$ m $= 2.00$ $\mu$M.

Resolving power: $R = mN = 1 \times 25000 = 25000$.

Minimum resolvable wavelength difference: $\delta\lambda = \lambda/R = 600/25000 = 0.024$ nm.

</details>

### 4.5 The Rayleigh Criterion

Two point sources are just resolvable when the central maximum of one coincides with the first
minimum Of the other:

$$\theta_{\mathrm{min} = 1.22\frac{\lambda}{D}$$

Where $D$ is the aperture diameter (for a circular aperture).

### 4.6 Fresnel vs. Fraunhofer Diffraction

**Fraunhofer (far-field):** Source and screen are at infinity (or at the focal plane of a lens).
Requires $a^2/\lambda \ll L$ (Fresnel number $N_F \ll 1$).

**Fresnel (near-field):** Source and/or screen are at finite distances. The Fresnel number
$N_F = a^2/(\lambda L)$ characterises the regime. Fresnel diffraction uses Fresnel integrals and
Produces patterns that depend on the distance.

### 4.7 Circular Aperture and the Airy Disk

For a circular aperture of diameter $D$The Fraunhofer diffraction pattern is an **Airy pattern**:

$$I(\theta) = I_0 \left[\frac{2J_1(\beta)}{\beta}\right]^2$$

Where $\beta = \pi D \sin\theta / \lambda$ and $J_1$ is the first-order Bessel function of the first
Kind.

**Derivation.** The field in the Fraunhofer limit is the Fourier transform of the circular aperture
Function $t(r) = 1$ for $r \leq D/2$ and $0$ otherwise. In polar coordinates:

$$E(\theta) \propto \int_0^{D/2} J_0(kr\sin\theta)\, r\,dr = \frac{D}{2}\frac{J_1(\beta)}{\beta}$$

Where we used the identity $\int_0^a J_0(\rho r)\,r\,dr = aJ_1(\rho a)/\rho$. Since
$I \propto |E|^2$ The result follows. $\blacksquare$

The first zero of $J_1(\beta)$ is at $\beta = 1.22\pi$Giving:

$$\sin\theta_1 = 1.22\frac{\lambda}{D}$$

The bright central disk (the **Airy disk**) subtends an angle:

$$\theta_{\mathrm{Airy} = 1.22\frac{\lambda}{D}$$

This is the basis of the **Rayleigh criterion** for resolving power of circular apertures
(telescopes, Microscopes, the eye). Approximately 84% of the total transmitted power falls within
the Airy disk.

<details>
<summary>Worked Example: Telescope resolving power</summary>

**Problem.** A telescope has a primary mirror of diameter $D = 150$ mm. Find its angular resolution
At $\lambda = 550$ nm. Two stars are separated by $0.50''$ (arcseconds). Can this telescope resolve
Them?

**Solution.** Angular resolution:
$\theta_{\min} = 1.22\lambda/D = 1.22(550 \times 10^{-9})/(0.150) = 4.47 \times 10^{-6}$ rad.

Convert to arcseconds: $4.47 \times 10^{-6} \times (180/\pi) \times 3600 = 0.923''$.

Since $0.50'' \lt 0.923''$The telescope cannot resolve these two stars — they would appear as a
Single blurred source.

</details>

### 4.8 Introduction to Fourier Optics

The Fraunhofer diffraction integral has a deep connection with Fourier analysis. For an aperture
With transmission function $t(x, y)$The far-field diffraction pattern is:

$$E(\theta_x, \theta_y) \propto \iint t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

Where $k_x = k\sin\theta_x$ and $k_y = k\sin\theta_y$. This is precisely the **two-dimensional
Fourier transform** of $t(x,y)$Evaluated at spatial frequencies $k_x/(2\pi)$ and $k_y/(2\pi)$.

**Key consequences:**

1. A lens of focal length $f$Placed one focal length after the aperture, produces the Fourier
   transform at its back focal plane — it performs an **optical Fourier transform**.
2. Narrow features in the aperture (small $a$) produce broad diffraction patterns (large spread in
   $k$-space), and vice versa — the optical analogue of the uncertainty principle.
3. Spatial filtering: by placing masks in the Fourier plane, one can selectively remove or enhance
   spatial frequency components, modifying the image (the basis of optical image processing).

**Example.** A single slit of width $a$ has aperture function $t(x) = \mathrm{rect(x/a)$. Its
Fourier Transform is $\mathrm{sinc(\pi a \sin\theta/\lambda)$Directly giving the single-slit
diffraction Pattern. A periodic grating has sharp peaks in the Fourier transform (the diffraction
orders), each Corresponding to a spatial harmonic of the grating.

**Spatial filtering.** A powerful application of Fourier optics is the manipulation of images by
Modifying their spatial frequency content:

- **Low-pass filter:** A small aperture in the Fourier plane passes only the zeroth and low-order
  diffraction, removing fine detail (smoothing).
- **High-pass filter:** An opaque spot blocking the zeroth order removes the DC component, enhancing
  edges and fine structure (phase contrast microscopy).
- **Band-pass filter:** Selective removal of specific spatial frequencies (e.g., removing periodic
  noise from an image).

**Phase contrast microscopy** (Zernike, 1953) is a celebrated application. Biological specimens are
Mostly transparent (phase objects) and produce no intensity contrast in ordinary microscopy. By
Introducing a $\pi/2$ phase shift to the undiffracted (zeroth-order) light in the Fourier plane,
Phase variations are converted to intensity variations, making transparent structures visible.

<details>
<summary>Worked Example: Fourier analysis of a double slit</summary>

**Problem.** A double slit has width $a$ and centre-to-centre separation $d = 3a$. Use Fourier
optics To predict the diffraction pattern and identify the missing orders.

**Solution.** The aperture function is
$t(x) = \mathrm{rect(x/a) * [\delta(x - 3a/2) + \delta(x + 3a/2)]$ I.e., the convolution of a
single-slit function with two delta functions.

By the convolution theorem, the Fourier transform is the product of a sinc function (single slit)
and $\cos(\pi d \sin\theta/\lambda)$ (two-point interference):

$E(\theta) \propto \mathrm{sinc(\pi a\sin\theta/\lambda) \cdot \cos(\pi \cdot 3a \sin\theta/\lambda)$

The sinc envelope has zeros at $a\sin\theta = m\lambda$. The cosine fringes have maxima at
$3a\sin\theta = m\lambda$. Missing orders when $3a\sin\theta = 3\lambda$ coincides with
$a\sin\theta = \lambda$: the third order ($m = 3$) and all multiples of 3 are missing. This confirms
$d/a = 3$ as the ratio for missing orders.

</details>

## 5. Polarization

### 5.1 States of Polarization

For a plane wave propagating in the $z$-direction:

$$\mathbf{E} = E_{0x}\cos(kz - \omega t)\,\hat{\mathbf{x}} + E_{0y}\cos(kz - \omega t + \delta)\,\hat{\mathbf{y}}$$

- **Linear polarization:** $\delta = 0$ or $\delta = \pi$. The E-field oscillates along a fixed
  line.
- **Circular polarization:** $E_{0x} = E_{0y}$ and $\delta = \pm\pi/2$. Right-handed
  ($\delta = -\pi/2$) or left-handed ($\delta = +\pi/2$).
- **Elliptical polarization:** General case. The tip of $\mathbf{E}$ traces an ellipse.

### 5.2 Malus's Law

When linearly polarised light of intensity $I_0$ passes through a polariser at angle $\theta$ to the
Polarisation direction:

$$I = I_0 \cos^2\theta$$

**Proof.** The component of $\mathbf{E}$ along the polariser axis is $E\cos\theta$. Since
$I \propto E^2$: $I = I_0 \cos^2\theta$. $\blacksquare$

<details>
<summary>Worked Example: Three polarisers in series</summary>

**Problem.** Unpolarised light of intensity $I_0$ passes through three ideal linear polarisers. The
First has its transmission axis vertical. The second is at $45°$ to the vertical. The third is
Horizontal. What fraction of $I_0$ is transmitted?

**Solution.** After the first polariser: $I_1 = I_0/2$ (vertical polarisation).

After the second: $I_2 = I_1\cos^2 45° = (I_0/2)(1/2) = I_0/4$ (polarised at 45°).

After the third: $I_3 = I_2\cos^2 45° = (I_0/4)(1/2) = I_0/8$ (horizontal polarisation).

Answer: $I_0/8 = 12.5\%$. Note that inserting the middle polariser **increases** the transmitted
Intensity compared with just the crossed first and third polarisers (which would transmit zero).

</details>

### 5.3 Birefringence and Wave Plates

Birefringent crystals (e.g., calcite) have two refractive indices: $n_o$ (ordinary ray) and $n_e$
(extraordinary ray). The two rays have orthogonal polarisations and different phase velocities.

A **wave plate** of thickness $t$ introduces a relative phase shift between the two polarisation
Components:

$$\Delta\phi = \frac{2\pi}{\lambda}(n_o - n_e)\,t$$

**Quarter-wave plate (QWP):** $\Delta\phi = \pi/2$So $t_{\mathrm{QWP} = \lambda/(4|n_o - n_e|)$.
Converts linear polarisation at $45°$ to the fast/slow axes into circular polarisation, and vice
Versa.

**Half-wave plate (HWP):** $\Delta\phi = \pi$So $t_{\mathrm{HWP} = \lambda/(2|n_o - n_e|)$. Rotates
the plane of linear polarisation by $2\theta$Where $\theta$ is the angle between the Input
polarisation and the fast axis.

:::caution Common Pitfall A quarter-wave plate only produces circular polarisation when the input
linear polarisation is at Exactly $45°$ to the fast and slow axes. For other input angles, the
output is elliptically Polarised. A half-wave plate rotates linear polarisation by $2\theta$Not
$\theta$. :::

<details>
<summary>Worked Example: Quarter-wave plate design and application</summary>

**Problem.** (a) Design a quarter-wave plate for $\lambda = 589$ nm using calcite
($n_o = 1.658$$n_e = 1.486$). (b) If linearly polarised light at $30°$ to the fast axis Enters this
QWP, describe the output polarisation.

**Solution.**

(a) Minimum thickness:
$t = \lambda/(4|n_o - n_e|) = 589 \times 10^{-9}/(4 \times 0.172) = 8.56 \times 10^{-7}$ m $= 856$
nm.

(b) The components along the fast and slow axes are: $E_f = E_0\cos 30° = 0.866\,E_0$ and
$E_s = E_0\sin 30° = 0.500\,E_0$. After the QWP, these have a $\pi/2$ phase difference but unequal
amplitudes ($0.866 \neq 0.500$), So the output is **elliptically polarised** (not circular).

</details>

### 5.4 Optical Activity

Certain materials (sugars, quartz) rotate the plane of linearly polarised light. The specific
Rotation is:

$$[\alpha] = \frac{\theta}{c \cdot l}$$

Where $\theta$ is the rotation angle, $c$ is the concentration, and $l$ is the path length.

Optical activity arises from the helical structure of molecules, which gives different refractive
Indices for left- and right-circularly polarised light (circular birefringence). If $n_L$ and $n_R$
Are the refractive indices for left and right circular polarisation:

$$\theta = \frac{\pi l}{\lambda}(n_L - n_R)$$

Optical activity is **reciprocal**: if the beam is reflected back through the medium, the rotation
Is cancelled.

### 5.5 Brewster's Angle

At the **Brewster angle** $\theta_B$The reflected beam for p-polarised light vanishes ($r_p = 0$):

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$ requires $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t} \implies \cot\theta_i = \cot\theta_t \implies \theta_i = \theta_t'$$

Where $\theta_t' = 90° - \theta_t$. This gives $\theta_i + \theta_t = 90°$So:

$$\tan\theta_i = \frac{n_2}{n_1} \quad \blacksquare$$

At Brewster's angle, the reflected beam is purely s-polarised, and the reflected and refracted beams
Are perpendicular ($\theta_B + \theta_t = 90°$). This principle is used in Brewster windows and
Polarisation by reflection.

For an air-glass interface ($n_1 = 1$$n_2 = 1.5$): $\theta_B = \arctan(1.5) = 56.3°$.

<details>
<summary>Worked Example: Brewster's angle and reflected intensity</summary>

**Problem.** Unpolarised light is incident on a glass surface ($n = 1.50$) at Brewster's angle. What
fraction of the incident intensity is reflected, and what is the polarisation state of the Reflected
light?

**Solution.** $\theta_B = \arctan(1.50) = 56.3°$.

The reflected light is purely s-polarised. The reflectance for s-polarisation at $\theta_B$:
$\theta_t = 90° - 56.3° = 33.7°$.
$r_s = \frac{n_1\cos\theta_B - n_2\cos\theta_t}{n_1\cos\theta_B + n_2\cos\theta_t} = \frac{\cos 56.3° - 1.50\cos 33.7°}{\cos 56.3° + 1.50\cos 33.7°} = \frac{0.555 - 1.50 \times 0.832}{0.555 + 1.50 \times 0.832} = \frac{0.555 - 1.248}{0.555 + 1.248} = \frac{-0.693}{1.803} = -0.384$

$R_s = (-0.384)^2 = 0.148$.

The incident unpolarised light has equal s and p components ($I_s = I_p = I_0/2$). Only the s
Component is reflected:
$I_{\mathrm{reflected} = R_s \times I_0/2 = 0.148 \times I_0/2 = 0.074\,I_0$.

The reflected light is 100% s-polarised with intensity $0.074\,I_0$ (about 7.4% of the incident).

</details>

### 5.6 Faraday Rotation

In a magneto-optical material with a magnetic field $\mathbf{B}$ applied along the propagation
Direction, the plane of polarisation rotates by:

$$\theta_F = V B l$$

Where $V$ is the **Verdet constant** (rad/(T$\cdot$M)), $B$ is the magnetic field strength, and $l$
is the path length through the material.

**Mechanism.** The magnetic field induces circular birefringence: left and right circular
polarisations Experience different refractive indices ($n_L \neq n_R$). Unlike natural optical
activity, Faraday Rotation is **non-reciprocal**: if the beam is reflected back through the medium,
the rotation Doubles rather than cancelling.

**Applications.** Optical isolators (one-way light valves), optical circulators, and magneto-optical
Sensors. An optical isolator consists of a polariser, a Faraday rotator set to rotate by $45°$And An
analyser at $45°$ to the polariser. Forward-propagating light is transmitted; backward light Is
rotated by another $45°$ (total $90°$) and blocked by the analyser.

<details>
<summary>Worked Example: Faraday rotation in flint glass</summary>

**Problem.** A Faraday rotator uses heavy flint glass with Verdet constant $V = 32$ rad/(T$\cdot$M).
(a) What magnetic field over a 10 cm length produces a $45°$ rotation? (b) If linearly polarised
Light makes a round trip through the rotator, what is the total rotation?

**Solution.**

(a) $\theta_F = VBl \implies B = \theta_F/(Vl) = (\pi/4)/(32 \times 0.10) = 0.785/3.2 = 0.245$ T.

(b) Because Faraday rotation is non-reciprocal, the return trip adds another $45°$: Total rotation
$= 90°$. The polarisation is rotated by $90°$ after the round trip, which is the Basis of optical
isolation.

</details>

### 5.7 Polarization by Scattering

When light is scattered by particles much smaller than the wavelength (Rayleigh scattering), the
Scattered light is partially polarised. Light scattered at $90°$ to the incident direction is
**completely linearly polarised** in the plane perpendicular to the scattering plane.

**Proof.** Consider an incident unpolarised beam propagating along $\hat{\mathbf{z}}$. The
$\mathbf{E}$-field oscillates in the $xy$-plane. An observer along $\hat{\mathbf{x}}$ (scattering
Angle $90°$) receives radiation from the accelerating electrons. The dipole radiation pattern of an
Oscillator along $\hat{\mathbf{y}}$ has zero intensity along $\hat{\mathbf{y}}$ but maximum along
$\hat{\mathbf{x}}$. The oscillator along $\hat{\mathbf{x}}$ radiates zero along its own axis. Thus
The observer along $\hat{\mathbf{x}}$ sees only the $y$-component: the scattered light is Polarised
along $\hat{\mathbf{y}}$. $\blacksquare$

This explains why the sky is polarised at $90°$ from the sun and why polarising sunglasses reduce
Glare from horizontal surfaces (Brewster's angle reflection from road/water).

## 6. Geometric Optics

### 6.1 Reflection and Refraction

**Law of Reflection:** The angle of incidence equals the angle of reflection: $\theta_i = \theta_r$
(both measured from the normal).

**Snell's Law:** $n_1 \sin\theta_1 = n_2 \sin\theta_2$.

**Derivation of Snell's law from Fermat's principle.** The optical path length from point $A$ in
Medium 1 to point $B$ in medium 2 via a point on the interface at $x$ is:

$$\Lambda(x) = n_1\sqrt{a^2 + x^2} + n_2\sqrt{b^2 + (d - x)^2}$$

Setting $d\Lambda/dx = 0$:

$$n_1 \frac{x}{\sqrt{a^2 + x^2}} = n_2 \frac{d - x}{\sqrt{b^2 + (d-x)^2}}$$

Which gives $n_1 \sin\theta_1 = n_2 \sin\theta_2$. $\blacksquare$

### 6.2 Total Internal Reflection

When light travels from a denser to a rarer medium ($n_1 \gt n_2$), total internal reflection occurs
When $\theta_1 \geq \theta_c$ where:

$$\sin\theta_c = \frac{n_2}{n_1}$$

**Evanescent wave.** Beyond the critical angle, the transmitted field decays exponentially:

$$E_t \propto e^{-\kappa x}$$

Where $\kappa = \frac{2\pi}{\lambda}\sqrt{n_1^2 \sin^2\theta_1 - n_2^2}$.

### 6.3 The Thin Lens Equation

$$\frac{1}{s} + \frac{1}{s'} = \frac{1}{f}$$

Where $s$ is the object distance, $s'$ is the image distance, and $f$ is the focal length.

**Sign convention (Cartesian):** Distances are positive in the direction of light propagation.
$f \gt 0$ For converging lenses, $f \lt 0$ for diverging.

**Magnification:**

$$M = -\frac{s'}{s}$$

Negative $M$ indicates an inverted image.

### 6.4 Lensmaker's Equation

For a thin lens with radii of curvature $R_1$ and $R_2$:

$$\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

### 6.5 Matrix Optics (Ray Transfer Matrix)

A paraxial ray is described by a vector $\begin{pmatrix} y \\ \theta \end{pmatrix}$ where $y$ is the
Height and $\theta$ is the angle with the optical axis.

**Free space propagation** by distance $d$:

$$M_{\mathrm{prop} = \begin{pmatrix} 1 & d \\ 0 & 1 \end{pmatrix}$$

**Thin lens** of focal length $f$:

$$M_{\mathrm{lens} = \begin{pmatrix} 1 & 0 \\ -1/f & 1 \end{pmatrix}$$

**System matrix:** The overall transformation is the product of individual matrices (applied in
Reverse order): $M_{\mathrm{sys} = M_n \cdots M_2 M_1$.

### 6.6 Mirror Equation

For a spherical mirror of radius $R$ (with $R \gt 0$ for concave, $R \lt 0$ for convex):

$$\frac{1}{s} + \frac{1}{s'} = \frac{2}{R}$$

The focal length is $f = R/2$. The magnification is $M = -s'/s$ (negative for inverted images).

**Derivation from the law of reflection.** A ray from the object at height $h$ striking the mirror
At height $y$ reflects such that $\theta_i = \theta_r$. In the paraxial approximation ($y \ll R$),
Applying the law of reflection and the small-angle approximation $\sin\theta \approx \theta$:

$$\frac{h}{s} + \frac{h'}{s'} = \frac{2y}{R}$$

Dividing through by $y$ and using $h/s = y/s$$h'/s' = y/s'$ (paraxial rays) yields the mirror
Equation. $\blacksquare$

<details>
<summary>Worked Example: Concave mirror image formation</summary>

**Problem.** A concave mirror has radius of curvature $R = 40$ cm. An object of height 2.0 cm is
Placed 25 cm from the mirror. Find the image position, magnification, and nature.

**Solution.** $f = R/2 = 20$ cm. Using $1/s + 1/s' = 1/f$:
$1/s' = 1/20 - 1/25 = (5 - 4)/100 = 1/100$So $s' = 100$ cm.

The image is real (positive $s'$) and on the same side as the object.

$M = -s'/s = -100/25 = -4.0$.

Image height: $h' = Mh = -4.0 \times 2.0 = -8.0$ cm (inverted, magnified by 4$\times$).

</details>

### 6.7 Optical Instruments

**Magnifying glass.** Angular magnification when the image is at the near point $D$:

$$M = 1 + \frac{D}{f}$$

**Compound microscope.** Total magnification:

$$M_{\mathrm{total} = -\frac{L}{f_o} \cdot \frac{D}{f_e}$$

Where $L$ is the tube length, $f_o$ is the objective focal length, and $f_e$ is the eyepiece focal
Length.

**Refracting telescope.** Angular magnification:

$$M = -\frac{f_o}{f_e}$$

For large magnification, the objective should have a long focal length and the eyepiece a short one.
The length of the telescope tube is approximately $f_o + f_e$.

**Reflecting telescope.** A concave primary mirror replaces the objective lens. The Cassegrain
design Uses a secondary convex mirror to redirect the focus behind the primary. Advantages: no
chromatic Aberration, lighter and cheaper for large apertures, and easier support structures.

<details>
<summary>Worked Example: Compound microscope magnification</summary>

**Problem.** A compound microscope has an objective with $f_o = 4.0$ mm and an eyepiece with
$f_e = 25$ mm. The tube length is $L = 160$ mm. Find the total magnification when the final image Is
at the near point ($D = 250$ mm).

**Solution.** Objective magnification: $M_o = -L/f_o = -160/4.0 = -40$.

Eyepiece magnification (image at near point): $M_e = 1 + D/f_e = 1 + 250/25 = 11$.

Total magnification: $M_{\mathrm{total} = M_o \times M_e = -40 \times 11 = -440$.

The negative sign indicates the image is inverted.

</details>

## 7. Fourier Optics

### 7.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer limit, the diffraction pattern is the **Fourier transform** of the aperture
function:

$$E(\theta_x, \theta_y) \propto \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

Where $t(x, y)$ is the transmission function of the aperture, and $k_x = k\sin\theta_x$
$k_y = k\sin\theta_y$.

A lens placed one focal length after the aperture produces the Fraunhofer pattern at its back focal
Plane, performing an optical Fourier transform.

### 7.2 The Convolution Theorem

If the aperture is a product $t(x, y) = t_1(x, y) \cdot t_2(x, y)$The diffraction pattern is the
Convolution of their individual transforms:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

Where $*$ denotes convolution. This explains, for example, why the double-slit pattern with finite
Slit width is the product of a sinc function (single slit) and a cosine-squared (double slit).

### 7.3 The Abbe Theory of Imaging

Abbe showed that a lens images by collecting the diffracted orders and recombining them. The
Resolution limit arises because high spatial frequencies (large diffraction angles) are lost if they
Fall outside the lens aperture.

The **minimum resolvable spatial frequency** is:

$$f_{\mathrm{max} = \frac{2\mathrm{NA}{\lambda}$$

Where $\mathrm{NA = n\sin\theta_{\mathrm{max}$ is the numerical aperture.

## 8. Coherence

### 8.1 Temporal Coherence

**Coherence time** $\tau_c$: the time over which the wave maintains a well-defined phase.

**Coherence length:** $L_c = c\tau_c$.

For a source with spectral width $\Delta\nu$:

$$\tau_c \approx \frac{1}{\Delta\nu}, \quad L_c \approx \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

A sodium lamp ($\Delta\lambda \approx 0.6$ nm at $\lambda = 589$ nm) has $L_c \approx 0.6$ mm. A
laser ($\Delta\lambda \approx 10^{-6}$ nm) has $L_c \approx 300$ m.

<details>
<summary>Worked Example: Coherence length and fringe visibility</summary>

**Problem.** A mercury lamp emits light at $\lambda = 546.1$ nm with a spectral width
$\Delta\lambda = 0.025$ nm. (a) Find the coherence length. (b) In a Michelson interferometer, at
what Path difference does the fringe visibility drop to $1/e$? (c) How many fringes are visible
before they Wash out?

**Solution.**

(a)
$L_c = \lambda^2/\Delta\lambda = (546.1 \times 10^{-9})^2/(0.025 \times 10^{-9}) = 1.19 \times 10^{-2}$
m $= 11.9$ mm.

(b) For a Gaussian spectrum, visibility drops to $1/e$ when $\Delta x = L_c = 11.9$ mm.

(c) The number of fringes:
$N_{\mathrm{fringes} = L_c/\lambda = (11.9 \times 10^{-3})/(546.1 \times 10^{-9}) = 2.18 \times 10^4$.
Over 20000 fringes are visible — a large number, but far fewer than for a laser.

</details>

### 8.2 Spatial Coherence

The **van Cittert-Zernike theorem** states that the spatial coherence of light from an extended
Incoherent source is given by the Fourier transform of the source intensity distribution.

For a circular source of angular diameter $\theta_s$The transverse coherence length is:

$$l_c \approx \frac{1.22\lambda}{\theta_s}$$

### 8.3 Michelson Stellar Interferometer

Two separated mirrors direct light from a distant star into a single telescope. Fringes are observed
When the mirror separation $d$ satisfies:

$$d \lt \frac{1.22\lambda}{\theta_s}$$

The first disappearance of fringes gives the angular diameter of the star:
$\theta_s = 1.22\lambda/d$.

## 9. Lasers

### 9.1 Stimulated Emission

Einstein's coefficients: $A_{21}$ (spontaneous emission), $B_{21}$ (stimulated emission), $B_{12}$
(absorption).

At thermal equilibrium:

$$A_{21} + B_{21}\rho(\omega) = B_{12}\rho(\omega) \cdot \frac{g_1}{g_2} e^{\hbar\omega/(k_B T)}$$

The relations $B_{21} = B_{12}$ (for non-degenerate levels) and
$A_{21}/B_{21} = \hbar\omega^3 n^3/(\pi^2 c^3)$ Follow from detailed balance with the Planck
distribution.

### 9.2 Population Inversion

Laser operation requires **population inversion**: $N_2 \gt N_1$ where $N_2$ is the population of
the Upper laser level and $N_1$ is the lower.

This cannot be achieved in a two-level system at thermal equilibrium. A **three-level** or
**four-level** laser scheme is needed.

### 9.3 Laser Cavity Modes

A Fabry-Perot cavity of length $L$ supports longitudinal modes at frequencies:

$$\nu_m = m\frac{c}{2nL}, \quad m = 1, 2, 3, \ldots$$

The mode spacing (free spectral range):

$$\Delta\nu = \frac{c}{2nL}$$

For a cavity with mirrors of reflectivity $R$The **finesse** is:

$$\mathcal{F} = \frac{\pi\sqrt{R}}{1 - R}$$

### 9.4 Gaussian Beams

The fundamental TEM$_{00}$ mode of a laser cavity is a Gaussian beam:

$$E(r, z) = E_0 \frac{w_0}{w(z)} \exp\left(-\frac{r^2}{w(z)^2}\right) \exp\left(-ikz - ik\frac{r^2}{2R(z)} + i\zeta(z)\right)$$

Where:

- **Beam waist:** $w_0$ (minimum spot size).
- **Rayleigh range:** $z_R = \pi w_0^2 / \lambda$.
- **Beam radius:** $w(z) = w_0\sqrt{1 + (z/z_R)^2}$.
- **Radius of curvature:** $R(z) = z[1 + (z_R/z)^2]$.
- **Gouy phase:** $\zeta(z) = \arctan(z/z_R)$.

The beam **divergence** (half-angle, far field): $\theta = \lambda/(\pi w_0)$.

## 10. Fresnel Equations

### 10.1 Derivation at a Dielectric Interface

When light strikes a planar interface between media with refractive indices $n_1$ and $n_2$The
Amplitudes of the reflected and transmitted waves depend on the polarisation.

For an incident wave with amplitude $E_i$The **reflection and transmission coefficients** are:

**s-polarisation** (perpendicular to the plane of incidence):

$$r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}, \quad t_s = \frac{2n_1\cos\theta_i}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**p-polarisation** (parallel to the plane of incidence):

$$r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}, \quad t_p = \frac{2n_1\cos\theta_i}{n_2\cos\theta_i + n_1\cos\theta_t}$$

**Reflectance and transmittance** (energy fractions):

$$R = |r|^2, \quad T = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}|t|^2$$

With $R + T = 1$ (energy conservation).

### 10.2 Brewster's Angle

At the **Brewster angle** $\theta_B$The reflected beam for p-polarised light has zero amplitude:
$r_p = 0$:

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$: $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t}$$

$$\cot\theta_i = \cot\theta_t \implies \theta_i + \theta_t = 90^\circ$$

So $\tan\theta_i = \tan\theta_B = n_2/n_1$. $\blacksquare$

At Brewster's angle, the reflected and refracted beams are perpendicular. This is why polarising
Filters work at specific angles for reflected glare.

### 10.3 Total Internal Reflection and the Evanescent Wave

When $n_1 \gt n_2$ and $\theta_i \gt \theta_c = \arcsin(n_2/n_1)$$\sin\theta_t \gt 1$So
$\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$ becomes imaginary.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa x}\, e^{i(k_z z - \omega t)}$$

Where $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$ and $k_z = k_0 n_1\sin\theta_i$.

The field decays exponentially with penetration depth $\delta = 1/\kappa$ but propagates along the
Interface. No energy is transported into the second medium: $R = 1$.

**Frustrated total internal reflection.** If a third medium is brought within a few wavelengths of
The interface, energy can tunnel across the gap (analogous to quantum tunnelling).

## 11. Dispersion

### 11.1 Normal and Anomalous Dispersion

The refractive index varies with frequency:

$$n(\omega) = 1 + \frac{Ne^2}{2m_e\varepsilon_0} \sum_j \frac{f_j}{\omega_{0j}^2 - \omega^2 - i\gamma_j\omega}$$

Where $N$ is the electron density, $f_j$ are oscillator strengths, $\omega_{0j}$ are resonance
Frequencies, and $\gamma_j$ are damping constants.

- **Normal dispersion** ($dn/d\lambda \lt 0$): away from resonances, $n$ decreases with increasing
  $\lambda$.
- **Anomalous dispersion** ($dn/d\lambda \gt 0$): near resonances, $n$ increases with $\lambda$.

### 11.2 Group and Phase Velocity

- **Phase velocity:** $v_p = \omega/k = c/n$.
- **Group velocity:** $v_g = d\omega/dk = c/(n + \omega\, dn/d\omega)$.

For normal dispersion, $v_g \lt v_p$. In regions of anomalous dispersion, $v_g$ can exceed $c$ or
Even become negative, but this does not violate causality (signal velocity remains $\leq c$).

### 11.3 Dispersion Relation in a Medium

Starting from the Lorentz oscillator model for a single resonance:

$$n^2(\omega) = 1 + \frac{Ne^2}{m_e\varepsilon_0}\frac{1}{\omega_0^2 - \omega^2 - i\gamma\omega}$$

The real part $n(\omega) = \mathrm{Re\sqrt{\epsilon(\omega)}$ gives the refractive index. The
Imaginary part gives absorption:

$$\alpha_{\mathrm{abs} = \frac{2\omega}{c}\,\mathrm{Im\, n(\omega)$$

**Worked example.** For X-rays ($\omega \gg \omega_0$):

$$n \approx 1 - \frac{Ne^2}{2m_e\varepsilon_0\omega^2} = 1 - \frac{\omega_p^2}{2\omega^2}$$

Where $\omega_p = \sqrt{Ne^2/(m_e\varepsilon_0)}$ is the plasma frequency. Since $n \lt 1$X-rays
Undergo total external reflection at grazing incidence.

### 11.4 Chromatic Aberration

Since $n$ depends on $\lambda$A lens has different focal lengths for different wavelengths. The
Longitudinal chromatic aberration is:

$$\Delta f = f(\lambda_1) - f(\lambda_2)$$

**Achromatic doublet.** Two lenses of different materials (e.g., crown and flint glass) with
Different dispersive powers are combined to cancel chromatic aberration at two wavelengths. The
Condition is:

$$\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0$$

Where $\omega_i = (n_{i,F} - n_{i,C})/(n_{i,d} - 1)$ is the Abbe number for glass $i$.

## 12. Optical Fibres

### 12.1 Total Internal Reflection in Fibres

An optical fibre consists of a core (refractive index $n_1$) surrounded by a cladding
($n_2 \lt n_1$). Light is guided by total internal reflection.

The **numerical aperture:**

$$\mathrm{NA = \sin\theta_{\mathrm{max} = \sqrt{n_1^2 - n_2^2}$$

Where $\theta_{\mathrm{max}$ is the maximum acceptance angle for light entering the fibre.

### 12.2 Modes in Optical Fibres

The number of modes supported depends on the **V-number:**

$$V = \frac{2\pi a}{\lambda}\mathrm{NA$$

Where $a$ is the core radius.

- **Single-mode fibre:** $V \lt 2.405$. Only the fundamental HE$_{11}$ mode propagates.
- **Multimode fibre:** $V \gt 2.405$. Multiple modes propagate, causing modal dispersion.

### 12.3 Attenuation

Fibre attenuation is dominated by Rayleigh scattering ($\propto \lambda^{-4}$) and infrared
absorption Peaks. The minimum attenuation for silica fibre is $\sim 0.2$ dB/km at
$\lambda \approx 1550$ nm.

## 13. Problem Set

**1.** A string of length $L = 1.20$ m is fixed at both ends and has wave speed $v = 240$ m/s. Find
the fundamental frequency and the frequencies of the first three harmonics.

**2.** Show that $u(x,t) = A e^{i(kx-\omega t)} + B e^{-i(kx+\omega t)}$ satisfies the 1D wave
Equation $\partial^2 u/\partial x^2 = (1/v^2)\partial^2 u/\partial t^2$. Identify the physical
Meaning of each term and find the condition on $\omega$ and $k$.

**3.** A wave packet in a dispersive medium has central angular frequency $\omega_0 = 10^{15}$ rad/s
And bandwidth $\Delta\omega = 10^{12}$ rad/s. The group velocity dispersion is
$\alpha = d^2\omega/dk^2 = 2.0 \times 10^6$ m$^2$/s. Estimate the time required for the packet To
double in spatial width after travelling a distance of 1.0 m.

**4.** The electric field of a plane wave is
$\mathbf{E} = (20\hat{\mathbf{x}} - 15\hat{\mathbf{y}})\cos(kz - \omega t)$ V/m in vacuum. Find the
amplitude, the polarisation state (including the angle and handedness), and the time-averaged
Intensity.

**5.** Show that for normal incidence on a dielectric interface, the amplitude reflection and
Transmission coefficients satisfy $t = 1 + r$. Prove this from the boundary conditions.

**6.** Unpolarised light is incident from water ($n = 1.33$) onto glass ($n = 1.50$). Calculate the
Reflectance for (a) normal incidence, (b) $\theta_i = 45°$And (c) Brewster's angle. At which Angle
is the reflected light most strongly polarised?

**7.** An optical fibre has core index $n_1 = 1.48$ and cladding index $n_2 = 1.46$. Find the
Critical angle for total internal reflection and the numerical aperture. What is the maximum
Acceptance angle in air?

**8.** In a Young's double-slit experiment, the slit separation is $d = 0.50$ mm and the screen is
$L = 1.5$ m away. The fifth bright fringe is 8.2 mm from the central maximum. Find the wavelength.

**9.** A magnesium fluoride ($n = 1.38$) anti-reflection coating is deposited on a glass lens
($n = 1.52$). Find the minimum coating thickness for minimum reflection at $\lambda = 550$ nm. What
is the reflectance of the uncoated lens at normal incidence?

**10.** A Michelson interferometer uses light from a sodium lamp ($\lambda = 589$ nm,
$\Delta\lambda = 0.6$ nm). (a) If 1000 fringes are counted when one mirror moves, how far did it
move? (b) Over what range of mirror displacement will interference fringes remain visible?

**11.** A Fabry-Perot etalon with $R = 0.85$ and plate separation $d = 0.50$ mm is illuminated at
Normal incidence with $\lambda = 500$ nm. Calculate the finesse, the free spectral range (in Hz),
And the resolving power. What is the minimum wavelength difference that can be resolved?

**12.** Monochromatic light of wavelength $\lambda = 633$ nm passes through a slit of width
$a = 0.050$ mm onto a screen at distance $L = 3.0$ m. (a) Find the width of the central maximum. (b)
Calculate the intensity at the position of the second secondary maximum relative to $I_0$.

**13.** A diffraction grating with 1200 lines/mm is illuminated at normal incidence by light
containing Two wavelengths $\lambda_1 = 500.0$ nm and $\lambda_2 = 500.5$ nm. What minimum grating
width is Needed to resolve these lines in the second order?

**14.** The Hubble Space Telescope has a primary mirror of diameter $D = 2.4$ m. Calculate its
Angular resolution at $\lambda = 500$ nm in both radians and arcseconds. A ground-based telescope
With $D = 8$ m operates under atmospheric seeing of $1.0''$. Which telescope achieves better
Resolution, and why?

**15.** Unpolarised light of intensity $I_0$ passes through two ideal linear polarisers whose
Transmission axes are at angle $\theta$ to each other. For what value of $\theta$ is the transmitted
Intensity equal to $I_0/8$?

**16.** Linearly polarised light at $30°$ to the fast axis passes through a quarter-wave plate, Then
through a half-wave plate whose fast axis is aligned with the quarter-wave plate's fast axis.
Describe the polarisation state after each element. What is the final polarisation state?

**17.** Light is incident from air onto a glass surface ($n = 1.50$) at Brewster's angle. (a)
Calculate the Brewster angle. (b) Find the angle of refraction and verify that the reflected and
refracted beams are Perpendicular. (c) If the incident light is unpolarised with intensity $I_0$What
is the intensity and Polarisation state of the reflected light?

**18.** An object is placed 30 cm from a converging lens ($f_1 = 20$ cm). A diverging lens
($f_2 = -15$ cm) is placed 60 cm from the converging lens on the opposite side. Using the ray
Transfer matrix method, find the position and magnification of the final image. Verify your result
Using the thin lens equation applied twice.

---

### Selected Solutions

**Solution 1.** $f_1 = v/(2L) = 240/(2 \times 1.20) = 100$ Hz. The harmonics are $f_n = nf_1$:
$f_1 = 100$ Hz, $f_2 = 200$ Hz, $f_3 = 300$ Hz.

**Solution 2.** $\partial^2 u/\partial x^2 = -k^2(Ae^{i(kx-\omega t)} + Be^{-i(kx+\omega t)})$ and
$\partial^2 u/\partial t^2 = -\omega^2(Ae^{i(kx-\omega t)} + Be^{-i(kx+\omega t)})$. The wave
Equation requires $k^2 = \omega^2/v^2$I.e., $\omega = \pm vk$. The first term is a wave Travelling
in the $+x$ direction; the second is a wave travelling in the $-x$ direction.

**Solution 3.** Group velocity: $v_g = d\omega/dk \approx \Delta\omega/\Delta k$. Initial spatial
Width: $\sigma_0 \approx 1/\Delta k = 1/(\Delta\omega/v_g)$. The packet doubles when
$1 + (\alpha t/(2\sigma_0^2))^2 = 4$Giving $t = 2\sigma_0\sqrt{3}/\alpha$. Using
$\sigma_0 = v_g/\Delta\omega$ and $v_g = \omega_0/k_0$ with $k_0 = \omega_0/c$ (assuming
$v_g \approx c$ for Estimation): $\sigma_0 \approx 3 \times 10^8/10^{12} = 3 \times 10^{-4}$ m.
$t = 2(3 \times 10^{-4})(\sqrt{3})/(2 \times 10^6) = 5.2 \times 10^{-10}$ s. Time to travel 1 m:
$\sim 3.3 \times 10^{-9}$ s $\gg t$So the packet doubles well before reaching 1 m.

**Solution 5.** At normal incidence, $\theta_i = \theta_t = 0$ and
$r_s = r_p = (n_1 - n_2)/(n_1 + n_2)$. Boundary condition on tangential $E$: $E_0(1 + r) = E_0 t$So
$t = 1 + r$. $\blacksquare$

**Solution 8.**
$y_5 = 5\lambda L/d \implies \lambda = y_5 d/(5L) = (8.2 \times 10^{-3})(0.50 \times 10^{-3})/(5 \times 1.5) = 5.47 \times 10^{-7}$
m $= 547$ nm.

**Solution 9.** Thickness: $t = \lambda/(4n) = 550/(4 \times 1.38) = 99.6$ nm. Uncoated reflectance:
$R = [(1 - 1.52)/(1 + 1.52)]^2 = (0.52/2.52)^2 = 0.0426 = 4.26\%$.

**Solution 10.** (a)
$\Delta d = m\lambda/2 = 1000 \times 589 \times 10^{-9}/2 = 2.945 \times 10^{-4}$ m $= 0.295$ mm.
(b) Fringes are visible for path difference
$\Delta x \lt L_c = \lambda^2/\Delta\lambda = (589 \times 10^{-9})^2/(0.6 \times 10^{-9}) = 5.78 \times 10^{-4}$
m $= 0.578$ mm. Since the path difference is $2\Delta d$The mirror can move up to
$\Delta d = L_c/2 = 0.289$ mm before fringes wash out. Note that 1000 fringes correspond to
$\Delta d = 0.295$ mm, which slightly exceeds $L_c/2$ — the outermost fringes would already be
fading.

**Solution 11.** $\mathcal{F} = \pi\sqrt{0.85}/(1 - 0.85) = 19.3$.
$\Delta\nu_{\mathrm{FSR} = c/(2nd) = 3 \times 10^8/(2 \times 0.5 \times 10^{-3}) = 3 \times 10^{11}$
Hz. $m = 2nd/\lambda = 2000$. $\mathcal{R} = m\mathcal{F} = 38600$.
$\delta\lambda = \lambda/\mathcal{R} = 500/38600 = 0.0130$ nm.

**Solution 14.**
$\theta_{\min} = 1.22\lambda/D = 1.22(500 \times 10^{-9})/2.4 = 2.54 \times 10^{-7}$ rad
$= 0.0527''$. The ground-based $D = 8$ m telescope has a diffraction limit of
$1.22(500 \times 10^{-9})/8 = 7.63 \times 10^{-8}$ rad $= 0.0158''$But atmospheric seeing of $1.0''$
degrades this by a factor of $\sim 63$. Hubble, being above the atmosphere, achieves its
diffraction-limited $0.053''$ resolution, far surpassing the ground-based telescope's effective
resolution.

**Solution 17.** (a) $\theta_B = \arctan(1.50) = 56.3°$. (b) $\theta_t = 90° - \theta_B = 33.7°$.
The reflected and refracted beams are separated by $90°$. $\checkmark$ (c)
$r_s = (n_1\cos\theta_B - n_2\cos\theta_t)/(n_1\cos\theta_B + n_2\cos\theta_t) = (0.555 - 1.248)/(0.555 + 1.248) = -0.384$.
$R_s = 0.148$. Reflected intensity: $I_r = R_s(I_0/2) = 0.074\,I_0$. The reflected light is 100%
s-polarised.

**Solution 15.**
$I = (I_0/2)\cos^2\theta = I_0/8 \implies \cos^2\theta = 1/4 \implies \theta = 60°$.

**Solution 4.** $E_0 = \sqrt{20^2 + (-15)^2} = 25$ V/m. Polarisation angle from $x$-axis:
$\theta = \arctan(-15/20) = -36.9°$ (below the $x$-axis). The field has $\delta = 0$ (no phase
difference between components), so it is linearly polarised.
$I = \frac{1}{2}c\varepsilon_0 E_0^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(625) = 0.830$
W/m$^2$.

**Solution 6.** (a) $R = [(1.33 - 1.50)/(1.33 + 1.50)]^2 = (0.17/2.83)^2 = 0.00361 = 0.361\%$. (b)
$\sin\theta_t = 1.33\sin 45°/1.50 = 0.627$$\theta_t = 38.8°$.
$r_s = (1.33\cos 45° - 1.50\cos 38.8°)/(1.33\cos 45° + 1.50\cos 38.8°) = (0.940 - 1.170)/(0.940 + 1.170) = -0.109$.
$R_s = 0.0119$.
$r_p = (1.50\cos 45° - 1.33\cos 38.8°)/(1.50\cos 45° + 1.33\cos 38.8°) = (1.061 - 1.038)/(1.061 + 1.038) = 0.011$.
$R_p = 1.2 \times 10^{-4}$. (c) $\theta_B = \arctan(1.50/1.33) = 48.4°$. The reflected light is most
strongly polarised at $\theta_B$.

**Solution 7.** $\theta_c = \arcsin(1.46/1.48) = 80.6°$.
$\mathrm{NA = \sqrt{1.48^2 - 1.46^2} = \sqrt{2.190 - 2.132} = \sqrt{0.0588} = 0.242$.
$\theta_{\max} = \arcsin(0.242) = 14.0°$.

**Solution 12.** (a) First minimum at
$\sin\theta_1 = \lambda/a = 633 \times 10^{-9}/(5.0 \times 10^{-5}) = 1.266 \times 10^{-2}$$\theta_1 = 0.726°$.
Central maximum width on screen: $2y_1 \approx 2L\theta_1 = 2(3.0)(1.266 \times 10^{-2}) = 7.60$ cm.
(b) Second secondary maximum near $\alpha \approx 5\pi/2 = 7.854$.
$I/I_0 = (\sin 7.854/7.854)^2 = (1/7.854)^2 = 0.0162$About 1.6% of $I_0$.

**Solution 16.** After the QWP: fast-axis component $E_f = E_0\cos 30° = 0.866\,E_0$Slow-axis
component $E_s = E_0\sin 30° = 0.500\,E_0$ with a $\pi/2$ phase delay. Since $E_f \neq E_s$The
output is elliptically polarised (not circular). After the HWP (same fast axis), the phase
difference doubles to $\pi$ and the slow-axis component is negated: the output is linearly polarised
at $-30°$ to the fast axis (reflected about the fast axis).

**Solution 18.** First lens: $1/s_1' = 1/20 - 1/30 = 1/60$So $s_1' = 60$ cm. The image forms at The
position of the second lens. Object distance for second lens: $s_2 = 60 - 60 = 0$ cm (object at
Infinity for the second lens). $1/s_2' = 1/f_2 - 1/s_2$: since $s_2 = 0$ (parallel rays enter the
Second lens), $s_2' = f_2 = -15$ cm. The final image is virtual, 15 cm to the left of the diverging
Lens.

Matrix method:
$M_{\mathrm{sys} = M_{\mathrm{lens_2} \cdot M_{\mathrm{prop} \cdot M_{\mathrm{lens_1}$
$= \begin{pmatrix} 1 & 0 \\ 1/15 & 1 \end{pmatrix} \begin{pmatrix} 1 & 60 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ -1/20 & 1 \end{pmatrix}$
$= \begin{pmatrix} 1 & 0 \\ 1/15 & 1 \end{pmatrix} \begin{pmatrix} 1 & 60 \\ -1/20 & 1 \end{pmatrix}$
$= \begin{pmatrix} 1 & 60 \\ 1/15 - 1/20 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 60 \\ 1/60 & 5 \end{pmatrix}$.

From the matrix $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$: $s' = -A/C = -1/(1/60) = -60$ cm
(measured From the second lens, so 60 cm to the left, but this is the object distance for a virtual
object). The Effective focal length: $-1/C = -60$ cm. The image forms where parallel output rays
converge: at $f_2 = -15$ cm. Total magnification:
$M = A - s'C = 1 - (-15)(1/60) = 1 + 1/4 = 5/4 = 1.25$ (upright, slightly magnified).

---

## 10. Fourier Optics

### 10.1 Fraunhofer Diffraction as a Fourier Transform

The Fraunhofer diffraction pattern of an aperture with transmittance function $t(x, y)$ illuminated
by a plane wave is proportional to the 2D Fourier transform of the aperture function:

$$E(u, v) \propto \iint t(x,y)\, e^{-2\pi i(ux + vy)}\, dx\, dy = \mathcal{F}\{t(x,y)\}(u, v)$$

Where $u = \sin\theta_x/\lambda$ and $v = \sin\theta_y/\lambda$ are the spatial frequencies.

**Theorem 10.1.** The intensity in the Fraunhofer diffraction pattern is

$$I(u,v) = I_0\,|\tilde{t}(u,v)|^2$$

Where $\tilde{t}(u,v) = \mathcal{F}\{t(x,y)\}(u,v)$ is the Fourier transform of the aperture
function.

_Proof._ The Huygens-Fresnel principle in the far field gives:

$$E(x',y') = \frac{e^{ikr}}{i\lambda r}\iint t(x,y)\, e^{-ik(xx' + yy')/r}\, dx\, dy$$

In the far field, $r \approx D$ and the phase factor $e^{-ik(xx' + yy')/r}$ is exactly the kernel of
the Fourier transform. $\blacksquare$

### 10.2 Convolution Theorem for Diffraction

**Theorem 10.2 (Convolution theorem).** If an aperture function is the convolution
$t = t_1 * t_2$The diffraction pattern is the product of the individual diffraction patterns:

$$\mathcal{F}\{t_1 * t_2\} = \mathcal{F}\{t_1\} \cdot \mathcal{F}\{t_2\}$$

**Corollary.** If an aperture is the product $t = t_1 \cdot t_2$The diffraction pattern is the
convolution of the individual patterns:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

### 10.3 Worked Example: Diffraction Grating via Fourier Transform

**Problem.** Use the Fourier transform to derive the intensity pattern of a grating with $N$ slits
of width $a$ and spacing $d$.

<details>
<summary>Solution</summary>

The transmittance of a single slit centred at $x = 0$ is $t_{\mathrm{slit}(x) = \mathrm{rect(x/a)$.
The full grating is $N$ slits:

$$t(x) = \sum_{n=0}^{N-1} t_{\mathrm{slit}(x - nd) = t_{\mathrm{slit}(x) * \sum_{n=0}^{N-1} \delta(x - nd)$$

The Fourier transform is:

$$\tilde{t}(u) = \mathcal{F}\{t_{\mathrm{slit}\} \cdot \mathcal{F}\left\{\sum_{n=0}^{N-1}\delta(x - nd)\right\}$$

$$= a\,\mathrm{sinc(\pi a u) \cdot \sum_{n=0}^{N-1} e^{-2\pi i n d u} = a\,\mathrm{sinc(\pi a u) \cdot \frac{\sin(N\pi d u)}{\sin(\pi d u)}$$

The intensity is:

$$I(u) = I_0\,a^2\,\mathrm{sinc^2(\pi a u)\,\frac{\sin^2(N\pi d u)}{\sin^2(\pi d u)}$$

The first factor is the single-slit envelope; the second is the $N$-slit interference pattern.
Principal maxima occur at $du = m$ (integer $m$), giving the grating equation
$d\sin\theta = m\lambda$.

$\blacksquare$

</details>

### 10.4 Worked Example: Circular Aperture and the Airy Pattern

**Problem.** Compute the Fraunhofer diffraction pattern of a circular aperture of radius $a$.

<details>
<summary>Solution</summary>

The aperture function is $t(r) = 1$ for $r \leq a$ and $t(r) = 0$ for $r > a$. By circular symmetry,
the Fourier transform in polar coordinates is:

$$\tilde{t}(q) = 2\pi\int_0^a J_0(2\pi q r)\, r\, dr$$

Where $J_0$ is the Bessel function of the first kind and $q = \sin\theta/\lambda$ is the radial
spatial frequency. Using the identity:

$$\int_0^a J_0(2\pi q r)\, r\, dr = \frac{a}{2\pi q}J_1(2\pi q a)$$

$$\tilde{t}(q) = \pi a^2 \cdot \frac{2J_1(\alpha)}{\alpha}$$

Where $\alpha = 2\pi a q = 2\pi a\sin\theta/\lambda$. The intensity is:

$$I(\theta) = I_0\left(\frac{2J_1(\alpha)}{\alpha}\right)^2$$

This is the **Airy pattern**. The first zero occurs at $\alpha = 3.832$Giving the angular radius of
the first dark ring:

$$\sin\theta_1 = 1.22\,\frac{\lambda}{d}$$

Where $d = 2a$ is the diameter.

$\blacksquare$

</details>

---

## 11. Coherence Theory

### 11.1 Temporal Coherence

A source has finite **temporal coherence** if the emitted light has a finite bandwidth $\Delta\nu$.
The **coherence time** is

$$\tau_c \sim \frac{1}{\Delta\nu}$$

And the **coherence length** is

$$L_c = c\,\tau_c \sim \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

For a Michelson interferometer, fringes are visible only when the path difference is less than
$L_c$.

### 11.2 Spatial Coherence

The **spatial coherence** of a source is characterised by the **coherence area** $A_c$. For a
circular source of angular radius $\Delta\theta$:

$$A_c \approx \frac{\lambda^2}{\pi(\Delta\theta)^2}$$

The van Cittert-Zernike theorem states that the spatial coherence of an incoherent source is given
by the Fourier transform of the source intensity distribution.

**Theorem 11.1 (van Cittert-Zernike).** The mutual coherence function of a quasi-monochromatic
incoherent source with intensity distribution $I(\xi, \eta)$ is

$$\Gamma(\Delta x, \Delta y) = \iint I(\xi, \eta)\, e^{-2\pi i(\xi\,\Delta x + \eta\,\Delta y)/(\lambda z)}\, d\xi\, d\eta$$

This is proportional to the Fourier transform of $I(\xi, \eta)$.

### 11.3 Worked Example: Coherence Length of a Sodium Lamp

**Problem.** A sodium lamp emits the D line at $\lambda = 589$ nm with a linewidth
$\Delta\lambda \approx 0.6$ nm. Find the coherence length and the maximum path difference for which
fringes are visible in a Michelson interferometer.

<details>
<summary>Solution</summary>

$$L_c = \frac{\lambda^2}{\Delta\lambda} = \frac{(589 \times 10^{-9})^2}{0.6 \times 10^{-9}} = \frac{3.47 \times 10^{-13}}{6 \times 10^{-10}} \approx 5.78 \times 10^{-4}\,\mathrm{m \approx 0.578\,\mathrm{mm$$

For a He-Ne laser ($\lambda = 632.8$ nm, $\Delta\lambda \sim 10^{-6}$ nm):

$$L_c = \frac{(632.8 \times 10^{-9})^2}{10^{-15}} \approx 400\,\mathrm{m$$

The enormous coherence length of the laser is why it produces sharp fringes over very large path
differences. $\blacksquare$

</details>

---

## 12. Detailed Diffraction Theory

### 12.1 Fresnel and Fraunhofer Diffraction

**Fresnel diffraction** (near-field): the observation screen is close enough that the curvature of
the wavefronts matters. The Fresnel diffraction integral is:

$$E(P) = \frac{i}{\lambda}\iint \frac{E(Q)}{r_{QP}}\, e^{ikr_{QP}}\, dS$$

**Fraunhofer diffraction** (far-field): the observation screen is far enough that the phase
variation across the aperture can be approximated as linear. This occurs when:

$$R \gg \frac{a^2}{\lambda}$$

Where $a$ is the aperture size and $R$ is the distance to the screen.

### 12.2 Fresnel Zones

For a point $P$ at distance $R$ from an aperture, the **Fresnel zones** are annular regions where
the path length from $P$ differs by $\lambda/2$. The $n$-th Fresnel zone has inner radius:

$$r_n = \sqrt{n\lambda R + \frac{n^2\lambda^2}{4}} \approx \sqrt{n\lambda R}$$

**Zone plate.** A Fresnel zone plate blocks alternate zones, producing a focused beam. It acts as a
lens with focal length $f = r_1^2/\lambda$.

### 12.3 Fresnel Diffraction from a Straight Edge

For a semi-infinite plane ($x > 0$), the Fresnel integral gives the intensity at a point $P$:

$$I(P) = \frac{I_0}{2}\left[\left(C(u) + \frac{1}{2}\right)^2 + \left(S(u) + \frac{1}{2}\right)^2\right]$$

Where $C(u)$ and $S(u)$ are the Fresnel integrals and $u = x\sqrt{2/(\lambda R)}$ is the Fresnel
number. At the geometric shadow edge ($u = 0$): $I/I_0 = 1/4$ (not zero!), demonstrating the failure
of geometric optics.

---

## 13. Polarisation in Detail

### 13.1 Jones Calculus

The **Jones vector** represents the polarisation state of a monochromatic plane wave:

$$\mathbf{E} = \begin{pmatrix} E_x \\ E_y \end{pmatrix} = \begin{pmatrix} A_x\,e^{i\delta_x} \\ A_y\,e^{i\delta_y} \end{pmatrix}$$

Optical elements are represented by $2 \times 2$ matrices:

- **Linear polariser** at angle $\theta$:
  $\mathbf{P}(\theta) = \begin{pmatrix}\cos^2\theta & \sin\theta\cos\theta \\ \sin\theta\cos\theta & \sin^2\theta\end{pmatrix}$

- **Quarter-wave plate** (fast axis horizontal, retardation $\pi/2$):
  $\mathbf{Q} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi/2}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & i\end{pmatrix}$

- **Half-wave plate** (retardation $\pi$):
  $\mathbf{H} = \begin{pmatrix}1 & 0 \\ 0 & e^{i\pi}\end{pmatrix} = \begin{pmatrix}1 & 0 \\ 0 & -1\end{pmatrix}$

**Theorem 13.1.** The output of a sequence of optical elements is the product of their Jones
matrices applied to the input Jones vector:

$$\mathbf{E}_{\mathrm{out} = \mathbf{M}_n \cdots \mathbf{M}_2\,\mathbf{M}_1\,\mathbf{E}_{\mathrm{in}$$

### 13.2 Stokes Parameters

For partially polarised light, the **Stokes parameters** are:

$$S_0 = |E_x|^2 + |E_y|^2, \quad S_1 = |E_x|^2 - |E_y|^2, \quad S_2 = 2\,\mathrm{Re(E_x E_y^*), \quad S_3 = 2\,\mathrm{Im(E_x E_y^*)$$

The **degree of polarisation** is

$$P = \frac{\sqrt{S_1^2 + S_2^2 + S_3^2}}{S_0}$$

For fully polarised light: $P = 1$. For unpolarised light: $S_1 = S_2 = S_3 = 0$.

### 13.3 Worked Example: Polarisation by Multiple Reflections

**Problem.** Unpolarised light is incident on a stack of $N$ glass plates at the Brewster angle.
Find the degree of polarisation of the transmitted light.

<details>
<summary>Solution</summary>

At the Brewster angle $\theta_B$The reflected light for the $p$-polarisation has zero amplitude
($r_p = 0$). The $s$-polarisation is partially reflected with reflectance
$R_s = ((n_1\cos\theta_i - n_2\cos\theta_t)/(n_1\cos\theta_i + n_2\cos\theta_t))^2$.

For one interface, the transmitted $p$-intensity is $T_p = 1$ and the transmitted $s$-intensity is
$T_s = 1 - R_s$. After $N$ interfaces:

$$I_p^{(N)} = I_0/2, \quad I_s^{(N)} = (I_0/2)(1 - R_s)^N$$

The degree of polarisation:

$$P = \frac{I_p^{(N)} - I_s^{(N)}}{I_p^{(N)} + I_s^{(N)}} = \frac{1 - (1 - R_s)^N}{1 + (1 - R_s)^N}$$

For $N \to \infty$: $P \to 1$. This is the principle behind "pile-of-plates" polarisers. For glass
($n = 1.5$) at $\theta_B \approx 56.3°$:
$R_s \approx ((1.5 \times 0.555 - \cos\theta_t)/(1.5 \times 0.555 + \cos\theta_t))^2$.

For five plates: $P = (1 - (1 - R_s)^5)/(1 + (1 - R_s)^5) \approx 50\%$.

$\blacksquare$

</details>

---

## 14. Common Pitfalls

- **Confusing Fraunhofer and Fresnel diffraction.** Fraunhofer (far-field) patterns are Fourier
  transforms; Fresnel (near-field) patterns involve Fresnel integrals. The transition occurs at
  $R \sim a^2/\lambda$.

- **Ignoring the phase in interference calculations.** Phase differences determine constructive and
  destructive interference. Always track the optical path length carefully.

- **Misidentifying Brewster's angle.** Brewster's angle is for the _reflected_ beam, not the
  transmitted beam. At Brewster's angle, the reflected light is purely $s$-polarised.

- **Neglecting the difference between intensity and amplitude.** Interference patterns depend on
  amplitudes (add with phases), while intensities add without phases for incoherent sources. The
  visibility of fringes is determined by the coherence of the source.

- **Forgetting that the Airy pattern involves $J_1$Not $J_0$.** The first zero of $J_1(x)$ is at
  $x = 3.832$Not at $x = 2.405$ (which is the first zero of $J_0$).

## 15. Fourier Optics

### 15.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer (far-field) limit, the diffraction pattern of an aperture with transmission
function $t(x, y)$ is the Fourier transform:

$$U(x', y') = \frac{e^{ikz}}{i\lambda z}\,e^{ik(x'^2 + y'^2)/(2z)}\iint t(x, y)\,e^{-ik(xx' + yy')/z}\,dx\,dy$$

Where $(x', y')$ are coordinates in the observation plane at distance $z$ from the aperture.

Defining spatial frequencies $f_x = x'/(\lambda z)$$f_y = y'/(\lambda z)$:

$$U(f_x, f_y) \propto \mathcal{F}\{t(x,y)\}(f_x, f_y)$$

This correspondence between diffraction and Fourier transforms is the foundation of Fourier optics
and has profound implications for image processing and optical information processing.

### 15.2 The Abbe Theory of the Microscope

Ernst Abbe (1873) showed that a microscope forms an image by taking two Fourier transforms: the
objective lens performs the first Fourier transform (creating the diffraction pattern at its back
focal plane), and the eyepiece (or tube lens) performs the inverse transform.

**Resolution limit:** The finest spatial frequency that can pass through the objective is:

$$f_{\max} = \frac{\text{NA}{\lambda}$$

Where $\text{NA = n\sin\theta$ is the numerical aperture. The minimum resolvable distance (Abbe
limit):

$$d_{\min} = \frac{\lambda}{2\,\text{NA}$$

For green light ($\lambda = 550$ nm) and NA = 1.4 (oil immersion): $d_{\min} \approx 196$ nm.

### 15.3 Spatial Filtering

Since the back focal plane of a lens contains the spatial frequency spectrum of the input, placing a
mask (spatial filter) in this plane modifies the image:

- **Low-pass filter:** Blocks high spatial frequencies $\to$ smooths the image, removes fine detail
- **High-pass filter:** Blocks low frequencies $\to$ enhances edges, removes uniform background
- **Phase contrast microscopy:** (Zernike, 1942) Adds a $\pi/2$ phase shift to the undiffracted (DC)
  component, converting phase variations into intensity variations. This makes transparent
  biological specimens visible without staining.

<details>
<summary>Worked Example 15.1: Diffraction from a Grating</summary>

A diffraction grating with $N$ slits of width $a$ and spacing $d$ has transmission function:

$$t(x) = \sum_{n=0}^{N-1}\text{rect\!\left(\frac{x - nd}{a}\right)$$

The Fraunhofer pattern is:

$$I(\theta) = I_0\left(\frac{\sin\alpha}{\alpha}\right)^2\left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

Where $\alpha = \pi a\sin\theta/\lambda$ (single-slit envelope) and
$\beta = \pi d\sin\theta/\lambda$ (multi-slit interference).

For $N = 5$$d = 3a$:

- Principal maxima at $\beta = m\pi$: $\sin\theta = m\lambda/d$
- Between principal maxima: $N - 2 = 3$ secondary maxima
- Width of principal maximum: $\Delta\theta = \lambda/(Nd\cos\theta)$
- Missing orders: when $m$ is a multiple of $d/a = 3$ (i.e., 3rd, 6th, ... Orders are suppressed by
  the single-slit zero)

The resolving power: $R = mN = m \times 5$.

</details>

## 16. Coherence Theory

### 16.1 Temporal Coherence

**Temporal coherence** describes the correlation of a wave with itself at different times. The
**coherence time** $\tau_c$ is the time over which the phase relationship is maintained.

For a quasi-monochromatic source with bandwidth $\Delta\omega$:

$$\tau_c \sim \frac{2\pi}{\Delta\omega} = \frac{1}{\Delta\nu}$$

The **coherence length**: $l_c = c\tau_c = \lambda^2/\Delta\lambda$.

| Source           | $\Delta\lambda$   | $l_c$            |
| ---------------- | ----------------- | ---------------- |
| White light      | $\sim 300$ nm     | $\sim 1.5\,\mu$M |
| Na D line        | $\sim 0.6$ nm     | $\sim 0.5$ mm    |
| He-Ne laser      | $\sim 0.002$ nm   | $\sim 20$ cm     |
| Stabilised laser | $\sim 10^{-6}$ nm | $\sim 400$ km    |

### 16.2 Spatial Coherence

**Spatial coherence** describes the correlation of a wave at different points in space at the same
time. The **van Cittert--Zernike theorem** states that the spatial coherence of light from an
extended incoherent source is given by the Fourier transform of the source intensity distribution:

$$\gamma(\Delta x) = \frac{\iint I(\xi, \eta)\,e^{-ik(\xi\Delta x)/(R)}\,d\xi\,d\eta}{\iint I(\xi, \eta)\,d\xi\,d\eta}$$

Where $I(\xi, \eta)$ is the source intensity distribution and $R$ is the distance to the source.

**Michelson stellar interferometer:** Uses two separated apertures to measure the spatial coherence
of starlight, from which the angular diameter of the star can be determined. The first fringe
visibility minimum occurs at:

$$d = \frac{0.61\lambda}{\alpha}$$

Where $\alpha$ is the angular diameter and $d$ is the aperture separation.

### 16.3 Degree of Coherence

The **complex degree of coherence** $\gamma_{12}(\tau)$ between fields at points 1 and 2 with time
delay $\tau$:

$$\gamma_{12}(\tau) = \frac{\langle E_1^*(t)E_2(t+\tau)\rangle}{\sqrt{\langle|E_1|^2\rangle\langle|E_2|^2\rangle}}$$

This satisfies $0 \leq |\gamma_{12}| \leq 1$. The **visibility** of interference fringes is:

$$V = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}} = |\gamma_{12}|$$

<details>
<summary>Worked Example 16.1: Double-Slit with Extended Source</summary>

A double-slit experiment uses an extended source of width $w$ at distance $D$ from the slits (slit
separation $d$).

By the van Cittert--Zernike theorem, the spatial coherence at the slits is:

$$|\gamma| = \left|\frac{\sin(\pi wd/(\lambda D))}{\pi wd/(\lambda D)}\right|$$

The fringe visibility vanishes when $\pi wd/(\lambda D) = \pi$I.e., $d = \lambda D/w$.

For a candle flame ($w \approx 1$ mm) at $D = 1$ m with $\lambda = 550$ nm:

$$d_{\text{max} = \frac{550 \times 10^{-9} \times 1}{10^{-3}} = 5.5 \times 10^{-4}\,\text{m = 0.55\,\text{mm$$

Beyond this slit separation, the fringes wash out. For a star ($w \sim 10^8$ km, $D \sim 10^{14}$
km):

$$d_{\text{max} = \frac{550 \times 10^{-9} \times 10^{17}}{10^{11}} = 550\,\text{m$$

This is the basis of the Michelson stellar interferometer: by measuring $d_{\text{max}$The stellar
diameter is determined.

</details>

## 17. Lasers

### 17.1 Conditions for Lasing

A laser requires three conditions:

1. **Population inversion:** $N_2 > N_1$ for the lasing transition (between levels 2 and 1),
   achieved by pumping.
2. **Stimulated emission dominance:** The stimulated emission rate must exceed the absorption rate:
   $N_2 > N_1$.
3. **Optical feedback:** A resonant cavity ( two mirrors) provides positive feedback.

**Threshold condition:** The gain per round trip must exceed the losses:

$$R_1 R_2\,e^{2gL} \geq 1$$

Where $R_1, R_2$ are mirror reflectivities, $g$ is the gain coefficient, and $L$ is the cavity
length.

The threshold gain:

$$g_{\text{th} = -\frac{1}{2L}\ln(R_1 R_2) = \alpha_i + \alpha_m$$

Where $\alpha_i$ is the internal loss and $\alpha_m = -\ln(R_1 R_2)/(2L)$ is the mirror loss.

### 17.2 Laser Types

| Type        | Gain medium   | Wavelength      | Characteristics                            |
| ----------- | ------------- | --------------- | ------------------------------------------ |
| He-Ne       | Gas           | 632.8 nm        | CW, low power ($\sim$1 mW), high coherence |
| Ar$^+$      | Gas           | 488, 514 nm     | CW, multiline, moderate power              |
| CO$_2$      | Gas           | 10.6 $\mu$M     | High power (kW), efficient ($\sim$20%)     |
| Nd:YAG      | Solid state   | 1064 nm         | Pulsed or CW, high power                   |
| Ti:Sapphire | Solid state   | 700--1000 nm    | Tunable, femtosecond pulses                |
| GaAs/InP    | Semiconductor | 0.8--1.6 $\mu$M | Compact, efficient, diode laser            |
| Dye         | Liquid        | Tunable         | Wide tuning range                          |

### 17.3 Gaussian Beam Optics

The fundamental mode ($\text{TEM_{00}$) of a laser cavity is a **Gaussian beam**:

$$E(r, z) = E_0\frac{w_0}{w(z)}\exp\!\left(-\frac{r^2}{w(z)^2}\right)\exp\!\left(-i\left[kz + \frac{kr^2}{2R(z)} - \zeta(z)\right]\right)$$

**Beam parameters:**

- **Beam waist:** $w_0$ (minimum spot size)
- **Rayleigh range:** $z_R = \pi w_0^2/\lambda$
- **Beam radius:** $w(z) = w_0\sqrt{1 + (z/z_R)^2}$
- **Radius of curvature:** $R(z) = z[1 + (z_R/z)^2]$
- **Divergence angle:** $\theta = \lambda/(\pi w_0)$

<details>
<summary>Worked Example 17.1: Gaussian Beam Focusing</summary>

A He-Ne laser ($\lambda = 632.8$ nm) has a beam waist $w_0 = 0.3$ mm.

(a) Rayleigh range:
$z_R = \pi(0.3 \times 10^{-3})^2/(632.8 \times 10^{-9}) = \pi \times 9 \times 10^{-8}/6.328 \times 10^{-7} = 0.447$
m.

(b) Beam radius at $z = 2$ m:
$w = 0.3\sqrt{1 + (2/0.447)^2} = 0.3\sqrt{1 + 20.0} = 0.3 \times 4.58 = 1.37$ mm.

(c) Divergence:
$\theta = 632.8 \times 10^{-9}/(\pi \times 0.3 \times 10^{-3}) = 6.71 \times 10^{-4}$ rad $= 0.67$
mrad.

At a distance of 1 km, the beam radius would be $w \approx \theta \times 1000 = 0.67$ m (ignoring
the waist contribution, valid for $z \gg z_R$).

</details>

## Common Pitfalls (Additional)

1. **Coherence length limits interferometer arm difference:** In a Michelson interferometer, the
   path difference must not exceed the coherence length $l_c = \lambda^2/\Delta\lambda$ for fringes
   to be visible. White light fringes are visible only for near-zero path difference
   ($l_c \sim 1.5\,\mu$M), while laser fringes remain visible for path differences of many metres.

2. **The Abbe limit is not a fundamental limit:** Techniques such as STED (stimulated emission
   depletion), PALM (photoactivated localisation microscopy), and SIM (structured illumination
   microscopy) can achieve resolutions well below the Abbe limit of $\lambda/(2\text{NA)$. The 2014
   Nobel Prize in Chemistry was awarded for super-resolution microscopy.

3. **Gaussian beams do not have sharp edges:** Unlike geometrical optics rays, Gaussian beams have
   no well-defined edge. The beam radius $w$ is defined as the $1/e^2$ intensity radius
   ($\sim 86.5\%$ of the peak). The power contained within $w$ is $1 - e^{-2} \approx 86.5\%$ of the
   total, not 100%.

4. **Spatial filtering with a pinhole:** A pinhole of diameter $d$ in the focal plane of a lens acts
   as a low-pass spatial filter with cutoff frequency $f_c = d/(\lambda f)$. The transmitted beam
   approaches a Gaussian profile (Airy pattern central maximum), which is why spatial filtering is
   used to "clean up" laser beams.

5. **Polarisation and Brewster's angle:** At Brewster's angle, the _reflected_ beam is purely
   $s$-polarised, not the transmitted beam. The transmitted beam has reduced $s$-component and
   becomes partially $p$-polarised. Complete polarisation of the transmitted beam requires many
   interfaces (pile-of-plates polariser).

## Problems (Additional)

<details>
<summary>Problem 19: Resolution of a Telescope</summary>

The Hubble Space Telescope has a primary mirror diameter of 2.4 m and operates at $\lambda = 550$
nm.

(a) Calculate the angular resolution (Rayleigh criterion).

(b) What is the minimum distance on the Moon's surface ($d = 384\,400$ km) that can be resolved?

(c) How does atmospheric seeing ($\sim 0.5$ arcsec) compare with the diffraction limit?

**Solution:**

(a) $\theta_{\min} = 1.22\lambda/D = 1.22 \times 550 \times 10^{-9}/2.4 = 2.80 \times 10^{-7}$ rad
$= 0.058$ arcsec.

(b) $s = \theta_{\min} \times d = 2.80 \times 10^{-7} \times 3.844 \times 10^8 = 107.6$ m
$\approx 108$ m.

(c) Atmospheric seeing $\sim 0.5$ arcsec is about 8.6 times worse than Hubble's diffraction limit.
This is why Hubble was placed in space --- ground-based telescopes are limited by seeing, not
diffraction, unless adaptive optics is used.

</details>

<details>
<summary>Problem 20: Fabry--Perot Etalon</summary>

A Fabry--Perot etalon consists of two parallel reflecting surfaces with reflectance $R = 0.8$ and
separation $d = 1$ mm, used at normal incidence with $\lambda = 500$ nm.

(a) Calculate the free spectral range (FSR) in frequency and wavelength.

(b) Calculate the finesse $\mathcal{F}$.

(c) What is the minimum resolvable wavelength difference?

**Solution:**

(a) FSR in frequency:
$\Delta\nu_{\text{FSR} = c/(2d) = 3 \times 10^8/(2 \times 10^{-3}) = 1.5 \times 10^{11}$ Hz $= 150$
GHz.

FSR in wavelength:
$\Delta\lambda_{\text{FSR} = \lambda^2/(2d) = (500 \times 10^{-9})^2/(2 \times 10^{-3}) = 1.25 \times 10^{-13}$
m $= 0.125$ nm.

(b) Finesse:
$\mathcal{F} = \pi\sqrt{R}/(1 - R) = \pi\sqrt{0.8}/(1 - 0.8) = \pi \times 0.894/0.2 = 14.1$.

(c) Minimum resolvable wavelength difference (resolution):

$$\delta\lambda = \frac{\Delta\lambda_{\text{FSR}}{\mathcal{F}} = \frac{0.125}{14.1}\ \text{nm = 0.0089\ \text{nm = 8.9\ \text{pm$$

This corresponds to a resolving power
$\mathcal{R} = \lambda/\delta\lambda = 500/0.0089 \approx 56\,000$.

</details>

## 18. Nonlinear Optics

### 18.1 Nonlinear Polarisation

When the electric field is strong (e.g., laser), the polarisation develops nonlinear terms:

$$P = \varepsilon_0(\chi^{(1)}E + \chi^{(2)}E^2 + \chi^{(3)}E^3 + \cdots)$$

The second-order susceptibility $\chi^{(2)}$ is nonzero only in non-centrosymmetric media. The
third-order $\chi^{(3)}$ exists in all media.

### 18.2 Second Harmonic Generation (SHG)

A beam of frequency $\omega$ generates light at $2\omega$. The intensity of the second harmonic:

$$I_{2\omega} = \frac{2\omega^2 d_{\text{eff}^2 I_\omega^2 L^2}{n_\omega^2 n_{2\omega} c^3 \varepsilon_0}\,\text{sinc^2\!\left(\frac{\Delta k\,L}{2}\right)$$

Where $d_{\text{eff} = \chi^{(2)}/2$ is the effective nonlinear coefficient and
$\Delta k = k_{2\omega} - 2k_\omega$ is the phase mismatch.

**Phase matching:** Maximum conversion occurs when $\Delta k = 0$ (momentum conservation).
Techniques:

- **Birefringent phase matching:** Exploit the different refractive indices for ordinary and
  extraordinary polarisations.
- **Quasi-phase matching:** Periodically pole the nonlinear crystal to reverse the sign of
  $\chi^{(2)}$ every coherence length $\pi/\Delta k$.

### 18.3 Other Nonlinear Processes

| Process                    | Order        | Description                                              |
| -------------------------- | ------------ | -------------------------------------------------------- |
| SHG                        | $\chi^{(2)}$ | $\omega + \omega \to 2\omega$                            |
| SFG                        | $\chi^{(2)}$ | $\omega_1 + \omega_2 \to \omega_3$                       |
| Pockels effect             | $\chi^{(2)}$ | Linear electro-optic effect ($\Delta n \propto E$)       |
| Optical Kerr effect        | $\chi^{(3)}$ | $n = n_0 + n_2 I$ (intensity-dependent refractive index) |
| Self-focusing              | $\chi^{(3)}$ | Beam collapses when $P > P_{\text{cr}$                   |
| Two-photon absorption      | $\chi^{(3)}$ | Simultaneous absorption of two photons                   |
| Stimulated Raman/Brillouin | $\chi^{(3)}$ | Inelastic scattering amplification                       |

**Self-phase modulation:** The Kerr effect causes $\Delta n = n_2 I$ which broadens the spectrum of
ultrashort pulses. Combined with dispersion, this leads to **soliton** formation in optical fibres
(a balance between Kerr self-focusing and anomalous dispersion).

<details>
<summary>Worked Example 18.1: Phase Matching in BBO Crystal</summary>

Beta-barium borate (BBO) is a common nonlinear crystal for SHG of 800 nm Ti:sapphire laser light.

The relevant refractive indices at $\lambda = 800$ nm ($\omega$) and $\lambda = 400$ nm ($2\omega$):

$n_o(800\,\text{nm) = 1.6549$$n_e(800\,\text{nm) = 1.5425$ (at $\theta = 29.2°$)

$n_o(400\,\text{nm) = 1.7030$$n_e(400\,\text{nm) = 1.5665$ (at $\theta = 29.2°$)

For Type I phase matching ($o + o \to e$): $n_e(2\omega, \theta) = n_o(\omega)$.

Using Sellmeier equations, the phase matching angle is found to be
$\theta_{\text{PM} \approx 29.2°$.

The coherence length without phase matching:

$$\ell_c = \frac{\pi}{\Delta k} = \frac{\lambda}{4(n_e^{2\omega} - n_o^{\omega})}$$

For typical values: $\ell_c \sim 5$ $\mu$M. A 1 mm crystal is $\sim 200$ coherence lengths long, so
phase matching is essential.

The conversion efficiency for perfect phase matching with a 10 mm crystal at $I_\omega = 100$
MW/cm$^2$:

$$\eta \approx \frac{8\pi^2 \times (2.0 \times 10^{-12})^2 \times 10^{-4} \times 10^{10}}{(1.6)^3 \times (400 \times 10^{-9})^2 \times 3 \times 10^8 \times 8.85 \times 10^{-12}} \approx 15\%$$

</details>

## 19. Computational Imaging and Adaptive Optics

### 19.1 Compressed Sensing

**Compressed sensing** (Candes, Tao, Donoho, 2006) shows that signals that are **sparse** in some
basis can be reconstructed from far fewer measurements than Nyquist sampling requires:

$$\hat{\mathbf{x}} = \arg\min_{\mathbf{x}} \|\mathbf{x}\|_1 \quad \text{subject to  \mathbf{y} = \Phi\mathbf{x}$$

Where $\Phi$ is the measurement matrix and $|\cdot|_1$ is the $L^1$ norm promoting sparsity.

### 19.2 Adaptive Optics

**Atmospheric turbulence** causes phase distortions in astronomical images. **Adaptive optics (AO)**
corrects these in real time using a deformable mirror. The Strehl ratio:

$$S = \exp\left[-\left(\frac{2\pi}{\lambda}\right)^2\langle\Delta\phi^2\rangle\right]$$

For diffraction-limited imaging ($S > 0.8$): $\Delta\phi_{\text{rms} < \lambda/14$. On an 8 m
telescope at visible wavelengths, the deformable mirror must update at $>500$ Hz to track the
Greenwood frequency $f_G \sim 100$ Hz.

## Worked Examples

**Example 1: Conservation of energy**

A $0.50\,\text{kg}$ ball is dropped from a height of $20\,\text{m}$. Calculate its speed just before
it hits the ground (ignore air resistance).

**Solution:**

Using conservation of energy: $mgh = \frac{1}{2}mv^2$

$$v = \sqrt{2gh} = \sqrt{2 \times 9.81 \times 20} = \sqrt{392.4} \approx 19.8\,\text{m\,s}^{-1}$$

## Summary

- Wave equation: $\frac{\partial^2 u}{\partial t^2} = v^2 \nabla^2 u$; solutions include plane waves
  and spherical waves.
- Interference: coherent superposition; Young's double slit gives $\Delta y = \lambda D / d$; thin
  film interference depends on optical path difference.
- Diffraction: single slit intensity $I = I_0 \text{sinc}^2(\beta)$; diffraction grating resolves
  wavelengths with $d \sin\theta = n\lambda$.
- Polarisation: linear, circular, and elliptical; Brewster's angle; Malus's law
  $I = I_0 \cos^2\theta$.
- Optical instruments: resolution limited by diffraction (Rayleigh criterion
  $\theta = 1.22\lambda/D$); aberrations corrected by lens design.

## Cross-References

| Topic               | Site        | Link                                                                                   |
| ------------------- | ----------- | -------------------------------------------------------------------------------------- |
| Electromagnetism    | WyattsNotes | [View](/docs/university/physics/electromagnetism)                                      |
| Quantum Mechanics   | WyattsNotes | [View](/docs/university/physics/quantum-mechanics)                                     |
| Classical Mechanics | WyattsNotes | [View](/docs/university/physics/classical-mechanics)                                   |
| Optics — MIT 8.03   | MIT OCW     | [View](https://ocw.mit.edu/courses/8-03sc-physics-iii-vibrations-and-waves-fall-2016/) |
