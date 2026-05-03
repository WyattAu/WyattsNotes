---
title: Coordinate Geometry -- Diagnostic Tests
description: "Diagnostic tests for DSE Coordinate Geometry: distance formula, straight lines, circle equations, locus, and completing the square."
slug: diag-coordinate-geometry
hide_table_of_contents: true
---

# Coordinate Geometry — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for coordinate geometry.

### UT-1: Circle Equation by Completing the Square

**Question:**

Find the centre and radius of the circle $x^2 + y^2 - 6x + 4y - 12 = 0$.

**Solution:**

Complete the square for $x$ and $y$:

$$(x^2 - 6x + 9) + (y^2 + 4y + 4) = 12 + 9 + 4$$

$$(x - 3)^2 + (y + 2)^2 = 25$$

Centre: $(3,\; -2)$, Radius: $5$.

---

### UT-2: Perpendicular Slopes Product Equals -1

**Question:**

The line $L_1$ passes through $A(1, 3)$ and $B(5, 7)$. The line $L_2$ passes through $C(4, -1)$ and is perpendicular to $L_1$. Find the equation of $L_2$.

**Solution:**

Slope of $L_1$: $m_1 = \dfrac{7 - 3}{5 - 1} = \dfrac{4}{4} = 1$.

Slope of $L_2$: $m_2 = \dfrac{-1}{m_1} = -1$.

Using point-slope form with point $C(4, -1)$:

$$y - (-1) = -1(x - 4)$$

$$y + 1 = -x + 4$$

$$y = -x + 3$$

or $x + y - 3 = 0$.

---

### UT-3: Circle Tangent from External Point

**Question:**

Find the length of the tangent from the point $P(8, 3)$ to the circle $x^2 + y^2 - 4x - 6y + 9 = 0$.

**Solution:**

Complete the square: $(x - 2)^2 + (y - 3)^2 = 4$.

Centre $C = (2, 3)$, radius $r = 2$.

Distance from $P$ to $C$: $PC = \sqrt{(8-2)^2 + (3-3)^2} = \sqrt{36} = 6$.

Length of tangent: $PT = \sqrt{PC^2 - r^2} = \sqrt{36 - 4} = \sqrt{32} = 4\sqrt{2}$.

---

### UT-4: Locus Definition

**Question:**

A point $P(x, y)$ moves such that its distance from $(3, -1)$ is always twice its distance from the line $x = -1$. Find the equation of the locus of $P$.

**Solution:**

Distance from $P$ to $(3, -1)$: $\sqrt{(x-3)^2 + (y+1)^2}$.

Distance from $P$ to $x = -1$: $|x + 1|$.

$$\sqrt{(x-3)^2 + (y+1)^2} = 2|x + 1|$$

Square both sides:

$$(x-3)^2 + (y+1)^2 = 4(x+1)^2$$

$$x^2 - 6x + 9 + y^2 + 2y + 1 = 4x^2 + 8x + 4$$

$$-3x^2 - 14x + y^2 + 2y + 6 = 0$$

$$3x^2 - y^2 + 14x - 2y - 6 = 0$$

This is a hyperbola.

---

### UT-5: Intersection of Line and Circle

**Question:**

Find the coordinates of the points of intersection of the line $y = 2x - 1$ and the circle $x^2 + y^2 - 10x - 6y + 25 = 0$.

**Solution:**

Substitute $y = 2x - 1$ into the circle equation:

$$x^2 + (2x - 1)^2 - 10x - 6(2x - 1) + 25 = 0$$

$$x^2 + 4x^2 - 4x + 1 - 10x - 12x + 6 + 25 = 0$$

$$5x^2 - 26x + 32 = 0$$

$$(5x - 16)(x - 2) = 0$$

$$x = \frac{16}{5} \quad \text{or} \quad x = 2$$

$x = \dfrac{16}{5}$: $y = \dfrac{32}{5} - 1 = \dfrac{27}{5}$. Point: $\left(\dfrac{16}{5},\; \dfrac{27}{5}\right)$.

$x = 2$: $y = 3$. Point: $(2,\; 3)$.

---

## Integration Tests

> Tests synthesis of coordinate geometry with other topics.

### IT-1: Coordinate Geometry and Quadratics (with Quadratics)

**Question:**

The line $y = mx + c$ is tangent to the circle $x^2 + y^2 = 4$. Express $c$ in terms of $m$.

**Solution:**

Substitute $y = mx + c$:

$$x^2 + (mx + c)^2 = 4$$

$$x^2 + m^2x^2 + 2mcx + c^2 - 4 = 0$$

$$(1 + m^2)x^2 + 2mcx + (c^2 - 4) = 0$$

For tangency, $\Delta = 0$:

$$(2mc)^2 - 4(1 + m^2)(c^2 - 4) = 0$$

$$4m^2c^2 - 4(1 + m^2)(c^2 - 4) = 0$$

$$m^2c^2 - (1 + m^2)c^2 + 4(1 + m^2) = 0$$

$$m^2c^2 - c^2 - m^2c^2 + 4 + 4m^2 = 0$$

$$-c^2 + 4 + 4m^2 = 0$$

$$c^2 = 4(1 + m^2)$$

$$c = \pm 2\sqrt{1 + m^2}$$

---

### IT-2: Coordinate Geometry and Trigonometry (with Trigonometry)

**Question:**

The points $A(1, 0)$ and $B(0, 1)$ are on the unit circle. Find the coordinates of point $C$ on the unit circle such that triangle $ABC$ is equilateral.

**Solution:**

$OA = OB = OC = 1$ (all on unit circle).

Angle $AOB$: $\angle AOB$ where $A = (1, 0)$ and $B = (0, 1)$.

$\cos \angle AOB = \dfrac{\vec{OA} \cdot \vec{OB}}{|OA||OB|} = \dfrac{0 + 0}{1} = 0$, so $\angle AOB = 90°$.

For an equilateral triangle inscribed in a circle, each angle is $60°$. But $\angle AOB = 90° \neq 60°$, so there is **no** equilateral triangle with vertices $A$, $B$, $C$ all on the unit circle.

This tests the misconception of assuming any three points on a circle can form an equilateral triangle.

---

### IT-3: Coordinate Geometry and Functions (with Functions)

**Question:**

The parabola $y = x^2 - 4x + 7$ has vertex $V$. Find the coordinates of $V$, and the equation of the axis of symmetry. If the parabola is reflected in the $y$-axis, find the equation of the reflected parabola.

**Solution:**

$y = (x - 2)^2 - 4 + 7 = (x - 2)^2 + 3$.

Vertex: $V = (2, 3)$.

Axis of symmetry: $x = 2$.

Reflecting in the $y$-axis replaces $x$ with $-x$:

$y = (-x)^2 - 4(-x) + 7 = x^2 + 4x + 7 = (x + 2)^2 + 3$.

The reflected parabola has vertex $(-2, 3)$ and axis $x = -2$.
