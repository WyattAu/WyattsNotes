---
title: Matrices
description:
  'A-Level Further Maths notes on Matrices: Board Coverage; 1. Matrix Notation and Operations; 1.1
  Matrix Addition and Scalar Multiplication; 1.2 Matrix Multipl.'
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-matrices
sidebar_position: 2
---

## Matrices

Matrices provide a compact algebraic framework for representing and manipulating systems of linear
equations, geometric transformations, and — at a more advanced level — quantum mechanical states and
data structures. This topic develops the algebra of matrices and their interpretation as linear
transformations of the plane and space.

### Board Coverage

| Board   | Paper   | Notes                                                   |
| ------- | ------- | ------------------------------------------------------- |
| AQA     | Paper 1 | 3D transformations, eigenvalues and eigenvectors        |
| Edexcel | FP1     | 2D transformations, $3\times3$ matrices, determinants   |
| OCR (A) | Paper 1 | 2D transformations, $3\times3$ matrices                 |
| CIE     | P1      | 2D and basic 3D transformations, inverses, determinants |

<hr />

## 1. Matrix Notation and Operations

**Definition.** An $m \times n$ _matrix_ is a rectangular array of numbers arranged in $m$ rows and
$n$ columns. We write $\mathbf{A} = (a_{ij})$ where $a_{ij}$ is the entry in row $i$, column $j$.
The set of all $m \times n$ matrices with real entries is denoted $M_{m\times n}(\mathbb{R})$.

A matrix with a single row is a _row vector_, and a matrix with a single column is a _column
vector_.

### 1.1 Matrix Addition and Scalar Multiplication

For matrices $\mathbf{A}, \mathbf{B} \in M_{m \times n}(\mathbb{R})$ and scalar $k \in \mathbb{R}$:

$$
\begin{aligned}
(\mathbf{A} + \mathbf{B})_{ij} &= a_{ij} + b_{ij} \\
(k\mathbf{A})_{ij} &= k \cdot a_{ij}
\end{aligned}
$$

Matrix addition is commutative ($\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$) and
associative.

### 1.2 Matrix Multiplication

**Definition.** If $\mathbf{A} \in M_{m \times p}(\mathbb{R})$ and
$\mathbf{B} \in M_{p \times n}(\mathbb{R})$, the product
$\mathbf{AB} \in M_{m \times n}(\mathbb{R})$ is defined by:

$$\boxed{(\mathbf{AB})_{ij} = \sum_{k=1}^{p} a_{ik}\, b_{kj}}$$

Matrix multiplication is associative but **not commutative** in general:
$\mathbf{AB} \neq \mathbf{BA}$.

The $n \times n$ identity matrix $\mathbf{I}_n$ satisfies
$\mathbf{A}\mathbf{I}_n = \mathbf{I}_n\mathbf{A} = \mathbf{A}$ for any
$\mathbf{A} \in M_{m \times n}(\mathbb{R})$.

:::warning warning "apply $\mathbf{B}$ first, then $\mathbf{A}$." When composing transformations,
the rightmost matrix is applied first. :::

<hr />

## 2. Determinants

### 2.1 The $2 \times 2$ Determinant

**Definition.** For $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\boxed{\det(\mathbf{A}) = ad - bc}$$

### 2.2 The $3 \times 3$ Determinant

**Definition.** For
$\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}$,
the determinant is computed by _cofactor expansion_ along any row or column:

$$\boxed{\det(\mathbf{A}) = a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}}$$

The signs alternate $+$, $-$, $+$ along the first row (following the checkerboard pattern).

### 2.3 Properties of Determinants

For $n \times n$ matrices $\mathbf{A}, \mathbf{B}$ and scalar $k$:

1. $\det(\mathbf{I}_n) = 1$
2. $\det(\mathbf{A}^T) = \det(\mathbf{A})$
3. $\det(k\mathbf{A}) = k^n \det(\mathbf{A})$
4. Swapping two rows (or columns) multiplies the determinant by $-1$
5. A matrix with a zero row (or column) has $\det = 0$
6. $\det(\mathbf{A}) = 0$ if and only if $\mathbf{A}$ is _singular_ (non-invertible)

### Proof of $\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})$ (for $2\times2$ matrices)

Let $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ and
$\mathbf{B} = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$.

$$\mathbf{AB} = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$$

$$
\begin{aligned}
\det(\mathbf{AB}) &= (ae + bg)(cf + dh) - (af + bh)(ce + dg) \\
&= acef + adeh + bcfg + bdgh - acef - adfg - bceh - bdgh \\
&= adeh + bcfg - adfg - bceh \\
&= ad(eh - fg) - bc(eh - fg) \\
&= (ad - bc)(eh - fg) \\
&= \det(\mathbf{A}) \cdot \det(\mathbf{B}) \quad \square
\end{aligned}
$$

**Intuition.** The determinant measures how a matrix scales area (in 2D) or volume (in 3D).
Composing two transformations multiplies their area/volume scaling factors, which is why
determinants multiply.

<hr />

## 3. Inverse Matrices

**Definition.** The _inverse_ of a square matrix $\mathbf{A}$, written $\mathbf{A}^{-1}$, is the
unique matrix satisfying:

$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$$

An inverse exists if and only if $\det(\mathbf{A}) \neq 0$. Such a matrix is called _non-singular_.

### 3.1 Inverse of a $2 \times 2$ Matrix

For $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with
$\det(\mathbf{A}) = ad - bc \neq 0$:

$$\boxed{\mathbf{A}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}}$$

### 3.2 The Adjugate Method ($3 \times 3$)

For a $3 \times 3$ matrix $\mathbf{A}$:

$$\boxed{\mathbf{A}^{-1} = \frac◆LB◆1◆RB◆◆LB◆\det(\mathbf{A})◆RB◆\operatorname{adj}(\mathbf{A})}$$

where the _adjugate_ (or _adjoint_) matrix $\operatorname{adj}(\mathbf{A})$ is the transpose of the
_cofactor matrix_.

**Definition.** The _cofactor_ $C_{ij}$ of entry $a_{ij}$ is $(-1)^{i+j}$ times the determinant of
the submatrix obtained by deleting row $i$ and column $j$. The _cofactor matrix_ has entries
$C_{ij}$, and $\operatorname{adj}(\mathbf{A}) = (C_{ij})^T$.

### Proof that the inverse is unique

Suppose $\mathbf{B}$ and $\mathbf{C}$ are both inverses of $\mathbf{A}$. Then:

$$\mathbf{B} = \mathbf{B}\mathbf{I} = \mathbf{B}(\mathbf{AC}) = (\mathbf{BA})\mathbf{C} = \mathbf{IC} = \mathbf{C} \quad \square$$

:::tip To verify your inverse, always check that $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$. This
catches sign errors and arithmetic mistakes immediately. :::

<details>
<summary>Worked Example: $3\times3$ inverse</summary>

Find $\mathbf{A}^{-1}$ where
$\mathbf{A} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$.

$\det(\mathbf{A}) = 1\begin{vmatrix} 1 & 3 \\ 0 & 1 \end{vmatrix} - 2\begin{vmatrix} 0 & 3 \\ 1 & 1 \end{vmatrix} + 0 = 1(1) - 2(-3) = 7$.

Cofactors:

$$
\begin{aligned}
C_{11} &= +\begin{vmatrix} 1 & 3 \\ 0 & 1 \end{vmatrix} = 1, \quad C_{12} &= -\begin{vmatrix} 0 & 3 \\ 1 & 1 \end{vmatrix} = 3, \quad C_{13} &= +\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = -1 \\
C_{21} &= -\begin{vmatrix} 2 & 0 \\ 0 & 1 \end{vmatrix} = -2, \quad C_{22} &= +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1, \quad C_{23} &= -\begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = 2 \\
C_{31} &= +\begin{vmatrix} 2 & 0 \\ 1 & 3 \end{vmatrix} = 6, \quad C_{32} &= -\begin{vmatrix} 1 & 0 \\ 0 & 3 \end{vmatrix} = -3, \quad C_{33} &= +\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1
\end{aligned}
$$

$$\operatorname{adj}(\mathbf{A}) = \begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$$

$$\mathbf{A}^{-1} = \frac{1}{7}\begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$$

</details>

<hr />

## 4. Solving Systems of Linear Equations

A system of $n$ linear equations in $n$ unknowns can be written as
$\mathbf{A}\mathbf{x} = \mathbf{b}$ where $\mathbf{A}$ is the coefficient matrix, $\mathbf{x}$ is
the column vector of unknowns, and $\mathbf{b}$ is the column vector of constants.

If $\mathbf{A}$ is non-singular, the unique solution is:

$$\boxed{\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}}$$

### 4.1 Geometric Interpretation (2D)

For a $2 \times 2$ system:

- $\det(\mathbf{A}) \neq 0$: the two lines intersect at a unique point.
- $\det(\mathbf{A}) = 0$ and the equations are consistent: the lines are coincident (infinitely many
  solutions).
- $\det(\mathbf{A}) = 0$ and the equations are inconsistent: the lines are parallel (no solutions).

### 4.2 Cramer's Rule

For a system $\mathbf{A}\mathbf{x} = \mathbf{b}$ where $\det(\mathbf{A}) \neq 0$:

$$x_i = \frac◆LB◆\det(\mathbf{A}_i)◆RB◆◆LB◆\det(\mathbf{A})◆RB◆$$

where $\mathbf{A}_i$ is $\mathbf{A}$ with column $i$ replaced by $\mathbf{b}$.

<details>
<summary>Worked Example: Solving a $3\times3$ system</summary>

Solve: $$\begin{cases} x + 2y = 4 \\ y + 3z = 5 \\ x + z = 2 \end{cases}$$

In matrix form:
$\begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \begin{pmatrix} 4 \\ 5 \\ 2 \end{pmatrix}$.

Using the inverse from the previous example:

$$\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \frac{1}{7}\begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}\begin{pmatrix} 4 \\ 5 \\ 2 \end{pmatrix} = \frac{1}{7}\begin{pmatrix} 4 - 10 + 12 \\ 12 + 5 - 6 \\ -4 + 10 + 2 \end{pmatrix} = \frac{1}{7}\begin{pmatrix} 6 \\ 11 \\ 8 \end{pmatrix} = \begin{pmatrix} 6/7 \\ 11/7 \\ 8/7 \end{pmatrix}$$

</details>

<hr />

## 5. Matrix Transformations in 2D

A $2 \times 2$ matrix $\mathbf{T}$ represents a linear transformation of $\mathbb{R}^2$: the point
$(x, y)$ is mapped to $(x', y')$ where
$\begin{pmatrix} x' \\ y' \end{pmatrix} = \mathbf{T}\begin{pmatrix} x \\ y \end{pmatrix}$.

### 5.1 Reflection

**Reflection in the $x$-axis:** $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$

**Reflection in the $y$-axis:** $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$

**Reflection in the line $y = x$:** $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$

**Reflection in the line $y = \tan\theta\, x$:**

$$\boxed{\mathbf{R} = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}}$$

### Proof of the reflection matrix

The reflection of a vector in a line through the origin making angle $\theta$ with the $x$-axis can
be decomposed: first rotate by $-\theta$ to align the mirror with the $x$-axis, reflect in the
$x$-axis, then rotate back by $\theta$.

$$\mathbf{R} = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$$

$$= \begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}\begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}$$

$$= \begin{pmatrix} \cos^2\theta - \sin^2\theta & \cos\theta\sin\theta + \sin\theta\cos\theta \\ \sin\theta\cos\theta + \cos\theta\sin\theta & \sin^2\theta - \cos^2\theta \end{pmatrix} = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix} \quad \square$$

### 5.2 Rotation

**Rotation anticlockwise by angle $\theta$ about the origin:**

$$\boxed{\mathbf{R}_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}}$$

Note: $\det(\mathbf{R}_\theta) = \cos^2\theta + \sin^2\theta = 1$.

### 5.3 Enlargement

**Enlargement by scale factor $k$ about the origin:** $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$

$\det = k^2$, confirming the area is scaled by $k^2$.

### 5.4 Shear

**Shear parallel to the $x$-axis by factor $k$:** $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$

**Shear parallel to the $y$-axis by factor $k$:** $\begin{pmatrix} 1 & 0 \\ k & 1 \end{pmatrix}$

Note: $\det = 1$ for shears, so area is preserved.

### 5.5 Combining Transformations

If transformation $\mathbf{A}$ is followed by transformation $\mathbf{B}$, the combined
transformation is represented by $\mathbf{BA}$ (rightmost applied first).

:::warning Order matters. A rotation followed by a reflection generally produces a different result
from a reflection followed by a rotation. The combined matrix is $\mathbf{BA}$ (not $\mathbf{AB}$)
when $\mathbf{A}$ is applied first. :::

:::tip To find the matrix of a combined transformation, multiply the matrices in reverse order of
application. If the question says "reflect then rotate," compute
$\mathbf{R}_{\mathrm{rot}} \times \mathbf{R}_{\mathrm{ref}}$. :::

<details>
<summary>Worked Example: Combined transformation</summary>

Find the matrix representing a rotation of $90^\circ$ anticlockwise about the origin followed by a
reflection in the line $y = x$.

Rotation by $90^\circ$: $\mathbf{R} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$

Reflection in $y = x$: $\mathbf{S} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$

Combined (reflection applied after rotation):
$\mathbf{S}\mathbf{R} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$

This is a reflection in the $x$-axis. $\det = -1$, consistent with an orientation-reversing
transformation.

</details>

<hr />

## 6. Matrix Transformations in 3D

:::info 3D transformations are required by AQA and appear on CIE P1. Edexcel and OCR focus primarily
on 2D but may include basic $3\times3$ determinant and inverse calculations. :::

### 6.1 Rotations in 3D

**Rotation about the $x$-axis by angle $\theta$:**

$$\mathbf{R}_x = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos\theta & -\sin\theta \\ 0 & \sin\theta & \cos\theta \end{pmatrix}$$

**Rotation about the $y$-axis by angle $\theta$:**

$$\mathbf{R}_y = \begin{pmatrix} \cos\theta & 0 & \sin\theta \\ 0 & 1 & 0 \\ -\sin\theta & 0 & \cos\theta \end{pmatrix}$$

**Rotation about the $z$-axis by angle $\theta$:**

$$\mathbf{R}_z = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

Each has $\det = 1$ and represents a rigid motion preserving distances and orientation.

### 6.2 Reflections in 3D

**Reflection in the plane $x = 0$ (the $yz$-plane):**
$\begin{pmatrix} -1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

**Reflection in the plane $y = 0$ (the $xz$-plane):**
$\begin{pmatrix} 1 & 0 & 0 \\ 0 & -1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

**Reflection in the plane $z = 0$ (the $xy$-plane):**
$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & -1 \end{pmatrix}$

Each has $\det = -1$, confirming orientation reversal.

<hr />

## 7. Eigenvalues and Eigenvectors

:::info info require this topic at A Level. :::

**Definition.** Let $\mathbf{A}$ be an $n \times n$ matrix. A scalar $\lambda$ is an _eigenvalue_ of
$\mathbf{A}$ if there exists a non-zero vector $\mathbf{v}$ such that:

$$\boxed{\mathbf{A}\mathbf{v} = \lambda\mathbf{v}}$$

The vector $\mathbf{v}$ is called an _eigenvector_ corresponding to $\lambda$.

### 7.1 The Characteristic Equation

$\mathbf{A}\mathbf{v} = \lambda\mathbf{v} \iff (\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$.

For a non-trivial solution ($\mathbf{v} \neq \mathbf{0}$), we require
$\det(\mathbf{A} - \lambda\mathbf{I}) = 0$.

$$\boxed{\det(\mathbf{A} - \lambda\mathbf{I}) = 0}$$

This is the _characteristic equation_ of $\mathbf{A}$. Its roots are the eigenvalues.

### 7.2 Finding Eigenvectors

For each eigenvalue $\lambda$, solve $(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}$ by
row reduction.

### 7.3 Diagonalisation

**Definition.** A matrix $\mathbf{A}$ is _diagonalisable_ if there exists an invertible matrix
$\mathbf{P}$ and a diagonal matrix $\mathbf{D}$ such that:

$$\boxed{\mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1}}$$

The columns of $\mathbf{P}$ are the eigenvectors of $\mathbf{A}$, and the diagonal entries of
$\mathbf{D}$ are the corresponding eigenvalues.

A matrix is diagonalisable if and only if it has $n$ linearly independent eigenvectors (always true
for $n$ distinct eigenvalues).

**Intuition.** Diagonalisation changes to a coordinate system where the transformation acts
independently on each axis (stretching by eigenvalues). In this basis, the matrix takes its simplest
possible form.

<details>
<summary>Worked Example: Eigenvalues and eigenvectors</summary>

Find the eigenvalues and eigenvectors of
$\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

Characteristic equation:
$\det\!\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = 0$

$$(4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0$$

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.

**For $\lambda_1 = 5$:**
$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x + y = 0 \implies y = x$.

Eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (or any non-zero scalar
multiple).

**For $\lambda_2 = 2$:**
$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 2x + y = 0 \implies y = -2x$.

Eigenvector: $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

Diagonalisation: $\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}$,
$\mathbf{D} = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$, giving
$\mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1}$.

</details>

<hr />

## 8. Summary of Key Results

$$\boxed{\det(\mathbf{AB}) = \det(\mathbf{A})\det(\mathbf{B})}$$

$$\boxed{\mathbf{A}^{-1} = \frac◆LB◆1◆RB◆◆LB◆\det(\mathbf{A})◆RB◆\operatorname{adj}(\mathbf{A}) \quad \mathrm{when } \det(\mathbf{A}) \neq 0}$$

$$\boxed{\mathrm{Rotation by } \theta: \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}}$$

$$\boxed{\mathrm{Reflection in } y = (\tan\theta)x: \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}}$$

$$\boxed{\det(\mathbf{A} - \lambda\mathbf{I}) = 0 \implies \mathrm{eigenvalues of } \mathbf{A}}$$

<hr />

## Problems

**Problem 1.** Given $\mathbf{A} = \begin{pmatrix} 3 & -1 \\ 2 & 4 \end{pmatrix}$ and
$\mathbf{B} = \begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix}$, compute $\mathbf{AB} - \mathbf{BA}$.

<details>
<summary>Hint</summary>

Compute both products separately and subtract. They will not be equal.

</details>

<details>
<summary>Answer</summary>

$$\mathbf{AB} = \begin{pmatrix} 3 & -1 \\ 2 & 4 \end{pmatrix}\begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix} = \begin{pmatrix} 5 & 15 \\ -6 & 10 \end{pmatrix}$$

$$\mathbf{BA} = \begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix}\begin{pmatrix} 3 & -1 \\ 2 & 4 \end{pmatrix} = \begin{pmatrix} 13 & 19 \\ -6 & 2 \end{pmatrix}$$

$$\mathbf{AB} - \mathbf{BA} = \begin{pmatrix} 5 & 15 \\ -6 & 10 \end{pmatrix} - \begin{pmatrix} 13 & 19 \\ -6 & 2 \end{pmatrix} = \begin{pmatrix} -8 & -4 \\ 0 & 8 \end{pmatrix}$$

This confirms $\mathbf{AB} \neq \mathbf{BA}$.

</details>

<hr />

**Problem 2.** Find the determinant and inverse of
$\mathbf{A} = \begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 2 \\ 1 & 0 & 1 \end{pmatrix}$.

<details>
<summary>Hint</summary>

Expand the determinant along the first row. Then compute cofactors for the adjugate.

</details>

<details>
<summary>Answer</summary>

$\det(\mathbf{A}) = 2\begin{vmatrix} -1 & 2 \\ 0 & 1 \end{vmatrix} - 1\begin{vmatrix} 0 & 2 \\ 1 & 1 \end{vmatrix} + 3\begin{vmatrix} 0 & -1 \\ 1 & 0 \end{vmatrix}$

$= 2(-1) - 1(-2) + 3(1) = -2 + 2 + 3 = 3$

Cofactors:

$$
\begin{aligned}
C_{11} = +(-1) = -1, \quad C_{12} = -(0 \cdot 1 - 2 \cdot 1) = 2, \quad C_{13} = +(0 \cdot 0 - (-1) \cdot 1) = 1 \\
C_{21} = -(1 \cdot 1 - 3 \cdot 0) = -1, \quad C_{22} = +(2 \cdot 1 - 3 \cdot 1) = -1, \quad C_{23} = -(2 \cdot 0 - 1 \cdot 1) = 1 \\
C_{31} = +(2 + 2) = 4, \quad C_{32} = -(4 - 0) = -4, \quad C_{33} = +(-2 - 0) = -2
\end{aligned}
$$

$$\operatorname{adj}(\mathbf{A}) = \begin{pmatrix} -1 & -1 & 4 \\ 2 & -1 & -4 \\ 1 & 1 & -2 \end{pmatrix}$$

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & -1 & 4 \\ 2 & -1 & -4 \\ 1 & 1 & -2 \end{pmatrix}$$

</details>

<hr />

**Problem 3.** Find the matrix representing a reflection in the line $y = \sqrt{3}\,x$, and verify
that $\mathbf{M}^2 = \mathbf{I}$.

<details>
<summary>Hint</summary>

The line makes angle $\theta$ with the $x$-axis where $\tan\theta = \sqrt{3}$. A reflection applied
twice is the identity.

</details>

<details>
<summary>Answer</summary>

$\tan\theta = \sqrt{3} \implies \theta = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$.

$$\mathbf{M} = \begin{pmatrix} \cos\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ & \sin\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ \\ \sin\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ & -\cos\frac◆LB◆2\pi◆RB◆◆LB◆3◆RB◆ \end{pmatrix} = \begin{pmatrix} -\frac{1}{2} & \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ \\ \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ & \frac{1}{2} \end{pmatrix}$$

Verification:
$$\mathbf{M}^2 = \begin{pmatrix} -\frac{1}{2} & \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ \\ \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ & \frac{1}{2} \end{pmatrix}\begin{pmatrix} -\frac{1}{2} & \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ \\ \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ & \frac{1}{2} \end{pmatrix} = \begin{pmatrix} \frac{1}{4} + \frac{3}{4} & -\frac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆ \\ -\frac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆ + \frac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆ & \frac{3}{4} + \frac{1}{4} \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \mathbf{I} \quad \square$$

</details>

<hr />

**Problem 4.** The triangle with vertices $(0, 0)$, $(2, 0)$, $(0, 1)$ is transformed by the matrix
$\mathbf{T} = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$. Find the coordinates of the vertices of
the image, and verify that the area scales by $|\det(\mathbf{T})|$.

<details>
<summary>Hint</summary>

Apply $\mathbf{T}$ to each vertex. The original triangle has area 1.

</details>

<details>
<summary>Answer</summary>

$(0, 0) \mapsto (0, 0)$, $(2, 0) \mapsto (6, 0)$, $(0, 1) \mapsto (1, 2)$.

Image vertices: $(0, 0)$, $(6, 0)$, $(1, 2)$.

Original area: $\dfrac{1}{2} \times 2 \times 1 = 1$.

Image area using the determinant formula:
$\dfrac{1}{2}\left|6 \cdot 2 - 0 \cdot 1\right| = \dfrac{1}{2} \times 12 = 6$.

$\det(\mathbf{T}) = 6$, and $|\det(\mathbf{T})| \times \mathrm{original area} = 6 \times 1 = 6$. ✓

</details>

<hr />

**Problem 5.** Solve the system of equations using matrices:

$$\begin{cases} 2x + y - z = 3 \\ x - y + 2z = 1 \\ 3x + 2y + z = 10 \end{cases}$$

<details>
<summary>Hint</summary>

Write as $\mathbf{A}\mathbf{x} = \mathbf{b}$ and compute $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$.

</details>

<details>
<summary>Answer</summary>

$\mathbf{A} = \begin{pmatrix} 2 & 1 & -1 \\ 1 & -1 & 2 \\ 3 & 2 & 1 \end{pmatrix}$,
$\mathbf{b} = \begin{pmatrix} 3 \\ 1 \\ 10 \end{pmatrix}$.

$\det(\mathbf{A}) = 2\begin{vmatrix} -1 & 2 \\ 2 & 1 \end{vmatrix} - 1\begin{vmatrix} 1 & 2 \\ 3 & 1 \end{vmatrix} + (-1)\begin{vmatrix} 1 & -1 \\ 3 & 2 \end{vmatrix}$

$= 2(-5) - 1(-5) - 1(5) = -10 + 5 - 5 = -10$

Cofactors: $C_{11} = -5$, $C_{12} = 5$, $C_{13} = 5$, $C_{21} = -3$, $C_{22} = 5$, $C_{23} = -1$,
$C_{31} = 1$, $C_{32} = -5$, $C_{33} = -3$.

$$\mathbf{A}^{-1} = -\frac{1}{10}\begin{pmatrix} -5 & -3 & 1 \\ 5 & 5 & -5 \\ 5 & -1 & -3 \end{pmatrix}$$

$$\mathbf{x} = -\frac{1}{10}\begin{pmatrix} -5 & -3 & 1 \\ 5 & 5 & -5 \\ 5 & -1 & -3 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \\ 10 \end{pmatrix} = -\frac{1}{10}\begin{pmatrix} -15 - 3 + 10 \\ 15 + 5 - 50 \\ 15 - 1 - 30 \end{pmatrix} = -\frac{1}{10}\begin{pmatrix} -8 \\ -30 \\ -16 \end{pmatrix} = \begin{pmatrix} 4/5 \\ 3 \\ 8/5 \end{pmatrix}$$

So $x = \dfrac{4}{5}$, $y = 3$, $z = \dfrac{8}{5}$.

</details>

<hr />

**Problem 6.** Find the single $2 \times 2$ matrix that represents an enlargement by scale factor 2
about the origin followed by a rotation of $90^\circ$ anticlockwise. Show that this is equivalent to
a single rotation of $90^\circ$ combined with an enlargement by factor 2.

<details>
<summary>Hint</summary>

The enlargement matrix is $2\mathbf{I}$ and the rotation is $\mathbf{R}_{\pi/2}$. Since
$2\mathbf{I}$ commutes with all matrices, the order doesn't matter.

</details>

<details>
<summary>Answer</summary>

Enlargement by 2: $\mathbf{E} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.

Rotation by $90^\circ$: $\mathbf{R} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

Enlargement then rotation:
$\mathbf{R}\mathbf{E} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$.

Rotation then enlargement:
$\mathbf{E}\mathbf{R} = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$.

Both give the same result:
$\begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix} = 2\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

This is a rotation by $90^\circ$ combined with an enlargement by factor 2, and the order is
irrelevant because scalar multiples of the identity commute with all matrices.

</details>

<hr />

**Problem 7.** AQA only. Find the eigenvalues and corresponding eigenvectors of
$\mathbf{A} = \begin{pmatrix} 5 & 4 \\ 1 & 2 \end{pmatrix}$, and write down a matrix $\mathbf{P}$
and diagonal matrix $\mathbf{D}$ such that $\mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1}$.

<details>
<summary>Hint</summary>

Solve $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ for $\lambda$, then find eigenvectors.

</details>

<details>
<summary>Answer</summary>

Characteristic equation:
$\det\begin{pmatrix} 5 - \lambda & 4 \\ 1 & 2 - \lambda \end{pmatrix} = (5 - \lambda)(2 - \lambda) - 4 = \lambda^2 - 7\lambda + 6 = (\lambda - 1)(\lambda - 6) = 0$.

Eigenvalues: $\lambda_1 = 6$, $\lambda_2 = 1$.

**For $\lambda_1 = 6$:**
$\begin{pmatrix} -1 & 4 \\ 1 & -4 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0} \implies -x + 4y = 0 \implies x = 4y$.

Eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 4 \\ 1 \end{pmatrix}$.

**For $\lambda_2 = 1$:**
$\begin{pmatrix} 4 & 4 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0} \implies x + y = 0 \implies x = -y$.

Eigenvector: $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

$$\mathbf{P} = \begin{pmatrix} 4 & 1 \\ 1 & -1 \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} 6 & 0 \\ 0 & 1 \end{pmatrix}$$

</details>

<hr />

**Problem 8.** AQA only. The matrix $\mathbf{A} = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}$ has
eigenvalues 1 and 2. Use this to compute $\mathbf{A}^5$ without multiplying matrices five times.

<details>
<summary>Hint</summary>

Diagonalise $\mathbf{A} = \mathbf{P}\mathbf{D}\mathbf{P}^{-1}$, then
$\mathbf{A}^5 = \mathbf{P}\mathbf{D}^5\mathbf{P}^{-1}$.

</details>

<details>
<summary>Answer</summary>

For $\lambda = 1$:
$\begin{pmatrix} 2 & -2 \\ 1 & -1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x = y$. Eigenvector
$\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda = 2$:
$\begin{pmatrix} 1 & -2 \\ 1 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x = 2y$. Eigenvector
$\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

$\mathbf{P} = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}$,
$\mathbf{D} = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$.

$\det(\mathbf{P}) = 1 - 2 = -1$, so
$\mathbf{P}^{-1} = \begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix}$.

$\mathbf{D}^5 = \begin{pmatrix} 1 & 0 \\ 0 & 32 \end{pmatrix}$.

$$\mathbf{A}^5 = \mathbf{P}\mathbf{D}^5\mathbf{P}^{-1} = \begin{pmatrix} 1 & 2 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 32 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 1 & 64 \\ 1 & 32 \end{pmatrix}\begin{pmatrix} -1 & 2 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 63 & -62 \\ 31 & -30 \end{pmatrix}$$

</details>

<hr />

**Problem 9.** Find the $3 \times 3$ matrix representing a rotation of $90^\circ$ anticlockwise
about the $z$-axis. Verify that this matrix has determinant 1 and that it maps
$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ to $\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.

<details>
<summary>Hint</summary>

Use the standard formula for $\mathbf{R}_z$ with $\theta = \pi/2$.

</details>

<details>
<summary>Answer</summary>

$$\mathbf{R}_z = \begin{pmatrix} \cos\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & -\sin\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & 0 \\ \sin\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & \cos\frac◆LB◆\pi◆RB◆◆LB◆2◆RB◆ & 0 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 0 & -1 & 0 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

$\det(\mathbf{R}_z) = 0 \cdot (0 - 0) - (-1)(1 - 0) + 0 = 1$. ✓

$$\mathbf{R}_z\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix} = \begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix} \quad \checkmark$$

The $x$-axis is correctly rotated to the $y$-axis by a $90^\circ$ anticlockwise rotation about $z$.

</details>

<hr />

**Problem 10.** Prove that if $\mathbf{A}$ and $\mathbf{B}$ are non-singular $n \times n$ matrices,
then $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$.

<details>
<summary>Hint</summary>

Show that $\mathbf{B}^{-1}\mathbf{A}^{-1}$ satisfies the definition of the inverse of $\mathbf{AB}$,
and invoke uniqueness.

</details>

<details>
<summary>Answer</summary>

We need to show that $(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1}) = \mathbf{I}$ and
$(\mathbf{B}^{-1}\mathbf{A}^{-1})(\mathbf{AB}) = \mathbf{I}$.

$$(\mathbf{AB})(\mathbf{B}^{-1}\mathbf{A}^{-1}) = \mathbf{A}(\mathbf{B}\mathbf{B}^{-1})\mathbf{A}^{-1} = \mathbf{A}\mathbf{I}\mathbf{A}^{-1} = \mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$$

$$(\mathbf{B}^{-1}\mathbf{A}^{-1})(\mathbf{AB}) = \mathbf{B}^{-1}(\mathbf{A}^{-1}\mathbf{A})\mathbf{B} = \mathbf{B}^{-1}\mathbf{I}\mathbf{B} = \mathbf{B}^{-1}\mathbf{B} = \mathbf{I}$$

Since the inverse is unique, $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$. $\square$

**Intuition.** The order reverses, just like putting on and taking off socks and shoes. To undo "A
then B," you must undo B first, then undo A.

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: Diagonalisation of a 3×3 matrix

**Problem.** Diagonalise $\mathbf{A} = \begin{pmatrix}2&1&0\\0&2&0\\0&1&3\end{pmatrix}$.

**Solution.** Find eigenvalues: $\det(\mathbf{A}-\lambda\mathbf{I}) = 0$.

$$\det\begin{pmatrix}2-\lambda&1&0\\0&2-\lambda&0\\0&1&3-\lambda\end{pmatrix} = (2-\lambda)^2(3-\lambda) = 0$$

$\lambda_1 = 2$ (repeated), $\lambda_2 = 3$.

For $\lambda = 2$: $(\mathbf{A}-2\mathbf{I})\mathbf{v} = \mathbf{0}$ gives
$\begin{pmatrix}0&1&0\\0&0&0\\0&1&1\end{pmatrix}\mathbf{v} = \mathbf{0}$, so $v_2 = 0$ and
$v_3 = 0$, with $v_1$ free. Only one eigenvector: $(1,0,0)$. Since the geometric multiplicity (1) is
less than the algebraic multiplicity (2), $\mathbf{A}$ is **not diagonalisable**.

### Example 8.2: Finding $\mathbf{A}^n$ using Cayley--Hamilton

**Problem.** For $\mathbf{A} = \begin{pmatrix}1&2\\0&3\end{pmatrix}$, find $\mathbf{A}^5$.

**Solution.** By Cayley--Hamilton, $\mathbf{A}^2 - 4\mathbf{A} + 3\mathbf{I} = \mathbf{O}$, so
$\mathbf{A}^2 = 4\mathbf{A} - 3\mathbf{I}$.

$\mathbf{A}^3 = \mathbf{A}(4\mathbf{A}-3\mathbf{I}) = 4(4\mathbf{A}-3\mathbf{I}) - 3\mathbf{A} = 13\mathbf{A} - 12\mathbf{I}$.

$\mathbf{A}^4 = 13(4\mathbf{A}-3\mathbf{I}) - 12\mathbf{A} = 40\mathbf{A} - 39\mathbf{I}$.

$\mathbf{A}^5 = 40(4\mathbf{A}-3\mathbf{I}) - 39\mathbf{A} = 121\mathbf{A} - 120\mathbf{I}$.

$= 121\begin{pmatrix}1&2\\0&3\end{pmatrix} - 120\begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}121&242\\0&363\end{pmatrix} - \begin{pmatrix}120&0\\0&120\end{pmatrix} = \boxed{\begin{pmatrix}1&242\\0&243\end{pmatrix}}$

### Example 8.3: Invariant points and invariant lines

**Problem.** $\mathbf{A} = \begin{pmatrix}3&1\\0&2\end{pmatrix}$. Find all invariant points and
invariant lines of the transformation $\mathbf{x} \mapsto \mathbf{Ax}$.

**Solution.** **Invariant points:**
$\mathbf{Ax} = \mathbf{x} \implies (\mathbf{A}-\mathbf{I})\mathbf{x} = \mathbf{0}$.

$$\begin{pmatrix}2&1\\0&1\end{pmatrix}\mathbf{x} = \mathbf{0} \implies x_2 = 0, \; 2x_1 = 0$$

Only the origin $(0,0)$ is an invariant point.

**Invariant lines through the origin:** These are the eigenspaces. Eigenvalues:
$(3-\lambda)(2-\lambda) = 0$, so $\lambda = 3$ and $\lambda = 2$.

For $\lambda = 3$: $\begin{pmatrix}0&1\\0&-1\end{pmatrix}\mathbf{v} = \mathbf{0} \implies v_2 = 0$.
Line: $y = 0$ (the $x$-axis).

For $\lambda = 2$:
$\begin{pmatrix}1&1\\0&0\end{pmatrix}\mathbf{v} = \mathbf{0} \implies v_1 + v_2 = 0$. Line:
$y = -x$.

### Example 8.4: Determinant as a scaling factor

**Problem.** The matrix $\mathbf{T} = \begin{pmatrix}2&1\\-1&3\end{pmatrix}$ represents a
transformation. A triangle has vertices $(0,0)$, $(1,0)$, $(0,1)$. Find the area of its image.

**Solution.** $\det(\mathbf{T}) = 6 - (-1) = 7$.

Original area $= \dfrac{1}{2}$. Image area
$= |\det(\mathbf{T})| \times \text{original area} = 7 \times \dfrac{1}{2} = \boxed{3.5}$.

### Example 8.5: Commutator and non-commuting matrices

**Problem.** For $\mathbf{A} = \begin{pmatrix}0&1\\0&0\end{pmatrix}$ and
$\mathbf{B} = \begin{pmatrix}0&0\\1&0\end{pmatrix}$, compute the commutator
$[\mathbf{A}, \mathbf{B}] = \mathbf{AB} - \mathbf{BA}$.

**Solution.**
$\mathbf{AB} = \begin{pmatrix}0&1\\0&0\end{pmatrix}\begin{pmatrix}0&0\\1&0\end{pmatrix} = \begin{pmatrix}1&0\\0&0\end{pmatrix}$.

$\mathbf{BA} = \begin{pmatrix}0&0\\1&0\end{pmatrix}\begin{pmatrix}0&1\\0&0\end{pmatrix} = \begin{pmatrix}0&0\\0&1\end{pmatrix}$.

$\boxed{[\mathbf{A},\mathbf{B}] = \begin{pmatrix}1&0\\0&-1\end{pmatrix}}$

Since $[\mathbf{A},\mathbf{B}] \neq \mathbf{O}$, $\mathbf{A}$ and $\mathbf{B}$ do not commute.

### Example 8.6: Matrix representing successive transformations

**Problem.** Transformation $R$ is a reflection in the line $y = x\sqrt{3}$. Transformation $S$ is a
rotation by $90°$ anticlockwise about the origin. Find the matrix representing $RS$.

**Solution.** The line $y = x\sqrt{3}$ makes angle $60°$ with the $x$-axis.

$R = \begin{pmatrix}\cos 120°&\sin 120°\\\sin 120°&-\cos 120°\end{pmatrix} = \begin{pmatrix}-\frac{1}{2}&\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\\\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆&\frac{1}{2}\end{pmatrix}$.

$S = \begin{pmatrix}0&-1\\1&0\end{pmatrix}$.

$RS = \begin{pmatrix}-\frac{1}{2}&\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\\\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆&\frac{1}{2}\end{pmatrix}\begin{pmatrix}0&-1\\1&0\end{pmatrix} = \begin{pmatrix}\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆&\frac{1}{2}\\\frac{1}{2}&-\frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆\end{pmatrix}$.

$\det(RS) = -\dfrac{3}{4} - \dfrac{1}{4} = -1$ and $\text{tr}(RS) = 0$, confirming this is a
reflection.

### Example 8.7: Finding the inverse of a 3×3 matrix

**Problem.** Find $\mathbf{A}^{-1}$ where
$\mathbf{A} = \begin{pmatrix}1&0&2\\0&1&-1\\1&1&0\end{pmatrix}$.

**Solution.** $\det(\mathbf{A}) = 1(0+1) - 0 + 2(0-1) = 1 - 2 = -1 \neq 0$.

$\mathbf{A}^{-1} = \dfrac{1}{-1}\begin{pmatrix}1&2&-2\\-1&-2&1\\-1&-1&1\end{pmatrix} = \boxed{\begin{pmatrix}-1&-2&2\\1&2&-1\\1&1&-1\end{pmatrix}}$

---

## 9. Common Pitfalls

| Pitfall                                                                     | Correct Approach                                                                 |
| --------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Assuming all matrices are diagonalisable                                    | Check geometric multiplicity equals algebraic multiplicity for each eigenvalue   |
| Forgetting that $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$       | The order reverses                                                               |
| Computing $\det(\mathbf{A}+\mathbf{B}) = \det(\mathbf{A})+\det(\mathbf{B})$ | In general, $\det(\mathbf{A}+\mathbf{B}) \neq \det(\mathbf{A})+\det(\mathbf{B})$ |
| Mixing up row and column operations                                         | Column operations change the determinant differently from row operations         |

---

## 10. Additional Exam-Style Questions

### Question 8

Find the eigenvalues and eigenvectors of $\mathbf{A} = \begin{pmatrix}4&-1\\2&1\end{pmatrix}$. Hence
write down $\mathbf{P}$ and $\mathbf{D}$ such that
$\mathbf{P}^{-1}\mathbf{A}\mathbf{P} = \mathbf{D}$.

<details>
<summary>Solution</summary>

$\det(\mathbf{A}-\lambda\mathbf{I}) = (4-\lambda)(1-\lambda)+2 = \lambda^2-5\lambda+6 = 0$.
$\lambda = 2, 3$.

$\lambda = 2$:
$\begin{pmatrix}2&-1\\2&-1\end{pmatrix}\mathbf{v}=\mathbf{0} \implies 2v_1-v_2=0 \implies \mathbf{v}=(1,2)$.

$\lambda = 3$:
$\begin{pmatrix}1&-1\\2&-2\end{pmatrix}\mathbf{v}=\mathbf{0} \implies v_1=v_2 \implies \mathbf{v}=(1,1)$.

$\mathbf{P} = \begin{pmatrix}1&1\\2&1\end{pmatrix}$,
$\mathbf{D} = \begin{pmatrix}2&0\\0&3\end{pmatrix}$.

</details>

### Question 9

**Prove that** if $\lambda$ is an eigenvalue of $\mathbf{A}$ with eigenvector $\mathbf{v}$, then
$\lambda^2$ is an eigenvalue of $\mathbf{A}^2$ with the same eigenvector.

<details>
<summary>Solution</summary>

$\mathbf{Av} = \lambda\mathbf{v}$.

$\mathbf{A}^2\mathbf{v} = \mathbf{A}(\mathbf{Av}) = \mathbf{A}(\lambda\mathbf{v}) = \lambda(\mathbf{Av}) = \lambda(\lambda\mathbf{v}) = \lambda^2\mathbf{v}$.

Therefore $\lambda^2$ is an eigenvalue of $\mathbf{A}^2$ with eigenvector $\mathbf{v}$.
$\blacksquare$

</details>

### Question 10

The transformation represented by $\mathbf{M} = \begin{pmatrix}a&b\\c&d\end{pmatrix}$ maps the unit
square to a parallelogram of area 6. Given $a+d = 5$ and $ad-bc = 6$, find the eigenvalues of
$\mathbf{M}$.

<details>
<summary>Solution</summary>

The characteristic equation:
$\lambda^2 - (a+d)\lambda + \det(\mathbf{M}) = \lambda^2 - 5\lambda + 6 = 0$.

$(\lambda-2)(\lambda-3) = 0$.

$\boxed{\lambda = 2 \text{ and } \lambda = 3}$

</details>

:::

---

## 11. Connections to Other Topics

### 11.1 Matrices and complex numbers

Complex eigenvalues lead to rotation-scaling transformations. See
[Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

### 11.2 Matrices and vectors

The cross product can be written as a matrix multiplication. See
[Vectors in 3D](/docs/alevel/further-maths/pure-mathematics/further-vectors).

### 11.3 Matrices and further algebra

Cayley--Hamilton connects matrices to polynomial algebra. See
[Further Algebra](/docs/alevel/further-maths/pure-mathematics/further-algebra).

---

## 12. Key Results Summary

| Result               | Formula/Condition                                                           |
| -------------------- | --------------------------------------------------------------------------- | ---------------- | ------------------------------------ |
| Invertibility        | $\mathbf{A}$ is invertible $\iff$ $\det(\mathbf{A}) \neq 0$                 |
| $(\mathbf{AB})^{-1}$ | $\mathbf{B}^{-1}\mathbf{A}^{-1}$                                            |
| $(\mathbf{AB})^T$    | $\mathbf{B}^T\mathbf{A}^T$                                                  |
| $\det(\mathbf{AB})$  | $\det(\mathbf{A})\det(\mathbf{B})$                                          |
| Trace of product     | $\text{tr}(\mathbf{AB}) = \text{tr}(\mathbf{BA})$                           |
| Cayley--Hamilton     | $\mathbf{A}$ satisfies its own characteristic equation                      |
| Diagonalisability    | All eigenvalues must have geometric multiplicity $=$ algebraic multiplicity |
| Area scaling         | $                                                                           | \det(\mathbf{T}) | \times$ original area $=$ image area |

---

## 13. Further Exam-Style Questions

### Question 11

Find the matrix representing a stretch of scale factor 3 parallel to the $y$-axis followed by a
reflection in the $x$-axis.

<details>
<summary>Solution</summary>

Stretch: $S = \begin{pmatrix}1&0\\0&3\end{pmatrix}$. Reflection:
$R = \begin{pmatrix}1&0\\0&-1\end{pmatrix}$.

Combined:
$RS = \begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&0\\0&3\end{pmatrix} = \begin{pmatrix}1&0\\0&-3\end{pmatrix}$.

$\boxed{\begin{pmatrix}1&0\\0&-3\end{pmatrix}}$

</details>

### Question 12

**Prove that** $\det(\mathbf{A}^T) = \det(\mathbf{A})$ for any square matrix $\mathbf{A}$.

<details>
<summary>Solution</summary>

The determinant can be computed by cofactor expansion along any row or column. Expanding
$\det(\mathbf{A})$ along row $i$ and $\det(\mathbf{A}^T)$ along column $i$ (which is row $i$ of
$\mathbf{A}$) gives the same expression, since the cofactors are the same.

Formally: this follows from the permutation definition of the determinant. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 Eigenvalues and the characteristic polynomial

The characteristic polynomial of $\mathbf{A}$ is $p(\lambda) = \det(\mathbf{A}-\lambda\mathbf{I})$.

Properties:

- The sum of eigenvalues equals the trace: $\sum \lambda_i = \mathrm{tr}(\mathbf{A})$
- The product of eigenvalues equals the determinant: $\prod \lambda_i = \det(\mathbf{A})$
- $\mathbf{A}$ is invertible iff no eigenvalue is zero

### 14.2 Jordan normal form

Not all matrices are diagonalisable. The Jordan normal form is a generalisation where the diagonal
matrix $\mathbf{D}$ may have 1s on the superdiagonal (Jordan blocks).

For example, if $\mathbf{A}$ has a repeated eigenvalue $\lambda$ with only one eigenvector:

$$\mathbf{P}^{-1}\mathbf{AP} = \begin{pmatrix}\lambda&1\\0&\lambda\end{pmatrix}$$

### 14.3 Orthogonal diagonalisation

A real symmetric matrix $\mathbf{A}$ can always be diagonalised by an orthogonal matrix:
$\mathbf{A} = \mathbf{Q}\mathbf{D}\mathbf{Q}^T$ where $\mathbf{Q}^T = \mathbf{Q}^{-1}$.

The Spectral Theorem states that $\mathbf{A} = \sum_{i=1}^{n} \lambda_i \mathbf{q}_i\mathbf{q}_i^T$
where $\lambda_i$ are eigenvalues and $\mathbf{q}_i$ are orthonormal eigenvectors.

### 14.4 Matrix norms

The Frobenius norm:
$\|\mathbf{A}\|_F = \sqrt◆LB◆\sum_{i,j} a_{ij}^2◆RB◆ = \sqrt◆LB◆\mathrm{tr}(\mathbf{A}^T\mathbf{A})◆RB◆$.

The spectral norm: $\|\mathbf{A}\|_2 = \sigma_{\max}$ (largest singular value).

---

## 15. Further Exam-Style Questions

### Question 14

Find the eigenvalues and eigenvectors of
$\mathbf{A} = \begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}$.

<details>
<summary>Solution</summary>

$\det(\mathbf{A}-\lambda\mathbf{I}) = (1-\lambda)^3 - 3(1-\lambda) - 2 + 3(1-\lambda) = (1-\lambda)^3 - 3(1-\lambda) + 3(1-\lambda) - 2$.

Wait, let me compute directly.
$\det\begin{pmatrix}1-\lambda&1&1\\1&1-\lambda&1\\1&1&1-\lambda\end{pmatrix}$.

$= (1-\lambda)[(1-\lambda)^2-1] - 1[(1-\lambda)-1] + 1[1-(1-\lambda)]$

$= (1-\lambda)[1-2\lambda+\lambda^2-1] + \lambda + \lambda = (1-\lambda)(\lambda^2-2\lambda) + 2\lambda$

$= (1-\lambda)\lambda(\lambda-2) + 2\lambda = \lambda[(1-\lambda)(\lambda-2)+2] = \lambda[\lambda-2-\lambda^2+2\lambda+2] = \lambda[-\lambda^2+3\lambda] = \lambda^2(3-\lambda)$.

Eigenvalues: $\lambda = 0$ (double) and $\lambda = 3$.

$\lambda = 0$:
$\begin{pmatrix}1&1&1\\1&1&1\\1&1&1\end{pmatrix}\mathbf{v}=\mathbf{0} \implies v_1+v_2+v_3=0$. Two
independent eigenvectors: $(1,-1,0)$ and $(1,0,-1)$.

$\lambda = 3$:
$\begin{pmatrix}-2&1&1\\1&-2&1\\1&1&-2\end{pmatrix}\mathbf{v}=\mathbf{0} \implies v_1=v_2=v_3$.
Eigenvector: $(1,1,1)$.

</details>

### Question 15

**Prove that** similar matrices have the same eigenvalues.

<details>
<summary>Solution</summary>

If $\mathbf{B} = \mathbf{P}^{-1}\mathbf{AP}$, then:

$\det(\mathbf{B}-\lambda\mathbf{I}) = \det(\mathbf{P}^{-1}\mathbf{AP}-\lambda\mathbf{I}) = \det(\mathbf{P}^{-1}(\mathbf{A}-\lambda\mathbf{I})\mathbf{P})$

$= \det(\mathbf{P}^{-1})\det(\mathbf{A}-\lambda\mathbf{I})\det(\mathbf{P}) = \det(\mathbf{A}-\lambda\mathbf{I})$.

Since the characteristic polynomials are identical, the eigenvalues are the same. $\blacksquare$

</details>

---

## 16. Further Advanced Topics

### 16.1 LU decomposition

Any square matrix $\mathbf{A}$ can be decomposed as $\mathbf{A} = \mathbf{L}\mathbf{U}$ where
$\mathbf{L}$ is lower triangular and $\mathbf{U}$ is upper triangular. This is used for efficient
numerical solution of systems $\mathbf{Ax} = \mathbf{b}$.

### 16.2 The Cayley--Hamilton theorem — applications

Since $\mathbf{A}$ satisfies $p(\mathbf{A}) = \mathbf{O}$ where $p$ is the characteristic
polynomial:

- $\mathbf{A}^{-1}$ can be computed from $\mathbf{A}^n$ terms
- $\mathbf{A}^n$ for large $n$ can be reduced using the recurrence

### 16.3 Singular Value Decomposition (SVD)

Any $m \times n$ matrix $\mathbf{A}$ can be written as
$\mathbf{A} = \mathbf{U}\boldsymbol{\Sigma}\mathbf{V}^T$ where $\mathbf{U}$ and $\mathbf{V}$ are
orthogonal and $\boldsymbol{\Sigma}$ is diagonal with non-negative singular values.

### 16.4 Positive definite matrices

A symmetric matrix $\mathbf{A}$ is positive definite if $\mathbf{x}^T\mathbf{A}\mathbf{x} > 0$ for
all $\mathbf{x} \neq \mathbf{0}$.

Equivalent conditions: all eigenvalues positive, all leading principal minors positive.

---

## 17. Further Exam-Style Questions

### Question 16

Find $\det(\mathbf{A})$ where $\mathbf{A} = \begin{pmatrix}1&2&3\\4&5&6\\7&8&0\end{pmatrix}$.

<details>
<summary>Solution</summary>

$\det(\mathbf{A}) = 1(0-48) - 2(0-42) + 3(32-35) = -48 + 84 - 9 = \boxed{27}$.

</details>

### Question 17

**Prove that** the trace of a matrix equals the sum of its eigenvalues (with multiplicity).

<details>
<summary>Solution</summary>

The characteristic polynomial is
$p(\lambda) = (-1)^n[\lambda^n - (\text{tr}\,\mathbf{A})\lambda^{n-1} + \cdots + (-1)^n\det(\mathbf{A})]$.

By Vieta's formulae, the coefficient of $\lambda^{n-1}$ equals
$-(\lambda_1 + \lambda_2 + \cdots + \lambda_n)$.

Therefore $\text{tr}\,\mathbf{A} = \lambda_1 + \lambda_2 + \cdots + \lambda_n$. $\blacksquare$

</details>
