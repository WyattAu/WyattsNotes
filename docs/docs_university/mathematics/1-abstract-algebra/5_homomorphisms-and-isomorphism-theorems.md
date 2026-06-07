---
title: Homomorphisms and Isomorphism Theorems
tags:
  - Mathematics
  - University
---

### 5.1 Group Homomorphisms

A **homomorphism** $\phi : G \to H$ is a function satisfying $\phi(ab) = \phi(a)\phi(b)$ for all
$a, b \in G$.

**Proposition 5.1.** If $\phi : G \to H$ is a homomorphism, then:

1. $\phi(e_G) = e_H$.
2. $\phi(a^{-1}) = \phi(a)^{-1}$ for all $a \in G$.
3. $\phi(a^n) = \phi(a)^n$ for all $n \in \mathbb{Z}$.

_Proof._ (1) $\phi(e_G) = \phi(e_G \cdot e_G) = \phi(e_G)\phi(e_G)$So by cancellation in $H$
$\phi(e_G) = e_H$. (2) $e_H = \phi(e_G) = \phi(aa^{-1}) = \phi(a)\phi(a^{-1})$So
$\phi(a^{-1}) = \phi(a)^{-1}$. $\blacksquare$

### 5.2 Kernel and Image

The **kernel** of $\phi$ is $\ker(\phi) = \{g \in G : \phi(g) = e_H\}$.

The **image** of $\phi$ is $\mathrm{im}(\phi) = \{\phi(g) : g \in G\}$.

**Theorem 5.2.** $\ker(\phi) \trianglelefteq G$ and $\mathrm{im}(\phi) \leq H$.

_Proof._ We show $\ker(\phi)$ is a normal subgroup.

- $\phi(e) = e_H$So $e \in \ker(\phi)$.
- If $a, b \in \ker(\phi)$Then $\phi(ab^{-1}) = \phi(a)\phi(b)^{-1} = e_H e_H = e_H$So
  $ab^{-1} \in \ker(\phi)$.
- If $a \in \ker(\phi)$ and $g \in G$Then
  $\phi(gag^{-1}) = \phi(g)\phi(a)\phi(g)^{-1} = \phi(g)e_H\phi(g)^{-1} = e_H$ so
  $gag^{-1} \in \ker(\phi)$.

Thus $\ker(\phi) \trianglelefteq G$. The .../1-number-and-algebra/3_proof-and-logic that
$\mathrm{im}(\phi) \leq H$ is straightforward. $\blacksquare$

### 5.3 The First Isomorphism Theorem

**Theorem 5.3 (First Isomorphism Theorem).** If $\phi : G \to H$ is a surjective homomorphism, then

$$G / \ker(\phi) \cong H$$

More generally (even if $\phi$ is not surjective), $G / \ker(\phi) \cong \mathrm{im}(\phi)$.

_Proof._ Define $\overline{\phi} : G/\ker(\phi) \to H$ by $\overline{\phi}(g \ker(\phi)) = \phi(g)$.
This is well-defined: if $g \ker(\phi) = g' \ker(\phi)$Then $g'^{-1}g \in \ker(\phi)$ So
$\phi(g'^{-1}g) = e_H$Giving $\phi(g) = \phi(g')$. It is a homomorphism:
$\overline{\phi}((a\ker(\phi))(b\ker(\phi))) = \overline{\phi}(ab\ker(\phi)) = \phi(ab) = \phi(a)\phi(b) = \overline{\phi}(a\ker(\phi))\overline{\phi}(b\ker(\phi))$.
It is injective:
$\overline{\phi}(g\ker(\phi)) = e_H \Rightarrow \phi(g) = e_H \Rightarrow g \in \ker(\phi) \Rightarrow g\ker(\phi) = \ker(\phi)$.
By construction, $\mathrm{im}(\overline{\phi}) = \mathrm{im}(\phi)$. $\blacksquare$

### 5.4 Second and Third Isomorphism Theorems

**Theorem 5.4 (Second Isomorphism Theorem).** If $N \trianglelefteq G$ and $H \leq G$Then
$HN \leq G$ $N \trianglelefteq HN$, $H \cap N \trianglelefteq H$And

$$H / (H \cap N) \cong HN / N$$

_Proof._ Define $\phi : H \to HN/N$ by $\phi(h) = hN$. This is a homomorphism (since $N$ is normal).
It is surjective: any element of $HN/N$ has the form $hnN = hN = \phi(h)$. Its kernel is
$\{h \in H : hN = N\} = \{h \in H : h \in N\} = H \cap N$. By the first isomorphism theorem,
$H/(H \cap N) \cong HN/N$. $\blacksquare$

**Theorem 5.5 (Third Isomorphism Theorem).** If $K \trianglelefteq N \trianglelefteq G$ with
$K \trianglelefteq G$Then

$$(G/K)/(N/K) \cong G/N$$

_Proof._ Define $\phi : G/K \to G/N$ by $\phi(gK) = gN$. Well-defined: $gK = g'K$ implies
$g^{-1}g' \in K \subseteq N$So $gN = g'N$. Surjective and $\ker(\phi) = N/K$. Apply the first
Isomorphism theorem. $\blacksquare$

### 5.5 Worked Example

**Problem.** Show that $\mathbb{R}^* / \mathbb{R}^+ \cong \mathbb{Z}/2\mathbb{Z}$.

_Solution._ Define $\phi : \mathbb{R}^* \to \{1, -1\} \cong \mathbb{Z}/2\mathbb{Z}$ by
$\phi(x) = \mathrm{sgn}(x)$. This is a homomorphism since
$\mathrm{sgn}(xy) = \mathrm{sgn}(x)\mathrm{sgn}(y)$. It is surjective. Its kernel is
$\{x \in \mathbb{R}^* : \mathrm{sgn}(x) = 1\} = \mathbb{R}^+$. By the first isomorphism theorem,
$\mathbb{R}^* / \mathbb{R}^+ \cong \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

### 5.6 Further Worked Examples

**Example 5.6 (Trivial Homomorphism).** For any groups $G, H$The map $\phi : G \to H$ defined by
$\phi(g) = e_H$ for all $g \in G$ is a homomorphism (the **trivial homomorphism**). Its kernel is
$G$ And its image is $\{e_H\}$.

**Example 5.7 (Sign Homomorphism).** The sign map $\mathrm{sgn} : S_n \to \{1, -1\}$ is a surjective
Homomorphism with kernel $A_n$. By the first isomorphism theorem,
$S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}$.

**Example 5.8 (Determinant Homomorphism).** The determinant
$\det : GL_n(\mathbb{R}) \to \mathbb{R}^*$ Is a surjective group homomorphism with kernel
$SL_n(\mathbb{R})$. By the first isomorphism theorem,
$GL_n(\mathbb{R}) / SL_n(\mathbb{R}) \cong \mathbb{R}^*$.

**Example 5.9 (Conjugation Homomorphism).** For a fixed $g \in G$The map $c_g : G \to G$ defined by
$c_g(x) = gxg^{-1}$ is an automorphism of $G$ (an **inner automorphism**). It is a homomorphism
since $c_g(xy) = gxyg^{-1} = (gxg^{-1})(gyg^{-1}) = c_g(x)c_g(y)$. It is bijective with inverse
$c_{g^{-1}}$.

**Problem.** Define $\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ by $\phi(k) = k + n\mathbb{Z}$.
Verify that $\phi$ is a surjective homomorphism and identify the quotient.

<details>
<summary>Solution</summary>

_Solution._
$\phi(k + m) = (k+m) + n\mathbb{Z} = (k + n\mathbb{Z}) + (m + n\mathbb{Z}) = \phi(k) + \phi(m)$ So
$\phi$ is a homomorphism. It is surjective since every coset $k + n\mathbb{Z}$ equals $\phi(k)$. The
kernel is $\ker(\phi) = \{k \in \mathbb{Z} : k \in n\mathbb{Z}\} = n\mathbb{Z}$. By the first
isomorphism theorem, $\mathbb{Z}/n\mathbb{Z} \cong \mathbb{Z}/n\mathbb{Z}$ (the canonical
projection). $\blacksquare$

</details>

### 5.7 The Correspondence Theorem

**Theorem 5.6 (Correspondence Theorem / Fourth Isomorphism Theorem).** Let $\phi : G \to H$ be a
Surjective homomorphism with $K = \ker(\phi)$. Then there is an inclusion-preserving bijection

$$\{\mathrm{subgroups\ of\ } G \mathrm{\ containing\ } K\} \longleftrightarrow \{\mathrm{subgroups\ of\ } H\}$$

Given by $U \mapsto \phi(U)$ with inverse $V \mapsto \phi^{-1}(V)$. This bijection satisfies:

1. $U \trianglelefteq G$ if and only if $\phi(U) \trianglelefteq H$.
2. $[G : U] = [H : \phi(U)]$ for all $U \supseteq K$.
3. $G/U \cong H/\phi(U)$ when $U \trianglelefteq G$.

_Proof._ Define $\Phi(U) = \phi(U)$ and $\Psi(V) = \phi^{-1}(V) = \{g \in G : \phi(g) \in V\}$.

- $\Phi \circ \Psi = \mathrm{id}$: $\Phi(\Psi(V)) = \phi(\phi^{-1}(V)) = V$ (since $\phi$ is
  surjective).
- $\Psi \circ \Phi = \mathrm{id}$ on subgroups containing $K$: if $U \supseteq K$Then
  $\Psi(\Phi(U)) = \phi^{-1}(\phi(U)) = U$ (since $\ker(\phi) = K \subseteq U$).

For normality: if $U \trianglelefteq G$Then for any $h \in H$ and $u \in U$ Write $h = \phi(g)$.
Then $h\phi(u)h^{-1} = \phi(g)\phi(u)\phi(g)^{-1} = \phi(gug^{-1}) \in \phi(U)$ Since
$gug^{-1} \in U$. Conversely, if $\phi(U) \trianglelefteq H$Then for any $g \in G$ and $u \in U$
$\phi(gug^{-1}) = \phi(g)\phi(u)\phi(g)^{-1} \in \phi(U)$So $gug^{-1} \in \phi^{-1}(\phi(U)) = U$.

For the index: $\phi$ restricts to a surjection $U \to \phi(U)$ with kernel $K$ So
$|U/K| = |\phi(U)|$Giving $|G|/|U| = |H|/|\phi(U)|$. $\blacksquare$

### 5.8 Automorphism Groups

An **automorphism** of $G$ is an isomorphism $\phi : G \to G$. The set of all automorphisms of $G$
Forms a group under composition, denoted $\mathrm{Aut}(G)$.

For each $g \in G$The **inner automorphism** $c_g : G \to G$ is defined by $c_g(x) = gxg^{-1}$. The
set of inner automorphisms $\mathrm{Inn}(G) = \{c_g : g \in G\}$ is a normal subgroup of
$\mathrm{Aut}(G)$.

**Proposition 5.7.** $\mathrm{Inn}(G) \cong G/Z(G)$.

_Proof._ Define $\psi : G \to \mathrm{Aut}(G)$ by $\psi(g) = c_g$. This is a homomorphism:
$\psi(gh) = c_{gh}$And
$c_{gh}(x) = ghx(gh)^{-1} = g(hxh^{-1})g^{-1} = c_g(c_h(x)) = (c_g \circ c_h)(x)$. The image is
$\mathrm{Inn}(G)$. The kernel is
$\{g \in G : c_g = \mathrm{id}\} = \{g \in G : gxg^{-1} = x
\ \mathrm{for\ all\ x} \in G\} = Z(G)$.
By the first isomorphism theorem, $\mathrm{Inn}(G) \cong G/Z(G)$. $\blacksquare$

**Example.** $\mathrm{Aut}(S_3) \cong S_3$. Since $Z(S_3) = \{e\}$We have
$\mathrm{Inn}(S_3) \cong S_3$. Since $|\mathrm{Aut}(S_3)| \leq |S_3|! = 6$ (automorphisms permute
the three elements of order $2$), And $\mathrm{Inn}(S_3)$ already has $6$ elements, we get
$\mathrm{Aut}(S_3) = \mathrm{Inn}(S_3) \cong S_3$.

**Example.** $\mathrm{Aut}(\mathbb{Z}/n\mathbb{Z}) \cong (\mathbb{Z}/n\mathbb{Z})^*$The group of
units Modulo $n$. An automorphism of $\mathbb{Z}/n\mathbb{Z}$ is determined by where it sends $1$And
$1$ can map to any generator, i.e., any $[k]$ with $\gcd(k, n) = 1$.

**Example.**
$\mathrm{Aut}(\mathbb{Z}/8\mathbb{Z}) \cong (\mathbb{Z}/8\mathbb{Z})^* = \{1, 3, 5, 7\} \cong V_4$.
The four automorphisms are $x \mapsto x$, $x \mapsto 3x$, $x \mapsto 5x$, $x \mapsto 7x$. Note that
$3^2 = 9 \equiv 1 \pmod{8}$So every non-identity automorphism has order $2$.

### 5.9 Semidirect Products

**Definition.** Let $H$ and $K$ be groups and let $\phi : K \to \mathrm{Aut}(H)$ be a homomorphism.
The **semidirect product** $H \rtimes_\phi K$ is the set $H \times K$ with the group operation

$$(h_1, k_1)(h_2, k_2) = (h_1 \cdot \phi(k_1)(h_2), k_1 k_2)$$

When $\phi$ is the trivial homomorphism, this reduces to the direct product $H \times K$.

**Proposition 5.8.** In $G = H \rtimes_\phi K$The subgroup $H' = \{(h, e_K)\}$ is normal in $G$ And
$K' = \{(e_H, k)\}$ is a subgroup with $H' \cap K' = \{(e_H, e_K)\}$ and $H'K' = G$.

_Proof._ Conjugation:
$(e_H, k)(h, e_K)(e_H, k)^{-1} = (e_H \cdot \phi(k)(h), k)(e_H, k^{-1})
= (\phi(k)(h), e_K) \in H'$.
So $H' \trianglelefteq G$. The remaining claims are immediate. $\blacksquare$

**Example.** $D_n = \mathbb{Z}/n\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z}$ where the action of
$\mathbb{Z}/2\mathbb{Z}$ on $\mathbb{Z}/n\mathbb{Z}$ sends $k \mapsto -k$ (inversion). Explicitly:
$(a, 0)(b, 0) = (a + b, 0)$, $(a, 0)(b, 1) = (a + b, 1)$ $(a, 1)(b, 0) = (a - b, 1)$,
$(a, 1)(b, 1) = (a - b, 0)$.

**Problem.** Show that there are exactly two groups of order $6$: $\mathbb{Z}/6\mathbb{Z}$ and
$S_3$.

<details>
<summary>Solution</summary>

_Solution._ $|G| = 6 = 2 \cdot 3$. By Sylow's third theorem: $n_3 \equiv 1 \pmod{3}$ and $n_3$
Divides $2$So $n_3 = 1$. The Sylow $3$-subgroup $H = \langle a \rangle \cong \mathbb{Z}/3\mathbb{Z}$
is normal.

Let $b$ be an element of order $2$ (exists by Cauchy). Since $H \trianglelefteq G$ $bab^{-1} \in H$.
The action of $\langle b \rangle$ on $H$ by conjugation is a homomorphism
$\mathbb{Z}/2\mathbb{Z} \to \mathrm{Aut}(\mathbb{Z}/3\mathbb{Z}) \cong \mathbb{Z}/2\mathbb{Z}$.

There are two such homomorphisms:

1. **Trivial:** $bab^{-1} = a$. Then
   $G \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z} \cong \mathbb{Z}/6\mathbb{Z}$.
2. **Inversion:** $bab^{-1} = a^{-1}$. Then
   $G \cong \mathbb{Z}/3\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z} = S_3$.

These are the only two possibilities, up to isomorphism. $\blacksquare$

</details>

**Problem.** Classify all groups of order $21 = 3 \cdot 7$.

<details>
<summary>Solution</summary>

_Solution._ $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $3$So $n_7 = 1$. The Sylow $7$-subgroup
$H = \langle a \rangle \cong \mathbb{Z}/7\mathbb{Z}$ is normal.

$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $7$So $n_3 = 1$ or $7$.

The action of a Sylow $3$-subgroup $K = \langle b \rangle \cong \mathbb{Z}/3\mathbb{Z}$ on $H$ by
conjugation Is a homomorphism
$\mathbb{Z}/3\mathbb{Z} \to \mathrm{Aut}(\mathbb{Z}/7\mathbb{Z}) \cong \mathbb{Z}/6\mathbb{Z}$.

$\mathrm{Aut}(\mathbb{Z}/7\mathbb{Z})$ has exactly one subgroup of order $3$ (generated by
$x \mapsto 2x$ Since $2^3 = 8 \equiv 1 \pmod{7}$).

**Case 1:** Trivial action ($n_3 = 1$):
$G \cong \mathbb{Z}/7\mathbb{Z} \times \mathbb{Z}/3\mathbb{Z} \cong \mathbb{Z}/21\mathbb{Z}$.

**Case 2:** Non-trivial action ($n_3 = 7$): $bab^{-1} = a^2$ (or equivalently $a^4$). This gives the
non-abelian semidirect product $\mathbb{Z}/7\mathbb{Z} \rtimes \mathbb{Z}/3\mathbb{Z}$.

There are exactly two groups of order $21$. $\blacksquare$

</details>

