---
title: Coordinate Geometry
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: dse-maths-compulsory-coordinate-geometry
---

## Distance and Midpoint

### Distance Formula

The distance between points $A(x_1, y_1)$ and $B(x_2, y_2)$:

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

This follows directly from the Pythagorean theorem.

### Midpoint Formula

The midpoint $M$ of $AB$:

$$M = \left(\frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2}\right)$$

### Worked Example 1

Find the distance and midpoint of $A(2, -3)$ and $B(6, 5)$.

$$d = \sqrt{(6 - 2)^2 + (5 - (-3))^2} = \sqrt{16 + 64} = \sqrt{80} = 4\sqrt{5}$$

$$M = \left(\frac{2 + 6}{2},\; \frac{-3 + 5}{2}\right) = (4, 1)$$

### Division of a Line Segment

The point $P$ that divides $AB$ in the ratio $m : n$ (measured from $A$ towards $B$):

$$P = \left(\frac{nx_1 + mx_2}{m + n},\; \frac{ny_1 + my_2}{m + n}\right)$$

---

## Equations of Lines

### Slope (Gradient)

The slope of the line through $(x_1, y_1)$ and $(x_2, y_2)$:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

### Various Forms

| Form            | Equation                                                  | When to Use                   |
| --------------- | --------------------------------------------------------- | ----------------------------- |
| Slope-intercept | $y = mx + c$                                              | Slope and $y$-intercept known |
| Point-slope     | $y - y_1 = m(x - x_1)$                                    | Slope and a point known       |
| Two-point       | $\dfrac{y - y_1}{y_2 - y_1} = \dfrac{x - x_1}{x_2 - x_1}$ | Two points known              |
| General         | $Ax + By + C = 0$                                         | Standard form                 |

### Parallel and Perpendicular Lines

Two lines with slopes $m_1$ and $m_2$:

- **Parallel:** $m_1 = m_2$
- **Perpendicular:** $m_1 \cdot m_2 = -1$

### Worked Example 2

Find the equation of the line through $A(1, 3)$ perpendicular to the line $2x - 3y + 6 = 0$.

The given line: $3y = 2x + 6 \implies y = \frac{2}{3}x + 2$. Slope: $m = 2/3$.

Perpendicular slope: $m_\perp = -3/2$.

$$y - 3 = -\frac{3}{2}(x - 1) \implies 2(y - 3) = -3(x - 1) \implies 2y - 6 = -3x + 3$$

$$3x + 2y - 9 = 0$$

### Worked Example 3

Find the distance from the point $P(3, 4)$ to the line $4x + 3y - 10 = 0$.

$$d = \frac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}} = \frac{|4(3) + 3(4) - 10|}{\sqrt{16 + 9}} = \frac{|12 + 12 - 10|}{5} = \frac{14}{5} = 2.8$$

---

## Intersection of Lines

Two lines $A_1x + B_1y + C_1 = 0$ and $A_2x + B_2y + C_2 = 0$ intersect at a unique point if they
are not parallel. Solve the system of equations simultaneously.

### Worked Example 4

Find the intersection of $3x - y + 2 = 0$ and $x + 2y - 7 = 0$.

From the first: $y = 3x + 2$. Substituting:
$x + 2(3x + 2) - 7 = 0 \implies x + 6x + 4 - 7 = 0 \implies 7x = 3$.

$$x = 3/7, \quad y = 3(3/7) + 2 = 9/7 + 14/7 = 23/7$$

Intersection: $\left(\dfrac{3}{7}, \dfrac{23}{7}\right)$.

---

## Equations of Circles

### Standard Form

A circle with centre $(a, b)$ and radius $r$:

$$(x - a)^2 + (y - b)^2 = r^2$$

### General Form

Expanding: $x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0$

$$x^2 + y^2 + Dx + Ey + F = 0$$

Centre: $\left(-\dfrac{D}{2}, -\dfrac{E}{2}\right)$, Radius:
$r = \sqrt{\dfrac{D^2}{4} + \dfrac{E^2}{4} - F}$

### Worked Example 5

Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

Completing the square:

$$x^2 - 6x + y^2 + 4y = 12$$

$$(x - 3)^2 - 9 + (y + 2)^2 - 4 = 12$$

$$(x - 3)^2 + (y + 2)^2 = 25$$

Centre: $(3, -2)$, Radius: $r = 5$.

---

## Circle-Line Intersection

### Tangent to a Circle at a Point

The tangent to $(x - a)^2 + (y - b)^2 = r^2$ at a point $(x_1, y_1)$ on the circle:

$$(x_1 - a)(x - a) + (y_1 - b)(y - b) = r^2$$

Equivalently, the tangent is perpendicular to the radius at the point of contact.

### Finding Intersection Points

Substitute the linear equation into the circle equation to obtain a quadratic in one variable. Use
the discriminant to determine the nature of the intersection:

| $\Delta$       | Intersection                 |
| -------------- | ---------------------------- |
| $\Delta \gt 0$ | Two distinct points (secant) |
| $\Delta = 0$   | One point (tangent)          |
| $\Delta \lt 0$ | No intersection              |

### Worked Example 6

Find the equation of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

Using the tangent formula: $x_1 x + y_1 y = r^2$:

$$3x + 4y = 25$$

Alternatively, the radius has slope $4/3$, so the tangent has slope $-3/4$:

$$y - 4 = -\frac{3}{4}(x - 3) \implies 4(y - 4) = -3(x - 3) \implies 4y - 16 = -3x + 9 \implies 3x + 4y - 25 = 0$$

---

## Areas

### Area of a Triangle (Coordinate Formula)

Given vertices $A(x_1, y_1)$, $B(x_2, y_2)$, $C(x_3, y_3)$:

$$\text{Area} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

### Area of a Polygon

For a polygon with vertices $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$ listed in order (clockwise
or counterclockwise):

$$\text{Area} = \frac{1}{2}\left|\sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i)\right|$$

where $(x_{n+1}, y_{n+1}) = (x_1, y_1)$.

### Worked Example 7

Find the area of the triangle with vertices $A(1, 2)$, $B(5, 6)$, $C(3, -1)$.

$$\text{Area} = \frac{1}{2}|1(6 - (-1)) + 5((-1) - 2) + 3(2 - 6)| = \frac{1}{2}|7 + (-15) + (-12)| = \frac{1}{2}|-20| = 10$$

---

## Common Pitfalls

- Forgetting the absolute value in the distance-from-point-to-line formula.
- Confusing the perpendicular slope formula: $m_1 m_2 = -1$, not $m_1 m_2 = 1$.
- When finding the centre from the general circle equation, forgetting the negative signs: centre is
  $(-D/2, -E/2)$, not $(D/2, E/2)$.
- Forgetting to check that $r^2 \gt 0$ when converting the general form to the standard form. If
  $r^2 \lt 0$, the equation does not represent a real circle.
- Arithmetic errors when completing the square for circle equations. Always double-check.

---

## Summary Table

| Topic                   | Key Formula                                                   |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------------------ | -------------------- |
| Distance                | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$                    |
| Midpoint                | $M = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)$ |
| Point to line           | $d = \dfrac{                                                  | Ax_0 + By_0 + C                                  | }{\sqrt{A^2 + B^2}}$ |
| Circle (standard)       | $(x - a)^2 + (y - b)^2 = r^2$                                 |
| Tangent at $(x_1, y_1)$ | $x_1 x + y_1 y = r^2$ (for circle at origin)                  |
| Triangle area           | $\dfrac{1}{2}                                                 | x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) | $                    |

---

<details>
<summary>Wrap-up Questions</summary>

1. **Question:** Find the equation of the perpendicular bisector of $AB$ where $A(2, 1)$ and
   $B(6, 7)$.

Midpoint: $M = (4, 4)$. Slope of $AB$: $m = (7 - 1)/(6 - 2) = 6/4 = 3/2$.

Perpendicular slope: $m_\perp = -2/3$.

$$y - 4 = -\frac{2}{3}(x - 4) \implies 3(y - 4) = -2(x - 4) \implies 3y - 12 = -2x + 8 \implies 2x + 3y - 20 = 0$$

2. **Question:** Find the equation of the circle passing through $(1, 2)$, $(3, 4)$, and $(5, 2)$.

General form: $x^2 + y^2 + Dx + Ey + F = 0$.

Substituting the three points:

$(1, 2)$: $1 + 4 + D + 2E + F = 0 \implies D + 2E + F = -5 \quad (1)$

$(3, 4)$: $9 + 16 + 3D + 4E + F = 0 \implies 3D + 4E + F = -25 \quad (2)$

$(5, 2)$: $25 + 4 + 5D + 2E + F = 0 \implies 5D + 2E + F = -29 \quad (3)$

$(2) - (1)$: $2D + 2E = -20 \implies D + E = -10 \quad (4)$

$(3) - (1)$: $4D = -24 \implies D = -6$

From (4): $E = -4$. From (1): $-6 - 8 + F = -5 \implies F = 9$.

Equation: $x^2 + y^2 - 6x - 4y + 9 = 0$, i.e., $(x - 3)^2 + (y - 2)^2 = 4$.

Centre: $(3, 2)$, radius: $2$.

3. **Question:** Show that the line $y = x + 1$ is a tangent to the circle $x^2 + y^2 = 2$ and find
   the point of contact.

Substitute $y = x + 1$:
$x^2 + (x + 1)^2 = 2 \implies x^2 + x^2 + 2x + 1 - 2 = 0 \implies 2x^2 + 2x - 1 = 0$.

$\Delta = 4 + 8 = 12 \gt 0$. This is not a tangent -- there are two intersection points. Let me
re-check. Actually $\Delta = 4 - 4(2)(-1) = 4 + 8 = 12 \neq 0$, so the line is not a tangent to this
circle. Let me try the circle $x^2 + y^2 = 1$ instead:

$x^2 + (x+1)^2 = 1 \implies 2x^2 + 2x = 0 \implies 2x(x + 1) = 0$. $\Delta = 4 - 0 = 4 \gt 0$. Still
not tangent.

For $x^2 + y^2 = 1/2$:
$x^2 + (x+1)^2 = 1/2 \implies 2x^2 + 2x + 1/2 = 0 \implies \Delta = 4 - 4 = 0$. Tangent. Point of
contact: $x = -1/2$, $y = 1/2$. Point: $(-1/2, 1/2)$.

4. **Question:** Find the distance between the parallel lines $3x + 4y - 5 = 0$ and
   $3x + 4y + 11 = 0$.

Distance
$= \dfrac{|C_2 - C_1|}{\sqrt{A^2 + B^2}} = \dfrac{|11 - (-5)|}{\sqrt{9 + 16}} = \dfrac{16}{5} = 3.2$.

5. **Question:** The points $A(-1, 3)$, $B(2, k)$, and $C(5, -1)$ are collinear. Find $k$.

For collinearity, the slope of $AB$ equals the slope of $BC$:

$$\frac{k - 3}{2 - (-1)} = \frac{-1 - k}{5 - 2} \implies \frac{k - 3}{3} = \frac{-1 - k}{3}$$

$$k - 3 = -1 - k \implies 2k = 2 \implies k = 1$$

6. **Question:** Find the area of the quadrilateral with vertices $(0, 0)$, $(4, 0)$, $(5, 3)$, and
   $(1, 4)$.

Using the shoelace formula with vertices in order:

$\text{Area} = \frac{1}{2}|(0 \cdot 0 - 4 \cdot 0) + (4 \cdot 3 - 5 \cdot 0) + (5 \cdot 4 - 1 \cdot 3) + (1 \cdot 0 - 0 \cdot 4)|$

$= \frac{1}{2}|0 + 12 + 17 + 0| = \frac{1}{2}(29) = 14.5$

7. **Question:** A circle has centre $(2, -1)$ and passes through the point $(5, 3)$. Find its
   equation.

$r = \sqrt{(5 - 2)^2 + (3 - (-1))^2} = \sqrt{9 + 16} = 5$.

Equation: $(x - 2)^2 + (y + 1)^2 = 25$.

8. **Question:** Find the angle between the lines $y = 2x + 1$ and $y = -3x + 4$.

$\tan\theta = \left|\dfrac{m_2 - m_1}{1 + m_1 m_2}\right| = \left|\dfrac{-3 - 2}{1 + (-6)}\right| = \left|\dfrac{-5}{-5}\right| = 1$

$\theta = 45^\circ$.

</details>
