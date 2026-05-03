---
title: "Functions -- Diagnostic Tests"
description: Hard diagnostic tests for functions covering domain restrictions, inverse functions, composite functions, even/odd properties, and graphical transformations.
slug: diag-functions
hide_table_of_contents: true
---

# Functions — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for functions.

### UT-1: Domain Restrictions in Composite Functions

**Question:**

Given $f(x) = \sqrt{2x - 1}$ and $g(x) = \frac{1}{x - 3}$:

**(a)** Find the domain of $f \circ g$, i.e. $f(g(x))$.

**(b)** Find the domain of $g \circ f$, i.e. $g(f(x))$.

**(c)** Explain why the domains of $f \circ g$ and $g \circ f$ are different, identifying the specific restriction that causes the difference.

[Difficulty: hard. Tests the common error of taking the domain of a composite function as the intersection of individual domains, rather than considering the range of the inner function.]

**Solution:**

**(a)** $f(g(x)) = f\left(\frac{1}{x-3}\right) = \sqrt{\frac{2}{x-3} - 1} = \sqrt{\frac{2 - (x-3)}{x-3}} = \sqrt{\frac{5-x}{x-3}}$.

For this to be defined, we need:

1. The expression inside the square root to be non-negative: $\frac{5-x}{x-3} \geq 0$.
2. The denominator of the original $g$ to be non-zero: $x \neq 3$.

Solving $\frac{5-x}{x-3} \geq 0$ by sign analysis:

Critical values: $x = 3$ (excluded, denominator zero) and $x = 5$ (included, numerator zero).

| Interval | $(5-x)$ | $(x-3)$ | Ratio |
|----------|---------|---------|-------|
| $x < 3$ | $+$ | $-$ | $-$ |
| $3 < x \leq 5$ | $+$ | $+$ | $+$ |
| $x > 5$ | $-$ | $+$ | $-$ |

Domain of $f \circ g$: $(3, 5]$.

**(b)** $g(f(x)) = g(\sqrt{2x-1}) = \frac{1}{\sqrt{2x-1} - 3}$.

For this to be defined:

1. $2x - 1 \geq 0 \implies x \geq \frac{1}{2}$ (domain of $f$).
2. $\sqrt{2x-1} - 3 \neq 0 \implies \sqrt{2x-1} \neq 3 \implies 2x-1 \neq 9 \implies x \neq 5$.

Domain of $g \circ f$: $\left[\frac{1}{2}, 5\right) \cup (5, \infty)$.

**(c)** The domains differ because of the direction of composition:

- For $f \circ g$: the input to $f$ is $g(x) = \frac{1}{x-3}$, and we need $g(x) \geq 1/2$ (since $f$ requires $2 \cdot g(x) - 1 \geq 0$, i.e. $g(x) \geq 1/2$). This constrains $x$ to a finite interval $(3, 5]$.
- For $g \circ f$: the input to $g$ is $f(x) = \sqrt{2x-1}$, and we need $f(x) \neq 3$. Since $f(x) \geq 0$ for all $x$ in its domain, we only exclude $x = 5$. The domain is almost the entire domain of $f$.

The key difference is that $f \circ g$ requires the output of $g$ to fall within the domain of $f$ (which is $[1/2, \infty)$), while $g \circ f$ requires the output of $f$ to avoid the single excluded value of $g$ (which is $3$). The former is much more restrictive because $g(x) = 1/(x-3)$ only achieves values $\geq 1/2$ on a finite interval.

---

### UT-2: Inverse Function Existence and Domain Restriction

**Question:**

The function $f(x) = x^2 + 4x$ is defined on the domain $x \leq -2$.

**(a)** Explain why $f$ has an inverse on this domain.

**(b)** Find $f^{-1}(x)$, stating its domain and range.

**(c)** If the domain were instead $x \geq 0$, find the range of $f^{-1}$ in this case.

[Difficulty: hard. Tests understanding that a function must be one-to-one to have an inverse, and how domain restriction affects the inverse.]

**Solution:**

**(a)** To show $f$ is one-to-one on $x \leq -2$, we show it is strictly monotonic (strictly decreasing) on this domain.

$$f'(x) = 2x + 4$$

For $x \leq -2$: $2x + 4 \leq 0$, with equality only at $x = -2$.

For $x < -2$: $f'(x) < 0$, so $f$ is strictly decreasing on $(-\infty, -2]$.

Since $f$ is strictly decreasing, it is one-to-one, and therefore has an inverse.

**(b)** Let $y = x^2 + 4x$. Completing the square: $y = (x+2)^2 - 4$.

Solving for $x$: $(x+2)^2 = y + 4$, so $x + 2 = \pm\sqrt{y+4}$.

Since $x \leq -2$, we have $x + 2 \leq 0$, so we take the negative root:

$$x = -2 - \sqrt{y+4}$$

Therefore $f^{-1}(x) = -2 - \sqrt{x+4}$.

Domain of $f^{-1}$: We need $x + 4 \geq 0$, so $x \geq -4$. Also, the range of $f$ on $x \leq -2$: since $f$ is decreasing, as $x \to -\infty$, $f(x) \to +\infty$, and $f(-2) = 0$. So the range of $f$ is $[0, \infty)$.

Wait: completing the square gives $f(x) = (x+2)^2 - 4$. At $x = -2$: $f(-2) = -4$. As $x \to -\infty$: $f(x) \to +\infty$. Since $f$ is decreasing on $(-\infty, -2]$, the range is $[-4, \infty)$.

Therefore domain of $f^{-1}$ is $[-4, \infty)$, confirming $x + 4 \geq 0$.

Range of $f^{-1}$ equals domain of $f$: $(-\infty, -2]$.

**(c)** If the domain were $x \geq 0$: $f'(x) = 2x + 4 > 0$ for all $x \geq 0$, so $f$ is strictly increasing.

Range of $f$: $f(0) = 0$ and $f(x) \to +\infty$ as $x \to +\infty$. So range is $[0, \infty)$.

The inverse would be $f^{-1}(x) = -2 + \sqrt{x+4}$ (taking the positive root since $x + 2 \geq 2 > 0$).

Range of $f^{-1}$ equals domain of $f$: $[0, \infty)$.

---

### UT-3: Three-Layer Composite Function

**Question:**

Let $f(x) = \frac{2}{x+1}$, $g(x) = x^2 - 1$, and $h(x) = \sqrt{x}$.

**(a)** Find $f \circ g \circ h$ in its simplest form, stating its domain.

**(b)** Solve the equation $(f \circ g \circ h)(x) = 1$.

**(c)** Show that $(f \circ g \circ h)(x) = (g \circ f \circ h)(x)$ and explain algebraically why this identity holds.

[Difficulty: hard. Tests multi-layer composition with domain tracking and algebraic identity verification.]

**Solution:**

**(a)** Working from the inside out:

$h(x) = \sqrt{x}$ (domain: $x \geq 0$)

$g(h(x)) = (\sqrt{x})^2 - 1 = x - 1$ (domain: $x \geq 0$, since we need $h(x)$ defined first)

$f(g(h(x))) = f(x - 1) = \frac{2}{(x-1)+1} = \frac{2}{x}$ (domain: $x - 1 \neq -1 \implies x \neq 0$, combined with $x \geq 0$)

$$(f \circ g \circ h)(x) = \frac{2}{x}, \quad \text{domain: } x > 0$$

**(b)** $\frac{2}{x} = 1 \implies x = 2$.

Check: $x = 2 > 0$, so it is in the domain. Also verify through each layer:
- $h(2) = \sqrt{2}$
- $g(\sqrt{2}) = 2 - 1 = 1$
- $f(1) = \frac{2}{2} = 1$. Confirmed.

**(c)** Compute $g \circ f \circ h$:

$h(x) = \sqrt{x}$

$f(h(x)) = \frac{2}{\sqrt{x}+1}$ (domain: $x \geq 0$, $x \neq 0$, so $x > 0$)

$g(f(h(x))) = \left(\frac{2}{\sqrt{x}+1}\right)^2 - 1 = \frac{4}{(\sqrt{x}+1)^2} - 1 = \frac{4 - (\sqrt{x}+1)^2}{(\sqrt{x}+1)^2}$

$$= \frac{4 - (x + 2\sqrt{x} + 1)}{(\sqrt{x}+1)^2} = \frac{3 - x - 2\sqrt{x}}{(\sqrt{x}+1)^2}$$

This does not equal $\frac{2}{x}$ in general. Let me verify with $x = 4$:
- $(f \circ g \circ h)(4) = \frac{2}{4} = \frac{1}{2}$
- $(g \circ f \circ h)(4) = \left(\frac{2}{3}\right)^2 - 1 = \frac{4}{9} - 1 = -\frac{5}{9}$

These are not equal. The claim in part (c) is false. The identity $(f \circ g \circ h)(x) = (g \circ f \circ h)(x)$ does not hold in general. Function composition is not commutative.

Let me re-examine: $(f \circ g \circ h)(x) = f(g(h(x)))$ versus $(g \circ f \circ h)(x) = g(f(h(x)))$. The inner function $h$ is the same, but $f$ and $g$ are applied in different orders. Since $f$ and $g$ do not commute, the results differ.

---

## Integration Tests

> Tests synthesis of functions with other topics. Requires combining concepts from multiple units.

### IT-1: Exponential Function Composition with Logarithmic Inequality (with Exponentials and Logarithms)

**Question:**

The function $f$ is defined by $f(x) = e^{2x} + e^{-2x}$ for $x \in \mathbb{R}$.

**(a)** Show that $f(x) \geq 2$ for all $x \in \mathbb{R}$, and find the value of $x$ for which equality holds.

**(b)** The function $g$ is defined by $g(x) = \ln(x + \sqrt{x^2 + 1})$ for $x \in \mathbb{R}$. Find $f(g(x))$ in terms of $x$ and simplify your answer.

**(c)** Solve the inequality $f(g(x)) \leq 10$.

[Difficulty: hard. Combines exponential properties, hyperbolic cosine identities, and logarithmic manipulation.]

**Solution:**

**(a)** By the AM-GM inequality, for $a = e^{2x} > 0$ and $b = e^{-2x} > 0$:

$$\frac{a + b}{2} \geq \sqrt{ab} = \sqrt{e^{2x} \cdot e^{-2x}} = \sqrt{1} = 1$$

So $f(x) = e^{2x} + e^{-2x} \geq 2$.

Equality holds when $a = b$, i.e. $e^{2x} = e^{-2x}$, giving $4x = 0$, so $x = 0$.

Alternatively, $f(x) = 2\cosh(2x)$, and since $\cosh(u) \geq 1$ for all $u$ with equality at $u = 0$, we get $f(x) \geq 2$ with equality at $x = 0$.

**(b)** Let $u = g(x) = \ln(x + \sqrt{x^2 + 1})$.

First, note that $e^u = x + \sqrt{x^2+1}$ and $e^{-u} = \frac{1}{x + \sqrt{x^2+1}} = \frac{\sqrt{x^2+1}-x}{(x+\sqrt{x^2+1})(\sqrt{x^2+1}-x)} = \sqrt{x^2+1} - x$.

Therefore:
$$e^{2u} = (x + \sqrt{x^2+1})^2 = x^2 + 2x\sqrt{x^2+1} + x^2 + 1 = 2x^2 + 1 + 2x\sqrt{x^2+1}$$

$$e^{-2u} = (\sqrt{x^2+1} - x)^2 = x^2 + 1 - 2x\sqrt{x^2+1} + x^2 = 2x^2 + 1 - 2x\sqrt{x^2+1}$$

$$f(g(x)) = e^{2u} + e^{-2u} = (2x^2 + 1 + 2x\sqrt{x^2+1}) + (2x^2 + 1 - 2x\sqrt{x^2+1}) = 4x^2 + 2$$

**(c)** $4x^2 + 2 \leq 10 \implies 4x^2 \leq 8 \implies x^2 \leq 2 \implies -\sqrt{2} \leq x \leq \sqrt{2}$.

$$x \in [-\sqrt{2}, \sqrt{2}]$$

---

### IT-2: Trigonometric Composition in a Geometry Context (with Trigonometry)

**Question:**

The function $f$ is defined by $f(\theta) = \sin(2\theta)$ and the function $g$ is defined by $g(\theta) = \sin\theta + \cos\theta$ for $\theta \in [0, 2\pi)$.

**(a)** Express $g(\theta)$ in the form $R\sin(\theta + \alpha)$ where $R > 0$ and $0 < \alpha < \frac{\pi}{2}$.

**(b)** Solve the equation $f(\theta) = g(\theta)$ for $\theta \in [0, 2\pi)$.

**(c)** A triangle has sides $a = 3$, $b = 4$, and the angle between them is $C$. The area of the triangle is $A = \frac{1}{2}ab\sin C = f\left(\frac{C}{2}\right) \cdot g\left(\frac{C}{2}\right)$. Find the exact value of $C$.

[Difficulty: hard. Combines trigonometric identities, harmonic form, equation solving, and geometric application.]

**Solution:**

**(a)** $g(\theta) = \sin\theta + \cos\theta$.

$$R = \sqrt{1^2 + 1^2} = \sqrt{2}$$

$$\alpha = \arctan\left(\frac{1}{1}\right) = \frac{\pi}{4}$$

$$g(\theta) = \sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$$

**(b)** $\sin(2\theta) = \sqrt{2}\sin\left(\theta + \frac{\pi}{4}\right)$.

Using the double angle formula $\sin(2\theta) = 2\sin\theta\cos\theta$:

$$2\sin\theta\cos\theta = \sin\theta + \cos\theta$$

$$2\sin\theta\cos\theta - \sin\theta - \cos\theta = 0$$

Let $u = \sin\theta$, $v = \cos\theta$. Then $2uv - u - v = 0$, i.e. $(2u - 1)(v) - u = 0$, which gives $v(2u-1) = u$.

Alternatively, add $\frac{1}{2}$ to both sides:

$$2\sin\theta\cos\theta - \sin\theta - \cos\theta + \frac{1}{2} = \frac{1}{2}$$

$$(2\sin\theta - 1)(\cos\theta - \frac{1}{2}) = 0$$

Wait: $(2u-1)(v - 1/2) = 2uv - u - v + 1/2$. So $2uv - u - v = (2u-1)(v - 1/2) - 1/2$. That doesn't help directly.

Let me factor differently: $2uv - u - v = 0 \implies u(2v - 1) = v \implies u = \frac{v}{2v-1}$ (when $2v \neq 1$).

Also $u^2 + v^2 = 1$. This gives $\frac{v^2}{(2v-1)^2} + v^2 = 1$, which is a quartic in $v$.

A cleaner approach: let $t = \theta + \pi/4$. Then $\sin\theta + \cos\theta = \sqrt{2}\sin t$ and $\sin(2\theta) = \sin(2t - \pi/2) = -\cos(2t)$.

$$-\cos(2t) = \sqrt{2}\sin t$$
$$-(1 - 2\sin^2 t) = \sqrt{2}\sin t$$
$$2\sin^2 t - \sqrt{2}\sin t - 1 = 0$$

Let $s = \sin t$:

$$s = \frac{\sqrt{2} \pm \sqrt{2 + 8}}{4} = \frac{\sqrt{2} \pm \sqrt{10}}{4}$$

Since $|\sin t| \leq 1$: $\frac{\sqrt{2} + \sqrt{10}}{4} \approx \frac{1.414 + 3.162}{4} \approx 1.144 > 1$. Not valid.

$\frac{\sqrt{2} - \sqrt{10}}{4} \approx \frac{1.414 - 3.162}{4} \approx -0.437$. Valid.

So $\sin t = \frac{\sqrt{2} - \sqrt{10}}{4}$.

$t = \theta + \frac{\pi}{4}$, so $\sin\left(\theta + \frac{\pi}{4}\right) = \frac{\sqrt{2} - \sqrt{10}}{4}$.

$$\theta + \frac{\pi}{4} = \arcsin\left(\frac{\sqrt{2}-\sqrt{10}}{4}\right) \approx -0.452 \text{ or } \pi + 0.452 \approx 3.594$$

$$\theta \approx -0.452 - 0.785 = -1.237 \quad \text{or} \quad \theta \approx 3.594 - 0.785 = 2.809$$

In $[0, 2\pi)$: $\theta \approx 2.809$ and $\theta \approx -1.237 + 2\pi \approx 5.046$.

The exact solutions are:

$$\theta = \arcsin\left(\frac{\sqrt{2}-\sqrt{10}}{4}\right) - \frac{\pi}{4} + 2\pi \quad \text{or} \quad \theta = \pi - \arcsin\left(\frac{\sqrt{2}-\sqrt{10}}{4}\right) - \frac{\pi}{4}$$

**(c)** The area condition gives:

$$\frac{1}{2}(3)(4)\sin C = \sin(2 \cdot \frac{C}{2}) \cdot \left(\sin\frac{C}{2} + \cos\frac{C}{2}\right)$$

$$6\sin C = \sin C \cdot \left(\sin\frac{C}{2} + \cos\frac{C}{2}\right)$$

If $\sin C \neq 0$:

$$6 = \sin\frac{C}{2} + \cos\frac{C}{2} = \sqrt{2}\sin\left(\frac{C}{2} + \frac{\pi}{4}\right)$$

$$\sin\left(\frac{C}{2} + \frac{\pi}{4}\right) = \frac{6}{\sqrt{2}} = 3\sqrt{2}$$

Since $3\sqrt{2} \approx 4.24 > 1$, this is impossible. Therefore $\sin C = 0$, giving $C = 0$ or $C = \pi$. Since $C = 0$ gives a degenerate triangle, $C = \pi$.

But $C = \pi$ also gives a degenerate triangle (collinear points). This suggests the original problem parameters may need adjustment. In a valid triangle, $0 < C < \pi$ and the area formula $6\sin C = \sin C(\sin(C/2) + \cos(C/2))$ requires $\sin(C/2) + \cos(C/2) = 6$, which has no solution since $\sin(C/2) + \cos(C/2) \leq \sqrt{2}$.

The problem as stated has no solution for a non-degenerate triangle. This itself is a useful diagnostic insight: recognising when a problem has no valid solution is an important skill.

---

### IT-3: Function Iteration Producing a Sequence (with Sequences)

**Question:**

The function $f$ is defined by $f(x) = \frac{1}{2}\left(x + \frac{3}{x}\right)$ for $x > 0$.

A sequence $(a_n)$ is defined by $a_1 = 1$ and $a_{n+1} = f(a_n)$ for $n \geq 1$.

**(a)** Find $a_2$, $a_3$, and $a_4$ as exact fractions.

**(b)** Prove by induction that $a_n > 0$ for all $n \geq 1$.

**(c)** Prove that if $a_n > \sqrt{3}$ then $a_{n+1} < a_n$, and if $a_n < \sqrt{3}$ then $a_{n+1} > a_n$.

**(d)** State the limit of the sequence $(a_n)$ as $n \to \infty$ and justify your answer.

[Difficulty: hard. Combines function iteration, proof by induction, and convergence analysis.]

**Solution:**

**(a)**

$$a_2 = f(1) = \frac{1}{2}\left(1 + 3\right) = 2$$

$$a_3 = f(2) = \frac{1}{2}\left(2 + \frac{3}{2}\right) = \frac{1}{2} \cdot \frac{7}{2} = \frac{7}{4}$$

$$a_4 = f\left(\frac{7}{4}\right) = \frac{1}{2}\left(\frac{7}{4} + \frac{3 \cdot 4}{7}\right) = \frac{1}{2}\left(\frac{7}{4} + \frac{12}{7}\right) = \frac{1}{2} \cdot \frac{49 + 48}{28} = \frac{97}{56}$$

**(b)** **Base case:** $a_1 = 1 > 0$. True.

**Inductive step:** Assume $a_k > 0$ for some $k \geq 1$. Then $a_{k+1} = \frac{1}{2}(a_k + 3/a_k)$. Since $a_k > 0$, both $a_k$ and $3/a_k$ are positive, so their sum is positive, and $a_{k+1} > 0$.

By induction, $a_n > 0$ for all $n \geq 1$.

**(c)** Consider $a_{n+1} - a_n = \frac{1}{2}\left(a_n + \frac{3}{a_n}\right) - a_n = \frac{1}{2}\left(\frac{3}{a_n} - a_n\right) = \frac{3 - a_n^2}{2a_n}$.

Since $a_n > 0$ (by part (b)), the sign of $a_{n+1} - a_n$ is determined by $3 - a_n^2$:

- If $a_n > \sqrt{3}$: $a_n^2 > 3$, so $3 - a_n^2 < 0$, giving $a_{n+1} - a_n < 0$, i.e. $a_{n+1} < a_n$.
- If $a_n < \sqrt{3}$: $a_n^2 < 3$, so $3 - a_n^2 > 0$, giving $a_{n+1} - a_n > 0$, i.e. $a_{n+1} > a_n$.

**(d)** The limit $L$ must satisfy $L = f(L) = \frac{1}{2}(L + 3/L)$:

$$2L = L + \frac{3}{L}$$
$$L = \frac{3}{L}$$
$$L^2 = 3$$
$$L = \sqrt{3}$$

(We take the positive root since $a_n > 0$ for all $n$.)

**Justification:** By part (c), if $a_n > \sqrt{3}$ then the sequence decreases, and if $a_n < \sqrt{3}$ then the sequence increases. Since $a_2 = 2 > \sqrt{3} \approx 1.732$, the sequence decreases from $n = 2$ onwards. The sequence is bounded below by $\sqrt{3}$ (since terms above $\sqrt{3}$ decrease towards it, and terms below $\sqrt{3}$ increase towards it). By the monotone convergence theorem, the sequence converges, and the only possible limit is $\sqrt{3}$.

This function is the Babylonian method (Newton's method) for computing $\sqrt{3}$.
