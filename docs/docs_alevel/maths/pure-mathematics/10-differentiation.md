---
title: Differentiation
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: differentiation
---

## Board Coverage

| Board      | Paper      | Notes                                                            |
| ---------- | ---------- | ---------------------------------------------------------------- |
| AQA        | Paper 1, 2 | First principles, rules, applications in P1; chain/product in P2 |
| Edexcel    | P1, P2     | Similar split                                                    |
| OCR (A)    | Paper 1, 2 | Includes connected rates in P2                                   |
| CIE (9709) | P1, P2, P3 | Basic differentiation in P1; product/quotient/chain in P2/P3     |

:::info The formula booklet lists derivatives of standard functions. You must know how to apply the
product, quotient, and chain rules, and how to find stationary points. :::

<hr />

## 1. The Derivative from First Principles

### 1.1 Definition

**Definition.** The derivative of $f$ at $x$ is

$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

provided this limit exists. If it does, we say $f$ is **differentiable** at $x$.

**Geometric interpretation.** The quantity $\dfrac{f(x+h)-f(x)}{h}$ is the gradient of the secant
line through the points $(x, f(x))$ and $(x+h, f(x+h))$. As $h \to 0$, this secant approaches the
tangent, so $f'(x)$ is the gradient of the tangent at $x$.

:::info A function is differentiable at a point if and only if it is smooth (no sharp corners)
there. Continuity is necessary but not sufficient — $f(x) = |x|$ is continuous at $x=0$ but not
differentiable. :::

<hr />

## 2. Derivative of $x^n$ from First Principles

**Theorem.** For $n \in \mathbb{N}$, $\dfrac{d}{dx}x^n = nx^{n-1}$.

**Proof.** By the limit definition:

$$f'(x) = \lim_{h\to 0}\frac{(x+h)^n - x^n}{h}$$

Expanding $(x+h)^n$ using the binomial theorem:

$$(x+h)^n = x^n + \binom{n}{1}x^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n$$

Subtracting $x^n$ and dividing by $h$:

$$\frac{(x+h)^n - x^n}{h} = \binom{n}{1}x^{n-1} + \binom{n}{2}x^{n-2}h + \cdots + h^{n-1}$$

Taking $h \to 0$, every term containing $h$ vanishes:

$$f'(x) = \binom{n}{1}x^{n-1} = nx^{n-1} \quad \blacksquare$$

This proof extends to negative and fractional powers using the limit definition with the generalised
binomial theorem or logarithmic differentiation.

**Intuition.** The power rule says: "bring the power down and reduce it by one." This works because
the leading-order term in $(x+h)^n - x^n$ is $nx^{n-1}h$, and dividing by $h$ leaves $nx^{n-1}$.

<hr />

## 3. The Product Rule

**Theorem.** If $u = f(x)$ and $v = g(x)$ are differentiable, then

$$\frac{d}{dx}(uv) = u\frac{dv}{dx} + v\frac{du}{dx}$$

### 3.1 Proof from first principles

Let $F(x) = f(x)g(x)$. Then:

$$
\begin{aligned}
F'(x) &= \lim_{h\to 0}\frac{F(x+h)-F(x)}{h} \\
&= \lim_{h\to 0}\frac{f(x+h)g(x+h) - f(x)g(x)}{h}
\end{aligned}
$$

We add and subtract $f(x+h)g(x)$:

$$= \lim_{h\to 0}\frac{f(x+h)g(x+h) - f(x+h)g(x) + f(x+h)g(x) - f(x)g(x)}{h}$$

$$= \lim_{h\to 0}\left[f(x+h)\frac{g(x+h)-g(x)}{h} + g(x)\frac{f(x+h)-f(x)}{h}\right]$$

Since $f$ is differentiable (hence continuous), $\lim_{h\to 0}f(x+h) = f(x)$:

$$= f(x) \cdot g'(x) + g(x) \cdot f'(x) \quad \blacksquare$$

**Intuition.** Think of the area of a rectangle with sides $u$ and $v$. If $u$ changes by $\delta u$
and $v$ by $\delta v$, the change in area is approximately $v\,\delta u + u\,\delta v$ (the two thin
strips along the edges; the corner piece $\delta u\,\delta v$ is negligible).

<hr />

## 4. The Quotient Rule

**Theorem.** If $u = f(x)$ and $v = g(x)$ are differentiable with $v \neq 0$, then

$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2}$$

### 4.1 Proof from the product rule

Write $\dfrac{u}{v} = u \cdot v^{-1}$. Applying the product rule:

$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{du}{dx} \cdot v^{-1} + u \cdot \frac{d}{dx}(v^{-1})$$

By the chain rule, $\dfrac{d}{dx}(v^{-1}) = -v^{-2}\dfrac{dv}{dx}$:

$$= \frac{1}{v}\frac{du}{dx} - \frac{u}{v^2}\frac{dv}{dx} = \frac{v\frac{du}{dx} - u\frac{dv}{dx}}{v^2} \quad \blacksquare$$

:::warning The quotient rule has a **minus** sign in the numerator: $v\,u' - u\,v'$. Getting this
the wrong way around is one of the most common errors in A Level mathematics. :::

<hr />

## 5. The Chain Rule

**Theorem.** If $y = f(g(x))$, then

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

where $u = g(x)$.

### 5.1 Proof (informal)

If $x$ changes by $\delta x$, then $u$ changes by approximately $g'(x)\,\delta x$, and $y$ changes
by approximately $f'(u) \cdot g'(x)\,\delta x$. Dividing by $\delta x$ and taking the limit:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

A fully rigorous proof uses the mean value theorem to handle the case when $g'(x) = 0$.

**Intuition.** The chain rule handles composite functions: "differentiate the outer function, then
multiply by the derivative of the inner function." Think of it as a gearing mechanism: a small turn
in $x$ causes a turn in $u$, which causes a turn in $y$, and the overall effect is the product of
the two gear ratios.

<hr />

## 6. Derivatives of Standard Functions

### 6.1 Derivative of $\sin x$ from first principles

**Theorem.** $\dfrac{d}{dx}\sin x = \cos x$.

**Proof.** Using the limit definition and the compound angle formula
$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$:

$$
\begin{aligned}
\frac{d}{dx}\sin x &= \lim_{h\to 0}\frac{\sin(x+h) - \sin x}{h} \\
&= \lim_{h\to 0}\frac{\sin x\cos h + \cos x\sin h - \sin x}{h} \\
&= \lim_{h\to 0}\left[\sin x \cdot \frac{\cos h - 1}{h} + \cos x \cdot \frac{\sin h}{h}\right]
\end{aligned}
$$

Using the standard limits $\displaystyle\lim_{h\to 0}\frac{\sin h}{h} = 1$ and
$\displaystyle\lim_{h\to 0}\frac{\cos h - 1}{h} = 0$:

$$= \sin x \cdot 0 + \cos x \cdot 1 = \cos x \quad \blacksquare$$

### 6.2 Derivative of $\cos x$

**Theorem.** $\dfrac{d}{dx}\cos x = -\sin x$.

**Proof.** Write $\cos x = \sin\!\left(\dfrac{\pi}{2} - x\right)$. By the chain rule:

$$\frac{d}{dx}\cos x = \cos\!\left(\frac{\pi}{2}-x\right) \cdot (-1) = -\sin x \quad \blacksquare$$

### 6.3 Derivative of $e^x$

As proved in the Exponentials and Logarithms chapter: $\dfrac{d}{dx}e^x = e^x$.

### 6.4 Derivative of $\ln x$

From the Fundamental Theorem of Calculus applied to $\ln x = \displaystyle\int_1^x \frac{1}{t}\,dt$:

$$\frac{d}{dx}\ln x = \frac{1}{x}$$

### 6.5 Derivative of $\tan x$

$$\frac{d}{dx}\tan x = \frac{d}{dx}\left(\frac{\sin x}{\cos x}\right) = \frac{\cos x \cdot \cos x - \sin x \cdot (-\sin x)}{\cos^2 x} = \frac{\cos^2 x + \sin^2 x}{\cos^2 x} = \sec^2 x$$

### 6.6 Summary table

| $f(x)$   | $f'(x)$    |
| -------- | ---------- |
| $x^n$    | $nx^{n-1}$ |
| $e^x$    | $e^x$      |
| $e^{kx}$ | $ke^{kx}$  |
| $\ln x$  | $1/x$      |
| $\sin x$ | $\cos x$   |
| $\cos x$ | $-\sin x$  |
| $\tan x$ | $\sec^2 x$ |

<hr />

## 7. Second Derivatives and Stationary Points

### 7.1 Definition

The **second derivative** is the derivative of the first derivative:

$$f''(x) = \frac{d^2y}{dx^2} = \frac{d}{dx}\left(\frac{dy}{dx}\right)$$

### 7.2 Stationary points

**Definition.** A point $x = a$ is a **stationary point** of $f$ if $f'(a) = 0$.

There are three types:

| Type                | Condition                          | Shape   |
| ------------------- | ---------------------------------- | ------- |
| Maximum             | $f'(a) = 0$, $f''(a) \lt{} 0$      | $\cap$  |
| Minimum             | $f'(a) = 0$, $f''(a) \gt{} 0$      | $\cup$  |
| Point of inflection | $f'(a) = 0$, $f''(a) = 0$ (may be) | S-shape |

### 7.3 Proof of the second derivative test (Taylor expansion intuition)

Near a stationary point $x = a$, we can approximate $f$ using its Taylor expansion:

$$f(x) \approx f(a) + f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2$$

Since $f'(a) = 0$ at a stationary point:

$$f(x) - f(a) \approx \frac{f''(a)}{2}(x-a)^2$$

- If $f''(a) \gt{} 0$: $f(x) - f(a) \gt{} 0$ for $x \neq a$, so $f(a)$ is a **minimum**.
- If $f''(a) \lt{} 0$: $f(x) - f(a) \lt{} 0$ for $x \neq a$, so $f(a)$ is a **maximum**.
- If $f''(a) = 0$: the test is inconclusive; use a nature table or higher derivatives.

:::warning The second derivative test is **sufficient but not necessary**. If $f''(a) = 0$, the
point could still be a maximum, minimum, or inflection. Always use a nature table (checking the sign
of $f'$ on either side) if the second derivative test is inconclusive. :::

<DesmosGraph title="Function, Derivative, and Tangent Line"
expressions={["f(x)=x^3-6x^2+9x+1", "f'(x)=3x^2-12x+9"]} width={800} height={500} /> Observe how the
derivative relates to the gradient of the tangent line. Move the point along the curve to see how
the tangent changes slope, and note where the derivative is zero at stationary points.

<hr />

## 8. Connected Rates of Change

When two quantities are related by an equation, their rates of change are related by the chain rule.

**Method:**

1. Write down the relationship between the variables.
2. Differentiate both sides with respect to $t$ (time).
3. Substitute known values and solve for the unknown rate.

**Example.** The radius $r$ of a circle increases at $2\,\mathrm{cm/s}$. Find the rate of change of
the area when $r = 5$.

$A = \pi r^2$. Differentiating with respect to $t$:

$$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$

At $r = 5$, $\dfrac{dr}{dt} = 2$:

$$\frac{dA}{dt} = 2\pi(5)(2) = 20\pi \,\mathrm{cm}^2\mathrm{/s}$$

<hr />

## 9. Increasing and Decreasing Functions

**Definition.**

- $f$ is **increasing** on an interval if $f'(x) \geq 0$ for all $x$ in that interval.
- $f$ is **strictly increasing** if $f'(x) \gt{} 0$ for all $x$.
- $f$ is **decreasing** if $f'(x) \leq 0$ for all $x$.
- $f$ is **strictly decreasing** if $f'(x) \lt{} 0$ for all $x$.

**Example.** Show that $f(x) = x^3 - 3x + 2$ is increasing for $x \gt{} 1$.

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.

For $x \gt{} 1$: $(x-1) \gt{} 0$ and $(x+1) \gt{} 0$, so $f'(x) \gt{} 0$. Hence $f$ is strictly
increasing for $x \gt{} 1$.

:::tip When asked to "find where a function is increasing", set $f'(x) \gt{} 0$ and solve the
inequality. When asked to "show that a function is increasing", verify that $f'(x) \gt{} 0$ (or
$\geq 0$) on the given interval. :::

<hr />

## 10. Points of Inflection

A **point of inflection** is where the curve changes concavity (from concave up to concave down, or
vice versa). This occurs where $f''(x) = 0$ and the sign of $f''(x)$ changes.

:::warning A point of inflection does **not** require $f'(x) = 0$. For example, $f(x) = x^3$ has a
point of inflection at $x = 0$, but $f'(0) = 0$ in this case. Consider $f(x) = x^3 + x$:
$f''(x) = 6x = 0$ at $x = 0$, giving a point of inflection, but $f'(0) = 1 \neq 0$. :::

<hr />

## 11. Differentiation of Parametric Equations

If $x = x(t)$ and $y = y(t)$, then

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

**Example.** $x = 2\cos t$, $y = 2\sin t$. Find $\dfrac{dy}{dx}$ at $t = \pi/4$.

$$\frac{dx}{dt} = -2\sin t, \quad \frac{dy}{dt} = 2\cos t$$

$$\frac{dy}{dx} = \frac{2\cos t}{-2\sin t} = -\cot t$$

At $t = \pi/4$: $\dfrac{dy}{dx} = -\cot(\pi/4) = -1$.

<hr />

## 12. Implicit Differentiation

When $y$ is defined implicitly by an equation $F(x,y) = 0$, differentiate both sides with respect to
$x$, treating $y$ as a function of $x$.

**Example.** Find $\dfrac{dy}{dx}$ where $x^2 + y^2 = 25$.

Differentiating: $2x + 2y\dfrac{dy}{dx} = 0$, so $\dfrac{dy}{dx} = -\dfrac{x}{y}$.

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
Differentiate $f(x) = \sqrt{x}$ from first principles.
</details>

<details>
<summary>Solution 1</summary>
$$f'(x) = \lim_{h\to 0}\frac{\sqrt{x+h}-\sqrt{x}}{h} \cdot \frac{\sqrt{x+h}+\sqrt{x}}{\sqrt{x+h}+\sqrt{x}} = \lim_{h\to 0}\frac{(x+h)-x}{h(\sqrt{x+h}+\sqrt{x})} = \lim_{h\to 0}\frac{1}{\sqrt{x+h}+\sqrt{x}} = \frac{1}{2\sqrt{x}}$$

**If you get this wrong, revise:**
[The Derivative from First Principles](#1-the-derivative-from-first-principles) — Section 1.

</details>

<details>
<summary>Problem 2</summary>
Find the stationary points of $f(x) = x^3 - 6x^2 + 9x + 1$ and determine their nature.
</details>

<details>
<summary>Solution 2</summary>
$f'(x) = 3x^2 - 12x + 9 = 3(x^2 - 4x + 3) = 3(x-1)(x-3)$.

Stationary points at $x = 1$ and $x = 3$.

$f''(x) = 6x - 12$. At $x = 1$: $f''(1) = -6 \lt{} 0$, so **local maximum**.
$f(1) = 1 - 6 + 9 + 1 = 5$. At $x = 3$: $f''(3) = 6 \gt{} 0$, so **local minimum**.
$f(3) = 27 - 54 + 27 + 1 = 1$.

**If you get this wrong, revise:**
[Second Derivatives and Stationary Points](#7-second-derivatives-and-stationary-points) — Section 7.

</details>

<details>
<summary>Problem 3</summary>
Differentiate $y = \dfrac{x^2 e^x}{\sin x}$.
</details>

<details>
<summary>Solution 3</summary>
Let $u = x^2 e^x$ and $v = \sin x$.

$u' = 2xe^x + x^2 e^x = e^x(x^2 + 2x)$ (product rule). $v' = \cos x$.

$$\frac{dy}{dx} = \frac{e^x(x^2+2x)\sin x - x^2 e^x \cos x}{\sin^2 x} = \frac{xe^x[(x+2)\sin x - x\cos x]}{\sin^2 x}$$

**If you get this wrong, revise:** [The Quotient Rule](#4-the-quotient-rule) — Section 4 and
[The Product Rule](#3-the-product-rule) — Section 3.

</details>

<details>
<summary>Problem 4</summary>
Find $\dfrac{dy}{dx}$ where $x^3 + y^3 = 3xy$.
</details>

<details>
<summary>Solution 4</summary>
Differentiating implicitly: $3x^2 + 3y^2\dfrac{dy}{dx} = 3y + 3x\dfrac{dy}{dx}$.

$$3y^2\frac{dy}{dx} - 3x\frac{dy}{dx} = 3y - 3x^2$$ $$\frac{dy}{dx}(y^2 - x) = y - x^2$$
$$\frac{dy}{dx} = \frac{y - x^2}{y^2 - x}$$

**If you get this wrong, revise:** [Implicit Differentiation](#12-implicit-differentiation) —
Section 12.

</details>

<details>
<summary>Problem 5</summary>
A spherical balloon is being inflated at a rate of $100\,\mathrm{cm}^3\mathrm{/s}$. Find the rate of increase of the radius when the radius is $5\,\mathrm{cm}$.
</details>

<details>
<summary>Solution 5</summary>
$V = \dfrac{4}{3}\pi r^3$. Differentiating with respect to $t$:

$$\frac{dV}{dt} = 4\pi r^2 \frac{dr}{dt}$$

At $r = 5$ with $\dfrac{dV}{dt} = 100$:

$$100 = 4\pi(25)\frac{dr}{dt} \implies \frac{dr}{dt} = \frac{100}{100\pi} = \frac{1}{\pi} \approx 0.318 \,\mathrm{cm/s}$$

**If you get this wrong, revise:** [Connected Rates of Change](#8-connected-rates-of-change) —
Section 8.

</details>

<details>
<summary>Problem 6</summary>
Show that $f(x) = e^x + e^{-x}$ is strictly increasing for $x \gt{} 0$.
</details>

<details>
<summary>Solution 6</summary>
$f'(x) = e^x - e^{-x}$.

For $x \gt{} 0$: $e^x \gt{} 1 \gt{} e^{-x}$, so $e^x - e^{-x} \gt{} 0$. Hence $f'(x) \gt{} 0$ for
all $x \gt{} 0$, so $f$ is strictly increasing on $(0, \infty)$.

**If you get this wrong, revise:**
[Increasing and Decreasing Functions](#9-increasing-and-decreasing-functions) — Section 9.

</details>

<details>
<summary>Problem 7</summary>
Find the equation of the tangent to $y = \ln x$ at the point where $x = e$.
</details>

<details>
<summary>Solution 7</summary>
At $x = e$: $y = \ln e = 1$. The point is $(e, 1)$.

$\dfrac{dy}{dx} = \dfrac{1}{x}$, so at $x = e$: gradient $m = \dfrac{1}{e}$.

$$y - 1 = \frac{1}{e}(x - e) \implies y = \frac{x}{e}$$

**If you get this wrong, revise:**
[Derivatives of Standard Functions](#6-derivatives-of-standard-functions) — Section 6.

</details>

<details>
<summary>Problem 8</summary>
Given $x = t^2 + 1$ and $y = t^3 - 3t$, find the coordinates of the stationary points and determine their nature.
</details>

<details>
<summary>Solution 8</summary>
$\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt} = \dfrac{3t^2 - 3}{2t} = \dfrac{3(t^2-1)}{2t}$.

Stationary when $dy/dx = 0$: $t^2 = 1 \implies t = \pm 1$.

$t = 1$: $x = 2$, $y = -2$. Point $(2, -2)$. $t = -1$: $x = 2$, $y = 2$. Point $(2, 2)$.

For nature, check $\dfrac{d^2y}{dx^2}$ or the sign of $\dfrac{dy}{dx}$:

Near $t = 1$: for $t = 0.5$, $\dfrac{dy}{dx} = \dfrac{3(0.25-1)}{1} = -\dfrac{9}{4} \lt{} 0$; for
$t = 2$, $\dfrac{dy}{dx} = \dfrac{3(4-1)}{4} \gt{} 0$. So $t=1$ is a **minimum**.

Near $t = -1$: for $t = -2$, $\dfrac{dy}{dx} \lt{} 0$; for $t = -0.5$, $\dfrac{dy}{dx} \gt{} 0$. So
$t=-1$ is a **minimum**.

**If you get this wrong, revise:**
[Differentiation of Parametric Equations](#11-differentiation-of-parametric-equations) — Section 11.

</details>

<details>
<summary>Problem 9</summary>
Prove that $\dfrac{d}{dx}\sec x = \sec x \tan x$.
</details>

<details>
<summary>Solution 9</summary>
$\sec x = \dfrac{1}{\cos x} = (\cos x)^{-1}$.

$$\frac{d}{dx}\sec x = -(\cos x)^{-2} \cdot (-\sin x) = \frac{\sin x}{\cos^2 x} = \frac{1}{\cos x} \cdot \frac{\sin x}{\cos x} = \sec x \tan x \quad \blacksquare$$

**If you get this wrong, revise:** [The Chain Rule](#5-the-chain-rule) — Section 5.

</details>

<details>
<summary>Problem 10</summary>
Find the minimum value of $f(x) = x + \dfrac{4}{x}$ for $x \gt{} 0$.
</details>

<details>
<summary>Solution 10</summary>
$f'(x) = 1 - \dfrac{4}{x^2} = \dfrac{x^2 - 4}{x^2} = 0 \implies x^2 = 4 \implies x = 2$ (since $x \gt{} 0$).

$f''(x) = \dfrac{8}{x^3}$. At $x = 2$: $f''(2) = 1 \gt{} 0$, so minimum.

$f(2) = 2 + \dfrac{4}{2} = 4$.

**If you get this wrong, revise:**
[Second Derivatives and Stationary Points](#7-second-derivatives-and-stationary-points) — Section 7.

</details>

<details>
<summary>Problem 11</summary>
Differentiate $y = \sin^3(2x^2 + 1)$.
</details>

<details>
<summary>Solution 11</summary>
Let $u = \sin(2x^2+1)$, so $y = u^3$.

$\dfrac{dy}{du} = 3u^2$, $\dfrac{du}{dx} = \cos(2x^2+1) \cdot 4x$.

$$\frac{dy}{dx} = 3\sin^2(2x^2+1) \cdot \cos(2x^2+1) \cdot 4x = 12x\sin^2(2x^2+1)\cos(2x^2+1)$$

**If you get this wrong, revise:** [The Chain Rule](#5-the-chain-rule) — Section 5.

</details>

<details>
<summary>Problem 12</summary>
Find the points of inflection of $f(x) = x^4 - 4x^3 + 6x^2 - 4x + 1$.
</details>

<details>
<summary>Solution 12</summary>
$f'(x) = 4x^3 - 12x^2 + 12x - 4$.
$f''(x) = 12x^2 - 24x + 12 = 12(x^2 - 2x + 1) = 12(x-1)^2$.

$f''(x) = 0$ when $x = 1$. But $f''(x) = 12(x-1)^2 \geq 0$ for all $x$ — the second derivative does
**not** change sign at $x = 1$. So there is **no point of inflection**.

(Note: $f(x) = (x-1)^4$, which is concave up everywhere.)

**If you get this wrong, revise:** [Points of Inflection](#10-points-of-inflection) — Section 10.

</details>

<details>
<summary>Problem 13</summary>
A curve has equation $y = \dfrac{2x+1}{x-3}$. Find the equations of the asymptotes and the coordinates of any stationary points.
</details>

<details>
<summary>Solution 13</summary>
Vertical asymptote: $x = 3$ (where denominator is zero).

As $x \to \pm\infty$: $y \to 2$. Horizontal asymptote: $y = 2$.

$y' = \dfrac{2(x-3) - (2x+1)}{(x-3)^2} = \dfrac{-7}{(x-3)^2}$.

Since $y' \lt{} 0$ for all $x \neq 3$, there are **no stationary points**. The function is strictly
decreasing on each branch.

**If you get this wrong, revise:** [The Quotient Rule](#4-the-quotient-rule) — Section 4 and
[Stationary Points](#72-stationary-points) — Section 7.2.

</details>

<details>
<summary>Problem 14</summary>
Water flows into a cone of height $h$ and base radius $r$ at a rate of $5\,\mathrm{cm}^3\mathrm{/s}$. The cone has semi-vertical angle $30^\circ$. Find $dh/dt$ when $h = 10\,\mathrm{cm}$.
</details>

<details>
<summary>Solution 14</summary>
With semi-vertical angle $30^\circ$: $r = h\tan 30° = h/\sqrt{3}$.

$V = \dfrac{1}{3}\pi r^2 h = \dfrac{1}{3}\pi \dfrac{h^2}{3} h = \dfrac{\pi h^3}{9}$.

$$\frac{dV}{dt} = \frac{\pi h^2}{3} \cdot \frac{dh}{dt}$$

At $h = 10$ with $dV/dt = 5$:

$$5 = \frac{100\pi}{3} \cdot \frac{dh}{dt} \implies \frac{dh}{dt} = \frac{15}{100\pi} = \frac{3}{20\pi} \approx 0.0478 \,\mathrm{cm/s}$$

**If you get this wrong, revise:** [Connected Rates of Change](#8-connected-rates-of-change) —
Section 8.

</details>

:::

:::

:::

:::

:::

:::
