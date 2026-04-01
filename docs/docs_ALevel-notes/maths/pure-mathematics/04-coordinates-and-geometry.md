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

**Definition.** The _Cartesian coordinate plane_ $\mathbb{R}^2$ is the set of all ordered pairs $(x, y)$ where $x, y \in \mathbb{R}$. The horizontal axis is the $x$-axis and the vertical axis is the $y$-axis.

The _distance_ between two points $A(x_1, y_1)$ and $B(x_2, y_2)$ is given by Pythagoras' theorem:

**Theorem (Distance Formula).**

$$d(A, B) = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$$

_Proof._ Construct the right triangle with legs parallel to the axes. The horizontal leg has length $|x_2 - x_1|$ and the vertical leg has length $|y_2 - y_1|$. By Pythagoras' theorem:

$$d^2 = (x_2 - x_1)^2 + (y_2 - y_1)^2$$

Taking the positive square root (since distance is non-negative):

$$d = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2} \quad \blacksquare$$

**Definition.** The _midpoint_ of the segment joining $A(x_1, y_1)$ and $B(x_2, y_2)$ is:

$$M = \left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$$

---

## 2. Straight Lines

### 2.1 Gradient

**Definition.** The _gradient_ (slope) of the line passing through $A(x_1, y_1)$ and $B(x_2, y_2)$ (with $x_1 \neq x_2$) is:

$$m = \frac{y_2 - y_1}{x_2 - x_1}$$

**Theorem.** The gradient is well-defined: it does not depend on the choice of points on the line.

_Proof._ Consider a third point $C(x_3, y_3)$ on the same line. By similar triangles (see intuition below), $\frac{y_2 - y_1}{x_2 - x_1} = \frac{y_3 - y_1}{x_3 - x_1}$. Since any two points on the line define the same ratio, the gradient is a property of the line itself, not the chosen points. $\blacksquare$

_Intuition (Similar Triangles)._ Imagine two right triangles formed by dropping perpendiculars from any two pairs of points on the line to the $x$-axis. Both triangles share the angle that the line makes with the horizontal. By AA similarity, the triangles are similar, so the ratio of vertical to horizontal sides is constant — this ratio is the gradient.

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

_Proof (Perpendicular case)._ Consider two perpendicular lines through the origin with gradients $m_1$ and $m_2$. A point on the first line is $(1, m_1)$, and a point on the second is $(1, m_2)$. The vector from the origin to $(1, m_1)$ is $\mathbf{u} = (1, m_1)$, and the vector from the origin to $(1, m_2)$ is $\mathbf{v} = (1, m_2)$.

Since the lines are perpendicular, $\mathbf{u} \perp \mathbf{v}$, so their dot product is zero:

$$1 \cdot 1 + m_1 \cdot m_2 = 0 \implies m_1 m_2 = -1 \quad \blacksquare$$

<details>
<summary>Example</summary>
<p>

Find the equation of the line perpendicular to $2x - 3y + 7 = 0$ passing through $(4, -1)$.

Rearranging: $3y = 2x + 7$, so $y = \frac{2}{3}x + \frac{7}{3}$. Gradient: $m_1 = \frac{2}{3}$.

Perpendicular gradient: $m_2 = -\frac{3}{2}$.

$$y + 1 = -\frac{3}{2}(x - 4)$$

$$2y + 2 = -3x + 12 \implies 3x + 2y - 10 = 0$$

</p>
</details>

---

## 3. Circles

### 3.1 Equation of a Circle

**Theorem.** The circle with centre $(a, b)$ and radius $r$ has equation:

$$(x - a)^2 + (y - b)^2 = r^2$$

_Proof._ By definition, a circle is the set of all points at distance $r$ from the centre $(a, b)$. A point $(x, y)$ lies on the circle if and only if its distance from $(a, b)$ equals $r$:

$$
\begin{aligned}
\sqrt{(x - a)^2 + (y - b)^2} &= r \\
(x - a)^2 + (y - b)^2 &= r^2 \quad \blacksquare
\end{aligned}
$$

_Intuition._ This is simply Pythagoras' theorem applied to every point on the circle. The distance from the centre to any point on the circle is constant and equal to the radius.

### 3.2 Expanded Form

Expanding $(x - a)^2 + (y - b)^2 = r^2$:

$$x^2 - 2ax + a^2 + y^2 - 2by + b^2 = r^2$$

$$x^2 + y^2 - 2ax - 2by + (a^2 + b^2 - r^2) = 0$$

**Theorem.** The general equation $x^2 + y^2 + Dx + Ey + F = 0$ represents a circle with centre $\left(-\frac{D}{2}, -\frac{E}{2}\right)$ and radius $r = \sqrt{\frac{D^2}{4} + \frac{E^2}{4} - F}$, provided $D^2 + E^2 - 4F > 0$.

_Proof._ Completing the square in both $x$ and $y$:

$$
\begin{aligned}
x^2 + Dx &= \left(x + \frac{D}{2}\right)^2 - \frac{D^2}{4} \\
y^2 + Ey &= \left(y + \frac{E}{2}\right)^2 - \frac{E^2}{4}
\end{aligned}
$$

Substituting:

$$\left(x + \frac{D}{2}\right)^2 + \left(y + \frac{E}{2}\right)^2 = \frac{D^2 + E^2}{4} - F$$

This is a circle with centre $\left(-\frac{D}{2}, -\frac{E}{2}\right)$ and radius $\sqrt{\frac{D^2 + E^2}{4} - F}$, provided the right-hand side is positive. $\blacksquare$

:::tip
To find the centre and radius from the general form, always complete the square in $x$ and $y$. This is faster and less error-prone than memorising the formula.
:::

<details>
<summary>Example</summary>
<p>

Find the centre and radius of $x^2 + y^2 - 6x + 4y - 12 = 0$.

$$
\begin{aligned}
(x^2 - 6x) + (y^2 + 4y) &= 12 \\
(x - 3)^2 - 9 + (y + 2)^2 - 4 &= 12 \\
(x - 3)^2 + (y + 2)^2 &= 25
\end{aligned}
$$

Centre: $(3, -2)$, Radius: $5$.

</p>
</details>

---

## 4. Intersection of a Line and a Circle

### 4.1 The Tangent Condition

**Theorem.** The line $y = mx + c$ is tangent to the circle $(x - a)^2 + (y - b)^2 = r^2$ if and only if the discriminant of the resulting quadratic is zero.

_Proof._ Substituting $y = mx + c$ into the circle equation:

$$(x - a)^2 + (mx + c - b)^2 = r^2$$

Expanding gives a quadratic in $x$:

$$(1 + m^2)x^2 + \text{(linear term)} + \text{(constant)} = 0$$

This quadratic has:

- **Two distinct real roots** ($\Delta > 0$): the line intersects the circle at two points (a _secant_);
- **One repeated root** ($\Delta = 0$): the line touches the circle at exactly one point (a _tangent_);
- **No real roots** ($\Delta < 0$): the line does not intersect the circle. $\blacksquare$

_Intuition._ A tangent touches the circle at exactly one point. Algebraically, "one point" means the quadratic has a repeated root — the two intersection points have coalesced into one.

### 4.2 Equation of a Tangent to a Circle

**Theorem.** The tangent to the circle $x^2 + y^2 + Dx + Ey + F = 0$ at the point $(x_1, y_1)$ on the circle has equation:

$$x x_1 + y y_1 + \frac{D}{2}(x + x_1) + \frac{E}{2}(y + y_1) + F = 0$$

_Proof (for circle centred at origin)._ The circle $x^2 + y^2 = r^2$ has centre $(0, 0)$. The radius at $(x_1, y_1)$ has gradient $\frac{y_1}{x_1}$ (from origin to the point). The tangent is perpendicular to this radius, so the tangent's gradient is $m = -\frac{x_1}{y_1}$ (using $m_1 m_2 = -1$).

The tangent passes through $(x_1, y_1)$:

$$y - y_1 = -\frac{x_1}{y_1}(x - x_1)$$

$$y y_1 - y_1^2 = -x x_1 + x_1^2$$

$$x x_1 + y y_1 = x_1^2 + y_1^2 = r^2$$

(since $(x_1, y_1)$ lies on the circle). $\blacksquare$

<details>
<summary>Example</summary>
<p>

Find the equation of the tangent to $x^2 + y^2 = 25$ at the point $(3, 4)$.

Using $x x_1 + y y_1 = r^2$:

$$3x + 4y = 25$$

</p>
</details>

---

## 5. Angle in a Semicircle

**Theorem.** The angle subtended by a diameter at any point on the circle is a right angle.

_Proof._ Place the diameter on the $x$-axis from $(-r, 0)$ to $(r, 0)$. The circle is $x^2 + y^2 = r^2$. Let $P(x, y)$ be any point on the upper semicircle.

The gradient of $AP$ (from $(-r, 0)$ to $(x, y)$) is $\frac{y}{x + r}$.

The gradient of $BP$ (from $(r, 0)$ to $(x, y)$) is $\frac{y}{x - r}$.

The product of gradients: $\frac{y}{x + r} \cdot \frac{y}{x - r} = \frac{y^2}{x^2 - r^2}$.

Since $P$ lies on the circle: $x^2 + y^2 = r^2$, so $y^2 = r^2 - x^2 = -(x^2 - r^2)$.

Product: $\frac{-(x^2 - r^2)}{x^2 - r^2} = -1$ (for $x \neq \pm r$).

Since the product of gradients is $-1$, $AP \perp BP$. $\blacksquare$

---

## 6. Problem Set

**Problem 1.** Find the equation of the line through $A(2, 5)$ and $B(-1, 3)$.

<details>
<summary>Solution</summary>
<p>

$$m = \frac{3 - 5}{-1 - 2} = \frac{-2}{-3} = \frac{2}{3}$$

$$y - 5 = \frac{2}{3}(x - 2) \implies 3y - 15 = 2x - 4 \implies 2x - 3y + 11 = 0$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Equation of a line](#22-equation-of-a-line)

---

**Problem 2.** Find the centre and radius of the circle $x^2 + y^2 + 8x - 6y - 24 = 0$.

<details>
<summary>Solution</summary>
<p>

$$
\begin{aligned}
(x^2 + 8x) + (y^2 - 6y) &= 24 \\
(x + 4)^2 - 16 + (y - 3)^2 - 9 &= 24 \\
(x + 4)^2 + (y - 3)^2 &= 49
\end{aligned}
$$

Centre: $(-4, 3)$, Radius: $7$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Expanded form](#32-expanded-form)

---

**Problem 3.** Show that the line $y = x + 1$ is a tangent to the circle $x^2 + y^2 = 1$.

<details>
<summary>Solution</summary>
<p>

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

Wait — that gives two intersection points. Let me check: actually $2x^2 + 2x = 0$ gives $x = 0$ and $x = -1$, which are two points $(0, 1)$ and $(-1, 0)$.

So $y = x + 1$ is **not** tangent to $x^2 + y^2 = 1$. Let me reconsider the problem. Actually, this line passes through two points on the circle — it is a secant, not a tangent.

If the problem instead asked about $y = x + c$ being tangent:

Substitute: $2x^2 + 2cx + c^2 - 1 = 0$. Set $\Delta = 0$:

$4c^2 - 8(c^2 - 1) = 0 \implies -4c^2 + 8 = 0 \implies c = \pm\sqrt{2}$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Tangent condition](#41-the-tangent-condition)

---

**Problem 4.** Find the point of intersection of the lines $3x + 2y = 7$ and $x - y = 1$.

<details>
<summary>Solution</summary>
<p>

From (2): $x = y + 1$. Substitute into (1):

$$3(y + 1) + 2y = 7 \implies 5y + 3 = 7 \implies y = \frac{4}{5}$$

$$x = \frac{4}{5} + 1 = \frac{9}{5}$$

Intersection: $\left(\frac{9}{5}, \frac{4}{5}\right)$.

</p>
</details>
<b>If you get this wrong, revise:</b> [Linear simultaneous equations](./03-equations-and-inequalities.md)

---

**Problem 5.** The points $A(1, 2)$, $B(5, 4)$, and $C(3, 8)$ form a triangle. Show that $ABC$ is a right-angled triangle.

<details>
<summary>Solution</summary>
<p>

Gradient of $AB$: $\frac{4 - 2}{5 - 1} = \frac{1}{2}$.

Gradient of $BC$: $\frac{8 - 4}{3 - 5} = \frac{4}{-2} = -2$.

Product: $\frac{1}{2} \times (-2) = -1$.

Since $m_{AB} \cdot m_{BC} = -1$, $AB \perp BC$, so $\angle B = 90°$. $\blacksquare$

</p>
</details>
<b>If you get this wrong, revise:</b> [Parallel and perpendicular lines](#23-parallel-and-perpendicular-lines)

---

**Problem 6.** Find the equation of the tangent to the circle $(x - 2)^2 + (y + 1)^2 = 20$ at the point $(4, 3)$.

<details>
<summary>Solution</summary>
<p>

The centre is $(2, -1)$. The gradient of the radius from $(2, -1)$ to $(4, 3)$ is:

$$m_{\text{radius}} = \frac{3 - (-1)}{4 - 2} = \frac{4}{2} = 2$$

The tangent is perpendicular: $m_{\text{tangent}} = -\frac{1}{2}$.

$$y - 3 = -\frac{1}{2}(x - 4) \implies 2y - 6 = -x + 4 \implies x + 2y - 10 = 0$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Equation of a tangent](#42-equation-of-a-tangent-to-a-circle)

---

**Problem 7.** Find the shortest distance from the point $(3, 1)$ to the line $2x - y + 4 = 0$.

<details>
<summary>Solution</summary>
<p>

The perpendicular distance from $(x_0, y_0)$ to $ax + by + c = 0$ is:

$$d = \frac{|ax_0 + by_0 + c|}{\sqrt{a^2 + b^2}}$$

$$d = \frac{|2(3) - 1(1) + 4|}{\sqrt{4 + 1}} = \frac{|6 - 1 + 4|}{\sqrt{5}} = \frac{9}{\sqrt{5}} = \frac{9\sqrt{5}}{5}$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Distance formula](#1-the-coordinate-plane)

---

**Problem 8.** A circle has equation $x^2 + y^2 - 4x + 6y + 4 = 0$. Find the equation of the tangent at the point where $x = 1$.

<details>
<summary>Solution</summary>
<p>

When $x = 1$: $1 + y^2 - 4 + 6y + 4 = 0 \implies y^2 + 6y + 1 = 0$.

$$y = \frac{-6 \pm \sqrt{36 - 4}}{2} = \frac{-6 \pm \sqrt{32}}{2} = -3 \pm 2\sqrt{2}$$

Using the tangent formula for the general circle. First, rewrite as $(x - 2)^2 + (y + 3)^2 = 9$. Centre: $(2, -3)$.

At point $(1, -3 + 2\sqrt{2})$: gradient of radius $= \frac{-3 + 2\sqrt{2} + 3}{1 - 2} = \frac{2\sqrt{2}}{-1} = -2\sqrt{2}$.

Tangent gradient: $\frac{1}{2\sqrt{2}} = \frac{\sqrt{2}}{4}$.

$$y + 3 - 2\sqrt{2} = \frac{\sqrt{2}}{4}(x - 1)$$

$$4y + 12 - 8\sqrt{2} = \sqrt{2}\,x - \sqrt{2}$$

$$\sqrt{2}\,x - 4y - 12 - 7\sqrt{2} = 0$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Equation of a tangent](#42-equation-of-a-tangent-to-a-circle)

---

**Problem 9.** Two circles $C_1: x^2 + y^2 = 9$ and $C_2: (x - 5)^2 + y^2 = 4$ intersect at points $P$ and $Q$. Find the length of $PQ$.

<details>
<summary>Solution</summary>
<p>

The centres are $O_1(0, 0)$ and $O_2(5, 0)$ with radii $r_1 = 3$ and $r_2 = 2$.

Distance between centres: $d = 5$.

The line of centres is the $x$-axis. By symmetry, $PQ$ is perpendicular to the $x$-axis.

Subtract the equations: $x^2 + y^2 - [(x-5)^2 + y^2] = 9 - 4$

$$x^2 - x^2 + 10x - 25 = 5 \implies 10x = 30 \implies x = 3$$

So $PQ$ is the vertical line $x = 3$. The $y$-coordinates satisfy $9 + y^2 = 9 \implies y = 0$.

Wait, $x = 3$ in $C_1$: $9 + y^2 = 9$, so $y = 0$. The circles intersect at a single point $(3, 0)$ — they are tangent to each other.

So $PQ = 0$; the circles touch at exactly one point.

</p>
</details>
<b>If you get this wrong, revise:</b> [Intersection of line and circle](#4-intersection-of-a-line-and-a-circle)

---

**Problem 10.** Find the equation of the perpendicular bisector of the segment joining $A(1, 7)$ and $B(5, -1)$.

<details>
<summary>Solution</summary>
<p>

Midpoint: $M = \left(\frac{1 + 5}{2}, \frac{7 + (-1)}{2}\right) = (3, 3)$.

Gradient of $AB$: $\frac{-1 - 7}{5 - 1} = \frac{-8}{4} = -2$.

Perpendicular gradient: $\frac{1}{2}$.

$$y - 3 = \frac{1}{2}(x - 3) \implies 2y - 6 = x - 3 \implies x - 2y + 3 = 0$$

</p>
</details>
<b>If you get this wrong, revise:</b> [Perpendicular lines](#23-parallel-and-perpendicular-lines)
