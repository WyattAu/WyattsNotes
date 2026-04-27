---
title: Optics and Wave Physics
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

In vacuum, with no sources ($\rho = 0$, $\mathbf{J} = \mathbf{0}$), Maxwell's equations give:

$$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E} = -\nabla^2 \mathbf{E}$$

From Faraday's law: $\nabla \times \mathbf{E} = -\partial \mathbf{B}/\partial t$, so:

$$\nabla \times \left(-\frac{\partial \mathbf{B}}{\partial t}\right) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Hence:

$$\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

This is the **electromagnetic wave equation** with wave speed $c = 1/\sqrt{\mu_0 \varepsilon_0}$.

The same equation holds for $\mathbf{B}$:

$$\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}$$

### 1.2 General Solutions

The one-dimensional wave equation:

$$\frac{\partial^2 u}{\partial x^2} = \frac{1}{v^2}\frac{\partial^2 u}{\partial t^2}$$

has the general solution (d'Alembert's solution):

$$u(x, t) = f(x - vt) + g(x + vt)$$

where $f$ is a wave travelling in the $+x$ direction and $g$ in the $-x$ direction.

**Proof.** Substitute $u = f(x - vt)$. Let $\xi = x - vt$. Then $\partial u/\partial x = f'(\xi)$,
$\partial^2 u/\partial x^2 = f''(\xi)$, $\partial u/\partial t = -vf'(\xi)$,
$\partial^2 u/\partial t^2 = v^2 f''(\xi)$. The wave equation gives $f'' = (v^2/v^2)f''$, which
is identically satisfied. The same holds for $g(x + vt)$. By linearity, the sum is also a solution.
$\blacksquare$

<details>
<summary>Worked Example: Verifying a wave solution</summary>

**Problem.** A string under tension has the wave equation $\partial^2 y/\partial t^2 = 100\,\partial^2 y/\partial x^2$. Verify that $y(x,t) = 0.03\sin(5x - 50t)$ is a solution. Find the wave speed, wavelength, frequency, and propagation direction.

**Solution.** The wave speed is $v = \sqrt{100} = 10$ m/s. Comparing with the standard form
$y = A\sin(kx - \omega t)$: $A = 0.03$ m, $k = 5$ rad/m, $\omega = 50$ rad/s.

Verification: $\partial^2 y/\partial x^2 = -25 \times 0.03\sin(5x - 50t)$ and
$\partial^2 y/\partial t^2 = -2500 \times 0.03\sin(5x - 50t)$, so
$\partial^2 y/\partial t^2 = 100 \times \partial^2 y/\partial x^2$. $\checkmark$

Wavelength: $\lambda = 2\pi/k = 2\pi/5 \approx 1.26$ m.
Frequency: $f = \omega/(2\pi) = 50/(2\pi) \approx 7.96$ Hz.
Direction: the argument $5x - 50t$ indicates propagation in the $+x$ direction.

</details>

### 1.3 Complex Representation

It is convenient to write monochromatic waves as:

$$\mathbf{E}(\mathbf{r}, t) = \mathrm{Re}\left[\tilde{\mathbf{E}}\, e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}\right]$$

where $\tilde{\mathbf{E}}$ is the complex amplitude, $\mathbf{k}$ is the wave vector, and $\omega$ is
the angular frequency. The dispersion relation is $\omega = ck = c|\mathbf{k}|$.

The wave vector satisfies $|\mathbf{k}| = 2\pi/\lambda$ and $\omega = 2\pi\nu$.

When computing intensities, the complex representation simplifies the algebra. For a plane wave with
complex amplitude $\tilde{E}$:

$$I = \frac{1}{2}c\varepsilon_0 |\tilde{E}|^2$$

<details>
<summary>Worked Example: Complex amplitude and intensity</summary>

**Problem.** A plane wave propagating in the $+z$ direction has complex amplitude
$\tilde{\mathbf{E}} = (10 + 5i)\hat{\mathbf{x}}$ V/m in vacuum. Find the real electric field, the
intensity, and the phase of the wave relative to $\cos(kz - \omega t)$.

**Solution.** $|\tilde{E}| = \sqrt{10^2 + 5^2} = \sqrt{125} \approx 11.18$ V/m.
Phase: $\phi = \arctan(5/10) = 26.57°$.

Real field: $\mathbf{E}(z,t) = 11.18\cos(kz - \omega t + 26.57°)\,\hat{\mathbf{x}}$ V/m.

Intensity: $I = \frac{1}{2}c\varepsilon_0 |\tilde{E}|^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(125) = 0.166$ W/m$^2$.

</details>

### 1.4 Standing Waves

When two waves of equal amplitude and frequency travel in opposite directions, their superposition
produces a **standing wave**. Consider:

$$u_1 = A\sin(kx - \omega t), \quad u_2 = A\sin(kx + \omega t)$$

Using the identity $\sin\alpha + \sin\beta = 2\sin\frac{\alpha+\beta}{2}\cos\frac{\alpha-\beta}{2}$:

$$u(x,t) = 2A\sin(kx)\cos(\omega t)$$

This is a standing wave with the following properties:

- **Nodes** (points of zero displacement): $kx = m\pi$, i.e., $x = m\lambda/2$ for
  $m = 0, 1, 2, \ldots$
- **Antinodes** (points of maximum displacement): $kx = (m + 1/2)\pi$, i.e.,
  $x = (2m+1)\lambda/4$.
- All points between two nodes oscillate **in phase** (or in antiphase with adjacent segments).
- The standing wave does not transport energy in either direction.

**Standing waves on a string of length $L$ fixed at both ends.** The boundary conditions $u(0,t) = 0$
and $u(L,t) = 0$ require $\sin(kL) = 0$, so:

$$k_n L = n\pi \implies \lambda_n = \frac{2L}{n}, \quad f_n = \frac{nv}{2L}, \quad n = 1, 2, 3, \ldots$$

The allowed frequencies are integer multiples of the **fundamental frequency** $f_1 = v/(2L)$.
The general solution is a superposition of all normal modes:

$$u(x,t) = \sum_{n=1}^{\infty} \left(A_n \sin k_n x \cos \omega_n t + B_n \sin k_n x \sin \omega_n t\right)$$

**Standing waves on a string fixed at one end ($x = 0$) and free at the other ($x = L$).**
The free end requires $\partial u/\partial x|_{x=L} = 0$, giving $\cos(kL) = 0$, so:

$$k_n L = (n + 1/2)\pi \implies f_n = \frac{(2n+1)v}{4L}, \quad n = 0, 1, 2, \ldots$$

Only odd harmonics are present. A pipe open at one end and closed at the other behaves analogously
for sound waves.

<details>
<summary>Worked Example: Guitar string harmonics</summary>

**Problem.** A guitar string of length $L = 0.65$ m is fixed at both ends. The fundamental frequency
is $f_1 = 330$ Hz (the note E4). Find the wave speed, the frequency of the third harmonic, and the
positions of the nodes for the third harmonic.

**Solution.** Wave speed: $v = 2Lf_1 = 2 \times 0.65 \times 330 = 429$ m/s.

Third harmonic: $f_3 = 3f_1 = 990$ Hz. Wavelength: $\lambda_3 = 2L/3 = 0.433$ m.

Nodes at $x = m\lambda_3/2 = m(0.433/2) = 0.217m$ for $m = 0, 1, 2, 3$.
Positions: $x = 0, 0.217, 0.433, 0.650$ m (the endpoints and two interior nodes).

</details>

### 1.5 Energy Transport by Waves

For a transverse wave on a string of linear mass density $\mu$ under tension $T$, with
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

For a sinusoidal wave $u = A\sin(kx - \omega t)$, the time-averaged power is:

$$\langle P \rangle = \frac{1}{2}\mu v \omega^2 A^2$$

The **intensity** (power per unit area, generalising to 3D) is:

$$I = \frac{1}{2}\rho v \omega^2 A^2$$

where $\rho$ is the mass density of the medium.

<details>
<summary>Worked Example: Wave energy and power on a string</summary>

**Problem.** A steel wire of diameter 1.0 mm and density $7800$ kg/m$^3$ is under 500 N of tension.
A sinusoidal wave of amplitude 5.0 mm and frequency 200 Hz propagates along it. Find (a) the wave
speed, (b) the average power, and (c) the intensity (power per unit cross-sectional area).

**Solution.** Cross-sectional area: $A_{\mathrm{wire}} = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$.
Linear density: $\mu = \rho A_{\mathrm{wire}} = 7800 \times 7.85 \times 10^{-7} = 6.12 \times 10^{-3}$ kg/m.

(a) $v = \sqrt{T/\mu} = \sqrt{500/(6.12 \times 10^{-3})} = \sqrt{8.17 \times 10^4} = 286$ m/s.

(b) $\omega = 2\pi \times 200 = 1257$ rad/s.
$\langle P \rangle = \frac{1}{2}\mu v \omega^2 A^2 = \frac{1}{2}(6.12 \times 10^{-3})(286)(1257)^2(5.0 \times 10^{-3})^2$
$= \frac{1}{2}(6.12 \times 10^{-3})(286)(1.58 \times 10^6)(2.5 \times 10^{-5}) = 34.7$ W.

(c) Intensity: $I = \langle P \rangle/A_{\mathrm{wire}} = 34.7/(7.85 \times 10^{-7}) = 4.42 \times 10^7$ W/m$^2$.

</details>

### 1.6 Wave Packets and Group Velocity

A real wave is never perfectly monochromatic. A **wave packet** is a superposition of plane waves
with a narrow range of frequencies and wave vectors:

$$\psi(x,t) = \int_{-\infty}^{\infty} A(k)\, e^{i(kx - \omega(k)t)}\,dk$$

where $A(k)$ is the spectral amplitude, peaked around $k_0$ with width $\Delta k$.

Expanding the dispersion relation around $k_0$:

$$\omega(k) \approx \omega_0 + v_g(k - k_0) + \frac{1}{2}\alpha(k - k_0)^2$$

where $v_g = \left.d\omega/dk\right|_{k_0}$ is the **group velocity** and
$\alpha = d^2\omega/dk^2$ is the **group velocity dispersion** (GVD).

Substituting and carrying out the Gaussian integral (for a Gaussian envelope $A(k)$):

$$|\psi(x,t)|^2 \propto \exp\left(-\frac{(x - v_g t)^2}{2\sigma_x^2(t)}\right)$$

where $\sigma_x(t) = \sigma_x(0)\sqrt{1 + (\alpha t / 2\sigma_x^2(0))^2}$.

The envelope moves at $v_g$, while individual wave crests move at the **phase velocity**
$v_p = \omega/k$. The packet **broadens** over time due to GVD.

- In a **non-dispersive** medium ($\omega \propto k$, so $v_g = v_p$): the packet propagates
  without distortion.
- In a **normally dispersive** medium ($d^2\omega/dk^2 \gt 0$): $v_g \lt v_p$ and the packet
  broadens.

**Relation to the wave equation.** The 1D wave equation $\partial^2 u/\partial t^2 = v^2\partial^2 u/\partial x^2$
has dispersion relation $\omega = \pm vk$, giving $v_g = v_p = v$ — it is non-dispersive.

<details>
<summary>Worked Example: Group velocity in a dispersive medium</summary>

**Problem.** A dispersive medium has the dispersion relation $\omega = \alpha k^2$ with
$\alpha = 5.0 \times 10^3$ m$^2$/s. For a wave packet centred at $k_0 = 200$ rad/m,
find (a) the phase velocity, (b) the group velocity, and (c) the time for the packet width to
double, given an initial width $\sigma_0 = 0.01$ m.

**Solution.**

(a) Phase velocity: $v_p = \omega/k = \alpha k_0 = 5.0 \times 10^3 \times 200 = 1.0 \times 10^6$ m/s.

(b) Group velocity: $v_g = d\omega/dk = 2\alpha k_0 = 2 \times 5.0 \times 10^3 \times 200 = 2.0 \times 10^6$ m/s.

(c) GVD: $\alpha_{\mathrm{GVD}} = d^2\omega/dk^2 = 2\alpha = 1.0 \times 10^4$ m$^2$/s.
The packet width doubles when $1 + (\alpha_{\mathrm{GVD}}\, t / 2\sigma_0^2)^2 = 4$:
$\alpha_{\mathrm{GVD}}\, t / 2\sigma_0^2 = \sqrt{3}$
$t = 2\sigma_0^2\sqrt{3}/\alpha_{\mathrm{GVD}} = 2(10^{-4})(1.732)/(10^4) = 3.46 \times 10^{-8}$ s $= 34.6$ ns.

</details>

:::caution Common Pitfall
The group velocity $v_g = d\omega/dk$ describes the motion of the wave packet envelope and equals
the energy transport velocity in lossless media. However, it is only equal to the signal velocity
in regions of weak, normal dispersion. Near absorption resonances, $v_g$ can exceed $c$ or become
negative — this does not violate causality, since the true signal velocity (front velocity) never
exceeds $c$.
:::

## 2. Electromagnetic Waves

### 2.1 Properties of EM Waves

From Maxwell's equations, the following properties hold for plane EM waves:

1. **Transversality:** $\mathbf{E}$ and $\mathbf{B}$ are perpendicular to $\mathbf{k}$ and to each
   other.
2. **Orthogonality:** $\mathbf{E} \perp \mathbf{B}$, and $|\mathbf{E}| = c|\mathbf{B}|$.
3. **In-phase:** $\mathbf{E}$ and $\mathbf{B}$ oscillate in phase.
4. **Dispersion relation:** $\omega = ck$ in vacuum.

**Proof of transversality.** For a plane wave $\mathbf{E} = \mathbf{E}_0 e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}$,
Gauss's law gives $i\mathbf{k}\cdot\mathbf{E}_0 = 0$, so $\mathbf{k} \perp \mathbf{E}_0$. Similarly
from $\nabla \cdot \mathbf{B} = 0$: $\mathbf{k} \perp \mathbf{B}_0$. $\blacksquare$

**Proof of $|\mathbf{E}| = c|\mathbf{B}|$.** From Faraday's law for a plane wave:
$\mathbf{k} \times \mathbf{E}_0 = \omega\mathbf{B}_0$. Taking magnitudes:
$kE_0 = \omega B_0$, so $E_0/B_0 = \omega/k = c$. $\blacksquare$

<details>
<summary>Worked Example: Plane wave fields and intensity</summary>

**Problem.** A plane wave in vacuum has
$\mathbf{E} = (20\hat{\mathbf{x}} + 30\hat{\mathbf{y}})\cos(kz - \omega t)$ V/m with
$\lambda = 500$ nm. Find $\mathbf{B}$, the intensity, and describe the polarisation state.

**Solution.** $|\mathbf{E}_0| = \sqrt{20^2 + 30^2} = \sqrt{1300} \approx 36.1$ V/m.
$B_0 = E_0/c = 36.1/(3 \times 10^8) = 1.20 \times 10^{-7}$ T.

Since $\mathbf{k} = k\hat{\mathbf{z}}$ and $\mathbf{B}_0 = \hat{\mathbf{k}} \times \mathbf{E}_0/c$:
$\mathbf{B} = (-20\hat{\mathbf{y}} + 30\hat{\mathbf{x}})B_0/E_0 \cdot \cos(kz - \omega t)/c$
$= (30\hat{\mathbf{x}} - 20\hat{\mathbf{y}})(1/c)\cos(kz - \omega t)$ T.

Intensity: $I = \frac{1}{2}c\varepsilon_0 E_0^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(1300) = 1.73$ W/m$^2$.

Polarisation: $\mathbf{E}_0$ has components along $\hat{\mathbf{x}}$ and $\hat{\mathbf{y}}$ with a
constant phase relationship ($\delta = 0$), so the wave is linearly polarised at angle
$\theta = \arctan(30/20) = 56.3°$ from the $x$-axis.

</details>

### 2.2 Energy and Intensity

The **Poynting vector**:

$$\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$$

represents the energy flux (W/m$^2$). The time-averaged intensity for a plane wave:

$$I = \langle S \rangle = \frac{1}{2}c\varepsilon_0 E_0^2$$

The energy density of an EM field is:

$$u = \frac{1}{2}\varepsilon_0 E^2 + \frac{1}{2\mu_0}B^2 = \varepsilon_0 E^2$$

(the electric and magnetic contributions are equal for a plane wave). The intensity is related to
the energy density by $I = uc$.

**Radiation pressure.** For a perfectly absorbing surface: $P_{\mathrm{rad}} = I/c$. For a perfectly
reflecting surface: $P_{\mathrm{rad}} = 2I/c$.

<details>
<summary>Worked Example: Radiation pressure from a laser</summary>

**Problem.** A 5 mW laser beam ($\lambda = 632.8$ nm) is normally incident on a perfectly reflecting
mirror. The beam has a diameter of 1 mm. Find the radiation pressure and the force on the mirror.

**Solution.** Beam area: $A = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$.
Intensity: $I = P/A = 5 \times 10^{-3}/(7.85 \times 10^{-7}) = 6.37 \times 10^3$ W/m$^2$.

Radiation pressure (reflecting): $P_{\mathrm{rad}} = 2I/c = 2(6.37 \times 10^3)/(3 \times 10^8) = 4.25 \times 10^{-5}$ Pa.

Force: $F = P_{\mathrm{rad}} \cdot A = (4.25 \times 10^{-5})(7.85 \times 10^{-7}) = 3.34 \times 10^{-11}$ N.

</details>

### 2.3 EM Waves in Matter

In a linear, isotropic, non-magnetic medium with refractive index $n$:

$$v = \frac{c}{n}, \quad \mathbf{k} = n\frac{\omega}{c}\hat{\mathbf{k}}$$

The index of refraction is related to the relative permittivity and permeability:

$$n = \sqrt{\varepsilon_r \mu_r}$$

For non-magnetic materials ($\mu_r \approx 1$): $n \approx \sqrt{\varepsilon_r}$.

The wavelength inside a medium of refractive index $n$ is $\lambda_n = \lambda_0/n$, where $\lambda_0$
is the vacuum wavelength. The frequency remains unchanged across the boundary.

<details>
<summary>Worked Example: EM wave propagation in glass</summary>

**Problem.** A plane wave of wavelength $\lambda_0 = 600$ nm in vacuum enters a glass slab
($n = 1.50$) at normal incidence. Find (a) the wavelength and wave speed inside the glass, (b) the
frequency, and (c) the ratio of intensities inside and outside the glass, accounting for reflection
at the front surface.

**Solution.**

(a) $\lambda_n = \lambda_0/n = 600/1.50 = 400$ nm. $v = c/n = 2.0 \times 10^8$ m/s.

(b) $f = c/\lambda_0 = (3 \times 10^8)/(600 \times 10^{-9}) = 5.0 \times 10^{14}$ Hz (unchanged).

(c) At normal incidence: $R = [(n_1 - n_2)/(n_1 + n_2)]^2 = [(1 - 1.5)/(1 + 1.5)]^2 = (0.5/2.5)^2 = 0.04$.
Transmittance: $T = 1 - R = 0.96$.
The intensity inside the glass is $I_{\mathrm{inside}} = 0.96\,I_0$, but the power per unit area
referenced to the vacuum intensity is $I_{\mathrm{inside}} = (n_2/n_1)\,T\,I_0 = 1.5 \times 0.96 \times I_0 = 1.44\,I_0$
if we compare the electric field amplitudes squared times the respective impedances.

</details>

### 2.4 Boundary Conditions and Snell's Law

At a planar interface between two linear, isotropic media, the tangential components of
$\mathbf{E}$ and $\mathbf{H}$ and the normal components of $\mathbf{D}$ and $\mathbf{B}$ are
continuous across the boundary.

Consider a plane wave incident from medium 1 ($n_1$) onto medium 2 ($n_2$), with the interface at
$z = 0$ and the plane of incidence the $xz$-plane.

The **phase matching condition** requires the phases of all three waves (incident, reflected,
transmitted) to match at $z = 0$ for all $x$ and $t$. This gives:

$$k_1\sin\theta_i = k_1\sin\theta_r = k_2\sin\theta_t$$

From the first equality: $\theta_i = \theta_r$ (**law of reflection**).
From the second equality: $n_1\sin\theta_i = n_2\sin\theta_t$ (**Snell's law**).

**Proof.** The incident, reflected, and transmitted fields are:

$$E_i \propto e^{i(k_{1x}x + k_{1z}z - \omega t)}, \quad E_r \propto e^{i(k_{1x}'x + k_{1z}'z - \omega t)}, \quad E_t \propto e^{i(k_{2x}x + k_{2z}z - \omega t)}$$

At $z = 0$, the tangential field must be continuous for all $x$ and $t$:
$k_{1x} = k_{1x}' = k_{2x}$, i.e., $k_1\sin\theta_i = k_1\sin\theta_r = k_2\sin\theta_t$.
Since $k = n\omega/c$, this yields Snell's law. $\blacksquare$

### 2.5 Fresnel Equations

Applying the boundary conditions for the tangential fields yields the **Fresnel equations** for the
amplitude reflection and transmission coefficients.

**s-polarisation** ($\mathbf{E}$ perpendicular to the plane of incidence, along $\hat{\mathbf{y}}$):
The tangential components of $\mathbf{E}$ and $\mathbf{H}$ give:

$$r_s = \frac{E_{0r}}{E_{0i}} = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}$$

$$t_s = \frac{E_{0t}}{E_{0i}} = \frac{2n_1\cos\theta_i}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**p-polarisation** ($\mathbf{E}$ parallel to the plane of incidence):
The tangential components of $\mathbf{E}$ and $\mathbf{H}$ give:

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
$\theta_i = 30°$. Calculate $r_s$, $r_p$, $R_s$, and $R_p$.

**Solution.** From Snell's law: $\sin\theta_t = \sin 30°/1.50 = 0.333$, so $\theta_t = 19.47°$.
$\cos\theta_i = \cos 30° = 0.866$, $\cos\theta_t = \cos 19.47° = 0.943$.

$r_s = \frac{1.00 \times 0.866 - 1.50 \times 0.943}{1.00 \times 0.866 + 1.50 \times 0.943} = \frac{0.866 - 1.414}{0.866 + 1.414} = \frac{-0.549}{2.280} = -0.241$

$R_s = r_s^2 = 0.0580$

$r_p = \frac{1.50 \times 0.866 - 1.00 \times 0.943}{1.50 \times 0.866 + 1.00 \times 0.943} = \frac{1.299 - 0.943}{1.299 + 0.943} = \frac{0.356}{2.242} = 0.159$

$R_p = r_p^2 = 0.0252$

At this angle, p-polarised light is reflected less efficiently than s-polarised light. The
negative sign of $r_s$ indicates a phase shift of $\pi$ upon reflection.

</details>

:::caution Common Pitfall
The Fresnel coefficients $r_s$ and $r_p$ have different forms. A common error is to swap the
$n_1\cos\theta_i$ and $n_2\cos\theta_t$ terms. Remember: for $r_s$, the numerator starts with
$n_1\cos\theta_i$; for $r_p$, the numerator starts with $n_2\cos\theta_i$. Also, $r$ and $t$ are
amplitude coefficients, while $R$ and $T$ are energy coefficients — they are related but not
interchangeable.
:::

### 2.6 Total Internal Reflection and Evanescent Waves

When light travels from a denser to a rarer medium ($n_1 \gt n_2$) and the angle of incidence
exceeds the **critical angle**:

$$\theta_c = \arcsin\!\left(\frac{n_2}{n_1}\right)$$

Snell's law gives $\sin\theta_t = (n_1/n_2)\sin\theta_i \gt 1$, so $\theta_t$ becomes complex.
Writing $\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$, the Fresnel coefficients become complex with
$|r_s|^2 = |r_p|^2 = 1$: all energy is reflected.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa z}\, e^{i(k_x x - \omega t)}$$

where:

$$\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}, \quad k_x = k_0 n_1\sin\theta_i$$

The field decays exponentially with penetration depth $\delta = 1/\kappa$ into the second medium,
but propagates without loss along the interface. No net energy is transported across the boundary
($T = 0$).

**Frustrated total internal reflection (FTIR).** If a third medium (with $n_3 \geq n_2$) is brought
within a distance comparable to $\delta$ of the interface, the evanescent wave can couple into it,
allowing energy transmission across the gap. This is the optical analogue of quantum mechanical
tunnelling.

<details>
<summary>Worked Example: Critical angle and evanescent wave penetration</summary>

**Problem.** Light travels from glass ($n_1 = 1.50$) to air ($n_2 = 1.00$) at $\theta_i = 50°$.
Find (a) the critical angle, (b) the penetration depth for $\lambda = 500$ nm, and (c) the
propagation constant along the interface.

**Solution.**

(a) $\theta_c = \arcsin(n_2/n_1) = \arcsin(1/1.50) = 41.8°$. Since $50° \gt 41.8°$, TIR occurs.

(b) $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$
$= \frac{2\pi}{\lambda}\sqrt{(1.50)^2\sin^2 50° - 1.00^2}$
$= \frac{2\pi}{500 \times 10^{-9}}\sqrt{2.25 \times 0.587 - 1.00}$
$= (1.257 \times 10^7)\sqrt{0.320}$
$= (1.257 \times 10^7)(0.566) = 7.11 \times 10^6$ m$^{-1}$

Penetration depth: $\delta = 1/\kappa = 1.41 \times 10^{-7}$ m $= 141$ nm.

(c) $k_x = k_0 n_1\sin\theta_i = (2\pi/(500 \times 10^{-9}))(1.50)(0.766) = 1.44 \times 10^7$ m$^{-1}$.

</details>

## 3. Interference

### 3.1 Superposition Principle

When two or more waves overlap, the resultant displacement is the sum of the individual displacements.
For two coherent waves with amplitudes $E_1$ and $E_2$:

$$E = E_1 + E_2 = E_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_1) + E_0 \cos(\mathbf{k}\cdot\mathbf{r} - \omega t + \phi_2)$$

The time-averaged intensity is:

$$I = I_1 + I_2 + 2\sqrt{I_1 I_2}\cos\Delta\phi$$

where $\Delta\phi = \phi_2 - \phi_1$ is the phase difference.

### 3.2 Double-Slit Interference (Young's Experiment)

Two slits separated by distance $d$ are illuminated by coherent light of wavelength $\lambda$. The
screen is at distance $L \gg d$.

**Condition for bright fringes (constructive interference):**

$$d\sin\theta = m\lambda, \quad m = 0, \pm 1, \pm 2, \ldots$$

**Condition for dark fringes (destructive interference):**

$$d\sin\theta = \left(m + \frac{1}{2}\right)\lambda, \quad m = 0, \pm 1, \pm 2, \ldots$$

**Derivation.** The path difference between the two slits is $\Delta = d\sin\theta$. Constructive
interference occurs when $\Delta = m\lambda$ (phase difference $2m\pi$), and destructive when
$\Delta = (m + 1/2)\lambda$ (phase difference $(2m+1)\pi$). $\blacksquare$

The fringe spacing on the screen:

$$\Delta y = \frac{\lambda L}{d}$$

<details>
<summary>Worked Example: Double-slit fringe calculation</summary>

**Problem.** In a Young's double-slit experiment, light of wavelength $\lambda = 550$ nm passes
through slits separated by $d = 0.10$ mm onto a screen at $L = 2.0$ m. Find (a) the fringe spacing,
(b) the angular position of the third bright fringe, and (c) the total number of bright fringes
visible within the central diffraction maximum (slit width $a = 0.020$ mm).

**Solution.**

(a) $\Delta y = \lambda L/d = (550 \times 10^{-9})(2.0)/(0.10 \times 10^{-3}) = 11.0 \times 10^{-3}$ m $= 11.0$ mm.

(b) $d\sin\theta_3 = 3\lambda \implies \sin\theta_3 = 3(550 \times 10^{-9})/(0.10 \times 10^{-3}) = 0.0165$
$\theta_3 = 0.945°$.

(c) The diffraction envelope has its first minimum at $\sin\theta = \lambda/a = 550/20 = 27.5 \times 10^{-3}$,
corresponding to interference order $m = d\sin\theta/\lambda = (d/a) = 0.10/0.020 = 5$.
Missing orders at $m = \pm 5, \pm 10, \ldots$. Visible bright fringes: $m = 0, \pm 1, \pm 2, \pm 3, \pm 4$,
giving 9 bright fringes within the central maximum.

</details>

### 3.3 Thin-Film Interference

Light reflecting from a thin film of thickness $t$ and refractive index $n$ undergoes interference
between the wave reflected from the top surface and the wave reflected from the bottom surface.

**Path difference:** $2nt\cos\theta_t$ where $\theta_t$ is the angle of refraction inside the film.

A phase shift of $\pi$ occurs upon reflection from a medium of higher refractive index. The condition
for constructive interference (bright reflection) is:

$$2nt\cos\theta_t = \left(m + \frac{1}{2}\right)\lambda \quad \mathrm{(one\ phase\ shift)}$$

$$2nt\cos\theta_t = m\lambda \quad \mathrm{(zero\ or\ two\ phase\ shifts)}$$

:::caution Common Pitfall
Always count the number of $\pi$ phase shifts that occur upon reflection. A reflection from
low-to-high refractive index introduces a $\pi$ shift; high-to-low does not. For a soap film in
air, there is one $\pi$ shift (at the top surface). For a coating on glass ($n_{\mathrm{coat}} \lt n_{\mathrm{glass}}$), there is also one shift. The conditions for constructive and destructive interference swap depending on whether the total number of shifts is odd or even.
:::

<details>
<summary>Worked Example: Anti-reflection coating design</summary>

**Problem.** Magnesium fluoride ($n = 1.38$) is used as an anti-reflection coating on a glass lens
($n_{\mathrm{glass}} = 1.52$). Find the minimum coating thickness for destructive interference in
reflected light at $\lambda = 550$ nm (normal incidence).

**Solution.** At the air-coating interface (low to high $n$): $\pi$ phase shift.
At the coating-glass interface (low to high $n$): $\pi$ phase shift.
Total: two phase shifts $\equiv$ zero net phase shift from reflections.

For destructive interference (dark reflection) with zero net phase shift:
$2nt = (m + 1/2)\lambda$.

Minimum thickness ($m = 0$): $t = \lambda/(4n) = 550/(4 \times 1.38) = 99.6$ nm.

This is the standard quarter-wave anti-reflection coating design.

</details>

<details>
<summary>Worked Example: Soap film colours</summary>

**Problem.** A soap film ($n = 1.33$) of thickness $t = 300$ nm is illuminated by white light at
normal incidence. Which visible wavelengths are strongly reflected?

**Solution.** Air-soap (low to high): one $\pi$ phase shift. Soap-air (high to low): no shift.
Total: one phase shift. Constructive: $2nt = (m + 1/2)\lambda$.

$\lambda = 2nt/(m + 1/2) = 2(1.33)(300)/(m + 1/2) = 798/(m + 1/2)$ nm.

$m = 0$: $\lambda = 1596$ nm (infrared, not visible).
$m = 1$: $\lambda = 798/1.5 = 532$ nm (green, visible).
$m = 2$: $\lambda = 798/2.5 = 319$ nm (ultraviolet, not visible).

The film appears green in reflected light.

</details>

### 3.4 Michelson Interferometer

A beam splitter divides light into two beams that travel perpendicular paths and recombine. The path
difference $\Delta = 2(d_1 - d_2)$ determines the interference pattern.

Moving mirror $M_1$ by distance $\Delta d$ shifts the pattern by $m = 2\Delta d / \lambda$ fringes.

The Michelson interferometer is used for precise length measurements, the determination of
refractive indices, and was historically crucial in establishing the invariance of the speed of
light (Michelson-Morley experiment).

<details>
<summary>Worked Example: Michelson interferometer mirror displacement</summary>

**Problem.** A Michelson interferometer uses a HeNe laser ($\lambda = 632.8$ nm). When one mirror
is displaced, 2000 fringes cross a reference point. How far was the mirror moved?

**Solution.** Each fringe corresponds to a path difference change of $\lambda$. Moving the mirror by
$\Delta d$ changes the path difference by $2\Delta d$:

$m = 2\Delta d/\lambda \implies \Delta d = m\lambda/2 = 2000 \times 632.8 \times 10^{-9}/2 = 6.328 \times 10^{-4}$ m $= 0.633$ mm.

</details>

### 3.5 Coherence Length and Fringe Visibility

The **fringe visibility** (or contrast) quantifies the sharpness of interference fringes:

$$\mathcal{V} = \frac{I_{\max} - I_{\min}}{I_{\max} + I_{\min}}$$

For two-beam interference with intensities $I_1$, $I_2$ and degree of temporal coherence $|\gamma|$:

$$\mathcal{V} = \frac{2\sqrt{I_1 I_2}}{I_1 + I_2}\,|\gamma(\tau)|$$

For equal intensities ($I_1 = I_2$): $\mathcal{V} = |\gamma(\tau)|$.

The coherence function decays with path difference. For a Gaussian spectral profile of width
$\Delta\lambda$:

$$|\gamma(\tau)| = \exp\!\left[-\pi\left(\frac{\Delta\lambda \cdot \Delta x}{\lambda^2}\right)^2\right]$$

where $\Delta x = c\tau$ is the path difference. Fringes become unresolvable when
$\Delta x \approx \lambda^2/\Delta\lambda = L_c$, the **coherence length**.

**Implication for interferometry.** To observe interference fringes, the path difference between
the two arms must satisfy $\Delta x \ll L_c$. A sodium lamp ($\Delta\lambda \approx 0.6$ nm at
$\lambda = 589$ nm) gives $L_c \approx 0.58$ mm. A HeNe laser ($\Delta\lambda \approx 10^{-6}$ nm)
gives $L_c \approx 350$ m — fringes are visible over enormous path differences.

### 3.6 Multiple-Beam Interference: The Fabry-Perot Etalon

A **Fabry-Perot etalon** consists of two parallel, partially reflecting surfaces separated by
distance $d$. Multiple reflections create many beams that interfere, producing sharp transmission
peaks.

For a lossless etalon with reflectance $R$ and transmittance $T = 1 - R$, illuminated at angle
$\theta$ inside a medium of refractive index $n$:

$$\frac{I_T}{I_0} = \frac{T^2}{(1 - R)^2 + 4R\sin^2(\delta/2)} = \frac{1}{1 + F\sin^2(\delta/2)}$$

where $\delta = (4\pi/\lambda)\,nd\cos\theta$ is the round-trip phase and
$F = 4R/(1-R)^2$ is the **coefficient of finesse**.

**Transmission maxima** occur when $\delta = 2m\pi$ ($m = 0, 1, 2, \ldots$), i.e.,
$2nd\cos\theta = m\lambda$.

**Finesse:**

$$\mathcal{F} = \frac{\pi\sqrt{F}}{2} = \frac{\pi\sqrt{R}}{1 - R}$$

The finesse determines the sharpness of the peaks: higher $R$ gives sharper peaks.

**Free spectral range** (frequency spacing between adjacent peaks):

$$\Delta\nu_{\mathrm{FSR}} = \frac{c}{2nd}$$

**Resolving power:**

$$\mathcal{R} = \frac{\lambda}{\delta\lambda} = m\mathcal{F}$$

<details>
<summary>Worked Example: Fabry-Perot resolving power</summary>

**Problem.** A Fabry-Perot etalon has plate separation $d = 1.00$ mm, refractive index $n = 1.00$,
and reflectance $R = 0.90$. Find the finesse, free spectral range, and minimum resolvable wavelength
difference at $\lambda = 500$ nm (normal incidence).

**Solution.** Finesse: $\mathcal{F} = \pi\sqrt{0.90}/(1 - 0.90) = \pi(0.949)/0.10 = 29.8$.

Free spectral range: $\Delta\nu_{\mathrm{FSR}} = c/(2nd) = (3 \times 10^8)/(2 \times 1.00 \times 10^{-3}) = 1.50 \times 10^{11}$ Hz.

Order number: $m = 2nd/\lambda = 2(1.00)(1.00 \times 10^{-3})/(500 \times 10^{-9}) = 4000$.

Resolving power: $\mathcal{R} = m\mathcal{F} = 4000 \times 29.8 = 1.19 \times 10^5$.

Minimum resolvable wavelength: $\delta\lambda = \lambda/\mathcal{R} = 500/1.19 \times 10^5 = 4.20 \times 10^{-3}$ nm $= 4.20$ pm.

</details>

## 4. Diffraction

### 4.1 Huygens-Fresnel Principle

Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is the
envelope of these wavelets, accounting for both amplitude and phase.

**Kirchhoff diffraction integral.** The field at point $P$ due to an aperture in a screen is:

$$E(P) = \frac{i}{\lambda}\iint_{\mathrm{aperture}} E(Q)\,\frac{e^{-ikr}}{r}\cos\theta\,dS$$

where $E(Q)$ is the field at the aperture point $Q$, $r$ is the distance from $Q$ to $P$, and $\theta$
is the angle between the normal to the aperture and the direction to $P$. The obliquity factor
$\cos\theta$ ensures that wavelets do not propagate backwards. In the Fraunhofer limit ($r \to \infty$),
this integral reduces to the Fourier transform of the aperture function (see Sections 4.8 and 7.1).

### 4.2 Single-Slit Diffraction

A slit of width $a$ is illuminated by plane waves of wavelength $\lambda$.

**Intensity distribution (Fraunhofer diffraction):**

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

where $\alpha = \frac{\pi a \sin\theta}{\lambda}$.

**Derivation.** Divide the slit into infinitesimal elements of width $dy$ at position $y$. Each
element contributes a wavelet. The field at angle $\theta$ on a distant screen:

$$E(\theta) = \int_{-a/2}^{a/2} E_0\, e^{iky\sin\theta}\,dy = E_0 \frac{\sin\left(\frac{ka\sin\theta}{2}\right)}{\frac{k\sin\theta}{2}} = E_0 a \frac{\sin\alpha}{\alpha}$$

where $\alpha = ka\sin\theta/2 = \pi a\sin\theta/\lambda$. Since $I \propto |E|^2$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2$$

$\blacksquare$

**Minima:** $\alpha = m\pi$, i.e., $a\sin\theta = m\lambda$ for $m = \pm 1, \pm 2, \ldots$

**Central maximum:** at $\theta = 0$, with width (first zero to first zero) $\Delta\theta = 2\lambda/a$.

The secondary maxima occur approximately midway between consecutive minima. Their intensities are:
$I_1/I_0 \approx 0.045$ (first secondary), $I_2/I_0 \approx 0.016$ (second), decreasing rapidly.

<details>
<summary>Worked Example: Single-slit diffraction intensity</summary>

**Problem.** Light of wavelength $\lambda = 580$ nm passes through a slit of width $a = 0.10$ mm.
Find (a) the angular width of the central maximum, and (b) the intensity at $\theta = 0.50°$
relative to the central maximum.

**Solution.**

(a) First minimum at $\sin\theta_1 = \lambda/a = 580 \times 10^{-9}/(0.10 \times 10^{-3}) = 5.80 \times 10^{-3}$,
so $\theta_1 = 0.332°$. Angular width of central maximum: $2\theta_1 = 0.664°$.

(b) $\alpha = \pi a\sin\theta/\lambda = \pi(0.10 \times 10^{-3})\sin(0.50°)/(580 \times 10^{-9})$
$= \pi(0.10 \times 10^{-3})(8.73 \times 10^{-3})/(580 \times 10^{-9}) = \pi(1.505) = 4.73$.

$I/I_0 = (\sin\alpha/\alpha)^2 = (\sin 4.73/4.73)^2 = (-0.9998/4.73)^2 = (0.2114)^2 = 0.0447$.

The intensity is about 4.5% of the central maximum.

</details>

:::caution Common Pitfall
The condition for the first minimum in single-slit diffraction is $a\sin\theta = \lambda$ (not
$\lambda/2$). The factor of 2 difference from the double-slit maximum condition ($d\sin\theta = \lambda$)
reflects the fundamentally different geometry: in single-slit diffraction, the minimum occurs when
wavelets from the edges cancel, requiring a path difference of one full wavelength between them.
:::

### 4.3 Double-Slit with Finite Width

Combining single-slit diffraction and double-slit interference:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \cos^2\beta$$

where $\alpha = \pi a\sin\theta/\lambda$ (diffraction envelope) and $\beta = \pi d\sin\theta/\lambda$
(interference fringes).

The interference fringes are modulated by the diffraction envelope. **Missing orders** occur when
$\beta = m\pi$ coincides with $\alpha = n\pi$, i.e., when $d/a$ is a ratio of integers.

<details>
<summary>Worked Example: Missing orders in a double-slit pattern</summary>

**Problem.** A double slit has slit width $a = 0.040$ mm and slit separation $d = 0.20$ mm, illuminated
by light of wavelength $\lambda = 550$ nm. (a) Which interference orders are missing? (b) How many
bright fringes appear within the central diffraction envelope?

**Solution.**

(a) Missing orders occur when $d/a$ is an integer: $d/a = 0.20/0.04 = 5$. The interference orders
$m = \pm 5, \pm 10, \ldots$ coincide with diffraction minima and are missing.

(b) The central diffraction envelope extends from $\theta = -\lambda/a$ to $\theta = +\lambda/a$.
The highest visible order satisfies $d\sin\theta \lt d(\lambda/a) = (d/a)\lambda = 5\lambda$,
i.e., $m \lt 5$. So orders $m = 0, \pm 1, \pm 2, \pm 3, \pm 4$ are visible: 9 bright fringes
within the central envelope.

</details>

### 4.4 Diffraction Gratings

A grating with $N$ slits, each of width $a$, separated by distance $d$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

**Principal maxima:** $d\sin\theta = m\lambda$ ($m = 0, \pm 1, \pm 2, \ldots$).

The angular width of a principal maximum is $\Delta\theta = \lambda/(Nd\cos\theta)$. The
**resolving power** of a grating is:

$$R = \frac{\lambda}{\Delta\lambda} = mN$$

where $N$ is the total number of illuminated slits.

<details>
<summary>Worked Example: Grating resolving power</summary>

**Problem.** A diffraction grating has 5000 lines/cm and is 5.0 cm wide. Find the resolving power
in the first order and the minimum resolvable wavelength difference at $\lambda = 600$ nm.

**Solution.** Total number of slits: $N = 5000 \times 5.0 = 25000$.
Slit spacing: $d = 1/5000$ cm $= 2.00 \times 10^{-6}$ m $= 2.00$ $\mu$m.

Resolving power: $R = mN = 1 \times 25000 = 25000$.

Minimum resolvable wavelength difference: $\delta\lambda = \lambda/R = 600/25000 = 0.024$ nm.

</details>

### 4.5 The Rayleigh Criterion

Two point sources are just resolvable when the central maximum of one coincides with the first minimum
of the other:

$$\theta_{\mathrm{min}} = 1.22\frac{\lambda}{D}$$

where $D$ is the aperture diameter (for a circular aperture).

### 4.6 Fresnel vs. Fraunhofer Diffraction

**Fraunhofer (far-field):** Source and screen are at infinity (or at the focal plane of a lens).
Requires $a^2/\lambda \ll L$ (Fresnel number $N_F \ll 1$).

**Fresnel (near-field):** Source and/or screen are at finite distances. The Fresnel number
$N_F = a^2/(\lambda L)$ characterises the regime. Fresnel diffraction uses Fresnel integrals and
produces patterns that depend on the distance.

### 4.7 Circular Aperture and the Airy Disk

For a circular aperture of diameter $D$, the Fraunhofer diffraction pattern is an **Airy pattern**:

$$I(\theta) = I_0 \left[\frac{2J_1(\beta)}{\beta}\right]^2$$

where $\beta = \pi D \sin\theta / \lambda$ and $J_1$ is the first-order Bessel function of the first
kind.

**Derivation.** The field in the Fraunhofer limit is the Fourier transform of the circular aperture
function $t(r) = 1$ for $r \leq D/2$ and $0$ otherwise. In polar coordinates:

$$E(\theta) \propto \int_0^{D/2} J_0(kr\sin\theta)\, r\,dr = \frac{D}{2}\frac{J_1(\beta)}{\beta}$$

where we used the identity $\int_0^a J_0(\rho r)\,r\,dr = aJ_1(\rho a)/\rho$. Since $I \propto |E|^2$,
the result follows. $\blacksquare$

The first zero of $J_1(\beta)$ is at $\beta = 1.22\pi$, giving:

$$\sin\theta_1 = 1.22\frac{\lambda}{D}$$

The bright central disk (the **Airy disk**) subtends an angle:

$$\theta_{\mathrm{Airy}} = 1.22\frac{\lambda}{D}$$

This is the basis of the **Rayleigh criterion** for resolving power of circular apertures (telescopes,
microscopes, the eye). Approximately 84% of the total transmitted power falls within the Airy disk.

<details>
<summary>Worked Example: Telescope resolving power</summary>

**Problem.** A telescope has a primary mirror of diameter $D = 150$ mm. Find its angular resolution
at $\lambda = 550$ nm. Two stars are separated by $0.50''$ (arcseconds). Can this telescope resolve
them?

**Solution.** Angular resolution: $\theta_{\min} = 1.22\lambda/D = 1.22(550 \times 10^{-9})/(0.150) = 4.47 \times 10^{-6}$ rad.

Convert to arcseconds: $4.47 \times 10^{-6} \times (180/\pi) \times 3600 = 0.923''$.

Since $0.50'' \lt 0.923''$, the telescope cannot resolve these two stars — they would appear as a
single blurred source.

</details>

### 4.8 Introduction to Fourier Optics

The Fraunhofer diffraction integral has a deep connection with Fourier analysis. For an aperture
with transmission function $t(x, y)$, the far-field diffraction pattern is:

$$E(\theta_x, \theta_y) \propto \iint t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

where $k_x = k\sin\theta_x$ and $k_y = k\sin\theta_y$. This is precisely the **two-dimensional
Fourier transform** of $t(x,y)$, evaluated at spatial frequencies $k_x/(2\pi)$ and $k_y/(2\pi)$.

**Key consequences:**

1. A lens of focal length $f$, placed one focal length after the aperture, produces the Fourier
   transform at its back focal plane — it performs an **optical Fourier transform**.
2. Narrow features in the aperture (small $a$) produce broad diffraction patterns (large spread in
   $k$-space), and vice versa — the optical analogue of the uncertainty principle.
3. Spatial filtering: by placing masks in the Fourier plane, one can selectively remove or enhance
   spatial frequency components, modifying the image (the basis of optical image processing).

**Example.** A single slit of width $a$ has aperture function $t(x) = \mathrm{rect}(x/a)$. Its Fourier
transform is $\mathrm{sinc}(\pi a \sin\theta/\lambda)$, directly giving the single-slit diffraction
pattern. A periodic grating has sharp peaks in the Fourier transform (the diffraction orders), each
corresponding to a spatial harmonic of the grating.

**Spatial filtering.** A powerful application of Fourier optics is the manipulation of images by
modifying their spatial frequency content:

- **Low-pass filter:** A small aperture in the Fourier plane passes only the zeroth and low-order
  diffraction, removing fine detail (smoothing).
- **High-pass filter:** An opaque spot blocking the zeroth order removes the DC component, enhancing
  edges and fine structure (phase contrast microscopy).
- **Band-pass filter:** Selective removal of specific spatial frequencies (e.g., removing periodic
  noise from an image).

**Phase contrast microscopy** (Zernike, 1953) is a celebrated application. Biological specimens are
mostly transparent (phase objects) and produce no intensity contrast in ordinary microscopy. By
introducing a $\pi/2$ phase shift to the undiffracted (zeroth-order) light in the Fourier plane,
phase variations are converted to intensity variations, making transparent structures visible.

<details>
<summary>Worked Example: Fourier analysis of a double slit</summary>

**Problem.** A double slit has width $a$ and centre-to-centre separation $d = 3a$. Use Fourier optics
to predict the diffraction pattern and identify the missing orders.

**Solution.** The aperture function is $t(x) = \mathrm{rect}(x/a) * [\delta(x - 3a/2) + \delta(x + 3a/2)]$,
i.e., the convolution of a single-slit function with two delta functions.

By the convolution theorem, the Fourier transform is the product of a sinc function (single slit) and
$\cos(\pi d \sin\theta/\lambda)$ (two-point interference):

$E(\theta) \propto \mathrm{sinc}(\pi a\sin\theta/\lambda) \cdot \cos(\pi \cdot 3a \sin\theta/\lambda)$

The sinc envelope has zeros at $a\sin\theta = m\lambda$. The cosine fringes have maxima at
$3a\sin\theta = m\lambda$. Missing orders when $3a\sin\theta = 3\lambda$ coincides with
$a\sin\theta = \lambda$: the third order ($m = 3$) and all multiples of 3 are missing.
This confirms $d/a = 3$ as the ratio for missing orders.

</details>

## 5. Polarization

### 5.1 States of Polarization

For a plane wave propagating in the $z$-direction:

$$\mathbf{E} = E_{0x}\cos(kz - \omega t)\,\hat{\mathbf{x}} + E_{0y}\cos(kz - \omega t + \delta)\,\hat{\mathbf{y}}$$

- **Linear polarization:** $\delta = 0$ or $\delta = \pi$. The E-field oscillates along a fixed line.
- **Circular polarization:** $E_{0x} = E_{0y}$ and $\delta = \pm\pi/2$. Right-handed ($\delta = -\pi/2$)
  or left-handed ($\delta = +\pi/2$).
- **Elliptical polarization:** General case. The tip of $\mathbf{E}$ traces an ellipse.

### 5.2 Malus's Law

When linearly polarised light of intensity $I_0$ passes through a polariser at angle $\theta$ to the
polarisation direction:

$$I = I_0 \cos^2\theta$$

**Proof.** The component of $\mathbf{E}$ along the polariser axis is $E\cos\theta$. Since
$I \propto E^2$: $I = I_0 \cos^2\theta$. $\blacksquare$

<details>
<summary>Worked Example: Three polarisers in series</summary>

**Problem.** Unpolarised light of intensity $I_0$ passes through three ideal linear polarisers. The
first has its transmission axis vertical. The second is at $45°$ to the vertical. The third is
horizontal. What fraction of $I_0$ is transmitted?

**Solution.** After the first polariser: $I_1 = I_0/2$ (vertical polarisation).

After the second: $I_2 = I_1\cos^2 45° = (I_0/2)(1/2) = I_0/4$ (polarised at 45°).

After the third: $I_3 = I_2\cos^2 45° = (I_0/4)(1/2) = I_0/8$ (horizontal polarisation).

Answer: $I_0/8 = 12.5\%$. Note that inserting the middle polariser **increases** the transmitted
intensity compared with just the crossed first and third polarisers (which would transmit zero).

</details>

### 5.3 Birefringence and Wave Plates

Birefringent crystals (e.g., calcite) have two refractive indices: $n_o$ (ordinary ray) and $n_e$
(extraordinary ray). The two rays have orthogonal polarisations and different phase velocities.

A **wave plate** of thickness $t$ introduces a relative phase shift between the two polarisation
components:

$$\Delta\phi = \frac{2\pi}{\lambda}(n_o - n_e)\,t$$

**Quarter-wave plate (QWP):** $\Delta\phi = \pi/2$, so $t_{\mathrm{QWP}} = \lambda/(4|n_o - n_e|)$.
Converts linear polarisation at $45°$ to the fast/slow axes into circular polarisation, and vice
versa.

**Half-wave plate (HWP):** $\Delta\phi = \pi$, so $t_{\mathrm{HWP}} = \lambda/(2|n_o - n_e|)$.
Rotates the plane of linear polarisation by $2\theta$, where $\theta$ is the angle between the
input polarisation and the fast axis.

:::caution Common Pitfall
A quarter-wave plate only produces circular polarisation when the input linear polarisation is at
exactly $45°$ to the fast and slow axes. For other input angles, the output is elliptically
polarised. A half-wave plate rotates linear polarisation by $2\theta$, not $\theta$.
:::

<details>
<summary>Worked Example: Quarter-wave plate design and application</summary>

**Problem.** (a) Design a quarter-wave plate for $\lambda = 589$ nm using calcite
($n_o = 1.658$, $n_e = 1.486$). (b) If linearly polarised light at $30°$ to the fast axis
enters this QWP, describe the output polarisation.

**Solution.**

(a) Minimum thickness: $t = \lambda/(4|n_o - n_e|) = 589 \times 10^{-9}/(4 \times 0.172) = 8.56 \times 10^{-7}$ m $= 856$ nm.

(b) The components along the fast and slow axes are:
$E_f = E_0\cos 30° = 0.866\,E_0$ and $E_s = E_0\sin 30° = 0.500\,E_0$.
After the QWP, these have a $\pi/2$ phase difference but unequal amplitudes ($0.866 \neq 0.500$),
so the output is **elliptically polarised** (not circular).

</details>

### 5.4 Optical Activity

Certain materials (sugars, quartz) rotate the plane of linearly polarised light. The specific
rotation is:

$$[\alpha] = \frac{\theta}{c \cdot l}$$

where $\theta$ is the rotation angle, $c$ is the concentration, and $l$ is the path length.

Optical activity arises from the helical structure of molecules, which gives different refractive
indices for left- and right-circularly polarised light (circular birefringence). If $n_L$ and $n_R$
are the refractive indices for left and right circular polarisation:

$$\theta = \frac{\pi l}{\lambda}(n_L - n_R)$$

Optical activity is **reciprocal**: if the beam is reflected back through the medium, the rotation
is cancelled.

### 5.5 Brewster's Angle

At the **Brewster angle** $\theta_B$, the reflected beam for p-polarised light vanishes ($r_p = 0$):

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$ requires $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t} \implies \cot\theta_i = \cot\theta_t \implies \theta_i = \theta_t'$$

where $\theta_t' = 90° - \theta_t$. This gives $\theta_i + \theta_t = 90°$, so:

$$\tan\theta_i = \frac{n_2}{n_1} \quad \blacksquare$$

At Brewster's angle, the reflected beam is purely s-polarised, and the reflected and refracted beams
are perpendicular ($\theta_B + \theta_t = 90°$). This principle is used in Brewster windows and
polarisation by reflection.

For an air-glass interface ($n_1 = 1$, $n_2 = 1.5$): $\theta_B = \arctan(1.5) = 56.3°$.

<details>
<summary>Worked Example: Brewster's angle and reflected intensity</summary>

**Problem.** Unpolarised light is incident on a glass surface ($n = 1.50$) at Brewster's angle.
What fraction of the incident intensity is reflected, and what is the polarisation state of the
reflected light?

**Solution.** $\theta_B = \arctan(1.50) = 56.3°$.

The reflected light is purely s-polarised. The reflectance for s-polarisation at $\theta_B$:
$\theta_t = 90° - 56.3° = 33.7°$.
$r_s = \frac{n_1\cos\theta_B - n_2\cos\theta_t}{n_1\cos\theta_B + n_2\cos\theta_t} = \frac{\cos 56.3° - 1.50\cos 33.7°}{\cos 56.3° + 1.50\cos 33.7°} = \frac{0.555 - 1.50 \times 0.832}{0.555 + 1.50 \times 0.832} = \frac{0.555 - 1.248}{0.555 + 1.248} = \frac{-0.693}{1.803} = -0.384$

$R_s = (-0.384)^2 = 0.148$.

The incident unpolarised light has equal s and p components ($I_s = I_p = I_0/2$). Only the s
component is reflected: $I_{\mathrm{reflected}} = R_s \times I_0/2 = 0.148 \times I_0/2 = 0.074\,I_0$.

The reflected light is 100% s-polarised with intensity $0.074\,I_0$ (about 7.4% of the incident).

</details>

### 5.6 Faraday Rotation

In a magneto-optical material with a magnetic field $\mathbf{B}$ applied along the propagation
direction, the plane of polarisation rotates by:

$$\theta_F = V B l$$

where $V$ is the **Verdet constant** (rad/(T$\cdot$m)), $B$ is the magnetic field strength, and
$l$ is the path length through the material.

**Mechanism.** The magnetic field induces circular birefringence: left and right circular polarisations
experience different refractive indices ($n_L \neq n_R$). Unlike natural optical activity, Faraday
rotation is **non-reciprocal**: if the beam is reflected back through the medium, the rotation
doubles rather than cancelling.

**Applications.** Optical isolators (one-way light valves), optical circulators, and magneto-optical
sensors. An optical isolator consists of a polariser, a Faraday rotator set to rotate by $45°$, and
an analyser at $45°$ to the polariser. Forward-propagating light is transmitted; backward light
is rotated by another $45°$ (total $90°$) and blocked by the analyser.

<details>
<summary>Worked Example: Faraday rotation in flint glass</summary>

**Problem.** A Faraday rotator uses heavy flint glass with Verdet constant $V = 32$ rad/(T$\cdot$m).
(a) What magnetic field over a 10 cm length produces a $45°$ rotation? (b) If linearly polarised
light makes a round trip through the rotator, what is the total rotation?

**Solution.**

(a) $\theta_F = VBl \implies B = \theta_F/(Vl) = (\pi/4)/(32 \times 0.10) = 0.785/3.2 = 0.245$ T.

(b) Because Faraday rotation is non-reciprocal, the return trip adds another $45°$:
total rotation $= 90°$. The polarisation is rotated by $90°$ after the round trip, which is the
basis of optical isolation.

</details>

### 5.7 Polarization by Scattering

When light is scattered by particles much smaller than the wavelength (Rayleigh scattering), the
scattered light is partially polarised. Light scattered at $90°$ to the incident direction is
**completely linearly polarised** in the plane perpendicular to the scattering plane.

**Proof.** Consider an incident unpolarised beam propagating along $\hat{\mathbf{z}}$. The
$\mathbf{E}$-field oscillates in the $xy$-plane. An observer along $\hat{\mathbf{x}}$ (scattering
angle $90°$) receives radiation from the accelerating electrons. The dipole radiation pattern of an
oscillator along $\hat{\mathbf{y}}$ has zero intensity along $\hat{\mathbf{y}}$ but maximum along
$\hat{\mathbf{x}}$. The oscillator along $\hat{\mathbf{x}}$ radiates zero along its own axis. Thus
the observer along $\hat{\mathbf{x}}$ sees only the $y$-component: the scattered light is
polarised along $\hat{\mathbf{y}}$. $\blacksquare$

This explains why the sky is polarised at $90°$ from the sun and why polarising sunglasses reduce
glare from horizontal surfaces (Brewster's angle reflection from road/water).

## 6. Geometric Optics

### 6.1 Reflection and Refraction

**Law of Reflection:** The angle of incidence equals the angle of reflection:
$\theta_i = \theta_r$ (both measured from the normal).

**Snell's Law:** $n_1 \sin\theta_1 = n_2 \sin\theta_2$.

**Derivation of Snell's law from Fermat's principle.** The optical path length from point $A$ in
medium 1 to point $B$ in medium 2 via a point on the interface at $x$ is:

$$\Lambda(x) = n_1\sqrt{a^2 + x^2} + n_2\sqrt{b^2 + (d - x)^2}$$

Setting $d\Lambda/dx = 0$:

$$n_1 \frac{x}{\sqrt{a^2 + x^2}} = n_2 \frac{d - x}{\sqrt{b^2 + (d-x)^2}}$$

which gives $n_1 \sin\theta_1 = n_2 \sin\theta_2$. $\blacksquare$

### 6.2 Total Internal Reflection

When light travels from a denser to a rarer medium ($n_1 \gt n_2$), total internal reflection occurs
when $\theta_1 \geq \theta_c$ where:

$$\sin\theta_c = \frac{n_2}{n_1}$$

**Evanescent wave.** Beyond the critical angle, the transmitted field decays exponentially:

$$E_t \propto e^{-\kappa x}$$

where $\kappa = \frac{2\pi}{\lambda}\sqrt{n_1^2 \sin^2\theta_1 - n_2^2}$.

### 6.3 The Thin Lens Equation

$$\frac{1}{s} + \frac{1}{s'} = \frac{1}{f}$$

where $s$ is the object distance, $s'$ is the image distance, and $f$ is the focal length.

**Sign convention (Cartesian):** Distances are positive in the direction of light propagation. $f \gt 0$
for converging lenses, $f \lt 0$ for diverging.

**Magnification:**

$$M = -\frac{s'}{s}$$

Negative $M$ indicates an inverted image.

### 6.4 Lensmaker's Equation

For a thin lens with radii of curvature $R_1$ and $R_2$:

$$\frac{1}{f} = (n - 1)\left(\frac{1}{R_1} - \frac{1}{R_2}\right)$$

### 6.5 Matrix Optics (Ray Transfer Matrix)

A paraxial ray is described by a vector $\begin{pmatrix} y \\ \theta \end{pmatrix}$ where $y$ is the
height and $\theta$ is the angle with the optical axis.

**Free space propagation** by distance $d$:

$$M_{\mathrm{prop}} = \begin{pmatrix} 1 & d \\ 0 & 1 \end{pmatrix}$$

**Thin lens** of focal length $f$:

$$M_{\mathrm{lens}} = \begin{pmatrix} 1 & 0 \\ -1/f & 1 \end{pmatrix}$$

**System matrix:** The overall transformation is the product of individual matrices (applied in
reverse order): $M_{\mathrm{sys}} = M_n \cdots M_2 M_1$.

### 6.6 Mirror Equation

For a spherical mirror of radius $R$ (with $R \gt 0$ for concave, $R \lt 0$ for convex):

$$\frac{1}{s} + \frac{1}{s'} = \frac{2}{R}$$

The focal length is $f = R/2$. The magnification is $M = -s'/s$ (negative for inverted images).

**Derivation from the law of reflection.** A ray from the object at height $h$ striking the mirror
at height $y$ reflects such that $\theta_i = \theta_r$. In the paraxial approximation ($y \ll R$),
applying the law of reflection and the small-angle approximation $\sin\theta \approx \theta$:

$$\frac{h}{s} + \frac{h'}{s'} = \frac{2y}{R}$$

Dividing through by $y$ and using $h/s = y/s$, $h'/s' = y/s'$ (paraxial rays) yields the mirror
equation. $\blacksquare$

<details>
<summary>Worked Example: Concave mirror image formation</summary>

**Problem.** A concave mirror has radius of curvature $R = 40$ cm. An object of height 2.0 cm is
placed 25 cm from the mirror. Find the image position, magnification, and nature.

**Solution.** $f = R/2 = 20$ cm. Using $1/s + 1/s' = 1/f$:
$1/s' = 1/20 - 1/25 = (5 - 4)/100 = 1/100$, so $s' = 100$ cm.

The image is real (positive $s'$) and on the same side as the object.

$M = -s'/s = -100/25 = -4.0$.

Image height: $h' = Mh = -4.0 \times 2.0 = -8.0$ cm (inverted, magnified by 4$\times$).

</details>

### 6.7 Optical Instruments

**Magnifying glass.** Angular magnification when the image is at the near point $D$:

$$M = 1 + \frac{D}{f}$$

**Compound microscope.** Total magnification:

$$M_{\mathrm{total}} = -\frac{L}{f_o} \cdot \frac{D}{f_e}$$

where $L$ is the tube length, $f_o$ is the objective focal length, and $f_e$ is the eyepiece focal
length.

**Refracting telescope.** Angular magnification:

$$M = -\frac{f_o}{f_e}$$

For large magnification, the objective should have a long focal length and the eyepiece a short one.
The length of the telescope tube is approximately $f_o + f_e$.

**Reflecting telescope.** A concave primary mirror replaces the objective lens. The Cassegrain design
uses a secondary convex mirror to redirect the focus behind the primary. Advantages: no chromatic
aberration, lighter and cheaper for large apertures, and easier support structures.

<details>
<summary>Worked Example: Compound microscope magnification</summary>

**Problem.** A compound microscope has an objective with $f_o = 4.0$ mm and an eyepiece with
$f_e = 25$ mm. The tube length is $L = 160$ mm. Find the total magnification when the final image
is at the near point ($D = 250$ mm).

**Solution.** Objective magnification: $M_o = -L/f_o = -160/4.0 = -40$.

Eyepiece magnification (image at near point): $M_e = 1 + D/f_e = 1 + 250/25 = 11$.

Total magnification: $M_{\mathrm{total}} = M_o \times M_e = -40 \times 11 = -440$.

The negative sign indicates the image is inverted.

</details>

## 7. Fourier Optics

### 7.1 Fraunhofer Diffraction as a Fourier Transform

In the Fraunhofer limit, the diffraction pattern is the **Fourier transform** of the aperture function:

$$E(\theta_x, \theta_y) \propto \int_{-\infty}^{\infty}\int_{-\infty}^{\infty} t(x,y)\, e^{-i(k_x x + k_y y)}\,dx\,dy$$

where $t(x, y)$ is the transmission function of the aperture, and $k_x = k\sin\theta_x$,
$k_y = k\sin\theta_y$.

A lens placed one focal length after the aperture produces the Fraunhofer pattern at its back focal
plane, performing an optical Fourier transform.

### 7.2 The Convolution Theorem

If the aperture is a product $t(x, y) = t_1(x, y) \cdot t_2(x, y)$, the diffraction pattern is the
convolution of their individual transforms:

$$\mathcal{F}\{t_1 \cdot t_2\} = \mathcal{F}\{t_1\} * \mathcal{F}\{t_2\}$$

where $*$ denotes convolution. This explains, for example, why the double-slit pattern with finite
slit width is the product of a sinc function (single slit) and a cosine-squared (double slit).

### 7.3 The Abbe Theory of Imaging

Abbe showed that a lens images by collecting the diffracted orders and recombining them. The
resolution limit arises because high spatial frequencies (large diffraction angles) are lost if they
fall outside the lens aperture.

The **minimum resolvable spatial frequency** is:

$$f_{\mathrm{max}} = \frac{2\mathrm{NA}}{\lambda}$$

where $\mathrm{NA} = n\sin\theta_{\mathrm{max}}$ is the numerical aperture.

## 8. Coherence

### 8.1 Temporal Coherence

**Coherence time** $\tau_c$: the time over which the wave maintains a well-defined phase.

**Coherence length:** $L_c = c\tau_c$.

For a source with spectral width $\Delta\nu$:

$$\tau_c \approx \frac{1}{\Delta\nu}, \quad L_c \approx \frac{c}{\Delta\nu} = \frac{\lambda^2}{\Delta\lambda}$$

A sodium lamp ($\Delta\lambda \approx 0.6$ nm at $\lambda = 589$ nm) has $L_c \approx 0.6$ mm.
A laser ($\Delta\lambda \approx 10^{-6}$ nm) has $L_c \approx 300$ m.

<details>
<summary>Worked Example: Coherence length and fringe visibility</summary>

**Problem.** A mercury lamp emits light at $\lambda = 546.1$ nm with a spectral width
$\Delta\lambda = 0.025$ nm. (a) Find the coherence length. (b) In a Michelson interferometer, at what
path difference does the fringe visibility drop to $1/e$? (c) How many fringes are visible before they
wash out?

**Solution.**

(a) $L_c = \lambda^2/\Delta\lambda = (546.1 \times 10^{-9})^2/(0.025 \times 10^{-9}) = 1.19 \times 10^{-2}$ m $= 11.9$ mm.

(b) For a Gaussian spectrum, visibility drops to $1/e$ when $\Delta x = L_c = 11.9$ mm.

(c) The number of fringes: $N_{\mathrm{fringes}} = L_c/\lambda = (11.9 \times 10^{-3})/(546.1 \times 10^{-9}) = 2.18 \times 10^4$.
Over 20000 fringes are visible — a large number, but far fewer than for a laser.

</details>

### 8.2 Spatial Coherence

The **van Cittert-Zernike theorem** states that the spatial coherence of light from an extended
incoherent source is given by the Fourier transform of the source intensity distribution.

For a circular source of angular diameter $\theta_s$, the transverse coherence length is:

$$l_c \approx \frac{1.22\lambda}{\theta_s}$$

### 8.3 Michelson Stellar Interferometer

Two separated mirrors direct light from a distant star into a single telescope. Fringes are observed
when the mirror separation $d$ satisfies:

$$d \lt \frac{1.22\lambda}{\theta_s}$$

The first disappearance of fringes gives the angular diameter of the star:
$\theta_s = 1.22\lambda/d$.

## 9. Lasers

### 9.1 Stimulated Emission

Einstein's coefficients: $A_{21}$ (spontaneous emission), $B_{21}$ (stimulated emission),
$B_{12}$ (absorption).

At thermal equilibrium:

$$A_{21} + B_{21}\rho(\omega) = B_{12}\rho(\omega) \cdot \frac{g_1}{g_2} e^{\hbar\omega/(k_B T)}$$

The relations $B_{21} = B_{12}$ (for non-degenerate levels) and $A_{21}/B_{21} = \hbar\omega^3 n^3/(\pi^2 c^3)$
follow from detailed balance with the Planck distribution.

### 9.2 Population Inversion

Laser operation requires **population inversion**: $N_2 \gt N_1$ where $N_2$ is the population of the
upper laser level and $N_1$ is the lower.

This cannot be achieved in a two-level system at thermal equilibrium. A **three-level** or
**four-level** laser scheme is needed.

### 9.3 Laser Cavity Modes

A Fabry-Perot cavity of length $L$ supports longitudinal modes at frequencies:

$$\nu_m = m\frac{c}{2nL}, \quad m = 1, 2, 3, \ldots$$

The mode spacing (free spectral range):

$$\Delta\nu = \frac{c}{2nL}$$

For a cavity with mirrors of reflectivity $R$, the **finesse** is:

$$\mathcal{F} = \frac{\pi\sqrt{R}}{1 - R}$$

### 9.4 Gaussian Beams

The fundamental TEM$_{00}$ mode of a laser cavity is a Gaussian beam:

$$E(r, z) = E_0 \frac{w_0}{w(z)} \exp\left(-\frac{r^2}{w(z)^2}\right) \exp\left(-ikz - ik\frac{r^2}{2R(z)} + i\zeta(z)\right)$$

where:

- **Beam waist:** $w_0$ (minimum spot size).
- **Rayleigh range:** $z_R = \pi w_0^2 / \lambda$.
- **Beam radius:** $w(z) = w_0\sqrt{1 + (z/z_R)^2}$.
- **Radius of curvature:** $R(z) = z[1 + (z_R/z)^2]$.
- **Gouy phase:** $\zeta(z) = \arctan(z/z_R)$.

The beam **divergence** (half-angle, far field): $\theta = \lambda/(\pi w_0)$.

## 10. Fresnel Equations

### 10.1 Derivation at a Dielectric Interface

When light strikes a planar interface between media with refractive indices $n_1$ and $n_2$, the
amplitudes of the reflected and transmitted waves depend on the polarisation.

For an incident wave with amplitude $E_i$, the **reflection and transmission coefficients** are:

**s-polarisation** (perpendicular to the plane of incidence):

$$r_s = \frac{n_1\cos\theta_i - n_2\cos\theta_t}{n_1\cos\theta_i + n_2\cos\theta_t}, \quad t_s = \frac{2n_1\cos\theta_i}{n_1\cos\theta_i + n_2\cos\theta_t}$$

**p-polarisation** (parallel to the plane of incidence):

$$r_p = \frac{n_2\cos\theta_i - n_1\cos\theta_t}{n_2\cos\theta_i + n_1\cos\theta_t}, \quad t_p = \frac{2n_1\cos\theta_i}{n_2\cos\theta_i + n_1\cos\theta_t}$$

**Reflectance and transmittance** (energy fractions):

$$R = |r|^2, \quad T = \frac{n_2\cos\theta_t}{n_1\cos\theta_i}|t|^2$$

with $R + T = 1$ (energy conservation).

### 10.2 Brewster's Angle

At the **Brewster angle** $\theta_B$, the reflected beam for p-polarised light has zero amplitude:
$r_p = 0$:

$$\tan\theta_B = \frac{n_2}{n_1}$$

**Proof.** Setting $r_p = 0$: $n_2\cos\theta_i = n_1\cos\theta_t$. Using Snell's law
$n_1\sin\theta_i = n_2\sin\theta_t$:

$$\frac{\cos\theta_i}{\sin\theta_i} = \frac{\cos\theta_t}{\sin\theta_t}$$

$$\cot\theta_i = \cot\theta_t \implies \theta_i + \theta_t = 90^\circ$$

so $\tan\theta_i = \tan\theta_B = n_2/n_1$. $\blacksquare$

At Brewster's angle, the reflected and refracted beams are perpendicular. This is why polarising
filters work at specific angles for reflected glare.

### 10.3 Total Internal Reflection and the Evanescent Wave

When $n_1 \gt n_2$ and $\theta_i \gt \theta_c = \arcsin(n_2/n_1)$, $\sin\theta_t \gt 1$, so
$\cos\theta_t = i\sqrt{\sin^2\theta_t - 1}$ becomes imaginary.

The transmitted field becomes an **evanescent wave**:

$$E_t \propto e^{-\kappa x}\, e^{i(k_z z - \omega t)}$$

where $\kappa = k_0\sqrt{n_1^2\sin^2\theta_i - n_2^2}$ and $k_z = k_0 n_1\sin\theta_i$.

The field decays exponentially with penetration depth $\delta = 1/\kappa$ but propagates along the
interface. No energy is transported into the second medium: $R = 1$.

**Frustrated total internal reflection.** If a third medium is brought within a few wavelengths of
the interface, energy can tunnel across the gap (analogous to quantum tunnelling).

## 11. Dispersion

### 11.1 Normal and Anomalous Dispersion

The refractive index varies with frequency:

$$n(\omega) = 1 + \frac{Ne^2}{2m_e\varepsilon_0} \sum_j \frac{f_j}{\omega_{0j}^2 - \omega^2 - i\gamma_j\omega}$$

where $N$ is the electron density, $f_j$ are oscillator strengths, $\omega_{0j}$ are resonance
frequencies, and $\gamma_j$ are damping constants.

- **Normal dispersion** ($dn/d\lambda \lt 0$): away from resonances, $n$ decreases with increasing
  $\lambda$.
- **Anomalous dispersion** ($dn/d\lambda \gt 0$): near resonances, $n$ increases with $\lambda$.

### 11.2 Group and Phase Velocity

- **Phase velocity:** $v_p = \omega/k = c/n$.
- **Group velocity:** $v_g = d\omega/dk = c/(n + \omega\, dn/d\omega)$.

For normal dispersion, $v_g \lt v_p$. In regions of anomalous dispersion, $v_g$ can exceed $c$ or
even become negative, but this does not violate causality (signal velocity remains $\leq c$).

### 11.3 Dispersion Relation in a Medium

Starting from the Lorentz oscillator model for a single resonance:

$$n^2(\omega) = 1 + \frac{Ne^2}{m_e\varepsilon_0}\frac{1}{\omega_0^2 - \omega^2 - i\gamma\omega}$$

The real part $n(\omega) = \mathrm{Re}\sqrt{\epsilon(\omega)}$ gives the refractive index. The
imaginary part gives absorption:

$$\alpha_{\mathrm{abs}} = \frac{2\omega}{c}\,\mathrm{Im}\, n(\omega)$$

**Worked example.** For X-rays ($\omega \gg \omega_0$):

$$n \approx 1 - \frac{Ne^2}{2m_e\varepsilon_0\omega^2} = 1 - \frac{\omega_p^2}{2\omega^2}$$

where $\omega_p = \sqrt{Ne^2/(m_e\varepsilon_0)}$ is the plasma frequency. Since $n \lt 1$, X-rays
undergo total external reflection at grazing incidence.

### 11.4 Chromatic Aberration

Since $n$ depends on $\lambda$, a lens has different focal lengths for different wavelengths. The
longitudinal chromatic aberration is:

$$\Delta f = f(\lambda_1) - f(\lambda_2)$$

**Achromatic doublet.** Two lenses of different materials (e.g., crown and flint glass) with
different dispersive powers are combined to cancel chromatic aberration at two wavelengths. The
condition is:

$$\frac{\omega_1}{f_1} + \frac{\omega_2}{f_2} = 0$$

where $\omega_i = (n_{i,F} - n_{i,C})/(n_{i,d} - 1)$ is the Abbe number for glass $i$.

## 12. Optical Fibres

### 12.1 Total Internal Reflection in Fibres

An optical fibre consists of a core (refractive index $n_1$) surrounded by a cladding ($n_2 \lt n_1$).
Light is guided by total internal reflection.

The **numerical aperture:**

$$\mathrm{NA} = \sin\theta_{\mathrm{max}} = \sqrt{n_1^2 - n_2^2}$$

where $\theta_{\mathrm{max}}$ is the maximum acceptance angle for light entering the fibre.

### 12.2 Modes in Optical Fibres

The number of modes supported depends on the **V-number:**

$$V = \frac{2\pi a}{\lambda}\mathrm{NA}$$

where $a$ is the core radius.

- **Single-mode fibre:** $V \lt 2.405$. Only the fundamental HE$_{11}$ mode propagates.
- **Multimode fibre:** $V \gt 2.405$. Multiple modes propagate, causing modal dispersion.

### 12.3 Attenuation

Fibre attenuation is dominated by Rayleigh scattering ($\propto \lambda^{-4}$) and infrared absorption
peaks. The minimum attenuation for silica fibre is $\sim 0.2$ dB/km at $\lambda \approx 1550$ nm.

## 13. Problem Set

**1.** A string of length $L = 1.20$ m is fixed at both ends and has wave speed $v = 240$ m/s.
Find the fundamental frequency and the frequencies of the first three harmonics.

**2.** Show that $u(x,t) = A e^{i(kx-\omega t)} + B e^{-i(kx+\omega t)}$ satisfies the 1D wave
equation $\partial^2 u/\partial x^2 = (1/v^2)\partial^2 u/\partial t^2$. Identify the physical
meaning of each term and find the condition on $\omega$ and $k$.

**3.** A wave packet in a dispersive medium has central angular frequency $\omega_0 = 10^{15}$ rad/s
and bandwidth $\Delta\omega = 10^{12}$ rad/s. The group velocity dispersion is
$\alpha = d^2\omega/dk^2 = 2.0 \times 10^6$ m$^2$/s. Estimate the time required for the packet
to double in spatial width after travelling a distance of 1.0 m.

**4.** The electric field of a plane wave is
$\mathbf{E} = (20\hat{\mathbf{x}} - 15\hat{\mathbf{y}})\cos(kz - \omega t)$ V/m in vacuum.
Find the amplitude, the polarisation state (including the angle and handedness), and the time-averaged
intensity.

**5.** Show that for normal incidence on a dielectric interface, the amplitude reflection and
transmission coefficients satisfy $t = 1 + r$. Prove this from the boundary conditions.

**6.** Unpolarised light is incident from water ($n = 1.33$) onto glass ($n = 1.50$). Calculate the
reflectance for (a) normal incidence, (b) $\theta_i = 45°$, and (c) Brewster's angle. At which
angle is the reflected light most strongly polarised?

**7.** An optical fibre has core index $n_1 = 1.48$ and cladding index $n_2 = 1.46$. Find the
critical angle for total internal reflection and the numerical aperture. What is the maximum
acceptance angle in air?

**8.** In a Young's double-slit experiment, the slit separation is $d = 0.50$ mm and the screen is
$L = 1.5$ m away. The fifth bright fringe is 8.2 mm from the central maximum. Find the wavelength.

**9.** A magnesium fluoride ($n = 1.38$) anti-reflection coating is deposited on a glass lens
($n = 1.52$). Find the minimum coating thickness for minimum reflection at $\lambda = 550$ nm.
What is the reflectance of the uncoated lens at normal incidence?

**10.** A Michelson interferometer uses light from a sodium lamp ($\lambda = 589$ nm, $\Delta\lambda = 0.6$ nm).
(a) If 1000 fringes are counted when one mirror moves, how far did it move?
(b) Over what range of mirror displacement will interference fringes remain visible?

**11.** A Fabry-Perot etalon with $R = 0.85$ and plate separation $d = 0.50$ mm is illuminated at
normal incidence with $\lambda = 500$ nm. Calculate the finesse, the free spectral range (in Hz),
and the resolving power. What is the minimum wavelength difference that can be resolved?

**12.** Monochromatic light of wavelength $\lambda = 633$ nm passes through a slit of width
$a = 0.050$ mm onto a screen at distance $L = 3.0$ m. (a) Find the width of the central maximum.
(b) Calculate the intensity at the position of the second secondary maximum relative to $I_0$.

**13.** A diffraction grating with 1200 lines/mm is illuminated at normal incidence by light containing
two wavelengths $\lambda_1 = 500.0$ nm and $\lambda_2 = 500.5$ nm. What minimum grating width is
needed to resolve these lines in the second order?

**14.** The Hubble Space Telescope has a primary mirror of diameter $D = 2.4$ m. Calculate its
angular resolution at $\lambda = 500$ nm in both radians and arcseconds. A ground-based telescope
with $D = 8$ m operates under atmospheric seeing of $1.0''$. Which telescope achieves better
resolution, and why?

**15.** Unpolarised light of intensity $I_0$ passes through two ideal linear polarisers whose
transmission axes are at angle $\theta$ to each other. For what value of $\theta$ is the transmitted
intensity equal to $I_0/8$?

**16.** Linearly polarised light at $30°$ to the fast axis passes through a quarter-wave plate,
then through a half-wave plate whose fast axis is aligned with the quarter-wave plate's fast axis.
Describe the polarisation state after each element. What is the final polarisation state?

**17.** Light is incident from air onto a glass surface ($n = 1.50$) at Brewster's angle.
(a) Calculate the Brewster angle.
(b) Find the angle of refraction and verify that the reflected and refracted beams are
perpendicular.
(c) If the incident light is unpolarised with intensity $I_0$, what is the intensity and
polarisation state of the reflected light?

**18.** An object is placed 30 cm from a converging lens ($f_1 = 20$ cm). A diverging lens
($f_2 = -15$ cm) is placed 60 cm from the converging lens on the opposite side. Using the ray
transfer matrix method, find the position and magnification of the final image. Verify your result
using the thin lens equation applied twice.

---

### Selected Solutions

**Solution 1.** $f_1 = v/(2L) = 240/(2 \times 1.20) = 100$ Hz. The harmonics are $f_n = nf_1$:
$f_1 = 100$ Hz, $f_2 = 200$ Hz, $f_3 = 300$ Hz.

**Solution 2.** $\partial^2 u/\partial x^2 = -k^2(Ae^{i(kx-\omega t)} + Be^{-i(kx+\omega t)})$ and
$\partial^2 u/\partial t^2 = -\omega^2(Ae^{i(kx-\omega t)} + Be^{-i(kx+\omega t)})$. The wave
equation requires $k^2 = \omega^2/v^2$, i.e., $\omega = \pm vk$. The first term is a wave
travelling in the $+x$ direction; the second is a wave travelling in the $-x$ direction.

**Solution 3.** Group velocity: $v_g = d\omega/dk \approx \Delta\omega/\Delta k$. Initial spatial
width: $\sigma_0 \approx 1/\Delta k = 1/(\Delta\omega/v_g)$. The packet doubles when
$1 + (\alpha t/(2\sigma_0^2))^2 = 4$, giving $t = 2\sigma_0\sqrt{3}/\alpha$. Using
$\sigma_0 = v_g/\Delta\omega$ and $v_g = \omega_0/k_0$ with $k_0 = \omega_0/c$ (assuming $v_g \approx c$ for
estimation): $\sigma_0 \approx 3 \times 10^8/10^{12} = 3 \times 10^{-4}$ m.
$t = 2(3 \times 10^{-4})(\sqrt{3})/(2 \times 10^6) = 5.2 \times 10^{-10}$ s. Time to travel 1 m:
$\sim 3.3 \times 10^{-9}$ s $\gg t$, so the packet doubles well before reaching 1 m.

**Solution 5.** At normal incidence, $\theta_i = \theta_t = 0$ and $r_s = r_p = (n_1 - n_2)/(n_1 + n_2)$.
Boundary condition on tangential $E$: $E_0(1 + r) = E_0 t$, so $t = 1 + r$. $\blacksquare$

**Solution 8.** $y_5 = 5\lambda L/d \implies \lambda = y_5 d/(5L) = (8.2 \times 10^{-3})(0.50 \times 10^{-3})/(5 \times 1.5) = 5.47 \times 10^{-7}$ m $= 547$ nm.

**Solution 9.** Thickness: $t = \lambda/(4n) = 550/(4 \times 1.38) = 99.6$ nm. Uncoated reflectance:
$R = [(1 - 1.52)/(1 + 1.52)]^2 = (0.52/2.52)^2 = 0.0426 = 4.26\%$.

**Solution 10.** (a) $\Delta d = m\lambda/2 = 1000 \times 589 \times 10^{-9}/2 = 2.945 \times 10^{-4}$ m $= 0.295$ mm.
(b) Fringes are visible for path difference $\Delta x \lt L_c = \lambda^2/\Delta\lambda = (589 \times 10^{-9})^2/(0.6 \times 10^{-9}) = 5.78 \times 10^{-4}$ m $= 0.578$ mm. Since the path difference is $2\Delta d$, the mirror can move up to $\Delta d = L_c/2 = 0.289$ mm before fringes wash out. Note that 1000 fringes correspond to $\Delta d = 0.295$ mm, which slightly exceeds $L_c/2$ — the outermost fringes would already be fading.

**Solution 11.** $\mathcal{F} = \pi\sqrt{0.85}/(1 - 0.85) = 19.3$. $\Delta\nu_{\mathrm{FSR}} = c/(2nd) = 3 \times 10^8/(2 \times 0.5 \times 10^{-3}) = 3 \times 10^{11}$ Hz. $m = 2nd/\lambda = 2000$. $\mathcal{R} = m\mathcal{F} = 38600$. $\delta\lambda = \lambda/\mathcal{R} = 500/38600 = 0.0130$ nm.

**Solution 14.** $\theta_{\min} = 1.22\lambda/D = 1.22(500 \times 10^{-9})/2.4 = 2.54 \times 10^{-7}$ rad $= 0.0527''$.
The ground-based $D = 8$ m telescope has a diffraction limit of $1.22(500 \times 10^{-9})/8 = 7.63 \times 10^{-8}$ rad $= 0.0158''$, but atmospheric seeing of $1.0''$ degrades this by a factor of $\sim 63$. Hubble, being above the atmosphere, achieves its diffraction-limited $0.053''$ resolution, far surpassing the ground-based telescope's effective resolution.

**Solution 17.** (a) $\theta_B = \arctan(1.50) = 56.3°$.
(b) $\theta_t = 90° - \theta_B = 33.7°$. The reflected and refracted beams are separated by $90°$. $\checkmark$
(c) $r_s = (n_1\cos\theta_B - n_2\cos\theta_t)/(n_1\cos\theta_B + n_2\cos\theta_t) = (0.555 - 1.248)/(0.555 + 1.248) = -0.384$.
$R_s = 0.148$. Reflected intensity: $I_r = R_s(I_0/2) = 0.074\,I_0$. The reflected light is 100% s-polarised.

**Solution 15.** $I = (I_0/2)\cos^2\theta = I_0/8 \implies \cos^2\theta = 1/4 \implies \theta = 60°$.

**Solution 4.** $E_0 = \sqrt{20^2 + (-15)^2} = 25$ V/m. Polarisation angle from $x$-axis: $\theta = \arctan(-15/20) = -36.9°$ (below the $x$-axis). The field has $\delta = 0$ (no phase difference between components), so it is linearly polarised. $I = \frac{1}{2}c\varepsilon_0 E_0^2 = \frac{1}{2}(3 \times 10^8)(8.854 \times 10^{-12})(625) = 0.830$ W/m$^2$.

**Solution 6.** (a) $R = [(1.33 - 1.50)/(1.33 + 1.50)]^2 = (0.17/2.83)^2 = 0.00361 = 0.361\%$.
(b) $\sin\theta_t = 1.33\sin 45°/1.50 = 0.627$, $\theta_t = 38.8°$.
$r_s = (1.33\cos 45° - 1.50\cos 38.8°)/(1.33\cos 45° + 1.50\cos 38.8°) = (0.940 - 1.170)/(0.940 + 1.170) = -0.109$.
$R_s = 0.0119$.
$r_p = (1.50\cos 45° - 1.33\cos 38.8°)/(1.50\cos 45° + 1.33\cos 38.8°) = (1.061 - 1.038)/(1.061 + 1.038) = 0.011$.
$R_p = 1.2 \times 10^{-4}$. (c) $\theta_B = \arctan(1.50/1.33) = 48.4°$. The reflected light is most strongly polarised at $\theta_B$.

**Solution 7.** $\theta_c = \arcsin(1.46/1.48) = 80.6°$. $\mathrm{NA} = \sqrt{1.48^2 - 1.46^2} = \sqrt{2.190 - 2.132} = \sqrt{0.0588} = 0.242$. $\theta_{\max} = \arcsin(0.242) = 14.0°$.

**Solution 12.** (a) First minimum at $\sin\theta_1 = \lambda/a = 633 \times 10^{-9}/(5.0 \times 10^{-5}) = 1.266 \times 10^{-2}$, $\theta_1 = 0.726°$. Central maximum width on screen: $2y_1 \approx 2L\theta_1 = 2(3.0)(1.266 \times 10^{-2}) = 7.60$ cm.
(b) Second secondary maximum near $\alpha \approx 5\pi/2 = 7.854$. $I/I_0 = (\sin 7.854/7.854)^2 = (1/7.854)^2 = 0.0162$, about 1.6% of $I_0$.

**Solution 16.** After the QWP: fast-axis component $E_f = E_0\cos 30° = 0.866\,E_0$, slow-axis component $E_s = E_0\sin 30° = 0.500\,E_0$ with a $\pi/2$ phase delay. Since $E_f \neq E_s$, the output is elliptically polarised (not circular). After the HWP (same fast axis), the phase difference doubles to $\pi$ and the slow-axis component is negated: the output is linearly polarised at $-30°$ to the fast axis (reflected about the fast axis).

**Solution 18.** First lens: $1/s_1' = 1/20 - 1/30 = 1/60$, so $s_1' = 60$ cm. The image forms at
the position of the second lens. Object distance for second lens: $s_2 = 60 - 60 = 0$ cm (object at
infinity for the second lens). $1/s_2' = 1/f_2 - 1/s_2$: since $s_2 = 0$ (parallel rays enter the
second lens), $s_2' = f_2 = -15$ cm. The final image is virtual, 15 cm to the left of the diverging
lens.

Matrix method: $M_{\mathrm{sys}} = M_{\mathrm{lens}_2} \cdot M_{\mathrm{prop}} \cdot M_{\mathrm{lens}_1}$
$= \begin{pmatrix} 1 & 0 \\ 1/15 & 1 \end{pmatrix} \begin{pmatrix} 1 & 60 \\ 0 & 1 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ -1/20 & 1 \end{pmatrix}$
$= \begin{pmatrix} 1 & 0 \\ 1/15 & 1 \end{pmatrix} \begin{pmatrix} 1 & 60 \\ -1/20 & 1 \end{pmatrix}$
$= \begin{pmatrix} 1 & 60 \\ 1/15 - 1/20 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 60 \\ 1/60 & 5 \end{pmatrix}$.

From the matrix $\begin{pmatrix} A & B \\ C & D \end{pmatrix}$: $s' = -A/C = -1/(1/60) = -60$ cm (measured
from the second lens, so 60 cm to the left, but this is the object distance for a virtual object). The
effective focal length: $-1/C = -60$ cm. The image forms where parallel output rays converge: at $f_2 = -15$ cm.
Total magnification: $M = A - s'C = 1 - (-15)(1/60) = 1 + 1/4 = 5/4 = 1.25$ (upright, slightly magnified).
