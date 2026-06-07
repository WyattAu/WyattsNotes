---
title: Compactness
tags:
  - University Maths
---

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

