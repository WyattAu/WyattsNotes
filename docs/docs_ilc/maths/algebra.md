---
title: Algebra
date: 2026-04-14
tags:
  - Mathematics
  - ILC
categories:
  - Mathematics
slug: algebra
---

# Algebra

Algebra is a fundamental area of the Leaving Certificate Mathematics syllabus, appearing in both
Paper 1 and Paper 2. This topic covers algebraic expressions, equations, inequalities, complex
numbers, matrices, and sequences.

## Algebraic Expressions

### Expanding and Factorising

**Expansion** is the process of removing brackets by multiplying each term inside by the expression
outside.

**Example (OL/HL):** Expand $(2x + 3)(x - 5)$.

$$
(2x + 3)(x - 5) = 2x^2 - 10x + 3x - 15 = 2x^2 - 7x - 15
$$

**Factorisation** is the reverse process. Common techniques include:

1. **Common factor:** $6x^2 + 9x = 3x(2x + 3)$
2. **Quadratic trinomial:** $x^2 + 5x + 6 = (x + 2)(x + 3)$
3. **Difference of two squares:** $x^2 - 16 = (x - 4)(x + 4)$

### Difference of Two Squares (HL)

The identity $a^2 - b^2 = (a - b)(a + b)$ extends to factorisation:

$$
4x^2 - 25y^2 = (2x - 5y)(2x + 5y)
$$

### Perfect Square Trinomials (HL)

$$
a^2 + 2ab + b^2 = (a + b)^2
$$

$$
a^2 - 2ab + b^2 = (a - b)^2
$$

**Example (HL):** Factorise $9x^2 - 30x + 25$.

$$
9x^2 - 30x + 25 = (3x - 5)^2
$$

## Solving Equations

### Linear Equations (OL/HL)

Solve for $x$: $3(2x - 1) = 4(x + 3) - 5$.

$$
6x - 3 = 4x + 12 - 5
$$

$$
6x - 4x = 7 + 3
$$

$$
2x = 10 \implies x = 5
$$

### Quadratic Equations (OL/HL)

Quadratic equations take the form $ax^2 + bx + c = 0$. Methods of solution include:

#### Method 1: Factorisation

$$
x^2 - 5x + 6 = 0 \implies (x - 2)(x - 3) = 0 \implies x = 2 \text{ or } x = 3
$$

#### Method 2: Quadratic Formula (OL/HL)

For $ax^2 + bx + c = 0$:

$$
x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}
$$

**Example:** Solve $2x^2 + 3x - 5 = 0$.

Here $a = 2$, $b = 3$, $c = -5$.

$$
x = \frac{-3 \pm \sqrt{9 + 40}}{4} = \frac{-3 \pm 7}{4}
$$

$$
x = 1 \text{ or } x = -\frac{5}{2}
$$

#### Method 3: Completing the Square (HL)

Write $ax^2 + bx + c$ in the form $a(x - h)^2 + k$.

**Example:** Express $x^2 + 6x + 2$ in completed square form.

$$
x^2 + 6x + 2 = (x^2 + 6x + 9) - 9 + 2 = (x + 3)^2 - 7
$$

### The Discriminant (HL)

The discriminant $\Delta = b^2 - 4ac$ determines the nature of the roots:

| Condition    | Roots                             |
| ------------ | --------------------------------- |
| $\Delta > 0$ | Two distinct real roots           |
| $\Delta = 0$ | One repeated real root            |
| $\Delta < 0$ | No real roots (two complex roots) |

**Example (HL):** Find the range of $k$ for which $x^2 + 4x + k = 0$ has real roots.

$$
\Delta = 16 - 4k \geq 0 \implies k \leq 4
$$

### Simultaneous Equations (OL/HL)

**Example (OL):** Solve:

$$
\begin{cases}
2x + y = 7 \\
x - y = 2
\end{cases}
$$

Adding: $3x = 9 \implies x = 3$. Substituting: $y = 1$.

**Example (HL):** Solve:

$$
\begin{cases}
x + y = 5 \\
x^2 + y^2 = 13
\end{cases}
$$

From the first equation $y = 5 - x$. Substituting:

$$
x^2 + (5 - x)^2 = 13
$$

$$
x^2 + 25 - 10x + x^2 = 13
$$

$$
2x^2 - 10x + 12 = 0 \implies x^2 - 5x + 6 = 0
$$

$$
(x - 2)(x - 3) = 0 \implies x = 2 \text{ or } x = 3
$$

Solutions: $(2, 3)$ and $(3, 2)$.

## Inequalities (OL/HL)

### Linear Inequalities

When multiplying or dividing both sides by a negative number, reverse the inequality sign.

**Example:** Solve $3 - 2x > 7$.

$$
-2x > 4 \implies x < -2
$$

### Quadratic Inequalities (HL)

**Example:** Solve $x^2 - 3x - 4 < 0$.

Factorise: $(x - 4)(x + 1) < 0$.

The product is negative when one factor is positive and the other negative. Since the parabola opens
upward:

$$
-1 < x < 4
$$

:::warning
Always check the inequality sign carefully. For $x^2 - 3x - 4 \gt 0$, the solution would
be $x \lt -1$ or $x \gt 4$ (outside the roots).
:::

## Complex Numbers (HL)

### Definition

A complex number is of the form $z = a + bi$ where $a, b \in \mathbb{R}$ and $i^2 = -1$.

- $a$ is the **real part** ($\operatorname{Re}(z)$)
- $b$ is the **imaginary part** ($\operatorname{Im}(z)$)

### Operations

**Addition:** $(a + bi) + (c + di) = (a + c) + (b + d)i$

**Multiplication:** $(a + bi)(c + di) = (ac - bd) + (ad + bc)i$

**Complex conjugate:** $\bar{z} = a - bi$

$$
z \cdot \bar{z} = a^2 + b^2
$$

### Modulus and Argument

The **modulus** (or absolute value) of $z = a + bi$:

$$
|z| = \sqrt{a^2 + b^2}
$$

The **argument** $\arg(z)$ is the angle $\theta$ measured from the positive real axis:

$$
\theta = \arctan\left(\frac{b}{a}\right), \quad a > 0
$$

### Polar Form (HL)

$$
z = r(\cos\theta + i\sin\theta) = re^{i\theta}
$$

where $r = |z|$ and $\theta = \arg(z)$.

### De Moivre's Theorem (HL)

For $z = r(\cos\theta + i\sin\theta)$ and $n \in \mathbb{Z}$:

$$
z^n = r^n(\cos n\theta + i\sin n\theta)
$$

**Example:** Express $(\sqrt{3} + i)^4$ in the form $a + bi$.

First find modulus and argument: $r = 2$, $\theta = \frac{\pi}{6}$.

$$
(\sqrt{3} + i)^4 = 2^4\left(\cos\frac{4\pi}{6} + i\sin\frac{4\pi}{6}\right) = 16\left(\cos\frac{2\pi}{3} + i\sin\frac{2\pi}{3}\right) = 16\left(-\frac{1}{2} + i\frac{\sqrt{3}}{2}\right) = -8 + 8\sqrt{3}\,i
$$

## Roots of Unity (HL)

The $n$th roots of unity are the solutions to $z^n = 1$.

$$
z_k = \cos\frac{2k\pi}{n} + i\sin\frac{2k\pi}{n}, \quad k = 0, 1, 2, \ldots, n-1
$$

These lie on the unit circle in the complex plane, equally spaced at angles of $\frac{2\pi}{n}$.

**Example:** Find the cube roots of unity.

For $z^3 = 1$: $z_k = \cos\frac{2k\pi}{3} + i\sin\frac{2k\pi}{3}$, $k = 0, 1, 2$.

$$
z_0 = 1, \quad z_1 = -\frac{1}{2} + i\frac{\sqrt{3}}{2}, \quad z_2 = -\frac{1}{2} - i\frac{\sqrt{3}}{2}
$$

Note: $1 + z_1 + z_2 = 0$.

## Matrices (HL)

### Definitions

A matrix $A$ of order $m \times n$ has $m$ rows and $n$ columns.

### Operations

**Addition:** Add corresponding elements (matrices must be the same order).

**Scalar multiplication:** Multiply every element by the scalar.

**Matrix multiplication:** If $A$ is $m \times p$ and $B$ is $p \times n$, then $AB$ is
$m \times n$.

The $(i, j)$ entry of $AB$ is:

$$
(AB)_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}
$$

### Determinant and Inverse of a $2 \times 2$ Matrix

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$
\det(A) = ad - bc
$$

If $\det(A) \neq 0$:

$$
A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

### Determinant of a $3 \times 3$ Matrix (HL)

For $A = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & k \end{pmatrix}$:

$$
\det(A) = a(ek - fh) - b(dk - fg) + c(dh - eg)
$$

### Solving Systems Using Matrices (HL)

For $AX = B$ where $A$ is invertible:

$$
X = A^{-1}B
$$

**Example:** Solve:

$$
\begin{cases}
2x + y = 5 \\
x - y = 1
\end{cases}
$$

$$
\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}
$$

$$
\det(A) = -2 - 1 = -3
$$

$$
A^{-1} = \frac{1}{-3}\begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix}
$$

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix}\begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

## Proof by Induction (HL)

### Method

1. **Base case:** Show the statement holds for $n = 1$ (or the smallest relevant value).
2. **Inductive hypothesis:** Assume the statement holds for $n = k$.
3. **Inductive step:** Show that if it holds for $n = k$, it also holds for $n = k + 1$.
4. **Conclusion:** By the principle of mathematical induction, the statement holds for all
   $n \geq 1$.

**Example:** Prove by induction that $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$.

**Base case** ($n = 1$): LHS $= 1$, RHS $= \frac{1 \cdot 2 \cdot 3}{6} = 1$. True.

**Inductive hypothesis:** Assume $\sum_{r=1}^{k} r^2 = \frac{k(k+1)(2k+1)}{6}$.

**Inductive step:**

$$
\sum_{r=1}^{k+1} r^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2
$$

$$
= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6}
$$

$$
= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}
$$

$$
= \frac{(k+1)[2k^2 + k + 6k + 6]}{6}
$$

$$
= \frac{(k+1)(2k^2 + 7k + 6)}{6}
$$

$$
= \frac{(k+1)(k+2)(2k+3)}{6}
$$

$$
= \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}
$$

This matches the formula with $n = k + 1$. By induction, the result holds for all $n \geq 1$.

## Long Division of Polynomials (HL)

To divide $P(x)$ by $(x - a)$, use either long division or synthetic division. The result gives:

$$
P(x) = (x - a)Q(x) + R
$$

where $Q(x)$ is the quotient and $R$ is the remainder. By the **Remainder Theorem**, $R = P(a)$.

**Factor Theorem:** $(x - a)$ is a factor of $P(x)$ if and only if $P(a) = 0$.

**Example:** Factorise $x^3 - 3x + 2$.

Try $P(1) = 1 - 3 + 2 = 0$, so $(x - 1)$ is a factor.

Dividing: $x^3 - 3x + 2 = (x - 1)(x^2 + x - 2) = (x - 1)(x + 2)(x - 1) = (x - 1)^2(x + 2)$.

## Common Pitfalls

1. **Sign errors** in factorisation and expansion -- always double-check.
2. **Forgetting to reverse the inequality** when multiplying/dividing by a negative number.
3. **Confusing the discriminant conditions** for real vs. complex roots.
4. **De Moivre's theorem** requires the argument to be in radians.
5. **Matrix multiplication is not commutative:** $AB \neq BA$ in general.
6. **Induction base case** -- always state and verify it explicitly.

## Practice Questions

### Ordinary Level

1. Expand $(3x - 2)(2x + 5)$.
2. Factorise $x^2 - 7x + 12$.
3. Solve $4x - 7 = 2x + 9$.
4. Solve $x^2 - 5x + 6 = 0$ by factorisation.
5. Solve $2x^2 + x - 3 = 0$ using the quadratic formula.

### Higher Level

1. Prove by induction that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$.
2. Express $z = 1 - i\sqrt{3}$ in polar form and hence find $z^5$.
3. Find the modulus and argument of $\frac{1 + i}{1 - i}$.
4. Find the values of $k$ for which $kx^2 + 4x + k = 0$ has equal roots.
5. Given $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and
   $B = \begin{pmatrix} 0 & -1 \\ 2 & 3 \end{pmatrix}$, find $AB - BA$.
6. Find all complex numbers $z$ such that $z^4 = 16$.
7. Solve the inequality $x^2 - 2x - 15 \gt 0$.
