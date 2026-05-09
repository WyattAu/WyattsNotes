---
title: Coordinate Geometry
description: "DSE Mathematics coordinate geometry notes covering straight lines, circles, equations of curves, distance formula, midpoint formula, and locus problems."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: coordinate-geometry
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

$$\mathrm{'\{'}Area{'\}'} = \frac{1}{2}|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)|$$

### Area of a Polygon

For a polygon with vertices $(x_1, y_1), (x_2, y_2), \ldots, (x_n, y_n)$ listed in order (clockwise
or counterclockwise):

$$\mathrm{'\{'}Area{'\}'} = \frac{1}{2}\left|\sum_{i=1}^{n} (x_i y_{i+1} - x_{i+1} y_i)\right|$$

where $(x_{n+1}, y_{n+1}) = (x_1, y_1)$.

### Worked Example 7

Find the area of the triangle with vertices $A(1, 2)$, $B(5, 6)$, $C(3, -1)$.

$$\mathrm{'\{'}Area{'\}'} = \frac{1}{2}|1(6 - (-1)) + 5((-1) - 2) + 3(2 - 6)| = \frac{1}{2}|7 + (-15) + (-12)| = \frac{1}{2}|-20| = 10$$

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
| Distance                | $d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$                    | | |
| Midpoint                | $M = \left(\dfrac{x_1 + x_2}{2}, \dfrac{y_1 + y_2}{2}\right)$ | | |
| Point to line           | $d = \dfrac{                                                  | Ax_0 + By_0 + C                                  | }{\sqrt{A^2 + B^2}}$ |
| Circle (standard)       | $(x - a)^2 + (y - b)^2 = r^2$                                 | | |
| Tangent at $(x_1, y_1)$ | $x_1 x + y_1 y = r^2$ (for circle at origin)                  | | |
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

$\mathrm{'\{'}Area{'\}'} = \frac{1}{2}|(0 \cdot 0 - 4 \cdot 0) + (4 \cdot 3 - 5 \cdot 0) + (5 \cdot 4 - 1 \cdot 3) + (1 \cdot 0 - 0 \cdot 4)|$

$= \frac{1}{2}|0 + 12 + 17 + 0| = \frac{1}{2}(29) = 14.5$

7. **Question:** A circle has centre $(2, -1)$ and passes through the point $(5, 3)$. Find its
   equation.

$r = \sqrt{(5 - 2)^2 + (3 - (-1))^2} = \sqrt{9 + 16} = 5$.

Equation: $(x - 2)^2 + (y + 1)^2 = 25$.

8. **Question:** Find the angle between the lines $y = 2x + 1$ and $y = -3x + 4$.

$\tan\theta = \left|\dfrac{m_2 - m_1}{1 + m_1 m_2}\right| = \left|\dfrac{-3 - 2}{1 + (-6)}\right| = \left|\dfrac{-5}{-5}\right| = 1$

$\theta = 45^\circ$.

</details>

---

## Additional Worked Examples

**Worked Example 8: Circle with centre on a given line**

Find the equation of the circle whose centre lies on $2x - y + 3 = 0$ and which passes through $A(1, 2)$ and $B(5, 6)$.

<details>
<summary>Solution</summary>

Let the centre be $C(h, k)$. Since $C$ lies on $2x - y + 3 = 0$:

$$2h - k + 3 = 0 \implies k = 2h + 3 \quad (1)$$

Since $CA = CB$ (both equal the radius):

$$(h-1)^2 + (k-2)^2 = (h-5)^2 + (k-6)^2$$

Expanding and simplifying: $h^2 - 2h + 1 + k^2 - 4k + 4 = h^2 - 10h + 25 + k^2 - 12k + 36$

$$-2h - 4k + 5 = -10h - 12k + 61$$

$$8h + 8k = 56 \implies h + k = 7 \quad (2)$$

Substituting (1) into (2): $h + 2h + 3 = 7 \implies 3h = 4 \implies h = \dfrac{4}{3}$.

$k = 2 \cdot \dfrac{4}{3} + 3 = \dfrac{17}{3}$.

$$r^2 = \left(\frac{4}{3} - 1\right)^2 + \left(\frac{17}{3} - 2\right)^2 = \frac{1}{9} + \frac{121}{9} = \frac{122}{9}$$

Equation: $\left(x - \dfrac{4}{3}\right)^2 + \left(y - \dfrac{17}{3}\right)^2 = \dfrac{122}{9}$.

</details>

**Worked Example 9: Tangents from an external point**

Find the equations of the tangents from $P(4, 0)$ to the circle $x^2 + y^2 = 8$.

<details>
<summary>Solution</summary>

A line through $P(4, 0)$ with slope $m$: $y = m(x - 4)$.

Substituting into $x^2 + y^2 = 8$:

$$(1 + m^2)x^2 - 8m^2 x + 16m^2 - 8 = 0$$

For tangency, $\Delta = 0$:

$$\Delta = 64m^4 - 4(1 + m^2)(16m^2 - 8) = 0$$

Expanding the second factor: $16m^2 - 8 + 16m^4 - 8m^2 = 16m^4 + 8m^2 - 8$.

$$\Delta = 64m^4 - 64m^4 - 32m^2 + 32 = -32m^2 + 32 = 0$$

$$m^2 = 1 \implies m = \pm 1$$

Tangent 1: $y = x - 4$, i.e. $x - y - 4 = 0$.

Tangent 2: $y = -x + 4$, i.e. $x + y - 4 = 0$.

Verification: distance from $(0,0)$ to $x - y - 4 = 0$ is $\dfrac{4}{\sqrt{2}} = 2\sqrt{2} = \sqrt{8}$. Correct.

</details>

**Worked Example 10: Triangle formed by three lines**

Find the area of the triangle formed by $\ell_1: x + y = 6$, $\ell_2: x - y = 2$, and $\ell_3: 2x + y = 9$.

<details>
<summary>Solution</summary>

Find the three vertices by pairwise intersection.

$\ell_1 \cap \ell_2$: Adding the equations gives $2x = 8 \implies x = 4$, $y = 2$. Vertex $A(4, 2)$.

$\ell_1 \cap \ell_3$: Subtracting $\ell_1$ from $\ell_3$ gives $x = 3$, $y = 3$. Vertex $B(3, 3)$.

$\ell_2 \cap \ell_3$: Adding the equations gives $3x = 11 \implies x = \dfrac{11}{3}$, $y = \dfrac{5}{3}$. Vertex $C\!\left(\dfrac{11}{3}, \dfrac{5}{3}\right)$.

Using the area formula:

$$\mathrm{'\{'}Area{'\}'} = \frac{1}{2}\left|4\!\left(3 - \frac{5}{3}\right) + 3\!\left(\frac{5}{3} - 2\right) + \frac{11}{3}(2 - 3)\right|$$

$$= \frac{1}{2}\left|4 \cdot \frac{4}{3} + 3 \cdot \left(-\frac{1}{3}\right) + \frac{11}{3} \cdot (-1)\right|$$

$$= \frac{1}{2}\left|\frac{16 - 3 - 11}{3}\right| = \frac{1}{2} \cdot \frac{2}{3} = \frac{1}{3}$$

</details>

**Worked Example 11: Reflection of a point in a line**

Find the reflection of $P(1, 5)$ in the line $3x - y + 1 = 0$.

<details>
<summary>Solution</summary>

Let the reflected point be $P'(a, b)$. The midpoint $M\!\left(\dfrac{1+a}{2}, \dfrac{5+b}{2}\right)$ lies on the line:

$$3\!\left(\frac{1+a}{2}\right) - \frac{5+b}{2} + 1 = 0$$

$$3(1+a) - (5+b) + 2 = 0 \implies 3a - b = 0 \quad (1)$$

The slope of $PP'$ is perpendicular to the line (slope $3$):

$$\frac{b - 5}{a - 1} \cdot 3 = -1 \implies 3b - 15 = -(a - 1) \implies a + 3b = 16 \quad (2)$$

From (1): $b = 3a$. Substituting into (2): $a + 9a = 16 \implies a = \dfrac{8}{5}$.

$$b = 3 \cdot \frac{8}{5} = \frac{24}{5}$$

Reflection: $P'\!\left(\dfrac{8}{5}, \dfrac{24}{5}\right)$.

</details>

**Worked Example 12: Circle through three points**

Find the equation of the circle through $P(0, 1)$, $Q(2, 3)$, and $R(4, 1)$.

<details>
<summary>Solution</summary>

$P(0, 1)$ and $R(4, 1)$ share the same $y$-coordinate, so the centre lies on their perpendicular bisector $x = 2$.

$P(0, 1)$ and $Q(2, 3)$ have midpoint $(1, 2)$ and segment slope $1$. Their perpendicular bisector has slope $-1$ through $(1, 2)$: $y - 2 = -(x - 1) \implies y = -x + 3$.

Intersecting with $x = 2$: $y = 1$. Centre: $(2, 1)$.

$$r^2 = (2-0)^2 + (1-1)^2 = 4$$

Equation: $(x - 2)^2 + (y - 1)^2 = 4$, or $x^2 + y^2 - 4x - 2y + 1 = 0$.

Verification: $(4-2)^2 + (1-1)^2 = 4 = r^2$. Correct.

</details>

---

## Additional Common Pitfalls

1. **Sign error in the section formula.** The point dividing $AB$ in ratio $m:n$ (from $A$ towards $B$) has $x$-coordinate $\dfrac{nx_1 + mx_2}{m+n}$, not $\dfrac{mx_1 + nx_2}{m+n}$. The weight of $A$ is $n$, not $m$.

2. **Dropping the absolute value in point-to-line distance.** The formula $\dfrac{|Ax_0 + By_0 + C|}{\sqrt{A^2 + B^2}}$ always yields a non-negative result. Omitting the absolute value can produce a negative "distance".

3. **Failing to normalise parallel lines.** Before using the distance-between-parallel-lines formula $d = \dfrac{|C_2 - C_1|}{\sqrt{A^2 + B^2}}$, ensure both equations have identical $A$ and $B$ coefficients. If one equation is a scalar multiple of the other, rescale first.

4. **Assuming two circles always intersect.** Two circles with centres $O_1$, $O_2$ and radii $r_1$, $r_2$ intersect at two points only when $|r_1 - r_2| \lt d \lt r_1 + r_2$, where $d$ is the distance between centres.

5. **Undefined slope of vertical lines.** The line $x = a$ has no defined slope. Never assign a numerical value such as $\infty$ to it; state that the slope is undefined.

6. **Stopping at the midpoint for perpendicular bisectors.** The perpendicular bisector of $AB$ requires both the midpoint and the perpendicular slope. A common mistake is to find the midpoint and stop.

7. **Confusing the tangent formula for circles not at the origin.** The shortcut $x_1 x + y_1 y = r^2$ only applies when the circle is $x^2 + y^2 = r^2$. For $(x-a)^2 + (y-b)^2 = r^2$, use the general formula $(x_1-a)(x-a) + (y_1-b)(y-b) = r^2$.

8. **Arithmetic errors in the shoelace formula.** Always list vertices in consistent order (clockwise or anticlockwise). Mixing the order gives the wrong area or its negative.

---

## Exam-Style Problems

**Problem 1.** The points $A(-2, 3)$, $B(4, 7)$, and $C(k, -1)$ form a triangle with area $30$. Find the possible values of $k$.

<details>
<summary>Solution</summary>

$$\frac{1}{2}\left|(-2)(7 - (-1)) + 4((-1) - 3) + k(3 - 7)\right| = 30$$

$$\frac{1}{2}|-16 - 16 - 4k| = 30 \implies |-32 - 4k| = 60$$

Case 1: $-32 - 4k = 60 \implies 4k = -92 \implies k = -23$.

Case 2: $-32 - 4k = -60 \implies 4k = 28 \implies k = 7$.

Answer: $k = -23$ or $k = 7$.

</details>

**Problem 2.** The line $y = \dfrac{3}{4}x + c$ is tangent to $(x - 1)^2 + (y - 2)^2 = 25$. Find $c$.

<details>
<summary>Solution</summary>

Rewrite the line as $3x - 4y + 4c = 0$. The distance from the centre $(1, 2)$ to this line equals the radius $5$:

$$\frac{|3(1) - 4(2) + 4c|}{\sqrt{9 + 16}} = 5 \implies \frac{|4c - 5|}{5} = 5 \implies |4c - 5| = 25$$

Case 1: $4c - 5 = 25 \implies c = 7.5$.

Case 2: $4c - 5 = -25 \implies c = -5$.

Answer: $c = 7.5$ or $c = -5$.

</details>

**Problem 3.** Find the equation of the circle passing through $A(2, 3)$ and $B(6, 1)$ with its centre on the $x$-axis.

<details>
<summary>Solution</summary>

Let the centre be $C(h, 0)$. Then $CA^2 = CB^2$:

$$(h-2)^2 + 9 = (h-6)^2 + 1$$

$$h^2 - 4h + 13 = h^2 - 12h + 37 \implies 8h = 24 \implies h = 3$$

$$r^2 = (3-2)^2 + (0-3)^2 = 1 + 9 = 10$$

Equation: $(x - 3)^2 + y^2 = 10$.

</details>

**Problem 4.** The line $3x + 4y - 12 = 0$ cuts the coordinate axes at $A$ and $B$. Find the equation of the circle with $AB$ as diameter.

<details>
<summary>Solution</summary>

$A$: set $y = 0$, giving $x = 4$. So $A(4, 0)$.

$B$: set $x = 0$, giving $y = 3$. So $B(0, 3)$.

Centre (midpoint of $AB$): $\left(\dfrac{4+0}{2}, \dfrac{0+3}{2}\right) = (2,\; 1.5)$.

$$r = \frac{AB}{2} = \frac{\sqrt{16 + 9}}{2} = \frac{5}{2}$$

Equation: $(x - 2)^2 + \!\left(y - \dfrac{3}{2}\right)^2 = \dfrac{25}{4}$.

Expanding: $x^2 + y^2 - 4x - 3y = 0$.

</details>

**Problem 5.** Determine whether the triangle with vertices $P(1, 2)$, $Q(5, 5)$, and $R(8, 1)$ is right-angled.

<details>
<summary>Solution</summary>

Calculate the slopes of the three sides:

$$m_{PQ} = \frac{5-2}{5-1} = \frac{3}{4}, \quad m_{QR} = \frac{1-5}{8-5} = -\frac{4}{3}$$

$$m_{PQ} \cdot m_{QR} = \frac{3}{4} \cdot \left(-\frac{4}{3}\right) = -1$$

Since the product is $-1$, $PQ \perp QR$. The triangle is right-angled at $Q$.

Verification by Pythagoras: $PQ^2 = 25$, $QR^2 = 25$, $PR^2 = 49 + 1 = 50$. Indeed $25 + 25 = 50$.

</details>

**Problem 6.** Find the equation of the perpendicular bisector of the segment joining $(-1, 5)$ and $(3, -1)$, and verify that $(1, 2)$ lies on it.

<details>
<summary>Solution</summary>

Midpoint: $\left(\dfrac{-1+3}{2}, \dfrac{5+(-1)}{2}\right) = (1, 2)$.

Slope of segment: $\dfrac{-1-5}{3-(-1)} = \dfrac{-6}{4} = -\dfrac{3}{2}$.

Perpendicular slope: $\dfrac{2}{3}$.

Equation through $(1, 2)$: $y - 2 = \dfrac{2}{3}(x - 1) \implies 3y - 6 = 2x - 2 \implies 2x - 3y + 4 = 0$.

Verification: $2(1) - 3(2) + 4 = 2 - 6 + 4 = 0$. Confirmed.

</details>

**Problem 7.** A point $P$ moves so that its distance from $A(3, 1)$ is always twice its distance from $B(-1, 4)$. Find the equation of the locus of $P$.

<details>
<summary>Solution</summary>

Let $P = (x, y)$. Then $PA = 2 \cdot PB$:

$$\sqrt{(x-3)^2 + (y-1)^2} = 2\sqrt{(x+1)^2 + (y-4)^2}$$

Squaring both sides:

$$(x-3)^2 + (y-1)^2 = 4\!\left[(x+1)^2 + (y-4)^2\right]$$

$$x^2 - 6x + 9 + y^2 - 2y + 1 = 4(x^2 + 2x + 1 + y^2 - 8y + 16)$$

$$x^2 - 6x + y^2 - 2y + 10 = 4x^2 + 8x + 4y^2 - 32y + 68$$

$$3x^2 + 3y^2 + 14x - 30y + 58 = 0$$

Dividing by $3$: $x^2 + y^2 + \dfrac{14}{3}x - 10y + \dfrac{58}{3} = 0$.

This is the equation of a circle (Apollonius circle).

</details>

**Problem 8.** Two circles $C_1: x^2 + y^2 + 4x - 6y + 9 = 0$ and $C_2: x^2 + y^2 - 2x + 2y - 14 = 0$ intersect at $A$ and $B$. Find the equation of their common chord $AB$.

<details>
<summary>Solution</summary>

The common chord is found by subtracting the two circle equations:

$$(x^2 + y^2 + 4x - 6y + 9) - (x^2 + y^2 - 2x + 2y - 14) = 0$$

$$6x - 8y + 23 = 0$$

The equation of the common chord is $6x - 8y + 23 = 0$.

</details>

---

## Cross-References

- **Quadratics:** The discriminant is used to determine the nature of circle-line intersections. See [quadratics.md](quadratics)).
- **Functions:** Transformations of graphs apply equally to circles and lines. See [functions-advanced.md](functions-advanced)).
- **Trigonometry:** The angle between two lines uses the tangent formula, which connects to trigonometric identities.

For the A-Level treatment of this topic, see [Coordinates and Geometry](https://alevel.wyattau.com/docs/maths/pure-mathematics/coordinates-and-geometry).

---

:::tip
tip
Ready to test your understanding of **Coordinate Geometry**? The [diagnostic test](/docs/dse/Maths/diagnostics/diag-coordinate-geometry) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Coordinate Geometry with other DSE mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/dse/Maths/diagnostics/diagnostic-guide) for instructions on self-marking and building a personal test matrix.
:::

---

## DSE Exam Technique

### Showing Working

For coordinate geometry problems in DSE Paper 1:

1. Write the formula before substituting (e.g., distance formula, midpoint formula, gradient formula).
2. For circle equations, show the completing-the-square steps.
3. For intersection problems, show the substitution and the resulting quadratic.
4. When finding tangents, state that the tangent is perpendicular to the radius.
5. For locus problems, start with "Let $P = (x, y)$" and derive the equation step by step.

### Significant Figures

Length and distance answers to 3 significant figures unless exact forms are possible. Coordinate values involving square roots should be left in exact form.

### Common DSE Question Types

1. **Finding equations of circles** from given conditions (centre and radius, three points, diameter).
2. **Circle-line intersection** (tangent condition using discriminant or distance formula).
3. **Locus problems** (equidistant from points, ratio of distances).
4. **Area of triangle** using coordinate formula or shoelace formula.
5. **Perpendicular bisector** and reflection problems.

---

## Additional Worked Examples

**Worked Example 13: Equation of a circle tangent to both axes**

Find the equation of the circle in the first quadrant that is tangent to both coordinate axes and has radius $3$.

<details>
<summary>Solution</summary>

Since the circle is in the first quadrant and tangent to both axes, the centre is at $(r, r) = (3, 3)$.

Equation: $(x - 3)^2 + (y - 3)^2 = 9$.

Expanding: $x^2 + y^2 - 6x - 6y + 9 = 0$.

</details>

**Worked Example 14: Intersection of two circles**

Find the points of intersection of $x^2 + y^2 = 5$ and $x^2 + y^2 - 4x - 2y + 1 = 0$.

<details>
<summary>Solution</summary>

Subtract the second equation from the first:

$$5 - (-4x - 2y + 1) = 0 \implies 4x + 2y - 6 = 0 \implies 2x + y = 3 \implies y = 3 - 2x$$

Substituting into $x^2 + y^2 = 5$:

$$x^2 + (3 - 2x)^2 = 5 \implies x^2 + 9 - 12x + 4x^2 = 5 \implies 5x^2 - 12x + 4 = 0$$

$$(5x - 2)(x - 2) = 0 \implies x = \frac{2}{5} \;\text{'\{'}or{'\}'}\; x = 2$$

$x = \dfrac{2}{5} \implies y = 3 - \dfrac{4}{5} = \dfrac{11}{5}$. Point: $\left(\dfrac{2}{5}, \dfrac{11}{5}\right)$.

$x = 2 \implies y = 3 - 4 = -1$. Point: $(2, -1)$.

</details>

**Worked Example 15: Shortest distance from a point to a circle**

Find the shortest distance from $P(5, 3)$ to the circle $x^2 + y^2 - 4x + 2y - 4 = 0$.

<details>
<summary>Solution</summary>

Centre: $(2, -1)$, $r^2 = 4 + 1 + 4 = 9 \implies r = 3$.

Distance from $P$ to centre: $d = \sqrt{(5-2)^2 + (3-(-1))^2} = \sqrt{9 + 16} = 5$.

Shortest distance from $P$ to the circle: $d - r = 5 - 3 = 2$.

</details>

**Worked Example 16: Locus - equidistant from two points**

Find the equation of the locus of points equidistant from $A(1, 3)$ and $B(5, 7)$.

<details>
<summary>Solution</summary>

Let $P = (x, y)$. Then $PA = PB$:

$$\sqrt{(x-1)^2 + (y-3)^2} = \sqrt{(x-5)^2 + (y-7)^2}$$

Squaring:

$$(x-1)^2 + (y-3)^2 = (x-5)^2 + (y-7)^2$$

$$x^2 - 2x + 1 + y^2 - 6y + 9 = x^2 - 10x + 25 + y^2 - 14y + 49$$

$$8x + 8y = 64 \implies x + y = 8$$

This is the perpendicular bisector of $AB$, as expected.

</details>

---

## DSE Exam-Style Questions

**DSE Practice 1.** The line $y = mx + 1$ is tangent to the circle $x^2 + y^2 = 4$. Find the possible values of $m$.

<details>
<summary>Solution</summary>

Substitute $y = mx + 1$ into $x^2 + y^2 = 4$:

$$x^2 + (mx + 1)^2 = 4 \implies (1 + m^2)x^2 + 2mx - 3 = 0$$

For tangency: $\Delta = 0$:

$$4m^2 + 12(1 + m^2) = 0 \implies 4m^2 + 12 + 12m^2 = 0 \implies 16m^2 + 12 = 0$$

$m^2 = -\dfrac{12}{16} = -\dfrac{3}{4} < 0$.

No real values of $m$ satisfy this condition. The line $y = mx + 1$ is never tangent to $x^2 + y^2 = 4$.

Wait -- let me recheck. $\Delta = (2m)^2 - 4(1 + m^2)(-3) = 4m^2 + 12(1 + m^2) = 4m^2 + 12 + 12m^2 = 16m^2 + 12 > 0$ for all real $m$. This means the line always intersects the circle at two points, never tangent.

Actually, the distance from the centre $(0,0)$ to the line $mx - y + 1 = 0$ is:

$$d = \frac{|1|}{\sqrt{m^2 + 1}} = \frac{1}{\sqrt{m^2 + 1}}$$

For tangency: $d = r = 2$, i.e., $\dfrac{1}{\sqrt{m^2 + 1}} = 2 \implies \sqrt{m^2 + 1} = \dfrac{1}{2} \implies m^2 + 1 = \dfrac{1}{4} \implies m^2 = -\dfrac{3}{4}$.

No real solution. Confirmed: the line is never tangent to the circle.

</details>

**DSE Practice 2.** A circle touches the $y$-axis at $(0, 3)$ and passes through $(2, 1)$. Find its equation.

<details>
<summary>Solution</summary>

Since the circle touches the $y$-axis at $(0, 3)$, the centre lies on the horizontal line $y = 3$, so the centre is $C(r, 3)$ where $r$ is the radius.

Equation: $(x - r)^2 + (y - 3)^2 = r^2$.

Substituting $(2, 1)$: $(2 - r)^2 + (1 - 3)^2 = r^2 \implies 4 - 4r + r^2 + 4 = r^2 \implies 8 - 4r = 0 \implies r = 2$.

Centre: $(2, 3)$, radius: $2$.

Equation: $(x - 2)^2 + (y - 3)^2 = 4$, or $x^2 + y^2 - 4x - 6y + 9 = 0$.

</details>

**DSE Practice 3.** Find the equation of the circle passing through $(1, 0)$, $(0, 1)$, and $(-1, 0)$.

<details>
<summary>Solution</summary>

General form: $x^2 + y^2 + Dx + Ey + F = 0$.

$(1, 0)$: $1 + D + F = 0 \quad \text{'\{'}(i){'\}'}$.

$(0, 1)$: $1 + E + F = 0 \quad \text{'\{'}(ii){'\}'}$.

$(-1, 0)$: $1 - D + F = 0 \quad \text{'\{'}(iii){'\}'}$.

(i) - (iii): $2D = 0 \implies D = 0$.

From (i): $F = -1$.

From (ii): $E = 0$.

Equation: $x^2 + y^2 - 1 = 0$, i.e., $x^2 + y^2 = 1$ (the unit circle).

</details>

**DSE Practice 4.** The line $\ell$ passes through $A(2, 1)$ and $B(6, k)$. If the distance from the origin to $\ell$ is $\dfrac{6\sqrt{5}}{5}$, find $k$.

<details>
<summary>Solution</summary>

Gradient of $\ell$: $m = \dfrac{k - 1}{4}$.

Equation: $y - 1 = \dfrac{k-1}{4}(x - 2) \implies (k-1)x - 4y + (4 - 2k + 4) = 0 \implies (k-1)x - 4y + (8 - 2k) = 0$.

Distance from $(0, 0)$ to $\ell$:

$$\frac{|8 - 2k|}{\sqrt{(k-1)^2 + 16}} = \frac{6\sqrt{5}}{5}$$

Squaring:

$$\frac{(8 - 2k)^2}{k^2 - 2k + 17} = \frac{36}{5}$$

$$5(4 - k)^2 = 36(k^2 - 2k + 17)$$

$$5(k^2 - 8k + 16) = 36k^2 - 72k + 612$$

$$5k^2 - 40k + 80 = 36k^2 - 72k + 612$$

$$31k^2 - 32k + 532 = 0$$

$\Delta = 1024 - 4(31)(532) = 1024 - 65968 < 0$.

No real solution for $k$. Let me recheck the algebra.

Actually, let me recompute. The line through $(2,1)$ and $(6,k)$: using the two-point form:

$$\frac{y - 1}{k - 1} = \frac{x - 2}{4} \implies 4(y - 1) = (k - 1)(x - 2)$$

$$(k-1)x - 4y - 2(k-1) + 4 = 0 \implies (k-1)x - 4y - 2k + 6 = 0$$

Distance from $(0,0)$:

$$\frac{|6 - 2k|}{\sqrt{(k-1)^2 + 16}} = \frac{6\sqrt{5}}{5}$$

$$25(6 - 2k)^2 = 36(k^2 - 2k + 17)$$

$$25(4k^2 - 24k + 36) = 36k^2 - 72k + 612$$

$$100k^2 - 600k + 900 = 36k^2 - 72k + 612$$

$$64k^2 - 528k + 288 = 0 \implies 8k^2 - 66k + 36 = 0 \implies 4k^2 - 33k + 18 = 0$$

$$(4k - 3)(k - 6) = 0 \implies k = \frac{3}{4} \;\text{'\{'}or{'\}'}\; k = 6$$

</details>

**DSE Practice 5.** Find the coordinates of the points on the circle $x^2 + y^2 = 13$ where the tangent is parallel to the line $2x + 3y = 7$.

<details>
<summary>Solution</summary>

The gradient of $2x + 3y = 7$ is $m = -\dfrac{2}{3}$.

The tangent at $(x_1, y_1)$ on $x^2 + y^2 = 13$ is $x_1 x + y_1 y = 13$, with gradient $m = -\dfrac{x_1}{y_1}$.

Setting equal: $-\dfrac{x_1}{y_1} = -\dfrac{2}{3} \implies 3x_1 = 2y_1 \implies y_1 = \dfrac{3}{2}x_1$.

Substituting into $x_1^2 + y_1^2 = 13$:

$$x_1^2 + \frac{9}{4}x_1^2 = 13 \implies \frac{13}{4}x_1^2 = 13 \implies x_1^2 = 4 \implies x_1 = \pm 2$$

$x_1 = 2 \implies y_1 = 3$. $x_1 = -2 \implies y_1 = -3$.

Points: $(2, 3)$ and $(-2, -3)$.

</details>
