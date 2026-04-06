---
title: Numerical Methods
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: numerical-methods
---

## Board Coverage

| Board      | Paper   | Notes                                                  |
| ---------- | ------- | ------------------------------------------------------ |
| AQA        | Paper 2 | Sign change, iteration, Newton-Raphson, Simpson's rule |
| Edexcel    | P2      | Similar                                                |
| OCR (A)    | Paper 2 | Includes fixed-point iteration and convergence         |
| CIE (9709) | P2, P3  | Numerical solutions of equations, integration in P2/P3 |

:::info
The formula booklet gives the Newton-Raphson formula and the trapezium/Simpson's rule. You
must know when each method is applicable and its limitations.
:::

---

## 1. Locating Roots: Sign Change

### 1.1 Sign change theorem

**Theorem.** If $f$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then there
exists at least one root $\alpha \in (a,b)$ such that $f(\alpha) = 0$.

### 1.2 Limitations

The sign change theorem tells us a root **exists** but says nothing about:

- How many roots are in the interval (there could be 1, 3, 5, ...).
- The exact location of the root.

:::warning
A sign change is **sufficient but not necessary** for a root. If $f(x) = x^2$, then
$f(-1) = f(1) = 1$ (no sign change), but there is a root at $x = 0$. Additionally, a sign change
could arise from a **discontinuity** rather than a root: $f(x) = 1/x$ has $f(-1) = -1$ and
$f(1) = 1$, but no root.
:::

**Intuition.** The sign change theorem is the Intermediate Value Theorem applied to the special case
of crossing zero. If you walk from a point below sea level to one above sea level, you must cross
sea level at some point — provided the ground is continuous (no teleporting).

---

## 2. Fixed-Point Iteration

### 2.1 Method

To solve $f(x) = 0$, rewrite as $x = g(x)$ and iterate:

$$x_{n+1} = g(x_n)$$

starting from an initial guess $x_0$. If the sequence converges to $\alpha$, then $f(\alpha) = 0$.

### 2.2 Convergence condition

**Theorem.** If $g$ is continuously differentiable near a fixed point $\alpha$ and
$|g'(\alpha)| \lt{} 1$, then the iteration $x_{n+1} = g(x_n)$ converges to $\alpha$ for all starting
values sufficiently close to $\alpha$.

If $|g'(\alpha)| \gt{} 1$, the iteration diverges.

**Proof (linear convergence).** Near $\alpha$, by Taylor's theorem:

$$g(x_n) = g(\alpha) + g'(\alpha)(x_n - \alpha) + O((x_n-\alpha)^2)$$

Since $g(\alpha) = \alpha$:

$$x_{n+1} - \alpha = g'(\alpha)(x_n - \alpha) + O((x_n-\alpha)^2)$$

For $x_n$ close to $\alpha$:

$$|x_{n+1} - \alpha| \approx |g'(\alpha)| \cdot |x_n - \alpha|$$

If $|g'(\alpha)| \lt{} 1$, then $|x_{n+1} - \alpha| \lt{} |x_n - \alpha|$: the error shrinks, so the
iteration converges. If $|g'(\alpha)| \gt{} 1$, the error grows and the iteration diverges.
$\blacksquare$

### 2.3 Rearrangement choices

Different rearrangements of $f(x) = 0$ give different $g(x)$, and some converge while others
diverge.

**Example.** Solve $x^3 + x - 1 = 0$.

- $g(x) = 1 - x^3$: $g'(x) = -3x^2$. Near the root $\alpha \approx 0.68$:
  $|g'(\alpha)| \approx 1.39 \gt{} 1$. **Diverges.**
- $g(x) = \sqrt[3]{1-x}$: $g'(x) = \dfrac{-1}{3(1-x)^{2/3}}$. Near $\alpha$:
  $|g'(\alpha)| \approx 0.72 \lt{} 1$. **Converges.**

:::tip
In exams, if a question asks you to show that a particular rearrangement converges, compute
$g'(x)$ at the root and show $|g'(\alpha)| \lt{} 1$. If asked why a rearrangement fails, show
$|g'(\alpha)| \gt{} 1$.
:::

---

## 3. Newton-Raphson Method

### 3.1 Derivation from the tangent line

To solve $f(x) = 0$, start from $x_0$ and draw the tangent to $y = f(x)$ at $x_0$. The tangent line
is:

$$y - f(x_n) = f'(x_n)(x - x_n)$$

Setting $y = 0$ (where the tangent crosses the $x$-axis):

$$0 - f(x_n) = f'(x_n)(x_{n+1} - x_n)$$

$$x_{n+1} = x_n - \frac{f(x_n)}{f'(x_n)}$$

This is the **Newton-Raphson formula**.

### 3.2 Proof of local quadratic convergence

**Theorem.** If $f$ is twice continuously differentiable, $f(\alpha) = 0$, $f'(\alpha) \neq 0$, and
$x_0$ is sufficiently close to $\alpha$, then Newton-Raphson converges **quadratically**:
$|x_{n+1} - \alpha| \leq C|x_n - \alpha|^2$.

**Proof (sketch).** By Taylor's theorem about $x_n$:

$$0 = f(\alpha) = f(x_n) + f'(x_n)(\alpha - x_n) + \frac{f''(\xi)}{2}(\alpha - x_n)^2$$

for some $\xi$ between $\alpha$ and $x_n$. Rearranging:

$$\frac{f(x_n)}{f'(x_n)} = (\alpha - x_n) + \frac{f''(\xi)}{2f'(x_n)}(\alpha - x_n)^2$$

$$x_n - \frac{f(x_n)}{f'(x_n)} = \alpha - \frac{f''(\xi)}{2f'(x_n)}(\alpha - x_n)^2$$

$$x_{n+1} - \alpha = -\frac{f''(\xi)}{2f'(x_n)}(x_n - \alpha)^2$$

Taking absolute values:
$|x_{n+1} - \alpha| = \dfrac{|f''(\xi)|}{2|f'(x_n)|}|x_n - \alpha|^2 \leq C|x_n - \alpha|^2$.
$\blacksquare$

**Intuition.** Quadratic convergence means the number of correct decimal places roughly **doubles**
with each iteration. If you have 2 correct digits, the next iteration gives about 4, then 8,
then 16. This is dramatically faster than the linear convergence of fixed-point iteration (which
adds roughly a fixed number of correct digits per step).

### 3.3 Failures

Newton-Raphson fails when:

- $f'(x_n) = 0$ (the tangent is horizontal — division by zero).
- $f'(x_n)$ is close to zero (the next iterate jumps far away).
- The starting point is not close enough to the root.

:::warning
Always check that Newton-Raphson is converging. If the iterates oscillate or diverge, try
a different starting point.
:::

---

## 4. The Trapezium Rule

(See the Integration chapter for full details.)

$$\int_a^b f(x)\,dx \approx \frac{h}{2}\left[y_0 + 2y_1 + \cdots + 2y_{n-1} + y_n\right]$$

where $h = (b-a)/n$ and $y_i = f(a+ih)$.

**Error bound:** $|E| \leq \dfrac{(b-a)^3}{12n^2}M$ where $|f''(x)| \leq M$ on $[a,b]$.

---

## 5. Simpson's Rule

### 5.1 Formula

For an even number $n$ of strips:

$$\int_a^b f(x)\,dx \approx \frac{h}{3}\left[y_0 + 4y_1 + 2y_2 + 4y_3 + 2y_4 + \cdots + 4y_{n-1} + y_n\right]$$

The coefficients follow the pattern: $1, 4, 2, 4, 2, \ldots, 4, 1$.

### 5.2 Derivation

Simpson's rule approximates $f$ by quadratic arcs over pairs of strips. Over $[x_{2k}, x_{2k+2}]$, a
unique quadratic passes through $(x_{2k}, y_{2k})$, $(x_{2k+1}, y_{2k+1})$, $(x_{2k+2}, y_{2k+2})$.
Integrating this quadratic gives the area $\dfrac{h}{3}(y_{2k} + 4y_{2k+1} + y_{2k+2})$.

### 5.3 Error bound

$$|E| \leq \frac{(b-a)^5}{180n^4}M$$

where $|f^{(4)}(x)| \leq M$ on $[a,b]$.

**Intuition.** Simpson's rule has error $O(1/n^4)$ compared to $O(1/n^2)$ for the trapezium rule.
Doubling the number of strips reduces the error by a factor of 16 for Simpson's rule vs. 4 for the
trapezium rule. This is because quadratic approximations match the curvature of the function much
better than linear ones.

:::tip
Simpson's rule requires an **even** number of strips. The trapezium rule works with any
number. Simpson's rule is exact for cubics (since the error depends on $f^{(4)}$).
:::

---

## 6. Comparison of Methods

| Method         | Convergence | Requirement        | Speed        |
| -------------- | ----------- | ------------------ | ------------ |
| Sign change    | N/A         | Continuous $f$     | Locates only |
| Bisection      | Linear      | Sign change        | Slow         |
| Fixed-point    | Linear      | $\|g'\| \lt{} 1$   | Moderate     |
| Newton-Raphson | Quadratic   | $f'(\alpha)\neq 0$ | Fast         |
| Trapezium rule | $O(1/n^2)$  | Any $f$            | Integration  |
| Simpson's rule | $O(1/n^4)$  | Even $n$ strips    | Integration  |

---

## Problem Set

<details>
<summary>Problem 1</summary>
Show that $x^3 - 2x - 5 = 0$ has a root in the interval $[2, 3]$.
</details>

<details>
<summary>Solution 1</summary>
$f(x) = x^3 - 2x - 5$. $f(2) = 8-4-5 = -1 \lt{} 0$, $f(3) = 27-6-5 = 16 \gt{} 0$.

Since $f$ is continuous and changes sign on $[2,3]$, by the sign change theorem there is a root in
$(2,3)$.

**If you get this wrong, revise:** [Sign Change Theorem](#1-locating-roots-sign-change) — Section
1.1.

</details>

<details>
<summary>Problem 2</summary>
Use fixed-point iteration $x_{n+1} = \sqrt[3]{2x_n + 5}$ with $x_0 = 2$ to find $x_3$. Give your answer to 4 decimal places.
</details>

<details>
<summary>Solution 2</summary>
$x_0 = 2.0000$
$x_1 = \sqrt[3]{9} = 2.0801$
$x_2 = \sqrt[3]{2(2.0801)+5} = \sqrt[3]{9.1602} = 2.0924$
$x_3 = \sqrt[3]{2(2.0924)+5} = \sqrt[3]{9.1848} = 2.0943$

**If you get this wrong, revise:** [Fixed-Point Iteration](#2-fixed-point-iteration) — Section 2.

</details>

<details>
<summary>Problem 3</summary>
Show that the iteration $x_{n+1} = \dfrac{x_n^3 + 5}{2}$ for solving $x^3 - 2x - 5 = 0$ will not converge near the root.
</details>

<details>
<summary>Solution 3</summary>
$g(x) = \dfrac{x^3+5}{2}$, $g'(x) = \dfrac{3x^2}{2}$.

Near the root $\alpha \approx 2.09$:
$g'(\alpha) = \dfrac{3(2.09)^2}{2} \approx \dfrac{3 \times 4.37}{2} \approx 6.55 \gt{} 1$.

Since $|g'(\alpha)| \gt{} 1$, the iteration diverges near $\alpha$.

**If you get this wrong, revise:** [Convergence Condition](#22-convergence-condition) — Section 2.2.

</details>

<details>
<summary>Problem 4</summary>
Use Newton-Raphson with $x_0 = 2$ to find $x_2$ for $f(x) = x^3 - 2x - 5 = 0$. Give your answer to 4 decimal places.
</details>

<details>
<summary>Solution 4</summary>
$f'(x) = 3x^2 - 2$. $x_{n+1} = x_n - \dfrac{x_n^3 - 2x_n - 5}{3x_n^2 - 2}$.

$x_0 = 2$: $f(2) = -1$, $f'(2) = 10$. $x_1 = 2 - (-1/10) = 2.1000$.

$x_1 = 2.1$: $f(2.1) = 9.261-4.2-5 = 0.061$, $f'(2.1) = 13.23-2 = 11.23$.
$x_2 = 2.1 - 0.061/11.23 = 2.0946$.

**If you get this wrong, revise:** [Newton-Raphson Method](#3-newton-raphson-method) — Section 3.

</details>

<details>
<summary>Problem 5</summary>
Use Simpson's rule with 4 strips to approximate $\displaystyle\int_0^2 e^{-x^2}\,dx$ to 4 decimal places.
</details>

<details>
<summary>Solution 5</summary>
$h = 0.5$. Values: $y_0 = 1$, $y_1 = e^{-0.25} \approx 0.7788$, $y_2 = e^{-1} \approx 0.3679$, $y_3 = e^{-2.25} \approx 0.1054$, $y_4 = e^{-4} \approx 0.0183$.

$$\int_0^2 e^{-x^2}\,dx \approx \frac{0.5}{3}[1 + 4(0.7788) + 2(0.3679) + 4(0.1054) + 0.0183]$$
$$= \frac{0.5}{3}[1 + 3.1152 + 0.7358 + 0.4216 + 0.0183] = \frac{0.5}{3}(5.2909) \approx 0.8818$$

**If you get this wrong, revise:** [Simpson's Rule](#5-simpsons-rule) — Section 5.

</details>

<details>
<summary>Problem 6</summary>
Show that the equation $e^x = 3x$ has exactly two real roots, and locate them.
</details>

<details>
<summary>Solution 6</summary>
Let $f(x) = e^x - 3x$. $f'(x) = e^x - 3$.

$f'(x) = 0 \implies x = \ln 3 \approx 1.099$.

$f(\ln 3) = 3 - 3\ln 3 \approx 3 - 3.296 = -0.296 \lt{} 0$.

Since $f''(x) = e^x \gt{} 0$, this is a global minimum. The minimum value is negative, and
$f(x) \to \infty$ as $x \to \pm\infty$, so $f(x) = 0$ has exactly two roots.

$f(0) = 1 \gt{} 0$, $f(1) = e-3 \lt{} 0$: root in $(0,1)$. $f(1) \lt{} 0$, $f(2) = e^2-6 \gt{} 0$:
root in $(1,2)$.

**If you get this wrong, revise:** [Sign Change Theorem](#1-locating-roots-sign-change) — Section 1.

</details>

<details>
<summary>Problem 7</summary>
The Newton-Raphson formula fails when applied to $f(x) = x^{1/3}$ starting from $x_0 = 1$. Explain why.
</details>

<details>
<summary>Solution 7</summary>
$f(x) = x^{1/3}$, $f'(x) = \dfrac{1}{3}x^{-2/3}$.

$x_{n+1} = x_n - \dfrac{x_n^{1/3}}{\frac{1}{3}x_n^{-2/3}} = x_n - 3x_n = -2x_n$.

So $x_1 = -2$, $x_2 = 4$, $x_3 = -8$, ... The iterates oscillate and diverge.

The problem is that $f'(0) = \infty$ — the tangent at the root $x=0$ is vertical, so the
Newton-Raphson step sends the iterate to $-\infty$.

**If you get this wrong, revise:** [Failures](#33-failures) — Section 3.3.

</details>

<details>
<summary>Problem 8</summary>
Use the trapezium rule with 6 strips to approximate $\displaystyle\int_1^4 \ln x\,dx$.
</details>

<details>
<summary>Solution 8</summary>
$h = 0.5$. Values: $\ln 1 = 0$, $\ln 1.5 \approx 0.4055$, $\ln 2 \approx 0.6931$, $\ln 2.5 \approx 0.9163$, $\ln 3 \approx 1.0986$, $\ln 3.5 \approx 1.2528$, $\ln 4 \approx 1.3863$.

$$\text{Approx} = \frac{0.5}{2}[0 + 2(0.4055+0.6931+0.9163+1.0986+1.2528) + 1.3863]$$
$$= 0.25[0 + 2(4.3663) + 1.3863] = 0.25[8.7326 + 1.3863] = 0.25 \times 10.1189 \approx 2.5297$$

(Exact: $[x\ln x - x]_1^4 = 4\ln 4 - 4 + 1 = 8\ln 2 - 3 \approx 2.5452$.)

**If you get this wrong, revise:** [The Trapezium Rule](#4-the-trapezium-rule) — Section 4.

</details>

<details>
<summary>Problem 9</summary>
For the equation $x^3 + x - 3 = 0$, show that $x_{n+1} = \sqrt[3]{3 - x_n}$ converges near the root.
</details>

<details>
<summary>Solution 9</summary>
$f(1) = -1 \lt{} 0$, $f(1.2) = 1.728 + 1.2 - 3 = -0.072 \lt{} 0$, $f(1.3) = 2.197 + 1.3 - 3 = 0.497 \gt{} 0$.

Root near $\alpha \approx 1.21$.

$g(x) = (3-x)^{1/3}$, $g'(x) = -\dfrac{1}{3}(3-x)^{-2/3}$.

$|g'(\alpha)| = \dfrac{1}{3}(3-1.21)^{-2/3} = \dfrac{1}{3}(1.79)^{-2/3} \approx \dfrac{1}{3 \times 1.489} \approx 0.224 \lt{} 1$.

Converges since $|g'(\alpha)| \lt{} 1$.

**If you get this wrong, revise:** [Convergence Condition](#22-convergence-condition) — Section 2.2.

</details>

<details>
<summary>Problem 10</summary>
Explain why the sign change theorem does not guarantee a root of $f(x) = \dfrac{1}{x-2}$ in the interval $[1, 3]$.
</details>

<details>
<summary>Solution 10</summary>
$f(1) = -1 \lt{} 0$ and $f(3) = 1 \gt{} 0$, so there is a sign change. However, $f$ is **not continuous** on $[1,3]$ — it has a vertical asymptote at $x = 2$. The sign change theorem requires continuity, so it does not apply here. There is no root of $1/(x-2) = 0$.

**If you get this wrong, revise:** [Limitations](#12-limitations) — Section 1.2.

</details>

:::

:::

:::

:::

:::
