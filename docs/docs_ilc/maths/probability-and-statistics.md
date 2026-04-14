---
title: Probability and Statistics
date: 2026-04-14
tags:
  - Mathematics
  - ILC
categories:
  - Mathematics
slug: probability-and-statistics
---

# Probability and Statistics

Probability and statistics appear on both papers of the Leaving Certificate Mathematics examination.
This topic covers counting principles, probability rules, distributions, hypothesis testing, and
statistical measures.

## Counting Principles

### Fundamental Counting Principle (OL/HL)

If task A can be done in $m$ ways and task B in $n$ ways, then A followed by B can be done in
$m \times n$ ways.

**Example (OL):** How many ways can 3 different books be arranged on a shelf?

$$
3! = 6
$$

### Permutations (OL/HL)

The number of arrangements of $r$ objects from $n$ distinct objects:

$$
P(n, r) = \frac{n!}{(n - r)!}
$$

**Example (HL):** How many ways can a committee chair, secretary, and treasurer be chosen from 10
people?

$$
P(10, 3) = \frac{10!}{7!} = 10 \times 9 \times 8 = 720
$$

### Combinations (OL/HL)

The number of ways to choose $r$ objects from $n$ distinct objects (order does not matter):

$$
\binom{n}{r} = \frac{n!}{r!(n - r)!}
$$

**Example (OL):** How many ways to choose 4 students from a class of 15?

$$
\binom{15}{4} = \frac{15!}{4! \cdot 11!} = \frac{15 \times 14 \times 13 \times 12}{4 \times 3 \times 2 \times 1} = 1365
$$

## Probability

### Basic Probability (OL/HL)

For an event $A$:

$$
P(A) = \frac{\text{number of favourable outcomes}}{\text{total number of outcomes}}
$$

Properties: $0 \leq P(A) \leq 1$ and $P(A') = 1 - P(A)$.

### Rules of Probability (OL/HL)

**Addition rule:**

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

**Multiplication rule (independent events):**

$$
P(A \cap B) = P(A) \cdot P(B)
$$

**Conditional probability:**

$$
P(A | B) = \frac{P(A \cap B)}{P(B)}
$$

**Example (HL):** A bag contains 4 red and 6 blue marbles. Two are drawn without replacement. Find
the probability both are red.

$$
P(\text{both red}) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}
$$

### Probability Trees (OL)

A probability tree diagram is useful for multi-stage experiments.

**Example (OL):** A coin is tossed three times. Find the probability of getting exactly two heads.

There are $2^3 = 8$ equally likely outcomes. The favourable outcomes are HHT, HTH, THH.

$$
P(\text{exactly 2 heads}) = \frac{3}{8}
$$

Alternatively using combinations:

$$
P = \frac{\binom{3}{2}}{2^3} = \frac{3}{8}
$$

## Discrete Probability Distributions

### Expected Value (OL/HL)

For a random variable $X$ with values $x_i$ and probabilities $p_i$:

$$
E(X) = \sum x_i p_i
$$

**Variance:**

$$
\text{Var}(X) = E(X^2) - [E(X)]^2 = \sum x_i^2 p_i - [E(X)]^2
$$

**Standard deviation:** $\sigma = \sqrt{\text{Var}(X)}$.

**Example (OL):** A fair die is rolled. Find $E(X)$ and $\text{Var}(X)$.

$$
E(X) = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5
$$

$$
E(X^2) = \frac{1+4+9+16+25+36}{6} = \frac{91}{6}
$$

$$
\text{Var}(X) = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.917
$$

### Binomial Distribution (HL)

$X \sim \text{Bin}(n, p)$ where $n$ is the number of trials and $p$ is the probability of success.

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

$$
E(X) = np, \quad \text{Var}(X) = np(1-p)
$$

**Example (HL):** A multiple-choice test has 20 questions, each with 4 options. A student guesses
every answer. Find the probability of getting exactly 5 correct.

$$
X \sim \text{Bin}(20, 0.25)
$$

$$
P(X = 5) = \binom{20}{5}(0.25)^5(0.75)^{15} \approx 0.2023
$$

### Normal Distribution (HL)

$X \sim N(\mu, \sigma^2)$. The standard normal $Z = \frac{X - \mu}{\sigma}$ has $Z \sim N(0, 1)$.

**Empirical rule (68-95-99.7):**

- $P(\mu - \sigma \lt X \lt \mu + \sigma) \approx 68.27\%$
- $P(\mu - 2\sigma \lt X \lt \mu + 2\sigma) \approx 95.45\%$
- $P(\mu - 3\sigma \lt X \lt \mu + 3\sigma) \approx 99.73\%$

**Example (HL):** Exam marks are normally distributed with $\mu = 60$, $\sigma = 10$. Find the
probability a student scores above 75.

$$
P(X > 75) = P\left(Z > \frac{75 - 60}{10}\right) = P(Z > 1.5) \approx 0.0668
$$

### Bernoulli Trials (HL)

A Bernoulli trial is a single experiment with two outcomes: success (probability $p$) and failure
(probability $1-p$). The binomial distribution models $n$ independent Bernoulli trials.

## Statistical Measures

### Measures of Central Tendency (OL/HL)

**Mean:** $\bar{x} = \frac{\sum x_i}{n}$

**Median:** The middle value when data is arranged in order.

**Mode:** The most frequently occurring value.

### Measures of Spread (OL/HL)

**Range:** $\text{Range} = \text{maximum} - \text{minimum}$

**Interquartile range (IQR):** $\text{IQR} = Q_3 - Q_1$

**Standard deviation:**

$$
s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n}}
$$

### Grouped Data (OL/HL)

For grouped data with class midpoints $x_i$ and frequencies $f_i$:

$$
\bar{x} = \frac{\sum f_i x_i}{\sum f_i}
$$

$$
s = \sqrt{\frac{\sum f_i x_i^2}{\sum f_i} - \bar{x}^2}
$$

## Hypothesis Testing (HL)

### Steps

1. State the null hypothesis $H_0$ and the alternative hypothesis $H_1$.
2. Choose the significance level $\alpha$ (typically 5%).
3. Calculate the test statistic.
4. Determine the critical value(s) or p-value.
5. Compare and make a decision.

### z-test for a Proportion (HL)

**Example:** A coin is tossed 200 times and lands on heads 115 times. Test at the 5% significance
level whether the coin is biased.

$H_0: p = 0.5$ (coin is fair) $H_1: p \neq 0.5$ (coin is biased)

Under $H_0$: $\mu = np = 100$, $\sigma = \sqrt{np(1-p)} = \sqrt{50} \approx 7.071$.

Using the normal approximation: $Z = \frac{115 - 100}{7.071} \approx 2.12$.

Critical values at $\alpha = 0.05$ (two-tailed): $z = \pm 1.96$.

Since $2.12 > 1.96$, we reject $H_0$. There is sufficient evidence to suggest the coin is biased.

### t-test for a Mean (HL)

When the population standard deviation is unknown and the sample size is small ($n < 30$), use the
t-distribution with $n - 1$ degrees of freedom.

$$
t = \frac{\bar{x} - \mu}{s / \sqrt{n}}
$$

## Correlation and Regression (HL)

### Scatter Plots and Correlation

A **scatter plot** displays pairs of data points. The **Pearson correlation coefficient** $r$
measures linear association:

$$
r = \frac{n\sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}
$$

$-1 \leq r \leq 1$. Values near $\pm 1$ indicate strong linear correlation.

### Line of Best Fit (Least Squares) (HL)

The regression line of $y$ on $x$ is:

$$
y = a + bx
$$

where:

$$
b = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}, \quad a = \bar{y} - b\bar{x}
$$

## Common Pitfalls

1. **Confusing permutations and combinations** -- order matters for permutations.
2. **Forgetting independence** in the multiplication rule -- always check whether events are
   independent.
3. **Normal distribution** -- always standardise before using tables.
4. **Hypothesis testing** -- clearly state $H_0$ and $H_1$ before computing.
5. **Binomial vs normal** -- use the binomial for discrete counts and normal for continuous
   measurements.
6. **Continuity correction** -- when approximating a binomial with a normal, apply a continuity
   correction (e.g., $P(X \leq 5) \approx P(X < 5.5)$).

## Practice Questions

### Ordinary Level

1. How many ways can 5 students be selected from a class of 20?
2. A fair six-sided die is rolled. Find the probability of rolling a number greater than 4.
3. A bag contains 3 red and 5 green balls. Two are drawn at random without replacement. Find the
   probability both are green.
4. Find the mean, median, and mode of: 3, 5, 5, 7, 8, 9, 12.
5. Given $E(X) = 4$ and $\text{Var}(X) = 9$, find $E(X^2)$.

### Higher Level

1. $X \sim \text{Bin}(15, 0.3)$. Find $P(X \geq 10)$.
2. Heights are normally distributed with $\mu = 170\text{ cm}$ and $\sigma = 8\text{ cm}$. Find the
   probability a randomly selected person is between 160 cm and 180 cm tall.
3. A sample of 8 measurements has $\bar{x} = 23.4$ and $s = 2.1$. Test at the 5% level whether the
   population mean is 25.
4. For the data set $\{(1,3), (2,5), (3,4), (4,7), (5,6)\}$, find the correlation coefficient $r$
   and the equation of the regression line of $y$ on $x$.
5. Prove that $\binom{n}{r} = \binom{n}{n-r}$.
