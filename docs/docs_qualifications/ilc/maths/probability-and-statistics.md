---
title: Probability and Statistics
description:
  Probability and Statistics — Counting Principles; Fundamental Counting
  Principle (OL/HL); Permutations (OL/HL); Combinations (OL/HL).
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
$m \times n$ ways. This extends to any finite sequence of tasks: multiply the number of choices at
each step.

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

**Key identity:** $\binom{n}{r} = \binom{n}{n-r}$ (choosing $r$ to include equals choosing $n-r$ to
exclude).

**Proof of $\binom{n}{r} = \binom{n}{n-r}$:**

$$
\binom{n}{n-r} = \frac{n!}{(n-r)!(n-(n-r))!} = \frac{n!}{(n-r)! \cdot r!} = \binom{n}{r}
$$

**Example (OL):** How many ways to choose 4 students from a class of 15?

$$
\binom{15}{4} = \frac{15!}{4! \cdot 11!} = \frac{15 \times 14 \times 13 \times 12}{4 \times 3 \times 2 \times 1} = 1365
$$

### Arrangements with Repetition (HL)

The number of arrangements of $n$ objects where some objects are identical:

$$
\frac{n!}{n_1! \cdot n_2! \cdots n_k!}
$$

where $n_1, n_2, \ldots, n_k$ are the counts of each identical group.

**Example (HL):** How many arrangements of the word "STATISTICS"?

Total letters: 10. S appears 3 times, T appears 3 times, I appears 2 times.

$$
\frac{10!}{3! \cdot 3! \cdot 2!} = \frac{3628800}{6 \times 6 \times 2} = \frac{3628800}{72} = 50400
$$

### Pascal's Triangle and Binomial Coefficients (HL)

Each entry in Pascal's triangle is the sum of the two entries above it. The $r$th entry in row $n$
is $\binom{n}{r}$.

**Pascal's identity:** $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$.

**Proof of Pascal's identity.** Consider choosing $r$ people from $n$ people. Fix one particular
person, say Alice. Either Alice is chosen (leaving $\binom{n-1}{r-1}$ ways to choose the remaining
$r-1$ from $n-1$ others) or Alice is not chosen (leaving $\binom{n-1}{r}$ ways to choose all $r$
from $n-1$ others). These cases are mutually exclusive and exhaustive.

**Binomial theorem:** $(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r$.

**Example (HL):** Find the coefficient of $x^3$ in the expansion of $(2x + 1)^7$.

$$
\binom{7}{3}(2x)^3(1)^4 = 35 \cdot 8x^3 = 280x^3
$$

So the coefficient is $280$.

## Probability

### Basic Probability (OL/HL)

For an event $A$:

$$
P(A) = \frac{\mathrm{number of favourable outcomes}}{\mathrm{total number of outcomes}}
$$

Properties: $0 \leq P(A) \leq 1$ and $P(A') = 1 - P(A)$.

**Axioms of probability (Kolmogorov):**

1. $P(A) \ge 0$ for any event $A$
2. $P(\Omega) = 1$ where $\Omega$ is the sample space
3. For mutually exclusive events $A_1, A_2, \ldots$:
   $P\!\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$

### Rules of Probability (OL/HL)

**Addition rule:**

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

**Multiplication rule (independent events):**

$$
P(A \cap B) = P(A) \cdot P(B)
$$

Two events are **independent** if and only if $P(A \cap B) = P(A)P(B)$. This is not the same as
mutually exclusive (which means $P(A \cap B) = 0$).

**Conditional probability:**

$$
P(A | B) = \frac{P(A \cap B)}{P(B)}
$$

**Law of Total Probability (HL):** If $B_1, B_2, \ldots, B_n$ partition the sample space:

$$
P(A) = \sum_{i=1}^{n} P(A | B_i)P(B_i)
$$

**Bayes' Theorem (HL):**

$$
P(A | B) = \frac{P(B | A) \cdot P(A)}{P(B)}
$$

This is extremely important in real-world applications: medical testing, spam filtering, and machine
learning all rely on Bayes' theorem.

**Extended Bayes' Theorem.** If $B_1, B_2, \ldots, B_n$ partition the sample space:

$$
P(B_i | A) = \frac{P(A | B_i)P(B_i)}{\sum_{j=1}^{n} P(A | B_j)P(B_j)}
$$

**Example (HL):** A bag contains 4 red and 6 blue marbles. Two are drawn without replacement. Find
the probability both are red.

$$
P(\mathrm{both red}) = \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} = \frac{2}{15}
$$

**Example (HL) -- Bayes' theorem:** A test for a disease has 95% sensitivity (true positive rate)
and 2% false positive rate. The disease prevalence is 1%. Find the probability that a person who
tests positive actually has the disease.

$P(D) = 0.01$, $P(D') = 0.99$, $P(+|D) = 0.95$, $P(+|D') = 0.02$.

$$
P(D|+) = \frac{P(+|D)P(D)}{P(+)} = \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.02 \times 0.99} = \frac{0.0095}{0.0095 + 0.0198} = \frac{0.0095}{0.0293} \approx 0.324
$$

Only about 32.4% of positive tests are true positives. This is the "base rate fallacy."

**Example (HL) -- Extended Bayes':** A factory has three machines producing bolts. Machine A
produces 50% of bolts with 2% defect rate, Machine B produces 30% with 3% defect rate, Machine C
produces 20% with 1% defect rate. A randomly selected bolt is defective. What is the probability it
came from Machine B?

$$
P(B|\mathrm{def}) = \frac{P(\mathrm{def}|B)P(B)}{P(\mathrm{def}|A)P(A) + P(\mathrm{def}|B)P(B) + P(\mathrm{def}|C)P(C)}
$$

$$
= \frac{0.03 \times 0.30}{0.02 \times 0.50 + 0.03 \times 0.30 + 0.01 \times 0.20} = \frac{0.009}{0.010 + 0.009 + 0.002} = \frac{0.009}{0.021} = \frac{3}{7} \approx 0.429
$$

### Probability Trees (OL)

A probability tree diagram is useful for multi-stage experiments.

**Example (OL):** A coin is tossed three times. Find the probability of getting exactly two heads.

There are $2^3 = 8$ equally likely outcomes. The favourable outcomes are HHT, HTH, THH.

$$
P(\mathrm{exactly 2 heads}) = \frac{3}{8}
$$

Alternatively using combinations:

$$
P = \frac{\binom{3}{2}}{2^3} = \frac{3}{8}
$$

### Independence vs. Mutually Exclusive (HL)

These concepts are frequently confused:

| Property            | Independent                                 | Mutually Exclusive |
| ------------------- | ------------------------------------------- | ------------------ | ---- | ------- |
| Definition          | $P(A \cap B) = P(A)P(B)$                    | $P(A \cap B) = 0$  |
| Meaning             | Occurrence of one does not affect the other | Cannot both occur  |
| If $P(A), P(B) > 0$ | $P(A                                        | B) = P(A)$         | $P(A | B) = 0$ |

**Important:** If two events with positive probability are mutually exclusive, they cannot be
independent (since $P(A \cap B) = 0 \neq P(A)P(B)$ when both probabilities are positive).

## Discrete Probability Distributions

### Expected Value (OL/HL)

For a random variable $X$ with values $x_i$ and probabilities $p_i$:

$$
E(X) = \sum x_i p_i
$$

**Variance:**

$$
\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \sum x_i^2 p_i - [E(X)]^2
$$

**Standard deviation:** $\sigma = \sqrt{\mathrm{Var}(X)}$.

**Properties:**

- $E(aX + b) = aE(X) + b$
- $\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$

**Proof of $\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$:**

$$
\mathrm{Var}(aX + b) = E[(aX + b)^2] - [E(aX + b)]^2
$$

$$
= E[a^2X^2 + 2abX + b^2] - [aE(X) + b]^2
$$

$$
= a^2E(X^2) + 2abE(X) + b^2 - a^2[E(X)]^2 - 2abE(X) - b^2
$$

$$
= a^2[E(X^2) - (E(X))^2] = a^2\mathrm{Var}(X)
$$

**Example (OL):** A fair die is rolled. Find $E(X)$ and $\mathrm{Var}(X)$.

$$
E(X) = \frac{1+2+3+4+5+6}{6} = \frac{21}{6} = 3.5
$$

$$
E(X^2) = \frac{1+4+9+16+25+36}{6} = \frac{91}{6}
$$

$$
\mathrm{Var}(X) = \frac{91}{6} - \frac{49}{4} = \frac{182 - 147}{12} = \frac{35}{12} \approx 2.917
$$

### Binomial Distribution (HL)

$X \sim \mathrm{Bin}(n, p)$ where $n$ is the number of trials and $p$ is the probability of success.

$$
P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}
$$

$$
E(X) = np, \quad \mathrm{Var}(X) = np(1-p)
$$

**Conditions:** fixed $n$, independent trials, two outcomes, constant $p$.

**Proof that $E(X) = np$ for $X \sim \mathrm{Bin}(n, p)$.** Let $X_i$ be the indicator variable for
success on trial $i$ (so $X_i = 1$ with probability $p$, $X_i = 0$ with probability $1-p$). Then
$X = X_1 + X_2 + \cdots + X_n$ and $E(X_i) = p$, so $E(X) = np$.

**Example (HL):** A multiple-choice test has 20 questions, each with 4 options. A student guesses
every answer. Find the probability of getting exactly 5 correct.

$$
X \sim \mathrm{Bin}(20, 0.25)
$$

$$
P(X = 5) = \binom{20}{5}(0.25)^5(0.75)^{15} \approx 0.2023
$$

### Poisson Distribution (HL)

$X \sim \mathrm{Po}(\lambda)$ models the number of events occurring in a fixed interval when events
happen independently at a constant average rate $\lambda$.

$$
P(X = k) = \frac{e^{-\lambda}\lambda^k}{k!}, \quad k = 0, 1, 2, \ldots
$$

$$
E(X) = \lambda, \quad \mathrm{Var}(X) = \lambda
$$

**Conditions:** events occur independently, at a constant average rate, and singly (not in
clusters).

**Example (HL):** A call centre receives an average of 4.5 calls per minute. Find the probability of
receiving exactly 3 calls in a given minute.

$$
X \sim \mathrm{Po}(4.5)
$$

$$
P(X = 3) = \frac{e^{-4.5}(4.5)^3}{3!} = \frac{e^{-4.5} \times 91.125}{6} \approx \frac{0.01111 \times 91.125}{6} \approx 0.1687
$$

**Example (HL):** Using the same call centre, find $P(X \le 2)$.

$$
P(X \le 2) = P(X=0) + P(X=1) + P(X=2) = e^{-4.5}\left(1 + 4.5 + \frac{4.5^2}{2}\right) = e^{-4.5}(1 + 4.5 + 10.125) = 15.625 \times e^{-4.5} \approx 0.1736
$$

### Normal Distribution (HL)

$X \sim N(\mu, \sigma^2)$. The standard normal $Z = \frac{X - \mu}{\sigma}$ has $Z \sim N(0, 1)$.

**Empirical rule (68-95-99.7):**

- $P(\mu - \sigma \lt X \lt \mu + \sigma) \approx 68.27\%$
- $P(\mu - 2\sigma \lt X \lt \mu + 2\sigma) \approx 95.45\%$
- $P(\mu - 3\sigma \lt X \lt \mu + 3\sigma) \approx 99.73\%$

**Why the normal distribution is special.** The Central Limit Theorem states that the mean of a
large number of independent random variables is approximately normally distributed, regardless of
the original distribution. This is why the normal distribution appears everywhere in nature.

**Example (HL):** Exam marks are normally distributed with $\mu = 60$, $\sigma = 10$. Find the
probability a student scores above 75.

$$
P(X > 75) = P\left(Z > \frac{75 - 60}{10}\right) = P(Z > 1.5) \approx 0.0668
$$

### Normal Approximation to the Binomial (HL)

When $np \ge 5$ and $n(1-p) \ge 5$:

$$
X \sim \mathrm{Bin}(n, p) \approx N(np, np(1-p))
$$

Apply a **continuity correction**:
$P(X \le k) \approx P\!\left(Z \lt \frac{k + 0.5 - np}{\sqrt{np(1-p)}}\right)$.

**Why continuity correction is needed.** The binomial is discrete (defined on integers) while the
normal is continuous. Without the correction, we would compute $P(X \le 5) = P(X \lt 6)$, but the
normal approximation for $P(X \lt 5)$ would miss the entire bar at $X = 5$.

### Bernoulli Trials (HL)

A Bernoulli trial is a single experiment with two outcomes: success (probability $p$) and failure
(probability $1-p$). The binomial distribution models $n$ independent Bernoulli trials.

## Statistical Measures

### Measures of Central Tendency (OL/HL)

**Mean:** $\bar{x} = \frac{\sum x_i}{n}$

**Median:** The middle value when data is arranged in order.

**Mode:** The most frequently occurring value.

### Measures of Spread (OL/HL)

**Range:** $\mathrm{Range} = \mathrm{maximum} - \mathrm{minimum}$

**Interquartile range (IQR):** $\mathrm{IQR} = Q_3 - Q_1$

**Standard deviation:**

$$
s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n}}
$$

**Computational formula:**

$$
s = \sqrt{\frac{\sum x_i^2}{n} - \bar{x}^2}
$$

### Grouped Data (OL/HL)

For grouped data with class midpoints $x_i$ and frequencies $f_i$:

$$
\bar{x} = \frac{\sum f_i x_i}{\sum f_i}
$$

$$
s = \sqrt{\frac{\sum f_i x_i^2}{\sum f_i} - \bar{x}^2}
$$

### Box Plots (HL)

A box plot displays five statistics: minimum, $Q_1$, median, $Q_3$, maximum.

**Outlier:** A value below $Q_1 - 1.5 \times \mathrm{IQR}$ or above $Q_3 + 1.5 \times \mathrm{IQR}$.

**Example (HL):** A data set has $Q_1 = 25$, $Q_3 = 45$, minimum $= 10$, maximum $= 65$. Identify
any outliers.

$\mathrm{IQR} = 45 - 25 = 20$.

Lower fence: $25 - 1.5(20) = -5$. Since the minimum is $10 > -5$, no low outliers.

Upper fence: $45 + 1.5(20) = 75$. Since the maximum is $65 < 75$, no high outliers.

### Skewness (HL)

- **Positive skew:** Mean > Median (right tail is longer). The mode is less than the median.
- **Negative skew:** Mean < Median (left tail is longer). The mode is greater than the median.
- **Symmetric:** Mean = Median.

In a box plot, positive skew means the right whisker is longer; negative skew means the left whisker
is longer.

## Hypothesis Testing (HL)

### Steps

1. State the null hypothesis $H_0$ and the alternative hypothesis $H_1$.
2. Choose the significance level $\alpha$ (typically 5%).
3. Calculate the test statistic.
4. Determine the critical value(s) or p-value.
5. Compare and make a decision.
6. State the conclusion in context.

### One-Tailed vs. Two-Tailed Tests (HL)

| Feature         | One-tailed             | Two-tailed              |
| --------------- | ---------------------- | ----------------------- |
| $H_1$           | $p > p_0$ or $p < p_0$ | $p \neq p_0$            |
| Critical region | One tail only          | Both tails              |
| Critical value  | $z_{1-\alpha}$         | $z_{1-\alpha/2}$        |
| p-value         | One tail area          | Two tail areas combined |

:::warning Choose one-tailed or two-tailed before collecting data. Never decide after seeing the
results.
:::

### z-test for a Proportion (HL)

**Example:** A coin is tossed 200 times and lands on heads 115 times. Test at the 5% significance
level whether the coin is biased.

$H_0: p = 0.5$ (coin is fair), $H_1: p \neq 0.5$ (coin is biased).

Under $H_0$: $\mu = np = 100$, $\sigma = \sqrt{np(1-p)} = \sqrt{50} \approx 7.071$.

Using the normal approximation with continuity correction:
$Z = \frac{114.5 - 100}{7.071} \approx 2.05$.

Critical values at $\alpha = 0.05$ (two-tailed): $z = \pm 1.96$.

Since $2.05 > 1.96$, we reject $H_0$. There is sufficient evidence to suggest the coin is biased.

### t-test for a Mean (HL)

When the population standard deviation is unknown and the sample size is small ($n < 30$), use the
t-distribution with $n - 1$ degrees of freedom.

$$
t = \frac{\bar{x} - \mu}{s / \sqrt{n}}
$$

**Example (HL):** A sample of 8 measurements has $\bar{x} = 23.4$ and $s = 2.1$. Test at the 5%
level whether the population mean is 25.

$H_0: \mu = 25$, $H_1: \mu \neq 25$.

$$
t = \frac{23.4 - 25}{2.1/\sqrt{8}} = \frac{-1.6}{0.7423} \approx -2.156
$$

Degrees of freedom $= 7$. The critical value from t-tables at $\alpha = 0.05$ (two-tailed, 7 df) is
approximately $\pm 2.365$.

Since $|-2.156| = 2.156 < 2.365$, we do not reject $H_0$. There is insufficient evidence to conclude
the population mean differs from 25.

### Type I and Type II Errors (HL)

| Error Type | Description                                 | Probability |
| ---------- | ------------------------------------------- | ----------- |
| Type I     | Rejecting $H_0$ when $H_0$ is true          | $\alpha$    |
| Type II    | Failing to reject $H_0$ when $H_0$ is false | $\beta$     |

The **power** of a test is $1 - \beta$: the probability of correctly rejecting a false $H_0$.

### Confidence Intervals (HL)

A 95% confidence interval for the population mean $\mu$ when $\sigma$ is known:

$$
\bar{x} \pm 1.96 \frac{\sigma}{\sqrt{n}}
$$

When $\sigma$ is unknown (use sample standard deviation $s$ with $n - 1$ degrees of freedom):

$$
\bar{x} \pm t_{n-1,\, 0.025} \frac{s}{\sqrt{n}}
$$

**Interpretation:** If we were to take many samples and construct a 95% confidence interval from
each, approximately 95% of those intervals would contain the true population mean. It does NOT mean
there is a 95% probability that $\mu$ lies in any particular interval.

## Correlation and Regression (HL)

### Scatter Plots and Correlation

A **scatter plot** displays pairs of data points. The **Pearson correlation coefficient** $r$
measures linear association:

$$
r = \frac{n\sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}
$$

$-1 \le r \le 1$. Values near $\pm 1$ indicate strong linear correlation. $r = 0$ means no linear
correlation (but there may be a non-linear relationship).

**Important:** Correlation does not imply causation.

### Coefficient of Determination (HL)

The coefficient of determination $r^2$ represents the proportion of variance in $y$ explained by the
linear relationship with $x$.

If $r = 0.8$, then $r^2 = 0.64$, meaning 64% of the variation in $y$ is accounted for by the linear
regression on $x$. The remaining 36% is due to other factors.

### Line of Best Fit (Least Squares) (HL)

The regression line of $y$ on $x$ is:

$$
y = a + bx
$$

where:

$$
b = \frac{n\sum xy - \sum x \sum y}{n\sum x^2 - (\sum x)^2}, \quad a = \bar{y} - b\bar{x}
$$

The least squares line minimises $\sum(y_i - (a + bx_i))^2$.

**Example (HL):** For the data set $\{(1,3), (2,5), (3,4), (4,7), (5,6)\}$, find the correlation
coefficient and regression line.

$n = 5$, $\sum x = 15$, $\sum y = 25$, $\sum xy = 1(3)+2(5)+3(4)+4(7)+5(6) = 3+10+12+28+30 = 83$,
$\sum x^2 = 1+4+9+16+25 = 55$, $\sum y^2 = 9+25+16+49+36 = 135$.

$$
r = \frac{5(83) - 15(25)}{\sqrt{[5(55) - 225][5(135) - 625]}} = \frac{415 - 375}{\sqrt{[275 - 225][675 - 625]}} = \frac{40}{\sqrt{50 \times 50}} = \frac{40}{50} = 0.8
$$

$$
b = \frac{40}{50} = 0.8, \quad a = \frac{25}{5} - 0.8 \times \frac{15}{5} = 5 - 2.4 = 2.6
$$

Regression line: $y = 0.8x + 2.6$.

$r^2 = 0.64$: 64% of the variation in $y$ is explained by the linear relationship with $x$.

**Warning:** The regression line of $y$ on $x$ should only be used for prediction within the range
of the data (interpolation). Extrapolation beyond the data range is unreliable.

## Common Pitfalls

1. **Confusing permutations and combinations** -- order matters for permutations, not for
   combinations. Ask: "Is `\{A,B,C\}` the same as `\{C,B,A\}`?"
2. **Forgetting independence** in the multiplication rule -- always check whether events are
   independent before using $P(A \cap B) = P(A)P(B)$.
3. **Normal distribution** -- always standardise before using tables. $Z = \frac{X - \mu}{\sigma}$.
4. **Hypothesis testing** -- clearly state $H_0$ and $H_1$ before computing. The conclusion must
   address the original question in context.
5. **Binomial vs normal** -- use the binomial for discrete counts and normal for continuous
   measurements. Use the normal approximation only when the conditions are met.
6. **Continuity correction** -- when approximating a binomial with a normal, apply a continuity
   correction (e.g., $P(X \le 5) \approx P(X < 5.5)$).
7. **Base rate fallacy** -- in Bayes' theorem problems, the prior probability matters enormously. A
   test with 99% accuracy can still have a low positive predictive value if the condition is rare.
8. **Confusing independence with mutual exclusivity** -- mutually exclusive events with positive
   probability are never independent.
9. **Forgetting to check conditions** for the Poisson distribution -- events must occur
   independently at a constant rate.
10. **Interpreting confidence intervals incorrectly** -- a 95% CI does not mean there is a 95%
    probability that $\mu$ lies in the interval.

## Practice Questions

### Ordinary Level

1. How many ways can 5 students be selected from a class of 20?
2. A fair six-sided die is rolled. Find the probability of rolling a number greater than 4.
3. A bag contains 3 red and 5 green balls. Two are drawn at random without replacement. Find the
   probability both are green.
4. Find the mean, median, and mode of: 3, 5, 5, 7, 8, 9, 12.
5. Given $E(X) = 4$ and $\mathrm{Var}(X) = 9$, find $E(X^2)$.
6. In a class of 35 students, 20 study maths, 15 study physics, and 8 study both. How many study
   neither?

### Higher Level

1. $X \sim \mathrm{Bin}(15, 0.3)$. Find $P(X \geq 10)$.
2. Heights are normally distributed with $\mu = 170\mathrm{ cm}$ and $\sigma = 8\mathrm{ cm}$. Find the
   probability a randomly selected person is between 160 cm and 180 cm tall.
3. A sample of 8 measurements has $\bar{x} = 23.4$ and $s = 2.1$. Test at the 5% level whether the
   population mean is 25.
4. For the data set $\{(1,3), (2,5), (3,4), (4,7), (5,6)\}$, find the correlation coefficient $r$
   and the equation of the regression line of $y$ on $x$.
5. Prove that $\binom{n}{r} = \binom{n}{n-r}$.
6. A test for a disease has 99% sensitivity and 1% false positive rate. If 0.5% of the population
   has the disease, find the probability that a positive test result is a true positive.
7. $X \sim \mathrm{Bin}(80, 0.6)$. Use the normal approximation with continuity correction to estimate
   $P(X \le 50)$.
8. Find the number of ways to arrange the letters of the word "STATISTICS".
9. A helpdesk receives an average of 3.2 emails per hour. Find the probability of receiving more
   than 5 emails in a given hour.
10. A 95% confidence interval for a mean is $(12.3, 15.7)$ based on a sample of size $n = 25$. Find
    $\bar{x}$ and the margin of error.
11. Prove that $\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$.
12. Two events $A$ and $B$ satisfy $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \cup B) = 0.7$. Determine
    whether $A$ and $B$ are independent.
13. Find the coefficient of $x^4$ in the expansion of $(1 - 2x)^8$.
14. Explain the difference between Type I and Type II errors in hypothesis testing.
15. $X \sim \mathrm{Po}(2.5)$. Find $P(1 < X < 5)$.
16. A factory produces items with a defect rate of 5%. In a sample of 200 items, use the normal
    approximation to estimate the probability of finding more than 12 defective items.
17. Prove Pascal's identity: $\binom{n}{r} = \binom{n-1}{r-1} + \binom{n-1}{r}$.
18. A random variable $X$ has $E(X) = 5$ and $\mathrm{Var}(X) = 4$. Find $E(3X - 2)$ and
    $\mathrm{Var}(3X - 2)$.
19. Two dice are rolled. Find the probability that the sum is prime given that at least one die
    shows a 4.
20. Explain why a high correlation coefficient does not necessarily mean that one variable causes
    the other. Give an example.

### Extended Practice

21. Prove that for any two events $A$ and $B$: $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.
22. Find the expected value and variance of $X \sim \mathrm{Po}(4)$.
23. A sample of 50 students has a mean study time of 15.2 hours per week with standard deviation 4.3
    hours. Construct a 95% confidence interval for the population mean.
24. Use the binomial expansion to find the first four terms of $(1 + x)^{10}$.
25. A quality control inspector checks items from a production line. The probability of a defect is
    0.02. In a batch of 100 items, find the probability of at most 3 defects using the Poisson
    approximation.
26. Given the data below, calculate the Spearman rank correlation coefficient:

    | $x$ | 1   | 2   | 3   | 4   | 5   |
    | --- | --- | --- | --- | --- | --- |
    | $y$ | 3   | 1   | 4   | 2   | 5   |

27. Prove that if $A$ and $B$ are independent, then so are $A$ and $B'$.
28. The regression line of $y$ on $x$ is $y = 2.5x - 3.0$ and the regression line of $x$ on $y$ is
    $x = 0.35y + 1.2$. Find $\bar{x}$, $\bar{y}$, and the correlation coefficient $r$.

### 8.4 Poisson Approximation to the Binomial

When $n$ is large, $p$ is small, and $np$ is moderate, the binomial distribution can be approximated
by a Poisson distribution with $\lambda = np$:

$$
\mathrm{Bin}(n, p) \approx \mathrm{Po}(np)
$$

This avoids calculating large binomial coefficients. As a rule of thumb, the approximation is good
when $n \ge 50$ and $p \le 0.1$.

**Example (HL):** A machine produces items with a defect rate of 2%. In a batch of 200 items, find
the probability of at most 3 defects using the Poisson approximation.

$\lambda = np = 200 \times 0.02 = 4$.

$$
P(X \le 3) = P(X=0) + P(X=1) + P(X=2) + P(X=3) = e^{-4}\left(1 + 4 + \frac{16}{2} + \frac{64}{6}\right) = e^{-4}(1 + 4 + 8 + 10.667) = 23.667 \times e^{-4} \approx 0.4335
$$

### 8.5 Choosing the Right Distribution

| Distribution | When to use                                        | Parameters      |
| ------------ | -------------------------------------------------- | --------------- |
| Binomial     | Fixed number of trials, two outcomes, constant $p$ | $n, p$          |
| Poisson      | Events occur at constant rate, independently       | $\lambda$       |
| Normal       | Continuous data, symmetric bell shape              | $\mu, \sigma^2$ |

:::tip If a question mentions "per unit time" or "per unit area" and events are rare, think Poisson.
If it mentions "out of $n$ trials," think Binomial.
:::

### 8.6 Relationship Between Distributions

The three main distributions covered in this topic are connected:

- **Binomial to Normal:** When $n$ is large and $p$ is not too close to 0 or 1,
  $\mathrm{Bin}(n,p) \approx N(np, np(1-p))$.
- **Binomial to Poisson:** When $n$ is large and $p$ is small,
  $\mathrm{Bin}(n,p) \approx \mathrm{Po}(np)$.
- **Poisson to Normal:** When $\lambda$ is large (typically $\lambda > 15$),
  $\mathrm{Po}(\lambda) \approx N(\lambda, \lambda)$.

### 8.7 Law of Large Numbers (HL - awareness)

The law of large numbers states that as the number of trials increases, the sample mean converges to
the expected value. Formally, for i.i.d. random variables $X_1, X_2, \ldots$ with mean $\mu$:

$$
\bar{X}_n = \frac{X_1 + X_2 + \cdots + X_n}{n} \to \mu \mathrm{ as } n \to \infty
$$

This is why a coin tossed many times gives a proportion of heads close to 0.5, even if short
sequences may deviate significantly.
