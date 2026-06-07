---
title: Lagrange's Theorem
tags:
  - Mathematics
  - University
---

### 3.1 Cosets

Let $H \leq G$. For $a \in G$The **left coset** of $H$ containing $a$ is

$$aH = \{ah : h \in H\}$$

The **right coset** is $Ha = \{ha : h \in H\}$.

**Proposition 3.1.** The cosets of $H$ in $G$ partition $G$.

_Proof._ Define $a \sim b$ if $a^{-1}b \in H$. This is an equivalence relation: reflexive
($a^{-1}a = e \in H$), symmetric ($a^{-1}b \in H \Rightarrow b^{-1}a = (a^{-1}b)^{-1} \in H$),
Transitive ($a^{-1}b, b^{-1}c \in H \Rightarrow a^{-1}c = (a^{-1}b)(b^{-1}c) \in H$). The
equivalence class of $a$ is exactly $aH$. $\blacksquare$

**Proposition 3.2.** $|aH| = |H|$ for all $a \in G$.

_Proof._ The map $\phi : H \to aH$ given by $\phi(h) = ah$ is a bijection. $\blacksquare$

### 3.2 Lagrange's Theorem

**Theorem 3.3 (Lagrange's Theorem).** If $H$ is a subgroup of a finite group $G$Then $|H|$ divides
$|G|$.

_Proof._ The cosets of $H$ partition $G$ into disjoint sets, each of size $|H|$. If there are $k$
cosets, Then $|G| = k \cdot |H|$So $|H|$ divides $|G|$. $\blacksquare$

The number of cosets is called the **index** of $H$ in $G$Denoted $[G : H]$.

**Corollary 3.4.** The order of any element of $G$ divides $|G|$.

_Proof._ $|g| = |\langle g \rangle|$And $\langle g \rangle \leq G$So $|g|$ divides $|G|$ by
Lagrange. $\blacksquare$

**Corollary 3.5 (Fermat's Little Theorem).** If $p$ is prime and $\gcd(a, p) = 1$Then
$a^{p-1} \equiv 1 \pmod{p}$.

_Proof._ $\mathbb{Z}/p\mathbb{Z}$ has $p$ elements. The multiplicative group
$(\mathbb{Z}/p\mathbb{Z})^*$ has order $p - 1$. The order of $[a]$ divides $p - 1$So
$[a]^{p-1} = [1]$. $\blacksquare$

**Corollary 3.6 (Euler's Theorem).** If $\gcd(a, n) = 1$Then $a^{\phi(n)} \equiv 1 \pmod{n}$Where
$\phi$ Is Euler's totient function.

### 3.3 Worked Example

**Problem.** Show that every group of prime order $p$ is cyclic.

_Solution._ Let $G$ be a group of order $p$ and $g \in G$ with $g \neq e$. By Corollary 3.4, $|g|$
divides $p$. Since $g \neq e$, $|g| \neq 1$. Since $p$ is prime, $|g| = p$. Thus
$\langle g \rangle = G$And $G$ is cyclic. $\blacksquare$

### 3.4 Worked Examples: Computing Cosets

**Problem.** Let $H = \langle (1\ 2\ 3) \rangle \leq S_3$. Find all left cosets of $H$ in $S_3$.

<details>
<summary>Solution</summary>

_Solution._ $H = \{e, (1\ 2\ 3), (1\ 3\ 2)\}$ has order $3$And $|S_3| = 6$So $[S_3 : H] = 2$. Pick
any $\sigma \notin H$E.g., $\sigma = (1\ 2)$. Then:

$$S_3 = H \cup (1\ 2)H = \{e, (1\ 2\ 3), (1\ 3\ 2)\} \cup \{(1\ 2), (1\ 2)(1\ 2\ 3), (1\ 2)(1\ 3\ 2)\}$$

Computing: $(1\ 2)(1\ 2\ 3) = (2\ 3)$ and $(1\ 2)(1\ 3\ 2) = (1\ 3)$. So:

$$S_3 = \{e, (1\ 2\ 3), (1\ 3\ 2)\} \cup \{(1\ 2), (2\ 3), (1\ 3)\}$$

Since $[S_3 : H] = 2$, $H$ is normal (see Corollary 3.7). $\blacksquare$

</details>

**Problem.** Let $H = \langle 4 \rangle \leq \mathbb{Z}/12\mathbb{Z}$. Find all cosets of $H$.

<details>
<summary>Solution</summary>

_Solution._ $H = \langle 4 \rangle = \{0, 4, 8\}$ has order $3$And $|\mathbb{Z}/12\mathbb{Z}| = 12$
So $[\mathbb{Z}/12\mathbb{Z} : H] = 4$. The cosets are:

$$0 + H = \{0, 4, 8\}, \quad 1 + H = \{1, 5, 9\}, \quad 2 + H = \{2, 6, 10\}, \quad 3 + H = \{3, 7, 11\}$$

Since $\mathbb{Z}/12\mathbb{Z}$ is abelian, $H$ is normal, and
$\mathbb{Z}/12\mathbb{Z}\,/\,H \cong \mathbb{Z}/4\mathbb{Z}$. $\blacksquare$

</details>

### 3.5 Further Corollaries of Lagrange's Theorem

**Corollary 3.7.** If $[G : H] = 2$Then $H \trianglelefteq G$.

_Proof._ There are exactly two left cosets $H$ and $aH$And exactly two right cosets $H$ and $Ha$.
Since the cosets partition $G$We have $aH = G \setminus H = Ha$. Thus $gH = Hg$ for all $g \in G$ So
$H$ is normal. $\blacksquare$

**Corollary 3.8 (Product Formula).** If $H, K \leq G$ are finite subgroups, then

$$|HK| = \frac{|H||K|}{|H \cap K|}$$

_Proof._ The map $H \times K \to HK$ given by $(h, k) \mapsto hk$ is surjective. For any
$x = hk \in HK$ The fiber is $\{(hc^{-1}, ck) : c \in H \cap K\}$Which has size $|H \cap K|$. Thus
$|H||K| = |HK| \cdot |H \cap K|$. $\blacksquare$

:::caution Common Pitfall The product $HK$ need not be a subgroup . However, $HK$ is always a
subgroup when $H$ or $K$ is normal. In that case, $|HK| = |H||K|/|H \cap K|$ also divides $|G|$ by
Lagrange.


:::
