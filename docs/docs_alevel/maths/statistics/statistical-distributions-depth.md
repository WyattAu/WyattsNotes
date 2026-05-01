---
title: Statistical Distributions (Extended)
description:
  "A-Level Mathematics notes on Statistical Distributions (Extended): Statistical Distributions (Extended Treatment); 1. The Binomial Distribution; 1.1 Definition."
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: statistical-distributions-extended
---

## Statistical Distributions (Extended Treatment)

This document provides rigorous coverage of the binomial, normal, and Poisson distributions, their
approximations, and hypothesis testing applications.

:::info
Always state the distribution you are using in full, including the parameter values, before
calculating probabilities. For example: "$X \sim B(20, 0.3)$".
:::

<hr />

## 1. The Binomial Distribution

### 1.1 Definition

A random variable $X$ has a **binomial distribution** with parameters $n$ and $p$ (written
$X \sim B(n, p)$) if:

$$P(X = r) = \binom{n}{r}p^r(1-p)^{n-r}, \quad r = 0, 1, 2, \ldots, n$$

**Conditions for a binomial distribution:**

1. A fixed number $n$ of trials.
2. Each trial has exactly two outcomes (success/failure).
3. The probability of success $p$ is constant for each trial.
4. Trials are independent.

### 1.2 Mean and variance

$$E(X) = np, \qquad \mathrm{Var}(X) = np(1-p)$$

**Proof of $E(X) = np$.**

$$E(X) = \sum_{r=0}^{n} r\binom{n}{r}p^r(1-p)^{n-r} = \sum_{r=1}^{n} r\binom{n}{r}p^r(1-p)^{n-r}$$

Using $r\binom{n}{r} = n\binom{n-1}{r-1}$:

$$= np\sum_{r=1}^{n}\binom{n-1}{r-1}p^{r-1}(1-p)^{n-r} = np\sum_{k=0}^{n-1}\binom{n-1}{k}p^k(1-p)^{n-1-k} = np \cdot 1 = np \quad \blacksquare$$

### 1.3 Cumulative probabilities

$$P(X \leq r) = \sum_{k=0}^{r}\binom{n}{k}p^k(1-p)^{n-k}$$

$$P(X \geq r) = 1 - P(X \leq r-1)$$

### 1.4 Worked example

**Problem.** A fair coin is tossed 12 times. Find the probability of getting: (a) exactly 7 heads;
(b) at most 4 heads; (c) between 5 and 9 heads inclusive.

$X \sim B(12, 0.5)$.

(a) $P(X = 7) = \dbinom{12}{7}(0.5)^{12} = \dfrac{792}{4096} = \dfrac{99}{512} \approx 0.1934$

(b) $P(X \leq 4) = \displaystyle\sum_{k=0}^{4}\dbinom{12}{k}(0.5)^{12} = \dfrac{1 + 12 + 66 + 220 + 495}{4096} = \dfrac{794}{4096} \approx 0.1938$

(c) $P(5 \leq X \leq 9) = P(X \leq 9) - P(X \leq 4) = 1 - P(X \leq 4) - P(X \geq 10)$

$P(X \geq 10) = P(X \leq 2)$ (by symmetry of $p = 0.5$) $= \dfrac{1 + 12 + 66}{4096} = \dfrac{79}{4096}$

$P(5 \leq X \leq 9) = 1 - \dfrac{794}{4096} - \dfrac{79}{4096} = \dfrac{3223}{4096} \approx 0.7869$

<hr />

## 2. The Normal Distribution

### 2.1 Definition

A random variable $X$ has a **normal distribution** with parameters $\mu$ and $\sigma^2$ (written
$X \sim N(\mu, \sigma^2)$) if its probability density function is:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\!\left(-\frac{(x - \mu)^2}{2\sigma^2}\right), \quad x \in \mathbb{R}$$

### 2.2 Properties

- The distribution is symmetric about $x = \mu$.
- The mean, median, and mode are all equal to $\mu$.
- $E(X) = \mu$, $\mathrm{Var}(X) = \sigma^2$.
- Approximately 68% of data lies within $\mu \pm \sigma$.
- Approximately 95% of data lies within $\mu \pm 2\sigma$.
- Approximately 99.7% of data lies within $\mu \pm 3\sigma$.

### 2.3 Standardisation

To find probabilities, we standardise to the **standard normal** $Z \sim N(0, 1)$:

$$Z = \frac{X - \mu}{\sigma}$$

$$P(X \leq x) = P\!\left(Z \leq \frac{x - \mu}{\sigma}\right) = \Phi\!\left(\frac{x - \mu}{\sigma}\right)$$

where $\Phi(z)$ denotes the cumulative distribution function of the standard normal.

### 2.4 Worked example

**Problem.** The masses of bags of sugar are normally distributed with mean $1.02\;\mathrm{kg}$ and
standard deviation $0.03\;\mathrm{kg}$. Find: (a) the probability a randomly selected bag has mass
less than $1.00\;\mathrm{kg}$; (b) the probability the mass is between $0.98$ and $1.05\;\mathrm{kg}$;
(c) the value $m$ such that 90% of bags have mass less than $m$.

$X \sim N(1.02, 0.03^2)$.

(a) $P(X \lt 1.00) = P\!\left(Z \lt \dfrac{1.00 - 1.02}{0.03}\right) = P(Z \lt -0.667) = 1 - \Phi(0.667) \approx 1 - 0.7476 = 0.2524$

(b) $P(0.98 \lt X \lt 1.05) = P\!\left(\dfrac{0.98 - 1.02}{0.03} \lt Z \lt \dfrac{1.05 - 1.02}{0.03}\right) = P(-1.333 \lt Z \lt 1.000)$

$= \Phi(1.000) - \Phi(-1.333) = 0.8413 - (1 - 0.9088) = 0.8413 - 0.0912 = 0.7501$

(c) We need $\Phi\!\left(\dfrac{m - 1.02}{0.03}\right) = 0.90$, so $\dfrac{m - 1.02}{0.03} = 1.282$.

$m = 1.02 + 0.03 \times 1.282 = 1.058\;\mathrm{kg}$

### 2.5 The normal approximation to the binomial

If $X \sim B(n, p)$ and $n$ is large, then $X$ is approximately normal with:

$$X \approx N(np, np(1-p))$$

**Continuity correction.** Since the binomial is discrete and the normal is continuous, apply a
continuity correction:

- $P(X \leq k) \approx P(Y \lt k + 0.5)$
- $P(X \geq k) \approx P(Y \gt k - 0.5)$
- $P(X = k) \approx P(k - 0.5 \lt Y \lt k + 0.5)$

The approximation is reasonable when $np \gt 5$ and $n(1-p) \gt 5$.

### 2.6 Worked example: normal approximation

**Problem.** $X \sim B(80, 0.45)$. Use a normal approximation to find $P(X \gt 35)$.

$\mu = 80 \times 0.45 = 36$, $\sigma^2 = 80 \times 0.45 \times 0.55 = 19.8$, $\sigma = 4.45$.

$X \approx N(36, 19.8)$.

$P(X \gt 35) \approx P(Y \gt 34.5) = P\!\left(Z \gt \dfrac{34.5 - 36}{4.45}\right) = P(Z \gt -0.337)$

$= 1 - \Phi(-0.337) = \Phi(0.337) \approx 0.632$

<hr />

## 3. The Poisson Distribution

### 3.1 Definition

A random variable $X$ has a **Poisson distribution** with parameter $\lambda$ (written
$X \sim \mathrm{Po}(\lambda)$) if:

$$P(X = r) = \frac{e^{-\lambda}\lambda^r}{r!}, \quad r = 0, 1, 2, \ldots$$

**Conditions:**

1. Events occur independently at a constant average rate.
2. The probability of more than one event in a sufficiently small interval is negligible.
3. Events occur singly in continuous time or space.

### 3.2 Mean and variance

$$E(X) = \lambda, \qquad \mathrm{Var}(X) = \lambda$$

The equality of mean and variance is a distinguishing feature of the Poisson distribution.

### 3.3 Worked example

**Problem.** A call centre receives an average of 4.5 calls per minute. Assuming a Poisson model,
find: (a) the probability of exactly 6 calls in a minute; (b) the probability of at most 2 calls
in a minute; (c) the probability of more than 8 calls in a two-minute period.

$X \sim \mathrm{Po}(4.5)$.

(a) $P(X = 6) = \dfrac{e^{-4.5}(4.5)^6}{6!} = \dfrac{e^{-4.5} \times 8303.8}{720} \approx 0.1271$

(b) $P(X \leq 2) = e^{-4.5}\!\left(1 + 4.5 + \dfrac{4.5^2}{2}\right) = e^{-4.5}(1 + 4.5 + 10.125) = 15.625\,e^{-4.5} \approx 0.1736$

(c) For two minutes, $Y \sim \mathrm{Po}(9)$.

$P(Y \gt 8) = 1 - P(Y \leq 8) = 1 - e^{-9}\displaystyle\sum_{r=0}^{8}\dfrac{9^r}{r!} \approx 1 - 0.4557 = 0.5443$

### 3.4 Poisson approximation to the binomial

If $X \sim B(n, p)$ where $n$ is large and $p$ is small (so that $np$ is moderate), then:

$$X \approx \mathrm{Po}(np)$$

This is valid when $n \geq 50$ and $p \leq 0.1$ (and $np \leq 10$ as a rough guideline).

### 3.5 Worked example: Poisson approximation

**Problem.** A machine produces items with a defect rate of 0.02. In a batch of 200 items, find the
probability that exactly 3 are defective.

$X \sim B(200, 0.02)$. Since $n = 200$ is large and $p = 0.02$ is small, $X \approx \mathrm{Po}(4)$.

$$P(X = 3) = \frac{e^{-4} \cdot 4^3}{3!} = \frac{64e^{-4}}{6} = \frac{32}{3}e^{-4} \approx 0.1954$$

<hr />

## 4. Choosing the Correct Distribution

### 4.1 Decision framework

| Situation                          | Distribution         |
| ---------------------------------- | -------------------- |
| Fixed trials, two outcomes, const $p$ | Binomial $B(n, p)$  |
| Rare events, constant rate         | Poisson $\mathrm{Po}(\lambda)$ |
| Continuous, symmetric, bell-shaped | Normal $N(\mu, \sigma^2)$ |

### 4.2 Sums of independent Poisson variables

**Theorem.** If $X \sim \mathrm{Po}(\lambda_1)$ and $Y \sim \mathrm{Po}(\lambda_2)$ are independent,
then $X + Y \sim \mathrm{Po}(\lambda_1 + \lambda_2)$.

**Proof sketch.** Using MGFs or direct convolution:

$$P(X + Y = r) = \sum_{k=0}^{r}P(X = k)P(Y = r-k) = \sum_{k=0}^{r}\frac{e^{-\lambda_1}\lambda_1^k}{k!} \cdot \frac{e^{-\lambda_2}\lambda_2^{r-k}}{(r-k)!}$$

$$= \frac{e^{-(\lambda_1+\lambda_2)}}{r!}\sum_{k=0}^{r}\binom{r}{k}\lambda_1^k\lambda_2^{r-k} = \frac{e^{-(\lambda_1+\lambda_2)}(\lambda_1+\lambda_2)^r}{r!} \quad \blacksquare$$

### 4.3 Worked example

**Problem.** A shop receives orders at an average rate of 3 per hour from online and 2 per hour
from walk-in customers. Find the probability of receiving more than 7 orders in a two-hour period.

Total rate per hour $= 3 + 2 = 5$. For two hours, $X \sim \mathrm{Po}(10)$.

$P(X \gt 7) = 1 - P(X \leq 7) = 1 - e^{-10}\displaystyle\sum_{r=0}^{7}\dfrac{10^r}{r!} \approx 1 - 0.2202 = 0.7798$

:::warning Common Pitfall
When using the Poisson approximation to the binomial, always check that the conditions are met
(large $n$, small $p$). If $p$ is close to 0.5, the normal approximation is more appropriate.
:::

<hr />

## 5. Practice Problems

### Problem 1

$X \sim B(15, 0.35)$. Find: (a) $P(X = 5)$; (b) $P(3 \leq X \leq 7)$; (c) the most likely value
of $X$.

<details>
<summary>Solution</summary>

(a) $P(X = 5) = \dbinom{15}{5}(0.35)^5(0.65)^{10} \approx 0.2123$.

(b) $P(3 \leq X \leq 7) = P(X \leq 7) - P(X \leq 2) \approx 0.9506 - 0.0355 = 0.9151$.

(c) Mode $\approx (n+1)p = 16 \times 0.35 = 5.6$, so check $r = 5$ and $r = 6$.

$P(X = 5) \approx 0.2123$, $P(X = 6) \approx 0.2186$. The mode is $X = 6$.

</details>

### Problem 2

The heights of men are normally distributed with mean $175\;\mathrm{cm}$ and standard deviation
$8\;\mathrm{cm}$. Find the probability that a randomly selected man is: (a) taller than $190\;\mathrm{cm}$;
(b) between $168\;\mathrm{cm}$ and $182\;\mathrm{cm}$; (c) what height is exceeded by only 5% of men?

<details>
<summary>Solution</summary>

(a) $P(X \gt 190) = P\!\left(Z \gt \dfrac{15}{8}\right) = P(Z \gt 1.875) = 1 - 0.9696 = 0.0304$.

(b) $P(168 \lt X \lt 182) = P(-0.875 \lt Z \lt 0.875) = 2\Phi(0.875) - 1 = 2(0.8092) - 1 = 0.6184$.

(c) $P(Z \gt z) = 0.05 \implies z = 1.645$. Height $= 175 + 1.645 \times 8 = 188.2\;\mathrm{cm}$.

</details>

### Problem 3

The number of emails received per hour follows a Poisson distribution with mean 6. Find the
probability that: (a) exactly 4 emails are received in an hour; (b) more than 10 emails in two
hours.

<details>
<summary>Solution</summary>

(a) $P(X = 4) = \dfrac{e^{-6} \cdot 6^4}{4!} = \dfrac{1296}{24}e^{-6} = 54e^{-6} \approx 0.1335$.

(b) For two hours, $Y \sim \mathrm{Po}(12)$.

$P(Y \gt 10) = 1 - P(Y \leq 10) \approx 1 - 0.6528 = 0.3472$.

</details>

### Problem 4

A die is rolled 60 times. Use a suitable approximation to find the probability that the number of
sixes is between 8 and 14 inclusive.

<details>
<summary>Solution</summary>

$X \sim B(60, 1/6)$. $\mu = 10$, $\sigma^2 = 60 \times \dfrac{1}{6} \times \dfrac{5}{6} = \dfrac{25}{3} \approx 8.333$.

$\sigma \approx 2.887$.

$P(8 \leq X \leq 14) \approx P(7.5 \lt Y \lt 14.5)$ where $Y \sim N(10, 25/3)$.

$= P\!\left(\dfrac{7.5 - 10}{2.887} \lt Z \lt \dfrac{14.5 - 10}{2.887}\right) = P(-0.866 \lt Z \lt 1.558)$

$= \Phi(1.558) - \Phi(-0.866) = 0.9404 - 0.1931 = 0.7473$.

</details>
