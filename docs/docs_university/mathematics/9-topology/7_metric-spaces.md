---
title: Metric Spaces
tags:
  - University Maths
---

### 7.1 Definition

**Definition.** A **metric space** is a pair $(M, d)$ where $M$ is a set and
$d : M \times M \to [0, \infty)$ satisfies, for all $x, y, z \in M$:

1. **Non-negativity:** $d(x, y) \geq 0$, with equality iff $x = y$.
2. **Symmetry:** $d(x, y) = d(y, x)$.
3. **Triangle inequality:** $d(x, z) \leq d(x, y) + d(y, z)$.

Every metric induces a topology: the open sets are unions of open balls
$B_r(p) = \{x : d(x, p) < r\}$.

### 7.2 Standard Metrics

**Example 7.1 (Euclidean metric).** On $\mathbb{R}^n$:

$$d_2(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}.$$

**Example 7.2 ($p$-norm metrics).** For $1 \leq p \leq \infty$:

$$d_p(\mathbf{x}, \mathbf{y}) = \left(\sum_{i=1}^{n} |x_i - y_i|^p\right)^{1/p}, \qquad d_\infty(\mathbf{x}, \mathbf{y}) = \max_{1 \leq i \leq n} |x_i - y_i|.$$

All of these induce the standard topology on $\mathbb{R}^n$.

**Example 7.3 (Discrete metric).** For any set $X$:

$$d(x, y) = \begin{cases} 0 & \text{if } x = y, \\ 1 & \text{if } x \neq y. \end{cases}$$

The discrete metric induces the discrete topology.

### 7.3 Convergence in Metric Spaces

**Definition.** A sequence $(x_n)$ in $(M, d)$ **converges** to $x \in M$ (written $x_n \to x$) if
for every $\varepsilon > 0$ there exists $N$ such that $d(x_n, x) < \varepsilon$ for all $n \geq N$.

**Proposition 7.1.** In a metric space, $x_n \to x$ if and only if for every open neighbourhood $U$
of $x$, there exists $N$ with $x_n \in U$ for all $n \geq N$.

Limits in metric spaces are unique (this follows from the Hausdorff property).

### 7.4 Completeness

**Definition.** A sequence $(x_n)$ is **Cauchy** if for every $\varepsilon > 0$ there exists $N$
such that $d(x_m, x_n) < \varepsilon$ for all $m, n \geq N$.

Every convergent sequence is Cauchy. The converse need not hold.

**Definition.** A metric space $(M, d)$ is **complete** if every Cauchy sequence converges.

**Example 7.4.** $\mathbb{R}^n$ with the Euclidean metric is complete.

**Example 7.5.** $\mathbb{Q}$ with $d(x, y) = |x - y|$ is not complete: the Cauchy sequence
$3, 3.1, 3.14, 3.141, 3.1415, \ldots$ does not converge in $\mathbb{Q}$.

**Proposition 7.2.** A closed subset of a complete metric space is complete.

**Definition.** A **Banach space** is a complete normed vector space.

**Example 7.6.** $(C([a, b]), \|\cdot\|_\infty)$ — the space of continuous functions on $[a, b]$
with the sup norm — is a Banach space.

### 7.5 Contraction Mapping Theorem

**Definition.** A map $f : M \to M$ is a **contraction** if there exists $0 \leq c < 1$ such that
$d(f(x), f(y)) \leq c \cdot d(x, y)$ for all $x, y \in M$.

**Theorem 5.6 (Banach Fixed Point Theorem).** If $(M, d)$ is a complete metric space and
$f : M \to M$ is a contraction, then $f$ has a unique fixed point $x^*$, and for any $x_0 \in M$,
the iteration $x_{n+1} = f(x_n)$ converges to $x^*$.

**Proof.** For any $x_0$, the sequence $x_n = f^n(x_0)$ is Cauchy (by repeated application of the
contraction condition), hence converges to some $x^*$. By continuity of $f$, $x^* = f(x^*)$.
Uniqueness follows from the contraction condition: if $x^* = f(x^*)$ and $y^* = f(y^*)$, then
$d(x^*, y^*) = d(f(x^*), f(y^*)) \leq c \cdot d(x^*, y^*)$, so $d(x^*, y^*) = 0$. $\square$

