---
title: Poisson and Geometric Distributions
description:
  "A-Level Further Maths notes on Poisson and Geometric Distributions: Board Coverage; 1. The Poisson Distribution; 1.1 Definition."
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

<hr />

## 1. The Poisson Distribution

### 1.1 Definition

**Definition.** A discrete random variable $X$ follows a **Poisson distribution** with parameter
$\lambda$ (where $\lambda > 0$), written $X \sim \mathrm{Po}(\lambda)$, if

$$P(X = r) = \frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆r!◆RB◆, \quad r = 0, 1, 2, \ldots$$

The Poisson distribution models the number of events occurring in a fixed interval of time or space
when:

- Events occur independently
- Events occur at a constant average rate $\lambda$
- The probability of more than one event in a sufficiently small interval is negligible

### 1.2 Derivation as a Limit of the Binomial

**Theorem.** If $n \to \infty$ and $p \to 0$ such that $np = \lambda$ remains constant, then
$B(n, p) \to \mathrm{Po}(\lambda)$.

### Proof

$$
\begin{aligned}
P(X = r) &= \binom{n}{r}p^r(1-p)^{n-r} \\
&= \frac◆LB◆n(n-1)\cdots(n-r+1)◆RB◆◆LB◆r!◆RB◆\cdot\frac◆LB◆\lambda^r◆RB◆◆LB◆n^r◆RB◆\cdot\left(1-\frac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{n-r}
\end{aligned}
$$

Consider each factor as $n \to \infty$:

- $\dfrac◆LB◆n(n-1)\cdots(n-r+1)◆RB◆◆LB◆n^r◆RB◆ \to 1$ since each of the $r$ factors tends to 1
- $\left(1-\dfrac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{n-r} = \left(1-\dfrac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^n \cdot \left(1-\dfrac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{-r} \to e^{-\lambda} \cdot 1 = e^{-\lambda}$

Therefore:

$$P(X = r) \to \frac{1}{r!}\cdot\lambda^r \cdot e^{-\lambda} = \frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆r!◆RB◆ \quad \blacksquare$$

### 1.3 Proof that $E(X) = \lambda$

### Proof

$$
\begin{aligned}
E(X) &= \sum_{r=0}^{\infty}r\cdot\frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆r!◆RB◆ = \sum_{r=1}^{\infty}\frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆(r-1)!◆RB◆ \\
&= \lambda e^{-\lambda}\sum_{r=1}^{\infty}\frac◆LB◆\lambda^{r-1}◆RB◆◆LB◆(r-1)!◆RB◆ = \lambda e^{-\lambda}\sum_{k=0}^{\infty}\frac◆LB◆\lambda^k◆RB◆◆LB◆k!◆RB◆ \\
&= \lambda e^{-\lambda}\cdot e^{\lambda} = \lambda \quad \blacksquare
\end{aligned}
$$

### 1.4 Proof that $\mathrm{Var}(X) = \lambda$

### Proof

First compute $E(X(X-1))$:

$$
\begin{aligned}
E(X(X-1)) &= \sum_{r=2}^{\infty}r(r-1)\frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆r!◆RB◆ = \sum_{r=2}^{\infty}\frac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆(r-2)!◆RB◆ \\
&= \lambda^2 e^{-\lambda}\sum_{k=0}^{\infty}\frac◆LB◆\lambda^k◆RB◆◆LB◆k!◆RB◆ = \lambda^2 e^{-\lambda}\cdot e^{\lambda} = \lambda^2
\end{aligned}
$$

Since $E(X^2) = E(X(X-1)) + E(X) = \lambda^2 + \lambda$:

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \lambda^2 + \lambda - \lambda^2 = \lambda \quad \blacksquare$$

$$\boxed{E(X) = \mathrm{Var}(X) = \lambda}$$

This is the defining property of the Poisson distribution: the mean equals the variance.

### 1.5 Additivity of Poisson distributions

If $X \sim \mathrm{Po}(\lambda)$ and $Y \sim \mathrm{Po}(\mu)$ are independent, then

$$\boxed{X + Y \sim \mathrm{Po}(\lambda + \mu)}$$

### 1.6 Cumulative probabilities

Cumulative Poisson probabilities are found using:

$$P(X \leq r) = \sum_{k=0}^{r}\frac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆k!◆RB◆$$

These are typically obtained from tables or a calculator. Key relationships:

$$P(X > r) = 1 - P(X \leq r)$$ $$P(a \leq X \leq b) = P(X \leq b) - P(X \leq a-1)$$

### 1.7 Poisson hypothesis testing

The procedure mirrors binomial hypothesis testing:

1. Define $X$ and state $X \sim \mathrm{Po}(\lambda_0)$ under $H_0$
2. State $H_0: \lambda = \lambda_0$ and $H_1$
3. State the significance level $\alpha$
4. Find the critical region
5. Compare the observed value
6. Conclude in context

**Example.** A call centre receives an average of 3.2 calls per minute. In a particular minute, 7
calls are received. Test at the 5% significance level whether the rate has increased.

$X \sim \mathrm{Po}(3.2)$. $H_0: \lambda = 3.2$, $H_1: \lambda > 3.2$.

$P(X \geq 7) = 1 - P(X \leq 6) = 1 - 0.9554 = 0.0446 < 0.05$.

Reject $H_0$. There is sufficient evidence that the rate has increased.

**Example.** Find the critical region for a two-tailed test at the 5% level with
$X \sim \mathrm{Po}(5)$.

Lower tail: $P(X \leq 0) = e^{-5} \approx 0.0067 \leq 0.025$. $P(X \leq 1) = 0.0404 > 0.025$. So
$X \leq 0$.

Upper tail: $P(X \geq 10) = 1 - 0.9682 = 0.0318 \leq 0.025$? No.
$P(X \geq 11) = 1 - 0.9830 = 0.0170 \leq 0.025$. So $X \geq 11$.

Critical region: $X \leq 0$ or $X \geq 11$.

<hr />

## 2. The Geometric Distribution

### 2.1 Definition

**Definition.** A discrete random variable $X$ follows a **geometric distribution** with parameter
$p$ (where $0 < p \leq 1$), written $X \sim \mathrm{Geo}(p)$, if $X$ is the number of the trial on
which the first success occurs:

$$P(X = r) = (1-p)^{r-1}p, \quad r = 1, 2, 3, \ldots$$

Each trial is independent with probability $p$ of success.

### 2.2 Proof that $E(X) = \frac{1}{p}$

### Proof

$$
\begin{aligned}
E(X) &= \sum_{r=1}^{\infty}r\,q^{r-1}p \quad \mathrm{where } q = 1-p
\end{aligned}
$$

Let $S = \sum_{r=1}^{\infty}r\,q^{r-1}$. Recall the geometric series
$\sum_{r=0}^{\infty}q^r = \frac{1}{1-q}$ for $|q| < 1$.

Differentiating both sides with respect to $q$:

$$\sum_{r=1}^{\infty}rq^{r-1} = \frac{1}{(1-q)^2}$$

Therefore:

$$E(X) = p \cdot \frac{1}{(1-q)^2} = p \cdot \frac{1}{p^2} = \frac{1}{p} \quad \blacksquare$$

### 2.3 Proof that $\mathrm{Var}(X) = \frac{1-p}{p^2}$

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
\mathrm{Var}(X) &= E(X^2) - [E(X)]^2 = \frac{2-p}{p^2} - \frac{1}{p^2} = \frac{1-p}{p^2} \quad \blacksquare
\end{aligned}
$$

$$\boxed{E(X) = \frac{1}{p}, \qquad \mathrm{Var}(X) = \frac{1-p}{p^2}}$$

### 2.4 The memoryless property

**Theorem.** The geometric distribution is the only discrete memoryless distribution:

$$P(X > m + n \mid X > m) = P(X > n)$$

### Proof

$$
\begin{aligned}
P(X > m + n \mid X > m) &= \frac◆LB◆P(X > m+n \mathrm{ and } X > m)◆RB◆◆LB◆P(X > m)◆RB◆ \\
&= \frac{P(X > m+n)}{P(X > m)} \quad \mathrm{(since } X > m+n \implies X > m\mathrm{)} \\
&= \frac◆LB◆1 - P(X \leq m+n)◆RB◆◆LB◆1 - P(X \leq m)◆RB◆
\end{aligned}
$$

Now $P(X \leq k) = \sum_{r=1}^{k}q^{r-1}p = p\cdot\frac{1-q^k}{1-q} = 1 - q^k$.

Therefore:

$$
\frac{1 - (1-q^{m+n})}{1 - (1-q^m)} = \frac{q^{m+n}}{q^m} = q^n = 1 - (1-q^n) = P(X > n) \quad \blacksquare
$$

:::info
info
success, the probability of waiting at least $n$ more trials is exactly the same as if you were
starting fresh. The process "forgets" its history.
:::

### 2.5 Cumulative distribution function

$$P(X \leq r) = 1 - q^r = 1 - (1-p)^r$$

### 2.6 Geometric hypothesis testing

**Example.** A bag contains red and blue balls. The probability of drawing a red ball is $p$. In an
experiment, the first red ball is drawn on the 10th draw. Test at the 5% level whether $p = 0.3$.

$X \sim \mathrm{Geo}(0.3)$. $H_0: p = 0.3$, $H_1: p < 0.3$ (the ball took longer than expected, so
$p$ may be smaller).

$p\mathrm{-value} = P(X \geq 10) = (1-0.3)^{10-1} = 0.7^9 \approx 0.0404 < 0.05$.

Reject $H_0$. There is sufficient evidence that $p < 0.3$.

**Critical region approach.** For $H_1: p < 0.3$ at the 5% level, find $c$ such that
$P(X \geq c) \leq 0.05$:

$P(X \geq 9) = 0.7^8 \approx 0.0576 > 0.05$. $P(X \geq 10) = 0.7^9 \approx 0.0404 < 0.05$.

Critical region: $X \geq 10$.

<hr />

## 3. Modelling with Poisson and Geometric Distributions

### 3.1 When to use each

| Situation                                         | Distribution                   |
| ------------------------------------------------- | ------------------------------ |
| Number of events in a fixed interval, rare events | Poisson $\mathrm{Po}(\lambda)$ |
| Number of trials until first success              | Geometric $\mathrm{Geo}(p)$    |
| Fixed number of trials, counting successes        | Binomial $B(n, p)$             |

### 3.2 Poisson as approximation to Binomial

When $n$ is large and $p$ is small such that $np \leq 10$:

$$B(n, p) \approx \mathrm{Po}(np)$$

**Example.** $X \sim B(200, 0.02)$. Then $\lambda = np = 4$, so $X \approx \mathrm{Po}(4)$.

$P(X \leq 2) \approx e^{-4}\left(1 + 4 + \frac{16}{2}\right) = 13e^{-4} \approx 0.2381$.

### 3.3 Conditions check

Before applying the Poisson distribution, verify:

1. Events occur at a constant average rate
2. Events are independent
3. At most one event can occur in a sufficiently small sub-interval

:::warning
warning
not confuse this with the normal approximation to the binomial, which requires $np > 5$ and
$n(1-p) > 5$.
:::

<hr />

## Problems

<details>
<summary>Problem 1</summary>
A factory produces items with defects occurring at an average rate of 2.5 per hour. Find the probability of exactly 4 defects in a given hour, and the probability of more than 6 defects in a 2-hour period.
</details>

<details>
<summary>Solution 1</summary>
For one hour: $X \sim \mathrm{Po}(2.5)$. $P(X=4) = \dfrac{e^{-2.5}(2.5)^4}{4!} = \dfrac◆LB◆0.08209 \times 39.0625◆RB◆◆LB◆24◆RB◆ \approx 0.1336$.

For two hours: $Y \sim \mathrm{Po}(5)$ (by additivity).
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
$X \sim \mathrm{Geo}(1/6)$. $P(X=5) = \left(\dfrac{5}{6}\right)^4 \cdot \dfrac{1}{6} = \dfrac{625}{1296} \cdot \dfrac{1}{6} \approx 0.0804$.

$P(X > 10) = \left(\dfrac{5}{6}\right)^{10-1} \cdot \left(\dfrac{5}{6}\right)^0 \cdot 1 = \left(\dfrac{5}{6}\right)^{10} \approx 0.1615$.

Wait: $P(X > 10) = 1 - P(X \leq 10) = 1 - (1-q^{10}) = q^{10} = (5/6)^{10} \approx 0.1615$.

**If you get this wrong, revise:**
[Cumulative distribution function](#25-cumulative-distribution-function) — Section 2.5.

</details>

<details>
<summary>Problem 3</summary>
Prove that $E(X) = \lambda$ for $X \sim \mathrm{Po}(\lambda)$, showing all steps of the summation.
</details>

<details>
<summary>Solution 3</summary>
$E(X) = \sum_{r=0}^{\infty}r\cdot\dfrac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆r!◆RB◆ = \sum_{r=1}^{\infty}\dfrac◆LB◆e^{-\lambda}\lambda^r◆RB◆◆LB◆(r-1)!◆RB◆ = \lambda e^{-\lambda}\sum_{r=1}^{\infty}\dfrac◆LB◆\lambda^{r-1}◆RB◆◆LB◆(r-1)!◆RB◆$

Substituting $k = r-1$:
$= \lambda e^{-\lambda}\sum_{k=0}^{\infty}\dfrac◆LB◆\lambda^k◆RB◆◆LB◆k!◆RB◆ = \lambda e^{-\lambda}\cdot e^{\lambda} = \lambda$.
$\blacksquare$

**If you get this wrong, revise:** [Proof that $E(X) = \lambda$](#13-proof-that-ex--lambda) —
Section 1.3.

</details>

<details>
<summary>Problem 4</summary>
The number of emails received per hour follows $\mathrm{Po}(8)$. Find the probability of receiving between 6 and 12 emails (inclusive) in a given hour.
</details>

<details>
<summary>Solution 4</summary>
$X \sim \mathrm{Po}(8)$. $P(6 \leq X \leq 12) = P(X \leq 12) - P(X \leq 5)$.

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

$X \approx \mathrm{Po}(25)$.
$P(X \leq 35) = \sum_{r=0}^{35}\dfrac{e^{-25}(25)^r}{r!} \approx 0.8878$.

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
Under $H_0$: $X \sim \mathrm{Po}(6)$.

$P(X \geq 10) = 1 - P(X \leq 9) = 1 - 0.9161 = 0.0839 > 0.05$.
$P(X \geq 11) = 1 - P(X \leq 10) = 1 - 0.9574 = 0.0426 < 0.05$.

Critical region: $X \geq 11$. Actual significance level: 4.26%.

**If you get this wrong, revise:** [Poisson hypothesis testing](#17-poisson-hypothesis-testing) —
Section 1.7.

</details>

<details>
<summary>Problem 8</summary>
$X \sim \mathrm{Geo}(p)$. Find $P(X = 3 \mid X > 1)$ and show it equals $P(X = 2)$.
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
The number of accidents per week at a junction follows $\mathrm{Po}(3)$. After new traffic lights are installed, 8 accidents are observed in one week. Test at the 5% level whether the rate has increased.
</details>

<details>
<summary>Solution 9</summary>
$X \sim \mathrm{Po}(3)$. $H_0: \lambda = 3$, $H_1: \lambda > 3$. $\alpha = 0.05$.

$p\mathrm{-value} = P(X \geq 8) = 1 - P(X \leq 7) = 1 - 0.9881 = 0.0119 < 0.05$.

Reject $H_0$. There is sufficient evidence that the accident rate has increased.

Alternatively, critical region: $P(X \geq 7) = 1 - 0.9665 = 0.0335 < 0.05$,
$P(X \geq 6) = 1 - 0.9165 = 0.0835 > 0.05$.

Critical region: $X \geq 7$. Since $X = 8 \geq 7$, reject $H_0$.

**If you get this wrong, revise:** [Poisson hypothesis testing](#17-poisson-hypothesis-testing) —
Section 1.7.

</details>

<details>
<summary>Problem 10</summary>
If $X \sim \mathrm{Geo}(p)$, find $E(X(X-1))$ and hence verify that $\mathrm{Var}(X) = \dfrac{1-p}{p^2}$.
</details>

<details>
<summary>Solution 10</summary>
$E(X(X-1)) = \sum_{r=2}^{\infty}r(r-1)q^{r-1}p = pq\sum_{r=2}^{\infty}r(r-1)q^{r-2}$.

Since $\sum_{r=0}^{\infty}q^r = \dfrac{1}{1-q}$, differentiating twice gives
$\sum_{r=2}^{\infty}r(r-1)q^{r-2} = \dfrac{2}{(1-q)^3}$.

$E(X(X-1)) = pq \cdot \dfrac{2}{p^3} = \dfrac{2q}{p^2}$.

$E(X^2) = E(X(X-1)) + E(X) = \dfrac{2q}{p^2} + \dfrac{1}{p} = \dfrac{2q+p}{p^2} = \dfrac{2-p}{p^2}$.

$\mathrm{Var}(X) = \dfrac{2-p}{p^2} - \dfrac{1}{p^2} = \dfrac{1-p}{p^2}$. $\blacksquare$

**If you get this wrong, revise:**
[Proof that $\mathrm{Var}(X) = \frac{1-p}{p^2}$](#23-proof-that-mathrmvarx--frac1-pp2) — Section
2.3.

</details>

---

## 7. Advanced Worked Examples

### Example 7.1: Poisson approximation to binomial

**Problem.** A factory produces items with a defect rate of 0.02. In a batch of 200 items, find the probability of exactly 3 defective items using (a) the binomial distribution and (b) the Poisson approximation.

**Solution.** **(a) Binomial:** $X \sim \mathrm{Bin}(200, 0.02)$.

$$P(X = 3) = \binom{200}{3}(0.02)^3(0.98)^{197} = \frac◆LB◆200 \times 199 \times 198◆RB◆◆LB◆6◆RB◆ \times 8 \times 10^{-6} \times (0.98)^{197}$$

**(b) Poisson approximation:** $\lambda = np = 200 \times 0.02 = 4$. $X \approx \mathrm{Po}(4)$.

$$P(X = 3) = \frac◆LB◆e^{-4} \cdot 4^3◆RB◆◆LB◆3!◆RB◆ = \frac{64}{6e^4} = \frac{32}{3e^4} \approx 0.1954$$

The approximation is valid since $n \geq 50$ and $p \leq 0.1$.

### Example 7.2: Geometric distribution and memoryless property

**Problem.** A fair die is rolled until a 6 appears. Find the probability that more than 4 rolls are needed. Verify the memoryless property: $P(X > m + n \mid X > m) = P(X > n)$.

**Solution.** $X \sim \mathrm{Geo}(1/6)$.

$$P(X > 4) = \left(\frac{5}{6}\right)^4 = \frac{625}{1296} \approx 0.4823$$

**Memoryless property:**

$$P(X > m + n \mid X > m) = \frac{P(X > m + n)}{P(X > m)} = \frac{(5/6)^{m+n}}{(5/6)^m} = \left(\frac{5}{6}\right)^n = P(X > n) \quad \blacksquare$$

### Example 7.3: Cumulative Poisson probabilities

**Problem.** Calls arrive at a call centre at a rate of 2.5 per minute. Find the probability that more than 5 calls arrive in a 3-minute period.

**Solution.** For a 3-minute period: $\lambda = 2.5 \times 3 = 7.5$. $X \sim \mathrm{Po}(7.5)$.

$$P(X > 5) = 1 - P(X \leq 5) = 1 - \sum_{k=0}^{5}\frac{e^{-7.5}(7.5)^k}{k!}$$

$$= 1 - e^{-7.5}\!\left(1 + 7.5 + \frac{7.5^2}{2} + \frac{7.5^3}{6} + \frac{7.5^4}{24} + \frac{7.5^5}{120}\right)$$

$$= 1 - e^{-7.5}\!\left(1 + 7.5 + 28.125 + 70.3125 + 131.836 + 197.754 + 197.754\right)$$

$$= 1 - e^{-7.5} \times 633.577 \approx 1 - 0.554 \times 0.634 = 1 - 0.351 = 0.649$$

### Example 7.4: Hypothesis testing with the Poisson distribution

**Problem.** A traffic survey records the number of cars passing a point in 10-second intervals. The observed frequencies for $k$ cars are compared with the expected frequencies under $H_0$: $X \sim \mathrm{Po}(3)$. Calculate the expected frequency for each value of $k$ if 200 intervals were observed.

**Solution.** Under $H_0$: $P(X = k) = \dfrac◆LB◆e^{-3} \cdot 3^k◆RB◆◆LB◆k!◆RB◆$.

| $k$ | $P(X = k)$ | Expected freq ($\times 200$) |
|---|---|---|
| 0 | $e^{-3} = 0.0498$ | 9.96 |
| 1 | $3e^{-3} = 0.1494$ | 29.87 |
| 2 | $4.5e^{-3} = 0.2240$ | 44.81 |
| 3 | $4.5e^{-3} = 0.2240$ | 44.81 |
| 4 | $3.375e^{-3} = 0.1680$ | 33.60 |
| 5 | $2.025e^{-3} = 0.1008$ | 20.17 |
| $\geq 6$ | $1 - \sum_0^5$ | $\approx 16.78$ |

### Example 7.5: Fitting a Poisson distribution

**Problem.** The number of email messages received per hour is recorded over 100 hours: $\{0: 5, 1: 15, 2: 25, 3: 30, 4: 15, 5: 7, 6: 3\}$. Estimate the parameter $\lambda$ and calculate expected frequencies.

**Solution.** $\bar{x} = \dfrac{0(5) + 1(15) + 2(25) + 3(30) + 4(15) + 5(7) + 6(3)}{100} = \dfrac{0 + 15 + 50 + 90 + 60 + 35 + 18}{100} = \dfrac{268}{100} = 2.68$.

$\hat{\lambda} = 2.68$.

Expected frequency for $k$: $100 \times \dfrac{e^{-2.68}(2.68)^k}{k!}$.

| $k$ | Expected |
|---|---|
| 0 | $100e^{-2.68} = 6.86$ |
| 1 | $100 \times 2.68 e^{-2.68} = 18.38$ |
| 2 | $100 \times 3.59 e^{-2.68} = 24.64$ |
| 3 | $100 \times 3.21 e^{-2.68} = 22.02$ |
| 4 | $100 \times 2.15 e^{-2.68} = 14.76$ |
| 5 | $100 \times 1.15 e^{-2.68} = 7.91$ |
| 6 | $100 \times 0.51 e^{-2.68} = 3.52$ |

### Example 7.6: Conditional probability with geometric distribution

**Problem.** In a game, the probability of winning each round is $p = 0.3$ independently. Given that a player has not won in the first 5 rounds, find the probability that they win within the next 3 rounds.

**Solution.** $X \sim \mathrm{Geo}(0.3)$. By the memoryless property:

$$P(X \leq 8 \mid X > 5) = P(X \leq 3) = 1 - (0.7)^3 = 1 - 0.343 = 0.657$$

### Example 7.7: Sum of independent Poisson variables

**Problem.** $X \sim \mathrm{Po}(3)$ and $Y \sim \mathrm{Po}(5)$ are independent. State the distribution of $X + Y$ and find $P(X + Y = 6)$.

**Solution.** $X + Y \sim \mathrm{Po}(3 + 5) = \mathrm{Po}(8)$.

$$P(X + Y = 6) = \frac◆LB◆e^{-8} \cdot 8^6◆RB◆◆LB◆6!◆RB◆ = \frac◆LB◆262144 \cdot e^{-8}◆RB◆◆LB◆720◆RB◆ = \frac◆LB◆364.09 \cdot e^{-8}◆RB◆◆LB◆1◆RB◆ \approx 0.1221$$

### Example 7.8: Poisson as a limiting case

**Problem.** Prove that if $X \sim \mathrm{Bin}(n, p)$ with $\lambda = np$ fixed as $n \to \infty$, then $P(X = k) \to \dfrac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆k!◆RB◆$.

**Solution.**

$$P(X = k) = \binom{n}{k}p^k(1-p)^{n-k} = \frac{n!}{k!(n-k)!}\cdot\frac◆LB◆\lambda^k◆RB◆◆LB◆n^k◆RB◆\cdot\left(1-\frac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{n-k}$$

$$= \frac◆LB◆\lambda^k◆RB◆◆LB◆k!◆RB◆\cdot\frac◆LB◆n(n-1)\cdots(n-k+1)◆RB◆◆LB◆n^k◆RB◆\cdot\left(1-\frac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{n-k}$$

As $n \to \infty$: $\dfrac◆LB◆n(n-1)\cdots(n-k+1)◆RB◆◆LB◆n^k◆RB◆ \to 1$ and $\left(1-\dfrac◆LB◆\lambda◆RB◆◆LB◆n◆RB◆\right)^{n-k} \to e^{-\lambda}$.

Therefore $P(X = k) \to \dfrac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆k!◆RB◆$. $\blacksquare$

---

## 8. Connections to Other Topics

### 8.1 Poisson distribution and exponential distribution

If events occur according to a Poisson process with rate $\lambda$, the time between consecutive events follows the exponential distribution $\mathrm{Exp}(\lambda)$. See [Exponential and Continuous Random Variables](/docs/docs_alevel/further-maths/further-statistics/02-exponential-and-continuous-random-variables).

### 8.2 Geometric distribution and series summation

The probability generating function $G_X(t) = \dfrac{pt}{1-qt}$ of the geometric distribution connects to the summation of geometric series. See [Further Algebra](/docs/docs_alevel/further-maths/pure-mathematics/03-further-algebra).

### 8.3 Poisson and hypothesis testing

Goodness-of-fit tests using the chi-squared statistic compare observed and expected (Poisson) frequencies. See [Chi-Squared Tests](/docs/docs_alevel/further-maths/further-statistics/03-chi-squared-tests).

---

## 9. Additional Exam-Style Questions

### Question 11

A shop receives on average 4 customers per hour. Find the probability that:
**(a)** Exactly 3 customers arrive in a given hour.
**(b)** More than 2 customers arrive in a 30-minute period.

<details>
<summary>Solution</summary>

**(a)** $X \sim \mathrm{Po}(4)$.

$$P(X = 3) = \frac◆LB◆e^{-4}\cdot 64◆RB◆◆LB◆6◆RB◆ = \frac{32}{3e^4} \approx 0.1954$$

**(b)** For 30 minutes: $Y \sim \mathrm{Po}(2)$.

$$P(Y > 2) = 1 - P(Y \leq 2) = 1 - e^{-2}(1 + 2 + 2) = 1 - 5e^{-2} \approx 0.3233$$

</details>

### Question 12

A coin is tossed until the first head appears. The probability of heads is $p$.

**(a)** Find $E(X)$ and $\mathrm{Var}(X)$ where $X$ is the number of tosses needed.

**(b)** Find the probability that $X$ is even.

<details>
<summary>Solution</summary>

**(a)** $X \sim \mathrm{Geo}(p)$: $E(X) = 1/p$, $\mathrm{Var}(X) = (1-p)/p^2$.

**(b)** $P(X \text{ is even}) = P(X = 2) + P(X = 4) + P(X = 6) + \cdots$

$$= qp + q^3p + q^5p + \cdots = qp(1 + q^2 + q^4 + \cdots) = qp \cdot \frac{1}{1 - q^2} = \frac{qp}{(1-q)(1+q)} = \frac{q}{1+q}$$

</details>

### Question 13

**Prove that** if $X_1, X_2, \ldots, X_n$ are independent with $X_i \sim \mathrm{Po}(\lambda_i)$, then $S = \sum X_i \sim \mathrm{Po}\!\left(\sum \lambda_i\right)$.

<details>
<summary>Solution</summary>

The probability generating function of $X_i \sim \mathrm{Po}(\lambda_i)$ is $G_{X_i}(t) = e^{\lambda_i(t-1)}$.

For independent random variables, the PGF of the sum is the product:

$$G_S(t) = \prod_{i=1}^{n}e^{\lambda_i(t-1)} = e^{(t-1)\sum\lambda_i}$$

This is the PGF of $\mathrm{Po}\!\left(\sum\lambda_i\right)$. Therefore $S \sim \mathrm{Po}\!\left(\sum\lambda_i\right)$. $\blacksquare$

</details>

### Question 14

A typist makes on average 2 errors per page. Find the probability that a particular page has:
**(a)** No errors.
**(b)** At most 3 errors.
**(c)** Exactly 2 errors given that it has at most 3 errors.

<details>
<summary>Solution</summary>

$X \sim \mathrm{Po}(2)$.

**(a)** $P(X = 0) = e^{-2} \approx 0.1353$.

**(b)** $P(X \leq 3) = e^{-2}(1 + 2 + 2 + 4/3) = e^{-2} \cdot 19/3 \approx 0.8571$.

**(c)** $P(X = 2 \mid X \leq 3) = \dfrac◆LB◆P(X = 2)◆RB◆◆LB◆P(X \leq 3)◆RB◆ = \dfrac{2e^{-2}}{19e^{-2}/3} = \dfrac{6}{19} \approx 0.3158$.

</details>

### Question 15

The number of radioactive decays per second from a sample is modelled by $X \sim \mathrm{Po}(\lambda)$. Over 50 seconds, 145 decays are observed.

**(a)** Estimate $\lambda$.

**(b)** Using your estimate, find the probability of observing exactly 3 decays in a 1-second interval.

<details>
<summary>Solution</summary>

**(a)** $\hat{\lambda} = 145/50 = 2.9$ per second.

**(b)** $P(X = 3) = \dfrac{e^{-2.9}(2.9)^3}{6} = \dfrac◆LB◆24.389 \cdot e^{-2.9}◆RB◆◆LB◆6◆RB◆ \approx 0.2227$.

</details>

:::

---

## 8. Advanced Worked Examples

### Example 8.1: Poisson as a limit of the binomial

**Problem.** A factory produces items with a defect rate of 0.002. In a batch of 1000, find the probability of exactly 3 defects using (a) the binomial distribution and (b) the Poisson approximation.

**Solution.** (a) $X \sim B(1000, 0.002)$: $P(X=3) = \binom{1000}{3}(0.002)^3(0.998)^{997} \approx 0.1814$.

(b) $\lambda = np = 2$. $X \approx \mathrm{Po}(2)$: $P(X=3) = \dfrac◆LB◆e^{-2} \cdot 8◆RB◆◆LB◆6◆RB◆ \approx 0.1804$.

The approximation is excellent (error $< 0.6\%$).

### Example 8.2: Sum of independent Poisson random variables

**Problem.** Emails arrive at a rate of 5 per hour and texts at 3 per hour. Find the probability that the total number of messages in a 2-hour period exceeds 20.

**Solution.** In 2 hours: emails $\sim \mathrm{Po}(10)$, texts $\sim \mathrm{Po}(6)$.

Total messages $= \mathrm{Po}(10+6) = \mathrm{Po}(16)$.

$$P(X > 20) = 1 - P(X \leq 20) = 1 - \sum_{k=0}^{20} \frac◆LB◆e^{-16} \cdot 16^k◆RB◆◆LB◆k!◆RB◆ \approx 1 - 0.8688 = \boxed{0.131}$$

### Example 8.3: Conditional probability with the geometric distribution

**Problem.** $X \sim \mathrm{Geo}(0.3)$. Find $P(X > 4 \mid X > 2)$.

**Solution.** The geometric distribution has the memoryless property:

$$P(X > 4 \mid X > 2) = P(X > 2) = (1-0.3)^2 = 0.49$$

Verification: $P(X > 4) = 0.7^4 = 0.2401$, $P(X > 2) = 0.49$. $P(X>4 \mid X>2) = \dfrac{0.2401}{0.49} = 0.49$. ✓

### Example 8.4: Poisson hypothesis testing

**Problem.** A call centre claims an average of 6 calls per minute. In a 10-minute period, 72 calls are received. Test at the 5% level whether the rate has increased.

**Solution.** $H_0$: $\lambda = 6$ per minute. $H_1$: $\lambda > 6$.

Under $H_0$, total calls in 10 minutes $\sim \mathrm{Po}(60)$.

For large $\lambda$, approximate with $N(60, 60)$.

$$P(X \geq 72) \approx P\!\left(Z \geq \frac◆LB◆71.5 - 60◆RB◆◆LB◆\sqrt{60}◆RB◆\right) = P(Z \geq 1.485) = 1 - 0.9311 = 0.069$$

(using continuity correction).

$0.069 > 0.05$: **do not reject** $H_0$. Insufficient evidence that the rate has increased.

### Example 8.5: Mode of the Poisson distribution

**Problem.** Find the mode of the Poisson distribution with parameter $\lambda$.

**Solution.** The mode $m$ satisfies $P(X = m) \geq P(X = m-1)$ and $P(X = m) \geq P(X = m+1)$.

$$\frac◆LB◆e^{-\lambda}\lambda^m◆RB◆◆LB◆m!◆RB◆ \geq \frac◆LB◆e^{-\lambda}\lambda^{m-1}◆RB◆◆LB◆(m-1)!◆RB◆ \implies \frac◆LB◆\lambda◆RB◆◆LB◆m◆RB◆ \geq 1 \implies m \leq \lambda$$

$$\frac◆LB◆e^{-\lambda}\lambda^m◆RB◆◆LB◆m!◆RB◆ \geq \frac◆LB◆e^{-\lambda}\lambda^{m+1}◆RB◆◆LB◆(m+1)!◆RB◆ \implies \frac◆LB◆m+1◆RB◆◆LB◆\lambda◆RB◆ \geq 1 \implies m \geq \lambda - 1$$

So $\lambda - 1 \leq m \leq \lambda$, meaning the mode is $\lfloor\lambda\rfloor$ (and also $\lambda$ if $\lambda$ is an integer).

### Example 8.6: Relationship between Poisson and exponential

**Problem.** Events occur according to a Poisson process with rate $\lambda = 4$ per hour. Find the probability that the time between two consecutive events exceeds 30 minutes.

**Solution.** For a Poisson process with rate $\lambda$, the inter-arrival time $T \sim \mathrm{Exp}(\lambda)$.

$$P(T > 0.5) = e^{-4 \times 0.5} = e^{-2} \approx \boxed{0.135}$$

### Example 8.7: Variance of the geometric distribution

**Problem.** Derive $\mathrm{Var}(X)$ for $X \sim \mathrm{Geo}(p)$, defined as the number of trials until the first success.

**Solution.** $E(X) = \dfrac{1}{p}$. Using $\mathrm{Var}(X) = E(X^2) - [E(X)]^2$:

$E(X^2) = \displaystyle\sum_{k=1}^{\infty} k^2 p(1-p)^{k-1}$.

Using the identity $\displaystyle\sum_{k=1}^{\infty} k^2 r^{k-1} = \frac{1+r}{(1-r)^3}$ with $r = 1-p$:

$$E(X^2) = \frac{p(2-p)}{p^3} = \frac{2-p}{p^2}$$

$$\mathrm{Var}(X) = \frac{2-p}{p^2} - \frac{1}{p^2} = \boxed{\frac{1-p}{p^2}}$$

---

## 9. Common Pitfalls

| Pitfall | Correct Approach |
|---|---|
| Confusing the two definitions of the geometric distribution | "Number of trials until first success": $E(X) = 1/p$; "Number of failures before first success": $E(X) = (1-p)/p$ |
| Using the Poisson approximation when $np > 10$ or $n < 20$ | The Poisson approximation requires $n$ large and $p$ small, with $np$ moderate |
| Forgetting that Poisson probabilities sum to 1 only over all $k$ from 0 to $\infty$ | Never truncate without adjusting |
| Applying the Poisson to events that are not independent | The Poisson process requires independent events at a constant average rate |

---

## 10. Additional Exam-Style Questions

### Question 8

A typist makes an average of 2 errors per page. Find the probability that a 3-page document contains exactly 5 errors.

<details>
<summary>Solution</summary>

Total errors $\sim \mathrm{Po}(6)$.

$$P(X = 5) = \frac◆LB◆e^{-6} \cdot 6^5◆RB◆◆LB◆120◆RB◆ = \frac◆LB◆7776 \cdot e^{-6}◆RB◆◆LB◆120◆RB◆ \approx \boxed{0.1606}$$

</details>

### Question 9

**Prove that** for $X \sim \mathrm{Po}(\lambda)$, $E(X) = \lambda$.

<details>
<summary>Solution</summary>

$$E(X) = \sum_{k=0}^{\infty} k \cdot \frac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆k!◆RB◆ = \sum_{k=1}^{\infty} \frac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆(k-1)!◆RB◆$$

Let $j = k-1$:

$$= \lambda e^{-\lambda} \sum_{j=0}^{\infty} \frac◆LB◆\lambda^j◆RB◆◆LB◆j!◆RB◆ = \lambda e^{-\lambda} \cdot e^{\lambda} = \lambda$$

$\blacksquare$

</details>

### Question 10

$X \sim \mathrm{Geo}(0.25)$. Find $P(X \leq 5)$ and $P(X > 3)$.

<details>
<summary>Solution</summary>

$P(X \leq 5) = 1 - P(X > 5) = 1 - (1-0.25)^5 = 1 - 0.75^5 = 1 - 0.2373 = \boxed{0.7627}$.

$P(X > 3) = 0.75^3 = \boxed{0.4219}$.

</details>

---

## 11. Connections to Other Topics

### 11.1 Poisson process and exponential distribution

The inter-arrival times of a Poisson process follow the exponential distribution. If events occur at rate $\lambda$ per unit time, the time between consecutive events is $\mathrm{Exp}(\lambda)$. See [Exponential and Continuous Random Variables](/docs/docs_alevel/further-maths/further-statistics/02-exponential-and-continuous-random-variables).

### 11.2 Poisson and binomial

The Poisson distribution approximates the binomial when $n$ is large and $p$ is small, with $\lambda = np$.

### 11.3 Poisson and chi-squared tests

The chi-squared goodness-of-fit test is used to test whether data follows a Poisson or geometric distribution. See [Chi-Squared Tests](/docs/docs_alevel/further-maths/further-statistics/03-chi-squared-tests).

---

## 12. Key Results Summary

| Distribution | PMF | $E(X)$ | $\mathrm{Var}(X)$ |
|---|---|---|---|
| $\mathrm{Po}(\lambda)$ | $P(X=x) = \dfrac◆LB◆e^{-\lambda}\lambda^x◆RB◆◆LB◆x!◆RB◆$ | $\lambda$ | $\lambda$ |
| $\mathrm{Geo}(p)$ (trials) | $P(X=x) = p(1-p)^{x-1}$ | $\dfrac{1}{p}$ | $\dfrac{1-p}{p^2}$ |
| $\mathrm{Geo}(p)$ (failures) | $P(X=x) = p(1-p)^x$ | $\dfrac{1-p}{p}$ | $\dfrac{1-p}{p^2}$ |

| Property | Poisson | Geometric |
|---|---|---|
| Memoryless | No | Yes |
| Additive: $X_1+X_2$ | $\mathrm{Po}(\lambda_1+\lambda_2)$ if independent | Not simple |
| PMF tail behaviour | Decays faster than geometric | Slower decay |

---

## 13. Further Exam-Style Questions

### Question 11

A shop receives customers at a rate of 8 per hour. Find the probability that:
(a) exactly 5 customers arrive in a 30-minute period;
(b) more than 10 customers arrive in an hour;
(c) the time between two consecutive arrivals exceeds 20 minutes.

<details>
<summary>Solution</summary>

**(a)** $\lambda = 8 \times 0.5 = 4$. $P(X=5) = \dfrac◆LB◆e^{-4} \cdot 1024◆RB◆◆LB◆120◆RB◆ \approx \boxed{0.1563}$.

**(b)** $\lambda = 8$. $P(X > 10) = 1 - P(X \leq 10) = 1 - \sum_{k=0}^{10}\dfrac◆LB◆e^{-8} \cdot 8^k◆RB◆◆LB◆k!◆RB◆ \approx 1 - 0.8159 = \boxed{0.184}$.

**(c)** Inter-arrival time $T \sim \mathrm{Exp}(8)$. $P(T > 1/3) = e^{-8/3} \approx \boxed{0.0695}$.

</details>

### Question 12

**Prove that** for $X \sim \mathrm{Po}(\lambda)$, $\mathrm{Var}(X) = \lambda$.

<details>
<summary>Solution</summary>

$E(X^2) = \displaystyle\sum_{k=0}^{\infty} k^2 \cdot \frac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆k!◆RB◆ = \sum_{k=1}^{\infty} k \cdot \frac◆LB◆e^{-\lambda}\lambda^k◆RB◆◆LB◆(k-1)!◆RB◆ = \lambda e^{-\lambda}\sum_{j=0}^{\infty}(j+1)\frac◆LB◆\lambda^j◆RB◆◆LB◆j!◆RB◆$

$= \lambda e^{-\lambda}\!\left(\sum_{j=0}^{\infty} j\frac◆LB◆\lambda^j◆RB◆◆LB◆j!◆RB◆ + \sum_{j=0}^{\infty}\frac◆LB◆\lambda^j◆RB◆◆LB◆j!◆RB◆\right) = \lambda e^{-\lambda}(\lambda e^{\lambda} + e^{\lambda}) = \lambda(\lambda+1) = \lambda^2+\lambda$.

$\mathrm{Var}(X) = E(X^2)-[E(X)]^2 = \lambda^2+\lambda-\lambda^2 = \boxed{\lambda}$. $\blacksquare$

</details>

---

## 14. Advanced Topics

### 14.1 Compound Poisson process

If events of type $A$ occur at rate $\lambda_A$ and type $B$ at rate $\lambda_B$, independently, then the total event process is Poisson with rate $\lambda_A + \lambda_B$.

### 14.2 Poisson distribution and the Poisson point process

A Poisson point process in 2D with rate $\lambda$ per unit area has the property that the number of points in a region of area $A$ follows $\mathrm{Po}(\lambda A)$.

### 14.3 The geometric distribution as a special case of the negative binomial

The negative binomial distribution counts the number of trials until $r$ successes. The geometric distribution is the case $r = 1$.

$\mathrm{NegBin}(r, p)$: $P(X = n) = \binom{n-1}{r-1}p^r(1-p)^{n-r}$ for $n = r, r+1, \ldots$

### 14.4 Relationship to exponential families

Both the Poisson and geometric distributions belong to the exponential family of distributions, which have PDF/PMF of the form $f(x;\theta) = h(x)\exp(\eta(\theta)T(x) - A(\theta))$.

---

## 15. Further Exam-Style Questions

### Question 13

A radioactive source emits particles at a rate of 12 per minute. Find the probability that in a 2-minute period, the number of particles emitted is between 20 and 30 (inclusive).

<details>
<summary>Solution</summary>

$\lambda = 24$ per 2 minutes. $X \sim \mathrm{Po}(24)$.

$P(20 \leq X \leq 30) = P(X \leq 30) - P(X \leq 19)$.

Using the normal approximation: $X \approx N(24, 24)$.

$P(19.5 < X < 30.5) \approx P\!\left(\dfrac◆LB◆19.5-24◆RB◆◆LB◆\sqrt{24}◆RB◆ < Z < \dfrac◆LB◆30.5-24◆RB◆◆LB◆\sqrt{24}◆RB◆\right)$

$= P(-0.919 < Z < 1.327) = \Phi(1.327) - \Phi(-0.919) = 0.908 - 0.179 = \boxed{0.729}$

</details>

### Question 14

**Prove that** if $X$ and $Y$ are independent with $X \sim \mathrm{Geo}(p)$ and $Y \sim \mathrm{Geo}(p)$, then $\min(X,Y) \sim \mathrm{Geo}(1-(1-p)^2)$.

<details>
<summary>Solution</summary>

$P(\min(X,Y) > n) = P(X > n)P(Y > n) = (1-p)^n \cdot (1-p)^n = (1-p)^{2n}$.

$P(\min(X,Y) = n) = P(\min > n-1) - P(\min > n) = (1-p)^{2(n-1)} - (1-p)^{2n} = (1-p)^{2n-2}[1-(1-p)^2]$.

This is $\mathrm{Geo}(1-(1-p)^2)$ with success probability $q = 1-(1-p)^2$. $\blacksquare$

</details>

---

## 16. Further Advanced Topics

### 16.1 The Poisson process — formal definition

A Poisson process with rate $\lambda$ is a counting process $N(t)$ satisfying:
1. $N(0) = 0$
2. Independent increments
3. $N(t+s) - N(s) \sim \mathrm{Po}(\lambda t)$ for all $s, t \geq 0$

### 16.2 Conditional distributions

For $X \sim \mathrm{Po}(\lambda_1)$ and $Y \sim \mathrm{Po}(\lambda_2)$, independent:

$$P(X = k \mid X + Y = n) = \binom{n}{k}\!\left(\frac◆LB◆\lambda_1◆RB◆◆LB◆\lambda_1+\lambda_2◆RB◆\right)^k\left(\frac◆LB◆\lambda_2◆RB◆◆LB◆\lambda_1+\lambda_2◆RB◆\right)^{n-k}$$

This is $\mathrm{Bin}(n, \lambda_1/(\lambda_1+\lambda_2))$ — the conditional distribution is binomial!

### 16.3 The negative binomial distribution

The number of trials until the $r$-th success follows $\mathrm{NegBin}(r, p)$:

$$P(X = n) = \binom{n-1}{r-1}p^r(1-p)^{n-r} \quad \text{for } n = r, r+1, \ldots$$

$E(X) = \dfrac{r}{p}$, $\mathrm{Var}(X) = \dfrac{r(1-p)}{p^2}$.

The geometric distribution is $\mathrm{NegBin}(1, p)$.

### 16.4 Poisson goodness-of-fit

To test whether data follows $\mathrm{Po}(\lambda)$:
1. Estimate $\hat{\lambda} = \bar{x}$
2. Calculate expected frequencies using $\hat{\lambda}$
3. Apply the chi-squared test

---

## 17. Further Exam-Style Questions

### Question 15

Calls arrive at rate 3 per hour. Find the probability that the third call arrives before time $t = 1$ hour.

<details>
<summary>Solution</summary>

The time of the 3rd call is $\mathrm{Gamma}(3, 3)$ (sum of 3 independent $\mathrm{Exp}(3)$ variables).

$P(T_3 < 1) = P(\text{at least 3 calls in 1 hour}) = \sum_{k=3}^{\infty}\dfrac{e^{-3}3^k}{k!}$

$= 1 - P(X \leq 2) = 1 - e^{-3}\!\left(1 + 3 + \dfrac{9}{2}\right) = 1 - e^{-3}\cdot 8.5$

$\approx 1 - 0.4232 \approx \boxed{0.577}$.

</details>

### Question 16

**Prove that** for $X \sim \mathrm{Geo}(p)$, the moment generating function is $M_X(t) = \dfrac{pe^t}{1-(1-p)e^t}$ for $t < -\ln(1-p)$.

<details>
<summary>Solution</summary>

$M_X(t) = \displaystyle\sum_{n=1}^{\infty} e^{tn} p(1-p)^{n-1} = \frac{p}{1-p}\sum_{n=1}^{\infty} [(1-p)e^t]^n$

$= \frac{p}{1-p} \cdot \frac{(1-p)e^t}{1-(1-p)e^t} = \frac{pe^t}{1-(1-p)e^t}$.

This converges when $|(1-p)e^t| < 1$, i.e., $t < -\ln(1-p)$. $\blacksquare$

</details>
