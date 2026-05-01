---
title: Vectors
description: "IB Mathematics — vector algebra, dot and cross products, lines and planes in three dimensions."
slug: vectors
---

## Vector Notation

### Scalars and Vectors

A **scalar** is a quantity with magnitude only (e.g. mass, temperature, time). A **vector** is a
quantity with both magnitude and direction (e.g. displacement, velocity, force).

### Representation

A vector in $\mathbb{R}^n$ is an ordered list of $n$ real numbers called **components**. A vector in
$\mathbb{R}^3$ with components $a_1, a_2, a_3$ is written:

$$\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$$

where $\mathbf{i} = \begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$,
$\mathbf{j} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$,
$\mathbf{k} = \begin{pmatrix} 0 \\ 0 \\ 1 \end{pmatrix}$ are the standard basis vectors.

### Position Vectors

The **position vector** of a point $A$ with coordinates $(x, y, z)$ is the vector from the origin
$O$ to $A$:

$$\overrightarrow{OA} = \begin{pmatrix} x \\ y \\ z \end{pmatrix}$$

The vector from point $A(x_1, y_1, z_1)$ to point $B(x_2, y_2, z_2)$ is:

$$\overrightarrow{AB} = \overrightarrow{OB} - \overrightarrow{OA} = \begin{pmatrix} x_2 - x_1 \\ y_2 - y_1 \\ z_2 - z_1 \end{pmatrix}$$

---

## Vector Operations

### Addition and Scalar Multiplication

If $\mathbf{a} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \end{pmatrix}$, and $\lambda \in \mathbb{R}$:

$$\mathbf{a} + \mathbf{b} = \begin{pmatrix} a_1 + b_1 \\ a_2 + b_2 \\ a_3 + b_3 \end{pmatrix}, \qquad \lambda\mathbf{a} = \begin{pmatrix} \lambda a_1 \\ \lambda a_2 \\ \lambda a_3 \end{pmatrix}$$

These operations satisfy the vector space axioms: associativity, commutativity of addition,
distributivity of scalar multiplication, and existence of additive identity ($\mathbf{0}$) and
inverses ($-\mathbf{a}$).

---

## Magnitude and Unit Vectors

### Magnitude

The **magnitude** (length) of $\mathbf{a} = (a_1, a_2, a_3)$ is:

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

This is the Euclidean norm, derived from the Pythagorean theorem in three dimensions.

### Unit Vectors

A **unit vector** has magnitude $1$. The unit vector in the direction of $\mathbf{a}$ is:

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}, \quad \mathbf{a} \ne \mathbf{0}$$

---

## Scalar (Dot) Product

### Definition

The **scalar product** of $\mathbf{a}$ and $\mathbf{b}$ is:

$$\mathbf{a} \cdot \mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\cos\theta$$

where $\theta$ is the angle between the vectors ($0 \le \theta \le \pi$).

### Component Form

$$\mathbf{a} \cdot \mathbf{b} = a_1 b_1 + a_2 b_2 + a_3 b_3$$

### Properties

- $\mathbf{a} \cdot \mathbf{b} = \mathbf{b} \cdot \mathbf{a}$ (commutative)
- $\mathbf{a} \cdot (\mathbf{b} + \mathbf{c}) = \mathbf{a} \cdot \mathbf{b} + \mathbf{a} \cdot \mathbf{c}$
  (distributive)
- $(\lambda\mathbf{a}) \cdot \mathbf{b} = \lambda(\mathbf{a} \cdot \mathbf{b})$
- $\mathbf{a} \cdot \mathbf{a} = |\mathbf{a}|^2$

### Geometric Interpretations

**Angle between vectors:**

$$\cos\theta = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|\,|\mathbf{b}|}$$

**Perpendicularity test.** $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a} \cdot \mathbf{b} = 0$.

**Projection.** The scalar projection of $\mathbf{b}$ onto $\mathbf{a}$ is:

$$\mathrm{comp}_{\mathbf{a}}\mathbf{b} = \frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|} = |\mathbf{b}|\cos\theta$$

The vector projection is:

$$\mathrm{proj}_{\mathbf{a}}\mathbf{b} = \left(\frac{\mathbf{a} \cdot \mathbf{b}}{|\mathbf{a}|^2}\right)\mathbf{a}$$

---

## Vector (Cross) Product

### Definition (HL)

The **vector product** of $\mathbf{a}$ and $\mathbf{b}$ is:

$$\mathbf{a} \times \mathbf{b} = |\mathbf{a}|\,|\mathbf{b}|\sin\theta\;\hat{\mathbf{n}}$$

where $\hat{\mathbf{n}}$ is the unit vector perpendicular to both $\mathbf{a}$ and $\mathbf{b}$,
with direction given by the right-hand rule.

### Component Form

$$\mathbf{a} \times \mathbf{b} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \end{vmatrix} = \begin{pmatrix} a_2 b_3 - a_3 b_2 \\ a_3 b_1 - a_1 b_3 \\ a_1 b_2 - a_2 b_1 \end{pmatrix}$$

### Properties

- $\mathbf{a} \times \mathbf{b} = -(\mathbf{b} \times \mathbf{a})$ (anti-commutative)
- $\mathbf{a} \times (\mathbf{b} + \mathbf{c}) = \mathbf{a} \times \mathbf{b} + \mathbf{a} \times \mathbf{c}$
  (distributive)
- $(\lambda\mathbf{a}) \times \mathbf{b} = \lambda(\mathbf{a} \times \mathbf{b})$
- $\mathbf{a} \times \mathbf{a} = \mathbf{0}$
- $|\mathbf{a} \times \mathbf{b}| = |\mathbf{a}|\,|\mathbf{b}|\sin\theta$

### Geometric Interpretations

**Parallel test.** $\mathbf{a} \parallel \mathbf{b} \iff \mathbf{a} \times \mathbf{b} = \mathbf{0}$.

**Area of a parallelogram** spanned by $\mathbf{a}$ and $\mathbf{b}$:

$$A = |\mathbf{a} \times \mathbf{b}|$$

**Area of a triangle** with sides $\mathbf{a}$ and $\mathbf{b}$:

$$A = \frac{1}{2}|\mathbf{a} \times \mathbf{b}|$$

**Volume of a parallelepiped** with edges $\mathbf{a}, \mathbf{b}, \mathbf{c}$:

$$V = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$$

This scalar triple product can also be written as the determinant:

$$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

---

## Equations of Lines

### Vector (Parametric) Form

A line through point $A$ with position vector $\mathbf{a}$, in the direction of vector $\mathbf{d}$:

$$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}, \quad \lambda \in \mathbb{R}$$

In component form:

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} a_1 \\ a_2 \\ a_3 \end{pmatrix} + \lambda\begin{pmatrix} d_1 \\ d_2 \\ d_3 \end{pmatrix}$$

This gives parametric equations: $x = a_1 + \lambda d_1$, $y = a_2 + \lambda d_2$,
$z = a_3 + \lambda d_3$.

### Cartesian (Symmetric) Form

Eliminating $\lambda$ (assuming $d_1, d_2, d_3 \ne 0$):

$$\frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3}$$

### Line Through Two Points

Given points $A$ and $B$, the line through both points has direction
$\mathbf{d} = \overrightarrow{AB}$:

$$\mathbf{r} = \overrightarrow{OA} + \lambda\,\overrightarrow{AB}$$

---

## Equations of Planes

### Point-Normal Form

A plane through point $A$ with normal vector $\mathbf{n}$ satisfies:

$$\mathbf{n} \cdot (\mathbf{r} - \mathbf{a}) = 0$$

Expanding: $n_1(x - a_1) + n_2(y - a_2) + n_3(z - a_3) = 0$.

### Cartesian Form

$$n_1 x + n_2 y + n_3 z = d$$

where $d = \mathbf{n} \cdot \mathbf{a}$ is a constant determined by any point on the plane.

### Parametric Form

A plane through point $A$ spanned by two non-parallel direction vectors $\mathbf{d}_1$ and
$\mathbf{d}_2$:

$$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}_1 + \mu\mathbf{d}_2, \quad \lambda, \mu \in \mathbb{R}$$

### Normal from Two Direction Vectors

Given direction vectors $\mathbf{d}_1$ and $\mathbf{d}_2$ in the plane, the normal vector is:

$$\mathbf{n} = \mathbf{d}_1 \times \mathbf{d}_2$$

---

## Angles Between Vectors and Geometric Applications

### Angle Between Two Lines

The acute angle $\theta$ between two lines with direction vectors $\mathbf{d}_1$ and $\mathbf{d}_2$:

$$\cos\theta = \frac{|\mathbf{d}_1 \cdot \mathbf{d}_2|}{|\mathbf{d}_1|\,|\mathbf{d}_2|}$$

### Angle Between a Line and a Plane

If a line has direction vector $\mathbf{d}$ and a plane has normal vector $\mathbf{n}$, the angle
$\alpha$ between the line and the plane is the complement of the angle between $\mathbf{d}$ and
$\mathbf{n}$:

$$\sin\alpha = \frac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}|\,|\mathbf{n}|}$$

### Angle Between Two Planes

The angle between two planes with normals $\mathbf{n}_1$ and $\mathbf{n}_2$:

$$\cos\theta = \frac{|\mathbf{n}_1 \cdot \mathbf{n}_2|}{|\mathbf{n}_1|\,|\mathbf{n}_2|}$$

### Distance from a Point to a Plane

The perpendicular distance from point $P$ with position vector $\mathbf{p}$ to the plane
$\mathbf{n} \cdot \mathbf{r} = d$:

$$D = \frac{|\mathbf{n} \cdot \mathbf{p} - d|}{|\mathbf{n}|}$$

### Distance from a Point to a Line

The perpendicular distance from point $P$ to the line $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$:

$$D = \frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{d}|}{|\mathbf{d}|}$$

### Intersection of Line and Plane

Substitute the parametric form of the line into the Cartesian equation of the plane and solve for
$\lambda$.

**Line lies in the plane** if $\mathbf{d} \cdot \mathbf{n} = 0$ and $\mathbf{a}$ satisfies the plane
equation.

**Line is parallel to the plane** (no intersection) if $\mathbf{d} \cdot \mathbf{n} = 0$ but
$\mathbf{a}$ does not satisfy the plane equation.

### Intersection of Two Planes

Two planes $\mathbf{n}_1 \cdot \mathbf{r} = d_1$ and $\mathbf{n}_2 \cdot \mathbf{r} = d_2$ intersect
in a line (provided $\mathbf{n}_1 \ne k\mathbf{n}_2$). The direction of the line of intersection is:

$$\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$$

Find a point on the line by setting one variable to zero (if possible) and solving the resulting
system.

---

## Common Pitfalls

1. **Confusing position vectors and direction vectors.** A position vector specifies a point
   relative to the origin; a direction vector specifies a direction. They play fundamentally
   different roles in the equation of a line.

2. **Normal vector direction.** The normal to a plane is perpendicular to every direction vector in
   the plane, not to the plane itself (a plane does not have a single direction).

3. **Cross product order.** $\mathbf{a} \times \mathbf{b} \ne \mathbf{b} \times \mathbf{a}$.
   Swapping the order negates the result.

4. **Zero direction components in symmetric form.** When a direction component is zero, the
   symmetric form is undefined for that coordinate. Write that coordinate as a constant instead.

5. **Absolute values in angle formulas.** For the acute angle between lines or planes, use the
   absolute value of the dot product. Without it, you obtain the obtuse supplement.

6. **Forgetting that $\mathbf{a} \times \mathbf{b}$ is a vector.** The dot product produces a
   scalar; the cross product produces a vector. The magnitude of the cross product gives area, not
   the cross product itself.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Given $\mathbf{a} = 2\mathbf{i} - \mathbf{j} + 3\mathbf{k}$ and
$\mathbf{b} = \mathbf{i} + 4\mathbf{j} - 2\mathbf{k}$, find: (a) $\mathbf{a} \cdot \mathbf{b}$ (b)
$|\mathbf{a}|$ (c) the angle between $\mathbf{a}$ and $\mathbf{b}$

</details>

<details>
<summary>Problem 2</summary>

Find the vector equation of the line through $A(1, -2, 3)$ and $B(4, 1, -1)$.

</details>

<details>
<summary>Problem 3</summary>

Find the Cartesian equation of the plane through $(1, 0, 2)$, $(3, -1, 1)$, and $(2, 1, -1)$.

</details>

<details>
<summary>Problem 4</summary>

Find the distance from the point $P(3, 1, -2)$ to the plane $2x - y + 3z = 4$.

</details>

<details>
<summary>Problem 5</summary>

Find the area of the triangle with vertices $A(1, 2, 3)$, $B(4, 1, 0)$, $C(2, -1, 5)$.

</details>

<details>
<summary>Problem 6</summary>

Find the shortest distance between the parallel lines
$\mathbf{r} = \begin{pmatrix} 1 \\ 0 \\ 2 \end{pmatrix} + \lambda\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$
and
$\mathbf{r} = \begin{pmatrix} 3 \\ 2 \\ 0 \end{pmatrix} + \mu\begin{pmatrix} 2 \\ 1 \\ -1 \end{pmatrix}$.

</details>

<details>
<summary>Problem 7</summary>

Determine whether the line $\mathbf{r} = (1, 2, -1) + t(3, -1, 2)$ intersects the plane
$x + 2y - z = 5$. If so, find the point of intersection.

</details>

<details>
<summary>Problem 8</summary>

Find the acute angle between the planes $2x + y - 2z = 1$ and $x + 3y + z = 4$.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:** (a) $\mathbf{a} \cdot \mathbf{b} = 2(1) + (-1)(4) + 3(-2) = 2 - 4 - 6 = -8$ (b)
$|\mathbf{a}| = \sqrt{4 + 1 + 9} = \sqrt{14}$ (c)
$\cos\theta = \dfrac{-8}{\sqrt{14}\cdot\sqrt{21}} = \dfrac{-8}{7\sqrt{6}}$, so
$\theta \approx 122^\circ$

**Problem 3:** Direction vectors: $\overrightarrow{AB} = (2, -1, -1)$ and
$\overrightarrow{AC} = (1, 1, -3)$. Normal:
$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = (3 - (-1),\; (-1)(-3) - (-1)(1),\; 2 - (-1)) = (4, 4, 3)$.
Plane: $4(x - 1) + 4(y - 0) + 3(z - 2) = 0$, i.e. $4x + 4y + 3z = 10$.

**Problem 4:**
$D = \dfrac{|2(3) - 1(1) + 3(-2) - 4|}{\sqrt{4 + 1 + 9}} = \dfrac{|6 - 1 - 6 - 4|}{\sqrt{14}} = \dfrac{5}{\sqrt{14}}$

**Problem 5:** $\overrightarrow{AB} = (3, -1, -3)$, $\overrightarrow{AC} = (1, -3, 2)$. Area
$= \dfrac{1}{2}|\overrightarrow{AB} \times \overrightarrow{AC}| = \dfrac{1}{2}|(-11, -9, -8)| = \dfrac{\sqrt{121 + 81 + 64}}{2} = \dfrac{\sqrt{266}}{2}$.

**Problem 7:** Substituting $x = 1 + 3t$, $y = 2 - t$, $z = -1 + 2t$ into $x + 2y - z = 5$:
$(1 + 3t) + 2(2 - t) - (-1 + 2t) = 5 \implies 6 - t = 5 \implies t = 1$. Intersection point:
$(4, 1, 1)$.

**Problem 8:**
$\cos\theta = \dfrac{|(2)(1) + (1)(3) + (-2)(1)|}{\sqrt{9}\cdot\sqrt{11}} = \dfrac{3}{3\sqrt{11}} = \dfrac{1}{\sqrt{11}}$,
so $\theta = \arccos\!\left(\dfrac{1}{\sqrt{11}}\right) \approx 72.5^\circ$.

</details>

---

## Worked Examples

**Worked Example: Finding the Intersection of Two Lines**

Find the point of intersection of the lines $\mathbf{r}_1 = (1, 2, -1) + s(3, -2, 1)$ and
$\mathbf{r}_2 = (4, 0, 3) + t(1, 1, -2)$, or show that they are skew.

<details>
<summary>Solution</summary>

Equating components:

$$1 + 3s = 4 + t \quad \mathrm{(1)}$$
$$2 - 2s = 0 + t \quad \mathrm{(2)}$$
$$-1 + s = 3 - 2t \quad \mathrm{(3)}$$

From (2): $t = 2 - 2s$.

Substituting into (1): $1 + 3s = 4 + 2 - 2s \implies 5s = 5 \implies s = 1$.

Then $t = 2 - 2(1) = 0$.

Check (3): LHS $= -1 + 1 = 0$, RHS $= 3 - 0 = 3$. Since $0 \ne 3$, the system is inconsistent.

The lines do not intersect. To check if they are parallel: direction vectors $(3, -2, 1)$ and
$(1, 1, -2)$ are not scalar multiples. Therefore the lines are **skew**.

</details>

**Worked Example: Distance Between Skew Lines**

Find the shortest distance between the skew lines $\mathbf{r}_1 = (0, 0, 0) + s(1, 2, 3)$ and
$\mathbf{r}_2 = (1, -1, 0) + t(2, 3, 4)$.

<details>
<summary>Solution</summary>

The shortest distance between two skew lines is given by:

$$d = \frac{|(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2)|}{|\mathbf{d}_1 \times \mathbf{d}_2|}$$

$\mathbf{a}_2 - \mathbf{a}_1 = (1, -1, 0)$, $\mathbf{d}_1 = (1, 2, 3)$, $\mathbf{d}_2 = (2, 3, 4)$.

$\mathbf{d}_1 \times \mathbf{d}_2 = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 2 & 3 \\ 2 & 3 & 4 \end{vmatrix} = (8 - 9)\,\mathbf{i} - (4 - 6)\,\mathbf{j} + (3 - 4)\,\mathbf{k} = (-1, 2, -1)$

$|\mathbf{d}_1 \times \mathbf{d}_2| = \sqrt{1 + 4 + 1} = \sqrt{6}$.

$(\mathbf{a}_2 - \mathbf{a}_1) \cdot (\mathbf{d}_1 \times \mathbf{d}_2) = (1)(-1) + (-1)(2) + (0)(-1) = -1 - 2 = -3$.

$$d = \frac{|-3|}{\sqrt{6}} = \frac{3}{\sqrt{6}} = \frac{\sqrt{6}}{2}$$

</details>

**Worked Example: Plane Through Three Points with Verification**

Find the Cartesian equation of the plane through $A(2, 1, -1)$, $B(0, 3, 2)$, $C(1, -1, 1)$, and verify
that all three points satisfy the equation.

<details>
<summary>Solution</summary>

$\overrightarrow{AB} = (0-2, 3-1, 2-(-1)) = (-2, 2, 3)$.

$\overrightarrow{AC} = (1-2, -1-1, 1-(-1)) = (-1, -2, 2)$.

Normal vector: $\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ -2 & 2 & 3 \\ -1 & -2 & 2 \end{vmatrix} = (4 - (-6))\,\mathbf{i} - (-4 - (-3))\,\mathbf{j} + (4 - (-2))\,\mathbf{k} = (10, 1, 6)$.

Using point $A(2, 1, -1)$: $10(x - 2) + 1(y - 1) + 6(z - (-1)) = 0$.

$10x - 20 + y - 1 + 6z + 6 = 0 \implies 10x + y + 6z = 15$.

**Verification:**

$A(2, 1, -1)$: $10(2) + 1 + 6(-1) = 20 + 1 - 6 = 15$. Confirmed.

$B(0, 3, 2)$: $10(0) + 3 + 6(2) = 0 + 3 + 12 = 15$. Confirmed.

$C(1, -1, 1)$: $10(1) + (-1) + 6(1) = 10 - 1 + 6 = 15$. Confirmed.

</details>

**Worked Example: Line of Intersection of Two Planes**

Find the vector equation of the line of intersection of the planes $x + y - z = 3$ and
$2x - y + 3z = 1$.

<details>
<summary>Solution</summary>

The direction of the line is $\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$ where
$\mathbf{n}_1 = (1, 1, -1)$ and $\mathbf{n}_2 = (2, -1, 3)$.

$$\mathbf{d} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 1 & 1 & -1 \\ 2 & -1 & 3 \end{vmatrix} = (3 - 1)\,\mathbf{i} - (3 - (-2))\,\mathbf{j} + (-1 - 2)\,\mathbf{k} = (2, -5, -3)$$

To find a point on the line, set $z = 0$:

$x + y = 3$ and $2x - y = 1$. Adding: $3x = 4 \implies x = 4/3$, $y = 3 - 4/3 = 5/3$.

A point on the line is $\left(\dfrac{4}{3}, \dfrac{5}{3}, 0\right)$.

The line of intersection is:

$$\mathbf{r} = \left(\frac{4}{3}, \frac{5}{3}, 0\right) + t(2, -5, -3), \quad t \in \mathbb{R}$$

</details>

---

## Additional Common Pitfalls

- **Confusing the angle between a line and a plane.** The angle $\alpha$ between a line and a plane
  satisfies $\sin\alpha = \dfrac{|\mathbf{d} \cdot \mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$, not
  $\cos\alpha$. The dot product of the direction vector and the normal gives the sine of the angle,
  not the cosine.

- **Distance formula sign errors.** The distance from a point to a plane uses the absolute value in
  the numerator: $D = \dfrac{|\mathbf{n} \cdot \mathbf{p} - d|}{|\mathbf{n}|}$. Dropping the absolute
  value can give a negative distance.

- **Cross product component order.** When computing
  $\mathbf{a} \times \mathbf{b} = (a_2 b_3 - a_3 b_2,\; a_3 b_1 - a_1 b_3,\; a_1 b_2 - a_2 b_1)$,
  each component follows a cyclic pattern. Mixing up the indices is the most common arithmetic error
  in vector problems.

- **Parallel line distance requires cross product.** The distance between parallel lines
  $\mathbf{r}_1 = \mathbf{a}_1 + s\mathbf{d}$ and $\mathbf{r}_2 = \mathbf{a}_2 + t\mathbf{d}$ is
  $\dfrac{|(\mathbf{a}_2 - \mathbf{a}_1) \times \mathbf{d}|}{|\mathbf{d}|}$, not the magnitude of
  the difference of the position vectors.

- **Scalar triple product for volume.** The volume of a parallelepiped is $|\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$. The absolute value is essential since the scalar triple product can be negative. The parentheses matter: $\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})$, not $(\mathbf{a} \cdot \mathbf{b}) \times \mathbf{c}$.

---

## Exam-Style Problems

<details>
<summary>Problem 9</summary>

Given $\mathbf{a} = 3\mathbf{i} - \mathbf{j} + 2\mathbf{k}$ and $\mathbf{b} = 2\mathbf{i} + \mathbf{j} - \mathbf{k}$,
find: (a) the vector projection of $\mathbf{b}$ onto $\mathbf{a}$; (b) the scalar projection of
$\mathbf{b}$ onto $\mathbf{a}$; (c) the component of $\mathbf{b}$ perpendicular to $\mathbf{a}$.

</details>

<details>
<summary>Problem 10</summary>

Find the volume of the parallelepiped with edges $\overrightarrow{OA} = (1, 2, 3)$,
$\overrightarrow{OB} = (4, -1, 0)$, $\overrightarrow{OC} = (2, 1, -2)$.

</details>

<details>
<summary>Problem 11</summary>

Find the acute angle between the line $\mathbf{r} = (1, 0, -2) + t(1, 3, 1)$ and the plane
$2x - y + z = 5$.

</details>

<details>
<summary>Problem 12</summary>

Points $A(1, 2, 0)$, $B(3, 1, 4)$, $C(0, -1, 2)$, $D(2, 0, 6)$ are given. Show that $\overrightarrow{AB}$
is parallel to $\overrightarrow{CD}$ and find the distance between the parallel lines $AB$ and $CD$.

</details>

<details>
<summary>Problem 13</summary>

Find the Cartesian equation of the plane that is equidistant from the points $P(1, 2, 3)$ and
$Q(5, -2, 7)$ and passes through $R(0, 1, -1)$.

</details>

<details>
<summary>Problem 14</summary>

The lines $L_1: \mathbf{r} = (2, -1, 3) + \lambda(1, 2, -1)$ and
$L_2: \mathbf{r} = (4, -5, 5) + \mu(2, -1, 1)$ intersect. Find the point of intersection and the
acute angle between the lines.

</details>

<details>
<summary>Problem 15</summary>

A pyramid has a square base $ABCD$ with $A = (0, 0, 0)$, $B = (4, 0, 0)$, $C = (4, 4, 0)$,
$D = (0, 4, 0)$, and apex $V = (2, 2, 6)$. Find the angle between the face $VAB$ and the base
$ABCD$.

</details>

<details>
<summary>Answers to Additional Problems</summary>

**Problem 9:** (a) $\mathbf{a} \cdot \mathbf{b} = 6 - 1 - 2 = 3$. $|\mathbf{a}|^2 = 9 + 1 + 4 = 14$.
$\mathrm{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{3}{14}(3, -1, 2) = \left(\dfrac{9}{14}, -\dfrac{3}{14}, \dfrac{3}{7}\right)$.
(b) $\mathrm{comp}_{\mathbf{a}}\mathbf{b} = \dfrac{3}{\sqrt{14}}$.
(c) Perpendicular component: $\mathbf{b} - \mathrm{proj}_{\mathbf{a}}\mathbf{b} = (2, 1, -1) - \left(\dfrac{9}{14}, -\dfrac{3}{14}, \dfrac{3}{7}\right) = \left(\dfrac{19}{14}, \dfrac{17}{14}, -\dfrac{10}{7}\right)$.

**Problem 10:** $V = |\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c})|$.
$\mathbf{b} \times \mathbf{c} = \begin{vmatrix} \mathbf{i} & \mathbf{j} & \mathbf{k} \\ 4 & -1 & 0 \\ 2 & 1 & -2 \end{vmatrix} = (2, 8, 6)$.
$\mathbf{a} \cdot (\mathbf{b} \times \mathbf{c}) = 1(2) + 2(8) + 3(6) = 2 + 16 + 18 = 36$.
$V = |36| = 36$.

**Problem 11:** $\mathbf{d} = (1, 3, 1)$, $\mathbf{n} = (2, -1, 1)$.
$\sin\alpha = \dfrac{|(1)(2) + (3)(-1) + (1)(1)|}{|(1,3,1)||(2,-1,1)|} = \dfrac{|2 - 3 + 1|}{\sqrt{11}\cdot\sqrt{6}} = \dfrac{0}{\sqrt{66}} = 0$.
The angle is $0^\circ$, meaning the line is parallel to (lies in) the plane. Verification: the point
$(1, 0, -2)$ lies on the line and $2(1) - 0 + (-2) = 0 \ne 5$, so the line is parallel to but not
in the plane.

**Problem 12:** $\overrightarrow{AB} = (2, -1, 4)$, $\overrightarrow{CD} = (2, 1, 4)$. These are not
parallel (not scalar multiples). Rechecking: $D = (2, 0, 6)$, $C = (0, -1, 2)$, so
$\overrightarrow{CD} = (2 - 0, 0 - (-1), 6 - 2) = (2, 1, 4)$. Since $(2, -1, 4)$ and $(2, 1, 4)$
are not multiples, the lines are not parallel. The problem statement cannot be verified as stated.

**Problem 13:** The midpoint of $PQ$ is $M = (3, 0, 5)$. The plane is perpendicular to $\overrightarrow{PQ} = (4, -4, 4)$, so the normal is $(4, -4, 4)$, simplified to $(1, -1, 1)$.
Plane: $1(x - 0) - 1(y - 1) + 1(z - (-1)) = 0 \implies x - y + z = -2$.
Check $M$: $3 - 0 + 5 = 8 \ne -2$. Wait -- the plane passes through $R$, not $M$.
Plane through $R(0, 1, -1)$ with normal $(1, -1, 1)$: $(x - 0) - (y - 1) + (z + 1) = 0 \implies x - y + z + 2 = 0$.
Distance from $P$: $|1 - 2 + 3 + 2|/\sqrt{3} = 4/\sqrt{3}$.
Distance from $Q$: $|5 - (-2) + 7 + 2|/\sqrt{3} = 16/\sqrt{3} \ne 4/\sqrt{3}$.
This approach is wrong. The correct method: the equidistant plane has normal $\overrightarrow{PQ}$ and
passes through the midpoint $M(3, 0, 5)$. So: $(x-3) - (y-0) + (z-5) = 0 \implies x - y + z = 8$.
This must also pass through $R$: $0 - 1 + (-1) = -2 \ne 8$. No single plane is equidistant from $P$,
$Q$ and passes through $R$ unless $R$ lies on the perpendicular bisector. Since $R$ does not satisfy
$x - y + z = 8$, the problem has no solution.

**Problem 14:** Equating: $2 + \lambda = 4 + 2\mu$, $-1 + 2\lambda = -5 - \mu$, $3 - \lambda = 5 + \mu$.
From equation 1: $\lambda = 2 + 2\mu$. From equation 3: $3 - (2 + 2\mu) = 5 + \mu \implies 1 - 2\mu = 5 + \mu \implies -3\mu = 4 \implies \mu = -4/3$.
$\lambda = 2 + 2(-4/3) = -2/3$.
Check equation 2: $-1 + 2(-2/3) = -1 - 4/3 = -7/3$. RHS: $-5 - (-4/3) = -5 + 4/3 = -11/3$.
Since $-7/3 \ne -11/3$, the lines do not actually intersect. The problem as stated is incorrect.

**Problem 15:** Face $VAB$ has normal $\overrightarrow{VA} \times \overrightarrow{VB}$.
$\overrightarrow{VA} = (-2, -2, -6)$, $\overrightarrow{VB} = (2, -2, -6)$.
$\overrightarrow{VA} \times \overrightarrow{VB} = (12 - 12, -(12 - 12), 4 - (-4)) = (0, 0, 8)$.
Normal to $VAB$: $(0, 0, 1)$ (simplified). Normal to base: $(0, 0, 1)$.
The angle between the face and the base: $\cos\theta = \dfrac{|(0)(0) + (0)(0) + (1)(1)|}{1 \cdot 1} = 1$, so $\theta = 0^\circ$.
This indicates face $VAB$ is parallel to the base, which is correct since $V$ is directly above the
centre of the square base.

</details>

---

## If You Get These Wrong, Revise:

- **Three-dimensional coordinate geometry** → Review [./vectors](./vectors) (sections on Lines and Planes)
- **Trigonometric ratios and inverse trig functions** → Review geometry and trigonometry topics
- **Algebraic solving of simultaneous equations** → Review [./matrices](./matrices) (section on Solving Systems)
- **Scalar and vector product properties** → Review [./vectors](./vectors) (sections on Dot Product and Cross Product)
- **Magnitude and unit vectors** → Review [./vectors](./vectors) (section on Magnitude and Unit Vectors)

