---
sidebar_label: Further Statistics
sidebar_position: 2
description: 'A-Level Further Maths Further Statistics notes covering key definitions, core concepts, worked examples, and practice questions for effective revision.'
---

# Further Statistics

Further Statistics extends the statistical methods from A-Level Mathematics, introducing continuous
probability distributions, more sophisticated hypothesis tests, and the chi-squared family of tests
for goodness of fit and independence.

## Topics Covered

### Poisson and Geometric Distributions

- **Poisson distribution** — $X \sim \text{Po}(\lambda)$; derivation as the limit of
  $\text{Bin}(n, p)$ as $n \to \infty$, $p \to 0$ with $np = \lambda$
- **Poisson properties** — mean $= \lambda$, variance $= \lambda$; additive property of independent
  Poissons
- **Geometric distribution** — $X \sim \text{Geo}(p)$; $P(X = x) = (1-p)^{x-1}p$; memoryless
  property
- **Hypothesis testing** — using Poisson and geometric distributions; critical regions, significance
  levels, $p$-values

### Exponential and Continuous Random Variables

- **Exponential distribution** — $X \sim \text{Exp}(\lambda)$; PDF $f(x) = \lambda e^{-\lambda x}$
  for $x \geq 0$; CDF $F(x) = 1 - e^{-\lambda x}$
- **Link to Poisson processes** — the waiting time between Poisson events follows an exponential
  distribution
- **Continuous random variables** — PDF, CDF, $E(X) = \int xf(x)\,dx$,
  $\text{Var}(X) = E(X^2) - [E(X)]^2$
- **Median and mode** — finding the median from the CDF; locating the mode from the PDF

### Chi-Squared Tests

- **Goodness of fit** — testing whether observed data follows a specified distribution;
  $\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$
- **Contingency tables** — testing for independence between two categorical variables
- **Degrees of freedom** — calculating $\nu$ correctly; $\nu = k - 1$ for goodness of fit,
  $\nu = (r-1)(c-1)$ for contingency tables
- **Combining cells** — when expected frequencies are below 5
- **Interpretation** — what a significant result actually means in context

## Study Tips

1. **Know when to use each distribution** — Binomial for fixed trials, Poisson for rare events in a
   fixed interval, Geometric for "first success" problems, Exponential for continuous waiting times.
2. **Practise calculating expected frequencies** — for chi-squared tests, the expected values must
   be calculated correctly before you can compute the test statistic.
3. **Show all working in hypothesis tests** — state $H_0$ and $H_1$, calculate the test statistic,
   compare to critical value or find the $p$-value, state the conclusion in context.
4. **Understand the memoryless property** of both Geometric and Exponential distributions — it is a
   common exam topic that tests deep understanding.
5. **Check integration** — continuous random variable problems require careful definite integration.
   Always verify bounds from the support of the distribution.

### Hypothesis Testing Workflow

Every hypothesis test follows the same five-step structure:

1. **State hypotheses** — $H_0$ (null: no effect/difference) and $H_1$ (alternative)
2. **Choose significance level** — $\alpha = 0.05$ or $0.01$
3. **Calculate the test statistic** — using the appropriate distribution
4. **Determine the critical region or $p$-value** — compare to $\alpha$
5. **State the conclusion in context** — never just "reject $H_0$"; explain what this means for the
   real-world situation

### Distribution Selection Guide

| Scenario                            | Distribution           | Key Parameters              |
| ----------------------------------- | ---------------------- | --------------------------- |
| Counting events in a fixed interval | Poisson($\lambda$)     | Mean = Variance = $\lambda$ |
| First success in repeated trials    | Geometric($p$)         | $P(X=x) = (1-p)^{x-1}p$     |
| Continuous waiting time             | Exponential($\lambda$) | Mean = $\frac{1}{\lambda}$  |
| Testing goodness of fit             | $\chi^2$               | Degrees of freedom $\nu$    |

## How to Use These Notes

Follow the sidebar order. Each page provides formal distribution definitions, worked calculation
examples, and exam-style hypothesis testing problems. Start with Poisson and Geometric, then move to
continuous distributions, then chi-squared tests.
