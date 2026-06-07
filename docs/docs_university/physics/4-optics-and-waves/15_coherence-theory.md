---
title: Coherence Theory
tags:
  - Physics
  - University
---

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

$$L_c = \frac{\lambda^2}{\Delta\lambda} = \frac{(589 \times 10^{-9})^2}{0.6 \times 10^{-9}} = \frac{3.47 \times 10^{-13}}{6 \times 10^{-10}} \approx 5.78 \times 10^{-4}\,\mathrm{m} \approx 0.578\,\mathrm{mm}$$

For a He-Ne laser ($\lambda = 632.8$ nm, $\Delta\lambda \sim 10^{-6}$ nm):

$$L_c = \frac{(632.8 \times 10^{-9})^2}{10^{-15}} \approx 400\,\mathrm{m}$$

The enormous coherence length of the laser is why it produces sharp fringes over very large path
differences. $\blacksquare$

</details>

---

