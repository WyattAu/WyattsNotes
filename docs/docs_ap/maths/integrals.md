---
title: Integrals
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

:::info[Example]

Evaluate $\displaystyle\int (3x^4 - 2x^2 + 5x - 1)\, dx$.

$$
\int (3x^4 - 2x^2 + 5x - 1)\, dx = \frac{3x^5}{5} - \frac{2x^3}{3} + \frac{5x^2}{2} - x + C
$$

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

### Integral as Net Area

If $f(x) \ge 0$ on $[a, b]$, then $\displaystyle\int_a^b f(x)\, dx$ equals the area under the curve.
If $f$ changes sign, the integral gives the **net** (signed) area.

The total area between $f$ and the $x$-axis on $[a, b]$ is:

$$
\text{Total Area} = \int_a^b |f(x)|\, dx
$$

:::info[Example]

Find the total area between $f(x) = x^2 - 4$ and the $x$-axis on $[-3, 3]$.

Find the zeros: $x^2 - 4 = 0 \implies x = \pm 2$.

$$
\text{Total Area} = \int_{-3}^{-2} |x^2 - 4|\, dx + \int_{-2}^{2} |x^2 - 4|\, dx + \int_{2}^{3} |x^2 - 4|\, dx
$$

On $[-3, -2]$ and $[2, 3]$: $f \ge 0$. On $[-2, 2]$: $f \le 0$.

$$
= \int_{-3}^{-2}(x^2 - 4)\, dx + \int_{-2}^{2}(4 - x^2)\, dx + \int_{2}^{3}(x^2 - 4)\, dx
$$

$$
= \left[\frac{x^3}{3} - 4x\right]_{-3}^{-2} + \left[4x - \frac{x^3}{3}\right]_{-2}^{2} + \left[\frac{x^3}{3} - 4x\right]_{2}^{3}
$$

$$
= \frac{7}{3} + \frac{32}{3} + \frac{7}{3} = \frac{46}{3}
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

:::info[Example]

Find $\displaystyle\frac{d}{dx}\!\left[\int_1^{x^2} \sin(t^2)\, dt\right]$.

By FTC Part 1 and the chain rule:

$$
\frac{d}{dx}\!\left[\int_1^{x^2} \sin(t^2)\, dt\right] = \sin\!\left((x^2)^2\right) \cdot 2x = 2x \sin(x^4)
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

:::info[Example]

Evaluate $\displaystyle\int 2x e^{x^2}\, dx$.

Let $u = x^2$, $du = 2x\, dx$:

$$
\int 2x e^{x^2}\, dx = \int e^u\, du = e^u + C = e^{x^2} + C
$$

:::

### $u$-Substitution with Definite Integrals

When using $u$-substitution for definite integrals, change the limits of integration:

$$
\int_a^b f(g(x))g'(x)\, dx = \int_{g(a)}^{g(b)} f(u)\, du
$$

:::info[Example]

Evaluate $\displaystyle\int_0^1 x\sqrt{1 + x^2}\, dx$.

Let $u = 1 + x^2$, $du = 2x\, dx$. When $x = 0$, $u = 1$. When $x = 1$, $u = 2$.

$$
\int_0^1 x\sqrt{1 + x^2}\, dx = \frac{1}{2}\int_1^2 \sqrt{u}\, du = \frac{1}{2}\left[\frac{2u^{3/2}}{3}\right]_1^2 = \frac{1}{3}(2\sqrt{2} - 1)
$$

:::

### Integration by Parts (CED BC Unit 6.11)

$$
\int u\, dv = uv - \int v\, du
$$

Choose $u$ using **LIATE** priority: Logarithmic, Inverse trig, Algebraic, Trig, Exponential.

:::info[Example]

Evaluate $\displaystyle\int x e^x\, dx$.

Let $u = x$, $dv = e^x\, dx$. Then $du = dx$, $v = e^x$.

$$
\int x e^x\, dx = xe^x - \int e^x\, dx = xe^x - e^x + C = e^x(x - 1) + C
$$

:::

:::info[Example]

Evaluate $\displaystyle\int \ln x\, dx$.

Let $u = \ln x$, $dv = dx$. Then $du = \frac{1}{x}dx$, $v = x$.

$$
\int \ln x\, dx = x\ln x - \int x \cdot \frac{1}{x}\, dx = x\ln x - x + C
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

$$
\int_1^{\infty} \frac{1}{x^p}\, dx = \lim_{b \to \infty} \int_1^b x^{-p}\, dx
$$

If $p \ne 1$:

$$
= \lim_{b \to \infty} \left[\frac{x^{1-p}}{1-p}\right]_1^b = \lim_{b \to \infty} \frac{b^{1-p} - 1}{1-p}
$$

This converges to $\frac{1}{p-1}$ when $p \gt 1$ and diverges when $p \lt 1$.

If $p = 1$:

$$
\lim_{b \to \infty} [\ln x]_1^b = \lim_{b \to \infty} \ln b = \infty \quad \text{(diverges)}
$$

:::

## Applications of Integrals (CED Unit 8)

### Area Between Curves

The area between $y = f(x)$ and $y = g(x)$ from $x = a$ to $x = b$ (where $f(x) \ge g(x)$):

$$
A = \int_a^b [f(x) - g(x)]\, dx
$$

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

:::info[Example]

Find the volume of the solid obtained by rotating $y = \sqrt{x}$, $y = 0$, $x = 4$ about the
$x$-axis.

Using the disk method:

$$
V = \pi \int_0^4 (\sqrt{x})^2\, dx = \pi \int_0^4 x\, dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi
$$

:::

### Average Value of a Function

The average value of $f$ on $[a, b]$ is:

$$
f_{\text{avg}} = \frac{1}{b - a}\int_a^b f(x)\, dx
$$

By the MVT for integrals, there exists $c \in [a, b]$ such that $f(c) = f_{\text{avg}}$.

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
