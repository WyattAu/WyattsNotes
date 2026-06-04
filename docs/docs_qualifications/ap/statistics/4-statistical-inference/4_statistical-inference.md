---
title: Statistical Inference
description:
  'AP Statistics inference notes covering confidence intervals, hypothesis testing, significance
  levels, Type I and Type II errors, chi-square tests, and inference for regression.'
date: 2026-06-04T10:00:00.000Z
tags:
  - ap
  - ap-statistics
categories:
  - ap-statistics
slug: statistical-inference
---

## Introduction to Inference

Statistical inference uses sample data to draw conclusions about a population. There are two main
types: **confidence intervals** (estimating a parameter) and **hypothesis tests** (testing a claim
about a parameter).

## Confidence Intervals

A confidence interval provides a range of plausible values for an unknown population parameter,
along with a level of confidence.

### General Form

$$\text{Statistic} \pm \text{Margin of Error} = (\text{point estimate}) \pm (\text{critical value}) \times (\text{standard error})$$

### Confidence Level

The confidence level (typically 90%, 95%, or 99%) is the long-run proportion of intervals that would
capture the true parameter if the sampling process were repeated many times. It does not mean there
is a 95% probability that the specific interval contains the parameter.

### Confidence Interval for a Proportion

Conditions:

- Random sample (or random assignment)
- $np \geq 10$ and $n(1-p) \geq 10$ (large enough sample)
- Population is at least $10n$ (independence / 10% condition)

$$\hat{p} \pm z^{*}\sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Where $\hat{p}$ is the sample proportion and $z^*$ is the critical value (1.645 for 90%, 1.960 for
95%, 2.576 for 99%).

### Confidence Interval for a Mean

Conditions:

- Random sample
- Population distribution is approximately normal (check with normal probability plot, or
  $n \geq 30$ for CLT)
- $\sigma$ known: $z$-interval; $\sigma$ unknown: $t$-interval

$$\bar{x} \pm t^{*} \cdot \frac{s}{\sqrt{n}}$$

Where $t^*$ is the critical value from the $t$-distribution with $n-1$ degrees of freedom.

### Interpreting Confidence Intervals

- "We are 95% confident that the true population proportion is between 0.42 and 0.58" means that the
  method produces an interval that captures the true parameter 95% of the time
- The margin of error decreases with larger sample size and lower confidence level
- Wider intervals give more confidence but less precision

## Hypothesis Testing

A hypothesis test evaluates whether the observed sample data provides evidence for or against a
claim about a population parameter.

### Structure of a Hypothesis Test

1. **State hypotheses**: Null ($H_0$) and alternative ($H_a$)
2. **Check conditions**: Determine the appropriate test
3. **Calculate the test statistic**: Measure how far the observed statistic is from the null
4. **Find the p-value**: Probability of obtaining a result at least as extreme as the observed,
   assuming $H_0$ is true
5. **Make a decision**: Compare p-value to the significance level $\alpha$
6. **State conclusion in context**

### Null and Alternative Hypotheses

- **$H_0$ (null hypothesis)**: The "status quo" -- the parameter equals a specific value (e.g.,
  $p = 0.5$, $\mu = 100$)
- **$H_a$ (alternative hypothesis)**: What we are trying to find evidence for (e.g., $p \neq 0.5$,
  $p > 0.5$, $\mu < 100$)

### Significance Level ($\alpha$)

The significance level is the threshold for deciding whether the evidence against $H_0$ is strong
enough. Common values: $\alpha = 0.10, 0.05, 0.01$.

### p-Value

The **p-value** is the probability of obtaining a test statistic as extreme as or more extreme than
the observed value, **assuming $H_0$ is true**.

- Small p-value ($< \alpha$): Strong evidence against $H_0$; reject $H_0$
- Large p-value ($\geq \alpha$): Insufficient evidence against $H_0$; fail to reject $H_0$

### Type I and Type II Errors

| Decision             | $H_0$ True              | $H_0$ False                   |
| -------------------- | ----------------------- | ----------------------------- |
| Reject $H_0$         | Type I Error ($\alpha$) | Correct (Power = $1 - \beta$) |
| Fail to Reject $H_0$ | Correct                 | Type II Error ($\beta$)       |

- **Type I Error**: Rejecting $H_0$ when it is actually true (false positive). Probability =
  $\alpha$
- **Type II Error**: Failing to reject $H_0$ when it is actually false (false negative). Probability
  = $\beta$
- **Power** ($1 - \beta$): The probability of correctly rejecting a false $H_0$ (detecting a real
  effect)

Power increases with: larger sample size, larger effect size, higher $\alpha$, and lower $\sigma$.

## Tests for Proportions

### One-Sample z-Test for a Proportion

$$z = \frac{\hat{p} - p_0}{\sqrt{\frac{p_0(1-p_0)}{n}}}$$

### Two-Sample z-Test for Difference of Proportions

$$z = \frac{(\hat{p}_1 - \hat{p}_2) - 0}{\sqrt{\hat{p}(1-\hat{p})\left(\frac{1}{n_1} + \frac{1}{n_2}\right)}}$$

Where $\hat{p} = \frac{x_1 + x_2}{n_1 + n_2}$ is the pooled proportion.

## Tests for Means

### One-Sample t-Test

$$t = \frac{\bar{x} - \mu_0}{s / \sqrt{n}}$$

Degrees of freedom: $df = n - 1$

### Two-Sample t-Test

$$t = \frac{(\bar{x}_1 - \bar{x}_2) - 0}{\sqrt{\frac{s_1^2}{n_1} + \frac{s_2^2}{n_2}}}$$

Use conservative degrees of freedom: $df = \min(n_1 - 1, n_2 - 1)$ or technology.

### Paired t-Test

For matched pairs or before/after data: compute the differences $d = x_1 - x_2$ and run a one-sample
t-test on the differences.

$$t = \frac{\bar{d} - 0}{s_d / \sqrt{n}}$$

## Chi-Square Tests

### Goodness of Fit

Tests whether observed frequencies match expected frequencies based on a specified distribution.

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

$df = \text{number of categories} - 1$

### Test for Independence

Tests whether two categorical variables are independent using a two-way table.

$$\chi^2 = \sum \frac{(O - E)^2}{E}$$

$df = (\text{rows} - 1)(\text{columns} - 1)$

Expected count for each cell:
$E = \frac{\text{row total} \times \text{column total}}{\text{grand total}}$

Conditions: All expected counts $\geq 5$.

### Test for Homogeneity

Tests whether the distribution of one categorical variable is the same across several populations.
Same formula and conditions as the test for independence, but sampling is from separate populations
rather than one population classified two ways.

## Inference for Regression Slope

### Hypothesis Test for Slope

$$H_0: \beta_1 = 0 \quad \text{(no linear relationship)}$$
$$H_a: \beta_1 \neq 0 \quad \text{(linear relationship exists)}$$

$$t = \frac{b_1 - 0}{SE_{b_1}}$$

$df = n - 2$

## Common Pitfalls

- Confusing the p-value with the probability that $H_0$ is true
- Saying "accept $H_0$" instead of "fail to reject $H_0$"
- Forgetting to check conditions before performing inference
- Interpreting a confidence interval as "there is a 95% probability the parameter is in this
  interval"
- Using a z-test for a mean when $\sigma$ is unknown (should use t-test)
- Confusing Type I and Type II errors
