---
title: Additional Results
tags:
  - Mathematics
  - University
---

### 14.1 Cauchy's Theorem

**Theorem 14.1 (Cauchy's Theorem).** If $p$ is a prime dividing $|G|$Then $G$ has an element of
Order $p$.

_Proof._ Consider the set $X = \{(g_1, g_2, \ldots, g_p) \in G^p : g_1 g_2 \cdots g_p = e\}$.
$|X| = |G|^{p-1}$ (choose $g_1, \ldots, g_{p-1}$ freely; $g_p$ is determined). The cyclic group
$\mathbb{Z}/p\mathbb{Z}$ acts on $X$ by cyclic permutation. Orbits have size $1$ or $p$. An orbit
has size $1$ precisely when $(g, g, \ldots, g) \in X$I.e., $g^p = e$. Since $|X| = |G|^{p-1}$ is
divisible by $p$ (as $p$ divides $|G|$), the number of fixed points Is congruent to $0 \pmod{p}$.
The element $(e, e, \ldots, e)$ is a fixed point, so there exists At least $p - 1$ other fixed
points, giving a non-identity element with $g^p = e$. Since $p$ is Prime, $g$ has order $p$.
$\blacksquare$

### 14.2 Worked Examples: Additional Results

**Problem.** Use Cauchy's theorem to show that every group of order $6$ is isomorphic to either
$\mathbb{Z}/6\mathbb{Z}$ or $S_3$.

<details>
<summary>Solution</summary>

_Solution._ Let $|G| = 6 = 2 \cdot 3$. By Cauchy's theorem, $G$ has an element $a$ of order $2$ And
an element $b$ of order $3$.

The subgroup $H = \langle b \rangle$ has index $2$So $H \trianglelefteq G$ (Corollary 3.7). The
quotient $G/H$ has order $2$.

Since $a \notin H$ (as $|a| = 2$ and $|b| = 3$), every element of $G$ is either $b^k$ or $ab^k$. The
group structure is determined by $aba^{-1}$. Since $H$ is normal, $aba^{-1} \in H$ So $aba^{-1} = b$
or $aba^{-1} = b^2$.

**Case 1:** $aba^{-1} = b$ (i.e., $a$ and $b$ commute). Then
$G \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \cong \mathbb{Z}/6\mathbb{Z}$.

**Case 2:** $aba^{-1} = b^2 = b^{-1}$. Then $G$ is a semidirect product with $ab = b^{-1}a$. This is
the presentation $\langle a, b \mid a^2 = b^3 = e,\ aba^{-1} = b^{-1} \rangle$Which is $S_3$.
$\blacksquare$

</details>

**Problem.** Classify all groups of order $4$.

<details>
<summary>Solution</summary>

_Solution._ Let $|G| = 4$. By Lagrange, possible element orders are $1, 2, 4$.

**Case 1:** $G$ has an element of order $4$. Then
$G = \langle g \rangle \cong \mathbb{Z}/4\mathbb{Z}$.

**Case 2:** Every non-identity element has order $2$. Let $a, b \in G$ with $a \neq b$ and
$a, b \neq e$. Then $G = \{e, a, b, ab\}$ (there are only $4$ elements). We have
$a^2 = b^2 = (ab)^2 = e$. From $(ab)^2 = e$: $abab = e$So $ba = a^{-1}b^{-1} = ab$ (since
$a^{-1} = a$ and $b^{-1} = b$). Thus $G$ is abelian:
$G \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} = V_4$.

So there are exactly two groups of order $4$: $\mathbb{Z}/4\mathbb{Z}$ and $V_4$. $\blacksquare$

</details>

### 14.3 Simple Groups

A group $G$ is **simple** if its only normal subgroups are $\{e\}$ and $G$.

**Proposition 14.2.** $A_n$ is simple for all $n \geq 5$.

This is a key result in the classification of finite simple groups, which states that every finite
Simple group is either cyclic of prime order, an alternating group $A_n$ ($n \geq 5$), a group of
Lie type, or one of 26 sporadic groups.

### 14.4 The Structure Theorem for Finitely Generated Abelian Groups

**Theorem 14.4.** Every finitely generated abelian group $G$ is isomorphic to a direct product of
Cyclic groups:

$$G \cong \mathbb{Z}^r \times \mathbb{Z}/p_1^{k_1}\mathbb{Z} \times \cdots \times \mathbb{Z}/p_m^{k_m}\mathbb{Z}$$

Where $r \geq 0$ is the **rank** and $p_i^{k_i}$ are powers of (not necessarily distinct) primes.
The integers $r, k_1, \ldots, k_m$ are uniquely determined.

### 14.5 Worked Example

**Problem.** Classify all abelian groups of order 72.

_Solution._ Since $72 = 2^3 \cdot 3^2$Every abelian group of order 72 is a direct product of an
Abelian group of order $2^3$ and one of order $3^2$.

For order $2^3$: the partitions of 3 give (3), (2,1), (1,1,1), corresponding to
$\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$
$\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.

For order $3^2$: the partitions of 2 give (2), (1,1), corresponding to $\mathbb{Z}/9\mathbb{Z}$
$\mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$.

Taking all products, the six abelian groups of order 72 are:

1. $\mathbb{Z}/72\mathbb{Z} \cong \mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/9\mathbb{Z}$
2. $\mathbb{Z}/8\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$
3. $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/9\mathbb{Z}$
4. $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z}$
5. $(\mathbb{Z}/2\mathbb{Z})^3 \times \mathbb{Z}/9\mathbb{Z}$
6. $(\mathbb{Z}/2\mathbb{Z})^3 \times (\mathbb{Z}/3\mathbb{Z})^2$ $\blacksquare$

