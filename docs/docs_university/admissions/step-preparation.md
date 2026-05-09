---
title: STEP Preparation
description:
  "Comprehensive preparation guide for the Sixth Term Examination Paper (STEP): algebra, calculus, vectors, probability, geometry, worked solutions, and exam technique."
date: 2026-05-05T00:00:00.000Z
tags:
  - Mathematics
  - University
  - Admissions
categories:
  - Mathematics
slug: step-preparation
---

## 1. Overview of STEP

The Sixth Term Examination Paper (STEP) is a university admissions test used primarily by the University
of Cambridge for undergraduate mathematics courses. It is also accepted or required by several other UK
universities as part of their conditional offers.

There are three papers:

| Paper | Content Scope | Typical Use |
| ----- | ------------- | ----------- |
| STEP I | A-Level Mathematics syllabus | Historically the most accessible; now less commonly required |
| STEP II | A-Level Mathematics and AS-Level Further Mathematics | Most widely required paper |
| STEP III | A-Level Further Mathematics full syllabus | Required for the most competitive Cambridge offers |

Each paper is 3 hours long. Candidates choose 6 questions from a total of 12 (8 pure, 2 mechanics, 2
probability/statistics). Each question is worth 20 marks. There is no penalty for incorrect working:
marks are awarded for correct progress towards the solution.

### 1.1 Grading

Grades are S (Outstanding), 1 (Very Good), 2 (Good), 3 (Satisfactory), and U (Unclassified). Typical
Cambridge offers require Grade 1 in two STEP papers. The distribution is not linear: the gap between
Grade 2 and Grade 1 is substantial, reflecting the exam's emphasis on sustained, complete solutions
rather than partial credit.

### 1.2 Key Differences from A-Level

- Questions are multi-part and require sustained reasoning. A single question may involve three or four
  distinct ideas chained together.
- Proofs are expected, not just computations. Candidates must justify steps, not merely state results.
- There is no module-specific focus: questions freely combine topics (e.g., trigonometry and integration,
  or algebra and geometry).
- The difficulty lies in the depth of each question rather than the breadth of the syllabus.

---

## 2. Algebra and Functions

### 2.1 Inequalities

STEP frequently requires manipulation of inequalities, often combining algebraic techniques with
calculus or induction.

**Cauchy-Schwarz Inequality.** For real numbers $a_1, \ldots, a_n$ and $b_1, \ldots, b_n$:

$$\left(\sum_{i=1}^{n} a_i b_i\right)^2 \leq \left(\sum_{i=1}^{n} a_i^2\right)\left(\sum_{i=1}^{n} b_i^2\right)$$

with equality if and only if $a_i$ and $b_i$ are proportional.

**AM-GM Inequality.** For non-negative real numbers $x_1, \ldots, x_n$:

$$\frac{x_1 + x_2 + \cdots + x_n}{n} \geq \sqrt[n]{x_1 x_2 \cdots x_n}$$

with equality if and only if all $x_i$ are equal.

**Technique: completing the square.** Many STEP inequalities can be reduced to completing the square.
For example, to show that $x^2 + y^2 + z^2 \geq xy + yz + zx$ for all real $x, y, z$:

$$2(x^2 + y^2 + z^2 - xy - yz - zx) = (x-y)^2 + (y-z)^2 + (z-x)^2 \geq 0$$

**Technique: substitution to standardise.** When an inequality involves a constraint, a well-chosen
substitution can reduce it to a known form. If $a + b + c = 1$ with $a, b, c > 0$, setting
$a = x/(x+y+z)$, etc., can convert a constrained problem into an unconstrained one.

### 2.2 Partial Fractions

Partial fraction decomposition is a routine technique that appears in integration and series questions.

**Repeated linear factors.** For a denominator with $(x-a)^k$:

$$\frac{P(x)}{(x-a)^k} = \frac{A_1}{x-a} + \frac{A_2}{(x-a)^2} + \cdots + \frac{A_k}{(x-a)^k}$$

**Irreducible quadratic factors.** For a denominator with $(x^2 + bx + c)^m$ where $b^2 < 4c$:

$$\frac{P(x)}{(x^2 + bx + c)^m} = \frac{B_1 x + C_1}{x^2 + bx + c} + \cdots + \frac{B_m x + C_m}{(x^2 + bx + c)^m}$$

**Cover-up rule.** For distinct linear factors, the coefficient of $1/(x - a_i)$ is obtained by
evaluating the remaining expression at $x = a_i$.

### 2.3 Polynomials

**Remainder theorem.** When $P(x)$ is divided by $(x - a)$, the remainder is $P(a)$.

**Factor theorem.** $(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.

**Vieta's formulae.** For a cubic $x^3 + px^2 + qx + r = 0$ with roots $\alpha, \beta, \gamma$:

$$\alpha + \beta + \gamma = -p, \quad \alpha\beta + \beta\gamma + \gamma\alpha = q, \quad \alpha\beta\gamma = -r$$

**Resultants and symmetric functions.** STEP often asks for expressions in the roots of a polynomial
without finding the roots explicitly. For example, to find $\alpha^2 + \beta^2 + \gamma^2$:

$$\alpha^2 + \beta^2 + \gamma^2 = (\alpha + \beta + \gamma)^2 - 2(\alpha\beta + \beta\gamma + \gamma\alpha) = p^2 - 2q$$

---

## 3. Calculus

### 3.1 Integration Techniques

Integration is the single most tested topic on STEP. Candidates must be fluent with the following
techniques.

**Substitution.** The standard $u = g(x)$ substitution. The key is recognising when the integrand
contains $g'(x)$ alongside a function of $g(x)$.

**Integration by parts.** For $\int u \, dv = uv - \int v \, du$. Strategy: apply repeatedly when the
integrand involves $x^n$ multiplied by $\sin x$, $\cos x$, $e^x$, or $\ln x$.

**Reduction formulae.** Many STEP questions establish a recurrence relation. For example, setting
$I_n = \int_0^{\pi/2} \sin^n x \, dx$ and integrating by parts yields:

$$I_n = \frac{n-1}{n} I_{n-2}$$

with $I_0 = \pi/2$ and $I_1 = 1$.

**Trigonometric substitutions.** For integrands involving $\sqrt{a^2 - x^2}$, use $x = a\sin\theta$.
For $\sqrt{a^2 + x^2}$, use $x = a\tan\theta$. For $\sqrt{x^2 - a^2}$, use $x = a\sec\theta$.

**Rational functions.** Decompose via partial fractions, then integrate term by term. A common STEP
trick is to write $\int \frac{1}{x^2 + a^2} \, dx = \frac{1}{a}\arctan\frac{x}{a}$.

**Improper integrals.** Evaluate limits at points of discontinuity or at infinity. Always check
convergence before computing the value.

### 3.2 Differential Equations

**First order: separable.** $\frac{dy}{dx} = f(x)g(y)$ rearranges to $\int \frac{1}{g(y)}\,dy = \int f(x)\,dx$.

**First order: integrating factor.** For $\frac{dy}{dx} + P(x)y = Q(x)$, the integrating factor is
$\mu(x) = e^{\int P(x)\,dx}$, giving $\frac{d}{dx}(\mu y) = \mu Q$.

**Second order: constant coefficients.** For $a\frac{d^2y}{dx^2} + b\frac{dy}{dx} + cy = f(x)$:
1. Solve the complementary function from $a m^2 + bm + c = 0$.
2. Find a particular integral appropriate to $f(x)$.
3. Combine: $y = y_c + y_p$.

### 3.3 Series

**Taylor and Maclaurin series.** For $f(x)$ infinitely differentiable at $x = a$:

$$f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n$$

Standard series to know:

$$e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!}, \quad \sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}, \quad \cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$$

$$\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n+1} x^n}{n} \quad (|x| \leq 1, \, x \neq -1)$$

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad (|x| < 1)$$

**Convergence tests.** Ratio test, comparison test, integral test. STEP often asks candidates to prove
convergence or divergence of a given series using these methods.

**Summation by parts.** Analogous to integration by parts:

$$\sum_{k=m}^{n} a_k b_k = A_n b_n - \sum_{k=m}^{n-1} A_k(b_{k+1} - b_k)$$

where $A_k = a_1 + \cdots + a_k$.

---

## 4. Vectors and Matrices

### 4.1 Vectors in Two and Three Dimensions

**Scalar product.** $\mathbf{'\{'}a{'\}'} \cdot \mathbf{'\{'}b{'\}'} = |\mathbf{'\{'}a{'\}'}||\mathbf{'\{'}b{'\}'}|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$.

**Vector product.** $\mathbf{'\{'}a{'\}'} \times \mathbf{'\{'}b{'\}'}$ is perpendicular to both $\mathbf{'\{'}a{'\}'}$ and $\mathbf{'\{'}b{'\}'}$
with magnitude $|\mathbf{'\{'}a{'\}'}||\mathbf{'\{'}b{'\}'}|\sin\theta$.

**Triple scalar product.** $[\mathbf{'\{'}a{'\}'}, \mathbf{'\{'}b{'\}'}, \mathbf{'\{'}c{'\}'}] = \mathbf{'\{'}a{'\}'} \cdot (\mathbf{'\{'}b{'\}'} \times \mathbf{'\{'}c{'\}'})$
equals the signed volume of the parallelepiped spanned by $\mathbf{'\{'}a{'\}'}, \mathbf{'\{'}b{'\}'}, \mathbf{'\{'}c{'\}'}$.

**Vector equation of a line.** $\mathbf{'\{'}r{'\}'} = \mathbf{'\{'}a{'\}'} + t\mathbf{'\{'}d{'\}'}$.

**Vector equation of a plane.** $\mathbf{'\{'}r{'\}'} \cdot \mathbf{'\{'}n{'\}'} = d$, or $\mathbf{'\{'}r{'\}'} = \mathbf{'\{'}a{'\}'} + s\mathbf{'\{'}b{'\}'} + t\mathbf{'\{'}c{'\}'}$.

### 4.2 Matrices

**Matrix multiplication.** $(AB)_{ij} = \sum_k A_{ik}B_{kj}$. Matrix multiplication is associative but
not commutative.

**Determinant (3x3).** Expand by cofactors along any row or column:

$$\det A = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})$$

**Inverse.** $A^{-1} = \frac{1}{\det A}\text{adj{}(A)$. A matrix is invertible if and only if $\det A \neq 0$.

**Eigenvalues and eigenvectors.** Solve $\det(A - \lambda I) = 0$ for eigenvalues $\lambda$, then solve
$(A - \lambda I)\mathbf{'\{'}v{'\}'} = \mathbf{'\{'}0{'\}'}$ for eigenvectors $\mathbf{'\{'}v{'\}'}$.

**Transformation matrices.** Reflection in the line $y = x\tan\theta$, rotation by angle $\theta$,
and other geometric transformations can be represented as $2 \times 2$ or $3 \times 3$ matrices.

---

## 5. Probability and Combinatorics

### 5.1 Counting Principles

**Addition principle.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways, and the tasks are
mutually exclusive, then $A$ or $B$ can be done in $m + n$ ways.

**Multiplication principle.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways
independently, then $A$ and $B$ together can be done in $mn$ ways.

**Permutations and combinations.** The number of permutations of $r$ objects from $n$ is
$P(n,r) = \frac{n!}{(n-r)!}$. The number of combinations is $C(n,r) = \binom{n}{r} = \frac{n!}{r!(n-r)!}$.

**Inclusion-exclusion principle.** For sets $A$ and $B$:

$$|A \cup B| = |A| + |B| - |A \cap B|$$

### 5.2 Probability

**Conditional probability.** $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$.

**Bayes' theorem.**

$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$

**Expected value and variance.** For a discrete random variable $X$:

$$\mathbb{'\{'}E{'\}'}(X) = \sum_i x_i p_i, \quad \text{Var{}(X) = \mathbb{'\{'}E{'\}'}(X^2) - [\mathbb{'\{'}E{'\}'}(X)]^2$$

**Linearity of expectation.** $\mathbb{'\{'}E{'\}'}(X + Y) = \mathbb{'\{'}E{'\}'}(X) + \mathbb{'\{'}E{'\}'}(Y)$ always, regardless of
independence.

### 5.3 Common STEP Combinatorics Techniques

**Stars and bars.** The number of solutions to $x_1 + x_2 + \cdots + x_k = n$ in non-negative integers
is $\binom{n + k - 1}{k - 1}$.

**Bijection arguments.** Show that the objects being counted are in one-to-one correspondence with a
simpler set.

**Generating functions.** The coefficient of $x^n$ in $(1 + x)^N$ is $\binom{N}{n}$, and in
$(1 + x + x^2 + \cdots)^k$ is $\binom{n + k - 1}{k - 1}$.

---

## 6. Geometry

### 6.1 Coordinate Geometry

**Distance.** $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.

**Midpoint.** $M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$.

**Line equations.** Gradient-intercept: $y = mx + c$. Two-point form:
$\frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}$.

**Perpendicular distance from a point to a line.** For line $ax + by + c = 0$ and point $(x_0, y_0)$:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

### 6.2 Conic Sections

**Circle.** $(x - a)^2 + (y - b)^2 = r^2$. Centre $(a, b)$, radius $r$.

**Ellipse.** $\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$ with $a > b$. Foci at $(\pm c, 0)$ where $c^2 = a^2 - b^2$.

**Hyperbola.** $\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$. Foci at $(\pm c, 0)$ where $c^2 = a^2 + b^2$.
Asymptotes: $y = \pm \frac{b}{a}x$.

**Parabola.** $y^2 = 4ax$ with focus $(a, 0)$ and directrix $x = -a$. Parametric form:
$(at^2, 2at)$.

### 6.3 Parametric Curves and Envelopes

**Tangent to a parametric curve.** For $(x(t), y(t))$:

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

**Envelopes.** Given a family of curves $F(x, y, t) = 0$ parameterised by $t$, the envelope satisfies
$F(x, y, t) = 0$ and $\frac{\partial F}{\partial t} = 0$ simultaneously.

---

## 7. Worked Questions

### Question 1 (Pure: Inequalities and Algebra)

> Prove that for all positive real numbers $a, b, c$:
>
> $$\frac{a}{b + c} + \frac{b}{c + a} + \frac{c}{a + b} \geq \frac{3}{2}$$

**Solution.** We use the substitution $x = b + c$, $y = c + a$, $z = a + b$. Then
$a = \frac{y + z - x}{2}$, $b = \frac{z + x - y}{2}$, $c = \frac{x + y - z}{2}$.

By the triangle inequalities on $a, b, c > 0$, we have $y + z > x$, $z + x > y$, $x + y > z$,
so $x, y, z$ are the side lengths of a (non-degenerate) triangle.

The inequality becomes:

$$\frac{y + z - x}{2x} + \frac{z + x - y}{2y} + \frac{x + y - z}{2z} \geq \frac{3}{2}$$

which simplifies to:

$$\frac{y}{2x} + \frac{z}{2x} + \frac{z}{2y} + \frac{x}{2y} + \frac{x}{2z} + \frac{y}{2z} - \frac{3}{2} \geq \frac{3}{2}$$

$$\frac{y}{2x} + \frac{z}{2x} + \frac{z}{2y} + \frac{x}{2y} + \frac{x}{2z} + \frac{y}{2z} \geq 3$$

By AM-GM on each pair:

$$\frac{y}{2x} + \frac{x}{2y} \geq 2\sqrt{\frac{y}{2x} \cdot \frac{x}{2y}} = 1$$

$$\frac{z}{2x} + \frac{x}{2z} \geq 1, \quad \frac{z}{2y} + \frac{y}{2z} \geq 1$$

Summing these three inequalities gives the result. Equality holds when $x = y = z$, i.e.,
$a = b = c$.

---

### Question 2 (Pure: Integration)

> Evaluate:
>
> $$I_n = \int_0^{\pi/2} \cos^{2n}\theta \, d\theta$$
>
> and deduce that $I_n = \frac{(2n)!}{4^n(n!)^2} \cdot \frac{\pi}{2}$.

**Solution.** Write $I_n = \int_0^{\pi/2} \cos^{2n}\theta \, d\theta$.

Integration by parts with $u = \cos^{2n-1}\theta$ and $dv = \cos\theta\, d\theta$:

$$du = -(2n-1)\cos^{2n-2}\theta \sin\theta \, d\theta, \quad v = \sin\theta$$

$$I_n = \left[\cos^{2n-1}\theta \sin\theta\right]_0^{\pi/2} + (2n-1)\int_0^{\pi/2} \cos^{2n-2}\theta \sin^2\theta \, d\theta$$

The boundary term vanishes. Using $\sin^2\theta = 1 - \cos^2\theta$:

$$I_n = (2n-1)\int_0^{\pi/2} \cos^{2n-2}\theta(1 - \cos^2\theta)\,d\theta = (2n-1)(I_{n-1} - I_n)$$

Solving for $I_n$:

$$I_n + (2n-1)I_n = (2n-1)I_{n-1}$$

$$2n I_n = (2n-1)I_{n-1}$$

$$I_n = \frac{2n-1}{2n} I_{n-1}$$

Since $I_0 = \pi/2$:

$$I_n = \frac{2n-1}{2n} \cdot \frac{2n-3}{2n-2} \cdots \frac{3}{4} \cdot \frac{1}{2} \cdot \frac{\pi}{2} = \frac{(2n)!}{4^n(n!)^2} \cdot \frac{\pi}{2}$$

where the last equality follows by writing the product of odd terms as $(2n)!/(2^n \cdot n!)$ and the
product of even terms as $2^n \cdot n!$, so:

$$\frac{(2n)!}{2^n n! \cdot 2^n n!} = \frac{(2n)!}{4^n (n!)^2}$$

---

### Question 3 (Pure: Differential Equations)

> Solve the differential equation:
>
> $$x\frac{dy}{dx} + y = x^2 y^2$$
>
> subject to $y(1) = 1$. Find the range of $x$ for which the solution is defined.

**Solution.** This is a Bernoulli equation. Rewrite as:

$$\frac{dy}{dx} + \frac{y}{x} = xy^2$$

Divide by $y^2$ (valid where $y \neq 0$):

$$y^{-2}\frac{dy}{dx} + \frac{y^{-1}}{x} = x$$

Let $u = y^{-1}$, so $\frac{du}{dx} = -y^{-2}\frac{dy}{dx}$:

$$-\frac{du}{dx} + \frac{u}{x} = x$$

$$\frac{du}{dx} - \frac{u}{x} = -x$$

This is a linear first-order ODE. Integrating factor: $\mu = e^{\int -1/x\,dx} = e^{-\ln x} = \frac{1}{x}$.

$$\frac{d}{dx}\left(\frac{u}{x}\right) = -1$$

$$\frac{u}{x} = -x + C$$

$$u = -x^2 + Cx = x(C - x)$$

Since $u = 1/y$:

$$y = \frac{1}{x(C - x)}$$

Applying $y(1) = 1$: $1 = \frac{1}{1 \cdot (C - 1)}$, so $C = 2$.

Therefore:

$$y = \frac{1}{x(2 - x)} = \frac{1}{2x - x^2}$$

The denominator $2x - x^2 = x(2 - x)$ must be non-zero, so $x \neq 0$ and $x \neq 2$. For the
solution through $(1, 1)$, we have $y > 0$ at $x = 1$, and the solution is defined on $(0, 2)$.

---

### Question 4 (Pure: Sequences and Series)

> Let $a_1 = 1$ and $a_{n+1} = \frac{1}{2}\left(a_n + \frac{2}{a_n}\right)$ for $n \geq 1$.
>
> (i) Show that $a_n \geq \sqrt{2}$ for all $n \geq 2$.
> (ii) Show that $(a_n)$ is decreasing for $n \geq 2$.
> (iii) Deduce that $(a_n)$ converges and find its limit.

**Solution.**

**(i)** For $n \geq 1$, by AM-GM:

$$a_{n+1} = \frac{1}{2}\left(a_n + \frac{2}{a_n}\right) \geq \sqrt{a_n \cdot \frac{2}{a_n}} = \sqrt{2}$$

Since $a_2 = \frac{1}{2}(1 + 2) = \frac{3}{2} \geq \sqrt{2}$, by induction $a_n \geq \sqrt{2}$ for all
$n \geq 2$.

**(ii)** For $n \geq 2$:

$$a_{n+1} - a_n = \frac{1}{2}\left(a_n + \frac{2}{a_n}\right) - a_n = \frac{2 - a_n^2}{2a_n}$$

Since $a_n \geq \sqrt{2}$, we have $a_n^2 \geq 2$, so $2 - a_n^2 \leq 0$ and $2a_n > 0$, giving
$a_{n+1} - a_n \leq 0$. Hence $(a_n)$ is decreasing for $n \geq 2$.

**(iii)** The sequence $(a_n)_{n \geq 2}$ is decreasing and bounded below by $\sqrt{2}$, so by the
monotone convergence theorem it converges to some limit $L \geq \sqrt{2}$.

Taking limits in the recurrence:

$$L = \frac{1}{2}\left(L + \frac{2}{L}\right)$$

$$2L = L + \frac{2}{L}$$

$$L = \frac{2}{L}$$

$$L^2 = 2$$

Since $L \geq \sqrt{2} > 0$, we have $L = \sqrt{2}$.

---

### Question 5 (Probability and Statistics)

> A bag contains $n$ balls, of which $r$ are red and $n - r$ are blue. Balls are drawn one at a time
> without replacement until a red ball is drawn. Let $X$ be the number of draws required.
>
> (i) Find $\mathbb{'\{'}E{'\}'}(X)$.
> (ii) Find $\text{Var{}(X)$.
> (iii) Show that $\mathbb{'\{'}E{'\}'}(X) = \frac{n+1}{r+1}$.

**Solution.** This is a negative hypergeometric distribution.

**(i)** Use indicator random variables. Let $I_j$ be the indicator that the $j$-th draw is required,
i.e., $I_j = 1$ if the first $j-1$ draws are all blue and the $j$-th is red.

The probability that the first $j-1$ draws are all blue is:

$$P(\text{first {} j-1 \text{ are blue{}) = \frac{\binom{n-r}{j-1}}{\binom{n}{j-1}}$$

provided $j - 1 \leq n - r$. Then:

$$P(X = j) = \frac{\binom{n-r}{j-1}}{\binom{n}{j-1}} \cdot \frac{r}{n - (j-1)}$$

for $j = 1, 2, \ldots, n - r + 1$.

For the expectation, we use a different approach. Consider the blue balls in the bag. There are $r$
red balls creating $r + 1$ "gaps" (before the first red, between consecutive reds, after the last red).
The blue balls are distributed uniformly at random among these $r + 1$ gaps.

Let $B_i$ be the number of blue balls in gap $i$. Then $B_1 + B_2 + \cdots + B_{r+1} = n - r$, and by
symmetry $\mathbb{'\{'}E{'\}'}(B_i) = \frac{n - r}{r + 1}$ for each $i$.

The number of draws $X$ equals $B_1 + 1$ (the blue balls before the first red, plus one for the first
red ball itself). Therefore:

$$\mathbb{'\{'}E{'\}'}(X) = \mathbb{'\{'}E{'\}'}(B_1) + 1 = \frac{n - r}{r + 1} + 1 = \frac{n - r + r + 1}{r + 1} = \frac{n + 1}{r + 1}$$

**(ii)** For the variance, use a similar symmetry argument. We need
$\mathbb{'\{'}E{'\}'}(B_1^2)$. The blue balls are distributed multinomially among $r + 1$ gaps with equal
probabilities $\frac{1}{r+1}$ each. For a multinomial distribution:

$$\text{Var{}(B_1) = (n-r)\cdot\frac{1}{r+1}\cdot\frac{r}{r+1} = \frac{r(n-r)}{(r+1)^2}$$

Since $\text{Var{}(B_1) = \mathbb{'\{'}E{'\}'}(B_1^2) - [\mathbb{'\{'}E{'\}'}(B_1)]^2$:

$$\mathbb{'\{'}E{'\}'}(B_1^2) = \frac{r(n-r)}{(r+1)^2} + \frac{(n-r)^2}{(r+1)^2} = \frac{(n-r)(r + n - r)}{(r+1)^2} = \frac{(n-r)n}{(r+1)^2}$$

Since $X = B_1 + 1$:

$$\text{Var{}(X) = \text{Var{}(B_1) = \frac{r(n-r)}{(r+1)^2}$$

**(iii)** This was established in part (i): $\mathbb{'\{'}E{'\}'}(X) = \frac{n+1}{r+1}$.

---

## 8. Common Pitfalls

**Arithmetic errors in long calculations.** STEP questions involve sustained algebra. A single sign
error early in a solution can invalidate an entire question. Always check intermediate results and
verify that special cases are consistent.

**Neglecting to state conditions.** When dividing by an expression, you must state that it is non-zero.
When taking square roots, you must consider both signs. When applying a convergence test, you must
verify its hypotheses.

**Confusing necessary and sufficient conditions.** Showing that a result holds for specific values does
not prove it in general. Showing that a condition is necessary does not show it is sufficient.

**Incomplete integration by parts.** When applying integration by parts repeatedly, track the signs
carefully. The alternating sign pattern is a frequent source of error.

**Missing edge cases in combinatorics.** When counting, verify that no configuration is counted twice
and none is omitted. Check boundary cases (e.g., empty sets, all elements identical).

**Unjustified interchange of limits.** You cannot always differentiate under an integral sign or
interchange the order of summation. In a proof-based exam, such interchanges must be justified.

**Failing to check the answer.** Substitute your answer back into the original equation or verify
against known special cases. A quick check can catch errors that are otherwise invisible.

---

## 9. Exam Technique

### 9.1 Question Selection

With 12 questions and only 6 to attempt, selection is critical. Spend the first 10--15 minutes reading
all 12 questions and identifying the 6 you are most confident about. Prioritise questions where you
can see a clear path to a complete solution.

### 9.2 Presentation

- State what you are doing at each stage. A sequence of unexplained equations is not a proof.
- Draw diagrams where appropriate, especially for geometry and mechanics.
- Label all variables clearly. If a question introduces notation, use it consistently.
- If you cannot complete a question, write down what you have done. Partial marks are available for
  correct progress.

### 9.3 Time Management

At 3 hours for 6 questions, you have approximately 30 minutes per question. If a question is taking
longer than 35 minutes, consider moving on. It is better to attempt 6 questions partially than 3
questions fully and 0 partially.

### 9.4 Checking

Reserve the final 10 minutes to review your work. Check that:
- Every equation follows from the previous one.
- Boundary conditions have been applied.
- The final answer is in the form requested by the question.
- No algebraic errors have been introduced in the final steps.

### 9.5 Preparation Strategy

1. Work through past papers systematically, starting with the earliest available and progressing to
   the most recent.
2. For each question, write a full solution before checking the mark scheme. The act of writing the
   solution is where the learning happens.
3. Maintain a list of techniques that you find difficult and revisit them regularly.
4. Time yourself on full papers under exam conditions at least once a week in the months leading up
   to the exam.
5. Study the mark schemes to understand what earns full marks. STEP rewards completeness and rigour,
   not just correct answers.
