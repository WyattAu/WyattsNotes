---
title: Matrices and Transformations (Extended)
description:
  A-Level Further Maths notes on Matrices and Transformations (Extended):
  Matrices and Transformations (Extended Treatment); 1. Matrix Operations; 1.1
  Definiti.
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: matrices-and-transformations-extended
---

## Matrices and Transformations (Extended Treatment)

This document covers matrix operations, determinants, inverses, 3x3 matrices, linear
transformations, and an introduction to eigenvalues and eigenvectors.

:::info
Matrices provide a compact and powerful notation for systems of linear equations, geometric
transformations, and many applications in science and engineering.
:::

<hr />

## 1. Matrix Operations

### 1.1 Definitions

An $m \times n$ **matrix** $A$ is a rectangular array of numbers with $m$ rows and $n$ columns.
The entry in row $i$, column $j$ is written $a_{ij}$.

**Addition.** If $A$ and $B$ are both $m \times n$, then $(A + B)_{ij} = a_{ij} + b_{ij}$.

**Scalar multiplication.** $(cA)_{ij} = ca_{ij}$.

**Matrix multiplication.** If $A$ is $m \times n$ and $B$ is $n \times p$, then $C = AB$ is
$m \times p$ with:

$$c_{ij} = \sum_{k=1}^{n} a_{ik}\,b_{kj}$$

### 1.2 Properties of matrix multiplication

Matrix multiplication is:

- **Associative:** $(AB)C = A(BC)$.
- **Distributive over addition:** $A(B + C) = AB + AC$.
- **NOT commutative:** in general, $AB \neq BA$.

**Proof that matrix multiplication is not commutative.** Consider:

$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$

$$AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

$AB \neq BA$. $\blacksquare$

### 1.3 The identity matrix

The $n \times n$ **identity matrix** $I_n$ has $1$s on the main diagonal and $0$s elsewhere. For
any $n \times n$ matrix $A$: $AI_n = I_n A = A$.

### 1.4 Worked example

**Problem.** Given $A = \begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix}$, find $AB$ and $BA$.

$$AB = \begin{pmatrix} 2(1) + (-1)(-2) & 2(5) + (-1)(0) \\ 3(1) + 4(-2) & 3(5) + 4(0) \end{pmatrix} = \begin{pmatrix} 4 & 10 \\ -5 & 15 \end{pmatrix}$$

$$BA = \begin{pmatrix} 1(2) + 5(3) & 1(-1) + 5(4) \\ -2(2) + 0(3) & -2(-1) + 0(4) \end{pmatrix} = \begin{pmatrix} 17 & 19 \\ -4 & 2 \end{pmatrix}$$

$AB \neq BA$, confirming non-commutativity.

<hr />

## 2. Determinants

### 2.1 2x2 determinant

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

### 2.2 3x3 determinant

$$\det\begin{pmatrix} a & b & c \\ d & e & f \\ g & h & k \end{pmatrix} = a\begin{vmatrix} e & f \\ h & k \end{vmatrix} - b\begin{vmatrix} d & f \\ g & k \end{vmatrix} + c\begin{vmatrix} d & e \\ g & h \end{vmatrix}$$

$$= a(ek - fh) - b(dk - fg) + c(dh - eg)$$

### 2.3 Properties of determinants

1. $\det(AB) = \det(A)\det(B)$.
2. $\det(A^T) = \det(A)$.
3. Swapping two rows (or columns) changes the sign of the determinant.
4. A matrix with a row (or column) of zeros has determinant zero.
5. Adding a multiple of one row to another does not change the determinant.
6. $\det(cA) = c^n\det(A)$ for an $n \times n$ matrix.

### 2.4 Geometric interpretation

For a $2 \times 2$ matrix, $|\det(A)|$ is the area scale factor of the transformation. If
$\det(A) = 0$, the transformation collapses the plane to a line or a point.

For a $3 \times 3$ matrix, $|\det(A)|$ is the volume scale factor.

### 2.5 Worked example

**Problem.** Find the determinant of $A = \begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 4 \\ 1 & 2 & 0 \end{pmatrix}$.

Expanding along the first row:

$$\det A = 2\begin{vmatrix} -1 & 4 \\ 2 & 0 \end{vmatrix} - 1\begin{vmatrix} 0 & 4 \\ 1 & 0 \end{vmatrix} + 3\begin{vmatrix} 0 & -1 \\ 1 & 2 \end{vmatrix}$$

$$= 2(0 - 8) - 1(0 - 4) + 3(0 + 1) = -16 + 4 + 3 = -9$$

<hr />

## 3. Inverses

### 3.1 Definition

The **inverse** of a square matrix $A$ is a matrix $A^{-1}$ such that:

$$AA^{-1} = A^{-1}A = I$$

An inverse exists if and only if $\det(A) \neq 0$. A matrix with no inverse is **singular**.

### 3.2 Inverse of a 2x2 matrix

$$\begin{pmatrix} a & b \\ c & d \end{pmatrix}^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

**Verification:**

$$\frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}\begin{pmatrix} a & b \\ c & d \end{pmatrix} = \frac{1}{ad - bc}\begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = I$$

### 3.3 Inverse of a 3x3 matrix

**Method 1: Adjugate matrix.** $A^{-1} = \dfrac{1}{\det A}\,\mathrm{adj}(A)$, where the adjugate is the
transpose of the cofactor matrix.

**Method 2: Row reduction.** Form the augmented matrix $[A \mid I]$ and apply row operations to
obtain $[I \mid A^{-1}]$.

### 3.4 Worked example: 3x3 inverse

**Problem.** Find the inverse of $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$.

$\det A = 1(1 - 0) - 2(0 - 3) + 0 = 1 + 6 = 7$.

Cofactors: $C_{11} = 1$, $C_{12} = 3$, $C_{13} = -1$, $C_{21} = -2$, $C_{22} = 1$, $C_{23} = 2$,
$C_{31} = 6$, $C_{32} = -3$, $C_{33} = 1$.

$$A^{-1} = \frac{1}{7}\begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$$

### 3.5 Solving systems of linear equations

A system $A\mathbf{x} = \mathbf{b}$ has a unique solution $\mathbf{x} = A^{-1}\mathbf{b}$ if and
only if $\det A \neq 0$.

If $\det A = 0$: either no solution (inconsistent) or infinitely many solutions (dependent).

<hr />

## 4. Linear Transformations

### 4.1 Matrices as transformations

A $2 \times 2$ matrix represents a linear transformation of the plane:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$

Key property: the origin is always mapped to the origin.

### 4.2 Standard transformations

| Transformation         | Matrix                                    |
| ---------------------- | ----------------------------------------- |
| Reflection in $x$-axis | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Reflection in $y$-axis | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| Reflection in $y = x$  | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| Rotation $\theta$ anticlockwise | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement scale $k$  | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$ |
| Stretch parallel to $x$ (sf $k$) | $\begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}$ |

### 4.3 Combined transformations

If transformation $A$ is followed by transformation $B$, the combined transformation is $BA$.

**Proof.** If $\mathbf{v}' = A\mathbf{v}$ and $\mathbf{v}'' = B\mathbf{v}'$, then
$\mathbf{v}'' = B(A\mathbf{v}) = (BA)\mathbf{v}$. $\blacksquare$

### 4.4 Worked example

**Problem.** Find the matrix representing a rotation of $90^\circ$ anticlockwise about the origin
followed by a reflection in the $x$-axis.

Rotation $90^\circ$: $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

Reflection in $x$-axis: $S = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.

Combined: $SR = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$

Check: this is equivalent to a reflection in the line $y = -x$.

### 4.5 Invariant points and lines

An **invariant point** satisfies $A\mathbf{x} = \mathbf{x}$, i.e. $(A - I)\mathbf{x} = \mathbf{0}$.

An **invariant line** is a line that is mapped to itself (points on the line may move along the
line). If $\mathbf{v}$ is a direction vector of the line, then $A\mathbf{v} = \lambda\mathbf{v}$ for
some scalar $\lambda$.

<hr />

## 5. Eigenvalues and Eigenvectors

### 5.1 Definition

For a square matrix $A$, a scalar $\lambda$ and a non-zero vector $\mathbf{v}$ are an
**eigenvalue** and **eigenvector** of $A$ if:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geometrically, $A$ stretches or compresses the eigenvector by a factor of $\lambda$ without
changing its direction.

### 5.2 Finding eigenvalues

$A\mathbf{v} = \lambda\mathbf{v} \implies (A - \lambda I)\mathbf{v} = \mathbf{0}$.

For non-trivial solutions, we need $\det(A - \lambda I) = 0$. This is the **characteristic
equation**.

For a $2 \times 2$ matrix:

$$\det\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = 0$$

$$\lambda^2 - (a + d)\lambda + (ad - bc) = 0$$

**Key result:** $\lambda_1 + \lambda_2 = \mathrm{tr}(A) = a + d$ (the trace) and
$\lambda_1 \lambda_2 = \det A$.

### 5.3 Finding eigenvectors

For each eigenvalue $\lambda_i$, solve $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$.

### 5.4 Worked example

**Problem.** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

Characteristic equation: $(4 - \lambda)(3 - \lambda) - 2 = 0$

$$\lambda^2 - 7\lambda + 10 = 0 \implies (\lambda - 5)(\lambda - 2) = 0$$

$\lambda_1 = 5$, $\lambda_2 = 2$.

**For $\lambda_1 = 5$:**

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$-x + y = 0 \implies y = x$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**For $\lambda_2 = 2$:**

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$2x + y = 0 \implies y = -2x$. Eigenvector: $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### 5.5 Diagonalisation

If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors, it can be diagonalised:

$$A = PDP^{-1}$$

where $P$ has the eigenvectors as columns and $D$ is a diagonal matrix with the eigenvalues on the
diagonal.

**Worked example.** For the matrix above:

$$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$$

$$\det P = -2 - 1 = -3, \quad P^{-1} = -\frac{1}{3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$$

Verify: $PDP^{-1} = \dfrac{1}{3}\begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$

$= \dfrac{1}{3}\begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} = \dfrac{1}{3}\begin{pmatrix} 12 & 3 \\ 6 & 9 \end{pmatrix} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} = A$.

### 5.6 Powers of matrices

Diagonalisation allows efficient computation of $A^n$:

$$A^n = PD^n P^{-1}$$

since $D^n$ is simply the diagonal matrix with each eigenvalue raised to the power $n$.

:::warning Common Pitfall
Not all matrices are diagonalisable. A matrix is diagonalisable if and only if it has a full set of
linearly independent eigenvectors. A matrix with repeated eigenvalues may or may not be
diagonalisable.
:::

<hr />

## 6. Practice Problems

### Problem 1

Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ and verify that $AA^{-1} = I$.

<details>
<summary>Solution</summary>

$\det A = 6 - 5 = 1$.

$A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$.

$AA^{-1} = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$. Verified.

</details>

### Problem 2

Find the matrix representing a rotation of $60^\circ$ anticlockwise about the origin.

<details>
<summary>Solution</summary>

$\cos 60^\circ = 0.5$, $\sin 60^\circ = \sqrt{3}/2$.

$R = \begin{pmatrix} 0.5 & -\sqrt{3}/2 \\ \sqrt{3}/2 & 0.5 \end{pmatrix}$.

</details>

### Problem 3

Find the eigenvalues and eigenvectors of $\begin{pmatrix} 5 & -2 \\ 2 & 1 \end{pmatrix}$.

<details>
<summary>Solution</summary>

Characteristic equation: $(5 - \lambda)(1 - \lambda) + 4 = 0$

$\lambda^2 - 6\lambda + 9 = 0 \implies (\lambda - 3)^2 = 0$

$\lambda = 3$ (repeated eigenvalue).

$\begin{pmatrix} 2 & -2 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0} \implies x = y$.

Only one independent eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

This matrix is not diagonalisable (only one eigenvector for a repeated eigenvalue).

</details>

### Problem 4

Use the matrix $\begin{pmatrix} 1 & 2 \\ 1 & 0 \end{pmatrix}$ to find a formula for the $n$-th
Fibonacci number.

<details>
<summary>Solution</summary>

Eigenvalues of $A$: $\lambda^2 - \lambda - 2 = 0 \implies \lambda = \frac{1 \pm 3}{2}$, so $\lambda_1 = 2$, $\lambda_2 = -1$.

Eigenvectors: for $\lambda = 2$: $(1, 1)$; for $\lambda = -1$: $(-2, 1)$.

$A^n = P D^n P^{-1}$ where $P = \begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}$, $P^{-1} = \frac{1}{3}\begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix}$.

$\begin{pmatrix} F_{n+1} \\ F_n \end{pmatrix} = A^n\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

This gives $F_n = \frac{2^n - (-1)^n}{3}$ (the Lucas sequence). For the standard Fibonacci sequence
with $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$, the result is
$F_n = \frac{\phi^n - \psi^n}{\sqrt{5}}$ where $\phi = \frac{1+\sqrt{5}}{2}$.

</details>
