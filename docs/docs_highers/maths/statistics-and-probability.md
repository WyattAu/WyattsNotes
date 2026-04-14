---
title: Statistics and Probability
date: 2026-04-14
tags:
  - Mathematics
  - Highers
categories:
  - Mathematics
slug: statistics-and-probability
---

# Statistics and Probability

## Higher Statistics

### Measures of Central Tendency and Spread

**Mean:** $\bar{x} = \dfrac{\sum x_i}{n}$

**Standard Deviation:**

$$s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$$

For grouped data with frequencies $f_i$:

$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}, \quad s = \sqrt{\frac{\sum f_i(x_i - \bar{x})^2}{\sum f_i - 1}}$$

**Computational formula:**

$$s = \sqrt{\frac{\sum f_i x_i^2 - \frac{(\sum f_i x_i)^2}{\sum f_i}}{\sum f_i - 1}}$$

**Example:** Calculate the mean and standard deviation of the following data:

| $x$ | 2   | 4   | 6   | 8   | 10  |
| --- | --- | --- | --- | --- | --- |
| $f$ | 3   | 5   | 8   | 4   | 2   |

$$\bar{x} = \frac{3(2) + 5(4) + 8(6) + 4(8) + 2(10)}{3 + 5 + 8 + 4 + 2} = \frac{6 + 20 + 48 + 32 + 20}{22} = \frac{126}{22} \approx 5.73$$

$$\sum f_i x_i^2 = 3(4) + 5(16) + 8(36) + 4(64) + 2(100) = 12 + 80 + 288 + 256 + 200 = 836$$

$$s = \sqrt{\frac{836 - \frac{126^2}{22}}{21}} = \sqrt{\frac{836 - 721.636}{21}} = \sqrt{\frac{114.364}{21}} \approx 2.333$$

### Probability

**Basic Rules:**

$$P(A') = 1 - P(A)$$

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

For mutually exclusive events: $P(A \cap B) = 0$, so $P(A \cup B) = P(A) + P(B)$.

For independent events: $P(A \cap B) = P(A) \times P(B)$.

**Conditional Probability:**

$$P(A | B) = \frac{P(A \cap B)}{P(B)}$$

**Example:** In a school, 60% of students study Maths, 40% study Physics, and 25% study both. A
student is chosen at random.

(a) What is the probability they study at least one of Maths or Physics?

$$P(M \cup P) = 0.6 + 0.4 - 0.25 = 0.75$$

(b) Given that a student studies Physics, what is the probability they also study Maths?

$$P(M | P) = \frac{P(M \cap P)}{P(P)} = \frac{0.25}{0.40} = 0.625$$

### Binomial Distribution

A binomial distribution $X \sim B(n, p)$ describes the number of successes in $n$ independent
trials, each with probability of success $p$.

$$P(X = r) = \binom{n}{r} p^r (1-p)^{n-r}$$

**Mean:** $E(X) = np$

**Variance:** $\text{Var}(X) = np(1-p)$

**Example:** A fair die is rolled 8 times. Find the probability of getting exactly 3 sixes.

$$X \sim B(8, \tfrac{1}{6})$$

$$P(X = 3) = \binom{8}{3}\left(\frac{1}{6}\right)^3\left(\frac{5}{6}\right)^5$$

$$= 56 \times \frac{1}{216} \times \frac{3125}{7776}$$

$$= \frac{175000}{1679616} \approx 0.1042$$

### Normal Distribution

A continuous random variable $X$ has a normal distribution $X \sim N(\mu, \sigma^2)$ if its
probability density function is:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \, e^{-\frac{(x - \mu)^2}{2\sigma^2}}$$

**Standard Normal:** $Z = \dfrac{X - \mu}{\sigma}$, where $Z \sim N(0, 1)$.

**Properties:**

- The curve is symmetric about $x = \mu$
- Approximately 68% of data lies within one standard deviation of the mean
- Approximately 95% within two standard deviations
- Approximately 99.7% within three standard deviations

**Example:** The heights of Scottish men are normally distributed with mean 175 cm and standard
deviation 8 cm. Find the probability that a randomly chosen man is taller than 185 cm.

$$P(X > 185) = P\left(Z > \frac{185 - 175}{8}\right) = P(Z > 1.25)$$

From standard normal tables, $P(Z < 1.25) = 0.8944$.

$$P(Z > 1.25) = 1 - 0.8944 = 0.1056$$

**Example:** Exam scores are normally distributed with mean 60 and standard deviation 12. The top
10% of candidates receive an A grade. Find the minimum score for an A grade.

We need $P(X > a) = 0.10$, i.e., $P(X \leq a) = 0.90$.

From tables, $P(Z \leq 1.282) = 0.90$.

$$a = 60 + 1.282 \times 12 = 60 + 15.38 = 75.38$$

The minimum A grade score is approximately 75.

### Correlation and Regression

**Product Moment Correlation Coefficient (PMCC):**

$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \sum(y_i - \bar{y})^2}}$$

**Properties:**

- $-1 \leq r \leq 1$
- $r = 1$: perfect positive linear correlation
- $r = -1$: perfect negative linear correlation
- $r = 0$: no linear correlation

**Least Squares Regression Line:**

$$y - \bar{y} = \frac{S_{xy}}{S_{xx}}(x - \bar{x})$$

where $S_{xy} = \sum(x_i - \bar{x})(y_i - \bar{y})$ and $S_{xx} = \sum(x_i - \bar{x})^2$.

---

## Advanced Higher Statistics

### Probability Distributions

**Expected Value and Variance:**

$$E(X) = \sum x \cdot P(X = x)$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2$$

**Example:** A biased coin lands on heads with probability $p$. Let $X$ be the number of heads in 3
tosses.

$X \sim B(3, p)$.

$$E(X) = 3p, \quad \text{Var}(X) = 3p(1-p)$$

### Hypothesis Testing

**Steps:**

1. State the null hypothesis $H_0$ and alternative hypothesis $H_1$
2. State the significance level $\alpha$
3. Calculate the test statistic
4. Determine the critical region or $p$-value
5. Make a decision and state the conclusion

**Example:** A manufacturer claims that the mean weight of bags of sugar is 500 g. A sample of 16
bags has mean weight 497 g with standard deviation 5 g. Test at the 5% significance level whether
the mean weight differs from 500 g.

$H_0: \mu = 500$, $H_1: \mu \neq 500$.

Test statistic:
$t = \dfrac{\bar{x} - \mu_0}{s / \sqrt{n}} = \dfrac{497 - 500}{5/\sqrt{16}} = \dfrac{-3}{1.25} = -2.4$.

Critical values for $t$-distribution with 15 degrees of freedom at 5% (two-tailed): approximately
$\pm 2.131$.

Since $|-2.4| = 2.4 > 2.131$, we reject $H_0$. There is sufficient evidence to suggest the mean
weight differs from 500 g.

### Chi-Squared Test

Used to test for association between categorical variables.

$$\chi^2 = \sum \frac{(O_i - E_i)^2}{E_i}$$

where $O_i$ is the observed frequency and $E_i$ is the expected frequency.

**Example:** A survey investigates whether there is an association between gender and preferred
subject among 200 students:

|        | Maths | Science | English | Total |
| ------ | ----- | ------- | ------- | ----- |
| Male   | 40    | 35      | 15      | 90    |
| Female | 30    | 25      | 55      | 110   |
| Total  | 70    | 60      | 70      | 200   |

Expected frequencies:
$E_{ij} = \dfrac{\text{row total} \times \text{column total}}{\text{grand total}}$.

$$\chi^2 = \frac{(40 - 31.5)^2}{31.5} + \frac{(35 - 27)^2}{27} + \frac{(15 - 31.5)^2}{31.5} + \frac{(30 - 38.5)^2}{38.5} + \frac{(25 - 33)^2}{33} + \frac{(55 - 38.5)^2}{38.5}$$

$$= \frac{72.25}{31.5} + \frac{64}{27} + \frac{272.25}{31.5} + \frac{72.25}{38.5} + \frac{64}{33} + \frac{272.25}{38.5}$$

$$= 2.294 + 2.370 + 8.643 + 1.877 + 1.939 + 7.071 = 24.194$$

Degrees of freedom: $(2-1)(3-1) = 2$.

Critical value at 5% for 2 df: 5.991.

Since $24.194 > 5.991$, we reject $H_0$. There is significant evidence of an association.

---

## Common Pitfalls

1. **Using $n$ instead of $n - 1$ for sample standard deviation:** The sample standard deviation
   uses $n - 1$ (Bessel's correction) in the denominator.

2. **Confusing $P(A | B)$ with $P(B | A)$:** These are not the same. Use Bayes' theorem if needed.

3. **Forgetting continuity correction:** When approximating a discrete distribution (e.g., binomial)
   with a continuous one (normal), apply a continuity correction.

4. **Incorrect expected frequencies:** In a chi-squared test, expected frequencies must be
   calculated correctly using row and column totals.

5. **Not stating hypotheses clearly:** Always explicitly state $H_0$ and $H_1$ before performing a
   hypothesis test.

---

## Practice Questions

1. The weights of packets of crisps are normally distributed with mean 35 g and standard deviation
   1.5 g. Find the probability that a randomly chosen packet weighs between 33 g and 37 g.

2. $X \sim B(20, 0.3)$. Find $P(X \leq 5)$.

3. A company tests whether a new drug reduces blood pressure. In a sample of 25 patients, the mean
   reduction was 4.2 mmHg with standard deviation 3.1 mmHg. Test at the 1% significance level
   whether the drug reduces blood pressure (one-tailed test).

4. Calculate the PMCC for the following data and interpret the result:

| $x$ | 1   | 2   | 3   | 4   | 5   |
| --- | --- | --- | --- | --- | --- |
| $y$ | 2   | 5   | 6   | 9   | 11  |

5. In a group of 100 students, 55 study Maths, 40 study Chemistry, and 20 study both. A student is
   selected at random. Find the probability that they study neither subject.

6. A die is rolled until a 6 appears. Find the probability that more than 4 rolls are needed.

7. For the data in question 4, find the equation of the least squares regression line of $y$ on $x$
   and use it to predict $y$ when $x = 6$.

8. A survey of 300 people classified by age group and voting preference gives $\chi^2 = 12.4$ with 4
   degrees of freedom. Test at the 5% significance level whether there is an association between age
   and voting preference.
