---
title: "Correlation and Regression -- Diagnostic Tests"
description: Hard diagnostic tests for correlation and regression covering PMCC, Spearman's rank, coding effects, residual analysis, and hypothesis testing for correlation.
slug: diag-correlation-and-regression
hide_table_of_contents: true
---

# Correlation and Regression — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for correlation and regression.

### UT-1: PMCC vs Spearman's Rank and Coding Invariance

**Question:**

An economist collects data on the annual income (in thousands of pounds) and annual savings (in hundreds of pounds) for 7 households:

| Income ($x$, in $\pounds 1000$) | 15 | 22 | 30 | 35 | 42 | 55 | 68 |
|---|---|---|---|---|---|---|---|
| Savings ($y$, in $\pounds 100$) | 3 | 8 | 12 | 18 | 22 | 35 | 48 |

**(a)** Calculate the product moment correlation coefficient (PMCC) for this data.

**(b)** The data is coded using $u = \frac{x}{1000}$ and $v = \frac{y}{100}$. A student claims that the PMCC of $u$ and $v$ will be different from the PMCC of $x$ and $y$ because "the units have changed." Determine whether this claim is correct, and explain your reasoning.

**(c)** Calculate Spearman's rank correlation coefficient for the original data.

**(d)** The economist considers fitting a regression line. Explain why the PMCC is the more appropriate measure of correlation here rather than Spearman's rank coefficient, and state one scenario where Spearman's rank would be preferred.

[Difficulty: hard. Tests the invariance property of PMCC and the distinction between the two correlation measures.]

**Solution:**

**(a)** We need $\sum x$, $\sum y$, $\sum x^2$, $\sum y^2$, $\sum xy$.

$$\sum x = 15 + 22 + 30 + 35 + 42 + 55 + 68 = 267$$

$$\sum y = 3 + 8 + 12 + 18 + 22 + 35 + 48 = 146$$

$$\sum x^2 = 225 + 484 + 900 + 1225 + 1764 + 3025 + 4624 = 12247$$

$$\sum y^2 = 9 + 64 + 144 + 324 + 484 + 1225 + 2304 = 4554$$

$$\sum xy = 45 + 176 + 360 + 630 + 924 + 1925 + 3264 = 7324$$

$$S_{xx} = 12247 - \frac{267^2}{7} = 12247 - \frac{71289}{7} = 12247 - 10184.14... = 2062.857$$

$$S_{yy} = 4554 - \frac{146^2}{7} = 4554 - \frac{21316}{7} = 4554 - 3045.143 = 1508.857$$

$$S_{xy} = 7324 - \frac{267 \times 146}{7} = 7324 - \frac{38982}{7} = 7324 - 5568.857 = 1755.143$$

$$r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}} = \frac{1755.143}{\sqrt{2062.857 \times 1508.857}}$$

$$= \frac{1755.143}{\sqrt{3111755.1}} = \frac{1755.143}{1764.02} = 0.9950 \text{ (4 d.p.)}$$

**(b)** The student's claim is **incorrect**. The PMCC is invariant under linear coding of the form $u = ax + b$ and $v = cy + d$ (where $a, c \neq 0$). Here $u = \frac{1}{1000}x$ and $v = \frac{1}{100}y$, which are linear transformations.

To see why: the PMCC is defined as $r = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}}$. Under coding:

$$S_{uv} = \sum uv - \frac{(\sum u)(\sum v)}{n} = ac \sum xy - ac \frac{(\sum x)(\sum y)}{n} = ac \cdot S_{xy}$$

$$S_{uu} = a^2 S_{xx}, \quad S_{vv} = c^2 S_{yy}$$

$$r_{uv} = \frac{ac \cdot S_{xy}}{\sqrt{a^2 S_{xx} \cdot c^2 S_{yy}}} = \frac{ac \cdot S_{xy}}{|ac|\sqrt{S_{xx} \cdot S_{yy}}} = \frac{S_{xy}}{\sqrt{S_{xx} \cdot S_{yy}}} = r_{xy}$$

The factors of $a$ and $c$ cancel out completely, so the PMCC is unchanged by scaling or shifting.

**(c)** Ranking the data:

| $x$ | Rank $R_x$ | $y$ | Rank $R_y$ | $d = R_x - R_y$ | $d^2$ |
|---|---|---|---|---|---|
| 15 | 1 | 3 | 1 | 0 | 0 |
| 22 | 2 | 8 | 2 | 0 | 0 |
| 30 | 3 | 12 | 3 | 0 | 0 |
| 35 | 4 | 18 | 4 | 0 | 0 |
| 42 | 5 | 22 | 5 | 0 | 0 |
| 55 | 6 | 35 | 6 | 0 | 0 |
| 68 | 7 | 48 | 7 | 0 | 0 |

$$\sum d^2 = 0$$

$$r_s = 1 - \frac{6 \sum d^2}{n(n^2 - 1)} = 1 - 0 = 1$$

Spearman's rank correlation coefficient is 1 (perfect rank correlation).

**(d)** The PMCC is more appropriate here because:

1. The data appears to follow an approximately linear relationship (PMCC $= 0.995$), so the PMCC correctly captures the strength of this linear association.
2. The PMCC uses the actual data values, giving a more precise measure of the strength of the linear relationship. Spearman's rank discards information about the magnitude of differences between values.

Spearman's rank would be preferred when:
- The relationship is monotonic but **not linear** (e.g., exponential or logarithmic).
- The data contains extreme outliers whose values would distort the PMCC but whose rank positions are not affected.
- The data is ordinal (ranked categories) rather than interval/ratio.

---

### UT-2: Regression Line Properties and Extrapolation Risk

**Question:**

The regression line of $y$ on $x$ for a dataset is given by $y = 4.2x - 3.1$, and the regression line of $x$ on $y$ is $x = 0.21y + 1.8$. The dataset has $n = 20$ observations with $\bar{x} = 5.0$ and $\bar{y} = 17.9$.

**(a)** Verify that the point $(\bar{x}, \bar{y})$ lies on both regression lines.

**(b)** Calculate the PMCC for the dataset.

**(c)** A student uses the regression line of $y$ on $x$ to predict $y$ when $x = 15$, obtaining $\hat{y} = 59.9$. Explain why this prediction may be unreliable, identifying the specific statistical concept that is violated.

**(d)** Show that the two regression lines intersect at the point $(\bar{x}, \bar{y})$, and explain geometrically why this must always be the case for any bivariate dataset.

[Difficulty: hard. Tests understanding of regression line properties, the relationship between the two regression lines, and extrapolation.]

**Solution:**

**(a)** On the line $y = 4.2x - 3.1$: when $x = 5.0$, $y = 4.2(5.0) - 3.1 = 21.0 - 3.1 = 17.9$. This matches $\bar{y}$. So $(\bar{x}, \bar{y}) = (5.0, 17.9)$ lies on the regression line of $y$ on $x$.

On the line $x = 0.21y + 1.8$: when $y = 17.9$, $x = 0.21(17.9) + 1.8 = 3.759 + 1.8 = 5.559$. This does **not** equal $\bar{x} = 5.0$.

This discrepancy means the regression coefficients as stated are not consistent with $\bar{x} = 5.0$ and $\bar{y} = 17.9$ simultaneously for both lines. Let me verify: if the regression line of $y$ on $x$ passes through $(5, 17.9)$, then $17.9 = 4.2(5) + c$, so $c = 17.9 - 21 = -3.1$. This checks out.

For the regression line of $x$ on $y$ to pass through $(5, 17.9)$: $5 = 0.21(17.9) + c$, so $c = 5 - 3.759 = 1.241$. But the given line has intercept $1.8$, not $1.241$. The given regression lines are not consistent.

For the remainder of this solution, I will use the corrected regression line of $x$ on $y$: $x = 0.21y + 1.241$, or equivalently I will derive $r$ from the $y$-on-$x$ line alone.

**(b)** From the regression line of $y$ on $x$: $y = 4.2x - 3.1$, the regression coefficient is $b_{yx} = 4.2$.

The formula for the regression coefficient is:

$$b_{yx} = r \cdot \frac{s_y}{s_x}$$

We need the standard deviations. Since we have $\bar{x} = 5.0$ and the regression line of $y$ on $x$ is $y = 4.2x - 3.1$:

We can use the relationship between the two regression coefficients:

$$b_{yx} \cdot b_{xy} = r^2$$

where $b_{xy}$ is the gradient of the regression line of $x$ on $y$. From the corrected line $x = 0.21y + 1.241$: $b_{xy} = 0.21$.

$$r^2 = 4.2 \times 0.21 = 0.882$$

$$r = \sqrt{0.882} = 0.939 \text{ (3 d.p.)}$$

We take the positive root because both regression coefficients are positive, indicating a positive association.

**(c)** The prediction at $x = 15$ is an **extrapolation** beyond the range of the data (the data has $\bar{x} = 5.0$ and likely spans a much smaller range around this mean). The regression line is only valid for interpolation within (or close to) the range of the observed data. Extrapolating assumes that the linear relationship continues to hold well beyond the observed range, which is often not the case in practice.

The specific statistical concept violated is that the least squares regression model assumes the relationship is linear over the relevant range. There is no evidence that linearity holds at $x = 15$.

**(d)** The regression line of $y$ on $x$ is:

$$y - \bar{y} = b_{yx}(x - \bar{x})$$

Setting $x = \bar{x}$ gives $y = \bar{y}$, confirming the line passes through $(\bar{x}, \bar{y})$.

Similarly, the regression line of $x$ on $y$ is:

$$x - \bar{x} = b_{xy}(y - \bar{y})$$

Setting $y = \bar{y}$ gives $x = \bar{x}$, confirming this line also passes through $(\bar{x}, \bar{y})$.

Geometrically, the point of means $(\bar{x}, \bar{y})$ is the "centre of gravity" of the data. The least squares criterion minimises the sum of squared vertical distances (for $y$ on $x$) or horizontal distances (for $x$ on $y$) from the line. The line of best fit must pass through the centre of gravity because shifting the line away from $(\bar{x}, \bar{y})$ would increase the total sum of squared residuals. Both regression lines must pass through this common point, so they always intersect there.

---

### UT-3: Residual Analysis and Least Squares Justification

**Question:**

A teacher believes there is a linear relationship between the number of hours a student revises ($h$) and their exam score ($s$). She collects data for 10 students and fits the regression line $s = 12.5h + 28$. The residuals are:

| $h$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|---|---|---|---|---|---|---|---|---|---|---|
| Residual | $-8$ | $-3$ | $1$ | $2$ | $3$ | $4$ | $2$ | $-1$ | $-5$ | $5$ |

**(a)** Verify that the sum of the residuals is zero, and explain why this must always be the case for a least squares regression line.

**(b)** Plot the residuals against $h$ and describe the pattern. What does this pattern suggest about the appropriateness of the linear model?

**(c)** The teacher considers fitting a quadratic model instead. Without fitting the model, explain what change in the residual pattern you would expect to see if the quadratic model were a better fit.

**(d)** A student claims: "Since the least squares line minimises the sum of squared residuals, it is the 'best' line in every sense." Explain why vertical distances (not perpendicular distances) are minimised, and give one situation where minimising vertical distances is inappropriate.

[Difficulty: hard. Tests deep understanding of the least squares method and residual diagnostics.]

**Solution:**

**(a)** Sum of residuals:

$$(-8) + (-3) + 1 + 2 + 3 + 4 + 2 + (-1) + (-5) + 5 = 0 \checkmark$$

This must always be zero because the least squares regression line of $y$ on $x$ satisfies $\hat{y} = a + bx$ where:

$$b = \frac{S_{xy}}{S_{xx}} = \frac{\sum(x_i - \bar{x})(y_i - \bar{y})}{\sum(x_i - \bar{x})^2}$$

$$a = \bar{y} - b\bar{x}$$

The sum of residuals is:

$$\sum e_i = \sum(y_i - \hat{y}_i) = \sum y_i - \sum(a + bx_i) = \sum y_i - na - b\sum x_i$$

Substituting $a = \bar{y} - b\bar{x}$:

$$= \sum y_i - n(\bar{y} - b\bar{x}) - b\sum x_i = \sum y_i - n\bar{y} + nb\bar{x} - b\sum x_i$$

Since $\sum y_i = n\bar{y}$ and $\sum x_i = n\bar{x}$:

$$= n\bar{y} - n\bar{y} + nb\bar{x} - nb\bar{x} = 0$$

The residuals always sum to zero because the regression line passes through $(\bar{x}, \bar{y})$, and the deviations from the mean sum to zero.

**(b)** Plotting residuals against $h$:

At $h = 1$: residual $= -8$
At $h = 2$: residual $= -3$
At $h = 3$: residual $= 1$
At $h = 4$: residual $= 2$
At $h = 5$: residual $= 3$
At $h = 6$: residual $= 4$
At $h = 7$: residual $= 2$
At $h = 8$: residual $= -1$
At $h = 9$: residual $= -5$
At $h = 10$: residual $= 5$

The residual plot shows a clear **curved pattern**: residuals are negative at low $h$, rise to positive around $h = 5$--$7$, then dip negative again at $h = 9$ before rising at $h = 10$. This curved (U-shaped or S-shaped) pattern in the residuals indicates that the relationship between $h$ and $s$ is **not purely linear**. A linear model is systematically under-predicting at the extremes and over-predicting in the middle (or vice versa), which is the hallmark of a non-linear relationship.

If the residuals were randomly scattered around zero with no discernible pattern, this would support the linearity assumption.

**(c)** If a quadratic model were a better fit, the residuals from the quadratic model should show **no systematic pattern** when plotted against $h$. Specifically:
- The curved pattern should disappear.
- The residuals should be randomly scattered above and below zero.
- The magnitude of the residuals should be roughly constant across the range of $h$ (homoscedasticity).

The quadratic model would capture the curvature in the data, so the remaining variation would be random rather than systematic.

**(d)** The least squares regression line of $y$ on $x$ minimises the **sum of squared vertical distances** because it treats $x$ as the independent (explanatory) variable and $y$ as the dependent (response) variable. The assumption is that $x$ is measured without error (or with negligible error) and all the random variation is in $y$. This is appropriate when we want to **predict $y$ from $x$**.

Minimising perpendicular distances would be inappropriate when:
- The two variables have different units or scales (e.g., predicting exam score from hours of revision). A perpendicular distance would mix the two units in a way that has no meaningful interpretation.
- One variable is clearly the predictor and the other the response. In prediction contexts, we care about vertical error (prediction error in $y$), not the geometric distance from the line.
- When there is substantial measurement error in both variables, neither "vertical" nor "perpendicular" least squares is ideal; techniques like Deming regression would be more appropriate, though this is beyond A-Level.

---

## Integration Tests

> Tests synthesis of correlation and regression with other topics. Requires combining concepts from multiple units.

### IT-1: Significance Test for Correlation Coefficient (with Hypothesis Testing)

**Question:**

A researcher investigates whether there is a correlation between the number of hours of sleep ($s$) and performance on a cognitive test ($p$) for a random sample of 12 adults. She calculates the PMCC to be $r = 0.58$.

**(a)** Stating your hypotheses clearly, test at the 5% significance level whether the population correlation coefficient $\rho$ is positive. Use the fact that the critical value for a one-tailed test with $n = 12$ at the 5% level is 0.497.

**(b)** A colleague suggests using a two-tailed test instead. Without recalculating, state whether the conclusion would change and explain why.

**(c)** The researcher then collects data for a larger sample of 30 adults and finds $r = 0.35$. Using the fact that the critical value for a one-tailed test with $n = 30$ at the 5% level is 0.306, test whether there is evidence of positive correlation. Compare your conclusion with part (a) and explain the role of sample size.

**(d)** Explain why the PMCC can be tested for significance using a critical value table, but Spearman's rank correlation coefficient requires a different table.

[Difficulty: hard. Combines correlation with formal hypothesis testing and understanding of sample size effects.]

**Solution:**

**(a)** **Hypotheses:**

$H_0: \rho = 0$ (no correlation in the population)

$H_1: \rho > 0$ (positive correlation in the population)

**Test:** One-tailed test at the 5% significance level.

**Critical value:** For $n = 12$ (so degrees of freedom $= 10$), the critical value is 0.497.

**Test statistic:** $r = 0.58$

Since $0.58 > 0.497$, the test statistic exceeds the critical value.

**Conclusion:** There is sufficient evidence to reject $H_0$ and conclude that there is evidence of a positive correlation between hours of sleep and cognitive test performance in the population.

**(b)** For a two-tailed test at the 5% level, the critical value would be higher (typically the two-tailed 5% critical value for $n = 12$ is approximately 0.576).

Since $r = 0.58 > 0.576$, the test statistic still exceeds the critical value, so the conclusion would **not change**. There would still be sufficient evidence to reject $H_0$.

However, note that the two-tailed test is more conservative: it requires stronger evidence because it tests for any non-zero correlation (positive or negative) rather than just positive correlation.

**(c)** **Hypotheses:**

$H_0: \rho = 0$, $H_1: \rho > 0$

**Critical value:** For $n = 30$ at the 5% level (one-tailed), the critical value is 0.306.

**Test statistic:** $r = 0.35$

Since $0.35 > 0.306$, we reject $H_0$.

**Comparison:** Both tests lead to rejection of $H_0$, but in part (a) the correlation was stronger ($r = 0.58$) with a smaller sample ($n = 12$), while in part (c) the correlation is weaker ($r = 0.35$) but the larger sample ($n = 30$) provides more evidence. The critical value decreases as $n$ increases because with more data, even a weak correlation becomes statistically significant. This illustrates that **statistical significance depends on both the strength of the correlation and the sample size**. A small sample needs a stronger correlation to achieve significance.

**(d)** The PMCC follows a known sampling distribution (related to the $t$-distribution) under the null hypothesis $H_0: \rho = 0$, assuming the population is bivariate normal. This allows the construction of critical value tables specific to the PMCC.

Spearman's rank correlation coefficient, $r_s$, is based on the ranks of the data rather than the raw values. Its sampling distribution under $H_0: \rho_s = 0$ is different from that of the PMCC. For small samples, $r_s$ has a discrete distribution (since ranks are integers), and the exact critical values are tabulated separately. The PMCC critical values cannot be used for Spearman's test because the distributions are different.

---

### IT-2: Expected Value of Regression Predictions (with Probability)

**Question:**

The regression line of exam mark $M$ on hours of revision $H$ for a large population of students is:

$$M = 5H + 20$$

The number of revision hours $H$ for a randomly selected student follows the distribution:

$$P(H = h) = \begin{cases} 0.1 & h = 1 \\ 0.2 & h = 2 \\ 0.3 & h = 3 \\ 0.25 & h = 4 \\ 0.15 & h = 5 \end{cases}$$

**(a)** Find $\mathrm{E}(H)$ and $\mathrm{Var}(H)$.

**(b)** Find $\mathrm{E}(M)$ using the regression line and the distribution of $H$.

**(c)** The variance of the actual exam marks around the regression line is $\sigma^2 = 25$. Find $\mathrm{Var}(M)$.

**(d)** A student studies for exactly 3 hours. The regression line predicts $M = 35$. Explain why the actual exam mark is unlikely to be exactly 35, and calculate the probability that a student who revises for 3 hours scores above 40, assuming the residuals are normally distributed.

[Difficulty: hard. Combines regression with probability distributions and properties of expectation/variance.]

**Solution:**

**(a)**

$$\mathrm{E}(H) = \sum h \cdot P(H = h) = 1(0.1) + 2(0.2) + 3(0.3) + 4(0.25) + 5(0.15)$$

$$= 0.1 + 0.4 + 0.9 + 1.0 + 0.75 = 3.15$$

$$\mathrm{E}(H^2) = 1(0.1) + 4(0.2) + 9(0.3) + 16(0.25) + 25(0.15)$$

$$= 0.1 + 0.8 + 2.7 + 4.0 + 3.75 = 11.35$$

$$\mathrm{Var}(H) = \mathrm{E}(H^2) - [\mathrm{E}(H)]^2 = 11.35 - 3.15^2 = 11.35 - 9.9225 = 1.4275$$

**(b)** Using the linearity of expectation:

$$\mathrm{E}(M) = \mathrm{E}(5H + 20) = 5\mathrm{E}(H) + 20 = 5(3.15) + 20 = 15.75 + 20 = 35.75$$

Alternatively, using the law of total expectation: the predicted mark for each value of $H$ is $5h + 20$, and we average these predictions weighted by the probability of each $h$. This gives the same result.

**(c)** The total variance of $M$ has two components:
1. Variance due to the variation in $H$ across students.
2. Variance due to the scatter around the regression line.

$$\mathrm{Var}(M) = \mathrm{Var}(5H + 20 + \varepsilon) = \mathrm{Var}(5H) + \mathrm{Var}(\varepsilon)$$

where $\varepsilon$ represents the random scatter (residuals), assumed independent of $H$.

$$\mathrm{Var}(5H) = 5^2 \mathrm{Var}(H) = 25 \times 1.4275 = 35.6875$$

$$\mathrm{Var}(\varepsilon) = \sigma^2 = 25$$

$$\mathrm{Var}(M) = 35.6875 + 25 = 60.6875$$

$$\mathrm{SD}(M) = \sqrt{60.6875} \approx 7.79$$

**(d)** The regression line gives the **expected** (mean) exam mark for a given number of revision hours. Individual students will score above or below this prediction due to other factors not captured by the model (natural ability, exam difficulty, etc.). The residual for a student who revises 3 hours is the difference between their actual mark and the predicted mark of 35.

Assuming the residuals are normally distributed with mean 0 and standard deviation $\sigma = 5$:

$$P(M > 40 \mid H = 3) = P\left(\frac{M - 35}{5} > \frac{40 - 35}{5}\right) = P(Z > 1)$$

$$= 1 - \Phi(1) = 1 - 0.8413 = 0.1587$$

The probability is approximately 0.159 (15.9%).

---

### IT-3: Outlier Removal and Recalculation (with Data Representation)

**Question:**

The data below shows the temperature ($T$, in $^\circ$C) and ice cream sales ($S$, in $\pounds$) at a shop on 8 days:

| $T$ | 12 | 15 | 18 | 20 | 22 | 25 | 28 | 30 |
|---|---|---|---|---|---|---|---|---|
| $S$ | 45 | 80 | 120 | 150 | 170 | 250 | 310 | 50 |

The regression line of $S$ on $T$ is $S = 12.34T - 102.9$ with PMCC $r = 0.893$.

**(a)** Identify the outlier in the data by examining the residuals. Explain why the value $S = 50$ when $T = 30$ is anomalous.

**(b)** After removing the outlier, the new summary statistics are: $n = 7$, $\bar{T} = 20$, $\bar{S} = 160.7$, $S_{TT} = 238$, $S_{SS} = 46247$, $S_{TS} = 3292$. Calculate the new PMCC and regression line.

**(c)** Calculate the percentage change in the PMCC after removing the outlier. Comment on the sensitivity of the PMCC to outliers compared to Spearman's rank correlation coefficient.

**(d)** Using the original data (with the outlier), a box plot of the residuals shows a value far below the lower whisker. Explain why removing outliers based solely on residual box plots can be dangerous, and suggest a more principled approach.

[Difficulty: hard. Combines outlier detection, recalculation of regression statistics, and critical evaluation of outlier removal.]

**Solution:**

**(a)** Calculating residuals from $S = 12.34T - 102.9$:

| $T$ | $S$ (observed) | $S$ (predicted) | Residual |
|---|---|---|---|
| 12 | 45 | 45.2 | $-0.2$ |
| 15 | 80 | 82.2 | $-2.2$ |
| 18 | 120 | 119.2 | 0.8 |
| 20 | 150 | 143.9 | 6.1 |
| 22 | 170 | 168.6 | 1.4 |
| 25 | 250 | 205.6 | 44.4 |
| 28 | 310 | 242.7 | 67.3 |
| 30 | 50 | 267.3 | $-217.3$ |

The residual for $T = 30$ is $-217.3$, which is enormously negative. The predicted sales for $T = 30^\circ$C should be around $\pounds 267$, but the observed value is only $\pounds 50$. This is almost certainly a data entry error (perhaps the sales were $\pounds 350$ or the temperature was recorded incorrectly). The residual of $-217.3$ is an extreme outlier compared to all other residuals (which range from $-2.2$ to $67.3$).

**(b)** After removing the outlier ($T = 30, S = 50$):

$$r = \frac{S_{TS}}{\sqrt{S_{TT} \cdot S_{SS}}} = \frac{3292}{\sqrt{238 \times 46247}}$$

$$= \frac{3292}{\sqrt{11006786}} = \frac{3292}{3317.65} = 0.9923 \text{ (4 d.p.)}$$

Regression coefficient:

$$b = \frac{S_{TS}}{S_{TT}} = \frac{3292}{238} = 13.832$$

Intercept:

$$a = \bar{S} - b\bar{T} = 160.7 - 13.832(20) = 160.7 - 276.64 = -115.94$$

New regression line: $S = 13.83T - 116$ (to 3 s.f.)

**(c)** Original PMCC: $r = 0.893$. New PMCC: $r = 0.992$.

$$\text{Percentage change} = \frac{0.992 - 0.893}{0.893} \times 100 = \frac{0.099}{0.893} \times 100 = 11.1\%$$

The PMCC increased by approximately 11.1%. This demonstrates that the PMCC is **sensitive to outliers** because it uses the actual data values (and their deviations from the mean). A single extreme value can substantially reduce the PMCC.

Spearman's rank correlation coefficient would be much less affected. In the original data, the ranks of both $T$ and $S$ are mostly in the same order (except the outlier at $T = 30$ has rank 8 for $T$ but rank 1 for $S$). This single rank inversion would change $r_s$ by a moderate amount, but much less than the 11% change in the PMCC. This is because Spearman's only uses rank positions, not the magnitudes of the deviations.

**(d)** Removing outliers based solely on residual box plots can be dangerous because:

1. **The outlier may be a genuine data point** that reflects a real phenomenon (e.g., the shop was closed early that day, explaining low sales despite high temperature). Removing genuine outliers biases the analysis.

2. **The residual box plot itself depends on the regression line**, which is influenced by the outlier. If the outlier pulls the regression line, the residuals of other points change, potentially creating false outliers or masking real ones.

3. **Confirmation bias:** Researchers may be tempted to remove outliers that contradict their hypothesis, leading to inflated correlation coefficients and misleading conclusions.

A more principled approach:
- Investigate the source of the outlier (data entry error, equipment malfunction, etc.).
- If the outlier is confirmed as an error, correct or remove it.
- If the outlier is genuine, consider using robust methods (e.g., Spearman's rank) or report results both with and without the outlier.
- Use domain knowledge to determine whether the value is plausible.
