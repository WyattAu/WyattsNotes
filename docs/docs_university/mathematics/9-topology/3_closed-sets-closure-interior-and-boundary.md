---
title: Closed Sets, Closure, Interior, and Boundary
tags:
  - University Maths
---

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

