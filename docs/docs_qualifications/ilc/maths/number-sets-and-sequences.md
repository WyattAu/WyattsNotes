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

**Ordered field properties:** For any $a, b \in \mathbb{R}$, exactly one of $a \lt b$, $a = b$,
$a \gt b$ holds. The order is compatible with addition and multiplication by positive numbers.

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

**Example:** Prove that $\sqrt{2} \cdot \sqrt{3} = \sqrt{6}$ is irrational.

Assume $\sqrt{6} = \frac{p}{q}$ in lowest terms. Then $p^2 = 6q^2$, so $p$ is even. Let $p = 2k$.
Then $4k^2 = 6q^2$, giving $2k^2 = 3q^2$, so $q$ is even. Contradiction.

**Example (HL):** Prove that $\sqrt{2} + \sqrt{5}$ is irrational.

Assume $\sqrt{2} + \sqrt{5} = r \in \mathbb{Q}$. Then $\sqrt{5} = r - \sqrt{2}$, so
$5 = r^2 - 2r\sqrt{2} + 2$, giving:

$$
2r\sqrt{2} = r^2 - 3 \implies \sqrt{2} = \frac{r^2 - 3}{2r} \in \mathbb{Q}
$$

This contradicts the irrationality of $\sqrt{2}$.

**Example (HL):** Prove that $\log_2 3$ is irrational.

Assume $\log_2 3 = \frac{p}{q}$ where $p, q \in \mathbb{Z}$, $q \neq 0$, in lowest terms. Then
$2^{p/q} = 3$, so $2^p = 3^q$.

The left side is even (since $p \ge 1$) but the right side is odd. Contradiction.

### Proof that $\pi$ is Irrational (HL - awareness)

The proof that $\pi$ is irrational (due to Lambert, 1761) is beyond the scope of the Leaving
Certificate, but the technique uses proof by contradiction with integration by parts applied to
$\sin x$ and the assumption that $\pi = a/b$ is rational.

### Density of $\mathbb{Q}$ in $\mathbb{R}$ (HL - awareness)

Between any two real numbers $a \lt b$, there exists a rational number. This is a consequence of the
Archimedean property: since $b - a > 0$, there exists a positive integer $n$ such that $n(b-a) > 1$,
i.e., $nb - na > 1$. Then there exists an integer $m$ with $na \lt m \lt nb$, giving
$a \lt m/n \lt b$.

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

**Subset vs. proper subset.** $A \subset B$ allows $A = B$. $A \subsetneq B$ requires $A \neq B$.

### Venn Diagrams (OL)

Venn diagrams provide visual representations of set operations.

**Example (OL):** In a class of 30 students, 18 play football, 15 play hurling, and 8 play both. How
many play neither?

$$
|F \cup H| = |F| + |H| - |F \cap H| = 18 + 15 - 8 = 25
$$

Neither: $30 - 25 = 5$.

### Three-Set Problems (HL)

**Example (HL):** In a survey of 100 people, 60 like tea, 45 like coffee, 35 like juice, 20 like
both tea and coffee, 15 like both tea and juice, 10 like both coffee and juice, and 5 like all
three. How many like none of the three?

By inclusion-exclusion for three sets:

$$
|T \cup C \cup J| = |T| + |C| + |J| - |T \cap C| - |T \cap J| - |C \cap J| + |T \cap C \cap J|
$$

$$
= 60 + 45 + 35 - 20 - 15 - 10 + 5 = 100
$$

So nobody likes none of the three: $100 - 100 = 0$.

### De Morgan's Laws (HL)

$$
(A \cup B)' = A' \cap B'
$$

$$
(A \cap B)' = A' \cup B'
$$

**Proof of the first law:**

$x \in (A \cup B)' \iff x \notin A \cup B \iff x \notin A \text{ and } x \notin B \iff x \in A' \text{ and } x \in B' \iff x \in A' \cap B'$.

**Proof of the second law:**

$x \in (A \cap B)' \iff x \notin A \cap B \iff x \notin A \text{ or } x \notin B \iff x \in A' \text{ or } x \in B' \iff x \in A' \cup B'$.

### Set Identities (HL)

- $A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$ (distributive law)
- $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$ (distributive law)
- $|A \cup B| = |A| + |B| - |A \cap B|$ (inclusion-exclusion)

**Proof of the inclusion-exclusion principle for two sets.** Every element of $A \cup B$ is in $A$
or in $B$ or in both. Counting elements of $A$ and $B$ separately double-counts those in $A \cap B$,
so we subtract $|A \cap B|$ to correct:

$$
|A \cup B| = |A| + |B| - |A \cap B|
$$

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

**Derivation of the sum formula.** Write $S_n$ forwards and backwards:

$S_n = a + (a+d) + (a+2d) + \cdots + (l-d) + l$

$S_n = l + (l-d) + (l-2d) + \cdots + (a+d) + a$

Adding: $2S_n = n(a+l)$, so $S_n = \frac{n}{2}(a+l)$.

**Example (OL):** Find the sum of the first 20 terms of 3, 7, 11, 15, ...

Here $a = 3$, $d = 4$, $n = 20$.

$$
S_{20} = \frac{20}{2}[2(3) + 19(4)] = 10(6 + 76) = 820
$$

**Example (HL):** The 5th term of an arithmetic sequence is 17 and the 12th term is 38. Find $a$ and
$d$.

$$
T_5 = a + 4d = 17
$$

$$
T_{12} = a + 11d = 38
$$

Subtracting: $7d = 21$, so $d = 3$. Then $a = 17 - 12 = 5$.

### Arithmetic Mean (HL)

The arithmetic mean of two numbers $a$ and $b$ is $\frac{a+b}{2}$. In an arithmetic sequence, each
term is the arithmetic mean of its neighbours:

$$
T_n = \frac{T_{n-1} + T_{n+1}}{2}
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

**Derivation.** Multiply $S_n = a + ar + ar^2 + \cdots + ar^{n-1}$ by $r$:

$rS_n = ar + ar^2 + \cdots + ar^{n-1} + ar^n$

Subtracting: $S_n - rS_n = a - ar^n$, so $S_n(1-r) = a(1 - r^n)$, giving
$S_n = \frac{a(1-r^n)}{1-r} = \frac{a(r^n-1)}{r-1}$.

**Example (OL):** Find the sum of the first 8 terms of 2, 6, 18, 54, ...

Here $a = 2$, $r = 3$, $n = 8$.

$$
S_8 = \frac{2(3^8 - 1)}{3 - 1} = \frac{2(6561 - 1)}{2} = 6560
$$

### Geometric Mean (HL)

The geometric mean of two positive numbers $a$ and $b$ is $\sqrt{ab}$. In a geometric sequence, each
term is the geometric mean of its neighbours (when all terms are positive):

$$
T_n = \sqrt{T_{n-1} \cdot T_{n+1}}
$$

**AM-GM inequality.** For positive real numbers $a$ and $b$:

$$
\frac{a + b}{2} \geq \sqrt{ab}
$$

with equality if and only if $a = b$.

**Proof.** Since $(\sqrt{a} - \sqrt{b})^2 \geq 0$, we have $a - 2\sqrt{ab} + b \geq 0$, so
$a + b \geq 2\sqrt{ab}$, giving $\frac{a+b}{2} \geq \sqrt{ab}$.

### Sum to Infinity (HL)

If $|r| \lt 1$:

$$
S_\infty = \frac{a}{1 - r}
$$

**Why $|r| \ge 1$ diverges.** If $|r| \ge 1$, then $|T_n| = |a||r|^{n-1} \ge |a| > 0$ for all $n$,
so $T_n$ does not approach zero, and the partial sums diverge.

**Example (HL):** Find the sum to infinity of $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$

$$
S_\infty = \frac{1}{1 - \frac{1}{2}} = 2
$$

**Example (HL):** Find the sum to infinity of $\frac{1}{2} + \frac{1}{6} + \frac{1}{18} + \cdots$

$a = \frac{1}{2}$, $r = \frac{1/6}{1/2} = \frac{1}{3}$.

$$
S_\infty = \frac{1/2}{1 - 1/3} = \frac{1/2}{2/3} = \frac{3}{4}
$$

**Example (HL):** Express $0.\dot{3}\dot{7}$ (recurring) as a fraction.

$0.373737\ldots = \frac{37}{100} + \frac{37}{10000} + \frac{37}{1000000} + \cdots$

This is a geometric series with $a = \frac{37}{100}$ and $r = \frac{1}{100}$.

$$
S_\infty = \frac{37/100}{1 - 1/100} = \frac{37/100}{99/100} = \frac{37}{99}
$$

### Convergence of Sequences (HL)

A sequence $(a_n)$ converges to $L$ if:

$$
\lim_{n \to \infty} a_n = L
$$

An arithmetic sequence diverges unless $d = 0$.

A geometric sequence $ar^{n-1}$ converges to $0$ if $|r| \lt 1$ and diverges if $|r| \gt 1$.

### Limits (HL)

$$
\lim_{n \to \infty} \frac{1}{n} = 0
$$

$$
\lim_{n \to \infty} \frac{a_n}{n^k} = 0 \text{ if } \deg(a_n) \lt k
$$

**Example (HL):** Evaluate $\lim_{n \to \infty} \frac{3n^2 + 2n}{5n^2 - n}$.

Divide numerator and denominator by $n^2$:

$$
\lim_{n \to \infty} \frac{3 + \frac{2}{n}}{5 - \frac{1}{n}} = \frac{3}{5}
$$

**Example (HL):** Evaluate $\lim_{n \to \infty} \frac{2^n}{3^n}$.

$$
\lim_{n \to \infty} \left(\frac{2}{3}\right)^n = 0
$$

since $|2/3| \lt 1$.

**Example (HL):** Evaluate $\lim_{n \to \infty} \frac{n^3 + 2n}{4n^3 - n + 1}$.

Divide by $n^3$:

$$
\lim_{n \to \infty} \frac{1 + \frac{2}{n^2}}{4 - \frac{1}{n^2} + \frac{1}{n^3}} = \frac{1}{4}
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

**Note:** $\sum_{r=1}^{n} r^3 = \left(\sum_{r=1}^{n} r\right)^2$. This beautiful identity says the
sum of cubes equals the square of the sum.

**Proof of $\sum_{r=1}^{n} r = \frac{n(n+1)}{2}$ by induction.**

Base case ($n = 1$): $\sum_{r=1}^{1} r = 1 = \frac{1 \times 2}{2}$. True.

Inductive step: Assume $\sum_{r=1}^{k} r = \frac{k(k+1)}{2}$ for some $k \ge 1$.

$$
\sum_{r=1}^{k+1} r = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}
$$

This is the formula for $n = k+1$. By induction, the formula holds for all $n \in \mathbb{N}$.

**Example (HL):** Evaluate $\sum_{r=1}^{50} (3r - 1)$.

$$
\sum_{r=1}^{50} (3r - 1) = 3\sum_{r=1}^{50} r - \sum_{r=1}^{50} 1 = 3 \cdot \frac{50 \times 51}{2} - 50 = 3825 - 50 = 3775
$$

**Example (HL):** Evaluate $\sum_{r=1}^{n} r(r+1)$.

$$
\sum_{r=1}^{n} r(r+1) = \sum_{r=1}^{n} r^2 + \sum_{r=1}^{n} r = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}
$$

$$
= \frac{n(n+1)}{6}[(2n+1) + 3] = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}
$$

**Example (HL):** Evaluate $\sum_{r=1}^{100} (2r^2 - r)$.

$$
2\sum_{r=1}^{100} r^2 - \sum_{r=1}^{100} r = 2 \cdot \frac{100 \times 101 \times 201}{6} - \frac{100 \times 101}{2}
$$

$$
= 2 \times 338350 - 5050 = 676700 - 5050 = 671650
$$

**Example (HL):** Evaluate $\sum_{r=1}^{n} \frac{1}{r(r+1)}$ by partial fractions.

$$
\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}
$$

This is a **telescoping series**:

$$
\sum_{r=1}^{n} \left(\frac{1}{r} - \frac{1}{r+1}\right) = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}
$$

## Mathematical Induction (HL)

### Framework

To prove a statement $P(n)$ for all $n \ge n_0$:

1. **Base case:** Verify $P(n_0)$ is true.
2. **Inductive hypothesis:** Assume $P(k)$ is true for some $k \ge n_0$.
3. **Inductive step:** Using the hypothesis, prove $P(k+1)$ is true.
4. **Conclusion:** By the principle of mathematical induction, $P(n)$ is true for all $n \ge n_0$.

**Example (HL):** Prove that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$ by induction.

Base case ($n = 1$): $\sum_{r=1}^{1} r^3 = 1 = \frac{1 \times 4}{4} = 1$. True.

Inductive step: Assume $\sum_{r=1}^{k} r^3 = \frac{k^2(k+1)^2}{4}$.

$$
\sum_{r=1}^{k+1} r^3 = \frac{k^2(k+1)^2}{4} + (k+1)^3 = (k+1)^2\left[\frac{k^2}{4} + (k+1)\right] = (k+1)^2 \cdot \frac{k^2 + 4k + 4}{4} = \frac{(k+1)^2(k+2)^2}{4}
$$

This is the formula for $n = k+1$. QED.

**Example (HL):** Prove that $3^n \geq 2^n + n$ for all $n \ge 2$.

Base case ($n = 2$): $3^2 = 9 \geq 2^2 + 2 = 6$. True.

Inductive step: Assume $3^k \geq 2^k + k$ for some $k \ge 2$.

$$
3^{k+1} = 3 \cdot 3^k \geq 3(2^k + k) = 3 \cdot 2^k + 3k
$$

We need to show $3 \cdot 2^k + 3k \geq 2^{k+1} + (k+1) = 2 \cdot 2^k + k + 1$.

$$
3 \cdot 2^k + 3k - 2 \cdot 2^k - k - 1 = 2^k + 2k - 1 \geq 2^2 + 2(2) - 1 = 7 > 0
$$

So $3^{k+1} \geq 2^{k+1} + (k+1)$. QED.

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

### Effective Annual Rate (HL)

If the nominal annual rate is $i$ compounded $m$ times per year, the effective annual rate is:

$$
r_{\mathrm{eff}} = \left(1 + \frac{i}{m}\right)^m - 1
$$

**Example (HL):** A bank offers 6% per annum compounded monthly. Find the effective annual rate.

$$
r_{\mathrm{eff}} = \left(1 + \frac{0.06}{12}\right)^{12} - 1 = (1.005)^{12} - 1 \approx 0.0617 = 6.17\%
$$

### Amortisation (HL)

For a loan of $P$ repaid in $n$ equal instalments of $M$ at periodic rate $r$:

$$
M = \frac{Pr}{1 - (1 + r)^{-n}}
$$

**Derivation.** The present value of all payments equals the loan amount:

$$
M\left[\frac{1}{1+r} + \frac{1}{(1+r)^2} + \cdots + \frac{1}{(1+r)^n}\right] = P
$$

The sum in brackets is a geometric series with first term $\frac{1}{1+r}$ and ratio $\frac{1}{1+r}$:

$$
M \cdot \frac{1}{1+r} \cdot \frac{1 - (1+r)^{-n}}{1 - \frac{1}{1+r}} = M \cdot \frac{1 - (1+r)^{-n}}{r} = P
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

**Why this works.** Let $U_n = T_n - L$. Then
$U_{n+1} = T_{n+1} - L = aT_n + b - L = aT_n + b - \frac{b}{1-a} = aT_n + \frac{b - b + ab}{1-a} = aT_n + \frac{ab}{1-a}$.
Since $L = \frac{b}{1-a}$, we have $aL = \frac{ab}{1-a}$, so $U_{n+1} = aT_n - aL = aU_n$. This is a
geometric sequence with ratio $a$.

**Example:** Solve $T_1 = 3$, $T_{n+1} = 2T_n + 5$.

Fixed point: $L = \frac{5}{1 - 2} = -5$.

$$
T_n = -5 + (3 - (-5)) \cdot 2^{n-1} = -5 + 8 \cdot 2^{n-1} = -5 + 2^{n+2}
$$

**Example (HL):** Solve $T_1 = 1$, $T_{n+1} = 4T_n - 3$.

Fixed point: $L = \frac{-3}{1 - 4} = 1$.

$$
T_n = 1 + (1 - 1) \cdot 4^{n-1} = 1
$$

Indeed: $T_2 = 4(1) - 3 = 1$, $T_3 = 4(1) - 3 = 1$, etc. The sequence is constant at 1, which is the
fixed point.

### Second Order Recurrence Relations (HL - awareness)

A second-order linear recurrence $T_{n+2} = aT_{n+1} + bT_n$ with constant coefficients is solved by
finding the roots of the characteristic equation $\lambda^2 - a\lambda - b = 0$.

**Example:** The Fibonacci sequence $F_1 = 1$, $F_2 = 1$, $F_{n+2} = F_{n+1} + F_n$.

Characteristic equation: $\lambda^2 - \lambda - 1 = 0$.

$$
\lambda = \frac{1 \pm \sqrt{5}}{2}
$$

The general solution is:

$$
F_n = A\left(\frac{1 + \sqrt{5}}{2}\right)^n + B\left(\frac{1 - \sqrt{5}}{2}\right)^n
$$

## Common Pitfalls

1. **Mixing up arithmetic and geometric** formulas -- arithmetic has $d$, geometric has $r$.
   Remember: arithmetic adds, geometric multiplies.
2. **Sum to infinity** only converges when $|r| \lt 1$. If $|r| \ge 1$, the sum diverges.
3. **Financial mathematics** -- ensure the rate and time period match (e.g., annual rate with annual
   compounding, or monthly rate with monthly compounding).
4. **Limits** -- always divide by the highest power of $n$ in both numerator and denominator.
5. **Sigma notation** -- be careful with the lower and upper limits. $\sum_{r=1}^{n} 1 = n$, not
   $1$.
6. **Set notation** -- do not confuse $\subset$ (subset) with $\in$ (element of).
7. **Proof by contradiction** -- always clearly state the assumption, derive a contradiction, and
   state what this proves.
8. **Induction** -- the inductive step must use the inductive hypothesis. If it does not, the proof
   is invalid.
9. **Recurring decimals** -- identify the repeating block correctly. $0.\dot{3}$ has one repeating
   digit; $0.\dot{3}\dot{7}$ has two repeating digits.
10. **AM-GM inequality** -- only applies to non-negative numbers. Do not apply it when $a$ or $b$
    could be negative.

## Practice Questions

### Ordinary Level

1. Find the 15th term of the arithmetic sequence 5, 9, 13, 17, ...
2. Find the sum of the first 25 terms of 2, 6, 18, 54, ...
3. A set $A = \{1, 2, 3, 4, 5, 6, 7, 8\}$ and $B = \{2, 4, 6, 8, 10\}$. Find $A \cup B$ and
   $A \cap B$.
4. Show that $\frac{22}{7}$ is rational.
5. The 5th term of an arithmetic sequence is 17 and the 12th term is 38. Find $a$ and $d$.
6. Express $0.\dot{6}$ as a fraction.
7. Find the sum of the first 10 terms of the sequence $1 + 2 + 4 + 8 + \cdots$.

### Higher Level

1. Prove that $\sqrt{3}$ is irrational.
2. Find the sum to infinity of $\frac{1}{2} + \frac{1}{6} + \frac{1}{18} + \cdots$
3. Evaluate $\sum_{r=1}^{100} (2r^2 - r)$.
4. Solve the recurrence relation $T_1 = 1$, $T_{n+1} = 4T_n - 3$. Find a closed form for $T_n$.
5. EUR 2000 is invested at 3.5% per annum compounded monthly. Find the amount after 5 years.
6. Prove De Morgan's second law: $(A \cap B)' = A' \cup B'$.
7. Evaluate $\lim_{n \to \infty} \frac{n^3 + 2n}{4n^3 - n + 1}$.
8. Prove that $\sum_{r=1}^{n} r^3 = \frac{n^2(n+1)^2}{4}$ by induction.
9. Prove that $\sqrt{2} + \sqrt{5}$ is irrational.
10. Evaluate $\sum_{r=1}^{n} \frac{1}{r(r+1)}$ by expressing $\frac{1}{r(r+1)}$ in partial
    fractions.
11. Express $0.\dot{2}\dot{7}$ as a fraction.
12. Prove that $\log_2 3$ is irrational.
13. A bank offers 5% nominal annual rate compounded quarterly. Find the effective annual rate.
14. In a survey, 70% of people like tea, 40% like coffee, and 25% like both. What percentage like
    neither?
15. Prove the AM-GM inequality for positive $a$ and $b$.
16. Evaluate $\sum_{r=1}^{n} (2r - 1)$ and explain the result geometrically.
17. Prove that $n! > 2^n$ for all $n \ge 4$ by induction.
18. A loan of EUR 150,000 is repaid over 20 years at a monthly rate of 0.4%. Find the monthly
    repayment and the total amount paid.
19. The first three terms of a geometric sequence are $x - 2$, $x + 2$, and $x + 8$. Find $x$ and
    the common ratio.
20. Prove that the sum of an odd number and an even number is always odd.

### Extended Practice

21. Express $0.1\dot{6}$ (recurring) as a fraction.
22. Find the sum to infinity of the series
    $\frac{2}{3} + \frac{1}{3} + \frac{1}{6} + \frac{1}{12} + \cdots$
23. Evaluate $\sum_{r=1}^{n} (r+1)(r+2)$.
24. Prove by induction that $n^2 + n$ is even for all positive integers $n$.
25. Solve $T_1 = 5$, $T_{n+1} = \frac{1}{2}T_n + 3$ and find $\lim_{n \to \infty} T_n$.
26. A geometric sequence has first term 3 and common ratio $\frac{2}{3}$. Find the smallest value of
    $n$ such that $T_n < 0.1$.
27. Prove that there are infinitely many prime numbers (Euclid's proof).
28. EUR 10000 is invested at $r\%$ per annum compounded annually. After 10 years it is worth
    EUR 18000. Find $r$.
29. The sum of the first $n$ terms of an arithmetic sequence is $S_n = 3n^2 + n$. Find the $n$th
    term $T_n$ and the common difference.
30. Prove that $\frac{1}{\sqrt{2}}$ is irrational.

### Extended Content

#### Sum of an Arithmetic Series from $S_n$

Given the sum formula $S_n = \frac{n}{2}[2a + (n-1)d]$, we can find the $n$th term from the sum:

$$
T_n = S_n - S_{n-1} = \frac{n}{2}[2a + (n-1)d] - \frac{n-1}{2}[2a + (n-2)d]
$$

$$
= \frac{1}{2}\left[2an + n(n-1)d - 2a(n-1) - (n-1)(n-2)d\right]
$$

$$
= \frac{1}{2}\left[2a + (n-1)d(2)\right] = a + (n-1)d
$$

This confirms that the $n$th term can always be recovered from the sum.

#### Geometric Series Derivation (Alternative)

An alternative derivation of $S_n = \frac{a(1-r^n)}{1-r}$ uses the formula for the sum of a
geometric progression by recognising:

$$
(1-r)S_n = (1-r)(a + ar + ar^2 + \cdots + ar^{n-1})
$$

$$
= a + ar + ar^2 + \cdots + ar^{n-1} - ar - ar^2 - \cdots - ar^n = a - ar^n
$$

So $S_n = \frac{a(1-r^n)}{1-r}$.

#### Applications of Sequences in Nature

The Fibonacci sequence appears in many natural phenomena:

- The arrangement of leaves on a stem (phyllotaxis)
- The spiral pattern of sunflower seeds
- The branching of trees
- The spiral shells of nautilus

The ratio of consecutive Fibonacci numbers converges to the **golden ratio**
$\phi = \frac{1+\sqrt{5}}{2} \approx 1.618$.

#### Deducing the Formula for $T_n$ Given $S_n$

If $S_n = 3n^2 + n$, then:

$$
T_n = S_n - S_{n-1} = (3n^2 + n) - [3(n-1)^2 + (n-1)]
$$

$$
= 3n^2 + n - 3(n^2 - 2n + 1) - n + 1 = 3n^2 + n - 3n^2 + 6n - 3 - n + 1 = 6n - 2
$$

This is an arithmetic sequence with first term $T_1 = 6(1) - 2 = 4$ and common difference $d = 6$.
