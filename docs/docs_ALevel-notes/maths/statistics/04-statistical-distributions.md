---
title: Statistical Distributions
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: statistical-distributions
---

## Board Coverage

| Board      | Paper      | Notes                                    |
| ---------- | ---------- | ---------------------------------------- |
| AQA        | Paper 1, 2 | Binomial and normal in P1; Poisson in P2 |
| Edexcel    | P1, P2     | Similar                                  |
| OCR (A)    | Paper 1, 2 | Binomial in P1; normal and Poisson in P2 |
| CIE (9709) | P1, P6     | Binomial in P1; normal and Poisson in P6 |

:::info
The formula booklet gives the probability mass function for the Binomial and Poisson distributions, and the normal distribution function. You must know when to use each distribution and how to find probabilities.
:::

---

## 1. Discrete Random Variables

### 1.1 Definition

**Definition.** A **discrete random variable** $X$ takes values from a countable set with probabilities $P(X = x_i) = p_i$ satisfying:

- $p_i \geq 0$ for all $i$
- $\sum_i p_i = 1$

### 1.2 Expectation and variance

$$E(X) = \mu = \sum x_i\,p_i$$
$$\text{Var}(X) = \sigma^2 = E(X^2) - [E(X)]^2 = \sum x_i^2\,p_i - \mu^2$$

---

## 2. The Binomial Distribution

### 2.1 Derivation from Bernoulli trials

A **Bernoulli trial** is an experiment with exactly two outcomes: success (probability $p$) and failure (probability $1-p$).

If we perform $n$ independent Bernoulli trials, the number of successes $X$ follows a **Binomial distribution**: $X \sim B(n, p)$.

**Derivation of the PMF.** Each sequence of $k$ successes and $n-k$ failures has probability $p^k(1-p)^{n-k}$. The number of such sequences is $\binom{n}{k}$ (choosing which $k$ of the $n$ trials are successes). Therefore:

$$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$

### 2.2 Proof that $E(X) = np$

**Proof.** Let $X_i$ be the indicator variable for the $i$-th trial: $X_i = 1$ if success, $0$ if failure.

$X = X_1 + X_2 + \cdots + X_n$.

$E(X_i) = 1 \cdot p + 0 \cdot (1-p) = p$.

By linearity of expectation: $E(X) = \sum E(X_i) = np$. $\blacksquare$

### 2.3 Proof that $\text{Var}(X) = np(1-p)$

**Proof.** $E(X_i^2) = 1^2 \cdot p + 0^2 \cdot (1-p) = p$.

$\text{Var}(X_i) = E(X_i^2) - [E(X_i)]^2 = p - p^2 = p(1-p)$.

Since the $X_i$ are independent: $\text{Var}(X) = \sum \text{Var}(X_i) = np(1-p)$. $\blacksquare$

### 2.4 Properties

- The distribution is symmetric when $p = 0.5$.
- It is skewed left when $p > 0.5$ and skewed right when $p < 0.5$.
- The mode is at $\lfloor(n+1)p\rfloor$.

---

## 3. The Normal Distribution

### 3.1 Motivation from the Central Limit Theorem

The **Central Limit Theorem (CLT)** states that the sum (or mean) of a large number of independent, identically distributed random variables is approximately normally distributed, regardless of the original distribution.

This is why the normal distribution appears so widely in nature: any quantity that is the sum of many small independent effects (height, measurement error, etc.) will be approximately normal.

### 3.2 Definition

$X \sim N(\mu, \sigma^2)$ has PDF

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

### 3.3 Properties

- Bell-shaped, symmetric about $\mu$.
- $E(X) = \mu$, $\text{Var}(X) = \sigma^2$.
- Approximately 68% of data within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$, 99.7% within $\mu \pm 3\sigma$.

### 3.4 Standard normal

If $X \sim N(\mu, \sigma^2)$, then $Z = \dfrac{X - \mu}{\sigma} \sim N(0, 1)$.

Probabilities are found using the standard normal table or a calculator's inverse normal function.

### 3.5 Finding probabilities

$$P(a < X < b) = P\!\left(\frac{a-\mu}{\sigma} < Z < \frac{b-\mu}{\sigma}\right) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

### 3.6 Normal approximation to Binomial

For large $n$ with $np > 5$ and $n(1-p) > 5$:

$$B(n, p) \approx N(np, np(1-p))$$

with **continuity correction**: $P(X \leq k) \approx P\!\left(Z < \frac{k + 0.5 - np}{\sqrt{np(1-p)}}\right)$.

:::warning
Always apply the continuity correction when approximating a discrete distribution (Binomial) with a continuous one (Normal). Add or subtract 0.5 depending on the inequality direction.
:::

---

## 4. The Poisson Distribution

### 4.1 Definition

$X \sim \text{Po}(\lambda)$ models the number of events in a fixed interval when events occur independently at a constant average rate $\lambda$.

$$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$

### 4.2 Derivation as a limit of the Binomial

**Theorem.** If $n \to \infty$ and $p \to 0$ such that $np = \lambda$ remains constant, then $B(n, p) \to \text{Po}(\lambda)$.

**Proof.**

$$
\begin{aligned}
P(X = k) &= \binom{n}{k}p^k(1-p)^{n-k} \\
&= \frac{n(n-1)\cdots(n-k+1)}{k!} \cdot \frac{\lambda^k}{n^k} \cdot \left(1-\frac{\lambda}{n}\right)^{n-k}
\end{aligned}
$$

Consider each factor as $n \to \infty$:

- $\dfrac{n(n-1)\cdots(n-k+1)}{n^k} \to 1$ (each term $n-i \approx n$)
- $\left(1 - \dfrac{\lambda}{n}\right)^{n-k} \to e^{-\lambda}$ (using $\lim_{n\to\infty}(1+a/n)^n = e^a$)

Therefore:

$$P(X = k) \to \frac{1}{k!} \cdot \lambda^k \cdot e^{-\lambda} = \frac{e^{-\lambda}\lambda^k}{k!} \quad \blacksquare$$

### 4.3 Proof that $E(X) = \lambda$

**Proof.**

$$
\begin{aligned}
E(X) &= \sum_{k=0}^{\infty}k \cdot \frac{e^{-\lambda}\lambda^k}{k!} = \sum_{k=1}^{\infty}\frac{e^{-\lambda}\lambda^k}{(k-1)!} \\
&= \lambda e^{-\lambda}\sum_{k=1}^{\infty}\frac{\lambda^{k-1}}{(k-1)!} = \lambda e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!} \\
&= \lambda e^{-\lambda} \cdot e^{\lambda} = \lambda \quad \blacksquare
\end{aligned}
$$

### 4.4 Proof that $\text{Var}(X) = \lambda$

**Proof.** First compute $E(X(X-1))$:

$$
\begin{aligned}
E(X(X-1)) &= \sum_{k=2}^{\infty}k(k-1)\frac{e^{-\lambda}\lambda^k}{k!} = \sum_{k=2}^{\infty}\frac{e^{-\lambda}\lambda^k}{(k-2)!} \\
&= \lambda^2 e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!} = \lambda^2 e^{-\lambda} \cdot e^{\lambda} = \lambda^2
\end{aligned}
$$

$E(X^2) = E(X(X-1)) + E(X) = \lambda^2 + \lambda$.

$\text{Var}(X) = E(X^2) - [E(X)]^2 = \lambda^2 + \lambda - \lambda^2 = \lambda$. $\blacksquare$

### 4.5 Additivity

If $X \sim \text{Po}(\lambda)$ and $Y \sim \text{Po}(\mu)$ are independent, then $X + Y \sim \text{Po}(\lambda + \mu)$.

---

## 5. Choosing the Right Distribution

| Situation                                  | Distribution                 |
| ------------------------------------------ | ---------------------------- |
| Fixed $n$ trials, success/failure          | Binomial $B(n,p)$            |
| Events in continuous interval, rare events | Poisson $\text{Po}(\lambda)$ |
| Continuous, bell-shaped                    | Normal $N(\mu,\sigma^2)$     |

---

## Problem Set

<details><summary>Problem 1</summary><div>
$X \sim B(10, 0.3)$. Find $P(X = 4)$, $P(X \leq 3)$, and $P(X \geq 7)$.
</div></details>

<details><summary>Solution 1</summary><div>
$P(X=4) = \binom{10}{4}(0.3)^4(0.7)^6 = 210 \times 0.0081 \times 0.1176 \approx 0.2001$.

$P(X \leq 3) = P(X=0)+P(X=1)+P(X=2)+P(X=3) \approx 0.0282 + 0.1211 + 0.2335 + 0.2668 \approx 0.6496$.

$P(X \geq 7) = P(X=7)+P(X=8)+P(X=9)+P(X=10) \approx 0.0090 + 0.0014 + 0.0001 + 0.0000 \approx 0.0106$.

**If you get this wrong, revise:** [The Binomial Distribution](#2-the-binomial-distribution) — Section 2.

</div></details>

<details><summary>Problem 2</summary><div>
Heights of men are normally distributed with mean 175 cm and standard deviation 8 cm. Find the probability that a randomly chosen man is taller than 185 cm.
</div></details>

<details><summary>Solution 2</summary><div>
$X \sim N(175, 64)$. $P(X > 185) = P\!\left(Z > \dfrac{185-175}{8}\right) = P(Z > 1.25) = 1 - \Phi(1.25) \approx 1 - 0.8944 = 0.1056$.

**If you get this wrong, revise:** [The Normal Distribution](#3-the-normal-distribution) — Section 3.

</div></details>

<details><summary>Problem 3</summary><div>
A call centre receives an average of 4.5 calls per minute. Find the probability of receiving exactly 6 calls in a given minute, and the probability of receiving more than 8 calls.
</div></details>

<details><summary>Solution 3</summary><div>
$X \sim \text{Po}(4.5)$.

$P(X=6) = \dfrac{e^{-4.5}(4.5)^6}{6!} = \dfrac{0.01111 \times 8303.77}{720} \approx 0.1281$.

$P(X > 8) = 1 - P(X \leq 8) = 1 - \sum_{k=0}^{8}\dfrac{e^{-4.5}(4.5)^k}{k!} \approx 1 - 0.9804 = 0.0196$.

**If you get this wrong, revise:** [The Poisson Distribution](#4-the-poisson-distribution) — Section 4.

</div></details>

<details><summary>Problem 4</summary><div>
$X \sim B(100, 0.04)$. Use the Poisson approximation to find $P(X \leq 2)$.
</div></details>

<details><summary>Solution 4</summary><div>
$\lambda = np = 4$. $X \approx \text{Po}(4)$.

$P(X \leq 2) = e^{-4}\left(1 + 4 + \dfrac{16}{2}\right) = e^{-4}(1 + 4 + 8) = 13e^{-4} \approx 0.2381$.

**If you get this wrong, revise:** [Derivation as a Limit](#42-derivation-as-a-limit-of-the-binomial) — Section 4.2.

</div></details>

<details><summary>Problem 5</summary><div>
Find $c$ such that $P(-c < Z < c) = 0.95$ where $Z \sim N(0,1)$.
</div></details>

<details><summary>Solution 5</summary><div>
$P(-c < Z < c) = 2\Phi(c) - 1 = 0.95 \implies \Phi(c) = 0.975$.

From tables: $c \approx 1.96$.

**If you get this wrong, revise:** [Standard Normal](#34-standard-normal) — Section 3.4.

</div></details>

<details><summary>Problem 6</summary><div>
The number of emails received per hour follows $\text{Po}(12)$. Find the probability of receiving between 10 and 15 emails (inclusive) in a given hour.
</div></details>

<details><summary>Solution 6</summary><div>
$X \sim \text{Po}(12)$.

$P(10 \leq X \leq 15) = P(X \leq 15) - P(X \leq 9)$.

$P(X \leq 15) \approx 0.7728$, $P(X \leq 9) \approx 0.2424$.

$P(10 \leq X \leq 15) \approx 0.7728 - 0.2424 = 0.5304$.

**If you get this wrong, revise:** [The Poisson Distribution](#4-the-poisson-distribution) — Section 4.

</div></details>

<details><summary>Problem 7</summary><div>
A machine produces bolts with lengths $X \sim N(50, 0.04)$ cm. Bolts with length less than 49.7 cm or greater than 50.3 cm are rejected. Find the proportion of bolts rejected.
</div></details>

<details><summary>Solution 7</summary><div>
$\sigma = \sqrt{0.04} = 0.2$.

$P(X < 49.7) = P(Z < (49.7-50)/0.2) = P(Z < -1.5) = 0.0668$.

$P(X > 50.3) = P(Z > 1.5) = 0.0668$.

Proportion rejected $= 0.0668 + 0.0668 = 0.1336$ (13.36%).

**If you get this wrong, revise:** [Finding Probabilities](#35-finding-probabilities) — Section 3.5.

</div></details>

<details><summary>Problem 8</summary><div>
Prove that $E(aX + b) = aE(X) + b$ and $\text{Var}(aX + b) = a^2\text{Var}(X)$.
</div></details>

<details><summary>Solution 8</summary><div>
$E(aX+b) = \sum(a x_i + b)p_i = a\sum x_i p_i + b\sum p_i = aE(X) + b$. ✓

$\text{Var}(aX+b) = E[(aX+b)^2] - [E(aX+b)]^2 = E[a^2X^2 + 2abX + b^2] - [aE(X)+b]^2$
$= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2$
$= a^2[E(X^2) - (E(X))^2] = a^2\text{Var}(X)$. ✓

**If you get this wrong, revise:** [Expectation and Variance](#12-expectation-and-variance) — Section 1.2.

</div></details>

<details><summary>Problem 9</summary><div>
$X \sim B(200, 0.15)$. Use the normal approximation with continuity correction to approximate $P(X > 35)$.
</div></details>

<details><summary>Solution 9</summary><div>
$\mu = 200(0.15) = 30$, $\sigma^2 = 200(0.15)(0.85) = 25.5$, $\sigma \approx 5.05$.

$P(X > 35) \approx P\!\left(Z > \dfrac{35.5 - 30}{5.05}\right) = P(Z > 1.089) \approx 1 - 0.8621 = 0.1379$.

**If you get this wrong, revise:** [Normal Approximation to Binomial](#36-normal-approximation-to-binomial) — Section 3.6.

</div></details>

<details><summary>Problem 10</summary><div>
If $X \sim \text{Po}(3)$ and $Y \sim \text{Po}(5)$ are independent, find $P(X + Y = 6)$.
</div></details>

<details><summary>Solution 10</summary><div>
By additivity: $X + Y \sim \text{Po}(3+5) = \text{Po}(8)$.

$P(X + Y = 6) = \dfrac{e^{-8}(8)^6}{6!} = \dfrac{e^{-8} \times 262144}{720} \approx \dfrac{0.000335 \times 262144}{720} \approx 0.1221$.

**If you get this wrong, revise:** [Additivity](#45-additivity) — Section 4.5.

</div></details>
