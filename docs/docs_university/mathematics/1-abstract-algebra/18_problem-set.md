---
title: Problem Set
slug: abstract-algebra-problem-set
tags:
  - Mathematics
  - University
---

The following problems test understanding across all major topics. Full solutions are provided; Each
problem includes a cross-reference to the relevant section for review.

### Groups

**Problem 1.** Let $G$ be a group and $g \in G$ an element of order $n$. Prove that
$|g^k| = n / \gcd(n, k)$.

<details>
<summary>Solution</summary>

_Solution._ Let $d = \gcd(n, k)$ and write $n = dn'$, $k = dk'$ with $\gcd(n', k') = 1$. We show
$(g^k)^{n'} = e$ and that $n'$ is the smallest such positive exponent.

$(g^k)^{n'} = g^{kn'} = g^{dk'n'} = g^{n'k}$. Since $n = dn'$We have
$g^{kn'} = g^{dk'n'} = (g^{dn'})^{k'} = e^{k'} = e$. So $|g^k|$ divides $n' = n/d$.

Conversely, if $(g^k)^m = g^{km} = e$Then $n$ divides $km$So $dn'$ divides $dk'm$ Hence $n'$ divides
$k'm$. Since $\gcd(n', k') = 1$We get $n'$ divides $m$. Thus $|g^k| = n' = n / \gcd(n, k)$.
$\blacksquare$

</details>

_If you get this wrong, revise: Section 1.6, Proposition 1.5; Section 2.4, Theorem 2.5._

**Problem 2.** Show that $D_4$ has exactly five subgroups of order $2$ and determine which are
normal.

<details>
<summary>Solution</summary>

_Solution._ $D_4 = \{e, r, r^2, r^3, s, rs, r^2s, r^3s\}$ where $r^4 = e$, $s^2 = e$,
$srs = r^{-1}$.

Elements of order $2$: $r^2$, $s$, $rs$, $r^2s$, $r^3s$. So there are five subgroups of order $2$:
$\langle r^2 \rangle$, $\langle s \rangle$, $\langle rs \rangle$, $\langle r^2s \rangle$,
$\langle r^3s \rangle$.

For normality: $r r^2 r^{-1} = r^2$ and $s r^2 s = r^{-2} = r^2$So
$\langle r^2 \rangle \trianglelefteq D_4$. But
$s(rs)s = sr = r^{-1}s = r^3s \notin \langle rs \rangle$So $\langle rs \rangle$ is not normal.
Similarly, the other reflection subgroups are not normal. Only $\langle r^2 \rangle = Z(D_4)$ is
normal. $\blacksquare$

</details>

_If you get this wrong, revise: Section 1.3, 1.7; Section 4.1, Proposition 4.1._

**Problem 3.** Let $H, K \leq G$. Prove that $H \cap K \leq G$.

<details>
<summary>Solution</summary>

_Solution._ $H \cap K$ is non-empty since $e \in H$ and $e \in K$So $e \in H \cap K$. If
$a, b \in H \cap K$Then $a, b \in H$ and $a, b \in K$. Since $H$ and $K$ are subgroups,
$ab^{-1} \in H$ and $ab^{-1} \in K$So $ab^{-1} \in H \cap K$. By the subgroup criterion,
$H \cap K \leq G$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 2.1, Theorem 2.1; Section 2.6, Theorem 2.6._

### Lagrange's Theorem and Cosets

**Problem 4.** Find all subgroups of $\mathbb{Z}/12\mathbb{Z}$ and draw the subgroup lattice.

<details>
<summary>Solution</summary>

_Solution._ By Theorem 2.4, every subgroup of the cyclic group $\mathbb{Z}/12\mathbb{Z}$ is cyclic,
And there is exactly one subgroup of order $d$ for each divisor $d$ of $12$.

The divisors of $12$ are $1, 2, 3, 4, 6, 12$. The subgroups are: $\langle 0 \rangle = \{0\}$ (order
$1$), $\langle 6 \rangle = \{0, 6\}$ (order $2$), $\langle 4 \rangle = \{0, 4, 8\}$ (order $3$),
$\langle 3 \rangle = \{0, 3, 6, 9\}$ (order $4$), $\langle 2 \rangle = \{0, 2, 4, 6, 8, 10\}$ (order
$6$), $\langle 1 \rangle = \mathbb{Z}/12\mathbb{Z}$ (order $12$).

The subgroup lattice (Hasse diagram): $\mathbb{Z}/12\mathbb{Z}$ connects to $\langle 2 \rangle$,
$\langle 3 \rangle$, $\langle 4 \rangle$. $\langle 2 \rangle$ connects to $\langle 4 \rangle$ and
$\langle 6 \rangle$. $\langle 3 \rangle$ connects to $\langle 6 \rangle$. $\langle 4 \rangle$ and
$\langle 6 \rangle$ connect to $\{0\}$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 2.4, Theorem 2.4; Section 1.7._

**Problem 5.** Let $H = \langle (1\ 2\ 3\ 4) \rangle \leq S_4$. Find all left cosets of $H$ in $S_4$
and verify $H$ is not normal.

<details>
<summary>Solution</summary>

_Solution._ $H = \{e, (1\ 2\ 3\ 4), (1\ 3)(2\ 4), (1\ 4\ 3\ 2)\}$ has order $4$ $[S_4 : H] = 6$.
Choose representatives from $S_4 \setminus H$E.g., $(1\ 2)$, $(1\ 3)$ $(2\ 3)$, $(1\ 2\ 3)$,
$(1\ 3\ 2)$. The six cosets are: $H$, $(1\ 2)H$, $(1\ 3)H$, $(2\ 3)H$, $(1\ 2\ 3)H$, $(1\ 3\ 2)H$.

To show $H$ is not normal: $(1\ 2)(1\ 2\ 3\ 4)(1\ 2) = (2\ 1\ 3\ 4) = (1\ 3\ 4\ 2) \notin H$ (since
$(1\ 3\ 4\ 2)$ is not among the four elements of $H$ listed above). $\blacksquare$

</details>

_If you get this wrong, revise: Section 3.1, 3.4; Section 4.1._

**Problem 6.** Prove that if $[G : H] = 2$Then $H \trianglelefteq G$.

<details>
<summary>Solution</summary>

_Solution._ Since $[G : H] = 2$There are exactly two left cosets: $H$ and $gH$ for some
$g \notin H$. These partition $G$So $gH = G \setminus H$. Similarly, the two right cosets are $H$
and $Hg$ And $Hg = G \setminus H$. Therefore $gH = Hg$ for all $g \in G$. For $h \in H$:
$hH = H = Hh$. For $g \notin H$: $gH = G \setminus H = Hg$. Thus $gH = Hg$ for all $g \in G$So
$H \trianglelefteq G$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 3.5, Corollary 3.7._

### Normal Subgroups and Homomorphisms

**Problem 7.** Compute $Q_8 / \{1, -1\}$ and identify the quotient group up to isomorphism.

<details>
<summary>Solution</summary>

_Solution._ $Q_8 = \{1, -1, i, -i, j, -j, k, -k\}$ with $|Q_8| = 8$ and $Z(Q_8) = \{1, -1\}$ of
order $2$. The quotient has order $4$. The cosets are $Z = \{1, -1\}$, $iZ = \{i, -i\}$,
$jZ = \{j, -j\}$, $kZ = \{k, -k\}$. Every non-identity element satisfies
$(iZ)^2 = i^2Z = (-1)Z = Z$So every element has order $1$ or $2$. The quotient is abelian (since
$Z(Q_8)$ contains the commutator subgroup). Thus
$Q_8 / Z(Q_8) \cong V_4 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 4.2, 4.3; Section 5.3, Theorem 5.3._

**Problem 8.** Let $\phi : \mathbb{Z} \to \mathbb{Z}$ be defined by $\phi(n) = 3n$. Determine
whether $\phi$ is a group homomorphism, find its kernel and image, and explain why it is not a ring
homomorphism.

<details>
<summary>Solution</summary>

_Solution._ As a group homomorphism $(\mathbb{Z}, +) \to (\mathbb{Z}, +)$:
$\phi(m + n) = 3(m+n) = 3m + 3n = \phi(m) + \phi(n)$. ✓
$\ker(\phi) = \{n \in \mathbb{Z} : 3n = 0\} = \{0\}$.
$\mathrm{im}(\phi) = 3\mathbb{Z} = \{3k : k \in \mathbb{Z}\}$.

$\phi$ is NOT a ring homomorphism because $\phi(1) = 3 \neq 1$. Ring homomorphisms between rings
with unity must send $1$ to $1$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 5.1, Proposition 5.1; Section 8.6, Proposition 8.6._

**Problem 9.** State and prove the correspondence theorem (fourth isomorphism theorem).

<details>
<summary>Solution</summary>

_Solution._ **Theorem.** Let $\phi : G \to H$ be a surjective homomorphism with $K = \ker(\phi)$.
Then there is an inclusion-preserving bijection between subgroups of $G$ containing $K$ and
Subgroups of $H$Given by $U \mapsto \phi(U)$ with inverse $V \mapsto \phi^{-1}(V)$. Normality and
indices are preserved.

_Proof._ Define $\Phi(U) = \phi(U)$ and $\Psi(V) = \phi^{-1}(V)$.
$\Phi(\Psi(V)) = \phi(\phi^{-1}(V)) = V$ since $\phi$ is surjective.
$\Psi(\Phi(U)) = \phi^{-1}(\phi(U)) = U$ since $K \subseteq U$. For normality:
$U \trianglelefteq G \Leftrightarrow \phi(U) \trianglelefteq H$ (by conjugation argument). For
indices: $[G : U] = [H : \phi(U)]$ (since $|G/U| = |H/\phi(U)|$ via the induced map). $\blacksquare$

</details>

_If you get this wrong, revise: Section 5.7, Theorem 5.6._

### Group Actions and Sylow Theorems

**Problem 10.** Find the conjugacy classes of $S_4$ and verify the class equation.

<details>
<summary>Solution</summary>

_Solution._ Conjugacy classes in $S_n$ are determined by cycle type. The cycle types in $S_4$ and
Their sizes:

1. $(1)(2)(3)(4)$ — identity. Size: $1$.
2. $(a\ b)$ — transpositions. Count: $\binom{4}{2} = 6$.
3. $(a\ b\ c)$ — 3-cycles. Count: $\binom{4}{3} \cdot 2 = 8$.
4. $(a\ b)(c\ d)$ — double transpositions. Count: $\frac{\binom{4}{2}}{2} = 3$.
5. $(a\ b\ c\ d)$ — 4-cycles. Count: $3! = 6$.

Class equation: $|S_4| = 1 + 6 + 8 + 3 + 6 = 24$. ✓ $Z(S_4) = \{e\}$So $|Z(S_4)| = 1$And the sum of
$[S_4 : C_G(x_i)]$ over non-central classes is $6 + 8 + 3 + 6 = 23$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 6.4, Theorem 6.4; Section 1.4._

**Problem 11.** Let $G$ act transitively on a set $X$ with $|X| = p$ (prime). Prove that $G$ has a
subgroup of index $p$.

<details>
<summary>Solution</summary>

_Solution._ Let $x \in X$. Since $G$ acts transitively, $|\mathrm{Orb}(x)| = |X| = p$. By the
orbit-stabilizer theorem, $[G : \mathrm{Stab}(x)] = p$So $\mathrm{Stab}(x)$ has index $p$ in $G$.
Since $\mathrm{Stab}(x)$ is a subgroup (Proposition 6.1), we are done. $\blacksquare$

</details>

_If you get this wrong, revise: Section 6.2, Theorem 6.2._

**Problem 12.** Find all Sylow $2$-subgroups of $S_3$.

<details>
<summary>Solution</summary>

_Solution._ $|S_3| = 6 = 2 \cdot 3$. Sylow $2$-subgroups have order $2$. $n_2 \equiv 1 \pmod{2}$ and
$n_2$ divides $3$So $n_2 \in \{1, 3\}$. The elements of order $2$ in $S_3$ are the three
transpositions: $(1\ 2)$, $(1\ 3)$, $(2\ 3)$. Each generates a subgroup of order $2$:
$\langle (1\ 2) \rangle$, $\langle (1\ 3) \rangle$, $\langle (2\ 3) \rangle$. So $n_2 = 3$ and the
three Sylow $2$-subgroups are these. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.1, 7.6; Theorem 7.3._

**Problem 13.** Prove that every group of order $15$ is cyclic.

<details>
<summary>Solution</summary>

_Solution._ $|G| = 15 = 3 \cdot 5$. By Sylow's third theorem: $n_5 \equiv 1 \pmod{5}$ and $n_5$
divides $3$So $n_5 = 1$. $n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $5$So $n_3 = 1$.

Both the Sylow $3$-subgroup $P \cong \mathbb{Z}/3\mathbb{Z}$ and the Sylow $5$-subgroup
$Q \cong \mathbb{Z}/5\mathbb{Z}$ are normal. Since $P \cap Q = \{e\}$ (their orders are coprime) And
$|PQ| = |P||Q|/|P \cap Q| = 15 = |G|$We have $G = PQ$. Since both are normal with trivial
intersection,
$G \cong P \times Q \cong \mathbb{Z}/3\mathbb{Z} \times \mathbb{Z}/5\mathbb{Z} \cong \mathbb{Z}/15\mathbb{Z}$.
$\blacksquare$

</details>

_If you get this wrong, revise: Section 7.3, Proposition 7.4; Section 7.7, Proposition 7.6._

**Problem 14.** Let $G$ be a group of order $21 = 3 \cdot 7$. Show that $G$ has a normal Sylow
$7$-subgroup. Must $G$ be abelian?

<details>
<summary>Solution</summary>

_Solution._ $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $3$. Since $7 \nmid (3 - 1)$We must have
$n_7 = 1$. So the Sylow $7$-subgroup $Q \cong \mathbb{Z}/7\mathbb{Z}$ is normal.

$n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $7$So $n_3 \in \{1, 7\}$. If $n_3 = 1$Both Sylow subgroups
are normal and $G \cong \mathbb{Z}/21\mathbb{Z}$ (abelian). If $n_3 = 7$, $G$ is a semidirect
product $\mathbb{Z}/7\mathbb{Z} \rtimes \mathbb{Z}/3\mathbb{Z}$ Which is non-abelian. This group
exists: it is the unique non-abelian group of order $21$. So $G$ need not be abelian. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.3, 7.7; Theorem 7.3._

### Rings, Ideals, and Polynomial Rings

**Problem 15.** Prove that $(2)$ is a prime ideal of $\mathbb{Z}$ but $(4)$ is not prime.

<details>
<summary>Solution</summary>

_Solution._ By Theorem 9.3, $(p)$ is prime in $\mathbb{Z}$ iff $\mathbb{Z}/(p)$ is an integral
domain. $\mathbb{Z}/(2) \cong \mathbb{Z}/2\mathbb{Z}$ is a field, hence an integral domain, so $(2)$
is prime.

$\mathbb{Z}/(4)$: we have $[2][2] = [4] = [0]$ but $[2] \neq [0]$. So $\mathbb{Z}/(4)$ has zero
divisors and is not an integral domain. Therefore $(4)$ is not prime. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.3, Theorem 9.3; Section 8.4._

**Problem 16.** Show that $x^2 + 1$ is irreducible in $\mathbb{R}[x]$ but reducible in
$\mathbb{C}[x]$.

<details>
<summary>Solution</summary>

_Solution._ In $\mathbb{R}[x]$: suppose $x^2 + 1 = (x + a)(x + b)$ with $a, b \in \mathbb{R}$. Then
$a + b = 0$ and $ab = 1$So $-a^2 = 1$Giving $a^2 = -1$Which has no real solution. Thus $x^2 + 1$ is
irreducible in $\mathbb{R}[x]$.

In $\mathbb{C}[x]$: $x^2 + 1 = (x + i)(x - i)$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 10.2; Section 12.7, Fundamental Theorem of Algebra._

**Problem 17.** Use the Euclidean algorithm to find $\gcd(x^3 - 2x + 1, x^2 - 1)$ in
$\mathbb{Q}[x]$.

<details>
<summary>Solution</summary>

_Solution._

$$x^3 - 2x + 1 = x(x^2 - 1) + (-x + 1)$$

$$x^2 - 1 = (-x - 1)(-x + 1) + 0$$

Since the last non-zero remainder is $-x + 1$We have $\gcd(x^3 - 2x + 1, x^2 - 1) = x - 1$ (up to
multiplication by a unit in $\mathbb{Q}[x]$I.e., a non-zero constant). $\blacksquare$

</details>

_If you get this wrong, revise: Section 10.1, Theorem 10.1; Section 11.1._

**Problem 18.** Prove that $\mathbb{Z}[x]$ is a UFD but not a PID.

<details>
<summary>Solution</summary>

_Solution._ **UFD:** By Gauss's lemma, since $\mathbb{Z}$ is a UFD, $\mathbb{Z}[x]$ is a UFD.

**Not a PID:** The ideal $I = (2, x) = \{2f + xg : f, g \in \mathbb{Z}[x]\}$ is not principal.
Suppose $I = (h)$ for some $h \in \mathbb{Z}[x]$. Then $h$ divides both $2$ and $x$. Since $h$
divides $2 \in \mathbb{Z}$, $h$ is a constant polynomial, say $h = c \in \mathbb{Z}$. Then
$(c) = (2, x)$So $c$ divides $2$ and $c$ divides $x$Hence $c = \pm 1$. But
$(1) = \mathbb{Z}[x] \neq (2, x)$ since $1 \notin (2, x)$ (every element of $(2, x)$ has even
constant term). Contradiction. Therefore $(2, x)$ is not principal, and $\mathbb{Z}[x]$ is not a
PID. $\blacksquare$

</details>

_If you get this wrong, revise: Section 11.3, Theorem 11.3; Section 8.1._

### Field Extensions and Galois Theory

**Problem 19.** Compute $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}]$ and find the Galois group.

<details>
<summary>Solution</summary>

_Solution._ First, $[\mathbb{Q}(\sqrt{2}) : \mathbb{Q}] = 2$ since $x^2 - 2$ is irreducible over
$\mathbb{Q}$ (by Eisenstein with $p = 2$). Then $\sqrt{3} \notin \mathbb{Q}(\sqrt{2})$ (if
$\sqrt{3} = a + b\sqrt{2}$ With $a, b \in \mathbb{Q}$Squaring gives
$3 = a^2 + 2b^2 + 2ab\sqrt{2}$Forcing $ab = 0$ and leading to contradiction). So
$[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}(\sqrt{2})] = 2$.

By the tower law: $[\mathbb{Q}(\sqrt{2}, \sqrt{3}) : \mathbb{Q}] = 2 \cdot 2 = 4$.

The Galois group consists of four automorphisms determined by their action on $\sqrt{2}$ and
$\sqrt{3}$: $\mathrm{id}$: $\sqrt{2} \mapsto \sqrt{2}$, $\sqrt{3} \mapsto \sqrt{3}$ $\sigma$:
$\sqrt{2} \mapsto -\sqrt{2}$, $\sqrt{3} \mapsto \sqrt{3}$ $\tau$: $\sqrt{2} \mapsto \sqrt{2}$,
$\sqrt{3} \mapsto -\sqrt{3}$ $\sigma\tau$: $\sqrt{2} \mapsto -\sqrt{2}$,
$\sqrt{3} \mapsto -\sqrt{3}$

Since all non-identity elements have order $2$,
$\mathrm{Gal}(\mathbb{Q}(\sqrt{2}, \sqrt{3})/\mathbb{Q}) \cong V_4$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 12.1, Proposition 12.1; Section 13.1._

**Problem 20.** Prove that a quotient ring $R/I$ is an integral domain if and only if $I$ is a prime
ideal.

<details>
<summary>Solution</summary>

_Solution._ ($\Rightarrow$) Suppose $R/I$ is an integral domain. Let $ab \in I$. Then
$(a + I)(b + I) = ab + I = 0 + I$ The zero element of $R/I$. Since $R/I$ has no zero divisors,
either $a + I = 0 + I$ or $b + I = 0 + I$ I.e., $a \in I$ or $b \in I$. So $I$ is prime.

($\Leftarrow$) Suppose $I$ is prime. $R/I$ is a commutative ring with unity (since $R$ is). If
$(a + I)(b + I) = 0 + I$Then $ab \in I$So $a \in I$ or $b \in I$ (since $I$ is prime). Thus
$a + I = 0 + I$ or $b + I = 0 + I$Meaning $R/I$ has no zero divisors. Also $1 + I \neq 0 + I$ since
$I \neq R$. Therefore $R/I$ is an integral domain. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.2, 9.3, Theorem 9.3; Section 8.4._

### Challenge Problems

**Problem 21.** Let $G$ be a finite group acting on a finite set $X$. Prove Burnside's lemma: The
number of orbits equals $\frac{1}{|G|} \sum_{g \in G} |\mathrm{Fix}(g)|$.

<details>
<summary>Solution</summary>

_Solution._ Let $S = \{(g, x) \in G \times X : g \cdot x = x\}$. Count $|S|$ in two ways.

**Grouping by $g$:**
$|S| = \sum_{g \in G} |\{x \in X : g \cdot x = x\}| = \sum_{g \in G} |\mathrm{Fix}(g)|$.

**Grouping by $x$:** $|S| = \sum_{x \in X} |\mathrm{Stab}(x)|$.

For each orbit $\mathcal{O}$Every $x \in \mathcal{O}$ has $|\mathrm{Stab}(x)| = |G|/|\mathcal{O}|$
(by orbit-stabilizer). So
$\sum_{x \in \mathcal{O}} |\mathrm{Stab}(x)| = |\mathcal{O}| \cdot |G|/|\mathcal{O}| = |G|$.

Summing over all orbits: $|S| = |G| \cdot (\mathrm{number\ of\ orbits})$.

Combining: $\sum_{g \in G} |\mathrm{Fix}(g)| = |G| \cdot (\mathrm{number\ of\ orbits})$.
$\blacksquare$

</details>

_If you get this wrong, revise: Section 6.3, Theorem 6.3._

**Problem 22.** Show that $A_5$ is the smallest non-abelian simple group.

<details>
<summary>Solution</summary>

_Solution._ We show that every non-abelian group of order $n < 60$ is not simple.

- Order $6$: $S_3$ has normal subgroup $A_3$.
- Order $8$: all groups of order $p^3$ have non-trivial center (Theorem 6.5).
- Order $10$: $n_5 = 1$ by Sylow.
- Order $12$: $n_3 = 1$ or $4$. If $n_3 = 4$One checks $A_4$ has the normal Klein subgroup $V_4$.
- Order $14$: $n_7 = 1$ by Sylow.
- Order $15$: $n_5 = 1$, $n_3 = 1$ by Sylow.
- Order $18$: $n_3 = 1$ by Sylow (since $n_3 \equiv 1 \pmod{3}$ and $n_3$ divides $2$).
- Order $20$: $n_5 = 1$ by Sylow (since $n_5 \equiv 1 \pmod{5}$ and $n_5$ divides $4$).
- Order $21$: $n_7 = 1$ by Sylow.
- Order $22$: $n_{11} = 1$ by Sylow.
- Order $24$: if $G$ is simple, $n_2 \geq 3$ and $n_3 \geq 4$. Counting elements gives a
  contradiction.
- Order $26$: $n_{13} = 1$.
- Order $27$: $p$-group has non-trivial center.
- Order $28$: $n_7 = 1$ by Sylow (since $n_7 \equiv 1 \pmod{7}$ and $n_7$ divides $4$).
- Order $30$: $n_5 = 1$ or $n_3 = 1$ by counting arguments (see Section 7.6).
- Order $33$: $n_{11} = 1$.
- Order $34$: $n_{17} = 1$.
- Order $35$: $n_7 = 1$, $n_5 = 1$.
- Order $36$: $n_3 = 1$ or $4$. If $n_3 = 4$The action on Sylow $3$-subgroups gives a homomorphism
  $G \to S_4$ whose kernel is a proper normal subgroup.
- Orders $38, 39, 40, 42, 44, 46, 48, 50, 51, 52, 54, 55, 56, 57, 58$: similar arguments apply. For
  each, either a Sylow subgroup is unique, or counting arguments force a normal subgroup.

$A_5$ has order $60$ and is simple (Proposition 14.2). Therefore it is the smallest non-abelian
simple group. $\blacksquare$

</details>

_If you get this wrong, revise: Section 7.7, Proposition 7.7; Section 14.3, Proposition 14.2._

**Problem 23.** Prove that the quotient ring $\mathbb{Z}[x]/(x^2 + 1)$ is isomorphic to
$\mathbb{Z}[i]$.

<details>
<summary>Solution</summary>

_Solution._ Define $\phi : \mathbb{Z}[x] \to \mathbb{Z}[i]$ by $\phi(f(x)) = f(i)$. This is a ring
Homomorphism (evaluation at $i$). It is surjective: any $a + bi \in \mathbb{Z}[i]$ equals
$\phi(a + bx)$.

The kernel consists of polynomials $f \in \mathbb{Z}[x]$ with $f(i) = 0$. Since $x^2 + 1$ is the
minimal Polynomial of $i$ over $\mathbb{Q}$Every such $f$ is divisible by $x^2 + 1$ in
$\mathbb{Q}[x]$. By Gauss's lemma, $f$ is divisible by $x^2 + 1$ in $\mathbb{Z}[x]$ as well. So
$\ker(\phi) = (x^2 + 1)$.

By the ring isomorphism theorem, $\mathbb{Z}[x]/(x^2 + 1) \cong \mathbb{Z}[i]$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 9.2, Theorem 9.2; Section 8.6._

**Problem 24.** Let $F$ be a field and let $f \in F[x]$ be irreducible of degree $n$. Show that the
Quotient ring $F[x]/(f)$ is an $n$-dimensional vector space over $F$ with basis
$\{1, \bar{x}, \bar{x}^2, \ldots, \bar{x}^{n-1}\}$.

<details>
<summary>Solution</summary>

_Solution._ Since $f$ is irreducible and $F[x]$ is a PID, $(f)$ is a maximal ideal, so
$E = F[x]/(f)$ is a field. Write $\bar{x} = x + (f) \in E$. Every element of $E$ is a coset
$g(x) + (f)$ for some $g \in F[x]$.

By the division algorithm, $g = qf + r$ where $\deg(r) \lt n$ or $r = 0$. Then $g + (f) = r + (f)$
So every element of $E$ can be written as
$r(\bar{x}) = a_0 + a_1\bar{x} + \cdots + a_{n-1}\bar{x}^{n-1}$ With $a_i \in F$. This
representation is unique: if $\sum_{i=0}^{n-1} a_i \bar{x}^i = \sum_{i=0}^{n-1} b_i \bar{x}^i$ Then
$\sum (a_i - b_i)\bar{x}^i = 0$So $\sum (a_i - b_i)x^i \in (f)$Meaning $f$ divides a polynomial Of
degree $\lt n = \deg(f)$Which forces all $a_i - b_i = 0$.

Therefore $\{1, \bar{x}, \ldots, \bar{x}^{n-1}\}$ is a basis for $E$ over $F$And $[E : F] = n$.
$\blacksquare$

</details>

_If you get this wrong, revise: Section 10.1, Theorem 10.1; Section 12.3, Theorem 12.4._

**Problem 25.** Classify all finite fields of order $p^n$ for $p = 2$ and $n \leq 4$.

<details>
<summary>Solution</summary>

_Solution._ By Theorem 12.5, for each prime power there is a unique (up to isomorphism) finite
field.

**$\mathbb{F}_2$** ($2$ elements): $\{0, 1\}$. Arithmetic modulo $2$.

**$\mathbb{F}_4$** ($4$ elements): $\mathbb{F}_2[x]/(x^2 + x + 1)$. Elements:
$\{0, 1, \alpha, 1+\alpha\}$ where $\alpha^2 = \alpha + 1$. Multiplicative group is cyclic of order
$3$: $\alpha^3 = 1$.

**$\mathbb{F}_8$** ($8$ elements): $\mathbb{F}_2[x]/(x^3 + x + 1)$. Elements:
$\{a + b\alpha + c\alpha^2 : a, b, c \in \mathbb{F}_2\}$ Where $\alpha^3 = \alpha + 1$.
Multiplicative group is cyclic of order $7$.

**$\mathbb{F}_{16}$** ($16$ elements): $\mathbb{F}_2[x]/(x^4 + x + 1)$. Elements:
$\{a_0 + a_1\alpha + a_2\alpha^2 + a_3\alpha^3 : a_i \in \mathbb{F}_2\}$ Where
$\alpha^4 = \alpha + 1$. Multiplicative group is cyclic of order $15$.

Note: $\mathbb{F}_4$ is NOT a subfield of $\mathbb{F}_8$ (since $4$ does not divide $8$), but
$\mathbb{F}_4$ IS A subfield of $\mathbb{F}_{16}$ (since $4$ divides $16$). More generally,
$\mathbb{F}_{p^m} \subseteq \mathbb{F}_{p^n}$ If and only if $m$ divides $n$. $\blacksquare$

</details>

_If you get this wrong, revise: Section 12.4, Theorem 12.5; Section 12.6._

