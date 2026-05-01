---
title: Hypothesis Testing (Extended)
description:
  "A-Level Mathematics notes on Hypothesis Testing (Extended): Hypothesis Testing (Extended Treatment); 1. The Hypothesis Testing Framework."
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: hypothesis-testing-extended
---

## Hypothesis Testing (Extended Treatment)

This document provides a rigorous treatment of hypothesis testing methodology, including null and
alternative hypotheses, significance levels, Type I and II errors, one-tailed and two-tailed tests,
and critical regions.

:::info
Hypothesis testing is a formal procedure for making decisions about population parameters based on
sample evidence. It provides a principled framework for quantifying uncertainty.
:::

<hr />

## 1. The Hypothesis Testing Framework

### 1.1 Null and alternative hypotheses

The **null hypothesis** $H_0$ is the default assumption -- typically a statement of "no effect" or
"no difference." It is assumed to be true unless the evidence is sufficiently compelling to reject
it.

The **alternative hypothesis** $H_1$ specifies what we believe might be true instead. It is only
accepted if the evidence against $H_0$ is strong enough.

### 1.2 Test statistic

A **test statistic** is a function of the sample data whose distribution is known under $H_0$.
Common test statistics include sample proportions, sample means, and sample correlation
coefficients.

### 1.3 Significance level

The **significance level** $\alpha$ is the maximum probability of rejecting $H_0$ when it is
actually true. Common values are $\alpha = 0.05$ (5%), $\alpha = 0.01$ (1%), and $\alpha = 0.10$
(10%).

### 1.4 The decision rule

1. Assume $H_0$ is true.
2. Calculate the probability of obtaining a test statistic at least as extreme as the observed
   value, assuming $H_0$.
3. If this probability (the **$p$-value**) is less than $\alpha$, reject $H_0$. Otherwise, do not
   reject $H_0$.

### 1.5 Critical value approach

Alternatively, find the **critical value** $c$ such that $P(\mathrm{test\ statistic} \geq c \mid H_0) = \alpha$
(for an upper-tailed test). If the observed test statistic exceeds $c$, reject $H_0$.

### 1.6 Interpreting the conclusion

- "Reject $H_0$": there is sufficient evidence at the $\alpha$ significance level to support $H_1$.
- "Do not reject $H_0$": there is **insufficient** evidence to reject $H_0$. This does **not** mean
  $H_0$ is true.

:::warning Common Pitfall
"Accepting $H_0$" is not the same as "not rejecting $H_0$." We never prove $H_0$; we merely fail
to find sufficient evidence against it. The conclusion should always be stated carefully.
:::

<hr />

## 2. Type I and Type II Errors

### 2.1 Definitions

| Decision       | $H_0$ true         | $H_0$ false        |
| -------------- | ------------------ | ------------------ |
| Reject $H_0$   | Type I error       | Correct decision   |
| Do not reject  | Correct decision   | Type II error      |

**Type I error:** Rejecting $H_0$ when it is true (false positive).

$$P(\mathrm{Type\ I}) = \alpha$$

**Type II error:** Failing to reject $H_0$ when it is false (false negative).

$$P(\mathrm{Type\ II}) = \beta$$

### 2.2 The power of a test

The **power** of a test is the probability of correctly rejecting $H_0$ when it is false:

$$\mathrm{Power} = 1 - \beta$$

The power depends on:
- The significance level $\alpha$ (increasing $\alpha$ increases power).
- The sample size $n$ (increasing $n$ increases power).
- The true value of the parameter (the further from $H_0$, the greater the power).

### 2.3 Worked example

**Problem.** A machine produces bolts with mean length $50\;\mathrm{mm}$. The standard deviation is
$0.5\;\mathrm{mm}$. A sample of 16 bolts has mean $50.18\;\mathrm{mm}$. Test at the 5% significance
level whether the mean length has changed.

$H_0: \mu = 50$, $H_1: \mu \neq 50$ (two-tailed).

Under $H_0$: $\bar{X} \sim N(50, 0.5^2/16) = N(50, 0.015625)$.

Critical values: $\bar{x}$ such that $P(|\bar{X} - 50| \geq c) = 0.05$.

$z = \pm 1.96$ for a two-tailed 5% test.

$c = 50 \pm 1.96 \times 0.125 = 50 \pm 0.245$

Critical region: $\bar{X} \lt 49.755$ or $\bar{X} \gt 50.245$.

Test statistic: $z = \dfrac{50.18 - 50}{0.125} = 1.44$.

Since $1.44 \lt 1.96$, we do **not** reject $H_0$. There is insufficient evidence at the 5% level
to conclude that the mean length has changed.

### 2.4 Finding the probability of Type II error

Continuing the example above, suppose the true mean is $\mu = 50.2$.

$\beta = P(\mathrm{do\ not\ reject}\ H_0 \mid \mu = 50.2)$

$= P(49.755 \lt \bar{X} \lt 50.245 \mid \bar{X} \sim N(50.2, 0.015625))$

$= P\!\left(\dfrac{49.755 - 50.2}{0.125} \lt Z \lt \dfrac{50.245 - 50.2}{0.125}\right) = P(-3.56 \lt Z \lt 0.36)$

$= \Phi(0.36) - \Phi(-3.56) \approx 0.6406 - 0.0002 = 0.6404$

Power $= 1 - 0.6404 = 0.3596$.

<hr />

## 3. One-Tailed and Two-Tailed Tests

### 3.1 One-tailed tests

A **one-tailed test** is used when $H_1$ specifies a direction:

- $H_1: \mu \gt \mu_0$ (upper-tailed): critical region in the upper tail.
- $H_1: \mu \lt \mu_0$ (lower-tailed): critical region in the lower tail.

The entire significance level $\alpha$ is in one tail, making it easier to detect an effect in the
specified direction.

### 3.2 Two-tailed tests

A **two-tailed test** is used when $H_1$ does not specify a direction:

- $H_1: \mu \neq \mu_0$: critical region split between both tails, with $\alpha/2$ in each.

### 3.3 Choosing one-tailed vs two-tailed

- Use a **two-tailed test** unless there is a strong prior reason to expect a specific direction.
- A one-tailed test has greater power in the specified direction but cannot detect effects in the
  opposite direction.
- The choice must be made **before** examining the data.

### 3.4 Critical values table

For a standard normal test at significance level $\alpha$:

| Test type    | $\alpha = 0.10$ | $\alpha = 0.05$ | $\alpha = 0.01$ |
| ------------ | --------------- | --------------- | --------------- |
| Two-tailed   | $\pm 1.645$     | $\pm 1.960$     | $\pm 2.576$     |
| Upper-tailed | $1.282$         | $1.645$         | $2.326$         |
| Lower-tailed | $-1.282$        | $-1.645$        | $-2.326$        |

<hr />

## 4. Hypothesis Tests for the Binomial Proportion

### 4.1 Setting up the test

To test whether a population proportion $p$ equals a specified value $p_0$:

$$H_0: p = p_0, \qquad H_1: p \neq p_0\ (\mathrm{or}\ p \gt p_0\ \mathrm{or}\ p \lt p_0)$$

Under $H_0$, if $X$ is the number of successes in $n$ trials, then $X \sim B(n, p_0)$.

### 4.2 Worked example: binomial test

**Problem.** A coin is tossed 20 times and lands heads 15 times. Test at the 5% significance level
whether the coin is biased.

$H_0: p = 0.5$, $H_1: p \neq 0.5$ (two-tailed).

Under $H_0$: $X \sim B(20, 0.5)$.

For a two-tailed test at 5%, we need the critical region in each tail to have probability
$\leq 0.025$.

**Lower tail:** $P(X \leq k) \leq 0.025$.

$P(X \leq 5) = 0.0207 \leq 0.025$. So $k = 5$ (critical region: $X \leq 5$).

**Upper tail:** $P(X \geq k) \leq 0.025$.

$P(X \geq 15) = P(X \leq 5) = 0.0207 \leq 0.025$. So $k = 15$ (critical region: $X \geq 15$).

Since $X = 15$ falls in the critical region, we **reject** $H_0$. There is sufficient evidence at
the 5% level to conclude the coin is biased.

### 4.3 Finding the actual significance level

The actual significance level is the probability of being in the critical region under $H_0$:

$$\alpha_{\mathrm{actual}} = P(X \leq 5) + P(X \geq 15) = 2(0.0207) = 0.0414$$

This is approximately 4.14%, which is the closest we can get to 5% with a discrete distribution.

:::warning Common Pitfall
For discrete distributions, the actual significance level may differ from the nominal level. The
critical region is chosen so that $P(\mathrm{critical\ region} \mid H_0)$ does not exceed $\alpha$,
and is as close as possible to $\alpha$.
:::

<hr />

## 5. Critical Regions

### 5.1 Definition

The **critical region** (or rejection region) is the set of values of the test statistic that lead
to rejection of $H_0$. The **acceptance region** is its complement.

### 5.2 Finding the critical region

**Procedure:**

1. Identify the distribution of the test statistic under $H_0$.
2. Determine whether the test is one-tailed or two-tailed.
3. Find the smallest region containing the most extreme values whose total probability under $H_0$
   does not exceed $\alpha$.

### 5.3 Worked example: Poisson critical region

**Problem.** A receptionist receives on average 2 calls per 5 minutes. Over a 5-minute period, she
receives 7 calls. Test at the 5% level whether the rate has increased.

$H_0: \lambda = 2$, $H_1: \lambda \gt 2$ (upper-tailed).

Under $H_0$: $X \sim \mathrm{Po}(2)$.

Critical region: smallest $k$ such that $P(X \geq k) \leq 0.05$.

$P(X \geq 5) = 1 - P(X \leq 4) = 1 - e^{-2}\!\left(1 + 2 + 2 + \frac{4}{3} + \frac{2}{3}\right) = 1 - e^{-2} \times 7.667 = 1 - 0.9473 = 0.0527$

$P(X \geq 6) = 1 - P(X \leq 5) = 1 - 0.9835 = 0.0165 \leq 0.05$

Critical region: $X \geq 6$. Actual significance level: $1.65\%$.

Since $X = 7 \geq 6$, we **reject** $H_0$. There is sufficient evidence that the call rate has
increased.

### 5.4 Worked example: normal critical region

**Problem.** The masses of packets of biscuits are normally distributed with standard deviation
$3\;\mathrm{g}$. A sample of 10 packets has mean mass $248\;\mathrm{g}$. Find the critical region
for testing whether the mean mass is less than $250\;\mathrm{g}$ at the 1% significance level.

$H_0: \mu = 250$, $H_1: \mu \lt 250$.

Under $H_0$: $\bar{X} \sim N(250, 3^2/10) = N(250, 0.9)$.

$P(\bar{X} \lt c) = 0.01 \implies \dfrac{c - 250}{\sqrt{0.9}} = -2.326$

$c = 250 - 2.326\sqrt{0.9} = 250 - 2.208 = 247.79$

Critical region: $\bar{X} \lt 247.79$.

Since $\bar{x} = 248 \gt 247.79$, we do **not** reject $H_0$ at the 1% level.

<hr />

## 6. Practice Problems

### Problem 1

A die is rolled 30 times and a six appears 9 times. Test at the 5% significance level whether the
die is biased towards showing a six.

<details>
<summary>Solution</summary>

$H_0: p = 1/6$, $H_1: p \gt 1/6$ (upper-tailed).

$X \sim B(30, 1/6)$.

Find smallest $k$: $P(X \geq k) \leq 0.05$.

$P(X \geq 9) = 1 - P(X \leq 8)$.

$P(X \leq 8) = \displaystyle\sum_{r=0}^{8}\binom{30}{r}(1/6)^r(5/6)^{30-r} \approx 0.9502$.

$P(X \geq 9) \approx 0.0498 \leq 0.05$.

Since $X = 9$ is in the critical region, reject $H_0$. Sufficient evidence the die is biased
towards six.

</details>

### Problem 2

A manufacturer claims that the mean lifetime of a component is 500 hours. A sample of 25 components
has mean lifetime 490 hours with standard deviation 15 hours. Test the claim at the 5% significance
level.

<details>
<summary>Solution</summary>

$H_0: \mu = 500$, $H_1: \mu \neq 500$ (two-tailed).

$\bar{X} \sim N(500, 15^2/25) = N(500, 9)$ approximately.

$z = \dfrac{490 - 500}{3} = -3.33$.

Critical values: $\pm 1.96$.

Since $|-3.33| = 3.33 \gt 1.96$, reject $H_0$. Sufficient evidence the mean lifetime differs from
500 hours.

</details>

### Problem 3

The number of accidents per week at a factory is thought to follow a Poisson distribution with mean
3. In a particular week, 8 accidents occur. Test at the 5% level whether the accident rate has
increased.

<details>
<summary>Solution</summary>

$H_0: \lambda = 3$, $H_1: \lambda \gt 3$.

$X \sim \mathrm{Po}(3)$.

$P(X \geq 7) = 1 - P(X \leq 6) \approx 1 - 0.9665 = 0.0335 \leq 0.05$.

$P(X \geq 6) = 1 - P(X \leq 5) \approx 1 - 0.9161 = 0.0839 \gt 0.05$.

Critical region: $X \geq 7$. Since $X = 8 \geq 7$, reject $H_0$. Sufficient evidence the rate
has increased.

</details>

### Problem 4

In a hypothesis test with $H_0: p = 0.4$ and $H_1: p \gt 0.4$ based on a sample of size 20,
find: (a) the critical region at the 5% level; (b) the actual significance level; (c) the
probability of a Type II error if the true $p = 0.6$.

<details>
<summary>Solution</summary>

Under $H_0$: $X \sim B(20, 0.4)$.

(a) $P(X \geq 11) = 1 - P(X \leq 10) \approx 1 - 0.9435 = 0.0565 \gt 0.05$.

$P(X \geq 12) = 1 - P(X \leq 11) \approx 1 - 0.9790 = 0.0210 \leq 0.05$.

Critical region: $X \geq 12$.

(b) Actual significance level $\approx 2.10\%$.

(c) Under $p = 0.6$: $X \sim B(20, 0.6)$.

$\beta = P(X \leq 11 \mid p = 0.6) \approx 0.4044$.

</details>
