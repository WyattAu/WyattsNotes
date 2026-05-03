---
title: Sequences and Series -- Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for sequences and series covering Maclaurin convergence, telescoping, method of differences, and sigma notation.
slug: diag-sequences-series
hide_table_of_contents: true
---

# Sequences and Series — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for sequences and series.

### UT-1: Method of Differences — Telescoping Series

**Question:**

**(a)** Express $\dfrac{1}{r(r+1)}$ in partial fractions.

**(b)** Hence find the sum $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+1)}$.

**(c)** A student claims that $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+2)}$ telescopes in the same way. Determine whether this is true, and if not, find the correct sum.

[Difficulty: hard. Tests telescoping series with non-adjacent denominators, a common stumbling block.]

**Solution:**

**(a)**

$$\frac{1}{r(r+1)} = \frac{A}{r} + \frac{B}{r+1}$$

$$1 = A(r+1) + Br \implies A = 1, \; A + B = 0 \implies B = -1$$

$$\frac{1}{r(r+1)} = \frac{1}{r} - \frac{1}{r+1}$$

**(b)**

$$\sum_{r=1}^{n} \left(\frac{1}{r} - \frac{1}{r+1}\right) = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{n+1} = \frac{n}{n+1}$$

**(c)** The student is incorrect. $\dfrac{1}{r(r+2)}$ does not telescope the same way because the gap between denominators is 2.

$$\frac{1}{r(r+2)} = \frac{1}{2}\left(\frac{1}{r} - \frac{1}{r+2}\right)$$

$$\sum_{r=1}^{n} \frac{1}{r(r+2)} = \frac{1}{2}\left[\left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+2}\right)\right]$$

Terms with denominators $3, 4, \ldots, n$ cancel partially. The surviving terms are:

$$\frac{1}{2}\left(1 + \frac{1}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right) = \frac{1}{2}\left(\frac{3}{2} - \frac{2n+3}{(n+1)(n+2)}\right) = \frac{3}{4} - \frac{2n+3}{2(n+1)(n+2)}$$

---

### UT-2: Binomial Expansion — Non-Integer Power Validity

**Question:**

**(a)** Find the binomial expansion of $(1 + 3x)^{-1/3}$ up to and including the term in $x^3$.

**(b)** State the range of values of $x$ for which the expansion is valid.

**(c)** Use the expansion to find an approximation for $\dfrac{1}{\sqrt[3]{1.03}}$, giving your answer to 5 decimal places.

[Difficulty: hard. Tests binomial expansion with fractional exponent, validity range, and numerical application.]

**Solution:**

**(a)** Using $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$ with $n = -\frac{1}{3}$ and replacing $x$ with $3x$:

$$(1 + 3x)^{-1/3} = 1 + \left(-\frac{1}{3}\right)(3x) + \frac{\left(-\frac{1}{3}\right)\left(-\frac{4}{3}\right)}{2}(3x)^2 + \frac{\left(-\frac{1}{3}\right)\left(-\frac{4}{3}\right)\left(-\frac{7}{3}\right)}{6}(3x)^3$$

$$= 1 - x + \frac{\frac{4}{9}}{2} \cdot 9x^2 + \frac{-\frac{28}{81}}{6} \cdot 27x^3$$

$$= 1 - x + 2x^2 - \frac{28}{81} \cdot \frac{27}{6}x^3 = 1 - x + 2x^2 - \frac{14}{9}x^3$$

**(b)** The expansion is valid when $|3x| \lt 1$, i.e., $|x| \lt \dfrac{1}{3}$.

**(c)** $\dfrac{1}{\sqrt[3]{1.03}} = (1 + 0.03)^{-1/3}$. Here $x = 0.03$, which satisfies $|x| \lt \frac{1}{3}$.

$$(1 + 0.03)^{-1/3} \approx 1 - 0.03 + 2(0.03)^2 - \frac{14}{9}(0.03)^3$$

$$= 1 - 0.03 + 2(0.0009) - \frac{14}{9}(0.000027)$$

$$= 1 - 0.03 + 0.0018 - 0.000042 = 0.971758$$

To 5 decimal places: $0.97176$.

---

## Integration Tests

> Tests synthesis of sequences and series with other topics.

### IT-1: Term-by-Term Differentiation of a Series (with Differentiation)

**Question:**

**(a)** Differentiate both sides of the identity $\displaystyle\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n$ for $|x| \lt 1$ with respect to $x$, and hence find $\displaystyle\sum_{n=1}^{\infty} nx^{n-1}$.

**(b)** Use your result to find the exact value of $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n}$.

[Difficulty: hard. Combines infinite series with differentiation to derive new summation formulas.]

**Solution:**

**(a)** Differentiating the LHS: $\dfrac{d}{dx}\!\left(\dfrac{1}{1-x}\right) = \dfrac{1}{(1-x)^2}$.

Differentiating the RHS term-by-term: $\dfrac{d}{dx}\!\left(\sum_{n=0}^{\infty} x^n\right) = \sum_{n=1}^{\infty} nx^{n-1}$.

Therefore:

$$\sum_{n=1}^{\infty} nx^{n-1} = \frac{1}{(1-x)^2} \quad \text{for } |x| \lt 1$$

**(b)** We need $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n} = \sum_{n=1}^{\infty} n\left(\frac{1}{2}\right)^n$.

Note that $\displaystyle\sum_{n=1}^{\infty} nx^{n-1} = \frac{1}{(1-x)^2}$ with $x = \frac{1}{2}$:

$$\sum_{n=1}^{\infty} n\left(\frac{1}{2}\right)^{n-1} = \frac{1}{\left(1 - \frac{1}{2}\right)^2} = \frac{1}{1/4} = 4$$

Our target sum is:

$$\sum_{n=1}^{\infty} \frac{n}{2^n} = \frac{1}{2}\sum_{n=1}^{\infty} n\left(\frac{1}{2}\right)^{n-1} = \frac{1}{2} \times 4 = 2$$
