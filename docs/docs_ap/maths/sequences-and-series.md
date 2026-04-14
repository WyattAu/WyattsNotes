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

A **sequence** is an ordered list of numbers: $a_1, a_2, a_3, \ldots$. A sequence $\{a_n\}$
**converges** to a limit $L$ if:

$$
\lim_{n \to \infty} a_n = L
$$

If no such limit exists, the sequence **diverges**.

### Bounded and Monotone Sequences

- **Bounded above:** $a_n \le M$ for all $n$ and some $M$.
- **Bounded below:** $a_n \ge m$ for all $n$ and some $m$.
- **Monotone increasing:** $a_{n+1} \ge a_n$ for all $n$.
- **Monotone decreasing:** $a_{n+1} \le a_n$ for all $n$.

**Monotone Convergence Theorem.** Every bounded monotone sequence converges.

### Common Sequences

| Sequence                               | Convergence | Limit   |
| -------------------------------------- | ----------- | ------- | --------- | --- |
| $a_n = \frac{1}{n}$                    | Converges   | $0$     |
| $a_n = r^n$ ($                         | r           | \lt 1$) | Converges | $0$ |
| $a_n = r^n$ ($                         | r           | \ge 1$) | Diverges  | --  |
| $a_n = \left(1 + \frac{1}{n}\right)^n$ | Converges   | $e$     |
| $a_n = \frac{n!}{n^n}$                 | Converges   | $0$     |
| $a_n = (-1)^n$                         | Diverges    | --      |

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

### The $n$th-Term Test (Divergence Test)

If $\displaystyle\lim_{n \to \infty} a_n \ne 0$, then $\displaystyle\sum a_n$ diverges.

**Caution:** If $\displaystyle\lim_{n \to \infty} a_n = 0$, the test is inconclusive. The series may
converge or diverge.

:::info[Example]

Does $\displaystyle\sum_{n=1}^{\infty} \frac{n}{n+1}$ converge?

$$
\lim_{n \to \infty} \frac{n}{n+1} = 1 \ne 0
$$

By the $n$th-term test, the series diverges.

:::

## Geometric Series (CED BC Unit 10.2)

$$
\sum_{n=0}^{\infty} ar^n = \frac{a}{1 - r}, \quad |r| \lt 1
$$

The series diverges when $|r| \ge 1$.

:::info[Example]

Evaluate $\displaystyle\sum_{n=1}^{\infty} \frac{3}{2^n}$.

Rewrite as $\displaystyle\sum_{n=1}^{\infty} 3\left(\frac{1}{2}\right)^n$. Here $a = \frac{3}{2}$
and $r = \frac{1}{2}$.

$$
\sum_{n=1}^{\infty} \frac{3}{2^n} = \frac{3/2}{1 - 1/2} = \frac{3/2}{1/2} = 3
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

## The Integral Test (CED BC Unit 10.3)

If $f$ is continuous, positive, and decreasing on $[1, \infty)$, and $a_n = f(n)$, then:

$$
\sum_{n=1}^{\infty} a_n \quad \text{and} \quad \int_1^{\infty} f(x)\, dx
$$

either both converge or both diverge.

### $p$-Series

$$
\sum_{n=1}^{\infty} \frac{1}{n^p}
$$

- Converges if $p \gt 1$
- Diverges if $p \le 1$

This follows directly from the integral test.

## Comparison Tests (CED BC Unit 10.5)

### Direct Comparison Test

Suppose $0 \le a_n \le b_n$ for all $n$:

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

### Limit Comparison Test

Suppose $a_n \gt 0$ and $b_n \gt 0$ for all $n$, and:

$$
L = \lim_{n \to \infty} \frac{a_n}{b_n}
$$

- If $0 \lt L \lt \infty$, then $\sum a_n$ and $\sum b_n$ either both converge or both diverge.
- If $L = 0$ and $\sum b_n$ converges, then $\sum a_n$ converges.
- If $L = \infty$ and $\sum b_n$ diverges, then $\sum a_n$ diverges.

:::info[Example]

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$ converges.

Compare with $\displaystyle\sum \frac{1}{n^2}$ (a convergent $p$-series with $p = 2$):

$$
\lim_{n \to \infty} \frac{1/(n^2+1)}{1/n^2} = \lim_{n \to \infty} \frac{n^2}{n^2 + 1} = 1
$$

Since $0 \lt 1 \lt \infty$, both series converge by the limit comparison test.

:::

## The Ratio Test (CED BC Unit 10.7)

For $\displaystyle\sum a_n$, compute:

$$
L = \lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right|
$$

- If $L \lt 1$: the series **converges absolutely**.
- If $L \gt 1$ (or $L = \infty$): the series **diverges**.
- If $L = 1$: the test is **inconclusive**.

The ratio test is especially useful when the terms involve factorials or exponentials.

:::info[Example]

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{n!}{10^n}$ converges.

$$
L = \lim_{n \to \infty} \frac{(n+1)! / 10^{n+1}}{n! / 10^n} = \lim_{n \to \infty} \frac{n+1}{10} = \infty
$$

Since $L = \infty \gt 1$, the series diverges.

:::

## The Alternating Series Test (Leibniz Test)

If $\{a_n\}$ is a sequence that satisfies:

1. $a_n \gt 0$ for all $n$ (eventually),
2. $a_{n+1} \le a_n$ for all $n$ (eventually) -- the terms decrease, and
3. $\displaystyle\lim_{n \to \infty} a_n = 0$,

then the alternating series $\displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ converges.

### Alternating Series Estimation Theorem

If $S = \displaystyle\sum_{n=1}^{\infty} (-1)^{n-1} a_n$ is a convergent alternating series, then
the error in using $S_n$ to approximate $S$ satisfies:

$$
|R_n| = |S - S_n| \le a_{n+1}
$$

That is, the error is bounded by the first omitted term.

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

### Interval and Radius of Convergence

Every power series converges in an interval $(a - R, a + R)$ where $R$ is the **radius of
convergence**:

- Use the ratio test to find $R$: $\displaystyle R = \frac{1}{\lim_{n \to \infty} |c_{n+1}/c_n|}$.
- Check the endpoints separately.

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

## Taylor and Maclaurin Series (CED BC Unit 10.11)

The **Taylor series** of $f$ centered at $a$ is:

$$
f(x) = \sum_{n=0}^{\infty} \frac{f^{(n)}(a)}{n!}(x - a)^n
$$

When $a = 0$, this is called a **Maclaurin series**.

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

## Operations on Power Series

Power series can be added, subtracted, multiplied, and differentiated/integrated term by term within
their interval of convergence.

### Differentiation and Integration of Power Series

If $\displaystyle f(x) = \sum_{n=0}^{\infty} c_n(x-a)^n$ with radius $R$, then:

$$
f'(x) = \sum_{n=1}^{\infty} n c_n (x-a)^{n-1}, \quad \text{same radius } R
$$

$$
\int f(x)\, dx = C + \sum_{n=0}^{\infty} \frac{c_n (x-a)^{n+1}}{n+1}, \quad \text{same radius } R
$$

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
   sequence does not imply a convergent series.
2. **Using the $n$th-term test incorrectly.** $\lim a_n = 0$ does not prove convergence (e.g.,
   harmonic series).
3. **Forgetting to check endpoints** of the interval of convergence for power series.
4. **Misidentifying the center** of a Taylor series. For $\sum c_n(x - 3)^n$, the center is $a = 3$.
5. **Applying the ratio test when $L = 1$.** The test is inconclusive; use a different test.
6. **Confusing absolute and conditional convergence.** An alternating harmonic series converges
   conditionally, not absolutely.
7. **Computing Taylor series coefficients incorrectly.** Always use $c_n = \frac{f^{(n)}(a)}{n!}$,
   not just $f^{(n)}(a)$.

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
