---
title: Rings
tags:
  - Mathematics
  - University
---

### 8.1 Definition of a Ring

A **ring** $(R, +, \cdot)$ is a set $R$ with two binary operations satisfying:

1. $(R, +)$ is an abelian group.
2. Multiplication is associative: $(ab)c = a(bc)$.
3. Distributive laws: $a(b + c) = ab + ac$ and $(a + b)c = ac + bc$.

A ring is **commutative** if $ab = ba$ for all $a, b \in R$. A ring with a multiplicative identity
$1$ is A **ring with unity**. A **field** is a commutative ring with unity in which every non-zero
element has A multiplicative inverse.

### 8.2 Examples

**Example 1.** $\mathbb{Z}$ is a commutative ring with unity, but not a field.

**Example 2.** $\mathbb{Z}/n\mathbb{Z}$ is a commutative ring with unity. It is a field if and only
if $n$ is prime.

**Example 3.** $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{C}$ are fields.

**Example 4.** The set $M_n(\mathbb{R})$ of $n \times n$ real matrices is a non-commutative ring
with unity.

**Example 5.** $\mathbb{Z}[i] = \{a + bi : a, b \in \mathbb{Z}\}$ (Gaussian integers) is a
commutative ring with unity.

### 8.3 Subrings

A **subring** $S \subseteq R$ is a subset that is itself a ring under the operations of $R$.

**Proposition 8.1 (Subring Criterion).** A non-empty subset $S \subseteq R$ is a subring if and only
if For all $a, b \in S$:

1. $a - b \in S$.
2. $ab \in S$.

### 8.4 Integral Domains

An **integral domain** is a commutative ring $R$ with unity $1 \neq 0$ in which there are no **zero
divisors**: if $ab = 0$ for $a, b \in R$Then $a = 0$ or $b = 0$.

**Proposition 8.2.** Every field is an integral domain.

_Proof._ Let $F$ be a field and suppose $ab = 0$ with $a \neq 0$. Then
$b = a^{-1}(ab) = a^{-1} \cdot 0 = 0$. $\blacksquare$

**Proposition 8.3.** $\mathbb{Z}/n\mathbb{Z}$ is an integral domain if and only if $n$ is prime.

_Proof._ If $n = p$ is prime, then $\mathbb{Z}/p\mathbb{Z}$ is a field, hence an integral domain. If
$n = ab$ with $1 \lt a, b \lt n$Then $[a][b] = [ab] = [n] = [0]$ in $\mathbb{Z}/n\mathbb{Z}$ But
$[a] \neq [0]$ and $[b] \neq [0]$So $\mathbb{Z}/n\mathbb{Z}$ has zero divisors. $\blacksquare$

**Proposition 8.4 (Cancellation Law for Integral Domains).** In an integral domain, if $ab = ac$ and
$a \neq 0$Then $b = c$.

_Proof._ $ab = ac$ implies $a(b - c) = 0$. Since $a \neq 0$ and there are no zero divisors,
$b - c = 0$. $\blacksquare$

### 8.5 Fields: Further Examples

**Example.** $\mathbb{Q}(\sqrt{2}) = \{a + b\sqrt{2} : a, b \in \mathbb{Q}\}$ is a field. The
inverse of $a + b\sqrt{2}$ (with $a, b$ not both zero) is $\frac{a - b\sqrt{2}}{a^2 - 2b^2}$.

**Example.** For any prime $p$, $\mathbb{Z}/p\mathbb{Z}$ is a field with $p$ elements, denoted
$\mathbb{F}_p$.

**Proposition 8.5.** In a finite integral domain $R$Every non-zero element is a unit. Hence every
finite Integral domain is a field.

_Proof._ Let $a \in R$ with $a \neq 0$. The map $\phi : R \to R$ given by $\phi(x) = ax$ is
injective (since $ax = ay$ implies $a(x-y) = 0$ implies $x = y$ by the cancellation law). Since $R$
is finite, $\phi$ is also surjective, so there exists $b \in R$ with $ab = 1$. Thus $a$ is a unit.
$\blacksquare$

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

_Proof._ (1) $\phi(0) = \phi(0 + 0) = \phi(0) + \phi(0)$So $\phi(0) = 0$ by cancellation in
$(S, +)$. (2) $\phi(a) + \phi(-a) = \phi(a + (-a)) = \phi(0) = 0$So $\phi(-a) = -\phi(a)$. (3)
$\ker(\phi)$ Is an ideal: it is a subgroup of $(R, +)$ by the group homomorphism property, and for
any $r \in R$ and $a \in \ker(\phi)$, $\phi(ra) = \phi(r)\phi(a) = \phi(r) \cdot 0 = 0$ and
$\phi(ar) = \phi(a)\phi(r) = 0$So $ra, ar \in \ker(\phi)$. $\blacksquare$

**Example.** The map $\phi : \mathbb{Z} \to \mathbb{Z}/n\mathbb{Z}$ given by $\phi(k) = [k]$ is a
surjective Ring homomorphism with kernel $n\mathbb{Z}$.

**Example.** The evaluation map $\phi : \mathbb{R}[x] \to \mathbb{R}$ given by $\phi(f) = f(a)$ for
a fixed $a \in \mathbb{R}$ is a surjective ring homomorphism with kernel
$\{f \in \mathbb{R}[x] : f(a) = 0\} = (x - a)$.

### 8.7 Worked Examples: Ring Homomorphisms

**Problem.** Let $\phi : \mathbb{Z}[i] \to \mathbb{Z}/5\mathbb{Z}$ be defined by
$\phi(a + bi) = (a + 2b) + 5\mathbb{Z}$. Show that $\phi$ is a surjective ring homomorphism and find
its kernel.

<details>
<summary>Solution</summary>

_Solution._ First, check it is a homomorphism:
$\phi((a+bi)(c+di)) = \phi((ac - bd) + (ad + bc)i) = (ac - bd + 2ad + 2bc) + 5\mathbb{Z}$
$= (ac + 2ad + 2bc - bd) + 5\mathbb{Z}$.

$\phi(a+bi)\phi(c+di) = (a+2b)(c+2d) + 5\mathbb{Z} = (ac + 2ad + 2bc + 4bd) + 5\mathbb{Z}$.

These differ by $5bd + 5\mathbb{Z} = 0 + 5\mathbb{Z}$ since $5bd$ is a multiple of $5$. So $\phi$
preserves Multiplication. Additivity is clear. Also $\phi(1) = 1 + 5\mathbb{Z}$. ✓

Surjectivity: $\phi(1) = 1$, $\phi(i) = 2$, $\phi(2) = 2$, $\phi(2i) = 4$, $\phi(1+i) = 3$,
$\phi(1+2i) = 5 \equiv 0$. We get all residues $0, 1, 2, 3, 4$So $\phi$ is surjective.

Kernel: $\ker(\phi) = \{a + bi : a + 2b \equiv 0 \pmod{5}\}$. For example, $1 + 2i \in \ker(\phi)$
since $1 + 4 = 5 \equiv 0 \pmod{5}$. Also $(1 + 2i)(1 - 2i) = 5 \in \ker(\phi)$. In fact,
$\ker(\phi) = (1 + 2i)$ (the principal ideal generated by $1 + 2i$ in $\mathbb{Z}[i]$). By the ring
isomorphism theorem, $\mathbb{Z}[i]/(1+2i) \cong \mathbb{Z}/5\mathbb{Z}$. $\blacksquare$

</details>

**Problem.** Let $R = \mathbb{Z}[x]/(x^2 - x)$. Describe the elements of $R$ and show that $R$ has
zero divisors.

<details>
<summary>Solution</summary>

_Solution._ In $R$We have $x^2 = x$. Every element can be written as $[a + bx]$ where
$a, b \in \mathbb{Z}$ Since higher powers reduce: $x^2 = x$, $x^3 = x^2 = x$Etc.

$R$ has zero divisors: $[x][x - 1] = [x^2 - x] = [0]$But $[x] \neq [0]$ and $[x - 1] \neq [0]$. So
$R$ is not an integral domain.

Note that $R \cong \mathbb{Z} \times \mathbb{Z}$ via the map $[a + bx] \mapsto (a, a + b)$. The
isomorphism follows from the Chinese Remainder Theorem: $(x^2 - x) = (x) \cap (x-1)$ And
$(x) + (x-1) = (1)$. $\blacksquare$

</details>

