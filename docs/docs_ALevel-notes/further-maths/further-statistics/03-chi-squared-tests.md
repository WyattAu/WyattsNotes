---
title: Chi-Squared Tests
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: chi-squared-tests
sidebar_position: 3
---

## Chi-Squared Tests

The chi-squared test is a non-parametric statistical test used to determine whether observed data
deviates significantly from expected values. It has two main applications: testing goodness of fit
(to a theoretical distribution) and testing for independence (between two categorical variables).

### Board Coverage

| Board      | Paper   | Notes                                                  |
| ---------- | ------- | ------------------------------------------------------ |
| AQA        | Paper 2 | Goodness of fit and contingency tables                 |
| Edexcel    | S3      | Goodness of fit and test for independence              |
| OCR (A)    | Paper 2 | Both applications covered                              |
| CIE (9231) | S2      | Goodness of fit; independence with $2 \times 2$ tables |

:::info
The chi-squared test statistic is always based on observed and expected frequencies, never
on percentages or proportions. Always check the conditions (expected frequency $\geq 5$) before
applying the test. The formula booklet provides the chi-squared distribution table.
:::

---

## 1. The Chi-Squared Distribution

### 1.1 Definition

**Definition.** If $Z_1, Z_2, \ldots, Z_k$ are independent standard normal random variables, then

$$\chi^2_k = Z_1^2 + Z_2^2 + \cdots + Z_k^2$$

follows a **chi-squared distribution** with $k$ degrees of freedom, written $\chi^2_k$.

### 1.2 Properties

- The distribution is defined only for $\chi^2 \geq 0$
- It is positively skewed, becoming more symmetric as $k$ increases
- $E(\chi^2_k) = k$
- $\text{Var}(\chi^2_k) = 2k$
- As $k \to \infty$, the distribution approaches a normal distribution $N(k, 2k)$
- The distribution is additive: if $X \sim \chi^2_a$ and $Y \sim \chi^2_b$ are independent, then
  $X + Y \sim \chi^2_{a+b}$

### 1.3 Critical values

Critical values are found from chi-squared tables. For a test at significance level $\alpha$ with
$\nu$ degrees of freedom, the critical value $\chi^2_{\alpha,\nu}$ satisfies:

$$P(\chi^2_\nu > \chi^2_{\alpha,\nu}) = \alpha$$

---

## 2. Goodness of Fit Test

### 2.1 Hypotheses

- $H_0$: The data follows the specified distribution
- $H_1$: The data does not follow the specified distribution

### 2.2 Test statistic

$$\boxed{\chi^2 = \sum_{i=1}^{n}\frac{(O_i - E_i)^2}{E_i}}$$

where $O_i$ is the observed frequency and $E_i$ is the expected frequency for category $i$.

### 2.3 Degrees of freedom

$$\nu = n - 1 - c$$

where $n$ is the number of categories and $c$ is the number of parameters estimated from the data.

- If no parameters are estimated: $\nu = n - 1$
- If the mean of a Poisson is estimated from the data: $\nu = n - 2$
- If both mean and standard deviation of a normal are estimated: $\nu = n - 3$

### 2.4 Conditions

For the chi-squared approximation to be valid:

1. **Expected frequencies** should be $\geq 5$ for each category
2. If any expected frequency is $< 5$, **merge adjacent categories** before carrying out the test
3. The observations must be **independent**

### 2.5 Yates' correction (continuity correction)

For a $2 \times 2$ contingency table with small expected frequencies, Yates' correction adjusts the
test statistic:

$$\chi^2_{\text{Yates}} = \sum\frac{(|O_i - E_i| - 0.5)^2}{E_i}$$

This correction makes the test more conservative (less likely to reject $H_0$).

:::warning
Yates' correction should only be applied to $2 \times 2$ tables. For larger tables, merge
categories if expected frequencies are too small.
:::

### 2.6 Worked example: Poisson goodness of fit

**Example.** Over 100 days, the number of accidents per day at a factory was recorded:

| Accidents ($r$) | 0   | 1   | 2   | 3   | 4   | $\geq 5$ |
| --------------- | --- | --- | --- | --- | --- | -------- |
| Days ($O_r$)    | 38  | 32  | 18  | 8   | 3   | 1        |

Test at the 5% level whether the data follows a Poisson distribution.

**Step 1:** Estimate $\lambda$ from the data:

$$\bar{r} = \frac{0(38)+1(32)+2(18)+3(8)+4(3)+5(1)}{100} = \frac{105}{100} = 1.05$$

**Step 2:** Calculate expected frequencies using $\text{Po}(1.05)$:

$P(X=0) = e^{-1.05} \approx 0.3499 \implies E_0 = 34.99$

$P(X=1) = 1.05\,e^{-1.05} \approx 0.3674 \implies E_1 = 36.74$

$P(X=2) = \dfrac{1.05^2}{2}e^{-1.05} \approx 0.1929 \implies E_2 = 19.29$

$P(X=3) = \dfrac{1.05^3}{6}e^{-1.05} \approx 0.0675 \implies E_3 = 6.75$

$P(X=4) = \dfrac{1.05^4}{24}e^{-1.05} \approx 0.0177 \implies E_4 = 1.77$

$P(X \geq 5) = 1 - 0.9954 \approx 0.0046 \implies E_5 = 0.46$

**Step 3:** Merge categories so all $E_i \geq 5$. Merge $r \geq 3$:

| $r$   | 0     | 1     | 2     | $\geq 3$ |
| ----- | ----- | ----- | ----- | -------- |
| $O_r$ | 38    | 32    | 18    | 12       |
| $E_r$ | 34.99 | 36.74 | 19.29 | 8.98     |

**Step 4:** Calculate the test statistic:

$$\chi^2 = \frac{(38-34.99)^2}{34.99} + \frac{(32-36.74)^2}{36.74} + \frac{(18-19.29)^2}{19.29} + \frac{(12-8.98)^2}{8.98}$$

$$= \frac{9.06}{34.99} + \frac{22.47}{36.74} + \frac{1.66}{19.29} + \frac{9.12}{8.98} \approx 0.259 + 0.612 + 0.086 + 1.016 = 1.973$$

**Step 5:** Degrees of freedom: $\nu = 4 - 1 - 1 = 3$ (4 categories, 1 parameter estimated).

**Step 6:** Critical value: $\chi^2_{0.05,\,3} = 7.815$.

Since $1.973 < 7.815$, **do not reject** $H_0$.

There is insufficient evidence to suggest the data does not follow a Poisson distribution.

---

## 3. Test for Independence

### 3.1 Contingency tables

**Definition.** A **contingency table** (or two-way table) displays the frequency distribution of
two categorical variables.

### 3.2 Hypotheses

- $H_0$: The two variables are independent
- $H_1$: The two variables are not independent

### 3.3 Expected frequencies

For a contingency table with entries $O_{ij}$ (row $i$, column $j$), the expected frequency is:

$$\boxed{E_{ij} = \frac{(\text{row } i \text{ total}) \times (\text{column } j \text{ total})}{\text{grand total}}}$$

### 3.4 Test statistic

$$\boxed{\chi^2 = \sum_{i}\sum_{j}\frac{(O_{ij} - E_{ij})^2}{E_{ij}}}$$

### 3.5 Degrees of freedom

$$\boxed{\nu = (r-1)(c-1)}$$

where $r$ is the number of rows and $c$ is the number of columns.

### 3.6 Worked example

**Example.** A survey of 200 people records their age group and preferred news source:

|           | TV  | Online | Newspaper | Row total |
| --------- | --- | ------ | --------- | --------- |
| Under 30  | 20  | 60     | 10        | 90        |
| 30 to 50  | 30  | 25     | 15        | 70        |
| Over 50   | 20  | 5      | 15        | 40        |
| Col total | 70  | 90     | 40        | 200       |

Test at the 5% level whether age group and preferred news source are independent.

**Expected frequencies:**

$E_{11} = \dfrac{90 \times 70}{200} = 31.5$, $E_{12} = \dfrac{90 \times 90}{200} = 40.5$,
$E_{13} = \dfrac{90 \times 40}{200} = 18.0$

$E_{21} = \dfrac{70 \times 70}{200} = 24.5$, $E_{22} = \dfrac{70 \times 90}{200} = 31.5$,
$E_{23} = \dfrac{70 \times 40}{200} = 14.0$

$E_{31} = \dfrac{40 \times 70}{200} = 14.0$, $E_{32} = \dfrac{40 \times 90}{200} = 18.0$,
$E_{33} = \dfrac{40 \times 40}{200} = 8.0$

All expected frequencies $\geq 5$, so the test is valid.

$$\chi^2 = \frac{(20-31.5)^2}{31.5} + \frac{(60-40.5)^2}{40.5} + \frac{(10-18)^2}{18} + \frac{(30-24.5)^2}{24.5} + \frac{(25-31.5)^2}{31.5} + \frac{(15-14)^2}{14} + \frac{(20-14)^2}{14} + \frac{(5-18)^2}{18} + \frac{(15-8)^2}{8}$$

$$= \frac{132.25}{31.5} + \frac{380.25}{40.5} + \frac{64}{18} + \frac{30.25}{24.5} + \frac{42.25}{31.5} + \frac{1}{14} + \frac{36}{14} + \frac{169}{18} + \frac{49}{8}$$

$$\approx 4.20 + 9.39 + 3.56 + 1.23 + 1.34 + 0.07 + 2.57 + 9.39 + 6.13 = 37.88$$

Degrees of freedom: $\nu = (3-1)(3-1) = 4$.

Critical value: $\chi^2_{0.05,\,4} = 9.488$.

Since $37.88 > 9.488$, **reject** $H_0$.

There is strong evidence that age group and preferred news source are not independent.

---

## 4. Chi-Squared Test Procedure Summary

1. State $H_0$ and $H_1$
2. Calculate expected frequencies
3. Check that all expected frequencies are $\geq 5$ (merge categories if necessary)
4. Compute the test statistic $\chi^2$
5. Determine the degrees of freedom
6. Compare with the critical value at the given significance level
7. Conclude in context

:::warning
Never use percentages or proportions in the chi-squared test — always use raw
frequencies. The test relies on the multinomial distribution, which requires count data.
:::

---

## Problems

<details>
<summary>Problem 1</summary>
A die is rolled 60 times. The observed frequencies are: 1: 8, 2: 12, 3: 9, 4: 11, 5: 13, 6: 7. Test at the 5% level whether the die is fair.
</details>

<details>
<summary>Solution 1</summary>
$H_0$: The die is fair. $H_1$: The die is not fair.

Expected frequency for each face: $E_i = 60/6 = 10$.

$\chi^2 = \dfrac{(8-10)^2}{10} + \dfrac{(12-10)^2}{10} + \dfrac{(9-10)^2}{10} + \dfrac{(11-10)^2}{10} + \dfrac{(13-10)^2}{10} + \dfrac{(7-10)^2}{10}$

$= \dfrac{4+4+1+1+9+9}{10} = \dfrac{28}{10} = 2.8$.

$\nu = 6 - 1 = 5$. Critical value: $\chi^2_{0.05,\,5} = 11.07$.

$2.8 < 11.07$: **do not reject** $H_0$. No evidence the die is biased.

**If you get this wrong, revise:** [Goodness of Fit Test](#2-goodness-of-fit-test) — Section 2.
</details>

<details>
<summary>Problem 2</summary>
In a $2 \times 2$ contingency table, the observed frequencies are: Row 1: 30, 20; Row 2: 15, 35. Test at the 5% level whether the two variables are independent.
</details>

<details>
<summary>Solution 2</summary>
Row totals: 50, 50. Column totals: 45, 55. Grand total: 100.

Expected: $E_{11} = 50(45)/100 = 22.5$, $E_{12} = 50(55)/100 = 27.5$, $E_{21} = 22.5$,
$E_{22} = 27.5$.

$\chi^2 = \dfrac{(30-22.5)^2}{22.5} + \dfrac{(20-27.5)^2}{27.5} + \dfrac{(15-22.5)^2}{22.5} + \dfrac{(35-27.5)^2}{27.5}$

$= \dfrac{56.25}{22.5} + \dfrac{56.25}{27.5} + \dfrac{56.25}{22.5} + \dfrac{56.25}{27.5} = 2.5 + 2.045 + 2.5 + 2.045 = 9.09$.

$\nu = (2-1)(2-1) = 1$. Critical value: $\chi^2_{0.05,\,1} = 3.841$.

$9.09 > 3.841$: **reject** $H_0$. The variables are not independent.

**If you get this wrong, revise:** [Test for Independence](#3-test-for-independence) — Section 3.
</details>

<details>
<summary>Problem 3</summary>
Explain why the chi-squared test statistic uses $(O_i - E_i)^2 / E_i$ rather than simply $\sum(O_i - E_i)$.
</details>

<details>
<summary>Solution 3</summary>
The sum $\sum(O_i - E_i) = 0$ always, since $\sum O_i = \sum E_i = n$ (both sum to the total
number of observations). This provides no information about the discrepancy between observed and
expected.

Squaring removes the sign, and dividing by $E_i$ standardises the contribution of each category.
Categories with larger expected frequencies naturally have larger absolute deviations, so dividing
by $E_i$ gives each category appropriate weight. This leads to a test statistic whose distribution
under $H_0$ is approximately $\chi^2$.

**If you get this wrong, revise:** [Test statistic](#22-test-statistic) — Section 2.2.
</details>

<details>
<summary>Problem 4</summary>
The number of emails received per day was recorded over 80 days: 0: 15, 1: 25, 2: 20, 3: 12, 4: 5, $\geq 5$: 3. Test at the 5% level whether the data follows a Poisson distribution.
</details>

<details>
<summary>Solution 4</summary>
Estimate $\lambda$: $\bar{r} = \dfrac{0(15)+1(25)+2(20)+3(12)+4(5)+5(3)}{80} = \dfrac{109}{80} = 1.3625$.

Expected (Po(1.3625)): $P(0) = 0.2561 \to E = 20.49$, $P(1) = 0.3490 \to E = 27.92$,
$P(2) = 0.2377 \to E = 19.02$, $P(3) = 0.1079 \to E = 8.63$, $P(4) = 0.0367 \to E = 2.94$,
$P(\geq 5) = 0.0126 \to E = 1.01$.

Merge $\geq 3$: $O = 20$, $E = 8.63+2.94+1.01 = 12.58$.

After merging: categories 0, 1, 2, $\geq 3$ with $O$: 15, 25, 20, 20 and $E$: 20.49, 27.92, 19.02,
12.58.

$\chi^2 = \dfrac{(15-20.49)^2}{20.49} + \dfrac{(25-27.92)^2}{27.92} + \dfrac{(20-19.02)^2}{19.02} + \dfrac{(20-12.58)^2}{12.58}$

$\approx 1.471 + 0.305 + 0.050 + 4.378 = 6.204$.

$\nu = 4 - 1 - 1 = 2$. Critical value: $\chi^2_{0.05,\,2} = 5.991$.

$6.204 > 5.991$: **reject** $H_0$. Evidence the data does not follow Poisson.

**If you get this wrong, revise:**
[Worked example: Poisson goodness of fit](#26-worked-example-poisson-goodness-of-fit) — Section 2.6.
</details>

<details>
<summary>Problem 5</summary>
A $3 \times 2$ contingency table has $\chi^2 = 12.4$. State the degrees of freedom and determine whether $H_0$ is rejected at the 5% level.
</details>

<details>
<summary>Solution 5</summary>
$\nu = (3-1)(2-1) = 2$.

Critical value: $\chi^2_{0.05,\,2} = 5.991$.

Since $12.4 > 5.991$, **reject** $H_0$.

**If you get this wrong, revise:** [Degrees of freedom](#35-degrees-of-freedom) — Section 3.5.
</details>

<details>
<summary>Problem 6</summary>
A $2 \times 2$ table has observed frequencies: Row 1: 40, 60; Row 2: 55, 45. Apply Yates' correction and compare with the uncorrected statistic.
</details>

<details>
<summary>Solution 6</summary>
Row totals: 100, 100. Column totals: 95, 105. Grand total: 200.

Expected: $E_{11} = E_{12} = E_{21} = E_{22} = 50$.

Uncorrected:
$\chi^2 = \dfrac{(40-50)^2+(60-50)^2+(55-50)^2+(45-50)^2}{50} = \dfrac{100+100+25+25}{50} = 5.0$.

Yates' corrected:
$\chi^2_Y = \dfrac{(10-0.5)^2+(10-0.5)^2+(5-0.5)^2+(5-0.5)^2}{50} = \dfrac{90.25+90.25+20.25+20.25}{50} = 4.42$.

$\nu = 1$. Critical value: $3.841$. Both reject $H_0$, but Yates' gives a more conservative result.

**If you get this wrong, revise:** [Yates' correction](#25-yates-correction-continuity-correction) —
Section 2.5.
</details>

<details>
<summary>Problem 7</summary>
A uniform distribution is fitted to data with 5 categories and expected frequency 20 per category. The observed frequencies are 15, 22, 18, 25, 20. Test at the 1% level.
</details>

<details>
<summary>Solution 7</summary>
$H_0$: Uniform distribution. $H_1$: Not uniform.

All $E_i = 20 \geq 5$.

$\chi^2 = \dfrac{25+4+4+25+0}{20} = \dfrac{58}{20} = 2.9$.

$\nu = 5 - 1 = 4$. Critical value at 1%: $\chi^2_{0.01,\,4} = 13.28$.

$2.9 < 13.28$: **do not reject** $H_0$.

**If you get this wrong, revise:** [Goodness of Fit Test](#2-goodness-of-fit-test) — Section 2.
</details>

<details>
<summary>Problem 8</summary>
In a test for independence with a $4 \times 3$ contingency table, the test statistic is $\chi^2 = 18.7$. Test at the 5% level.
</details>

<details>
<summary>Solution 8</summary>
$\nu = (4-1)(3-1) = 6$.

Critical value: $\chi^2_{0.05,\,6} = 12.59$.

$18.7 > 12.59$: **reject** $H_0$. There is evidence that the variables are associated.

**If you get this wrong, revise:** [Degrees of freedom](#35-degrees-of-freedom) — Section 3.5.
</details>

<details>
<summary>Problem 9</summary>
State three conditions that must be satisfied before carrying out a chi-squared test, and explain the consequence of violating each.
</details>

<details>
<summary>Solution 9</summary>
1. **Expected frequencies $\geq 5$:** Violating this makes the $\chi^2$ approximation to the true distribution inaccurate, increasing the risk of Type I errors. Remedy: merge adjacent categories.

2. **Independence of observations:** Violating this means the test assumes a multinomial model that
   does not apply, invalidating the result. Remedy: ensure the sampling method produces independent
   observations.

3. **Sufficiently large sample:** With very small total samples, even large relative discrepancies
   can produce non-significant results. The test has low power. Remedy: increase sample size.

**If you get this wrong, revise:** [Conditions](#24-conditions) — Section 2.4.
</details>

<details>
<summary>Problem 10</summary>
Data is fitted to a normal distribution with mean and standard deviation both estimated from the data. There are 8 categories. The test statistic is $\chi^2 = 7.2$. Determine the degrees of freedom and test at the 5% level.
</details>

<details>
<summary>Solution 10</summary>
Two parameters estimated (mean and standard deviation), so $\nu = 8 - 1 - 2 = 5$.

Critical value: $\chi^2_{0.05,\,5} = 11.07$.

$7.2 < 11.07$: **do not reject** $H_0$. There is insufficient evidence that the data does not follow
a normal distribution.

**If you get this wrong, revise:** [Degrees of freedom](#23-degrees-of-freedom) — Section 2.3.
</details>

:::

:::

:::
