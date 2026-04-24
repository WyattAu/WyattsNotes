---
title: Complex Analysis
date: 2026-04-24T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: complex-analysis
---

## 1. Complex Numbers Review

### 1.1 Definition and Arithmetic

A **complex number** is $z = a + bi$ where $a, b \in \mathbb{R}$ and $i^2 = -1$. We call
$a = \mathrm{Re}(z)$ the real part and $b = \mathrm{Im}(z)$ the imaginary part.

**Arithmetic:** $(a + bi) + (c + di) = (a + c) + (b + d)i$ and
$(a + bi)(c + di) = (ac - bd) + (ad + bc)i$.

### 1.2 Polar Form

Every non-zero complex number can be written in **polar form**:

$$z = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

where $r = |z| = \sqrt{a^2 + b^2}$ is the **modulus** and $\theta = \arg(z)$ is the **argument**.

### 1.3 Euler's Formula and De Moivre's Theorem

**Euler's formula:** $e^{i\theta} = \cos\theta + i\sin\theta$.

**De Moivre's theorem:** $(e^{i\theta})^n = e^{in\theta}$, so

$$(\cos\theta + i\sin\theta)^n = \cos(n\theta) + i\sin(n\theta)$$

### 1.4 Roots of Unity

The $n$-th roots of unity are the solutions of $z^n = 1$:

$$z_k = e^{2\pi i k / n}, \quad k = 0, 1, \ldots, n - 1$$

They form a regular $n$-gon on the unit circle in the complex plane.

## 2. Complex Functions and Analyticity

### 2.1 Complex Functions

A **complex function** is a function $f : D \subseteq \mathbb{C} \to \mathbb{C}$. We can write
$f(z) = u(x, y) + iv(x, y)$ where $z = x + iy$ and $u, v$ are real-valued functions.

**Example.** $f(z) = z^2 = (x + iy)^2 = (x^2 - y^2) + i(2xy)$. Here $u = x^2 - y^2$ and $v = 2xy$.

### 2.2 Limits and Continuity

The limit $\lim_{z \to z_0} f(z) = L$ means: for every $\varepsilon > 0$, there exists $\delta > 0$
such that $0 \lt{} |z - z_0| \lt{} \delta$ implies $|f(z) - L| \lt{} \varepsilon$.

Unlike the real case, $z$ can approach $z_0$ from any direction in $\mathbb{C}$. This makes limits
more restrictive.

### 2.3 The Derivative

**Definition.** $f$ is **differentiable** at $z_0$ if

$$f'(z_0) = \lim_{h \to 0} \frac{f(z_0 + h) - f(z_0)}{h}$$

exists (and is independent of how $h \to 0$ in $\mathbb{C}$).

### 2.4 Analytic Functions

**Definition.** A function $f$ is **analytic** (or **holomorphic**) on an open set
$U \subseteq \mathbb{C}$ if $f$ is differentiable at every point of $U$. A function that is analytic
on all of $\mathbb{C}$ is called **entire**.

**Examples of entire functions:** $z^n$, $e^z$, $\sin z$, $\cos z$, polynomials.

**Example of a non-analytic function:** $f(z) = \bar{z}$ is nowhere differentiable (except at
$z = 0$ if we define it, but still not analytic there).

## 3. The Cauchy-Riemann Equations

### 3.1 Statement

**Theorem 3.1 (Cauchy-Riemann Equations).** If $f(z) = u(x, y) + iv(x, y)$ is differentiable at
$z = x + iy$, then

$$\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}, \quad \frac{\partial u}{\partial y} = -\frac{\partial v}{\partial x}$$

_Proof._ Compute the limit along the real axis ($h \in \mathbb{R}$, $h \to 0$):

$$f'(z) = \lim_{h \to 0} \frac{u(x+h, y) - u(x, y)}{h} + i\lim_{h \to 0} \frac{v(x+h, y) - v(x, y)}{h} = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x}$$

Compute along the imaginary axis ($h = ik$, $k \in \mathbb{R}$, $k \to 0$):

$$f'(z) = \lim_{k \to 0} \frac{u(x, y+k) - u(x, y)}{ik} + i\lim_{k \to 0} \frac{v(x, y+k) - v(x, y)}{ik} = -i\frac{\partial u}{\partial y} + \frac{\partial v}{\partial y}$$

Equating real and imaginary parts: $\frac{\partial u}{\partial x} = \frac{\partial v}{\partial y}$
and $\frac{\partial v}{\partial x} = -\frac{\partial u}{\partial y}$. $\blacksquare$

### 3.2 Sufficiency Condition

**Theorem 3.2.** If $u$ and $v$ have continuous first partial derivatives on an open set $U$ and
satisfy the Cauchy-Riemann equations on $U$, then $f = u + iv$ is analytic on $U$.

### 3.3 The Derivative in Terms of Partial Derivatives

When the Cauchy-Riemann equations hold:

$$f'(z) = \frac{\partial u}{\partial x} + i\frac{\partial v}{\partial x} = \frac{\partial v}{\partial y} - i\frac{\partial u}{\partial y}$$

### 3.4 Harmonic Functions

**Definition.** A real-valued function $\phi(x, y)$ is **harmonic** if $\phi_{xx} + \phi_{yy} = 0$
(Laplace's equation).

**Proposition 3.3.** If $f = u + iv$ is analytic, then $u$ and $v$ are harmonic.

_Proof._ From the Cauchy-Riemann equations: $u_x = v_y$ and $u_y = -v_x$. Differentiating:
$u_{xx} = v_{yx}$ and $u_{yy} = -v_{xy}$. By equality of mixed partials,
$u_{xx} + u_{yy} = v_{yx} - v_{xy} = 0$. Similarly for $v$. $\blacksquare$

**Definition.** If $u$ and $v$ are harmonic on $U$ and satisfy the Cauchy-Riemann equations, then
$v$ is the **harmonic conjugate** of $u$.

### 3.5 Worked Example

**Problem.** Verify that $f(z) = e^z$ satisfies the Cauchy-Riemann equations and find $f'(z)$.

_Solution._ $e^z = e^{x+iy} = e^x(\cos y + i\sin y)$. So $u = e^x \cos y$ and $v = e^x \sin y$.

$u_x = e^x \cos y$, $u_y = -e^x \sin y$, $v_x = e^x \sin y$, $v_y = e^x \cos y$.

Cauchy-Riemann: $u_x = e^x \cos y = v_y$ and $u_y = -e^x \sin y = -v_x$. Both satisfied.

$f'(z) = u_x + iv_x = e^x \cos y + ie^x \sin y = e^z$. $\blacksquare$

## 4. Complex Integration

### 4.1 Contours

A **contour** (or piecewise smooth path) in $\mathbb{C}$ is a continuous function
$\gamma : [a, b] \to \mathbb{C}$ that is differentiable except at finitely many points, with a
continuous derivative everywhere it exists.

A **simple closed contour** is a contour with $\gamma(a) = \gamma(b)$ and no other
self-intersections.

### 4.2 The Complex Integral

**Definition.** For a contour $\gamma$ and a continuous function $f$ on $\gamma$:

$$\int_{\gamma} f(z)\, dz = \int_a^b f(\gamma(t))\gamma'(t)\, dt$$

### 4.3 Basic Properties

**Proposition 4.1.** The complex integral is linear:

$$\int_\gamma (af + bg)\, dz = a\int_\gamma f\, dz + b\int_\gamma g\, dz$$

**Proposition 4.2.** Reversing orientation changes the sign:

$$\int_{-\gamma} f\, dz = -\int_\gamma f\, dz$$

**Proposition 4.3.** Additivity over contours:

$$\int_{\gamma_1 + \gamma_2} f\, dz = \int_{\gamma_1} f\, dz + \int_{\gamma_2} f\, dz$$

### 4.4 ML Inequality

**Proposition 4.4 (ML Inequality).** If $|f(z)| \leq M$ for all $z$ on a contour $\gamma$ of length
$L$, then

$$\left|\int_\gamma f(z)\, dz\right| \leq ML$$

### 4.5 Worked Example

**Problem.** Evaluate $\int_\gamma z^2\, dz$ where $\gamma$ is the line segment from $0$ to $1 + i$.

_Solution._ Parameterize $\gamma(t) = t(1 + i)$ for $0 \leq t \leq 1$. Then $\gamma'(t) = 1 + i$.

$\int_\gamma z^2\, dz = \int_0^1 (t(1+i))^2 (1+i)\, dt = (1+i)^3 \int_0^1 t^2\, dt = (1+i)^3 \cdot \frac{1}{3}$

$(1+i)^3 = (1+i)(1+i)^2 = (1+i)(2i) = 2i + 2i^2 = 2i - 2 = -2 + 2i$.

$\int_\gamma z^2\, dz = \frac{-2 + 2i}{3}$. $\blacksquare$

## 5. Cauchy's Theorem

### 5.1 Statement

**Theorem 5.1 (Cauchy's Theorem).** If $f$ is analytic on a simply connected domain $D$ and $\gamma$
is a simple closed contour in $D$, then

$$\int_\gamma f(z)\, dz = 0$$

_Proof (for $f'$ continuous)._ By Green's theorem in the plane, writing $f = u + iv$:

$$\int_\gamma f\, dz = \int_\gamma (u\, dx - v\, dy) + i\int_\gamma (v\, dx + u\, dy)$$

Applying Green's theorem to each integral:

$= \iint_D (-v_x - u_y)\, dA + i\iint_D (u_x - v_y)\, dA = 0$

by the Cauchy-Riemann equations. $\blacksquare$

### 5.2 Simply Connected Domains

A domain $D \subseteq \mathbb{C}$ is **simply connected** if every simple closed contour in $D$ can
be continuously shrunk to a point within $D$.

**Cauchy's theorem may fail on multiply connected domains.** For example,
$\int_\gamma \frac{1}{z}\, dz = 2\pi i$ where $\gamma$ is the unit circle (traversing a region that
excludes the singularity at $z = 0$).

### 5.3 Path Independence

**Corollary 5.2.** If $f$ is analytic on a simply connected domain $D$, then the integral
$\int_{z_0}^{z_1} f(z)\, dz$ is independent of the path from $z_0$ to $z_1$ in $D$.

### 5.4 Antiderivatives

**Theorem 5.3.** If $f$ is analytic on a simply connected domain $D$, then $f$ has an antiderivative
$F$ in $D$ (i.e., $F'(z) = f(z)$), and

$$\int_\gamma f(z)\, dz = F(z_1) - F(z_0)$$

where $z_0$ and $z_1$ are the endpoints of $\gamma$.

## 6. Cauchy's Integral Formula

### 6.1 Statement

**Theorem 6.1 (Cauchy's Integral Formula).** If $f$ is analytic on a simply connected domain
containing a simple closed positively oriented contour $\gamma$, and $z_0$ is inside $\gamma$, then

$$f(z_0) = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{z - z_0}\, dz$$

_Proof._ Let $\gamma_\varepsilon$ be a small circle of radius $\varepsilon$ around $z_0$. Since
$\frac{f(z)}{z - z_0}$ is analytic on the region between $\gamma$ and $\gamma_\varepsilon$,

$\int_\gamma \frac{f(z)}{z - z_0}\, dz = \int_{\gamma_\varepsilon} \frac{f(z)}{z - z_0}\, dz$

On $\gamma_\varepsilon$: $f(z) = f(z_0) + (z - z_0)f'(\zeta)$ for some $\zeta$ between $z$ and
$z_0$.

$= \int_{\gamma_\varepsilon} \frac{f(z_0)}{z - z_0}\, dz + \int_{\gamma_\varepsilon} f'(\zeta)\, dz = f(z_0) \cdot 2\pi i + 0$

since $\int_{\gamma_\varepsilon} \frac{dz}{z - z_0} = 2\pi i$ (parameterize
$z = z_0 + \varepsilon e^{i\theta}$) and $\int_{\gamma_\varepsilon} f'(\zeta)\, dz \to 0$ as
$\varepsilon \to 0$ by the ML inequality. $\blacksquare$

### 6.2 Derivatives

**Theorem 6.2 (Cauchy's Integral Formula for Derivatives).** Under the same conditions,

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

_Proof._ Differentiate under the integral sign (justified by uniform convergence of the difference
quotients on compact subsets). $\blacksquare$

### 6.3 Consequences of Cauchy's Integral Formula

**Corollary 6.3.** If $f$ is analytic, then $f$ is infinitely differentiable.

This is remarkable: a single complex derivative implies the existence of all derivatives.

**Corollary 6.4 (Cauchy's Estimates).** If $f$ is analytic on and inside a circle $|z - z_0| = R$
and $|f(z)| \leq M$ on the circle, then

$$|f^{(n)}(z_0)| \leq \frac{n!M}{R^n}$$

_Proof._ From the integral formula:
$|f^{(n)}(z_0)| = \frac{n!}{2\pi}\left|\int_{|z-z_0|=R} \frac{f(z)}{(z-z_0)^{n+1}}\, dz\right|
\leq \frac{n!}{2\pi} \cdot \frac{M}{R^{n+1}} \cdot 2\pi R = \frac{n!M}{R^n}$.
$\blacksquare$

### 6.4 Worked Example

**Problem.** Evaluate $\int_\gamma \frac{e^z}{z - 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The function $\frac{e^z}{z - 1}$ has a singularity at $z = 1$, which lies inside
$\gamma$. By Cauchy's integral formula with $f(z) = e^z$ and $z_0 = 1$:

$\int_\gamma \frac{e^z}{z - 1}\, dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi i e$.
$\blacksquare$

## 7. Taylor and Laurent Series

### 7.1 Taylor Series

**Theorem 7.1.** If $f$ is analytic on $|z - z_0| \lt{} R$, then

$$f(z) = \sum_{n=0}^{\infty} \frac{f^{(n)}(z_0)}{n!}(z - z_0)^n$$

and the series converges uniformly on compact subsets of $|z - z_0| \lt{} R$.

_Proof._ For $|z - z_0| \lt{} r \lt{} R$, apply Cauchy's integral formula on $|\zeta - z_0| = r$:

$f(z) = \frac{1}{2\pi i}\int_{|\zeta - z_0| = r} \frac{f(\zeta)}{\zeta - z}\, d\zeta$

Write
$\frac{1}{\zeta - z} = \frac{1}{(\zeta - z_0) - (z - z_0)} = \frac{1}{\zeta - z_0} \cdot \frac{1}{1 - (z - z_0)/(\zeta - z_0)}$
$= \sum_{n=0}^{\infty} \frac{(z - z_0)^n}{(\zeta - z_0)^{n+1}}$ (geometric series, convergent since
$|z - z_0|/|\zeta - z_0| \lt{} 1$).

Substituting and integrating term by term gives the Taylor series. $\blacksquare$

### 7.2 Common Taylor Series

$$e^z = \sum_{n=0}^{\infty} \frac{z^n}{n!} = 1 + z + \frac{z^2}{2!} + \cdots$$

$$\sin z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n+1}}{(2n+1)!}$$

$$\cos z = \sum_{n=0}^{\infty} \frac{(-1)^n z^{2n}}{(2n)!}$$

$$\frac{1}{1 - z} = \sum_{n=0}^{\infty} z^n, \quad |z| \lt{} 1$$

$$\ln(1 + z) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} z^n}{n}, \quad |z| \lt{} 1$$

### 7.3 Laurent Series

**Theorem 7.2 (Laurent Series).** If $f$ is analytic on the annulus $r \lt{} |z - z_0| \lt{} R$,
then

$$f(z) = \sum_{n=-\infty}^{\infty} a_n(z - z_0)^n = \cdots + \frac{a_{-2}}{(z - z_0)^2} + \frac{a_{-1}}{z - z_0} + a_0 + a_1(z - z_0) + \cdots$$

where

$$a_n = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

for any simple closed contour $\gamma$ in the annulus encircling $z_0$.

The **principal part** is $\sum_{n=-\infty}^{-1} a_n(z - z_0)^n$ (negative powers). The **analytic
part** is $\sum_{n=0}^{\infty} a_n(z - z_0)^n$ (non-negative powers).

### 7.4 Isolated Singularities

Let $z_0$ be an isolated singularity of $f$ (i.e., $f$ is analytic in a punctured neighbourhood of
$z_0$).

**Classification by Laurent series:**

1. **Removable singularity**: $a_n = 0$ for all $n \lt{} 0$. Can be removed by redefining
   $f(z_0) = a_0$.
2. **Pole of order $m$**: $a_{-m} \neq 0$ and $a_n = 0$ for $n \lt{} -m$. The principal part is
   finite.
3. **Essential singularity**: infinitely many non-zero $a_n$ with $n \lt{} 0$.

**Proposition 7.3 (Riemann's Removable Singularity Theorem).** If $f$ is bounded near $z_0$, then
$z_0$ is a removable singularity.

**Proposition 7.4.** $z_0$ is a pole of order $m$ if and only if $\lim_{z \to z_0} (z - z_0)^m f(z)$
exists and is non-zero.

**Theorem 7.5 (Casorati-Weierstrass).** If $z_0$ is an essential singularity of $f$, then $f$ takes
values arbitrarily close to any complex number in every neighbourhood of $z_0$.

### 7.5 Worked Example

**Problem.** Find the Laurent series of $f(z) = \frac{1}{z(z-1)}$ in $0 \lt{} |z| \lt{} 1$.

_Solution._ Using partial fractions: $\frac{1}{z(z-1)} = \frac{1}{z-1} - \frac{1}{z}$.

In $|z| \lt{} 1$: $\frac{1}{z - 1} = -\frac{1}{1 - z} = -\sum_{n=0}^{\infty} z^n$.

So $f(z) = -\sum_{n=0}^{\infty} z^n - \frac{1}{z} = \cdots - z^2 - z - 1 - \frac{1}{z}$.

The principal part is $-1/z$, so $z = 0$ is a simple pole. $\blacksquare$

## 8. Residue Theory

### 8.1 Definition of the Residue

**Definition.** The **residue** of $f$ at an isolated singularity $z_0$ is the coefficient $a_{-1}$
in the Laurent expansion:

$$\mathrm{Res}(f, z_0) = a_{-1} = \frac{1}{2\pi i}\int_\gamma f(z)\, dz$$

where $\gamma$ is a small positively oriented circle around $z_0$.

### 8.2 Computing Residues

**For a simple pole at $z_0$:**

$$\mathrm{Res}(f, z_0) = \lim_{z \to z_0} (z - z_0)f(z)$$

If $f = g/h$ where $g(z_0) \neq 0$, $h(z_0) = 0$, $h'(z_0) \neq 0$:

$$\mathrm{Res}(f, z_0) = \frac{g(z_0)}{h'(z_0)}$$

**For a pole of order $m$ at $z_0$:**

$$\mathrm{Res}(f, z_0) = \frac{1}{(m-1)!}\lim_{z \to z_0} \frac{d^{m-1}}{dz^{m-1}}\left[(z - z_0)^m f(z)\right]$$

### 8.3 The Residue Theorem

**Theorem 8.1 (Residue Theorem).** If $f$ is analytic inside and on a simple closed positively
oriented contour $\gamma$ except for isolated singularities $z_1, z_2, \ldots, z_n$ inside $\gamma$,
then

$$\int_\gamma f(z)\, dz = 2\pi i \sum_{k=1}^{n} \mathrm{Res}(f, z_k)$$

_Proof._ For each singularity $z_k$, draw a small circle $\gamma_k$ around it. By Cauchy's theorem
applied to the multiply connected region between $\gamma$ and the $\gamma_k$:

$\int_\gamma f\, dz = \sum_{k=1}^n \int_{\gamma_k} f\, dz = \sum_{k=1}^n 2\pi i \cdot \mathrm{Res}(f, z_k)$.
$\blacksquare$

### 8.4 Worked Examples

**Problem 1.** Evaluate $\int_\gamma \frac{e^z}{z(z-1)^2}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ Singularities inside $\gamma$: $z = 0$ (simple pole) and $z = 1$ (pole of order $2$).

At $z = 0$: $\mathrm{Res} = \lim_{z \to 0} \frac{e^z}{(z-1)^2} = \frac{1}{(-1)^2} = 1$.

At $z = 1$:
$\mathrm{Res} = \frac{d}{dz}\left[\frac{e^z}{z}\right]_{z=1} = \left[\frac{e^z(z - 1)}{z^2}\right]_{z=1} = \frac{e(0)}{1} = 0$.

Wait, recalculate.
$\mathrm{Res}(f, 1) = \frac{d}{dz}\left[(z-1)^2 \cdot \frac{e^z}{z(z-1)^2}\right]_{z=1} = \frac{d}{dz}\left[\frac{e^z}{z}\right]_{z=1} = \frac{e^z \cdot z - e^z}{z^2}\Big|_{z=1} = \frac{e - e}{1} = 0$.

$\int_\gamma f\, dz = 2\pi i(1 + 0) = 2\pi i$. $\blacksquare$

**Problem 2.** Evaluate $\int_\gamma \frac{1}{z^4 + 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The poles of $\frac{1}{z^4 + 1}$ are the fourth roots of $-1$:
$z_k = e^{i\pi/4 + ik\pi/2}$ for $k = 0, 1, 2, 3$. All four lie inside $|z| = 2$.

$z_0 = e^{i\pi/4} = \frac{1+i}{\sqrt{2}}$, $z_1 = e^{i3\pi/4} = \frac{-1+i}{\sqrt{2}}$,
$z_2 = e^{i5\pi/4} = \frac{-1-i}{\sqrt{2}}$, $z_3 = e^{i7\pi/4} = \frac{1-i}{\sqrt{2}}$.

Each is a simple pole, so $\mathrm{Res}(f, z_k) = \frac{1}{4z_k^3}$ (using $f = 1/h$,
$\mathrm{Res} = 1/h'(z_k)$, where $h(z) = z^4 + 1$, $h'(z) = 4z^3$).

$\sum_{k=0}^3 \frac{1}{4z_k^3} = \frac{1}{4}\sum_{k=0}^3 z_k^{-3}$.

Since $z_k^4 = -1$, we have $z_k^{-3} = z_k / z_k^4 = -z_k$. So the sum equals
$-\frac{1}{4}\sum z_k = -\frac{1}{4} \cdot 0 = 0$.

$\int_\gamma \frac{dz}{z^4 + 1} = 2\pi i \cdot 0 = 0$.

(Alternatively, $\frac{1}{z^4 + 1} \to 0$ as $z \to \infty$, so the sum of all residues at finite
poles plus the residue at infinity equals zero.) $\blacksquare$

## 9. Applications of Contour Integration

### 9.1 Evaluation of Real Integrals

Contour integration is a powerful tool for evaluating definite integrals.

### 9.2 Integrals of Rational Functions over the Real Line

**Theorem 9.1.** If $f(x) = P(x)/Q(x)$ where $\deg(Q) \geq \deg(P) + 2$ and $Q$ has no real roots,
then

$$\int_{-\infty}^{\infty} f(x)\, dx = 2\pi i \sum_{\mathrm{Im}(z_k) > 0} \mathrm{Res}(f, z_k)$$

where the sum is over poles in the upper half-plane.

_Proof._ Integrate $f(z)$ over the semicircular contour $\gamma_R$ consisting of $[-R, R]$ on the
real axis and the semicircle $|z| = R$ in the upper half-plane. As $R \to \infty$, the integral over
the semicircle vanishes (since $|f(z)| \leq M/R^2$ and the length is $\pi R$). $\blacksquare$

### 9.3 Worked Example

**Problem.** Evaluate $\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1}$.

_Solution._ $f(z) = \frac{1}{z^2 + 1}$ has simple poles at $z = \pm i$.

Only $z = i$ is in the upper half-plane.

$\mathrm{Res}\left(\frac{1}{z^2 + 1}, i\right) = \frac{1}{2z}\Big|_{z = i} = \frac{1}{2i}$.

$\int_{-\infty}^{\infty} \frac{dx}{x^2 + 1} = 2\pi i \cdot \frac{1}{2i} = \pi$. $\blacksquare$

### 9.4 Integrals Involving Trigonometric Functions

For integrals of the form $\int_0^{2\pi} R(\cos\theta, \sin\theta)\, d\theta$, substitute
$z = e^{i\theta}$, so $dz = iz\, d\theta$, $\cos\theta = \frac{z + z^{-1}}{2}$,
$\sin\theta = \frac{z - z^{-1}}{2i}$.

The integral becomes $\int_{|z|=1} f(z)\, dz$ where $f(z)$ is a rational function.

### 9.5 Worked Example

**Problem.** Evaluate $\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta}$.

_Solution._ Substitute $z = e^{i\theta}$: $d\theta = \frac{dz}{iz}$,
$\cos\theta = \frac{z + 1/z}{2}$.

$\int_{|z|=1} \frac{dz}{iz\left(2 + \frac{z + 1/z}{2}\right)} = \int_{|z|=1} \frac{dz}{iz \cdot \frac{4z + z^2 + 1}{2z}} = \int_{|z|=1} \frac{2\, dz}{i(z^2 + 4z + 1)}$

$= \frac{2}{i}\int_{|z|=1} \frac{dz}{z^2 + 4z + 1}$

Poles: $z^2 + 4z + 1 = 0 \Rightarrow z = \frac{-4 \pm \sqrt{16 - 4}}{2} = -2 \pm \sqrt{3}$.

$|z_1| = |-2 + \sqrt{3}| = 2 - \sqrt{3} \lt{} 1$ (inside).
$|z_2| = |-2 - \sqrt{3}| = 2 + \sqrt{3} > 1$ (outside).

$\mathrm{Res}\left(\frac{1}{z^2 + 4z + 1}, z_1\right) = \frac{1}{2z_1 + 4} = \frac{1}{2(-2 + \sqrt{3}) + 4} = \frac{1}{2\sqrt{3}}$.

$\int_0^{2\pi} \frac{d\theta}{2 + \cos\theta} = \frac{2}{i} \cdot 2\pi i \cdot \frac{1}{2\sqrt{3}} = \frac{2\pi}{\sqrt{3}}$.
$\blacksquare$

### 9.6 Jordan's Lemma

**Theorem 9.2 (Jordan's Lemma).** If $f(z) \to 0$ uniformly as $|z| \to \infty$ in the upper
half-plane and $a > 0$, then

$$\lim_{R \to \infty} \int_{C_R} e^{iaz}f(z)\, dz = 0$$

where $C_R$ is the upper semicircle $|z| = R$, $\mathrm{Im}(z) \geq 0$.

This allows evaluation of integrals of the form $\int_{-\infty}^{\infty} f(x)\cos(ax)\, dx$ and
$\int_{-\infty}^{\infty} f(x)\sin(ax)\, dx$.

## 10. Conformal Mappings

### 10.1 Definition

**Definition.** An analytic function $f$ is **conformal** at $z_0$ if $f'(z_0) \neq 0$. A conformal
mapping preserves angles (both magnitude and orientation) between curves.

### 10.2 Geometric Interpretation

If $f'(z_0) = re^{i\theta}$, then near $z_0$ the mapping $f$ acts as a rotation by $\theta$ followed
by a scaling by $r$. The Jacobian determinant is $|f'(z_0)|^2 > 0$, so orientation is preserved.

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
to circles and lines.

**Proposition 10.2.** Three points determine a unique Möbius transformation: $T(z_1) = w_1$,
$T(z_2) = w_2$, $T(z_3) = w_3$.

### 10.5 The Riemann Mapping Theorem

**Theorem 10.3 (Riemann Mapping Theorem).** Let $U$ be a simply connected open proper subset of
$\mathbb{C}$. Then there exists a bijective conformal map from $U$ onto the unit disk
$\mathbb{D} = \{z : |z| \lt{} 1\}$.

This is one of the most profound results in complex analysis, establishing that all simply connected
domains (other than $\mathbb{C}$ itself) are conformally equivalent.

## 11. Liouville's Theorem and the Maximum Modulus Principle

### 11.1 Liouville's Theorem

**Theorem 11.1 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$, then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$, meaning $f$ is
constant. $\blacksquare$

### 11.2 The Fundamental Theorem of Algebra

**Theorem 11.2 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$, so $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$
is constant, a contradiction. $\blacksquare$

### 11.3 The Maximum Modulus Principle

**Theorem 11.3 (Maximum Modulus Principle).** If $f$ is analytic and non-constant on a domain $D$,
then $|f|$ has no local maximum in $D$.

**Corollary 11.4.** If $f$ is analytic on a bounded domain $D$ and continuous on
$\bar{D} = D \cup \partial D$, then $|f|$ attains its maximum on $\partial D$.

### 11.4 Schwarz Lemma

**Theorem 11.5 (Schwarz Lemma).** If $f : \mathbb{D} \to \mathbb{D}$ is analytic with $f(0) = 0$,
then

$$|f(z)| \leq |z| \quad \mathrm{for\ all\ } z \in \mathbb{D}$$

and $|f'(0)| \leq 1$. Equality in either case implies $f(z) = e^{i\theta} z$ for some real $\theta$.

_Proof._ Define $g(z) = f(z)/z$ for $z \neq 0$ and $g(0) = f'(0)$. Then $g$ is analytic on
$\mathbb{D}$. For $|z| = r \lt{} 1$: $|g(z)| = |f(z)|/|z| \leq 1/r$. By the maximum modulus
principle, $|g(z)| \leq 1/r$ for $|z| \leq r$. Letting $r \to 1$: $|g(z)| \leq 1$, so
$|f(z)| \leq |z|$. Also $|f'(0)| = |g(0)| \leq 1$. If $|f'(0)| = 1$, then $|g|$ attains its maximum
at an interior point, so $g$ is constant: $g(z) = e^{i\theta}$. $\blacksquare$

## 12. Argument Principle and Rouche's Theorem

### 12.1 The Argument Principle

**Theorem 12.1 (Argument Principle).** If $f$ is meromorphic inside and on a simple closed contour
$\gamma$ with no zeros or poles on $\gamma$, then

$$\frac{1}{2\pi i}\int_\gamma \frac{f'(z)}{f(z)}\, dz = N - P$$

where $N$ is the number of zeros and $P$ is the number of poles of $f$ inside $\gamma$ (counting
multiplicities).

### 12.2 Rouche's Theorem

**Theorem 12.2 (Rouché's Theorem).** If $f$ and $g$ are analytic inside and on a simple closed
contour $\gamma$, and $|f(z)| > |g(z)|$ on $\gamma$, then $f$ and $f + g$ have the same number of
zeros inside $\gamma$.

_Proof._ On $\gamma$: $|g(z)/f(z)| \lt{} 1$. The function $h(z) = 1 + g(z)/f(z)$ satisfies
$|h(z) - 1| \lt{} 1$ on $\gamma$, so $h(\gamma)$ does not wind around $0$. By the argument principle
applied to $h$: $0 = N_h - P_h$, meaning $h$ has the same number of zeros and poles inside $\gamma$.
But $h = (f + g)/f$, so zeros of $h$ are zeros of $f + g$ and poles of $h$ are zeros of $f$.
Therefore $f$ and $f + g$ have the same number of zeros. $\blacksquare$

### 12.3 Worked Example

**Problem.** Show that $z^4 + 6z + 3$ has exactly one root in $|z| \lt{} 1$.

_Solution._ On $|z| = 1$: $|6z| = 6 > |z^4 + 3| \leq |z|^4 + 3 = 4$. By Rouché's theorem with
$f(z) = 6z$ and $g(z) = z^4 + 3$: $f + g = z^4 + 6z + 3$ has the same number of zeros in
$|z| \lt{} 1$ as $f(z) = 6z$, which has exactly one zero (at $z = 0$). $\blacksquare$

## 13. Analytic Continuation

### 13.1 Definition

**Definition.** If $f_1$ is analytic on $D_1$ and $f_2$ is analytic on $D_2$ with
$D_1 \cap D_2 \neq \emptyset$ and $f_1 = f_2$ on $D_1 \cap D_2$, then $f_2$ is an **analytic
continuation** of $f_1$.

### 13.2 Identity Theorem

**Theorem 13.1 (Identity Theorem).** If $f$ and $g$ are analytic on a domain $D$ and agree on a set
with a limit point in $D$, then $f = g$ on all of $D$.

_Proof._ Let $E = \{z \in D : f^{(n)}(z) = g^{(n)}(z) \mathrm{\ for\ all\ } n \geq 0\}$. $E$ is
non-empty (it contains the limit point by continuity of derivatives). $E$ is closed (by continuity).
If $z_0 \in E$, the Taylor series of $f$ and $g$ at $z_0$ coincide, so $f = g$ in a neighbourhood of
$z_0$, giving $E$ open. Since $D$ is connected, $E = D$. $\blacksquare$

## 14. Common Pitfalls

:::caution Common Pitfall The Cauchy-Riemann equations are necessary but not sufficient for
differentiability. The partial derivatives must also be continuous. For example,
$f(z) = \exp(-1/z^4)$ extended by $f(0) = 0$ satisfies the Cauchy-Riemann equations at the origin
but is not differentiable there. :::

:::caution Common Pitfall Cauchy's theorem requires a simply connected domain. On a multiply
connected domain, the integral of an analytic function around a closed contour may be non-zero. The
classic example is $\oint_{|z|=1} dz/z = 2\pi i$. :::

:::caution Common Pitfall When computing residues at poles of order $m \geq 2$, the formula involves
differentiation. A common error is forgetting the $(m-1)!$ in the denominator or differentiating
$(z - z_0)^m f(z)$ the wrong number of times. :::

:::caution Common Pitfall The residue at infinity is
$\mathrm{Res}(f, \infty) = -\mathrm{Res}(1/z^2 \cdot f(1/z), 0)$. It is NOT simply $f(\infty)$. For
a function that is analytic everywhere in the finite plane except for finitely many singularities,
the sum of all residues (including the residue at infinity) is zero. :::

:::caution Common Pitfall A conformal mapping preserves angles but not necessarily distances. The
mapping $w = z^2$ is conformal at every $z \neq 0$, but it doubles the angle between curves at each
point. At $z = 0$, it is not conformal because $f'(0) = 0$. :::

:::caution Common Pitfall The maximum modulus principle says that $|f|$ has no local maximum in the
interior, but the minimum can occur in the interior (e.g., $f(z) = z$ on the unit disk has minimum
$|f| = 0$ at $z = 0$). For the minimum principle, one needs the additional hypothesis that $f$ has
no zeros in the domain. :::
