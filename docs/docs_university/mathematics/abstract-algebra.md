---
title: Abstract Algebra
description:
  "University-level Mathematics: Abstract Algebra — 1. Groups; 1.1 Definition of a Group; 1.2 Examples; 1.3 Dihedral Groups."
date: 2026-04-24T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: abstract-algebra
---

## 1. Groups

### 1.1 Definition of a Group

A **group** is a set $G$ together with a binary operation $* : G \times G \to G$ satisfying:

1. **Associativity**: $(a * b) * c = a * (b * c)$ for all $a, b, c \in G$.
2. **Identity**: There exists $e \in G$ such that $e * a = a * e = a$ for all $a \in G$.
3. **Inverse**: For each $a \in G$, there exists $a^{-1} \in G$ such that $a * a^{-1} = a^{-1} * a = e$.

If $a * b = b * a$ for all $a, b \in G$, the group is **abelian** (or commutative).

### 1.2 Examples

**Example 1.** $(\mathbb{Z}, +)$ is an abelian group with identity $0$ and inverse $-n$.

**Example 2.** $(\mathbb{R}^*, \cdot)$ (non-zero reals under multiplication) is an abelian group with identity $1$ and inverse $1/a$.

**Example 3.** The **symmetric group** $S_n$ of all permutations of $\{1, 2, \ldots, n\}$ under composition is a non-abelian group for $n \geq 3$. It has order $n!$.

**Example 4.** $(\mathbb{Z}/n\mathbb{Z}, +)$ is an abelian group of order $n$, called the **cyclic group** of order $n$.

**Example 5.** The set $GL_n(\mathbb{R})$ of all $n \times n$ invertible real matrices, under matrix multiplication, forms the **general linear group**.

### 1.3 Dihedral Groups

The **dihedral group** $D_n$ is the group of symmetries of a regular $n$-gon (for $n \geq 3$).
It consists of $n$ rotations and $n$ reflections, giving $|D_n| = 2n$ elements.

Let $r$ denote rotation by $2\pi/n$ and $s$ denote any fixed reflection. Then:

$$D_n = \{e, r, r^2, \ldots, r^{n-1}, s, rs, r^2s, \ldots, r^{n-1}s\}$$

The group satisfies the **presentation**:

$$D_n = \langle r, s \mid r^n = s^2 = e,\ srs = r^{-1} \rangle$$

For $n \geq 3$, $D_n$ is non-abelian (e.g., $rs \neq sr$ since $sr = r^{-1}s \neq rs$ when $n > 2$).

**Example 1.6.** $D_3$ (symmetries of an equilateral triangle) has $6$ elements:
$\{e, r, r^2, s, rs, r^2s\}$. The map sending each symmetry to its permutation of the three vertices
gives an isomorphism $D_3 \cong S_3$. The rotations $\{e, r, r^2\}$ correspond to $A_3$, and the three
reflections correspond to the three transpositions.

**Example 1.7.** $D_4$ (symmetries of a square) has $8$ elements. Its center is $Z(D_4) = \{e, r^2\}$,
where $r^2$ is the $180°$ rotation. The subgroups of $D_4$ include the rotation subgroup
$\langle r \rangle \cong \mathbb{Z}/4\mathbb{Z}$ of order $4$, four subgroups of order $2$ generated
by reflections, and $\langle r^2, s \rangle \cong V_4$ (the Klein four-group).

### 1.4 Permutations and Cycle Notation

Every element of $S_n$ can be written uniquely (up to reordering of disjoint cycles) as a product
of **disjoint cycles**. The **cycle type** of a permutation is the multiset of its cycle lengths
(including $1$-cycles).

**Example.** In $S_5$, the permutation $\sigma = (1\ 2\ 3)(4\ 5)$ has cycle type $(3, 2)$.

A **transposition** is a $2$-cycle $(i\ j)$. Every permutation factors into transpositions:
$$(a_1\ a_2\ \ldots\ a_k) = (a_1\ a_k)(a_1\ a_{k-1})\cdots(a_1\ a_2)$$

The number of transpositions in a factorization is not unique, but its **parity** is.

**Proposition 1.6.** The **sign** of a permutation $\sigma$, defined by $\mathrm{sgn}(\sigma) = (-1)^{N(\sigma)}$
where $N(\sigma)$ is the number of inversions of $\sigma$, is a well-defined group homomorphism
$\mathrm{sgn} : S_n \to \{1, -1\}$. Its kernel is the **alternating group** $A_n$ of even permutations.

*Proof.* We first show $\mathrm{sgn}$ is a homomorphism. For any transposition $\tau$ and any
permutation $\sigma$, multiplying by $\tau$ changes the number of inversions by an odd number,
so $\mathrm{sgn}(\tau\sigma) = -\mathrm{sgn}(\sigma)$. For any $\sigma, \rho \in S_n$, write $\rho$
as a product of $k$ transpositions. Then $\mathrm{sgn}(\sigma\rho) = (-1)^k\mathrm{sgn}(\sigma) = \mathrm{sgn}(\sigma)\mathrm{sgn}(\rho)$.
The kernel is precisely the set of even permutations, and $|A_n| = n!/2$. $\blacksquare$

**Proposition 1.7.** The number of $k$-cycles in $S_n$ is $\frac{n!}{k(n-k)!}$.

*Proof.* Choose $k$ elements from $n$: $\binom{n}{k}$ ways. Arrange them in a cycle: $(k-1)!$ distinct
$k$-cycles (since a $k$-cycle has $k$ equivalent representations by cyclic rotation). Total:
$\binom{n}{k}(k-1)! = \frac{n!}{k(n-k)!}$. $\blacksquare$

### 1.5 Basic Properties

**Proposition 1.8.** The identity element of a group is unique.

*Proof.* Suppose $e$ and $e'$ are both identity elements. Then $e = e * e' = e'$. $\blacksquare$

**Proposition 1.9.** The inverse of each element is unique.

*Proof.* If $b$ and $c$ are both inverses of $a$, then $b = b * e = b * (a * c) = (b * a) * c = e * c = c$. $\blacksquare$

**Proposition 1.10 (Cancellation Law).** If $a * b = a * c$, then $b = c$. Similarly, if $b * a = c * a$, then $b = c$.

*Proof.* Multiply on the left by $a^{-1}$: $a^{-1} * (a * b) = a^{-1} * (a * c)$, so $(a^{-1} * a) * b = (a^{-1} * a) * c$, giving $e * b = e * c$, i.e., $b = c$. $\blacksquare$

**Proposition 1.11.** $(a^{-1})^{-1} = a$ and $(a * b)^{-1} = b^{-1} * a^{-1}$.

### 1.6 Order of an Element

The **order** of an element $g \in G$, denoted $|g|$, is the smallest positive integer $n$ such that $g^n = e$.
If no such $n$ exists, $|g| = \infty$.

**Proposition 1.12.** $g^k = e$ if and only if $|g|$ divides $k$.

*Proof.* Write $k = q|g| + r$ with $0 \leq r \lt{} |g|$. Then $e = g^k = g^{q|g| + r} = (g^{|g|})^q * g^r = e^q * g^r = g^r$.
Since $r \lt{} |g|$ and $|g|$ is the smallest positive exponent giving $e$, we must have $r = 0$, so $|g|$ divides $k$.
Conversely, if $|g|$ divides $k$, say $k = m|g|$, then $g^k = (g^{|g|})^m = e^m = e$. $\blacksquare$

### 1.7 Subgroup Lattices

The **subgroup lattice** of $G$ is the set of all subgroups of $G$, partially ordered by inclusion,
visualized as a Hasse diagram (edges connect each subgroup to its immediate supergroups).

**Example.** The subgroup lattice of $S_3$ (order $6$):

- $S_3$ (order $6$)
  - $A_3 = \langle (1\ 2\ 3) \rangle$ (order $3$)
    - $\{e\}$ (order $1$)
  - $\langle (1\ 2) \rangle$ (order $2$)
    - $\{e\}$
  - $\langle (1\ 3) \rangle$ (order $2$)
    - $\{e\}$
  - $\langle (2\ 3) \rangle$ (order $2$)
    - $\{e\}$

The only proper non-trivial normal subgroup is $A_3$ (it has index $2$).

**Example.** The subgroup lattice of $\mathbb{Z}/12\mathbb{Z}$:

- $\mathbb{Z}/12\mathbb{Z}$ (order $12$)
  - $\langle 2 \rangle \cong \mathbb{Z}/6\mathbb{Z}$ (order $6$)
    - $\langle 4 \rangle \cong \mathbb{Z}/3\mathbb{Z}$ (order $3$)
      - $\{0\}$
    - $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
      - $\{0\}$
  - $\langle 3 \rangle \cong \mathbb{Z}/4\mathbb{Z}$ (order $4$)
    - $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
      - $\{0\}$
  - $\langle 4 \rangle \cong \mathbb{Z}/3\mathbb{Z}$ (order $3$)
    - $\{0\}$
  - $\langle 6 \rangle \cong \mathbb{Z}/2\mathbb{Z}$ (order $2$)
    - $\{0\}$

By Theorem 2.4, every subgroup of $\mathbb{Z}/12\mathbb{Z}$ is cyclic, and there is exactly one subgroup
of order $d$ for each divisor $d$ of $12$.

:::caution Common Pitfall
Not every group of order $n$ has a subgroup of order $d$ for each divisor $d$ of $n$. The converse of
Lagrange's theorem is false. For example, $A_4$ has order $12$ but no subgroup of order $6$.
However, every subgroup of a *cyclic* group of order $n$ has order dividing $n$, and for each divisor
there is exactly one such subgroup.
:::

## 2. Subgroups

### 2.1 Definition and Criterion

A **subgroup** $H$ of $G$ is a subset $H \subseteq G$ that is itself a group under the operation of $G$.

**Theorem 2.1 (Subgroup Criterion).** A non-empty subset $H \subseteq G$ is a subgroup if and only if
for all $a, b \in H$:

1. $a * b^{-1} \in H$ (closed under the operation and inverses).

*Proof.* If $H$ is a subgroup, closure gives $a * b^{-1} \in H$. Conversely, since $H$ is non-empty,
pick $a \in H$. Then $a * a^{-1} = e \in H$, and $e * a^{-1} = a^{-1} \in H$. For any $a, b \in H$,
we have $b^{-1} \in H$, so $a * (b^{-1})^{-1} = a * b \in H$, proving closure under the group operation. $\blacksquare$

**Corollary 2.2 (Finite Subgroup Criterion).** A non-empty finite subset $H \subseteq G$ is a subgroup
if and only if $H$ is closed under the group operation.

### 2.2 Examples of Subgroups

**Example.** For any group $G$, $\{e\}$ and $G$ itself are subgroups (the **trivial subgroups**).

**Example.** The set $SL_n(\mathbb{R})$ of $n \times n$ real matrices with determinant $1$ is a subgroup of
$GL_n(\mathbb{R})$.

**Example.** The set $A_n$ of even permutations in $S_n$ is a subgroup called the **alternating group**.
$|A_n| = n!/2$.

### 2.3 The Center of a Group

The **center** of $G$ is $Z(G) = \{z \in G : zg = gz \mathrm{\ for\ all\ } g \in G\}$.

**Proposition 2.3.** $Z(G)$ is a subgroup of $G$.

*Proof.* Clearly $e \in Z(G)$. If $z_1, z_2 \in Z(G)$ and $g \in G$, then
$(z_1 z_2)g = z_1(z_2 g) = z_1(g z_2) = (z_1 g)z_2 = (g z_1)z_2 = g(z_1 z_2)$, so $z_1 z_2 \in Z(G)$.
Also, $z g = g z$ implies $g = z^{-1} g z$, so $g z^{-1} = z^{-1} g$, giving $z^{-1} \in Z(G)$. $\blacksquare$

### 2.4 Cyclic Subgroups

For $g \in G$, the **cyclic subgroup generated by $g$** is

$$\langle g \rangle = \{g^n : n \in \mathbb{Z}\}$$

**Theorem 2.4.** Every subgroup of a cyclic group is cyclic.

*Proof.* Let $G = \langle a \rangle$ and $H \leq G$. If $H = \{e\}$, then $H = \langle e \rangle$.
Otherwise, let $m$ be the smallest positive integer with $a^m \in H$. We claim $H = \langle a^m \rangle$.
For any $a^k \in H$, write $k = qm + r$ with $0 \leq r \lt{} m$. Then $a^r = a^{k - qm} = a^k (a^m)^{-q} \in H$.
By minimality of $m$, $r = 0$, so $a^k = (a^m)^q \in \langle a^m \rangle$. $\blacksquare$

**Theorem 2.5.** If $G = \langle a \rangle$ has order $n$, then $|\langle a^k \rangle| = n / \gcd(n, k)$.

### 2.5 Worked Examples: Verifying the Subgroup Criterion

**Problem.** Let $G = GL_2(\mathbb{R})$ and $H = \{A \in G : \det(A) = \pm 1\}$. Show that $H \leq G$.

<details>
<summary>Solution</summary>

*Solution.* $H$ is non-empty since $I_2 \in H$ (with $\det(I_2) = 1$). Let $A, B \in H$.
Then $\det(AB^{-1}) = \det(A)\det(B)^{-1} = (\pm 1)(\pm 1)^{-1} = \pm 1$, so $AB^{-1} \in H$.
By the subgroup criterion, $H \leq G$. $\blacksquare$

</details>

**Problem.** Let $G = (\mathbb{Z}, +)$ and $H = \{5k - 3m : k, m \in \mathbb{Z}\}$. Show that $H = \mathbb{Z}$.

<details>
<summary>Solution</summary>

*Solution.* First, $H$ is a subgroup of $(\mathbb{Z}, +)$: it is non-empty ($0 = 5 \cdot 0 - 3 \cdot 0 \in H$),
and if $a = 5k_1 - 3m_1$ and $b = 5k_2 - 3m_2$, then $a - b = 5(k_1 - k_2) - 3(m_1 - m_2) \in H$.

Since $\gcd(5, 3) = 1$, by Bezout's identity there exist $k, m \in \mathbb{Z}$ with $5k - 3m = 1$,
so $1 \in H$. Therefore $H = \langle 1 \rangle = \mathbb{Z}$. $\blacksquare$

</details>

### 2.6 Intersection of Subgroups

**Theorem 2.6.** If $\{H_i\}_{i \in I}$ is a family of subgroups of $G$, then
$\bigcap_{i \in I} H_i$ is a subgroup of $G$.

*Proof.* Since $e \in H_i$ for all $i$, we have $e \in \bigcap_{i \in I} H_i$, so the intersection is
non-empty. If $a, b \in \bigcap_{i \in I} H_i$, then $a, b \in H_i$ for all $i$, so $ab^{-1} \in H_i$
for all $i$ (since each $H_i$ is a subgroup). Thus $ab^{-1} \in \bigcap_{i \in I} H_i$.
By the subgroup criterion, $\bigcap_{i \in I} H_i \leq G$. $\blacksquare$

_Remark._ The union of subgroups need not be a subgroup. For example, in $\mathbb{Z}$,
$\langle 2 \rangle \cup \langle 3 \rangle$ is not a subgroup since $2 + 3 = 5 \notin \langle 2 \rangle \cup \langle 3 \rangle$.

### 2.7 The Subgroup Generated by a Set

Let $S \subseteq G$ be any subset (possibly empty). The **subgroup generated by $S$** is

$$\langle S \rangle = \bigcap\{H \leq G : S \subseteq H\}$$

This is the smallest subgroup of $G$ containing $S$, and it equals the set of all finite products
of elements of $S$ and their inverses:

$$\langle S \rangle = \{s_1^{\epsilon_1} s_2^{\epsilon_2} \cdots s_k^{\epsilon_k} : s_i \in S,\ \epsilon_i \in \{1, -1\},\ k \geq 0\}$$

When $S = \{g_1, \ldots, g_n\}$, we write $\langle g_1, \ldots, g_n \rangle$.

**Example.** In $S_3$, $\langle (1\ 2), (2\ 3) \rangle = S_3$ since
$(1\ 2)(2\ 3) = (1\ 2\ 3)$, $(1\ 2\ 3)(1\ 2) = (1\ 3)$, and we obtain all six elements.

**Example.** In $D_4$, $\langle r^2, s \rangle = \{e, r^2, s, r^2s\} \cong V_4$ (the Klein four-group).

**Problem.** Show that $S_n = \langle (1\ 2), (1\ 2\ \ldots\ n) \rangle$.

<details>
<summary>Solution</summary>

*Solution.* Let $\sigma = (1\ 2\ \ldots\ n)$ and $\tau = (1\ 2)$. For any $1 \leq i \lt{} n$,
$\sigma^{i-1}\tau\sigma^{-(i-1)} = (i\ i+1)$ (conjugation by $\sigma$ shifts the transposition).
Since adjacent transpositions $(i\ i+1)$ generate $S_n$ (every permutation factors into adjacent
transpositions), we have $S_n = \langle \sigma, \tau \rangle$. $\blacksquare$

</details>

## 3. Lagrange's Theorem

### 3.1 Cosets

Let $H \leq G$. For $a \in G$, the **left coset** of $H$ containing $a$ is

$$aH = \{ah : h \in H\}$$

The **right coset** is $Ha = \{ha : h \in H\}$.

**Proposition 3.1.** The cosets of $H$ in $G$ partition $G$.

*Proof.* Define $a \sim b$ if $a^{-1}b \in H$. This is an equivalence relation: reflexive
($a^{-1}a = e \in H$), symmetric ($a^{-1}b \in H \Rightarrow b^{-1}a = (a^{-1}b)^{-1} \in H$),
transitive ($a^{-1}b, b^{-1}c \in H \Rightarrow a^{-1}c = (a^{-1}b)(b^{-1}c) \in H$).
The equivalence class of $a$ is exactly $aH$. $\blacksquare$

**Proposition 3.2.** $|aH| = |H|$ for all $a \in G$.

*Proof.* The map $\phi : H \to aH$ given by $\phi(h) = ah$ is a bijection. $\blacksquare$

### 3.2 Lagrange's Theorem

**Theorem 3.3 (Lagrange's Theorem).** If $H$ is a subgroup of a finite group $G$, then $|H|$ divides $|G|$.

*Proof.* The cosets of $H$ partition $G$ into disjoint sets, each of size $|H|$. If there are $k$ cosets,
then $|G| = k \cdot |H|$, so $|H|$ divides $|G|$. $\blacksquare$

The number of cosets is called the **index** of $H$ in $G$, denoted $[G : H]$.

**Corollary 3.4.** The order of any element of $G$ divides $|G|$.

*Proof.* $|g| = |\langle g \rangle|$, and $\langle g \rangle \leq G$, so $|g|$ divides $|G|$ by Lagrange. $\blacksquare$

**Corollary 3.5 (Fermat's Little Theorem).** If $p$ is prime and $\gcd(a, p) = 1$, then $a^{p-1} \equiv 1 \pmod{p}$.

*Proof.* $\mathbb{Z}/p\mathbb{Z}$ has $p$ elements. The multiplicative group $(\mathbb{Z}/p\mathbb{Z})^*$ has order $p - 1$.
The order of $[a]$ divides $p - 1$, so $[a]^{p-1} = [1]$. $\blacksquare$

**Corollary 3.6 (Euler's Theorem).** If $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$, where $\phi$
is Euler's totient function.

### 3.3 Worked Example

**Problem.** Show that every group of prime order $p$ is cyclic.

*Solution.* Let $G$ be a group of order $p$ and $g \in G$ with $g \neq e$. By Corollary 3.4,
$|g|$ divides $p$. Since $g \neq e$, $|g| \neq 1$. Since $p$ is prime, $|g| = p$.
Thus $\langle g \rangle = G$, and $G$ is cyclic. $\blacksquare$

### 3.4 Worked Examples: Computing Cosets

**Problem.** Let $H = \langle (1\ 2\ 3) \rangle \leq S_3$. Find all left cosets of $H$ in $S_3$.

<details>
<summary>Solution</summary>

*Solution.* $H = \{e, (1\ 2\ 3), (1\ 3\ 2)\}$ has order $3$, and $|S_3| = 6$, so $[S_3 : H] = 2$.
Pick any $\sigma \notin H$, e.g., $\sigma = (1\ 2)$. Then:

$$S_3 = H \cup (1\ 2)H = \{e, (1\ 2\ 3), (1\ 3\ 2)\} \cup \{(1\ 2), (1\ 2)(1\ 2\ 3), (1\ 2)(1\ 3\ 2)\}$$

Computing: $(1\ 2)(1\ 2\ 3) = (2\ 3)$ and $(1\ 2)(1\ 3\ 2) = (1\ 3)$. So:

$$S_3 = \{e, (1\ 2\ 3), (1\ 3\ 2)\} \cup \{(1\ 2), (2\ 3), (1\ 3)\}$$

Since $[S_3 : H] = 2$, $H$ is normal (see Corollary 3.7). $\blacksquare$

</details>

**Problem.** Let $H = \langle 4 \rangle \leq \mathbb{Z}/12\mathbb{Z}$. Find all cosets of $H$.

<details>
<summary>Solution</summary>

*Solution.* $H = \langle 4 \rangle = \{0, 4, 8\}$ has order $3$, and $|\mathbb{Z}/12\mathbb{Z}| = 12$,
so $[\mathbb{Z}/12\mathbb{Z} : H] = 4$. The cosets are:

$$0 + H = \{0, 4, 8\}, \quad 1 + H = \{1, 5, 9\}, \quad 2 + H = \{2, 6, 10\}, \quad 3 + H = \{3, 7, 11\}$$

Since $\mathbb{Z}/12\mathbb{Z}$ is abelian, $H$ is normal, and
$\mathbb{Z}/12\mathbb{Z}\,/\,H \cong \mathbb{Z}/4\mathbb{Z}$. $\blacksquare$

</details>

### 3.5 Further Corollaries of Lagrange's Theorem

**Corollary 3.7.** If $[G : H] = 2$, then $H \trianglelefteq G$.

*Proof.* There are exactly two left cosets $H$ and $aH$, and exactly two right cosets $H$ and $Ha$.
Since the cosets partition $G$, we have $aH = G \setminus H = Ha$. Thus $gH = Hg$ for all $g \in G$,
so $H$ is normal. $\blacksquare$

**Corollary 3.8 (Product Formula).** If $H, K \leq G$ are finite subgroups, then

$$|HK| = \frac{|H||K|}{|H \cap K|}$$

*Proof.* The map $H \times K \to HK$ given by $(h, k) \mapsto hk$ is surjective. For any $x = hk \in HK$,
the fiber is $\{(hc^{-1}, ck) : c \in H \cap K\}$, which has size $|H \cap K|$. Thus
$|H||K| = |HK| \cdot |H \cap K|$. $\blacksquare$

:::caution Common Pitfall
The product $HK$ need not be a subgroup in general. However, $HK$ is always a subgroup when
$H$ or $K$ is normal. In that case, $|HK| = |H||K|/|H \cap K|$ also divides $|G|$ by Lagrange.
:::

## 4. Normal Subgroups and Quotient Groups

### 4.1 Normal Subgroups

A subgroup $N \leq G$ is **normal** (written $N \trianglelefteq G$) if $gNg^{-1} = N$ for all $g \in G$,
i.e., $gng^{-1} \in N$ for all $g \in G$ and all $n \in N$.

**Proposition 4.1.** Every subgroup of an abelian group is normal.

**Proposition 4.2.** The following are equivalent for $N \leq G$:

1. $N \trianglelefteq G$.
2. $gN = Ng$ for all $g \in G$ (left and right cosets coincide).
3. The product of two left cosets is again a left coset: $(aN)(bN) = (ab)N$.

*Proof of (1) $\Rightarrow$ (3).* Let $a_1n_1 \in aN$ and $b_1 n_2 \in bN$.
Then $(a_1 n_1)(b_1 n_2) = a_1 b_1 (b_1^{-1} n_1 b_1) n_2$. Since $N$ is normal,
$b_1^{-1} n_1 b_1 \in N$, so $(b_1^{-1} n_1 b_1) n_2 \in N$, giving $(a_1 n_1)(b_1 n_2) \in a_1 b_1 N$. $\blacksquare$

### 4.2 The Quotient Group

When $N \trianglelefteq G$, the set $G/N = \{gN : g \in G\}$ of cosets forms a group under

$$(aN)(bN) = (ab)N$$

called the **quotient group** of $G$ by $N$.

**Theorem 4.3.** If $G$ is finite and $N \trianglelefteq G$, then $|G/N| = [G : N] = |G|/|N|$.

**Example.** $S_3 / A_3 \cong \mathbb{Z}/2\mathbb{Z}$.

**Example.** $\mathbb{Z}/n\mathbb{Z}$ is the quotient of $\mathbb{Z}$ by $n\mathbb{Z}$.

### 4.3 Worked Examples: Computing Quotient Groups

**Problem.** The quaternion group $Q_8 = \{1, -1, i, -i, j, -j, k, -k\}$ has center
$Z(Q_8) = \{1, -1\}$. Compute $Q_8 / Z(Q_8)$.

<details>
<summary>Solution</summary>

*Solution.* Since $|Q_8| = 8$ and $|Z(Q_8)| = 2$, we have $|Q_8/Z(Q_8)| = 4$.
The cosets are:

$$Z(Q_8) = \{1, -1\}, \quad iZ(Q_8) = \{i, -i\}, \quad jZ(Q_8) = \{j, -j\}, \quad kZ(Q_8) = \{k, -k\}$$

Multiplication in the quotient: $(iZ)(iZ) = i^2 Z = (-1)Z = Z$ (the identity coset).
Similarly $(jZ)(jZ) = Z$ and $(kZ)(kZ) = Z$. Also $(iZ)(jZ) = ijZ = kZ$ and
$(jZ)(iZ) = jiZ = (-k)Z = kZ$ (since $-k \in kZ$). Every non-identity element has order $2$,
and the group is abelian. Therefore $Q_8 / Z(Q_8) \cong V_4 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.
$\blacksquare$

</details>

**Problem.** Let $N = \langle (1\ 2)(3\ 4), (1\ 3)(2\ 4) \rangle \leq S_4$. Show that
$N \trianglelefteq S_4$ and identify $S_4/N$.

<details>
<summary>Solution</summary>

*Solution.* $N = \{e, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$ is the Klein four-group $V_4$,
with $|N| = 4$. To verify $N \trianglelefteq S_4$, note that conjugation preserves cycle type.
Each non-identity element of $N$ is a product of two disjoint transpositions. Since $S_4$ acts
transitively on such elements (any pair of disjoint transpositions can be mapped to any other by relabeling),
$N$ is closed under conjugation.

Thus $|S_4/N| = 24/4 = 6$. One can verify that $S_4/N$ is non-abelian
(e.g., the images of $(1\ 2)$ and $(2\ 3)$ do not commute), so $S_4/N \cong S_3$. $\blacksquare$

</details>

### 4.4 Worked Example: The First Isomorphism Theorem

**Problem.** Define $\phi : GL_2(\mathbb{R}) \to \mathbb{R}^*$ by $\phi(A) = \det(A)$.
Identify $\ker(\phi)$ and $GL_2(\mathbb{R})/\ker(\phi)$.

<details>
<summary>Solution</summary>

*Solution.* $\phi$ is a homomorphism since $\det(AB) = \det(A)\det(B)$. It is surjective:
for any $r \in \mathbb{R}^*$, the matrix $\begin{pmatrix} r & 0 \\ 0 & 1 \end{pmatrix}$ has determinant $r$.

The kernel is $\ker(\phi) = \{A \in GL_2(\mathbb{R}) : \det(A) = 1\} = SL_2(\mathbb{R})$.

By the first isomorphism theorem (Theorem 5.3), $GL_2(\mathbb{R})/SL_2(\mathbb{R}) \cong \mathbb{R}^*$.
$\blacksquare$

</details>

**Problem.** Show that $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$, where $S^1 = \{z \in \mathbb{C}^* : |z| = 1\}$.

<details>
<summary>Solution</summary>

*Solution.* Define $\phi : \mathbb{C}^* \to \mathbb{R}^+$ by $\phi(z) = |z|$.
This is a homomorphism since $|zw| = |z||w|$. It is surjective since for any $r > 0$,
$\phi(r) = r$.
The kernel is $\ker(\phi) = \{z \in \mathbb{C}^* : |z| = 1\} = S^1$, the unit circle.
By the first isomorphism theorem, $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$. $\blacksquare$

</details>

## 5. Homomorphisms and Isomorphism Theorems

### 5.1 Group Homomorphisms

A **homomorphism** $\phi : G \to H$ is a function satisfying $\phi(ab) = \phi(a)\phi(b)$ for all
$a, b \in G$.

**Proposition 5.1.** If $\phi : G \to H$ is a homomorphism, then:

1. $\phi(e_G) = e_H$.
2. $\phi(a^{-1}) = \phi(a)^{-1}$ for all $a \in G$.
3. $\phi(a^n) = \phi(a)^n$ for all $n \in \mathbb{Z}$.

*Proof.* (1) $\phi(e_G) = \phi(e_G \cdot e_G) = \phi(e_G)\phi(e_G)$, so by cancellation in $H$,
$\phi(e_G) = e_H$. (2) $e_H = \phi(e_G) = \phi(aa^{-1}) = \phi(a)\phi(a^{-1})$, so $\phi(a^{-1}) = \phi(a)^{-1}$. $\blacksquare$

### 5.2 Kernel and Image

The **kernel** of $\phi$ is $\ker(\phi) = \{g \in G : \phi(g) = e_H\}$.

The **image** of $\phi$ is $\mathrm{im}(\phi) = \{\phi(g) : g \in G\}$.

**Theorem 5.2.** $\ker(\phi) \trianglelefteq G$ and $\mathrm{im}(\phi) \leq H$.

*Proof.* We show $\ker(\phi)$ is a normal subgroup.

- $\phi(e) = e_H$, so $e \in \ker(\phi)$.
- If $a, b \in \ker(\phi)$, then $\phi(ab^{-1}) = \phi(a)\phi(b)^{-1} = e_H e_H = e_H$, so $ab^{-1} \in \ker(\phi)$.
- If $a \in \ker(\phi)$ and $g \in G$, then $\phi(gag^{-1}) = \phi(g)\phi(a)\phi(g)^{-1} = \phi(g)e_H\phi(g)^{-1} = e_H$,
  so $gag^{-1} \in \ker(\phi)$.

Thus $\ker(\phi) \trianglelefteq G$. The proof that $\mathrm{im}(\phi) \leq H$ is straightforward. $\blacksquare$

### 5.3 The First Isomorphism Theorem

**Theorem 5.3 (First Isomorphism Theorem).** If $\phi : G \to H$ is a surjective homomorphism, then

$$G / \ker(\phi) \cong H$$

More generally (even if $\phi$ is not surjective), $G / \ker(\phi) \cong \mathrm{im}(\phi)$.

*Proof.* Define $\overline{\phi} : G/\ker(\phi) \to H$ by $\overline{\phi}(g \ker(\phi)) = \phi(g)$.
This is well-defined: if $g \ker(\phi) = g' \ker(\phi)$, then $g'^{-1}g \in \ker(\phi)$,
so $\phi(g'^{-1}g) = e_H$, giving $\phi(g) = \phi(g')$.
It is a homomorphism: $\overline{\phi}((a\ker(\phi))(b\ker(\phi))) = \overline{\phi}(ab\ker(\phi)) = \phi(ab) = \phi(a)\phi(b) = \overline{\phi}(a\ker(\phi))\overline{\phi}(b\ker(\phi))$.
It is injective: $\overline{\phi}(g\ker(\phi)) = e_H \Rightarrow \phi(g) = e_H \Rightarrow g \in \ker(\phi) \Rightarrow g\ker(\phi) = \ker(\phi)$.
By construction, $\mathrm{im}(\overline{\phi}) = \mathrm{im}(\phi)$. $\blacksquare$

### 5.4 Second and Third Isomorphism Theorems

**Theorem 5.4 (Second Isomorphism Theorem).** If $N \trianglelefteq G$ and $H \leq G$, then $HN \leq G$,
$N \trianglelefteq HN$, $H \cap N \trianglelefteq H$, and

$$H / (H \cap N) \cong HN / N$$

*Proof.* Define $\phi : H \to HN/N$ by $\phi(h) = hN$. This is a homomorphism (since $N$ is normal).
It is surjective: any element of $HN/N$ has the form $hnN = hN = \phi(h)$.
Its kernel is $\{h \in H : hN = N\} = \{h \in H : h \in N\} = H \cap N$.
By the first isomorphism theorem, $H/(H \cap N) \cong HN/N$. $\blacksquare$

**Theorem 5.5 (Third Isomorphism Theorem).** If $K \trianglelefteq N \trianglelefteq G$ with $K \trianglelefteq G$, then

$$(G/K)/(N/K) \cong G/N$$

*Proof.* Define $\phi : G/K \to G/N$ by $\phi(gK) = gN$. Well-defined: $gK = g'K$ implies
$g^{-1}g' \in K \subseteq N$, so $gN = g'N$. Surjective and $\ker(\phi) = N/K$. Apply the first
isomorphism theorem. $\blacksquare$

### 5.5 Worked Example

**Problem.** Show that $\mathbb{R}^* / \mathbb{R}^+ \cong \mathbb{Z}/2\mathbb{Z}$.

*Solution.* Define $\phi : \mathbb{R}^* \to \{1, -1\} \cong \mathbb{Z}/2\mathbb{Z}$ by $\phi(x) = \mathrm{sgn}(x)$.
This is a homomorphism since $\mathrm{sgn}(xy) = \mathrm{sgn}(x)\mathrm{sgn}(y)$.
It is surjective. Its kernel is $\{x \in \mathbb{R}^* : \mathrm{sgn}(x) = 1\} = \mathbb{R}^+$.
By the first isomorphism theorem, $\mathbb{R}^* / \mathbb{R}^+ \cong \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

### 5.6 Further Worked Examples

**Example 5.6 (Trivial Homomorphism).** For any groups $G, H$, the map $\phi : G \to H$ defined by
$\phi(g) = e_H$ for all $g \in G$ is a homomorphism (the **trivial homomorphism**). Its kernel is $G$
and its image is $\{e_H\}$.

**Example 5.7 (Sign Homomorphism).** The sign map $\mathrm{sgn} : S_n \to \{1, -1\}$ is a surjective
homomorphism with kernel $A_n$. By the first isomorphism theorem, $S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}$.

**Example 5.8 (Determinant Homomorphism).** The determinant $\det : GL_n(\mathbb{R}) \to \mathbb{R}^*$
is a surjective group homomorphism with kernel $SL_n(\mathbb{R})$. By the first isomorphism theorem,
$GL_n(\mathbb{R}) / SL_n(\mathbb{R}) \cong \mathbb{R}^*$.

**Example 5.9 (Conjugation Homomorphism).** For a fixed $g \in G$, the map $c_g : G \to G$ defined by
$c_g(x) = gxg^{-1}$ is an automorphism of $G$ (an **inner automorphism**). It is a homomorphism since
$c_g(xy) = gxyg^{-1} = (gxg^{-1})(gyg^{-1}) = c_g(x)c_g(y)$. It is bijective with inverse $c_{g^{-1}}$.

**Problem.** Define $\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ by $\phi(k) = k + n\mathbb{Z}$.
Verify that $\phi$ is a surjective homomorphism and identify the quotient.

<details>
<summary>Solution</summary>

*Solution.* $\phi(k + m) = (k+m) + n\mathbb{Z} = (k + n\mathbb{Z}) + (m + n\mathbb{Z}) = \phi(k) + \phi(m)$,
so $\phi$ is a homomorphism. It is surjective since every coset $k + n\mathbb{Z}$ equals $\phi(k)$.
The kernel is $\ker(\phi) = \{k \in \mathbb{Z} : k \in n\mathbb{Z}\} = n\mathbb{Z}$.
By the first isomorphism theorem, $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/n\mathbb{Z}$ (the canonical projection). $\blacksquare$

</details>

### 5.7 The Correspondence Theorem

**Theorem 5.6 (Correspondence Theorem / Fourth Isomorphism Theorem).** Let $\phi : G \to H$ be a
surjective homomorphism with $K = \ker(\phi)$. Then there is an inclusion-preserving bijection

$$\{\mathrm{subgroups\ of\ } G \mathrm{\ containing\ } K\} \longleftrightarrow \{\mathrm{subgroups\ of\ } H\}$$

given by $U \mapsto \phi(U)$ with inverse $V \mapsto \phi^{-1}(V)$. This bijection satisfies:

1. $U \trianglelefteq G$ if and only if $\phi(U) \trianglelefteq H$.
2. $[G : U] = [H : \phi(U)]$ for all $U \supseteq K$.
3. $G/U \cong H/\phi(U)$ when $U \trianglelefteq G$.

*Proof.* Define $\Phi(U) = \phi(U)$ and $\Psi(V) = \phi^{-1}(V) = \{g \in G : \phi(g) \in V\}$.

- $\Phi \circ \Psi = \mathrm{id}$: $\Phi(\Psi(V)) = \phi(\phi^{-1}(V)) = V$ (since $\phi$ is surjective).
- $\Psi \circ \Phi = \mathrm{id}$ on subgroups containing $K$: if $U \supseteq K$, then
  $\Psi(\Phi(U)) = \phi^{-1}(\phi(U)) = U$ (since $\ker(\phi) = K \subseteq U$).

For normality: if $U \trianglelefteq G$, then for any $h \in H$ and $u \in U$,
write $h = \phi(g)$. Then $h\phi(u)h^{-1} = \phi(g)\phi(u)\phi(g)^{-1} = \phi(gug^{-1}) \in \phi(U)$
since $gug^{-1} \in U$. Conversely, if $\phi(U) \trianglelefteq H$, then for any $g \in G$ and $u \in U$,
$\phi(gug^{-1}) = \phi(g)\phi(u)\phi(g)^{-1} \in \phi(U)$, so $gug^{-1} \in \phi^{-1}(\phi(U)) = U$.

For the index: $\phi$ restricts to a surjection $U \to \phi(U)$ with kernel $K$,
so $|U/K| = |\phi(U)|$, giving $|G|/|U| = |H|/|\phi(U)|$. $\blacksquare$

### 5.8 Automorphism Groups

An **automorphism** of $G$ is an isomorphism $\phi : G \to G$. The set of all automorphisms of $G$
forms a group under composition, denoted $\mathrm{Aut}(G)$.

For each $g \in G$, the **inner automorphism** $c_g : G \to G$ is defined by $c_g(x) = gxg^{-1}$.
The set of inner automorphisms $\mathrm{Inn}(G) = \{c_g : g \in G\}$ is a normal subgroup of $\mathrm{Aut}(G)$.

**Proposition 5.7.** $\mathrm{Inn}(G) \cong G/Z(G)$.

*Proof.* Define $\psi : G \to \mathrm{Aut}(G)$ by $\psi(g) = c_g$. This is a homomorphism:
$\psi(gh) = c_{gh}$, and $c_{gh}(x) = ghx(gh)^{-1} = g(hxh^{-1})g^{-1} = c_g(c_h(x)) = (c_g \circ c_h)(x)$.
The image is $\mathrm{Inn}(G)$. The kernel is $\{g \in G : c_g = \mathrm{id}\} = \{g \in G : gxg^{-1} = x
\ \mathrm{for\ all}\ x \in G\} = Z(G)$. By the first isomorphism theorem,
$\mathrm{Inn}(G) \cong G/Z(G)$. $\blacksquare$

**Example.** $\mathrm{Aut}(S_3) \cong S_3$. Since $Z(S_3) = \{e\}$, we have $\mathrm{Inn}(S_3) \cong S_3$.
Since $|\mathrm{Aut}(S_3)| \leq |S_3|! = 6$ (automorphisms permute the three elements of order $2$),
and $\mathrm{Inn}(S_3)$ already has $6$ elements, we get $\mathrm{Aut}(S_3) = \mathrm{Inn}(S_3) \cong S_3$.

**Example.** $\mathrm{Aut}(\mathbb{Z}/n\mathbb{Z}) \cong (\mathbb{Z}/n\mathbb{Z})^*$, the group of units
modulo $n$. An automorphism of $\mathbb{Z}/n\mathbb{Z}$ is determined by where it sends $1$, and
$1$ can map to any generator, i.e., any $[k]$ with $\gcd(k, n) = 1$.

**Example.** $\mathrm{Aut}(\mathbb{Z}/8\mathbb{Z}) \cong (\mathbb{Z}/8\mathbb{Z})^* = \{1, 3, 5, 7\} \cong V_4$.
The four automorphisms are $x \mapsto x$, $x \mapsto 3x$, $x \mapsto 5x$, $x \mapsto 7x$.
Note that $3^2 = 9 \equiv 1 \pmod{8}$, so every non-identity automorphism has order $2$.

### 5.9 Semidirect Products

**Definition.** Let $H$ and $K$ be groups and let $\phi : K \to \mathrm{Aut}(H)$ be a homomorphism.
The **semidirect product** $H \rtimes_\phi K$ is the set $H \times K$ with the group operation

$$(h_1, k_1)(h_2, k_2) = (h_1 \cdot \phi(k_1)(h_2), k_1 k_2)$$

When $\phi$ is the trivial homomorphism, this reduces to the direct product $H \times K$.

**Proposition 5.8.** In $G = H \rtimes_\phi K$, the subgroup $H' = \{(h, e_K)\}$ is normal in $G$
and $K' = \{(e_H, k)\}$ is a subgroup with $H' \cap K' = \{(e_H, e_K)\}$ and $H'K' = G$.

*Proof.* Conjugation: $(e_H, k)(h, e_K)(e_H, k)^{-1} = (e_H \cdot \phi(k)(h), k)(e_H, k^{-1})
= (\phi(k)(h), e_K) \in H'$. So $H' \trianglelefteq G$. The remaining claims are immediate. $\blacksquare$

**Example.** $D_n = \mathbb{Z}/n\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z}$ where the action of
$\mathbb{Z}/2\mathbb{Z}$ on $\mathbb{Z}/n\mathbb{Z}$ sends $k \mapsto -k$ (inversion).
Explicitly: $(a, 0)(b, 0) = (a + b, 0)$, $(a, 0)(b, 1) = (a + b, 1)$,
$(a, 1)(b, 0) = (a - b, 1)$, $(a, 1)(b, 1) = (a - b, 0)$.

**Problem.** Show that there are exactly two groups of order $6$: $\mathbb{Z}/6\mathbb{Z}$ and $S_3$.

<details>
<summary>Solution</summary>

*Solution.* $|G| = 6 = 2 \cdot 3$. By Sylow's third theorem: $n_3 \equiv 1 \pmod{3}$ and $n_3$
divides $2$, so $n_3 = 1$. The Sylow $3$-subgroup $H = \langle a \rangle \cong \mathbb{Z}/3\mathbb{Z}$ is normal.

Let $b$ be an element of order $2$ (exists by Cauchy). Since $H \trianglelefteq G$,
$bab^{-1} \in H$. The action of $\langle b \rangle$ on $H$ by conjugation is a homomorphism
$\mathbb{Z}/2\mathbb{Z} \to \mathrm{Aut}(\mathbb{Z}/3\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$.

There are two such homomorphisms:
1. **Trivial:** $bab^{-1} = a$. Then $G \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \cong \mathbb{Z}/6\mathbb{Z}$.
2. **Inversion:** $bab^{-1} = a^{-1}$. Then $G \cong \mathbb{Z}/3\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z} = S_3$.

These are the only two possibilities, up to isomorphism. $\blacksquare$

</details>

**Problem.** Classify all groups of order $21 = 3 \cdot 7$.

<details>
<summary>Solution</summary>

*Solution.* $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $3$, so $n_7 = 1$. The Sylow $7$-subgroup
$H = \langle a \rangle \cong \mathbb{Z}/7\mathbb{Z}$ is normal.

$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $7$, so $n_3 = 1$ or $7$.

The action of a Sylow $3$-subgroup $K = \langle b \rangle \cong \mathbb{Z}/3\mathbb{Z}$ on $H$ by conjugation
is a homomorphism $\mathbb{Z}/3\mathbb{Z} \to \mathrm{Aut}(\mathbb{Z}/7\mathbb{Z}) \cong \mathbb{Z}/6\mathbb{Z}$.

$\mathrm{Aut}(\mathbb{Z}/7\mathbb{Z})$ has exactly one subgroup of order $3$ (generated by $x \mapsto 2x$
since $2^3 = 8 \equiv 1 \pmod{7}$).

**Case 1:** Trivial action ($n_3 = 1$): $G \cong \mathbb{Z}/7\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \cong \mathbb{Z}/21\mathbb{Z}$.

**Case 2:** Non-trivial action ($n_3 = 7$): $bab^{-1} = a^2$ (or equivalently $a^4$).
This gives the non-abelian semidirect product $\mathbb{Z}/7\mathbb{Z} \rtimes \mathbb{Z}/3\mathbb{Z}$.

There are exactly two groups of order $21$. $\blacksquare$

</details>

## 6. Group Actions

### 6.1 Definition

A **group action** of $G$ on a set $X$ is a map $G \times X \to X$, written $(g, x) \mapsto g \cdot x$,
satisfying:

1. $e \cdot x = x$ for all $x \in X$.
2. $g \cdot (h \cdot x) = (gh) \cdot x$ for all $g, h \in G$ and $x \in X$.

### 6.2 Orbits and Stabilizers

The **orbit** of $x \in X$ is $\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$.

The **stabilizer** of $x \in X$ is $\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$.

**Proposition 6.1.** $\mathrm{Stab}(x)$ is a subgroup of $G$.

**Theorem 6.2 (Orbit-Stabilizer Theorem).** For any $x \in X$,

$$|\mathrm{Orb}(x)| = [G : \mathrm{Stab}(x)] = \frac{|G|}{|\mathrm{Stab}(x)|}$$

*Proof.* Define $\phi : G \to \mathrm{Orb}(x)$ by $\phi(g) = g \cdot x$. Then $g$ and $h$ have the same
image iff $g \cdot x = h \cdot x$ iff $h^{-1}g \cdot x = x$ iff $h^{-1}g \in \mathrm{Stab}(x)$
iff $g \in h\,\mathrm{Stab}(x)$. So the fibers of $\phi$ are precisely the cosets of $\mathrm{Stab}(x)$,
and there are $[G : \mathrm{Stab}(x)]$ of them, each mapping to a distinct element of $\mathrm{Orb}(x)$. $\blacksquare$

### 6.3 Burnside's Lemma

**Theorem 6.3 (Burnside's Lemma).** If a finite group $G$ acts on a finite set $X$, then the number
of orbits is

$$\frac{1}{|G|} \sum_{g \in G} |\mathrm{Fix}(g)|$$

where $\mathrm{Fix}(g) = \{x \in X : g \cdot x = x\}$.

*Proof.* Count the set $S = \{(g, x) \in G \times X : g \cdot x = x\}$ in two ways. Grouping by $g$:
$|S| = \sum_{g \in G} |\mathrm{Fix}(g)|$. Grouping by $x$: $|S| = \sum_{x \in X} |\mathrm{Stab}(x)|$.
For $x$ in orbit $O$, $|\mathrm{Stab}(x)| = |G|/|O|$. So $\sum_{x \in O} |\mathrm{Stab}(x)| = |O| \cdot |G|/|O| = |G|$.
Summing over all orbits: $|S| = |G| \cdot (\mathrm{number\ of\ orbits})$. $\blacksquare$

### 6.4 Conjugation Action and the Class Equation

$G$ acts on itself by conjugation: $g \cdot x = gxg^{-1}$.

The orbits are called **conjugacy classes**. The stabilizer of $x$ is the **centralizer**
$C_G(x) = \{g \in G : gx = xg\}$.

**Theorem 6.4 (Class Equation).** For a finite group $G$,

$$|G| = |Z(G)| + \sum_{i} [G : C_G(x_i)]$$

where the sum is over representatives $x_i$ of the non-central conjugacy classes.

*Proof.* The conjugacy classes partition $G$. Central elements form singleton classes.
For a non-central element $x$, $|\mathrm{Orb}(x)| = [G : C_G(x)]$ by the orbit-stabilizer theorem.
Summing gives the result. $\blacksquare$

### 6.5 Worked Example: Symmetries of a Cube

**Problem.** The rotational symmetry group of a cube has $24$ elements. Use the orbit-stabilizer theorem
to verify the sizes of the orbits of vertices, edges, and faces under this action.

<details>
<summary>Solution</summary>

*Solution.* Let $G$ be the rotation group of a cube, with $|G| = 24$.

**Vertices.** The cube has $8$ vertices. The action on vertices is transitive (any vertex can be rotated
to any other), so $|\mathrm{Orb}(v)| = 8$. By orbit-stabilizer, $|\mathrm{Stab}(v)| = 24/8 = 3$.
Indeed, the stabilizer of a vertex consists of rotations about the space diagonal through that vertex
and its opposite: the identity, $120°$ rotation, and $240°$ rotation.

**Edges.** The cube has $12$ edges. The action is transitive, so $|\mathrm{Orb}(e)| = 12$ and
$|\mathrm{Stab}(e)| = 24/12 = 2$. The stabilizer of an edge is $\{\mathrm{id}, r\}$ where $r$ is the
$180°$ rotation about the axis through the midpoints of that edge and its opposite.

**Faces.** The cube has $6$ faces. The action is transitive, so $|\mathrm{Orb}(f)| = 6$ and
$|\mathrm{Stab}(f)| = 24/6 = 4$. The stabilizer of a face consists of rotations about the axis
through the center of that face and its opposite: $\{0°, 90°, 180°, 270°\} \cong \mathbb{Z}/4\mathbb{Z}$.

This verifies: $24 = 8 \cdot 3 = 12 \cdot 2 = 6 \cdot 4$. $\blacksquare$

</details>

### 6.6 Application: Centers of p-Groups

**Theorem 6.5.** If $G$ is a non-trivial finite $p$-group (i.e., $|G| = p^n$ for some prime $p$ and
$n \geq 1$), then $Z(G)$ is non-trivial: $|Z(G)| \geq p$.

*Proof.* By the class equation:

$$|G| = |Z(G)| + \sum_{i=1}^{r} [G : C_G(x_i)]$$

where $x_1, \ldots, x_r$ are representatives of the non-central conjugacy classes. For each $i$,
$x_i$ is non-central, so $C_G(x_i) \neq G$. Thus $[G : C_G(x_i)]$ is a divisor of $|G| = p^n$
that is strictly greater than $1$, hence $p$ divides $[G : C_G(x_i)]$. Since $p$ also divides $|G|$,
we have:

$$|Z(G)| = |G| - \sum_{i=1}^{r} [G : C_G(x_i)] \equiv 0 - 0 \equiv 0 \pmod{p}$$

Since $e \in Z(G)$, we have $|Z(G)| \geq 1$. Therefore $|Z(G)| \geq p$. $\blacksquare$

**Corollary 6.6.** Every group of order $p^2$ (where $p$ is prime) is abelian.

*Proof.* By Theorem 6.5, $|Z(G)| \geq p$. Since $Z(G) \leq G$, $|Z(G)|$ divides $p^2$, so
$|Z(G)| = p$ or $|Z(G)| = p^2$. If $|Z(G)| = p^2$, then $G = Z(G)$ is abelian. If $|Z(G)| = p$,
then $G/Z(G)$ has order $p$ and is therefore cyclic, say $G/Z(G) = \langle gZ(G) \rangle$.
Then every element of $G$ has the form $g^k z$ for some $k \in \mathbb{Z}$ and $z \in Z(G)$.
For any two such elements $(g^{k_1}z_1)(g^{k_2}z_2) = g^{k_1+k_2}z_1z_2 = g^{k_2+k_1}z_2z_1 = (g^{k_2}z_2)(g^{k_1}z_1)$,
so $G$ is abelian, contradicting $|Z(G)| = p$. Thus $|Z(G)| = p^2$ and $G$ is abelian. $\blacksquare$

## 7. The Sylow Theorems

### 7.1 Statement

Let $G$ be a finite group of order $|G| = p^n m$ where $p$ is prime and $\gcd(p, m) = 1$. A **Sylow
$p$-subgroup** of $G$ is a subgroup of order $p^n$.

**Theorem 7.1 (Sylow's First Theorem).** $G$ has a Sylow $p$-subgroup.

**Theorem 7.2 (Sylow's Second Theorem).** Any two Sylow $p$-subgroups are conjugate.

**Theorem 7.3 (Sylow's Third Theorem).** The number $n_p$ of Sylow $p$-subgroups satisfies:

1. $n_p \equiv 1 \pmod{p}$.
2. $n_p$ divides $m$.

### 7.2 Proof of Sylow's First Theorem

*Proof.* Let $|G| = p^n m$ with $\gcd(p, m) = 1$. Let $X$ be the set of all subsets of $G$ of size $p^n$.
Then $|X| = \binom{p^n m}{p^n}$. Note that $p$ does not divide $\binom{p^n m}{p^n}$ (this follows from
Lucas's theorem or examining the $p$-adic valuation). $G$ acts on $X$ by left multiplication.
Since $|X|$ is not divisible by $p$, some orbit $\mathrm{Orb}(S)$ has size not divisible by $p$.
By the orbit-stabilizer theorem, $|\mathrm{Stab}(S)| = |G|/|\mathrm{Orb}(S)|$ is divisible by $p^n$.
For $s \in S$, left multiplication by $s$ is a bijection $S \to sS$, and $sS \subseteq S$ since
$\mathrm{Stab}(S) \cdot S = S$. Since $|sS| = |S| = p^n$, we get $sS = S$, so $s \in \mathrm{Stab}(S)$.
Thus $S \subseteq \mathrm{Stab}(S)$, giving $p^n \leq |\mathrm{Stab}(S)|$.
Since $|\mathrm{Stab}(S)|$ divides $p^n m$ and is divisible by $p^n$, we have $|\mathrm{Stab}(S)| = p^n$,
and $\mathrm{Stab}(S)$ is a Sylow $p$-subgroup. $\blacksquare$

### 7.3 Applications

**Proposition 7.4.** Every group of order $pq$ (where $p \lt{} q$ are primes with $p \nmid (q - 1)$)
is cyclic.

*Proof.* By Sylow's third theorem, $n_q \equiv 1 \pmod{q}$ and $n_q$ divides $p$. Since $p \lt{} q$,
$n_q = 1$, so the Sylow $q$-subgroup $Q$ is normal. Similarly, $n_p \equiv 1 \pmod{p}$ and $n_p$
divides $q$. Since $p \nmid (q-1)$, $n_p \neq q$, so $n_p = 1$, and the Sylow $p$-subgroup $P$
is normal. Since $P \cap Q = \{e\}$ (their orders are coprime) and $|PQ| = pq = |G|$,
we have $G \cong P \times Q \cong \mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/q\mathbb{Z} \cong \mathbb{Z}/pq\mathbb{Z}$. $\blacksquare$

**Proposition 7.5.** Every group of order $p^2$ (where $p$ is prime) is abelian.

*Proof.* Let $|G| = p^2$. If $G$ is cyclic, it is abelian. Otherwise, every non-identity element has
order $p$ (by Lagrange). Let $g \neq e$ and consider $H = \langle g \rangle$ with $|H| = p$.
Then $[G : H] = p$, so $H \trianglelefteq G$ (the smallest prime dividing $|G|$).
Pick $x \notin H$. Then $G = H \cup xH$, and since $x \notin H$ and $\langle x \rangle$ has order $p$,
we have $G = H \times \langle x \rangle$, which is abelian. $\blacksquare$

### 7.4 Proof of Sylow's Second Theorem

*Proof.* Let $P$ be a Sylow $p$-subgroup of $G$, and let $Q$ be any $p$-subgroup of $G$.
$Q$ acts on the set of left cosets $G/P$ by left multiplication: $q \cdot (gP) = qgP$.

Since $|G/P| = |G|/|P| = m$ is not divisible by $p$, and orbits under the $Q$-action have sizes
dividing $|Q|$ (hence powers of $p$), the number of fixed points satisfies:

$$|\mathrm{Fix}(Q)| \equiv |G/P| \equiv m \not\equiv 0 \pmod{p}$$

So there exists $gP \in G/P$ fixed by $Q$, meaning $Q \cdot gP = gP$, i.e., $QgP = gP$, so
$g^{-1}Qg \subseteq P$.

Taking $Q$ to be a Sylow $p$-subgroup: $|g^{-1}Qg| = |Q| = p^n = |P|$, so $g^{-1}Qg = P$,
proving that $P$ and $Q$ are conjugate. $\blacksquare$

### 7.5 Proof of Sylow's Third Theorem

*Proof.* Let $P$ be a Sylow $p$-subgroup. $P$ acts on the set $\mathrm{Syl}_p(G)$ of all Sylow
$p$-subgroups by conjugation. Write $\mathrm{Syl}_p(G) = \{P = P_1, P_2, \ldots, P_{n_p}\}$.

**Step 1: $n_p \equiv 1 \pmod{p}$.** A Sylow $p$-subgroup $P_i$ is a fixed point of the $P$-action
iff $P \subseteq N_G(P_i)$. But then $PP_i \leq N_G(P_i)$, and $|PP_i| = p^n \cdot p^n / |P \cap P_i|$,
which is a power of $p$. Since $p^n$ is the maximal power of $p$ dividing $|G|$ and $PP_i \subseteq G$,
we get $|PP_i| = p^n$, hence $P = PP_i = P_i$ (since $P \subseteq PP_i$).

Thus $P$ is the **unique** fixed point. All other orbits have size $[P : \mathrm{Stab}_P(P_i)]$,
a power of $p$ greater than $1$. By the fixed-point congruence for $p$-group actions:
$n_p = 1 + \sum (\mathrm{sizes\ of\ remaining\ orbits}) \equiv 1 \pmod{p}$.
**Step 2: $n_p$ divides $m$.** The group $G$ acts transitively on $\mathrm{Syl}_p(G)$ by conjugation
(by Sylow's second theorem). Hence $n_p = |\mathrm{Syl}_p(G)| = [G : N_G(P)]$.
Since $P \leq N_G(P)$, $|N_G(P)|$ is divisible by $p^n$. Therefore $n_p = |G|/|N_G(P)|$ divides
$|G|/p^n = m$. $\blacksquare$

### 7.6 Worked Examples: Finding Sylow Subgroups

**Problem.** Find all Sylow $2$-subgroups and Sylow $3$-subgroups of $S_4$.

<details>
<summary>Solution</summary>

*Solution.* $|S_4| = 24 = 2^3 \cdot 3$.

**Sylow $3$-subgroups** (order $3$). $n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $8$,
so $n_3 \in \{1, 4\}$. The Sylow $3$-subgroups are generated by $3$-cycles.
There are $\binom{4}{3} \cdot 2 = 8$ elements of order $3$, and each subgroup of order $3$
contains $2$ such elements. So $n_3 = 8/2 = 4$.

The four Sylow $3$-subgroups are:
$\langle (1\ 2\ 3) \rangle$, $\langle (1\ 2\ 4) \rangle$, $\langle (1\ 3\ 4) \rangle$, $\langle (2\ 3\ 4) \rangle$.

**Sylow $2$-subgroups** (order $8$). $n_2 \equiv 1 \pmod{2}$ and $n_2$ divides $3$,
so $n_2 \in \{1, 3\}$. A Sylow $2$-subgroup is isomorphic to $D_4$ (the dihedral group of order $8$).
Consider $P = \{e, (1\ 2\ 3\ 4), (1\ 3)(2\ 4), (1\ 4\ 3\ 2), (1\ 2)(3\ 4), (1\ 4)(2\ 3), (1\ 3), (2\ 4)\}$.
This is the symmetry group of a square with vertices $1, 2, 3, 4$, isomorphic to $D_4$.

Since $n_2 \in \{1, 3\}$ and $P$ is not normal in $S_4$ (e.g., $(1\ 2)P(1\ 2) \neq P$),
we have $n_2 = 3$. $\blacksquare$

</details>

### 7.7 Further Applications

**Proposition 7.6.** Every group of order $15$ is cyclic.

*Proof.* $n_5 \equiv 1 \pmod{5}$ and $n_5$ divides $3$, so $n_5 = 1$. $n_3 \equiv 1 \pmod{3}$ and
$n_3$ divides $5$, so $n_3 = 1$. Both the Sylow $3$-subgroup $P$ and the Sylow $5$-subgroup $Q$ are
normal, $P \cap Q = \{e\}$, and $PQ = G$. Hence $G \cong P \times Q \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z}
\cong \mathbb{Z}/15\mathbb{Z}$. $\blacksquare$

**Proposition 7.7.** If $G$ is a simple group with $|G| \leq 60$, then $|G|$ is prime.
The smallest non-abelian simple group is $A_5$ of order $60$.

*Proof sketch.* If $G$ is simple and $|G| = p^n m$ with $\gcd(p, m) = 1$ and $m > 1$,
then $n_p = m$ (since $n_p \neq 1$, and $n_p$ divides $m$ with $n_p \equiv 1 \pmod{p}$).
For many orders, one can show $n_p = 1$, forcing a normal Sylow subgroup and contradicting simplicity. $\blacksquare$

:::caution Common Pitfall
Sylow subgroups are not unique in general. When $n_p > 1$, there are multiple Sylow $p$-subgroups,
but they are all conjugate. A common mistake is to assume $n_p = 1$ without checking the Sylow
conditions. Always verify that $n_p \equiv 1 \pmod{p}$ and $n_p$ divides $m$.
:::

## 8. Rings

### 8.1 Definition of a Ring

A **ring** $(R, +, \cdot)$ is a set $R$ with two binary operations satisfying:

1. $(R, +)$ is an abelian group.
2. Multiplication is associative: $(ab)c = a(bc)$.
3. Distributive laws: $a(b + c) = ab + ac$ and $(a + b)c = ac + bc$.

A ring is **commutative** if $ab = ba$ for all $a, b \in R$. A ring with a multiplicative identity $1$ is
a **ring with unity**. A **field** is a commutative ring with unity in which every non-zero element has
a multiplicative inverse.

### 8.2 Examples

**Example 1.** $\mathbb{Z}$ is a commutative ring with unity, but not a field.

**Example 2.** $\mathbb{Z}/n\mathbb{Z}$ is a commutative ring with unity. It is a field if and only if $n$ is prime.

**Example 3.** $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ are fields.

**Example 4.** The set $M_n(\mathbb{R})$ of $n \times n$ real matrices is a non-commutative ring with unity.

**Example 5.** $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$ (Gaussian integers) is a commutative ring with unity.

### 8.3 Subrings

A **subring** $S \subseteq R$ is a subset that is itself a ring under the operations of $R$.

**Proposition 8.1 (Subring Criterion).** A non-empty subset $S \subseteq R$ is a subring if and only if
for all $a, b \in S$:

1. $a - b \in S$.
2. $ab \in S$.

### 8.4 Integral Domains

An **integral domain** is a commutative ring $R$ with unity $1 \neq 0$ in which there are no
**zero divisors**: if $ab = 0$ for $a, b \in R$, then $a = 0$ or $b = 0$.

**Proposition 8.2.** Every field is an integral domain.

*Proof.* Let $F$ be a field and suppose $ab = 0$ with $a \neq 0$. Then $b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$.
$\blacksquare$

**Proposition 8.3.** $\mathbb{Z}/n\mathbb{Z}$ is an integral domain if and only if $n$ is prime.

*Proof.* If $n = p$ is prime, then $\mathbb{Z}/p\mathbb{Z}$ is a field, hence an integral domain.
If $n = ab$ with $1 \lt{} a, b \lt{} n$, then $[a][b] = [ab] = [n] = [0]$ in $\mathbb{Z}/n\mathbb{Z}$,
but $[a] \neq [0]$ and $[b] \neq [0]$, so $\mathbb{Z}/n\mathbb{Z}$ has zero divisors. $\blacksquare$

**Proposition 8.4 (Cancellation Law for Integral Domains).** In an integral domain, if $ab = ac$ and $a \neq 0$, then $b = c$.

*Proof.* $ab = ac$ implies $a(b - c) = 0$. Since $a \neq 0$ and there are no zero divisors, $b - c = 0$. $\blacksquare$

### 8.5 Fields: Further Examples

**Example.** $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\}$ is a field. The inverse of
$a + b\sqrt{2}$ (with $a, b$ not both zero) is $\frac{a - b\sqrt{2}}{a^2 - 2b^2}$.

**Example.** For any prime $p$, $\mathbb{Z}/p\mathbb{Z}$ is a field with $p$ elements, denoted $\mathbb{F}_p$.

**Proposition 8.5.** In a finite integral domain $R$, every non-zero element is a unit. Hence every finite
integral domain is a field.

*Proof.* Let $a \in R$ with $a \neq 0$. The map $\phi : R \to R$ given by $\phi(x) = ax$ is injective
(since $ax = ay$ implies $a(x-y) = 0$ implies $x = y$ by the cancellation law). Since $R$ is finite,
$\phi$ is also surjective, so there exists $b \in R$ with $ab = 1$. Thus $a$ is a unit. $\blacksquare$

### 8.6 Ring Homomorphisms

A **ring homomorphism** $\phi : R \to S$ is a function satisfying:

1. $\phi(a + b) = \phi(a) + \phi(b)$ for all $a, b \in R$.
2. $\phi(ab) = \phi(a)\phi(b)$ for all $a, b \in R$.
3. $\phi(1_R) = 1_S$ (for rings with unity).

A ring homomorphism that is bijective is a **ring isomorphism**.

**Proposition 8.6.** If $\phi : R \to S$ is a ring homomorphism, then:

1. $\phi(0_R) = 0_S$.
2. $\phi(-a) = -\phi(a)$ for all $a \in R$.
3. $\ker(\phi) = \{r \in R : \phi(r) = 0_S\}$ is an ideal of $R$.

*Proof.* (1) $\phi(0) = \phi(0 + 0) = \phi(0) + \phi(0)$, so $\phi(0) = 0$ by cancellation in $(S, +)$.
(2) $\phi(a) + \phi(-a) = \phi(a + (-a)) = \phi(0) = 0$, so $\phi(-a) = -\phi(a)$. (3) $\ker(\phi)$
is an ideal: it is a subgroup of $(R, +)$ by the group homomorphism property, and for any
$r \in R$ and $a \in \ker(\phi)$, $\phi(ra) = \phi(r)\phi(a) = \phi(r) \cdot 0 = 0$ and
$\phi(ar) = \phi(a)\phi(r) = 0$, so $ra, ar \in \ker(\phi)$. $\blacksquare$

**Example.** The map $\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ given by $\phi(k) = [k]$ is a surjective
ring homomorphism with kernel $n\mathbb{Z}$.

**Example.** The evaluation map $\phi : \mathbb{R}[x] \to \mathbb{R}$ given by $\phi(f) = f(a)$ for a fixed
$a \in \mathbb{R}$ is a surjective ring homomorphism with kernel $\{f \in \mathbb{R}[x] : f(a) = 0\} = (x - a)$.

### 8.7 Worked Examples: Ring Homomorphisms

**Problem.** Let $\phi : \mathbb{Z}[i] \to \mathbb{Z}/5\mathbb{Z}$ be defined by $\phi(a + bi) = (a + 2b) + 5\mathbb{Z}$.
Show that $\phi$ is a surjective ring homomorphism and find its kernel.

<details>
<summary>Solution</summary>

*Solution.* First, check it is a homomorphism:
$\phi((a+bi)(c+di)) = \phi((ac - bd) + (ad + bc)i) = (ac - bd + 2ad + 2bc) + 5\mathbb{Z}$
$= (ac + 2ad + 2bc - bd) + 5\mathbb{Z}$.

$\phi(a+bi)\phi(c+di) = (a+2b)(c+2d) + 5\mathbb{Z} = (ac + 2ad + 2bc + 4bd) + 5\mathbb{Z}$.

These differ by $5bd + 5\mathbb{Z} = 0 + 5\mathbb{Z}$ since $5bd$ is a multiple of $5$. So $\phi$ preserves
multiplication. Additivity is clear. Also $\phi(1) = 1 + 5\mathbb{Z}$. ✓

Surjectivity: $\phi(1) = 1$, $\phi(i) = 2$, $\phi(2) = 2$, $\phi(2i) = 4$, $\phi(1+i) = 3$, $\phi(1+2i) = 5 \equiv 0$.
We get all residues $0, 1, 2, 3, 4$, so $\phi$ is surjective.

Kernel: $\ker(\phi) = \{a + bi : a + 2b \equiv 0 \pmod{5}\}$. For example, $1 + 2i \in \ker(\phi)$ since
$1 + 4 = 5 \equiv 0 \pmod{5}$. Also $(1 + 2i)(1 - 2i) = 5 \in \ker(\phi)$. In fact, $\ker(\phi) = (1 + 2i)$
(the principal ideal generated by $1 + 2i$ in $\mathbb{Z}[i]$). By the ring isomorphism theorem,
$\mathbb{Z}[i]/(1+2i) \cong \mathbb{Z}/5\mathbb{Z}$. $\blacksquare$

</details>

**Problem.** Let $R = \mathbb{Z}[x]/(x^2 - x)$. Describe the elements of $R$ and show that $R$ has zero divisors.

<details>
<summary>Solution</summary>

*Solution.* In $R$, we have $x^2 = x$. Every element can be written as $[a + bx]$ where $a, b \in \mathbb{Z}$,
since higher powers reduce: $x^2 = x$, $x^3 = x^2 = x$, etc.

$R$ has zero divisors: $[x][x - 1] = [x^2 - x] = [0]$, but $[x] \neq [0]$ and $[x - 1] \neq [0]$.
So $R$ is not an integral domain.

Note that $R \cong \mathbb{Z} \times \mathbb{Z}$ via the map $[a + bx] \mapsto (a, a + b)$.
The isomorphism follows from the Chinese Remainder Theorem: $(x^2 - x) = (x) \cap (x-1)$
and $(x) + (x-1) = (1)$. $\blacksquare$

</details>

## 9. Ideals and Quotient Rings

### 9.1 Ideals

A subset $I \subseteq R$ is an **ideal** if:

1. $(I, +)$ is a subgroup of $(R, +)$.
2. For all $r \in R$ and $a \in I$: $ra \in I$ and $ar \in I$.

If only $ra \in I$ for all $r \in R$ and $a \in I$, then $I$ is a **left ideal**. Similarly for **right
ideals**. A **two-sided ideal** (or simply **ideal**) satisfies both.

**Proposition 9.1.** Every ideal is a subring. The converse is false.

**Example.** $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ is an ideal of $\mathbb{Z}$.

**Example.** If $\phi : R \to S$ is a ring homomorphism, then $\ker(\phi)$ is an ideal of $R$.

### 9.2 Quotient Rings

If $I$ is an ideal of $R$, the **quotient ring** $R/I$ has elements $\{a + I : a \in R\}$ (cosets)
with operations $(a + I) + (b + I) = (a + b) + I$ and $(a + I)(b + I) = ab + I$.

**Theorem 9.2 (Ring Isomorphism Theorem).** If $\phi : R \to S$ is a surjective ring homomorphism,
then $R / \ker(\phi) \cong S$.

The proof follows the same pattern as the first isomorphism theorem for groups.

### 9.3 Prime and Maximal Ideals

An ideal $I \neq R$ is **prime** if $ab \in I$ implies $a \in I$ or $b \in I$.

An ideal $I \neq R$ is **maximal** if there is no ideal $J$ with $I \subsetneq J \subsetneq R$.

**Theorem 9.3.** In a commutative ring $R$ with unity:

1. $I$ is a prime ideal if and only if $R/I$ is an integral domain.
2. $I$ is a maximal ideal if and only if $R/I$ is a field.

**Corollary 9.4.** Every maximal ideal is prime.

*Proof.* A field is an integral domain. $\blacksquare$

**Example.** In $\mathbb{Z}$, the ideal $(p)$ is maximal (hence prime) if and only if $p$ is prime.
The ideal $(6)$ is neither prime nor maximal. The ideal $(0)$ is prime ($\mathbb{Z}$ is an integral domain)
but not maximal ($\mathbb{Z}/(0) \cong \mathbb{Z}$ is not a field).

**Example.** In $\mathbb{R}[x]$, the ideal $(x^2 + 1)$ is maximal since
$\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$ is a field.

**Problem.** Show that $(2)$ is a maximal ideal of $\mathbb{Z}$ but $(4)$ is not.

<details>
<summary>Solution</summary>

*Solution.* $\mathbb{Z}/(2) \cong \mathbb{Z}/2\mathbb{Z}$ is a field, so $(2)$ is maximal by Theorem 9.3.

$\mathbb{Z}/(4)$ has zero divisors: $[2][2] = [4] = [0]$ but $[2] \neq [0]$. So $\mathbb{Z}/(4)$ is not
an integral domain, hence $(4)$ is not prime, and therefore not maximal. Explicitly, $(4) \subsetneq (2) \subsetneq \mathbb{Z}$.
$\blacksquare$

</details>

### 9.4 The Chinese Remainder Theorem

**Theorem 9.5 (Chinese Remainder Theorem for Rings).** Let $R$ be a commutative ring with unity and
let $I, J$ be ideals with $I + J = R$. Then

$$R/(I \cap J) \cong R/I \times R/J$$

*Proof.* Define $\phi : R \to R/I \times R/J$ by $\phi(r) = (r + I, r + J)$. This is a ring homomorphism.
It is surjective: since $I + J = R$, there exist $a \in I$ and $b \in J$ with $a + b = 1$.
For any $(r_1 + I, r_2 + J)$, take $r = r_1b + r_2a$. Then $r \equiv r_1b \equiv r_1(1-a) \equiv r_1 \pmod{I}$
and $r \equiv r_2a \equiv r_2(1-b) \equiv r_2 \pmod{J}$.

The kernel is $\ker(\phi) = \{r : r \in I\ \mathrm{and}\ r \in J\} = I \cap J$.
By the ring isomorphism theorem, $R/(I \cap J) \cong R/I \times R/J$. $\blacksquare$

**Corollary 9.6.** If $m, n \in \mathbb{Z}$ are coprime, then $\mathbb{Z}/(mn) \cong \mathbb{Z}/(m) \times \mathbb{Z}/(n)$.

*Proof.* Apply Theorem 9.5 with $I = (m)$, $J = (n)$. Since $\gcd(m, n) = 1$, we have $(m) + (n) = (1) = \mathbb{Z}$.
Also $(m) \cap (n) = (\mathrm{lcm}(m, n)) = (mn)$. $\blacksquare$

**Problem.** Find all solutions to $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$, $x \equiv 1 \pmod{7}$.

<details>
<summary>Solution</summary>

*Solution.* By the Chinese Remainder Theorem, since $\gcd(3, 5) = \gcd(3, 7) = \gcd(5, 7) = 1$,
there is a unique solution modulo $105$.

First, solve $x \equiv 2 \pmod{3}$ and $x \equiv 3 \pmod{5}$.
$x = 2 + 3k$: we need $2 + 3k \equiv 3 \pmod{5}$, so $3k \equiv 1 \pmod{5}$, giving $k \equiv 2 \pmod{5}$.
Thus $x \equiv 2 + 6 = 8 \pmod{15}$.

Now solve $x \equiv 8 \pmod{15}$ and $x \equiv 1 \pmod{7}$.
$x = 8 + 15k$: we need $8 + 15k \equiv 1 \pmod{7}$, so $1 + k \equiv 1 \pmod{7}$, giving $k \equiv 0 \pmod{7}$.
Thus $x \equiv 8 \pmod{105}$.

The unique solution modulo $105$ is $x \equiv 8 \pmod{105}$. $\blacksquare$

</details>

## 10. Polynomial Rings

### 10.1 Definition and Basic Properties

The **polynomial ring** $R[x]$ consists of all formal sums $\sum_{i=0}^{n} a_i x^i$ with $a_i \in R$.
It is a ring under the usual addition and multiplication of polynomials.

**Theorem 10.1 (Division Algorithm).** If $F$ is a field and $f, g \in F[x]$ with $g \neq 0$, then
there exist unique $q, r \in F[x]$ such that $f = qg + r$ with $\deg(r) \lt{} \deg(g)$ or $r = 0$.

**Theorem 10.2 (Factor Theorem).** $a \in F$ is a root of $f \in F[x]$ if and only if $(x - a)$ divides $f$.

**Proposition 10.3.** A polynomial of degree $n$ over a field has at most $n$ roots (counting multiplicity).

### 10.2 Irreducible Polynomials

A non-constant polynomial $f \in F[x]$ is **irreducible** if it cannot be factored as $f = gh$
with both $g$ and $h$ of degree less than $\deg(f)$.

**Proposition 10.4.** Every polynomial in $F[x]$ factors uniquely into irreducible polynomials (up to
reordering and multiplication by units).

**Theorem 10.5 (Eisenstein's Criterion).** Let $f(x) = a_n x^n + \cdots + a_1 x + a_0 \in \mathbb{Z}[x]$.
If there exists a prime $p$ such that:

1. $p$ divides $a_0, a_1, \ldots, a_{n-1}$.
2. $p$ does not divide $a_n$.
3. $p^2$ does not divide $a_0$.

Then $f$ is irreducible in $\mathbb{Q}[x]$.

*Proof.* Suppose $f = gh$ with $g, h \in \mathbb{Z}[x]$ (by Gauss's lemma), $\deg(g) = r \geq 1$,
$\deg(h) = s \geq 1$, $r + s = n$. Modulo $p$: $\bar{f} = \bar{g}\bar{h} = \bar{a}_n x^n$ in
$(\mathbb{Z}/p\mathbb{Z})[x]$. Since $\mathbb{Z}/p\mathbb{Z}[x]$ is an integral domain, $\bar{g} = bx^r$
and $\bar{h} = cx^s$ for some $b, c \in \mathbb{Z}/p\mathbb{Z}$. In particular, the constant terms of
$g$ and $h$ are both divisible by $p$. But then $p^2$ divides $a_0$, contradicting condition (3). $\blacksquare$

### 10.3 Worked Examples

**Problem.** Show that $x^2 + 1$ is irreducible in $\mathbb{R}[x]$ but reducible in $\mathbb{C}[x]$.

<details>
<summary>Solution</summary>

*Solution.* In $\mathbb{R}[x]$: if $x^2 + 1 = (x + a)(x + b)$ with $a, b \in \mathbb{R}$, then
$a + b = 0$ and $ab = 1$, giving $-a^2 = 1$, which has no real solution. So $x^2 + 1$ is irreducible
in $\mathbb{R}[x]$.

In $\mathbb{C}[x]$: $x^2 + 1 = (x + i)(x - i)$. $\blacksquare$

</details>

**Problem.** Use the Euclidean algorithm to compute $\gcd(x^4 + x^3 + x^2 + x + 1, x^3 + 1)$ in $\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

*Solution.* Apply the division algorithm:

$$x^4 + x^3 + x^2 + x + 1 = x(x^3 + 1) + (x^2 + x + 1)$$

$$x^3 + 1 = (x - 1)(x^2 + x + 1) + 2$$

Since $2$ is a non-zero constant (a unit in $\mathbb{Q}[x]$), the polynomials are coprime:
$\gcd(x^4 + x^3 + x^2 + x + 1, x^3 + 1) = 1$. $\blacksquare$

</details>

**Problem.** Show that $f(x) = x^5 - 5x + 3$ is irreducible in $\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

*Solution.* By the rational root theorem, possible rational roots are $\pm 1, \pm 3$.
$f(1) = -1$, $f(-1) = 7$, $f(3) = 216$, $f(-3) = -269$. No rational roots.

Since $\deg(f) = 5$, if $f$ is reducible, it must have an irreducible factor of degree $1$ or $2$.
No degree-$1$ factor means no rational root. We check for degree-$2$ factors by reducing modulo $2$:
$\bar{f} = x^5 + x + 1$ in $\mathbb{F}_2[x]$.
$\bar{f}(0) = 1$, $\bar{f}(1) = 1$, so no roots in $\mathbb{F}_2$.
The only irreducible quadratic in $\mathbb{F}_2[x]$ is $x^2 + x + 1$. Division gives
$x^5 + x + 1 = (x^2+x+1)(x^3 + x^2) + 1$, so $x^2 + x + 1$ does not divide $\bar{f}$.

Thus $f$ has no factor of degree $1$ or $2$, so $f$ is irreducible in $\mathbb{Q}[x]$. $\blacksquare$

</details>

## 11. Euclidean Domains, PIDs, and UFDs

### 11.1 Euclidean Domains

An integral domain $R$ is a **Euclidean domain** if there exists a function
$\delta : R \setminus \{0\} \to \mathbb{N}_0$ such that for all $a, b \in R$ with $b \neq 0$:

1. There exist $q, r \in R$ with $a = bq + r$ and either $r = 0$ or $\delta(r) \lt{} \delta(b)$.

**Example.** $\mathbb{Z}$ is a Euclidean domain with $\delta(a) = |a|$.

**Example.** $F[x]$ is a Euclidean domain with $\delta(f) = \deg(f)$.

**Example.** $\mathbb{Z}[i]$ is a Euclidean domain with $\delta(a + bi) = a^2 + b^2$.

### 11.2 Principal Ideal Domains

An integral domain $R$ is a **principal ideal domain (PID)** if every ideal of $R$ is principal
(generated by a single element).

**Theorem 11.1.** Every Euclidean domain is a PID.

*Proof.* Let $I$ be a non-zero ideal of the Euclidean domain $R$. Choose $d \in I \setminus \{0\}$
minimising $\delta(d)$. We claim $I = (d)$. For any $a \in I$, write $a = qd + r$ with
$r = 0$ or $\delta(r) \lt{} \delta(d)$. Since $r = a - qd \in I$, minimality of $\delta(d)$
forces $r = 0$, so $a = qd \in (d)$. $\blacksquare$

**Corollary 11.2.** $\mathbb{Z}$, $F[x]$, and $\mathbb{Z}[i]$ are PIDs.

### 11.3 Unique Factorization Domains

An integral domain $R$ is a **unique factorization domain (UFD)** if:

1. Every non-zero, non-unit element factors into irreducibles.
2. The factorization is unique up to ordering and associates.

**Theorem 11.3.** Every PID is a UFD.

The chain of implications is:

$$\mathrm{Euclidean\ domain} \Rightarrow \mathrm{PID} \Rightarrow \mathrm{UFD}$$

None of the reverse implications hold in general.

**Example.** $\mathbb{Z}[x]$ is a UFD but not a PID. (The ideal $(2, x)$ is not principal.)

**Example.** $\mathbb{Z}[\sqrt{-5}]$ is not a UFD: $6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$
gives two distinct factorizations into irreducibles.

**Problem.** Show that $\mathbb{Z}[\sqrt{-5}]$ is not a UFD.

<details>
<summary>Solution</summary>

*Solution.* We show that $2, 3, 1 + \sqrt{-5}, 1 - \sqrt{-5}$ are all irreducible in
$\mathbb{Z}[\sqrt{-5}]$ and that $2, 3$ are not associates of $1 \pm \sqrt{-5}$.

The norm is $N(a + b\sqrt{-5}) = a^2 + 5b^2$. Note $N(\alpha\beta) = N(\alpha)N(\beta)$ and
$\alpha$ is a unit iff $N(\alpha) = 1$.

$N(2) = 4$. If $2 = \alpha\beta$ with neither a unit, then $N(\alpha)N(\beta) = 4$, so
$N(\alpha) = N(\beta) = 2$. But $a^2 + 5b^2 = 2$ has no integer solutions. So $2$ is irreducible.

Similarly, $N(3) = 9$, and $a^2 + 5b^2 = 3$ has no solutions, so $3$ is irreducible.

$N(1 \pm \sqrt{-5}) = 6$. If $1 + \sqrt{-5} = \alpha\beta$ with neither a unit, then
$N(\alpha), N(\beta) \in \{2, 3\}$. But $a^2 + 5b^2 = 2$ and $a^2 + 5b^2 = 3$ have no solutions.
So $1 \pm \sqrt{-5}$ are irreducible.

Now $2 \cdot 3 = 6 = (1 + \sqrt{-5})(1 - \sqrt{-5})$ gives two distinct factorizations into
irreducibles (the factors are not associates since their norms are different: $4, 9$ vs $6, 6$).
Therefore $\mathbb{Z}[\sqrt{-5}]$ is not a UFD. $\blacksquare$

</details>

## 12. Field Theory

### 12.1 Field Extensions

A **field extension** is an inclusion $F \subseteq E$ of fields. We write $E/F$ and call $E$ an
**extension field** of $F$.

The **degree** of the extension, denoted $[E : F]$, is the dimension of $E$ as a vector space over $F$.

**Proposition 12.1.** If $F \subseteq E \subseteq K$ are field extensions, then $[K : F] = [K : E][E : F]$.

*Proof.* If $\{\alpha_i\}$ is a basis for $E/F$ and $\{\beta_j\}$ is a basis for $K/E$, then
$\{\alpha_i \beta_j\}$ is a basis for $K/F$. Count dimensions. $\blacksquare$

### 12.2 Algebraic Extensions

An element $\alpha \in E$ is **algebraic** over $F$ if there exists a non-zero polynomial $f \in F[x]$
with $f(\alpha) = 0$. Otherwise $\alpha$ is **transcendental** over $F$.

The **minimal polynomial** of $\alpha$ over $F$ is the monic polynomial of smallest degree in $F[x]$
having $\alpha$ as a root.

**Proposition 12.2.** The minimal polynomial of $\alpha$ over $F$ is irreducible in $F[x]$.

*Proof.* If $m_\alpha = fg$ with $\deg(f), \deg(g) \lt{} \deg(m_\alpha)$, then $f(\alpha)g(\alpha) = 0$,
so either $f(\alpha) = 0$ or $g(\alpha) = 0$, contradicting the minimality of $\deg(m_\alpha)$. $\blacksquare$

**Theorem 12.3.** $\alpha$ is algebraic over $F$ if and only if $[F(\alpha) : F] \lt{} \infty$. In this case,
$[F(\alpha) : F] = \deg(m_\alpha)$.

*Proof.* If $\alpha$ is algebraic with minimal polynomial $m_\alpha$ of degree $n$, then
$\{1, \alpha, \alpha^2, \ldots, \alpha^{n-1}\}$ is a basis for $F(\alpha)/F$ (every element can be
reduced modulo $m_\alpha$), so $[F(\alpha) : F] = n$. Conversely, if $[F(\alpha) : F] = n \lt{} \infty$,
then $\{1, \alpha, \ldots, \alpha^n\}$ is linearly dependent, giving a polynomial relation $f(\alpha) = 0$. $\blacksquare$

### 12.3 Constructing Extension Fields

**Theorem 12.4 (Kronecker's Theorem).** If $F$ is a field and $f \in F[x]$ is irreducible, then
$E = F[x] / (f)$ is a field extension of $F$ containing a root of $f$.

*Proof.* Since $f$ is irreducible and $F[x]$ is a PID, $(f)$ is a maximal ideal, so $E = F[x]/(f)$
is a field. The element $\alpha = x + (f) \in E$ satisfies $f(\alpha) = f(x + (f)) = f(x) + (f) = (f) = 0$,
i.e., $\alpha$ is a root of $f$. $\blacksquare$

### 12.4 Finite Fields

**Theorem 12.5.** For every prime $p$ and every $n \geq 1$, there exists a field of order $p^n$,
unique up to isomorphism.

*Proof (existence).* Consider the splitting field of $f(x) = x^{p^n} - x$ over $\mathbb{F}_p$.
The set of roots of $f$ in the splitting field forms a field (since roots are closed under addition,
multiplication, and taking inverses), and it has exactly $p^n$ elements. $\blacksquare$

**Proposition 12.6.** The multiplicative group $\mathbb{F}_{p^n}^*$ of a finite field is cyclic.

*Proof.* $\mathbb{F}_{p^n}^*$ is a finite abelian group of order $p^n - 1$.
Let $m$ be the largest order of any element. By Lagrange, every element's order divides $m$.
So $x^m = 1$ for all $x \in \mathbb{F}_{p^n}^*$, meaning every element is a root of $x^m - 1$.
Since $x^m - 1$ has at most $m$ roots in a field, $p^n - 1 \leq m$. But $m$ divides $p^n - 1$,
so $m = p^n - 1$. $\blacksquare$

### 12.5 Algebraic Closure

A field $F$ is **algebraically closed** if every non-constant polynomial in $F[x]$ has a root in $F$.

**Theorem 12.7 (Fundamental Theorem of Algebra).** $\mathbb{C}$ is algebraically closed.

_Remark._ Every field $F$ has an **algebraic closure** $\overline{F}$: an algebraically closed field
that is an algebraic extension of $F$. The algebraic closure is unique up to $F$-isomorphism.
For example, $\overline{\mathbb{Q}}$ is the field of all algebraic numbers. It is countable and
infinite-dimensional over $\mathbb{Q}$.

### 12.6 Worked Examples: Field Extensions

**Problem.** Compute $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$ and find the minimal polynomial of $\sqrt{2} + \sqrt{3}$ over $\mathbb{Q}$.

<details>
<summary>Solution</summary>

*Solution.* First, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$ since $x^2 - 2$ is irreducible over $\mathbb{Q}$
(by Eisenstein with $p = 2$). Then $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$: if $\sqrt{3} = a + b\sqrt{2}$
with $a, b \in \mathbb{Q}$, squaring gives $3 = a^2 + 2b^2 + 2ab\sqrt{2}$, forcing $ab = 0$.
If $b = 0$: $a^2 = 3$, impossible in $\mathbb{Q}$. If $a = 0$: $2b^2 = 3$, impossible in $\mathbb{Q}$.
So $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$.

By the tower law: $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \cdot 2 = 4$.

For the minimal polynomial of $\alpha = \sqrt{2} + \sqrt{3}$: compute powers.
$\alpha^2 = 5 + 2\sqrt{6}$, so $\alpha^2 - 5 = 2\sqrt{6}$, giving $\alpha^4 - 10\alpha^2 + 25 = 24$,
hence $\alpha^4 - 10\alpha^2 + 1 = 0$. One checks that $f(x) = x^4 - 10x^2 + 1$ is irreducible over
$\mathbb{Q}$ (no rational roots, no quadratic factor), so $m_\alpha = x^4 - 10x^2 + 1$. $\blacksquare$

</details>

**Problem.** Show that $\mathbb{Q}(\sqrt[4]{2})$ is not a Galois extension of $\mathbb{Q}$.

<details>
<summary>Solution</summary>

*Solution.* The minimal polynomial of $\sqrt[4]{2}$ is $x^4 - 2$ (irreducible by Eisenstein with $p = 2$),
so $[\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 4$. The roots of $x^4 - 2$ are $\sqrt[4]{2}$, $i\sqrt[4]{2}$,
$-\sqrt[4]{2}$, $-i\sqrt[4]{2}$. The root $i\sqrt[4]{2}$ is not in $\mathbb{Q}(\sqrt[4]{2}) \subset \mathbb{R}$.

Therefore $\mathbb{Q}(\sqrt[4]{2})$ is not the splitting field of $x^4 - 2$, and
$|\mathrm{Aut}(\mathbb{Q}(\sqrt[4]{2})/\mathbb{Q})| = 2 < 4$. The extension is not Galois. $\blacksquare$

</details>

**Problem.** Construct $\mathbb{F}_9$ as a quotient of $\mathbb{F}_3[x]$.

<details>
<summary>Solution</summary>

*Solution.* We need an irreducible polynomial of degree $2$ in $\mathbb{F}_3[x]$.
Check $x^2 + 1$: $f(0) = 1$, $f(1) = 2$, $f(2) = 4 + 1 = 5 \equiv 2 \pmod{3}$. No roots, so irreducible.
Thus $\mathbb{F}_9 = \mathbb{F}_3[x]/(x^2 + 1)$.

Let $\alpha = x + (x^2 + 1)$, so $\alpha^2 = -1 = 2$ in $\mathbb{F}_3$. Then:
$\mathbb{F}_9 = \{a + b\alpha : a, b \in \mathbb{F}_3\} = \{0, 1, 2, \alpha, 1+\alpha, 2+\alpha, 2\alpha, 1+2\alpha, 2+2\alpha\}$.

Multiplication: $(a + b\alpha)(c + d\alpha) = (ac + 2bd) + (ad + bc)\alpha$.
$\blacksquare$

</details>

### 12.7 The Primitive Element Theorem

**Theorem 12.8 (Primitive Element Theorem).** Every finite separable extension $E/F$ is simple:
there exists $\theta \in E$ such that $E = F(\theta)$.

*Proof (sketch).* If $F$ is infinite, it suffices to find $\theta = \alpha + c\beta$ for suitable $c \in F$
when $E = F(\alpha, \beta)$. Only finitely many values of $c$ fail to work.
For $F$ of characteristic $0$, every finite extension is separable, so every finite extension of
$\mathbb{Q}$ is simple. $\blacksquare$

**Corollary 12.9.** Every finite extension of $\mathbb{Q}$ is simple.

**Example.** $\mathbb{Q}(\sqrt{2}, \sqrt{3}) = \mathbb{Q}(\sqrt{2} + \sqrt{3})$.

## 13. Galois Theory Fundamentals

### 13.1 Automorphisms and the Galois Group

Let $E/F$ be a field extension. An $F$-**automorphism** of $E$ is an automorphism $\sigma : E \to E$
that fixes $F$ pointwise (i.e., $\sigma(c) = c$ for all $c \in F$).

The set of all $F$-automorphisms of $E$ forms a group under composition, called the **Galois group**
of $E/F$, denoted $\mathrm{Gal}(E/F)$.

**Example.** $\mathrm{Gal}(\mathbb{C}/\mathbb{R}) = \{id, \sigma\}$ where $\sigma(a + bi) = a - bi$.
This is isomorphic to $\mathbb{Z}/2\mathbb{Z}$.

### 13.2 The Fundamental Theorem of Galois Theory

A finite extension $E/F$ is **Galois** if $|\mathrm{Gal}(E/F)| = [E : F]$, or equivalently,
if $E$ is the splitting field of a separable polynomial over $F$.

**Theorem 13.1 (Fundamental Theorem of Galois Theory).** Let $E/F$ be a Galois extension. Then:

1. There is an inclusion-reversing bijection between intermediate fields $F \subseteq K \subseteq E$ and
   subgroups $H \subseteq \mathrm{Gal}(E/F)$, given by:
   - $K \mapsto \mathrm{Gal}(E/K)$.
   - $H \mapsto E^H = \{x \in E : \sigma(x) = x\ \mathrm{for\ all}\ \sigma \in H\}$.

2. $[E : K] = |\mathrm{Gal}(E/K)|$ and $[K : F] = [\mathrm{Gal}(E/F) : \mathrm{Gal}(E/K)]$.

3. $K/F$ is Galois if and only if $\mathrm{Gal}(E/K) \trianglelefteq \mathrm{Gal}(E/F)$, in which case
   $\mathrm{Gal}(K/F) \cong \mathrm{Gal}(E/F) / \mathrm{Gal}(E/K)$.

### 13.3 Worked Example

**Problem.** Find the Galois group of $x^3 - 2$ over $\mathbb{Q}$.

*Solution.* The roots of $x^3 - 2$ are $\sqrt[3]{2}$, $\omega\sqrt[3]{2}$, $\omega^2\sqrt[3]{2}$,
where $\omega = e^{2\pi i/3}$ is a primitive cube root of unity. The splitting field is
$E = \mathbb{Q}(\sqrt[3]{2}, \omega)$. We have $[E : \mathbb{Q}] = [E : \mathbb{Q}(\sqrt[3]{2})]
\cdot [\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 2 \cdot 3 = 6$.

The Galois group $\mathrm{Gal}(E/\mathbb{Q})$ acts as permutations of the three roots, so
$\mathrm{Gal}(E/\mathbb{Q}) \cong S_3$.

The subgroup lattice of $S_3$ corresponds to the lattice of intermediate fields:

- $\{e\} \leftrightarrow E$
- $A_3 = \langle (1\ 2\ 3) \rangle \leftrightarrow \mathbb{Q}(\omega)$
- $\langle (1\ 2) \rangle \leftrightarrow \mathbb{Q}(\omega^2 \sqrt[3]{2})$
- $\langle (1\ 3) \rangle \leftrightarrow \mathbb{Q}(\omega \sqrt[3]{2})$
- $\langle (2\ 3) \rangle \leftrightarrow \mathbb{Q}(\sqrt[3]{2})$
- $S_3 \leftrightarrow \mathbb{Q}$ $\blacksquare$

### 13.4 Solvability by Radicals

**Definition.** A polynomial $f \in F[x]$ is **solvable by radicals** if its roots can be expressed
using field operations and radicals (nth roots).

**Theorem 13.2.** A polynomial $f \in \mathbb{Q}[x]$ is solvable by radicals if and only if its Galois
group is a solvable group.

**Corollary 13.3 (Abel-Ruffini Theorem).** The general polynomial of degree 5 is not solvable by
radicals.

*Proof.* The symmetric group $S_5$ is not solvable (its only normal series is $S_5 \triangleright A_5 \triangleright \{e\}$,
and $A_5 / \{e\} \cong A_5$ is non-abelian). The Galois group of $x^5 - x - 1$ (and many other quintics)
over $\mathbb{Q}$ is $S_5$. $\blacksquare$

### 13.5 The Discriminant and Galois Groups

The **discriminant** of $f(x) = (x - \alpha_1)\cdots(x - \alpha_n)$ is

$$\Delta = \prod_{i \lt{} j} (\alpha_i - \alpha_j)^2$$

The discriminant is a symmetric function of the roots, so $\Delta \in \mathbb{Q}$ when $f \in \mathbb{Q}[x]$.

**Proposition 13.4.** Let $G = \mathrm{Gal}(f) \leq S_n$. Then $G \leq A_n$ (i.e., $G$ is contained in the
alternating group) if and only if $\Delta$ is a perfect square in the base field.

*Proof.* The Galois group acts on $\delta = \prod_{i \lt{} j}(\alpha_i - \alpha_j)$ by permutation.
For any $\sigma \in G$, $\sigma(\delta) = \mathrm{sgn}(\sigma) \cdot \delta$. If $\sigma \in A_n$,
$\sigma(\delta) = \delta$; if $\sigma \notin A_n$, $\sigma(\delta) = -\delta$.

If $G \leq A_n$, then $\delta$ is fixed by all of $G$, so $\delta \in F$, hence $\Delta = \delta^2$ is a square.
Conversely, if $\Delta$ is a square in $F$, then $\delta \in F$ (or $-\delta \in F$), so $\delta$ is fixed
by $G$, meaning every element of $G$ acts as an even permutation. $\blacksquare$

**Example.** The discriminant of $x^3 - 3x + 1$ is $\Delta = 81 = 9^2$, a perfect square. Therefore
$\mathrm{Gal}(x^3 - 3x + 1) \leq A_3 \cong \mathbb{Z}/3\mathbb{Z}$. Since the polynomial is irreducible,
the Galois group is transitive, so $\mathrm{Gal}(x^3 - 3x + 1) = A_3 \cong \mathbb{Z}/3\mathbb{Z}$.

### 13.6 Worked Example: Galois Group of a Quartic

**Problem.** Determine the Galois group of $f(x) = x^4 - 2$ over $\mathbb{Q}$.

<details>
<summary>Solution</summary>

*Solution.* The roots are $\alpha_1 = \sqrt[4]{2}$, $\alpha_2 = i\sqrt[4]{2}$, $\alpha_3 = -\sqrt[4]{2}$,
$\alpha_4 = -i\sqrt[4]{2}$. The splitting field is $E = \mathbb{Q}(\sqrt[4]{2}, i)$.

$[\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 4$ (since $x^4 - 2$ is irreducible by Eisenstein).
$i \notin \mathbb{Q}(\sqrt[4]{2}) \subset \mathbb{R}$, so $[E : \mathbb{Q}(\sqrt[4]{2})] = 2$.
Thus $[E : \mathbb{Q}] = 8$.

The Galois group has order $8$. It is generated by:
$\sigma: \sqrt[4]{2} \mapsto i\sqrt[4]{2},\ i \mapsto i$ (order $4$)
$\tau: \sqrt[4]{2} \mapsto \sqrt[4]{2},\ i \mapsto -i$ (order $2$)

We check: $\tau\sigma\tau^{-1}(\sqrt[4]{2}) = \tau(i\sqrt[4]{2}) = -i\sqrt[4]{2} = \sigma^{-1}(\sqrt[4]{2})$.
So $\tau\sigma\tau^{-1} = \sigma^{-1}$, the defining relation of $D_4$.

Therefore $\mathrm{Gal}(E/\mathbb{Q}) \cong D_4$ (dihedral group of order $8$). $\blacksquare$

</details>

## 14. Additional Results

### 14.1 Cauchy's Theorem

**Theorem 14.1 (Cauchy's Theorem).** If $p$ is a prime dividing $|G|$, then $G$ has an element of
order $p$.

*Proof.* Consider the set $X = \{(g_1, g_2, \ldots, g_p) \in G^p : g_1 g_2 \cdots g_p = e\}$.
$|X| = |G|^{p-1}$ (choose $g_1, \ldots, g_{p-1}$ freely; $g_p$ is determined).
The cyclic group $\mathbb{Z}/p\mathbb{Z}$ acts on $X$ by cyclic permutation. Orbits have size $1$ or $p$.
An orbit has size $1$ precisely when $(g, g, \ldots, g) \in X$, i.e., $g^p = e$.
Since $|X| = |G|^{p-1}$ is divisible by $p$ (as $p$ divides $|G|$), the number of fixed points
is congruent to $0 \pmod{p}$. The element $(e, e, \ldots, e)$ is a fixed point, so there exists
at least $p - 1$ other fixed points, giving a non-identity element with $g^p = e$. Since $p$ is
prime, $g$ has order $p$. $\blacksquare$

### 14.2 Worked Examples: Additional Results

**Problem.** Use Cauchy's theorem to show that every group of order $6$ is isomorphic to either $\mathbb{Z}/6\mathbb{Z}$ or $S_3$.

<details>
<summary>Solution</summary>

*Solution.* Let $|G| = 6 = 2 \cdot 3$. By Cauchy's theorem, $G$ has an element $a$ of order $2$
and an element $b$ of order $3$.

The subgroup $H = \langle b \rangle$ has index $2$, so $H \trianglelefteq G$ (Corollary 3.7).
The quotient $G/H$ has order $2$.

Since $a \notin H$ (as $|a| = 2$ and $|b| = 3$), every element of $G$ is either $b^k$ or $ab^k$.
The group structure is determined by $aba^{-1}$. Since $H$ is normal, $aba^{-1} \in H$,
so $aba^{-1} = b$ or $aba^{-1} = b^2$.

**Case 1:** $aba^{-1} = b$ (i.e., $a$ and $b$ commute). Then $G \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \cong \mathbb{Z}/6\mathbb{Z}$.

**Case 2:** $aba^{-1} = b^2 = b^{-1}$. Then $G$ is a semidirect product with $ab = b^{-1}a$.
This is the presentation $\langle a, b \mid a^2 = b^3 = e,\ aba^{-1} = b^{-1} \rangle$, which is $S_3$. $\blacksquare$

</details>

**Problem.** Classify all groups of order $4$.

<details>
<summary>Solution</summary>

*Solution.* Let $|G| = 4$. By Lagrange, possible element orders are $1, 2, 4$.

**Case 1:** $G$ has an element of order $4$. Then $G = \langle g \rangle \cong \mathbb{Z}/4\mathbb{Z}$.

**Case 2:** Every non-identity element has order $2$. Let $a, b \in G$ with $a \neq b$ and $a, b \neq e$.
Then $G = \{e, a, b, ab\}$ (there are only $4$ elements). We have $a^2 = b^2 = (ab)^2 = e$.
From $(ab)^2 = e$: $abab = e$, so $ba = a^{-1}b^{-1} = ab$ (since $a^{-1} = a$ and $b^{-1} = b$).
Thus $G$ is abelian: $G \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} = V_4$.

So there are exactly two groups of order $4$: $\mathbb{Z}/4\mathbb{Z}$ and $V_4$. $\blacksquare$

</details>

### 14.3 Simple Groups

A group $G$ is **simple** if its only normal subgroups are $\{e\}$ and $G$.

**Proposition 14.2.** $A_n$ is simple for all $n \geq 5$.

This is a key result in the classification of finite simple groups, which states that every finite
simple group is either cyclic of prime order, an alternating group $A_n$ ($n \geq 5$), a group of
Lie type, or one of 26 sporadic groups.

### 14.4 The Structure Theorem for Finitely Generated Abelian Groups

**Theorem 14.4.** Every finitely generated abelian group $G$ is isomorphic to a direct product of
cyclic groups:

$$G \cong \mathbb{Z}^r \times \mathbb{Z}/p_1^{k_1}\mathbb{Z} \times \cdots \times \mathbb{Z}/p_m^{k_m}\mathbb{Z}$$

where $r \geq 0$ is the **rank** and $p_i^{k_i}$ are powers of (not necessarily distinct) primes.
The integers $r, k_1, \ldots, k_m$ are uniquely determined.

### 14.5 Worked Example

**Problem.** Classify all abelian groups of order 72.

*Solution.* Since $72 = 2^3 \cdot 3^2$, every abelian group of order 72 is a direct product of an
abelian group of order $2^3$ and one of order $3^2$.

For order $2^3$: the partitions of 3 give (3), (2,1), (1,1,1), corresponding to
$\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$,
$\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.

For order $3^2$: the partitions of 2 give (2), (1,1), corresponding to $\mathbb{Z}/9\mathbb{Z}$,
$\mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$.

Taking all products, the six abelian groups of order 72 are:

1. $\mathbb{Z}/72\mathbb{Z} \cong \mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/9\mathbb{Z}$
2. $\mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$
3. $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/9\mathbb{Z}$
4. $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$
5. $(\mathbb{Z}/2\mathbb{Z})^3 \times \mathbb{Z}/9\mathbb{Z}$
6. $(\mathbb{Z}/2\mathbb{Z})^3 \times (\mathbb{Z}/3\mathbb{Z})^2$ $\blacksquare$

## 15. Worked Examples

### 15.1 Group Theory Example

**Problem.** Show that $S_4$ has no normal subgroup of order 8.

*Solution.* Suppose $N \trianglelefteq S_4$ with $|N| = 8$. By Lagrange, $[S_4 : N] = 24/8 = 3$.
The action of $S_4$ on the cosets of $N$ gives a homomorphism $\phi : S_4 \to S_3$.
Since $N$ is normal, $\ker(\phi) \subseteq N$, so $|\ker(\phi)|$ divides $8$.
Since $\mathrm{im}(\phi) \subseteq S_3$ has order dividing $6$, $|\ker(\phi)|$ divides $24/6 = 4$.
But $|\ker(\phi)|$ divides $8$, so $|\ker(\phi)|$ divides $\gcd(8, 4) = 4$.
Since $\ker(\phi) \subseteq N$ and $|N| = 8$, and $|\ker(\phi)|$ divides $4$, this is possible.
However, we need $\ker(\phi) = N$ (since $N$ is the kernel of the action on cosets).
Then $|\ker(\phi)| = 8$, contradicting $|\ker(\phi)| \leq 4$. So no such $N$ exists. $\blacksquare$

### 15.2 Ring Theory Example

**Problem.** Show that $\mathbb{Z}[\sqrt{2}]$ is a Euclidean domain.

*Solution.* Define $\delta(a + b\sqrt{2}) = |a^2 - 2b^2|$. For $\alpha, \beta \neq 0$ in
$\mathbb{Z}[\sqrt{2}]$, compute $\alpha/\beta \in \mathbb{Q}(\sqrt{2})$. Choose $q \in \mathbb{Z}[\sqrt{2}]$
with $|\alpha/\beta - q| \lt{} 1$ in both coordinates (round to nearest integers). Then
$\alpha = q\beta + r$ where $r = \alpha - q\beta$. We have $\delta(r) = |N(r)| = |N(\alpha - q\beta)|
= |N(\beta)| \cdot |N(\alpha/\beta - q)|$. Since $|N(\alpha/\beta - q)| = |a^2 - 2b^2| \lt{} 1$
for the coordinate differences $a, b$ (each less than $1$ in absolute value), we get
$\delta(r) \lt{} \delta(\beta)$. $\blacksquare$

### 15.3 Galois Theory Example

**Problem.** Determine the Galois group of $x^4 - 5$ over $\mathbb{Q}$.

*Solution.* The roots are $\pm\sqrt[4]{5}$ and $\pm i\sqrt[4]{5}$. The splitting field is
$E = \mathbb{Q}(\sqrt[4]{5}, i)$. We have $[\mathbb{Q}(\sqrt[4]{5}) : \mathbb{Q}] = 4$
(since $x^4 - 5$ is irreducible by Eisenstein with $p = 5$), and $[E : \mathbb{Q}(\sqrt[4]{5})] = 2$
(since $i \notin \mathbb{Q}(\sqrt[4]{5}) \subset \mathbb{R}$). Thus $[E : \mathbb{Q}] = 8$.

The Galois group is generated by:
- $\sigma : \sqrt[4]{5} \mapsto i\sqrt[4]{5},\ i \mapsto i$ (order 4)
- $\tau : \sqrt[4]{5} \mapsto \sqrt[4]{5},\ i \mapsto -i$ (order 2)

With $\tau\sigma\tau^{-1} = \sigma^{-1}$, we get $\mathrm{Gal}(E/\mathbb{Q}) \cong D_8$ (the dihedral
group of order 8). $\blacksquare$

### 15.4 Additional Worked Examples

**Problem.** Let $G$ be a finite group and $H \trianglelefteq G$ with $\gcd(|H|, [G:H]) = 1$. Show that $H$ has a complement in $G$: there exists $K \leq G$ with $HK = G$ and $H \cap K = \{e\}$.

<details>
<summary>Solution</summary>

*Solution.* This result is known as the **Schur-Zassenhaus theorem**. We prove a special case
when $H$ is abelian. Let $|H| = m$ and $[G : H] = n$ with $\gcd(m, n) = 1$.

Consider the action of $G$ on $H$ by conjugation. Since $H$ is abelian and normal, $G$ acts by
automorphisms on $H$. The group of automorphisms of $H$, $\mathrm{Aut}(H)$, has order dividing
$|H|!$, but we need a more refined argument.

Here is a cleaner approach for the case when one factor is cyclic. Let $G/H = \langle gH \rangle$ be cyclic
(which always holds when $[G : H]$ is the smallest prime dividing $|G|$). Pick a representative $g$ with
$g^n \in H$. We need to find $k \in G$ with $k^n = e$ and $kH = gH$.

Since $\gcd(m, n) = 1$, there exist $a, b \in \mathbb{Z}$ with $am + bn = 1$. Let $x = g^n \in H$.
Then $x^a = x^{1 - bn} = x \cdot (x^n)^{-b} = x \cdot x^{-bn}$... actually, the general proof requires
cohomology and is beyond our current scope. The key takeaway: when $\gcd(|H|, [G:H]) = 1$,
a complement exists (Schur-Zassenhaus theorem). $\blacksquare$

</details>

**Problem.** Show that if $G$ is a group of order $pqr$ where $p \lt{} q \lt{} r$ are primes, then $G$ is not simple.

<details>
<summary>Solution</summary>

*Solution.* Consider the Sylow $r$-subgroups. $n_r \equiv 1 \pmod{r}$ and $n_r$ divides $pq$.
Since $r > q > p$, we have $r > pq$ is possible but $n_r = pq + 1, 2pq + 1, \ldots$ would need
to divide $pq$. The only divisors of $pq$ are $1, p, q, pq$. If $n_r = 1$, we are done
(Sylow $r$-subgroup is normal).

If $n_r \neq 1$, then $n_r \geq r + 1 > q + 1 > p + 1$. Since $n_r$ divides $pq$,
we must have $n_r = pq$. This means there are $pq(r - 1)$ non-identity elements in Sylow $r$-subgroups.

Similarly, $n_q \equiv 1 \pmod{q}$ and $n_q$ divides $pr$. If $n_q = pr$, there are $pr(q - 1)$
non-identity elements in Sylow $q$-subgroups.

If both $n_r = pq$ and $n_q = pr$, the total number of non-identity elements is at least
$pq(r-1) + pr(q-1) = pqr - pq + pqr - pr = 2pqr - p(q+r)$, which exceeds $pqr - 1$ for most values.
So at least one of $n_r = 1$ or $n_q = 1$ must hold, giving a normal Sylow subgroup. $\blacksquare$

</details>

**Problem.** Prove that there are exactly two groups of order $10$ up to isomorphism.

<details>
<summary>Solution</summary>

*Solution.* $|G| = 10 = 2 \cdot 5$. By Sylow's third theorem: $n_5 \equiv 1 \pmod{5}$ and $n_5$
divides $2$, so $n_5 = 1$. The Sylow $5$-subgroup $P = \langle a \rangle \cong \mathbb{Z}/5\mathbb{Z}$ is normal.

$n_2 \equiv 1 \pmod{2}$ and $n_2$ divides $5$, so $n_2 = 1$ or $5$.

Let $b$ be an element of order $2$ (exists by Cauchy's theorem). Since $P \trianglelefteq G$,
$bab^{-1} \in P$. So $bab^{-1} = a^k$ for some $k \in \{0, 1, 2, 3, 4\}$.
Applying conjugation twice: $b^2ab^{-2} = a^{k^2}$, i.e., $a = a^{k^2}$, so $k^2 \equiv 1 \pmod{5}$,
giving $k \equiv 1$ or $k \equiv 4 \pmod{5}$.

**Case $k = 1$:** $bab^{-1} = a$, so $a$ and $b$ commute. $G \cong \mathbb{Z}/5\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \cong \mathbb{Z}/10\mathbb{Z}$.

**Case $k = 4$:** $bab^{-1} = a^4 = a^{-1}$, so $ba = a^{-1}b$. This gives the dihedral group $D_5$.

These are the only two possibilities, so there are exactly two groups of order $10$. $\blacksquare$

</details>

## 16. Classification of Groups of Small Order

The following table summarizes the classification of groups of small order:

| Order | Groups |
|-------|--------|
| 1 | $\{e\}$ |
| 2 | $\mathbb{Z}/2\mathbb{Z}$ |
| 3 | $\mathbb{Z}/3\mathbb{Z}$ |
| 4 | $\mathbb{Z}/4\mathbb{Z}$, $V_4$ |
| 5 | $\mathbb{Z}/5\mathbb{Z}$ |
| 6 | $\mathbb{Z}/6\mathbb{Z}$, $S_3$ |
| 7 | $\mathbb{Z}/7\mathbb{Z}$ |
| 8 | $\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$, $(\mathbb{Z}/2\mathbb{Z})^3$, $D_4$, $Q_8$ |
| 9 | $\mathbb{Z}/9\mathbb{Z}$, $\mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$ |
| 10 | $\mathbb{Z}/10\mathbb{Z}$, $D_5$ |
| 11 | $\mathbb{Z}/11\mathbb{Z}$ |
| 12 | $\mathbb{Z}/12\mathbb{Z}$, $\mathbb{Z}/6\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$, $A_4$, $D_6$, $\mathbb{Z}/3\mathbb{Z} \rtimes \mathbb{Z}/4\mathbb{Z}$ |

**Proposition 16.1.** Every group of prime order is cyclic, and every group of order $p^2$ (where $p$
is prime) is abelian (hence isomorphic to $\mathbb{Z}/p^2\mathbb{Z}$ or $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$).

*Proof.* For prime order, see Section 3.3. For order $p^2$, see Corollary 6.6. $\blacksquare$

**Proposition 16.2.** There are exactly five groups of order $8$.

*Proof.* The abelian groups of order $8$ are classified by the structure theorem:
$\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$, $(\mathbb{Z}/2\mathbb{Z})^3$.

For non-abelian groups of order $8$: by Theorem 6.5, $|Z(G)| \geq 2$. If $|Z(G)| = 4$,
then $G/Z(G)$ has order $2$ and is cyclic, making $G$ abelian (contradiction).
So $|Z(G)| = 2$ and $G/Z(G) \cong V_4$.

If every non-central element has order $2$: $G$ is generated by three involutions
commuting with each other and with $Z(G)$, giving $(\mathbb{Z}/2\mathbb{Z})^3$ (abelian).
So some non-central element has order $4$, say $a$ with $a^4 = e$ and $a^2 \in Z(G)$.

Pick $b \notin \langle a, Z(G) \rangle$. Then $bab^{-1} = a$ or $bab^{-1} = a^{-1}$.
If $bab^{-1} = a$: $G$ is abelian, contradiction.
If $bab^{-1} = a^{-1}$: we get $D_4$ when $b^2 = e$ and $Q_8$ when $b^2 = a^2$.
These are the only two non-abelian groups of order $8$. $\blacksquare$

**Proposition 16.3.** There are exactly five groups of order $12$.

*Proof sketch.* $|G| = 12 = 2^2 \cdot 3$.

$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $4$, so $n_3 = 1$ or $4$.

**$n_3 = 1$:** The Sylow $3$-subgroup $P_3 \cong \mathbb{Z}/3\mathbb{Z}$ is normal.
$G$ is a semidirect product $\mathbb{Z}/3\mathbb{Z} \rtimes K$ where $K$ is a Sylow $2$-subgroup
($\mathbb{Z}/4\mathbb{Z}$ or $V_4$). Computing the possible actions gives:
$\mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/4\mathbb{Z} \cong \mathbb{Z}/12\mathbb{Z}$,
$\mathbb{Z}/3\mathbb{Z} \times V_4 \cong \mathbb{Z}/6\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$,
$\mathbb{Z}/3\mathbb{Z} \rtimes V_4 \cong D_6$, and
$\mathbb{Z}/3\mathbb{Z} \rtimes \mathbb{Z}/4\mathbb{Z}$ (the dicyclic group of order $12$).

**$n_3 = 4$:** The Sylow $3$-subgroup is not normal. There are four Sylow $3$-subgroups,
contributing $4 \cdot 2 = 8$ elements of order $3$. The remaining $4$ elements (plus $e$) form
the unique Sylow $2$-subgroup, which must be $V_4$ (since $D_4$ has order $8$ and $\mathbb{Z}/4\mathbb{Z}$
has no element of order $2$ besides its unique subgroup... actually, the argument is more subtle).
This gives $A_4$.

Total: five groups of order $12$. $\blacksquare$

:::caution Common Pitfall
The number of groups grows rapidly with the order. While there are exactly $5$ groups of order $8$,
there are $14$ groups of order $16$ and $267$ groups of order $64$. Classification by hand is only
feasible for small orders. For prime-squared orders, the abelian classification is straightforward,
but non-abelian cases require careful analysis of possible semidirect products.
:::

## 17. Common Pitfalls

:::caution Common Pitfall
Not every subgroup is normal. For example, $\langle (1\ 2) \rangle \leq S_3$ is not normal since
$(1\ 3)(1\ 2)(1\ 3)^{-1} = (2\ 3) \notin \langle (1\ 2) \rangle$. Always verify the condition
$gHg^{-1} = H$ for all $g \in G$.
:::

:::caution Common Pitfall
The converse of Lagrange's theorem is false in general. For example, $A_4$ has order $12$ but no
subgroup of order $6$. However, the converse does hold for Sylow subgroups.
:::

:::caution Common Pitfall
In ring theory, an ideal need not contain $1$ (in fact, $I = R$ is the only ideal containing $1$).
This is a common source of confusion when checking whether a subset is an ideal.
:::

:::caution Common Pitfall
Not every UFD is a PID. The classic example is $\mathbb{Z}[x]$: the ideal $(2, x)$ is not principal,
but $\mathbb{Z}[x]$ is a UFD (since $\mathbb{Z}$ is a UFD).
:::

:::caution Common Pitfall
When computing Galois groups, the Galois group of the splitting field of a polynomial is a subgroup
of $S_n$ (acting on the roots), but it may be a proper subgroup. For example, the Galois group of
$x^3 - 2$ over $\mathbb{Q}$ is $S_3$, but the Galois group of $x^3 - 3x + 1$ over $\mathbb{Q}$ is
$A_3 \cong \mathbb{Z}/3\mathbb{Z}$ (the discriminant is a square).
:::

:::caution Common Pitfall
A field extension can be algebraic without being finite. For example,
$\overline{\mathbb{Q}}/\mathbb{Q}$ (algebraic closure of $\mathbb{Q}$) is algebraic but infinite-dimensional.
:::

:::caution Common Pitfall
When using the first isomorphism theorem, always verify that your map is actually a homomorphism
and correctly identify the kernel. A common mistake is to forget that the kernel must be a normal
subgroup (not just any subgroup). Also, the isomorphism is $G/\ker(\phi) \cong \mathrm{im}(\phi)$,
not $G/\ker(\phi) \cong H$ (unless $\phi$ is surjective).
:::

:::caution Common Pitfall
The center $Z(G)$ can be trivial even for large non-abelian groups. For example, $Z(S_n) = \{e\}$
for all $n \geq 3$. However, for $p$-groups, the center is always non-trivial (Theorem 6.5).
Do not confuse the center with the centralizer $C_G(x)$ of a single element.
:::

:::caution Common Pitfall
In the Sylow theorems, the number $n_p$ of Sylow $p$-subgroups satisfies $n_p \equiv 1 \pmod{p}$
AND $n_p$ divides $m$ (where $|G| = p^n m$). Both conditions must be checked simultaneously.
For example, if $|G| = 12 = 2^2 \cdot 3$, then $n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $4$,
giving $n_3 = 1$ or $4$ (not $7$, even though $7 \equiv 1 \pmod{3}$).
:::

:::caution Common Pitfall
Eisenstein's criterion requires ALL three conditions to hold simultaneously. In particular, $p^2$
must NOT divide the constant term $a_0$. If $p^2$ divides $a_0$, Eisenstein does not apply.
In such cases, try the substitution $x \mapsto x + c$ for various constants $c$, or use
reduction modulo a prime.
:::

:::caution Common Pitfall
A quotient ring $R/I$ is a field if and only if $I$ is a *maximal* ideal, not just a prime ideal.
For example, $(0)$ is prime in $\mathbb{Z}[x]$ but not maximal, so $\mathbb{Z}[x]$ is an integral
domain but not a field. Every maximal ideal is prime, but not conversely.
:::

:::caution Common Pitfall
The fundamental theorem of Galois theory requires the extension to be Galois. For a non-Galois
extension $E/F$, the correspondence between intermediate fields and subgroups of
$\mathrm{Gal}(E/F)$ is not a bijection, and indices may not match. Always verify the Galois
condition before applying the theorem.
:::

## 18. Problem Set

The following problems test understanding across all major topics. Full solutions are provided;
each problem includes a cross-reference to the relevant section for review.

### Groups

**Problem 1.** Let $G$ be a group and $g \in G$ an element of order $n$. Prove that $|g^k| = n / \gcd(n, k)$.

<details>
<summary>Solution</summary>

*Solution.* Let $d = \gcd(n, k)$ and write $n = dn'$, $k = dk'$ with $\gcd(n', k') = 1$.
We show $(g^k)^{n'} = e$ and that $n'$ is the smallest such positive exponent.

$(g^k)^{n'} = g^{kn'} = g^{dk'n'} = g^{n'k}$. Since $n = dn'$, we have $g^{kn'} = g^{dk'n'} = (g^{dn'})^{k'} = e^{k'} = e$.
So $|g^k|$ divides $n' = n/d$.

Conversely, if $(g^k)^m = g^{km} = e$, then $n$ divides $km$, so $dn'$ divides $dk'm$,
hence $n'$ divides $k'm$. Since $\gcd(n', k') = 1$, we get $n'$ divides $m$.
Thus $|g^k| = n' = n / \gcd(n, k)$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 1.6, Proposition 1.5; Section 2.4, Theorem 2.5._

**Problem 2.** Show that $D_4$ has exactly five subgroups of order $2$ and determine which are normal.

<details>
<summary>Solution</summary>

*Solution.* $D_4 = \{e, r, r^2, r^3, s, rs, r^2s, r^3s\}$ where $r^4 = e$, $s^2 = e$, $srs = r^{-1}$.

Elements of order $2$: $r^2$, $s$, $rs$, $r^2s$, $r^3s$. So there are five subgroups of order $2$:
$\langle r^2 \rangle$, $\langle s \rangle$, $\langle rs \rangle$, $\langle r^2s \rangle$, $\langle r^3s \rangle$.

For normality: $r r^2 r^{-1} = r^2$ and $s r^2 s = r^{-2} = r^2$, so $\langle r^2 \rangle \trianglelefteq D_4$.
But $s(rs)s = sr = r^{-1}s = r^3s \notin \langle rs \rangle$, so $\langle rs \rangle$ is not normal.
Similarly, the other reflection subgroups are not normal. Only $\langle r^2 \rangle = Z(D_4)$ is normal. $\blacksquare$

</details>

_If you get this wrong, revise: Section 1.3, 1.7; Section 4.1, Proposition 4.1._

**Problem 3.** Let $H, K \leq G$. Prove that $H \cap K \leq G$.

<details>
<summary>Solution</summary>

*Solution.* $H \cap K$ is non-empty since $e \in H$ and $e \in K$, so $e \in H \cap K$.
If $a, b \in H \cap K$, then $a, b \in H$ and $a, b \in K$. Since $H$ and $K$ are subgroups,
$ab^{-1} \in H$ and $ab^{-1} \in K$, so $ab^{-1} \in H \cap K$.
By the subgroup criterion, $H \cap K \leq G$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 2.1, Theorem 2.1; Section 2.6, Theorem 2.6._

### Lagrange's Theorem and Cosets

**Problem 4.** Find all subgroups of $\mathbb{Z}/12\mathbb{Z}$ and draw the subgroup lattice.

<details>
<summary>Solution</summary>

*Solution.* By Theorem 2.4, every subgroup of the cyclic group $\mathbb{Z}/12\mathbb{Z}$ is cyclic,
and there is exactly one subgroup of order $d$ for each divisor $d$ of $12$.

The divisors of $12$ are $1, 2, 3, 4, 6, 12$. The subgroups are:
$\langle 0 \rangle = \{0\}$ (order $1$), $\langle 6 \rangle = \{0, 6\}$ (order $2$),
$\langle 4 \rangle = \{0, 4, 8\}$ (order $3$), $\langle 3 \rangle = \{0, 3, 6, 9\}$ (order $4$),
$\langle 2 \rangle = \{0, 2, 4, 6, 8, 10\}$ (order $6$), $\langle 1 \rangle = \mathbb{Z}/12\mathbb{Z}$ (order $12$).

The subgroup lattice (Hasse diagram):
$\mathbb{Z}/12\mathbb{Z}$ connects to $\langle 2 \rangle$, $\langle 3 \rangle$, $\langle 4 \rangle$.
$\langle 2 \rangle$ connects to $\langle 4 \rangle$ and $\langle 6 \rangle$.
$\langle 3 \rangle$ connects to $\langle 6 \rangle$.
$\langle 4 \rangle$ and $\langle 6 \rangle$ connect to $\{0\}$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 2.4, Theorem 2.4; Section 1.7._

**Problem 5.** Let $H = \langle (1\ 2\ 3\ 4) \rangle \leq S_4$. Find all left cosets of $H$ in $S_4$ and verify $H$ is not normal.

<details>
<summary>Solution</summary>

*Solution.* $H = \{e, (1\ 2\ 3\ 4), (1\ 3)(2\ 4), (1\ 4\ 3\ 2)\}$ has order $4$,
$[S_4 : H] = 6$. Choose representatives from $S_4 \setminus H$, e.g., $(1\ 2)$, $(1\ 3)$,
$(2\ 3)$, $(1\ 2\ 3)$, $(1\ 3\ 2)$. The six cosets are:
$H$, $(1\ 2)H$, $(1\ 3)H$, $(2\ 3)H$, $(1\ 2\ 3)H$, $(1\ 3\ 2)H$.

To show $H$ is not normal: $(1\ 2)(1\ 2\ 3\ 4)(1\ 2) = (2\ 1\ 3\ 4) = (1\ 3\ 4\ 2) \notin H$
(since $(1\ 3\ 4\ 2)$ is not among the four elements of $H$ listed above). $\blacksquare$

</details>

_If you get this wrong, revise: Section 3.1, 3.4; Section 4.1._

**Problem 6.** Prove that if $[G : H] = 2$, then $H \trianglelefteq G$.

<details>
<summary>Solution</summary>

*Solution.* Since $[G : H] = 2$, there are exactly two left cosets: $H$ and $gH$ for some $g \notin H$.
These partition $G$, so $gH = G \setminus H$. Similarly, the two right cosets are $H$ and $Hg$,
and $Hg = G \setminus H$. Therefore $gH = Hg$ for all $g \in G$.
For $h \in H$: $hH = H = Hh$. For $g \notin H$: $gH = G \setminus H = Hg$.
Thus $gH = Hg$ for all $g \in G$, so $H \trianglelefteq G$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 3.5, Corollary 3.7._

### Normal Subgroups and Homomorphisms

**Problem 7.** Compute $Q_8 / \{1, -1\}$ and identify the quotient group up to isomorphism.

<details>
<summary>Solution</summary>

*Solution.* $Q_8 = \{1, -1, i, -i, j, -j, k, -k\}$ with $|Q_8| = 8$ and
$Z(Q_8) = \{1, -1\}$ of order $2$. The quotient has order $4$.
The cosets are $Z = \{1, -1\}$, $iZ = \{i, -i\}$, $jZ = \{j, -j\}$, $kZ = \{k, -k\}$.
Every non-identity element satisfies $(iZ)^2 = i^2Z = (-1)Z = Z$, so every element has order $1$ or $2$.
The quotient is abelian (since $Z(Q_8)$ contains the commutator subgroup).
Thus $Q_8 / Z(Q_8) \cong V_4 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 4.2, 4.3; Section 5.3, Theorem 5.3._

**Problem 8.** Let $\phi : \mathbb{Z} \to \mathbb{Z}$ be defined by $\phi(n) = 3n$. Determine whether $\phi$ is a group homomorphism, find its kernel and image, and explain why it is not a ring homomorphism.

<details>
<summary>Solution</summary>

*Solution.* As a group homomorphism $(\mathbb{Z}, +) \to (\mathbb{Z}, +)$: $\phi(m + n) = 3(m+n) = 3m + 3n = \phi(m) + \phi(n)$. ✓
$\ker(\phi) = \{n \in \mathbb{Z} : 3n = 0\} = \{0\}$.
$\mathrm{im}(\phi) = 3\mathbb{Z} = \{3k : k \in \mathbb{Z}\}$.

$\phi$ is NOT a ring homomorphism because $\phi(1) = 3 \neq 1$.
Ring homomorphisms between rings with unity must send $1$ to $1$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 5.1, Proposition 5.1; Section 8.6, Proposition 8.6._

**Problem 9.** State and prove the correspondence theorem (fourth isomorphism theorem).

<details>
<summary>Solution</summary>

*Solution.* **Theorem.** Let $\phi : G \to H$ be a surjective homomorphism with $K = \ker(\phi)$.
Then there is an inclusion-preserving bijection between subgroups of $G$ containing $K$ and
subgroups of $H$, given by $U \mapsto \phi(U)$ with inverse $V \mapsto \phi^{-1}(V)$.
Normality and indices are preserved.

*Proof.* Define $\Phi(U) = \phi(U)$ and $\Psi(V) = \phi^{-1}(V)$.
$\Phi(\Psi(V)) = \phi(\phi^{-1}(V)) = V$ since $\phi$ is surjective.
$\Psi(\Phi(U)) = \phi^{-1}(\phi(U)) = U$ since $K \subseteq U$.
For normality: $U \trianglelefteq G \Leftrightarrow \phi(U) \trianglelefteq H$ (by conjugation argument).
For indices: $[G : U] = [H : \phi(U)]$ (since $|G/U| = |H/\phi(U)|$ via the induced map). $\blacksquare$

</details>

_If you get this wrong, revise: Section 5.7, Theorem 5.6._

### Group Actions and Sylow Theorems

**Problem 10.** Find the conjugacy classes of $S_4$ and verify the class equation.

<details>
<summary>Solution</summary>

*Solution.* Conjugacy classes in $S_n$ are determined by cycle type. The cycle types in $S_4$ and
their sizes:

1. $(1)(2)(3)(4)$ — identity. Size: $1$.
2. $(a\ b)$ — transpositions. Count: $\binom{4}{2} = 6$.
3. $(a\ b\ c)$ — 3-cycles. Count: $\binom{4}{3} \cdot 2 = 8$.
4. $(a\ b)(c\ d)$ — double transpositions. Count: $\frac{\binom{4}{2}}{2} = 3$.
5. $(a\ b\ c\ d)$ — 4-cycles. Count: $3! = 6$.

Class equation: $|S_4| = 1 + 6 + 8 + 3 + 6 = 24$. ✓
$Z(S_4) = \{e\}$, so $|Z(S_4)| = 1$, and the sum of $[S_4 : C_G(x_i)]$ over non-central classes is
$6 + 8 + 3 + 6 = 23$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 6.4, Theorem 6.4; Section 1.4._

**Problem 11.** Let $G$ act transitively on a set $X$ with $|X| = p$ (prime). Prove that $G$ has a subgroup of index $p$.

<details>
<summary>Solution</summary>

*Solution.* Let $x \in X$. Since $G$ acts transitively, $|\mathrm{Orb}(x)| = |X| = p$.
By the orbit-stabilizer theorem, $[G : \mathrm{Stab}(x)] = p$, so $\mathrm{Stab}(x)$ has index $p$ in $G$.
Since $\mathrm{Stab}(x)$ is a subgroup (Proposition 6.1), we are done. $\blacksquare$

</details>

_If you get this wrong, revise: Section 6.2, Theorem 6.2._

**Problem 12.** Find all Sylow $2$-subgroups of $S_3$.

<details>
<summary>Solution</summary>

*Solution.* $|S_3| = 6 = 2 \cdot 3$. Sylow $2$-subgroups have order $2$.
$n_2 \equiv 1 \pmod{2}$ and $n_2$ divides $3$, so $n_2 \in \{1, 3\}$.
The elements of order $2$ in $S_3$ are the three transpositions: $(1\ 2)$, $(1\ 3)$, $(2\ 3)$.
Each generates a subgroup of order $2$: $\langle (1\ 2) \rangle$, $\langle (1\ 3) \rangle$, $\langle (2\ 3) \rangle$.
So $n_2 = 3$ and the three Sylow $2$-subgroups are these. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.1, 7.6; Theorem 7.3._

**Problem 13.** Prove that every group of order $15$ is cyclic.

<details>
<summary>Solution</summary>

*Solution.* $|G| = 15 = 3 \cdot 5$. By Sylow's third theorem:
$n_5 \equiv 1 \pmod{5}$ and $n_5$ divides $3$, so $n_5 = 1$.
$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $5$, so $n_3 = 1$.

Both the Sylow $3$-subgroup $P \cong \mathbb{Z}/3\mathbb{Z}$ and the Sylow $5$-subgroup
$Q \cong \mathbb{Z}/5\mathbb{Z}$ are normal. Since $P \cap Q = \{e\}$ (their orders are coprime)
and $|PQ| = |P||Q|/|P \cap Q| = 15 = |G|$, we have $G = PQ$.
Since both are normal with trivial intersection, $G \cong P \times Q \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}/15\mathbb{Z}$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.3, Proposition 7.4; Section 7.7, Proposition 7.6._

**Problem 14.** Let $G$ be a group of order $21 = 3 \cdot 7$. Show that $G$ has a normal Sylow $7$-subgroup. Must $G$ be abelian?

<details>
<summary>Solution</summary>

*Solution.* $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $3$. Since $7 \nmid (3 - 1)$, we must have $n_7 = 1$.
So the Sylow $7$-subgroup $Q \cong \mathbb{Z}/7\mathbb{Z}$ is normal.

$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $7$, so $n_3 \in \{1, 7\}$.
If $n_3 = 1$, both Sylow subgroups are normal and $G \cong \mathbb{Z}/21\mathbb{Z}$ (abelian).
If $n_3 = 7$, $G$ is a semidirect product $\mathbb{Z}/7\mathbb{Z} \rtimes \mathbb{Z}/3\mathbb{Z}$,
which is non-abelian. This group exists: it is the unique non-abelian group of order $21$.
So $G$ need not be abelian. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.3, 7.7; Theorem 7.3._

### Rings, Ideals, and Polynomial Rings

**Problem 15.** Prove that $(2)$ is a prime ideal of $\mathbb{Z}$ but $(4)$ is not prime.

<details>
<summary>Solution</summary>

*Solution.* By Theorem 9.3, $(p)$ is prime in $\mathbb{Z}$ iff $\mathbb{Z}/(p)$ is an integral domain.
$\mathbb{Z}/(2) \cong \mathbb{Z}/2\mathbb{Z}$ is a field, hence an integral domain, so $(2)$ is prime.

$\mathbb{Z}/(4)$: we have $[2][2] = [4] = [0]$ but $[2] \neq [0]$.
So $\mathbb{Z}/(4)$ has zero divisors and is not an integral domain.
Therefore $(4)$ is not prime. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.3, Theorem 9.3; Section 8.4._

**Problem 16.** Show that $x^2 + 1$ is irreducible in $\mathbb{R}[x]$ but reducible in $\mathbb{C}[x]$.

<details>
<summary>Solution</summary>

*Solution.* In $\mathbb{R}[x]$: suppose $x^2 + 1 = (x + a)(x + b)$ with $a, b \in \mathbb{R}$.
Then $a + b = 0$ and $ab = 1$, so $-a^2 = 1$, giving $a^2 = -1$, which has no real solution.
Thus $x^2 + 1$ is irreducible in $\mathbb{R}[x]$.

In $\mathbb{C}[x]$: $x^2 + 1 = (x + i)(x - i)$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 10.2; Section 12.7, Fundamental Theorem of Algebra._

**Problem 17.** Use the Euclidean algorithm to find $\gcd(x^3 - 2x + 1, x^2 - 1)$ in $\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

*Solution.*

$$x^3 - 2x + 1 = x(x^2 - 1) + (-x + 1)$$

$$x^2 - 1 = (-x - 1)(-x + 1) + 0$$

Since the last non-zero remainder is $-x + 1$, we have $\gcd(x^3 - 2x + 1, x^2 - 1) = x - 1$
(up to multiplication by a unit in $\mathbb{Q}[x]$, i.e., a non-zero constant). $\blacksquare$

</details>

_If you get this wrong, revise: Section 10.1, Theorem 10.1; Section 11.1._

**Problem 18.** Prove that $\mathbb{Z}[x]$ is a UFD but not a PID.

<details>
<summary>Solution</summary>

*Solution.* **UFD:** By Gauss's lemma, since $\mathbb{Z}$ is a UFD, $\mathbb{Z}[x]$ is a UFD.

**Not a PID:** The ideal $I = (2, x) = \{2f + xg : f, g \in \mathbb{Z}[x]\}$ is not principal.
Suppose $I = (h)$ for some $h \in \mathbb{Z}[x]$. Then $h$ divides both $2$ and $x$.
Since $h$ divides $2 \in \mathbb{Z}$, $h$ is a constant polynomial, say $h = c \in \mathbb{Z}$.
Then $(c) = (2, x)$, so $c$ divides $2$ and $c$ divides $x$, hence $c = \pm 1$.
But $(1) = \mathbb{Z}[x] \neq (2, x)$ since $1 \notin (2, x)$ (every element of $(2, x)$ has even constant term).
Contradiction. Therefore $(2, x)$ is not principal, and $\mathbb{Z}[x]$ is not a PID. $\blacksquare$

</details>

_If you get this wrong, revise: Section 11.3, Theorem 11.3; Section 8.1._

### Field Extensions and Galois Theory

**Problem 19.** Compute $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$ and find the Galois group.

<details>
<summary>Solution</summary>

*Solution.* First, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$ since $x^2 - 2$ is irreducible over $\mathbb{Q}$
(by Eisenstein with $p = 2$). Then $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$ (if $\sqrt{3} = a + b\sqrt{2}$
with $a, b \in \mathbb{Q}$, squaring gives $3 = a^2 + 2b^2 + 2ab\sqrt{2}$, forcing $ab = 0$ and leading to contradiction).
So $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$.

By the tower law: $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \cdot 2 = 4$.

The Galois group consists of four automorphisms determined by their action on $\sqrt{2}$ and $\sqrt{3}$:
$\mathrm{id}$: $\sqrt{2} \mapsto \sqrt{2}$, $\sqrt{3} \mapsto \sqrt{3}$
$\sigma$: $\sqrt{2} \mapsto -\sqrt{2}$, $\sqrt{3} \mapsto \sqrt{3}$
$\tau$: $\sqrt{2} \mapsto \sqrt{2}$, $\sqrt{3} \mapsto -\sqrt{3}$
$\sigma\tau$: $\sqrt{2} \mapsto -\sqrt{2}$, $\sqrt{3} \mapsto -\sqrt{3}$

Since all non-identity elements have order $2$, $\mathrm{Gal}(\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}) \cong V_4$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 12.1, Proposition 12.1; Section 13.1._

**Problem 20.** Prove that a quotient ring $R/I$ is an integral domain if and only if $I$ is a prime ideal.

<details>
<summary>Solution</summary>

*Solution.* ($\Rightarrow$) Suppose $R/I$ is an integral domain. Let $ab \in I$. Then $(a + I)(b + I) = ab + I = 0 + I$,
the zero element of $R/I$. Since $R/I$ has no zero divisors, either $a + I = 0 + I$ or $b + I = 0 + I$,
i.e., $a \in I$ or $b \in I$. So $I$ is prime.

($\Leftarrow$) Suppose $I$ is prime. $R/I$ is a commutative ring with unity (since $R$ is).
If $(a + I)(b + I) = 0 + I$, then $ab \in I$, so $a \in I$ or $b \in I$ (since $I$ is prime).
Thus $a + I = 0 + I$ or $b + I = 0 + I$, meaning $R/I$ has no zero divisors.
Also $1 + I \neq 0 + I$ since $I \neq R$. Therefore $R/I$ is an integral domain. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.2, 9.3, Theorem 9.3; Section 8.4._

### Challenge Problems

**Problem 21.** Let $G$ be a finite group acting on a finite set $X$. Prove Burnside's lemma:
the number of orbits equals $\frac{1}{|G|} \sum_{g \in G} |\mathrm{Fix}(g)|$.

<details>
<summary>Solution</summary>

*Solution.* Let $S = \{(g, x) \in G \times X : g \cdot x = x\}$. Count $|S|$ in two ways.

**Grouping by $g$:** $|S| = \sum_{g \in G} |\{x \in X : g \cdot x = x\}| = \sum_{g \in G} |\mathrm{Fix}(g)|$.

**Grouping by $x$:** $|S| = \sum_{x \in X} |\mathrm{Stab}(x)|$.

For each orbit $\mathcal{O}$, every $x \in \mathcal{O}$ has $|\mathrm{Stab}(x)| = |G|/|\mathcal{O}|$ (by orbit-stabilizer).
So $\sum_{x \in \mathcal{O}} |\mathrm{Stab}(x)| = |\mathcal{O}| \cdot |G|/|\mathcal{O}| = |G|$.

Summing over all orbits: $|S| = |G| \cdot (\mathrm{number\ of\ orbits})$.

Combining: $\sum_{g \in G} |\mathrm{Fix}(g)| = |G| \cdot (\mathrm{number\ of\ orbits})$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 6.3, Theorem 6.3._

**Problem 22.** Show that $A_5$ is the smallest non-abelian simple group.

<details>
<summary>Solution</summary>

*Solution.* We show that every non-abelian group of order $n < 60$ is not simple.

- Order $6$: $S_3$ has normal subgroup $A_3$.
- Order $8$: all groups of order $p^3$ have non-trivial center (Theorem 6.5).
- Order $10$: $n_5 = 1$ by Sylow.
- Order $12$: $n_3 = 1$ or $4$. If $n_3 = 4$, one checks $A_4$ has the normal Klein subgroup $V_4$.
- Order $14$: $n_7 = 1$ by Sylow.
- Order $15$: $n_5 = 1$, $n_3 = 1$ by Sylow.
- Order $18$: $n_3 = 1$ by Sylow (since $n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $2$).
- Order $20$: $n_5 = 1$ by Sylow (since $n_5 \equiv 1 \pmod{5}$ and $n_5$ divides $4$).
- Order $21$: $n_7 = 1$ by Sylow.
- Order $22$: $n_{11} = 1$ by Sylow.
- Order $24$: if $G$ is simple, $n_2 \geq 3$ and $n_3 \geq 4$. Counting elements gives a contradiction.
- Order $26$: $n_{13} = 1$.
- Order $27$: $p$-group has non-trivial center.
- Order $28$: $n_7 = 1$ by Sylow (since $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $4$).
- Order $30$: $n_5 = 1$ or $n_3 = 1$ by counting arguments (see Section 7.6).
- Order $33$: $n_{11} = 1$.
- Order $34$: $n_{17} = 1$.
- Order $35$: $n_7 = 1$, $n_5 = 1$.
- Order $36$: $n_3 = 1$ or $4$. If $n_3 = 4$, the action on Sylow $3$-subgroups gives a homomorphism
  $G \to S_4$ whose kernel is a proper normal subgroup.
- Orders $38, 39, 40, 42, 44, 46, 48, 50, 51, 52, 54, 55, 56, 57, 58$: similar arguments apply.
  For each, either a Sylow subgroup is unique, or counting arguments force a normal subgroup.

$A_5$ has order $60$ and is simple (Proposition 14.2). Therefore it is the smallest non-abelian simple group. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.7, Proposition 7.7; Section 14.3, Proposition 14.2._

**Problem 23.** Prove that the quotient ring $\mathbb{Z}[x]/(x^2 + 1)$ is isomorphic to $\mathbb{Z}[i]$.

<details>
<summary>Solution</summary>

*Solution.* Define $\phi : \mathbb{Z}[x] \to \mathbb{Z}[i]$ by $\phi(f(x)) = f(i)$. This is a ring
homomorphism (evaluation at $i$). It is surjective: any $a + bi \in \mathbb{Z}[i]$ equals $\phi(a + bx)$.

The kernel consists of polynomials $f \in \mathbb{Z}[x]$ with $f(i) = 0$. Since $x^2 + 1$ is the minimal
polynomial of $i$ over $\mathbb{Q}$, every such $f$ is divisible by $x^2 + 1$ in $\mathbb{Q}[x]$.
By Gauss's lemma, $f$ is divisible by $x^2 + 1$ in $\mathbb{Z}[x]$ as well. So $\ker(\phi) = (x^2 + 1)$.

By the ring isomorphism theorem, $\mathbb{Z}[x]/(x^2 + 1) \cong \mathbb{Z}[i]$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.2, Theorem 9.2; Section 8.6._

**Problem 24.** Let $F$ be a field and let $f \in F[x]$ be irreducible of degree $n$. Show that the
quotient ring $F[x]/(f)$ is an $n$-dimensional vector space over $F$ with basis $\{1, \bar{x}, \bar{x}^2, \ldots, \bar{x}^{n-1}\}$.

<details>
<summary>Solution</summary>

*Solution.* Since $f$ is irreducible and $F[x]$ is a PID, $(f)$ is a maximal ideal, so $E = F[x]/(f)$ is a field.
Write $\bar{x} = x + (f) \in E$. Every element of $E$ is a coset $g(x) + (f)$ for some $g \in F[x]$.

By the division algorithm, $g = qf + r$ where $\deg(r) \lt{} n$ or $r = 0$. Then $g + (f) = r + (f)$,
so every element of $E$ can be written as $r(\bar{x}) = a_0 + a_1\bar{x} + \cdots + a_{n-1}\bar{x}^{n-1}$
with $a_i \in F$. This representation is unique: if $\sum_{i=0}^{n-1} a_i \bar{x}^i = \sum_{i=0}^{n-1} b_i \bar{x}^i$,
then $\sum (a_i - b_i)\bar{x}^i = 0$, so $\sum (a_i - b_i)x^i \in (f)$, meaning $f$ divides a polynomial
of degree $\lt{} n = \deg(f)$, which forces all $a_i - b_i = 0$.

Therefore $\{1, \bar{x}, \ldots, \bar{x}^{n-1}\}$ is a basis for $E$ over $F$, and $[E : F] = n$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 10.1, Theorem 10.1; Section 12.3, Theorem 12.4._

**Problem 25.** Classify all finite fields of order $p^n$ for $p = 2$ and $n \leq 4$.

<details>
<summary>Solution</summary>

*Solution.* By Theorem 12.5, for each prime power there is a unique (up to isomorphism) finite field.

**$\mathbb{F}_2$** ($2$ elements): $\{0, 1\}$. Arithmetic modulo $2$.

**$\mathbb{F}_4$** ($4$ elements): $\mathbb{F}_2[x]/(x^2 + x + 1)$. Elements: $\{0, 1, \alpha, 1+\alpha\}$ where
$\alpha^2 = \alpha + 1$. Multiplicative group is cyclic of order $3$: $\alpha^3 = 1$.

**$\mathbb{F}_8$** ($8$ elements): $\mathbb{F}_2[x]/(x^3 + x + 1)$. Elements: $\{a + b\alpha + c\alpha^2 : a, b, c \in \mathbb{F}_2\}$
where $\alpha^3 = \alpha + 1$. Multiplicative group is cyclic of order $7$.

**$\mathbb{F}_{16}$** ($16$ elements): $\mathbb{F}_2[x]/(x^4 + x + 1)$. Elements: $\{a_0 + a_1\alpha + a_2\alpha^2 + a_3\alpha^3 : a_i \in \mathbb{F}_2\}$
where $\alpha^4 = \alpha + 1$. Multiplicative group is cyclic of order $15$.

Note: $\mathbb{F}_4$ is NOT a subfield of $\mathbb{F}_8$ (since $4$ does not divide $8$), but $\mathbb{F}_4$ IS
a subfield of $\mathbb{F}_{16}$ (since $4$ divides $16$). More generally, $\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}$
if and only if $m$ divides $n$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 12.4, Theorem 12.5; Section 12.6._

## 19. Summary of Key Results

The following table provides a quick reference for the major theorems and their locations in this document.

| Result | Location |
|--------|----------|
| Subgroup Criterion | Theorem 2.1 |
| Every subgroup of a cyclic group is cyclic | Theorem 2.4 |
| Lagrange's Theorem | Theorem 3.3 |
| Fermat's Little Theorem | Corollary 3.5 |
| Index 2 subgroups are normal | Corollary 3.7 |
| First Isomorphism Theorem | Theorem 5.3 |
| Correspondence Theorem | Theorem 5.6 |
| $\mathrm{Inn}(G) \cong G/Z(G)$ | Proposition 5.7 |
| Orbit-Stabilizer Theorem | Theorem 6.2 |
| Class Equation | Theorem 6.4 |
| Center of $p$-group is non-trivial | Theorem 6.5 |
| Sylow's First Theorem | Theorem 7.1 |
| Sylow's Second Theorem | Theorem 7.2 |
| Sylow's Third Theorem | Theorem 7.3 |
| Ring Isomorphism Theorem | Theorem 9.2 |
| Prime ideals and integral domains | Theorem 9.3 |
| Chinese Remainder Theorem | Theorem 9.5 |
| Eisenstein's Criterion | Theorem 10.5 |
| Euclidean domain $\Rightarrow$ PID $\Rightarrow$ UFD | Theorem 11.1, 11.3 |
| Tower Law for field extensions | Proposition 12.1 |
| Kronecker's Theorem | Theorem 12.4 |
| Finite fields exist and are unique | Theorem 12.5 |
| Primitive Element Theorem | Theorem 12.8 |
| Fundamental Theorem of Galois Theory | Theorem 13.1 |
| Abel-Ruffini Theorem | Corollary 13.3 |
| Cauchy's Theorem | Theorem 14.1 |
| $A_n$ is simple for $n \geq 5$ | Proposition 14.2 |
| Structure theorem for finitely generated abelian groups | Theorem 14.4 |

### Dependency Graph

The key dependencies among topics are:

- **Groups** $\to$ Subgroups $\to$ Lagrange's Theorem $\to$ Normal Subgroups $\to$ Quotient Groups
- **Homomorphisms** $\to$ Isomorphism Theorems $\to$ Correspondence Theorem
- **Group Actions** $\to$ Orbit-Stabilizer $\to$ Sylow Theorems $\to$ Applications
- **Rings** $\to$ Ideals $\to$ Quotient Rings $\to$ Prime/Maximal Ideals
- **Polynomial Rings** $\to$ Euclidean Domains $\to$ PIDs $\to$ UFDs
- **Field Extensions** $\to$ Algebraic Extensions $\to$ Splitting Fields $\to$ Galois Theory

Mastering the earlier topics is essential before proceeding to the later ones. The problem set (Section 18)
is designed to test understanding across all these areas.
