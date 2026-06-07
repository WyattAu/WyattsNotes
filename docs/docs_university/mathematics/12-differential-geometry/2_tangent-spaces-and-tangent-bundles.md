---
title: Tangent Spaces and Tangent Bundles
tags:
  - Mathematics
  - University
---

### 2.1 Tangent Vectors

There are several equivalent definitions of the tangent space $T_p M$ at $p \in M$:

**Definition (Directional Derivatives).** A tangent vector at $p$ is a derivation at $p$: a linear
map $v : C^\infty(M) \to \mathbb{R}$ satisfying the Leibniz rule:

$$v(fg) = f(p) \cdot v(g) + v(f) \cdot g(p)$$

**Definition (Equivalence Classes of Curves).** A tangent vector is an equivalence class of smooth
curves $\gamma : (-\varepsilon, \varepsilon) \to M$ with $\gamma(0) = p$, where
$\gamma_1 \sim \gamma_2$ if $(\varphi \circ \gamma_1)'(0) = (\varphi \circ \gamma_2)'(0)$ in some
(hence every) chart.

**Proposition 2.1.** $T_p M$ is a vector space of dimension $n = \dim M$.

### 2.2 The Tangent Bundle

The **tangent bundle** of $M$ is

$$TM = \bigsqcup_{p \in M} T_p M = \{(p, v) : p \in M,\ v \in T_p M\}$$

It is a smooth manifold of dimension $2n$ with projection $\pi : TM \to M$ given by $\pi(p, v) = p$.

A **vector field** on $M$ is a smooth section of $TM$: a smooth map $X : M \to TM$ with
$\pi \circ X = \mathrm{id}_M$, written $X(p) = X_p \in T_p M$.

### 2.3 The Differential

Let $f : M \to N$ be a smooth map. The **differential** (or pushforward) of $f$ at $p$ is the linear
map:

$$df_p : T_p M \to T_{f(p)} N, \quad df_p(v)(g) = v(g \circ f)$$

for $v \in T_p M$ and $g \in C^\infty(N)$. In local coordinates, $df_p$ is represented by the
Jacobian matrix $[D(f \circ \varphi^{-1})](\varphi(p))$.

**Proposition 2.2 (Chain Rule).** $d(g \circ f)_p = dg_{f(p)} \circ df_p$.

