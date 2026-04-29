---
title: Vectors
description:
  IB Mathematics — vector algebra, dot and cross products, lines and planes in three dimensions.
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
