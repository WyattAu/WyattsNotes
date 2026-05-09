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

$\mathrm{dom}(g) = \\{x \in \mathbb{'\{'}R{'\}'} : x \neq -2\\}$.

$\mathrm{ran}(g) = \\{y \in \mathbb{'\{'}R{'\}'} : y \neq 0\\}$ since $g(x) = \dfrac{1}{x+2}$ can take any non-zero real value.

$\mathrm{dom}(f) = \\{x \in \mathbb{'\{'}R{'\}'} : x \geq 1\\}$.

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

Let $f(x) = x^2 - 4x + 3$, $x \in \mathbb{'\{'}R{'\}'}$.

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

Since $4\left(x + \tfrac{1}{2}\right)^2 \geq 0$ for all $x \in \mathbb{'\{'}R{'\}'}$:

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

So $f^{-1}(x) = 2^x - 1$ with $\mathrm{dom}(f^{-1}) = \mathbb{'\{'}R{'\}'}$.

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

---

## Worked Examples

### WE-1: Domain and Range of a Rational Function

**Question:**

Find the domain and range of $f(x) = \dfrac{2}{x^2 + 1}$.

**Solution:**

Domain: $x^2 + 1 \neq 0$ for all real $x$ (since $x^2 \geq 0$).

$$\mathrm{dom}(f) = \mathbb{'\{'}R{'\}'}$$

Range: $x^2 + 1 \geq 1$ for all $x$, so $0 < \dfrac{2}{x^2 + 1} \leq 2$.

Maximum value $2$ occurs at $x = 0$. The function approaches $0$ as $|x| \to \infty$.

$$\mathrm{ran}(f) = (0,\; 2]$$

---

### WE-2: Composite Function Evaluation

**Question:**

Let $f(x) = 2x + 1$ and $g(x) = x^2 - 3$. Find:

(a) $f \circ g(2)$
(b) $g \circ f(2)$
(c) $f \circ f(x)$

**Solution:**

(a) $g(2) = 4 - 3 = 1$. $f \circ g(2) = f(1) = 3$.

(b) $f(2) = 5$. $g \circ f(2) = g(5) = 25 - 3 = 22$.

Note: $f \circ g(2) \neq g \circ f(2)$, confirming that composition is not commutative.

(c) $f \circ f(x) = f(f(x)) = f(2x + 1) = 2(2x + 1) + 1 = 4x + 3$.

---

### WE-3: Finding the Inverse of a Quadratic

**Question:**

Let $f(x) = 2x^2 + 4x - 1$ for $x \geq -1$. Find $f^{-1}(x)$.

**Solution:**

$y = 2x^2 + 4x - 1 = 2(x^2 + 2x) - 1 = 2(x + 1)^2 - 2 - 1 = 2(x + 1)^2 - 3$.

For $x \geq -1$: $y + 3 = 2(x + 1)^2 \geq 0$.

$$x + 1 = \sqrt{\frac{y + 3}{2}}$$

$$x = \sqrt{\frac{y + 3}{2}} - 1$$

$$f^{-1}(x) = \sqrt{\frac{x + 3}{2}} - 1$$

$\mathrm{dom}(f^{-1}) = \mathrm{ran}(f) = [-3,\; \infty)$.

$\mathrm{ran}(f^{-1}) = \mathrm{dom}(f) = [-1,\; \infty)$.

---

### WE-4: Graph Transformation

**Question:**

The graph of $y = f(x)$ passes through $(2, 5)$ and has a minimum at $(3, 1)$. State the corresponding points on the graph of:

(a) $y = f(2x)$
(b) $y = -f(x) + 3$
(c) $y = f(x - 1) + 2$

**Solution:**

(a) $y = f(2x)$: horizontal compression by factor $\dfrac{1}{2}$.

$(2, 5) \to (1, 5)$ and $(3, 1) \to \left(\dfrac{3}{2},\; 1\right)$.

(b) $y = -f(x) + 3$: reflection in $x$-axis, then shift up 3.

$(2, 5) \to (2, -5) \to (2, -2)$ and $(3, 1) \to (3, -1) \to (3, 2)$.

(c) $y = f(x - 1) + 2$: shift right 1, then up 2.

$(2, 5) \to (3, 7)$ and $(3, 1) \to (4, 3)$.

---

### WE-5: Piecewise Function

**Question:**

Define $f(x) = \begin{cases} x^2 & \text{if } x < 0 \\ 2x + 1 & \text{if } 0 \leq x \leq 3 \\ 7 & \text{if } x > 3 \end{cases}$.

Find $f(-2)$, $f(0)$, $f(3)$, and $f(5)$.

**Solution:**

$f(-2) = (-2)^2 = 4$.

$f(0) = 2(0) + 1 = 1$.

$f(3) = 2(3) + 1 = 7$.

$f(5) = 7$.

---

### WE-6: Even and Odd Functions

**Question:**

Determine whether each function is even, odd, or neither:

(a) $f(x) = x^3 - x$
(b) $g(x) = x^4 + 2x^2$
(c) $h(x) = x^3 + 1$

**Solution:**

(a) $f(-x) = (-x)^3 - (-x) = -x^3 + x = -(x^3 - x) = -f(x)$. **Odd.**

(b) $g(-x) = (-x)^4 + 2(-x)^2 = x^4 + 2x^2 = g(x)$. **Even.**

(c) $h(-x) = (-x)^3 + 1 = -x^3 + 1 \neq h(x)$ and $h(-x) \neq -h(x)$. **Neither.**

---

### WE-7: Function Composition with Domain Restrictions

**Question:**

Let $f(x) = \sqrt{x}$ and $g(x) = x - 4$. Find $f \circ g$ and its domain.

**Solution:**

$f \circ g(x) = f(g(x)) = f(x - 4) = \sqrt{x - 4}$.

Domain of $f \circ g$: we need $x - 4 \geq 0$, i.e. $x \geq 4$.

$$\mathrm{dom}(f \circ g) = [4,\; \infty)$$

Note: $g(x) = x - 4$ is defined for all $x \in \mathbb{'\{'}R{'\}'}$, but the range of $g$ must fall within the domain of $f$ (which is $[0, \infty)$), so $g(x) \geq 0 \implies x \geq 4$.

---

### WE-8: Injectivity Test

**Question:**

Determine whether $f(x) = \dfrac{2x + 3}{x - 1}$ is injective.

**Solution:**

Suppose $f(a) = f(b)$:

$$\frac{2a + 3}{a - 1} = \frac{2b + 3}{b - 1}$$

$$(2a + 3)(b - 1) = (2b + 3)(a - 1)$$

$$2ab - 2a + 3b - 3 = 2ab - 2b + 3a - 3$$

$$-2a + 3b = -2b + 3a$$

$$5b = 5a$$

$$a = b$$

Since $f(a) = f(b) \implies a = b$, the function is **injective**.

---

## Common Pitfalls

1. **Confusing $f^{-1}$ with the reciprocal $\dfrac{1}{f}$.** The notation $f^{-1}$ denotes the inverse function, NOT the reciprocal. $f^{-1}(x)$ is the value of $y$ such that $f(y) = x$, which is completely different from $\dfrac{1}{f(x)}$.

2. **Incorrect domain of composite functions.** The domain of $f \circ g$ is NOT simply $\mathrm{dom}(g)$. It is the set of all $x$ in $\mathrm{dom}(g)$ such that $g(x) \in \mathrm{dom}(f)$. You must check both conditions.

3. **Wrong direction for horizontal shifts.** $f(x - h)$ shifts the graph RIGHT by $h$ units, not left. The transformation is counterintuitive: replacing $x$ with $x - h$ moves the graph in the positive $x$-direction.

4. **Forgetting to restrict the domain when finding the inverse of a non-injective function.** If $f$ is not one-to-one on its entire domain, you must restrict the domain before finding the inverse. Always state the restricted domain explicitly.

5. **Assuming $f \circ g = g \circ f$.** Function composition is generally NOT commutative. Always compute $f \circ g$ and $g \circ f$ separately unless you have proven they are equal.

---

## DSE Exam-Style Questions

### DSE-1

Let $f(x) = \dfrac{3x - 1}{x + 2}$, $x \neq -2$.

(a) Find $f^{-1}(x)$. (3 marks)
(b) Find the domain and range of $f^{-1}$. (2 marks)
(c) Solve $f(x) = x$. (3 marks)

**Solution:**

(a) $y = \dfrac{3x - 1}{x + 2}$.

$y(x + 2) = 3x - 1 \implies yx + 2y = 3x - 1 \implies yx - 3x = -1 - 2y$.

$x(y - 3) = -1 - 2y$.

$x = \dfrac{-1 - 2y}{y - 3} = \dfrac{2y + 1}{3 - y}$.

$$f^{-1}(x) = \frac{2x + 1}{3 - x}$$

(b) $\mathrm{dom}(f^{-1}) = \mathrm{ran}(f)$. Since $f(x) = \dfrac{3x - 1}{x + 2} = 3 - \dfrac{7}{x + 2}$ and $\dfrac{7}{x+2}$ takes all non-zero real values, $\mathrm{ran}(f) = \mathbb{'\{'}R{'\}'} \setminus \{3\}$.

$\mathrm{dom}(f^{-1}) = \{x \in \mathbb{'\{'}R{'\}'} : x \neq 3\}$.

$\mathrm{ran}(f^{-1}) = \mathrm{dom}(f) = \{x \in \mathbb{'\{'}R{'\}'} : x \neq -2\}$.

(c) $\dfrac{3x - 1}{x + 2} = x \implies 3x - 1 = x^2 + 2x \implies x^2 - x + 1 = 0$.

$\Delta = 1 - 4 = -3 < 0$. No real solutions.

---

### DSE-2

Let $f(x) = x^2 - 6x + 5$ and $g(x) = 2x - 3$.

(a) Express $f(x)$ in the form $(x - a)^2 + b$. (2 marks)
(b) Find the range of $f$. (1 mark)
(c) Find $f \circ g(x)$ and $g \circ f(x)$. (4 marks)
(d) Solve $f \circ g(x) = 0$. (2 marks)

**Solution:**

(a) $f(x) = (x - 3)^2 - 9 + 5 = (x - 3)^2 - 4$.

(b) Since $(x - 3)^2 \geq 0$: $\mathrm{ran}(f) = [-4,\; \infty)$.

(c) $f \circ g(x) = f(2x - 3) = (2x - 3 - 3)^2 - 4 = (2x - 6)^2 - 4 = 4x^2 - 24x + 36 - 4 = 4x^2 - 24x + 32$.

$g \circ f(x) = g(x^2 - 6x + 5) = 2(x^2 - 6x + 5) - 3 = 2x^2 - 12x + 7$.

(d) $4x^2 - 24x + 32 = 0 \implies x^2 - 6x + 8 = 0 \implies (x-2)(x-4) = 0 \implies x = 2$ or $x = 4$.

---

### DSE-3

The function $f$ is defined by $f(x) = \dfrac{1}{x^2 - 4}$.

(a) Find the domain of $f$. (1 mark)
(b) Find the range of $f$. (3 marks)
(c) Solve $f(x) = \dfrac{1}{5}$. (2 marks)

**Solution:**

(a) $x^2 - 4 \neq 0 \implies x \neq \pm 2$.

$$\mathrm{dom}(f) = \{x \in \mathbb{'\{'}R{'\}'} : x \neq -2 \text{ and } x \neq 2\}$$

(b) Let $y = \dfrac{1}{x^2 - 4}$. Then $x^2 - 4 = \dfrac{1}{y}$, so $x^2 = 4 + \dfrac{1}{y} = \dfrac{4y + 1}{y}$.

For $x^2 \geq 0$: $\dfrac{4y + 1}{y} \geq 0$.

Critical values: $y = 0$ (asymptote) and $y = -\dfrac{1}{4}$.

$\dfrac{4y + 1}{y} \geq 0 \implies y < -\dfrac{1}{4}$ or $y > 0$.

$$\mathrm{ran}(f) = \left(-\infty,\; -\dfrac{1}{4}\right) \cup (0,\; \infty)$$

(c) $\dfrac{1}{x^2 - 4} = \dfrac{1}{5} \implies x^2 - 4 = 5 \implies x^2 = 9 \implies x = \pm 3$.

---

### DSE-4

Let $f(x) = 2^x$ and $g(x) = \log_2 x$.

(a) Find $f \circ g(x)$ and simplify. (2 marks)
(b) Find $g \circ f(x)$ and simplify. (2 marks)
(c) Explain the relationship between $f$ and $g$. (1 mark)

**Solution:**

(a) $f \circ g(x) = f(\log_2 x) = 2^{\log_2 x} = x$, for $x > 0$.

(b) $g \circ f(x) = g(2^x) = \log_2(2^x) = x$, for all $x \in \mathbb{'\{'}R{'\}'}$.

(c) $f$ and $g$ are inverse functions of each other. $f \circ g = \mathrm{id}$ on $(0, \infty)$ and $g \circ f = \mathrm{id}$ on $\mathbb{'\{'}R{'\}'}$.

---

### DSE-5

The graph of $y = f(x)$ is shown. It passes through $(-2, 0)$, $(0, 4)$, $(2, 0)$, and has a maximum at $(0, 4)$.

(a) Sketch the graph of $y = f(x + 1)$. (2 marks)
(b) Sketch the graph of $y = f(-x)$. (2 marks)
(c) The graph of $y = f(x)$ is transformed to the graph of $y = -f(x) + 2$. Describe this transformation in words. (2 marks)

**Solution:**

(a) $y = f(x + 1)$ shifts the graph left by 1 unit. New key points: $(-3, 0)$, $(-1, 4)$, $(1, 0)$. Maximum at $(-1, 4)$.

(b) $y = f(-x)$ reflects the graph in the $y$-axis. New key points: $(2, 0)$, $(0, 4)$, $(-2, 0)$. Maximum at $(0, 4)$.

(c) $y = -f(x) + 2$: reflect in the $x$-axis (all $y$-values change sign), then translate up by 2 units. New maximum at $(0, -4 + 2) = (0, -2)$. New $x$-intercepts at $(-2, 2)$ and $(2, 2)$ (which are not on the $x$-axis anymore).
