---
title: Hypothesis Testing
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
statistic, critical value/region, comparison, and conclusion in context. :::

---

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
before the experiment. :::

---

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

---

## 3. Type I and Type II Errors

### 3.1 Definitions

**Definition.**

- **Type I error:** Rejecting $H_0$ when $H_0$ is true (false positive).
  $$P(\text{Type I}) = \alpha \text{ (the significance level)}$$

- **Type II error:** Failing to reject $H_0$ when $H_0$ is false (false negative).
  $$P(\text{Type II}) = \beta$$

- The **power** of a test is $1 - \beta = P(\text{reject } H_0 \mid H_0 \text{ is false})$.

### 3.2 Relationship

Decreasing $\alpha$ (making the test stricter) generally **increases** $\beta$ (more false
negatives). There is always a trade-off between Type I and Type II errors.

**Intuition.** Think of a courtroom: a Type I error is convicting an innocent person; a Type II
error is acquitting a guilty person. Making the standard of proof higher (beyond reasonable doubt)
reduces Type I errors but increases Type II errors. You cannot eliminate both simultaneously.

---

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

---

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

---

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

---

## 7. Interpreting Results

:::warning "Failing to reject $H_0$" is **not** the same as "proving $H_0$ is true." It means the
data does not provide sufficient evidence against $H_0$. The test may lack power (sample too small,
effect too weak). :::

---

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
