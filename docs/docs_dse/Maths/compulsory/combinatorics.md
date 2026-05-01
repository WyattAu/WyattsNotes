---
title: Combinatorics
description: "DSE Mathematics combinatorics notes covering permutations, combinations, counting principles, binomial theorem, and probability applications."
date: 2025-06-03T11:59:39.630Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: combinatorics
---

Combinatorics is the study of enumeration and arrangement.

## Counting Principles

### Sum Rule

Given two [mutually exclusive](./probability#mutually-exclusive-events) events, where the first
event can occur in $n_1$ distinct ways and the second event in $n_2$ distinct ways, the total number
of occurrences ($N$) for either event is $n_1 + n_2$. This extends to $k$ mutually exclusive events:

$$
\begin{aligned}
  N = \sum_{i=1}^k n_i
\end{aligned}
$$

<details>
<summary>Examples</summary>
- There is $5$ theme parks and $2$ water parks in the area, the number choices to attending one of them only would be $5+2 = 7$
</details>

### Product Rule

Given two independent sequential events (where neither affects the other's outcome), where the first
event has $n_1$ outcomes and the second has $n_2$ outcomes, the total number of compound outcomes
($N$) is $n_1 \times n_2$. This extends to $k$ independent sequential choices:

$$
\begin{aligned}
  N = \prod_{i=1}^k n_i
\end{aligned}
$$

<details>
<summary>Examples</summary>
- 4-digit PIN with $10$ options per digit yields $10^4 = 10,000$ combinations
- A 16-input AND gate with binary inputs has $2^{16} = 65,536$ possible input
- Restaurant offers $3$ appetizers, $4$ entrees, $2$ desserts. There are $3\cdot 4 \cdot 2 = 24$ distinct meal combinations
</details>

## Arrangements

### Permutations

A permutation is an ordered arrangement of distinct objects. Since objects choice cannot be
repeated, the number of choice decrease by one every time a object is chosen in a permutation,
therefore the total permutation of $n$ distinct objects is given by the factorial function:

$$
\begin{aligned}
  n(n-1)(n-2) \ldots 2 \times 1 = \prod_{k=1}^n k = n!
\end{aligned}
$$

When selecting $r$ number of objects from $n$ distinct objects, the number of choice for each
selection therefore decreases by one similarly, but only down to the last position needed, therefore
the permutation $n \mathbf{P} r$ is:

$$
\begin{aligned}
  n \mathbf{P} r = P(n, r) = n(n-1)(n-2) \ldots (n-r+2)(n-r+1) = \frac{n!}{(n-r)!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Number of ways you can put $5$ people in a queue from a class of $30$ people, $30 \mathbf{P} 5 = 17 100 720$
- $15$ runners distributed across gold/silver/bronze positions: $P(15,3) = 15 \times 14 \times 13 = 2,730$ arrangements
- 7 teams assigned to 7 distinct time slots: $P(7,7) = 5,040$ distinct schedules
</details>

### Combinations

A combination is a selection of $r$ objects from $n$ distinct objects where order is irrelevant.
Since the number of ways to permute the given selection is ($r!$), the combination
($n \mathbf{C} r$) can multiply $r!$ to obtain the permutation ($n \mathbf{P} r$):

$$
\begin{aligned}
  k!(n \mathbf{C} r) = n\mathbf{P}r = \frac{n!}{(n-r)!}\\
  n \mathbf{C} r = \binom{n}{r} = \frac{n!}{(n-r)!r!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Number of ways you can put $5$ people in a group from a class of $30$ people, $30 \mathbf{C} 5 = 142506$
- 5 members chosen from 20 candidates: $\binom{20}{5} = 15,504$
</details>

### Arrangements of Non-Distinct Objects

Given a $n$ objects with $m$ types (type $i$ has quantity $k_i$ where $\sum_{i=1}^m k_i = n$), the
total permutation ($n!$) according to the size of the finite set can be over the unique
arrangements. Since the permutation ($k_i!$) of objects in repetitive position gives the number of
arrangements that leaves the arrangement of the whole trial unchanged, the distinct permutations
($N$) are given by the multinomial coefficient.

$$
\begin{aligned}
  N = \binom{n}{k_1,k_2,\ldots,k_m} = \frac{n!}{k_1! \times k_2! \times \ldots \times k_m!}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- Arranging "TRIGGER" (7 letters: T,R,I,G,G,E,R):  
  $n=7$, $k_G=2$, $k_R=2$, others unique $\implies N = \frac{7!}{2! \cdot 2!} = 1260$ distinct sequences.
</details>

### Non-negative Integer solutions

In a case where $k = \sum_{i=0}^m n_i$, $k, n_i, m \in \mathbb{Z^+}$, the possible number of
solutions ($N$) can be thought of using the stars and bars method. This method imagine a $m-1$
number of bars as separations between each share of $k$ distributed to each $n_i$, due to the
discrete behavior of the separations, $k$ can be thought of as a number of stars. The total state
the three bars are allowed in is therefore $k+m-1$, therefore the possible number of solutions would
be the combination of the bars, hence:

$$
\begin{aligned}
  N = \binom{k+m-1}{m-1}
\end{aligned}
$$

<details>
<summary>Examples</summary>
- $a+b+c+d = 10$
  - There are $10$ stars : $\{**********\}$, $3$ bars to separate $\{|||\}$
  - One possible state would be : $\{|*****|***|**\}$, equal to $a=0, b=5, c=3, d=2$
  - $N = \binom{k+m-1}{m-1} = \binom{10+4-1}{4-1} = 286$
</details>

## Inclusion-Exclusion Principle

### Two Sets

For finite sets $A$ and $B$:

$$
\begin{aligned}
  |A \cup B| = |A| + |B| - |A \cap B|
\end{aligned}
$$

<details>
<summary>Proof</summary>

Every element of $A \cup B$ is either in exactly one of $A, B$ or in both. Summing $|A| + |B|$
counts elements in $A \cap B$ twice, so subtract one copy:

$$
\begin{aligned}
  |A \cup B| = |A| + |B| - |A \cap B|
\end{aligned}
$$

</details>

### Three Sets

$$
\begin{aligned}
  |A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
\end{aligned}
$$

<details>
<summary>Proof</summary>

Apply the two-set formula iteratively:

$$
\begin{aligned}
  |A \cup B \cup C| &= |A| + |B \cup C| - |A \cap (B \cup C)| \\
  &= |A| + \left[|B| + |C| - |B \cap C|\right] - |(A \cap B) \cup (A \cap C)| \\
  &= |A| + |B| + |C| - |B \cap C| - \left[|A \cap B| + |A \cap C| - |A \cap B \cap C|\right] \\
  &= |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|
\end{aligned}
$$

</details>

### General Formula

For $n$ finite sets $A_1, A_2, \ldots, A_n$:

$$
\begin{aligned}
  \left|\bigcup_{i=1}^{n} A_i\right| = \sum_{k=1}^{n} (-1)^{k+1} \sum_{1 \leq i_1 \lt{} \ldots \lt{} i_k \leq n} |A_{i_1} \cap \cdots \cap A_{i_k}|
\end{aligned}
$$

The sign alternates: add singleton sizes, subtract pairwise intersections, add triple intersections,
and so on.

:::info Connection to Probability The inclusion-exclusion principle has a direct analogue in
probability via the [addition rule](./probability). If $A, B$ are events in a sample space $S$,
then:

$$
\begin{aligned}
  P(A \cup B) = P(A) + P(B) - P(A \cap B)
\end{aligned}
$$

This is just inclusion-exclusion divided by $|S|$.
:::

<details>
<summary>Examples</summary>

**Example 1.** In a class of 40 students, 25 study Physics, 20 study Chemistry, and 12 study both.
How many study at least one of the two subjects?

$$
\begin{aligned}
  |P \cup C| = 25 + 20 - 12 = 33
\end{aligned}
$$

**Example 2.** A survey of 100 households: 60 have broadband, 50 have cable TV, 30 have streaming,
20 have broadband and cable, 15 have broadband and streaming, 10 have cable and streaming, and 5
have all three. How many have at least one service?

$$
\begin{aligned}
  |B \cup C \cup S| &= 60 + 50 + 30 - 20 - 15 - 10 + 5 \\
  &= 140 - 45 + 5 = 100
\end{aligned}
$$

All 100 households have at least one service.

**Example 3.** How many integers in $\{1, 2, \ldots, 100\}$ are divisible by 2, 3, or 5?

Let $A_2, A_3, A_5$ be the sets of integers divisible by 2, 3, 5 respectively:

$$
\begin{aligned}
  |A_2| &= \lfloor 100/2 \rfloor = 50, \quad |A_3| = \lfloor 100/3 \rfloor = 33, \quad |A_5| = \lfloor 100/5 \rfloor = 20 \\
  |A_2 \cap A_3| &= \lfloor 100/6 \rfloor = 16, \quad |A_2 \cap A_5| = \lfloor 100/10 \rfloor = 10, \quad |A_3 \cap A_5| = \lfloor 100/15 \rfloor = 6 \\
  |A_2 \cap A_3 \cap A_5| &= \lfloor 100/30 \rfloor = 3
\end{aligned}
$$

$$
\begin{aligned}
  |A_2 \cup A_3 \cup A_5| = 50 + 33 + 20 - 16 - 10 - 6 + 3 = 74
\end{aligned}
$$

</details>

## Circular Permutations

### Standard Result

The number of distinct arrangements of $n$ distinct objects around a circle is $(n-1)!$.

<details>
<summary>Proof</summary>

In a linear arrangement, $n$ objects yield $n!$ permutations. In a circle, rotating the entire
arrangement does not produce a new configuration. There are $n$ distinct rotations of any
arrangement (rotate by $0, 1, \ldots, n-1$ positions), so:

$$
\begin{aligned}
  \mathrm{circular permutations} = \frac{n!}{n} = (n-1)!
\end{aligned}
$$

Equivalently: fix one object in a reference position to break rotational symmetry, then arrange the
remaining $n-1$ objects linearly in $(n-1)!$ ways.

</details>

### Directional Equivalence

If clockwise and anticlockwise arrangements are considered the same (e.g. necklaces, key rings),
each arrangement is counted twice in $(n-1)!$ (once for each direction). The corrected count is:

$$
\begin{aligned}
  \frac{(n-1)!}{2}, \quad n \geq 3
\end{aligned}
$$

:::warning Only apply the division by 2 when the problem explicitly states that reflections are
equivalent. For problems involving people seated at a round table, clockwise and anticlockwise
orderings are distinct -- a seating where person $A$ has person $B$ on their left is different from
person $B$ on their right.
:::

<details>
<summary>Examples</summary>

**Example 1.** How many ways can 6 people sit around a circular table?

Fix one person, arrange the remaining 5: $(6-1)! = 120$.

**Example 2.** How many ways can 5 distinct beads be arranged on a bracelet (reflections
equivalent)?

$$
\begin{aligned}
  \frac{(5-1)!}{2} = \frac{24}{2} = 12
\end{aligned}
$$

**Example 3.** 4 couples (8 people) sit at a round table. How many arrangements if each couple sits
together?

Treat each couple as a block: 4 blocks in a circle gives $(4-1)! = 3! = 6$ arrangements. Each block
has $2!$ internal arrangements. Total:

$$
\begin{aligned}
  3! \times 2^4 = 6 \times 16 = 96
\end{aligned}
$$

</details>

## Derangements

### Definition

A **derangement** of $n$ objects is a permutation with no fixed points -- no object occupies its
original position. The number of derangements of $n$ objects is denoted $!n$ (the subfactorial of
$n$).

### Formula via Inclusion-Exclusion

Let $A_i$ be the set of permutations where element $i$ is in its original position. We want
$|S \setminus \bigcup_{i=1}^n A_i|$ where $S$ is the set of all $n!$ permutations:

$$
\begin{aligned}
  !n &= n! - \binom{n}{1}(n-1)! + \binom{n}{2}(n-2)! - \cdots + (-1)^n \binom{n}{n} 0! \\
  &= n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}
\end{aligned}
$$

<details>
<summary>Derivation</summary>

There are $\binom{n}{k}$ ways to choose $k$ specific elements to be fixed, and $(n-k)!$ ways to
permute the remaining elements. Inclusion-exclusion gives:

$$
\begin{aligned}
  !n &= \sum_{k=0}^{n} (-1)^k \binom{n}{k} (n-k)! \\
  &= \sum_{k=0}^{n} (-1)^k \frac{n!}{k!(n-k)!} (n-k)! \\
  &= n! \sum_{k=0}^{n} \frac{(-1)^k}{k!}
\end{aligned}
$$

</details>

### Recursive Formula

$$
\begin{aligned}
  !n = (n-1)\bigl(!(n-1) + !(n-2)\bigr), \quad n \geq 3
\end{aligned}
$$

with $!0 = 1$ and $!1 = 0$.

<details>
<summary>Proof</summary>

Consider element 1. In any derangement, element 1 is sent to some position $j \neq 1$ (there are
$n-1$ choices for $j$). Now consider element $j$:

- If element $j$ goes to position 1, the remaining $n-2$ elements must be deranged among themselves:
  $!(n-2)$ ways.
- If element $j$ does not go to position 1, we have $n-1$ elements (all except 1) with $n-1$
  positions (all except position $j$), where element $j$ cannot go to position 1 and each remaining
  element cannot go to its own position: $!(n-1)$ ways.

Since $j$ can be any of $n-1$ elements:

$$
\begin{aligned}
  !n = (n-1)\bigl(!(n-1) + !(n-2)\bigr)
\end{aligned}
$$

</details>

### Small Values

| $n$  | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
| ---- | --- | --- | --- | --- | --- | --- | --- |
| $!n$ | 1   | 0   | 1   | 2   | 9   | 44  | 265 |

<details>
<summary>Examples</summary>

**Example 1 (Hat-Check Problem).** 5 guests check their hats. The attendant returns them at random.
What is the probability that nobody gets their own hat?

Total permutations: $5! = 120$. Derangements: $!5 = 44$.

$$
\begin{aligned}
  P(\mathrm{no fixed point}) = \frac{44}{120} = \frac{11}{30} \approx 0.367
\end{aligned}
$$

**Example 2 (Letter-Stuffing Problem).** A secretary types 4 letters and 4 addressed envelopes, then
stuffs them randomly. What is the probability that exactly one letter goes to the correct envelope?

First, choose which letter is correct: $\binom{4}{1} = 4$ ways. The remaining 3 letters must all be
in wrong envelopes: $!3 = 2$ ways. Total:

$$
\begin{aligned}
  P(\mathrm{exactly 1 correct}) = \frac{4 \times 2}{4!} = \frac{8}{24} = \frac{1}{3}
\end{aligned}
$$

</details>

## Combinations with Restrictions

### Complementary Counting

When a problem asks for "at least" or "at most" conditions, it is often easier to count the
complement and subtract from the total.

$$
\begin{aligned}
  \mathrm{Count}(\mathrm{at least } k) = \mathrm{Total} - \mathrm{Count}(\mathrm{at most } k-1)
\end{aligned}
$$

### Inclusion/Exclusion of Items

When certain items must be included, pre-select them and choose the rest from the remaining pool.
When items must be excluded, remove them from the pool before choosing.

### Partitioning into Groups

When dividing $n$ distinct objects into $k$ unlabeled groups of sizes $s_1, s_2, \ldots, s_k$ (where
$\sum s_i = n$):

$$
\begin{aligned}
  N = \binom{n}{s_1, s_2, \ldots, s_k} = \frac{n!}{s_1! \, s_2! \, \cdots \, s_k!}
\end{aligned}
$$

If some groups have equal size and are unlabeled, divide by the factorial of the number of identical
groups to avoid overcounting.

<details>
<summary>Examples</summary>

**Example 1.** From 12 people, choose a committee of at least 3 and at most 5.

$$
\begin{aligned}
  \binom{12}{3} + \binom{12}{4} + \binom{12}{5} = 220 + 495 + 792 = 1,507
\end{aligned}
$$

**Example 2.** A committee of 5 is chosen from 8 men and 6 women. It must include at least 2 women.

Total: $\binom{14}{5}$. Subtract committees with 0 or 1 woman:

$$
\begin{aligned}
  \binom{14}{5} - \binom{8}{5} - \binom{8}{4}\binom{6}{1} = 2,002 - 56 - 420 = 1,526
\end{aligned}
$$

**Example 3.** Divide 10 distinct students into two unlabeled groups of 5.

$$
\begin{aligned}
  \frac{\binom{10}{5}}{2!} = \frac{252}{2} = 126
\end{aligned}
$$

The division by $2!$ is necessary because the two groups are indistinguishable -- choosing
$\{A,B,C,D,E\}$ and $\{F,G,H,I,J\}$ is the same partition as choosing $\{F,G,H,I,J\}$ and
$\{A,B,C,D,E\}$.

</details>

## Common Pitfalls

<details>
<summary>Permutations vs Combinations</summary>

Order matters in permutations, not in combinations. Ask: does swapping two selected elements produce
a different outcome?

- Arranging books on a shelf: permutation (order matters).
- Choosing a committee: combination (order does not matter).
- Assigning gold/silver/bronze: permutation. Selecting 3 finalists: combination.

The relationship $\binom{n}{r} = \frac{n \mathbf{P} r}{r!}$ is the definitive test -- if you can
justify dividing out the $r!$, you have a combination.

</details>

<details>
<summary>Double-Counting in Inclusion-Exclusion</summary>

When applying inclusion-exclusion, every correction must be applied with the correct sign. A common
error is forgetting to add back the triple intersection after subtracting pairwise intersections.
The sign pattern is $+$, $-$, $+$, $-$, $\ldots$ for intersections of size 1, 2, 3, 4, $\ldots$
respectively. Always verify by checking a small case manually.

</details>

<details>
<summary>Forgetting Identical Objects</summary>

If objects are not all distinct, the formula $n!$ overcounts. Always check whether any objects in
the problem are identical (identical books, identical balls, repeated letters). Use the multinomial
coefficient $\frac{n!}{k_1! k_2! \cdots}$ to correct for repetitions.

</details>

<details>
<summary>Off-by-One in Circular Permutations</summary>

The standard formula $(n-1)!$ assumes rotational symmetry is the only equivalence. Do not divide by
2 unless the problem states that reflections are equivalent (necklace-type problems). For people
seated around a table, $(n-1)!$ is correct -- do not use $(n-1)!/2$.

</details>

<details>
<summary>Stars and Bars vs Direct Counting</summary>

Stars and bars counts the number of **non-negative integer solutions** to an equation. It does not
apply when:

- Variables have upper bounds (e.g. each person gets at most 3 items) -- use inclusion-exclusion to
  subtract invalid cases.
- Objects are distinct -- use the multiplication principle or Stirling numbers instead.
- Order matters within groups -- stars and bars only counts compositions, not arrangements.

When in doubt, check whether the objects being distributed are identical and whether the recipients
are distinct.

</details>

---

<details>
<summary>Wrap-up Questions</summary>
1. **Question:** How many 8-character passwords exist if they must contain at least one uppercase letter, one lowercase letter, one digit, and one symbol (from 10 symbols), with no repeated characters?
<details>
<summary>Answer</summary>
- Total permutations of 8 distinct characters from 72 options (26 uppercase, 26 lowercase, 10 digits, 10 symbols): $P(72,8)$.  
- Subtract invalid cases using inclusion-exclusion (approximate):  
  $$
  \begin{aligned}
        P(72,8) - \binom{4}{1}P(46,8) + \binom{4}{2}P(20,8) - \binom{4}{3}P(10,8) + 0
  \end{aligned}
  $$
  Note: since the character types have different sizes (26, 26, 10, 10), the inclusion-exclusion terms subtract cases missing one type, add back cases missing two types, etc., using the size of the remaining pool after removing each type.
</details>

2. **Question:** You have 9 books: 4 distinct mathematics books, 3 identical physics books, and 2
identical chemistry books. How many distinct ways can they be arranged on a shelf?
<details>
<summary>Answer</summary>

- Account for identical books: $\frac{9!}{3! \cdot 2!} = 30240$.
</details>

3. **Question:** From 10 people, select a committee of 5 with roles: president, vice-president, and
3 indistinct members. How many ways can this be done?
<details>
<summary>Answer</summary>

- Choose president and vice-president (ordered): $\binom{10}{2} \cdot 2!$.
- Choose 3 indistinct members from remaining: $\binom{8}{3}$.
- Total: $\binom{10}{2} \cdot 2! \cdot \binom{8}{3}$.
</details>

4. **Question:** 6 people queue for a bus, but 2 refuse to stand next to each other. How many valid
permutations exist?
<details>
<summary>Answer</summary>

- Total permutations: $6!$.
- Subtract permutations where the two are adjacent: $2 \cdot 5!$.
- Valid: $6! - 2 \cdot 5! = 480$.
</details>

5. **Question:** An exam has $3$ sections with $5$ questions each. How many ways can you choose $6$
questions if you must pick $\lq 1$ from each section?
<details>
<summary>Answer</summary>

- Use inclusion-exclusion:
  $$
  \binom{15}{6} - \binom{3}{1}\binom{10}{6} + \binom{3}{2}\binom{5}{6} - \binom{3}{3}\binom{0}{6}
  $$
  (Note: $\binom{5}{6} = 0$, $\binom{0}{6} = 0$).

</details>

6. **Question:** Divide 10 students into two groups of 5, but Alice and Bob cannot be in the same
group. How many unique arrangements can be made?
<details>
<summary>Answer</summary>

- Total ways to partition into unlabeled groups: $\frac{1}{2}\binom{10}{5}$.
- Subtract cases where Alice and Bob are together:
$\frac{1}{2} \left[ \binom{10}{5} - \binom{8}{3} \right]$ (since $\binom{8}{3}$ fixes them
together).
</details>

7. **Question:** How many 4-letter words can be formed from "MISSISSIPPI" with no repeated letters?
<details>
<summary>Answer</summary>

- Only 4 distinct letters (M,I,S,P) in the multiset. Impossible to form words with no repeats: $0$.
</details>

8. **Question:** A pizza place offers 10 distinct toppings (6 meat, 4 vegetable). How many pizzas
can be made with 3-5 toppings, including at least one meat and one vegetable?
<details>
<summary>Answer</summary>

- For $k$ toppings ($k = 3,4,5$): $\binom{10}{k} - \binom{6}{k} - \binom{4}{k}$ (exclude
  all-meat/all-vegetable).
- Sum:
$\left[\binom{10}{3}{-}\binom{6}{3}{-}\binom{4}{3}\right] {+} \left[\binom{10}{4}{-}\binom{6}{4}{-}\binom{4}{4}\right] {+} \left[\binom{10}{5}{-}\binom{6}{5}{-}\binom{4}{5}\right] = 96{+}194{+}246 = 536$.
</details>

9. **Question:** A student must choose 4 courses from 7 morning and 5 afternoon offerings, with
$\lq$1 morning and $\lq$2 afternoon courses. How many ways?
<details>
<summary>Answer</summary>

- Cases: (1 morning, 3 afternoon) or (2 morning, 2 afternoon).
- $\binom{7}{1}\binom{5}{3} + \binom{7}{2}\binom{5}{2} = 7 \cdot 10 + 21 \cdot 10 = 280$.
</details>

10. **Question:** A license plate has 3 distinct letters (A-Z) followed by 3 distinct digits (0-9).
How many plates exist if the number formed by the digits is even?
<details>
<summary>Answer</summary>

- Letters: $P(26,3)$.
- Digits: Choose last digit (even: 0,2,4,6,8; 5 options), then arrange first two from remaining 9
  digits: $5 \cdot P(9,2)$.
- Total: $P(26,3) \cdot 5 \cdot 9 \cdot 8 = 5,616,000$.
</details>

11. **Question:** A bag has 6 identical red, 4 identical blue, and 5 identical green marbles. How
many distinct ways can you draw 4 marbles?
<details>
<summary>Answer</summary>

- Nonnegative integer solutions to $R + B + G = 4$: $\binom{4+3-1}{4} = \binom{6}{4} = 15$.
</details>

12. **Question:** How many 5-card poker hands contain at least one card from each suit?
<details>
<summary>Answer</summary>

- Choose suit with two cards: $\binom{4}{1}$.
- Choose 2 cards from that suit: $\binom{13}{2}$.
- Choose 1 card from each other suit: $\binom{13}{1}^3$.
- Total: $\binom{4}{1} \binom{13}{2} \binom{13}{1}^3 = 4 \cdot 78 \cdot 13^3$.
</details>

13. **Question:** Arrange 5 distinct math and 4 distinct history books on a shelf such that no two
math books are adjacent.
<details>
<summary>Answer</summary>

- Arrange history books (creates 5 gaps): $4!$.
- Place math books in gaps (one per gap): $5!$.
- Total: $4! \cdot 5! = 24 \cdot 120 = 2,880$.
</details>

14. **Question:** How many positive integers $<1000$ have digits summing to $10$?
<details>
<summary>Answer</summary>

- Represent numbers as 3-digit strings (allow leading zeros).
- Nonnegative solutions to $a+b+c=10$ with $0 \leq a,b,c \leq 9$:
$\binom{12}{10} - \binom{3}{1} = 66 - 3 = 63$ (subtract cases where a digit $\lq$10).
</details>

15. **Question:** A family (parents, two children) and 3 friends are seated in a row. Parents must
sit together, and children must be separated by at least one adult. How many arrangements?
<details>
<summary>Answer</summary>

- Treat parents as a block: $2!$ internal arrangements.
- Total with parents together: $2! \cdot 6! = 1,440$.
- Subtract cases where children are adjacent (treat as a block): $2! \cdot 2! \cdot 5! = 480$.
- Valid: $1,440 - 480 = 960$.
</details>

16. **Question:** Assign 10 distinct gifts to 3 distinct children such that each gets $\lq$2 gifts.
<details>
<summary>Answer</summary>

- Total assignments: $3^{10}$.
- Subtract cases where a child gets $<2$ gifts (inclusion-exclusion):
  $$
  3^{10} - \binom{3}{1}\left[\binom{10}{0}2^{10} + \binom{10}{1}2^9\right] + \binom{3}{2}\left[1 + 2\binom{10}{1} + \binom{10}{2}2!\right] = 59,049 - 18,099 = 40,950.
  $$

</details>

17. **Question:** Pair 5 men and 5 women for a dance. Two men (A,B) refuse to dance with a
particular woman (X). How many valid pairings?
<details>
<summary>Answer</summary>

- Total pairings: $5!$.
- Subtract pairings where A or B is paired with X: $5! - 2 \cdot 4! = 120 - 48 = 72$.
</details>

18. **Question:** How many distinct 4-digit numbers can be formed from `{1,2,3,4,5,6}` with each digit
used $\lq2$ times?
<details>
<summary>Answer</summary>

- Case 1 (all distinct): $\binom{6}{4}4! = 360$.
- Case 2 (one digit twice, two once): $\binom{6}{1}\binom{5}{2} \frac{4!}{2!} = 720$.
- Case 3 (two digits twice): $\binom{6}{2} \frac{4!}{2!2!} = 90$.
- Total: $360 + 720 + 90 = 1,170$.
</details>

19. **Question:** A coin is flipped 10 times. How many outcomes have between 3 and 5 heads
(inclusive)?
<details>
<summary>Answer</summary>

- Sum: $\binom{10}{3} + \binom{10}{4} + \binom{10}{5} = 120 + 210 + 252 = 582$.
</details>

20. **Question:** A bakery has 8 types of donuts. How many ways to buy a dozen (12) if you must buy
$\lq 1$ of each type?
<details>
<summary>Answer</summary>

- First take one of each type. Distribute remaining 4 donuts freely:
$\binom{4+8-1}{4} = \binom{11}{4} = 330$.
</details>
</details>

