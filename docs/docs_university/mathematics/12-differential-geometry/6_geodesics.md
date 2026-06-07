---
title: Geodesics
tags:
  - Mathematics
  - University
---

### 6.1 Definition

A **geodesic** is a curve $\gamma(t)$ whose acceleration is zero:
$\nabla_{\dot{\gamma}} \dot{\gamma} = 0$.

In local coordinates, the geodesic equation is:

$$\ddot{\gamma}^k + \Gamma^k_{ij}\, \dot{\gamma}^i \dot{\gamma}^j = 0$$

This is a second-order ODE, so geodesics exist and are unique given an initial point and velocity.

**Proposition 6.1.** Geodesics are locally distance-minimizing: for sufficiently small $t$, the
geodesic $\gamma$ from $p$ to $\gamma(t)$ has length equal to the Riemannian distance
$d(p, \gamma(t))$.

### 6.2 The Exponential Map

For $p \in M$, the **exponential map** $\exp_p : T_p M \to M$ is defined by
$\exp_p(v) = \gamma_v(1)$, where $\gamma_v$ is the geodesic with $\gamma_v(0) = p$ and
$\dot{\gamma}_v(0) = v$.

**Proposition 6.2.** The exponential map is a local diffeomorphism near the origin: there exists
$\varepsilon > 0$ such that $\exp_p$ is a diffeomorphism from
$\{v \in T_p M : \|v\| < \varepsilon\}$ onto an open neighborhood of $p$.

### 6.3 Completeness

A Riemannian manifold $(M, g)$ is **geodesically complete** if every maximal geodesic is defined for
all time (i.e., on $\mathbb{R}$).

**Theorem 6.3 (Hopf-Rinow).** For a connected Riemannian manifold, the following are equivalent:

1. $M$ is geodesically complete.
2. $(M, d)$ is a complete metric space (where $d$ is the Riemannian distance).
3. Every closed and bounded subset of $M$ is compact.
4. There exists $p \in M$ such that $\exp_p$ is defined on all of $T_p M$.

**Corollary.** Every compact Riemannian manifold is geodesically complete.

