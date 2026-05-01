---
title: Permutations and Combinations
description: "DSE Mathematics notes on permutations and combinations covering factorial notation, arrangement problems, selection problems, and the binomial expansion."
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: permutations-and-combinations
---

## Factorial Notation

### Definition

For $n \in \mathbb{N}$:

$$n! = n \times (n - 1) \times (n - 2) \times \cdots \times 2 \times 1$$

with $0! = 1$ by convention.

### Properties

$$n! = n \times (n - 1)!$$

$$(n + 1)! = (n + 1) \times n!$$

### Worked Example 1

Simplify $\dfrac{10!}{7! \cdot 3!}$.

$$\frac{10!}{7! \cdot 3!} = \frac{10 \times 9 \times 8 \times 7!}{7! \times 6} = \frac{720}{6} = 120$$

---

## Permutations

### Definition

A **permutation** is an ordered arrangement of objects. The number of permutations of $r$ objects
chosen from $n$ distinct objects:

$$P_r^n = \frac{n!}{(n - r)!}$$

Also written as $^{n}P_r$ or $P(n, r)$.

### When Order Matters

Permutations are used when the **order** of selection matters.

### Worked Example 2

In how many ways can 5 students be arranged in a row from a class of 8?

$$P_5^8 = \frac{8!}{3!} = \frac{40320}{6} = 6720$$

### Worked Example 3

How many 4-letter arrangements can be made from the word "SMILE"?

All 5 letters are distinct: $P_4^5 = \frac{5!}{1!} = 120$.

### Permutations with Repetition

When some objects are identical, divide by the factorial of the count of each repeated object:

$$\mathrm{Arrangements} = \frac{n!}{n_1!\, n_2!\, \cdots\, n_k!}$$

### Worked Example 4

How many distinct arrangements of the letters in "BANANA"?

Total letters: $n = 6$, with $\mathrm{A}$ appearing $3$ times, $\mathrm{N}$ appearing $2$ times, and
$\mathrm{B}$ appearing $1$ time.

$$\frac{6!}{3!\, 2!\, 1!} = \frac{720}{6 \times 2} = 60$$

### Circular Permutations

The number of ways to arrange $n$ distinct objects in a circle:

$$(n - 1)!$$

This accounts for rotational symmetry (rotating everyone does not create a new arrangement).

### Worked Example 5

In how many ways can 6 people sit around a round table?

$$(6 - 1)! = 5! = 120$$

---

## Combinations

### Definition

A **combination** is an unordered selection of objects. The number of combinations of $r$ objects
chosen from $n$ distinct objects:

$$C_r^n = \binom{n}{r} = \frac{n!}{r!(n - r)!}$$

Also written as $^{n}C_r$ or $C(n, r)$.

### When Order Does Not Matter

Combinations are used when only the **group** matters, not the order of selection.

### Worked Example 6

A committee of 4 is to be chosen from 10 people. How many ways?

$$\binom{10}{4} = \frac{10!}{4!\, 6!} = \frac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$$

### Relation Between Permutations and Combinations

$$P_r^n = r! \times C_r^n$$

This reflects the fact that each combination of $r$ objects can be arranged in $r!$ ways.

---

## Pascal's Triangle

### Construction

Pascal's triangle is a triangular array where each entry is the sum of the two entries directly
above it:

$$
\begin{array}{cccccccc}
& & & 1 & & & \\
& & 1 & & 1 & & \\
& 1 & & 2 & & 1 & \\
1 & & 3 & & 3 & & 1 \\
& 1 & & 4 & & 6 & & 4 & & 1
\end{array}
$$

### Connection to Combinations

The $k$-th entry (starting from $k = 0$) in row $n$ (starting from $n = 0$) is:

$$\binom{n}{k}$$

### Properties of Binomial Coefficients

**Symmetry:**

$$\binom{n}{k} = \binom{n}{n - k}$$

**Pascal's identity:**

$$\binom{n}{k} = \binom{n - 1}{k - 1} + \binom{n - 1}{k}$$

**Row sum:**

$$\sum_{k=0}^{n} \binom{n}{k} = 2^n$$

**Alternating sum:**

$$\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$$

### Worked Example 7

Find the coefficient of $x^3$ in the expansion of $(1 + 2x)^7$.

By the binomial theorem:

$$(1 + 2x)^7 = \sum_{k=0}^{7} \binom{7}{k}(2x)^k$$

For $x^3$: $k = 3$.

Coefficient: $\binom{7}{3} \cdot 2^3 = 35 \times 8 = 280$.

---

## Applications

### Selection Problems

When a problem involves selecting from distinct groups, multiply the number of choices for each
group.

### Worked Example 8

A class has 7 boys and 5 girls. In how many ways can a team of 4 be chosen with at least 2 girls?

| Girls | Boys | Ways                                                    |
| ----- | ---- | ------------------------------------------------------- |
| 2     | 2    | $\binom{5}{2} \times \binom{7}{2} = 10 \times 21 = 210$ |
| 3     | 1    | $\binom{5}{3} \times \binom{7}{1} = 10 \times 7 = 70$   |
| 4     | 0    | $\binom{5}{4} \times \binom{7}{0} = 5 \times 1 = 5$     |

Total: $210 + 70 + 5 = 285$.

### Complementary Counting

When it is easier to count the complement and subtract:

$$\mathrm{Desired count} = \mathrm{Total} - \mathrm{Undesired}$$

### Worked Example 9

How many 5-card hands from a standard 52-card deck contain at least one ace?

Total hands: $\binom{52}{5} = 2598960$.

Hands with no ace: $\binom{48}{5} = 1712304$.

Hands with at least one ace: $2598960 - 1712304 = 886656$.

---

## Common Pitfalls

- Confusing permutations with combinations. Ask: does the order matter? If yes, use $P_r^n$; if no,
  use $C_r^n$.
- Forgetting that $0! = 1$. This is needed in many calculations.
- In circular permutation problems, forgetting that rotations are equivalent. For $n$ objects in a
  circle, there are $(n - 1)!$ arrangements, not $n!$.
- Double-counting in selection problems. When dividing into groups, ensure each object is counted
  exactly once.
- Incorrectly applying the permutation-with-repetition formula. Only divide by factorials when
  objects are truly identical.

---

## Summary Table

| Topic             | Formula                                            |
| ----------------- | -------------------------------------------------- |
| Factorial         | $n! = n(n-1)(n-2)\cdots 1$                         |
| Permutation       | $P_r^n = n!/(n-r)!$                                |
| Combination       | $C_r^n = n!/[r!(n-r)!]$                            |
| With repetition   | $n!/(n_1!\, n_2!\, \cdots)$                        |
| Circular          | $(n - 1)!$                                         |
| Row sum           | $\sum_{k=0}^n \binom{n}{k} = 2^n$                  |
| Pascal's identity | $\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$ |

---

<details>
<summary>Wrap-up Questions</summary>

1. **Question:** Evaluate $\binom{12}{4}$.

$\binom{12}{4} = \dfrac{12!}{4!\, 8!} = \dfrac{12 \times 11 \times 10 \times 9}{4 \times 3 \times 2 \times 1} = \dfrac{11880}{24} = 495$.

2. **Question:** How many 3-digit even numbers can be formed from the digits $\{1, 2, 3, 4, 5, 6\}$
   if each digit can be used at most once?

Last digit (units) must be even: choose from $\{2, 4, 6\}$ -- 3 ways.

First digit cannot be zero (not an issue here) and must differ from the last digit: 5 remaining
digits.

Middle digit: 4 remaining digits.

Total: $3 \times 5 \times 4 = 60$. Wait -- first digit: 5 choices (all except the chosen last
digit). Middle digit: 4 choices (remaining). Total: $3 \times 5 \times 4 = 60$.

3. **Question:** In how many ways can 4 boys and 3 girls be arranged in a row if no two girls sit
   together?

First arrange the 4 boys: $4! = 24$ ways. This creates 5 gaps (including ends):

`_ B _ B _ B _ B _`

Choose 3 of these 5 gaps for the girls: $\binom{5}{3} = 10$ ways. Arrange the 3 girls: $3! = 6$
ways.

Total: $24 \times 10 \times 6 = 1440$.

4. **Question:** A committee of 5 is chosen from 4 men and 6 women. How many committees have more
   women than men?

| Women | Men | Ways                                           |
| ----- | --- | ---------------------------------------------- |
| 3     | 2   | $\binom{6}{3}\binom{4}{2} = 20 \times 6 = 120$ |
| 4     | 1   | $\binom{6}{4}\binom{4}{1} = 15 \times 4 = 60$  |
| 5     | 0   | $\binom{6}{5}\binom{4}{0} = 6 \times 1 = 6$    |

Total: $120 + 60 + 6 = 186$.

5. **Question:** Find the coefficient of $x^4$ in $(2 - 3x)^8$.

Coefficient: $\binom{8}{4}(2)^4(-3)^4 = 70 \times 16 \times 81 = 90720$.

6. **Question:** How many distinct arrangements of the letters in "MISSISSIPPI"?

Letters: M(1), I(4), S(4), P(2). Total: 11.

$$\frac{11!}{4!\, 4!\, 2!\, 1!} = \frac{39916800}{24 \times 24 \times 2} = \frac{39916800}{1152} = 34650$$

7. **Question:** Prove that $\binom{n}{r} + \binom{n}{r - 1} = \binom{n + 1}{r}$.

$\binom{n}{r} + \binom{n}{r - 1} = \frac{n!}{r!(n-r)!} + \frac{n!}{(r-1)!(n-r+1)!}$

$= \frac{n!(n - r + 1) + n! \cdot r}{r!(n - r + 1)!} = \frac{n!(n + 1)}{r!(n + 1 - r)!} = \frac{(n+1)!}{r!(n+1-r)!} = \binom{n+1}{r}$.
$\qed$

8. **Question:** A box contains 6 red, 4 blue, and 5 green balls. In how many ways can 4 balls be
   chosen so that at least 2 are red?

Total: $\binom{15}{4} = 1365$.

With 0 or 1 red: $\binom{9}{4} + \binom{6}{1}\binom{9}{3} = 126 + 6 \times 84 = 126 + 504 = 630$.

At least 2 red: $1365 - 630 = 735$.

9. **Question:** How many ways can 8 people be divided into 4 pairs?

Number of ways to split $2n$ people into $n$ unordered pairs:

$$\frac{(2n)!}{2^n \cdot n!} = \frac{8!}{2^4 \cdot 4!} = \frac{40320}{16 \times 24} = \frac{40320}{384} = 105$$

10. **Question:** From 7 men and 5 women, how many committees of 6 can be formed with at least 3 men
    and at least 2 women?

Possible compositions: (4M, 2W), (3M, 3W).

$(4\mathrm{M}, 2\mathrm{W})$: $\binom{7}{4}\binom{5}{2} = 35 \times 10 = 350$.

$(3\mathrm{M}, 3\mathrm{W})$: $\binom{7}{3}\binom{5}{3} = 35 \times 10 = 350$.

Total: $350 + 350 = 700$.

</details>

---

## Additional Worked Examples

**Worked Example 10: Arrangements with repeated letters**

How many distinct arrangements of the letters in "MATHEMATICS"?

<details>
<summary>Solution</summary>

Total letters: $11$. Counts: M($2$), A($2$), T($2$), H($1$), E($1$), I($1$), C($1$), S($1$).

$$\frac{11!}{2! \cdot 2! \cdot 2!} = \frac{39916800}{8} = 4989600$$

</details>

**Worked Example 11: Couple seating arrangements**

In how many ways can 4 married couples sit in a row of 8 seats if each couple must sit together?

<details>
<summary>Solution</summary>

Treat each couple as a single unit. We have 4 units to arrange: $4! = 24$ ways.

Each couple can swap seats internally: $2^4 = 16$ ways.

$$24 \times 16 = 384$$

</details>

**Worked Example 12: Distributing identical objects (stars and bars)**

In how many ways can 12 identical balls be distributed into 5 distinct boxes (boxes may be empty)?

<details>
<summary>Solution</summary>

This is a stars-and-bars problem: we need the number of non-negative integer solutions to $x_1 + x_2 + x_3 + x_4 + x_5 = 12$.

$$\binom{12 + 5 - 1}{5 - 1} = \binom{16}{4} = \frac{16 \times 15 \times 14 \times 13}{4 \times 3 \times 2 \times 1} = 1820$$

</details>

**Worked Example 13: Password with digit constraint**

A password consists of 4 distinct characters chosen from $\{A, B, C, D, E, 1, 2, 3\}$. How many passwords contain at least one digit?

<details>
<summary>Solution</summary>

Total passwords (no repetition): $P_4^8 = \dfrac{8!}{4!} = 1680$.

Passwords with no digits (all letters from 5 letters): $P_4^5 = \dfrac{5!}{1!} = 120$.

$$1680 - 120 = 1560$$

**Direct counting verification:**

| Digits | Letters | Ways |
|---|---|---|
| 1 | 3 | $\binom{3}{1}\binom{5}{3} \cdot 4! = 3 \times 10 \times 24 = 720$ |
| 2 | 2 | $\binom{3}{2}\binom{5}{2} \cdot 4! = 3 \times 10 \times 24 = 720$ |
| 3 | 1 | $\binom{3}{3}\binom{5}{1} \cdot 4! = 1 \times 5 \times 24 = 120$ |

Total: $720 + 720 + 120 = 1560$. Correct.

</details>

**Worked Example 14: Constant term in a binomial expansion**

Find the constant term in the expansion of $\left(x^2 + \dfrac{2}{x}\right)^6$.

<details>
<summary>Solution</summary>

General term: $\binom{6}{k}(x^2)^{6-k}\!\left(\dfrac{2}{x}\right)^k = \binom{6}{k} \cdot 2^k \cdot x^{12-2k-k} = \binom{6}{k} \cdot 2^k \cdot x^{12-3k}$.

For the constant term: $12 - 3k = 0 \implies k = 4$.

$$\binom{6}{4} \cdot 2^4 = 15 \times 16 = 240$$

</details>

---

## Additional Common Pitfalls

1. **Order matters vs. does not matter.** "Arranging" implies permutations (order matters). "Selecting" or "choosing" implies combinations (order does not matter). When in doubt, ask whether swapping two elements produces a different outcome.

2. **Overcounting in selection problems.** When forming teams from distinct groups, multiply the number of ways from each group. Do not simply use $\binom{n}{r}$ on the combined pool, which ignores group structure.

3. **Circular permutation exceptions.** If a circle has a fixed reference point (e.g., a specific seat for a host), the arrangement count changes. With $n$ people and one fixed seat, the remaining $n-1$ people are arranged linearly in $(n-1)!$ ways.

4. **Stars and bars conditions.** $\binom{n+k-1}{k-1}$ counts non-negative integer solutions. For strictly positive solutions (at least one per box), substitute $y_i = x_i - 1$ to get $\binom{n-1}{k-1}$.

5. **Binomial theorem sign errors.** In $(a - b)^n$, the general term is $(-1)^k \binom{n}{k} a^{n-k} b^k$. The alternating sign $(-1)^k$ is frequently forgotten.

6. **Division into equal indistinguishable groups.** When dividing $2n$ people into two teams of $n$, the answer is $\dfrac{1}{2}\binom{2n}{n}$, not $\binom{2n}{n}$, since the two teams are not labelled.

7. **Double-counting in circular arrangements with identical objects.** In circular permutations with repeated items, apply both the circular correction ($(n-1)!$) and the identical-objects correction (dividing by factorials of counts).

8. **Confusing $P_r^n$ notation with $C_r^n$.** Always verify whether the problem requires ordered or unordered selection before choosing the formula. A safe check: if the problem asks "how many ways to arrange" use $P$; if it asks "how many ways to choose" use $C$.

---

## Exam-Style Problems

**Problem 1.** A debating team of 4 is to be selected from 6 boys and 5 girls. The team must include at least 1 boy and at least 1 girl. In how many ways can this be done?

<details>
<summary>Solution</summary>

Total teams of 4 from 11 people: $\binom{11}{4} = 330$.

All-boy teams: $\binom{6}{4} = 15$. All-girl teams: $\binom{5}{4} = 5$.

$$330 - 15 - 5 = 310$$

</details>

**Problem 2.** How many 5-digit numbers greater than $40000$ can be formed from $\{1, 2, 3, 4, 5, 6, 7\}$ if no digit is repeated?

<details>
<summary>Solution</summary>

The first digit must be $4$, $5$, $6$, or $7$: $4$ choices.

The remaining 4 positions are filled from the remaining $6$ digits without repetition: $P_4^6 = \dfrac{6!}{2!} = 360$.

$$4 \times 360 = 1440$$

</details>

**Problem 3.** Find the coefficient of $x^5$ in the expansion of $(1 - 2x)^8$.

<details>
<summary>Solution</summary>

General term: $\binom{8}{k}(-2x)^k = (-1)^k \cdot 2^k \cdot \binom{8}{k} \cdot x^k$.

For $x^5$: $k = 5$.

$$(-1)^5 \cdot 2^5 \cdot \binom{8}{5} = -32 \times 56 = -1792$$

</details>

**Problem 4.** In how many ways can 3 boys and 3 girls sit around a circular table if no two boys sit next to each other?

<details>
<summary>Solution</summary>

First, seat the 3 girls around the circular table: $(3-1)! = 2! = 2$ ways.

This creates $3$ gaps between the girls. Place the $3$ boys into these $3$ gaps: $3! = 6$ ways.

$$2 \times 6 = 12$$

</details>

**Problem 5.** A shelf holds 6 different maths books and 4 different physics books. In how many ways can the books be arranged if all books of the same subject must stay together?

<details>
<summary>Solution</summary>

Treat each subject group as a block: $2$ blocks, arranged in $2! = 2$ ways.

Within the maths block: $6! = 720$ ways.

Within the physics block: $4! = 24$ ways.

$$2 \times 720 \times 24 = 34560$$

</details>

**Problem 6.** Find the number of ways to place 8 distinguishable balls into 3 distinguishable boxes such that no box is empty.

<details>
<summary>Solution</summary>

Use inclusion-exclusion.

Total placements: $3^8 = 6561$.

Placements with at least one box empty:

- Exactly 1 specific box empty: $2^8 = 256$. For $3$ boxes: $3 \times 256 = 768$.
- Exactly 2 specific boxes empty: $1^8 = 1$. For $\binom{3}{2} = 3$ pairs: $3 \times 1 = 3$.

$$6561 - 768 + 3 = 5796$$

</details>

**Problem 7.** How many ways can 6 people be divided into 3 groups of 2?

<details>
<summary>Solution</summary>

Choose 2 from 6: $\binom{6}{2} = 15$. Choose 2 from remaining 4: $\binom{4}{2} = 6$. The last 2 are fixed: $\binom{2}{2} = 1$.

Since the 3 groups are indistinguishable (no labelling), divide by $3!$:

$$\frac{15 \times 6 \times 1}{6} = 15$$

Alternatively: $\dfrac{6!}{2^3 \cdot 3!} = \dfrac{720}{48} = 15$. Correct.

</details>

**Problem 8.** How many distinct arrangements of the letters in "SUCCESS" have the two C's separated?

<details>
<summary>Solution</summary>

Total arrangements of "SUCCESS": $\dfrac{7!}{3! \cdot 2!} = \dfrac{5040}{12} = 420$.

Arrangements with the two C's adjacent: treat "CC" as one unit. We have 6 units: S($3$), "CC"($1$), U($1$), E($1$).

$$\frac{6!}{3!} = \frac{720}{6} = 120$$

$$420 - 120 = 300$$

</details>

---

## Cross-References

- **Probability:** Counting techniques form the foundation of probability calculations. See the probability notes.
- **Binomial Theorem:** The connection between Pascal's triangle and binomial coefficients extends to the binomial expansion and the binomial distribution.
- **Quadratics:** Factorials and combinatorial expressions sometimes simplify to quadratic forms. See [quadratics.md](quadratics)).

