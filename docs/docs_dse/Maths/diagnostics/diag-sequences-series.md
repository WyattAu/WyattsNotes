---
title: Sequences and Series — Diagnostic Tests
description: "Diagnostic tests for DSE Sequences and Series: arithmetic and geometric progressions, sigma notation, convergence, and recurrence relations."
slug: diag-sequences-series
hide_table_of_contents: true
---

# Sequences and Series — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for sequences and series.

### UT-1: Geometric Series Convergence Condition

**Question:**

For what values of $x$ does the geometric series $\displaystyle\sum_{n=1}^{\infty} \frac{3x^n}{4^n}$ converge? Find its sum when it does.

**Solution:**

The series is $\displaystyle\sum_{n=1}^{\infty} 3\left(\frac{x}{4}\right)^n$.

This is a geometric series with first term $a = \dfrac{3x}{4}$ and common ratio $r = \dfrac{x}{4}$.

It converges if and only if $|r| \lt 1$:

$$\left|\frac{x}{4}\right| \lt 1 \implies |x| \lt 4 \implies -4 \lt x \lt 4$$

When it converges:

$$S_\infty = \frac{a}{1 - r} = \frac{\dfrac{3x}{4}}{1 - \dfrac{x}{4}} = \frac{3x}{4 - x}$$

A common mistake is writing $r = \dfrac{3x}{4}$ instead of $r = \dfrac{x}{4}$, confusing the first term with the ratio.

---

### UT-2: Sigma Notation Index Shifting

**Question:**

Express $\displaystyle\sum_{k=3}^{n+2} (k - 2)^2$ in terms of $n$, without sigma notation.

**Solution:**

Let $j = k - 2$. When $k = 3$, $j = 1$. When $k = n + 2$, $j = n$.

$$\sum_{k=3}^{n+2} (k - 2)^2 = \sum_{j=1}^{n} j^2 = \frac{n(n+1)(2n+1)}{6}$$

---

### UT-3: Recurrence Relation to Closed Form

**Question:**

A sequence is defined by $u_1 = 3$ and $u_{n+1} = 2u_n - 1$ for $n \geq 1$. Find $u_n$ in closed form.

**Solution:**

Let $v_n = u_n - c$ for some constant $c$ to eliminate the $-1$ term.

$u_{n+1} - c = 2(u_n - c) \implies u_{n+1} = 2u_n - c$.

We need $-c = -1 \implies c = 1$.

So $v_n = u_n - 1$ and $v_{n+1} = 2v_n$.

$v_1 = u_1 - 1 = 2$.

$v_n = 2 \cdot 2^{n-1} = 2^n$.

$u_n = v_n + 1 = 2^n + 1$.

---

### UT-4: Arithmetic-Geometric Series Trap

**Question:**

Find the sum of the first $n$ terms of the sequence: $2, 4, 8, 14, 22, 32, \ldots$

**Solution:**

The first differences are: $2, 4, 6, 8, 10, \ldots$ (arithmetic with $d = 2$).

The second differences are constant at $2$, confirming a quadratic sequence.

Let $u_n = an^2 + bn + c$.

$u_1 = a + b + c = 2$
$u_2 = 4a + 2b + c = 4$
$u_3 = 9a + 3b + c = 8$

(2) - (1): $3a + b = 2$
(3) - (2): $5a + b = 4$

Subtracting: $2a = 2 \implies a = 1$. Then $b = -1$. Then $c = 2$.

$u_n = n^2 - n + 2$.

$S_n = \displaystyle\sum_{k=1}^{n} (k^2 - k + 2) = \dfrac{n(n+1)(2n+1)}{6} - \dfrac{n(n+1)}{2} + 2n$

$= \dfrac{n(n+1)(2n+1) - 3n(n+1) + 12n}{6} = \dfrac{n(n+1)(2n - 2) + 12n}{6}$

$= \dfrac{2n(n+1)(n-1) + 12n}{6} = \dfrac{n[(n+1)(n-1) \cdot 2 + 12]}{6}$

$= \dfrac{n(2n^2 - 2 + 12)}{6} = \dfrac{n(2n^2 + 10)}{6} = \dfrac{n(n^2 + 5)}{3}$

---

### UT-5: Sum of Geometric Series with Fractional Powers

**Question:**

Find the sum of the geometric series $\sqrt{2} + 1 + \dfrac{1}{\sqrt{2}} + \dfrac{1}{2} + \cdots$ to infinity.

**Solution:**

First term: $a = \sqrt{2}$.

Common ratio: $r = \dfrac{1}{\sqrt{2}} = \dfrac{\sqrt{2}}{2}$.

$|r| = \dfrac{\sqrt{2}}{2} \approx 0.707 \lt 1$, so the series converges.

$$S_\infty = \frac{a}{1 - r} = \frac{\sqrt{2}}{1 - \frac{\sqrt{2}}{2}} = \frac{\sqrt{2}}{\frac{2 - \sqrt{2}}{2}} = \frac{2\sqrt{2}}{2 - \sqrt{2}}$$

Rationalise:

$$= \frac{2\sqrt{2}(2 + \sqrt{2})}{(2 - \sqrt{2})(2 + \sqrt{2})} = \frac{4\sqrt{2} + 4}{4 - 2} = \frac{4\sqrt{2} + 4}{2} = 2\sqrt{2} + 2$$

---

## Integration Tests

> Tests synthesis of sequences and series with other topics.

### IT-1: Sequences and Logarithms (with Logarithms)

**Question:**

The first three terms of a geometric sequence are $\log_2 3$, $\log_2 9$, $\log_2 27$. Find the common ratio and the sum of the first 10 terms.

**Solution:**

$r = \dfrac{\log_2 9}{\log_2 3} = \dfrac{\log_2 3^2}{\log_2 3} = \dfrac{2\log_2 3}{\log_2 3} = 2$.

Verify: $\dfrac{\log_2 27}{\log_2 9} = \dfrac{\log_2 3^3}{\log_2 3^2} = \dfrac{3}{2} \neq 2$.

Wait -- this is inconsistent. Let me recheck.

$\log_2 9 = \log_2 3^2 = 2\log_2 3$.

$\log_2 27 = \log_2 3^3 = 3\log_2 3$.

Ratio: $\dfrac{2\log_2 3}{\log_2 3} = 2$ and $\dfrac{3\log_2 3}{2\log_2 3} = \dfrac{3}{2}$.

Since the ratio is not constant, this is **not** a geometric sequence. The terms are $\log_2 3$, $2\log_2 3$, $3\log_2 3$, which form an arithmetic sequence with $d = \log_2 3$.

This question tests the misconception of assuming a geometric sequence from the pattern of arguments. The correct interpretation: it is arithmetic.

$S_{10} = \dfrac{10}{2}[2\log_2 3 + 9\log_2 3] = 5 \times 11\log_2 3 = 55\log_2 3$.

---

### IT-2: Sequences and Inequalities (with Inequalities)

**Question:**

Let $S_n = \dfrac{1}{2} + \dfrac{1}{4} + \dfrac{1}{8} + \cdots + \dfrac{1}{2^n}$. Find the smallest value of $n$ such that $S_\infty - S_n < 10^{-6}$.

**Solution:**

$S_\infty = \dfrac{\frac{1}{2}}{1 - \frac{1}{2}} = 1$.

$S_n = \dfrac{\frac{1}{2}\left(1 - \frac{1}{2^n}\right)}{1 - \frac{1}{2}} = 1 - \dfrac{1}{2^n}$.

$S_\infty - S_n = \dfrac{1}{2^n}$.

$\dfrac{1}{2^n} < 10^{-6}$

$2^n > 10^6$

$n\log_{10} 2 > 6$

$n > \dfrac{6}{\log_{10} 2} \approx \dfrac{6}{0.3010} \approx 19.93$

The smallest integer $n$ is $20$.

---

### IT-3: Sequences and Combinatorics (with Combinatorics)

**Question:**

Consider the expansion of $(1 + x)^n$. The coefficient of $x^2$ equals the coefficient of $x^5$. Find the sum of the coefficients in the expansion.

**Solution:**

Coefficient of $x^2$: $\dbinom{n}{2} = \dfrac{n(n-1)}{2}$.

Coefficient of $x^5$: $\dbinom{n}{5} = \dfrac{n(n-1)(n-2)(n-3)(n-4)}{120}$.

Setting equal:

$$\frac{n(n-1)}{2} = \frac{n(n-1)(n-2)(n-3)(n-4)}{120}$$

Since $n \geq 5$ (otherwise $\dbinom{n}{5} = 0$), we can cancel $n(n-1)$:

$$\frac{1}{2} = \frac{(n-2)(n-3)(n-4)}{120}$$

$$(n-2)(n-3)(n-4) = 60$$

By inspection: $n = 7$ gives $5 \times 4 \times 3 = 60$. Check.

Sum of coefficients = $(1 + 1)^7 = 2^7 = 128$.
