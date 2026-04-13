---
title: Algebra
date: 2026-04-14
tags:
  - Maths
  - GCSE
categories:
  - Maths
slug: algebra
---

## Algebra

:::info
Board Coverage AQA Paper 1 & 2 | Edexcel Paper 1 & 2 | OCR Paper 1, 2, 3 | WJEC Unit 1 & 2
:::

## 1. Algebraic Expressions

### 1.1 Simplifying Expressions

**Like terms** have the same variable part. They can be combined by addition and subtraction.

**Worked Example.** Simplify $4x^2 - 3x + 7x^2 + 5x - 2$.

$$(4 + 7)x^2 + (-3 + 5)x - 2 = 11x^2 + 2x - 2$$

**Worked Example.** Expand and simplify $3(2x - 5) - 2(x + 4)$.

$$6x - 15 - 2x - 8 = 4x - 23$$

### 1.2 Expanding Brackets

**Single bracket:** $a(b + c) = ab + ac$

**Double brackets (FOIL):** $(a + b)(c + d) = ac + ad + bc + bd$

**Worked Example.** Expand and simplify $(2x + 3)(x - 5)$.

$$2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15$$

**Worked Example.** Expand $(x + 4)^2$.

$$(x + 4)(x + 4) = x^2 + 4x + 4x + 16 = x^2 + 8x + 16$$

### 1.3 Factorisation

**Common factor:** $ab + ac = a(b + c)$

**Difference of two squares:** $a^2 - b^2 = (a - b)(a + b)$

**Quadratic trinomial:** $x^2 + bx + c = (x + p)(x + q)$ where $p + q = b$ and $pq = c$.

**Worked Example.** Factorise $x^2 - 9$.

$$x^2 - 9 = (x - 3)(x + 3)$$

**Worked Example.** Factorise $x^2 + 5x + 6$.

We need $p + q = 5$ and $pq = 6$, giving $p = 2$ and $q = 3$:

$$x^2 + 5x + 6 = (x + 2)(x + 3)$$

**Worked Example.** Factorise $6x^2 + 17x + 12$.

We need $pq = 6 \times 12 = 72$ and $p + q = 17$. The values are $p = 8$ and $q = 9$.

$$6x^2 + 8x + 9x + 12 = 2x(3x + 4) + 3(3x + 4) = (2x + 3)(3x + 4)$$

## 2. Solving Equations

### 2.1 Linear Equations

A **linear equation** has the general form $ax + b = c$ where the highest power of $x$ is 1.

**Worked Example.** Solve $3(2x - 1) = 4x + 7$.

$$6x - 3 = 4x + 7$$ $$2x = 10$$ $$x = 5$$

### 2.2 Quadratic Equations

A **quadratic equation** has the form $ax^2 + bx + c = 0$ with $a \neq 0$.

**Method 1: Factorisation.** If $ax^2 + bx + c$ factorises, set each factor equal to zero.

**Worked Example.** Solve $x^2 - 5x + 6 = 0$.

$$(x - 2)(x - 3) = 0$$ $$x = 2 \text{ or } x = 3$$

**Method 2: The quadratic formula.** For $ax^2 + bx + c = 0$:

$$x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}$$

**Theorem.** The **discriminant** $\Delta = b^2 - 4ac$ determines the nature of the roots:

| Condition      | Roots                   |
| -------------- | ----------------------- |
| $\Delta \gt 0$ | Two distinct real roots |
| $\Delta = 0$   | One repeated real root  |
| $\Delta \lt 0$ | No real roots           |

**Worked Example.** Solve $2x^2 + 3x - 5 = 0$ using the formula.

$$x = \frac{-3 \pm \sqrt{9 + 40}}{4} = \frac{-3 \pm \sqrt{49}}{4} = \frac{-3 \pm 7}{4}$$

$$x = 1 \text{ or } x = -\frac{5}{2}$$

**Method 3: Completing the square.**

$$ax^2 + bx + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2 - 4ac}{4a}$$

**Worked Example.** Write $x^2 + 6x + 2$ in completed square form and solve $x^2 + 6x + 2 = 0$.

$$x^2 + 6x + 2 = (x + 3)^2 - 9 + 2 = (x + 3)^2 - 7$$

$$(x + 3)^2 = 7 \implies x + 3 = \pm\sqrt{7} \implies x = -3 \pm \sqrt{7}$$

### 2.3 Simultaneous Equations

**Linear-linear systems:** Solve by elimination or substitution.

**Worked Example.** Solve the simultaneous equations:

$$\begin{cases} 3x + 2y = 12 \\ 5x - y = 7 \end{cases}$$

Multiply the second equation by 2: $10x - 2y = 14$.

Add to the first: $13x = 26$, so $x = 2$.

Substitute back: $10 - y = 7$, so $y = 3$.

**Linear-quadratic systems:** Substitute the linear equation into the quadratic.

**Worked Example.** Solve:

$$\begin{cases} y = x^2 - 3x + 2 \\ y = 2x - 2 \end{cases}$$

Substituting: $x^2 - 3x + 2 = 2x - 2$

$$x^2 - 5x + 4 = 0$$ $$(x - 1)(x - 4) = 0$$ $$x = 1 \text{ or } x = 4$$

When $x = 1$: $y = 0$. When $x = 4$: $y = 6$.

Solutions: $(1, 0)$ and $(4, 6)$.

## 3. Inequalities

### 3.1 Linear Inequalities

Solving linear inequalities follows the same rules as equations, with one critical difference.

:::warning
When multiplying or dividing both sides of an inequality by a negative number, you must
reverse the inequality sign.
:::

**Worked Example.** Solve $3 - 2x \gt 7$.

$$-2x \gt 4$$ $$x \lt -2$$

### 3.2 Quadratic Inequalities

**Worked Example.** Solve $x^2 - 5x + 6 \leq 0$.

Factorise: $(x - 2)(x - 3) \leq 0$.

The expression changes sign at $x = 2$ and $x = 3$. We need the region where it is negative or zero:

$$2 \leq x \leq 3$$

### 3.3 Inequalities on a Number Line

- **Open circle** at an endpoint: the value is not included ($\lt$ or $\gt$).
- **Closed circle** at an endpoint: the value is included ($\leq$ or $\geq$).

## 4. Sequences

### 4.1 Arithmetic Sequences

An **arithmetic sequence** has a constant **common difference** $d$. The $n$-th term is:

$$u_n = a + (n - 1)d$$

where $a$ is the first term.

The **sum of the first $n$ terms** is:

$$S_n = \frac{n}{2}(2a + (n - 1)d) = \frac{n}{2}(a + l)$$

where $l$ is the last term.

**Worked Example.** Find the 20th term and the sum of the first 20 terms of $3, 7, 11, 15, \ldots$.

Here $a = 3$ and $d = 4$.

$$u_{20} = 3 + 19 \times 4 = 79$$

$$S_{20} = \frac{20}{2}(2 \times 3 + 19 \times 4) = 10 \times 82 = 820$$

### 4.2 Geometric Sequences

A **geometric sequence** has a constant **common ratio** $r$. The $n$-th term is:

$$u_n = ar^{n-1}$$

**Worked Example.** Find the 8th term of $2, 6, 18, 54, \ldots$.

Here $a = 2$ and $r = 3$.

$$u_8 = 2 \times 3^7 = 2 \times 2187 = 4374$$

### 4.3 Quadratic and Other Sequences

A **quadratic sequence** has second differences that are constant.

**Worked Example.** Find the $n$-th term of $2, 6, 12, 20, 30, \ldots$.

First differences: $4, 6, 8, 10, \ldots$

Second differences: $2, 2, 2, \ldots$

Since the second difference is 2, the coefficient of $n^2$ is $2/2 = 1$. So $u_n = n^2 + bn + c$.

When $n = 1$: $1 + b + c = 2 \implies b + c = 1$

When $n = 2$: $4 + 2b + c = 6 \implies 2b + c = 2$

Subtracting: $b = 1$, so $c = 0$.

$$u_n = n^2 + n$$

### 4.4 Fibonacci-Type Sequences

Each term is the sum of the two preceding terms: $u_n = u_{n-1} + u_{n-2}$.

Example: $1, 1, 2, 3, 5, 8, 13, 21, \ldots$

## 5. Graphs of Functions

### 5.1 Linear Graphs

The equation of a straight line is $y = mx + c$ where $m$ is the gradient and $c$ is the
$y$-intercept.

**Gradient formula:** For two points $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Parallel lines** have the same gradient. **Perpendicular lines** have gradients whose product is
$-1$: $m_1 m_2 = -1$.

**Worked Example.** Find the equation of the line through $(2, 5)$ perpendicular to $y = 3x - 1$.

The gradient of the given line is 3. The perpendicular gradient is $-\frac{1}{3}$.

$$y - 5 = -\frac{1}{3}(x - 2)$$
$$y = -\frac{1}{3}x + \frac{2}{3} + 5 = -\frac{1}{3}x + \frac{17}{3}$$

### 5.2 Quadratic Graphs

The graph of $y = ax^2 + bx + c$ is a **parabola**. If $a \gt 0$ it opens upward; if $a \lt 0$ it
opens downward.

The **turning point** is at $x = -\frac{b}{2a}$.

The **line of symmetry** is $x = -\frac{b}{2a}$.

### 5.3 Other Key Graphs

| Function           | Shape             | Key features                            |
| ------------------ | ----------------- | --------------------------------------- |
| $y = x^3$          | Cubic             | Point of inflection at origin           |
| $y = \frac{1}{x}$  | Reciprocal        | Asymptotes at both axes                 |
| $y = \sqrt{x}$     | Square root       | Starts at origin, curves to the right   |
| $y = 2^x$          | Exponential       | Passes through $(0, 1)$, never negative |
| $y = a^x$ (circle) | Circle radius $a$ | Centre at origin                        |

### 5.4 Transformations of Graphs

| Transformation | Effect on graph                                |
| -------------- | ---------------------------------------------- |
| $y = f(x) + c$ | Translate up by $c$                            |
| $y = f(x - c)$ | Translate right by $c$                         |
| $y = -f(x)$    | Reflect in the $x$-axis                        |
| $y = f(-x)$    | Reflect in the $y$-axis                        |
| $y = af(x)$    | Vertical stretch, scale factor $a$             |
| $y = f(ax)$    | Horizontal stretch, scale factor $\frac{1}{a}$ |

## 6. Algebraic Fractions

### 6.1 Simplification

**Worked Example.** Simplify $\frac{x^2 - 9}{x^2 + 5x + 6}$.

$$\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} = \frac{x - 3}{x + 2}$$

### 6.2 Addition and Subtraction

Find a common denominator, then combine.

**Worked Example.** Simplify $\frac{3}{x + 1} + \frac{2}{x - 2}$.

$$\frac{3(x - 2) + 2(x + 1)}{(x + 1)(x - 2)} = \frac{3x - 6 + 2x + 2}{(x + 1)(x - 2)} = \frac{5x - 4}{(x + 1)(x - 2)}$$

### 6.3 Solving Equations with Algebraic Fractions

**Worked Example.** Solve $\frac{x + 1}{3} + \frac{x - 2}{4} = 5$.

Multiply through by 12 (the LCM of 3 and 4):

$$4(x + 1) + 3(x - 2) = 60$$ $$4x + 4 + 3x - 6 = 60$$ $$7x - 2 = 60$$ $$7x = 62$$
$$x = \frac{62}{7}$$

## 7. Proof

### 7.1 Proof by Exhaustion

List all possible cases and verify each one.

### 7.2 Proof by Deduction

Start from known facts and use logical steps to reach a conclusion.

**Example.** Prove that the sum of two consecutive odd numbers is divisible by 4.

Let the consecutive odd numbers be $2n + 1$ and $2n + 3$ for integer $n \geq 0$.

Sum $= (2n + 1) + (2n + 3) = 4n + 4 = 4(n + 1)$.

Since $n + 1$ is an integer, the sum is a multiple of 4. $\blacksquare$

### 7.3 Disproof by Counterexample

To disprove a statement, find a single example where it fails.

**Example.** "All prime numbers are odd." Counterexample: 2 is prime and even.

## Common Pitfalls

- **Forgetting to reverse the inequality sign** when multiplying or dividing by a negative.
- **Incorrectly expanding $(a + b)^2$.** It is $a^2 + 2ab + b^2$, not $a^2 + b^2$.
- **Squaring brackets incorrectly in completing the square.** $(x + 3)^2 = x^2 + 6x + 9$, not
  $x^2 + 9$.
- **Confusing the turning point formula.** The $x$-coordinate is $-\frac{b}{2a}$, not
  $\frac{b}{2a}$.
- **Dropping solutions when solving quadratics.** Always check both values from $\pm$ in the
  formula.
- **Assuming all sequences are arithmetic.** Always check the first differences.

## Practice Questions

1. Expand and simplify $(3x - 2)(2x + 5) - (x + 1)^2$.

2. Solve the simultaneous equations $2x + 3y = 13$ and $4x - y = 5$.

3. Solve $x^2 - 7x + 10 = 0$ by factorisation, and verify using the quadratic formula.

4. Write $2x^2 - 12x + 5$ in completed square form. Hence state the minimum value and where it
   occurs.

5. Solve the inequality $x^2 - 4x - 5 \gt 0$.

6. The $n$-th term of a sequence is $n^2 + 3n$. Find the first 5 terms and the 50th term.

7. Find the equation of the line through $(-1, 4)$ that is parallel to $2y = 6x + 5$.

8. Simplify $\frac{x^2 + 5x + 6}{x^2 - 4} \div \frac{x + 3}{x - 2}$.

9. Prove that the product of three consecutive integers is always divisible by 6.

10. Solve $\frac{2}{x + 1} - \frac{3}{x - 2} = 1$.
