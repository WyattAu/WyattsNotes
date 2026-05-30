---
title: Mathematics
date: 2026-05-30
description:
  'SAT Mathematics section notes covering algebra, advanced math, problem solving, data analysis,
  geometry, trigonometry, and calculator strategies.'
tags:
  - sat
  - maths
  - mathematics
categories:
  - sat
slug: mathematics
---

## Section Overview

The Mathematics section of the digital SAT consists of **44 questions** across **70 minutes**, split
into two adaptive modules of 22 questions each (35 minutes per module). Approximately 75% of questions
are multiple-choice with four answer options; the remaining 25% are student-produced response
(grid-in) questions where you enter a numerical answer.

A **calculator** is permitted throughout the entire Mathematics section. The Bluebook app includes a
built-in Desmos graphing calculator.

### Content Domains

| Domain                                | Approximate Weight | Question Count |
| ------------------------------------- | ----------------- | ------------- |
| **Algebra**                           | ~35%              | 13-15         |
| **Advanced Math**                     | ~35%              | 13-15         |
| **Problem Solving and Data Analysis** | ~15%              | 5-7           |
| **Geometry and Trigonometry**         | ~15%              | 5-7           |

---

## Algebra

### Linear Equations and Inequalities

**One-Variable Linear Equations:**

The standard form is $ax + b = 0$, with solution $x = -\frac{b}{a}$ (for $a \neq 0$).

Steps to solve:
1. Distribute and combine like terms.
2. Isolate the variable on one side.
3. Verify by substituting back into the original equation.

**Systems of Linear Equations:**

A system of two linear equations in two variables:

$$
\begin{cases}
a_1 x + b_1 y = c_1 \\
a_2 x + b_2 y = c_2
\end{cases}
$$

Three solution methods:

- **Substitution** -- Solve one equation for one variable and substitute into the other. Best when
  one variable has a coefficient of 1.
- **Elimination** -- Multiply equations to align coefficients, then add or subtract to eliminate a
  variable. Best when coefficients are easily matched.
- **Graphical** -- The solution is the intersection point of the two lines. Useful for estimating
  or verifying.

**Key concepts:**
- A system has **one solution** if the lines intersect (different slopes).
- A system has **no solution** if the lines are parallel (same slope, different intercepts).
- A system has **infinitely many solutions** if the lines are identical (same slope and intercept).

### Linear Functions and Graphs

The equation of a line: $y = mx + b$

- $m$ = slope $= \frac{\Delta y}{\Delta x} = \frac{y_2 - y_1}{x_2 - x_1}$
- $b$ = y-intercept (value of $y$ when $x = 0$)

**Forms of a linear equation:**

| Form               | Equation            | Best Used For                      |
| ------------------ | ------------------- | ---------------------------------- |
| Slope-intercept    | $y = mx + b$        | Graphing, identifying slope/intercept |
| Point-slope        | $y - y_1 = m(x - x_1)$ | Writing equation given a point     |
| Standard           | $Ax + By = C$       | Determining intercepts, systems    |

**Parallel lines** have equal slopes ($m_1 = m_2$).
**Perpendicular lines** have slopes that are negative reciprocals ($m_1 \cdot m_2 = -1$).

### Quadratic Functions

**Standard form:** $f(x) = ax^2 + bx + c$

**Vertex form:** $f(x) = a(x - h)^2 + k$, where $(h, k)$ is the vertex.

**Factored form:** $f(x) = a(x - r_1)(x - r_2)$, where $r_1, r_2$ are the x-intercepts (roots).

**Converting between forms:**

To convert from standard to vertex form, complete the square:

$$
ax^2 + bx + c = a\left(x^2 + \frac{b}{a}x\right) + c = a\left(x + \frac{b}{2a}\right)^2 - \frac{b^2}{4a} + c
$$

The vertex is at $x = -\frac{b}{2a}$.

**The discriminant** $D = b^2 - 4ac$ determines the nature of the roots:

| Condition      | Roots                           | Graph                           |
| -------------- | ------------------------------- | ------------------------------- |
| $D > 0$        | Two distinct real roots          | Parabola crosses x-axis twice  |
| $D = 0$        | One repeated real root           | Parabola touches x-axis        |
| $D < 0$        | No real roots (two complex)      | Parabola does not cross x-axis |

**Factoring quadratics:** Look for integer factor pairs of $ac$ that sum to $b$.

**The quadratic formula:**

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

Use when factoring is difficult or when the roots are not integers.

### Polynomial Operations

**Addition and subtraction:** Combine like terms.

**Multiplication:** Use the distributive property (FOIL for binomials).

$$
(a + b)(c + d) = ac + ad + bc + bd
$$

**Special products:**

$$
(a + b)^2 = a^2 + 2ab + b^2
$$
$$
(a - b)^2 = a^2 - 2ab + b^2
$$
$$
(a + b)(a - b) = a^2 - b^2
$$

**Division:** Use polynomial long division or synthetic division. The Remainder Theorem states that
the remainder when $P(x)$ is divided by $(x - c)$ is $P(c)$. The Factor Theorem states that $(x - c)$
is a factor of $P(x)$ if and only if $P(c) = 0$.

### Functions and Their Graphs

A function $f$ maps each input $x$ to exactly one output $f(x)$.

**Domain:** The set of all valid inputs.
**Range:** The set of all possible outputs.

**Key function families:**

| Function      | Equation              | Graph Shape      | Key Feature              |
| ------------- | --------------------- | ---------------- | ------------------------ |
| Linear        | $f(x) = mx + b$      | Straight line    | Constant rate of change  |
| Quadratic     | $f(x) = ax^2 + bx + c$ | Parabola       | Vertex, axis of symmetry |
| Exponential   | $f(x) = a \cdot b^x$  | Exponential curve | Horizontal asymptote    |
| Absolute value | $f(x) = \|x\|$       | V-shape          | Vertex at origin         |
| Square root   | $f(x) = \sqrt{x}$     | Half parabola   | Domain: $x \geq 0$       |

**Transformations:**

- $f(x) + k$ -- vertical shift up by $k$
- $f(x) - k$ -- vertical shift down by $k$
- $f(x + h)$ -- horizontal shift left by $h$
- $f(x - h)$ -- horizontal shift right by $h$
- $-f(x)$ -- reflection over x-axis
- $f(-x)$ -- reflection over y-axis
- $af(x)$ -- vertical stretch by factor $a$ (if $|a| > 1$) or compression (if $0 < |a| < 1$)

### Inequalities

**Linear inequalities:** Solve like equations, but reverse the inequality sign when multiplying or
dividing by a negative number.

- $ax + b > 0 \implies x > -\frac{b}{a}$ (if $a > 0$)
- $ax + b > 0 \implies x < -\frac{b}{a}$ (if $a < 0$)

**Absolute value inequalities:**

- $|x| < c \implies -c < x < c$ (for $c > 0$)
- $|x| > c \implies x < -c$ or $x > c$ (for $c > 0$)

**Quadratic inequalities:**

1. Find the roots of the corresponding equation.
2. Test a value in each interval determined by the roots.
3. Select intervals where the inequality holds.

### Exponential and Logarithmic Functions

**Exponential growth:** $f(x) = a(1 + r)^x$, where $r > 0$ is the growth rate.
**Exponential decay:** $f(x) = a(1 - r)^x$, where $0 < r < 1$ is the decay rate.

**Logarithms** are the inverse of exponentials:

$$
\log_b a = c \iff b^c = a
$$

**Properties of logarithms:**

$$
\log_b(xy) = \log_b x + \log_b y
$$
$$
\log_b\left(\frac{x}{y}\right) = \log_b x - \log_b y
$$
$$
\log_b(x^n) = n \log_b x
$$
$$
\log_b b = 1, \quad \log_b 1 = 0
$$

---

## Advanced Math

### Complex Numbers

A complex number is $z = a + bi$, where $a$ is the real part, $b$ is the imaginary part, and
$i = \sqrt{-1}$.

**Operations:**

Addition: $(a + bi) + (c + di) = (a + c) + (b + d)i$

Multiplication: $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$

Division: Multiply numerator and denominator by the conjugate of the denominator:

$$
\frac{a + bi}{c + di} = \frac{(a + bi)(c - di)}{(c + di)(c - di)} = \frac{ac + bd}{c^2 + d^2} + \frac{bc - ad}{c^2 + d^2}i
$$

**Modulus:** $|z| = \sqrt{a^2 + b^2}$

**Powers of $i$** cycle every 4: $i^1 = i$, $i^2 = -1$, $i^3 = -i$, $i^4 = 1$.

### Trigonometry

**Right triangle trigonometry:**

$$
\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}
$$

**Key identities:**

$$
\sin^2\theta + \cos^2\theta = 1
$$
$$
\tan\theta = \frac{\sin\theta}{\cos\theta}
$$
$$
\sin(2\theta) = 2\sin\theta\cos\theta
$$
$$
\cos(2\theta) = \cos^2\theta - \sin^2\theta
$$

**Unit circle:** A circle of radius 1 centred at the origin. Key values at standard angles:

| Angle ($^\circ$) | $0$  | $30$            | $45$            | $60$            | $90$ | $180$ | $270$ |
| ---------------- | ---- | --------------- | --------------- | --------------- | ---- | ----- | ----- |
| $\sin\theta$     | $0$  | $\frac{1}{2}$   | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$  | $0$   | $-1$  |
| $\cos\theta$     | $1$  | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$   | $0$  | $-1$  | $0$   |

**Radian measure:** $\theta_{\text{rad}} = \theta_{\text{deg}} \times \frac{\pi}{180}$

Common radian values: $30^\circ = \frac{\pi}{6}$, $45^\circ = \frac{\pi}{4}$, $60^\circ = \frac{\pi}{3}$,
$90^\circ = \frac{\pi}{2}$, $180^\circ = \pi$.

### Circle Equations

**Standard form:** $(x - h)^2 + (y - k)^2 = r^2$, where $(h, k)$ is the centre and $r$ is the radius.

**Expanded form:** $x^2 + y^2 + Dx + Ey + F = 0$

To convert from expanded to standard form, complete the square for both $x$ and $y$:

$$
x^2 + Dx = \left(x + \frac{D}{2}\right)^2 - \frac{D^2}{4}
$$
$$
y^2 + Ey = \left(y + \frac{E}{2}\right)^2 - \frac{E^2}{4}
$$

**Arc length:** $L = r\theta$ (where $\theta$ is in radians)

**Arc area (sector):** $A = \frac{1}{2}r^2\theta$ (where $\theta$ is in radians)

### Polynomial Equations

**The Fundamental Theorem of Algebra:** Every polynomial of degree $n$ has exactly $n$ roots
(counting multiplicity and complex roots).

**Relationship between roots and coefficients:**

For $ax^3 + bx^2 + cx + d = 0$ with roots $r_1, r_2, r_3$:

$$
r_1 + r_2 + r_3 = -\frac{b}{a}, \quad r_1 r_2 + r_1 r_3 + r_2 r_3 = \frac{c}{a}, \quad r_1 r_2 r_3 = -\frac{d}{a}
$$

---

## Problem Solving and Data Analysis

### Ratios and Proportions

A ratio $a:b$ expresses a relationship between two quantities. A proportion states that two ratios
are equal: $\frac{a}{b} = \frac{c}{d}$.

**Strategy:** Set up a proportion and cross-multiply: $ad = bc$.

**Unit rates:** Express quantities per single unit (e.g., miles per hour, cost per item).

### Percentages

**Basic calculations:**

- Finding a percentage: $x\%$ of $n = \frac{x}{100} \cdot n$
- Percentage change: $\frac{\text{new} - \text{original}}{\text{original}} \times 100\%$
- Percentage increase: new = original $\times (1 + r)$
- Percentage decrease: new = original $\times (1 - r)$

**Successive percentage changes** do not simply add. For example, a 20% increase followed by a 20%
decrease yields:

$$
(1.20)(0.80) = 0.96 \implies 4\% \text{ decrease overall}
$$

### Descriptive Statistics

| Measure           | Definition                                        |
| ----------------- | ------------------------------------------------- |
| **Mean**          | Sum of values divided by the count: $\bar{x} = \frac{\sum x_i}{n}$ |
| **Median**        | Middle value when data is sorted                  |
| **Mode**          | Most frequently occurring value                    |
| **Range**         | Maximum minus minimum                              |
| **Standard deviation** | Average distance of each value from the mean  |
| **IQR**           | Third quartile minus first quartile ($Q_3 - Q_1$) |

**Key relationships:**

- For a symmetric distribution, mean $\approx$ median.
- For a right-skewed distribution, mean > median.
- For a left-skewed distribution, mean < median.

**Effect of transformations:**

- Adding a constant $c$ to every value: mean increases by $c$, standard deviation unchanged.
- Multiplying every value by $c$: mean multiplied by $c$, standard deviation multiplied by $|c|$.

### Probability

**Basic probability:** $P(A) = \frac{\text{favourable outcomes}}{\text{total outcomes}}$

**Complement:** $P(A^c) = 1 - P(A)$

**Union (or):** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$

**Intersection (and):** $P(A \cap B) = P(A) \cdot P(B)$ if $A$ and $B$ are independent.

**Conditional probability:** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$

Two events are independent if and only if $P(A \mid B) = P(A)$.

### Scatterplots and Modelling

**Correlation coefficient $r$:**

- $r = 1$: perfect positive linear relationship
- $r = -1$: perfect negative linear relationship
- $r = 0$: no linear relationship

**Line of best fit (least squares regression):** $\hat{y} = mx + b$

The coefficient of determination $r^2$ represents the proportion of variance in $y$ explained by the
linear relationship with $x$.

**Exponential modelling:** When data grows or decays by a constant percentage, use $y = ab^x$.

To determine whether a linear or exponential model is more appropriate:
- If the _first differences_ (consecutive differences in $y$) are roughly constant, use linear.
- If the _ratios_ of consecutive $y$-values are roughly constant, use exponential.

### Unit Conversions

**Strategy:** Use dimensional analysis (multiply by conversion factors equal to 1).

$$
12 \text{ inches} \times \frac{1 \text{ foot}}{12 \text{ inches}} \times \frac{1 \text{ yard}}{3 \text{ feet}} = 1 \text{ yard}
$$

**Common conversions to know:**

| Quantity | Relationships |
| -------- | ------------- |
| Length   | 1 foot = 12 inches; 1 yard = 3 feet; 1 mile = 5280 feet |
| Weight   | 1 pound = 16 ounces; 1 ton = 2000 pounds |
| Volume   | 1 cup = 8 fl oz; 1 pint = 2 cups; 1 quart = 2 pints; 1 gallon = 4 quarts |
| Metric   | 1 km = 1000 m; 1 m = 100 cm; 1 kg = 1000 g |

---

## Calculator Strategies

### Approved Calculators

Most graphing calculators are approved for the SAT, including:
- TI-84 Plus (all editions)
- TI-Nspire (non-CAS)
- Casio fx-CG50
- HP Prime

**Not allowed:** Calculators with CAS (Computer Algebra System) capabilities, QWERTY keyboards, or
internet access. The TI-Nspire CAS is not permitted.

### When to Use the Calculator

**Use it for:**
- Arithmetic with large or messy numbers (fractions, decimals, roots).
- Graphing functions to find intercepts, intersections, or maxima/minima.
- Checking solutions to equations.
- Statistical calculations (mean, standard deviation, regression).
- Converting between units.

**Avoid it for:**
- Simple arithmetic you can do mentally (mental math is faster and less error-prone).
- Problems where the algebra is straightforward (setting up the equation is the hard part).
- Problems where the calculator would not help (reading comprehension in word problems, identifying
  the correct formula).

### Desmos Tips

The built-in Desmos calculator in Bluebook is powerful:

- **Graph equations** by typing `y = mx + b` and adjusting parameters with sliders.
- **Find intersections** by clicking the intersection point of two graphs.
- **Regression** -- type a table of values, then use `y1 ~ mx1 + b` for linear or `y1 ~ a*b^x1` for
  exponential regression.
- **Absolute value** -- type `abs(x)` or use the keyboard shortcut.
- **Square root** -- type `sqrt(x)` or use the radical button.

:::tip

Practise with Desmos before test day at <https://www.desmos.com/calculator>. Familiarity with the
interface saves time on the exam.

:::

---

## Common Pitfalls

1. **Sloppy algebraic manipulation.** The most common source of errors is arithmetic mistakes when
   solving equations -- dropped negative signs, incorrect distribution, and sign errors when
   cross-multiplying. Write out every step, especially under time pressure.

2. **Confusing the vertex form and standard form of quadratics.** Know the formulas for converting
   between forms and be able to identify the vertex directly from $y = a(x - h)^2 + k$ without
   expanding.

3. **Misidentifying exponential vs. linear growth.** When a problem asks whether data fits a linear
   or exponential model, check first differences (linear) or consecutive ratios (exponential).
   Many students assume linear growth by default.

4. **Forgetting to check the domain of a function.** For rational functions, square root functions,
   and logarithmic functions, the domain may exclude certain values. Always check for division by
   zero, negative values under square roots, and non-positive values in logarithms.

5. **Over-relying on the calculator.** A calculator cannot set up an equation, interpret a word
   problem, or identify the correct formula. Spend most of your time on understanding and setup,
   then use the calculator for computation.

6. **Not answering the question asked.** Many word problems require you to find a value and then
   perform an additional step (convert units, subtract from a total, interpret in context). Read the
   final question carefully before selecting or entering an answer.

7. **Grid-in errors for student-produced responses.** For grid-in questions:
   - Enter only positive values and zero (the grid does not support negative answers).
   - Enter improper fractions (e.g., 3/2), mixed numbers must be converted (1 1/2 = 3/2).
   - Round only if the problem specifies; otherwise enter exact values.

---

## Summary

The Mathematics section tests four core domains: Algebra, Advanced Math, Problem Solving and Data
Analysis, and Geometry and Trigonometry. Success depends on:

- Strong algebraic fluency -- solving equations, working with functions, and manipulating expressions
  quickly and accurately.
- Deep understanding of function families and their transformations.
- Statistical reasoning -- interpreting data, understanding measures of central tendency and spread,
  and modelling with linear and exponential functions.
- Strategic calculator use -- knowing when the calculator saves time and when algebraic reasoning is
  faster.

The key to a high Mathematics score is fluency: practice until solving equations, graphing functions,
and applying formulas become automatic.
