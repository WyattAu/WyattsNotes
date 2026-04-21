---
title: Maclaurin and Taylor Series
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: maclaurin-taylor-series
sidebar_position: 8
---

## Maclaurin and Taylor Series

Power series provide a way to represent functions as infinite sums, enabling computation,
approximation, and analysis that would otherwise be impossible. The Maclaurin series expands a
function about $x = 0$; the Taylor series generalises this to expansion about any point. Together
they are among the most powerful tools in analysis and applied mathematics.


<DesmosGraph
  title="Taylor Series Approximation of e^x"
  expressions={["e^x", "\sum_{n=0}^{N} \frac{x^n}{n!}"]}
  width={800}
  height={500}
/>

Adjust the parameters in the graph above to explore the relationships between variables.


### Board Coverage

| Board   | Paper   | Notes                                                                                  |
| ------- | ------- | -------------------------------------------------------------------------------------- |
| AQA     | Paper 1 | Maclaurin series; standard series for $e^x$, $\sin x$, $\cos x$, $\ln(1+x)$, $(1+x)^n$ |
| Edexcel | FP2     | Maclaurin + Taylor series about general $x = a$; convergence                           |
| OCR (A) | Paper 1 | Maclaurin series; standard series; applications                                        |
| CIE     | P2      | Maclaurin series; expansion of compound functions; range of validity                   |

:::info
All boards require the standard Maclaurin series. Edexcel and CIE additionally require
Taylor series about $x = a$. The formula booklet lists the standard Maclaurin series — you must be
able to derive them and apply them.
:::

<hr />

## 1. Maclaurin Series

### 1.1 Definition

**Definition.** The **Maclaurin series** of a function $f$ that is infinitely differentiable at
$x = 0$ is

$$\boxed{f(x) = f(0) + xf'(0) + \frac{x^2}{2!}f''(0) + \frac{x^3}{3!}f'''(0) + \cdots = \sum_{n=0}^{\infty}\frac{f^{(n)}(0)}{n!}\,x^n}$$

This is a special case of the Taylor series about $x = a = 0$.

### 1.2 Derivation from the Taylor series

Assume $f$ can be written as a power series $f(x) = a_0 + a_1 x + a_2 x^2 + a_3 x^3 + \cdots$.

Differentiating repeatedly and evaluating at $x = 0$:

- $f(0) = a_0$
- $f'(0) = a_1$
- $f''(0) = 2a_2$
- $f'''(0) = 6a_3 = 3!\,a_3$

In general, $f^{(n)}(0) = n!\,a_n$, giving $a_n = \dfrac{f^{(n)}(0)}{n!}$.

Substituting back gives the Maclaurin series.

<hr />

## 2. Standard Maclaurin Series

### 2.1 Exponential function

### Proof of the Maclaurin series for $e^x$

Let $f(x) = e^x$. Then $f^{(n)}(x) = e^x$ for all $n$, so $f^{(n)}(0) = 1$ for all $n$.

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty}\frac{x^n}{n!}$$

$$\boxed{e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!}} \quad \mathrm{for all } x \in \mathbb{R}$$

$\square$

**Radius of convergence:** $\infty$ (converges for all real $x$).

### 2.2 Sine function

### Proof of the Maclaurin series for $\sin x$

Let $f(x) = \sin x$. The derivatives cycle: $\sin x$, $\cos x$, $-\sin x$, $-\cos x$, $\sin x$, ...

At $x = 0$: $0, 1, 0, -1, 0, 1, 0, -1, \ldots$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

$$\boxed{\sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}} \quad \mathrm{for all } x \in \mathbb{R}$$

$\square$

**Radius of convergence:** $\infty$.

### 2.3 Cosine function

Let $f(x) = \cos x$. The derivatives cycle: $\cos x$, $-\sin x$, $-\cos x$, $\sin x$, $\cos x$, ...

At $x = 0$: $1, 0, -1, 0, 1, 0, -1, 0, \ldots$

$$\boxed{\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}} \quad \mathrm{for all } x \in \mathbb{R}$$

### 2.4 Natural logarithm

Let $f(x) = \ln(1+x)$ for $|x| < 1$.

$f'(x) = \dfrac{1}{1+x}$, $f''(x) = -\dfrac{1}{(1+x)^2}$, $f'''(x) = \dfrac{2}{(1+x)^3}$, ...

$f^{(n)}(x) = \dfrac{(-1)^{n-1}(n-1)!}{(1+x)^n}$, so $f^{(n)}(0) = (-1)^{n-1}(n-1)!$.

$$\boxed{\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^n}{n}} \quad \mathrm{for } -1 < x \leq 1$$

**Radius of convergence:** 1. The series also converges at $x = 1$ (alternating harmonic series).

### 2.5 Binomial series

For $|x| < 1$ and any real $n$:

$$\boxed{(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots = \sum_{k=0}^{\infty}\binom{n}{k}x^k}$$

where $\dbinom{n}{k} = \dfrac{n(n-1)(n-2)\cdots(n-k+1)}{k!}$.

**Radius of convergence:** 1.

### 2.6 Arctangent

$$\boxed{\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}} \quad \mathrm{for } |x| \leq 1$$

**Radius of convergence:** 1. Converges at $x = \pm 1$ by the alternating series test.

**Derivation.** Since $\dfrac{d}{dx}\arctan x = \dfrac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \cdots$ for
$|x| < 1$, integrate term by term.

### 2.7 Summary table

| Function    | Maclaurin Series                                                  | Valid for       |
| ----------- | ----------------------------------------------------------------- | --------------- | --- | ------- |
| $e^x$       | $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$                  | all $x$         |
| $\sin x$    | $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}$ | all $x$         |
| $\cos x$    | $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}$     | all $x$         |
| $\ln(1+x)$  | $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^n}{n}$         | $-1 < x \leq 1$ |
| $(1+x)^n$   | $\displaystyle\sum_{k=0}^{\infty}\binom{n}{k}x^k$                 | $               | x   | < 1$    |
| $\arctan x$ | $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}$    | $               | x   | \leq 1$ |

<hr />

## 3. Taylor Series About $x = a$

### 3.1 Definition

**Definition.** The **Taylor series** of $f$ about $x = a$ is

$$\boxed{f(x) = f(a) + (x-a)f'(a) + \frac{(x-a)^2}{2!}f''(a) + \frac{(x-a)^3}{3!}f'''(a) + \cdots = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n}$$

The Maclaurin series is the special case $a = 0$.

### 3.2 Taylor's theorem with remainder

**Theorem.** If $f$ is $(n+1)$-times differentiable on an interval containing $a$ and $x$, then

$$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n$$

where the **remainder** in Lagrange form is

$$\boxed{R_n = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}$$

for some $c$ between $a$ and $x$.

**Intuition.** The remainder term tells us the error when truncating the series after $n$ terms. If
$|R_n| \to 0$ as $n \to \infty$, then the Taylor series converges to $f(x)$.

### 3.3 Worked example

Find the Taylor series of $e^x$ about $x = 1$ up to the $x^3$ term.

$f(x) = e^x$, $f'(x) = e^x$, $f''(x) = e^x$, $f'''(x) = e^x$.

At $x = 1$: $f(1) = f'(1) = f''(1) = f'''(1) = e$.

$$e^x = e + e(x-1) + \frac{e}{2}(x-1)^2 + \frac{e}{6}(x-1)^3 + \cdots = e\sum_{n=0}^{\infty}\frac{(x-1)^n}{n!}$$

### 3.4 Converting between Maclaurin and Taylor series

**Example.** Find the Taylor series of $\ln x$ about $x = 1$.

Let $u = x - 1$, so $\ln x = \ln(1 + u)$.

$$\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} - \cdots$$

$$\boxed{\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \cdots} \quad \mathrm{for } 0 < x \leq 2$$

<hr />

## 4. Interval and Radius of Convergence

### 4.1 Definitions

**Definition.** The **radius of convergence** $R$ of a power series
$\displaystyle\sum_{n=0}^{\infty}a_n x^n$ is the value such that the series converges for $|x| < R$
and diverges for $|x| > R$.

The **interval of convergence** is the set of all $x$ for which the series converges. The endpoints
$x = \pm R$ must be tested separately.

### 4.2 The ratio test

**Theorem (Ratio test).** For the series $\displaystyle\sum_{n=0}^{\infty}a_n x^n$, let

$$L = \lim_{n\to\infty}\left|\frac{a_{n+1}}{a_n}\right|$$

If $L$ exists, the radius of convergence is $R = \dfrac{1}{L}$.

Equivalently, if
$L = \lim_{n\to\infty}\left|\dfrac{a_{n+1}x^{n+1}}{a_n x^n}\right| = |x|\lim_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|$:

- If $L < 1$: the series converges absolutely.
- If $L > 1$: the series diverges.
- If $L = 1$: the test is inconclusive.

### 4.3 Worked examples

**Example 1.** Find the radius of convergence of
$\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^n}{n}$.

$a_n = \dfrac{(-1)^{n-1}}{n}$, $a_{n+1} = \dfrac{(-1)^n}{n+1}$.

$\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{n}{n+1} \to 1$ as $n \to \infty$.

$R = 1$. The series converges for $|x| < 1$.

At $x = 1$: alternating harmonic series, converges. At $x = -1$: $-\sum 1/n$, diverges.

Interval of convergence: $-1 < x \leq 1$.

**Example 2.** Find the radius of convergence of $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$.

$\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{1/(n+1)!}{1/n!} = \dfrac{1}{n+1} \to 0$.

$R = \infty$. Converges for all $x$.

### 4.4 Convergence of the geometric series

### Proof of convergence of the geometric series

For $|x| < 1$, the geometric series is $\displaystyle\sum_{n=0}^{\infty}x^n$.

The partial sum is $S_N = 1 + x + x^2 + \cdots + x^N$.

$S_N = \dfrac{1 - x^{N+1}}{1 - x}$ (standard formula).

Since $|x| < 1$: $x^{N+1} \to 0$ as $N \to \infty$, so $S_N \to \dfrac{1}{1-x}$.

$$\boxed{\sum_{n=0}^{\infty}x^n = \frac{1}{1-x} \quad \mathrm{for } |x| < 1}$$

$\square$

:::tip
The geometric series is the foundation for many other series. The Maclaurin series for
$\dfrac{1}{1+x}$, $\ln(1+x)$, and $\arctan x$ all derive from it.
:::

<hr />

## 5. Applications

### 5.1 Approximating values

**Example.** Approximate $e^{0.1}$ using the first four terms of the Maclaurin series.

$e^{0.1} \approx 1 + 0.1 + \dfrac{0.01}{2} + \dfrac{0.001}{6} = 1 + 0.1 + 0.005 + 0.000167 \approx 1.10517$.

The actual value is $\approx 1.10517$, so the error is negligible with just 4 terms.

**Example.** Approximate $\sin(0.1)$ and bound the error.

$\sin(0.1) \approx 0.1 - \dfrac{0.001}{6} = 0.1 - 0.000167 = 0.099833$.

The next term is $\dfrac{(0.1)^5}{120} \approx 8.3 \times 10^{-8}$, so the error is at most this.

### 5.2 Evaluating limits using series

**Example.** Find $\displaystyle\lim_{x\to 0}\frac{e^x - 1 - x}{x^2}$.

$e^x = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \cdots$

$e^x - 1 - x = \dfrac{x^2}{2} + \dfrac{x^3}{6} + \cdots$

$\dfrac{e^x - 1 - x}{x^2} = \dfrac{1}{2} + \dfrac{x}{6} + \cdots \to \dfrac{1}{2}$ as $x \to 0$.

### 5.3 Series expansions of compound functions

**Example.** Find the Maclaurin series of $e^{x^2}$ up to the $x^6$ term.

Substitute $x^2$ into the series for $e^x$:

$$e^{x^2} = 1 + x^2 + \frac{x^4}{2!} + \frac{x^6}{3!} + \cdots = 1 + x^2 + \frac{x^4}{2} + \frac{x^6}{6} + \cdots$$

**Example.** Find the Maclaurin series of $\cos(x^2)$ up to the $x^8$ term.

$$\cos(x^2) = 1 - \frac{x^4}{2!} + \frac{x^8}{4!} - \cdots = 1 - \frac{x^4}{2} + \frac{x^8}{24} - \cdots$$

**Example.** Find $\dfrac{e^x}{1-x}$ up to the $x^3$ term.

$e^x = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \cdots$

$\dfrac{1}{1-x} = 1 + x + x^2 + x^3 + \cdots$

Multiply (Cauchy product):

$\dfrac{e^x}{1-x} = \left(1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6}\right)\left(1 + x + x^2 + x^3\right) + O(x^4)$

$= 1 + (1+1)x + \left(1+1+\dfrac{1}{2}\right)x^2 + \left(1+1+\dfrac{1}{2}+\dfrac{1}{6}\right)x^3$

$= 1 + 2x + \dfrac{5}{2}x^2 + \dfrac{8}{3}x^3 + \cdots$

### 5.4 L'Hôpital's rule and series

**Intuition.** L'Hôpital's rule is a consequence of Taylor's theorem. If $f(a) = g(a) = 0$, then
near $a$:

$$\frac{f(x)}{g(x)} \approx \frac{f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2}{g'(a)(x-a) + \frac{g''(a)}{2}(x-a)^2} = \frac{f'(a) + \frac{f''(a)}{2}(x-a)}{g'(a) + \frac{g''(a)}{2}(x-a)}$$

Taking $x \to a$ gives $\dfrac{f'(a)}{g'(a)}$, which is L'Hôpital's rule. The series approach often
gives more information (higher-order terms) than applying L'Hôpital's rule repeatedly.

<hr />

## 6. Key Results and Pitfalls

:::warning
**Common errors:**

1. **Wrong coefficients.** The Maclaurin coefficient of $x^n$ is $\dfrac{f^{(n)}(0)}{n!}$, not
   $f^{(n)}(0)$. Always divide by the factorial.

2. **Forgetting the range of validity.** $\ln(1+x)$ is valid for $-1 < x \leq 1$, not all $x$. Using
   it outside this range gives a wrong answer.

3. **Incorrect substitution.** When expanding $e^{2x}$, substitute $2x$ into every term:
   $e^{2x} = 1 + 2x + \dfrac{4x^2}{2} + \dfrac{8x^3}{6} + \cdots$, not
   $e^{2x} = 1 + 2x + \dfrac{x^2}{2} + \cdots$.

4. **Sign errors in alternating series.** $\sin x$ and $\cos x$ have alternating signs:
$\sin x = x - \dfrac{x^3}{6} + \cdots$ (not $x + \dfrac{x^3}{6} + \cdots$).
:::

:::tip
**Exam strategy:**

- Memorise the six standard series. Derive others from them by substitution and algebra.
- For compound functions ($e^{x^2}\sin x$), multiply series term by term and collect like powers.
- Always state the range of validity when asked.
- To find a Maclaurin series efficiently, compute successive derivatives at $x = 0$ and look for the
pattern.
:::

<hr />

## Problems

<details>
<summary>Problem 1</summary>

Find the Maclaurin series of $f(x) = \cos 2x$ up to the $x^6$ term.
</details>

<details>
<summary>Solution 1</summary>

$f(0) = 1$, $f'(x) = -2\sin 2x$, $f'(0) = 0$, $f''(x) = -4\cos 2x$, $f''(0) = -4$,
$f'''(x) = 8\sin 2x$, $f'''(0) = 0$, $f^{(4)}(x) = 16\cos 2x$, $f^{(4)}(0) = 16$, $f^{(5)}(0) = 0$,
$f^{(6)}(0) = -64$.

Alternatively, substitute $2x$ into
$\cos x = 1 - \dfrac{x^2}{2!} + \dfrac{x^4}{4!} - \dfrac{x^6}{6!} + \cdots$:

$$\boxed{\cos 2x = 1 - 2x^2 + \frac{2x^4}{3} - \frac{4x^6}{45} + \cdots}$$

**If you get this wrong, revise:** [Standard Series](#2-standard-maclaurin-series) — Section 2.
</details>

<details>
<summary>Problem 2</summary>

Find the Maclaurin series of $\ln(1 - x^2)$ up to the $x^6$ term, stating the range of validity.
</details>

<details>
<summary>Solution 2</summary>

Substitute $-x^2$ into $\ln(1+u) = u - \dfrac{u^2}{2} + \dfrac{u^3}{3} - \cdots$:

$$\ln(1 - x^2) = -x^2 - \frac{x^4}{2} - \frac{x^6}{3} - \cdots$$

Range: $|x^2| < 1 \implies |x| < 1$. Also converges at $x = \pm 1$ (alternating harmonic at $x = 1$
when substituted, but here $-x^2 - x^4/2 - x^6/3 - \cdots$ at $x = 1$ is $-\sum 1/n$, diverges).

Valid for $-1 < x < 1$.

**If you get this wrong, revise:** [Standard Series](#2-standard-maclaurin-series) — Section 2.
</details>

<details>
<summary>Problem 3</summary>

Use the Maclaurin series for $e^x$ to show that
$\displaystyle\sum_{n=0}^{\infty}\frac{2^n}{n!} = e^2$.
</details>

<details>
<summary>Solution 3</summary>

$e^x = \displaystyle\sum_{n=0}^{\infty}\dfrac{x^n}{n!}$.

Setting $x = 2$: $e^2 = \displaystyle\sum_{n=0}^{\infty}\dfrac{2^n}{n!}$. $\blacksquare$

**If you get this wrong, revise:** [Exponential Function](#21-exponential-function) — Section 2.1.
</details>

<details>
<summary>Problem 4</summary>

Find the Taylor series of $\sin x$ about $x = \dfrac{\pi}{3}$ up to the $(x - \pi/3)^3$ term.
</details>

<details>
<summary>Solution 4</summary>

$f(x) = \sin x$. $f(\pi/3) = \dfrac{\sqrt{3}}{2}$. $f'(x) = \cos x$, $f'(\pi/3) = \dfrac{1}{2}$.
$f''(x) = -\sin x$, $f''(\pi/3) = -\dfrac{\sqrt{3}}{2}$. $f'''(x) = -\cos x$,
$f'''(\pi/3) = -\dfrac{1}{2}$.

$$\sin x = \frac{\sqrt{3}}{2} + \frac{1}{2}\left(x-\frac{\pi}{3}\right) - \frac{\sqrt{3}}{4}\left(x-\frac{\pi}{3}\right)^2 - \frac{1}{12}\left(x-\frac{\pi}{3}\right)^3 + \cdots$$

**If you get this wrong, revise:** [Taylor Series About $x = a$](#3-taylor-series-about-x--a) —
Section 3.
</details>

<details>
<summary>Problem 5</summary>

Use series to evaluate $\displaystyle\lim_{x\to 0}\frac{\sin x - x}{x^3}$.
</details>

<details>
<summary>Solution 5</summary>

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\sin x - x = -\dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\dfrac{\sin x - x}{x^3} = -\dfrac{1}{6} + \dfrac{x^2}{120} - \cdots \to \boxed{-\dfrac{1}{6}}$ as
$x \to 0$.

**If you get this wrong, revise:** [Evaluating Limits](#52-evaluating-limits-using-series) — Section
5.2.
</details>

<details>
<summary>Problem 6</summary>

Find the Maclaurin series of $(1 + 2x)^{-1/2}$ up to the $x^3$ term and state the range of validity.
</details>

<details>
<summary>Solution 6</summary>

Using the binomial series with $n = -1/2$:

$(1+u)^{-1/2} = 1 + \left(-\dfrac{1}{2}\right)u + \dfrac{(-1/2)(-3/2)}{2}u^2 + \dfrac{(-1/2)(-3/2)(-5/2)}{6}u^3 + \cdots$

$= 1 - \dfrac{u}{2} + \dfrac{3u^2}{8} - \dfrac{5u^3}{16} + \cdots$

Substituting $u = 2x$:

$$\boxed{(1+2x)^{-1/2} = 1 - x + \frac{3x^2}{2} - \frac{5x^3}{2} + \cdots}$$

Valid for $|2x| < 1 \implies |x| < \dfrac{1}{2}$.

**If you get this wrong, revise:** [Binomial Series](#25-binomial-series) — Section 2.5.
</details>

<details>
<summary>Problem 7</summary>

Find the radius of convergence of $\displaystyle\sum_{n=0}^{\infty}\frac{(2x)^n}{n^2 + 1}$.
</details>

<details>
<summary>Solution 7</summary>

$a_n = \dfrac{2^n}{n^2+1}$.

$\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{2^{n+1}(n^2+1)}{2^n(n^2+2n+2)} = \dfrac{2(n^2+1)}{n^2+2n+2} \to 2$
as $n \to \infty$.

$R = \dfrac{1}{2}$. The series converges for $\boxed{|x| < \dfrac{1}{2}}$.

**If you get this wrong, revise:** [The Ratio Test](#42-the-ratio-test) — Section 4.2.
</details>

<details>
<summary>Problem 8</summary>

Find the Maclaurin series of $e^x \sin x$ up to the $x^5$ term.
</details>

<details>
<summary>Solution 8</summary>

$e^x = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \dfrac{x^4}{24} + \cdots$

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

Multiply and collect terms:

$x$: $1 \cdot x = x$

$x^2$: $x \cdot x = x^2$

$x^3$:
$\dfrac{x^2}{2} \cdot x + 1 \cdot \left(-\dfrac{x^3}{6}\right) = \dfrac{x^3}{2} - \dfrac{x^3}{6} = \dfrac{x^3}{3}$

$x^4$: $\dfrac{x^3}{6} \cdot x + x \cdot \left(-\dfrac{x^3}{6}\right) = 0$

$x^5$:
$\dfrac{x^4}{24} \cdot x + \dfrac{x^2}{2}\left(-\dfrac{x^3}{6}\right) + 1 \cdot \dfrac{x^5}{120} = \dfrac{x^5}{24} - \dfrac{x^5}{12} + \dfrac{x^5}{120} = \dfrac{5 - 10 + 1}{120}x^5 = -\dfrac{x^5}{30}$

$$\boxed{e^x \sin x = x + x^2 + \frac{x^3}{3} - \frac{x^5}{30} + \cdots}$$

**If you get this wrong, revise:** [Compound Functions](#53-series-expansions-of-compound-functions)
— Section 5.3.
</details>

<details>
<summary>Problem 9</summary>

Show that $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{(2n+1)!} = \sin 1$.
</details>

<details>
<summary>Solution 9</summary>

$\sin x = \displaystyle\sum_{n=0}^{\infty}\dfrac{(-1)^n x^{2n+1}}{(2n+1)!}$.

Setting $x = 1$: $\sin 1 = \displaystyle\sum_{n=0}^{\infty}\dfrac{(-1)^n}{(2n+1)!}$. $\blacksquare$

**If you get this wrong, revise:** [Sine Function](#22-sine-function) — Section 2.2.
</details>

<details>
<summary>Problem 10</summary>

Use series to evaluate $\displaystyle\lim_{x\to 0}\frac{e^{-x^2} - 1}{x^2}$.
</details>

<details>
<summary>Solution 10</summary>

$e^{-x^2} = 1 - x^2 + \dfrac{x^4}{2} - \cdots$

$e^{-x^2} - 1 = -x^2 + \dfrac{x^4}{2} - \cdots$

$\dfrac{e^{-x^2} - 1}{x^2} = -1 + \dfrac{x^2}{2} - \cdots \to \boxed{-1}$ as $x \to 0$.

**If you get this wrong, revise:** [Evaluating Limits](#52-evaluating-limits-using-series) — Section
5.2.
</details>

:::

:::

:::

:::
