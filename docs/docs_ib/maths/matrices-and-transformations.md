---
title: Matrices and Transformations
tags:
- IB
- Maths
slug: matrices-and-transformations
description: Comprehensive guide to matrices and transformations for the International
  Baccalaureate.
---


## Matrices and Transformations

A matrix is a rectangular array of numbers arranged in rows and columns. Matrices provide a powerful
framework for solving systems of linear equations, representing geometric transformations, modelling
Markov processes, and much more. This topic is central to the IB Mathematics AA course at both SL
and HL, with eigenvalues and diagonalisation appearing exclusively at HL.

---

## 1. Matrix Fundamentals

### Definition and Notation

An $m \times n$ matrix $A$ is a rectangular array of real numbers with $m$ rows and $n$ columns:

$$
A = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}
$$

The entry in row $i$ and column $j$ is denoted $a_{ij}$. The set of all $m \times n$ real matrices
is written $\mathcal{M}_{m \times n}(\mathbb{R})$.

A column vector in $\mathbb{R}^n$ is an $n \times 1$ matrix, and a row vector is a $1 \times n$
matrix. When the dimensions are equal ($m = n$), the matrix is called **square**.

### Matrix Addition and Scalar Multiplication

**Addition.** If $A, B \in \mathcal{M}_{m \times n}(\mathbb{R})$, then $A + B$ is defined
entry-wise:

$$
(A + B)_{ij} = a_{ij} + b_{ij}
$$

**Scalar multiplication.** For $k \in \mathbb{R}$ and $A \in \mathcal{M}_{m \times n}(\mathbb{R})$:

$$
(kA)_{ij} = k \cdot a_{ij}
$$

These operations satisfy the following axioms (making $\mathcal{M}_{m \times n}(\mathbb{R})$ a
vector space over $\mathbb{R}$):

- $A + B = B + A$ (commutativity)
- $(A + B) + C = A + (B + C)$ (associativity)
- $A + O = A$, where $O$ is the $m \times n$ zero matrix
- $k(A + B) = kA + kB$ (distributivity over matrix addition)
- $(k + l)A = kA + lA$ (distributivity over scalar addition)
- $k(lA) = (kl)A$ (associativity of scalar multiplication)

### Matrix Multiplication

If $A$ is $m \times p$ and $B$ is $p \times n$, then the product $C = AB$ is an $m \times n$ matrix
whose entries are:

$$
c_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj}
$$

This is the **dot product** of the $i$-th row of $A$ with the $j$-th column of $B$. The inner
dimensions must agree: an $m \times p$ matrix can multiply a $p \times n$ matrix, producing an
$m \times n$ matrix.

**Critical properties:**

- Matrix multiplication is **associative**: $(AB)C = A(BC)$ when the products are defined.
- Matrix multiplication is **distributive** over addition: $A(B + C) = AB + AC$.
- Matrix multiplication is **NOT commutative** in general: $AB \neq BA$.
- The existence of $AB$ does not imply the existence of $BA$.
- $AB = O$ does NOT imply $A = O$ or $B = O$ (there are non-trivial zero divisors).

:::warning

A common error is assuming $AB = BA$. Always check the order of multiplication. In geometric
transformations, applying $A$ then $B$ corresponds to the product $BA$ (right-to-left reading).

:::

### Special Matrices

**Identity matrix.** The $n \times n$ identity matrix $I_n$ has $1$ on the main diagonal and $0$
elsewhere:

$$
I_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}
$$

For any $m \times n$ matrix $A$: $I_m A = A I_n = A$.

**Zero matrix.** The $m \times n$ zero matrix $O_{mn}$ has all entries equal to zero. For any
compatible matrix $A$: $OA = AO = O$.

**Diagonal matrix.** A square matrix $D$ is diagonal if $d_{ij} = 0$ for all $i \neq j$. We write
$D = \mathrm{diag}(d_1, d_2, \ldots, d_n)$.

### Transpose of a Matrix

The **transpose** of $A \in \mathcal{M}_{m \times n}(\mathbb{R})$, written $A^T$, is the
$n \times m$ matrix obtained by interchanging rows and columns:

$$
(A^T)_{ij} = a_{ji}
$$

**Properties of the transpose:**

- $(A^T)^T = A$
- $(A + B)^T = A^T + B^T$
- $(kA)^T = kA^T$
- $(AB)^T = B^T A^T$ (note the reversal)

### Symmetric and Skew-Symmetric Matrices

A square matrix $A$ is **symmetric** if $A^T = A$, i.e. $a_{ij} = a_{ji}$ for all $i, j$.

A square matrix $A$ is **skew-symmetric** (or anti-symmetric) if $A^T = -A$, i.e.
$a_{ij} = -a_{ji}$. This implies $a_{ii} = 0$ for all diagonal entries.

Every square matrix $A$ can be uniquely decomposed as:

$$
A = \frac{1}{2}(A + A^T) + \frac{1}{2}(A - A^T)
$$

where $\frac{1}{2}(A + A^T)$ is symmetric and $\frac{1}{2}(A - A^T)$ is skew-symmetric.

<details>
<summary>Worked Example: Symmetric and Skew-Symmetric Decomposition</summary>

Decompose $A = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$ into symmetric and skew-symmetric parts.

$$A^T = \begin{pmatrix} 3 & 1 \\ 5 & 2 \end{pmatrix}$$

Symmetric part:

$$S = \frac{1}{2}(A + A^T) = \frac{1}{2}\begin{pmatrix} 6 & 6 \\ 6 & 4 \end{pmatrix} = \begin{pmatrix} 3 & 3 \\ 3 & 2 \end{pmatrix}$$

Skew-symmetric part:

$$K = \frac{1}{2}(A - A^T) = \frac{1}{2}\begin{pmatrix} 0 & 4 \\ -4 & 0 \end{pmatrix} = \begin{pmatrix} 0 & 2 \\ -2 & 0 \end{pmatrix}$$

Check: $S + K = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} = A$.

</details>

---

## 2. Determinants

### 2x2 Determinant

For a $2 \times 2$ matrix:

$$
A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}
$$

the **determinant** is:

$$
\det(A) = |A| = ad - bc
$$

The determinant is a scalar that encodes important information about the matrix, including whether
it is invertible and how it scales area (or volume).

### 3x3 Determinant -- Cofactor Expansion

For a $3 \times 3$ matrix:

$$
A = \begin{pmatrix} a_{11} & a_{12} & a_{13} \\ a_{21} & a_{22} & a_{23} \\ a_{31} & a_{32} & a_{33} \end{pmatrix}
$$

the determinant can be computed by **cofactor expansion** along any row or column. Expanding along
row 1:

$$
\det(A) = a_{11} C_{11} + a_{12} C_{12} + a_{13} C_{13}
$$

where the **cofactor** $C_{ij} = (-1)^{i+j} M_{ij}$, and $M_{ij}$ is the **minor** (determinant of
the $2 \times 2$ submatrix obtained by deleting row $i$ and column $j$).

Explicitly:

$$
\det(A) = a_{11}(a_{22}a_{33} - a_{23}a_{32}) - a_{12}(a_{21}a_{33} - a_{23}a_{31}) + a_{13}(a_{21}a_{32} - a_{22}a_{31})
$$

**Rule of Sarrus** (mnemonic for $3 \times 3$ only): Copy the first two columns to the right of the
matrix. Sum the products of the three downward diagonals, then subtract the products of the three
upward diagonals. This is NOT valid for matrices larger than $3 \times 3$.

### Properties of Determinants

Let $A$ and $B$ be $n \times n$ matrices and $k \in \mathbb{R}$.

1. $\det(A^T) = \det(A)$
2. $\det(AB) = \det(A) \cdot \det(B)$
3. $\det(kA) = k^n \det(A)$ (multiply each of the $n$ rows by $k$)
4. Swapping two rows (or columns) changes the sign: $\det(A') = -\det(A)$
5. Multiplying a single row (or column) by $k$ multiplies the determinant by $k$
6. Adding a multiple of one row to another leaves the determinant unchanged
7. If $A$ has a row (or column) of zeros, then $\det(A) = 0$
8. If $A$ has two identical rows (or columns), then $\det(A) = 0$
9. If $A$ is triangular (upper or lower), then $\det(A)$ is the product of the diagonal entries
10. $A$ is invertible if and only if $\det(A) \neq 0$

### Geometric Interpretation

For a $2 \times 2$ matrix $A$ representing a linear transformation of the plane:

- $|\det(A)|$ equals the **area scale factor**: the ratio of the area of the image of a region to
  the area of the original region.
- If $\det(A) \gt 0$, the transformation preserves orientation.
- If $\det(A) \lt 0$, the transformation reverses orientation (e.g. a reflection).
- If $\det(A) = 0$, the transformation collapses the plane onto a line or a point (not invertible).

For a $3 \times 3$ matrix, $|\det(A)|$ is the **volume scale factor** for the corresponding
transformation of $\mathbb{R}^3$.

<details>
<summary>Worked Example: 3x3 Determinant</summary>

Find the determinant of:

$$A = \begin{pmatrix} 1 & 0 & 2 \\ 3 & 1 & -1 \\ 2 & 0 & 1 \end{pmatrix}$$

Expanding along column 2 (which has many zeros):

$$\det(A) = 0 \cdot C_{12} + 1 \cdot C_{22} + 0 \cdot C_{32} = C_{22}$$

$$C_{22} = (-1)^{2+2}\begin{vmatrix} 1 & 2 \\ 2 & 1 \end{vmatrix} = 1(1) - 2(2) = -3$$

So $\det(A) = -3$.

</details>

---

## 3. Matrix Inverses

### Definition

An $n \times n$ matrix $A$ is **invertible** (or non-singular) if there exists an $n \times n$
matrix $A^{-1}$ such that:

$$
AA^{-1} = A^{-1}A = I_n
$$

The inverse is unique when it exists. A square matrix is invertible if and only if $\det(A) \neq 0$.

### 2x2 Inverse Formula

For $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with $\det(A) = ad - bc \neq 0$:

$$
A^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

This is obtained by swapping the diagonal entries, negating the off-diagonal entries, and dividing
by the determinant. The matrix of cofactors (with the sign change) is called the **adjugate** or
**adjoint** of $A$.

### 3x3 Inverse -- Adjugate Method

For a $3 \times 3$ matrix $A$, the inverse is given by:

$$
A^{-1} = \frac{1}{\det(A)} \mathrm{adj}(A)
$$

where $\mathrm{adj}(A)$ is the **adjugate** (transpose of the cofactor matrix).

The **cofactor matrix** $\mathrm{Cof}(A)$ has entries $C_{ij} = (-1)^{i+j} M_{ij}$. The adjugate is:

$$
\mathrm{adj}(A) = (\mathrm{Cof}(A))^T
$$

**Procedure:**

1. Compute each of the nine minors $M_{ij}$ (determinants of the nine $2 \times 2$ submatrices).
2. Apply the sign pattern $(-1)^{i+j}$ to obtain the cofactors $C_{ij}$.
3. Form the cofactor matrix and take its transpose to get $\mathrm{adj}(A)$.
4. Divide every entry by $\det(A)$.

<details>
<summary>Worked Example: 3x3 Inverse</summary>

Find the inverse of $A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 1 & 1 \\ 1 & 0 & 1 \end{pmatrix}$.

**Step 1:** Compute $\det(A)$, expanding along row 1:

$$\det(A) = 2\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} - 1\begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} + 0 = 2(1) - 1(-1) = 3$$

**Step 2:** Compute cofactors:

$C_{11} = +\begin{vmatrix} 1 & 1 \\ 0 & 1 \end{vmatrix} = 1$, $C_{12} = -\begin{vmatrix} 0 & 1 \\ 1 & 1 \end{vmatrix} = 1$, $C_{13} = +\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = -1$

$C_{21} = -\begin{vmatrix} 1 & 0 \\ 0 & 1 \end{vmatrix} = -1$, $C_{22} = +\begin{vmatrix} 2 & 0 \\ 1 & 1 \end{vmatrix} = 2$, $C_{23} = -\begin{vmatrix} 2 & 1 \\ 1 & 0 \end{vmatrix} = 1$

$C_{31} = +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1$, $C_{32} = -\begin{vmatrix} 2 & 0 \\ 0 & 1 \end{vmatrix} = -2$, $C_{33} = +\begin{vmatrix} 2 & 1 \\ 0 & 1 \end{vmatrix} = 2$

Cofactor matrix: $\begin{pmatrix} 1 & 1 & -1 \\ -1 & 2 & 1 \\ 1 & -2 & 2 \end{pmatrix}$

**Step 3:** Transpose: $\mathrm{adj}(A) = \begin{pmatrix} 1 & -1 & 1 \\ 1 & 2 & -2 \\ -1 & 1 & 2 \end{pmatrix}$

**Step 4:** Divide by $\det(A) = 3$:

$$A^{-1} = \frac{1}{3}\begin{pmatrix} 1 & -1 & 1 \\ 1 & 2 & -2 \\ -1 & 1 & 2 \end{pmatrix}$$

</details>

### Properties of the Inverse

- $(A^{-1})^{-1} = A$
- $(AB)^{-1} = B^{-1}A^{-1}$ (order reverses)
- $(A^T)^{-1} = (A^{-1})^T$
- $\det(A^{-1}) = \dfrac{1}{\det(A)}$

### Solving Systems of Linear Equations

A system of $n$ linear equations in $n$ unknowns can be written in matrix form as
$A\mathbf{x} = \mathbf{b}$, where $A$ is the coefficient matrix, $\mathbf{x}$ is the column vector
of unknowns, and $\mathbf{b}$ is the column vector of constants.

If $A$ is invertible, the unique solution is:

$$
\mathbf{x} = A^{-1}\mathbf{b}
$$

For a $2 \times 2$ system:

$$
\begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} e \\ f \end{pmatrix}
$$

the solution is:

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix} \begin{pmatrix} e \\ f \end{pmatrix} = \frac{1}{ad - bc} \begin{pmatrix} de - bf \\ -ce + af \end{pmatrix}
$$

:::info[Examples]

<details>
<summary>Expand</summary>

**Solve the system:**

$2x + 3y = 8$ and $x - y = 1$

In matrix form:
$\begin{pmatrix} 2 & 3 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 8 \\ 1 \end{pmatrix}$

$\det(A) = (2)(-1) - (3)(1) = -5$

$A^{-1} = \dfrac{1}{-5}\begin{pmatrix} -1 & -3 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} 0.2 & 0.6 \\ 0.2 & -0.4 \end{pmatrix}$

$\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0.2 & 0.6 \\ 0.2 & -0.4 \end{pmatrix} \begin{pmatrix} 8 \\ 1 \end{pmatrix} = \begin{pmatrix} 2.2 \\ 1.2 \end{pmatrix}$

So $x = \frac{11}{5}$ and $y = \frac{6}{5}$.

</details>
:::

---

## 4. 2D Geometric Transformations

Every linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ can be represented by a $2 \times 2$
matrix $M$ such that $T(\mathbf{v}) = M\mathbf{v}$. The images of the standard basis vectors
$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ form the columns
of $M$.

### Reflections

A reflection maps every point to its mirror image across a specified line. The determinant of any
reflection matrix is $-1$ (orientation is reversed).

**Reflection in the $x$-axis:**

$$
R_x = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}
$$

**Reflection in the $y$-axis:**

$$
R_y = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}
$$

**Reflection in the line $y = x$:**

$$
R_{y=x} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

**Reflection in the line $y = -x$:**

$$
R_{y=-x} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}
$$

**Reflection in the line $y = (\tan\theta)\,x$** (a line through the origin making angle $\theta$
with the positive $x$-axis):

$$
R_\theta = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}
$$

### Rotations

An **anticlockwise rotation** about the origin through an angle $\theta$ is represented by:

$$
R_\theta = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$

Key properties of rotation matrices:

- $\det(R_\theta) = \cos^2\theta + \sin^2\theta = 1$ (area-preserving, orientation-preserving)
- $R_\theta^{-1} = R_{-\theta} = R_\theta^T$ (rotation matrices are orthogonal)
- $R_\alpha R_\beta = R_{\alpha + \beta}$ (composition of rotations adds angles)

**Common rotations:**

|    Angle    | Matrix                                                                                                              |
| :---------: | :------------------------------------------------------------------------------------------------------------------ |
| $90^\circ$  | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$                                                                     |
| $180^\circ$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$                                                                    |
| $270^\circ$ | $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$                                                                     |
| $60^\circ$  | $\begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix}$               |
| $45^\circ$  | $\begin{pmatrix} \frac{\sqrt{2}}{2} & -\frac{\sqrt{2}}{2} \\ \frac{\sqrt{2}}{2} & \frac{\sqrt{2}}{2} \end{pmatrix}$ |

### Enlargements (Dilations)

An **enlargement** with scale factor $k$ about the origin scales all distances by $|k|$ and, if
$k \lt 0$, also rotates by $180^\circ$.

$$
E_k = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix}
$$

- $\det(E_k) = k^2$, so the area scale factor is $k^2$.
- For $k = 1$, this is the identity transformation.
- For $k = -1$, this is equivalent to a rotation of $180^\circ$ about the origin.

**Stretches.** A stretch parallel to the $x$-axis with scale factor $k$:

$$
S_x = \begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}
$$

A stretch parallel to the $y$-axis with scale factor $k$:

$$
S_y = \begin{pmatrix} 1 & 0 \\ 0 & k \end{pmatrix}
$$

For a stretch parallel to the $x$-axis, $\det(S_x) = k$, so the area scale factor is $|k|$. If
$0 \lt k \lt 1$, the figure is compressed; if $k \gt 1$, it is expanded.

**Shears.** A horizontal shear with shear factor $k$ fixes every point on the $x$-axis and shifts
other points horizontally in proportion to their $y$-coordinate:

$$
H_x = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}
$$

A vertical shear with shear factor $k$:

$$
H_y = \begin{pmatrix} 1 & 0 \\ k & 1 \end{pmatrix}
$$

For any shear matrix, $\det = 1$, so area is preserved. The $x$-axis (for $H_x$) or $y$-axis (for
$H_y$) is point-wise invariant.

### Composite Transformations

If transformation $A$ is applied first, followed by transformation $B$, the composite transformation
is represented by the product $BA$ (note the order: right to left).

$$
\mathbf{v}' = B(A\mathbf{v}) = (BA)\mathbf{v}
$$

**Example.** A rotation of $90^\circ$ anticlockwise followed by a reflection in the $x$-axis:

$$
\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}
$$

This is equivalent to a single reflection in the line $y = -x$.

<details>
<summary>Worked Example: Composite Transformation</summary>

Find the image of the point $(2, 3)$ under a rotation of $90^\circ$ anticlockwise about the origin
followed by a reflection in the line $y = x$.

Rotation matrix:

$$R_{90} = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$$

Reflection in $y = x$:

$$R_{y=x} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}$$

Composite (reflection applied after rotation):

$$M = R_{y=x} \cdot R_{90} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}$$

This is a reflection in the $x$-axis! Apply to $(2, 3)$:

$$\begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}\begin{pmatrix} 2 \\ 3 \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \end{pmatrix}$$

The image is $(2, -3)$.

</details>

**Inverse of a composite.** Since $(BA)^{-1} = A^{-1}B^{-1}$, to undo a composite transformation,
the individual inverses are applied in reverse order.

### Invariant Points and Invariant Lines

An **invariant point** under transformation $M$ is a point $\mathbf{v}$ such that
$M\mathbf{v} = \mathbf{v}$, i.e. $(M - I)\mathbf{v} = \mathbf{0}$. The set of invariant points forms
the null space of $M - I$.

For any $2 \times 2$ transformation matrix, the origin is always invariant.

An **invariant line** is a line that is mapped onto itself (though individual points on the line may
move along it). A line through the origin with direction vector $\mathbf{d}$ is invariant if
$M\mathbf{d} = \lambda \mathbf{d}$ for some scalar $\lambda$, which means $\mathbf{d}$ is an
eigenvector of $M$.

A line is **point-wise invariant** (every point is fixed) if and only if every point on it is an
invariant point, meaning the line lies entirely in the null space of $M - I$.

**Not all invariant lines are point-wise invariant.** For example, a stretch parallel to the
$x$-axis $\begin{pmatrix} k & 0 \\ 0 & 1 \end{pmatrix}$ leaves the $x$-axis point-wise invariant and
also leaves the $y$-axis invariant as a line (each point $(0, y)$ maps to itself), but it leaves
every line parallel to the $x$-axis invariant as a line (points slide along it), not point-wise.

For a reflection, the mirror line is point-wise invariant and the line perpendicular to it through
the origin is invariant as a set (points are reflected across the mirror line but remain on the
perpendicular line).

### Area Scale Factor

For any $2 \times 2$ matrix $M$ representing a linear transformation of the plane, the area scale
factor is $|\det(M)|$. This means:

- If $|\det(M)| = 1$, the transformation preserves area (e.g. rotations, reflections).
- If $|\det(M)| = k^2$, the area of any region is multiplied by $k^2$ (e.g. enlargement by scale
  factor $k$).
- If $\det(M) = 0$, the transformation is singular and collapses the plane to a line or point.

This extends to $3 \times 3$ matrices where $|\det(M)|$ is the volume scale factor.

---

## 5. Eigenvalues and Eigenvectors (AHL)

### Motivation

When a linear transformation acts on a vector, the vector is generally rotated and scaled. Certain
special vectors, called **eigenvectors**, are only scaled (stretched or compressed) by the
transformation, not rotated. The factor by which an eigenvector is scaled is the corresponding
**eigenvalue**.

### Formal Definition

Let $A$ be an $n \times n$ matrix. A scalar $\lambda$ is an **eigenvalue** of $A$ if there exists a
non-zero vector $\mathbf{v}$ (the corresponding **eigenvector**) such that:

$$
A\mathbf{v} = \lambda \mathbf{v}
$$

Equivalently: $(A - \lambda I)\mathbf{v} = \mathbf{0}$.

For a non-trivial solution $\mathbf{v} \neq \mathbf{0}$ to exist, we require:

$$
\det(A - \lambda I) = 0
$$

### Characteristic Equation

The equation $\det(A - \lambda I) = 0$ is the **characteristic equation** of $A$. For a $2 \times 2$
matrix $A = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$
\det\begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = 0
$$

Expanding:

$$
\lambda^2 - (a + d)\lambda + (ad - bc) = 0
$$

Notice that $a + d = \mathrm{tr}(A)$ (the trace of $A$) and $ad - bc = \det(A)$. Therefore:

$$
\lambda^2 - \mathrm{tr}(A)\lambda + \det(A) = 0
$$

For a $3 \times 3$ matrix, the characteristic equation is a cubic:

$$
\det(A - \lambda I) = -\lambda^3 + \mathrm{tr}(A)\lambda^2 - S\lambda + \det(A) = 0
$$

where $S$ is the sum of the principal $2 \times 2$ minors (the sum of the determinants of the
matrices obtained by deleting each row and the corresponding column).

**Fundamental properties of eigenvalues:**

- The sum of the eigenvalues equals the trace:
  $\lambda_1 + \lambda_2 + \cdots + \lambda_n = \mathrm{tr}(A)$.
- The product of the eigenvalues equals the determinant:
  $\lambda_1 \lambda_2 \cdots \lambda_n = \det(A)$.
- A matrix is invertible if and only if none of its eigenvalues is zero.
- The eigenvalues of $A^k$ are $\lambda_1^k, \lambda_2^k, \ldots, \lambda_n^k$.

### Finding Eigenvectors

Once an eigenvalue $\lambda$ is known, the corresponding eigenvectors are found by solving:

$$
(A - \lambda I)\mathbf{v} = \mathbf{0}
$$

This is a homogeneous system. Since $\det(A - \lambda I) = 0$, the rows of $A - \lambda I$ are
linearly dependent, and the system has infinitely many solutions forming a one-dimensional subspace
(a line through the origin) for each distinct eigenvalue.

**Important:** Eigenvectors are determined only up to a non-zero scalar multiple. Any non-zero
multiple of an eigenvector is also an eigenvector for the same eigenvalue.

### Repeated Eigenvalues

When the characteristic equation has a repeated root (a repeated eigenvalue), the matrix may or may
not be diagonalisable.

- **Geometric multiplicity** $\leq$ **algebraic multiplicity.** The algebraic multiplicity of an
  eigenvalue is its multiplicity as a root of the characteristic equation. The geometric
  multiplicity is the dimension of the corresponding eigenspace (the number of linearly independent
  eigenvectors for that eigenvalue).
- A matrix is diagonalisable if and only if the geometric multiplicity of each eigenvalue equals its
  algebraic multiplicity.
- If the geometric multiplicity is strictly less than the algebraic multiplicity, the matrix is
  **defective** and cannot be diagonalised.

For a $2 \times 2$ matrix with a repeated eigenvalue $\lambda$:

- If $A = \lambda I$, then every non-zero vector is an eigenvector (geometric multiplicity $= 2$),
  and $A$ is diagonalisable (it is already diagonal).
- If $A \neq \lambda I$ but has a repeated eigenvalue, the geometric multiplicity is typically $1$,
  and $A$ is not diagonalisable.

### 3x3 Eigenvalue Problems

For a $3 \times 3$ matrix, the characteristic equation is a cubic polynomial in $\lambda$. The cubic
can have three distinct real roots, one repeated and one distinct real root, or one real root and
two complex conjugate roots. Since the IB course works over $\mathbb{R}$, only real eigenvalues and
eigenvectors are considered.

:::info[Examples]

<details>
<summary>Expand</summary>

**Find the eigenvalues and eigenvectors of**

$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & 1 \\ 0 & 0 & 2 \end{pmatrix}$

**Characteristic equation:**

$\det(A - \lambda I) = \begin{vmatrix} 2 - \lambda & 0 & 0 \\ 0 & 3 - \lambda & 1 \\ 0 & 0 & 2 - \lambda \end{vmatrix}$

Expanding along the first column:

$(2 - \lambda)\begin{vmatrix} 3 - \lambda & 1 \\ 0 & 2 - \lambda \end{vmatrix} = (2 - \lambda)(3 - \lambda)(2 - \lambda) = 0$

$(2 - \lambda)^2(3 - \lambda) = 0$

$\lambda_1 = 3$ (algebraic multiplicity 1), $\lambda_2 = 2$ (algebraic multiplicity 2)

**Eigenvector for $\lambda_1 = 3$:**

$\begin{pmatrix} -1 & 0 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & -1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

$-v_1 = 0$, $v_3 = 0$, $v_2$ is free. Eigenvector: $\begin{pmatrix} 0 \\ 1 \\ 0 \end{pmatrix}$.

**Eigenvector for $\lambda_2 = 2$:**

$\begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \\ v_3 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$

$v_2 + v_3 = 0$, $v_3 = -v_2$, and $v_1$ is free. Two linearly independent eigenvectors:
$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \\ -1 \end{pmatrix}$.

Since the geometric multiplicity of $\lambda_2 = 2$ equals its algebraic multiplicity (both $= 2$),
the matrix is diagonalisable. The total number of linearly independent eigenvectors is $3$.

$P = \begin{pmatrix} 0 & 1 & 0 \\ 1 & 0 & 1 \\ 0 & 0 & -1 \end{pmatrix}, \quad D = \begin{pmatrix} 3 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 2 \end{pmatrix}$

</details>
:::

**Characteristic equation:**

$\det(A - \lambda I) = \begin{vmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{vmatrix} = (4 - \lambda)(3 - \lambda) - 2 = 0$

$\lambda^2 - 7\lambda + 10 = 0$

$(\lambda - 5)(\lambda - 2) = 0$

$\lambda_1 = 5, \quad \lambda_2 = 2$

**Eigenvector for $\lambda_1 = 5$:**

$\begin{pmatrix} 4 - 5 & 1 \\ 2 & 3 - 5 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

From the first row: $-v_1 + v_2 = 0$, so $v_1 = v_2$. The eigenvector is
$\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ (up to scalar multiples).

**Eigenvector for $\lambda_2 = 2$:**

$\begin{pmatrix} 4 - 2 & 1 \\ 2 & 3 - 2 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$

From the first row: $2v_1 + v_2 = 0$, so $v_2 = -2v_1$. The eigenvector is
$\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

### Diagonalisation

An $n \times n$ matrix $A$ is **diagonalisable** if there exists an invertible matrix $P$ and a
diagonal matrix $D$ such that:

$$
A = PDP^{-1}
$$

The columns of $P$ are the eigenvectors of $A$, and the diagonal entries of $D$ are the
corresponding eigenvalues.

**Theorem.** An $n \times n$ matrix is diagonalisable if and only if it has $n$ linearly independent
eigenvectors. This is guaranteed when $A$ has $n$ distinct eigenvalues.

**Procedure for diagonalising a $2 \times 2$ matrix:**

1. Find the eigenvalues by solving $\det(A - \lambda I) = 0$.
2. Find a corresponding eigenvector for each eigenvalue.
3. Form $P = \begin{pmatrix} \mathbf{v}_1 & \mathbf{v}_2 \end{pmatrix}$ (eigenvectors as columns).
4. Form $D = \begin{pmatrix} \lambda_1 & 0 \\ 0 & \lambda_2 \end{pmatrix}$.
5. Verify: $A = PDP^{-1}$, or equivalently, $P^{-1}AP = D$.

### Matrix Powers via Diagonalisation

One of the most powerful applications of diagonalisation is computing large matrix powers. If
$A = PDP^{-1}$, then:

$$
A^k = PD^k P^{-1}
$$

where $D^k = \begin{pmatrix} \lambda_1^k & 0 \\ 0 & \lambda_2^k \end{pmatrix}$ for a $2 \times 2$
case.

This transforms the problem of computing $A^k$ (which would require $k-1$ matrix multiplications)
into computing three matrix products, which is dramatically more efficient.

:::info[Examples]

<details>
<summary>Expand</summary>

**Find $A^5$ where** $A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$

From the previous example: $\lambda_1 = 5$, $\lambda_2 = 2$,
$\mathbf{v}_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$,
$\mathbf{v}_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$

$\det(P) = -2 - 1 = -3$

$P^{-1} = \frac{1}{-3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}$

$D^5 = \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix}$

$A^5 = PD^5 P^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}$

$= \begin{pmatrix} 3125 & 32 \\ 3125 & -64 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}$

$= \begin{pmatrix} \frac{6282}{3} & \frac{3093}{3} \\ \frac{6186}{3} & \frac{3189}{3} \end{pmatrix} = \begin{pmatrix} 2094 & 1031 \\ 2062 & 1063 \end{pmatrix}$

</details>
:::

---

## 6. Applications

### Gaussian Elimination

Gaussian elimination is a systematic method for solving systems of linear equations by reducing the
augmented matrix to row echelon form (REF) or reduced row echelon form (RREF).

**Elementary row operations:**

1. Swap two rows ($R_i \leftrightarrow R_j$).
2. Multiply a row by a non-zero scalar ($R_i \to kR_i$).
3. Add a multiple of one row to another ($R_i \to R_i + kR_j$).

**Algorithm (for an $n \times n$ system):**

1. Form the augmented matrix $[A \mid \mathbf{b}]$.
2. Use row operations to create zeros below each pivot (forward elimination).
3. Back-substitute to find the solution.

**Existence and uniqueness:**

- If $\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}]) = n$: unique solution.
- If $\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}]) \lt n$: infinitely many solutions.
- If $\mathrm{rank}(A) \lt \mathrm{rank}([A \mid \mathbf{b}])$: no solution (inconsistent system).

:::info[Examples]

<details>
<summary>Expand</summary>

**Solve the system:**

$x + 2y + z = 5$, $2x + 5y + 3z = 13$, $x + 3y + 3z = 10$

Augmented matrix:

$\begin{pmatrix} 1 & 2 & 1 & \mid & 5 \\ 2 & 5 & 3 & \mid & 13 \\ 1 & 3 & 3 & \mid & 10 \end{pmatrix}$

$R_2 \to R_2 - 2R_1$, $R_3 \to R_3 - R_1$:

$\begin{pmatrix} 1 & 2 & 1 & \mid & 5 \\ 0 & 1 & 1 & \mid & 3 \\ 0 & 1 & 2 & \mid & 5 \end{pmatrix}$

$R_3 \to R_3 - R_2$:

$\begin{pmatrix} 1 & 2 & 1 & \mid & 5 \\ 0 & 1 & 1 & \mid & 3 \\ 0 & 0 & 1 & \mid & 2 \end{pmatrix}$

Back-substitution: $z = 2$, $y + z = 3 \Rightarrow y = 1$, $x + 2(1) + 2 = 5 \Rightarrow x = 1$.

Solution: $(x, y, z) = (1, 1, 2)$.

</details>
:::

### Cramer's Rule

Cramer's rule provides an explicit formula for the solution of a system $A\mathbf{x} = \mathbf{b}$
when $A$ is an $n \times n$ invertible matrix.

**For a $2 \times 2$ system:**

$$
x = \frac{\begin{vmatrix} e & b \\ f & d \end{vmatrix}}{\det(A)}, \qquad y = \frac{\begin{vmatrix} a & e \\ c & f \end{vmatrix}}{\det(A)}
$$

where the numerator for $x$ replaces the first column of $A$ with $\mathbf{b}$, and the numerator
for $y$ replaces the second column.

**General formula (Cramer's Rule):** For each variable $x_i$:

$$
x_i = \frac{\det(A_i)}{\det(A)}
$$

where $A_i$ is the matrix $A$ with column $i$ replaced by the vector $\mathbf{b}$.

:::warning

Cramer's rule is computationally expensive for large systems ($O(n!)$ for the determinant
computation compared to $O(n^3)$ for Gaussian elimination), but it is theoretically important and
frequently appears in examination questions for $2 \times 2$ and $3 \times 3$ systems.

:::

### Hill Cipher

The Hill cipher is a classical polygraphic substitution cipher that uses matrix multiplication to
encrypt blocks of text. It demonstrates a direct application of matrices in cryptography.

**Encryption procedure:**

1. Convert each letter to a number: $A = 0$, $B = 1$, $\ldots$, $Z = 25$.
2. Group the plaintext into blocks of size $n$ (matching the dimension of the key matrix).
3. Multiply each block (as a column vector) by the $n \times n$ key matrix $K$ modulo 26.
4. Convert the resulting numbers back to letters.

**Decryption:** Apply the inverse of the key matrix modulo 26:

$$
\mathbf{p} = K^{-1}\mathbf{c} \pmod{26}
$$

The key matrix $K$ must be invertible modulo 26, which requires $\det(K)$ to be coprime to 26 (i.e.
$\gcd(\det(K), 26) = 1$).

:::info[Examples]

<details>
<summary>Expand</summary>

**Encrypt "HELP" using the key matrix**

$K = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$

Convert to numbers: $H = 7$, $E = 4$, $L = 11$, $P = 15$.

Block 1: $\begin{pmatrix} 7 \\ 4 \end{pmatrix}$, Block 2: $\begin{pmatrix} 11 \\ 15 \end{pmatrix}$

Block 1:
$\begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 7 \\ 4 \end{pmatrix} = \begin{pmatrix} 21 + 20 \\ 7 + 8 \end{pmatrix} = \begin{pmatrix} 41 \\ 15 \end{pmatrix}$

Modulo 26: $\begin{pmatrix} 15 \\ 15 \end{pmatrix}$, which gives "PP".

Block 2:
$\begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 11 \\ 15 \end{pmatrix} = \begin{pmatrix} 33 + 75 \\ 11 + 30 \end{pmatrix} = \begin{pmatrix} 108 \\ 41 \end{pmatrix}$

Modulo 26: $108 \bmod 26 = 4$, $41 \bmod 26 = 15$, giving $\begin{pmatrix} 4 \\ 15 \end{pmatrix}$,
which is "EP".

Ciphertext: "PPEP"

</details>
:::

### Computer Graphics

Matrices are fundamental to 2D and 3D computer graphics. Every transformation of a geometric object
(viewing, rotation, scaling, projection) is represented by matrix multiplication.

**Homogeneous coordinates.** To represent translations (which are not linear transformations) as
matrix multiplications, 2D points $(x, y)$ are extended to homogeneous coordinates $(x, y, 1)$. A
translation by $(t_x, t_y)$ is then:

$$
T = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}
$$

Rotation and scaling in homogeneous coordinates use $3 \times 3$ matrices with the bottom row
$(0, 0, 1)$.

**Transformation pipeline.** A typical graphics pipeline applies a sequence of transformations:
model transform (place object in world space), view transform (position camera), projection
transform (3D to 2D), and viewport transform (map to screen coordinates). Each stage is a matrix
multiplication.

**Composition advantage.** Instead of applying $n$ separate transformations to each of $m$ vertices,
the transformations are composed into a single matrix $M = T_n \cdots T_2 T_1$, and each vertex is
transformed with a single multiplication $M\mathbf{v}$. This reduces the cost from $O(nm)$ to
$O(n^3 + m)$ matrix operations.

### Markov Chains

A **Markov chain** is a stochastic process where the probability of transitioning to any future
state depends only on the current state, not on the sequence of events that preceded it (the Markov
property).

**Transition matrix.** A transition matrix $P$ is a square matrix where:

- $p_{ij} \geq 0$ for all $i, j$ (entries are probabilities)
- Each row sums to $1$: $\sum_j p_{ij} = 1$ for all $i$

The entry $p_{ij}$ represents the probability of moving from state $i$ to state $j$ in one step.

**State evolution.** If $\mathbf{s}^{(k)}$ is the state probability vector at step $k$, then:

$$
\mathbf{s}^{(k)} = \mathbf{s}^{(0)} P^k
$$

**Steady state.** A steady-state (stationary) vector $\mathbf{s}$ satisfies
$\mathbf{s}P = \mathbf{s}$, or equivalently, $\mathbf{s}(P - I) = \mathbf{0}$. This means
$\mathbf{s}$ is a left eigenvector of $P$ with eigenvalue $1$.

For a regular Markov chain (one where some power of $P$ has all positive entries), the steady-state
distribution exists, is unique, and is independent of the initial state. The eigenvalue $1$ is
always the largest eigenvalue of a stochastic matrix (by the Perron-Frobenius theorem).

:::info[Examples]

<details>
<summary>Expand</summary>

**A weather model has two states: Sunny (S) and Rainy (R). If it is sunny today, the probability of
sun tomorrow is $0.7$ and rain is $0.3$. If it is rainy today, the probability of sun tomorrow is
$0.4$ and rain is $0.6$.**

Transition matrix:

$P = \begin{pmatrix} 0.7 & 0.3 \\ 0.4 & 0.6 \end{pmatrix}$

**Find the steady-state vector** $\mathbf{s} = \begin{pmatrix} s & r \end{pmatrix}$:

$\mathbf{s}P = \mathbf{s}$ gives $0.7s + 0.4r = s$ and $0.3s + 0.6r = r$.

From the first equation: $-0.3s + 0.4r = 0$, so $3s = 4r$.

Since $s + r = 1$: $s + \frac{3}{4}s = 1$, giving $s = \frac{4}{7}$ and $r = \frac{3}{7}$.

Steady state: $\mathbf{s} = \begin{pmatrix} \frac{4}{7} & \frac{3}{7} \end{pmatrix}$.

In the long run, the weather is sunny $\frac{4}{7} \approx 57.1\%$ of the time.

**Eigenvalue verification.** The eigenvalues of $P$ are found from:

$\det(P - \lambda I) = (0.7 - \lambda)(0.6 - \lambda) - 0.12 = \lambda^2 - 1.3\lambda + 0.3 = 0$

$(\lambda - 1)(\lambda - 0.3) = 0$

$\lambda_1 = 1$, $\lambda_2 = 0.3$. Since $|\lambda_2| \lt 1$, as $k \to \infty$ the term
$\lambda_2^k \to 0$ and the system converges to the eigenvector for $\lambda_1 = 1$.

</details>
:::


:::danger Common Pitfalls

- **Confusing matrix multiplication order:** Matrix multiplication is NOT commutative: AB is generally not equal to BA. When applying a transformation matrix to a point, the ORDER matters. For combined transformations, the matrix closest to the point is applied FIRST: if transformation B follows transformation A, the combined matrix is BA (not AB).

- **Forgetting that the determinant of a singular matrix is zero:** A singular matrix has determinant zero and NO inverse. If asked to find the inverse of a 2x2 matrix, always check that the determinant is non-zero first. A zero determinant means the transformation collapses space (maps the plane onto a line), which is why no inverse exists.

- **Misidentifying the type of transformation from its matrix:** A reflection in the y-axis has matrix [[-1, 0], [0, 1]] (negative in top-left). A reflection in the x-axis has matrix [[1, 0], [0, -1]] (negative in bottom-right). Students frequently confuse these two. Also, a rotation of 90 degrees anticlockwise gives [[0, -1], [1, 0]], which students often mix up with the clockwise rotation.

- **Arithmetic errors when calculating determinants and inverses:** For a 2x2 matrix [[a, b], [c, d]], the determinant is ad - bc (not ad + bc). The inverse is (1/det) * [[d, -b], [-c, a]] (note the swap of a and d and the negative signs). A single sign error invalidates the entire calculation. Always double-check by multiplying the matrix by its inverse to get the identity.

:::
### Orthogonal Matrices

A square matrix $Q$ is **orthogonal** if $Q^T Q = Q Q^T = I$, which means $Q^{-1} = Q^T$.

**Equivalent characterisations:**

- The columns of $Q$ form an orthonormal set (each column has unit length, and distinct columns are
  perpendicular).
- The rows of $Q$ form an orthonormal set.
- $\det(Q) = \pm 1$ (since $\det(Q^T)\det(Q) = \det(I) = 1$ and $\det(Q^T) = \det(Q)$).

Rotation matrices and reflection matrices in $\mathbb{R}^2$ are orthogonal:

- Rotations have $\det = +1$ and are called **proper orthogonal** (special orthogonal).
- Reflections have $\det = -1$.

**Preservation of the inner product.** If $Q$ is orthogonal, then for any vectors
$\mathbf{u}, \mathbf{v}$:

$$
(Q\mathbf{u}) \cdot (Q\mathbf{v}) = \mathbf{u} \cdot \mathbf{v}
$$

In particular, $|Q\mathbf{v}| = |\mathbf{v}|$ and the angle between vectors is preserved.

**Orthogonal diagonalisation (spectral theorem).** A real symmetric matrix $A$ can always be
orthogonally diagonalised: $A = QDQ^T$ where $Q$ is orthogonal and $D$ is diagonal. This is a
stronger form of diagonalisation that is guaranteed for all symmetric matrices (even those with
repeated eigenvalues), since symmetric matrices always have $n$ linearly independent eigenvectors
that can be chosen orthonormal.

---

## Summary of Key Results

| Concept                         | Formula / Result                                                                            |
| :------------------------------ | :------------------------------------------------------------------------------------------ | ------- | --- |
| $2 \times 2$ determinant        | $\det\begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$                                | | |
| $2 \times 2$ inverse            | $A^{-1} = \dfrac{1}{\det(A)}\begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$                 | | |
| $3 \times 3$ inverse            | $A^{-1} = \dfrac{1}{\det(A)}\mathrm{adj}(A)$                                                | | |
| Characteristic equation (2x2)   | $\lambda^2 - \mathrm{tr}(A)\lambda + \det(A) = 0$                                           | | |
| Diagonalisation                 | $A = PDP^{-1}$, where $D = \mathrm{diag}(\lambda_1, \ldots, \lambda_n)$                     | | |
| Matrix powers                   | $A^k = PD^kP^{-1}$                                                                          | | |
| Area scale factor               | $                                                                                           | \det(M) | $   |
| Rotation by $\theta$            | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$         | | |
| Reflection in $y = x\tan\theta$ | $\begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}$ | | |
| Cramer's rule                   | $x_i = \det(A_i)/\det(A)$                                                                   | | |
| Steady state of Markov chain    | $\mathbf{s}P = \mathbf{s}$, $\sum s_i = 1$                                                  | | |

<details>
<summary>Worked Example: Finding Eigenvalues and Eigenvectors</summary>

Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 5 & 3 \\ 3 & 5 \end{pmatrix}$.

**Characteristic equation:**

$$\det(A - \lambda I) = (5 - \lambda)^2 - 9 = \lambda^2 - 10\lambda + 16 = 0$$

$$(\lambda - 2)(\lambda - 8) = 0$$

$\lambda_1 = 2$, $\lambda_2 = 8$.

**Eigenvector for $\lambda_1 = 2$:**

$$\begin{pmatrix} 3 & 3 \\ 3 & 3 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 = -v_2$$

Eigenvector: $\begin{pmatrix} 1 \\ -1 \end{pmatrix}$ (or any scalar multiple).

**Eigenvector for $\lambda_2 = 8$:**

$$\begin{pmatrix} -3 & 3 \\ 3 & -3 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 = v_2$$

Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

The eigenvectors are perpendicular (as expected for a symmetric matrix).

</details>

---

## Problem Set

### Problem 1

Given $A = \begin{pmatrix} 2 & -1 \\ 4 & 3 \end{pmatrix}$ and
$B = \begin{pmatrix} 1 & 5 \\ -2 & 0 \end{pmatrix}$, find $AB$ and $BA$. Comment on whether $AB = BA$.

<details>
<summary>Solution</summary>

$$AB = \begin{pmatrix} 2(1) + (-1)(-2) & 2(5) + (-1)(0) \\ 4(1) + 3(-2) & 4(5) + 3(0) \end{pmatrix} = \begin{pmatrix} 4 & 10 \\ -2 & 20 \end{pmatrix}$$

$$BA = \begin{pmatrix} 1(2) + 5(4) & 1(-1) + 5(3) \\ -2(2) + 0(4) & -2(-1) + 0(3) \end{pmatrix} = \begin{pmatrix} 22 & 14 \\ -4 & 2 \end{pmatrix}$$

$AB \neq BA$, confirming that matrix multiplication is not commutative.

**If you get this wrong, revise:** Matrix Multiplication properties.

</details>

### Problem 2

Find the determinant and inverse of
$A = \begin{pmatrix} 5 & 3 \\ 2 & 1 \end{pmatrix}$.

<details>
<summary>Solution</summary>

$$\det(A) = 5(1) - 3(2) = 5 - 6 = -1$$

Since $\det(A) \neq 0$, the inverse exists:

$$A^{-1} = \frac{1}{-1}\begin{pmatrix} 1 & -3 \\ -2 & 5 \end{pmatrix} = \begin{pmatrix} -1 & 3 \\ 2 & -5 \end{pmatrix}$$

Verification: $AA^{-1} = \begin{pmatrix} 5 & 3 \\ 2 & 1 \end{pmatrix}\begin{pmatrix} -1 & 3 \\ 2 & -5 \end{pmatrix} = \begin{pmatrix} -5+6 & 15-15 \\ -2+2 & 6-5 \end{pmatrix} = \begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix}$

**If you get this wrong, revise:** 2x2 Determinant and Inverse sections.

</details>

### Problem 3

Find the determinant of $A = \begin{pmatrix} 2 & 3 & 1 \\ 0 & -1 & 2 \\ 1 & 4 & -1 \end{pmatrix}$.

<details>
<summary>Solution</summary>

Expanding along row 2 (which contains a zero):

$$\det(A) = 0 \cdot C_{21} + (-1) \cdot C_{22} + 2 \cdot C_{23}$$

$$C_{22} = (-1)^{2+2}\begin{vmatrix} 2 & 1 \\ 1 & -1 \end{vmatrix} = -2 - 1 = -3$$

$$C_{23} = (-1)^{2+3}\begin{vmatrix} 2 & 3 \\ 1 & 4 \end{vmatrix} = -(8 - 3) = -5$$

$$\det(A) = 0 + (-1)(-3) + 2(-5) = 3 - 10 = -7$$

**If you get this wrong, revise:** 3x3 Determinant -- Cofactor Expansion.

</details>

### Problem 4

Find the matrix representing an anticlockwise rotation by $60^\circ$ about the origin, and use it to
find the image of the point $(1, \sqrt{3})$.

<details>
<summary>Solution</summary>

$$R_{60} = \begin{pmatrix} \cos 60^\circ & -\sin 60^\circ \\ \sin 60^\circ & \cos 60^\circ \end{pmatrix} = \begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix}$$

$$\begin{pmatrix} \frac{1}{2} & -\frac{\sqrt{3}}{2} \\ \frac{\sqrt{3}}{2} & \frac{1}{2} \end{pmatrix}\begin{pmatrix} 1 \\ \sqrt{3} \end{pmatrix} = \begin{pmatrix} \frac{1}{2} - \frac{3}{2} \\ \frac{\sqrt{3}}{2} + \frac{\sqrt{3}}{2} \end{pmatrix} = \begin{pmatrix} -1 \\ \sqrt{3} \end{pmatrix}$$

The image is $(-1, \sqrt{3})$.

**If you get this wrong, revise:** Rotations section.

</details>

### Problem 5

A reflection in the $y$-axis is followed by an enlargement with scale factor $3$ about the origin.
Find the single matrix that represents this composite transformation. What is the area scale factor?

<details>
<summary>Solution</summary>

Reflection in the $y$-axis: $R_y = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}$

Enlargement with scale factor $3$: $E_3 = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}$

Composite (enlargement applied after reflection):

$$M = E_3 \cdot R_y = \begin{pmatrix} 3 & 0 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -3 & 0 \\ 0 & 3 \end{pmatrix}$$

Area scale factor: $|\det(M)| = |-3 \times 3 - 0| = 9$.

**If you get this wrong, revise:** Composite Transformations and Area Scale Factor.

</details>

### Problem 6

Solve the system of equations using matrices:

$$3x + 2y - z = 5$$
$$x - y + 2z = 1$$
$$2x + y + z = 4$$

<details>
<summary>Solution</summary>

Coefficient matrix: $A = \begin{pmatrix} 3 & 2 & -1 \\ 1 & -1 & 2 \\ 2 & 1 & 1 \end{pmatrix}$

Constants: $\mathbf{b} = \begin{pmatrix} 5 \\ 1 \\ 4 \end{pmatrix}$

$\det(A) = 3(-1 - 2) - 2(1 - 4) + (-1)(1 + 2) = -9 + 6 - 3 = -6$

By Cramer's rule:

$$x = \frac{\det\begin{pmatrix} 5 & 2 & -1 \\ 1 & -1 & 2 \\ 4 & 1 & 1 \end{pmatrix}}{-6} = \frac{5(-1-2) - 2(1-8) + (-1)(1+4)}{-6} = \frac{-15+14-5}{-6} = \frac{-6}{-6} = 1$$

$$y = \frac{\det\begin{pmatrix} 3 & 5 & -1 \\ 1 & 1 & 2 \\ 2 & 4 & 1 \end{pmatrix}}{-6} = \frac{3(1-8) - 5(1-4) + (-1)(4-2)}{-6} = \frac{-21+15-2}{-6} = \frac{-8}{-6} = \frac{4}{3}$$

$$z = \frac{\det\begin{pmatrix} 3 & 2 & 5 \\ 1 & -1 & 1 \\ 2 & 1 & 4 \end{pmatrix}}{-6} = \frac{3(-4-1) - 2(4-2) + 5(1+2)}{-6} = \frac{-15-4+15}{-6} = \frac{-4}{-6} = \frac{2}{3}$$

Solution: $x = 1$, $y = \frac{4}{3}$, $z = \frac{2}{3}$.

**If you get this wrong, revise:** Cramer's Rule section.

</details>

### Problem 7

Find the eigenvalues and eigenvectors of $A = \begin{pmatrix} 3 & -2 \\ 1 & 0 \end{pmatrix}$.

<details>
<summary>Solution</summary>

**Characteristic equation:**

$$\det(A - \lambda I) = (3 - \lambda)(-\lambda) - (-2)(1) = \lambda^2 - 3\lambda + 2 = 0$$

$$(\lambda - 1)(\lambda - 2) = 0$$

$\lambda_1 = 1$, $\lambda_2 = 2$.

**Eigenvector for $\lambda_1 = 1$:**

$$\begin{pmatrix} 2 & -2 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 = v_2$$

Eigenvector: $\begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Eigenvector for $\lambda_2 = 2$:**

$$\begin{pmatrix} 1 & -2 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix} \implies v_1 = 2v_2$$

Eigenvector: $\begin{pmatrix} 2 \\ 1 \end{pmatrix}$.

**If you get this wrong, revise:** Eigenvalues and Eigenvectors section.

</details>

### Problem 8

A stretch parallel to the $x$-axis with scale factor $2$ is followed by a stretch parallel to the
$y$-axis with scale factor $3$. Find the single matrix and describe its effect on the unit square.

<details>
<summary>Solution</summary>

$$M = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}\begin{pmatrix} 2 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$$

The unit square (area = 1) is mapped to a rectangle with vertices
$(0,0)$, $(2,0)$, $(2,3)$, $(0,3)$. The new area is $6$.

Area scale factor: $|\det(M)| = 6$.

**If you get this wrong, revise:** Enlargements and Stretches section.

</details>

### Problem 9

Find the invariant points and invariant lines of the transformation represented by
$M = \begin{pmatrix} 2 & 1 \\ 0 & 2 \end{pmatrix}$.

<details>
<summary>Solution</summary>

**Invariant points:** Solve $(M - I)\mathbf{x} = \mathbf{0}$:

$$\begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$$

From row 2: $y = 0$. From row 1: $x + 0 = 0$, so $x = 0$.

The only invariant point is the origin $(0, 0)$.

**Invariant lines:** For an invariant line through the origin, the direction vector must be an
eigenvector. Eigenvalues satisfy $(2-\lambda)^2 = 0$, so $\lambda = 2$ (repeated).

For $\lambda = 2$: $\begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}$, giving $v_2 = 0$. The only eigenvector direction is $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$.

The $x$-axis ($y = 0$) is the only invariant line through the origin.

**If you get this wrong, revise:** Invariant Points and Lines section.

</details>

### Problem 10

The transition matrix for a two-state Markov chain is
$P = \begin{pmatrix} 0.6 & 0.3 \\ 0.4 & 0.7 \end{pmatrix}$. Find the steady-state distribution.

<details>
<summary>Solution</summary>

Solve $\mathbf{s}P = \mathbf{s}$ where $\mathbf{s} = \begin{pmatrix} s_1 & s_2 \end{pmatrix}$ with
$s_1 + s_2 = 1$.

From $\mathbf{s}P = \mathbf{s}$:

$0.6s_1 + 0.4s_2 = s_1 \implies -0.4s_1 + 0.4s_2 = 0 \implies s_1 = s_2$

With $s_1 + s_2 = 1$: $s_1 = 0.5$, $s_2 = 0.5$.

Steady state: $\begin{pmatrix} 0.5 & 0.5 \end{pmatrix}$.

**If you get this wrong, revise:** Markov Chains section.

</details>

### Problem 11

Encrypt the word "CAT" using the Hill cipher with key matrix
$K = \begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}$, padding with "X" if needed.

<details>
<summary>Solution</summary>

C = 2, A = 0, T = 19. Pad to make even length: "CATX" where X = 23.

Block 1: $\begin{pmatrix} 2 \\ 0 \end{pmatrix}$, Block 2: $\begin{pmatrix} 19 \\ 23 \end{pmatrix}$

Block 1:

$$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 2 \\ 0 \end{pmatrix} = \begin{pmatrix} 4 \\ 2 \end{pmatrix} \equiv \begin{pmatrix} 4 \\ 2 \end{pmatrix} \pmod{26}$$

Giving "EC".

Block 2:

$$\begin{pmatrix} 2 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} 19 \\ 23 \end{pmatrix} = \begin{pmatrix} 61 \\ 42 \end{pmatrix} \equiv \begin{pmatrix} 9 \\ 16 \end{pmatrix} \pmod{26}$$

$61 \bmod 26 = 9$ (J), $42 \bmod 26 = 16$ (Q). Giving "JQ".

Ciphertext: "ECJQ".

**If you get this wrong, revise:** Hill Cipher section.

</details>

### Problem 12

Diagonalise the matrix $A = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$ and use the diagonalisation
to find $A^4$.

<details>
<summary>Solution</summary>

**Eigenvalues:**

$$\det(A - \lambda I) = (2-\lambda)^2 - 1 = \lambda^2 - 4\lambda + 3 = 0$$

$$(\lambda - 1)(\lambda - 3) = 0 \implies \lambda_1 = 1, \lambda_2 = 3$$

**Eigenvectors:**

$\lambda_1 = 1$: $\begin{pmatrix} 1 & 1 \\ 1 & 1 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0} \implies v_1 = -v_2$, so $\mathbf{v}_1 = \begin{pmatrix} 1 \\ -1 \end{pmatrix}$.

$\lambda_2 = 3$: $\begin{pmatrix} -1 & 1 \\ 1 & -1 \end{pmatrix}\begin{pmatrix} v_1 \\ v_2 \end{pmatrix} = \mathbf{0} \implies v_1 = v_2$, so $\mathbf{v}_2 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

**Diagonalisation:**

$$P = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 1 & 0 \\ 0 & 3 \end{pmatrix}$$

$$\det(P) = 2, \quad P^{-1} = \frac{1}{2}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$$

**Compute $A^4$:**

$$D^4 = \begin{pmatrix} 1 & 0 \\ 0 & 81 \end{pmatrix}$$

$$A^4 = PD^4 P^{-1} = \begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 0 \\ 0 & 81 \end{pmatrix}\frac{1}{2}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix}$$

$$= \frac{1}{2}\begin{pmatrix} 1 & 81 \\ -1 & 81 \end{pmatrix}\begin{pmatrix} 1 & -1 \\ 1 & 1 \end{pmatrix} = \frac{1}{2}\begin{pmatrix} 82 & 80 \\ 80 & 82 \end{pmatrix} = \begin{pmatrix} 41 & 40 \\ 40 & 41 \end{pmatrix}$$

**If you get this wrong, revise:** Diagonalisation and Matrix Powers sections.

</details>
