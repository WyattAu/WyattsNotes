---
title: "Functions -- Diagnostic Tests"
description: "Diagnostic tests for DSE Functions: domain restrictions, composite functions, inverse functions, and graph transformations with common misconceptions."
slug: diag-functions
hide_table_of_contents: true
---

# Functions — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for functions.

### UT-1: Domain of Composite $f \circ g$

**Question:**

Let $f(x) = \sqrt{x - 1}$ and $g(x) = \dfrac{1}{x + 2}$.

Find the domain of $f \circ g$.

**Solution:**

We need the range of $g$ to fall within the domain of $f$.

$\mathrm{dom}(g) = \\{x \in \mathbb{R} : x \neq -2\\}$.

$\mathrm{ran}(g) = \\{y \in \mathbb{R} : y \neq 0\\}$ since $g(x) = \dfrac{1}{x+2}$ can take any non-zero real value.

$\mathrm{dom}(f) = \\{x \in \mathbb{R} : x \geq 1\\}$.

For $f \circ g$ to be defined, we need $g(x) \geq 1$:

$$\frac{1}{x+2} \geq 1$$

**Case 1:** $x + 2 > 0$ (i.e. $x > -2$):

$$1 \geq x + 2 \implies x \leq -1$$

Combined with $x > -2$: $-2 < x \leq -1$.

**Case 2:** $x + 2 < 0$ (i.e. $x < -2$):

$$1 \leq x + 2 \implies x \geq -1$$

This contradicts $x < -2$. No solutions in this case.

Therefore $\mathrm{dom}(f \circ g) = (-2,\; -1]$.

---

### UT-2: Inverse is Not Reciprocal

**Question:**

Let $f(x) = \dfrac{2x + 3}{x - 1}$, $x \neq 1$. Which of the following equals $f^{-1}(5)$?

$$\text{(A)}\; \frac{1}{f(5)} \qquad \text{(B)}\; f(5) \qquad \text{(C)}\; \text{Neither}$$

Find the correct value.

**Solution:**

$f^{-1}(5)$ is the value of $x$ such that $f(x) = 5$:

$$\frac{2x + 3}{x - 1} = 5$$

$$2x + 3 = 5x - 5$$

$$3x = 8$$

$$x = \frac{8}{3}$$

Check option (A): $\dfrac{1}{f(5)} = \dfrac{1}{\frac{13}{4}} = \dfrac{4}{13} \neq \dfrac{8}{3}$.

Check option (B): $f(5) = \dfrac{13}{4} \neq \dfrac{8}{3}$.

The answer is **(C) Neither**. The inverse function evaluated at a point is NOT the reciprocal of the function at that point, nor is it the function itself. $f^{-1}(5) = \dfrac{8}{3}$.

---

### UT-3: Horizontal Shift Direction

**Question:**

The graph of $y = f(x)$ passes through the point $(2, 7)$. Which transformation maps this point to $(5, 7)$?

$$\text{(A)}\; y = f(x + 3) \qquad \text{(B)}\; y = f(x - 3)$$

**Solution:**

For $y = f(x - 3)$, the graph shifts **right** by 3 units. The point $(2, 7)$ on $y = f(x)$ moves to $(5, 7)$.

For $y = f(x + 3)$, the graph shifts **left** by 3 units. The point $(2, 7)$ moves to $(-1, 7)$.

The answer is **(B)**.

A common mistake is choosing (A) because "$+3$ looks like moving in the positive direction." In fact, replacing $x$ with $x - h$ shifts the graph right by $h$, which is the **opposite** direction to the sign.

---

### UT-4: Injectivity and Inverse Existence

**Question:**

Let $f(x) = x^2 - 4x + 3$, $x \in \mathbb{R}$.

(a) Show that $f$ is not injective.
(b) Restrict the domain so that $f^{-1}$ exists and find $f^{-1}(x)$.

**Solution:**

(a) $f(0) = 3$ and $f(4) = 3$. Since $f(0) = f(4)$ but $0 \neq 4$, $f$ is not injective.

(b) We need to restrict to a domain where $f$ is strictly monotonic.

$f(x) = (x - 2)^2 - 1$ has vertex at $(2, -1)$, opening upward.

Restricting to $\mathrm{dom}(f) = [2,\; \infty)$ makes $f$ strictly increasing.

For $y = (x - 2)^2 - 1$:

$$y + 1 = (x - 2)^2$$

$$x - 2 = \sqrt{y + 1} \quad (\text{since } x \geq 2)$$

$$x = 2 + \sqrt{y + 1}$$

Therefore $f^{-1}(x) = 2 + \sqrt{x + 1}$ with $\mathrm{dom}(f^{-1}) = [-1,\; \infty)$.

---

### UT-5: Range of a Composite with Quadratic Inner Function

**Question:**

Let $f(x) = 2x - 1$ and $g(x) = x^2 + 4x + 5$. Find the range of $g \circ f$.

**Solution:**

$g \circ f = g(f(x)) = (2x - 1)^2 + 4(2x - 1) + 5$.

Expanding:

$$= 4x^2 - 4x + 1 + 8x - 4 + 5 = 4x^2 + 4x + 2$$

Complete the square:

$$= 4\left(x^2 + x\right) + 2 = 4\left(x + \tfrac{1}{2}\right)^2 - 1 + 2 = 4\left(x + \tfrac{1}{2}\right)^2 + 1$$

Since $4\left(x + \tfrac{1}{2}\right)^2 \geq 0$ for all $x \in \mathbb{R}$:

$$\mathrm{ran}(g \circ f) = [1,\; \infty)$$

---

## Integration Tests

> Tests synthesis of functions with other topics.

### IT-1: Functions and Quadratics (with Quadratics)

**Question:**

Let $f(x) = ax^2 + bx + c$ where $a > 0$. The function $f$ has a minimum value of $-5$ at $x = 3$. Given that $f(1) = 3$, find $a$, $b$, and $c$, and hence find the range of $f^{-1}$.

**Solution:**

Since the minimum is $-5$ at $x = 3$, we can write:

$$f(x) = a(x - 3)^2 - 5$$

Using $f(1) = 3$:

$$a(1 - 3)^2 - 5 = 3$$

$$4a - 5 = 3 \implies a = 2$$

So $f(x) = 2(x - 3)^2 - 5 = 2x^2 - 12x + 13$.

Therefore $a = 2$, $b = -12$, $c = 13$.

Since $f$ has minimum value $-5$ and opens upward, $\mathrm{ran}(f) = [-5,\; \infty)$.

Therefore $\mathrm{dom}(f^{-1}) = [-5,\; \infty)$, and so $\mathrm{ran}(f^{-1}) = [3,\; \infty)$ (the restricted domain where $f$ is injective, to the right of the vertex).

---

### IT-2: Functions and Logarithms (with Logarithms)

**Question:**

Let $f(x) = \log_2(x + 1)$, $x > -1$. Find $f^{-1}(x)$ and solve $f(x) = f^{-1}(x)$.

**Solution:**

$y = \log_2(x + 1) \implies 2^y = x + 1 \implies x = 2^y - 1$.

So $f^{-1}(x) = 2^x - 1$ with $\mathrm{dom}(f^{-1}) = \mathbb{R}$.

Solving $f(x) = f^{-1}(x)$:

$$\log_2(x + 1) = 2^x - 1$$

Let $y = x + 1$ (so $y > 0$):

$$\log_2 y = 2^{y-1} - 1$$

By inspection: $y = 2$ gives $\log_2 2 = 1$ and $2^{1} - 1 = 1$. Check.

So $x + 1 = 2 \implies x = 1$.

Also $y = 1$ gives $\log_2 1 = 0$ and $2^{0} - 1 = 0$. Check.

So $x + 1 = 1 \implies x = 0$.

The solutions are $x = 0$ and $x = 1$.

---

### IT-3: Functions and Coordinate Geometry (with Coordinate Geometry)

**Question:**

The function $f(x) = \dfrac{k}{x}$, $x > 0$, represents a rectangular hyperbola. The line $y = mx + c$ is tangent to the curve at the point $(2,\; 4)$. Find $k$, $m$, and $c$.

**Solution:**

Since $(2, 4)$ lies on the hyperbola:

$$4 = \frac{k}{2} \implies k = 8$$

So $f(x) = \dfrac{8}{x}$.

Since $(2, 4)$ lies on the tangent line:

$$4 = 2m + c \tag{1}$$

The tangent has the same gradient as the curve at $x = 2$:

$$f'(x) = -\frac{8}{x^2} \implies f'(2) = -\frac{8}{4} = -2$$

So $m = -2$.

From equation (1): $c = 4 - 2(-2) = 8$.

Therefore $k = 8$, $m = -2$, $c = 8$, and the tangent line is $y = -2x + 8$.
