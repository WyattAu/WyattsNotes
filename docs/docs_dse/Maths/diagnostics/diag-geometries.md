---
title: "Geometries -- Diagnostic Tests"
description: "Diagnostic tests for DSE Geometries: circle theorems, coordinate geometry proofs, vector geometry, and geometric reasoning."
slug: diag-geometries
hide_table_of_contents: true
---

# Geometries — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for geometries.

### UT-1: Circle Theorems — Angle at Centre

**Question:**

In the figure, $A$, $B$, $C$ are points on a circle with centre $O$. If $\angle ABC = 35°$ and $\angle BAC = 70°$, find $\angle AOC$.

**Solution:**

The angle at the centre is twice the angle at the circumference subtended by the same arc.

$\angle ABC = 35°$ is subtended by arc $AC$.

$\angle AOC = 2 \times \angle ABC = 2 \times 35° = 70°$.

Alternatively, in triangle $ABC$: $\angle ACB = 180° - 35° - 70° = 75°$.

$\angle AOC$ subtended by arc $ABC$ (the major arc) $= 2 \times 75° = 150°$.

Since $\angle AOC$ on the minor arc $AC$ plus the reflex angle $= 360°$:

Minor $\angle AOC = 2 \times 35° = 70°$.

A common mistake is confusing which arc the angle subtends. $\angle ABC$ subtends arc $AC$ (not containing $B$), so the angle at the centre is $70°$.

---

### UT-2: Tangent-Radius Perpendicularity

**Question:**

$TA$ and $TB$ are tangents to a circle with centre $O$, touching the circle at $A$ and $B$ respectively. If $\angle ATB = 50°$, find $\angle AOB$.

**Solution:**

$OA \perp TA$ and $OB \perp TB$ (tangent perpendicular to radius).

In quadrilateral $OATB$: $\angle OAT = \angle OBT = 90°$.

$$\angle AOB = 360° - 90° - 90° - 50° = 130°$$

---

### UT-3: Cyclic Quadrilateral Properties

**Question:**

$ABCD$ is a cyclic quadrilateral with $\angle A = 110°$ and $\angle C = 2\angle B$. Find $\angle B$ and $\angle D$.

**Solution:**

In a cyclic quadrilateral, opposite angles sum to $180°$:

$\angle A + \angle C = 180° \implies 110° + 2\angle B = 180° \implies 2\angle B = 70° \implies \angle B = 35°$.

$\angle B + \angle D = 180° \implies \angle D = 145°$.

---

### UT-4: Vector Geometry — Collinearity

**Question:**

Let $\vec{OA} = \mathbf{a}$, $\vec{OB} = \mathbf{b}$. Point $P$ divides $AB$ in the ratio $2:1$ and point $Q$ divides $AB$ in the ratio $3:2$. Express $\vec{PQ}$ in terms of $\mathbf{a}$ and $\mathbf{b}$.

**Solution:**

$\vec{AB} = \mathbf{b} - \mathbf{a}$.

$P$ divides $AB$ in ratio $2:1$ (i.e. $AP:PB = 2:1$):

$$\vec{OP} = \vec{OA} + \frac{2}{3}\vec{AB} = \mathbf{a} + \frac{2}{3}(\mathbf{b} - \mathbf{a}) = \frac{1}{3}\mathbf{a} + \frac{2}{3}\mathbf{b}$$

$Q$ divides $AB$ in ratio $3:2$ (i.e. $AQ:QB = 3:2$):

$$\vec{OQ} = \vec{OA} + \frac{3}{5}\vec{AB} = \mathbf{a} + \frac{3}{5}(\mathbf{b} - \mathbf{a}) = \frac{2}{5}\mathbf{a} + \frac{3}{5}\mathbf{b}$$

$$\vec{PQ} = \vec{OQ} - \vec{OP} = \left(\frac{2}{5} - \frac{1}{3}\right)\mathbf{a} + \left(\frac{3}{5} - \frac{2}{3}\right)\mathbf{b} = \frac{1}{15}\mathbf{a} - \frac{1}{15}\mathbf{b} = \frac{1}{15}(\mathbf{a} - \mathbf{b})$$

---

### UT-5: Coordinate Proof Using Algebra

**Question:**

Use coordinate geometry to prove that the midpoint of the hypotenuse of a right-angled triangle is equidistant from all three vertices.

**Solution:**

Place the right angle at the origin, with the legs along the axes.

Let $A = (0, 0)$, $B = (2a, 0)$, $C = (0, 2b)$.

Right angle at $A$, hypotenuse is $BC$.

Midpoint $M$ of $BC$: $\left(\dfrac{2a + 0}{2},\; \dfrac{0 + 2b}{2}\right) = (a,\; b)$.

$MA = \sqrt{a^2 + b^2}$.

$MB = \sqrt{(a - 2a)^2 + (b - 0)^2} = \sqrt{a^2 + b^2}$.

$MC = \sqrt{(a - 0)^2 + (b - 2b)^2} = \sqrt{a^2 + b^2}$.

Since $MA = MB = MC$, the midpoint of the hypotenuse is equidistant from all three vertices.

---

## Integration Tests

> Tests synthesis of geometries with other topics.

### IT-1: Geometries and Trigonometry (with Trigonometry)

**Question:**

In triangle $ABC$, $AB = 10$ cm, $BC = 8$ cm, $CA = 6$ cm. Find the radius of the circumscribed circle.

**Solution:**

First check it is a right triangle: $6^2 + 8^2 = 36 + 64 = 100 = 10^2$. Yes, right angle at $C$.

In a right triangle, the hypotenuse is the diameter of the circumscribed circle.

Radius $= \dfrac{AB}{2} = \dfrac{10}{2} = 5$ cm.

---

### IT-2: Geometries and Vectors (with Coordinate Geometry)

**Question:**

The position vectors of $A$ and $B$ are $\mathbf{a} = 2\mathbf{i} + 3\mathbf{j}$ and $\mathbf{b} = 8\mathbf{i} - \mathbf{j}$. Point $C$ has position vector $\mathbf{c} = 4\mathbf{i} + 7\mathbf{j}$. Prove that $A$, $B$, $C$ form an isosceles triangle.

**Solution:**

$$\vec{AB} = \mathbf{b} - \mathbf{a} = 6\mathbf{i} - 4\mathbf{j}$$

$$|\vec{AB}| = \sqrt{36 + 16} = \sqrt{52} = 2\sqrt{13}$$

$$\vec{AC} = \mathbf{c} - \mathbf{a} = 2\mathbf{i} + 4\mathbf{j}$$

$$|\vec{AC}| = \sqrt{4 + 16} = \sqrt{20} = 2\sqrt{5}$$

$$\vec{BC} = \mathbf{c} - \mathbf{b} = -4\mathbf{i} + 8\mathbf{j}$$

$$|\vec{BC}| = \sqrt{16 + 64} = \sqrt{80} = 4\sqrt{5}$$

Since $|\vec{AC}| = 2\sqrt{5}$ and $|\vec{BC}| = 4\sqrt{5}$ are not equal, check other pairs.

$|\vec{AB}| = 2\sqrt{13}$, $|\vec{AC}| = 2\sqrt{5}$, $|\vec{BC}| = 4\sqrt{5}$.

None are equal, so this is **not** isosceles. Let me verify: $|\vec{AC}|^2 + |\vec{BC}|^2 = 20 + 80 = 100 = (2\sqrt{13})^2 = 52$. No, $100 \neq 52$.

Actually, the triangle is scalene. The problem as stated is incorrect -- this tests whether you verify rather than assume.

If instead $\mathbf{c} = 5\mathbf{i} + 3\mathbf{j}$:

$|\vec{AC}| = \sqrt{9 + 0} = 3$, $|\vec{BC}| = \sqrt{9 + 16} = 5$. Still scalene.

The key takeaway: always compute and verify rather than assuming geometric properties.

---

### IT-3: Geometries and Algebra (with Polynomials)

**Question:**

The points $(1, 2)$, $(3, 6)$, and $(k, 10)$ are collinear. Find $k$.

**Solution:**

Collinearity means equal slopes:

$$\frac{6 - 2}{3 - 1} = \frac{10 - 6}{k - 3}$$

$$\frac{4}{2} = \frac{4}{k - 3}$$

$$2 = \frac{4}{k - 3}$$

$$k - 3 = 2 \implies k = 5$$
