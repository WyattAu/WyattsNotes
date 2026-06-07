---
title: Further Pure Mathematics 1
description:
  'A-Level Maths Further Pure Mathematics 1 notes covering key definitions, core concepts, worked
  examples, and practice questions for systematic revision.'
date: 2026-05-31
tags:
  - Maths
  - ALevel
  - FurtherPure
categories:
  - Maths
slug: further-pure-1
---

## Board Coverage

| Board      | Paper       | Notes                                                       |
| ---------- | ----------- | ----------------------------------------------------------- |
| AQA        | Paper 2     | Complex numbers, matrices, series, proof                    |
| Edexcel    | FP1         | Complex numbers, matrices, polar coords, proof by induction |
| OCR (A)    | Pure Core 1 | Complex numbers, matrices, polar coords, hyperbolic         |
| CIE (9709) | Paper 3     | Complex numbers, polars, further calculus, induction        |

:::info This content sits at the transition between single A-Level Mathematics and Further
Mathematics. You must be confident with all Core Pure topics before tackling these.
:::

<hr />

## 1. Complex Numbers

### 1.1 Argand Diagram

A complex number $z = x + iy$ is represented as the point $(x, y)$ on the **Argand diagram** (a
modified Cartesian plane where the horizontal axis is the real axis and the vertical axis is the
imaginary axis).

- The **modulus** $|z| = r = \sqrt{x^2 + y^2}$ is the distance from the origin to $(x, y)$.
- The **argument** $\arg(z) = \theta$ is the angle from the positive real axis, measured
  anticlockwise. Principal argument: $-\pi < \theta \leq \pi$.

$$z = x + iy = r(\cos\theta + i\sin\theta) = re^{i\theta}$$

### 1.2 Modulus-Argument Form

**Multiplication:** $z_1 z_2 = r_1 r_2\,e^{i(\theta_1 + \theta_2)}$. Moduli multiply; arguments add.

**Division:** $\dfrac{z_1}{z_2} = \dfrac{r_1}{r_2}\,e^{i(\theta_1 - \theta_2)}$. Moduli divide;
arguments subtract.

**Modulus properties:**

$$|z_1 z_2| = |z_1|\,|z_2| \qquad |z_1 + z_2| \leq |z_1| + |z_2| \qquad |z^n| = |z|^n$$

### 1.3 de Moivre's Theorem

For integer $n$:

$$[r(\cos\theta + i\sin\theta)]^n = r^n(\cos n\theta + i\sin n\theta)$$

Equivalently: $(e^{i\theta})^n = e^{in\theta}$.

**Applications:**

- Raising complex numbers to large powers
- Trigonometric identities (equating real and imaginary parts)

### 1.4 Roots of Unity

The $n$th roots of unity are the solutions to $z^n = 1$:

$$z_k = e^{2\pi i k / n} = \cos\frac{2\pi k}{n} + i\sin\frac{2\pi k}{n}, \quad k = 0, 1, 2, \ldots, n-1$$

They lie on the unit circle at vertices of a regular $n$-gon. The sum of all $n$th roots of unity is
$0$.

**Example.** The cube roots of unity are $1$, $\omega = e^{2\pi i/3}$, and $\omega^2$. They satisfy
$1 + \omega + \omega^2 = 0$ and $\omega^3 = 1$.

### 1.5 Loci in the Complex Plane

**Circle:** $|z - z_0| = r$ represents a circle centred at $z_0$ with radius $r$.

**Perpendicular bisector:** $|z - z_1| = |z - z_2|$ is the perpendicular bisector of the segment
joining $z_1$ and $z_2$.

**Half-line (ray):** $\arg(z - z_0) = \alpha$ is a half-line from $z_0$ making angle $\alpha$ with
the positive real axis.

**Region inequalities:** $|z - z_0| < r$ is the interior of a circle; $\arg(z - z_0) < \alpha$ is a
region bounded by a half-line.

---

## 2. Matrices

### 2.1 Matrix Operations

**Addition:** $A + B$ elementwise (same dimensions required).

**Scalar multiplication:** $kA$ multiplies every entry.

**Matrix multiplication:** $(AB)_{ij} = \sum_k A_{ik} B_{kj}$. Number of columns of $A$ must equal
number of rows of $B$. As a general principle, $AB \neq BA$.

**Identity:** $I_n$ has $1$s on the diagonal and $0$s elsewhere. $AI = IA = A$.

**Determinant of $2 \times 2$:**

$$\begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc$$

**Inverse of $2 \times 2$:**

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad-bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

A matrix has an inverse if and only if its determinant is non-zero (it is **non-singular**).

### 2.2 Determinant of $3 \times 3$

Expand by cofactors along any row or column. Along row 1:

$$\begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a\begin{vmatrix} e & f \\ h & i \end{vmatrix} - b\begin{vmatrix} d & f \\ g & i \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix}$$

### 2.3 Inverse of $3 \times 3$

Form the matrix of cofactors, transpose it (giving the adjugate), then divide by the determinant:

$$A^{-1} = \frac{1}{|A|}\text{adj}(A)$$

**Solving $A\mathbf{x} = \mathbf{b}$:** $\mathbf{x} = A^{-1}\mathbf{b}$ (unique solution when
$|A| \neq 0$).

### 2.4 Transformations in 2D

A matrix $M$ represents a linear transformation. The image of point $(x, y)$ is
$M\begin{pmatrix} x \\ y \end{pmatrix}$.

| Transformation                  | Matrix                                                                              |
| ------------------------------- | ----------------------------------------------------------------------------------- |
| Reflection in $y = x$           | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$                                      |
| Rotation $\theta$ anticlockwise | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement scale factor $k$    | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$                                      |
| Reflection in $x$-axis          | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$                                     |

**Area scale factor** $= |\det(M)|$.

### 2.5 Transformations in 3D

$3 \times 3$ matrices represent transformations in 3D space. Key examples:

- **Reflection in $xy$-plane:** $\begin{pmatrix} 1&0&0\\0&1&0\\0&0&-1 \end{pmatrix}$
- **Rotation about the $z$-axis:** extend the 2D rotation matrix to $3 \times 3$ with a $1$ in
  position $(3,3)$

**Volume scale factor** $= |\det(M)|$.

### 2.6 Invariant Points and Lines

An **invariant point** satisfies $M\mathbf{x} = \mathbf{x}$, i.e. $(M - I)\mathbf{x} = \mathbf{0}$.

An **invariant line** through the origin satisfies $M\mathbf{x} = \lambda\mathbf{x}$ for some scalar
$\lambda$. This means finding the eigenvectors of $M$.

A line **invariant as a set** means every point on the line maps to some point on the same line (not
necessarily itself).

---

## 3. Further Calculus

### 3.1 Integration by Parts

$$\int u\,dv = uv - \int v\,du$$

**Choosing $u$ and $dv$:** Use the LIATE priority: **L**ogarithmic, **I**nverse trig, **A**lgebraic,
**T**rigonometric, **E**xponential. Choose $u$ from higher priority.

**Repeated integration by parts** is needed when the integrand includes products like $x^n e^{ax}$,
$x^n \sin ax$, or $x^n \cos ax$.

### 3.2 Standard Integrals

$$\int \frac{1}{x^2 + a^2}\,dx = \frac{1}{a}\tan^{-1}\frac{x}{a} + C \qquad \int \frac{1}{\sqrt{a^2 - x^2}}\,dx = \sin^{-1}\frac{x}{a} + C$$

$$\int \frac{1}{x^2 - a^2}\,dx = \frac{1}{2a}\ln\left|\frac{x-a}{x+a}\right| + C$$

### 3.3 First Order Differential Equations

**Separable form:** $\dfrac{dy}{dx} = f(x)g(y)$. Rearrange: $\dfrac{1}{g(y)}\,dy = f(x)\,dx$, then
integrate both sides.

**Integrating factor method** for $\dfrac{dy}{dx} + P(x)y = Q(x)$:

$$\text{Integrating factor } \mu = e^{\int P(x)\,dx}$$

$$y \cdot \mu = \int Q(x)\mu\,dx + C$$

**General solution:** contains an arbitrary constant $C$.

**Particular solution:** found by substituting initial conditions to determine $C$.

### 3.4 Second Order Differential Equations

Homogeneous equation: $a\dfrac{d^2y}{dx^2} + b\dfrac{dy}{dx} + cy = 0$

**Auxiliary equation:** $am^2 + bm + c = 0$

**Case 1 — Distinct real roots $m_1, m_2$:**

$$y = Ae^{m_1 x} + Be^{m_2 x}$$

**Case 2 — Repeated root $m$:**

$$y = (Ax + B)e^{mx}$$

**Case 3 — Complex roots $\alpha \pm i\beta$:**

$$y = e^{\alpha x}(A\cos\beta x + B\sin\beta x)$$

---

## 4. Polar Coordinates

### 4.1 Converting Between Cartesian and Polar

A point with Cartesian coordinates $(x, y)$ and polar coordinates $(r, \theta)$:

$$x = r\cos\theta \qquad y = r\sin\theta \qquad r = \sqrt{x^2 + y^2} \qquad \tan\theta = \frac{y}{x}$$

### 4.2 Sketching Polar Curves

Given $r = f(\theta)$:

1. Determine the range of $\theta$ (often $0 \leq \theta \leq 2\pi$ or a subset).
2. Find where $r = 0$ and maxima of $r$.
3. Compute a table of $(r, \theta)$ values at key angles ($0$, $\pi/6$, $\pi/4$, $\pi/3$, $\pi/2$,
   $\pi$, $3\pi/2$, $2\pi$).
4. Plot each point and join smoothly.

**Common curves:**

| Equation                | Shape                                |
| ----------------------- | ------------------------------------ |
| $r = a$                 | Circle, radius $a$, centre at origin |
| $r = a\theta$           | Archimedean spiral                   |
| $r = a(1 + \cos\theta)$ | Cardioid                             |
| $r^2 = a^2\cos 2\theta$ | Lemniscate                           |

### 4.3 Area Enclosed by a Polar Curve

$$A = \frac{1}{2}\int_{\alpha}^{\beta} r^2\,d\theta$$

**For a full curve** traced once as $\theta$ goes from $\alpha$ to $\beta$, substitute the full
range.

**Sector area** between two values $\theta_1$ and $\theta_2$:

$$A = \frac{1}{2}\int_{\theta_1}^{\theta_2} r^2\,d\theta$$

---

## 5. Hyperbolic Functions

### 5.1 Definitions

$$\cosh x = \frac{e^x + e^{-x}}{2} \qquad \sinh x = \frac{e^x - e^{-x}}{2} \qquad \tanh x = \frac{\sinh x}{\cosh x}$$

**Key values:** $\cosh 0 = 1$, $\sinh 0 = 0$, $\tanh 0 = 0$.

### 5.2 Identities

$$\cosh^2 x - \sinh^2 x = 1$$ $$1 - \tanh^2 x = \text{sech}^2\, x$$
$$\coth^2 x - 1 = \text{cosech}^2\, x$$

**Compound angle (Osborn's rule):** Replace every $\sin^2$ with $-\sinh^2$ in a standard trig
identity.

$$\cosh(x + y) = \cosh x \cosh y + \sinh x \sinh y$$
$$\sinh(x + y) = \sinh x \cosh y + \cosh x \sinh y$$

### 5.3 Calculus of Hyperbolic Functions

$$\frac{d}{dx}\sinh x = \cosh x \qquad \frac{d}{dx}\cosh x = \sinh x \qquad \frac{d}{dx}\tanh x = \text{sech}^2\, x$$

$$\int \cosh x\,dx = \sinh x + C \qquad \int \sinh x\,dx = \cosh x + C$$

### 5.4 Inverse Hyperbolic Functions

$$\sinh^{-1} x = \ln\left(x + \sqrt{x^2 + 1}\right) \qquad \cosh^{-1} x = \ln\left(x + \sqrt{x^2 - 1}\right)\text{ for } x \geq 1$$

$$\tanh^{-1} x = \frac{1}{2}\ln\frac{1+x}{1-x}\text{ for } |x| < 1$$

**Derivatives:**

$$\frac{d}{dx}\sinh^{-1} x = \frac{1}{\sqrt{1+x^2}} \qquad \frac{d}{dx}\cosh^{-1} x = \frac{1}{\sqrt{x^2-1}}$$

---

## 6. Proof

### 6.1 Proof by Induction (Advanced)

**Steps:**

1. **Base case:** Show the statement holds for $n = n_0$ (in most cases $n = 1$).
2. **Inductive hypothesis:** Assume the statement holds for $n = k$.
3. **Inductive step:** Show that if it holds for $n = k$, it also holds for $n = k + 1$.
4. **Conclusion:** By the principle of mathematical induction, the statement holds for all
   $n \geq n_0$.

**Common applications:**

- Summation formulas: $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$
- Divisibility: proving $3^{2n} - 1$ is divisible by 8
- Inequalities: $2^n > n^2$ for $n \geq 5$
- De Moivre's theorem for positive integers
- Matrix powers: $A^n$ for a given matrix $A$

### 6.2 Proof by Contradiction

1. Assume the negation of the statement to be proved.
2. Derive a logical contradiction.
3. Conclude the original statement must be true.

**Classic examples:**

- $\sqrt{2}$ is irrational
- There are infinitely many primes
- $\log_2 3$ is irrational

### 6.3 Counterexamples

A single counterexample is sufficient to disprove a universal claim.

**Example.** "All prime numbers are odd." Counterexample: $2$ is prime and even.

**Strategy:** For disproof, try small values, boundary cases, and special cases to find a
counterexample.

---

## 7. Common Mistakes

1. **Wrong principal argument.** $\arg(z)$ must satisfy $-\pi < \theta \leq \pi$. Points in the
   third and fourth quadrants need negative arguments.
2. **Forgetting $r$ when multiplying complex numbers in polar form.**
   $z_1 z_2 = r_1 r_2 e^{i(\theta_1+\theta_2)}$, not $e^{i(\theta_1+\theta_2)}$.
3. **Matrix multiplication is not commutative.** $AB \neq BA$ as a general principle. Always
   maintain order.
4. **Incorrect area formula for polar curves.** It is $\frac{1}{2}\int r^2\,d\theta$, not
   $\int r\,d\theta$.
5. **Confusing trig and hyperbolic identities.** The key difference: $\cosh^2 x - \sinh^2 x = 1$
   (minus, not plus). Use Osborn's rule carefully.
6. **Incomplete induction step.** You must explicitly show how the $n = k$ hypothesis is used to
   establish the $n = k + 1$ case. Directly writing the $n = k + 1$ expression is not enough.
7. **Incorrect auxiliary equation roots.** For repeated roots, the solution is $(Ax + B)e^{mx}$, not
   $Ae^{mx} + Be^{mx}$ (which is only valid for distinct real roots).

## Worked Examples

### Example 1: Solving a Second Order Differential Equation

**Problem:** Solve $\dfrac{d^2y}{dx^2} - 5\dfrac{dy}{dx} + 6y = 0$ given $y(0) = 1$ and $y'(0) = 5$.
**Solution:** Auxiliary equation: $m^2 - 5m + 6 = 0$, giving $m = 2$ or $m = 3$ (distinct real
roots). $$y = Ae^{2x} + Be^{3x}$$ $y(0) = A + B = 1$. $y' = 2Ae^{2x} + 3Be^{3x}$, so
$y'(0) = 2A + 3B = 5$. Solving: $B = 3$, $A = -2$. Solution: $y = 3e^{3x} - 2e^{2x}$.

### Example 2: Polar Curve Area

**Problem:** Find the area enclosed by one loop of the curve $r = a\sin 2\theta$. **Solution:** One
loop is traced as $\theta$ goes from $0$ to $\pi/2$ (where $r$ returns to zero).
$$A = \frac{1}{2}\int_0^{\pi/2} a^2\sin^2 2\theta\,d\theta = \frac{a^2}{2}\int_0^{\pi/2}\frac{1 - \cos 4\theta}{2}\,d\theta = \frac{a^2}{4}\left[\theta - \frac{\sin 4\theta}{4}\right]_0^{\pi/2} = \frac{a^2\pi}{8}$$

## Common Pitfalls

- **Confusing the principal argument:** For points in the third and fourth quadrants, the argument
  must be given as a negative angle (e.g., $-3\pi/4$, not $5\pi/4$).
- **Matrix multiplication order:** $AB \neq BA$. When solving $A\mathbf{x} = \mathbf{b}$, compute
  $A^{-1}\mathbf{b}$, not $\mathbf{b}A^{-1}$.
- **Wrong polar area formula:** Use $\frac{1}{2}\int r^2\,d\theta$, not $\int r\,d\theta$. The extra
  $r/2$ factor is frequently missed.

## Summary

Further Pure 1 covers complex numbers (modulus-argument form, de Moivre, roots of unity, loci),
matrices (operations, determinants, transformations, invariants), further calculus (integration by
parts, standard integrals, first and second order ODEs), polar coordinates, hyperbolic functions,
and proof techniques (induction, contradiction, counterexamples). Mastery of these topics is
essential before progressing to Further Pure 2.

