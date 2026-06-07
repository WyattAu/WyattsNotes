---
title: Lebesgue Outer Measure and Caratheodory Extension
tags:
  - Mathematics
  - University
---

### 3.1 Outer Measures

An **outer measure** on $X$ is a function $\mu^* : \mathcal{P}(X) \to [0, \infty]$ satisfying:

1. $\mu^*(\varnothing) = 0$.
2. **Monotonicity**: $A \subseteq B$ implies $\mu^*(A) \leq \mu^*(B)$.
3. **Countable subadditivity**: $\mu^*\left(\bigcup A_n\right) \leq \sum \mu^*(A_n)$.

### 3.2 Lebesgue Outer Measure

The **Lebesgue outer measure** of $A \subseteq \mathbb{R}$ is

$$m^*(A) = \inf\left\{\sum_{n=1}^{\infty}(b_n - a_n) : A \subseteq \bigcup_{n=1}^{\infty}(a_n, b_n)\right\}$$

where the infimum is taken over all countable coverings of $A$ by open intervals.

**Proposition 3.1.** $m^*$ is translation invariant: $m^*(A + t) = m^*(A)$ for all
$t \in \mathbb{R}$.

### 3.3 Caratheodory's Criterion and Extension Theorem

A set $A \subseteq X$ is **$\mu^*$-measurable** (Caratheodory measurable) if for every
$E \subseteq X$:

$$\mu^*(E) = \mu^*(E \cap A) + \mu^*(E \cap A^c)$$

**Theorem 3.2 (Caratheodory Extension Theorem).** The collection $\mathcal{M}$ of all
$\mu^*$-measurable sets is a $\sigma$-algebra, and $\mu^*|_{\mathcal{M}}$ is a complete measure.

When $\mu^*$ is the Lebesgue outer measure, $\mathcal{M}$ is the collection of **Lebesgue measurable
sets**, containing the Borel $\sigma$-algebra: $\mathcal{B}(\mathbb{R}) \subseteq \mathcal{M}$.

