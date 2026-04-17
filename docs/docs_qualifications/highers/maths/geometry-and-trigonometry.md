---
title: Geometry and Trigonometry
date: 2026-04-14
tags:
  - Mathematics
  - Highers
categories:
  - Mathematics
slug: geometry-and-trigonometry
---

# Geometry and Trigonometry

## Higher Trigonometry

### Trigonometric Functions

The three primary trigonometric functions for an angle $\theta$ in a right-angled triangle are:

$$
\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}
$$

On the unit circle (radius 1), the point at angle $\theta$ from the positive $x$-axis has
coordinates $(\cos\theta, \sin\theta)$. This definition extends the trig functions to all real
angles, not just those in $[0, \pi/2]$.

**Key Identity:**

$$
\sin^2\theta + \cos^2\theta = 1
$$

**Proof (geometric).** In the unit circle, a point at angle $\theta$ has coordinates
$(\cos\theta, \sin\theta)$. By the Pythagorean theorem, the distance from the origin is
$\sqrt{\cos^2\theta + \sin^2\theta} = 1$, so $\cos^2\theta + \sin^2\theta = 1$.

Dividing through by $\cos^2\theta$:

$$
1 + \tan^2\theta = \sec^2\theta
$$

Dividing through by $\sin^2\theta$:

$$
1 + \cot^2\theta = \cosec^2\theta
$$

### Radians

Angles can be measured in radians. One full revolution is $2\pi$ radians.

$$
\pi \text{ radians} = 180°
$$

**Why radians?** In calculus, the derivative formula $\frac{d}{dx}[\sin x] = \cos x$ holds only when
$x$ is in radians. If $x$ is in degrees, you get an extra factor of $\frac{\pi}{180}$. Radians arise
naturally because the arc length subtended by angle $\theta$ on a unit circle is exactly $\theta$.

**Arc Length:**

$$
s = r\theta
$$

where $s$ is arc length, $r$ is radius, and $\theta$ is in radians.

**Sector Area:**

$$
A = \frac{1}{2}r^2\theta
$$

**Segment Area:**

$$
A = \frac{1}{2}r^2(\theta - \sin\theta)
$$

**Example:** Find the length of the arc and the area of the sector for a circle of radius 8 cm with
an angle of $\dfrac{5\pi}{6}$ radians.

Arc length: $s = 8 \times \dfrac{5\pi}{6} = \dfrac{20\pi}{3} \approx 20.94 \text{ cm}$.

Sector area:
$A = \dfrac{1}{2} \times 64 \times \dfrac{5\pi}{6} = \dfrac{160\pi}{6} = \dfrac{80\pi}{3} \approx 83.78 \text{ cm}^2$.

**Example:** A sector of a circle of radius 6 cm has an area of $24\pi \text{ cm}^2$. Find the
perimeter of the sector.

$$
\frac{1}{2} \times 36 \times \theta = 24\pi \implies \theta = \frac{48\pi}{36} = \frac{4\pi}{3}
$$

Arc length: $s = 6 \times \frac{4\pi}{3} = 8\pi \text{ cm}$.

Perimeter = $2r + s = 12 + 8\pi \text{ cm}$.

### Trigonometric Identities

**Addition Formulae:**

$$
\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B
$$

$$
\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B
$$

$$
\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}
$$

**Proof of $\cos(A + B)$.** Consider two points on the unit circle: $P$ at angle $A$ with
coordinates $(\cos A, \sin A)$, and $Q$ at angle $-(A+B)$ with coordinates
$(\cos(A+B), -\sin(A+B))$. Rotating the entire figure by angle $A$ maps $P$ to $(1, 0)$ and $Q$ to
the point at angle $-B$, namely $(\cos B, -\sin B)$. Since rotation preserves distances:

$$
[\cos(A+B) - \cos A]^2 + [-\sin(A+B) - \sin A]^2 = (\cos B - 1)^2 + (-\sin B)^2
$$

Expanding and simplifying using $\cos^2 A + \sin^2 A = 1$ yields
$\cos(A+B) = \cos A \cos B - \sin A \sin B$.

**Double Angle Formulae:**

$$
\sin 2A = 2\sin A \cos A
$$

$$
\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A
$$

$$
\tan 2A = \frac{2\tan A}{1 - \tan^2 A}
$$

The three forms of $\cos 2A$ are all useful in different contexts. Use $\cos 2A = 2\cos^2 A - 1$
when everything is in terms of $\cos$, and $\cos 2A = 1 - 2\sin^2 A$ when everything is in terms of
$\sin$.

**Proof that $\sin 2A = 2\sin A \cos A$.**

$$
\sin 2A = \sin(A + A) = \sin A \cos A + \cos A \sin A = 2\sin A \cos A
$$

$\blacksquare$

**Example:** Express $\cos 3\theta$ in terms of $\cos\theta$.

$$
\cos 3\theta = \cos(2\theta + \theta)
$$

$$
= \cos 2\theta \cos\theta - \sin 2\theta \sin\theta
$$

$$
= (2\cos^2\theta - 1)\cos\theta - 2\sin\theta \cos\theta \sin\theta
$$

$$
= 2\cos^3\theta - \cos\theta - 2\sin^2\theta \cos\theta
$$

$$
= 2\cos^3\theta - \cos\theta - 2(1 - \cos^2\theta)\cos\theta
$$

$$
= 2\cos^3\theta - \cos\theta - 2\cos\theta + 2\cos^3\theta
$$

$$
= 4\cos^3\theta - 3\cos\theta
$$

**Example:** Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$.

$$
\sin 3\theta = \sin(2\theta + \theta) = \sin 2\theta \cos\theta + \cos 2\theta \sin\theta
$$

$$
= 2\sin\theta \cos^2\theta + (1 - 2\sin^2\theta)\sin\theta
$$

$$
= 2\sin\theta(1 - \sin^2\theta) + \sin\theta - 2\sin^3\theta
$$

$$
= 2\sin\theta - 2\sin^3\theta + \sin\theta - 2\sin^3\theta
$$

$$
= 3\sin\theta - 4\sin^3\theta
$$

$\blacksquare$

### Solving Trigonometric Equations

When solving trig equations in a given interval, always check for all solutions. The periodicity of
trig functions means there are typically multiple solutions.

:::warning
When dividing by a trig function to simplify, always consider the case where that
function equals zero separately. Dividing by $\cos x$ loses the solutions where $\cos x = 0$.
:::

**Example:** Solve $\sin 2x = \cos x$ for $0 \leq x < 2\pi$.

$$
2\sin x \cos x = \cos x
$$

$$
2\sin x \cos x - \cos x = 0
$$

$$
\cos x(2\sin x - 1) = 0
$$

Either $\cos x = 0$ or $\sin x = \dfrac{1}{2}$.

$\cos x = 0$: $x = \dfrac{\pi}{2}, \dfrac{3\pi}{2}$.

$\sin x = \dfrac{1}{2}$: $x = \dfrac{\pi}{6}, \dfrac{5\pi}{6}$.

Solutions: $x = \dfrac{\pi}{6}, \dfrac{\pi}{2}, \dfrac{5\pi}{6}, \dfrac{3\pi}{2}$.

**Example:** Solve $3\cos^2 x - \cos x - 2 = 0$ for $0 \leq x < 2\pi$.

Let $u = \cos x$. Then $3u^2 - u - 2 = 0$.

$$(3u + 2)(u - 1) = 0$$

$u = -\dfrac{2}{3}$ or $u = 1$.

$\cos x = 1$: $x = 0$.

$\cos x = -\dfrac{2}{3}$: $x = \arccos\left(-\dfrac{2}{3}\right) \approx 2.301$ or
$x = 2\pi - 2.301 \approx 3.982$.

**Example:** Solve $\cos 2x = 1 - 3\sin x$ for $0 \leq x < 2\pi$.

Use $\cos 2x = 1 - 2\sin^2 x$:

$$
1 - 2\sin^2 x = 1 - 3\sin x
$$

$$
2\sin^2 x - 3\sin x = 0
$$

$$
\sin x(2\sin x - 3) = 0
$$

$\sin x = 0$: $x = 0, \pi$.

$2\sin x - 3 = 0$: $\sin x = 1.5$, which has no solution since $|\sin x| \le 1$.

Solutions: $x = 0, \pi$.

**Example:** Solve $2\sin^2 x + 3\cos x - 3 = 0$ for $0 \le x \lt 2\pi$.

Use $\sin^2 x = 1 - \cos^2 x$:

$$
2(1 - \cos^2 x) + 3\cos x - 3 = 0
$$

$$
-2\cos^2 x + 3\cos x - 1 = 0
$$

$$
2\cos^2 x - 3\cos x + 1 = 0
$$

$$(2\cos x - 1)(\cos x - 1) = 0$$

$\cos x = \frac{1}{2}$: $x = \frac{\pi}{3}, \frac{5\pi}{3}$.

$\cos x = 1$: $x = 0$.

Solutions: $x = 0, \frac{\pi}{3}, \frac{5\pi}{3}$.

### The Sine and Cosine Rules

**Sine Rule:**

$$
\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R
$$

where $R$ is the circumradius of the triangle.

Use the sine rule when you know an angle and its opposite side, or two angles and one side.

**Cosine Rule:**

$$
a^2 = b^2 + c^2 - 2bc\cos A
$$

Use the cosine rule when you know all three sides (to find an angle) or two sides and the included
angle (to find the third side).

**Area of a triangle:**

$$
A = \frac{1}{2}ab\sin C
$$

**Example:** In triangle $ABC$, $a = 8$, $b = 5$, $C = 60°$. Find $c$.

$$
c^2 = 64 + 25 - 2(8)(5)\cos 60° = 89 - 40 = 49
$$

$c = 7$.

**Example:** In triangle $ABC$, $a = 7$, $b = 9$, $B = 55°$. Find angle $A$.

By the sine rule:

$$
\frac{\sin A}{7} = \frac{\sin 55°}{9}
$$

$$
\sin A = \frac{7\sin 55°}{9} \approx \frac{7 \times 0.8192}{9} \approx 0.6372
$$

$$
A = \arcsin(0.6372) \approx 39.6° \quad \mathrm{or} \quad A = 180° - 39.6° = 140.4°
$$

Both values are valid since $A + B = 39.6° + 55° = 94.6° < 180°$ and
$A + B = 140.4° + 55° = 195.4° > 180°$. Only $A \approx 39.6°$ is valid (since the sum of angles
must be less than $180°$).

### Wave Function (R-Addition Formula)

An expression of the form $a\sin x + b\cos x$ can be written as $R\sin(x + \alpha)$ or
$R\cos(x - \alpha)$, where:

$$
R = \sqrt{a^2 + b^2}, \quad \alpha = \arctan\left(\frac{b}{a}\right)
$$

**Derivation.** We want
$a\sin x + b\cos x = R\sin(x + \alpha) = R\sin x \cos\alpha + R\cos x \sin\alpha$. Matching
coefficients: $R\cos\alpha = a$ and $R\sin\alpha = b$. Squaring and adding: $R^2 = a^2 + b^2$, so
$R = \sqrt{a^2 + b^2}$. Dividing: $\tan\alpha = b/a$.

**Applications:** The maximum value is $R$ and the minimum is $-R$.

**Example:** Express $3\sin x + 4\cos x$ in the form $R\sin(x + \alpha)$.

$$R = \sqrt{9 + 16} = 5$$

$$
\alpha = \arctan\left(\frac{4}{3}\right)
$$

$$
3\sin x + 4\cos x = 5\sin\left(x + \arctan\left(\frac{4}{3}\right)\right)
$$

Maximum value is $5$, occurring when $\sin(x + \alpha) = 1$.

**Example:** Find the maximum value of $2\sin\theta - \sqrt{3}\cos\theta$ and the smallest positive
value of $\theta$ at which it occurs.

$$
R = \sqrt{4 + 3} = \sqrt{7}
$$

$$
2\sin\theta - \sqrt{3}\cos\theta = \sqrt{7}\sin(\theta + \alpha)
$$

where $\tan\alpha = \dfrac{-\sqrt{3}}{2}$, so
$\alpha = -\arctan\left(\dfrac{\sqrt{3}}{2}\right) \approx -0.714 \text{ rad}$.

Maximum value is $\sqrt{7}$, occurring when $\sin(\theta + \alpha) = 1$, i.e.,
$\theta + \alpha = \dfrac{\pi}{2}$, so
$\theta = \dfrac{\pi}{2} + \arctan\left(\dfrac{\sqrt{3}}{2}\right) \approx 2.285 \text{ rad}$.

**Example:** Express $5\sin\theta - 12\cos\theta$ in the form $R\sin(\theta - \alpha)$ and find its
maximum value.

$$
R = \sqrt{25 + 144} = \sqrt{169} = 13
$$

$$
5\sin\theta - 12\cos\theta = 13\sin(\theta - \alpha)
$$

where $\tan\alpha = \dfrac{12}{5}$, so $\alpha = \arctan\!\left(\dfrac{12}{5}\right)$.

Maximum value is $13$.

### Solving Equations Using the Wave Function

The wave function technique is especially powerful for solving equations of the form
$a\sin x + b\cos x = c$.

**Example:** Solve $3\sin x + 4\cos x = 5$ for $0 \le x \lt 2\pi$.

Since $R = 5$, we have $5\sin(x + \alpha) = 5$, so $\sin(x + \alpha) = 1$.

$$
x + \alpha = \frac{\pi}{2} + 2k\pi
$$

$$
x = \frac{\pi}{2} - \alpha + 2k\pi = \frac{\pi}{2} - \arctan\frac{4}{3} + 2k\pi
$$

For $k = 0$: $x \approx 1.571 - 0.927 = 0.644$ rad. For $k = 1$:
$x \approx 0.644 + 2\pi \approx 6.927$ (outside range).

There is exactly one solution in $[0, 2\pi)$.

Note that if $|c| > R = \sqrt{a^2 + b^2}$, the equation has no real solutions, because the maximum
of $a\sin x + b\cos x$ is $R$.

---

## Coordinate Geometry

### The Straight Line

The equation of a straight line passing through $(x_1, y_1)$ with gradient $m$:

$$
y - y_1 = m(x - x_1)
$$

**Gradient between two points:**

$$
m = \frac{y_2 - y_1}{x_2 - x_1}
$$

**Example:** Find the equation of the perpendicular bisector of the line segment joining $A(2, 5)$
and $B(8, 3)$.

Midpoint: $M = \left(\dfrac{2 + 8}{2}, \dfrac{5 + 3}{2}\right) = (5, 4)$.

Gradient of AB: $m_{AB} = \dfrac{3 - 5}{8 - 2} = -\dfrac{1}{3}$.

Gradient of perpendicular bisector: $m = 3$.

Equation: $y - 4 = 3(x - 5)$, i.e., $y = 3x - 11$.

### Circles

The general equation of a circle with centre $(a, b)$ and radius $r$:

$$
(x - a)^2 + (y - b)^2 = r^2
$$

Expanded form: $x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0$.

Given the expanded form $x^2 + y^2 + 2gx + 2fy + c = 0$, the centre is $(-g, -f)$ and the radius is
$\sqrt{g^2 + f^2 - c}$ (provided $g^2 + f^2 - c > 0$).

**Example:** Find the centre and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.

Complete the square:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

$$(x - 3)^2 + (y + 2)^2 = 25$$

Centre $(3, -2)$, radius $5$.

**Example:** Find the equation of the circle with centre $(2, -3)$ that passes through $(5, 1)$.

$$
r^2 = (5 - 2)^2 + (1 + 3)^2 = 9 + 16 = 25
$$

$$(x - 2)^2 + (y + 3)^2 = 25$$

**Tangent to a Circle:**

The tangent at a point on the circle is perpendicular to the radius at that point.

The equation of the tangent to $x^2 + y^2 = r^2$ at point $(x_1, y_1)$ on the circle is:

$$
x_1 x + y_1 y = r^2
$$

**Example:** Find the equation of the tangent to $(x - 2)^2 + (y + 1)^2 = 25$ at the point $(5, 3)$.

Verify $(5, 3)$ lies on the circle: $(5-2)^2 + (3+1)^2 = 9 + 16 = 25$. Confirmed.

Gradient of radius from $(2, -1)$ to $(5, 3)$: $m_r = \dfrac{3 - (-1)}{5 - 2} = \dfrac{4}{3}$.

Gradient of tangent: $m_t = -\dfrac{3}{4}$.

Equation: $y - 3 = -\dfrac{3}{4}(x - 5)$, i.e., $4y - 12 = -3x + 15$, or $3x + 4y - 27 = 0$.

**Example:** Find the equation of the tangent to $x^2 + y^2 + 4x - 6y + 9 = 0$ at the point
$(-2, 3)$.

Complete the square: $(x + 2)^2 + (y - 3)^2 = 4$. Centre $(-2, 3)$, radius $2$.

Since $(-2, 3)$ is the centre, not a point on the circle, we must check:
$(-2+2)^2 + (3-3)^2 = 0 \ne 4$. The point $(-2, 3)$ is inside the circle, so there is no tangent
from this point to the circle. The point must lie **on** the circle for a tangent to exist.

### Intersection of Line and Circle

Substitute the line equation into the circle equation and solve the resulting quadratic. The
discriminant of the resulting quadratic tells you:

- $\Delta > 0$: two intersection points (secant)
- $\Delta = 0$: one intersection point (tangent)
- $\Delta < 0$: no intersection points

**Example:** Find where the line $y = 2x + 1$ intersects the circle $x^2 + y^2 = 10$.

$$
x^2 + (2x + 1)^2 = 10
$$

$$
x^2 + 4x^2 + 4x + 1 = 10
$$

$$
5x^2 + 4x - 9 = 0
$$

$$(5x + 9)(x - 1) = 0$$

$$x = -\frac{9}{5} \text{ or } x = 1$$

When $x = 1$: $y = 3$. When $x = -\dfrac{9}{5}$: $y = -\dfrac{13}{5}$.

Points of intersection: $(1, 3)$ and $\left(-\dfrac{9}{5}, -\dfrac{13}{5}\right)$.

### Distance from a Point to a Line

The perpendicular distance from $(x_0, y_0)$ to the line $ax + by + c = 0$ is:

$$
d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}
$$

**Proof.** Let $P = (x_0, y_0)$ and let $Q$ be the foot of the perpendicular from $P$ to the line.
The line through $P$ perpendicular to $ax + by + c = 0$ has direction $(a, b)$, so its parametric
form is $(x_0 + at, y_0 + bt)$. Substituting into the line equation:
$a(x_0 + at) + b(y_0 + bt) + c = 0$, giving $t = -\frac{ax_0 + by_0 + c}{a^2 + b^2}$. The distance
is $|t|\sqrt{a^2 + b^2} = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$. $\blacksquare$

**Example:** Find the distance from $(3, 2)$ to the line $4x + 3y - 5 = 0$.

$$
d = \frac{|12 + 6 - 5|}{\sqrt{16 + 9}} = \frac{13}{5}
$$

---

## 3D Coordinate Geometry (Advanced Higher)

### Equations of Lines in 3D

A line through point $\mathbf{a} = (a_1, a_2, a_3)$ with direction vector
$\mathbf{d} = (d_1, d_2, d_3)$ has parametric equations:

$$
x = a_1 + td_1, \quad y = a_2 + td_2, \quad z = a_3 + td_3
$$

In vector form: $\mathbf{r} = \mathbf{a} + t\mathbf{d}$.

**Example:** Find the equation of the line through $(1, 2, -1)$ in the direction $(3, -1, 4)$.

$$
\mathbf{r} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} + t\begin{pmatrix} 3 \\ -1 \\ 4 \end{pmatrix}
$$

Parametrically: $x = 1 + 3t$, $y = 2 - t$, $z = -1 + 4t$.

### Skew, Parallel, and Intersecting Lines

Two lines in 3D can be:

- **Parallel**: direction vectors are scalar multiples
- **Intersecting**: there exists a common point (same values of $s$ and $t$ satisfy all three
  coordinate equations simultaneously)
- **Skew**: neither parallel nor intersecting

**Example:** Determine whether the following lines intersect:

$L_1$: $\mathbf{r} = (1, 0, 2) + s(2, 1, -1)$

$L_2$: $\mathbf{r} = (3, 1, -1) + t(1, -1, 3)$

Equate coordinates:

$$1 + 2s = 3 + t \quad (1)$$

$$s = 1 - t \quad (2)$$

$$2 - s = -1 + 3t \quad (3)$$

From (2): $s = 1 - t$. Substitute into (1): $1 + 2(1 - t) = 3 + t$, so $3 - 2t = 3 + t$, giving
$t = 0$, $s = 1$.

Check (3): $2 - 1 = -1 + 0$, i.e., $1 = -1$. This is false, so the lines are **skew**.

### Distance from a Point to a Line in 3D

The shortest distance from point $P$ to the line through $A$ with direction $\mathbf{d}$ is:

$$
d = \frac{|\overrightarrow{AP} \times \mathbf{d}|}{|\mathbf{d}|}
$$

**Example:** Find the perpendicular distance from the point $(1, 2, 3)$ to the line
$\mathbf{r} = (0, 1, -1) + t(2, -1, 3)$.

$\overrightarrow{AP} = (1, 1, 4)$, $\mathbf{d} = (2, -1, 3)$.

$$
\overrightarrow{AP} \times \mathbf{d} = \begin{pmatrix} 1 \cdot 3 - 4 \cdot (-1) \\ 4 \cdot 2 - 1 \cdot 3 \\ 1 \cdot (-1) - 1 \cdot 2 \end{pmatrix} = \begin{pmatrix} 7 \\ 5 \\ -3 \end{pmatrix}
$$

$$
|\overrightarrow{AP} \times \mathbf{d}| = \sqrt{49 + 25 + 9} = \sqrt{83}
$$

$$
|\mathbf{d}| = \sqrt{4 + 1 + 9} = \sqrt{14}
$$

$$
d = \frac{\sqrt{83}}{\sqrt{14}} = \sqrt{\frac{83}{14}} \approx 2.435
$$

### Distance Between Two Skew Lines

The shortest distance between two skew lines $\mathbf{r}_1 = \mathbf{a}_1 + t\mathbf{d}_1$ and
$\mathbf{r}_2 = \mathbf{a}_2 + s\mathbf{d}_2$ is:

$$
d = \frac{|(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{|\mathbf{d}_1 \times \mathbf{d}_2|}
$$

**Example:** Find the shortest distance between the skew lines $\mathbf{r} = (1, 0, 0) + s(1, 2, 0)$
and $\mathbf{r} = (0, 0, 1) + t(0, 1, 1)$.

$\mathbf{a}_2 - \mathbf{a}_1 = (-1, 0, 1)$.

$\mathbf{d}_1 = (1, 2, 0)$, $\mathbf{d}_2 = (0, 1, 1)$.

$$
\mathbf{d}_1 \times \mathbf{d}_2 = \begin{pmatrix} 2 \cdot 1 - 0 \cdot 1 \\ 0 \cdot 0 - 1 \cdot 1 \\ 1 \cdot 1 - 2 \cdot 0 \end{pmatrix} = \begin{pmatrix} 2 \\ -1 \\ 1 \end{pmatrix}
$$

$$
(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2) = (-1)(2) + 0(-1) + 1(1) = -1
$$

$$
|\mathbf{d}_1 \times \mathbf{d}_2| = \sqrt{4 + 1 + 1} = \sqrt{6}
$$

$$
d = \frac{|-1|}{\sqrt{6}} = \frac{1}{\sqrt{6}} = \frac{\sqrt{6}}{6}
$$

---

## Common Pitfalls

1. **Degrees vs radians:** Always check which units are being used. Calculus requires radians. If a
   question gives angles in degrees, convert before differentiating or integrating.

2. **Forgetting to check the domain:** When solving $\cos x = -\dfrac{2}{3}$, there are two
   solutions in $[0, 2\pi)$: one in the second quadrant and one in the third quadrant.

3. **Sign errors in the wave function:** When writing $a\sin x + b\cos x = R\sin(x + \alpha)$,
   ensure $\alpha$ has the correct sign. The quadrant of $\alpha$ depends on the signs of $a$ and
   $b$.

4. **Incorrectly completing the square for circles:** Remember to add the constant terms to both
   sides. For $x^2 + y^2 - 6x + 4y - 12 = 0$, you add 9 and 4 to both sides.

5. **Assuming lines in 3D always intersect:** Always check all three coordinates when testing for
   intersection. Even if two coordinates match, the third may not.

6. **Dividing by zero in trig equations:** When you factor and divide by $\cos x$, $\sin x$, or
   $\tan x$, you lose solutions. Always consider the case where the factor equals zero separately.

7. **Using the wrong form of $\cos 2A$:** All three forms are equivalent, but using the wrong one
   for the given context makes the algebra much harder.

8. **Confusing the ambiguous case of the sine rule:** When $\sin A = k$ where $0 < k < 1$, there are
   two possible angles ($A$ and $180° - A$). Both may or may not be valid in the triangle. Always
   check the sum of angles.

9. **Forgetting that $R$ in the wave function is always positive:** $R = \sqrt{a^2 + b^2}$ is
   defined as the positive square root. The maximum of $a\sin x + b\cos x$ is $R$ and the minimum is
   $-R$.

---

## Practice Questions

1. Express $5\sin\theta - 12\cos\theta$ in the form $R\sin(\theta - \alpha)$ and find its maximum
   value.

2. Solve $\cos 2x = 1 - 3\sin x$ for $0 \leq x < 2\pi$.

3. Find the equation of the circle with centre $(2, -3)$ that passes through $(5, 1)$.

4. Find the equation of the tangent to $x^2 + y^2 + 4x - 6y + 9 = 0$ at the point $(-2, 3)$.

5. A sector of a circle of radius 6 cm has an area of $24\pi \text{ cm}^2$. Find the perimeter of
   the sector.

6. Prove that $\sin 3\theta = 3\sin\theta - 4\sin^3\theta$.

7. Determine whether the lines $\mathbf{r} = (1, 2, 0) + s(1, -1, 2)$ and
   $\mathbf{r} = (3, 0, 4) + t(2, 1, -1)$ intersect, are parallel, or are skew.

8. Find the minimum value of $3\cos x + 4\sin x$ and the smallest positive value of $x$ at which it
   occurs.

9. Find the perpendicular distance from the point $(1, 2, 3)$ to the line
   $\mathbf{r} = (0, 1, -1) + t(2, -1, 3)$.

10. In triangle $ABC$, $a = 7$, $b = 9$, $B = 55°$. Find angle $A$ (there may be two solutions).

11. Solve $2\sin^2 x + 3\cos x - 3 = 0$ for $0 \le x \lt 2\pi$.

12. Find the shortest distance between the skew lines $\mathbf{r} = (1, 0, 0) + s(1, 2, 0)$ and
    $\mathbf{r} = (0, 0, 1) + t(0, 1, 1)$.

13. Find the angle between the lines $\mathbf{r} = (0, 0, 0) + s(1, 2, -1)$ and
    $\mathbf{r} = (1, 1, 0) + t(2, -1, 3)$.

14. Find the area of triangle $ABC$ given $a = 10$, $b = 8$, $c = 6$.

15. The line $y = mx + 7$ is tangent to the circle $x^2 + y^2 - 4x + 2y - 20 = 0$. Find the possible
    values of $m$.

16. Express $\cos 4\theta$ in terms of $\cos\theta$ using double angle formulae.
