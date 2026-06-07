---
title: $L^p$ Spaces
tags:
  - Mathematics
  - University
---

### 7.1 Definition

For $1 \leq p < \infty$, define

$$L^p(\mu) = \left\{f : X \to \mathbb{R} \text{ measurable} : \int_X |f|^p\, d\mu < \infty\right\}$$

with the norm $\|f\|_p = \left(\int |f|^p\, d\mu\right)^{1/p}$.

For $p = \infty$, define
$L^\infty(\mu) = \{f : X \to \mathbb{R} \text{ measurable} : \text{ess sup}|f| < \infty\}$ where
$\|f\|_\infty = \mathrm{ess\,sup}|f|$.

**Remark.** Elements of $L^p$ are equivalence classes of functions equal a.e. The norm $\|\cdot\|_p$
is well-defined on equivalence classes.

### 7.2 Holder's Inequality

**Theorem 7.1 (Holder's Inequality).** Let $1 \leq p, q \leq \infty$ with $1/p + 1/q = 1$. If
$f \in L^p(\mu)$ and $g \in L^q(\mu)$, then $fg \in L^1(\mu)$ and

$$\|fg\|_1 \leq \|f\|_p \cdot \|g\|_q$$

_Proof sketch._ Use Young's inequality: $ab \leq a^p/p + b^q/q$ for $a, b \geq 0$. Set
$a = |f|/\|f\|_p$ and $b = |g|/\|g\|_q$ and integrate. $\blacksquare$

**Special case ($p = q = 2$):** This reduces to the **Cauchy-Schwarz inequality**:
$\|fg\|_1 \leq \|f\|_2 \|g\|_2$.

### 7.3 Minkowski's Inequality

**Theorem 7.2 (Minkowski's Inequality).** For $1 \leq p \leq \infty$ and $f, g \in L^p(\mu)$:

$$\|f + g\|_p \leq \|f\|_p + \|g\|_p$$

_Proof sketch (for $1 < p < \infty$)._ Write $|f + g|^p = |f + g| \cdot |f + g|^{p-1}$. Apply
Holder's inequality with conjugate exponents $p$ and $q = p/(p-1)$:

$$\int |f + g|^p \leq \|f\|_p \|f + g\|_p^{p/q} + \|g\|_p \|f + g\|_p^{p/q}$$

Divide both sides by $\|f + g\|_p^{p/q}$. $\blacksquare$

### 7.4 Completeness of $L^p$

**Theorem 7.3.** $(L^p(\mu), \|\cdot\|_p)$ is a Banach space for every $1 \leq p \leq \infty$.

_Proof sketch._ Let $\{f_n\}$ be a Cauchy sequence in $L^p$. Extract a subsequence $f_{n_k}$ with
$\|f_{n_{k+1}} - f_{n_k}\|_p < 2^{-k}$. Define
$g = |f_{n_1}| + \sum_{k=1}^{\infty} |f_{n_{k+1}} - f_{n_k}|$. By the triangle inequality,
$\|g\|_p \leq \|f_{n_1}\|_p + 1$. So $g \in L^p$, hence $g < \infty$ a.e., meaning $f_{n_k}$
converges a.e. to some $f$. Show $f \in L^p$ and $f_n \to f$ in $L^p$-norm. $\blacksquare$

**Theorem 7.4.** $L^2(\mu)$ is a Hilbert space with inner product
$\langle f, g \rangle = \int f\overline{g}\, d\mu$.

### 7.5 Inclusions

**Proposition 7.5.** If $\mu$ is a finite measure and $1 \leq p < q \leq \infty$, then
$L^q(\mu) \subseteq L^p(\mu)$. In particular, $L^\infty(\mu) \subseteq L^2(\mu) \subseteq L^1(\mu)$.

_Proof._ Apply Holder's inequality with $q/p$ and its conjugate. $\blacksquare$

