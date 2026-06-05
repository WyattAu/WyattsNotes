---
title: abstract algebra
slug: abstract-algebra
date: 2026-05-30
tags:
  - University Maths
categories:
  - University Maths
description:
  'University-level abstract algebra: groups, rings, fields, homomorphisms, quotient structures,
  Sylow theorems, Galois theory, and applications to number theory.'
---

## 1. Introduction

### 1.1 What is Abstract Algebra?

**Abstract algebra** is the study of algebraic structures — sets equipped with operations satisfying
certain axioms. Rather than studying specific objects (numbers, matrices, polynomials) in isolation,
abstract algebra identifies the common structural patterns they share and studies these patterns in
their full generality.

The central objects of study are **groups**, **rings**, and **fields**. Each adds successive layers
of algebraic structure:

- **Groups:** A set with one binary operation satisfying closure, associativity, identity, and
  inverses.
- **Rings:** A set with two binary operations (addition and multiplication) where addition is
  abelian, multiplication is associative, and the distributive laws hold.
- **Fields:** A ring in which every nonzero element has a multiplicative inverse.

### 1.2 Motivation

Abstract algebra arises by definition from several directions:

- **Number theory:** Fermat's little theorem and Euler's theorem are most by definition understood
  through the lens of group theory. The structure of $\mathbb{Z}/n\mathbb{Z}$ and its units
  underpins modular arithmetic.
- **Equation solving:** The question "which polynomial equations can be solved by radicals?"
  motivated Galois theory, one of the crowning achievements of 19th-century mathematics.
- **Geometry and physics:** Symmetry groups describe the fundamental symmetries of physical systems,
  crystals, and geometric objects. Lie groups and Lie algebras bridge algebra with differential
  geometry and quantum mechanics.
- **Cryptography:** RSA, Diffie–Hellman key exchange, and elliptic curve cryptography all rely on
  group-theoretic hardness assumptions.

### 1.3 Historical Remarks

Key figures include Galois (groups and solvability, 1830s), Cauchy and Lagrange (early group theory,
late 1700s–early 1800s), Dedekind and Kronecker (rings and ideals, 1870s–80s), Noether (abstract
ring theory and the isomorphism theorems, 1920s), and Artin (Galois theory reformulation, 1940s).

## 2. Groups

### 2.1 Definition

**Definition.** A **group** is a pair $(G, \cdot)$ where $G$ is a set and $\cdot : G \times G \to G$
is a binary operation satisfying:

1. **Closure:** For all $a, b \in G$, $a \cdot b \in G$.
2. **Associativity:** For all $a, b, c \in G$, $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.
3. **Identity:** There exists $e \in G$ such that for all $a \in G$, $e \cdot a = a \cdot e = a$.
4. **Inverses:** For each $a \in G$, there exists $a^{-1} \in G$ such that
   $a \cdot a^{-1} = a^{-1} \cdot a = e$.

A group is **abelian** (or commutative) if $a \cdot b = b \cdot a$ for all $a, b \in G$.

The **order** of a group $G$, denoted $|G|$, is the number of elements in $G$. The **order** of an
element $g \in G$ is the smallest positive integer $n$ such that $g^n = e$; if no such $n$ exists,
$g$ has infinite order.

### 2.2 Examples of Groups

**Example 2.1 (Integers under addition).** $(\mathbb{Z}, +)$ is an infinite abelian group. Identity:
$0$. Inverse of $n$: $-n$.

**Example 2.2 (Symmetric group).** The **symmetric group** $S_n$ is the group of all permutations of
$\{1, 2, \ldots, n\}$ under composition. $|S_n| = n!$. For $n \geq 3$, $S_n$ is non-abelian.

**Example 2.3 (Dihedral group).** The **dihedral group** $D_n$ is the symmetry group of a regular
$n$-gon, consisting of $n$ rotations and $n$ reflections. $|D_n| = 2n$. For $n \geq 3$, $D_n$ is
non-abelian.

**Example 2.4 (Cyclic group).** A **cyclic group** of order $n$ is
$\mathbb{Z}/n\mathbb{Z} = \{0, 1, 2, \ldots, n{-}1\}$ under addition modulo $n$. Every cyclic group
is abelian. Up to isomorphism, there is exactly one cyclic group of each finite order $n$ and one
infinite cyclic group $\mathbb{Z}$.

**Example 2.5 (General linear group).** The **general linear group** $\mathrm{GL}(n, \mathbb{R})$ is
the group of all $n \times n$ invertible real matrices under matrix multiplication. It is
non-abelian for $n \geq 2$.

**Example 2.6 (Unit group).** For $n \geq 2$, the **unit group** $(\mathbb{Z}/n\mathbb{Z})^\times$
consists of the elements of $\mathbb{Z}/n\mathbb{Z}$ coprime to $n$, under multiplication modulo
$n$. Its order is $\phi(n)$ (Euler's totient function).

### 2.3 Subgroups

**Definition.** A **subgroup** of $G$ is a subset $H \subseteq G$ that is itself a group under the
operation restricted to $H$.

**Proposition.** $H \subseteq G$ is a subgroup if and only if:

1. $e \in H$.
2. For all $a, b \in H$, $a \cdot b^{-1} \in H$.

**Example 2.7.** The **alternating group** $A_n$ (even permutations) is a subgroup of $S_n$ with
$|A_n| = n!/2$.

### 2.4 Lagrange's Theorem

**Theorem 2.1 (Lagrange).** If $H$ is a subgroup of a finite group $G$, then $|H|$ divides $|G|$.

_Proof sketch._ The left cosets $aH = \{ah : h \in H\}$ partition $G$ into disjoint subsets of equal
size $|H|$. Therefore $|G| = [G:H] \cdot |H|$, where $[G:H] = |G|/|H|$ is the **index** of $H$ in
$G$.

**Corollary.** The order of any element $g \in G$ divides $|G|$.

### 2.5 Cosets and Normal Subgroups

**Definition.** For a subgroup $H \leq G$ and $a \in G$, the **left coset** of $H$ by $a$ is
$aH = \{ah : h \in H\}$. The **right coset** is $Ha = \{ha : h \in H\}$.

**Definition.** A subgroup $H \leq G$ is **normal** (written $H \triangleleft G$) if $aH = Ha$ for
all $a \in G$. Equivalently, $aha^{-1} \in H$ for all $a \in G$, $h \in H$.

When $H \triangleleft G$, the set of cosets $G/H$ forms a group under the operation
$(aH)(bH) = (ab)H$. This is the **quotient group**.

**Example 2.8.** $A_n \triangleleft S_n$ for all $n \geq 2$, and
$S_n / A_n \cong \mathbb{Z}/2\mathbb{Z}$.

**Example 2.10.** The **centre** $Z(G) = \{z \in G : zg = gz \text{ for all } g \in G\}$ is a normal
subgroup of $G$.

### 2.6 Conjugacy Classes and the Class Equation

**Definition.** Two elements $a, b \in G$ are **conjugate** if there exists $g \in G$ such that
$b = gag^{-1}$. Conjugacy is an equivalence relation; its equivalence classes are the **conjugacy
classes**.

**Proposition.** In $S_n$, conjugacy classes are determined by cycle type. Two permutations are
conjugate if and only if they have the same cycle structure.

**Theorem 2.2 (Class equation).** For a finite group $G$:

$$|G| = |Z(G)| + \sum_{i=1}^{r} [G : C_G(g_i)]$$

where $g_1, \ldots, g_r$ are representatives of the non-central conjugacy classes, and
$C_G(g) = \{x \in G : xg = gx\}$ is the **centraliser** of $g$.

**Corollary.** Every finite $p$-group has a non-trivial centre. (Proof: the terms $[G : C_G(g_i)]$
are powers of $p$ greater than 1, so they are divisible by $p$; since $|G|$ is a power of $p$,
$|Z(G)|$ must also be divisible by $p$.)

### 2.7 Group Actions

**Definition.** A **group action** of $G$ on a set $X$ is a map $G \times X \to X$, written
$(g, x) \mapsto g \cdot x$, satisfying $e \cdot x = x$ and $(gh) \cdot x = g \cdot (h \cdot x)$.

**Theorem 2.3 (Orbit-Stabiliser).** For $x \in X$:

$$|G| = |\operatorname{Orb}(x)| \cdot |\operatorname{Stab}(x)|$$

where $\operatorname{Orb}(x) = \{g \cdot x : g \in G\}$ is the orbit and
$\operatorname{Stab}(x) = \{g \in G : g \cdot x = x\}$ is the stabiliser.

This generalises both Lagrange's theorem (acting on cosets) and the class equation (acting on itself
by conjugation).

## 3. Group Homomorphisms

### 3.1 Definition and Basic Properties

**Definition.** A **group homomorphism** is a map $\phi : G \to H$ between groups such that
$\phi(ab) = \phi(a)\phi(b)$ for all $a, b \in G$.

The **kernel** of $\phi$ is $\ker(\phi) = \{g \in G : \phi(g) = e_H\}$.

The **image** of $\phi$ is $\operatorname{im}(\phi) = \{\phi(g) : g \in G\}$.

**Proposition.** $\ker(\phi)$ is a normal subgroup of $G$, and $\operatorname{im}(\phi)$ is a
subgroup of $H$.

A homomorphism is:

- **Injective** (monomorphism) if and only if $\ker(\phi) = \{e_G\}$.
- **Surjective** (epimorphism) if and only if $\operatorname{im}(\phi) = H$.
- **Bijective** (isomorphism) if both.

### 3.2 The First Isomorphism Theorem

**Theorem 3.1 (First Isomorphism Theorem).** If $\phi : G \to H$ is a group homomorphism, then

$$G/\ker(\phi) \cong \operatorname{im}(\phi).$$

This is the fundamental link between homomorphisms and quotient groups. Every normal subgroup
$N \triangleleft G$ arises as the kernel of the natural projection $\pi : G \to G/N$.

**Example 3.1.** The determinant $\det : \mathrm{GL}(n, \mathbb{R}) \to \mathbb{R}^\times$ is a
homomorphism with $\ker(\det) = \mathrm{SL}(n, \mathbb{R})$ (matrices with determinant 1). Hence
$\mathrm{GL}(n,\mathbb{R})/\mathrm{SL}(n,\mathbb{R}) \cong \mathbb{R}^\times$.

**Example 3.2.** The sign map $\operatorname{sgn} : S_n \to \{\pm 1\}$ is a homomorphism with
$\ker(\operatorname{sgn}) = A_n$. Hence $S_n/A_n \cong \mathbb{Z}/2\mathbb{Z}$.

**Example 3.3.** The quotient map $\mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ sending
$a \mapsto a \pmod{n}$ is a surjective homomorphism with kernel $(n) = n\mathbb{Z}$.

### 3.3 Second and Third Isomorphism Theorems

**Theorem 3.2 (Second Isomorphism Theorem).** If $N \triangleleft G$ and $K \leq G$, then
$K/(N \cap K) \cong NK/N$.

**Theorem 3.3 (Third Isomorphism Theorem).** If $N \triangleleft G$ and $M \triangleleft G$ with
$N \subseteq M$, then $(G/N)/(M/N) \cong G/M$.

### 3.4 Cayley's Theorem

**Theorem 3.4 (Cayley).** Every group $G$ is isomorphic to a subgroup of some symmetric group.
Specifically, $G$ embeds into $S_{|G|}$ via the left regular representation $g \mapsto \rho_g$ where
$\rho_g(x) = gx$.

This shows that the symmetric groups are, in a precise sense, universal — every group is a
permutation group.

### 3.5 Direct Products and Semidirect Products

**Definition.** The **direct product** $G \times H$ of groups $G$ and $H$ is the set of ordered
pairs $(g, h)$ with componentwise operation $(g_1, h_1)(g_2, h_2) = (g_1 g_2, h_1 h_2)$.

If $G, H$ are finite, then $|G \times H| = |G| \cdot |H|$. Both $G$ and $H$ embed as normal
subgroups of $G \times H$.

**Definition.** A **semidirect product** $N \rtimes_\phi H$ generalises the direct product. Given a
homomorphism $\phi : H \to \operatorname{Aut}(N)$, the semidirect product has elements $(n, h)$ with
multiplication $(n_1, h_1)(n_2, h_2) = (n_1 \phi(h_1)(n_2), h_1 h_2)$.

$N$ is normal in $N \rtimes H$, but $H$ need not be. Every extension $1 \to N \to G \to H \to 1$
with a complement is a semidirect product.

**Example 3.4.** $D_n \cong \mathbb{Z}/n\mathbb{Z} \rtimes \mathbb{Z}/2\mathbb{Z}$. The action of
$\mathbb{Z}/2\mathbb{Z}$ on $\mathbb{Z}/n\mathbb{Z}$ is inversion: $k \mapsto -k$.

**Example 3.5.** $Q_8$ is _not_ a semidirect product of smaller groups — it is a non-split extension
of $\mathbb{Z}/2\mathbb{Z}$ by $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.

## 4. Sylow Theorems

### 4.1 Statement

**Definition.** A **$p$-group** is a group whose order is a power of a prime $p$. A **Sylow
$p$-subgroup** of $G$ is a subgroup of order $p^k$ where $p^k$ divides $|G|$ but $p^{k+1}$ does not.

**Theorem 4.1 (First Sylow Theorem).** If $p^k \mid |G|$, then $G$ has a subgroup of order $p^k$. In
particular, Sylow $p$-subgroups exist.

**Theorem 4.2 (Second Sylow Theorem).** All Sylow $p$-subgroups of $G$ are conjugate. If $P$ and $Q$
are Sylow $p$-subgroups, there exists $g \in G$ such that $P = gQg^{-1}$.

**Theorem 4.3 (Third Sylow Theorem).** The number $n_p$ of Sylow $p$-subgroups satisfies:

1. $n_p \equiv 1 \pmod{p}$.
2. $n_p$ divides $|G|/p^k$.

### 4.2 Applications: Classifying Groups of Small Order

**Example 4.1 (Groups of order $pq$).** Let $|G| = pq$ where $p < q$ are primes. The number of Sylow
$q$-subgroups satisfies $n_q \equiv 1 \pmod{q}$ and $n_q \mid p$. Since $p < q$, we must have
$n_q = 1$, so the Sylow $q$-subgroup $Q$ is normal.

The number of Sylow $p$-subgroups satisfies $n_p \equiv 1 \pmod{p}$ and $n_p \mid q$. If
$p \nmid (q - 1)$, then $n_p = 1$ and both Sylow subgroups are normal, so
$G \cong \mathbb{Z}/pq\mathbb{Z}$. If $p \mid (q - 1)$, there are two groups:
$\mathbb{Z}/pq\mathbb{Z}$ and $\mathbb{Z}/q\mathbb{Z} \rtimes \mathbb{Z}/p\mathbb{Z}$.

**Example 4.2 (Groups of order $p^2$).** Every group of order $p^2$ is abelian. Proof: if
$|Z(G)| = p$, then $G/Z(G)$ has order $p$ and is cyclic, which forces $G$ to be abelian —
contradiction. So $|Z(G)| = p^2$ and $G = Z(G)$. Hence $G$ is isomorphic to either
$\mathbb{Z}/p^2\mathbb{Z}$ or $\mathbb{Z}/p\mathbb{Z} \times \mathbb{Z}/p\mathbb{Z}$.

**Example 4.3 (Groups of order 8).** Up to isomorphism, the five groups of order 8 are:
$\mathbb{Z}/8\mathbb{Z}$, $\mathbb{Z}/4\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$,
$(\mathbb{Z}/2\mathbb{Z})^3$, $D_4$, and the quaternion group $Q_8$.

The first three are abelian. $D_4$ and $Q_8$ are both non-abelian with $n_2 = 1$, and can be
distinguished by the number of elements of order 2: $D_4$ has five, $Q_8$ has one.

**Example 4.4 (Simple group of order 60).** $A_5$ is the smallest non-abelian simple group. Using
Sylow theory on $|A_5| = 60 = 2^2 \cdot 3 \cdot 5$: the third Sylow theorem gives
$n_5 \equiv 1 \pmod{5}$ with $n_5 \mid 12$, so $n_5 = 6$. The action of $A_5$ by conjugation on the
six Sylow 5-subgroups gives a homomorphism $A_5 \to S_6$. Since $A_5$ is simple, this homomorphism
is injective, and the analysis shows no proper normal subgroups exist.

## 5. Rings and Fields

### 5.1 Definitions

**Definition.** A **ring** is a triple $(R, +, \cdot)$ where $R$ is a set and $+$, $\cdot$ are
binary operations satisfying:

1. $(R, +)$ is an abelian group.
2. Multiplication is associative.
3. The distributive laws hold: $a(b + c) = ab + ac$ and $(a + b)c = ac + bc$ for all
   $a, b, c \in R$.

A ring is **commutative** if $ab = ba$ for all $a, b$. A ring is a **ring with unity** if it has a
multiplicative identity $1_R \neq 0_R$.

**Definition.** An **integral domain** is a commutative ring with unity in which $ab = 0$ implies
$a = 0$ or $b = 0$ (no zero divisors).

**Definition.** A **field** is a commutative ring with unity in which every nonzero element has a
multiplicative inverse. Equivalently, a field is an integral domain in which every nonzero element
is a unit.

### 5.2 Examples

**Example 5.1.** $\mathbb{Z}$ is an integral domain but not a field. $\mathbb{Q}$, $\mathbb{R}$, and
$\mathbb{C}$ are fields.

**Example 5.2.** $\mathbb{Z}/n\mathbb{Z}$ is a field if and only if $n$ is prime. When $n = p$ is
prime, we write $\mathbb{F}_p$.

**Example 5.3.** The ring $M_n(\mathbb{R})$ of $n \times n$ real matrices is non-commutative and has
zero divisors for $n \geq 2$.

### 5.3 Polynomial Rings

**Definition.** If $R$ is a ring, the **polynomial ring** $R[x]$ consists of formal sums
$f(x) = \sum_{k=0}^{n} a_k x^k$ with $a_k \in R$, under the usual addition and multiplication of
polynomials.

**Theorem 5.1.** If $R$ is an integral domain, then $R[x]$ is an integral domain. The units of
$R[x]$ are precisely the units of $R$.

**Theorem 5.2 (Division algorithm).** If $F$ is a field and $f, g \in F[x]$ with $g \neq 0$, there
exist unique $q, r \in F[x]$ with $\deg(r) < \deg(g)$ such that $f = qg + r$.

### 5.4 Ideals and Quotient Rings

**Definition.** An **ideal** of a ring $R$ is a subset $I \subseteq R$ such that:

1. $(I, +)$ is a subgroup of $(R, +)$.
2. For all $r \in R$ and $a \in I$: $ra \in I$ and $ar \in I$.

**Definition.** An ideal $I$ is **prime** if $ab \in I$ implies $a \in I$ or $b \in I$. An ideal
$I \neq R$ is **maximal** if there is no ideal $J$ with $I \subsetneq J \subsetneq R$.

**Proposition.** Every maximal ideal is prime. In a commutative ring with unity, $R/I$ is a field if
and only if $I$ is maximal, and $R/I$ is an integral domain if and only if $I$ is prime.

When $I$ is an ideal, the quotient $R/I$ is a ring under $(a + I) + (b + I) = (a + b) + I$ and
$(a + I)(b + I) = ab + I$.

**Example 5.4.** $\mathbb{Z}/n\mathbb{Z}$ is the quotient ring $\mathbb{Z}/(n)$ where
$(n) = n\mathbb{Z}$ is the ideal generated by $n$. The ideal $(p)$ is maximal (hence prime) in
$\mathbb{Z}$ when $p$ is prime.

**Example 5.5.** For a field $F$ and irreducible $f(x) \in F[x]$, the ideal $(f)$ is maximal, so
$F[x]/(f)$ is a field.

### 5.5 Unique Factorisation Domains and Principal Ideal Domains

**Definition.** A **principal ideal domain (PID)** is an integral domain in which every ideal is
principal (generated by a single element).

**Definition.** A **unique factorisation domain (UFD)** is an integral domain in which every nonzero
non-unit element factors uniquely (up to order and units) into irreducibles.

**Example 5.6.** $\mathbb{Z}$ is a PID (every ideal is $(n)$ for some $n \geq 0$) and hence a UFD.
$\mathbb{Q}[x]$ is a PID; more generally, $F[x]$ is a PID for any field $F$.

**Example 5.7.** $\mathbb{Z}[x]$ is a UFD but not a PID. The ideal $(2, x) \subset \mathbb{Z}[x]$ is
not principal.

**Example 5.8.** $\mathbb{Z}[\sqrt{-5}]$ is not a UFD:
$6 = 2 \cdot 3 = (1 + \sqrt{-5})(1 - \sqrt{-5})$ gives two genuinely different factorisations into
irreducibles.

**Theorem 5.3.** Every PID is a UFD. The converse fails ($\mathbb{Z}[x]$ is a UFD but not a PID).

**Theorem 5.4 (Euclidean algorithm).** Every Euclidean domain (an integral domain with a division
algorithm) is a PID. Examples include $\mathbb{Z}$ and $F[x]$ for any field $F$.

### 5.5 Field Extensions

**Definition.** A **field extension** $K/F$ is an inclusion of fields $F \subseteq K$. The
**degree** $[K : F]$ is the dimension of $K$ as a vector space over $F$.

**Theorem 5.3 (Tower law).** If $F \subseteq E \subseteq K$ are field extensions, then
$[K : F] = [K : E][E : F]$.

**Definition.** A field $F$ is **algebraically closed** if every non-constant polynomial in $F[x]$
has a root in $F$. The **algebraic closure** $\overline{F}$ of $F$ is the smallest algebraically
closed field containing $F$.

**Example 5.6.** $\mathbb{C}$ is the algebraic closure of $\mathbb{R}$, and
$[\mathbb{C} : \mathbb{R}] = 2$.

**Example 5.7.** The splitting field of $x^3 - 2$ over $\mathbb{Q}$ is
$\mathbb{Q}(\sqrt[3]{2}, \omega)$ where $\omega = e^{2\pi i/3}$, with degree
$[\mathbb{Q}(\sqrt[3]{2}, \omega) : \mathbb{Q}] = 6$.

### 5.6 Finite Fields

**Theorem 5.4.** For every prime $p$ and integer $n \geq 1$, there exists a unique (up to
isomorphism) finite field of order $p^n$, denoted $\mathbb{F}_{p^n}$ or $\mathrm{GF}(p^n)$.

The finite field $\mathbb{F}_{p^n}$ is the splitting field of $x^{p^n} - x$ over $\mathbb{F}_p$. Its
multiplicative group $\mathbb{F}_{p^n}^\times$ is cyclic of order $p^n - 1$.

**Theorem 5.5.** $\mathbb{F}_{p^m}$ is a subfield of $\mathbb{F}_{p^n}$ if and only if $m \mid n$.
In that case, $[\mathbb{F}_{p^n} : \mathbb{F}_{p^m}] = n/m$.

**Example 5.8.** $\mathbb{F}_4 = \mathbb{F}_2[x]/(x^2 + x + 1) = \{0, 1, \alpha, \alpha{+}1\}$ where
$\alpha^2 = \alpha + 1$. The multiplicative group $\mathbb{F}_4^\times = \{1, \alpha, \alpha{+}1\}$
is cyclic of order 3, generated by $\alpha$ (since $\alpha^2 = \alpha + 1$ and $\alpha^3 = 1$).

**Example 5.9.** $\mathbb{F}_{p^n}^\times$ is cyclic for all $p, n$. This generator is called a
**primitive element**. Its existence follows from the classification of finite abelian groups: every
finite subgroup of the multiplicative group of a field is cyclic.

## 6. Galois Theory

### 6.1 Field Automorphisms

**Definition.** A **field automorphism** of $K$ is an isomorphism $\sigma : K \to K$ of fields. The
set $\operatorname{Aut}(K)$ of all automorphisms of $K$ forms a group under composition.

For a field extension $K/F$, define

$$\operatorname{Aut}(K/F) = \{\sigma \in \operatorname{Aut}(K) : \sigma(a) = a \text{ for all } a \in F\}.$$

### 6.2 Galois Extensions

**Definition.** A finite field extension $K/F$ is **Galois** if
$|\operatorname{Aut}(K/F)| = [K : F]$.

Equivalently, $K/F$ is Galois if $K$ is the splitting field of a separable polynomial over $F$.

**Definition.** For a Galois extension $K/F$, the **Galois group** is
$\operatorname{Gal}(K/F) = \operatorname{Aut}(K/F)$.

**Example 6.1.** The extension $\mathbb{Q}(\sqrt{2})/\mathbb{Q}$ is Galois with
$\operatorname{Gal}(\mathbb{Q}(\sqrt{2})/\mathbb{Q}) \cong \mathbb{Z}/2\mathbb{Z}$, generated by
$\sigma : a + b\sqrt{2} \mapsto a - b\sqrt{2}$.

**Example 6.2.** The extension $\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}$ has Galois group
$\operatorname{Gal} \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$, with four
automorphisms determined by the signs on $\sqrt{2}$ and $\sqrt{3}$.

**Example 6.3.** The splitting field of $x^3 - 2$ over $\mathbb{Q}$ is
$\mathbb{Q}(\sqrt[3]{2}, \omega)$ where $\omega = e^{2\pi i/3}$, with degree
$[\mathbb{Q}(\sqrt[3]{2}, \omega) : \mathbb{Q}] = 6$.

$$\operatorname{Gal}(\mathbb{Q}(\sqrt[3]{2}, \omega)/\mathbb{Q}) \cong S_3$$

The six automorphisms permute the three roots $\sqrt[3]{2}, \omega\sqrt[3]{2}, \omega^2\sqrt[3]{2}$.
The intermediate fields are:

$$\mathbb{Q} \subset \mathbb{Q}(\omega) \subset \mathbb{Q}(\sqrt[3]{2}, \omega), \qquad \mathbb{Q} \subset \mathbb{Q}(\sqrt[3]{2}) \subset \mathbb{Q}(\sqrt[3]{2}, \omega), \qquad \mathbb{Q} \subset \mathbb{Q}(\omega\sqrt[3]{2}) \subset \mathbb{Q}(\sqrt[3]{2}, \omega)$$

Only $\mathbb{Q}(\omega)/\mathbb{Q}$ is Galois among the proper intermediate extensions
(corresponding to the unique normal subgroup $A_3 \triangleleft S_3$).

### 6.3 The Fundamental Theorem of Galois Theory

**Theorem 6.1 (Fundamental Theorem of Galois Theory).** Let $K/F$ be a Galois extension with Galois
group $G = \operatorname{Gal}(K/F)$. Then there is a one-to-one, order-reversing correspondence:

$$\{\text{Intermediate fields } F \subseteq E \subseteq K\} \longleftrightarrow \{\text{Subgroups } H \subseteq G\}$$

given by $E \mapsto \operatorname{Gal}(K/E)$ and $H \mapsto K^H$ (the fixed field of $H$),
satisfying:

1. $[K : E] = |H|$ and $[E : F] = [G : H]$.
2. $E/F$ is Galois if and only if $H \triangleleft G$, in which case
   $\operatorname{Gal}(E/F) \cong G/H$.

### 6.4 Solvability by Radicals

**Definition.** A polynomial $f \in F[x]$ is **solvable by radicals** if its roots can be expressed
using only the operations $+$, $-$, $\times$, $\div$, and $n$-th roots.

A group $G$ is **solvable** if there exists a chain of subgroups

$$G = G_0 \trianglerighteq G_1 \trianglerighteq \cdots \trianglerighteq G_n = \{e\}$$

where each $G_{i+1}$ is normal in $G_i$ and each quotient $G_i/G_{i+1}$ is cyclic of prime order.

**Theorem 6.2.** A polynomial $f \in \mathbb{Q}[x]$ is solvable by radicals if and only if
$\operatorname{Gal}(f)$ is a solvable group.

**Theorem 6.3 (Abel–Ruffini).** The general polynomial of degree $n \geq 5$ is not solvable by
radicals. Specifically, the Galois group of $x^5 - 4x + 2$ over $\mathbb{Q}$ is $S_5$, and since
$A_5$ is simple and non-abelian, $S_5$ is not solvable.

### 6.5 Cyclotomic Extensions

The **cyclotomic field** $\mathbb{Q}(\zeta_n)$, where $\zeta_n = e^{2\pi i/n}$ is a primitive $n$-th
root of unity, is the splitting field of $x^n - 1$ over $\mathbb{Q}$.

**Theorem 6.4.** The Galois group $\operatorname{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q})$ is isomorphic
to $(\mathbb{Z}/n\mathbb{Z})^\times$ — the unit group of $\mathbb{Z}/n\mathbb{Z}$.

**Example 6.4.** For $n = 5$:
$\operatorname{Gal}(\mathbb{Q}(\zeta_5)/\mathbb{Q}) \cong (\mathbb{Z}/5\mathbb{Z})^\times \cong \mathbb{Z}/4\mathbb{Z}$.
The degree is $\phi(5) = 4$.

**Example 6.5.** For $n = 8$:
$\operatorname{Gal}(\mathbb{Q}(\zeta_8)/\mathbb{Q}) \cong (\mathbb{Z}/8\mathbb{Z})^\times \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$.
The degree is $\phi(8) = 4$.

### 6.6 Constructibility with Straightedge and Compass

A real number $\alpha$ is **constructible** if it can be obtained from rational numbers using only
straightedge and compass operations (addition, subtraction, multiplication, division, and square
roots).

**Theorem 6.5.** $\alpha$ is constructible if and only if $[\mathbb{Q}(\alpha) : \mathbb{Q}]$ is a
power of 2.

**Corollary (Classical impossibilities).**

- **Doubling the cube** requires $\sqrt[3]{2}$, with $[\mathbb{Q}(\sqrt[3]{2}) : \mathbb{Q}] = 3$ —
  not a power of 2. Impossible.
- **Trisecting a general angle** reduces to solving a cubic equation whose Galois group has order 3
  — not a power of 2. Impossible.
- **Squaring the circle** requires constructing $\pi$, which is transcendental over $\mathbb{Q}$
  (Lindemann, 1882). Impossible.

## 7. Applications

### 7.1 RSA Cryptography

RSA relies on the difficulty of factoring large integers, but its correctness proof uses elementary
group theory on $(\mathbb{Z}/n\mathbb{Z})^\times$.

**Key generation:** Choose distinct primes $p, q$; set $n = pq$. The public key is $(n, e)$ where
$\gcd(e, \phi(n)) = 1$. The private key is $d = e^{-1} \pmod{\phi(n)}$.

**Encryption:** $c = m^e \pmod{n}$ for message $m$.

**Decryption:** $m = c^d \pmod{n}$.

**Correctness.** Since $ed \equiv 1 \pmod{\phi(n)}$, we have $c^d = m^{ed} \equiv m \pmod{n}$ by
Euler's theorem (a consequence of Lagrange's theorem applied to $(\mathbb{Z}/n\mathbb{Z})^\times$).

### 7.2 Error-Correcting Codes

Finite fields provide the algebraic foundation for error-correcting codes. A **linear code** of
length $n$ over $\mathbb{F}_q$ is a subspace of $\mathbb{F}_q^n$.

**Example (Reed–Solomon codes).** A Reed–Solomon code of dimension $k$ and length $n$ over
$\mathbb{F}_{p^m}$ encodes a message as the evaluations of a polynomial of degree $< k$ at $n$
distinct field elements. It can correct up to $(n - k)/2$ errors.

**Example (BCH codes).** Bose–Chaudhuri–Hocquenghem codes generalise Reed–Solomon codes to arbitrary
finite fields and provide flexible trade-offs between code rate and error correction capability.

### 7.3 Crystallography and Group Actions

The symmetry group of a crystal (a **space group**) classifies crystalline structures. The
mathematical framework is that of **group actions**: a group $G$ acts on a set $X$ if there is a map
$G \times X \to X$ satisfying $g_1(g_2 x) = (g_1 g_2)x$ and $ex = x$.

There are exactly 230 crystallographic space groups in 3D, 17 wallpaper groups in 2D, and 7 frieze
groups in 1D — all classified by group-theoretic methods.

### 7.4 Fermat's Little Theorem and Applications

**Theorem (Fermat's little theorem).** If $p$ is prime and $\gcd(a, p) = 1$, then
$a^{p-1} \equiv 1 \pmod{p}$.

This is an immediate consequence of Lagrange's theorem: the order of $a$ in
$(\mathbb{Z}/p\mathbb{Z})^\times$ divides $|(\mathbb{Z}/p\mathbb{Z})^\times| = p - 1$.

**Euler's theorem** generalises this: if $\gcd(a, n) = 1$, then $a^{\phi(n)} \equiv 1 \pmod{n}$.

**Application (primality testing).** The Fermat test checks whether $a^{n-1} \equiv 1 \pmod{n}$ for
several bases $a$. If $n$ fails for any $a$, it is composite. If $n$ passes for many $a$, it is
_likely_ prime (though Carmichael numbers fool this test). More robust tests like Miller–Rabin use
the structure of $(\mathbb{Z}/n\mathbb{Z})^\times$ more carefully.

### 7.5 Diffie–Hellman Key Exchange

The **Diffie–Hellman protocol** allows two parties to establish a shared secret over a public
channel using cyclic groups.

**Setup:** Fix a cyclic group $G$ of prime order $q$ with generator $g$ (e.g.,
$G = \mathbb{F}_p^\times$).

**Protocol:**

1. Alice picks random $a \in \{1, \ldots, q-1\}$, sends $g^a$ to Bob.
2. Bob picks random $b \in \{1, \ldots, q-1\}$, sends $g^b$ to Alice.
3. Both compute $(g^a)^b = (g^b)^a = g^{ab}$ as the shared secret.

Security relies on the **discrete logarithm problem**: given $g$ and $g^a$, finding $a$ is
computationally infeasible in sufficiently large groups.

## 8. Common Pitfalls

1. **"Every subgroup is normal."** False. In $S_3$, the subgroup $H = \{e, (12)\}$ has
   $(13)H(13)^{-1} = \{e, (23)\} \neq H$. Normality is a special property, not automatic.

2. **"The converse of Lagrange's theorem holds."** False. $A_4$ has order 12 but no subgroup of
   order 6. The converse holds for Sylow subgroups but not as a general principle.

3. **"Abelian implies cyclic."** False. $\mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$ is
   abelian but not cyclic — every non-identity element has order 2.

4. **"Every field extension is Galois."** False. $\mathbb{Q}(\sqrt[3]{2})/\mathbb{Q}$ has degree 3
   but only the identity automorphism (the other cube roots of 2 are complex and not in this field),
   so it is not Galois.

5. **"$S_n$ is solvable for all $n$."** False. $S_n$ is solvable only for $n \leq 4$. For
   $n \geq 5$, $A_n$ is simple and non-abelian, making $S_n$ non-solvable.

6. **"The kernel of a ring homomorphism is a subring, not an ideal."** The kernel is both an ideal
   and a subring. The key point is that kernels of ring homomorphisms are always ideals, and kernels
   of field homomorphisms are always trivial (fields have no nontrivial proper ideals).

7. **"$\mathbb{F}_{p^n}$ is the same as $\mathbb{Z}/p^n\mathbb{Z}$."** False.
   $\mathbb{Z}/p^n\mathbb{Z}$ is not a field for $n > 1$ (it has zero divisors). $\mathbb{F}_{p^n}$
   is the splitting field of $x^{p^n} - x$ over $\mathbb{F}_p$ — an entirely different structure.

## 9. Summary

| Concept                         | Key Idea                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------------------------ | --- | ----------- | --------------------- | ----------------------------------------------------------------- | ---------------------- | --- |
| Group                           | Set + associative binary operation with identity and inverses                              |
| Abelian group                   | Group with commutative operation                                                           |
| Subgroup                        | Subset closed under the group operation and inverses                                       |
| Lagrange's theorem              | $                                                                                          | H   | $ divides $ | G                     | $ for $H \leq G$                                                  |
| Coset                           | $aH = \{ah : h \in H\}$; partitions $G$ into equal-size subsets                            |
| Normal subgroup                 | $aha^{-1} \in H$ for all $a \in G, h \in H$                                                |
| Quotient group                  | $G/N$ inherits group structure when $N \triangleleft G$                                    |
| Conjugacy class                 | Equivalence class under $a \sim gag^{-1}$                                                  |
| Class equation                  | $                                                                                          | G   | =           | Z(G)                  | + \sum [G : C_G(g_i)]$; proves $p$-groups have non-trivial centre |
| Group action                    | $G$ acts on $X$ with orbit-stabiliser $                                                    | G   | =           | \operatorname{Orb}(x) | \cdot                                                             | \operatorname{Stab}(x) | $   |
| Homomorphism                    | $\phi(ab) = \phi(a)\phi(b)$; kernel is normal, image is a subgroup                         |
| First isomorphism theorem       | $G/\ker(\phi) \cong \operatorname{im}(\phi)$                                               |
| Cayley's theorem                | Every group embeds into a symmetric group                                                  |
| Sylow theorems                  | Existence, conjugacy, and counting of $p$-subgroups                                        |
| Ring                            | Set + addition (abelian group) + multiplication (associative, distributive)                |
| Integral domain                 | Commutative ring with unity and no zero divisors                                           |
| Field                           | Commutative ring with unity where every nonzero element is a unit                          |
| Prime/maximal ideal             | $R/I$ integral domain $\Leftrightarrow I$ prime; $R/I$ field $\Leftrightarrow I$ maximal   |
| PID                             | Integral domain where every ideal is principal; implies UFD                                |
| UFD                             | Unique factorisation into irreducibles; $\mathbb{Z}[x]$ is UFD but not PID                 |
| Polynomial ring $R[x]$          | Formal polynomials; integral domain if $R$ is                                              |
| Field extension $K/F$           | $K$ is a vector space over $F$; degree $= [K:F]$                                           |
| Tower law                       | $[K:F] = [K:E][E:F]$ for $F \subseteq E \subseteq K$                                       |
| Finite field $\mathbb{F}_{p^n}$ | Unique field of order $p^n$; multiplicative group is cyclic                                |
| Galois group                    | Automorphisms of $K$ fixing $F$; bridges fields and groups                                 |
| Fundamental theorem             | Lattice of intermediate fields $\leftrightarrow$ lattice of subgroups                      |
| Cyclotomic extension            | $\operatorname{Gal}(\mathbb{Q}(\zeta_n)/\mathbb{Q}) \cong (\mathbb{Z}/n\mathbb{Z})^\times$ |
| Constructibility                | $\alpha$ constructible $\Leftrightarrow$ $[\mathbb{Q}(\alpha):\mathbb{Q}]$ is a power of 2 |
| Solvability                     | Polynomial solvable by radicals $\Leftrightarrow$ Galois group is solvable                 |
| Abel–Ruffini                    | General quintic (degree $\geq 5$) is not solvable by radicals                              |
| Fermat's little theorem         | $a^{p-1} \equiv 1 \pmod{p}$; consequence of Lagrange's theorem                             |

## Worked Examples

### Example 1: Proving a Subgroup

**Problem:** Prove that the set of even permutations in S_n forms a subgroup (the alternating group
A_n). **Solution:** A permutation is even if it can be expressed as an even number of
transpositions. Identity: 0 transpositions (even). Closure: product of two even permutations has an
even total number of transpositions. Inverse: reversing the sequence of transpositions preserves
parity. Therefore A_n is a subgroup of S_n.

### Example 2: Calculating the Order of an Element

**Problem:** Find the order of the element (1 2 3)(4 5) in S_5. **Solution:** The order of a
permutation is the LCM of the cycle lengths. The cycles are (1 2 3) of length 3 and (4 5) of
length 2. Order = lcm(3, 2) = 6. The element (1 2 3)(4 5)^6 = identity.

## Cross-References

| Topic    | Link                                          |
| -------- | --------------------------------------------- |
| Topology | [View](/docs/university/mathematics/topology) |
