---
title: Derivatives
date: 2026-04-14
tags:
  - Mathematics
  - AP
categories:
  - Mathematics
slug: derivatives
---

## The Derivative as a Limit (CED Unit 2)

The derivative of $f$ at $x = a$ is defined as:

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

Equivalently, using an alternate form:

$$
f'(a) = \lim_{x \to a} \frac{f(x) - f(a)}{x - a}
$$

If this limit exists, $f$ is said to be **differentiable** at $a$.

**Physical intuition.** If $s(t)$ is position at time $t$, then $s'(t)$ is the instantaneous
velocity. The derivative answers: "how fast is $f$ changing right now?"

**Geometric intuition.** The derivative $f'(a)$ equals the slope of the tangent line to the graph of
$f$ at the point $(a, f(a))$.

### Interpretations of the Derivative

- **Geometric:** $f'(a)$ is the slope of the tangent line to $y = f(x)$ at the point $(a, f(a))$.
- **Physical:** If $s(t)$ is position, then $s'(t)$ is instantaneous velocity.
- **Rate of change:** $f'(a)$ gives the instantaneous rate of change of $f$ with respect to $x$ at
  $x = a$.

:::info[Example]

Find $f'(2)$ for $f(x) = x^2 - 3x + 1$ using the limit definition.

$$
f'(2) = \lim_{h \to 0} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0} \frac{(2+h)^2 - 3(2+h) + 1 - (-1)}{h}
$$

$$
= \lim_{h \to 0} \frac{4 + 4h + h^2 - 6 - 3h + 1 + 1}{h} = \lim_{h \to 0} \frac{h^2 + h}{h} = \lim_{h \to 0}(h + 1) = 1
$$

:::

:::info[Example]

Find $f'(x)$ for $f(x) = \frac{1}{x}$ using the limit definition.

$$
f'(x) = \lim_{h \to 0} \frac{\frac{1}{x+h} - \frac{1}{x}}{h} = \lim_{h \to 0} \frac{x - (x+h)}{h \cdot x(x+h)} = \lim_{h \to 0} \frac{-h}{h \cdot x(x+h)} = \lim_{h \to 0} \frac{-1}{x(x+h)} = -\frac{1}{x^2}
$$

:::

:::info[Example]

Find $f'(x)$ for $f(x) = \sqrt{x}$ using the limit definition.

$$
f'(x) = \lim_{h \to 0} \frac{\sqrt{x+h} - \sqrt{x}}{h}
$$

Multiply numerator and denominator by $\sqrt{x+h} + \sqrt{x}$:

$$
= \lim_{h \to 0} \frac{x + h - x}{h(\sqrt{x+h} + \sqrt{x})} = \lim_{h \to 0} \frac{1}{\sqrt{x+h} + \sqrt{x}} = \frac{1}{2\sqrt{x}}
$$

This confirms the power rule for $n = \frac{1}{2}$:
$\frac{d}{dx}[x^{1/2}] = \frac{1}{2}x^{-1/2} = \frac{1}{2\sqrt{x}}$. $\blacksquare$

:::

## Differentiability and Continuity

**Theorem.** If $f$ is differentiable at $a$, then $f$ is continuous at $a$.

**Proof.** We need to show $\displaystyle\lim_{x \to a} f(x) = f(a)$. Consider:

$$
\lim_{x \to a} [f(x) - f(a)] = \lim_{x \to a} \frac{f(x) - f(a)}{x - a} \cdot (x - a) = f'(a) \cdot 0 = 0
$$

Therefore, $\displaystyle\lim_{x \to a} f(x) = f(a)$, so $f$ is continuous at $a$. $\blacksquare$

**The converse is false:** $f(x) = |x|$ is continuous at $x = 0$ but not differentiable there
because the left-hand and right-hand derivatives disagree.

### Where Differentiability Fails

A function fails to be differentiable at a point if:

1. There is a **corner** (left and right derivatives differ), e.g., $|x|$ at $x = 0$.
2. There is a **cusp**, e.g., $f(x) = x^{2/3}$ at $x = 0$.
3. There is a **vertical tangent**, e.g., $f(x) = \sqrt[3]{x}$ at $x = 0$.
4. There is a **discontinuity**.

**Proof that $|x|$ is not differentiable at $x = 0$.**

Left-hand derivative:
$\displaystyle\lim_{h \to 0^-} \frac{|h|}{h} = \lim_{h \to 0^-} \frac{-h}{h} = -1$.

Right-hand derivative:
$\displaystyle\lim_{h \to 0^+} \frac{|h|}{h} = \lim_{h \to 0^+} \frac{h}{h} = 1$.

Since $-1 \neq 1$, the derivative does not exist. $\blacksquare$

**Proof that $f(x) = x^{2/3}$ has a cusp at $x = 0$.**

$$
f'(x) = \frac{2}{3}x^{-1/3} = \frac{2}{3\sqrt[3]{x}}
$$

As $x \to 0^+$, $f'(x) \to +\infty$. As $x \to 0^-$, $f'(x) \to -\infty$.

The left and right derivatives are both infinite but with opposite signs, creating a cusp. The
tangent line approaches vertical from both sides. $\blacksquare$

## Differentiation Rules

### Basic Rules

Let $c$ be a constant and $n$ a real number:

1. **Constant rule:** $\displaystyle\frac{d}{dx}[c] = 0$
2. **Power rule:** $\displaystyle\frac{d}{dx}[x^n] = nx^{n-1}$
3. **Constant multiple rule:** $\displaystyle\frac{d}{dx}[cf(x)] = cf'(x)$
4. **Sum/Difference rule:** $\displaystyle\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)$

### Product Rule

$$
\frac{d}{dx}[f(x) \cdot g(x)] = f'(x)g(x) + f(x)g'(x)
$$

**Proof sketch.** Write $F(x) = f(x)g(x)$ and expand the difference quotient
$\frac{F(x+h) - F(x)}{h}$ by adding and subtracting $f(x+h)g(x)$:

$$
\frac{f(x+h)g(x+h) - f(x)g(x)}{h} = f(x+h)\frac{g(x+h) - g(x)}{h} + g(x)\frac{f(x+h) - f(x)}{h}
$$

Taking limits as $h \to 0$ gives the result. $\blacksquare$

### Quotient Rule

$$
\frac{d}{dx}\!\left[\frac{f(x)}{g(x)}\right] = \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}
$$

**Proof.** Let $F(x) = \frac{f(x)}{g(x)}$, so $f(x) = F(x)g(x)$. Differentiating using the product
rule:

$$
f'(x) = F'(x)g(x) + F(x)g'(x)
$$

$$
F'(x)g(x) = f'(x) - F(x)g'(x) = f'(x) - \frac{f(x)}{g(x)}g'(x)
$$

$$
F'(x) = \frac{f'(x)}{g(x)} - \frac{f(x)g'(x)}{[g(x)]^2} = \frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}
$$

$\blacksquare$

**Mnemonic:** "Low d-High minus High d-Low, draw a line and square below."

### Chain Rule

$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

**Why the chain rule works.** If $y = f(u)$ and $u = g(x)$, then
$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$. This is a cancellation of the $du$ terms
(formalised by limits).

**Proof of the chain rule.** Let $u = g(x)$ and define:

$$
k(h) = \frac{f(u + h) - f(u)}{h} - f'(u) \quad \text{when } h \ne 0, \quad k(0) = 0
$$

Then $\displaystyle\lim_{h \to 0} k(h) = 0$ and $f(u+h) - f(u) = [f'(u) + k(h)] \cdot h$ for all
$h$.

Let $\Delta u = g(x+h) - g(x)$. Then:

$$
\frac{f(g(x+h)) - f(g(x))}{h} = \frac{f(u + \Delta u) - f(u)}{h} = [f'(u) + k(\Delta u)] \cdot \frac{\Delta u}{h}
$$

Taking $h \to 0$: $\Delta u \to 0$ (since $g$ is differentiable, hence continuous), so
$k(\Delta u) \to 0$, giving:

$$
f'(g(x)) \cdot g'(x)
$$

$\blacksquare$

:::info[Example]

Find $\displaystyle\frac{d}{dx}\left[(3x^2 + 1)^5\right]$.

Let $u = 3x^2 + 1$, so $y = u^5$.

$$
\frac{dy}{dx} = 5u^4 \cdot \frac{du}{dx} = 5(3x^2 + 1)^4 \cdot 6x = 30x(3x^2 + 1)^4
$$

:::

:::info[Example]

Find $\displaystyle\frac{d}{dx}\left[\sin^3(2x)\right]$.

Apply the chain rule twice:

$$
\frac{d}{dx}\left[\sin^3(2x)\right] = 3\sin^2(2x) \cdot \cos(2x) \cdot 2 = 6\sin^2(2x)\cos(2x)
$$

:::

:::info[Example]

Find $\displaystyle\frac{d}{dx}\left[\ln(\sin x)\right]$.

Let $u = \sin x$, so $y = \ln u$.

$$
\frac{dy}{dx} = \frac{1}{\sin x} \cdot \cos x = \cot x
$$

:::

:::info[Example]

Find $\displaystyle\frac{d}{dx}\left[e^{\sqrt{3x+1}}\right]$.

Apply the chain rule twice:

$$
\frac{d}{dx}\left[e^{\sqrt{3x+1}}\right] = e^{\sqrt{3x+1}} \cdot \frac{d}{dx}\!\left[(3x+1)^{1/2}\right] = e^{\sqrt{3x+1}} \cdot \frac{1}{2}(3x+1)^{-1/2} \cdot 3 = \frac{3e^{\sqrt{3x+1}}}{2\sqrt{3x+1}}
$$

:::

## Derivatives of Trigonometric Functions

$$
\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x
$$

$$
\frac{d}{dx}[\tan x] = \sec^2 x \qquad \frac{d}{dx}[\cot x] = -\csc^2 x
$$

$$
\frac{d}{dx}[\sec x] = \sec x \tan x \qquad \frac{d}{dx}[\csc x] = -\csc x \cot x
$$

### Proof that $\displaystyle\frac{d}{dx}[\sin x] = \cos x$

$$
\frac{d}{dx}[\sin x] = \lim_{h \to 0} \frac{\sin(x+h) - \sin x}{h} = \lim_{h \to 0} \frac{\sin x \cos h + \cos x \sin h - \sin x}{h}
$$

$$
= \lim_{h \to 0}\!\left[\sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}\right] = \sin x \cdot 0 + \cos x \cdot 1 = \cos x
$$

### Proof that $\displaystyle\frac{d}{dx}[\tan x] = \sec^2 x$

$$
\frac{d}{dx}[\tan x] = \frac{d}{dx}\!\left[\frac{\sin x}{\cos x}\right] = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \frac{1}{\cos^2 x} = \sec^2 x
$$

$\blacksquare$

## Derivatives of Exponential and Logarithmic Functions

$$
\frac{d}{dx}[e^x] = e^x \qquad \frac{d}{dx}[a^x] = a^x \ln a
$$

$$
\frac{d}{dx}[\ln x] = \frac{1}{x} \qquad \frac{d}{dx}[\log_a x] = \frac{1}{x \ln a}
$$

### Proof that $\displaystyle\frac{d}{dx}[e^x] = e^x$

$$
\frac{d}{dx}[e^x] = \lim_{h \to 0} \frac{e^{x+h} - e^x}{h} = e^x \lim_{h \to 0} \frac{e^h - 1}{h} = e^x \cdot 1 = e^x
$$

where we used $\displaystyle\lim_{h \to 0} \frac{e^h - 1}{h} = 1$.

### Proof that $\displaystyle\frac{d}{dx}[\ln x] = \frac{1}{x}$

Let $y = \ln x$, so $e^y = x$. Differentiating implicitly: $e^y \frac{dy}{dx} = 1$, so
$\frac{dy}{dx} = \frac{1}{e^y} = \frac{1}{x}$. $\blacksquare$

### Proof that $\displaystyle\frac{d}{dx}[a^x] = a^x \ln a$

Write $a^x = e^{x \ln a}$. Then:

$$
\frac{d}{dx}[a^x] = \frac{d}{dx}[e^{x \ln a}] = e^{x \ln a} \cdot \ln a = a^x \ln a
$$

$\blacksquare$

## Inverse Trigonometric Derivatives

$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}} \qquad \frac{d}{dx}[\arccos x] = \frac{-1}{\sqrt{1 - x^2}}
$$

$$
\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}
$$

**Derivation of $\arcsin x$.** Let $y = \arcsin x$, so $x = \sin y$. Differentiating:
$1 = \cos y \cdot
\frac{dy}{dx}$, so
$\frac{dy}{dx} = \frac{1}{\cos y} = \frac{1}{\sqrt{1 - \sin^2 y}} =
\frac{1}{\sqrt{1 - x^2}}$.

**Derivation of $\arctan x$.** Let $y = \arctan x$, so $x = \tan y$. Differentiating:
$1 = \sec^2 y \cdot \frac{dy}{dx}$, so $\frac{dy}{dx} = \frac{1}{\sec^2 y} = \cos^2 y$.

Since $\sec^2 y = 1 + \tan^2 y = 1 + x^2$, we get $\cos^2 y = \frac{1}{1 + x^2}$, so
$\frac{dy}{dx} = \frac{1}{1 + x^2}$. $\blacksquare$

## Implicit Differentiation

When $y$ is defined implicitly as a function of $x$, differentiate both sides with respect to $x$
and solve for $\frac{dy}{dx}$.

:::info[Example]

Find $\displaystyle\frac{dy}{dx}$ for $x^2 + y^2 = 25$.

Differentiate both sides with respect to $x$:

$$
2x + 2y\frac{dy}{dx} = 0 \implies \frac{dy}{dx} = -\frac{x}{y}
$$

:::

:::info[Example]

Find the equation of the tangent line to $x^2 + y^2 = 25$ at the point $(3, 4)$.

From the previous example, $\displaystyle\frac{dy}{dx} = -\frac{x}{y}$. At $(3, 4)$:

$$
\left.\frac{dy}{dx}\right|_{(3,4)} = -\frac{3}{4}
$$

The tangent line is $y - 4 = -\frac{3}{4}(x - 3)$, or $3x + 4y = 25$.

:::

:::info[Example]

Find $\displaystyle\frac{dy}{dx}$ for $x^3 + y^3 = 6xy$.

Differentiate implicitly:

$$
3x^2 + 3y^2\frac{dy}{dx} = 6y + 6x\frac{dy}{dx}
$$

$$
3y^2\frac{dy}{dx} - 6x\frac{dy}{dx} = 6y - 3x^2
$$

$$
\frac{dy}{dx}(3y^2 - 6x) = 6y - 3x^2
$$

$$
\frac{dy}{dx} = \frac{6y - 3x^2}{3y^2 - 6x} = \frac{2y - x^2}{y^2 - 2x}
$$

:::

:::info[Example]

Find $\displaystyle\frac{d^2y}{dx^2}$ for $x^2 + y^2 = 25$.

We have $\frac{dy}{dx} = -\frac{x}{y}$.

Differentiating again:

$$
\frac{d^2y}{dx^2} = \frac{d}{dx}\!\left(-\frac{x}{y}\right) = -\frac{y - x\frac{dy}{dx}}{y^2} = -\frac{y - x(-x/y)}{y^2} = -\frac{y^2 + x^2}{y^3} = -\frac{25}{y^3}
$$

:::

:::info[Example]

Find $\displaystyle\frac{dy}{dx}$ for $e^{xy} + y = x^2$.

Differentiate implicitly with respect to $x$:

$$
e^{xy}\!\left(y + x\frac{dy}{dx}\right) + \frac{dy}{dx} = 2x
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

:::

## Higher-Order Derivatives

The second derivative is the derivative of the first derivative:

$$
f''(x) = \frac{d}{dx}[f'(x)] = \frac{d^2y}{dx^2}
$$

Similarly, $f'''(x)$, $f^{(4)}(x)$, etc. denote higher-order derivatives.

### Interpretation of the Second Derivative

- If $f''(x) \gt 0$, $f$ is **concave up** at $x$.
- If $f''(x) \lt 0$, $f$ is **concave down** at $x$.
- If $f''(x)$ changes sign at $x = c$, then $(c, f(c))$ is an **inflection point**.

**Theorem.** If $f$ has a local maximum at $c$ and $f''(c)$ exists, then $f''(c) \leq 0$. If $f$ has
a local minimum at $c$ and $f''(c)$ exists, then $f''(c) \geq 0$.

This is the second derivative test for concavity at critical points.

### Notation

Common notations for derivatives include:

- $f'(x)$, $f''(x)$, $f'''(x)$ (prime notation)
- $\frac{df}{dx}$, $\frac{d^2f}{dx^2}$ (Leibniz notation)
- $\dot{x}$, $\ddot{x}$ (Newton's dot notation for time derivatives)

## Applications of Derivatives (CED Unit 5)

### Related Rates

When two or more quantities are related by an equation, their rates of change are also related.

:::info[Example]

A ladder 10 ft long rests against a vertical wall. If the bottom slides away at 1 ft/s, how fast is
the top sliding down when the bottom is 6 ft from the wall?

Let $x$ = distance from wall to bottom, $y$ = height of top on wall. Then $x^2 + y^2 = 100$.

Differentiate with respect to $t$:

$$
2x\frac{dx}{dt} + 2y\frac{dy}{dt} = 0
$$

When $x = 6$: $y = \sqrt{100 - 36} = 8$. Given $\frac{dx}{dt} = 1$:

$$
2(6)(1) + 2(8)\frac{dy}{dt} = 0 \implies \frac{dy}{dt} = -\frac{12}{16} = -\frac{3}{4} \text{ ft/s}
$$

The negative sign confirms the top is sliding down.

:::

:::info[Example]

A spherical balloon is inflated at a rate of $10 \text{ cm}^3/\text{s}$. How fast is the radius
increasing when the radius is 5 cm? ($V = \frac{4}{3}\pi r^3$)

$$
\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}
$$

$$
10 = 4\pi(25)\frac{dr}{dt} \implies \frac{dr}{dt} = \frac{10}{100\pi} = \frac{1}{10\pi} \text{ cm/s}
$$

:::

:::info[Example]

A 15 ft ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the angle between
the ladder and the ground changing when the bottom is 9 ft from the wall?

Let $\theta$ be the angle between the ladder and the ground. Then $\cos\theta = \frac{x}{15}$, so
$x = 15\cos\theta$.

Differentiating with respect to $t$:

$$
\frac{dx}{dt} = -15\sin\theta \frac{d\theta}{dt}
$$

When $x = 9$: $\cos\theta = \frac{9}{15} = \frac{3}{5}$, so $\sin\theta = \frac{4}{5}$.

$$
2 = -15 \cdot \frac{4}{5} \cdot \frac{d\theta}{dt} = -12 \frac{d\theta}{dt}
$$

$$
\frac{d\theta}{dt} = -\frac{2}{12} = -\frac{1}{6} \text{ rad/s}
$$

The angle is decreasing at $\frac{1}{6}$ rad/s.

:::

### Linear Approximation and Differentials

The tangent line at $x = a$ gives a linear approximation:

$$
f(x) \approx f(a) + f'(a)(x - a)
$$

This is useful for estimating values of functions near known points.

:::info[Example]

Use linear approximation to estimate $\sqrt{4.1}$.

Let $f(x) = \sqrt{x}$, $a = 4$.

$$
f'(x) = \frac{1}{2\sqrt{x}} \implies f(4) = 2, \quad f'(4) = \frac{1}{4}
$$

$$
\sqrt{4.1} \approx 2 + \frac{1}{4}(4.1 - 4) = 2 + 0.025 = 2.025
$$

(The actual value is approximately 2.02485.)

:::

:::info[Example]

Use linear approximation to estimate $(1.02)^{10}$.

Let $f(x) = x^{10}$, $a = 1$.

$$
f'(x) = 10x^9 \implies f(1) = 1, \quad f'(1) = 10
$$

$$
(1.02)^{10} \approx 1 + 10(0.02) = 1.20
$$

(The actual value is approximately 1.21899, showing that linear approximation is less accurate when
$x$ is farther from $a$.)

:::

### Mean Value Theorem (MVT)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one
$c \in (a, b)$ such that:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

This means the instantaneous rate of change equals the average rate of change at some interior
point.

**Geometric interpretation.** The MVT guarantees the existence of a tangent line parallel to the
secant line joining $(a, f(a))$ and $(b, f(b))$.

**Proof of the MVT.** Let $g(x) = f(x) - \frac{f(b) - f(a)}{b-a}(x - a) - f(a)$. Then
$g(a) = g(b) = 0$. By Rolle's Theorem, there exists $c \in (a, b)$ with $g'(c) = 0$, which gives
$f'(c) = \frac{f(b) - f(a)}{b-a}$. $\blacksquare$

### Rolle's Theorem

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists
at least one $c \in (a, b)$ such that $f'(c) = 0$.

Rolle's Theorem is a special case of the MVT where $f(a) = f(b)$.

**Application of Rolle's Theorem.** Rolle's Theorem is used to prove that a differentiable function
has at most one root in an interval. If it had two roots, Rolle's Theorem would give a point where
the derivative is zero, leading to a contradiction.

:::info[Example]

Show that $f(x) = x^3 - 3x + 1$ has exactly one real root.

Note that $f(0) = 1$ and $f(-2) = -8 + 6 + 1 = -1$. By the IVT, there is at least one root in
$(-2, 0)$.

Suppose there are two distinct roots $a \lt b$. Then $f(a) = f(b) = 0$, and by Rolle's Theorem,
there exists $c \in (a, b)$ with $f'(c) = 0$. But $f'(x) = 3x^2 - 3 = 3(x+1)(x-1)$, which is zero
only at $x = \pm 1$. This does not lead to a contradiction on its own, so we must examine further.

In fact, $f(-2) = -1$, $f(0) = 1$, $f(1) = -1$, $f(2) = 3$. So $f$ has at least one root in
$(-2, 0)$, at least one in $(0, 1)$, and possibly one in $(1, 2)$. Rolle's Theorem applied to
consecutive roots shows that each pair of roots must bracket either $x = -1$ or $x = 1$.

Testing: $f(-1) = -1 + 3 + 1 = 3 \gt 0$. So the root in $(-2, 0)$ is in $(-2, -1)$, and the root in
$(0, 1)$ is in $(0, 1)$. These bracket different critical points. In fact, $f$ has three real roots,
and Rolle's Theorem confirms this is consistent since the critical points at $x = \pm 1$ bracket the
three roots.

:::

## Curve Sketching and Analysis

### Critical Points

A **critical number** of $f$ is a value $c$ in the domain of $f$ where $f'(c) = 0$ or $f'(c)$ does
not exist.

### First Derivative Test

Let $c$ be a critical number:

- If $f'$ changes from positive to negative at $c$, then $f(c)$ is a **local maximum**.
- If $f'$ changes from negative to positive at $c$, then $f(c)$ is a **local minimum**.
- If $f'$ does not change sign at $c$, then $f(c)$ is neither.

### Second Derivative Test

Let $f''(c)$ exist with $f'(c) = 0$:

- If $f''(c) \gt 0$, then $f(c)$ is a **local minimum**.
- If $f''(c) \lt 0$, then $f(c)$ is a **local maximum**.
- If $f''(c) = 0$, the test is **inconclusive**.

**When to use which test.** The first derivative test always works. The second derivative test is
faster but sometimes inconclusive. When $f''(c) = 0$, you must fall back to the first derivative
test.

**Example where the second derivative test is inconclusive.** Consider $f(x) = x^4$.
$f'(x) = 4x^3 = 0$ gives $x = 0$, and $f''(x) = 12x^2$, so $f''(0) = 0$ -- the test is inconclusive.
But $f'(x) = 4x^3$ changes from negative to positive at $x = 0$, so $f$ has a local minimum at
$x = 0$ by the first derivative test.

### Optimization

To solve optimization problems:

1. Identify the quantity to optimize and the constraint.
2. Write an equation relating the variables.
3. Express the quantity as a function of a single variable.
4. Find critical points and apply the first or second derivative test.
5. Verify the result answers the original question.

:::info[Example]

A farmer has 200 ft of fencing. Find the dimensions of the rectangular pen that maximizes the area.

Let $x$ and $y$ be the dimensions. Then $2x + 2y = 200$, so $y = 100 - x$.

$$
A = xy = x(100 - x) = 100x - x^2
$$

$$
\frac{dA}{dx} = 100 - 2x = 0 \implies x = 50
$$

$$
\frac{d^2A}{dx^2} = -2 \lt 0 \quad \text{(confirms maximum)}
$$

So $x = 50$, $y = 50$, and the maximum area is $2500 \text{ ft}^2$.

:::

:::info[Example]

Find the minimum value of $f(x) = x + \frac{4}{x}$ for $x \gt 0$.

$$
f'(x) = 1 - \frac{4}{x^2} = 0 \implies x^2 = 4 \implies x = 2 \text{ (since } x \gt 0)
$$

$$
f(2) = 2 + 2 = 4
$$

$$
f''(2) = \frac{8}{8} = 1 \gt 0 \quad \text{(confirms minimum)}
$$

The minimum value is $4$ at $x = 2$.

:::

:::info[Example]

A rectangular box with a square base has volume $500 \text{ cm}^3$. The material for the base costs
twice as much as the material for the sides. Minimise the cost of the material.

Let the base have side length $x$ cm and height $h$ cm. Let the cost per unit area of the sides be
$c$. Then the base costs $2c$ per unit area.

Volume: $x^2 h = 500$, so $h = \frac{500}{x^2}$.

Cost:
$C = 2c \cdot x^2 + 4c \cdot xh = 2cx^2 + 4cx \cdot \frac{500}{x^2} = 2cx^2 + \frac{2000c}{x}$.

$$
\frac{dC}{dx} = 4cx - \frac{2000c}{x^2} = 0
$$

$$
4x^3 = 2000 \implies x^3 = 500 \implies x = \sqrt[3]{500} \approx 7.937 \text{ cm}
$$

$$
h = \frac{500}{500^{2/3}} = 500^{1/3} = \sqrt[3]{500} \approx 7.937 \text{ cm}
$$

The cost is minimised when the box is a cube. $\frac{d^2C}{dx^2} = 4c + \frac{4000c}{x^3} \gt 0$,
confirming a minimum.

:::

### Optimization on Closed Intervals

When the domain is a closed interval $[a, b]$, the absolute maximum and minimum occur at critical
points **or** at endpoints.

**Procedure:**

1. Find all critical points in $(a, b)$.
2. Evaluate $f$ at all critical points and at both endpoints.
3. The largest value is the absolute max; the smallest is the absolute min.

:::info[Example]

Find the absolute maximum and minimum of $f(x) = x^3 - 3x^2 + 4$ on $[-1, 4]$.

$$
f'(x) = 3x^2 - 6x = 3x(x - 2) = 0 \implies x = 0 \text{ or } x = 2
$$

$f(-1) = -1 - 3 + 4 = 0$, $f(0) = 4$, $f(2) = 8 - 12 + 4 = 0$, $f(4) = 64 - 48 + 4 = 20$.

Absolute minimum: $0$ at $x = -1$ and $x = 2$. Absolute maximum: $20$ at $x = 4$.

:::

## Common Pitfalls

1. **Forgetting the chain rule.** When differentiating a composition, always account for the inner
   function's derivative. For example, $\frac{d}{dx}[\sin(x^2)] \ne \cos(x^2)$.
2. **Incorrect sign in the quotient rule.** Remember: "Low d-High minus High d-Low, draw a line and
   square below."
3. **Confusing $\frac{d}{dx}[e^x]$ with $\frac{d}{dx}[x^e]$.** The former is $e^x$; the latter is
   $ex^{e-1}$.
4. **Implicit differentiation: forgetting to apply the chain rule to $y$ terms.** When
   differentiating $y^2$ with respect to $x$, the result is $2y\frac{dy}{dx}$, not $2y$.
5. **Units in related rates.** Always include units and check that they make dimensional sense.
6. **Not checking endpoints** in optimization problems on closed intervals.
7. **Using the second derivative test when it is inconclusive** ($f''(c) = 0$). Fall back to the
   first derivative test.
8. **Confusing the second derivative with the first.** The second derivative tells you about
   concavity, not the slope.
9. **Dropping negative signs** in implicit differentiation. Be systematic: write every $y$ term with
   $\frac{dy}{dx}$ attached.
10. **Linear approximation overreach.** The approximation $f(x) \approx f(a) + f'(a)(x-a)$ is
    accurate only near $x = a$. Using it far from $a$ can give wildly inaccurate results.

## Practice Questions

1. Find $\displaystyle\frac{dy}{dx}$ for $e^{xy} + y = x^2$ using implicit differentiation.

2. A spherical balloon is inflated at a rate of $10 \text{ cm}^3/\text{s}$. How fast is the radius
   increasing when the radius is 5 cm? ($V = \frac{4}{3}\pi r^3$)

3. Find all critical points of $f(x) = x^4 - 4x^3 + 6x^2 - 4x + 1$ and classify them using the
   second derivative test.

4. Use the Mean Value Theorem to show that $|\sin b - \sin a| \le |b - a|$ for all $a, b$.

5. Find the equation of the tangent line to $y = \ln(x^2 + 1)$ at $x = 1$.

6. A 15 ft ladder leans against a wall. The bottom slides away at 2 ft/s. How fast is the angle
   between the ladder and the ground changing when the bottom is 9 ft from the wall?

7. Find the absolute maximum and minimum of $f(x) = x^3 - 3x^2 + 4$ on $[-1, 4]$.

8. Use linear approximation to estimate $(1.02)^{10}$.

9. Find $\displaystyle\frac{d}{dx}\left[\frac{x^2 + 1}{e^{2x}}\right]$ and find all stationary
   points.

10. Find $\displaystyle\frac{d^2y}{dx^2}$ for $x^3 + y^3 = 6xy$ at the point $(3, 3)$.

11. A rectangular box with a square base has volume $500 \text{ cm}^3$. The material for the base
    costs twice as much as the material for the sides. Minimise the cost of the material.

12. Prove that the derivative of $f(x) = x^3$ is $f'(x) = 3x^2$ from first principles.

13. Find $\displaystyle\frac{dy}{dx}$ for $\sin(x + y) = x \cos y$.

14. Find the inflection points of $f(x) = x^4 - 6x^2 + 4$.

15. A conical tank (vertex pointing down) has radius 5 ft at the top and height 10 ft. Water is
    pumped in at 3 $\text{ft}^3/\text{min}$. How fast is the water level rising when the water is 6
    ft deep?

16. Find the dimensions of the rectangle of maximum area that can be inscribed in a semicircle of
    radius $r$.
