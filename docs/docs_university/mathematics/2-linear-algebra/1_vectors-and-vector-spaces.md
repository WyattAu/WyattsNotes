---
title: Vectors and Vector Spaces
tags:
  - Mathematics
  - University
---

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

