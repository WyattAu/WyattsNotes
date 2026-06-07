---
title: Separation Axioms
tags:
  - University Maths
---

### 8.1 Overview

Separation axioms formalise how well points and closed sets can be "separated" by open sets.

### 8.2 $T_0$ (Kolmogorov)

**Definition.** $X$ is $T_0$ if for any two distinct points $x, y \in X$, at least one has an open
neighbourhood not containing the other.

**Example 8.1.** The Sierpiński space $\{0, 1\}$ with topology $\{\emptyset, \{0\}, \{0, 1\}\}$ is
$T_0$ but not $T_1$.

### 8.3 $T_1$ (Fréchet)

**Definition.** $X$ is $T_1$ if for any two distinct points $x, y \in X$, there exist open sets
$U, V$ with $x \in U$, $y \notin U$ and $y \in V$, $x \notin V$.

**Proposition 8.1.** $X$ is $T_1$ if and only if every singleton $\{x\}$ is closed.

**Example 8.2.** Any infinite set with the cofinite topology is $T_1$ but not $T_2$.

### 8.4 $T_2$ (Hausdorff)

**Definition.** $X$ is **Hausdorff** ($T_2$) if for any two distinct points $x, y \in X$, there
exist disjoint open sets $U, V$ with $x \in U$ and $y \in V$.

**Proposition 8.2.** Every metric space is Hausdorff.

**Proposition 8.3.** In a Hausdorff space, every convergent sequence has a unique limit.

**Proposition 8.4.** $T_2 \implies T_1 \implies T_0$.

### 8.5 $T_3$ (Regular) and $T_4$ (Normal)

**Definition.** $X$ is **regular** ($T_3$) if it is $T_1$ and for any point $x$ and closed set $F$
with $x \notin F$, there exist disjoint open sets $U, V$ with $x \in U$ and $F \subseteq V$.

**Definition.** $X$ is **normal** ($T_4$) if it is $T_1$ and for any two disjoint closed sets
$F_1, F_2$, there exist disjoint open sets $U, V$ with $F_1 \subseteq U$ and $F_2 \subseteq V$.

**Proposition 8.5.** $T_4 \implies T_3 \implies T_2$ (assuming $T_1$).

**Proposition 8.6.** Every compact Hausdorff space is normal.

### 8.6 Urysohn's Lemma

**Theorem 8.1 (Urysohn's Lemma).** If $X$ is normal and $F_1, F_2$ are disjoint closed subsets, then
there exists a continuous function $f : X \to [0, 1]$ with $f|_{F_1} = 0$ and $f|_{F_2} = 1$.

This is a fundamental tool in topology, used to construct partitions of unity and to prove extension
theorems.

