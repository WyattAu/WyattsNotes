---
title: Sequences and Series
date: 2026-04-14
tags:
  - Mathematics
  - AP
categories:
  - Mathematics
slug: sequences-and-series
---

## Sequences (CED BC Unit 10)

A **sequence** is an ordered list of numbers: $a_1, a_2, a_3, \ldots$. Formally, a sequence is a
function from the positive integers (or a subset thereof) to the real numbers:
$a \colon \mathbb{N} \to \mathbb{R}$, written as $\{a_n\}_{n=1}^{\infty}$ or simply $\{a_n\}$.

A sequence $\{a_n\}$ **converges** to a limit $L$ if:

$$
\lim_{n \to \infty} a_n = L
$$

This means: for every $\epsilon \gt 0$, there exists an integer $N$ such that
$|a_n - L| \lt \epsilon$ for all $n \ge N$. The terms eventually get and stay arbitrarily close to
$L$.

If no such limit exists, the sequence **diverges**.

### Bounded and Monotone Sequences

- **Bounded above:** $a_n \le M$ for all $n$ and some $M$.
- **Bounded below:** $a_n \ge m$ for all $n$ and some $m$.
- **Bounded:** bounded both above and below.
- **Monotone increasing:** $a_{n+1} \ge a_n$ for all $n$.
- **Monotone decreasing:** $a_{n+1} \le a_n$ for all $n$.
- **Eventually monotone:** the monotonicity holds for all $n$ beyond some index $N$.

**Monotone Convergence Theorem.** Every bounded monotone sequence converges. This is one of the most
powerful existence theorems in analysis: it guarantees convergence without requiring you to find the
limit explicitly.

**Corollary:** A monotone increasing sequence that is not bounded above diverges to $+\infty$. A
monotone decreasing sequence that is not bounded below diverges to $-\infty$.

### Common Sequences

| Sequence                               | Convergence | Limit   |
| -------------------------------------- | ----------- | ------- | --------- | --- |
| $a_n = \frac{1}{n}$                    | Converges   | $0$     |
| $a_n = r^n$ ($                         | r           | \lt 1$) | Converges | $0$ |
| $a_n = r^n$ ($                         | r           | \ge 1$) | Diverges  | --  |
| $a_n = \left(1 + \frac{1}{n}\right)^n$ | Converges   | $e$     |
| $a_n = \frac{n!}{n^n}$                 | Converges   | $0$     |
| $a_n = (-1)^n$                         | Diverges    | --      |
| $a_n = \sqrt{n+1} - \sqrt{n}$          | Converges   | $0$     |
| $a_n = \frac{\ln n}{n}$                | Converges   | $0$     |

### Proof: $\frac{n!}{n^n} \to 0$

Write out the terms:

$$
0 \lt \frac{n!}{n^n} = \frac{1 \cdot 2 \cdot 3 \cdots n}{n \cdot n \cdot n \cdots n} = \frac{1}{n} \cdot \frac{2}{n} \cdot \frac{3}{n} \cdots \frac{n}{n}
$$

The first $\lfloor n/2 \rfloor$ factors are each at most $\frac{1}{2}$, so:

$$
0 \lt \frac{n!}{n^n} \le \left(\frac{1}{2}\right)^{\lfloor n/2 \rfloor} \to 0
$$

By the squeeze theorem, $\frac{n!}{n^n} \to 0$.

### Proof: $\frac{\ln n}{n} \to 0$

Since $\ln n$ grows slower than any positive power of $n$, we have $\ln n \lt \sqrt{n}$ for
sufficiently large $n$. Therefore
$0 \lt \frac{\ln n}{n} \lt \frac{\sqrt{n}}{n} = \frac{1}{\sqrt{n}}$, and $\frac{1}{\sqrt{n}} \to 0$,
so by the squeeze theorem, $\frac{\ln n}{n} \to 0$.

## Series (CED BC Unit 10)

An **infinite series** is the sum of the terms of an infinite sequence:

$$
\sum_{n=1}^{\infty} a_n = a_1 + a_2 + a_3 + \cdots
$$

### Partial Sums

The $n$th partial sum is $S_n = \sum_{k=1}^{n} a_k$. The series converges if and only if the
sequence of partial sums $\{S_n\}$ converges:

$$
\sum_{n=1}^{\infty} a_n = L \iff \lim_{n \to \infty} S_n = L
$$

If $\{S_n\}$ diverges, the series diverges.

### The $n$th-Term Test (Divergence Test)

If $\displaystyle\lim_{n \to \infty} a_n \ne 0$, then $\displaystyle\sum a_n$ diverges.

**Proof (by contrapositive):** If $\sum a_n$ converges to $L$, then $S_n \to L$ and $S_{n-1} \to L$.
Since $a_n = S_n - S_{n-1}$, we get $a_n \to L - L = 0$.

**Caution:** If $\displaystyle\lim_{n \to \infty} a_n = 0$, the test is inconclusive. The series may
converge or diverge. The harmonic series $\sum \frac{1}{n}$ is the canonical counterexample.

:::info[Example]

Does $\displaystyle\sum_{n=1}^{\infty} \frac{n}{n+1}$ converge?

$$
\lim_{n \to \infty} \frac{n}{n+1} = 1 \ne 0
$$

By the $n$th-term test, the series diverges.

:::

### The Harmonic Series

$$
\sum_{n=1}^{\infty} \frac{1}{n} = 1 + \frac{1}{2} + \frac{1}{3} + \frac{1}{4} + \cdots
$$

Even though $\frac{1}{n} \to 0$, this series diverges. The proof groups terms:

$$
1 + \frac{1}{2} + \left(\frac{1}{3} + \frac{1}{4}\right) + \left(\frac{1}{5} + \frac{1}{6} + \frac{1}{7} + \frac{1}{8}\right) + \cdots
$$

Each group exceeds $\frac{1}{2}$:
$\frac{1}{3} + \frac{1}{4} \gt \frac{1}{4} + \frac{1}{4} = \frac{1}{2}$, and so on. Since we can
form infinitely many groups each exceeding $\frac{1}{2}$, the partial sums diverge to $+\infty$.

## Geometric Series (CED BC Unit 10.2)

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}, \quad |r| \lt 1
$$

The series diverges when $|r| \ge 1$.

**Derivation.** The $n$th partial sum is $S_n = a + ar + ar^2 + \cdots + ar^{n-1}$. Then:

$$
rS_n = ar + ar^2 + \cdots + ar^n
$$

$$
S_n - rS_n = a - ar^n \implies S_n(1 - r) = a(1 - r^n)
$$

$$
S_n = \frac{a(1 - r^n)}{1 - r}
$$

When $|r| \lt 1$, $r^n \to 0$, so $S_n \to \frac{a}{1 - r}$.

:::info[Example]

Evaluate $\displaystyle\sum_{n=1}^{\infty} \frac{3}{2^n}$.

Rewrite as $\displaystyle\sum_{n=1}^{\infty} 3\left(\frac{1}{2}\right)^n$. Here $a = \frac{3}{2}$
and $r = \frac{1}{2}$.

$$
\sum_{n=1}^{\infty} \frac{3}{2^n} = \frac{3/2}{1 - 1/2} = \frac{3/2}{1/2} = 3
$$

:::

### Repeating Decimals as Geometric Series

Every repeating decimal can be expressed as a rational number using geometric series.

:::info[Example]

Express $0.\overline{37}$ as a fraction.

$$
0.\overline{37} = \frac{37}{100} + \frac{37}{10000} + \frac{37}{1000000} + \cdots = \sum_{n=1}^{\infty} \frac{37}{100^n}
$$

This is a geometric series with $a = \frac{37}{100}$ and $r = \frac{1}{100}$.

$$
0.\overline{37} = \frac{37/100}{1 - 1/100} = \frac{37/100}{99/100} = \frac{37}{99}
$$

:::

## Telescoping Series

A telescoping series has terms that cancel in pairs when the partial sum is expanded.

:::info[Example]

Evaluate $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n(n+1)}$.

Use partial fractions: $\displaystyle\frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$.

$$
S_n = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1}
$$

$$
\lim_{n \to \infty} S_n = 1
$$

:::

### Worked Example: Telescoping with Partial Fractions

Evaluate $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n^2 - 1}$.

Factor: $\frac{1}{n^2-1} = \frac{1}{(n-1)(n+1)}$. By partial fractions:
$\frac{1}{(n-1)(n+1)} = \frac{1}{2}\!\left(\frac{1}{n-1} - \frac{1}{n+1}\right)$.

$$
S_N = \frac{1}{2}\left[\left(\frac{1}{1} - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{N-1} - \frac{1}{N+1}\right)\right]
$$

Most terms cancel, leaving:

$$
S_N = \frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{N} - \frac{1}{N+1}\right)
$$

$$
\lim_{N \to \infty} S_N = \frac{1}{2}\left(\frac{3}{2}\right) = \frac{3}{4}
$$

## The Integral Test (CED BC Unit 10.3)

If $f$ is continuous, positive, and decreasing on $[1, \infty)$, and $a_n = f(n)$, then:

$$
\sum_{n=1}^{\infty} a_n \quad \text{and} \quad \int_1^{\infty} f(x)\, dx
$$

either both converge or both diverge.

**Why it works.** The sum $\sum_{n=2}^{\infty} f(n)$ can be bounded by the integral:

$$
\int_1^{\infty} f(x)\, dx \le \sum_{n=1}^{\infty} f(n) \le f(1) + \int_1^{\infty} f(x)\, dx
$$

So if the integral converges, the sum is bounded above and (since terms are positive) must converge.
If the integral diverges, the sum exceeds any bound and must diverge.

### Remainder Estimate for the Integral Test

If $\sum a_n$ converges by the integral test and $R_n = S - S_n$ is the remainder after $n$ terms:

$$
\int_{n+1}^{\infty} f(x)\, dx \le R_n \le \int_n^{\infty} f(x)\, dx
$$

### $p$-Series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

- Converges if $p \gt 1$
- Diverges if $p \le 1$

This follows directly from the integral test: $\int_1^{\infty} \frac{dx}{x^p}$ converges if and only
if $p \gt 1$.

The $p$-series with $p = 1$ is the harmonic series, which diverges. This is the "boundary case" that
separates convergence from divergence.

## Comparison Tests (CED BC Unit 10.5)

### Direct Comparison Test

Suppose $0 \le a_n \le b_n$ for all $n$ (eventually):

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

**Intuition:** If a larger sum converges, the smaller one must too. If a smaller sum diverges, the
larger one must too.

### Limit Comparison Test

Suppose $a_n \gt 0$ and $b_n \gt 0$ for all $n$, and:

$$
L = \lim_{n \to \infty} \frac{a_n}{b_n}
$$

- If $0 \lt L \lt \infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.
- If $L = 0$ and $\sum b_n$ converges, then $\sum a_n$ converges.
- If $L = \infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

The case $0 \lt L \lt \infty$ is the most commonly used: it says the two series have the "same order
of magnitude," so they share the same convergence behavior.

:::info[Example]

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$ converges.

Compare with $\displaystyle\sum \frac{1}{n^2}$ (a convergent $p$-series with $p = 2$):

$$
\lim_{n \to \infty} \frac{1/(n^2+1)}{1/n^2} = \lim_{n \to \infty} \frac{n^2}{n^2 + 1} = 1
$$

Since $0 \lt 1 \lt \infty$, both series converge by the limit comparison test.

:::

### Worked Example: Choosing the Right Comparison

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{3n + 1}{n^3 - 2}$ converges.

For large $n$, $\frac{3n+1}{n^3-2} \approx \frac{3n}{n^3} = \frac{3}{n^2}$.

Compare with $\sum \frac{1}{n^2}$:

$$
\lim_{n \to \infty} \frac{(3n+1)/(n^3-2)}{1/n^2} = \lim_{n \to \infty} \frac{n^2(3n+1)}{n^3-2} = \lim_{n \to \infty} \frac{3n^3 + n^2}{n^3 - 2} = 3
$$

Since $L = 3 \in (0, \infty)$, both series converge.

## The Ratio Test (CED BC Unit 10.7)

For $\displaystyle\sum a_n$, compute:

$$
L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|
$$

- If $L \lt 1$: the series **converges absolutely**.
- If $L \gt 1$ (or $L = \infty$): the series **diverges**.
- If $L = 1$: the test is **inconclusive**.

The ratio test is especially useful when the terms involve factorials or exponentials, because the
ratio tends to simplify dramatically.

**Why it connects to geometric series.** If $\left|\frac{a_{n+1}}{a_n}\right| \to L \lt 1$, then for
large $n$ the terms behave like a geometric series with ratio $L$, and geometric series converge
when the ratio is less than 1.

:::info[Example]

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{10^n}$ converges.

$$
L = \lim_{n \to \infty} \frac{(n+1)! / 10^{n+1}}{n! / 10^n} = \lim_{n \to \infty} \frac{n+1}{10} = \infty
$$

Since $L = \infty \gt 1$, the series diverges.

:::

:::info[Example]

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converges.

$$
L = \lim_{n \to \infty} \frac{2^{n+1} / (n+1)!}{2^n / n!} = \lim_{n \to \infty} \frac{2}{n+1} = 0
$$

Since $L = 0 \lt 1$, the series converges absolutely.

:::

## The Alternating Series Test (Leibniz Test)

If $\{a_n\}$ is a sequence that satisfies:

1. $a_n \gt 0$ for all $n$ (eventually),
2. $a_{n+1} \le a_n$ for all $n$ (eventually) -- the terms decrease, and
3. $\displaystyle\lim_{n \to \infty} a_n = 0$,

then the alternating series $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ converges.

**Intuition:** The partial sums oscillate, but the oscillations shrink because the terms decrease.
The odd-indexed partial sums $S_1, S_3, S_5, \ldots$ form a decreasing sequence bounded below, and
the even-indexed partial sums $S_2, S_4, S_6, \ldots$ form an increasing sequence bounded above.
Both converge to the same limit.

### Alternating Series Estimation Theorem

If $S = \displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ is a convergent alternating series, then
the error in using $S_n$ to approximate $S$ satisfies:

$$
|R_n| = |S - S_n| \le a_{n+1}
$$

That is, the error is bounded by the first omitted term. This is remarkably useful: you can control
the error simply by counting terms.

:::info[Example]

How many terms of $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n-1}}{n}$ are needed to approximate
the sum with error less than $0.001$?

The terms are $a_n = \frac{1}{n}$, which decrease and approach 0.

We need $a_{n+1} = \frac{1}{n+1} \lt 0.001$, so $n + 1 \gt 1000$, meaning $n \ge 1000$.

At least 1000 terms are needed.

:::

## Absolute and Conditional Convergence

- **Absolutely convergent:** $\displaystyle\sum |a_n|$ converges.
- **Conditionally convergent:** $\displaystyle\sum a_n$ converges but $\displaystyle\sum |a_n|$
  diverges.

**Theorem.** If a series converges absolutely, it converges.

**Proof sketch.** $-|a_n| \le a_n \le |a_n|$, so $0 \le a_n + |a_n| \le 2|a_n|$. Since $\sum 2|a_n|$
converges, $\sum (a_n + |a_n|)$ converges by the comparison test. Therefore
$\sum a_n = \sum (a_n + |a_n|) - \sum |a_n|$ converges as the difference of two convergent series.

**Riemann rearrangement theorem.** A conditionally convergent series can be rearranged to converge
to any real number, or to diverge. This is not true for absolutely convergent series, whose sum is
invariant under rearrangement.

:::info[Example]

Classify $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$.

The alternating series converges by the alternating series test.

Check absolute convergence: $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ is the harmonic series,
which diverges.

Therefore, the series converges **conditionally**.

:::

## Power Series (CED BC Unit 10.8)

A **power series centered at $a$** is:

$$
\sum_{n=0}^{\infty} c_n(x - a)^n = c_0 + c_1(x-a) + c_2(x-a)^2 + \cdots
$$

A power series is a "polynomial with infinitely many terms." The central question for any power
series is: for which values of $x$ does it converge?

### Interval and Radius of Convergence

Every power series converges in an interval $(a - R, a + R)$ where $R$ is the **radius of
convergence**:

- Use the ratio test to find $R$: $\displaystyle R = \frac{1}{\lim_{n \to \infty} |c_{n+1}/c_n|}$.
- Check the endpoints separately (the ratio test is inconclusive when $L = 1$).

| Case                 | Interval of Convergence             |
| -------------------- | ----------------------------------- |
| $R = 0$              | Single point $\{a\}$                |
| $R = \infty$         | $(-\infty, \infty)$                 |
| $0 \lt R \lt \infty$ | Check endpoints of $(a - R, a + R)$ |

:::info[Example]

Find the interval of convergence for $\displaystyle\sum_{n=0}^{\infty} \frac{(x - 2)^n}{n!}$.

Apply the ratio test:

$$
L = \lim_{n \to \infty} \left|\frac{(x-2)^{n+1}/(n+1)!}{(x-2)^n/n!}\right| = \lim_{n \to \infty} \frac{|x-2|}{n+1} = 0
$$

Since $L = 0 \lt 1$ for all $x$, the series converges for all real numbers. The interval of
convergence is $(-\infty, \infty)$ with $R = \infty$.

:::

:::info[Example]

Find the interval of convergence for $\displaystyle\sum_{n=1}^{\infty} \frac{(x-1)^n}{n}$.

$$
L = \lim_{n \to \infty} \left|\frac{(x-1)^{n+1}/(n+1)}{(x-1)^n/n}\right| = |x - 1| \cdot \lim_{n \to \infty} \frac{n}{n+1} = |x - 1|
$$

Converges when $|x - 1| \lt 1$, i.e., $0 \lt x \lt 2$. Radius $R = 1$.

**Check $x = 0$:** $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n}$ converges (alternating
series).

**Check $x = 2$:** $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n}$ diverges (harmonic series).

Interval of convergence: $[0, 2)$.

:::

### Term-by-Term Differentiation and Integration

If $\displaystyle f(x) = \sum_{n=0}^{\infty} c_n(x-a)^n$ with radius $R$, then:

$$
f'(x) = \sum_{n=1}^{\infty} n c_n (x-a)^{n-1}, \quad \text{same radius } R
$$

$$
\int f(x)\, dx = C + \sum_{n=0}^{\infty} \frac{c_n (x-a)^{n+1}}{n+1}, \quad \text{same radius } R
$$

Differentiation and integration of power series do not change the radius of convergence (though the
behaviour at the endpoints may change).

## Taylor and Maclaurin Series (CED BC Unit 10.11)

The **Taylor series** of $f$ centered at $a$ is:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n
$$

When $a = 0$, this is called a **Maclaurin series**.

### Why Taylor Series Work

The Taylor polynomial $T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$ is the unique
polynomial of degree $\le n$ whose value and first $n$ derivatives at $x = a$ match those of $f$. As
$n \to \infty$, if the remainder $R_n(x) = f(x) - T_n(x) \to 0$, then the Taylor series converges to
$f(x)$.

### Common Maclaurin Series

$$
e^x = \sum_{n=0}^{\infty} \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots, \quad R = \infty
$$

$$
\sin x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots, \quad R = \infty
$$

$$
\cos x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots, \quad R = \infty
$$

$$
\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots, \quad R = 1
$$

$$
\ln(1+x) = \sum_{n=1}^{\infty} \frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots, \quad R = 1
$$

$$
(1+x)^k = \sum_{n=0}^{\infty} \binom{k}{n} x^n, \quad R = 1
$$

$$
\arctan x = \sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1} = x - \frac{x^3}{3} + \frac{x^5}{5} - \cdots, \quad R = 1
$$

### Taylor's Inequality (Remainder Estimation)

The remainder after $n$ terms of the Taylor series satisfies:

$$
|R_n(x)| \le \frac{M|x - a|^{n+1}}{(n+1)!}
$$

where $M$ is an upper bound for $|f^{(n+1)}(z)|$ for $z$ between $a$ and $x$.

:::info[Example]

Use the Maclaurin series for $e^x$ to approximate $e^{0.1}$ with error less than $10^{-8}$.

$$
e^{0.1} = \sum_{n=0}^{N} \frac{(0.1)^n}{n!} + R_N
$$

We need $|R_N| \le \frac{M \cdot (0.1)^{N+1}}{(N+1)!} \lt 10^{-8}$.

Since $f^{(n+1)}(x) = e^x \le e^{0.1} \lt 1.2$ for $x \in [0, 0.1]$:

$$
\frac{1.2 \cdot (0.1)^{N+1}}{(N+1)!} \lt 10^{-8}
$$

For $N = 3$: $\displaystyle\frac{1.2 \cdot 10^{-4}}{24} = 5 \times 10^{-6}$ (too large).

For $N = 5$: $\displaystyle\frac{1.2 \cdot 10^{-6}}{720} \approx 1.67 \times 10^{-9} \lt 10^{-8}$.

So using 6 terms (up to $n = 5$):

$$
e^{0.1} \approx 1 + 0.1 + \frac{0.01}{2} + \frac{0.001}{6} + \frac{10^{-4}}{24} + \frac{10^{-5}}{120} \approx 1.1051708
$$

:::

### Deriving Maclaurin Series by Substitution

You do not need to compute derivatives from scratch every time. If you know the series for $e^u$,
you can substitute $u = -x^2$ to get the series for $e^{-x^2}$.

:::info[Example]

Find the Maclaurin series for $\cos(x^2)$.

Substitute $u = x^2$ into the series for $\cos u$:

$$
\cos(x^2) = \sum_{n=0}^{\infty} \frac{(-1)^n (x^2)^{2n}}{(2n)!} = \sum_{n=0}^{\infty} \frac{(-1)^n x^{4n}}{(2n)!} = 1 - \frac{x^4}{2!} + \frac{x^8}{4!} - \cdots
$$

:::

## Operations on Power Series

### Multiplication of Power Series

If $\sum a_n x^n$ and $\sum b_n x^n$ both have radius $R$, then their Cauchy product also has radius
$R$:

$$
\left(\sum_{n=0}^{\infty} a_n x^n\right)\!\left(\sum_{n=0}^{\infty} b_n x^n\right) = \sum_{n=0}^{\infty} c_n x^n
$$

where $c_n = \sum_{k=0}^{n} a_k b_{n-k}$.

:::info[Example]

Find the Maclaurin series for $e^x \sin x$ up to the $x^5$ term.

$$
e^x = 1 + x + \frac{x^2}{2} + \frac{x^3}{6} + \frac{x^4}{24} + \cdots
$$

$$
\sin x = x - \frac{x^3}{6} + \frac{x^5}{120} - \cdots
$$

Multiplying and collecting terms up to $x^5$:

$$
e^x \sin x = x + x^2 + \frac{x^3}{3} - \frac{x^5}{30} + \cdots
$$

:::

### Integration of Power Series

:::info[Example]

Find the Maclaurin series for $\ln(1 + x)$ by integrating the geometric series.

$$
\frac{1}{1 - (-x)} = \sum_{n=0}^{\infty} (-x)^n = \sum_{n=0}^{\infty} (-1)^n x^n, \quad |x| \lt 1
$$

Integrate term by term:

$$
\int_0^x \frac{1}{1 + t}\, dt = \sum_{n=0}^{\infty} (-1)^n \int_0^x t^n\, dt = \sum_{n=0}^{\infty} \frac{(-1)^n x^{n+1}}{n+1}
$$

$$
\ln(1 + x) = \sum_{n=0}^{\infty} \frac{(-1)^n x^{n+1}}{n+1} = \sum_{n=1}^{\infty} \frac{(-1)^{n-1} x^n}{n}, \quad |x| \lt 1
$$

:::

## Common Pitfalls

1. **Confusing sequences and series.** A sequence is a list; a series is a sum. A convergent
   sequence does not imply a convergent series (e.g., $a_n = \frac{1}{n}$ converges to 0, but
   $\sum \frac{1}{n}$ diverges).

2. **Using the $n$th-term test incorrectly.** $\lim a_n = 0$ does not prove convergence (e.g.,
   harmonic series). The test only detects divergence.

3. **Forgetting to check endpoints** of the interval of convergence for power series. The ratio test
   always gives $L = 1$ at the endpoints, so you must use a different test.

4. **Misidentifying the center** of a Taylor series. For $\sum c_n(x - 3)^n$, the center is $a = 3$.

5. **Applying the ratio test when $L = 1$.** The test is inconclusive; use a different test
   (comparison, integral, alternating series).

6. **Confusing absolute and conditional convergence.** An alternating harmonic series converges
   conditionally, not absolutely. Only absolutely convergent series can be freely rearranged.

7. **Computing Taylor series coefficients incorrectly.** Always use $c_n = \frac{f^{(n)}(a)}{n!}$,
   not just $f^{(n)}(a)$. Forgetting to divide by $n!$ is a common mistake.

8. **Assuming convergence at endpoints.** The interval of convergence may be open, closed, or
   half-open at each endpoint. You must test each one individually.

## Practice Questions

1. Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{2^n}{n!}$ converges or diverges.

2. Find the interval of convergence for $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^n}{3^n}$.

3. Find the Maclaurin series for $f(x) = x e^x$.

4. How many terms of $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n^2}$ are needed to approximate
   the sum with error less than $0.01$?

5. Use the limit comparison test to determine whether
   $\displaystyle\sum_{n=1}^{\infty} \frac{5}{2n^2 - 3n + 1}$ converges.

6. Find the Taylor series for $\ln x$ centered at $a = 1$ and determine its radius of convergence.

7. Find the Maclaurin series for $\arctan x$ by integrating the geometric series.

8. Use the Maclaurin series for $\cos x$ to approximate $\cos(0.2)$ with error less than $10^{-6}$.

9. Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{n}{e^n}$ converges using the ratio
   test.

10. Find the Maclaurin series for $\frac{x}{1-x^2}$ and determine its interval of convergence.

11. Express $0.\overline{271}$ as a fraction using geometric series.

12. Use the alternating series estimation theorem to bound the error in approximating
    $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{n^3}$ by its first 10 terms.
