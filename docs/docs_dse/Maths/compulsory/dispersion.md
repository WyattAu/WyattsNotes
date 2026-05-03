---
title: Dispersion
description: "DSE Mathematics statistics notes on measures of dispersion covering range, interquartile range, variance, standard deviation, and box-and-whisker plots."
date: 2025-06-03T16:18:22.480Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: dispersion
---

Statistics is the branch of mathematics concerned with the collection, organisation, analysis, and
interpretation of data. In the DSE compulsory syllabus, we focus on **descriptive statistics** --
summarising a dataset through measures of central tendency and measures of dispersion. This page
also covers grouped data techniques and graphical representations such as box-and-whisker plots.
These tools are frequently combined with [probability](probability)) concepts in exam questions.

## Measures of Central Tendency

A measure of central tendency identifies a single value that is representative of an entire dataset.

### Mean

The **mean** (arithmetic average) of a dataset $\{x_1, x_2, \ldots, x_n\}$ is defined as:

$$
\begin{aligned}
  \bar{x} = \frac{1}{n}\sum_{i=1}^{n} x_i
\end{aligned}
$$

The mean uses every data value, making it sensitive to outliers. It is the only measure of central
tendency that lends itself to algebraic manipulation (e.g., combining datasets).

<details>
<summary>Examples</summary>
- The scores of $5$ students are $72, 85, 90, 68, 80$. The mean is $\bar{x} = \frac{72+85+90+68+80}{5} = \frac{395}{5} = 79$.
- If every score is increased by $5$ bonus marks, the new mean is $79 + 5 = 84$.
</details>

### Median

The **median** is the middle value of an ordered dataset. For $n$ data values sorted in ascending
order:

- If $n$ is odd, the median is the value at position $\dfrac{n+1}{2}$.
- If $n$ is even, the median is the average of the values at positions $\dfrac{n}{2}$ and
  $\dfrac{n}{2}+1$.

The median is robust to outliers since it depends only on the position of data points, not their
magnitude.

<details>
<summary>Examples</summary>
- Dataset: $\{3, 7, 1, 9, 5\}$. Sorted: $\{1, 3, 5, 7, 9\}$. Median = $5$ (position $3$ of $5$).
- Dataset: $\{2, 4, 6, 8, 10, 12\}$. Median = $\frac{6+8}{2} = 7$ (average of positions $3$ and $4$).
- Salaries: $\{18000, 20000, 22000, 25000, 150000\}$. Median = $22000$, which is far more representative than the mean of $47000$.
</details>

### Mode

The **mode** is the value that occurs most frequently in a dataset. A dataset may be unimodal (one
mode), bimodal (two modes), multimodal, or have no mode at all.

The mode is the only measure of central tendency applicable to nominal (categorical) data.

<details>
<summary>Examples</summary>
- $\{4, 2, 7, 4, 3, 4, 8\}$: mode = $4$ (appears $3$ times).
- $\{5, 5, 8, 8, 10\}$: bimodal, modes are $5$ and $8$.
- $\{1, 2, 3, 4, 5\}$: no mode.
</details>

### Comparison of the Three Measures

| Measure | Uses all values | Affected by outliers | Applicable to categorical data | Unique value |
| ------- | :-------------: | :------------------: | :----------------------------: | :----------: |
| Mean    |       Yes       |         Yes          |               No               |     Yes      |
| Median  |       No        |          No          |               No               |     Yes      |
| Mode    |       No        |          No          |              Yes               |      No      |

## Measures of Dispersion

Measures of dispersion (spread) quantify how far individual data values deviate from the centre. Two
datasets can share the same mean yet have very different spreads.

### Range

$$
\begin{aligned}
  \mathrm{Range} = \mathrm{Maximum value} - \mathrm{Minimum value}
\end{aligned}
$$

The range is simple to compute but uses only two data points, making it highly sensitive to
outliers.

<details>
<summary>Examples</summary>
- $\{12, 15, 18, 22, 25\}$: range $= 25 - 12 = 13$.
- $\{5, 10, 10, 10, 10, 100\}$: range $= 95$, heavily distorted by the single outlier.
</details>

### Interquartile Range (IQR)

The **quartiles** divide an ordered dataset into four equal parts:

- $Q_1$ (lower quartile): the median of the lower half.
- $Q_2$ (median): the middle value.
- $Q_3$ (upper quartile): the median of the upper half.

$$
\begin{aligned}
  \mathrm{IQR} = Q_3 - Q_1
\end{aligned}
$$

The IQR is resistant to outliers since it ignores the most extreme $50\%$ of data.

<details>
<summary>Examples</summary>
- Dataset: $\{3, 5, 7, 8, 12, 14, 18, 20, 25\}$ ($n=9$, odd).
  - Lower half: $\{3, 5, 7, 8\}$, $Q_1 = \frac{5+7}{2} = 6$.
  - $Q_2 = 12$.
  - Upper half: $\{14, 18, 20, 25\}$, $Q_3 = \frac{18+20}{2} = 19$.
  - IQR $= 19 - 6 = 13$.
</details>

### Variance

Variance measures the average squared deviation from the mean. There are two versions depending on
whether the data represents the **entire population** or a **sample** drawn from a larger
population.

**Population variance** (divides by $n$):

$$
\begin{aligned}
  \sigma^2 = \frac{1}{n}\sum_{i=1}^{n}(x_i - \bar{x})^2
\end{aligned}
$$

**Sample variance** (divides by $n-1$):

$$
\begin{aligned}
  s^2 = \frac{1}{n-1}\sum_{i=1}^{n}(x_i - \bar{x})^2
\end{aligned}
$$

An equivalent computational formula is:

$$
\begin{aligned}
  \sigma^2 = \frac{1}{n}\left[\sum_{i=1}^{n}x_i^2 - \frac{1}{n}\left(\sum_{i=1}^{n}x_i\right)^2\right]
\end{aligned}
$$

**Why $n$ vs $n-1$?** Dividing by $n-1$ (Bessel's correction) provides an _unbiased_ estimator of
the population variance when working with a sample. Using only $n$ data points, the sample mean
$\bar{x}$ is closer to the data points than the true population mean $\mu$, so the squared
deviations tend to underestimate the true spread. Dividing by $n-1$ compensates for this. In the DSE
syllabus, unless the problem explicitly identifies the data as a sample, the population formula
(dividing by $n$) is typically expected.

<details>
<summary>Examples</summary>
- Dataset: $\{2, 4, 4, 4, 5, 5, 7, 9\}$ ($n=8$).
  - $\bar{x} = \frac{40}{8} = 5$.
  - $\sum(x_i - \bar{x})^2 = 9 + 1 + 1 + 1 + 0 + 0 + 4 + 16 = 32$.
  - Population variance: $\sigma^2 = \frac{32}{8} = 4$.
  - Sample variance: $s^2 = \frac{32}{7} \approx 4.57$.
</details>

### Standard Deviation

The **standard deviation** is the positive square root of the variance, restoring the units to match
the original data:

$$
\begin{aligned}
  \sigma = \sqrt{\sigma^2}, \qquad s = \sqrt{s^2}
\end{aligned}
$$

Since the standard deviation is in the same units as the data, it is more interpretable than the
variance for comparing spread.

<details>
<summary>Examples</summary>
- Following the previous example: $\sigma = \sqrt{4} = 2$, $s = \sqrt{\frac{32}{7}} \approx 2.14$.
- Two machines produce rods of length $10$ cm. Machine A has $\sigma = 0.1$ cm, Machine B has $\sigma = 0.5$ cm. Machine A is more precise.
</details>

## Grouped Data

When data is presented in a **grouped frequency distribution**, individual values are not available.
We work with class intervals instead.

### Key Definitions

- **Class boundaries**: The endpoints of each class interval, with no gaps between consecutive
  classes. For example, if raw intervals are $10$--$19$ and $20$--$29$, the class boundaries are
  $9.5$--$19.5$ and $19.5$--$29.5$.
- **Class width**: The difference between the upper and lower class boundaries.
- **Class mark (midpoint)**: $x_i = \dfrac{\mathrm{lower boundary} + \mathrm{upper boundary}}{2}$,
  used as the representative value for all data in the class.

### Mean of Grouped Data

$$
\begin{aligned}
  \bar{x} = \frac{\sum_{i=1}^{k} f_i x_i}{\sum_{i=1}^{k} f_i}
\end{aligned}
$$

where $k$ is the number of classes, $f_i$ is the frequency of class $i$, and $x_i$ is the class
mark.

### Assumed Mean Method (Coding Method)

When class marks are equally spaced, let $h$ be the common class width and $A$ be the class mark of
a convenient class (the assumed mean). Define $d_i = \dfrac{x_i - A}{h}$. Then:

$$
\begin{aligned}
  \bar{x} = A + \frac{\sum_{i=1}^{k} f_i d_i}{\sum_{i=1}^{k} f_i} \times h
\end{aligned}
$$

This method simplifies calculation by working with small integer values of $d_i$.

<details>
<summary>Examples</summary>
- The following frequency distribution records the marks of $40$ students:

| Class interval | $f_i$ | Class mark $x_i$ | $d_i$ | $f_i d_i$ |
| -------------- | ----- | ---------------- | ----- | --------- |
| 30 -- 39       | 4     | 34.5             | $-2$  | $-8$      |
| 40 -- 49       | 8     | 44.5             | $-1$  | $-8$      |
| 50 -- 59       | 14    | 54.5             | $0$   | $0$       |
| 60 -- 69       | 10    | 64.5             | $1$   | $10$      |
| 70 -- 79       | 4     | 74.5             | $2$   | $8$       |

Here $A = 54.5$, $h = 10$.

$$
\begin{aligned}
  \bar{x} &= 54.5 + \frac{-8-8+0+10+8}{40} \times 10 \\
          &= 54.5 + \frac{2}{40} \times 10 \\
          &= 54.5 + 0.5 = 55
\end{aligned}
$$

</details>

### Variance of Grouped Data

For grouped data, the population variance is:

$$
\begin{aligned}
  \sigma^2 = \frac{\sum_{i=1}^{k} f_i(x_i - \bar{x})^2}{\sum_{i=1}^{k} f_i}
\end{aligned}
$$

Or equivalently:

$$
\begin{aligned}
  \sigma^2 = \frac{1}{n}\left[\sum f_i x_i^2 - \frac{1}{n}\left(\sum f_i x_i\right)^2\right], \quad n = \sum f_i
\end{aligned}
$$

### Histogram Estimation

In a histogram, the area of each bar represents the frequency of the corresponding class. If class
widths are unequal, the height of each bar is the **frequency density**:

$$
\begin{aligned}
  \mathrm{Frequency density} = \frac{\mathrm{Frequency}}{\mathrm{Class width}}
\end{aligned}
$$

The median, quartiles, and other percentiles can be estimated from a cumulative frequency curve
(ogive) by linear interpolation within the relevant class.

## Properties of Variance

### Linear Transformation

For a dataset $X$ and constants $a, b$:

$$
\begin{aligned}
  \mathrm{Var}(aX + b) = a^2 \mathrm{Var}(X)
\end{aligned}
$$

Adding a constant $b$ shifts all values equally and does not affect spread. Multiplying by $a$
scales the spread by $|a|$.

For the mean: $\overline{aX+b} = a\bar{x} + b$.

<details>
<summary>Examples</summary>
- If $\bar{x} = 50$ and $\sigma^2 = 16$, then for $Y = 3X - 4$: $\bar{y} = 3(50)-4 = 146$ and $\mathrm{Var}(Y) = 9 \times 16 = 144$.
- Temperatures recorded in Celsius have mean $25$ and standard deviation $3$. In Fahrenheit ($F = 1.8C + 32$): mean $= 1.8(25)+32 = 77$, standard deviation $= 1.8 \times 3 = 5.4$.
</details>

### Combined Variance

Given two datasets $X$ and $Y$ with sizes $n_1$ and $n_2$, means $\bar{x}_1$ and $\bar{x}_2$, and
variances $\sigma_1^2$ and $\sigma_2^2$, the **combined variance** of the pooled dataset is:

$$
\begin{aligned}
  \sigma_c^2 = \frac{n_1 \sigma_1^2 + n_2 \sigma_2^2 + n_1(\bar{x}_1 - \bar{x}_c)^2 + n_2(\bar{x}_2 - \bar{x}_c)^2}{n_1 + n_2}
\end{aligned}
$$

where the combined mean is:

$$
\begin{aligned}
  \bar{x}_c = \frac{n_1 \bar{x}_1 + n_2 \bar{x}_2}{n_1 + n_2}
\end{aligned}
$$

The additional terms $n_1(\bar{x}_1 - \bar{x}_c)^2$ and $n_2(\bar{x}_2 - \bar{x}_c)^2$ account for
the between-group variation caused by the difference in means.

<details>
<summary>Examples</summary>
- Group A: $n_1 = 6$, $\bar{x}_1 = 10$, $\sigma_1^2 = 4$.
- Group B: $n_2 = 4$, $\bar{x}_2 = 20$, $\sigma_2^2 = 9$.

Combined mean: $\bar{x}_c = \frac{6(10)+4(20)}{10} = 14$.

$$
\begin{aligned}
  \sigma_c^2 &= \frac{6(4) + 4(9) + 6(10-14)^2 + 4(20-14)^2}{10} \\
             &= \frac{24 + 36 + 96 + 144}{10} = \frac{300}{10} = 30
\end{aligned}
$$

</details>

## Applications

### Coefficient of Variation

The **coefficient of variation (CV)** allows comparison of variability between datasets measured in
different units or with vastly different means:

$$
\begin{aligned}
  \mathrm{CV} = \frac{\sigma}{\bar{x}} \times 100\%
\end{aligned}
$$

A larger CV indicates greater relative dispersion.

<details>
<summary>Examples</summary>
- Investment A: mean return $= 8\%$, standard deviation $= 2\%$. CV $= \frac{2}{8} \times 100\% = 25\%$.
- Investment B: mean return $= 15\%$, standard deviation $= 5\%$. CV $= \frac{5}{15} \times 100\% \approx 33.3\%$.
- Investment A has lower relative risk.
</details>

### Box-and-Whisker Plots

A **box-and-whisker plot** is a standardised graphical display of the five-number summary: minimum,
$Q_1$, $Q_2$ (median), $Q_3$, and maximum.

**Construction:**

1. Draw a rectangular box from $Q_1$ to $Q_3$.
2. Draw a line inside the box at $Q_2$.
3. Extend "whiskers" to the minimum and maximum values.

**Identifying outliers:** A data point is considered a potential outlier if it falls below
$Q_1 - 1.5 \times \mathrm{IQR}$ or above $Q_3 + 1.5 \times \mathrm{IQR}$.

<details>
<summary>Examples</summary>
- Dataset: $\{5, 8, 12, 15, 18, 20, 24, 28, 35, 42, 58\}$ ($n=11$).
  - $Q_2 = 18$.
  - Lower half: $\{5, 8, 12, 15, 18\}$, $Q_1 = 12$.
  - Upper half: $\{18, 20, 24, 28, 35, 42, 58\}$, $Q_3 = 28$.
  - IQR $= 28 - 12 = 16$.
  - Lower fence: $12 - 1.5(16) = -12$.
  - Upper fence: $28 + 1.5(16) = 52$.
  - Since $58 > 52$, the value $58$ is an outlier. The upper whisker extends to $42$ instead.
</details>

### Skewness (DSE awareness)

While not computed algebraically in the compulsory syllabus, students should recognise:

- **Positively skewed**: mean $>$ median, the right tail is longer.
- **Negatively skewed**: mean $<$ median, the left tail is longer.
- **Symmetrical**: mean $=$ median $=$ mode (for unimodal distributions).

---

<details>
<summary>Wrap-up Questions</summary>
1. **Question:** The marks of $7$ students are $56, 62, 45, 78, 83, 71, 65$. Find the mean, median, and mode.
<details>
<summary>Answer</summary>
- Sorted: $\{45, 56, 62, 65, 71, 78, 83\}$.
- Mean: $\bar{x} = \frac{460}{7} \approx 65.7$.
- Median (position $4$ of $7$): $65$.
- Mode: none (all values are distinct).
</details>

2. **Question:** A dataset has mean $20$ and variance $36$. Find the mean and variance of the
transformed dataset $Y = \dfrac{X - 20}{6}$.
<details>
<summary>Answer</summary>

- $\bar{y} = \frac{1}{6}(20) - \frac{20}{6} = \frac{20-20}{6} = 0$.
- $\mathrm{Var}(Y) = \left(\frac{1}{6}\right)^2 \times 36 = \frac{1}{36} \times 36 = 1$.
</details>

3. **Question:** For the grouped frequency distribution below, find the mean and standard deviation
   using the coding method.

   | Class    | Frequency |
   | -------- | --------- |
   | 10 -- 19 | 5         |
   | 20 -- 29 | 12        |
   | 30 -- 39 | 18        |
   | 40 -- 49 | 10        |
   | 50 -- 59 | 5         |

<details>
<summary>Answer</summary>
- Class marks: $14.5, 24.5, 34.5, 44.5, 54.5$. Let $A = 34.5$, $h = 10$.
- $d_i$: $-2, -1, 0, 1, 2$.
- $\sum f_i = 50$, $\sum f_i d_i = 5(-2) + 12(-1) + 18(0) + 10(1) + 5(2) = -10 + (-12) + 0 + 10 + 10 = -2$.
- $\bar{x} = 34.5 + \frac{-2}{50} \times 10 = 34.5 - 0.4 = 34.1$.
- $\sum f_i d_i^2 = 5(4) + 12(1) + 18(0) + 10(1) + 5(4) = 20 + 12 + 0 + 10 + 20 = 62$.
- $\sigma_d^2 = rac{62}{50} - \left(rac{-2}{50}
ight)^2 = 1.24 - 0.0016 = 1.2384$.
- $\sigma^2 = 1.2384 	imes 10^2 = 123.84$, so $\sigma = \sqrt{123.84} pprox 11.13$.
</details>

4. **Question:** Two classes sat the same test. Class A ($n_1 = 30$, $\bar{x}_1 = 72$,
$\sigma_1 = 8$). Class B ($n_2 = 20$, $\bar{x}_2 = 80$, $\sigma_2 = 6$). Find the combined mean and
combined standard deviation.
<details>
<summary>Answer</summary>

- Combined mean:
  $\bar{x}_c = \frac{30(72)+20(80)}{50} = \frac{2160+1600}{50} = \frac{3760}{50} = 75.2$.
- Combined variance:
  $$
  \begin{aligned}
    \sigma_c^2 &= \frac{30(64) + 20(36) + 30(72-75.2)^2 + 20(80-75.2)^2}{50} \\
               &= \frac{1920 + 720 + 30(10.24) + 20(23.04)}{50} \\
               &= \frac{1920 + 720 + 307.2 + 460.8}{50} \\
               &= \frac{3408}{50} = 68.16
  \end{aligned}
  $$
- Combined standard deviation: $\sigma_c = \sqrt{68.16} \approx 8.26$.
</details>

5. **Question:** The following are the lifetimes (in hours) of $10$ light bulbs:
$820, 790, 810, 780, 830, 800, 795, 815, 805, 855$. Determine the range, IQR, and identify any
outliers.
<details>
<summary>Answer</summary>

- Sorted: $\{780, 790, 795, 800, 805, 810, 815, 820, 830, 855\}$.
- Range $= 855 - 780 = 75$.
- $Q_2 = \frac{805+810}{2} = 807.5$.
- Lower half: $\{780, 790, 795, 800, 805\}$, $Q_1 = 795$.
- Upper half: $\{810, 815, 820, 830, 855\}$, $Q_3 = 820$.
- IQR $= 820 - 795 = 25$.
- Lower fence: $795 - 1.5(25) = 757.5$. Upper fence: $820 + 1.5(25) = 857.5$.
- No outliers (all values lie within $[757.5, 857.5]$).
</details>

6. **Question:** A farmer records the yields (in kg) of two varieties of wheat over several seasons.
Variety A: mean $= 45$, standard deviation $= 5$. Variety B: mean $= 60$, standard deviation $= 9$.
Which variety has more consistent yield?
<details>
<summary>Answer</summary>

- CV$_A = \frac{5}{45} \times 100\% \approx 11.1\%$.
- CV$_B = \frac{9}{60} \times 100\% = 15.0\%$.
- Since CV$_A <$ CV$_B$, Variety A has more consistent (less variable) yield relative to its mean.
</details>

7. **Question:** Given the dataset $\{a, b, c\}$ with mean $10$ and variance $8$, find the value of
$a^2 + b^2 + c^2$.
<details>
<summary>Answer</summary>

- $\bar{x} = \frac{a+b+c}{3} = 10 \implies a+b+c = 30$.
- $\sigma^2 = \frac{a^2+b^2+c^2}{3} - \bar{x}^2 = 8$.
- $\frac{a^2+b^2+c^2}{3} - 100 = 8 \implies a^2+b^2+c^2 = 324$.
</details>

8. **Question:** A set of $20$ numbers has mean $15$ and standard deviation $3$. If each number is
multiplied by $2$ and then $5$ is added, find the new mean and new standard deviation.
<details>
<summary>Answer</summary>

- New mean: $2(15) + 5 = 35$.
- New variance: $2^2 \times 3^2 = 36$.
- New standard deviation: $\sqrt{36} = 6$.
</details>

9. **Question:** The histogram below (described verbally) shows the distribution of weights of $50$
   apples. The class intervals and frequencies are:

   | Weight (g) | Frequency |
   | ---------- | --------- |
   | 100 -- 119 | 6         |
   | 120 -- 139 | 14        |
   | 140 -- 159 | 20        |
   | 160 -- 179 | 8         |
   | 180 -- 199 | 2         |

Estimate the median weight from the cumulative frequency distribution.

<details>
<summary>Answer</summary>

- Cumulative frequencies: $6, 20, 40, 48, 50$.
- The median is the $\frac{50}{2} = 25$th value, which lies in the class $140$--$159$ (cumulative
  $20$ to $40$).
- Using linear interpolation within the class:
  $$
  \begin{aligned}
    \mathrm{Median} &= 139.5 + \frac{25-20}{40-20} \times (159.5 - 139.5) \\
                  &= 139.5 + \frac{5}{20} \times 20 \\
                  &= 139.5 + 5 = 144.5 \mathrm{ g}
  \end{aligned}
  $$

</details>

10. **Question:** For the dataset $\{3, 7, 7, 2, 9, 5, 1, 8, 6, 4\}$, find $\sum x_i$, $\sum x_i^2$,
the mean, and the population variance. Verify your variance using both the definition formula and
the computational formula.
<details>
<summary>Answer</summary>

- $\sum x_i = 3+7+7+2+9+5+1+8+6+4 = 52$.
- $\sum x_i^2 = 9+49+49+4+81+25+1+64+36+16 = 334$.
- $\bar{x} = \frac{52}{10} = 5.2$.
- **Definition formula:**
  $$
  \begin{aligned}
    \sigma^2 &= \frac{(3-5.2)^2 + (7-5.2)^2 + (7-5.2)^2 + (2-5.2)^2 + (9-5.2)^2 + (5-5.2)^2 + (1-5.2)^2 + (8-5.2)^2 + (6-5.2)^2 + (4-5.2)^2}{10} \\
             &= \frac{4.84+3.24+3.24+10.24+14.44+0.04+17.64+7.84+0.64+1.44}{10} \\
             &= \frac{63.6}{10} = 6.36
  \end{aligned}
  $$
- **Computational formula:**
  $$
  \begin{aligned}
    \sigma^2 &= \frac{334}{10} - \left(\frac{52}{10}\right)^2 = 33.4 - 27.04 = 6.36 \quad \checkmark
  \end{aligned}
  $$

</details>

11. **Question:** The weekly wages (in dollars) of $8$ workers in a small factory are
$3200, 3500, 3800, 4200, 4500, 4800, 5200, 12000$. The factory owner claims the average wage is
`USD 5150`. Is this claim misleading? Explain using an appropriate measure of central tendency and
dispersion.
<details>
<summary>Answer</summary>

- Mean: $\bar{x} = \frac{41200}{8} = 5150$. The owner's figure is arithmetically correct.
- Sorted: $\{3200, 3500, 3800, 4200, 4500, 4800, 5200, 12000\}$.
- Median: $\frac{4200+4500}{2} = 4350$.
- The median ($4350$) is a far more representative measure here. The single extreme value of
  `USD 12000` (likely the owner's own salary or a manager's) inflates the mean by `USD 800`. The median
  is resistant to outliers and better reflects what a typical worker earns.
- The range ($12000 - 3200 = 8800$) and the large gap between the mean and median both indicate
significant skewness, confirming the mean is a poor choice of summary statistic.
</details>

12. **Question:** A set of data has variance $25$ and mean $0$. A new set is formed by removing the
value $10$ from the original set. If the original set had $n = 6$ values, find the new mean and new
variance.
<details>
<summary>Answer</summary>

- Original: $\bar{x} = 0$, $\sigma^2 = 25$, $n = 6$.
- $\sum x_i = 0$, so $\sum x_i^2 = n\sigma^2 + \frac{(\sum x_i)^2}{n} = 6(25) + 0 = 150$.
- After removing $10$: new sum $= 0 - 10 = -10$, new $n' = 5$.
- New mean: $\bar{x}' = \frac{-10}{5} = -2$.
- New sum of squares: $150 - 100 = 50$.
- New variance: $\sigma'^2 = \frac{50}{5} - (-2)^2 = 10 - 4 = 6$.
</details>
</details>

For the A-Level treatment of this topic, see [Data Representation](https://alevel.wyattau.com/docs/maths/statistics/data-representation).

---

:::tip Diagnostic Test
Ready to test your understanding of **Dispersion**? The [diagnostic test](/Maths/diagnostics/diag-dispersion) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Dispersion with other DSE mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/Maths/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
