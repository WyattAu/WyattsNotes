---
title: Hypothesis Testing
description:
  "A-Level Mathematics notes on Hypothesis Testing: Board Coverage; 1. Hypotheses; 1.1 Null and alternative hypotheses; 1.2 One-tailed and two-tailed tests."
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: hypothesis-testing
---

## Board Coverage

| Board      | Paper      | Notes                                    |
| ---------- | ---------- | ---------------------------------------- |
| AQA        | Paper 1, 2 | Binomial tests in P1; normal tests in P2 |
| Edexcel    | P1, P2     | Similar                                  |
| OCR (A)    | Paper 1, 2 | Includes critical regions                |
| CIE (9709) | P1, P6     | Basic hypothesis testing in P6           |

:::info Hypothesis testing requires clear, structured answers. Always state your hypotheses, test
statistic, critical value/region, comparison, and conclusion in context.
:::

<hr />

## 1. Hypotheses

### 1.1 Null and alternative hypotheses

**Definition.**

- The **null hypothesis** $H_0$ is the default assumption (usually "no effect" or "no change").
- The **alternative hypothesis** $H_1$ is what we are trying to find evidence for.

### 1.2 One-tailed and two-tailed tests

- **One-tailed:** $H_1: p \gt{} p_0$ (right-tailed) or $H_1: p \lt{} p_0$ (left-tailed).
- **Two-tailed:** $H_1: p \neq p_0$.

The choice depends on the research question. Use a one-tailed test only when you have a specific
directional prediction **before** seeing the data.

:::warning Choosing a one-tailed test after seeing the data (because the results happen to go in one
direction) is a form of $p$-hacking and is statistically invalid. The tail direction must be decided
before the experiment.
:::

<hr />

## 2. Critical Values and Significance Levels

### 2.1 Significance level

**Definition.** The **significance level** $\alpha$ is the maximum probability of incorrectly
rejecting $H_0$ when it is true. Common values: 1%, 5%, 10%.

### 2.2 Critical value

The **critical value** is the boundary between the acceptance and rejection regions.

### 2.3 Critical region

The **critical region** (rejection region) is the set of values of the test statistic that lead to
rejection of $H_0$.

### 2.4 Actual significance level

For discrete distributions, the actual significance level may differ from the nominal level $\alpha$
because we cannot achieve exactly $\alpha$.

**Example.** For $X \sim B(15, 0.5)$, a right-tailed test at $\alpha = 0.05$:

$P(X \geq 12) = 1 - P(X \leq 11)$. We find the smallest $c$ such that $P(X \geq c) \leq 0.05$.

$P(X \geq 12) \approx 0.0176$, $P(X \geq 11) \approx 0.0592$.

Critical region: $X \geq 12$. Actual significance level: 1.76%.

<hr />

## 3. Type I and Type II Errors

### 3.1 Definitions

**Definition.**

- **Type I error:** Rejecting $H_0$ when $H_0$ is true (false positive).
  $$P(\mathrm{Type I}) = \alpha \mathrm{ (the significance level)}$$

- **Type II error:** Failing to reject $H_0$ when $H_0$ is false (false negative).
  $$P(\mathrm{Type II}) = \beta$$

- The **power** of a test is $1 - \beta = P(\mathrm{reject } H_0 \mid H_0 \mathrm{ is false})$.

### 3.2 Relationship

Decreasing $\alpha$ (making the test stricter) generally **increases** $\beta$ (more false
negatives). There is always a trade-off between Type I and Type II errors.

**Intuition.** Think of a courtroom: a Type I error is convicting an innocent person; a Type II
error is acquitting a guilty person. Making the standard of proof higher (beyond reasonable doubt)
reduces Type I errors but increases Type II errors. You cannot eliminate both simultaneously.

<hr />

## 4. Hypothesis Testing Procedure

### 4.1 Standard method

1. **Define** the random variable and its distribution under $H_0$.
2. **State** $H_0$ and $H_1$.
3. **State** the significance level $\alpha$.
4. **Calculate** the critical region (or critical value).
5. **Determine** the test statistic from the data.
6. **Compare** the test statistic to the critical value.
7. **Conclude** in context.

### 4.2 Using $p$-values

Alternatively: 1–3. Same as above. 4. Calculate the **$p$-value**: the probability of obtaining a
result at least as extreme as the observed value, assuming $H_0$ is true. 5. If $p$-value
$\lt{} \alpha$, reject $H_0$. Otherwise, do not reject $H_0$. 6. Conclude in context.

<hr />

## 5. Binomial Hypothesis Tests

### 5.1 Single proportion test

**Example.** A coin is tossed 20 times and lands heads 15 times. Test at the 5% significance level
whether the coin is biased towards heads.

$X \sim B(20, p)$.

$H_0: p = 0.5$, $H_1: p \gt{} 0.5$. One-tailed, $\alpha = 0.05$.

Under $H_0$: $X \sim B(20, 0.5)$.

Find $c$ such that $P(X \geq c) \leq 0.05$.

$P(X \geq 14) = 1 - P(X \leq 13) \approx 0.0577 \gt{} 0.05$.
$P(X \geq 15) = 1 - P(X \leq 14) \approx 0.0207 \lt{} 0.05$.

Critical region: $X \geq 15$. Since $X = 15$ is in the critical region, we **reject** $H_0$.

There is sufficient evidence at the 5% level that the coin is biased towards heads.

<hr />

## 6. Normal Hypothesis Tests

### 6.1 Test for a mean (known variance)

**Example.** A machine fills bags with mean weight 500g. A sample of 30 bags gives $\bar{x} = 497$g.
Test at the 5% level whether the mean weight has decreased, given $\sigma = 6$g.

$H_0: \mu = 500$, $H_1: \mu \lt{} 500$. $\alpha = 0.05$.

Under $H_0$: $\bar{X} \sim N(500, 6^2/30) = N(500, 1.2)$.

$z = \dfrac{497 - 500}{\sqrt{1.2}} = \dfrac{-3}{1.0954} = -2.739$.

Critical value: $P(Z \lt{} -1.645) = 0.05$.

Since $-2.739 \lt{} -1.645$, we reject $H_0$.

There is sufficient evidence that the mean weight has decreased.

### 6.2 Large sample test for a proportion

For large $n$: $\hat{p} \sim N\!\left(p, \dfrac{p(1-p)}{n}\right)$ approximately.

Test statistic: $z = \dfrac{\hat{p} - p_0}{\sqrt{p_0(1-p_0)/n}}$.

<hr />

## 7. Interpreting Results

:::warning "Failing to reject $H_0$" is **not** the same as "proving $H_0$ is true." It means the
data does not provide sufficient evidence against $H_0$. The test may lack power (sample too small,
effect too weak).
:::

<hr />

## 8. One-Tailed vs Two-Tailed Tests in Depth

### 8.1 Choosing between one-tailed and two-tailed

**Use a one-tailed test when:**

- The research question has a specific directional prediction established **before** data
  collection.
- Only one direction of deviation is practically meaningful.
- The consequence of missing an effect in the unexpected direction is negligible.

**Use a two-tailed test when:**

- You are interested in any difference from $H_0$, regardless of direction.
- You want a more conservative test that is harder to reach significance with.
- There is no strong prior reason to expect the effect in one specific direction.

**Example.** Testing whether a new teaching method changes exam scores:

- One-tailed ($H_1: \mu \gt{} \mu_0$): justified only if prior research strongly suggests the method
  improves scores, and you would not act on a decrease.
- Two-tailed ($H_1: \mu \neq \mu_0$): appropriate if the method is new and could either help or
  harm, and either outcome matters.

### 8.2 Critical region comparison

For a test at significance level $\alpha$, the allocation of the significance level differs:

- **One-tailed:** The entire $\alpha$ goes into one tail. The critical value is at the $1 - \alpha$
  quantile (right-tailed) or $\alpha$ quantile (left-tailed).
- **Two-tailed:** $\alpha/2$ goes into each tail. The critical values are at the $\alpha/2$ and
  $1 - \alpha/2$ quantiles.

This means the two-tailed test has a **higher bar** for each individual tail.

**Example.** Standard normal test at $\alpha = 0.05$:

- One-tailed ($H_1: \mu \gt{} \mu_0$): reject if $z \gt{} 1.645$.
- Two-tailed ($H_1: \mu \neq \mu_0$): reject if $z \gt{} 1.960$ or $z \lt{} -1.960$.

An observed $z = 1.80$ is significant for the one-tailed test ($1.80 \gt{} 1.645$) but not for the
two-tailed test ($|1.80| \lt{} 1.960$).

:::info A two-tailed test at level $\alpha$ requires a more extreme test statistic than a one-tailed
test at the same $\alpha$, because the significance "budget" is split between two tails. A
two-tailed test at $\alpha = 0.05$ corresponds roughly to two one-tailed tests each at
$\alpha = 0.025$.
:::

### 8.3 Effect on power

For the same $\alpha$, a one-tailed test has **greater power** than a two-tailed test against an
alternative in the predicted direction, because the critical value is closer to the null value.
However, a one-tailed test has **zero power** to detect an effect in the opposite direction.

<hr />

## 9. Binomial Tests with Normal Approximation

### 9.1 When to use the normal approximation

When $n$ is sufficiently large, the binomial distribution $B(n, p)$ can be approximated by a normal
distribution. The standard conditions are:

$$np \gt{} 5 \quad \mathrm{and} \quad n(1 - p) \gt{} 5$$

Under these conditions:

$$X \approx N(np, np(1-p))$$

Equivalently, for the sample proportion $\hat{p} = X/n$:

$$\hat{p} \approx N\!\left(p, \dfrac{p(1-p)}{n}\right)$$

:::warning These conditions must be checked using the null value $p_0$ (the value specified in
$H_0$), not the observed sample proportion $\hat{p}$.
:::

### 9.2 Continuity correction

Since the binomial distribution is discrete and the normal distribution is continuous, a
**continuity correction** improves the accuracy of the approximation:

- For $P(X \leq k)$, use $P\!\left(Z \leq \dfrac{k + 0.5 - np}{\sqrt{np(1-p)}}\right)$.
- For $P(X \geq k)$, use $P\!\left(Z \geq \dfrac{k - 0.5 - np}{\sqrt{np(1-p)}}\right)$.
- For $P(X = k)$, use $P(k - 0.5 \lt{} X \lt{} k + 0.5)$ in the normal.

### 9.3 Worked example

**Example.** Historically, 40% of students at a school take the bus. In a survey of 120 students, 58
take the bus. Test at the 5% level whether the proportion has changed.

$X \sim B(120, p)$. $H_0: p = 0.4$, $H_1: p \neq 0.4$. Two-tailed, $\alpha = 0.05$.

Check conditions using $p_0 = 0.4$: $np_0 = 120 \times 0.4 = 48 \gt{} 5$ and
$n(1 - p_0) = 120 \times 0.6 = 72 \gt{} 5$. Conditions satisfied.

Under $H_0$: $X \approx N(48, 28.8)$, so $\sigma = \sqrt{28.8} \approx 5.367$.

Using continuity correction:

$$z = \dfrac{58 - 0.5 - 48}{5.367} = \dfrac{9.5}{5.367} = 1.770$$

Two-tailed critical values: $\pm 1.96$. Since $|1.770| \lt{} 1.96$, **do not reject** $H_0$.

There is insufficient evidence at the 5% level that the proportion of bus users has changed.

<hr />

## 10. Confidence Intervals

### 10.1 Definition

A **confidence interval** gives a range of plausible values for a population parameter, together
with a specified level of confidence.

**Definition.** A $100(1 - \alpha)\%$ confidence interval for a parameter $\theta$ is an interval
$(L, U)$ constructed from sample data such that, in repeated sampling, $100(1 - \alpha)\%$ of such
intervals would contain the true value of $\theta$.

:::warning A 95% confidence interval does **not** mean there is a 95% probability that $\theta$ lies
in the interval. The parameter $\theta$ is fixed; it either is or is not in the interval. The 95%
refers to the long-run proportion of intervals (across many repeated samples) that capture $\theta$.
:::

### 10.2 95% confidence interval for a population proportion

For large $n$ where $n\hat{p} \gt{} 5$ and $n(1 - \hat{p}) \gt{} 5$, the sample proportion $\hat{p}$
is approximately normal. The $100(1-\alpha)\%$ confidence interval for $p$ is:

$$\hat{p} \pm z_{\alpha/2}\sqrt{\dfrac{\hat{p}(1 - \hat{p})}{n}}$$

For a 95% confidence interval, $z_{\alpha/2} = 1.96$:

$$\hat{p} \pm 1.96\sqrt{\dfrac{\hat{p}(1 - \hat{p})}{n}}$$

The **margin of error** is $1.96\sqrt{\hat{p}(1-\hat{p})/n}$, which decreases as $n$ increases.

### 10.3 Connection to hypothesis testing

There is a direct and important link between confidence intervals and two-tailed hypothesis tests:

- A $100(1-\alpha)\%$ confidence interval contains exactly those values of $p_0$ that would **not be
  rejected** by a two-tailed test of $H_0: p = p_0$ at level $\alpha$.
- If $p_0$ falls **outside** the confidence interval, then $H_0$ is rejected at level $\alpha$.
- If $p_0$ falls **inside** the confidence interval, then $H_0$ is not rejected at level $\alpha$.

**Example.** Using the bus survey data: $\hat{p} = 58/120 \approx 0.483$, $n = 120$.

$$95\%\mathrm{ CI} = 0.483 \pm 1.96\sqrt{\dfrac{0.483 \times 0.517}{120}} = 0.483 \pm 1.96 \times 0.0456$$

$$95\%\mathrm{ CI} = 0.483 \pm 0.0894 = (0.394, 0.573)$$

Since $p_0 = 0.4$ lies inside $(0.394, 0.573)$, we do not reject $H_0: p = 0.4$ at the 5% level.
This is consistent with the hypothesis test result in Section 9.3.

<hr />

## 11. Interpreting p-Values

### 11.1 Formal definition

**Definition.** The **$p$-value** is the probability of obtaining a test statistic at least as
extreme as the observed value, assuming $H_0$ is true.

$$p\mathrm{-value} = P(\mathrm{test statistic} \geq \mathrm{observed} \mid H_0 \mathrm{ true})$$

For a two-tailed test, "at least as extreme" means at least as far from the null value in either
direction, so the $p$-value is doubled.

### 11.2 Decision rule

- If $p\mathrm{-value} \lt{} \alpha$: reject $H_0$. The result is **statistically significant**.
- If $p\mathrm{-value} \geq \alpha$: do not reject $H_0$. The result is **not statistically
  significant**.

### 11.3 Strength of evidence

The smaller the $p$-value, the stronger the evidence against $H_0$:

| $p$-value range           | Strength of evidence against $H_0$ |
| ------------------------- | ---------------------------------- |
| $p \geq 0.10$             | Little to no evidence              |
| $0.05 \leq p \lt{} 0.10$  | Weak evidence                      |
| $0.01 \leq p \lt{} 0.05$  | Moderate evidence                  |
| $0.001 \leq p \lt{} 0.01$ | Strong evidence                    |
| $p \lt{} 0.001$           | Very strong evidence               |

### 11.4 Common misinterpretations

:::warning

- The $p$-value is **not** the probability that $H_0$ is true.
- The $p$-value is **not** the probability that the observed result occurred by chance.
- A large $p$-value does **not** prove $H_0$ is true; it only means the data is consistent with
  $H_0$.
- Statistical significance does **not** imply practical or scientific importance.
- The $p$-value depends on sample size: with a very large sample, even trivially small effects can
  produce tiny $p$-values.
:::

### 11.5 Worked example

**Example.** A factory produces components with mean length 50 mm. A sample of 40 components gives
$\bar{x} = 50.8$ mm. Given $\sigma = 3$ mm, find the $p$-value for testing $H_0: \mu = 50$ vs
$H_1: \mu \neq 50$.

Under $H_0$: $\bar{X} \sim N(50, 3^2/40) = N(50, 0.225)$.

$$z = \dfrac{50.8 - 50}{\sqrt{0.225}} = \dfrac{0.8}{0.4743} = 1.687$$

$$p\mathrm{-value} = 2 \times P(Z \gt{} 1.687) = 2 \times (1 - 0.9542) = 0.0916$$

Since $0.0916 \gt{} 0.05$, we do not reject $H_0$ at the 5% level.

**Interpretation:** If the true mean were 50 mm, there would be approximately a 9.2% chance of
observing a sample mean at least as far from 50 mm as 50.8 mm. This is not unusual enough to provide
convincing evidence against $H_0$.

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
A die is rolled 60 times and a 6 appears 16 times. Test at the 5% level whether the die is biased.
</details>

<details>
<summary>Solution 1</summary>
$X \sim B(60, p)$. $H_0: p = 1/6$, $H_1: p \neq 1/6$. Two-tailed, $\alpha = 0.05$.

Under $H_0$: $X \sim B(60, 1/6)$. $\mu = 10$,
$\sigma = \sqrt{60 \times \frac{1}{6} \times \frac{5}{6}} = \sqrt{50/6} \approx 2.887$.

Using normal approximation: $z = \dfrac{16 - 10}{2.887} = 2.078$.

Two-tailed: critical values $\pm 1.96$. $|2.078| \gt{} 1.96$, so **reject** $H_0$.

There is evidence at the 5% level that the die is biased.

**If you get this wrong, revise:** [Binomial Hypothesis Tests](#5-binomial-hypothesis-tests) —
Section 5.

</details>

<details>
<summary>Problem 2</summary>
A manufacturer claims that 90% of their products pass quality control. In a sample of 200, 170 pass. Test the claim at the 5% significance level.
</details>

<details>
<summary>Solution 2</summary>
$X \sim B(200, p)$. $H_0: p = 0.9$, $H_1: p \lt{} 0.9$. Left-tailed, $\alpha = 0.05$.

$\hat{p} = 170/200 = 0.85$.

Under $H_0$: $\hat{p} \sim N(0.9, \frac{0.9 \times 0.1}{200}) = N(0.9, 0.00045)$.

$z = \dfrac{0.85 - 0.9}{\sqrt{0.00045}} = \dfrac{-0.05}{0.0212} = -2.358$.

Critical value: $-1.645$. Since $-2.358 \lt{} -1.645$, **reject** $H_0$.

There is evidence that the proportion passing quality control is less than 90%.

**If you get this wrong, revise:** [Normal Hypothesis Tests](#6-normal-hypothesis-tests) —
Section 6.

</details>

<details>
<summary>Problem 3</summary>
Explain the difference between a Type I error and a Type II error in the context of medical testing.
</details>

<details>
<summary>Solution 3</summary>
**Type I error:** The test says a healthy person is sick (false positive). This leads to unnecessary treatment and anxiety.

**Type II error:** The test says a sick person is healthy (false negative). This means the person
goes untreated, potentially with serious consequences.

**If you get this wrong, revise:** [Type I and Type II Errors](#3-type-i-and-type-ii-errors) —
Section 3.

</details>

<details>
<summary>Problem 4</summary>
Find the critical region for a test of $H_0: p = 0.3$ vs $H_1: p \gt{} 0.3$ using $X \sim B(10, p)$ at the 5% level.
</details>

<details>
<summary>Solution 4</summary>
Under $H_0$: $X \sim B(10, 0.3)$.

$P(X \geq 6) = 1 - P(X \leq 5) = 1 - 0.9527 = 0.0473 \lt{} 0.05$.
$P(X \geq 5) = 1 - P(X \leq 4) = 1 - 0.8497 = 0.1503 \gt{} 0.05$.

Critical region: $X \geq 6$. Actual significance level: 4.73%.

**If you get this wrong, revise:** [Critical Region](#23-critical-region) — Section 2.3.

</details>

<details>
<summary>Problem 5</summary>
The mean lifetime of a bulb is claimed to be 1000 hours. A sample of 50 bulbs gives $\bar{x} = 985$ hours with $s = 40$ hours. Test at the 1% level whether the mean lifetime is less than 1000 hours.
</details>

<details>
<summary>Solution 5</summary>
$H_0: \mu = 1000$, $H_1: \mu \lt{} 1000$. $\alpha = 0.01$.

$\bar{X} \sim N(1000, 40^2/50) = N(1000, 32)$ approximately.

$z = \dfrac{985 - 1000}{\sqrt{32}} = \dfrac{-15}{5.657} = -2.652$.

Critical value at 1%: $-2.326$. Since $-2.652 \lt{} -2.326$, **reject** $H_0$.

There is evidence at the 1% level that the mean lifetime is less than 1000 hours.

**If you get this wrong, revise:** [Normal Hypothesis Tests](#6-normal-hypothesis-tests) —
Section 6.

</details>

<details>
<summary>Problem 6</summary>
For $X \sim B(20, 0.5)$, find the critical region for a two-tailed test at the 10% significance level.
</details>

<details>
<summary>Solution 6</summary>
Under $H_0$: $X \sim B(20, 0.5)$.

For each tail, we need $P(X \leq c_L) \leq 0.05$ and $P(X \geq c_U) \leq 0.05$.

Lower: $P(X \leq 5) \approx 0.0207 \leq 0.05$, $P(X \leq 6) \approx 0.0577 \gt{} 0.05$. So
$c_L = 5$. Upper: $P(X \geq 15) \approx 0.0207 \leq 0.05$, $P(X \geq 14) \approx 0.0577 \gt{} 0.05$.
So $c_U = 15$.

Critical region: $X \leq 5$ or $X \geq 15$. Actual significance level: $2 \times 0.0207 = 0.0414$.

**If you get this wrong, revise:**
[Critical Values and Significance Levels](#2-critical-values-and-significance-levels) — Section 2.

</details>

<details>
<summary>Problem 7</summary>
A teacher claims that the average score on a test is 70%. In a class of 25, the mean score is 66% with standard deviation 12%. Test at the 5% level.
</details>

<details>
<summary>Solution 7</summary>
$H_0: \mu = 70$, $H_1: \mu \neq 70$. Two-tailed, $\alpha = 0.05$.

$\bar{X} \sim N(70, 12^2/25) = N(70, 5.76)$ approximately.

$z = \dfrac{66 - 70}{\sqrt{5.76}} = \dfrac{-4}{2.4} = -1.667$.

Two-tailed critical values: $\pm 1.96$. $|-1.667| \lt{} 1.96$, so **do not reject** $H_0$.

There is insufficient evidence at the 5% level that the mean score differs from 70%.

**If you get this wrong, revise:** [Normal Hypothesis Tests](#6-normal-hypothesis-tests) —
Section 6.

</details>

<details>
<summary>Problem 8</summary>
A drug is effective for 60% of patients. After a new treatment, 18 out of 25 patients are cured. Test whether the new treatment is more effective at the 5% level.
</details>

<details>
<summary>Solution 8</summary>
$X \sim B(25, p)$. $H_0: p = 0.6$, $H_1: p \gt{} 0.6$. Right-tailed, $\alpha = 0.05$.

Under $H_0$: $X \sim B(25, 0.6)$.

$P(X \geq 19) = 1 - P(X \leq 18) \approx 1 - 0.9264 = 0.0736 \gt{} 0.05$.
$P(X \geq 20) = 1 - P(X \leq 19) \approx 1 - 0.9773 = 0.0227 \lt{} 0.05$.

Critical region: $X \geq 20$. Since $X = 18 \lt{} 20$, **do not reject** $H_0$.

Insufficient evidence that the new treatment is more effective.

**If you get this wrong, revise:** [Binomial Hypothesis Tests](#5-binomial-hypothesis-tests) —
Section 5.

</details>

<details>
<summary>Problem 9</summary>
Explain why failing to reject $H_0$ does not mean $H_0$ is true.
</details>

<details>
<summary>Solution 9</summary>
Failing to reject $H_0$ means the data is consistent with $H_0$ but does not prove it. The test may lack sufficient power to detect a real effect. For example, if a drug has a small but real benefit, a small sample may not detect it, leading us to fail to reject $H_0$ even though the drug is effective. The absence of evidence is not evidence of absence.

**If you get this wrong, revise:** [Interpreting Results](#7-interpreting-results) — Section 7.

</details>

<details>
<summary>Problem 10</summary>
For a test of $H_0: \mu = 50$ vs $H_1: \mu \gt{} 50$ at the 5% level with $\sigma = 4$ and $n = 16$, find the probability of a Type II error if the true mean is $\mu = 52$.
</details>

<details>
<summary>Solution 10</summary>
Under $H_0$: $\bar{X} \sim N(50, 16/16) = N(50, 1)$.

Critical value: $P(Z \gt{} c) = 0.05 \implies c = 50 + 1.645(1) = 51.645$.

Type II error = failing to reject $H_0$ when $\mu = 52$.

$\bar{X} \sim N(52, 1)$ under the true distribution.

$P(\bar{X} \lt{} 51.645 \mid \mu = 52) = P\!\left(Z \lt{} \dfrac{51.645 - 52}{1}\right) = P(Z \lt{} -0.355) \approx 0.3613$.

So $\beta \approx 0.361$ and the power is $1 - \beta \approx 0.639$.

**If you get this wrong, revise:** [Type I and Type II Errors](#3-type-i-and-type-ii-errors) —
Section 3.

</details>

<details>
<summary>Problem 11</summary>
A researcher tests whether a new drug changes recovery time. She uses a two-tailed test of $H_0: \mu = \mu_0$ vs $H_1: \mu \neq \mu_0$ at $\alpha = 0.05$ and obtains $z = 1.85$. (a) What is her conclusion? (b) If she had instead used a right-tailed test $H_1: \mu \gt{} \mu_0$ at the same level, would her conclusion change? Explain.
</details>

<details>
<summary>Solution 11</summary>
(a) Two-tailed test: critical values $\pm 1.96$. $|1.85| = 1.85 \lt{} 1.96$, so **do not reject** $H_0$. There is insufficient evidence that recovery time has changed.

(b) One-tailed test: critical value $1.645$. Since $1.85 \gt{} 1.645$, we **reject** $H_0$. There is
sufficient evidence that recovery time has increased.

The conclusion changes because a one-tailed test allocates the entire 5% significance level to one
tail, making the critical value less extreme. This illustrates why the choice between one-tailed and
two-tailed must be made **before** seeing the data.

**If you get this wrong, revise:**
[One-Tailed vs Two-Tailed Tests in Depth](#8-one-tailed-vs-two-tailed-tests-in-depth) — Section 8.

</details>

<details>
<summary>Problem 12</summary>
A survey of 200 households in a town finds that 45 regularly recycle. The national recycling rate is 20%. Test at the 5% level whether the recycling rate in this town differs from the national rate, using a normal approximation with continuity correction.
</details>

<details>
<summary>Solution 12</summary>
$X \sim B(200, p)$. $H_0: p = 0.20$, $H_1: p \neq 0.20$. Two-tailed, $\alpha = 0.05$.

Check conditions using $p_0 = 0.20$: $np_0 = 200 \times 0.20 = 40 \gt{} 5$ and
$n(1 - p_0) = 160 \gt{} 5$. Conditions satisfied.

Under $H_0$: $X \approx N(40, 200 \times 0.20 \times 0.80) = N(40, 32)$,
$\sigma = \sqrt{32} \approx 5.657$.

Using continuity correction:

$$z = \dfrac{45 - 0.5 - 40}{5.657} = \dfrac{4.5}{5.657} = 0.796$$

Two-tailed critical values: $\pm 1.96$. $|0.796| \lt{} 1.96$, so **do not reject** $H_0$.

There is insufficient evidence at the 5% level that the recycling rate differs from 20%.

**If you get this wrong, revise:**
[Binomial Tests with Normal Approximation](#9-binomial-tests-with-normal-approximation) — Section 9.

</details>

<details>
<summary>Problem 13</summary>
In a random sample of 150 voters, 87 support a new policy. (a) Construct a 95% confidence interval for the true proportion of support. (b) Since the interval does not contain 0.5, a politician claims "a majority of voters support the policy." Is this claim justified?
</details>

<details>
<summary>Solution 13</summary>
(a) $\hat{p} = 87/150 = 0.58$.

Check: $n\hat{p} = 150 \times 0.58 = 87 \gt{} 5$ and
$n(1 - \hat{p}) = 150 \times 0.42 = 63 \gt{} 5$.

$$95\%\mathrm{ CI} = 0.58 \pm 1.96\sqrt{\dfrac{0.58 \times 0.42}{150}} = 0.58 \pm 1.96 \times 0.0403$$

$$95\%\mathrm{ CI} = 0.58 \pm 0.0790 = (0.501, 0.659)$$

(b) The 95% CI is $(0.501, 0.659)$. Since the entire interval lies above 0.5, we can reject
$H_0: p = 0.5$ at the 5% level. However, the lower bound is only 0.501, so the evidence for a
majority is borderline. The claim is technically supported by the test, but the narrow margin should
be communicated carefully.

**If you get this wrong, revise:** [Confidence Intervals](#10-confidence-intervals) — Section 10.

</details>

<details>
<summary>Problem 14</summary>
A 95% confidence interval for a population mean is $(48.2, 53.8)$. State whether $H_0$ would be rejected or not rejected at the 5% level for each of the following null values: (a) $\mu_0 = 50$, (b) $\mu_0 = 47$, (c) $\mu_0 = 54$. Justify using the connection between confidence intervals and hypothesis tests.
</details>

<details>
<summary>Solution 14</summary>
A 95% confidence interval contains exactly those values of $\mu_0$ that would **not** be rejected
by a two-tailed test at the 5% level.

(a) $\mu_0 = 50$: $50 \in (48.2, 53.8)$, so **do not reject** $H_0$. (b) $\mu_0 = 47$:
$47 \notin (48.2, 53.8)$, so **reject** $H_0$. (c) $\mu_0 = 54$: $54 \notin (48.2, 53.8)$, so
**reject** $H_0$.

**If you get this wrong, revise:** [Confidence Intervals](#10-confidence-intervals) — Section 10.

</details>

<details>
<summary>Problem 15</summary>
A sample of 35 students has mean score 62.4 with known population standard deviation $\sigma = 8$. (a) Find the $p$-value for testing $H_0: \mu = 60$ vs $H_1: \mu \gt{} 60$. (b) State your conclusion at the 5% significance level and interpret the $p$-value.
</details>

<details>
<summary>Solution 15</summary>
(a) Under $H_0$: $\bar{X} \sim N(60, 8^2/35) = N(60, 1.829)$.

$$z = \dfrac{62.4 - 60}{\sqrt{1.829}} = \dfrac{2.4}{1.352} = 1.775$$

$$p\mathrm{-value} = P(Z \gt{} 1.775) = 1 - 0.9620 = 0.0380$$

(b) Since $0.038 \lt{} 0.05$, **reject** $H_0$ at the 5% level. There is sufficient evidence that
the true mean score exceeds 60. The $p$-value of 0.038 means that if the true mean were 60, there
would be a 3.8% chance of observing a sample mean of 62.4 or higher. This provides moderate evidence
against $H_0$.

**If you get this wrong, revise:** [Interpreting p-Values](#11-interpreting-p-values) — Section 11.

</details>

<details>
<summary>Problem 16</summary>
For a test of $H_0: \mu = 100$ vs $H_1: \mu \gt{} 100$ with $\sigma = 15$, $n = 25$, and $\alpha = 0.05$: (a) Find the critical value in terms of $\bar{x}$. (b) Find the probability of a Type II error and the power of the test if the true mean is $\mu = 108$. (c) How would the power change if $\alpha$ were increased to 0.10?
</details>

<details>
<summary>Solution 16</summary>
(a) Under $H_0$: $\bar{X} \sim N(100, 15^2/25) = N(100, 9)$, so $\sigma_{\bar{X}} = 3$.

Critical value: $c = 100 + 1.645 \times 3 = 104.935$. Reject $H_0$ if $\bar{X} \gt{} 104.935$.

(b) Type II error when $\mu = 108$: $P(\bar{X} \leq 104.935 \mid \mu = 108)$.

$\bar{X} \sim N(108, 9)$ under the true distribution.

$$P\!\left(Z \leq \dfrac{104.935 - 108}{3}\right) = P(Z \leq -1.022) \approx 0.153$$

So $\beta \approx 0.153$ and power $= 1 - 0.153 = 0.847$.

(c) If $\alpha = 0.10$, the critical value becomes $c = 100 + 1.282 \times 3 = 103.846$.

$$\beta_{\mathrm{new}} = P\!\left(Z \leq \dfrac{103.846 - 108}{3}\right) = P(Z \leq -1.385) \approx 0.083$$

Power $= 1 - 0.083 = 0.917$. Increasing $\alpha$ from 0.05 to 0.10 **increases** the power (from
0.847 to 0.917) but also increases the probability of a Type I error. This illustrates the trade-off
between Type I and Type II errors.

**If you get this wrong, revise:** [Type I and Type II Errors](#3-type-i-and-type-ii-errors) —
Section 3.

</details>

:::

:::

:::


---

:::tip Diagnostic Test
Ready to test your understanding of **Hypothesis Testing**? The [diagnostic test](/maths/diagnostics/diag-hypothesis-testing) contains the hardest questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Hypothesis Testing with other topics to test synthesis under exam conditions.

See [Diagnostic Guide](/maths/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
