---
title: Electromagnetic Waves
tags:
  - Physics
  - University
---

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

**Radiation pressure.** For a perfectly absorbing surface: $P_{\mathrm{rad} = I/c}$. For a perfectly
Reflecting surface: $P_{\mathrm{rad} = 2I/c}$.

<details>
<summary>Worked Example: Radiation pressure from a laser</summary>

**Problem.** A 5 mW laser beam ($\lambda = 632.8$ nm) is normally incident on a perfectly reflecting
Mirror. The beam has a diameter of 1 mm. Find the radiation pressure and the force on the mirror.

**Solution.** Beam area: $A = \pi(0.5 \times 10^{-3})^2 = 7.85 \times 10^{-7}$ m$^2$. Intensity:
$I = P/A = 5 \times 10^{-3}/(7.85 \times 10^{-7}) = 6.37 \times 10^3$ W/m$^2$.

Radiation pressure (reflecting):
$P_{\mathrm{rad} = 2I/c = 2(6.37 \times 10^3)/(3 \times 10^8) = 4.25 \times 10^{-5}}$ Pa.

Force:
$F = P_{\mathrm{rad} \cdot A = (4.25 \times 10^{-5})(7.85 \times 10^{-7}) = 3.34 \times 10^{-11}}$
N.

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
$T = 1 - R = 0.96$. The intensity inside the glass is $I_{\mathrm{inside} = 0.96\,I_0}$But the power
per unit area Referenced to the vacuum intensity is
$I_{\mathrm{inside} = (n_2/n_1)\,T\,I_0 = 1.5 \times 0.96 \times I_0 = 1.44\,I_0}$ If we compare the
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
$\theta_i = 30°$. Calculate $r_s$, $r_p$, $R_s$And $R_p$.

**Solution.** From Snell's law: $\sin\theta_t = \sin 30°/1.50 = 0.333$So $\theta_t = 19.47°$.
$\cos\theta_i = \cos 30° = 0.866$, $\cos\theta_t = \cos 19.47° = 0.943$.

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
Interchangeable.
:::

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


