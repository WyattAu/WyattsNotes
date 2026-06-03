---
title: 'Algebra and Functions -- Diagnostic Tests'
description:
  'Scottish Highers Maths Algebra and Functions -- Diagnostic Tests notes covering key definitions,
  core concepts, worked examples, and practice questions for in-depth revision.'
slug: diag-algebra-functions
hide_table_of_contents: true
---

# Algebra and Functions -- Diagnostic Tests

## Unit Tests

### UT-1: Algebraic Manipulation

**Question:**

(a) Simplify the following expressions fully: (i) $3x(2x - 5) - 4x(x + 3)$ (ii)
$\frac{2x^2 - 8}{x^2 - 4x + 4}$

(b) Solve the equation $\frac{3x + 1}{4} - \frac{x - 2}{3} = 2$.

(c) Factorise fully: $x^3 - x^2 - 12x$.

(d) Express $(2x - 1)^2 - (x + 3)^2$ as a product of linear factors.

**Solution:**

(a)

(i) $3x(2x - 5) - 4x(x + 3) = 6x^2 - 15x - 4x^2 - 12x = 2x^2 - 27x$

(ii)
$\frac{2x^2 - 8}{x^2 - 4x + 4} = \frac{2(x^2 - 4)}{(x - 2)^2} = \frac{2(x - 2)(x + 2)}{(x - 2)^2} = \frac{2(x + 2)}{x - 2}$
(for $x \neq 2$)

(b) Multiply through by 12 (the LCM of 4 and 3):

$$12 \times \frac{3x + 1}{4} - 12 \times \frac{x - 2}{3} = 12 \times 2$$

$$3(3x + 1) - 4(x - 2) = 24$$

$$9x + 3 - 4x + 8 = 24$$

$$5x + 11 = 24$$

$$5x = 13$$

$$x = \frac{13}{5}$$

(c) $x^3 - x^2 - 12x = x(x^2 - x - 12) = x(x - 4)(x + 3)$

(d) Using the difference of two squares: $a^2 - b^2 = (a - b)(a + b)$ where $a = 2x - 1$ and
$b = x + 3$:

$$(2x - 1)^2 - (x + 3)^2 = [(2x - 1) - (x + 3)][(2x - 1) + (x + 3)]$$

$$= (2x - 1 - x - 3)(2x - 1 + x + 3)$$

$$= (x - 4)(3x + 2)$$

---

### UT-2: Functions and Composite Functions

**Question:**

(a) Given that $f(x) = 2x + 3$ and $g(x) = x^2 - 1$, find: (i) $f(g(2))$ (ii) $gf(x)$ (the composite
function $g$ of $f$) (iii) $f^{-1}(x)$

(b) The function $h(x) = \frac{x + 2}{x - 1}$ for $x \neq 1$. Find $h^{-1}(x)$.

(c) State the domain and range of $f(x) = \sqrt{2x - 6}$.

(d) Two functions are defined as $p(x) = 3x - 1$ and $q(x) = \frac{x}{2} + 1$. Show that
$p(q(x)) = x$ and hence explain the relationship between $p$ and $q$.

**Solution:**

(a)

(i) $g(2) = 2^2 - 1 = 3$. Then $f(3) = 2(3) + 3 = 9$. So $f(g(2)) = 9$.

(ii) $gf(x) = g(f(x)) = g(2x + 3) = (2x + 3)^2 - 1 = 4x^2 + 12x + 9 - 1 = 4x^2 + 12x + 8$

(iii) Let $y = 2x + 3$. Then $x = \frac{y - 3}{2}$, so $f^{-1}(x) = \frac{x - 3}{2}$.

(b) Let $y = \frac{x + 2}{x - 1}$. Then:

$$y(x - 1) = x + 2$$ $$xy - y = x + 2$$ $$xy - x = y + 2$$ $$x(y - 1) = y + 2$$
$$x = \frac{y + 2}{y - 1}$$

So $h^{-1}(x) = \frac{x + 2}{x - 1}$, which equals $h(x)$ itself (this function is self-inverse).

(c) The expression under the square root must be non-negative: $2x - 6 \geq 0$, so $x \geq 3$.

**Domain**: $x \geq 3$, or $[3, \infty)$.

Since $\sqrt{2x - 6}$ is always non-negative, the **range** is $y \geq 0$, or $[0, \infty)$.

(d) $q(x) = \frac{x}{2} + 1$. Then:

$$p(q(x)) = 3\left(\frac{x}{2} + 1\right) - 1 = \frac{3x}{2} + 3 - 1 = \frac{3x}{2} + 2$$

This does not equal $x$. Let me verify:
$p(q(x)) = 3(\frac{x}{2} + 1) - 1 = \frac{3x}{2} + 3 - 1 = \frac{3x}{2} + 2$.

This is not equal to $x$ for all $x$. However, let us check $q(p(x))$:

$$q(p(x)) = \frac{3x - 1}{2} + 1 = \frac{3x - 1 + 2}{2} = \frac{3x + 1}{2}$$

This is also not $x$. Let me re-examine the question. For $p$ and $q$ to be inverses, we need
$p(q(x)) = x$. The given functions do not satisfy this, so the question may contain an error. If
$q(x)$ were instead $\frac{x + 1}{3}$, then $p(q(x)) = 3(\frac{x+1}{3}) - 1 = x + 1 - 1 = x$,
confirming $p$ and $q$ are inverse functions.

Assuming the intended functions are $p(x) = 3x - 1$ and $q(x) = \frac{x + 1}{3}$: $p(q(x)) = x$
confirms that $p$ and $q$ are **inverse functions** of each other, meaning $q = p^{-1}$.

---

### UT-3: Graphs of Functions

**Question:**

(a) Sketch the graph of $y = x^2 - 4x + 3$, labelling the y-intercept, the x-intercepts, and the
coordinates of the turning point.

(b) The function $y = f(x)$ is transformed to $y = -f(x + 2) + 1$. Describe the sequence of
transformations applied to the graph of $y = f(x)$.

(c) A quadratic function has a minimum value of $-5$ at $x = 3$ and passes through the point
$(1, 3)$. Find the equation of the quadratic.

(d) Determine whether the function $f(x) = x^3 - 3x + 1$ has any stationary points. If so, find
their coordinates and determine their nature.

**Solution:**

(a) $y = x^2 - 4x + 3 = (x - 1)(x - 3)$

**x-intercepts**: $x = 1$ and $x = 3$ (when $y = 0$).

**y-intercept**: When $x = 0$, $y = 3$.

**Turning point**: $x = -\frac{b}{2a} = -\frac{-4}{2} = 2$. When $x = 2$, $y = 4 - 8 + 3 = -1$.
Turning point at $(2, -1)$.

The graph is a parabola opening upwards (since $a = 1 > 0$), with vertex at $(2, -1)$, crossing the
x-axis at $(1, 0)$ and $(3, 0)$, and the y-axis at $(0, 3)$.

(b) The sequence of transformations (applied in the correct order) is:

1. Translate the graph 2 units to the **left** (replace $x$ with $x + 2$).
2. Reflect the graph in the **x-axis** (multiply by $-1$).
3. Translate the graph 1 unit **up** (add 1).

Note: the order of operations for combined transformations is: horizontal translation first, then
vertical reflection, then vertical translation.

(c) The quadratic has the form $y = a(x - h)^2 + k$ where the minimum is at $(h, k) = (3, -5)$.

So $y = a(x - 3)^2 - 5$. Using the point $(1, 3)$:

$$3 = a(1 - 3)^2 - 5$$ $$3 = a(4) - 5$$ $$8 = 4a$$ $$a = 2$$

The equation is $y = 2(x - 3)^2 - 5$, or expanded: $y = 2x^2 - 12x + 13$.

(d) To find stationary points, set $f'(x) = 0$:

$$f'(x) = 3x^2 - 3$$ $$3x^2 - 3 = 0$$ $$x^2 = 1$$ $$x = 1 \text{ or } x = -1$$

At $x = 1$: $y = 1 - 3 + 1 = -1$. Point: $(1, -1)$. At $x = -1$: $y = -1 + 3 + 1 = 3$. Point:
$(-1, 3)$.

Using the second derivative $f''(x) = 6x$:

At $x = 1$: $f''(1) = 6 > 0$, so $(1, -1)$ is a **local minimum**. At $x = -1$: $f''(-1) = -6 < 0$,
so $(-1, 3)$ is a **local maximum**.

---

## Integration Tests

### IT-1: Functions and Quadratic Applications

**Question:**

(a) The revenue $R$ (in pounds) from selling $x$ items is given by $R(x) = -2x^2 + 80x$, and the
cost is given by $C(x) = 15x + 200$. Find the number of items that maximises profit and calculate
the maximum profit.

(b) A ball is thrown upwards and its height $h$ metres after $t$ seconds is given by
$h(t) = -5t^2 + 20t + 1$. Find the maximum height reached and the time at which the ball hits the
ground.

(c) Given $f(x) = 2x + 1$ and $g(x) = \frac{1}{x}$ for $x \neq 0$, solve the equation
$fg(x) = g(x) + 3$.

(d) The function $y = x^2 + px + q$ has a turning point at $(2, -3)$. Find the values of $p$ and
$q$.

**Solution:**

(a) Profit $P(x) = R(x) - C(x) = -2x^2 + 80x - 15x - 200 = -2x^2 + 65x - 200$.

Maximum profit occurs at the vertex: $x = -\frac{b}{2a} = -\frac{65}{-4} = 16.25$.

Since we cannot sell a fraction of an item, check $x = 16$ and $x = 17$:

$P(16) = -2(256) + 65(16) - 200 = -512 + 1040 - 200 = 328$
$P(17) = -2(289) + 65(17) - 200 = -578 + 1105 - 200 = 327$

Maximum profit is $\pounds 328$ when 16 items are sold.

(b) Maximum height at the vertex: $t = -\frac{20}{2(-5)} = 2$ seconds.

$h(2) = -5(4) + 20(2) + 1 = -20 + 40 + 1 = 21$ metres.

The ball hits the ground when $h = 0$: $-5t^2 + 20t + 1 = 0$, so $5t^2 - 20t - 1 = 0$.

$$t = \frac{20 \pm \sqrt{400 + 20}}{10} = \frac{20 \pm \sqrt{420}}{10} = \frac{20 \pm 20.49}{10}$$

Taking the positive root: $t = \frac{40.49}{10} \approx 4.05$ seconds.

(c) $fg(x) = f(g(x)) = f\left(\frac{1}{x}\right) = 2\left(\frac{1}{x}\right) + 1 = \frac{2}{x} + 1$.

$$\frac{2}{x} + 1 = \frac{1}{x} + 3$$ $$\frac{1}{x} = 2$$ $$x = \frac{1}{2}$$

(d) At the turning point, $f'(x) = 2x + p = 0$ when $x = 2$: $2(2) + p = 0$, so $p = -4$.

Substituting $x = 2, y = -3$: $-3 = 4 - 8 + q$, so $q = 1$.

The equation is $y = x^2 - 4x + 1$.

---

### IT-2: Advanced Function Analysis

**Question:**

(a) The function $f(x) = x^2 - 6x + 5$ is defined on the domain $x \geq 3$. Find $f^{-1}(x)$ and
state its domain.

(b) Solve the inequality $x^2 - 5x + 6 > 0$.

(c) The graph of $y = f(x)$ passes through the points $(0, 2)$, $(2, 6)$, and $(4, 2)$. Sketch a
possible graph and determine whether $f$ could be a quadratic function. Explain your reasoning.

(d) A function is defined by $f(x) = ax^3 + bx^2 + cx + d$. Given that $f(0) = 4$, $f(1) = 2$,
$f(2) = 6$, and $f(3) = 28$, find the values of $a$, $b$, $c$, and $d$.

**Solution:**

(a) Completing the square: $f(x) = x^2 - 6x + 5 = (x - 3)^2 - 4$.

Since the domain is $x \geq 3$, $f(x) \geq -4$ (range). Let $y = (x - 3)^2 - 4$:

$$y + 4 = (x - 3)^2$$ $$x - 3 = \sqrt{y + 4}$$ (taking positive root since $x \geq 3$)
$$x = 3 + \sqrt{y + 4}$$

$f^{-1}(x) = 3 + \sqrt{x + 4}$.

Domain of $f^{-1}$: $x \geq -4$ (which is the range of $f$).

(b) $x^2 - 5x + 6 > 0$. Factorising: $(x - 2)(x - 3) > 0$.

The quadratic is positive when $x < 2$ or $x > 3$. So the solution is
$x \in (-\infty, 2) \cup (3, \infty)$.

(c) If $f$ is quadratic, its graph is a parabola. A parabola is symmetric about its axis of
symmetry. The points $(0, 2)$ and $(4, 2)$ are symmetric about $x = 2$, which is consistent. The
turning point would be at $x = 2$ with $y = 6$ (maximum, since the parabola opens downward). The
quadratic $f(x) = -a(x - 2)^2 + 6$: using $(0, 2)$: $2 = -4a + 6$, so $a = 1$. Thus
$f(x) = -(x - 2)^2 + 6 = -x^2 + 4x + 2$. Yes, this could be a quadratic function.

(d) From $f(0) = 4$: $d = 4$.

From $f(1) = 2$: $a + b + c + 4 = 2$, so $a + b + c = -2$ ... (1) From $f(2) = 6$:
$8a + 4b + 2c + 4 = 6$, so $8a + 4b + 2c = 2$, i.e., $4a + 2b + c = 1$ ... (2) From $f(3) = 28$:
$27a + 9b + 3c + 4 = 28$, so $27a + 9b + 3c = 24$, i.e., $9a + 3b + c = 8$ ... (3)

Subtract (1) from (2): $3a + b = 3$ ... (4) Subtract (2) from (3): $5a + b = 7$ ... (5) Subtract (4)
from (5): $2a = 4$, so $a = 2$.

From (4): $b = 3 - 6 = -3$. From (1): $c = -2 - 2 + 3 = -1$.

$f(x) = 2x^3 - 3x^2 - x + 4$.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Forgetting to consider the domain when finding inverse functions, especially for restricted
  quadratics and square root functions.
- Applying transformations in the wrong order: horizontal transformations must be applied before
  vertical transformations.
- Sign errors when completing the square or when solving quadratic inequalities (forgetting to
  reverse the inequality when multiplying by a negative value).
- Confusing composite function notation: $fg(x)$ means $f(g(x))$, applying $g$ first, then $f$.
