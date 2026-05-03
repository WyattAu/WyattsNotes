---
title: Data Representation — Diagnostic Tests
description: Rigorous diagnostic tests for data representation covering outlier effects, misleading histograms, box plot skewness, data coding, and cumulative frequency.
slug: diag-data-representation
hide_table_of_contents: true
---

# Data Representation — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for data representation.

### UT-1: Outlier Effect on Measures of Central Tendency and Spread

**Question:**

A botanist records the heights (in cm) of 12 sunflower plants from a controlled growth experiment:

$$42,\; 45,\; 47,\; 48,\; 49,\; 50,\; 51,\; 52,\; 53,\; 54,\; 55,\; 180$$

**(a)** Calculate the mean, median, and mode of the full dataset.

**(b)** The value 180 cm is identified as a measurement error (the actual height was 58 cm). Recalculate the mean, median, and mode after correcting this value.

**(c)** The interquartile range and standard deviation are both measures of spread. Without calculating the standard deviation of the original (uncorrected) dataset, determine which measure of spread is more affected by the outlier. Justify your answer using the properties of each measure.

**(d)** A student argues: "Since the median barely changed, we should always use the median instead of the mean." Construct a counterexample with a small dataset where the median gives a misleading measure of central tendency.

[Difficulty: hard. Tests understanding of when each measure is preferred and requires constructing a counterexample.]

**Solution:**

**(a)** There are 12 data values, so $n = 12$.

**Mean:**
$$\bar{x} = \frac{42 + 45 + 47 + 48 + 49 + 50 + 51 + 52 + 53 + 54 + 55 + 180}{12} = \frac{826}{12} = 68.83 \text{ cm (2 d.p.)}$$

**Median:** Since $n = 12$ is even, the median is the average of the 6th and 7th values. The ordered data is already given in ascending order.

$$\text{Median} = \frac{50 + 51}{2} = 50.5 \text{ cm}$$

**Mode:** Every value appears exactly once, so there is no mode.

**(b)** Replacing 180 with 58 gives the dataset:

$$42,\; 45,\; 47,\; 48,\; 49,\; 50,\; 51,\; 52,\; 53,\; 54,\; 55,\; 58$$

**Mean:**
$$\bar{x} = \frac{704}{12} = 58.67 \text{ cm (2 d.p.)}$$

**Median:** Average of 6th and 7th values:

$$\text{Median} = \frac{50 + 51}{2} = 50.5 \text{ cm}$$

**Mode:** Still no mode.

**(c)** The standard deviation is more affected by the outlier. This is because the standard deviation involves squaring the deviations from the mean:

$$s = \sqrt{\frac{\sum(x_i - \bar{x})^2}{n-1}}$$

The outlier 180 is very far from the mean (about 111 cm away), so $(180 - 68.83)^2 \approx 12370$ contributes enormously to the sum of squared deviations. The interquartile range (IQR), by contrast, only uses $Q_1$ and $Q_3$, which depend on the middle 50% of the data. The outlier at 180 does not affect $Q_1$ or $Q_3$ at all, so the IQR is completely unchanged.

This is the fundamental advantage of the IQR over the standard deviation for skewed data or data with outliers: it is resistant (robust) to extreme values.

**(d)** Consider the dataset: $\{1, 1, 1, 1, 100\}$.

- Mean $= \frac{104}{5} = 20.8$
- Median $= 1$

The median of 1 suggests the "typical" value is 1, which is true for 4 out of 5 observations. However, the value 100 is a genuine part of the data (not an error), and the mean of 20.8 better reflects the overall level of the data. The median is misleading here because it completely ignores the magnitude of the upper tail.

This shows that the choice between mean and median depends on the context: the median is robust to outliers (good for error detection), but it discards information about the tails of the distribution.

---

### UT-2: Misleading Histograms with Unequal Class Widths

**Question:**

The frequency distribution below shows the daily commuting times (in minutes) for 200 employees at a large company:

| Commuting time $t$ (min) | Frequency |
|---|---|
| $0 \lt t \leq 10$ | 12 |
| $10 \lt t \leq 20$ | 38 |
| $20 \lt t \leq 35$ | 56 |
| $35 \lt t \leq 60$ | 65 |
| $60 \lt t \leq 90$ | 29 |

**(a)** A student draws a histogram using the frequency on the vertical axis and the commuting time on the horizontal axis, making all bars the same width. Explain why this histogram is misleading, and state the correct quantity to plot on the vertical axis.

**(b)** Calculate the frequency density for each class and estimate the mean commuting time.

**(c)** An employee claims "the most common commuting time is between 35 and 60 minutes." Determine whether this claim is supported by the data, carefully distinguishing between the class with the highest frequency and the class with the highest frequency density.

**(d)** Estimate the proportion of employees who commute for more than 50 minutes, using the assumption that values are uniformly distributed within each class.

[Difficulty: hard. Tests the critical distinction between frequency and frequency density with unequal class widths.]

**Solution:**

**(a)** The class widths are not equal: 10, 10, 15, 25, and 30 minutes respectively. When bars are drawn with equal width, the area of each bar is proportional to the frequency, but the **height** should be proportional to the **frequency density**, not the raw frequency. By plotting raw frequency as the bar height with equal-width bars, the visual impression over-represents narrow classes and under-represents wide classes.

The correct quantity for the vertical axis is the **frequency density**, defined as:

$$\text{Frequency density} = \frac{\text{Frequency}}{\text{Class width}}$$

**(b)** Frequency densities:

| Class | Width | Frequency | Frequency density |
|---|---|---|---|
| $0 \lt t \leq 10$ | 10 | 12 | 1.2 |
| $10 \lt t \leq 20$ | 10 | 38 | 3.8 |
| $20 \lt t \leq 35$ | 15 | 56 | 3.73 |
| $35 \lt t \leq 60$ | 25 | 65 | 2.6 |
| $60 \lt t \leq 90$ | 30 | 29 | 0.97 |

To estimate the mean, we use the midpoint of each class:

| Class | Midpoint $x$ | Frequency $f$ | $fx$ |
|---|---|---|---|
| $0 \lt t \leq 10$ | 5 | 12 | 60 |
| $10 \lt t \leq 20$ | 15 | 38 | 570 |
| $20 \lt t \leq 35$ | 27.5 | 56 | 1540 |
| $35 \lt t \leq 60$ | 47.5 | 65 | 3087.5 |
| $60 \lt t \leq 90$ | 75 | 29 | 2175 |

$$\sum f = 200, \quad \sum fx = 7432.5$$

$$\bar{x} = \frac{7432.5}{200} = 37.2 \text{ minutes}$$

**(c)** The class $35 \lt t \leq 60$ has the highest **frequency** (65), so more employees fall in this class than any other. However, the class with the highest **frequency density** is $10 \lt t \leq 20$ (density 3.8), meaning the data is most concentrated (per unit time interval) in the 10--20 minute range.

The employee's claim is supported in the sense that the largest **number** of employees commute for 35--60 minutes. But the claim could be misleading if interpreted as "the most common single commuting time is in this range," since the density is highest in the 10--20 minute range. The wide class width of the 35--60 minute class inflates its frequency.

**(d)** We need the proportion with $t > 50$.

- In the class $35 \lt t \leq 60$ (width 25, frequency 65): the fraction beyond 50 minutes is $\frac{60 - 50}{25} = \frac{10}{25} = 0.4$.

  Estimated frequency for $35 \lt t \leq 60$ with $t > 50$: $65 \times 0.4 = 26$.

- In the class $60 \lt t \leq 90$: all 29 employees commute for more than 50 minutes.

Total estimated frequency with $t > 50$: $26 + 29 = 55$.

$$\text{Proportion} = \frac{55}{200} = 0.275$$

So approximately 27.5% of employees commute for more than 50 minutes.

---

### UT-3: Data Coding and Its Effect on Summary Statistics

**Question:**

The temperatures (in degrees Celsius) at a weather station at noon on 15 consecutive days are recorded. The summary statistics for the raw data are:

$$\sum x = 285, \quad \sum x^2 = 5785$$

The data is coded using the formula $y = \frac{x - 10}{5}$.

**(a)** Find the mean and standard deviation of the coded data $y$.

**(b)** A student claims that the standard deviation of $y$ equals the standard deviation of $x$ divided by 5. Another student claims it equals the standard deviation of $x$ divided by $|5| = 5$, so they agree. A third student says the standard deviation of $y$ equals the standard deviation of $x$ divided by $b$ where $y = \frac{x - a}{b}$, and asks: "Does it matter whether $b$ is positive or negative?" Resolve this dispute with a clear explanation.

**(c)** A second weather station uses the coding $z = 3 - 2x$. Without recalculating from the raw data, find the mean and variance of $z$. Show that the variance of $z$ is the same as the variance of $w$ where $w = 2x - 3$, and explain why this is the case.

[Difficulty: hard. Tests the precise effect of coding on variance, particularly the role of $b^2$ vs $b$.]

**Solution:**

**(a)** For the raw data:

$$\bar{x} = \frac{\sum x}{n} = \frac{285}{15} = 19$$

$$S_{xx} = \sum x^2 - \frac{(\sum x)^2}{n} = 5785 - \frac{285^2}{15} = 5785 - \frac{81225}{15} = 5785 - 5415 = 370$$

$$\text{Variance of } x = \frac{S_{xx}}{n-1} = \frac{370}{14} = \frac{185}{7}$$

$$\text{SD of } x = \sqrt{\frac{185}{7}}$$

For the coded data $y = \frac{x - 10}{5} = \frac{1}{5}x - 2$:

$$\bar{y} = \frac{1}{5}\bar{x} - 2 = \frac{19}{5} - 2 = 3.8 - 2 = 1.8$$

For the standard deviation: if $y = \frac{x - a}{b}$, then $\text{SD}(y) = \frac{\text{SD}(x)}{|b|}$.

$$\text{SD}(y) = \frac{1}{|5|} \times \sqrt{\frac{185}{7}} = \frac{1}{5}\sqrt{\frac{185}{7}} = \sqrt{\frac{185}{175}} = \sqrt{\frac{37}{35}}$$

Alternatively:

$$\text{Variance of } y = \frac{1}{5^2} \times \text{Variance of } x = \frac{1}{25} \times \frac{185}{7} = \frac{185}{175} = \frac{37}{35}$$

**(b)** The key fact is:

$$\text{Var}(aX + b) = a^2 \text{Var}(X)$$

The constant $b$ (the additive shift) has **no effect** on the variance. The multiplicative factor $a$ affects the variance by $a^2$.

For $y = \frac{x - 10}{5} = \frac{1}{5}x + \left(\frac{-10}{5}\right) = \frac{1}{5}x - 2$:

$$\text{Var}(y) = \left(\frac{1}{5}\right)^2 \text{Var}(x) = \frac{1}{25}\text{Var}(x)$$

So $\text{SD}(y) = \frac{1}{5}\text{SD}(x)$.

The question about whether $b$ being positive or negative matters: **it does not**. Since the variance scales by $a^2 = \left(\frac{1}{b}\right)^2 = \frac{1}{b^2}$, and $b^2 = (-b)^2$, the sign of $b$ is irrelevant. If we had coded as $y = \frac{x - 10}{-5}$, the variance would be the same. The mean would flip ($\bar{y}$ becomes $-1.8$ instead of $1.8$), but the spread is identical.

The first two students are correct that SD($y$) = SD($x$) / 5. The third student is correct to ask the question, and the answer is: it does not matter because variance depends on $b^2$, not $b$.

**(c)** For $z = 3 - 2x = -2x + 3$:

$$\bar{z} = -2\bar{x} + 3 = -2(19) + 3 = -38 + 3 = -35$$

$$\text{Var}(z) = (-2)^2 \text{Var}(x) = 4 \times \frac{185}{7} = \frac{740}{7}$$

For $w = 2x - 3$:

$$\bar{w} = 2(19) - 3 = 38 - 3 = 35$$

$$\text{Var}(w) = 2^2 \text{Var}(x) = 4 \times \frac{185}{7} = \frac{740}{7}$$

The variances are equal: $\text{Var}(z) = \text{Var}(w)$.

This is because variance depends on the square of the scaling factor. Since both $z$ and $w$ use a scaling factor of magnitude 2, and $(-2)^2 = 2^2 = 4$, the variances are the same. The additive constant (3 or $-3$) and the sign of the multiplier only affect the mean, not the spread.

---

## Integration Tests

> Tests synthesis of data representation with other topics. Requires combining concepts from multiple units.

### IT-1: Probability Distribution from Grouped Data (with Probability)

**Question:**

A factory produces bolts, and the length $X$ mm of each bolt is measured. The grouped frequency distribution for 500 bolts is:

| Length $x$ (mm) | Frequency |
|---|---|
| $24.0 \leq x \lt 24.5$ | 20 |
| $24.5 \leq x \lt 25.0$ | 85 |
| $25.0 \leq x \lt 25.5$ | 160 |
| $25.5 \leq x \lt 26.0$ | 145 |
| $26.0 \leq x \lt 26.5$ | 75 |
| $26.5 \leq x \lt 27.0$ | 15 |

A bolt is classified as **defective** if its length is less than 24.5 mm or greater than 26.5 mm.

**(a)** Estimate the probability that a randomly selected bolt is defective.

**(b)** Bolts are packed in boxes of 10. Assuming the probability of a bolt being defective is independent between bolts and equal to your estimate from part (a), find the probability that a randomly selected box contains at least one defective bolt.

**(c)** The factory claims that the mean length of bolts is 25.5 mm. Using the midpoints of the classes, test this claim at the 5% significance level. You may assume the distribution of sample means is approximately normal. [The standard deviation of bolt lengths is estimated to be 0.60 mm.]

[Difficulty: hard. Combines grouped data estimation, binomial probability, and hypothesis testing.]

**Solution:**

**(a)** Defective bolts are those in the classes $24.0 \leq x \lt 24.5$ and $26.5 \leq x \lt 27.0$.

$$P(\text{defective}) = \frac{20 + 15}{500} = \frac{35}{500} = 0.07$$

**(b)** Let $D$ be the number of defective bolts in a box of 10. Then $D \sim B(10, 0.07)$.

Using the complement:

$$P(D \geq 1) = 1 - P(D = 0) = 1 - (0.93)^{10}$$

$$1 - (0.93)^{10} = 1 - 0.4839... = 0.516 \text{ (3 s.f.)}$$

There is approximately a 51.6% chance that a box contains at least one defective bolt.

**(c)** We test $H_0: \mu = 25.5$ against $H_1: \mu \neq 25.5$.

Estimate the sample mean using class midpoints:

| Class | Midpoint $x$ | Frequency $f$ | $fx$ |
|---|---|---|---|
| $24.0 \leq x \lt 24.5$ | 24.25 | 20 | 485 |
| $24.5 \leq x \lt 25.0$ | 24.75 | 85 | 2103.75 |
| $25.0 \leq x \lt 25.5$ | 25.25 | 160 | 4040 |
| $25.5 \leq x \lt 26.0$ | 25.75 | 145 | 3733.75 |
| $26.0 \leq x \lt 26.5$ | 26.25 | 75 | 1968.75 |
| $26.5 \leq x \lt 27.0$ | 26.75 | 15 | 401.25 |

$$\bar{x} = \frac{12732.5}{500} = 25.465 \text{ mm}$$

The test statistic under $H_0$:

$$z = \frac{\bar{x} - \mu}{\sigma / \sqrt{n}} = \frac{25.465 - 25.5}{0.60 / \sqrt{500}} = \frac{-0.035}{0.02683} = -1.305$$

For a two-tailed test at the 5% level, the critical values are $z = \pm 1.96$.

Since $-1.96 \lt -1.305 \lt 1.96$, the test statistic does not fall in the critical region.

**Conclusion:** There is insufficient evidence to reject $H_0$. The data is consistent with the factory's claim that the mean bolt length is 25.5 mm.

---

### IT-2: Regression Residuals and Box Plot Analysis (with Correlation and Regression)

**Question:**

A scientist investigates the relationship between the dosage $d$ (in mg) of a drug and the response time $r$ (in seconds) for 8 patients. The data is:

| $d$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|
| $r$ | 12.1 | 9.8 | 8.2 | 7.5 | 6.1 | 5.3 | 5.0 | 4.9 |

The regression line of $r$ on $d$ is $r = 12.08 - 0.953d$.

**(a)** Calculate the residuals for each patient and display them as a stem-and-leaf diagram.

**(b)** Construct a box plot of the residuals. Use the box plot to assess whether the linear model is appropriate. In your answer, identify any potential outlier and discuss whether removing it would change the slope of the regression line.

**(c)** The scientist fits a second regression line after removing the data point with the largest absolute residual. Without recalculating, predict whether the new regression line will have a steeper or less steep slope. Justify your answer by considering how the least squares criterion works.

[Difficulty: hard. Combines residual analysis, box plot construction, and understanding of leverage in regression.]

**Solution:**

**(a)** Residuals $= \text{observed} - \text{predicted}$:

| $d$ | Observed $r$ | Predicted $\hat{r} = 12.08 - 0.953d$ | Residual $r - \hat{r}$ |
|---|---|---|---|
| 1 | 12.1 | 11.127 | 0.973 |
| 2 | 9.8 | 10.174 | -0.374 |
| 3 | 8.2 | 9.221 | -1.021 |
| 4 | 7.5 | 8.268 | -0.768 |
| 5 | 6.1 | 7.315 | -1.215 |
| 6 | 5.3 | 6.362 | -1.062 |
| 7 | 5.0 | 5.409 | -0.409 |
| 8 | 4.9 | 4.456 | 0.444 |

Rounded to 2 d.p.: 0.97, $-0.37$, $-1.02$, $-0.77$, $-1.22$, $-1.06$, $-0.41$, 0.44.

Stem-and-leaf (key: $1 \mid -2 = -1.2$):

```
-1 | 2 1 0
-0 | 8 4 1
 0 | 4
 1 | 0
```

**(b)** Ordered residuals: $-1.22$, $-1.06$, $-1.02$, $-0.77$, $-0.41$, $-0.37$, 0.44, 0.97. ($n = 8$)

$Q_1$ = median of lower half $= \frac{-1.06 + (-1.02)}{2} = -1.04$

$Q_3$ = median of upper half $= \frac{-0.37 + 0.44}{2} = 0.035$

Median $= \frac{-0.77 + (-0.41)}{2} = -0.59$

$\text{IQR} = 0.035 - (-1.04) = 1.075$

Lower fence $= Q_1 - 1.5 \times \text{IQR} = -1.04 - 1.6125 = -2.6525$

Upper fence $= Q_3 + 1.5 \times \text{IQR} = 0.035 + 1.6125 = 1.6475$

No residuals fall outside the fences, so there are no outliers. The box plot would show:

- Whiskers from $-1.22$ to 0.97
- Box from $-1.04$ to 0.035
- Median line at $-0.59$

The residuals show a pattern: negative residuals are clustered for middle dosages ($d = 3, 4, 5, 6$) while positive residuals appear at the extremes ($d = 1, 8$). This U-shaped pattern in the residuals suggests the relationship may be slightly curved rather than perfectly linear, though the deviation is small.

**(c)** The largest absolute residual is at $d = 5$ (residual $= -1.22$). The observed value $r = 6.1$ is below the predicted value of 7.32, meaning the model over-predicts at this point.

Removing this point would likely make the slope **slightly less steep** (closer to zero). Here is why: the least squares regression line minimises the sum of squared residuals. The point at $d = 5$ pulls the line down (it lies below the line). Removing it reduces the "pull downward" at the centre of the data range, allowing the line to sit slightly higher in the middle. Since the endpoints ($d = 1, 8$) are close to the line, the line will adjust to be slightly flatter.

More precisely: the point $(5, 6.1)$ is below the current regression line, so it contributes a large negative residual. The least squares method adjusts to reduce this residual, which it does by pulling the line downward near $d = 5$. Without this point, there is less need for the line to dip in the middle, so the slope becomes slightly less negative (i.e., less steep in magnitude).

---

### IT-3: Continuous Probability Density Function and the Median (with Integration)

**Question:**

A continuous random variable $X$ has probability density function:

$$f(x) = \begin{cases} \frac{3}{64}x^2 & \quad 0 \leq x \leq 4 \\ 0 & \quad \text{otherwise} \end{cases}$$

**(a)** Verify that $f(x)$ is a valid probability density function.

**(b)** Find the median of $X$, giving your answer to 3 significant figures.

**(c)** Find the interquartile range of $X$.

**(d)** The values of $X$ are recorded as a grouped frequency distribution using the classes $0 \leq x \lt 1$, $1 \leq x \lt 2$, $2 \leq x \lt 3$, $3 \leq x \lt 4$. Estimate the mean and standard deviation from this grouped data, and compare your answers with the true values $\mathrm{E}(X) = 3$ and $\mathrm{SD}(X) = \frac{3}{\sqrt{5}}$. Comment on the accuracy of the grouped estimates.

[Difficulty: hard. Combines integration of a PDF, quartile calculation, and comparison of grouped vs exact statistics.]

**Solution:**

**(a)** A valid PDF must satisfy $f(x) \geq 0$ for all $x$ and $\int_{-\infty}^{\infty} f(x)\,dx = 1$.

Since $x^2 \geq 0$ and $\frac{3}{64} > 0$, we have $f(x) \geq 0$ on $[0, 4]$ and $f(x) = 0$ elsewhere.

$$\int_{0}^{4} \frac{3}{64}x^2\,dx = \frac{3}{64}\left[\frac{x^3}{3}\right]_0^4 = \frac{3}{64} \cdot \frac{64}{3} = 1 \checkmark$$

**(b)** The median $m$ satisfies $\int_{0}^{m} f(x)\,dx = 0.5$:

$$\int_{0}^{m} \frac{3}{64}x^2\,dx = \frac{3}{64} \cdot \frac{m^3}{3} = \frac{m^3}{64} = 0.5$$

$$m^3 = 32$$

$$m = 32^{1/3} = 3.1748... \approx 3.17 \text{ (3 s.f.)}$$

**(c)** $Q_1$ satisfies $\int_{0}^{Q_1} f(x)\,dx = 0.25$:

$$\frac{Q_1^3}{64} = 0.25 \implies Q_1^3 = 16 \implies Q_1 = 16^{1/3} = 2.520 \text{ (3 s.f.)}$$

$Q_3$ satisfies $\int_{0}^{Q_3} f(x)\,dx = 0.75$:

$$\frac{Q_3^3}{64} = 0.75 \implies Q_3^3 = 48 \implies Q_3 = 48^{1/3} = 3.634 \text{ (3 s.f.)}$$

$$\text{IQR} = Q_3 - Q_1 = 3.634 - 2.520 = 1.114 \approx 1.11 \text{ (3 s.f.)}$$

**(d)** First, the true expected value:

$$\mathrm{E}(X) = \int_{0}^{4} x \cdot \frac{3}{64}x^2\,dx = \frac{3}{64}\int_{0}^{4} x^3\,dx = \frac{3}{64}\left[\frac{x^4}{4}\right]_0^4 = \frac{3}{64} \cdot 64 = 3$$

$$\mathrm{E}(X^2) = \int_{0}^{4} x^2 \cdot \frac{3}{64}x^2\,dx = \frac{3}{64}\int_{0}^{4} x^4\,dx = \frac{3}{64}\left[\frac{x^5}{5}\right]_0^4 = \frac{3}{64} \cdot \frac{1024}{5} = \frac{3072}{320} = \frac{48}{5} = 9.6$$

$$\mathrm{Var}(X) = 9.6 - 9 = 0.6, \quad \mathrm{SD}(X) = \sqrt{0.6} = \frac{3}{\sqrt{5}} \approx 0.7746$$

Now the grouped estimates. We need the class frequencies. Since we are modelling from the PDF, the expected frequency in each class (out of a large sample) is proportional to the class probability:

| Class | Midpoint $x$ | $P(\text{class})$ | $x \cdot P$ | $x^2 \cdot P$ |
|---|---|---|---|---|
| $0 \leq x \lt 1$ | 0.5 | $\frac{1}{64} = 0.01563$ | 0.00781 | 0.00391 |
| $1 \leq x \lt 2$ | 1.5 | $\frac{7}{64} = 0.10938$ | 0.16406 | 0.24609 |
| $2 \leq x \lt 3$ | 2.5 | $\frac{19}{64} = 0.29688$ | 0.74219 | 1.85547 |
| $3 \leq x \lt 4$ | 3.5 | $\frac{37}{64} = 0.57813$ | 2.02344 | 7.08203 |

Estimated mean: $\bar{x} \approx 0.00781 + 0.16406 + 0.74219 + 2.02344 = 2.9375 \approx 2.94$

The true mean is 3. The grouped estimate underestimates by about 0.06, or roughly 2%. This error arises because the midpoint approximation assumes uniform distribution within each class, but the PDF is increasing, so the midpoint systematically underestimates the class mean for each class.

Estimated variance:

$$\mathrm{E}(X^2) \approx 0.00391 + 0.24609 + 1.85547 + 7.08203 = 9.1875$$

$$\text{Estimated Var} \approx 9.1875 - 2.9375^2 = 9.1875 - 8.6289 = 0.5586$$

$$\text{Estimated SD} \approx \sqrt{0.5586} \approx 0.747$$

The true SD is 0.775, so the grouped estimate underestimates by about 3.6%. The grouped frequency approach loses precision because it replaces the continuous distribution with a discrete approximation within each class.
