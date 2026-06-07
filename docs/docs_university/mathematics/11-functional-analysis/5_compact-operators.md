---
title: Compact Operators
tags:
  - Mathematics
  - University
---

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

