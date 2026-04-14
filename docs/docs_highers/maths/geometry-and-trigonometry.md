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

$$\sin\theta = \frac{\text{opposite}}{\text{hypotenuse}}, \quad \cos\theta = \frac{\text{adjacent}}{\text{hypotenuse}}, \quad \tan\theta = \frac{\text{opposite}}{\text{adjacent}}$$

**Key Identity:**

$$\sin^2\theta + \cos^2\theta = 1$$

Dividing through by $\cos^2\theta$:

$$1 + \tan^2\theta = \sec^2\theta$$

Dividing through by $\sin^2\theta$:

$$1 + \cot^2\theta = \cosec^2\theta$$

### Radians

Angles can be measured in radians. One full revolution is $2\pi$ radians.

$$\pi \text{ radians} = 180°$$

**Arc Length:**

$$s = r\theta$$

where $s$ is arc length, $r$ is radius, and $\theta$ is in radians.

**Sector Area:**

$$A = \frac{1}{2}r^2\theta$$

**Segment Area:**

$$A = \frac{1}{2}r^2(\theta - \sin\theta)$$

**Example:** Find the length of the arc and the area of the sector for a circle of radius 8 cm with
an angle of $\dfrac{5\pi}{6}$ radians.

Arc length: $s = 8 \times \dfrac{5\pi}{6} = \dfrac{20\pi}{3} \approx 20.94 \text{ cm}$.

Sector area:
$A = \dfrac{1}{2} \times 64 \times \dfrac{5\pi}{6} = \dfrac{160\pi}{6} = \dfrac{80\pi}{3} \approx 83.78 \text{ cm}^2$.

### Trigonometric Identities

**Addition Formulae:**

$$\sin(A \pm B) = \sin A \cos B \pm \cos A \sin B$$

$$\cos(A \pm B) = \cos A \cos B \mp \sin A \sin B$$

$$\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A \tan B}$$

**Double Angle Formulae:**

$$\sin 2A = 2\sin A \cos A$$

$$\cos 2A = \cos^2 A - \sin^2 A = 2\cos^2 A - 1 = 1 - 2\sin^2 A$$

$$\tan 2A = \frac{2\tan A}{1 - \tan^2 A}$$

**Example:** Express $\cos 3\theta$ in terms of $\cos\theta$.

$$\cos 3\theta = \cos(2\theta + \theta)$$

$$= \cos 2\theta \cos\theta - \sin 2\theta \sin\theta$$

$$= (2\cos^2\theta - 1)\cos\theta - 2\sin\theta \cos\theta \sin\theta$$

$$= 2\cos^3\theta - \cos\theta - 2\sin^2\theta \cos\theta$$

$$= 2\cos^3\theta - \cos\theta - 2(1 - \cos^2\theta)\cos\theta$$

$$= 2\cos^3\theta - \cos\theta - 2\cos\theta + 2\cos^3\theta$$

$$= 4\cos^3\theta - 3\cos\theta$$

### Solving Trigonometric Equations

**Example:** Solve $\sin 2x = \cos x$ for $0 \leq x < 2\pi$.

$$2\sin x \cos x = \cos x$$

$$2\sin x \cos x - \cos x = 0$$

$$\cos x(2\sin x - 1) = 0$$

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

### Wave Function (R-Addition Formula)

An expression of the form $a\sin x + b\cos x$ can be written as $R\sin(x + \alpha)$ or
$R\cos(x - \alpha)$, where:

$$R = \sqrt{a^2 + b^2}, \quad \alpha = \arctan\left(\frac{b}{a}\right)$$

**Example:** Express $3\sin x + 4\cos x$ in the form $R\sin(x + \alpha)$.

$$R = \sqrt{9 + 16} = 5$$

$$\alpha = \arctan\left(\frac{4}{3}\right)$$

$$3\sin x + 4\cos x = 5\sin\left(x + \arctan\left(\frac{4}{3}\right)\right)$$

**Applications:** The maximum value is $R = 5$ and the minimum is $-R = -5$.

**Example:** Find the maximum value of $2\sin\theta - \sqrt{3}\cos\theta$ and the smallest positive
value of $\theta$ at which it occurs.

$$R = \sqrt{4 + 3} = \sqrt{7}$$

$$2\sin\theta - \sqrt{3}\cos\theta = \sqrt{7}\sin(\theta + \alpha)$$

where $\tan\alpha = \dfrac{-\sqrt{3}}{2}$, so
$\alpha = -\arctan\left(\dfrac{\sqrt{3}}{2}\right) \approx -0.714 \text{ rad}$.

Maximum value is $\sqrt{7}$, occurring when $\sin(\theta + \alpha) = 1$, i.e.,
$\theta + \alpha = \dfrac{\pi}{2}$, so
$\theta = \dfrac{\pi}{2} + \arctan\left(\dfrac{\sqrt{3}}{2}\right) \approx 2.285 \text{ rad}$.

---

## Coordinate Geometry

### The Straight Line

The equation of a straight line passing through $(x_1, y_1)$ with gradient $m$:

$$y - y_1 = m(x - x_1)$$

**Example:** Find the equation of the perpendicular bisector of the line segment joining $A(2, 5)$
and $B(8, 3)$.

Midpoint: $M = \left(\dfrac{2 + 8}{2}, \dfrac{5 + 3}{2}\right) = (5, 4)$.

Gradient of AB: $m_{AB} = \dfrac{3 - 5}{8 - 2} = -\dfrac{1}{3}$.

Gradient of perpendicular bisector: $m = 3$.

Equation: $y - 4 = 3(x - 5)$, i.e., $y = 3x - 11$.

### Circles

The general equation of a circle with centre $(a, b)$ and radius $r$:

$$(x - a)^2 + (y - b)^2 = r^2$$

Expanded form: $x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0$.

**Example:** Find the centre and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.

Complete the square:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

$$(x - 3)^2 + (y + 2)^2 = 25$$

Centre $(3, -2)$, radius $5$.

**Tangent to a Circle:**

The tangent at a point on the circle is perpendicular to the radius at that point.

**Example:** Find the equation of the tangent to $(x - 2)^2 + (y + 1)^2 = 25$ at the point $(5, 3)$.

Gradient of radius from $(2, -1)$ to $(5, 3)$: $m_r = \dfrac{3 - (-1)}{5 - 2} = \dfrac{4}{3}$.

Gradient of tangent: $m_t = -\dfrac{3}{4}$.

Equation: $y - 3 = -\dfrac{3}{4}(x - 5)$, i.e., $4y - 12 = -3x + 15$, or $3x + 4y - 27 = 0$.

### Intersection of Line and Circle

Substitute the line equation into the circle equation and solve the resulting quadratic.

**Example:** Find where the line $y = 2x + 1$ intersects the circle $x^2 + y^2 = 10$.

$$(x^2 + (2x + 1)^2 = 10)$$

$$x^2 + 4x^2 + 4x + 1 = 10$$

$$5x^2 + 4x - 9 = 0$$

$$(5x + 9)(x - 1) = 0$$

$$x = -\frac{9}{5} \text{ or } x = 1$$

When $x = 1$: $y = 3$. When $x = -\dfrac{9}{5}$: $y = -\dfrac{13}{5}$.

Points of intersection: $(1, 3)$ and $\left(-\dfrac{9}{5}, -\dfrac{13}{5}\right)$.

---

## 3D Coordinate Geometry (Advanced Higher)

### Equations of Lines in 3D

A line through point $\mathbf{a} = (a_1, a_2, a_3)$ with direction vector
$\mathbf{d} = (d_1, d_2, d_3)$ has parametric equations:

$$x = a_1 + td_1, \quad y = a_2 + td_2, \quad z = a_3 + td_3$$

**Example:** Find the equation of the line through $(1, 2, -1)$ in the direction $(3, -1, 4)$.

$$\mathbf{r} = \begin{pmatrix} 1 \\ 2 \\ -1 \end{pmatrix} + t\begin{pmatrix} 3 \\ -1 \\ 4 \end{pmatrix}$$

Parametrically: $x = 1 + 3t$, $y = 2 - t$, $z = -1 + 4t$.

### Skew, Parallel, and Intersecting Lines

Two lines in 3D can be:

- **Parallel**: direction vectors are scalar multiples
- **Intersecting**: there exists a common point
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

---

## Common Pitfalls

1. **Degrees vs radians:** Always check which units are being used. Calculus requires radians.

2. **Forgetting to check the domain:** When solving $\cos x = -\dfrac{2}{3}$, there are two
   solutions in $[0, 2\pi)$.

3. **Sign errors in the wave function:** When writing $a\sin x + b\cos x = R\sin(x + \alpha)$,
   ensure $\alpha$ has the correct sign.

4. **Incorrectly completing the square for circles:** Remember to add the constant terms to both
   sides.

5. **Assuming lines in 3D always intersect:** Always check all three coordinates when testing for
   intersection.

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
