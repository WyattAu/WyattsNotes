---
title: Maclaurin and Taylor Series
description:
  'A-Level Further Maths notes on Maclaurin and Taylor Series: Board Coverage; 1. Maclaurin Series;
  1.1 Definition; 1.2 Derivation from the Taylor series.'
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
Approximation, and analysis that would otherwise be impossible. The Maclaurin series expands a
Function about $x = 0$; the Taylor series generalises this to expansion about any point. Together
They are among the most powerful tools in analysis and applied mathematics.

<!-- prettier-ignore -->
<DesmosGraph title="Taylor Series Approximation of e^x" expressions={["e^x", "sum_{n=0}^{N} x^n/n!"]} width={800} height={500} />

Adjust the parameters in the graph above to explore the relationships between variables.

### Board Coverage

| Board   | Paper   | Notes                                                                          |
| ------- | ------- | ------------------------------------------------------------------------------ |
| AQA     | Paper 1 | Maclaurin series; standard series for $e^x$$\sin x$$\cos x$$\ln(1+x)$$(1+x)^n$ |
| Edexcel | FP2     | Maclaurin + Taylor series about general $x = a$; convergence                   |
| OCR (A) | Paper 1 | Maclaurin series; standard series; applications                                |
| CIE     | P2      | Maclaurin series; expansion of compound functions; range of validity           |

:::info All boards require the standard Maclaurin series. Edexcel and CIE additionally require
Taylor series about $x = a$. The formula booklet lists the standard Maclaurin series — you must be
Able to derive them and apply them. :::

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

$f^{(n)}(0) = n!\,a_n$Giving $a_n = \dfrac{f^{(n)}(0)}{n!}$.

Substituting back gives the Maclaurin series.

<hr />

## 2. Standard Maclaurin Series

### 2.1 Exponential function

### Proof of the Maclaurin series for $e^x$

Let $f(x) = e^x$. Then $f^{(n)}(x) = e^x$ for all $n$So $f^{(n)}(0) = 1$ for all $n$.

$$e^x = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots = \sum_{n=0}^{\infty}\frac{x^n}{n!}$$

$$\boxed{e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!}} \quad \mathrm{for all } x \in \mathbb{R}$$

$\square$

**Radius of convergence:** $\infty$ (converges for all real $x$).

### 2.2 Sine function

### Proof of the Maclaurin series for $\sin x$

Let $f(x) = \sin x$. The derivatives cycle: $\sin x$$\cos x$$-\sin x$$-\cos x$$\sin x$...

At $x = 0$: $0, 1, 0, -1, 0, 1, 0, -1, \ldots$

$$\sin x = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \frac{x^7}{7!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}$$

$$\boxed{\sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!}} \quad \mathrm{for all } x \in \mathbb{R}$$

$\square$

**Radius of convergence:** $\infty$.

### 2.3 Cosine function

Let $f(x) = \cos x$. The derivatives cycle: $\cos x$$-\sin x$$-\cos x$$\sin x$$\cos x$...

At $x = 0$: $1, 0, -1, 0, 1, 0, -1, 0, \ldots$

$$\boxed{\cos x = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!}} \quad \mathrm{for all } x \in \mathbb{R}$$

### 2.4 Natural logarithm

Let $f(x) = \ln(1+x)$ for $|x| < 1$.

$f'(x) = \dfrac{1}{1+x}$$f''(x) = -\dfrac{1}{(1+x)^2}$$f'''(x) = \dfrac{2}{(1+x)^3}$...

$f^{(n)}(x) = \dfrac{(-1)^{n-1}(n-1)!}{(1+x)^n}$So $f^{(n)}(0) = (-1)^{n-1}(n-1)!$.

$$\boxed{\ln(1+x) = x - \frac{x^2}{2} + \frac{x^3}{3} - \frac{x^4}{4} + \cdots = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^n}{n}} \quad \mathrm{for } -1 < x \leq 1$$

**Radius of convergence:** 1. The series also converges at $x = 1$ (alternating harmonic series).

### 2.5 Binomial series

For $|x| < 1$ and any real $n$:

$$\boxed{(1+x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots = \sum_{k=0}^{\infty}\binom{n}{k}x^k}$$

Where $\dbinom{n}{k} = \dfrac◆LB◆n(n-1)(n-2)\cdots(n-k+1)◆RB◆◆LB◆k!◆RB◆$.

**Radius of convergence:** 1.

### 2.6 Arctangent

$$\boxed{\arctan x = x - \frac{x^3}{3} + \frac{x^5}{5} - \frac{x^7}{7} + \cdots = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{2n+1}} \quad \mathrm{for } |x| \leq 1$$

**Radius of convergence:** 1. Converges at $x = \pm 1$ by the alternating series test.

**Derivation.** Since $\dfrac{d}{dx}\arctan x = \dfrac{1}{1+x^2} = 1 - x^2 + x^4 - x^6 + \cdots$ for
$|x| < 1$Integrate term by term.

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

**Theorem.** If $f$ is $(n+1)$-times differentiable on an interval containing $a$ and $x$Then

$$f(x) = \sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k + R_n$$

Where the **remainder** in Lagrange form is

$$\boxed{R_n = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}}$$

For some $c$ between $a$ and $x$.

**Intuition.** The remainder term tells us the error when truncating the series after $n$ terms. If
$|R_n| \to 0$ as $n \to \infty$Then the Taylor series converges to $f(x)$.

### 3.3 Worked example

Find the Taylor series of $e^x$ about $x = 1$ up to the $x^3$ term.

$f(x) = e^x$$f'(x) = e^x$$f''(x) = e^x$$f'''(x) = e^x$.

At $x = 1$: $f(1) = f'(1) = f''(1) = f'''(1) = e$.

$$e^x = e + e(x-1) + \frac{e}{2}(x-1)^2 + \frac{e}{6}(x-1)^3 + \cdots = e\sum_{n=0}^{\infty}\frac{(x-1)^n}{n!}$$

### 3.4 Converting between Maclaurin and Taylor series

**Example.** Find the Taylor series of $\ln x$ about $x = 1$.

Let $u = x - 1$So $\ln x = \ln(1 + u)$.

$$\ln(1+u) = u - \frac{u^2}{2} + \frac{u^3}{3} - \cdots$$

$$\boxed{\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \cdots} \quad \mathrm{for } 0 < x \leq 2$$

<hr />

## 4. Interval and Radius of Convergence

### 4.1 Definitions

**Definition.** The **radius of convergence** $R$ of a power series
$\displaystyle\sum_{n=0}^{\infty}a_n x^n$ is the value such that the series converges for $|x| < R$
And diverges for $|x| > R$.

The **interval of convergence** is the set of all $x$ for which the series converges. The endpoints
$x = \pm R$ must be tested separately.

### 4.2 The ratio test

**Theorem (Ratio test).** For the series $\displaystyle\sum_{n=0}^{\infty}a_n x^n$Let

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

$a_n = \dfrac{(-1)^{n-1}}{n}$$a_{n+1} = \dfrac{(-1)^n}{n+1}$.

$\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{n}{n+1} \to 1$ as $n \to \infty$.

$R = 1$. The series converges for $|x| < 1$.

At $x = 1$: alternating harmonic series, converges. At $x = -1$: $-\sum 1/n$Diverges.

Interval of convergence: $-1 < x \leq 1$.

**Example 2.** Find the radius of convergence of $\displaystyle\sum_{n=0}^{\infty}\frac{x^n}{n!}$.

$\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{1/(n+1)!}{1/n!} = \dfrac{1}{n+1} \to 0$.

$R = \infty$. Converges for all $x$.

### 4.4 Convergence of the geometric series

### Proof of convergence of the geometric series

For $|x| < 1$The geometric series is $\displaystyle\sum_{n=0}^{\infty}x^n$.

The partial sum is $S_N = 1 + x + x^2 + \cdots + x^N$.

$S_N = \dfrac{1 - x^{N+1}}{1 - x}$ (standard formula).

Since $|x| < 1$: $x^{N+1} \to 0$ as $N \to \infty$So $S_N \to \dfrac{1}{1-x}$.

$$\boxed{\sum_{n=0}^{\infty}x^n = \frac{1}{1-x} \quad \mathrm{for } |x| < 1}$$

$\square$

:::tip tip $\dfrac{1}{1+x}$$\ln(1+x)$And $\arctan x$ all derive from it. :::

<hr />

## 5. Applications

### 5.1 Approximating values

**Example.** Approximate $e^{0.1}$ using the first four terms of the Maclaurin series.

$e^{0.1} \approx 1 + 0.1 + \dfrac{0.01}{2} + \dfrac{0.001}{6} = 1 + 0.1 + 0.005 + 0.000167 \approx 1.10517$.

The actual value is $\approx 1.10517$So the error is negligible with just 4 terms.

**Example.** Approximate $\sin(0.1)$ and bound the error.

$\sin(0.1) \approx 0.1 - \dfrac{0.001}{6} = 0.1 - 0.000167 = 0.099833$.

The next term is $\dfrac{(0.1)^5}{120} \approx 8.3 \times 10^{-8}$So the error is at most this.

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

**Intuition.** L'Hôpital's rule is a consequence of Taylor's theorem. If $f(a) = g(a) = 0$Then Near
$a$:

$$\frac{f(x)}{g(x)} \approx \frac◆LB◆f'(a)(x-a) + \frac{f''(a)}{2}(x-a)^2◆RB◆◆LB◆g'(a)(x-a) + \frac{g''(a)}{2}(x-a)^2◆RB◆ = \frac◆LB◆f'(a) + \frac{f''(a)}{2}(x-a)◆RB◆◆LB◆g'(a) + \frac{g''(a)}{2}(x-a)◆RB◆$$

Taking $x \to a$ gives $\dfrac{f'(a)}{g'(a)}$Which is L'Hôpital's rule. The series approach often
Gives more information (higher-order terms) than applying L'Hôpital's rule repeatedly.

<hr />

## 6. Key Results and Pitfalls

:::warning **Common errors:**

1. **Wrong coefficients.** The Maclaurin coefficient of $x^n$ is $\dfrac{f^{(n)}(0)}{n!}$Not
   $f^{(n)}(0)$. Always divide by the factorial.

2. **Forgetting the range of validity.** $\ln(1+x)$ is valid for $-1 < x \leq 1$Not all $x$. Using
   it outside this range gives a wrong answer.

3. **Incorrect substitution.** When expanding $e^{2x}$Substitute $2x$ into every term:
   $e^{2x} = 1 + 2x + \dfrac{4x^2}{2} + \dfrac{8x^3}{6} + \cdots$Not
   $e^{2x} = 1 + 2x + \dfrac{x^2}{2} + \cdots$.

4. **Sign errors in alternating series.** $\sin x$ and $\cos x$ have alternating signs:
   $\sin x = x - \dfrac{x^3}{6} + \cdots$ (not $x + \dfrac{x^3}{6} + \cdots$). :::

:::tip **Exam strategy:**

- Memorise the six standard series. Derive others from them by substitution and algebra.
- For compound functions ($e^{x^2}\sin x$), multiply series term by term and collect like powers.
- Always state the range of validity when asked.
- To find a Maclaurin series efficiently, compute successive derivatives at $x = 0$ and look for the
  pattern. :::

<hr />

## Problems

<details>
<summary>Problem 1</summary>

Find the Maclaurin series of $f(x) = \cos 2x$ up to the $x^6$ term.

</details>

<details>
<summary>Solution 1</summary>

$f(0) = 1$$f'(x) = -2\sin 2x$$f'(0) = 0$$f''(x) = -4\cos 2x$$f''(0) = -4$
$f'''(x) = 8\sin 2x$$f'''(0) = 0$$f^{(4)}(x) = 16\cos 2x$$f^{(4)}(0) = 16$$f^{(5)}(0) = 0$
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
When substituted, but here $-x^2 - x^4/2 - x^6/3 - \cdots$ at $x = 1$ is $-\sum 1/n$Diverges).

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

Find the Taylor series of $\sin x$ about $x = \dfrac◆LB◆\pi◆RB◆◆LB◆3◆RB◆$ up to the $(x - \pi/3)^3$
Term.

</details>

<details>
<summary>Solution 4</summary>

$f(x) = \sin x$. $f(\pi/3) = \dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$. $f'(x) = \cos x$
$f'(\pi/3) = \dfrac{1}{2}$. $f''(x) = -\sin x$$f''(\pi/3) = -\dfrac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆$.
$f'''(x) = -\cos x$$f'''(\pi/3) = -\dfrac{1}{2}$.

$$\sin x = \frac◆LB◆\sqrt{3}◆RB◆◆LB◆2◆RB◆ + \frac{1}{2}\left(x-\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right) - \frac◆LB◆\sqrt{3}◆RB◆◆LB◆4◆RB◆\left(x-\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right)^2 - \frac{1}{12}\left(x-\frac◆LB◆\pi◆RB◆◆LB◆3◆RB◆\right)^3 + \cdots$$

**If you get this wrong, revise:** [Taylor Series About $x = a$](#3-taylor-series-about-x--a) —
Section 3.

</details>

<details>
<summary>Problem 5</summary>

Use series to evaluate $\displaystyle\lim_{x\to 0}\frac◆LB◆\sin x - x◆RB◆◆LB◆x^3◆RB◆$.

</details>

<details>
<summary>Solution 5</summary>

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\sin x - x = -\dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\dfrac◆LB◆\sin x - x◆RB◆◆LB◆x^3◆RB◆ = -\dfrac{1}{6} + \dfrac{x^2}{120} - \cdots \to \boxed{-\dfrac{1}{6}}$
As $x \to 0$.

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
As $n \to \infty$.

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

---

## 7. Advanced Worked Examples

### Example 7.1: Maclaurin series of a composite function

**Problem.** Find the Maclaurin series of $f(x) = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{1 + x^2}◆RB◆$ up to the
$x^6$ term.

**Solution.** Use the binomial series with $n = -1/2$:

$(1 + u)^{-1/2} = 1 - \dfrac{u}{2} + \dfrac{3u^2}{8} - \dfrac{5u^3}{16} + \dfrac{35u^4}{128} - \cdots$

Substituting $u = x^2$:

$$\frac◆LB◆1◆RB◆◆LB◆\sqrt{1+x^2}◆RB◆ = 1 - \frac{x^2}{2} + \frac{3x^4}{8} - \frac{5x^6}{16} + \cdots$$

Valid for $|x^2| < 1$I.e., $|x| < 1$.

### Example 7.2: Taylor series and error bounds

**Problem.** Use the Taylor series of $\cos x$ about $x = 0$ to approximate $\cos(0.2)$ and bound
The error.

**Solution.** $\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \dfrac{x^6}{720} + \cdots$

Using three terms:
$\cos(0.2) \approx 1 - 0.02 + \dfrac{0.0016}{24} = 1 - 0.02 + 0.0000667 = 0.980067$.

Error bound: the next term is
$\dfrac{(0.2)^6}{720} = \dfrac◆LB◆6.4 \times 10^{-7}◆RB◆◆LB◆720◆RB◆ \approx 8.9 \times 10^{-10}$.

So $|\text{error}| < 10^{-9}$.

### Example 7.3: Product of two Maclaurin series

**Problem.** Find the Maclaurin series of $e^x \cos x$ up to the $x^4$ term.

**Solution.** $e^x = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \dfrac{x^4}{24} + \cdots$

$\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \cdots$

Multiplying and collecting terms:

$1$: $1 \times 1 = 1$ $x$: $1 \cdot x = x$ $x^2$:
$1 \cdot (-x^2/2) + x \cdot x = -x^2/2 + x^2 = x^2/2$ $x^3$:
$1 \cdot 0 + x \cdot (-x^2/2) + (x^2/2) \cdot x = -x^3/2 + x^3/2 = 0$ $x^4$:
$1 \cdot (x^4/24) + x \cdot 0 + (x^2/2)(-x^2/2) + (x^3/6) \cdot x = x^4/24 - x^4/4 + x^4/6 = (1 - 6 + 4)x^4/24 = -x^4/24$

$$e^x\cos x = 1 + x + \frac{x^2}{2} - \frac{x^4}{24} + \cdots$$

### Example 7.4: Series expansion of an inverse function

**Problem.** Find the Maclaurin series of $\sec x$ up to the $x^4$ term.

**Solution.** Write $\sec x = \dfrac◆LB◆1◆RB◆◆LB◆\cos x◆RB◆ = (1 - x^2/2 + x^4/24 - \cdots)^{-1}$.

Using $(1 - u)^{-1} = 1 + u + u^2 + \cdots$ with $u = x^2/2 - x^4/24 + \cdots$:

$$\sec x = 1 + \left(\frac{x^2}{2} - \frac{x^4}{24}\right) + \left(\frac{x^2}{2}\right)^2 + \cdots$$

$$= 1 + \frac{x^2}{2} + \left(-\frac{x^4}{24} + \frac{x^4}{4}\right) + \cdots = 1 + \frac{x^2}{2} + \frac{5x^4}{24} + \cdots$$

### Example 7.5: Using series to find a limit

**Problem.** Evaluate $\displaystyle\lim_{x\to 0}\frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆$.

**Solution.** $\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$$\frac◆LB◆x - \sin x◆RB◆◆LB◆x^3◆RB◆ = \frac◆LB◆x - x + x^3/6 - x^5/120 + \cdots◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6} - \frac{x^2}{120} + \cdots \to \boxed{\frac{1}{6}}$$

### Example 7.6: Maclaurin series by differentiation

**Problem.** Find the Maclaurin series of $f(x) = (1 + x)^3 e^x$ up to the $x^3$ term.

**Solution.** $f(x) = (1 + 3x + 3x^2 + x^3)e^x$.

$e^x = 1 + x + x^2/2 + x^3/6 + \cdots$

$$f(x) = (1 + 3x + 3x^2 + x^3)(1 + x + x^2/2 + x^3/6)$$

$1$: $1 \times 1 = 1$ $x$: $1 + 3 = 4$ $x^2$: $1/2 + 3 + 3 = 13/2$ $x^3$:
$1/6 + 3/2 + 3 + 1 = 1/6 + 9/6 + 18/6 + 6/6 = 34/6 = 17/3$

$$f(x) = 1 + 4x + \frac{13x^2}{2} + \frac{17x^3}{3} + \cdots$$

### Example 7.7: Convergence of alternating series

**Problem.** How many terms of $\displaystyle\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}$ are needed to
Approximate $\ln 2$ with an error less than $0.001$?

**Solution.** This is the alternating harmonic series, with $S = \ln 2$. The error after $N$ terms
Is bounded by the absolute value of the $(N+1)$-th term:

$$|\text{error}| \leq \frac{1}{N+1} < 0.001 \implies N + 1 > 1000 \implies N \geq 1000$$

So at least 1000 terms are needed.

### Example 7.8: Taylor series and approximation of definite integrals

**Problem.** Use the Maclaurin series of $e^{-x^2}$ to approximate
$\displaystyle\int_0^{1/2} e^{-x^2}\,dx$ to 5 decimal places.

**Solution.** $e^{-x^2} = 1 - x^2 + \dfrac{x^4}{2} - \dfrac{x^6}{6} + \dfrac{x^8}{24} - \cdots$

$$\int_0^{1/2}e^{-x^2}\,dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \frac{x^9}{216}\right]_0^{1/2}$$

$$= \frac{1}{2} - \frac{1}{24} + \frac{1}{320} - \frac{1}{5376} + \frac{1}{110592}$$

$$= 0.5 - 0.041667 + 0.003125 - 0.000186 + 0.000009 = 0.461281$$

The error is bounded by the next term:
$\dfrac◆LB◆1◆RB◆◆LB◆11 \times 2^{11}◆RB◆ = \dfrac{1}{22528} \approx 0.000044$.

So the integral $\approx 0.4613$ to 4 decimal places.

---

## 8. Connections to Other Topics

### 8.1 Maclaurin series and differential equations

The Maclaurin series provides a method for solving differential equations by substituting a power
Series ansatz. See
[Differential Equations](/docs/alevel/further-maths/pure-mathematics/differential-equations).

### 8.2 Taylor series and complex numbers

Euler's formula $e^{i\theta} = \cos\theta + i\sin\theta$ is the link between exponential series and
Trigonometric series. See
[Complex Numbers](/docs/alevel/further-maths/pure-mathematics/further-complex-numbers).

### 8.3 Binomial series and further algebra

The binomial expansion is essential for partial fraction decomposition and generating functions. See
[Further Algebra](/docs/alevel/further-maths/pure-mathematics/further-algebra).

---

## 9. Additional Exam-Style Questions

### Question 11

**(a)** Find the Maclaurin series of $\ln\!\left(\dfrac{1 + x}{1 - x}\right)$ up to the $x^5$ term.

**(b)** State the range of validity.

<details>
<summary>Solution</summary>

**(a)** $\ln\!\left(\dfrac{1+x}{1-x}\right) = \ln(1+x) - \ln(1-x)$

$\ln(1+x) = x - \dfrac{x^2}{2} + \dfrac{x^3}{3} - \dfrac{x^4}{4} + \dfrac{x^5}{5} - \cdots$

$\ln(1-x) = -x - \dfrac{x^2}{2} - \dfrac{x^3}{3} - \dfrac{x^4}{4} - \dfrac{x^5}{5} - \cdots$

$$\ln\!\left(\frac{1+x}{1-x}\right) = 2x + \frac{2x^3}{3} + \frac{2x^5}{5} + \cdots$$

**(b)** Valid for $-1 < x < 1$ (intersection of validity of $\ln(1+x)$ and $\ln(1-x)$).

</details>

### Question 12

Use series to find $\displaystyle\lim_{x\to 0}\frac◆LB◆1 - \cos x - \frac{x^2}{2}◆RB◆◆LB◆x^4◆RB◆$.

<details>
<summary>Solution</summary>

$\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \cdots$

$$\frac◆LB◆1 - \cos x - x^2/2◆RB◆◆LB◆x^4◆RB◆ = \frac◆LB◆1 - (1 - x^2/2 + x^4/24 - \cdots) - x^2/2◆RB◆◆LB◆x^4◆RB◆ = \frac◆LB◆-x^4/24 + \cdots◆RB◆◆LB◆x^4◆RB◆ \to \boxed{-\frac{1}{24}}$$

</details>

### Question 13

**Prove by induction** that $\displaystyle\frac{d^n}{dx^n}(xe^x) = (x + n)e^x$ for all $n \geq 0$.

<details>
<summary>Solution</summary>

**Base case ($n = 0$):** $\dfrac{d^0}{dx^0}(xe^x) = xe^x = (x+0)e^x$. True.

**Inductive step.** Assume $\dfrac{d^k}{dx^k}(xe^x) = (x+k)e^x$.

$$\frac{d^{k+1}}{dx^{k+1}}(xe^x) = \frac{d}{dx}[(x+k)e^x] = e^x + (x+k)e^x = (x+k+1)e^x \quad \blacksquare$$

</details>

### Question 14

Find the Maclaurin series of $\sqrt◆LB◆\cos x◆RB◆$ up to the $x^4$ term.

<details>
<summary>Solution</summary>

$\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \cdots$

$\sqrt◆LB◆\cos x◆RB◆ = (1 - x^2/2 + x^4/24 - \cdots)^{1/2}$

Using $(1+u)^{1/2} = 1 + u/2 - u^2/8 + \cdots$ with $u = -x^2/2 + x^4/24$:

$u^2 = x^4/4 + \cdots$

$$\sqrt◆LB◆\cos x◆RB◆ = 1 + \frac{1}{2}\!\left(-\frac{x^2}{2} + \frac{x^4}{24}\right) - \frac{1}{8}\!\left(\frac{x^4}{4}\right) + \cdots$$

$$= 1 - \frac{x^2}{4} + \frac{x^4}{48} - \frac{x^4}{32} + \cdots = 1 - \frac{x^2}{4} - \frac{x^4}{96} + \cdots$$

</details>

### Question 15

Use the Maclaurin series for $\arctan x$ to show that
$\displaystyle 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.

<details>
<summary>Solution</summary>

$\arctan x = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \dfrac{x^7}{7} + \cdots$ for $|x| \leq 1$.

Setting $x = 1$:

$$\arctan 1 = 1 - \frac{1}{3} + \frac{1}{5} - \frac{1}{7} + \cdots = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$$

Therefore $\displaystyle\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1} = \frac◆LB◆\pi◆RB◆◆LB◆4◆RB◆$.
$\blacksquare$

</details>

:::

---

## 10. Advanced Worked Examples

### Example 10.1: Maclaurin series of $e^x\sin x$

**Problem.** Find the Maclaurin series of $e^x\sin x$ up to the term in $x^5$.

**Solution.** $e^x = 1+x+\dfrac{x^2}{2}+\dfrac{x^3}{6}+\dfrac{x^4}{24}+\dfrac{x^5}{120}+\cdots$

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

Multiplying and collecting terms up to $x^5$:

$e^x\sin x = \left(1+x+\frac{x^2}{2}+\frac{x^3}{6}+\frac{x^4}{24}+\frac{x^5}{120}\right)\!\left(x-\frac{x^3}{6}+\frac{x^5}{120}\right)$

$= x - \frac{x^3}{6} + \frac{x^5}{120} + x^2 - \frac{x^4}{6} + \frac{x^5}{120} + \frac{x^3}{2} - \frac{x^5}{12} + \frac{x^4}{6} - \frac{x^5}{72} + \frac{x^5}{24} - \frac{x^6}{144} + \cdots$

$= x + x^2 + \dfrac{x^3}{3} - \boxed{\dfrac{x^5}{30} + O(x^6)}$

Wait, let me be more careful:

$x^5$ coefficient: $\dfrac{1}{120} + \dfrac{1}{120} - \dfrac{1}{12} - \dfrac{1}{72} + \dfrac{1}{24}$

$= \dfrac{6 + 6 - 30 - 5 + 15}{720} = \dfrac{-8}{720} = -\dfrac{1}{90}$.

So $e^x\sin x = x + x^2 + \dfrac{x^3}{3} - \dfrac{x^5}{30} + \cdots$

Let me recompute the $x^4$ and $x^5$ terms carefully:

$x^4$: from $(-\frac{1}{6}x^4)(1) + (x^4/24)(x/x)... $ Actually:

- $1 \times (-\frac{x^3}{6})$ contributes nothing to $x^4$
- $x \times (-\frac{x^3}{6}) = -\frac{x^4}{6}$ ✓
- $\frac{x^2}{2} \times x = \frac{x^3}{2}$ (not $x^4$)

$x^4$ terms: $x \cdot (-\frac{x^3}{6}) = -\frac{x^4}{6}$ and $\frac{x^4}{24} \cdot x$... No, that's
$x^5$.

Actually $x^4$ comes from: $x \cdot (-\frac{x^3}{6}) = -\frac{x^4}{6}$.

So coefficient of $x^4$ is $-\dfrac{1}{6}$.

$$\boxed{e^x\sin x = x + x^2 + \frac{x^3}{3} - \frac{x^4}{6} - \frac{x^5}{30} + O(x^6)}$$

### Example 10.2: Taylor series about a non-zero point

**Problem.** Find the Taylor series of $\ln x$ about $x = 1$ up to the term in $(x-1)^4$.

**Solution.** $f(x) = \ln x$$f(1) = 0$.

$f'(x) = \dfrac{1}{x}$$f'(1) = 1$. $f''(x) = -\dfrac{1}{x^2}$$f''(1) = -1$.
$f'''(x) = \dfrac{2}{x^3}$$f'''(1) = 2$. $f^{(4)}(x) = -\dfrac{6}{x^4}$$f^{(4)}(1) = -6$.

$$\ln x = (x-1) - \frac{(x-1)^2}{2} + \frac{(x-1)^3}{3} - \frac{(x-1)^4}{4} + \cdots$$

### Example 10.3: Using series to evaluate a limit

**Problem.** Find $\displaystyle\lim_{x \to 0} \frac◆LB◆e^x - 1 - x - \frac{x^2}{2}◆RB◆◆LB◆x^3◆RB◆$.

**Solution.** $e^x = 1 + x + \dfrac{x^2}{2} + \dfrac{x^3}{6} + \dfrac{x^4}{24} + \cdots$

$$\frac{e^x - 1 - x - x^2/2}{x^3} = \frac◆LB◆x^3/6 + x^4/24 + \cdots◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{6} + \frac{x}{24} + \cdots$$

$$\boxed{\lim_{x \to 0} = \frac{1}{6}}$$

### Example 10.4: Convergence of a Maclaurin series

**Problem.** Find the radius of convergence of the Maclaurin series of $\ln(1+x)$.

**Solution.** $\ln(1+x) = \displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^n}{n}$.

Ratio test: $\left|\dfrac{a_{n+1}}{a_n}\right| = \dfrac{n}{n+1}|x| \to |x|$.

Converges when $|x| < 1$. At $x = 1$: alternating harmonic series (converges). At $x = -1$:
$-\sum \dfrac{1}{n}$ (diverges).

Radius of convergence: $\boxed{1}$Interval: $(-1, 1]$.

### Example 10.5: Series solution to estimate a definite integral

**Problem.** Use a Maclaurin series to estimate $\displaystyle\int_0^{0.5} e^{-x^2}\,dx$ to 4
Decimal places.

**Solution.** $e^{-x^2} = 1 - x^2 + \dfrac{x^4}{2} - \dfrac{x^6}{6} + \dfrac{x^8}{24} - \cdots$

$$\int_0^{0.5} e^{-x^2}\,dx = \left[x - \frac{x^3}{3} + \frac{x^5}{10} - \frac{x^7}{42} + \frac{x^9}{216} - \cdots\right]_0^{0.5}$$

$= 0.5 - \dfrac{0.125}{3} + \dfrac{0.03125}{10} - \dfrac{0.0078125}{42} + \dfrac{0.001953125}{216}$

$= 0.5 - 0.04167 + 0.003125 - 0.000186 + 0.000009 = \boxed{0.4613}$ (4 d.p.)

### Example 10.6: Differentiating a known series

**Problem.** By differentiating the Maclaurin series for $\dfrac{1}{1-x}$Find the Maclaurin series
For $\dfrac{1}{(1-x)^2}$.

**Solution.** $\dfrac{1}{1-x} = \sum_{n=0}^{\infty} x^n = 1 + x + x^2 + x^3 + \cdots$

Differentiating:
$\dfrac{1}{(1-x)^2} = \sum_{n=1}^{\infty} nx^{n-1} = \sum_{n=0}^{\infty} (n+1)x^n = 1 + 2x + 3x^2 + 4x^3 + \cdots$

### Example 10.7: Multiplying two Taylor series

**Problem.** Find the Maclaurin series of $\cos x \cdot e^{-x}$ up to $x^4$.

**Solution.** $\cos x = 1 - \dfrac{x^2}{2} + \dfrac{x^4}{24} - \cdots$

$e^{-x} = 1 - x + \dfrac{x^2}{2} - \dfrac{x^3}{6} + \dfrac{x^4}{24} - \cdots$

Multiplying:
$(1 - \frac{x^2}{2} + \frac{x^4}{24})(1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^4}{24})$

$= 1 - x + \frac{x^2}{2} - \frac{x^3}{6} + \frac{x^4}{24} - \frac{x^2}{2} + \frac{x^3}{2} - \frac{x^4}{4} + \frac{x^4}{24} + \cdots$

$= 1 - x + 0 - \frac{x^3}{3} + \left(\frac{1}{24}-\frac{1}{4}+\frac{1}{24}\right)x^4 + \cdots$

Wait: $\frac{1}{24}-\frac{6}{24}+\frac{1}{24} = -\frac{4}{24} = -\frac{1}{6}$.

$$\boxed{\cos x \cdot e^{-x} = 1 - x - \frac{x^3}{3} - \frac{x^4}{6} + O(x^5)}$$

---

## 11. Common Pitfalls

| Pitfall                                                                   | Correct Approach                                                        |
| ------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Confusing the Maclaurin series (about $x=0$) with a general Taylor series | Maclaurin: $a=0$; Taylor: $f(x) = \sum \dfrac{f^{(n)}(a)}{n!}(x-a)^n$   |
| Forgetting the factorial in the denominator                               | Each term has $\dfrac{f^{(n)}(0)}{n!}x^n$Not $\dfrac{f^{(n)}(0)}{n}x^n$ |
| Using a series outside its radius of convergence                          | Always check: e.g., $\ln(1+x)$ converges only for $-1 < x \leq 1$       |
| Incorrectly multiplying series                                            | Collect like powers carefully; use a table if needed                    |

---

## 12. Additional Exam-Style Questions

### Question 8

Find the Maclaurin series of $(1+x)^{-1/2}$ and determine its radius of convergence.

<details>
<summary>Solution</summary>

$(1+x)^{-1/2} = 1 - \dfrac{x}{2} + \dfrac{3x^2}{8} - \dfrac{5x^3}{16} + \dfrac{35x^4}{128} - \cdots$

Using the general binomial: $\displaystyle\sum_{n=0}^{\infty} \binom{-1/2}{n} x^n$.

Radius of convergence: $|x| < 1$ (from the binomial series convergence condition).

</details>

### Question 9

**Prove that**
$\displaystyle\int_0^1 \frac◆LB◆\ln(1+x)◆RB◆◆LB◆x◆RB◆\,dx = \frac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆$.

<details>
<summary>Solution</summary>

$\ln(1+x) = \displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^n}{n}$ for $|x| < 1$.

$\dfrac◆LB◆\ln(1+x)◆RB◆◆LB◆x◆RB◆ = \displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^{n-1}}{n}$.

$\displaystyle\int_0^1 \frac◆LB◆\ln(1+x)◆RB◆◆LB◆x◆RB◆\,dx = \sum_{n=1}^{\infty} \frac{(-1)^{n+1}}{n^2} = \eta(2) = \frac◆LB◆\pi^2◆RB◆◆LB◆12◆RB◆$.

This is the Dirichlet eta function evaluated at 2. $\blacksquare$

</details>

### Question 10

Use the Maclaurin series for $\sin x$ to find $\sin 0.1$ correct to 8 decimal places.

<details>
<summary>Solution</summary>

$\sin 0.1 = 0.1 - \dfrac{0.001}{6} + \dfrac{0.00001}{120} - \cdots = 0.1 - 0.00016667 + 0.00000008 - \cdots$

$\boxed{\sin 0.1 \approx 0.09983342}$

The $x^7$ term contributes approximately $10^{-12}$Which is negligible.

</details>

---

## 13. Advanced Topics

### 13.1 Lagrange form of the remainder

The error in truncating a Taylor series after $n$ terms is:

$$R_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1}$$

For some $c$ between $a$ and $x$. This gives a bound on the truncation error.

### 13.2 Power series solutions of ODEs

The Maclaurin series method can solve ODEs that cannot be solved by standard methods. Substitute
$y = \sum a_n x^n$ into the ODE and equate coefficients.

### 13.3 Standard Maclaurin series (reference)

| Function         | Series                                                              | Radius   |
| ---------------- | ------------------------------------------------------------------- | -------- |
| $e^x$            | $\displaystyle\sum_{n=0}^{\infty} \frac{x^n}{n!}$                   | $\infty$ |
| $\sin x$         | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{(2n+1)!}$  | $\infty$ |
| $\cos x$         | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!}$      | $\infty$ |
| $\ln(1+x)$       | $\displaystyle\sum_{n=1}^{\infty} \frac{(-1)^{n+1}x^n}{n}$          | $1$      |
| $(1+x)^\alpha$   | $\displaystyle\sum_{n=0}^{\infty} \binom◆LB◆\alpha◆RB◆◆LB◆n◆RB◆x^n$ | $1$      |
| $\arctan x$      | $\displaystyle\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n+1}}{2n+1}$     | $1$      |
| $\dfrac{1}{1-x}$ | $\displaystyle\sum_{n=0}^{\infty} x^n$                              | $1$      |

### 13.4 Using series to prove identities

Many trigonometric identities can be derived from series. For example, $e^{ix} = \cos x + i\sin x$
Implies all the standard addition formulae.

---

## 14. Further Exam-Style Questions

### Question 11

Find the Maclaurin series of $\dfrac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆$ and determine
$\displaystyle\lim_{x \to 0} \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆$.

<details>
<summary>Solution</summary>

$\sin x = x - \dfrac{x^3}{6} + \dfrac{x^5}{120} - \cdots$

$\dfrac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆ = 1 - \dfrac{x^2}{6} + \dfrac{x^4}{120} - \cdots$

$\displaystyle\lim_{x \to 0} \frac◆LB◆\sin x◆RB◆◆LB◆x◆RB◆ = 1$ (the constant term).

</details>

### Question 12

**Prove that** the Maclaurin series of $\cos x$ converges to $\cos x$ for all real $x$.

<details>
<summary>Solution</summary>

The $n$-th derivative of $\cos x$ is one of $\pm\cos x$ or $\pm\sin x$So $|f^{(n)}(c)| \leq 1$ for
All $c$ and $n$.

By the Lagrange remainder: $|R_n(x)| \leq \dfrac◆LB◆|x|^{n+1}◆RB◆◆LB◆(n+1)!◆RB◆$.

For any fixed $x$: $\displaystyle\lim_{n \to \infty} \frac◆LB◆|x|^{n+1}◆RB◆◆LB◆(n+1)!◆RB◆ = 0$
(factorial grows faster than exponential).

Therefore $R_n(x) \to 0$ and the series converges to $\cos x$. $\blacksquare$

</details>

### Question 13

Use series to evaluate $\displaystyle\lim_{x \to 0} \frac◆LB◆\tan x - x◆RB◆◆LB◆x^3◆RB◆$.

<details>
<summary>Solution</summary>

$\tan x = x + \dfrac{x^3}{3} + \dfrac{2x^5}{15} + \cdots$

$\dfrac◆LB◆\tan x - x◆RB◆◆LB◆x^3◆RB◆ = \dfrac◆LB◆x^3/3 + 2x^5/15 + \cdots◆RB◆◆LB◆x^3◆RB◆ = \dfrac{1}{3} + \dfrac{2x^2}{15} + \cdots$

$\boxed{\displaystyle\lim_{x \to 0} \frac◆LB◆\tan x - x◆RB◆◆LB◆x^3◆RB◆ = \frac{1}{3}}$

</details>

---

## 15. Advanced Topics

### 15.1 Power series solutions of differential equations

For an ODE $y'' + p(x)y' + q(x)y = 0$Assume $y = \sum_{n=0}^{\infty} a_n x^n$.

Substitute into the ODE and equate coefficients of each power of $x$ to zero. This gives a
Recurrence relation for $a_n$.

### 15.2 The exponential generating function

$E(x) = \sum_{n=0}^{\infty} \dfrac{a_n x^n}{n!}$.

This is useful in combinatorics and probability (e.g., the exponential generating function of the
Bernoulli numbers).

### 15.3 Binomial series — convergence at the endpoints

$(1+x)^\alpha$ converges at $x = 1$ when $\alpha > -1$ and at $x = -1$ when $\alpha > 0$.

Example: $(1+x)^{1/2}$ converges at $x = 1$ (giving $\sqrt{2}$) but diverges at $x = -1$.

### 15.4 Series acceleration

Techniques like Euler acceleration or Shanks transformation can speed up the convergence of slowly
Converging alternating series.

---

## 16. Further Exam-Style Questions

### Question 14

Find the Maclaurin series of $\ln(1-x^2)$ up to $x^6$ and state the radius of convergence.

<details>
<summary>Solution</summary>

$\ln(1-u) = -\displaystyle\sum_{n=1}^{\infty} \frac{u^n}{n}$ for $|u| < 1$. With $u = x^2$:

$\ln(1-x^2) = -\displaystyle\sum_{n=1}^{\infty} \frac{x^{2n}}{n} = -x^2 - \dfrac{x^4}{2} - \dfrac{x^6}{3} - \cdots$

Radius of convergence: $|x^2| < 1 \implies |x| < 1$. At $x = 1$: $-\sum \dfrac{1}{n}$ diverges.

$\boxed{\ln(1-x^2) = -x^2 - \dfrac{x^4}{2} - \dfrac{x^6}{3} + O(x^8)}$Radius $= 1$.

</details>

### Question 15

**Prove that** $\displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n} = 2$.

<details>
<summary>Solution</summary>

$S = \displaystyle\sum_{n=1}^{\infty} \frac{n}{2^n} = \sum_{n=1}^{\infty} n x^n\Big|_{x=1/2}$.

We know $\displaystyle\sum_{n=1}^{\infty} n x^{n-1} = \frac{1}{(1-x)^2}$ for $|x| < 1$.

So $\displaystyle\sum_{n=1}^{\infty} n x^n = \frac{x}{(1-x)^2}$.

At $x = 1/2$: $S = \dfrac{1/2}{(1/2)^2} = \dfrac{1/2}{1/4} = 2$. $\blacksquare$

</details>

## Summary

<!-- TODO: Add a summary for this topic -->
