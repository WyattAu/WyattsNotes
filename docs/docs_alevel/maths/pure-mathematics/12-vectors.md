---
title: Vectors
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: vectors
---

## Board Coverage

| Board      | Paper      | Notes                                              |
| ---------- | ---------- | -------------------------------------------------- |
| AQA        | Paper 1, 2 | 2D vectors in P1; 3D vectors, scalar product in P2 |
| Edexcel    | P1, P2     | Similar split                                      |
| OCR (A)    | Paper 1, 2 | Includes vector equations of lines                 |
| CIE (9709) | P1, P2, P3 | 2D in P1; 3D and lines in P2/P3                    |

:::info The formula booklet gives the scalar product formula. You must be comfortable working in 3D
and converting between column and $\mathbf{i},\mathbf{j},\mathbf{k}$ notation. :::

<hr />

## 1. Vectors in 2D and 3D

### 1.1 Definition

**Definition.** A **vector** is a quantity with both magnitude and direction. A **scalar** is a
quantity with magnitude only.

Vectors in 2D are written as column vectors: $\dbinom{a}{b}$ or $a\mathbf{i} + b\mathbf{j}$.

Vectors in 3D: $\begin{pmatrix}a\\b\\c\end{pmatrix}$ or $a\mathbf{i} + b\mathbf{j} + c\mathbf{k}$.

The unit vectors $\mathbf{i} = \dbinom{1}{0}$, $\mathbf{j} = \dbinom{0}{1}$ point along the positive
$x$- and $y$-axes respectively. In 3D, $\mathbf{k} = \begin{pmatrix}0\\0\\1\end{pmatrix}$.

### 1.2 Position vectors

The **position vector** of a point $P$ relative to an origin $O$ is the vector
$\overrightarrow{OP}$, written as $\mathbf{r}_P$ or simply $\mathbf{p}$.

<hr />

## 2. Magnitude, Unit Vectors, Direction Cosines

### 2.1 Magnitude

The **magnitude** (length) of $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ is

$$|\mathbf{a}| = \sqrt{a_1^2 + a_2^2 + a_3^2}$$

This follows directly from Pythagoras' theorem applied in 3D.

### 2.2 Unit vectors

A **unit vector** has magnitude 1. The unit vector in the direction of $\mathbf{a}$ is

$$\hat{\mathbf{a}} = \frac{\mathbf{a}}{|\mathbf{a}|}$$

### 2.3 Direction cosines

The **direction cosines** of $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ are

$$\cos\alpha = \frac{a_1}{|\mathbf{a}|}, \quad \cos\beta = \frac{a_2}{|\mathbf{a}|}, \quad \cos\gamma = \frac{a_3}{|\mathbf{a}|}$$

where $\alpha$, $\beta$, $\gamma$ are the angles between $\mathbf{a}$ and the $x$-, $y$-, $z$-axes
respectively.

Note: $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.

<hr />

## 3. Vector Addition

### 3.1 Triangle law

To go from $A$ to $C$ via $B$: $\overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$.

### 3.2 Parallelogram law (geometric proof)

**Theorem.** If two vectors $\mathbf{a}$ and $\mathbf{b}$ are represented as adjacent sides of a
parallelogram, then the diagonal $\mathbf{a} + \mathbf{b}$ represents their sum.

**Proof.** Consider parallelogram $OACB$ where $\overrightarrow{OA} = \mathbf{a}$ and
$\overrightarrow{OB} = \mathbf{b}$.

Since $OACB$ is a parallelogram, $\overrightarrow{AC} = \overrightarrow{OB} = \mathbf{b}$.

By the triangle law:
$\overrightarrow{OC} = \overrightarrow{OA} + \overrightarrow{AC} = \mathbf{a} + \mathbf{b}$.

Similarly, $\overrightarrow{BC} = \overrightarrow{OA} = \mathbf{a}$, so
$\overrightarrow{OC} = \overrightarrow{OB} + \overrightarrow{BC} = \mathbf{b} + \mathbf{a}$.

This proves $\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$ (vector addition is commutative) and
that the diagonal of the parallelogram represents the sum. $\blacksquare$

### 3.3 Vector addition in 3D

Vector addition extends naturally to three dimensions. Given
$\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$:

$$\mathbf{a} + \mathbf{b} = \begin{pmatrix}a_1+b_1\\a_2+b_2\\a_3+b_3\end{pmatrix}$$

The same triangle and parallelogram laws apply. The key properties are:

- **Commutativity:** $\mathbf{a} + \mathbf{b} = \mathbf{b} + \mathbf{a}$
- **Associativity:**
  $(\mathbf{a} + \mathbf{b}) + \mathbf{c} = \mathbf{a} + (\mathbf{b} + \mathbf{c})$
- **Zero vector:** $\mathbf{a} + \mathbf{0} = \mathbf{a}$ where
  $\mathbf{0} = \begin{pmatrix}0\\0\\0\end{pmatrix}$
- **Additive inverse:** $\mathbf{a} + (-\mathbf{a}) = \mathbf{0}$

Scalar multiplication also satisfies the distributive laws:
$\lambda(\mathbf{a} + \mathbf{b}) = \lambda\mathbf{a} + \lambda\mathbf{b}$ and
$(\lambda + \mu)\mathbf{a} = \lambda\mathbf{a} + \mu\mathbf{a}$ for scalars $\lambda, \mu$.

**Example.** Given points $A(1, 2, -1)$, $B(4, 0, 3)$, $C(2, 5, 1)$, find
$\overrightarrow{AB} + \overrightarrow{BC}$.

$\overrightarrow{AB} = \begin{pmatrix}3\\-2\\4\end{pmatrix}$,
$\overrightarrow{BC} = \begin{pmatrix}-2\\5\\-2\end{pmatrix}$.

$\overrightarrow{AB} + \overrightarrow{BC} = \begin{pmatrix}1\\3\\2\end{pmatrix} = \overrightarrow{AC}$,
confirming the triangle law in 3D.

<hr />

## 4. The Scalar (Dot) Product

### 4.1 Definition

**Definition.** The scalar (dot) product of $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$
and $\mathbf{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$ is

$$\mathbf{a}\cdot\mathbf{b} = a_1b_1 + a_2b_2 + a_3b_3$$

### 4.2 Geometric interpretation

**Theorem.** $\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta$, where $\theta$ is the
angle between $\mathbf{a}$ and $\mathbf{b}$.

**Proof using the cosine rule.** Consider the triangle formed by vectors $\mathbf{a}$, $\mathbf{b}$,
and $\mathbf{a} - \mathbf{b}$.

By the cosine rule:
$|\mathbf{a}-\mathbf{b}|^2 = |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2|\mathbf{a}||\mathbf{b}|\cos\theta$.

Now compute $|\mathbf{a}-\mathbf{b}|^2$ algebraically:

$$
\begin{aligned}
|\mathbf{a}-\mathbf{b}|^2 &= (a_1-b_1)^2 + (a_2-b_2)^2 + (a_3-b_3)^2 \\
&= (a_1^2+a_2^2+a_3^2) + (b_1^2+b_2^2+b_3^2) - 2(a_1b_1+a_2b_2+a_3b_3) \\
&= |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2\,\mathbf{a}\cdot\mathbf{b}
\end{aligned}
$$

Comparing with the cosine rule:

$$|\mathbf{a}|^2 + |\mathbf{b}|^2 - 2\,\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}|^2 + |\mathbf{b}|^2 - 2|\mathbf{a}||\mathbf{b}|\cos\theta$$

$$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}||\mathbf{b}|\cos\theta \quad \blacksquare$$

### 4.3 Perpendicularity test

$\mathbf{a} \perp \mathbf{b} \iff \mathbf{a}\cdot\mathbf{b} = 0$ (when neither vector is zero).

This follows since $\cos(\pi/2) = 0$.

**Intuition.** The dot product $\mathbf{a}\cdot\mathbf{b}$ measures the extent to which $\mathbf{a}$
and $\mathbf{b}$ point in the same direction. It equals the product of the magnitude of $\mathbf{a}$
and the **projection** of $\mathbf{b}$ onto $\mathbf{a}$:
$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}| \cdot (\mathrm{shadow of }\mathbf{b}\mathrm{ on }\mathbf{a})$.
If they are perpendicular, the shadow is zero. If they point the same way, the dot product is
positive; if opposite, negative.

<hr />

## 5. Vector Equation of a Line

### 5.1 Definition

**Definition.** The vector equation of a line passing through point $A$ with position vector
$\mathbf{a}$, in the direction of vector $\mathbf{b}$, is

$$\mathbf{r} = \mathbf{a} + t\mathbf{b}, \quad t \in \mathbb{R}$$

where $\mathbf{r}$ is the position vector of a general point on the line, and $t$ is a parameter.

### 5.2 Parametric form

If $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ and
$\mathbf{b} = \begin{pmatrix}b_1\\b_2\\b_3\end{pmatrix}$, the parametric equations are

$$x = a_1 + tb_1, \quad y = a_2 + tb_2, \quad z = a_3 + tb_3$$

### 5.3 Cartesian form (2D)

In 2D, eliminating $t$: $\dfrac{x - a_1}{b_1} = \dfrac{y - a_2}{b_2}$.

:::warning A vector equation of a line is not unique. Different points on the line can be used as
$\mathbf{a}$, and the direction vector $\mathbf{b}$ can be any non-zero scalar multiple of the
direction. Always check your answer gives a point and direction consistent with the question. :::

### 5.4 Vector equation of a line in 3D

The vector equation of a line in 3D has the same form as in 2D, but now operates in three
dimensions. Given a point $A(x_0, y_0, z_0)$ on the line and a direction vector
$\mathbf{d} = \begin{pmatrix}d_1\\d_2\\d_3\end{pmatrix}$:

$$\mathbf{r} = \begin{pmatrix}x_0\\y_0\\z_0\end{pmatrix} + t\begin{pmatrix}d_1\\d_2\\d_3\end{pmatrix}, \quad t \in \mathbb{R}$$

The parametric form is:

$$x = x_0 + td_1, \quad y = y_0 + td_2, \quad z = z_0 + td_3$$

:::tip To convert from two points $A$ and $B$ to the vector equation, use $A$ as the position vector
and $\overrightarrow{AB}$ as the direction vector. Alternatively, use $B$ and $\overrightarrow{BA}$
--- both give the same line. :::

**Example.** Find the vector equation of the line through $P(2, -1, 3)$ and $Q(5, 1, -2)$.

Direction: $\overrightarrow{PQ} = \begin{pmatrix}3\\2\\-5\end{pmatrix}$.

$$\mathbf{r} = \begin{pmatrix}2\\-1\\3\end{pmatrix} + t\begin{pmatrix}3\\2\\-5\end{pmatrix}$$

To check: at $t = 0$ we get $P$; at $t = 1$ we get $\begin{pmatrix}5\\1\\-2\end{pmatrix} = Q$. ✓

<hr />

## 6. Intersection of Lines

### 6.1 Two lines in 3D

Given $\mathbf{r}_1 = \mathbf{a}_1 + t\mathbf{b}_1$ and
$\mathbf{r}_2 = \mathbf{a}_2 + s\mathbf{b}_2$:

**Method:**

1. Equate the $x$-, $y$-, and $z$-components.
2. Solve two equations for $t$ and $s$.
3. Check the third equation is consistent.

- If consistent: the lines **intersect** at the point found.
- If inconsistent: the lines are **skew** (non-parallel and non-intersecting).
- If $\mathbf{b}_1 = k\mathbf{b}_2$ for some scalar $k$: the lines are **parallel** (coincident if
  also $\mathbf{a}_2 - \mathbf{a}_1$ is parallel to $\mathbf{b}_1$).

### 6.2 Skew lines

**Definition.** Two lines in 3D are **skew** if they are not parallel and do not intersect.

To verify skewness, show that the system of equations for $t$ and $s$ is inconsistent.

<hr />

## 7. Angle Between Two Vectors

From the dot product formula:

$$\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$

The angle between two **lines** is found using the direction vectors.

<hr />

## 8. Distance from a Point to a Line

To find the shortest distance from point $P$ to line $\mathbf{r} = \mathbf{a} + t\mathbf{b}$:

1. Let $Q$ be the closest point on the line to $P$.
2. $\overrightarrow{PQ}$ is perpendicular to $\mathbf{b}$, so
   $\overrightarrow{PQ}\cdot\mathbf{b} = 0$.
3. If $P$ has position vector $\mathbf{p}$, then
   $\overrightarrow{PQ} = \mathbf{a} + t\mathbf{b} - \mathbf{p}$.
4. $(\mathbf{a} + t\mathbf{b} - \mathbf{p})\cdot\mathbf{b} = 0$ gives $t$.
5. Substitute back to find $Q$ and compute $|\overrightarrow{PQ}|$.

### 8.1 Formula for distance from a point to a line

The above procedure yields the general formula. For a line through $A$ with direction $\mathbf{d}$,
and a point $P$ with position vector $\mathbf{p}$:

$$d = \frac{|(\mathbf{p} - \mathbf{a}) \times \mathbf{d}|}{|\mathbf{d}|}$$

This uses the cross product (vector product), which gives a vector perpendicular to both
$\overrightarrow{AP}$ and $\mathbf{d}$ whose magnitude equals the area of the parallelogram they
span. Dividing by $|\mathbf{d}|$ (the base) gives the perpendicular height, i.e. the shortest
distance.

:::info When the cross product is not on your syllabus, use the dot-product method from Section 8.
The cross-product formula is listed here for reference and is examined on CIE P3 and some OCR
papers. :::

**Example using the dot-product method.** Find the distance from $P(4, 1, -1)$ to the line
$\mathbf{r} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t\begin{pmatrix}2\\1\\-1\end{pmatrix}$.

$\overrightarrow{PQ} = \begin{pmatrix}1+2t\\t\\2-t\end{pmatrix} - \begin{pmatrix}4\\1\\-1\end{pmatrix}
= \begin{pmatrix}2t-3\\t-1\\3-t\end{pmatrix}$.

Set $\overrightarrow{PQ}\cdot\begin{pmatrix}2\\1\\-1\end{pmatrix} = 0$:

$2(2t-3) + (t-1) - (3-t) = 0 \implies 4t - 6 + t - 1 - 3 + t = 0 \implies 6t = 10 \implies t = \dfrac{5}{3}$.

$Q = \begin{pmatrix}1+10/3\\5/3\\2-5/3\end{pmatrix} = \begin{pmatrix}13/3\\5/3\\1/3\end{pmatrix}$.

$d = \left|\begin{pmatrix}1/3\\2/3\\-2/3\end{pmatrix}\right| = \sqrt{\dfrac{1}{9} + \dfrac{4}{9} + \dfrac{4}{9}} = \sqrt{\dfrac{9}{9}} = 1$.

<hr />

## 9. Scalar Triple Product

### 9.1 Definition

**Definition.** The **scalar triple product** of three vectors $\mathbf{a}$, $\mathbf{b}$,
$\mathbf{c}$ is

$$[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = \mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})$$

In component form, this equals the determinant:

$$[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = \begin{vmatrix} a_1 & a_2 & a_3 \\ b_1 & b_2 & b_3 \\ c_1 & c_2 & c_3 \end{vmatrix}$$

### 9.2 Geometric interpretation: volume of a parallelepiped

**Theorem.** The absolute value of the scalar triple product equals the volume of the parallelepiped
with edges defined by $\mathbf{a}$, $\mathbf{b}$, and $\mathbf{c}$.

$$V = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$$

**Proof.** The vector $\mathbf{b}\times\mathbf{c}$ has magnitude
$|\mathbf{b}||\mathbf{c}|\sin\theta$ equal to the area of the parallelogram with sides $\mathbf{b}$
and $\mathbf{c}$, and direction perpendicular to both. The height of the parallelepiped is the
projection of $\mathbf{a}$ onto $\mathbf{b}\times\mathbf{c}$, which is $|\mathbf{a}|\cos\phi$ where
$\phi$ is the angle between $\mathbf{a}$ and $\mathbf{b}\times\mathbf{c}$.

$$V = \mathrm{base area} \times \mathrm{height} = |\mathbf{b}\times\mathbf{c}| \cdot |\mathbf{a}|\cos\phi = |\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})| \quad \blacksquare$$

### 9.3 Properties of the scalar triple product

- **Cyclic permutation:**
  $[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = [\mathbf{b},\, \mathbf{c},\, \mathbf{a}] = [\mathbf{c},\, \mathbf{a},\, \mathbf{b}]$
- **Anti-symmetry:** Swapping any two vectors changes the sign:
  $[\mathbf{a},\, \mathbf{c},\, \mathbf{b}] = -[\mathbf{a},\, \mathbf{b},\, \mathbf{c}]$
- **Coplanarity test:** $\mathbf{a}$, $\mathbf{b}$, $\mathbf{c}$ are coplanar if and only if
  $[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = 0$ (the parallelepiped has zero volume).
- **Volume of a tetrahedron:**
  $V_{\mathrm{tet}} = \dfrac{1}{6}|\mathbf{a}\cdot(\mathbf{b}\times\mathbf{c})|$, since a
  tetrahedron is $\dfrac{1}{6}$ of a parallelepiped.

**Example.** Find the volume of the parallelepiped with edges
$\mathbf{a} = \begin{pmatrix}2\\0\\1\end{pmatrix}$,
$\mathbf{b} = \begin{pmatrix}1\\3\\-1\end{pmatrix}$,
$\mathbf{c} = \begin{pmatrix}0\\2\\4\end{pmatrix}$.

$[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = \begin{vmatrix} 2 & 0 & 1 \\ 1 & 3 & -1 \\ 0 & 2 & 4 \end{vmatrix}$

$= 2\begin{vmatrix}3 & -1\\2 & 4\end{vmatrix} - 0\begin{vmatrix}1 & -1\\0 & 4\end{vmatrix} + 1\begin{vmatrix}1 & 3\\0 & 2\end{vmatrix}$

$= 2(12+2) + 0 + 1(2) = 28 + 2 = 30$.

Volume $= |30| = 30$ cubic units.

<hr />

## 10. Vector Proof Techniques

### 10.1 Proving collinear points

Points $A$, $B$, $C$ are **collinear** if and only if $\overrightarrow{AB}$ is parallel to
$\overrightarrow{BC}$, i.e. $\overrightarrow{AB} = k\,\overrightarrow{BC}$ for some scalar $k$.

Equivalently, $\overrightarrow{AB} \times \overrightarrow{BC} = \mathbf{0}$ (zero vector).

**Method:**

1. Compute $\overrightarrow{AB} = \mathbf{b} - \mathbf{a}$ and
   $\overrightarrow{BC} = \mathbf{c} - \mathbf{b}$.
2. Check if one is a scalar multiple of the other.
3. Alternatively, check if $\overrightarrow{AC}$ is parallel to $\overrightarrow{AB}$.

**Example.** Show that $A(1, 2, 3)$, $B(3, 4, 5)$, $C(5, 6, 7)$ are collinear.

$\overrightarrow{AB} = \begin{pmatrix}2\\2\\2\end{pmatrix}$,
$\overrightarrow{BC} = \begin{pmatrix}2\\2\\2\end{pmatrix}$.

Since $\overrightarrow{AB} = \overrightarrow{BC}$ (i.e. $k = 1$), the points are collinear.
$\blacksquare$

### 10.2 Proving perpendicular lines

Two lines are perpendicular if and only if their direction vectors have dot product zero.

**Method:**

1. Identify the direction vectors $\mathbf{d}_1$ and $\mathbf{d}_2$ of the two lines.
2. Compute $\mathbf{d}_1\cdot\mathbf{d}_2$.
3. If the result is zero (and neither direction vector is zero), the lines are perpendicular.

**Example.** Show that the lines
$\mathbf{r}_1 = \begin{pmatrix}0\\1\\2\end{pmatrix} + t\begin{pmatrix}1\\2\\-2\end{pmatrix}$ and
$\mathbf{r}_2 = \begin{pmatrix}3\\0\\-1\end{pmatrix} + s\begin{pmatrix}2\\-1\\0\end{pmatrix}$ are
perpendicular.

$\mathbf{d}_1\cdot\mathbf{d}_2 = (1)(2) + (2)(-1) + (-2)(0) = 2 - 2 + 0 = 0$.

Since the dot product is zero, the lines are perpendicular. $\blacksquare$

### 10.3 Proving points form a parallelogram

Points $A$, $B$, $C$, $D$ form a parallelogram (in order) if and only if
$\overrightarrow{AB} = \overrightarrow{DC}$ (or equivalently
$\overrightarrow{AD} = \overrightarrow{BC}$).

**Method:**

1. Compute the relevant displacement vectors.
2. Show opposite sides are equal as vectors (same components).

:::tip To show a quadrilateral is a **rhombus**, additionally show that adjacent sides have equal
magnitude. To show a **rectangle**, show that adjacent sides are perpendicular. A **square**
requires both conditions. :::

### 10.4 Using vectors in geometric proofs

Many geometry problems can be solved elegantly using vectors. The general strategy is:

1. Assign position vectors to key points.
2. Express the relevant geometric conditions in vector form (parallelism via scalar multiples,
   perpendicularity via dot products, midpoints via averages).
3. Compute and simplify algebraically.

**Example.** In triangle $ABC$, let $M$ be the midpoint of $AB$. Prove that
$\overrightarrow{CM} = \dfrac{1}{2}\overrightarrow{CA} + \dfrac{1}{2}\overrightarrow{CB}$.

$\mathbf{m} = \dfrac{\mathbf{a} + \mathbf{b}}{2}$ (midpoint formula).

$\overrightarrow{CM} = \mathbf{m} - \mathbf{c} = \dfrac{\mathbf{a} + \mathbf{b}}{2} - \mathbf{c}
= \dfrac{\mathbf{a} - \mathbf{c}}{2} + \dfrac{\mathbf{b} - \mathbf{c}}{2}
= \dfrac{1}{2}\overrightarrow{CA} + \dfrac{1}{2}\overrightarrow{CB}$.
$\blacksquare$

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
Given $\mathbf{a} = 3\mathbf{i} - 2\mathbf{j} + \mathbf{k}$ and $\mathbf{b} = \mathbf{i} + 4\mathbf{j} - 3\mathbf{k}$, find $\mathbf{a} + \mathbf{b}$, $\mathbf{a} - \mathbf{b}$, $|\mathbf{a}|$, and a unit vector in the direction of $\mathbf{a}$.
</details>

<details>
<summary>Solution 1</summary>
$\mathbf{a} + \mathbf{b} = 4\mathbf{i} + 2\mathbf{j} - 2\mathbf{k} = \begin{pmatrix}4\\2\\-2\end{pmatrix}$.

$\mathbf{a} - \mathbf{b} = 2\mathbf{i} - 6\mathbf{j} + 4\mathbf{k} = \begin{pmatrix}2\\-6\\4\end{pmatrix}$.

$|\mathbf{a}| = \sqrt{9+4+1} = \sqrt{14}$.

$\hat{\mathbf{a}} = \dfrac{1}{\sqrt{14}}\begin{pmatrix}3\\-2\\1\end{pmatrix}$.

**If you get this wrong, revise:**
[Magnitude, Unit Vectors](#2-magnitude-unit-vectors-direction-cosines) — Section 2.

</details>

<details>
<summary>Problem 2</summary>
Find the angle between $\mathbf{a} = \begin{pmatrix}2\\1\\-1\end{pmatrix}$ and $\mathbf{b} = \begin{pmatrix}1\\-3\\2\end{pmatrix}$.
</details>

<details>
<summary>Solution 2</summary>
$\mathbf{a}\cdot\mathbf{b} = 2-3-2 = -3$.
$|\mathbf{a}| = \sqrt{4+1+1} = \sqrt{6}$, $|\mathbf{b}| = \sqrt{1+9+4} = \sqrt{14}$.

$\cos\theta = \dfrac{-3}{\sqrt{6}\sqrt{14}} = \dfrac{-3}{\sqrt{84}} = \dfrac{-3}{2\sqrt{21}} = \dfrac{-\sqrt{21}}{14}$.

$\theta = \arccos\!\left(\dfrac{-\sqrt{21}}{14}\right) \approx 109.1^\circ$.

**If you get this wrong, revise:** [The Scalar (Dot) Product](#4-the-scalar-dot-product) —
Section 4.

</details>

<details>
<summary>Problem 3</summary>
Find the vector equation of the line through $A(1, 2, -1)$ and $B(3, 0, 4)$.
</details>

<details>
<summary>Solution 3</summary>
Direction: $\overrightarrow{AB} = \begin{pmatrix}3-1\\0-2\\4-(-1)\end{pmatrix} = \begin{pmatrix}2\\-2\\5\end{pmatrix}$.

$$\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t\begin{pmatrix}2\\-2\\5\end{pmatrix}$$

**If you get this wrong, revise:** [Vector Equation of a Line](#5-vector-equation-of-a-line) —
Section 5.

</details>

<details>
<summary>Problem 4</summary>
Show that the lines $\mathbf{r} = \begin{pmatrix}1\\0\\2\end{pmatrix} + t\begin{pmatrix}2\\1\\-1\end{pmatrix}$ and $\mathbf{r} = \begin{pmatrix}3\\1\\1\end{pmatrix} + s\begin{pmatrix}1\\-1\\1\end{pmatrix}$ intersect, and find the point of intersection.
</details>

<details>
<summary>Solution 4</summary>
Equating components: $1+2t = 3+s$, $t = 1-s$, $2-t = 1+s$.

From $t = 1-s$ and $2-t = 1+s$: $2-(1-s) = 1+s \implies 1+s = 1+s$ ✓ (consistent).

Check first: $1+2(1-s) = 3+s \implies 3-2s = 3+s \implies s = 0$, $t = 1$.

Point: $\begin{pmatrix}1+2\\0+1\\2-1\end{pmatrix} = \begin{pmatrix}3\\1\\1\end{pmatrix}$.

**If you get this wrong, revise:** [Intersection of Lines](#6-intersection-of-lines) — Section 6.

</details>

<details>
<summary>Problem 5</summary>
Find $\lambda$ such that $\begin{pmatrix}\lambda\\3\\-1\end{pmatrix}$ is perpendicular to $\begin{pmatrix}2\\\lambda\\4\end{pmatrix}$.
</details>

<details>
<summary>Solution 5</summary>
Perpendicular $\iff$ dot product $= 0$:

$$2\lambda + 3\lambda - 4 = 0 \implies 5\lambda = 4 \implies \lambda = \frac{4}{5}$$

**If you get this wrong, revise:** [Perpendicularity test](#43-perpendicularity-test) — Section 4.3.

</details>

<details>
<summary>Problem 6</summary>
Find the distance from $P(1, 2, 3)$ to the line $\mathbf{r} = \begin{pmatrix}0\\1\\-1\end{pmatrix} + t\begin{pmatrix}1\\1\\1\end{pmatrix}$.
</details>

<details>
<summary>Solution 6</summary>
$\overrightarrow{PQ} = \begin{pmatrix}t\\1+t\\-1+t\end{pmatrix} - \begin{pmatrix}1\\2\\3\end{pmatrix} = \begin{pmatrix}t-1\\t-1\\t-4\end{pmatrix}$.

$\overrightarrow{PQ} \cdot \begin{pmatrix}1\\1\\1\end{pmatrix} = 0$:
$(t-1)+(t-1)+(t-4) = 0 \implies 3t = 6 \implies t = 2$.

$Q = \begin{pmatrix}2\\3\\1\end{pmatrix}$,
$\overrightarrow{PQ} = \begin{pmatrix}1\\1\\-2\end{pmatrix}$,
$|\overrightarrow{PQ}| = \sqrt{1+1+4} = \sqrt{6}$.

**If you get this wrong, revise:**
[Distance from a Point to a Line](#8-distance-from-a-point-to-a-line) — Section 8.

</details>

<details>
<summary>Problem 7</summary>
Prove that the direction cosines satisfy $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.
</details>

<details>
<summary>Solution 7</summary>
For $\mathbf{a} = \begin{pmatrix}a_1\\a_2\\a_3\end{pmatrix}$ with $|\mathbf{a}| = m$:

$\cos\alpha = a_1/m$, $\cos\beta = a_2/m$, $\cos\gamma = a_3/m$.

$$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \frac{a_1^2+a_2^2+a_3^2}{m^2} = \frac{m^2}{m^2} = 1 \quad \blacksquare$$

**If you get this wrong, revise:** [Direction Cosines](#23-direction-cosines) — Section 2.3.

</details>

<details>
<summary>Problem 8</summary>
Points $A$, $B$, $C$ have position vectors $\mathbf{a} = \begin{pmatrix}1\\-1\\2\end{pmatrix}$, $\mathbf{b} = \begin{pmatrix}3\\1\\0\end{pmatrix}$, $\mathbf{c} = \begin{pmatrix}4\\0\\3\end{pmatrix}$. Determine whether $\triangle ABC$ is right-angled.
</details>

<details>
<summary>Solution 8</summary>
$\overrightarrow{AB} = \begin{pmatrix}2\\2\\-2\end{pmatrix}$, $\overrightarrow{AC} = \begin{pmatrix}3\\1\\1\end{pmatrix}$, $\overrightarrow{BC} = \begin{pmatrix}1\\-1\\3\end{pmatrix}$.

$\overrightarrow{AB}\cdot\overrightarrow{AC} = 6+2-2 = 6 \neq 0$.
$\overrightarrow{AB}\cdot\overrightarrow{BC} = 2-2-6 = -6 \neq 0$.
$\overrightarrow{AC}\cdot\overrightarrow{BC} = 3-1+3 = 5 \neq 0$.

No pair is perpendicular, so $\triangle ABC$ is **not** right-angled.

**If you get this wrong, revise:** [Perpendicularity test](#43-perpendicularity-test) — Section 4.3.

</details>

<details>
<summary>Problem 9</summary>
Show that the lines $\mathbf{r} = \begin{pmatrix}0\\0\\1\end{pmatrix} + t\begin{pmatrix}1\\1\\0\end{pmatrix}$ and $\mathbf{r} = \begin{pmatrix}0\\1\\0\end{pmatrix} + s\begin{pmatrix}1\\0\\1\end{pmatrix}$ intersect, and find the point of intersection.
</details>

<details>
<summary>Solution 9</summary>
Equating: $t = s$, $t = 1$, $1 = s$.

From $t = 1$ and $t = s$: $s = 1$. Check third: $1 = s = 1$ ✓.

Wait — all three are consistent! Let me re-check. Line 1: $(t, t, 1)$. Line 2: $(s, 1, s)$.

$t = s$, $t = 1$, $1 = s$. So $t = s = 1$. Point: $(1, 1, 1)$.

Actually the lines **intersect** at $(1,1,1)$, they are not skew.

**If you get this wrong, revise:** [Skew Lines](#62-skew-lines) — Section 6.2.

</details>

<details>
<summary>Problem 10</summary>
Given $\mathbf{a} = 2\mathbf{i} + \mathbf{j}$ and $\mathbf{b} = \mathbf{i} - 3\mathbf{j}$, find the vector projection of $\mathbf{b}$ onto $\mathbf{a}$.
</details>

<details>
<summary>Solution 10</summary>
The projection of $\mathbf{b}$ onto $\mathbf{a}$ is $\mathrm{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a}$.

$\mathbf{a}\cdot\mathbf{b} = 2-3 = -1$. $|\mathbf{a}|^2 = 4+1 = 5$.

$$\mathrm{proj}_{\mathbf{a}}\mathbf{b} = \frac{-1}{5}(2\mathbf{i}+\mathbf{j}) = -\frac{2}{5}\mathbf{i} - \frac{1}{5}\mathbf{j}$$

**If you get this wrong, revise:** [Geometric Interpretation](#42-geometric-interpretation) —
Section 4.2.

</details>

<details>
<summary>Problem 11</summary>
Find the angle between the line $\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t\begin{pmatrix}3\\-1\\2\end{pmatrix}$ and the plane $2x - y + z = 5$.
</details>

<details>
<summary>Solution 11</summary>
The normal to the plane is $\mathbf{n} = \begin{pmatrix}2\\-1\\1\end{pmatrix}$, and the direction of the line is $\mathbf{d} = \begin{pmatrix}3\\-1\\2\end{pmatrix}$.

The angle between the line and the plane equals $90^\circ$ minus the angle between $\mathbf{d}$ and
$\mathbf{n}$.

$\cos\phi = \dfrac{\mathbf{d}\cdot\mathbf{n}}{|\mathbf{d}||\mathbf{n}|} = \dfrac{6+1+2}{\sqrt{14}\sqrt{6}} = \dfrac{9}{2\sqrt{21}}$.

Angle between line and normal: $\phi = \arccos\!\left(\dfrac{9}{2\sqrt{21}}\right)$.

Angle between line and plane: $90° - \phi$.

**If you get this wrong, revise:** [Angle Between Two Vectors](#7-angle-between-two-vectors) —
Section 7.

</details>

<details>
<summary>Problem 12</summary>
Find the direction cosines of the vector $\mathbf{v} = \begin{pmatrix}1\\-2\\2\end{pmatrix}$, and verify that they satisfy $\cos^2\alpha + \cos^2\beta + \cos^2\gamma = 1$.
</details>

<details>
<summary>Solution 12</summary>
$|\mathbf{v}| = \sqrt{1 + 4 + 4} = \sqrt{9} = 3$.

$\cos\alpha = \dfrac{1}{3}$, $\quad \cos\beta = \dfrac{-2}{3}$, $\quad \cos\gamma = \dfrac{2}{3}$.

Check:
$\cos^2\alpha + \cos^2\beta + \cos^2\gamma = \dfrac{1}{9} + \dfrac{4}{9} + \dfrac{4}{9} = \dfrac{9}{9} = 1$.
✓

The angles are $\alpha = \arccos(1/3) \approx 70.5^\circ$,
$\beta = \arccos(-2/3) \approx 131.8^\circ$, $\gamma = \arccos(2/3) \approx 48.2^\circ$.

**If you get this wrong, revise:** [Direction Cosines](#23-direction-cosines) — Section 2.3.

</details>

<details>
<summary>Problem 13</summary>
Find the vector equation of the line through $A(2, -3, 1)$ that is parallel to the line $\mathbf{r} = \begin{pmatrix}0\\1\\-2\end{pmatrix} + t\begin{pmatrix}4\\-1\\3\end{pmatrix}$.
</details>

<details>
<summary>Solution 13</summary>
Since the line is parallel, it has the same direction vector $\begin{pmatrix}4\\-1\\3\end{pmatrix}$.

Using point $A(2, -3, 1)$:

$$\mathbf{r} = \begin{pmatrix}2\\-3\\1\end{pmatrix} + t\begin{pmatrix}4\\-1\\3\end{pmatrix}$$

**If you get this wrong, revise:**
[Vector Equation of a Line in 3D](#54-vector-equation-of-a-line-in-3d) — Section 5.4.

</details>

<details>
<summary>Problem 14</summary>
Find the volume of the parallelepiped with edges $\mathbf{a} = \begin{pmatrix}1\\0\\2\end{pmatrix}$, $\mathbf{b} = \begin{pmatrix}3\\1\\-1\end{pmatrix}$, $\mathbf{c} = \begin{pmatrix}-1\\2\\1\end{pmatrix}$.
</details>

<details>
<summary>Solution 14</summary>
$[\mathbf{a},\, \mathbf{b},\, \mathbf{c}] = \begin{vmatrix} 1 & 0 & 2 \\ 3 & 1 & -1 \\ -1 & 2 & 1 \end{vmatrix}$

$= 1\begin{vmatrix}1 & -1\\2 & 1\end{vmatrix} - 0\begin{vmatrix}3 & -1\\-1 & 1\end{vmatrix} + 2\begin{vmatrix}3 & 1\\-1 & 2\end{vmatrix}$

$= 1(1+2) + 0 + 2(6+1) = 3 + 14 = 17$.

Volume $= |17| = 17$ cubic units.

Volume of the tetrahedron $= \dfrac{17}{6}$ cubic units.

**If you get this wrong, revise:** [Scalar Triple Product](#9-scalar-triple-product) — Section 9.

</details>

<details>
<summary>Problem 15</summary>
Determine whether the points $P(1, 2, 3)$, $Q(4, 5, 6)$, $R(7, 8, 9)$ are collinear. If they are, find the ratio $PQ : QR$.
</details>

<details>
<summary>Solution 15</summary>
$\overrightarrow{PQ} = \begin{pmatrix}3\\3\\3\end{pmatrix}$,
$\overrightarrow{QR} = \begin{pmatrix}3\\3\\3\end{pmatrix}$.

Since $\overrightarrow{PQ} = \overrightarrow{QR}$, the points are collinear. The ratio is
$PQ : QR = 1 : 1$.

**If you get this wrong, revise:** [Proving Collinear Points](#101-proving-collinear-points) —
Section 10.1.

</details>

<details>
<summary>Problem 16</summary>
Show that the lines $\mathbf{r}_1 = \begin{pmatrix}1\\0\\0\end{pmatrix} + t\begin{pmatrix}1\\2\\3\end{pmatrix}$ and $\mathbf{r}_2 = \begin{pmatrix}0\\1\\-1\end{pmatrix} + s\begin{pmatrix}2\\-1\\1\end{pmatrix}$ are skew.
</details>

<details>
<summary>Solution 16</summary>
Equating components: $1+t = 2s$, $2t = 1-s$, $3t = -1+s$.

From equation 2: $s = 1 - 2t$. Substitute into equation 1:
$1+t = 2(1-2t) = 2-4t \implies 5t = 1 \implies t = 1/5$.

Then $s = 1 - 2/5 = 3/5$.

Check equation 3: $3(1/5) = 3/5$ and $-1 + 3/5 = -2/5$.

$3/5 \neq -2/5$, so the third equation is **inconsistent**. The lines are skew. $\blacksquare$

**If you get this wrong, revise:** [Skew Lines](#62-skew-lines) — Section 6.2.

</details>

<details>
<summary>Problem 17</summary>
Find the shortest distance from the point $P(3, -1, 2)$ to the line $\mathbf{r} = \begin{pmatrix}1\\2\\-1\end{pmatrix} + t\begin{pmatrix}1\\0\\3\end{pmatrix}$.
</details>

<details>
<summary>Solution 17</summary>
Let $\mathbf{a} = \begin{pmatrix}1\\2\\-1\end{pmatrix}$, $\mathbf{d} = \begin{pmatrix}1\\0\\3\end{pmatrix}$,
$\mathbf{p} = \begin{pmatrix}3\\-1\\2\end{pmatrix}$.

$\overrightarrow{AP} = \mathbf{p} - \mathbf{a} = \begin{pmatrix}2\\-3\\3\end{pmatrix}$.

$\overrightarrow{PQ} = \mathbf{a} + t\mathbf{d} - \mathbf{p} = \begin{pmatrix}t-2\\t+2\\-1+3t-2\end{pmatrix} = \begin{pmatrix}t-2\\t+2\\3t-3\end{pmatrix}$.

Set $\overrightarrow{PQ}\cdot\mathbf{d} = 0$: $(t-2)(1) + (t+2)(0) + (3t-3)(3) = 0$

$t - 2 + 9t - 9 = 0 \implies 10t = 11 \implies t = 11/10$.

$Q = \begin{pmatrix}1+11/10\\2\\-1+33/10\end{pmatrix} = \begin{pmatrix}21/10\\2\\23/10\end{pmatrix}$.

$\overrightarrow{PQ} = \begin{pmatrix}21/10-3\\2-(-1)\\23/10-2\end{pmatrix} = \begin{pmatrix}-9/10\\3\\3/10\end{pmatrix}$.

$d = \sqrt{81/100 + 9 + 9/100} = \sqrt{81/100 + 900/100 + 9/100} = \sqrt{990/100} = \dfrac{3\sqrt{110}}{10}$.

**If you get this wrong, revise:**
[Distance from a Point to a Line](#8-distance-from-a-point-to-a-line) — Section 8.

</details>

<details>
<summary>Problem 18</summary>
Points $A$, $B$, $C$, $D$ have position vectors $\mathbf{a} = \begin{pmatrix}0\\0\\0\end{pmatrix}$, $\mathbf{b} = \begin{pmatrix}4\\1\\-2\end{pmatrix}$, $\mathbf{c} = \begin{pmatrix}6\\3\\1\end{pmatrix}$, $\mathbf{d} = \begin{pmatrix}2\\2\\3\end{pmatrix}$. Show that $ABCD$ is a parallelogram, and determine whether it is a rectangle.
</details>

<details>
<summary>Solution 18</summary>
$\overrightarrow{AB} = \begin{pmatrix}4\\1\\-2\end{pmatrix}$,
$\overrightarrow{DC} = \mathbf{c} - \mathbf{d} = \begin{pmatrix}4\\1\\-2\end{pmatrix}$.

Since $\overrightarrow{AB} = \overrightarrow{DC}$, $ABCD$ is a parallelogram. ✓

Check for rectangle:
$\overrightarrow{AB}\cdot\overrightarrow{AD} = \begin{pmatrix}4\\1\\-2\end{pmatrix}\cdot\begin{pmatrix}2\\2\\3\end{pmatrix} = 8 + 2 - 6 = 4 \neq 0$.

The adjacent sides are not perpendicular, so $ABCD$ is **not** a rectangle.

**If you get this wrong, revise:**
[Proving Points Form a Parallelogram](#103-proving-points-form-a-parallelogram) — Section 10.3.

</details>

:::

:::

:::

:::

:::

:::

:::

:::

:::

:::
