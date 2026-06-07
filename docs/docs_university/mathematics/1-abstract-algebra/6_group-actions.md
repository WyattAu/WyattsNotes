---
title: Group Actions
tags:
  - Mathematics
  - University
---

### 6.1 Definition

A **group action** of $G$ on a set $X$ is a map $G \times X \to X$Written $(g, x) \mapsto g \cdot x$
Satisfying:

1. $e \cdot x = x$ for all $x \in X$.
2. $g \cdot (h \cdot x) = (gh) \cdot x$ for all $g, h \in G$ and $x \in X$.

### 6.2 Orbits and Stabilizers

The **orbit** of $x \in X$ is $\mathrm{Orb}(x) = \{g \cdot x : g \in G\}$.

The **stabilizer** of $x \in X$ is $\mathrm{Stab}(x) = \{g \in G : g \cdot x = x\}$.

**Proposition 6.1.** $\mathrm{Stab}(x)$ is a subgroup of $G$.

**Theorem 6.2 (Orbit-Stabilizer Theorem).** For any $x \in X$

$$|\mathrm{Orb}(x)| = [G : \mathrm{Stab}(x)] = \frac{|G|}{|\mathrm{Stab}(x)|}$$

_Proof._ Define $\phi : G \to \mathrm{Orb}(x)$ by $\phi(g) = g \cdot x$. Then $g$ and $h$ have the
same Image iff $g \cdot x = h \cdot x$ iff $h^{-1}g \cdot x = x$ iff $h^{-1}g \in \mathrm{Stab}(x)$
Iff $g \in h\,\mathrm{Stab}(x)$. So the fibers of $\phi$ are precisely the cosets of
$\mathrm{Stab}(x)$ And there are $[G : \mathrm{Stab}(x)]$ of them, each mapping to a distinct
element of $\mathrm{Orb}(x)$. $\blacksquare$

### 6.3 Burnside's Lemma

**Theorem 6.3 (Burnside's Lemma).** If a finite group $G$ acts on a finite set $X$Then the number Of
orbits is

$$\frac{1}{|G|} \sum_{g \in G} |\mathrm{Fix}(g)|$$

Where $\mathrm{Fix}(g) = \{x \in X : g \cdot x = x\}$.

_Proof._ Count the set $S = \{(g, x) \in G \times X : g \cdot x = x\}$ in two ways. Grouping by $g$:
$|S| = \sum_{g \in G} |\mathrm{Fix}(g)|$. Grouping by $x$:
$|S| = \sum_{x \in X} |\mathrm{Stab}(x)|$. For $x$ in orbit $O$, $|\mathrm{Stab}(x)| = |G|/|O|$. So
$\sum_{x \in O} |\mathrm{Stab}(x)| = |O| \cdot |G|/|O| = |G|$. Summing over all orbits:
$|S| = |G| \cdot (\mathrm{number\ of\ orbits})$. $\blacksquare$

### 6.4 Conjugation Action and the Class Equation

$G$ acts on itself by conjugation: $g \cdot x = gxg^{-1}$.

The orbits are called **conjugacy classes**. The stabilizer of $x$ is the **centralizer**
$C_G(x) = \{g \in G : gx = xg\}$.

**Theorem 6.4 (Class Equation).** For a finite group $G$

$$|G| = |Z(G)| + \sum_{i} [G : C_G(x_i)]$$

Where the sum is over representatives $x_i$ of the non-central conjugacy classes.

_Proof._ The conjugacy classes partition $G$. Central elements form singleton classes. For a
non-central element $x$, $|\mathrm{Orb}(x)| = [G : C_G(x)]$ by the orbit-stabilizer theorem. Summing
gives the result. $\blacksquare$

### 6.5 Worked Example: Symmetries of a Cube

**Problem.** The rotational symmetry group of a cube has $24$ elements. Use the orbit-stabilizer
theorem To verify the sizes of the orbits of vertices, edges, and faces under this action.

<details>
<summary>Solution</summary>

_Solution._ Let $G$ be the rotation group of a cube, with $|G| = 24$.

**Vertices.** The cube has $8$ vertices. The action on vertices is transitive (any vertex can be
rotated To any other), so $|\mathrm{Orb}(v)| = 8$. By orbit-stabilizer,
$|\mathrm{Stab}(v)| = 24/8 = 3$. Indeed, the stabilizer of a vertex consists of rotations about the
space diagonal through that vertex And its opposite: the identity, $120°$ rotation, and $240°$
rotation.

**Edges.** The cube has $12$ edges. The action is transitive, so $|\mathrm{Orb}(e)| = 12$ and
$|\mathrm{Stab}(e)| = 24/12 = 2$. The stabilizer of an edge is $\{\mathrm{id}, r\}$ where $r$ is the
$180°$ rotation about the axis through the midpoints of that edge and its opposite.

**Faces.** The cube has $6$ faces. The action is transitive, so $|\mathrm{Orb}(f)| = 6$ and
$|\mathrm{Stab}(f)| = 24/6 = 4$. The stabilizer of a face consists of rotations about the axis
Through the center of that face and its opposite:
$\{0°, 90°, 180°, 270°\} \cong \mathbb{Z}/4\mathbb{Z}$.

This verifies: $24 = 8 \cdot 3 = 12 \cdot 2 = 6 \cdot 4$. $\blacksquare$

</details>

### 6.6 Application: Centers of p-Groups

**Theorem 6.5.** If $G$ is a non-trivial finite $p$-group (i.e., $|G| = p^n$ for some prime $p$ and
$n \geq 1$), then $Z(G)$ is non-trivial: $|Z(G)| \geq p$.

_Proof._ By the class equation:

$$|G| = |Z(G)| + \sum_{i=1}^{r} [G : C_G(x_i)]$$

Where $x_1, \ldots, x_r$ are representatives of the non-central conjugacy classes. For each $i$
$x_i$ is non-central, so $C_G(x_i) \neq G$. Thus $[G : C_G(x_i)]$ is a divisor of $|G| = p^n$ That
is strictly greater than $1$Hence $p$ divides $[G : C_G(x_i)]$. Since $p$ also divides $|G|$ We
have:

$$|Z(G)| = |G| - \sum_{i=1}^{r} [G : C_G(x_i)] \equiv 0 - 0 \equiv 0 \pmod{p}$$

Since $e \in Z(G)$We have $|Z(G)| \geq 1$. Therefore $|Z(G)| \geq p$. $\blacksquare$

**Corollary 6.6.** Every group of order $p^2$ (where $p$ is prime) is abelian.

_Proof._ By Theorem 6.5, $|Z(G)| \geq p$. Since $Z(G) \leq G$, $|Z(G)|$ divides $p^2$So $|Z(G)| = p$
or $|Z(G)| = p^2$. If $|Z(G)| = p^2$Then $G = Z(G)$ is abelian. If $|Z(G)| = p$ Then $G/Z(G)$ has
order $p$ and is therefore cyclic, say $G/Z(G) = \langle gZ(G) \rangle$. Then every element of $G$
has the form $g^k z$ for some $k \in \mathbb{Z}$ and $z \in Z(G)$. For any two such elements
$(g^{k_1}z_1)(g^{k_2}z_2) = g^{k_1+k_2}z_1z_2 = g^{k_2+k_1}z_2z_1 = (g^{k_2}z_2)(g^{k_1}z_1)$ So $G$
is abelian, contradicting $|Z(G)| = p$. Thus $|Z(G)| = p^2$ and $G$ is abelian. $\blacksquare$

