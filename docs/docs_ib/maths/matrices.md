---
title: Matrices
description:
  IB Mathematics — matrix operations, determinants, inverses, transformations, and eigenvalues.
slug: matrices
---

## Matrix Fundamentals

### Definition and Notation

An $m \times n$ matrix $A$ is a rectangular array of real numbers with $m$ rows and $n$ columns:

$$A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}$$

The entry in row $i$ and column $j$ is $a_{ij}$. When $m = n$, $A$ is a **square matrix** of order
$n$.

The **identity matrix** $I_n$ is the $n \times n$ matrix with $1$s on the diagonal and $0$s
elsewhere. For any compatible matrix $A$: $AI = IA = A$.

---

## Matrix Operations

### Addition and Scalar Multiplication

If $A, B \in \mathcal{M}_{m \times n}(\mathbb{R})$ and $\lambda \in \mathbb{R}$:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda \cdot a_{ij}$$

### Matrix Multiplication

If $A$ is $m \times p$ and $B$ is $p \times n$, the product $C = AB$ is $m \times n$ with:

$$c_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj}$$

**Key properties:**

- **Associative:** $(AB)C = A(BC)$
- **Distributive:** $A(B + C) = AB + AC$
- **NOT commutative:** $AB \ne BA$ in general
- **Transpose of product:** $(AB)^T = B^T A^T$

### Transpose

The **transpose** $A^T$ is obtained by reflecting $A$ across its main diagonal:
$(A^T)_{ij} = a_{ji}$.

**Properties:**

- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(\lambda A)^T = \lambda A^T$
- $(AB)^T = B^T A^T$

---

## Determinants

### $2 \times 2$ Determinant

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

### $3 \times 3$ Determinant

Expand along any row or column. Expanding along row 1:

$$\det(A) = a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}$$

The signs follow the checkerboard pattern $+ - +$ along row 1, $- + -$ along row 2, etc.

### Properties of Determinants

- $\det(AB) = \det(A)\det(B)$
- $\det(A^T) = \det(A)$
- $\det(\lambda A) = \lambda^n \det(A)$ for an $n \times n$ matrix
- Swapping two rows multiplies the determinant by $-1$
- A matrix with a zero row (or column) has determinant $0$
- A triangular matrix has determinant equal to the product of its diagonal entries

### Singular and Non-Singular Matrices

A square matrix $A$ is **singular** if $\det(A) = 0$ and **non-singular** (invertible) if
$\det(A) \ne 0$.

---

## Inverse Matrices

### Definition

The **inverse** of a square matrix $A$ is the matrix $A^{-1}$ satisfying:

$$AA^{-1} = A^{-1}A = I$$

$A$ is invertible if and only if $\det(A) \ne 0$.

### $2 \times 2$ Inverse

$$A^{-1} = \frac{1}{\det(A)}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

### Adjugate Method ($3 \times 3$)

$$A^{-1} = \frac{1}{\det(A)} \cdot \mathrm{adj}(A)$$

where the **adjugate** (classical adjoint) is the transpose of the cofactor matrix. The
$(i, j)$-cofactor is $C_{ij} = (-1)^{i+j} M_{ij}$, where $M_{ij}$ is the $(i, j)$-minor (determinant
of the submatrix obtained by deleting row $i$ and column $j$).

### Properties of Inverses

- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$
- $(A^T)^{-1} = (A^{-1})^T$
- $(\lambda A)^{-1} = \dfrac{1}{\lambda} A^{-1}$, $\lambda \ne 0$

---

## Solving Systems of Linear Equations

### Matrix Form

A system of $n$ linear equations in $n$ unknowns:

$$A\mathbf{x} = \mathbf{b}$$

has the unique solution $\mathbf{x} = A^{-1}\mathbf{b}$ when $\det(A) \ne 0$.

### Cramer's Rule

For the system $A\mathbf{x} = \mathbf{b}$ where $A$ is $n \times n$ and $\det(A) \ne 0$:

$$x_i = \frac{\det(A_i)}{\det(A)}$$

where $A_i$ is the matrix $A$ with column $i$ replaced by $\mathbf{b}$.

### Gaussian Elimination

For larger systems, use elementary row operations to reduce the augmented matrix
$[A \mid \mathbf{b}]$ to row echelon form, then solve by back-substitution. The three elementary
operations are:

1. Swap two rows ($R_i \leftrightarrow R_j$)
2. Multiply a row by a nonzero scalar ($R_i \to kR_i$)
3. Add a multiple of one row to another ($R_i \to R_i + kR_j$)

### Existence and Uniqueness

- $\det(A) \ne 0$: unique solution
- $\det(A) = 0$ and system is consistent: infinitely many solutions
- $\det(A) = 0$ and system is inconsistent: no solution

---

## Geometric Transformations

### $2 \times 2$ Transformation Matrices

Each transformation matrix $T$ maps a point $(x, y)$ to a new point by left-multiplication:

$$\begin{pmatrix} x' \\ y' \end{pmatrix} = T\begin{pmatrix} x \\ y \end{pmatrix}$$

| Transformation                         | Matrix                                                                              |
| :------------------------------------- | :---------------------------------------------------------------------------------- |
| Reflection in $x$-axis                 | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$                                     |
| Reflection in $y$-axis                 | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$                                     |
| Reflection in $y = x$                  | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$                                      |
| Rotation by $\theta$ about origin      | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Enlargement by factor $k$              | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$                                      |
| Horizontal stretch by factor $k$       | $\begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}$                                      |
| Vertical stretch by factor $k$         | $\begin{pmatrix} 1 & 0 \\ 0 & k \end{pmatrix}$                                      |
| Shear parallel to $x$-axis, factor $k$ | $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$                                      |

### Determinant and Area

For a $2 \times 2$ transformation matrix $T$:

- $|\det(T)|$ is the **area scale factor**
- $\det(T) \gt 0$: orientation preserved
- $\det(T) \lt 0$: orientation reversed

### Composition of Transformations

Applying transformation $A$ followed by $B$ corresponds to the matrix product $BA$ (right to left
order):

$$\mathbf{v}' = B(A\mathbf{v}) = (BA)\mathbf{v}$$

### Invariant Points and Lines

An **invariant point** satisfies $T\mathbf{v} = \mathbf{v}$, i.e. $(T - I)\mathbf{v} = \mathbf{0}$.
An **invariant line** is mapped to itself (points may move along the line).

---

## Eigenvalues and Eigenvectors (HL)

### Definition

Let $A$ be an $n \times n$ matrix. A scalar $\lambda$ is an **eigenvalue** of $A$ if there exists a
nonzero vector $\mathbf{v}$ (an **eigenvector**) such that:

$$A\mathbf{v} = \lambda\mathbf{v}$$

Geometrically, $A$ stretches or compresses the eigenvector $\mathbf{v}$ by factor $\lambda$ without
changing its direction.

### Characteristic Equation

Rearranging $A\mathbf{v} = \lambda\mathbf{v}$ gives $(A - \lambda I)\mathbf{v} = \mathbf{0}$. For a
nonzero solution $\mathbf{v}$, we require:

$$\det(A - \lambda I) = 0$$

This is the **characteristic equation**. Its roots are the eigenvalues of $A$.

For a $2 \times 2$ matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$\det\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = 0$$

$$\lambda^2 - (a + d)\lambda + (ad - bc) = 0$$

Note: $a + d = \mathrm{tr}(A)$ (the trace) and $ad - bc = \det(A)$, so:

$$\lambda^2 - \mathrm{tr}(A)\,\lambda + \det(A) = 0$$

### Finding Eigenvectors

For each eigenvalue $\lambda_i$, substitute into $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$ and
solve for $\mathbf{v}$. The solution space is the **eigenspace** corresponding to $\lambda_i$.

### Properties

- The trace equals the sum of eigenvalues: $\mathrm{tr}(A) = \sum \lambda_i$
- The determinant equals the product of eigenvalues: $\det(A) = \prod \lambda_i$
- If $A$ is symmetric ($A = A^T$), all eigenvalues are real and eigenvectors corresponding to
  distinct eigenvalues are orthogonal.
- If $A$ has $n$ linearly independent eigenvectors, it is **diagonalisable**: $A = PDP^{-1}$ where
  $D$ is diagonal with eigenvalues on the diagonal.

### Diagonalisation (HL Extension)

If $A$ has eigenvalues $\lambda_1, \ldots, \lambda_n$ and corresponding eigenvectors
$\mathbf{v}_1, \ldots, \mathbf{v}_n$ forming a linearly independent set, then:

$$A = PDP^{-1}$$

where $P = \begin{pmatrix} \mathbf{v}_1 & \cdots & \mathbf{v}_n \end{pmatrix}$ and
$D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$.

This is useful for computing large powers: $A^n = PD^nP^{-1}$.

---

## Common Pitfalls

1. **Matrix multiplication order.** $AB \ne BA$ in general. When composing transformations, the
   rightmost matrix is applied first.

2. **Transpose of a product.** $(AB)^T = B^T A^T$, not $A^T B^T$. The order reverses.

3. **Determinant of a scalar multiple.** $\det(kA) = k^n\det(A)$ for an $n \times n$ matrix, not
   $k\det(A)$.

4. **Forgetting to check invertibility.** Only non-singular matrices have inverses. Always verify
   $\det(A) \ne 0$ before attempting to compute $A^{-1}$.

5. **Eigenvector scaling.** Eigenvectors are determined only up to a nonzero scalar multiple. Any
   nonzero multiple of an eigenvector is also an eigenvector.

6. **Confusing invariant points with fixed points of composition.** A point fixed by $A$ is not
   necessarily fixed by $BA$.

7. **Cofactor sign errors.** The $(i, j)$-cofactor sign is $(-1)^{i+j}$. Losing track of the sign
   pattern is the most common error in computing adjugates.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Let $A = \begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & -1 \\ 2 & 0 \end{pmatrix}$. Find $AB$ and $BA$. Is $AB = BA$?

</details>

<details>
<summary>Problem 2</summary>

Find $\det(A)$ and $A^{-1}$ where
$A = \begin{pmatrix} 1 & 2 & 0 \\ 3 & 1 & -1 \\ 2 & 0 & 1 \end{pmatrix}$.

</details>

<details>
<summary>Problem 3</summary>

Solve the system using an inverse matrix: $$x + 2y = 5$$ $$3x + 7y = 18$$

</details>

<details>
<summary>Problem 4</summary>

Find the matrix representing a rotation of $90^\circ$ anticlockwise about the origin, and verify
that applying it twice gives a rotation of $180^\circ$.

</details>

<details>
<summary>Problem 5</summary>

Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

</details>

<details>
<summary>Problem 6</summary>

The transformation represented by matrix $T = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$ is
applied to the unit square. Find the area of the image.

</details>

<details>
<summary>Problem 7</summary>

Use Cramer's rule to solve: $$2x - y + z = 3$$ $$x + 3y - z = 1$$ $$3x + y + 2z = 7$$

</details>

<details>
<summary>Problem 8</summary>

For the matrix $A = \begin{pmatrix} 5 & -6 \\ 2 & -2 \end{pmatrix}$, find $A^{10}$ by
diagonalisation.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:** $AB = \begin{pmatrix} 8 & -2 \\ 9 & -1 \end{pmatrix}$,
$BA = \begin{pmatrix} 1 & -1 \\ 4 & 6 \end{pmatrix}$. $AB \ne BA$, confirming non-commutativity.

**Problem 2:** Expanding along row 1: $\det(A) = 1(1 - 0) - 2(3 - (-2)) + 0 = 1 - 10 = -9$.
Cofactors:
$C_{11} = 1, C_{12} = -5, C_{13} = -2, C_{21} = -2, C_{22} = 1, C_{23} = 4, C_{31} = -2, C_{32} = 1, C_{33} = -5$.
$A^{-1} = \dfrac{1}{-9}\begin{pmatrix} 1 & 2 & -2 \\ -5 & 1 & 1 \\ -2 & 4 & -5 \end{pmatrix} = \begin{pmatrix} -1/9 & -2/9 & 2/9 \\ 5/9 & -1/9 & -1/9 \\ 2/9 & -4/9 & 5/9 \end{pmatrix}$.

**Problem 3:** $A = \begin{pmatrix} 1 & 2 \\ 3 & 7 \end{pmatrix}$, $\det(A) = 7 - 6 = 1$.
$A^{-1} = \begin{pmatrix} 7 & -2 \\ -3 & 1 \end{pmatrix}$.
$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 7 & -2 \\ -3 & 1 \end{pmatrix}\begin{pmatrix} 5 \\ 18 \end{pmatrix} = \begin{pmatrix} 35 - 36 \\ -15 + 18 \end{pmatrix} = \begin{pmatrix} -1 \\ 3 \end{pmatrix}$.
So $x = -1, y = 3$.

**Problem 4:** Rotation by $90^\circ$: $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$.
$R^2 = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$,
which is a $180^\circ$ rotation.

**Problem 5:** Characteristic equation: $\lambda^2 - 7\lambda + 10 = 0$, so $\lambda = 2$ or
$\lambda = 5$. For $\lambda = 2$:
$(A - 2I)\mathbf{v} = \mathbf{0} \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies \mathbf{v} = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$
(up to scalar). For $\lambda = 5$:
$(A - 5I)\mathbf{v} = \mathbf{0} \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies \mathbf{v} = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Problem 6:** Area $= |\det(T)| = |6 - 0| = 6$.

</details>
