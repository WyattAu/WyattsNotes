---
title: Combinatorics
tags:
  - Computing
  - University
---

### 4.1 Counting Principles

**Rule of Sum.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways, and they cannot both
be Done, then $A$ or $B$ can be done in $m + n$ ways.

**Rule of Product.** If task $A$ can be done in $m$ ways and task $B$ in $n$ ways independently,
then $A$ and $B$ together can be done in $mn$ ways.

### 4.2 Permutations and Combinations

**Permutations:** $P(n, r) = n! / (n-r)!$ -- ordered arrangements of $r$ items from $n$.

**Combinations:** $\binom{n}{r} = \frac{n!}{r!(n-r)!}$ -- unordered selections of $r$ items from
$n$.

**Theorem 4.1 (Binomial Theorem).**

$$(x + y)^n = \sum_{r=0}^{n} \binom{n}{r} x^{n-r} y^r$$

**Theorem 4.2 (Pascal's Identity).** $\binom{n}{r} = \binom{n-1}{r} + \binom{n-1}{r-1}$

_Proof._ Every $r$-subset of $\\{1, \ldots, n\\}$ either contains $n$ (giving $\binom{n-1}{r-1}$
ways To choose the remaining $r-1$) or does not contain $n$ (giving $\binom{n-1}{r}$ ways to choose
all $r$ From $\\{1, \ldots, n-1\\}$). $\blacksquare$

### 4.3 Inclusion-Exclusion Principle

**Theorem 4.3 (Inclusion-Exclusion).** For finite sets $A_1, \ldots, A_n$:

$$\left|\bigcup_{i=1}^{n} A_i\right| = \sum_i |A_i| - \sum_{i \lt j} |A_i \cap A_j| + \sum_{i \lt j \lt k} |A_i \cap A_j \cap A_k| - \cdots + (-1)^{n+1}|A_1 \cap \cdots \cap A_n|$$

_Proof (for two sets)._ Every element of $A_1 \cup A_2$ is in $A_1$ or $A_2$ or both. Counting
$|A_1| + |A_2|$ counts elements in $A_1 \cap A_2$ twice, so we subtract $|A_1 \cap A_2|$ once:
$|A_1 \cup A_2| = |A_1| + |A_2| - |A_1 \cap A_2|$.

For the general case, an element in exactly $t$ of the sets is counted
$\binom{t}{1} - \binom{t}{2} + \binom{t}{3} - \cdots = 1 - (1-1)^t = 1$ time, which is correct.
$\blacksquare$

**Worked Example.** How many integers from 1 to 1000 are not divisible by 2, 3, or 5?

Let $A_2$ = multiples of 2, $A_3$ = multiples of 3, $A_5$ = multiples of 5.

$|A_2| = 500$, $|A_3| = 333$, $|A_5| = 200$.

$|A_2 \cap A_3| = 166$, $|A_2 \cap A_5| = 100$, $|A_3 \cap A_5| = 66$.

$|A_2 \cap A_3 \cap A_5| = 33$.

$|A_2 \cup A_3 \cup A_5| = 500 + 333 + 200 - 166 - 100 - 66 + 33 = 734$.

Not divisible by 2, 3, or 5: $1000 - 734 = 266$. $\blacksquare$

**Worked Example.** How many integers from 1 to 500 are divisible by 3 or 7 but not by 5?

<details>
<summary>Solution</summary>

Let $A_3$ = multiples of 3, $A_7$ = multiples of 7, $A_5$ = multiples of 5 in
$\\{1, \ldots, 500\\}$.

$|A_3| = \lfloor 500/3 \rfloor = 166$ $|A_7| = \lfloor 500/7 \rfloor = 71$
$|A_5| = \lfloor 500/5 \rfloor = 100$.

$|A_3 \cap A_7| = \lfloor 500/21 \rfloor = 23$ $|A_3 \cap A_5| = \lfloor 500/15 \rfloor = 33$
$|A_7 \cap A_5| = \lfloor 500/35 \rfloor = 14$
$|A_3 \cap A_7 \cap A_5| = \lfloor 500/105 \rfloor = 4$.

Divisible by 3 or 7: $|A_3 \cup A_7| = 166 + 71 - 23 = 214$.

Divisible by 3 or 7 **and** by 5:
$|(A_3 \cup A_7) \cap A_5| = |A_3 \cap A_5| + |A_7 \cap A_5| - |A_3 \cap A_7 \cap A_5| = 33 + 14 - 4 = 43$.

Divisible by 3 or 7 but **not** by 5: $214 - 43 = 171$. $\blacksquare$

</details>

### 4.4 Stars and Bars

**Theorem 4.4.** The number of ways to distribute $n$ identical objects into $k$ distinct bins is
$\binom{n + k - 1}{k - 1}$.

_Proof._ The problem is equivalent to placing $k - 1$ dividers among $n$ objects, giving
$\binom{n + k - 1}{n} = \binom{n + k - 1}{k - 1}$ arrangements. $\blacksquare$

**Worked Example.** How many solutions does $x_1 + x_2 + x_3 = 15$ have with $x_i \geq 1$?

<details>
<summary>Solution</summary>

Substitute $y_i = x_i - 1 \geq 0$. Then $y_1 + y_2 + y_3 = 15 - 3 = 12$ with $y_i \geq 0$. By stars
and bars: $\binom{12 + 3 - 1}{3 - 1} = \binom{14}{2} = 91$. $\blacksquare$

</details>

**Worked Example.** How many solutions does $x_1 + x_2 + x_3 + x_4 = 20$ have with $x_i \geq 0$?

<details>
<summary>Solution</summary>

Directly by stars and bars: $\binom{20 + 4 - 1}{4 - 1} = \binom{23}{3} = 1771$. $\blacksquare$

</details>

### 4.5 The Pigeonhole Principle

**Theorem 4.5 (Pigeonhole Principle).** If $n$ objects are placed into $k$ boxes and $n \gt k$Then
at Least one box contains at least $\lceil n/k \rceil$ objects.

_Proof._ If every box contained at most $\lceil n/k \rceil - 1$ objects, the total would be at most
$k(\lceil n/k \rceil - 1) \lt k \cdot n/k = n$Contradicting that there are $n$ objects.
$\blacksquare$

**Worked Example.** In a class of 400 students, at least how many were born in the same month?

<details>
<summary>Solution</summary>

There are 12 months (boxes) and 400 students (objects). By the pigeonhole principle, some month Has
at least $\lceil 400/12 \rceil = \lceil 33.33\ldots \rceil = 34$ students.

</details>

**Worked Example.** Show that among any $n + 1$ integers from $\\{1, 2, \ldots, 2n\\}$Two of them
Differ by exactly $n$.

<details>
<summary>Solution</summary>

Partition $\\{1, 2, \ldots, 2n\\}$ into $n$ pigeonholes: $\\{1, n+1\\}$, $\\{2, n+2\\}$, $\ldots$
$\\{n, 2n\\}$. Each pair sums to $n + (n+k) = 2n + k$... Let me rephrase.

Partition into $\\{1, n+1\\}$, $\\{2, n+2\\}$, $\ldots$, $\\{n, 2n\\}$. These are $n$ disjoint sets.
If we select $n + 1$ integers from $\\{1, \ldots, 2n\\}$By the pigeonhole principle two must lie in
the Same set $\\{i, n+i\\}$And their difference is $(n + i) - i = n$. $\blacksquare$

</details>

**Worked Example.** Prove that any sequence of $n^2 + 1$ distinct real numbers contains a monotone
(increasing or decreasing) subsequence of length $n + 1$.

<details>
<summary>Solution</summary>

Let $a_1, a_2, \ldots, a_{n^2+1}$ be the sequence. For each $a_i$Let $d_i$ be the length of the
Longest increasing subsequence starting at $a_i$And $e_i$ the length of the longest decreasing
Subsequence starting at $a_i$.

Suppose for contradiction that every monotone subsequence has length at most $n$. Then
$1 \leq d_i \leq n$ and $1 \leq e_i \leq n$So there are at most $n^2$ distinct ordered pairs
$(d_i, e_i)$. Since we have $n^2 + 1$ elements, by the pigeonhole principle two indices $i \lt j$
Have $(d_i, e_i) = (d_j, e_j)$.

If $a_i \lt a_j$Then $d_i \geq d_j + 1$ (append $a_i$ before the increasing subsequence starting At
$a_j$), contradicting $d_i = d_j$.

If $a_i \gt a_j$Then $e_i \geq e_j + 1$Contradicting $e_i = e_j$.

Either way we have a contradiction. $\blacksquare$

</details>

**Theorem 4.6 (Generalised Pigeonhole Principle).** If $n$ objects are placed into $k$ boxes, then
at Least one box contains at least $\lceil n/k \rceil$ objects. Equivalently, if each box contains
at most $m$ objects, then the total number of objects is at most $km$.

**Worked Example.** A drawer contains red, blue, and yellow socks. How many socks must be drawn
(without looking) to guarantee at least 4 socks of the same colour?

<details>
<summary>Solution</summary>

There are 3 colours (boxes). By the generalised pigeonhole principle, drawing $n$ socks guarantees
At least $\lceil n/3 \rceil$ of one colour. We need $\lceil n/3 \rceil \geq 4$So $n/3 \gt{} 3$Giving
$n \geq 10$.

With 9 socks it is possible to have 3 of each colour (no colour reaches 4). With 10 socks, one
Colour must have at least $\lceil 10/3 \rceil = 4$.

</details>

**Worked Example.** Prove that in any group of $n$ people, there are at least two who have shaken
Hands with the same number of people (within the group).

<details>
<summary>Solution</summary>

Each person can shake hands with between 0 and $n - 1$ others, giving $n$ possible values. But the
Values 0 and $n - 1$ cannot both occur (if someone shook no hands, no one shook everyone's hand, And
vice versa). So there are at most $n - 1$ distinct handshake counts among $n$ people. By the
Pigeonhole principle, at least two people have the same count. $\blacksquare$

</details>

### 4.6 Catalan Numbers

The $n$-th **Catalan number** is

$$C_n = \frac{1}{n+1}\binom{2n}{n} = \frac{(2n)!}{(n+1)!\,n!}$$

The first few values: $C_0 = 1$, $C_1 = 1$, $C_2 = 2$, $C_3 = 5$, $C_4 = 14$, $C_5 = 42$.

**Catalan numbers count:**

- The number of valid (properly matched) sequences of $n$ pairs of parentheses.
- The number of binary search trees with $n$ nodes.
- The number of ways to triangulate a convex $(n+2)$-gon.
- The number of lattice paths from $(0,0)$ to $(n,n)$ that never go above the diagonal.

**Recurrence.** $C_0 = 1$ and for $n \geq 1$:

$$C_n = \sum_{i=0}^{n-1} C_i \, C_{n-1-i}$$

**Worked Example.** Verify $C_3 = 5$ by listing all valid sequences of 3 pairs of parentheses.

<details>
<summary>Solution</summary>

The five valid sequences are: $((()))$, $(()())$, $(())()$, $()(())$, $()()()$.

Checking: $C_3 = \frac{1}{4}\binom{6}{3} = \frac{1}{4} \cdot 20 = 5$. ✓

</details>

### 4.7 Generating Functions for Combinatorics

The **ordinary generating function (OGF)** of a sequence $\\{a_n\\}$ is

$$G(x) = \sum_{n=0}^{\infty} a_n x^n$$

**Common generating functions:**

| Sequence $a_n$   | Generating function $G(x)$ |
| ---------------- | -------------------------- |
| $1$              | $\dfrac{1}{1-x}$           |
| $r^n$            | $\dfrac{1}{1 - rx}$        |
| $\binom{n+k}{k}$ | $\dfrac{1}{(1-x)^{k+1}}$   |
| $n$              | $\dfrac{x}{(1-x)^2}$       |
| $n^2$            | $\dfrac{x(1+x)}{(1-x)^3}$  |

**Key operations.** If $A(x)$ generates $\\{a_n\\}$ and $B(x)$ generates $\\{b_n\\}$:

- $A(x) + B(x)$ generates $\\{a_n + b_n\\}$ (choice between types).
- $A(x) \cdot B(x)$ generates $\\{c_n\\}$ where $c_n = \sum_{i=0}^{n} a_i b_{n-i}$ (combining two
  choices).

**Worked Example.** Find the number of ways to select $n$ coins from unlimited supplies of 1p, 2p,
And 5p coins.

<details>
<summary>Solution</summary>

The generating function is

$$G(x) = \underbrace{(1 + x + x^2 + \cdots)}_{\mathrm{1p\; coins{}} \cdot \underbrace{(1 + x^2 + x^4 + \cdots)}_{\mathrm{2p\; coins{}} \cdot \underbrace{(1 + x^5 + x^{10} + \cdots)}_{\mathrm{5p\; coins{}}$$

$$= \frac{1}{1-x} \cdot \frac{1}{1-x^2} \cdot \frac{1}{1-x^5}$$

The coefficient of $x^n$ in the expansion gives the number of ways. For example, expanding the First
few terms: $1 + x + 2x^2 + 2x^3 + 3x^4 + 4x^5 + \cdots$So there are 4 ways to make 5p (5×1p; 3×1p +
1×2p; 1×1p + 2×2p; 1×5p).

</details>

