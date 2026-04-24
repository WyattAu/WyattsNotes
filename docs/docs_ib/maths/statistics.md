---
title: Statistics
description:
  IB Mathematics — descriptive statistics, correlation, regression, conditional probability, and
  combinatorics.
slug: statistics
---

## Descriptive Statistics

### Measures of Central Tendency

**Mean.** The arithmetic mean of $x_1, x_2, \ldots, x_n$:

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i$$

For grouped data with class midpoints $x_i$ and frequencies $f_i$:

$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}$$

**Median.** The middle value of ordered data. If $n$ is odd, the median is $x_{(n+1)/2}$. If $n$ is
even, it is $\dfrac{x_{n/2} + x_{n/2 + 1}}{2}$.

**Mode.** The most frequently occurring value. A distribution may be unimodal, bimodal, or have no
mode.

### Measures of Spread

**Range.** $\mathrm{Range} = x_{\max} - x_{\min}$

**Interquartile range (IQR).** $\mathrm{IQR} = Q_3 - Q_1$

where $Q_1$ is the 25th percentile and $Q_3$ is the 75th percentile.

**Variance.** The population variance is:

$$\sigma^2 = \frac{1}{N}\sum_{i=1}^{N} (x_i - \mu)^2$$

The sample variance (unbiased estimator) is:

$$s^2 = \frac{1}{n - 1}\sum_{i=1}^{n} (x_i - \bar{x})^2$$

**Computational formula:**

$$s^2 = \frac{\sum x_i^2 - n\bar{x}^2}{n - 1} = \frac{n\sum x_i^2 - (\sum x_i)^2}{n(n - 1)}$$

**Standard deviation.** $s = \sqrt{s^2}$, measured in the same units as the data.

### Box-and-Whisker Plots

A box plot displays five key statistics: minimum, $Q_1$, median, $Q_3$, maximum. **Outliers** are
points more than $1.5 \times \mathrm{IQR}$ below $Q_1$ or above $Q_3$.

---

## Grouped Data

### Estimating the Mean and Standard Deviation

For grouped data in classes $[a_i, b_i)$ with frequency $f_i$, use the class midpoint
$x_i = \dfrac{a_i + b_i}{2}$:

$$\bar{x} \approx \frac{\sum f_i x_i}{\sum f_i}$$

### Estimating the Median from a Grouped Frequency Distribution

1. Calculate cumulative frequencies to identify the median class.
2. Use linear interpolation within the median class:

$$\mathrm{Median} \approx L + \left(\frac{\frac{n}{2} - F}{f}\right) \cdot w$$

where $L$ is the lower boundary of the median class, $F$ is the cumulative frequency before the
median class, $f$ is the frequency of the median class, and $w$ is the class width.

### Histograms

In a histogram, the area of each bar represents the frequency, not the height. The height (frequency
density) is:

$$\mathrm{Frequency density} = \frac{\mathrm{Frequency}}{\mathrm{Class width}}$$

---

## Correlation

### Scatter Diagrams

A scatter diagram plots bivariate data points $(x_i, y_i)$. Visual inspection reveals the direction
and strength of association.

### Pearson's Product-Moment Correlation Coefficient

$$r = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum(x_i - \bar{x})^2 \cdot \sum(y_i - \bar{y})^2}} = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}}$$

where $S_{xy} = \sum x_i y_i - n\bar{x}\bar{y}$, $S_{xx} = \sum x_i^2 - n\bar{x}^2$, and
$S_{yy} = \sum y_i^2 - n\bar{y}^2$.

**Properties:**

- $-1 \le r \le 1$
- $r = 1$: perfect positive linear correlation
- $r = -1$: perfect negative linear correlation
- $r = 0$: no **linear** correlation (nonlinear relationships may exist)
- Correlation does **not** imply causation

### Spearman's Rank Correlation Coefficient

For ordinal data or when the relationship is monotonic but not linear:

$$r_s = 1 - \frac{6\sum d_i^2}{n(n^2 - 1)}$$

where $d_i$ is the difference in ranks of the $i$-th pair. This formula applies when ranks are
distinct (no ties).

---

## Linear Regression

### Least Squares Method

The **regression line of $y$ on $x$** minimises $\sum(y_i - \hat{y}_i)^2$:

$$y = a + bx$$

where:

$$b = \frac{S_{xy}}{S_{xx}} = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}, \qquad a = \bar{y} - b\bar{x}$$

The line always passes through $(\bar{x}, \bar{y})$.

### Interpolation and Extrapolation

- **Interpolation:** predicting within the range of observed data (generally reliable)
- **Extrapolation:** predicting outside the observed range (unreliable; the linear model may not
  hold)

### Coefficient of Determination

$$R^2 = r^2$$

$R^2$ represents the proportion of variance in $y$ explained by the linear relationship with $x$.
For example, $R^2 = 0.81$ means 81% of the variation in $y$ is accounted for by the regression.

---

## Conditional Probability

### Definition

The **conditional probability** of $A$ given $B$ is:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) \gt 0$$

### Multiplication Rule

$$P(A \cap B) = P(A \mid B) \cdot P(B) = P(B \mid A) \cdot P(A)$$

For independent events: $P(A \cap B) = P(A) \cdot P(B)$, and $P(A \mid B) = P(A)$.

### Total Probability

If $B_1, B_2, \ldots, B_n$ partition the sample space ($B_i$ are mutually exclusive and exhaustive):

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i)$$

### Bayes' Theorem

$$P(B_j \mid A) = \frac{P(A \mid B_j) \cdot P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i)}$$

Bayes' theorem inverts a conditional probability. It is foundational to Bayesian inference, medical
testing, spam filtering, and machine learning.

**Example.** A test for a disease has sensitivity $P(+\mid D) = 0.95$ and specificity
$P(-\mid D^c) = 0.98$. If the disease prevalence is $P(D) = 0.01$, find $P(D \mid +)$.

$$P(D \mid +) = \frac{P(+\mid D)\,P(D)}{P(+\mid D)\,P(D) + P(+\mid D^c)\,P(D^c)} = \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.02 \times 0.99} = \frac{0.0095}{0.0293} \approx 0.324$$

Despite a positive test, the probability of actually having the disease is only about 32%, due to
the low prevalence. This is the **base rate fallacy**.

---

## Combinatorics

### Factorial

$$n! = n \times (n-1) \times \cdots \times 2 \times 1, \quad 0! = 1$$

### Permutations

The number of ways to arrange $n$ distinct objects in order:

$${}^n P_r = \frac{n!}{(n - r)!}$$

When all $n$ objects are arranged: ${}^n P_n = n!$.

### Combinations

The number of ways to choose $r$ objects from $n$ without regard to order:

$${n \choose r} = \frac{n!}{r!(n - r)!}$$

**Key identity:** ${n \choose r} = {n \choose n - r}$

### Counting Principles

**Addition principle.** If task A can be done in $m$ ways and task B in $n$ ways, and the tasks are
mutually exclusive, then A or B can be done in $m + n$ ways.

**Multiplication principle.** If task A can be done in $m$ ways and for each way, task B can be done
in $n$ ways, then A followed by B can be done in $m \times n$ ways.

### Arrangements with Repetition

The number of distinct arrangements of $n$ objects where there are $n_1$ identical of type 1, $n_2$
identical of type 2, etc.:

$$\frac{n!}{n_1!\, n_2!\, \cdots\, n_k!}$$

### Applications to Probability

When outcomes are equally likely:

$$P(\mathrm{event}) = \frac{\mathrm{number of favourable outcomes}}{\mathrm{total number of outcomes}}$$

---

## Common Pitfalls

1. **Confusing $n$ and $n - 1$ in variance.** Use $n$ for population variance and $n - 1$ for sample
   variance (Bessel's correction). The IB generally uses $n$ for frequency tables and $n - 1$ for
   sample standard deviation.

2. **Correlation versus causation.** A high correlation between two variables does not mean one
   causes the other. Confounding variables may explain the association.

3. **Extrapolation.** Do not use a regression line to make predictions far outside the range of the
   data. The linear model may not hold.

4. **Base rate fallacy.** When applying Bayes' theorem, always account for the prior probability. A
   test with 99% accuracy can still yield mostly false positives when the condition is rare.

5. **Ordering in permutations vs. combinations.** Permutations count arrangements (order matters);
   combinations count selections (order does not matter). Identify which is needed before computing.

6. **Histograms with unequal class widths.** The bar height is frequency density, not frequency.
   Failing to divide by class width produces a misleading graph.

7. **Regression of $x$ on $y$ vs. $y$ on $x$.** The regression line of $y$ on $x$ minimises vertical
   residuals. The regression line of $x$ on $y$ minimises horizontal residuals. They are different
   unless $r = \pm 1$.

---

## Practice Problems

<details>
<summary>Problem 1</summary>

Find the mean, median, mode, variance, and standard deviation of: $4, 7, 2, 9, 4, 6, 3, 4, 8, 5$.

</details>

<details>
<summary>Problem 2</summary>

Given the bivariate data $(x, y)$: $(1, 3), (2, 5), (3, 4), (4, 7), (5, 6), (6, 9)$, find the
equation of the regression line of $y$ on $x$ and Pearson's correlation coefficient $r$.

</details>

<details>
<summary>Problem 3</summary>

A bag contains 5 red and 3 blue marbles. Two marbles are drawn without replacement. Find the
probability that both are red, and the probability that the second is red given that the first is
blue.

</details>

<details>
<summary>Problem 4</summary>

A disease affects 2% of a population. A test has $P(+\mid D) = 0.99$ and $P(-\mid D^c) = 0.97$. Find
$P(D \mid +)$.

</details>

<details>
<summary>Problem 5</summary>

How many ways can 8 people be seated in a row if two particular people must sit together?

</details>

<details>
<summary>Problem 6</summary>

A committee of 5 is to be chosen from 7 men and 6 women. How many committees contain at least 2
women?

</details>

<details>
<summary>Problem 7</summary>

Find the number of distinct arrangements of the letters in "MISSISSIPPI".

</details>

<details>
<summary>Problem 8</summary>

A grouped frequency distribution has classes $0$--$10$, $10$--$20$, $20$--$30$, $30$--$40$,
$40$--$50$ with frequencies $5, 12, 18, 10, 5$. Estimate the mean and median.

</details>

<details>
<summary>Answers to Selected Problems</summary>

**Problem 1:** Ordered data: $2, 3, 4, 4, 4, 5, 6, 7, 8, 9$. Mean: $\bar{x} = 52/10 = 5.2$. Median:
$(4 + 5)/2 = 4.5$. Mode: $4$.
$s^2 = (16 + 9 + 16 + 16 + 16 + 25 + 36 + 49 + 64 + 81 - 10 \times 27.04)/9 = (328 - 270.4)/9 = 57.6/9 = 6.4$.
$s = \sqrt{6.4} \approx 2.53$.

**Problem 2:** $n = 6$, $\sum x = 21$, $\sum y = 34$, $\sum x^2 = 91$, $\sum y^2 = 216$,
$\sum xy = 135$. $\bar{x} = 3.5$, $\bar{y} = 5.667$.
$b = (135 - 6 \times 3.5 \times 5.667)/(91 - 6 \times 12.25) = (135 - 119)/91 - 73.5) = 16/17.5 = 0.914$.
$a = 5.667 - 0.914 \times 3.5 = 2.467$. Line: $y = 2.47 + 0.91x$.
$r = 16/\sqrt{17.5 \times 23.33} = 16/\sqrt{408.3} = 16/20.21 = 0.792$.

**Problem 3:**
$P(\mathrm{both red}) = \dfrac{5}{8} \times \dfrac{4}{7} = \dfrac{20}{56} = \dfrac{5}{14}$.
$P(\mathrm{2nd red} \mid \mathrm{1st blue}) = \dfrac{5}{7}$ (after removing one blue, 5 red remain
out of 7).

**Problem 4:**
$P(D \mid +) = \dfrac{0.99 \times 0.02}{0.99 \times 0.02 + 0.03 \times 0.98} = \dfrac{0.0198}{0.0198 + 0.0294} = \dfrac{0.0198}{0.0492} \approx 0.402$.

**Problem 5:** Treat the two people as a single unit. We have 7 units to arrange: $7!$ ways. The two
people can swap within the unit: $2!$ ways. Total: $7! \times 2 = 10080$.

**Problem 6:** Total committees: ${13 \choose 5} = 1287$. Committees with 0 or 1 woman:
${7 \choose 5} + {7 \choose 4}{6 \choose 1} = 21 + 35 \times 6 = 231$. Committees with at least 2
women: $1287 - 231 = 1056$.

**Problem 7:** MISSISSIPPI has 11 letters: M(1), I(4), S(4), P(2). Arrangements:
$\dfrac{11!}{1!\,4!\,4!\,2!} = \dfrac{39916800}{24 \times 24 \times 2} = 34650$.

**Problem 8:** Midpoints: $5, 15, 25, 35, 45$. $\sum f_i = 50$. Mean:
$(25 + 180 + 450 + 350 + 225)/50 = 1230/50 = 24.6$. Median position: $50/2 = 25$. Cumulative
frequencies: $5, 17, 35, \ldots$. Median class is $20$--$30$. Median
$\approx 20 + \dfrac{25 - 17}{18} \times 10 = 20 + \dfrac{80}{18} \approx 24.4$.

</details>
