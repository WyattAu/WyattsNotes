---
title: Coherence
tags:
  - Physics
  - University
---

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
$N_{\mathrm{fringes} = L_c/\lambda = (11.9 \times 10^{-3})/(546.1 \times 10^{-9}) = 2.18 \times 10^4}$.
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

