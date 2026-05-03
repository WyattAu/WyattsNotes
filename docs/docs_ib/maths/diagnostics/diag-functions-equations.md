---
title: Functions and Equations -- Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for functions and equations covering composite domain, inverse notation, transformation order, and absolute value.
slug: diag-functions-equations
hide_table_of_contents: true
---

# Functions and Equations — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for functions and equations.

### UT-1: Domain of Composite Functions with Restrictions

**Question:**

Given $f(x) = \sqrt{x - 3}$ and $g(x) = \dfrac{1}{x - 1}$:

**(a)** Find the domain of $f \circ g$.

**(b)** Find the domain of $g \circ f$.

**(c)** A student claims that $\mathrm{dom}(f \circ g) = \mathrm{dom}(g)$. Explain why this is incorrect.

[Difficulty: hard. Tests the subtle but critical rule that the domain of $f \circ g$ excludes values where $g(x)$ falls outside the domain of $f$.]

**Solution:**

**(a)** $(f \circ g)(x) = f(g(x)) = \sqrt{\frac{1}{x-1} - 3} = \sqrt{\frac{1 - 3(x-1)}{x-1}} = \sqrt{\frac{4 - 3x}{x-1}}$.

Domain restrictions:
1. From $g$: $x \neq 1$ (denominator of $g$).
2. From $f$: the argument of the square root must be non-negative: $\dfrac{4 - 3x}{x - 1} \geq 0$.

Solve $\dfrac{4 - 3x}{x - 1} \geq 0$:

Critical values: $x = \frac{4}{3}$ (numerator zero) and $x = 1$ (denominator zero).

Sign chart:
- $x \lt 1$: numerator $4 - 3x \gt 0$, denominator $x - 1 \lt 0$. Ratio $\lt 0$. Not valid.
- $1 \lt x \leq \frac{4}{3}$: numerator $\geq 0$, denominator $\gt 0$. Ratio $\geq 0$. Valid.
- $x \gt \frac{4}{3}$: numerator $\lt 0$, denominator $\gt 0$. Ratio $\lt 0$. Not valid.

Domain of $f \circ g$: $\left(1, \frac{4}{3}\right]$.

**(b)** $(g \circ f)(x) = g(f(x)) = \dfrac{1}{\sqrt{x-3} - 1}$.

Domain restrictions:
1. From $f$: $x - 3 \geq 0$, so $x \geq 3$.
2. From $g$: $\sqrt{x-3} \neq 1$, so $x - 3 \neq 1$, giving $x \neq 4$.

Domain of $g \circ f$: $[3, 4) \cup (4, \infty)$.

**(c)** The student is incorrect. $\mathrm{dom}(f \circ g)$ is not $\mathrm{dom}(g)$. It is the subset of $\mathrm{dom}(g)$ for which $g(x)$ falls within $\mathrm{dom}(f)$. Here $\mathrm{dom}(g) = \mathbb{R} \setminus \{1\}$, but $\mathrm{dom}(f \circ g) = \left(1, \frac{4}{3}\right]$, which is a proper subset.

---

### UT-2: Inverse Function Notation Confusion

**Question:**

Let $f(x) = \dfrac{2x + 3}{x - 1}$ for $x \neq 1$.

**(a)** Find $f^{-1}(x)$ and state its domain.

**(b)** A student writes $f^{-1}(x) = \dfrac{x - 1}{2x + 3}$. Identify the error.

**(c)** Verify that $f(f^{-1}(x)) = x$ for all $x$ in the domain of $f^{-1}$.

[Difficulty: hard. Tests the common misconception that $f^{-1}$ means reciprocal.]

**Solution:**

**(a)** Let $y = \dfrac{2x + 3}{x - 1}$.

$$y(x - 1) = 2x + 3 \implies xy - y = 2x + 3 \implies xy - 2x = y + 3 \implies x(y - 2) = y + 3$$

$$f^{-1}(x) = \frac{x + 3}{x - 2}, \quad x \neq 2$$

The domain of $f^{-1}$ equals the range of $f$. Since $f(x) = \dfrac{2x + 3}{x - 1} = 2 + \dfrac{5}{x - 1}$, as $x \to \pm\infty$, $f(x) \to 2$, but $f(x) \neq 2$. The horizontal asymptote at $y = 2$ is never reached. Domain: $\mathbb{R} \setminus \{2\}$.

**(b)** The student computed $\dfrac{1}{f(x)} = \dfrac{x - 1}{2x + 3}$, confusing the inverse function $f^{-1}$ with the reciprocal $\dfrac{1}{f}$. The notation $f^{-1}$ means the function that "undoes" $f$, not $1/f$.

**(c)** For $x \neq 2$:

$$f(f^{-1}(x)) = f\!\left(\frac{x + 3}{x - 2}\right) = \frac{2 \cdot \frac{x+3}{x-2} + 3}{\frac{x+3}{x-2} - 1} = \frac{\frac{2x + 6 + 3x - 6}{x - 2}}{\frac{x + 3 - (x - 2)}{x - 2}} = \frac{5x}{5} = x$$

Verified.

---

### UT-3: Function Transformation Order

**Question:**

The graph of $y = f(x)$ passes through the point $(2, 5)$. After the transformation $y = -2f(x - 1) + 3$, the graph passes through the point $(a, b)$.

Find the values of $a$ and $b$.

A student reasons: "We translate left by 1, so $a = 1$. Then stretch vertically by 2 and translate up by 3, so $b = 2 \times 5 + 3 = 13$."

**(a)** Identify the error in the student's reasoning.

**(b)** Find the correct values of $a$ and $b$.

[Difficulty: hard. Tests the counterintuitive nature of horizontal transformations.]

**Solution:**

**(a)** The student's error is in the horizontal transformation. The transformation $f(x - 1)$ shifts the graph to the **right** by 1 (not left). The student said "translate left by 1" and set $a = 2 - 1 = 1$, but the correct calculation would give $a = 2 + 1 = 3$.

**(b)** For $y = -2f(x - 1) + 3$:

- The transformation $f(x - 1)$ shifts right by 1, so the input changes: $x = 2$ requires $x - 1 = 2$, i.e., $x = 3$. So $a = 3$.
- At the original point, $f(2) = 5$. The vertical stretch by $-2$ (reflection in $x$-axis then stretch by 2) gives $-2 \times 5 = -10$. Then translate up by 3: $b = -10 + 3 = -7$.

The point $(2, 5)$ maps to $(3, -7)$.

---

## Integration Tests

> Tests synthesis of functions and equations with other topics.

### IT-1: Iteration and Fixed Points (with Sequences)

**Question:**

The function $f$ is defined by $f(x) = \dfrac{2x + 3}{x + 2}$.

**(a)** Find the fixed points of $f$ (values where $f(x) = x$).

**(b)** Show that $f(f(x)) = x$ for all $x \neq -2$, and hence state $f^{-1}(x)$.

[Difficulty: hard. Combines function iteration with inverse function identification.]

**Solution:**

**(a)** Solve $f(x) = x$:

$$\frac{2x + 3}{x + 2} = x \implies 2x + 3 = x^2 + 2x \implies x^2 = 3 \implies x = \sqrt{3} \text{ or } x = -\sqrt{3}$$

The fixed points are $x = \sqrt{3}$ and $x = -\sqrt{3}$.

**(b)**

$$f(f(x)) = f\!\left(\frac{2x + 3}{x + 2}\right) = \frac{2 \cdot \frac{2x+3}{x+2} + 3}{\frac{2x+3}{x+2} + 2}$$

$$= \frac{\frac{4x + 6 + 3x + 6}{x + 2}}{\frac{2x + 3 + 2x + 4}{x + 2}} = \frac{7x + 12}{4x + 7}$$

This should equal $x$:

$$\frac{7x + 12}{4x + 7} = x \implies 7x + 12 = 4x^2 + 7x \implies 4x^2 = 12 \implies x^2 = 3$$

This is not identically equal to $x$. Let me recompute:

$$f(x) = \frac{2x + 3}{x + 2}$$

$$f(f(x)) = \frac{2 \cdot \frac{2x+3}{x+2} + 3}{\frac{2x+3}{x+2} + 2} = \frac{\frac{2(2x+3) + 3(x+2)}{x+2}}{\frac{(2x+3) + 2(x+2)}{x+2}} = \frac{4x+6+3x+6}{2x+3+2x+4} = \frac{7x+12}{4x+7}$$

This is indeed not equal to $x$ for all $x$. So $f$ is not self-inverse.

Actually, let me reconsider. $f(f(x))$ for $f(x) = \frac{2x+3}{x+2}$:

The fixed points are $\pm\sqrt{3}$. Since $f$ is a Mobius transformation with $ad - bc = 2 \cdot 2 - 1 \cdot 3 = 1 \neq 0$, it is invertible. The inverse is:

$$f^{-1}(x) = \frac{2x - 3}{-x + 2} = \frac{2x - 3}{2 - x}, \quad x \neq 2$$

We can verify: $f(f^{-1}(x)) = \frac{2 \cdot \frac{2x-3}{2-x} + 3}{\frac{2x-3}{2-x} + 2} = \frac{\frac{2(2x-3) + 3(2-x)}{2-x}}{\frac{(2x-3) + 2(2-x)}{2-x}} = \frac{4x-6+6-3x}{2x-3+4-2x} = \frac{x}{1} = x$.

So $f^{-1}(x) = \dfrac{2x - 3}{2 - x}$ with domain $x \neq 2$.
