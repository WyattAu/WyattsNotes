---
title: Introduction to Algebraic Topology
tags:
  - University Maths
---

### 9.1 Homotopy

**Definition.** Two continuous functions $f, g : X \to Y$ are **homotopic** (written $f \simeq g$)
if there exists a continuous map $H : X \times [0, 1] \to Y$ such that $H(x, 0) = f(x)$ and
$H(x, 1) = g(x)$ for all $x \in X$.

The map $H$ is called a **homotopy** from $f$ to $g$.

**Definition.** Two spaces $X$ and $Y$ are **homotopy equivalent** (written $X \simeq Y$) if there
exist continuous maps $f : X \to Y$ and $g : Y \to X$ such that
$g \circ f \simeq \operatorname{id}_X$ and $f \circ g \simeq \operatorname{id}_Y$.

**Example 9.1.** The solid disc $D^2 = \{(x, y) : x^2 + y^2 \leq 1\}$ is homotopy equivalent to the
single point $\{0\}$ (it is **contractible**).

### 9.2 The Fundamental Group

**Definition.** A **loop** in $X$ based at $x_0 \in X$ is a continuous map $\gamma : [0, 1] \to X$
with $\gamma(0) = \gamma(1) = x_0$.

**Definition.** The **fundamental group** $\pi_1(X, x_0)$ is the set of homotopy classes of loops
based at $x_0$, with the group operation given by concatenation of loops.

For path-connected spaces, $\pi_1(X, x_0)$ is independent of the choice of basepoint $x_0$ (up to
isomorphism).

**Proposition 9.1.** The fundamental group is a topological invariant: if $X \cong Y$, then
$\pi_1(X) \cong \pi_1(Y)$.

**Example 9.2.** $\pi_1(S^1) \cong \mathbb{Z}$. From first principles, loops in $S^1$ are classified
by their winding number.

**Example 9.3.** $\pi_1(\mathbb{R}^n) = \{e\}$ (the trivial group) for all $n \geq 1$. More
generally, the fundamental group of any directly connected space is trivial.

**Example 9.4.** $\pi_1(T^2) \cong \mathbb{Z} \times \mathbb{Z}$, where $T^2$ is the torus.

### 9.3 Directly Connected Spaces

**Definition.** A path-connected space $X$ is **directly connected** if $\pi_1(X) \cong \{e\}$.

Equivalently, every loop in $X$ can be continuously contracted to a point.

**Proposition 9.2.** $\mathbb{R}^n$, $S^n$ (for $n \geq 2$), and any convex subset of $\mathbb{R}^n$
are directly connected.

### 9.4 Euler Characteristic

**Definition.** For a finite CW-complex (e.g., a polyhedron), the **Euler characteristic** is:

$$\chi = V - E + F$$

where $V$ = number of vertices, $E$ = number of edges, $F$ = number of faces (or higher-dimensional
cells more generally).

**Example 9.5.**

| Surface                          | $\chi$ |
| -------------------------------- | ------ |
| Sphere $S^2$                     | 2      |
| Torus $T^2$                      | 0      |
| Projective plane $\mathbb{R}P^2$ | 1      |
| Klein bottle $K$                 | 0      |
| Double torus (genus 2)           | $-2$   |

For a closed orientable surface of genus $g$: $\chi = 2 - 2g$.

### 9.5 Classification of Surfaces

**Theorem 9.1 (Classification of Compact Surfaces).** Every compact connected surface is
homeomorphic to exactly one of:

1. A sphere with $g$ handles (orientable, genus $g$), or
2. A sphere with $g$ cross-caps / Möbius bands (non-orientable, genus $g$).

**Key surfaces:**

- **Torus $T^2$:** A coffee mug / donut. Constructed by identifying opposite edges of a square.
- **Projective plane $\mathbb{R}P^2$:** Obtained by identifying antipodal points of $S^2$.
  Non-orientable.
- **Klein bottle $K$:** Obtained by identifying opposite edges of a square with one pair reversed.
  Non-orientable, cannot be embedded in $\mathbb{R}^3$.

