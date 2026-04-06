---
title: Data Representation
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
population variance formula (dividing by $n$). Edexcel and OCR use $n-1$ for sample data. :::

---

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

Setting $\dfrac{dS}{da} = 0$: $2na = 2\sum x_i \implies a = \dfrac{\sum x_i}{n} = \bar{x}$.

Check: $\dfrac{d^2S}{da^2} = 2n \gt{} 0$, so this is a minimum. $\blacksquare$

**Intuition.** The mean is the "centre of mass" of the data. It is the single value that best
represents all the data points in the sense of least squares — no other value produces a smaller
total squared error. This is why the mean is the foundation of regression and estimation theory.

### 1.3 Median

The **median** is the middle value when data are arranged in order. For $n$ values:

- If $n$ is odd: median = $\dfrac{n+1}{2}$-th value.
- If $n$ is even: median = average of $\dfrac{n}{2}$-th and $\left(\dfrac{n}{2}+1\right)$-th values.

### 1.4 Mode

The **mode** is the most frequently occurring value. A dataset can be unimodal, bimodal, or have no
mode.

### 1.5 Comparing measures

- The mean uses all data values but is affected by outliers.
- The median is robust to outliers but ignores the magnitude of extreme values.
- The mode is useful for categorical data.

:::warning For skewed distributions, the median is a better measure of central tendency than the
mean. A few extreme values can pull the mean far from the centre of the data. :::

---

## 2. Variance and Standard Deviation

### 2.1 Definition

The **variance** of $x_1, \ldots, x_n$ is

$$\sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2$$

The **standard deviation** is $\sigma = \sqrt{\sigma^2}$.

### 2.2 Computational formula

**Theorem.** $\sigma^2 = \dfrac{\sum x_i^2}{n} - \bar{x}^2$

**Proof.**

$$
\begin{aligned}
\sigma^2 &= \frac{1}{n}\sum(x_i - \bar{x})^2 = \frac{1}{n}\sum(x_i^2 - 2\bar{x}x_i + \bar{x}^2) \\
&= \frac{1}{n}\left[\sum x_i^2 - 2\bar{x}\sum x_i + n\bar{x}^2\right] \\
&= \frac{\sum x_i^2}{n} - 2\bar{x}^2 + \bar{x}^2 \\
&= \frac{\sum x_i^2}{n} - \bar{x}^2 \quad \blacksquare
\end{aligned}
$$

:::tip This formula is computationally more efficient and is the one you should use in exams. Just
remember: "mean of squares minus square of mean." :::

### 2.3 Sample variance

For sample data, the **unbiased estimator** of the population variance is

$$s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2 = \frac{\sum x_i^2 - n\bar{x}^2}{n-1}$$

The division by $n-1$ (Bessel's correction) accounts for the fact that $\bar{x}$ is estimated from
the same data, losing one degree of freedom.

---

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

An outlier is a value that lies more than $1.5 \times \text{IQR}$ below $Q_1$ or above $Q_3$:

$$\text{Lower fence} = Q_1 - 1.5 \times \text{IQR}$$
$$\text{Upper fence} = Q_3 + 1.5 \times \text{IQR}$$

Values outside these fences are potential outliers.

:::warning Different boards may define outliers differently. Always check your board's convention.
Some use $1.5 \times$ IQR, others use different multipliers. :::

---

## 4. Coding Data

### 4.1 Linear coding

**Definition.** Coding transforms data using $y = \dfrac{x - a}{c}$ where $a$ and $c$ are constants
($c \neq 0$).

### 4.2 Effect on summary statistics

If $y_i = \dfrac{x_i - a}{c}$, then:

$$\bar{y} = \frac{\bar{x} - a}{c}, \qquad \sigma_y = \frac{\sigma_x}{|c|}$$

**Proof.**

$$\bar{y} = \frac{1}{n}\sum y_i = \frac{1}{n}\sum\frac{x_i - a}{c} = \frac{1}{c}\left(\frac{\sum x_i}{n} - a\right) = \frac{\bar{x} - a}{c}$$

$$\sigma_y^2 = \frac{1}{n}\sum(y_i - \bar{y})^2 = \frac{1}{n}\sum\left(\frac{x_i - a}{c} - \frac{\bar{x}-a}{c}\right)^2 = \frac{1}{c^2}\cdot\frac{1}{n}\sum(x_i-\bar{x})^2 = \frac{\sigma_x^2}{c^2}$$

Hence $\sigma_y = \sigma_x/|c|$. $\blacksquare$

:::tip Coding makes computation easier when data values are large. Always work with coded data to
find the mean and standard deviation, then decode back. Remember: adding a constant shifts the mean
but does not affect the spread. :::

---

## 5. Frequency Tables and Grouped Data

### 5.1 Discrete frequency data

For data with frequencies $f_1, f_2, \ldots, f_k$:

$$\bar{x} = \frac{\sum f_i x_i}{\sum f_i}, \qquad \sigma^2 = \frac{\sum f_i x_i^2}{\sum f_i} - \bar{x}^2$$

### 5.2 Grouped continuous data

Use the **midpoint** of each class as the representative value. This introduces an approximation
since we lose information about the distribution within each class.

---

## Problem Set

<details>
<summary>Problem 1</summary>
For the dataset $\{3, 5, 7, 2, 8, 4, 6, 5\}$, find the mean, median, and mode.
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
For the ordered dataset $\{2, 3, 5, 7, 8, 11, 14, 18, 23\}$, find $Q_1$, $Q_2$, $Q_3$, and the IQR. Identify any outliers.
</details>

<details>
<summary>Solution 4</summary>
$n = 9$ (odd). $Q_2 = 5$th value $= 8$.

Lower half: $\{2, 3, 5, 7\}$. $Q_1 = (3+5)/2 = 4$. Upper half: $\{11, 14, 18, 23\}$.
$Q_3 = (14+18)/2 = 16$.

$\text{IQR} = 16 - 4 = 12$.

Lower fence: $4 - 1.5(12) = -14$. Upper fence: $16 + 1.5(12) = 34$.

All values are within $[-14, 34]$, so no outliers.

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
$$\sum(x_i - \bar{x}) = \sum x_i - n\bar{x} = \sum x_i - n \cdot \frac{\sum x_i}{n} = \sum x_i - \sum x_i = 0 \quad \blacksquare$$

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
$\sigma^2 = 360/10 = 36$, so $\sigma = 6$.

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
Income distributions are typically right-skewed — a small number of very high earners pull the mean upward. The median, being the middle value, is unaffected by extreme values and gives a more representative "typical" income. For example, if one billionaire lives in a village of 1000 people earning $30{,}000$, the mean would be vastly inflated while the median would remain close to $30{,}000$.

**If you get this wrong, revise:** [Comparing Measures](#15-comparing-measures) — Section 1.5.

</details>

:::

:::

:::

:::

:::
