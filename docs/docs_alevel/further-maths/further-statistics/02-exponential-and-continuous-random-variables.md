---
title: Exponential Distribution and Continuous Random Variables
description: "A-Level Further Maths notes on Exponential Distribution and Continuous Random Variables: Board Coverage; 1. Continuous Random Variables."
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: exponential-continuous-rv
sidebar_position: 2
---
## Exponential Distribution and Continuous Random Variables

The exponential distribution models the time between events in a Poisson process, while the theory
of continuous random variables extends probability to quantities that can take any value in an
interval.

### Board Coverage

| Board      | Paper   | Notes                                                |
| ---------- | ------- | ---------------------------------------------------- |
| AQA        | Paper 2 | Continuous RVs; limited exponential coverage         |
| Edexcel    | S3, S4  | Exponential distribution in S4; continuous RVs in S3 |
| OCR (A)    | Paper 2 | Continuous RVs and exponential                       |
| CIE (9231) | S2      | Both continuous RVs and exponential covered          |

:::info The exponential distribution is the continuous counterpart to the geometric distribution.
Both are memoryless. The Poisson process links all three distributions: Poisson counts events,
exponential measures inter-arrival times, and geometric counts trials until the first event. :::

<hr />

## 1. Continuous Random Variables

### 1.1 Probability density function

**Definition.** A **probability density function** (PDF) $f(x)$ of a continuous random variable $X$
is a non-negative function satisfying:

$$f(x) \geq 0 \quad \mathrm{for all } x, \qquad \int_{-\infty}^{\infty}f(x)\,dx = 1$$

Probabilities are found by integration:

$$P(a \leq X \leq b) = \int_a^b f(x)\,dx$$

:::warning For a continuous random variable, $P(X = a) = 0$ for any single value $a$. This is why
$P(a \leq X \leq b) = P(a < X < b)$ — the inequalities at individual points do not matter. :::

### 1.2 Cumulative distribution function

**Definition.** The **cumulative distribution function** (CDF) is

$$F(x) = P(X \leq x) = \int_{-\infty}^{x}f(t)\,dt$$

Properties:

- $F(-\infty) = 0$, $F(\infty) = 1$
- $F$ is non-decreasing
- $f(x) = F'(x)$ where $F$ is differentiable
- $P(a < X \leq b) = F(b) - F(a)$

### 1.3 Expected value

**Definition.** The expected value of a continuous random variable $X$ is

$$\boxed{E(X) = \int_{-\infty}^{\infty}x\,f(x)\,dx}$$

For a function $g(X)$:

$$E(g(X)) = \int_{-\infty}^{\infty}g(x)\,f(x)\,dx$$

### 1.4 Variance

**Definition.**

$$\boxed{\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \int_{-\infty}^{\infty}x^2\,f(x)\,dx - \left(\int_{-\infty}^{\infty}x\,f(x)\,dx\right)^2}$$

The linear properties carry over from the discrete case:

$$E(aX + b) = aE(X) + b, \qquad \mathrm{Var}(aX + b) = a^2\,\mathrm{Var}(X)$$

### 1.5 Median, mode, and quartiles

**Definition.** The **median** $m$ satisfies $F(m) = 0.5$, i.e., $\int_{-\infty}^{m}f(x)\,dx = 0.5$.

**Definition.** The **mode** is the value of $x$ at which $f(x)$ is maximised.

**Definition.** The **lower quartile** $Q_1$ satisfies $F(Q_1) = 0.25$ and the **upper quartile**
$Q_3$ satisfies $F(Q_3) = 0.75$.

**The interquartile range** is $\mathrm{IQR} = Q_3 - Q_1$.

<hr />

## 2. The Exponential Distribution

### 2.1 Definition

**Definition.** A continuous random variable $X$ follows an **exponential distribution** with rate
parameter $\lambda$ (where $\lambda > 0$), written $X \sim \mathrm{Exp}(\lambda)$, if

$$\boxed{f(x) = \lambda e^{-\lambda x}, \quad x \geq 0}$$

and $f(x) = 0$ for $x < 0$.

### 2.2 Cumulative distribution function

$$F(x) = P(X \leq x) = \int_0^x \lambda e^{-\lambda t}\,dt = \left[-e^{-\lambda t}\right]_0^x = 1 - e^{-\lambda x}$$

$$\boxed{F(x) = 1 - e^{-\lambda x}, \quad x \geq 0}$$

### 2.3 Proof that $E(X) = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$

### Proof

$$
\begin{aligned}
E(X) &= \int_0^{\infty}x\cdot\lambda e^{-\lambda x}\,dx
\end{aligned}
$$

Using integration by parts with $u = x$, $dv = \lambda e^{-\lambda x}\,dx$:

$du = dx$, $v = -e^{-\lambda x}$.

$$
\begin{aligned}
E(X) &= \left[-xe^{-\lambda x}\right]_0^{\infty} + \int_0^{\infty}e^{-\lambda x}\,dx \\
&= \lim_{x\to\infty}(-xe^{-\lambda x}) + 0 + \left[-\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆e^{-\lambda x}\right]_0^{\infty} \\
&= 0 + \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ \quad \blacksquare
\end{aligned}
$$

Note: $\lim_{x\to\infty}xe^{-\lambda x} = 0$ by L'Hôpital's rule (exponential decay dominates).

### 2.4 Proof that $\mathrm{Var}(X) = \frac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆$

### Proof

First compute $E(X^2)$:

$$E(X^2) = \int_0^{\infty}x^2\cdot\lambda e^{-\lambda x}\,dx$$

Integration by parts twice with $u = x^2$, $dv = \lambda e^{-\lambda x}\,dx$:

$du = 2x\,dx$, $v = -e^{-\lambda x}$.

$$
\begin{aligned}
E(X^2) &= \left[-x^2 e^{-\lambda x}\right]_0^{\infty} + \int_0^{\infty}2x\,e^{-\lambda x}\,dx \\
&= 0 + 2\cdot\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆\cdot E(X) = \frac◆LB◆2◆RB◆◆LB◆\lambda◆RB◆\cdot\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = \frac◆LB◆2◆RB◆◆LB◆\lambda^2◆RB◆
\end{aligned}
$$

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \frac◆LB◆2◆RB◆◆LB◆\lambda^2◆RB◆ - \frac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆ \quad \blacksquare$$

$$\boxed{E(X) = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆, \qquad \mathrm{Var}(X) = \frac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆, \qquad \sigma = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆}$$

### 2.5 The memoryless property

**Theorem.** The exponential distribution is the only continuous memoryless distribution:

$$P(X > s + t \mid X > s) = P(X > t)$$

### Proof

$$
\begin{aligned}
P(X > s + t \mid X > s) &= \frac{P(X > s+t)}{P(X > s)} = \frac◆LB◆e^{-\lambda(s+t)}◆RB◆◆LB◆e^{-\lambda s}◆RB◆ \\
&= e^{-\lambda t} = P(X > t) \quad \blacksquare
\end{aligned}
$$

This uses $P(X > x) = 1 - F(x) = e^{-\lambda x}$.

:::info The memoryless property has important practical implications. If a component with an
exponentially distributed lifetime has been working for $s$ hours, the remaining lifetime has the
same distribution as a brand new component. This means exponential lifetimes imply no "wear out"
effect — which is why it is more appropriate for electronic components than mechanical ones. :::

### 2.6 Link to Poisson processes

A **Poisson process** with rate $\lambda$ satisfies:

- The number of events in an interval of length $t$ follows $\mathrm{Po}(\lambda t)$
- The time between consecutive events follows $\mathrm{Exp}(\lambda)$
- The inter-arrival times are independent and identically distributed

**Proof sketch that inter-arrival times are exponential.** Let $T$ be the time until the first
event.
$P(T > t) = P(\mathrm{no events in }[0,t]) = P(N(t) = 0) = \dfrac◆LB◆e^{-\lambda t}(\lambda t)^0◆RB◆◆LB◆0!◆RB◆ = e^{-\lambda t}$.

So $P(T \leq t) = 1 - e^{-\lambda t}$, which is the CDF of $\mathrm{Exp}(\lambda)$. $\blacksquare$

### 2.7 Percentiles

For the exponential distribution:

$$F(x) = 1 - e^{-\lambda x} = p \implies x = -\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆\ln(1-p)$$

The median is
$x_{0.5} = -\dfrac◆LB◆\ln(0.5)◆RB◆◆LB◆\lambda◆RB◆ = \dfrac◆LB◆\ln 2◆RB◆◆LB◆\lambda◆RB◆$.

<hr />

## 3. Worked Examples

### 3.1 Finding probabilities

**Example.** $X \sim \mathrm{Exp}(0.5)$. Find $P(X > 3)$, $P(1 < X < 4)$, and the median.

$P(X > 3) = e^{-0.5 \times 3} = e^{-1.5} \approx 0.2231$.

$P(1 < X < 4) = F(4) - F(1) = (1-e^{-2}) - (1-e^{-0.5}) = e^{-0.5} - e^{-2} \approx 0.6065 - 0.1353 = 0.4712$.

Median $= \dfrac◆LB◆\ln 2◆RB◆◆LB◆0.5◆RB◆ = 2\ln 2 \approx 1.386$.

### 3.2 Continuous random variable from a PDF

**Example.** $X$ has PDF $f(x) = \dfrac{3}{8}x^2$ for $0 \leq x \leq 2$ and $f(x) = 0$ otherwise.

Verify: $\int_0^2 \dfrac{3}{8}x^2\,dx = \dfrac{3}{8}\cdot\dfrac{8}{3} = 1$. $\checkmark$

$E(X) = \int_0^2 x\cdot\dfrac{3}{8}x^2\,dx = \dfrac{3}{8}\int_0^2 x^3\,dx = \dfrac{3}{8}\cdot\dfrac{16}{4} = \dfrac{3}{2}$.

$E(X^2) = \dfrac{3}{8}\int_0^2 x^4\,dx = \dfrac{3}{8}\cdot\dfrac{32}{5} = \dfrac{12}{5}$.

$\mathrm{Var}(X) = \dfrac{12}{5} - \left(\dfrac{3}{2}\right)^2 = \dfrac{12}{5} - \dfrac{9}{4} = \dfrac{3}{20}$.

Median:
$\int_0^m \dfrac{3}{8}x^2\,dx = 0.5 \implies \dfrac{m^3}{8} = 0.5 \implies m^3 = 4 \implies m = \sqrt[3]{4} \approx 1.587$.

### 3.3 CDF from PDF

**Example.** $f(x) = 2x$ for $0 \leq x \leq 1$. Find $F(x)$.

For $0 \leq x \leq 1$: $F(x) = \int_0^x 2t\,dt = x^2$.

For $x < 0$: $F(x) = 0$. For $x > 1$: $F(x) = 1$.

<hr />

## 4. Hypothesis Testing with the Exponential Distribution

**Example.** The lifetime of a component is modelled by $X \sim \mathrm{Exp}(\lambda)$. A sample of
10 components gives a mean lifetime of 420 hours. Test at the 5% level whether $\lambda = 0.005$
against $H_1: \lambda \neq 0.005$.

Under $H_0$: $E(X) = 1/\lambda = 200$ hours. Since $n$ is large, use the approximate normal
distribution of $\bar{X}$:

$\bar{X} \sim N\!\left(\frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆, \frac◆LB◆1◆RB◆◆LB◆n\lambda^2◆RB◆\right) = N(200, 4000)$
approximately.

$z = \dfrac◆LB◆420 - 200◆RB◆◆LB◆\sqrt{4000}◆RB◆ = \dfrac{220}{63.25} = 3.48$.

$|z| = 3.48 > 1.96$, so reject $H_0$.

<hr />

## Problems

<details>
<summary>Problem 1</summary>
$X \sim \mathrm{Exp}(2)$. Find $P(X > 1)$, $P(0.5 < X < 2)$, and the 90th percentile.
</details>

<details>
<summary>Solution 1</summary>
$P(X > 1) = e^{-2(1)} = e^{-2} \approx 0.1353$.

$P(0.5 < X < 2) = (1-e^{-4}) - (1-e^{-1}) = e^{-1} - e^{-4} \approx 0.3679 - 0.0183 = 0.3496$.

90th percentile:
$F(x) = 0.9 \implies 1 - e^{-2x} = 0.9 \implies x = -\dfrac◆LB◆\ln(0.1)◆RB◆◆LB◆2◆RB◆ \approx 1.151$.

**If you get this wrong, revise:** [Percentiles](#27-percentiles) — Section 2.7.

</details>

<details>
<summary>Problem 2</summary>
A continuous random variable $X$ has PDF $f(x) = \dfrac{3x^2}{8}$ for $0 \leq x \leq 2$. Find $E(X)$, $\mathrm{Var}(X)$, and the median.
</details>

<details>
<summary>Solution 2</summary>
$E(X) = \int_0^2 x\cdot\dfrac{3x^2}{8}\,dx = \dfrac{3}{8}\cdot\left[\dfrac{x^4}{4}\right]_0^2 = \dfrac{3}{8}\cdot 4 = 1.5$.

$E(X^2) = \int_0^2 x^2\cdot\dfrac{3x^2}{8}\,dx = \dfrac{3}{8}\cdot\left[\dfrac{x^5}{5}\right]_0^2 = \dfrac{3}{8}\cdot\dfrac{32}{5} = 2.4$.

$\mathrm{Var}(X) = 2.4 - 1.5^2 = 2.4 - 2.25 = 0.15$.

Median:
$\int_0^m \dfrac{3x^2}{8}\,dx = 0.5 \implies \dfrac{m^3}{8} = 0.5 \implies m = \sqrt[3]{4} \approx 1.587$.

**If you get this wrong, revise:** [Median, mode, and quartiles](#15-median-mode-and-quartiles) —
Section 1.5.

</details>

<details>
<summary>Problem 3</summary>
Prove the memoryless property of the exponential distribution.
</details>

<details>
<summary>Solution 3</summary>
$P(X > s+t \mid X > s) = \dfrac{P(X > s+t)}{P(X > s)} = \dfrac◆LB◆e^{-\lambda(s+t)}◆RB◆◆LB◆e^{-\lambda s}◆RB◆ = e^{-\lambda t} = P(X > t)$. $\blacksquare$

This uses the survival function $P(X > x) = e^{-\lambda x}$.

**If you get this wrong, revise:** [The memoryless property](#25-the-memoryless-property) — Section
2.5.

</details>

<details>
<summary>Problem 4</summary>
Calls arrive at a switchboard as a Poisson process with rate $\lambda = 4$ per hour. Find the probability that the time between two consecutive calls exceeds 30 minutes.
</details>

<details>
<summary>Solution 4</summary>
The inter-arrival time $T \sim \mathrm{Exp}(4)$ (rate in hours).

$P(T > 0.5) = e^{-4 \times 0.5} = e^{-2} \approx 0.1353$.

**If you get this wrong, revise:** [Link to Poisson processes](#26-link-to-poisson-processes) —
Section 2.6.

</details>

<details>
<summary>Problem 5</summary>
$X$ has PDF $f(x) = \dfrac{1}{2}x$ for $0 \leq x \leq 2$. Find the CDF, $E(X)$, and $\mathrm{Var}(X)$.
</details>

<details>
<summary>Solution 5</summary>
CDF: $F(x) = \int_0^x \dfrac{t}{2}\,dt = \dfrac{x^2}{4}$ for $0 \leq x \leq 2$. $F(x) = 0$ for $x < 0$, $F(x) = 1$ for $x > 2$.

$E(X) = \int_0^2 x\cdot\dfrac{x}{2}\,dx = \dfrac{1}{2}\left[\dfrac{x^3}{3}\right]_0^2 = \dfrac{4}{3}$.

$E(X^2) = \dfrac{1}{2}\left[\dfrac{x^4}{4}\right]_0^2 = \dfrac{1}{2}\cdot 4 = 2$.

$\mathrm{Var}(X) = 2 - \left(\dfrac{4}{3}\right)^2 = 2 - \dfrac{16}{9} = \dfrac{2}{9}$.

**If you get this wrong, revise:** [Expected value](#13-expected-value) — Section 1.3.

</details>

<details>
<summary>Problem 6</summary>
The lifetime of a light bulb follows $X \sim \mathrm{Exp}(0.01)$ (in hours). Given that the bulb has been working for 500 hours, find the probability it lasts at least another 200 hours.
</details>

<details>
<summary>Solution 6</summary>
By the memoryless property: $P(X > 500+200 \mid X > 500) = P(X > 200) = e^{-0.01 \times 200} = e^{-2} \approx 0.1353$.

**If you get this wrong, revise:** [The memoryless property](#25-the-memoryless-property) — Section
2.5.

</details>

<details>
<summary>Problem 7</summary>
A continuous random variable $X$ has CDF $F(x) = \dfrac{x^3}{27}$ for $0 \leq x \leq 3$. Find the PDF, $E(X)$, and the upper quartile.
</details>

<details>
<summary>Solution 7</summary>
PDF: $f(x) = F'(x) = \dfrac{x^2}{9}$ for $0 \leq x \leq 3$.

$E(X) = \int_0^3 x\cdot\dfrac{x^2}{9}\,dx = \dfrac{1}{9}\left[\dfrac{x^4}{4}\right]_0^3 = \dfrac{1}{9}\cdot\dfrac{81}{4} = \dfrac{9}{4} = 2.25$.

Upper quartile:
$F(Q_3) = 0.75 \implies \dfrac{Q_3^3}{27} = 0.75 \implies Q_3^3 = 20.25 \implies Q_3 \approx 2.725$.

**If you get this wrong, revise:**
[Cumulative distribution function](#12-cumulative-distribution-function) — Section 1.2.

</details>

<details>
<summary>Problem 8</summary>
Prove that $E(X) = 1/\lambda$ for $X \sim \mathrm{Exp}(\lambda)$, using integration by parts.
</details>

<details>
<summary>Solution 8</summary>
$E(X) = \int_0^{\infty}x\lambda e^{-\lambda x}\,dx$.

Let $u = x$, $dv = \lambda e^{-\lambda x}\,dx$, so $du = dx$, $v = -e^{-\lambda x}$.

$E(X) = \left[-xe^{-\lambda x}\right]_0^{\infty} + \int_0^{\infty}e^{-\lambda x}\,dx = 0 + \left[-\dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆e^{-\lambda x}\right]_0^{\infty} = \dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$.
$\blacksquare$

**If you get this wrong, revise:**
[Proof that $E(X) = \frac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$](#23-proof-that-ex--frac1lambda) — Section 2.3.

</details>

<details>
<summary>Problem 9</summary>
Buses arrive at a stop as a Poisson process with rate 6 per hour. Find the probability that a passenger waits between 5 and 15 minutes for a bus.
</details>

<details>
<summary>Solution 9</summary>
Waiting time $T \sim \mathrm{Exp}(6)$ (rate per hour).

$P(1/12 < T < 1/4) = F(1/4) - F(1/12) = (1-e^{-1.5}) - (1-e^{-0.5}) = e^{-0.5} - e^{-1.5}$

$\approx 0.6065 - 0.2231 = 0.3834$.

**If you get this wrong, revise:** [Link to Poisson processes](#26-link-to-poisson-processes) —
Section 2.6.

</details>

<details>
<summary>Problem 10</summary>
$X$ has PDF $f(x) = 4x^3$ for $0 \leq x \leq 1$. Find $P(X > 0.5)$, $E(X)$, $\mathrm{Var}(X)$, and the mode.
</details>

<details>
<summary>Solution 10</summary>
$P(X > 0.5) = \int_{0.5}^1 4x^3\,dx = \left[x^4\right]_{0.5}^1 = 1 - 0.0625 = 0.9375$.

$E(X) = \int_0^1 4x^4\,dx = \left[\dfrac{4x^5}{5}\right]_0^1 = \dfrac{4}{5}$.

$E(X^2) = \int_0^1 4x^5\,dx = \left[\dfrac{4x^6}{6}\right]_0^1 = \dfrac{2}{3}$.

$\mathrm{Var}(X) = \dfrac{2}{3} - \left(\dfrac{4}{5}\right)^2 = \dfrac{2}{3} - \dfrac{16}{25} = \dfrac{50 - 48}{75} = \dfrac{2}{75}$.

Mode: $f(x) = 4x^3$ is increasing on $[0,1]$, so the mode is at $x = 1$.

**If you get this wrong, revise:** [Median, mode, and quartiles](#15-median-mode-and-quartiles) —
Section 1.5.

</details>

<hr />

## 5. Memoryless Property: Detailed Proof and Interpretation

### 5.1 Rigorous proof using conditional probability

**Theorem.** If $X \sim \mathrm{Exp}(\lambda)$, then for all $s, t > 0$:

$$P(X > s + t \mid X > s) = P(X > t)$$

### Proof

By definition of conditional probability:

$$P(X > s + t \mid X > s) = \frac◆LB◆P(X > s + t \,\cap\, X > s)◆RB◆◆LB◆P(X > s)◆RB◆ = \frac{P(X > s + t)}{P(X > s)}$$

since $X > s + t$ implies $X > s$.

Using the survival function $S(x) = P(X > x) = e^{-\lambda x}$:

$$\frac{P(X > s + t)}{P(X > s)} = \frac◆LB◆e^{-\lambda(s+t)}◆RB◆◆LB◆e^{-\lambda s}◆RB◆ = e^{-\lambda t} = P(X > t) \quad \blacksquare$$

### 5.2 Converse: exponential is the only continuous memoryless distribution

**Theorem.** If a continuous random variable $X$ on $(0, \infty)$ satisfies
$P(X > s+t \mid X > s) = P(X > t)$ for all $s, t > 0$, then $X \sim \mathrm{Exp}(\lambda)$ for some
$\lambda > 0$.

### Proof

Let $G(t) = P(X > t)$. The memoryless condition gives:

$$G(s + t) = G(s)G(t)$$

This is Cauchy's functional equation. Since $G$ is non-increasing and $0 \leq G \leq 1$, the only
solutions are:

$$G(t) = e^{-\lambda t}$$

for some $\lambda \geq 0$. Since $G$ is non-trivial (not identically 1), $\lambda > 0$. Therefore:

$$P(X \leq t) = 1 - e^{-\lambda t}$$

which is the CDF of $\mathrm{Exp}(\lambda)$. $\blacksquare$

### 5.3 Practical interpretation

The memoryless property means:

- If a light bulb has been on for 100 hours, the probability it lasts another 50 hours is the same
  as a new bulb lasting 50 hours.
- If you have waited 20 minutes for a bus, your expected additional wait time is the same as if you
  had just arrived.
- This property makes exponential models appropriate for random failure mechanisms (electronic
  components) but inappropriate for wear-out mechanisms (mechanical parts).

<hr />

## 6. Poisson-Exponential Connection: Inter-Arrival Times

### 6.1 Derivation

**Theorem.** In a Poisson process with rate $\lambda$, the time between consecutive events follows
$\mathrm{Exp}(\lambda)$.

### Proof

Let $T$ be the time from an arbitrary starting point until the first event.

$$P(T > t) = P(\mathrm{no events in }[0,t])$$

Since the number of events in $[0,t]$ follows $\mathrm{Po}(\lambda t)$:

$$P(N(t) = 0) = \frac◆LB◆e^{-\lambda t}(\lambda t)^0◆RB◆◆LB◆0!◆RB◆ = e^{-\lambda t}$$

Therefore $P(T \leq t) = 1 - e^{-\lambda t}$, which is the CDF of $\mathrm{Exp}(\lambda)$.
$\blacksquare$

### 6.2 Sum of inter-arrival times

If $T_1, T_2, \ldots, T_n$ are $n$ independent inter-arrival times, each
$\sim \mathrm{Exp}(\lambda)$, then the total time until the $n$-th event is:

$$S_n = T_1 + T_2 + \cdots + T_n \sim \mathrm{Gamma}(n, \lambda)$$

This connects the exponential to the gamma distribution.

### 6.3 Worked example: call centre

**Example.** Calls arrive at a call centre as a Poisson process at rate 5 per hour.

(a) Find the probability that the time between two consecutive calls exceeds 20 minutes.

$T \sim \mathrm{Exp}(5)$ (rate per hour). $P(T > 1/3) = e^{-5/3} \approx 0.1889$.

(b) Find the probability that at least 3 calls arrive in the next 30 minutes.

$N(0.5) \sim \mathrm{Po}(2.5)$.
$P(N \geq 3) = 1 - P(N \leq 2) = 1 - e^{-2.5}(1 + 2.5 + 2.5^2/2) = 1 - 0.0821 \times 9.125 \approx 1 - 0.749 = 0.251$.

(c) Find the median inter-arrival time.

Median
$= \dfrac◆LB◆\ln 2◆RB◆◆LB◆\lambda◆RB◆ = \dfrac◆LB◆\ln 2◆RB◆◆LB◆5◆RB◆ \approx 0.139\,\mathrm{hours} \approx 8.3\,\mathrm{minutes}$.

<hr />

## 7. The Continuous Uniform Distribution

### 7.1 Definition

**Definition.** $X \sim U(a, b)$ if:

$$f(x) = \frac{1}{b - a}, \quad a \leq x \leq b$$

and $f(x) = 0$ otherwise.

### 7.2 Proof of $E(X)$ and $\mathrm{Var}(X)$

### Proof

$$E(X) = \int_a^b x \cdot \frac{1}{b-a}\,dx = \frac{1}{b-a}\left[\frac{x^2}{2}\right]_a^b = \frac{b^2 - a^2}{2(b-a)} = \frac{(b-a)(b+a)}{2(b-a)} = \frac{a+b}{2} \quad \blacksquare$$

$$E(X^2) = \int_a^b x^2 \cdot \frac{1}{b-a}\,dx = \frac{1}{b-a}\left[\frac{x^3}{3}\right]_a^b = \frac{b^3 - a^3}{3(b-a)} = \frac{a^2 + ab + b^2}{3}$$

$$\mathrm{Var}(X) = \frac{a^2 + ab + b^2}{3} - \frac{(a+b)^2}{4} = \frac{4(a^2 + ab + b^2) - 3(a+b)^2}{12}$$

$$= \frac{4a^2 + 4ab + 4b^2 - 3a^2 - 6ab - 3b^2}{12} = \frac{a^2 - 2ab + b^2}{12}$$

$$\boxed{\mathrm{Var}(X) = \frac{(b-a)^2}{12}} \quad \blacksquare$$

### 7.3 CDF of the continuous uniform

$$F(x) = \begin{cases} 0 & x \lt{} a \\ \dfrac{x - a}{b - a} & a \leq x \leq b \\ 1 & x > b \end{cases}$$

<hr />

## 8. Mixture Distributions

### 8.1 Definition

A **mixture distribution** arises when a random variable is selected from one of several
sub-populations. If $X$ comes from distribution 1 with probability $p$ and from distribution 2 with
probability $1-p$:

$$f(x) = p\,f_1(x) + (1-p)\,f_2(x)$$

$$E(X) = p\,E(X_1) + (1-p)\,E(X_2)$$

$$\mathrm{Var}(X) = p\,\mathrm{Var}(X_1) + (1-p)\,\mathrm{Var}(X_2) + p(1-p)[E(X_1) - E(X_2)]^2$$

The variance formula includes an extra term from the difference in means — this is the law of total
variance.

### 8.2 Worked example

**Example.** A machine produces components. With probability 0.7 it is correctly calibrated,
producing components with lifetime $\sim \mathrm{Exp}(0.01)$. With probability 0.3 it is faulty,
producing components with lifetime $\sim \mathrm{Exp}(0.002)$. Find the overall PDF, the expected
lifetime, and $P(X > 100)$.

$$f(x) = 0.7(0.01\,e^{-0.01x}) + 0.3(0.002\,e^{-0.002x}) = 0.007\,e^{-0.01x} + 0.0006\,e^{-0.002x}$$

$E(X) = 0.7 \times 100 + 0.3 \times 500 = 70 + 150 = 220\,\mathrm{hours}$.

$P(X > 100) = 0.7\,e^{-0.01 \times 100} + 0.3\,e^{-0.002 \times 100} = 0.7e^{-1} + 0.3e^{-0.2} \approx 0.7(0.3679) + 0.3(0.8187)$

$\approx 0.2575 + 0.2456 = 0.5031$.

<hr />

## 9. Common Pitfalls

### Confusing PDF with CDF

The PDF $f(x)$ gives the **density** of probability at $x$. It is not a probability itself — $f(x)$
can be greater than 1. The CDF $F(x)$ gives the **accumulated** probability up to $x$, and always
satisfies $0 \leq F(x) \leq 1$.

Common error: writing $P(X = a) = f(a)$ for a continuous RV. This is wrong — $P(X = a) = 0$ always.
Probabilities are areas under the PDF, not values of the PDF.

### Discrete vs continuous probability

For a discrete RV, $P(X = a) > 0$ for specific values, and probabilities sum to 1.

For a continuous RV, $P(X = a) = 0$ for any single value, and probabilities integrate to 1.

Never use summation for a continuous RV or integration for a discrete RV (unless using the CDF
formalism).

### Exponential rate vs mean

$X \sim \mathrm{Exp}(\lambda)$ has mean $1/\lambda$. A common error is to confuse $\lambda$ (the
rate) with the mean. If the mean lifetime is 200 hours, then $\lambda = 1/200 = 0.005$, not
$\lambda = 200$.

Check: a larger $\lambda$ means shorter lifetimes on average (events happen more frequently).

### Units in Poisson-exponential problems

If events occur at rate $\lambda = 5$ per hour, then the inter-arrival time is $\mathrm{Exp}(5)$
measured in **hours**. If you want the probability of waiting more than 20 minutes, convert to
hours: $t = 1/3$ hours. Using $t = 20$ directly would give $P(T > 20) = e^{-100}$, which is
essentially zero and clearly wrong.

<hr />

## 10. Problem Set

<details>
<summary>Q1. $X \sim \mathrm{Exp}(\lambda)$. Find the value of $\lambda$ such that $P(X > 2) = 0.3$, and hence find $E(X)$ and the 80th percentile.</summary>

$P(X > 2) = e^{-2\lambda} = 0.3 \implies -2\lambda = \ln(0.3) \implies \lambda = \dfrac◆LB◆-\ln(0.3)◆RB◆◆LB◆2◆RB◆ = \dfrac{1.204}{2} = 0.602$.

$E(X) = 1/0.602 \approx 1.661$.

80th percentile:
$F(x) = 0.8 \implies 1 - e^{-0.602x} = 0.8 \implies e^{-0.602x} = 0.2 \implies x = \dfrac◆LB◆-\ln(0.2)◆RB◆◆LB◆0.602◆RB◆ = \dfrac{1.609}{0.602} \approx 2.673$.

</details>

<details>
<summary>Q2. A continuous random variable $X$ has PDF $f(x) = kx(4-x)$ for $0 \leq x \leq 4$. Find $k$, $E(X)$, $\mathrm{Var}(X)$, and the median.</summary>

$\int_0^4 kx(4-x)\,dx = k\int_0^4 (4x - x^2)\,dx = k\left[2x^2 - \dfrac{x^3}{3}\right]_0^4 = k(32 - 64/3) = k(32/3) = 1 \implies k = 3/32$.

$E(X) = \dfrac{3}{32}\int_0^4 (4x^2 - x^3)\,dx = \dfrac{3}{32}\left[\dfrac{4x^3}{3} - \dfrac{x^4}{4}\right]_0^4 = \dfrac{3}{32}\left(\dfrac{256}{3} - 64\right) = \dfrac{3}{32}\left(\dfrac{256 - 192}{3}\right) = \dfrac{64}{32} = 2$.

$E(X^2) = \dfrac{3}{32}\int_0^4 (4x^3 - x^4)\,dx = \dfrac{3}{32}\left[x^4 - \dfrac{x^5}{5}\right]_0^4 = \dfrac{3}{32}(256 - 204.8) = \dfrac◆LB◆3 \times 51.2◆RB◆◆LB◆32◆RB◆ = 4.8$.

$\mathrm{Var}(X) = 4.8 - 4 = 0.8$.

Median:
$\dfrac{3}{32}\int_0^m (4x - x^2)\,dx = 0.5 \implies \dfrac{3}{32}\left(2m^2 - \dfrac{m^3}{3}\right) = 0.5$.

$2m^2 - \dfrac{m^3}{3} = \dfrac{16}{3} \implies 6m^2 - m^3 = 16$.

By inspection: $m = 2$ gives $24 - 8 = 16$. So the median is $2$ (equal to the mean, reflecting the
symmetry of the PDF about $x = 2$).

</details>

<details>
<summary>Q3. Emails arrive at a server as a Poisson process with rate 12 per hour. Find the probability that the time between two consecutive emails is between 2 and 5 minutes, and find the probability that the third email arrives within 10 minutes.</summary>

Inter-arrival time $T \sim \mathrm{Exp}(12)$ per hour.

$P(2/60 \lt{} T \lt{} 5/60) = e^{-12(2/60)} - e^{-12(5/60)} = e^{-0.4} - e^{-1} \approx 0.6703 - 0.3679 = 0.3024$.

For the third email: the total time $S_3 = T_1 + T_2 + T_3 \sim \mathrm{Gamma}(3, 12)$.

Alternatively, use the Poisson count: $P(\mathrm{at least 3 in 10 min}) = P(N(1/6) \geq 3)$ where
$N(1/6) \sim \mathrm{Po}(2)$.

$= 1 - P(N \leq 2) = 1 - e^{-2}(1 + 2 + 2) = 1 - 5e^{-2} \approx 1 - 0.6767 = 0.3233$.

</details>

<details>
<summary>Q4. $X \sim U(0, a)$. Given that $E(X) = 3$ and $\mathrm{Var}(X) = 3$, find $a$ and the 90th percentile.</summary>

$E(X) = a/2 = 3 \implies a = 6$.

Check: $\mathrm{Var}(X) = (b-a)^2/12 = 36/12 = 3$. $\checkmark$

90th percentile: $F(x) = (x - 0)/6 = 0.9 \implies x = 5.4$.

</details>

<details>
<summary>Q5. The lifetime of Component A follows $\mathrm{Exp}(0.02)$ and Component B follows $\mathrm{Exp}(0.05)$ (in hours). They are connected in series, so the system fails when either component fails. Assuming independence, find the PDF of the system lifetime, the expected system lifetime, and $P(\mathrm{system lasts} > 50\,\mathrm{hours})$.</summary>

System lifetime $T = \min(X_A, X_B)$.

$P(T > t) = P(X_A > t)P(X_B > t) = e^{-0.02t} \cdot e^{-0.05t} = e^{-0.07t}$.

So $T \sim \mathrm{Exp}(0.07)$.

$E(T) = 1/0.07 \approx 14.3\,\mathrm{hours}$.

$P(T > 50) = e^{-0.07 \times 50} = e^{-3.5} \approx 0.0302$.

Note: the minimum of independent exponential RVs is itself exponential, with rate equal to the sum
of the individual rates.

</details>

<details>
<summary>Q6. A random variable $X$ has PDF $f(x) = \dfrac{2x}{9}$ for $0 \leq x \leq 3$. Find the CDF, $E(X)$, $\mathrm{Var}(X)$, the median, and $P(1 \lt{} X \lt{} 2)$.</summary>

CDF: $F(x) = \int_0^x \dfrac{2t}{9}\,dt = \dfrac{x^2}{9}$ for $0 \leq x \leq 3$. $F(x) = 0$ for
$x \lt{} 0$, $F(x) = 1$ for $x > 3$.

$E(X) = \int_0^3 x \cdot \dfrac{2x}{9}\,dx = \dfrac{2}{9}\left[\dfrac{x^3}{3}\right]_0^3 = \dfrac{2}{9} \times 9 = 2$.

$E(X^2) = \dfrac{2}{9}\left[\dfrac{x^4}{4}\right]_0^3 = \dfrac{2}{9} \times \dfrac{81}{4} = \dfrac{9}{2} = 4.5$.

$\mathrm{Var}(X) = 4.5 - 4 = 0.5$.

Median: $\dfrac{m^2}{9} = 0.5 \implies m^2 = 4.5 \implies m = \sqrt{4.5} \approx 2.12$.

$P(1 \lt{} X \lt{} 2) = F(2) - F(1) = \dfrac{4}{9} - \dfrac{1}{9} = \dfrac{1}{3}$.

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: Exponential distribution and memorylessness

**Problem.** The lifetime $T$ of a component follows an exponential distribution with mean 200
hours. Given that the component has survived 150 hours, find the probability it survives a further
100 hours.

**Solution.** By the memoryless property of the exponential distribution:

$$P(T > 150+100 \mid T > 150) = P(T > 100)$$

$\lambda = \dfrac{1}{200} = 0.005$.

$P(T > 100) = e^{-0.005 \times 100} = e^{-0.5} = \boxed{0.607}$ (3 s.f.).

### Example 8.2: Continuous uniform — conditional probability

**Problem.** $X \sim \mathrm{U}(0, 10)$. Find $P(X > 6 \mid X > 3)$.

**Solution.**
$P(X > 6 \mid X > 3) = \dfrac{P(X > 6)}{P(X > 3)} = \dfrac{0.4}{0.7} = \dfrac{4}{7} \approx \boxed{0.571}$.

Alternatively: conditional on $X > 3$, the distribution is $\mathrm{U}(3, 10)$, so
$P(X > 6 \mid X > 3) = \dfrac{10-6}{10-3} = \dfrac{4}{7}$.

### Example 8.3: Sum of independent exponential random variables

**Problem.** $X$ and $Y$ are independent with $X \sim \mathrm{Exp}(\lambda_1)$ and
$Y \sim \mathrm{Exp}(\lambda_2)$. Find $P(X < Y)$.

**Solution.** Using the joint density and integration:

$$P(X < Y) = \int_0^{\infty} \int_x^{\infty} \lambda_1 e^{-\lambda_1 x} \cdot \lambda_2 e^{-\lambda_2 y}\,dy\,dx$$

$$= \int_0^{\infty} \lambda_1 e^{-\lambda_1 x} \cdot e^{-\lambda_2 x}\,dx = \lambda_1 \int_0^{\infty} e^{-(\lambda_1+\lambda_2)x}\,dx$$

$$= \frac◆LB◆\lambda_1◆RB◆◆LB◆\lambda_1 + \lambda_2◆RB◆$$

For example, if $\lambda_1 = \lambda_2$: $P(X < Y) = \dfrac{1}{2}$ (by symmetry).

### Example 8.4: Finding a CDF from a PDF with a parameter

**Problem.** A continuous random variable $X$ has PDF $f(x) = kx(4-x)$ for $0 \leq x \leq 4$. Find
$k$, the CDF, and $P(1 < X < 3)$.

**Solution.**
$\displaystyle\int_0^4 kx(4-x)\,dx = k\!\left[2x^2 - \frac{x^3}{3}\right]_0^4 = k\!\left(32 - \frac{64}{3}\right) = \frac{32k}{3} = 1 \implies k = \frac{3}{32}$.

CDF: $F(x) = \dfrac{3}{32}\!\left(2x^2 - \dfrac{x^3}{3}\right) = \dfrac{3x^2}{16} - \dfrac{x^3}{32}$
for $0 \leq x \leq 4$.

$P(1 < X < 3) = F(3) - F(1) = \left(\dfrac{27}{16} - \dfrac{27}{32}\right) - \left(\dfrac{3}{16} - \dfrac{1}{32}\right) = \dfrac{27}{32} - \dfrac{5}{32} = \boxed{\dfrac{11}{16}}$.

### Example 8.5: Normal approximation to the exponential

**Problem.** $X_1, X_2, \ldots, X_{50}$ are independent, each following $\mathrm{Exp}(0.1)$.
Approximate $P(\overline{X} > 12)$.

**Solution.** $E(X_i) = 10$, $\mathrm{Var}(X_i) = 100$. $E(\overline{X}) = 10$,
$\mathrm{Var}(\overline{X}) = \dfrac{100}{50} = 2$.

By the CLT, $\overline{X} \approx N(10, 2)$ approximately.

$$P(\overline{X} > 12) = P\!\left(Z > \frac◆LB◆12-10◆RB◆◆LB◆\sqrt{2}◆RB◆\right) = P(Z > 1.414) = 1 - 0.9214 = \boxed{0.0786}$$

### Example 8.6: Transformation of a continuous random variable

**Problem.** $X$ has PDF $f_X(x) = 2x$ for $0 < x < 1$. Find the PDF of $Y = X^2$.

**Solution.** For $0 < y < 1$:
$F_Y(y) = P(Y \leq y) = P(X^2 \leq y) = P(X \leq \sqrt{y}) = (\sqrt{y})^2 = y$.

$$f_Y(y) = \frac{d}{dy}F_Y(y) = \boxed{1} \quad \text{for } 0 < y < 1$$

So $Y \sim \mathrm{U}(0,1)$.

### Example 8.7: Mode and median of a triangular distribution

**Problem.** $X$ has the triangular distribution with PDF
$f(x) = \begin{cases}2x & 0 \leq x \leq 1 \\ 2(2-x) & 1 < x \leq 2\end{cases}$. Find the mode,
median, mean, and variance.

**Solution.** **Mode:** The PDF peaks at $x = 1$, so mode $= \boxed{1}$.

**Median:** For $m \leq 1$: $\displaystyle\int_0^m 2x\,dx = m^2$. Set
$m^2 = 0.5 \implies m = \dfrac◆LB◆1◆RB◆◆LB◆\sqrt{2}◆RB◆ \approx 0.707$.

**Mean:**
$E(X) = \displaystyle\int_0^1 2x^2\,dx + \int_1^2 2x(2-x)\,dx = \dfrac{2}{3} + \left[2x^2 - \dfrac{2x^3}{3}\right]_1^2 = \dfrac{2}{3} + \dfrac{4}{3} = \boxed{2}$.

Wait, let me recalculate:
$\displaystyle\int_1^2 2x(2-x)\,dx = \int_1^2 (4x - 2x^2)\,dx = \left[2x^2 - \dfrac{2x^3}{3}\right]_1^2 = (8-\dfrac{16}{3}) - (2-\dfrac{2}{3}) = \dfrac{8}{3} - \dfrac{4}{3} = \dfrac{4}{3}$.

$E(X) = \dfrac{2}{3} + \dfrac{4}{3} = \boxed{2}$. This is the midpoint of $[0,2]$, as expected for a
symmetric triangular distribution.

$E(X^2) = \displaystyle\int_0^1 2x^3\,dx + \int_1^2 (4x^2 - 2x^3)\,dx = \dfrac{1}{2} + \left[\dfrac{4x^3}{3} - \dfrac{x^4}{2}\right]_1^2 = \dfrac{1}{2} + \dfrac{32}{3} - 8 - \dfrac{4}{3} + \dfrac{1}{2} = \dfrac{8}{3}$.

$\mathrm{Var}(X) = \dfrac{8}{3} - 4 = \boxed{-\dfrac{4}{3}}$? This is impossible. Let me recheck
$E(X^2)$.

$E(X^2) = \displaystyle\int_0^1 2x^3\,dx + \int_1^2 x^2 \cdot 2(2-x)\,dx = \dfrac{1}{2} +
\dfrac{28}{3} - \dfrac{4}{3} \cdot ... $

Actually
$E(X^2) = \dfrac{1}{2} + \int_1^2 (4x^2 - 2x^3)\,dx = \dfrac{1}{2} + \left[\dfrac{4}{3}x^3 - \dfrac{x^4}{2}\right]_1^2 = \dfrac{1}{2} + (\dfrac{32}{3}-8) - (\dfrac{4}{3}-\dfrac{1}{2}) = \dfrac{1}{2}+\dfrac{8}{3}-\dfrac{4}{3}+\dfrac{1}{2} = 1+\dfrac{4}{3} = \dfrac{7}{3}$.

$\mathrm{Var}(X) = \dfrac{7}{3} - 4 = -\dfrac{5}{3}$. This still cannot be right. The issue is
$E(X) = 1$ (not 2) since the distribution is on $[0,2]$ with peak at 1.

Let me redo: $E(X) = \dfrac{2}{3} + \dfrac{4}{3} = 2$. But the distribution is symmetric about
$x=1$, so $E(X)$ should be $1$.

Rechecking the second integral: $\int_1^2 2(2-x)x\,dx$. At $x=1$: $2(1)(1) = 2$. At $x=2$: $0$. This
integral should give $2/3$ by symmetry.

$\int_1^2 (4x-2x^2)\,dx = [2x^2-\frac{2x^3}{3}]_1^2 = (8-\frac{16}{3})-(2-\frac{2}{3}) = \frac{8}{3}-\frac{4}{3} = \frac{4}{3}$.

Total: $\frac{2}{3}+\frac{4}{3} = 2$. But the range is $[0,2]$ and the function is symmetric about
$x=1$. The mean of a symmetric distribution on $[0,2]$ about $x=1$ is $1$. There must be a
normalization error. Let me verify: $\int_0^1 2x\,dx = 1$ and
$\int_1^2 2(2-x)\,dx = [4x-x^2]_1^2 = (8-4)-(4-1) = 1$. Total area $= 2 \neq 1$.

The PDF should be $f(x) = x$ for $0 \leq x \leq 1$ and $f(x) = 2-x$ for $1 < x \leq 2$. Then
$E(X) = \int_0^1 x^2\,dx + \int_1^2 x(2-x)\,dx = \frac{1}{3}+\frac{2}{3} = 1$. ✓

---

## 9. Common Pitfalls

| Pitfall                                                                                                   | Correct Approach                                                         |
| --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| Confusing the rate $\lambda$ with the mean $\dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$ for exponential distributions | $E(X) = \dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$; the rate parameter is $\lambda$ |
| Forgetting that the total area under a PDF must equal 1                                                   | Always verify: $\displaystyle\int_{-\infty}^{\infty} f(x)\,dx = 1$       |
| Applying the exponential memoryless property to other distributions                                       | Only the exponential distribution has this property                      |
| Using $P(a < X < b) = f(b) - f(a)$                                                                        | This is for CDFs, not PDFs. Use $\displaystyle\int_a^b f(x)\,dx$         |

---

## 10. Additional Exam-Style Questions

### Question 8

Calls arrive at a call centre at a rate of 4 per hour. Find the probability that the time between
two consecutive calls exceeds 45 minutes.

<details>
<summary>Solution</summary>

Time between calls $T \sim \mathrm{Exp}(4)$ (rate $= 4$ per hour).

$P(T > 0.75) = e^{-4 \times 0.75} = e^{-3} \approx \boxed{0.0498}$.

</details>

### Question 9

$X$ is a continuous random variable with PDF $f(x) = \dfrac{3}{4}(2x - x^2)$ for $0 \leq x \leq 2$.
Find $E(X)$, $\mathrm{Var}(X)$, and the median.

<details>
<summary>Solution</summary>

$E(X) = \dfrac{3}{4}\displaystyle\int_0^2 (2x^2-x^3)\,dx = \dfrac{3}{4}\!\left[\dfrac{2x^3}{3}-\dfrac{x^4}{4}\right]_0^2 = \dfrac{3}{4}\!\left(\dfrac{16}{3}-4\right) = \dfrac{3}{4}\cdot\dfrac{4}{3} = 1$.

$E(X^2) = \dfrac{3}{4}\displaystyle\int_0^2 (2x^3-x^4)\,dx = \dfrac{3}{4}\!\left[\dfrac{x^4}{2}-\dfrac{x^5}{5}\right]_0^2 = \dfrac{3}{4}\!\left(8-\dfrac{32}{5}\right) = \dfrac{3}{4}\cdot\dfrac{8}{5} = \dfrac{6}{5}$.

$\mathrm{Var}(X) = \dfrac{6}{5}-1 = \dfrac{1}{5}$.

Median $m$: $\dfrac{3}{4}\!\left(m^2-\dfrac{m^3}{3}\right) = \dfrac{1}{2}$. By inspection or
numerical methods: $m \approx 0.908$.

</details>

### Question 10

**Prove that** for $X \sim \mathrm{Exp}(\lambda)$, the memoryless property holds:
$P(X > s+t \mid X > s) = P(X > t)$.

<details>
<summary>Solution</summary>

$$P(X > s+t \mid X > s) = \frac{P(X > s+t)}{P(X > s)} = \frac◆LB◆e^{-\lambda(s+t)}◆RB◆◆LB◆e^{-\lambda s}◆RB◆ = e^{-\lambda t} = P(X > t)$$

$\blacksquare$

</details>

---

## 11. Connections to Other Topics

### 11.1 Exponential distribution and Poisson process

The exponential distribution models inter-arrival times in a Poisson process. See
[Poisson and Geometric Distributions](/docs/alevel/further-maths/further-statistics/poisson-geometric).

### 11.2 Continuous distributions and integration

Finding CDFs, means, and variances of continuous random variables requires integration. See
[Further Calculus](/docs/alevel/further-maths/pure-mathematics/further-calculus).

### 11.3 Normal distribution and the CLT

The Central Limit Theorem connects the exponential and uniform distributions to the normal
distribution. See
[Chi-Squared Tests](/docs/alevel/further-maths/further-statistics/chi-squared-tests).

---

## 12. Key Results Summary

| Distribution            | PDF                                  | $E(X)$                           | $\mathrm{Var}(X)$                  |
| ----------------------- | ------------------------------------ | -------------------------------- | ---------------------------------- |
| $\mathrm{Exp}(\lambda)$ | $\lambda e^{-\lambda x}$, $x \geq 0$ | $\dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆$ | $\dfrac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆$ |
| $\mathrm{U}(a,b)$       | $\dfrac{1}{b-a}$, $a \leq x \leq b$  | $\dfrac{a+b}{2}$                 | $\dfrac{(b-a)^2}{12}$              |

| Property   | Exponential                          | Uniform            |
| ---------- | ------------------------------------ | ------------------ |
| Memoryless | Yes                                  | No                 |
| CDF        | $1 - e^{-\lambda x}$                 | $\dfrac{x-a}{b-a}$ |
| Median     | $\dfrac◆LB◆\ln 2◆RB◆◆LB◆\lambda◆RB◆$ | $\dfrac{a+b}{2}$   |

---

## 13. Further Exam-Style Questions

### Question 11

The lifetime of a light bulb follows an exponential distribution with mean 500 hours. Find: (a) the
probability it lasts more than 600 hours; (b) the probability it lasts between 400 and 600 hours;
(c) the median lifetime.

<details>
<summary>Solution</summary>

$\lambda = \dfrac{1}{500} = 0.002$.

**(a)** $P(X > 600) = e^{-1.2} \approx \boxed{0.301}$.

**(b)** $P(400 < X < 600) = e^{-0.8} - e^{-1.2} \approx 0.449 - 0.301 = \boxed{0.148}$.

**(c)** Median $m$:
$e^{-0.002m} = 0.5 \implies m = \dfrac◆LB◆\ln 2◆RB◆◆LB◆0.002◆RB◆ = \boxed{346.6\,\text{hours}}$.

</details>

### Question 12

**Prove that** for $X \sim \mathrm{U}(a,b)$, $\mathrm{Var}(X) = \dfrac{(b-a)^2}{12}$.

<details>
<summary>Solution</summary>

$E(X) = \dfrac{a+b}{2}$.

$E(X^2) = \dfrac{1}{b-a}\displaystyle\int_a^b x^2\,dx = \dfrac{b^3-a^3}{3(b-a)} = \dfrac{a^2+ab+b^2}{3}$.

$\mathrm{Var}(X) = \dfrac{a^2+ab+b^2}{3} - \dfrac{(a+b)^2}{4} = \dfrac{4a^2+4ab+4b^2-3a^2-6ab-3b^2}{12} = \dfrac{a^2-2ab+b^2}{12} = \boxed{\dfrac{(b-a)^2}{12}}$.
$\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 The moment generating function (MGF)

The MGF of a random variable $X$ is $M_X(t) = E(e^{tX})$.

Properties:

- $M_X(0) = 1$
- $M_X'(0) = E(X)$
- $M_X''(0) = E(X^2)$
- If $X$ and $Y$ are independent, $M_{X+Y}(t) = M_X(t)M_Y(t)$

MGFs:

- $\mathrm{Exp}(\lambda)$: $M(t) = \dfrac◆LB◆\lambda◆RB◆◆LB◆\lambda-t◆RB◆$ for $t < \lambda$
- $\mathrm{U}(a,b)$: $M(t) = \dfrac{e^{bt}-e^{at}}{(b-a)t}$

### 14.2 The cumulative distribution function approach

For any continuous random variable with PDF $f(x)$:

$P(a < X \leq b) = F(b) - F(a)$ where $F(x) = \displaystyle\int_{-\infty}^x f(t)\,dt$.

### 14.3 Order statistics

For i.i.d. random variables $X_1, \ldots, X_n$, the order statistics are
$X_{(1)} \leq X_{(2)} \leq \cdots \leq X_{(n)}$.

For $X \sim \mathrm{U}(0,1)$: $X_{(k)} \sim \mathrm{Beta}(k, n-k+1)$.

---

## 15. Further Exam-Style Questions

### Question 13

Find the MGF of $X \sim \mathrm{Exp}(\lambda)$ and use it to find $E(X)$ and $\mathrm{Var}(X)$.

<details>
<summary>Solution</summary>

$M(t) = \displaystyle\int_0^{\infty} e^{tx}\lambda e^{-\lambda x}\,dx = \lambda\displaystyle\int_0^{\infty} e^{-(\lambda-t)x}\,dx = \frac◆LB◆\lambda◆RB◆◆LB◆\lambda-t◆RB◆$
for $t < \lambda$.

$M'(t) = \dfrac◆LB◆\lambda◆RB◆◆LB◆(\lambda-t)^2◆RB◆$.
$M'(0) = \dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆ = E(X)$. ✓

$M''(t) = \dfrac◆LB◆2\lambda◆RB◆◆LB◆(\lambda-t)^3◆RB◆$.
$M''(0) = \dfrac◆LB◆2◆RB◆◆LB◆\lambda^2◆RB◆ = E(X^2)$.

$\mathrm{Var}(X) = \dfrac◆LB◆2◆RB◆◆LB◆\lambda^2◆RB◆ - \dfrac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆ = \boxed{\dfrac◆LB◆1◆RB◆◆LB◆\lambda^2◆RB◆}$.
✓

</details>

### Question 14

**Prove that** if $X \sim \mathrm{U}(0,1)$, then $Y = -\dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆\ln X$ follows
$\mathrm{Exp}(\lambda)$.

<details>
<summary>Solution</summary>

$F_Y(y) = P(Y \leq y) = P\!\left(-\dfrac◆LB◆1◆RB◆◆LB◆\lambda◆RB◆\ln X \leq y\right) = P(\ln X \geq -\lambda y) = P(X \geq e^{-\lambda y})$.

$= 1 - e^{-\lambda y}$ for $y \geq 0$.

This is the CDF of $\mathrm{Exp}(\lambda)$. $\blacksquare$

</details>
