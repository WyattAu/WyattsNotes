---
title: Topological Spaces
tags:
  - University Maths
---

### 2.1 Definition

**Definition.** A **topological space** is a pair $(X, \tau)$ where $X$ is a set and $\tau$ is a
collection of subsets of $X$ called **open sets**, satisfying:

1. $\emptyset \in \tau$ and $X \in \tau$.
2. The union of any sub-collection of $\tau$ is in $\tau$ (arbitrary unions of open sets are open).
3. The intersection of any **finite** sub-collection of $\tau$ is in $\tau$ (finite intersections of
   open sets are open).

The collection $\tau$ is called a **topology** on $X$.

### 2.2 Examples of Topologies

**Example 2.1.** Let $X = \{a, b, c\}$. The collection

$$\tau = \{\emptyset, \{a\}, \{a, b\}, \{a, b, c\}\}$$

is a topology on $X$.

**Example 2.2 (Discrete topology).** For any set $X$, let $\tau_d = \mathcal{P}(X)$ (all subsets of
$X$). This is the **discrete topology** — every subset is open.

**Example 2.3 (Indiscrete topology).** For any set $X$, let $\tau_i = \{\emptyset, X\}$. This is the
**indiscrete topology** (or trivial topology).

**Example 2.4 (Cofinite topology).** For any infinite set $X$, let $\tau_c$ consist of $\emptyset$
and all subsets $U \subseteq X$ such that $X \setminus U$ is finite. This is the **cofinite
topology**.

**Example 2.5 (Standard topology on $\mathbb{R}$).** A subset $U \subseteq \mathbb{R}$ is **open**
if for every $x \in U$ there exists $\varepsilon > 0$ such that
$(x - \varepsilon, x + \varepsilon) \subseteq U$. The collection of all such open sets is the
**standard topology** on $\mathbb{R}$.

### 2.3 Basis for a Topology

**Definition.** A **basis** for a topology $\tau$ on $X$ is a collection
$\mathcal{B} \subseteq \tau$ such that every open set is a union of elements of $\mathcal{B}$.

Equivalently, $\mathcal{B}$ is a basis if and only if:

1. For each $x \in X$, there exists $B \in \mathcal{B}$ with $x \in B$.
2. If $B_1, B_2 \in \mathcal{B}$ and $x \in B_1 \cap B_2$, then there exists $B_3 \in \mathcal{B}$
   with $x \in B_3 \subseteq B_1 \cap B_2$.

**Example 2.6.** The collection of all open intervals $(a, b)$ in $\mathbb{R}$ forms a basis for the
standard topology.

**Example 2.7.** The collection of all open balls $B_r(p) = \{x \in \mathbb{R}^n : \|x - p\| < r\}$
forms a basis for the standard topology on $\mathbb{R}^n$.

### 2.4 Subspace Topology

**Definition.** Let $(X, \tau)$ be a topological space and $Y \subseteq X$. The **subspace
topology** on $Y$ is

$$\tau_Y = \{U \cap Y : U \in \tau\}.$$

**Proposition 2.1.** If $\mathcal{B}$ is a basis for $\tau$, then $\{B \cap Y : B \in \mathcal{B}\}$
is a basis for the subspace topology on $Y$.

**Example 2.8.** The subspace topology on $[0, 1] \subseteq \mathbb{R}$ (with the standard topology)
has $[0, 1/2)$ as an open set (since $[0, 1/2) = (-1/2, 1/2) \cap [0, 1]$).

### 2.5 Comparison of Topologies

**Definition.** Let $\tau_1$ and $\tau_2$ be topologies on $X$. We say $\tau_1$ is **coarser**
(weaker) than $\tau_2$ (or $\tau_2$ is **finer** (stronger) than $\tau_1$) if
$\tau_1 \subseteq \tau_2$.

For any set $X$: indiscrete $\subseteq$ cofinite $\subseteq$ standard (if $X = \mathbb{R}$)
$\subseteq$ discrete.

