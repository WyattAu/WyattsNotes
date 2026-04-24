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

### 1.3 Complex Representation

It is convenient to write monochromatic waves as:

$$\mathbf{E}(\mathbf{r}, t) = \mathrm{Re}\left[\tilde{\mathbf{E}}\, e^{i(\mathbf{k}\cdot\mathbf{r} - \omega t)}\right]$$

where $\tilde{\mathbf{E}}$ is the complex amplitude, $\mathbf{k}$ is the wave vector, and $\omega$ is
the angular frequency. The dispersion relation is $\omega = ck = c|\mathbf{k}|$.

The wave vector satisfies $|\mathbf{k}| = 2\pi/\lambda$ and $\omega = 2\pi\nu$.

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

### 2.2 Energy and Intensity

The **Poynting vector**:

$$\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$$

represents the energy flux (W/m$^2$). The time-averaged intensity for a plane wave:

$$I = \langle S \rangle = \frac{1}{2}c\varepsilon_0 E_0^2$$

### 2.3 EM Waves in Matter

In a linear, isotropic, non-magnetic medium with refractive index $n$:

$$v = \frac{c}{n}, \quad \mathbf{k} = n\frac{\omega}{c}\hat{\mathbf{k}}$$

The index of refraction is related to the relative permittivity and permeability:

$$n = \sqrt{\varepsilon_r \mu_r}$$

For non-magnetic materials ($\mu_r \approx 1$): $n \approx \sqrt{\varepsilon_r}$.

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

### 3.3 Thin-Film Interference

Light reflecting from a thin film of thickness $t$ and refractive index $n$ undergoes interference
between the wave reflected from the top surface and the wave reflected from the bottom surface.

**Path difference:** $2nt\cos\theta_t$ where $\theta_t$ is the angle of refraction inside the film.

A phase shift of $\pi$ occurs upon reflection from a medium of higher refractive index. The condition
for constructive interference (bright reflection) is:

$$2nt\cos\theta_t = \left(m + \frac{1}{2}\right)\lambda \quad \mathrm{(one\ phase\ shift)}$$

$$2nt\cos\theta_t = m\lambda \quad \mathrm{(zero\ or\ two\ phase\ shifts)}$$

### 3.4 Michelson Interferometer

A beam splitter divides light into two beams that travel perpendicular paths and recombine. The path
difference $\Delta = 2(d_1 - d_2)$ determines the interference pattern.

Moving mirror $M_1$ by distance $\Delta d$ shifts the pattern by $m = 2\Delta d / \lambda$ fringes.

## 4. Diffraction

### 4.1 Huygens-Fresnel Principle

Every point on a wavefront acts as a source of secondary spherical wavelets. The new wavefront is the
envelope of these wavelets, accounting for both amplitude and phase.

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

### 4.3 Double-Slit with Finite Width

Combining single-slit diffraction and double-slit interference:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \cos^2\beta$$

where $\alpha = \pi a\sin\theta/\lambda$ (diffraction envelope) and $\beta = \pi d\sin\theta/\lambda$
(interference fringes).

The interference fringes are modulated by the diffraction envelope. **Missing orders** occur when
$\beta = m\pi$ coincides with $\alpha = n\pi$, i.e., when $d/a$ is a ratio of integers.

### 4.4 Diffraction Gratings

A grating with $N$ slits, each of width $a$, separated by distance $d$:

$$I(\theta) = I_0 \left(\frac{\sin\alpha}{\alpha}\right)^2 \left(\frac{\sin N\beta}{\sin\beta}\right)^2$$

**Principal maxima:** $d\sin\theta = m\lambda$ ($m = 0, \pm 1, \pm 2, \ldots$).

The angular width of a principal maximum is $\Delta\theta = \lambda/(Nd\cos\theta)$. The
**resolving power** of a grating is:

$$R = \frac{\lambda}{\Delta\lambda} = mN$$

where $N$ is the total number of illuminated slits.

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

### 5.3 Birefringence

Birefringent crystals (e.g., calcite) have two refractive indices: $n_o$ (ordinary ray) and $n_e$
(extraordinary ray). The two rays have orthogonal polarisations and different phase velocities.

A **quarter-wave plate** of thickness $t = \lambda/(4|n_e - n_o|)$ introduces a phase difference of
$\pi/2$ between the two components, converting linear to circular polarisation (or vice versa).

A **half-wave plate** introduces a phase difference of $\pi$, rotating the plane of linear
polarisation by $2\theta$.

### 5.4 Optical Activity

Certain materials (sugars, quartz) rotate the plane of linearly polarised light. The specific
rotation is:

$$[\alpha] = \frac{\theta}{c \cdot l}$$

where $\theta$ is the rotation angle, $c$ is the concentration, and $l$ is the path length.

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

### 6.6 Optical Instruments

**Magnifying glass.** Angular magnification when the image is at the near point $D$:

$$M = 1 + \frac{D}{f}$$

**Compound microscope.** Total magnification:

$$M_{\mathrm{total}} = -\frac{L}{f_o} \cdot \frac{D}{f_e}$$

where $L$ is the tube length, $f_o$ is the objective focal length, and $f_e$ is the eyepiece focal
length.

**Refracting telescope.** Angular magnification:

$$M = -\frac{f_o}{f_e}$$

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

:::caution Common Pitfall
The group velocity is only equal to the signal velocity in regions of low dispersion. Near
absorption resonances, the group velocity can exceed $c$ or become negative, but no information
is transmitted faster than $c$. The correct velocity for information transfer is the front
velocity or signal velocity.
:::
