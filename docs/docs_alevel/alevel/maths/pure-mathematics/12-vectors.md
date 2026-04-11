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

:::info
The formula booklet gives the scalar product formula. You must be comfortable working in 3D
and converting between column and $\mathbf{i},\mathbf{j},\mathbf{k}$ notation.
:::

---

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

---

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

---

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

---

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
$\mathbf{a}\cdot\mathbf{b} = |\mathbf{a}| \cdot (\text{shadow of }\mathbf{b}\text{ on }\mathbf{a})$.
If they are perpendicular, the shadow is zero. If they point the same way, the dot product is
positive; if opposite, negative.

---

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

:::warning
A vector equation of a line is not unique. Different points on the line can be used as
$\mathbf{a}$, and the direction vector $\mathbf{b}$ can be any non-zero scalar multiple of the
direction. Always check your answer gives a point and direction consistent with the question.
:::

---

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

---

## 7. Angle Between Two Vectors

From the dot product formula:

$$\cos\theta = \frac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}||\mathbf{b}|}$$

The angle between two **lines** is found using the direction vectors.

---

## 8. Distance from a Point to a Line

To find the shortest distance from point $P$ to line $\mathbf{r} = \mathbf{a} + t\mathbf{b}$:

1. Let $Q$ be the closest point on the line to $P$.
2. $\overrightarrow{PQ}$ is perpendicular to $\mathbf{b}$, so
   $\overrightarrow{PQ}\cdot\mathbf{b} = 0$.
3. If $P$ has position vector $\mathbf{p}$, then
   $\overrightarrow{PQ} = \mathbf{a} + t\mathbf{b} - \mathbf{p}$.
4. $(\mathbf{a} + t\mathbf{b} - \mathbf{p})\cdot\mathbf{b} = 0$ gives $t$.
5. Substitute back to find $Q$ and compute $|\overrightarrow{PQ}|$.

---

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

$\theta = \arccos\!\left(\dfrac{-\sqrt{21}}{14}\right) \approx 109.1°$.

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
The projection of $\mathbf{b}$ onto $\mathbf{a}$ is $\text{proj}_{\mathbf{a}}\mathbf{b} = \dfrac{\mathbf{a}\cdot\mathbf{b}}{|\mathbf{a}|^2}\,\mathbf{a}$.

$\mathbf{a}\cdot\mathbf{b} = 2-3 = -1$. $|\mathbf{a}|^2 = 4+1 = 5$.

$$\text{proj}_{\mathbf{a}}\mathbf{b} = \frac{-1}{5}(2\mathbf{i}+\mathbf{j}) = -\frac{2}{5}\mathbf{i} - \frac{1}{5}\mathbf{j}$$

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

The angle between the line and the plane equals $90°$ minus the angle between $\mathbf{d}$ and
$\mathbf{n}$.

$\cos\phi = \dfrac{\mathbf{d}\cdot\mathbf{n}}{|\mathbf{d}||\mathbf{n}|} = \dfrac{6+1+2}{\sqrt{14}\sqrt{6}} = \dfrac{9}{2\sqrt{21}}$.

Angle between line and normal: $\phi = \arccos\!\left(\dfrac{9}{2\sqrt{21}}\right)$.

Angle between line and plane: $90° - \phi$.

**If you get this wrong, revise:** [Angle Between Two Vectors](#7-angle-between-two-vectors) —
Section 7.

</details>

:::

:::
