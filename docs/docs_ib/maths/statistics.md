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

---

## Worked Examples

**Worked Example: Full Regression Analysis with Prediction**

A study records the temperature ($x$, in $\mathrm{{}^\circ C}$) and ice cream sales ($y$, in USD) for
7 days: $(18, 220)$, $(22, 310)$, $(25, 380)$, $(28, 440)$, $(31, 510)$, $(34, 580)$, $(20, 270)$.
Find the regression line of $y$ on $x$, the correlation coefficient, and predict sales at $30\mathrm{{}^\circ C}$.

<details>
<summary>Solution</summary>

Computing: $n = 7$, $\sum x = 178$, $\sum y = 2710$, $\sum x^2 = 4734$, $\sum y^2 = 1163900$,
$\sum xy = 73420$.

$\bar{x} = 178/7 \approx 25.43$, $\bar{y} = 2710/7 \approx 387.14$.

$S_{xx} = 4734 - 7(25.43)^2 = 4734 - 4529.0 = 205.0$

$S_{yy} = 1163900 - 7(387.14)^2 = 1163900 - 1049190.0 = 114710.0$

$S_{xy} = 73420 - 7(25.43)(387.14) = 73420 - 68903.0 = 4517.0$

$$b = \frac{S_{xy}}{S_{xx}} = \frac{4517.0}{205.0} \approx 22.04$$

$$a = \bar{y} - b\bar{x} = 387.14 - 22.04 \times 25.43 \approx 387.14 - 560.5 \approx -173.4$$

Regression line: $y = -173.4 + 22.0x$.

$$r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}} = \frac{4517.0}{\sqrt{205.0 \times 114710.0}} = \frac{4517.0}{\sqrt{23515550}} \approx \frac{4517.0}{4849.3} \approx 0.931$$

There is a strong positive linear correlation.

Prediction at $x = 30$: $\hat{y} = -173.4 + 22.0(30) = -173.4 + 660 = 486.6$ USD.

Since $30\mathrm{{}^\circ C}$ lies within the data range ($18$ to $34$), this is interpolation and
reliable.

</details>

**Worked Example: Bayes' Theorem with Multiple Categories**

A factory has three machines producing bolts. Machine A produces 50% of output with 2% defect rate.
Machine B produces 30% with 3% defect rate. Machine C produces 20% with 5% defect rate. A bolt is
selected at random and found to be defective. What is the probability it came from Machine C?

<details>
<summary>Solution</summary>

Let $D$ be the event "bolt is defective" and $A, B, C$ be the events "bolt from Machine A, B, C"
respectively.

Prior probabilities: $P(A) = 0.50$, $P(B) = 0.30$, $P(C) = 0.20$.

Likelihoods: $P(D \mid A) = 0.02$, $P(D \mid B) = 0.03$, $P(D \mid C) = 0.05$.

Total probability of defect:

$$P(D) = 0.02(0.50) + 0.03(0.30) + 0.05(0.20) = 0.010 + 0.009 + 0.010 = 0.029$$

By Bayes' theorem:

$$P(C \mid D) = \frac{P(D \mid C) \cdot P(C)}{P(D)} = \frac{0.05 \times 0.20}{0.029} = \frac{0.010}{0.029} \approx 0.345$$

Despite producing only 20% of output, Machine C is responsible for about 34.5% of defects due to its
higher defect rate.

</details>

**Worked Example: Combinatorial Counting with Restrictions**

A panel of 4 people is to be selected from 6 men and 5 women. How many panels contain at least one man
and at least one woman?

<details>
<summary>Solution</summary>

Total ways to choose 4 from 11: ${11 \choose 4} = 330$.

Subtract the all-men panels: ${6 \choose 4} = 15$.

Subtract the all-women panels: ${5 \choose 4} = 5$.

Panels with at least one of each: $330 - 15 - 5 = 310$.

Alternatively, count directly: ${6 \choose 1}{5 \choose 3} + {6 \choose 2}{5 \choose 2} + {6 \choose 3}{5 \choose 1} = 60 + 150 + 100 = 310$.

</details>

**Worked Example: Spearman's Rank Correlation**

Eight students are ranked by two judges. The rank pairs are: $(1, 2)$, $(2, 1)$, $(3, 4)$, $(4, 3)$,
$(5, 6)$, $(6, 5)$, $(7, 8)$, $(8, 7)$. Calculate Spearman's rank correlation coefficient.

<details>
<summary>Solution</summary>

Differences: $d_i = 1, -1, -1, 1, -1, 1, -1, 1$.

$d_i^2 = 1, 1, 1, 1, 1, 1, 1, 1$.

$\sum d_i^2 = 8$. $n = 8$.

$$r_s = 1 - \frac{6 \times 8}{8(64 - 1)} = 1 - \frac{48}{504} = 1 - \frac{1}{10.5} = 1 - 0.0952 = 0.905$$

There is a strong positive monotonic relationship between the two judges' rankings.

</details>

---

## Additional Common Pitfalls

- **Sample vs. population variance.** On the GDC, the sample standard deviation function (usually
  denoted $s_x$ or $\sigma_{n-1}$) divides by $n - 1$. The population standard deviation ($\sigma_x$
  or $\sigma_n$) divides by $n$. Using the wrong one changes the answer significantly for small samples.

- **Spearman's formula requires distinct ranks.** The formula $r_s = 1 - \dfrac{6\sum d_i^2}{n(n^2-1)}$
  assumes no tied ranks. When ties exist, use the full Pearson formula on the ranks instead.

- **Confusing independent with mutually exclusive.** Independent events can occur simultaneously
  ($P(A \cap B) = P(A)P(B) \ne 0$ in general). Mutually exclusive events cannot
  ($P(A \cap B) = 0$). Independent events with nonzero probability are never mutually exclusive.

- **Misidentifying favourable outcomes.** When computing probabilities, carefully define what
  constitutes a "favourable outcome" and ensure the counting is complete. Overcounting or
  undercounting is a frequent source of error.

- **Regression interpretation beyond the data.** The regression line of $y$ on $x$ gives $\hat{y}$
  for a given $x$, but not $\hat{x}$ for a given $y$. Using $y = a + bx$ to predict $x$ from $y$
  requires solving for $x$, which gives a different line than the regression of $x$ on $y$.

---

## Exam-Style Problems

<details>
<summary>Problem 9</summary>

The lengths of 10 rods (in cm) are: $12.3, 12.7, 11.9, 12.5, 13.1, 12.0, 12.8, 11.8, 12.4, 12.6$.
Calculate the mean, standard deviation, and the percentage of data within one standard deviation of
the mean.

</details>

<details>
<summary>Problem 10</summary>

In a bag there are 4 red, 5 blue, and 6 green marbles. Three marbles are drawn without replacement.
Find the probability that: (a) all three are the same colour; (b) exactly two are blue.

</details>

<details>
<summary>Problem 11</summary>

Two events $A$ and $B$ satisfy $P(A) = 0.4$, $P(B) = 0.7$, and $P(A \cap B) = 0.25$. Find:
(a) $P(A \mid B)$; (b) $P(A \cup B)$; (c) whether $A$ and $B$ are independent.

</details>

<details>
<summary>Problem 12</summary>

A fair coin is tossed 5 times. Find the probability of getting exactly 3 heads.

</details>

<details>
<summary>Problem 13</summary>

The bivariate data has $\sum x = 60$, $\sum y = 84$, $\sum x^2 = 440$, $\sum y^2 = 860$,
$\sum xy = 580$, and $n = 10$. Find the equation of the regression line of $y$ on $x$ and the
coefficient of determination.

</details>

<details>
<summary>Problem 14</summary>

How many 4-digit even numbers can be formed from the digits $0, 1, 2, 3, 4, 5$ if no digit may be
repeated?

</details>

<details>
<summary>Problem 15</summary>

A doctor gives a patient a test for a condition. The test has sensitivity 0.92 and specificity 0.95.
If the condition prevalence in the patient's demographic is 0.08, find the probability that the patient
actually has the condition given a positive test result.

</details>

<details>
<summary>Answers to Additional Problems</summary>

**Problem 9:** Ordered data: $11.8, 11.9, 12.0, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8, 13.1$.
Mean: $\bar{x} = 124.1/10 = 12.41$.
$s^2 = \dfrac{\sum x_i^2 - 10(12.41)^2}{9}$.
$\sum x_i^2 = 139.09 + 141.61 + 144.00 + 151.29 + 153.76 + 156.25 + 158.76 + 161.29 + 163.84 + 171.61 = 1541.50$.
$s^2 = (1541.50 - 1540.08)/9 = 1.42/9 = 0.158$. $s = \sqrt{0.158} \approx 0.397$.
Range within one standard deviation: $12.41 \pm 0.40 = (12.01, 12.81)$.
Values in range: $12.0, 12.3, 12.4, 12.5, 12.6, 12.7, 12.8$ = 7 out of 10 = 70%.

**Problem 10:** Total marbles: 15. Total ways to draw 3: ${15 \choose 3} = 455$.
(a) Same colour: ${4 \choose 3} + {5 \choose 3} + {6 \choose 3} = 4 + 10 + 20 = 34$. $P = 34/455 \approx 0.0747$.
(b) Exactly two blue: ${5 \choose 2}{10 \choose 1} = 10 \times 10 = 100$. $P = 100/455 \approx 0.2198$.

**Problem 11:** (a) $P(A \mid B) = P(A \cap B)/P(B) = 0.25/0.70 = 5/14 \approx 0.357$.
(b) $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.4 + 0.7 - 0.25 = 0.85$.
(c) Independent iff $P(A \cap B) = P(A)P(B)$. $P(A)P(B) = 0.28 \ne 0.25 = P(A \cap B)$. Not independent.

**Problem 12:** ${5 \choose 3}(0.5)^3(0.5)^2 = 10 \times \dfrac{1}{32} = \dfrac{5}{16}$.

**Problem 13:** $S_{xx} = 440 - 10(6)^2 = 440 - 360 = 80$.
$S_{xy} = 580 - 10(6)(8.4) = 580 - 504 = 76$.
$b = 76/80 = 0.95$. $a = 8.4 - 0.95(6) = 8.4 - 5.7 = 2.7$.
Line: $y = 2.7 + 0.95x$.
$S_{yy} = 860 - 10(8.4)^2 = 860 - 705.6 = 154.4$.
$r = 76/\sqrt{80 \times 154.4} = 76/\sqrt{12352} = 76/111.1 \approx 0.684$.
$R^2 = r^2 \approx 0.468$, meaning about 46.8% of the variation in $y$ is explained by the linear model.

**Problem 14:** For a 4-digit number, the first digit cannot be 0. The last digit must be even (0, 2, 4).
Case 1: Last digit is 0. First digit: 5 choices (1--5), middle two: ${}^4P_2 = 12$. Total: $5 \times 12 = 60$.
Case 2: Last digit is 2 or 4 (2 choices). First digit: 4 choices (1--5, excluding the one used for the last digit). Middle two: ${}^4P_2 = 12$. Total: $2 \times 4 \times 12 = 96$.
Total: $60 + 96 = 156$.

**Problem 15:** $P(D \mid +) = \dfrac{0.92 \times 0.08}{0.92 \times 0.08 + 0.05 \times 0.92} = \dfrac{0.0736}{0.0736 + 0.046} = \dfrac{0.0736}{0.1196} \approx 0.615$.
Despite a positive test, there is only about a 61.5% chance the patient has the condition.

</details>

---

## If You Get These Wrong, Revise:

- **Probability fundamentals** → Review conditional probability and the laws of probability
- **Algebraic manipulation for summation formulas** → Review [./calculus](./calculus) (sections on summation and sigma notation)
- **Quadratic equations and simultaneous equations** → Review algebra fundamentals
- **Logarithms for regression transformation** → Review exponential and logarithmic functions
- **Set theory and Venn diagrams** → Review logic and set theory fundamentals

---

## Related Content at Other Levels

- **A-Level Statistics:** [Mathematics](https://alevel.wyattau.com/docs/maths/maths)
- **DSE Dispersion:** [Dispersion](https://academics.wyattau.com/docs/dse/Maths/compulsory/dispersion)
- **University Statistics:** [Probability and Statistics](https://university.wyattau.com/docs/mathematics/probability-and-statistics)
