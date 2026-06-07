---
title: Cauchy's Integral Formula
tags:
  - Mathematics
  - University
---

### 6.1 Statement

**Theorem 6.1 (Cauchy's Integral Formula).** If $f$ is analytic on a connected domain Containing a
simple closed positively oriented contour $\gamma$And $z_0$ is inside $\gamma$Then

$$f(z_0) = \frac{1}{2\pi i}\int_\gamma \frac{f(z)}{z - z_0}\, dz$$

_Proof._ Let $\gamma_\varepsilon$ be a small circle of radius $\varepsilon$ around $z_0$. Since
$\frac{f(z)}{z - z_0}$ is analytic on the region between $\gamma$ and $\gamma_\varepsilon$

$\int_\gamma \frac{f(z)}{z - z_0}\, dz = \int_{\gamma_\varepsilon} \frac{f(z)}{z - z_0}\, dz$

On $\gamma_\varepsilon$: $f(z) = f(z_0) + (z - z_0)f'(\zeta)$ for some $\zeta$ between $z$ and
$z_0$.

$= \int_{\gamma_\varepsilon} \frac{f(z_0)}{z - z_0}\, dz + \int_{\gamma_\varepsilon} f'(\zeta)\, dz = f(z_0) \cdot 2\pi i + 0$

Since $\int_{\gamma_\varepsilon} \frac{dz}{z - z_0} = 2\pi i$ (parameterize
$z = z_0 + \varepsilon e^{i\theta}$) and $\int_{\gamma_\varepsilon} f'(\zeta)\, dz \to 0$ as
$\varepsilon \to 0$ by the ML inequality. $\blacksquare$

### 6.2 Derivatives

**Theorem 6.2 (Cauchy's Integral Formula for Derivatives).** Under the same conditions,

$$f^{(n)}(z_0) = \frac{n!}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+1}}\, dz$$

_Proof._ We proceed by induction. The base case $n = 0$ is Theorem 6.1. For the inductive step,
Assume the formula holds for $n$. Using the difference quotient:

$f^{(n+1)}(z_0) = \lim_{h \to 0} \frac{f^{(n)}(z_0 + h) - f^{(n)}(z_0)}{h}
= \lim_{h \to 0} \frac{n!}{2\pi i}\int_\gamma \frac{1}{h}\left[\frac{f(z)}{(z - z_0 - h)^{n+1}} - \frac{f(z)}{(z - z_0)^{n+1}}\right] dz$

$= \frac{(n+1)!}{2\pi i}\int_\gamma \frac{f(z)}{(z - z_0)^{n+2}}\, dz$

Where we justified passing the limit inside the integral by uniform convergence of the integrand On
compact subsets. $\blacksquare$

### 6.3 Consequences of Cauchy's Integral Formula

**Corollary 6.3.** If $f$ is analytic, then $f$ is infinitely differentiable.

This is remarkable: a single complex derivative implies the existence of all derivatives.

**Corollary 6.4 (Cauchy's Estimates).** If $f$ is analytic on and inside a circle $|z - z_0| = R$
And $|f(z)| \leq M$ on the circle, then

$$|f^{(n)}(z_0)| \leq \frac{n!M}{R^n}$$

_Proof._ From the integral formula:
$|f^{(n)}(z_0)| = \frac{n!}{2\pi}\left|\int_{|z-z_0|=R} \frac{f(z)}{(z-z_0)^{n+1}}\, dz\right|
\leq \frac{n!}{2\pi} \cdot \frac{M}{R^{n+1}} \cdot 2\pi R = \frac{n!M}{R^n}$.
$\blacksquare$

### 6.4 Liouville's Theorem

**Theorem 6.5 (Liouville's Theorem).** Every bounded entire function is constant.

_Proof._ If $|f(z)| \leq M$ for all $z$Then by Cauchy's estimates with $R$ arbitrarily large:
$|f'(z_0)| \leq \frac{M}{R} \to 0$ as $R \to \infty$. So $f'(z) = 0$ for all $z$Meaning $f$ is
Constant. $\blacksquare$

**Corollary 6.6.** If $f$ is entire and $|f(z)| \geq M$ for all $z$ (bounded away from zero), then
$f$ is constant.

_Proof._ $1/f$ is entire and bounded by $1/M$So constant by Liouville. $\blacksquare$

### 6.5 Fundamental Theorem of Algebra

**Theorem 6.7 (Fundamental Theorem of Algebra).** Every non-constant polynomial
$p(z) \in \mathbb{C}[z]$ has a root in $\mathbb{C}$.

_Proof._ Suppose $p(z)$ has no root. Then $f(z) = 1/p(z)$ is entire. Since $|p(z)| \to \infty$ as
$|z| \to \infty$, $f(z) \to 0$So $f$ is bounded. By Liouville's theorem, $f$ is constant, so $p$ Is
constant, a contradiction. $\blacksquare$

**Corollary 6.8.** Every polynomial of degree $n \geq 1$ has exactly $n$ roots in $\mathbb{C}$
Counting multiplicities.

### 6.6 Worked Examples: Cauchy's Integral Formula

<details>
<summary>Solution</summary>

**Problem.** Evaluate $\int_\gamma \frac{e^z}{z - 1}\, dz$ where $\gamma$ is $|z| = 2$.

_Solution._ The function $\frac{e^z}{z - 1}$ has a singularity at $z = 1$Which lies inside $\gamma$.
By Cauchy's integral formula with $f(z) = e^z$ and $z_0 = 1$:

$\int_\gamma \frac{e^z}{z - 1}\, dz = 2\pi i \cdot f(1) = 2\pi i \cdot e^1 = 2\pi i e$.
$\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac{z^2 + 1}{(z - i)^3}\, dz$ where $\gamma$ is $|z| = 2$.

By Cauchy's formula for derivatives with $f(z) = z^2 + 1$ and $z_0 = i$:

$\int_\gamma \frac{f(z)}{(z - i)^3}\, dz = \frac{2\pi i}{2!}\,f''(i)$.

$f'(z) = 2z$, $f''(z) = 2$. So $f''(i) = 2$.

$\int_\gamma \frac{z^2 + 1}{(z - i)^3}\, dz = \frac{2\pi i}{2} \cdot 2 = 2\pi i$. $\blacksquare$

**Problem.** Evaluate $\int_\gamma \frac{\sin z}{z(z - \pi)}\, dz$ where $\gamma$ is $|z| = 4$.

Singularities inside $\gamma$: $z = 0$ and $z = \pi$.

$\frac{\sin z}{z(z - \pi)} = \frac{1}{\pi}\left(\frac{\sin z}{z - \pi} - \frac{\sin z}{z}\right)$.

At $z = 0$: by CIF, $\int_\gamma \frac{\sin z}{z}\, dz = 2\pi i \cdot \sin(0) = 0$. At $z = \pi$: by
CIF, $\int_\gamma \frac{\sin z}{z - \pi}\, dz = 2\pi i \cdot \sin(\pi) = 0$.

$\int_\gamma \frac{\sin z}{z(z - \pi)}\, dz = \frac{1}{\pi}(0 - 0) = 0$.

**Problem.** Evaluate $\int_\gamma \frac{e^{2z}}{(z - 1)^2(z + 1)}\, dz$ where $\gamma$ is
$|z| = 3$.

By partial fractions:
$\frac{1}{(z-1)^2(z+1)} = \frac{1/4}{z+1} - \frac{1/4}{z-1} + \frac{1/2}{(z-1)^2}$.

$\int_\gamma \frac{e^{2z}}{(z-1)^2(z+1)}\, dz = \frac{1}{4} \cdot 2\pi i \cdot e^{-2} - \frac{1}{4} \cdot 2\pi i \cdot e^2 + \frac{1}{2} \cdot \frac{2\pi i}{1!} \cdot 2e^2$

$= \frac{\pi i e^{-2}}{2} - \frac{\pi i e^2}{2} + 2\pi i e^2 = \frac{\pi i e^{-2}}{2} + \frac{3\pi i e^2}{2}$.

</details>

