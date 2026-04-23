---
title: Linear Algebra
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: linear-algebra
---

## 1. Vectors and Vector Spaces

### 1.1 Definition of a Vector Space

A **vector space** over a field $F$ (typically $\mathbb{R}$ or $\mathbb{C}$) is a set $V$ equipped
with two operations:

1. **Vector addition**: $+ : V \times V \to V$
2. **Scalar multiplication**: $\cdot : F \times V \to V$

satisfying the following axioms for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and all
$\alpha, \beta \in F$:

1. **Commutativity**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
2. **Associativity of addition**: $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
3. **Additive identity**: There exists $\mathbf{0} \in V$ such that $\mathbf{v} + \mathbf{0} = \mathbf{v}$
4. **Additive inverse**: For each $\mathbf{v}$, there exists $-\mathbf{v}$ such that $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
5. **Compatibility of scalar multiplication**: $\alpha(\beta \mathbf{v}) = (\alpha\beta)\mathbf{v}$
6. **Identity element of scalar multiplication**: $1 \cdot \mathbf{v} = \mathbf{v}$
7. **Distributivity over vector addition**: $\alpha(\mathbf{u} + \mathbf{v}) = \alpha\mathbf{u} + \alpha\mathbf{v}$
8. **Distributivity over scalar addition**: $(\alpha + \beta)\mathbf{v} = \alpha\mathbf{v} + \beta\mathbf{v}$

### 1.2 Examples

**Example 1.** $\mathbb{R}^n$ with component-wise addition and scalar multiplication is a vector space
over $\mathbb{R}$.

**Example 2.** The set $\mathcal{P}_n$ of all polynomials of degree at most $n$ with real coefficients,
with the usual polynomial addition and scalar multiplication, is a vector space over $\mathbb{R}$.

**Example 3.** The set $C[a,b]$ of all continuous real-valued functions on $[a,b]$, with point-wise
addition and scalar multiplication, is a vector space over $\mathbb{R}$.

**Example 4.** The set $\mathcal{M}_{m \times n}(\mathbb{R})$ of all $m \times n$ real matrices is a
vector space over $\mathbb{R}$.

### 1.3 Subspaces

A **subspace** $W$ of a vector space $V$ is a subset $W \subseteq V$ that is itself a vector space
under the same operations.

**Theorem 1.1 (Subspace Criterion).** A non-empty subset $W \subseteq V$ is a subspace if and only
if for all $\mathbf{u}, \mathbf{v} \in W$ and all $\alpha \in F$:

1. $\mathbf{u} + \mathbf{v} \in W$ (closed under addition)
2. $\alpha \mathbf{u} \in W$ (closed under scalar multiplication)

*Proof.* If $W$ is a subspace, closure is immediate from the definition. Conversely, if $W$ is
non-empty and closed under both operations, pick $\mathbf{u} \in W$. Then $-\mathbf{u} = (-1)\mathbf{u} \in W$
by closure under scalar multiplication, and $\mathbf{u} + (-\mathbf{u}) = \mathbf{0} \in W$ by closure
under addition. The remaining axioms are inherited from $V$. $\blacksquare$

**Example 5.** The set of all solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$ forms a
subspace of $\mathbb{R}^n$, called the **null space** of $A$.

## 2. Linear Independence, Span, Basis, and Dimension

### 2.1 Linear Independence

A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\} \subseteq V$ is **linearly
independent** if the equation

$$\alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \cdots + \alpha_k \mathbf{v}_k = \mathbf{0}$$

implies $\alpha_1 = \alpha_2 = \cdots = \alpha_k = 0$. Otherwise the set is **linearly dependent**.

### 2.2 Span

The **span** of a set $S \subseteq V$, denoted $\mathrm{span}(S)$, is the set of all finite linear
combinations of elements of $S$:

$$\mathrm{span}(S) = \left\{ \sum_{i=1}^k \alpha_i \mathbf{v}_i : k \in \mathbb{N},\, \alpha_i \in F,\, \mathbf{v}_i \in S \right\}$$

**Proposition 2.1.** $\mathrm{span}(S)$ is always a subspace of $V$.

### 2.3 Basis and Dimension

A set $B \subseteq V$ is a **basis** for $V$ if:

1. $B$ is linearly independent, and
2. $\mathrm{span}(B) = V$.

**Theorem 2.1.** Every vector space has a basis. All bases of a finite-dimensional vector space have
the same number of elements.

The **dimension** of $V$, denoted $\dim(V)$, is the cardinality of any basis for $V$.

**Theorem 2.2 (Dimension Formula).** If $U$ and $W$ are subspaces of a finite-dimensional vector
space $V$, then

$$\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$$

### 2.4 Worked Example

**Problem.** Determine whether the vectors
$\mathbf{v}_1 = (1, 2, 3)$, $\mathbf{v}_2 = (4, 5, 6)$, $\mathbf{v}_3 = (7, 8, 9)$ form a basis
for $\mathbb{R}^3$.

*Solution.* Form the matrix $A = [\mathbf{v}_1 \mid \mathbf{v}_2 \mid \mathbf{v}_3]$ and compute
its determinant:

$$\det(A) = 1(45 - 48) - 2(36 - 42) + 3(32 - 35) = -3 + 12 - 9 = 0$$

Since $\det(A) = 0$, the columns are linearly dependent, so $\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$
is not a basis. In fact, $\mathbf{v}_3 - 2\mathbf{v}_2 + \mathbf{v}_1 = \mathbf{0}$.

:::tip
To check if $n$ vectors in $\mathbb{R}^n$ form a basis, compute the determinant of the matrix whose
columns are those vectors. If $\det \neq 0$, they form a basis; if $\det = 0$, they do not.
:::

## 3. Matrices

### 3.1 Matrix Operations

An $m \times n$ matrix $A$ over $F$ is a rectangular array of $mn$ elements from $F$, arranged in
$m$ rows and $n$ columns. The set of all such matrices is denoted $\mathcal{M}_{m \times n}(F)$.

**Addition.** For $A, B \in \mathcal{M}_{m \times n}(F)$, $(A + B)_{ij} = A_{ij} + B_{ij}$.

**Scalar multiplication.** For $\alpha \in F$ and $A \in \mathcal{M}_{m \times n}(F)$,
$(\alpha A)_{ij} = \alpha A_{ij}$.

**Matrix multiplication.** For $A \in \mathcal{M}_{m \times n}(F)$ and $B \in \mathcal{M}_{n \times p}(F)$,
the product $AB \in \mathcal{M}_{m \times p}(F)$ is defined by

$$(AB)_{ij} = \sum_{k=1}^n A_{ik} B_{kj}$$

**Proposition 3.1.** Matrix multiplication is associative but not commutative in general.

### 3.2 Transpose

The **transpose** of $A \in \mathcal{M}_{m \times n}(F)$, denoted $A^T$, is the $n \times m$ matrix
with $(A^T)_{ij} = A_{ji}$.

**Properties of transpose:**

1. $(A + B)^T = A^T + B^T$
2. $(\alpha A)^T = \alpha A^T$
3. $(AB)^T = B^T A^T$
4. $(A^T)^T = A$

### 3.3 Inverse Matrices

A square matrix $A \in \mathcal{M}_{n \times n}(F)$ is **invertible** if there exists a matrix
$A^{-1} \in \mathcal{M}_{n \times n}(F)$ such that

$$AA^{-1} = A^{-1}A = I_n$$

**Theorem 3.1.** The following are equivalent for $A \in \mathcal{M}_{n \times n}(F)$:

1. $A$ is invertible.
2. $\det(A) \neq 0$.
3. The columns of $A$ are linearly independent.
4. The rows of $A$ are linearly independent.
5. $\mathrm{rank}(A) = n$.
6. The equation $A\mathbf{x} = \mathbf{b}$ has a unique solution for every $\mathbf{b}$.
7. The only solution to $A\mathbf{x} = \mathbf{0}$ is $\mathbf{x} = \mathbf{0}$.

### 3.4 Determinants

The **determinant** is a function $\det : \mathcal{M}_{n \times n}(F) \to F$ defined recursively by
**Laplace expansion** along the first row:

$$\det(A) = \sum_{j=1}^n (-1)^{1+j} a_{1j} M_{1j}$$

where $M_{1j}$ is the $(1,j)$-minor (the determinant of the $(n-1) \times (n-1)$ matrix obtained by
deleting row 1 and column $j$).

**Properties of determinants:**

1. $\det(AB) = \det(A)\det(B)$
2. $\det(A^T) = \det(A)$
3. $\det(A^{-1}) = 1 / \det(A)$
4. Swapping two rows changes the sign of the determinant.
5. Multiplying a row by $\alpha$ multiplies the determinant by $\alpha$.
6. Adding a multiple of one row to another leaves the determinant unchanged.

**Worked Example.** Compute $\det(A)$ where

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$$

*Solution.* Expanding along the first column:

$$\det(A) = 1 \cdot \det\begin{pmatrix} 1 & 4 \\ 6 & 0 \end{pmatrix} - 0 + 5 \cdot \det\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$$

$$= 1 \cdot (0 - 24) + 5 \cdot (8 - 3) = -24 + 25 = 1$$

:::caution Common Pitfall
The determinant is only defined for square matrices. There is no meaningful determinant for an
$m \times n$ matrix with $m \neq n$. Do not confuse $\det(AB) = \det(A)\det(B)$ with a
non-existent formula for non-square matrices.
:::

## 4. Systems of Linear Equations

### 4.1 Gaussian Elimination

A system of $m$ linear equations in $n$ unknowns can be written as $A\mathbf{x} = \mathbf{b}$, where
$A \in \mathcal{M}_{m \times n}(\mathbb{R})$, $\mathbf{x} \in \mathbb{R}^n$, and
$\mathbf{b} \in \mathbb{R}^m$.

**Gaussian elimination** transforms the augmented matrix $[A \mid \mathbf{b}]$ into **row echelon
form** (REF) using elementary row operations:

1. Swap two rows ($R_i \leftrightarrow R_j$).
2. Multiply a row by a non-zero scalar ($R_i \to \alpha R_i$).
3. Add a multiple of one row to another ($R_i \to R_i + \alpha R_j$).

A matrix is in REF if:
- All zero rows are at the bottom.
- The leading entry (pivot) of each non-zero row is strictly to the right of the pivot above.
- All entries below a pivot are zero.

**Reduced row echelon form** (RREF) additionally requires:
- Each pivot is 1.
- Each pivot is the only non-zero entry in its column.

**Theorem 4.1.** Every matrix has a unique RREF. Two matrices are row-equivalent if and only if they
have the same RREF.

### 4.2 Existence and Uniqueness

**Theorem 4.2 (Rouché-Capelli).** The system $A\mathbf{x} = \mathbf{b}$ is consistent (has at least one
solution) if and only if

$$\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}])$$

If consistent, the solution set has $\dim(\mathrm{null}(A))$ free parameters, where
$\dim(\mathrm{null}(A)) = n - \mathrm{rank}(A)$.

### 4.3 LU Decomposition

An **LU decomposition** of $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ writes $A = LU$ where $L$ is
lower triangular with 1s on the diagonal, and $U$ is upper triangular.

**Theorem 4.3.** If Gaussian elimination can be performed on $A$ without row exchanges, then $A$
admits an LU decomposition.

**Algorithm.** Store the multipliers $m_{ij}$ (used to eliminate entry $a_{ij}$) in the lower
triangular portion. The resulting upper triangular matrix is $U$, and the multipliers form $L$.

**Worked Example.** Find the LU decomposition of

$$A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}$$

*Solution.*

Step 1: Eliminate below $a_{11}$. $m_{21} = 4/2 = 2$, $m_{31} = 8/2 = 4$.

$$\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}$$

Step 2: Eliminate below $a_{22}$. $m_{32} = 3/1 = 3$.

$$U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

$$L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}$$

Verify: $LU = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix} = A$. $\blacksquare$

To solve $A\mathbf{x} = \mathbf{b}$, first solve $L\mathbf{y} = \mathbf{b}$ (forward substitution),
then $U\mathbf{x} = \mathbf{y}$ (back substitution).

## 5. Eigenvalues and Eigenvectors

### 5.1 Definitions

Let $A \in \mathcal{M}_{n \times n}(F)$. A scalar $\lambda \in F$ is an **eigenvalue** of $A$ if there
exists a non-zero vector $\mathbf{v} \in F^n$ such that

$$A\mathbf{v} = \lambda \mathbf{v}$$

The vector $\mathbf{v}$ is called an **eigenvector** corresponding to $\lambda$.

### 5.2 Characteristic Polynomial

**Theorem 5.1.** $\lambda$ is an eigenvalue of $A$ if and only if $\det(A - \lambda I) = 0$.

The polynomial $p(\lambda) = \det(A - \lambda I)$ is called the **characteristic polynomial** of $A$.
Its roots (in the algebraic closure of $F$) are the eigenvalues of $A$.

### 5.3 Diagonalisation

**Definition.** $A$ is **diagonalisable** if there exists an invertible matrix $P$ and a diagonal
matrix $D$ such that

$$A = PDP^{-1}$$

**Theorem 5.2.** $A$ is diagonalisable (over $F$) if and only if $A$ has $n$ linearly independent
eigenvectors (over $F$).

**Corollary 5.3.** If $A$ has $n$ distinct eigenvalues, then $A$ is diagonalisable.

### 5.4 Spectral Theorem for Real Symmetric Matrices

**Theorem 5.4 (Spectral Theorem).** If $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ is symmetric
($A = A^T$), then:

1. All eigenvalues of $A$ are real.
2. $A$ has $n$ linearly independent orthonormal eigenvectors.
3. $A$ is orthogonally diagonalisable: $A = QDQ^T$ where $Q$ is orthogonal ($Q^TQ = I$).

### 5.5 Worked Example

**Problem.** Find the eigenvalues and eigenvectors of

$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$

*Solution.* The characteristic polynomial is

$$\det(A - \lambda I) = \det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = (4 - \lambda)(3 - \lambda) - 2$$

$$= \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2)$$

So the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

For $\lambda_1 = 5$: Solve $(A - 5I)\mathbf{v} = \mathbf{0}$.

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies -v_1 + v_2 = 0 \implies \mathbf{v} = t\begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

For $\lambda_2 = 2$: Solve $(A - 2I)\mathbf{v} = \mathbf{0}$.

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies 2v_1 + v_2 = 0 \implies \mathbf{v} = t\begin{pmatrix} 1 \\ -2 \end{pmatrix}$$

Therefore $A = PDP^{-1}$ with

$$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$$

:::caution Common Pitfall
Not every matrix is diagonalisable. For example, $A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has
eigenvalue $\lambda = 1$ with algebraic multiplicity 2 but geometric multiplicity 1. It has only one
linearly independent eigenvector and is not diagonalisable.
:::

## 6. Linear Transformations

### 6.1 Definition

A **linear transformation** (or linear map) $T : V \to W$ between vector spaces $V$ and $W$ over $F$
is a function satisfying:

1. $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all $\mathbf{u}, \mathbf{v} \in V$
2. $T(\alpha \mathbf{v}) = \alpha T(\mathbf{v})$ for all $\alpha \in F$, $\mathbf{v} \in V$

The set of all linear transformations from $V$ to $W$ is denoted $\mathcal{L}(V, W)$.

### 6.2 Matrix Representation

If $V$ and $W$ are finite-dimensional with bases
$\mathcal{B}_V = \{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ and
$\mathcal{B}_W = \{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$, then every $T \in \mathcal{L}(V, W)$ is
uniquely represented by a matrix $[T]_{\mathcal{B}_V}^{\mathcal{B}_W} \in \mathcal{M}_{m \times n}(F)$
where the $j$-th column is the coordinate vector of $T(\mathbf{v}_j)$ with respect to $\mathcal{B}_W$.

### 6.3 Kernel and Image

The **kernel** (null space) and **image** (range) of $T$ are:

$$\ker(T) = \{\mathbf{v} \in V : T(\mathbf{v}) = \mathbf{0}\}$$
$$\mathrm{im}(T) = \{T(\mathbf{v}) : \mathbf{v} \in V\}$$

**Theorem 6.1 (Rank-Nullity Theorem).** For $T \in \mathcal{L}(V, W)$ with $V$ finite-dimensional:

$$\dim(\ker(T)) + \dim(\mathrm{im}(T)) = \dim(V)$$

### 6.4 Isomorphisms

A linear transformation $T : V \to W$ is an **isomorphism** if it is bijective. We write $V \cong W$.

**Theorem 6.2.** $T$ is an isomorphism if and only if $\ker(T) = \{\mathbf{0}\}$ and $\mathrm{im}(T) = W$.

**Corollary 6.3.** If $\dim(V) = \dim(W) < \infty$, then $T$ is injective if and only if $T$ is surjective.

### 6.5 Change of Basis

If $P$ is the change-of-basis matrix from basis $\mathcal{B}$ to basis $\mathcal{B}'$, then for a
linear transformation $T$ with matrix representations $[T]_{\mathcal{B}}$ and $[T]_{\mathcal{B}'}$:

$$[T]_{\mathcal{B}'} = P^{-1}[T]_{\mathcal{B}} P$$

This is the **similarity transformation**. Similar matrices represent the same linear transformation
in different bases and share the same eigenvalues, determinant, and trace.

## 7. Inner Product Spaces

### 7.1 Definition of an Inner Product

An **inner product** on a vector space $V$ over $F$ (where $F = \mathbb{R}$ or $\mathbb{C}$) is a
function $\langle \cdot, \cdot \rangle : V \times V \to F$ satisfying:

1. **Conjugate symmetry**: $\langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}$
2. **Linearity in the first argument**: $\langle \alpha\mathbf{u} + \beta\mathbf{w}, \mathbf{v} \rangle = \alpha\langle \mathbf{u}, \mathbf{v} \rangle + \beta\langle \mathbf{w}, \mathbf{v} \rangle$
3. **Positive definiteness**: $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$ with equality iff $\mathbf{v} = \mathbf{0}$

A vector space equipped with an inner product is called an **inner product space**.

### 7.2 Norms

Every inner product induces a **norm**:

$$\lVert \mathbf{v} \rVert = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$$

**Theorem 7.1 (Cauchy-Schwarz Inequality).**

$$|\langle \mathbf{u}, \mathbf{v} \rangle| \leq \lVert \mathbf{u} \rVert \, \lVert \mathbf{v} \rVert$$

with equality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

**Theorem 7.2 (Triangle Inequality).**

$$\lVert \mathbf{u} + \mathbf{v} \rVert \leq \lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert$$

### 7.3 Orthogonality

Two vectors $\mathbf{u}, \mathbf{v}$ are **orthogonal** if $\langle \mathbf{u}, \mathbf{v} \rangle = 0$.

An **orthonormal set** $\{e_1, \ldots, e_k\}$ satisfies $\langle e_i, e_j \rangle = \delta_{ij}$.

**Theorem 7.3 (Pythagorean Theorem).** If $\mathbf{u} \perp \mathbf{v}$, then

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$$

### 7.4 Gram-Schmidt Process

The **Gram-Schmidt process** converts a linearly independent set
$\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ into an orthonormal set $\{e_1, \ldots, e_n\}$:

$$\mathbf{u}_1 = \mathbf{v}_1, \quad e_1 = \frac{\mathbf{u}_1}{\lVert \mathbf{u}_1 \rVert}$$

$$\mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \langle \mathbf{v}_k, e_i \rangle e_i, \quad e_k = \frac{\mathbf{u}_k}{\lVert \mathbf{u}_k \rVert}$$

### 7.5 Orthogonal Projection

The **orthogonal projection** of $\mathbf{v}$ onto a subspace $W$ with orthonormal basis
$\{e_1, \ldots, e_k\}$ is

$$\mathrm{proj}_W(\mathbf{v}) = \sum_{i=1}^k \langle \mathbf{v}, e_i \rangle e_i$$

**Theorem 7.4 (Best Approximation).** Among all vectors in $W$, the orthogonal projection
$\mathrm{proj}_W(\mathbf{v})$ minimises the distance to $\mathbf{v}$:

$$\lVert \mathbf{v} - \mathrm{proj}_W(\mathbf{v}) \rVert \leq \lVert \mathbf{v} - \mathbf{w} \rVert \quad \mathrm{for all } \mathbf{w} \in W$$

### 7.6 Worked Example

**Problem.** Apply the Gram-Schmidt process to $\mathbf{v}_1 = (1, 1, 1)$,
$\mathbf{v}_2 = (1, 0, 1)$, $\mathbf{v}_3 = (0, 1, 0)$ in $\mathbb{R}^3$ with the standard inner
product.

*Solution.*

$e_1 = \frac{(1,1,1)}{\sqrt{3}} = \frac{1}{\sqrt{3}}(1, 1, 1)$

$\mathbf{u}_2 = (1,0,1) - \langle (1,0,1), e_1 \rangle e_1 = (1,0,1) - \frac{2}{\sqrt{3}} \cdot \frac{1}{\sqrt{3}}(1,1,1) = (1,0,1) - \frac{2}{3}(1,1,1) = (\frac{1}{3}, -\frac{2}{3}, \frac{1}{3})$

$e_2 = \frac{(\frac{1}{3}, -\frac{2}{3}, \frac{1}{3})}{\sqrt{6}/3} = \frac{1}{\sqrt{6}}(1, -2, 1)$

$\mathbf{u}_3 = (0,1,0) - \langle (0,1,0), e_1 \rangle e_1 - \langle (0,1,0), e_2 \rangle e_2 = (0,1,0) - \frac{1}{3}(1,1,1) + \frac{2}{6}(1,-2,1) = (0,1,0) - (\frac{1}{3}, \frac{1}{3}, \frac{1}{3}) + (\frac{1}{3}, -\frac{2}{3}, \frac{1}{3}) = (\frac{1}{3} - \frac{1}{3}, 1 - \frac{1}{3} - \frac{2}{3}, -\frac{1}{3} + \frac{1}{3}) \cdot \ldots$

Verifying: $\mathbf{u}_3 = (0, 1, 0) - \frac{1}{3}(1,1,1) - \frac{-2}{6}(1,-2,1) = (0,1,0) - (\frac{1}{3},\frac{1}{3},\frac{1}{3}) + (\frac{1}{3},-\frac{2}{3},\frac{1}{3}) = (0, 0, 0)$

This reveals that $\mathbf{v}_3$ is a linear combination of $\mathbf{v}_1$ and $\mathbf{v}_2$. Indeed,
$\mathbf{v}_3 = \mathbf{v}_1 - \mathbf{v}_2$. The original set was linearly dependent. We should have
started with a linearly independent set. $\blacksquare$

:::caution Common Pitfall
The Gram-Schmidt process requires a linearly independent starting set. If the input vectors are
linearly dependent, one of the $\mathbf{u}_k$ will be the zero vector, and the process will fail
(attempting to divide by zero in the normalisation step).
:::
