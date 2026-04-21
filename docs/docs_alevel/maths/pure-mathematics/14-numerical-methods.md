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

:::info The formula booklet gives the Newton-Raphson formula and the trapezium/Simpson's rule. You
must know when each method is applicable and its limitations. :::

<hr />

## 1. Locating Roots: Sign Change

### 1.1 Sign change theorem

**Theorem.** If $f$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then there
exists at least one root $\alpha \in (a,b)$ such that $f(\alpha) = 0$.

### 1.2 Limitations

The sign change theorem tells us a root **exists** but says nothing about:

- How many roots are in the interval (there could be 1, 3, 5, ...).
- The exact location of the root.

:::warning A sign change is **sufficient but not necessary** for a root. If $f(x) = x^2$, then
$f(-1) = f(1) = 1$ (no sign change), but there is a root at $x = 0$. Additionally, a sign change
could arise from a **discontinuity** rather than a root: $f(x) = 1/x$ has $f(-1) = -1$ and
$f(1) = 1$, but no root. :::

**Intuition.** The sign change theorem is the Intermediate Value Theorem applied to the special case
of crossing zero. If you walk from a point below sea level to one above sea level, you must cross
sea level at some point — provided the ground is continuous (no teleporting).

<hr />

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

:::tip In exams, if a question asks you to show that a particular rearrangement converges, compute
$g'(x)$ at the root and show $|g'(\alpha)| \lt{} 1$. If asked why a rearrangement fails, show
$|g'(\alpha)| \gt{} 1$. :::

### 2.4 Geometric interpretation

The fixed-point iteration $x_{n+1} = g(x_n)$ can be visualised using the cobweb diagram. Plot
$y = g(x)$ and $y = x$. Starting from $x_0$ on the $x$-axis, go vertically to $y = g(x_0) = x_1$,
then horizontally to $y = x$, then vertically to $y = g(x_1) = x_2$, and so on.

- If $0 \lt{} g'(\alpha) \lt{} 1$: the cobweb spirals inward (monotone convergence).
- If $-1 \lt{} g'(\alpha) \lt{} 0$: the cobweb zigzags inward (oscillatory convergence).
- If $|g'(\alpha)| \gt{} 1$: the cobweb spirals or zigzags outward (divergence).

The closer $|g'(\alpha)|$ is to zero, the faster the convergence. When $g'(\alpha) = 0$, the
iteration achieves quadratic convergence (similar to Newton-Raphson), since the leading error term
in the Taylor expansion vanishes.

<hr />

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

:::warning Always check that Newton-Raphson is converging. If the iterates oscillate or diverge, try
a different starting point. :::

### 3.4 Horizontal tangent failure

When $f'(x_n) = 0$ at some iterate, the Newton-Raphson formula requires division by zero and the
method breaks down entirely. Even when $f'(x_n)$ is merely small, the step
$x_{n+1} = x_n - f(x_n)/f'(x_n)$ becomes very large, sending the iterate far from the root.

**Example.** Let $f(x) = x^3 - 3x + 3$. Then $f'(x) = 3x^2 - 3$, so $f'(1) = 0$. Starting at
$x_0 = 1$:

The formula gives $x_1 = 1 - f(1)/f'(1) = 1 - 1/0$, which is undefined.

Even starting at $x_0 = 0.9$: $f(0.9) = 0.729 - 2.7 + 3 = 1.029$, $f'(0.9) = 2.43 - 3 = -0.57$.
$x_1 = 0.9 - 1.029/(-0.57) = 0.9 + 1.805 = 2.705$.

The root is near $\alpha \approx -2.10$, so the iterate has been sent in the wrong direction. The
next iterate $x_2$ will be pulled back, but convergence is erratic compared to a well-chosen
starting point.

:::warning Before applying Newton-Raphson, sketch $f(x)$ or compute $f'(x)$ to check that the
tangent is not close to horizontal near your starting point. :::

### 3.5 Slow convergence near inflection points

The quadratic convergence proof in Section 3.2 requires $f'(\alpha) \neq 0$. When the root coincides
with an inflection point, so that $f'(\alpha) = 0$, convergence degrades from quadratic to
**linear**.

**Theorem.** If $f(\alpha) = 0$, $f'(\alpha) = 0$, $f''(\alpha) \neq 0$, and $x_0$ is sufficiently
close to $\alpha$, then Newton-Raphson converges linearly with rate $1/2$:

$$|x_{n+1} - \alpha| \approx \frac{1}{2}|x_n - \alpha|$$

**Proof sketch.** Expanding by Taylor's theorem to third order about $\alpha$:

$$f(x_n) = \frac{f''(\alpha)}{2}(x_n - \alpha)^2 + \frac{f'''(\alpha)}{6}(x_n - \alpha)^3 + O((x_n - \alpha)^4)$$

$$f'(x_n) = f''(\alpha)(x_n - \alpha) + \frac{f'''(\alpha)}{2}(x_n - \alpha)^2 + O((x_n - \alpha)^3)$$

Therefore:

$$x_{n+1} - \alpha = x_n - \alpha - \frac{f(x_n)}{f'(x_n)}$$

$$= (x_n - \alpha) - \frac{\frac{f''(\alpha)}{2}(x_n - \alpha)^2 + O((x_n - \alpha)^3)}{f''(\alpha)(x_n - \alpha) + O((x_n - \alpha)^2)}$$

$$= (x_n - \alpha) - \frac{\frac{f''(\alpha)}{2}(x_n - \alpha) + O((x_n - \alpha)^2)}{f''(\alpha) + O(x_n - \alpha)}$$

$$= (x_n - \alpha) - \frac{1}{2}(x_n - \alpha)\left(1 + O(x_n - \alpha)\right)$$

$$= \frac{1}{2}(x_n - \alpha) + O((x_n - \alpha)^2)$$

So $|x_{n+1} - \alpha| \to \frac{1}{2}|x_n - \alpha|$ as $x_n \to \alpha$: the error is halved each
step (linear convergence with rate $1/2$), not squared. $\blacksquare$

**Example.** $f(x) = (x-1)^3$ has a root at $x = 1$ where $f'(1) = 0$. The Newton-Raphson iteration
becomes:

$$x_{n+1} = x_n - \frac{(x_n - 1)^3}{3(x_n - 1)^2} = x_n - \frac{x_n - 1}{3} = \frac{2x_n + 1}{3}$$

Starting at $x_0 = 4$: $x_1 = 3$, $x_2 = 7/3 \approx 2.333$, $x_3 = 17/9 \approx 1.889$,
$x_4 = 37/27 \approx 1.370$, $x_5 = 75/81 \approx 1.210$, ...

The error is multiplied by $2/3$ each step (linear, not quadratic). Compare: standard Newton-Raphson
with $f'(\alpha) \neq 0$ would give roughly 1, then 2, then 4, then 8 correct digits. Here each step
only adds a fixed fraction of a digit.

<hr />

## 4. The Trapezium Rule

### 4.1 Formula

$$\int_a^b f(x)\,dx \approx \frac{h}{2}\left[y_0 + 2y_1 + \cdots + 2y_{n-1} + y_n\right]$$

where $h = (b-a)/n$ and $y_i = f(a+ih)$.

### 4.2 Error analysis

**Theorem.** The error in the composite trapezium rule is:

$$E_T = -\frac{(b-a)^3}{12n^2}\,f''(\eta)$$

for some $\eta \in (a, b)$, provided $f$ is twice continuously differentiable on $[a, b]$.

**Derivation.** Consider a single strip $[x_i, x_{i+1}]$ of width $h$. The trapezium rule
approximates $\int_{x_i}^{x_{i+1}} f(x)\,dx$ by the area of a trapezium:

$$\int_{x_i}^{x_{i+1}} f(x)\,dx \approx \frac{h}{2}\left[f(x_i) + f(x_{i+1})\right]$$

To find the error, expand $f$ about the midpoint $m_i = x_i + h/2$. Let $\delta = h/2$:

$$f(x_i) = f(m_i - \delta) = f(m_i) - \delta\, f'(m_i) + \frac{\delta^2}{2}f''(m_i) - \frac{\delta^3}{6}f'''(\zeta_1)$$

$$f(x_{i+1}) = f(m_i + \delta) = f(m_i) + \delta\, f'(m_i) + \frac{\delta^2}{2}f''(m_i) + \frac{\delta^3}{6}f'''(\zeta_2)$$

Adding these:

$$f(x_i) + f(x_{i+1}) = 2f(m_i) + \delta^2 f''(m_i) + O(h^3)$$

The trapezium approximation for this strip is:

$$\frac{h}{2}\left[f(x_i) + f(x_{i+1})\right] = h\,f(m_i) + \frac{h\,\delta^2}{2}f''(m_i) + O(h^4) = h\,f(m_i) + \frac{h^3}{8}f''(m_i) + O(h^4)$$

The exact integral over this strip is (by Taylor expansion of the integral):

$$\int_{x_i}^{x_{i+1}} f(x)\,dx = h\,f(m_i) + \frac{h^3}{24}f''(m_i) + O(h^5)$$

Therefore the error on a single strip is:

$$E_i = \frac{h}{2}\left[f(x_i) + f(x_{i+1})\right] - \int_{x_i}^{x_{i+1}} f(x)\,dx = \left(\frac{1}{8} - \frac{1}{24}\right)h^3 f''(m_i) + O(h^4) = \frac{h^3}{12}f''(m_i) + O(h^4)$$

Summing over all $n$ strips and applying the Intermediate Value Theorem to $f''$ (which is
continuous), there exists $\eta \in (a, b)$ such that:

$$E_T = \sum_{i=0}^{n-1} E_i = \frac{h^3}{12}\sum_{i=0}^{n-1} f''(m_i) + O(n \cdot h^4) = \frac{h^3}{12}\cdot\frac{n\, f''(\eta)}{1} + O(h^4 \cdot n)$$

Since $\sum_{i=0}^{n-1} f''(m_i) \cdot h \approx \int_a^b f''(x)\,dx$ and $nh = b - a$:

$$E_T = -\frac{(b-a)^3}{12n^2}\,f''(\eta)$$

(The negative sign arises from the exact derivation via the Euler-Maclaurin formula; the key point
is the $h^2$ scaling.) $\blacksquare$

**Key consequence.** The error is proportional to $h^2 = (b-a)^2/n^2$. Doubling the number of strips
($n \to 2n$) reduces the error by a factor of 4, since $h \to h/2$ and $h^2 \to h^2/4$.

### 4.3 Error bound

From the error formula, since $|f''(\eta)| \leq M$ for all $\eta \in [a,b]$:

$$|E_T| \leq \frac{(b-a)^3}{12n^2}\,M$$

This gives a **guaranteed** upper bound on the absolute error. If we require the error to satisfy
$|E_T| \lt{} \varepsilon$, we need:

$$n \gt{} \sqrt{\frac{(b-a)^3\, M}{12\,\varepsilon}}$$

**Example.** Approximate $\displaystyle\int_0^1 e^{-x^2}\,dx$ with the trapezium rule. Here
$f(x) = e^{-x^2}$, so $f'(x) = -2x\,e^{-x^2}$ and $f''(x) = (4x^2 - 2)e^{-x^2}$. On $[0,1]$:
$|f''(x)| \leq 2$ (achieved at $x = 0$, where $f''(0) = -2$).

For error $\lt{} 10^{-4}$:

$$n \gt{} \sqrt{\frac{1^3 \times 2}{12 \times 10^{-4}}} = \sqrt{\frac{2}{0.0012}} = \sqrt{1666.\bar{6}} \approx 40.8$$

So $n = 42$ strips suffice (rounding up to the nearest even number, which is convenient if one later
wishes to compare with Simpson's rule).

<hr />

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

:::tip Simpson's rule requires an **even** number of strips. The trapezium rule works with any
number. Simpson's rule is exact for cubics (since the error depends on $f^{(4)}$). :::

<hr />

## 6. Comparison of Methods

| Method         | Convergence | Requirement        | Speed        |
| -------------- | ----------- | ------------------ | ------------ |
| Sign change    | N/A         | Continuous $f$     | Locates only |
| Bisection      | Linear      | Sign change        | Slow         |
| Fixed-point    | Linear      | $\|g'\| \lt{} 1$   | Moderate     |
| Newton-Raphson | Quadratic   | $f'(\alpha)\neq 0$ | Fast         |
| Trapezium rule | $O(1/n^2)$  | Any $f$            | Integration  |
| Simpson's rule | $O(1/n^4)$  | Even $n$ strips    | Integration  |

<hr />

## 7. Comparison of Root-Finding Methods

### 7.1 When to use each method

**Sign change (bisection):** Use when you need a guaranteed, robust result and have a sign change.
Always converges but slowly (halving the interval each step). No derivative needed. Excellent for
initial bracketing before switching to a faster method.

**Fixed-point iteration:** Use when the equation is easily rearranged into $x = g(x)$ and
$|g'(\alpha)| \lt{} 1$ can be verified. Simple to implement but may converge slowly or diverge
entirely depending on the rearrangement. Different rearrangements of the same equation can give
radically different convergence behaviour.

**Newton-Raphson:** Use when $f'(x)$ is easy to compute and a good starting estimate is available.
Extremely fast (quadratic convergence) when it works, but can fail catastrophically if $f'(x_n)$ is
small, if the starting point is poor, or if the root is at an inflection point.

### 7.2 Practical strategy

In practice, numerical software often combines methods:

1. **Bracket the root** using sign change to find an interval $[a, b]$ containing the root.
2. **Refine** using Newton-Raphson or fixed-point iteration starting from the midpoint or a
   favourable endpoint.
3. **Verify** the result by checking $f(x_n)$ is sufficiently close to zero.

:::info Newton-Raphson is the method of choice when derivatives are available and the function is
well-behaved. Fixed-point iteration is useful when the problem naturally gives a contraction
mapping. Bisection is the reliable fallback when nothing else is guaranteed to work. :::

### 7.3 Cost comparison

| Method         | Cost per step | Convergence rate          | Total cost to reach tolerance $\varepsilon$ |
| -------------- | ------------- | ------------------------- | ------------------------------------------- |
| Bisection      | 1 evaluation  | $1/2$ (linear)            | $O(\log_2(1/\varepsilon))$ steps            |
| Fixed-point    | 1 evaluation  | $\|g'(\alpha)\|$ (linear) | $O(\log_{1/\|g'\|}(1/\varepsilon))$ steps   |
| Newton-Raphson | 2 evaluations | Quadratic                 | $O(\log_2 \log_2(1/\varepsilon))$ steps     |

Newton-Raphson requires both $f$ and $f'$ per step (two evaluations), but its quadratic convergence
means it needs far fewer steps in total. For high accuracy requirements, Newton-Raphson is
overwhelmingly more efficient despite the higher per-step cost.

<hr />

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

$$\mathrm{Approx} = \frac{0.5}{2}[0 + 2(0.4055+0.6931+0.9163+1.0986+1.2528) + 1.3863]$$
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

<details>
<summary>Problem 11</summary>
Consider $f(x) = (x-2)^3$. The root is $\alpha = 2$. Apply Newton-Raphson starting from $x_0 = 5$.
Show that the convergence is linear, find the convergence rate, and explain why quadratic
convergence is lost.
</details>

<details>
<summary>Solution 11</summary>
$f(x) = (x-2)^3$, $f'(x) = 3(x-2)^2$.

$x_{n+1} = x_n - \dfrac{(x_n-2)^3}{3(x_n-2)^2} = x_n - \dfrac{x_n - 2}{3} = \dfrac{2x_n + 4}{3}$

Starting from $x_0 = 5$: $x_1 = 14/3 \approx 4.667$, $x_2 = 40/9 \approx 4.444$,
$x_3 = 116/27 \approx 4.296$, $x_4 = 344/81 \approx 4.198$.

Error: $e_0 = 3$, $e_1 = 8/3 \approx 2.667$, $e_2 = 16/9 \approx 1.778$,
$e_3 = 32/27 \approx 1.185$, $e_4 = 64/81 \approx 0.790$.

Ratio: $e_{n+1}/e_n = 2/3$ for all $n$. This is linear convergence with rate $2/3$.

Quadratic convergence is lost because $f'(\alpha) = f'(2) = 0$. The root coincides with a stationary
point (inflection point), violating the condition $f'(\alpha) \neq 0$ in the quadratic convergence
theorem. As shown in Section 3.5, when $f'(\alpha) = 0$ and $f''(\alpha) \neq 0$, Newton-Raphson
degrades to linear convergence with rate $1/2$. Here $f''(x) = 6(x-2)$, so $f''(2) = 0$ as well
(triple root), giving rate $2/3$ instead of $1/2$.

**If you get this wrong, revise:**
[Slow Convergence Near Inflection Points](#35-slow-convergence-near-inflection-points) — Section
3.5.

</details>

<details>
<summary>Problem 12</summary>
(a) Use the trapezium rule with $n = 4$ strips to approximate $\displaystyle\int_0^2 \frac{1}{1+x^2}\,dx$.

(b) Given that $f''(x) = \dfrac{6x^2 - 2}{(1+x^2)^3}$, find an upper bound $M$ for $|f''(x)|$ on
$[0,2]$ and hence bound the error in your approximation.

</details>

<details>
<summary>Solution 12</summary>
(a) $h = 0.5$.

$y_0 = f(0) = 1$, $y_1 = f(0.5) = 1/1.25 = 0.8$, $y_2 = f(1) = 0.5$,
$y_3 = f(1.5) = 1/3.25 \approx 0.3077$, $y_4 = f(2) = 0.2$.

$$\mathrm{Approx} = \frac{0.5}{2}[1 + 2(0.8 + 0.5 + 0.3077) + 0.2] = 0.25[1 + 2(1.6077) + 0.2] = 0.25 \times 4.4154 \approx 1.1039$$

(Exact value: $\arctan 2 \approx 1.1071$.)

(b) $f''(x) = \dfrac{6x^2 - 2}{(1+x^2)^3}$. On $[0, 2]$, the numerator $6x^2 - 2$ is maximised at
$x = 2$ where it equals $6(4) - 2 = 22$. The denominator $(1+x^2)^3$ is minimised at $x = 0$ where
it equals 1. We need to maximise $|f''(x)|$.

Checking critical points: $f'''(x) = 0$ gives potential extrema of $f''$. Alternatively, evaluate at
endpoints and critical points. $f''(0) = -2$, $f''(1) = 4/8 = 0.5$, $f''(2) = 22/125 = 0.176$.

So $M = 2$ (taking $|f''(x)| \leq 2$).

Error bound:
$|E_T| \leq \dfrac{(2-0)^3}{12 \times 4^2} \times 2 = \dfrac{8}{192} \times 2 = \dfrac{1}{12} \approx 0.0833$.

The actual error is $|1.1071 - 1.1039| = 0.0032$, well within the bound.

**If you get this wrong, revise:** [Error Analysis](#42-error-analysis) — Section 4.2 and
[Error Bound](#43-error-bound) — Section 4.3.

</details>

<details>
<summary>Problem 13</summary>
The equation $e^{-x} = x$ has a single real root $\alpha$.

(a) Show that $\alpha \in (0.5, 0.7)$.

(b) Consider the rearrangement $x_{n+1} = e^{-x_n}$. Show that this iteration converges near
$\alpha$.

(c) Consider the rearrangement $x_{n+1} = -\ln x_n$. Determine whether this converges near $\alpha$.

</details>

<details>
<summary>Solution 13</summary>
(a) $f(x) = e^{-x} - x$. $f(0.5) = e^{-0.5} - 0.5 \approx 0.6065 - 0.5 = 0.1065 \gt{} 0$.
$f(0.7) = e^{-0.7} - 0.7 \approx 0.4966 - 0.7 = -0.2034 \lt{} 0$.
By the sign change theorem, $\alpha \in (0.5, 0.7)$.

(b) $g_1(x) = e^{-x}$, $g_1'(x) = -e^{-x}$. At $\alpha \approx 0.567$:
$|g_1'(\alpha)| = e^{-\alpha} = \alpha \approx 0.567 \lt{} 1$. Converges.

(c) $g_2(x) = -\ln x$, $g_2'(x) = -1/x$. At $\alpha \approx 0.567$:
$|g_2'(\alpha)| = 1/\alpha \approx 1.763 \gt{} 1$. Diverges.

Both rearrangements solve the same equation, but only $x_{n+1} = e^{-x_n}$ converges near the root.

**If you get this wrong, revise:** [Rearrangement Choices](#23-rearrangement-choices) — Section 2.3.

</details>

<details>
<summary>Problem 14</summary>
Newton-Raphson is applied to $f(x) = x^3 - 3x + 2$ (which has a double root at $x = 1$ and a single
root at $x = -2$). Starting from $x_0 = 0.5$, compute $x_1$ and $x_2$, and comment on the rate of
convergence towards $x = 1$.
</details>

<details>
<summary>Solution 14</summary>
$f(x) = x^3 - 3x + 2 = (x-1)^2(x+2)$, $f'(x) = 3x^2 - 3$.

$x_0 = 0.5$: $f(0.5) = 0.125 - 1.5 + 2 = 0.625$, $f'(0.5) = 0.75 - 3 = -2.25$.
$x_1 = 0.5 - 0.625/(-2.25) = 0.5 + 0.2778 = 0.7778$.

$x_1 = 0.7778$: $f(0.7778) = 0.4703 - 2.3334 + 2 = 0.1369$, $f'(0.7778) = 1.8151 - 3 = -1.1849$.
$x_2 = 0.7778 - 0.1369/(-1.1849) = 0.7778 + 0.1155 = 0.8933$.

The iterates are approaching $x = 1$ but slowly. Errors: $e_0 = 0.5$, $e_1 \approx 0.2222$,
$e_2 \approx 0.1067$. The ratio $e_2/e_1 \approx 0.48$, and $e_1/e_0 \approx 0.44$. This is
approximately linear convergence.

At the double root $x = 1$: $f(1) = 0$, $f'(1) = 0$. Since $f'(\alpha) = 0$, quadratic convergence
is lost (as in Section 3.5). For a double root, Newton-Raphson converges linearly with rate
approximately $1/2$.

**If you get this wrong, revise:**
[Slow Convergence Near Inflection Points](#35-slow-convergence-near-inflection-points) — Section
3.5.

</details>

<details>
<summary>Problem 15</summary>
(a) Use the trapezium rule with $n = 2$ strips to approximate $\displaystyle\int_0^1 \sqrt{x}\,dx$.

(b) The exact value is $2/3$. Compute the actual error.

(c) Use the error bound formula to find a theoretical upper bound for the error with $n = 2$ strips.

</details>

<details>
<summary>Solution 15</summary>
(a) $h = 0.5$. $y_0 = \sqrt{0} = 0$, $y_1 = \sqrt{0.5} \approx 0.7071$, $y_2 = \sqrt{1} = 1$.

$$\mathrm{Approx} = \frac{0.5}{2}[0 + 2(0.7071) + 1] = 0.25 \times 2.4142 = 0.6036$$

(b) Exact: $2/3 \approx 0.6667$. Actual error: $|0.6667 - 0.6036| = 0.0631$.

(c) $f(x) = x^{1/2}$, $f'(x) = \frac{1}{2}x^{-1/2}$, $f''(x) = -\frac{1}{4}x^{-3/2}$.

On $(0, 1]$: $|f''(x)| = \frac{1}{4}x^{-3/2}$, which is unbounded as $x \to 0^+$. The error bound
requires $f''$ to be bounded on $[a,b]$, but $f''(x) \to \infty$ as $x \to 0$.

If we instead apply the bound on $[\varepsilon, 1]$ for small $\varepsilon \gt{} 0$:
$M = \frac{1}{4}\varepsilon^{-3/2}$, which blows up as $\varepsilon \to 0$. This illustrates a
limitation of the error bound: it requires $f''$ to be bounded, which fails when $f$ has a vertical
tangent at an endpoint.

**If you get this wrong, revise:** [Error Bound](#43-error-bound) — Section 4.3.

</details>

<details>
<summary>Problem 16</summary>
For the equation $\cos x = x$, let $g(x) = \cos x$.

(a) Verify that a fixed point $\alpha$ exists in $(0, \pi/2)$.

(b) Show that $|g'(\alpha)| \lt{} 1$, and hence that the iteration $x_{n+1} = \cos x_n$ converges.

(c) Starting from $x_0 = 0.5$, find $x_3$ to 6 decimal places.

</details>

<details>
<summary>Solution 16</summary>
(a) $g(0) = \cos 0 = 1 \gt{} 0$ and $g(\pi/2) = \cos(\pi/2) = 0 \lt{} \pi/2$.
Since $g$ is continuous and $g(x) - x$ changes sign on $(0, \pi/2)$ (check: $g(0) - 0 = 1 \gt{} 0$,
$g(\pi/2) - \pi/2 = -\pi/2 \lt{} 0$), a fixed point exists.

(b) $g'(x) = -\sin x$. At the fixed point $\alpha \approx 0.7391$:
$|g'(\alpha)| = \sin(0.7391) \approx 0.6736 \lt{} 1$. Converges.

(c) $x_0 = 0.500000$ $x_1 = \cos(0.5) = 0.877583$ $x_2 = \cos(0.877583) = 0.639012$
$x_3 = \cos(0.639012) = 0.802685$

**If you get this wrong, revise:** [Convergence Condition](#22-convergence-condition) — Section 2.2.

</details>

<details>
<summary>Problem 17</summary>
A student uses Newton-Raphson to solve $f(x) = \tan x - 1 = 0$ starting from $x_0 = 1.3$.

(a) Compute $x_1$.

(b) The root is $\alpha = \pi/4 \approx 0.7854$. Explain why starting at $x_0 = 1.3$ may not be
ideal, and identify a value of $x_0$ between $0$ and $\pi/2$ where Newton-Raphson would fail
entirely.

</details>

<details>
<summary>Solution 17</summary>
(a) $f(x) = \tan x - 1$, $f'(x) = \sec^2 x = 1/\cos^2 x$.

$x_0 = 1.3$: $f(1.3) = \tan(1.3) - 1 \approx 3.6021 - 1 = 2.6021$.
$f'(1.3) = \sec^2(1.3) = 1/\cos^2(1.3) \approx 1/0.0754 \approx 13.26$.
$x_1 = 1.3 - 2.6021/13.26 \approx 1.3 - 0.1962 = 1.1038$.

This is still far from $\alpha = 0.7854$. The function is very steep here (large $f'$), so the step
is small but the iterate is far from the root.

(b) Newton-Raphson fails when $f'(x_0) = 0$, i.e., $\sec^2 x_0 = 0$, which never happens since
$\sec^2 x \geq 1$ for all $x$. However, as $x_0 \to \pi/2^-$, $\cos x_0 \to 0$ and
$f'(x_0) \to \infty$, while $f(x_0) = \tan x_0 - 1 \to \infty$. The ratio
$f(x_0)/f'(x_0) = (\tan x_0 - 1)\cos^2 x_0$ tends to a finite limit, but the function becomes
extremely steep near $\pi/2$, making the iteration numerically unstable. Starting very close to
$\pi/2$ sends the iterate far away.

A better starting point is $x_0 = 1.0$: $f(1) = \tan 1 - 1 \approx 0.5574$,
$f'(1) = \sec^2 1 \approx 3.426$. $x_1 = 1 - 0.5574/3.426 \approx 0.8373$, already close to
$\alpha = 0.7854$.

**If you get this wrong, revise:** [Horizontal Tangent Failure](#34-horizontal-tangent-failure) —
Section 3.4.

</details>

:::

:::

:::

:::

:::
