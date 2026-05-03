---
title: Combinatorics — Diagnostic Tests
description: "Diagnostic tests for DSE Combinatorics: permutations, combinations, binomial theorem, restrictions, and common order-versus-selection errors."
slug: diag-combinatorics
hide_table_of_contents: true
---

# Combinatorics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for combinatorics.

### UT-1: Permutations vs Combinations (Order Matters)

**Question:**

A committee of 4 is to be selected from 10 people. In how many ways can this be done if:

(a) There are no restrictions.
(b) Two specific people must both be on the committee.
(c) Two specific people refuse to serve together.

**Solution:**

(a) $\dbinom{10}{4} = \dfrac{10!}{4! \times 6!} = \dfrac{10 \times 9 \times 8 \times 7}{4 \times 3 \times 2 \times 1} = 210$.

(b) If both specific people are included, choose 2 more from the remaining 8:

$\dbinom{8}{2} = 28$.

(c) Total ways minus ways where both are together:

$210 - \dbinom{8}{2} = 210 - 28 = 182$.

---

### UT-2: People Sitting Together Restriction

**Question:**

In how many ways can 5 boys and 3 girls be arranged in a row if:

(a) All 3 girls must sit together.
(b) No two girls sit together.

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

Here, $a = 2x$, $b = -3$, $n = 8$:

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

A common mistake is using $6! = 720$, which counts the same arrangement multiple times (one for each rotation).

---

### UT-5: Binomial Theorem with Rational Exponent

**Question:**

Find the first three terms in the expansion of $(1 + 2x)^{-3}$ in ascending powers of $x$, up to and including the term in $x^2$.

**Solution:**

Using the generalised binomial theorem:

$$(1 + 2x)^{-3} = 1 + (-3)(2x) + \frac{(-3)(-4)}{2!}(2x)^2 + \cdots$$

$$= 1 - 6x + \frac{12}{2} \times 4x^2 + \cdots$$

$$= 1 - 6x + 24x^2 + \cdots$$

---

## Integration Tests

> Tests synthesis of combinatorics with other topics.

### IT-1: Combinatorics and Probability (with Probability)

**Question:**

A bag contains 4 red and 6 blue balls. Three balls are drawn without replacement. Find the probability that exactly 2 are red.

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

This is complex. Instead, for ALL coefficients to be in AP (not just three consecutive):

$n = 2$: coefficients $1, 2, 1$ -- not AP ($2 \neq 1 + 1$ would need $2 = 2$, check: $1, 2, 1$: $2 - 1 = 1$, $1 - 2 = -1$. Not AP).

$n = 7$: $1, 7, 21, 35, 35, 21, 7, 1$ -- symmetric, not AP.

Actually, the only $n$ where consecutive coefficients form AP for ALL triples: there is no such $n > 2$.

The question likely means: find $n$ such that three specific consecutive coefficients form an AP. For $C_1, C_2, C_3$:

$2\dbinom{n}{2} = \dbinom{n}{1} + \dbinom{n}{3}$

$n(n-1) = n + \dfrac{n(n-1)(n-2)}{6}$

If $n \neq 0$: $n - 1 = 1 + \dfrac{(n-1)(n-2)}{6}$

$6(n - 2) = (n-1)(n-2)$

If $n \neq 2$: $6 = n - 1 \implies n = 7$.

Check $n = 7$: $\dbinom{7}{1} = 7$, $\dbinom{7}{2} = 21$, $\dbinom{7}{3} = 35$.

$2(21) = 42 = 7 + 35 = 42$. Yes.

Therefore $n = 7$.

---

### IT-3: Combinatorics and Algebra (with Polynomials)

**Question:**

If $\dbinom{n}{2} = 55$, find $n$ and evaluate $\dbinom{n}{4}$.

**Solution:**

$$\dbinom{n}{2} = \frac{n(n-1)}{2} = 55$$

$$n(n-1) = 110$$

$$n^2 - n - 110 = 0$$

$$(n - 11)(n + 10) = 0$$

$n = 11$ (since $n \geq 0$).

$$\dbinom{11}{4} = \frac{11 \times 10 \times 9 \times 8}{4 \times 3 \times 2 \times 1} = 330$$
