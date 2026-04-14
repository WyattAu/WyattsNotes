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

This is the Pythagorean theorem applied to the horizontal and vertical displacements.

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

A vertical line has undefined slope. A horizontal line has slope $0$.

### Equation of a Line (OL/HL)

**Point-slope form:**

$$
y - y_1 = m(x - x_1)
$$

**General form:**

$$
ax + by + c = 0
$$

**Slope-intercept form:**

$$
y = mx + c
$$

where $m$ is the slope and $c$ is the $y$-intercept.

### Perpendicular and Parallel Lines (OL/HL)

- Parallel lines have equal slopes: $m_1 = m_2$.
- Perpendicular lines: $m_1 \cdot m_2 = -1$.

**Proof of the perpendicular condition.** If two lines with slopes $m_1$ and $m_2$ are
perpendicular, then the angle between them is $90°$. Using the tangent addition formula:
$\tan(\alpha + \beta) = \frac{m_1 + m_2}{1 - m_1 m_2}$. Setting $\alpha + \beta = 90°$: $\tan 90°$
is undefined, so $1 - m_1 m_2 = 0$, giving $m_1 m_2 = -1$.

**Example (OL):** Find the equation of the line through $(1, 3)$ perpendicular to $y = 2x + 1$.

The slope of the given line is $m_1 = 2$, so $m_2 = -\frac{1}{2}$.

$$
y - 3 = -\frac{1}{2}(x - 1) \implies y = -\frac{1}{2}x + \frac{7}{2}
$$

**Example (HL):** Find the equation of the perpendicular bisector of the segment joining $A(2, 5)$
and $B(6, 1)$.

Midpoint: $M = \left(\frac{2+6}{2}, \frac{5+1}{2}\right) = (4, 3)$.

Slope of $AB$: $m = \frac{1 - 5}{6 - 2} = -1$.

Slope of perpendicular bisector: $m_{\perp} = 1$.

Equation: $y - 3 = 1(x - 4) \implies y = x - 1$.

### Distance from a Point to a Line (HL)

The perpendicular distance from $(x_0, y_0)$ to $ax + by + c = 0$:

$$
d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}
$$

**Example (HL):** Find the distance from $(3, 2)$ to $2x + y - 5 = 0$.

$$
d = \frac{|6 + 2 - 5|}{\sqrt{4 + 1}} = \frac{3}{\sqrt{5}} = \frac{3\sqrt{5}}{5}
$$

**Proof sketch.** Let $P(x_0, y_0)$ be the point and $ax + by + c = 0$ the line. The closest point
$Q$ on the line to $P$ lies along the perpendicular. The line through $P$ perpendicular to
$ax + by + c = 0$ has equation $b(x - x_0) - a(y - y_0) = 0$. Solving the two equations
simultaneously gives $Q$, and the distance $PQ$ simplifies to the formula above.

### Area of a Triangle (HL)

The area of a triangle with vertices $(x_1, y_1)$, $(x_2, y_2)$, $(x_3, y_3)$:

$$
A = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|
$$

This is derived from the shoelace formula (also known as Gauss's area formula).

**Example (HL):** Find the area of the triangle with vertices $(1, 2)$, $(4, 6)$, $(3, -1)$.

$$
A = \frac{1}{2}|1(6 - (-1)) + 4((-1) - 2) + 3(2 - 6)| = \frac{1}{2}|7 - 12 - 12| = \frac{1}{2}|-17| = 8.5
$$

### Intersection of Two Lines (OL/HL)

Two lines $a_1 x + b_1 y + c_1 = 0$ and $a_2 x + b_2 y + c_2 = 0$:

- If $\frac{a_1}{a_2} \neq \frac{b_1}{b_2}$: lines intersect at a unique point.
- If $\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2}$: lines are parallel (no intersection).
- If $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$: lines are coincident (infinitely many
  intersections).

## The Circle

### Equation of a Circle (OL/HL)

**Centre-radius form:** $(x - h)^2 + (y - k)^2 = r^2$ with centre $(h, k)$ and radius $r$.

**General form:** $x^2 + y^2 + 2gx + 2fy + c = 0$ with centre $(-g, -f)$ and radius
$\sqrt{g^2 + f^2 - c}$.

The circle exists only if $g^2 + f^2 - c > 0$.

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

**Proof.** The radius to $(x_1, y_1)$ has slope $y_1/x_1$. The tangent is perpendicular, so its
slope is $-x_1/y_1$. Using point-slope form: $y - y_1 = -\frac{x_1}{y_1}(x - x_1)$, which simplifies
to $x_1 x + y_1 y = x_1^2 + y_1^2 = r^2$.

**Example (HL):** Find the equation of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

$$
3x + 4y = 25
$$

**Example (HL):** Show that the line $3x - 4y + 25 = 0$ is a tangent to $x^2 + y^2 = 25$.

Substitute $y = \frac{3x + 25}{4}$ into $x^2 + y^2 = 25$:

$$
x^2 + \left(\frac{3x + 25}{4}\right)^2 = 25
$$

$$
16x^2 + 9x^2 + 150x + 625 = 400
$$

$$
25x^2 + 150x + 225 = 0
$$

$$
x^2 + 6x + 9 = 0 \implies (x + 3)^2 = 0
$$

The discriminant is $\Delta = 0$, confirming a tangent. The point of tangency is $x = -3$,
$y = \frac{-9 + 25}{4} = 4$.

### Intersection of Line and Circle

Substitute the line into the circle equation. The discriminant of the resulting quadratic tells you:

- $\Delta > 0$: two intersection points
- $\Delta = 0$: tangent (one intersection point)
- $\Delta < 0$: no intersection

### Circle Through Three Points (HL)

**Example (HL):** Find the equation of the circle through $(0, 0)$, $(4, 0)$, and $(0, 4)$.

Let the circle be $x^2 + y^2 + 2gx + 2fy + c = 0$.

Substituting $(0,0)$: $c = 0$.

Substituting $(4,0)$: $16 + 8g = 0 \implies g = -2$.

Substituting $(0,4)$: $16 + 8f = 0 \implies f = -2$.

The circle is $x^2 + y^2 - 4x - 4y = 0$, with centre $(2, 2)$ and radius $\sqrt{4+4} = 2\sqrt{2}$.

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

**Proof of the second identity.** Divide $\sin^2\theta + \cos^2\theta = 1$ by $\cos^2\theta$:
$\tan^2\theta + 1 = \sec^2\theta$.

**Example (HL):** Given $\sin\theta = \frac{3}{5}$ and $\theta$ is in the second quadrant, find
$\cos\theta$ and $\tan\theta$.

$$
\cos^2\theta = 1 - \sin^2\theta = 1 - \frac{9}{25} = \frac{16}{25}
$$

Since $\theta$ is in the second quadrant, $\cos\theta < 0$, so $\cos\theta = -\frac{4}{5}$.

$$
\tan\theta = \frac{\sin\theta}{\cos\theta} = \frac{3/5}{-4/5} = -\frac{3}{4}
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

**Example (HL):** Find the exact value of $\sin 75°$.

$$
\sin 75° = \sin(45° + 30°) = \sin 45°\cos 30° + \cos 45°\sin 30°
$$

$$
= \frac{\sqrt{2}}{2} \cdot \frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}
$$

**Example (HL):** Find the exact value of $\tan 15°$.

$$
\tan 15° = \tan(45° - 30°) = \frac{1 - \frac{1}{\sqrt{3}}}{1 + \frac{1}{\sqrt{3}}} = \frac{\sqrt{3} - 1}{\sqrt{3} + 1} = \frac{(\sqrt{3} - 1)^2}{3 - 1} = \frac{4 - 2\sqrt{3}}{2} = 2 - \sqrt{3}
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

**Proof of $\cos 2A = 2\cos^2 A - 1$.** Using the compound angle formula:

$$
\cos(A + A) = \cos A \cos A - \sin A \sin A = \cos^2 A - \sin^2 A
$$

Since $\sin^2 A = 1 - \cos^2 A$:

$$
\cos 2A = \cos^2 A - (1 - \cos^2 A) = 2\cos^2 A - 1
$$

### Triple Angle Formulae (HL)

**Proof that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$:**

$$
\sin 3\theta = \sin(2\theta + \theta) = \sin 2\theta \cos\theta + \cos 2\theta \sin\theta
$$

$$
= 2\sin\theta\cos^2\theta + (1 - 2\sin^2\theta)\sin\theta
$$

$$
= 2\sin\theta(1 - \sin^2\theta) + \sin\theta - 2\sin^3\theta
$$

$$
= 2\sin\theta - 2\sin^3\theta + \sin\theta - 2\sin^3\theta = 3\sin\theta - 4\sin^3\theta
$$

**Similarly, $\cos 3\theta = 4\cos^3\theta - 3\cos\theta$:**

$$
\cos 3\theta = \cos(2\theta + \theta) = \cos 2\theta \cos\theta - \sin 2\theta \sin\theta
$$

$$
= (2\cos^2\theta - 1)\cos\theta - 2\sin^2\theta\cos\theta
$$

$$
= 2\cos^3\theta - \cos\theta - 2(1 - \cos^2\theta)\cos\theta
$$

$$
= 2\cos^3\theta - \cos\theta - 2\cos\theta + 2\cos^3\theta = 4\cos^3\theta - 3\cos\theta
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

**Example (HL):** Evaluate $\sin 75° - \sin 15°$.

$$
\sin 75° - \sin 15° = 2\cos\frac{90°}{2}\sin\frac{60°}{2} = 2\cos 45°\sin 30° = 2 \cdot \frac{\sqrt{2}}{2} \cdot \frac{1}{2} = \frac{\sqrt{2}}{2}
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

**Example (HL):** Solve $\sin 2\theta = \sin \theta$ for $0 \le \theta \lt 2\pi$.

$$
2\sin\theta\cos\theta = \sin\theta
$$

$$
\sin\theta(2\cos\theta - 1) = 0
$$

$\sin\theta = 0$: $\theta = 0, \pi$.

$2\cos\theta - 1 = 0$: $\cos\theta = \frac{1}{2}$, so $\theta = \frac{\pi}{3}, \frac{5\pi}{3}$.

Solutions: $0, \frac{\pi}{3}, \pi, \frac{5\pi}{3}$.

:::warning
When dividing by $\sin\theta$ or $\cos\theta$ to simplify, always check whether those
functions can be zero. If they can, you lose solutions. Instead, factorise.
:::

**Example (HL):** Solve $2\sin^2 x + 3\cos x - 3 = 0$ for $0 \le x \le 2\pi$.

Replace $\sin^2 x = 1 - \cos^2 x$:

$$
2(1 - \cos^2 x) + 3\cos x - 3 = 0
$$

$$
-2\cos^2 x + 3\cos x - 1 = 0
$$

$$
2\cos^2 x - 3\cos x + 1 = 0
$$

$$
(2\cos x - 1)(\cos x - 1) = 0
$$

$\cos x = \frac{1}{2}$: $x = \frac{\pi}{3}, \frac{5\pi}{3}$.

$\cos x = 1$: $x = 0$.

### The Sine Rule (OL/HL)

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C}
$$

Use when you know: two sides and a non-included angle, or two angles and one side.

**Ambiguous case (HL):** When given two sides and a non-included angle, there may be two solutions
or none. If $a > b$ and $A$ is acute, there is exactly one solution. If $a < b$ and $A$ is acute,
there may be two solutions (the "ambiguous case").

**Example (HL) -- Ambiguous case:** In $\triangle ABC$, $a = 8$, $b = 10$, $A = 40°$. Find all
possible values of $B$.

By the sine rule:
$\sin B = \frac{b \sin A}{a} = \frac{10 \sin 40°}{8} = \frac{10 \times 0.6428}{8} = 0.8035$.

$B = \arcsin(0.8035) \approx 53.5°$ or $B \approx 180° - 53.5° = 126.5°$.

Check: $A + B = 40° + 126.5° = 166.5° < 180°$, so both solutions are valid.

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

**Proof.** Drop altitude $h$ from $B$ to side $b$. Then $h = a\sin C$, so
$A = \frac{1}{2} \times b \times h = \frac{1}{2}ab\sin C$.

**Example (HL):** In $\triangle ABC$, $a = 8$, $b = 6$, and $C = 50°$. Find the area.

$$
A = \frac{1}{2}(8)(6)\sin 50° = 24 \times 0.766 = 18.39 \text{ square units}
$$

### R-Addition Formula (HL)

An expression of the form $a\sin\theta + b\cos\theta$ can be written as $R\sin(\theta + \alpha)$
where $R = \sqrt{a^2 + b^2}$ and $\alpha = \arctan\frac{b}{a}$.

**Example (HL):** Express $3\sin\theta - 4\cos\theta$ in the form $R\sin(\theta + \alpha)$.

$$
R = \sqrt{9 + 16} = 5
$$

$$
3\sin\theta - 4\cos\theta = 5\sin(\theta + \alpha)
$$

where $\tan\alpha = \frac{-4}{3}$, so $\alpha = \arctan(-4/3) \approx -53.1°$.

**Application -- finding maximum value:** The maximum of $R\sin(\theta + \alpha)$ is $R$ and the
minimum is $-R$. So the maximum of $3\sin\theta - 4\cos\theta$ is $5$ and the minimum is $-5$.

**Example (HL):** Find the maximum and minimum of $5\sin\theta + 12\cos\theta$.

$$
R = \sqrt{25 + 144} = 13
$$

So $5\sin\theta + 12\cos\theta = 13\sin(\theta + \alpha)$ where $\tan\alpha = 12/5$.

Maximum $= 13$, minimum $= -13$.

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

**Example (HL):** Given $\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 3\mathbf{k}$ and
$\mathbf{b} = \mathbf{i} + 2\mathbf{j} - \mathbf{k}$, find $\mathbf{a} \times \mathbf{b}$ and the
angle between them.

$$
\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 2 & -1 & 3 \\ 1 & 2 & -1 \end{vmatrix} = \mathbf{i}(1 - 6) - \mathbf{j}(-2 - 3) + \mathbf{k}(4 + 1) = -5\mathbf{i} + 5\mathbf{j} + 5\mathbf{k}
$$

$|\mathbf{a}| = \sqrt{4 + 1 + 9} = \sqrt{14}$, $|\mathbf{b}| = \sqrt{1 + 4 + 1} = \sqrt{6}$.

$\mathbf{a} \cdot \mathbf{b} = 2 - 2 - 3 = -3$.

$\cos\theta = \frac{-3}{\sqrt{14}\sqrt{6}} = \frac{-3}{2\sqrt{21}}$.

### Scalar Triple Product (HL)

The scalar triple product $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$ gives the volume of the
parallelepiped spanned by $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

$$
\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}
$$

If the scalar triple product is zero, the three vectors are coplanar.

**Example (HL):** Determine whether the vectors
$\mathbf{a} = \mathbf{i} + 2\mathbf{j} - \mathbf{k}$,
$\mathbf{b} = 3\mathbf{i} - \mathbf{j} + 2\mathbf{k}$,
$\mathbf{c} = 2\mathbf{i} + 3\mathbf{j} + \mathbf{k}$ are coplanar.

$$
\begin{vmatrix} 1 & 2 & -1 \\ 3 & -1 & 2 \\ 2 & 3 & 1 \end{vmatrix} = 1(-1 - 6) - 2(3 - 4) + (-1)(9 - (-2)) = -7 + 2 - 11 = -16
$$

Since the scalar triple product is $-16 \neq 0$, the vectors are not coplanar.

### Area of a Triangle Using Vectors (HL)

The area of triangle $\triangle ABC$ with position vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$:

$$
\text{Area} = \frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}|
$$

where $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ and
$\overrightarrow{AC} = \mathbf{c} - \mathbf{a}$.

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

### Theorem: Angle at the Centre

The angle at the centre of a circle is twice the angle at the circumference subtended by the same
arc.

**Proof.** Let $O$ be the centre and $A, B$ points on the circumference. Join $OA$ and $OB$. If $C$
is on the circumference on the same side of $AB$ as $O$, then $\triangle OAC$ is isosceles with
$OA = OC$, so $\angle OAC = \angle OCA$. Similarly $\angle OBC = \angle OCB$. The exterior angle of
$\triangle OAC$ at $O$ equals $\angle AOC = 2\angle OAC$. The full angle
$AOB = 2\angle
OAC + 2\angle OCB = 2\angle ACB$.

### Theorem: Angle in a Semicircle

The angle in a semicircle is a right angle.

**Proof.** If $AB$ is the diameter and $C$ is on the circumference, then the angle at the centre
$AOB = 180°$. By the angle-at-centre theorem, the angle at the circumference $ACB = 90°$.

### Theorem: Tangent-Radius Property

The tangent to a circle at a point is perpendicular to the radius at that point.

**Proof (by contradiction).** Suppose the tangent at $P$ is not perpendicular to the radius $OP$.
Then the perpendicular from $O$ to the tangent meets it at some point $Q \neq P$. Since $OQ \lt OP$
(by the shortest distance property), $Q$ is closer to $O$ than $P$. But $P$ lies on the circle and
$Q$ is outside the perpendicular from the centre, so $Q$ must be outside the circle. If $Q$ is
outside the circle, the line through $P$ and $Q$ (the tangent) must cross the circle at $P$ and some
other point, contradicting that it is a tangent. Hence the tangent is perpendicular to the radius.

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
6. **Ambiguous case of the sine rule** -- always check whether a second solution exists.
7. **Completing the square for circles** -- remember to add the constants to both sides.
8. **Dividing by trig functions** in equations -- you may lose solutions. Factorise instead.
9. **R-addition formula** -- be careful with the sign of $\alpha$. If $a$ is negative, the reference
   angle calculation needs adjustment.
10. **Circle general form** -- the centre is $(-g, -f)$, not $(g, f)$. The negative signs are a
    common source of error.

## Practice Questions

### Ordinary Level

1. Find the equation of the line through $(2, -1)$ and $(4, 5)$.
2. Find the centre and radius of $x^2 + y^2 + 6x - 2y + 6 = 0$.
3. Solve $2\sin\theta = 1$ for $0 \leq \theta \leq 360°$.
4. In $\triangle ABC$, $a = 10$, $b = 7$, $C = 45°$. Find $c$ using the cosine rule.
5. Prove that $\sin^2\theta + \cos^2\theta = 1$.
6. Find the area of $\triangle ABC$ where $a = 8$, $b = 5$, and $C = 60°$.
7. Find the midpoint and length of the segment joining $(-2, 3)$ and $(4, -1)$.

### Higher Level

1. Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$ using compound angle formulae.
2. Find the shortest distance from $(1, -2)$ to the line $3x - 4y + 5 = 0$.
3. Solve $\cos 2\theta = \cos\theta$ for $0 \leq \theta \leq 2\pi$.
4. Find the area of the triangle with vertices $(1, 2)$, $(4, 6)$, $(3, -1)$.
5. Given $\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 3\mathbf{k}$ and
   $\mathbf{b} = \mathbf{i} + 2\mathbf{j} - \mathbf{k}$, find $\mathbf{a} \times \mathbf{b}$ and the
   angle between $\mathbf{a}$ and $\mathbf{b}$.
6. Express $\cos 3\theta$ in terms of $\cos\theta$.
7. Prove that $\sin(A+B)\sin(A-B) = \sin^2 A - \sin^2 B$.
8. Find the equation of the tangent to the circle $x^2 + y^2 - 4x + 6y + 9 = 0$ at the point
   $(1, -1)$.
9. Two ships leave a port. Ship A sails on a bearing of $030°$ at 20 km/h. Ship B sails on a bearing
   of $110°$ at 15 km/h. Find the distance between them after 3 hours.
10. Prove that the angle at the centre of a circle is twice the angle at the circumference.
11. Express $4\sin\theta + 3\cos\theta$ in the form $R\sin(\theta + \alpha)$ and hence find its
    maximum value.
12. Find the area of the triangle with vertices at the points with position vectors
    $\mathbf{i} + 2\mathbf{j} + 3\mathbf{k}$, $2\mathbf{i} - \mathbf{j} + \mathbf{k}$, and
    $3\mathbf{i} + \mathbf{j} - 2\mathbf{k}$.
13. Solve $2\cos^2 x + \sin x = 2$ for $0 \le x \le 2\pi$.
14. Find the equation of the circle passing through $(1, 0)$, $(0, 1)$, and $(2, 3)$.
15. Determine whether the vectors $\mathbf{i} + \mathbf{j} + \mathbf{k}$,
    $2\mathbf{i} - \mathbf{j} + \mathbf{k}$, and $3\mathbf{i} + 4\mathbf{k}$ are coplanar.
