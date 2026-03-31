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

:::info
The formula booklet gives the formula for PMCC and the least squares regression line. You must be able to interpret these and understand their limitations.
:::

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

:::warning
Correlation does not imply causation. Two variables may be strongly correlated because they are both influenced by a third (confounding) variable, or by coincidence.
:::

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

When values are tied, assign the average of the ranks they would have occupied. The simplified formula above does not account for ties — a correction factor is needed for tied data.

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

**Theorem.** The least squares regression line $y = a + bx$ passes through the point $(\bar{x}, \bar{y})$.

**Proof.** Substituting $x = \bar{x}$:

$$y = a + b\bar{x} = (\bar{y} - b\bar{x}) + b\bar{x} = \bar{y}$$

So $(\bar{x}, \bar{y})$ lies on the regression line. $\blacksquare$

**Intuition.** The regression line passes through the "centre of mass" of the data. This makes sense — the best-fit line should balance the data around it, just as the mean balances a univariate dataset.

---

## 5. Interpreting Regression

### 5.1 Residuals

The **residual** for the $i$-th data point is $e_i = y_i - (a + bx_i)$.

Properties:

- $\sum e_i = 0$ (the residuals sum to zero)
- The least squares line minimises $\sum e_i^2$

### 5.2 Extrapolation

:::warning
The regression line should only be used for **interpolation** (predicting within the range of the data). **Extrapolation** (predicting outside the data range) is unreliable because the linear relationship may not hold.
:::

### 5.3 Regression of $y$ on $x$ vs. $x$ on $y$

The regression line of $y$ on $x$ minimises vertical residuals ($y_i - \hat{y}_i$).
The regression line of $x$ on $y$ minimises horizontal residuals ($x_i - \hat{x}_i$).

These are different lines unless $r = \pm 1$. The two regression lines intersect at $(\bar{x}, \bar{y})$.

---

## 6. Coding in Regression

If we code $u = \dfrac{x-p}{q}$ and $v = \dfrac{y-r}{s}$, and find the regression line $v = c + du$, then:

- The gradient in terms of original variables: $b = \dfrac{s}{q}d$
- The intercept: $a = r + s \cdot c - b \cdot p$

---

## Problem Set

<details><summary>Problem 1</summary><p>
Calculate the PMCC for the data: $(1,2)$, $(2,3)$, $(3,5)$, $(4,4)$, $(5,7)$.
</p></details>

<details><summary>Solution 1</summary><p>
$n=5$, $\bar{x}=3$, $\bar{y}=4.2$.

$\sum x^2 = 55$, $\sum y^2 = 103$, $\sum xy = 67$.

$S_{xx} = 55 - 5(9) = 10$.
$S_{yy} = 103 - 5(17.64) = 103 - 88.2 = 14.8$.
$S_{xy} = 67 - 5(3)(4.2) = 67 - 63 = 4$.

$r = \dfrac{4}{\sqrt{10 \times 14.8}} = \dfrac{4}{\sqrt{148}} = \dfrac{4}{12.166} \approx 0.329$.

<b>If you get this wrong, revise:</b> [Pearson's PMCC](#1-pearsons-product-moment-correlation-coefficient-pmcc) — Section 1.

</p></details>

<details><summary>Problem 2</summary><p>
Find the equation of the regression line of $y$ on $x$ for the data in Problem 1.
</p></details>

<details><summary>Solution 2</summary><p>
$b = S_{xy}/S_{xx} = 4/10 = 0.4$.

$a = \bar{y} - b\bar{x} = 4.2 - 0.4(3) = 4.2 - 1.2 = 3.0$.

Regression line: $y = 3.0 + 0.4x$.

<b>If you get this wrong, revise:</b> [Least Squares Regression](#3-least-squares-regression) — Section 3.

</p></details>

<details><summary>Problem 3</summary><p>
For the data below, calculate Spearman's rank correlation coefficient.

| $x$ | 10 | 20 | 30 | 40 | 50 |
| $y$ | 15 | 25 | 18 | 35 | 42 |

</p></details>

<details><summary>Solution 3</summary><p>
Ranks of $x$: 1, 2, 3, 4, 5. Ranks of $y$: 1, 3, 2, 4, 5.

| $d$ | 0 | -1 | 1 | 0 | 0 |

$\sum d^2 = 0 + 1 + 1 + 0 + 0 = 2$.

$r_s = 1 - \dfrac{6 \times 2}{5(25-1)} = 1 - \dfrac{12}{120} = 1 - 0.1 = 0.9$.

<b>If you get this wrong, revise:</b> [Spearman's Rank Correlation](#2-spearmans-rank-correlation-coefficient) — Section 2.

</p></details>

<details><summary>Problem 4</summary><p>
Prove that $\sum e_i = 0$ where $e_i = y_i - (a + bx_i)$ are the residuals of the least squares regression line.
</p></details>

<details><summary>Solution 4</summary><p>
$$\sum e_i = \sum y_i - na - b\sum x_i = n\bar{y} - n(\bar{y} - b\bar{x}) - bn\bar{x} = n\bar{y} - n\bar{y} + nb\bar{x} - nb\bar{x} = 0 \quad \blacksquare$$

<b>If you get this wrong, revise:</b> [Residuals](#51-residuals) — Section 5.1.

</p></details>

<details><summary>Problem 5</summary><p>
Data is coded using $u = x - 10$ and $v = y/2$. The coded regression line is $v = 0.5 + 0.3u$. Find the regression line of $y$ on $x$.
</p></details>

<details><summary>Solution 5</summary><p>
Original: $y/2 = 0.5 + 0.3(x-10)$.

$y = 1 + 0.6(x-10) = 1 + 0.6x - 6 = 0.6x - 5$.

So $y = -5 + 0.6x$.

<b>If you get this wrong, revise:</b> [Coding in Regression](#6-coding-in-regression) — Section 6.

</p></details>

<details><summary>Problem 6</summary><p>
A student finds $r = 0.95$ between ice cream sales and drowning deaths. The student concludes ice cream causes drowning. Explain the flaw.
</p></details>

<details><summary>Solution 6</summary><p>
Correlation does not imply causation. Both ice cream sales and drowning deaths are influenced by a **confounding variable**: hot weather. In summer, more people buy ice cream and more people swim, leading to more of both. The correlation is real but the causal claim is not supported.

<b>If you get this wrong, revise:</b> [Properties](#12-properties) — Section 1.2.

</p></details>

<details><summary>Problem 7</summary><p>
Given $S_{xx} = 80$, $S_{yy} = 200$, and $S_{xy} = 100$, find $r$, $b$ (gradient of $y$ on $x$), and the proportion of variance in $y$ explained by $x$.
</p></details>

<details><summary>Solution 7</summary><p>
$r = \dfrac{100}{\sqrt{80 \times 200}} = \dfrac{100}{\sqrt{16000}} = \dfrac{100}{126.49} \approx 0.791$.

$b = \dfrac{S_{xy}}{S_{xx}} = \dfrac{100}{80} = 1.25$.

Proportion of variance explained $= r^2 = 0.625$ (62.5%).

<b>If you get this wrong, revise:</b> [Least Squares Regression](#3-least-squares-regression) — Section 3.

</p></details>

<details><summary>Problem 8</summary><p>
The regression line of $y$ on $x$ is $y = 2 + 3x$ with $\bar{x} = 5$. What is $\bar{y}$?
</p></details>

<details><summary>Solution 8</summary><p>
Since the regression line passes through $(\bar{x}, \bar{y})$:

$\bar{y} = 2 + 3(5) = 17$.

<b>If you get this wrong, revise:</b> [The Regression Line Passes Through $(\bar{x}, \bar{y})$](#4-the-regression-line-passes-through-barx-bary) — Section 4.

</p></details>
