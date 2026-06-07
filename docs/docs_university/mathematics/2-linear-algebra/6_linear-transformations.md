---
title: Linear Transformations
tags:
  - Mathematics
  - University
---

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

<DesmosGraph title="2D Rotation of the Unit Circle" expressions={["x^2+y^2=1",
"(x\\cos(a)-y\\sin(a),x\\sin(a)+y\\cos(a))"]} width={800} height={500} />

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

_Proof._ If $T$ is injective, $\ker(T) = \{\mathbf{0}\}$So
$\dim(\mathrm{im}(T)) = \dim(V) = \dim(W)$ Hence $\mathrm{im}(T) = W$ (a subspace of full dimension
equals the whole space). Conversely, If $T$ is surjective,
$\dim(\mathrm{im}(T)) = \dim(W) = \dim(V)$So $\dim(\ker(T)) = 0$Giving $\ker(T) = \{\mathbf{0}\}$.
$\blacksquare$

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
applying to $\mathbf{e}_j$ gives $c_j = 0$. They span $V^*$: for any $f \in V^*$,
$f = \sum_{i=1}^n f(\mathbf{e}_i)\varphi_i$. $\blacksquare$

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

