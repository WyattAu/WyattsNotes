---
title: Radon-Nikodym Derivative and Lebesgue Decomposition
tags:
  - Mathematics
  - University
---

### 9.1 Absolute Continuity

A measure $\nu$ is **absolutely continuous** with respect to $\mu$ (written $\nu \ll \mu$) if
$\mu(A) = 0$ implies $\nu(A) = 0$.

Measures $\mu$ and $\nu$ are **mutually singular** (written $\mu \perp \nu$) if there exists
$A \in \mathcal{F}$ such that $\mu(A) = 0$ and $\nu(A^c) = 0$.

### 9.2 Radon-Nikodym Theorem

**Theorem 9.1 (Radon-Nikodym Theorem).** Let $(X, \mathcal{F}, \mu)$ be a $\sigma$-finite measure
space and $\nu$ a $\sigma$-finite signed measure with $\nu \ll \mu$. Then there exists a unique
(a.e.) measurable function $f : X \to \mathbb{R}$ such that

$$\nu(A) = \int_A f\, d\mu \quad \text{for all } A \in \mathcal{F}$$

This function $f$ is denoted $d\nu/d\mu$ and called the **Radon-Nikodym derivative** of $\nu$ with
respect to $\mu$.

### 9.3 Lebesgue Decomposition

**Theorem 9.2 (Lebesgue Decomposition).** Let $\mu$ and $\nu$ be $\sigma$-finite measures on
$(X, \mathcal{F})$. Then there exist unique measures $\nu_a$ and $\nu_s$ such that:

1. $\nu = \nu_a + \nu_s$.
2. $\nu_a \ll \mu$ (absolutely continuous part).
3. $\nu_s \perp \mu$ (singular part).

**Example.** The Cantor function $F : [0, 1] \to [0, 1]$ is continuous, monotonically increasing,
and has $F(0) = 0$, $F(1) = 1$. The associated measure $\mu_F$ (the Cantor measure or "Devil's staircase" measure) is singular with respect to Lebesgue measure: $\mu_F \perp m$. By Lebesgue
decomposition, $\mu_F = \mu_F + 0$ with $\mu_F \perp m$.

