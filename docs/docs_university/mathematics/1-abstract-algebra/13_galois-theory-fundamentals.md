---
title: Galois Theory Fundamentals
tags:
  - Mathematics
  - University
---

### 13.1 Automorphisms and the Galois Group

Let $E/F$ be a field extension. An $F$-**automorphism** of $E$ is an automorphism $\sigma : E \to E$
That fixes $F$ pointwise (i.e., $\sigma(c) = c$ for all $c \in F$).

The set of all $F$-automorphisms of $E$ forms a group under composition, called the **Galois group**
Of $E/F$Denoted $\mathrm{Gal}(E/F)$.

**Example.** $\mathrm{Gal}(\mathbb{C}/\mathbb{R}) = \{id, \sigma\}$ where $\sigma(a + bi) = a - bi$.
This is isomorphic to $\mathbb{Z}/2\mathbb{Z}$.

### 13.2 The Fundamental Theorem of Galois Theory

A finite extension $E/F$ is **Galois** if $|\mathrm{Gal}(E/F)| = [E : F]$Or equivalently, If $E$ is
the splitting field of a separable polynomial over $F$.

**Theorem 13.1 (Fundamental Theorem of Galois Theory).** Let $E/F$ be a Galois extension. Then:

1. There is an inclusion-reversing bijection between intermediate fields $F \subseteq K \subseteq E$
   and subgroups $H \subseteq \mathrm{Gal}(E/F)$Given by:

- $K \mapsto \mathrm{Gal}(E/K)$.
- $H \mapsto E^H = \{x \in E : \sigma(x) = x\ \mathrm{for\ all\ }\sigma \in H\}$.

2. $[E : K] = |\mathrm{Gal}(E/K)|$ and $[K : F] = [\mathrm{Gal}(E/F) : \mathrm{Gal}(E/K)]$.

3. $K/F$ is Galois if and only if $\mathrm{Gal}(E/K) \trianglelefteq \mathrm{Gal}(E/F)$In which case
   $\mathrm{Gal}(K/F) \cong \mathrm{Gal}(E/F) / \mathrm{Gal}(E/K)$.

### 13.3 Worked Example

**Problem.** Find the Galois group of $x^3 - 2$ over $\mathbb{Q}$.

_Solution._ The roots of $x^3 - 2$ are $\sqrt[3]{2}$, $\omega\sqrt[3]{2}$, $\omega^2\sqrt[3]{2}$
Where $\omega = e^{2\pi i/3}$ is a primitive cube root of unity. The splitting field is
$E = \mathbb{Q}(\sqrt[3]{2}, \omega)$. We have
$[E : \mathbb{Q}] = [E : \mathbb{Q}(\sqrt[3]{2})]
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
Using field operations and radicals (nth roots).

**Theorem 13.2.** A polynomial $f \in \mathbb{Q}[x]$ is solvable by radicals if and only if its
Galois Group is a solvable group.

**Corollary 13.3 (Abel-Ruffini Theorem).** The general polynomial of degree 5 is not solvable by
Radicals.

_Proof._ The symmetric group $S_5$ is not solvable (its only normal series is
$S_5 \triangleright A_5 \triangleright \{e\}$ And $A_5 / \{e\} \cong A_5$ is non-abelian). The
Galois group of $x^5 - x - 1$ (and many other quintics) Over $\mathbb{Q}$ is $S_5$. $\blacksquare$

### 13.5 The Discriminant and Galois Groups

The **discriminant** of $f(x) = (x - \alpha_1)\cdots(x - \alpha_n)$ is

$$\Delta = \prod_{i \lt j} (\alpha_i - \alpha_j)^2$$

The discriminant is a symmetric function of the roots, so $\Delta \in \mathbb{Q}$ when
$f \in \mathbb{Q}[x]$.

**Proposition 13.4.** Let $G = \mathrm{Gal}(f) \leq S_n$. Then $G \leq A_n$ (i.e., $G$ is contained
in the Alternating group) if and only if $\Delta$ is a perfect square in the base field.

_Proof._ The Galois group acts on $\delta = \prod_{i \lt j}(\alpha_i - \alpha_j)$ by permutation.
For any $\sigma \in G$, $\sigma(\delta) = \mathrm{sgn}(\sigma) \cdot \delta$. If $\sigma \in A_n$
$\sigma(\delta) = \delta$; if $\sigma \notin A_n$, $\sigma(\delta) = -\delta$.

If $G \leq A_n$Then $\delta$ is fixed by all of $G$So $\delta \in F$Hence $\Delta = \delta^2$ is a
square. Conversely, if $\Delta$ is a square in $F$Then $\delta \in F$ (or $-\delta \in F$), so
$\delta$ is fixed By $G$Meaning every element of $G$ acts as an even permutation. $\blacksquare$

**Example.** The discriminant of $x^3 - 3x + 1$ is $\Delta = 81 = 9^2$A perfect square. Therefore
$\mathrm{Gal}(x^3 - 3x + 1) \leq A_3 \cong \mathbb{Z}/3\mathbb{Z}$. Since the polynomial is
irreducible, The Galois group is transitive, so
$\mathrm{Gal}(x^3 - 3x + 1) = A_3 \cong \mathbb{Z}/3\mathbb{Z}$.

### 13.6 Worked Example: Galois Group of a Quartic

**Problem.** Determine the Galois group of $f(x) = x^4 - 2$ over $\mathbb{Q}$.

<details>
<summary>Solution</summary>

_Solution._ The roots are $\alpha_1 = \sqrt[4]{2}$, $\alpha_2 = i\sqrt[4]{2}$,
$\alpha_3 = -\sqrt[4]{2}$ $\alpha_4 = -i\sqrt[4]{2}$. The splitting field is
$E = \mathbb{Q}(\sqrt[4]{2}, i)$.

$[\mathbb{Q}(\sqrt[4]{2}) : \mathbb{Q}] = 4$ (since $x^4 - 2$ is irreducible by Eisenstein).
$i \notin \mathbb{Q}(\sqrt[4]{2}) \subset \mathbb{R}$So $[E : \mathbb{Q}(\sqrt[4]{2})] = 2$. Thus
$[E : \mathbb{Q}] = 8$.

The Galois group has order $8$. It is generated by:
$\sigma: \sqrt[4]{2} \mapsto i\sqrt[4]{2},\ i \mapsto i$ (order $4$)
$\tau: \sqrt[4]{2} \mapsto \sqrt[4]{2},\ i \mapsto -i$ (order $2$)

We check:
$\tau\sigma\tau^{-1}(\sqrt[4]{2}) = \tau(i\sqrt[4]{2}) = -i\sqrt[4]{2} = \sigma^{-1}(\sqrt[4]{2})$.
So $\tau\sigma\tau^{-1} = \sigma^{-1}$The defining relation of $D_4$.

Therefore $\mathrm{Gal}(E/\mathbb{Q}) \cong D_4$ (dihedral group of order $8$). $\blacksquare$

</details>

