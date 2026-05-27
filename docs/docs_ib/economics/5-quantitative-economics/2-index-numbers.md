---
title: Index Numbers
description:
  'IB Economics — index number construction, weighting, chaining, splicing, Laspeyres and Paasche
  indices.'
date: 2026-05-21
tags: [ib, ib-economics]
categories: [ib-economics]
---

## Index Numbers

### Construction of Index Numbers

An index number measures the change in a variable (or group of variables) relative to a base period:

$$\text{Index}_t = \frac{P_t}{P_0} \times 100$$

Where $P_t$ is the value in period $t$ and $P_0$ is the value in the base period. The base period Is
assigned an index value of 100.

**Weighted index numbers** are used when aggregating multiple items with different importance. For a
Price index with $n$ goods:

$$\text{Price Index}_t = \frac{\sum_{i=1}^{n} P_{i,t} \times Q_{i,0}}{\sum_{i=1}^{n} P_{i,0} \times Q_{i,0}} \times 100$$

This is a **Laspeyres index**, which uses base-period quantities as weights. It tends to overstate
Inflation because it does not account for consumer substitution away from goods that have become
Relatively more expensive.

A **Paasche index** uses current-period quantities as weights:

$$\text{Paasche Index}_t = \frac{\sum_{i=1}^{n} P_{i,t} \times Q_{i,t}}{\sum_{i=1}^{n} P_{i,0} \times Q_{i,t}} \times 100$$

### Using Index Numbers

To convert a nominal value to a real value using an index number:

$$\text{Real value} = \frac{\text{Nominal value}}{\text{Price index}} \times 100$$

To calculate the percentage change between two index values:

$$\%\Delta = \frac{\text{Index}_t - \text{Index}_{t-1}}{\text{Index}_{t-1}} \times 100$$

**Splicing index numbers** when the base year changes: if the old index (base $= 2000$) is 120 in
2015, and the new index (base $= 2015$) is 105 in 2020, the 2020 value on the old base is:

$$\text{Index}_{2020} = 120 \times \frac{105}{100} = 126$$

## Common Pitfalls

- Confusing nominal and real values. Always check whether a value is in current prices (nominal) or
  constant prices (real) before making comparisons over time.
- Using the wrong discount rate in CBA. The social discount rate should reflect society's time
  preference, not the private sector's required rate of return. The choice of rate can dramatically
  alter the results of long-term projects.
- Confusing the Gini coefficient with absolute poverty measures. The Gini measures relative
  inequality; a country can have a low Gini but high absolute poverty, or a high Gini with low
  absolute poverty.
- Calculating the HDI using arithmetic rather than geometric mean. Since 2010, the UNDP has used the
  geometric mean (which ensures that a very low score in one dimension cannot be fully compensated
  by high scores in others).
- Assuming the multiplier is always large. With high tax rates and high import propensities, the
  multiplier can be very small (close to 1 or even less than 1).
- Confusing the consumption function with the saving function. The consumption function has a
  positive intercept (autonomous consumption); the saving function has a negative intercept
  (autonomous dissaving).
- Forgetting that the IS-LM model assumes a fixed price level. It is a short-run model that does not
  capture the interaction between output and the price level (which is the domain of the AD-AS
  model).
- Neglecting to distinguish between the money multiplier and the fiscal multiplier. The money
  multiplier relates to banking and the money supply; the fiscal multiplier relates to government
  spending and national income.
- Confusing transitory income with permanent income. The permanent income hypothesis predicts that
  temporary tax changes have a much smaller effect on consumption than permanent ones.

## Index Number Calculations: Advanced (HL Extension)

### Laspeyres, Paasche, and Fisher Indices

**Laspeyres price index** uses base-period quantities as weights:

$$P_L = \frac{\sum_{i=1}^{n} P_{i,t} \cdot Q_{i,0}}{\sum_{i=1}^{n} P_{i,0} \cdot Q_{i,0}} \times 100$$

**Paasche price index** uses current-period quantities as weights:

$$P_P = \frac{\sum_{i=1}^{n} P_{i,t} \cdot Q_{i,t}}{\sum_{i=1}^{n} P_{i,0} \cdot Q_{i,t}} \times 100$$

**Fisher ideal price index** is the geometric mean of Laspeyres and Paasche:

$$P_F = \sqrt{P_L \times P_P}$$

The Fisher index is considered "ideal" because it satisfies the time-reversal test
($P_{0 \to 1} \times P_{1 \to 0} = 1$) and the factor-reversal test, which neither Laspeyres nor
Paasche satisfies individually.

### CPI vs. RPI

| Feature       | CPI                                                             | RPI (Retail Price Index)                                   |
| ------------- | --------------------------------------------------------------- | ---------------------------------------------------------- |
| Coverage      | Broader population coverage                                     | Excludes top 4% of income earners and pensioner households |
| Formula       | Partially based on a geometric mean (accounts for substitution) | Uses arithmetic mean (Carli formula; upward bias)          |
| Housing costs | Includes owner-occupied housing costs (rental equivalence)      | Includes mortgage interest payments (more volatile)        |
| Use           | Target for inflation targeting (Bank of England)                | Used for index-linked bonds, some pension calculations     |
| Bias          | Lower substitution bias                                         | Upward bias (overstates inflation)                         |

### Worked Example: Constructing a Price Index

A basket contains three goods with the following data:

| Good | Base Year Price | Base Year Quantity | Year 2 Price | Year 2 Quantity |
| ---- | --------------- | ------------------ | ------------ | --------------- |
| A    | 10              | 50                 | 12           | 45              |
| B    | 5               | 100                | 6            | 90              |
| C    | 8               | 30                 | 9            | 35              |

**Laspeyres index:**

$$P_L = \frac{12 \times 50 + 6 \times 100 + 9 \times 30}{10 \times 50 + 5 \times 100 + 8 \times 30} \times 100 = \frac{600 + 600 + 270}{500 + 500 + 240} \times 100 = \frac{1470}{1240} \times 100 = 118.5$$

**Paasche index:**

$$P_P = \frac{12 \times 45 + 6 \times 90 + 9 \times 35}{10 \times 45 + 5 \times 90 + 8 \times 35} \times 100 = \frac{540 + 540 + 315}{450 + 450 + 280} \times 100 = \frac{1395}{1180} \times 100 = 118.2$$

**Fisher index:**

$$P_F = \sqrt{118.5 \times 118.2} = \sqrt{14007.7} = 118.4$$

The Laspeyres index slightly overstates inflation (118.5) compared to Paasche (118.2) because it
Does not account for consumer substitution toward goods whose relative prices have fallen.

## Index Number Chaining (HL Extension)

### The Chain-Linking Problem

When constructing index numbers over long periods, the fixed-base approach (using a single base
Year) becomes increasingly inaccurate because the basket of goods and relative prices change over
Time. **Chain-linking** addresses this by calculating the index as the product of period-to-period
Changes.

**Fixed-base index:**

$$I_t = \frac{\sum P_{i,t} Q_{i,0}}{\sum P_{i,0} Q_{i,0}} \times 100$$

**Chain-linked index:**

$$I_t = I_{t-1} \times \frac{\sum P_{i,t} Q_{i,t-1}}{\sum P_{i,t-1} Q_{i,t-1}}$$

Or equivalently:

$$I_t = I_0 \times \prod_{s=1}^{t} \frac{\sum P_{i,s} Q_{i,s-1}}{\sum P_{i,s-1} Q_{i,s-1}}$$

### Why Chain-Linking Matters

**Substitution bias:** when the price of a good rises, consumers substitute away from it. A
Fixed-base index (Laspeyres) overstates the cost of living because it uses the old (pre-price
Change) basket, which overweights the now-more-expensive good.

**New goods bias:** fixed-base indices cannot incorporate new goods until the base is updated.
Chain-linked indices incorporate new goods as soon as they appear in the basket.

**Quality change:** improvements in quality mean that a price increase may reflect improved Quality
rather than pure inflation. Chain-linked indices allow more frequent quality adjustments.

### Numerical Example: Chain-Linked CPI

An economy consumes two goods: food and housing.

| Year | Price of food | Quantity of food | Price of housing | Quantity of housing |
| ---- | ------------- | ---------------- | ---------------- | ------------------- |
| 2020 | 10            | 100              | 50               | 20                  |
| 2021 | 12            | 90               | 55               | 20                  |
| 2022 | 11            | 95               | 60               | 18                  |

**Fixed-base (Laspeyres) index with 2020 base:**

2021:
$I_{2021} = \frac{12 \times 100 + 55 \times 20}{10 \times 100 + 50 \times 20} \times 100 = \frac{1200 + 1100}{1000 + 1000} \times 100 = \frac{2300}{2000} \times 100 = 115.0$

2022:
$I_{2022} = \frac{11 \times 100 + 60 \times 20}{10 \times 100 + 50 \times 20} \times 100 = \frac{1100 + 1200}{2000} \times 100 = \frac{2300}{2000} \times 100 = 115.0$

Inflation 2020--2021 = 15.0%. Inflation 2021--2022 = 0.0%.

**Chain-linked index:**

2021:
$I_{2021} = 100 \times \frac{12 \times 100 + 55 \times 20}{10 \times 100 + 50 \times 20} = 100 \times \frac{2300}{2000} = 115.0$

2022:
$I_{2022} = 115.0 \times \frac{11 \times 90 + 60 \times 20}{12 \times 90 + 55 \times 20} = 115.0 \times \frac{990 + 1200}{1080 + 1100}$

$= 115.0 \times \frac{2190}{2180} = 115.0 \times 1.0046 = 115.5$

Chain-linked inflation 2021--2022 = 0.46%.

The chain-linked index shows positive inflation (0.46%) while the fixed-base index shows zero
Inflation. The difference arises because the chain-linked index uses the 2021 basket (which Reflects
the substitution away from food toward housing), while the fixed-base index uses the 2020 basket.

**Paasche index for comparison:**

2022 Paasche:
$\frac{11 \times 95 + 60 \times 18}{10 \times 95 + 50 \times 18} = \frac{1045 + 1080}{950 + 900} = \frac{2125}{1850} = 114.9$

The Paasche index (using current weights) gives 114.9, slightly lower than both the Laspeyres And
chain-linked results.

### Fisher Ideal Index

The **Fisher index** is the geometric mean of the Laspeyres and Paasche indices:

$$F_t = \sqrt{L_t \times P_t}$$

This index avoids both the upward bias of Laspeyres and the downward bias of Paasche.

Fisher index for 2022: $F = \sqrt{115.0 \times 114.9} = 114.95$.

## Worked Examples: Quantitative Economics (HL Extension)

<details>
<summary>Problem 9: Sensitivity Analysis for Infrastructure Project</summary>

A government is evaluating a high-speed rail project:

- Cost: USD 50 billion (Year 0)
- Annual benefit: USD 3 billion (Years 1--30)
- Discount rate: 5% (base case)

(a) Calculate the NPV at the base case.

(b) Perform one-way sensitivity analysis varying the discount rate to 3% and 7%.

(c) Perform one-way sensitivity analysis varying the annual benefit to USD 2 billion and USD 4
billion.

(d) The project life is uncertain. Calculate the break-even project life.

(a) Annuity factor (30 years, 5%):

$\text{AF} = \frac{1 - 1.05^{-30}}{0.05} = \frac{1 - 0.2314}{0.05} = \frac{0.7686}{0.05} = 15.37$

$\text{NPV} = -50 + 3 \times 15.37 = -50 + 46.1 = -3.9$ billion

The project has a negative NPV at the base case.

(b) At 3%: $\text{AF} = \frac{1 - 1.03^{-30}}{0.03} = \frac{1 - 0.4120}{0.03} = 19.60$

$\text{NPV} = -50 + 3 \times 19.60 = -50 + 58.8 = +8.8$ billion

At 7%: $\text{AF} = \frac{1 - 1.07^{-30}}{0.07} = \frac{1 - 0.1314}{0.07} = 12.41$

$\text{NPV} = -50 + 3 \times 12.41 = -50 + 37.2 = -12.8$ billion

The NPV ranges from +8.8 billion (3%) to -12.8 billion (7%). The project is very sensitive to the
Discount rate.

(c) At USD 2 billion: $\text{NPV} = -50 + 2 \times 15.37 = -50 + 30.7 = -19.3$ billion

At USD 4 billion: $\text{NPV} = -50 + 4 \times 15.37 = -50 + 61.5 = +11.5$ billion

The NPV ranges from -19.3 to +11.5 billion. Also very sensitive to benefit estimates.

(d) Break-even: $0 = -50 + 3 \times \text{AF}(n, 5\%)$

$\text{AF}(n, 5\%) = 50/3 = 16.67$

$\frac{1 - 1.05^{-n}}{0.05} = 16.67 \implies 1 - 1.05^{-n} = 0.8333 \implies 1.05^{-n} = 0.1667$

$n = -\frac{\ln 0.1667}{\ln 1.05} = \frac{1.7918}{0.0488} = 36.7$ years

The project must last at least 37 years to break even, which is beyond the planned 30-year life.
This suggests the project is marginal.

</details>

<details>
<summary>Problem 10: Regression Analysis --- Phillips Curve</summary>

An economist estimates the Phillips curve: $\pi = \beta_0 + \beta_1 u + \epsilon$

Data (5 observations):

| Observation | Unemployment rate ($u$%) | Inflation rate ($\pi$%) |
| ----------- | ------------------------ | ----------------------- |
| 1           | 3                        | 6                       |
| 2           | 5                        | 4                       |
| 3           | 7                        | 3                       |
| 4           | 8                        | 2                       |
| 5           | 10                       | 1                       |

(a) Estimate the regression coefficients.

(b) Calculate $R^2$.

(c) Interpret the results and identify a potential omitted variable.

(a) $\bar{u} = 6.6$, $\bar{\pi} = 3.2$

$\sum(u_i - \bar{u})(\pi_i - \bar{\pi})$:

$= (-3.6)(2.8) + (-1.6)(0.8) + (0.4)(-0.2) + (1.4)(-1.2) + (3.4)(-2.2)$
$= -10.08 - 1.28 - 0.08 - 1.68 - 7.48 = -20.60$

$\sum(u_i - \bar{u})^2 = 12.96 + 2.56 + 0.16 + 1.96 + 11.56 = 29.20$

$\hat{\beta}_1 = -20.60/29.20 = -0.706$

$\hat{\beta}_0 = 3.2 - (-0.706)(6.6) = 3.2 + 4.66 = 7.86$

Estimated Phillips curve: $\hat{\pi} = 7.86 - 0.706u$

(b) Predicted values and residuals:

| $u$ | $\pi$ | $\hat{\pi}$ | $(\pi - \hat{\pi})^2$ | $(\pi - \bar{\pi})^2$ |
| --- | ----- | ----------- | --------------------- | --------------------- |
| 3   | 6     | 5.74        | 0.068                 | 7.84                  |
| 5   | 4     | 4.33        | 0.109                 | 0.64                  |
| 7   | 3     | 2.92        | 0.006                 | 0.04                  |
| 8   | 2     | 2.21        | 0.044                 | 1.44                  |
| 10  | 1     | 0.80        | 0.040                 | 4.84                  |

$\text{SSR} = 0.267$, $\text{SST} = 14.80$

$R^2 = 1 - 0.267/14.80 = 0.982$

$R^2 = 0.982$: the unemployment rate explains 98.2% of the variation in inflation.

(c) The negative coefficient (-0.706) confirms the inverse relationship between unemployment and
Inflation predicted by the Phillips curve. A 1 percentage point increase in unemployment is
Associated with a 0.7 percentage point decrease in inflation.

**Potential omitted variable:** expected inflation ($\pi^e$). The expectations-augmented Phillips
Curve is:

$$\pi = \pi^e - \beta(u - u_n) + \epsilon$$

Omitting $\pi^e$ biases the coefficient on $u$ if expected inflation is correlated with
Unemployment. During the 1970s, rising expected inflation shifted the Phillips curve upward,
Creating stagflation (high inflation and high unemployment simultaneously), which the simple
Phillips curve cannot explain.

</details>

<details>
<summary>Problem 11: Correlation, Causation, and Omitted Variable Bias</summary>

A researcher finds that countries with higher chocolate consumption per capita have more Nobel
Laureates per capita. The correlation coefficient is $r = 0.79$.

(a) Calculate $R^2$ and interpret it.

(b) Identify the most likely source of the correlation (reverse causality, omitted variable, or
spurious).

(c) Explain how omitted variable bias could affect a regression of Nobel laureates on chocolate
consumption.

(a) $R^2 = r^2 = 0.79^2 = 0.624$

64.2% of the variation in Nobel laureates per capita is associated with variation in chocolate
Consumption per capita.

(b) This is almost certainly an **omitted variable** problem. The likely confounding variables
Include:

- GDP per capita (richer countries can afford both more chocolate and more research funding)
- Education spending (better-educated populations both consume more chocolate and produce more
  research)
- Institutional quality (strong institutions support both consumption diversity and research)
- Climate (Northern European countries have higher chocolate consumption and strong research
  institutions)

The correlation is **not spurious** in the strict sense because there are genuine causal chains
Connecting the omitted variables to both chocolate consumption and Nobel prizes.

(c) If the true model is:

$$\text{Nobel}_i = \beta_0 + \beta_1 \text{Chocolate}_i + \beta_2 \text{GDP}_i + \epsilon_i$$

And we estimate the short regression (omitting GDP):

$$\widetilde{\text{Nobel}}_i = \tilde{\beta}_0 + \tilde{\beta}_1 \text{Chocolate}_i + u_i$$

Then:

$$\tilde{\beta}_1 = \beta_1 + \beta_2 \frac{\text{Cov}(\text{Chocolate}, \text{GDP})}{\text{Var}(\text{Chocolate})}$$

If $\beta_2 > 0$ (GDP increases Nobel prizes) and $\text{Cov}(\text{Chocolate}, \text{GDP}) > 0$
(richer countries consume more chocolate), then $\tilde{\beta}_1 > \beta_1$.

The estimated effect of chocolate on Nobel prizes is biased upward. Some of the effect of GDP on
Nobel prizes is mistakenly attributed to chocolate consumption.

To establish causation, the researcher could use an instrumental variable (e.g., a measure of Cocoa
production that affects chocolate consumption but not Nobel prizes directly) or a natural Experiment
(e.g., a chocolate tax in one country).

</details>

<details>
<summary>Problem 12: Social Discount Rate and Climate Policy</summary>

A climate policy reduces carbon emissions at a cost of USD 2 trillion today. The benefits are
Avoided climate damages of USD 100 billion per year, starting in 20 years and continuing forever.

(a) Calculate the NPV using discount rates of 1.4% (Stern), 3.5% (UK Treasury), and 5% (Nordhaus).

(b) At what discount rate does the project break even?

(c) Discuss the ethical implications of the choice of discount rate for climate policy.

(a) The benefits are a perpetuity starting in 20 years:

$\text{PV of benefits} = \frac{B}{r} \times \frac{1}{(1+r)^{20}}$

At 1.4%:
$\text{PV} = \frac{100}{0.014} \times \frac{1}{1.014^{20}} = 7\,143 \times \frac{1}{1.320} = 5\,411$
billion

$\text{NPV} = -2\,000 + 5\,411 = +3\,411$ billion

At 3.5%:
$\text{PV} = \frac{100}{0.035} \times \frac{1}{1.035^{20}} = 2\,857 \times \frac{1}{1.990} = 1\,436$
billion

$\text{NPV} = -2\,000 + 1\,436 = -564$ billion

At 5%:
$\text{PV} = \frac{100}{0.05} \times \frac{1}{1.05^{20}} = 2\,000 \times \frac{1}{2.653} = 754$
billion

$\text{NPV} = -2\,000 + 754 = -1\,246$ billion

The project is justified at the Stern rate but not at higher rates.

(b) Break-even: $0 = -2\,000 + \frac{100}{r(1+r)^{20}}$

$\frac{100}{r(1+r)^{20}} = 2\,000$

$r(1+r)^{20} = 0.05$

Solving by trial: at $r = 2.0\%$: $0.02 \times 1.486 = 0.0297$ (too low) At $r = 2.5\%$:
$0.025 \times 1.639 = 0.0410$ (closer) At $r = 2.3\%$: $0.023 \times 1.588 = 0.0365$ At $r = 2.2\%$:
$0.022 \times 1.562 = 0.0344$ At $r = 2.15\%$: $0.0215 \times 1.549 = 0.0333$

The break-even discount rate is approximately 2.1--2.2%.

(c) The choice of discount rate for climate policy has profound ethical implications:

1. **Intergenerational equity:** a high discount rate effectively places near-zero value on the
   welfare of future generations. At 5%, USD 1 of damage in 100 years is worth USD 0.008 today
2. **Pure time preference:** Stern's low $\delta$ (0.1%) reflects the ethical view that future lives
   should be valued equally to current lives. Nordhaus's higher $\delta$ (3%) reflects the empirical
   observation that people do discount the future
3. **Uncertainty:** climate damages are highly uncertain and potentially catastrophic (fat tails).
   Standard discounting may understate the expected cost of low-probability, high-impact events
4. **Irreversibility:** climate change involves irreversible tipping points. Standard NPV analysis
   does not adequately account for the option value of preserving flexibility

</details>

## Common Pitfalls: Quantitative Economics (Comprehensive)

- Confusing the discount rate with the interest rate. The social discount rate reflects social time
  preference, not the market interest rate
- Using the wrong formula for a perpetuity vs. A finite annuity. A perpetuity has an infinite time
  horizon: $\text{PV} = C/r$. An annity is finite: $\text{PV} = C \times \text{AF}(n, r)$
- Ignoring sensitivity analysis. Presenting a single NPV without sensitivity analysis gives a false
  sense of precision
- Assuming that $R^2$ measures causation. A high $R^2$ does not mean the independent variable causes
  the dependent variable; it only measures the strength of the linear association
- Confusing the Laspeyres and Paasche indices. Laspeyres uses base-year quantities (overstates
  inflation); Paasche uses current-year quantities (understates inflation)
- Forgetting that chain-linking and Fisher indices reduce but do not eliminate substitution bias
- Applying the simple Phillips curve to periods of stagflation. The expectations-augmented Phillips
  curve is needed when expected inflation is changing
- Ignoring the base year when comparing index numbers. Index values are relative to the base; the
  choice of base year affects the level (though not the percentage change between periods)

## Worked Examples: Quantitative Economics (Additional)

<details>
<summary>Problem 13: Multiple Regression and Multicollinearity</summary>

An economist estimates the determinants of GDP growth:

$\text{Growth} = \beta_0 + \beta_1 \text{Investment} + \beta_2 \text{Education} + \beta_3 \text{Trade} + \epsilon$

Data (10 observations, standardised variables):

| Variable   | Coefficient | Std. Error | t-stat | VIF |
| ---------- | ----------- | ---------- | ------ | --- |
| Intercept  | 2.5         | 0.8        | 3.13   | --  |
| Investment | 0.35        | 0.12       | 2.92   | 1.8 |
| Education  | 0.20        | 0.15       | 1.33   | 3.2 |
| Trade      | 0.18        | 0.14       | 1.29   | 3.0 |

$R^2 = 0.72$, $n = 10$, $k = 3$

(a) Test the overall significance of the regression. [3 marks]

(b) Identify any multicollinearity issues. [3 marks]

(c) The economist drops the Education variable and re-estimates:

| Variable   | Coefficient | Std. Error | t-stat |
| ---------- | ----------- | ---------- | ------ |
| Investment | 0.42        | 0.10       | 4.20   |
| Trade      | 0.25        | 0.11       | 2.27   |

$R^2 = 0.65$. Compare and interpret. [4 marks]

(a) $F = \frac{R^2/k}{(1-R^2)/(n-k-1)} = \frac{0.72/3}{0.28/6} = \frac{0.24}{0.0467} = 5.14$

$F_{0.05}(3, 6) = 4.76$.

$F = 5.14 > 4.76$: the regression is jointly significant at the 5% level. At least one Coefficient
is significantly different from zero.

(b) VIF values: Investment (1.8), Education (3.2), Trade (3.0). None exceeds 10, so there is No
severe multicollinearity by the standard rule. However, the VIFs for Education and Trade (>3)
suggest moderate correlation.

The moderate multicollinearity explains why Education and Trade have large standard errors And are
individually insignificant (t-stats of 1.33 and 1.29) despite the model being jointly Significant.
The correlated variables are "stealing" significance from each other.

(c) After dropping Education:

- Investment coefficient increases from 0.35 to 0.42, and its standard error decreases (more precise
  estimate)
- Trade coefficient increases from 0.18 to 0.25, and becomes significant (t = 2.27)
- $R^2$ falls from 0.72 to 0.65 (expected, since a variable was removed)
- $\bar{R}^2$ original: $1 - (0.28/6)/(9/9) = 1 - 0.0467 = 0.953$. Wait, that cannot be right.

$\bar{R}^2 = 1 - \frac{0.28 \times 9}{9 \times 0.72} = 1 - 0.389 = 0.611$.

Actually:
$\bar{R}^2 = 1 - \frac{(1-0.72)(10-1)}{10-3-1} = 1 - \frac{0.28 \times 9}{6} = 1 - 0.42 = 0.58$.

$\bar{R}^2$ new:
$1 - \frac{(1-0.65)(10-1)}{10-2-1} = 1 - \frac{0.35 \times 9}{7} = 1 - 0.45 = 0.55$.

The adjusted $R^2$ falls slightly (0.58 to 0.55), suggesting that Education does add Incremental
explanatory power. However, the simpler model provides clearer coefficient Estimates for Investment
and Trade.

**Trade-off:** the full model has higher $\bar{R}^2$ but multicollinearity makes individual
Coefficients imprecise. The simpler model has clearer coefficients but lower explanatory Power. The
choice depends on whether the goal is prediction (full model) or causal Interpretation (simpler
model).

</details>

<details>
<summary>Problem 14: Real Options in Climate Policy</summary>

A government is considering a carbon capture project:

- Cost: USD 5 billion (irreversible)
- Annual benefit: depends on the carbon price, which is uncertain
- Carbon price scenarios: USD 50/tonne (40% probability) or USD 100/tonne (60% probability)
- The project captures 1 million tonnes of CO2 per year
- Discount rate: 6%
- The government can wait 2 years to observe the carbon price before deciding

(a) Calculate the expected NPV of immediate investment. [3 marks]

(b) Calculate the NPV of the option to wait. [4 marks]

(c) What is the value of the real option to delay? [3 marks]

(a) Annual benefit (expected) $= 0.4 \times 50 \times 1 + 0.6 \times 100 \times 1 = 20 + 60 = 80$
million.

Annuity factor (perpetuity, 6%): $1/0.06 = 16.67$.

$\text{NPV} = -5000 + 80 \times 16.67 = -5000 + 1333.6 = -3666.4$ million.

The expected NPV is negative. Traditional analysis would reject the project.

(b) Wait 2 years:

Scenario 1 (40%): carbon price = USD 50. Annual benefit = 50 million.

$\text{NPV at year 2} = -5000 + 50/0.06 = -5000 + 833.3 = -4166.7$ million.

Do not invest. NPV $= 0$.

Scenario 2 (60%): carbon price = USD 100. Annual benefit = 100 million.

$\text{NPV at year 2} = -5000 + 100/0.06 = -5000 + 1666.7 = -3333.3$ million.

Still negative. Do not invest.

Wait -- both scenarios yield negative NPV. The option to wait has zero value because the Project is
never viable. Let me adjust the parameters.

Recalculating with a larger capture capacity: 5 million tonnes per year.

(a) Annual benefit (expected) $= 0.4 \times 250 + 0.6 \times 500 = 100 + 300 = 400$ million.

$\text{NPV} = -5000 + 400 \times 16.67 = -5000 + 6668 = +1668$ million.

(b) Scenario 1 (40%): annual benefit = 250 million.

$\text{NPV at year 2} = -5000 + 250/0.06 = -5000 + 4166.7 = -833.3$. Do not invest.

Scenario 2 (60%): annual benefit = 500 million.

$\text{NPV at year 2} = -5000 + 500/0.06 = -5000 + 8333.3 = +3333.3$. Invest.

Expected NPV of waiting (at year 0): $0.4 \times 0/(1.06)^2 + 0.6 \times 3333.3/(1.06)^2$

$= 0 + 0.6 \times 3333.3 \times 0.8890 = 0.6 \times 2962.8 = 1777.7$ million.

(c) Value of real option $= 1777.7 - 1668 = 109.7$ million.

The option to wait is worth USD 110 million. The government should wait 2 years because:

1. The option value (USD 178 million) exceeds the immediate investment NPV (USD 1,668 million) only
   by a small margin, but waiting eliminates the 40% chance of investing in a money-losing project
2. The expected NPV of waiting (1,778) is higher than the NPV of immediate investment (1,668)

Wait, that contradicts. Let me recheck:

Immediate NPV $= +1668$. Wait NPV $= 1778$. $1778 > 1668$So waiting is better.

The option value is $1778 - 1668 = 110$ million. The government gains USD 110 million in Expected
value by waiting, because it avoids investing in the unfavourable scenario.

**Key insight:** even when the expected NPV of immediate investment is positive, waiting can Be
optimal when the investment is irreversible and there is uncertainty. The option to Avoid the
unfavourable scenario has positive value.

</details>

## Summary

This topic covers the economic theories and principles related to quantitative economics, including
key models, evidence, and policy implications.

**Key concepts include:**

- economic models and theories
- data analysis and interpretation
- policy evaluation
- real-world applications
- critical evaluation of economic arguments

The ability to apply these theories to real-world data and evaluate policy decisions is central to
success in this subject.
