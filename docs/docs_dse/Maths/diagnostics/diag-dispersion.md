---
title: Dispersion — Diagnostic Tests
description: "Diagnostic tests for DSE Dispersion: mean, variance, standard deviation, grouped data, box plots, and coding effects on statistics."
slug: diag-dispersion
hide_table_of_contents: true
---

# Dispersion — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for dispersion.

### UT-1: Variance vs Standard Deviation Units

**Question:**

The heights of 100 students have mean $165$ cm and variance $49$ cm$^2$. A new student of height $181$ cm joins the group. Find the new mean and new variance.

**Solution:**

Original: $n = 100$, $\bar{x} = 165$, $\sigma^2 = 49$.

Sum of original data: $\sum x_i = 100 \times 165 = 16500$.

Sum of squares of original data: $\sum x_i^2 = n(\sigma^2 + \bar{x}^2) = 100(49 + 27225) = 100 \times 27274 = 2727400$.

After adding 181:

New sum: $16500 + 181 = 16681$.

New $n = 101$.

New mean: $\bar{x}_{\text{new}} = \dfrac{16681}{101} \approx 165.16$.

New sum of squares: $2727400 + 181^2 = 2727400 + 32761 = 2760161$.

New variance: $\sigma^2_{\text{new}} = \dfrac{2760161}{101} - (165.16)^2 \approx 27328.33 - 27277.83 \approx 50.50$ cm$^2$.

Note: variance has units cm$^2$, while standard deviation has units cm.

---

### UT-2: Coding Effect on Mean and Standard Deviation

**Question:**

A set of data has mean $m$ and standard deviation $s$. If each value is transformed by $y = 3x - 5$, find the new mean and new standard deviation in terms of $m$ and $s$.

**Solution:**

For the transformation $y = ax + b$:

- New mean $= a \times \text{old mean} + b = 3m - 5$.
- New standard deviation $= |a| \times \text{old standard deviation} = 3s$.
- New variance $= a^2 \times \text{old variance} = 9s^2$.

The additive constant $-5$ affects the mean but NOT the standard deviation.

A common mistake is thinking the $-5$ affects the standard deviation.

---

### UT-3: Grouped Data Midpoints

**Question:**

Find the estimated mean and estimated standard deviation from the following grouped data:

| Class | Frequency |
|---|---|
| $0 \leq x \lt 10$ | 5 |
| $10 \leq x \lt 20$ | 8 |
| $20 \leq x \lt 30$ | 12 |
| $30 \leq x \lt 40$ | 5 |

**Solution:**

Midpoints: $5, 15, 25, 35$.

| $x$ | $f$ | $fx$ | $fx^2$ |
|---|---|---|---|
| 5 | 5 | 25 | 125 |
| 15 | 8 | 120 | 1800 |
| 25 | 12 | 300 | 7500 |
| 35 | 5 | 175 | 6125 |
| Total | 30 | 620 | 15550 |

Estimated mean: $\bar{x} = \dfrac{620}{30} = \dfrac{62}{3} \approx 20.67$.

Estimated variance: $\dfrac{15550}{30} - \left(\dfrac{62}{3}\right)^2 = \dfrac{1555}{3} - \dfrac{3844}{9} = \dfrac{4665 - 3844}{9} = \dfrac{821}{9} \approx 91.22$.

Estimated SD $= \sqrt{\dfrac{821}{9}} = \dfrac{\sqrt{821}}{3} \approx 9.56$.

---

### UT-4: Box Plot Interpretation

**Question:**

A box plot has minimum $= 10$, $Q_1 = 25$, median $= 35$, $Q_3 = 50$, maximum $= 80$. Find the interquartile range and identify any outliers.

**Solution:**

$\text{IQR} = Q_3 - Q_1 = 50 - 25 = 25$.

Lower fence: $Q_1 - 1.5 \times \text{IQR} = 25 - 37.5 = -12.5$.

Upper fence: $Q_3 + 1.5 \times \text{IQR} = 50 + 37.5 = 87.5$.

Since all values ($10$ to $80$) fall within $[-12.5,\; 87.5]$, there are no outliers.

---

### UT-5: Combined Data Sets

**Question:**

Set $A$ has $n_A = 8$, $\bar{x}_A = 10$, $s_A^2 = 4$. Set $B$ has $n_B = 12$, $\bar{x}_B = 15$, $s_B^2 = 9$. Find the mean and variance of the combined set $A \cup B$.

**Solution:**

Combined $n = 8 + 12 = 20$.

Combined mean: $\bar{x} = \dfrac{8 \times 10 + 12 \times 15}{20} = \dfrac{80 + 180}{20} = \dfrac{260}{20} = 13$.

Combined variance using the formula:

$$s^2 = \frac{n_A(s_A^2 + d_A^2) + n_B(s_B^2 + d_B^2)}{n_A + n_B}$$

where $d_A = \bar{x}_A - \bar{x} = 10 - 13 = -3$ and $d_B = \bar{x}_B - \bar{x} = 15 - 13 = 2$.

$$s^2 = \frac{8(4 + 9) + 12(9 + 4)}{20} = \frac{8 \times 13 + 12 \times 13}{20} = \frac{104 + 156}{20} = \frac{260}{20} = 13$$

---

## Integration Tests

> Tests synthesis of dispersion with other topics.

### IT-1: Dispersion and Probability (with Probability)

**Question:**

A random variable $X$ takes values $1, 2, 3, 4, 5$ with probabilities $\dfrac{1}{15}$, $\dfrac{2}{15}$, $\dfrac{3}{15}$, $\dfrac{4}{15}$, $\dfrac{5}{15}$ respectively. Find $E(X)$ and $\text{Var}(X)$.

**Solution:**

$$E(X) = 1 \times \frac{1}{15} + 2 \times \frac{2}{15} + 3 \times \frac{3}{15} + 4 \times \frac{4}{15} + 5 \times \frac{5}{15}$$

$$= \frac{1 + 4 + 9 + 16 + 25}{15} = \frac{55}{15} = \frac{11}{3}$$

$$E(X^2) = \frac{1 + 8 + 27 + 64 + 125}{15} = \frac{225}{15} = 15$$

$$\text{Var}(X) = E(X^2) - [E(X)]^2 = 15 - \frac{121}{9} = \frac{135 - 121}{9} = \frac{14}{9}$$

---

### IT-2: Dispersion and Inequalities (with Inequalities)

**Question:**

A set of 50 numbers has mean $20$ and standard deviation $4$. Using Chebyshev's inequality (or empirical reasoning), at least what percentage of the data lies within 2 standard deviations of the mean?

**Solution:**

Within 2 standard deviations: $20 \pm 2(4) = [12,\; 28]$.

By Chebyshev's inequality, at least $1 - \dfrac{1}{k^2} = 1 - \dfrac{1}{4} = \dfrac{3}{4} = 75\%$ of data lies within $k = 2$ standard deviations.

If the data is approximately normally distributed, the empirical rule gives approximately $95\%$, but Chebyshev gives the guaranteed minimum of $75\%$.

---

### IT-3: Dispersion and Combinatorics (with Combinatorics)

**Question:**

All possible samples of size 2 are drawn with replacement from the population $\\{2, 4, 6\\}$. Find the mean and variance of the sampling distribution of the sample mean.

**Solution:**

Population: $\\{2, 4, 6\\}$, $\mu = 4$, $\sigma^2 = \dfrac{(4+0+4)}{3} = \dfrac{8}{3}$.

All samples of size 2 with replacement (9 samples):

$(2,2), (2,4), (2,6), (4,2), (4,4), (4,6), (6,2), (6,4), (6,6)$.

Sample means: $2, 3, 4, 3, 4, 5, 4, 5, 6$.

Mean of sample means: $\dfrac{2+3+4+3+4+5+4+5+6}{9} = \dfrac{36}{9} = 4 = \mu$.

Variance of sample means: $\dfrac{(2-4)^2 + 2(3-4)^2 + 3(4-4)^2 + 2(5-4)^2 + (6-4)^2}{9}$

$= \dfrac{4 + 2 + 0 + 2 + 4}{9} = \dfrac{12}{9} = \dfrac{4}{3} = \dfrac{\sigma^2}{n}$.

This confirms: $E(\bar{X}) = \mu$ and $\text{Var}(\bar{X}) = \dfrac{\sigma^2}{n}$.
