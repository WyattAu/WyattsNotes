---
title: Data Representation
description:
  'A-Level Mathematics notes on Data Representation: Board Coverage; 1. Measures of Central
  Tendency; 1.1 Mean; 1.2 The mean minimises the sum of squared deviat.'
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: data-representation
---

## Board Coverage

| Board      | Paper   | Notes                                         |
| ---------- | ------- | --------------------------------------------- |
| AQA        | Paper 1 | Measures of location and spread, coding       |
| Edexcel    | P1      | Similar                                       |
| OCR (A)    | Paper 1 | Includes outlier detection                    |
| CIE (9709) | P1, P6  | Data handling in P1; further statistics in P6 |

:::info You must know when to use the sample variance formula (dividing by $n-1$) versus the
Population variance formula (dividing by $n$). Edexcel and OCR use $n-1$ for sample data. :::

<hr />

## 1. Measures of Central Tendency

### 1.1 Mean

**Definition.** The mean of $n$ values $x_1, x_2, \ldots, x_n$ is

$$\bar{x} = \frac{1}{n}\sum_{i=1}^{n}x_i$$

### 1.2 The mean minimises the sum of squared deviations

**Theorem.** The function $S(a) = \displaystyle\sum_{i=1}^{n}(x_i - a)^2$ is minimised when
$a = \bar{x}$.

**Proof.** Expand $S(a)$:

$$S(a) = \sum(x_i^2 - 2ax_i + a^2) = \sum x_i^2 - 2a\sum x_i + na^2$$

$$\frac{dS}{da} = -2\sum x_i + 2na$$

Setting $\dfrac{dS}{da} = 0$:
$2na = 2\sum x_i \implies a = \dfrac◆LB◆\sum x_i◆RB◆◆LB◆n◆RB◆ = \bar{x}$.

Check: $\dfrac{d^2S}{da^2} = 2n \gt 0$So this is a minimum. $\blacksquare$

**Intuition.** The mean is the "centre of mass" of the data. It is the single value that best
Represents all the data points in the sense of least squares — no other value produces a smaller
Total squared error. This is why the mean is the foundation of regression and estimation theory.

### 1.3 Median

The **median** is the middle value when data are arranged in order. For $n$ values:

- If $n$ is odd: median = $\dfrac{n+1}{2}$-th value.
- If $n$ is even: median = average of $\dfrac{n}{2}$-th and $\left(\dfrac{n}{2}+1\right)$-th values.

### 1.4 Mode

The **mode** is the most frequently occurring value. A dataset can be unimodal, bimodal, or have no
Mode.

### 1.5 Comparing measures

- The mean uses all data values but is affected by outliers.
- The median is robust to outliers but ignores the magnitude of extreme values.
- The mode is useful for categorical data.

:::warning Warning Mean. A few extreme values can pull the mean far from the centre of the data. :::

<hr />

## 2. Variance and Standard Deviation

### 2.1 Definition

The **variance** of $x_1, \ldots, x_n$ is

$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

The **standard deviation** is $\sigma = \sqrt◆LB◆\sigma^2◆RB◆$.

### 2.2 Computational formula

**Theorem.** $\sigma^2 = \dfrac◆LB◆\sum x_i^2◆RB◆◆LB◆n◆RB◆ - \bar{x}^2$

**Proof.**

$$
\begin{aligned}
\sigma^2 &= \frac{1}{n}\sum(x_i - \bar{x})^2 = \frac{1}{n}\sum(x_i^2 - 2\bar{x}x_i + \bar{x}^2) \\
&= \frac{1}{n}\left[\sum x_i^2 - 2\bar{x}\sum x_i + n\bar{x}^2\right] \\
&= \frac◆LB◆\sum x_i^2◆RB◆◆LB◆n◆RB◆ - 2\bar{x}^2 + \bar{x}^2 \\
&= \frac◆LB◆\sum x_i^2◆RB◆◆LB◆n◆RB◆ - \bar{x}^2 \quad \blacksquare
\end{aligned}
$$

:::tip This formula is computationally more efficient and is the one you should use in exams. Just
Remember: "mean of squares minus square of mean." :::

### 2.3 Sample variance

For sample data, the **unbiased estimator** of the population variance is

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2 = \frac◆LB◆\sum x_i^2 - n\bar{x}^2◆RB◆◆LB◆n-1◆RB◆$$

The division by $n-1$ (Bessel's correction) accounts for the fact that $\bar{x}$ is estimated from
The same data, losing one degree of freedom.

<hr />

## 3. Quartiles, IQR, and Box Plots

### 3.1 Quartiles

- **$Q_1$** (lower quartile): the median of the lower half of the data.
- **$Q_2$** (median): the median of all the data.
- **$Q_3$** (upper quartile): the median of the upper half.

The **interquartile range** (IQR) is $Q_3 - Q_1$.

### 3.2 Box plots

A box plot displays:

- Minimum and maximum values (or whisker endpoints)
- $Q_1$, $Q_2$ (median), $Q_3$
- The box spans from $Q_1$ to $Q_3$
- The median is marked inside the box

### 3.3 Outlier detection

An outlier is a value that lies more than $1.5 \times \mathrm{IQR}$ below $Q_1$ or above $Q_3$:

$$\mathrm{Lower fence} = Q_1 - 1.5 \times \mathrm{IQR}$$
$$\mathrm{Upper fence} = Q_3 + 1.5 \times \mathrm{IQR}$$

Values outside these fences are potential outliers.

:::warning Warning Some use $1.5 \times$ IQR, others use different multipliers. :::

<hr />

## 4. Coding Data

### 4.1 Linear coding

**Definition.** Coding transforms data using $y = \dfrac{x - a}{c}$ where $a$ and $c$ are constants
($c \neq 0$).

### 4.2 Effect on summary statistics

If $y_i = \dfrac{x_i - a}{c}$Then:

$$\bar{y} = \frac◆LB◆\bar{x} - a◆RB◆◆LB◆c◆RB◆, \qquad \sigma_y = \frac◆LB◆\sigma_x◆RB◆◆LB◆|c|◆RB◆$$

**Proof.**

$$\bar{y} = \frac{1}{n}\sum y_i = \frac{1}{n}\sum\frac{x_i - a}{c} = \frac{1}{c}\left(\frac◆LB◆\sum x_i◆RB◆◆LB◆n◆RB◆ - a\right) = \frac◆LB◆\bar{x} - a◆RB◆◆LB◆c◆RB◆$$

$$\sigma_y^2 = \frac{1}{n}\sum(y_i - \bar{y})^2 = \frac{1}{n}\sum\left(\frac{x_i - a}{c} - \frac◆LB◆\bar{x}-a◆RB◆◆LB◆c◆RB◆\right)^2 = \frac{1}{c^2}\cdot\frac{1}{n}\sum(x_i-\bar{x})^2 = \frac◆LB◆\sigma_x^2◆RB◆◆LB◆c^2◆RB◆$$

Hence $\sigma_y = \sigma_x/|c|$. $\blacksquare$

:::tip Coding makes computation easier when data values are large. Always work with coded data to
Find the mean and standard deviation, then decode back. Remember: adding a constant shifts the mean
But does not affect the spread. :::

<hr />

## 5. Frequency Tables and Grouped Data

### 5.1 Discrete frequency data

For data with frequencies $f_1, f_2, \ldots, f_k$:

$$\bar{x} = \frac◆LB◆\sum f_i x_i◆RB◆◆LB◆\sum f_i◆RB◆, \qquad \sigma^2 = \frac◆LB◆\sum f_i x_i^2◆RB◆◆LB◆\sum f_i◆RB◆ - \bar{x}^2$$

### 5.2 Grouped continuous data

Use the **midpoint** of each class as the representative value. This introduces an approximation
Since we lose information about the distribution within each class.

<hr />

## 6. Skewness

### 6.1 Definition

Skewness measures the asymmetry of a distribution about its centre. A distribution is:

- **Positively skewed** (right-skewed): the right tail is longer; mean $\gt$ median.
- **Negatively skewed** (left-skewed): the left tail is longer; mean $\lt$ median.
- **Symmetric**: mean = median (and mode, for unimodal distributions).

### 6.2 Pearson's coefficient of skewness

**Pearson's first coefficient** uses the mean, median, and standard deviation:

$$S_1 = \frac◆LB◆3\left(\bar{x} - Q_2\right)◆RB◆◆LB◆\sigma◆RB◆$$

**Pearson's second coefficient** uses only the quartiles:

$$S_2 = \frac{Q_3 + Q_1 - 2Q_2}{Q_3 - Q_1}$$

**Interpretation:**

- $S \gt 0$: positive skew (right tail longer).
- $S \lt 0$: negative skew (left tail longer).
- $S = 0$: symmetric distribution.

:::info Info Useful when quartiles are already known and the standard deviation has not been
calculated. Both Give the same sign of skewness but may differ in magnitude. :::

### 6.3 Relationship between measures of central tendency

For a unimodal distribution:

- **Symmetric**: mean = median = mode.
- **Positively skewed**: mode $\lt$ median $\lt$ mean.
- **Negatively skewed**: mean $\lt$ median $\lt$ mode.

The mean is pulled in the direction of the longer tail, while the mode remains at the peak and the
Median lies between them.

<hr />

## 7. Outliers in Depth

### 7.1 The IQR method — mild and extreme outliers

As introduced in Section 3.3, the $1.5 \times \mathrm{IQR}$ rule defines fences. Some boards further
Distinguish between mild and extreme outliers:

- **Mild outlier**: a value between $1.5 \times \mathrm{IQR}$ and $3 \times \mathrm{IQR}$ from the
  nearest quartile.
- **Extreme outlier**: a value more than $3 \times \mathrm{IQR}$ from the nearest quartile.

$$\mathrm{Extreme lower fence} = Q_1 - 3 \times \mathrm{IQR}$$
$$\mathrm{Extreme upper fence} = Q_3 + 3 \times \mathrm{IQR}$$

### 7.2 The modified z-score method

The modified z-score uses the **median absolute deviation** (MAD). For a dataset
$x_1, x_2, \ldots, x_n$ with median $\tilde{x}$:

$$\mathrm{MAD} = \mathrm{median}\left(|x_i - \tilde{x}|\right)$$

The modified z-score for each observation is:

$$M_i = \frac◆LB◆0.6745\left(x_i - \tilde{x}\right)◆RB◆◆LB◆\mathrm{MAD}◆RB◆$$

An observation is flagged as an outlier if $|M_i| \gt 3.5$.

:::tip Tip MAD, which are themselves resistant to outliers. The factor $0.6745$ is the
$0.75$-quantile of the Standard normal distribution, so the modified z-score is on a comparable
scale to the standard Z-score for normally distributed data. :::

### 7.3 Choosing an outlier method

| Method             | Strengths                                         | Limitations                             |
| ------------------ | ------------------------------------------------- | --------------------------------------- |
| IQR ($1.5 \times$) | Standard at A-level; easy to apply from quartiles | Less effective with very small samples  |
| Modified z-score   | Robust to multiple or clustered outliers          | Requires computing the MAD, less common |

<hr />

## 8. Box Plots — Drawing and Interpreting

### 8.1 Drawing a box plot

To construct a box plot:

1. Draw a horizontal (or vertical) number line covering the range of the data.
2. Draw a rectangular box from $Q_1$ to $Q_3$.
3. Mark the median $Q_2$ as a line inside the box.
4. Extend a whisker from $Q_1$ to the smallest data value within the lower fence, and from $Q_3$ to
   the largest data value within the upper fence.
5. Plot any values outside the fences as individual points (these are the outliers).

:::warning Warning Fences themselves. If no values lie outside the fences, the whiskers extend to
the minimum and Maximum of the dataset. :::

### 8.2 Interpreting skewness from a box plot

Compare the distances from $Q_2$ to each quartile:

- $Q_3 - Q_2 \gt Q_2 - Q_1$: the upper half is more spread out, indicating **positive skew**.
- $Q_3 - Q_2 \lt Q_2 - Q_1$: the lower half is more spread out, indicating **negative skew**.
- $Q_3 - Q_2 \approx Q_2 - Q_1$: the distribution is approximately **symmetric**.

Outliers on one side also indicate skewness in that direction.

### 8.3 Comparing box plots

When two or more box plots are drawn on the same scale, compare:

- **Location**: which distribution has the higher median?
- **Spread**: which has the larger IQR or total range?
- **Skewness**: do the distributions differ in shape?
- **Outliers**: does one distribution have more extreme values?

:::warning Warning Such as "distribution A has a higher median" is incomplete without also
addressing how the spreads Compare. :::

<hr />

## 9. Comparing Distributions

### 9.1 Back-to-back stem-and-leaf diagrams

A **back-to-back stem-and-leaf diagram** places two distributions on either side of a shared stem,
Enabling direct visual comparison of shape, spread, and outliers.

**Example.** Comparing test scores of two classes (Class A | Stem | Class B):

```
 8 7 5 | 5 | 3 4 6
 4 3 1 | 6 | 0 2 7 9
 6 2 0 | 7 | 1 3 5 8
 9 5   | 8 | 2 4
       | 9 | 1 7
```

Reading from the diagram: Class A has scores 55, 57, 58, 61, 63, 64, ... While Class B has 53, 54,
56, 60, 62, 67, ... Both classes share the stem (tens digit), with Class A on the left and Class B
On the right.

### 9.2 Cumulative frequency curves

A **cumulative frequency curve** (ogive) plots cumulative frequency against the upper class boundary
Of each group. To compare two distributions:

1. Plot both ogives on the same axes.
2. Read off medians, quartiles, and percentiles from each curve.
3. Compare location (medians), spread (IQR), and shape (skewness).

:::tip Tip To the curve, then drop a vertical line to the $x$-axis. The reverse process gives the
cumulative Frequency for a given $x$-value. :::

### 9.3 Structuring a comparison

When asked to compare two distributions in an exam, structure your response around four points:

1. **Average**: compare means or medians, stated in the context of the data.
2. **Spread**: compare standard deviations or IQRs, stated in context.
3. **Shape**: compare skewness where apparent.
4. **Outliers**: mention any unusual values and their effect.

Always relate numerical comparisons to the original context of the data.

<hr />

## 10. Interpolation from Grouped Data

### 10.1 Linear interpolation formula

When data are grouped into classes, quantiles are estimated using **linear interpolation**. For the
$p$-th percentile:

$$x_p = L + \left(\frac◆LB◆p \cdot n◆RB◆◆LB◆100◆RB◆ - c_f\right) \cdot \frac{w}{f}$$

Where:

- $L$ = lower class boundary of the class containing the $p$-th percentile
- $n$ = total frequency
- $c_f$ = cumulative frequency of all classes below $L$
- $w$ = class width
- $f$ = frequency of the class containing the $p$-th percentile

For the **median** ($p = 50$):

$$Q_2 = L + \left(\frac{n}{2} - c_f\right) \cdot \frac{w}{f}$$

For **quartiles** ($p = 25$ and $p = 75$):

$$Q_1 = L + \left(\frac{n}{4} - c_f\right) \cdot \frac{w}{f}, \qquad Q_3 = L + \left(\frac{3n}{4} - c_f\right) \cdot \frac{w}{f}$$

### 10.2 Worked example

Find the median from the following grouped frequency distribution:

| Class             | Frequency |
| ----------------- | --------- |
| $0 \lt x \le 10$  | 5         |
| $10 \lt x \le 20$ | 12        |
| $20 \lt x \le 30$ | 18        |
| $30 \lt x \le 40$ | 8         |
| $40 \lt x \le 50$ | 4         |

$n = 47$. The median position is $n/2 = 23.5$.

Cumulative frequencies: 5, 17, 35, 43, 47. The 23.5th value falls in the class $20 \lt x \le 30$.

$$Q_2 = 20 + \left(23.5 - 17\right) \cdot \frac{10}{18} = 20 + 6.5 \cdot \frac{10}{18} = 20 + \frac{65}{18} \approx 23.6$$

:::info Info Approximation; the true quantile may differ if the data are not uniformly spread within
the class. :::

<hr />

## Problem Set

<details>
<summary>Problem 1</summary>
For the dataset $\{3, 5, 7, 2, 8, 4, 6, 5\}$Find the mean, median, and mode.
</details>

<details>
<summary>Solution 1</summary>
Ordered: $\{2, 3, 4, 5, 5, 6, 7, 8\}$. $n = 8$.

Mean: $\bar{x} = (3+5+7+2+8+4+6+5)/8 = 40/8 = 5$.

Median: average of 4th and 5th values = $(5+5)/2 = 5$.

Mode: 5 (appears twice).

**If you get this wrong, revise:** [Measures of Central Tendency](#1-measures-of-central-tendency) —
Section 1.

</details>

<details>
<summary>Problem 2</summary>
Find the variance and standard deviation of $\{4, 8, 6, 5, 3, 7, 9, 2\}$ using the computational formula.
</details>

<details>
<summary>Solution 2</summary>
$\sum x = 44$, $n = 8$, $\bar{x} = 44/8 = 5.5$.

$\sum x^2 = 16 + 64 + 36 + 25 + 9 + 49 + 81 + 4 = 284$.

$\sigma^2 = 284/8 - 5.5^2 = 35.5 - 30.25 = 5.25$.

$\sigma = \sqrt{5.25} \approx 2.29$.

**If you get this wrong, revise:** [Computational Formula](#22-computational-formula) — Section 2.2.

</details>

<details>
<summary>Problem 3</summary>
Data is coded using $y = (x - 100)/5$. The coded data has mean 12 and variance 9. Find the original mean and standard deviation.
</details>

<details>
<summary>Solution 3</summary>
$\bar{y} = (\bar{x} - 100)/5 = 12 \implies \bar{x} - 100 = 60 \implies \bar{x} = 160$.

$\sigma_y = \sigma_x/5 = 3 \implies \sigma_x = 15$.

**If you get this wrong, revise:** [Coding Data](#4-coding-data) — Section 4.

</details>

<details>
<summary>Problem 4</summary>
For the ordered dataset $\{2, 3, 5, 7, 8, 11, 14, 18, 23\}$Find $Q_1$, $Q_2$, $Q_3$And the IQR. Identify any outliers.
</details>

<details>
<summary>Solution 4</summary>
$n = 9$ (odd). $Q_2 = 5$Th value $= 8$.

Lower half: $\{2, 3, 5, 7\}$. $Q_1 = (3+5)/2 = 4$. Upper half: $\{11, 14, 18, 23\}$.
$Q_3 = (14+18)/2 = 16$.

$\mathrm{IQR} = 16 - 4 = 12$.

Lower fence: $4 - 1.5(12) = -14$. Upper fence: $16 + 1.5(12) = 34$.

All values are within $[-14, 34]$So no outliers.

**If you get this wrong, revise:** [Quartiles, IQR, and Box Plots](#3-quartiles-iqr-and-box-plots) —
Section 3.

</details>

<details>
<summary>Problem 5</summary>
The following frequency table shows the number of goals scored in 20 football matches. Find the mean and variance.

| Goals | Frequency |
| ----- | --------- |
| 0     | 3         |
| 1     | 7         |
| 2     | 5         |
| 3     | 3         |
| 4     | 2         |

</details>

<details>
<summary>Solution 5</summary>
$\sum f = 20$.

$\sum fx = 0 + 7 + 10 + 9 + 8 = 34$. $\bar{x} = 34/20 = 1.7$.

$\sum fx^2 = 0 + 7 + 20 + 27 + 32 = 86$.

$\sigma^2 = 86/20 - 1.7^2 = 4.3 - 2.89 = 1.41$.

**If you get this wrong, revise:** [Frequency Tables](#51-discrete-frequency-data) — Section 5.1.

</details>

<details>
<summary>Problem 6</summary>
Prove that $\displaystyle\sum_{i=1}^{n}(x_i - \bar{x}) = 0$.
</details>

<details>
<summary>Solution 6</summary>
$$\sum(x_i - \bar{x}) = \sum x_i - n\bar{x} = \sum x_i - n \cdot \frac◆LB◆\sum x_i◆RB◆◆LB◆n◆RB◆ = \sum x_i - \sum x_i = 0 \quad \blacksquare$$

**If you get this wrong, revise:** [Mean](#11-mean) — Section 1.1.

</details>

<details>
<summary>Problem 7</summary>
Two datasets A and B have the same mean but A has standard deviation 5 while B has standard deviation 2. What does this tell you about the two datasets?
</details>

<details>
<summary>Solution 7</summary>
Both datasets are centred at the same point (same mean), but dataset A is more spread out (larger standard deviation). The values in A are more dispersed from the mean, while B's values cluster more tightly around the mean.

**If you get this wrong, revise:**
[Variance and Standard Deviation](#2-variance-and-standard-deviation) — Section 2.

</details>

<details>
<summary>Problem 8</summary>
Given that $\bar{x} = 20$ and $\sum(x_i - 20)^2 = 360$ for $n = 10$ observations, find $\sigma$ and the sample variance $s^2$.
</details>

<details>
<summary>Solution 8</summary>
$\sigma^2 = 360/10 = 36$So $\sigma = 6$.

$s^2 = 360/9 = 40$.

**If you get this wrong, revise:** [Sample Variance](#23-sample-variance) — Section 2.3.

</details>

<details>
<summary>Problem 9</summary>
A dataset $\{x_i\}$ has mean 10 and standard deviation 4. A new dataset is formed by adding 5 to each value and then multiplying by 3. Find the new mean and standard deviation.
</details>

<details>
<summary>Solution 9</summary>
Adding 5 shifts mean by 5: mean becomes 15. SD unchanged at 4.
Multiplying by 3 scales mean by 3: mean becomes 45. SD scales by 3: SD becomes 12.

New mean = 45, new SD = 12.

**If you get this wrong, revise:** [Coding Data](#4-coding-data) — Section 4.2.

</details>

<details>
<summary>Problem 10</summary>
Explain why the median is preferred to the mean for measuring average income in a country.
</details>

<details>
<summary>Solution 10</summary>
Income distributions are right-skewed — a small number of very high earners pull the mean upward. The median, being the middle value, is unaffected by extreme values and gives a more representative "typical" income. For example, if one billionaire lives in a village of 1000 people earning $30\,000$The mean would be vastly inflated while the median would remain close to $30\,000$.

**If you get this wrong, revise:** [Comparing Measures](#15-comparing-measures) — Section 1.5.

</details>

<details>
<summary>Problem 11</summary>
For the dataset $\{2, 4, 5, 6, 7, 8, 12, 15, 28\}$Find $Q_1$, $Q_2$, $Q_3$, $\bar{x}$And $\sigma$. Hence calculate Pearson's first coefficient of skewness and interpret the result.
</details>

<details>
<summary>Solution 11</summary>
$n = 9$. Ordered data: $\{2, 4, 5, 6, 7, 8, 12, 15, 28\}$.

$Q_2 = 5$Th value $= 7$.

Lower half: $\{2, 4, 5, 6\}$. $Q_1 = (4+5)/2 = 4.5$. Upper half: $\{8, 12, 15, 28\}$.
$Q_3 = (12+15)/2 = 13.5$.

$\bar{x} = (2+4+5+6+7+8+12+15+28)/9 = 87/9 = 9.67$.

$\sum x^2 = 4 + 16 + 25 + 36 + 49 + 64 + 144 + 225 + 784 = 1347$.

$\sigma^2 = 1347/9 - 9.67^2 = 149.67 - 93.51 = 56.16$So $\sigma = 7.49$.

Pearson's first coefficient:
$$S_1 = \frac{3(9.67 - 7)}{7.49} = \frac◆LB◆3 \times 2.67◆RB◆◆LB◆7.49◆RB◆ = \frac{8.01}{7.49} \approx 1.07$$

Since $S_1 \gt 0$The distribution is positively skewed. This is consistent with the right tail
Produced by the value 28.

**If you get this wrong, revise:** [Skewness](#6-skewness) — Section 6.

</details>

<details>
<summary>Problem 12</summary>
A box plot shows: minimum = 5, $Q_1 = 12$$Q_2 = 18$$Q_3 = 25$Maximum = 34, with one outlier
At 42. Calculate the IQR, the upper fence, and describe the skewness of the distribution.
</details>

<details>
<summary>Solution 12</summary>
$\mathrm{IQR} = Q_3 - Q_1 = 25 - 12 = 13$.

Upper fence $= Q_3 + 1.5 \times \mathrm{IQR} = 25 + 1.5 \times 13 = 25 + 19.5 = 44.5$.

Skewness: $Q_3 - Q_2 = 25 - 18 = 7$ and $Q_2 - Q_1 = 18 - 12 = 6$.

Since $7 \gt 6$ (and there is an outlier at 42 on the upper side), the distribution is positively
Skewed, though only slightly so from the quartiles alone.

**If you get this wrong, revise:**
[Box Plots — Drawing and Interpreting](#8-box-plots--drawing-and-interpreting) — Section 8.

</details>

<details>
<summary>Problem 13</summary>
Two classes sat the same maths test. Their results are summarised in back-to-back stem-and-leaf form:

```
Class A | Stem | Class B
  9 7 3 |   4  | 1 2 5
  8 5 4 |   5  | 0 3 6 8
  6 2 0 |   6  | 1 4 7
  4     |   7  | 2 5 9
        |   8  | 3 6
```

Compare the distributions of the two classes.

</details>

<details>
<summary>Solution 13</summary>
Class A: $\{43, 47, 49, 54, 55, 58, 60, 62, 66, 74\}$. $n = 10$.
Median $= (55 + 58)/2 = 56.5$. Range $= 74 - 43 = 31$.

Class B: $\{41, 42, 45, 50, 53, 56, 58, 61, 64, 67, 72, 75, 79, 83, 86\}$. $n = 15$. Median $= 8$Th
Value $= 61$. Range $= 86 - 41 = 45$.

Comparison:

1. **Average**: Class B has the higher median (61 vs 56.5), so on average Class B performed better.
2. **Spread**: Class B has a wider range (45 vs 31), suggesting greater variability in scores.
3. **Shape**: Both distributions are roughly symmetric. Class B extends further in both directions.
4. **Outliers**: No obvious outliers in either class.

**If you get this wrong, revise:** [Comparing Distributions](#9-comparing-distributions) —
Section 9.

</details>

<details>
<summary>Problem 14</summary>
Estimate the median and interquartile range from the following grouped frequency distribution using
Linear interpolation:

| Class             | Frequency |
| ----------------- | --------- |
| $10 \lt x \le 20$ | 8         |
| $20 \lt x \le 30$ | 15        |
| $30 \lt x \le 40$ | 22        |
| $40 \lt x \le 50$ | 10        |
| $50 \lt x \le 60$ | 5         |

</details>

<details>
<summary>Solution 14</summary>
$n = 60$.

**Median** ($n/2 = 30$Th value). Cumulative frequencies: 8, 23, 45, 55, 60. The 30th value falls in
The class $30 \lt x \le 40$.

$$Q_2 = 30 + \left(\frac{60}{2} - 23\right) \cdot \frac{10}{22} = 30 + (30 - 23) \cdot \frac{10}{22} = 30 + 7 \cdot \frac{10}{22} = 30 + \frac{70}{22} \approx 33.18$$

**Lower quartile** ($n/4 = 15$Th value). The 15th value falls in $20 \lt x \le 30$.

$$Q_1 = 20 + \left(15 - 8\right) \cdot \frac{10}{15} = 20 + 7 \cdot \frac{10}{15} = 20 + \frac{70}{15} \approx 24.67$$

**Upper quartile** ($3n/4 = 45$Th value). The 45th value falls in $30 \lt x \le 40$.

$$Q_3 = 30 + \left(45 - 23\right) \cdot \frac{10}{22} = 30 + 22 \cdot \frac{10}{22} = 30 + 10 = 40$$

$\mathrm{IQR} = Q_3 - Q_1 = 40 - 24.67 = 15.33$.

**If you get this wrong, revise:**
[Interpolation from Grouped Data](#10-interpolation-from-grouped-data) — Section 10.

</details>

<details>
<summary>Problem 15</summary>
The ordered dataset $\{4, 6, 8, 10, 12, 13, 15, 16, 48\}$ has median 12 and MAD = 4. Use the
Modified z-score method to determine whether the value 48 is an outlier.
</details>

<details>
<summary>Solution 15</summary>
$\tilde{x} = 12$ (median). $\mathrm{MAD} = 4$.

For $x = 48$:
$$M = \frac{0.6745(48 - 12)}{4} = \frac◆LB◆0.6745 \times 36◆RB◆◆LB◆4◆RB◆ = \frac{24.282}{4} = 6.07$$

Since $|M| = 6.07 \gt 3.5$The value 48 is classified as an outlier by the modified z-score Method.

**If you get this wrong, revise:** [Outliers in Depth](#7-outliers-in-depth) — Section 7.2.

</details>

<details>
<summary>Problem 16</summary>
A grouped frequency distribution has class $50 \lt w \le 60$ with frequency 14. The cumulative
Frequency below this class is 32, and the total frequency is 80. Use linear interpolation to
Estimate $Q_3$.
</details>

<details>
<summary>Solution 16</summary>
$Q_3$ is at position $3n/4 = 3 \times 80 / 4 = 60$.

The 60th value falls in the class $50 \lt w \le 60$.

$L = 50$$c_f = 32$$f = 14$$w = 10$.

$$Q_3 = 50 + \left(60 - 32\right) \cdot \frac{10}{14} = 50 + 28 \cdot \frac{10}{14} = 50 + \frac{280}{14} = 50 + 20 = 70$$

**If you get this wrong, revise:**
[Interpolation from Grouped Data](#10-interpolation-from-grouped-data) — Section 10.1.

</details>

<details>
<summary>Problem 17</summary>
For the dataset $\{3, 5, 6, 7, 8, 9, 10, 12, 45\}$Compute both Pearson's first and second
Coefficients of skewness. Do they agree on the direction of skewness?
</details>

<details>
<summary>Solution 17</summary>
$n = 9$. $Q_2 = 5$Th value $= 8$.

Lower half: $\{3, 5, 6, 7\}$. $Q_1 = (5+6)/2 = 5.5$. Upper half: $\{9, 10, 12, 45\}$.
$Q_3 = (10+12)/2 = 11$.

$\bar{x} = (3+5+6+7+8+9+10+12+45)/9 = 105/9 = 11.67$.

$\sum x^2 = 9 + 25 + 36 + 49 + 64 + 81 + 100 + 144 + 2025 = 2533$.

$\sigma^2 = 2533/9 - 11.67^2 = 281.44 - 136.19 = 145.25$So $\sigma = 12.05$.

**Pearson's first coefficient:**
$$S_1 = \frac{3(11.67 - 8)}{12.05} = \frac{11.01}{12.05} \approx 0.91$$

**Pearson's second coefficient:**
$$S_2 = \frac◆LB◆11 + 5.5 - 2 \times 8◆RB◆◆LB◆11 - 5.5◆RB◆ = \frac{16.5 - 16}{5.5} = \frac{0.5}{5.5} \approx 0.09$$

Both coefficients are positive, so they agree on positive skew. However, $S_1$ is much larger
Because the mean (11.67) is strongly pulled by the outlier 45, whereas $S_2$ depends only on the
Quartiles, which are less affected by that extreme value.

**If you get this wrong, revise:** [Skewness](#6-skewness) — Section 6.

</details>

:::

:::

:::

:::

:::

:::

---

:::tip Diagnostic Test Ready to test your understanding of **Data Representation**? The
[diagnostic test](/docs/alevel/maths/diagnostics/diag-data-representation) contains the hardest
questions within the A-Level specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Data
Representation with other topics to test synthesis under exam conditions.

See [Diagnostic Guide](/docs/alevel/maths/diagnostic-guide) for instructions on self-marking and
building a personal test matrix. :::

## Common Pitfalls

1. Forgetting to check that solutions satisfy the original equation (especially with squaring both
   sides or dividing by variables).

2. Misreading the question, particularly with 'hence' vs 'hence or otherwise' — the former requires
   using previous work.

3. Forgetting the $+c$ constant of integration in indefinite integrals, or misusing boundary
   conditions in definite integrals.

4. Losing marks by not showing sufficient working — always write out each step, especially in proof
   questions.
