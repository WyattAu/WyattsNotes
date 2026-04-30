---
title: Matrices and Linear Transformations
description: IB Mathematics — matrix operations, determinants, inverses, solving systems, geometric transformations, and eigenvalues.
slug: matrices-and-linear-transformations
---

## Matrix Operations

### Notation

An $m \times n$ matrix $A$ has $m$ rows and $n$ columns. The entry in row $i$, column $j$ is $a_{ij}$.

### Addition and Scalar Multiplication

For $A, B \in \mathcal{M}_{m \times n}(\mathbb{R})$ and $\lambda \in \mathbb{R}$:

$$(A + B)_{ij} = a_{ij} + b_{ij}, \qquad (\lambda A)_{ij} = \lambda a_{ij}$$

### Matrix Multiplication

If $A$ is $m \times p$ and $B$ is $p \times n$, the product $C = AB$ is $m \times n$ with:

$$c_{ij} = \sum_{k=1}^{p} a_{ik}b_{kj}$$

**Key properties:**

- $(AB)C = A(BC)$ (associative)
- $A(B + C) = AB + AC$ (distributive)
- $AB \ne BA$ in general (not commutative)
- $(AB)^T = B^T A^T$

**Example.** If $A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$ and $B = \begin{pmatrix} 5 & 6 \\ 7 & 8 \end{pmatrix}$:

$$AB = \begin{pmatrix} 1 \cdot 5 + 2 \cdot 7 & 1 \cdot 6 + 2 \cdot 8 \\ 3 \cdot 5 + 4 \cdot 7 & 3 \cdot 6 + 4 \cdot 8 \end{pmatrix} = \begin{pmatrix} 19 & 22 \\ 43 & 50 \end{pmatrix}$$

$$BA = \begin{pmatrix} 23 & 34 \\ 31 & 46 \end{pmatrix} \ne AB$$

---

## Determinants

### $2 \times 2$ Determinant

$$\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$$

### $3 \times 3$ Determinant (Cofactor Expansion)

$$\det A = a_{11}\begin{vmatrix} a_{22} & a_{23} \\ a_{32} & a_{33} \end{vmatrix} - a_{12}\begin{vmatrix} a_{21} & a_{23} \\ a_{31} & a_{33} \end{vmatrix} + a_{13}\begin{vmatrix} a_{21} & a_{22} \\ a_{31} & a_{32} \end{vmatrix}$$

**Example.** $\det\begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & -1 \\ 2 & 4 & 1 \end{pmatrix}$

$$= 1\begin{vmatrix} 1 & -1 \\ 4 & 1 \end{vmatrix} - 0 + 2\begin{vmatrix} 3 & 1 \\ 2 & 4 \end{vmatrix} = 1(1 + 4) + 2(12 - 2) = 5 + 20 = 25$$

### Properties

- $\det(AB) = \det(A)\det(B)$
- $\det(A^T) = \det(A)$
- $\det(\lambda A) = \lambda^n \det(A)$ for $n \times n$ matrix $A$
- Swapping two rows multiplies the determinant by $-1$
- If two rows are equal, $\det(A) = 0$
- $\det(A) = 0$ if and only if $A$ is **singular** (non-invertible)

---

## Matrix Inverses

### Definition

If $A$ is a square matrix, its inverse $A^{-1}$ satisfies:

$$AA^{-1} = A^{-1}A = I$$

$A$ is invertible if and only if $\det(A) \ne 0$.

### $2 \times 2$ Inverse

$$A^{-1} = \frac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$$

**Example.** Find the inverse of $A = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$.

$\det(A) = 6 - 5 = 1 \ne 0$, so $A$ is invertible.

$$A^{-1} = \begin{pmatrix} 2 & -1 \\ -5 & 3 \end{pmatrix}$$

### Inverse via Row Reduction (Gauss-Jordan)

To find $A^{-1}$, augment $A$ with $I$ and apply row operations:

$$\left[\,A \mid I\,\right] \xrightarrow{\mathrm{row\ ops}} \left[\,I \mid A^{-1}\,\right]$$

If the left half reduces to $I$, the right half is $A^{-1}$. If the left half has a zero row, $A$ is
singular.

**Example.** Find $A^{-1}$ for $A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 0 & 0 & 1 \end{pmatrix}$.

Since $A$ is upper triangular, $\det(A) = 1 \cdot 1 \cdot 1 = 1$.

$$\left[\begin{array}{ccc|ccc} 1 & 2 & 3 & 1 & 0 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array}\right]$$

$R_1 \to R_1 - 2R_2$:

$$\left[\begin{array}{ccc|ccc} 1 & 0 & -5 & 1 & -2 & 0 \\ 0 & 1 & 4 & 0 & 1 & 0 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array}\right]$$

$R_1 \to R_1 + 5R_3$, $R_2 \to R_2 - 4R_3$:

$$\left[\begin{array}{ccc|ccc} 1 & 0 & 0 & 1 & -2 & 5 \\ 0 & 1 & 0 & 0 & 1 & -4 \\ 0 & 0 & 1 & 0 & 0 & 1 \end{array}\right]$$

$$A^{-1} = \begin{pmatrix} 1 & -2 & 5 \\ 0 & 1 & -4 \\ 0 & 0 & 1 \end{pmatrix}$$

---

## Solving Systems of Linear Equations

### Matrix Form

The system $A\mathbf{x} = \mathbf{b}$ where $A$ is $n \times n$:

- **Unique solution:** $\det(A) \ne 0$, giving $\mathbf{x} = A^{-1}\mathbf{b}$
- **No solution or infinitely many:** $\det(A) = 0$

### Cramer's Rule

If $\det(A) \ne 0$, the $i$-th component of the solution is:

$$x_i = \frac{\det(A_i)}{\det(A)}$$

where $A_i$ is $A$ with the $i$-th column replaced by $\mathbf{b}$.

**Example.** Solve $\begin{cases} 2x + y = 5 \\ x - y = 1 \end{cases}$.

$$A = \begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix}, \quad \det(A) = -2 - 1 = -3$$

$$x = \frac{\det\begin{pmatrix} 5 & 1 \\ 1 & -1 \end{pmatrix}}{-3} = \frac{-6}{-3} = 2, \qquad y = \frac{\det\begin{pmatrix} 2 & 5 \\ 1 & 1 \end{pmatrix}}{-3} = \frac{-3}{-3} = 1$$

### Gaussian Elimination

For systems of any size, use **row reduction** to transform the augmented matrix to row echelon
form, then back-substitute.

---

## Geometric Transformations

### $2 \times 2$ Transformation Matrices

Each linear transformation of $\mathbb{R}^2$ can be represented by a $2 \times 2$ matrix.

| Transformation | Matrix | Effect on Area |
| :--- | :--- | :--- |
| Reflection in $x$-axis | $\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$ | Preserved |
| Reflection in $y$-axis | $\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$ | Preserved |
| Reflection in $y = x$ | $\begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$ | Preserved |
| Rotation $\theta$ anticlockwise | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ | Preserved |
| Enlargement by $k$ | $\begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}$ | Scaled by $k^2$ |
| Stretch parallel to $x$-axis by $k$ | $\begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}$ | Scaled by $|k|$ |
| Shear parallel to $x$-axis by $k$ | $\begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}$ | Preserved |

### Composition of Transformations

If transformation $A$ is followed by transformation $B$, the combined transformation is represented
by the matrix product $BA$ (note the order: apply $A$ first, then $B$).

**Example.** Find the matrix for a rotation of $90\,{}^{\circ}$ anticlockwise about the origin,
followed by a reflection in the $x$-axis.

$$A = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \quad \mathrm{(rotation)}, \qquad B = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \quad \mathrm{(reflection)}$$

$$BA = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}$$

This is equivalent to a reflection in the line $y = -x$.

### Invariant Points and Lines

An **invariant point** satisfies $A\mathbf{x} = \mathbf{x}$, i.e. $(A - I)\mathbf{x} = \mathbf{0}$.
An **invariant line** is a line mapped to itself (points on the line may move along it).

---

## Eigenvalues and Eigenvectors

### Definition

For a square matrix $A$, a scalar $\lambda$ is an **eigenvalue** if there exists a non-zero vector
$\mathbf{v}$ such that:

$$A\mathbf{v} = \lambda\mathbf{v}$$

The vector $\mathbf{v}$ is the corresponding **eigenvector**.

### Characteristic Equation

$$\det(A - \lambda I) = 0$$

This is a polynomial equation of degree $n$ in $\lambda$ whose roots are the eigenvalues.

### Finding Eigenvectors

For each eigenvalue $\lambda_i$, solve $(A - \lambda_i I)\mathbf{v} = \mathbf{0}$.

### Worked Examples

**Example.** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

Characteristic equation:

$$\det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = (4 - \lambda)(3 - \lambda) - 2 = \lambda^2 - 7\lambda + 10 = 0$$

$$(\lambda - 5)(\lambda - 2) = 0 \implies \lambda_1 = 5, \quad \lambda_2 = 2$$

For $\lambda_1 = 5$: $(A - 5I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies -x + y = 0 \implies y = x$$

Eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (or any scalar multiple).

For $\lambda_2 = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$:

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies 2x + y = 0 \implies y = -2x$$

Eigenvector: $\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### Diagonalisation

If $A$ has $n$ linearly independent eigenvectors, it can be **diagonalised**:

$$A = PDP^{-1}$$

where $D$ is the diagonal matrix of eigenvalues and $P$ has eigenvectors as columns.

**Applications:**

- Computing $A^n$ efficiently: $A^n = PD^nP^{-1}$
- Solving systems of differential equations
- Principal component analysis (statistics)

### Trace and Determinant

For a $2 \times 2$ matrix with eigenvalues $\lambda_1, \lambda_2$:

$$\mathrm{tr}(A) = \lambda_1 + \lambda_2 = a_{11} + a_{22}$$

$$\det(A) = \lambda_1 \lambda_2$$

### $3 \times 3$ Eigenvalue Example

**Example.** Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & -1 \\ 0 & -1 & 3 \end{pmatrix}$.

Characteristic equation:

$$\det\begin{pmatrix} 2 - \lambda & 0 & 0 \\ 0 & 3 - \lambda & -1 \\ 0 & -1 & 3 - \lambda \end{pmatrix} = (2 - \lambda)\bigl[(3 - \lambda)^2 - 1\bigr] = 0$$

$$(2 - \lambda)(\lambda^2 - 6\lambda + 8) = (2 - \lambda)(\lambda - 2)(\lambda - 4) = 0$$

$\lambda_1 = 2$ (algebraic multiplicity 2), $\lambda_2 = 4$.

For $\lambda = 2$: $(A - 2I)\mathbf{v} = \mathbf{0}$ gives $\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & -1 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0}$,
so $v_2 = v_3$ with $v_1$ free. Two linearly independent eigenvectors: $\mathbf{v}_1 = (1, 0, 0)$
and $\mathbf{v}_2 = (0, 1, 1)$.

For $\lambda = 4$: $(A - 4I)\mathbf{v} = \mathbf{0}$ gives $-v_2 - v_3 = 0$ and $-v_1 = 0$,
so $\mathbf{v}_3 = (0, 1, -1)$.

The matrix is diagonalisable: $P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 1 & -1 \end{pmatrix}$,
$D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$.

---

## Solving Systems Using Row Reduction

### Augmented Matrix Method

For a system of $m$ equations in $n$ unknowns, write the augmented matrix $[A | \mathbf{b}]$ and apply
elementary row operations to reach row echelon form.

**Elementary row operations:**

1. Swap two rows ($R_i \leftrightarrow R_j$).
2. Multiply a row by a non-zero scalar ($R_i \to kR_i$).
3. Add a multiple of one row to another ($R_i \to R_i + kR_j$).

### Example: Three Equations in Three Unknowns

Solve the system:

$$x + 2y - z = 3$$
$$2x - y + z = 1$$
$$3x + y + 2z = 10$$

Augmented matrix:

$$\left[\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & -1 & 1 & 1 \\ 3 & 1 & 2 & 10 \end{array}\right]$$

$R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - 3R_1$:

$$\left[\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & -5 & 3 & -5 \\ 0 & -5 & 5 & 1 \end{array}\right]$$

$R_3 \to R_3 - R_2$:

$$\left[\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & -5 & 3 & -5 \\ 0 & 0 & 2 & 6 \end{array}\right]$$

Back-substitute: $2z = 6 \implies z = 3$. Then $-5y + 9 = -5 \implies y = 14/5 = 2.8$.
Then $x + 5.6 - 3 = 3 \implies x = 0.4$.

Solution: $(x, y, z) = (2/5,\, 14/5,\, 3)$.

### Nature of Solutions

For an $n \times n$ system $A\mathbf{x} = \mathbf{b}$:

| $\det(A)$ | Rank | Solutions |
| :--- | :--- | :--- |
| $\ne 0$ | $n$ | Unique solution |
| $= 0$ and consistent | $\lt n$ | Infinitely many solutions |
| $= 0$ and inconsistent | — | No solution |

---

## $3 \times 3$ Determinant and Inverse

### Cofactor Expansion Along Any Row or Column

The determinant can be computed by expanding along any row $i$:

$$\det(A) = \sum_{j=1}^{n} (-1)^{i+j}\, a_{ij}\, M_{ij}$$

where $M_{ij}$ is the minor (determinant of the submatrix obtained by removing row $i$ and column $j$).
Choosing a row or column with the most zeros minimises computation.

### Adjugate Method for $3 \times 3$ Inverse

$$A^{-1} = \frac{1}{\det(A)}\,\mathrm{adj}(A)$$

where the **adjugate** (adjoint) matrix is the transpose of the cofactor matrix.

**Example.** Find $A^{-1}$ for $A = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}$.

$\det(A) = 1(1 - 0) - 2(0 - 3) + 0 = 1 + 6 = 7$.

Cofactor matrix: $C = \begin{pmatrix} 1 & 3 & -1 \\ -2 & 1 & 2 \\ 6 & -3 & 1 \end{pmatrix}$.

$\mathrm{adj}(A) = C^T = \begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$.

$$A^{-1} = \frac{1}{7}\begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$$

---

## Applications of Eigenvalues

### Powers of Matrices

If $A = PDP^{-1}$, then $A^n = PD^nP^{-1}$, where $D^n$ is trivial to compute (just raise diagonal
entries to the $n$-th power).

**Example.** Compute $A^{10}$ for $A = \begin{pmatrix} 3 & 1 \\ 2 & 4 \end{pmatrix}$.

From earlier, $\lambda_1 = 5$, $\lambda_2 = 2$, $P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}$.

$$D^{10} = \begin{pmatrix} 5^{10} & 0 \\ 0 & 2^{10} \end{pmatrix}$$

$$A^{10} = PD^{10}P^{-1}$$

### Systems of Differential Equations

The system $\dfrac{d\mathbf{x}}{dt} = A\mathbf{x}$ has solution $\mathbf{x}(t) = e^{At}\mathbf{x}(0)$,
which can be evaluated using diagonalisation: $e^{At} = Pe^{Dt}P^{-1}$.

:::warning Common Pitfall

A matrix is diagonalisable if and only if it has a full set of linearly independent eigenvectors. A
matrix with repeated eigenvalues may or may not be diagonalisable. For example,
$\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has eigenvalue $1$ with algebraic multiplicity $2$ but
geometric multiplicity $1$; it is not diagonalisable.

:::

---

## Additional Worked Examples

**Worked Example: $3 \times 3$ System with No Unique Solution**

Determine the nature of solutions for the system:

$$x + 2y + 3z = 4$$
$$2x + 4y + 6z = 8$$
$$x - y + z = 1$$

<details>
<summary>Solution</summary>

Augmented matrix:

$$\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 2 & 4 & 6 & 8 \\ 1 & -1 & 1 & 1 \end{array}\right]$$

$R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - R_1$:

$$\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & 0 & 0 & 0 \\ 0 & -3 & -2 & -3 \end{array}\right]$$

Swap $R_2$ and $R_3$:

$$\left[\begin{array}{ccc|c} 1 & 2 & 3 & 4 \\ 0 & -3 & -2 & -3 \\ 0 & 0 & 0 & 0 \end{array}\right]$$

Row 2 gives $-3y - 2z = -3$, so $y = \dfrac{3 - 2z}{3} = 1 - \dfrac{2z}{3}$.

Row 1 gives $x + 2\!\left(1 - \dfrac{2z}{3}\right) + 3z = 4$, so $x + 2 - \dfrac{4z}{3} + 3z = 4$,
hence $x = 2 - \dfrac{5z}{3}$.

Let $z = 3t$ (to avoid fractions): $x = 2 - 5t$, $y = 1 - 2t$, $z = 3t$.

The system has infinitely many solutions parametrised by $t \in \mathbb{R}$.

</details>

**Worked Example: Composition of Transformations**

Find the matrix representing an enlargement by scale factor $2$ about the origin, followed by a
reflection in the line $y = x$. Determine the image of the point $(3, 1)$.

<details>
<summary>Solution</summary>

Enlargement by $2$: $E = \begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix}$.

Reflection in $y = x$: $R = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$.

Combined transformation (enlargement first, then reflection): $T = RE$.

$$T = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 2 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}$$

Image of $(3, 1)$:

$$\begin{pmatrix} 0 & 2 \\ 2 & 0 \end{pmatrix}\begin{pmatrix} 3 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 6 \end{pmatrix}$$

The image is $(2, 6)$.

</details>

**Worked Example: $3 \times 3$ Eigenvalues with Complex Roots**

Find the eigenvalues of $A = \begin{pmatrix} 1 & 0 & -1 \\ 0 & 2 & 0 \\ 1 & 0 & 1 \end{pmatrix}$.

<details>
<summary>Solution</summary>

Characteristic equation:

$$\det\begin{pmatrix} 1 - \lambda & 0 & -1 \\ 0 & 2 - \lambda & 0 \\ 1 & 0 & 1 - \lambda \end{pmatrix} = 0$$

Expand along the second row:

$$(2 - \lambda)\begin{vmatrix} 1 - \lambda & -1 \\ 1 & 1 - \lambda \end{vmatrix} = 0$$

$$(2 - \lambda)\bigl[(1 - \lambda)^2 + 1\bigr] = 0$$

$$(2 - \lambda)(\lambda^2 - 2\lambda + 2) = 0$$

From $2 - \lambda = 0$: $\lambda_1 = 2$.

From $\lambda^2 - 2\lambda + 2 = 0$: $\lambda = \dfrac{2 \pm \sqrt{4 - 8}}{2} = 1 \pm i$.

The three eigenvalues are $\lambda = 2$, $\lambda = 1 + i$, $\lambda = 1 - i$.

Since complex eigenvalues of a real matrix come in conjugate pairs, this is consistent. The matrix
is not diagonalisable over $\mathbb{R}$ but is diagonalisable over $\mathbb{C}$.

</details>

**Worked Example: Adjugate Method for $3 \times 3$ Inverse**

Find the inverse of $A = \begin{pmatrix} 2 & 1 & 0 \\ 1 & 3 & 1 \\ 0 & 1 & 2 \end{pmatrix}$ using the
adjugate method.

<details>
<summary>Solution</summary>

First, compute $\det(A)$ by expanding along the first row:

$$\det(A) = 2\begin{vmatrix} 3 & 1 \\ 1 & 2 \end{vmatrix} - 1\begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} + 0 = 2(6 - 1) - 1(2 - 0) = 10 - 2 = 8$$

Now compute the cofactor matrix $C$:

$C_{11} = +\begin{vmatrix} 3 & 1 \\ 1 & 2 \end{vmatrix} = 5$, $C_{12} = -\begin{vmatrix} 1 & 1 \\ 0 & 2 \end{vmatrix} = -2$, $C_{13} = +\begin{vmatrix} 1 & 3 \\ 0 & 1 \end{vmatrix} = 1$

$C_{21} = -\begin{vmatrix} 1 & 0 \\ 1 & 2 \end{vmatrix} = -2$, $C_{22} = +\begin{vmatrix} 2 & 0 \\ 0 & 2 \end{vmatrix} = 4$, $C_{23} = -\begin{vmatrix} 2 & 1 \\ 0 & 1 \end{vmatrix} = -2$

$C_{31} = +\begin{vmatrix} 1 & 0 \\ 3 & 1 \end{vmatrix} = 1$, $C_{32} = -\begin{vmatrix} 2 & 0 \\ 1 & 1 \end{vmatrix} = -2$, $C_{33} = +\begin{vmatrix} 2 & 1 \\ 1 & 3 \end{vmatrix} = 5$

$$C = \begin{pmatrix} 5 & -2 & 1 \\ -2 & 4 & -2 \\ 1 & -2 & 5 \end{pmatrix}$$

$$\mathrm{adj}(A) = C^T = \begin{pmatrix} 5 & -2 & 1 \\ -2 & 4 & -2 \\ 1 & -2 & 5 \end{pmatrix}$$

(Since this matrix is symmetric, $C^T = C$.)

$$A^{-1} = \frac{1}{8}\begin{pmatrix} 5 & -2 & 1 \\ -2 & 4 & -2 \\ 1 & -2 & 5 \end{pmatrix}$$

</details>

**Worked Example: Matrix Power via Diagonalisation**

Compute $A^5$ where $A = \begin{pmatrix} 3 & -1 \\ 2 & 0 \end{pmatrix}$.

<details>
<summary>Solution</summary>

Characteristic equation: $\lambda(\lambda - 3) + 2 = \lambda^2 - 3\lambda + 2 = 0$, so
$(\lambda - 1)(\lambda - 2) = 0$, giving $\lambda_1 = 1$, $\lambda_2 = 2$.

For $\lambda_1 = 1$: $\begin{pmatrix} 2 & -1 \\ 2 & -1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies 2x = y$.
Eigenvector: $\mathbf{v}_1 = \begin{pmatrix} 1 \\ 2 \end{pmatrix}$.

For $\lambda_2 = 2$: $\begin{pmatrix} 1 & -1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies x = y$.
Eigenvector: $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

$$P = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 2 \end{pmatrix}$$

$$P^{-1} = \frac{1}{1 - 2}\begin{pmatrix} 1 & -1 \\ -2 & 1 \end{pmatrix} = \begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix}$$

$$A^5 = PD^5P^{-1} = \begin{pmatrix} 1 & 1 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 32 \end{pmatrix}\begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix}$$

$$= \begin{pmatrix} 1 & 32 \\ 2 & 32 \end{pmatrix}\begin{pmatrix} -1 & 1 \\ 2 & -1 \end{pmatrix} = \begin{pmatrix} -1 + 64 & 1 - 32 \\ -2 + 64 & 2 - 32 \end{pmatrix} = \begin{pmatrix} 63 & -31 \\ 62 & -30 \end{pmatrix}$$

</details>

---

## Common Pitfalls

1. **Matrix multiplication is not commutative.** $AB \ne BA$ in general. When composing
   transformations, the order matters: the matrix for "transform $A$ then transform $B$" is $BA$, not
   $AB$.

2. **Forgetting the factor of $\lambda^n$ in $\det(\lambda A)$.** Scaling a matrix by $\lambda$
   multiplies the determinant by $\lambda^n$, where $n$ is the dimension. A common mistake is to
   write $\det(\lambda A) = \lambda\det(A)$ instead of $\lambda^n\det(A)$.

3. **Wrong sign in the $2 \times 2$ inverse.** The inverse of $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$
   is $\dfrac{1}{ad - bc}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$. The $-b$ and $-c$ are easily
   misplaced.

4. **Confusing algebraic and geometric multiplicity.** The algebraic multiplicity of an eigenvalue is
   its multiplicity as a root of the characteristic equation. The geometric multiplicity is the
   dimension of the corresponding eigenspace. The geometric multiplicity is always less than or equal
   to the algebraic multiplicity.

5. **Assuming every matrix is diagonalisable.** Only matrices with a full set of linearly independent
   eigenvectors can be diagonalised. Matrices with defective eigenvalues (geometric multiplicity less
   than algebraic multiplicity) require the Jordan normal form instead.

6. **Row operation errors in Gauss-Jordan elimination.** When finding the inverse via augmented
   matrices, remember that row operations must be applied to **both** sides simultaneously. A single
   arithmetic mistake propagates through all remaining steps.

7. **Incorrect cofactor signs.** The sign of the cofactor $C_{ij}$ is $(-1)^{i+j}$. This follows a
   checkerboard pattern starting with $+$ in the top-left corner. A common error is to use all
   positive signs.

8. **Misidentifying invariant lines.** An invariant line is mapped to itself, but points on the line
   may move. To find invariant lines, solve $(A - \lambda I)\mathbf{v} = \mathbf{0}$ where $\lambda$
   is an eigenvalue. Every eigenvector lies on an invariant line through the origin.

---

## Exam-Style Problems

1. Compute $AB - BA$ where $A = \begin{pmatrix} 1 & 2 \\ 0 & 3 \end{pmatrix}$ and
   $B = \begin{pmatrix} 4 & -1 \\ 1 & 2 \end{pmatrix}$.

2. Find the inverse of $\begin{pmatrix} 1 & 0 & 2 \\ -1 & 3 & 1 \\ 2 & 1 & 0 \end{pmatrix}$ using
   row reduction, and verify your answer by multiplication.

3. Find the eigenvalues and eigenvectors of
   $A = \begin{pmatrix} 5 & 4 \\ 1 & 2 \end{pmatrix}$. Use diagonalisation to find $A^6$.

4. A triangle has vertices at $(0, 0)$, $(2, 0)$, and $(1, 3)$. Find the matrix of the transformation
   that reflects the triangle in the $y$-axis and then enlarges it by a factor of $2$ about the
   origin. Determine the area of the image.

5. Determine the values of $k$ for which the system
   $\begin{cases} x + ky + z = 1 \\ x + y + kz = k \\ kx + y + z = 1 \end{cases}$
   has (a) a unique solution, (b) no solution, (c) infinitely many solutions.

6. Find the characteristic equation of
   $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$ and explain why $A$ is
   not diagonalisable.

7. The matrix $T = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$
   represents a rotation. Find the eigenvalues when $\theta = \dfrac{\pi}{2}$ and interpret them
   geometrically.

8. Use Cramer's rule to solve
   $\begin{cases} 3x + 2y - z = 4 \\ x - y + 2z = -1 \\ 2x + 3y + z = 7 \end{cases}$.

---

## Cross-References

- **Vectors in three dimensions** for geometric interpretation of transformations: see [Vectors](/docs/docs_ib/maths/vectors-and-matrices/vectors)
- **Complex numbers** for eigenvalues with complex roots: see [Complex Numbers](/docs/docs_ib/maths/vectors-and-matrices/complex-numbers)
- **Differential equations** and systems solved via matrix methods: see [Differential Equations](/docs/docs_ib/maths/calculus/differential-equations)
- **Algebra of functions** for linear transformations: see [Functions](/docs/docs_ib/maths/algebra/functions)
- **Proof and reasoning** for properties of determinants: see [Proof](/docs/docs_ib/maths/proof-and-reasoning)
