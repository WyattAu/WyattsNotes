---
title: Cauchy's Theorem
tags:
  - Mathematics
  - University
---

### 5.1 Statement

**Theorem 5.1 (Cauchy's Theorem).** If $f$ is analytic on a connected domain $D$ and $\gamma$ Is a
simple closed contour in $D$Then

$$\int_\gamma f(z)\, dz = 0$$

_Proof (for $f'$ continuous)._ By Green’s theorem in the plane, writing $f = u + iv$:

$$\int_\gamma f\, dz = \int_\gamma (u\, dx - v\, dy) + i\int_\gamma (v\, dx + u\, dy)$$

Applying Green's theorem to each integral:

$= \iint_D (-v_x - u_y)\, dA + i\iint_D (u_x - v_y)\, dA = 0$

By the Cauchy-Riemann equations. $\blacksquare$

### 5.2 Connected Domains

A domain $D \subseteq \mathbb{C}$ is ** connected** if every simple closed contour in $D$ can Be
continuously shrunk to a point within $D$.

**Cauchy's theorem may fail on multiply connected domains.** For example,
$\int_\gamma \frac{1}{z}\, dz = 2\pi i$ where $\gamma$ is the unit circle (traversing a region that
Excludes the singularity at $z = 0$).

### 5.3 Path Independence

**Corollary 5.2.** If $f$ is analytic on a connected domain $D$Then the integral
$\int_{z_0}^{z_1} f(z)\, dz$ is independent of the path from $z_0$ to $z_1$ in $D$.

### 5.4 Antiderivatives

**Theorem 5.3.** If $f$ is analytic on a connected domain $D$Then $f$ has an antiderivative $F$ in
$D$ (i.e., $F'(z) = f(z)$), and

$$\int_\gamma f(z)\, dz = F(z_1) - F(z_0)$$

Where $z_0$ and $z_1$ are the endpoints of $\gamma$.

### 5.5 Cauchy's Theorem for Multiply Connected Domains

**Theorem 5.4.** If $f$ is analytic on a domain $D$ containing simple closed contours
$\gamma, \gamma_1, \ldots, \gamma_n$ where $\gamma_1, \ldots, \gamma_n$ Lie in the interior of
$\gamma$ and the region between $\gamma$ and the $\gamma_k$ is contained in $D$ And all contours are
positively oriented, then

$$\int_\gamma f(z)\, dz = \sum_{k=1}^n \int_{\gamma_k} f(z)\, dz$$

### 5.6 Deformation of Contours

**Theorem 5.5 (Deformation of Contours).** If $f$ is analytic on a domain containing two simple
Closed contours $\gamma_1$ and $\gamma_2$ where one can be continuously deformed into the other
Within the domain of analyticity of $f$Then

$$\int_{\gamma_1} f(z)\, dz = \int_{\gamma_2} f(z)\, dz$$

_Proof._ This follows directly from Theorem 5.4 applied to the region between $\gamma_1$ and
$\gamma_2$. $\blacksquare$

_Remark._ This theorem is enormously useful: we can replace a complicated contour with a simpler one
(a small circle around each singularity) without changing the value of the integral.

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac{dz}{z - 2}$ where $\gamma$ is the ellipse
$\frac{x^2}{4} + \frac{y^2}{9} = 1$.

Since $z = 2$ is inside the ellipse and $\frac{1}{z - 2}$ is analytic everywhere else, By
deformation of contours we can replace $\gamma$ with a small circle around $z = 2$:

$\int_\gamma \frac{dz}{z - 2} = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac{e^z}{z}\, dz$ where $\gamma$ is the square with vertices
$\pm 2 \pm 2i$.

$\frac{e^z}{z}$ is analytic on and inside $\gamma$ except at $z = 0$. By deformation:
$\int_\gamma \frac{e^z}{z}\, dz = \int_{|z|=r} \frac{e^z}{z}\, dz = 2\pi i \cdot e^0 = 2\pi i$.

**Problem.** Evaluate $\int_\gamma \frac{dz}{z^2 - 1}$ where $\gamma$ is $|z| = 2$.

$\frac{1}{z^2 - 1} = \frac{1}{2}\left(\frac{1}{z-1} - \frac{1}{z+1}\right)$.

Both $z = \pm 1$ are inside $|z| = 2$.

$\int_\gamma \frac{dz}{z^2 - 1} = \frac{1}{2}(2\pi i - 2\pi i) = 0$.

</details>

