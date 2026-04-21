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

:::info The chi-squared test statistic is always based on observed and expected frequencies, never
on percentages or proportions. Always check the conditions (expected frequency $\geq 5$) before
applying the test. The formula booklet provides the chi-squared distribution table. :::

<hr />

## 1. The Chi-Squared Distribution

### 1.1 Definition

**Definition.** If $Z_1, Z_2, \ldots, Z_k$ are independent standard normal random variables, then

$$\chi^2_k = Z_1^2 + Z_2^2 + \cdots + Z_k^2$$

follows a **chi-squared distribution** with $k$ degrees of freedom, written $\chi^2_k$.

### 1.2 Properties

- The distribution is defined only for $\chi^2 \geq 0$
- It is positively skewed, becoming more symmetric as $k$ increases
- $E(\chi^2_k) = k$
- $\mathrm{Var}(\chi^2_k) = 2k$
- As $k \to \infty$, the distribution approaches a normal distribution $N(k, 2k)$
- The distribution is additive: if $X \sim \chi^2_a$ and $Y \sim \chi^2_b$ are independent, then
  $X + Y \sim \chi^2_{a+b}$

### 1.3 Critical values

Critical values are found from chi-squared tables. For a test at significance level $\alpha$ with
$\nu$ degrees of freedom, the critical value $\chi^2_{\alpha,\nu}$ satisfies:

$$P(\chi^2_\nu > \chi^2_{\alpha,\nu}) = \alpha$$

<hr />

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

$$\chi^2_{\mathrm{Yates}} = \sum\frac{(|O_i - E_i| - 0.5)^2}{E_i}$$

This correction makes the test more conservative (less likely to reject $H_0$).

:::warning Yates' correction should only be applied to $2 \times 2$ tables. For larger tables, merge
categories if expected frequencies are too small. :::

### 2.6 Worked example: Poisson goodness of fit

**Example.** Over 100 days, the number of accidents per day at a factory was recorded:

| Accidents ($r$) | 0   | 1   | 2   | 3   | 4   | $\geq 5$ |
| --------------- | --- | --- | --- | --- | --- | -------- |
| Days ($O_r$)    | 38  | 32  | 18  | 8   | 3   | 1        |

Test at the 5% level whether the data follows a Poisson distribution.

**Step 1:** Estimate $\lambda$ from the data:

$$\bar{r} = \frac{0(38)+1(32)+2(18)+3(8)+4(3)+5(1)}{100} = \frac{109}{100} = 1.09$$

**Step 2:** Calculate expected frequencies using $\mathrm{Po}(1.09)$:

$P(X=0) = e^{-1.09} \approx 0.3365 \implies E_0 = 33.65$

$P(X=1) = 1.09\,e^{-1.09} \approx 0.3668 \implies E_1 = 36.68$

$P(X=2) = \dfrac{1.09^2}{2}e^{-1.09} \approx 0.1999 \implies E_2 = 19.99$

$P(X=3) = \dfrac{1.09^3}{6}e^{-1.09} \approx 0.0726 \implies E_3 = 7.26$

$P(X=4) = \dfrac{1.09^4}{24}e^{-1.09} \approx 0.0198 \implies E_4 = 1.98$

$P(X \geq 5) = 1 - 0.9956 \approx 0.0044 \implies E_5 = 0.44$

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

<hr />

## 3. Test for Independence

### 3.1 Contingency tables

**Definition.** A **contingency table** (or two-way table) displays the frequency distribution of
two categorical variables.

### 3.2 Hypotheses

- $H_0$: The two variables are independent
- $H_1$: The two variables are not independent

### 3.3 Expected frequencies

For a contingency table with entries $O_{ij}$ (row $i$, column $j$), the expected frequency is:

$$\boxed{E_{ij} = \frac{(\mathrm{row } i \mathrm{ total}) \times (\mathrm{column } j \mathrm{ total})}{\mathrm{grand total}}}$$

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

<hr />

## 4. Chi-Squared Test Procedure Summary

1. State $H_0$ and $H_1$
2. Calculate expected frequencies
3. Check that all expected frequencies are $\geq 5$ (merge categories if necessary)
4. Compute the test statistic $\chi^2$
5. Determine the degrees of freedom
6. Compare with the critical value at the given significance level
7. Conclude in context

:::warning Never use percentages or proportions in the chi-squared test — always use raw
frequencies. The test relies on the multinomial distribution, which requires count data. :::

<hr />

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
Estimate $\lambda$: $\bar{r} = \dfrac{0(15)+1(25)+2(20)+3(12)+4(5)+5(3)}{80} = \dfrac{136}{80} = 1.7$.

Expected (Po(1.7)): $P(0) = e^{-1.7} \approx 0.1827 \to E = 14.62$,
$P(1) = 1.7\,e^{-1.7} \approx 0.3106 \to E = 24.85$,
$P(2) = \dfrac{1.7^2}{2}e^{-1.7} \approx 0.2640 \to E = 21.12$,
$P(3) = \dfrac{1.7^3}{6}e^{-1.7} \approx 0.1496 \to E = 11.97$,
$P(4) = \dfrac{1.7^4}{24}e^{-1.7} \approx 0.0636 \to E = 5.09$,
$P(\geq 5) = 1 - 0.9705 \approx 0.0295 \to E = 2.36$.

Merge $\geq 4$: $O = 8$, $E = 5.09+2.36 = 7.45$.

After merging: categories 0, 1, 2, 3, $\geq 4$ with $O$: 15, 25, 20, 12, 8 and $E$: 14.62, 24.85,
21.12, 11.97, 7.45.

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

<hr />

## 5. Yates' Correction: When and Why

### 5.1 The problem with small $2 \times 2$ tables

The chi-squared distribution is a continuous approximation to the discrete multinomial distribution.
For $2 \times 2$ tables (1 degree of freedom), this approximation is poor when expected frequencies
are small. The uncorrected chi-squared test tends to reject $H_0$ too often (it is too liberal).

Yates' correction adjusts each term by subtracting 0.5 from the absolute difference before squaring:

$$\chi^2_{\mathrm{Yates}} = \sum_{i=1}^{4}\frac{(|O_i - E_i| - 0.5)^2}{E_i}$$

This reduces the test statistic, making it harder to reject $H_0$.

### 5.2 When to apply Yates' correction

- Apply it to $2 \times 2$ contingency tables
- It is most important when the total sample size is small (typically $n \lt{} 40$) or when any
  expected frequency is below 10
- Some exam boards require it for all $2 \times 2$ tables; check the specific mark scheme
- Do **not** apply it to tables larger than $2 \times 2$

### 5.3 Limitations

Yates' correction can be **overly conservative** — it may fail to detect a real association. For
very small samples, Fisher's exact test is preferred (but this is beyond the A-Level syllabus).

<hr />

## 6. Worked Examples

### 6.1 Goodness of fit: dice fairness

**Example.** A die is rolled 120 times with the following results:

| Face | 1   | 2   | 3   | 4   | 5   | 6   |
| ---- | --- | --- | --- | --- | --- | --- |
| Obs  | 25  | 18  | 20  | 22  | 15  | 20  |

Test at the 5% level whether the die is fair.

$H_0$: The die is fair (uniform distribution). $H_1$: The die is not fair.

Expected: $E_i = 120/6 = 20$ for all faces.

$$\chi^2 = \frac{(25-20)^2 + (18-20)^2 + (20-20)^2 + (22-20)^2 + (15-20)^2 + (20-20)^2}{20}$$

$$= \frac{25 + 4 + 0 + 4 + 25 + 0}{20} = \frac{58}{20} = 2.9$$

$\nu = 6 - 1 = 5$. Critical value: $\chi^2_{0.05,\,5} = 11.07$.

Since $2.9 \lt{} 11.07$, **do not reject** $H_0$. There is insufficient evidence that the die is
biased.

### 6.2 Goodness of fit: genetic ratios

**Example.** In a genetics experiment, 200 plants are expected to show a 9:3:3:1 phenotypic ratio.
The observed counts are 115, 38, 30, 17. Test at the 5% level.

$H_0$: The 9:3:3:1 ratio holds. $H_1$: The ratio does not hold.

Expected: $E_1 = 200(9/16) = 112.5$, $E_2 = 200(3/16) = 37.5$, $E_3 = 37.5$,
$E_4 = 200(1/16) = 12.5$.

All $E_i \geq 5$. $\checkmark$

$$\chi^2 = \frac{(115-112.5)^2}{112.5} + \frac{(38-37.5)^2}{37.5} + \frac{(30-37.5)^2}{37.5} + \frac{(17-12.5)^2}{12.5}$$

$$= \frac{6.25}{112.5} + \frac{0.25}{37.5} + \frac{56.25}{37.5} + \frac{20.25}{12.5}$$

$$\approx 0.056 + 0.007 + 1.500 + 1.620 = 3.183$$

$\nu = 4 - 1 = 3$. Critical value: $\chi^2_{0.05,\,3} = 7.815$.

Since $3.183 \lt{} 7.815$, **do not reject** $H_0$. The data is consistent with the 9:3:3:1 ratio.

### 6.3 Test for independence: smoking and disease

**Example.** A study of 300 adults records smoking status and whether they have a respiratory
disease:

|              | Disease | No disease | Row total |
| ------------ | ------- | ---------- | --------- |
| Smoker       | 45      | 55         | 100       |
| Non-smoker   | 30      | 170        | 200       |
| Column total | 75      | 225        | 300       |

Test at the 1% level whether smoking status and respiratory disease are independent.

$H_0$: Smoking and disease are independent. $H_1$: They are not independent.

Expected frequencies:

$E_{11} = 100(75)/300 = 25$, $E_{12} = 100(225)/300 = 75$.

$E_{21} = 200(75)/300 = 50$, $E_{22} = 200(225)/300 = 150$.

All $E_i \geq 5$. $\checkmark$

$$\chi^2 = \frac{(45-25)^2}{25} + \frac{(55-75)^2}{75} + \frac{(30-50)^2}{50} + \frac{(170-150)^2}{150}$$

$$= \frac{400}{25} + \frac{400}{75} + \frac{400}{50} + \frac{400}{150}$$

$$= 16 + 5.333 + 8 + 2.667 = 32.0$$

$\nu = (2-1)(2-1) = 1$. Critical value at 1%: $\chi^2_{0.01,\,1} = 6.635$.

Since $32.0 > 6.635$, **reject** $H_0$ at the 1% level. There is very strong evidence that smoking
status and respiratory disease are associated.

With Yates' correction:

$$\chi^2_Y = \frac{(20-0.5)^2}{25} + \frac{(20-0.5)^2}{75} + \frac{(20-0.5)^2}{50} + \frac{(20-0.5)^2}{150}$$

$$= \frac{380.25}{25} + \frac{380.25}{75} + \frac{380.25}{50} + \frac{380.25}{150}$$

$$= 15.21 + 5.07 + 7.605 + 2.535 = 30.42$$

Still highly significant ($30.42 > 6.635$).

<hr />

## 7. Degrees of Freedom: Systematic Calculation

### 7.1 Goodness of fit

$$\nu = (\mathrm{number of categories after merging}) - 1 - (\mathrm{parameters estimated})$$

| Distribution fitted                | Parameters estimated | $\nu$ formula |
| ---------------------------------- | -------------------- | ------------- |
| Uniform (known)                    | 0                    | $n - 1$       |
| Binomial (known $n$, known $p$)    | 0                    | $n - 1$       |
| Binomial (known $n$, estimate $p$) | 1                    | $n - 2$       |
| Poisson (estimate $\lambda$)       | 1                    | $n - 2$       |
| Normal (estimate $\mu$, $\sigma$)  | 2                    | $n - 3$       |

### 7.2 Test for independence

$$\nu = (r - 1)(c - 1)$$

| Table size   | $\nu$ |
| ------------ | ----- |
| $2 \times 2$ | 1     |
| $2 \times 3$ | 2     |
| $3 \times 3$ | 4     |
| $3 \times 4$ | 6     |
| $4 \times 5$ | 12    |

### 7.3 Intuition for degrees of freedom

The degrees of freedom represent the number of independent pieces of information in the data, after
accounting for constraints. In a contingency table:

- Each row total is fixed, so each row has one fewer free value
- Each column total is fixed, so each column has one fewer free value
- The grand total is automatically determined

This gives $(r-1)(c-1)$ free cells.

<hr />

## 8. Interpretation: What "Significant" Means

### 8.1 In plain language

When we reject $H_0$ at the 5% level, we are saying:

"If the null hypothesis were true, there would be less than a 5% chance of obtaining a test
statistic at least as extreme as the one observed."

This is **not** the same as saying $H_0$ is false with 95% probability. It is a statement about the
probability of the data given the hypothesis, not the probability of the hypothesis given the data.

### 8.2 Common misinterpretations

| Statement                                                        | Correct?        | Why                                                                                         |
| ---------------------------------------------------------------- | --------------- | ------------------------------------------------------------------------------------------- |
| "There is a 5% chance the null hypothesis is true"               | No              | This confuses $P(\mathrm{data}\mid H_0)$ with $P(H_0\mid\mathrm{data})$                     |
| "The probability of getting this result by chance is 5%"         | Approximately   | More precisely: the probability of getting a result _at least this extreme_ by chance is 5% |
| "We have proved the alternative hypothesis"                      | No              | We have only found evidence against $H_0$; the alternative could still be wrong             |
| "A significant result means the effect is practically important" | Not necessarily | With a very large sample, even tiny deviations become significant                           |

### 8.3 Context matters

A significant chi-squared test tells you the observed data is unlikely under $H_0$, but it does not
tell you **how** the data differs or whether the difference is meaningful. Always inspect the
observed vs expected frequencies to understand the nature of any discrepancy.

<hr />

## 9. Relationship to the Normal Approximation

### 9.1 Chi-squared as a sum of squared normals

The fundamental connection: if $X \sim \chi^2_1$ (1 degree of freedom), then $X = Z^2$ where
$Z \sim N(0,1)$.

This means $\sqrt{\chi^2_1} \sim |Z|$, i.e., the square root of a chi-squared statistic with 1 df
follows a half-normal distribution.

### 9.2 $2 \times 2$ tables and the normal approximation

For a $2 \times 2$ table, the chi-squared test is equivalent to a two-proportion $z$-test. If $p_1$
and $p_2$ are the sample proportions:

$$\chi^2 = z^2 \quad \mathrm{where} \quad z = \frac{p_1 - p_2}{\sqrt{\hat{p}(1-\hat{p})(1/n_1 + 1/n_2)}}$$

and $\hat{p}$ is the pooled proportion.

### 9.3 Large degrees of freedom

As $\nu$ increases, $\chi^2_\nu$ approaches $N(\nu, 2\nu)$. This means for large tables:

$$z = \frac{\chi^2 - \nu}{\sqrt{2\nu}} \sim N(0,1) \quad \mathrm{approximately}$$

This approximation is useful when chi-squared tables do not list the required $\nu$ value.

<hr />

## 10. Common Pitfalls

### Using percentages instead of frequencies

The chi-squared test requires raw count data. If you are given percentages, you must convert back to
frequencies using the sample size. Using percentages directly produces a test statistic that is off
by a factor of $n/100$ and gives completely wrong $p$-values.

### Wrong degrees of freedom

For goodness of fit, forgetting to subtract the number of estimated parameters is the most common
error. For independence tests, using $r \times c$ instead of $(r-1)(c-1)$ will overestimate the
degrees of freedom and make the test too liberal.

### Small expected values

If any expected frequency is below 5, the chi-squared approximation breaks down. The remedy is to
**merge adjacent categories** before computing the test statistic. Do not simply discard categories
— this loses information and biases the result.

### Not checking all expected frequencies

After merging categories to fix one small expected value, you must recheck all remaining expected
values. The merge may create new expected values below 5.

### Merging non-adjacent categories

When merging categories for a goodness of fit, merge categories that are logically adjacent (e.g.,
"4" and "$\geq 5$" in a Poisson fit). Merging non-adjacent categories (e.g., "0" and "5") destroys
the structure of the distribution and makes the test invalid.

### Confusing one-tailed and two-tailed

The chi-squared test is inherently one-tailed (right-tailed only). Large values of $\chi^2$ indicate
discrepancy from $H_0$. Small values (close to 0) indicate good fit and are **not** significant.
There is no such thing as a "left-tailed" chi-squared test.

<hr />

## 11. Problem Set

<details>
<summary>Q1. A die is rolled 240 times. The observed frequencies are 1: 52, 2: 38, 3: 40, 4: 36, 5: 44, 6: 30. Test at the 5% level whether the die is fair, and identify which face(s) contribute most to the test statistic.</summary>

$H_0$: Fair die. $H_1$: Not fair.

$E_i = 240/6 = 40$ for all faces.

$\chi^2 = \dfrac{(52-40)^2 + (38-40)^2 + (40-40)^2 + (36-40)^2 + (44-40)^2 + (30-40)^2}{40}$

$= \dfrac{144 + 4 + 0 + 16 + 16 + 100}{40} = \dfrac{280}{40} = 7.0$.

$\nu = 5$. Critical value: $\chi^2_{0.05,\,5} = 11.07$.

$7.0 \lt{} 11.07$: **do not reject** $H_0$.

Contributions: face 1 contributes $144/40 = 3.6$, face 6 contributes $100/40 = 2.5$. These two faces
account for $6.1$ out of $7.0$ (87% of the statistic).

</details>

<details>
<summary>Q2. The number of customers arriving at a shop per hour was recorded over 120 hours: 0: 12, 1: 30, 2: 35, 3: 25, 4: 12, $\geq 5$: 6. Test at the 5% level whether the data follows a Poisson distribution.</summary>

$H_0$: Poisson. $H_1$: Not Poisson.

$\bar{x} = \dfrac{0(12) + 1(30) + 2(35) + 3(25) + 4(12) + 5(6)}{120} = \dfrac{238}{120} \approx 1.983$.

Expected using Po(1.983): $P(0) = e^{-1.983} \approx 0.1379 \to E = 16.55$
$P(1) = 1.983 \times 0.1379 \approx 0.2734 \to E = 32.81$
$P(2) = 1.983^2/2 \times 0.1379 \approx 0.2711 \to E = 32.53$
$P(3) = 1.983^3/6 \times 0.1379 \approx 0.1792 \to E = 21.50$
$P(4) = 1.983^4/24 \times 0.1379 \approx 0.0888 \to E = 10.66$
$P(\geq 5) = 1 - 0.9484 \approx 0.0516 \to E = 6.19$

Merge $\geq 4$: $O = 18$, $E = 10.66 + 6.19 = 16.85$. All $E \geq 5$.

$\chi^2 = \dfrac{(12-16.55)^2}{16.55} + \dfrac{(30-32.81)^2}{32.81} + \dfrac{(35-32.53)^2}{32.53} + \dfrac{(25-21.50)^2}{21.50} + \dfrac{(18-16.85)^2}{16.85}$

$\approx 1.251 + 0.241 + 0.188 + 0.570 + 0.079 = 2.329$

$\nu = 5 - 1 - 1 = 3$. Critical value: $\chi^2_{0.05,\,3} = 7.815$.

$2.329 \lt{} 7.815$: **do not reject** $H_0$.

</details>

<details>
<summary>Q3. A survey of 400 adults records education level and voting preference. Test at the 5% level whether the two variables are independent.</summary>

|                   | Party A | Party B | Party C | Non-voter | Total |
| ----------------- | ------- | ------- | ------- | --------- | ----- |
| No qualifications | 20      | 25      | 10      | 45        | 100   |
| A-levels          | 30      | 40      | 25      | 30        | 125   |
| Degree            | 45      | 30      | 40      | 10        | 125   |
| Postgraduate      | 20      | 15      | 15      | 0         | 50    |
| Total             | 115     | 110     | 90      | 85        | 400   |

$H_0$: Independent. $H_1$: Not independent.

Expected: $E_{ij} = (\mathrm{row } i \mathrm{ total})(\mathrm{column } j \mathrm{ total})/400$.

$E_{44} = 50 \times 85/400 = 10.625$. All $E \geq 5$. $\checkmark$

$E_{11} = 100(115)/400 = 28.75$, $E_{12} = 27.5$, $E_{13} = 22.5$, $E_{14} = 21.25$.
$E_{21} = 125(115)/400 = 35.9375$, $E_{22} = 34.375$, $E_{23} = 28.125$, $E_{24} = 26.5625$.
$E_{31} = 125(115)/400 = 35.9375$, $E_{32} = 34.375$, $E_{33} = 28.125$, $E_{34} = 26.5625$.
$E_{41} = 50(115)/400 = 14.375$, $E_{42} = 13.75$, $E_{43} = 11.25$, $E_{44} = 10.625$.

$$\chi^2 = \sum_{i=1}^{4}\sum_{j=1}^{4}\frac{(O_{ij} - E_{ij})^2}{E_{ij}}$$

Key contributions: $\dfrac{(20-28.75)^2}{28.75} \approx 2.66$,
$\dfrac{(45-21.25)^2}{21.25} \approx 26.53$, $\dfrac{(10-26.5625)^2}{26.5625} \approx 10.33$,
$\dfrac{(45-35.9375)^2}{35.9375} \approx 2.28$, $\dfrac{(40-28.125)^2}{28.125} \approx 5.01$,
$\dfrac{(10-26.5625)^2}{26.5625} \approx 10.33$.

$\chi^2 \approx 2.66 + 0.91 + 0.69 + 26.53 + 1.04 + 1.03 + 0.39 + 0.54 + 2.28 + 2.23 + 0.60 + 1.26 + 10.33 \approx 48.5$.

$\nu = (4-1)(4-1) = 9$. Critical value: $\chi^2_{0.05,\,9} = 16.92$.

$48.5 > 16.92$: **reject** $H_0$. Strong evidence that education level and voting preference are
associated.

</details>

<details>
<summary>Q4. Explain why merging categories changes the degrees of freedom, and calculate the new df when a 6-category Poisson goodness of fit test (with $\lambda$ estimated) has its last 3 categories merged into one.</summary>

Originally: $\nu = 6 - 1 - 1 = 4$ (6 categories, 1 parameter estimated).

After merging the last 3 into 1: we now have 4 categories total (first 3 individual + 1 merged).

New $\nu = 4 - 1 - 1 = 2$.

Merging reduces the number of categories, which reduces the degrees of freedom. This makes the test
slightly more conservative (harder to reject $H_0$) because the critical value is smaller for fewer
df, but the merged categories also tend to reduce the test statistic.

</details>

<details>
<summary>Q5. A $2 \times 2$ table has observed frequencies: Row 1: 10, 40; Row 2: 30, 20. Apply Yates' correction and test at the 5% level. Compare with the uncorrected test.</summary>

Row totals: 50, 50. Column totals: 40, 60. Grand total: 100.

Expected: $E_{11} = 50(40)/100 = 20$, $E_{12} = 30$, $E_{21} = 20$, $E_{22} = 30$.

Uncorrected:

$\chi^2 = \dfrac{(10-20)^2}{20} + \dfrac{(40-30)^2}{30} + \dfrac{(30-20)^2}{20} + \dfrac{(20-30)^2}{30} = 5 + 3.333 + 5 + 3.333 = 16.67$.

Yates' corrected:

$\chi^2_Y = \dfrac{(10-0.5)^2}{20} + \dfrac{(10-0.5)^2}{30} + \dfrac{(10-0.5)^2}{20} + \dfrac{(10-0.5)^2}{30} = \dfrac{90.25}{20} + \dfrac{90.25}{30} + \dfrac{90.25}{20} + \dfrac{90.25}{30}$

$= 4.5125 + 3.0083 + 4.5125 + 3.0083 = 15.04$.

$\nu = 1$. Critical value: $\chi^2_{0.05,\,1} = 3.841$.

Both reject $H_0$. The corrected value (15.04) is smaller than the uncorrected (16.67), as expected.

</details>

<details>
<summary>Q6. A normal distribution is fitted to 200 observations with mean and standard deviation estimated from the data. The expected and observed frequencies for 7 categories are calculated, with all $E_i \geq 5$. The test statistic is $\chi^2 = 8.5$. Test at the 5% level and explain your choice of degrees of freedom.</summary>

Two parameters estimated ($\mu$ and $\sigma$), so $\nu = 7 - 1 - 2 = 4$.

$H_0$: Data follows a normal distribution. $H_1$: Data does not follow a normal distribution.

Critical value: $\chi^2_{0.05,\,4} = 9.488$.

$8.5 \lt{} 9.488$: **do not reject** $H_0$. Insufficient evidence to conclude the data is
non-normal.

The degrees of freedom calculation accounts for the fact that estimating parameters from the data
makes the fit appear better than it truly is. Each estimated parameter reduces the df by 1 because
it uses up one piece of information from the data.

</details>

:::

:::

:::
