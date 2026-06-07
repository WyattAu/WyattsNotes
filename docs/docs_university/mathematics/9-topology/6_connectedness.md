---
title: Connectedness
tags:
  - University Maths
---

### 6.1 Connected and Disconnected Spaces

**Definition.** A topological space $X$ is **disconnected** if there exist nonempty disjoint open
sets $U, V$ with $X = U \cup V$. Such a pair $\{U, V\}$ is called a **separation** of $X$.

$X$ is **connected** if it is not disconnected.

Equivalently, $X$ is connected if and only if the only clopen subsets of $X$ are $\emptyset$ and
$X$.

**Example 6.1.** $[0, 1]$ is connected. $[0, 1) \cup (2, 3]$ is disconnected (with the subspace
topology from $\mathbb{R}$).

**Example 6.2.** $\mathbb{Q}$ with the subspace topology from $\mathbb{R}$ is totally disconnected:
the only connected subsets are singletons.

### 6.2 Connected Subsets of $\mathbb{R}$

**Theorem 6.1.** A subset of $\mathbb{R}$ (with the standard topology) is connected if and only if
it is an interval.

(Here an **interval** is any set $I \subseteq \mathbb{R}$ with the property: if $a, b \in I$ and
$a < c < b$, then $c \in I$.)

### 6.3 Path-Connectedness

**Definition.** A space $X$ is **path-connected** if for any two points $x, y \in X$, there exists a
continuous function $\gamma : [0, 1] \to X$ with $\gamma(0) = x$ and $\gamma(1) = y$.

**Proposition 6.1.** Every path-connected space is connected. The converse is false.

**Example 6.3 (Topologist's sine curve).** Let

$$S = \{(x, \sin(1/x)) : 0 < x \leq 1\} \cup \{(0, y) : -1 \leq y \leq 1\} \subseteq \mathbb{R}^2.$$

$S$ is connected but not path-connected.

**Example 6.4.** $\mathbb{R}^n$ is path-connected for all $n \geq 1$. Any convex subset of
$\mathbb{R}^n$ is path-connected.

### 6.4 Components

**Definition.** A **connected component** of $X$ is a maximal connected subset of $X$. The connected
components of $X$ form a partition of $X$.

**Proposition 6.2.** Connected components are closed (in a Hausdorff space, they are always closed).

**Definition.** A **path component** of $X$ is a maximal path-connected subset. Path components also
partition $X$, and each path component is contained in a connected component.

### 6.5 Local Connectedness

**Definition.** $X$ is **locally connected** if for every $x \in X$ and every open neighbourhood $U$
of $x$, there exists a connected open neighbourhood $V$ of $x$ with $V \subseteq U$.

**Proposition 6.3.** Every open subset of $\mathbb{R}^n$ is locally connected.

**Example 6.5.** The topologist's sine curve is connected but not locally connected.

