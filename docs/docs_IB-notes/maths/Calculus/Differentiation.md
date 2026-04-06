---
id: differentiation
title: Differentiation
description:
  IB Mathematics — differentiation rules, techniques, applications, and exam-style problems.
slug: differentiation
---

## Limits and Continuity

### Intuitive Notion of a Limit

The limit of a function $f(x)$ as $x$ approaches $a$ is the value that $f(x)$ approaches, regardless
of whether $f(a)$ is defined:

$$
\lim_{x \to a} f(x) = L
$$

This means that as $x$ gets arbitrarily close to $a$, $f(x)$ gets arbitrarily close to $L$.

### Left-Hand and Right-Hand Limits

A two-sided limit exists if and only if both one-sided limits exist and are equal:

$$
\lim_{x \to a} f(x) = L \iff \lim_{x \to a^-} f(x) = \lim_{x \to a^+} f(x) = L
$$

:::info[Example]

Find $\displaystyle\lim_{x \to 0} \frac{|x|}{x}$.

$$
\lim_{x \to 0^-} \frac{|x|}{x} = \lim_{x \to 0^-} \frac{-x}{x} = -1
$$

$$
\lim_{x \to 0^+} \frac{|x|}{x} = \lim_{x \to 0^+} \frac{x}{x} = 1
$$

Since the one-sided limits are not equal, the limit does not exist.

:::

### Common Limits

| Limit                                                             | Value |
| ----------------------------------------------------------------- | ----- |
| $\displaystyle\lim_{x \to 0} \frac{\sin x}{x}$                    | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{1 - \cos x}{x}$                | $0$   |
| $\displaystyle\lim_{x \to \infty} \frac{1}{x}$                    | $0$   |
| $\displaystyle\lim_{x \to \infty} \left(1 + \frac{1}{x}\right)^x$ | $e$   |
| $\displaystyle\lim_{x \to 0} \frac{e^x - 1}{x}$                   | $1$   |
| $\displaystyle\lim_{x \to 0} \frac{\ln(1+x)}{x}$                  | $1$   |

### The Squeeze Theorem

If $g(x) \le f(x) \le h(x)$ for all $x$ near $a$ (except possibly at $a$), and:

$$
\lim_{x \to a} g(x) = \lim_{x \to a} h(x) = L
$$

then $\displaystyle\lim_{x \to a} f(x) = L$.

:::info[Example]

Show that $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

Since $-1 \le \sin\!\left(\frac{1}{x}\right) \le 1$, we have
$-x^2 \le x^2 \sin\!\left(\frac{1}{x}\right) \le x^2$.

Both $\displaystyle\lim_{x \to 0}(-x^2) = 0$ and $\displaystyle\lim_{x \to 0} x^2 = 0$.

By the squeeze theorem, $\displaystyle\lim_{x \to 0} x^2 \sin\!\left(\frac{1}{x}\right) = 0$.

:::

### Continuity

A function $f$ is **continuous** at $x = a$ if all three conditions hold:

1. $f(a)$ is defined
2. $\displaystyle\lim_{x \to a} f(x)$ exists
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$

:::warning[Exam Tip]

When asked whether a piecewise function is continuous at a boundary point, always check that the
left-hand limit, right-hand limit, and function value all agree.

:::

---

## The Derivative

### Definition from First Principles

The derivative of $f$ at $x = a$ is defined as:

$$
f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}
$$

This limit, when it exists, gives the instantaneous rate of change of $f$ at $x = a$, and equals the
gradient of the tangent line to the curve $y = f(x)$ at that point.

### Alternative Form

$$
f'(x) = \lim_{\Delta x \to 0} \frac{f(x + \Delta x) - f(x)}{\Delta x}
$$

### Differentiability Implies Continuity

If $f$ is differentiable at $x = a$, then $f$ is continuous at $x = a$. The converse is not true: a
function can be continuous but not differentiable (e.g., $f(x) = |x|$ at $x = 0$).

:::info[Example]

Differentiate $f(x) = x^2$ from first principles.

$$
\begin{aligned}
f'(x) &= \lim_{h \to 0} \frac{(x+h)^2 - x^2}{h} \\[6pt]
&= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h} \\[6pt]
&= \lim_{h \to 0} \frac{2xh + h^2}{h} \\[6pt]
&= \lim_{h \to 0}(2x + h) \\[6pt]
&= 2x
\end{aligned}
$$

:::

### Notation for Derivatives

Several notations are equivalent:

- $f'(x)$ — Lagrange notation (prime notation)
- $\dfrac{dy}{dx}$ — Leibniz notation
- $\dfrac{d}{dx}[f(x)]$ — operator notation
- $\dot{y}$ — Newton notation (time derivatives in physics)

---

## Differentiation Rules

### The Power Rule

For $n \in \mathbb{R}$:

$$
\frac{d}{dx}[x^n] = nx^{n-1}
$$

### Constant Multiple Rule

$$
\frac{d}{dx}[cf(x)] = c \cdot f'(x)
$$

### Sum and Difference Rule

$$
\frac{d}{dx}[f(x) \pm g(x)] = f'(x) \pm g'(x)
$$

### The Product Rule

If $u = f(x)$ and $v = g(x)$, then:

$$
\frac{d}{dx}[uv] = u\frac{dv}{dx} + v\frac{du}{dx}
$$

:::info[Example]

Differentiate $f(x) = x^3 \sin x$.

$$
f'(x) = 3x^2 \sin x + x^3 \cos x
$$

:::

### The Quotient Rule

$$
\frac{d}{dx}\left[\frac{u}{v}\right] = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}
$$

:::warning[Exam Tip]

A useful mnemonic for the quotient rule: "low d-high minus high d-low, over the square of what's
below."

:::

:::info[Example]

Differentiate $\displaystyle f(x) = \frac{x^2 + 1}{x - 3}$.

Let $u = x^2 + 1$ and $v = x - 3$. Then $u' = 2x$ and $v' = 1$.

$$
\begin{aligned}
f'(x) &= \frac{(x-3)(2x) - (x^2+1)(1)}{(x-3)^2} \\[6pt]
&= \frac{2x^2 - 6x - x^2 - 1}{(x-3)^2} \\[6pt]
&= \frac{x^2 - 6x - 1}{(x-3)^2}
\end{aligned}
$$

:::

### The Chain Rule

If $y = f(g(x))$, then:

$$
\frac{dy}{dx} = f'(g(x)) \cdot g'(x)
$$

Or in Leibniz notation, if $y = f(u)$ and $u = g(x)$:

$$
\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}
$$

:::info[Example]

Differentiate $f(x) = (3x^2 + 1)^5$.

Let $u = 3x^2 + 1$, so $y = u^5$.

$$
\frac{dy}{dx} = 5u^4 \cdot 6x = 30x(3x^2+1)^4
$$

:::

:::info[Example]

Differentiate $\displaystyle f(x) = \sin(2x^2 + 1)$.

Let $u = 2x^2 + 1$, so $y = \sin u$.

$$
\frac{dy}{dx} = \cos u \cdot 4x = 4x\cos(2x^2+1)
$$

:::

---

## Derivatives of Standard Functions

| $f(x)$      | $f'(x)$                    |
| ----------- | -------------------------- |
| $x^n$       | $nx^{n-1}$                 |
| $e^x$       | $e^x$                      |
| $a^x$       | $a^x \ln a$                |
| $\ln x$     | $\dfrac{1}{x}$             |
| $\log_a x$  | $\dfrac{1}{x \ln a}$       |
| $\sin x$    | $\cos x$                   |
| $\cos x$    | $-\sin x$                  |
| $\tan x$    | $\sec^2 x$                 |
| $\csc x$    | $-\csc x \cot x$           |
| $\sec x$    | $\sec x \tan x$            |
| $\cot x$    | $-\csc^2 x$                |
| $\arcsin x$ | $\dfrac{1}{\sqrt{1-x^2}}$  |
| $\arccos x$ | $\dfrac{-1}{\sqrt{1-x^2}}$ |
| $\arctan x$ | $\dfrac{1}{1+x^2}$         |

:::warning[Exam Tip]

The IB formula booklet provides the derivatives of $\sin x$, $\cos x$, $\tan x$, $e^x$, and $\ln x$.
Memorise the derivatives of the reciprocal trig functions and inverse trig functions as they may not
be in all booklets.

:::

---

## Implicit Differentiation

When a function is not given explicitly as $y = f(x)$ but as a relation between $x$ and $y$, we
differentiate both sides with respect to $x$ and solve for $\dfrac{dy}{dx}$.

### Key Idea

When differentiating a term involving $y$ with respect to $x$, use the chain rule:

$$
\frac{d}{dx}[y^n] = ny^{n-1}\frac{dy}{dx}
$$

:::info[Example]

Find $\dfrac{dy}{dx}$ for $x^2 + y^2 = 25$.

Differentiate both sides with respect to $x$:

$$
2x + 2y\frac{dy}{dx} = 0
$$

$$
\frac{dy}{dx} = -\frac{x}{y}
$$

At the point $(3, 4)$: $\dfrac{dy}{dx} = -\dfrac{3}{4}$.

:::

:::info[Example]

Find $\dfrac{dy}{dx}$ for $x^3 + y^3 = 6xy$.

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

### Second Derivatives Implicitly

To find $\dfrac{d^2y}{dx^2}$, differentiate $\dfrac{dy}{dx}$ again, remembering that
$\dfrac{dy}{dx}$ is an expression in both $x$ and $y$.

:::info[Example]

Find $\dfrac{d^2y}{dx^2}$ for $x^2 + y^2 = 25$.

We have $\dfrac{dy}{dx} = -\dfrac{x}{y}$.

Differentiate with respect to $x$:

$$
\frac{d^2y}{dx^2} = -\frac{y \cdot 1 - x \cdot \frac{dy}{dx}}{y^2}
$$

Substitute $\dfrac{dy}{dx} = -\dfrac{x}{y}$:

$$
\frac{d^2y}{dx^2} = -\frac{y - x\left(-\frac{x}{y}\right)}{y^2} = -\frac{y + \frac{x^2}{y}}{y^2} = -\frac{y^2 + x^2}{y^3} = -\frac{25}{y^3}
$$

:::

---

## Related Rates

When two or more quantities are related by an equation, their rates of change are also related.

### Strategy

1. Identify the quantities that are changing and the rate(s) given.
2. Write an equation relating the quantities.
3. Differentiate both sides with respect to time ($t$).
4. Substitute known values and solve for the unknown rate.

:::info[Example]

A spherical balloon is being inflated at a rate of $10\text{ cm}^3\text{/s}$. Find the rate at which
the radius is increasing when the radius is $5\text{ cm}$.

Volume of a sphere: $V = \dfrac{4}{3}\pi r^3$.

Differentiate with respect to $t$:

$$
\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}
$$

Substitute $\dfrac{dV}{dt} = 10$ and $r = 5$:

$$
10 = 4\pi(25)\frac{dr}{dt}
$$

$$
\frac{dr}{dt} = \frac{10}{100\pi} = \frac{1}{10\pi} \approx 0.0318 \text{ cm/s}
$$

:::

:::info[Example]

A ladder $10\text{ m}$ long rests against a vertical wall. The bottom slides away from the wall at
$1\text{ m/s}$. How fast is the top sliding down when the bottom is $6\text{ m}$ from the wall?

By Pythagoras: $x^2 + y^2 = 100$.

Differentiate: $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$.

When $x = 6$: $y = \sqrt{100-36} = 8$.

$$
2(6)(1) + 2(8)\frac{dy}{dt} = 0
$$

$$
\frac{dy}{dt} = -\frac{12}{16} = -0.75 \text{ m/s}
$$

The negative sign means the top is sliding down.

:::

---

## Second Derivatives and Higher Derivatives

### Notation

$$
f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)
$$

$$
f'''(x) = \frac{d^3y}{dx^3} = \frac{d}{dx}\left(\frac{d^2y}{dx^2}\right)
$$

:::info[Example]

Find $f''(x)$ for $f(x) = x^4 - 3x^3 + 2x - 7$.

$$
f'(x) = 4x^3 - 9x^2 + 2
$$

$$
f''(x) = 12x^2 - 18x
$$

$$
f'''(x) = 24x - 18
$$

:::

---

## Applications of Differentiation

### Tangents and Normals

The **tangent** to $y = f(x)$ at $x = a$ has gradient $f'(a)$ and equation:

$$
y - f(a) = f'(a)(x - a)
$$

The **normal** is perpendicular to the tangent, so its gradient is $-\dfrac{1}{f'(a)}$ (when
$f'(a) \neq 0$):

$$
y - f(a) = -\frac{1}{f'(a)}(x - a)
$$

:::info[Example]

Find the equation of the tangent and normal to $y = x^3 - 3x + 2$ at $x = 1$.

At $x = 1$: $y = 1 - 3 + 2 = 0$ and $y' = 3x^2 - 3 = 0$.

Since $y' = 0$, the tangent is horizontal: $y = 0$.

The normal is vertical: $x = 1$.

:::

### Increasing and Decreasing Functions

- $f$ is **increasing** on an interval if $f'(x) \gt 0$ for all $x$ in that interval.
- $f$ is **decreasing** on an interval if $f'(x) \lt 0$ for all $x$ in that interval.
- $f$ is **stationary** at $x = a$ if $f'(a) = 0$.

### Stationary Points

A **stationary point** occurs where $f'(x) = 0$. There are three types:

| Type                | First Derivative Test        | Second Derivative Test            |
| ------------------- | ---------------------------- | --------------------------------- |
| Local maximum       | $f'$ changes from $+$ to $-$ | $f''(x) \lt 0$                    |
| Local minimum       | $f'$ changes from $-$ to $+$ | $f''(x) \gt 0$                    |
| Point of inflection | $f'$ does not change sign    | $f''(x) = 0$ (inconclusive alone) |

:::warning[Exam Tip]

When $f''(x) = 0$ at a stationary point, the second derivative test is inconclusive. You must use
the first derivative test or check the sign of $f'$ on either side.

:::

:::info[Example]

Find and classify the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$.

$$
f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)
$$

Setting $f'(x) = 0$: $x = 1$ or $x = 3$.

$$
f''(x) = 6x - 12
$$

At $x = 1$: $f''(1) = -6 \lt 0$, so local maximum. $f(1) = 1 - 6 + 9 + 1 = 5$. Point: $(1, 5)$.

At $x = 3$: $f''(3) = 6 \gt 0$, so local minimum. $f(3) = 27 - 54 + 27 + 1 = 1$. Point: $(3, 1)$.

:::

### Concavity and Points of Inflection

- $f$ is **concave up** on an interval if $f''(x) \gt 0$ (the graph curves upward).
- $f$ is **concave down** on an interval if $f''(x) \lt 0$ (the graph curves downward).
- A **point of inflection** occurs where the concavity changes, i.e., $f''(x)$ changes sign.

:::warning[Exam Tip]

Not every point where $f''(x) = 0$ is a point of inflection. The concavity must actually change.
Always verify by checking the sign of $f''(x)$ on either side.

:::

:::info[Example]

Find the points of inflection of $f(x) = x^4 - 4x^3$.

$$
f'(x) = 4x^3 - 12x^2
$$

$$
f''(x) = 12x^2 - 24x = 12x(x - 2)
$$

$f''(x) = 0$ when $x = 0$ or $x = 2$.

| Interval        | Sign of $f''$ | Concavity    |
| --------------- | ------------- | ------------ |
| $x \lt 0$       | $+$           | Concave up   |
| $0 \lt x \lt 2$ | $-$           | Concave down |
| $x \gt 2$       | $+$           | Concave up   |

Concavity changes at both $x = 0$ and $x = 2$, so both are points of inflection.

At $x = 0$: $f(0) = 0$. Point: $(0, 0)$.

At $x = 2$: $f(2) = 16 - 32 = -16$. Point: $(2, -16)$.

:::

### Optimization

Optimization problems involve finding the maximum or minimum value of a quantity subject to
constraints.

### Strategy

1. Define variables and identify the quantity to be optimised.
2. Write an expression for the quantity in terms of a single variable.
3. Differentiate and set the derivative equal to zero.
4. Verify that the critical point gives a maximum or minimum.
5. Answer the question in context.

:::info[Example]

A piece of wire $100\text{ cm}$ long is bent to form a rectangle. Find the dimensions that maximise
the area.

Let the dimensions be $x$ and $y$. Then $2x + 2y = 100$, so $y = 50 - x$.

Area: $A = xy = x(50 - x) = 50x - x^2$.

$$
\frac{dA}{dx} = 50 - 2x = 0 \implies x = 25
$$

$$
\frac{d^2A}{dx^2} = -2 \lt 0 \implies \text{maximum}
$$

So $x = 25\text{ cm}$, $y = 25\text{ cm}$. The rectangle is a square with area $625\text{ cm}^2$.

:::

:::info[Example]

An open-top cylindrical can is to hold $500\text{ cm}^3$ of liquid. Find the dimensions that
minimise the surface area.

Volume: $V = \pi r^2 h = 500$, so $h = \dfrac{500}{\pi r^2}$.

Surface area (no top): $A = \pi r^2 + 2\pi r h = \pi r^2 + \dfrac{1000}{r}$.

$$
\frac{dA}{dr} = 2\pi r - \frac{1000}{r^2} = 0
$$

$$
2\pi r = \frac{1000}{r^2} \implies 2\pi r^3 = 1000 \implies r^3 = \frac{500}{\pi}
$$

$$
r = \left(\frac{500}{\pi}\right)^{1/3} \approx 5.42 \text{ cm}
$$

$$
h = \frac{500}{\pi \cdot \left(\frac{500}{\pi}\right)^{2/3}} = \left(\frac{500}{\pi}\right)^{1/3} \approx 5.42 \text{ cm}
$$

The optimal can has $h = 2r$, i.e., height equals diameter.

:::

---

## L'Hopital's Rule

If $\displaystyle\lim_{x \to a}\frac{f(x)}{g(x)}$ gives an indeterminate form $\dfrac{0}{0}$ or
$\dfrac{\pm\infty}{\pm\infty}$, then:

$$
\lim_{x \to a}\frac{f(x)}{g(x)} = \lim_{x \to a}\frac{f'(x)}{g'(x)}
$$

provided the limit on the right exists.

:::info[Example]

Evaluate $\displaystyle\lim_{x \to 0}\frac{e^x - 1 - x}{x^2}$.

Direct substitution gives $\dfrac{0}{0}$, so apply L'Hopital's rule:

$$
\lim_{x \to 0}\frac{e^x - 1}{2x}
$$

Still $\dfrac{0}{0}$, apply again:

$$
\lim_{x \to 0}\frac{e^x}{2} = \frac{1}{2}
$$

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Let $f(x) = 2x^3 - 3x^2 - 36x + 5$.

**(a)** Find $f'(x)$.

$$
f'(x) = 6x^2 - 6x - 36
$$

**(b)** Find the $x$-coordinates of the stationary points.

$$
6x^2 - 6x - 36 = 0 \implies x^2 - x - 6 = 0 \implies (x-3)(x+2) = 0
$$

$x = 3$ or $x = -2$.

**(c)** Determine the nature of each stationary point.

$$
f''(x) = 12x - 6
$$

At $x = -2$: $f''(-2) = -30 \lt 0$, so local maximum.

At $x = 3$: $f''(3) = 30 \gt 0$, so local minimum.

**(d)** Find the equation of the tangent to the curve at $x = 0$.

$f(0) = 5$ and $f'(0) = -36$.

$$
y - 5 = -36(x - 0) \implies y = -36x + 5
$$

### Question 2 (Paper 2 style)

A rectangular garden is to be constructed adjacent to a house, with the house forming one side of
the rectangle. Fencing is required for the other three sides. $60\text{ m}$ of fencing is available.

**(a)** If the side parallel to the house has length $x\text{ m}$, show that the area is:

$$
A = x\left(30 - \frac{x}{2}\right) = 30x - \frac{x^2}{2}
$$

The two perpendicular sides have total length $60 - x$, so each is
$\dfrac{60-x}{2} = 30 - \dfrac{x}{2}$.

$$
A = x\left(30 - \frac{x}{2}\right)
$$

**(b)** Find the value of $x$ that maximises the area.

$$
\frac{dA}{dx} = 30 - x = 0 \implies x = 30
$$

$$
\frac{d^2A}{dx^2} = -1 \lt 0 \implies \text{maximum}
$$

Maximum area $= 30 \times 15 = 450\text{ m}^2$.

### Question 3 (Paper 1 style)

Given $x^2 + xy + y^2 = 7$:

**(a)** Find $\dfrac{dy}{dx}$ in terms of $x$ and $y$.

$$
2x + y + x\frac{dy}{dx} + 2y\frac{dy}{dx} = 0
$$

$$
(x + 2y)\frac{dy}{dx} = -(2x + y)
$$

$$
\frac{dy}{dx} = -\frac{2x+y}{x+2y}
$$

**(b)** Verify that the point $(1, 2)$ lies on the curve and find the gradient at that point.

$1 + 2 + 4 = 7$. Yes.

$$
\frac{dy}{dx}\bigg|_{(1,2)} = -\frac{2+2}{1+4} = -\frac{4}{5}
$$

### Question 4 (Paper 2 style)

The curve $C$ has equation $y = x e^{-x}$.

**(a)** Find $\dfrac{dy}{dx}$.

Using the product rule with $u = x$ and $v = e^{-x}$:

$$
\frac{dy}{dx} = 1 \cdot e^{-x} + x \cdot (-e^{-x}) = e^{-x}(1 - x)
$$

**(b)** Find the coordinates of the stationary point and determine its nature.

$\dfrac{dy}{dx} = 0 \implies 1 - x = 0 \implies x = 1$.

$y = e^{-1} = \dfrac{1}{e}$.

$\dfrac{d^2y}{dx^2} = -e^{-x}(1-x) + e^{-x}(-1) = e^{-x}(x - 2)$.

At $x = 1$: $\dfrac{d^2y}{dx^2} = e^{-1}(-1) \lt 0$, so local maximum at
$\left(1, \dfrac{1}{e}\right)$.

**(c)** Find the point of inflection.

$\dfrac{d^2y}{dx^2} = 0 \implies x = 2$.

At $x = 2$: $y = 2e^{-2} = \dfrac{2}{e^2}$.

Since $\dfrac{d^2y}{dx^2}$ changes sign at $x = 2$, this is a point of inflection at
$\left(2, \dfrac{2}{e^2}\right)$.

**(d)** Find the equation of the tangent at $x = 0$.

$y(0) = 0$ and $y'(0) = e^0(1) = 1$.

$$
y = x
$$

### Question 5 (Paper 1 style)

The radius of a circle is increasing at a rate of $0.5\text{ cm/s}$. Find the rate of change of the
area when the radius is $4\text{ cm}$.

$$
A = \pi r^2
$$

$$
\frac{dA}{dt} = 2\pi r \frac{dr}{dt} = 2\pi(4)(0.5) = 4\pi \text{ cm}^2\text{/s}
$$

### Question 6 (Paper 2 style)

Let $f(x) = \dfrac{x}{x^2 + 1}$.

**(a)** Find $f'(x)$.

Using the quotient rule with $u = x$, $v = x^2 + 1$:

$$
f'(x) = \frac{(x^2+1)(1) - x(2x)}{(x^2+1)^2} = \frac{1 - x^2}{(x^2+1)^2}
$$

**(b)** Find the range of values of $x$ for which $f$ is increasing.

$f'(x) \gt 0 \implies 1 - x^2 \gt 0 \implies x^2 \lt 1 \implies -1 \lt x \lt 1$.

**(c)** Find the stationary points.

$f'(x) = 0 \implies x = \pm 1$.

At $x = 1$: $f(1) = \dfrac{1}{2}$.

At $x = -1$: $f(-1) = -\dfrac{1}{2}$.

Since $f'$ changes from $+$ to $-$ at $x = 1$: local maximum at $\left(1, \dfrac{1}{2}\right)$.

Since $f'$ changes from $-$ to $+$ at $x = -1$: local minimum at $\left(-1, -\dfrac{1}{2}\right)$.

**(d)** Find the equations of the asymptotes.

As $x \to \pm\infty$: $f(x) \to 0$, so $y = 0$ is a horizontal asymptote.

The denominator $x^2 + 1 \neq 0$ for all real $x$, so there are no vertical asymptotes.

---

## Summary of Key Results

| Concept                | Formula                                                     |
| ---------------------- | ----------------------------------------------------------- |
| First principles       | $\displaystyle f'(x) = \lim_{h \to 0}\frac{f(x+h)-f(x)}{h}$ |
| Power rule             | $\dfrac{d}{dx}[x^n] = nx^{n-1}$                             |
| Product rule           | $(uv)' = u'v + uv'$                                         |
| Quotient rule          | $\left(\dfrac{u}{v}\right)' = \dfrac{u'v - uv'}{v^2}$       |
| Chain rule             | $\dfrac{dy}{dx} = \dfrac{dy}{du} \cdot \dfrac{du}{dx}$      |
| Tangent at $(a, f(a))$ | $y - f(a) = f'(a)(x - a)$                                   |
| Normal gradient        | $-\dfrac{1}{f'(a)}$                                         |
| Increasing             | $f'(x) \gt 0$                                               |
| Decreasing             | $f'(x) \lt 0$                                               |
| Local max              | $f'(a) = 0$, $f''(a) \lt 0$                                 |
| Local min              | $f'(a) = 0$, $f''(a) \gt 0$                                 |

:::tip[Exam Strategy]

For Paper 2 differentiation questions, always show your working clearly. State which rule you are
using (product, quotient, chain) and lay out the substitution. Examiners award method marks for
correct application of rules even if arithmetic errors occur later.

:::
