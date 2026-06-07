---
title: Smooth Manifolds
tags:
  - Mathematics
  - University
---

### 1.1 Topological Manifolds

An $n$-dimensional **topological manifold** $M$ is a topological space that is:

1. **Hausdorff**: distinct points have disjoint neighborhoods.
2. **Second countable**: the topology has a countable basis.
3. **Locally Euclidean**: every point $p \in M$ has a neighborhood $U$ homeomorphic to an open
   subset of $\mathbb{R}^n$.

A homeomorphism $\varphi : U \to V \subseteq \mathbb{R}^n$ is called a **coordinate chart** (or just
**chart**), and $(U, \varphi)$ is a **coordinate neighborhood**.

### 1.2 Smooth Manifolds and Atlases

A **smooth atlas** on a topological $n$-manifold $M$ is a collection of charts
$\{(U_\alpha, \varphi_\alpha)\}$ such that:

1. The $U_\alpha$ cover $M$.
2. For every pair of overlapping charts, the **transition map**
   $\varphi_\beta \circ \varphi_\alpha^{-1} : \varphi_\alpha(U_\alpha \cap U_\beta) \to \varphi_\beta(U_\alpha \cap U_\beta)$
   is a smooth diffeomorphism.

Two atlases are **compatible** if their union is also a smooth atlas. A **smooth structure** on $M$
is a maximal smooth atlas.

**Example 1.** $\mathbb{R}^n$ with the identity chart is a smooth manifold.

**Example 2.** $S^n = \{x \in \mathbb{R}^{n+1} : \|x\| = 1\}$ is a smooth manifold. Use
stereographic projection or the $2(n+1)$ hemisphere charts.

**Example 3.** The general linear group
$GL_n(\mathbb{R}) = \{A \in M_n(\mathbb{R}) : \det(A) \neq 0\}$ is an open subset of
$\mathbb{R}^{n^2}$, hence a smooth manifold of dimension $n^2$.

**Example 4.** The real projective space $\mathbb{RP}^n$ is a smooth manifold of dimension $n$.

### 1.3 Smooth Maps and Diffeomorphisms

A map $f : M \to N$ between smooth manifolds is **smooth** if for every $p \in M$, there exist
charts $(U, \varphi)$ near $p$ and $(V, \psi)$ near $f(p)$ with $f(U) \subseteq V$, such that
$\psi \circ f \circ \varphi^{-1}$ is smooth as a map between open subsets of Euclidean spaces.

A **diffeomorphism** is a smooth bijection with smooth inverse. If $M$ and $N$ are diffeomorphic, we
write $M \cong N$.

**Proposition 1.1.** Diffeomorphism is an equivalence relation on the class of smooth manifolds.

