---
title: Macroeconomic Performance
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: macroeconomic-performance
sidebar_position: 1
---

## 1. Gross Domestic Product (GDP)

### 1.1 Definition

We define **Gross Domestic Product (GDP)** as the total monetary value of all final goods and services produced within a country's borders during a given time period.

"Final" goods and services are those purchased for final consumption or investment — intermediate goods are excluded to avoid double counting.

### 1.2 Three Approaches to Measuring GDP

**Proposition: The output, income, and expenditure approaches to GDP yield the same result.**

**1. Output (production) approach:**

$$\text{GDP} = \sum \text{Gross Value Added} = \sum (Q_i \times P_i) - \sum \text{intermediate consumption}$$

**2. Income approach:**

$$\text{GDP} = W + R + i + \pi + D + T_{ind} - S$$

where $W$ = wages, $R$ = rent, $i$ = interest, $\pi$ = profit, $D$ = depreciation, $T_{ind}$ = indirect taxes minus subsidies.

**3. Expenditure approach:**

$$\text{GDP} = C + I + G + (X - M)$$

where $C$ = consumption, $I$ = investment, $G$ = government spending, $X$ = exports, $M$ = imports.

**Proof of equivalence (sketch).** Every pound spent on final output (expenditure) becomes income for someone (wages, profit, rent, interest). Every item of income corresponds to a factor's contribution to output. The identity $\text{output} \equiv \text{income} \equiv \text{expenditure}$ holds by accounting convention: inventories are treated as investment (if produced but unsold, counted as $I$), and taxes/subsidies adjust market prices to factor costs. $\blacksquare$

:::warning Common Pitfall
GDP counts _market transactions_. Unpaid work (household chores, volunteer work) is excluded. Illegal activities are also excluded (though some countries now include estimates of the shadow economy). This means GDP underestimates total economic activity, particularly in countries with large informal sectors.
:::

### 1.3 Real vs Nominal GDP

**Nominal GDP** is measured at current prices. **Real GDP** adjusts for price changes using a price index (GDP deflator):

$$\text{Real GDP} = \frac{\text{Nominal GDP}}{\text{GDP Deflator}} \times 100$$

$$\text{GDP Deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}} \times 100$$

**GDP growth rate:**

$$g = \frac{\text{GDP}_t - \text{GDP}_{t-1}}{\text{GDP}_{t-1}} \times 100\%$$

### 1.4 GDP Per Capita

$$\text{GDP per capita} = \frac{\text{GDP}}{\text{Population}}$$

GDP per capita is a better (though imperfect) measure of average living standards than total GDP.

### 1.5 Limitations of GDP as a Measure of Living Standards

1. **Does not measure well-being**: mental health, leisure time, environmental quality, political freedom
2. **Ignores income distribution**: high GDP per capita may coexist with extreme inequality
3. **Environmental costs**: GDP counts environmental degradation as positive output (e.g., oil spill cleanup adds to GDP)
4. **Unpaid work**: household production, childcare, volunteer work are excluded
5. **Quality improvements**: a £500 computer today is vastly more capable than a £500 computer in 2000
6. **Underground economy**: illegal and informal transactions are excluded
7. **Does not account for depletion of natural resources**

**Alternative measures**: Human Development Index (HDI), Genuine Progress Indicator (GPI), Gross National Happiness (GNH).

## 2. Inflation

### 2.1 Definition

We define **inflation** as a sustained increase in the general price level over time.

$$\text{Inflation rate} = \frac{P_t - P_{t-1}}{P_{t-1}} \times 100\%$$

**Deflation**: a sustained _decrease_ in the general price level ($\pi < 0$).
**Disinflation**: a _reduction_ in the rate of inflation (prices still rising, but more slowly).

### 2.2 Measuring Inflation

**Consumer Price Index (CPI)**: measures the change in the cost of a basket of goods and services representative of household consumption.

$$\text{CPI}_t = \frac{\sum_{i} P_{i,t} \cdot Q_{i,0}}{\sum_{i} P_{i,0} \cdot Q_{i,0}} \times 100$$

where $Q_{i,0}$ are base-period quantities (Laspeyres index).

**Retail Price Index (RPI)**: similar to CPI but includes housing costs (mortgage interest payments, council tax). RPI tends to give a higher inflation rate than CPI.

**Limitations of price indices:**

- **Substitution bias**: consumers substitute away from goods whose prices rise, but the basket is fixed
- **Quality bias**: improvements in quality are not fully captured (a price increase may reflect better quality)
- **New goods**: new products are slow to be included
- **Outlet bias**: consumers switch to cheaper retailers, but this may not be captured

:::info Board-Specific Note
CIE (9708) uses CPI. The UK government switched from RPI to CPI for most purposes in 2003. AQA and Edexcel may ask students to compare CPI and RPI.
:::

### 2.3 Causes of Inflation

**Demand-pull inflation**: caused by excess aggregate demand.

$$AD > \text{full employment output} \Rightarrow P \uparrow$$

When the economy is at or near full capacity, any further increase in AD cannot increase output (resources are fully employed) and instead bids up prices.

**Cost-push inflation**: caused by increases in costs of production.

$$\text{Costs } \uparrow \Rightarrow SRAS \text{ shifts left} \Rightarrow P \uparrow, Y \downarrow$$

Causes: rising wages (wage-price spiral), rising commodity prices (oil shocks), exchange rate depreciation (imported inflation), higher taxes.

### 2.4 Costs of Inflation

1. **Menu costs**: the cost of changing prices (reprinting menus, catalogues, reprogramming systems)
2. **Shoe-leather costs**: the cost of minimising the inflation tax by making more frequent transactions (holding less cash, visiting the bank more often)
3. **Uncertainty**: inflation creates uncertainty about future prices, discouraging long-term investment and contracts
4. **Redistribution**: unexpected inflation redistributes from lenders to borrowers (the real value of repayments falls) and from fixed-income earners to others
5. **Tax distortions**: if tax brackets are not indexed, fiscal drag pushes taxpayers into higher brackets
6. **International competitiveness**: higher inflation erodes export competitiveness unless the exchange rate depreciates
7. **Resource misallocation**: price signals are distorted, leading to inefficient allocation

**Costs of deflation** (often more severe):

1. **Debt deflation**: the real value of debt rises, causing defaults and financial crises (Fisher, 1933)
2. **Delayed consumption**: consumers defer purchases expecting lower prices $\Rightarrow$ AD falls further
3. **Wage rigidity**: nominal wages are sticky downward $\Rightarrow$ real wages rise $\Rightarrow$ unemployment rises
4. **Zero lower bound**: interest rates cannot fall below zero, limiting monetary policy response

## 3. Unemployment

### 3.1 Definition

The **unemployment rate** is:

$$u = \frac{\text{Number unemployed}}{\text{Labour force}} \times 100\% = \frac{U}{U + E} \times 100\%$$

where the **labour force** = employed + unemployed. The unemployed are those without work, actively seeking work, and available to start work.

**Economically inactive**: those not in the labour force (not seeking work: students, retirees, discouraged workers, homemakers).

### 3.2 Types of Unemployment

| Type           | Cause                                                       | Remedy                                                |
| -------------- | ----------------------------------------------------------- | ----------------------------------------------------- |
| **Cyclical**   | Insufficient aggregate demand ($Y < Y_{fe}$)                | Demand-side policy                                    |
| **Structural** | Mismatch between skills/location of workers and jobs        | Retraining, geographical mobility, supply-side policy |
| **Frictional** | Time taken to match workers with jobs (search, transitions) | Improve job information, reduce search costs          |
| **Seasonal**   | Regular seasonal patterns (agriculture, tourism)            | Limited scope for policy                              |
| **Real-wage**  | Wages above equilibrium (minimum wage, union power)         | Reduce wage rigidity                                  |

**Natural rate of unemployment (NAIRU)**: the rate of unemployment consistent with stable inflation — the sum of frictional and structural unemployment.

$$u^* = u_{frictional} + u_{structural}$$

When $u = u^*$, the economy is at full employment (no cyclical unemployment).

### 3.3 Costs of Unemployment

1. **Lost output**: the output gap $Y_{fe} - Y_{actual}$ represents goods and services that could have been produced
2. **Lost income**: unemployed workers lose wages, reducing their standard of living
3. **Fiscal cost**: government pays benefits and loses tax revenue $\Rightarrow$ budget deficit increases
4. **Hysteresis**: long-term unemployment erodes skills and employability, raising the natural rate
5. **Social costs**: crime, mental health problems, family breakdown, social exclusion

**Okun's Law**: for every 1% increase in the unemployment rate above the natural rate, GDP falls by approximately 2% below potential:

$$\frac{Y - Y^*}{Y^*} = -\beta(u - u^*)$$

where $\beta \approx 2$.

## 4. Balance of Payments

### 4.1 Structure

The **balance of payments (BoP)** records all transactions between residents of a country and the rest of the world.

$$\text{Current Account} + \text{Capital Account} + \text{Financial Account} = 0$$

**Current Account:**

- Trade in goods (visible trade): exports minus imports
- Trade in services (invisible trade): exports minus imports
- Primary income: investment income (dividends, interest) and compensation of employees
- Secondary income: transfers (foreign aid, remittances, EU contributions)

**Capital Account:**

- Capital transfers (debt forgiveness, migrant transfers)
- Acquisition/disposal of non-produced, non-financial assets (patents, leases)

**Financial Account:**

- Direct investment (FDI)
- Portfolio investment (shares, bonds)
- Other investment (loans, deposits)
- Reserve assets (foreign currency, gold, SDRs)

### 4.2 Deficits and Surpluses

A **current account deficit** means a country is spending more on imports, investment income payments, and transfers than it receives. It must be financed by a surplus on the capital and financial accounts (borrowing from abroad or selling assets).

**Is a current account deficit bad?** Not necessarily:

- A deficit may reflect strong investment (importing capital goods for future growth)
- It may reflect high consumer confidence and living standards
- However, persistent deficits financed by borrowing are unsustainable
- Deficits caused by lack of competitiveness are problematic

## 5. The Phillips Curve

### 5.1 Short-Run Phillips Curve

The **Phillips curve** (Phillips, 1958) shows an inverse relationship between inflation and unemployment:

$$\pi = \pi^e - \beta(u - u^*) + \varepsilon$$

In the short run, lower unemployment is associated with higher inflation. The mechanism: tight labour markets $\Rightarrow$ wages rise (workers have bargaining power) $\Rightarrow$ costs rise $\Rightarrow$ prices rise (cost-push) AND higher employment $\Rightarrow$ higher demand $\Rightarrow$ demand-pull inflation.

### 5.2 Long-Run Phillips Curve

**Proposition: In the long run, there is no trade-off between inflation and unemployment.**

Friedman (1968) and Phelps (1967) argued that the Phillips curve is vertical in the long run at the natural rate of unemployment.

_Proof._ If the government tries to maintain $u < u^*$ through expansionary policy, inflation rises. Initially, workers suffer from **money illusion** — they accept nominal wage increases not realising prices are rising faster. Real wages fall, firms hire more. But eventually, workers update their inflation expectations ($\pi^e$ rises). They demand higher nominal wages to compensate. Real wages return to their original level, and employment falls back to $u^*$. The economy moves up along the short-run Phillips curve to a point with higher inflation but the same unemployment rate. $\blacksquare$

$$\text{Long-run Phillips curve: } u = u^* \text{ (vertical)}$$

### 5.3 Expectations and the Phillips Curve

- **Adaptive expectations**: $\pi^e_t = \pi_{t-1}$. Workers learn from past inflation. The economy traces a series of short-run Phillips curves, with inflation accelerating if unemployment is held below $u^*$.
- **Rational expectations**: $\pi^e_t = E_t[\pi_t]$. Agents use all available information, including policy announcements. Systematic monetary policy is fully anticipated and has no real effect.

## 6. Critical Evaluation

### The Four Macroeconomic Objectives

1. **Economic growth**: sustained increase in real GDP
2. **Price stability**: low and stable inflation (typically 2% target in the UK)
3. **Full employment**: unemployment at or near the natural rate
4. **Balance of payments equilibrium**: sustainable current account position

These objectives often conflict:

- **Growth vs inflation**: rapid growth may overheat the economy, causing demand-pull inflation
- **Growth vs BoP**: growth increases import demand, worsening the current account
- **Unemployment vs inflation**: short-run Phillips curve trade-off
- **All objectives vs each other**: policy must balance competing priorities

:::tip Exam Technique
When asked about macroeconomic performance, always use data. Reference the most recent ONS figures for UK GDP growth, inflation rate, unemployment rate, and current account balance. Examiners reward application of theory to real data.
:::

## 7. Problem Set

**Problem 1.** An economy produces three goods: apples, bread, and computers. In the base year (2020), quantities and prices are: apples (100 units, £1), bread (50 units, £2), computers (10 units, £500). In 2024: apples (120, £1.50), bread (55, £2.50), computers (15, £600). Calculate (a) nominal GDP in both years, (b) real GDP in 2024 using base-year prices, (c) the GDP deflator and inflation rate.

<details>
<summary>Hint</summary>
<p>
(a) Nominal GDP 2020 = $100(1) + 50(2) + 10(500) = 100 + 100 + 5000 = 5200$. Nominal GDP 2024 = $120(1.50) + 55(2.50) + 15(600) = 180 + 137.50 + 9000 = 9317.50$. (b) Real GDP 2024 (base prices) = $120(1) + 55(2) + 15(500) = 120 + 110 + 7500 = 7730$. (c) GDP deflator = $9317.50 / 7730 \times 100 = 120.5$. Inflation = $20.5\%$.
</p>
</details>

**Problem 2.** A CPI basket has four items with weights: food (30%), housing (35%), transport (20%), entertainment (15%). If prices change by +5%, +3%, -2%, +8% respectively, calculate the overall inflation rate.

<details>
<summary>Hint</summary>
<p>
Inflation $= 0.30(5\%) + 0.35(3\%) + 0.20(-2\%) + 0.15(8\%) = 1.5\% + 1.05\% - 0.4\% + 1.2\% = 3.35\%$.
</p>
</details>

**Problem 3.** An economy has a labour force of 35 million, employment of 31.5 million, and a population of 55 million. Calculate (a) the unemployment rate, (b) the employment rate, and (c) the economic inactivity rate.

<details>
<summary>Hint</summary>
<p>
(a) Unemployed $= 35 - 31.5 = 3.5$m. $u = 3.5/35 = 10\%$. (b) Employment rate $= 31.5/55 = 57.3\%$. (c) Economically inactive $= 55 - 35 = 20$m. Inactivity rate $= 20/55 = 36.4\%$.
</p>
</details>

**Problem 4.** Using Okun's Law with $\beta = 2$, if potential GDP is £2.5 trillion and actual GDP is £2.35 trillion, estimate the cyclical unemployment rate if the natural rate is 5%.

<details>
<summary>Hint</summary>
<p>
Output gap $= (2.35 - 2.5)/2.5 = -6\%$. Okun's Law: $-6\% = -2(u - 5\%) \Rightarrow u - 5\% = 3\% \Rightarrow u = 8\%$. Cyclical unemployment $= 8\% - 5\% = 3\%$.
</p>
</details>

**Problem 5.** A country's balance of payments shows: exports of goods £300bn, imports of goods £400bn, exports of services £200bn, imports of services £150bn, net primary income -£50bn, net secondary income -£20bn. Calculate the current account balance and identify whether it is in deficit or surplus.

<details>
<summary>Hint</summary>
<p>
Trade in goods $= 300 - 400 = -100$. Trade in services $= 200 - 150 = +50$. Primary income $= -50$. Secondary income $= -20$. Current account $= -100 + 50 - 50 - 20 = -120$bn (deficit).
</p>
</details>

**Problem 6.** "A high GDP per capita necessarily means high living standards." Evaluate this statement with reference to at least four limitations of GDP as a welfare measure.

<details>
<summary>Hint</summary>
<p>
Four limitations: (1) Inequality — GDP per capita is an average; high average may coexist with extreme poverty. (2) Environmental degradation — China's rapid GDP growth came with severe pollution. (3) Unpaid work — countries with large informal sectors (e.g., India) undercount economic activity. (4) Health and education — Saudi Arabia has high GDP per capita but ranks lower on HDI due to gender inequality in education. (5) Leisure — GDP doesn't value free time; a country with longer working hours has higher GDP but not necessarily better well-being.
</p>
</details>

**Problem 7.** Explain the difference between demand-pull and cost-push inflation using AD/AS analysis. Under what conditions might both types of inflation occur simultaneously?

<details>
<summary>Hint</summary>
<p>
Demand-pull: AD shifts right $\Rightarrow$ both $P$ and $Y$ rise (at least until full employment). Cost-push: SRAS shifts left $\Rightarrow$ $P$ rises but $Y$ falls (stagflation). Both simultaneously: AD shifts right AND SRAS shifts left (e.g., expansionary fiscal policy during an oil price shock) $\Rightarrow$ $P$ rises sharply, effect on $Y$ ambiguous. This is the most dangerous scenario (1970s stagflation).
</p>
</details>

**Problem 8.** "The natural rate of unemployment is zero." Discuss this statement with reference to the concept of the NAIRU and the different types of unemployment.

<details>
<summary>Hint</summary>
<p>
False. The natural rate is positive because frictional unemployment (time to search for jobs) and structural unemployment (skill/location mismatches) always exist. A zero unemployment rate would mean: (1) no one ever leaves a job voluntarily (no frictional), (2) every worker's skills perfectly match every vacancy (no structural). Both are impossible. Some unemployment is *efficient* — it allows better job matching and resource reallocation. However, the natural rate can be reduced through better information, training, and labour market flexibility.
</p>
</details>

**Problem 9.** Explain why deflation can be more damaging than moderate inflation. In your answer, refer to the concepts of debt deflation, the zero lower bound, and the paradox of thrift.

<details>
<summary>Hint</summary>
<p>
Debt deflation (Fisher): falling prices increase the real value of debt $\Rightarrow$ borrowers cut spending to repay $\Rightarrow$ AD falls further $\Rightarrow$ prices fall further (vicious cycle). Zero lower bound: central banks cannot set nominal interest rates below zero, limiting monetary policy. Paradox of thrift: deflation increases the real value of money, encouraging saving and discouraging spending $\Rightarrow$ AD falls further. Japan's "Lost Decades" (1990s-present) illustrate these dangers.
</p>
</details>

**Problem 10.** The short-run Phillips curve suggests a trade-off between inflation and unemployment. Explain why policymakers might choose a point on this curve that is not at the minimum of either variable.

<details>
<summary>Hint</summary>
<p>
Policymakers must balance the marginal benefit of lower unemployment (higher output, lower social costs) against the marginal cost of higher inflation (redistribution, uncertainty, menu costs). The optimal point depends on society's preferences (the "loss function" of the central bank/government). If the central bank places greater weight on inflation stabilisation (inflation targeting), it will accept higher unemployment. If the government places greater weight on employment (especially before elections), it will accept higher inflation. The time-inconsistency problem (Kydland & Prescott, 1977) shows that discretionary policymakers may be tempted to exploit the short-run trade-off, leading to inflationary bias.
</p>
</details>

**Problem 11.** "A current account deficit is always a sign of economic weakness." Evaluate this statement.

<details>
<summary>Hint</summary>
<p>
Not necessarily. A deficit can reflect: (1) Strong domestic demand — consumers are confident and spending, including on imports. (2) Investment — importing capital goods for future growth (China ran deficits during its industrialisation). (3) Attractive investment destination — capital inflows finance the deficit. However, persistent deficits financed by borrowing are concerning: (1) Growing external debt. (2) Loss of competitiveness (structural deficit). (3) Speculative attacks on the currency. The UK has run a persistent current account deficit for decades, financed by London's status as a financial centre.
</p>
</details>

**Problem 12.** Explain how the four macroeconomic objectives are interrelated, illustrating your answer with examples from the UK economy since 2020.

<details>
<summary>Hint</summary>
<p>
Post-2020 UK: (1) COVID-19 caused a sharp fall in GDP (growth objective) and a spike in unemployment (employment objective). (2) Government stimulus (furlough) limited unemployment but increased government debt. (3) Supply chain disruptions + energy crisis caused cost-push inflation (price stability objective). (4) Sterling depreciation worsened the terms of trade but helped exports (BoP objective). (5) Bank of England raised interest rates to fight inflation, potentially dampening growth and employment. This illustrates the conflicts: fighting inflation may worsen growth and employment; stimulating growth may worsen inflation and the current account.
</p>
</details>
