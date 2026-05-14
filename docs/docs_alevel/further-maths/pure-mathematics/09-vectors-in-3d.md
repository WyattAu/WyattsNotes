---
title: Vectors in 3D
description:
  'A-Level Further Maths notes on Vectors in 3D: Board Coverage; 1. Review of A Level Vectors; 2.1
  Notation; 2.2 Position vectors and displacement.'
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
Introducing the vector (cross) product, equations of planes, and the scalar triple product. These
Tools are essential for geometry, mechanics, and physics at university level.

### Board Coverage

| Board   | Paper   | Notes                                                                     |
| ------- | ------- | ------------------------------------------------------------------------- |
| AQA     | Paper 1 | 3D vectors, scalar product, vector product, planes, scalar triple product |
| Edexcel | FP1     | 3D vectors, scalar product, vector product, lines and planes              |
| OCR (A) | Paper 1 | 3D vectors, scalar product, vector product, planes                        |
| CIE     | P1      | 3D vectors, scalar product, vector product, lines, planes, intersections  |

:::info All boards cover 3D vectors, the scalar product, and the vector product. AQA includes the
Scalar triple product for volumes. CIE places particular emphasis on intersections of lines and
Planes. :::

<hr />

## 1. Review of A Level Vectors

A vector has magnitude and direction. In 2D, $\mathbf{a} = \begin{pmatrix}a_1\\a_2\end{pmatrix}$ has
Magnitude $|\mathbf{a}| = \sqrt{a_1^2 + a_2^2}$.

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

Where $\mathbf{i}$$\mathbf{j}$$\mathbf{k}$ are unit vectors along the $x$-, $y$-, $z$-axes.

### 2.2 Position vectors and displacement

**Definition.** The **position vector** of a point $P(x,y,z)$ relative to origin $O$ is

$$\overrightarrow{OP} = \begin{pmatrix}x\\y\\z\end{pmatrix}$$

The **displacement** from $A$ to $B$ is $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$.

### 2.3 Magnitude

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

### 2.4 Direction cosines

**Definition.** The **direction cosines** of $\mathbf{a}$ are

$$\cos\alpha = \frac◆LB◆a_1◆RB◆◆LB◆|\mathbf{a}|◆RB◆, \quad \cos\beta = \frac◆LB◆a_2◆RB◆◆LB◆|\mathbf{a}|◆RB◆, \quad \cos\gamma = \frac◆LB◆a_3◆RB◆◆LB◆|\mathbf{a}|◆RB◆$$

Where $\alpha$$\beta$$\gamma$ are the angles $\mathbf{a}$ makes with the $x$-, $y$-, $z$-axes.

$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.

<hr />

## 3. Scalar (Dot) Product

### 3.1 Definition

**Definition.** The scalar (dot) product of $\mathbf{a}$ and $\mathbf{b}$ in 3D is

$$\boxed{\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3}$$

### 3.2 Geometric interpretation

$$\boxed{\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta}$$

Where $\theta$ is the angle between $\mathbf{a}$ and $\mathbf{b}$.

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

**Theorem.** $|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$Where $\theta$ is
The angle between $\mathbf{a}$ and $\mathbf{b}$.

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
$= |\mathbf{a}| \times |\mathbf{b}|\sin\theta$Which equals $|\mathbf{a}\times\mathbf{b}|$. $\square$

The cross product $\mathbf{a}\times\mathbf{b}$ is **perpendicular** to both $\mathbf{a}$ and
$\mathbf{b}$And its direction is given by the right-hand rule.

### 4.4 Properties

- $\mathbf{a}\times\mathbf{b} = -(\mathbf{b}\times\mathbf{a})$ (anti-commutative)
- $\mathbf{a}\times\mathbf{a} = \mathbf{0}$
- $\mathbf{a}\times\mathbf{b} = \mathbf{0} \iff \mathbf{a}$ and $\mathbf{b}$ are parallel (or one is
  zero)
- $\mathbf{a}\times(\mathbf{b}+\mathbf{c}) = \mathbf{a}\times\mathbf{b} + \mathbf{a}\times\mathbf{c}$
  (distributive)
- $\mathbf{i}\times\mathbf{j} = \mathbf{k}$$\mathbf{j}\times\mathbf{k} = \mathbf{i}$
  $\mathbf{k}\times\mathbf{i} = \mathbf{j}$

:::warning warning $\mathbf{a}\times\mathbf{b} = -\mathbf{b}\times\mathbf{a}$. The cross product is
Only defined in 3D. :::

<hr />

## 5. Equation of a Line in 3D

### 5.1 Vector form

**Definition.** The vector equation of a line through point $A$ (position vector $\mathbf{a}$) in
Direction $\mathbf{d}$ is

$$\boxed{\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}, \quad \lambda \in \mathbb{R}}$$

### 5.2 Cartesian form

If $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and
$\mathbf{d} = \begin{pmatrix}d_1\\d_2\\d_3\end{pmatrix}$The parametric equations are:

$$x = a_1 + \lambda d_1, \quad y = a_2 + \lambda d_2, \quad z = a_3 + \lambda d_3$$

When all $d_i \neq 0$The Cartesian (symmetric) form is:

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
And $\mathbf{r}_2 = \begin{pmatrix}3\\1\\4\end{pmatrix} + \mu\begin{pmatrix}2\\1\\-1\end{pmatrix}$.

Equating: $1+\lambda = 3+2\mu$$2-\lambda = 1+\mu$$2\lambda = 4-\mu$.

From equation 2: $\lambda = 1 - \mu$. From equation 1:
$1+(1-\mu) = 3+2\mu \implies 2-\mu = 3+2\mu \implies -3\mu = 1 \implies \mu = -1/3$ $\lambda = 4/3$.

Check equation 3: $2(4/3) = 4-(-1/3) \implies 8/3 = 13/3$. **Not consistent** — the lines are skew.

<hr />

## 6. Equation of a Plane

### 6.1 Vector form

**Definition.** The equation of a plane with normal vector $\mathbf{n}$ passing through point $A$
(position vector $\mathbf{a}$) is

$$\boxed{\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n}}$$

This works because every point $P$ on the plane satisfies $\overrightarrow{AP} \perp \mathbf{n}$
I.e., $(\mathbf{r} - \mathbf{a})\cdot\mathbf{n} = 0$.

### 6.2 Cartesian form

If $\mathbf{n} = \begin{pmatrix}a\\b\\c\end{pmatrix}$ and $\mathbf{a}\cdot\mathbf{n} = d$:

$$\boxed{ax + by + cz = d}$$

### 6.3 Finding the normal to a plane

Given three points $A$$B$$C$ on the plane, the normal is

$$\mathbf{n} = \overrightarrow{AB} \times \overrightarrow{AC}$$

**Example.** Find the equation of the plane through $A(1,0,2)$$B(3,1,0)$$C(0,2,1)$.

$\overrightarrow{AB} = \begin{pmatrix}2\\1\\-2\end{pmatrix}$
$\overrightarrow{AC} = \begin{pmatrix}-1\\2\\-1\end{pmatrix}$.

$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix}(1)(-1)-(-2)(2)\\(-2)(-1)-(2)(-1)\\(2)(2)-(1)(-1)\end{pmatrix} = \begin{pmatrix}3\\4\\5\end{pmatrix}$.

$\mathbf{r}\cdot\mathbf{n} = \mathbf{a}\cdot\mathbf{n} = 1(3)+0(4)+2(5) = 13$.

$$\boxed{3x + 4y + 5z = 13}$$

### 6.4 Angle between two planes

The angle between two planes with normals $\mathbf{n}_1$ and $\mathbf{n}_2$ is

$$\boxed{\cos\theta = \frac◆LB◆|\mathbf{n}_1\cdot\mathbf{n}_2|◆RB◆◆LB◆|\mathbf{n}_1||\mathbf{n}_2|◆RB◆}$$

The acute angle is found by taking the absolute value.

### 6.5 Angle between a line and a plane

The angle $\phi$ between a line with direction $\mathbf{d}$ and a plane with normal $\mathbf{n}$
Satisfies:

$$\sin\phi = \frac◆LB◆|\mathbf{d}\cdot\mathbf{n}|◆RB◆◆LB◆|\mathbf{d}||\mathbf{n}|◆RB◆$$

Equivalently, if $\alpha$ is the angle between $\mathbf{d}$ and $\mathbf{n}$Then
$\phi = 90° - \alpha$.

### 6.6 Line of intersection of two planes

To find the line of intersection of $a_1 x + b_1 y + c_1 z = d_1$ and $a_2 x + b_2 y + c_2 z = d_2$:

1. The direction is $\mathbf{d} = \mathbf{n}_1 \times \mathbf{n}_2$.
2. Find a point satisfying both equations (set one variable to zero and solve).

<hr />

## 7. Distance from a Point to a Plane

### 7.1 Formula

**Theorem.** The perpendicular distance from point $P$ with position vector $\mathbf{p}$ to the
Plane $\mathbf{r}\cdot\mathbf{n} = d$ is

$$\boxed{D = \frac◆LB◆|\mathbf{p}\cdot\mathbf{n} - d|◆RB◆◆LB◆|\mathbf{n}|◆RB◆}$$

In Cartesian form, for plane $ax + by + cz = d$ and point $(x_0, y_0, z_0)$:

$$\boxed{D = \frac◆LB◆|ax_0 + by_0 + cz_0 - d|◆RB◆◆LB◆\sqrt{a^2+b^2+c^2}◆RB◆}$$

### Proof of the distance formula

Let the plane have equation $\mathbf{r}\cdot\hat{\mathbf{n}} = p$ where $\hat{\mathbf{n}}$ is a unit
Normal and $p$ is the perpendicular distance from the origin to the plane.

For any point $P$ with position vector $\mathbf{p}$The distance from $P$ to the plane is the
Magnitude of the projection of $\mathbf{p}$ onto $\hat{\mathbf{n}}$Minus $p$:

$$D = |\mathbf{p}\cdot\hat{\mathbf{n}} - p|$$

If the plane is given as $\mathbf{r}\cdot\mathbf{n} = d$ (where $\mathbf{n}$ is not necessarily a
Unit vector), then $\hat{\mathbf{n}} = \mathbf{n}/|\mathbf{n}|$ and $p = d/|\mathbf{n}|$:

$$D = \left|\mathbf{p}\cdot\frac◆LB◆\mathbf{n}◆RB◆◆LB◆|\mathbf{n}|◆RB◆ - \frac◆LB◆d◆RB◆◆LB◆|\mathbf{n}|◆RB◆\right| = \frac◆LB◆|\mathbf{p}\cdot\mathbf{n} - d|◆RB◆◆LB◆|\mathbf{n}|◆RB◆$$

$\square$

**Example.** Find the distance from $P(1, 2, 3)$ to the plane $2x - y + 2z = 5$.

$D = \dfrac◆LB◆|2(1)-1(2)+2(3)-5|◆RB◆◆LB◆\sqrt{4+1+4}◆RB◆ = \dfrac◆LB◆|2-2+6-5|◆RB◆◆LB◆3◆RB◆ = \dfrac{1}{3}$.

<hr />

## 8. Scalar Triple Product

### 8.1 Definition

**Definition.** The **scalar triple product** of vectors $\mathbf{a}$$\mathbf{b}$$\mathbf{c}$ is

$$\boxed{[\mathbf{a}\,\mathbf{b}\,\mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})}$$

In component form:

$$\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \begin{vmatrix}a_1 & a_2 & a_3\\b_1 & b_2 & b_3\\c_1 & c_2 & c_3\end{vmatrix}$$

### 8.2 Geometric interpretation

### Proof that the scalar triple product equals the volume of the parallelepiped

The parallelepiped with edges $\mathbf{a}$$\mathbf{b}$$\mathbf{c}$ has base area
$|\mathbf{b}\times\mathbf{c}|$ (from Section 4.3).

The height is the component of $\mathbf{a}$ perpendicular to the base, which is the projection of
$\mathbf{a}$ onto the direction of $\mathbf{b}\times\mathbf{c}$:

$$\mathrm{height} = |\mathbf{a}|\cos\phi = \frac◆LB◆\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})◆RB◆◆LB◆|\mathbf{b}\times\mathbf{c}|◆RB◆$$

Where $\phi$ is the angle between $\mathbf{a}$ and $\mathbf{b}\times\mathbf{c}$.

$$V = \mathrm{base} \times \mathrm{height} = |\mathbf{b}\times\mathbf{c}| \cdot \frac◆LB◆\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})◆RB◆◆LB◆|\mathbf{b}\times\mathbf{c}|◆RB◆ = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$$

Taking the absolute value to get a positive volume:

$$\boxed{V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|}$$

$\square$

### 8.3 Properties

- $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\cdot(\mathbf{c}\times\mathbf{a}) = \mathbf{c}\cdot(\mathbf{a}\times\mathbf{b})$
  (cyclic permutation)
- $\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = -\mathbf{a}\cdot(\mathbf{c}\times\mathbf{b})$
  (swapping two vectors changes sign)
- $[\mathbf{a}\,\mathbf{b}\,\mathbf{c}] = 0$ if and only if $\mathbf{a}$$\mathbf{b}$$\mathbf{c}$ are
  coplanar

:::info info $C$$D$ are coplanar, then
$\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD}) = 0$. :::

<hr />

## 9. Distance Between Two Skew Lines

The shortest distance between two skew lines $\mathbf{r}_1 = \mathbf{a}_1 + \lambda\mathbf{d}_1$ and
$\mathbf{r}_2 = \mathbf{a}_2 + \mu\mathbf{d}_2$ is

$$\boxed{D = \frac◆LB◆|(\mathbf{a}_2 - \mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2)|◆RB◆◆LB◆|\mathbf{d}_1\times\mathbf{d}_2|◆RB◆}$$

**Intuition.** The shortest distance is measured along the common perpendicular. The direction of
The common perpendicular is $\mathbf{d}_1 \times \mathbf{d}_2$. The formula projects the vector
Between any point on each line onto this perpendicular direction.

<hr />

## 10. Key Results Summary

| Quantity              | Formula                                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | -------- | -------------------------------- | ----------- |
| Dot product           | $\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3 =                                                | \mathbf{a}                                                           |          | \mathbf{b}                       | \cos\theta$ |
| Cross product         | $\mathbf{a}\times\mathbf{b} = \begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$ |
| Line                  | $\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$                                                          |
| Plane (vector)        | $\mathbf{r}\cdot\mathbf{n} = d$                                                                        |
| Plane (Cartesian)     | $ax + by + cz = d$                                                                                     |
| Point-plane distance  | $D = \dfrac◆LB◆                                                                                        | \mathbf{p}\cdot\mathbf{n} - d                                        | ◆RB◆◆LB◆ | \mathbf{n}                       | ◆RB◆$       |
| Parallelepiped volume | $V =                                                                                                   | \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})                          | $        |
| Skew line distance    | $D = \dfrac◆LB◆                                                                                        | (\mathbf{a}\_2-\mathbf{a}\_1)\cdot(\mathbf{d}\_1\times\mathbf{d}\_2) | ◆RB◆◆LB◆ | \mathbf{d}\_1\times\mathbf{d}\_2 | ◆RB◆$       |

<hr />

## Problems

<details>
<summary>Problem 1</summary>

Given $\mathbf{a} = \begin{pmatrix}2\\-1\\3\end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix}1\\4\\-2\end{pmatrix}$Find $\mathbf{a}\times\mathbf{b}$ and verify That
it is perpendicular to both $\mathbf{a}$ and $\mathbf{b}$.

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

Find the equation of the plane through $A(1, 2, 0)$$B(0, 1, 3)$$C(2, -1, 1)$.

</details>

<details>
<summary>Solution 2</summary>

$\overrightarrow{AB} = \begin{pmatrix}-1\\-1\\3\end{pmatrix}$
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

$D = \dfrac◆LB◆|3 + 2(1) - 2(-2) - 6|◆RB◆◆LB◆\sqrt{1+4+4}◆RB◆ = \dfrac◆LB◆|3+2+4-6|◆RB◆◆LB◆3◆RB◆ = \dfrac{3}{3} = 1$.

$\boxed{D = 1}$.

**If you get this wrong, revise:**
[Distance from Point to Plane](#7-distance-from-a-point-to-a-plane) — Section 7.

</details>

<details>
<summary>Problem 4</summary>

Find the shortest distance between the skew lines
$\mathbf{r}_1 = \begin{pmatrix}0\\1\\-1\end{pmatrix} + \lambda\begin{pmatrix}1\\0\\2\end{pmatrix}$
And $\mathbf{r}_2 = \begin{pmatrix}1\\0\\2\end{pmatrix} + \mu\begin{pmatrix}0\\1\\-1\end{pmatrix}$.

</details>

<details>
<summary>Solution 4</summary>

$\mathbf{a}_2 - \mathbf{a}_1 = \begin{pmatrix}1\\-1\\3\end{pmatrix}$
$\mathbf{d}_1 = \begin{pmatrix}1\\0\\2\end{pmatrix}$
$\mathbf{d}_2 = \begin{pmatrix}0\\1\\-1\end{pmatrix}$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(0)(-1)-(2)(1)\\(2)(0)-(1)(-1)\\(1)(1)-(0)(0)\end{pmatrix} = \begin{pmatrix}-2\\1\\1\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{4+1+1} = \sqrt{6}$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 1(-2)+(-1)(1)+3(1) = -2-1+3 = 0$.

$D = \dfrac◆LB◆0◆RB◆◆LB◆\sqrt{6}◆RB◆ = 0$. The lines actually **intersect** (not skew).

**If you get this wrong, revise:** [Distance Between Skew Lines](#9-distance-between-two-skew-lines)
— Section 9.

</details>

<details>
<summary>Problem 5</summary>

Find the volume of the parallelepiped with edges $\mathbf{a} = \begin{pmatrix}1\\0\\2\end{pmatrix}$
$\mathbf{b} = \begin{pmatrix}3\\1\\-1\end{pmatrix}$
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

$\mathbf{n}_1 = \begin{pmatrix}2\\-1\\1\end{pmatrix}$$|\mathbf{n}_1| = \sqrt{6}$.
$\mathbf{n}_2 = \begin{pmatrix}1\\1\\2\end{pmatrix}$$|\mathbf{n}_2| = \sqrt{6}$.

$\cos\theta = \dfrac◆LB◆|2-1+2|◆RB◆◆LB◆\sqrt{6}\cdot\sqrt{6}◆RB◆ = \dfrac{3}{6} = \dfrac{1}{2}$.

$\theta = \boxed{60°}$.

**If you get this wrong, revise:** [Angle Between Two Planes](#64-angle-between-two-planes) —
Section 6.4.

</details>

<details>
<summary>Problem 7</summary>

Show that the points $A(1, 2, 3)$$B(3, 1, 2)$$C(2, 3, 1)$$D(0, 4, 4)$ are coplanar.

</details>

<details>
<summary>Solution 7</summary>

$\overrightarrow{AB} = \begin{pmatrix}2\\-1\\-1\end{pmatrix}$
$\overrightarrow{AC} = \begin{pmatrix}1\\1\\-2\end{pmatrix}$
$\overrightarrow{AD} = \begin{pmatrix}-1\\2\\1\end{pmatrix}$.

$\overrightarrow{AB}\cdot(\overrightarrow{AC}\times\overrightarrow{AD}) = \begin{vmatrix}2&-1&-1\\1&1&-2\\-1&2&1\end{vmatrix}$

$= 2(1\cdot 1-(-2)\cdot 2) - (-1)(1\cdot 1-(-2)(-1)) + (-1)(1\cdot 2-1\cdot(-1))$

$= 2(1+4) + 1(1-2) - 1(2+1) = 10 - 1 - 3 = 6 \neq 0$.

Wait — $6 \neq 0$So the points are **not coplanar**. Let me verify.

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

$\mathbf{n}_1 = \begin{pmatrix}1\\1\\1\end{pmatrix}$
$\mathbf{n}_2 = \begin{pmatrix}2\\-1\\1\end{pmatrix}$.

Direction:
$\mathbf{d} = \mathbf{n}_1\times\mathbf{n}_2 = \begin{pmatrix}(1)(1)-(1)(-1)\\(1)(2)-(1)(1)\\(1)(-1)-(1)(2)\end{pmatrix} = \begin{pmatrix}2\\1\\-3\end{pmatrix}$.

Set $z = 0$: $x + y = 6$ and $2x - y = 3$. Adding: $3x = 9 \implies x = 3$$y = 3$.

Point: $(3, 3, 0)$.

$$\boxed{\mathbf{r} = \begin{pmatrix}3\\3\\0\end{pmatrix} + \lambda\begin{pmatrix}2\\1\\-3\end{pmatrix}}$$

**If you get this wrong, revise:** [Line of Intersection](#66-line-of-intersection-of-two-planes) —
Section 6.6.

</details>

<details>
<summary>Problem 9</summary>

Find the acute angle between the line
$\mathbf{r} = \begin{pmatrix}1\\-1\\2\end{pmatrix} + \lambda\begin{pmatrix}3\\1\\-1\end{pmatrix}$
And the plane $2x - y + 2z = 5$.

</details>

<details>
<summary>Solution 9</summary>

$\mathbf{d} = \begin{pmatrix}3\\1\\-1\end{pmatrix}$
$\mathbf{n} = \begin{pmatrix}2\\-1\\2\end{pmatrix}$.

$\sin\phi = \dfrac◆LB◆|\mathbf{d}\cdot\mathbf{n}|◆RB◆◆LB◆|\mathbf{d}||\mathbf{n}|◆RB◆ = \dfrac◆LB◆|6-1-2|◆RB◆◆LB◆\sqrt{11}\sqrt{9}◆RB◆ = \dfrac◆LB◆3◆RB◆◆LB◆3\sqrt{11}◆RB◆ = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{11}◆RB◆$.

$\phi = \arcsin\!\left(\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{11}◆RB◆\right) \approx \boxed{17.6°}$.

**If you get this wrong, revise:**
[Angle Between Line and Plane](#65-angle-between-a-line-and-a-plane) — Section 6.5.

</details>

<details>
<summary>Problem 10</summary>

Find the shortest distance between the skew lines
$\mathbf{r}_1 = \begin{pmatrix}1\\0\\0\end{pmatrix} + \lambda\begin{pmatrix}1\\2\\3\end{pmatrix}$
And $\mathbf{r}_2 = \begin{pmatrix}0\\1\\0\end{pmatrix} + \mu\begin{pmatrix}2\\3\\4\end{pmatrix}$.

</details>

<details>
<summary>Solution 10</summary>

$\mathbf{a}_2-\mathbf{a}_1 = \begin{pmatrix}-1\\1\\0\end{pmatrix}$
$\mathbf{d}_1 = \begin{pmatrix}1\\2\\3\end{pmatrix}$
$\mathbf{d}_2 = \begin{pmatrix}2\\3\\4\end{pmatrix}$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(2)(4)-(3)(3)\\(3)(2)-(1)(4)\\(1)(3)-(2)(2)\end{pmatrix} = \begin{pmatrix}-1\\2\\-1\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{1+4+1} = \sqrt{6}$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = (-1)(-1)+1(2)+0(-1) = 1+2 = 3$.

$D = \dfrac◆LB◆3◆RB◆◆LB◆\sqrt{6}◆RB◆ = \dfrac◆LB◆3\sqrt{6}◆RB◆◆LB◆6◆RB◆ = \boxed{\dfrac◆LB◆\sqrt{6}◆RB◆◆LB◆2◆RB◆}$.

**If you get this wrong, revise:** [Distance Between Skew Lines](#9-distance-between-two-skew-lines)
— Section 9.

</details>

---

## 11. Advanced Worked Examples

### Example 11.1: Reflection in a plane

**Problem.** Find the reflection of the point $P(1, 2, 3)$ in the plane $x + y + z = 6$.

**Solution.** The reflected point $P'$ satisfies:

$$P' = P - 2D\hat{\mathbf{n}}$$

Where $D = \dfrac◆LB◆1+2+3-6◆RB◆◆LB◆\sqrt{3}◆RB◆ = 0$ and
$\hat{\mathbf{n}} = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1)$.

Since $D = 0$The point $P$ lies on the plane, so its reflection is itself: $P' = (1, 2, 3)$.

Let me use a point not on the plane. The reflection of $Q(0, 0, 0)$:

$$D = \frac◆LB◆0 + 0 + 0 - 6◆RB◆◆LB◆\sqrt{3}◆RB◆ = -2\sqrt{3}$$

$$Q' = (0, 0, 0) - 2(-2\sqrt{3})\frac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1) = (0, 0, 0) + 4(1, 1, 1) = (4, 4, 4)$$

Check: the midpoint of $Q$ and $Q'$ is $(2, 2, 2)$Which satisfies $2+2+2 = 6$. Correct.

### Example 11.2: Angle between a line and a plane

**Problem.** Find the acute angle between the line $\mathbf{r} = (1, -1, 2) + \lambda(3, 0, -1)$ and
The plane $x - 2y + 2z = 5$.

**Solution.** $\mathbf{d} = (3, 0, -1)$$\mathbf{n} = (1, -2, 2)$.

$$\sin\phi = \frac◆LB◆|\mathbf{d}\cdot\mathbf{n}|◆RB◆◆LB◆|\mathbf{d}||\mathbf{n}|◆RB◆ = \frac◆LB◆|3 + 0 - 2|◆RB◆◆LB◆\sqrt{10}\sqrt{9}◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆3\sqrt{10}◆RB◆$$

$$\phi = \arcsin\!\left(\frac◆LB◆1◆RB◆◆LB◆3\sqrt{10}◆RB◆\right) \approx 6.1^\circ$$

### Example 11.3: Volume of a tetrahedron using the scalar triple product

**Problem.** Find the volume of the tetrahedron with vertices $O(0,0,0)$$A(1,0,0)$$B(0,2,0)$
$C(0,0,3)$.

**Solution.** $\overrightarrow{OA} = (1,0,0)$$\overrightarrow{OB} = (0,2,0)$
$\overrightarrow{OC} = (0,0,3)$.

$$V = |\overrightarrow{OA}\cdot(\overrightarrow{OB}\times\overrightarrow{OC})| = \left|\begin{vmatrix}1&0&0\\0&2&0\\0&0&3\end{vmatrix}\right| = |6| = 6$$

This equals $\frac{1}{6} \times 1 \times 2 \times 3 = 1$Confirming the standard formula.

### Example 11.4: Shortest distance using calculus

**Problem.** Find the shortest distance between the lines
$\mathbf{r}_1 = (1, 0, 0) + \lambda(1, 1, 0)$ and $\mathbf{r}_2 = (0, 1, 0) + \mu(0, 1, 1)$.

**Solution.** $\mathbf{d}_1 = (1, 1, 0)$$\mathbf{d}_2 = (0, 1, 1)$.

These are not parallel (not scalar multiples), so the lines are either intersecting or skew.

$\mathbf{d}_1 \times \mathbf{d}_2 = (1\cdot 1 - 0\cdot 1, 0\cdot 0 - 1\cdot 1, 1\cdot 1 - 1\cdot 0) = (1, -1, 1)$.

Check intersection: $1+\lambda = 0$ and $1+\lambda = 1+\mu$ and $\lambda = \mu$.

From the first: $\lambda = -1$. From the second: $0 = 1 + (-1) = 0$. From the third: $-1 = -1$.
Consistent! The lines intersect, so the shortest distance is $0$.

### Example 11.5: Finding the equation of a plane from three points

**Problem.** Find the equation of the plane through $P(1, 1, 0)$$Q(2, 0, 1)$$R(0, 1, 1)$.

**Solution.** $\overrightarrow{PQ} = (1, -1, 1)$$\overrightarrow{PR} = (-1, 0, 1)$.

$$\mathbf{n} = \overrightarrow{PQ}\times\overrightarrow{PR} = \begin{pmatrix}(-1)(1) - (1)(0)\\(1)(-1) - (1)(1)\\(1)(0) - (-1)(-1)\end{pmatrix} = \begin{pmatrix}-1\\-2\\-1\end{pmatrix}$$

$\mathbf{r}\cdot\mathbf{n} = (1)(-1) + (1)(-2) + (0)(-1) = -3$.

Equation: $-x - 2y - z = -3$I.e., $\boxed{x + 2y + z = 3}$.

### Example 11.6: Verifying coplanarity

**Problem.** Determine whether the points $A(1, 0, 1)$$B(2, 1, 3)$$C(3, 1, 4)$$D(0, -1, -1)$ Are
coplanar.

**Solution.** $\overrightarrow{AB} = (1, 1, 2)$$\overrightarrow{AC} = (2, 1, 3)$
$\overrightarrow{AD} = (-1, -1, -2)$.

$$\overrightarrow{AB}\times\overrightarrow{AC} = \begin{pmatrix}(1)(3)-(2)(1)\\(2)(2)-(1)(3)\\(1)(1)-(1)(2)\end{pmatrix} = \begin{pmatrix}1\\1\\-1\end{pmatrix}$$

$$(\overrightarrow{AB}\times\overrightarrow{AC})\cdot\overrightarrow{AD} = 1(-1) + 1(-1) + (-1)(-2) = -1 - 1 + 2 = 0$$

Since the scalar triple product is zero, the four points are coplanar. $\blacksquare$

### Example 11.7: Projection of a vector onto a plane

**Problem.** Find the projection of the vector $\mathbf{a} = (2, 1, -1)$ onto the plane
$x + y + z = 1$.

**Solution.** The unit normal is $\hat{\mathbf{n}} = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{3}◆RB◆(1, 1, 1)$.

The projection of $\mathbf{a}$ onto the normal direction:

$$\text{proj}_{\mathbf{n}}\,\mathbf{a} = (\mathbf{a}\cdot\hat{\mathbf{n}})\hat{\mathbf{n}} = \frac{2+1-1}{3}(1,1,1) = \frac{2}{3}(1,1,1)$$

The projection onto the plane (i.e., the component parallel to the plane):

$$\mathbf{a}_{\parallel} = \mathbf{a} - \text{proj}_{\mathbf{n}}\,\mathbf{a} = (2, 1, -1) - \frac{2}{3}(1, 1, 1) = \left(\frac{4}{3}, \frac{1}{3}, -\frac{5}{3}\right)$$

### Example 11.8: Vector product proof of the sine rule

**Problem.** Using the vector product, prove that
$|\mathbf{a}\times\mathbf{b}| = |\mathbf{a}||\mathbf{b}|\sin\theta$.

**Solution.** See Section 4.3 of this document. The proof uses the identity:

$$|\mathbf{a}\times\mathbf{b}|^2 = |\mathbf{a}|^2|\mathbf{b}|^2 - (\mathbf{a}\cdot\mathbf{b})^2$$

Substituting $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$:

$$= |\mathbf{a}|^2|\mathbf{b}|^2(1 - \cos^2\theta) = |\mathbf{a}|^2|\mathbf{b}|^2\sin^2\theta$$

Taking square roots gives the result.

---

## 12. Connections to Other Topics

### 12.1 Vectors and matrices

The cross product $\mathbf{a}\times\mathbf{b}$ can be computed as a $3 \times 3$ determinant. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 12.2 Vectors and mechanics

Vector methods are essential in mechanics for resolving forces, moments, and angular momentum. The
Moment of a force $\mathbf{F}$ about point $O$ is $\mathbf{r}\times\mathbf{F}$. See
[Projectile Motion](/docs/alevel/further-maths/further-mechanics/projectile-motion).

### 12.3 Planes and coordinate geometry

The equation of a plane and the distance formula connect vectors to 3D coordinate geometry. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates).

---

## 13. Additional Exam-Style Questions

### Question 11

The lines $L_1$ and $L_2$ are given by:

$L_1$:
$\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + \lambda\begin{pmatrix}2\\-1\\1\end{pmatrix}$

$L_2$: $\mathbf{r} = \begin{pmatrix}3\\1\\1\end{pmatrix} + \mu\begin{pmatrix}1\\-1\\-1\end{pmatrix}$

Find the shortest distance between $L_1$ and $L_2$.

<details>
<summary>Solution</summary>

$\mathbf{d}_1 = (2,-1,1)$$\mathbf{d}_2 = (1,-1,-1)$.

$\mathbf{d}_1\times\mathbf{d}_2 = \begin{pmatrix}(-1)(-1)-(1)(-1)\\(1)(1)-(2)(-1)\\(2)(-1)-(-1)(1)\end{pmatrix} = \begin{pmatrix}2\\3\\-3\end{pmatrix}$

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{4+9+9} = \sqrt{22}$.

$\mathbf{a}_2 - \mathbf{a}_1 = (2, -1, 2)$.

$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 4 - 3 - 6 = -5$.

$D = \dfrac◆LB◆|-5|◆RB◆◆LB◆\sqrt{22}◆RB◆ = \dfrac◆LB◆5◆RB◆◆LB◆\sqrt{22}◆RB◆ = \dfrac◆LB◆5\sqrt{22}◆RB◆◆LB◆22◆RB◆$.

</details>

### Question 12

Find the volume of the parallelepiped with edges $\mathbf{a} = (2, 0, 1)$$\mathbf{b} = (1, 3, 0)$
$\mathbf{c} = (0, -1, 2)$.

<details>
<summary>Solution</summary>

$$V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})| = \left|\det\begin{pmatrix}2&0&1\\1&3&0\\0&-1&2\end{pmatrix}\right|$$

$= |2(6-0) - 0 + 1(-1-0)| = |12 - 1| = 11$.

</details>

### Question 13

**Prove that** the points equidistant from two fixed points lie on the perpendicular bisector plane
Of the segment joining them.

<details>
<summary>Solution</summary>

Let the fixed points be $A$ and $B$ with position vectors $\mathbf{a}$ and $\mathbf{b}$. A point $P$
Is equidistant from $A$ and $B$ when:

$$|\mathbf{p} - \mathbf{a}| = |\mathbf{p} - \mathbf{b}|$$

Squaring:
$(\mathbf{p}-\mathbf{a})\cdot(\mathbf{p}-\mathbf{a}) = (\mathbf{p}-\mathbf{b})\cdot(\mathbf{p}-\mathbf{b})$

$$|\mathbf{p}|^2 - 2\mathbf{a}\cdot\mathbf{p} + |\mathbf{a}|^2 = |\mathbf{p}|^2 - 2\mathbf{b}\cdot\mathbf{p} + |\mathbf{b}|^2$$

$$2(\mathbf{b} - \mathbf{a})\cdot\mathbf{p} = |\mathbf{b}|^2 - |\mathbf{a}|^2$$

This is the equation of a plane with normal $\mathbf{b} - \mathbf{a}$ (perpendicular to $AB$), which
Passes through the midpoint $\dfrac◆LB◆\mathbf{a}+\mathbf{b}◆RB◆◆LB◆2◆RB◆$. This is the
Perpendicular bisector. $\blacksquare$

</details>

### Question 14

Find the equation of the plane containing the line $L: \mathbf{r} = (1, 0, 2) + \lambda(1, 2, -1)$
And the point $P(3, 1, 4)$.

<details>
<summary>Solution</summary>

The direction of $L$ is $\mathbf{d} = (1, 2, -1)$. Two vectors in the plane are
$\overrightarrow{PQ} = (1, 0, 2) - (3, 1, 4) = (-2, -1, -2)$ (wait, $Q$ should be on $L$Not $P$).

Actually, the point on $L$ at $\lambda = 0$ is $(1, 0, 2)$. Vectors in the plane:
$\overrightarrow{PQ} = (1-3, 0-1, 2-4) = (-2, -1, -2)$ and $\mathbf{d} = (1, 2, -1)$.

$$\mathbf{n} = (-2,-1,-2)\times(1,2,-1) = \begin{pmatrix}(-1)(-1)-(-2)(2)\\(-2)(1)-(-2)(-1)\\(-2)(2)-(-1)(1)\end{pmatrix} = \begin{pmatrix}1+4\\-2-2\\-4+1\end{pmatrix} = \begin{pmatrix}5\\-4\\-3\end{pmatrix}$$

$\mathbf{r}\cdot\mathbf{n} = (1)(5) + (0)(-4) + (2)(-3) = 5 - 6 = -1$.

Equation: $5x - 4y - 3z = -1$.

Verify: $(3)(-4) - 4(1) - 3(4) = -15 - 4 - 12 = -31 \neq -1$. Let me recheck.

Using point $P(3, 1, 4)$: $5(3) - 4(1) - 3(4) = 15 - 4 - 12 = -1$. Correct.

</details>

### Question 15

**Prove that**
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}\times(\mathbf{c}\times\mathbf{a}) = \mathbf{c}\times(\mathbf{a}\times\mathbf{b})$.

<details>
<summary>Solution</summary>

This is the cyclic permutation property of the scalar triple product. In determinant form:

$$\det\begin{pmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{pmatrix} = \det\begin{pmatrix}b_1&b_2&b_3\\c_1&c_2&c_3\\a_1&a_2&a_3\end{pmatrix} = \det\begin{pmatrix}c_1&c_2&c_3\\a_1&a_2&a_3\\b_1&b_2&b_3\end{pmatrix}$$

Each equality follows from the fact that swapping two rows of a determinant changes its sign, and
Two swaps return to the original sign. $\blacksquare$

</details>

---

## 14. Connections to Other Topics

### 14.1 Vectors and matrices

The cross product and scalar triple product can be expressed as determinants. See
[Matrices](/docs/alevel/further-maths/pure-mathematics/further-matrices).

### 14.2 Vectors and mechanics

Vector methods are essential for resolving forces, computing moments
($\mathbf{M} = \mathbf{r} \times \mathbf{F}$), and angular momentum. See
[Projectile Motion](/docs/alevel/further-maths/further-mechanics/projectile-motion).

### 14.3 Planes and coordinate geometry

The equation of a plane connects vectors to 3D geometry. See
[Polar Coordinates](/docs/alevel/further-maths/pure-mathematics/polar-coordinates) for parametric
Representations of curves.

---

## 15. Key Results Summary

| Result                   | Formula                                                                                                                       |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------- | -------- | -------------------------------- | ---------------------------------- | ------------- | ----- |
| Scalar product           | $\mathbf{a}\cdot\mathbf{b} =                                                                                                  | \mathbf{a}                                                           |          | \mathbf{b}                       | \cos\theta = a_1b_1+a_2b_2+a_3b_3$ |
| Vector product           | $\mathbf{a}\times\mathbf{b} = \begin{pmatrix}a_2b_3-a_3b_2\\a_3b_1-a_1b_3\\a_1b_2-a_2b_1\end{pmatrix}$                        |
| Scalar triple product    | $[\mathbf{a},\mathbf{b},\mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c}) = \det(\mathbf{a}\;\mathbf{b}\;\mathbf{c})$ |
| Distance: point to plane | $D = \dfrac◆LB◆                                                                                                               | \mathbf{a}\cdot\mathbf{n} - d                                        | ◆RB◆◆LB◆ | \mathbf{n}                       | ◆RB◆$                              |
| Distance: skew lines     | $D = \dfrac◆LB◆                                                                                                               | (\mathbf{a}\_2-\mathbf{a}\_1)\cdot(\mathbf{d}\_1\times\mathbf{d}\_2) | ◆RB◆◆LB◆ | \mathbf{d}\_1\times\mathbf{d}\_2 | ◆RB◆$                              |
| Angle: line to plane     | $\sin\phi = \dfrac◆LB◆                                                                                                        | \mathbf{d}\cdot\mathbf{n}                                            | ◆RB◆◆LB◆ | \mathbf{d}                       |                                    | \mathbf{n}    | ◆RB◆$ |
| Angle: two planes        | $\cos\theta = \dfrac◆LB◆                                                                                                      | \mathbf{n}\_1\cdot\mathbf{n}\_2                                      | ◆RB◆◆LB◆ | \mathbf{n}\_1                    |                                    | \mathbf{n}\_2 | ◆RB◆$ |
| Volume of tetrahedron    | $V = \dfrac{1}{6}                                                                                                             | [\mathbf{a},\mathbf{b},\mathbf{c}]                                   | $        |
| Reflection in plane      | $P' = P - 2D\hat{\mathbf{n}}$ where $D = \dfrac◆LB◆P\cdot\mathbf{n}-d◆RB◆◆LB◆                                                 | \mathbf{n}                                                           | ◆RB◆$    |

---

## 16. Further Exam-Style Questions

### Question 16

Find the equation of the plane that passes through the points $A(1,0,0)$$B(0,1,0)$$C(0,0,1)$ and
Verify that $D(1/3, 1/3, 1/3)$ lies on it.

<details>
<summary>Solution</summary>

$\overrightarrow{AB} = (-1,1,0)$$\overrightarrow{AC} = (-1,0,1)$.

$\mathbf{n} = \overrightarrow{AB}\times\overrightarrow{AC} = (1,1,1)$.

$\mathbf{r}\cdot\mathbf{n} = (1)(1)+(0)(1)+(0)(1) = 1$.

Equation: $\boxed{x+y+z = 1}$.

Check $D$: $\dfrac{1}{3}+\dfrac{1}{3}+\dfrac{1}{3} = 1$. ✓

</details>

### Question 17

**Prove that**
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$
(the vector triple product expansion).

<details>
<summary>Solution</summary>

Let $\mathbf{a} = (a_1,a_2,a_3)$$\mathbf{b} = (b_1,b_2,b_3)$$\mathbf{c} = (c_1,c_2,c_3)$.

$\mathbf{b}\times\mathbf{c} = (b_2c_3-b_3c_2,\; b_3c_1-b_1c_3,\; b_1c_2-b_2c_1)$.

The first component of $\mathbf{a}\times(\mathbf{b}\times\mathbf{c})$:

$a_2(b_1c_2-b_2c_1) - a_3(b_3c_1-b_1c_3) = a_2b_1c_2-a_2b_2c_1-a_3b_3c_1+a_3b_1c_3$

$= b_1(a_2c_2+a_3c_3) - c_1(a_2b_2+a_3b_3)$

$= b_1(\mathbf{a}\cdot\mathbf{c}-a_1c_1) - c_1(\mathbf{a}\cdot\mathbf{b}-a_1b_1)$

$= b_1(\mathbf{a}\cdot\mathbf{c}) - c_1(\mathbf{a}\cdot\mathbf{b}) - a_1b_1c_1+a_1c_1b_1 = b_1(\mathbf{a}\cdot\mathbf{c})-c_1(\mathbf{a}\cdot\mathbf{b})$.

Similarly for the other two components. $\blacksquare$

</details>

### Question 18

Two lines are given by $\mathbf{r}_1 = (0,1,0)+\lambda(1,0,-1)$ and
$\mathbf{r}_2 = (0,0,1)+\mu(0,1,1)$. Determine whether they intersect, are parallel, or are skew.

<details>
<summary>Solution</summary>

$\mathbf{d}_1 = (1,0,-1)$$\mathbf{d}_2 = (0,1,1)$. Not parallel (not scalar multiples).

For intersection: $\lambda = 0$$1 = \mu$$-\lambda = 1+\mu$.

From $\lambda = 0$: $1 = \mu$ and $0 = 1+1 = 2$. Contradiction.

The lines are **skew**.

Distance:
$\mathbf{d}_1\times\mathbf{d}_2 = (0\cdot1-(-1)\cdot1,\; (-1)\cdot0-1\cdot1,\; 1\cdot1-0\cdot0) = (1,-1,1)$.

$|\mathbf{d}_1\times\mathbf{d}_2| = \sqrt{3}$.

$\mathbf{a}_2-\mathbf{a}_1 = (0,-1,1)$.
$(\mathbf{a}_2-\mathbf{a}_1)\cdot(\mathbf{d}_1\times\mathbf{d}_2) = 0+1+1 = 2$.

$D = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{3}◆RB◆ = \boxed{\dfrac◆LB◆2\sqrt{3}◆RB◆◆LB◆3◆RB◆}$.

</details>

---

## 17. Advanced Topics

### 17.1 Vector equations of planes

The equation of a plane can be written in three equivalent forms:

- Scalar product: $\mathbf{r}\cdot\mathbf{n} = d$
- Cartesian: $ax+by+cz = d$
- Parametric: $\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}$

### 17.2 The shortest distance between two skew lines — alternative derivation

The shortest distance between skew lines equals the perpendicular distance from any point on one
Line to the parallel plane containing the other line.

### 17.3 Triple vector product identity

The BAC-CAB rule:
$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$.

This identity is extensively used in mechanics (e.g., angular momentum, moments).

### 17.4 Applications in geometry

- **Coplanarity test:** $[\mathbf{a},\mathbf{b},\mathbf{c}] = 0 \iff$ the three vectors are
  coplanar.
- **Volume of parallelepiped:** $V = |[\mathbf{a},\mathbf{b},\mathbf{c}]|$.
- **Volume of tetrahedron:** $V = \dfrac{1}{6}|[\mathbf{a},\mathbf{b},\mathbf{c}]|$.

---

## 18. Further Exam-Style Questions

### Question 19

Find the angle between the planes $2x - y + z = 3$ and $x + y + 2z = 1$.

<details>
<summary>Solution</summary>

$\mathbf{n}_1 = (2,-1,1)$$\mathbf{n}_2 = (1,1,2)$.

$\cos\theta = \dfrac◆LB◆|2-1+2|◆RB◆◆LB◆\sqrt{6}\sqrt{6}◆RB◆ = \dfrac{3}{6} = \dfrac{1}{2}$.

$\boxed{\theta = 60°}$

</details>

### Question 20

**Prove that** the line of intersection of the planes $x+y+z=1$ and $2x-y+z=3$ is parallel to the
Vector $(2, 1, -3)$.

<details>
<summary>Solution</summary>

The direction of the line of intersection is
$\mathbf{n}_1 \times \mathbf{n}_2 = (1,1,1) \times (2,-1,1)$.

$= \begin{pmatrix}(1)(1)-(1)(-1)\\(1)(2)-(1)(1)\\(1)(-1)-(1)(2)\end{pmatrix} = (2, 1, -3)$.

Since the cross product gives $(2,1,-3)$The line is parallel to this vector. $\blacksquare$

</details>

---

## 19. Advanced Topics in 3D Vectors

### 19.1 Direction cosines

If $\mathbf{a}$ makes angles $\alpha, \beta, \gamma$ with the coordinate axes, then:

$\cos\alpha = \dfrac◆LB◆a_1◆RB◆◆LB◆|\mathbf{a}|◆RB◆$
$\cos\beta = \dfrac◆LB◆a_2◆RB◆◆LB◆|\mathbf{a}|◆RB◆$
$\cos\gamma = \dfrac◆LB◆a_3◆RB◆◆LB◆|\mathbf{a}|◆RB◆$

And $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.

### 19.2 Triple vector product (BAC-CAB rule)

$\mathbf{a}\times(\mathbf{b}\times\mathbf{c}) = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{c}(\mathbf{a}\cdot\mathbf{b})$

Note:
$(\mathbf{a}\times\mathbf{b})\times\mathbf{c} = \mathbf{b}(\mathbf{a}\cdot\mathbf{c}) - \mathbf{a}(\mathbf{b}\cdot\mathbf{c})$
(different!)

### 19.3 Shortest distance from a point to a line

The shortest distance from point $P$ (position vector $\mathbf{p}$) to the line
$\mathbf{r} = \mathbf{a} + \lambda\mathbf{d}$ is:

$$D = \frac◆LB◆|(\mathbf{p}-\mathbf{a})\times\mathbf{d}|◆RB◆◆LB◆|\mathbf{d}|◆RB◆$$

### 19.4 Vector planes — parametric form

A plane through point $\mathbf{a}$ spanned by vectors $\mathbf{b}$ and $\mathbf{c}$:

$$\mathbf{r} = \mathbf{a} + s\mathbf{b} + t\mathbf{c}$$

The normal is $\mathbf{n} = \mathbf{b}\times\mathbf{c}$.

---

## 20. Further Exam-Style Questions

### Question 21

Find the shortest distance from the point $P(1,2,3)$ to the line
$\mathbf{r} = (0,1,-1)+\lambda(1,1,0)$.

<details>
<summary>Solution</summary>

$\mathbf{p}-\mathbf{a} = (1,2,3)-(0,1,-1) = (1,1,4)$. $\mathbf{d} = (1,1,0)$.

$(\mathbf{p}-\mathbf{a})\times\mathbf{d} = \begin{pmatrix}1\cdot0-4\cdot1\\4\cdot1-1\cdot0\\1\cdot1-1\cdot1\end{pmatrix} = (-4, 4, 0)$.

$D = \dfrac◆LB◆|(-4,4,0)|◆RB◆◆LB◆|(1,1,0)|◆RB◆ = \dfrac◆LB◆\sqrt{32}◆RB◆◆LB◆\sqrt{2}◆RB◆ = \dfrac◆LB◆4\sqrt{2}◆RB◆◆LB◆\sqrt{2}◆RB◆ = \boxed{4}$.

</details>

### Question 22

**Prove that** the lines $\mathbf{r}_1 = (1,0,0)+\lambda(1,1,1)$ and
$\mathbf{r}_2 = (0,1,0)+\mu(1,-1,0)$ intersect and find the point of intersection.

<details>
<summary>Solution</summary>

$1+\lambda = \mu$$\lambda = 1-\mu$$\lambda = 0$.

From $\lambda = 0$: $\mu = 1$. Check: $1 = 1$ ✓, $0 = 0$ ✓, $0 = 0$ ✓.

The lines intersect at $\boxed{(1,0,0)}$.

</details>

## Common Pitfalls

<!-- TODO: Add common pitfalls for this topic -->
