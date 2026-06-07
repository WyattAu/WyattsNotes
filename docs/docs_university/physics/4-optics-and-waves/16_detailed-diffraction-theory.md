---
title: Detailed Diffraction Theory
tags:
  - Physics
  - University
---

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

