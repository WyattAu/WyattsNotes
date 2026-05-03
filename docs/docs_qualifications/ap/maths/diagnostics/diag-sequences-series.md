---
title: Sequences and Series — Diagnostic Tests [BC Only]
description: Diagnostic tests targeting the hardest AP Calculus BC sequence and series questions including convergence tests, Taylor series, power series, Lagrange error bounds, and radius of convergence.
slug: diag-sequences-series
hide_table_of_contents: true
---

# Sequences and Series — Diagnostic Tests [BC Only]

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for sequences and series.

### UT-1: Choosing the Correct Convergence Test for a Tricky Series

**Question:**

Determine whether $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^n}{\sqrt{n} + (-1)^n}$ converges conditionally, converges absolutely, or diverges.

A student applies the alternating series test and concludes it converges conditionally because $\dfrac{1}{\sqrt{n} + (-1)^n}$ decreases to $0$. Identify the flaw in this reasoning and determine the correct answer.

**Solution:**

The alternating series test requires that $b_n = \dfrac{1}{\sqrt{n} + (-1)^n}$ is **positive and decreasing**. Let us check if $b_n$ is decreasing.

$b_1 = \dfrac{1}{1 - 1}$ is **undefined** (division by zero). So the series is not even well-defined starting from $n = 1$.

Start from $n = 2$ instead: $b_2 = \dfrac{1}{\sqrt{2} + 1} \approx 0.414$, $b_3 = \dfrac{1}{\sqrt{3} - 1} \approx 1.366$, $b_4 = \dfrac{1}{2 + 1} \approx 0.333$.

Since $b_3 > b_2$, the sequence $\{b_n\}$ is **not decreasing**, so the alternating series test does not apply.

To determine convergence, rewrite:

$$\frac{(-1)^n}{\sqrt{n} + (-1)^n} = \frac{(-1)^n(\sqrt{n} - (-1)^n)}{n - 1} = \frac{(-1)^n\sqrt{n}}{n-1} - \frac{1}{n-1}$$

$$= \frac{(-1)^n}{\sqrt{n}} \cdot \frac{n}{n-1} - \frac{1}{n-1}$$

The first part $\dfrac{(-1)^n}{\sqrt{n}} \cdot \dfrac{n}{n-1}$ converges by the alternating series test (since $\dfrac{n}{\sqrt{n}(n-1)} = \dfrac{\sqrt{n}}{n-1} \to 0$ and is eventually decreasing).

The second part $-\dfrac{1}{n-1} = -\displaystyle\sum_{n=2}^{\infty}\dfrac{1}{n-1} = -\displaystyle\sum_{k=1}^{\infty}\dfrac{1}{k}$ is the negative harmonic series, which **diverges**.

Since a convergent series minus a divergent series diverges, the original series **diverges**.

---

### UT-2: Taylor Series Remainder and Lagrange Error Bound

**Question:**

Use the Maclaurin series for $e^x$ to approximate $e^{0.3}$ using the first three nonzero terms.

(a) Compute the approximation.
(b) Use the Lagrange error bound to find an upper bound on the absolute error.
(c) The actual value is $e^{0.3} \approx 1.3498588$. Compute the actual error and verify it is within the bound.
(d) A student claims "since the Maclaurin series for $e^x$ converges for all $x$, the error must go to zero." Explain why this does not mean the error is zero for any finite number of terms.

**Solution:**

(a) The Maclaurin series: $e^x = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots$

First three nonzero terms: $1 + 0.3 + \dfrac{0.09}{2} = 1 + 0.3 + 0.045 = 1.345$.

(b) The Lagrange remainder after $n$ terms: $|R_n(x)| \leq \dfrac{M|x|^{n+1}}{(n+1)!}$ where $M = \max|f^{(n+1)}(c)|$ for $c$ between $0$ and $x$.

After 3 terms ($n = 3$, using up to the $x^2$ term), the next term involves $f^{(3)}(x) = e^x$:

$$|R_2(0.3)| \leq \frac{e^{0.3} \cdot (0.3)^3}{3!} = \frac{e^{0.3} \cdot 0.027}{6}$$

Since $e^{0.3} \lt e^1 \lt 3$:

$$|R_2(0.3)| \lt \frac{3 \cdot 0.027}{6} = \frac{0.081}{6} = 0.0135$$

A tighter bound using $e^{0.3} \lt 1.35$:

$$|R_2(0.3)| \lt \frac{1.35 \cdot 0.027}{6} = 0.006075$$

(c) Actual error: $|e^{0.3} - 1.345| = |1.3498588 - 1.345| = 0.0048588$.

Is $0.0048588 \lt 0.0135$? Yes. Is $0.0048588 \lt 0.006075$? Yes. The error is within both bounds.

(d) Convergence of the series means the **partial sums approach** $e^x$ as the number of terms goes to infinity. For any finite number of terms, there is a nonzero remainder. The series "converging" is a statement about the limit of partial sums, not about any individual partial sum. This is the distinction between an infinite process and its finite approximation.

---

### UT-3: Radius and Interval of Convergence with Endpoint Analysis

**Question:**

Find the radius and interval of convergence of $\displaystyle\sum_{n=1}^{\infty} \frac{(x - 2)^n}{n \cdot 3^n}$.

**Solution:**

Apply the ratio test:

$$\lim_{n \to \infty} \left|\frac{a_{n+1}}{a_n}\right| = \lim_{n \to \infty}\left|\frac{(x-2)^{n+1}}{(n+1) \cdot 3^{n+1}} \cdot \frac{n \cdot 3^n}{(x-2)^n}\right| = \lim_{n \to \infty}\frac{n}{n+1} \cdot \frac{|x-2|}{3} = \frac{|x-2|}{3}$$

The ratio test gives convergence when $\dfrac{|x-2|}{3} \lt 1$, i.e., $|x - 2| \lt 3$.

**Radius of convergence:** $R = 3$.

**Endpoints:**

$x = 5$: $\displaystyle\sum_{n=1}^{\infty} \frac{3^n}{n \cdot 3^n} = \sum_{n=1}^{\infty}\frac{1}{n}$ -- the harmonic series, which **diverges**.

$x = -1$: $\displaystyle\sum_{n=1}^{\infty} \frac{(-3)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty}\frac{(-1)^n}{n}$ -- the alternating harmonic series, which **converges conditionally** (by the alternating series test: $\dfrac{1}{n} \to 0$ and decreases).

**Interval of convergence:** $[-1, 5)$.

---

## Integration Tests

> Tests synthesis of sequences and series with other topics.

### IT-1: Power Series Differentiation to Evaluate a Sum (with Derivatives)

**Question:**

Starting from the geometric series $\displaystyle\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$ for $|x| \lt 1$, find the exact value of $\displaystyle\sum_{n=1}^{\infty} \frac{n^2}{2^n}$.

**Solution:**

From $\displaystyle\sum_{n=0}^{\infty} x^n = \frac{1}{1-x}$, differentiate both sides:

$$\sum_{n=1}^{\infty} nx^{n-1} = \frac{1}{(1-x)^2}$$

Multiply by $x$:

$$\sum_{n=1}^{\infty} nx^n = \frac{x}{(1-x)^2}$$

Differentiate again:

$$\sum_{n=1}^{\infty} n^2 x^{n-1} = \frac{(1-x)^2 + 2x(1-x)}{(1-x)^4} = \frac{(1-x)(1-x + 2x)}{(1-x)^4} = \frac{1+x}{(1-x)^3}$$

Multiply by $x$:

$$\sum_{n=1}^{\infty} n^2 x^n = \frac{x(1+x)}{(1-x)^3}$$

Set $x = \dfrac{1}{2}$:

$$\sum_{n=1}^{\infty}\frac{n^2}{2^n} = \frac{\frac{1}{2} \cdot \frac{3}{2}}{\left(\frac{1}{2}\right)^3} = \frac{\frac{3}{4}}{\frac{1}{8}} = 6$$

---

### IT-2: Taylor Polynomial Integration (with Integrals)

**Question:**

(a) Find the fourth-degree Maclaurin polynomial $T_4(x)$ for $f(x) = \cos(x^2)$.
(b) Use $T_4(x)$ to approximate $\displaystyle\int_0^{0.5} \cos(x^2)\,dx$.
(c) Bound the error in this approximation using the Lagrange remainder.

**Solution:**

(a) Start with $\cos u = 1 - \dfrac{u^2}{2!} + \dfrac{u^4}{4!} - \cdots$. Substitute $u = x^2$:

$$\cos(x^2) = 1 - \frac{x^4}{2!} + \frac{x^8}{4!} - \cdots = 1 - \frac{x^4}{2} + \frac{x^8}{24} - \cdots$$

The fourth-degree Maclaurin polynomial (all terms through $x^4$):

$$T_4(x) = 1 - \frac{x^4}{2}$$

(b) $\displaystyle\int_0^{0.5} T_4(x)\,dx = \int_0^{0.5}\left(1 - \frac{x^4}{2}\right)dx = \left[x - \frac{x^5}{10}\right]_0^{0.5} = 0.5 - \frac{1}{320} = \frac{160 - 1}{320} = \frac{159}{320} \approx 0.496875$

(c) The next term in the series is $\dfrac{x^8}{24}$. The error from truncating after the $x^4$ term is bounded by:

$$|R_4(x)| \leq \frac{M|x|^6}{6!}$$

where $M = \max|f^{(6)}(c)|$ for $c \in [0, 0.5]$. This is complicated. Instead, bound using the next series term:

Since the series for $\cos(x^2)$ is alternating and the terms decrease in magnitude for $|x| \lt 1$, the error in truncating after the $x^4$ term is at most the magnitude of the next term:

$$|R_4(x)| \leq \frac{x^8}{24}$$

So the error in the integral is bounded by:

$$\left|\int_0^{0.5} R_4(x)\,dx\right| \leq \int_0^{0.5}\frac{x^8}{24}\,dx = \frac{1}{24}\cdot\frac{(0.5)^9}{9} = \frac{1}{24 \cdot 9 \cdot 512} = \frac{1}{110592} \approx 0.00000904$$

More rigorously, using the Lagrange form: $f^{(5)}(x)$ involves $\sin(x^2)$ and $\cos(x^2)$ terms. The maximum of $|f^{(5)}(c)|$ on $[0, 0.5]$ is bounded (all derivatives of $\cos(x^2)$ are bounded by polynomials in $c$ times sines and cosines). The alternating series bound gives a cleaner result and is sufficient for the AP exam.

---

### IT-3: Series Convergence via Integral Test (with Integrals and Limits)

**Question:**

Determine whether $\displaystyle\sum_{n=2}^{\infty} \frac{1}{n(\ln n)^p}$ converges for:
(a) $p = 2$
(b) $p = 1$
(c) General $p$

Then, for the convergent case(s), use the integral test remainder bound to determine how many terms are needed to approximate the sum to within $0.001$.

**Solution:**

Let $f(x) = \dfrac{1}{x(\ln x)^p}$ for $x \geq 2$. This is positive, continuous, and decreasing for $x \geq 2$ (when $p > 0$).

Let $u = \ln x$, $du = \dfrac{dx}{x}$:

$$\int_2^{\infty}\frac{dx}{x(\ln x)^p} = \int_{\ln 2}^{\infty}\frac{du}{u^p}$$

(a) $p = 2$: $\displaystyle\int_{\ln 2}^{\infty}\frac{du}{u^2} = \left[-\frac{1}{u}\right]_{\ln 2}^{\infty} = \frac{1}{\ln 2} \lt \infty$. The series **converges**.

(b) $p = 1$: $\displaystyle\int_{\ln 2}^{\infty}\frac{du}{u} = \left[\ln u\right]_{\ln 2}^{\infty} = \infty$. The series **diverges**.

(c) The $p$-integral $\displaystyle\int \frac{du}{u^p}$ converges iff $p > 1$. Therefore:

$$\sum_{n=2}^{\infty}\frac{1}{n(\ln n)^p} \text{ converges iff } p > 1$$

For the remainder bound with $p = 2$: the error from using $N$ terms satisfies:

$$R_N \leq \int_N^{\infty}\frac{dx}{x(\ln x)^2} = \frac{1}{\ln N}$$

We need $\dfrac{1}{\ln N} \lt 0.001$:

$$\ln N > 1000 \implies N > e^{1000}$$

This is astronomically large, showing that despite convergence, the series converges extremely slowly. This illustrates an important limitation of the integral test for error bounds: convergence does not imply practical computability.

For comparison, even $p = 1.01$ gives:

$$\int_N^{\infty}\frac{du}{u^{1.01}} = \frac{N^{-0.01}}{0.01} = 100N^{-0.01}$$

Setting $100N^{-0.01} \lt 0.001$: $N^{-0.01} \lt 0.00001$, so $N^{0.01} > 100000$, giving $N > 100000^{100}$. Still impractical. The series $\sum \frac{1}{n(\ln n)^p}$ converges very slowly for $p$ near $1$.
