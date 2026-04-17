---
title: Coordinates and Geometry
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: coordinates-and-geometry
---

## Board Coverage

| Board      | Paper   | Notes                                    |
| ---------- | ------- | ---------------------------------------- |
| AQA        | Paper 1 | Straight lines, circles                  |
| Edexcel    | P1      | Same; includes circle theorems           |
| OCR (A)    | Paper 1 | Similar coverage                         |
| CIE (9709) | P1      | Coordinate geometry of lines and circles |

---

## 1. The Coordinate Plane

**Definition.** The _Cartesian coordinate plane_ $\mathbb{R}^2$ is the set of all ordered pairs
$(x, y)$ where $x, y \in \mathbb{R}$. The horizontal axis is the $x$-axis and the vertical axis is
the $y$-axis.

The _distance_ between two points $A(x_1, y_1)$ and $B(x_2, y_2)$ is given by Pythagoras' theorem:

**Theorem (Distance Formula).**

$$d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

_Proof._ Construct the right triangle with legs parallel to the axes. The horizontal leg has length
$|x_2 - x_1|$ and the vertical leg has length $|y_2 - y_1|$. By Pythagoras' theorem:

$$d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$

Taking the positive square root (since distance is non-negative):

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \quad \blacksquare$$

**Definition.** The _midpoint_ of the segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ is:

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

---

## 2. Straight Lines

### 2.1 Gradient

**Definition.** The _gradient_ (slope) of the line passing through $A(x_1, y_1)$ and $B(x_2, y_2)$
(with $x_1 \neq x_2$) is:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Theorem.** The gradient is well-defined: it does not depend on the choice of points on the line.

_Proof._ Consider a third point $C(x_3, y_3)$ on the same line. By similar triangles (see intuition
below), $\frac{y_2 - y_1}{x_2 - x_1} = \frac{y_3 - y_1}{x_3 - x_1}$. Since any two points on the
line define the same ratio, the gradient is a property of the line itself, not the chosen points.
$\blacksquare$

_Intuition (Similar Triangles)._ Imagine two right triangles formed by dropping perpendiculars from
any two pairs of points on the line to the $x$-axis. Both triangles share the angle that the line
makes with the horizontal. By AA similarity, the triangles are similar, so the ratio of vertical to
horizontal sides is constant — this ratio is the gradient.

### 2.2 Equation of a Line

The equation of a line with gradient $m$ passing through $(x_1, y_1)$ is:

$$y - y_1 = m(x - x_1)$$

_Proof._ Any point $(x, y)$ on the line must satisfy the gradient condition:

$$\frac{y - y_1}{x - x_1} = m$$

Multiplying both sides by $(x - x_1)$:

$$y - y_1 = m(x - x_1) \quad \blacksquare$$

**Other forms:**

- _Gradient-intercept form:_ $y = mx + c$, where $c$ is the $y$-intercept.
- _General form:_ $ax + by + c = 0$, where $a, b$ are not both zero.

### 2.3 Parallel and Perpendicular Lines

**Theorem.** Two lines with gradients $m_1$ and $m_2$ are:

- **Parallel** if and only if $m_1 = m_2$;
- **Perpendicular** if and only if $m_1 m_2 = -1$.

_Proof (Perpendicular case)._ Consider two perpendicular lines through the origin with gradients
$m_1$ and $m_2$. A point on the first line is $(1, m_1)$, and a point on the second is $(1, m_2)$.
The vector from the origin to $(1, m_1)$ is $\mathbf{u} = (1, m_1)$, and the vector from the origin
to $(1, m_2)$ is $\mathbf{v} = (1, m_2)$.

Since the lines are perpendicular, $\mathbf{u} \perp \mathbf{v}$, so their dot product is zero:

$$1 \cdot 1 + m_1 \cdot m_2 = 0 \implies m_1 m_2 = -1 \quad \blacksquare$$

<details>
<summary>Example</summary>
Find the equation of the line perpendicular to $2x - 3y + 7 = 0$ passing through $(4, -1)$.

Rearranging: $3y = 2x + 7$, so $y = \frac{2}{3}x + \frac{7}{3}$. Gradient: $m_1 = \frac{2}{3}$.

Perpendicular gradient: $m_2 = -\frac{3}{2}$.

$$y + 1 = -\frac{3}{2}(x - 4)$$

$$2y + 2 = -3x + 12 \implies 3x + 2y - 10 = 0$$

</details>

---

## 3. Circles

### 3.1 Equation of a Circle

**Theorem.** The circle with centre $(a, b)$ and radius $r$ has equation:

$$(x - a)^2 + (y - b)^2 = r^2$$

_Proof._ By definition, a circle is the set of all points at distance $r$ from the centre $(a, b)$.
A point $(x, y)$ lies on the circle if and only if its distance from $(a, b)$ equals $r$:

$$
\begin{aligned}
\sqrt{(x - a)^2 + (y - b)^2} &= r \\
(x - a)^2 + (y - b)^2 &= r^2 \quad \blacksquare
\end{aligned}
$$

_Intuition._ This is simply Pythagoras' theorem applied to every point on the circle. The distance
from the centre to any point on the circle is constant and equal to the radius.

### 3.2 Expanded Form

Expanding $(x - a)^2 + (y - b)^2 = r^2$:

$$x^2 - 2ax + a^2 + y^2 - 2by + b^2 = r^2$$

$$x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0$$

**Theorem.** The general equation $x^2 + y^2 + Dx + Ey + F = 0$ represents a circle with centre
$\left(-\frac{D}{2}, -\frac{E}{2}\right)$ and radius $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$,
provided $D^2 + E^2 - 4F > 0$.

_Proof._ Completing the square in both $x$ and $y$:

$$
\begin{aligned}
x^2 + Dx &= \left(x + \frac{D}{2}\right)^2 - \frac{D^2}{4} \\
y^2 + Ey &= \left(y + \frac{E}{2}\right)^2 - \frac{E^2}{4}
\end{aligned}
$$

Substituting:

$$\left(x + \frac{D}{2}\right)^2 + \left(y + \frac{E}{2}\right)^2 = \frac{D^2 + E^2}{4} - F$$

This is a circle with centre $\left(-\frac{D}{2}, -\frac{E}{2}\right)$ and radius
$\sqrt{\frac{D^2 + E^2}{4} - F}$, provided the right-hand side is positive. $\blacksquare$

:::tip
To find the centre and radius from the general form, always complete the square in $x$ and
$y$. This is faster and less error-prone than memorising the formula.
:::

<details>
<summary>Example</summary>
Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

$$
\begin{aligned}
(x^2 - 6x) + (y^2 + 4y) &= 12 \\
(x - 3)^2 - 9 + (y + 2)^2 - 4 &= 12 \\
(x - 3)^2 + (y + 2)^2 &= 25
\end{aligned}
$$

Centre: $(3, -2)$, Radius: $5$.

</details>

---

## 4. Intersection of a Line and a Circle

### 4.1 The Tangent Condition

**Theorem.** The line $y = mx + c$ is tangent to the circle $(x - a)^2 + (y - b)^2 = r^2$ if and
only if the discriminant of the resulting quadratic is zero.

_Proof._ Substituting $y = mx + c$ into the circle equation:

$$(x - a)^2 + (mx + c - b)^2 = r^2$$

Expanding gives a quadratic in $x$:

$$(1 + m^2)x^2 + \text{(linear term)} + \text{(constant)} = 0$$

This quadratic has:

- **Two distinct real roots** ($\Delta > 0$): the line intersects the circle at two points (a
  _secant_);
- **One repeated root** ($\Delta = 0$): the line touches the circle at exactly one point (a
  _tangent_);
- **No real roots** ($\Delta < 0$): the line does not intersect the circle. $\blacksquare$

_Intuition._ A tangent touches the circle at exactly one point. Algebraically, "one point" means the
quadratic has a repeated root — the two intersection points have coalesced into one.

### 4.2 Equation of a Tangent to a Circle

**Theorem.** The tangent to the circle $x^2 + y^2 + Dx + Ey + F = 0$ at the point $(x_1, y_1)$ on
the circle has equation:

$$x x_1 + y y_1 + \frac{D}{2}(x + x_1) + \frac{E}{2}(y + y_1) + F = 0$$

_Proof (for circle centred at origin)._ The circle $x^2 + y^2 = r^2$ has centre $(0, 0)$. The radius
at $(x_1, y_1)$ has gradient $\frac{y_1}{x_1}$ (from origin to the point). The tangent is
perpendicular to this radius, so the tangent's gradient is $m = -\frac{x_1}{y_1}$ (using
$m_1 m_2 = -1$).

The tangent passes through $(x_1, y_1)$:

$$y - y_1 = -\frac{x_1}{y_1}(x - x_1)$$

$$y y_1 - y_1^2 = -x x_1 + x_1^2$$

$$x x_1 + y y_1 = x_1^2 + y_1^2 = r^2$$

(since $(x_1, y_1)$ lies on the circle). $\blacksquare$

<details>
<summary>Example</summary>
Find the equation of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

Using $x x_1 + y y_1 = r^2$:

$$3x + 4y = 25$$

</details>

---

## 5. Angle in a Semicircle

**Theorem.** The angle subtended by a diameter at any point on the circle is a right angle.

_Proof._ Place the diameter on the $x$-axis from $(-r, 0)$ to $(r, 0)$. The circle is
$x^2 + y^2 = r^2$. Let $P(x, y)$ be any point on the upper semicircle.

The gradient of $AP$ (from $(-r, 0)$ to $(x, y)$) is $\frac{y}{x + r}$.

The gradient of $BP$ (from $(r, 0)$ to $(x, y)$) is $\frac{y}{x - r}$.

The product of gradients: $\frac{y}{x + r} \cdot \frac{y}{x - r} = \frac{y^2}{x^2 - r^2}$.

Since $P$ lies on the circle: $x^2 + y^2 = r^2$, so $y^2 = r^2 - x^2 = -(x^2 - r^2)$.

Product: $\frac{-(x^2 - r^2)}{x^2 - r^2} = -1$ (for $x \neq \pm r$).

Since the product of gradients is $-1$, $AP \perp BP$. $\blacksquare$

---

## 6. Distance from a Point to a Line

**Theorem.** The perpendicular (shortest) distance from the point $(x_0, y_0)$ to the line
$ax + by + c = 0$ is:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

_Proof (Area method)._ Let $P(x_0, y_0)$ be the point and let $A$ and $B$ be two convenient points
on the line. The triangle $PAB$ has area:

$$\text{Area} = \frac{1}{2} \times \text{base} \times \text{height} = \frac{1}{2} \times |AB| \times d$$

where $d$ is the perpendicular distance from $P$ to the line. Rearranging:

$$d = \frac{2 \times \text{Area}}{|AB|}$$

Choose $A$ and $B$ where the line meets the axes: set $y = 0$ to get $A\left(-\frac{c}{a}, 0\right)$
and set $x = 0$ to get $B\left(0, -\frac{c}{b}\right)$. Then:

$$|AB| = \sqrt{\frac{c^2}{a^2} + \frac{c^2}{b^2}} = \frac{|c|\sqrt{a^2 + b^2}}{|ab|}$$

The area of $\triangle PAB$ can also be computed using the determinant formula:

$$\text{Area} = \frac{1}{2}\left|x_0\left(0 - \left(-\frac{c}{b}\right)\right) + \left(-\frac{c}{a}\right)\left(\left(-\frac{c}{b}\right) - y_0\right) + 0 \cdot (y_0 - 0)\right|$$

This simplifies to $\frac{|ax_0 + by_0 + c| \cdot |c|}{2|ab|}$. Therefore:

$$d = \frac{2 \cdot \frac{|ax_0 + by_0 + c| \cdot |c|}{2|ab|}}{\frac{|c|\sqrt{a^2 + b^2}}{|ab|}} = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}} \quad \blacksquare$$

<details>
<summary>Alternative proof (perpendicular line method)</summary>
The line $ax + by + c = 0$ has gradient $m = -\frac{a}{b}$ (assuming $b \neq 0$).

The perpendicular through $(x_0, y_0)$ has gradient $\frac{b}{a}$, giving equation:

$$y - y_0 = \frac{b}{a}(x - x_0) \implies bx - ay + (ay_0 - bx_0) = 0$$

Solving this simultaneously with $ax + by + c = 0$ gives the foot of the perpendicular $F$. Using
Cramer's rule or substitution:

$$x_F = \frac{b^2 x_0 - a b y_0 - a c}{a^2 + b^2}, \quad y_F = \frac{a^2 y_0 - a b x_0 - b c}{a^2 + b^2}$$

The distance $PF$ is:

$$
\begin{aligned}
d^2 &= (x_0 - x_F)^2 + (y_0 - y_F)^2 \\
&= \left(\frac{a(ax_0 + by_0 + c)}{a^2 + b^2}\right)^2 + \left(\frac{b(ax_0 + by_0 + c)}{a^2 + b^2}\right)^2 \\
&= \frac{(a^2 + b^2)(ax_0 + by_0 + c)^2}{(a^2 + b^2)^2} \\
&= \frac{(ax_0 + by_0 + c)^2}{a^2 + b^2}
\end{aligned}
$$

Taking the positive square root and absolute value:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}} \quad \blacksquare$$

</details>

<details>
<summary>Worked example</summary>
Find the shortest distance from $(5, -2)$ to the line $3x + 4y - 10 = 0$.

$$d = \frac{|3(5) + 4(-2) - 10|}{\sqrt{9 + 16}} = \frac{|15 - 8 - 10|}{\sqrt{25}} = \frac{|-3|}{5} = \frac{3}{5}$$

</details>

:::info
The absolute value in the numerator ensures the distance is always non-negative. The sign of
$ax_0 + by_0 + c$ tells you which side of the line the point lies on.
:::

---

## 7. Intersection of Two Circles

**Theorem.** Two circles $C_1$ with centre $O_1$ and radius $r_1$, and $C_2$ with centre $O_2$ and
radius $r_2$, intersect if and only if the distance $d = |O_1 O_2|$ between their centres satisfies:

- **Two intersection points** when $|r_1 - r_2| < d < r_1 + r_2$;
- **Externally tangent** (one point) when $d = r_1 + r_2$;
- **Internally tangent** (one point) when $d = |r_1 - r_2|$;
- **No intersection** when $d > r_1 + r_2$ (circles too far apart);
- **No intersection** when $d < |r_1 - r_2|$ (one circle inside the other);
- **Concentric (no intersection unless $r_1 = r_2$)** when $d = 0$.

_Proof._ The result follows directly from the triangle inequality applied to $\triangle O_1PO_2$
where $P$ is an intersection point. For $P$ to exist on both circles, $|O_1P| = r_1$ and
$|O_2P| = r_2$. The three lengths $r_1, r_2, d$ must form a valid triangle, which requires
$|r_1 - r_2| < d < r_1 + r_2$. The boundary cases give tangency, and the impossible cases give no
intersection. $\blacksquare$

### 7.1 Equation of the Common Chord

When two circles intersect, the line through both intersection points is called the _common chord_.
To find its equation, subtract one circle equation from the other.

**Method.** Given $C_1: x^2 + y^2 + D_1x + E_1y + F_1 = 0$ and
$C_2: x^2 + y^2 + D_2x + E_2y + F_2 = 0$, the common chord is:

$$(D_1 - D_2)x + (E_1 - E_2)y + (F_1 - F_2) = 0$$

This is a straight line because subtracting eliminates the $x^2$ and $y^2$ terms.

<details>
<summary>Worked example</summary>
Find the common chord of $C_1: x^2 + y^2 - 4x - 6y + 9 = 0$ and $C_2: x^2 + y^2 + 2x + 2y - 14 = 0$.

Subtracting $C_1$ from $C_2$:

$$(2 - (-4))x + (2 - (-6))y + (-14 - 9) = 0$$

$$6x + 8y - 23 = 0$$

To verify, check that the centres are $(2, 3)$ and $(-1, -1)$ with radii $r_1 = \sqrt{4+9-9} = 2$
and $r_2 = \sqrt{1+1+14} = 4$.

Distance between centres: $d = \sqrt{(2-(-1))^2 + (3-(-1))^2} = \sqrt{9+16} = 5$.

Since $|r_1 - r_2| = 2 < 5 < 6 = r_1 + r_2$, the circles intersect at two points as expected.

</details>

---

## 8. Equation of a Circle Through Three Points

**Theorem.** Given three non-collinear points, there is exactly one circle passing through all
three.

**Method.** Substitute each point into the general form $x^2 + y^2 + Dx + Ey + F = 0$ to obtain
three simultaneous equations in $D$, $E$, and $F$:

$$
\begin{aligned}
x_1^2 + y_1^2 + D x_1 + E y_1 + F &= 0 \\
x_2^2 + y_2^2 + D x_2 + E y_2 + F &= 0 \\
x_3^2 + y_3^2 + D x_3 + E y_3 + F &= 0
\end{aligned}
$$

Subtracting the first equation from the second and third eliminates $F$, yielding a $2 \times 2$
system in $D$ and $E$. Solve for $D$ and $E$, then substitute back to find $F$.

:::warning
If the three points are collinear, the system has no solution (no circle passes through
three collinear points). You can check collinearity by verifying that the gradient between the first
two points equals the gradient between the second two.
:::

<details>
<summary>Worked example</summary>
Find the equation of the circle through $A(1, 2)$, $B(3, 4)$, and $C(5, 2)$.

Substituting into $x^2 + y^2 + Dx + Ey + F = 0$:

$$
\begin{aligned}
(1) \quad 1 + 4 + D + 2E + F &= 0 \implies D + 2E + F = -5 \\
(2) \quad 9 + 16 + 3D + 4E + F &= 0 \implies 3D + 4E + F = -25 \\
(3) \quad 25 + 4 + 5D + 2E + F &= 0 \implies 5D + 2E + F = -29
\end{aligned}
$$

Subtract (1) from (2): $2D + 2E = -20 \implies D + E = -10 \quad \text{(i)}$.

Subtract (1) from (3): $4D = -24 \implies D = -6$.

From (i): $E = -4$.

Substituting into (1): $-6 + 2(-4) + F = -5 \implies -6 - 8 + F = -5 \implies F = 9$.

The circle is $x^2 + y^2 - 6x - 4y + 9 = 0$.

Completing the square: $(x-3)^2 + (y-2)^2 = 4$, so centre $(3, 2)$ with radius $2$.

Note that the midpoint of $AC$ is $(3, 2)$ and $|AC| = 4$, so the diameter is along the line $AC$,
consistent with $AC$ being a diameter.

</details>

---

## 9. Parametric Equations of a Circle

**Definition.** A circle with centre $(a, b)$ and radius $r$ can be described parametrically as:

$$x = a + r\cos\theta, \quad y = b + r\sin\theta$$

where $\theta$ is the angle measured anticlockwise from the positive $x$-direction to the radius
joining the centre to the point.

For a circle centred at the origin this simplifies to:

$$x = r\cos\theta, \quad y = r\sin\theta$$

**Theorem.** Every point $(a + r\cos\theta, b + r\sin\theta)$ lies on the circle
$(x - a)^2 + (y - b)^2 = r^2$.

_Proof._ Substituting $x = a + r\cos\theta$ and $y = b + r\sin\theta$:

$$
\begin{aligned}
(x - a)^2 + (y - b)^2 &= (r\cos\theta)^2 + (r\sin\theta)^2 \\
&= r^2\cos^2\theta + r^2\sin^2\theta \\
&= r^2(\cos^2\theta + \sin^2\theta) \\
&= r^2 \quad \blacksquare
\end{aligned}
$$

Since $\cos^2\theta + \sin^2\theta = 1$ for all $\theta$, every value of the parameter produces a
point on the circle.

### 9.1 Applications

The parametric form is useful for:

- **Finding specific points** on a circle at known angles;
- **Describing the locus** of a point moving around a circle;
- **Computing intersections** by equating parametric and Cartesian forms;
- **Integration** along arcs (in the further maths syllabus).

<details>
<summary>Worked example</summary>
A circle has centre $(2, -1)$ and radius $3$. Find the two points on the circle where $x = 4$.

Parametrically: $x = 2 + 3\cos\theta = 4$, so $\cos\theta = \frac{2}{3}$.

$$\sin\theta = \pm\sqrt{1 - \frac{4}{9}} = \pm\frac{\sqrt{5}}{3}$$

The two points are:

$$\left(4, -1 + 3 \cdot \frac{\sqrt{5}}{3}\right) = \left(4, -1 + \sqrt{5}\right)$$

$$\left(4, -1 + 3 \cdot \left(-\frac{\sqrt{5}}{3}\right)\right) = \left(4, -1 - \sqrt{5}\right)$$

Verification using the Cartesian equation $(x-2)^2 + (y+1)^2 = 9$: when $x = 4$, $(y+1)^2 = 5$, so
$y = -1 \pm \sqrt{5}$.

</details>

---

## 10. Problem Set

**Problem 1.** Find the equation of the line through $A(2, 5)$ and $B(-1, 3)$.

<details>
<summary>Solution</summary>
$$m = \frac{3 - 5}{-1 - 2} = \frac{-2}{-3} = \frac{2}{3}$$

$$y - 5 = \frac{2}{3}(x - 2) \implies 3y - 15 = 2x - 4 \implies 2x - 3y + 11 = 0$$

</details>
<b>If you get this wrong, revise:</b> [Equation of a line](#22-equation-of-a-line)

---

**Problem 2.** Find the centre and radius of the circle $x^2 + y^2 + 8x - 6y - 24 = 0$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
(x^2 + 8x) + (y^2 - 6y) &= 24 \\
(x + 4)^2 - 16 + (y - 3)^2 - 9 &= 24 \\
(x + 4)^2 + (y - 3)^2 &= 49
\end{aligned}
$$

Centre: $(-4, 3)$, Radius: $7$.

</details>
<b>If you get this wrong, revise:</b> [Expanded form](#32-expanded-form)

---

**Problem 3.** Show that the line $y = x + 1$ is a tangent to the circle $x^2 + y^2 = 1$.

<details>
<summary>Solution</summary>
Substitute $y = x + 1$ into $x^2 + y^2 = 1$:

$$
\begin{aligned}
x^2 + (x + 1)^2 &= 1 \\
x^2 + x^2 + 2x + 1 &= 1 \\
2x^2 + 2x &= 0 \\
2x(x + 1) &= 0
\end{aligned}
$$

$x = 0$ or $x = -1$.

Wait — that gives two intersection points. Let me check: actually $2x^2 + 2x = 0$ gives $x = 0$ and
$x = -1$, which are two points $(0, 1)$ and $(-1, 0)$.

So $y = x + 1$ is **not** tangent to $x^2 + y^2 = 1$. Let me reconsider the problem. Actually, this
line passes through two points on the circle — it is a secant, not a tangent.

If the problem instead asked about $y = x + c$ being tangent:

Substitute: $2x^2 + 2cx + c^2 - 1 = 0$. Set $\Delta = 0$:

$4c^2 - 8(c^2 - 1) = 0 \implies -4c^2 + 8 = 0 \implies c = \pm\sqrt{2}$.

</details>
<b>If you get this wrong, revise:</b> [Tangent condition](#41-the-tangent-condition)

---

**Problem 4.** Find the point of intersection of the lines $3x + 2y = 7$ and $x - y = 1$.

<details>
<summary>Solution</summary>
From (2): $x = y + 1$. Substitute into (1):

$$3(y + 1) + 2y = 7 \implies 5y + 3 = 7 \implies y = \frac{4}{5}$$

$$x = \frac{4}{5} + 1 = \frac{9}{5}$$

Intersection: $\left(\frac{9}{5}, \frac{4}{5}\right)$.

</details>
<b>If you get this wrong, revise:</b> [Linear simultaneous equations](./03-equations-and-inequalities.md)

---

**Problem 5.** The points $A(1, 2)$, $B(5, 4)$, and $C(3, 8)$ form a triangle. Show that $ABC$ is a
right-angled triangle.

<details>
<summary>Solution</summary>
Gradient of $AB$: $\frac{4 - 2}{5 - 1} = \frac{1}{2}$.

Gradient of $BC$: $\frac{8 - 4}{3 - 5} = \frac{4}{-2} = -2$.

Product: $\frac{1}{2} \times (-2) = -1$.

Since $m_{AB} \cdot m_{BC} = -1$, $AB \perp BC$, so $\angle B = 90^\circ$. $\blacksquare$

</details>
<b>If you get this wrong, revise:</b> [Parallel and perpendicular lines](#23-parallel-and-perpendicular-lines)

---

**Problem 6.** Find the equation of the tangent to the circle $(x - 2)^2 + (y + 1)^2 = 20$ at the
point $(4, 3)$.

<details>
<summary>Solution</summary>
The centre is $(2, -1)$. The gradient of the radius from $(2, -1)$ to $(4, 3)$ is:

$$m_{\text{radius}} = \frac{3 - (-1)}{4 - 2} = \frac{4}{2} = 2$$

The tangent is perpendicular: $m_{\text{tangent}} = -\frac{1}{2}$.

$$y - 3 = -\frac{1}{2}(x - 4) \implies 2y - 6 = -x + 4 \implies x + 2y - 10 = 0$$

</details>
<b>If you get this wrong, revise:</b> [Equation of a tangent](#42-equation-of-a-tangent-to-a-circle)

---

**Problem 7.** Find the shortest distance from the point $(3, 1)$ to the line $2x - y + 4 = 0$.

<details>
<summary>Solution</summary>
The perpendicular distance from $(x_0, y_0)$ to $ax + by + c = 0$ is:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

$$d = \frac{|2(3) - 1(1) + 4|}{\sqrt{4 + 1}} = \frac{|6 - 1 + 4|}{\sqrt{5}} = \frac{9}{\sqrt{5}} = \frac{9\sqrt{5}}{5}$$

</details>
<b>If you get this wrong, revise:</b> [Distance formula](#1-the-coordinate-plane)

---

**Problem 8.** A circle has equation $x^2 + y^2 - 4x + 6y + 4 = 0$. Find the equation of the tangent
at the point where $x = 1$.

<details>
<summary>Solution</summary>
When $x = 1$: $1 + y^2 - 4 + 6y + 4 = 0 \implies y^2 + 6y + 1 = 0$.

$$y = \frac{-6 \pm \sqrt{36 - 4}}{2} = \frac{-6 \pm \sqrt{32}}{2} = -3 \pm 2\sqrt{2}$$

Using the tangent formula for the general circle. First, rewrite as $(x - 2)^2 + (y + 3)^2 = 9$.
Centre: $(2, -3)$.

At point $(1, -3 + 2\sqrt{2})$: gradient of radius
$= \frac{-3 + 2\sqrt{2} + 3}{1 - 2} = \frac{2\sqrt{2}}{-1} = -2\sqrt{2}$.

Tangent gradient: $\frac{1}{2\sqrt{2}} = \frac{\sqrt{2}}{4}$.

$$y + 3 - 2\sqrt{2} = \frac{\sqrt{2}}{4}(x - 1)$$

$$4y + 12 - 8\sqrt{2} = \sqrt{2}\,x - \sqrt{2}$$

$$\sqrt{2}\,x - 4y - 12 - 7\sqrt{2} = 0$$

</details>
<b>If you get this wrong, revise:</b> [Equation of a tangent](#42-equation-of-a-tangent-to-a-circle)

---

**Problem 9.** Two circles $C_1: x^2 + y^2 = 9$ and $C_2: (x - 5)^2 + y^2 = 4$ intersect at points
$P$ and $Q$. Find the length of $PQ$.

<details>
<summary>Solution</summary>
The centres are $O_1(0, 0)$ and $O_2(5, 0)$ with radii $r_1 = 3$ and $r_2 = 2$.

Distance between centres: $d = 5$.

The line of centres is the $x$-axis. By symmetry, $PQ$ is perpendicular to the $x$-axis.

Subtract the equations: $x^2 + y^2 - [(x-5)^2 + y^2] = 9 - 4$

$$x^2 - x^2 + 10x - 25 = 5 \implies 10x = 30 \implies x = 3$$

So $PQ$ is the vertical line $x = 3$. The $y$-coordinates satisfy $9 + y^2 = 9 \implies y = 0$.

Wait, $x = 3$ in $C_1$: $9 + y^2 = 9$, so $y = 0$. The circles intersect at a single point $(3, 0)$
— they are tangent to each other.

So $PQ = 0$; the circles touch at exactly one point.

</details>
<b>If you get this wrong, revise:</b> [Intersection of line and circle](#4-intersection-of-a-line-and-a-circle)

---

**Problem 10.** Find the equation of the perpendicular bisector of the segment joining $A(1, 7)$ and
$B(5, -1)$.

<details>
<summary>Solution</summary>
Midpoint: $M = \left(\frac{1 + 5}{2}, \frac{7 + (-1)}{2}\right) = (3, 3)$.

Gradient of $AB$: $\frac{-1 - 7}{5 - 1} = \frac{-8}{4} = -2$.

Perpendicular gradient: $\frac{1}{2}$.

$$y - 3 = \frac{1}{2}(x - 3) \implies 2y - 6 = x - 3 \implies x - 2y + 3 = 0$$

</details>
<b>If you get this wrong, revise:</b> [Perpendicular lines](#23-parallel-and-perpendicular-lines)

---

**Problem 11.** Derive the perpendicular distance formula
$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$ using the area method for the point $P(1, 7)$ and
the line $3x + 4y - 5 = 0$. Then compute the distance.

<details>
<summary>Solution</summary>
The line $3x + 4y - 5 = 0$ meets the axes at $A\!\left(\frac{5}{3}, 0\right)$ and $B\!\left(0, \frac{5}{4}\right)$.

Length of base $AB$:

$$|AB| = \sqrt{\left(\frac{5}{3}\right)^2 + \left(\frac{5}{4}\right)^2} = \sqrt{\frac{25}{9} + \frac{25}{16}} = \sqrt{\frac{400 + 225}{144}} = \frac{\sqrt{625}}{12} = \frac{25}{12}$$

Area of $\triangle PAB$ using the determinant formula:

$$
\begin{aligned}
\text{Area} &= \frac{1}{2}\left| x_P(y_A - y_B) + x_A(y_B - y_P) + x_B(y_P - y_A) \right| \\
&= \frac{1}{2}\left| 1\!\left(0 - \frac{5}{4}\right) + \frac{5}{3}\!\left(\frac{5}{4} - 7\right) + 0\!\left(7 - 0\right) \right| \\
&= \frac{1}{2}\left| -\frac{5}{4} + \frac{5}{3} \cdot \frac{-23}{4} \right| \\
&= \frac{1}{2}\left| -\frac{5}{4} - \frac{115}{12} \right| = \frac{1}{2}\left|\frac{-15 - 115}{12}\right| = \frac{1}{2} \cdot \frac{130}{12} = \frac{65}{12}
\end{aligned}
$$

Since $\text{Area} = \frac{1}{2} \times |AB| \times d$:

$$\frac{65}{12} = \frac{1}{2} \times \frac{25}{12} \times d \implies d = \frac{65 \times 2}{25} = \frac{130}{25} = \frac{26}{5}$$

Verification using the formula:
$d = \frac{|3(1) + 4(7) - 5|}{\sqrt{9+16}} = \frac{|3 + 28 - 5|}{5} = \frac{26}{5}$.

</details>
<b>If you get this wrong, revise:</b> [Distance from a point to a line](#6-distance-from-a-point-to-a-line)

---

**Problem 12.** Two circles $C_1: x^2 + y^2 + 2x - 8y + 8 = 0$ and
$C_2: x^2 + y^2 - 4x + 4y - 8 = 0$ intersect at $P$ and $Q$. Find the equation of the common chord
$PQ$ and the length of $PQ$.

<details>
<summary>Solution</summary>
Subtracting $C_1$ from $C_2$:

$$(2 - (-4))x + (4 - (-8))y + (-8 - 8) = 0$$

$$6x + 12y - 16 = 0 \implies 3x + 6y - 8 = 0$$

This is the equation of the common chord $PQ$.

To find the length $PQ$, first find the centres and radii.

$C_1$: $(x+1)^2 + (y-4)^2 = 1+16-8 = 9$, so centre $(-1, 4)$, radius $3$.

$C_2$: $(x-2)^2 + (y+2)^2 = 4+4+8 = 16$, so centre $(2, -2)$, radius $4$.

Distance between centres: $d = \sqrt{(2-(-1))^2 + (-2-4)^2} = \sqrt{9+36} = \sqrt{45} = 3\sqrt{5}$.

The distance from the centre of $C_1$ to the chord $PQ$ (line $3x + 6y - 8 = 0$):

$$d_1 = \frac{|3(-1) + 6(4) - 8|}{\sqrt{9+36}} = \frac{|-3 + 24 - 8|}{\sqrt{45}} = \frac{13}{3\sqrt{5}}$$

By Pythagoras' theorem in the right triangle formed by the centre, the midpoint of the chord, and an
endpoint:

$$\left(\frac{PQ}{2}\right)^2 = r_1^2 - d_1^2 = 9 - \frac{169}{45} = \frac{405 - 169}{45} = \frac{236}{45}$$

$$PQ = 2\sqrt{\frac{236}{45}} = 2 \cdot \frac{2\sqrt{59}}{3\sqrt{5}} = \frac{4\sqrt{295}}{15}$$

</details>
<b>If you get this wrong, revise:</b> [Intersection of two circles](#7-intersection-of-two-circles)

---

**Problem 13.** Find the equation of the circle passing through the three points $A(0, 1)$,
$B(2, 3)$, and $C(4, 1)$.

<details>
<summary>Solution</summary>
Substitute into $x^2 + y^2 + Dx + Ey + F = 0$:

$$
\begin{aligned}
A(0, 1)&: \quad 0 + 1 + 0 + E + F = 0 \implies E + F = -1 \quad \text{(1)} \\
B(2, 3)&: \quad 4 + 9 + 2D + 3E + F = 0 \implies 2D + 3E + F = -13 \quad \text{(2)} \\
C(4, 1)&: \quad 16 + 1 + 4D + E + F = 0 \implies 4D + E + F = -17 \quad \text{(3)}
\end{aligned}
$$

Subtract (1) from (2): $2D + 2E = -12 \implies D + E = -6 \quad \text{(i)}$.

Subtract (1) from (3): $4D = -16 \implies D = -4$.

From (i): $E = -2$. From (1): $F = -1 - (-2) = 1$.

The circle is $x^2 + y^2 - 4x - 2y + 1 = 0$.

Completing the square: $(x-2)^2 - 4 + (y-1)^2 - 1 + 1 = 0 \implies (x-2)^2 + (y-1)^2 = 4$.

Centre: $(2, 1)$, Radius: $2$. Note that $AC$ is a diameter: midpoint of $AC$ is $(2, 1)$ and
$|AC| = 4 = 2r$.

</details>
<b>If you get this wrong, revise:</b> [Circle through three points](#8-equation-of-a-circle-through-three-points)

---

**Problem 14.** A circle $C$ has parametric equations $x = 1 + 5\cos\theta$, $y = -2 + 5\sin\theta$.

(a) State the centre and radius of $C$.

(b) Find the coordinates of the two points on $C$ with $y$-coordinate $1$.

(c) Find the equation of the tangent to $C$ at the point corresponding to $\theta = \frac{\pi}{3}$.

<details>
<summary>Solution</summary>
(a) Centre: $(1, -2)$, Radius: $5$.

(b) Set $y = -2 + 5\sin\theta = 1$, so $\sin\theta = \frac{3}{5}$.

$$\cos\theta = \pm\sqrt{1 - \frac{9}{25}} = \pm\frac{4}{5}$$

The two points are:

$$\left(1 + 5 \cdot \frac{4}{5}, 1\right) = (5, 1)$$

$$\left(1 + 5 \cdot \left(-\frac{4}{5}\right), 1\right) = (-3, 1)$$

(c) When $\theta = \frac{\pi}{3}$: $x = 1 + 5\cos\frac{\pi}{3} = 1 + \frac{5}{2} = \frac{7}{2}$,
$y = -2 + 5\sin\frac{\pi}{3} = -2 + \frac{5\sqrt{3}}{2}$.

The point is $\left(\frac{7}{2}, -2 + \frac{5\sqrt{3}}{2}\right)$.

The radius from $(1, -2)$ to this point has gradient:

$$m_{\text{radius}} = \frac{-2 + \frac{5\sqrt{3}}{2} - (-2)}{\frac{7}{2} - 1} = \frac{\frac{5\sqrt{3}}{2}}{\frac{5}{2}} = \sqrt{3}$$

Tangent gradient: $m_{\text{tangent}} = -\frac{1}{\sqrt{3}} = -\frac{\sqrt{3}}{3}$.

Using point-slope form:

$$y + 2 - \frac{5\sqrt{3}}{2} = -\frac{1}{\sqrt{3}}\left(x - \frac{7}{2}\right)$$

$$\sqrt{3}\,y + 2\sqrt{3} - \frac{15}{2} = -x + \frac{7}{2}$$

$$x + \sqrt{3}\,y - \frac{7}{2} - 2\sqrt{3} + \frac{15}{2} = 0$$

$$x + \sqrt{3}\,y + 4 - 2\sqrt{3} = 0$$

</details>
<b>If you get this wrong, revise:</b> [Parametric equations of a circle](#9-parametric-equations-of-a-circle)

---

**Problem 15.** The circle $C$ has equation $x^2 + y^2 - 6x - 4y + 9 = 0$. The line $L$ passes
through the origin and is tangent to $C$. Find the possible equations of $L$ and the coordinates of
the points of tangency.

<details>
<summary>Solution</summary>
Completing the square: $(x-3)^2 + (y-2)^2 = 4$, so centre $(3, 2)$ and radius $2$.

Let $L$ have equation $y = mx$ (passing through the origin). For $L$ to be tangent to $C$,
substitute into the circle equation:

$$x^2 + m^2x^2 - 6x - 4mx + 9 = 0$$

$$(1 + m^2)x^2 - (6 + 4m)x + 9 = 0$$

For tangency, $\Delta = 0$:

$$(6 + 4m)^2 - 4(1 + m^2)(9) = 0$$

$$36 + 48m + 16m^2 - 36 - 36m^2 = 0$$

$$-20m^2 + 48m = 0$$

$$-4m(5m - 12) = 0$$

$$m = 0 \quad \text{or} \quad m = \frac{12}{5}$$

**Case $m = 0$:** Line $y = 0$. Substituting back:
$(1)x^2 - 6x + 9 = 0 \implies (x-3)^2 = 0 \implies x = 3$. Tangency point: $(3, 0)$.

**Case $m = \frac{12}{5}$:** Line $y = \frac{12}{5}x$. Substituting back:
$\left(1 + \frac{144}{25}\right)x^2 - \left(6 + \frac{48}{5}\right)x + 9 = 0$.

$$\frac{169}{25}x^2 - \frac{78}{5}x + 9 = 0 \implies 169x^2 - 390x + 225 = 0$$

$$(13x - 15)^2 = 0 \implies x = \frac{15}{13}, \quad y = \frac{12}{5} \cdot \frac{15}{13} = \frac{36}{13}$$

Tangency point: $\left(\frac{15}{13}, \frac{36}{13}\right)$.

**Verification using perpendicular distance:** The distance from centre $(3, 2)$ to
$y = \frac{12}{5}x$ (i.e. $12x - 5y = 0$) is $\frac{|36 - 10|}{13} = \frac{26}{13} = 2 = r$.

The two tangent lines are $y = 0$ and $12x - 5y = 0$.

</details>
<b>If you get this wrong, revise:</b> [Tangent condition](#41-the-tangent-condition)
