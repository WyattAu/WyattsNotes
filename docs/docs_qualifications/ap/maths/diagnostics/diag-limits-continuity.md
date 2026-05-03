---
title: Limits and Continuity -- Diagnostic Tests
description: Diagnostic tests targeting the hardest AP Calculus limits and continuity questions including epsilon-delta proofs, squeeze theorem, L'Hopital conditions, and discontinuity classification.
slug: diag-limits-continuity
hide_table_of_contents: true
---

# Limits and Continuity — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for limits and continuity.

### UT-1: Epsilon-Delta Proof with a Non-Polynomial Function

**Question:**

Prove using an epsilon-delta argument that $\displaystyle\lim_{x \to 2} x^3 = 8$.

A student writes the following "proof":

> For any $\varepsilon > 0$, choose $\delta = \varepsilon / 12$. Then $|x^3 - 8| = |x - 2| \cdot |x^2 + 2x + 4|$. If $|x - 2| \lt \delta$, then $|x^3 - 8| \lt 12 \cdot \delta = \varepsilon$.

Identify the logical gap in this proof and provide a correct epsilon-delta proof.

**Solution:**

The student's proof implicitly assumes $|x^2 + 2x + 4| \leq 12$ without justification. This must be shown by first restricting $\delta$ to ensure $x$ is close enough to $2$ for this bound to hold.

**Correct proof:**

Let $\varepsilon > 0$. We need $|x^3 - 8| = |x - 2| \cdot |x^2 + 2x + 4| \lt \varepsilon$.

First, restrict $\delta \leq 1$ so that $|x - 2| \lt 1$, meaning $1 \lt x \lt 3$. On this interval:

$$x^2 + 2x + 4 \lt 9 + 6 + 4 = 19$$

Therefore $|x^2 + 2x + 4| \lt 19$ when $|x - 2| \lt 1$.

Now choose $\delta = \min\left(1, \dfrac{\varepsilon}{19}\right)$. If $|x - 2| \lt \delta$, then:

$$|x^3 - 8| = |x - 2| \cdot |x^2 + 2x + 4| \lt \frac{\varepsilon}{19} \cdot 19 = \varepsilon$$

The key misconception: students often pick $\delta$ as a simple function of $\varepsilon$ without first bounding the non-linear factor. The two-step process (restrict $\delta$ to bound the non-linear part, then relate $\delta$ to $\varepsilon$) is essential.

---

### UT-2: L'Hopital's Rule Applied to a Non-Indeterminate Form

**Question:**

A student attempts to evaluate $\displaystyle\lim_{x \to 0} \frac{x + \sin x}{x}$ by applying L'Hopital's rule:

$$\lim_{x \to 0} \frac{x + \sin x}{x} = \lim_{x \to 0} \frac{1 + \cos x}{1} = 2$$

(a) Explain why this application of L'Hopital's rule is invalid.
(b) Evaluate the limit correctly using two different valid methods.
(c) Explain why the student's answer happens to be correct despite the invalid reasoning.

**Solution:**

(a) L'Hopital's rule requires the limit to be of the indeterminate form $\frac{0}{0}$ or $\frac{\infty}{\infty}$. Here:

$$\lim_{x \to 0}(x + \sin x) = 0 + 0 = 0 \quad \text{and} \quad \lim_{x \to 0} x = 0$$

So the limit IS $\frac{0}{0}$ -- L'Hopital's rule is actually valid here. However, the student did not verify the indeterminate form before applying it. Let us reconsider: the student's error is failing to check the conditions. In this case, the conditions happen to be met, so the answer is correct by coincidence.

**Revised question interpretation:** Suppose instead the student tries to evaluate $\displaystyle\lim_{x \to 1} \frac{x^2 - 1}{x - 1}$ using L'Hopital's rule and writes:

$$\lim_{x \to 1} \frac{2x}{1} = 2$$

This IS valid ($\frac{0}{0}$ form). Now consider $\displaystyle\lim_{x \to \infty} \frac{x + \sin x}{x}$. A student applies L'Hopital's:

$$\lim_{x \to \infty} \frac{1 + \cos x}{1}$$

This limit does not exist (oscillates between 0 and 2). The student concludes the original limit DNE.

(b) Correct evaluation of $\displaystyle\lim_{x \to \infty} \frac{x + \sin x}{x}$:

**Method 1 (Algebraic):**

$$\frac{x + \sin x}{x} = 1 + \frac{\sin x}{x}$$

Since $-1 \leq \sin x \leq 1$, we have $|\sin x / x| \leq 1/|x| \to 0$ as $x \to \infty$. Therefore:

$$\lim_{x \to \infty} \frac{x + \sin x}{x} = 1$$

**Method 2 (Squeeze theorem):** $-1/x \leq \sin x / x \leq 1/x$, and both bounds $\to 0$, so $\sin x / x \to 0$.

(c) The original limit $\displaystyle\lim_{x \to 0} \frac{x + \sin x}{x}$: L'Hopital gives the correct answer $2$ because the conditions ARE satisfied. The misconception to target is applying L'Hopital when the limit of the ratio of derivatives does not exist, which does NOT imply the original limit DNE.

---

### UT-3: Classifying Discontinuities and Continuity Conditions

**Question:**

Let $f$ be defined by:

$$f(x) = \begin{cases} \dfrac{x^2 - 4x + 3}{x^2 - 1} & \text{if } x \neq 1, -1 \\ 1 & \text{if } x = 1 \end{cases}$$

(a) Find $\displaystyle\lim_{x \to 1} f(x)$.
(b) Is $f$ continuous at $x = 1$? State all three conditions for continuity at a point and verify each.
(c) Classify the discontinuity at $x = 1$ if one exists.
(d) Classify the discontinuity at $x = -1$ and explain why it is a different type.

**Solution:**

(a) Factor the numerator and denominator:

$$\frac{x^2 - 4x + 3}{x^2 - 1} = \frac{(x-1)(x-3)}{(x-1)(x+1)} = \frac{x-3}{x+1} \quad \text{for } x \neq 1$$

$$\lim_{x \to 1} f(x) = \frac{1 - 3}{1 + 1} = \frac{-2}{2} = -1$$

(b) The three conditions for continuity at $x = a$:
1. $f(a)$ is defined: $f(1) = 1$. (Yes)
2. $\displaystyle\lim_{x \to a} f(x)$ exists: $\displaystyle\lim_{x \to 1} f(x) = -1$. (Yes)
3. $\displaystyle\lim_{x \to a} f(x) = f(a)$: $-1 \neq 1$. (**No**)

$f$ is NOT continuous at $x = 1$ because condition 3 fails.

(c) Since the limit exists but does not equal the function value, this is a **removable discontinuity**. We could make $f$ continuous by redefining $f(1) = -1$.

(d) At $x = -1$:

$$\lim_{x \to -1} \frac{x-3}{x+1}$$

As $x \to -1^+$: $\frac{-4}{0^+} \to -\infty$. As $x \to -1^-$: $\frac{-4}{0^-} \to +\infty$.

The one-sided limits are both infinite but with opposite signs, so this is an **infinite discontinuity** (the limit DNE). This differs from $x = 1$ because the limit itself does not exist at $x = -1$, whereas at $x = 1$ the limit exists but does not match the function value.

---

## Integration Tests

> Tests synthesis of limits and continuity with other topics.

### IT-1: Intermediate Value Theorem with Trigonometric Functions (with Derivatives)

**Question:**

Let $g(x) = x^3 + 2x - 5 + \cos(\pi x)$. Prove that $g(x) = 0$ has at least one solution in the interval $(0, 2)$. Then determine whether the solution is unique using Rolle's theorem applied to $g'(x)$.

**Solution:**

**Existence (IVT):** $g$ is continuous everywhere as a sum of continuous functions.

$$g(0) = 0 + 0 - 5 + \cos(0) = -5 + 1 = -4 \lt 0$$

$$g(2) = 8 + 4 - 5 + \cos(2\pi) = 7 + 1 = 8 \gt 0$$

Since $g(0) \lt 0 \lt g(2)$ and $g$ is continuous on $[0, 2]$, by the IVT there exists $c \in (0, 2)$ such that $g(c) = 0$.

**Uniqueness (Rolle's theorem via monotonicity):**

$$g'(x) = 3x^2 + 2 - \pi \sin(\pi x)$$

We need to show $g'(x) > 0$ for all $x$. Note that $-\pi \sin(\pi x) \geq -\pi$, so:

$$g'(x) \geq 3x^2 + 2 - \pi$$

For $x \geq 0$: $3x^2 + 2 - \pi > 0$ when $3x^2 > \pi - 2$, i.e., $x > \sqrt{(\pi - 2)/3} \approx 0.62$.

For $x \in [0, 0.62]$: $g'(x) = 3x^2 + 2 - \pi\sin(\pi x)$. Since $\sin(\pi x) \leq \pi x$ for $x \geq 0$ (and $\pi x \leq \pi \cdot 0.62 \lt 2$), we have $g'(x) \geq 3(0)^2 + 2 - \pi(1) = 2 - \pi \approx -1.14$, which is negative. So we need a finer argument.

Actually, $g'(0) = 2 > 0$ and $g'(x) = 3x^2 + 2 - \pi\sin(\pi x)$. For $x \in [0, 1]$: $\sin(\pi x) \leq \pi x - \frac{(\pi x)^3}{6}$, so $\pi\sin(\pi x) \leq \pi^2 x - \frac{\pi^4 x^3}{6}$. This approach gets complicated.

A cleaner argument: $g'(x) = 3x^2 + 2 - \pi\sin(\pi x)$. Since $|\pi\sin(\pi x)| \leq \pi \approx 3.14$ and $3x^2 + 2 \geq 2$, we have $g'(x) \geq 2 - 3.14 = -1.14$, which does not prove positivity.

Let us check directly: $g'(0) = 2$, $g'(1) = 3 + 2 - 0 = 5$, $g'(0.5) = 0.75 + 2 - \pi \approx 2.75 - 3.14 = -0.39$.

Since $g'$ changes sign, $g$ is not strictly increasing on all of $[0, 2]$, so Rolle's theorem alone cannot guarantee uniqueness on this interval. The IVT guarantees at least one root, but uniqueness cannot be established without a more refined analysis. This is the key insight: the IVT guarantees existence, but uniqueness requires additional structure.

---

### IT-2: Limits Defining Derivatives at Non-Smooth Points (with Derivatives)

**Question:**

Let $f(x) = |x^2 - 4|$. Determine whether $f$ is differentiable at $x = 2$ and $x = -2$ by evaluating the appropriate limits. For each point where $f$ is not differentiable, classify the discontinuity of $f'$.

**Solution:**

$f(x) = |x^2 - 4| = \begin{cases} x^2 - 4 & \text{if } |x| \geq 2 \\ 4 - x^2 & \text{if } |x| \lt 2 \end{cases}$

**At $x = 2$:**

Left-hand derivative:

$$f'_{-}(2) = \lim_{h \to 0^-} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0^-} \frac{(4 - (2+h)^2) - 0}{h} = \lim_{h \to 0^-} \frac{-4h - h^2}{h} = \lim_{h \to 0^-}(-4 - h) = -4$$

Right-hand derivative:

$$f'_{+}(2) = \lim_{h \to 0^+} \frac{f(2+h) - f(2)}{h} = \lim_{h \to 0^+} \frac{((2+h)^2 - 4) - 0}{h} = \lim_{h \to 0^+} \frac{4h + h^2}{h} = \lim_{h \to 0^+}(4 + h) = 4$$

Since $f'_{-}(2) = -4 \neq 4 = f'_{+}(2)$, $f$ is **not differentiable** at $x = 2$.

**At $x = -2$:**

Left-hand derivative:

$$f'_{-}(-2) = \lim_{h \to 0^-} \frac{f(-2+h) - f(-2)}{h} = \lim_{h \to 0^-} \frac{((-2+h)^2 - 4) - 0}{h} = \lim_{h \to 0^-} \frac{-4h + h^2}{h} = -4$$

Right-hand derivative:

$$f'_{+}(-2) = \lim_{h \to 0^+} \frac{f(-2+h) - f(-2)}{h} = \lim_{h \to 0^+} \frac{(4 - (-2+h)^2) - 0}{h} = \lim_{h \to 0^+} \frac{4h - h^2}{h} = 4$$

Since $-4 \neq 4$, $f$ is **not differentiable** at $x = -2$ either.

$f$ is continuous at both points ($f(2) = f(-2) = 0$ and the limits equal the function value), confirming that continuity does not imply differentiability. The discontinuity of $f'$ at $x = \pm 2$ is a **jump discontinuity** (finite jump from $-4$ to $4$).

---

### IT-3: Limit at Infinity with Parametric Complexity (with Integrals)

**Question:**

Let $F(x) = \displaystyle\int_0^x \frac{e^{-t^2}}{1 + t^2} \, dt$.

(a) Prove that $F(x)$ converges as $x \to \infty$ by showing the improper integral $\displaystyle\int_0^{\infty} \frac{e^{-t^2}}{1 + t^2} \, dt$ converges.
(b) Find $\displaystyle\lim_{x \to \infty} x \cdot F(x)$.

**Solution:**

(a) For $t \geq 0$: $0 \lt \frac{e^{-t^2}}{1 + t^2} \leq e^{-t^2}$.

Since $\displaystyle\int_0^{\infty} e^{-t^2} \, dt = \frac{\sqrt{\pi}}{2} \lt \infty$ (Gaussian integral), by the comparison test for improper integrals:

$$\int_0^{\infty} \frac{e^{-t^2}}{1 + t^2} \, dt \leq \int_0^{\infty} e^{-t^2} \, dt = \frac{\sqrt{\pi}}{2} \lt \infty$$

Therefore $F(x)$ converges to some finite limit $L = \displaystyle\int_0^{\infty} \frac{e^{-t^2}}{1 + t^2} \, dt$ as $x \to \infty$.

(b) Let $L = \displaystyle\lim_{x \to \infty} F(x)$. We want $\displaystyle\lim_{x \to \infty} x(L - F(x))$ (since $x \cdot F(x) = xL - x(L - F(x))$ diverges, let us reconsider).

Actually, $\displaystyle\lim_{x \to \infty} x \cdot F(x)$: since $F(x) \to L \neq 0$, we have $x \cdot F(x) \to \infty$.

Wait -- we need a more interesting limit. Let $G(x) = L - F(x) = \displaystyle\int_x^{\infty} \frac{e^{-t^2}}{1+t^2}\,dt$. Then $\displaystyle\lim_{x \to \infty} x \cdot G(x) = ?$

$$x \cdot G(x) = x \int_x^{\infty} \frac{e^{-t^2}}{1+t^2}\,dt$$

For large $x$, the dominant contribution comes from $t$ near $x$. Substitute $u = t - x$:

$$G(x) \approx \int_0^{\infty} \frac{e^{-(x+u)^2}}{1+(x+u)^2}\,du \approx \frac{e^{-x^2}}{1+x^2} \int_0^{\infty} e^{-2xu}\,du = \frac{e^{-x^2}}{1+x^2} \cdot \frac{1}{2x}$$

So $x \cdot G(x) \approx \dfrac{e^{-x^2}}{2(1+x^2)} \to 0$ as $x \to \infty$.

More rigorously: $0 \lt G(x) = \displaystyle\int_x^{\infty} \frac{e^{-t^2}}{1+t^2}\,dt \lt e^{-x^2}\displaystyle\int_x^{\infty}\frac{dt}{1+t^2} = e^{-x^2}\left(\frac{\pi}{2} - \arctan x\right)$. Since $\frac{\pi}{2} - \arctan x \sim \frac{1}{x}$ as $x \to \infty$:

$$0 \lt x \cdot G(x) \lt x \cdot e^{-x^2} \cdot \frac{C}{x} = Ce^{-x^2} \to 0$$

Therefore $\displaystyle\lim_{x \to \infty} x \cdot G(x) = 0$.
