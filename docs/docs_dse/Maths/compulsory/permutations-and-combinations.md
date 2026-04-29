---
title: Permutations and Combinations
date: 2026-04-18T00:00:00.000Z
tags:
  - DSE
  - Maths
categories:
  - DSE
  - Maths
slug: dse-maths-compulsory-permutations-combinations
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
\begin&lbrace;array&rbrace;&lbrace;cccccccc&rbrace;
& & & 1 & & & \\
& & 1 & & 1 & & \\
& 1 & & 2 & & 1 & \\
1 & & 3 & & 3 & & 1 \\
& 1 & & 4 & & 6 & & 4 & & 1
\end&lbrace;array&rbrace;
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
