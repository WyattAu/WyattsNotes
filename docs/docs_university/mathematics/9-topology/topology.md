---
title: Topology
slug: topology
date: 2026-05-30
tags:
  - University Maths
categories:
  - University Maths
description:
  'University-level topology: topological spaces, open and closed sets, continuity, compactness,
  connectedness, metric spaces, separation axioms, and.'
---

## 1. Introduction to Topology

### 1.1 What is Topology?

**Topology** is the branch of mathematics that studies properties of spaces that are preserved under
continuous deformations. Two objects are considered topologically equivalent if one can be
continuously deformed into the other without tearing or gluing.

The classic informal example: a coffee mug is topologically equivalent to a donut (torus). Both have
exactly one hole, and one can be smoothly deformed into the other.

Formally, topology generalises the notions of **closeness**, **continuity**, and **convergence**
from analysis and geometry, stripping away the rigid structure of distance and angles.

### 1.2 Motivation

Topology arises by definition from several directions:

- **Analysis:** The $\varepsilon$-$\delta$ definition of continuity in $\mathbb{R}^n$ depends only
  on open sets, not on the specific metric. Topology abstracts this to general spaces.
- **Geometry:** Many geometric properties (e.g., the number of holes in a surface) are invariant
  under continuous deformations.
- **Algebra:** Topological spaces carry algebraic invariants (fundamental group, homology groups)
  that classify spaces up to topological equivalence.

### 1.3 Historical Remarks

Key figures include Euler (Königsberg bridges, 1736), Riemann (Riemann surfaces, 1850s), Cantor (set
theory, 1870s–80s), Poincaré (algebraic topology, 1890s), Hausdorff (metric and topological spaces,
1914), and Brouwer (fixed point theorem, 1911).

## 2. Topological Spaces

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

## 3. Closed Sets, Closure, Interior, and Boundary

### 3.1 Closed Sets

**Definition.** A subset $F \subseteq X$ is **closed** if its complement $X \setminus F$ is open.

**Proposition 3.1.** Closed sets satisfy:

1. $\emptyset$ and $X$ are closed.
2. Any intersection of closed sets is closed.
3. Any finite union of closed sets is closed.

**Example 3.1.** In $\mathbb{R}$ with the standard topology, $[a, b]$ is closed since
$\mathbb{R} \setminus [a, b] = (-\infty, a) \cup (b, \infty)$ is open.

**Example 3.2.** Sets can be both open and closed (clopen). In the discrete topology every set is
clopen. In any topological space, $\emptyset$ and $X$ are clopen.

**Example 3.3.** Sets can be neither open nor closed. In $\mathbb{R}$, $[0, 1)$ is neither open nor
closed.

### 3.2 Closure

**Definition.** The **closure** of $A \subseteq X$, denoted $\overline{A}$, is the smallest closed
set containing $A$:

$$\overline{A} = \bigcap \{F : F \text{ is closed and } A \subseteq F\}.$$

Equivalently, $x \in \overline{A}$ if and only if every open set containing $x$ intersects $A$.

**Example 3.4.** In $\mathbb{R}$: $\overline{(0, 1)} = [0, 1]$,
$\overline{\mathbb{Q}} = \mathbb{R}$.

**Example 3.5.** In $\mathbb{R}^2$ with the standard topology, the closure of the open unit disc
$\{(x, y) : x^2 + y^2 < 1\}$ is the closed unit disc $\{(x, y) : x^2 + y^2 \leq 1\}$.

### 3.3 Interior

**Definition.** The **interior** of $A \subseteq X$, denoted $\mathring{A}$ or
$\operatorname{int}(A)$, is the largest open set contained in $A$:

$$\operatorname{int}(A) = \bigcup \{U : U \text{ is open and } U \subseteq A\}.$$

Equivalently, $x \in \operatorname{int}(A)$ if and only if there exists an open set $U$ with
$x \in U \subseteq A$.

**Example 3.6.** In $\mathbb{R}$: $\operatorname{int}([0, 1]) = (0, 1)$,
$\operatorname{int}(\mathbb{Q}) = \emptyset$.

### 3.4 Boundary

**Definition.** The **boundary** of $A \subseteq X$, denoted $\partial A$, is:

$$\partial A = \overline{A} \cap \overline{X \setminus A} = \overline{A} \setminus \operatorname{int}(A).$$

**Example 3.7.** In $\mathbb{R}$: $\partial(0, 1) = \{0, 1\}$, $\partial\mathbb{Q} = \mathbb{R}$,
$\partial\emptyset = \emptyset$.

### 3.5 Dense Sets

**Definition.** A subset $A \subseteq X$ is **dense** in $X$ if $\overline{A} = X$.

**Example 3.8.** $\mathbb{Q}$ is dense in $\mathbb{R}$ with the standard topology.

**Example 3.9.** In the cofinite topology on an infinite set $X$, every infinite subset is dense.

**Proposition 3.2.** $A$ is dense in $X$ if and only if every nonempty open set intersects $A$.

## 4. Continuity and Homeomorphisms

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

## 5. Compactness

### 5.1 Open Covers

**Definition.** Let $X$ be a topological space. An **open cover** of $X$ is a collection
$\{U_\alpha\}_{\alpha \in I}$ of open sets such that $\bigcup_{\alpha \in I} U_\alpha = X$.

A **subcover** is a subcollection $\{U_\alpha\}_{\alpha \in J}$ ($J \subseteq I$) that still covers
$X$. A **finite subcover** has $|J| < \infty$.

### 5.2 Compact Spaces

**Definition.** A topological space $X$ is **compact** if every open cover of $X$ has a finite
subcover.

**Theorem 5.1 (Heine–Borel).** A subset of $\mathbb{R}^n$ (with the standard topology) is compact if
and only if it is closed and bounded.

**Example 5.1.** $[0, 1]$ is compact in $\mathbb{R}$. $(0, 1)$ is not compact: the open cover
$\{(1/n, 1)\}_{n=2}^\infty$ has no finite subcover.

**Example 5.2.** $\mathbb{R}$ is not compact (it is not bounded). Any finite set is compact.

**Proposition 5.1.** Every closed subset of a compact space is compact.

**Proposition 5.2.** Every compact subset of a Hausdorff space is closed.

### 5.3 Compactness in $\mathbb{R}$

**Theorem 5.2.** The closed interval $[a, b]$ is compact (with the standard topology on
$\mathbb{R}$).

**Proof.** Let $\mathcal{U} = \{U_\alpha\}$ be an open cover of $[a, b]$. Let

$$S = \{x \in [a, b] : [a, x] \text{ has a finite subcover from } \mathcal{U}\}.$$

Then $a \in S$ (since $a \in$ some $U_\alpha$), so $S \neq \emptyset$. Let $s = \sup S$. One shows
$s \in S$ and $s = b$, completing the proof. $\square$

### 5.4 Products: Tychonoff's Theorem

**Theorem 5.3 (Tychonoff).** The product of any collection of compact spaces is compact.

For finite products, Tychonoff's theorem follows from the tube lemma and is accessible without the
axiom of choice. For arbitrary products, the full axiom of choice is required.

### 5.5 Sequential Compactness

**Definition.** A space $X$ is **sequentially compact** if every sequence in $X$ has a convergent
subsequence.

**Theorem 5.4.** In metric spaces, compactness and sequential compactness are equivalent.

**Proposition 5.3.** For $\mathbb{R}^n$: compact $\Leftrightarrow$ sequentially compact
$\Leftrightarrow$ closed and bounded.

### 5.6 Compactness and Continuity

**Theorem 5.5 (Extreme Value Theorem, generalised).** If $X$ is compact and $f : X \to \mathbb{R}$
is continuous, then $f$ attains its maximum and minimum on $X$.

**Proof.** Since $f$ is continuous, $f(X)$ is compact in $\mathbb{R}$, hence closed and bounded. A
closed bounded subset of $\mathbb{R}$ contains its supremum and infimum. $\square$

**Proposition 5.4.** The continuous image of a compact space is compact.

## 6. Connectedness

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

## 7. Metric Spaces

### 7.1 Definition

**Definition.** A **metric space** is a pair $(M, d)$ where $M$ is a set and
$d : M \times M \to [0, \infty)$ satisfies, for all $x, y, z \in M$:

1. **Non-negativity:** $d(x, y) \geq 0$, with equality iff $x = y$.
2. **Symmetry:** $d(x, y) = d(y, x)$.
3. **Triangle inequality:** $d(x, z) \leq d(x, y) + d(y, z)$.

Every metric induces a topology: the open sets are unions of open balls
$B_r(p) = \{x : d(x, p) < r\}$.

### 7.2 Standard Metrics

**Example 7.1 (Euclidean metric).** On $\mathbb{R}^n$:

$$d_2(\mathbf{x}, \mathbf{y}) = \sqrt{\sum_{i=1}^{n} (x_i - y_i)^2}.$$

**Example 7.2 ($p$-norm metrics).** For $1 \leq p \leq \infty$:

$$d_p(\mathbf{x}, \mathbf{y}) = \left(\sum_{i=1}^{n} |x_i - y_i|^p\right)^{1/p}, \qquad d_\infty(\mathbf{x}, \mathbf{y}) = \max_{1 \leq i \leq n} |x_i - y_i|.$$

All of these induce the standard topology on $\mathbb{R}^n$.

**Example 7.3 (Discrete metric).** For any set $X$:

$$d(x, y) = \begin{cases} 0 & \text{if } x = y, \\ 1 & \text{if } x \neq y. \end{cases}$$

The discrete metric induces the discrete topology.

### 7.3 Convergence in Metric Spaces

**Definition.** A sequence $(x_n)$ in $(M, d)$ **converges** to $x \in M$ (written $x_n \to x$) if
for every $\varepsilon > 0$ there exists $N$ such that $d(x_n, x) < \varepsilon$ for all $n \geq N$.

**Proposition 7.1.** In a metric space, $x_n \to x$ if and only if for every open neighbourhood $U$
of $x$, there exists $N$ with $x_n \in U$ for all $n \geq N$.

Limits in metric spaces are unique (this follows from the Hausdorff property).

### 7.4 Completeness

**Definition.** A sequence $(x_n)$ is **Cauchy** if for every $\varepsilon > 0$ there exists $N$
such that $d(x_m, x_n) < \varepsilon$ for all $m, n \geq N$.

Every convergent sequence is Cauchy. The converse need not hold.

**Definition.** A metric space $(M, d)$ is **complete** if every Cauchy sequence converges.

**Example 7.4.** $\mathbb{R}^n$ with the Euclidean metric is complete.

**Example 7.5.** $\mathbb{Q}$ with $d(x, y) = |x - y|$ is not complete: the Cauchy sequence
$3, 3.1, 3.14, 3.141, 3.1415, \ldots$ does not converge in $\mathbb{Q}$.

**Proposition 7.2.** A closed subset of a complete metric space is complete.

**Definition.** A **Banach space** is a complete normed vector space.

**Example 7.6.** $(C([a, b]), \|\cdot\|_\infty)$ — the space of continuous functions on $[a, b]$
with the sup norm — is a Banach space.

### 7.5 Contraction Mapping Theorem

**Definition.** A map $f : M \to M$ is a **contraction** if there exists $0 \leq c < 1$ such that
$d(f(x), f(y)) \leq c \cdot d(x, y)$ for all $x, y \in M$.

**Theorem 5.6 (Banach Fixed Point Theorem).** If $(M, d)$ is a complete metric space and
$f : M \to M$ is a contraction, then $f$ has a unique fixed point $x^*$, and for any $x_0 \in M$,
the iteration $x_{n+1} = f(x_n)$ converges to $x^*$.

**Proof.** For any $x_0$, the sequence $x_n = f^n(x_0)$ is Cauchy (by repeated application of the
contraction condition), hence converges to some $x^*$. By continuity of $f$, $x^* = f(x^*)$.
Uniqueness follows from the contraction condition: if $x^* = f(x^*)$ and $y^* = f(y^*)$, then
$d(x^*, y^*) = d(f(x^*), f(y^*)) \leq c \cdot d(x^*, y^*)$, so $d(x^*, y^*) = 0$. $\square$

## 8. Separation Axioms

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

## 9. Introduction to Algebraic Topology

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

## 10. Common Pitfalls

1. **"Arbitrary intersections of open sets are open."** False. Only finite intersections are
   guaranteed. Counterexample: in $\mathbb{R}$, $\bigcap_{n=1}^\infty (-1/n, 1/n) = \{0\}$, which is
   not open.

2. **"Closed = not open."** False. A set can be both (clopen), neither, or exactly one. In
   $\mathbb{R}$, $\emptyset$ and $\mathbb{R}$ are clopen; $[0, 1)$ is neither.

3. **"Compact implies closed and bounded in every topological space."** False. This is specific to
   $\mathbb{R}^n$ (Heine–Borel). In the cofinite topology on an infinite set, every subset is
   compact but not every subset is closed.

4. **"Connected implies path-connected."** False. The topologist's sine curve is connected but not
   path-connected.

5. **"Continuous bijections are homeomorphisms."** False. The bijection $f : [0, 2\pi) \to S^1$
   given by $f(t) = (\cos t, \sin t)$ is continuous and bijective, but its inverse is not continuous
   — $[0, 2\pi)$ is not compact but $S^1$ is.

6. **"Every metric space is complete."** False. $\mathbb{Q}$ with the usual metric is not complete.

7. **"The closure of the interior equals the interior of the closure."** False as a general
   principle. In $\mathbb{R}$ with $A = \mathbb{Q} \cap (0, 1)$:
   $\operatorname{int}(\overline{A}) = (0, 1)$ but $\overline{\operatorname{int}(A)} = \emptyset$.

## 11. Summary

| Concept                       | Key Idea                                                                                             |
| ----------------------------- | ---------------------------------------------------------------------------------------------------- |
| Topological space             | Set + open sets satisfying the three axioms                                                          |
| Closed sets                   | Complements of open sets; finite unions, arbitrary intersections                                     |
| Closure / interior / boundary | $\overline{A}$, $\operatorname{int}(A)$, $\partial A = \overline{A} \setminus \operatorname{int}(A)$ |
| Continuity                    | $f^{-1}(\text{open})$ is open                                                                        |
| Homeomorphism                 | Bijective continuous map with continuous inverse                                                     |
| Compactness                   | Every open cover has a finite subcover                                                               |
| Heine–Borel                   | In $\mathbb{R}^n$: compact $\Leftrightarrow$ closed and bounded                                      |
| Connectedness                 | No separation into two disjoint nonempty open sets                                                   |
| Path-connectedness            | Any two points joined by a continuous path                                                           |
| Metric space                  | Set + distance function satisfying the three axioms                                                  |
| Completeness                  | Every Cauchy sequence converges                                                                      |
| Banach fixed point            | Contractions on complete metric spaces have unique fixed points                                      |
| $T_0$–$T_4$                   | Increasingly strong separation axioms                                                                |
| Fundamental group $\pi_1$     | Homotopy classes of loops; a topological invariant                                                   |
| Euler characteristic $\chi$   | $V - E + F$; classifies compact surfaces                                                             |

## Worked Examples

### Example 1: Determining if a Collection is a Topology

**Problem:** Is the collection $\tau = \{\emptyset, \{a\}, \{b\}, \{a,b,c\}\}$ a topology on
$X = \{a,b,c\}$? **Solution:** Check axioms: (1) $\emptyset$ and $X$ are in $\tau$. (2) Finite
unions: $\{a\} \cup \{b\} = \{a,b\}$, which is NOT in $\tau$. Therefore $\tau$ is not a topology. To
fix it, we would need to include $\{a,b\}$.

### Example 2: Continuous Function Proof

**Problem:** Show that the function $f: \mathbb{R} \to \mathbb{R}$ defined by $f(x) = x^2$ is
continuous with respect to the standard topology. **Solution:** Let $U$ be an open set in
$\mathbb{R}$. $f^{-1}(U) = \{x : x^2 \in U\}$. For any open interval $(a, b)$ with $a \geq 0$, the
preimage is $(-\sqrt{b}, -\sqrt{a}) \cup (\sqrt{a}, \sqrt{b})$, which is a union of open intervals
(open). For negative intervals, the preimage is empty or $\mathbb{R}$. Since the preimage of any
basis element is open, $f$ is continuous.

## Cross-References

| Topic            | Link                                                  |
| ---------------- | ----------------------------------------------------- |
| Abstract Algebra | [View](/docs/university/mathematics/abstract-algebra) |
