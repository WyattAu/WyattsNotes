---
title: Measures
tags:
  - Mathematics
  - University
---

### 2.1 Definition and Properties

A **measure** on a measurable space $(X, \mathcal{F})$ is a function
$\mu : \mathcal{F} \to [0, \infty]$ satisfying:

1. $\mu(\varnothing) = 0$.
2. **Countable additivity**: if $\{A_n\}_{n=1}^{\infty}$ are pairwise disjoint sets in
   $\mathcal{F}$, then

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \sum_{n=1}^{\infty} \mu(A_n)$$

The triple $(X, \mathcal{F}, \mu)$ is called a **measure space**.

**Proposition 2.1 (Monotonicity).** If $A \subseteq B$, then $\mu(A) \leq \mu(B)$.

_Proof._ $B = A \cup (B \setminus A)$ is a disjoint union, so
$\mu(B) = \mu(A) + \mu(B \setminus A) \geq \mu(A)$. $\blacksquare$

**Proposition 2.2 (Countable Subadditivity).** For any sequence $\{A_n\} \subseteq \mathcal{F}$:

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) \leq \sum_{n=1}^{\infty} \mu(A_n)$$

_Proof._ Define $B_1 = A_1$ and $B_n = A_n \setminus \bigcup_{k=1}^{n-1} A_k$ for $n \geq 2$. Then
$\{B_n\}$ are pairwise disjoint with $\bigcup B_n = \bigcup A_n$. By countable additivity and
monotonicity, $\mu(\bigcup A_n) = \sum \mu(B_n) \leq \sum \mu(A_n)$. $\blacksquare$

**Proposition 2.3 (Continuity from Below).** If $A_1 \subseteq A_2 \subseteq \cdots$, then

$$\mu\left(\bigcup_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} \mu(A_n)$$

_Proof._ Write $\bigcup A_n = A_1 \cup (A_2 \setminus A_1) \cup (A_3 \setminus A_2) \cup \cdots$, a
disjoint union. Then
$\mu(\bigcup A_n) = \mu(A_1) + \sum_{n=1}^{\infty} \mu(A_{n+1} \setminus A_n) = \lim_{n \to \infty} \mu(A_n)$.
$\blacksquare$

**Proposition 2.4 (Continuity from Above).** If $A_1 \supseteq A_2 \supseteq \cdots$ and
$\mu(A_1) < \infty$, then

$$\mu\left(\bigcap_{n=1}^{\infty} A_n\right) = \lim_{n \to \infty} \mu(A_n)$$

### 2.2 Examples of Measures

**Example (Counting Measure).** On any set $X$ with $\mathcal{F} = \mathcal{P}(X)$, define
$\mu(A) = |A|$ (the cardinality, $\infty$ for infinite sets). This is a measure.

**Example (Dirac Measure).** For $x_0 \in X$, define $\delta_{x_0}(A) = 1$ if $x_0 \in A$, and $0$
otherwise. This is a measure.

**Example (Lebesgue Measure).** The Lebesgue measure $m$ on $\mathbb{R}$ is the completion of a
measure on $\mathcal{B}(\mathbb{R})$ satisfying $m([a, b]) = b - a$ for all $a \leq b$. On
$\mathbb{R}^n$, the Lebesgue measure satisfies
$m([a_1, b_1] \times \cdots \times [a_n, b_n]) = \prod_{i=1}^n (b_i - a_i)$.

