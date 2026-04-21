---
id: sequences-series
title: Sequences and Series
description:
  IB Mathematics — arithmetic and geometric sequences and series, sigma notation, binomial theorem.
slug: sequences-series
---

## Sequences and Series

A **sequence** is an ordered list of numbers. A **series** is the sum of the terms of a sequence.

<DesmosGraph title="Geometric Series Convergence" expressions={["\sum_{k=0}^{n} ar^k",
"\frac{a}{1-r}"]} width={800} height={500} />

Adjust the parameters in the graph above to explore the relationships between variables.

### Notation

- $u_n$ or $a_n$: the $n$-th term of a sequence
- $u_1$: the first term
- $d$: common difference (arithmetic)
- $r$: common ratio (geometric)
- $n$: number of terms
- $S_n$: sum of the first $n$ terms

---

## Arithmetic Sequences

An arithmetic sequence has a constant difference between consecutive terms:

$$
u_{n+1} - u_n = d
$$

### General Term

$$
u_n = u_1 + (n-1)d
$$

### Sum of the First $n$ Terms

$$
S_n = \frac{n}{2}(u_1 + u_n) = \frac{n}{2}[2u_1 + (n-1)d]
$$

:::info[Example]

Find the 20th term and the sum of the first 20 terms of the sequence $3, 7, 11, 15, \ldots$.

$u_1 = 3$, $d = 4$.

$$
u_{20} = 3 + 19 \times 4 = 79
$$

$$
S_{20} = \frac{20}{2}(3 + 79) = 10 \times 82 = 820
$$

:::

### Properties of Arithmetic Sequences

The arithmetic **mean** of $a$ and $b$ is $\dfrac{a+b}{2}$.

If $a, b, c$ are consecutive terms of an arithmetic sequence, then $2b = a + c$.

:::info[Example]

The 5th term of an arithmetic sequence is $17$ and the 12th term is $38$. Find the first term and
the common difference.

$$
u_5 = u_1 + 4d = 17 \quad \mathrm{(1)}
$$

$$
u_{12} = u_1 + 11d = 38 \quad \mathrm{(2)}
$$

(2) $-$ (1): $7d = 21 \implies d = 3$.

From (1): $u_1 + 12 = 17 \implies u_1 = 5$.

:::

---

## Geometric Sequences

A geometric sequence has a constant ratio between consecutive terms:

$$
\frac{u_{n+1}}{u_n} = r
$$

### General Term

$$
u_n = u_1 r^{n-1}
$$

### Sum of the First $n$ Terms

$$
S_n = \frac{u_1(r^n - 1)}{r - 1} = \frac{u_1(1 - r^n)}{1 - r} \quad (r \neq 1)
$$

When $r = 1$: $S_n = nu_1$.

:::info[Example]

Find the 8th term and the sum of the first 8 terms of $2, 6, 18, 54, \ldots$.

$u_1 = 2$, $r = 3$.

$$
u_8 = 2 \times 3^7 = 2 \times 2187 = 4374
$$

$$
S_8 = \frac{2(3^8 - 1)}{3 - 1} = \frac{2(6561 - 1)}{2} = 6560
$$

:::

### Geometric Mean

The geometric mean of $a$ and $b$ is $\sqrt{ab}$ (for positive $a, b$).

If $a, b, c$ are consecutive terms of a geometric sequence, then $b^2 = ac$.

---

## Convergence of Geometric Series

### Sum to Infinity

If $|r| \lt 1$, the geometric series converges and the sum to infinity is:

$$
S_{\infty} = \frac{u_1}{1 - r}
$$

If $|r| \ge 1$, the series diverges (the sum to infinity does not exist).

:::info[Example]

Find the sum to infinity of $1 + \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \cdots$.

$u_1 = 1$, $r = \dfrac{1}{2}$. Since $|r| \lt 1$:

$$
S_{\infty} = \frac{1}{1 - \frac{1}{2}} = 2
$$

:::

:::info[Example]

Express $0.\dot{7}$ (recurring decimal) as a fraction.

$$
0.\dot{7} = 0.7777\ldots = \frac{7}{10} + \frac{7}{100} + \frac{7}{1000} + \cdots
$$

This is a geometric series with $u_1 = \dfrac{7}{10}$ and $r = \dfrac{1}{10}$.

$$
S_{\infty} = \frac{\frac{7}{10}}{1 - \frac{1}{10}} = \frac{\frac{7}{10}}{\frac{9}{10}} = \frac{7}{9}
$$

:::

:::info[Example]

Express $0.\dot{2}\dot{7}$ (i.e., $0.272727\ldots$) as a fraction.

$$
0.\dot{2}\dot{7} = \frac{27}{100} + \frac{27}{10000} + \cdots
$$

$u_1 = \dfrac{27}{100}$, $r = \dfrac{1}{100}$.

$$
S_{\infty} = \frac{\frac{27}{100}}{1 - \frac{1}{100}} = \frac{\frac{27}{100}}{\frac{99}{100}} = \frac{27}{99} = \frac{3}{11}
$$

:::

### Conditions for Convergence

| Condition | Behaviour                     |
| --------- | ----------------------------- | ------ | ------------------------------- |
| $         | r                             | \lt 1$ | Converges to $\dfrac{u_1}{1-r}$ |
| $r = 1$   | Diverges (grows linearly)     |
| $r = -1$  | Oscillates, does not converge |
| $         | r                             | \gt 1$ | Diverges (grows exponentially)  |

---

## Sigma Notation

### Definition

$$
\sum_{i=1}^{n} u_i = u_1 + u_2 + u_3 + \cdots + u_n
$$

### Properties

1. $\displaystyle\sum_{i=1}^{n} k = kn$
2. $\displaystyle\sum_{i=1}^{n} k u_i = k\sum_{i=1}^{n} u_i$
3. $\displaystyle\sum_{i=1}^{n} (u_i \pm v_i) = \sum_{i=1}^{n} u_i \pm \sum_{i=1}^{n} v_i$

### Useful Sigma Summations

$$
\sum_{i=1}^{n} i = \frac{n(n+1)}{2}
$$

$$
\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}
$$

$$
\sum_{i=1}^{n} i^3 = \left[\frac{n(n+1)}{2}\right]^2
$$

:::info[Example]

Evaluate $\displaystyle\sum_{k=1}^{10} (3k - 1)$.

$$
\sum_{k=1}^{10}(3k-1) = 3\sum_{k=1}^{10}k - \sum_{k=1}^{10}1 = 3 \cdot \frac{10 \times 11}{2} - 10 = 165 - 10 = 155
$$

:::

:::info[Example]

Evaluate $\displaystyle\sum_{r=1}^{n} r(r+1)$.

$$
\sum_{r=1}^{n}(r^2 + r) = \sum_{r=1}^{n}r^2 + \sum_{r=1}^{n}r = \frac{n(n+1)(2n+1)}{6} + \frac{n(n+1)}{2}
$$

$$
= \frac{n(n+1)}{6}\big[(2n+1) + 3\big] = \frac{n(n+1)(2n+4)}{6} = \frac{n(n+1)(n+2)}{3}
$$

:::

---

## Applications

### Compound Interest

If a principal $P$ is invested at a rate of $r$ per period, compounded for $n$ periods:

$$
A = P(1 + r)^n
$$

### Population Growth

If a population $P_0$ grows at a rate of $r\%$ per year:

$$
P_n = P_0\left(1 + \frac{r}{100}\right)^n
$$

### Depreciation

For depreciation at rate $r\%$ per year:

$$
V_n = V_0\left(1 - \frac{r}{100}\right)^n
$$

:::info[Example]

USD 5000 is invested at 6% per year, compounded annually. Find the value after 10 years.

$$
A = 5000(1.06)^{10} \approx 5000 \times 1.7908 = 8954.24
$$

The investment is worth approximately USD 8954.24.

:::

:::info[Example]

A car bought for USD 25000 depreciates at 15% per year. Find its value after 5 years.

$$
V_5 = 25000(0.85)^5 \approx 25000 \times 0.4437 = 11092.50
$$

The car is worth approximately USD 11092.50 after 5 years.

:::

### Loan Repayments

For a loan of $L$ with monthly repayment $R$ at monthly interest rate $i$ over $n$ months:

$$
L = \frac{R[1 - (1+i)^{-n}]}{i}
$$

---

## The Binomial Theorem

### Expansion of $(a + b)^n$

For positive integer $n$:

$$
(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k
$$

where the **binomial coefficient** is:

$$
\binom{n}{k} = \frac{n!}{k!(n-k)!} = {}^nC_k
$$

### Special Cases

$$(1 + x)^n = \sum_{k=0}^{n} \binom{n}{k} x^k = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$$

### Pascal's Triangle

Each entry is the sum of the two entries above it:

$$
\begin{array}{cccccccc}
& & & 1 & & & \\
& & 1 & & 1 & & \\
& 1 & & 2 & & 1 & \\
1 & & 3 & & 3 & & 1 \\
& 1 & & 4 & & 6 & & 4 & & 1
\end{array}
$$

Row $n$ (starting from row 0) gives the coefficients of $(a + b)^n$.

:::info[Example]

Expand $(2x - 3)^4$.

Using the binomial theorem:

$$
(2x - 3)^4 = \sum_{k=0}^{4}\binom{4}{k}(2x)^{4-k}(-3)^k
$$

$$
= 1 \cdot (2x)^4 \cdot 1 + 4 \cdot (2x)^3 \cdot (-3) + 6 \cdot (2x)^2 \cdot 9 + 4 \cdot (2x) \cdot (-27) + 1 \cdot 81
$$

$$
= 16x^4 - 96x^3 + 216x^2 - 216x + 81
$$

:::

### Finding Specific Terms

To find the term containing $x^r$ in the expansion of $(a + bx)^n$:

The general term is $\dbinom{n}{k}a^{n-k}b^k x^k$.

Set $k = r$ to find the coefficient of $x^r$.

:::info[Example]

Find the coefficient of $x^3$ in the expansion of $(2 + 3x)^7$.

The general term is $\dbinom{7}{k} 2^{7-k}(3x)^k$.

For $x^3$: $k = 3$.

Coefficient $= \dbinom{7}{3} \cdot 2^4 \cdot 3^3 = 35 \times 16 \times 27 = 15120$.

:::

### Binomial Expansion for Negative or Fractional Powers

For $|x| \lt 1$ and $n \in \mathbb{Q}$:

$$
(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots
$$

This is an **infinite series** that converges for $|x| \lt 1$.

:::info[Example]

Find the expansion of $(1 + x)^{-2}$ up to the term in $x^3$.

$$
(1+x)^{-2} = 1 + (-2)x + \frac{(-2)(-3)}{2}x^2 + \frac{(-2)(-3)(-4)}{6}x^3
$$

$$
= 1 - 2x + 3x^2 - 4x^3
$$

:::

:::info[Example]

Find the expansion of $\dfrac{1}{\sqrt{1+x}}$ up to the term in $x^2$.

$$
(1+x)^{-1/2} = 1 + \left(-\frac{1}{2}\right)x + \frac{\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{2}x^2
$$

$$
= 1 - \frac{x}{2} + \frac{3x^2}{8}
$$

:::

### Validity of Expansion

The expansion $(1+x)^n$ for non-integer $n$ converges when $|x| \lt 1$.

To use this for expressions like $(2 + 3x)^{-1/2}$, factor out the constant:

$$
(2+3x)^{-1/2} = 2^{-1/2}\left(1 + \frac{3x}{2}\right)^{-1/2}
$$

This converges when $\left|\dfrac{3x}{2}\right| \lt 1$, i.e., $|x| \lt \dfrac{2}{3}$.

---

## Mixed Arithmetic-Geometric Sequences

### Recurrence Relations

A sequence defined by a recurrence relation gives each term in terms of previous terms.

$$
u_{n+1} = au_n + b
$$

### Solving First-Order Linear Recurrence Relations

For $u_{n+1} = ru_n + d$ with $u_1$ given:

If $r \neq 1$, the solution is:

$$
u_n = r^{n-1}u_1 + d\frac{r^{n-1} - 1}{r - 1}
$$

:::info[Example]

A sequence is defined by $u_{n+1} = 3u_n + 2$ with $u_1 = 1$. Find $u_n$.

$r = 3$, $d = 2$.

$$
u_n = 3^{n-1} \cdot 1 + 2 \cdot \frac{3^{n-1} - 1}{3 - 1} = 3^{n-1} + 3^{n-1} - 1 = 2 \cdot 3^{n-1} - 1
$$

Verify: $u_1 = 2 \cdot 1 - 1 = 1$. $u_2 = 2 \cdot 3 - 1 = 5$. Check: $u_2 = 3(1) + 2 = 5$.

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

An arithmetic sequence has first term $5$ and common difference $3$. A geometric sequence has first
term $3$ and common ratio $2$. Find the value of $n$ for which the $n$-th terms are equal.

$$
u_n = 5 + (n-1) \times 3 = 3n + 2
$$

$$
v_n = 3 \times 2^{n-1}
$$

$$
3n + 2 = 3 \times 2^{n-1}
$$

Testing values:

$n = 1$: $5 \neq 3$.

$n = 2$: $8 \neq 6$.

$n = 3$: $11 \neq 12$.

$n = 4$: $14 \neq 24$.

$n = 5$: $17 \neq 48$.

The sequences do not have equal terms for small $n$. The geometric sequence grows much faster. The
only possible solution is $n = 3$ approximately (left $= 11$, right $= 12$), so there is no exact
integer solution.

### Question 2 (Paper 2 style)

The sum of the first three terms of a geometric sequence is $52$. The sum of the first six terms is
$4732$. Find the common ratio and the first term.

$$
S_3 = \frac{u_1(r^3 - 1)}{r - 1} = 52 \quad \mathrm{(1)}
$$

$$
S_6 = \frac{u_1(r^6 - 1)}{r - 1} = 4732 \quad \mathrm{(2)}
$$

Dividing (2) by (1):

$$
\frac{r^6 - 1}{r^3 - 1} = \frac{4732}{52} = 91
$$

$$
r^3 + 1 = 91 \implies r^3 = 90
$$

Since $90 = 9 \times 10$ is not a perfect cube, this suggests the ratio might not be exact. Let us
reconsider with $r^3 - 1 \neq 0$:

$$
\frac{(r^3 - 1)(r^3 + 1)}{r^3 - 1} = r^3 + 1 = 91
$$

$$
r^3 = 90, \quad r = \sqrt[3]{90}
$$

From (1): $u_1 = \dfrac{52(r-1)}{r^3 - 1} = \dfrac{52(r-1)}{89}$.

### Question 3 (Paper 1 style)

Expand $(1 - 2x)^5$ in ascending powers of $x$ up to and including the term in $x^3$.

$$
(1-2x)^5 = 1 + 5(-2x) + 10(-2x)^2 + 10(-2x)^3 + 5(-2x)^4 + (-2x)^5
$$

$$
= 1 - 10x + 40x^2 - 80x^3 + 80x^4 - 32x^5
$$

### Question 4 (Paper 2 style)

The first three terms of a geometric sequence are $\sin\theta$, $\cos\theta$, and
$\dfrac{1}{\sqrt{3}}$, where $0 \lt \theta \lt \dfrac{\pi}{2}$.

**Find the value of $\theta$.**

Common ratio: $r = \dfrac{\cos\theta}{\sin\theta} = \cot\theta$.

Also: $r = \dfrac{1/\sqrt{3}}{\cos\theta}$.

$$
\cot\theta = \frac{1}{\sqrt{3}\cos\theta}
$$

$$
\frac{\cos\theta}{\sin\theta} = \frac{1}{\sqrt{3}\cos\theta}
$$

$$
\cos^2\theta = \frac{\sin\theta}{\sqrt{3}}
$$

Since $\cos^2\theta = 1 - \sin^2\theta$:

$$
1 - \sin^2\theta = \frac{\sin\theta}{\sqrt{3}}
$$

$$
\sqrt{3}\sin^2\theta + \sin\theta - \sqrt{3} = 0
$$

Let $u = \sin\theta$:

$$
\sqrt{3}u^2 + u - \sqrt{3} = 0
$$

$$
u = \frac{-1 \pm \sqrt{1 + 12}}{2\sqrt{3}} = \frac{-1 \pm \sqrt{13}}{2\sqrt{3}}
$$

Since $0 \lt \theta \lt \dfrac{\pi}{2}$, $\sin\theta \gt 0$:

$$
\sin\theta = \frac{-1 + \sqrt{13}}{2\sqrt{3}}
$$

### Question 5 (Paper 1 style)

Evaluate $\displaystyle\sum_{k=1}^{50} (2k + 1)$.

$$
\sum_{k=1}^{50}(2k+1) = 2\sum_{k=1}^{50}k + \sum_{k=1}^{50}1 = 2 \cdot \frac{50 \times 51}{2} + 50 = 2550 + 50 = 2600
$$

### Question 6 (Paper 2 style)

The series $1 + 2x + 3x^2 + 4x^3 + \cdots$ can be written as
$\displaystyle\sum_{n=1}^{\infty} nx^{n-1}$.

**(a)** Find the sum to infinity in terms of $x$ for $|x| \lt 1$.

We know $\displaystyle\sum_{n=0}^{\infty}x^n = \frac{1}{1-x}$ for $|x| \lt 1$.

Differentiating both sides with respect to $x$:

$$
\sum_{n=1}^{\infty}nx^{n-1} = \frac{1}{(1-x)^2}
$$

**(b)** Hence find the sum to infinity of $\displaystyle\sum_{n=1}^{\infty}\frac{n}{3^n}$.

Setting $x = \dfrac{1}{3}$:

$$
\sum_{n=1}^{\infty}n\left(\frac{1}{3}\right)^{n-1} = \frac{1}{(1 - 1/3)^2} = \frac{1}{(2/3)^2} = \frac{9}{4}
$$

Therefore:

$$
\sum_{n=1}^{\infty}\frac{n}{3^n} = \frac{1}{3}\sum_{n=1}^{\infty}n\left(\frac{1}{3}\right)^{n-1} = \frac{1}{3} \cdot \frac{9}{4} = \frac{3}{4}
$$

---

## Summary

| Topic                  | Key Formula                                                   |
| ---------------------- | ------------------------------------------------------------- | --- | ------ |
| Arithmetic $n$-th term | $u_n = u_1 + (n-1)d$                                          |
| Arithmetic sum         | $S_n = \dfrac{n}{2}[2u_1 + (n-1)d]$                           |
| Geometric $n$-th term  | $u_n = u_1 r^{n-1}$                                           |
| Geometric sum          | $S_n = \dfrac{u_1(1-r^n)}{1-r}$                               |
| Sum to infinity        | $S_{\infty} = \dfrac{u_1}{1-r}$ for $                         | r   | \lt 1$ |
| Binomial theorem       | $(a+b)^n = \displaystyle\sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$ |
| Sigma of $i$           | $\displaystyle\sum_{i=1}^{n}i = \dfrac{n(n+1)}{2}$            |
| Sigma of $i^2$         | $\displaystyle\sum_{i=1}^{n}i^2 = \dfrac{n(n+1)(2n+1)}{6}$    |

:::tip[Exam Strategy]

For binomial expansion questions, always check the validity condition when $n$ is not a positive
integer. For geometric series, always verify that $|r| \lt 1$ before computing $S_{\infty}$. In
Paper 2, show all steps of sigma notation manipulations.

:::

---

## Mathematical Induction

### Principle

Mathematical induction is a proof technique used to prove statements about natural numbers.

### Steps

1. **Base case**: Prove the statement is true for $n = 1$ (or the starting value).
2. **Inductive hypothesis**: Assume the statement is true for $n = k$.
3. **Inductive step**: Prove that if it is true for $n = k$, then it is true for $n = k + 1$.
4. **Conclusion**: By the principle of mathematical induction, the statement is true for all
   $n \ge 1$.

:::info[Example]

Prove that $\displaystyle\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$ for all $n \ge 1$.

**Base case** ($n = 1$): $\displaystyle\sum_{i=1}^{1} i^2 = 1$ and
$\dfrac{1 \times 2 \times 3}{6} = 1$. True.

**Inductive hypothesis**: Assume $\displaystyle\sum_{i=1}^{k} i^2 = \frac{k(k+1)(2k+1)}{6}$.

**Inductive step**: Show for $n = k + 1$:

$$
\sum_{i=1}^{k+1} i^2 = \sum_{i=1}^{k} i^2 + (k+1)^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2
$$

$$
= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}
$$

$$
= \frac{(k+1)(2k^2 + k + 6k + 6)}{6} = \frac{(k+1)(2k^2 + 7k + 6)}{6}
$$

$$
= \frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}
$$

This is the required formula with $n = k + 1$. The statement is true by induction.

:::

---

## Additional Sigma Notation Problems

### Changing the Index

Sometimes it is useful to change the index of summation:

$$
\sum_{i=1}^{n} a_i = \sum_{j=0}^{n-1} a_{j+1} = \sum_{k=2}^{n+1} a_{k-1}
$$

### Telescoping Series

A telescoping series is one where many terms cancel:

$$
\sum_{k=1}^{n} \frac{1}{k(k+1)} = \sum_{k=1}^{n}\left(\frac{1}{k} - \frac{1}{k+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}
$$

:::info[Example]

Evaluate $\displaystyle\sum_{k=1}^{n} \frac{1}{k(k+2)}$.

Using partial fractions:

$$
\frac{1}{k(k+2)} = \frac{1}{2}\left(\frac{1}{k} - \frac{1}{k+2}\right)
$$

$$
\sum_{k=1}^{n} \frac{1}{k(k+2)} = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right) = \frac{1}{2}\left(\frac{3}{2} - \frac{2n+3}{(n+1)(n+2)}\right)
$$

:::

---

## Arithmetic-Geometric Mean Inequality

### Statement

For positive real numbers $a$ and $b$:

$$
\frac{a + b}{2} \ge \sqrt{ab}
$$

Equality holds if and only if $a = b$.

### Generalisation

For positive real numbers $a_1, a_2, \ldots, a_n$:

$$
\frac{a_1 + a_2 + \cdots + a_n}{n} \ge \sqrt[n]{a_1 a_2 \cdots a_n}
$$

---

## Additional Exam-Style Questions

### Question 7 (Paper 2 style)

Use the binomial theorem to expand $(1 + x)^4$ and hence evaluate $1.01^4$ to 5 decimal places.

$$
(1+x)^4 = 1 + 4x + 6x^2 + 4x^3 + x^4
$$

Set $x = 0.01$:

$$
1.01^4 = 1 + 4(0.01) + 6(0.0001) + 4(0.000001) + 0.00000001
$$

$$
= 1 + 0.04 + 0.0006 + 0.000004 + 0.00000001 = 1.04060401
$$

To 5 decimal places: $1.04060$.

### Question 8 (Paper 2 style)

The sum of the first $n$ terms of a sequence is $S_n = n^2 + 2n$. Find an expression for the $n$-th
term $u_n$.

$$
u_n = S_n - S_{n-1} = (n^2 + 2n) - ((n-1)^2 + 2(n-1))
$$

$$
= n^2 + 2n - (n^2 - 2n + 1 + 2n - 2) = n^2 + 2n - n^2 + 1 = 2n + 1
$$

Check: $u_1 = S_1 = 3 = 2(1) + 1$. Correct.

This is an arithmetic sequence with first term 3 and common difference 2.

### Question 9 (Paper 2 style)

Find the coefficient of $x^4$ in the expansion of $(2 - 3x)^7$.

The general term is $\dbinom{7}{k}2^{7-k}(-3x)^k$.

For $x^4$: $k = 4$.

Coefficient $= \dbinom{7}{4} \cdot 2^3 \cdot (-3)^4 = 35 \times 8 \times 81 = 22680$.

### Question 10 (Paper 1 style)

A geometric series has first term $a$ and common ratio $r$. The sum of the first three terms is $28$
and the sum to infinity is $32$. Find $a$ and $r$.

$$
a + ar + ar^2 = 28 \quad \mathrm{(1)}
$$

$$
\frac{a}{1-r} = 32 \implies a = 32(1-r) \quad \mathrm{(2)}
$$

Substituting (2) into (1):

$$
32(1-r)(1 + r + r^2) = 28
$$

$$
(1-r)(1+r+r^2) = 1 - r^3 = \frac{28}{32} = \frac{7}{8}
$$

$$
r^3 = 1 - \frac{7}{8} = \frac{1}{8} \implies r = \frac{1}{2}
$$

$$
a = 32\left(1 - \frac{1}{2}\right) = 16
$$

Verify: $16 + 8 + 4 = 28$. And $S_\infty = 16/(1 - 1/2) = 32$. Correct.
