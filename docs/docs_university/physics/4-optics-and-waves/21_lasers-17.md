---
title: Lasers
tags:
  - Physics
  - University
---

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

$$g_{\text{th} = -\frac{1}{2L}\ln(R_1 R_2) = \alpha_i + \alpha_m}$$

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

The fundamental mode ($\text{TEM_}{00}$) of a laser cavity is a **Gaussian beam**:

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
   microscopy) can achieve resolutions well below the Abbe limit of $\lambda/(2\text{NA})$. The 2014
   Nobel Prize in Chemistry was awarded for super-resolution microscopy.

3. **Gaussian beams do not have sharp edges:** Unlike geometrical optics rays, Gaussian beams have
   no well-defined edge. The beam radius $w$ is defined as the $1/e^2$ intensity radius
   ($\sim 86.5\%$ of the peak). The power contained within $w$ is $1 - e^{-2} \approx 86.5\%$ of the
   total, not 100%.

4. **Spatial filtering with a pinhole:** A pinhole of diameter $d$ in the focal plane of a lens acts
   as a low-pass spatial filter with cutoff frequency $f_c = d/(\lambda f)$. The transmitted beam
   approaches a Gaussian profile (Airy pattern central maximum), which is why spatial filtering is
   used to "clean up" laser beams.

5. **Polarisation and Brewster's angle:** At Brewster’s angle, the _reflected_ beam is purely
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
$\Delta\nu_{\text{FSR} = c/(2d) = 3 \times 10^8/(2 \times 10^{-3}) = 1.5 \times 10^{11}}$ Hz $= 150$
GHz.

FSR in wavelength:
$\Delta\lambda_{\text{FSR} = \lambda^2/(2d) = (500 \times 10^{-9})^2/(2 \times 10^{-3}) = 1.25 \times 10^{-13}}$
m $= 0.125$ nm.

(b) Finesse:
$\mathcal{F} = \pi\sqrt{R}/(1 - R) = \pi\sqrt{0.8}/(1 - 0.8) = \pi \times 0.894/0.2 = 14.1$.

(c) Minimum resolvable wavelength difference (resolution):

$$\delta\lambda = \frac{\Delta\lambda_{\text{FSR}}{\mathcal{F}} = \frac{0.125}{14.1}\ \text{nm} = 0.0089\ \text{nm} = 8.9\ \text{pm}}$$

This corresponds to a resolving power
$\mathcal{R} = \lambda/\delta\lambda = 500/0.0089 \approx 56\,000$.

</details>

