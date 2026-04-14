---
title: Number Sets and Sequences
date: 2026-04-14
tags:
  - Mathematics
  - ILC
categories:
  - Mathematics
slug: number-sets-and-sequences
---

# Number Sets and Sequences

This topic covers number systems, set theory, sequences, series, and financial mathematics. These
concepts underpin much of the algebra and calculus in the Leaving Certificate course.

## Number Systems

### Classification (OL/HL)

| Symbol       | Name             | Description                                                                  |
| ------------ | ---------------- | ---------------------------------------------------------------------------- |
| $\mathbb{N}$ | Natural numbers  | $\{1, 2, 3, \ldots\}$ (some definitions include 0)                           |
| $\mathbb{Z}$ | Integers         | $\{\ldots, -2, -1, 0, 1, 2, \ldots\}$                                        |
| $\mathbb{Q}$ | Rational numbers | Numbers expressible as $\frac{p}{q}$ where $p, q \in \mathbb{Z}$, $q \neq 0$ |
| $\mathbb{R}$ | Real numbers     | All rational and irrational numbers                                          |
| $\mathbb{C}$ | Complex numbers  | Numbers of the form $a + bi$ where $a, b \in \mathbb{R}$                     |

The inclusions are:
$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R} \subset \mathbb{C}$.

### Properties of Real Numbers (OL/HL)

The real numbers satisfy the following axioms:

**Closure:** If $a, b \in \mathbb{R}$, then $a + b \in \mathbb{R}$ and $a \cdot b \in \mathbb{R}$.

**Commutativity:** $a + b = b + a$ and $a \cdot b = b \cdot a$.

**Associativity:** $(a + b) + c = a + (b + c)$ and $(a \cdot b) \cdot c = a \cdot (b \cdot c)$.

**Distributivity:** $a(b + c) = ab + ac$.

**Identity elements:** $a + 0 = a$ and $a \cdot 1 = a$.

**Inverse elements:** For every $a$, there exists $-a$ such that $a + (-a) = 0$. For every
$a \neq 0$, there exists $a^{-1}$ such that $a \cdot a^{-1} = 1$.

### Irrational Numbers (HL)

A number is irrational if it cannot be expressed as a ratio of integers.

**Proof that $\sqrt{2}$ is irrational:**

Assume $\sqrt{2} = \frac{p}{q}$ where $p, q \in \mathbb{Z}$, $q \neq 0$, and the fraction is in
lowest terms ($\gcd(p, q) = 1$).

Then $p^2 = 2q^2$, so $p^2$ is even, which means $p$ is even. Let $p = 2k$. Then $4k^2 = 2q^2$,
giving $q^2 = 2k^2$, so $q$ is also even. But this contradicts $\gcd(p, q) = 1$. Therefore
$\sqrt{2}$ is irrational.

### Proofs Involving Irrationals (HL)

**Example:** Prove that $\sqrt{2} + \sqrt{3}$ is irrational.

Assume $\sqrt{2} + \sqrt{3} = r$ where $r \in \mathbb{Q}$. Then $\sqrt{3} = r - \sqrt{2}$, so
$3 = r^2 - 2r\sqrt{2} + 2$, giving:

$$
2r\sqrt{2} = r^2 - 1 \implies \sqrt{2} = \frac{r^2 - 1}{2r}
$$

Since $r \in \mathbb{Q}$, $\frac{r^2 - 1}{2r} \in \mathbb{Q}$, contradicting the irrationality of
$\sqrt{2}$.

## Set Theory

### Notation (OL/HL)

| Symbol            | Meaning                                        |
| ----------------- | ---------------------------------------------- | --- | ------------------ |
| $\in$             | Is an element of                               |
| $\subset$         | Is a subset of                                 |
| $\cup$            | Union                                          |
| $\cap$            | Intersection                                   |
| $A'$ or $\bar{A}$ | Complement of $A$                              |
| $\emptyset$       | Empty set                                      |
| $                 | A                                              | $   | Cardinality of $A$ |
| $A \setminus B$   | $A$ minus $B$ (elements in $A$ but not in $B$) |

### Venn Diagrams (OL)

Venn diagrams provide visual representations of set operations.

**Example (OL):** In a class of 30 students, 18 play football, 15 play hurling, and 8 play both. How
many play neither?

$$
|F \cup H| = |F| + |H| - |F \cap H| = 18 + 15 - 8 = 25
$$

Neither: $30 - 25 = 5$.

### De Morgan's Laws (HL)

$$
(A \cup B)' = A' \cap B'
$$

$$
(A \cap B)' = A' \cup B'
$$

**Proof of the first law:**

$x \in (A \cup B)' \iff x \notin A \cup B \iff x \notin A \text{ and } x \notin B \iff x \in A' \text{ and } x \in B' \iff x \in A' \cap B'$.

## Sequences

### Arithmetic Sequences (OL/HL)

An arithmetic sequence has a common difference $d$.

**General term:**

$$
T_n = a + (n - 1)d
$$

**Sum of first $n$ terms:**

$$
S_n = \frac{n}{2}[2a + (n-1)d] = \frac{n}{2}(a + l)
$$

where $l = T_n$ is the last term.

**Example (OL):** Find the sum of the first 20 terms of 3, 7, 11, 15, ...

Here $a = 3$, $d = 4$, $n = 20$.

$$
S_{20} = \frac{20}{2}[2(3) + 19(4)] = 10(6 + 76) = 820
$$

### Geometric Sequences (OL/HL)

A geometric sequence has a common ratio $r$.

**General term:**

$$
T_n = ar^{n-1}
$$

**Sum of first $n$ terms:**

$$
S_n = \frac{a(r^n - 1)}{r - 1}, \quad r \neq 1
$$

**Example (OL):** Find the sum of the first 8 terms of 2, 6, 18, 54, ...

Here $a = 2$, $r = 3$, $n = 8$.

$$
S_8 = \frac{2(3^8 - 1)}{3 - 1} = \frac{2(6561 - 1)}{2} = 6560
$$

### Sum to Infinity (HL)

If $|r| < 1$:

$$
S_\infty = \frac{a}{1 - r}
$$

**Example (HL):** Find the sum to infinity of $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$

$$
S_\infty = \frac{1}{1 - \frac{1}{2}} = 2
$$

### Convergence of Sequences (HL)

A sequence $(a_n)$ converges to $L$ if:

$$
\lim_{n \to \infty} a_n = L
$$

An arithmetic sequence diverges unless $d = 0$.

A geometric sequence $ar^{n-1}$ converges to $0$ if $|r| < 1$ and diverges if $|r| > 1$.

### Limits (HL)

$$
\lim_{n \to \infty} \frac{1}{n} = 0
$$

$$
\lim_{n \to \infty} \frac{a_n}{n^k} = 0 \text{ if } \deg(a_n) < k
$$

**Example (HL):** Evaluate $\lim_{n \to \infty} \frac{3n^2 + 2n}{5n^2 - n}$.

Divide numerator and denominator by $n^2$:

$$
\lim_{n \to \infty} \frac{3 + \frac{2}{n}}{5 - \frac{1}{n}} = \frac{3}{5}
$$

## Sigma Notation (HL)

$$
\sum_{r=1}^{n} r = \frac{n(n+1)}{2}
$$

$$
\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}
$$

$$
\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}
$$

**Example (HL):** Evaluate $\sum_{r=1}^{50} (3r - 1)$.

$$
\sum_{r=1}^{50} (3r - 1) = 3\sum_{r=1}^{50} r - \sum_{r=1}^{50} 1 = 3 \cdot \frac{50 \times 51}{2} - 50 = 3825 - 50 = 3775
$$

## Financial Mathematics (HL)

### Compound Interest

The amount $A$ after $n$ periods at rate $r$ per period:

$$
A = P(1 + r)^n
$$

where $P$ is the principal.

**Example (HL):** EUR 5000 is invested at 4% per annum, compounded annually. Find the amount after 6
years.

$$
A = 5000(1.04)^6 \approx 5000 \times 1.2653 \approx \text{EUR } 6326.60
$$

### Present Value

The present value $PV$ of a future amount $A$:

$$
PV = \frac{A}{(1 + r)^n}
$$

### Amortisation (HL)

For a loan of $P$ repaid in $n$ equal instalments of $M$ at periodic rate $r$:

$$
M = \frac{Pr}{1 - (1 + r)^{-n}}
$$

**Example (HL):** A mortgage of EUR 300,000 is repaid over 25 years at a monthly rate of 0.35%. Find
the monthly repayment.

$$
M = \frac{300000 \times 0.0035}{1 - (1.0035)^{-300}} \approx \frac{1050}{1 - 0.3484} \approx \frac{1050}{0.6516} \approx \text{EUR } 1611.36
$$

## Recurrence Relations (HL)

A recurrence relation defines each term of a sequence in terms of previous terms.

**Example:** $T_1 = 2$, $T_{n+1} = 3T_n - 1$.

$$
T_1 = 2, \quad T_2 = 5, \quad T_3 = 14, \quad T_4 = 41
$$

### Solving Linear Recurrence Relations (HL)

For a first-order recurrence $T_{n+1} = aT_n + b$ with $a \neq 1$:

The fixed point is $L = \frac{b}{1 - a}$.

The general solution is $T_n = L + (T_1 - L)a^{n-1}$.

**Example:** Solve $T_1 = 3$, $T_{n+1} = 2T_n + 5$.

Fixed point: $L = \frac{5}{1 - 2} = -5$.

$$
T_n = -5 + (3 - (-5)) \cdot 2^{n-1} = -5 + 8 \cdot 2^{n-1} = -5 + 2^{n+2}
$$

## Common Pitfalls

1. **Mixing up arithmetic and geometric** formulas -- arithmetic has $d$, geometric has $r$.
2. **Sum to infinity** only converges when $|r| < 1$.
3. **Financial mathematics** -- ensure the rate and time period match (e.g., annual rate with annual
   compounding).
4. **Limits** -- always divide by the highest power of $n$.
5. **Sigma notation** -- be careful with the lower and upper limits.

## Practice Questions

### Ordinary Level

1. Find the 15th term of the arithmetic sequence 5, 9, 13, 17, ...
2. Find the sum of the first 25 terms of 2, 6, 18, 54, ...
3. A set $A = \{1, 2, 3, 4, 5, 6, 7, 8\}$ and $B = \{2, 4, 6, 8, 10\}$. Find $A \cup B$ and
   $A \cap B$.
4. Show that $\frac{22}{7}$ is rational.
5. The 5th term of an arithmetic sequence is 17 and the 12th term is 38. Find $a$ and $d$.

### Higher Level

1. Prove that $\sqrt{3}$ is irrational.
2. Find the sum to infinity of $\frac{1}{2} + \frac{1}{6} + \frac{1}{18} + \cdots$
3. Evaluate $\sum_{r=1}^{100} (2r^2 - r)$.
4. Solve the recurrence relation $T_1 = 1$, $T_{n+1} = 4T_n - 3$. Find a closed form for $T_n$.
5. EUR 2000 is invested at 3.5% per annum compounded monthly. Find the amount after 5 years.
6. Prove De Morgan's second law: $(A \cap B)' = A' \cup B'$.
7. Evaluate $\lim_{n \to \infty} \frac{n^3 + 2n}{4n^3 - n + 1}$.
