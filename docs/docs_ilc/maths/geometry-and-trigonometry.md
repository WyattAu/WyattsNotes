---
title: Geometry and Trigonometry
date: 2026-04-14
tags:
  - Mathematics
  - ILC
categories:
  - Mathematics
slug: geometry-and-trigonometry
---

# Geometry and Trigonometry

Geometry and trigonometry form a significant part of the Leaving Certificate syllabus, particularly
Paper 2. This topic covers coordinate geometry, trigonometric functions, identities, and geometric
theorems and proofs.

## Coordinate Geometry

### Distance Formula (OL/HL)

The distance between two points $A(x_1, y_1)$ and $B(x_2, y_2)$:

$$
d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
$$

### Midpoint Formula (OL/HL)

The midpoint $M$ of $AB$:

$$
M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)
$$

### Slope (Gradient) (OL/HL)

The slope of the line through $A(x_1, y_1)$ and $B(x_2, y_2)$:

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

### Equation of a Line (OL/HL)

**Point-slope form:**

$$
y - y_1 = m(x - x_1)
$$

**General form:**

$$
ax + by + c = 0
$$

### Perpendicular and Parallel Lines (OL/HL)

- Parallel lines have equal slopes: $m_1 = m_2$.
- Perpendicular lines: $m_1 \cdot m_2 = -1$.

**Example (OL):** Find the equation of the line through $(1, 3)$ perpendicular to $y = 2x + 1$.

The slope of the given line is $m_1 = 2$, so $m_2 = -\frac{1}{2}$.

$$
y - 3 = -\frac{1}{2}(x - 1) \implies y = -\frac{1}{2}x + \frac{7}{2}
$$

### Distance from a Point to a Line (HL)

The perpendicular distance from $(x_0, y_0)$ to $ax + by + c = 0$:

$$
d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}
$$

**Example (HL):** Find the distance from $(3, 2)$ to $2x + y - 5 = 0$.

$$
d = \frac{|6 + 2 - 5|}{\sqrt{4 + 1}} = \frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}
$$

### Area of a Triangle (HL)

The area of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:

$$
A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|
$$

## The Circle

### Equation of a Circle (OL/HL)

**Centre-radius form:** $(x - h)^2 + (y - k)^2 = r^2$ with centre $(h, k)$ and radius $r$.

**General form:** $x^2 + y^2 + 2gx + 2fy + c = 0$ with centre $(-g, -f)$ and radius
$\sqrt{g^2 + f^2 - c}$.

**Example (OL):** Find the centre and radius of $x^2 + y^2 - 4x + 6y - 3 = 0$.

Completing the square:

$$
(x - 2)^2 - 4 + (y + 3)^2 - 9 - 3 = 0 \implies (x - 2)^2 + (y + 3)^2 = 16
$$

Centre $(2, -3)$, radius $4$.

### Tangent to a Circle (HL)

The tangent at a point $(x_1, y_1)$ on the circle $x^2 + y^2 = r^2$ has equation:

$$
x_1 x + y_1 y = r^2
$$

**Example (HL):** Find the equation of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

$$
3x + 4y = 25
$$

## Trigonometry

### Trigonometric Ratios (OL/HL)

For a right-angled triangle with angle $\theta$:

| Ratio        | Definition                                  |
| ------------ | ------------------------------------------- |
| $\sin\theta$ | $\frac{\text{opposite}}{\text{hypotenuse}}$ |
| $\cos\theta$ | $\frac{\text{adjacent}}{\text{hypotenuse}}$ |
| $\tan\theta$ | $\frac{\text{opposite}}{\text{adjacent}}$   |

### The Unit Circle (OL/HL)

On the unit circle, a point at angle $\theta$ has coordinates $(\cos\theta, \sin\theta)$.

Key values:

| $\theta$     | $0$ | $\frac{\pi}{6}$      | $\frac{\pi}{4}$      | $\frac{\pi}{3}$      | $\frac{\pi}{2}$ |
| ------------ | --- | -------------------- | -------------------- | -------------------- | --------------- |
| $\sin\theta$ | $0$ | $\frac{1}{2}$        | $\frac{\sqrt{2}}{2}$ | $\frac{\sqrt{3}}{2}$ | $1$             |
| $\cos\theta$ | $1$ | $\frac{\sqrt{3}}{2}$ | $\frac{\sqrt{2}}{2}$ | $\frac{1}{2}$        | $0$             |
| $\tan\theta$ | $0$ | $\frac{1}{\sqrt{3}}$ | $1$                  | $\sqrt{3}$           | undefined       |

### Trigonometric Identities (OL/HL)

**Pythagorean identities:**

$$
\sin^2\theta + \cos^2\theta = 1
$$

$$
1 + \tan^2\theta = \sec^2\theta
$$

$$
1 + \cot^2\theta = \csc^2\theta
$$

### Compound Angle Formulae (HL)

$$
\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B
$$

$$
\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B
$$

$$
\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}
$$

### Double Angle Formulae (HL)

$$
\sin 2A = 2\sin A \cos A
$$

$$
\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A
$$

$$
\tan 2A = \frac{2\tan A}{1 - \tan^2 A}
$$

### Factor Formulae (HL)

$$
\sin A + \sin B = 2\sin\frac{A+B}{2}\cos\frac{A-B}{2}
$$

$$
\sin A - \sin B = 2\cos\frac{A+B}{2}\sin\frac{A-B}{2}
$$

$$
\cos A + \cos B = 2\cos\frac{A+B}{2}\cos\frac{A-B}{2}
$$

$$
\cos A - \cos B = -2\sin\frac{A+B}{2}\sin\frac{A-B}{2}
$$

### Solving Trigonometric Equations (OL/HL)

**Example (OL):** Solve $\sin\theta = \frac{1}{2}$ for $0 \leq \theta \leq 2\pi$.

$$
\theta = \frac{\pi}{6}, \frac{5\pi}{6}
$$

**Example (HL):** Solve $2\cos^2\theta + 3\cos\theta - 2 = 0$ for $0 \leq \theta \leq 2\pi$.

Let $u = \cos\theta$: $2u^2 + 3u - 2 = 0 \implies (2u - 1)(u + 2) = 0$.

$u = \frac{1}{2}$ or $u = -2$ (rejected since $|\cos\theta| \leq 1$).

$\cos\theta = \frac{1}{2} \implies \theta = \frac{\pi}{3}, \frac{5\pi}{3}$.

### The Sine Rule (OL/HL)

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

### The Cosine Rule (OL/HL)

$$
a^2 = b^2 + c^2 - 2bc\cos A
$$

**Example (OL):** In triangle $\triangle ABC$, $a = 7$, $b = 5$, $c = 8$. Find angle $A$.

$$
49 = 25 + 64 - 80\cos A \implies \cos A = \frac{40}{80} = \frac{1}{2} \implies A = 60°
$$

### Area of a Triangle Using Trigonometry (OL/HL)

$$
A = \frac{1}{2}ab\sin C
$$

## Vectors (HL)

### Vector Operations

For vectors $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j}$ and
$\mathbf{b} = b_1\mathbf{i} + b_2\mathbf{j}$:

**Scalar (dot) product:**

$$
\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 = |\mathbf{a}||\mathbf{b}|\cos\theta
$$

**Magnitude:**

$$
|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}
$$

### 3D Vectors (HL)

For $\mathbf{a} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$:

$$
\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3
$$

**Cross product (HL):**

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix}
$$

$|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$ gives the area of the
parallelogram spanned by $\mathbf{a}$ and $\mathbf{b}$.

## Geometric Proofs (HL)

### Theorem: Angles in a Triangle

The sum of the interior angles of a triangle is $180°$.

**Proof:** Let $\triangle ABC$ have vertices $A$, $B$, $C$. Draw a line through $A$ parallel to
$BC$. Then $\angle B = \angle BAX$ (alternate angles) and $\angle C = \angle CAY$ (alternate
angles). Since $BAX$ and $CAY$ together with $\angle A$ form a straight line:

$$
\angle A + \angle BAX + \angle CAY = 180°
$$

$$
\angle A + \angle B + \angle C = 180°
$$

### Theorem: Pythagoras' Theorem

In a right-angled triangle, $a^2 + b^2 = c^2$.

**Proof (using similar triangles):** Let $\triangle ABC$ be right-angled at $C$, with altitude $CD$
to the hypotenuse $AB$. Then $\triangle ABC \sim \triangle ACD \sim \triangle CBD$. From
$\triangle ABC \sim \triangle ACD$: $\frac{AC}{AB} = \frac{AD}{AC}$, giving $AC^2 = AB \cdot AD$.
From $\triangle ABC \sim \triangle CBD$: $\frac{BC}{AB} = \frac{BD}{BC}$, giving
$BC^2 = AB \cdot BD$. Adding:

$$
AC^2 + BC^2 = AB \cdot AD + AB \cdot BD = AB(AD + BD) = AB^2
$$

## Common Pitfalls

1. **Degrees vs radians** -- the Leaving Certificate uses radians unless stated otherwise. Always
   check.
2. **CAST diagram** -- remember All, Sine, Tan, Cos for determining the sign of trig functions in
   each quadrant.
3. **Compound angle formulae** -- the signs in $\cos(A + B)$ and $\cos(A - B)$ are swapped compared
   to $\sin$.
4. **Vector cross product** is not commutative:
   $\mathbf{a} \times \mathbf{b} = -\mathbf{b} \times \mathbf{a}$.
5. **Distance from a point to a line** -- the absolute value in the numerator is essential.

## Practice Questions

### Ordinary Level

1. Find the equation of the line through $(2, -1)$ and $(4, 5)$.
2. Find the centre and radius of $x^2 + y^2 + 6x - 2y + 6 = 0$.
3. Solve $2\sin\theta = 1$ for $0 \leq \theta \leq 360°$.
4. In $\triangle ABC$, $a = 10$, $b = 7$, $C = 45°$. Find $c$ using the cosine rule.
5. Prove that $\sin^2\theta + \cos^2\theta = 1$.

### Higher Level

1. Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$ using compound angle formulae.
2. Find the shortest distance from $(1, -2)$ to the line $3x - 4y + 5 = 0$.
3. Solve $\cos 2\theta = \cos\theta$ for $0 \leq \theta \leq 2\pi$.
4. Find the area of the triangle with vertices $(1, 2)$, $(4, 6)$, $(3, -1)$.
5. Given $\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 3\mathbf{k}$ and
   $\mathbf{b} = \mathbf{i} + 2\mathbf{j} - \mathbf{k}$, find $\mathbf{a} \times \mathbf{b}$ and the
   angle between $\mathbf{a}$ and $\mathbf{b}$.
6. Express $\cos 3\theta$ in terms of $\cos\theta$.
