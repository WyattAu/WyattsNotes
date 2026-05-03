---
title: Statistics — Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for statistics covering grouped data, box plot skew, PMCC with coded data, and regression pitfalls.
slug: diag-statistics
hide_table_of_contents: true
---

# Statistics — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for statistics.

### UT-1: Identifying Skew from Quartile Positions

**Question:**

For a dataset, the quartiles are $Q_1 = 42$, $Q_2 = 55$, and $Q_3 = 70$.

**(a)** Determine whether the data is positively skewed, negatively skewed, or symmetric.

**(b)** A student argues: "Since $Q_2 - Q_1 = 13$ and $Q_3 - Q_2 = 15$, the data is positively skewed because $Q_3 - Q_2 \gt Q_2 - Q_1$." Is this reasoning correct?

**(c)** If the interquartile range is $IQR = 28$, state the outlier boundaries using the $1.5 \times IQR$ rule.

[Difficulty: hard. Tests interpretation of quartile positions to identify skewness and outlier detection.]

**Solution:**

**(a)** The distances from the median are:
- $Q_2 - Q_1 = 55 - 42 = 13$
- $Q_3 - Q_2 = 70 - 55 = 15$

Since $Q_3 - Q_2 \gt Q_2 - Q_1$, the right tail is longer than the left tail, indicating **positive skew**.

**(b)** The student's reasoning is correct in principle: positive skew means the right tail is longer. However, the student should note that this is a heuristic — formal skewness is measured by the moment coefficient $\frac{1}{n}\sum\left(\frac{x_i - \bar{x}}{s}\right)^3$, not just quartile differences. The quartile-based test is a quick check, not definitive proof.

**(c)** Lower fence: $Q_1 - 1.5 \times IQR = 42 - 42 = 0$.
Upper fence: $Q_3 + 1.5 \times IQR = 70 + 42 = 112$.

Outliers are values below $0$ or above $112$.

---

### UT-2: PMCC with Coded Data

**Question:**

A dataset has the following coded values. The coding is $y = \frac{x - 50}{10}$:

$$\sum y = 45, \quad \sum y^2 = 285, \quad n = 9$$

**(a)** Find $\bar{x}$ and $s_x$ (the standard deviation of $x$).

**(b)** A student computes $s_y = \sqrt{\frac{285}{9} - 25} = \sqrt{31.67 - 25} = \sqrt{6.67}$ and concludes $s_x = s_y$. Explain why this is wrong.

[Difficulty: hard. Tests coded data transformations and the effect on mean and standard deviation.]

**Solution:**

**(a)** $\bar{y} = \frac{45}{9} = 5$.

Since $y = \frac{x - 50}{10}$, we have $x = 10y + 50$:

$$\bar{x} = 10\bar{y} + 50 = 10(5) + 50 = 100$$

For the standard deviation: $s_x = 10s_y$.

$$s_y = \sqrt{\frac{\sum y^2}{n} - \bar{y}^2} = \sqrt{\frac{285}{9} - 25} = \sqrt{31.67 - 25} = \sqrt{6.67} \approx 2.58$$

$$s_x = 10 \times 2.58 = 25.8$$

**(b)** The student's error is concluding $s_x = s_y$. The coding $y = \frac{x-50}{10}$ scales by a factor of $\frac{1}{10}$ and shifts by $50$. Scaling by $c$ multiplies the standard deviation by $|c|$, so $s_x = 10s_y$, not $s_y$. The student forgot to account for the scaling factor. Additionally, the student used $\frac{285}{9} \approx 31.67$ and then subtracted $25$ (where $25 = 5^2$), which is correct for computing $s_y$, but then incorrectly applied the result to $s_x$.

---

## Integration Tests

> Tests synthesis of statistics with other topics.

### IT-1: Least Squares Regression and Summation (with Algebra)

**Question:**

Given five data points $(x_i, y_i)$ with $\sum x_i = 15$, $\sum y_i = 20$, $\sum x_i^2 = 55$, $\sum x_iy_i = 68$, and $\sum y_i^2 = 90$:

**(a)** Find the equation of the least squares regression line of $y$ on $x$ in the form $y = a + bx$.

**(b)** Find PMCC (Pearson product-moment correlation coefficient).

**(c)** Predict the value of $y$ when $x = 5$.

[Difficulty: hard. Combines regression computation with correlation analysis.]

**Solution:**

**(a)**

$$b = \frac{n\sum x_iy_i - \sum x_i \sum y_i}{n\sum x_i^2 - (\sum x_i)^2} = \frac{5(68) - 15(20)}{5(55) - 225} = \frac{340 - 300}{275 - 225} = \frac{40}{50} = 0.8$$

$$a = \bar{y} - b\bar{x} = \frac{20}{5} - 0.8 \times \frac{15}{5} = 4 - 2.4 = 1.6$$

Regression line: $y = 1.6 + 0.8x$.

**(b)**

$$r = \frac{n\sum x_iy_i - \sum x_i\sum y_i}{\sqrt{\big[n\sum x_i^2 - (\sum x_i)^2\big]\big[n\sum y_i^2 - (\sum y_i)^2\big]}}$$

$$= \frac{340 - 300}{\sqrt{(275 - 225)(450 - 400)}} = \frac{40}{\sqrt{50 \times 50}} = \frac{40}{50} = 0.8$$

**(c)** When $x = 5$: $y = 1.6 + 0.8(5) = 1.6 + 4 = 5.6$.
