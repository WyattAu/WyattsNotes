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



<DesmosGraph calculatorUrl="https://www.desmos.com/calculator" title="Differentiation" />

Adjust the parameters in the graph above to explore the relationships between variables.

### The Derivative

The derivative of a function $f(x)$ measures the instantaneous rate of change of $f$ with respect to
$x$. It is denoted $f'(x)$, $\frac{df}{dx}$, or $\dot{x}$ in the context of time.

Geometrically, $f'(a)$ is the gradient of the tangent to the curve $y = f(x)$ at the point $x = a$.

### Differentiation from First Principles (HL)

The derivative is defined as:

$$
f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}
$$

This limit, when it exists, gives the slope of the secant line through $(x, f(x))$ and
$(x+h, f(x+h))$ as the two points converge.

**Example (HL):** Prove from first principles that $\frac{d}{dx}[x^2] = 2x$.

$$
f'(x) = \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0}(2x + h) = 2x
$$

**Example (HL):** Prove from first principles that $\frac{d}{dx}[\cos x] = -\sin x$.

Using the compound angle formula $\cos(A+B) = \cos A \cos B - \sin A \sin B$:

$$
f'(x) = \lim_{h \to 0} \frac{\cos(x+h) - \cos x}{h} = \lim_{h \to 0} \frac{\cos x \cos h - \sin x \sin h - \cos x}{h}
$$

$$
= \cos x \cdot \lim_{h \to 0}\frac{\cos h - 1}{h} - \sin x \cdot \lim_{h \to 0}\frac{\sin h}{h}
$$

Using the standard limits $\lim_{h \to 0}\frac{\sin h}{h} = 1$ and
$\lim_{h \to 0}\frac{\cos h - 1}{h} = 0$:

$$
f'(x) = \cos x \cdot 0 - \sin x \cdot 1 = -\sin x
$$

**Example (HL):** Prove from first principles that $\frac{d}{dx}[\sqrt{x}] = \frac{1}{2\sqrt{x}}$
for $x > 0$.

$$
f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h}
$$

Rationalise the numerator by multiplying top and bottom by $\sqrt{x+h} + \sqrt{x}$:

$$
= \lim_{h \to 0} \frac{(x+h) - x}{h(\sqrt{x+h} + \sqrt{x})} = \lim_{h \to 0} \frac{h}{h(\sqrt{x+h} + \sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x+h} + \sqrt{x}} = \frac{1}{2\sqrt{x}}
$$

### Proof of the Product Rule (HL)

We wish to prove $\frac{d}{dx}[f(x)g(x)] = f'(x)g(x) + f(x)g'(x)$.

Let $h(x) = f(x)g(x)$. Then:

$$
h'(x) = \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x)g(x)}{h}
$$

The trick is to add and subtract $f(x+h)g(x)$:

$$
= \lim_{h \to 0} \frac{f(x+h)g(x+h) - f(x+h)g(x) + f(x+h)g(x) - f(x)g(x)}{h}
$$

$$
= \lim_{h \to 0} \left[ f(x+h) \cdot \frac{g(x+h) - g(x)}{h} + g(x) \cdot \frac{f(x+h) - f(x)}{h} \right]
$$

Since $f$ is differentiable (and hence continuous), $\lim_{h \to 0} f(x+h) = f(x)$, giving:

$$
= f(x)g'(x) + g(x)f'(x)
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

**Example (HL):** Differentiate $e^{\sin x}$.

$$
\frac{d}{dx}[e^{\sin x}] = e^{\sin x} \cdot \cos x
$$

**Example (HL):** Differentiate $\ln(x^2 + 1)$.

$$
\frac{d}{dx}[\ln(x^2 + 1)] = \frac{1}{x^2 + 1} \cdot 2x = \frac{2x}{x^2 + 1}
$$

**Quotient Rule (HL):**

$$
\frac{d}{dx}\left[\frac{f(x)}{g(x)}\right] = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

**Example (HL):** Differentiate $\frac{x}{x + 1}$.

$$
\frac{d}{dx}\left[\frac{x}{x+1}\right] = \frac{1 \cdot (x+1) - x \cdot 1}{(x+1)^2} = \frac{1}{(x+1)^2}
$$

**Example (HL):** Differentiate $\frac{\sin x}{x}$.

$$
\frac{d}{dx}\left[\frac{\sin x}{x}\right] = \frac{x\cos x - \sin x}{x^2}
$$

### Derivative of $\tan x$ (HL)

We can derive $\frac{d}{dx}[\tan x] = \sec^2 x$ from the quotient rule:

$$
\frac{d}{dx}\left[\frac{\sin x}{\cos x}\right] = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x
$$

### Derivative of $a^x$ (HL)

For $a > 0$, write $a^x = e^{x \ln a}$. Then:

$$
\frac{d}{dx}[a^x] = e^{x \ln a} \cdot \ln a = a^x \ln a
$$

### Implicit Differentiation (HL)

When a function is not given explicitly as $y = f(x)$, differentiate both sides with respect to $x$,
treating $y$ as a function of $x$.

**Example:** Find $\frac{dy}{dx}$ when $x^2 + y^2 = 25$.

Differentiating both sides: $2x + 2y\frac{dy}{dx} = 0$

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

**Example (HL):** Find $\frac{dy}{dx}$ when $x^3 + y^3 = 6xy$ (folium of Descartes).

$$
3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}
$$

$$
\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2
$$

$$
\frac{dy}{dx} = \frac{2y - x^2}{y^2 - 2x}
$$

**Example (HL):** Find $\frac{dy}{dx}$ when $e^{xy} + y = x^2$.

Differentiate both sides with respect to $x$:

$$
e^{xy}\left(y + x\frac{dy}{dx}\right) + \frac{dy}{dx} = 2x
$$

$$
e^{xy} \cdot y + e^{xy} \cdot x \frac{dy}{dx} + \frac{dy}{dx} = 2x
$$

$$
\frac{dy}{dx}(xe^{xy} + 1) = 2x - ye^{xy}
$$

$$
\frac{dy}{dx} = \frac{2x - ye^{xy}}{xe^{xy} + 1}
$$

### Higher Derivatives (HL)

The second derivative $f''(x) = \frac{d^2y}{dx^2}$ is the derivative of $f'(x)$. Higher derivatives
are defined recursively.

**Example:** Find $f''(x)$ when $f(x) = x^3 \ln x$.

First derivative (product rule):

$$
f'(x) = 3x^2 \ln x + x^3 \cdot \frac{1}{x} = 3x^2 \ln x + x^2
$$

Second derivative:

$$
f''(x) = 6x \ln x + 3x^2 \cdot \frac{1}{x} + 2x = 6x \ln x + 3x + 2x = 6x \ln x + 5x
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

**Example (HL) -- Inconclusive second derivative:** Find and classify the stationary points of
$f(x) = x^4$.

$$
f'(x) = 4x^3 = 0 \implies x = 0
$$

$$
f''(x) = 12x^2, \quad f''(0) = 0
$$

The second derivative test is inconclusive. Use the first derivative test: for $x < 0$, $f'(x) < 0$
and for $x > 0$, $f'(x) > 0$, so $x = 0$ is a local minimum.

**Example (HL) -- Point of inflexion:** Consider $f(x) = x^3$.

$$
f'(x) = 3x^2 = 0 \implies x = 0
$$

$$
f''(x) = 6x, \quad f''(0) = 0
$$

For $x < 0$: $f''(x) < 0$ (concave down). For $x > 0$: $f''(x) > 0$ (concave up). So $x = 0$ is a
point of inflexion with a horizontal tangent (a "saddle point").

### The Mean Value Theorem (HL)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists $c \in (a, b)$
such that:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

**Intuition:** The MVT guarantees that at some point in the interval, the instantaneous rate of
change equals the average rate of change. This is the "mean" in "Mean Value Theorem."

**Corollary:** If $f'(x) = 0$ for all $x$ in an interval, then $f$ is constant on that interval.
This justifies the $+C$ in indefinite integration.

**Example (HL):** Verify the MVT for $f(x) = x^2$ on $[1, 3]$.

$$
\frac{f(3) - f(1)}{3 - 1} = \frac{9 - 1}{2} = 4
$$

We need $f'(c) = 2c = 4$, so $c = 2$. Since $1 < 2 < 3$, the MVT is verified.

### Rates of Change (OL/HL)

**Example (OL):** The radius of a circle is increasing at $3\mathrm{ cm/s}$. Find the rate of increase
of the area when $r = 5\mathrm{ cm}$.

$$
A = \pi r^2 \implies \frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(5)(3) = 30\pi \mathrm{ cm}^2/\mathrm{s}
$$

**Example (HL):** A conical tank with height 10 m and base radius 5 m is being filled with water at
a rate of $3\mathrm{ m}^3/\mathrm{min}$. How fast is the water level rising when the water is 4 m deep?

The tank has similar cross-sections, so $\frac{r}{h} = \frac{5}{10} = \frac{1}{2}$, giving
$r = h/2$.

$$
V = \frac{1}{3}\pi r^2 h = \frac{1}{3}\pi\left(\frac{h}{2}\right)^2 h = \frac{\pi h^3}{12}
$$

$$
\frac{dV}{dt} = \frac{\pi h^2}{4} \cdot \frac{dh}{dt}
$$

$$
3 = \frac{\pi(16)}{4} \cdot \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{3}{4\pi} \approx 0.239 \mathrm{ m/min}
$$

### Tangents and Normals (OL/HL)

The **tangent** at a point has gradient $f'(a)$.

The **normal** at a point has gradient $-\frac{1}{f'(a)}$ (the negative reciprocal).

**Example (HL):** Find the equation of the tangent to $y = x^3 - 2x$ at $x = 1$.

$y = 1 - 2 = -1$, $\frac{dy}{dx} = 3x^2 - 2 = 1$ at $x = 1$.

Equation: $y - (-1) = 1(x - 1) \implies y = x - 2$.

The normal has gradient $-\frac{1}{m} = -1$.

Equation of normal: $y + 1 = -(x - 1) \implies y = -x$.

**Example (HL):** Find the equation of the tangent to $y = e^x$ at the point where $y = e$.

When $y = e$: $e^x = e$, so $x = 1$. The gradient is $\frac{dy}{dx} = e^x = e$ at $x = 1$.

Equation: $y - e = e(x - 1) \implies y = ex$.

Note the tangent passes through the origin. This is a special property: the tangent to $e^x$ at
$x = 1$ is $y = ex$.

### Optimisation (HL)

**Example (HL):** A rectangular box with a square base has a surface area of $150\mathrm{ cm}^2$. Find
the dimensions that maximise the volume.

Let the base have side $x$ and the height be $h$. Then:

Surface area: $x^2 + 4xh = 150$, so $h = \frac{150 - x^2}{4x}$.

Volume:
$V = x^2 h = x^2 \cdot \frac{150 - x^2}{4x} = \frac{x(150 - x^2)}{4} = \frac{150x - x^3}{4}$.

$$
\frac{dV}{dx} = \frac{150 - 3x^2}{4} = 0 \implies x^2 = 50 \implies x = \sqrt{50} = 5\sqrt{2}
$$

$$
\frac{d^2V}{dx^2} = \frac{-6x}{4} = \frac{-3x}{2}
$$

At $x = 5\sqrt{2}$: $\frac{d^2V}{dx^2} = \frac{-15\sqrt{2}}{2} < 0$, confirming a maximum.

$$
h = \frac{150 - 50}{4 \cdot 5\sqrt{2}} = \frac{100}{20\sqrt{2}} = \frac{5}{\sqrt{2}} = \frac{5\sqrt{2}}{2}
$$

The optimal box has base $5\sqrt{2} \times 5\sqrt{2}$ and height $\frac{5\sqrt{2}}{2}$.

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

:::note
The absolute value in $\int \frac{1}{x}\,dx = \ln|x| + C$ is essential. It accounts for the
fact that $\frac{d}{dx}[\ln x] = \frac{1}{x}$ for $x > 0$ and
$\frac{d}{dx}[\ln(-x)] = \frac{-1}{-x} = \frac{1}{x}$ for $x < 0$.
:::

### Definite Integration (OL/HL)

$$
\int_a^b f(x) \, dx = F(b) - F(a)
$$

**The Fundamental Theorem of Calculus.** If $F'(x) = f(x)$, then $\int_a^b f(x)\,dx = F(b) - F(a)$.
This connects differentiation and integration: they are inverse operations.

**Example (OL):** Evaluate $\int_1^3 (2x + 1) \, dx$.

$$
\left[x^2 + x\right]_1^3 = (9 + 3) - (1 + 1) = 12 - 2 = 10
$$

### Area Under a Curve (OL/HL)

The area between $y = f(x)$ and the $x$-axis from $x = a$ to $x = b$ is:

$$
A = \int_a^b |f(x)| \, dx
$$

:::warning
If the curve crosses the $x$-axis between $a$ and $b$, split the integral and take the
absolute value of each part. The integral itself gives the signed area.
:::

**Example (OL):** Find the area enclosed by $y = x^2$, the $x$-axis, $x = 0$, and $x = 3$.

$$
A = \int_0^3 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^3 = \frac{27}{3} = 9 \mathrm{ square units}
$$

**Example (OL):** Find the total area between $y = x^2 - 4$ and the $x$-axis.

The curve crosses the $x$-axis when $x^2 = 4$, i.e. $x = -2$ and $x = 2$.

$$
A = \int_{-2}^{2} |x^2 - 4| \, dx = \int_{-2}^{2} (4 - x^2) \, dx = \left[4x - \frac{x^3}{3}\right]_{-2}^{2} = \left(8 - \frac{8}{3}\right) - \left(-8 + \frac{8}{3}\right) = \frac{32}{3}
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

**Example (HL):** Find the area between $y = \sin x$ and $y = \cos x$ from $x = 0$ to $x = \pi/2$.

Intersection: $\sin x = \cos x \implies x = \pi/4$.

On $[0, \pi/4]$: $\cos x \geq \sin x$. On $[\pi/4, \pi/2]$: $\sin x \geq \cos x$.

$$
A = \int_0^{\pi/4} (\cos x - \sin x)\,dx + \int_{\pi/4}^{\pi/2} (\sin x - \cos x)\,dx
$$

$$
= \left[\sin x + \cos x\right]_0^{\pi/4} + \left[-\cos x - \sin x\right]_{\pi/4}^{\pi/2}
$$

$$
= \left(\frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2} - 0 - 1\right) + \left(0 - 1 + \frac{\sqrt{2}}{2} + \frac{\sqrt{2}}{2}\right)
$$

$$
= (\sqrt{2} - 1) + (\sqrt{2} - 1) = 2\sqrt{2} - 2
$$

### Integration by Substitution (HL)

$$
\int f(g(x))g'(x) \, dx = \int f(u) \, du \quad \mathrm{where } u = g(x)
$$

**Example:** Evaluate $\int 2x\sqrt{x^2 + 1} \, dx$.

Let $u = x^2 + 1$, then $du = 2x \, dx$.

$$
\int \sqrt{u} \, du = \frac{2}{3}u^{3/2} + C = \frac{2}{3}(x^2 + 1)^{3/2} + C
$$

**Example (HL):** Evaluate $\int_0^1 \frac{x}{x^2 + 1} \, dx$.

Let $u = x^2 + 1$, then $du = 2x\,dx$, so $x\,dx = \frac{du}{2}$.

When $x = 0$: $u = 1$. When $x = 1$: $u = 2$.

$$
\int_0^1 \frac{x}{x^2 + 1} \, dx = \int_1^2 \frac{1}{2u} \, du = \frac{1}{2}\left[\ln u\right]_1^2 = \frac{1}{2}\ln 2
$$

**Key point:** When using substitution with definite integrals, either change the limits of
integration (as above) or substitute back to $x$ before evaluating.

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

**Example (HL):** Evaluate $\int e^x \sin x \, dx$ using the "cyclic" integration by parts
technique.

Let $u = \sin x$, $dv = e^x\,dx$. Then $du = \cos x\,dx$, $v = e^x$.

$$
I = \int e^x \sin x\,dx = e^x \sin x - \int e^x \cos x\,dx
$$

Apply integration by parts to $\int e^x \cos x\,dx$: let $u = \cos x$, $dv = e^x\,dx$.

$$
\int e^x \cos x\,dx = e^x \cos x + \int e^x \sin x\,dx = e^x \cos x + I
$$

Substituting back:

$$
I = e^x \sin x - e^x \cos x - I
$$

$$
2I = e^x(\sin x - \cos x)
$$

$$
I = \frac{e^x(\sin x - \cos x)}{2} + C
$$

### Integration of Trigonometric Functions (HL)

$$
\int \tan x \, dx = -\ln|\cos x| + C = \ln|\sec x| + C
$$

$$
\int \cot x \, dx = \ln|\sin x| + C
$$

$$
\int \sec x \, dx = \ln|\sec x + \tan x| + C
$$

**Derivation of $\int \tan x\,dx$.** Write $\tan x = \frac{\sin x}{\cos x}$ and let $u = \cos x$,
$du = -\sin x\,dx$:

$$
\int \tan x\,dx = \int \frac{\sin x}{\cos x}\,dx = -\int \frac{du}{u} = -\ln|u| + C = -\ln|\cos x| + C
$$

**Example (HL):** Evaluate $\int \sin^2 x\,dx$.

Using the identity $\sin^2 x = \frac{1 - \cos 2x}{2}$:

$$
\int \sin^2 x\,dx = \int \frac{1 - \cos 2x}{2}\,dx = \frac{x}{2} - \frac{\sin 2x}{4} + C
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

**Example (HL):** Find the volume generated by rotating $y = \sin x$ about the $x$-axis from $x = 0$
to $x = \pi$.

$$
V = \pi \int_0^\pi \sin^2 x\,dx = \pi\left[\frac{x}{2} - \frac{\sin 2x}{4}\right]_0^\pi = \pi\left(\frac{\pi}{2} - 0\right) = \frac{\pi^2}{2}
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

**Example (HL):** Solve $\frac{dy}{dx} = xy$ given $y = 1$ when $x = 0$.

Separate: $\frac{1}{y}\,dy = x\,dx$.

$$
\ln|y| = \frac{x^2}{2} + C
$$

Using $y = 1, x = 0$: $\ln 1 = 0 = C$.

$$
\ln|y| = \frac{x^2}{2} \implies y = e^{x^2/2}
$$

### Exponential Growth and Decay (HL)

$$
\frac{dy}{dt} = ky \implies y = y_0 e^{kt}
$$

**Example:** A bacteria culture doubles every 3 hours. If initially there are 1000 bacteria, when
will there be 10000?

Doubling time $T_d = 3$, so $k = \frac{\ln 2}{3}$.

$10000 = 1000 e^{(\ln 2/3)t}$

$10 = e^{(\ln 2/3)t}$

$t = \frac{3 \ln 10}{\ln 2} \approx 9.97$ hours.

**Half-life proof.** For exponential decay $y = y_0 e^{-kt}$, the half-life $t_{1/2}$ satisfies
$y_0/2 = y_0 e^{-kt_{1/2}}$, so $e^{-kt_{1/2}} = 1/2$, giving $t_{1/2} = \frac{\ln 2}{k}$.

### Applications: Connected Rates of Change (HL)

**Example:** Oil is leaking from a tank at a rate proportional to the square root of the volume
remaining. If $V = 100$ litres initially and the rate is $2$ L/min initially, find $V$ after 9
minutes.

$$
\frac{dV}{dt} = -k\sqrt{V}
$$

At $t = 0$: $-2 = -k\sqrt{100} = -10k$, so $k = 0.2$.

Separate: $\frac{dV}{\sqrt{V}} = -0.2\, dt$

$$
2\sqrt{V} = -0.2t + C
$$

At $t = 0$: $2\sqrt{100} = C = 20$.

$$
2\sqrt{V} = -0.2t + 20
$$

$$
\sqrt{V} = 10 - 0.1t
$$

$$
V = (10 - 0.1t)^2
$$

At $t = 9$: $V = (10 - 0.9)^2 = 9.1^2 = 82.81$ litres.

## Common Pitfalls

1. **Forgetting the $+C$** in indefinite integrals. This is equivalent to losing the constant of
   integration and makes it impossible to apply initial conditions.
2. **Chain rule errors** -- always multiply by the derivative of the inner function.
3. **Sign errors** with $\sin x$ and $\cos x$ derivatives/integrals. Remember:
   $\int \sin x\,dx = -\cos x$ (the integral has a negative sign).
4. **Not splitting integrals** when a curve crosses the $x$-axis. Use the absolute value.
5. **Integration by parts:** choosing the wrong $u$ and $dv$. Apply LIATE.
6. **Limits in definite integrals** -- substitute the upper limit first, then subtract the lower
   limit result.
7. **Forgetting to change limits** when using substitution in a definite integral.
8. **Confusing $\frac{d}{dx}[\ln x] = \frac{1}{x}$ with $\int \frac{1}{x}\,dx = \ln|x|$** -- the
   absolute value in the integral is essential.
9. **Cyclic integration by parts** -- when integrating $e^x \sin x$ or $e^x \cos x$, the integral
   reappears. Move it to one side and divide by 2. Do not loop forever.
10. **Stationary point classification** -- when $f''(x) = 0$, the second derivative test is
    inconclusive. Use the first derivative test instead.
11. **Domain issues with implicit differentiation** -- when finding $\frac{dy}{dx}$ implicitly,
    always check that the point lies on the curve before substituting.

## Practice Questions

### Ordinary Level

1. Differentiate $f(x) = 3x^4 - 2x^2 + 7x - 1$.
2. Find the gradient of the tangent to $y = x^2 - 3x$ at $x = 2$.
3. Find the stationary points of $f(x) = x^3 - 3x + 2$ and classify them.
4. Evaluate $\int_0^2 (3x^2 - 2x + 1) \, dx$.
5. Find the area under $y = 4x - x^2$ above the $x$-axis.
6. Find the equation of the normal to $y = x^2 + 1$ at $x = 1$.
7. Evaluate $\int \frac{3}{x}\,dx$ and hence evaluate $\int_1^4 \frac{3}{x}\,dx$.
8. The radius of a sphere is increasing at $2\mathrm{ cm/s}$. Find the rate of increase of the volume
   when $r = 5\mathrm{ cm}$.

### Higher Level

1. Differentiate $f(x) = \frac{\ln x}{x}$ using the quotient rule.
2. Evaluate $\int_0^1 x e^{2x} \, dx$ using integration by parts.
3. Find $\frac{dy}{dx}$ when $x^3 + y^3 = 6xy$ (implicit differentiation).
4. Prove from first principles that $\frac{d}{dx}[\cos x] = -\sin x$.
5. Solve $\frac{dy}{dx} = xy$ given $y = 1$ when $x = 0$.
6. Find the volume of revolution of $y = \sin x$ about the $x$-axis from $x = 0$ to $x = \pi$.
7. Evaluate $\int \frac{2x}{x^2 + 1} \, dx$ using substitution.
8. Find the area between the curves $y = e^x$ and $y = e^{-x}$ and the lines $x = 0$ and $x = 1$.
9. Find $\frac{d^2y}{dx^2}$ when $y = x^3 \ln x$.
10. Evaluate $\int_0^{\pi/2} \sin^2 x \, dx$ using the identity $\sin^2 x = \frac{1 - \cos 2x}{2}$.
11. Evaluate $\int e^x \cos x\,dx$ using integration by parts.
12. Find $\frac{dy}{dx}$ when $e^{xy} + y = x^2$ and evaluate it at $(1, 0)$.
13. A cylindrical can is to hold $500\mathrm{ cm}^3$. Find the dimensions that minimise the surface
    area.
14. Prove the product rule from first principles.
15. Find the volume generated by rotating $y = \frac{1}{x}$ about the $x$-axis from $x = 1$ to
    $x = e$.
