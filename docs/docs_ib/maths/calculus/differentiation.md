---
title: Differentiation
description: IB Mathematics — differentiation from first principles, product, quotient, and chain rules, implicit differentiation, related rates, and curve sketching.
slug: differentiation
---

## Differentiation from First Principles

### The Derivative Defined

The **derivative** of a function $f$ at a point $x = a$ is defined as the limit of the
difference quotient:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

If this limit exists, $f$ is said to be **differentiable** at $a$. The derivative function is:

$$f'(x) = \lim_{h \to 0} \frac{f(x + h) - f(x)}{h}$$

Equivalent notation includes $\dfrac{dy}{dx}$, $\dot{x}$ (Newton's notation for time derivatives),
and $Df$ (operator notation).

### First Principles Derivatives

**Example.** Prove from first principles that $\dfrac{d}{dx}(x^2) = 2x$.

$$f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h} = \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} = \lim_{h \to 0} \frac{2xh + h^2}{h} = \lim_{h \to 0}(2x + h) = 2x$$

**Theorem.** For $n \in \mathbb{Q}$, $\dfrac{d}{dx}(x^n) = nx^{n-1}$.

*Proof sketch.* For $n \in \mathbb{Z}^+$, expand $(x+h)^n$ using the binomial theorem:

$$(x + h)^n = x^n + nx^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n$$

Therefore:

$$\frac{(x+h)^n - x^n}{h} = nx^{n-1} + \binom{n}{2}x^{n-2}h + \cdots + h^{n-1}$$

As $h \to 0$, all terms with $h$ vanish, leaving $nx^{n-1}$.

---

## Rules of Differentiation

### The Power Rule

For any constant $n$:

$$\frac{d}{dx}(x^n) = nx^{n-1}$$

Combined with linearity (below), this extends to any finite sum of power functions.

### Linearity (Sum and Scalar Multiple Rules)

If $f$ and $g$ are differentiable and $c \in \mathbb{R}$:

$$(cf)' = cf', \qquad (f + g)' = f' + g'$$

### The Product Rule

If $u = u(x)$ and $v = v(x)$ are both differentiable:

$$\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

**Proof.** Let $f(x) = u(x)v(x)$. Then:

$$f'(x) = \lim_{h \to 0} \frac{u(x+h)v(x+h) - u(x)v(x)}{h}$$

Add and subtract $u(x+h)v(x)$ in the numerator:

$$f'(x) = \lim_{h \to 0} \left[ u(x+h) \cdot \frac{v(x+h) - v(x)}{h} + v(x) \cdot \frac{u(x+h) - u(x)}{h} \right]$$

Since $u$ is differentiable (hence continuous), $\lim_{h \to 0} u(x+h) = u(x)$, giving the result.

**Example.** Find $\dfrac{d}{dx}\bigl(x^2 e^x\bigr)$.

$$\frac{d}{dx}\bigl(x^2 e^x\bigr) = 2x \cdot e^x + x^2 \cdot e^x = e^x(x^2 + 2x)$$

### The Quotient Rule

If $u = u(x)$ and $v = v(x)$ are differentiable with $v(x) \ne 0$:

$$\frac{d}{dx}\!\left(\frac{u}{v}\right) = \frac{v\dfrac{du}{dx} - u\dfrac{dv}{dx}}{v^2}$$

**Example.** Find $\dfrac{d}{dx}\!\left(\dfrac{\sin x}{x}\right)$.

$$\frac{d}{dx}\!\left(\frac{\sin x}{x}\right) = \frac{x \cos x - \sin x}{x^2}$$

:::warning Common Pitfall

The quotient rule numerator is $v \cdot u' - u \cdot v'$, **not** $u'v - uv'$. Getting the order
wrong introduces a sign error. A useful mnemonic: "low d-high minus high d-low, over the square of
what's below."

:::

### The Chain Rule

If $y = f\!\bigl(g(x)\bigr)$, then:

$$\frac{dy}{dx} = f'\!\bigl(g(x)\bigr) \cdot g'(x)$$

In Leibniz notation, if $y = f(u)$ and $u = g(x)$:

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

**Proof (informal).** For small $\Delta u$ and $\Delta x$:

$$\frac{\Delta y}{\Delta x} = \frac{\Delta y}{\Delta u} \cdot \frac{\Delta u}{\Delta x}$$

Taking limits as $\Delta x \to 0$ (and hence $\Delta u \to 0$ since $g$ is continuous) gives the
result.

**Example.** Find $\dfrac{d}{dx}\!\bigl(\sin(3x^2 + 1)\bigr)$.

Let $u = 3x^2 + 1$, so $y = \sin u$.

$$\frac{dy}{dx} = \cos u \cdot 6x = 6x \cos(3x^2 + 1)$$

**Example.** Find $\dfrac{d}{dx}\!\bigl(e^{x^2}\bigr)$.

$$\frac{d}{dx}\!\bigl(e^{x^2}\bigr) = e^{x^2} \cdot 2x = 2xe^{x^2}$$

:::warning Common Pitfall

Forgetting to multiply by the **inner** derivative is the single most frequent error in chain rule
problems. Always identify the "outer" function and the "inner" function before differentiating.

:::

---

## Implicit Differentiation

### Motivation

Not all relationships between $x$ and $y$ can be expressed as $y = f(x)$. For example,
$x^2 + y^2 = 25$ defines a circle but is not a function of $x$. **Implicit differentiation**
allows us to find $\dfrac{dy}{dx}$ without solving for $y$ explicitly.

### Method

Given an equation in $x$ and $y$, differentiate both sides with respect to $x$, treating $y$ as a
function of $x$. Wherever $y$ appears, apply the chain rule:

$$\frac{d}{dx}(y^n) = ny^{n-1}\frac{dy}{dx}$$

**Example.** Find $\dfrac{dy}{dx}$ for $x^2 + y^2 = 25$.

Differentiate both sides:

$$2x + 2y\frac{dy}{dx} = 0$$

Solve for $\dfrac{dy}{dx}$:

$$\frac{dy}{dx} = -\frac{x}{y}$$

**Example.** Find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 6xy$ (the folium of Descartes).

Differentiate both sides:

$$3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}$$

Collect terms with $\dfrac{dy}{dx}$:

$$3y^2\frac{dy}{dx} - 6x\frac{dy}{dx} = 6y - 3x^2$$

$$\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}$$

### Second Derivatives Implicitly

To find $\dfrac{d^2y}{dx^2}$, differentiate $\dfrac{dy}{dx}$ with respect to $x$ (using the chain
rule wherever $y$ appears).

**Example.** Find $\dfrac{d^2y}{dx^2}$ for $x^2 + y^2 = 25$ at the point $(3, 4)$.

We have $\dfrac{dy}{dx} = -\dfrac{x}{y}$. Differentiating again:

$$\frac{d^2y}{dx^2} = -\frac{y \cdot 1 - x \cdot \dfrac{dy}{dx}}{y^2} = -\frac{y - x\!\left(-\dfrac{x}{y}\right)}{y^2} = -\frac{y^2 + x^2}{y^3} = -\frac{25}{y^3}$$

At $(3, 4)$: $\dfrac{d^2y}{dx^2} = -\dfrac{25}{64}$.

---

## Related Rates

### Framework

When two or more quantities are related by an equation, their rates of change with respect to time
are also related. The procedure:

1. Identify the quantities and their rates of change.
2. Write an equation relating the quantities.
3. Differentiate both sides with respect to time $t$.
4. Substitute known values and solve for the unknown rate.

**Example.** A ladder of length $5\,\mathrm{m}$ leans against a vertical wall. The foot of the
ladder slides away from the wall at $0.5\,\mathrm{m/s}$. How fast is the top sliding down when the
foot is $3\,\mathrm{m}$ from the wall?

Let $x$ be the distance from the foot to the wall, $y$ the height of the top. Then $x^2 + y^2 = 25$.
Differentiating with respect to $t$:

$$2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0$$

When $x = 3$: $y = \sqrt{25 - 9} = 4$, and $\dfrac{dx}{dt} = 0.5$.

$$2(3)(0.5) + 2(4)\frac{dy}{dt} = 0 \implies 3 + 8\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{3}{8}\,\mathrm{m/s}$$

The negative sign confirms the top is moving downward.

**Example.** A spherical balloon is inflated at a rate of $100\,\mathrm{cm^3/s}$. How fast is the
radius increasing when $r = 5\,\mathrm{cm}$?

Volume: $V = \dfrac{4}{3}\pi r^3$.

$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$

$$100 = 4\pi(25)\frac{dr}{dt} \implies \frac{dr}{dt} = \frac{100}{100\pi} = \frac{1}{\pi}\,\mathrm{cm/s}$$

:::warning Common Pitfall

Always check units. Rates must be in consistent units before substitution. Also, verify that
substituted values satisfy the geometric constraints of the problem.

:::

---

## Second Derivatives

### Definition and Notation

The **second derivative** of $f$ is the derivative of $f'$:

$$f''(x) = \frac{d}{dx}\!\left(f'(x)\right) = \frac{d^2y}{dx^2}$$

### Physical Interpretation

If $s(t)$ is displacement, then:

$$v(t) = \frac{ds}{dt}, \qquad a(t) = \frac{d^2s}{dt^2} = \frac{dv}{dt}$$

The second derivative gives the rate of change of the first derivative — geometrically, it
describes the **concavity** of the curve.

### Concavity

- If $f''(x) \gt 0$ on an interval, the graph of $f$ is **concave up** (holds water).
- If $f''(x) \lt 0$ on an interval, the graph of $f$ is **concave down** (spills water).

A **point of inflection** occurs where $f''$ changes sign (and $f'' = 0$ or is undefined).

---

## Stationary Points

### Classification

A **stationary point** occurs where $f'(x) = 0$. There are three types:

| Type | First derivative | Second derivative | Shape |
| :--- | :--- | :--- | :--- |
| Local maximum | Changes from $+$ to $-$ | $f''(x) \lt 0$ | $\cap$ |
| Local minimum | Changes from $-$ to $+$ | $f''(x) \gt 0$ | $\cup$ |
| Point of inflection | No sign change | $f''(x) = 0$ | $S$ |

### The Second Derivative Test

If $f'(c) = 0$:

- $f''(c) \gt 0 \implies$ local minimum at $x = c$
- $f''(c) \lt 0 \implies$ local maximum at $x = c$
- $f''(c) = 0 \implies$ test is inconclusive; use the first derivative test

### The First Derivative Test

Examine the sign of $f'$ on intervals around $c$:

- $f'$ changes from $+$ to $-$: local maximum
- $f'$ changes from $-$ to $+$: local minimum
- $f'$ does not change sign: point of inflection (horizontal)

**Example.** Find and classify the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$.

$$f'(x) = 3x^2 - 12x + 9 = 3(x - 1)(x - 3)$$

Stationary points at $x = 1$ and $x = 3$.

$$f''(x) = 6x - 12$$

At $x = 1$: $f''(1) = -6 \lt 0$ — **local maximum**. $f(1) = 1 - 6 + 9 + 1 = 5$.

At $x = 3$: $f''(3) = 6 \gt 0$ — **local minimum**. $f(3) = 27 - 54 + 27 + 1 = 1$.

:::warning Common Pitfall

The second derivative test is faster but can fail when $f''(c) = 0$. Always fall back to the first
derivative test in such cases. A classic example: $f(x) = x^4$ has $f'(0) = f''(0) = 0$ but has a
minimum at the origin.

:::

---

## Curve Sketching

### Systematic Procedure

1. **Domain.** Determine where $f$ is defined.
2. **Intercepts.** Find $x$-intercepts ($f(x) = 0$) and the $y$-intercept ($f(0)$).
3. **Symmetry.** Check for even ($f(-x) = f(x)$) or odd ($f(-x) = -f(x)$) symmetry.
4. **Asymptotes.**
   - **Vertical:** values of $x$ where $f(x) \to \pm\infty$
   - **Horizontal:** $\displaystyle\lim_{x \to \pm\infty} f(x)$
   - **Oblique:** $y = mx + c$ where $m = \displaystyle\lim_{x \to \pm\infty} \frac{f(x)}{x}$ and
     $c = \displaystyle\lim_{x \to \pm\infty} \bigl(f(x) - mx\bigr)$
5. **Stationary points.** Solve $f'(x) = 0$ and classify using the first or second derivative test.
6. **Concavity and inflection.** Analyse $f''(x)$.
7. **Sketch.** Plot key points, draw asymptotes, and connect with smooth curves respecting the
   behaviour determined above.

### Rational Functions

**Example.** Sketch $f(x) = \dfrac{x}{x^2 - 1}$.

**Domain.** $x \ne \pm 1$.

**Intercepts.** $f(0) = 0$ (origin).

**Symmetry.** $f(-x) = \dfrac{-x}{x^2 - 1} = -f(x)$ — odd function.

**Asymptotes.**

- Vertical: $x = 1$ and $x = -1$ (denominator zero).
- Horizontal: $\displaystyle\lim_{x \to \pm\infty} \frac{x}{x^2 - 1} = 0$, so $y = 0$.

**Derivative.**

$$f'(x) = \frac{(x^2 - 1) \cdot 1 - x \cdot 2x}{(x^2 - 1)^2} = \frac{-(x^2 + 1)}{(x^2 - 1)^2}$$

Since $f'(x) \lt 0$ for all $x$ in the domain, there are **no stationary points**. The function is
strictly decreasing on each branch.

**Example.** Sketch $f(x) = \dfrac{x^2 - 4}{x^2 - 1}$.

**Asymptotes.** Vertical at $x = \pm 1$. Horizontal at $y = 1$ (degrees of numerator and denominator
are equal; ratio of leading coefficients).

**Stationary points.**

$$f'(x) = \frac{2x(x^2 - 1) - (x^2 - 4)(2x)}{(x^2 - 1)^2} = \frac{6x}{(x^2 - 1)^2}$$

$f'(x) = 0 \implies x = 0$. Since $f''(0) = -6 \lt 0$, this is a local maximum at $f(0) = 4$.

---

## Higher Derivatives

### Notation

$$f^{(n)}(x) = \frac{d^n y}{dx^n} = \frac{d^n f}{dx^n}$$

### Finding Patterns

**Example.** Find $f^{(n)}(0)$ for $f(x) = e^{ax}$.

$$f'(x) = ae^{ax}, \quad f''(x) = a^2 e^{ax}, \quad \ldots, \quad f^{(n)}(x) = a^n e^{ax}$$

Therefore $f^{(n)}(0) = a^n$.

**Example.** Find a pattern for successive derivatives of $f(x) = \sin x$.

$$f'(x) = \cos x, \quad f''(x) = -\sin x, \quad f'''(x) = -\cos x, \quad f^{(4)}(x) = \sin x$$

The derivatives repeat with period $4$:

$$f^{(n)}(x) = \sin\!\left(x + \frac{n\pi}{2}\right)$$

---

## Differentiability and Continuity

### Theorem

If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

*Proof.* If $f'(a)$ exists, then:

$$\lim_{x \to a}\bigl[f(x) - f(a)\bigr] = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \cdot (x - a) = f'(a) \cdot 0 = 0$$

Hence $\displaystyle\lim_{x \to a} f(x) = f(a)$, so $f$ is continuous at $a$.

### The Converse is False

The function $f(x) = |x|$ is continuous everywhere but is **not differentiable** at $x = 0$ because
the left-hand and right-hand derivatives differ:

$$f'_-(0) = \lim_{h \to 0^-} \frac{|h|}{h} = -1, \qquad f'_+(0) = \lim_{h \to 0^+} \frac{|h|}{h} = 1$$

A function is not differentiable at a point if it has a **corner**, a **cusp**, a **vertical tangent**,
or a **discontinuity**.

---

## Standard Derivatives Reference

| $f(x)$ | $f'(x)$ |
| :--- | :--- |
| $x^n$ | $nx^{n-1}$ |
| $e^x$ | $e^x$ |
| $e^{kx}$ | $ke^{kx}$ |
| $a^x$ | $a^x \ln a$ |
| $\ln x$ | $\dfrac{1}{x}$ |
| $\sin x$ | $\cos x$ |
| $\cos x$ | $-\sin x$ |
| $\tan x$ | $\sec^2 x$ |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1 - x^2}}$ |
| $\arccos x$ | $\dfrac{-1}{\sqrt{1 - x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1 + x^2}$ |
