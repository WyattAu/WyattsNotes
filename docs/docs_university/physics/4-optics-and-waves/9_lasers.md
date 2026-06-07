---
title: Lasers
tags:
  - Physics
  - University
---

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

