---
title: Series
tags:
  - Mathematics
  - University
---

### 3.1 Definitions and Convergence

A **series** $\sum_{n=1}^{\infty} a_n$ converges if the sequence of partial sums
$S_N = \sum_{n=1}^{N} a_n$ Converges. The limit is the sum of the series.

If $a_n \geq 0$ for all $n$The series of partial sums is increasing, so by the monotone convergence
Theorem, $\sum a_n$ converges if and only if $(S_N)$ is bounded above.

### 3.2 Convergence Tests

**Theorem 3.1 (Comparison Test).** If $0 \leq a_n \leq b_n$ for all $n$Then:

- If $\sum b_n$ converges, then $\sum a_n$ converges.
- If $\sum a_n$ diverges, then $\sum b_n$ diverges.

**Theorem 3.2 (Limit Comparison Test).** If $a_n > 0$, $b_n > 0$And
$\lim_{n \to \infty} a_n / b_n = L$ where $0 \lt L \lt \infty$Then $\sum a_n$ converges if and only
if $\sum b_n$ converges.

**Theorem 3.3 (Ratio Test).** If $\lim_{n \to \infty} |a_{n+1}/a_n| = L$Then:

- If $L \lt 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$The test is inconclusive.

**Theorem 3.4 (Root Test).** If $\limsup_{n \to \infty} \sqrt[n]{|a_n|} = L$Then:

- If $L \lt 1$, $\sum a_n$ converges absolutely.
- If $L > 1$, $\sum a_n$ diverges.
- If $L = 1$The test is inconclusive.

_Proof._ If $L \lt 1$Choose $r$ with $L \lt r \lt 1$. By definition of $\limsup$There exists $N$
such that $\sqrt[n]{|a_n|} \lt r$ for all $n \geq N$I.e., $|a_n| \lt r^n$. Since $\sum r^n$
converges (geometric series with $r \lt 1$), the comparison test gives absolute convergence.

If $L > 1$Then for infinitely many $n$: $\sqrt[n]{|a_n|} > 1$So $|a_n| > 1$. Hence $a_n \not\to 0$
And the series diverges. $\blacksquare$

**Theorem 3.5 (Integral Test).** If $f : [1, \infty) \to [0, \infty)$ is positive, continuous, and
Decreasing, then $\sum_{n=1}^{\infty} f(n)$ converges if and only if $\int_1^{\infty} f(x)\, dx$
converges.

_Proof._ Since $f$ is decreasing, for $k \leq x \leq k+1$: $f(k+1) \leq f(x) \leq f(k)$.
Integrating:

$$f(k+1) = \int_k^{k+1} f(k+1)\, dx \leq \int_k^{k+1} f(x)\, dx \leq \int_k^{k+1} f(k)\, dx = f(k)$$

Summing from $k = 1$ to $N - 1$:

$$\sum_{k=2}^{N} f(k) \leq \int_1^N f(x)\, dx \leq \sum_{k=1}^{N-1} f(k)$$

If $\int_1^{\infty} f$ converges, the left inequality shows $\sum f(k)$ is bounded above, hence
converges. If $\int_1^{\infty} f$ diverges, the right inequality shows $\sum f(k)$ is unbounded,
hence diverges. $\blacksquare$

**Theorem 3.6 (Alternating Series Test).** If $a_n > 0$, $a_n$ decreases, and $a_n \to 0$Then
$\sum_{n=1}^{\infty} (-1)^{n+1} a_n$ converges.

_Proof._ The partial sums of the even-indexed subsequence satisfy
$S_{2n} = S_{2n-2} - a_{2n-1} + a_{2n}$. Since $a_{2n-1} \geq a_{2n}$We have
$S_{2n} \leq S_{2n-2}$So $(S_{2n})$ is decreasing. Similarly, $(S_{2n+1})$ is increasing. Also
$S_{2n+1} = S_{2n} + a_{2n+1} \geq S_{2n}$. Both sequences are bounded (since $(S_{2n})$ is
decreasing and bounded below by $S_1$And $(S_{2n+1})$ is increasing and bounded Above by $S_2$).
Hence both converge. Since $a_{2n+1} \to 0$Their limits coincide. $\blacksquare$

### 3.3 Absolute and Conditional Convergence

A series $\sum a_n$ **converges absolutely** if $\sum |a_n|$ converges. It **converges
conditionally** If $\sum a_n$ converges but $\sum |a_n|$ diverges.

**Theorem 3.7.** If $\sum a_n$ converges absolutely, then $\sum a_n$ converges.

_Proof._ Since $\sum |a_n|$ converges, the partial sums of $\sum |a_n|$ satisfy the Cauchy
criterion. Given $\varepsilon > 0$There exists $N$ such that for $m > n \geq N$:
$\sum_{k=n+1}^{m} |a_k| \lt \varepsilon$. Then
$\left|\sum_{k=n+1}^{m} a_k\right| \leq \sum_{k=n+1}^{m} |a_k| \lt \varepsilon$So $\sum a_n$
satisfies The Cauchy criterion and converges. $\blacksquare$

### 3.4 The Alternating Series Estimation Theorem

**Theorem 3.8 (Alternating Series Estimation).** If $S = \sum_{n=1}^{\infty} (-1)^{n+1} a_n$
satisfies the Hypotheses of the alternating series test, then the error after $N$ terms satisfies:

$$|S - S_N| \leq a_{N+1}$$

_Proof._ We have $S_{2n} \leq S \leq S_{2n+1} = S_{2n} + a_{2n+1}$ and
$S_{2n-1} \geq S \geq S_{2n} = S_{2n-1} - a_{2n}$. In both cases $|S - S_N| \leq a_{N+1}$.
$\blacksquare$

### 3.5 Cauchy Condensation Test

**Theorem 3.8b (Cauchy Condensation Test).** If $(a_n)$ is a non-negative, decreasing sequence, then
$\sum_{n=1}^{\infty} a_n$ converges if and only if $\sum_{k=0}^{\infty} 2^k a_{2^k}$ converges.

_Proof._ Group the terms of $\sum a_n$. For the lower bound, note:

$$a_1 + (a_2 + a_3) + (a_4 + a_5 + a_6 + a_7) + \cdots \geq a_1 + 2a_2 + 4a_4 + 8a_8 + \cdots = \sum_{k=0}^{\infty} 2^k a_{2^k}$$

Since each group $(a_{2^k} + \cdots + a_{2^{k+1}-1})$ has $2^k$ terms, each $\geq a_{2^k}$. For the
upper Bound:

$$a_1 + a_2 + (a_3 + a_4) + (a_5 + a_6 + a_7 + a_8) + \cdots \leq a_1 + a_2 + 2a_4 + 4a_8 + \cdots \leq a_1 + 2\sum_{k=1}^{\infty} 2^{k-1} a_{2^k}$$

If $\sum 2^k a_{2^k}$ converges, the upper bound shows $\sum a_n$ converges. If $\sum a_n$
Converges, the lower bound shows $\sum 2^k a_{2^k}$ converges. $\blacksquare$

_Corollary._ $\sum_{n=1}^{\infty} 1/n^p$ converges if and only if $p > 1$. Apply the condensation
Test: $\sum 2^k \cdot 1/(2^k)^p = \sum 2^{k(1-p)}$A geometric series with ratio $2^{1-p}$ Which
converges iff $1 - p \lt 0$I.e., $p > 1$.

### 3.6 Rearrangement of Series

**Theorem 3.9 (Riemann Rearrangement Theorem).** If $\sum a_n$ converges conditionally, then for any
$L \in \mathbb{R}$ (or $\pm\infty$), there exists a rearrangement
$\sigma : \mathbb{N} \to \mathbb{N}$ such That $\sum_{n=1}^{\infty} a_{\sigma(n)} = L$.

_Proof (outline)._ Let $P = \{n : a_n > 0\}$ and $N = \{n : a_n \lt 0\}$. Since $\sum a_n$ converges
Conditionally, both $\sum_{n \in P} a_n = +\infty$ and $\sum_{n \in N} a_n = -\infty$.

To achieve sum $L \in \mathbb{R}$: take positive terms in order until the partial sum exceeds $L$
Then take negative terms until it falls below $L$Then positive terms again, and so on. Since both
The positive and negative subseries diverge, this process can always continue. The terms tend to
Zero (since the series converges), so the oscillations around $L$ shrink to zero. $\blacksquare$

_Remark._ By contrast, every rearrangement of an absolutely convergent series converges to the same
sum.

### 3.7 Worked Examples

**Problem.** Determine whether $\sum_{n=1}^{\infty} \frac{n}{2^n}$ converges.

_Solution._ Apply the ratio test:

$$\lim_{n \to \infty} \frac{a_{n+1}}{a_n} = \lim_{n \to \infty} \frac{(n+1)/2^{n+1}}{n/2^n} = \lim_{n \to \infty} \frac{n+1}{2n} = \frac{1}{2} \lt 1$$

By the ratio test, the series converges absolutely. $\blacksquare$

<details>
<summary>Worked Example: Determine convergence of $\sum_{n=1}^{\infty} \frac{1}{n^2 + n}$</summary>

_Solution._ Note that $\frac{1}{n^2 + n} = \frac{1}{n(n+1)} = \frac{1}{n} - \frac{1}{n+1}$. This is
a Telescoping series. The $N$-th partial sum is:

$$S_N = \sum_{n=1}^{N} \left(\frac{1}{n} - \frac{1}{n+1}\right) = 1 - \frac{1}{N+1}$$

Therefore $\lim_{N \to \infty} S_N = 1$And the series converges to $1$. $\blacksquare$

</details>

<details>
<summary>Worked Example: Does $\sum_{n=2}^{\infty} \frac{1}{n \ln n}$ converge?</summary>

_Solution._ Apply the integral test with $f(x) = 1/(x \ln x)$ on $[2, \infty)$. The function is
positive, Continuous, and decreasing. Compute:

$$\int_2^{\infty} \frac{1}{x \ln x}\, dx = \lim_{b \to \infty} \int_2^{b} \frac{1}{x \ln x}\, dx = \lim_{b \to \infty} \left[\ln(\ln x)\right]_2^b = \lim_{b \to \infty} \ln(\ln b) - \ln(\ln 2) = \infty$$

The integral diverges, so by the integral test, the series diverges. $\blacksquare$

</details>

<details>
<summary>Worked Example: Approximate $\sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n}$ to within $0.01$</summary>

_Solution._ This is the alternating harmonic series, with $a_n = 1/n$. By the alternating series
Estimation theorem, $|S - S_N| \leq a_{N+1} = 1/(N+1)$. We need $1/(N+1) \leq 0.01$So
$N + 1 \geq 100$I.e., $N \geq 99$.

So $S_{99} = \sum_{n=1}^{99} \frac{(-1)^{n+1}}{n}$ approximates $\ln 2$ to within $0.01$. (The exact
sum is $\ln 2 \approx 0.6931$.) $\blacksquare$

</details>

<details>
<summary>Worked Example: Determine convergence of $\sum_{n=1}^{\infty} \frac{1}{n^2 + 1}$</summary>

_Solution._ Since $\frac{1}{n^2 + 1} \leq \frac{1}{n^2}$ for all $n$And $\sum 1/n^2$ converges
($p$-series with $p = 2 > 1$), the comparison test implies $\sum \frac{1}{n^2 + 1}$ converges.
$\blacksquare$

</details>

<details>
<summary>Worked Example: Use the condensation test for $\sum_{n=2}^{\infty} \frac{1}{n (\ln n) (\ln \ln n)}$</summary>

_Solution._ Let $a_n = \frac{1}{n (\ln n)(\ln \ln n)}$ for $n \geq 3$. This is positive and
decreasing. By the condensation test, $\sum a_n$ converges iff $\sum 2^k a_{2^k}$ converges.
Compute:

$$2^k a_{2^k} = \frac{2^k}{2^k \cdot k \ln 2 \cdot \ln(k \ln 2)} = \frac{1}{k \ln 2 \cdot \ln(k \ln 2)} \approx \frac{1}{k \ln k}$$

The series $\sum \frac{1}{k \ln k}$ diverges (integral test, analogous to $\sum \frac{1}{n \ln n}$).
Therefore $\sum a_n$ diverges. $\blacksquare$

_If you get this wrong, revise:_ Section 3.5 (Cauchy Condensation Test).

</details>

:::caution Common Pitfall The ratio and root tests are inconclusive when the limit equals 1. In such
cases, try the comparison Test, integral test, or other methods. For example, $\sum 1/n$ diverges
(harmonic series) and $\sum 1/n^2$ converges, but both give a ratio test limit of 1.



:::
