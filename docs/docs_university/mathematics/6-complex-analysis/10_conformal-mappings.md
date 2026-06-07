---
title: Conformal Mappings
tags:
  - Mathematics
  - University
---

### 10.1 Definition

**Definition.** An analytic function $f$ is **conformal** at $z_0$ if $f'(z_0) \neq 0$. A conformal
Mapping preserves angles (both magnitude and orientation) between curves.

### 10.2 Geometric Interpretation

If $f'(z_0) = re^{i\theta}$Then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
By a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 \gt 0$So orientation is preserved.

### 10.3 Common Conformal Mappings

| Mapping                          | Effect                               |
| -------------------------------- | ------------------------------------ |
| $w = az + b$ ($a \neq 0$)        | Translation, rotation, scaling       |
| $w = 1/z$                        | Inversion in the unit circle         |
| $w = z^2$                        | Squaring (doubles angles)            |
| $w = e^z$                        | Exponential (maps strips to sectors) |
| $w = \frac{z - a}{1 - \bar{a}z}$ | Möbius (maps disk to disk)           |

### 10.4 Möbius Transformations

A **Möbius transformation** (or linear fractional transformation) is

$$T(z) = \frac{az + b}{cz + d}, \quad ad - bc \neq 0$$

**Proposition 10.1.** Möbius transformations are conformal (where defined) and map circles and lines
To circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 Cross-Ratio

**Definition.** The **cross-ratio** of four distinct points $z_1, z_2, z_3, z_4$ is

$$(z_1, z_2, z_3, z_4) = \frac{(z_1 - z_3)(z_2 - z_4)}{(z_1 - z_4)(z_2 - z_3)}$$

**Proposition 10.3.** The cross-ratio is invariant under Möbius transformations:
$(Tz_1, Tz_2, Tz_3, Tz_4) = (z_1, z_2, z_3, z_4)$.

**Proposition 10.4.** The unique Möbius transformation sending $z_1 \mapsto 0$, $z_2 \mapsto 1$
$z_3 \mapsto \infty$ is

$$T(z) = \frac{(z - z_1)(z_2 - z_3)}{(z - z_3)(z_2 - z_1)}$$

### 10.6 Classification of Möbius Transformations

A Möbius transformation $T(z) = \frac{az + b}{cz + d}$ is classified by its fixed points (solutions
of $T(z) = z$).

1. **Parabolic:** Exactly one fixed point. Conjugate to $w = z + k$.
2. **Elliptic:** Two fixed points, $|T'(z_0)| = 1$. Conjugate to a rotation $w = e^{i\theta} z$.
3. **Hyperbolic:** Two fixed points, $T'(z_0) \in \mathbb{R}^+$, $T'(z_0) \neq 1$. Conjugate to
   $w = kz$.
4. **Loxodromic:** Two fixed points, $T'(z_0) \notin \mathbb{R} \cup \{z : |z| = 1\}$. Conjugate to
   $w = ke^{i\theta}z$.

<details>
<summary>Solution</summary>

**Problem.** Find the Möbius transformation mapping $0 \mapsto i$, $1 \mapsto 0$,
$\infty \mapsto -i$.

$T(z) = \frac{az + b}{cz + d}$ with $T(0) = i \Rightarrow b/d = i \Rightarrow b = id$.
$T(1) = 0 \Rightarrow a = -b = -id$. $T(\infty) = -i \Rightarrow a/c = -i \Rightarrow c = d$.

$T(z) = \frac{-idz + id}{dz + d} = \frac{i(1 - z)}{z + 1}$.

**Problem.** Show that $T(z) = \frac{z - 1}{z + 1}$ maps the right half-plane to the unit disk.

If $\mathrm{Re}(z) \gt 0$Then $|z - 1| \lt |z + 1|$So $|T(z)| \lt 1$.

Check boundary: $T(i) = \frac{i - 1}{i + 1} = \frac{(i-1)(-i+1)}{(i+1)(-i+1)} = \frac{2}{2} = 1$.
$|T(i)| = 1$. $\checkmark$

**Problem.** Classify $T(z) = \frac{2z + 1}{z + 2}$.

Fixed points: $z = \frac{2z + 1}{z + 2} \Rightarrow z^2 = 1 \Rightarrow z = \pm 1$.

$T'(z) = \frac{3}{(z + 2)^2}$. $T'(1) = 1/3$, $T'(-1) = 3$.

Both multipliers are real and positive (not equal to $1$), so $T$ is hyperbolic.

</details>

### 10.7 The Riemann Mapping Theorem

**Theorem 10.5 (Riemann Mapping Theorem).** Let $U$ be a connected open proper subset of
$\mathbb{C}$. Then there exists a bijective conformal map from $U$ onto the unit disk
$\mathbb{D} = \{z : |z| \lt 1\}$.

This is one of the most profound results in complex analysis, establishing that all connected
Domains (other than $\mathbb{C}$ itself) are conformally equivalent.

_Remark._ The Riemann mapping theorem is an existence theorem; it does not provide an explicit
Formula for the conformal map .

