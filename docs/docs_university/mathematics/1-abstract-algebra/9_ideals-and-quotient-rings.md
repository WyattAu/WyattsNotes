---
title: Ideals and Quotient Rings
tags:
  - Mathematics
  - University
---

### 9.1 Ideals

A subset $I \subseteq R$ is an **ideal** if:

1. $(I, +)$ is a subgroup of $(R, +)$.
2. For all $r \in R$ and $a \in I$: $ra \in I$ and $ar \in I$.

If only $ra \in I$ for all $r \in R$ and $a \in I$Then $I$ is a **left ideal**. Similarly for
**right Ideals**. A **two-sided ideal** (or **ideal**) satisfies both.

**Proposition 9.1.** Every ideal is a subring. The converse is false.

**Example.** $n\mathbb{Z} = \{nk : k \in \mathbb{Z}\}$ is an ideal of $\mathbb{Z}$.

**Example.** If $\phi : R \to S$ is a ring homomorphism, then $\ker(\phi)$ is an ideal of $R$.

### 9.2 Quotient Rings

If $I$ is an ideal of $R$The **quotient ring** $R/I$ has elements $\{a + I : a \in R\}$ (cosets)
With operations $(a + I) + (b + I) = (a + b) + I$ and $(a + I)(b + I) = ab + I$.

**Theorem 9.2 (Ring Isomorphism Theorem).** If $\phi : R \to S$ is a surjective ring homomorphism,
Then $R / \ker(\phi) \cong S$.

The .../1-number-and-algebra/3_proof-and-logic follows the same pattern as the first isomorphism
theorem for groups.

### 9.3 Prime and Maximal Ideals

An ideal $I \neq R$ is **prime** if $ab \in I$ implies $a \in I$ or $b \in I$.

An ideal $I \neq R$ is **maximal** if there is no ideal $J$ with $I \subsetneq J \subsetneq R$.

**Theorem 9.3.** In a commutative ring $R$ with unity:

1. $I$ is a prime ideal if and only if $R/I$ is an integral domain.
2. $I$ is a maximal ideal if and only if $R/I$ is a field.

**Corollary 9.4.** Every maximal ideal is prime.

_Proof._ A field is an integral domain. $\blacksquare$

**Example.** In $\mathbb{Z}$The ideal $(p)$ is maximal (hence prime) if and only if $p$ is prime.
The ideal $(6)$ is neither prime nor maximal. The ideal $(0)$ is prime ($\mathbb{Z}$ is an integral
domain) But not maximal ($\mathbb{Z}/(0) \cong \mathbb{Z}$ is not a field).

**Example.** In $\mathbb{R}[x]$The ideal $(x^2 + 1)$ is maximal since
$\mathbb{R}[x]/(x^2 + 1) \cong \mathbb{C}$ is a field.

**Problem.** Show that $(2)$ is a maximal ideal of $\mathbb{Z}$ but $(4)$ is not.

<details>
<summary>Solution</summary>

_Solution._ $\mathbb{Z}/(2) \cong \mathbb{Z}/2\mathbb{Z}$ is a field, so $(2)$ is maximal by Theorem
9.3.

$\mathbb{Z}/(4)$ has zero divisors: $[2][2] = [4] = [0]$ but $[2] \neq [0]$. So $\mathbb{Z}/(4)$ is
not An integral domain, hence $(4)$ is not prime, and therefore not maximal. Explicitly,
$(4) \subsetneq (2) \subsetneq \mathbb{Z}$. $\blacksquare$

</details>

### 9.4 The Chinese Remainder Theorem

**Theorem 9.5 (Chinese Remainder Theorem for Rings).** Let $R$ be a commutative ring with unity and
Let $I, J$ be ideals with $I + J = R$. Then

$$R/(I \cap J) \cong R/I \times R/J$$

_Proof._ Define $\phi : R \to R/I \times R/J$ by $\phi(r) = (r + I, r + J)$. This is a ring
homomorphism. It is surjective: since $I + J = R$There exist $a \in I$ and $b \in J$ with
$a + b = 1$. For any $(r_1 + I, r_2 + J)$Take $r = r_1b + r_2a$. Then
$r \equiv r_1b \equiv r_1(1-a) \equiv r_1 \pmod{I}$ And
$r \equiv r_2a \equiv r_2(1-b) \equiv r_2 \pmod{J}$.

The kernel is $\ker(\phi) = \{r : r \in I\ \mathrm{and\ r} \in J\} = I \cap J$. By the ring
isomorphism theorem, $R/(I \cap J) \cong R/I \times R/J$. $\blacksquare$

**Corollary 9.6.** If $m, n \in \mathbb{Z}$ are coprime, then
$\mathbb{Z}/(mn) \cong \mathbb{Z}/(m) \times \mathbb{Z}/(n)$.

_Proof._ Apply Theorem 9.5 with $I = (m)$, $J = (n)$. Since $\gcd(m, n) = 1$We have
$(m) + (n) = (1) = \mathbb{Z}$. Also $(m) \cap (n) = (\mathrm{lcm}(m, n)) = (mn)$. $\blacksquare$

**Problem.** Find all solutions to $x \equiv 2 \pmod{3}$, $x \equiv 3 \pmod{5}$,
$x \equiv 1 \pmod{7}$.

<details>
<summary>Solution</summary>

_Solution._ By the Chinese Remainder Theorem, since $\gcd(3, 5) = \gcd(3, 7) = \gcd(5, 7) = 1$ There
is a unique solution modulo $105$.

First, solve $x \equiv 2 \pmod{3}$ and $x \equiv 3 \pmod{5}$. $x = 2 + 3k$: we need
$2 + 3k \equiv 3 \pmod{5}$So $3k \equiv 1 \pmod{5}$Giving $k \equiv 2 \pmod{5}$. Thus
$x \equiv 2 + 6 = 8 \pmod{15}$.

Now solve $x \equiv 8 \pmod{15}$ and $x \equiv 1 \pmod{7}$. $x = 8 + 15k$: we need
$8 + 15k \equiv 1 \pmod{7}$So $1 + k \equiv 1 \pmod{7}$Giving $k \equiv 0 \pmod{7}$. Thus
$x \equiv 8 \pmod{105}$.

The unique solution modulo $105$ is $x \equiv 8 \pmod{105}$. $\blacksquare$

</details>

