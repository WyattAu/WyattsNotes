---
title: Matrices and Transformations (Extended)
description: "A-Level Further Maths notes on Matrices and Transformations (Extended): Matrices and Transformations (Extended Treatment); 1. Matrix Operations; 1.1 Definiti."
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: matrices-and-transformations-extended
---
## Matrices and Transformations (Extended Treatment)

This document covers matrix operations, determinants, inverses, 3x3 matrices, linear
Transformations, and an introduction to eigenvalues and eigenvectors.

:::info Matrices provide a compact and powerful notation for systems of linear equations, geometric
Transformations, and many applications in science and engineering. :::

<hr />

## 1. Matrix Operations

### 1.1 Definitions

An $m \times n$ **matrix** $A$ is a rectangular array of numbers with $m$ rows and $n$ columns. The
Entry in row $i$Column $j$ is written $a_{ij}$.

**Addition.** If $A$ and $B$ are both $m \times n$Then $(A + B)_{ij} = a_{ij} + b_{ij}$.

**Scalar multiplication.** $(cA)_{ij} = ca_{ij}$.

**Matrix multiplication.** If $A$ is $m \times n$ and $B$ is $n \times p$Then $C = AB$ is
$m \times p$ with:

$$c_{ij} = \sum_{k=1}^{n} a_{ik}\,b_{kj}$$

### 1.2 Properties of matrix multiplication

Matrix multiplication is:

- **Associative:** $(AB)C = A(BC)$.
- **Distributive over addition:** $A(B + C) = AB + AC$.
- **NOT commutative:** , $AB \neq BA$.

**Proof that matrix multiplication is not commutative.** Consider:

$$A = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix}, \quad B = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$$

$$AB = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}, \quad BA = \begin{pmatrix} 0 & 0 \\ 0 & 0 \end{pmatrix}$$

$AB \neq BA$. $\blacksquare$

### 1.3 The identity matrix

The $n \times n$ **identity matrix** $I_n$ has $1$S on the main diagonal and $0$S elsewhere. For any
$n \times n$ matrix $A$: $AI_n = I_n A = A$.

### 1.4 Worked example

**Problem.** Given $A = \begin{pmatrix} 2 & -1 \\ 3 & 4 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix}$Find $AB$ and $BA$.

$$AB = \begin{pmatrix} 2(1) + (-1)(-2) & 2(5) + (-1)(0) \\ 3(1) + 4(-2) & 3(5) + 4(0) \end{pmatrix} = \begin{pmatrix} 4 & 10 \\ -5 & 15 \end{pmatrix}$$

$$BA = \begin{pmatrix} 1(2) + 5(3) & 1(-1) + 5(4) \\ -2(2) + 0(3) & -2(-1) + 0(4) \end{pmatrix} = \begin{pmatrix} 17 & 19 \\ -4 & 2 \end{pmatrix}$$

$AB \neq BA$Confirming non-commutativity.

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
$\det(A) = 0$The transformation collapses the plane to a line or a point.

For a $3 \times 3$ matrix, $|\det(A)|$ is the volume scale factor.

### 2.5 Worked example

**Problem.** Find the determinant of
$A = \begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 4 \\ 1 & 2 & 0 \end{pmatrix}$.

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

**Method 1: Adjugate matrix.** $A^{-1} = \dfrac◆LB◆1◆RB◆◆LB◆\det A◆RB◆\,\mathrm{adj}(A)$Where the
Adjugate is the transpose of the cofactor matrix.

**Method 2: Row reduction.** Form the augmented matrix $[A \mid I]$ and apply row operations to
Obtain $[I \mid A^{-1}]$.

### 3.4 Worked example: 3x3 inverse

**Problem.** Find the inverse of
$A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$.

$\det A = 1(1 - 0) - 2(0 - 3) + 0 = 1 + 6 = 7$.

Cofactors: $C_{11} = 1$$C_{12} = 3$$C_{13} = -1$$C_{21} = -2$$C_{22} = 1$$C_{23} = 2$
$C_{31} = 6$$C_{32} = -3$$C_{33} = 1$.

$$A^{-1} = \frac{1}{7}\begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$$

### 3.5 Solving systems of linear equations

A system $A\mathbf{x} = \mathbf{b}$ has a unique solution $\mathbf{x} = A^{-1}\mathbf{b}$ if and
Only if $\det A \neq 0$.

If $\det A = 0$: either no solution (inconsistent) or infinitely many solutions (dependent).

<hr />

## 4. Linear Transformations

### 4.1 Matrices as transformations

A $2 \times 2$ matrix represents a linear transformation of the plane:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix}$$

Key property: the origin is always mapped to the origin.

### 4.2 Standard transformations

| Transformation | Matrix |
| -------------------------------- | ----------------------------------------------------------------------------------- |
| Reflection in $x$-axis | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ |
| Reflection in $y$-axis | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ |
| Reflection in $y = x$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ |
| Rotation $\theta$ anticlockwise | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement scale $k$ | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$ |
| Stretch parallel to $x$ (sf $k$) | $\begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}$ |

### 4.3 Combined transformations

If transformation $A$ is followed by transformation $B$The combined transformation is $BA$.

**Proof.** If $\mathbf{v}' = A\mathbf{v}$ and $\mathbf{v}'' = B\mathbf{v}'$Then
$\mathbf{v}'' = B(A\mathbf{v}) = (BA)\mathbf{v}$. $\blacksquare$

### 4.4 Worked example

**Problem.** Find the matrix representing a rotation of $90^\circ$ anticlockwise about the origin
Followed by a reflection in the $x$-axis.

Rotation $90^\circ$: $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.

Reflection in $x$-axis: $S = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$.

Combined:
$SR = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$

Check: this is equivalent to a reflection in the line $y = -x$.

### 4.5 Invariant points and lines

An **invariant point** satisfies $A\mathbf{x} = \mathbf{x}$I.e. $(A - I)\mathbf{x} = \mathbf{0}$.

An **invariant line** is a line that is mapped to itself (points on the line may move along the
Line). If $\mathbf{v}$ is a direction vector of the line, then $A\mathbf{v} = \lambda\mathbf{v}$ for
Some scalar $\lambda$.

<hr />

## 5. Eigenvalues and Eigenvectors

### 5.1 Definition

For a square matrix $A$A scalar $\lambda$ and a non-zero vector $\mathbf{v}$ are an **eigenvalue**
And **eigenvector** of $A$ if:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geometrically, $A$ stretches or compresses the eigenvector by a factor of $\lambda$ without changing
Its direction.

### 5.2 Finding eigenvalues

$A\mathbf{v} = \lambda\mathbf{v} \implies (A - \lambda I)\mathbf{v} = \mathbf{0}$.

For non-trivial solutions, we need $\det(A - \lambda I) = 0$. This is the **characteristic
Equation**.

For a $2 \times 2$ matrix:

$$\det\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = 0$$

$$\lambda^2 - (a + d)\lambda + (ad - bc) = 0$$

**Key result:** $\lambda_1 + \lambda_2 = \mathrm{tr}(A) = a + d$ (the trace) and
$\lambda_1 \lambda_2 = \det A$.

### 5.3 Finding eigenvectors

For each eigenvalue $\lambda_i$Solve $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$.

### 5.4 Worked example

**Problem.** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

Characteristic equation: $(4 - \lambda)(3 - \lambda) - 2 = 0$

$$\lambda^2 - 7\lambda + 10 = 0 \implies (\lambda - 5)(\lambda - 2) = 0$$

$\lambda_1 = 5$$\lambda_2 = 2$.

**For $\lambda_1 = 5$:**

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$-x + y = 0 \implies y = x$. Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**For $\lambda_2 = 2$:**

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

$2x + y = 0 \implies y = -2x$. Eigenvector: $\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### 5.5 Diagonalisation

If an $n \times n$ matrix $A$ has $n$ linearly independent eigenvectors, it can be diagonalised:

$$A = PDP^{-1}$$

Where $P$ has the eigenvectors as columns and $D$ is a diagonal matrix with the eigenvalues on the
Diagonal.

**Worked example.** For the matrix above:

$$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$$

$$\det P = -2 - 1 = -3, \quad P^{-1} = -\frac{1}{3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \frac{1}{3}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$$

Verify:
$PDP^{-1} = \dfrac{1}{3}\begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}$

$= \dfrac{1}{3}\begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} = \dfrac{1}{3}\begin{pmatrix} 12 & 3 \\ 6 & 9 \end{pmatrix} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} = A$.

### 5.6 Powers of matrices

Diagonalisation allows efficient computation of $A^n$:

$$A^n = PD^n P^{-1}$$

Since $D^n$ is the diagonal matrix with each eigenvalue raised to the power $n$.

:::warning warning Not all matrices are diagonalisable. A matrix is diagonalisable if and only if it
Has a full set of linearly independent eigenvectors. A matrix with repeated eigenvalues may or may
Not be diagonalisable. :::

<hr />

## 6. Practice Problems

### Problem 1

Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$ and verify that
$AA^{-1} = I$.

<details>
<summary>Solution</summary>

$\det A = 6 - 5 = 1$.

$A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$.

$AA^{-1} = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}\begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$.
Verified.

</details>

### Problem 2

Find the matrix representing a rotation of $60^\circ$ anticlockwise about the origin.

<details>
<summary>Solution</summary>

$\cos 60^\circ = 0.5$$\sin 60^\circ = \sqrt{3}/2$.

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

Eigenvalues of $A$: $\lambda^2 - \lambda - 2 = 0 \implies \lambda = \frac◆LB◆1 \pm 3◆RB◆◆LB◆2◆RB◆$
So $\lambda_1 = 2$$\lambda_2 = -1$.

Eigenvectors: for $\lambda = 2$: $(1, 1)$; for $\lambda = -1$: $(-2, 1)$.

$A^n = P D^n P^{-1}$ where $P = \begin{pmatrix} 1 & -2 \\ 1 & 1 \end{pmatrix}$
$P^{-1} = \frac{1}{3}\begin{pmatrix} 1 & 2 \\ -1 & 1 \end{pmatrix}$.

$\begin{pmatrix} F_{n+1} \\ F_n \end{pmatrix} = A^n\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

This gives $F_n = \frac{2^n - (-1)^n}{3}$ (the Lucas sequence). For the standard Fibonacci sequence
With $A = \begin{pmatrix} 1 & 1 \\ 1 & 0 \end{pmatrix}$The result is
$F_n = \frac◆LB◆\phi^n - \psi^n◆RB◆◆LB◆\sqrt{5}◆RB◆$ where
$\phi = \frac◆LB◆1+\sqrt{5}◆RB◆◆LB◆2◆RB◆$.

</details>

---

## 7. Further Proofs and Key Results

### 7.1 Proof: $\det(AB) = \det(A)\det(B)$ for $2 \times 2$ matrices

**Proof.** Let $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ and
$B = \begin{pmatrix} e & f \\ g & h \end{pmatrix}$.

$$AB = \begin{pmatrix} ae + bg & af + bh \\ ce + dg & cf + dh \end{pmatrix}$$

$$\det(AB) = (ae + bg)(cf + dh) - (af + bh)(ce + dg)$$

$$= acef + adeh + bcfg + bdgh - acef - adfg - bceh - bdgh$$

$$= adeh + bcfg - adfg - bceh$$

$$= ad(eh - fg) - bc(eh - fg) = (ad - bc)(eh - fg) = \det(A)\det(B) \quad \blacksquare$$

### 7.2 Proof: $\det(A) \neq 0 \iff A$ is invertible

**Proof.** ($\Rightarrow$) If $\det(A) \neq 0$The adjugate formula gives
$A^{-1} = \dfrac◆LB◆1◆RB◆◆LB◆\det A◆RB◆\mathrm{adj}(A)$So $A$ is invertible.

($\Leftarrow$) If $A$ is invertible with $A^{-1}$Then
$\det(A)\det(A^{-1}) = \det(AA^{-1}) = \det(I) = 1$. Since $1 \neq 0$We must have
$\det(A) \neq 0$. $\blacksquare$

### 7.3 Proof: the trace equals the sum of eigenvalues

**Theorem.** For any $2 \times 2$ matrix $A$$\mathrm{tr}(A) = \lambda_1 + \lambda_2$.

**Proof.** The characteristic equation is
$\det(A - \lambda I) = \lambda^2 - (a + d)\lambda + (ad - bc) = 0$.

By Vieta's formulas, the sum of the roots is the negative coefficient of $\lambda$:

$$\lambda_1 + \lambda_2 = a + d = \mathrm{tr}(A) \quad \blacksquare$$

### 7.4 Proof: area scale factor via determinant

**Theorem.** The linear transformation represented by a $2 \times 2$ matrix $A$ scales areas by
$|\det(A)|$.

**Proof.** The unit square with vertices
$\mathbf{0}, \mathbf{e}_1, \mathbf{e}_2, \mathbf{e}_1 + \mathbf{e}_2$ is mapped to a parallelogram
With vertices $\mathbf{0}, A\mathbf{e}_1, A\mathbf{e}_2, A\mathbf{e}_1 + A\mathbf{e}_2$.

The area of this parallelogram is the magnitude of the cross product (in 2D, the determinant):

$$\text{Area} = \left|\det\begin{pmatrix} a & b \\ c & d \end{pmatrix}\right| = |\det A|$$

Any region can be tiled by infinitesimal parallelograms, so the general scale factor is $|\det A|$.
$\blacksquare$

---

## 8. Common Pitfalls

:::warning Common Pitfall

1. **Matrix multiplication order:** $AB$ means "apply $B$ first, then $A$." When combining
 transformations, the second transformation is written on the left. Always read right-to-left.
2. **3x3 determinant sign errors:** The cofactor expansion alternates signs $+$$-$$+$ along the
 first row. A common mistake is to forget the $-$ sign on the middle term.
3. **Singular matrix checks:** Before finding an inverse, always verify $\det(A) \neq 0$. If the
 determinant is zero, the matrix has no inverse and the system $A\mathbf{x} = \mathbf{b}$ has
 either no solutions or infinitely many.
4. **Eigenvectors are not unique:** Any non-zero scalar multiple of an eigenvector is also an
 eigenvector. When diagonalising, ensure consistency: the columns of $P$ must match the order of
 eigenvalues in $D$.
5. **Repeated eigenvalues:** A repeated eigenvalue does not necessarily give two independent
 eigenvectors. Check by attempting to solve $(A - \lambda I)\mathbf{v} = \mathbf{0}$. :::

---

## 9. Additional Exam-Style Questions

### Question 5

The matrix $A = \begin{pmatrix} 3 & 1 \\ -1 & 1 \end{pmatrix}$ represents a linear transformation.

**(a)** Find the eigenvalues and eigenvectors of $A$.

**(b)** Write down a matrix $P$ and a diagonal matrix $D$ such that $P^{-1}AP = D$.

**(c)** Hence find $A^5$.

<details>
<summary>Solution</summary>

**(a)** Characteristic equation: $(3 - \lambda)(1 - \lambda) + 1 = 0$

$\lambda^2 - 4\lambda + 4 = 0 \implies (\lambda - 2)^2 = 0$

$\lambda = 2$ (repeated).

$\begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0} \implies x + y = 0$.

Eigenvector: $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

Only one independent eigenvector, so $A$ is not diagonalisable.

**(b)** Since $A$ is not diagonalisable, we cannot find $P$ and $D$ in the usual way. The best we
Can do is Jordan form, which is beyond A-Level scope.

**(c)** For $A^n$ with a non-diagonalisable $2 \times 2$ matrix with repeated eigenvalue $\lambda$:

$$A^n = \lambda^n I + n\lambda^{n-1}(A - \lambda I)$$

$A - 2I = \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix}$.

$A^5 = 2^5 I + 5 \cdot 2^4 \begin{pmatrix} 1 & 1 \\ -1 & -1 \end{pmatrix} = \begin{pmatrix} 32 & 0 \\ 0 & 32 \end{pmatrix} + \begin{pmatrix} 80 & 80 \\ -80 & -80 \end{pmatrix}$

$= \begin{pmatrix} 112 & 80 \\ -80 & -48 \end{pmatrix}$.

</details>

### Question 6

**(a)** Find the $3 \times 3$ matrix $M$ that represents a rotation of $90^\circ$ anticlockwise
About the $x$-axis.

**(b)** Verify that $\det(M) = 1$.

**(c)** The point $(1, 1, 0)$ is transformed by $M$. Find its image.

<details>
<summary>Solution</summary>

**(a)** A rotation of $\theta$ about the $x$-axis leaves $x$ unchanged and rotates the $y$-$z$
Plane:

$$M = \begin{pmatrix} 1 & 0 & 0 \\ 0 & \cos 90^\circ & -\sin 90^\circ \\ 0 & \sin 90^\circ & \cos 90^\circ \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}$$

**(b)** Expanding along the first row:

$\det M = 1\begin{vmatrix} 0 & -1 \\ 1 & 0 \end{vmatrix} - 0 + 0 = 0 - (-1) = 1$. Verified.

**(c)**
$\begin{pmatrix} 1 & 0 & 0 \\ 0 & 0 & -1 \\ 0 & 1 & 0 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 1 \end{pmatrix}$.

The image is $(1, 0, 1)$.

</details>

### Question 7

The transformation $T$ is defined by the matrix $A = \begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}$.

**(a)** Find the invariant points of $T$.

**(b)** Show that the line $y = 0$ is an invariant line of $T$.

**(c)** Find another invariant line of $T$.

<details>
<summary>Solution</summary>

**(a)** Invariant points satisfy $A\mathbf{x} = \mathbf{x}$:

$\begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$

$2x + 3y = x \implies x + 3y = 0$And $2y = y \implies y = 0$.

So $x = 0$ and $y = 0$. The only invariant point is the origin.

**(b)** Points on $y = 0$ have the form $(x, 0)$:

$\begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} x \\ 0 \end{pmatrix} = \begin{pmatrix} 2x \\ 0 \end{pmatrix}$

The image $(2x, 0)$ also lies on $y = 0$So $y = 0$ is an invariant line.

**(c)** For an invariant line $y = mx$We need
$A\begin{pmatrix} 1 \\ m \end{pmatrix} = \lambda\begin{pmatrix} 1 \\ m \end{pmatrix}$:

$2 + 3m = \lambda$ and $2m = \lambda m$.

From the second equation: $m(2 - \lambda) = 0$.

If $m = 0$We get the line $y = 0$ (already found).

If $\lambda = 2$: $2 + 3m = 2 \implies m = 0$ again.

For a line not through the origin, try $y = mx + c$ with $c \neq 0$:

$\begin{pmatrix} 2 & 3 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} x \\ mx + c \end{pmatrix} = \begin{pmatrix} (2 + 3m)x + 3c \\ 2mx + 2c \end{pmatrix}$

For this to lie on $y = mx + c$: $2mx + 2c = m(2 + 3m)x + 3mc + c$.

Comparing coefficients: $2m = m(2 + 3m) \implies 3m^2 = 0 \implies m = 0$.

Then: $2c = c \implies c = 0$.

The only invariant line is $y = 0$.

</details>

<hr />

## 10. Advanced Worked Examples

### Example 10.1: 3x3 eigenvalues and eigenvectors

**Problem.** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$.

**Solution.** Characteristic equation:

$$\det(A - \lambda I) = \begin{vmatrix} 2-\lambda & 1 & 0 \\ 1 & 3-\lambda & 1 \\ 0 & 1 & 2-\lambda \end{vmatrix} = 0$$

Expanding along the first row:

$$(2-\lambda)\begin{vmatrix} 3-\lambda & 1 \\ 1 & 2-\lambda \end{vmatrix} - 1\begin{vmatrix} 1 & 1 \\ 0 & 2-\lambda \end{vmatrix} + 0$$

$$= (2-\lambda)[(3-\lambda)(2-\lambda)-1] - (2-\lambda)$$

$$= (2-\lambda)[(3-\lambda)(2-\lambda) - 2] = (2-\lambda)[\lambda^2 - 5\lambda + 4] = (2-\lambda)(\lambda-1)(\lambda-4)$$

Eigenvalues: $\lambda_1 = 1$$\lambda_2 = 2$$\lambda_3 = 4$.

**For $\lambda_1 = 1$:**

$$\begin{pmatrix} 1 & 1 & 0 \\ 1 & 2 & 1 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \mathbf{0}$$

$x + y = 0$$x + 2y + z = 0$$y + z = 0$. From the first: $x = -y$. From the third: $z = -y$.
Eigenvector: $\begin{pmatrix} 1 \\ -1 \\ 1 \end{pmatrix}$.

**For $\lambda_2 = 2$:**

$$\begin{pmatrix} 0 & 1 & 0 \\ 1 & 1 & 1 \\ 0 & 1 & 0 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \mathbf{0}$$

$y = 0$$x + z = 0$. Eigenvector: $\begin{pmatrix} 1 \\ 0 \\ -1 \end{pmatrix}$.

**For $\lambda_3 = 4$:**

$$\begin{pmatrix} -2 & 1 & 0 \\ 1 & -1 & 1 \\ 0 & 1 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \\ z \end{pmatrix} = \mathbf{0}$$

$-2x + y = 0 \implies y = 2x$. $y - 2z = 0 \implies z = x$. Eigenvector:
$\begin{pmatrix} 1 \\ 2 \\ 1 \end{pmatrix}$.

### Example 10.2: Diagonalisation of a 3x3 matrix

**Problem.** Using the eigenvalues and eigenvectors from Example 10.1, diagonalise $A$ and hence
Find $A^4$.

**Solution.** $P = \begin{pmatrix} 1 & 1 & 1 \\ -1 & 0 & 2 \\ 1 & -1 & 1 \end{pmatrix}$
$D = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$.

$\det P = 1(0-(-2)) - 1((-1)-2) + 1(1-0) = 2 + 3 + 1 = 6$.

$$P^{-1} = \frac{1}{6}\begin{pmatrix} 2 & 0 & 2 \\ 3 & 0 & -3 \\ 1 & 2 & 1 \end{pmatrix}$$

$A^4 = PD^4P^{-1}$:

$$D^4 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 16 & 0 \\ 0 & 0 & 256 \end{pmatrix}$$

$$PD^4 = \begin{pmatrix} 1 & 16 & 256 \\ -1 & 0 & 512 \\ 1 & -16 & 256 \end{pmatrix}$$

$$A^4 = \frac{1}{6}\begin{pmatrix} 1 & 16 & 256 \\ -1 & 0 & 512 \\ 1 & -16 & 256 \end{pmatrix}\begin{pmatrix} 2 & 0 & 2 \\ 3 & 0 & -3 \\ 1 & 2 & 1 \end{pmatrix}$$

$$= \frac{1}{6}\begin{pmatrix} 2+48+256 & 512-768+512 & 2-48+256 \\ -2+512 & 1024 & -2-768+512 \\ 2-48+256 & 512+256 & 2+48+256 \end{pmatrix}$$

$$= \frac{1}{6}\begin{pmatrix} 306 & 256 & 210 \\ 510 & 1024 & -258 \\ 210 & 768 & 306 \end{pmatrix} = \begin{pmatrix} 51 & 128/3 & 35 \\ 85 & 512/3 & -43 \\ 35 & 128 & 51 \end{pmatrix}$$

### Example 10.3: Reflection in an arbitrary line

**Problem.** Find the $2 \times 2$ matrix representing reflection in the line $y = mx$.

**Solution.** The line $y = mx$ makes angle $\theta = \arctan m$ with the $x$-axis. The reflection
Matrix is obtained by:

1. Rotate by $-\theta$ to align the line with the $x$-axis.
2. Reflect in the $x$-axis.
3. Rotate back by $\theta$.

$$R_{-\theta} = \begin{pmatrix} \cos\theta & \sin\theta \\ \sin\theta & -\cos\theta \end{pmatrix}$$

Wait -- the reflection matrix in a line at angle $\theta$ to the $x$-axis is:

$$M = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}$$

This can be derived as $R_\theta \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} R_{-\theta}$.

For $m = 1$ ($\theta = \pi/4$): $M = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$Which is
Reflection in $y = x$ (consistent with the standard table).

### Example 10.4: Successive transformations and invariant lines

**Problem.** The transformation $T$ is represented by
$A = \begin{pmatrix} 3 & -4 \\ 1 & -1 \end{pmatrix}$. Find the invariant lines of $T$.

**Solution.** Characteristic equation: $(3-\lambda)(-1-\lambda) + 4 = 0$

$-3 - 3\lambda + \lambda + \lambda^2 + 4 = 0 \implies \lambda^2 - 2\lambda + 1 = 0 \implies (\lambda-1)^2 = 0$.

$\lambda = 1$ (repeated). Eigenvector: $(A-I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 2 & -4 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \mathbf{0} \implies x - 2y = 0$$

Eigenvector: $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$So the line $y = x/2$ is invariant.

For non-trivial invariant lines not through the origin, try $y = mx + c$ with $c \neq 0$:

$\begin{pmatrix} 3 & -4 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} x \\ mx+c \end{pmatrix} = \begin{pmatrix} (3-4m)x - 4c \\ (1-m)x - c \end{pmatrix}$

For this to lie on $y = mx + c$: $(1-m)x - c = m(3-4m)x - 4mc + c$.

Comparing coefficients of $x$: $1 - m = m(3 - 4m) = 3m - 4m^2$.

$$4m^2 - 4m + 1 = 0 \implies (2m - 1)^2 = 0 \implies m = 1/2$$

Comparing constants: $-c = -4mc + c \implies 4mc = 2c \implies c(2m - 1) = 0$.

Since $m = 1/2$: $c(0) = 0$Which is satisfied for all $c$.

Therefore **every** line of the form $y = x/2 + c$ is invariant under $T$.

### Example 10.5: Matrix representation of rotation about an arbitrary point

**Problem.** Find the $3 \times 3$ matrix (using homogeneous coordinates) that represents a rotation
Of $\theta$ about the point $(a, b)$ in the plane.

**Solution.** Using the homogeneous coordinate system where a point $(x, y)$ is represented as
$\begin{pmatrix}x\\y\\1\end{pmatrix}$:

1. Translate by $(-a, -b)$ to move the centre to the origin.
2. Rotate by $\theta$.
3. Translate back by $(a, b)$.

$$M = \begin{pmatrix} 1 & 0 & a \\ 0 & 1 & b \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 & -a \\ 0 & 1 & -b \\ 0 & 0 & 1 \end{pmatrix}$$

$$= \begin{pmatrix} \cos\theta & -\sin\theta & a(1-\cos\theta)+b\sin\theta \\ \sin\theta & \cos\theta & b(1-\cos\theta)-a\sin\theta \\ 0 & 0 & 1 \end{pmatrix}$$

### Example 10.6: Determinant and area of a triangle

**Problem.** The vertices of a triangle are $A(1, 2)$$B(4, 6)$$C(3, -1)$. Find the area using
Determinants.

**Solution.**

$$\text{Area} = \frac{1}{2}\left|\det\begin{pmatrix} 1 & 2 & 1 \\ 4 & 6 & 1 \\ 3 & -1 & 1 \end{pmatrix}\right|$$

Expanding along the third column:

$= \dfrac{1}{2}\left|1\cdot\begin{vmatrix} 4 & 6 \\ 3 & -1 \end{vmatrix} - 1\cdot\begin{vmatrix} 1 & 2 \\ 3 & -1 \end{vmatrix} + 1\cdot\begin{vmatrix} 1 & 2 \\ 4 & 6 \end{vmatrix}\right|$

$= \dfrac{1}{2}|(-4-18) - (-1-6) + (6-8)| = \dfrac{1}{2}|-22 + 7 - 2| = \dfrac{17}{2}$

### Example 10.7: Solving a system using the inverse

**Problem.** Solve the system $x + 2y + z = 4$$2x + y + z = 3$$x + y + 2z = 5$.

**Solution.** The system is $A\mathbf{x} = \mathbf{b}$ where:

$$A = \begin{pmatrix} 1 & 2 & 1 \\ 2 & 1 & 1 \\ 1 & 1 & 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 4 \\ 3 \\ 5 \end{pmatrix}$$

$\det A = 1(2-1) - 2(4-1) + 1(2-1) = 1 - 6 + 1 = -4$.

Using Cramer's rule:

$$x = \frac◆LB◆\det\begin{pmatrix} 4 & 2 & 1 \\ 3 & 1 & 1 \\ 5 & 1 & 2 \end{pmatrix}◆RB◆◆LB◆-4◆RB◆ = \frac{4(2-1) - 2(6-5) + 1(3-5)}{-4} = \frac{4 - 2 - 2}{-4} = 0$$

$$y = \frac◆LB◆\det\begin{pmatrix} 1 & 4 & 1 \\ 2 & 3 & 1 \\ 1 & 5 & 2 \end{pmatrix}◆RB◆◆LB◆-4◆RB◆ = \frac{1(6-5) - 4(4-1) + 1(10-3)}{-4} = \frac{1 - 12 + 7}{-4} = 1$$

$$z = \frac◆LB◆\det\begin{pmatrix} 1 & 2 & 4 \\ 2 & 1 & 3 \\ 1 & 1 & 5 \end{pmatrix}◆RB◆◆LB◆-4◆RB◆ = \frac{1(5-3) - 2(10-3) + 4(2-1)}{-4} = \frac{2 - 14 + 4}{-4} = 2$$

Solution: $x = 0$$y = 1$$z = 2$.

---

## 11. Connections to Other Topics

### 11.1 Matrices and complex numbers

Complex numbers $a + bi$ can be represented as $\begin{pmatrix}a & -b\\b & a\end{pmatrix}$.
Multiplication of complex numbers corresponds to matrix multiplication, and $|z|^2 = \det$ of this
Matrix. See [Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

### 11.2 Matrices and vectors

The cross product $\mathbf{a}\times\mathbf{b}$ can be computed as a symbolic determinant with basis
Vectors $\mathbf{i}, \mathbf{j}, \mathbf{k}$. See
[Vectors in 3D](/docs/alevel/further-maths/pure-mathematics/further-vectors).

### 11.3 Eigenvalues and differential equations

Diagonalisation is used to solve systems of coupled linear differential equations. The eigenvalues
Determine the form of the solution. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

---

## 12. Additional Exam-Style Questions

### Question 8

The matrix $B = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 2 & 0 \\ 2 & 0 & 1 \end{pmatrix}$.

**(a)** Find the eigenvalues and eigenvectors of $B$.

**(b)** Verify that $B$ is diagonalisable and write down $P$ and $D$.

<details>
<summary>Solution</summary>

**(a)**
$\det(B - \lambda I) = \begin{vmatrix} 1-\lambda & 0 & 2 \\ 0 & 2-\lambda & 0 \\ 2 & 0 & 1-\lambda \end{vmatrix} = (2-\lambda)[(1-\lambda)^2 - 4]$

$= (2-\lambda)(\lambda^2 - 2\lambda - 3) = (2-\lambda)(\lambda-3)(\lambda+1)$.

Eigenvalues: $\lambda_1 = -1$$\lambda_2 = 2$$\lambda_3 = 3$.

$\lambda = -1$:
$\begin{pmatrix} 2 & 0 & 2 \\ 0 & 3 & 0 \\ 2 & 0 & 2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x + z = 0, y = 0$.
Eigenvector: $\begin{pmatrix}1\\0\\-1\end{pmatrix}$.

$\lambda = 2$:
$\begin{pmatrix} -1 & 0 & 2 \\ 0 & 0 & 0 \\ 2 & 0 & -1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x = 2z$.
Eigenvector: $\begin{pmatrix}2\\1\\1\end{pmatrix}$ (using $y$ as free variable too).

Actually: $-x + 2z = 0 \implies x = 2z$. $y$ is free. Eigenvector:
$\begin{pmatrix}0\\1\\0\end{pmatrix}$.

$\lambda = 3$:
$\begin{pmatrix} -2 & 0 & 2 \\ 0 & -1 & 0 \\ 2 & 0 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x = z, y = 0$.
Eigenvector: $\begin{pmatrix}1\\0\\1\end{pmatrix}$.

**(b)** Three independent eigenvectors, so $B$ is diagonalisable.

$$P = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 0 \\ -1 & 0 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} -1 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 3 \end{pmatrix}$$

</details>

### Question 9

Find the matrix representing an enlargement of scale factor $3$ from the point $(1, 2)$Using
Homogeneous coordinates.

<details>
<summary>Solution</summary>

In homogeneous coordinates, this is the composite of translate by $(-1, -2)$Enlarge by $3$And
Translate back by $(1, 2)$:

$$M = \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 2 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 3 & 0 & 0 \\ 0 & 3 & 0 \\ 0 & 0 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 & -1 \\ 0 & 1 & -2 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 0 & -2 \\ 0 & 3 & -4 \\ 0 & 0 & 1 \end{pmatrix}$$

</details>

### Question 10

**Prove that** if $A$ has eigenvalues $\lambda_1, \lambda_2$ with $\lambda_1 \neq \lambda_2$Then
$A$ is diagonalisable.

<details>
<summary>Solution</summary>

Since $\lambda_1 \neq \lambda_2$The eigenvectors $\mathbf{v}_1$ and $\mathbf{v}_2$ satisfy
$(A - \lambda_1 I)\mathbf{v}_1 = \mathbf{0}$ and $(A - \lambda_2 I)\mathbf{v}_2 = \mathbf{0}$.

Suppose $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly dependent: $\mathbf{v}_2 = c\mathbf{v}_1$ for
Some scalar $c$.

Then $(A - \lambda_2 I)\mathbf{v}_1 = \mathbf{0}$ (dividing by $c$), which means $\lambda_1$ and
$\lambda_2$ are both eigenvalues with eigenvector $\mathbf{v}_1$. But
$(A - \lambda_1 I)\mathbf{v}_1 = \mathbf{0}$ and $(A - \lambda_2 I)\mathbf{v}_1 = \mathbf{0}$
Together give $(\lambda_1 - \lambda_2)\mathbf{v}_1 = \mathbf{0}$Contradicting
$\lambda_1 \neq \lambda_2$ and $\mathbf{v}_1 \neq \mathbf{0}$.

Therefore $\mathbf{v}_1$ and $\mathbf{v}_2$ are linearly independent, $P$ is invertible, and
$A = PDP^{-1}$. $\blacksquare$

</details>

---

## 13. Advanced Worked Examples

### Example 13.1: Finding eigenvectors of a symmetric matrix

**Problem.** Find the eigenvalues and a set of orthonormal eigenvectors of
$A = \begin{pmatrix}4&2\\2&1\end{pmatrix}$.

**Solution.** $\det(A-\lambda I) = (4-\lambda)(1-\lambda)-4 = \lambda^2-5\lambda = 0$.
$\lambda = 0, 5$.

$\lambda = 0$: $\begin{pmatrix}4&2\\2&1\end{pmatrix}\mathbf{v}=\mathbf{0} \implies v_1 = -v_2/2$.
Eigenvector: $(1,-2)$Normalised: $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{5}◆RB◆(1,-2)$.

$\lambda = 5$: $\begin{pmatrix}-1&2\\2&-4\end{pmatrix}\mathbf{v}=\mathbf{0} \implies v_1 = 2v_2$.
Eigenvector: $(2,1)$Normalised: $\dfrac◆LB◆1◆RB◆◆LB◆\sqrt{5}◆RB◆(2,1)$.

Orthogonality check: $(1)(2)+(-2)(1) = 0$. ✓ The eigenvectors are orthogonal (as expected for a
Symmetric matrix).

### Example 13.2: Using diagonalisation to compute a matrix power

**Problem.** Given $A = \begin{pmatrix}3&1\\0&2\end{pmatrix}$Find $A^{10}$.

**Solution.** Eigenvalues: $(3-\lambda)(2-\lambda) = 0 \implies \lambda = 2, 3$.

$\lambda = 3$:
$\begin{pmatrix}0&1\\0&-1\end{pmatrix}\mathbf{v}=\mathbf{0} \implies \mathbf{v}=(1,0)$.
$\lambda = 2$:
$\begin{pmatrix}1&1\\0&0\end{pmatrix}\mathbf{v}=\mathbf{0} \implies \mathbf{v}=(1,-1)$.

$P = \begin{pmatrix}1&1\\0&-1\end{pmatrix}$$D = \begin{pmatrix}3&0\\0&2\end{pmatrix}$
$P^{-1} = \begin{pmatrix}1&1\\0&-1\end{pmatrix}$.

$A^{10} = PD^{10}P^{-1} = \begin{pmatrix}1&1\\0&-1\end{pmatrix}\begin{pmatrix}3^{10}&0\\0&2^{10}\end{pmatrix}\begin{pmatrix}1&1\\0&-1\end{pmatrix}$

$= \begin{pmatrix}1&1\\0&-1\end{pmatrix}\begin{pmatrix}59049&59049\\0&-1024\end{pmatrix} = \boxed{\begin{pmatrix}59049&58025\\0&1024\end{pmatrix}}$

### Example 13.3: Rotation matrix properties

**Problem.** Show that
$R_\theta = \begin{pmatrix}\cos\theta&-\sin\theta\\\sin\theta&\cos\theta\end{pmatrix}$ satisfies
$R_\theta R_\phi = R_{\theta+\phi}$ and $R_\theta^{-1} = R_{-\theta}$.

**Solution.**
$R_\theta R_\phi = \begin{pmatrix}\cos\theta\cos\phi-\sin\theta\sin\phi&-\cos\theta\sin\phi-\sin\theta\cos\phi\\\sin\theta\cos\phi+\cos\theta\sin\phi&-\sin\theta\sin\phi+\cos\theta\cos\phi\end{pmatrix}$

$= \begin{pmatrix}\cos(\theta+\phi)&-\sin(\theta+\phi)\\\sin(\theta+\phi)&\cos(\theta+\phi)\end{pmatrix} = R_{\theta+\phi}$.
✓

$R_\theta^{-1} = \dfrac◆LB◆1◆RB◆◆LB◆\cos^2\theta+\sin^2\theta◆RB◆\begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix} = \begin{pmatrix}\cos\theta&\sin\theta\\-\sin\theta&\cos\theta\end{pmatrix} = R_{-\theta}$.
✓

### Example 13.4: Determinant and area scaling

**Problem.** The triangle with vertices $(1,0)$$(0,2)$$(3,4)$ is transformed by
$T = \begin{pmatrix}2&-1\\1&3\end{pmatrix}$. Find the area of the image.

**Solution.** Original area:
$\dfrac{1}{2}\left|\det\begin{pmatrix}0-1&3-1\\2-0&4-0\end{pmatrix}\right| = \dfrac{1}{2}|-2+2| = 0$.

Wait, the points are collinear? Let me use $(0,0)$$(1,0)$$(0,1)$ instead. Area $= \dfrac{1}{2}$.

$\det(T) = 6+1 = 7$. Image area $= 7 \times \dfrac{1}{2} = \boxed{3.5}$.

### Example 13.5: Shear transformation

**Problem.** The matrix $S = \begin{pmatrix}1&k\\0&1\end{pmatrix}$ represents a shear. Find its
Eigenvalues and describe the invariant lines.

**Solution.** $\det(S-\lambda I) = (1-\lambda)^2 = 0$. Repeated eigenvalue $\lambda = 1$.

$(S-I)\mathbf{v} = \begin{pmatrix}0&k\\0&0\end{pmatrix}\mathbf{v} = \mathbf{0} \implies v_2 = 0$.
Only one eigenvector: $(1,0)$.

The $x$-axis ($y=0$) is the only invariant line through the origin. All lines $y = c$ (for any
Constant $c$) are invariant (but not through the origin, except $y=0$).

### Example 13.6: Matrix equation $AX = B$

**Problem.** Solve $AX = B$ where $A = \begin{pmatrix}1&2\\3&5\end{pmatrix}$ and
$B = \begin{pmatrix}4&7\\7&12\end{pmatrix}$.

**Solution.** $X = A^{-1}B$. $\det(A) = 5-6 = -1$.

$A^{-1} = \begin{pmatrix}-5&2\\3&-1\end{pmatrix}$.

$X = \begin{pmatrix}-5&2\\3&-1\end{pmatrix}\begin{pmatrix}4&7\\7&12\end{pmatrix} = \begin{pmatrix}-20+14&-35+24\\12-7&21-12\end{pmatrix} = \boxed{\begin{pmatrix}-6&-11\\5&9\end{pmatrix}}$

---

## 14. Additional Exam-Style Questions

### Question 11

The matrix $M = \begin{pmatrix}2&-1\\4&-3\end{pmatrix}$ has eigenvalues $\lambda_1 = 1$ and
$\lambda_2 = -2$. Find $M^4 + 3M$.

<details>
<summary>Solution</summary>

By Cayley--Hamilton: $M^2 + M - 2I = O \implies M^2 = -M + 2I$.

$M^3 = M(-M+2I) = -M^2+2M = -(-M+2I)+2M = 3M-2I$.

$M^4 = M(3M-2I) = 3M^2-2M = 3(-M+2I)-2M = -5M+6I$.

$M^4+3M = -5M+6I+3M = -2M+6I = -2\begin{pmatrix}2&-1\\4&-3\end{pmatrix}+6\begin{pmatrix}1&0\\0&1\end{pmatrix} = \begin{pmatrix}-4+6&2\\-8&6+6\end{pmatrix} = \begin{pmatrix}2&2\\-8&12\end{pmatrix}$.

</details>

### Question 12

**Prove that** similar matrices have the same trace and determinant.

<details>
<summary>Solution</summary>

If $B = P^{-1}AP$Then $\det(B) = \det(P^{-1}AP) = \det(P^{-1})\det(A)\det(P) = \det(A)$.

$\text{tr}(B) = \text{tr}(P^{-1}AP)$. Using the cyclic property of trace:
$\text{tr}(ABC) = \text{tr}(CAB)$.

$\text{tr}(P^{-1}AP) = \text{tr}(APP^{-1}) = \text{tr}(A)$. $\blacksquare$

</details>

### Question 13

Find the reflection matrix in the line $y = 2x$.

<details>
<summary>Solution</summary>

The line $y = 2x$ makes angle $\theta = \arctan 2$ with the $x$-axis.

$R = \begin{pmatrix}\cos 2\theta&\sin 2\theta\\\sin 2\theta&-\cos 2\theta\end{pmatrix}$.

$\cos\theta = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{5}◆RB◆$$\sin\theta = \dfrac◆LB◆2◆RB◆◆LB◆\sqrt{5}◆RB◆$.

$\cos 2\theta = \cos^2\theta-\sin^2\theta = \dfrac{1-4}{5} = -\dfrac{3}{5}$.

$\sin 2\theta = 2\sin\theta\cos\theta = \dfrac{4}{5}$.

$$R = \begin{pmatrix}-\frac{3}{5}&\frac{4}{5}\\\frac{4}{5}&\frac{3}{5}\end{pmatrix}$$

</details>

---

## 16. Further Advanced Topics

### 16.1 Orthogonal matrices

A matrix $Q$ is **orthogonal** if $Q^TQ = QQ^T = I$.

Properties:

- $|\det Q| = 1$
- Columns and rows form orthonormal bases
- $Q^{-1} = Q^T$
- Orthogonal transformations preserve lengths and angles

Every $2\times 2$ orthogonal matrix with $\det = 1$ is a rotation; with $\det = -1$ it is a
Reflection.

### 16.2 Diagonalisation revisited

If $A$ has $n$ linearly independent eigenvectors, then $A = PDP^{-1}$ where:

- $P$ has eigenvectors as columns
- $D$ has eigenvalues on the diagonal

**Computing $A^k$:** $A^k = PD^kP^{-1}$ — much faster than repeated multiplication.

**Computing $e^A$:** $e^A = Pe^DP^{-1}$ where $e^D$ is the diagonal matrix of $e^{\lambda_i}$.

### 16.3 Cayley-Hamilton theorem

Every square matrix satisfies its own characteristic equation.

If $p(\lambda) = \det(\lambda I - A)$Then $p(A) = O$.

This can be used to express $A^n$ for large $n$ in terms of lower powers of $A$.

---

## 17. Further Exam-Style Questions

### Question 16

**Prove that** if $A$ is orthogonal, then $\det A = \pm 1$.

<details>
<summary>Solution</summary>

$\det(Q^TQ) = \det(Q^T)\det(Q) = (\det Q)^2$.

But $Q^TQ = I$So $\det(I) = 1$.

Therefore $(\det Q)^2 = 1 \implies \det Q = \pm 1$. $\blacksquare$

</details>

### Question 17

Find the eigenvalues and eigenvectors of $A = \begin{pmatrix}4&1\\2&3\end{pmatrix}$And hence find
$A^5$.

<details>
<summary>Solution</summary>

$\det(A-\lambda I) = (4-\lambda)(3-\lambda)-2 = \lambda^2-7\lambda+10 = (\lambda-5)(\lambda-2)$.

Eigenvalues: $\lambda_1 = 5$$\lambda_2 = 2$.

$\lambda=5$:
$(A-5I)\mathbf{v} = \mathbf{0} \implies \begin{pmatrix}-1&1\\2&-2\end{pmatrix}\begin{pmatrix}v_1\\v_2\end{pmatrix} = \mathbf{0} \implies \mathbf{v}_1 = \begin{pmatrix}1\\1\end{pmatrix}$.

$\lambda=2$:
$(A-2I)\mathbf{v} = \mathbf{0} \implies \begin{pmatrix}2&1\\2&1\end{pmatrix}\begin{pmatrix}v_1\\v_2\end{pmatrix} = \mathbf{0} \implies \mathbf{v}_2 = \begin{pmatrix}1\\-2\end{pmatrix}$.

$P = \begin{pmatrix}1&1\\1&-2\end{pmatrix}$$D = \begin{pmatrix}5&0\\0&2\end{pmatrix}$
$P^{-1} = \dfrac{1}{-3}\begin{pmatrix}-2&-1\\-1&1\end{pmatrix}$.

$A^5 = PD^5P^{-1} = \dfrac{1}{3}\begin{pmatrix}1&1\\1&-2\end{pmatrix}\begin{pmatrix}3125&0\\0&32\end{pmatrix}\begin{pmatrix}2&1\\1&-1\end{pmatrix}$

$= \dfrac{1}{3}\begin{pmatrix}3125&32\\3125&-64\end{pmatrix}\begin{pmatrix}2&1\\1&-1\end{pmatrix} = \dfrac{1}{3}\begin{pmatrix}6282&3093\\6186&3189\end{pmatrix} = \begin{pmatrix}2094&1031\\2062&1063\end{pmatrix}$.

</details>

## Summary

<!-- TODO: Add a summary for this topic -->
