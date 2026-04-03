---
title: Correlation and Regression
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: correlation-and-regression
---

## Board Coverage

| Board      | Paper   | Notes                               |
| ---------- | ------- | ----------------------------------- |
| AQA        | Paper 1 | PMCC, regression lines              |
| Edexcel    | P1      | Includes Spearman's rank            |
| OCR (A)    | Paper 1 | Similar                             |
| CIE (9709) | P1, P6  | Correlation and regression in P1/P6 |

:::info The formula booklet gives the formula for PMCC and the least squares regression line. You
must be able to interpret these and understand their limitations. :::

---

## 1. Pearson's Product Moment Correlation Coefficient (PMCC)

### 1.1 Definition

**Definition.** For bivariate data $(x_1,y_1),\ldots,(x_n,y_n)$, the PMCC is

$$r = \frac{S_{xy}}{\sqrt{S_{xx}\,S_{yy}}}$$

where

$$S_{xx} = \sum(x_i-\bar{x})^2 = \sum x_i^2 - n\bar{x}^2$$
$$S_{yy} = \sum(y_i-\bar{y})^2 = \sum y_i^2 - n\bar{y}^2$$
$$S_{xy} = \sum(x_i-\bar{x})(y_i-\bar{y}) = \sum x_i y_i - n\bar{x}\bar{y}$$

### 1.2 Properties

- $-1 \leq r \leq 1$
- $r = 1$: perfect positive linear correlation
- $r = -1$: perfect negative linear correlation
- $r = 0$: no linear correlation (but there may be non-linear relationship)
- $r$ measures the strength of **linear** relationship only

:::warning Correlation does not imply causation. Two variables may be strongly correlated because
they are both influenced by a third (confounding) variable, or by coincidence. :::

### 1.3 Real-World Applications

**Economics:** GDP per capita and life expectancy across countries typically show $r \approx 0.7$ to
$0.85$. The relationship is strong but non-linear at high income levels (diminishing returns). The
PMCC captures the overall linear trend but underestimates the strength of the relationship at lower
incomes.

**Medical studies:** Dose-response relationships often yield strong positive PMCC values. A clinical
trial might find $r = 0.92$ between drug dosage and reduction in blood pressure, suggesting a strong
linear dose-response. However, biological systems typically have thresholds and saturation points
where linearity breaks down.

**Psychology:** Study hours and exam scores often show moderate positive correlation
($r \approx 0.4$ to $0.7$). The PMCC captures the linear trend, but individual variation means
prediction is imprecise — a student studying 10 hours could score anywhere on a wide range. This
illustrates that even a moderate $r$ does not guarantee accurate individual predictions.

---

## 2. Spearman's Rank Correlation Coefficient

### 2.1 Definition

When data are ranked, Spearman's coefficient is

$$r_s = 1 - \frac{6\sum d_i^2}{n(n^2-1)}$$

where $d_i$ is the difference in ranks for the $i$-th pair.

### 2.2 When to use

- Data is ordinal (ranked categories)
- The relationship is monotonic but not necessarily linear
- There are outliers that would distort the PMCC

### 2.3 Handling tied ranks

When values are tied, assign the average of the ranks they would have occupied. The simplified
formula above does not account for ties — a correction factor is needed for tied data.

### 2.4 PMCC vs. Spearman's Rank: When to Use Which

| Criterion                    | PMCC                        | Spearman's                |
| ---------------------------- | --------------------------- | ------------------------- |
| Data type                    | Continuous (interval/ratio) | Ordinal or continuous     |
| Relationship type            | Linear only                 | Any monotonic             |
| Sensitivity to outliers      | High                        | Low (ranks reduce impact) |
| Distribution assumption      | Bivariate normal            | None                      |
| Power (when assumptions met) | Higher                      | Lower                     |

**Key point:** If the data has a strong linear relationship and no extreme outliers, PMCC is
preferred as it uses more information from the data. If the relationship is clearly monotonic but
curved, or if outliers are present, Spearman's is more appropriate.

**Example.** Consider judge rankings in a competition. The data is inherently ordinal, so Spearman's
rank is the natural choice regardless of whether PMCC could technically be computed. Similarly, in a
psychology study measuring agreement between two raters on a Likert scale, Spearman's is the
standard choice.

---

## 3. Least Squares Regression

### 3.1 Derivation

**Problem.** Find the line $y = a + bx$ that minimises

$$S(a,b) = \sum_{i=1}^{n}(y_i - a - bx_i)^2$$

### 3.2 Derivation using partial derivatives

Setting $\dfrac{\partial S}{\partial a} = 0$ and $\dfrac{\partial S}{\partial b} = 0$:

$$\frac{\partial S}{\partial a} = -2\sum(y_i - a - bx_i) = 0 \implies \sum y_i = na + b\sum x_i \tag{1}$$

$$\frac{\partial S}{\partial b} = -2\sum x_i(y_i - a - bx_i) = 0 \implies \sum x_i y_i = a\sum x_i + b\sum x_i^2 \tag{2}$$

From (1): $a = \bar{y} - b\bar{x}$.

Substituting into (2):

$$\sum x_i y_i = (\bar{y}-b\bar{x})\sum x_i + b\sum x_i^2 = n\bar{x}\bar{y} - bn\bar{x}^2 + b\sum x_i^2$$

$$\sum x_i y_i - n\bar{x}\bar{y} = b\left(\sum x_i^2 - n\bar{x}^2\right)$$

$$S_{xy} = b\,S_{xx}$$

$$\boxed{b = \frac{S_{xy}}{S_{xx}} = \frac{\sum x_i y_i - n\bar{x}\bar{y}}{\sum x_i^2 - n\bar{x}^2}}$$

$$\boxed{a = \bar{y} - b\bar{x}}$$

---

## 4. The Regression Line Passes Through $(\bar{x}, \bar{y})$

**Theorem.** The least squares regression line $y = a + bx$ passes through the point
$(\bar{x}, \bar{y})$.

**Proof.** Substituting $x = \bar{x}$:

$$y = a + b\bar{x} = (\bar{y} - b\bar{x}) + b\bar{x} = \bar{y}$$

So $(\bar{x}, \bar{y})$ lies on the regression line. $\blacksquare$

**Intuition.** The regression line passes through the "centre of mass" of the data. This makes sense
— the best-fit line should balance the data around it, just as the mean balances a univariate
dataset.

---

## 5. Interpreting Regression

### 5.1 Residuals

The **residual** for the $i$-th data point is $e_i = y_i - (a + bx_i)$.

Properties:

- $\sum e_i = 0$ (the residuals sum to zero)
- The least squares line minimises $\sum e_i^2$

### 5.2 Extrapolation

:::warning The regression line should only be used for **interpolation** (predicting within the
range of the data). **Extrapolation** (predicting outside the data range) is unreliable because the
linear relationship may not hold. :::

### 5.3 Regression of $y$ on $x$ vs. $x$ on $y$

The regression line of $y$ on $x$ minimises vertical residuals ($y_i - \hat{y}_i$). The regression
line of $x$ on $y$ minimises horizontal residuals ($x_i - \hat{x}_i$).

These are different lines unless $r = \pm 1$. The two regression lines intersect at
$(\bar{x}, \bar{y})$.

### 5.4 Residual Plots

A **residual plot** graphs the residuals $e_i$ against the fitted values $\hat{y}_i$ (or against
$x_i$).

**What to look for:**

- **Random scatter** around zero: the linear model is appropriate.
- **Curved pattern** (e.g., U-shape): the relationship is non-linear; a linear model is unsuitable.
- **Funnel shape** (increasing spread): the variance is not constant (heteroscedasticity);
  predictions are less reliable at extremes.

Residual plots are a diagnostic tool — they reveal whether the assumptions of linear regression are
met. In A Level exams, you may be asked to comment on a residual plot to assess whether the
regression line is a good model.

### 5.5 Outliers and Influential Points

An **outlier** is a point with a large residual — it falls far from the regression line. An
**influential point** is an outlier with high leverage, meaning its $x$-value is far from $\bar{x}$.
Influential points can pull the regression line significantly toward themselves.

**Effect on PMCC:** A single influential point can dramatically change $r$. For example, adding an
extreme point to a dataset with $r = 0.3$ could push $r$ to $0.8$ or change its sign entirely. This
is why it is essential to inspect scatter plots alongside numerical summaries.

**Example.** In a study of height vs. salary across 50 people, most data shows weak positive
correlation ($r \approx 0.2$). If one NBA player earning millions is included, the PMCC may jump to
$r \approx 0.6$, giving a misleading impression. In such cases, Spearman's rank is more robust
because ranking reduces the disproportionate influence of extreme values.

### 5.6 Dangers of Extrapolation

**Economic example:** A regression model based on UK inflation data from 2010--2020 (rates between
0% and 3%) might predict negative inflation for certain conditions. Extrapolating to predict 2022
inflation (which reached 11.1%) would produce wildly inaccurate results because the underlying
economic conditions changed entirely.

**Medical example:** A linear dose-response model calibrated for doses of 0--50 mg might predict
$y = -3$ for a dose of 0 mg, which is physically impossible (negative response). The model is only
valid within its calibration range. Biological systems typically exhibit thresholds and saturation
effects that linear models cannot capture.

**General principle:** Always state the range of the original data and note that predictions outside
this range are unreliable. In exam questions, you will typically lose marks if you extrapolate
without commenting on the limitation.

---

## 6. Coding in Regression

If we code $u = \dfrac{x-p}{q}$ and $v = \dfrac{y-r}{s}$, and find the regression line $v = c + du$,
then:

- The gradient in terms of original variables: $b = \dfrac{s}{q}d$
- The intercept: $a = r + s \cdot c - b \cdot p$

### 6.1 Effect of Coding on Correlation

Coding **does not change** the PMCC or Spearman's rank correlation coefficient.

**Why?** PMCC is based on standardised quantities. Coding $x \mapsto u = (x-p)/q$ is a linear
transformation (shift by $p$, scale by $1/q$), and $r$ is invariant under linear transformations of
either variable. Similarly, Spearman's uses ranks, which are unaffected by any monotonic
transformation including linear coding.

**Effect on regression:** Coding changes the gradient and intercept of the regression line, as shown
in Section 6, but the underlying relationship between the variables is unchanged. The coefficient of
determination $r^2$ is also invariant under coding.

### 6.2 Worked Example: Coding with Economic Data

An economist records quarterly revenue and advertising spend. To simplify calculations, she codes
$u = x/10$ (where $x$ is advertising in GBP) and $v = y/1000$ (where $y$ is revenue in GBP).

If the coded regression line is $v = 2.3 + 0.7u$, then in original variables:

$$\frac{y}{1000} = 2.3 + 0.7\left(\frac{x}{10}\right)$$

$$y = 2300 + 70x$$

The gradient $b = 70$ means each additional GBP spent on advertising is associated with an increase
of GBP 70 in revenue. The PMCC calculated from the coded data would be identical to the PMCC from
the original data.

---

## Problem Set

<details>
<summary>Problem 1</summary>
Calculate the PMCC for the data: $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$, $(5,7)$.
</details>

<details>
<summary>Solution 1</summary>
$n=5$, $\bar{x}=3$, $\bar{y}=4.2$.

$\sum x^2 = 55$, $\sum y^2 = 103$, $\sum xy = 67$.

$S_{xx} = 55 - 5(9) = 10$. $S_{yy} = 103 - 5(17.64) = 103 - 88.2 = 14.8$.
$S_{xy} = 67 - 5(3)(4.2) = 67 - 63 = 4$.

$r = \dfrac{4}{\sqrt{10 \times 14.8}} = \dfrac{4}{\sqrt{148}} = \dfrac{4}{12.166} \approx 0.329$.

**If you get this wrong, revise:**
[Pearson's PMCC](#1-pearsons-product-moment-correlation-coefficient-pmcc) — Section 1.

</details>

<details>
<summary>Problem 2</summary>
Find the equation of the regression line of $y$ on $x$ for the data in Problem 1.
</details>

<details>
<summary>Solution 2</summary>
$b = S_{xy}/S_{xx} = 4/10 = 0.4$.

$a = \bar{y} - b\bar{x} = 4.2 - 0.4(3) = 4.2 - 1.2 = 3.0$.

Regression line: $y = 3.0 + 0.4x$.

**If you get this wrong, revise:** [Least Squares Regression](#3-least-squares-regression) —
Section 3.

</details>

<details>
<summary>Problem 3</summary>
For the data below, calculate Spearman's rank correlation coefficient.

| $x$ | 10 | 20 | 30 | 40 | 50 | | $y$ | 15 | 25 | 18 | 35 | 42 |

</details>

<details>
<summary>Solution 3</summary>
Ranks of $x$: 1, 2, 3, 4, 5. Ranks of $y$: 1, 3, 2, 4, 5.

| $d$ | 0 | -1 | 1 | 0 | 0 |

$\sum d^2 = 0 + 1 + 1 + 0 + 0 = 2$.

$r_s = 1 - \dfrac{6 \times 2}{5(25-1)} = 1 - \dfrac{12}{120} = 1 - 0.1 = 0.9$.

**If you get this wrong, revise:**
[Spearman's Rank Correlation](#2-spearmans-rank-correlation-coefficient) — Section 2.

</details>

<details>
<summary>Problem 4</summary>
Prove that $\sum e_i = 0$ where $e_i = y_i - (a + bx_i)$ are the residuals of the least squares regression line.
</details>

<details>
<summary>Solution 4</summary>
$$\sum e_i = \sum y_i - na - b\sum x_i = n\bar{y} - n(\bar{y} - b\bar{x}) - bn\bar{x} = n\bar{y} - n\bar{y} + nb\bar{x} - nb\bar{x} = 0 \quad \blacksquare$$

**If you get this wrong, revise:** [Residuals](#51-residuals) — Section 5.1.

</details>

<details>
<summary>Problem 5</summary>
Data is coded using $u = x - 10$ and $v = y/2$. The coded regression line is $v = 0.5 + 0.3u$. Find the regression line of $y$ on $x$.
</details>

<details>
<summary>Solution 5</summary>
Original: $y/2 = 0.5 + 0.3(x-10)$.

$y = 1 + 0.6(x-10) = 1 + 0.6x - 6 = 0.6x - 5$.

So $y = -5 + 0.6x$.

**If you get this wrong, revise:** [Coding in Regression](#6-coding-in-regression) — Section 6.

</details>

<details>
<summary>Problem 6</summary>
A student finds $r = 0.95$ between ice cream sales and drowning deaths. The student concludes ice cream causes drowning. Explain the flaw.
</details>

<details>
<summary>Solution 6</summary>
Correlation does not imply causation. Both ice cream sales and drowning deaths are influenced by a **confounding variable**: hot weather. In summer, more people buy ice cream and more people swim, leading to more of both. The correlation is real but the causal claim is not supported.

**If you get this wrong, revise:** [Properties](#12-properties) — Section 1.2.

</details>

<details>
<summary>Problem 7</summary>
Given $S_{xx} = 80$, $S_{yy} = 200$, and $S_{xy} = 100$, find $r$, $b$ (gradient of $y$ on $x$), and the proportion of variance in $y$ explained by $x$.
</details>

<details>
<summary>Solution 7</summary>
$r = \dfrac{100}{\sqrt{80 \times 200}} = \dfrac{100}{\sqrt{16000}} = \dfrac{100}{126.49} \approx 0.791$.

$b = \dfrac{S_{xy}}{S_{xx}} = \dfrac{100}{80} = 1.25$.

Proportion of variance explained $= r^2 = 0.625$ (62.5%).

**If you get this wrong, revise:** [Least Squares Regression](#3-least-squares-regression) —
Section 3.

</details>

<details>
<summary>Problem 8</summary>
The regression line of $y$ on $x$ is $y = 2 + 3x$ with $\bar{x} = 5$. What is $\bar{y}$?
</details>

<details>
<summary>Solution 8</summary>
Since the regression line passes through $(\bar{x}, \bar{y})$:

$\bar{y} = 2 + 3(5) = 17$.

**If you get this wrong, revise:**
[The Regression Line Passes Through $(\bar{x}, \bar{y})$](#4-the-regression-line-passes-through-barx-bary)
— Section 4.

</details>

<details>
<summary>Problem 9</summary>
A residual plot shows a clear U-shaped pattern. What does this suggest about the regression model, and what would be a more appropriate approach?
</details>

<details>
<summary>Solution 9</summary>

A U-shaped residual plot indicates the relationship between the variables is **non-linear** (likely
quadratic). The linear regression model is inappropriate because it fails to capture the curvature.
A more appropriate approach would be to fit a quadratic model $y = a + bx + cx^2$, or to apply a
transformation (e.g., taking logarithms) to linearise the relationship.

**If you get this wrong, revise:** [Residual Plots](#54-residual-plots) — Section 5.4.

</details>

<details>
<summary>Problem 10</summary>
Two datasets have the same PMCC of $r = 0.85$. Dataset A has $n = 10$ observations; Dataset B has $n = 100$ observations. Explain why Dataset B provides stronger evidence of a real association.
</details>

<details>
<summary>Solution 10</summary>

With a larger sample size, the PMCC is estimated more precisely (smaller standard error). For
$n = 10$, the PMCC must exceed approximately 0.632 to be significant at the 5% level (two-tailed).
For $n = 100$, the threshold is approximately 0.197. While both datasets show the same correlation,
Dataset B provides far stronger statistical evidence because random fluctuations are much less
likely to produce $r = 0.85$ with 100 observations.

**If you get this wrong, revise:** [Properties](#12-properties) — Section 1.2.

</details>

<details>
<summary>Problem 11</summary>
Eight students were ranked by two teachers for a presentation. The rankings are:

| Student   | A   | B   | C   | D   | E   | F   | G   | H   |
| --------- | --- | --- | --- | --- | --- | --- | --- | --- |
| Teacher 1 | 2   | 5   | 1   | 7   | 3   | 8   | 4   | 6   |
| Teacher 2 | 1   | 6   | 2   | 8   | 4   | 7   | 3   | 5   |

Calculate Spearman's rank correlation coefficient and interpret the result.

</details>

<details>
<summary>Solution 11</summary>

The data is already ranked, so:

| Student | A   | B   | C   | D   | E   | F   | G   | H   |
| ------- | --- | --- | --- | --- | --- | --- | --- | --- |
| $d_i$   | 1   | -1  | -1  | -1  | -1  | 1   | 1   | 1   |
| $d_i^2$ | 1   | 1   | 1   | 1   | 1   | 1   | 1   | 1   |

$\sum d_i^2 = 8$.

$r_s = 1 - \dfrac{6 \times 8}{8(64 - 1)} = 1 - \dfrac{48}{504} = 1 - 0.0952 = 0.905$ (3 s.f.).

This indicates very strong positive agreement between the two teachers' rankings, suggesting
consistent assessment standards.

**If you get this wrong, revise:**
[Spearman's Rank Correlation](#2-spearmans-rank-correlation-coefficient) — Section 2.

</details>

<details>
<summary>Problem 12</summary>
A medical researcher collects data on blood pressure ($x$ mmHg) and cholesterol level ($y$ mg/dL) for 12 patients. She finds $\bar{x} = 132$, $\bar{y} = 218$, $S_{xx} = 3600$, $S_{yy} = 28900$, $S_{xy} = 8100$.

(a) Calculate the PMCC and interpret it. (b) Find the regression line of $y$ on $x$. (c) Predict the
cholesterol level for a patient with blood pressure of 150 mmHg. Comment on the reliability.

</details>

<details>
<summary>Solution 12</summary>

(a)
$r = \dfrac{8100}{\sqrt{3600 \times 28900}} = \dfrac{8100}{\sqrt{104040000}} = \dfrac{8100}{10200} \approx 0.794$.

This indicates a strong positive linear correlation between blood pressure and cholesterol level.

(b) $b = \dfrac{S_{xy}}{S_{xx}} = \dfrac{8100}{3600} = 2.25$.

$a = 218 - 2.25 \times 132 = 218 - 297 = -79$.

Regression line: $y = -79 + 2.25x$.

(c) When $x = 150$: $y = -79 + 2.25(150) = -79 + 337.5 = 258.5$ mg/dL.

This prediction is reasonably reliable since 150 is within (or close to) the range of the data.
However, $n = 12$ is a small sample, so there is considerable uncertainty. The prediction should not
be treated as precise.

**If you get this wrong, revise:** [Least Squares Regression](#3-least-squares-regression) — Section
3, and [Extrapolation](#52-extrapolation) — Section 5.2.

</details>

<details>
<summary>Problem 13</summary>
Data is coded using $u = (x - 20)/5$ and $v = (y - 100)/10$. The coded PMCC is $r = 0.64$ and the coded regression line of $v$ on $u$ is $v = 1.2 + 0.8u$.

Find: (a) The PMCC for the original data. (b) The regression line of $y$ on $x$ in original
variables.

</details>

<details>
<summary>Solution 13</summary>

(a) Coding does not change the PMCC, so $r = 0.64$ for the original data.

(b) Start from the coded line:

$$\frac{y - 100}{10} = 1.2 + 0.8 \times \frac{x - 20}{5}$$

$$\frac{y - 100}{10} = 1.2 + 0.16(x - 20)$$

$$\frac{y - 100}{10} = 1.2 + 0.16x - 3.2$$

$$\frac{y - 100}{10} = 0.16x - 2.0$$

$$y - 100 = 1.6x - 20$$

$$y = 80 + 1.6x$$

**If you get this wrong, revise:** [Coding in Regression](#6-coding-in-regression) — Section 6, and
[Effect of Coding on Correlation](#61-effect-of-coding-on-correlation) — Section 6.1.

</details>

<details>
<summary>Problem 14</summary>
A dataset of 15 observations has regression line $y = 5 + 2x$ with $\bar{x} = 10$. A 16th observation $(25, 70)$ is added. Without recalculating, explain qualitatively how this point would affect:
(a) The gradient of the regression line.
(b) The PMCC.
</details>

<details>
<summary>Solution 14</summary>

The point $(25, 70)$ has $x = 25$, which is far from $\bar{x} = 10$, so it has **high leverage**.
Its predicted $y$-value from the current line would be $\hat{y} = 5 + 2(25) = 55$, but the actual
value is $70$. The residual is $70 - 55 = 15$, which is positive and large.

(a) Since the point lies above the regression line and has high leverage, it will **increase** the
gradient (pull the line upward at the right side).

(b) Since the point lies close to the general positive trend (above the line in the same direction
as the overall slope), it will likely **increase** the PMCC slightly. However, if the point were
below the trend, it could decrease $r$ significantly — a single influential point can change $r$ by
a large amount.

**If you get this wrong, revise:**
[Outliers and Influential Points](#55-outliers-and-influential-points) — Section 5.5.

</details>
