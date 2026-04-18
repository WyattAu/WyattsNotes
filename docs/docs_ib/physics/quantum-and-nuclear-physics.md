---
title: Matrices and Transformations
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - Maths
categories:
  - IB
  - Maths
slug: matrices-and-transformations
---

# Matrices and Transformations

## 1. Matrix Fundamentals

### 1.1 Definition and Notation

A **matrix** is a rectangular array of numbers arranged in rows and columns. An $m \times n$ matrix
$\mathbf{A}$ has $m$ rows and $n$ columns:

$$
\mathbf{A} = \begin{pmatrix} a_{11} & a_{12} & \cdots & a_{1n} \\ a_{21} & a_{22} & \cdots & a_{2n} \\ \vdots & \vdots & \ddots & \vdots \\ a_{m1} & a_{m2} & \cdots & a_{mn} \end{pmatrix}
$$

The entry in the $i$-th row and $j$-th column is denoted $a_{ij}$ or $(\mathbf{A})_{ij}$. The set of
all $m \times n$ matrices with real entries is denoted $M_{m \times n}(\mathbb{R})$.

A **column vector** is an $m \times 1$ matrix, and a **row vector** is a $1 \times n$ matrix.
Vectors in $\mathbb{R}^n$ are typically represented as column matrices.

### 1.2 Matrix Dimensions

Two matrices are said to have the same **dimension** (or **order**) if they have the same number of
rows and the same number of columns. A matrix with the same number of rows as columns is called a
**square matrix**; such a matrix is said to be of order $n$ (or $n \times n$).

:::info
The dimension of a matrix is sometimes called its **shape** or **size**. Throughout these
notes, we use $m \times n$ to denote $m$ rows and $n$ columns.
:::

### 1.3 Matrix Operations

#### Addition

If $\mathbf{A}$ and $\mathbf{B}$ are both $m \times n$ matrices, their sum $\mathbf{A} + \mathbf{B}$
is the $m \times n$ matrix obtained by adding corresponding entries:

$$
(\mathbf{A} + \mathbf{B})_{ij} = a_{ij} + b_{ij}
$$

Matrix addition is defined **only** when the two matrices have the same dimension.

**Example.** If $\mathbf{A} = \begin{pmatrix} 1 & 3 \\ 2 & -1 \end{pmatrix}$ and
$\mathbf{B} = \begin{pmatrix} 4 & 0 \\ -3 & 5 \end{pmatrix}$, then:

$$
\mathbf{A} + \mathbf{B} = \begin{pmatrix} 1 + 4 & 3 + 0 \\ 2 + (-3) & -1 + 5 \end{pmatrix} = \begin{pmatrix} 5 & 3 \\ -1 & 4 \end{pmatrix}
$$

#### Scalar Multiplication

If $\mathbf{A}$ is an $m \times n$ matrix and $k \in \mathbb{R}$, the **scalar multiple**
$k\mathbf{A}$ is the $m \times n$ matrix:

$$
(k\mathbf{A})_{ij} = k \cdot a_{ij}
$$

**Example.** If $k = 3$ and $\mathbf{A} = \begin{pmatrix} 1 & -2 \\ 4 & 0 \end{pmatrix}$, then:

$$
3\mathbf{A} = \begin{pmatrix} 3 & -6 \\ 12 & 0 \end{pmatrix}
$$

#### Matrix Multiplication

If $\mathbf{A}$ is an $m \times p$ matrix and $\mathbf{B}$ is a $p \times n$ matrix, their product
$\mathbf{AB}$ is the $m \times n$ matrix defined by:

$$
(\mathbf{AB})_{ij} = \sum_{k=1}^{p} a_{ik} b_{kj}
$$

That is, the entry in row $i$, column $j$ of the product is the **dot product** of the $i$-th row of
$\mathbf{A}$ with the $j$-th column of $\mathbf{B}$.

:::warning
Matrix multiplication is defined **only when** the number of columns of $\mathbf{A}$
equals the number of rows of $\mathbf{B}$. The resulting matrix has the same number of rows as
$\mathbf{A}$ and the same number of columns as $\mathbf{B}$.
:::

**Example.** Compute $\mathbf{AB}$ where:

$$
\mathbf{A} = \begin{pmatrix} 2 & 1 \\ 0 & -3 \end{pmatrix}, \quad \mathbf{B} = \begin{pmatrix} 1 & 4 \\ -1 & 2 \end{pmatrix}
$$

$$
\mathbf{AB} = \begin{pmatrix} (2)(1) + (1)(-1) & (2)(4) + (1)(2) \\ (0)(1) + (-3)(-1) & (0)(4) + (-3)(2) \end{pmatrix} = \begin{pmatrix} 1 & 10 \\ 3 & -6 \end{pmatrix}
$$

For contrast, compute $\mathbf{BA}$:

$$
\mathbf{BA} = \begin{pmatrix} (1)(2) + (4)(0) & (1)(1) + (4)(-3) \\ (-1)(2) + (2)(0) & (-1)(1) + (2)(-3) \end{pmatrix} = \begin{pmatrix} 2 & -11 \\ -2 & -7 \end{pmatrix}
$$

Since $\mathbf{AB} \neq \mathbf{BA}$, matrix multiplication is **not commutative** in general.

### 1.4 Properties of Matrix Operations

Let $\mathbf{A}, \mathbf{B}, \mathbf{C}$ be matrices of appropriate dimensions, and let
$k, l \in \mathbb{R}$.

**Addition properties:**

1. **Commutativity:** $\mathbf{A} + \mathbf{B} = \mathbf{B} + \mathbf{A}$
2. **Associativity:**
   $(\mathbf{A} + \mathbf{B}) + \mathbf{C} = \mathbf{A} + (\mathbf{B} + \mathbf{C})$
3. **Identity element:** $\mathbf{A} + \mathbf{O} = \mathbf{A}$, where $\mathbf{O}$ is the zero
   matrix
4. **Additive inverse:** $\mathbf{A} + (-\mathbf{A}) = \mathbf{O}$

**Scalar multiplication properties:**

1. $k(\mathbf{A} + \mathbf{B}) = k\mathbf{A} + k\mathbf{B}$
2. $(k + l)\mathbf{A} = k\mathbf{A} + l\mathbf{A}$
3. $(kl)\mathbf{A} = k(l\mathbf{A})$
4. $1\mathbf{A} = \mathbf{A}$

**Matrix multiplication properties:**

1. **Associativity:** $(\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})$ (when products are
   defined)
2. **Left distributivity:** $\mathbf{A}(\mathbf{B} + \mathbf{C}) = \mathbf{AB} + \mathbf{AC}$
3. **Right distributivity:** $(\mathbf{A} + \mathbf{B})\mathbf{C} = \mathbf{AC} + \mathbf{BC}$
4. **Scalar compatibility:** $k(\mathbf{AB}) = (k\mathbf{A})\mathbf{B} = \mathbf{A}(k\mathbf{B})$

:::danger
Matrix multiplication is **NOT commutative**: $\mathbf{AB} \neq \mathbf{BA}$ in general.
This is one of the most important differences between matrix algebra and ordinary algebra.
:::

Furthermore, the **cancellation law** does not hold in general. It is possible that
$\mathbf{AB} = \mathbf{AC}$ but $\mathbf{B} \neq \mathbf{C}$ (for example, if $\mathbf{A}$ is the
zero matrix, or more subtly, if $\mathbf{A}$ is singular). Similarly, $\mathbf{AB} = \mathbf{O}$
does not imply that $\mathbf{A} = \mathbf{O}$ or $\mathbf{B} = \mathbf{O}$.

### 1.5 Identity and Zero Matrices

The **identity matrix** $\mathbf{I}_n$ (or simply $\mathbf{I}$ when the dimension is clear) is the
$n \times n$ matrix with 1s on the main diagonal and 0s elsewhere:

$$
\mathbf{I}_n = \begin{pmatrix} 1 & 0 & \cdots & 0 \\ 0 & 1 & \cdots & 0 \\ \vdots & \vdots & \ddots & \vdots \\ 0 & 0 & \cdots & 1 \end{pmatrix}
$$

For any $m \times n$ matrix $\mathbf{A}$:

$$
\mathbf{I}_m \mathbf{A} = \mathbf{A} = \mathbf{A} \mathbf{I}_n
$$

The **zero matrix** $\mathbf{O}_{m \times n}$ is the $m \times n$ matrix with all entries equal to
zero. For any matrix $\mathbf{A}$ of compatible dimension:

$$
\mathbf{O}\mathbf{A} = \mathbf{O} = \mathbf{A}\mathbf{O}
$$

### 1.6 Transpose

The **transpose** of an $m \times n$ matrix $\mathbf{A}$, denoted $\mathbf{A}^T$, is the
$n \times m$ matrix obtained by interchanging rows and columns:

$$
(\mathbf{A}^T)_{ij} = a_{ji}
$$

**Properties of the transpose:**

1. $(\mathbf{A}^T)^T = \mathbf{A}$ (involution)
2. $(\mathbf{A} + \mathbf{B})^T = \mathbf{A}^T + \mathbf{B}^T$
3. $(k\mathbf{A})^T = k\mathbf{A}^T$
4. $(\mathbf{AB})^T = \mathbf{B}^T \mathbf{A}^T$ (reversal rule)

The reversal rule is particularly important and often surprising. Note that the order of
multiplication reverses upon taking the transpose.

**Proof of $(\mathbf{AB})^T = \mathbf{B}^T \mathbf{A}^T$:** Let $\mathbf{A}$ be $m \times p$ and
$\mathbf{B}$ be $p \times n$. Then $\mathbf{AB}$ is $m \times n$, so $(\mathbf{AB})^T$ is
$n \times m$. The $(i, j)$ entry of $(\mathbf{AB})^T$ equals the $(j, i)$ entry of $\mathbf{AB}$:

$$
((\mathbf{AB})^T)_{ij} = (\mathbf{AB})_{ji} = \sum_{k=1}^{p} a_{jk} b_{ki} = \sum_{k=1}^{p} (\mathbf{B}^T)_{ik} (\mathbf{A}^T)_{kj} = (\mathbf{B}^T \mathbf{A}^T)_{ij}
$$

This holds for all $i, j$, so $(\mathbf{AB})^T = \mathbf{B}^T \mathbf{A}^T$.

### 1.7 Symmetric and Skew-Symmetric Matrices

A square matrix $\mathbf{A}$ is **symmetric** if $\mathbf{A}^T = \mathbf{A}$, i.e.,
$a_{ij} = a_{ji}$ for all $i, j$.

A square matrix $\mathbf{A}$ is **skew-symmetric** (or **anti-symmetric**) if
$\mathbf{A}^T = -\mathbf{A}$, i.e., $a_{ij} = -a_{ji}$ for all $i, j$.

**Key facts:**

- The diagonal entries of a skew-symmetric matrix are all zero (since $a_{ii} = -a_{ii}$ implies
  $a_{ii} = 0$).
- Every square matrix $\mathbf{A}$ can be uniquely expressed as
  $\mathbf{A} = \mathbf{S} + \mathbf{K}$, where $\mathbf{S}$ is symmetric and $\mathbf{K}$ is
  skew-symmetric. Specifically, $\mathbf{S} = \frac{1}{2}(\mathbf{A} + \mathbf{A}^T)$ and
  $\mathbf{K} = \frac{1}{2}(\mathbf{A} - \mathbf{A}^T)$.
- The sum of two symmetric matrices is symmetric. The sum of two skew-symmetric matrices is
  skew-symmetric.

---

## 2. Determinants

### 2.1 The 2x2 Determinant

For a $2 \times 2$ matrix $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the
**determinant** is:

$$
\det(\mathbf{A}) = |\mathbf{A}| = ad - bc
$$

**Example.** If $\mathbf{A} = \begin{pmatrix} 3 & 5 \\ 2 & 7 \end{pmatrix}$, then
$\det(\mathbf{A}) = (3)(7) - (5)(2) = 21 - 10 = 11$.

### 2.2 The 3x3 Determinant (Cofactor Expansion)

For a $3 \times 3$ matrix:

$$
\mathbf{A} = \begin{pmatrix} a & b & c \\ d & e & f \\ g & h & i \end{pmatrix}
$$

The determinant can be computed by **cofactor expansion** along any row or column. Expanding along
the first row:

$$
\det(\mathbf{A}) = a \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \begin{vmatrix} d & e \\ g & h \end{vmatrix}
$$

$$
= a(ei - fh) - b(di - fg) + c(dh - eg)
$$

$$
= aei + bfg + cdh - ceg - bdi - afh
$$

The signs follow a checkerboard pattern (called the **sign matrix**):

$$
\begin{pmatrix} + & - & + \\ - & + & - \\ + & - & + \end{pmatrix}
$$

Expanding along a different row or column yields the same result. Strategic choice of row or column
(one with many zeros) simplifies computation.

**Example.** Compute $\det(\mathbf{A})$ for:

$$
\mathbf{A} = \begin{pmatrix} 2 & 1 & 3 \\ 0 & -1 & 4 \\ 5 & 2 & 1 \end{pmatrix}
$$

Expanding along the first row:

$$
\det(\mathbf{A}) = 2 \begin{vmatrix} -1 & 4 \\ 2 & 1 \end{vmatrix} - 1 \begin{vmatrix} 0 & 4 \\ 5 & 1 \end{vmatrix} + 3 \begin{vmatrix} 0 & -1 \\ 5 & 2 \end{vmatrix}
$$

$$
= 2(-1 - 8) - 1(0 - 20) + 3(0 + 5)
$$

$$
= 2(-9) - 1(-20) + 3(5) = -18 + 20 + 15 = 17
$$

### 2.3 Cofactor and Minor Terminology

The **minor** $M_{ij}$ of entry $a_{ij}$ is the determinant of the submatrix obtained by deleting
row $i$ and column $j$.

The **cofactor** $C_{ij}$ is:

$$
C_{ij} = (-1)^{i+j} M_{ij}
$$

The general cofactor expansion formula for an $n \times n$ matrix expanding along row $i$ is:

$$
\det(\mathbf{A}) = \sum_{j=1}^{n} a_{ij} C_{ij}
$$

The **matrix of cofactors** (cofactor matrix) has entries $C_{ij}$. The **adjugate** (or
**adjoint**) matrix is the transpose of the cofactor matrix:

$$
\mathrm{adj}(\mathbf{A}) = \mathbf{C}^T
$$

### 2.4 Properties of Determinants

Let $\mathbf{A}$ and $\mathbf{B}$ be $n \times n$ matrices and $k \in \mathbb{R}$.

1. $\det(\mathbf{A}^T) = \det(\mathbf{A})$
2. $\det(\mathbf{AB}) = \det(\mathbf{A}) \cdot \det(\mathbf{B})$
3. $\det(k\mathbf{A}) = k^n \det(\mathbf{A})$ for an $n \times n$ matrix
4. Swapping two rows (or columns) changes the sign of the determinant
5. If two rows (or columns) are identical, $\det(\mathbf{A}) = 0$
6. Multiplying a row (or column) by a scalar $k$ multiplies the determinant by $k$
7. Adding a multiple of one row (or column) to another does not change the determinant
8. If $\mathbf{A}$ has a row (or column) of zeros, then $\det(\mathbf{A}) = 0$
9. $\det(\mathbf{A}^{-1}) = \frac{1}{\det(\mathbf{A})}$ when $\mathbf{A}$ is invertible

:::note
Property 2 is particularly powerful: it tells us that
$\det(\mathbf{AB}) = \det(\mathbf{BA})$ even though $\mathbf{AB} \neq \mathbf{BA}$ in general.
However, $\det(\mathbf{A} + \mathbf{B}) \neq \det(\mathbf{A}) + \det(\mathbf{B})$ in general.
:::

### 2.5 Geometric Interpretation

The determinant has a profound geometric meaning. If $\mathbf{A}$ is a $2 \times 2$ matrix
representing a linear transformation of $\mathbb{R}^2$, then $|\det(\mathbf{A})|$ is the **area
scaling factor**: the area of any region is multiplied by $|\det(\mathbf{A})|$ under the
transformation.

For a $3 \times 3$ matrix, $|\det(\mathbf{A})|$ is the **volume scaling factor** in $\mathbb{R}^3$.

The **sign** of the determinant indicates whether the transformation preserves or reverses
orientation:

- $\det(\mathbf{A}) \gt 0$: orientation is preserved
- $\det(\mathbf{A}) \lt 0$: orientation is reversed (e.g., a reflection)
- $\det(\mathbf{A}) = 0$: the transformation collapses dimension (maps $\mathbb{R}^n$ to a
  lower-dimensional subspace)

**Example.** The matrix $\mathbf{A} = \begin{pmatrix} 2 & 0 \\ 0 & 3 \end{pmatrix}$ stretches the
plane by a factor of 2 in the $x$-direction and 3 in the $y$-direction. The determinant is $6$,
meaning areas are scaled by a factor of 6.

### 2.6 Singular and Non-Singular Matrices

A square matrix $\mathbf{A}$ is **singular** (or **non-invertible**) if $\det(\mathbf{A}) = 0$.

A square matrix $\mathbf{A}$ is **non-singular** (or **invertible**) if $\det(\mathbf{A}) \neq 0$.

For a $2 \times 2$ matrix $\begin{pmatrix} a & b \\ c & d \end{pmatrix}$, the matrix is singular
precisely when $ad = bc$, i.e., the rows (and columns) are linearly dependent.

:::tip
Singularity can be understood geometrically: a singular matrix represents a transformation
that collapses the space. For instance, a $2 \times 2$ singular matrix maps the entire plane onto a
line or a point, so areas become zero.
:::

---

## 3. Inverse Matrices

### 3.1 Definition

If $\mathbf{A}$ is a square matrix, an **inverse** of $\mathbf{A}$ is a matrix $\mathbf{A}^{-1}$
such that:

$$
\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}
$$

A matrix has an inverse if and only if it is **non-singular** (i.e., $\det(\mathbf{A}) \neq 0$).
When it exists, the inverse is **unique**.

**Proof of uniqueness.** Suppose $\mathbf{B}$ and $\mathbf{C}$ are both inverses of $\mathbf{A}$.
Then:

$$
\mathbf{B} = \mathbf{BI} = \mathbf{B}(\mathbf{AC}) = (\mathbf{BA})\mathbf{C} = \mathbf{IC} = \mathbf{C}
$$

### 3.2 The 2x2 Inverse Formula

For $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$ with
$\det(\mathbf{A}) = ad - bc \neq 0$:

$$
\mathbf{A}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}
$$

The formula swaps the diagonal entries and negates the off-diagonal entries, then divides by the
determinant.

**Verification:**
$\mathbf{A}\mathbf{A}^{-1} = \frac{1}{ad - bc} \begin{pmatrix} a & b \\ c & d \end{pmatrix} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$

$$
= \frac{1}{ad - bc} \begin{pmatrix} ad - bc & -ab + ab \\ cd - cd & -bc + ad \end{pmatrix} = \frac{1}{ad - bc} \begin{pmatrix} ad - bc & 0 \\ 0 & ad - bc \end{pmatrix} = \mathbf{I}
$$

**Example.** Find the inverse of $\mathbf{A} = \begin{pmatrix} 3 & 7 \\ 2 & 5 \end{pmatrix}$.

First, $\det(\mathbf{A}) = 15 - 14 = 1$. Since the determinant is non-zero, the inverse exists:

$$
\mathbf{A}^{-1} = \frac{1}{1} \begin{pmatrix} 5 & -7 \\ -2 & 3 \end{pmatrix} = \begin{pmatrix} 5 & -7 \\ -2 & 3 \end{pmatrix}
$$

### 3.3 The 3x3 Inverse (Adjugate Method)

For a $3 \times 3$ matrix $\mathbf{A}$, the inverse is given by:

$$
\mathbf{A}^{-1} = \frac{1}{\det(\mathbf{A})} \mathrm{adj}(\mathbf{A})
$$

where $\mathrm{adj}(\mathbf{A})$ is the adjugate (transpose of the cofactor matrix).

**Step-by-step procedure:**

1. Compute the determinant of $\mathbf{A}$. If $\det(\mathbf{A}) = 0$, the inverse does not exist.
2. Form the matrix of cofactors $\mathbf{C}$ where $C_{ij} = (-1)^{i+j} M_{ij}$.
3. Transpose the cofactor matrix to get the adjugate: $\mathrm{adj}(\mathbf{A}) = \mathbf{C}^T$.
4. Divide every entry of the adjugate by $\det(\mathbf{A})$.

**Example.** Find the inverse of:

$$
\mathbf{A} = \begin{pmatrix} 1 & 2 & 0 \\ 0 & 1 & 3 \\ 1 & 0 & 1 \end{pmatrix}
$$

**Step 1:** $\det(\mathbf{A}) = 1(1 - 0) - 2(0 - 3) + 0(0 - 1) = 1 + 6 + 0 = 7$.

**Step 2:** Compute cofactors:

$$
C_{11} = +\begin{vmatrix} 1 & 3 \\ 0 & 1 \end{vmatrix} = 1, \quad C_{12} = -\begin{vmatrix} 0 & 3 \\ 1 & 1 \end{vmatrix} = 3, \quad C_{13} = +\begin{vmatrix} 0 & 1 \\ 1 & 0 \end{vmatrix} = -1
$$

$$
C_{21} = -\begin{vmatrix} 2 & 0 \\ 0 & 1 \end{vmatrix} = -2, \quad C_{22} = +\begin{vmatrix} 1 & 0 \\ 1 & 1 \end{vmatrix} = 1, \quad C_{23} = -\begin{vmatrix} 1 & 2 \\ 1 & 0 \end{vmatrix} = 2
$$

$$
C_{31} = +\begin{vmatrix} 2 & 0 \\ 1 & 3 \end{vmatrix} = 6, \quad C_{32} = -\begin{vmatrix} 1 & 0 \\ 0 & 3 \end{vmatrix} = -3, \quad C_{33} = +\begin{vmatrix} 1 & 2 \\ 0 & 1 \end{vmatrix} = 1
$$

Cofactor matrix: $\mathbf{C} = \begin{pmatrix} 1 & 3 & -1 \\ -2 & 1 & 2 \\ 6 & -3 & 1 \end{pmatrix}$

**Step 3:**
$\mathrm{adj}(\mathbf{A}) = \mathbf{C}^T = \begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$

**Step 4:**
$\mathbf{A}^{-1} = \frac{1}{7} \begin{pmatrix} 1 & -2 & 6 \\ 3 & 1 & -3 \\ -1 & 2 & 1 \end{pmatrix}$

### 3.4 Solving Systems of Linear Equations

Consider a system of $n$ linear equations in $n$ unknowns, which can be written in matrix form as:

$$
\mathbf{Ax} = \mathbf{b}
$$

where $\mathbf{A}$ is the $n \times n$ coefficient matrix, $\mathbf{x}$ is the column vector of
unknowns, and $\mathbf{b}$ is the column vector of constants.

If $\mathbf{A}$ is invertible, the unique solution is:

$$
\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}
$$

**Example.** Solve the system:

$$
\begin{cases} 2x + y = 5 \\ x - y = 1 \end{cases}
$$

In matrix form:
$\begin{pmatrix} 2 & 1 \\ 1 & -1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix}$

$\det(\mathbf{A}) = -2 - 1 = -3 \neq 0$, so:

$$
\mathbf{A}^{-1} = \frac{1}{-3} \begin{pmatrix} -1 & -1 \\ -1 & 2 \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix}
$$

$$
\begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} \frac{1}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{2}{3} \end{pmatrix} \begin{pmatrix} 5 \\ 1 \end{pmatrix} = \begin{pmatrix} 2 \\ 1 \end{pmatrix}
$$

The solution is $x = 2$, $y = 1$.

### 3.5 Conditions for Invertibility

For a square matrix $\mathbf{A}$, the following are **equivalent** (any one implies all the others):

1. $\mathbf{A}$ is invertible
2. $\det(\mathbf{A}) \neq 0$
3. $\mathbf{A}$ has full rank (rank $= n$)
4. The rows of $\mathbf{A}$ are linearly independent
5. The columns of $\mathbf{A}$ are linearly independent
6. The system $\mathbf{Ax} = \mathbf{b}$ has a unique solution for every $\mathbf{b}$
7. The only solution to $\mathbf{Ax} = \mathbf{0}$ is $\mathbf{x} = \mathbf{0}$ (trivial solution)
8. $\mathbf{A}$ is row-equivalent to $\mathbf{I}_n$
9. $\mathbf{A}$ does not have zero as an eigenvalue

### 3.6 Properties of Inverses

Let $\mathbf{A}$ and $\mathbf{B}$ be invertible $n \times n$ matrices and
$k \in \mathbb{R} \setminus \{0\}$.

1. $(\mathbf{A}^{-1})^{-1} = \mathbf{A}$
2. $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$ (reversal rule)
3. $(\mathbf{A}^T)^{-1} = (\mathbf{A}^{-1})^T$
4. $(k\mathbf{A})^{-1} = \frac{1}{k}\mathbf{A}^{-1}$
5. $\det(\mathbf{A}^{-1}) = \frac{1}{\det(\mathbf{A})}$

---

## 4. Geometric Transformations (2D)

A linear transformation $T: \mathbb{R}^2 \to \mathbb{R}^2$ can be represented by a $2 \times 2$
matrix $\mathbf{A}$. The image of a point $(x, y)$ is obtained by:

$$
\begin{pmatrix} x' \\ y' \end{pmatrix} = \mathbf{A} \begin{pmatrix} x \\ y \end{pmatrix}
$$

The columns of $\mathbf{A}$ are the images of the basis vectors
$\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ and $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ respectively. This
fact completely determines the transformation.

### 4.1 Reflection Matrices

Reflection in the $x$-axis maps $(x, y) \mapsto (x, -y)$:

$$
\mathbf{R}_x = \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix}, \quad \det(\mathbf{R}_x) = -1
$$

Reflection in the $y$-axis maps $(x, y) \mapsto (-x, y)$:

$$
\mathbf{R}_y = \begin{pmatrix} -1 & 0 \\ 0 & 1 \end{pmatrix}, \quad \det(\mathbf{R}_y) = -1
$$

Reflection in the line $y = x$ maps $(x, y) \mapsto (y, x)$:

$$
\mathbf{R}_{y=x} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}, \quad \det(\mathbf{R}_{y=x}) = -1
$$

Reflection in the line $y = -x$ maps $(x, y) \mapsto (-y, -x)$:

$$
\mathbf{R}_{y=-x} = \begin{pmatrix} 0 & -1 \\ -1 & 0 \end{pmatrix}, \quad \det(\mathbf{R}_{y=-x}) = -1
$$

Reflection in the line $y = x\tan\theta$ (a line through the origin making angle $\theta$ with the
positive $x$-axis):

$$
\mathbf{R}_{\theta} = \begin{pmatrix} \cos 2\theta & \sin 2\theta \\ \sin 2\theta & -\cos 2\theta \end{pmatrix}
$$

**Key observation:** All reflections have $\det = -1$, confirming that they reverse orientation.
Every reflection matrix is its own inverse (applying the same reflection twice returns to the
original): $\mathbf{R}^2 = \mathbf{I}$.

**Derivation of the general reflection formula.** To reflect a vector about a line through the
origin at angle $\theta$, decompose the vector into components parallel and perpendicular to the
line. The parallel component is preserved, and the perpendicular component is negated. This yields
the matrix above.

### 4.2 Rotation Matrices

An **anticlockwise** rotation by angle $\theta$ about the origin is represented by:

$$
\mathbf{R}(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}
$$

**Verification.** The image of $\begin{pmatrix} 1 \\ 0 \end{pmatrix}$ is
$\begin{pmatrix} \cos\theta \\ \sin\theta \end{pmatrix}$, which is the unit vector at angle
$\theta$. The image of $\begin{pmatrix} 0 \\ 1 \end{pmatrix}$ is
$\begin{pmatrix} -\sin\theta \\ \cos\theta \end{pmatrix}$, which is the unit vector at angle
$\theta + \frac{\pi}{2}$. Both are correct.

**Properties of rotation matrices:**

$$
\det(\mathbf{R}(\theta)) = \cos^2\theta + \sin^2\theta = 1
$$

$$
\mathbf{R}(\theta)^{-1} = \mathbf{R}(-\theta) = \mathbf{R}(\theta)^T = \begin{pmatrix} \cos\theta & \sin\theta \\ -\sin\theta & \cos\theta \end{pmatrix}
$$

The inverse of a rotation by $\theta$ is a rotation by $-\theta$ (clockwise). This confirms that
rotation matrices are **orthogonal**: $\mathbf{R}^T = \mathbf{R}^{-1}$.

**Composition of rotations:**

$$
\mathbf{R}(\alpha)\mathbf{R}(\beta) = \mathbf{R}(\alpha + \beta)
$$

This can be verified by matrix multiplication and follows from the angle addition formulas:

$$
\begin{pmatrix} \cos\alpha & -\sin\alpha \\ \sin\alpha & \cos\alpha \end{pmatrix} \begin{pmatrix} \cos\beta & -\sin\beta \\ \sin\beta & \cos\beta \end{pmatrix}
$$

$$
= \begin{pmatrix} \cos\alpha\cos\beta - \sin\alpha\sin\beta & -\cos\alpha\sin\beta - \sin\alpha\cos\beta \\ \sin\alpha\cos\beta + \cos\alpha\sin\beta & -\sin\alpha\sin\beta + \cos\alpha\cos\beta \end{pmatrix}
$$

$$
= \begin{pmatrix} \cos(\alpha + \beta) & -\sin(\alpha + \beta) \\ \sin(\alpha + \beta) & \cos(\alpha + \beta) \end{pmatrix} = \mathbf{R}(\alpha + \beta)
$$

**Common rotations:**

| Angle         | Matrix                                           | Transformation            |
| ------------- | ------------------------------------------------ | ------------------------- |
| $90^{\circ}$  | $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$  | $(x, y) \mapsto (-y, x)$  |
| $180^{\circ}$ | $\begin{pmatrix} -1 & 0 \\ 0 & -1 \end{pmatrix}$ | $(x, y) \mapsto (-x, -y)$ |
| $270^{\circ}$ | $\begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix}$  | $(x, y) \mapsto (y, -x)$  |

### 4.3 Enlargement (Dilation)

An **enlargement** (or **dilation**) with centre at the origin and scale factor $k$ is represented
by:

$$
\mathbf{D}(k) = \begin{pmatrix} k & 0 \\ 0 & k \end{pmatrix} = k\mathbf{I}
$$

This maps $(x, y) \mapsto (kx, ky)$.

$$
\det(\mathbf{D}(k)) = k^2
$$

The area scaling factor is $k^2$. If $k \gt 0$, the transformation preserves orientation; if
$k \lt 0$, it reverses orientation (equivalent to a dilation by $|k|$ combined with a rotation by
$180^{\circ}$).

A **non-uniform scaling** stretches by different factors in the $x$ and $y$ directions:

$$
\mathbf{S}(k_1, k_2) = \begin{pmatrix} k_1 & 0 \\ 0 & k_2 \end{pmatrix}
$$

with $\det = k_1 k_2$.

### 4.4 Shear Transformations

A **horizontal shear** with shear factor $k$ maps $(x, y) \mapsto (x + ky, y)$:

$$
\mathbf{H}_x(k) = \begin{pmatrix} 1 & k \\ 0 & 1 \end{pmatrix}, \quad \det(\mathbf{H}_x(k)) = 1
$$

A **vertical shear** with shear factor $k$ maps $(x, y) \mapsto (x, y + kx)$:

$$
\mathbf{H}_y(k) = \begin{pmatrix} 1 & 0 \\ k & 1 \end{pmatrix}, \quad \det(\mathbf{H}_y(k)) = 1
$$

Shears preserve area ($\det = 1$) but distort shapes.

### 4.5 Composite Transformations

When two transformations are applied in succession, the overall transformation is represented by the
**product** of their matrices.

If transformation $\mathbf{A}$ is applied first, followed by transformation $\mathbf{B}$, the
overall transformation is $\mathbf{BA}$ (note the order: the second transformation is written on the
left).

$$
\mathbf{x}' = \mathbf{B}(\mathbf{Ax}) = (\mathbf{BA})\mathbf{x}
$$

:::warning
The order of multiplication matters. $\mathbf{BA}$ means "apply $\mathbf{A}$ first, then
$\mathbf{B}$." The product $\mathbf{AB}$ (if it represents a valid composition) would mean "apply
$\mathbf{B}$ first, then $\mathbf{A}$," which is generally a different transformation.
:::

**Example.** Find the matrix representing a reflection in the $x$-axis followed by a rotation of
$90^{\circ}$ anticlockwise.

$$
\mathbf{R}(90^{\circ}) \cdot \mathbf{R}_x = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix} \begin{pmatrix} 1 & 0 \\ 0 & -1 \end{pmatrix} = \begin{pmatrix} 0 & 1 \\ 1 & 0 \end{pmatrix}
$$

This is the matrix for reflection in $y = x$. So reflecting in the $x$-axis and then rotating
$90^{\circ}$ anticlockwise is equivalent to a single reflection in the line $y = x$.

**Example.** Find the matrix for a rotation of $60^{\circ}$ followed by an enlargement with scale
factor 2.

$$
\mathbf{D}(2) \cdot \mathbf{R}(60^{\circ}) = 2 \begin{pmatrix} \cos 60^{\circ} & -\sin 60^{\circ} \\ \sin 60^{\circ} & \cos 60^{\circ} \end{pmatrix} = \begin{pmatrix} 1 & -\sqrt{3} \\ \sqrt{3} & 1 \end{pmatrix}
$$

### 4.6 Invariant Points and Lines

An **invariant point** of a transformation $\mathbf{A}$ is a point $\mathbf{x}$ such that
$\mathbf{Ax} = \mathbf{x}$, i.e., $(\mathbf{A} - \mathbf{I})\mathbf{x} = \mathbf{0}$. The origin is
always an invariant point for any linear transformation (since $\mathbf{A}\mathbf{0} = \mathbf{0}$).

A **line of invariant points** exists when $\det(\mathbf{A} - \mathbf{I}) = 0$, meaning
$\mathbf{A} - \mathbf{I}$ is singular and the system
$(\mathbf{A} - \mathbf{I})\mathbf{x} = \mathbf{0}$ has infinitely many solutions forming a line
through the origin.

An **invariant line** is a line that is mapped to itself (though individual points on the line may
move to other points on the same line). Every line through the origin in the direction of an
eigenvector is an invariant line.

**Example.** Find the invariant points of
$\mathbf{A} = \begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix}$.

Solve
$\begin{pmatrix} 3 & 1 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} x \\ y \end{pmatrix}$:

$$
3x + y = x \implies 2x + y = 0 \implies y = -2x
$$

$$
2y = y \implies y = 0 \implies x = 0
$$

The only invariant point is the origin $(0, 0)$.

**Example.** Find the invariant points of
$\mathbf{A} = \begin{pmatrix} 2 & -1 \\ 2 & -1 \end{pmatrix}$.

Solve $(\mathbf{A} - \mathbf{I})\mathbf{x} = \mathbf{0}$:

$$
\begin{pmatrix} 1 & -1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

This gives $x - y = 0$, so $x = y$. The invariant points form the line $y = x$ (a line of invariant
points through the origin).

### 4.7 Area Scaling Factor

For any $2 \times 2$ matrix $\mathbf{A}$ representing a linear transformation:

- The **area scaling factor** is $|\det(\mathbf{A})|$.
- If $\det(\mathbf{A}) = 1$, areas are preserved.
- If $\det(\mathbf{A}) = -1$, areas are preserved but orientation is reversed.

**Example.** If $\mathbf{A} = \begin{pmatrix} 3 & 2 \\ 1 & 4 \end{pmatrix}$, then
$\det(\mathbf{A}) = 12 - 2 = 10$. Areas are scaled by a factor of 10.

For a composite transformation $\mathbf{AB}$, the area scaling factor is
$|\det(\mathbf{AB})| = |\det(\mathbf{A})| \cdot |\det(\mathbf{B})|$.

<details>
<summary>Proof that the determinant equals the area scaling factor</summary>

Consider the unit square with vertices $(0, 0)$, $(1, 0)$, $(1, 1)$, $(0, 1)$. Under the
transformation $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$, these vertices map to:

$(0, 0) \mapsto (0, 0)$, $(1, 0) \mapsto (a, c)$, $(1, 1) \mapsto (a+b, c+d)$,
$(0, 1) \mapsto (b, d)$

The image is a parallelogram with adjacent sides $\begin{pmatrix} a \\ c \end{pmatrix}$ and
$\begin{pmatrix} b \\ d \end{pmatrix}$. The area of this parallelogram is:

$$
\mathrm{Area} = |ad - bc| = |\det(\mathbf{A})|
$$

Since any region can be tiled by small squares, and the transformation is linear (preserving ratios
of areas), the area of any region is scaled by $|\det(\mathbf{A})|$.

</details>

---

## 5. Eigenvalues and Eigenvectors (AHL)

### 5.1 Definition

Let $\mathbf{A}$ be an $n \times n$ matrix. A scalar $\lambda$ is an **eigenvalue** of $\mathbf{A}$
if there exists a non-zero vector $\mathbf{v}$ such that:

$$
\mathbf{Av} = \lambda\mathbf{v}
$$

The vector $\mathbf{v}$ is called an **eigenvector** of $\mathbf{A}$ corresponding to the eigenvalue
$\lambda$.

Geometrically, an eigenvector is a direction that is unchanged by the transformation (it may be
stretched or compressed, but not rotated). The eigenvalue $\lambda$ is the scaling factor in that
direction.

If $\mathbf{v}$ is an eigenvector, then so is any non-zero scalar multiple $k\mathbf{v}$
(eigenvectors are determined only up to scalar multiplication). We typically describe eigenspaces
(the set of all eigenvectors for a given eigenvalue, including the zero vector).

### 5.2 The Characteristic Equation

The equation $\mathbf{Av} = \lambda\mathbf{v}$ can be rewritten as:

$$
(\mathbf{A} - \lambda\mathbf{I})\mathbf{v} = \mathbf{0}
$$

For a non-trivial solution ($\mathbf{v} \neq \mathbf{0}$) to exist, the matrix
$\mathbf{A} - \lambda\mathbf{I}$ must be singular:

$$
\det(\mathbf{A} - \lambda\mathbf{I}) = 0
$$

This is the **characteristic equation** of $\mathbf{A}$. Its roots are the eigenvalues of
$\mathbf{A}$.

For a $2 \times 2$ matrix $\mathbf{A} = \begin{pmatrix} a & b \\ c & d \end{pmatrix}$:

$$
\det(\mathbf{A} - \lambda\mathbf{I}) = \det \begin{pmatrix} a - \lambda & b \\ c & d - \lambda \end{pmatrix} = (a - \lambda)(d - \lambda) - bc = 0
$$

$$
\lambda^2 - (a + d)\lambda + (ad - bc) = 0
$$

The coefficient $a + d = \mathrm{tr}(\mathbf{A})$ is the **trace** of $\mathbf{A}$, and
$ad - bc = \det(\mathbf{A})$. So the characteristic equation for a $2 \times 2$ matrix is:

$$
\lambda^2 - \mathrm{tr}(\mathbf{A})\lambda + \det(\mathbf{A}) = 0
$$

**Key identities:** For a $2 \times 2$ matrix, $\lambda_1 + \lambda_2 = \mathrm{tr}(\mathbf{A})$ and
$\lambda_1 \lambda_2 = \det(\mathbf{A})$.

### 5.3 Finding Eigenvalues and Eigenvectors

**Example.** Find the eigenvalues and eigenvectors of
$\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Step 1: Characteristic equation.**

$$
\det(\mathbf{A} - \lambda\mathbf{I}) = \det \begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = (4 - \lambda)(3 - \lambda) - 2 = 0
$$

$$
\lambda^2 - 7\lambda + 12 - 2 = \lambda^2 - 7\lambda + 10 = 0
$$

$$
(\lambda - 5)(\lambda - 2) = 0
$$

The eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

**Step 2: Find eigenvectors for $\lambda_1 = 5$.**

Solve $(\mathbf{A} - 5\mathbf{I})\mathbf{v} = \mathbf{0}$:

$$
\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

This gives $-x + y = 0$, so $y = x$. The eigenvectors are of the form
$\begin{pmatrix} t \\ t \end{pmatrix} = t\begin{pmatrix} 1 \\ 1 \end{pmatrix}$ for $t \neq 0$.

**Step 3: Find eigenvectors for $\lambda_2 = 2$.**

Solve $(\mathbf{A} - 2\mathbf{I})\mathbf{v} = \mathbf{0}$:

$$
\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \end{pmatrix} = \begin{pmatrix} 0 \\ 0 \end{pmatrix}
$$

This gives $2x + y = 0$, so $y = -2x$. The eigenvectors are of the form
$\begin{pmatrix} t \\ -2t \end{pmatrix} = t\begin{pmatrix} 1 \\ -2 \end{pmatrix}$ for $t \neq 0$.

### 5.4 3x3 Eigenvalue Problems

For $3 \times 3$ matrices, the characteristic equation is a cubic in $\lambda$:

$$
\det(\mathbf{A} - \lambda\mathbf{I}) = 0
$$

The cubic can be solved by factoring (looking for integer roots via the rational root theorem) or by
using the formula. By the Fundamental Theorem of Algebra, every $n \times n$ matrix has exactly $n$
eigenvalues (counting algebraic multiplicity), though some may be complex.

**Example.** Find the eigenvalues of:

$$
\mathbf{A} = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & -1 \\ 0 & -1 & 3 \end{pmatrix}
$$

$$
\det(\mathbf{A} - \lambda\mathbf{I}) = \det \begin{pmatrix} 2 - \lambda & 0 & 0 \\ 0 & 3 - \lambda & -1 \\ 0 & -1 & 3 - \lambda \end{pmatrix}
$$

Expanding along the first row:

$$
(2 - \lambda) \det \begin{pmatrix} 3 - \lambda & -1 \\ -1 & 3 - \lambda \end{pmatrix} = (2 - \lambda)[(3 - \lambda)^2 - 1] = 0
$$

$$(2 - \lambda)(\lambda^2 - 6\lambda + 8) = (2 - \lambda)(\lambda - 2)(\lambda - 4) = 0$$

$$-(\lambda - 2)^2(\lambda - 4) = 0$$

The eigenvalues are $\lambda = 2$ (with algebraic multiplicity 2) and $\lambda = 4$.

### 5.5 Diagonalization

An $n \times n$ matrix $\mathbf{A}$ is **diagonalizable** if there exists an invertible matrix
$\mathbf{P}$ and a diagonal matrix $\mathbf{D}$ such that:

$$
\mathbf{A} = \mathbf{PDP}^{-1}
$$

The matrix $\mathbf{P}$ has the eigenvectors of $\mathbf{A}$ as its columns, and $\mathbf{D}$ has
the corresponding eigenvalues on its diagonal.

**Conditions for diagonalizability:**

- An $n \times n$ matrix with $n$ distinct eigenvalues is always diagonalizable.
- A matrix is diagonalizable if and only if it has a full set of linearly independent eigenvectors
  (i.e., the geometric multiplicity of each eigenvalue equals its algebraic multiplicity).
- Not all matrices are diagonalizable. A matrix with a repeated eigenvalue may fail to be
  diagonalizable if there are not enough linearly independent eigenvectors.

**Example.** Diagonalize $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

From the previous example, the eigenvalues are $\lambda_1 = 5$ with eigenvector
$\begin{pmatrix} 1 \\ 1 \end{pmatrix}$, and $\lambda_2 = 2$ with eigenvector
$\begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$$
\mathbf{P} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad \mathbf{D} = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}
$$

Verify: $\det(\mathbf{P}) = -2 - 1 = -3$, so
$\mathbf{P}^{-1} = \frac{1}{-3} \begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}$

$$
\mathbf{PDP}^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}
$$

$$
= \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix} = \begin{pmatrix} \frac{10}{3} + \frac{2}{3} & \frac{5}{3} - \frac{2}{3} \\ \frac{10}{3} - \frac{4}{3} & \frac{5}{3} + \frac{4}{3} \end{pmatrix} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} = \mathbf{A}
$$

### 5.6 Powers of Matrices

Diagonalization makes it efficient to compute powers of matrices. If
$\mathbf{A} = \mathbf{PDP}^{-1}$, then:

$$
\mathbf{A}^n = \mathbf{PD}^n\mathbf{P}^{-1}
$$

where $\mathbf{D}^n$ is simply the diagonal matrix with each diagonal entry raised to the $n$-th
power.

**Example.** Compute $\mathbf{A}^5$ where
$\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

Using $\mathbf{A} = \mathbf{PDP}^{-1}$ from above:

$$
\mathbf{D}^5 = \begin{pmatrix} 5^5 & 0 \\ 0 & 2^5 \end{pmatrix} = \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix}
$$

$$
\mathbf{A}^5 = \mathbf{PD}^5\mathbf{P}^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix} \begin{pmatrix} 3125 & 0 \\ 0 & 32 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}
$$

$$
= \begin{pmatrix} 3125 & 32 \\ 3125 & -64 \end{pmatrix} \begin{pmatrix} \frac{2}{3} & \frac{1}{3} \\ \frac{1}{3} & -\frac{1}{3} \end{pmatrix}
$$

$$
= \begin{pmatrix} \frac{6250 + 32}{3} & \frac{3125 - 32}{3} \\ \frac{6250 - 64}{3} & \frac{3125 + 64}{3} \end{pmatrix} = \begin{pmatrix} \frac{6282}{3} & \frac{3093}{3} \\ \frac{6186}{3} & \frac{3189}{3} \end{pmatrix} = \begin{pmatrix} 2094 & 1031 \\ 2062 & 1063 \end{pmatrix}
$$

### 5.7 Eigenvalues of Symmetric Matrices

Symmetric matrices ($\mathbf{A}^T = \mathbf{A}$) have special properties:

1. All eigenvalues of a real symmetric matrix are **real** (not complex).
2. Eigenvectors corresponding to **distinct** eigenvalues are **orthogonal** (perpendicular).
3. Every real symmetric matrix is **orthogonally diagonalizable**: $\mathbf{A} = \mathbf{QDQ}^T$
   where $\mathbf{Q}$ is an orthogonal matrix ($\mathbf{Q}^{-1} = \mathbf{Q}^T$).

These properties make symmetric matrices particularly important in applications like quadratic
forms, principal component analysis, and physics.

---

## 6. Applications

### 6.1 Solving Simultaneous Equations: Gaussian Elimination

**Gaussian elimination** is a systematic method for solving systems of linear equations by reducing
the augmented matrix to row echelon form (or reduced row echelon form).

**Elementary row operations:**

1. Swap two rows ($R_i \leftrightarrow R_j$)
2. Multiply a row by a non-zero scalar ($R_i \to kR_i$)
3. Add a multiple of one row to another ($R_i \to R_i + kR_j$)

**Example.** Solve the system:

$$
\begin{cases} x + 2y - z = 3 \\ 2x - y + z = 1 \\ 3x + y + 2z = 5 \end{cases}
$$

Augmented matrix:

$$
\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 2 & -1 & 1 & 1 \\ 3 & 1 & 2 & 5 \end{array}\right)
$$

$R_2 \to R_2 - 2R_1$ and $R_3 \to R_3 - 3R_1$:

$$
\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & -5 & 3 & -5 \\ 0 & -5 & 5 & -4 \end{array}\right)
$$

$R_3 \to R_3 - R_2$:

$$
\left(\begin{array}{ccc|c} 1 & 2 & -1 & 3 \\ 0 & -5 & 3 & -5 \\ 0 & 0 & 2 & 1 \end{array}\right)
$$

Back-substitution: $2z = 1 \implies z = \frac{1}{2}$. Then
$-5y + \frac{3}{2} = -5 \implies -5y = -\frac{13}{2} \implies y = \frac{13}{10}$. Then
$x + \frac{26}{10} - \frac{1}{2} = 3 \implies x = \frac{30}{10} - \frac{21}{10} = \frac{9}{10}$.

The solution is $x = \frac{9}{10}$, $y = \frac{13}{10}$, $z = \frac{1}{2}$.

### 6.2 Cramer's Rule

**Cramer's Rule** provides a direct formula for solving a system $\mathbf{Ax} = \mathbf{b}$ when
$\det(\mathbf{A}) \neq 0$. For a system of $n$ equations in $n$ unknowns:

$$
x_i = \frac{\det(\mathbf{A}_i)}{\det(\mathbf{A})}
$$

where $\mathbf{A}_i$ is the matrix obtained by replacing the $i$-th column of $\mathbf{A}$ with the
vector $\mathbf{b}$.

**Example.** Solve using Cramer's Rule:

$$
\begin{cases} 3x + 2y = 7 \\ x - y = 1 \end{cases}
$$

$\det(\mathbf{A}) = \det \begin{pmatrix} 3 & 2 \\ 1 & -1 \end{pmatrix} = -3 - 2 = -5$

$$
x = \frac{\det \begin{pmatrix} 7 & 2 \\ 1 & -1 \end{pmatrix}}{-5} = \frac{-7 - 2}{-5} = \frac{-9}{-5} = \frac{9}{5}
$$

$$
y = \frac{\det \begin{pmatrix} 3 & 7 \\ 1 & 1 \end{pmatrix}}{-5} = \frac{3 - 7}{-5} = \frac{-4}{-5} = \frac{4}{5}
$$

:::warning
Cramer's Rule becomes computationally expensive for large systems ($O(n!)$ operations for
the determinants vs. $O(n^3)$ for Gaussian elimination). It is primarily useful for small systems
and theoretical proofs.
:::

### 6.3 Cryptography: The Hill Cipher

The **Hill cipher** is a polygraphic substitution cipher that uses matrix multiplication to encrypt
blocks of text.

**Encryption process:**

1. Convert the message to numerical values (e.g., A = 0, B = 1, ..., Z = 25).
2. Divide the message into blocks of size $n$.
3. Multiply each block (as a column vector) by an $n \times n$ invertible key matrix $\mathbf{K}$,
   working modulo 26.
4. Convert the resulting numbers back to letters.

**Decryption:** Multiply the ciphertext blocks by $\mathbf{K}^{-1}$ (mod 26).

**Example.** Encrypt "HELP" using the key matrix
$\mathbf{K} = \begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix}$.

H = 7, E = 4, L = 11, P = 15. Form two blocks: $\begin{pmatrix} 7 \\ 4 \end{pmatrix}$ and
$\begin{pmatrix} 11 \\ 15 \end{pmatrix}$.

Block 1:
$\begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 7 \\ 4 \end{pmatrix} = \begin{pmatrix} 21 + 20 \\ 7 + 8 \end{pmatrix} = \begin{pmatrix} 41 \\ 15 \end{pmatrix} \equiv \begin{pmatrix} 15 \\ 15 \end{pmatrix} \pmod{26}$,
giving "PP".

Block 2:
$\begin{pmatrix} 3 & 5 \\ 1 & 2 \end{pmatrix} \begin{pmatrix} 11 \\ 15 \end{pmatrix} = \begin{pmatrix} 33 + 75 \\ 11 + 30 \end{pmatrix} = \begin{pmatrix} 108 \\ 41 \end{pmatrix} \equiv \begin{pmatrix} 4 \\ 15 \end{pmatrix} \pmod{26}$,
giving "EP".

Ciphertext: "PPEP".

To decrypt, compute $\mathbf{K}^{-1} \pmod{26}$. $\det(\mathbf{K}) = 6 - 5 = 1$. The modular inverse
of 1 modulo 26 is 1, so:

$$
\mathbf{K}^{-1} = \begin{pmatrix} 2 & -5 \\ -1 & 3 \end{pmatrix} \equiv \begin{pmatrix} 2 & 21 \\ 25 & 3 \end{pmatrix} \pmod{26}
$$

<details>
<summary>Modular arithmetic for matrix inversion</summary>

Finding the modular inverse of a determinant is crucial. The modular inverse of $d$ modulo 26 exists
if and only if $\gcd(d, 26) = 1$, i.e., $d$ is odd and not divisible by 13.

To find $d^{-1} \pmod{26}$, use the Extended Euclidean Algorithm or simply try values. For instance,
$7^{-1} \equiv 15 \pmod{26}$ because $7 \times 15 = 105 \equiv 1 \pmod{26}$.

If the determinant shares a factor with 26, the key matrix is not invertible modulo 26 and cannot be
used for the Hill cipher.

</details>

### 6.4 Computer Graphics Transformations

Matrices are fundamental in computer graphics for representing and composing transformations.

**Homogeneous coordinates** extend $2 \times 2$ transformations to allow translations by using
$3 \times 3$ matrices. A point $(x, y)$ is represented as
$\begin{pmatrix} x \\ y \\ 1 \end{pmatrix}$.

A translation by $(t_x, t_y)$ is:

$$
\mathbf{T} = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}
$$

Combined with linear transformations (rotation, scaling, shearing) in the upper-left $2 \times 2$
block, arbitrary affine transformations can be composed by matrix multiplication.

**Example.** Rotate by $45^{\circ}$ about the point $(2, 3)$:

1. Translate so that $(2, 3)$ moves to the origin:
   $\mathbf{T}_1 = \begin{pmatrix} 1 & 0 & -2 \\ 0 & 1 & -3 \\ 0 & 0 & 1 \end{pmatrix}$
2. Rotate by $45^{\circ}$:
   $\mathbf{R} = \begin{pmatrix} \cos 45^{\circ} & -\sin 45^{\circ} & 0 \\ \sin 45^{\circ} & \cos 45^{\circ} & 0 \\ 0 & 0 & 1 \end{pmatrix}$
3. Translate back:
   $\mathbf{T}_2 = \begin{pmatrix} 1 & 0 & 2 \\ 0 & 1 & 3 \\ 0 & 0 & 1 \end{pmatrix}$

Combined: $\mathbf{M} = \mathbf{T}_2 \mathbf{R} \mathbf{T}_1$

This demonstrates the power of matrix composition: a complex transformation is reduced to a single
matrix multiplication.

### 6.5 Network Analysis: Adjacency Matrices

An **adjacency matrix** $\mathbf{A}$ of a graph with $n$ vertices is an $n \times n$ matrix where
$a_{ij} = 1$ if there is an edge from vertex $i$ to vertex $j$, and $a_{ij} = 0$ otherwise.

**Key results:**

- The $(i, j)$ entry of $\mathbf{A}^k$ gives the **number of walks of length $k$** from vertex $i$
  to vertex $j$.
- The sum of row $i$ gives the **out-degree** of vertex $i$.
- The sum of column $j$ gives the **in-degree** of vertex $j$.

**Example.** Consider a graph with vertices $\{1, 2, 3, 4\}$ and edges
$\{1 \to 2, 2 \to 3, 3 \to 4, 4 \to 1, 1 \to 3\}$.

$$
\mathbf{A} = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 0 & 0 & 1 & 0 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \end{pmatrix}
$$

$$
\mathbf{A}^2 = \begin{pmatrix} 0 & 0 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ 1 & 0 & 0 & 0 \\ 0 & 1 & 1 & 0 \end{pmatrix}
$$

The $(1, 4)$ entry of $\mathbf{A}^2$ is 1, meaning there is exactly 1 walk of length 2 from vertex 1
to vertex 4 (namely, $1 \to 2 \to 4$).

### 6.6 Markov Chains

A **Markov chain** is a stochastic process where the probability of moving to the next state depends
only on the current state (the Markov property).

A **transition matrix** $\mathbf{P}$ is a square matrix where:

- Each entry $p_{ij} \geq 0$ represents the probability of transitioning from state $j$ to state
  $i$.
- Each column sums to 1: $\sum_i p_{ij} = 1$ for all $j$.

If $\mathbf{s}_n$ is the state probability vector at step $n$, then:

$$
\mathbf{s}_{n+1} = \mathbf{P}\mathbf{s}_n
$$

and by induction:

$$
\mathbf{s}_n = \mathbf{P}^n \mathbf{s}_0
$$

A **steady state** (or **stationary distribution**) is a probability vector $\mathbf{s}$ such that
$\mathbf{Ps} = \mathbf{s}$. This is an eigenvector of $\mathbf{P}$ with eigenvalue $\lambda = 1$.

**Example.** A weather model has two states: Sunny (S) and Rainy (R). The transition probabilities
are:

- If sunny today, 70% chance sunny tomorrow, 30% chance rainy.
- If rainy today, 40% chance sunny tomorrow, 60% chance rainy.

$$
\mathbf{P} = \begin{pmatrix} 0.7 & 0.4 \\ 0.3 & 0.6 \end{pmatrix}
$$

Find the steady state: solve $\mathbf{Ps} = \mathbf{s}$ with $s_1 + s_2 = 1$.

$$
\begin{pmatrix} 0.7 & 0.4 \\ 0.3 & 0.6 \end{pmatrix} \begin{pmatrix} s_1 \\ s_2 \end{pmatrix} = \begin{pmatrix} s_1 \\ s_2 \end{pmatrix}
$$

From the first row: $0.7s_1 + 0.4s_2 = s_1$, giving $-0.3s_1 + 0.4s_2 = 0$, so
$s_1 = \frac{4}{3}s_2$.

With $s_1 + s_2 = 1$:
$\frac{4}{3}s_2 + s_2 = 1 \implies \frac{7}{3}s_2 = 1 \implies s_2 = \frac{3}{7}$ and
$s_1 = \frac{4}{7}$.

The long-term probability of sunny weather is $\frac{4}{7} \approx 57.1\%$.

<details>
<summary>Convergence of regular Markov chains</summary>

A Markov chain with transition matrix $\mathbf{P}$ is **regular** if some power $\mathbf{P}^m$ has
all positive entries. For a regular Markov chain:

The matrix $\mathbf{P}^n$ converges to a matrix whose columns are all the same vector, which is the
steady state vector $\mathbf{s}$. This means that regardless of the initial state, the system
approaches the same long-term distribution.

The eigenvalue 1 is always present for a transition matrix (since columns sum to 1, the row vector
$(1, 1, \ldots, 1)$ is a left eigenvector with eigenvalue 1). For a regular Markov chain, all other
eigenvalues satisfy $|\lambda| \lt 1$, so they decay to zero as $n \to \infty$.

</details>

---

## Summary of Key Results

| Concept                   | Key Formula                                                                         |
| ------------------------- | ----------------------------------------------------------------------------------- | ---------------- | --- |
| 2x2 determinant           | $\det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = ad - bc$                       |
| 2x2 inverse               | $\frac{1}{ad - bc} \begin{pmatrix} d & -b \\ -c & a \end{pmatrix}$                  |
| General inverse           | $\mathbf{A}^{-1} = \frac{1}{\det(\mathbf{A})} \mathrm{adj}(\mathbf{A})$               |
| Rotation matrix           | $\begin{pmatrix} \cos\theta & -\sin\theta \\ \sin\theta & \cos\theta \end{pmatrix}$ |
| Characteristic equation   | $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$                                          |
| Diagonalization           | $\mathbf{A} = \mathbf{PDP}^{-1}$                                                    |
| Matrix power              | $\mathbf{A}^n = \mathbf{PD}^n\mathbf{P}^{-1}$                                       |
| Area scale factor         | $                                                                                   | \det(\mathbf{A}) | $   |
| Reversal rule (transpose) | $(\mathbf{AB})^T = \mathbf{B}^T\mathbf{A}^T$                                        |
| Reversal rule (inverse)   | $(\mathbf{AB})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$                               |

---

## Exam Tips for IB Mathematics

**Common pitfalls to avoid:**

When computing determinants, always check the sign pattern for cofactor expansion. A sign error is
the most frequent mistake in 3x3 determinant problems. Remember the checkerboard pattern: $+$ in
position $(1,1)$, then alternating.

For matrix multiplication, verify the dimensions are compatible before computing. The number of
columns of the first matrix must equal the number of rows of the second.

For composite transformations, remember that $\mathbf{BA}$ means "apply $\mathbf{A}$ first, then
$\mathbf{B}$." The rightmost matrix is applied first.

For eigenvalue problems, always verify your answers by checking that
$\mathbf{Av} = \lambda\mathbf{v}$ holds for each eigenvalue-eigenvector pair.

For geometric interpretations, remember that $\det(\mathbf{A}) \lt 0$ means orientation reversal
(reflection), and $\det(\mathbf{A}) = 0$ means the transformation collapses dimension (the matrix is
singular).

**Time-saving strategies:**

For 3x3 determinants, expand along the row or column with the most zeros to minimize computation. If
no row or column has zeros, consider creating zeros using row operations that do not change the
determinant (adding multiples of one row to another).

When finding the inverse of a 2x2 matrix, always compute the determinant first. If it is zero, stop
-- the inverse does not exist.

For systems of equations, check whether the determinant of the coefficient matrix is zero before
attempting to solve. If $\det(\mathbf{A}) = 0$, the system either has no solutions or infinitely
many solutions (use Gaussian elimination to determine which).
