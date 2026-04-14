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

### Quotient Rule

$$
\frac{d}{dx}\!\left[\frac{f(x)}{g(x)}\right] = \frac{g(x)f'(x) - f(x)g'(x)}{[g(x)]^2}
$$

### Chain Rule

$$
\frac{d}{dx}[f(g(x))] = f'(g(x)) \cdot g'(x)
$$

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

## Inverse Trigonometric Derivatives

$$
\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1 - x^2}} \qquad \frac{d}{dx}[\arccos x] = \frac{-1}{\sqrt{1 - x^2}}
$$

$$
\frac{d}{dx}[\arctan x] = \frac{1}{1 + x^2}
$$

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

### Mean Value Theorem (MVT)

If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one
$c \in (a, b)$ such that:

$$
f'(c) = \frac{f(b) - f(a)}{b - a}
$$

This means the instantaneous rate of change equals the average rate of change at some interior
point.

### Rolle's Theorem

If $f$ is continuous on $[a, b]$, differentiable on $(a, b)$, and $f(a) = f(b)$, then there exists
at least one $c \in (a, b)$ such that $f'(c) = 0$.

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
