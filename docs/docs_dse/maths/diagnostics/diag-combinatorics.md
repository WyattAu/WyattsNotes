---
title: 'Combinatorics -- Diagnostic Tests'
description: 'DSE Maths Combinatorics -- Diagnostic Tests notes covering key definitions, core concepts, worked examples, and practice questions for detailed preparation.'
slug: diag-../compulsory/13_permutations-and-combinations
hide_table_of_contents: true
---

# Combinatorics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for
> ../compulsory/13_permutations-and-combinations.

### UT-1: Permutations vs Combinations (Order Matters)

**Question:**

A committee of 4 is to be selected from 10 people. In how many ways can this be done if:

(a) There are no restrictions. (b) Two specific people must both be on the committee. (c) Two
specific people refuse to serve together.

**Solution:**

(a)
$\dbinom{10}{4} = \dfrac{10!}{4! \times 6!} = \dfrac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$.

(b) If both specific people are included, choose 2 more from the remaining 8:

$\dbinom{8}{2} = 28$.

(c) Total ways minus ways where both are together:

$210 - \dbinom{8}{2} = 210 - 28 = 182$.

---

### UT-2: People Sitting Together Restriction

**Question:**

In how many ways can 5 boys and 3 girls be arranged in a row if:

(a) All 3 girls must sit together. (b) No two girls sit together.

**Solution:**

(a) Treat the 3 girls as a single block. Then we have 5 boys + 1 block = 6 entities.

$6! \times 3! = 720 \times 6 = 4320$.

(b) First arrange the 5 boys: $5! = 120$ ways.

This creates 6 gaps (including ends): $\_B\_B\_B\_B\_B\_$

Choose 3 of the 6 gaps for the girls: $\dbinom{6}{3} = 20$.

Arrange the 3 girls in those gaps: $3! = 6$.

Total: $120 \times 20 \times 6 = 14400$.

---

### UT-3: Binomial Theorem Coefficient Extraction

**Question:**

Find the coefficient of $x^5$ in the expansion of $(2x - 3)^8$.

**Solution:**

The general term in $(a + b)^n$ is $\dbinom{n}{r} a^{n-r} b^r$.

Here, $a = 2x$$b = -3$$n = 8$:

$$T_{r+1} = \dbinom{8}{r}(2x)^{8-r}(-3)^r$$

For the $x^5$ term: $8 - r = 5 \implies r = 3$.

$$T_4 = \dbinom{8}{3}(2x)^5(-3)^3 = 56 \times 32x^5 \times (-27) = 56 \times 32 \times (-27) \times x^5$$

$$= -48384x^5$$

Coefficient: $-48384$.

---

### UT-4: Circular Permutations

**Question:**

In how many ways can 6 people sit around a circular table?

**Solution:**

For circular arrangements, we fix one person to eliminate rotational symmetry.

Number of arrangements $= (6 - 1)! = 5! = 120$.

A common mistake is using $6! = 720$Which counts the same arrangement multiple times (one for each
rotation).

---

### UT-5: Binomial Theorem with Rational Exponent

**Question:**

Find the first three terms in the expansion of $(1 + 2x)^{-3}$ in ascending powers of $x$Up to and
including the term in $x^2$.

**Solution:**

Using the generalised binomial theorem:

$$(1 + 2x)^{-3} = 1 + (-3)(2x) + \frac{(-3)(-4)}{2!}(2x)^2 + \cdots$$

$$= 1 - 6x + \frac{12}{2} \times 4x^2 + \cdots$$

$$= 1 - 6x + 24x^2 + \cdots$$

---

## Integration Tests

> Tests synthesis of ../compulsory/13_permutations-and-combinations with other topics.

### IT-1: Combinatorics and Probability (with Probability)

**Question:**

A bag contains 4 red and 6 blue balls. Three balls are drawn without replacement. Find the
probability that exactly 2 are red.

**Solution:**

Total ways: $\dbinom{10}{3} = 120$.

Ways with exactly 2 red: $\dbinom{4}{2} \times \dbinom{6}{1} = 6 \times 6 = 36$.

$$P = \frac{36}{120} = \frac{3}{10}$$

---

### IT-2: Combinatorics and Sequences (with Sequences and Series)

**Question:**

The binomial expansion of $(1 + x)^n$ has its coefficients in arithmetic progression. Find $n$.

**Solution:**

The coefficients are $C_0, C_1, C_2, \ldots, C_n$ where $C_r = \dbinom{n}{r}$.

If three consecutive coefficients are in AP: $2C_r = C_{r-1} + C_{r+1}$.

$$2\dbinom{n}{r} = \dbinom{n}{r-1} + \dbinom{n}{r+1}$$

Using $\dbinom{n}{r} = \dfrac{n!}{r!(n-r)!}$:

$$\frac{2}{r!(n-r)!} = \frac{1}{(r-1)!(n-r+1)!} + \frac{1}{(r+1)!(n-r-1)!}$$

Multiply through by $(r+1)!(n-r+1)!$:

$$2(r+1)(n-r+1) = (r+1)r + (n-r)(n-r+1)$$

This is complex. For ALL coefficients to be in AP (not just three consecutive), there is no such
$n > 2$. The question likely means: find $n$ such that three specific consecutive coefficients form
An AP. For $C_1, C_2, C_3$:

$2\dbinom{n}{2} = \dbinom{n}{1} + \dbinom{n}{3}$

$n(n-1) = n + \dfrac{n(n-1)(n-2)}{6}$

If $n \neq 0$: $n - 1 = 1 + \dfrac{(n-1)(n-2)}{6}$

$6(n - 2) = (n-1)(n-2)$

If $n \neq 2$: $6 = n - 1 \implies n = 7$.

Check $n = 7$: $\dbinom{7}{1} = 7$$\dbinom{7}{2} = 21$$\dbinom{7}{3} = 35$.

$2(21) = 42 = 7 + 35 = 42$. Yes.

Therefore $n = 7$.

---

### IT-3: Combinatorics and Algebra (with Polynomials)

**Question:**

If $\dbinom{n}{2} = 55$Find $n$ and evaluate $\dbinom{n}{4}$.

**Solution:**

$$\dbinom{n}{2} = \frac{n(n-1)}{2} = 55$$

$$n(n-1) = 110$$

$$n^2 - n - 110 = 0$$

$$(n - 11)(n + 10) = 0$$

$n = 11$ (since $n \geq 0$).

$$\dbinom{11}{4} = \frac{11 \times 10 \times 9 \times 8}{4 \times 3 \times 2 \times 1} = 330$$

---

## Worked Examples

### WE-1: Arrangement with Restrictions

**Question:**

In how many ways can the letters of the word "ARRANGE" be arranged such that the two R's are not
adjacent?

**Solution:**

Total letters: A, R, R, A, N, G, E (7 letters, with two A's and two R's identical).

Total arrangements: $\dfrac{7!}{2! \times 2!} = \dfrac{5040}{4} = 1260$.

Treat the two R's as one block: 6 entities with two A's identical.

Arrangements with R's together: $\dfrac{6!}{2!} = 360$.

Arrangements with R's not adjacent: $1260 - 360 = 900$.

---

### WE-2: Selecting with Conditions

**Question:**

From 6 men and 4 women, a committee of 5 is to be formed with at least 2 women. In how many ways can
this be done?

**Solution:**

Total ways without restriction: $\dbinom{10}{5} = 252$.

Ways with fewer than 2 women (0 or 1 woman):

- 0 women, 5 men: $\dbinom{4}{0}\dbinom{6}{5} = 6$.
- 1 woman, 4 men: $\dbinom{4}{1}\dbinom{6}{4} = 4 \times 15 = 60$.

Ways with at least 2 women: $252 - 6 - 60 = 186$.

Alternatively, direct counting:

- 2 women, 3 men: $\dbinom{4}{2}\dbinom{6}{3} = 6 \times 20 = 120$.
- 3 women, 2 men: $\dbinom{4}{3}\dbinom{6}{2} = 4 \times 15 = 60$.
- 4 women, 1 man: $\dbinom{4}{4}\dbinom{6}{1} = 6$.

Total: $120 + 60 + 6 = 186$.

---

### WE-3: Binomial Expansion Finding Constant Term

**Question:**

Find the constant term in the expansion of $\left(x^2 + \dfrac{2}{x}\right)^6$.

**Solution:**

General term:
$T_{r+1} = \dbinom{6}{r}(x^2)^{6-r}\left(\dfrac{2}{x}\right)^r = \dbinom{6}{r} \cdot 2^r \cdot x^{12-2r} \cdot x^{-r} = \dbinom{6}{r} \cdot 2^r \cdot x^{12-3r}$.

For the constant term: $12 - 3r = 0 \implies r = 4$.

$$T_5 = \dbinom{6}{4} \cdot 2^4 \cdot x^0 = 15 \times 16 = 240$$

---

### WE-4: Permutation with Identical Objects

**Question:**

How many distinct arrangements can be made from the letters of "MISSISSIPPI"?

**Solution:**

Total letters: 11 (M:1, I:4, S:4, P:2).

$$\frac{11!}{4! \times 4! \times 2!} = \frac{39916800}{24 \times 24 \times 2} = \frac{39916800}{1152} = 34650$$

---

### WE-5: Binomial Theorem Middle Term

**Question:**

Find the middle term in the expansion of $\left(2x - \dfrac{1}{x}\right)^{10}$.

**Solution:**

$n = 10$So there are 11 terms. The middle term is the 6th term ($r = 5$).

$$T_6 = \dbinom{10}{5}(2x)^5\left(-\frac{1}{x}\right)^5 = 252 \times 32x^5 \times \left(-\frac{1}{x^5}\right) = 252 \times 32 \times (-1) = -8064$$

---

### WE-6: Number of Ways to Distribute Objects

**Question:**

In how many ways can 8 different books be distributed among 3 students such that each student gets
at least one book?

**Solution:**

This is equivalent to counting surjective (onto) functions from an 8-element set to a 3-element set.

By the inclusion-exclusion principle:

$$3^8 - \dbinom{3}{1} \cdot 2^8 + \dbinom{3}{2} \cdot 1^8 = 6561 - 3 \times 256 + 3 = 6561 - 768 + 3 = 5796$$

---

### WE-7: Seating Arrangement with Gender Alternation

**Question:**

In how many ways can 4 men and 4 women be seated in a row if men and women must alternate?

**Solution:**

Two possible patterns: MWMWMWMW or WMWMWMWM.

For each pattern: $4! \times 4! = 24 \times 24 = 576$ ways.

Total: $2 \times 576 = 1152$ ways.

---

### WE-8: Paths on a Grid

**Question:**

How many shortest paths are there from point $A(0, 0)$ to point $B(5, 3)$ on a grid, moving only
right or up?

**Solution:**

Each shortest path consists of 5 right moves (R) and 3 up moves (U), for a total of 8 moves.

The number of distinct arrangements of 5 R's and 3 U's:

$$\dbinom{8}{5} = \dbinom{8}{3} = \frac{8 \times 7 \times 6}{3 \times 2 \times 1} = 56$$

---

## Common Pitfalls

1. **Confusing permutations with combinations.** Use permutations ($_nP_r$) when order matters (e.g.
   Arranging people in a line) and combinations ($\dbinom{n}{r}$) when order does not matter (e.g.
   Selecting a committee). Ask yourself: does swapping two selected items create a new outcome?

2. **Double counting in "at least" problems.** When counting arrangements with conditions like "at
   least 2 women," either count each case separately (2 women, 3 women, 4 women) or use the
   complement method (total minus cases with 0 or 1 woman). Mixing these approaches leads to double
   counting.

3. **Forgetting to divide by factorials for identical objects.** When arranging letters or objects
   with identical elements, always divide by the factorial of the count of each set of identical
   objects. Failing to do so inflates the count.

4. **Incorrect binomial coefficient in expansion.** In $(a + b)^n$The general term is
   $\dbinom{n}{r} a^{n-r} b^r$. A common error is swapping the exponents: writing $a^r b^{n-r}$.
   Always identify which term is "$a$" and which is "$b$" at the start.

5. **Not considering all valid patterns in arrangement problems.** For gender alternation problems,
   remember that both M-W-M-W and W-M-W-M patterns are valid. Missing one pattern halves the answer.

---

## DSE Exam-Style Questions

### DSE-1

(a) Find the coefficient of $x^3$ in the expansion of $(1 + 2x)^7$. (3 marks) (b) Find the
coefficient of $x^3$ in the expansion of $(1 - x)(1 + 2x)^7$. (3 marks) (c) Using your answers, find
the coefficient of $x^3$ in $(1 + x)(1 + 2x)^7$. (1 mark)

**Solution:**

(a) $T_{r+1} = \dbinom{7}{r}(2x)^r$. For $x^3$: $r = 3$.

Coefficient $= \dbinom{7}{3} \cdot 2^3 = 35 \times 8 = 280$.

(b) $(1 - x)(1 + 2x)^7 = (1 + 2x)^7 - x(1 + 2x)^7$.

Coefficient of $x^3$: coefficient from $(1+2x)^7$ minus coefficient of $x^2$ from $(1+2x)^7$.

Coefficient of $x^2$: $\dbinom{7}{2} \cdot 2^2 = 21 \times 4 = 84$.

Coefficient of $x^3$: $280 - 84 = 196$.

(c) $(1 + x)(1 + 2x)^7 = (1 + 2x)^7 + x(1 + 2x)^7$.

Coefficient of $x^3$: $280 + 84 = 364$.

---

### DSE-2

A debating team of 4 is to be selected from 7 boys and 5 girls.

(a) In how many ways can the team be selected if there are no restrictions? (1 mark) (b) In how many
ways can the team be selected if it must include at least 1 girl? (3 marks) (c) In how many ways can
the team be selected if two particular boys refuse to be on the same team? (3 marks)

**Solution:**

(a) $\dbinom{12}{4} = 495$.

(b) Complement: total minus all boys.

$495 - \dbinom{7}{4} = 495 - 35 = 460$.

(c) Total minus ways where both particular boys are together.

Ways with both: choose 2 more from remaining 10: $\dbinom{10}{2} = 45$.

$495 - 45 = 450$.

---

### DSE-3

Find the first four terms in the expansion of $(1 - 3x)^{1/2}$ in ascending powers of $x$. State the
range of values of $x$ for which the expansion is valid. (5 marks)

**Solution:**

Using the generalised binomial theorem with $n = \dfrac{1}{2}$, $a = 1$, $b = -3x$:

$$(1 - 3x)^{1/2} = 1 + \frac{1}{2}(-3x) + \frac{\frac{1}{2} \times \left(-\frac{1}{2}\right)}{2!}(-3x)^2 + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{3!}(-3x)^3 + \cdots$$

$$= 1 - \frac{3x}{2} + \frac{-\frac{1}{4}}{2} \cdot 9x^2 + \frac{\frac{3}{8}}{6} \cdot (-27x^3) + \cdots$$

$$= 1 - \frac{3x}{2} - \frac{9x^2}{8} - \frac{27x^3}{16} + \cdots$$

The expansion is valid when $|-3x| < 1$I.e. $|x| < \dfrac{1}{3}$.

---

### DSE-4

5 couples (10 people) are to be seated around a circular table.

(a) In how many ways can they be seated if there are no restrictions? (2 marks) (b) In how many ways
can they be seated if each couple must sit together? (3 marks) (c) In how many ways can they be
seated if no couple sits together? (3 marks)

**Solution:**

(a) Circular arrangement: $(10 - 1)! = 9! = 362880$.

(b) Treat each couple as a block: 5 blocks.

$(5 - 1)! = 4! = 24$ arrangements of blocks.

Each block has $2! = 2$ internal arrangements.

Total: $24 \times 2^5 = 24 \times 32 = 768$.

(c) Total minus couples together: $9! - 768 = 362880 - 768 = 362112$.

---

### DSE-5

The expansion of $(1 + ax)^n$ has coefficients of $x^2$ and $x^3$ in the ratio $1 : 2$. Find $a$ and
$n$. (4 marks)

**Solution:**

Coefficient of $x^2$: $\dbinom{n}{2}a^2 = \dfrac{n(n-1)}{2}a^2$.

Coefficient of $x^3$: $\dbinom{n}{3}a^3 = \dfrac{n(n-1)(n-2)}{6}a^3$.

Ratio:

$$\frac{\frac{n(n-1)}{2}a^2}{\frac{n(n-1)(n-2)}{6}a^3} = \frac{1}{2}$$

$$\frac{3}{(n-2)a} = \frac{1}{2}$$

$$(n-2)a = 6$$

Since $a$ and $n$ are positive integers: possible pairs $(a, n)$ are
$(1, 8), (2, 5), (3, 4), (6, 3)$.

All satisfy $(n-2)a = 6$. The problem has multiple solutions unless additional constraints are
given. If we assume $n \geq 3$ (needed for $x^3$ term to exist), all four are valid.
