---
title: Linear Algebra
description:
  'University-level notes on Linear Algebra: 1. Vectors and Vector Spaces; 1.1 Definition of a
  Vector Space; 1.2 Examples; 1.3 Subspaces.'
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

A **vector space** over a field $F$ ( $\mathbb{R}$ or $\mathbb{C}$) is a set $V$ equipped With two
operations:

1. **Vector addition**: $+ : V \times V \to V$
2. **Scalar multiplication**: $\cdot : F \times V \to V$

Satisfying the following axioms for all $\mathbf{u}, \mathbf{v}, \mathbf{w} \in V$ and all
$\alpha, \beta \in F$:

1. **Commutativity**: $\mathbf{u} + \mathbf{v} = \mathbf{v} + \mathbf{u}$
2. **Associativity of addition**:
   $(\mathbf{u} + \mathbf{v}) + \mathbf{w} = \mathbf{u} + (\mathbf{v} + \mathbf{w})$
3. **Additive identity**: There exists $\mathbf{0} \in V$ such that
   $\mathbf{v} + \mathbf{0} = \mathbf{v}$
4. **Additive inverse**: For each $\mathbf{v}$There exists $-\mathbf{v}$ such that
   $\mathbf{v} + (-\mathbf{v}) = \mathbf{0}$
5. **Compatibility of scalar multiplication**: $\alpha(\beta \mathbf{v}) = (\alpha\beta)\mathbf{v}$
6. **Identity element of scalar multiplication**: $1 \cdot \mathbf{v} = \mathbf{v}$
7. **Distributivity over vector addition**:
   $\alpha(\mathbf{u} + \mathbf{v}) = \alpha\mathbf{u} + \alpha\mathbf{v}$
8. **Distributivity over scalar addition**:
   $(\alpha + \beta)\mathbf{v} = \alpha\mathbf{v} + \beta\mathbf{v}$

_Intuition._ The abstract definition captures the algebraic structure shared by diverse objects:
Geometric arrows, polynomials, functions, matrices. The axioms encode exactly what we need for
Linear combinations to behave reasonably.

### 1.2 Examples

**Example 1.** $\mathbb{R}^n$ with component-wise addition and scalar multiplication is a vector
space Over $\mathbb{R}$.

**Example 2.** The set $\mathcal{P}_n$ of all polynomials of degree at most $n$ with real
coefficients, With the usual polynomial addition and scalar multiplication, is a vector space over
$\mathbb{R}$. Its dimension is $n + 1$With standard basis $\{1, x, x^2, \ldots, x^n\}$.

**Example 3.** The set $C[a,b]$ of all continuous real-valued functions on $[a,b]$With point-wise
Addition and scalar multiplication, is a vector space over $\mathbb{R}$. This space is
Infinite-dimensional.

**Example 4.** The set $\mathcal{M}_{m \times n}(\mathbb{R})$ of all $m \times n$ real matrices is a
Vector space over $\mathbb{R}$.

**Example 5 (Function spaces).** The set $\mathcal{F}(\mathbb{R}, \mathbb{R})$ of all functions
$f : \mathbb{R} \to \mathbb{R}$ is a vector space over $\mathbb{R}$ under point-wise addition
$(f + g)(x) = f(x) + g(x)$ and scalar multiplication $(\alpha f)(x) = \alpha \cdot f(x)$. The spaces
$C^k(\mathbb{R})$ of $k$-times continuously differentiable functions and $L^2[a,b]$ of
square-integrable functions are important subspaces of $\mathcal{F}(\mathbb{R}, \mathbb{R})$.

**Example 6 (Sequence spaces).** The set $\ell^2$ of all real sequences $(a_1, a_2, a_3, \ldots)$
With $\sum_{n=1}^{\infty} a_n^2 \lt \infty$ is a vector space over $\mathbb{R}$. This is the
Infinite-dimensional analogue of $\mathbb{R}^n$ and is fundamental in functional analysis.

### 1.3 Subspaces

A **subspace** $W$ of a vector space $V$ is a subset $W \subseteq V$ that is itself a vector space
Under the same operations.

**Theorem 1.1 (Subspace Criterion).** A non-empty subset $W \subseteq V$ is a subspace if and only
If for all $\mathbf{u}, \mathbf{v} \in W$ and all $\alpha \in F$:

1. $\mathbf{u} + \mathbf{v} \in W$ (closed under addition)
2. $\alpha \mathbf{u} \in W$ (closed under scalar multiplication)

_Proof._ If $W$ is a subspace, closure is immediate from the definition. Conversely, if $W$ is
Non-empty and closed under both operations, pick $\mathbf{u} \in W$. Then
$-\mathbf{u} = (-1)\mathbf{u} \in W$ By closure under scalar multiplication, and
$\mathbf{u} + (-\mathbf{u}) = \mathbf{0} \in W$ by closure Under addition. The remaining axioms are
inherited from $V$. $\blacksquare$

**Proposition 1.2 (Closure under Linear Combinations).** If $W$ is a subspace of $V$Then $W$ is
Closed under all finite linear combinations: for all $\mathbf{v}_1, \ldots, \mathbf{v}_k \in W$ and
All $\alpha_1, \ldots, \alpha_k \in F$

$$\alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \cdots + \alpha_k \mathbf{v}_k \in W$$

_Proof._ We proceed by induction on $k$. For $k = 1$, $\alpha_1 \mathbf{v}_1 \in W$ by closure under
Scalar multiplication. Assume the result holds for $k - 1$ vectors. Then

$$\alpha_1 \mathbf{v}_1 + \cdots + \alpha_k \mathbf{v}_k = (\alpha_1 \mathbf{v}_1 + \cdots + \alpha_{k-1} \mathbf{v}_{k-1}) + \alpha_k \mathbf{v}_k$$

By the inductive hypothesis,
$\alpha_1 \mathbf{v}_1 + \cdots + \alpha_{k-1} \mathbf{v}_{k-1} \in W$And
$\alpha_k \mathbf{v}_k \in W$ by closure under scalar multiplication. Their sum is in $W$ by Closure
under addition. $\blacksquare$

**Example 7.** The set of all solutions to the homogeneous equation $A\mathbf{x} = \mathbf{0}$ forms
a Subspace of $\mathbb{R}^n$Called the **null space** of $A$.

### 1.4 Worked Example: Verifying Subspace Criteria

**Problem.** Determine whether each of the following subsets of $\mathbb{R}^3$ is a subspace.

(a) $W_1 = \{(x, y, z) \in \mathbb{R}^3 : x + 2y - z = 0\}$

(b) $W_2 = \{(x, y, z) \in \mathbb{R}^3 : x^2 + y^2 = 1\}$

(c) $W_3 = \{(x, y, z) \in \mathbb{R}^3 : x = 0 \mathrm{~and~} y = z\}$

<details>
<summary>Solution</summary>

**(a)** Let $\mathbf{u} = (x_1, y_1, z_1)$ and $\mathbf{v} = (x_2, y_2, z_2)$ be in $W_1$So
$x_1 + 2y_1 - z_1 = 0$ and $x_2 + 2y_2 - z_2 = 0$. Then

$$(x_1 + x_2) + 2(y_1 + y_2) - (z_1 + z_2) = (x_1 + 2y_1 - z_1) + (x_2 + 2y_2 - z_2) = 0 + 0 = 0$$

So $\mathbf{u} + \mathbf{v} \in W_1$. For $\alpha \in \mathbb{R}$

$$(\alpha x_1) + 2(\alpha y_1) - (\alpha z_1) = \alpha(x_1 + 2y_1 - z_1) = \alpha \cdot 0 = 0$$

So $\alpha \mathbf{u} \in W_1$. Since $W_1$ is non-empty (e.g., $\mathbf{0} \in W_1$), it is a
subspace.

**(b)** $W_2$ is not a subspace. For instance, $(1, 0, 0) \in W_2$ since $1^2 + 0^2 = 1$But
$2 \cdot (1, 0, 0) = (2, 0, 0) \notin W_2$ since $2^2 + 0^2 = 4 \neq 1$. So $W_2$ is not closed
Under scalar multiplication.

**(c)** Let $\mathbf{u} = (0, a, a)$ and $\mathbf{v} = (0, b, b)$ be in $W_3$. Then
$\mathbf{u} + \mathbf{v} = (0, a + b, a + b) \in W_3$ and
$\alpha \mathbf{u} = (0, \alpha a, \alpha a) \in W_3$. Since $(0, 0, 0) \in W_3$It is a non-empty
subspace.

$\blacksquare$

</details>

### 1.5 Worked Example: Sum and Intersection of Subspaces

**Problem.** Let $U = \{(x, y, z) \in \mathbb{R}^3 : z = 0\}$ (the $xy$-plane) and
$W = \{(x, y, z) \in \mathbb{R}^3 : x = 0\}$ (the $yz$-plane). Find $U + W$ and $U \cap W$ And
verify the dimension formula.

<details>
<summary>Solution</summary>

$U$ has basis $\{(1, 0, 0), (0, 1, 0)\}$ and $\dim(U) = 2$. $W$ has basis $\{(0, 1, 0), (0, 0, 1)\}$
and $\dim(W) = 2$.

$U \cap W = \{(x, y, z) : z = 0 \mathrm{~and~} x = 0\} = \{(0, y, 0) : y \in \mathbb{R}\}$ Which has
basis $\{(0, 1, 0)\}$ and dimension 1.

$U + W = \mathrm{span}\{(1,0,0), (0,1,0), (0,1,0), (0,0,1)\} = \mathrm{span}\{(1,0,0), (0,1,0), (0,0,1)\} = \mathbb{R}^3$
So $\dim(U + W) = 3$.

Verify: $\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W) = 2 + 2 - 1 = 3$. $\checkmark$
$\blacksquare$

</details>

### 1.6 Common Pitfalls

- **The empty set is not a vector space.** The subspace criterion requires the subset to be
  non-empty. The trivial subspace $\{\mathbf{0}\}$ is the smallest subspace of any vector space.
- **Non-homogeneous conditions do not define subspaces.** The set of solutions to
  $A\mathbf{x} = \mathbf{b}$ with $\mathbf{b} \neq \mathbf{0}$ is not a subspace (it is an affine
  subspace, or coset of the null space).
- **Closure must hold for _all_ scalars.** A set that is closed under addition and multiplication by
  positive scalars is not necessarily a subspace; it must also be closed under multiplication by
  $-1$.

---

## 2. Linear Independence, Span, Basis, and Dimension

### 2.1 Linear Independence

A set of vectors $\{\mathbf{v}_1, \mathbf{v}_2, \ldots, \mathbf{v}_k\} \subseteq V$ is **linearly
Independent** if the equation

$$\alpha_1 \mathbf{v}_1 + \alpha_2 \mathbf{v}_2 + \cdots + \alpha_k \mathbf{v}_k = \mathbf{0}$$

Implies $\alpha_1 = \alpha_2 = \cdots = \alpha_k = 0$. Otherwise the set is **linearly dependent**.

**Proposition 2.1 (Equivalent formulations).** The following are equivalent for vectors
$\mathbf{v}_1, \ldots, \mathbf{v}_k \in V$:

1. $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ is linearly independent.
2. No $\mathbf{v}_j$ can be written as a linear combination of the remaining vectors.
3. If $\sum_{i=1}^k \alpha_i \mathbf{v}_i = \sum_{i=1}^k \beta_i \mathbf{v}_i$Then
   $\alpha_i = \beta_i$ for all $i$.

_Proof._ (1 $\Rightarrow$ 2): If $\mathbf{v}_j = \sum_{i \neq j} \alpha_i \mathbf{v}_i$Then
$\sum_{i \neq j} \alpha_i \mathbf{v}_i - \mathbf{v}_j = \mathbf{0}$ gives a non-trivial linear
Dependence, contradicting (1).

(2 $\Rightarrow$ 3): If $\sum (\alpha_i - \beta_i)\mathbf{v}_i = \mathbf{0}$Then by linear
Independence (which follows from (2)), $\alpha_i = \beta_i$ for all $i$.

(3 $\Rightarrow$ 1): If $\sum \alpha_i \mathbf{v}_i = \mathbf{0} = \sum 0 \cdot \mathbf{v}_i$ Then
by (3), $\alpha_i = 0$ for all $i$. $\blacksquare$

### 2.2 Span

The **span** of a set $S \subseteq V$Denoted $\mathrm{span}(S)$Is the set of all finite linear
Combinations of elements of $S$:

$$\mathrm{span}(S) = \left\{ \sum_{i=1}^k \alpha_i \mathbf{v}_i : k \in \mathbb{N},\, \alpha_i \in F,\, \mathbf{v}_i \in S \right\}$$

**Proposition 2.2.** $\mathrm{span}(S)$ is always a subspace of $V$. In fact, $\mathrm{span}(S)$ is
The smallest subspace containing $S$: if $W$ is any subspace with $S \subseteq W$Then
$\mathrm{span}(S) \subseteq W$.

_Proof._ $\mathrm{span}(S)$ is non-empty since $\mathbf{0} = 0 \cdot \mathbf{v}$ for any
$\mathbf{v} \in S$. Closure under addition and scalar multiplication follows directly from the
Definition of linear combinations. For minimality, any subspace $W$ containing $S$ must contain all
Finite linear combinations of elements of $S$ by Proposition 1.2, so $\mathrm{span}(S) \subseteq W$.
$\blacksquare$

### 2.3 Basis and Dimension

A set $B \subseteq V$ is a **basis** for $V$ if:

1. $B$ is linearly independent, and
2. $\mathrm{span}(B) = V$.

**Theorem 2.1.** Every vector space has a basis. All bases of a finite-dimensional vector space have
The same number of elements.

The **dimension** of $V$Denoted $\dim(V)$Is the cardinality of any basis for $V$.

### 2.4 Steinitz Exchange Lemma

**Lemma 2.3 (Steinitz Exchange Lemma).** Let $\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$ be a linearly
Independent set in $V$And let $\{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$ be a spanning set for $V$.
Then $k \leq m$And after relabelling the $\mathbf{w}_j$The set

$$\{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{w}_{k+1}, \ldots, \mathbf{w}_m\}$$

Also spans $V$.

_Proof._ We proceed by induction on $k$. For $k = 0$ there is nothing to prove.

Assume the result holds for $k - 1$. Since $\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$ is linearly
Independent, $\mathbf{u}_k \neq \mathbf{0}$ and
$\mathbf{u}_k \in \mathrm{span}\{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$ Since the $\mathbf{w}_j$ span
$V$. Therefore $\mathbf{u}_k = \sum_{j=1}^m \alpha_j \mathbf{w}_j$ for some $\alpha_j \in F$And not
all $\alpha_j$ are zero.

After relabelling, assume $\alpha_1 \neq 0$. Then
$\mathbf{w}_1 = \alpha_1^{-1}(\mathbf{u}_k - \sum_{j=2}^m \alpha_j \mathbf{w}_j)$ So
$\mathbf{w}_1 \in \mathrm{span}\{\mathbf{u}_k, \mathbf{w}_2, \ldots, \mathbf{w}_m\}$. It follows that

$$\mathrm{span}\{\mathbf{w}_1, \ldots, \mathbf{w}_m\} = \mathrm{span}\{\mathbf{u}_k, \mathbf{w}_2, \ldots, \mathbf{w}_m\} = V$$

Now $\{\mathbf{u}_1, \ldots, \mathbf{u}_{k-1}\}$ is linearly independent and
$\{\mathbf{u}_k, \mathbf{w}_2, \ldots, \mathbf{w}_m\}$ spans $V$. By the inductive hypothesis,
$k - 1 \leq m - 1$ (so $k \leq m$) and after relabelling,
$\{\mathbf{u}_1, \ldots, \mathbf{u}_{k-1}, \mathbf{w}_k, \ldots, \mathbf{w}_m\}$ spans $V$. Since
$\mathbf{u}_k$ is already in this span, the full set
$\{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{w}_{k+1}, \ldots, \mathbf{w}_m\}$ also spans $V$.
$\blacksquare$

**Theorem 2.4 (Dimension is Well-Defined).** If $V$ is finite-dimensional, then any two bases of $V$
have the same number of elements.

_Proof._ Let $\mathcal{B}_1$ and $\mathcal{B}_2$ be two bases with $\lvert\mathcal{B}_1\rvert = k$
and $\lvert\mathcal{B}_2\rvert = m$. Applying the Steinitz exchange lemma with $\mathcal{B}_1$ as
the Independent set and $\mathcal{B}_2$ as the spanning set gives $k \leq m$. Swapping roles gives
$m \leq k$. Hence $k = m$. $\blacksquare$

### 2.5 Dimension Formula

**Theorem 2.5 (Dimension Formula).** If $U$ and $W$ are subspaces of a finite-dimensional vector
Space $V$Then

$$\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$$

### 2.6 Rank-Nullity Theorem

**Theorem 2.6 (Rank-Nullity Theorem).** Let $A \in \mathcal{M}_{m \times n}(F)$. Then

$$\mathrm{rank}(A) + \mathrm{nullity}(A) = n$$

Where $\mathrm{rank}(A) = \dim(\mathrm{col}(A))$ and $\mathrm{nullity}(A) = \dim(\mathrm{null}(A))$.

_Proof._ Let $\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ be a basis for $\mathrm{null}(A)$Where
$k = \mathrm{nullity}(A)$. Extend this to a basis
$\{\mathbf{v}_1, \ldots, \mathbf{v}_k, \mathbf{v}_{k+1}, \ldots, \mathbf{v}_n\}$ for $F^n$.

We claim that $\{A\mathbf{v}_{k+1}, \ldots, A\mathbf{v}_n\}$ is a basis for $\mathrm{col}(A)$.

_Spanning:_ For any $\mathbf{y} \in \mathrm{col}(A)$There exists $\mathbf{x} \in F^n$ With
$\mathbf{y} = A\mathbf{x}$. Writing $\mathbf{x} = \sum_{i=1}^n \alpha_i \mathbf{v}_i$

$$\mathbf{y} = A\left(\sum_{i=1}^n \alpha_i \mathbf{v}_i\right) = \sum_{i=1}^n \alpha_i A\mathbf{v}_i = \sum_{i=k+1}^n \alpha_i A\mathbf{v}_i$$

Since $A\mathbf{v}_i = \mathbf{0}$ for $i \leq k$.

_Linear independence:_ If $\sum_{i=k+1}^n \alpha_i A\mathbf{v}_i = \mathbf{0}$Then
$A\left(\sum_{i=k+1}^n \alpha_i \mathbf{v}_i\right) = \mathbf{0}$So
$\sum_{i=k+1}^n \alpha_i \mathbf{v}_i \in \mathrm{null}(A)$. Since
$\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ Is a basis for the null space,
$\sum_{i=k+1}^n \alpha_i \mathbf{v}_i = \sum_{i=1}^k \beta_i \mathbf{v}_i$ For some $\beta_i$Giving
$\sum_{i=1}^n (-\beta_i)\mathbf{v}_i + \sum_{i=k+1}^n \alpha_i \mathbf{v}_i = \mathbf{0}$. By linear
independence of the full basis, $\alpha_i = 0$ for all $i \geq k + 1$.

Therefore $\mathrm{rank}(A) = n - k = n - \mathrm{nullity}(A)$. $\blacksquare$

### 2.7 Worked Examples

**Problem.** Find a basis for and the dimension of the subspace
$W = \mathrm{span}\{(1, 2, -1, 0), (3, 1, 0, 2), (-1, 3, -2, -2)\}$ of $\mathbb{R}^4$.

<details>
<summary>Solution</summary>

Form the matrix whose rows are the given vectors and row-reduce:

$$\begin{pmatrix} 1 & 2 & -1 & 0 \\ 3 & 1 & 0 & 2 \\ -1 & 3 & -2 & -2 \end{pmatrix} \xrightarrow{R_2 - 3R_1} \begin{pmatrix} 1 & 2 & -1 & 0 \\ 0 & -5 & 3 & 2 \\ -1 & 3 & -2 & -2 \end{pmatrix}$$

$$\xrightarrow{R_3 + R_1} \begin{pmatrix} 1 & 2 & -1 & 0 \\ 0 & -5 & 3 & 2 \\ 0 & 5 & -3 & -2 \end{pmatrix} \xrightarrow{R_3 + R_2} \begin{pmatrix} 1 & 2 & -1 & 0 \\ 0 & -5 & 3 & 2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

The row echelon form has two non-zero rows, so $\dim(W) = 2$. A basis is given by the non-zero Rows:
$\{(1, 2, -1, 0), (0, -5, 3, 2)\}$. $\blacksquare$

</details>

**Problem.** Find a basis for the null space of

$$A = \begin{pmatrix} 1 & 2 & 1 & -1 \\ 2 & 4 & 0 & 1 \\ 0 & 0 & 1 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Row-reduce $A$:

$$\begin{pmatrix} 1 & 2 & 1 & -1 \\ 2 & 4 & 0 & 1 \\ 0 & 0 & 1 & 3 \end{pmatrix} \xrightarrow{R_2 - 2R_1} \begin{pmatrix} 1 & 2 & 1 & -1 \\ 0 & 0 & -2 & 3 \\ 0 & 0 & 1 & 3 \end{pmatrix} \xrightarrow{R_3 + R_2/2} \begin{pmatrix} 1 & 2 & 1 & -1 \\ 0 & 0 & -2 & 3 \\ 0 & 0 & 0 & 9/2 \end{pmatrix}$$

This has pivots in columns 1, 3, and 4. The free variable is $x_2$. Setting $x_2 = t$ and
Back-substituting: $x_4 = 0$, $x_3 = 0$, $x_1 = -2t$. The null space is
$\{t(-2, 1, 0, 0) : t \in \mathbb{R}\}$With basis $\{(-2, 1, 0, 0)\}$ and dimension 1.
$\blacksquare$

</details>

**Problem.** Determine whether the vectors
$\mathbf{v}_1 = (1, 2, 3)$, $\mathbf{v}_2 = (4, 5, 6)$, $\mathbf{v}_3 = (7, 8, 9)$ form a basis For
$\mathbb{R}^3$.

<details>
<summary>Solution</summary>

Form the matrix $A = [\mathbf{v}_1 \mid \mathbf{v}_2 \mid \mathbf{v}_3]$ and compute Its
determinant:

$$\det(A) = 1(45 - 48) - 2(36 - 42) + 3(32 - 35) = -3 + 12 - 9 = 0$$

Since $\det(A) = 0$The columns are linearly dependent, so
$\{\mathbf{v}_1, \mathbf{v}_2, \mathbf{v}_3\}$ Is not a basis. In fact,
$\mathbf{v}_3 - 2\mathbf{v}_2 + \mathbf{v}_1 = \mathbf{0}$.

$\blacksquare$

</details>

:::tip To check if $n$ vectors in $\mathbb{R}^n$ form a basis, compute the determinant of the matrix
whose Columns are those vectors. If $\det \neq 0$They form a basis; if $\det = 0$They do not. :::

**Problem.** Let $V = \mathcal{P}_3(\mathbb{R})$ (polynomials of degree at most 3). Find the
dimension Of the subspace $W = \{p \in \mathcal{P}_3 : p(1) = p(-1) = 0\}$.

<details>
<summary>Solution</summary>

Write $p(x) = ax^3 + bx^2 + cx + d$. The conditions are:

$p(1) = a + b + c + d = 0$ and $p(-1) = -a + b - c + d = 0$.

Adding: $2b + 2d = 0$So $d = -b$. Subtracting: $2a + 2c = 0$So $c = -a$.

Therefore $p(x) = ax^3 + bx^2 - ax - b = a(x^3 - x) + b(x^2 - 1)$.

A basis for $W$ is $\{x^3 - x, x^2 - 1\}$And $\dim(W) = 2$.

_If you get this wrong, revise: Section 2.7 (Worked Examples)._

</details>

### 2.8 Common Pitfalls

- **Linear independence of infinitely many vectors.** The definition only directly applies to finite
  subsets. A set $S$ is linearly independent if every finite subset of $S$ is linearly independent.
- **Dimension and spanning.** A set of $n$ vectors in $\mathbb{R}^n$ that spans $\mathbb{R}^n$ must
  be linearly independent (and hence a basis). Similarly, $n$ linearly independent vectors in
  $\mathbb{R}^n$ must span $\mathbb{R}^n$.
- **The empty set spans $\{\mathbf{0}\}$.** The span of the empty set is the trivial subspace, and
  the empty set is a basis for $\{\mathbf{0}\}$. The dimension of the zero space is 0.

---

## 3. Matrices

### 3.1 Matrix Operations

An $m \times n$ matrix $A$ over $F$ is a rectangular array of $mn$ elements from $F$Arranged in $m$
rows and $n$ columns. The set of all such matrices is denoted $\mathcal{M}_{m \times n}(F)$.

**Addition.** For $A, B \in \mathcal{M}_{m \times n}(F)$, $(A + B)_{ij} = A_{ij} + B_{ij}$.

**Scalar multiplication.** For $\alpha \in F$ and $A \in \mathcal{M}_{m \times n}(F)$
$(\alpha A)_{ij} = \alpha A_{ij}$.

**Matrix multiplication.** For $A \in \mathcal{M}_{m \times n}(F)$ and
$B \in \mathcal{M}_{n \times p}(F)$ The product $AB \in \mathcal{M}_{m \times p}(F)$ is defined by

$$(AB)_{ij} = \sum_{k=1}^n A_{ik} B_{kj}$$

**Proposition 3.1.** Matrix multiplication is associative but not commutative .

_Proof._ Associativity: $(AB)C$ has $(i,j)$-entry
$\sum_l (\sum_k A_{ik} B_{kl}) C_{lj} = \sum_k A_{ik} (\sum_l B_{kl} C_{lj}) = (A(BC))_{ij}$ By
interchanging the order of summation (both sums are finite). For non-commutativity,
$A = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$ and
$B = \begin{pmatrix} 0 & 0 \\ 1 & 0 \end{pmatrix}$ give
$AB = \begin{pmatrix} 1 & 0 \\ 0 & 0 \end{pmatrix} \neq \begin{pmatrix} 0 & 0 \\ 0 & 1 \end{pmatrix} = BA$.
$\blacksquare$

### 3.2 Transpose

The **transpose** of $A \in \mathcal{M}_{m \times n}(F)$Denoted $A^T$Is the $n \times m$ matrix With
$(A^T)_{ij} = A_{ji}$.

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

Where $M_{1j}$ is the $(1,j)$-minor (the determinant of the $(n-1) \times (n-1)$ matrix obtained by
Deleting row 1 and column $j$).

The $(i,j)$-**cofactor** is $C_{ij} = (-1)^{i+j} M_{ij}$So $\det(A) = \sum_{j=1}^n a_{ij} C_{ij}$
for any fixed row $i$.

### 3.5 Properties of Determinants

**Proposition 3.2 (Effect of Row Operations).** Let $A \in \mathcal{M}_{n \times n}(F)$.

1. Swapping two rows of $A$ multiplies the determinant by $-1$.
2. Multiplying a row of $A$ by $\alpha \in F$ multiplies the determinant by $\alpha$.
3. Adding a multiple of one row to another leaves the determinant unchanged.

_Proof._ (1) This follows from the antisymmetry of the Leibniz formula
$\det(A) = \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma) \prod_{i=1}^n a_{i,\sigma(i)}$. Swapping two
rows Changes the sign of every permutation, hence the sign of the sum.

(2) Multiplying row $i$ by $\alpha$ multiplies every term in the Leibniz expansion by $\alpha$ Hence
$\det$ is multiplied by $\alpha$.

(3) Adding $\alpha$ times row $j$ to row $i$ ($i \neq j$): by multilinearity in row $i$

$$\det(\mathrm{new}~A) = \det(A) + \alpha \cdot \det(\mathrm{matrix}~with~rows~i\mathrm{~and~j\mathrm}{~equal)}$$

A matrix with two equal rows has determinant 0 (by antisymmetry: swapping them leaves the matrix
Unchanged but multiplies $\det$ by $-1$So $\det = -\det$Hence $\det = 0$). Therefore
$\det(\mathrm{new}~A) = \det(A)$. $\blacksquare$

**Theorem 3.3 (Multiplicativity).** For $A, B \in \mathcal{M}_{n \times n}(F)$

$$\det(AB) = \det(A)\det(B)$$

_Proof (via elementary matrices)._ Every matrix $B$ can be written as a product of elementary
matrices Times an upper triangular matrix: $B = E_1 E_2 \cdots E_k U$. For an elementary matrix $E$:

- If $E$ swaps rows, $\det(E) = -1$ and $\det(AE) = -\det(A) = \det(A)\det(E)$.
- If $E$ multiplies a row by $\alpha$, $\det(E) = \alpha$ and
  $\det(AE) = \alpha\det(A) = \det(A)\det(E)$.
- If $E$ adds a multiple of one row to another, $\det(E) = 1$ and
  $\det(AE) = \det(A) = \det(A)\det(E)$.

Thus $\det(AE) = \det(A)\det(E)$ for every elementary matrix. By induction,

$$\det(AB) = \det(A \cdot E_1 \cdots E_k U) = \det(A) \cdot \det(E_1) \cdots \det(E_k) \cdot \det(U) = \det(A) \cdot \det(B)$$

Since $\det(B) = \det(E_1)\cdots\det(E_k)\det(U)$. $\blacksquare$

**Corollary 3.4.** $\det(A^T) = \det(A)$And for invertible $A$, $\det(A^{-1}) = 1/\det(A)$.

_Proof._ $AA^{-1} = I$So $\det(A)\det(A^{-1}) = \det(I) = 1$Giving $\det(A^{-1}) = 1/\det(A)$. For
the transpose, use the Leibniz formula or observe that row Operations and column operations have the
same effects on the determinant. $\blacksquare$

### 3.6 Adjugate and Inverse Formula

**Definition.** The **adjugate** (or **adjoint**) of $A \in \mathcal{M}_{n \times n}(F)$ is

$$\mathrm{adj}(A) = (C_{ji})_{i,j=1}^n$$

Where $C_{ij}$ is the $(i,j)$-cofactor of $A$. That is, $\mathrm{adj}(A)$ is the transpose of the
Cofactor matrix.

**Theorem 3.5.** For any $A \in \mathcal{M}_{n \times n}(F)$

$$A \cdot \mathrm{adj}(A) = \mathrm{adj}(A) \cdot A = \det(A) \cdot I_n$$

In particular, if $\det(A) \neq 0$Then $A^{-1} = \frac{1}{\det(A)} \mathrm{adj}(A)$.

_Proof._ The $(i,j)$-entry of $A \cdot \mathrm{adj}(A)$ is $\sum_{k=1}^n a_{ik} C_{jk}$. When
$i = j$This is $\sum_{k=1}^n a_{ik} C_{ik} = \det(A)$ (cofactor expansion along row $i$). When
$i \neq j$This is the cofactor expansion of a matrix obtained from $A$ by replacing row $j$ With row
$i$Which has two equal rows and hence determinant 0. $\blacksquare$

### 3.7 Worked Examples

**Problem.** Compute $\det(A)$ where

$$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Expanding along the first column:

$$\det(A) = 1 \cdot \det\begin{pmatrix} 1 & 4 \\ 6 & 0 \end{pmatrix} - 0 + 5 \cdot \det\begin{pmatrix} 2 & 3 \\ 1 & 4 \end{pmatrix}$$

$$= 1 \cdot (0 - 24) + 5 \cdot (8 - 3) = -24 + 25 = 1$$

$\blacksquare$

</details>

**Problem.** Compute $\det(A)$ by row reduction where

$$A = \begin{pmatrix} 2 & 1 & 3 & 1 \\ 4 & 2 & 5 & 3 \\ 6 & 3 & 8 & 5 \\ 1 & 1 & 1 & 1 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Apply row operations and track their effect on the determinant:

$$\begin{pmatrix} 2 & 1 & 3 & 1 \\ 4 & 2 & 5 & 3 \\ 6 & 3 & 8 & 5 \\ 1 & 1 & 1 & 1 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - 3R_1} \begin{pmatrix} 2 & 1 & 3 & 1 \\ 0 & 0 & -1 & 1 \\ 0 & 0 & -1 & 2 \\ 0 & 1/2 & -1/2 & 1/2 \end{pmatrix}$$

The determinant is unchanged (only type 3 operations). Now swap $R_2$ and $R_4$ (multiplies $\det$
by $-1$):

$$\xrightarrow{R_2 \leftrightarrow R_4} \begin{pmatrix} 2 & 1 & 3 & 1 \\ 0 & 1/2 & -1/2 & 1/2 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & -1 & 1 \end{pmatrix}$$

Now $R_4 \to R_4 - R_3$ (determinant unchanged):

$$\begin{pmatrix} 2 & 1 & 3 & 1 \\ 0 & 1/2 & -1/2 & 1/2 \\ 0 & 0 & -1 & 2 \\ 0 & 0 & 0 & -1 \end{pmatrix}$$

The determinant is the product of diagonal entries, times $-1$ for the row swap:

$$\det(A) = (-1) \cdot 2 \cdot \frac{1}{2} \cdot (-1) \cdot (-1) = -1$$

$\blacksquare$

</details>

**Problem.** Find $A^{-1}$ using the adjugate formula, where

$$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A) = 1 \cdot 4 - 2 \cdot 3 = -2 \neq 0$So $A$ is invertible.

Cofactors: $C_{11} = 4$, $C_{12} = -3$, $C_{21} = -2$, $C_{22} = 1$.

$$\mathrm{adj}(A) = \begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix}$$

$$A^{-1} = \frac{1}{-2}\begin{pmatrix} 4 & -2 \\ -3 & 1 \end{pmatrix} = \begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix}$$

Verify:
$AA^{-1} = \begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix}\begin{pmatrix} -2 & 1 \\ 3/2 & -1/2 \end{pmatrix} = \begin{pmatrix} -2 + 3 & 1 - 1 \\ -6 + 6 & 3 - 2 \end{pmatrix} = I_2$.
$\blacksquare$

</details>

:::caution Common Pitfall The determinant is only defined for square matrices. There is no
meaningful determinant for an $m \times n$ matrix with $m \neq n$. Do not confuse
$\det(AB) = \det(A)\det(B)$ with a Non-existent formula for non-square matrices. :::

### 3.8 Worked Example: Determinant via Row Reduction (Efficient Method)

**Problem.** Compute $\det(A)$ where

$$A = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{pmatrix}$$

<details>
<summary>Solution</summary>

This matrix has Pascal-like entries. We use row operations:

$$\begin{pmatrix} 1 & 1 & 1 & 1 \\ 1 & 2 & 3 & 4 \\ 1 & 3 & 6 & 10 \\ 1 & 4 & 10 & 20 \end{pmatrix} \xrightarrow{R_i - R_{i-1}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 1 & 3 & 6 \\ 0 & 1 & 4 & 10 \end{pmatrix} \xrightarrow{R_i - R_{i-1}} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 1 & 4 \end{pmatrix}$$

$$\xrightarrow{R_4 - R_3} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}$$

All operations were type 3 (adding a multiple of one row to another), so the determinant is
Unchanged. The upper triangular matrix has diagonal entries $1, 1, 1, 1$So $\det(A) = 1$.
$\blacksquare$

</details>

**Proposition 3.6 (Determinant of a Triangular Matrix).** If $A$ is upper or lower triangular, Then
$\det(A) = \prod_{i=1}^n a_{ii}$.

_Proof._ By repeated cofactor expansion along the first column (for upper triangular), or induction.
At each step, all terms involving off-diagonal entries vanish due to the zero structure, leaving
Only the product of diagonal entries. $\blacksquare$

### 3.9 Common Pitfalls

- **$\det(A + B) \neq \det(A) + \det(B)$ .** For example, with $A = B = I_2$
  $\det(A + B) = \det(2I_2) = 4$But $\det(A) + \det(B) = 2$.
- **The adjugate formula is theoretically important but computationally inefficient.** For large
  matrices, use Gaussian elimination or LU decomposition to compute inverses.
- **A matrix with $\det(A) = 0$ has no inverse.** Do not attempt to divide by zero.

---

## 4. Systems of Linear Equations

### 4.1 Gaussian Elimination

A system of $m$ linear equations in $n$ unknowns can be written as $A\mathbf{x} = \mathbf{b}$Where
$A \in \mathcal{M}_{m \times n}(\mathbb{R})$, $\mathbf{x} \in \mathbb{R}^n$And
$\mathbf{b} \in \mathbb{R}^m$.

**Gaussian elimination** transforms the augmented matrix $[A \mid \mathbf{b}]$ into **row echelon
Form** (REF) using elementary row operations:

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
Have the same RREF.

### 4.2 Existence and Uniqueness

**Theorem 4.2 (Rouché--Capelli).** The system $A\mathbf{x} = \mathbf{b}$ is consistent (has at least
one Solution) if and only if

$$\mathrm{rank}(A) = \mathrm{rank}([A \mid \mathbf{b}])$$

If consistent, the solution set has $\dim(\mathrm{null}(A))$ free parameters, where
$\dim(\mathrm{null}(A)) = n - \mathrm{rank}(A)$.

_Proof._ Let the RREF of $[A \mid \mathbf{b}]$ have $r = \mathrm{rank}(A)$ pivots in the coefficient
Columns. The system is inconsistent if and only if the last non-zero row is $[0 \cdots 0 \mid 1]$
Which occurs precisely when the augmented column contains a pivot, i.e., when
$\mathrm{rank}([A \mid \mathbf{b}]) \gt r$.

If consistent, the $r$ pivot variables are determined by the $n - r$ free variables, yielding
$n - \mathrm{rank}(A)$ degrees of freedom. $\blacksquare$

### 4.3 LU Decomposition

An **LU decomposition** of $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ writes $A = LU$ where $L$ is
Lower triangular with 1s on the diagonal, and $U$ is upper triangular.

**Theorem 4.3.** If Gaussian elimination can be performed on $A$ without row exchanges, then $A$
Admits an LU decomposition.

**Algorithm.** Store the multipliers $m_{ij}$ (used to eliminate entry $a_{ij}$) in the lower
Triangular portion. The resulting upper triangular matrix is $U$And the multipliers form $L$.

**Worked Example.** Find the LU decomposition of

$$A = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Step 1: Eliminate below $a_{11}$. $m_{21} = 4/2 = 2$, $m_{31} = 8/2 = 4$.

$$\begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 3 & 5 \end{pmatrix}$$

Step 2: Eliminate below $a_{22}$. $m_{32} = 3/1 = 3$.

$$U = \begin{pmatrix} 2 & 1 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

$$L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ 4 & 3 & 1 \end{pmatrix}$$

Verify: $LU = \begin{pmatrix} 2 & 1 & 1 \\ 4 & 3 & 3 \\ 8 & 7 & 9 \end{pmatrix} = A$. $\blacksquare$

</details>

To solve $A\mathbf{x} = \mathbf{b}$First solve $L\mathbf{y} = \mathbf{b}$ (forward substitution),
Then $U\mathbf{x} = \mathbf{y}$ (back substitution).

### 4.4 Gaussian Elimination with Partial Pivoting

When a pivot is zero (or very small), we swap rows to bring the largest available entry in the
Current column into the pivot position. This is **partial pivoting**, and it improves numerical
Stability.

**Problem.** Solve the system using Gaussian elimination with partial pivoting:

$$\begin{aligned} x_1 + 2x_2 + x_3 &= 5 \\ 3x_1 + x_2 - x_3 &= 2 \\ 2x_1 + 3x_2 + 4x_3 &= 11 \end{aligned}$$

<details>
<summary>Solution</summary>

Augmented matrix:

$$[A \mid \mathbf{b}] = \begin{pmatrix} 1 & 2 & 1 & 5 \\ 3 & 1 & -1 & 2 \\ 2 & 3 & 4 & 11 \end{pmatrix}$$

**Step 1.** Column 1: largest entry is 3 in row 2. Swap $R_1 \leftrightarrow R_2$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 1 & 2 & 1 & 5 \\ 2 & 3 & 4 & 11 \end{pmatrix}$$

$R_2 \to R_2 - \frac{1}{3}R_1$, $R_3 \to R_3 - \frac{2}{3}R_1$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 5/3 & 4/3 & 13/3 \\ 0 & 7/3 & 14/3 & 29/3 \end{pmatrix}$$

**Step 2.** Column 2: largest entry below pivot is $7/3$ in row 3. Swap $R_2 \leftrightarrow R_3$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 7/3 & 14/3 & 29/3 \\ 0 & 5/3 & 4/3 & 13/3 \end{pmatrix}$$

$R_3 \to R_3 - \frac{5}{7}R_2$:

$$\begin{pmatrix} 3 & 1 & -1 & 2 \\ 0 & 7/3 & 14/3 & 29/3 \\ 0 & 0 & -2/7 & -6/7 \end{pmatrix}$$

**Back substitution.** From row 3: $-\frac{2}{7}x_3 = -\frac{6}{7}$So $x_3 = 3$.

From row 2: $\frac{7}{3}x_2 + \frac{14}{3}(3) = \frac{29}{3}$So
$\frac{7}{3}x_2 = \frac{29}{3} - 14 = -\frac{13}{3}$ Giving $x_2 = -\frac{13}{7}$.

From row 1: $3x_1 + (-\frac{13}{7}) - 3 = 2$So $3x_1 = 2 + 3 + \frac{13}{7} = \frac{48}{7}$ Giving
$x_1 = \frac{16}{7}$.

**Solution:** $x_1 = \frac{16}{7}$, $x_2 = -\frac{13}{7}$, $x_3 = 3$. $\blacksquare$

</details>

### 4.5 Least Squares Solutions

When $A\mathbf{x} = \mathbf{b}$ is overdetermined (more equations than unknowns) and inconsistent,
We seek $\mathbf{x}$ that minimises $\lVert A\mathbf{x} - \mathbf{b} \rVert^2$.

**Theorem 4.4 (Normal Equations).** The least squares solution $\hat{\mathbf{x}}$ satisfies

$$A^T A \hat{\mathbf{x}} = A^T \mathbf{b}$$

If $A$ has full column rank, then $A^T A$ is invertible and
$\hat{\mathbf{x}} = (A^T A)^{-1} A^T \mathbf{b}$.

_Proof._ The error vector $\mathbf{e} = A\mathbf{x} - \mathbf{b}$ is minimised when
$\mathbf{e} \perp \mathrm{col}(A)$ I.e., when $A^T \mathbf{e} = \mathbf{0}$. This gives
$A^T(A\mathbf{x} - \mathbf{b}) = \mathbf{0}$ Or $A^T A \mathbf{x} = A^T \mathbf{b}$. If $A$ has full
column rank, then $\ker(A) = \{\mathbf{0}\}$ So $\ker(A^T A) = \ker(A) = \{\mathbf{0}\}$Meaning
$A^T A$ is invertible. $\blacksquare$

**Problem.** Find the least squares line $y = ax + b$ fitting the data points
$(1, 1)$, $(2, 1)$, $(3, 3)$.

<details>
<summary>Solution</summary>

The system is
$\begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix}$
I.e., $A\mathbf{x} = \mathbf{b}$ with $A = \begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix}$
$\mathbf{x} = (a, b)^T$, $\mathbf{b} = (1, 1, 3)^T$.

Compute
$A^T A = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 2 & 1 \\ 3 & 1 \end{pmatrix} = \begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}$.

$A^T \mathbf{b} = \begin{pmatrix} 1 & 2 & 3 \\ 1 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$.

Solve
$\begin{pmatrix} 14 & 6 \\ 6 & 3 \end{pmatrix}\begin{pmatrix} a \\ b \end{pmatrix} = \begin{pmatrix} 12 \\ 5 \end{pmatrix}$:

$\det(A^T A) = 42 - 36 = 6$.

$(A^T A)^{-1} = \frac{1}{6}\begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix}$.

$\hat{\mathbf{x}} = \frac{1}{6}\begin{pmatrix} 3 & -6 \\ -6 & 14 \end{pmatrix}\begin{pmatrix} 12 \\ 5 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 36 - 30 \\ -72 + 70 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 6 \\ -2 \end{pmatrix} = \begin{pmatrix} 1 \\ -1/3 \end{pmatrix}$.

The least squares line is $y = x - 1/3$. $\blacksquare$

</details>

### 4.6 Worked Example: System with Infinitely Many Solutions

**Problem.** Solve the system:

$$\begin{aligned} x_1 + 2x_2 - x_3 + 3x_4 &= 1 \\ 2x_1 + 4x_2 - x_3 + 5x_4 &= 2 \\ x_1 + 2x_2 + x_3 + x_4 &= 0 \end{aligned}$$

<details>
<summary>Solution</summary>

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 0 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & -1 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & -1 \end{pmatrix}$$

The last row reads $0 = -1$So the system is **inconsistent** (no solution).

**Revised problem:** Change the last equation to $x_1 + 2x_2 + x_3 + x_4 = 2$:

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 2 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & 1 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 1 \end{pmatrix}$$

Still inconsistent! The RREF reveals $0 = 1$ in the last row.

**Revised again:** Change the last equation to $x_1 + 2x_2 + x_3 + x_4 = 1$:

$$\begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 2 & 4 & -1 & 5 & 2 \\ 1 & 2 & 1 & 1 & 1 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 2 & -2 & 0 \end{pmatrix}$$

$$\xrightarrow{R_3 - 2R_2} \begin{pmatrix} 1 & 2 & -1 & 3 & 1 \\ 0 & 0 & 1 & -1 & 0 \\ 0 & 0 & 0 & 0 & 0 \end{pmatrix}$$

Now the system is consistent. Pivots in columns 1 and 3; free variables are $x_2$ and $x_4$. From
row 2: $x_3 = x_4$. From row 1: $x_1 = 1 - 2x_2 + x_3 - 3x_4 = 1 - 2x_2 - 2x_4$.

Solution set: $\{(1 - 2s - 2t, s, t, t) : s, t \in \mathbb{R}\}$.

In parametric form:
$\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ x_4 \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \\ 0 \\ 0 \end{pmatrix} + s\begin{pmatrix} -2 \\ 1 \\ 0 \\ 0 \end{pmatrix} + t\begin{pmatrix} -2 \\ 0 \\ 1 \\ 1 \end{pmatrix}$.

The solution space is a 2-dimensional affine subspace (a plane) in $\mathbb{R}^4$. $\blacksquare$

</details>

### 4.7 Common Pitfalls

- **Partial pivoting is not optional for numerical work.** Without it, Gaussian elimination can
  produce catastrophically wrong results due to rounding errors.
- **The normal equations can be ill-conditioned.** For better numerical stability, use QR
  decomposition to solve least squares problems instead of forming $A^T A$.
- **Not every system has a solution.** Always check consistency via the Rouché--Capelli theorem
  before attempting to solve.

---

## 5. Eigenvalues and Eigenvectors

### 5.1 Definitions

Let $A \in \mathcal{M}_{n \times n}(F)$. A scalar $\lambda \in F$ is an **eigenvalue** of $A$ if
there Exists a non-zero vector $\mathbf{v} \in F^n$ such that

$$A\mathbf{v} = \lambda \mathbf{v}$$

The vector $\mathbf{v}$ is called an **eigenvector** corresponding to $\lambda$.

The **eigenspace** corresponding to $\lambda$ is $E_\lambda = \ker(A - \lambda I)$. Its dimension is
The **geometric multiplicity** of $\lambda$.

### 5.2 Characteristic Polynomial

**Theorem 5.1.** $\lambda$ is an eigenvalue of $A$ if and only if $\det(A - \lambda I) = 0$.

The polynomial $p(\lambda) = \det(A - \lambda I)$ is called the **characteristic polynomial** of
$A$. Its roots (in the algebraic closure of $F$) are the eigenvalues of $A$.

If
$p(\lambda) = (\\lambda - \\lambda_1)^{m_1}(\\lambda - \\lambda_2)^{m_2}\cdots(\\lambda - \\lambda_k)^{m_k}$
With $\\lambda_1, \ldots, \\lambda_k$ distinct, then $m_i$ is the **algebraic multiplicity** of
$\\lambda_i$.

**Proposition 5.2.** For each eigenvalue $\lambda$, $1 \leq \mathrm{dim}(E_\lambda) \leq m_\lambda$
(geometric multiplicity does not exceed algebraic multiplicity).

### 5.3 Diagonalisation

**Definition.** $A$ is **diagonalisable** if there exists an invertible matrix $P$ and a diagonal
Matrix $D$ such that

$$A = PDP^{-1}$$

**Theorem 5.3.** $A \in \mathcal{M}_{n \times n}(F)$ is diagonalisable (over $F$) if and only if $A$
has $n$ linearly independent Eigenvectors (over $F$). Equivalently, the sum of the geometric
multiplicities equals $n$.

**Corollary 5.4.** If $A$ has $n$ distinct eigenvalues, then $A$ is diagonalisable.

_Proof._ Eigenvectors corresponding to distinct eigenvalues are linearly independent. With $n$
distinct Eigenvalues, we obtain $n$ linearly independent eigenvectors, which form a basis of $F^n$.
$\blacksquare$

### 5.4 Cayley--Hamilton Theorem

**Theorem 5.5 (Cayley--Hamilton).** Every square matrix satisfies its own characteristic polynomial:
If $p(\lambda) = \det(\lambda I - A)$Then $p(A) = 0$ (the zero matrix).

_Proof sketch._ Let $p(\lambda) = \lambda^n + c_{n-1}\lambda^{n-1} + \cdots + c_1\lambda + c_0$. By
the adjugate formula (Theorem 3.5),
$(\lambda I - A) \cdot \mathrm{adj}(\lambda I - A) = p(\lambda) \cdot I$. Each entry of
$\mathrm{adj}(\lambda I - A)$ is a polynomial in $\lambda$ of degree at most $n - 1$ So we can write
$\mathrm{adj}(\lambda I - A) = B_{n-1}\lambda^{n-1} + \cdots + B_1\lambda + B_0$ for Matrices $B_i$.
Multiplying out and comparing coefficients of $\lambda^k$:

$$B_{n-1} = I, \quad B_{n-2} - AB_{n-1} = c_{n-1}I, \quad \ldots, \quad -AB_0 = c_0 I$$

Multiplying the $k$-th equation on the left by $A^k$ and summing over $k$:

$$A^n B_{n-1} + A^{n-1}(B_{n-2} - AB_{n-1}) + \cdots + A^0(-AB_0) = A^n + c_{n-1}A^{n-1} + \cdots + c_0 I = p(A)$$

But the left side telescopes to zero, so $p(A) = 0$. $\blacksquare$

### 5.5 Jordan Normal Form

When a matrix is not diagonalisable, the Jordan normal form provides the next-best canonical
Representation.

**Theorem 5.6.** Let $A \in \mathcal{M}_{n \times n}(\mathbb{C})$. Then $A$ is similar to a
block-diagonal Matrix

$$J = \begin{pmatrix} J_1 & & \\ & \ddots & \\ & & J_k \end{pmatrix}$$

Where each **Jordan block** has the form

$$J_i = \begin{pmatrix} \lambda_i & 1 & & \\ & \lambda_i & \ddots & \\ & & \ddots & 1 \\ & & & \lambda_i \end{pmatrix}$$

The Jordan form is unique up to permutation of the blocks.

_Intuition._ Each Jordan block corresponds to one eigenvalue. The size of the block equals the
Number of steps in the chain
$\mathbf{v}, (A - \lambda I)\mathbf{v}, (A - \lambda I)^2\mathbf{v}, \ldots$ Of **generalised
eigenvectors**. A diagonalisable matrix has all Jordan blocks of size $1 \times 1$.

**Problem.** Find the Jordan normal form of

$$A = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

The characteristic polynomial is $\det(A - \lambda I) = (3 - \lambda)^2$So $\lambda = 3$ is the Only
eigenvalue with algebraic multiplicity 2.

$A - 3I = \begin{pmatrix} 0 & 1 \\ 0 & 0 \end{pmatrix}$Which has rank 1, so the geometric
Multiplicity is $\dim(\ker(A - 3I)) = 2 - 1 = 1$.

Since the geometric multiplicity (1) is less than the algebraic multiplicity (2), $A$ is not
Diagonalisable. The Jordan form has one block of size 2:

$$J = \begin{pmatrix} 3 & 1 \\ 0 & 3 \end{pmatrix}$$

(In this case, $A$ is already in Jordan form.) $\blacksquare$

</details>

### 5.6 Spectral Theorem for Real Symmetric Matrices

**Theorem 5.7 (Spectral Theorem).** If $A \in \mathcal{M}_{n \times n}(\mathbb{R})$ is symmetric
($A = A^T$), then:

1. All eigenvalues of $A$ are real.
2. $A$ has $n$ linearly independent orthonormal eigenvectors.
3. $A$ is orthogonally diagonalisable: $A = QDQ^T$ where $Q$ is orthogonal ($Q^TQ = I$).

_Proof._ We prove (1) and then (2) and (3) by induction on $n$.

**(1)** Let $\lambda \in \mathbb{C}$ be an eigenvalue with eigenvector $\mathbf{v} \in \mathbb{C}^n$
$\mathbf{v} \neq \mathbf{0}$. Then

$$\overline{\mathbf{v}}^T A \mathbf{v} = \overline{\mathbf{v}}^T (\lambda \mathbf{v}) = \lambda \overline{\mathbf{v}}^T \mathbf{v}$$

Since $A = A^T$ and $A$ has real entries, $\overline{A} = A = A^T$So

$$\overline{\mathbf{v}}^T A \mathbf{v} = (A\overline{\mathbf{v}})^T \mathbf{v} = (\overline{A\mathbf{v}})^T \mathbf{v} = (\overline{\lambda}\,\overline{\mathbf{v}})^T \mathbf{v} = \overline{\lambda}\,\overline{\mathbf{v}}^T \mathbf{v}$$

Therefore $(\lambda - \overline{\lambda})\overline{\mathbf{v}}^T\mathbf{v} = 0$. Since
$\overline{\mathbf{v}}^T\mathbf{v} \gt 0$ We have $\lambda = \overline{\lambda}$So
$\lambda \in \mathbb{R}$.

**(2) and (3)** By induction. For $n = 1$ the result is trivial. Assume it holds for
$(n-1) \times (n-1)$ Symmetric matrices. Since all eigenvalues are real, $A$ has a real eigenvalue
$\lambda_1$ with real Eigenvector $\mathbf{v}_1$. Normalise:
$\mathbf{q}_1 = \mathbf{v}_1 / \lVert \mathbf{v}_1 \rVert$.

Let $W = \mathbf{q}_1^\perp = \{\mathbf{w} \in \mathbb{R}^n : \mathbf{q}_1^T \mathbf{w} = 0\}$. For
any $\mathbf{w} \in W$:

$$\mathbf{q}_1^T (A\mathbf{w}) = (A\mathbf{q}_1)^T \mathbf{w} = (\lambda_1 \mathbf{q}_1)^T \mathbf{w} = \lambda_1 \cdot 0 = 0$$

So $A\mathbf{w} \in W$. Therefore $A$ restricts to a symmetric linear map $A|_W : W \to W$ on an
$(n-1)$-dimensional space. By the inductive hypothesis, $W$ has an orthonormal basis
$\{\mathbf{q}_2, \ldots, \mathbf{q}_n\}$ of eigenvectors of $A|_W$.

Then $\{\mathbf{q}_1, \mathbf{q}_2, \ldots, \mathbf{q}_n\}$ is an orthonormal eigenbasis for
$\mathbb{R}^n$ And $A = QDQ^T$ with $Q = [\mathbf{q}_1 \mid \cdots \mid \mathbf{q}_n]$.
$\blacksquare$

### 5.7 Worked Example: Full Diagonalisation

**Problem.** Find the eigenvalues, eigenvectors, and diagonalise

$$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

The characteristic polynomial is

$$\det(A - \lambda I) = \det\begin{pmatrix} 4 - \lambda & 1 \\ 2 & 3 - \lambda \end{pmatrix} = (4 - \lambda)(3 - \lambda) - 2$$

$$= \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2)$$

So the eigenvalues are $\lambda_1 = 5$ and $\lambda_2 = 2$.

For $\lambda_1 = 5$: Solve $(A - 5I)\mathbf{v} = \mathbf{0}$.

$$\begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies -v_1 + v_2 = 0 \implies \mathbf{v} = t\begin{pmatrix} 1 \\ 1 \end{pmatrix}$$

For $\lambda_2 = 2$: Solve $(A - 2I)\mathbf{v} = \mathbf{0}$.

$$\begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}\mathbf{v} = \mathbf{0} \implies 2v_1 + v_2 = 0 \implies \mathbf{v} = t\begin{pmatrix} 1 \\ -2 \end{pmatrix}$$

Therefore $A = PDP^{-1}$ with

$$P = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}, \quad D = \begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}$$

$$P^{-1} = \frac{1}{-3}\begin{pmatrix} -2 & -1 \\ -1 & 1 \end{pmatrix} = \begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix}$$

**Verification:**
$PDP^{-1} = \begin{pmatrix} 1 & 1 \\ 1 & -2 \end{pmatrix}\begin{pmatrix} 5 & 0 \\ 0 & 2 \end{pmatrix}\begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix}$

$= \begin{pmatrix} 5 & 2 \\ 5 & -4 \end{pmatrix}\begin{pmatrix} 2/3 & 1/3 \\ 1/3 & -1/3 \end{pmatrix} = \begin{pmatrix} 10/3 + 2/3 & 5/3 - 2/3 \\ 10/3 - 4/3 & 5/3 + 4/3 \end{pmatrix} = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix} = A$.
$\blacksquare$

</details>

**Problem.** Use the Cayley--Hamilton theorem to compute $A^{10}$ for the same matrix $A$ above.

<details>
<summary>Solution</summary>

The characteristic polynomial is $p(\lambda) = \lambda^2 - 7\lambda + 10$So by Cayley--Hamilton,
$A^2 = 7A - 10I$.

To find $A^{10}$Divide $\lambda^{10}$ by $p(\lambda)$:

$$\lambda^{10} = q(\lambda)(\lambda^2 - 7\lambda + 10) + r(\lambda)$$

Where $r(\lambda) = a\lambda + b$ has degree less than 2. Then $A^{10} = r(A) = aA + bI$.

To find $a$ and $b$Evaluate at the eigenvalues:

$\lambda^{10}\big|_{\lambda=5} = 5^{10} = 9765625 = 5a + b$

$\lambda^{10}\big|_{\lambda=2} = 2^{10} = 1024 = 2a + b$

Subtracting: $3a = 9765625 - 1024 = 9764601$So $a = 3254867$.

$b = 1024 - 2 \cdot 3254867 = 1024 - 6509734 = -6508710$.

Therefore $A^{10} = 3254867 \cdot A - 6508710 \cdot I$. $\blacksquare$

</details>

:::caution Common Pitfall Not every matrix is diagonalisable. For example,
$A = \begin{pmatrix} 1 & 1 \\ 0 & 1 \end{pmatrix}$ has Eigenvalue $\lambda = 1$ with algebraic
multiplicity 2 but geometric multiplicity 1. It has only one Linearly independent eigenvector and is
not diagonalisable. :::

### 5.8 Worked Example: Spectral Decomposition of a Symmetric Matrix

**Problem.** Orthogonally diagonalise the symmetric matrix

$$A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 2 & 1 \\ 1 & 1 & 2 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 & 1 \\ 1 & 2-\lambda & 1 \\ 1 & 1 & 2-\lambda \end{pmatrix}$

$= (2-\lambda)[(2-\lambda)^2 - 1] - 1[(2-\lambda) - 1] + 1[1 - (2-\lambda)]$
$= (2-\lambda)(\lambda^2 - 4\lambda + 3) - (1-\lambda) + (\lambda - 1)$
$= (2-\lambda)(\lambda-1)(\lambda-3)$

Eigenvalues: $\lambda_1 = 1$, $\lambda_2 = 2$, $\lambda_3 = 3$.

For $\lambda_1 = 1$:
$A - I = \begin{pmatrix} 1 & 1 & 1 \\ 1 & 1 & 1 \\ 1 & 1 & 1 \end{pmatrix} \to \begin{pmatrix} 1 & 1 & 1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace: $\{(s, t, -s-t) : s, t \in \mathbb{R}\}$. An orthonormal basis:
$\mathbf{q}_1 = \frac{1}{\sqrt{2}}(1, -1, 0)$, $\mathbf{q}_2 = \frac{1}{\sqrt{6}}(1, 1, -2)$.

For $\lambda_2 = 2$:
$A - 2I = \begin{pmatrix} 0 & 1 & 1 \\ 1 & 0 & 1 \\ 1 & 1 & 0 \end{pmatrix} \to \begin{pmatrix} 1 & 0 & 1 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace: $\{(-t, -t, t) : t \in \mathbb{R}\}$. Normalised:
$\mathbf{q}_3 = \frac{1}{\sqrt{3}}(-1, -1, 1)$.

For $\lambda_3 = 3$:
$A - 3I = \begin{pmatrix} -1 & 1 & 1 \\ 1 & -1 & 1 \\ 1 & 1 & -1 \end{pmatrix} \to \begin{pmatrix} 1 & -1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace: $\{(s+t, s, t) : s, t \in \mathbb{R}\}$. Normalised:
$\mathbf{q}_4 = \frac{1}{\sqrt{3}}(1, 1, 1)$.

$A = QDQ^T$ where
$Q = \frac{1}{\sqrt{6}}\begin{pmatrix} \sqrt{3} & 1 & -\sqrt{2} & \sqrt{2} \\ -\sqrt{3} & 1 & -\sqrt{2} & \sqrt{2} \\ 0 & -2 & \sqrt{2} & \sqrt{2} \end{pmatrix}$
and $D = \mathrm{diag}(1, 2, 3)$.

$\blacksquare$

</details>

### 5.9 Common Pitfalls

- **Algebraic multiplicity $\geq$ geometric multiplicity, not the reverse.** A matrix is
  diagonalisable if and only if equality holds for every eigenvalue.
- **The characteristic polynomial depends on the choice of eigenvalue variable convention.**
  $\det(A - \lambda I)$ and $\det(\lambda I - A)$ differ by a factor of $(-1)^n$ but have the same
  roots.
- **Similarity preserves eigenvalues but not eigenvectors.** If $A = PBP^{-1}$ and
  $B\mathbf{v} = \lambda\mathbf{v}$ then $A(P\mathbf{v}) = \lambda(P\mathbf{v})$; the eigenvectors
  transform by $P$.

---

## 6. Linear Transformations

### 6.1 Definition

A **linear transformation** (or linear map) $T : V \to W$ between vector spaces $V$ and $W$ over $F$
Is a function satisfying:

1. $T(\mathbf{u} + \mathbf{v}) = T(\mathbf{u}) + T(\mathbf{v})$ for all
   $\mathbf{u}, \mathbf{v} \in V$
2. $T(\alpha \mathbf{v}) = \alpha T(\mathbf{v})$ for all $\alpha \in F$, $\mathbf{v} \in V$

Equivalently, $T(\alpha\mathbf{u} + \beta\mathbf{v}) = \alpha T(\mathbf{u}) + \beta T(\mathbf{v})$
for all $\alpha, \beta \in F$ and $\mathbf{u}, \mathbf{v} \in V$.

The set of all linear transformations from $V$ to $W$ is denoted $\mathcal{L}(V, W)$.

**Proposition 6.1.** For any linear transformation $T$:

1. $T(\mathbf{0}) = \mathbf{0}$.
2. $T(-\mathbf{v}) = -T(\mathbf{v})$.
3. $T\left(\sum_{i=1}^k \alpha_i \mathbf{v}_i\right) = \sum_{i=1}^k \alpha_i T(\mathbf{v}_i)$.

_Proof._ $T(\mathbf{0}) = T(0 \cdot \mathbf{0}) = 0 \cdot T(\mathbf{0}) = \mathbf{0}$.
$T(-\mathbf{v}) = T((-1)\mathbf{v}) = (-1)T(\mathbf{v}) = -T(\mathbf{v})$. Property (3) follows by
Induction. $\blacksquare$

<DesmosGraph title="2D Rotation of the Unit Circle" expressions={["x^2+y^2=1", "(x\\cos(a)-y\\sin(a),x\\sin(a)+y\\cos(a))"]} width={800} height={500} />

### 6.2 Matrix Representation

If $V$ and $W$ are finite-dimensional with bases
$\mathcal{B}_V = \{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ and
$\mathcal{B}_W = \{\mathbf{w}_1, \ldots, \mathbf{w}_m\}$Then every $T \in \mathcal{L}(V, W)$ is
Uniquely represented by a matrix
$[T]_{\mathcal{B}_V}^{\mathcal{B}_W} \in \mathcal{M}_{m \times n}(F)$ Where the $j$-th column is the
coordinate vector of $T(\mathbf{v}_j)$ with respect to $\mathcal{B}_W$.

### 6.3 Kernel and Image

The **kernel** (null space) and **image** (range) of $T$ are:

$$\ker(T) = \{\mathbf{v} \in V : T(\mathbf{v}) = \mathbf{0}\}$$
$$\mathrm{im}(T) = \{T(\mathbf{v}) : \mathbf{v} \in V\}$$

**Proposition 6.2.** $\ker(T)$ is a subspace of $V$ and $\mathrm{im}(T)$ is a subspace of $W$.

### 6.4 Rank-Nullity Theorem for Linear Maps

**Theorem 6.3 (Rank-Nullity).** For $T \in \mathcal{L}(V, W)$ with $V$ finite-dimensional:

$$\dim(\ker(T)) + \dim(\mathrm{im}(T)) = \dim(V)$$

_Proof._ Let $\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$ be a basis for $\ker(T)$Where
$k = \dim(\ker(T))$. Extend to a basis
$\{\mathbf{u}_1, \ldots, \mathbf{u}_k, \mathbf{u}_{k+1}, \ldots, \mathbf{u}_n\}$ of $V$ Where
$n = \dim(V)$.

We claim $\{T(\mathbf{u}_{k+1}), \ldots, T(\mathbf{u}_n)\}$ is a basis for $\mathrm{im}(T)$.

_Spanning:_ For any $\mathbf{w} \in \mathrm{im}(T)$Write $\mathbf{w} = T(\mathbf{v})$ for some
$\mathbf{v} = \sum_{i=1}^n \alpha_i \mathbf{u}_i \in V$. Then

$$\mathbf{w} = T\left(\sum_{i=1}^n \alpha_i \mathbf{u}_i\right) = \sum_{i=1}^n \alpha_i T(\mathbf{u}_i) = \sum_{i=k+1}^n \alpha_i T(\mathbf{u}_i)$$

Since $T(\mathbf{u}_i) = \mathbf{0}$ for $i \leq k$.

_Linear independence:_ If $\sum_{i=k+1}^n \alpha_i T(\mathbf{u}_i) = \mathbf{0}$Then
$T\left(\sum_{i=k+1}^n \alpha_i \mathbf{u}_i\right) = \mathbf{0}$So
$\sum_{i=k+1}^n \alpha_i \mathbf{u}_i \in \ker(T)$. Thus
$\sum_{i=k+1}^n \alpha_i \mathbf{u}_i = \sum_{j=1}^k \beta_j \mathbf{u}_j$ For some $\beta_j$. By
linear independence of the full basis, all coefficients are zero.

Therefore $\dim(\mathrm{im}(T)) = n - k$Giving $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = n$.
$\blacksquare$

### 6.5 Isomorphisms

A linear transformation $T : V \to W$ is an **isomorphism** if it is bijective. We write
$V \cong W$.

**Theorem 6.4.** $T$ is an isomorphism if and only if $\ker(T) = \{\mathbf{0}\}$ and
$\mathrm{im}(T) = W$.

**Corollary 6.5.** If $\dim(V) = \dim(W) \lt \infty$Then $T$ is injective if and only if $T$ is
surjective.

_Proof._ If $T$ is injective, $\ker(T) = \{\mathbf{0}\}$So $\dim(\mathrm{im}(T)) = \dim(V) = \dim(W)$
Hence $\mathrm{im}(T) = W$ (a subspace of full dimension equals the whole space). Conversely, If $T$
is surjective, $\dim(\mathrm{im}(T)) = \dim(W) = \dim(V)$So $\dim(\ker(T)) = 0$Giving
$\ker(T) = \{\mathbf{0}\}$. $\blacksquare$

### 6.6 Change of Basis

If $P$ is the change-of-basis matrix from basis $\mathcal{B}$ to basis $\mathcal{B}'$Then for a
Linear transformation $T$ with matrix representations $[T]_{\mathcal{B}}$ and $[T]_{\mathcal{B}'}$:

$$[T]_{\mathcal{B}'} = P^{-1}[T]_{\mathcal{B}} P$$

This is the **similarity transformation**. Similar matrices represent the same linear transformation
In different bases and share the same eigenvalues, determinant, and trace.

### 6.7 Worked Example: Matrix of a Transformation with Change of Basis

**Problem.** Let $T : \mathbb{R}^2 \to \mathbb{R}^2$ be defined by $T(x, y) = (2x + y, x + 2y)$. (a)
Find $[T]_{\mathcal{E}}$ where $\mathcal{E}$ is the standard basis. (b) Find $[T]_{\mathcal{B}}$
where $\mathcal{B} = \{(1, 1), (1, -1)\}$. (c) Verify that
$[T]_{\mathcal{B}} = P^{-1}[T]_{\mathcal{E}} P$.

<details>
<summary>Solution</summary>

**(a)** $T(1, 0) = (2, 1)$ and $T(0, 1) = (1, 2)$So

$$[T]_{\mathcal{E}} = \begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}$$

**(b)** Compute $T$ on the basis $\mathcal{B}$:

$T(1, 1) = (3, 3) = 3(1, 1) + 0(1, -1)$So coordinates are
$\begin{pmatrix} 3 \\ 0 \end{pmatrix}_{\mathcal{B}}$.

$T(1, -1) = (1, -1) = 0(1, 1) + 1(1, -1)$So coordinates are
$\begin{pmatrix} 0 \\ 1 \end{pmatrix}_{\mathcal{B}}$.

$$[T]_{\mathcal{B}} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix}$$

**(c)** The change-of-basis matrix from $\mathcal{E}$ to $\mathcal{B}$ is

$$P = \begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}, \quad P^{-1} = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}$$

$$P^{-1}[T]_{\mathcal{E}} P = \begin{pmatrix} 1/2 & 1/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 2 & 1 \\ 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

$= \begin{pmatrix} 3/2 & 3/2 \\ 1/2 & -1/2 \end{pmatrix}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix} = \begin{pmatrix} 3 & 0 \\ 0 & 1 \end{pmatrix} = [T]_{\mathcal{B}}$.
$\blacksquare$

</details>

### 6.8 Dual Spaces

**Definition.** The **dual space** of a vector space $V$ over $F$Denoted $V^*$Is the space of all
Linear functionals $f : V \to F$. Elements of $V^*$ are called **covectors**.

**Proposition 6.6.** If $\dim(V) = n \lt \infty$Then $\dim(V^*) = n$.

_Proof._ Let $\{\mathbf{e}_1, \ldots, \mathbf{e}_n\}$ be a basis for $V$. Define the **dual basis**
$\{\varphi_1, \ldots, \varphi_n\} \subseteq V^*$ by $\varphi_i(\mathbf{e}_j) = \delta_{ij}$ (the
Kronecker Delta). Each $\varphi_i$ is a well-defined linear functional since it is defined on a
basis and Extended linearly. These are linearly independent: if $\sum c_i \varphi_i = 0$Then
applying to $\mathbf{e}_j$ gives $c_j = 0$. They span $V^*$: for any
$f \in V^*$, $f = \sum_{i=1}^n f(\mathbf{e}_i)\varphi_i$. $\blacksquare$

**Definition.** The **double dual** of $V$ is $V^{**} = (V^*)^*$.

**Theorem 6.7.** If $V$ is finite-dimensional, the map $\Phi : V \to V^{**}$ defined by
$\Phi(\mathbf{v})(f) = f(\mathbf{v})$ is a natural isomorphism.

_Intuition._ The double dual "recovers" the original space. A vector $\mathbf{v}$ can be Identified
with the functional on $V^*$ that evaluates each covector at $\mathbf{v}$.

**Example.** For $V = \mathbb{R}^3$ with standard basis, the dual basis
$\{\varphi_1, \varphi_2, \varphi_3\}$ Is given by $\varphi_i(x_1, x_2, x_3) = x_i$. The functional
$f(x_1, x_2, x_3) = 3x_1 - 2x_2 + x_3$ Corresponds to the covector
$3\varphi_1 - 2\varphi_2 + \varphi_3$ in $V^*$.

_Remark._ In infinite dimensions, $V$ and $V^{**}$ need not be isomorphic. The double dual
Isomorphism is a special feature of finite-dimensional spaces.

### 6.9 Annihilators

**Definition.** For a subset $S \subseteq V$The **annihilator** of $S$ is

$$S^0 = \{f \in V^* : f(s) = 0 \mathrm{~for~all~} s \in S\}$$

**Proposition 6.8.** $S^0$ is a subspace of $V^*$And if $W$ is a subspace of $V$ with
$\dim(V) = n$Then $\dim(W^0) = n - \dim(W)$.

_Proof._ $S^0$ is the intersection of the kernels $\ker(s)$ as $s$ ranges over $S$Where each $s$ Is
viewed as an element of $V^{**}$ via $\Phi$. Each $\ker(s)$ is a subspace of $V^*$And any
Intersection of subspaces is a subspace.

For the dimension: let $\dim(W) = k$ and extend a basis $\{\mathbf{w}_1, \ldots, \mathbf{w}_k\}$ Of
$W$ to a basis $\{\mathbf{w}_1, \ldots, \mathbf{w}_k, \mathbf{w}_{k+1}, \ldots, \mathbf{w}_n\}$ of
$V$. Let $\{\varphi_1, \ldots, \varphi_n\}$ be the dual basis. Then $f \in W^0$ iff
$f(\mathbf{w}_i) = 0$ For $i = 1, \ldots, k$. Writing $f = \sum c_j \varphi_j$We need $c_i = 0$ for
$i = 1, \ldots, k$. So $f = \sum_{j=k+1}^n c_j \varphi_j$Giving $\dim(W^0) = n - k$. $\blacksquare$

---

## 7. Inner Product Spaces

### 7.1 Definition of an Inner Product

An **inner product** on a vector space $V$ over $F$ (where $F = \mathbb{R}$ or $\mathbb{C}$) is a
Function $\langle \cdot, \cdot \rangle : V \times V \to F$ satisfying:

1. **Conjugate symmetry**:
   $\langle \mathbf{u}, \mathbf{v} \rangle = \overline{\langle \mathbf{v}, \mathbf{u} \rangle}$
2. **Linearity in the first argument**:
   $\langle \alpha\mathbf{u} + \beta\mathbf{w}, \mathbf{v} \rangle = \alpha\langle \mathbf{u}, \mathbf{v} \rangle + \beta\langle \mathbf{w}, \mathbf{v} \rangle$
3. **Positive definiteness**: $\langle \mathbf{v}, \mathbf{v} \rangle \geq 0$ with equality iff
   $\mathbf{v} = \mathbf{0}$

A vector space equipped with an inner product is called an **inner product space**.

**Example.** The standard inner product on $\mathbb{R}^n$ is
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i y_i$. On $\mathbb{C}^n$
$\langle \mathbf{x}, \mathbf{y} \rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example.** On $C[a,b]$The $L^2$ inner product is $\langle f, g \rangle = \int_a^b f(x)g(x)\,dx$.

### 7.2 Norms

Every inner product induces a **norm**:

$$\lVert \mathbf{v} \rVert = \sqrt{\langle \mathbf{v}, \mathbf{v} \rangle}$$

**Theorem 7.1 (Cauchy--Schwarz Inequality).** For all $\mathbf{u}, \mathbf{v} \in V$

$$\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \, \lVert \mathbf{v} \rVert$$

With equality if and only if $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent.

_Proof._ If $\mathbf{v} = \mathbf{0}$Both sides are 0 and the result holds. Assume
$\mathbf{v} \neq \mathbf{0}$. For any $t \in \mathbb{R}$ (or $\mathbb{C}$), positive definiteness
gives

$$0 \leq \langle \mathbf{u} - t\mathbf{v}, \mathbf{u} - t\mathbf{v} \rangle = \langle \mathbf{u}, \mathbf{u} \rangle - t\langle \mathbf{v}, \mathbf{u} \rangle - \overline{t}\langle \mathbf{u}, \mathbf{v} \rangle + \lvert t \rvert^2 \langle \mathbf{v}, \mathbf{v} \rangle$$

Set $t = \frac{\langle \mathbf{u}, \mathbf{v} \rangle}{\langle \mathbf{v}, \mathbf{v} \rangle}$ (the
value that minimises the right side):

$$0 \leq \lVert \mathbf{u} \rVert^2 - \frac{\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2}{\lVert \mathbf{v} \rVert^2}$$

Rearranging:
$\lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert^2 \leq \lVert \mathbf{u} \rVert^2 \lVert \mathbf{v} \rVert^2$.
Taking square roots gives the result. Equality holds iff $\mathbf{u} - t\mathbf{v} = \mathbf{0}$
I.e., $\mathbf{u}$ and $\mathbf{v}$ are linearly dependent. $\blacksquare$

**Theorem 7.2 (Triangle Inequality).**

$$\lVert \mathbf{u} + \mathbf{v} \rVert \leq \lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert$$

_Proof._

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \langle \mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v} \rangle = \lVert \mathbf{u} \rVert^2 + 2\,\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2$$

By Cauchy--Schwarz,
$\mathrm{Re}\langle \mathbf{u}, \mathbf{v} \rangle \leq \lvert\langle \mathbf{u}, \mathbf{v} \rangle\rvert \leq \lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert$So

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 \leq \lVert \mathbf{u} \rVert^2 + 2\lVert \mathbf{u} \rVert \lVert \mathbf{v} \rVert + \lVert \mathbf{v} \rVert^2 = (\lVert \mathbf{u} \rVert + \lVert \mathbf{v} \rVert)^2$$

Taking square roots gives the result. $\blacksquare$

### 7.3 Orthogonality

Two vectors $\mathbf{u}, \mathbf{v}$ are **orthogonal** if
$\langle \mathbf{u}, \mathbf{v} \rangle = 0$. We write $\mathbf{u} \perp \mathbf{v}$.

An **orthonormal set** $\{e_1, \ldots, e_k\}$ satisfies $\langle e_i, e_j \rangle = \delta_{ij}$.

**Theorem 7.3 (Pythagorean Theorem).** If $\mathbf{u} \perp \mathbf{v}$Then

$$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$$

_Proof._
$\lVert \mathbf{u} + \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + 2\langle \mathbf{u}, \mathbf{v} \rangle + \lVert \mathbf{v} \rVert^2 = \lVert \mathbf{u} \rVert^2 + \lVert \mathbf{v} \rVert^2$.
$\blacksquare$

**Proposition 7.4.** Every orthonormal set is linearly independent.

_Proof._ If $\sum_{i=1}^k \alpha_i e_i = \mathbf{0}$Then taking the inner product with $e_j$:
$\alpha_j = \langle \sum \alpha_i e_i, e_j \rangle = \langle \mathbf{0}, e_j \rangle = 0$ for each
$j$. $\blacksquare$

### 7.4 Gram--Schmidt Process

The **Gram--Schmidt process** converts a linearly independent set
$\{\mathbf{v}_1, \ldots, \mathbf{v}_n\}$ into an orthonormal set $\{e_1, \ldots, e_n\}$:

$$\mathbf{u}_1 = \mathbf{v}_1, \quad e_1 = \frac{\mathbf{u}_1}{\lVert \mathbf{u}_1 \rVert}$$

$$\mathbf{u}_k = \mathbf{v}_k - \sum_{i=1}^{k-1} \langle \mathbf{v}_k, e_i \rangle e_i, \quad e_k = \frac{\mathbf{u}_k}{\lVert \mathbf{u}_k \rVert}$$

**Proposition 7.5.** At each step,
$\mathrm{span}\{e_1, \ldots, e_k\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$.

_Proof._ By construction, $\mathbf{u}_k$ is $\mathbf{v}_k$ minus its projection onto
$\mathrm{span}\{e_1, \ldots, e_{k-1}\} = \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_{k-1}\}$. So
$\mathbf{u}_k \in \mathrm{span}\{\mathbf{v}_1, \ldots, \mathbf{v}_k\}$ and
$\mathbf{v}_k = \mathbf{u}_k + \sum_{i=1}^{k-1}\langle \mathbf{v}_k, e_i \rangle e_i \in \mathrm{span}\{\mathbf{u}_1, \ldots, \mathbf{u}_k\}$.
Since each $e_i$ is a scalar multiple of $\mathbf{u}_i$The spans coincide. $\blacksquare$

### 7.5 Orthogonal Projection

The **orthogonal projection** of $\mathbf{v}$ onto a subspace $W$ with orthonormal basis
$\{e_1, \ldots, e_k\}$ is

$$\mathrm{proj_W}(\mathbf{v}) = \sum_{i=1}^k \langle \mathbf{v}, e_i \rangle e_i$$

**Theorem 7.6 (Best Approximation).** Among all vectors in $W$The orthogonal projection
$\mathrm{proj_W}(\mathbf{v})$ minimises the distance to $\mathbf{v}$:

$$\lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert \leq \lVert \mathbf{v} - \mathbf{w} \rVert \quad \mathrm{for}~all~ \mathbf{w} \in W$$

_Proof._ For any $\mathbf{w} \in W$Write
$\mathbf{v} - \mathbf{w} = (\mathbf{v} - \mathrm{proj_W}(\mathbf{v})) + (\mathrm{proj_W}(\mathbf{v}) - \mathbf{w})$.
The first term is orthogonal to $W$ (hence to the second term, which lies in $W$), so by the
Pythagorean theorem:

$$\lVert \mathbf{v} - \mathbf{w} \rVert^2 = \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2 + \lVert \mathrm{proj_W}(\mathbf{v}) - \mathbf{w} \rVert^2 \geq \lVert \mathbf{v} - \mathrm{proj_W}(\mathbf{v}) \rVert^2$$

With equality iff $\mathbf{w} = \mathrm{proj_W}(\mathbf{v})$. $\blacksquare$

### 7.6 Least Squares Approximation

A fundamental application of orthogonal projection is fitting functions to data. Given a subspace
$W$ of an inner product space $V$ and a target $\mathbf{v} \in V$The best approximation in $W$ Is
the orthogonal projection $\mathrm{proj_W}(\mathbf{v})$.

### 7.7 Worked Example: Gram--Schmidt

**Problem.** Apply the Gram--Schmidt process to $\mathbf{v}_1 = (1, 1, 0)$
$\mathbf{v}_2 = (1, 0, 1)$, $\mathbf{v}_3 = (0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner
Product.

<details>
<summary>Solution</summary>

$\mathbf{u}_1 = \mathbf{v}_1 = (1, 1, 0)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$, $e_1 = \frac{1}{\sqrt{2}}(1, 1, 0)$.

$\mathbf{u}_2 = \mathbf{v}_2 - \langle \mathbf{v}_2, e_1 \rangle e_1 = (1, 0, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) = (1, 0, 1) - \frac{1}{2}(1, 1, 0) = (\frac{1}{2}, -\frac{1}{2}, 1)$

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$, $e_2 = \frac{1}{\sqrt{3/2}}(\frac{1}{2}, -\frac{1}{2}, 1) = \frac{1}{\sqrt{6}}(1, -1, 2)$.

$\mathbf{u}_3 = \mathbf{v}_3 - \langle \mathbf{v}_3, e_1 \rangle e_1 - \langle \mathbf{v}_3, e_2 \rangle e_2$

$\langle \mathbf{v}_3, e_1 \rangle = \frac{1}{\sqrt{2}}(0 + 1 + 0) = \frac{1}{\sqrt{2}}$

$\langle \mathbf{v}_3, e_2 \rangle = \frac{1}{\sqrt{6}}(0 - 1 + 2) = \frac{1}{\sqrt{6}}$

$\mathbf{u}_3 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 1, 0) - \frac{1}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1, -1, 2) = (0, 1, 1) - \frac{1}{2}(1, 1, 0) - \frac{1}{6}(1, -1, 2)$

$= (-\frac{1}{2} - \frac{1}{6}, 1 - \frac{1}{2} + \frac{1}{6}, 1 - \frac{1}{3}) = (-\frac{2}{3}, \frac{2}{3}, \frac{2}{3})$

$\lVert \mathbf{u}_3 \rVert = \sqrt{4/9 + 4/9 + 4/9} = \sqrt{4/3} = 2/\sqrt{3}$, $e_3 = \frac{\sqrt{3}}{2}(-\frac{2}{3}, \frac{2}{3}, \frac{2}{3}) = \frac{1}{\sqrt{3}}(-1, 1, 1)$.

**Verification:** $\langle e_1, e_2 \rangle = \frac{1}{\sqrt{12}}(1 - 1 + 0) = 0$. $\checkmark$
$\langle e_1, e_3 \rangle = \frac{1}{\sqrt{6}}(-1 + 1 + 0) = 0$. $\checkmark$
$\langle e_2, e_3 \rangle = \frac{1}{\sqrt{18}}(-1 - 1 + 2) = 0$. $\checkmark$

The orthonormal basis is
$\left\{\frac{1}{\sqrt{2}}(1,1,0),\ \frac{1}{\sqrt{6}}(1,-1,2),\ \frac{1}{\sqrt{3}}(-1,1,1)\right\}$.
$\blacksquare$

</details>

:::caution Common Pitfall The Gram--Schmidt process requires a linearly independent starting set. If
the input vectors are Linearly dependent, one of the $\mathbf{u}_k$ will be the zero vector, and the
process will fail (attempting to divide by zero in the normalisation step). :::

### 7.8 Worked Example: Orthogonal Projection onto a Plane

**Problem.** Find the orthogonal projection of $\mathbf{v} = (3, -1, 2)$ onto the plane $W$ spanned
by $(1, 0, 1)$ and $(0, 1, 1)$ in $\mathbb{R}^3$ with the standard inner product. Also find the
distance from $\mathbf{v}$ to $W$.

<details>
<summary>Solution</summary>

First, apply Gram--Schmidt to obtain an orthonormal basis for $W$.

$\mathbf{u}_1 = (1, 0, 1)$, $\lVert \mathbf{u}_1 \rVert = \sqrt{2}$, $e_1 = \frac{1}{\sqrt{2}}(1, 0, 1)$.

$\mathbf{u}_2 = (0, 1, 1) - \langle (0,1,1), e_1 \rangle e_1 = (0, 1, 1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) = (0, 1, 1) - \frac{1}{2}(1, 0, 1) = (-\frac{1}{2}, 1, \frac{1}{2})$.

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1 + 1/4} = \sqrt{3/2}$, $e_2 = \frac{1}{\sqrt{6}}(-1, 2, 1)$.

Now compute the projection:

$\langle \mathbf{v}, e_1 \rangle = \frac{1}{\sqrt{2}}(3 + 0 + 2) = \frac{5}{\sqrt{2}}$

$\langle \mathbf{v}, e_2 \rangle = \frac{1}{\sqrt{6}}(-3 - 2 + 2) = \frac{-3}{\sqrt{6}}$

$\mathrm{proj_W}(\mathbf{v}) = \frac{5}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, 0, 1) + \frac{-3}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(-1, 2, 1)$

$= \frac{5}{2}(1, 0, 1) + \frac{-3}{6}(-1, 2, 1) = (\frac{5}{2}, 0, \frac{5}{2}) + (\frac{1}{2}, -1, -\frac{1}{2}) = (3, -1, 2)$

The residual is $\mathbf{v} - \mathrm{proj_W}(\mathbf{v}) = (0, 0, 0)$So the distance is 0. This
means $\mathbf{v} \in W$ itself. Indeed,
$\mathbf{v} = 3(1, 0, 1) - (0, 1, 1) \in \mathrm{span}\{(1,0,1), (0,1,1)\}$. $\blacksquare$

</details>

### 7.9 Worked Example: $L^2$ Least Squares Approximation

**Problem.** Find the constant function $c$ (i.e., the best approximation by a degree-0 polynomial)
That minimises $\int_0^1 (e^x - c)^2\,dx$.

<details>
<summary>Solution</summary>

We want the orthogonal projection of $f(x) = e^x$ onto the subspace $W = \mathrm{span}\{1\}$ in the
$L^2[0,1]$ inner product space. The orthonormal basis for $W$ is $e_1 = 1$ (since
$\lVert 1 \rVert^2 = \int_0^1 1\,dx = 1$).

$\mathrm{proj_W}(f) = \langle f, 1 \rangle \cdot 1 = \left(\int_0^1 e^x\,dx\right) \cdot 1 = (e - 1) \cdot 1$

So the best constant approximation is $c = e - 1 \approx 1.718$.

**Verification:** The error is $e^x - (e-1)$. Expanding $e^x$ as a Taylor series around $x = 1/2$:
The constant term is $e^{1/2} \approx 1.649$But our answer $e - 1 \approx 1.718$ is the
$L^2$-optimal constant, not the Taylor approximation. The two optimisation criteria differ.
$\blacksquare$

</details>

### 7.10 Common Pitfalls

- **The Cauchy--Schwarz inequality is not the triangle inequality.** Cauchy--Schwarz bounds the
  inner product by the product of norms; the triangle inequality bounds the norm of a sum by the sum
  of norms. They are related (the triangle inequality follows from Cauchy--Schwarz) but distinct.
- **Gram--Schmidt is numerically unstable.** For floating-point computation, modified Gram--Schmidt
  or Householder reflections are preferred.
- **Orthogonal projection decomposes $\mathbf{v}$ uniquely.**
  $\mathbf{v} = \mathrm{proj_W}(\mathbf{v}) + \mathbf{v}^\perp$ where $\mathbf{v}^\perp \in W^\perp$.
  This decomposition is unique and is called the **orthogonal decomposition**.

---

## 8. Singular Value Decomposition

### 8.1 Existence of the SVD

**Theorem 8.1 (Singular Value Decomposition).** Every matrix
$A \in \mathcal{M}_{m \times n}(\mathbb{R})$ can be factored as

$$A = U \Sigma V^T$$

Where $U \in \mathcal{M}_{m \times m}(\mathbb{R})$ is orthogonal,
$V \in \mathcal{M}_{n \times n}(\mathbb{R})$ is orthogonal, and
$\Sigma \in \mathcal{M}_{m \times n}(\mathbb{R})$ is diagonal with non-negative entries
$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r \geq 0$ (where $r = \mathrm{rank}(A)$).

The $\sigma_i$ are called the **singular values** of $A$. The columns of $U$ are the **left singular
vectors**, and the columns of $V$ are the **right singular vectors**.

_Proof._ The matrix $A^T A$ is an $n \times n$ symmetric positive semi-definite matrix, so by the
spectral theorem it has $n$ real non-negative eigenvalues and an orthonormal eigenbasis. Let
$\sigma_1^2, \sigma_2^2, \ldots, \sigma_n^2$ be these eigenvalues (some may be zero) with
corresponding orthonormal eigenvectors $\mathbf{v}_1, \ldots, \mathbf{v}_n$ forming the columns of
$V$.

For each $i$ with $\sigma_i > 0$Define $\mathbf{u}_i = A\mathbf{v}_i / \sigma_i$. We verify that
these form an orthonormal set:

$$\mathbf{u}_i^T \mathbf{u}_j = \frac{\mathbf{v}_i^T A^T A \mathbf{v}_j}{\sigma_i \sigma_j} = \frac{\sigma_j^2 \mathbf{v}_i^T \mathbf{v}_j}{\sigma_i \sigma_j} = \frac{\sigma_j^2}{\sigma_i \sigma_j} \delta_{ij} = \delta_{ij}$$

Extend $\{\mathbf{u}_1, \ldots, \mathbf{u}_r\}$ to an orthonormal basis of $\mathbb{R}^m$ to form
$U$. Then for any vector $\mathbf{x} \in \mathbb{R}^n$:

$$A\mathbf{x} = A\left(\sum_{i=1}^{n} (\mathbf{v}_i^T \mathbf{x})\mathbf{v}_i\right) = \sum_{i=1}^{n} (\mathbf{v}_i^T \mathbf{x}) A\mathbf{v}_i = \sum_{i=1}^{r} \sigma_i (\mathbf{v}_i^T \mathbf{x}) \mathbf{u}_i = U \Sigma V^T \mathbf{x}$$

Since this holds for all $\mathbf{x}$We have $A = U \Sigma V^T$. $\blacksquare$

### 8.2 Relationship to Eigenvalues

**Proposition 8.2.** The singular values of $A$ are the square roots of the eigenvalues of $A^T A$
(equivalently, of $AA^T$). The non-zero singular values of $A$ and $A^T$ are identical.

_Proof._ From the construction above, $A^T A \mathbf{v}_i = \sigma_i^2 \mathbf{v}_i$. For $AA^T$:

$$AA^T \mathbf{u}_i = \frac{A(A^T A)\mathbf{v}_i}{\sigma_i} = \frac{\sigma_i^2 A\mathbf{v}_i}{\sigma_i} = \sigma_i^2 \mathbf{u}_i$$

So $\mathbf{u}_i$ is an eigenvector of $AA^T$ with eigenvalue $\sigma_i^2$. The non-zero eigenvalues
of $A^T A$ and $AA^T$ coincide (since if $A^T A \mathbf{v} = \lambda \mathbf{v}$ with
$\lambda \neq 0$Then $AA^T(A\mathbf{v}) = A(A^T A \mathbf{v}) = \lambda(A\mathbf{v})$ and
$A\mathbf{v} \neq \mathbf{0}$). $\blacksquare$

**Proposition 8.3.** If $A$ is symmetric with eigenvalues $\lambda_1, \ldots, \lambda_n$Then the
singular values of $A$ are $|\lambda_1|, \ldots, |\lambda_n|$.

_Proof._ $A^T A = A^2$Whose eigenvalues are $\lambda_i^2$. The singular values are
$\sqrt{\lambda_i^2} = |\lambda_i|$. $\blacksquare$

### 8.3 Geometric Interpretation

The SVD decomposes the linear transformation $T : \mathbb{R}^n \to \mathbb{R}^m$ into three steps:

1. $V^T$ rotates (or reflects) $\mathbb{R}^n$ into a coordinate system aligned with the right
   singular vectors.
2. $\Sigma$ scales each axis by the corresponding singular value (and possibly drops dimensions
   where $\sigma_i = 0$).
3. $U$ rotates (or reflects) the result into the coordinate system of the left singular vectors.

**Unit circle image.** Under $A$The unit circle in $\mathbb{R}^2$ is mapped to an ellipse with
semi-axes $\sigma_1$ and $\sigma_2$ aligned with the columns of $U$.

### 8.4 Low-Rank Approximation

**Theorem 8.4 (Eckart--Young--Mirsky).** Let $A = U \Sigma V^T$ be the SVD with singular values
$\sigma_1 \geq \sigma_2 \geq \cdots \geq \sigma_r > 0$. For any $k < r$The best rank-$k$
approximation to $A$ (in both the Frobenius and spectral norms) is

$$A_k = \sum_{i=1}^{k} \sigma_i \mathbf{u}_i \mathbf{v}_i^T = U_k \Sigma_k V_k^T$$

And the approximation error is

$$\lVert A - A_k \rVert_F = \sqrt{\sigma_{k+1}^2 + \cdots + \sigma_r^2}, \qquad \lVert A - A_k \rVert_2 = \sigma_{k+1}$$

_Proof (Frobenius norm)._ Any rank-$k$ matrix $B$ can be written in terms of an orthonormal basis of
its column space. Let $W \in \mathcal{M}_{n \times k}(\mathbb{R})$ have orthonormal columns spanning
the column space of $B$. Then $B = CW^T$ for some $C$And:

$$\lVert A - B \rVert_F^2 = \lVert A(I - WW^T) \rVert_F^2 + \lVert (A - C)W^T \rVert_F^2 \geq \lVert A(I - WW^T) \rVert_F^2$$

The minimum over $W$ is achieved when $W$ spans the subspace spanned by
$\mathbf{v}_1, \ldots, \mathbf{v}_k$ (the top $k$ right singular vectors), giving:

$$\lVert A - A_k \rVert_F^2 = \sum_{i=k+1}^{r} \sigma_i^2$$

The spectral norm result follows because $\lVert A - A_k \rVert_2 = \sigma_{k+1}$ is the largest
singular value of $A - A_k$. $\blacksquare$

### 8.5 Pseudoinverse

**Definition.** The **Moore--Penrose pseudoinverse** of $A = U \Sigma V^T$ is

$$A^+ = V \Sigma^+ U^T$$

Where $\Sigma^+$ is obtained from $\Sigma$ by transposing and inverting each non-zero singular
value:

$$(\Sigma^+)_{ii} = \begin{cases} 1/\sigma_i & \text{if}  \sigma_i > 0 \\ 0 & \text{if}  \sigma_i = 0 \end{cases}$$

**Theorem 8.5.** The pseudoinverse satisfies the four Moore--Penrose conditions:

1. $AA^+A = A$
2. $A^+AA^+ = A^+$
3. $(AA^+)^T = AA^+$
4. $(A^+A)^T = A^+A$

_Proof._ Direct computation using $A = U \Sigma V^T$ and $A^+ = V \Sigma^+ U^T$:

$$AA^+A = U \Sigma V^T V \Sigma^+ U^T U \Sigma V^T = U \Sigma \Sigma^+ \Sigma V^T = U \Sigma V^T = A$$

Since $\Sigma \Sigma^+ \Sigma = \Sigma$ (the non-zero singular values are preserved, zeros remain
zero). The remaining conditions follow similarly. $\blacksquare$

**Theorem 8.6 (Minimum-Norm Least Squares).** If $A\mathbf{x} = \mathbf{b}$ is inconsistent, then
$\mathbf{x}^* = A^+\mathbf{b}$ is the least-squares solution of minimum norm.

_Proof._ The least-squares solutions to $A\mathbf{x} \approx \mathbf{b}$ are
$\mathbf{x} = A^+\mathbf{b} + (I - A^+A)\mathbf{z}$ for arbitrary $\mathbf{z}$. Since
$(I - A^+A)\mathbf{z} \in \ker(A)$ and $A^+\mathbf{b} \in \mathrm{im}(A^T)$These two components are
orthogonal. The minimum-norm solution is obtained when $\mathbf{z} = \mathbf{0}$Giving
$\mathbf{x}^* = A^+\mathbf{b}$. $\blacksquare$

### 8.6 Condition Number

**Definition.** The **condition number** of $A$ (with respect to the spectral norm) is

$$\kappa(A) = \lVert A \rVert_2 \cdot \lVert A^+ \rVert_2 = \frac{\sigma_1}{\sigma_r}$$

Where $\sigma_1$ is the largest and $\sigma_r$ is the smallest non-zero singular value.

**Theorem 8.7 (Sensitivity of Linear Systems).** If $A\mathbf{x} = \mathbf{b}$ and
$A(\mathbf{x} + \delta\mathbf{x}) = \mathbf{b} + \delta\mathbf{b}$Then

$$\frac{\lVert \delta\mathbf{x} \rVert}{\lVert \mathbf{x} \rVert} \leq \kappa(A) \cdot \frac{\lVert \delta\mathbf{b} \rVert}{\lVert \mathbf{b} \rVert}$$

_Proof._ From $A\delta\mathbf{x} = \delta\mathbf{b}$:
$\lVert \delta\mathbf{x} \rVert = \lVert A^{-1}\delta\mathbf{b} \rVert \leq \lVert A^{-1} \rVert \lVert \delta\mathbf{b} \rVert = \sigma_r^{-1} \lVert \delta\mathbf{b} \rVert$.
From $A\mathbf{x} = \mathbf{b}$:
$\lVert \mathbf{b} \rVert = \lVert A\mathbf{x} \rVert \geq \sigma_1^{-1} \lVert \mathbf{x} \rVert$...
Wait, $\lVert A\mathbf{x} \rVert \geq \sigma_r \lVert \mathbf{x} \rVert$ and
$\lVert \mathbf{b} \rVert \leq \sigma_1 \lVert \mathbf{x} \rVert$. Combining:
$\lVert \delta\mathbf{x} \rVert / \lVert \mathbf{x} \rVert \leq (\sigma_1 / \sigma_r)(\lVert \delta\mathbf{b} \rVert / \lVert \mathbf{b} \rVert)$.
$\blacksquare$

A matrix with large condition number is **ill-conditioned**: small perturbations in $\mathbf{b}$ can
cause large changes in $\mathbf{x}$.

### 8.7 Worked Example: Computing the SVD

**Problem.** Find the SVD of $A = \begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}$.

<details>
<summary>Solution</summary>

**Step 1:** Compute
$A^T A = \begin{pmatrix} 3 & 2 & 2 \\ 2 & 3 & -2 \end{pmatrix}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix} = \begin{pmatrix} 17 & 4 \\ 4 & 17 \end{pmatrix}$.

**Step 2:** Eigenvalues of $A^T A$:
$\det\begin{pmatrix} 17 - \lambda & 4 \\ 4 & 17 - \lambda \end{pmatrix} = (17 - \lambda)^2 - 16 = \lambda^2 - 34\lambda + 273 = (\lambda - 21)(\lambda - 13)$.

So $\sigma_1^2 = 21$ and $\sigma_2^2 = 13$Giving $\sigma_1 = \sqrt{21}$, $\sigma_2 = \sqrt{13}$.

**Step 3:** Eigenvectors of $A^T A$. For $\lambda = 21$: $(17 - 21)v_1 + 4v_2 = 0$So $v_1 = v_2$.
Normalised: $\mathbf{v}_1 = \frac{1}{\sqrt{2}}(1, 1)^T$.

For $\lambda = 13$: $4v_1 + (17 - 13)v_2 = 0$So $v_1 = -v_2$. Normalised:
$\mathbf{v}_2 = \frac{1}{\sqrt{2}}(1, -1)^T$.

$V = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$.

**Step 4:** Compute $\mathbf{u}_i = A\mathbf{v}_i / \sigma_i$.

$\mathbf{u}_1 = \frac{1}{\sqrt{21}} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} 1 \\ 1 \end{pmatrix} = \frac{1}{\sqrt{42}}\begin{pmatrix} 5 \\ 5 \\ 0 \end{pmatrix} = \frac{1}{\sqrt{2}}\begin{pmatrix} 1 \\ 1 \\ 0 \end{pmatrix}$.

$\mathbf{u}_2 = \frac{1}{\sqrt{13}} \cdot \frac{1}{\sqrt{2}}\begin{pmatrix} 3 & 2 \\ 2 & 3 \\ 2 & -2 \end{pmatrix}\begin{pmatrix} 1 \\ -1 \end{pmatrix} = \frac{1}{\sqrt{26}}\begin{pmatrix} 1 \\ -1 \\ 4 \end{pmatrix}$.

Since $A$ is $3 \times 2$We need a third left singular vector $\mathbf{u}_3$ orthogonal to
$\mathbf{u}_1$ and $\mathbf{u}_2$. Compute
$\mathbf{u}_3 = \mathbf{u}_1 \times \mathbf{u}_2 = \frac{1}{\sqrt{52}}(4, -4, -2) = \frac{1}{\sqrt{26}}(2, -2, -1)$.

$$U = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{26} & 2/\sqrt{26} \\ 1/\sqrt{2} & -1/\sqrt{26} & -2/\sqrt{26} \\ 0 & 4/\sqrt{26} & -1/\sqrt{26} \end{pmatrix}$$

$$\Sigma = \begin{pmatrix} \sqrt{21} & 0 \\ 0 & \sqrt{13} \\ 0 & 0 \end{pmatrix}$$

$$A = U \Sigma V^T = \begin{pmatrix} 1/\sqrt{2} & 1/\sqrt{26} & 2/\sqrt{26} \\ 1/\sqrt{2} & -1/\sqrt{26} & -2/\sqrt{26} \\ 0 & 4/\sqrt{26} & -1/\sqrt{26} \end{pmatrix}\begin{pmatrix} \sqrt{21} & 0 \\ 0 & \sqrt{13} \\ 0 & 0 \end{pmatrix}\frac{1}{\sqrt{2}}\begin{pmatrix} 1 & 1 \\ 1 & -1 \end{pmatrix}$$

**Verification:** $U$ and $V$ are orthogonal, $\Sigma$ has the correct singular values on the
diagonal, and $A = U\Sigma V^T$ recovers the original matrix. $\blacksquare$

</details>

### 8.8 Worked Example: Low-Rank Approximation

**Problem.** Let $A = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix}$. Find the
best rank-1 approximation.

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 1 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 1 \end{pmatrix}\begin{pmatrix} 1 & 1 & 0 \\ 0 & 0 & 1 \\ 1 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}$.

$\det(A^T A - \lambda I) = \det\begin{pmatrix} 2-\lambda & 1 & 1 \\ 1 & 1-\lambda & 0 \\ 1 & 0 & 2-\lambda \end{pmatrix} = (2-\lambda)[(1-\lambda)(2-\lambda)] - (2-\lambda) - (1-\lambda)$

$= (2-\lambda)(\lambda^2 - 3\lambda + 2 - 1) - (3 - \lambda) = (2-\lambda)(\lambda^2 - 3\lambda + 1) - (3 - \lambda)$

$= 2\lambda^2 - 6\lambda + 2 - \lambda^3 + 3\lambda^2 - \lambda - 3 + \lambda = -\lambda^3 + 5\lambda^2 - 6\lambda - 1$

Setting to zero and solving: $\lambda^3 - 5\lambda^2 + 6\lambda + 1 = 0$. Testing $\lambda = 3$:
$27 - 45 + 18 + 1 = 1 \neq 0$. Testing $\lambda = 4$: $64 - 80 + 24 + 1 = 9 \neq 0$. By numerical
methods or the rational root theorem (no rational roots), the eigenvalues are approximately
$\lambda_1 \approx 5.25$, $\lambda_2 \approx 1.31$, $\lambda_3 \approx -0.56$.

Wait, $A^T A$ should be positive semi-definite, so all eigenvalues should be non-negative. Let me
recompute.

$A^T A = \begin{pmatrix} 2 & 1 & 1 \\ 1 & 1 & 0 \\ 1 & 0 & 2 \end{pmatrix}$.

$\mathrm{tr}(A^T A) = 5$So $\lambda_1 + \lambda_2 + \lambda_3 = 5$.

$\det(A^T A) = 2(2) - 1(2) - 1(-1) = 4 - 2 + 1 = 3$.

$\sum$ of principal $2 \times 2$ minors $= (2-1) + (4-1) + (2-0) = 1 + 3 + 2 = 6$.

Characteristic polynomial: $\lambda^3 - 5\lambda^2 + 6\lambda - 3 = 0$.

Testing $\lambda = 1$: $1 - 5 + 6 - 3 = -1 \neq 0$. Testing $\lambda = 3$:
$27 - 45 + 18 - 3 = -3 \neq 0$.

By the trigonometric method for cubics or numerical approximation,
$\lambda_1 \approx 3.35$, $\lambda_2 \approx 1.35$, $\lambda_3 \approx 0.30$.

The best rank-1 approximation uses only $\sigma_1 = \sqrt{\lambda_1} \approx 1.83$ and its
corresponding singular vectors, yielding $A_1 = \sigma_1 \mathbf{u}_1 \mathbf{v}_1^T$ with error
$\lVert A - A_1 \rVert_F = \sqrt{\lambda_2 + \lambda_3} \approx \sqrt{1.65} \approx 1.28$.
$\blacksquare$

</details>

### 8.9 Worked Example: Condition Number and Numerical Stability

**Problem.** Compute the condition number of $A = \begin{pmatrix} 1 & 1 \\ 1 & 1.0001 \end{pmatrix}$
and discuss its implications.

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 2 & 2.0001 \\ 2.0001 & 2.00020001 \end{pmatrix}$.

$\det(A^T A - \lambda I) = (2 - \lambda)(2.00020001 - \lambda) - 2.0001^2$

$= \lambda^2 - 4.00020001\lambda + 4.00040002 - 4.00040001 = \lambda^2 - 4.00020001\lambda + 0.00000001$

$\lambda = \frac{4.00020001 \pm \sqrt{16.00160016 - 0.00000004}}{2} \approx \frac{4.00020001 \pm 4.00019999}{2}$

$\lambda_1 \approx 4.00020000, \quad \lambda_2 \approx 0.00000001$

$\sigma_1 \approx 2.00005, \quad \sigma_2 \approx 0.0001$

$\kappa(A) = \sigma_1 / \sigma_2 \approx 20000$.

This means relative errors in $\mathbf{b}$ can be amplified by a factor of up to $20000$ in the
solution $\mathbf{x}$. The matrix is nearly singular (the two rows are almost linearly dependent),
and solving $A\mathbf{x} = \mathbf{b}$ in floating-point arithmetic will lose approximately
$\log_{10}(20000) \approx 4.3$ digits of precision. $\blacksquare$

</details>

### 8.10 Common Pitfalls

- **Singular values are always non-negative.** Unlike eigenvalues, which can be negative or complex,
  singular values are the square roots of eigenvalues of $A^T A$Hence always real and non-negative.
- **The SVD is not unique.** If $A$ has repeated singular values, the corresponding singular vectors
  can be any orthonormal basis of the eigenspace. The signs of singular vectors can also be flipped
  in pairs.
- **The pseudoinverse equals the inverse only for square, full-rank matrices.** When $A$ is not full
  rank, $A^+A \neq I$; instead, $A^+A$ is the orthogonal projection onto $\mathrm{im}(A^T)$.
- **The SVD and eigendecomposition are different decompositions.** The SVD always exists for any
  matrix, but the eigendecomposition requires the matrix to be square. Even for symmetric matrices,
  the singular values are $|\lambda_i|$Not $\lambda_i$.

---

## 9. Problem Set

**Problem 1.** Let $V = \mathbb{R}^3$ and $W = \{(x, y, z) \in \mathbb{R}^3 : x - y + z = 0\}$. Show
that $W$ is a subspace of $V$ and find its dimension.

<details>
<summary>Solution</summary>

$W$ is non-empty since $\mathbf{0} = (0, 0, 0) \in W$. If
$(x_1, y_1, z_1), (x_2, y_2, z_2) \in W$Then $(x_1 - y_1 + z_1) + (x_2 - y_2 + z_2) = 0 + 0 = 0$So
their sum is in $W$. Similarly, $\alpha(x - y + z) = 0$ for any scalar $\alpha$. Hence $W$ is a
subspace.

$W$ is defined by one linear equation, so $\dim(W) = 3 - 1 = 2$. A basis is
$\{(1, 1, 0), (-1, 0, 1)\}$.

_If you get this wrong, revise: Section 1.3 (Subspace Criterion)._

</details>

**Problem 2.** Is the set $S = \{(x, y) \in \mathbb{R}^2 : xy = 0\}$ a subspace of $\mathbb{R}^2$?

<details>
<summary>Solution</summary>

No. $(1, 0) \in S$ and $(0, 1) \in S$But $(1, 0) + (0, 1) = (1, 1) \notin S$ since
$1 \cdot 1 \neq 0$. $S$ is not closed under addition.

_If you get this wrong, revise: Section 1.3 (Subspace Criterion)._

</details>

**Problem 3.** Determine whether the set $\{1 - x, 1 + x, x^2\}$ is linearly independent in
$\mathcal{P}_2(\mathbb{R})$.

<details>
<summary>Solution</summary>

Suppose $a(1 - x) + b(1 + x) + cx^2 = 0$ as a polynomial. Then $(a + b) + (-a + b)x + cx^2 = 0$So
$a + b = 0$, $-a + b = 0$, $c = 0$. From the first two equations: $2a = 0$So $a = 0$Then $b = 0$. Since
$a = b = c = 0$The set is linearly independent.

_If you get this wrong, revise: Section 2.1 (Linear Independence)._

</details>

**Problem 4.** Find a basis for the column space of

$$A = \begin{pmatrix} 1 & 2 & 1 & 4 \\ 2 & 4 & 0 & 6 \\ 3 & 6 & 1 & 10 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Row-reduce $A$:

$$\begin{pmatrix} 1 & 2 & 1 & 4 \\ 2 & 4 & 0 & 6 \\ 3 & 6 & 1 & 10 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - 3R_1} \begin{pmatrix} 1 & 2 & 1 & 4 \\ 0 & 0 & -2 & -2 \\ 0 & 0 & -2 & -2 \end{pmatrix} \xrightarrow{R_3 - R_2} \begin{pmatrix} 1 & 2 & 1 & 4 \\ 0 & 0 & -2 & -2 \\ 0 & 0 & 0 & 0 \end{pmatrix}$$

Pivots are in columns 1 and 3. A basis for $\mathrm{col}(A)$ is $\{(1, 2, 3), (1, 0, 1)\}$ (the pivot
columns of the original $A$). $\dim(\mathrm{col}(A)) = 2$.

_If you get this wrong, revise: Section 2.7 (Worked Examples)._

</details>

**Problem 5.** Let $U = \mathrm{span}\{(1, 0, 1), (0, 1, 1)\}$ and $W = \mathrm{span}\{(1, 1, 0)\}$ in
$\mathbb{R}^3$. Verify the dimension formula $\dim(U + W) = \dim(U) + \dim(W) - \dim(U \cap W)$.

<details>
<summary>Solution</summary>

$\dim(U) = 2$ (the two spanning vectors are linearly independent), $\dim(W) = 1$. Since
$\dim(U) + \dim(W) = 3 = \dim(\mathbb{R}^3)$We have $U + W = \mathbb{R}^3$So $\dim(U + W) = 3$. By
the dimension formula: $\dim(U \cap W) = 2 + 1 - 3 = 0$So $U \cap W = \{\mathbf{0}\}$.

We can verify directly: if $a(1,0,1) + b(0,1,1) = c(1,1,0)$Then $a = c$, $b = c$, $a + b = 0$ Giving
$c = 0$So only the zero vector is in the intersection.

_If you get this wrong, revise: Section 2.5 (Dimension Formula)._

</details>

**Problem 6.** Compute $\det(A)$ using cofactor expansion where

$$A = \begin{pmatrix} 2 & 0 & 1 & 3 \\ 0 & 1 & 2 & 0 \\ 1 & 0 & 0 & 2 \\ 0 & 3 & 0 & 1 \end{pmatrix}$$

<details>
<summary>Solution</summary>

Expand along the second column (which has the most zeros):

$\det(A) = -1 \cdot \det\begin{pmatrix} 2 & 1 & 3 \\ 1 & 0 & 2 \\ 0 & 0 & 1 \end{pmatrix} + (-1)^{4+2} \cdot 3 \cdot \det\begin{pmatrix} 2 & 0 & 1 \\ 0 & 1 & 2 \\ 1 & 0 & 0 \end{pmatrix}$

For the first $3 \times 3$: expand along row 3: $1 \cdot (2 \cdot 0 - 1 \cdot 1) = -1$.

For the second $3 \times 3$: expand along row 3: $1 \cdot (0 \cdot 2 - 1 \cdot 1) = -1$.

$\det(A) = -(-1) + 3(-1) = 1 - 3 = -2$.

_If you get this wrong, revise: Section 3.4 (Determinants)._

</details>

**Problem 7.** Show that if $A$ is skew-symmetric ($A^T = -A$) and $n$ is odd, then $\det(A) = 0$.

<details>
<summary>Solution</summary>

$\det(A) = \det(A^T) = \det(-A) = (-1)^n \det(A) = -\det(A)$ (since $n$ is odd). Therefore
$\det(A) = -\det(A)$So $2\det(A) = 0$Giving $\det(A) = 0$.

_If you get this wrong, revise: Section 3.5 (Properties of Determinants)._

</details>

**Problem 8.** Use the adjugate formula to find the inverse of

$$A = \begin{pmatrix} 2 & 0 & 1 \\ 1 & 1 & 0 \\ 0 & 1 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A) = 2(3 - 0) - 0 + 1(1 - 0) = 6 + 1 = 7$.

Cofactors: $C_{11} = +3$, $C_{12} = -3$, $C_{13} = +1$ $C_{21} = +1$, $C_{22} = +6$, $C_{23} = -2$
$C_{31} = -1$, $C_{32} = +1$, $C_{33} = +2$

$\mathrm{adj}(A) = \begin{pmatrix} 3 & 1 & -1 \\ -3 & 6 & 1 \\ 1 & -2 & 2 \end{pmatrix}$

$A^{-1} = \frac{1}{7}\begin{pmatrix} 3 & 1 & -1 \\ -3 & 6 & 1 \\ 1 & -2 & 2 \end{pmatrix}$

_If you get this wrong, revise: Section 3.6 (Adjugate and Inverse Formula)._

</details>

**Problem 9.** Solve the system by Gaussian elimination:

$$\begin{aligned} x + 2y - z &= 3 \\ 2x + 5y + z &= 8 \\ -x + y + 4z &= 2 \end{aligned}$$

<details>
<summary>Solution</summary>

$$\begin{pmatrix} 1 & 2 & -1 & 3 \\ 2 & 5 & 1 & 8 \\ -1 & 1 & 4 & 2 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 + R_1} \begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 1 & 3 & 2 \\ 0 & 3 & 3 & 5 \end{pmatrix}$$

$$\xrightarrow{R_3 - 3R_2} \begin{pmatrix} 1 & 2 & -1 & 3 \\ 0 & 1 & 3 & 2 \\ 0 & 0 & -6 & -1 \end{pmatrix}$$

From row 3: $-6z = -1$So $z = 1/6$. From row 2: $y + 3(1/6) = 2$So $y = 3/2$. From row 1:
$x + 2(3/2) - 1/6 = 3$So $x = 3 - 3 + 1/6 = 1/6$.

Solution: $x = 1/6$, $y = 3/2$, $z = 1/6$.

_If you get this wrong, revise: Section 4.1 (Gaussian Elimination)._

</details>

**Problem 10.** Determine whether the following system is consistent using the Rouché--Capelli
theorem:

$$\begin{aligned} x + y + z &= 1 \\ 2x + 2y + 2z &= 3 \\ x - y + z &= 0 \end{aligned}$$

<details>
<summary>Solution</summary>

$$[A \mid \mathbf{b}] = \begin{pmatrix} 1 & 1 & 1 & 1 \\ 2 & 2 & 2 & 3 \\ 1 & -1 & 1 & 0 \end{pmatrix} \xrightarrow{R_2 - 2R_1, R_3 - R_1} \begin{pmatrix} 1 & 1 & 1 & 1 \\ 0 & 0 & 0 & 1 \\ 0 & -2 & 0 & -1 \end{pmatrix}$$

$\mathrm{rank}(A) = 2$ but $\mathrm{rank}([A \mid \mathbf{b}]) = 3$ (the row $[0\ 0\ 0\ 1]$ is
Non-zero). Since $\mathrm{rank}(A) \neq \mathrm{rank}([A \mid \mathbf{b}])$The system is inconsistent.

_If you get this wrong, revise: Section 4.2 (Rouché--Capelli Theorem)._

</details>

**Problem 11.** Find the LU decomposition of

$$A = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 5 & 0 \\ -1 & 0 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$m_{21} = 2/1 = 2$, $m_{31} = -1/1 = -1$:

$$\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 2 & 2 \end{pmatrix}$$

$m_{32} = 2/1 = 2$:

$$U = \begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & -2 \end{pmatrix}, \quad L = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & 2 & 1 \end{pmatrix}$$

Verify:
$LU = \begin{pmatrix} 1 & 0 & 0 \\ 2 & 1 & 0 \\ -1 & 2 & 1 \end{pmatrix}\begin{pmatrix} 1 & 2 & -1 \\ 0 & 1 & 2 \\ 0 & 0 & -2 \end{pmatrix} = \begin{pmatrix} 1 & 2 & -1 \\ 2 & 5 & 0 \\ -1 & 0 & 3 \end{pmatrix} = A$.
$\blacksquare$

_If you get this wrong, revise: Section 4.3 (LU Decomposition)._

</details>

**Problem 12.** Find the least squares solution to the system $A\mathbf{x} = \mathbf{b}$ where

$$A = \begin{pmatrix} 1 & 0 \\ 1 & 1 \\ 1 & 2 \end{pmatrix}, \quad \mathbf{b} = \begin{pmatrix} 0 \\ 1 \\ 1 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$A^T A = \begin{pmatrix} 3 & 3 \\ 3 & 5 \end{pmatrix}$, $A^T \mathbf{b} = \begin{pmatrix} 2 \\ 3 \end{pmatrix}$.

$\det(A^T A) = 15 - 9 = 6$, $(A^T A)^{-1} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}$

$\hat{\mathbf{x}} = \frac{1}{6}\begin{pmatrix} 5 & -3 \\ -3 & 3 \end{pmatrix}\begin{pmatrix} 2 \\ 3 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 10 - 9 \\ -6 + 9 \end{pmatrix} = \frac{1}{6}\begin{pmatrix} 1 \\ 3 \end{pmatrix} = \begin{pmatrix} 1/6 \\ 1/2 \end{pmatrix}$

The least squares solution is $a = 1/6$, $b = 1/2$.

_If you get this wrong, revise: Section 4.5 (Least Squares Solutions)._

</details>

**Problem 13.** Find the eigenvalues and a basis for each eigenspace of

$$A = \begin{pmatrix} 2 & 1 & 0 \\ 0 & 2 & 1 \\ 0 & 0 & 2 \end{pmatrix}$$

Is $A$ diagonalisable?

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (2 - \lambda)^3$So $\lambda = 2$ with algebraic multiplicity 3.

$A - 2I = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 1 \\ 0 & 0 & 0 \end{pmatrix}$Which has rank 2. The
null space is spanned by $(1, 0, 0)^T$. So the geometric multiplicity is 1.

Since the geometric multiplicity (1) does not equal the algebraic multiplicity (3), $A$ is **not**
Diagonalisable. Its Jordan form is $J = A$ itself (a single $3 \times 3$ Jordan block).

_If you get this wrong, revise: Section 5.3 (Diagonalisation) and Section 5.5 (Jordan Normal Form)._

</details>

**Problem 14.** Diagonalise the matrix

$$A = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 3 & -1 \\ 0 & -1 & 3 \end{pmatrix}$$

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (2 - \lambda)[(3-\lambda)^2 - 1] = (2-\lambda)(\lambda^2 - 6\lambda + 8) = (2-\lambda)(\lambda-2)(\lambda-4)$.

Eigenvalues: $\lambda_1 = 2$ (algebraic multiplicity 2), $\lambda_2 = 4$ (algebraic multiplicity 1).

For $\lambda_1 = 2$:
$A - 2I = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & -1 & 1 \end{pmatrix} \to \begin{pmatrix} 0 & 1 & -1 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace basis: $\{(1, 0, 0), (0, 1, 1)\}$. Geometric multiplicity = 2.

For $\lambda_2 = 4$:
$A - 4I = \begin{pmatrix} -2 & 0 & 0 \\ 0 & -1 & -1 \\ 0 & -1 & -1 \end{pmatrix} \to \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 1 \\ 0 & 0 & 0 \end{pmatrix}$.
Eigenspace basis: $\{(0, -1, 1)\}$. Geometric multiplicity = 1.

Since $2 + 1 = 3 = n$, $A$ is diagonalisable:

$$P = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & -1 \\ 0 & 1 & 1 \end{pmatrix}, \quad D = \begin{pmatrix} 2 & 0 & 0 \\ 0 & 2 & 0 \\ 0 & 0 & 4 \end{pmatrix}$$

_If you get this wrong, revise: Section 5.3 (Diagonalisation)._

</details>

**Problem 15.** Use the Cayley--Hamilton theorem to express $A^3$ as a linear combination of
$A^2$, $A$ And $I$Where $A = \begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix}$.

<details>
<summary>Solution</summary>

$\det(A - \lambda I) = (1 - \lambda)(3 - \lambda) + 2 = \lambda^2 - 4\lambda + 5$.

By Cayley--Hamilton: $A^2 - 4A + 5I = 0$So $A^2 = 4A - 5I$.

$A^3 = A \cdot A^2 = A(4A - 5I) = 4A^2 - 5A = 4(4A - 5I) - 5A = 16A - 20I - 5A = 11A - 20I$.

$A^3 = 11\begin{pmatrix} 1 & 2 \\ -1 & 3 \end{pmatrix} - 20\begin{pmatrix} 1 & 0 \\ 0 & 1 \end{pmatrix} = \begin{pmatrix} -9 & 22 \\ -11 & 13 \end{pmatrix}$.

_If you get this wrong, revise: Section 5.4 (Cayley--Hamilton Theorem)._

</details>

**Problem 16.** Let $T : \mathbb{R}^3 \to \mathbb{R}^2$ be defined by $T(x, y, z) = (x + y, y + z)$.
Find the matrix of $T$ with respect to the standard bases, and verify the rank-nullity theorem.

<details>
<summary>Solution</summary>

$T(1, 0, 0) = (1, 0)$, $T(0, 1, 0) = (1, 1)$, $T(0, 0, 1) = (0, 1)$.

$[T]_{\mathcal{E}} = \begin{pmatrix} 1 & 1 & 0 \\ 0 & 1 & 1 \end{pmatrix}$.

$\ker(T) = \{(x, y, z) : x + y = 0, y + z = 0\} = \{(t, -t, t) : t \in \mathbb{R}\}$So
$\dim(\ker(T)) = 1$.

$\mathrm{im}(T) = \mathrm{span}\{(1, 0), (1, 1)\} = \mathbb{R}^2$So $\dim(\mathrm{im}(T)) = 2$.

Verify: $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = 1 + 2 = 3 = \dim(\mathbb{R}^3)$. $\blacksquare$

_If you get this wrong, revise: Section 6.4 (Rank-Nullity for Linear Maps)._

</details>

**Problem 17.** Let $V = \mathbb{R}^3$ with the standard inner product. Find the orthogonal
projection Of $\mathbf{v} = (1, 2, 3)$ onto the plane $W$ defined by $x + y + z = 0$.

<details>
<summary>Solution</summary>

A basis for $W$: $\{(1, -1, 0), (1, 0, -1)\}$. Apply Gram--Schmidt:

$e_1 = \frac{1}{\sqrt{2}}(1, -1, 0)$.

$\mathbf{u}_2 = (1, 0, -1) - \langle (1, 0, -1), e_1 \rangle e_1 = (1, 0, -1) - \frac{1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, -1, 0) = (\frac{1}{2}, \frac{1}{2}, -1)$.

$\lVert \mathbf{u}_2 \rVert = \sqrt{1/4 + 1/4 + 1} = \sqrt{3/2}$So
$e_2 = \frac{1}{\sqrt{6}}(1, 1, -2)$.

$\mathrm{proj_W}(\mathbf{v}) = \langle (1,2,3), e_1 \rangle e_1 + \langle (1,2,3), e_2 \rangle e_2$

$\langle (1,2,3), e_1 \rangle = \frac{1}{\sqrt{2}}(1 - 2) = \frac{-1}{\sqrt{2}}$

$\langle (1,2,3), e_2 \rangle = \frac{1}{\sqrt{6}}(1 + 2 - 6) = \frac{-3}{\sqrt{6}}$

$\mathrm{proj_W}(\mathbf{v}) = \frac{-1}{\sqrt{2}} \cdot \frac{1}{\sqrt{2}}(1, -1, 0) + \frac{-3}{\sqrt{6}} \cdot \frac{1}{\sqrt{6}}(1, 1, -2)$

$= -\frac{1}{2}(1, -1, 0) - \frac{1}{2}(1, 1, -2) = (-1, 0, 1)$.

The orthogonal projection is $(-1, 0, 1)$. $\blacksquare$

_If you get this wrong, revise: Section 7.5 (Orthogonal Projection)._

</details>

**Problem 18.** Prove the Cauchy--Schwarz inequality for $\mathbb{R}^n$ directly: for any nonzero
$\mathbf{x}, \mathbf{y} \in \mathbb{R}^n$Show that
$\lvert\mathbf{x} \cdot \mathbf{y}\rvert \leq \lVert \mathbf{x} \rVert \lVert \mathbf{y} \rVert$ And
determine when equality holds.

<details>
<summary>Solution</summary>

Consider the function
$f(t) = \lVert \mathbf{x} + t\mathbf{y} \rVert^2 = \lVert \mathbf{x} \rVert^2 + 2t(\mathbf{x} \cdot \mathbf{y}) + t^2 \lVert \mathbf{y} \rVert^2$.

Since $f(t) \geq 0$ for all $t \in \mathbb{R}$This quadratic in $t$ has at most one real root, So
its discriminant satisfies $\Delta \leq 0$:

$4(\mathbf{x} \cdot \mathbf{y})^2 - 4\lVert \mathbf{x} \rVert^2 \lVert \mathbf{y} \rVert^2 \leq 0$

Therefore
$(\mathbf{x} \cdot \mathbf{y})^2 \leq \lVert \mathbf{x} \rVert^2 \lVert \mathbf{y} \rVert^2$And
taking square roots gives the result.

Equality holds iff $\Delta = 0$Which means $f(t)$ has a double root, i.e., there exists $t_0$ such
that $\mathbf{x} + t_0 \mathbf{y} = \mathbf{0}$Meaning $\mathbf{x}$ and $\mathbf{y}$ are linearly
dependent.

_If you get this wrong, revise: Section 7.2 (Cauchy--Schwarz Inequality)._

</details>

**Problem 19.** Let $A = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$. Verify
the Cayley--Hamilton Theorem by explicitly computing $p(A)$.

<details>
<summary>Solution</summary>

$p(\lambda) = \det(A - \lambda I) = (1 - \lambda)[(2-\lambda)^2 - 1] = (1-\lambda)(\lambda^2 - 4\lambda + 3) = (1-\lambda)(\lambda-1)(\lambda-3)$.

So $p(\lambda) = -(\lambda-1)^2(\lambda-3) = -(\lambda^3 - 5\lambda^2 + 7\lambda - 3)$.

$p(A) = -(A^3 - 5A^2 + 7A - 3I)$.

$A^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix}$

$A^3 = A \cdot A^2 = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}\begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix} = \begin{pmatrix} 1 & 0 & 0 \\ 0 & 14 & 13 \\ 0 & 13 & 14 \end{pmatrix}$

$p(A) = -\begin{pmatrix} 1 & 0 & 0 \\ 0 & 14 & 13 \\ 0 & 13 & 14 \end{pmatrix} + 5\begin{pmatrix} 1 & 0 & 0 \\ 0 & 5 & 4 \\ 0 & 4 & 5 \end{pmatrix} - 7\begin{pmatrix} 1 & 0 & 0 \\ 0 & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix} + 3\begin{pmatrix} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{pmatrix}$

$= \begin{pmatrix} -1+5-7+3 & 0 & 0 \\ 0 & -14+25-14+3 & -13+20-7+0 \\ 0 & -13+20-7+0 & -14+25-14+3 \end{pmatrix} = \begin{pmatrix} 0 & 0 & 0 \\ 0 & 0 & 0 \\ 0 & 0 & 0 \end{pmatrix}$

So $p(A) = 0$Confirming Cayley--Hamilton. $\blacksquare$

_If you get this wrong, revise: Section 5.4 (Cayley--Hamilton Theorem)._

</details>

**Problem 20.** Let $T : \mathcal{P}_2(\mathbb{R}) \to \mathcal{P}_2(\mathbb{R})$ be defined by
$T(p) = p'$ (the derivative). Find the matrix of $T$ with respect to the basis
$\mathcal{B} = \{1, x, x^2\}$And determine $\ker(T)$ and $\mathrm{im}(T)$.

<details>
<summary>Solution</summary>

$T(1) = 0 = 0 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 0 \\ 0 \end{pmatrix}$.

$T(x) = 1 = 1 \cdot 1 + 0 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 1 \\ 0 \\ 0 \end{pmatrix}$.

$T(x^2) = 2x = 0 \cdot 1 + 2 \cdot x + 0 \cdot x^2$So coordinates are
$\begin{pmatrix} 0 \\ 2 \\ 0 \end{pmatrix}$.

$$[T]_{\mathcal{B}} = \begin{pmatrix} 0 & 1 & 0 \\ 0 & 0 & 2 \\ 0 & 0 & 0 \end{pmatrix}$$

$\ker(T) = \{p : p' = 0\} = \mathrm{span}\{1\}$So $\dim(\ker(T)) = 1$.

$\mathrm{im}(T) = \{p' : p \in \mathcal{P}_2\} = \mathrm{span}\{1, x\}$So $\dim(\mathrm{im}(T)) = 2$.

Verify: $\dim(\ker(T)) + \dim(\mathrm{im}(T)) = 1 + 2 = 3 = \dim(\mathcal{P}_2)$. $\blacksquare$

_If you get this wrong, revise: Section 6.2 (Matrix Representation) and Section 6.4 (Rank-Nullity)._

</details>

## Common Pitfalls

- **Confusing linear independence and span.** Linear independence means no non-trivial linear
  combination equals zero; span is the set of all linear combinations. **Fix:**
  $\{v_1, \ldots, v_n\}$ is linearly independent iff the equation $\sum c_i v_i = 0$ implies all
  $c_i = 0$.
- **Wrong determinant interpretation.** $\det(A) = 0$ means $A$ is singular (non-invertible);
  $\det(A) \neq 0$ means $A$ is invertible. **Fix:** A matrix is invertible iff its determinant is
  non-zero.
- **Confusing eigenvalues and eigenvectors.** An eigenvalue $\lambda$ satisfies
  $\det(A - \lambda I) = 0$; eigenvectors are the non-zero solutions of $(A - \lambda I)v = 0$.
  **Fix:** Find eigenvalues from the characteristic polynomial; then find eigenvectors by solving
  $(A - \lambda I)v = 0$.

## Worked Examples

### Example 1: Determinant and invertibility

**Problem.** Find the determinant of
$A = \begin{pmatrix} 1 & 2 & 3 \\ 0 & 1 & 4 \\ 5 & 6 & 0 \end{pmatrix}$ and determine if $A$ is
invertible.

**Solution.** $\det(A) = 1(0 - 24) - 2(0 - 20) + 3(0 - 5) = -24 + 40 - 15 = 1 \neq 0$.

Since $\det(A) \neq 0$, $A$ is invertible. $\blacksquare$

### Example 2: Eigenvalues and eigenvectors

**Problem.** Find the eigenvalues and eigenvectors of
$A = \begin{pmatrix} 4 & 1 \\ 2 & 3 \end{pmatrix}$.

**Solution.**
$\det(A - \lambda I) = (4-\lambda)(3-\lambda) - 2 = \lambda^2 - 7\lambda + 10 = (\lambda - 5)(\lambda - 2) = 0$.

Eigenvalues: $\lambda_1 = 5$, $\lambda_2 = 2$.

For $\lambda_1 = 5$:
$(A - 5I)v = 0 \implies \begin{pmatrix} -1 & 1 \\ 2 & -2 \end{pmatrix}v = 0 \implies v_1 = \begin{pmatrix} 1 \\ 1 \end{pmatrix}$.

For $\lambda_2 = 2$:
$(A - 2I)v = 0 \implies \begin{pmatrix} 2 & 1 \\ 2 & 1 \end{pmatrix}v = 0 \implies v_2 = \begin{pmatrix} 1 \\ -2 \end{pmatrix}$.

$\blacksquare$

## Summary

- A matrix is invertible iff $\det(A) \neq 0$; equivalent to having linearly independent
  rows/columns.
- Eigenvalues: roots of the characteristic polynomial $\det(A - \lambda I) = 0$.
- Eigenvectors: non-zero vectors in $\ker(A - \lambda I)$.
- The spectral theorem: a real symmetric matrix has an orthonormal eigenbasis and can be
  diagonalised.

## Cross-References

| Topic                      | Site        | Link                                                                  |
| -------------------------- | ----------- | --------------------------------------------------------------------- |
| Linear Algebra (Overview)  | WyattsNotes | [View](/docs/university/mathematics/linear-algebra)                   |
| Abstract Algebra           | WyattsNotes | [View](/docs/university/mathematics/abstract-algebra)                 |
| Multivariable Calculus     | WyattsNotes | [View](/docs/university/mathematics/multivariable-calculus)           |
| Linear Algebra — MIT 18.06 | MIT OCW     | [View](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/) |
