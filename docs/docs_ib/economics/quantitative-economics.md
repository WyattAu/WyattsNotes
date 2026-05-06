---
title: Quantitative Economics
description: "IB Economics — index numbers, real vs nominal calculations, compound interest, present value, cost-benefit analysis, Lorenz curve, Gini coefficient, poverty measures, HDI, multiplier algebra, consumption function, Keynesian cross, and IS-LM analysis."
slug: quantitative-economics
---

## Index Numbers

### Construction of Index Numbers

An index number measures the change in a variable (or group of variables) relative to a base period:

$$\text{Index}_t = \frac{P_t}{P_0} \times 100$$

Where $P_t$ is the value in period $t$ and $P_0$ is the value in the base period. The base period
is assigned an index value of 100.

**Weighted index numbers** are used when aggregating multiple items with different importance. For a
price index with $n$ goods:

$$\text{Price Index}_t = \frac{\sum_{i=1}^{n} P_{i,t} \times Q_{i,0}}{\sum_{i=1}^{n} P_{i,0} \times Q_{i,0}} \times 100$$

This is a **Laspeyres index**, which uses base-period quantities as weights. It tends to overstate
inflation because it does not account for consumer substitution away from goods that have become
relatively more expensive.

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

## Real vs. Nominal Calculations

### Distinguishing Real and Nominal Values

**Nominal values** are measured in current prices and reflect both quantity changes and price changes.
**Real values** are adjusted for price level changes and reflect only quantity changes.

### GDP Deflator

$$\text{GDP Deflator} = \frac{\text{Nominal GDP}}{\text{Real GDP}} \times 100$$

$$\text{Real GDP} = \frac{\text{Nominal GDP}}{\text{GDP Deflator}} \times 100$$

### Real Interest Rates

The **Fisher equation** relates nominal and real interest rates:

$$(1 + i) = (1 + r)(1 + \pi^e)$$

Where $i$ is the nominal interest rate, $r$ is the real interest rate, and $\pi^e$ is the expected
inflation rate.

The approximate relationship (valid for small values of $\pi$):

$$r \approx i - \pi^e$$

If the nominal interest rate is $5\%$ and expected inflation is $2\%$, the real interest rate is
approximately $3\%$.

**Implications:**

- If $\pi^e > i$ (expected inflation exceeds the nominal rate), the real interest rate is negative,
  discouraging saving and encouraging borrowing
- Central banks set nominal rates; real rates depend on inflation expectations, which are not
  directly controllable

### Real Wage Calculations

$$\text{Real wage}_t = \frac{\text{Nominal wage}_t}{\text{CPI}_t} \times 100$$

A worker whose nominal wage rises from `USD 40000` to `USD 42000` while the CPI rises from 200 to 220
has experienced a decrease in real wages:

$$\text{Real wage}_{\text{old}} = \frac{40000}{200} \times 100 = 200$$
$$\text{Real wage}_{\text{new}} = \frac{42000}{220} \times 100 = 190.91$$

The nominal increase of $5\%$ is more than offset by inflation of $10\%$, so purchasing power falls.

## Compound Interest and Present Value

### Compound Interest

When interest is compounded, each period's interest is calculated on the principal plus previously
accumulated interest:

$$FV = PV \times (1 + r)^n$$

Where $FV$ is the future value, $PV$ is the present value (principal), $r$ is the interest rate per
period, and $n$ is the number of periods.

For multiple compounding periods per year:

$$FV = PV \times \left(1 + \frac{r}{m}\right)^{m \times n}$$

Where $m$ is the number of compounding periods per year.

Continuous compounding:

$$FV = PV \times e^{r \times n}$$

### Effective Annual Rate (EAR)

The EAR converts a stated nominal rate with multiple compounding periods into the equivalent annual
rate:

$$\text{EAR} = \left(1 + \frac{r}{m}\right)^m - 1$$

A nominal rate of $12\%$ compounded monthly gives:

$$\text{EAR} = \left(1 + \frac{0.12}{12}\right)^{12} - 1 = (1.01)^{12} - 1 = 0.1268 = 12.68\%$$

### Present Value and Discounting

Present value is the current worth of a future sum, discounted at a given rate:

$$PV = \frac{FV}{(1 + r)^n}$$

This is the inverse of compounding. A higher discount rate implies a lower present value.

### Present Value of an Annuity

An annuity is a series of equal payments received at regular intervals. The present value of an
annuity of $A$ per period for $n$ periods at discount rate $r$:

$$PV = A \times \frac{1 - (1 + r)^{-n}}{r}$$

**Perpetuity** (an annuity that continues forever):

$$PV = \frac{A}{r}$$

### Net Present Value (NPV)

NPV is the sum of the present values of all cash flows (positive and negative) associated with a
project:

$$\text{NPV} = \sum_{t=0}^{T} \frac{CF_t}{(1 + r)^t}$$

Where $CF_t$ is the cash flow in period $t$ and $r$ is the discount rate.

**Decision rule:** if NPV $> 0$, the project is financially viable (the present value of benefits
exceeds the present value of costs).

## Cost-Benefit Analysis (CBA)

### Framework

CBA is a systematic approach to evaluating the economic merits of a project or policy by comparing
the total social benefits with the total social costs.

**Steps in CBA:**

1. **Identify all costs and benefits**: direct, indirect, intangible, externalities
2. **Quantify costs and benefits** in monetary terms where possible
3. **Discount future costs and benefits** to present values using a social discount rate
4. **Calculate NPV** or the benefit-cost ratio (BCR)
5. **Sensitivity analysis**: test how results change with different assumptions (discount rate,
   project lifespan, cost estimates)
6. **Make a recommendation** based on the analysis

### The Social Discount Rate

The social discount rate reflects society's preference for current consumption over future
consumption. A higher discount rate gives less weight to future benefits and costs.

Choosing the discount rate is critical and controversial:

- **High discount rate** ($5$--$10\%$): favours projects with short payback periods; long-term
  environmental benefits receive little weight
- **Low discount rate** ($1$--$3\%$): gives more weight to future generations; favours projects with
  long-term benefits (e.g., climate change mitigation)

The **Ramsey formula** for the social discount rate:

$$r = \delta + \eta \times g$$

Where $\delta$ is the pure rate of time preference, $\eta$ is the elasticity of marginal utility of
consumption, and $g$ is the growth rate of per capita consumption.

### Benefit-Cost Ratio (BCR)

$$\text{BCR} = \frac{\text{Present Value of Benefits}}{\text{Present Value of Costs}}$$

- BCR $> 1$: benefits exceed costs (project is viable)
- BCR $= 1$: benefits equal costs (indifferent)
- BCR $< 1$: costs exceed benefits (project is not viable)

### Challenges in CBA

- **Valuing non-market goods**: health, environmental quality, and time savings are difficult to
  value in monetary terms. Techniques include:
  - **Hedonic pricing**: inferring the value of environmental amenities from property prices
  - **Travel cost method**: estimating the value of recreational sites from the costs visitors
    incur
  - **Contingent valuation**: surveying people's willingness to pay (WTP) or willingness to accept
    (WTA) compensation
- **Distributional effects**: CBA typically considers aggregate benefits and costs without
  addressing who gains and who loses. A project with positive NPV may harm a disadvantaged group
- **Uncertainty**: future costs and benefits are inherently uncertain; sensitivity analysis helps
  but cannot eliminate this
- **Intergenerational equity**: projects with very long time horizons (e.g., nuclear waste
  disposal, climate change) raise ethical questions about discounting future welfare

## The Lorenz Curve and Gini Coefficient

### The Lorenz Curve

The Lorenz curve plots the cumulative share of income (or wealth) received by the cumulative share
of the population, ordered from poorest to richest.

- The horizontal axis measures the cumulative share of the population (0 to 100%)
- The vertical axis measures the cumulative share of income (0 to 100%)
- The **45-degree line of perfect equality** represents the scenario where each percentile of the
  population earns the same share of income

The further the Lorenz curve deviates from the 45-degree line, the greater the inequality.

### Calculating the Gini Coefficient

$$G = \frac{A}{A + B}$$

Where $A$ is the area between the line of perfect equality and the Lorenz curve, and $B$ is the area
under the Lorenz curve.

- $G = 0$: perfect equality (the Lorenz curve coincides with the 45-degree line)
- $G = 1$: maximum inequality (one person has all the income)
- In practice, Gini coefficients range from approximately 0.20 (highly egalitarian, e.g., Nordic
  countries) to 0.60 or above (highly unequal, e.g., South Africa, Brazil)

**Calculating G from grouped data:**

Given $n$ income groups with cumulative population shares $p_i$ and cumulative income shares $L_i$:

$$G = 1 - \sum_{i=1}^{n} (p_i - p_{i-1})(L_i + L_{i-1})$$

Where $p_0 = 0$ and $L_0 = 0$.

**Worked example:**

| Cumulative population share ($p_i$) | 0.20 | 0.40 | 0.60 | 0.80 | 1.00 |
| ----------------------------------- | ---- | ---- | ---- | ---- | ---- |
| Cumulative income share ($L_i$)     | 0.05 | 0.15 | 0.30 | 0.50 | 1.00 |

$$G = 1 - [(0.2 - 0)(0.05 + 0) + (0.4 - 0.2)(0.15 + 0.05) + (0.6 - 0.4)(0.30 + 0.15) + (0.8 - 0.6)(0.50 + 0.30) + (1.0 - 0.8)(1.00 + 0.50)]$$

$$G = 1 - [0.01 + 0.04 + 0.09 + 0.16 + 0.30] = 1 - 0.60 = 0.40$$

### Limitations of the Gini Coefficient

- It is a summary measure that does not reveal where in the distribution inequality is concentrated
- Two countries with the same Gini coefficient can have very different income distributions
- It does not reflect absolute income levels -- a poor country and a rich country can have the same
  Gini coefficient
- It is sensitive to the middle of the distribution and less sensitive to changes at the extremes

## Poverty Measures

### Headcount Ratio

The proportion of the population living below the poverty line:

$$\text{Headcount ratio} = \frac{\text{Number of people below the poverty line}}{\text{Total population}} \times 100$$

Limitation: it does not capture the depth or severity of poverty -- a small transfer that lifts one
person above the line reduces the headcount ratio, even if millions remain in deep poverty.

### Poverty Gap

The poverty gap measures the average distance below the poverty line, expressed as a proportion of
the poverty line:

$$\text{Poverty gap} = \frac{1}{N} \sum_{i=1}^{q} \frac{z - y_i}{z}$$

Where $N$ is the total population, $q$ is the number of poor people, $z$ is the poverty line, and
$y_i$ is the income of person $i$ (for those below the poverty line).

**Total poverty gap** (aggregate shortfall):

$$\text{Total poverty gap} = \sum_{i=1}^{q} (z - y_i)$$

The total poverty gap divided by the poverty line and the total population gives the income
shortfall as a percentage of the poverty line, averaged over the entire population.

### Squared Poverty Gap (Poverty Severity)

The squared poverty gap (also called the Foster-Greer-Thorbecke $P_2$ measure) gives greater weight
to the poorest of the poor:

$$P_2 = \frac{1}{N} \sum_{i=1}^{q} \left(\frac{z - y_i}{z}\right)^2$$

### Multidimensional Poverty Index (MPI)

The MPI, developed by UNDP and OPHI, measures poverty across three dimensions with ten indicators:

1. **Health**: nutrition, child mortality
2. **Education**: years of schooling, school attendance
3. **Living standards**: electricity, sanitation, drinking water, flooring, cooking fuel, assets

A household is multidimensionally poor if it is deprived in at least one-third of the weighted
indicators. The MPI is the product of the headcount ratio (proportion of multidimensionally poor)
and the average deprivation share among the poor:

$$\text{MPI} = H \times A$$

Where $H$ is the proportion of the population that is multidimensionally poor, and $A$ is the
average proportion of weighted indicators in which poor households are deprived.

## Human Development Index (HDI) Calculation

### Components

The HDI combines three dimensions:

1. **Long and healthy life**: measured by life expectancy at birth
2. **Knowledge**: measured by mean years of schooling (for adults) and expected years of schooling
   (for children)
3. **Standard of living**: measured by GNI per capita (PPP, USD)

### Calculation Method

For each dimension, an index is calculated using minimum and maximum goalposts:

$$\text{Dimension index} = \frac{\text{Actual value} - \text{Minimum value}}{\text{Maximum value} - \text{Minimum value}}$$

**Goalposts:**

| Dimension           | Indicator                  | Minimum | Maximum |
| ------------------- | -------------------------- | ------- | ------- |
| Long and healthy    | Life expectancy at birth   | 20      | 85      |
| Knowledge           | Mean years of schooling    | 0       | 15      |
| Knowledge           | Expected years of schooling| 0       | 18      |
| Standard of living  | GNI per capita (PPP, USD)  | 100     | 75000   |

The education index is the arithmetic mean of the two education indicators:

$$\text{Education index} = \frac{\text{Mean years index} + \text{Expected years index}}{2}$$

The GNI index uses the logarithm of GNI per capita to reflect diminishing returns to income:

$$\text{GNI index} = \frac{\ln(\text{GNI per capita}) - \ln(100)}{\ln(75000) - \ln(100)}$$

The HDI is the geometric mean of the three dimension indices:

$$\text{HDI} = (\text{Health index} \times \text{Education index} \times \text{GNI index})^{1/3}$$

### Worked Example

A country has: life expectancy $= 75$ years, mean years of schooling $= 10$, expected years of
schooling $= 14$, GNI per capita (PPP) $= \text{USD }15000$.

Health index $= \frac{75 - 20}{85 - 20} = \frac{55}{65} = 0.846$

Mean years index $= \frac{10 - 0}{15 - 0} = 0.667$

Expected years index $= \frac{14 - 0}{18 - 0} = 0.778$

Education index $= \frac{0.667 + 0.778}{2} = 0.722$

GNI index $= \frac{\ln(15000) - \ln(100)}{\ln(75000) - \ln(100)} = \frac{9.616 - 4.605}{11.225 - 4.605} = \frac{5.011}{6.620} = 0.757$

$$\text{HDI} = (0.846 \times 0.722 \times 0.757)^{1/3} = (0.462)^{1/3} = 0.773$$

This country falls in the "high human development" category ($0.700$--$0.799$).

## The Multiplier Model

### The Circular Flow of Income

In a closed economy with no government:

$$Y = C + I$$

Income is either consumed or saved:

$$Y = C + S$$

Therefore: $I = S$ (investment equals saving).

With government and the foreign sector:

$$Y = C + I + G + (X - M)$$
$$Y = C + S + T$$

Equilibrium: injections $=$ leakages:

$$I + G + X = S + T + M$$

### The Marginal Propensities

- **Marginal propensity to consume (MPC)**: the fraction of additional income that is spent on
  consumption:
  $$\mathrm{MPC} = \frac{\Delta C}{\Delta Y}$$
- **Marginal propensity to save (MPS)**: the fraction of additional income that is saved:
  $$\mathrm{MPS} = \frac{\Delta S}{\Delta Y}$$
- **Marginal propensity to tax (MPT)**: the fraction of additional income paid in tax:
  $$\mathrm{MPT} = \frac{\Delta T}{\Delta Y}$$
- **Marginal propensity to import (MPM)**: the fraction of additional income spent on imports:
  $$\mathrm{MPM} = \frac{\Delta M}{\Delta Y}$$

By definition: $\mathrm{MPC} + \mathrm{MPS} = 1$ (in a closed economy with no government).

### The Simple Multiplier

In a closed economy with no government, the multiplier is:

$$k = \frac{1}{\mathrm{MPS}} = \frac{1}{1 - \mathrm{MPC}}$$

**Derivation:** an initial injection $\Delta I$ generates income $\Delta Y_1 = \Delta I$. Recipients
spend $\mathrm{MPC} \times \Delta Y_1$ of this, generating income $\Delta Y_2 = \mathrm{MPC}^2 \times
\Delta I$, and so on:

$$\Delta Y = \Delta I \times (1 + \mathrm{MPC} + \mathrm{MPC}^2 + \mathrm{MPC}^3 + \cdots)$$

This is a geometric series with first term $1$ and common ratio $\mathrm{MPC}$ ($< 1$):

$$\Delta Y = \Delta I \times \frac{1}{1 - \mathrm{MPC}} = \Delta I \times k$$

### The Complex Multiplier

In an open economy with government:

$$k = \frac{1}{\mathrm{MPS} + \mathrm{MPT} + \mathrm{MPM}} = \frac{1}{1 - \mathrm{MPC}(1 - t) + \mathrm{MPM}}$$

Where $t$ is the proportional tax rate (if taxes are proportional: $\mathrm{MPT} = t$).

The multiplier is smaller because:

- Taxes withdraw income at each round of spending ($\mathrm{MPT}$)
- Imports are spending that leaks abroad ($\mathrm{MPM}$)
- Savings are a leakage ($\mathrm{MPS}$)

### The Balanced Budget Multiplier

If government spending and taxes increase by the same amount ($\Delta G = \Delta T$):

$$\Delta Y = \Delta G \times k_G + \Delta T \times k_T$$

Where $k_G = \frac{1}{1 - \mathrm{MPC}}$ (government spending multiplier) and $k_T =
\frac{-\mathrm{MPC}}{1 - \mathrm{MPC}}$ (tax multiplier, which is negative because higher taxes
reduce disposable income and consumption).

$$\Delta Y = \frac{\Delta G}{1 - \mathrm{MPC}} + \frac{-\mathrm{MPC} \times \Delta T}{1 - \mathrm{MPC}}$$

Since $\Delta G = \Delta T$:

$$\Delta Y = \frac{\Delta G - \mathrm{MPC} \times \Delta G}{1 - \mathrm{MPC}} = \frac{\Delta G(1 - \mathrm{MPC})}{1 - \mathrm{MPC}} = \Delta G$$

The balanced budget multiplier equals 1: equal increases in $G$ and $T$ increase GDP by the amount
of the increase.

## The Consumption Function

### Keynesian Consumption Function

The Keynesian consumption function relates consumption to disposable income:

$$C = a + bY_d$$

Where:
- $C$ = total consumption
- $a$ = autonomous consumption (consumption when income is zero; financed by borrowing or dissaving)
- $b$ = MPC (the slope of the consumption function)
- $Y_d = Y - T$ = disposable income (income after taxes)

**Average propensity to consume (APC):**

$$\mathrm{APC} = \frac{C}{Y_d} = \frac{a}{Y_d} + b$$

APC falls as income rises (because the autonomous component $a/Y_d$ becomes smaller).

**Average propensity to save (APS):**

$$\mathrm{APS} = \frac{S}{Y_d} = 1 - \mathrm{APC}$$

### The Saving Function

Since $Y_d = C + S$:

$$S = Y_d - C = Y_d - (a + bY_d) = -a + (1 - b)Y_d$$

Where $-a$ is autonomous dissaving (when income is zero, households must consume $a$, so they
dissave by $a$), and $(1 - b) = \mathrm{MPS}$.

### Factors Shifting the Consumption Function

- **Wealth effects**: an increase in household wealth (rising house prices, stock market gains)
  shifts the consumption function upward at every income level
- **Interest rates**: higher interest rates encourage saving and discourage borrowing, shifting $C$
  downward
- **Consumer confidence**: optimistic expectations about future income increase current consumption
- **Income distribution**: lower-income households have a higher MPC, so redistribution toward them
  increases aggregate consumption
- **Demographics**: an aging population tends to have a lower aggregate MPC

### Permanent Income Hypothesis (Friedman)

Friedman argued that consumption depends on permanent (expected lifetime) income rather than current
income:

$$C = k \times Y_p$$

Where $k$ is the proportion of permanent income consumed and $Y_p$ is permanent income.

- If current income exceeds permanent income (transitory positive income), households save most of
  the windfall rather than increasing consumption proportionally
- If current income falls below permanent income (transitory negative income), households maintain
  consumption by drawing on savings

This implies that the MPC out of transitory income is much lower than the MPC out of permanent
income, which helps explain why temporary tax cuts tend to have limited stimulative effects.

### Life-Cycle Hypothesis (Modigliani)

Modigliani proposed that individuals smooth consumption over their lifetime, borrowing when young,
saving during working years, and dissaving in retirement:

$$C = \frac{\text{Lifetime resources}}{\text{Expected years of life}}$$

Implications:

- Aggregate saving depends on the age structure of the population
- An aging population reduces the national saving rate (more retirees dissaving)
- Changes in expected retirement age affect saving behaviour

## The Keynesian Cross Model

### Equilibrium Output

The Keynesian cross model determines equilibrium output in the short run when prices are fixed. The
45-degree line represents $Y = \text{Aggregate Expenditure (AE)}$. The AE line has a slope of
$\mathrm{MPC}$ (in the simplest case where $\text{AE} = C + I$).

Equilibrium occurs where $\text{AE} = Y$:

$$Y = C + I + G + (X - M)$$

Substituting the consumption function $C = a + b(Y - T)$:

$$Y = a + b(Y - T) + I + G + X - M$$

$$Y = a + bY - bT + I + G + X - M$$

$$Y - bY = a - bT + I + G + X - M$$

$$Y(1 - b) = a - bT + I + G + X - M$$

$$Y^* = \frac{a - bT + I + G + X - M}{1 - b}$$

This is the equilibrium level of output, which can also be written as:

$$Y^* = \frac{\text{Autonomous expenditure}}{1 - \mathrm{MPC}} = k \times \text{Autonomous expenditure}$$

### The Inflationary and Deflationary Gaps

- **Deflationary (recessionary) gap**: equilibrium output $Y^*$ is below potential output $Y_f$. There
  is unused capacity and unemployment. The gap equals the horizontal distance between $Y^*$ and
  $Y_f$ on the Keynesian cross diagram
- **Inflationary gap**: equilibrium output $Y^*$ exceeds potential output $Y_f$. The economy is
  overheating, and demand-pull inflation results

### The Paradox of Thrift

If all households simultaneously increase their saving (reduce consumption), aggregate demand falls.
The resulting decline in output and income may cause total saving to decrease rather than increase:

$$S \uparrow \implies C \downarrow \implies Y \downarrow \implies S \downarrow$$

This is because $S = -a + (1-b)Y$. If $Y$ falls by enough, the reduction in income can outweigh
the increase in the saving rate. The paradox highlights the fallacy of composition: what is rational
for an individual (saving more) may be harmful if everyone does it simultaneously.

## IS-LM Analysis

### The IS Curve

The IS (Investment-Saving) curve shows all combinations of the interest rate ($r$) and output ($Y$)
at which the goods market is in equilibrium (planned expenditure equals output).

**Derivation:** in the goods market, equilibrium requires $Y = C(Y - T) + I(r) + G$.

A higher interest rate reduces investment ($I$), reducing aggregate expenditure and equilibrium
output. Therefore, the IS curve slopes downward.

**Slope of the IS curve:** depends on the interest sensitivity of investment and the multiplier:

- If investment is highly sensitive to interest rates (flat investment function), the IS curve is
  relatively flat
- If the multiplier is large (high MPC), the IS curve is relatively flat (a given change in
  investment causes a large change in output)

**Shifts of the IS curve:**

- Expansionary fiscal policy ($G \uparrow$ or $T \downarrow$) shifts IS rightward
- Increased consumer confidence ($a \uparrow$) shifts IS rightward
- Increased business confidence ($I \uparrow$ at every $r$) shifts IS rightward
- Appreciation of the exchange rate ($X \downarrow, M \uparrow$) shifts IS leftward

### The LM Curve

The LM (Liquidity-Money) curve shows all combinations of the interest rate ($r$) and output ($Y$)
at which the money market is in equilibrium (money supply equals money demand).

**Money demand (liquidity preference):**

$$M^d = L_1(Y) + L_2(r)$$

- $L_1(Y)$: transactions demand for money -- increases with income (more transactions require more
  money)
- $L_2(r)$: speculative demand for money -- decreases with interest rates (higher rates increase the
  opportunity cost of holding money)

**Equilibrium:** $M^s = M^d = L_1(Y) + L_2(r)$, where $M^s$ is the (exogenously fixed) money supply.

A higher level of output increases money demand, which (with a fixed money supply) requires a
higher interest rate to reduce speculative demand and restore equilibrium. Therefore, the LM curve
slopes upward.

**Slope of the LM curve:**

- If money demand is highly sensitive to interest rates (flat $L_2$ function), the LM curve is
  relatively flat
- If money demand is highly sensitive to income (steep $L_1$ function), the LM curve is relatively
  steep

**Shifts of the LM curve:**

- Expansionary monetary policy ($M^s \uparrow$) shifts LM rightward (more money available at every
  interest rate)
- Contractionary monetary policy ($M^s \downarrow$) shifts LM leftward

### IS-LM Equilibrium

The equilibrium interest rate and output are determined by the intersection of the IS and LM curves.
At this point, both the goods market and the money market are in equilibrium simultaneously.

### Policy Analysis with IS-LM

**Expansionary fiscal policy** ($G \uparrow$): shifts IS rightward. Output and the interest rate
both rise. The higher interest rate partially crowds out private investment, so the increase in
output is smaller than the simple multiplier predicts.

The extent of crowding out depends on the slope of the LM curve:

- **Flat LM curve (liquidity trap)**: monetary policy is ineffective; fiscal policy is very
  effective. An increase in $G$ raises output with little crowding out because the central bank
  accommodates by increasing the money supply (or money demand is infinitely elastic at very low
  interest rates)
- **Steep LM curve**: fiscal policy is largely crowded out; monetary policy is more effective

**Expansionary monetary policy** ($M^s \uparrow$): shifts LM rightward. The interest rate falls,
stimulating investment and increasing output.

### The Liquidity Trap

At very low interest rates, the speculative demand for money becomes infinitely elastic
(Liquidity preference is absolute). The LM curve becomes horizontal. Monetary policy becomes
ineffective (increasing the money supply does not lower interest rates further because people are
willing to hold any amount of money at the near-zero rate). In this situation, fiscal policy is
the only effective tool for stimulating output.

This situation was observed during the Global Financial Crisis (2008--09) and the COVID-19
pandemic, when central banks cut policy rates to near zero and turned to quantitative easing to
stimulate the economy.

## Common Pitfalls

- Confusing nominal and real values. Always check whether a value is in current prices (nominal) or
  constant prices (real) before making comparisons over time.
- Using the wrong discount rate in CBA. The social discount rate should reflect society's time
  preference, not the private sector's required rate of return. The choice of rate can dramatically
  alter the results of long-term projects.
- Confusing the Gini coefficient with absolute poverty measures. The Gini measures relative
  inequality; a country can have a low Gini but high absolute poverty, or a high Gini with low
  absolute poverty.
- Calculating the HDI using arithmetic rather than geometric mean. Since 2010, the UNDP has used
  the geometric mean (which ensures that a very low score in one dimension cannot be fully
  compensated by high scores in others).
- Assuming the multiplier is always large. With high tax rates and high import propensities, the
  multiplier can be very small (close to 1 or even less than 1).
- Confusing the consumption function with the saving function. The consumption function has a
  positive intercept (autonomous consumption); the saving function has a negative intercept
  (autonomous dissaving).
- Forgetting that the IS-LM model assumes a fixed price level. It is a short-run model that does
  not capture the interaction between output and the price level (which is the domain of the AD-AS
  model).
- Neglecting to distinguish between the money multiplier and the fiscal multiplier. The money
  multiplier relates to banking and the money supply; the fiscal multiplier relates to government
  spending and national income.
- Confusing transitory income with permanent income. The permanent income hypothesis predicts that
  temporary tax changes have a much smaller effect on consumption than permanent ones.

## Practice Problems

<details>
<summary>Problem 1: Index Numbers and Real Values</summary>

A country's nominal GDP and GDP deflator are as follows:

| Year | Nominal GDP (billion USD) | GDP Deflator (base year 2015 = 100) |
| ---- | ------------------------- | ------------------------------------ |
| 2018 | 1200                      | 110                                  |
| 2019 | 1350                      | 118                                  |
| 2020 | 1280                      | 125                                  |

(a) Calculate real GDP for each year.

(b) Calculate the real GDP growth rate between 2018 and 2019, and between 2019 and 2020.

(c) Calculate the inflation rate between 2018 and 2019.

(a) Real GDP $= \frac{\text{Nominal GDP}}{\text{GDP Deflator}} \times 100$

- 2018: $\frac{1200}{110} \times 100 = \$1090.9$ billion
- 2019: $\frac{1350}{118} \times 100 = \$1144.1$ billion
- 2020: $\frac{1280}{125} \times 100 = \$1024.0$ billion

(b) Growth 2018--2019: $\frac{1144.1 - 1090.9}{1090.9} \times 100 = 4.88\%$

Growth 2019--2020: $\frac{1024.0 - 1144.1}{1144.1} \times 100 = -10.49\%$

(c) Inflation rate $= \frac{118 - 110}{110} \times 100 = 7.27\%$

</details>

<details>
<summary>Problem 2: Present Value and NPV</summary>

A government is evaluating a infrastructure project with the following expected costs and benefits
(all in millions of USD):

| Year | Costs | Benefits |
| ---- | ----- | -------- |
| 0    | 500   | 0        |
| 1    | 50    | 100      |
| 2    | 50    | 150      |
| 3    | 50    | 200      |
| 4    | 50    | 250      |
| 5    | 50    | 300      |

The social discount rate is $8\%$.

(a) Calculate the NPV of the project.

(b) Should the project be undertaken?

(c) Recalculate the NPV using a discount rate of $12\%$. Is the decision sensitive to the discount
rate?

(a) Net benefits each year: Year 0: $-500$, Year 1: $+50$, Year 2: $+100$, Year 3: $+150$,
Year 4: $+200$, Year 5: $+250$.

$$\text{NPV} = -500 + \frac{50}{1.08} + \frac{100}{1.08^2} + \frac{150}{1.08^3} + \frac{200}{1.08^4} + \frac{250}{1.08^5}$$

$$\text{NPV} = -500 + 46.30 + 85.73 + 119.07 + 147.01 + 170.15$$

$$\text{NPV} = -500 + 568.26 = \$68.26 \text{ million}$$

(b) Since NPV $> 0$ (`USD 68.26` million), the project should be undertaken.

(c) At $r = 12\%$:

$$\text{NPV} = -500 + \frac{50}{1.12} + \frac{100}{1.12^2} + \frac{150}{1.12^3} + \frac{200}{1.12^4} + \frac{250}{1.12^5}$$

$$\text{NPV} = -500 + 44.64 + 79.72 + 106.77 + 127.10 + 141.86$$

$$\text{NPV} = -500 + 500.09 = \$0.09 \text{ million}$$

At $12\%$, the NPV is approximately zero (borderline). The decision is sensitive to the discount rate:
at $8\%$ the project is clearly viable; at $12\%$ it barely breaks even. This highlights the
importance of sensitivity analysis in CBA.

</details>

<details>
<summary>Problem 3: Lorenz Curve and Gini Coefficient</summary>

A country's income distribution is as follows:

| Income quintile (bottom to top) | Share of total income (%) |
| ------------------------------- | ------------------------ |
| Bottom 20%                     | 5                        |
| Second 20%                     | 10                       |
| Third 20%                      | 15                       |
| Fourth 20%                     | 20                       |
| Top 20%                        | 50                       |

(a) Plot the Lorenz curve data points.

(b) Calculate the Gini coefficient.

(c) A policy redistributes `USD 10` billion from the top quintile to the bottom quintile. Recalculate
the Gini coefficient and comment.

(a) Cumulative population and income shares:

| Cumulative population (%) | Cumulative income (%) |
| ------------------------ | --------------------- |
| 0                        | 0                     |
| 20                       | 5                     |
| 40                       | 15                    |
| 60                       | 30                    |
| 80                       | 50                    |
| 100                      | 100                   |

(b) Using the trapezoidal method:

$$G = 1 - \sum (p_i - p_{i-1})(L_i + L_{i-1})$$

$$G = 1 - [0.2 \times (0 + 0.05) + 0.2 \times (0.05 + 0.15) + 0.2 \times (0.15 + 0.30) + 0.2 \times (0.30 + 0.50) + 0.2 \times (0.50 + 1.00)]$$

$$G = 1 - [0.01 + 0.04 + 0.09 + 0.16 + 0.30] = 1 - 0.60 = 0.40$$

(c) After redistribution: bottom quintile share rises from $5\%$ to $15\%$; top quintile falls from
$50\%$ to $40\%$.

New cumulative shares: $0, 15, 25, 40, 60, 100$.

$$G = 1 - [0.2 \times 15 + 0.2 \times 40 + 0.2 \times 65 + 0.2 \times 100 + 0.2 \times 160] / 100$$
$$G = 1 - [3 + 8 + 13 + 20 + 32] / 100 = 1 - 0.76 = 0.24$$

The Gini coefficient falls from $0.40$ to $0.24$, a significant reduction in inequality. This
demonstrates the powerful redistributive potential of targeted transfers.

</details>

<details>
<summary>Problem 4: Keynesian Cross and the Multiplier</summary>

An economy has the following characteristics:

- Autonomous consumption: `USD 200` billion
- MPC: $0.8$
- Investment: `USD 300` billion
- Government spending: `USD 250` billion
- Taxes: `USD 200` billion (lump sum)
- Exports: `USD 150` billion
- Imports: $M = 50 + 0.1Y$

(a) Find the equilibrium level of output.

(b) If the government increases spending by `USD 50` billion, what is the new equilibrium output?

(c) What is the budget balance at the original equilibrium?

(a) Equilibrium: $Y = C + I + G + X - M$

$C = 200 + 0.8(Y - 200) = 200 + 0.8Y - 160 = 40 + 0.8Y$

$M = 50 + 0.1Y$

$Y = (40 + 0.8Y) + 300 + 250 + 150 - (50 + 0.1Y)$

$Y = 40 + 0.8Y + 300 + 250 + 150 - 50 - 0.1Y$

$Y = 690 + 0.7Y$

$0.3Y = 690$

$Y^* = 2300$ billion USD

(b) Multiplier $= \frac{1}{1 - \mathrm{MPC} + \mathrm{MPM}} = \frac{1}{1 - 0.8 + 0.1} = \frac{1}{0.3} = 3.33$

$\Delta Y = 3.33 \times 50 = \$166.7$ billion

New $Y^* = 2300 + 166.7 = \$2466.7$ billion

(c) Budget balance $= T - G = 200 - 250 = -\$50$ billion (a deficit of `USD 50` billion).

</details>

<details>
<summary>Problem 5: HDI Calculation</summary>

Country P has a life expectancy of 68 years, mean years of schooling of 8.5 years, expected years of
schooling of 13 years, and GNI per capita (PPP) of `USD 8000`.

Country Q has a life expectancy of 80 years, mean years of schooling of 12 years, expected years of
schooling of 16 years, and GNI per capita (PPP) of `USD 40000`.

(a) Calculate the HDI for both countries.

(b) Explain why Country P's HDI might be higher relative to Country Q than its GNI per capita would
suggest.

(a) Country P:

Health index $= \frac{68 - 20}{85 - 20} = \frac{48}{65} = 0.738$

Mean years index $= \frac{8.5}{15} = 0.567$

Expected years index $= \frac{13}{18} = 0.722$

Education index $= \frac{0.567 + 0.722}{2} = 0.644$

GNI index $= \frac{\ln(8000) - \ln(100)}{\ln(75000) - \ln(100)} = \frac{8.987 - 4.605}{11.225 - 4.605} = \frac{4.382}{6.620} = 0.662$

$\text{HDI}_P = (0.738 \times 0.644 \times 0.662)^{1/3} = (0.315)^{1/3} = 0.681$

Country Q:

Health index $= \frac{80 - 20}{85 - 20} = \frac{60}{65} = 0.923$

Mean years index $= \frac{12}{15} = 0.800$

Expected years index $= \frac{16}{18} = 0.889$

Education index $= \frac{0.800 + 0.889}{2} = 0.844$

GNI index $= \frac{\ln(40000) - \ln(100)}{\ln(75000) - \ln(100)} = \frac{10.596 - 4.605}{6.620} = \frac{5.991}{6.620} = 0.905$

$\text{HDI}_Q = (0.923 \times 0.844 \times 0.905)^{1/3} = (0.705)^{1/3} = 0.889$

(b) The HDI uses the logarithm of GNI per capita, which compresses income differences. Going from
`USD 8000` to `USD 40000` (a 5-fold increase) translates into a much smaller difference in the GNI
index (0.662 vs. 0.905). This reflects the principle of diminishing marginal utility of income:
additional income contributes less to human development at higher income levels. The non-income
dimensions (health, education) carry substantial weight, which can narrow the gap between countries
at different income levels.

</details>

<details>
<summary>Problem 6: IS-LM Equilibrium and Policy Analysis</summary>

An economy is described by the following equations:

IS curve: $Y = 1200 - 50r$
LM curve: $Y = 500 + 40r$

(a) Find the equilibrium interest rate and output.

(b) The government increases spending, shifting the IS curve to $Y = 1400 - 50r$. Find the new
equilibrium and explain the crowding out effect.

(c) Instead of fiscal policy, the central bank increases the money supply, shifting the LM curve to
$Y = 600 + 40r$. Find the new equilibrium.

(a) Set IS $=$ LM:

$1200 - 50r = 500 + 40r$

$700 = 90r$

$r^* = 7.78\%$

$Y^* = 1200 - 50(7.78) = 1200 - 388.9 = 811.1$

(b) New IS $=$ LM: $1400 - 50r = 500 + 40r \implies 900 = 90r \implies r = 10.0\%$

$Y = 1400 - 50(10) = 900$

Output increased from $811.1$ to $900$ (an increase of $88.9$). The interest rate rose from $7.78\%$
to $10.0\%$. The rise in interest rates partially crowds out private investment -- without crowding
out, the output increase would have been larger (the horizontal shift of IS is $200$, but actual
output increased by only $88.9$).

(c) New LM $=$ IS: $1200 - 50r = 600 + 40r \implies 600 = 90r \implies r = 6.67\%$

$Y = 1200 - 50(6.67) = 1200 - 333.3 = 866.7$

Output increased from $811.1$ to $866.7$ (an increase of $55.6$). The interest rate fell from
$7.78\%$ to $6.67\%$, stimulating investment. Monetary policy is effective but less powerful than
fiscal policy in this case (output increase of $55.6$ vs. $88.9$), because the LM curve is
relatively flat (responsive to output).

</details>
