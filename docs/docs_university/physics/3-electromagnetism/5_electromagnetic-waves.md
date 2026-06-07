---
title: Electromagnetic Waves
tags:
  - Physics
  - University
---

### 5.1 The Wave Equation

In free space ($\rho = 0$, $\mathbf{J} = \mathbf{0}$), take the curl of Faraday's law:

$$\nabla \times (\nabla \times \mathbf{E}) = -\frac{\partial}{\partial t}(\nabla \times \mathbf{B}) = -\mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Using the identity
$\nabla \times (\nabla \times \mathbf{E}) = \nabla(\nabla \cdot \mathbf{E}) - \nabla^2 \mathbf{E}$
And $\nabla \cdot \mathbf{E} = 0$:

$$\nabla^2 \mathbf{E} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{E}}{\partial t^2}$$

Similarly: $\nabla^2 \mathbf{B} = \mu_0 \varepsilon_0 \frac{\partial^2 \mathbf{B}}{\partial t^2}$.

These are **wave equations** with wave speed
$c = 1/\sqrt{\mu_0 \varepsilon_0} \approx 3 \times 10^8$ m/s.

### 5.2 Properties of EM Waves

**Theorem 5.1.** Electromagnetic waves in free space are:

1. **Transverse**: $\mathbf{E}$ and $\mathbf{B}$ are perpendicular to the direction of propagation.
2. **Mutually perpendicular**: $\mathbf{E} \perp \mathbf{B}$.
3. **In phase**: $E = cB$ at every point.
4. **Linearly polarised** (; other polarisations are superpositions).

**Energy.** The energy density of an EM wave is $u = \frac{1}{2}(\varepsilon_0 E^2 + B^2/\mu_0)$.

The **Poynting vector** $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$ represents the
energy Flux (power per unit area).

### 5.3 Worked Example

**Problem.** Show that $\mathbf{E} = E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$ satisfies the wave
Equation and find the associated $\mathbf{B}$ field.

_Solution._
$\nabla^2 \mathbf{E} = \frac{\partial^2 E_x}{\partial z^2}\hat{\mathbf{x}} = -k^2 E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$.

$\frac{\partial^2 \mathbf{E}}{\partial t^2} = -\omega^2 E_0 \cos(kz - \omega t)\,\hat{\mathbf{x}}$.

The wave equation requires $k^2 = \mu_0 \varepsilon_0 \omega^2$I.e., $\omega/k = c$.

From Faraday's law: $\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}$.

$(\nabla \times \mathbf{E})_y = -\frac{\partial E_x}{\partial z} = k E_0 \sin(kz - \omega t)$

$\frac{\partial B_y}{\partial t} = -k E_0 \sin(kz - \omega t) \implies B_y = \frac{k}{\omega} E_0 \cos(kz - \omega t) = \frac{E_0}{c}\cos(kz - \omega t)$

So $\mathbf{B} = \frac{E_0}{c}\cos(kz - \omega t)\,\hat{\mathbf{y}}$. $\blacksquare$

### 5.4 Poynting's Theorem and Energy Conservation

Poynting's theorem is the statement of energy conservation for electromagnetic fields.

**Derivation.** Start with the two Maxwell equations containing time derivatives:

$$\nabla \times \mathbf{E} = -\frac{\partial \mathbf{B}}{\partial t}, \quad \nabla \times \mathbf{B} = \mu_0 \mathbf{J} + \mu_0 \varepsilon_0 \frac{\partial \mathbf{E}}{\partial t}$$

Compute $\mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B})$:

$$\mathbf{B} \cdot (\nabla \times \mathbf{E}) = -\mathbf{B} \cdot \frac{\partial \mathbf{B}}{\partial t} = -\frac{\partial}{\partial t}\left(\frac{B^2}{2}\right)$$

$$-\mathbf{E} \cdot (\nabla \times \mathbf{B}) = -\mu_0 \mathbf{E} \cdot \mathbf{J} - \mu_0 \varepsilon_0 \mathbf{E} \cdot \frac{\partial \mathbf{E}}{\partial t} = -\mu_0 \mathbf{E} \cdot \mathbf{J} - \frac{\partial}{\partial t}\left(\frac{\varepsilon_0 E^2}{2}\right)$$

Using the vector identity
$\nabla \cdot (\mathbf{E} \times \mathbf{B}) = \mathbf{B} \cdot (\nabla \times \mathbf{E}) - \mathbf{E} \cdot (\nabla \times \mathbf{B})$:

$$\nabla \cdot (\mathbf{E} \times \mathbf{B}) = -\mu_0 \mathbf{J} \cdot \mathbf{E} - \mu_0 \varepsilon_0 \frac{\partial}{\partial t}\left(\frac{E^2}{2}\right) - \frac{\partial}{\partial t}\left(\frac{B^2}{2}\right)$$

Dividing by $\mu_0$ and rearranging:

$$\boxed{-\nabla \cdot \mathbf{S} = \mathbf{J} \cdot \mathbf{E} + \frac{\partial u}{\partial t}}$$

Where $\mathbf{S} = \frac{1}{\mu_0}\mathbf{E} \times \mathbf{B}$ is the Poynting vector and
$u = \frac{1}{2}\left(\varepsilon_0 E^2 + \frac{B^2}{\mu_0}\right)$ is the energy density.

**Interpretation:** The rate of energy leaving a volume equals the work done on charges plus The
rate of increase of field energy. In integral form:

$$-\oint_S \mathbf{S} \cdot d\mathbf{A} = \frac{d}{dt}\int_V u\,dV + \int_V \mathbf{J} \cdot \mathbf{E}\,dV$$

### 5.5 EM Wave Propagation: Worked Examples

**Intensity.** For a plane wave, the time-averaged Poynting vector is:

$$\langle\mathbf{S}\rangle = \frac{E_0^2}{2\mu_0 c}\,\hat{\mathbf{k}} = \frac{1}{2}\varepsilon_0 c E_0^2\,\hat{\mathbf{k}}$$

<details>
<summary>Example: Radiation pressure</summary>

A plane wave normally incident on a perfectly absorbing surface exerts a radiation pressure. The
momentum flux of the wave is $\langle S \rangle/c$ per unit area, so:

$$P_{\mathrm{abs} = \frac{\langle S \rangle}{c} = \frac{\varepsilon_0 E_0^2}{2}}$$

For a perfectly reflecting surface, the momentum transfer is doubled:

$$P_{\mathrm{ref} = \frac{2\langle S \rangle}{c} = \varepsilon_0 E_0^2}$$

A 1 kW/m$^2$ beam (like sunlight near Earth) exerts a pressure of about $3.3\ \mu$Pa on a Perfect
absorber. $\blacksquare$

</details>

<details>
<summary>Example: Polarization of EM waves</summary>

**Linear polarization.** $\mathbf{E} = E_0\cos(kz - \omega t)\,\hat{\mathbf{x}}$. The field
Oscillates in a fixed direction.

**Circular polarization.** Two orthogonal linear polarizations with a phase difference of $\pi/2$:

$$\mathbf{E} = E_0\cos(kz - \omega t)\,\hat{\mathbf{x}} \pm E_0\sin(kz - \omega t)\,\hat{\mathbf{y}}$$

The tip of $\mathbf{E}$ traces a circle. The $+$ sign gives left-circular polarization (LCP) and the
$-$ sign gives right-circular polarization (RCP).

**Elliptical polarization.** The general case with arbitrary amplitudes and phase:

$$\mathbf{E} = E_{0x}\cos(kz - \omega t)\,\hat{\mathbf{x}} + E_{0y}\cos(kz - \omega t + \delta)\,\hat{\mathbf{y}}$$

$\blacksquare$

</details>

### 5.6 EM Waves in Conductors

In a conductor with conductivity $\sigma$Ohm's law gives $\mathbf{J} = \sigma\mathbf{E}$.
Substituting into the Ampere-Maxwell law:

$$\nabla \times \mathbf{B} = \mu_0\sigma\mathbf{E} + \mu_0\varepsilon_0\frac{\partial \mathbf{E}}{\partial t}$$

For a monochromatic wave $\mathbf{E} = \mathbf{E}_0\,e^{-i\omega t}$This leads to a complex Wave
number:

$$\tilde{k}^2 = \mu_0\varepsilon_0\omega^2 + i\mu_0\sigma\omega$$

Writing $\tilde{k} = k + i\kappa$ where $k$ is the real part (wave number) and $\kappa$ is the
Imaginary part (attenuation constant):

$$\mathbf{E}(z,t) = \mathbf{E}_0\,e^{-\kappa z}\cos(kz - \omega t)$$

The field decays exponentially. The **skin depth** is the distance over which the amplitude Falls by
a factor of $1/e$:

$$\delta = \frac{1}{\kappa}$$

For a good conductor ($\sigma \gg \varepsilon_0\omega$):

$$\delta = \sqrt{\frac{2}{\mu_0\sigma\omega}}$$

<details>
<summary>Example: Skin depth in copper at 60 Hz and 1 MHz</summary>

Copper: $\sigma = 5.96 \times 10^7$ S/m, $\mu_r \approx 1$.

At $f = 60$ Hz ($\omega = 2\pi \times 60$ rad/s):

$$\delta = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 60}} \approx 8.5\ \mathrm{mm}$$

At $f = 1$ MHz ($\omega = 2\pi \times 10^6$ rad/s):

$$\delta = \sqrt{\frac{2}{4\pi \times 10^{-7} \times 5.96 \times 10^7 \times 2\pi \times 10^6}} \approx 65\ \mu\mathrm{m}$$

The skin depth decreases as $1/\sqrt{f}$So higher-frequency signals are confined to thinner Surface
layers. $\blacksquare$

</details>

### 5.7 Waveguides

Electromagnetic waves can be guided by hollow conducting pipes (waveguides). Consider a Rectangular
waveguide with dimensions $a$ (width) and $b$ (height).

**TE modes** (transverse electric, $E_z = 0$, $B_z \neq 0$). The lowest-order mode is
$\mathrm{TE_}{10}$With fields:

$$E_y = E_0 \sin\!\left(\frac{\pi x}{a}\right)\cos(k_g z - \omega t)$$

$$B_x = -\frac{k_g}{\omega}E_0 \sin\!\left(\frac{\pi x}{a}\right)\cos(k_g z - \omega t)$$

$$B_z = \frac{\pi}{\omega a}E_0 \cos\!\left(\frac{\pi x}{a}\right)\sin(k_g z - \omega t)$$

Where the **guide wave number** is $k_g = \sqrt{(\omega/c)^2 - (\pi/a)^2}$.

**Cutoff frequency.** Waves propagate only when $\omega \gt \omega_c$ where:

$$\omega_{c,mn} = c\pi\sqrt{\left(\frac{m}{a}\right)^2 + \left(\frac{n}{b}\right)^2}$$

For the $\mathrm{TE_}{10}$ mode: $f_c = \frac{c}{2a}$.

**Phase and group velocities.** In a waveguide, the phase velocity exceeds $c$:

$$v_p = \frac{\omega}{k_g} = \frac{c}{\sqrt{1 - (\omega_c/\omega)^2}} \gt c$$

The group velocity (signal velocity) is less than $c$:

$$v_g = \frac{d\omega}{dk_g} = c\sqrt{1 - (\omega_c/\omega)^2} \lt c$$

They satisfy $v_p\,v_g = c^2$.

:::caution Common Pitfall The phase velocity in a waveguide exceeds $c$But this does not violate
special relativity. No information or energy travels faster than $c$; the signal velocity is the
group velocity $v_g \lt c$. The phase velocity is the speed of the wave crests, which is a purely
Kinematic quantity.

### 5.8 Electric Dipole Radiation

An oscillating electric dipole is the simplest source of electromagnetic radiation.

Consider a dipole $\mathbf{p}(t) = p_0\cos(\omega t)\,\hat{\mathbf{z}}$. In the **radiation zone**
($r \gg \lambda$), the fields are:

$$\mathbf{E} = -\frac{\mu_0 p_0 \omega^2}{4\pi}\frac{\sin\theta}{r}\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\theta}}$$

$$\mathbf{B} = -\frac{\mu_0 p_0 \omega^2}{4\pi c}\frac{\sin\theta}{r}\cos[\omega(t - r/c)]\,\hat{\boldsymbol{\phi}}$$

The fields fall off as $1/r$ (not $1/r^2$ as for static fields), which is characteristic of
Radiation.

**Radiation pattern.** The intensity varies as $\sin^2\theta$With maximum radiation in the
Equatorial plane ($\theta = \pi/2$) and zero along the dipole axis ($\theta = 0, \pi$).

**Total radiated power.** Integrating the Poynting vector over a sphere:

$$P = \frac{\mu_0 p_0^2 \omega^4}{12\pi c}$$

**Larmor formula.** For a point charge $q$ undergoing acceleration $a$:

$$P = \frac{q^2 a^2}{6\pi\varepsilon_0 c^3}$$

This is the non-relativistic limit and is valid whenever $v \ll c$.

<details>
<summary>Derivation: Power radiated by an oscillating dipole</summary>

The time-averaged Poynting vector magnitude in the radiation zone:

$$\langle S \rangle = \frac{1}{2\mu_0}\lvert E_\theta\rvert\,\lvert B_\phi\rvert = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c}\frac{\sin^2\theta}{r^2}$$

The total power through a sphere of radius $r$:

$$P = \int_0^{2\pi}\!\!\int_0^\pi \langle S \rangle\, r^2\sin\theta\,d\theta\,d\phi = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c} \cdot 2\pi \int_0^\pi \sin^3\theta\,d\theta$$

Using $\int_0^\pi \sin^3\theta\,d\theta = 4/3$:

$$P = \frac{\mu_0 p_0^2\omega^4}{32\pi^2 c} \cdot 2\pi \cdot \frac{4}{3} = \frac{\mu_0 p_0^2\omega^4}{12\pi c}$$

$\blacksquare$

</details>



