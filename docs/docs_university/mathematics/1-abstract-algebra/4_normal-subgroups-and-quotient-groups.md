---
title: Normal Subgroups and Quotient Groups
tags:
  - Mathematics
  - University
---

### 4.1 Normal Subgroups

A subgroup $N \leq G$ is **normal** (written $N \trianglelefteq G$) if $gNg^{-1} = N$ for all
$g \in G$ I.e., $gng^{-1} \in N$ for all $g \in G$ and all $n \in N$.

**Proposition 4.1.** Every subgroup of an abelian group is normal.

**Proposition 4.2.** The following are equivalent for $N \leq G$:

1. $N \trianglelefteq G$.
2. $gN = Ng$ for all $g \in G$ (left and right cosets coincide).
3. The product of two left cosets is again a left coset: $(aN)(bN) = (ab)N$.

_Proof of (1) $\Rightarrow$ (3)._ Let $a_1n_1 \in aN$ and $b_1 n_2 \in bN$. Then
$(a_1 n_1)(b_1 n_2) = a_1 b_1 (b_1^{-1} n_1 b_1) n_2$. Since $N$ is normal,
$b_1^{-1} n_1 b_1 \in N$So $(b_1^{-1} n_1 b_1) n_2 \in N$Giving $(a_1 n_1)(b_1 n_2) \in a_1 b_1 N$.
$\blacksquare$

### 4.2 The Quotient Group

When $N \trianglelefteq G$The set $G/N = \{gN : g \in G\}$ of cosets forms a group under

$$(aN)(bN) = (ab)N$$

Called the **quotient group** of $G$ by $N$.

**Theorem 4.3.** If $G$ is finite and $N \trianglelefteq G$Then $|G/N| = [G : N] = |G|/|N|$.

**Example.** $S_3 / A_3 \cong \mathbb{Z}/2\mathbb{Z}$.

**Example.** $\mathbb{Z}/n\mathbb{Z}$ is the quotient of $\mathbb{Z}$ by $n\mathbb{Z}$.

### 4.3 Worked Examples: Computing Quotient Groups

**Problem.** The quaternion group $Q_8 = \{1, -1, i, -i, j, -j, k, -k\}$ has center
$Z(Q_8) = \{1, -1\}$. Compute $Q_8 / Z(Q_8)$.

<details>
<summary>Solution</summary>

_Solution._ Since $|Q_8| = 8$ and $|Z(Q_8)| = 2$We have $|Q_8/Z(Q_8)| = 4$. The cosets are:

$$Z(Q_8) = \{1, -1\}, \quad iZ(Q_8) = \{i, -i\}, \quad jZ(Q_8) = \{j, -j\}, \quad kZ(Q_8) = \{k, -k\}$$

Multiplication in the quotient: $(iZ)(iZ) = i^2 Z = (-1)Z = Z$ (the identity coset). Similarly
$(jZ)(jZ) = Z$ and $(kZ)(kZ) = Z$. Also $(iZ)(jZ) = ijZ = kZ$ and $(jZ)(iZ) = jiZ = (-k)Z = kZ$
(since $-k \in kZ$). Every non-identity element has order $2$ And the group is abelian. Therefore
$Q_8 / Z(Q_8) \cong V_4 \cong \mathbb{Z}/2\mathbb{Z} \times \mathbb{Z}/2\mathbb{Z}$. $\blacksquare$

</details>

**Problem.** Let $N = \langle (1\ 2)(3\ 4), (1\ 3)(2\ 4) \rangle \leq S_4$. Show that
$N \trianglelefteq S_4$ and identify $S_4/N$.

<details>
<summary>Solution</summary>

_Solution._ $N = \{e, (1\ 2)(3\ 4), (1\ 3)(2\ 4), (1\ 4)(2\ 3)\}$ is the Klein four-group $V_4$ With
$|N| = 4$. To verify $N \trianglelefteq S_4$Note that conjugation preserves cycle type. Each
non-identity element of $N$ is a product of two disjoint transpositions. Since $S_4$ acts
Transitively on such elements (any pair of disjoint transpositions can be mapped to any other by
relabeling), $N$ is closed under conjugation.

Thus $|S_4/N| = 24/4 = 6$. That $S_4/N$ is non-abelian (e.g., the images of $(1\ 2)$ and $(2\ 3)$ do
not commute), so $S_4/N \cong S_3$. $\blacksquare$

</details>

### 4.4 Worked Example: The First Isomorphism Theorem

**Problem.** Define $\phi : GL_2(\mathbb{R}) \to \mathbb{R}^*$ by $\phi(A) = \det(A)$. Identify
$\ker(\phi)$ and $GL_2(\mathbb{R})/\ker(\phi)$.

<details>
<summary>Solution</summary>

_Solution._ $\phi$ is a homomorphism since $\det(AB) = \det(A)\det(B)$. It is surjective: For any
$r \in \mathbb{R}^*$The matrix $\begin{pmatrix} r & 0 \\ 0 & 1 \end{pmatrix}$ has determinant $r$.

The kernel is $\ker(\phi) = \{A \in GL_2(\mathbb{R}) : \det(A) = 1\} = SL_2(\mathbb{R})$.

By the first isomorphism theorem (Theorem 5.3),
$GL_2(\mathbb{R})/SL_2(\mathbb{R}) \cong \mathbb{R}^*$. $\blacksquare$

</details>

**Problem.** Show that $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$Where
$S^1 = \{z \in \mathbb{C}^* : |z| = 1\}$.

<details>
<summary>Solution</summary>

_Solution._ Define $\phi : \mathbb{C}^* \to \mathbb{R}^+$ by $\phi(z) = |z|$. This is a homomorphism
since $|zw| = |z||w|$. It is surjective since for any $r > 0$ $\phi(r) = r$. The kernel is
$\ker(\phi) = \{z \in \mathbb{C}^* : |z| = 1\} = S^1$The unit circle. By the first isomorphism
theorem, $\mathbb{C}^* / S^1 \cong \mathbb{R}^+$. $\blacksquare$

</details>

