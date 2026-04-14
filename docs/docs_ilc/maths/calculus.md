---
title: Calculus
date: 2026-04-14
tags:
  - Mathematics
  - ILC
categories:
  - Mathematics
slug: calculus
---

# Calculus

Calculus is divided into two main branches: **differentiation** (finding rates of change) and
**integration** (finding areas and reversing differentiation). This topic is central to Paper 1 at
both levels.

## Differentiation

### The Derivative

The derivative of a function $f(x)$ measures the rate of change of $f$ with respect to $x$. It is
denoted $f'(x)$, $\frac{df}{dx}$, or $\dot{x}$ in the context of time.

### Differentiation from First Principles (HL)

The derivative is defined as:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

**Example (HL):** Prove from first principles that $\frac{d}{dx}[x^2] = 2x$.

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0}(2x + h) = 2x
$$

### Standard Derivatives (OL/HL)

For $n \in \mathbb{R}$:

$$
\frac{d}{dx}[x^n] = nx^{n-1}
$$

| Function $f(x)$ | Derivative $f'(x)$ |
| --------------- | ------------------ |
| $c$ (constant)  | $0$                |
| $x^n$           | $nx^{n-1}$         |
| $e^x$           | $e^x$              |
| $\ln x$         | $\frac{1}{x}$      |
| $\sin x$        | $\cos x$           |
| $\cos x$        | $-\sin x$          |
| $\tan x$        | $\sec^2 x$         |

### Rules of Differentiation (OL/HL)

**Sum/Difference Rule:**

$$
\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)
$$

**Constant Multiple Rule:**

$$
\frac{d}{dx}[cf(x)] = cf'(x)
$$

**Product Rule (HL):**

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)
$$

**Example (HL):** Differentiate $x^2 e^x$.

$$
\frac{d}{dx}[x^2 e^x] = 2x \cdot e^x + x^2 \cdot e^x = e^x(x^2 + 2x)
$$

**Chain Rule (HL):**

$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

**Example (HL):** Differentiate $(3x + 1)^5$.

$$
\frac{d}{dx}[(3x+1)^5] = 5(3x+1)^4 \cdot 3 = 15(3x+1)^4
$$

**Quotient Rule (HL):**

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

**Example (HL):** Differentiate $\frac{x}{x + 1}$.

$$
\frac{d}{dx}\left[\frac{x}{x+1}\right] = \frac{1 \cdot (x+1) - x \cdot 1}{(x+1)^2} = \frac{1}{(x+1)^2}
$$

### Implicit Differentiation (HL)

When a function is not given explicitly as $y = f(x)$, differentiate both sides with respect to $x$,
treating $y$ as a function of $x$.

**Example:** Find $\frac{dy}{dx}$ when $x^2 + y^2 = 25$.

Differentiating both sides: $2x + 2y\frac{dy}{dx} = 0$

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

## Applications of Differentiation

### Stationary Points (OL/HL)

Stationary points occur where $f'(x) = 0$. Use the second derivative to classify:

| Condition                 | Type              |
| ------------------------- | ----------------- |
| $f'(x) = 0$, $f''(x) > 0$ | Local minimum     |
| $f'(x) = 0$, $f''(x) < 0$ | Local maximum     |
| $f'(x) = 0$, $f''(x) = 0$ | Test inconclusive |

**Example (OL):** Find and classify the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$.

$$
f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x - 1)(x - 3) = 0
$$

$x = 1$ or $x = 3$.

$$
f''(x) = 6x - 12
$$

At $x = 1$: $f''(1) = -6 < 0$ -- local maximum. $f(1) = 1 - 6 + 9 + 1 = 5$.

At $x = 3$: $f''(3) = 6 > 0$ -- local minimum. $f(3) = 27 - 54 + 27 + 1 = 1$.

### Rates of Change (OL/HL)

**Example (OL):** The radius of a circle is increasing at $3\text{ cm/s}$. Find the rate of increase
of the area when $r = 5\text{ cm}$.

$$
A = \pi r^2 \implies \frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(5)(3) = 30\pi \text{ cm}^2/\text{s}
$$

### Tangents and Normals (OL/HL)

**Example (HL):** Find the equation of the tangent to $y = x^3 - 2x$ at $x = 1$.

$y = 1 - 2 = -1$, $\frac{dy}{dx} = 3x^2 - 2 = 1$ at $x = 1$.

Equation: $y - (-1) = 1(x - 1) \implies y = x - 2$.

The **normal** has gradient $-\frac{1}{m} = -1$.

Equation of normal: $y + 1 = -(x - 1) \implies y = -x$.

## Integration

### Indefinite Integration (Anti-differentiation)

$$
\int x^n \, dx = \frac{x^{n+1}}{n+1} + C, \quad n \neq -1
$$

### Standard Integrals (OL/HL)

| Function      | Integral                  |
| ------------- | ------------------------- | --- | ---- |
| $x^n$         | $\frac{x^{n+1}}{n+1} + C$ |
| $e^x$         | $e^x + C$                 |
| $\frac{1}{x}$ | $\ln                      | x   | + C$ |
| $\cos x$      | $\sin x + C$              |
| $\sin x$      | $-\cos x + C$             |
| $\sec^2 x$    | $\tan x + C$              |

### Definite Integration (OL/HL)

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

**Example (OL):** Evaluate $\int_1^3 (2x + 1) \, dx$.

$$
\left[x^2 + x\right]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10
$$

### Area Under a Curve (OL/HL)

The area between $y = f(x)$ and the $x$-axis from $x = a$ to $x = b$ is:

$$
A = \int_a^b f(x) \, dx
$$

:::warning
If the curve crosses the $x$-axis between $a$ and $b$, split the integral and take the
absolute value of each part. The integral itself gives the signed area.
:::

**Example (OL):** Find the area enclosed by $y = x^2$, the $x$-axis, $x = 0$, and $x = 3$.

$$
A = \int_0^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^3 = \frac{27}{3} = 9 \text{ square units}
$$

### Area Between Two Curves (HL)

If $f(x) \geq g(x)$ on $[a, b]$:

$$
A = \int_a^b [f(x) - g(x)] \, dx
$$

**Example (HL):** Find the area between $y = x^2$ and $y = 2x$.

Intersection: $x^2 = 2x \implies x = 0, 2$.

$$
A = \int_0^2 (2x - x^2) \, dx = \left[x^2 - \frac{x^3}{3}\right]_0^2 = 4 - \frac{8}{3} = \frac{4}{3}
$$

### Integration by Substitution (HL)

**Example:** Evaluate $\int 2x\sqrt{x^2 + 1} \, dx$.

Let $u = x^2 + 1$, then $du = 2x \, dx$.

$$
\int \sqrt{u} \, du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C
$$

### Integration by Parts (HL)

$$
\int u \, dv = uv - \int v \, du
$$

Use **LIATE** (Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential) to choose $u$.

**Example:** Evaluate $\int x e^x \, dx$.

Let $u = x$, $dv = e^x \, dx$. Then $du = dx$, $v = e^x$.

$$
\int x e^x \, dx = x e^x - \int e^x \, dx = x e^x - e^x + C = e^x(x - 1) + C
$$

**Example:** Evaluate $\int x^2 \cos x \, dx$.

Let $u = x^2$, $dv = \cos x \, dx$. Then $du = 2x \, dx$, $v = \sin x$.

$$
\int x^2 \cos x \, dx = x^2 \sin x - \int 2x \sin x \, dx
$$

Apply integration by parts again for $\int x \sin x \, dx$:

Let $u = x$, $dv = \sin x \, dx$. Then $du = dx$, $v = -\cos x$.

$$
\int x \sin x \, dx = -x\cos x + \int \cos x \, dx = -x\cos x + \sin x + C
$$

Therefore:

$$
\int x^2 \cos x \, dx = x^2 \sin x - 2(-x\cos x + \sin x) + C = x^2 \sin x + 2x\cos x - 2\sin x + C
$$

### Volume of Revolution (HL)

The volume generated by rotating $y = f(x)$ about the $x$-axis from $x = a$ to $x = b$:

$$
V = \pi \int_a^b [f(x)]^2 \, dx
$$

**Example:** Find the volume generated by rotating $y = \sqrt{x}$ about the $x$-axis from $x = 0$ to
$x = 4$.

$$
V = \pi \int_0^4 x \, dx = \pi\left[\frac{x^2}{2}\right]_0^4 = 8\pi
$$

## Differential Equations (HL)

### First Order Separable Equations

An equation of the form $\frac{dy}{dx} = f(x)g(y)$ can be solved by separating variables:

$$
\frac{1}{g(y)} \, dy = f(x) \, dx
$$

**Example:** Solve $\frac{dy}{dx} = \frac{x}{y}$, given $y = 2$ when $x = 0$.

$$
y \, dy = x \, dx \implies \frac{y^2}{2} = \frac{x^2}{2} + C
$$

Using $y = 2, x = 0$: $2 = C$.

$$
y^2 = x^2 + 4 \implies y = \sqrt{x^2 + 4}
$$

(We take the positive root since $y = 2 > 0$ when $x = 0$.)

## Common Pitfalls

1. **Forgetting the $+C$** in indefinite integrals.
2. **Chain rule errors** -- always multiply by the derivative of the inner function.
3. **Sign errors** with $\sin x$ and $\cos x$ derivatives/integrals.
4. **Not splitting integrals** when a curve crosses the $x$-axis.
5. **Integration by parts:** choosing the wrong $u$ and $dv$. Apply LIATE.
6. **Limits in definite integrals** -- substitute the upper limit first, then subtract the lower
   limit result.

## Practice Questions

### Ordinary Level

1. Differentiate $f(x) = 3x^4 - 2x^2 + 7x - 1$.
2. Find the gradient of the tangent to $y = x^2 - 3x$ at $x = 2$.
3. Find the stationary points of $f(x) = x^3 - 3x + 2$ and classify them.
4. Evaluate $\int_0^2 (3x^2 - 2x + 1) \, dx$.
5. Find the area under $y = 4x - x^2$ above the $x$-axis.

### Higher Level

1. Differentiate $f(x) = \frac{\ln x}{x}$ using the quotient rule.
2. Evaluate $\int_0^1 x e^{2x} \, dx$ using integration by parts.
3. Find $\frac{dy}{dx}$ when $x^3 + y^3 = 6xy$ (implicit differentiation).
4. Prove from first principles that $\frac{d}{dx}[\cos x] = -\sin x$.
5. Solve $\frac{dy}{dx} = xy$ given $y = 1$ when $x = 0$.
6. Find the volume of revolution of $y = \sin x$ about the $x$-axis from $x = 0$ to $x = \pi$.
7. Evaluate $\int \frac{2x}{x^2 + 1} \, dx$ using substitution.
