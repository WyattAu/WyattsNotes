---
title: Exponential Distribution and Continuous Random Variables
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

---

## 1. Continuous Random Variables

### 1.1 Probability density function

**Definition.** A **probability density function** (PDF) $f(x)$ of a continuous random variable $X$
is a non-negative function satisfying:

$$f(x) \geq 0 \quad \text{for all } x, \qquad \int_{-\infty}^{\infty}f(x)\,dx = 1$$

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

$$\boxed{\text{Var}(X) = E(X^2) - [E(X)]^2 = \int_{-\infty}^{\infty}x^2\,f(x)\,dx - \left(\int_{-\infty}^{\infty}x\,f(x)\,dx\right)^2}$$

The linear properties carry over from the discrete case:

$$E(aX + b) = aE(X) + b, \qquad \text{Var}(aX + b) = a^2\,\text{Var}(X)$$

### 1.5 Median, mode, and quartiles

**Definition.** The **median** $m$ satisfies $F(m) = 0.5$, i.e., $\int_{-\infty}^{m}f(x)\,dx = 0.5$.

**Definition.** The **mode** is the value of $x$ at which $f(x)$ is maximised.

**Definition.** The **lower quartile** $Q_1$ satisfies $F(Q_1) = 0.25$ and the **upper quartile**
$Q_3$ satisfies $F(Q_3) = 0.75$.

**The interquartile range** is $\text{IQR} = Q_3 - Q_1$.

---

## 2. The Exponential Distribution

### 2.1 Definition

**Definition.** A continuous random variable $X$ follows an **exponential distribution** with rate
parameter $\lambda$ (where $\lambda > 0$), written $X \sim \text{Exp}(\lambda)$, if

$$\boxed{f(x) = \lambda e^{-\lambda x}, \quad x \geq 0}$$

and $f(x) = 0$ for $x < 0$.

### 2.2 Cumulative distribution function

$$F(x) = P(X \leq x) = \int_0^x \lambda e^{-\lambda t}\,dt = \left[-e^{-\lambda t}\right]_0^x = 1 - e^{-\lambda x}$$

$$\boxed{F(x) = 1 - e^{-\lambda x}, \quad x \geq 0}$$

### 2.3 Proof that $E(X) = \frac{1}{\lambda}$

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
&= \lim_{x\to\infty}(-xe^{-\lambda x}) + 0 + \left[-\frac{1}{\lambda}e^{-\lambda x}\right]_0^{\infty} \\
&= 0 + \frac{1}{\lambda} = \frac{1}{\lambda} \quad \blacksquare
\end{aligned}
$$

Note: $\lim_{x\to\infty}xe^{-\lambda x} = 0$ by L'Hôpital's rule (exponential decay dominates).

### 2.4 Proof that $\text{Var}(X) = \frac{1}{\lambda^2}$

### Proof

First compute $E(X^2)$:

$$E(X^2) = \int_0^{\infty}x^2\cdot\lambda e^{-\lambda x}\,dx$$

Integration by parts twice with $u = x^2$, $dv = \lambda e^{-\lambda x}\,dx$:

$du = 2x\,dx$, $v = -e^{-\lambda x}$.

$$
\begin{aligned}
E(X^2) &= \left[-x^2 e^{-\lambda x}\right]_0^{\infty} + \int_0^{\infty}2x\,e^{-\lambda x}\,dx \\
&= 0 + 2\cdot\frac{1}{\lambda}\cdot E(X) = \frac{2}{\lambda}\cdot\frac{1}{\lambda} = \frac{2}{\lambda^2}
\end{aligned}
$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \frac{2}{\lambda^2} - \frac{1}{\lambda^2} = \frac{1}{\lambda^2} \quad \blacksquare$$

$$\boxed{E(X) = \frac{1}{\lambda}, \qquad \text{Var}(X) = \frac{1}{\lambda^2}, \qquad \sigma = \frac{1}{\lambda}}$$

### 2.5 The memoryless property

**Theorem.** The exponential distribution is the only continuous memoryless distribution:

$$P(X > s + t \mid X > s) = P(X > t)$$

### Proof

$$
\begin{aligned}
P(X > s + t \mid X > s) &= \frac{P(X > s+t)}{P(X > s)} = \frac{e^{-\lambda(s+t)}}{e^{-\lambda s}} \\
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

- The number of events in an interval of length $t$ follows $\text{Po}(\lambda t)$
- The time between consecutive events follows $\text{Exp}(\lambda)$
- The inter-arrival times are independent and identically distributed

**Proof sketch that inter-arrival times are exponential.** Let $T$ be the time until the first
event.
$P(T > t) = P(\text{no events in }[0,t]) = P(N(t) = 0) = \dfrac{e^{-\lambda t}(\lambda t)^0}{0!} = e^{-\lambda t}$.

So $P(T \leq t) = 1 - e^{-\lambda t}$, which is the CDF of $\text{Exp}(\lambda)$. $\blacksquare$

### 2.7 Percentiles

For the exponential distribution:

$$F(x) = 1 - e^{-\lambda x} = p \implies x = -\frac{1}{\lambda}\ln(1-p)$$

The median is $x_{0.5} = -\dfrac{\ln(0.5)}{\lambda} = \dfrac{\ln 2}{\lambda}$.

---

## 3. Worked Examples

### 3.1 Finding probabilities

**Example.** $X \sim \text{Exp}(0.5)$. Find $P(X > 3)$, $P(1 < X < 4)$, and the median.

$P(X > 3) = e^{-0.5 \times 3} = e^{-1.5} \approx 0.2231$.

$P(1 < X < 4) = F(4) - F(1) = (1-e^{-2}) - (1-e^{-0.5}) = e^{-0.5} - e^{-2} \approx 0.6065 - 0.1353 = 0.4712$.

Median $= \dfrac{\ln 2}{0.5} = 2\ln 2 \approx 1.386$.

### 3.2 Continuous random variable from a PDF

**Example.** $X$ has PDF $f(x) = \dfrac{3}{8}x^2$ for $0 \leq x \leq 2$ and $f(x) = 0$ otherwise.

Verify: $\int_0^2 \dfrac{3}{8}x^2\,dx = \dfrac{3}{8}\cdot\dfrac{8}{3} = 1$. $\checkmark$

$E(X) = \int_0^2 x\cdot\dfrac{3}{8}x^2\,dx = \dfrac{3}{8}\int_0^2 x^3\,dx = \dfrac{3}{8}\cdot\dfrac{16}{4} = \dfrac{3}{2}$.

$E(X^2) = \dfrac{3}{8}\int_0^2 x^4\,dx = \dfrac{3}{8}\cdot\dfrac{32}{5} = \dfrac{12}{5}$.

$\text{Var}(X) = \dfrac{12}{5} - \left(\dfrac{3}{2}\right)^2 = \dfrac{12}{5} - \dfrac{9}{4} = \dfrac{3}{20}$.

Median:
$\int_0^m \dfrac{3}{8}x^2\,dx = 0.5 \implies \dfrac{m^3}{8} = 0.5 \implies m^3 = 4 \implies m = \sqrt[3]{4} \approx 1.587$.

### 3.3 CDF from PDF

**Example.** $f(x) = 2x$ for $0 \leq x \leq 1$. Find $F(x)$.

For $0 \leq x \leq 1$: $F(x) = \int_0^x 2t\,dt = x^2$.

For $x < 0$: $F(x) = 0$. For $x > 1$: $F(x) = 1$.

---

## 4. Hypothesis Testing with the Exponential Distribution

**Example.** The lifetime of a component is modelled by $X \sim \text{Exp}(\lambda)$. A sample of 10
components gives a mean lifetime of 420 hours. Test at the 5% level whether $\lambda = 0.005$
against $H_1: \lambda \neq 0.005$.

Under $H_0$: $E(X) = 1/\lambda = 200$ hours. Since $n$ is large, use the approximate normal
distribution of $\bar{X}$:

$\bar{X} \sim N\!\left(\frac{1}{\lambda}, \frac{1}{n\lambda^2}\right) = N(200, 4000)$ approximately.

$z = \dfrac{420 - 200}{\sqrt{4000}} = \dfrac{220}{63.25} = 3.48$.

$|z| = 3.48 > 1.96$, so reject $H_0$.

---

## Problems

<details>
<summary>Problem 1</summary>
$X \sim \text{Exp}(2)$. Find $P(X > 1)$, $P(0.5 < X < 2)$, and the 90th percentile.
</details>

<details>
<summary>Solution 1</summary>
$P(X > 1) = e^{-2(1)} = e^{-2} \approx 0.1353$.

$P(0.5 < X < 2) = (1-e^{-4}) - (1-e^{-1}) = e^{-1} - e^{-4} \approx 0.3679 - 0.0183 = 0.3496$.

90th percentile:
$F(x) = 0.9 \implies 1 - e^{-2x} = 0.9 \implies x = -\dfrac{\ln(0.1)}{2} \approx 1.151$.

**If you get this wrong, revise:** [Percentiles](#27-percentiles) — Section 2.7.

</details>

<details>
<summary>Problem 2</summary>
A continuous random variable $X$ has PDF $f(x) = \dfrac{3x^2}{8}$ for $0 \leq x \leq 2$. Find $E(X)$, $\text{Var}(X)$, and the median.
</details>

<details>
<summary>Solution 2</summary>
$E(X) = \int_0^2 x\cdot\dfrac{3x^2}{8}\,dx = \dfrac{3}{8}\cdot\left[\dfrac{x^4}{4}\right]_0^2 = \dfrac{3}{8}\cdot 4 = 1.5$.

$E(X^2) = \int_0^2 x^2\cdot\dfrac{3x^2}{8}\,dx = \dfrac{3}{8}\cdot\left[\dfrac{x^5}{5}\right]_0^2 = \dfrac{3}{8}\cdot\dfrac{32}{5} = 2.4$.

$\text{Var}(X) = 2.4 - 1.5^2 = 2.4 - 2.25 = 0.15$.

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
$P(X > s+t \mid X > s) = \dfrac{P(X > s+t)}{P(X > s)} = \dfrac{e^{-\lambda(s+t)}}{e^{-\lambda s}} = e^{-\lambda t} = P(X > t)$. $\blacksquare$

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
The inter-arrival time $T \sim \text{Exp}(4)$ (rate in hours).

$P(T > 0.5) = e^{-4 \times 0.5} = e^{-2} \approx 0.1353$.

**If you get this wrong, revise:** [Link to Poisson processes](#26-link-to-poisson-processes) —
Section 2.6.

</details>

<details>
<summary>Problem 5</summary>
$X$ has PDF $f(x) = \dfrac{1}{2}x$ for $0 \leq x \leq 2$. Find the CDF, $E(X)$, and $\text{Var}(X)$.
</details>

<details>
<summary>Solution 5</summary>
CDF: $F(x) = \int_0^x \dfrac{t}{2}\,dt = \dfrac{x^2}{4}$ for $0 \leq x \leq 2$. $F(x) = 0$ for $x < 0$, $F(x) = 1$ for $x > 2$.

$E(X) = \int_0^2 x\cdot\dfrac{x}{2}\,dx = \dfrac{1}{2}\left[\dfrac{x^3}{3}\right]_0^2 = \dfrac{4}{3}$.

$E(X^2) = \dfrac{1}{2}\left[\dfrac{x^4}{4}\right]_0^2 = \dfrac{1}{2}\cdot 4 = 2$.

$\text{Var}(X) = 2 - \left(\dfrac{4}{3}\right)^2 = 2 - \dfrac{16}{9} = \dfrac{2}{9}$.

**If you get this wrong, revise:** [Expected value](#13-expected-value) — Section 1.3.

</details>

<details>
<summary>Problem 6</summary>
The lifetime of a light bulb follows $X \sim \text{Exp}(0.01)$ (in hours). Given that the bulb has been working for 500 hours, find the probability it lasts at least another 200 hours.
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
Prove that $E(X) = 1/\lambda$ for $X \sim \text{Exp}(\lambda)$, using integration by parts.
</details>

<details>
<summary>Solution 8</summary>
$E(X) = \int_0^{\infty}x\lambda e^{-\lambda x}\,dx$.

Let $u = x$, $dv = \lambda e^{-\lambda x}\,dx$, so $du = dx$, $v = -e^{-\lambda x}$.

$E(X) = \left[-xe^{-\lambda x}\right]_0^{\infty} + \int_0^{\infty}e^{-\lambda x}\,dx = 0 + \left[-\dfrac{1}{\lambda}e^{-\lambda x}\right]_0^{\infty} = \dfrac{1}{\lambda}$.
$\blacksquare$

**If you get this wrong, revise:**
[Proof that $E(X) = \frac{1}{\lambda}$](#23-proof-that-ex--frac1lambda) — Section 2.3.

</details>

<details>
<summary>Problem 9</summary>
Buses arrive at a stop as a Poisson process with rate 6 per hour. Find the probability that a passenger waits between 5 and 15 minutes for a bus.
</details>

<details>
<summary>Solution 9</summary>
Waiting time $T \sim \text{Exp}(6)$ (rate per hour).

$P(1/12 < T < 1/4) = F(1/4) - F(1/12) = (1-e^{-1.5}) - (1-e^{-0.5}) = e^{-0.5} - e^{-1.5}$

$\approx 0.6065 - 0.2231 = 0.3834$.

**If you get this wrong, revise:** [Link to Poisson processes](#26-link-to-poisson-processes) —
Section 2.6.

</details>

<details>
<summary>Problem 10</summary>
$X$ has PDF $f(x) = 4x^3$ for $0 \leq x \leq 1$. Find $P(X > 0.5)$, $E(X)$, $\text{Var}(X)$, and the mode.
</details>

<details>
<summary>Solution 10</summary>
$P(X > 0.5) = \int_{0.5}^1 4x^3\,dx = \left[x^4\right]_{0.5}^1 = 1 - 0.0625 = 0.9375$.

$E(X) = \int_0^1 4x^4\,dx = \left[\dfrac{4x^5}{5}\right]_0^1 = \dfrac{4}{5}$.

$E(X^2) = \int_0^1 4x^5\,dx = \left[\dfrac{4x^6}{6}\right]_0^1 = \dfrac{2}{3}$.

$\text{Var}(X) = \dfrac{2}{3} - \left(\dfrac{4}{5}\right)^2 = \dfrac{2}{3} - \dfrac{16}{25} = \dfrac{50 - 48}{75} = \dfrac{2}{75}$.

Mode: $f(x) = 4x^3$ is increasing on $[0,1]$, so the mode is at $x = 1$.

**If you get this wrong, revise:** [Median, mode, and quartiles](#15-median-mode-and-quartiles) —
Section 1.5.

</details>

:::

:::

:::
