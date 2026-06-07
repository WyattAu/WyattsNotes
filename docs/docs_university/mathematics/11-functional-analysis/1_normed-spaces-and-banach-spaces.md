---
title: Normed Spaces and Banach Spaces
tags:
  - Mathematics
  - University
---

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

