---
title: Geometries
description:
  'DSE Maths Geometries notes covering key definitions, core concepts, worked examples, and practice
  questions for systematic revision and exam readiness.'
date: 2025-06-03T16:20:00.000Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: geometries
---

Coordinate geometry provides a bridge between algebraic equations and geometric figures, enabling
The use of algebraic methods to solve geometric problems and vice versa.

## 2D Coordinate Geometry

### The Rectangular Coordinate System

In the Cartesian plane, every point $P$ is uniquely identified by an ordered pair $(x, y)$Where $x$
is the horizontal coordinate (abscissa) and $y$ is the vertical coordinate (ordinate). The axes
Divide the plane into four quadrants, numbered counterclockwise from the positive $x$-axis.

### Distance Formula

The distance between two points $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$ is derived from the
[Pythagorean identity](trigonometry#pythagorean-identity) applied to the right triangle formed By
the horizontal and vertical differences:

$$
\begin{aligned}
 d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Distance between $A(3, 4)$ and $B(7, 1)$: $d = \sqrt{(7-3)^2 + (1-4)^2} = \sqrt{16 + 9} = 5$
- Distance between $O(0, 0)$ and $P(5, 12)$: $d = \sqrt{5^2 + 12^2} = 13$
- Verify that the points $A(0, 0)$$B(3, 4)$$C(6, 8)$ are collinear: $AB = 5$$BC = 5$$AC = 10$. Since $AB + BC = AC$The points are collinear.

### Midpoint Formula

The midpoint $M$ of the line segment joining $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$ is:

$$
\begin{aligned}
 M = \left( \frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2} \right)
\end{aligned}
$$

The midpoint is the average of the respective coordinates of the two endpoints.

</details>
<summary>Examples</summary>
- Midpoint of $A(2, 6)$ and $B(8, -4)$: $M = \left( \frac{2+8}{2}, \frac{6+(-4)}{2} \right) = (5, 1)$
- If $M(4, -1)$ is the midpoint of $A(1, 3)$ and $B$Then $B = (2 \times 4 - 1, 2 \times (-1) - 3) = (7, -5)$

### Gradient (Slope)

The gradient $m$ of the line passing through $P_1(x_1, y_1)$ and $P_2(x_2, y_2)$Where
$x_1 \neq x_2$Measures the rate of change of $y$ with respect to $x$:

$$
\begin{aligned}
 m = \frac{y_2 - y_1}{x_2 - x_1} = \tan\theta
\end{aligned}
$$

Where $\theta$ is the angle the line makes with the positive $x$-axis. A vertical line (where
$x_1 = x_2$) has an undefined gradient. Key gradient values include:

| Gradient  | Interpretation                          |
| --------- | --------------------------------------- |
| $m > 0$   | Line slopes upward from left to right   |
| $m < 0$   | Line slopes downward from left to right |
| $m = 0$   | Horizontal line ($y = c$)               |
| Undefined | Vertical line ($x = c$)                 |

<details>
<summary>Examples</summary>
- Gradient of the line through $A(1, 2)$ and $B(4, 8)$: $m = \frac{8-2}{4-1} = 2$
- A line with gradient $\frac{3}{4}$ passing through $(1, 5)$: using $y - y_1 = m(x - x_1)$The equation is $y - 5 = \frac{3}{4}(x - 1)$I.e., $3x - 4y + 17 = 0$

### Division of a Line Segment

If point $P(x, y)$ divides the line segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ in the ratio
$m : n$ (internally), then:

$$
\begin{aligned}
 x = \frac{mx_2 + nx_1}{m + n}, \qquad y = \frac{my_2 + ny_1}{m + n}
\end{aligned}
$$

The midpoint formula is the special case where $m = n = 1$.

## Equations of Straight Lines

A straight line in the Cartesian plane can be expressed in several equivalent forms.

### Slope-Intercept Form

$$
\begin{aligned}
 y = mx + c
\end{aligned}
$$

Where $m$ is the gradient and $c$ is the $y$-intercept. This form is most useful when the gradient
And $y$-intercept are known or can be determined.

### Point-Slope Form

Given a point $(x_1, y_1)$ on the line and the gradient $m$:

$$
\begin{aligned}
 y - y_1 = m(x - x_1)
\end{aligned}
$$

This is the most versatile form for deriving the equation of a line from partial information.

### Two-Point Form

Given two distinct points $(x_1, y_1)$ and $(x_2, y_2)$ on the line:

$$
\begin{aligned}
 \frac{y - y_1}{x - x_1} = \frac{y_2 - y_1}{x_2 - x_1}
\end{aligned}
$$

### Intercept Form

If the line has $x$-intercept $a$ and $y$-intercept $b$ (both non-zero):

$$
\begin{aligned}
 \frac{x}{a} + \frac{y}{b} = 1
\end{aligned}
$$

### General Form

Every straight line can be written in the general form:

$$
\begin{aligned}
 Ax + By + C = 0
\end{aligned}
$$

Where $A$$B$$C$ are constants and $A$ and $B$ are not both zero. The gradient is $m = -\frac{A}{B}$
and the $y$-intercept is $c = -\frac{C}{B}$ (when $B \neq 0$).

</details>
<summary>Examples</summary>
- Find the equation of the line through $(2, 3)$ and $(6, -1)$: $m = \frac{-1 - 3}{6 - 2} = -1$. Equation: $y - 3 = -1(x - 2)$I.e., $x + y - 5 = 0$
- Find the equation of the line with gradient $\frac{1}{2}$ and $y$-intercept $-3$: $y = \frac{1}{2}x - 3$I.e., $x - 2y - 6 = 0$
- Convert $3x + 4y - 12 = 0$ to intercept form: $\frac{x}{4} + \frac{y}{3} = 1$. The $x$-intercept is $4$ and the $y$-intercept is $3$.

## Parallel and Perpendicular Lines

### Parallel Lines

Two non-vertical lines with gradients $m_1$ and $m_2$ are parallel if and only if their gradients
Are equal:

$$
\begin{aligned}
 m_1 = m_2
\end{aligned}
$$

In the general form $Ax + By + C = 0$Two lines $A_1x + B_1y + C_1 = 0$ and $A_2x + B_2y + C_2 = 0$
Are parallel if and only if:

$$
\begin{aligned}
 \frac{A_1}{A_2} = \frac{B_1}{B_2} \neq \frac{C_1}{C_2}
\end{aligned}
$$

If all three ratios are equal, the lines are coincident (the same line).

### Perpendicular Lines

Two non-vertical lines with gradients $m_1$ and $m_2$ are perpendicular if and only if the product
Of their gradients equals $-1$:

$$
\begin{aligned}
 m_1 \cdot m_2 = -1
\end{aligned}
$$

In the general form, two lines are perpendicular if and only if:

$$
\begin{aligned}
 A_1 A_2 + B_1 B_2 = 0
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Find the equation of the line through $(1, -2)$ parallel to $2x - 3y + 5 = 0$: The gradient of the given line is $m = \frac{2}{3}$. The parallel line is $y + 2 = \frac{2}{3}(x - 1)$I.e., $2x - 3y - 8 = 0$.
- Find the equation of the line through $(3, 1)$ perpendicular to $4x + y - 7 = 0$: The gradient of the given line is $m_1 = -4$So $m_2 = \frac{1}{4}$. The perpendicular line is $y - 1 = \frac{1}{4}(x - 3)$I.e., $x - 4y + 1 = 0$.
- Determine whether $3x + 2y - 1 = 0$ and $6x + 4y + 5 = 0$ are parallel: Since $\frac{3}{6} = \frac{2}{4} = \frac{1}{2} \neq \frac{-1}{5}$The lines are parallel but not coincident.

### Intersection of Two Lines

The point of intersection of two non-parallel lines $A_1x + B_1y + C_1 = 0$ and
$A_2x + B_2y + C_2 = 0$ is found by solving the system simultaneously. The coordinates $(x, y)$ of
The intersection satisfy both equations.

</details>
<summary>Examples</summary>
- Find the intersection of $x + y = 5$ and $2x - y = 1$: Adding gives $3x = 6$So $x = 2$$y = 3$. The intersection is $(2, 3)$.

## Circles

### Standard Form of the Equation of a Circle

A circle with centre $C(a, b)$ and radius $r$ has equation:

$$
\begin{aligned}
 (x - a)^2 + (y - b)^2 = r^2
\end{aligned}
$$

Expanding this yields the general form:

$$
\begin{aligned}
 x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0
\end{aligned}
$$

### General Form of the Equation of a Circle

$$
\begin{aligned}
 x^2 + y^2 + Dx + Ey + F = 0
\end{aligned}
$$

Where the centre is $\left(-\frac{D}{2}, -\frac{E}{2}\right)$ and the radius is:

$$
\begin{aligned}
 r = \sqrt{\left(\frac{D}{2}\right)^2 + \left(\frac{E}{2}\right)^2 - F}
\end{aligned}
$$

For a real circle to exist, we require
$\left(\frac{D}{2}\right)^2 + \left(\frac{E}{2}\right)^2 - F > 0$.

<details>
<summary>Examples</summary>
- Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$: Completing squares, $(x-3)^2 + (y+2)^2 = 25$. Centre $(3, -2)$Radius $5$.
- Find the equation of the circle with centre $(-1, 4)$ and radius $3$: $(x+1)^2 + (y-4)^2 = 9$.
- Find the equation of the circle with diameter endpoints $A(2, 3)$ and $B(8, 7)$: Centre is $M(5, 5)$Radius is $\frac{1}{2}\sqrt{(8-2)^2 + (7-3)^2} = \frac{1}{2}\sqrt{52} = \sqrt{13}$. Equation: $(x-5)^2 + (y-5)^2 = 13$.

### Finding the Equation of a Circle from Conditions

The equation of a circle can be determined when given:

- The centre and the radius (direct substitution)
- The centre and a point on the circle (use the distance formula to find $r$)
- Three points on the circle (solve the general form system)
- The endpoints of a diameter (centre is the midpoint, radius is half the distance)

### Intersection of a Line and a Circle

To find the points of intersection of the line $y = mx + c$ and the circle
$(x-a)^2 + (y-b)^2 = r^2$Substitute the line equation into the circle equation to obtain a Quadratic
in $x$ (or $y$). The discriminant $\Delta = b^2 - 4ac$ determines the nature of Intersection:

| Discriminant | Intersection                 |
| ------------ | ---------------------------- |
| $\Delta > 0$ | Two distinct points (secant) |
| $\Delta = 0$ | One point (tangent)          |
| $\Delta < 0$ | No real intersection         |

### Tangent to a Circle

A tangent to a circle at a point $P(x_1, y_1)$ on the circle $(x-a)^2 + (y-b)^2 = r^2$ is
Perpendicular to the radius at $P$. The gradient of the radius $CP$ (where $C$ is the centre) is:

$$
\begin{aligned}
 m_{\mathrm{radius}} = \frac{y_1 - b}{x_1 - a}
\end{aligned}
$$

Therefore the gradient of the tangent is:

$$
\begin{aligned}
 m_{\mathrm{tangent}} = -\frac{x_1 - a}{y_1 - b} \quad (y_1 \neq b)
\end{aligned}
$$

The equation of the tangent at $P(x_1, y_1)$ on the circle $x^2 + y^2 + Dx + Ey + F = 0$ can be
Obtained by replacing:

$$
\begin{aligned}
 x^2 \to xx_1, \quad y^2 \to yy_1, \quad x \to \frac{x + x_1}{2}, \quad y \to \frac{y + y_1}{2}
\end{aligned}
$$

This gives:

$$
\begin{aligned}
 xx_1 + yy_1 + \frac{D(x + x_1)}{2} + \frac{E(y + y_1)}{2} + F = 0
\end{aligned}
$$

</details>
<summary>Examples</summary>
- Find the equation of the tangent to $x^2 + y^2 = 25$ at $P(3, 4)$: The radius gradient is $\frac{4}{3}$So the tangent gradient is $-\frac{3}{4}$. Equation: $y - 4 = -\frac{3}{4}(x - 3)$I.e., $3x + 4y - 25 = 0$. Alternatively, using the formula: $3x + 4y = 25$.
- Determine whether the line $3x - 4y + 10 = 0$ is tangent to $(x-1)^2 + (y+2)^2 = 9$: Substitute $y = \frac{3x+10}{4}$ into the circle. The resulting quadratic has discriminant $\Delta = 0$Confirming tangency.

## 2D Measurements

### Triangles

For a triangle with base $b$ and height $h$:

$$
\begin{aligned}
 \mathrm{Area} &= \frac{1}{2}bh
\end{aligned}
$$

Using the [Heron's formula](trigonometry)) for a triangle with side lengths $a$$b$$c$ and
Semi-perimeter $s = \frac{a+b+c}{2}$:

$$
\begin{aligned}
 \mathrm{Area} = \sqrt{s(s-a)(s-b)(s-c)}
\end{aligned}
$$

The area of a triangle with vertices $(x_1, y_1)$$(x_2, y_2)$$(x_3, y_3)$ is given by:

$$
\begin{aligned}
 \mathrm{Area} = \frac{1}{2}\left| x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2) \right|
\end{aligned}
$$

### Quadrilaterals

| Figure                                        | Area                 | Perimeter        |
| --------------------------------------------- | -------------------- | ---------------- |
| Rectangle ($l \times w$)                      | $lw$                 | $2(l+w)$         |
| Parallelogram ($b$$h$)                        | $bh$                 | $2(a+b)$         |
| Rhombus (diagonals $d_1$$d_2$)                | $\frac{1}{2}d_1 d_2$ | $4s$             |
| Trapezium (parallel sides $a$$b$; height $h$) | $\frac{1}{2}(a+b)h$  | Sum of all sides |
| Square (side $s$)                             | $s^2$                | $4s$             |

### Circles

$$
\begin{aligned}
 \mathrm{Circumference} &= 2\pi r = \pi d \\
 \mathrm{Area} &= \pi r^2
\end{aligned}
$$

Where $r$ is the radius and $d = 2r$ is the diameter.

### Arcs and Sectors

For an arc subtending an angle $\theta$ (in radians) at the centre of a circle of radius $r$:

$$
\begin{aligned}
 \mathrm{Arc length} &= l = r\theta \\
 \mathrm{Area of sector} &= A = \frac{1}{2}r^2\theta
\end{aligned}
$$

When the angle is given in degrees ($\theta^\circ$), first convert to radians:
$\theta = \theta^\circ \times \frac{\pi}{180}$.

The area of a segment (the region between a chord and the corresponding arc) is:

$$
\begin{aligned}
 \mathrm{Area of segment} = \frac{1}{2}r^2(\theta - \sin\theta)
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Find the area and perimeter of a sector of radius $7\mathrm{ cm}$ with angle $120^\circ$: $\theta = \frac{2\pi}{3}$ rad. Area $= \frac{1}{2}(49)\left(\frac{2\pi}{3}\right) = \frac{49\pi}{3} \approx 51.3\mathrm{ cm}^2$. Arc length $= 7 \times \frac{2\pi}{3} = \frac{14\pi}{3} \approx 14.7\mathrm{ cm}$. Perimeter $= 14 + \frac{14\pi}{3} \approx 28.7\mathrm{ cm}$.
- A chord of length $8\mathrm{ cm}$ subtends an angle of $90^\circ$ at the centre. Find the area of the minor segment: $r = \frac{8}{\sqrt{2}} = 4\sqrt{2}\mathrm{ cm}$$\theta = \frac{\pi}{2}$. Area $= \frac{1}{2}(32)\left(\frac{\pi}{2} - 1\right) = 16\left(\frac{\pi}{2} - 1\right) = 8\pi - 16 \approx 9.13\mathrm{ cm}^2$.

## 3D Geometry

### The 3D Coordinate System

In three-dimensional space, each point is identified by an ordered triple $(x, y, z)$. The three
Coordinate axes --- $x$-axis, $y$-axis, and $z$-axis --- are mutually perpendicular and intersect at
The origin $O(0, 0, 0)$. The three planes $xy$-plane, $yz$-plane, and $zx$-plane divide the space
Into eight octants.

### Distance Formula in 3D

The distance between two points $P_1(x_1, y_1, z_1)$ and $P_2(x_2, y_2, z_2)$ in 3D space is:

$$
\begin{aligned}
 d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}
\end{aligned}
$$

The midpoint of the segment $P_1P_2$ is:

$$
\begin{aligned}
 M = \left( \frac{x_1 + x_2}{2},\; \frac{y_1 + y_2}{2},\; \frac{z_1 + z_2}{2} \right)
\end{aligned}
$$

</details>
<summary>Examples</summary>
- Distance between $A(1, 2, 3)$ and $B(4, 6, -3)$: $d = \sqrt{3^2 + 4^2 + (-6)^2} = \sqrt{9 + 16 + 36} = \sqrt{61}$
- Show that $A(0, 0, 0)$$B(1, 0, 0)$$C(0, 1, 0)$$D(0, 0, 1)$ form a **trirectangular tetrahedron**: $AB = AC = AD = 1$ (edges from the origin) and $BC = BD = CD = \sqrt{2}$ (edges of the base triangle $BCD$). It is not a regular tetrahedron — a regular tetrahedron would require all six edges to be equal. For a regular tetrahedron, use vertices such as $(1,1,1)$$(1,-1,-1)$$(-1,1,-1)$$(-1,-1,1)$.

### Equation of a Plane

The general equation of a plane in 3D is:

$$
\begin{aligned}
 Ax + By + Cz + D = 0
\end{aligned}
$$

Where the vector $\mathbf{n} = (A, B, C)$ is a normal vector to the plane. The plane can also be
Described in several forms:

- **Point-normal form**: Given a point $P_0(x_0, y_0, z_0)$ on the plane and normal
  $\mathbf{n} = (A, B, C)$:

$$
\begin{aligned}
 A(x - x_0) + B(y - y_0) + C(z - z_0) = 0
\end{aligned}
$$

- **Intercept form**: If the plane has $x$-intercept $a$$y$-intercept $b$And $z$-intercept $c$ (all
  non-zero):

$$
\begin{aligned}
 \frac{x}{a} + \frac{y}{b} + \frac{z}{c} = 1
\end{aligned}
$$

### Angles Between Lines and Planes

#### Angle Between a Line and a Plane

The angle $\phi$ between a line with direction vector $\mathbf{d} = (l, m, n)$ and a plane with
Normal $\mathbf{n} = (A, B, C)$ is defined as the complement of the angle between $\mathbf{d}$ and
$\mathbf{n}$:

$$
\begin{aligned}
 \sin\phi = \frac{|Al + Bm + Cn|}{\sqrt{A^2 + B^2 + C^2}\sqrt{l^2 + m^2 + n^2}}
\end{aligned}
$$

#### Angle Between Two Planes

The angle $\theta$ between two planes with normals $\mathbf{n_1} = (A_1, B_1, C_1)$ and
$\mathbf{n_2} = (A_2, B_2, C_2)$ is:

$$
\begin{aligned}
 \cos\theta = \frac{|A_1 A_2 + B_1 B_2 + C_1 C_2|}{\sqrt{A_1^2 + B_1^2 + C_1^2}\sqrt{A_2^2 + B_2^2 + C_2^2}}
\end{aligned}
$$

#### Angle Between Two Lines in 3D

For two lines with direction vectors $\mathbf{d_1} = (l_1, m_1, n_1)$ and
$\mathbf{d_2} = (l_2, m_2, n_2)$:

$$
\begin{aligned}
 \cos\theta = \frac{|l_1 l_2 + m_1 m_2 + n_1 n_2|}{\sqrt{l_1^2 + m_1^2 + n_1^2}\sqrt{l_2^2 + m_2^2 + n_2^2}}
\end{aligned}
$$

#### Distance from a Point to a Plane

The perpendicular distance from point $P(x_0, y_0, z_0)$ to the plane $Ax + By + Cz + D = 0$ is:

$$
\begin{aligned}
 d = \frac{|Ax_0 + By_0 + Cz_0 + D|}{\sqrt{A^2 + B^2 + C^2}}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Find the distance from $P(1, 2, -1)$ to the plane $2x - y + 2z + 3 = 0$: $d = \frac{|2(1) - 1(2) + 2(-1) + 3|}{\sqrt{4 + 1 + 4}} = \frac{|2 - 2 - 2 + 3|}{3} = \frac{1}{3}$.
- Find the angle between the planes $x + y + z = 1$ and $2x - y + z = 0$: $\cos\theta = \frac{|1\cdot 2 + 1\cdot(-1) + 1\cdot 1|}{\sqrt{3}\sqrt{6}} = \frac{2}{3\sqrt{2}} = \frac{\sqrt{2}}{3}$. So $\theta = \arccos\left(\frac{\sqrt{2}}{3}\right) \approx 61.9^\circ$.
- Find the equation of the plane through $(1, 0, 2)$$(0, 1, -1)$And $(2, 1, 1)$: direction vectors $\overrightarrow{AB} = (-1, 1, -3)$ and $\overrightarrow{AC} = (1, 1, -1)$. Cross product: $\overrightarrow{AB} \times \overrightarrow{AC} = (2, -4, -2)$So normal $\mathbf{n} = (1, -2, -1)$. The plane is $x - 2y - z = -1$.

---

</details>
<summary>Wrap-up Questions</summary>
1. **Question:** Find the equation of the perpendicular bisector of the line segment joining
 $A(3, -1)$ and $B(7, 5)$.
### Details
<summary>Answer</summary>
- Midpoint: $M = \left(\frac{3+7}{2}, \frac{-1+5}{2}\right) = (5, 2)$.
- Gradient of $AB$: $m_{AB} = \frac{5 - (-1)}{7 - 3} = \frac{3}{2}$.
- Gradient of perpendicular bisector: $m = -\frac{2}{3}$.
- Equation: $y - 2 = -\frac{2}{3}(x - 5)$I.e., $2x + 3y - 16 = 0$.

2. **Question:** Find the equation of the circle passing through the three points $A(0, 0)$
$B(4, 0)$And $C(0, 3)$.
<details>
<summary>Answer</summary>

- Let the circle be $x^2 + y^2 + Dx + Ey + F = 0$.
- Substituting $A(0,0)$: $F = 0$.
- Substituting $B(4,0)$: $16 + 4D = 0 \implies D = -4$.
- Substituting $C(0,3)$: $9 + 3E = 0 \implies E = -3$.
- Equation: $x^2 + y^2 - 4x - 3y = 0$I.e.,
  $(x-2)^2 + \left(y - \frac{3}{2}\right)^2 = \frac{25}{4}$.
- Centre $\left(2, \frac{3}{2}\right)$Radius $\frac{5}{2}$.

3. **Question:** The line $y = 2x + k$ is tangent to the circle $x^2 + y^2 - 4x - 2y + 1 = 0$. Find
The value(s) of $k$.
</details>
<summary>Answer</summary>

- Substitute $y = 2x + k$ into $(x-2)^2 + (y-1)^2 = 4$:
- $(x-2)^2 + (2x + k - 1)^2 = 4$.
- Expanding: $x^2 - 4x + 4 + 4x^2 + 4(k-1)x + (k-1)^2 = 4$.
- $5x^2 + (4k - 8)x + (k^2 - 2k + 1) = 0$.
- For tangency, $\Delta = 0$: $(4k-8)^2 - 4(5)(k^2 - 2k + 1) = 0$.
- $16k^2 - 64k + 64 - 20k^2 + 40k - 20 = 0$.
- $-4k^2 - 24k + 44 = 0 \implies k^2 + 6k - 11 = 0$.
- $k = \frac{-6 \pm \sqrt{36 + 44}}{2} = -3 \pm \sqrt{14}$.

4. **Question:** A sector of a circle of radius $12\mathrm{ cm}$ has an arc length of
$16\pi\mathrm{ cm}$. Find the area of the sector and the area of the corresponding segment if the
Chord length is $20\mathrm{ cm}$.
<details>
<summary>Answer</summary>

- Arc length $l = r\theta$: $16\pi = 12\theta \implies \theta = \frac{4\pi}{3}$ rad.
- Area of sector:
  $A = \frac{1}{2}r^2\theta = \frac{1}{2}(144)\left(\frac{4\pi}{3}\right) = 96\pi \mathrm{ cm}^2$.
- Area of triangle formed by the radii and chord: Using the chord length $c = 20$The triangle has
  sides $12$$12$$20$. Semi-perimeter $s = 22$. By Heron's formula: Area
  $= \sqrt{22 \times 10 \times 10 \times 2} = \sqrt{4400} = 20\sqrt{11} \mathrm{ cm}^2$.
- Alternatively, the perpendicular from centre to chord: $h = \sqrt{12^2 - 10^2} = 2\sqrt{11}$.
  Triangle area $= \frac{1}{2} \times 20 \times 2\sqrt{11} = 20\sqrt{11}$.
- Area of segment $= 96\pi - 20\sqrt{11} \approx 247.3 \mathrm{ cm}^2$.

5. **Question:** Find the angle between the line joining $A(1, 2, 3)$ and $B(4, 5, 6)$ and the plane
$x + y + z = 1$.
</details>
<summary>Answer</summary>

- Direction vector of the line: $\mathbf{d} = (4-1, 5-2, 6-3) = (3, 3, 3)$Simplified to $(1, 1, 1)$.
- Normal of the plane: $\mathbf{n} = (1, 1, 1)$.
- The angle $\alpha$ between $\mathbf{d}$ and $\mathbf{n}$:
  $\cos\alpha = \frac{|1+1+1|}{\sqrt{3}\sqrt{3}} = \frac{3}{3} = 1$So $\alpha = 0^\circ$.
- The angle $\phi$ between the line and the plane is the complement:
  $\phi = 90^\circ - 0^\circ = 90^\circ$.
- The line is parallel to the plane (perpendicular to the normal).

6. **Question:** Points $A(1, 2)$$B(4, 6)$And $C(7, 4)$ are vertices of a triangle. Find the
Equation of the altitude from $A$ to $BC$The area of triangle $ABC$And the length of the Altitude
from $A$.
<details>
<summary>Answer</summary>

- Gradient of $BC$: $m_{BC} = \frac{4-6}{7-4} = -\frac{2}{3}$.
- Gradient of altitude from $A$: $m = \frac{3}{2}$ (negative reciprocal).
- Equation of altitude: $y - 2 = \frac{3}{2}(x - 1)$I.e., $3x - 2y + 1 = 0$.
- Area of $\triangle ABC$:
  $\frac{1}{2}|1(6-4) + 4(4-2) + 7(2-6)| = \frac{1}{2}|2 + 8 - 28| = \frac{1}{2}(18) = 9$ square
  units.
- Length of $BC$: $\sqrt{(7-4)^2 + (4-6)^2} = \sqrt{9 + 4} = \sqrt{13}$.
- Altitude from $A$:
  $\frac{2 \times \mathrm{Area}}{BC} = \frac{18}{\sqrt{13}} = \frac{18\sqrt{13}}{13}$.

7. **Question:** Find the equation of the circle which touches the $x$-axis at $(3, 0)$ and passes
Through $(1, 4)$.
</details>
<summary>Answer</summary>

- Since the circle touches the $x$-axis at $(3, 0)$The centre lies on the vertical line $x = 3$ so
  the centre is $C(3, r)$ where $r$ is the radius.
- The circle equation is $(x-3)^2 + (y-r)^2 = r^2$.
- Substituting $(1, 4)$: $(1-3)^2 + (4-r)^2 = r^2$.
- $4 + 16 - 8r + r^2 = r^2 \implies 20 - 8r = 0 \implies r = \frac{5}{2}$.
- Centre: $(3, \frac{5}{2})$Radius: $\frac{5}{2}$.
- Equation: $(x-3)^2 + \left(y - \frac{5}{2}\right)^2 = \frac{25}{4}$I.e.,
  $x^2 + y^2 - 6x - 5y + 9 = 0$.

8. **Question:** The vertices of a triangle are $A(2, 1, -1)$$B(0, 3, -4)$And $C(5, 0, 2)$. Find (a)
the length of each side, (b) the area of the triangle, and (c) the equation of the plane Containing
the triangle.
<details>
<summary>Answer</summary>

- (a) Side lengths:
- $AB = \sqrt{(0-2)^2 + (3-1)^2 + (-4+1)^2} = \sqrt{4 + 4 + 9} = \sqrt{17}$
- $BC = \sqrt{(5-0)^2 + (0-3)^2 + (2+4)^2} = \sqrt{25 + 9 + 36} = \sqrt{70}$
- $CA = \sqrt{(2-5)^2 + (1-0)^2 + (-1-2)^2} = \sqrt{9 + 1 + 9} = \sqrt{19}$
- (b) Using the cross product method: $\overrightarrow{AB} = (-2, 2, -3)$
  $\overrightarrow{AC} = (3, -1, 3)$.
- $\overrightarrow{AB} \times \overrightarrow{AC} = (2 \cdot 3 - (-3)(-1),\; (-3) \cdot 3 - (-2) \cdot 3,\; (-2)(-1) - 2 \cdot 3) = (3, -3, -4)$.
- Area
  $= \frac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \frac{1}{2}\sqrt{9 + 9 + 16} = \frac{\sqrt{34}}{2}$.
- (c) The normal vector is $(3, -3, -4)$. Using point $A(2, 1, -1)$: $3(x-2) - 3(y-1) - 4(z+1) = 0$
  I.e., $3x - 3y - 4z - 8 = 0$.

9. **Question:** Two circles $C_1: x^2 + y^2 - 4x + 2y - 4 = 0$ and
$C_2: x^2 + y^2 + 2x - 6y + 6 = 0$ intersect at points $A$ and $B$. Find the equation of the common
Chord $AB$ and the coordinates of $A$ and $B$.
</details>
<summary>Answer</summary>

- Common chord: Subtract the two equations: $(-4x + 2y - 4) - (2x - 6y + 6) = 0$.
- $-6x + 8y - 10 = 0$I.e., $3x - 4y + 5 = 0$.
- From $C_1$: $(x-2)^2 + (y+1)^2 = 9$. Substitute $y = \frac{3x+5}{4}$:
- $(x-2)^2 + \left(\frac{3x+5}{4} + 1\right)^2 = 9$.
- $(x-2)^2 + \left(\frac{3x+9}{4}\right)^2 = 9$.
- Multiply by $16$: $16(x-2)^2 + (3x+9)^2 = 144$.
- $16(x^2 - 4x + 4) + 9x^2 + 54x + 81 = 144$.
- $25x^2 - 10x + 145 = 144$.
- $25x^2 - 10x + 1 = 0$.
- Discriminant $= 100 - 100 = 0$So the circles are tangent (touch at exactly one point).
- $x = \frac{10}{50} = \frac{1}{5}$$y = \frac{3(1/5) + 5}{4} = \frac{28}{20} = \frac{7}{5}$.
- The circles touch at $\left(\frac{1}{5}, \frac{7}{5}\right)$.

10. **Question:** A rectangle $ABCD$ has vertices $A(1, 1)$$B(5, 1)$And $C(5, 4)$. Find the
Coordinates of $D$ and the area of the rectangle.
<details>
<summary>Answer</summary>

- $AB$ is horizontal: $AB = 5 - 1 = 4$. $BC$ is vertical: $BC = 4 - 1 = 3$.
- Verify: $AB^2 + BC^2 = 16 + 9 = 25 = AC^2$So $\angle ABC = 90^\circ$. ✓
- The diagonal is $AC$ with midpoint $M = \left(\frac{1+5}{2}, \frac{1+4}{2}\right) = (3, 2.5)$.
- $D$ is such that $M$ is also the midpoint of $CD$:
  $D = (2M_x - C_x, 2M_y - C_y) = (6 - 5, 5 - 4) = (1, 4)$.
- Area $= AB \times BC = 4 \times 3 = 12$ square units.

11. **Question:** A solid metal cone has base radius $6\mathrm{ cm}$ and slant height
$10\mathrm{ cm}$. A sector is cut from a circular sheet of metal to form the curved surface. Find
(a) the angle of the sector, (b) the radius of the circular sheet, and (c) the area of the sector.
</details>
<summary>Answer</summary>

- (a) The arc length of the sector equals the circumference of the base: $l = 2\pi(6) = 12\pi$.
- The sector radius equals the slant height: $r = 10\mathrm{ cm}$.
- $l = r\theta \implies 12\pi = 10\theta \implies \theta = \frac{6\pi}{5}$ rad $= 216^\circ$.
- (b) The radius of the circular sheet is the slant height: $10\mathrm{ cm}$.
- (c) Area of sector:
  $A = \frac{1}{2}r^2\theta = \frac{1}{2}(100)\left(\frac{6\pi}{5}\right) = 60\pi \mathrm{ cm}^2$.

12. **Question:** Prove that the points $A(-2, 0)$$B(0, 4)$$C(6, 2)$And $D(4, -2)$ are the Vertices
of a rectangle. Find the equation of the circle passing through all four vertices.
<details>
<summary>Answer</summary>

- Midpoint of $AC = \left(\frac{-2+6}{2}, \frac{0+2}{2}\right) = (2, 1)$.
- Midpoint of $BD = \left(\frac{0+4}{2}, \frac{4+(-2)}{2}\right) = (2, 1)$.
- Since the diagonals bisect each other, $ABCD$ is a parallelogram.
- $AB = \sqrt{4 + 16} = 2\sqrt{5}$$BC = \sqrt{36 + 4} = 2\sqrt{10}$
  $AC = \sqrt{64 + 4} = 2\sqrt{17}$.
- $AB^2 + BC^2 = 20 + 40 = 60 = AC^2$. The parallelogram has a right angle, so $ABCD$ is a
  rectangle.
- The circle through all four vertices (circumcircle) has centre at the intersection of the
  diagonals $(2, 1)$ and radius $= \frac{1}{2}AC = \sqrt{17}$.
- Equation: $(x-2)^2 + (y-1)^2 = 17$I.e., $x^2 + y^2 - 4x - 2y - 12 = 0$.
</details>

---

:::tip Diagnostic Test Ready to test your understanding of **Geometries**? The contains the hardest questions within
the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Geometries
with other DSE mathematics topics to test synthesis under exam conditions.

See for instructions on
self-marking and building a personal test matrix.

---

## DSE Exam Technique

### Showing Working

For geometry problems in DSE Paper 1:

1. When using the distance or midpoint formula, write the formula before substituting.
2. When finding the equation of a line, state the gradient and a point, then apply the point-slope
   form.
3. For circle problems, show the completing-the-square steps to find centre and radius.
4. For 3D problems, identify the right-angled triangles used and label the diagram.
5. For area problems, show which formula is being used and justify the values substituted.

### Significant Figures

Length answers to 3 significant figures unless exact. Angle answers to nearest degree or 3 s.f. As
appropriate.

### Common DSE Question Types

1. **Circle equations** (finding centre, radius, tangent equations).
2. **2D area problems** (shoelace formula, Heron's formula).
3. **3D distance and angle** problems.
4. **Arc length and sector area** calculations.
5. **Parallel/perpendicular line** problems.

---

## Additional Worked Examples

**Worked Example 13: Two circles touching externally**

Circle $C_1$ has centre $(1, 2)$ and radius $3$. Circle $C_2$ has centre $(7, 2)$ and radius $r$. If
$C_1$ and $C_2$ touch externally, find $r$.

<details>
<summary>Solution</summary>

For external tangency, the distance between centres equals the sum of the radii:

$$d = \sqrt{(7 - 1)^2 + (2 - 2)^2} = 6$$

$$3 + r = 6 \implies r = 3$$

</details>

**Worked Example 14: Area of a regular hexagon**

A regular hexagon has side length $a$. Find its area in terms of $a$.

<details>
<summary>Solution</summary>

A regular hexagon can be divided into 6 equilateral triangles, each with side $a$.

Area of one equilateral triangle: $\dfrac{\sqrt{3}}{4}a^2$.

Total area: $6 \times \dfrac{\sqrt{3}}{4}a^2 = \dfrac{3\sqrt{3}}{2}a^2$.

</details>

**Worked Example 15: Shortest distance between skew lines (3D)**

In 3D, find the distance between the point $P(1, 2, 3)$ and the line through $A(4, 5, 6)$ and
$B(7, 8, 9)$.

<details>
<summary>Solution</summary>

Direction vector of the line: $\mathbf{d} = (3, 3, 3)$Simplified to $(1, 1, 1)$.

Vector $\overrightarrow{AP} = (1 - 4, 2 - 5, 3 - 6) = (-3, -3, -3)$.

The cross product $\overrightarrow{AP} \times \mathbf{d} = (-3, -3, -3) \times (1, 1, 1)$.

Since $\overrightarrow{AP}$ is parallel to $\mathbf{d}$ (one is $-3$ times the other), the point $P$
lies on the line.

The distance is $0$.

Verification: $P$ lies on the line through $A$ in direction $(1,1,1)$ since
$(1, 2, 3) = (4, 5, 6) + (-1)(1, 1, 1)$. So $P$ is on the line and the distance is $0$.

</details>

**Worked Example 16: 3D tetrahedron volume**

Find the volume of the tetrahedron with vertices $A(0, 0, 0)$$B(2, 0, 0)$$C(0, 3, 0)$$D(0, 0, 4)$.

<details>
<summary>Solution</summary>

The volume of a tetrahedron with vertices at the origin and on the coordinate axes is:

$$V = \frac{1}{6}|x_B \cdot y_C \cdot z_D| = \frac{1}{6}(2)(3)(4) = 4$$

Alternatively, using the scalar triple product:

$$V = \frac{1}{6}|\overrightarrow{AB} \cdot (\overrightarrow{AC} \times \overrightarrow{AD})| = \frac{1}{6}|(2, 0, 0) \cdot ((0, 3, 0) \times (0, 0, 4))|$$

$$(0, 3, 0) \times (0, 0, 4) = (12, 0, 0)$$

$$V = \frac{1}{6}|(2)(12)| = \frac{1}{6}(24) = 4$$

</details>

**Worked Example 17: Angle between two lines in 3D**

Find the angle between the lines joining $A(1, 0, 0)$ to $B(0, 1, 0)$ and $A$ to $C(0, 0, 1)$.

<details>
<summary>Solution</summary>

$\overrightarrow{AB} = (-1, 1, 0)$$\overrightarrow{AC} = (-1, 0, 1)$.

$$\cos\theta = \frac{|(-1)(-1) + (1)(0) + (0)(1)|}{\sqrt{1 + 1 + 0} \cdot \sqrt{1 + 0 + 1}} = \frac{1}{\sqrt{2}\sqrt{2}} = \frac{1}{2}$$

$$\theta = 60^\circ$$

</details>

**Worked Example 18: Equation of tangent to a circle with general form**

Find the equation of the tangent to $x^2 + y^2 - 4x + 6y - 12 = 0$ at the point $(5, 1)$.

<details>
<summary>Solution</summary>

First verify $(5, 1)$ lies on the circle: $25 + 1 - 20 + 6 - 12 = 0$. Confirmed.

Using the tangent formula for the general circle equation $x^2 + y^2 + Dx + Ey + F = 0$:

Replace $x^2 \to x \cdot 5$$y^2 \to y \cdot 1$$x \to \dfrac{x + 5}{2}$$y \to \dfrac{y + 1}{2}$:

$$5x + y - 4\cdot\frac{x + 5}{2} + 6\cdot\frac{y + 1}{2} - 12 = 0$$

$$5x + y - 2x - 10 + 3y + 3 - 12 = 0$$

$$3x + 4y - 19 = 0$$

</details>

---

## DSE Exam-Style Questions

**DSE Practice 1.** Find the equation of the circle which passes through $(0, 0)$ and $(0, 4)$ and
has its centre on the line $x - y + 2 = 0$.

<details>
<summary>Solution</summary>

Let the centre be $C(h, k)$. Since $C$ lies on $x - y + 2 = 0$: $h - k + 2 = 0 \implies k = h + 2$.

$CA^2 = CB^2$ where $A = (0, 0)$ and $B = (0, 4)$:

$$h^2 + k^2 = h^2 + (k - 4)^2 \implies k^2 = k^2 - 8k + 16 \implies 8k = 16 \implies k = 2$$

$h = k - 2 = 0$.

Centre: $(0, 2)$. $r^2 = 0^2 + 2^2 = 4$.

Equation: $x^2 + (y - 2)^2 = 4$Or $x^2 + y^2 - 4y = 0$.

</details>

**DSE Practice 2.** In $\triangle ABC$$A = (1, -2)$$B = (5, 4)$And $C = (8, 1)$. Find the equation
of the median from $A$ and the equation of the altitude from $B$.

<details>
<summary>Solution</summary>

**Median from $A$:** Midpoint of $BC$:
$M = \left(\dfrac{5+8}{2}, \dfrac{4+1}{2}\right) = (6.5, 2.5)$.

Gradient of $AM$: $m = \dfrac{2.5 - (-2)}{6.5 - 1} = \dfrac{4.5}{5.5} = \dfrac{9}{11}$.

Equation: $y + 2 = \dfrac{9}{11}(x - 1) \implies 11y + 22 = 9x - 9 \implies 9x - 11y - 31 = 0$.

**Altitude from $B$:** Gradient of $AC$: $m_{AC} = \dfrac{1 - (-2)}{8 - 1} = \dfrac{3}{7}$.

Gradient of altitude: $m_\perp = -\dfrac{7}{3}$.

Equation through $B(5, 4)$:
$y - 4 = -\dfrac{7}{3}(x - 5) \implies 3y - 12 = -7x + 35 \implies 7x + 3y - 47 = 0$.

</details>

**DSE Practice 3.** A sector of a circle of radius $10\mathrm{ cm}$ has perimeter $30\mathrm{ cm}$.
Find the area of the sector.

<details>
<summary>Solution</summary>

Perimeter of sector $= 2r + r\theta = 20 + 10\theta = 30$.

$10\theta = 10 \implies \theta = 1$ rad.

$$\mathrm{Area} = \frac{1}{2}r^2\theta = \frac{1}{2}(100)(1) = 50\mathrm{ cm}^2$$

</details>

**DSE Practice 4.** Two circles $C_1: (x - 1)^2 + y^2 = 9$ and $C_2: (x - 5)^2 + y^2 = 25$ intersect
at $A$ and $B$. Find the length of the common chord $AB$.

<details>
<summary>Solution</summary>

Centres: $O_1 = (1, 0)$$O_2 = (5, 0)$. Radii: $r_1 = 3$$r_2 = 5$.

Distance between centres: $d = 4$.

The common chord is perpendicular to $O_1O_2$ (the $x$-axis) and passes through the midpoint.

By symmetry, the common chord is the line $x = c$ for some $c$.

Substituting $x = c$ into $C_1$: $(c - 1)^2 + y^2 = 9 \implies y^2 = 9 - (c - 1)^2$.

Substituting $x = c$ into $C_2$: $(c - 5)^2 + y^2 = 25 \implies y^2 = 25 - (c - 5)^2$.

Setting equal: $9 - (c - 1)^2 = 25 - (c - 5)^2$.

$9 - c^2 + 2c - 1 = 25 - c^2 + 10c - 25$

$8 + 2c = 10c \implies 8c = 8 \implies c = 1$.

$y^2 = 9 - 0 = 9 \implies y = \pm 3$. Points: $(1, 3)$ and $(1, -3)$.

$AB = 6$.

</details>

**DSE Practice 5.** Find the angle between the planes $2x - y + 2z = 3$ and $x + 2y - 2z = 1$.

<details>
<summary>Solution</summary>

Normal to first plane: $\mathbf{n_1} = (2, -1, 2)$. Normal to second plane:
$\mathbf{n_2} = (1, 2, -2)$.

$$\cos\theta = \frac{|2(1) + (-1)(2) + 2(-2)|}{\sqrt{4 + 1 + 4} \cdot \sqrt{1 + 4 + 4}} = \frac{|2 - 2 - 4|}{3 \cdot 3} = \frac{4}{9}$$

$$\theta = \arccos\!\left(\frac{4}{9}\right) \approx 63.6^\circ$$

</details>

**DSE Practice 6.** A pyramid has a rectangular base $ABCD$ with $AB = 8$$BC = 6$. The vertex $V$ is
directly above the centre of the base, and $VA = 10$. Find the angle between the face $VAB$ and the
base $ABCD$.

<details>
<summary>Solution</summary>

The centre of the rectangle is $O = (4, 3, 0)$ (taking $A$ at the origin).

$VA = 10$$OA = \sqrt{4^2 + 3^2} = 5$.

$VO = \sqrt{VA^2 - OA^2} = \sqrt{100 - 25} = \sqrt{75} = 5\sqrt{3}$.

Height of the pyramid: $h = 5\sqrt{3}$.

The midpoint of $AB$ is $M = (4, 0, 0)$.

$VM = \sqrt{VO^2 + OM^2} = \sqrt{75 + 9} = \sqrt{84} = 2\sqrt{21}$.

The angle between face $VAB$ and the base is the angle between $VM$ and $OM$:

$$\cos\phi = \frac{OM}{VM} = \frac{3}{2\sqrt{21}} = \frac{\sqrt{21}}{14}$$

$$\phi = \arccos\!\left(\frac{\sqrt{21}}{14}\right) \approx 69.2^\circ$$

</details>

**DSE Practice 7.** The line $3x + 4y - 25 = 0$ intersects the circle $x^2 + y^2 = 25$ at $A$ and
$B$. Find the area of the minor segment cut off by the chord $AB$.

<details>
<summary>Solution</summary>

Distance from the centre $(0, 0)$ to the line:

$$d = \frac{|25|}{5} = 5$$

Since $d = r = 5$The line is tangent to the circle (not a chord). There is no minor segment -- the
line touches the circle at exactly one point.

The point of contact: the foot of the perpendicular from $(0,0)$ to $3x + 4y = 25$.

$3x + 4y = 25$ and $y = \dfrac{3}{4}x$ (the perpendicular from the origin).

$3x + 4 \cdot \dfrac{3}{4}x = 25 \implies 6x = 25 \implies x = \dfrac{25}{6}$$y = \dfrac{25}{8}$.

Point of tangency: $\left(\dfrac{25}{6}, \dfrac{25}{8}\right)$.

Since the line is tangent (not a secant), the area of the minor segment is $0$.

</details>

## Common Pitfalls

- **Confusing the Pythagorean theorem converse with the theorem itself.** The converse states that
  if $a^2 + b^2 = c^2$ then the triangle is right-angled at $C$.

- **Using the wrong formula for 3D distance.** The distance between $(x_1, y_1, z_1)$ and
  $(x_2, y_2, z_2)$ is $\sqrt{(x_2-x_1)^2 + (y_2-y_1)^2 + (z_2-z_1)^2}$.

- **Midpoint formula errors.** The midpoint of $(x_1, y_1)$ and $(x_2, y_2)$ is
  $\left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$, not the average of the squares.

- 2D distance: $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$; extend to 3D by adding $(z_2-z_1)^2$.

- Midpoint: $M = \left(\frac{x_1+x_2}{2}, \frac{y_1+y_2}{2}\right)$.

- A triangle is right-angled iff the sum of squares of two sides equals the square of the third
  (Pythagorean converse).

- The shortest distance from a point to a line is the perpendicular distance.

## Worked Examples

### Example 1: 3D distance

**Problem.** Find the distance between $A(1, 2, 3)$ and $B(4, -1, 5)$.

**Solution.** $$AB = \sqrt{(4-1)^2 + (-1-2)^2 + (5-3)^2} = \sqrt{9 + 9 + 4} = \sqrt{22}$$

$\blacksquare$

### Example 2: Proving a triangle is right-angled

**Problem.** The vertices of a triangle are $A(0, 0)$, $B(4, 0)$, $C(0, 3)$. Show that
$\triangle ABC$ is right-angled.

**Solution.** $$AB^2 = 16, \quad AC^2 = 9, \quad BC^2 = 16 + 9 = 25$$

$AB^2 + AC^2 = 16 + 9 = 25 = BC^2$. By the converse of Pythagoras' theorem, $\triangle ABC$ is
right-angled at $A$.

# $\blacksquare$

3. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).

4. Misreading the question, particularly with 'hence' vs 'hence or otherwise' — the former requires
   using previous work.
   > > > > > > > Stashed changes:docs/docs_dse/Maths/compulsory/geometries.md

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

:::
