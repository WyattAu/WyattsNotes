---
title: Analysis and Approaches Question Bank
tags:
  - maths
  - ib
slug: analysis-and-approaches-question-bank
description:
  'IB Mathematics AA exam-style question bank with full mark schemes. Covers Algebra and Functions,
  Geometry and Trigonometry, Statistics and Probability, and Calculus.'
---

## IB Mathematics AA — Question Bank

15 exam-style questions with full mark schemes, aligned to the IB Mathematics: Analysis and Approaches
syllabus (SL/HL). Each question is presented in table format for compact study, with worked solutions
below.

---

## Algebra and Functions

### Q1 — Arithmetic Sequences and Series

> An arithmetic sequence has first term $a_1 = 7$ and common difference $d = 4$.
> (a) Find the 20th term. [2 marks]
> (b) Find the sum of the first 20 terms. [3 marks]

**Mark Scheme:**

(a) $u_{20} = a_1 + 19d = 7 + 19(4) = 7 + 76 = \mathbf{83}$ ✓

(b) $S_{20} = \frac{20}{2}(a_1 + u_{20}) = 10(7 + 83) = 10(90) = \mathbf{900}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 2 | Substitute into $u_n = a_1 + (n-1)d$ |
| (b) | 3 | Apply $S_n = \frac{n}{2}(a_1 + a_n)$ |

`medium` — 5 marks total

---

### Q2 — Quadratic Functions

> The quadratic $f(x) = 2x^2 - 12x + 10$ can be written in the form $f(x) = a(x - h)^2 + k$.
> (a) Find the values of $a$, $h$, and $k$. [3 marks]
> (b) State the minimum value of $f(x)$ and the value of $x$ at which it occurs. [2 marks]

**Mark Scheme:**

(a) Completing the square:
$f(x) = 2(x^2 - 6x + 5)$
$= 2[(x - 3)^2 - 9 + 5]$
$= 2[(x - 3)^2 - 4]$
$= \mathbf{2(x - 3)^2 - 8}$

So $a = 2$, $h = 3$, $k = -8$. ✓

(b) Since $a = 2 > 0$, the parabola opens upward. Minimum value is $\mathbf{-8}$ when $\mathbf{x = 3}$. ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 3 | Complete the square by factoring out coefficient of $x^2$ |
| (b) | 2 | Identify vertex $(h, k)$ from completed square form |

`medium` — 5 marks total

---

### Q3 — Exponential and Logarithmic Equations (HL)

> Solve the equation $3^{2x - 1} = 5^{x + 1}$. Give your answer to three significant figures. [4 marks]

**Mark Scheme:**

Take logarithms (base 10 or natural):
$(2x - 1)\ln 3 = (x + 1)\ln 5$
$2x \ln 3 - \ln 3 = x \ln 5 + \ln 5$
$x(2\ln 3 - \ln 5) = \ln 5 + \ln 3$
$x = \frac{\ln 5 + \ln 3}{2\ln 3 - \ln 5} = \frac{\ln 15}{\ln 9 - \ln 5} = \frac{\ln 15}{\ln(9/5)}$

$x \approx \frac{2.708}{0.5878} \approx \mathbf{4.61}$ (3 s.f.) ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 4 | Apply logarithms to both sides, collect $x$ terms, evaluate |

`hard` — 4 marks total

---

### Q4 — Binomial Theorem (HL)

> Use the binomial theorem to find the coefficient of $x^3$ in the expansion of $(2x - 3)^5$. [3 marks]

**Mark Scheme:**

General term: $\binom{5}{r}(2x)^{5-r}(-3)^r$

For $x^3$: $5 - r = 3 \Rightarrow r = 2$.

Coefficient $= \binom{5}{2}(2)^3(-3)^2 = 10 \times 8 \times 9 = \mathbf{720}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 3 | Identify the correct term, evaluate coefficient |

`medium` — 3 marks total

---

## Geometry and Trigonometry

### Q5 — Trigonometric Equations

> Solve $2\sin x - 1 = 0$ for $0° \leq x \leq 360°$. [4 marks]

**Mark Scheme:**

$2\sin x = 1 \Rightarrow \sin x = 0.5$

$x = 30°$ (principal value)

$\sin x = 0.5$ also in the second quadrant:
$x = 180° - 30° = 150°$

Solutions: $\mathbf{x = 30°, 150°}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 4 | Isolate sin x, find principal value, apply symmetry |

`easy` — 4 marks total

---

### Q6 — Cosine Rule

> In triangle ABC, AB = 8 cm, BC = 6 cm, and angle ABC = 110°. Find the length of AC. [3 marks]

**Mark Scheme:**

Using the cosine rule:
$AC^2 = AB^2 + BC^2 - 2(AB)(BC)\cos(\text{ABC})$
$AC^2 = 64 + 36 - 2(8)(6)\cos 110°$
$AC^2 = 100 - 96\cos 110°$

$\cos 110° \approx -0.3420$

$AC^2 = 100 - 96(-0.3420) = 100 + 32.83 = 132.83$

$AC = \sqrt{132.83} \approx \mathbf{11.5 \text{ cm}}$ (3 s.f.) ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 3 | Apply cosine rule, evaluate with calculator |

`medium` — 3 marks total

---

### Q7 — Vectors (HL)

> Points A and B have position vectors $\mathbf{a} = 2\mathbf{i} + 3\mathbf{j} - \mathbf{k}$ and
> $\mathbf{b} = 5\mathbf{i} - \mathbf{j} + 4\mathbf{k}$.
> (a) Find $\overrightarrow{AB}$. [1 mark]
> (b) Find $|\overrightarrow{AB}|$. [2 marks]

**Mark Scheme:**

(a) $\overrightarrow{AB} = \mathbf{b} - \mathbf{a} = (5-2)\mathbf{i} + (-1-3)\mathbf{j} + (4-(-1))\mathbf{k} = \mathbf{3\mathbf{i} - 4\mathbf{j} + 5\mathbf{k}}$ ✓

(b) $|\overrightarrow{AB}| = \sqrt{3^2 + (-4)^2 + 5^2} = \sqrt{9 + 16 + 25} = \sqrt{50} = \mathbf{5\sqrt{2}}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 1 | Subtract position vectors |
| (b) | 2 | Magnitude formula $\sqrt{x^2 + y^2 + z^2}$ |

`medium` — 3 marks total

---

## Statistics and Probability

### Q8 — Normal Distribution

> The masses of apples are normally distributed with mean 150 g and standard deviation 12 g.
> (a) Find the probability that a randomly chosen apple has mass greater than 165 g. [2 marks]
> (b) Find the probability that a randomly chosen apple has mass between 135 g and 165 g. [3 marks]

**Mark Scheme:**

(a) $P(X > 165) = P\left(Z > \frac{165 - 150}{12}\right) = P(Z > 1.25)$

From tables: $P(Z < 1.25) \approx 0.8944$

$P(Z > 1.25) = 1 - 0.8944 = \mathbf{0.1056}$ ✓

(b) $P(135 < X < 165) = P(-1.25 < Z < 1.25) = 2(0.8944) - 1 = \mathbf{0.7888}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 2 | Standardise, use normal tables |
| (b) | 3 | Symmetry of normal distribution about the mean |

`medium` — 5 marks total

---

### Q9 — Probability — Conditional

> In a school, 60% of students study Physics, 45% study Chemistry, and 25% study both.
> A student is chosen at random. Given that they study Chemistry, find the probability they also
> study Physics. [3 marks]

**Mark Scheme:**

$P(\text{Physics} \mid \text{Chemistry}) = \frac{P(\text{Physics} \cap \text{Chemistry})}{P(\text{Chemistry})} = \frac{0.25}{0.45} = \frac{25}{45} = \frac{5}{9} \approx \mathbf{0.556}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 3 | Apply conditional probability formula $P(A|B) = P(A \cap B) / P(B)$ |

`medium` — 3 marks total

---

### Q10 — Correlation and Regression

> The following data shows the number of hours studied ($x$) and test score ($y$) for 5 students:
>
> | $x$ | 2 | 4 | 6 | 8 | 10 |
> |-----|---|---|---|---|----|
> | $y$ | 45 | 55 | 60 | 75 | 85 |
>
> (a) Calculate Pearson's product-moment correlation coefficient $r$. [3 marks]
> (b) Comment on the strength and direction of the correlation. [1 mark]

**Mark Scheme:**

$\bar{x} = 6$, $\bar{y} = 64$

$\sum x^2 = 220$, $\sum y^2 = 21600$, $\sum xy = 2100$, $n = 5$

$S_{xx} = 220 - 5(36) = 40$
$S_{yy} = 21600 - 5(4096) = 21600 - 20480 = 1120$
$S_{xy} = 2100 - 5(6)(64) = 2100 - 1920 = 180$

$r = \frac{180}{\sqrt{40 \times 1120}} = \frac{180}{\sqrt{44800}} = \frac{180}{211.7} \approx \mathbf{0.851}$

(b) Strong positive linear correlation — as study hours increase, test scores tend to increase. ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 3 | Compute $S_{xx}$, $S_{yy}$, $S_{xy}$, then $r$ |
| (b) | 1 | Interpret magnitude and sign of $r$ |

`hard` — 4 marks total

---

### Q11 — Combinatorics (HL)

> A committee of 4 people is to be selected from 7 men and 5 women. The committee must contain at least
> 2 women. In how many ways can this be done? [4 marks]

**Mark Scheme:**

Total people = 12. Need at least 2 women.

Case 1: 2 women, 2 men: $\binom{5}{2}\binom{7}{2} = 10 \times 21 = 210$

Case 2: 3 women, 1 man: $\binom{5}{3}\binom{7}{1} = 10 \times 7 = 70$

Case 3: 4 women, 0 men: $\binom{5}{4}\binom{7}{0} = 5 \times 1 = 5$

Total $= 210 + 70 + 5 = \mathbf{285}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 4 | Split into cases by number of women, sum combinations |

`hard` — 4 marks total

---

## Calculus

### Q12 — Differentiation from First Principles

> Use the definition of the derivative to show that the derivative of $f(x) = x^2$ is $f'(x) = 2x$. [4 marks]

**Mark Scheme:**

$f'(x) = \lim_{h \to 0} \frac{(x + h)^2 - x^2}{h}$

$= \lim_{h \to 0} \frac{x^2 + 2xh + h^2 - x^2}{h}$

$= \lim_{h \to 0} \frac{2xh + h^2}{h}$

$= \lim_{h \to 0}(2x + h) = \mathbf{2x}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 4 | Expand, factor out $h$, evaluate limit |

`medium` — 4 marks total

---

### Q13 — Integration — Area Under a Curve

> Find the area enclosed by the curve $y = x^2 - 4x + 3$, the x-axis, and the lines $x = 1$ and $x = 4$. [5 marks]

**Mark Scheme:**

First find where the curve crosses the x-axis between $x = 1$ and $x = 4$:
$x^2 - 4x + 3 = 0 \Rightarrow (x-1)(x-3) = 0 \Rightarrow x = 1, 3$

The curve is below the x-axis for $1 < x < 3$ and above for $3 < x < 4$.

Area $= \int_1^3 |x^2 - 4x + 3|\,dx + \int_3^4 (x^2 - 4x + 3)\,dx$

$\int (x^2 - 4x + 3)\,dx = \frac{x^3}{3} - 2x^2 + 3x$

First part (area = negative of integral):
$-\left[\frac{x^3}{3} - 2x^2 + 3x\right]_1^3 = -\left[\left(9 - 18 + 9\right) - \left(\frac{1}{3} - 2 + 3\right)\right] = -(0 - \frac{4}{3}) = \frac{4}{3}$

Second part:
$\left[\frac{x^3}{3} - 2x^2 + 3x\right]_3^4 = \left(\frac{64}{3} - 32 + 12\right) - 0 = \frac{64}{3} - 20 = \frac{4}{3}$

Total area $= \frac{4}{3} + \frac{4}{3} = \mathbf{\frac{8}{3}}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 5 | Find roots, split integral at roots, integrate, take absolute values |

`hard` — 5 marks total

---

### Q14 — Optimisation (HL)

> A rectangular box with a square base has a volume of $500\text{ cm}^3$. The material for the base costs
> $0.10/\text{cm}^2$ and the material for the sides costs $0.05/\text{cm}^2$. Find the dimensions that
> minimise the total cost. [6 marks]

**Mark Scheme:**

Let base side length = $x$ cm, height = $h$ cm.

Volume: $x^2 h = 500 \Rightarrow h = \frac{500}{x^2}$

Base area = $x^2$. Side area = $4xh = 4x \cdot \frac{500}{x^2} = \frac{2000}{x}$.

Cost: $C = 0.10x^2 + 0.05 \times \frac{2000}{x} = 0.10x^2 + \frac{100}{x}$

$\frac{dC}{dx} = 0.20x - \frac{100}{x^2}$

Set to zero: $0.20x = \frac{100}{x^2} \Rightarrow 0.20x^3 = 100 \Rightarrow x^3 = 500 \Rightarrow x = \sqrt[3]{500} \approx \mathbf{7.94 \text{ cm}}$

$h = \frac{500}{500^{2/3}} = 500^{1/3} \approx \mathbf{7.94 \text{ cm}}$

$\frac{d^2C}{dx^2} = 0.20 + \frac{200}{x^3} > 0$ for all $x > 0$, confirming a minimum. ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| — | 6 | Express cost function, differentiate, verify minimum |

`hard` — 6 marks total

---

### Q15 — Kinematics

> A particle moves in a straight line with velocity $v(t) = 3t^2 - 8t + 4$ m/s.
> (a) Find when the particle is at rest. [2 marks]
> (b) Find the total distance travelled in the first 3 seconds. [4 marks]

**Mark Scheme:**

(a) At rest: $v = 0$: $3t^2 - 8t + 4 = 0 \Rightarrow (3t - 2)(t - 2) = 0 \Rightarrow t = \frac{2}{3}$ s and $t = 2$ s. ✓

(b) Displacement: $s(t) = \int v\,dt = t^3 - 4t^2 + 4t + C$

$s(0) = 0$ (take starting position as origin), so $C = 0$.

Check direction changes:
- $0 < t < \frac{2}{3}$: $v > 0$ (moving right)
- $\frac{2}{3} < t < 2$: $v < 0$ (moving left)
- $t > 2$: $v > 0$ (moving right)

$s\left(\frac{2}{3}\right) = \left(\frac{2}{3}\right)^3 - 4\left(\frac{2}{3}\right)^2 + 4\left(\frac{2}{3}\right) = \frac{8}{27} - \frac{16}{9} + \frac{8}{3} = \frac{40}{27}$

$s(2) = 8 - 16 + 8 = 0$

$s(3) = 27 - 36 + 12 = 3$

Distance $= |s(\frac{2}{3}) - s(0)| + |s(2) - s(\frac{2}{3})| + |s(3) - s(2)|$
$= \frac{40}{27} + \frac{40}{27} + 3 = \frac{80}{27} + 3 = \frac{161}{27} \approx \mathbf{5.96 \text{ m}}$ ✓

| Part | Marks | Key Method |
|------|-------|-------------|
| (a) | 2 | Factor quadratic for $v = 0$ |
| (b) | 4 | Integrate, find turning points, sum absolute displacements |

`hard` — 6 marks total

---

## Summary

| Topic | Questions | Total Marks | Difficulty Range |
|-------|-----------|-------------|-----------------|
| Algebra and Functions | Q1–Q4 | 17 | medium–hard |
| Geometry and Trigonometry | Q5–Q7 | 10 | easy–medium |
| Statistics and Probability | Q8–Q11 | 16 | medium–hard |
| Calculus | Q12–Q15 | 20 | medium–hard |
| **Total** | **15** | **63** | |
