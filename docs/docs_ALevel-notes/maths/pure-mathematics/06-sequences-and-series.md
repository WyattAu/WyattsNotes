---
title: Sequences and Series
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: sequences-and-series
---

## Board Coverage

| Board      | Paper      | Notes                                                                |
| ---------- | ---------- | -------------------------------------------------------------------- |
| AQA        | Paper 1, 2 | Arithmetic and geometric sequences, sigma notation                   |
| Edexcel    | P1, P2     | Same; recurrence relations in P2                                     |
| OCR (A)    | Paper 1    | Arithmetic and geometric progressions                                |
| CIE (9709) | P1, P3     | Sequences and series; P3 includes $\Sigma$ notation more extensively |

---

## 1. Sequences and Series: Definitions

**Definition.** A _sequence_ is an ordered list of numbers $(a_1, a_2, a_3, \ldots)$. We write $(a_n)_{n=1}^{\infty}$ or simply $(a_n)$.

**Definition.** A _series_ is the sum of the terms of a sequence: $\sum_{n=1}^{N} a_n = a_1 + a_2 + \cdots + a_N$.

**Definition.** A sequence defined by $a_{n+1} = f(a_n)$ with an initial value $a_1$ is a _recurrence relation_ (or _iterative sequence_).

---

## 2. Arithmetic Sequences

**Definition.** An _arithmetic sequence_ (arithmetic progression, AP) is a sequence where each term differs from the previous by a constant $d$ (the _common difference_):

$$a_{n+1} = a_n + d$$

### 2.1 The $n$th Term

**Theorem.** The $n$th term of an arithmetic sequence with first term $a$ and common difference $d$ is:

$$a_n = a + (n - 1)d$$

_Proof._ By induction on $n$.

Base case ($n = 1$): $a_1 = a + 0 \cdot d = a$. ✓

Inductive step: Assume $a_k = a + (k - 1)d$. Then:

$$a_{k+1} = a_k + d = a + (k - 1)d + d = a + kd$$

This matches the formula for $n = k + 1$. $\blacksquare$

### 2.2 Sum of an Arithmetic Series

**Theorem.** The sum of the first $n$ terms of an arithmetic sequence is:

$$S_n = \frac{n}{2}(2a + (n - 1)d) = \frac{n}{2}(a + \ell)$$

where $\ell = a_n = a + (n - 1)d$ is the last term.

_Proof (Pairing Method)._ Write out the sum twice, once forwards and once backwards:

$$
\begin{aligned}
S_n &= a + (a + d) + (a + 2d) + \cdots + (a + (n-1)d) \\
S_n &= (a + (n-1)d) + (a + (n-2)d) + \cdots + a
\end{aligned}
$$

Adding vertically, each pair sums to $2a + (n-1)d$, and there are $n$ such pairs:

$$2S_n = n(2a + (n - 1)d)$$

$$S_n = \frac{n}{2}(2a + (n - 1)d) \quad \blacksquare$$

_Intuition._ Gauss supposedly used this method as a child to sum $1 + 2 + \cdots + 100 = 5050$. Pair the first and last, second and second-to-last, etc. Each pair sums to the same value.

<details>
<summary>Example</summary>
Find the sum of the first 20 terms of $3, 7, 11, 15, \ldots$

Here $a = 3$, $d = 4$, $n = 20$.

$$S_{20} = \frac{20}{2}(2 \times 3 + 19 \times 4) = 10(6 + 76) = 10 \times 82 = 820$$
</details>

---

## 3. Geometric Sequences

**Definition.** A _geometric sequence_ (geometric progression, GP) is a sequence where each term is a constant multiple $r$ (the _common ratio_) of the previous term:

$$a_{n+1} = a_n \cdot r$$

### 3.1 The $n$th Term

**Theorem.** The $n$th term of a geometric sequence with first term $a$ and common ratio $r$ is:

$$a_n = ar^{n-1}$$

_Proof._ By induction.

Base case: $a_1 = ar^0 = a$. ✓

Inductive step: $a_{k+1} = a_k \cdot r = ar^{k-1} \cdot r = ar^k$. ✓ $\blacksquare$

### 3.2 Sum of a Finite Geometric Series

**Theorem.** For $r \neq 1$:

$$S_n = a\frac{1 - r^n}{1 - r} = a\frac{r^n - 1}{r - 1}$$

_Proof._ Write:

$$
\begin{aligned}
S_n &= a + ar + ar^2 + \cdots + ar^{n-1} \\
rS_n &= ar + ar^2 + ar^3 + \cdots + ar^n
\end{aligned}
$$

Subtracting: $S_n - rS_n = a - ar^n$

$$S_n(1 - r) = a(1 - r^n)$$

$$S_n = \frac{a(1 - r^n)}{1 - r} \quad \blacksquare$$

_Intuition (Self-Similarity)._ Multiplying the sum by $r$ shifts every term one position to the right. The original sum and the shifted sum overlap almost completely — the difference is just the first term minus the new last term. This "shift and subtract" idea is the same principle behind many iterative algorithms.

### 3.3 Sum to Infinity

**Theorem.** If $|r| < 1$, the infinite geometric series converges, and:

$$S_\infty = \sum_{n=1}^{\infty} ar^{n-1} = \frac{a}{1 - r}$$

_Proof._ From $S_n = \frac{a(1 - r^n)}{1 - r}$, we take the limit as $n \to \infty$.

Since $|r| < 1$, we have $\lim_{n \to \infty} r^n = 0$ (a standard limit; see below).

$$S_\infty = \lim_{n \to \infty} S_n = \frac{a(1 - 0)}{1 - r} = \frac{a}{1 - r} \quad \blacksquare$$

**Lemma.** If $|r| < 1$, then $\lim_{n \to \infty} r^n = 0$.

_Proof._ Write $r^n = e^{n \ln|r|}$. Since $|r| < 1$, we have $\ln|r| < 0$. As $n \to \infty$, $n \ln|r| \to -\infty$, so $e^{n \ln|r|} \to 0$. $\blacksquare$

**Theorem.** If $|r| \geq 1$, the geometric series $\sum_{n=1}^{\infty} ar^{n-1}$ diverges.

_Proof._ If $|r| > 1$, then $|r^n| \to \infty$, so $|a_n| \to \infty$. Since the terms don't tend to zero, the series diverges by the divergence test.

If $r = 1$: $S_n = na \to \pm\infty$ (unless $a = 0$).

If $r = -1$: $S_n = a - a + a - a + \cdots$, which oscillates and does not converge. $\blacksquare$

:::warning
The condition $|r| < 1$ is essential. A common mistake is to apply the sum-to-infinity formula when $|r| \geq 1$, which gives nonsense.
:::

<details>
<summary>Example</summary>
Find the sum to infinity of $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$

Here $a = 1$, $r = \frac{1}{2}$, $|r| < 1$.

$$S_\infty = \frac{1}{1 - \frac{1}{2}} = 2$$
</details>

---

## 4. Sigma Notation

**Definition.** $\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n$.

**Properties:**

$$
\begin{aligned}
\sum_{k=1}^{n} (a_k + b_k) &= \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k \\
\sum_{k=1}^{n} ca_k &= c\sum_{k=1}^{n} a_k
\end{aligned}
$$

### 4.1 Standard Sums

$$
\begin{aligned}
\sum_{k=1}^{n} k &= \frac{n(n+1)}{2} \\
\sum_{k=1}^{n} k^2 &= \frac{n(n+1)(2n+1)}{6} \\
\sum_{k=1}^{n} k^3 &= \frac{n^2(n+1)^2}{4}
\end{aligned}
$$

_Proof of $\sum_{k=1}^{n} k = \frac{n(n+1)}{2}$._ This is the arithmetic series with $a = 1$, $d = 1$, $n$ terms. By the formula: $S_n = \frac{n}{2}(2 + (n-1)) = \frac{n(n+1)}{2}$. $\blacksquare$

---

## 5. Recurrence Relations

A _recurrence relation_ defines each term in terms of previous terms. A recurrence relation of order $k$ requires $k$ initial conditions.

**Example.** $u_{n+1} = 2u_n + 3$, $u_1 = 1$.

$u_2 = 2(1) + 3 = 5$, $u_3 = 2(5) + 3 = 13$, $u_4 = 2(13) + 3 = 29$, ...

**Periodic sequences.** If $u_{n+1} = f(u_n)$ and the sequence returns to a previous value, it becomes periodic.

**Example.** $u_{n+1} = \frac{1}{u_n}$, $u_1 = 2$.

$u_2 = \frac{1}{2}$, $u_3 = 2$, $u_4 = \frac{1}{2}$, ... This is periodic with period 2.

---

## 6. Problem Set

**Problem 1.** The 5th term of an arithmetic sequence is 17 and the 12th term is 38. Find the first term and the common difference.

<details>
<summary>Solution</summary>
$$a + 4d = 17 \quad \text{--- (1)}$$
$$a + 11d = 38 \quad \text{--- (2)}$$

(2) - (1): $7d = 21 \implies d = 3$.

$a = 17 - 12 = 5$.
</details>
<b>If you get this wrong, revise:</b> [Arithmetic sequences](#2-arithmetic-sequences)

---

**Problem 2.** Evaluate $\sum_{k=1}^{50} (3k - 1)$.

<details>
<summary>Solution</summary>
This is an arithmetic series with first term $a = 2$, last term $\ell = 3(50) - 1 = 149$, $n = 50$.

$$S = \frac{50}{2}(2 + 149) = 25 \times 151 = 3775$$
</details>
<b>If you get this wrong, revise:</b> [Sigma notation](#4-sigma-notation)

---

**Problem 3.** A geometric series has first term 5 and sum to infinity 25. Find the common ratio.

<details>
<summary>Solution</summary>
$$S_\infty = \frac{a}{1 - r} = 25$$

$$\frac{5}{1 - r} = 25 \implies 1 - r = \frac{1}{5} \implies r = \frac{4}{5}$$
</details>
<b>If you get this wrong, revise:</b> [Sum to infinity](#33-sum-to-infinity)

---

**Problem 4.** Find the sum of the first 10 terms of the geometric series $2 - 6 + 18 - 54 + \cdots$

<details>
<summary>Solution</summary>
$a = 2$, $r = -3$, $n = 10$.

$$S_{10} = \frac{2(1 - (-3)^{10})}{1 - (-3)} = \frac{2(1 - 59049)}{4} = \frac{2(-59048)}{4} = -29524$$
</details>
<b>If you get this wrong, revise:</b> [Sum of finite geometric series](#32-sum-of-a-finite-geometric-series)

---

**Problem 5.** Show that $\sum_{k=1}^{n} (4k + 1) = n(2n + 3)$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\sum_{k=1}^{n} (4k + 1) &= 4\sum_{k=1}^{n} k + \sum_{k=1}^{n} 1 \\
&= 4 \cdot \frac{n(n+1)}{2} + n \\
&= 2n(n+1) + n \\
&= 2n^2 + 2n + n \\
&= 2n^2 + 3n \\
&= n(2n + 3) \quad \blacksquare
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Sigma notation](#4-sigma-notation)

---

**Problem 6.** Given $u_1 = 3$ and $u_{n+1} = \frac{u_n + 1}{u_n - 1}$, find $u_2$, $u_3$, $u_4$, and $u_5$. Comment on the sequence.

<details>
<summary>Solution</summary>
$u_2 = \frac{3 + 1}{3 - 1} = 2$

$u_3 = \frac{2 + 1}{2 - 1} = 3$

$u_4 = \frac{3 + 1}{3 - 1} = 2$

$u_5 = \frac{2 + 1}{2 - 1} = 3$

The sequence is periodic: $3, 2, 3, 2, 3, 2, \ldots$ with period 2.
</details>
<b>If you get this wrong, revise:</b> [Recurrence relations](#5-recurrence-relations)

---

**Problem 7.** The first three terms of a geometric sequence are $x, x + 4, x + 12$. Find $x$ and the common ratio.

<details>
<summary>Solution</summary>
$$\frac{x + 4}{x} = \frac{x + 12}{x + 4}$$

$$(x + 4)^2 = x(x + 12)$$

$$x^2 + 8x + 16 = x^2 + 12x$$

$$4x = 16 \implies x = 4$$

The sequence is $4, 8, 16, \ldots$ with $r = 2$.
</details>
<b>If you get this wrong, revise:</b> [Geometric sequences](#3-geometric-sequences)

---

**Problem 8.** A ball is dropped from a height of 10 m. Each bounce reaches 80% of the previous height. Find the total distance travelled before the ball comes to rest.

<details>
<summary>Solution</summary>
The ball falls 10 m, then rises $10 \times 0.8 = 8$ m, falls 8 m, rises $8 \times 0.8 = 6.4$ m, etc.

Total distance = $10 + 2(8 + 6.4 + 5.12 + \cdots)$.

The bracketed series is geometric with $a = 8$, $r = 0.8$.

$$S_\infty = \frac{8}{1 - 0.8} = \frac{8}{0.2} = 40$$

Total distance = $10 + 2 \times 40 = 90$ m.
</details>
<b>If you get this wrong, revise:</b> [Sum to infinity](#33-sum-to-infinity)

---

**Problem 9.** Find the least value of $n$ such that the sum of the first $n$ terms of $3 + 6 + 12 + 24 + \cdots$ exceeds 10000.

<details>
<summary>Solution</summary>
$a = 3$, $r = 2$.

$$S_n = \frac{3(2^n - 1)}{2 - 1} = 3(2^n - 1) > 10000$$

$$2^n - 1 > \frac{10000}{3} \implies 2^n > \frac{10003}{3} \approx 3334.33$$

$$n > \log_2(3334.33) \approx 11.7$$

So $n = 12$.

Check: $S_{11} = 3(2048 - 1) = 6141 < 10000$.

$S_{12} = 3(4096 - 1) = 12285 > 10000$. ✓
</details>
<b>If you get this wrong, revise:</b> [Sum of finite geometric series](#32-sum-of-a-finite-geometric-series)

---

**Problem 10.** Prove that $\sum_{k=1}^{n} k(k+1) = \frac{n(n+1)(n+2)}{3}$.

<details>
<summary>Solution</summary>
By induction.

Base case ($n = 1$): LHS $= 1 \times 2 = 2$. RHS $= \frac{1 \times 2 \times 3}{3} = 2$. ✓

Inductive step: Assume $\sum_{k=1}^{n} k(k+1) = \frac{n(n+1)(n+2)}{3}$.

Then:

$$
\begin{aligned}
\sum_{k=1}^{n+1} k(k+1) &= \frac{n(n+1)(n+2)}{3} + (n+1)(n+2) \\
&= \frac{n(n+1)(n+2) + 3(n+1)(n+2)}{3} \\
&= \frac{(n+1)(n+2)(n + 3)}{3} \\
&= \frac{(n+1)((n+1)+1)((n+1)+2)}{3}
\end{aligned}
$$

This is the formula for $n + 1$. ✓ $\blacksquare$
</details>
<b>If you get this wrong, revise:</b> [Proof by induction](./13-proof.md)
