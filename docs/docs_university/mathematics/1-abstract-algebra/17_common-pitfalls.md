---
title: Common Pitfalls
tags:
  - Mathematics
  - University
---

:::caution Common Pitfall Not every subgroup is normal. For example,
$\langle (1\ 2) \rangle \leq S_3$ is not normal since
$(1\ 3)(1\ 2)(1\ 3)^{-1} = (2\ 3) \notin \langle (1\ 2) \rangle$. Always verify the condition
$gHg^{-1} = H$ for all $g \in G$.
:::

:::caution Common Pitfall The converse of Lagrange's theorem is false . For example, $A_4$ has order
$12$ but no Subgroup of order $6$. However, the converse does hold for Sylow subgroups.
:::

:::caution Common Pitfall In ring theory, an ideal need not contain $1$ (in fact, $I = R$ is the
only ideal containing $1$). This is a common source of confusion when checking whether a subset is
an ideal.
:::

:::caution Common Pitfall Not every UFD is a PID. The classic example is $\mathbb{Z}[x]$: the ideal
$(2, x)$ is not principal, But $\mathbb{Z}[x]$ is a UFD (since $\mathbb{Z}$ is a UFD).
:::

:::caution Common Pitfall When computing Galois groups, the Galois group of the splitting field of a
polynomial is a subgroup Of $S_n$ (acting on the roots), but it may be a proper subgroup. For
example, the Galois group of $x^3 - 2$ over $\mathbb{Q}$ is $S_3$But the Galois group of
$x^3 - 3x + 1$ over $\mathbb{Q}$ is $A_3 \cong \mathbb{Z}/3\mathbb{Z}$ (the discriminant is a
square).
:::

:::caution Common Pitfall A field extension can be algebraic without being finite. For example,
$\overline{\mathbb{Q}}/\mathbb{Q}$ (algebraic closure of $\mathbb{Q}$) is algebraic but
infinite-dimensional.
:::

:::caution Common Pitfall When using the first isomorphism theorem, always verify that your map is
actually a homomorphism And correctly identify the kernel. A common mistake is to forget that the
kernel must be a normal Subgroup (not just any subgroup). Also, the isomorphism is
$G/\ker(\phi) \cong \mathrm{im}(\phi)$ Not $G/\ker(\phi) \cong H$ (unless $\phi$ is surjective).
:::

:::caution Common Pitfall The center $Z(G)$ can be trivial even for large non-abelian groups. For
example, $Z(S_n) = \{e\}$ For all $n \geq 3$. However, for $p$-groups, the center is always
non-trivial (Theorem 6.5). Do not confuse the center with the centralizer $C_G(x)$ of a single
element.
:::

:::caution Common Pitfall In the Sylow theorems, the number $n_p$ of Sylow $p$-subgroups satisfies
$n_p \equiv 1 \pmod{p}$ AND $n_p$ divides $m$ (where $|G| = p^n m$). Both conditions must be checked
simultaneously. For example, if $|G| = 12 = 2^2 \cdot 3$Then $n_3 \equiv 1 \pmod{3}$ and $n_3$
divides $4$ Giving $n_3 = 1$ or $4$ (not $7$Even though $7 \equiv 1 \pmod{3}$).
:::

:::caution Common Pitfall Eisenstein's criterion requires ALL three conditions to hold
simultaneously. In particular, $p^2$ Must NOT divide the constant term $a_0$. If $p^2$ divides
$a_0$Eisenstein does not apply. In such cases, try the substitution $x \mapsto x + c$ for various
constants $c$Or use Reduction modulo a prime.
:::

:::caution Common Pitfall A quotient ring $R/I$ is a field if and only if $I$ is a _maximal_ ideal,
not just a prime ideal. For example, $(0)$ is prime in $\mathbb{Z}[x]$ but not maximal, so
$\mathbb{Z}[x]$ is an integral Domain but not a field. Every maximal ideal is prime, but not
conversely.

:::caution Common Pitfall The fundamental theorem of Galois theory requires the extension to be
Galois. For a non-Galois Extension $E/F$The correspondence between intermediate fields and subgroups
of $\mathrm{Gal}(E/F)$ is not a bijection, and indices may not match. Always verify the Galois
Condition before applying the theorem.
