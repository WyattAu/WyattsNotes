---
title: Bounded Linear Operators
tags:
  - Mathematics
  - University
---

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

