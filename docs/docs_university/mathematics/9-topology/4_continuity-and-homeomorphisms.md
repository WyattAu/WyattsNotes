---
title: Continuity and Homeomorphisms
tags:
  - University Maths
---

### 4.1 Continuous Functions

**Definition.** Let $(X, \tau_X)$ and $(Y, \tau_Y)$ be topological spaces. A function $f : X \to Y$
is **continuous** if the preimage of every open set is open: for all $U \in \tau_Y$,
$f^{-1}(U) \in \tau_X$.

Equivalently, $f$ is continuous if the preimage of every closed set is closed.

**Proposition 4.1.** The following are equivalent for $f : X \to Y$:

1. $f$ is continuous.
2. $f^{-1}(V)$ is closed in $X$ for every closed $V \subseteq Y$.
3. $f^{-1}(\overline{B}) \subseteq \overline{f^{-1}(B)}$ for every $B \subseteq Y$.
4. $f(\overline{A}) \subseteq \overline{f(A)}$ for every $A \subseteq X$.

**Example 4.1.** Every constant function $f : X \to Y$ is continuous.

**Example 4.2.** The identity map $\operatorname{id} : X \to X$ is always continuous.

**Example 4.3.** If $\tau_1$ and $\tau_2$ are topologies on $X$ with $\tau_1 \subseteq \tau_2$, then
$\operatorname{id} : (X, \tau_2) \to (X, \tau_1)$ is continuous, but
$\operatorname{id} : (X, \tau_1) \to (X, \tau_2)$ need not be.

**Proposition 4.2.** The composition of continuous functions is continuous: if $f : X \to Y$ and
$g : Y \to Z$ are continuous, then $g \circ f : X \to Z$ is continuous.

### 4.2 Homeomorphisms

**Definition.** A function $f : X \to Y$ is a **homeomorphism** if $f$ is bijective and both $f$ and
$f^{-1}$ are continuous. We write $X \cong Y$ and say $X$ and $Y$ are **homeomorphic**.

A **topological property** (or **topological invariant**) is a property preserved by homeomorphisms.

**Example 4.4.** $(0, 1)$ is homeomorphic to $\mathbb{R}$ via
$f(x) = \tan\left(\pi x - \frac{\pi}{2}\right)$.

**Example 4.5.** Any two open intervals $(a, b)$ and $(c, d)$ in $\mathbb{R}$ are homeomorphic via
an affine map.

**Proposition 4.3.** Homeomorphism is an equivalence relation: reflexive, symmetric, and transitive.

### 4.3 Topological Properties

The following are topological invariants (preserved by homeomorphisms):

- Compactness
- Connectedness
- Separation axioms ($T_0$, $T_1$, $T_2$, etc.)
- Countability axioms (first-countable, second-countable)
- The fundamental group $\pi_1(X)$

**Proposition 4.4.** "Boundedness" is **not** a topological property: $(0, 1)$ is bounded but is
homeomorphic to the unbounded $\mathbb{R}$.

