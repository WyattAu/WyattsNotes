---
title: Sets, Relations, and Functions
tags:
  - Computing
  - University
---

### 2.1 Sets

**Basic operations:**

- Union: $A \cup B = \\{x : x \in A \mathrm{ or}  x \in B\\}$
- Intersection: $A \cap B = \\{x : x \in A \mathrm{ and}  x \in B\\}$
- Difference: $A \setminus B = \\{x : x \in A \mathrm{ and}  x \notin B\\}$
- Complement: $A^c = U \setminus A$ (where $U$ is the universal set)

**De Morgan's Laws:**

$$(A \cup B)^c = A^c \cap B^c, \quad (A \cap B)^c = A^c \cup B^c$$

**Power set:** $\mathcal{P}(A) = \\{B : B \subseteq A\\}$. If $|A| = n$Then
$|\mathcal{P}(A)| = 2^n$.

### 2.2 Relations

A **binary relation** $R$ from set $A$ to set $B$ is a subset of $A \times B$.

A relation $R$ on $A$ is:

- **Reflexive:** $\forall a \in A$, $(a,a) \in R$.
- **Symmetric:** $(a,b) \in R \implies (b,a) \in R$.
- **Antisymmetric:** $(a,b) \in R$ and $(b,a) \in R \implies a = b$.
- **Transitive:** $(a,b) \in R$ and $(b,c) \in R \implies $(a,c) \in R$.

**Equivalence relation:** reflexive, symmetric, transitive. Partitions the set into equivalence
classes.

**Partial order:** reflexive, antisymmetric, transitive. Written $(A, \preceq)$.

A **Hasse diagram** is a graphical representation of a finite poset $(A, \preceq)$: an element $a$
Is drawn below $b$ whenever $a \prec b$ (i.e., $a \preceq b$ and $a \neq b$), and an edge is drawn
From $a$ to $b$ whenever $b$ **covers** $a$ (there is no $c$ with $a \prec c \prec b$).

**Worked Example.** Show that $R$ on $\mathbb{{'}Z{}'}$ defined by $a\,R\,b$ iff
$a \equiv b \pmod{5}$ is An equivalence relation. Describe the equivalence classes.

<details>
<summary>Solution</summary>

_Reflexive:_ $a - a = 0 = 5 \cdot 0$So $a \equiv a \pmod{5}$ for all $a$.

_Symmetric:_ If $a \equiv b \pmod{5}$Then $5 \mid (a - b)$So $5 \mid (b - a)$Giving
$b \equiv a \pmod{5}$.

_Transitive:_ If $5 \mid (a - b)$ and $5 \mid (b - c)$Then $5 \mid (a - b) + (b - c) = a - c$So
$a \equiv c \pmod{5}$.

The equivalence classes are $[0] = \\{5k : k \in \mathbb{{'}Z{}'}\\}$
$[1] = \\{5k+1 : k \in \mathbb{{'}Z{}'}\\}$ $[2] = \\{5k+2 : k \in \mathbb{{'}Z{}'}\\}$
$[3] = \\{5k+3 : k \in \mathbb{{'}Z{}'}\\}$ $[4] = \\{5k+4 : k \in \mathbb{{'}Z{}'}\\}$. There are
exactly 5 equivalence classes, forming the quotient $\mathbb{{'}Z{}'}/5\mathbb{{'}Z{}'}$.

</details>

**Worked Example.** Let $\preceq$ be divisibility on $A = \\{1, 2, 3, 4, 6, 12\\}$: $a \preceq b$
iff $a \mid b$. Verify this is a partial order and identify the cover relations.

<details>
<summary>Solution</summary>

_Reflexive:_ $a \mid a$ for all $a \in A$. ✓

_Antisymmetric:_ If $a \mid b$ and $b \mid a$Then $b = ka$ and $a = lb$ for positive $k, l$ So
$a = lka$Giving $lk = 1$ and $l = k = 1$Hence $a = b$. ✓

_Transitive:_ If $a \mid b$ and $b \mid c$Then $c = lb = l(ka) = (lk)a$So $a \mid c$. ✓

Cover relations ($b$ covers $a$ when $a \mid b$ and no element lies strictly between):

- 12 covers 6, 4
- 6 covers 2, 3
- 4 covers 2
- 3 covers 1
- 2 covers 1

Reading from bottom to top the Hasse diagram is: $1$ at the bottom with edges to $2$ and $3$; $2$
connects up to $4$ and $6$; $3$ connects up to $6$; $4$ and $6$ connect up to $12$ at the top.

</details>

### 2.3 Functions

A function $f : A \to B$ is a relation where each $a \in A$ appears exactly once as a first element.

- **Injective (one-to-one):** $f(a_1) = f(a_2) \implies a_1 = a_2$.
- **Surjective (onto):** for every $b \in B$There exists $a \in A$ with $f(a) = b$.
- **Bijective:** both injective and surjective.

**Theorem 2.1.** If $A$ and $B$ are finite sets, $f : A \to B$ is:

- Injective if and only if $|A| \leq |B|$.
- Surjective if and only if $|A| \geq |B|$.
- Bijective if and only if $|A| = |B|$.

**Theorem 2.2 (Pigeonhole Principle).** If $|A| \gt{} |B|$Then no function $f : A \to B$ is
injective. Equivalently, placing $n$ items into $m$ boxes with $n \gt{} m$ forces at least one box
to contain at least $\lceil n/m \rceil$ items.

**Function composition.** Given $f : A \to B$ and $g : B \to C$The composition $g \circ f : A \to C$
is defined by $(g \circ f)(a) = g(f(a))$ for all $a \in A$.

**Theorem 2.3.** If $f : A \to B$ and $g : B \to C$ are both injective, then $g \circ f$ is
injective.

_Proof._ Suppose $(g \circ f)(a_1) = (g \circ f)(a_2)$. Then $g(f(a_1)) = g(f(a_2))$. Since $g$ is
Injective, $f(a_1) = f(a_2)$. Since $f$ is injective, $a_1 = a_2$. Hence $g \circ f$ is injective.
$\blacksquare$

**Theorem 2.4.** If $f : A \to B$ and $g : B \to C$ are both surjective, then $g \circ f$ is
surjective.

_Proof._ Let $c \in C$. Since $g$ is surjective, $\exists\, b \in B$ with $g(b) = c$. Since $f$ is
Surjective, $\exists\, a \in A$ with $f(a) = b$. Then $(g \circ f)(a) = g(f(a)) = g(b) = c$. Hence
$g \circ f$ is surjective. $\blacksquare$

**Corollary 2.5.** The composition of two bijections is a bijection.

A function $f : A \to B$ is **invertible** if there exists $f^{-1} : B \to A$ such that
$f^{-1} \circ f = \mathrm{id{}_A$ and $f \circ f^{-1} = \mathrm{id{}_B$. A function is invertible If
and only if it is bijective.

### 2.4 Countability

**Definition.** A set $S$ is **countable** if it is finite or countably infinite. A set is
**countably infinite** if there exists a bijection $\mathbb{{'}N{}'} \to S$. A set that is not
countable Is **uncountable**.

**Theorem 2.6.** $\mathbb{{'}Z{}'}$ is countably infinite.

_Proof._ The function $f : \mathbb{{'}N{}'} \to \mathbb{{'}Z{}'}$ defined by

$$f(n) = \begin{cases} n/2 & \mathrm{if}\; n\; \mathrm{is}\; even \\ -(n+1)/2 & \mathrm{if}\; n\; \mathrm{is}\; odd \end{cases}$$

Is a bijection, enumerating $0, -1, 1, -2, 2, -3, 3, \ldots$ $\blacksquare$

**Theorem 2.7.** $\mathbb{{'}Q{}'}$ is countably infinite.

_Proof._ Every positive rational can be written as $p/q$ with $p, q \in \mathbb{{'}N{}'}^+$. Arrange
the Pairs $(p, q)$ in an infinite grid and traverse them diagonally:

$1/1,\; 1/2,\; 2/1,\; 3/1,\; 1/3,\; 1/4,\; 2/3,\; 3/2,\; 4/1, \ldots$

Skipping duplicates (where $p/q = p'/q'$ in reduced form) yields an enumeration of
$\mathbb{{'}Q{}'}^+$. Extending with negatives and zero gives an enumeration of $\mathbb{{'}Q{}'}$.
$\blacksquare$

**Theorem 2.8 (Cantor, 1891).** $\mathbb{{'}R{}'}$ is uncountable.

_Proof (Diagonal argument)._ Suppose for contradiction that $\mathbb{{'}R{}'}$ is countable. Then
the Interval $[0, 1)$ can be listed as $r_1, r_2, r_3, \ldots$ where each $r_i$ has a unique decimal
Expansion $r_i = 0.d_{i1}d_{i2}d_{i3}\ldots$ with each $d_{ij} \in \\{0, 1, \ldots, 9\\}$ (choosing
the expansion that does not end in all 9s to avoid dual representations).

Define $s = 0.s_1 s_2 s_3 \ldots$ by

$$s_i = \begin{cases} 5 & \mathrm{if}\; d_{ii} \neq 5 \\ 6 & \mathrm{if}\; d_{ii} = 5 \end{cases}$$

Then $s \in [0, 1)$ and $s$ differs from $r_i$ in the $i$-th decimal place for every $i$ So
$s \notin \\{r_1, r_2, \ldots\\}$Contradicting the assumption that the list was complete. Therefore
$\mathbb{{'}R{}'}$ is uncountable. $\blacksquare$

