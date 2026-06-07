---
title: Vector Fields and Flows
tags:
  - Mathematics
  - University
---

### 3.1 Integral Curves

Let $X$ be a smooth vector field on $M$. An **integral curve** of $X$ through $p$ is a smooth curve
$\gamma : I \to M$ such that $\gamma(0) = p$ and $\gamma'(t) = X_{\gamma(t)}$ for all $t \in I$.

**Theorem 3.1 (Existence and Uniqueness).** For every $p \in M$, there exists a unique maximal
integral curve $\gamma_p : I_p \to M$ of $X$ through $p$, defined on a maximal open interval
$I_p \subseteq \mathbb{R}$ containing $0$.

### 3.2 The Lie Bracket

For vector fields $X, Y$ on $M$, the **Lie bracket** $[X, Y]$ is the vector field defined by:

$$[X, Y](f) = X(Y(f)) - Y(X(f))$$

for $f \in C^\infty(M)$.

**Proposition 3.2 (Properties of the Lie Bracket).**

1. Bilinearity: $[aX + bY, Z] = a[X, Z] + b[Y, Z]$.
2. Anti-symmetry: $[X, Y] = -[Y, X]$.
3. **Jacobi identity**: $[X, [Y, Z]] + [Y, [Z, X]] + [Z, [X, Y]] = 0$.

The space of all vector fields $\mathfrak{X}(M)$ with the Lie bracket forms a **Lie algebra**.

### 3.3 The Lie Derivative

The **Lie derivative** of a vector field $Y$ along $X$ is $\mathcal{L}_X Y = [X, Y]$. For a function
$f$, $\mathcal{L}_X f = X(f)$.

The Lie derivative measures the rate of change of a geometric object along the flow of $X$.

**Theorem 3.3 (Flow of the Lie Bracket).** If $\Phi_t$ and $\Psi_s$ are the flows of $X$ and $Y$
respectively, then $\frac{d}{dt}\big|_{t=0} (\Psi_{-t})_*(\Phi_t)_* Y = [X, Y]$.

