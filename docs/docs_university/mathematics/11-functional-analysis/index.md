---
title: Functional Analysis
description:
  'University Mathematics Functional Analysis notes covering Banach spaces, Hilbert spaces, bounded
  operators, the four fundamental theorems, compact operators, spectral theory, and weak
  convergence.'
date: 2026-06-04T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
---

## 1. Normed Spaces and Banach Spaces

### 1.1 Normed Spaces

A **normed space** is a vector space $X$ over $\mathbb{R}$ or $\mathbb{C}$ together with a **norm**
$\|\cdot\| : X \to [0, \infty)$ satisfying:

1. $\|x\| = 0 \iff x = 0$ (positive definiteness).
2. $\|\alpha x\| = |\alpha| \cdot \|x\|$ for all scalars $\alpha$ (homogeneity).
3. $\|x + y\| \leq \|x\| + \|y\|$ (triangle inequality).

A norm induces a metric $d(x, y) = \|x - y\|$, making $X$ a metric space.

**Example 1.** $(C[a, b], \|\cdot\|_\infty)$ with $\|f\|_\infty = \sup_{x \in [a,b]} |f(x)|$.

**Example 2.** $(C[a, b], \|\cdot\|_1)$ with $\|f\|_1 = \int_a^b |f(x)|\, dx$. This norm is weaker:
convergence in $\|\cdot\|_1$ does not imply pointwise convergence.

**Example 3.** $\ell^p = \{(x_n) : \sum |x_n|^p < \infty\}$ with $\|x\|_p = (\sum |x_n|^p)^{1/p}$
for $1 \leq p < \infty$.

**Example 4.** $\ell^\infty = \{(x_n) : \sup_n |x_n| < \infty\}$ with $\|x\|_\infty = \sup_n |x_n|$.

### 1.2 Banach Spaces

A **Banach space** is a complete normed space (every Cauchy sequence converges).

**Theorem 1.1.** $\ell^p$ is a Banach space for $1 \leq p \leq \infty$.

**Theorem 1.2.** $L^p(\mu)$ is a Banach space for $1 \leq p \leq \infty$.

**Theorem 1.3.** $(C[a, b], \|\cdot\|_\infty)$ is a Banach space, but $(C[a, b], \|\cdot\|_1)$ is
not (it is not complete: the limit of continuous functions in $L^1$-norm may be discontinuous).

### 1.3 Finite-Dimensional Normed Spaces

**Theorem 1.4.** All norms on a finite-dimensional vector space are equivalent.

**Corollary 1.5.** Every finite-dimensional normed space is a Banach space.

**Theorem 1.6 (Riesz's Lemma).** Let $X$ be a normed space and $Y$ a proper closed subspace. For
every $0 < \theta < 1$, there exists $x \in X$ with $\|x\| = 1$ and $d(x, Y) \geq \theta$.

**Corollary 1.7.** The closed unit ball of a normed space is compact if and only if the space is
finite-dimensional.

## 2. Inner Product Spaces and Hilbert Spaces

### 2.1 Inner Product Spaces

An **inner product space** is a vector space $H$ with an inner product
$\langle \cdot, \cdot \rangle : H \times H \to \mathbb{C}$ satisfying:

1. $\langle x, x\rangle \geq 0$ with equality iff $x = 0$.
2. $\langle x, y\rangle = \overline{\langle y, x\rangle}$.
3. $\langle \alpha x + \beta y, z\rangle = \alpha\langle x, z\rangle + \beta\langle y, z\rangle$.

Every inner product induces a norm: $\|x\| = \sqrt{\langle x, x\rangle}$.

**Example 1.** $\mathbb{C}^n$ with $\langle x, y\rangle = \sum_{i=1}^n x_i \overline{y_i}$.

**Example 2.** $L^2(\mu)$ with $\langle f, g\rangle = \int f \overline{g}\, d\mu$.

### 2.2 Orthogonality

Vectors $x, y \in H$ are **orthogonal** (written $x \perp y$) if $\langle x, y\rangle = 0$.

**Theorem 2.1 (Pythagorean Theorem).** If $x \perp y$, then $\|x + y\|^2 = \|x\|^2 + \|y\|^2$.

**Theorem 2.2 (Parallelogram Law).** In any inner product space:

$$\|x + y\|^2 + \|x - y\|^2 = 2\|x\|^2 + 2\|y\|^2$$

**Theorem 2.3 (Polarization Identity).** In a complex inner product space:

$$\langle x, y\rangle = \frac{1}{4}\left(\|x + y\|^2 - \|x - y\|^2 + i\|x + iy\|^2 - i\|x - iy\|^2\right)$$

**Theorem 2.4 (Cauchy-Schwarz Inequality).** $|\langle x, y\rangle| \leq \|x\| \cdot \|y\|$ with
equality iff $x$ and $y$ are linearly dependent.

### 2.3 Hilbert Spaces

A **Hilbert space** is a complete inner product space.

**Theorem 2.5 (Orthogonal Projection).** Let $M$ be a closed subspace of a Hilbert space $H$. For
every $x \in H$, there exists a unique $y \in M$ (the **orthogonal projection** of $x$ onto $M$)
such that $x - y \perp M$. We write $y = P_M(x)$.

**Theorem 2.6 (Orthogonal Decomposition).** If $M$ is a closed subspace of $H$, then
$H = M \oplus M^\perp$, where $M^\perp = \{x \in H : x \perp M\}$.

### 2.4 Orthonormal Bases

A set $\{e_i\}_{i \in I} \subseteq H$ is an **orthonormal system** if
$\langle e_i, e_j\rangle = \delta_{ij}$.

**Theorem 2.7 (Bessel's Inequality).** If $\{e_i\}_{i=1}^n$ is an orthonormal set, then
$\sum_{i=1}^n |\langle x, e_i\rangle|^2 \leq \|x\|^2$.

**Theorem 2.8.** A Hilbert space is separable if and only if it admits a countable orthonormal
basis.

**Theorem 2.9 (Parseval's Identity).** If $\{e_n\}$ is an orthonormal basis for $H$, then for every
$x \in H$:

$$\|x\|^2 = \sum_{n=1}^{\infty} |\langle x, e_n\rangle|^2 \quad \text{and} \quad x = \sum_{n=1}^{\infty} \langle x, e_n\rangle e_n$$

### 2.5 Riesz Representation Theorem

**Theorem 2.10 (Riesz Representation).** Let $H$ be a Hilbert space. For every bounded linear
functional $\varphi \in H^*$, there exists a unique $y \in H$ such that
$\varphi(x) = \langle x, y\rangle$ for all $x \in H$. Moreover, $\|\varphi\|_{H^*} = \|y\|_H$.

_Proof._ If $\varphi = 0$, take $y = 0$. Otherwise, $\ker(\varphi)$ is a closed subspace, so
$H = \ker(\varphi) \oplus \ker(\varphi)^\perp$. Take $z \in \ker(\varphi)^\perp$ with $\|z\| = 1$.
Then $y = \overline{\varphi(z)} \cdot z$ satisfies $\varphi(x) = \langle x, y\rangle$ for all $x$.
Uniqueness follows from the polarization identity. $\blacksquare$

**Corollary 2.11.** Every Hilbert space is isometrically isomorphic to its dual: $H \cong H^*$
(anti-linearly).

## 3. Bounded Linear Operators

### 3.1 Definitions

A linear operator $T : X \to Y$ between normed spaces is **bounded** if there exists $C \geq 0$ such
that $\|Tx\|_Y \leq C\|x\|_X$ for all $x \in X$. The **operator norm** is

$$\|T\| = \sup\{\|Tx\|_Y : \|x\|_X \leq 1\} = \sup\{\|Tx\|_Y : \|x\|_X = 1\}$$

**Proposition 3.1.** A linear operator is bounded if and only if it is continuous.

**Proposition 3.2.** $T$ is bounded if and only if it maps bounded sets to bounded sets.

The space $\mathcal{B}(X, Y)$ of all bounded linear operators from $X$ to $Y$ is a Banach space when
$Y$ is complete, with the operator norm.

### 3.2 Examples

**Example 1.** The identity operator $I : X \to X$ has $\|I\| = 1$.

**Example 2.** The zero operator $0 : X \to Y$ has $\|0\| = 0$.

**Example 3.** Let $T : \ell^2 \to \ell^2$ be defined by
$T(x_1, x_2, \ldots) = (0, x_1, x_2, \ldots)$ (right shift). Then $\|T\| = 1$.

**Example 4.** The multiplication operator $(M_g f)(x) = g(x)f(x)$ on $L^2$ is bounded with
$\|M_g\| = \|g\|_\infty$.

### 3.3 Dual Spaces

The **dual space** of $X$ is $X^* = \mathcal{B}(X, \mathbb{R})$ (or $\mathcal{B}(X, \mathbb{C})$),
the space of all bounded linear functionals.

**Theorem 3.3.** $X^*$ is always a Banach space.

**Theorem 3.4.** $(\ell^1)^* \cong \ell^\infty$ via $\varphi(x) = \sum x_n y_n$ for
$y \in \ell^\infty$.

**Theorem 3.5.** $(\ell^p)^* \cong \ell^q$ for $1 \leq p < \infty$ where $1/p + 1/q = 1$.

**Theorem 3.6.** $(c_0)^* \cong \ell^1$ where $c_0 = \{(x_n) : x_n \to 0\}$.

### 3.4 Annihilators and the Double Dual

Let $M$ be a subspace of a normed space $X$. The **annihilator** of $M$ is

$$M^\perp = \{\varphi \in X^* : \varphi(x) = 0 \text{ for all } x \in M\}$$

Let $N$ be a subspace of $X^*$. The **pre-annihilator** of $N$ is

$${}^\perp N = \{x \in X : \varphi(x) = 0 \text{ for all } \varphi \in N\}$$

**Proposition 3.7.** If $M \subseteq X$ is a subspace, then $M^\perp$ is a closed subspace of $X^*$.
If $N \subseteq X^*$ is a subspace, then ${}^\perp N$ is a closed subspace of $X$.

**Proposition 3.8.** For a subspace $M \subseteq X$, ${}^\perp(M^\perp) = \overline{M}$ (the closure
of $M$).

**Proposition 3.9.** For finite-dimensional subspaces $M \subseteq X$, $(X/M)^* \cong M^\perp$.

The **double dual** (or **bidual**) of $X$ is $X^{**} = (X^*)^*$. There is a natural embedding
$J : X \hookrightarrow X^{**}$ defined by $(Jx)(\varphi) = \varphi(x)$ for $\varphi \in X^*$. The
Hahn-Banach theorem guarantees that $J$ is an isometric embedding: $\|Jx\|_{X^{**}} = \|x\|_X$.

**Definition.** A normed space $X$ is **reflexive** if the canonical embedding $J : X \to X^{**}$ is
surjective, i.e., $J(X) = X^{**}$.

**Proposition 3.10.** Every reflexive space is a Banach space.

**Example.** $\ell^p$ is reflexive for $1 < p < \infty$ since
$(\ell^p)^{**} \cong (\ell^q)^* \cong \ell^p$.

**Example.** $L^p(\mu)$ is reflexive for $1 < p < \infty$.

**Example.** $\ell^1$, $\ell^\infty$, and $c_0$ are not reflexive. In particular,
$(\ell^1)^{**} \cong (\ell^\infty)^* \supsetneq \ell^1$, and
$(c_0)^{**} \cong \ell^\infty \supsetneq c_0$.

**Theorem 3.11.** A Banach space $X$ is reflexive if and only if its closed unit ball is weakly
compact.

**Theorem 3.12.** If $X$ is reflexive, then every bounded sequence has a weakly convergent
subsequence (Eberlein-Smulian theorem). In particular, every continuous linear functional achieves
its norm on the closed unit ball.

**Worked Example.** Show that $c_0$ is not reflexive. Since $(c_0)^* \cong \ell^1$ by Theorem 3.6,
and $(\ell^1)^* \cong \ell^\infty$ by Theorem 3.4, we have $(c_0)^{**} \cong \ell^\infty$. The
canonical embedding $J : c_0 \hookrightarrow \ell^\infty$ is the inclusion map. Since $\ell^\infty$
contains bounded sequences that do not converge to zero (e.g., the constant sequence
$(1, 1, 1, \ldots)$), $J$ is not surjective, so $c_0$ is not reflexive.

## 4. The Fundamental Theorems

### 4.1 Hahn-Banach Theorem

**Theorem 4.1 (Hahn-Banach, Analytic Form).** Let $X$ be a real vector space, $p : X \to \mathbb{R}$
a sublinear functional ($p(x + y) \leq p(x) + p(y)$ and $p(tx) = tp(x)$ for $t \geq 0$), and
$f : M \to \mathbb{R}$ a linear functional on a subspace $M \subseteq X$ with $f(x) \leq p(x)$ for
all $x \in M$. Then there exists a linear extension $F : X \to \mathbb{R}$ with $F|_M = f$ and
$F(x) \leq p(x)$ for all $x \in X$.

**Theorem 4.2 (Hahn-Banach, Normed Form).** Let $X$ be a normed space and $M \subseteq X$ a
subspace. Every bounded linear functional $f \in M^*$ extends to $F \in X^*$ with $\|F\| = \|f\|$.

**Corollary 4.3.** For every $x_0 \in X$, $x_0 \neq 0$, there exists $\varphi \in X^*$ with
$\|\varphi\| = 1$ and $\varphi(x_0) = \|x_0\|$.

### 4.2 Open Mapping Theorem

**Theorem 4.4 (Open Mapping Theorem).** If $T \in \mathcal{B}(X, Y)$ is a surjective bounded
operator between Banach spaces, then $T$ maps open sets to open sets.

**Corollary 4.5 (Bounded Inverse Theorem).** If $T \in \mathcal{B}(X, Y)$ is bijective and $X, Y$
are Banach, then $T^{-1} \in \mathcal{B}(Y, X)$.

### 4.3 Closed Graph Theorem

**Theorem 4.6 (Closed Graph Theorem).** Let $T : X \to Y$ be a linear operator between Banach
spaces. Then $T$ is bounded if and only if its graph $\Gamma(T) = \{(x, Tx) : x \in X\}$ is closed
in $X \times Y$.

### 4.4 Uniform Boundedness Principle

**Theorem 4.7 (Uniform Boundedness Principle / Banach-Steinhaus).** Let $X$ be a Banach space and
$\{T_\alpha\}_{\alpha \in A} \subseteq \mathcal{B}(X, Y)$ such that
$\sup_\alpha \|T_\alpha x\| < \infty$ for each $x \in X$. Then $\sup_\alpha \|T_\alpha\| < \infty$.

_Proof sketch._ Consider $E = \{x \in X : \sup_\alpha \|T_\alpha x\| \leq n\}$. By the hypothesis,
$X = \bigcup_n E_n$. By Baire category, some $E_n$ has nonempty interior. Rescaling shows
$\sup_\alpha \|T_\alpha\| < \infty$. $\blacksquare$

## 5. Compact Operators

### 5.1 Definition

A linear operator $T : X \to Y$ is **compact** if the image of the closed unit ball, $T(B_X)$, is
relatively compact (its closure is compact) in $Y$.

**Proposition 5.1.** Every compact operator is bounded. Every finite-rank operator is compact.

**Proposition 5.2.** If $T$ is compact and $S$ is bounded, then $TS$ and $ST$ are compact.

**Proposition 5.3.** If $T_n$ are compact and $T_n \to T$ in operator norm, then $T$ is compact.

### 5.2 Spectral Theory for Compact Operators

**Theorem 5.4 (Spectral Theorem for Compact Self-Adjoint Operators).** Let $T$ be a compact
self-adjoint operator on a Hilbert space $H$. Then:

1. All eigenvalues of $T$ are real.
2. Eigenvectors corresponding to distinct eigenvalues are orthogonal.
3. There exists an orthonormal basis of $H$ consisting of eigenvectors of $T$.
4. If $\{\lambda_n\}$ are the nonzero eigenvalues with orthonormal eigenvectors $\{e_n\}$, then
   $Tx = \sum_n \lambda_n \langle x, e_n\rangle e_n$.

**Corollary 5.5.** A compact self-adjoint operator on an infinite-dimensional Hilbert space has at
most countably many nonzero eigenvalues, and $0$ is the only possible accumulation point.

### 5.3 Spectral Theorem for Normal Operators

A bounded operator $T$ on a Hilbert space $H$ is **normal** if $T^*T = TT^*$, and **unitary** if
$T^*T = TT^* = I$.

**Proposition 5.6.** If $T$ is normal, then $\|Tx\| = \|T^*x\|$ for all $x \in H$.

**Proposition 5.7.** If $T$ is normal, then $\ker T = \ker T^*$ and eigenvectors corresponding to
distinct eigenvalues are orthogonal.

**Theorem 5.8 (Spectral Theorem for Normal Compact Operators).** Let $T$ be a compact normal
operator on a Hilbert space $H$. Then there exists an orthonormal basis of $H$ consisting of
eigenvectors of $T$, and the eigenvalues satisfy $|\lambda_n| \to 0$.

This generalises Theorem 5.4: self-adjoint operators are normal, and unitary operators are normal
(with eigenvalues on the unit circle in $\mathbb{C}$).

**Theorem 5.9 (Spectral Theorem for Bounded Normal Operators).** Let $T$ be a bounded normal
operator on $H$. There exists a unique projection-valued measure $E$ on the Borel subsets of
$\sigma(T) \subseteq \mathbb{C}$ such that

$$T = \int_{\sigma(T)} \lambda\, dE(\lambda)$$

This integral representation implies: if $f$ is a bounded Borel function on $\sigma(T)$, then
$f(T) = \int f(\lambda)\, dE(\lambda)$ defines a bounded normal operator satisfying the functional
calculus relations.

### 5.4 Fredholm Alternative

**Theorem 5.6 (Fredholm Alternative).** Let $T$ be a compact operator on a Banach space $X$ and
$\lambda \neq 0$. Then exactly one of the following holds:

1. $(\lambda I - T)$ is bijective (hence invertible by the bounded inverse theorem).
2. $(\lambda I - T)x = 0$ has a nontrivial solution (i.e., $\lambda$ is an eigenvalue of $T$).

## 6. Weak and Weak\* Convergence

### 6.1 Weak Convergence

A sequence $\{x_n\}$ in a normed space $X$ **converges weakly** to $x$ (written
$x_n \rightharpoonup x$) if $\varphi(x_n) \to \varphi(x)$ for every $\varphi \in X^*$.

**Proposition 6.1.** If $x_n \to x$ in norm, then $x_n \rightharpoonup x$ (strong convergence
implies weak convergence).

**Proposition 6.2.** If $x_n \rightharpoonup x$ is weakly convergent, then
$\sup_n \|x_n\| < \infty$.

**Theorem 6.3.** In a Hilbert space $H$, $x_n \rightharpoonup x$ if and only if
$\langle x_n, y\rangle \to \langle x, y\rangle$ for every $y \in H$.

### 6.2 Weak\* Convergence

A sequence $\{\varphi_n\} \subseteq X^*$ **converges weak\*** to $\varphi$ (written
$\varphi_n \overset{w^*}{\to} \varphi$) if $\varphi_n(x) \to \varphi(x)$ for every $x \in X$.

**Theorem 6.4 (Banach-Alaoglu).** The closed unit ball of $X^*$ is weak\*-compact.

### 6.3 Weak Convergence in Specific Spaces

**Theorem 6.5.** In $\ell^p$ ($1 < p < \infty$), $x_n \rightharpoonup x$ if and only if $x_n$ is
bounded and $x_n(i) \to x(i)$ for each coordinate $i$.

**Example.** In $\ell^2$, the standard basis vectors $e_n$ converge weakly to $0$ but not in norm:
$\|e_n\| = 1$ for all $n$, but $\langle e_n, y\rangle = y_n \to 0$ for every $y \in \ell^2$.

## 7. Applications

### 7.1 Differential Equations

**Example (Spectral Theory and ODEs).** Consider the Sturm-Liouville problem
$-u'' + q(x)u = \lambda u$ on $[a, b]$ with boundary conditions $u(a) = u(b) = 0$. The inverse
operator $T = (-d^2/dx^2 + q)^{-1}$ is a compact self-adjoint operator on $L^2[a, b]$. By the
spectral theorem, the eigenfunctions form an orthonormal basis, and the eigenvalues
$\lambda_n \to \infty$.

### 7.2 Quantum Mechanics

In quantum mechanics, the state space of a system is a Hilbert space $H$ (typically
$L^2(\mathbb{R}^3)$). Observables are self-adjoint operators on $H$. The spectral theorem guarantees
that every observable has a spectral decomposition:

$$A = \int_{\sigma(A)} \lambda\, dP(\lambda)$$

where $P$ is the projection-valued measure associated with $A$.

**Example.** The position operator $(X\psi)(x) = x\psi(x)$ and momentum operator
$(P\psi)(x) = -i\hbar\psi'(x)$ are self-adjoint on suitable domains of $L^2(\mathbb{R})$. The
canonical commutation relation $[X, P] = i\hbar I$ is fundamental to quantum mechanics.

### 7.3 Weak Solutions of Partial Differential Equations

Classical solutions of PDEs require pointwise differentiability, which is too restrictive for many
problems. Functional analysis provides the framework for **weak (distributional) solutions**.

Consider the Poisson equation $-\Delta u = f$ on a bounded domain $\Omega \subset \mathbb{R}^n$ with
$u|_{\partial\Omega} = 0$. Multiply both sides by a smooth test function $\varphi$ with
$\varphi|_{\partial\Omega} = 0$ and integrate by parts:

$$\int_\Omega \nabla u \cdot \nabla \varphi\, dx = \int_\Omega f \varphi\, dx$$

This is the **weak formulation**: find $u$ in a suitable function space such that the above holds
for all test functions $\varphi$.

The natural space for this problem is the **Sobolev space** $H^1_0(\Omega)$, defined as the
completion of $C_c^\infty(\Omega)$ under the norm
$\|u\|_{H^1} = \left(\int_\Omega |u|^2 + |\nabla u|^2\, dx\right)^{1/2}$. The Riesz representation
theorem applied to the inner product
$\langle u, v\rangle_{H^1_0} = \int_\Omega \nabla u \cdot \nabla v\, dx$ yields existence and
uniqueness of the weak solution. This is known as the **Lax-Milgram theorem**:

**Theorem 7.1 (Lax-Milgram).** Let $H$ be a Hilbert space and $B : H \times H \to \mathbb{R}$ a
bounded bilinear form that is **coercive**, i.e., there exists $c > 0$ such that
$B(u, u) \geq c\|u\|^2$ for all $u \in H$. Then for every bounded linear functional $\ell \in H^*$,
there exists a unique $u \in H$ such that $B(u, v) = \ell(v)$ for all $v \in H$.

Sobolev spaces $W^{k,p}(\Omega)$ (for $k \geq 0$, $1 \leq p \leq \infty$) generalise this idea:
$W^{k,p}$ consists of functions whose weak derivatives up to order $k$ belong to $L^p$. They are
Banach spaces, and $W^{k,2} = H^k$ are Hilbert spaces.

## 8. Historical Context

Functional analysis emerged in the early twentieth century from the study of integral equations and
the need for abstract frameworks that could unify diverse areas of analysis.

- **David Hilbert (1862--1943)** studied infinite-dimensional quadratic forms and integral equations
  in what we now call $\ell^2$, establishing the foundations of Hilbert space theory around
  1904--1910. His work on spectral theory generalised the eigenvalue problem for matrices to
  operators on infinite-dimensional spaces.

- **Maurice Frechet (1878--1973)** introduced metric spaces (1906) and normed spaces (with the
  name), providing the topological infrastructure upon which Banach spaces rest.

- **Stefan Banach (1892--1945)**, working independently in Poland, published his celebrated _Theorie
  des Operations Lineaires_ (1932), axiomatising normed complete spaces and proving the fundamental
  theorems (Hahn-Banach, open mapping, closed graph, and uniform boundedness) that bear the names of
  their discoverers. His work unified results scattered across multiple research traditions.

- **Hans Hahn (1879--1934)** and **Marshall Stone (1903--1989)** contributed the Hahn-Banach theorem
  (1927/1929) and the Stone representation theorem, respectively.

- **John von Neumann (1903--1957)** formalised the abstract Hilbert space, developed the spectral
  theorem for unbounded operators, and laid the mathematical foundations of quantum mechanics in a
  series of papers beginning in 1929.

- **Alexander Grothendieck (1928--2014)** made fundamental contributions in the 1950s, including the
  theory of nuclear spaces, tensor products of Banach spaces, and the theory of distributions, which
  extended functional analysis to broader settings.

## 9. Summary of Key Theorems

| Theorem              | Statement                                                                                           |
| -------------------- | --------------------------------------------------------------------------------------------------- |
| Hahn-Banach          | Bounded functionals extend preserving norm                                                          |
| Open Mapping         | Surjective bounded operator between Banach spaces is open                                           |
| Closed Graph         | A linear operator between Banach spaces is bounded iff its graph is closed                          |
| Uniform Boundedness  | Pointwise-bounded family of operators is uniformly bounded                                          |
| Riesz Representation | Every functional on a Hilbert space is given by inner product                                       |
| Spectral Theorem     | Compact self-adjoint operators have orthonormal eigenbasis                                          |
| Fredholm Alternative | For compact $T$ and $\lambda \neq 0$: either $\lambda I - T$ is invertible or has nontrivial kernel |
| Banach-Alaoglu       | Closed unit ball of $X^*$ is weak\*-compact                                                         |

:::caution Common Pitfall The Closed Graph Theorem requires both the domain and codomain to be
Banach spaces. A linear operator $T : C[0,1] \to C[0,1]$ defined by $Tf = f'$ (where defined) has a
closed graph in $C[0,1] \times C[0,1]$, but $C^1[0,1]$ is not complete under the $C[0,1]$ norm. The
theorem does not apply, and $T$ is indeed unbounded. :::
