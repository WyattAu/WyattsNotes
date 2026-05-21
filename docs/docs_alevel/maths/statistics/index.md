---
sidebar_label: Statistics
sidebar_position: 2
description:
  'Rigorous A-Level mathematics notes covering Statistics. Includes definitions, derivations, worked
  examples, and exam-style problems.'
---

# Statistics

Statistics is the science of collecting, analysing, and drawing conclusions from data under
uncertainty. A-Level Statistics covers data representation, probability theory, statistical
distributions, and hypothesis testing — the foundations of data-driven decision making.

## Topics Covered

### Data Representation

- **Types of data** — qualitative vs. quantitative, discrete vs. continuous, primary vs. secondary
- **Measures of central tendency** — mean $\bar{x} = \frac{\sum x}{n}$, median, mode; when each is
  appropriate
- **Measures of spread** — range, interquartile range (IQR), variance
  $\sigma^2 = \frac{\sum(x-\bar{x})^2}{n}$, standard deviation
- **Visual representations** — histograms (with varying class widths), cumulative frequency curves,
  box plots, stem-and-leaf diagrams
- **Outliers** — identification using $1.5 \times \text{IQR}$ or mean $\pm 2\sigma$; deciding
  whether to exclude

### Correlation and Regression

- **Scatter diagrams** — visual assessment of correlation (positive, negative, none)
- **Pearson's product-moment correlation coefficient** — $r$ measures linear correlation;
  $-1 \leq r \leq 1$
- **Regression line** — $y = a + bx$; least squares; interpreting $a$ (intercept) and $b$ (gradient)
  in context
- **Interpolation vs. extrapolation** — reliability of predictions within and beyond the data range

### Probability

- **Axioms** — $0 \leq P(A) \leq 1$, $P(\Omega) = 1$, $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
- **Conditional probability** — $P(A|B) = \frac{P(A \cap B)}{P(B)}$
- **Independence** — $P(A \cap B) = P(A) \times P(B)$
- **Tree diagrams and Venn diagrams** — systematic approaches to multi-stage probability problems
- **Mutually exclusive vs. independent** — these are different concepts; mutually exclusive events
  cannot be independent (unless one has probability 0)

### Statistical Distributions

- **Binomial distribution** — $X \sim \text{Bin}(n, p)$; $P(X = x) = \binom{n}{x}p^x(1-p)^{n-x}$;
  conditions (fixed trials, two outcomes, constant probability, independence)
- **Normal distribution** — $X \sim N(\mu, \sigma^2)$; bell curve, symmetry, the empirical rule
  ($68$-$95$-$99.7\%$)
- **Standard normal** — $Z = \frac{X - \mu}{\sigma}$; using tables for $P(Z < z)$
- **Approximations** — normal approximation to binomial when $n$ is large and $p \approx 0.5$

### Hypothesis Testing

- **Null and alternative hypotheses** — $H_0$ (no effect) vs. $H_1$ (effect exists); one-tailed vs.
  two-tailed
- **Test statistics** — calculating from sample data and comparing to critical values
- **Significance level** — $\alpha = 0.05$ or $0.01$; the probability of a Type I error
- **$p$-values** — $P(\text{observing this or more extreme} \mid H_0)$; reject $H_0$ if $p$-value
  $< \alpha$
- **Critical regions** — the set of values that lead to rejecting $H_0$
- **Binomial hypothesis tests** — testing a population proportion

## Study Tips

1. **Draw diagrams** — Venn diagrams for probability, scatter plots for correlation, normal
   distribution sketches for every $Z$-score question.
2. **Show full working in hypothesis tests** — state $H_0$, $H_1$, calculate the test statistic,
   find the $p$-value or critical value, compare, state conclusion in context.
3. **Know when to use Binomial vs. Normal** — Binomial for counting successes in fixed trials;
   Normal for continuous measurements with a bell-shaped distribution.
4. **Practise reading tables** — normal distribution tables and binomial tables require careful
   reading. Check whether the table gives $P(Z < z)$ or $P(Z > z)$.
5. **Interpret in context** — never just say "reject $H_0$"; say "there is sufficient evidence at
   the 5% significance level to suggest that the mean has increased."

## How to Use These Notes

Follow the sidebar order. Each page provides definitions, worked examples with full calculations,
and exam-style problems. Start with data representation and probability before moving to
distributions and hypothesis testing.
