---
title: Integrals
description:
  Integrals — Basic Integration Rules; The Power Rule for Integration; Riemann
  Sums and the Definite Integral (CED Unit 6); Riemann Sums.
date: 2026-04-14
tags:
  - Mathematics
  - AP
categories:
  - Mathematics
slug: integrals
---

## Antiderivatives and Indefinite Integrals (CED Unit 6)

An **antiderivative** of $f$ is a function $F$ such that $F' = f$. The **indefinite integral** is:


<DesmosGraph
  title="Definite Integral as Area Under a Curve"
  expressions={["\int_{a}^{b} f(x) \, dx"]}
  width={800}
  height={500}
/>

Adjust the parameters in the graph above to explore the relationships between variables.


$$
\int f(x)\, dx = F(x) + C
$$

where $C$ is the constant of integration.

### Basic Integration Rules

| Function $f(x)$          | Antiderivative $F(x)$     |
| ------------------------ | ------------------------- | --- | ---- |
| $x^n$ ($n \ne -1$)       | $\frac{x^{n+1}}{n+1} + C$ |
| $\frac{1}{x}$            | $\ln                      | x   | + C$ |
| $e^x$                    | $e^x + C$                 |
| $\sin x$                 | $-\cos x + C$             |
| $\cos x$                 | $\sin x + C$              |
| $\sec^2 x$               | $\tan x + C$              |
| $\csc^2 x$               | $-\cot x + C$             |
| $\sec x \tan x$          | $\sec x + C$              |
| $\csc x \cot x$          | $-\csc x + C$             |
| $\frac{1}{1+x^2}$        | $\arctan x + C$           |
| $\frac{1}{\sqrt{1-x^2}}$ | $\arcsin x + C$           |

### The Power Rule for Integration

$$
\int x^n\, dx = \frac{x^{n+1}}{n+1} + C, \quad n \ne -1
$$

**Why the power rule excludes $n = -1$.** Substituting $n = -1$ gives $\frac{x^0}{0}$, which is
undefined. The antiderivative of $\frac{1}{x}$ is $\ln|x|$, a fundamental result with deep
connections to the natural logarithm.

**Why the absolute value in $\ln|x|$.** The derivative of $\ln x$ is $\frac{1}{x}$ for $x \gt 0$.
For $x \lt 0$, the derivative of $\ln(-x)$ is $\frac{1}{-x} \cdot (-1) = \frac{1}{x}$. So the
antiderivative of $\frac{1}{x}$ on any interval not containing $0$ is $\ln|x| + C$.

:::info[Example]

Evaluate $\displaystyle\int (3x^4 - 2x^2 + 5x - 1)\, dx$.

$$
\int (3x^4 - 2x^2 + 5x - 1)\, dx = \frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - x + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int \frac{3}{x^2}\, dx$.

Rewrite as $\displaystyle\int 3x^{-2}\, dx = \frac{3x^{-1}}{-1} + C = -\frac{3}{x} + C$.

:::

:::info[Example]

Evaluate $\displaystyle\int \frac{2x^3 - x + 4}{\sqrt{x}}\, dx$.

Rewrite:
$\displaystyle\int (2x^{5/2} - x^{1/2} + 4x^{-1/2})\, dx = \frac{4x^{7/2}}{7} - \frac{2x^{3/2}}{3} + 8x^{1/2} + C$.

:::

## Riemann Sums and the Definite Integral (CED Unit 6)

### Riemann Sums

A **Riemann sum** approximates the area under a curve by dividing the region into rectangles:

$$
\sum_{i=1}^{n} f(x_i^*) \Delta x
$$

where $\Delta x = \frac{b - a}{n}$ and $x_i^*$ is a sample point in the $i$th subinterval.

| Type              | Sample Point $x_i^*$                              |
| ----------------- | ------------------------------------------------- |
| Left Riemann sum  | Left endpoint                                     |
| Right Riemann sum | Right endpoint                                    |
| Midpoint sum      | Midpoint of subinterval                           |
| Trapezoidal sum   | Average of endpoints (trapezoids, not rectangles) |

**Why Riemann sums matter.** They are the foundation of the definite integral. As $n \to \infty$,
the approximation becomes exact (for continuous functions).

**Theorem.** If $f$ is continuous on $[a, b]$, then the Riemann sum converges to the same value
regardless of the choice of sample points $x_i^*$.

### The Definite Integral

The **definite integral** of $f$ from $a$ to $b$ is:

$$
\int_a^b f(x)\, dx = \lim_{n \to \infty} \sum_{i=1}^{n} f(x_i^*) \Delta x
$$

provided this limit exists. When it does, $f$ is said to be **integrable** on $[a, b]$.

### Properties of Definite Integrals

1. $\displaystyle\int_a^a f(x)\, dx = 0$
2. $\displaystyle\int_a^b f(x)\, dx = -\int_b^a f(x)\, dx$
3. $\displaystyle\int_a^b [f(x) \pm g(x)]\, dx = \int_a^b f(x)\, dx \pm \int_a^b g(x)\, dx$
4. $\displaystyle\int_a^b c \cdot f(x)\, dx = c \int_a^b f(x)\, dx$
5. $\displaystyle\int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx$ (Additivity)

**Property 5 (Additivity) is powerful.** It allows splitting integrals at discontinuities. For
example, if $f$ has a jump at $c \in (a, b)$, you can split:

$$
\int_a^b f(x)\, dx = \int_a^c f(x)\, dx + \int_c^b f(x)\, dx
$$

**Comparison properties.** If $f(x) \ge g(x)$ on $[a, b]$, then
$\displaystyle\int_a^b f(x)\, dx \ge \int_a^b g(x)\, dx$.

In particular, if $m \le f(x) \le M$ on $[a, b]$, then
$m(b-a) \le \displaystyle\int_a^b f(x)\, dx \le M(b-a)$.

### Integral as Net Area

If $f(x) \ge 0$ on $[a, b]$, then $\displaystyle\int_a^b f(x)\, dx$ equals the area under the curve.
If $f$ changes sign, the integral gives the **net** (signed) area.

The total area between $f$ and the $x$-axis on $[a, b]$ is:

$$
\mathrm{Total Area} = \int_a^b |f(x)|\, dx
$$

:::info[Example]

Find the total area between $f(x) = x^2 - 4$ and the $x$-axis on $[-3, 3]$.

Find the zeros: $x^2 - 4 = 0 \implies x = \pm 2$.

$$
\mathrm{Total Area} = \int_{-3}^{-2} (x^2 - 4)\, dx + \int_{-2}^{2} (4 - x^2)\, dx + \int_{2}^{3} (x^2 - 4)\, dx
$$

$$
= \left[\frac{x^3}{3} - 4x\right]_{-3}^{-2} + \left[4x - \frac{x^3}{3}\right]_{-2}^{2} + \left[\frac{x^3}{3} - 4x\right]_{2}^{3}
$$

$$
= \frac{-8 - (-27)}{3} - \frac{-8}{3} + \frac{8 - (-8)}{3} + \frac{27 - 8}{3} = \frac{19}{3} + \frac{16}{3} + \frac{19}{3} = \frac{54}{3} = 18
$$

:::

## The Fundamental Theorem of Calculus (CED Unit 6)

### FTC Part 1

If $f$ is continuous on $[a, b]$, then the function $g$ defined by:

$$
g(x) = \int_a^x f(t)\, dt
$$

is differentiable on $(a, b)$, and:

$$
g'(x) = f(x)
$$

More generally, by the chain rule:

$$
\frac{d}{dx}\!\left[\int_a^{u(x)} f(t)\, dt\right] = f(u(x)) \cdot u'(x)
$$

**Intuition.** FTC Part 1 says: the rate at which the accumulated area changes is just the height of
the curve at that point. This connects the two halves of calculus: the derivative and the integral
are inverse operations.

:::info[Example]

Find $\displaystyle\frac{d}{dx}\!\left[\int_1^{x^2} \sin(t^2)\, dt\right]$.

By FTC Part 1 and the chain rule:

$$
\frac{d}{dx}\!\left[\int_1^{x^2} \sin(t^2)\, dt\right] = \sin\!\left((x^2)^2\right) \cdot 2x = 2x \sin(x^4)
$$

:::

:::info[Example]

Find $\displaystyle\frac{d}{dx}\!\left[\int_0^{\sqrt{x}} e^{t^2}\, dt\right]$.

$$
\frac{d}{dx}\!\left[\int_0^{\sqrt{x}} e^{t^2}\, dt\right] = e^{(\sqrt{x})^2} \cdot \frac{1}{2\sqrt{x}} = \frac{e^x}{2\sqrt{x}}
$$

:::

:::info[Example]

Find $\displaystyle\frac{d}{dx}\!\left[\int_x^{x^2} \frac{1}{1+t^2}\, dt\right]$.

Split the integral at a constant (say $0$):

$$
\int_x^{x^2} \frac{1}{1+t^2}\, dt = \int_0^{x^2} \frac{1}{1+t^2}\, dt - \int_0^x \frac{1}{1+t^2}\, dt
$$

Differentiating:

$$
\frac{1}{1+x^4} \cdot 2x - \frac{1}{1+x^2} = \frac{2x}{1+x^4} - \frac{1}{1+x^2}
$$

:::

### FTC Part 2

If $f$ is continuous on $[a, b]$ and $F$ is any antiderivative of $f$, then:

$$
\int_a^b f(x)\, dx = F(b) - F(a)
$$

This is the evaluation theorem. We write $F(x)\Big|_a^b$ to denote $F(b) - F(a)$.

:::info[Example]

Evaluate $\displaystyle\int_1^3 \left(x^2 + \frac{1}{x}\right) dx$.

$$
\int_1^3 \left(x^2 + \frac{1}{x}\right) dx = \left[\frac{x^3}{3} + \ln x\right]_1^3 = \left(\frac{27}{3} + \ln 3\right) - \left(\frac{1}{3} + 0\right) = \frac{26}{3} + \ln 3
$$

:::

### Proof of FTC Part 2 using the MVT

Let $F$ be an antiderivative of $f$. Define $g(x) = \int_a^x f(t)\, dt$.

By FTC Part 1, $g'(x) = f(x) = F'(x)$, so $g(x) = F(x) + C$ for some constant $C$.

At $x = a$: $g(a) = 0 = F(a) + C \implies C = -F(a)$.

Therefore, $g(x) = F(x) - F(a)$, and:

$$
\int_a^b f(t)\, dt = g(b) = F(b) - F(a)
$$

$\blacksquare$

## Integration Techniques

### $u$-Substitution

If $\displaystyle\int f(g(x)) \cdot g'(x)\, dx$, let $u = g(x)$, $du = g'(x)\, dx$:

$$
\int f(u)\, du = F(u) + C = F(g(x)) + C
$$

**Strategy for choosing $u$.** Look for a function and its derivative in the integrand. If you can
spot $f(g(x))$ and $g'(x)$, set $u = g(x)$.

:::info[Example]

Evaluate $\displaystyle\int 2x e^{x^2}\, dx$.

Let $u = x^2$, $du = 2x\, dx$:

$$
\int 2x e^{x^2}\, dx = \int e^u\, du = e^u + C = e^{x^2} + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int \frac{x}{x^2 + 1}\, dx$.

Let $u = x^2 + 1$, $du = 2x\, dx$, giving $\frac{1}{2}du = x\, dx$:

$$
\int \frac{x}{x^2 + 1}\, dx = \frac{1}{2}\int \frac{1}{u}\, du = \frac{1}{2}\ln|u| + C = \frac{1}{2}\ln(x^2 + 1) + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int \frac{\ln x}{x}\, dx$.

Let $u = \ln x$, $du = \frac{1}{x}\, dx$:

$$
\int \frac{\ln x}{x}\, dx = \int u\, du = \frac{u^2}{2} + C = \frac{(\ln x)^2}{2} + C
$$

:::

### $u$-Substitution with Definite Integrals

When using $u$-substitution for definite integrals, change the limits of integration:

$$
\int_a^b f(g(x))g'(x)\, dx = \int_{g(a)}^{g(b)} f(u)\, du
$$

:::info[Example]

Evaluate $\displaystyle\int_0^1 x\sqrt{1 + x^2}\, dx$.

Let $u = 1 + x^2$, $du = 2x\, dx$. When $x = 0$, $u = 1$. When $x = 1, u = 2$.

$$
\int_0^1 x\sqrt{1 + x^2}\, dx = \frac{1}{2}\int_1^2 \sqrt{u}\, du = \frac{1}{2}\left[\frac{2u^{3/2}}{3}\right]_1^2 = \frac{1}{3}(2\sqrt{2} - 1)
$$

:::

:::info[Example]

Evaluate $\displaystyle\int_0^1 \frac{2x}{\sqrt{1 + x^2}}\, dx$.

Let $u = 1 + x^2$, $du = 2x\, dx$. When $x = 0$, $u = 1$. When $x = 1$, $u = 2$.

$$
\int_0^1 \frac{2x}{\sqrt{1 + x^2}}\, dx = \int_1^2 u^{-1/2}\, du = \left[2\sqrt{u}\right]_1^2 = 2\sqrt{2} - 2
$$

:::

### Integration by Parts (CED BC Unit 6.11)

$$
\int u\, dv = uv - \int v\, du
$$

Choose $u$ using **LIATE** priority: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.

**Why LIATE works.** The antiderivative of $u$ should be simpler than $u$ itself. Logarithmic and
inverse trig functions simplify upon differentiation. Algebraic functions require integration by
parts to reduce their degree.

**Tabular integration (DI method).** For integrals of the form $\displaystyle\int f(x)g(x)\, dx$
where $f(x)$ is a polynomial and $g(x)$ has an easily repeatable derivative pattern, use a table.
Label columns D (derivatives of $f$) and I (integrals of $g$), alternating signs $+$, $-$, $+$, $-$.
The result is the sum of diagonal products.

:::info[Example]

Evaluate $\displaystyle\int x e^x\, dx$.

Let $u = x$, $dv = e^x\, dx$. Then $du = dx$, $v = e^x$.

$$
\int x e^x\, dx = xe^x - \int e^x\, dx = xe^x - e^x + C = e^x(x - 1) + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int x^2 e^x\, dx$.

Let $u = x^2$, $dv = e^x\, dx$. Then $du = 2x\, dx$, $v = e^x$.

$$
= x^2 e^x - \int 2x e^x\, dx
$$

Apply integration by parts again for $\int 2x e^x\, dx$. Let $u = 2x$, $dv = e^x\, dx$,
$du = 2\, dx$, $v = e^x$:

$$
\int 2x e^x\, dx = 2xe^x - 2e^x + C
$$

Therefore:

$$
\int x^2 e^x\, dx = x^2 e^x - 2xe^x + 2e^x + C = e^x(x^2 - 2x + 2) + C
$$

**Tabular method check:**

| Sign | D (derivatives) | I (integrals) |
| ---- | --------------- | ------------- |
| $+$  | $x^2$           | $e^x$         |
| $-$  | $2x$            | $e^x$         |
| $+$  | $2$             | $e^x$         |

Result: $x^2 e^x - 2xe^x + 2e^x = e^x(x^2 - 2x + 2)$. Confirmed.

:::

:::info[Example]

Evaluate $\displaystyle\int \ln x\, dx$.

Let $u = \ln x$, $dv = dx$. Then $du = \frac{1}{x}dx$, $v = x$.

$$
\int \ln x\, dx = x\ln x - \int x \cdot \frac{1}{x}\, dx = x\ln x - x + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int_0^{\pi/2} x\sin x\, dx$.

Let $u = x$, $dv = \sin x\, dx$, $du = dx$, $v = -\cos x$.

$$
= [-x\cos x]_0^{\pi/2} - \int_0^{\pi/2} (-\cos x)\, dx = \left(0 + \frac{\pi}{2}\cos 0\right) - [-\sin x]_0^{\pi/2} = \frac{\pi}{2} - 1
$$

:::

### Partial Fractions (CED BC Unit 6.12)

Decompose a rational function into simpler fractions before integrating.

:::info[Example]

Evaluate $\displaystyle\int \frac{1}{x^2 - 1}\, dx$.

Factor: $x^2 - 1 = (x-1)(x+1)$.

$$
\frac{1}{(x-1)(x+1)} = \frac{A}{x-1} + \frac{B}{x+1}
$$

$$
1 = A(x+1) + B(x-1)
$$

At $x = 1$: $1 = 2A \implies A = \frac{1}{2}$. At $x = -1$: $1 = -2B \implies B = -\frac{1}{2}$.

$$
\int \frac{1}{x^2 - 1}\, dx = \frac{1}{2}\int \frac{1}{x-1}\, dx - \frac{1}{2}\int \frac{1}{x+1}\, dx = \frac{1}{2}\ln|x-1| - \frac{1}{2}\ln|x+1| + C = \frac{1}{2}\ln\!\left|\frac{x-1}{x+1}\right| + C
$$

:::

### Improper Integrals

An improper integral involves either an infinite limit of integration or an infinite discontinuity
in the interval.

**Type 1: Infinite interval:**

$$
\int_a^{\infty} f(x)\, dx = \lim_{b \to \infty} \int_a^b f(x)\, dx
$$

**Type 2: Infinite discontinuity at $a$:**

$$
\int_a^b f(x)\, dx = \lim_{t \to a^+} \int_t^b f(x)\, dx
$$

:::info[Example]

Determine whether $\displaystyle\int_1^{\infty} \frac{1}{x^p}\, dx$ converges for $p \gt 0$.

If $p \ne 1$:

$$
= \lim_{b \to \infty} \left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b \to \infty} \frac{b^{1-p} - 1}{1-p}
$$

This converges to $\frac{1}{p-1}$ when $p \gt 1$ and diverges when $p \lt 1$.

If $p = 1$:

$$
\lim_{b \to \infty} [\ln x]_1^b = \lim_{b \to \infty} \ln b = \infty \quad \mathrm{(diverges)}
$$

:::

:::info[Example]

Evaluate $\displaystyle\int_0^{\infty} xe^{-x^2}\, dx$.

Let $u = x^2$, $du = 2x\, dx$:

$$
\int_0^{\infty} xe^{-x^2}\, dx = \frac{1}{2}\int_0^{\infty} e^{-u}\, du = \frac{1}{2}\left[-e^{-u}\right]_0^{\infty} = \frac{1}{2}(0 + 1) = \frac{1}{2}
$$

:::

**The Gaussian integral.** The integral
$\displaystyle\int_0^{\infty} e^{-x^2}\, dx = \frac{\sqrt{\pi}}{2}$ is a celebrated result that
cannot be evaluated by elementary methods. The standard technique uses a double integral in polar
coordinates. The full Gaussian integral from $-\infty$ to $\infty$ equals $\sqrt{\pi}$.

Note that $\displaystyle\int_0^{\infty} xe^{-x^2}\, dx = \frac{1}{2}$ (computed above via
$u$-substitution) is a different integral from
$\displaystyle\int_0^{\infty} e^{-x^2}\, dx = \frac{\sqrt{\pi}}{2}$.

:::info[Example]

Evaluate $\displaystyle\int_0^{\infty} e^{-x}\, dx$.

$$
\lim_{b \to \infty} \left[-e^{-x}\right]_0^b = \lim_{b \to \infty}(-e^{-b} + 1) = 1
$$

The integral converges to $1$.

:::

## Applications of Integrals (CED Unit 8)

### Area Between Curves

The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ (where $f(x) \geq g(x)$):

$$
A = \int_a^b [f(x) - g(x)]\, dx
$$

**When to split.** If $f$ and $g$ cross, split the integral at the intersection points.

:::info[Example]

Find the area between $y = x^2$ and $y = 2x$.

Find intersections: $x^2 = 2x$, so $x^2 - 2x = 0$, giving $x = 0$ and $x = 2$.

Between $x = 0$ and $x = 2$, $2x \ge x^2$.

$$
A = \int_0^2 (2x - x^2)\, dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}
$$

:::

### Volumes of Solids of Revolution

**Disk method** (rotating about the $x$-axis):

$$
V = \pi \int_a^b [f(x)]^2\, dx
$$

**Washer method** (rotating region between $f(x)$ and $g(x)$ about the $x$-axis):

$$
V = \pi \int_a^b \left([f(x)]^2 - [g(x)]^2\right)\, dx
$$

**Shell method** (rotating about the $y$-axis):

$$
V = 2\pi \int_a^b x \cdot f(x)\, dx
$$

**When to use which method.** Use the disk/washer method when integrating perpendicular to the axis
of rotation. Use the shell method when integrating parallel to the axis of rotation.

:::info[Example]

Find the volume of the solid obtained by rotating $y = \sqrt{x}$, $y = 0$, $x = 4$ about the
$x$-axis.

Using the disk method:

$$
V = \pi \int_0^4 (\sqrt{x})^2\, dx = \pi \int_0^4 x\, dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi
$$

:::

:::info[Example]

Find the volume of the solid obtained by rotating the region bounded by $y = x^2$ and $y = x$ about
the $y$-axis.

The curves intersect at $x = 0$ and $x = 1$. Using the shell method:

$$
V = 2\pi \int_0^1 x(x - x^2)\, dx = 2\pi \int_0^1 (x^2 - x^3)\, dx = 2\pi\left[\frac{x^3}{3} - \frac{x^4}{4}\right]_0^1 = 2\pi\left(\frac{1}{3} - \frac{1}{4}\right) = 2\pi \cdot \frac{1}{12} = \frac{\pi}{6}
$$

:::

:::info[Example]

Find the volume of the solid obtained by rotating the region bounded by $y = e^{-x}$, $y = 0$,
$x = 0$, $x = 1$ about the $x$-axis.

Using the disk method:

$$
V = \pi \int_0^1 (e^{-x})^2\, dx = \pi \int_0^1 e^{-2x}\, dx = \pi\left[-\frac{e^{-2x}}{2}\right]_0^1 = \pi\left(-\frac{e^{-2}}{2} + \frac{1}{2}\right) = \frac{\pi}{2}\!\left(1 - \frac{1}{e^2}\right)
$$

:::

### Average Value of a Function

The average value of $f$ on $[a, b]$ is:

$$
f_{\mathrm{avg}} = \frac{1}{b - a}\int_a^b f(x)\, dx
$$

By the MVT for integrals, there exists $c \in [a, b]$ such that $f(c) = f_{\mathrm{avg}}$.

:::info[Example]

Find the average value of $f(x) = \sin x$ on $[0, \pi]$.

$$
f_{\mathrm{avg}} = \frac{1}{\pi}\int_0^{\pi} \sin x\, dx = \frac{1}{\pi}[-\cos x]_0^{\pi} = \frac{1}{\pi}(1 - (-1)) = \frac{2}{\pi}
$$

:::

### Arc Length

The arc length of $y = f(x)$ from $x = a$ to $x = b$ is:

$$
L = \int_a^b \sqrt{1 + [f'(x)]^2}\, dx
$$

:::info[Example]

Find the arc length of $y = \frac{2}{3}x^{3/2}$ from $x = 0$ to $x = 3$.

$f'(x) = x^{1/2} = \sqrt{x}$.

$$
L = \int_0^3 \sqrt{1 + x}\, dx
$$

Let $u = 1 + x$, $du = dx$:

$$
L = \int_1^4 \sqrt{u}\, du = \left[\frac{2u^{3/2}}{3}\right]_1^4 = \frac{2}{3}(8 - 1) = \frac{14}{3}
$$

:::

## Common Pitfalls

1. **Forgetting the constant of integration** in indefinite integrals. Without it, the answer is
   incomplete.
2. **Incorrect $u$-substitution limits.** When using $u$-substitution for definite integrals, always
   change the limits or substitute back to the original variable.
3. **Forgetting to change $dx$ to $du$** when performing $u$-substitution.
4. **Applying FTC Part 2 to discontinuous functions.** $f$ must be continuous on $[a, b]$.
5. **Confusing net area with total area.** Use absolute values for total area.
6. **Incorrectly choosing $u$ in integration by parts.** Use LIATE: prioritize Logarithmic over
   Inverse trig over Algebraic over Trig over Exponential.
7. **Sign errors with FTC Part 1 chain rule.** The derivative of $\int_a^{g(x)} f(t)\, dt$ is
   $f(g(x)) \cdot g'(x)$, not $f(g(x))$.
8. **Forgetting to split improper integrals at the discontinuity** when a singularity is in the
   interval.
9. **Choosing the disk vs. washer vs. shell method incorrectly.** Disk: rotate around $x$-axis using
   radius. Shell: rotate around $y$-axis using height as the integrand. Washer: region between two
   curves rotated about an axis.
10. **Dropping the absolute value in $\ln|x|$.** The antiderivative of $\frac{1}{x}$ is
    $\ln|x| + C$, not $\ln x + C$. On intervals where $x \lt 0$, the integral is well-defined and
    equals $\ln(-x) + C$.
11. **Confusing the Gaussian integrals.**
    $\displaystyle\int_0^{\infty} xe^{-x^2}\, dx = \frac{1}{2}$ (evaluated via $u$-substitution),
    but $\displaystyle\int_0^{\infty} e^{-x^2}\, dx = \frac{\sqrt{\pi}}{2}$ (requires advanced
    techniques).

## Practice Questions

1. Evaluate $\displaystyle\int \frac{x}{x^2 + 1}\, dx$.

2. Evaluate $\displaystyle\int_0^{\pi/2} \sin^2 x\, dx$. (Hint: use the identity
   $\sin^2 x = \frac{1 - \cos 2x}{2}$.)

3. Use integration by parts to evaluate $\displaystyle\int x^2 e^x\, dx$.

4. Find the area between $y = x^2$ and $y = 2x$.

5. Find the volume of the solid obtained by rotating the region bounded by $y = x^2$, $y = 0$,
   $x = 1$ about the $y$-axis. (Use the shell method.)

6. Determine whether $\displaystyle\int_0^{\infty} e^{-x}\, dx$ converges, and find its value if it
   does.

7. Find the average value of $f(x) = \sin x$ on $[0, \pi]$.

8. Given $\displaystyle g(x) = \int_0^{x^3} \cos(t^2)\, dt$, find $g'(x)$.

9. Evaluate $\displaystyle\int_0^1 \frac{2x}{\sqrt{1 + x^2}}\, dx$.

10. Find the arc length of $y = \frac{x^2}{8} + 2$ from $x = 0$ to $x = 4$.

11. Evaluate $\displaystyle\int_1^e \frac{\ln x}{x}\, dx$.

12. Find the volume when the region bounded by $y = e^{-x}$, $y = 0$, $x = 0$, $x = 1$ is rotated
    about the $x$-axis.

13. Evaluate $\displaystyle\int_0^1 \frac{1}{1 + x^2}\, dx$ and explain the result geometrically.

14. Use the substitution $x = \tan\theta$ to evaluate $\displaystyle\int \frac{1}{1 + x^2}\, dx$.

15. Find the area between the curves $y = \sin x$ and $y = \cos x$ for $0 \le x \le \pi/2$.

16. Evaluate $\displaystyle\int_0^1 x^2 e^{-x}\, dx$ using the tabular method.

## Practice Problems

<details>
<summary>Question 1: Integration by parts (tabular method)</summary>

Evaluate $\displaystyle\int x^3 e^x \, dx$ using the tabular method.

</details>

<details>
<summary>Answer</summary>

Differentiate $x^3$ (column 1) and integrate $e^x$ (column 2) alternately with signs $+,-,+,-$:

| Signs | $x^3$ | $e^x$ |
|-------|-------|-------|
| + | $x^3$ | $e^x$ |
| - | $3x^2$ | $e^x$ |
| + | $6x$ | $e^x$ |
| - | $6$ | $e^x$ |
| + | $0$ | $e^x$ |

Result: $x^3 e^x - 3x^2 e^x + 6xe^x - 6e^x + C = e^x(x^3 - 3x^2 + 6x - 6) + C$.

</details>

<details>
<summary>Question 2: Trigonometric substitution</summary>

Evaluate $\displaystyle\int \frac{x^2}{\sqrt{9 - x^2}} \, dx$.

</details>

<details>
<summary>Answer</summary>

Let $x = 3\sin\theta$, $dx = 3\cos\theta \, d\theta$, $\sqrt{9 - x^2} = 3\cos\theta$.

$= \int \frac{9\sin^2\theta}{3\cos\theta} \cdot 3\cos\theta \, d\theta = 9\int \sin^2\theta \, d\theta = 9\int \frac{1 - \cos 2\theta}{2} \, d\theta$

$= \frac{9}{2}\left(\theta - \frac{\sin 2\theta}{2}\right) + C = \frac{9}{2}\theta - \frac{9}{4}\sin 2\theta + C$.

Since $\theta = \arcsin(x/3)$ and $\sin 2\theta = 2\sin\theta\cos\theta = \frac{2x\sqrt{9-x^2}}{9}$:

$= \frac{9}{2}\arcsin\!\left(\frac{x}{3}\right) - \frac{x\sqrt{9-x^2}}{2} + C$.

</details>

<details>
<summary>Question 3: Area between curves</summary>

Find the area enclosed by the curves $y = x^2$ and $y = 2x + 3$.

</details>

<details>
<summary>Answer</summary>

Intersection: $x^2 = 2x + 3$, $x^2 - 2x - 3 = 0$, $(x-3)(x+1) = 0$. $x = -1$ and $x = 3$.

On $[-1, 3]$, $2x + 3 \ge x^2$.

Area $= \int_{-1}^{3} [(2x + 3) - x^2] \, dx = \left[x^2 + 3x - \frac{x^3}{3}\right]_{-1}^{3}$

$= (9 + 9 - 9) - (1 - 3 + 1/3) = 9 - (-5/3) = 9 + 5/3 = 32/3$ square units.

</details>

<details>
<summary>Question 4: Improper integral</summary>

Determine whether $\displaystyle\int_1^{\infty} \frac{1}{x^p} \, dx$ converges or diverges, and find its value when it converges.

</details>

<details>
<summary>Answer</summary>

$\displaystyle\int_1^{\infty} \frac{1}{x^p} \, dx = \lim_{b \to \infty} \int_1^b x^{-p} \, dx$.

For $p \ne 1$: $= \lim_{b \to \infty} \left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b \to \infty} \frac{b^{1-p} - 1}{1-p}$.

- If $p \gt 1$: $1 - p \lt 0$, so $b^{1-p} \to 0$. Integral converges to $\frac{1}{p - 1}$.
- If $p \lt 1$: $1 - p \gt 0$, so $b^{1-p} \to \infty$. Integral diverges.

For $p = 1$: $\int_1^b \frac{1}{x} \, dx = \ln b \to \infty$. Diverges.

The integral converges if and only if $p \gt 1$, with value $\frac{1}{p-1}$.

</details>

<details>
<summary>Question 5: Volume of revolution</summary>

Find the volume obtained by rotating the region bounded by $y = \sqrt{x}$, $y = 0$, and $x = 4$ about the x-axis.

</details>

<details>
<summary>Answer</summary>

Using the disk method:

$V = \pi \int_0^4 (\sqrt{x})^2 \, dx = \pi \int_0^4 x \, dx = \pi \left[\frac{x^2}{2}\right]_0^4 = \pi(8) = 8\pi$ cubic units.

</details>

---

:::tip Diagnostic Test
Ready to test your understanding of **Integrals**? The [diagnostic test](/qualifications/ap/maths/diagnostics/diag-integrals) contains the hardest questions within the AP specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Integrals with other AP Calculus topics to test synthesis under exam conditions.

See [Diagnostic Guide](/qualifications/ap/maths/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
