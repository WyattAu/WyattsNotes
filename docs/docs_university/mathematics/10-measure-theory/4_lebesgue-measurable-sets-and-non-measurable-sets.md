---
title: Lebesgue Measurable Sets and Non-Measurable Sets
tags:
  - Mathematics
  - University
---

### 4.1 Properties of Lebesgue Measurable Sets

**Theorem 4.1.** Every Borel set is Lebesgue measurable.

**Theorem 4.2.** If $A$ is Lebesgue measurable, then for every $\varepsilon > 0$ there exists an
open set $U \supseteq A$ with $m^*(U \setminus A) < \varepsilon$ (outer regularity).

**Theorem 4.3.** If $A$ is Lebesgue measurable, then for every $\varepsilon > 0$ there exists a
closed set $F \subseteq A$ with $m^*(A \setminus F) < \varepsilon$ (inner regularity).

**Corollary 4.4 (Approximation by Intervals).** If $A$ is Lebesgue measurable, then for every
$\varepsilon > 0$ there exists a finite union $U$ of disjoint intervals such that
$m(A \triangle U) < \varepsilon$.

### 4.2 The Vitali Set

**Theorem 4.5.** Assuming the Axiom of Choice, there exists a subset $V \subseteq [0, 1]$ that is
**not** Lebesgue measurable.

_Proof sketch._ Define an equivalence relation on $[0, 1]$: $x \sim y$ if $x - y \in \mathbb{Q}$.
Each equivalence class is $E_x = x + \mathbb{Q}$. By the Axiom of Choice, select one representative
from each equivalence class to form a set $V$ (a **Vitali set**).

Note that for any two distinct rationals $r, s \in [-1, 1]$, the sets $V + r$ and $V + s$ are
disjoint (otherwise $(V + r) \cap (V + s) \neq \varnothing$ implies $v_1 + r = v_2 + s$, so
$v_1 - v_2 \in \mathbb{Q}$, contradicting distinct representatives).

Now $\bigcup_{q \in \mathbb{Q} \cap [-1, 1]} (V + q) \subseteq [-1, 2]$. If $V$ were measurable,
each $V + q$ would be measurable with $m(V + q) = m(V)$ by translation invariance. Then

$$m\left(\bigcup_{q}(V+q)\right) = \sum_{q \in \mathbb{Q} \cap [-1,1]} m(V)$$

This is $0$ if $m(V) = 0$, or $\infty$ if $m(V) > 0$. But the union is contained in $[-1, 2]$ which
has measure $3$. Contradiction. $\blacksquare$

