---
title: Differentiation
description:
  'A-Level Maths Differentiation notes covering key definitions, core concepts, worked examples, and
  practice questions for rigorous revision.'
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
Product, quotient, and chain rules, and how to find stationary points.
:::

<hr />

## 1. The Derivative from First Principles

### 1.1 Definition

**Definition.** The derivative of $f$ at $x$ is

$$f'(x) = \lim_{h\to 0}\frac{f(x+h)-f(x)}{h}$$

Provided this limit exists. If it does, we say $f$ is **differentiable** at $x$.

**Geometric interpretation.** The quantity $\dfrac{f(x+h)-f(x)}{h}$ is the gradient of the secant
Line through the points $(x, f(x))$ and $(x+h, f(x+h))$. As $h \to 0$This secant approaches the
Tangent, so $f'(x)$ is the gradient of the tangent at $x$.

:::info Info There. Continuity is necessary but not sufficient — $f(x) = |x|$ is continuous at $x=0$
but not Differentiable.
:::

<hr />

## 2. Derivative of $x^n$ from First Principles

**Theorem.** For $n \in \mathbb{N}$, $\dfrac{d}{dx}x^n = nx^{n-1}$.

**Proof.** By the limit definition:

$$f'(x) = \lim_{h\to 0}\frac{(x+h)^n - x^n}{h}$$

Expanding $(x+h)^n$ using the binomial theorem:

$$(x+h)^n = x^n + \binom{n}{1}x^{n-1}h + \binom{n}{2}x^{n-2}h^2 + \cdots + h^n$$

Subtracting $x^n$ and dividing by $h$:

$$\frac{(x+h)^n - x^n}{h} = \binom{n}{1}x^{n-1} + \binom{n}{2}x^{n-2}h + \cdots + h^{n-1}$$

Taking $h \to 0$Every term containing $h$ vanishes:

$$f'(x) = \binom{n}{1}x^{n-1} = nx^{n-1} \quad \blacksquare$$

This proof extends to negative and fractional powers using the limit definition with the generalised
Binomial theorem or logarithmic differentiation.

**Intuition.** The power rule says: "bring the power down and reduce it by one." This works because
The leading-order term in $(x+h)^n - x^n$ is $nx^{n-1}h$And dividing by $h$ leaves $nx^{n-1}$.

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
And $v$ by $\delta v$The change in area is approximately $v\,\delta u + u\,\delta v$ (the two thin
Strips along the edges; the corner piece $\delta u\,\delta v$ is negligible).

<hr />

## 4. The Quotient Rule

**Theorem.** If $u = f(x)$ and $v = g(x)$ are differentiable with $v \neq 0$Then

$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac◆LB◆v\frac{du}{dx} - u\frac{dv}{dx}◆RB◆◆LB◆v^2◆RB◆$$

### 4.1 Proof from the product rule

Write $\dfrac{u}{v} = u \cdot v^{-1}$. Applying the product rule:

$$\frac{d}{dx}\left(\frac{u}{v}\right) = \frac{du}{dx} \cdot v^{-1} + u \cdot \frac{d}{dx}(v^{-1})$$

By the chain rule, $\dfrac{d}{dx}(v^{-1}) = -v^{-2}\dfrac{dv}{dx}$:

$$= \frac{1}{v}\frac{du}{dx} - \frac{u}{v^2}\frac{dv}{dx} = \frac◆LB◆v\frac{du}{dx} - u\frac{dv}{dx}◆RB◆◆LB◆v^2◆RB◆ \quad \blacksquare$$

:::warning The quotient rule has a **minus** sign in the numerator: $v\,u' - u\,v'$. Getting this
The wrong way around is one of the most common errors in A Level mathematics.
:::

<hr />

## 5. The Chain Rule

**Theorem.** If $y = f(g(x))$Then

$$\frac{dy}{dx} = \frac{dy}{du} \cdot \frac{du}{dx}$$

Where $u = g(x)$.

### 5.1 Proof (informal)

If $x$ changes by $\delta x$Then $u$ changes by approximately $g'(x)\,\delta x$And $y$ changes By
approximately $f'(u) \cdot g'(x)\,\delta x$. Dividing by $\delta x$ and taking the limit:

$$\frac{dy}{dx} = f'(g(x)) \cdot g'(x)$$

A fully rigorous proof uses the mean value theorem to handle the case when $g'(x) = 0$.

**Intuition.** The chain rule handles composite functions: "differentiate the outer function, then
Multiply by the derivative of the inner function." Think of it as a gearing mechanism: a small turn
In $x$ causes a turn in $u$Which causes a turn in $y$And the overall effect is the product of The
two gear ratios.

<hr />

## 6. Derivatives of Standard Functions

### 6.1 Derivative of $\sin x$ from first principles

**Theorem.** $\dfrac{d}{dx}\sin x = \cos x$.

**Proof.** Using the limit definition and the compound angle formula
$\sin(\alpha + \beta) = \sin\alpha\cos\beta + \cos\alpha\sin\beta$:

$$
\begin{aligned}
\frac{d}{dx}\sin x &= \lim_{h\to 0}\frac◆LB◆\sin(x+h) - \sin x◆RB◆◆LB◆h◆RB◆ \\
&= \lim_{h\to 0}\frac◆LB◆\sin x\cos h + \cos x\sin h - \sin x◆RB◆◆LB◆h◆RB◆ \\
&= \lim_{h\to 0}\left[\sin x \cdot \frac◆LB◆\cos h - 1◆RB◆◆LB◆h◆RB◆ + \cos x \cdot \frac◆LB◆\sin h◆RB◆◆LB◆h◆RB◆\right]
\end{aligned}
$$

Using the standard limits $\displaystyle\lim_{h\to 0}\frac◆LB◆\sin h◆RB◆◆LB◆h◆RB◆ = 1$ and
$\displaystyle\lim_{h\to 0}\frac◆LB◆\cos h - 1◆RB◆◆LB◆h◆RB◆ = 0$:

$$= \sin x \cdot 0 + \cos x \cdot 1 = \cos x \quad \blacksquare$$

### 6.2 Derivative of $\cos x$

**Theorem.** $\dfrac{d}{dx}\cos x = -\sin x$.

**Proof.** Write $\cos x = \sin\!\left(\dfrac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ - x\right)$. By the chain rule:

$$\frac{d}{dx}\cos x = \cos\!\left(\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆-x\right) \cdot (-1) = -\sin x \quad \blacksquare$$

### 6.3 Derivative of $e^x$

As proved in the Exponentials and Logarithms chapter: $\dfrac{d}{dx}e^x = e^x$.

### 6.4 Derivative of $\ln x$

From the Fundamental Theorem of Calculus applied to $\ln x = \displaystyle\int_1^x \frac{1}{t}\,dt$:

$$\frac{d}{dx}\ln x = \frac{1}{x}$$

### 6.5 Derivative of $\tan x$

$$\frac{d}{dx}\tan x = \frac{d}{dx}\left(\frac◆LB◆\sin x◆RB◆◆LB◆\cos x◆RB◆\right) = \frac◆LB◆\cos x \cdot \cos x - \sin x \cdot (-\sin x)◆RB◆◆LB◆\cos^2 x◆RB◆ = \frac◆LB◆\cos^2 x + \sin^2 x◆RB◆◆LB◆\cos^2 x◆RB◆ = \sec^2 x$$

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
| Maximum             | $f'(a) = 0$, $f''(a) \lt 0$        | $\cap$  |
| Minimum             | $f'(a) = 0$, $f''(a) \gt 0$        | $\cup$  |
| Point of inflection | $f'(a) = 0$, $f''(a) = 0$ (may be) | S-shape |

### 7.3 Proof of the second derivative test (Taylor expansion intuition)

Near a stationary point $x = a$We can approximate $f$ using its Taylor expansion:

$$f(x) \approx f(a) + f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2$$

Since $f'(a) = 0$ at a stationary point:

$$f(x) - f(a) \approx \frac{f''(a)}{2}(x-a)^2$$

- If $f''(a) \gt 0$: $f(x) - f(a) \gt 0$ for $x \neq a$So $f(a)$ is a **minimum**.
- If $f''(a) \lt 0$: $f(x) - f(a) \lt 0$ for $x \neq a$So $f(a)$ is a **maximum**.
- If $f''(a) = 0$: the test is inconclusive; use a nature table or higher derivatives.

:::warning Warning Point could still be a maximum, minimum, or inflection. Always use a nature table
(checking the sign Of $f'$ on either side) if the second derivative test is inconclusive.
:::

<!-- prettier-ignore -->
<DesmosGraph title="Function, Derivative, and Tangent Line" expressions={["f(x)=x^3-6x^2+9x+1", "f'(x)=3x^2-12x+9"]} width={800} height={500} /> Observe how the Derivative relates to the gradient
of the tangent line. Move the point along the curve to see how The tangent changes slope, and note
where the derivative is zero at stationary points. <hr />

## 8. Connected Rates of Change

When two quantities are related by an equation, their rates of change are related by the chain rule.

**Method:**

1. Write down the relationship between the variables.
2. Differentiate both sides with respect to $t$ (time).
3. Substitute known values and solve for the unknown rate.

**Example.** The radius $r$ of a circle increases at $2\,\mathrm{cm/s}$. Find the rate of change of
The area when $r = 5$.

$A = \pi r^2$. Differentiating with respect to $t$:

$$\frac{dA}{dt} = 2\pi r \frac{dr}{dt}$$

At $r = 5$, $\dfrac{dr}{dt} = 2$:

$$\frac{dA}{dt} = 2\pi(5)(2) = 20\pi \,\mathrm{cm}^2\mathrm{/s}$$

<hr />

## 9. Increasing and Decreasing Functions

**Definition.**

- $f$ is **increasing** on an interval if $f'(x) \geq 0$ for all $x$ in that interval.
- $f$ is **strictly increasing** if $f'(x) \gt 0$ for all $x$.
- $f$ is **decreasing** if $f'(x) \leq 0$ for all $x$.
- $f$ is **strictly decreasing** if $f'(x) \lt 0$ for all $x$.

**Example.** Show that $f(x) = x^3 - 3x + 2$ is increasing for $x \gt 1$.

$f'(x) = 3x^2 - 3 = 3(x^2 - 1) = 3(x-1)(x+1)$.

For $x \gt 1$: $(x-1) \gt 0$ and $(x+1) \gt 0$So $f'(x) \gt 0$. Hence $f$ is strictly Increasing for
$x \gt 1$.

:::tip Tip Inequality. When asked to "show that a function is increasing", verify that $f'(x) \gt 0$
(or $\geq 0$) on the given interval.
:::

<hr />

## 10. Points of Inflection

A **point of inflection** is where the curve changes concavity (from concave up to concave down, or
Vice versa). This occurs where $f''(x) = 0$ and the sign of $f''(x)$ changes.

:::warning Warning Point of inflection at $x = 0$But $f'(0) = 0$ in this case. Consider
$f(x) = x^3 + x$: $f''(x) = 6x = 0$ at $x = 0$Giving a point of inflection, but $f'(0) = 1 \neq 0$.
:::

<hr />

## 11. Differentiation of Parametric Equations

If $x = x(t)$ and $y = y(t)$Then

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

**Example.** $x = 2\cos t$, $y = 2\sin t$. Find $\dfrac{dy}{dx}$ at $t = \pi/4$.

$$\frac{dx}{dt} = -2\sin t, \quad \frac{dy}{dt} = 2\cos t$$

$$\frac{dy}{dx} = \frac◆LB◆2\cos t◆RB◆◆LB◆-2\sin t◆RB◆ = -\cot t$$

At $t = \pi/4$: $\dfrac{dy}{dx} = -\cot(\pi/4) = -1$.

<hr />

## 12. Implicit Differentiation

When $y$ is defined implicitly by an equation $F(x,y) = 0$Differentiate both sides with respect to
$x$Treating $y$ as a function of $x$.

**Example.** Find $\dfrac{dy}{dx}$ where $x^2 + y^2 = 25$.

Differentiating: $2x + 2y\dfrac{dy}{dx} = 0$So $\dfrac{dy}{dx} = -\dfrac{x}{y}$.

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
Differentiate $f(x) = \sqrt{x}$ from first principles.
</details>

<details>
<summary>Solution 1</summary>
$$f'(x) = \lim_{h\to 0}\frac◆LB◆\sqrt{x+h}-\sqrt{x}◆RB◆◆LB◆h◆RB◆ \cdot \frac◆LB◆\sqrt{x+h}+\sqrt{x}◆RB◆◆LB◆\sqrt{x+h}+\sqrt{x}◆RB◆ = \lim_{h\to 0}\frac◆LB◆(x+h)-x◆RB◆◆LB◆h(\sqrt{x+h}+\sqrt{x})◆RB◆ = \lim_{h\to 0}\frac◆LB◆1◆RB◆◆LB◆\sqrt{x+h}+\sqrt{x}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆2\sqrt{x}◆RB◆$$

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

$f''(x) = 6x - 12$. At $x = 1$: $f''(1) = -6 \lt 0$So **local maximum**. $f(1) = 1 - 6 + 9 + 1 = 5$.
At $x = 3$: $f''(3) = 6 \gt 0$So **local minimum**. $f(3) = 27 - 54 + 27 + 1 = 1$.

**If you get this wrong, revise:**
[Second Derivatives and Stationary Points](#7-second-derivatives-and-stationary-points) — Section 7.

</details>

<details>
<summary>Problem 3</summary>
Differentiate $y = \dfrac◆LB◆x^2 e^x◆RB◆◆LB◆\sin x◆RB◆$.
</details>

<details>
<summary>Solution 3</summary>
Let $u = x^2 e^x$ and $v = \sin x$.

$u' = 2xe^x + x^2 e^x = e^x(x^2 + 2x)$ (product rule). $v' = \cos x$.

$$\frac{dy}{dx} = \frac◆LB◆e^x(x^2+2x)\sin x - x^2 e^x \cos x◆RB◆◆LB◆\sin^2 x◆RB◆ = \frac◆LB◆xe^x[(x+2)\sin x - x\cos x]◆RB◆◆LB◆\sin^2 x◆RB◆$$

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

$$100 = 4\pi(25)\frac{dr}{dt} \implies \frac{dr}{dt} = \frac◆LB◆100◆RB◆◆LB◆100\pi◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\pi◆RB◆ \approx 0.318 \,\mathrm{cm/s}$$

**If you get this wrong, revise:** [Connected Rates of Change](#8-connected-rates-of-change) —
Section 8.

</details>

<details>
<summary>Problem 6</summary>
Show that $f(x) = e^x + e^{-x}$ is strictly increasing for $x \gt 0$.
</details>

<details>
<summary>Solution 6</summary>
$f'(x) = e^x - e^{-x}$.

For $x \gt 0$: $e^x \gt 1 \gt e^{-x}$So $e^x - e^{-x} \gt 0$. Hence $f'(x) \gt 0$ for All
$x \gt 0$So $f$ is strictly increasing on $(0, \infty)$.

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

$\dfrac{dy}{dx} = \dfrac{1}{x}$So at $x = e$: gradient $m = \dfrac{1}{e}$.

$$y - 1 = \frac{1}{e}(x - e) \implies y = \frac{x}{e}$$

**If you get this wrong, revise:**
[Derivatives of Standard Functions](#6-derivatives-of-standard-functions) — Section 6.

</details>

<details>
<summary>Problem 8</summary>
Given $x = t^2 + 1$ and $y = t^3 - 3t$Find the coordinates of the stationary points and determine their nature.
</details>

<details>
<summary>Solution 8</summary>
$\dfrac{dy}{dx} = \dfrac{dy/dt}{dx/dt} = \dfrac{3t^2 - 3}{2t} = \dfrac{3(t^2-1)}{2t}$.

Stationary when $dy/dx = 0$: $t^2 = 1 \implies t = \pm 1$.

$t = 1$: $x = 2$$y = -2$. Point $(2, -2)$. $t = -1$: $x = 2$$y = 2$. Point $(2, 2)$.

For nature, check $\dfrac{d^2y}{dx^2}$ or the sign of $\dfrac{dy}{dx}$:

Near $t = 1$: for $t = 0.5$$\dfrac{dy}{dx} = \dfrac{3(0.25-1)}{1} = -\dfrac{9}{4} \lt 0$; for
$t = 2$$\dfrac{dy}{dx} = \dfrac{3(4-1)}{4} \gt 0$. So $t=1$ is a **minimum**.

Near $t = -1$: for $t = -2$$\dfrac{dy}{dx} \lt 0$; for $t = -0.5$$\dfrac{dy}{dx} \gt 0$. So $t=-1$
is a **minimum**.

**If you get this wrong, revise:**
[Differentiation of Parametric Equations](#11-differentiation-of-parametric-equations) — Section 11.

</details>

<details>
<summary>Problem 9</summary>
Prove that $\dfrac{d}{dx}\sec x = \sec x \tan x$.
</details>

<details>
<summary>Solution 9</summary>
$\sec x = \dfrac◆LB◆1◆RB◆◆LB◆\cos x◆RB◆ = (\cos x)^{-1}$.

$$\frac{d}{dx}\sec x = -(\cos x)^{-2} \cdot (-\sin x) = \frac◆LB◆\sin x◆RB◆◆LB◆\cos^2 x◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\cos x◆RB◆ \cdot \frac◆LB◆\sin x◆RB◆◆LB◆\cos x◆RB◆ = \sec x \tan x \quad \blacksquare$$

**If you get this wrong, revise:** [The Chain Rule](#5-the-chain-rule) — Section 5.

</details>

<details>
<summary>Problem 10</summary>
Find the minimum value of $f(x) = x + \dfrac{4}{x}$ for $x \gt 0$.
</details>

<details>
<summary>Solution 10</summary>
$f'(x) = 1 - \dfrac{4}{x^2} = \dfrac{x^2 - 4}{x^2} = 0 \implies x^2 = 4 \implies x = 2$ (since $x \gt 0$).

$f''(x) = \dfrac{8}{x^3}$. At $x = 2$: $f''(2) = 1 \gt 0$So minimum.

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
Let $u = \sin(2x^2+1)$So $y = u^3$.

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

(Note: $f(x) = (x-1)^4$Which is concave up everywhere.)

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

Since $y' \lt 0$ for all $x \neq 3$There are **no stationary points**. The function is strictly
Decreasing on each branch.

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

$V = \dfrac{1}{3}\pi r^2 h = \dfrac{1}{3}\pi \dfrac{h^2}{3} h = \dfrac◆LB◆\pi h^3◆RB◆◆LB◆9◆RB◆$.

$$\frac{dV}{dt} = \frac◆LB◆\pi h^2◆RB◆◆LB◆3◆RB◆ \cdot \frac{dh}{dt}$$

At $h = 10$ with $dV/dt = 5$:

$$5 = \frac◆LB◆100\pi◆RB◆◆LB◆3◆RB◆ \cdot \frac{dh}{dt} \implies \frac{dh}{dt} = \frac◆LB◆15◆RB◆◆LB◆100\pi◆RB◆ = \frac◆LB◆3◆RB◆◆LB◆20\pi◆RB◆ \approx 0.0478 \,\mathrm{cm/s}$$

**If you get this wrong, revise:** [Connected Rates of Change](#8-connected-rates-of-change) —
Section 8.

</details>


---

:::tip Tip Ready to test your understanding of **Differentiation**? The
[diagnostic test](/docs/alevel/maths/diagnostics/diag-differentiation) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine
Differentiation with other pure mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/maths/diagnostic-guide) for instructions on self-marking and
building a personal test matrix.

## Common Pitfalls

1. Forgetting to use the chain rule for composite functions — identify the inner function first.

2. Confusing the derivative of $\ln(x)$ with the derivative of $\log_a(x)$ — the latter requires the
   change of base formula.

3. Losing marks by not showing sufficient working — always write out each step, especially in proof
   questions.

4. Incorrectly applying integration by parts by choosing $u$ and $\frac{dv}{dx}$ the wrong way
   around.

5. Dropping negative signs during algebraic manipulation — substitute back to verify your answer.

6. Rounding too early in multi-step calculations — carry full precision through and round only the
   final answer.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

