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

:::info The formula booklet gives the probability mass function for the Binomial and Poisson
distributions, and the normal distribution function. You must know when to use each distribution and
how to find probabilities.
:::

<hr />

## 1. Discrete Random Variables

### 1.1 Definition

**Definition.** A **discrete random variable** $X$ takes values from a countable set with
probabilities $P(X = x_i) = p_i$ satisfying:

- $p_i \geq 0$ for all $i$
- $\sum_i p_i = 1$

### 1.2 Expectation and variance

$$E(X) = \mu = \sum x_i\,p_i$$
$$\mathrm{Var}(X) = \sigma^2 = E(X^2) - [E(X)]^2 = \sum x_i^2\,p_i - \mu^2$$

<hr />

## 2. The Binomial Distribution

### 2.1 Derivation from Bernoulli trials

A **Bernoulli trial** is an experiment with exactly two outcomes: success (probability $p$) and
failure (probability $1-p$).

If we perform $n$ independent Bernoulli trials, the number of successes $X$ follows a **Binomial
distribution**: $X \sim B(n, p)$.

**Derivation of the PMF.** Each sequence of $k$ successes and $n-k$ failures has probability
$p^k(1-p)^{n-k}$. The number of such sequences is $\binom{n}{k}$ (choosing which $k$ of the $n$
trials are successes). Therefore:

$$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$

### 2.2 Proof that $E(X) = np$

**Proof.** Let $X_i$ be the indicator variable for the $i$-th trial: $X_i = 1$ if success, $0$ if
failure.

$X = X_1 + X_2 + \cdots + X_n$.

$E(X_i) = 1 \cdot p + 0 \cdot (1-p) = p$.

By linearity of expectation: $E(X) = \sum E(X_i) = np$. $\blacksquare$

### 2.3 Proof that $\mathrm{Var}(X) = np(1-p)$

**Proof.** $E(X_i^2) = 1^2 \cdot p + 0^2 \cdot (1-p) = p$.

$\mathrm{Var}(X_i) = E(X_i^2) - [E(X_i)]^2 = p - p^2 = p(1-p)$.

Since the $X_i$ are independent: $\mathrm{Var}(X) = \sum \mathrm{Var}(X_i) = np(1-p)$.
$\blacksquare$

### 2.4 Properties

- The distribution is symmetric when $p = 0.5$.
- It is skewed left when $p \gt{} 0.5$ and skewed right when $p \lt{} 0.5$.
- The mode is at $\lfloor(n+1)p\rfloor$.

### 2.5 Direct derivation of $E(X) = np$ from the PMF

The proofs in Sections 2.2 and 2.3 use indicator variables. Here we derive the same results directly
from the probability mass function using algebraic identities.

**Proof.** Starting from the definition of expectation applied to the binomial PMF:

$$E(X) = \sum_{k=0}^{n} k \binom{n}{k}p^k(1-p)^{n-k}$$

The $k=0$ term vanishes, so begin the sum at $k=1$. Apply the identity
$k\binom{n}{k} = n\binom{n-1}{k-1}$:

$$E(X) = \sum_{k=1}^{n} n\binom{n-1}{k-1}p^k(1-p)^{n-k} = np\sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1}(1-p)^{(n-1)-(k-1)}$$

Substitute $j = k - 1$:

$$E(X) = np\sum_{j=0}^{n-1}\binom{n-1}{j}p^j(1-p)^{n-1-j}$$

By the binomial theorem, $\sum_{j=0}^{n-1}\binom{n-1}{j}p^j(1-p)^{n-1-j} = [p + (1-p)]^{n-1} = 1$.

Therefore $E(X) = np$. $\blacksquare$

### 2.6 Direct derivation of $\mathrm{Var}(X) = np(1-p)$ from the PMF

**Proof.** First compute $E(X(X-1))$:

$$E(X(X-1)) = \sum_{k=0}^{n} k(k-1)\binom{n}{k}p^k(1-p)^{n-k}$$

Terms with $k = 0, 1$ are zero. Apply the identity $k(k-1)\binom{n}{k} = n(n-1)\binom{n-2}{k-2}$:

$$E(X(X-1)) = \sum_{k=2}^{n} n(n-1)\binom{n-2}{k-2}p^k(1-p)^{n-k} = n(n-1)p^2\sum_{k=2}^{n}\binom{n-2}{k-2}p^{k-2}(1-p)^{(n-2)-(k-2)}$$

Substitute $j = k - 2$:

$$E(X(X-1)) = n(n-1)p^2\sum_{j=0}^{n-2}\binom{n-2}{j}p^j(1-p)^{n-2-j} = n(n-1)p^2$$

The final equality follows from the binomial theorem:
$\sum_{j=0}^{n-2}\binom{n-2}{j}p^j(1-p)^{n-2-j} = 1$.

Now $E(X^2) = E(X(X-1)) + E(X) = n(n-1)p^2 + np$.

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = n(n-1)p^2 + np - n^2p^2 = np - np^2 = np(1-p) \quad \blacksquare$$

<hr />

## 3. The Normal Distribution

### 3.1 Motivation from the Central Limit Theorem

The **Central Limit Theorem (CLT)** states that the sum (or mean) of a large number of independent,
identically distributed random variables is approximately normally distributed, regardless of the
original distribution.

This is why the normal distribution appears so widely in nature: any quantity that is the sum of
many small independent effects (height, measurement error, etc.) will be approximately normal.

### 3.2 Definition

$X \sim N(\mu, \sigma^2)$ has PDF

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\,e^{-\frac{(x-\mu)^2}{2\sigma^2}}$$

### 3.3 Properties

- Bell-shaped, symmetric about $\mu$.
- $E(X) = \mu$, $\mathrm{Var}(X) = \sigma^2$.
- Approximately 68% of data within $\mu \pm \sigma$, 95% within $\mu \pm 2\sigma$, 99.7% within
  $\mu \pm 3\sigma$.

### 3.4 Standard normal

If $X \sim N(\mu, \sigma^2)$, then $Z = \dfrac{X - \mu}{\sigma} \sim N(0, 1)$.

Probabilities are found using the standard normal table or a calculator's inverse normal function.

### 3.5 Finding probabilities

$$P(a < X < b) = P\!\left(\frac{a-\mu}{\sigma} < Z < \frac{b-\mu}{\sigma}\right) = \Phi\!\left(\frac{b-\mu}{\sigma}\right) - \Phi\!\left(\frac{a-\mu}{\sigma}\right)$$

### 3.6 Normal approximation to Binomial

For large $n$ with $np \gt{} 5$ and $n(1-p) \gt{} 5$:

$$B(n, p) \approx N(np, np(1-p))$$

with **continuity correction**:
$P(X \leq k) \approx P\!\left(Z \lt{} \frac{k + 0.5 - np}{\sqrt{np(1-p)}}\right)$.

:::warning Always apply the continuity correction when approximating a discrete distribution
(Binomial) with a continuous one (Normal). Add or subtract 0.5 depending on the inequality
direction.
:::

<hr />

## 4. The Poisson Distribution

### 4.1 Definition

$X \sim \mathrm{Po}(\lambda)$ models the number of events in a fixed interval when events occur
independently at a constant average rate $\lambda$.

$$P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$

### 4.2 Derivation as a limit of the Binomial

**Theorem.** If $n \to \infty$ and $p \to 0$ such that $np = \lambda$ remains constant, then
$B(n, p) \to \mathrm{Po}(\lambda)$.

**Proof.**

$$
\begin{aligned}
P(X = k) &= \binom{n}{k}p^k(1-p)^{n-k} \\
&= \frac{n(n-1)\cdots(n-k+1)}{k!} \cdot \frac{\lambda^k}{n^k} \cdot \left(1-\frac{\lambda}{n}\right)^{n-k}
\end{aligned}
$$

Consider each factor as $n \to \infty$:

- $\dfrac{n(n-1)\cdots(n-k+1)}{n^k} \to 1$ (each term $n-i \approx n$)
- $\left(1 - \dfrac{\lambda}{n}\right)^{n-k} \to e^{-\lambda}$ (using
  $\lim_{n\to\infty}(1+a/n)^n = e^a$)

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

### 4.4 Proof that $\mathrm{Var}(X) = \lambda$

**Proof.** First compute $E(X(X-1))$:

$$
\begin{aligned}
E(X(X-1)) &= \sum_{k=2}^{\infty}k(k-1)\frac{e^{-\lambda}\lambda^k}{k!} = \sum_{k=2}^{\infty}\frac{e^{-\lambda}\lambda^k}{(k-2)!} \\
&= \lambda^2 e^{-\lambda}\sum_{j=0}^{\infty}\frac{\lambda^j}{j!} = \lambda^2 e^{-\lambda} \cdot e^{\lambda} = \lambda^2
\end{aligned}
$$

$E(X^2) = E(X(X-1)) + E(X) = \lambda^2 + \lambda$.

$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \lambda^2 + \lambda - \lambda^2 = \lambda$. $\blacksquare$

### 4.5 Additivity

If $X \sim \mathrm{Po}(\lambda)$ and $Y \sim \mathrm{Po}(\mu)$ are independent, then
$X + Y \sim \mathrm{Po}(\lambda + \mu)$.

### 4.6 Conditions for the Poisson model

The Poisson distribution is appropriate when all of the following hold:

- Events occur **independently** of one another.
- Events occur at a **constant average rate** $\lambda$ in a fixed interval of time, space, or
  volume.
- The probability of more than one event occurring in a sufficiently small sub-interval is
  **negligible**.

These are sometimes called the **Poisson postulates**. When they are satisfied, the number of events
in any interval of length $t$ follows $\mathrm{Po}(\lambda t)$.

Typical applications include: calls arriving at a call centre per hour, typing errors per page,
radioactive decays per second, and cars passing a checkpoint per minute.

:::tip To check whether a scenario fits the Poisson model, verify that the rate is approximately
constant over the interval and that events do not cluster. If events tend to occur in bursts, the
Poisson model is not appropriate.
:::

### 4.7 Poisson approximation to the Binomial

**Practical rule.** When $n \gt{} 50$ and $p \lt{} 0.1$, we may approximate $B(n, p)$ by
$\mathrm{Po}(\lambda)$ where $\lambda = np$.

**Justification.** The theoretical result in Section 4.2 shows that as $n \to \infty$ and $p \to 0$
with $np = \lambda$ held constant, the binomial PMF converges pointwise to the Poisson PMF. The
conditions $n \gt{} 50$ and $p \lt{} 0.1$ are practical thresholds that ensure:

1. **$n$ is large enough** that the discrete binomial is well-approximated by a limit distribution.
2. **$p$ is small enough** that the "rare event" assumption of the Poisson model is satisfied.
3. **$\lambda = np$ is moderate** (typically $0 \lt{} \lambda \lt{} 10$), so that neither
   distribution is heavily concentrated at a single point.

The approximation improves as $n$ increases and $p$ decreases while $\lambda = np$ remains fixed.

:::warning The Poisson approximation is only appropriate when $p$ is small. When $p$ is not small
and $n$ is large, use the normal approximation (Section 3.6) instead. The two approximations are
complementary: Poisson handles the case of many trials with rare success, while normal handles the
case of many trials with moderate success probability.
:::

<hr />

## 5. Choosing the Right Distribution

| Situation                                  | Distribution                   |
| ------------------------------------------ | ------------------------------ |
| Fixed $n$ trials, success/failure          | Binomial $B(n,p)$              |
| Events in continuous interval, rare events | Poisson $\mathrm{Po}(\lambda)$ |
| Continuous, bell-shaped                    | Normal $N(\mu,\sigma^2)$       |

<hr />

## 6. Coding of Random Variables

### 6.1 Definition

A **coding** (or linear transformation) of a discrete random variable $X$ is a new random variable
$Y = aX + b$ where $a$ and $b$ are constants with $a \neq 0$.

Coding arises naturally when changing units (e.g. centimetres to metres, or Celsius to Fahrenheit)
or when shifting and scaling a distribution.

### 6.2 Effect on expectation

**Theorem.** If $Y = aX + b$, then $E(Y) = aE(X) + b$.

**Proof.** Applying the definition of expectation to $Y$:

$$E(Y) = \sum (ax_i + b)\,p_i = a\sum x_i\,p_i + b\sum p_i = aE(X) + b \cdot 1 = aE(X) + b \quad \blacksquare$$

The key step is $\sum p_i = 1$, since the probabilities sum to 1.

### 6.3 Effect on variance

**Theorem.** If $Y = aX + b$, then $\mathrm{Var}(Y) = a^2\mathrm{Var}(X)$.

**Proof.**

$$
\begin{aligned}
\mathrm{Var}(Y) &= E(Y^2) - [E(Y)]^2 \\
&= E[(aX + b)^2] - [aE(X) + b]^2 \\
&= E[a^2X^2 + 2abX + b^2] - \\{a^2[E(X)]^2 + 2abE(X) + b^2\\} \\
&= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2 \\
&= a^2\\{E(X^2) - [E(X)]^2\\} \\
&= a^2\mathrm{Var}(X) \quad \blacksquare
\end{aligned}
$$

Note how the terms $2abE(X)$ and $b^2$ cancel between $E(Y^2)$ and $[E(Y)]^2$.

:::info Adding a constant $b$ (a location shift) has **no effect** on variance. Only multiplying by
$a$ (a scale change) affects variance, and it does so by a factor of $a^2$. This is why variance is
measured in **squared units** of the original variable.
:::

### 6.4 Effect on standard deviation

Since $\mathrm{Var}(Y) = a^2\mathrm{Var}(X)$, taking square roots gives:

$$\mathrm{SD}(Y) = |a|\,\mathrm{SD}(X)$$

The absolute value ensures the standard deviation remains non-negative regardless of the sign of
$a$.

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
$X \sim B(10, 0.3)$. Find $P(X = 4)$, $P(X \leq 3)$, and $P(X \geq 7)$.
</details>

<details>
<summary>Solution 1</summary>
$P(X=4) = \binom{10}{4}(0.3)^4(0.7)^6 = 210 \times 0.0081 \times 0.1176 \approx 0.2001$.

$P(X \leq 3) = P(X=0)+P(X=1)+P(X=2)+P(X=3) \approx 0.0282 + 0.1211 + 0.2335 + 0.2668 \approx 0.6496$.

$P(X \geq 7) = P(X=7)+P(X=8)+P(X=9)+P(X=10) \approx 0.0090 + 0.0014 + 0.0001 + 0.0000 \approx 0.0106$.

**If you get this wrong, revise:** [The Binomial Distribution](#2-the-binomial-distribution) —
Section 2.

</details>

<details>
<summary>Problem 2</summary>
Heights of men are normally distributed with mean 175 cm and standard deviation 8 cm. Find the probability that a randomly chosen man is taller than 185 cm.
</details>

<details>
<summary>Solution 2</summary>
$X \sim N(175, 64)$. $P(X \gt{} 185) = P\!\left(Z \gt{} \dfrac{185-175}{8}\right) = P(Z \gt{} 1.25) = 1 - \Phi(1.25) \approx 1 - 0.8944 = 0.1056$.

**If you get this wrong, revise:** [The Normal Distribution](#3-the-normal-distribution) —
Section 3.

</details>

<details>
<summary>Problem 3</summary>
A call centre receives an average of 4.5 calls per minute. Find the probability of receiving exactly 6 calls in a given minute, and the probability of receiving more than 8 calls.
</details>

<details>
<summary>Solution 3</summary>
$X \sim \mathrm{Po}(4.5)$.

$P(X=6) = \dfrac{e^{-4.5}(4.5)^6}{6!} = \dfrac{0.01111 \times 8303.77}{720} \approx 0.1281$.

$P(X \gt{} 8) = 1 - P(X \leq 8) = 1 - \sum_{k=0}^{8}\dfrac{e^{-4.5}(4.5)^k}{k!} \approx 1 - 0.9804 = 0.0196$.

**If you get this wrong, revise:** [The Poisson Distribution](#4-the-poisson-distribution) —
Section 4.

</details>

<details>
<summary>Problem 4</summary>
$X \sim B(100, 0.04)$. Use the Poisson approximation to find $P(X \leq 2)$.
</details>

<details>
<summary>Solution 4</summary>
$\lambda = np = 4$. $X \approx \mathrm{Po}(4)$.

$P(X \leq 2) = e^{-4}\left(1 + 4 + \dfrac{16}{2}\right) = e^{-4}(1 + 4 + 8) = 13e^{-4} \approx 0.2381$.

**If you get this wrong, revise:**
[Derivation as a Limit](#42-derivation-as-a-limit-of-the-binomial) — Section 4.2.

</details>

<details>
<summary>Problem 5</summary>
Find $c$ such that $P(-c \lt{} Z \lt{} c) = 0.95$ where $Z \sim N(0,1)$.
</details>

<details>
<summary>Solution 5</summary>
$P(-c \lt{} Z \lt{} c) = 2\Phi(c) - 1 = 0.95 \implies \Phi(c) = 0.975$.

From tables: $c \approx 1.96$.

**If you get this wrong, revise:** [Standard Normal](#34-standard-normal) — Section 3.4.

</details>

<details>
<summary>Problem 6</summary>
The number of emails received per hour follows $\mathrm{Po}(12)$. Find the probability of receiving between 10 and 15 emails (inclusive) in a given hour.
</details>

<details>
<summary>Solution 6</summary>
$X \sim \mathrm{Po}(12)$.

$P(10 \leq X \leq 15) = P(X \leq 15) - P(X \leq 9)$.

$P(X \leq 15) \approx 0.7728$, $P(X \leq 9) \approx 0.2424$.

$P(10 \leq X \leq 15) \approx 0.7728 - 0.2424 = 0.5304$.

**If you get this wrong, revise:** [The Poisson Distribution](#4-the-poisson-distribution) —
Section 4.

</details>

<details>
<summary>Problem 7</summary>
A machine produces bolts with lengths $X \sim N(50, 0.04)$ cm. Bolts with length less than 49.7 cm or greater than 50.3 cm are rejected. Find the proportion of bolts rejected.
</details>

<details>
<summary>Solution 7</summary>
$\sigma = \sqrt{0.04} = 0.2$.

$P(X \lt{} 49.7) = P(Z \lt{} (49.7-50)/0.2) = P(Z \lt{} -1.5) = 0.0668$.

$P(X \gt{} 50.3) = P(Z \gt{} 1.5) = 0.0668$.

Proportion rejected $= 0.0668 + 0.0668 = 0.1336$ (13.36%).

**If you get this wrong, revise:** [Finding Probabilities](#35-finding-probabilities) — Section 3.5.

</details>

<details>
<summary>Problem 8</summary>
Prove that $E(aX + b) = aE(X) + b$ and $\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$.
</details>

<details>
<summary>Solution 8</summary>
$E(aX+b) = \sum(a x_i + b)p_i = a\sum x_i p_i + b\sum p_i = aE(X) + b$. ✓

$\mathrm{Var}(aX+b) = E[(aX+b)^2] - [E(aX+b)]^2 = E[a^2X^2 + 2abX + b^2] - [aE(X)+b]^2$
$= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2$
$= a^2[E(X^2) - (E(X))^2] = a^2\mathrm{Var}(X)$. ✓

**If you get this wrong, revise:** [Expectation and Variance](#12-expectation-and-variance) —
Section 1.2.

</details>

<details>
<summary>Problem 9</summary>
$X \sim B(200, 0.15)$. Use the normal approximation with continuity correction to approximate $P(X \gt{} 35)$.
</details>

<details>
<summary>Solution 9</summary>
$\mu = 200(0.15) = 30$, $\sigma^2 = 200(0.15)(0.85) = 25.5$, $\sigma \approx 5.05$.

$P(X \gt{} 35) \approx P\!\left(Z \gt{} \dfrac{35.5 - 30}{5.05}\right) = P(Z \gt{} 1.089) \approx 1 - 0.8621 = 0.1379$.

**If you get this wrong, revise:**
[Normal Approximation to Binomial](#36-normal-approximation-to-binomial) — Section 3.6.

</details>

<details>
<summary>Problem 10</summary>
If $X \sim \mathrm{Po}(3)$ and $Y \sim \mathrm{Po}(5)$ are independent, find $P(X + Y = 6)$.
</details>

<details>
<summary>Solution 10</summary>
By additivity: $X + Y \sim \mathrm{Po}(3+5) = \mathrm{Po}(8)$.

$P(X + Y = 6) = \dfrac{e^{-8}(8)^6}{6!} = \dfrac{e^{-8} \times 262144}{720} \approx \dfrac{0.000335 \times 262144}{720} \approx 0.1221$.

**If you get this wrong, revise:** [Additivity](#45-additivity) — Section 4.5.

</details>

<details>
<summary>Problem 11</summary>
Starting from the definition $E(X) = \sum_{k=0}^{n} k\binom{n}{k}p^k(1-p)^{n-k}$, derive $E(X) = np$ using the identity $k\binom{n}{k} = n\binom{n-1}{k-1}$ and the binomial theorem.
</details>

<details>
<summary>Solution 11</summary>

$$E(X) = \sum_{k=0}^{n} k\binom{n}{k}p^k(1-p)^{n-k} = \sum_{k=1}^{n} n\binom{n-1}{k-1}p^k(1-p)^{n-k}$$

$$= np\sum_{k=1}^{n}\binom{n-1}{k-1}p^{k-1}(1-p)^{(n-1)-(k-1)} = np\sum_{j=0}^{n-1}\binom{n-1}{j}p^j(1-p)^{n-1-j}$$

By the binomial theorem: $\sum_{j=0}^{n-1}\binom{n-1}{j}p^j(1-p)^{n-1-j} = [p+(1-p)]^{n-1} = 1$.

Therefore $E(X) = np$.

**If you get this wrong, revise:**
[Direct derivation of $E(X) = np$ from the PMF](#25-direct-derivation-of-ex--np-from-the-pmf) —
Section 2.5.

</details>

<details>
<summary>Problem 12</summary>
$X \sim \mathrm{Po}(7)$. Let $Y = 3X - 2$. Find $E(Y)$ and $\mathrm{Var}(Y)$.
</details>

<details>
<summary>Solution 12</summary>
For $X \sim \mathrm{Po}(7)$: $E(X) = 7$ and $\mathrm{Var}(X) = 7$.

Using the coding formulae $E(aX+b) = aE(X)+b$ and $\mathrm{Var}(aX+b) = a^2\mathrm{Var}(X)$:

$E(Y) = 3(7) - 2 = 19$.

$\mathrm{Var}(Y) = 3^2 \times 7 = 63$.

Note that the additive constant $-2$ affects the mean but not the variance.

**If you get this wrong, revise:** [Coding of Random Variables](#6-coding-of-random-variables) —
Section 6.

</details>

<details>
<summary>Problem 13</summary>
$X \sim B(80, 0.03)$. State whether the Poisson approximation is valid, giving reasons. If valid, use it to find $P(X \leq 1)$.
</details>

<details>
<summary>Solution 13</summary>
Check conditions: $n = 80 \gt{} 50$ and $p = 0.03 \lt{} 0.1$. Both conditions are satisfied, so the
Poisson approximation is valid with $\lambda = np = 80 \times 0.03 = 2.4$.

$X \approx \mathrm{Po}(2.4)$.

$P(X \leq 1) = P(X=0) + P(X=1) = e^{-2.4}\left(1 + 2.4\right) = 3.4\,e^{-2.4} \approx 3.4 \times 0.0907 \approx 0.3085$.

**If you get this wrong, revise:**
[Poisson approximation to the Binomial](#47-poisson-approximation-to-the-binomial) — Section 4.7.

</details>

<details>
<summary>Problem 14</summary>
A discrete random variable $X$ has $E(X) = 5$ and $\mathrm{Var}(X) = 4$. Let $W = 2X + 3$. Find $E(W)$ and $\mathrm{Var}(W)$.
</details>

<details>
<summary>Solution 14</summary>
$E(W) = 2E(X) + 3 = 2(5) + 3 = 13$.

$\mathrm{Var}(W) = 2^2 \times \mathrm{Var}(X) = 4 \times 4 = 16$.

$\mathrm{SD}(W) = \sqrt{16} = 4$.

**If you get this wrong, revise:** [Coding of Random Variables](#6-coding-of-random-variables) —
Section 6.

</details>

<details>
<summary>Problem 15</summary>
Starting from $E(X(X-1)) = \sum_{k=0}^{n} k(k-1)\binom{n}{k}p^k(1-p)^{n-k}$, derive $\mathrm{Var}(X) = np(1-p)$ for $X \sim B(n,p)$.
</details>

<details>
<summary>Solution 15</summary>
Using $k(k-1)\binom{n}{k} = n(n-1)\binom{n-2}{k-2}$:

$$E(X(X-1)) = \sum_{k=2}^{n} n(n-1)\binom{n-2}{k-2}p^k(1-p)^{n-k} = n(n-1)p^2\sum_{j=0}^{n-2}\binom{n-2}{j}p^j(1-p)^{n-2-j} = n(n-1)p^2$$

Then $E(X^2) = E(X(X-1)) + E(X) = n(n-1)p^2 + np$.

$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = n(n-1)p^2 + np - n^2p^2 = np - np^2 = np(1-p)$.

**If you get this wrong, revise:**
[Direct derivation of $\mathrm{Var}(X) = np(1-p)$ from the PMF](#26-direct-derivation-of-mathrmvarx--np1-p-from-the-pmf)
— Section 2.6.

</details>

<details>
<summary>Problem 16</summary>
$X \sim B(120, 0.025)$. (a) Show that the Poisson approximation is appropriate. (b) Use it to find $P(X = 5)$. (c) State why the normal approximation would not be appropriate here.
</details>

<details>
<summary>Solution 16</summary>
(a) $n = 120 \gt{} 50$ and $p = 0.025 \lt{} 0.1$, so the Poisson approximation is appropriate.
$\lambda = np = 120 \times 0.025 = 3$.

(b) $X \approx \mathrm{Po}(3)$.

$$P(X = 5) = \frac{e^{-3} \times 3^5}{5!} = \frac{e^{-3} \times 243}{120} = 2.025\,e^{-3} \approx 2.025 \times 0.0498 \approx 0.1008$$

(c) For the normal approximation we need $np \gt{} 5$ and $n(1-p) \gt{} 5$. Here $np = 3 \lt{} 5$,
so the normal approximation is not appropriate. The Poisson approximation is the correct choice
since $p$ is small.

**If you get this wrong, revise:**
[Poisson approximation to the Binomial](#47-poisson-approximation-to-the-binomial) — Section 4.7.

</details>

<details>
<summary>Problem 17</summary>
Temperatures in a city are modelled by $X \sim N(15, 9)$ in degrees Celsius. The temperature in
Fahrenheit is $F = \frac{9}{5}X + 32$. Find $E(F)$, $\mathrm{Var}(F)$, and $P(F \gt{} 68)$.
</details>

<details>
<summary>Solution 17</summary>
$E(F) = \frac{9}{5}E(X) + 32 = \frac{9}{5}(15) + 32 = 27 + 32 = 59^\circ\mathrm{F}$.

$\mathrm{Var}(F) = \left(\frac{9}{5}\right)^2 \times 9 = \frac{81}{25} \times 9 = \frac{729}{25} = 29.16$.

$\mathrm{SD}(F) = \sqrt{29.16} = 5.4$.

$P(F \gt{} 68) = P\!\left(Z \gt{} \dfrac{68 - 59}{5.4}\right) = P(Z \gt{} 1.667) \approx 1 - 0.9522 = 0.0478$.

**If you get this wrong, revise:** [Coding of Random Variables](#6-coding-of-random-variables) —
Section 6.

</details>

:::

:::
