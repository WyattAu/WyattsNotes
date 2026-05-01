---
title: Distribution of Income
description:
  A-Level Economics notes on Distribution of Income: 1. Measuring Inequality;
  1.1 The Lorenz Curve; 1.2 The Gini Coefficient.
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: distribution-of-income
sidebar_position: 6
---

## 1. Measuring Inequality

### 1.1 The Lorenz Curve

The **Lorenz curve** plots the cumulative proportion of total income received by the cumulative
proportion of the population, ordered from poorest to richest.

Let the population be divided into quintiles (five equal groups of 20%). If the income shares are
$(s_1, s_2, s_3, s_4, s_5)$ where $\sum s_i = 1$, the cumulative shares are:

$$L_k = \sum_{i=1}^{k} s_i, \quad k = 1, 2, 3, 4, 5$$

The Lorenz curve passes through points $(0.2, L_1)$, $(0.4, L_2)$, $(0.6, L_3)$, $(0.8, L_4)$,
$(1, 1)$.

- The **line of perfect equality** is the 45° line from $(0,0)$ to $(1,1)$
- The greater the deviation (bow) from the 45° line, the greater the inequality

### 1.2 The Gini Coefficient

$$G = \frac{A}{A + B}$$

where $A$ = area between the 45° line and the Lorenz curve, $B$ = area under the Lorenz curve.

Since the total area under the 45° line is $\frac{1}{2}$:

$$G = 2A = 1 - 2B$$

**Derivation using the trapezoidal rule.** Given cumulative shares $L_k$ at population proportions
$p_k = k/5$:

$$B = \sum_{k=1}^{5} \frac{(L_{k-1} + L_k)(p_k - p_{k-1})}{2}$$

where $L_0 = 0$, $p_0 = 0$.

$$G = 1 - 2B$$

| Gini Coefficient   | Interpretation      |
| ------------------ | ------------------- |
| $G = 0$            | Perfect equality    |
| $G = 1$            | Maximum inequality  |
| $G < 0.3$          | Relatively equal    |
| $0.3 \leq G < 0.4$ | Moderate inequality |
| $G \geq 0.4$       | High inequality     |

:::info International Comparisons (2023 estimates)

- Denmark: 0.28 | Germany: 0.31 | UK: 0.35 | USA: 0.40 | Brazil: 0.52 | South Africa: 0.63
:::

### 1.3 Limitations of the Gini Coefficient

1. **Insensitive to changes at different parts of the distribution**: a transfer from a rich person
   to a very rich person doesn't change $G$
2. **Doesn't capture absolute poverty**: a country can have a low Gini but widespread poverty
3. **Different Lorenz curves can have the same Gini**: the Gini is a summary statistic that may mask
   important distributional details
4. **Doesn't account for non-market benefits**: public services, in-kind transfers

### 1.4 Other Measures

- **Palma ratio**: ratio of the top 10%'s income share to the bottom 40%'s income share. More
  sensitive to changes at the extremes.
- **Theil index**: an entropy-based measure that decomposes inequality into within-group and
  between-group components.
- **Percentile ratios**: e.g., 90/10 ratio (income at the 90th percentile ÷ income at the 10th
  percentile).
- **Income quintile share ratio** (S80/S20): total income of the top 20% ÷ total income of the
  bottom 20%.

## 2. Causes of Inequality

### 2.1 Market Forces

1. **Differences in human capital**: education, skills, experience $\Rightarrow$ different MRP
   $\Rightarrow$ different wages
2. **Differences in natural ability and talent**: some individuals are born with attributes that
   command higher wages
3. **Inheritance of wealth**: intergenerational transfer of assets creates persistent inequality
4. **Discrimination**: taste-based and statistical discrimination reduce wages for certain groups
5. **Labour market institutions**: declining union membership, minimum wage levels, deregulation
6. **Technological change**: skill-biased technological change (computers, automation) increases
   demand for skilled workers relative to unskilled workers $\Rightarrow$ wage inequality
7. **Globalisation**: trade with low-wage countries reduces demand for unskilled labour in developed
   economies

### 2.2 Wealth Inequality vs Income Inequality

**Wealth inequality** is typically much greater than income inequality. Wealth is more concentrated
because:

- Wealth is accumulated over a lifetime (and across generations) while income is measured annually
- Returns on wealth (interest, dividends, capital gains) generate more wealth
- Inheritance concentrates wealth in fewer hands

**Thomas Piketty (2014)**: if the rate of return on capital ($r$) exceeds the rate of economic
growth ($g$), i.e., $r > g$, then wealth inequality will tend to increase over time. Historically,
$r \approx 4\mathrm{--}5\%$ while $g \approx 1\mathrm{--}2\%$, suggesting growing inequality.

### 2.3 Global Inequality

Global inequality (inequality between all individuals worldwide) has _declined_ since the 1980s,
primarily due to rapid growth in China and India. However, inequality _within_ most countries has
increased.

## 3. Poverty

### 3.1 Definitions

**Absolute poverty**: a condition where individuals cannot afford basic necessities (food, shelter,
clothing). The World Bank defines extreme absolute poverty as living on less than $2.15 per day
(2017 PPP).

**Relative poverty**: a condition where individuals have significantly less income than the median.
The OECD defines relative poverty as income below 60% of the median household income (equivalised).

$$\mathrm{Relative poverty line} = 0.6 \times \mathrm{median household income}$$

### 3.2 Measuring Poverty

- **Headcount ratio**: proportion of the population below the poverty line
- **Poverty gap**: how far below the poverty line the average poor person falls
- **Sen Index (Sen, 1976)**: combines the headcount ratio, poverty gap, and income distribution
  among the poor

## 4. Policies to Reduce Inequality

### 4.1 Taxation

**Progressive taxation**: the average tax rate increases with income.

$$\frac{dT}{dY} > \frac{T}{Y}$$

For a progressive tax system:

- The **marginal tax rate** (MTR) $= \frac{dT}{dY}$ exceeds the **average tax rate** (ATR)
  $= \frac{T}{Y}$
- As income rises, ATR rises (by definition of progressivity)

**Example**: UK income tax (2024-25):

- Personal allowance: £12,570 (0%)
- Basic rate: 20% on £12,571–£50,270
- Higher rate: 40% on £50,271–£125,140
- Additional rate: 45% on above £125,140

**Effective marginal tax rate (EMTR)**: the total rate at which additional income is taxed when all
benefits and means-tested withdrawals are included.

$$\mathrm{EMTR} = \mathrm{income tax MTR} + \mathrm{NI MTR} + \mathrm{benefit withdrawal rate}$$

High EMTRs (poverty traps) occur when means-tested benefits are withdrawn as income rises, creating
disincentives to work.

**Regressive taxation**: ATR falls as income rises (e.g., VAT at a flat rate takes a larger
_proportion_ of low-income households' spending).

$$\frac{dT}{dY} < \frac{T}{Y}$$

**Proportional taxation**: ATR is constant (flat tax).

### 4.2 Transfer Payments

- **Universal benefits**: paid to all (e.g., state pension, NHS) — no poverty trap but costly
- **Means-tested benefits**: targeted at low-income households (e.g., Universal Credit) — more
  efficient but create poverty traps
- **In-kind transfers**: provision of goods/services rather than cash (e.g., free school meals,
  social housing)

### 4.3 Minimum Wage

As discussed in Topic 5, a minimum wage compresses the wage distribution from below, reducing
earnings inequality among the employed.

### 4.4 Education and Training

Investment in human capital can reduce inequality by raising the productivity (and hence wages) of
lower-skilled workers. However, if access to education is itself unequal, it may _reinforce_
inequality.

## 5. The Equity-Efficiency Trade-Off

### 5.1 Okun's Leaky Bucket

Arthur Okun (1975) argued that redistributing income from the rich to the poor involves "leaky
bucket" losses:

1. **Administrative costs**: collecting taxes and distributing benefits requires bureaucracy
2. **Disincentive effects**: high taxes may reduce work effort, saving, and investment
3. **Behavioural responses**: tax avoidance and evasion
4. **Deadweight loss**: distortionary taxes create inefficiency

The key insight: there is a trade-off between equity (fairness) and efficiency (maximising total
output). More redistribution $\Rightarrow$ less total income to redistribute.

### 5.2 The Laffer Curve

The **Laffer curve** illustrates the relationship between the tax rate and tax revenue:

$$T = t \times Y(t)$$

where $t$ is the tax rate and $Y(t)$ is the tax base (income), which declines as $t$ increases (due
to disincentive effects). At $t = 0$, $T = 0$. At $t = 1$ (100% tax), $T = 0$ (no one works). There
exists some $t^* \in (0, 1)$ that maximises revenue.

:::warning Common Pitfall The Laffer curve is a theoretical concept — there is no consensus on where
$t^*$ lies. Most empirical estimates for developed economies suggest that income tax rates are below
the revenue-maximising rate, meaning tax cuts would _reduce_ revenue.
:::

### 5.3 Evaluating the Trade-Off

**Arguments that equity and efficiency can be complementary:**

- Redistribution can improve health and education for the poor, increasing their productivity and
  economic growth
- High inequality may reduce aggregate demand (the rich save more, the poor spend more of marginal
  income)
- Extreme inequality can lead to social unrest, reducing investment and growth
- Equality of opportunity (access to education) can enhance efficiency by allowing talent to
  flourish regardless of background

**Arguments that the trade-off is real:**

- High marginal tax rates reduce incentives to work, save, and invest
- Generous welfare benefits may create dependency and reduce labour supply
- Redistribution through distortionary taxation creates deadweight loss

:::tip Exam Technique When asked to evaluate inequality policies, consider: effectiveness (does it
reduce inequality?), efficiency (does it create disincentives?), equity (is it fair?), fiscal cost
(can the government afford it?), and unintended consequences (does it create poverty traps?).
:::

## 6. Critical Evaluation

### Strengths of Redistributive Policies

- Reduce poverty and improve living standards for the most vulnerable
- Promote social cohesion and political stability
- Invest in human capital (education, healthcare) that enhances long-run growth
- Correct market outcomes that are deemed socially unacceptable

### Limitations

- Disincentive effects may reduce total output (the equity-efficiency trade-off)
- Government failure: inefficient targeting, bureaucratic waste, corruption
- Poverty traps from means-testing
- Redistribution may not address the _root causes_ of inequality (discrimination, unequal
  opportunity)
- Globalisation limits the effectiveness of national redistributive policies (mobile capital, tax
  competition)

:::info Board-Specific Note AQA requires detailed knowledge of the Lorenz curve and Gini
coefficient, including calculations. Edexcel emphasises poverty measures and government policy. CIE
covers inequality in the context of development economics. OCR (A) links distribution to market
failure and government intervention.
:::

## 7. Formal Derivations

### 7.1 Derivation of the Gini Coefficient from the Lorenz Curve

Let $L(p)$ be the Lorenz function, mapping the cumulative population proportion $p \in [0,1]$ to the
cumulative income proportion. The line of perfect equality is $L(p) = p$.

The area between the line of equality and the Lorenz curve is:

$$A = \int_0^1 [p - L(p)]\,dp$$

The area under the Lorenz curve is:

$$B = \int_0^1 L(p)\,dp$$

Since $A + B = \frac{1}{2}$ (the area under the 45° line), the Gini coefficient is:

$$G = \frac{A}{A + B} = 2A = 1 - 2B$$

Substituting the integral form of $B$:

$$\boxed{G = 1 - 2\int_0^1 L(p)\,dp}$$

_Verification for discrete data._ Given cumulative shares $L_k$ at population proportions
$p_k = k/n$, the trapezoidal approximation gives
$B = \sum_{k=1}^{n} \frac{(L_{k-1} + L_k)(p_k - p_{k-1})}{2}$, which is the formula used in
practice. For perfect equality ($L(p) = p$): $B = \int_0^1 p\,dp = \frac{1}{2}$, so $G = 0$. For
maximum inequality ($L(p) = 0$ for $p < 1$, $L(1) = 1$): $B = 0$, so $G = 1$.

### 7.2 Derivation of Lorenz Curve Properties

**Proposition:** The Lorenz curve $L(p)$ satisfies: (i) $L(0) = 0$, (ii) $L(1) = 1$, (iii)
$L'(p) \geq 0$ (monotonically non-decreasing), and (iv) $L(p) \leq p$ (convexity to the 45° line).

_Proof._

(i) With 0% of the population, cumulative income is 0%: $L(0) = 0$.

(ii) With 100% of the population, all income is accounted for: $L(1) = 1$.

(iii) Let $f(y)$ be the income density function and $F(y)$ the cumulative distribution function.
Define $p = F(y)$ (the population proportion earning up to income $y$). Then:

$$L(p) = \frac{1}{\mu}\int_0^y t \cdot f(t)\,dt$$

where $\mu$ is mean income. Differentiating with respect to $p$ using $dp = f(y)\,dy$:

$$L'(p) = \frac{dL}{dp} = \frac{dL/dy}{dp/dy} = \frac{y \cdot f(y)}{f(y)} = y \geq 0$$

Since income $y \geq 0$, the Lorenz curve is monotonically non-decreasing. $\blacksquare$

(iv) From (iii), $L'(p) = y \leq \mu$ for the bottom $p$ proportion (since the poorest individuals
earn less than or equal to the mean). Therefore $\frac{dL}{dp} \leq \frac{dp}{dp} = 1$, which
implies $L(p) \leq p$ by integration from 0. Equality holds only under perfect equality.
$\blacksquare$

$$\boxed{L(0) = 0, \quad L(1) = 1, \quad L'(p) = y(p) \geq 0, \quad L(p) \leq p}$$

## 8. Problem Set

**Problem 1.** A country has income quintile shares: bottom 20% = 5%, second 20% = 10%, third 20% =
15%, fourth 20% = 25%, top 20% = 45%. Calculate the Gini coefficient using the trapezoidal rule.

<details>
<summary>Hint</summary>
Cumulative shares: (0.2, 0.05), (0.4, 0.15), (0.6, 0.30), (0.8, 0.55), (1.0, 1.0). Using trapezoidal rule: $B = 0.2 \times \frac{0 + 0.05}{2} + 0.2 \times \frac{0.05 + 0.15}{2} + 0.2 \times \frac{0.15 + 0.30}{2} + 0.2 \times \frac{0.30 + 0.55}{2} + 0.2 \times \frac{0.55 + 1.0}{2} = 0.2 \times (0.025 + 0.10 + 0.225 + 0.425 + 0.775) = 0.2 \times 1.55 = 0.31$. $G = 1 - 2(0.31) = 0.38$.
</details>

**Problem 2.** A flat tax of 20% is proposed to replace the current progressive system. Explain why
a flat tax is regressive when measured against _spending_ rather than income, even though it is
proportional against income.

<details>
<summary>Hint</summary>
Low-income households spend a larger proportion of their income (sometimes more than 100% — dissaving) than high-income households. A flat tax on income is proportional against income. But low-income households spend nearly all income, while high-income households save a large fraction. If measured against *spending*, the effective tax rate on spending is: for low-income households, $\approx 20\%$ of all spending; for high-income households, the tax as a fraction of spending is lower because much income is saved, not spent. Actually, a flat income tax is proportional by definition. The regressivity argument applies to *consumption taxes* (VAT), not flat income taxes. Clarify the distinction.
</details>

**Problem 3.** The median household income in a country is £30,000. The relative poverty line is 60%
of median income. A household has income of £16,000. Is this household in relative poverty? If the
median income rises to £35,000 but the household's income stays at £16,000, what happens?

<details>
<summary>Hint</summary>
Poverty line = $0.6 \times 30{,}000 = £18{,}000$. The household at £16,000 is in relative poverty. If median rises to £35,000: new poverty line = £21,000. The household is still in relative poverty and has fallen *further* below the line (from £2,000 below to £5,000 below). This illustrates a limitation of relative poverty: people can become "poorer" in relative terms even if their absolute income hasn't changed.
</details>

**Problem 4.** A worker earns £40,000 and faces income tax at 20% and National Insurance at 12%. She
also receives Universal Credit of £5,000, which is withdrawn at a rate of 55p for every extra £1
earned. Calculate her effective marginal tax rate. How much does she keep from an extra £1,000
earned?

<details>
<summary>Hint</summary>
EMTR = 20% (income tax) + 12% (NI) + 55% (benefit withdrawal) = 87%. From an extra £1,000: she pays £200 tax + £120 NI = £320. Her UC falls by £550. Net gain = £1,000 - £320 - £550 = £130. She keeps only 13% of additional earnings. This is a severe poverty trap.
</details>

**Problem 5.** Using Piketty's framework ($r > g$), explain why wealth inequality tends to increase
over time. Under what conditions might this trend be reversed?

<details>
<summary>Hint</summary>
If the return on capital ($r$) exceeds the growth rate of the economy ($g$), capital income grows faster than labour income. Since wealth is concentrated, this increases the wealth share of the top. Reversed if: (1) $g > r$ (e.g., rapid growth, low returns due to competition), (2) progressive wealth/capital taxes, (3) shocks that destroy capital value (wars, depressions), (4) policies that broaden capital ownership (employee share schemes).
</details>

**Problem 6.** "Inequality is inevitable in a market economy but is not necessarily undesirable."
Evaluate this statement.

<details>
<summary>Hint</summary>
Inevitable: markets reward productivity differences, which reflect education, effort, risk, and talent. Some inequality provides incentives for work, investment, and innovation (efficiency argument). Not necessarily undesirable: moderate inequality is consistent with social mobility and opportunity. However, extreme inequality (as in many developing countries) is associated with political capture, reduced social mobility, and underinvestment in human capital by the poor. The question is the *degree* and *type* of inequality, not its existence.
</details>

**Problem 7.** Compare the advantages and disadvantages of universal vs means-tested benefits as
tools for reducing poverty.

<details>
<summary>Hint</summary>
Universal: advantages — no stigma, no poverty trap, universal coverage, simple to administer. Disadvantages — expensive (goes to those who don't need it), may require higher taxes. Means-tested: advantages — targeted, cheaper, can provide higher benefits to those most in need. Disadvantages — creates poverty traps (high EMTR), stigma, non-take-up (eligible people don't claim), administrative complexity.
</details>

**Problem 8.** A country has a Gini coefficient of 0.25 for income but 0.65 for wealth. Explain why
wealth is more unequally distributed than income, and discuss the implications for social mobility.

<details>
<summary>Hint</summary>
Wealth is accumulated over lifetimes and generations; income is measured annually. Wealth generates returns ($r > g$), creating compounding effects. Inheritance concentrates wealth. Implications for social mobility: wealthy families can invest in education, health, networks, and housing for their children, giving them advantages regardless of individual talent. High wealth inequality reduces intergenerational mobility (the "Great Gatsby curve" — countries with higher inequality tend to have lower mobility).
</details>

**Problem 9.** Evaluate the argument that globalisation has increased inequality within developed
countries.

<details>
<summary>Hint</summary>
For: trade with low-wage countries reduces demand for unskilled manufacturing labour in developed countries (Stolper-Samuelson theorem). Offshoring of jobs to lower-cost locations. Capital mobility puts downward pressure on wages. Against: trade lowers prices for consumers (disproportionately benefiting the poor). Creates new jobs in export sectors. Increases overall national income. Evidence is mixed: skill-biased technological change may be a more important driver of inequality than trade per se.
</details>

**Problem 10.** "The best way to reduce inequality is through education, not redistribution."
Discuss.

<details>
<summary>Hint</summary>
Education addresses the *root cause* (productivity differences) rather than the *symptom* (income differences). Improves human capital, raises wages at the bottom, promotes social mobility. More politically acceptable than higher taxes. But: takes decades to have effect, access to education is itself unequal, doesn't help those past working age, quality of education matters more than quantity. Redistribution provides immediate relief for those in poverty. Optimal approach: both — invest in education for long-run equality of opportunity, and redistribute for short-run poverty alleviation.
</details>

## 9. Lorenz Curve Interpretation: Worked Example

### 9.1 Constructing and Interpreting a Lorenz Curve

**Example.** A country has six income groups (sextiles) with the following shares of total income:

| Group       | Population share | Income share |
| ----------- | ---------------- | ------------ |
| Poorest 1/6 | 16.7%            | 3%           |
| 2nd 1/6     | 16.7%            | 7%           |
| 3rd 1/6     | 16.7%            | 12%          |
| 4th 1/6     | 16.7%            | 18%          |
| 5th 1/6     | 16.7%            | 25%          |
| Richest 1/6 | 16.7%            | 35%          |

**Answer.** Cumulative population and income shares:

| Cumulative population | Cumulative income |
| --------------------- | ----------------- |
| 16.7%                 | 3%                |
| 33.3%                 | 10%               |
| 50.0%                 | 22%               |
| 66.7%                 | 40%               |
| 83.3%                 | 65%               |
| 100%                  | 100%              |

The Lorenz curve passes through these points. The significant bow below the 45-degree line indicates
substantial inequality. The bottom half of the population earns only 22% of total income.

### 9.2 Comparing Two Lorenz Curves

If country A's Lorenz curve is everywhere closer to the 45-degree line than country B's, then
country A has unambiguously lower inequality. If the curves cross, the comparison is ambiguous: one
country may have less inequality at the bottom of the distribution but more at the top.

## 10. Gini Coefficient: Extended Calculation

### 10.1 Worked Example with Quintile Data

**Example.** Income quintile shares: bottom 20% = 6%, second 20% = 11%, third 20% = 16%, fourth 20%
= 23%, top 20% = 44%. Calculate the Gini coefficient.

**Answer.** Cumulative shares: $(0.2, 0.06)$, $(0.4, 0.17)$, $(0.6, 0.33)$, $(0.8, 0.56)$,
$(1.0, 1.0)$.

Using the trapezoidal rule for $B$ (area under the Lorenz curve):

$$B = 0.2 \times \frac{0 + 0.06}{2} + 0.2 \times \frac{0.06 + 0.17}{2} + 0.2 \times \frac{0.17 + 0.33}{2} + 0.2 \times \frac{0.33 + 0.56}{2} + 0.2 \times \frac{0.56 + 1.0}{2}$$

$$B = 0.2 \times (0.030 + 0.115 + 0.250 + 0.445 + 0.780) = 0.2 \times 1.620 = 0.324$$

$$G = 1 - 2B = 1 - 0.648 = 0.352$$

A Gini of $0.352$ indicates moderate inequality, comparable to the UK.

### 10.2 Effect of a Transfer on the Gini Coefficient

**Example.** Suppose the government transfers $£5{,}000$ from a person in the top quintile to a
person in the bottom quintile. The bottom quintile share rises from 6% to 7%, and the top quintile
share falls from 44% to 43%. Recalculate $G$.

**Answer.** New cumulative shares: $(0.2, 0.07)$, $(0.4, 0.18)$, $(0.6, 0.34)$, $(0.8, 0.57)$,
$(1.0, 1.0)$.

$$B = 0.2 \times (0.035 + 0.125 + 0.260 + 0.455 + 0.785) = 0.2 \times 1.660 = 0.332$$

$$G = 1 - 2(0.332) = 0.336$$

The Gini coefficient falls from $0.352$ to $0.336$, confirming that progressive redistribution
reduces measured inequality.

## 11. Causes of Income Inequality: Extended Analysis

### 11.1 Demand-Side Factors

1. **Skill-biased technological change**: Automation and digitalisation increase demand for highly
   skilled workers (software engineers, data scientists) while reducing demand for routine manual
   and cognitive tasks. This widens the wage gap between skilled and unskilled workers.

2. **Globalisation**: Trade with low-wage countries reduces demand for unskilled manufacturing
   labour in developed economies (Stolper-Samuelson theorem). Capital mobility allows firms to
   relocate production, putting downward pressure on domestic wages.

3. **Rise of the super-star economy**: Technology enables the most talented individuals to capture
   global markets (e.g., top musicians, athletes, entrepreneurs), leading to winner-takes-all
   outcomes.

### 11.2 Supply-Side Factors

1. **Unequal access to education**: Quality of schooling varies dramatically by postcode and income.
   Children from affluent families attend better schools, receive private tutoring, and have greater
   access to extracurricular activities.

2. **Intergenerational wealth transfers**: Inheritance allows the wealthy to pass on advantages
   (housing, capital, networks) to their children, perpetuating inequality across generations.

3. **Declining union membership**: Union density has fallen in most developed economies since the
   1980s, reducing workers' bargaining power and compressing the wage distribution less effectively.

### 11.3 Institutional Factors

1. **Tax policy**: Reductions in top income tax rates since the 1980s have increased post-tax
   inequality.

2. **Minimum wage**: If the minimum wage does not keep pace with the cost of living, the lowest
   earners fall further behind.

3. **Financial deregulation**: The growth of the financial sector has created highly paid jobs for a
   small number of workers, contributing to top-end inequality.

## 12. Poverty Traps and the Welfare System

### 12.1 The Poverty Trap Mechanism

A **poverty trap** occurs when the effective marginal tax rate (EMTR) on additional income is so
high that work does not significantly increase net income. When means-tested benefits are withdrawn
as earnings rise, the combined effect of income tax, National Insurance, and benefit withdrawal can
create EMTRs exceeding 80%.

**Example.** A single parent earning $£15{,}000$ receives $£8{,}000$ in means-tested benefits. For
every extra $£1$ earned:

- Income tax: 20% ($£0.20$)
- National Insurance: 12% ($£0.12$)
- Benefit withdrawal: 63% ($£0.63$)
- EMTR: 95%
- Net gain from extra $£1$: $£0.05$

This creates almost no financial incentive to increase working hours or seek higher-paid work.

### 12.2 Universal Credit and Taper Rates

Universal Credit (UK) uses a single taper rate of 55% (as of 2024), meaning benefits are withdrawn
at 55p for every extra $£1$ earned above the work allowance. This simplifies the system but still
creates high EMTRs when combined with income tax and National Insurance.

## 13. Government Redistribution Policies: Extended Analysis

### 13.1 The Full Redistribution Toolkit

| Policy                 | Mechanism                                  | Effect on Inequality                    | Potential Drawbacks                               |
| ---------------------- | ------------------------------------------ | --------------------------------------- | ------------------------------------------------- |
| Progressive income tax | Higher rates on higher incomes             | Reduces post-tax inequality             | Disincentive to work and invest                   |
| Means-tested benefits  | Target transfers to the poor               | Reduces poverty directly                | Creates poverty traps, stigma                     |
| Universal basic income | Flat payment to all adults                 | Reduces poverty without traps           | Very expensive, may reduce work incentive         |
| Wealth tax             | Annual tax on net wealth above a threshold | Reduces wealth concentration            | Difficult to administer, capital flight           |
| Inheritance tax        | Tax on wealth transferred at death         | Reduces intergenerational inequality    | Unpopular, avoidance through trusts               |
| Free education         | State-funded schooling and university      | Promotes equality of opportunity        | Quality varies, regressive if richer benefit more |
| National minimum wage  | Floor on hourly pay                        | Compresses wage distribution from below | May reduce employment if set too high             |

### 13.2 Evaluating Effectiveness

The most effective redistribution strategies combine **predistribution** (reducing inequality before
tax, through education, minimum wages, and competition policy) with **redistribution** (taxing and
transferring after market incomes are determined). Over-reliance on either alone is less effective:

- Pure predistribution without redistribution leaves those unable to work (disabled, retired,
  unemployed) without support
- Pure redistribution without predistribution requires very high tax rates, creating large
  deadweight losses

## 14. Common Pitfalls

1. **Confusing income and wealth inequality.** Wealth is far more unequally distributed than income.
   A country with moderate income inequality may have extreme wealth inequality. Policies that
   address income (progressive tax) may not address wealth (inheritance tax, wealth tax).

2. **Assuming a lower Gini always means a better outcome.** A lower Gini achieved by making everyone
   equally poor is not desirable. The goal is to reduce inequality while maintaining (or increasing)
   average incomes.

3. **Ignoring the difference between absolute and relative poverty.** A country can have very low
   absolute poverty but high relative poverty. Policies to address each are different: absolute
   poverty requires economic growth and direct transfers; relative poverty requires reducing the
   income gap.

4. **Overstating the poverty trap.** While high EMTRs exist, empirical evidence suggests that most
   people still respond to financial incentives. The poverty trap is a real but often exaggerated
   problem.

5. **Treating the Gini coefficient as a complete measure.** The Gini is insensitive to changes at
   different parts of the distribution. Two countries with the same Gini can have very different
   income distributions (e.g., one with a large underclass, another with a small elite).

6. **Assuming redistribution necessarily reduces growth.** The equity-efficiency trade-off is real
   but not absolute. Moderate redistribution (funding education, healthcare, infrastructure) can
   enhance long-run growth by improving human capital and social stability.

## 15. Extension Problem Set

**Problem 1.** A country has income quintile shares: 4%, 9%, 15%, 24%, 48%. Calculate the Gini
coefficient. If a policy transfers income to equalise the bottom two quintiles (both at 6.5%), what
is the new Gini?

<details>
<summary>Hint</summary>
Cumulative: (0.2, 0.04), (0.4, 0.13), (0.6, 0.28), (0.8, 0.52), (1.0, 1.0). $B = 0.2 \times (0.020 + 0.085 + 0.205 + 0.400 + 0.760) = 0.294$. $G = 1 - 0.588 = 0.412$. After transfer: cumulative becomes (0.2, 0.065), (0.4, 0.13), ... $B$ increases, $G$ decreases.
</details>

**Problem 2.** Explain why the Palma ratio may be a better measure of inequality than the Gini
coefficient when comparing countries with similar middle-income shares but different extreme-income
shares.

<details>
<summary>Hint</summary>
The Palma ratio (top 10% / bottom 40%) focuses on the tails of the distribution where inequality is most politically and economically salient. The Gini is equally sensitive to transfers at all points on the Lorenz curve. If two countries have the same middle 50% share but different tails, the Gini may be similar while the Palma ratio differs significantly, better capturing the difference in inequality that matters most for social cohesion.
</details>

**Problem 3.** A worker earns $£25{,}000$ and faces income tax at 20%, National Insurance at 12%,
and has Universal Credit withdrawn at 55%. Calculate the EMTR. How much does she keep from an extra
$£200$ per month?

<details>
<summary>Hint</summary>
EMTR $= 20 + 12 + 55 = 87\%$. From $£200$: tax $= £40$, NI $= £24$, UC withdrawal $= £110$. Net gain $= 200 - 40 - 24 - 110 = £26$. She keeps 13%. This is a severe poverty trap.
</details>

**Problem 4.** "A universal basic income would eliminate poverty without creating disincentives to
work." Evaluate this statement.

<details>
<summary>Hint</summary>
UBI eliminates the poverty trap (no means-testing, zero marginal withdrawal rate from benefits). It provides a guaranteed income floor, reducing absolute poverty. It simplifies administration and reduces stigma. However: (1) it is extremely expensive, requiring higher taxes which create their own disincentives; (2) a UBI large enough to eliminate poverty would require tax rates that may significantly discourage work and investment; (3) it may reduce the political will to fund targeted services (disability support, social housing); (4) some recipients may reduce labour supply. The net effect on work incentives is ambiguous: the income effect reduces work (people need to work less) but the substitution effect increases work (the marginal tax rate on earnings is lower than under means-tested systems).
</details>

**Problem 5.** Using Piketty's framework ($r > g$), explain why wealth inequality has increased in
most developed economies since the 1980s. Discuss two policy responses and their potential
effectiveness.

<details>
<summary>Hint</summary>
Since the 1980s, $r$ (return on capital: 4-6%) has consistently exceeded $g$ (economic growth: 1-3%) in developed economies. This means capital income grows faster than labour income, concentrating wealth among capital owners. Contributing factors: financial deregulation (increasing $r$), tax cuts on capital gains and inheritance (reducing the effective tax on $r$), slower productivity growth (reducing $g$). Policy responses: (1) Wealth tax: directly taxes accumulated capital, but faces valuation challenges and capital flight. Effective if well-designed and internationally coordinated. (2) Inheritance tax: prevents intergenerational concentration, but is easily avoided through trusts and gifts. (3) Progressive capital gains tax: aligns tax rates on capital income with labour income, reducing the $r - g$ gap. Most administratively feasible option.
</details>
