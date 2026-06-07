---
title: Distribution of Income
description:
  'A-Level Economics Distribution of Income notes covering key definitions, core concepts, worked
  examples, and practice questions for thorough preparation.'
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
Proportion of the population, ordered from poorest to richest.

Let the population be divided into quintiles (five equal groups of 20%). If the income shares are
$(s_1, s_2, s_3, s_4, s_5)$ where $\sum s_i = 1$The cumulative shares are:

$$L_k = \sum_{i=1}^{k} s_i, \quad k = 1, 2, 3, 4, 5$$

The Lorenz curve passes through points $(0.2, L_1)$$(0.4, L_2)$$(0.6, L_3)$$(0.8, L_4)$ $(1, 1)$.

- The **line of perfect equality** is the 45° line from $(0,0)$ to $(1,1)$
- The greater the deviation (bow) from the 45° line, the greater the inequality

### 1.2 The Gini Coefficient

$$G = \frac{A}{A + B}$$

Where $A$ = area between the 45° line and the Lorenz curve, $B$ = area under the Lorenz curve.

Since the total area under the 45° line is $\frac{1}{2}$:

$$G = 2A = 1 - 2B$$

**Derivation using the trapezoidal rule.** Given cumulative shares $L_k$ at population proportions
$p_k = k/5$:

$$B = \sum_{k=1}^{5} \frac{(L_{k-1} + L_k)(p_k - p_{k-1})}{2}$$

Where $L_0 = 0$$p_0 = 0$.

$$G = 1 - 2B$$

| Gini Coefficient   | Interpretation      |
| ------------------ | ------------------- |
| $G = 0$            | Perfect equality    |
| $G = 1$            | Maximum inequality  |
| $G < 0.3$          | Relatively equal    |
| $0.3 \leq G < 0.4$ | Moderate inequality |
| $G \geq 0.4$       | High inequality     |

:::info Info

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

**Wealth inequality** is much greater than income inequality. Wealth is more concentrated Because:

- Wealth is accumulated over a lifetime (and across generations) while income is measured annually
- Returns on wealth (interest, dividends, capital gains) generate more wealth
- Inheritance concentrates wealth in fewer hands

**Thomas Piketty (2014)**: if the rate of return on capital ($r$) exceeds the rate of economic
Growth ($g$), i.e., $r > g$Then wealth inequality will tend to increase over time. Historically,
$r \approx 4\mathrm{--}5\%$ while $g \approx 1\mathrm{--}2\%$Suggesting growing inequality.

### 2.3 Global Inequality

Global inequality (inequality between all individuals worldwide) has _declined_ since the 1980s,
Primarily due to rapid growth in China and India. However, inequality _within_ most countries has
Increased.

## 3. Poverty

### 3.1 Definitions

**Absolute poverty**: a condition where individuals cannot afford basic necessities (food, shelter,
Clothing). The World Bank defines extreme absolute poverty as living on less than $2.15 per day
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
Benefits and means-tested withdrawals are included.

$$\mathrm{EMTR} = \mathrm{income tax MTR} + \mathrm{NI MTR} + \mathrm{benefit withdrawal rate}$$

High EMTRs (poverty traps) occur when means-tested benefits are withdrawn as income rises, creating
Disincentives to work.

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
Earnings inequality among the employed.

### 4.4 Education and Training

Investment in human capital can reduce inequality by raising the productivity (and hence wages) of
Lower-skilled workers. However, if access to education is itself unequal, it may _reinforce_
Inequality.

## 5. The Equity-Efficiency Trade-Off

### 5.1 Okun's Leaky Bucket

Arthur Okun (1975) argued that redistributing income from the rich to the poor involves "leaky
Bucket" losses:

1. **Administrative costs**: collecting taxes and distributing benefits requires bureaucracy
2. **Disincentive effects**: high taxes may reduce work effort, saving, and investment
3. **Behavioural responses**: tax avoidance and evasion
4. **Deadweight loss**: distortionary taxes create inefficiency

The key insight: there is a trade-off between equity (fairness) and efficiency (maximising total
Output). More redistribution $\Rightarrow$ less total income to redistribute.

### 5.2 The Laffer Curve

The **Laffer curve** illustrates the relationship between the tax rate and tax revenue:

$$T = t \times Y(t)$$

Where $t$ is the tax rate and $Y(t)$ is the tax base (income), which declines as $t$ increases (due
To disincentive effects). At $t = 0$, $T = 0$. At $t = 1$ (100% tax), $T = 0$ (no one works). There
Exists some $t^* \in (0, 1)$ that maximises revenue.

:::warning Common Pitfall The Laffer curve is a theoretical concept — there is no consensus on where
$t^*$ lies. Most empirical estimates for developed economies suggest that income tax rates are below
The revenue-maximising rate, meaning tax cuts would _reduce_ revenue.
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
Reduce inequality?), efficiency (does it create disincentives?), equity (is it fair?), fiscal cost
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
Coefficient, including calculations. Edexcel emphasises poverty measures and government policy. CIE
Covers inequality in the context of development economics. OCR (A) links distribution to market
Failure and government intervention.
:::

## 7. Formal Derivations

### 7.1 Derivation of the Gini Coefficient from the Lorenz Curve

Let $L(p)$ be the Lorenz function, mapping the cumulative population proportion $p \in [0,1]$ to the
Cumulative income proportion. The line of perfect equality is $L(p) = p$.

The area between the line of equality and the Lorenz curve is:

$$A = \int_0^1 [p - L(p)]\,dp$$

The area under the Lorenz curve is:

$$B = \int_0^1 L(p)\,dp$$

Since $A + B = \frac{1}{2}$ (the area under the 45° line), the Gini coefficient is:

$$G = \frac{A}{A + B} = 2A = 1 - 2B$$

Substituting the integral form of $B$:

$$\boxed{G = 1 - 2\int_0^1 L(p)\,dp}$$

_Verification for discrete data._ Given cumulative shares $L_k$ at population proportions
$p_k = k/n$The trapezoidal approximation gives
$B = \sum_{k=1}^{n} \frac{(L_{k-1} + L_k)(p_k - p_{k-1})}{2}$Which is the formula used in Practice.
For perfect equality ($L(p) = p$): $B = \int_0^1 p\,dp = \frac{1}{2}$So $G = 0$. For Maximum
inequality ($L(p) = 0$ for $p < 1$, $L(1) = 1$): $B = 0$So $G = 1$.

### 7.2 Derivation of Lorenz Curve Properties

**Proposition:** The Lorenz curve $L(p)$ satisfies: (i) $L(0) = 0$(ii) $L(1) = 1$(iii)
$L'(p) \geq 0$ (monotonically non-decreasing), and (iv) $L(p) \leq p$ (convexity to the 45° line).

_Proof._

(i) With 0% of the population, cumulative income is 0%: $L(0) = 0$.

(ii) With 100% of the population, all income is accounted for: $L(1) = 1$.

(iii) Let $f(y)$ be the income density function and $F(y)$ the cumulative distribution function.
Define $p = F(y)$ (the population proportion earning up to income $y$). Then:

$$L(p) = \frac◆LB◆1◆RB◆◆LB◆\mu◆RB◆\int_0^y t \cdot f(t)\,dt$$

Where $\mu$ is mean income. Differentiating with respect to $p$ using $dp = f(y)\,dy$:

$$L'(p) = \frac{dL}{dp} = \frac{dL/dy}{dp/dy} = \frac◆LB◆y \cdot f(y)◆RB◆◆LB◆f(y)◆RB◆ = y \geq 0$$

Since income $y \geq 0$The Lorenz curve is monotonically non-decreasing. $\blacksquare$

(iv) From (iii), $L'(p) = y \leq \mu$ for the bottom $p$ proportion (since the poorest individuals
Earn less than or equal to the mean). Therefore $\frac{dL}{dp} \leq \frac{dp}{dp} = 1$Which Implies
$L(p) \leq p$ by integration from 0. Equality holds only under perfect equality. $\blacksquare$

$$\boxed{L(0) = 0, \quad L(1) = 1, \quad L'(p) = y(p) \geq 0, \quad L(p) \leq p}$$

## 8. Problem Set

**Problem 1.** A country has income quintile shares: bottom 20% = 5%, second 20% = 10%, third 20% =
15%, fourth 20% = 25%, top 20% = 45%. Calculate the Gini coefficient using the trapezoidal rule.

<details>
<summary>Hint</summary>
Cumulative shares: (0.2, 0.05), (0.4, 0.15), (0.6, 0.30), (0.8, 0.55), (1.0, 1.0). Using trapezoidal rule: $B = 0.2 \times \frac{0 + 0.05}{2} + 0.2 \times \frac{0.05 + 0.15}{2} + 0.2 \times \frac{0.15 + 0.30}{2} + 0.2 \times \frac{0.30 + 0.55}{2} + 0.2 \times \frac{0.55 + 1.0}{2} = 0.2 \times (0.025 + 0.10 + 0.225 + 0.425 + 0.775) = 0.2 \times 1.55 = 0.31$. $G = 1 - 2(0.31) = 0.38$.
</details>

**Problem 2.** A flat tax of 20% is proposed to replace the current progressive system. Explain why
A flat tax is regressive when measured against _spending_ rather than income, even though it is
Proportional against income.

<details>
<summary>Hint</summary>
Low-income households spend a larger proportion of their income (sometimes more than 100% — dissaving) than high-income households. A flat tax on income is proportional against income. But low-income households spend nearly all income, while high-income households save a large fraction. If measured against *spending*, the effective tax rate on spending is: for low-income households, $\approx 20\%$ of all spending; for high-income households, the tax as a fraction of spending is lower because much income is saved, not spent. Actually, a flat income tax is proportional by definition. The regressivity argument applies to *consumption taxes* (VAT), not flat income taxes. Clarify the distinction.
</details>

**Problem 3.** The median household income in a country is £30,000. The relative poverty line is 60%
Of median income. A household has income of £16,000. Is this household in relative poverty? If the
Median income rises to £35,000 but the household's income stays at £16,000, what happens?

<details>
<summary>Hint</summary>
Poverty line = $0.6 \times 30\,000 = £18\,000$. The household at £16,000 is in relative poverty. If median rises to £35,000: new poverty line = £21,000. The household is still in relative poverty and has fallen *further* below the line (from £2,000 below to £5,000 below). This illustrates a limitation of relative poverty: people can become "poorer" in relative terms even if their absolute income hasn't changed.
</details>

**Problem 4.** A worker earns £40,000 and faces income tax at 20% and National Insurance at 12%. She
Also receives Universal Credit of £5,000, which is withdrawn at a rate of 55p for every extra £1
Earned. Calculate her effective marginal tax rate. How much does she keep from an extra £1,000
Earned?

<details>
<summary>Hint</summary>
EMTR = 20% (income tax) + 12% (NI) + 55% (benefit withdrawal) = 87%. From an extra £1,000: she pays £200 tax + £120 NI = £320. Her UC falls by £550. Net gain = £1,000 - £320 - £550 = £130. She keeps only 13% of additional earnings. This is a severe poverty trap.
</details>

**Problem 5.** Using Piketty's framework ($r > g$), explain why wealth inequality tends to increase
Over time. Under what conditions might this trend be reversed?

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
Tools for reducing poverty.

<details>
<summary>Hint</summary>
Universal: advantages — no stigma, no poverty trap, universal coverage, simple to administer. Disadvantages — expensive (goes to those who don't need it), may require higher taxes. Means-tested: advantages — targeted, cheaper, can provide higher benefits to those most in need. Disadvantages — creates poverty traps (high EMTR), stigma, non-take-up (eligible people don't claim), administrative complexity.
</details>

**Problem 8.** A country has a Gini coefficient of 0.25 for income but 0.65 for wealth. Explain why
Wealth is more unequally distributed than income, and discuss the implications for social mobility.

<details>
<summary>Hint</summary>
Wealth is accumulated over lifetimes and generations; income is measured annually. Wealth generates returns ($r > g$), creating compounding effects. Inheritance concentrates wealth. Implications for social mobility: wealthy families can invest in education, health, networks, and housing for their children, giving them advantages regardless of individual talent. High wealth inequality reduces intergenerational mobility (the "Great Gatsby curve" — countries with higher inequality tend to have lower mobility).
</details>

**Problem 9.** Evaluate the argument that globalisation has increased inequality within developed
Countries.

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
Substantial inequality. The bottom half of the population earns only 22% of total income.

### 9.2 Comparing Two Lorenz Curves

If country A's Lorenz curve is everywhere closer to the 45-degree line than country B's, then
Country A has unambiguously lower inequality. If the curves cross, the comparison is ambiguous: one
Country may have less inequality at the bottom of the distribution but more at the top.

## 10. Gini Coefficient: Extended Calculation

### 10.1 Worked Example with Quintile Data

**Example.** Income quintile shares: bottom 20% = 6%, second 20% = 11%, third 20% = 16%, fourth 20%
= 23%, top 20% = 44%. Calculate the Gini coefficient.

**Answer.** Cumulative shares: $(0.2, 0.06)$$(0.4, 0.17)$$(0.6, 0.33)$$(0.8, 0.56)$ $(1.0, 1.0)$.

Using the trapezoidal rule for $B$ (area under the Lorenz curve):

$$B = 0.2 \times \frac{0 + 0.06}{2} + 0.2 \times \frac{0.06 + 0.17}{2} + 0.2 \times \frac{0.17 + 0.33}{2} + 0.2 \times \frac{0.33 + 0.56}{2} + 0.2 \times \frac{0.56 + 1.0}{2}$$

$$B = 0.2 \times (0.030 + 0.115 + 0.250 + 0.445 + 0.780) = 0.2 \times 1.620 = 0.324$$

$$G = 1 - 2B = 1 - 0.648 = 0.352$$

A Gini of $0.352$ indicates moderate inequality, comparable to the UK.

### 10.2 Effect of a Transfer on the Gini Coefficient

**Example.** Suppose the government transfers $£5\,000$ from a person in the top quintile to a
Person in the bottom quintile. The bottom quintile share rises from 6% to 7%, and the top quintile
Share falls from 44% to 43%. Recalculate $G$.

**Answer.** New cumulative shares: $(0.2, 0.07)$$(0.4, 0.18)$$(0.6, 0.34)$$(0.8, 0.57)$
$(1.0, 1.0)$.

$$B = 0.2 \times (0.035 + 0.125 + 0.260 + 0.455 + 0.785) = 0.2 \times 1.660 = 0.332$$

$$G = 1 - 2(0.332) = 0.336$$

The Gini coefficient falls from $0.352$ to $0.336$Confirming that progressive redistribution Reduces
measured inequality.

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
High that work does not significantly increase net income. When means-tested benefits are withdrawn
As earnings rise, the combined effect of income tax, National Insurance, and benefit withdrawal can
Create EMTRs exceeding 80%.

**Example.** A single parent earning $£15\,000$ receives $£8\,000$ in means-tested benefits. For
Every extra $£1$ earned:

- Income tax: 20% ($£0.20$)
- National Insurance: 12% ($£0.12$)
- Benefit withdrawal: 63% ($£0.63$)
- EMTR: 95%
- Net gain from extra $£1$: $£0.05$

This creates almost no financial incentive to increase working hours or seek higher-paid work.

### 12.2 Universal Credit and Taper Rates

Universal Credit (UK) uses a single taper rate of 55% (as of 2024), meaning benefits are withdrawn
At 55p for every extra $£1$ earned above the work allowance. This simplifies the system but still
Creates high EMTRs when combined with income tax and National Insurance.

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
Tax, through education, minimum wages, and competition policy) with **redistribution** (taxing and
Transferring after market incomes are determined). Over-reliance on either alone is less effective:

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
Coefficient. If a policy transfers income to equalise the bottom two quintiles (both at 6.5%), what
Is the new Gini?

<details>
<summary>Hint</summary>
Cumulative: (0.2, 0.04), (0.4, 0.13), (0.6, 0.28), (0.8, 0.52), (1.0, 1.0). $B = 0.2 \times (0.020 + 0.085 + 0.205 + 0.400 + 0.760) = 0.294$. $G = 1 - 0.588 = 0.412$. After transfer: cumulative becomes (0.2, 0.065), (0.4, 0.13), ... $B$ increases, $G$ decreases.
</details>

**Problem 2.** Explain why the Palma ratio may be a better measure of inequality than the Gini
Coefficient when comparing countries with similar middle-income shares but different extreme-income
Shares.

<details>
<summary>Hint</summary>
The Palma ratio (top 10% / bottom 40%) focuses on the tails of the distribution where inequality is most politically and economically salient. The Gini is equally sensitive to transfers at all points on the Lorenz curve. If two countries have the same middle 50% share but different tails, the Gini may be similar while the Palma ratio differs significantly, better capturing the difference in inequality that matters most for social cohesion.
</details>

**Problem 3.** A worker earns $£25\,000$ and faces income tax at 20%, National Insurance at 12%, And
has Universal Credit withdrawn at 55%. Calculate the EMTR. How much does she keep from an extra
$£200$ per month?

<details>
<summary>Hint</summary>
EMTR $= 20 + 12 + 55 = 87\%$. From $£200$: tax $= £40$NI $= £24$UC withdrawal $= £110$. Net gain $= 200 - 40 - 24 - 110 = £26$. She keeps 13%. This is a severe poverty trap.
</details>

**Problem 4.** "A universal basic income would eliminate poverty without creating disincentives to
Work." Evaluate this statement.

<details>
<summary>Hint</summary>
UBI eliminates the poverty trap (no means-testing, zero marginal withdrawal rate from benefits). It provides a guaranteed income floor, reducing absolute poverty. It simplifies administration and reduces stigma. However: (1) it is extremely expensive, requiring higher taxes which create their own disincentives; (2) a UBI large enough to eliminate poverty would require tax rates that may significantly discourage work and investment; (3) it may reduce the political will to fund targeted services (disability support, social housing); (4) some recipients may reduce labour supply. The net effect on work incentives is ambiguous: the income effect reduces work (people need to work less) but the substitution effect increases work (the marginal tax rate on earnings is lower than under means-tested systems).
</details>

**Problem 5.** Using Piketty's framework ($r > g$), explain why wealth inequality has increased in
Most developed economies since the 1980s. Discuss two policy responses and their potential
Effectiveness.

<details>
<summary>Hint</summary>
Since the 1980s, $r$ (return on capital: 4-6%) has consistently exceeded $g$ (economic growth: 1-3%) in developed economies. This means capital income grows faster than labour income, concentrating wealth among capital owners. Contributing factors: financial deregulation (increasing $r$), tax cuts on capital gains and inheritance (reducing the effective tax on $r$), slower productivity growth (reducing $g$). Policy responses: (1) Wealth tax: directly taxes accumulated capital, but faces valuation challenges and capital flight. Effective if well-designed and internationally coordinated. (2) Inheritance tax: prevents intergenerational concentration, but is avoided through trusts and gifts. (3) Progressive capital gains tax: aligns tax rates on capital income with labour income, reducing the $r - g$ gap. Most administratively feasible option.
</details>

## 16. Advanced Topics in Inequality

### 16.1 The Palma Ratio and the S90/S10 Ratio

While the Gini coefficient is the most widely used inequality measure, it has important limitations
that make complementary measures valuable.

**The Palma ratio** is defined as:

$$\text{Palma} = \frac{S_{90}}{S_{40}}$$

Where $S_{90}$ is the income share of the top 10% and $S_{40}$ is the income share of the bottom
40%. The rationale is that the "middle" 50% of the income distribution (between the 40th and 90th
percentiles) is relatively stable across countries and over time, at approximately 50% of total
income. Therefore, changes in overall inequality are driven almost entirely by changes at the tails.

**Worked example.** Country A has a top 10% share of 45% and a bottom 40% share of 10%. Country B
has a top 10% share of 25% and a bottom 40% share of 18%.

Palma(A) $= 45/10 = 4.5$. Palma(B) $= 25/18 = 1.39$.

Country A has dramatically higher inequality, concentrated at the top and bottom. The Gini
coefficient might not capture this distinction as .

**The S90/S10 ratio** compares the income at the 90th percentile to the income at the 10th
percentile. In the UK (2023), this ratio is approximately 5.5, meaning someone at the 90th
percentile earns 5.5 times more than someone at the 10th percentile.

### 16.2 Kuznets Hypothesis

Simon Kuznets (1955) hypothesised an inverted-U relationship between inequality and economic
development:

$$G = f(g_Y), \quad f'(g_Y) > 0 \text{ for low } g_Y, \quad f'(g_Y) < 0 \text{ for high } g_Y$$

The argument: early industrialisation draws labour from agriculture to industry, increasing
inequality (industrial wages are more dispersed than agricultural incomes). Later, mass education,
progressive taxation, and social welfare reduce inequality.

**Evidence:**

- Supporting: the historical experience of the UK and US (19th century: rising inequality; 20th
  century: declining inequality until the 1970s).
- Contradicting: many developing countries have seen inequality rise continuously alongside growth
  (China, India since the 1980s). Some developed countries have seen inequality rise since 1980
  despite being at high income levels (the "great U-turn").

**Evaluation:** The Kuznets hypothesis is not a law. It describes a historical correlation, not a
causal mechanism. Inequality trends depend on policy choices (taxation, education, labour market
institutions), technology, and globalisation, not just the level of income.

### 16.3 Intergenerational Mobility and the Great Gatsby Curve

**Intergenerational income elasticity (IGE)** measures the correlation between parents' and
children's incomes:

$$\text{IGE} = \frac◆LB◆\partial \ln(Y_{child})◆RB◆◆LB◆\partial \ln(Y_{parent})◆RB◆$$

If IGE $= 0.5$A 10% increase in parental income is associated with a 5% increase in the child's
income. Higher IGE means less mobility.

The **Great Gatsby Curve** plots IGE against the Gini coefficient across countries. The positive
correlation suggests that more unequal countries have less intergenerational mobility. Countries
like Denmark (low Gini, low IGE) achieve both equality and mobility; countries like the US (high
Gini, high IGE) achieve neither.

### 16.4 Tax-Benefit Models and the EMTR Schedule

**Worked example: constructing an EMTR schedule.**

Consider a single parent with one child, working part-time. The following applies:

| Income range        | Income tax | NI (12%) | UC taper (55%) | Total EMTR |
| ------------------- | ---------- | -------- | -------------- | ---------- |
| GBP 0 - 5,000       | 0%         | 0%       | 55%            | 55%        |
| GBP 5,001 - 12,570  | 20%        | 12%      | 55%            | 87%        |
| GBP 12,571 - 50,270 | 20%        | 12%      | 55%            | 87%        |
| GBP 50,271+         | 40%        | 2%       | 0%             | 42%        |

The EMTR peaks at 87% over a wide income range, creating a severe poverty trap. This worker would
need a wage increase of approximately GBP 7.70 per hour just to gain GBP 1 per hour in net income.

**Policy solution: universal basic income (UBI).** If UC were replaced by a UBI of GBP 5,000 per
year (non-means-tested), the EMTR would be:

| Income range        | Income tax | NI  | EMTR |
| ------------------- | ---------- | --- | ---- |
| GBP 0 - 5,000       | 0%         | 0%  | 0%   |
| GBP 5,001 - 12,570  | 20%        | 12% | 32%  |
| GBP 12,571 - 50,270 | 20%        | 12% | 32%  |
| GBP 50,271+         | 40%        | 2%  | 42%  |

The UBI eliminates the poverty trap entirely. However, the fiscal cost is enormous: GBP 5,000 per
adult $\times$ 53 million adults $=$ GBP 265 billion per year (approximately 12% of GDP).

## 17. Exam-Style Questions with Full Mark Schemes

**Question 1 (25 marks).** "The most effective way to reduce income inequality in the UK is through
progressive taxation rather than investment in education." Evaluate this statement.

<details>
<summary>Full Mark Scheme</summary>
**Analysis of progressive taxation:**
- Directly redistributes income from high earners to low earners through the tax and benefit system.
- The UK's progressive income tax (0% to 45%) and means-tested benefits (Universal Credit) reduce post-tax inequality.
- Can be implemented quickly (annual budget changes).
- Mathematical: if the top 1% earns 14% of pre-tax income and pays an effective 35% tax rate, progressive taxation significantly reduces the post-tax Gini.
- Laffer curve concerns: very high rates may discourage work and investment, reducing the tax base.

**Analysis of education investment:**

- Addresses the ROOT CAUSE of inequality (productivity differences) rather than the symptom (income
  differences).
- Raises the human capital of low-income individuals, increasing their earning potential
  permanently.
- Promotes intergenerational mobility: children from poor backgrounds gain access to the skills
  needed for high-paying jobs.
- Takes 15-20 years to fully affect the income distribution (education $\to$ productivity $\to$
  wages).
- May increase inequality in the short run if access to education is itself unequal (better-off
  families benefit more from subsidised university).

**Evaluation:**

- Progressive taxation provides immediate relief but may create disincentives. Education investment
  addresses causes but takes decades.
- The two policies are complementary, not substitutes. Optimal: use taxation to fund education.
- The Nordic model combines high progressive taxation with free universal education and healthcare,
  achieving both low inequality and high mobility.
- However, the Nordic model requires high tax compliance, social trust, and cultural acceptance of
  redistribution -- not transferable.
- Globalisation limits the effectiveness of progressive taxation (mobile capital and high earners
  can relocate).
- Conclusion: a balanced approach using both is superior to relying on either alone.

**Mark allocation:** Analysis (10 marks), Evaluation (10 marks), Structure and Quality of Language
(5 marks).

</details>

**Question 2 (12 marks).** A country has income quintile shares of 3%, 8%, 14%, 23%, and 52%. (a)
Calculate the Gini coefficient. (b) Calculate the Palma ratio. (c) Evaluate whether this country
should prioritise income redistribution or economic growth.

<details>
<summary>Full Mark Scheme</summary>
**(a) Gini coefficient (5 marks).**
Cumulative shares: (0.2, 0.03), (0.4, 0.11), (0.6, 0.25), (0.8, 0.48), (1.0, 1.0).
$B = 0.2 \times \frac{0 + 0.03}{2} + 0.2 \times \frac{0.03 + 0.11}{2} + 0.2 \times \frac{0.11 + 0.25}{2} + 0.2 \times \frac{0.25 + 0.48}{2} + 0.2 \times \frac{0.48 + 1.0}{2}$
$= 0.2 \times (0.015 + 0.070 + 0.180 + 0.365 + 0.740) = 0.2 \times 1.370 = 0.274$.
$G = 1 - 2(0.274) = 1 - 0.548 = 0.452$. (3 marks for method, 1 mark for calculation, 1 mark for interpretation.)

**(b) Palma ratio (3 marks).** Bottom 40% share $= 3\% + 8\% = 11\%$. Top 10% share $= 52\% - 42\%$
(approximate: top quintile is 52%, top 10% is roughly 30-35%). Palma $\approx 30/11 \approx 2.7$. (3
marks: 1 for identifying shares, 1 for calculation, 1 for interpretation.)

**(c) Evaluation (4 marks).** A Gini of 0.452 indicates high inequality. Redistribution would
improve welfare in the short run and promote social stability. However, if the country is
developing, growth may be the priority to lift the poorest out of absolute poverty. The key is
whether growth is inclusive (pro-poor) or concentrated among the wealthy. Best answer: pursue growth
with redistribution -- progressive taxation to fund education and healthcare, creating a virtuous
cycle of human capital development and inclusive growth.

</details>

**Question 3 (25 marks).** "A universal basic income would eliminate poverty in the UK without
creating disincentives to work." Evaluate this statement.

<details>
<summary>Full Mark Scheme</summary>
**Arguments that UBI eliminates poverty:**
- Provides a guaranteed income floor. If set at GBP 10,000 per year for all adults, it would lift most households above the relative poverty line (60% of median income).
- Eliminates the poverty trap: no means-testing, zero marginal withdrawal rate from benefits. Every pound earned is kept (minus tax).
- Simplifies administration: replaces complex means-tested system (Universal Credit, housing benefit, JSA) with a single payment.
- Reduces stigma: everyone receives it, so there is no "welfare" label.
- Reduces insecurity: provides a buffer against job loss, illness, and care responsibilities.

**Arguments that UBI creates disincentives to work:**

- Income effect: with a guaranteed income, some people reduce labour supply (choose more leisure).
- If funded by higher income tax, the substitution effect discourages work (lower net wage).
- If funded by higher VAT (regressive), the burden falls disproportionately on low-income
  households.
- The net effect on labour supply is theoretically ambiguous but empirically, pilot studies
  (Finland, 2017-18; Stockton, California, 2021) suggest modest reductions in working hours (5-10%)
  but no large-scale withdrawal from the labour market.

**Arguments that UBI does NOT eliminate poverty:**

- A UBI large enough to eliminate poverty would be extremely expensive. GBP 10,000 per adult
  $\times$ 53 million adults $=$ GBP 530 billion (approximately 25% of GDP).
- This would require tax increases that may be politically impossible and economically damaging.
- A smaller UBI (e.g., GBP 4,000) would not lift people above the poverty line and would require
  maintaining some means-tested top-ups, negating the simplicity advantage.
- Housing costs vary enormously across the UK; a flat UBI does not account for regional cost
  differences.

**Evaluation:**

- The statement overstates both the poverty reduction potential and the work incentive effects.
- A moderate UBI combined with existing services (NHS, education) could significantly reduce poverty
  without large work disincentives.
- The funding mechanism matters enormously: income tax funding is progressive; consumption tax
  funding is regressive.
- Alternative: a negative income tax (NIT) achieves the same poverty reduction at lower fiscal cost,
  since it phases out at higher incomes.
- Conclusion: UBI is a powerful idea that addresses real problems (poverty traps, complexity,
  insecurity) but the statement is misleading because a UBI large enough to eliminate poverty would
  require tax rates that create their own disincentives. A partial UBI or NIT is more feasible.

**Mark allocation:** Analysis (10 marks), Evaluation (10 marks), Structure (5 marks).

</details>

## 9. Extended Worked Examples

### 9.1 Gini Coefficient: Detailed Calculation from Raw Data

**Example.** A country has 5 income groups with the following data:

| Group      | Population share | Income share | Average income |
| ---------- | :--------------: | :----------: | :------------: |
| Bottom 20% |       20%        |      5%      |   GBP 10,000   |
| Second 20% |       20%        |     10%      |   GBP 20,000   |
| Third 20%  |       20%        |     15%      |   GBP 30,000   |
| Fourth 20% |       20%        |     25%      |   GBP 50,000   |
| Top 20%    |       20%        |     45%      |   GBP 90,000   |

**Cumulative shares for Lorenz curve:**

| Population % | Income % |
| :----------: | :------: |
|      0%      |    0%    |
|     20%      |    5%    |
|     40%      |   15%    |
|     60%      |   30%    |
|     80%      |   55%    |
|     100%     |   100%   |

**Gini coefficient (approximation using trapezoidal rule):**

Area under Lorenz curve:
$$A = \frac{1}{2}\left[(0.2)(0 + 0.05) + (0.2)(0.05 + 0.15) + (0.2)(0.15 + 0.30) + (0.2)(0.30 + 0.55) + (0.2)(0.55 + 1.0)\right]$$
$$A = 0.1[0.05 + 0.20 + 0.45 + 0.85 + 1.55] = 0.1 \times 3.10 = 0.310$$

$$G = 1 - 2A = 1 - 0.620 = 0.380$$

**Interpretation:** Gini = 0.38 indicates moderate inequality. For comparison: UK (0.35), USA
(0.41), Sweden (0.27), South Africa (0.63), Brazil (0.53).

### 9.2 Tax System Analysis: Effective Marginal Tax Rates

**Example.** A single parent with one child earns GBP 30,000 per year. The tax and benefit system:

| Component          | Rate/Amount    | Threshold                         |
| ------------------ | -------------- | --------------------------------- |
| Income tax         | 20%            | GBP 12,570 personal allowance     |
| National Insurance | 12%            | GBP 12,570                        |
| Universal Credit   | 55% taper rate | GBP 0 (withdrawn as income rises) |
| Child benefit      | GBP 24/week    | Withdrawn above GBP 50,000        |

**Take-home pay calculation:**

Taxable income: $30\,000 - 12\,570 = 17\,430$. Income tax: $0.20 \times 17\,430 = 3\,486$. National
Insurance: $0.12 \times 17\,430 = 2\,092$.

Universal Credit: The work allowance for a single parent is GBP 837/month. After the allowance, UC
is withdrawn at 55%. Annual work allowance: $837 \times 12 = 10\,044$. UC assessment:
$30\,000 - 10\,044 = 19\,956$. UC withdrawal: $0.55 \times 19\,956 = 10\,976$. Maximum UC
entitlement (approximate): GBP 13,000/year. Actual UC received: $13\,000 - 10\,976 = 2\,024$.

Child benefit: $24 \times 52 = 1\,248$. Not withdrawn (income below 50,000).

**Net income:** $30\,000 - 3\,486 - 2\,092 + 2\,024 + 1\,248 = 27\,694$.

**Effective marginal tax rate on an additional GBP 1,000 of earnings:**

Additional income tax: $0.20 \times 1\,000 = 200$. Additional NI: $0.12 \times 1\,000 = 120$. UC
withdrawal: $0.55 \times 1\,000 = 550$. Total deduction: 870.

**EMTR = 87%.** For every additional pound earned, the parent keeps only 13 pence.

**Poverty trap analysis:** At this EMTR, there is almost no financial incentive to increase working
hours or seek promotion. The interaction between the tax system and means-tested benefits creates a
very high EMTR. This is a strong argument for a Universal Basic Income (which has a zero taper rate)
or a negative income tax (which has a single, lower taper rate).

### 9.3 Wealth Inequality vs Income Inequality

**Example.** Comparing the distribution of income and wealth in the UK.

**Income distribution (2023, approximate):**

|   Decile    | Share of total income | Cumulative |
| :---------: | :-------------------: | :--------: |
| Bottom 10%  |          2%           |     2%     |
| Bottom 20%  |          5%           |     5%     |
| Bottom 30%  |          9%           |     9%     |
| Bottom 40%  |          14%          |    14%     |
| Bottom 50%  |          20%          |    20%     |
| Bottom 60%  |          27%          |    27%     |
| Bottom 70%  |          35%          |    35%     |
| Bottom 80%  |          44%          |    44%     |
| Bottom 90%  |          56%          |    56%     |
| Bottom 100% |         100%          |    100%    |

**Wealth distribution (2023, approximate):**

|   Decile    | Share of total wealth | Cumulative |
| :---------: | :-------------------: | :--------: |
| Bottom 10%  |         0.1%          |    0.1%    |
| Bottom 20%  |         0.5%          |    0.6%    |
| Bottom 30%  |         1.5%          |    2.1%    |
| Bottom 40%  |          3%           |    5.1%    |
| Bottom 50%  |          5%           |   10.1%    |
| Bottom 60%  |          9%           |   19.1%    |
| Bottom 70%  |          14%          |   33.1%    |
| Bottom 80%  |          21%          |   54.1%    |
| Bottom 90%  |          33%          |   87.1%    |
| Bottom 100% |         100%          |    100%    |

**Gini for income:** approximately 0.36. **Gini for wealth:** approximately 0.74.

**Key observations:**

- The top 10% hold 12.9% of wealth but earn only 44% of income (this is wrong, let me correct: top
  10% hold $100 - 87.1 = 12.9\%$ of wealth). Actually the top decile holds $100 - 87.1 = 12.9\%$.
  Let me reconsider the data. The top 10% hold approximately 45% of wealth in the UK.

The wealth distribution is far more unequal than the income distribution. The bottom 50% own only
10.1% of wealth but earn 20% of income. The top 10% own approximately 45% of wealth but earn
approximately 30% of income.

**Why is wealth more unequally distributed?**

- Wealth accumulates over time through saving and investment (compound interest amplifies small
  initial differences).
- Inheritance: wealth is passed across generations, perpetuating inequality.
- Housing: property is the main asset of the middle class. Those who bought houses before the 1990s
  have seen massive capital gains that younger generations cannot replicate.
- Financial assets (stocks, bonds) are concentrated among the wealthy, and these assets have
  appreciated faster than wages.

### 9.4 The Palma Ratio: Calculation and Interpretation

**Example.** Using the income data from section 9.1:

Income share of the top 10% = 44%. Income share of the bottom 40% = 14%.

**Palma ratio $= 44 / 14 = 3.14$.**

**Interpretation:** The top 10% earns 3.14 times the income of the bottom 40%. This is above the UK
average (approximately 2.5) but below the global average (approximately 4.0).

**Why the Palma ratio is useful:**

- The "middle 50%" (between the 40th and 90th percentiles) has a relatively stable income share
  across countries and over time (approximately 50% of total income). This means changes in overall
  inequality are driven almost entirely by the top 10% vs the bottom 40%.
- The Gini coefficient is sensitive to changes in the middle of the distribution, which may not be
  the most policy-relevant comparison.
- The Palma ratio focuses attention on the extremes, where the most significant inequality exists.

**Comparison across countries:**

| Country      | Palma Ratio | Gini |
| ------------ | :---------: | :--: |
| Sweden       |     1.1     | 0.27 |
| Germany      |     1.8     | 0.31 |
| UK           |     2.5     | 0.35 |
| USA          |     3.5     | 0.41 |
| Brazil       |     5.5     | 0.53 |
| South Africa |     7.1     | 0.63 |

### 9.5 Poverty Measurement: Absolute vs Relative

**Example.** A country has 60 million people with the following equivalised disposable income
distribution:

| Income bracket    | Population | Average income |
| ----------------- | :--------: | :------------: |
| Below GBP 5,000   | 3 million  |   GBP 3,500    |
| GBP 5,000-10,000  | 6 million  |   GBP 7,500    |
| GBP 10,000-20,000 | 12 million |   GBP 15,000   |
| GBP 20,000-30,000 | 15 million |   GBP 25,000   |
| GBP 30,000-50,000 | 15 million |   GBP 40,000   |
| Above GBP 50,000  | 9 million  |   GBP 70,000   |

Median income: the 30th-31st millionth person falls in the GBP 20,000-30,000 bracket. Assuming
uniform distribution within brackets: median
$\approx 25\,000 + \frac{6}{15} \times 10\,000 = 29\,000$.

**Relative poverty (60% of median):** $0.60 \times 29\,000 = 17\,400$. Below GBP 17,400: 3 + 6 +
fraction of the 12 million in GBP 10,000-20,000. $12 \times (17\,400 - 10\,000) / 10\,000 = 8.88$
million. Total below relative poverty line: $3 + 6 + 8.88 = 17.88$ million. Relative poverty rate:
$17.88 / 60 = 29.8\%$.

**Absolute poverty (GBP 10,000):** Below GBP 10,000: $3 + 6 = 9$ million. Absolute poverty rate:
$9 / 60 = 15\%$.

**Severe poverty (50% of median):** $0.50 \times 29\,000 = 14\,500$.
$3 + 6 + 12 \times (14\,500 - 10\,000)/10\,000 = 3 + 6 + 5.4 = 14.4$ million. Severe poverty rate:
$14.4 / 60 = 24\%$.

**The AHC (after housing costs) adjustment:** If housing costs average GBP 8,000 per household: AHC
income = income - 8,000. New median AHC income $\approx 21\,000$. New relative poverty line:
$0.60 \times 21\,000 = 12\,600$. AHC poverty rate is higher than BHC because housing costs reduce
disposable income, pushing more people below the poverty threshold. The AHC poverty rate is the more
commonly cited measure in UK poverty statistics.

## 10. Extended Worked Examples

### 10.1 The Kuznets Curve: Testing with Cross-Country Data

**Example.** Does economic development initially increase and then decrease inequality (Kuznets
hypothesis)?

**Hypothetical data:**

| Country | GDP per capita (USD) | Gini coefficient |
| ------- | :------------------: | :--------------: |
| Malawi  |         500          |       0.39       |
| Nepal   |        1,200         |       0.42       |
| India   |        2,500         |       0.35       |
| China   |        12,000        |       0.38       |
| Brazil  |        9,000         |       0.53       |
| Mexico  |        10,000        |       0.45       |
| UK      |        42,000        |       0.35       |
| USA     |        63,000        |       0.41       |
| Sweden  |        56,000        |       0.27       |

**Plotting Gini against GDP per capita:** the relationship is NOT an inverted-U as Kuznets
predicted. Brazil (middle income) has a much higher Gini than both low-income (Malawi) and
high-income (Sweden) countries. The relationship is better described as a "scatter" with no clear
pattern.

**Why Kuznets' hypothesis fails:**

1. Kuznets based his analysis on a small sample of countries (mainly Western Europe and the US in
   the mid-20th century). The pattern he observed was specific to those countries' historical
   experience (industrialisation creating an urban-rural divide).
2. Institutional factors matter more than the stage of development. Sweden (high income, low
   inequality) has strong labour unions, progressive taxation, and generous welfare. Brazil (middle
   income, high inequality) has weak institutions and high land concentration.
3. Globalisation has created new forces that Kuznets did not anticipate: technology has increased
   the skill premium, raising inequality in developed countries (the US Gini has risen from 0.35 in
   1970 to 0.41 today).
4. The Great Gatsby Curve shows that inequality is persistent across generations within countries,
   regardless of income level.

**The modern view:** inequality is determined by institutions (tax policy, education access, labour
market regulation, social protection), not by the stage of economic development. Countries can
choose to be both rich and equal (Nordic model) or rich and unequal (US model). Development does not
automatically reduce inequality.

### 10.2 Wealth Tax: Feasibility and Revenue Potential

**Example.** The UK government considers a 1% annual wealth tax on net wealth above GBP 2 million.

**UK wealth distribution (approximate):**

| Wealth band   | Number of households | Total wealth | Taxable wealth (above 2m) |
| ------------- | :------------------: | :----------: | :-----------------------: |
| GBP 0-500k    |      22 million      | GBP 6,600bn  |             0             |
| GBP 500k-1m   |      7 million       | GBP 5,250bn  |             0             |
| GBP 1m-2m     |      3 million       | GBP 4,500bn  |             0             |
| GBP 2m-5m     |     1.5 million      | GBP 5,250bn  |        GBP 3,000bn        |
| GBP 5m-10m    |       400,000        | GBP 3,000bn  |        GBP 2,800bn        |
| GBP 10m-50m   |       100,000        | GBP 2,000bn  |        GBP 1,980bn        |
| Above GBP 50m |        5,000         |  GBP 750bn   |         GBP 745bn         |

**Revenue calculation (1% on wealth above 2m):**

| Wealth band | Taxable wealth | Tax revenue (1%) |
| ----------- | :------------: | :--------------: |
| GBP 2m-5m   |    3,000bn     |       30bn       |
| GBP 5m-10m  |    2,800bn     |       28bn       |
| GBP 10m-50m |    1,980bn     |      19.8bn      |
| Above 50m   |     745bn      |      7.45bn      |
| **Total**   |  **8,525bn**   | **GBP 85.25bn**  |

**Gross revenue: GBP 85.25 billion per year** (approximately 3.5% of GDP). This is substantial --
enough to fund the NHS for 8 months.

**Behavioural responses (reducing actual revenue):**

1. **Asset valuation avoidance:** wealth is harder to measure than income. Valuing private
   businesses, art, jewellery, and pension assets is contentious. Estimated avoidance: 10-20% of
   taxable wealth.
2. **Capital flight:** wealthy individuals may relocate to lower-tax jurisdictions. The UK has
   already seen an exodus of ultra-high-net-worth individuals since the non-dom regime was
   tightened. Estimated revenue loss: 5-15%.
3. **Asset restructuring:** individuals may shift wealth into exempt assets (primary residence,
   pensions, agricultural land). Estimated revenue loss: 10-20%.
4. **Reduced saving and investment:** a 1% annual wealth tax is equivalent to a 1% increase in the
   cost of capital. This may reduce investment, lowering long-run growth. Estimated deadweight loss:
   0.1-0.3% of GDP per year.

**Net revenue estimate:** GBP 85.25bn x (1 - 0.25 avoidance - 0.10 flight - 0.15 restructuring) =
GBP 85.25bn x 0.50 = GBP 42.6bn.

**Net revenue after administration costs:** Administration (valuation, collection, enforcement):
approximately 5-10% of revenue. Net: GBP 38-40bn.

**Comparison with alternatives:**

- Inheritance tax reform (closing loopholes): estimated additional revenue GBP 5-10bn.
- CGT alignment with income tax: estimated additional revenue GBP 10-15bn.
- Council tax reform (revaluing properties): estimated additional revenue GBP 10-15bn.
- Wealth tax: GBP 38-40bn.

**Evaluation:** A wealth tax could raise significant revenue (GBP 38-40bn) but faces practical
challenges (valuation, avoidance, capital flight). The administrative costs and behavioural
responses reduce the effective revenue by approximately 50%. A combination of smaller reforms (CGT
alignment, inheritance tax reform, council tax reform) could raise GBP 25-40bn at lower
administrative cost and with less economic distortion.

### 10.3 Universal Basic Income: Comprehensive Costing

**Example.** The UK government considers a UBI of GBP 400/month for all adults (18+). Population: 53
million adults.

**Cost calculation:**

- Gross cost: $400 \times 12 \times 53\,000\,000 = \text{GBP } 254.4\text{bn}$ (approximately 10.4%
  of GDP).

**Offset by abolishing existing benefits:**

- Universal Credit: GBP 50bn (but UC is means-tested; abolishing it means some households lose more
  than they gain from UBI).
- State Pension: GBP 110bn (should the UBI replace the state pension? This is politically
  sensitive).
- Jobseeker's Allowance, ESA, Income Support: GBP 15bn.
- Child Benefit: GBP 12bn.
- Total existing spending replaced: GBP 187bn (if pension is included) or GBP 77bn (if pension is
  retained).

**Net fiscal cost:**

- With pension replacement: $254.4 - 187 = \text{GBP } 67.4\text{bn}$.
- Without pension replacement: $254.4 - 77 = \text{GBP } 177.4\text{bn}$.

**Funding options:**

1. Income tax increase: to raise GBP 177bn, the basic rate would need to rise from 20% to
   approximately 35% (a 15 percentage point increase). This would significantly reduce work
   incentives.

2. VAT increase: to raise GBP 177bn, the standard rate would need to rise from 20% to approximately
   35%. This is regressive (VAT falls disproportionately on low-income households).

3. Wealth tax (from section 10.2): approximately GBP 40bn. Remaining gap: GBP 137bn.

4. Corporate tax increase: raising the rate from 25% to 35% might raise GBP 30-40bn (with
   behavioural responses). Remaining gap: GBP 97-107bn.

**Distributional impact:**

| Household type                | Current net income |        UBI net income        | Change |
| ----------------------------- | :----------------: | :--------------------------: | :----: |
| Single, no work, no benefits  |         0          |            4,800             | +4,800 |
| Single, GBP 20k salary        |       16,500       |   14,800 (after tax rise)    | -1,700 |
| Couple, 2 children, GBP 60k   |       42,000       |   38,400 (after tax rise)    | -3,600 |
| Couple, 2 children, GBP 30k   |       24,000       |   26,400 (after tax rise)    | +2,400 |
| Pensioner, state pension only |       11,500       | 11,500 (if pension retained) |   0    |

**Key findings:**

- The UBI is highly progressive for the poorest (who currently receive no benefits).
- Middle-income working households LOSE because the tax increase exceeds the UBI.
- The "net cost" is lower than the gross cost, but still requires substantial tax increases.
- The work incentive effect depends on the marginal tax rate: if the UBI is funded by income tax,
  the EMTR rises for all workers, potentially reducing labour supply.

**Conclusion:** a UBI of GBP 400/month is fiscally feasible but requires tax increases that would
make many middle-income households worse off. A smaller UBI (GBP 100-200/month) combined with a
reformed means-tested system would be more affordable and less distortionary.

**International comparison:** Several countries have experimented with UBI-like programmes:

- Finland (2017-18): 2,000 unemployed people received EUR 560/month. Results: improved well-being
  and life satisfaction, but NO significant effect on employment. The experiment was too small and
  short to draw general conclusions.
- Alaska (permanent): the Alaska Permanent Fund pays all residents approximately USD 1,600-2,000 per
  year from oil revenues. This is a partial UBI funded by natural resource rents rather than
  taxation. Employment effects are minimal because the payment is too small to affect work
  incentives significantly.
- Kenya (GiveDirectly): unconditional cash transfers of USD 1,800 over 12 months to poor households.
  Results: increased consumption, improved nutrition and health, increased entrepreneurial activity,
  NO increase in spending on "temptation goods" (alcohol, tobacco). Strong evidence that cash
  transfers are effective in developing countries.
- Iran (2010): a universal cash transfer of approximately USD 40/month to all households, funded by
  oil revenue. The programme reduced poverty by 10 percentage points and inequality (Gini fell from
  0.44 to 0.38) before being eroded by inflation and fiscal pressure.

These experiments suggest that UBI is most effective in developing countries (where the cash
transfer represents a large share of income) and less transformative in developed countries (where
it is too small to replace existing welfare systems). The political economy challenge is that the
level of UBI needed to replace existing benefits in developed countries is fiscally very expensive.

## Summary

This topic covers the economic theories and principles related to distribution of income, including
key models, evidence, and policy implications.

**Key concepts include:**

- economic models and theories
- data analysis and interpretation
- policy evaluation
- real-world applications
- critical evaluation of economic arguments

The ability to apply these theories to real-world data and evaluate policy decisions is central to
success in this subject.

