---
title: Inequalities
date: 2025-06-03T16:21:00.000Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: inequalities
---

An inequality states that one expression is greater than or less than another. Inequalities arise naturally when finding the [domain](./functions.md#definition-of-a-function) and [range](./functions.md#definition-of-a-function) of functions, and are closely related to [quadratic functions](./functions.md#quadratic-functions) through their graphical interpretation.

## Inequality Rules

### Basic Properties

Let $a$, $b$, and $c$ be real numbers. The following properties hold for inequalities:

**Addition property:**

$$
a > b \implies a + c > b + c
$$

Adding the same quantity to both sides preserves the inequality.

**Multiplication by a positive number:**

$$
a > b,\; c > 0 \implies ac > bc
$$

**Multiplication by a negative number (reversal):**

$$
a > b,\; c < 0 \implies ac < bc
$$

This is the most important rule to remember: multiplying or dividing both sides by a **negative** number **reverses** the inequality sign.

### Transitivity

$$
a > b \text{ and } b > c \implies a > c
$$

### Other Properties

- If $a > b > 0$, then $a^2 > b^2$ and $\dfrac{1}{a} < \dfrac{1}{b}$.
- If $a > b$ and $c > d$, then $a + c > b + d$.
- If $a > b > 0$ and $c > d > 0$, then $ac > bd$.

<details>
<summary>Examples</summary>
<p>

- $3 > 1 \implies 3 + 5 > 1 + 5$, i.e., $8 > 6$.
- $4 > 2$ and $3 > 0 \implies 4 \times 3 > 2 \times 3$, i.e., $12 > 6$.
- $5 > 2$ and $-3 < 0 \implies 5 \times (-3) < 2 \times (-3)$, i.e., $-15 < -6$.
- $7 > 5 > 2 \implies 7 > 2$ (transitivity).
- $3 > 2 > 0 \implies 9 > 4$ and $\dfrac{1}{3} < \dfrac{1}{2}$.

</p>
</details>

## Linear Inequalities

### Solving Linear Inequalities

A linear inequality has the form $ax + b > c$ or $ax + b < c$, where $a \neq 0$. The solution procedure mirrors that of linear equations, with one critical exception: when multiplying or dividing by a negative number, the inequality sign must be reversed.

**General method:**

1. Collect like terms on each side.
2. Isolate the variable by performing the same operation on both sides.
3. Reverse the inequality sign if multiplying or dividing by a negative number.

### Number Line Representation

The solution of a linear inequality in one variable is an interval, which can be represented on a number line:

- An **open circle** ($\circ$) indicates a strict inequality ($<$ or $>$).
- A **closed circle** ($\bullet$) indicates an inclusive inequality ($\leq$ or $\geq$).

<details>
<summary>Examples</summary>
<p>

- Solve $3x - 7 > 5$:

$$
3x > 12 \implies x > 4
$$

The solution set is $(4, \infty)$.

- Solve $2x + 3 \leq x - 4$:

$$
2x - x \leq -4 - 3 \implies x \leq -7
$$

The solution set is $(-\infty, -7]$.

- Solve $-2x + 6 < 10$:

$$
-2x < 4 \implies x > -2
$$

Note the reversal of the inequality sign when dividing by $-2$. The solution set is $(-2, \infty)$.

- Solve $5(x - 2) \geq 3x + 4$:

$$
5x - 10 \geq 3x + 4 \implies 2x \geq 14 \implies x \geq 7
$$

The solution set is $[7, \infty)$.

</p>
</details>

## Quadratic Inequalities

A quadratic inequality has the form $ax^2 + bx + c > 0$, $ax^2 + bx + c < 0$, or their non-strict variants, where $a \neq 0$. Solving quadratic inequalities relies on understanding the graph of the corresponding [quadratic function](./functions.md#quadratic-functions) $f(x) = ax^2 + bx + c$.

### Graphical Interpretation

The graph of $f(x) = ax^2 + bx + c$ is a parabola. The solution of $f(x) > 0$ corresponds to the $x$-values where the parabola lies **above** the $x$-axis, and $f(x) < 0$ corresponds to where the parabola lies **below** the $x$-axis.

The [discriminant](./functions.md#discriminant) $\Delta = b^2 - 4ac$ determines the number of intersections with the $x$-axis:

| Condition    | Parabola and $x$-axis                             | $ax^2 + bx + c > 0$ (for $a > 0$)              |
| ------------ | ------------------------------------------------- | ---------------------------------------------- |
| $\Delta > 0$ | Two distinct intersections at $x = \alpha, \beta$ | $x < \alpha$ or $x > \beta$                    |
| $\Delta = 0$ | One intersection at $x = \alpha$                  | $x \neq \alpha$ (all real $x$ except $\alpha$) |
| $\Delta < 0$ | No intersection                                   | All real $x$ (always true)                     |

### Solving Method

**Using factorization:**

1. Bring all terms to one side so the inequality is in the form $ax^2 + bx + c \gtrless 0$.
2. Factorize (or use the quadratic formula) to find the roots.
3. Draw a sign diagram to determine the sign of the expression in each interval.

**Sign diagram method:**

1. Find the roots of $ax^2 + bx + c = 0$.
2. Mark the roots on a number line, dividing the real line into intervals.
3. Test the sign of the expression in each interval.
4. Select the intervals satisfying the inequality.

<details>
<summary>Examples</summary>
<p>

- Solve $x^2 - 5x + 6 > 0$:

Factorize: $(x-2)(x-3) > 0$.

Roots are $x = 2$ and $x = 3$. Since $a = 1 > 0$, the parabola opens upward.

Sign diagram:

$$
\begin{array}{c|ccc}
x & (-\infty, 2) & (2, 3) & (3, \infty) \\
\hline
(x-2) & - & + & + \\
(x-3) & - & - & + \\
\hline
(x-2)(x-3) & + & - & +
\end{array}
$$

Solution: $x < 2$ or $x > 3$, i.e., $(-\infty, 2) \cup (3, \infty)$.

- Solve $-x^2 + 4x - 3 \geq 0$:

Multiply both sides by $-1$ (reverse inequality): $x^2 - 4x + 3 \leq 0$.

Factorize: $(x-1)(x-3) \leq 0$.

Since $a = 1 > 0$, the parabola opens upward. The expression is non-positive between the roots.

Solution: $1 \leq x \leq 3$, i.e., $[1, 3]$.

- Solve $x^2 + 2x + 5 < 0$:

Discriminant: $\Delta = 4 - 20 = -16 < 0$.

Since $a = 1 > 0$ and $\Delta < 0$, the parabola is always above the $x$-axis.

Solution: $\varnothing$ (no solution).

- Solve $2x^2 - 3x - 2 > 0$:

Factorize: $(2x + 1)(x - 2) > 0$.

Roots: $x = -\dfrac{1}{2}$ and $x = 2$.

Sign diagram:

$$
\begin{array}{c|ccc}
x & \left(-\infty, -\tfrac{1}{2}\right) & \left(-\tfrac{1}{2}, 2\right) & (2, \infty) \\
\hline
(2x+1) & - & + & + \\
(x-2) & - & - & + \\
\hline
(2x+1)(x-2) & + & - & +
\end{array}
$$

Solution: $x < -\dfrac{1}{2}$ or $x > 2$, i.e., $\left(-\infty, -\dfrac{1}{2}\right) \cup (2, \infty)$.

</p>
</details>

## Absolute Value Inequalities

The absolute value of a real number $x$, denoted $|x|$, represents its distance from zero on the number line. This geometric interpretation is the key to solving absolute value inequalities.

### Fundamental Forms

**$|x| < a$** (where $a > 0$):

Geometrically, $x$ is within distance $a$ from zero.

$$
|x| < a \iff -a < x < a
$$

**$|x| > a$** (where $a > 0$):

Geometrically, $x$ is more than distance $a$ from zero.

$$
|x| > a \iff x < -a \;\text{ or }\; x > a
$$

### General Forms

**$|ax + b| < c$** (where $c > 0$):

$$
|ax + b| < c \iff -c < ax + b < c
$$

This is equivalent to a system of two linear inequalities, which can be solved simultaneously.

**$|ax + b| > c$** (where $c > 0$):

$$
|ax + b| > c \iff ax + b < -c \;\text{ or }\; ax + b > c
$$

This gives two separate linear inequalities, each solved independently.

### Special Cases

- If $c \leq 0$, then $|x| < c$ has no solution ($\varnothing$).
- If $c < 0$, then $|x| > c$ is true for all real $x$ ($\mathbb{R}$).
- $|x| \geq a$ and $|x| \leq a$ follow the same patterns with non-strict inequality signs.

<details>
<summary>Examples</summary>
<p>

- Solve $|x - 3| < 5$:

$$
-5 < x - 3 < 5 \implies -2 < x < 8
$$

Solution: $(-2, 8)$.

- Solve $|2x + 1| \geq 7$:

$$
2x + 1 \leq -7 \;\text{ or }\; 2x + 1 \geq 7
$$

$$
2x \leq -8 \;\text{ or }\; 2x \geq 6
$$

$$
x \leq -4 \;\text{ or }\; x \geq 3
$$

Solution: $(-\infty, -4] \cup [3, \infty)$.

- Solve $|3x - 6| > 0$:

$$
3x - 6 \neq 0 \implies x \neq 2
$$

Solution: $\mathbb{R} \setminus \{2\}$.

- Solve $|x^2 - 4| < 5$:

$$
-5 < x^2 - 4 < 5 \implies -1 < x^2 < 9
$$

Since $x^2 \geq 0$ for all real $x$, the left inequality $-1 < x^2$ is always satisfied.

From $x^2 < 9$: $-3 < x < 3$.

Solution: $(-3, 3)$.

- Solve $|x + 2| \leq -1$:

Since $|x + 2| \geq 0$ for all real $x$, it can never be $\leq -1$.

Solution: $\varnothing$.

</p>
</details>

## Systems of Inequalities

A system of inequalities requires finding the set of values that satisfy **all** inequalities simultaneously. The solution set of the system is the **intersection** of the solution sets of the individual inequalities.

### Method for Systems of Linear Inequalities

1. Solve each inequality separately.
2. Find the intersection of all solution sets.
3. Represent the combined solution on a number line or using interval notation.

### Systems Involving Quadratic and Absolute Value Inequalities

The same principle applies: solve each inequality independently, then take the intersection of all solution sets.

<details>
<summary>Examples</summary>
<p>

- Find all $x$ satisfying $x^2 - 4x + 3 < 0$ and $2x - 1 > 3$:

From $x^2 - 4x + 3 < 0$: $(x-1)(x-3) < 0 \implies 1 < x < 3$.

From $2x - 1 > 3$: $2x > 4 \implies x > 2$.

Intersection: $2 < x < 3$, i.e., $(2, 3)$.

- Find all $x$ satisfying $|x - 1| \leq 3$ and $x^2 - 9 \leq 0$:

From $|x - 1| \leq 3$: $-3 \leq x - 1 \leq 3 \implies -2 \leq x \leq 4$.

From $x^2 - 9 \leq 0$: $(x-3)(x+3) \leq 0 \implies -3 \leq x \leq 3$.

Intersection: $-2 \leq x \leq 3$, i.e., $[-2, 3]$.

- Find all $x$ satisfying $x^2 - 2x - 8 > 0$ and $|x + 1| < 6$:

From $x^2 - 2x - 8 > 0$: $(x-4)(x+2) > 0 \implies x < -2$ or $x > 4$.

From $|x + 1| < 6$: $-6 < x + 1 < 6 \implies -7 < x < 5$.

Intersection: $-7 < x < -2$, i.e., $(-7, -2)$.

(Note: the second branch $x > 4$ from the quadratic has no overlap with $x < 5$ beyond $(4, 5)$, but $x > 4$ and $x < 5$ gives $4 < x < 5$. The full intersection is $(-7, -2) \cup (4, 5)$.)

- Find all $x$ satisfying $x^2 + 1 > 0$ and $x - 3 < 0$:

From $x^2 + 1 > 0$: always true (discriminant $\Delta = -4 < 0$, and $a = 1 > 0$).

From $x - 3 < 0$: $x < 3$.

Intersection: $(-\infty, 3)$.

</p>
</details>

---

<details>
<summary>Wrap-up Questions</summary>
<p>

1. **Question:** Solve the inequality $\dfrac{2x - 1}{3} \leq \dfrac{x + 2}{4} + 1$.
   <details>
   <summary>Answer</summary>
   <p>

   Multiply through by $12$ (the LCM of $3$ and $4$, which is positive so the inequality sign is preserved):

   $$
   4(2x - 1) \leq 3(x + 2) + 12
   $$

   $$
   8x - 4 \leq 3x + 6 + 12
   $$

   $$
   5x \leq 22 \implies x \leq \frac{22}{5}
   $$

   Solution: $\left(-\infty, \dfrac{22}{5}\right]$.

   </p>
   </details>

2. **Question:** Solve $x^2 - 6x + 9 \geq 0$.
   <details>
   <summary>Answer</summary>
   <p>

   Factorize: $(x - 3)^2 \geq 0$.

   Since $(x - 3)^2 \geq 0$ for all real $x$ (a square is always non-negative), the solution is all real numbers.

   Solution: $\mathbb{R}$.

   </p>
   </details>

3. **Question:** Find the range of $x$ for which $x^2 - 3x - 10 < 0$ and $2x + 1 > 0$ both hold.
   <details>
   <summary>Answer</summary>
   <p>

   From $x^2 - 3x - 10 < 0$: $(x - 5)(x + 2) < 0 \implies -2 < x < 5$.

   From $2x + 1 > 0$: $x > -\dfrac{1}{2}$.

   Intersection: $-\dfrac{1}{2} < x < 5$, i.e., $\left(-\dfrac{1}{2}, 5\right)$.

   </p>
   </details>

4. **Question:** Solve $|3x - 5| < 7$.
   <details>
   <summary>Answer</summary>
   <p>

   $$
   -7 < 3x - 5 < 7
   $$

   $$
   -2 < 3x < 12
   $$

   $$
   -\frac{2}{3} < x < 4
   $$

   Solution: $\left(-\dfrac{2}{3}, 4\right)$.

   </p>
   </details>

5. **Question:** Solve $|2x + 3| \geq x^2 + 2$.
   <details>
   <summary>Answer</summary>
   <p>

   This inequality combines absolute value and quadratic expressions. Consider two cases.

   **Case 1:** $2x + 3 \geq 0$ (i.e., $x \geq -\dfrac{3}{2}$), so $|2x + 3| = 2x + 3$:

   $$
   2x + 3 \geq x^2 + 2 \implies x^2 - 2x - 1 \leq 0
   $$

   Roots: $x = \dfrac{2 \pm \sqrt{4 + 4}}{2} = 1 \pm \sqrt{2}$.

   So $1 - \sqrt{2} \leq x \leq 1 + \sqrt{2}$.

   Combined with $x \geq -\dfrac{3}{2}$: $\max\!\left(1 - \sqrt{2},\; -\dfrac{3}{2}\right) \leq x \leq 1 + \sqrt{2}$.

   Since $1 - \sqrt{2} \approx -0.414 > -\dfrac{3}{2} = -1.5$, the constraint is $1 - \sqrt{2} \leq x \leq 1 + \sqrt{2}$.

   **Case 2:** $2x + 3 < 0$ (i.e., $x < -\dfrac{3}{2}$), so $|2x + 3| = -(2x + 3)$:

   $$
   -2x - 3 \geq x^2 + 2 \implies x^2 + 2x + 5 \leq 0
   $$

   Discriminant: $\Delta = 4 - 20 = -16 < 0$. Since $a = 1 > 0$, the expression is always positive. No solution in this case.

   Solution: $[1 - \sqrt{2},\; 1 + \sqrt{2}]$.

   </p>
   </details>

6. **Question:** For what values of $k$ does the quadratic equation $x^2 + 2kx + k + 6 = 0$ have two distinct real roots?
   <details>
   <summary>Answer</summary>
   <p>

   For two distinct real roots, the [discriminant](./functions.md#discriminant) must satisfy $\Delta > 0$:

   $$
   \Delta = (2k)^2 - 4(1)(k + 6) = 4k^2 - 4k - 24 > 0
   $$

   $$
   k^2 - k - 6 > 0
   $$

   Factorize: $(k - 3)(k + 2) > 0$.

   Since $a = 1 > 0$, the parabola opens upward. The expression is positive outside the roots.

   Solution: $k < -2$ or $k > 3$, i.e., $(-\infty, -2) \cup (3, \infty)$.

   </p>
   </details>

7. **Question:** Solve the system of inequalities $x^2 - 5x + 4 \leq 0$, $|x - 2| \leq 3$, and $x > 0$.
   <details>
   <summary>Answer</summary>
   <p>

   From $x^2 - 5x + 4 \leq 0$: $(x-1)(x-4) \leq 0 \implies 1 \leq x \leq 4$.

   From $|x - 2| \leq 3$: $-3 \leq x - 2 \leq 3 \implies -1 \leq x \leq 5$.

   From $x > 0$: $x \in (0, \infty)$.

   Intersection of all three:
   - From the first: $[1, 4]$.
   - From the second: $[-1, 5]$.
   - From the third: $(0, \infty)$.

   Combined: $[1, 4]$.

   Solution: $[1, 4]$.

   </p>
   </details>

8. **Question:** A ball is thrown upward from a height of $2$ m with an initial velocity of $20$ m/s. The height $h$ (in metres) after $t$ seconds is given by $h(t) = -5t^2 + 20t + 2$. During what time interval is the ball at a height greater than $17$ m?
   <details>
   <summary>Answer</summary>
   <p>

   We need $h(t) > 17$:

   $$
   -5t^2 + 20t + 2 > 17
   $$

   $$
   -5t^2 + 20t - 15 > 0
   $$

   Divide by $-5$ (reverse inequality):

   $$
   t^2 - 4t + 3 < 0
   $$

   Factorize: $(t - 1)(t - 3) < 0 \implies 1 < t < 3$.

   The ball is above $17$ m during the interval $(1, 3)$ seconds.

   </p>
   </details>

9. **Question:** Solve $\dfrac{x^2 - 4}{x - 1} \geq 0$.
   <details>
   <summary>Answer</summary>
   <p>

   First note that $x \neq 1$ (the denominator cannot be zero).

   Factorize the numerator: $\dfrac{(x-2)(x+2)}{x-1} \geq 0$.

   Critical points: $x = -2$, $x = 1$, $x = 2$.

   Sign diagram:

   $$
   \begin{array}{c|cccc}
   x & (-\infty, -2) & (-2, 1) & (1, 2) & (2, \infty) \\
   \hline
   (x-2) & - & - & - & + \\
   (x+2) & - & + & + & + \\
   (x-1) & - & - & + & + \\
   \hline
   \dfrac{(x-2)(x+2)}{x-1} & - & + & - & +
   \end{array}
   $$

   The expression is $\geq 0$ when $-2 \leq x < 1$ or $x \geq 2$.

   (Note: $x = -2$ is included because the numerator is zero there; $x = 1$ is excluded; $x = 2$ is included.)

   Solution: $[-2, 1) \cup [2, \infty)$.

   </p>
   </details>

10. **Question:** Solve $|x^2 - 3x + 1| < 3$.
    <details>
    <summary>Answer</summary>
    <p>

    $$
    -3 < x^2 - 3x + 1 < 3
    $$

    Split into two inequalities:

    **Left inequality:** $x^2 - 3x + 1 > -3 \implies x^2 - 3x + 4 > 0$.

    Discriminant: $\Delta = 9 - 16 = -7 < 0$. Since $a = 1 > 0$, this is always true.

    **Right inequality:** $x^2 - 3x + 1 < 3 \implies x^2 - 3x - 2 < 0$.

    Roots: $x = \dfrac{3 \pm \sqrt{9 + 8}}{2} = \dfrac{3 \pm \sqrt{17}}{2}$.

    Since $a = 1 > 0$, the expression is negative between the roots:

    $$
    \frac{3 - \sqrt{17}}{2} < x < \frac{3 + \sqrt{17}}{2}
    $$

    Since the left inequality imposes no restriction, the solution is:

    Solution: $\left(\dfrac{3 - \sqrt{17}}{2},\; \dfrac{3 + \sqrt{17}}{2}\right)$.

    </p>
    </details>

</p>
</details>
