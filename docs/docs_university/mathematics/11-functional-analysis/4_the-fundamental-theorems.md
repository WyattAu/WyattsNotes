---
title: The Fundamental Theorems
tags:
  - Mathematics
  - University
---

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

