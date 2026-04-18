---
title: Vectors in 3D
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-vectors
sidebar_position: 9
---

## Vectors in 3D

This chapter extends the study of vectors from A Level Mathematics into three dimensions,
introducing the vector (cross) product, equations of planes, and the scalar triple product. These
tools are essential for geometry, mechanics, and physics at university level.

### Board Coverage

| Board   | Paper   | Notes                                                                     |
| ------- | ------- | ------------------------------------------------------------------------- |
| AQA     | Paper 1 | 3D vectors, scalar product, vector product, planes, scalar triple product |
| Edexcel | FP1     | 3D vectors, scalar product, vector product, lines and planes              |
| OCR (A) | Paper 1 | 3D vectors, scalar product, vector product, planes                        |
| CIE     | P1      | 3D vectors, scalar product, vector product, lines, planes, intersections  |

:::info
All boards cover 3D vectors, the scalar product, and the vector product. AQA includes the
scalar triple product for volumes. CIE places particular emphasis on intersections of lines and
planes.
:::

<hr />

## 1. Review of A Level Vectors

A vector has magnitude and direction. In 2D, $\mathbf{a} = \begin{pmatrix}a_1\\a_2\end{pmatrix}$ has
magnitude $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}$.

Key results from A Level:

- **Scalar (dot) product:** $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$
- **Perpendicularity:** $\mathbf{a} \perp \mathbf{b} \iff \mathbf{a}\cdot\mathbf{b} = 0$
- **Vector equation of a line:** $\mathbf{r} = \mathbf{a} + t\mathbf{d}$

This chapter extends all of these ideas into three dimensions and introduces new operations.

<hr />

## 2. Vectors in 3D

### 2.1 Notation

A vector in 3D is written as a column vector or in component form:

$$\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix} = a_1\mathbf{i} + a_2\mathbf{j} + a_3\mathbf{k}$$

where $\mathbf{i}$, $\mathbf{j}$, $\mathbf{k}$ are unit vectors along the $x$-, $y$-, $z$-axes.

### 2.2 Position vectors and displacement

**Definition.** The **position vector** of a point $P(x,y,z)$ relative to origin $O$ is

$$\overrightarrow{OP} = \begin{pmatrix}x\\y\\z\end{pmatrix}$$

The **displacement** from $A$ to $B$ is $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

### 2.3 Magnitude

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

### 2.4 Direction cosines

**Definition.** The **direction cosines** of $\mathbf{a}$ are

$$\cos\alpha = \frac{a_1}{|\mathbf{a}|}, \quad \cos\beta = \frac{a_2}{|\mathbf{a}|}, \quad \cos\gamma = \frac{a_3}{|\mathbf{a}|}$$

where $\alpha$, $\beta$, $\gamma$ are the angles $\mathbf{a}$ makes with the $x$-, $y$-, $z$-axes.

$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.

<hr />

## 3. Scalar (Dot) Product

### 3.1 Definition

**Definition.** The scalar (dot) product of $\mathbf{a}$ and $\mathbf{b}$ in 3D is

$$\boxed{\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3}$$

### 3.2 Geometric interpretation

$$\boxed{\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta}$$

where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.

### 3.3 Key properties

- $\mathbf{a}\cdot\mathbf{a} = |\mathbf{a}|^2$
- $\mathbf{a}\cdot\mathbf{b} = \mathbf{b}\cdot\mathbf{a}$ (commutative)
- $\mathbf{a}\cdot(\mathbf{b} + \mathbf{c}) = \mathbf{a}\cdot\mathbf{b} + \mathbf{a}\cdot\mathbf{c}$
  (distributive)
- $\mathbf{a}\cdot\mathbf{b} = 0 \iff \mathbf{a} \perp \mathbf{b}$ (when neither is zero)

<hr />

## 4. Vector (Cross) Product

### 4.1 Definition

**Definition.** The vector (cross) product of
$\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$ is

$$\boxed{\mathbf{a}\times\mathbf{b} = \begin{pmatrix}a_2b_3 - a_3b_2\\a_3b_1 - a_1b_3\\a_1b_2 - a_2b_1\end{pmatrix}}$$

### 4.2 Determinant form

The cross product can be computed using a symbolic determinant:

$$\mathbf{a}\times\mathbf{b} = \begin{vmatrix}\mathbf{i} & \mathbf{j} & \mathbf{k}\\a_1 & a_2 & a_3\\b_1 & b_2 & b_3\end{vmatrix}$$

### 4.3 Geometric interpretation

**Theorem.** $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$, where $\theta$ is
the angle between $\mathbf{a}$ and $\mathbf{b}$.

### Proof that the cross product magnitude equals the area of the parallelogram

Consider the parallelogram with adjacent sides $\mathbf{a}$ and $\mathbf{b}$.

$$|\mathbf{a}\times\mathbf{b}|^2 = (a_2b_3 - a_3b_2)^2 + (a_3b_1 - a_1b_3)^2 + (a_1b_2 - a_2b_1)^2$$

Expanding and collecting terms:

$$|\mathbf{a}\times\mathbf{b}|^2 = (a_1^2+a_2^2+a_3^2)(b_1^2+b_2^2+b_3^2) - (a_1b_1+a_2b_2+a_3b_3)^2$$

$$= |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$$

Since $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$:

$$|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2(1 - \cos^2\theta) = |\mathbf{a}|^2|\mathbf{b}|^2\sin^2\theta$$

$$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$$

The area of the parallelogram is base $\times$ height
$= |\mathbf{a}| \times |\mathbf{b}|\sin\theta$, which equals $|\mathbf{a}\times\mathbf{b}|$.
$\square$

The cross product $\mathbf{a}\times\mathbf{b}$ is **perpendicular** to both $\mathbf{a}$ and
$\mathbf{b}$, and its direction is given by the right-hand rule.

### 4.4 Properties

- $\mathbf{a}\times\mathbf{b} = -(\mathbf{b}\times\mathbf{a})$ (anti-commutative)
- $\mathbf{a}\times\mathbf{a} = \mathbf{0}$
- $\mathbf{a}\times\mathbf{b} = \mathbf{0} \iff \mathbf{a}$ and $\mathbf{b}$ are parallel (or one is
  zero)
- $\mathbf{a}\times(\mathbf{b}+\mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$
  (distributive)
- $\mathbf{i}\times\mathbf{j} = \mathbf{k}$, $\mathbf{j}\times\mathbf{k} = \mathbf{i}$,
  $\mathbf{k}\times\mathbf{i} = \mathbf{j}$

:::warning
The cross product is **not** commutative:
$\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$. The cross product is only defined in 3D.
:::

<hr />

## 5. Equation of a Line in 3D

### 5.1 Vector form

**Definition.** The vector equation of a line through point $A$ (position vector $\mathbf{a}$) in
direction $\mathbf{d}$ is

$$\boxed{\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}, \quad \lambda \in \mathbb{R}}$$

### 5.2 Cartesian form

If $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and
$\mathbf{d} = \begin{pmatrix}d_1\\d_2\\d_3\end{pmatrix}$, the parametric equations are:

$$x = a_1 + \lambda d_1, \quad y = a_2 + \lambda d_2, \quad z = a_3 + \lambda d_3$$

When all $d_i \neq 0$, the Cartesian (symmetric) form is:

$$\boxed{\frac{x - a_1}{d_1} = \frac{y - a_2}{d_2} = \frac{z - a_3}{d_3}}$$

### 5.3 Intersection of two lines in 3D

Given $\mathbf{r}_1 = \mathbf{a}_1 + \lambda\mathbf{d}_1$ and
$\mathbf{r}_2 = \mathbf{a}_2 + \mu\mathbf{d}_2$:

1. Equate components to get three equations in $\lambda$ and $\mu$.
2. Solve two equations for $\lambda$ and $\mu$.
3. **Check** the third equation:
   - If consistent: the lines **intersect**.
   - If inconsistent: the lines are **skew** (not parallel, not intersecting).
4. If $\mathbf{d}_1 \times \mathbf{d}_2 = \mathbf{0}$: the lines are **parallel**.

**Example.** Find the intersection of
$\mathbf{r}_1 = \begin{pmatrix}1\\2\\0\end{pmatrix} + \lambda\begin{pmatrix}1\\-1\\2\end{pmatrix}$
and $\mathbf{r}_2 = \begin{pmatrix}3\\1\\4\end{pmatrix} + \mu\begin{pmatrix}2\\1\\-1\end{pmatrix}$.

Equating: $1+\lambda = 3+2\mu$, $2-\lambda = 1+\mu$, $2\lambda = 4-\mu$.

From equation 2: $\lambda = 1 - \mu$. From equation 1:
$1+(1-\mu) = 3+2\mu \implies 2-\mu = 3+2\mu \implies -3\mu = 1 \implies \mu = -1/3$,
$\lambda = 4/3$.

Check equation 3: $2(4/3) = 4-(-1/3) \implies 8/3 = 13/3$. **Not consistent** — the lines are skew.

<hr />

## 6. Equation of a Plane

### 6.1 Vector form

**Definition.** The equation of a plane with normal vector $\mathbf{n}$ passing through point $A$
(position vector $\mathbf{a}$) is

$$\boxed{\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n}}$$

This works because every point $P$ on the plane satisfies $\overrightarrow{AP} \perp \mathbf{n}$,
i.e., $(\mathbf{r} - \mathbf{a})\cdot\mathbf{n} = 0$.

### 6.2 Cartesian form

If $\mathbf{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$ and $\mathbf{a}\cdot\mathbf{n} = d$:

$$\boxed{ax + by + cz = d}$$

### 6.3 Finding the normal to a plane

Given three points $A$, $B$, $C$ on the plane, the normal is

$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$$

**Example.** Find the equation of the plane through $A(1,0,2)$, $B(3,1,0)$, $C(0,2,1)$.

$\overrightarrow{AB} = \begin{pmatrix}2\\1\\-2\end{pmatrix}$,
$\overrightarrow{AC} = \begin{pmatrix}-1\\2\\-1\end{pmatrix}$.

$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix}(1)(-1)-(-2)(2)\\(-2)(-1)-(2)(-1)\\(2)(2)-(1)(-1)\end{pmatrix} = \begin{pmatrix}3\\4\\5\end{pmatrix}$.

$\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n} = 1(3)+0(4)+2(5) = 13$.

$$\boxed{3x + 4y + 5z = 13}$$

### 6.4 Angle between two planes

The angle between two planes with normals $\mathbf{n}_1$ and $\mathbf{n}_2$ is

$$\boxed{\cos\theta = \frac{|\mathbf{n}_1\cdot\mathbf{n}_2|}{|\mathbf{n}_1||\mathbf{n}_2|}}$$

The acute angle is found by taking the absolute value.

### 6.5 Angle between a line and a plane

The angle $\phi$ between a line with direction $\mathbf{d}$ and a plane with normal $\mathbf{n}$
satisfies:

$$\sin\phi = \frac{|\mathbf{d}\cdot\mathbf{n}|}{|\mathbf{d}||\mathbf{n}|}$$

Equivalently, if $\alpha$ is the angle between $\mathbf{d}$ and $\mathbf{n}$, then
$\phi = 90° - \alpha$.

### 6.6 Line of intersection of two planes

To find the line of intersection of $a_1 x + b_1 y + c_1 z = d_1$ and $a_2 x + b_2 y + c_2 z = d_2$:

1. The direction is $\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$.
2. Find a point satisfying both equations (set one variable to zero and solve).

<hr />

## 7. Distance from a Point to a Plane

### 7.1 Formula

**Theorem.** The perpendicular distance from point $P$ with position vector $\mathbf{p}$ to the
plane $\mathbf{r}\cdot\mathbf{n} = d$ is

$$\boxed{D = \frac{|\mathbf{p}\cdot\mathbf{n} - d|}{|\mathbf{n}|}}$$

In Cartesian form, for plane $ax + by + cz = d$ and point $(x_0, y_0, z_0)$:

$$\boxed{D = \frac{|ax_0 + by_0 + cz_0 - d|}{\sqrt{a^2+b^2+c^2}}}$$

### Proof of the distance formula

Let the plane have equation $\mathbf{r}\cdot\hat{\mathbf{n}} = p$ where $\hat{\mathbf{n}}$ is a unit
normal and $p$ is the perpendicular distance from the origin to the plane.

For any point $P$ with position vector $\mathbf{p}$, the distance from $P$ to the plane is the
magnitude of the projection of $\mathbf{p}$ onto $\hat{\mathbf{n}}$, minus $p$:

$$D = |\mathbf{p}\cdot\hat{\mathbf{n}} - p|$$

If the plane is given as $\mathbf{r}\cdot\mathbf{n} = d$ (where $\mathbf{n}$ is not necessarily a
unit vector), then $\hat{\mathbf{n}} = \mathbf{n}/|\mathbf{n}|$ and $p = d/|\mathbf{n}|$:

$$D = \left|\mathbf{p}\cdot\frac{\mathbf{n}}{|\mathbf{n}|} - \frac{d}{|\mathbf{n}|}\right| = \frac{|\mathbf{p}\cdot\mathbf{n} - d|}{|\mathbf{n}|}$$

$\square$

**Example.** Find the distance from $P(1, 2, 3)$ to the plane $2x - y + 2z = 5$.

$D = \dfrac{|2(1)-1(2)+2(3)-5|}{\sqrt{4+1+4}} = \dfrac{|2-2+6-5|}{3} = \dfrac{1}{3}$.

<hr />

## 8. Scalar Triple Product

### 8.1 Definition

**Definition.** The **scalar triple product** of vectors $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ is

$$\boxed{[\mathbf{a}\,\mathbf{b}\,\mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})}$$

In component form:

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix}a_1 & a_2 & a_3\\b_1 & b_2 & b_3\\c_1 & c_2 & c_3\end{vmatrix}$$

### 8.2 Geometric interpretation

### Proof that the scalar triple product equals the volume of the parallelepiped

The parallelepiped with edges $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ has base area
$|\mathbf{b}\times\mathbf{c}|$ (from Section 4.3).

The height is the component of $\mathbf{a}$ perpendicular to the base, which is the projection of
$\mathbf{a}$ onto the direction of $\mathbf{b}\times\mathbf{c}$:

$$\mathrm{height} = |\mathbf{a}|\cos\phi = \frac{\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})}{|\mathbf{b}\times\mathbf{c}|}$$

where $\phi$ is the angle between $\mathbf{a}$ and $\mathbf{b}\times\mathbf{c}$.

$$V = \mathrm{base} \times \mathrm{height} = |\mathbf{b}\times\mathbf{c}| \cdot \frac{\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})}{|\mathbf{b}\times\mathbf{c}|} = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$$

Taking the absolute value to get a positive volume:

$$\boxed{V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|}$$

$\square$

### 8.3 Properties

- $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\cdot(\mathbf{c}\times\mathbf{a}) = \mathbf{c}\cdot(\mathbf{a}\times\mathbf{b})$
  (cyclic permutation)
- $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = -\mathbf{a}\cdot(\mathbf{c}\times\mathbf{b})$
  (swapping two vectors changes sign)
- $[\mathbf{a}\,\mathbf{b}\,\mathbf{c}] = 0$ if and only if $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$
  are coplanar

:::info
The scalar triple product being zero is a test for coplanarity. If four points $A$, $B$,
$C$, $D$ are coplanar, then
$\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD}) = 0$.
:::

<hr />

## 9. Distance Between Two Skew Lines

The shortest distance between two skew lines $\mathbf{r}_1 = \mathbf{a}_1 + \lambda\mathbf{d}_1$ and
$\mathbf{r}_2 = \mathbf{a}_2 + \mu\mathbf{d}_2$ is

$$\boxed{D = \frac{|(\mathbf{a}_2 - \mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2)|}{|\mathbf{d}_1\times\mathbf{d}_2|}}$$

**Intuition.** The shortest distance is measured along the common perpendicular. The direction of
the common perpendicular is $\mathbf{d}_1 \times \mathbf{d}_2$. The formula projects the vector
between any point on each line onto this perpendicular direction.

<hr />

## 10. Key Results Summary

| Quantity              | Formula                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | --- | -------------------------------- | ----------- |
| Dot product           | $\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3 =                                                | \mathbf{a}                                                           |     | \mathbf{b}                       | \cos\theta$ |
| Cross product         | $\mathbf{a}\times\mathbf{b} = \begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ |
| Line                  | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$                                                          |
| Plane (vector)        | $\mathbf{r}\cdot\mathbf{n} = d$                                                                        |
| Plane (Cartesian)     | $ax + by + cz = d$                                                                                     |
| Point-plane distance  | $D = \dfrac{                                                                                           | \mathbf{p}\cdot\mathbf{n} - d                                        | }{  | \mathbf{n}                       | }$          |
| Parallelepiped volume | $V =                                                                                                   | \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})                          | $   |
| Skew line distance    | $D = \dfrac{                                                                                           | (\mathbf{a}\_2-\mathbf{a}\_1)\cdot(\mathbf{d}\_1\times\mathbf{d}\_2) | }{  | \mathbf{d}\_1\times\mathbf{d}\_2 | }$          |

<hr />

## Problems

<details>
<summary>Problem 1</summary>

Given $\mathbf{a} = \begin{pmatrix}2\\-1\\3\end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix}1\\4\\-2\end{pmatrix}$, find $\mathbf{a}\times\mathbf{b}$ and verify
that it is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$.
</details>

<details>
<summary>Solution 1</summary>

$$\mathbf{a}\times\mathbf{b} = \begin{pmatrix}(-1)(-2)-(3)(4)\\(3)(1)-(2)(-2)\\(2)(4)-(-1)(1)\end{pmatrix} = \begin{pmatrix}2-12\\3+4\\8+1\end{pmatrix} = \begin{pmatrix}-10\\7\\9\end{pmatrix}$$

Verify: $\mathbf{a}\cdot(\mathbf{a}\times\mathbf{b}) = 2(-10)+(-1)(7)+3(9) = -20-7+27 = 0$. ✓

$\mathbf{b}\cdot(\mathbf{a}\times\mathbf{b}) = 1(-10)+4(7)+(-2)(9) = -10+28-18 = 0$. ✓

**If you get this wrong, revise:** [Vector Cross Product](#4-vector-cross-product) — Section 4.
</details>

<details>
<summary>Problem 2</summary>

Find the equation of the plane through $A(1, 2, 0)$, $B(0, 1, 3)$, $C(2, -1, 1)$.
</details>

<details>
<summary>Solution 2</summary>

$\overrightarrow{AB} = \begin{pmatrix}-1\\-1\\3\end{pmatrix}$,
$\overrightarrow{AC} = \begin{pmatrix}1\\-3\\1\end{pmatrix}$.

$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix}(-1)(1)-(3)(-3)\\(3)(1)-(-1)(1)\\(-1)(-3)-(-1)(1)\end{pmatrix} = \begin{pmatrix}8\\4\\4\end{pmatrix}$

Simplify: $\mathbf{n} = \begin{pmatrix}2\\1\\1\end{pmatrix}$.

$\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n} = 2+2+0 = 4$.

$\boxed{2x + y + z = 4}$

**If you get this wrong, revise:** [Equation of a Plane](#6-equation-of-a-plane) — Section 6.
</details>

<details>
<summary>Problem 3</summary>

Find the distance from the point $P(3, 1, -2)$ to the plane $x + 2y - 2z = 6$.
</details>

<details>
<summary>Solution 3</summary>

$D = \dfrac{|3 + 2(1) - 2(-2) - 6|}{\sqrt{1+4+4}} = \dfrac{|3+2+4-6|}{3} = \dfrac{3}{3} = 1$.

$\boxed{D = 1}$.

**If you get this wrong, revise:**
[Distance from Point to Plane](#7-distance-from-a-point-to-a-plane) — Section 7.
</details>

<details>
<summary>Problem 4</summary>

Find the shortest distance between the skew lines
$\mathbf{r}_1 = \begin{pmatrix}0\\1\\-1\end{pmatrix} + \lambda\begin{pmatrix}1\\0\\2\end{pmatrix}$
and $\mathbf{r}_2 = \begin{pmatrix}1\\0\\2\end{pmatrix} + \mu\begin{pmatrix}0\\1\\-1\end{pmatrix}$.
</details>

<details>
<summary>Solution 4</summary>

$\mathbf{a}_2 - \mathbf{a}_1 = \begin{pmatrix}1\\-1\\3\end{pmatrix}$,
$\mathbf{d}_1 = \begin{pmatrix}1\\0\\2\end{pmatrix}$,
$\mathbf{d}_2 = \begin{pmatrix}0\\1\\-1\end{pmatrix}$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(0)(-1)-(2)(1)\\(2)(0)-(1)(-1)\\(1)(1)-(0)(0)\end{pmatrix} = \begin{pmatrix}-2\\1\\1\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{4+1+1} = \sqrt{6}$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 1(-2)+(-1)(1)+3(1) = -2-1+3 = 0$.

$D = \dfrac{0}{\sqrt{6}} = 0$. The lines actually **intersect** (not skew).

**If you get this wrong, revise:** [Distance Between Skew Lines](#9-distance-between-two-skew-lines)
— Section 9.
</details>

<details>
<summary>Problem 5</summary>

Find the volume of the parallelepiped with edges $\mathbf{a} = \begin{pmatrix}1\\0\\2\end{pmatrix}$,
$\mathbf{b} = \begin{pmatrix}3\\1\\-1\end{pmatrix}$,
$\mathbf{c} = \begin{pmatrix}2\\-1\\1\end{pmatrix}$.
</details>

<details>
<summary>Solution 5</summary>

$\mathbf{b}\times\mathbf{c} = \begin{pmatrix}(1)(1)-(-1)(-1)\\(-1)(2)-(3)(1)\\(3)(-1)-(1)(2)\end{pmatrix} = \begin{pmatrix}0\\-5\\-5\end{pmatrix}$

$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = 1(0)+0(-5)+2(-5) = -10$.

$V = |-10| = \boxed{10}$.

**If you get this wrong, revise:** [Scalar Triple Product](#8-scalar-triple-product) — Section 8.
</details>

<details>
<summary>Problem 6</summary>

Find the angle between the planes $2x - y + z = 3$ and $x + y + 2z = 1$.
</details>

<details>
<summary>Solution 6</summary>

$\mathbf{n}_1 = \begin{pmatrix}2\\-1\\1\end{pmatrix}$, $|\mathbf{n}_1| = \sqrt{6}$.
$\mathbf{n}_2 = \begin{pmatrix}1\\1\\2\end{pmatrix}$, $|\mathbf{n}_2| = \sqrt{6}$.

$\cos\theta = \dfrac{|2-1+2|}{\sqrt{6}\cdot\sqrt{6}} = \dfrac{3}{6} = \dfrac{1}{2}$.

$\theta = \boxed{60°}$.

**If you get this wrong, revise:** [Angle Between Two Planes](#64-angle-between-two-planes) —
Section 6.4.
</details>

<details>
<summary>Problem 7</summary>

Show that the points $A(1, 2, 3)$, $B(3, 1, 2)$, $C(2, 3, 1)$, $D(0, 4, 4)$ are coplanar.
</details>

<details>
<summary>Solution 7</summary>

$\overrightarrow{AB} = \begin{pmatrix}2\\-1\\-1\end{pmatrix}$,
$\overrightarrow{AC} = \begin{pmatrix}1\\1\\-2\end{pmatrix}$,
$\overrightarrow{AD} = \begin{pmatrix}-1\\2\\1\end{pmatrix}$.

$\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD}) = \begin{vmatrix}2&-1&-1\\1&1&-2\\-1&2&1\end{vmatrix}$

$= 2(1\cdot 1-(-2)\cdot 2) - (-1)(1\cdot 1-(-2)(-1)) + (-1)(1\cdot 2-1\cdot(-1))$

$= 2(1+4) + 1(1-2) - 1(2+1) = 10 - 1 - 3 = 6 \neq 0$.

Wait — $6 \neq 0$, so the points are **not coplanar**. Let me verify.

Actually, let me recompute $\overrightarrow{AC}\times\overrightarrow{AD}$:

$= \begin{pmatrix}(1)(1)-(-2)(2)\\(-2)(-1)-(1)(1)\\(1)(2)-(1)(-1)\end{pmatrix} = \begin{pmatrix}5\\1\\3\end{pmatrix}$

$\overrightarrow{AB}\cdot\begin{pmatrix}5\\1\\3\end{pmatrix} = 10-1-3 = 6 \neq 0$.

The points are **not coplanar**.

**If you get this wrong, revise:** [Scalar Triple Product](#8-scalar-triple-product) — Section 8.
</details>

<details>
<summary>Problem 8</summary>

Find the line of intersection of the planes $x + y + z = 6$ and $2x - y + z = 3$.
</details>

<details>
<summary>Solution 8</summary>

$\mathbf{n}_1 = \begin{pmatrix}1\\1\\1\end{pmatrix}$,
$\mathbf{n}_2 = \begin{pmatrix}2\\-1\\1\end{pmatrix}$.

Direction:
$\mathbf{d} = \mathbf{n}_1\times\mathbf{n}_2 = \begin{pmatrix}(1)(1)-(1)(-1)\\(1)(2)-(1)(1)\\(1)(-1)-(1)(2)\end{pmatrix} = \begin{pmatrix}2\\1\\-3\end{pmatrix}$.

Set $z = 0$: $x + y = 6$ and $2x - y = 3$. Adding: $3x = 9 \implies x = 3$, $y = 3$.

Point: $(3, 3, 0)$.

$$\boxed{\mathbf{r} = \begin{pmatrix}3\\3\\0\end{pmatrix} + \lambda\begin{pmatrix}2\\1\\-3\end{pmatrix}}$$

**If you get this wrong, revise:** [Line of Intersection](#66-line-of-intersection-of-two-planes) —
Section 6.6.
</details>

<details>
<summary>Problem 9</summary>

Find the acute angle between the line
$\mathbf{r} = \begin{pmatrix}1\\-1\\2\end{pmatrix} + \lambda\begin{pmatrix}3\\1\\-1\end{pmatrix}$
and the plane $2x - y + 2z = 5$.
</details>

<details>
<summary>Solution 9</summary>

$\mathbf{d} = \begin{pmatrix}3\\1\\-1\end{pmatrix}$,
$\mathbf{n} = \begin{pmatrix}2\\-1\\2\end{pmatrix}$.

$\sin\phi = \dfrac{|\mathbf{d}\cdot\mathbf{n}|}{|\mathbf{d}||\mathbf{n}|} = \dfrac{|6-1-2|}{\sqrt{11}\sqrt{9}} = \dfrac{3}{3\sqrt{11}} = \dfrac{1}{\sqrt{11}}$.

$\phi = \arcsin\!\left(\dfrac{1}{\sqrt{11}}\right) \approx \boxed{17.6°}$.

**If you get this wrong, revise:**
[Angle Between Line and Plane](#65-angle-between-a-line-and-a-plane) — Section 6.5.
</details>

<details>
<summary>Problem 10</summary>

Find the shortest distance between the skew lines
$\mathbf{r}_1 = \begin{pmatrix}1\\0\\0\end{pmatrix} + \lambda\begin{pmatrix}1\\2\\3\end{pmatrix}$
and $\mathbf{r}_2 = \begin{pmatrix}0\\1\\0\end{pmatrix} + \mu\begin{pmatrix}2\\3\\4\end{pmatrix}$.
</details>

<details>
<summary>Solution 10</summary>

$\mathbf{a}_2-\mathbf{a}_1 = \begin{pmatrix}-1\\1\\0\end{pmatrix}$,
$\mathbf{d}_1 = \begin{pmatrix}1\\2\\3\end{pmatrix}$,
$\mathbf{d}_2 = \begin{pmatrix}2\\3\\4\end{pmatrix}$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(2)(4)-(3)(3)\\(3)(2)-(1)(4)\\(1)(3)-(2)(2)\end{pmatrix} = \begin{pmatrix}-1\\2\\-1\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{1+4+1} = \sqrt{6}$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = (-1)(-1)+1(2)+0(-1) = 1+2 = 3$.

$D = \dfrac{3}{\sqrt{6}} = \dfrac{3\sqrt{6}}{6} = \boxed{\dfrac{\sqrt{6}}{2}}$.

**If you get this wrong, revise:** [Distance Between Skew Lines](#9-distance-between-two-skew-lines)
— Section 9.
</details>

:::

:::
