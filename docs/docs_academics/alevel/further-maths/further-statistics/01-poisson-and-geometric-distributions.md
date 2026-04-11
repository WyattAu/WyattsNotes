---
title: Poisson and Geometric Distributions
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: poisson-geometric
sidebar_position: 1
---

## Poisson and Geometric Distributions

The Poisson and geometric distributions model discrete random variables arising from counting
processes. The Poisson distribution counts the number of rare events in a fixed interval, while the
geometric distribution counts the number of trials until the first success.

### Board Coverage

| Board      | Paper   | Notes                                   |
| ---------- | ------- | --------------------------------------- |
| AQA        | Paper 2 | Both Poisson and geometric in depth     |
| Edexcel    | S2, S3  | Poisson in S2; geometric in S3          |
| OCR (A)    | Paper 2 | Poisson and geometric                   |
| CIE (9231) | S2      | Poisson covered; geometric not required |

:::info
The formula booklet provides the Poisson PMF. You must know when to apply each distribution
and how to carry out hypothesis testing with discrete distributions. The geometric distribution has
two common conventions for the support: $r = 1, 2, 3, \ldots$ (number of trials) or
$r = 0, 1, 2, \ldots$ (number of failures). AQA uses $r = 1, 2, \ldots$.
:::

---

## 1. The Poisson Distribution

### 1.1 Definition

**Definition.** A discrete random variable $X$ follows a **Poisson distribution** with parameter
$\lambda$ (where $\lambda > 0$), written $X \sim \text{Po}(\lambda)$, if

$$P(X = r) = \frac{e^{-\lambda}\lambda^r}{r!}, \quad r = 0, 1, 2, \ldots$$

The Poisson distribution models the number of events occurring in a fixed interval of time or space
when:

- Events occur independently
- Events occur at a constant average rate $\lambda$
- The probability of more than one event in a sufficiently small interval is negligible

### 1.2 Derivation as a Limit of the Binomial

**Theorem.** If $n \to \infty$ and $p \to 0$ such that $np = \lambda$ remains constant, then
$B(n, p) \to \text{Po}(\lambda)$.

### Proof

$$
\begin{aligned}
P(X = r) &= \binom{n}{r}p^r(1-p)^{n-r} \\
&= \frac{n(n-1)\cdots(n-r+1)}{r!}\cdot\frac{\lambda^r}{n^r}\cdot\left(1-\frac{\lambda}{n}\right)^{n-r}
\end{aligned}
$$

Consider each factor as $n \to \infty$:

- $\dfrac{n(n-1)\cdots(n-r+1)}{n^r} \to 1$ since each of the $r$ factors tends to 1
- $\left(1-\dfrac{\lambda}{n}\right)^{n-r} = \left(1-\dfrac{\lambda}{n}\right)^n \cdot \left(1-\dfrac{\lambda}{n}\right)^{-r} \to e^{-\lambda} \cdot 1 = e^{-\lambda}$

Therefore:

$$P(X = r) \to \frac{1}{r!}\cdot\lambda^r \cdot e^{-\lambda} = \frac{e^{-\lambda}\lambda^r}{r!} \quad \blacksquare$$

### 1.3 Proof that $E(X) = \lambda$

### Proof

$$
\begin{aligned}
E(X) &= \sum_{r=0}^{\infty}r\cdot\frac{e^{-\lambda}\lambda^r}{r!} = \sum_{r=1}^{\infty}\frac{e^{-\lambda}\lambda^r}{(r-1)!} \\
&= \lambda e^{-\lambda}\sum_{r=1}^{\infty}\frac{\lambda^{r-1}}{(r-1)!} = \lambda e^{-\lambda}\sum_{k=0}^{\infty}\frac{\lambda^k}{k!} \\
&= \lambda e^{-\lambda}\cdot e^{\lambda} = \lambda \quad \blacksquare
\end{aligned}
$$

### 1.4 Proof that $\text{Var}(X) = \lambda$

### Proof

First compute $E(X(X-1))$:

$$
\begin{aligned}
E(X(X-1)) &= \sum_{r=2}^{\infty}r(r-1)\frac{e^{-\lambda}\lambda^r}{r!} = \sum_{r=2}^{\infty}\frac{e^{-\lambda}\lambda^r}{(r-2)!} \\
&= \lambda^2 e^{-\lambda}\sum_{k=0}^{\infty}\frac{\lambda^k}{k!} = \lambda^2 e^{-\lambda}\cdot e^{\lambda} = \lambda^2
\end{aligned}
$$

Since $E(X^2) = E(X(X-1)) + E(X) = \lambda^2 + \lambda$:

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = \lambda^2 + \lambda - \lambda^2 = \lambda \quad \blacksquare$$

$$\boxed{E(X) = \text{Var}(X) = \lambda}$$

This is the defining property of the Poisson distribution: the mean equals the variance.

### 1.5 Additivity of Poisson distributions

If $X \sim \text{Po}(\lambda)$ and $Y \sim \text{Po}(\mu)$ are independent, then

$$\boxed{X + Y \sim \text{Po}(\lambda + \mu)}$$

### 1.6 Cumulative probabilities

Cumulative Poisson probabilities are found using:

$$P(X \leq r) = \sum_{k=0}^{r}\frac{e^{-\lambda}\lambda^k}{k!}$$

These are typically obtained from tables or a calculator. Key relationships:

$$P(X > r) = 1 - P(X \leq r)$$ $$P(a \leq X \leq b) = P(X \leq b) - P(X \leq a-1)$$

### 1.7 Poisson hypothesis testing

The procedure mirrors binomial hypothesis testing:

1. Define $X$ and state $X \sim \text{Po}(\lambda_0)$ under $H_0$
2. State $H_0: \lambda = \lambda_0$ and $H_1$
3. State the significance level $\alpha$
4. Find the critical region
5. Compare the observed value
6. Conclude in context

**Example.** A call centre receives an average of 3.2 calls per minute. In a particular minute, 7
calls are received. Test at the 5% significance level whether the rate has increased.

$X \sim \text{Po}(3.2)$. $H_0: \lambda = 3.2$, $H_1: \lambda > 3.2$.

$P(X \geq 7) = 1 - P(X \leq 6) = 1 - 0.9554 = 0.0446 < 0.05$.

Reject $H_0$. There is sufficient evidence that the rate has increased.

**Example.** Find the critical region for a two-tailed test at the 5% level with
$X \sim \text{Po}(5)$.

Lower tail: $P(X \leq 0) = e^{-5} \approx 0.0067 \leq 0.025$. $P(X \leq 1) = 0.0404 > 0.025$. So
$X \leq 0$.

Upper tail: $P(X \geq 10) = 1 - 0.9682 = 0.0318 \leq 0.025$? No.
$P(X \geq 11) = 1 - 0.9830 = 0.0170 \leq 0.025$. So $X \geq 11$.

Critical region: $X \leq 0$ or $X \geq 11$.

---

## 2. The Geometric Distribution

### 2.1 Definition

**Definition.** A discrete random variable $X$ follows a **geometric distribution** with parameter
$p$ (where $0 < p \leq 1$), written $X \sim \text{Geo}(p)$, if $X$ is the number of the trial on
which the first success occurs:

$$P(X = r) = (1-p)^{r-1}p, \quad r = 1, 2, 3, \ldots$$

Each trial is independent with probability $p$ of success.

### 2.2 Proof that $E(X) = \frac{1}{p}$

### Proof

$$
\begin{aligned}
E(X) &= \sum_{r=1}^{\infty}r\,q^{r-1}p \quad \text{where } q = 1-p
\end{aligned}
$$

Let $S = \sum_{r=1}^{\infty}r\,q^{r-1}$. Recall the geometric series
$\sum_{r=0}^{\infty}q^r = \frac{1}{1-q}$ for $|q| < 1$.

Differentiating both sides with respect to $q$:

$$\sum_{r=1}^{\infty}rq^{r-1} = \frac{1}{(1-q)^2}$$

Therefore:

$$E(X) = p \cdot \frac{1}{(1-q)^2} = p \cdot \frac{1}{p^2} = \frac{1}{p} \quad \blacksquare$$

### 2.3 Proof that $\text{Var}(X) = \frac{1-p}{p^2}$

### Proof

First compute $E(X^2) = E(X(X-1)) + E(X)$.

$$
\begin{aligned}
E(X(X-1)) &= \sum_{r=2}^{\infty}r(r-1)q^{r-1}p = p\,q\sum_{r=2}^{\infty}r(r-1)q^{r-2}
\end{aligned}
$$

Starting from $\sum_{r=0}^{\infty}q^r = \frac{1}{1-q}$, differentiating twice:

$$\sum_{r=2}^{\infty}r(r-1)q^{r-2} = \frac{2}{(1-q)^3}$$

So $E(X(X-1)) = p\,q\cdot\frac{2}{(1-q)^3} = p\,q\cdot\frac{2}{p^3} = \frac{2q}{p^2}$.

$$
\begin{aligned}
E(X^2) &= \frac{2q}{p^2} + \frac{1}{p} = \frac{2q + p}{p^2} = \frac{2(1-p) + p}{p^2} = \frac{2-p}{p^2} \\[4pt]
\text{Var}(X) &= E(X^2) - [E(X)]^2 = \frac{2-p}{p^2} - \frac{1}{p^2} = \frac{1-p}{p^2} \quad \blacksquare
\end{aligned}
$$

$$\boxed{E(X) = \frac{1}{p}, \qquad \text{Var}(X) = \frac{1-p}{p^2}}$$

### 2.4 The memoryless property

**Theorem.** The geometric distribution is the only discrete memoryless distribution:

$$P(X > m + n \mid X > m) = P(X > n)$$

### Proof

$$
\begin{aligned}
P(X > m + n \mid X > m) &= \frac{P(X > m+n \text{ and } X > m)}{P(X > m)} \\
&= \frac{P(X > m+n)}{P(X > m)} \quad \text{(since } X > m+n \implies X > m\text{)} \\
&= \frac{1 - P(X \leq m+n)}{1 - P(X \leq m)}
\end{aligned}
$$

Now $P(X \leq k) = \sum_{r=1}^{k}q^{r-1}p = p\cdot\frac{1-q^k}{1-q} = 1 - q^k$.

Therefore:

$$
\frac{1 - (1-q^{m+n})}{1 - (1-q^m)} = \frac{q^{m+n}}{q^m} = q^n = 1 - (1-q^n) = P(X > n) \quad \blacksquare
$$

:::info
This is a remarkable property. It means that if you have already waited $m$ trials without
success, the probability of waiting at least $n$ more trials is exactly the same as if you were
starting fresh. The process "forgets" its history.
:::

### 2.5 Cumulative distribution function

$$P(X \leq r) = 1 - q^r = 1 - (1-p)^r$$

### 2.6 Geometric hypothesis testing

**Example.** A bag contains red and blue balls. The probability of drawing a red ball is $p$. In an
experiment, the first red ball is drawn on the 10th draw. Test at the 5% level whether $p = 0.3$.

$X \sim \text{Geo}(0.3)$. $H_0: p = 0.3$, $H_1: p < 0.3$ (the ball took longer than expected, so $p$
may be smaller).

$p\text{-value} = P(X \geq 10) = (1-0.3)^{10-1} = 0.7^9 \approx 0.0404 < 0.05$.

Reject $H_0$. There is sufficient evidence that $p < 0.3$.

**Critical region approach.** For $H_1: p < 0.3$ at the 5% level, find $c$ such that
$P(X \geq c) \leq 0.05$:

$P(X \geq 9) = 0.7^8 \approx 0.0576 > 0.05$. $P(X \geq 10) = 0.7^9 \approx 0.0404 < 0.05$.

Critical region: $X \geq 10$.

---

## 3. Modelling with Poisson and Geometric Distributions

### 3.1 When to use each

| Situation                                         | Distribution                 |
| ------------------------------------------------- | ---------------------------- |
| Number of events in a fixed interval, rare events | Poisson $\text{Po}(\lambda)$ |
| Number of trials until first success              | Geometric $\text{Geo}(p)$    |
| Fixed number of trials, counting successes        | Binomial $B(n, p)$           |

### 3.2 Poisson as approximation to Binomial

When $n$ is large and $p$ is small such that $np \leq 10$:

$$B(n, p) \approx \text{Po}(np)$$

**Example.** $X \sim B(200, 0.02)$. Then $\lambda = np = 4$, so $X \approx \text{Po}(4)$.

$P(X \leq 2) \approx e^{-4}\left(1 + 4 + \frac{16}{2}\right) = 13e^{-4} \approx 0.2381$.

### 3.3 Conditions check

Before applying the Poisson distribution, verify:

1. Events occur at a constant average rate
2. Events are independent
3. At most one event can occur in a sufficiently small sub-interval

:::warning
The Poisson approximation to the binomial is used when $n \geq 50$ and $np \leq 5$. Do
not confuse this with the normal approximation to the binomial, which requires $np > 5$ and
$n(1-p) > 5$.
:::

---

## Problems

<details>
<summary>Problem 1</summary>
A factory produces items with defects occurring at an average rate of 2.5 per hour. Find the probability of exactly 4 defects in a given hour, and the probability of more than 6 defects in a 2-hour period.
</details>

<details>
<summary>Solution 1</summary>
For one hour: $X \sim \text{Po}(2.5)$. $P(X=4) = \dfrac{e^{-2.5}(2.5)^4}{4!} = \dfrac{0.08209 \times 39.0625}{24} \approx 0.1336$.

For two hours: $Y \sim \text{Po}(5)$ (by additivity).
$P(Y > 6) = 1 - P(Y \leq 6) = 1 - 0.7622 = 0.2378$.

**If you get this wrong, revise:** [Cumulative probabilities](#16-cumulative-probabilities) —
Section 1.6.

</details>

<details>
<summary>Problem 2</summary>
A die is rolled repeatedly until a 6 appears. Find the probability that the first 6 appears on the 5th roll, and the probability that it takes more than 10 rolls.
</details>

<details>
<summary>Solution 2</summary>
$X \sim \text{Geo}(1/6)$. $P(X=5) = \left(\dfrac{5}{6}\right)^4 \cdot \dfrac{1}{6} = \dfrac{625}{1296} \cdot \dfrac{1}{6} \approx 0.0804$.

$P(X > 10) = \left(\dfrac{5}{6}\right)^{10-1} \cdot \left(\dfrac{5}{6}\right)^0 \cdot 1 = \left(\dfrac{5}{6}\right)^{10} \approx 0.1615$.

Wait: $P(X > 10) = 1 - P(X \leq 10) = 1 - (1-q^{10}) = q^{10} = (5/6)^{10} \approx 0.1615$.

**If you get this wrong, revise:**
[Cumulative distribution function](#25-cumulative-distribution-function) — Section 2.5.

</details>

<details>
<summary>Problem 3</summary>
Prove that $E(X) = \lambda$ for $X \sim \text{Po}(\lambda)$, showing all steps of the summation.
</details>

<details>
<summary>Solution 3</summary>
$E(X) = \sum_{r=0}^{\infty}r\cdot\dfrac{e^{-\lambda}\lambda^r}{r!} = \sum_{r=1}^{\infty}\dfrac{e^{-\lambda}\lambda^r}{(r-1)!} = \lambda e^{-\lambda}\sum_{r=1}^{\infty}\dfrac{\lambda^{r-1}}{(r-1)!}$

Substituting $k = r-1$:
$= \lambda e^{-\lambda}\sum_{k=0}^{\infty}\dfrac{\lambda^k}{k!} = \lambda e^{-\lambda}\cdot e^{\lambda} = \lambda$.
$\blacksquare$

**If you get this wrong, revise:** [Proof that $E(X) = \lambda$](#13-proof-that-ex--lambda) —
Section 1.3.

</details>

<details>
<summary>Problem 4</summary>
The number of emails received per hour follows $\text{Po}(8)$. Find the probability of receiving between 6 and 12 emails (inclusive) in a given hour.
</details>

<details>
<summary>Solution 4</summary>
$X \sim \text{Po}(8)$. $P(6 \leq X \leq 12) = P(X \leq 12) - P(X \leq 5)$.

$P(X \leq 12) \approx 0.9362$, $P(X \leq 5) \approx 0.1912$.

$P(6 \leq X \leq 12) \approx 0.9362 - 0.1912 = 0.7450$.

**If you get this wrong, revise:** [Cumulative probabilities](#16-cumulative-probabilities) —
Section 1.6.

</details>

<details>
<summary>Problem 5</summary>
A manufacturer claims that on average 1 in 20 items is defective. In a batch of 500 items, use the Poisson approximation to find the probability of at most 35 defectives.
</details>

<details>
<summary>Solution 5</summary>
$X \sim B(500, 1/20)$. $\lambda = np = 500/20 = 25$.

$X \approx \text{Po}(25)$. $P(X \leq 35) = \sum_{r=0}^{35}\dfrac{e^{-25}(25)^r}{r!} \approx 0.8878$.

**If you get this wrong, revise:**
[Poisson as approximation to Binomial](#32-poisson-as-approximation-to-binomial) — Section 3.2.

</details>

<details>
<summary>Problem 6</summary>
Prove the memoryless property of the geometric distribution: $P(X > m+n \mid X > m) = P(X > n)$.
</details>

<details>
<summary>Solution 6</summary>
$P(X > m+n \mid X > m) = \dfrac{P(X > m+n)}{P(X > m)} = \dfrac{q^{m+n}}{q^m} = q^n = P(X > n)$.

This uses $P(X > k) = q^k = (1-p)^k$, which follows from $P(X \leq k) = 1 - q^k$. $\blacksquare$

**If you get this wrong, revise:** [The memoryless property](#24-the-memoryless-property) — Section
2.4.

</details>

<details>
<summary>Problem 7</summary>
A shop receives an average of 6 customers per 30 minutes. Find the critical region for a test at the 5% significance level of $H_0: \lambda = 6$ against $H_1: \lambda > 6$, where $X$ is the number of customers in a 30-minute period.
</details>

<details>
<summary>Solution 7</summary>
Under $H_0$: $X \sim \text{Po}(6)$.

$P(X \geq 10) = 1 - P(X \leq 9) = 1 - 0.9161 = 0.0839 > 0.05$.
$P(X \geq 11) = 1 - P(X \leq 10) = 1 - 0.9574 = 0.0426 < 0.05$.

Critical region: $X \geq 11$. Actual significance level: 4.26%.

**If you get this wrong, revise:** [Poisson hypothesis testing](#17-poisson-hypothesis-testing) —
Section 1.7.

</details>

<details>
<summary>Problem 8</summary>
$X \sim \text{Geo}(p)$. Find $P(X = 3 \mid X > 1)$ and show it equals $P(X = 2)$.
</details>

<details>
<summary>Solution 8</summary>
$P(X = 3 \mid X > 1) = \dfrac{P(X = 3)}{P(X > 1)} = \dfrac{q^2 p}{q} = qp = P(X = 2)$.

This is a direct consequence of the memoryless property: given that the first trial was a failure,
the distribution of the remaining trials is the same as starting fresh.

**If you get this wrong, revise:** [The memoryless property](#24-the-memoryless-property) — Section
2.4.

</details>

<details>
<summary>Problem 9</summary>
The number of accidents per week at a junction follows $\text{Po}(3)$. After new traffic lights are installed, 8 accidents are observed in one week. Test at the 5% level whether the rate has increased.
</details>

<details>
<summary>Solution 9</summary>
$X \sim \text{Po}(3)$. $H_0: \lambda = 3$, $H_1: \lambda > 3$. $\alpha = 0.05$.

$p\text{-value} = P(X \geq 8) = 1 - P(X \leq 7) = 1 - 0.9881 = 0.0119 < 0.05$.

Reject $H_0$. There is sufficient evidence that the accident rate has increased.

Alternatively, critical region: $P(X \geq 7) = 1 - 0.9665 = 0.0335 < 0.05$,
$P(X \geq 6) = 1 - 0.9165 = 0.0835 > 0.05$.

Critical region: $X \geq 7$. Since $X = 8 \geq 7$, reject $H_0$.

**If you get this wrong, revise:** [Poisson hypothesis testing](#17-poisson-hypothesis-testing) —
Section 1.7.

</details>

<details>
<summary>Problem 10</summary>
If $X \sim \text{Geo}(p)$, find $E(X(X-1))$ and hence verify that $\text{Var}(X) = \dfrac{1-p}{p^2}$.
</details>

<details>
<summary>Solution 10</summary>
$E(X(X-1)) = \sum_{r=2}^{\infty}r(r-1)q^{r-1}p = pq\sum_{r=2}^{\infty}r(r-1)q^{r-2}$.

Since $\sum_{r=0}^{\infty}q^r = \dfrac{1}{1-q}$, differentiating twice gives
$\sum_{r=2}^{\infty}r(r-1)q^{r-2} = \dfrac{2}{(1-q)^3}$.

$E(X(X-1)) = pq \cdot \dfrac{2}{p^3} = \dfrac{2q}{p^2}$.

$E(X^2) = E(X(X-1)) + E(X) = \dfrac{2q}{p^2} + \dfrac{1}{p} = \dfrac{2q+p}{p^2} = \dfrac{2-p}{p^2}$.

$\text{Var}(X) = \dfrac{2-p}{p^2} - \dfrac{1}{p^2} = \dfrac{1-p}{p^2}$. $\blacksquare$

**If you get this wrong, revise:**
[Proof that $\text{Var}(X) = \frac{1-p}{p^2}$](#23-proof-that-varx--frac1-pp2) — Section 2.3.

</details>

:::

:::

:::
