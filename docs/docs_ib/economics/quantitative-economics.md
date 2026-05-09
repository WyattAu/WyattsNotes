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

## Index Number Calculations: Advanced (HL Extension)

### Laspeyres, Paasche, and Fisher Indices

**Laspeyres price index** uses base-period quantities as weights:

$$P_L = \frac{\sum_{i=1}^{n} P_{i,t} \cdot Q_{i,0}}{\sum_{i=1}^{n} P_{i,0} \cdot Q_{i,0}} \times 100$$

**Paasche price index** uses current-period quantities as weights:

$$P_P = \frac{\sum_{i=1}^{n} P_{i,t} \cdot Q_{i,t}}{\sum_{i=1}^{n} P_{i,0} \cdot Q_{i,t}} \times 100$$

**Fisher ideal price index** is the geometric mean of Laspeyres and Paasche:

$$P_F = \sqrt{P_L \times P_P}$$

The Fisher index is considered "ideal" because it satisfies the time-reversal test ($P_{0 \to 1} \times P_{1 \to 0} = 1$) and the factor-reversal test, which neither Laspeyres nor Paasche satisfies individually.

### CPI vs. RPI

| Feature | CPI | RPI (Retail Price Index) |
|---------|-----|-------------------------|
| Coverage | Broader population coverage | Excludes top 4% of income earners and pensioner households |
| Formula | Partially based on a geometric mean (accounts for substitution) | Uses arithmetic mean (Carli formula; upward bias) |
| Housing costs | Includes owner-occupied housing costs (rental equivalence) | Includes mortgage interest payments (more volatile) |
| Use | Target for inflation targeting (Bank of England) | Used for index-linked bonds, some pension calculations |
| Bias | Lower substitution bias | Upward bias (overstates inflation) |

### Worked Example: Constructing a Price Index

A basket contains three goods with the following data:

| Good | Base Year Price | Base Year Quantity | Year 2 Price | Year 2 Quantity |
|------|----------------|-------------------|-------------|----------------|
| A    | 10             | 50                | 12          | 45             |
| B    | 5              | 100               | 6           | 90             |
| C    | 8              | 30                | 9           | 35             |

**Laspeyres index:**

$$P_L = \frac{12 \times 50 + 6 \times 100 + 9 \times 30}{10 \times 50 + 5 \times 100 + 8 \times 30} \times 100 = \frac{600 + 600 + 270}{500 + 500 + 240} \times 100 = \frac{1470}{1240} \times 100 = 118.5$$

**Paasche index:**

$$P_P = \frac{12 \times 45 + 6 \times 90 + 9 \times 35}{10 \times 45 + 5 \times 90 + 8 \times 35} \times 100 = \frac{540 + 540 + 315}{450 + 450 + 280} \times 100 = \frac{1395}{1180} \times 100 = 118.2$$

**Fisher index:**

$$P_F = \sqrt{118.5 \times 118.2} = \sqrt{14007.7} = 118.4$$

The Laspeyres index slightly overstates inflation (118.5) compared to Paasche (118.2) because it
does not account for consumer substitution toward goods whose relative prices have fallen.

## Real vs. Nominal Conversions: Worked Examples (HL Extension)

### Real GDP with Chain Weighting

| Year | Nominal GDP (bn) | GDP Deflator |
|------|-----------------|--------------|
| 2018 | 500             | 100          |
| 2019 | 550             | 105          |
| 2020 | 540             | 112          |

**Real GDP:**

2018: $500/100 \times 100 = 500$
2019: $550/105 \times 100 = 523.8$
2020: $540/112 \times 100 = 482.1$

**Real GDP growth:**

2018--2019: $(523.8 - 500)/500 \times 100 = 4.76\%$
2019--2020: $(482.1 - 523.8)/523.8 \times 100 = -7.96\%$

**Nominal GDP growth:**

2018--2019: $(550 - 500)/500 \times 100 = 10.0\%$
2019--2020: $(540 - 550)/550 \times 100 = -1.82\%$

In 2020, nominal GDP fell by only 1.82% but real GDP fell by 7.96%. The difference is explained
by inflation (GDP deflator rose from 105 to 112, a 6.67% increase).

### Real Interest Rate Applications

A bank offers a nominal interest rate of $6\%$ on deposits. Expected inflation is $4\%$.

Real interest rate $= 6\% - 4\% = 2\%$

If actual inflation turns out to be $7\%$:

Ex-post real rate $= 6\% - 7\% = -1\%$

The depositor's purchasing power falls by 1% despite earning 6% nominal interest. This
redistributes wealth from lenders to borrowers.

### Real Wage Calculations Across Multiple Years

A worker's nominal wage and CPI over four years:

| Year | Nominal Wage | CPI (base 2018 = 100) | Real Wage |
|------|-------------|----------------------|-----------|
| 2018 | 40,000      | 100                  | 40,000    |
| 2019 | 42,000      | 106                  | 39,623    |
| 2020 | 44,000      | 112                  | 39,286    |
| 2021 | 48,000      | 120                  | 40,000    |

Despite nominal wage increases every year, the worker's purchasing power fell from 2018 to 2020
and only returned to the 2018 level by 2021. The cumulative nominal increase was 20%, but the
real wage was unchanged over the four-year period.

## Compound Interest and Present Value: Advanced (HL Extension)

### Amortisation and Loan Repayment

The fixed periodic payment $A$ for a loan of principal $PV$ at interest rate $r$ over $n$ periods:

$$A = PV \times \frac{r(1 + r)^n}{(1 + r)^n - 1}$$

**Worked example:** A mortgage of `USD 300,000` at 4% annual interest over 25 years (300 monthly
payments at monthly rate $r = 0.04/12 = 0.00333$):

$$A = 300\,000 \times \frac{0.00333(1.00333)^{300}}{(1.00333)^{300} - 1}$$

$(1.00333)^{300} = e^{300 \times 0.00333} = e^{0.999} \approx 2.715$

$$A = 300\,000 \times \frac{0.00333 \times 2.715}{2.715 - 1} = 300\,000 \times \frac{0.00904}{1.715} = 300\,000 \times 0.00527 = 1581$$

Monthly payment $= \$1\,581$. Total repayment $= 1581 \times 300 = \$474\,300$. Total interest $= \$174\,300$.

### Present Value with Uneven Cash Flows

$$PV = \sum_{t=0}^{T} \frac{CF_t}{(1 + r)^t}$$

**Worked example:** A project requires an initial investment of `USD 10,000` and generates the following
cash flows: Year 1: `USD 2,000`, Year 2: `USD 4,000`, Year 3: `USD 5,000`, Year 4: `USD 3,000`.
Discount rate $= 8\%$.

$$PV = -10\,000 + \frac{2\,000}{1.08} + \frac{4\,000}{1.08^2} + \frac{5\,000}{1.08^3} + \frac{3\,000}{1.08^4}$$

$$PV = -10\,000 + 1851.9 + 3429.4 + 3969.2 + 2205.1 = -10\,000 + 11\,455.6 = \$1455.6$$

NPV $> 0$, so the project is viable.

### Internal Rate of Return (IRR)

The IRR is the discount rate that makes NPV $= 0$:

$$\sum_{t=0}^{T} \frac{CF_t}{(1 + \text{IRR})^t} = 0$$

The IRR cannot be solved algebraically for $T > 2$; it requires numerical methods. The project is
acceptable if IRR $>$ the required rate of return (cost of capital).

**Limitations of IRR:**
- May give multiple IRRs if cash flows change sign more than once (non-conventional projects)
- Assumes reinvestment at the IRR, which may be unrealistic
- Can lead to incorrect decisions when comparing mutually exclusive projects of different sizes

## Lorenz Curve Construction and Gini Coefficient Calculation (HL Extension)

### Step-by-Step Construction

Given the following income distribution data:

| Quintile (bottom to top) | Share of Income |
|-------------------------|-----------------|
| Bottom 20%              | 3%              |
| Second 20%              | 8%              |
| Third 20%               | 14%             |
| Fourth 20%              | 22%             |
| Top 20%                 | 53%             |

**Step 1: Calculate cumulative shares**

| Cumulative Population | Cumulative Income |
|---------------------|-------------------|
| 0%                  | 0%                |
| 20%                 | 3%                |
| 40%                 | 11%               |
| 60%                 | 25%               |
| 80%                 | 47%               |
| 100%                | 100%              |

**Step 2: Calculate the Gini coefficient using the trapezoidal method**

$$G = 1 - \sum_{i=1}^{n} (p_i - p_{i-1})(L_i + L_{i-1})$$

Where $p_i$ is the cumulative population share and $L_i$ is the cumulative income share.

$$G = 1 - [0.2(0.03 + 0) + 0.2(0.11 + 0.03) + 0.2(0.25 + 0.11) + 0.2(0.47 + 0.25) + 0.2(1.00 + 0.47)]$$

$$G = 1 - [0.006 + 0.028 + 0.072 + 0.144 + 0.294] = 1 - 0.544 = 0.456$$

A Gini coefficient of 0.456 indicates moderate-to-high inequality.

### Interpreting Gini Coefficients

| Gini Range | Inequality Level | Typical Countries |
|------------|-----------------|-------------------|
| Below 0.30 | Low | Nordic countries (Denmark ~0.25, Norway ~0.27) |
| 0.30--0.40 | Moderate | Germany (~0.31), France (~0.32), Japan (~0.33) |
| 0.40--0.50 | High | USA (~0.41), China (~0.47), Mexico (~0.46) |
| Above 0.50 | Very high | Brazil (~0.53), South Africa (~0.63), Colombia (~0.54) |

## Cost-Benefit Analysis: Methodology (HL Extension)

### Sensitivity Analysis

Sensitivity analysis tests how the NPV changes when key assumptions are varied:

1. **One-at-a-time (OAT):** vary one parameter while holding others constant. Produces a tornado
   diagram showing which parameters have the largest impact on NPV
2. **Scenario analysis:** define best-case, base-case, and worst-case scenarios with different
   combinations of parameter values
3. **Monte Carlo simulation:** assign probability distributions to uncertain parameters and simulate
   thousands of outcomes, producing a distribution of NPV values

**Worked example:** A project has base-case NPV of `USD 50` million. Sensitivity to the discount rate:

| Discount Rate | NPV (USD million) |
|---------------|-------------------|
| 5%            | 85                |
| 8% (base)     | 50                |
| 10%           | 28                |
| 12%           | 10                |
| 15%           | -15               |

The project is viable for discount rates up to approximately 14%. The IRR is approximately 14%.

### Distributional Weighting

Standard CBA weights all costs and benefits equally regardless of who receives them. **Distributional
weighting** assigns higher weights to benefits accruing to disadvantaged groups:

$$\text{Weighted NPV} = \sum_{t=0}^{T} \sum_{g=1}^{G} w_g \cdot \frac{B_{g,t} - C_{g,t}}{(1 + r)^t}$$

Where $w_g$ is the weight assigned to group $g$. A weight of 1.0 applies to the average citizen;
weights above 1.0 are assigned to lower-income groups.

**Example:** if the benefits of a public transport project accrue disproportionately to low-income
commuters, applying a distributional weight of 1.5 to their benefits increases the weighted NPV,
potentially changing the investment decision.

### Common Pitfalls in CBA

- Using a discount rate that is too high for long-term environmental projects, undervaluing future
  benefits
- Ignoring non-market costs and benefits (air quality improvements, time savings, health impacts)
- Double-counting benefits (e.g., counting both the increase in land values and the increase in
  economic activity that caused the land value increase)
- Failing to account for opportunity costs (the value of resources in their next best use)
- Ignoring distributional effects (a project with positive aggregate NPV may harm vulnerable groups)

## Multiplier Algebra: Derivation from Consumption Function (HL Extension)

### Deriving Equilibrium Income

In an open economy with government:

$$Y = C + I + G + X - M$$

Substituting $C = a + b(Y - T)$, $T = tY + T_0$, and $M = mY + M_0$:

$$Y = a + b(Y - tY - T_0) + I + G + X - mY - M_0$$

$$Y = a + bY - btY - bT_0 + I + G + X - mY - M_0$$

$$Y - bY + btY + mY = a - bT_0 + I + G + X - M_0$$

$$Y(1 - b + bt + m) = A_0$$

Where $A_0 = a - bT_0 + I + G + X - M_0$ is autonomous expenditure.

$$Y^* = \frac{A_0}{1 - b(1 - t) + m}$$

### Multiplier Relationships

**Government spending multiplier:**

$$\frac{\partial Y}{\partial G} = \frac{1}{1 - b(1 - t) + m}$$

**Lump-sum tax multiplier:**

$$\frac{\partial Y}{\partial T_0} = \frac{-b}{1 - b(1 - t) + m}$$

**Transfer payment multiplier:**

$$\frac{\partial Y}{\partial TR} = \frac{b}{1 - b(1 - t) + m}$$

Note: the transfer payment multiplier has the same magnitude as the tax multiplier but opposite
sign. Transfers increase disposable income, stimulating consumption.

**Export multiplier:**

$$\frac{\partial Y}{\partial X} = \frac{1}{1 - b(1 - t) + m}$$

The export multiplier equals the government spending multiplier because both are direct injections
into aggregate expenditure.

**Proportional tax rate multiplier:**

$$\frac{\partial Y}{\partial t} = \frac{-bY}{1 - b(1 - t) + m}$$

An increase in the proportional tax rate reduces equilibrium income. The effect is proportional to
current income $Y$, making it path-dependent.

### Complete Worked Example

Given: $a = 200$, $b = 0.75$, $t = 0.2$, $T_0 = 50$, $m = 0.1$, $M_0 = 30$, $I = 300$,
$G = 250$, $X = 100$.

Autonomous expenditure: $A_0 = 200 - 0.75(50) + 300 + 250 + 100 - 30 = 200 - 37.5 + 300 + 250 + 100 - 30 = 782.5$

$k = \frac{1}{1 - 0.75(1 - 0.2) + 0.1} = \frac{1}{1 - 0.6 + 0.1} = \frac{1}{0.5} = 2.0$

$Y^* = 2.0 \times 782.5 = 1565$

**Tax revenue:** $T = tY + T_0 = 0.2(1565) + 50 = 313 + 50 = 363$

**Imports:** $M = mY + M_0 = 0.1(1565) + 30 = 156.5 + 30 = 186.5$

**Budget balance:** $T - G = 363 - 250 = 113$ (surplus)

**Trade balance:** $X - M = 100 - 186.5 = -86.5$ (deficit)

**Effect of $\Delta G = +40$:**

$\Delta Y = 2.0 \times 40 = 80$. New $Y^* = 1645$.

New tax revenue $= 0.2(1645) + 50 = 379$. Budget surplus $= 379 - 290 = 89$.

The budget surplus falls from 113 to 89 even though tax revenue rises, because government
spending increases by more than the additional tax revenue (the multiplier effect).

## Keynesian Cross Diagram and Algebra (HL Extension)

### Graphical Interpretation

The Keynesian cross diagram plots:

- **Vertical axis**: Aggregate Expenditure (AE) and output/income (Y)
- **Horizontal axis**: Output/income (Y)
- **45-degree line**: $AE = Y$ (equilibrium condition)
- **AE line**: $\text{AE} = a + b(Y - T) + I + G + X - M$, with slope $= b(1 - t) - m$

Equilibrium occurs at the intersection of the AE line and the 45-degree line.

**Multiplier visualised:** the multiplier determines the slope of the AE line. A flatter AE line
(lower $b$ or higher $t$ or $m$) implies a smaller multiplier. A steeper AE line implies a
larger multiplier.

### Inflationary and Deflationary Gaps

**Deflationary gap:** the horizontal distance between $Y_f$ (full employment output) and $Y^*$
(equilibrium output) when $Y^* < Y_f$.

The required government spending to close the gap: $\Delta G = \frac{Y_f - Y^*}{k}$

**Inflationary gap:** the horizontal distance between $Y^*$ and $Y_f$ when $Y^* > Y_f$.

The required tax increase to close the gap: $\Delta T = \frac{Y^* - Y_f}{|k_T|}$

### The Paradox of Thrift: Algebraic Demonstration

Initial equilibrium: $Y_0 = \frac{A_0}{1 - b(1-t) + m}$

If households increase saving by reducing autonomous consumption from $a$ to $a - \Delta a$:

$Y_1 = \frac{A_0 - \Delta a}{1 - b(1-t) + m}$

$\Delta Y = \frac{-\Delta a}{1 - b(1-t) + m} = -\Delta a \cdot k$

The change in total saving:

$S = -a + (1-b)(1-t)Y - M_0$

$\Delta S = (1-b)(1-t) \Delta Y = (1-b)(1-t)(-\Delta a \cdot k)$

Since $k = \frac{1}{(1-b)(1-t) + m}$:

$\Delta S = \frac{-(1-b)(1-t)}{(1-b)(1-t) + m} \cdot \Delta a$

$|\Delta S| < |\Delta a|$ because the denominator exceeds the numerator (since $m > 0$).

The increase in the saving rate leads to a decrease in total saving. This is the paradox of
thrift: society ends up saving less because the contraction in income reduces the total amount
of saving.

## IS-LM Model: Advanced (HL Extension)

### Deriving the IS Curve

Starting from the goods market equilibrium:

$$Y = C(Y - T) + I(r) + G$$

With linear functions: $C = a + b(Y - T)$, $I = e - dr$, $T = T_0$:

$$Y = a + bY - bT_0 + e - dr + G$$

$$Y(1 - b) = a - bT_0 + e + G - dr$$

$$r = \frac{a - bT_0 + e + G}{d} - \frac{1 - b}{d} Y$$

This is the IS curve: $r$ as a function of $Y$.

**Slope:** $-\frac{1-b}{d}$. The IS curve is flatter when:
- $b$ is large (high MPC $\implies$ large multiplier $\implies$ a given change in $r$ causes a large
  change in $Y$ through the multiplier)
- $d$ is large (investment is highly sensitive to interest rates)

### Deriving the LM Curve

Money market equilibrium: $M^s / P = L(Y, r) = kY - hr$

$$r = \frac{kY - M^s/P}{h}$$

This is the LM curve: $r$ as a function of $Y$.

**Slope:** $k/h$. The LM curve is steeper when:
- $k$ is large (money demand is highly sensitive to income)
- $h$ is small (money demand is insensitive to interest rates)

### IS-LM Equilibrium: Algebraic Solution

Setting IS $=$ LM:

$$\frac{a - bT_0 + e + G}{d} - \frac{1-b}{d} Y = \frac{kY - M^s/P}{h}$$

Solving for $Y$:

$$\frac{h(a - bT_0 + e + G) + d \cdot M^s/P}{dh + k(1-b)d} = Y^*$$

And for $r$:

$$r^* = \frac{k(a - bT_0 + e + G) - (1-b) M^s/P}{dh + k(1-b)d}$$

### Policy Effectiveness: Comparative Statics

**Fiscal policy effectiveness** (change in $Y$ for a given $\Delta G$):

$$\frac{\partial Y}{\partial G} = \frac{h}{dh + k(1-b)d} = \frac{1}{(1-b) + \frac{dk}{h}}$$

Fiscal policy is more effective when:
- $h$ is large (LM is flat; money demand is sensitive to interest rates)
- $d$ is small (investment is insensitive to interest rates; less crowding out)
- $k$ is small (money demand is insensitive to income)

**Monetary policy effectiveness** (change in $Y$ for a given $\Delta M^s$):

$$\frac{\partial Y}{\partial M^s} = \frac{d/P}{dh + k(1-b)d} = \frac{1}{k + \frac{h(1-b)}{d}}$$

Monetary policy is more effective when:
- $d$ is large (investment is sensitive to interest rates)
- $h$ is small (LM is steep; money demand is insensitive to interest rates)
- $k$ is large (money demand is sensitive to income; a given change in $Y$ causes a large change
  in money demand, requiring a larger interest rate adjustment)

### The IS-LM-PC Framework

The IS-LM model can be extended to incorporate the Phillips curve:

1. IS-LM determines the short-run equilibrium output $Y$ and interest rate $r$
2. The output gap $(Y - Y^*)/Y^*$ determines the deviation of unemployment from the NAIRU
3. The Phillips curve determines inflation: $\pi = \pi^e - \alpha(u - u_n)$
4. If the central bank targets inflation, it adjusts the money supply (shifting LM) to achieve
   its target

This framework provides a bridge between the short-run IS-LM analysis and the medium-run
Phillips curve analysis.

### Common Pitfalls in IS-LM Analysis

- Assuming that fiscal policy is always effective. In the extreme classical case (vertical LM),
  fiscal policy is completely crowded out and has no effect on output.
- Confusing a shift of the IS curve with a movement along it. A change in $G$ or $T$ shifts IS; a
  change in $r$ causes a movement along IS.
- Forgetting that the IS-LM model assumes a fixed price level. It is purely a real-side model.
  The AD-AS model is needed for price level analysis.
- Drawing the LM curve as downward-sloping. The LM curve is always upward-sloping (except in the
  liquidity trap, where it is horizontal).

## Elasticity Calculations: Advanced (HL Extension)

### Point vs. Arc Elasticity

**Point elasticity** measures elasticity at a specific point on the curve:

$$\text{PED}_{\text{point}} = \frac{dQ}{dP} \times \frac{P}{Q}$$

**Arc elasticity** (midpoint formula) measures the average elasticity over an interval:

$$\text{PED}_{\text{arc}} = \frac{Q_2 - Q_1}{(Q_1 + Q_2)/2} \times \frac{(P_1 + P_2)/2}{P_2 - P_1} = \frac{\Delta Q}{\Delta P} \times \frac{P_1 + P_2}{Q_1 + Q_2}$$

**When to use which:**

- Point elasticity: when the demand function is known and you need elasticity at a specific price
- Arc elasticity: when you only have two data points and want an average measure

**Worked example:** Demand: $Q = 100 - 2P$

At $P = 20$: $Q = 60$. Point PED $= \frac{dQ}{dP} \times \frac{P}{Q} = -2 \times \frac{20}{60} = -0.667$

At $P = 30$: $Q = 40$. Point PED $= -2 \times \frac{30}{40} = -1.5$

Arc elasticity between $P = 20$ and $P = 30$:

$\text{PED}_{\text{arc}} = \frac{40 - 60}{(60 + 40)/2} \times \frac{(20 + 30)/2}{30 - 20} = \frac{-20}{50} \times \frac{25}{10} = -0.4 \times 2.5 = -1.0$

### Revenue Implications of Elasticity

For a linear demand curve $P = a - bQ$:

$$\text{TR} = P \times Q = aQ - bQ^2$$

$$\text{MR} = a - 2bQ$$

TR is maximised where $\text{MR} = 0$, i.e., at $Q = a/(2b)$ and $P = a/2$.

At this point, PED $= -1$ (unit elastic).

- For $P > a/2$ (upper half of demand curve): PED $> 1$ in absolute value (elastic). Price
  decrease increases TR
- For $P < a/2$ (lower half of demand curve): PED $< 1$ in absolute value (inelastic). Price
  decrease decreases TR

### Income Elasticity and Firm Strategy

Firms use YED to forecast demand as the economy grows:

- **Luxury goods** ($\text{YED} > 1$): demand grows faster than income. Firms in luxury markets
  benefit disproportionately from economic growth
- **Necessities** ($0 < \text{YED} < 1$): demand grows slower than income. Market growth is limited
  but stable
- **Inferior goods** ($\text{YED} < 0$): demand falls as income rises. Firms must reposition or
  diversify as the economy develops

## Break-Even Analysis (HL Extension)

### The Break-Even Point

The break-even point is the level of output where total revenue equals total cost:

$$\text{TR} = \text{TC}$$

$$P \times Q = \text{TFC} + \text{AVC} \times Q$$

$$Q_{\text{BE}} = \frac{\text{TFC}}{P - \text{AVC}}$$

Where TFC is total fixed cost, AVC is average variable cost, and $P - \text{AVC}$ is the
**contribution margin per unit** (the amount each unit sold contributes toward covering fixed
costs).

### Worked Example

A firm produces gadgets with the following cost structure:
- Fixed costs: `USD 50,000` per month
- Variable cost per unit: `USD 30`
- Selling price per unit: `USD 50`

$$Q_{\text{BE}} = \frac{50\,000}{50 - 30} = \frac{50\,000}{20} = 2500 \text{ units}$$

Break-even revenue $= 50 \times 2500 = \$125\,000$

**Contribution margin ratio:** $\frac{P - \text{AVC}}{P} = \frac{20}{50} = 0.4$ (40% of each dollar of
revenue contributes to covering fixed costs).

**Target profit analysis:** to earn a profit of $\pi$:

$$Q_{\text{target}} = \frac{\text{TFC} + \pi}{P - \text{AVC}}$$

To earn `USD 20,000` profit: $Q = (50\,000 + 20\,000)/20 = 3500$ units.

**Margin of safety:** the percentage by which actual output exceeds the break-even output:

$$\text{Margin of safety} = \frac{Q_{\text{actual}} - Q_{\text{BE}}}{Q_{\text{actual}}} \times 100$$

If actual output is 3000 units: margin of safety $= (3000 - 2500)/3000 \times 100 = 16.7\%$.

### Limitations of Break-Even Analysis

- Assumes constant selling price (no quantity discounts or price changes)
- Assumes constant average variable cost (no economies or diseconomies of scale)
- Assumes all output is sold (no unsold inventory)
- Only applies to a single product or a constant product mix
- Ignores the time value of money
- Does not account for demand constraints (the firm may not be able to sell the break-even
  quantity at the assumed price)

## Additional Practice Problems

<details>
<summary>Problem 7: Laspeyres and Paasche Index Calculation</summary>

A small island economy produces three goods. The following data are available:

| Good | $P_0$ | $Q_0$ | $P_1$ | $Q_1$ |
|------|-------|-------|-------|-------|
| Fish | 5     | 200   | 7     | 180   |
| Bread| 2     | 500   | 3     | 480   |
| Cloth| 10    | 100   | 12    | 120   |

(a) Calculate the Laspeyres, Paasche, and Fisher price indices.

(b) Calculate the Laspeyres quantity index.

(c) Explain why Laspeyres and Paasche indices differ.

(a) **Laspeyres price index:**

Numerator: $7 \times 200 + 3 \times 500 + 12 \times 100 = 1400 + 1500 + 1200 = 4100$

Denominator: $5 \times 200 + 2 \times 500 + 10 \times 100 = 1000 + 1000 + 1000 = 3000$

$P_L = 4100/3000 \times 100 = 136.7$

**Paasche price index:**

Numerator: $7 \times 180 + 3 \times 480 + 12 \times 120 = 1260 + 1440 + 1440 = 4140$

Denominator: $5 \times 180 + 2 \times 480 + 10 \times 120 = 900 + 960 + 1200 = 3060$

$P_P = 4140/3060 \times 100 = 135.3$

**Fisher price index:**

$P_F = \sqrt{136.7 \times 135.3} = \sqrt{18\,496.5} = 136.0$

(b) **Laspeyres quantity index:**

Numerator: $180 \times 5 + 480 \times 2 + 120 \times 10 = 900 + 960 + 1200 = 3060$

Denominator: $200 \times 5 + 500 \times 2 + 100 \times 10 = 1000 + 1000 + 1000 = 3000$

$Q_L = 3060/3000 \times 100 = 102.0$

(c) Laspeyres (136.7) > Paasche (135.3) because:
- Laspeyres uses base-period quantities and does not account for consumers substituting away from
  goods that became relatively more expensive (fish and bread prices rose more than cloth)
- Paasche uses current-period quantities, which reflect the substitution toward cloth (whose
  relative price rose least)
- The substitution effect means consumers buy more of the relatively cheaper good, and Paasche
  captures this, giving a lower inflation measure

</details>

<details>
<summary>Problem 8: Gini Coefficient with Redistribution</summary>

Country X has the following income distribution before and after a progressive tax and transfer
policy:

**Before policy:**

| Quintile | Income Share |
|----------|-------------|
| Bottom 20% | 4% |
| Second 20% | 9% |
| Third 20% | 15% |
| Fourth 20% | 22% |
| Top 20% | 50% |

**After policy:**

| Quintile | Income Share |
|----------|-------------|
| Bottom 20% | 8% |
| Second 20% | 12% |
| Third 20% | 17% |
| Fourth 20% | 24% |
| Top 20% | 39% |

(a) Calculate the Gini coefficient before and after the policy.

(b) How effective is the policy at reducing inequality?

(c) What are the limitations of using the Gini coefficient to evaluate this policy?

(a) **Before policy:** Cumulative income: 0, 4, 13, 28, 50, 100

$G_{\text{before}} = 1 - [0.2(4) + 0.2(17) + 0.2(41) + 0.2(78) + 0.2(150)]/100$
$= 1 - [0.8 + 3.4 + 8.2 + 15.6 + 30.0]/100 = 1 - 58.0/100 = 0.420$

**After policy:** Cumulative income: 0, 8, 20, 37, 61, 100

$G_{\text{after}} = 1 - [0.2(8) + 0.2(28) + 0.2(57) + 0.2(98) + 0.2(161)]/100$
$= 1 - [1.6 + 5.6 + 11.4 + 19.6 + 32.2]/100 = 1 - 70.4/100 = 0.296$

(b) The Gini coefficient fell from 0.420 to 0.296, a reduction of 0.124 (a 29.5% decrease in
the Gini). This represents a significant reduction in income inequality. The policy doubled the
bottom quintile's share from 4% to 8% and reduced the top quintile's share from 50% to 39%.

(c) Limitations:
- The Gini coefficient does not show where in the distribution the change occurred (it could be
  a transfer from the fourth quintile to the second, rather than from the top to the bottom)
- It does not reflect changes in absolute income levels (if the policy reduces everyone's income
  proportionally, the Gini is unchanged but welfare falls)
- It is insensitive to changes at the very top of the distribution (the super-rich)
- It does not capture non-income dimensions of inequality (wealth, education, health)
- The policy may have incentive effects (reduced labour supply, tax avoidance) that the Gini
  does not reflect

</details>

<details>
<summary>Problem 9: CBA with Sensitivity Analysis</summary>

A government is evaluating a public transport project. The base-case estimates (in millions of USD)
are:

- Initial cost (Year 0): 800
- Annual operating cost: 30
- Annual benefits: 120 (time savings, reduced congestion, lower emissions)
- Project life: 20 years
- Discount rate: 6%

(a) Calculate the NPV and BCR.

(b) Recalculate the NPV if annual benefits are 20% lower than estimated.

(c) Recalculate the NPV if the discount rate is 8%.

(d) What is the minimum annual benefit required for the project to break even (NPV $= 0$)?

(a) Net annual benefit $= 120 - 30 = 90$.

$\text{NPV} = -800 + 90 \times \frac{1 - (1.06)^{-20}}{0.06} = -800 + 90 \times \frac{1 - 0.3118}{0.06}$

$\text{NPV} = -800 + 90 \times 11.470 = -800 + 1032.3 = \$232.3$ million

$\text{BCR} = \frac{120 \times 11.470}{800 + 30 \times 11.470} = \frac{1376.4}{800 + 344.1} = \frac{1376.4}{1144.1} = 1.203$

(b) Annual benefit $= 96$. Net annual benefit $= 66$.

$\text{NPV} = -800 + 66 \times 11.470 = -800 + 757.0 = -\$43.0$ million

The project is no longer viable with a 20% reduction in benefits. This highlights the importance
of accurate benefit estimation.

(c) At $r = 8\%$: annuity factor $= \frac{1 - (1.08)^{-20}}{0.08} = \frac{1 - 0.2145}{0.08} = 9.818$

$\text{NPV} = -800 + 90 \times 9.818 = -800 + 883.6 = \$83.6$ million

The project remains viable but with a significantly reduced NPV.

(d) Break-even: $-800 + B \times 11.470 = 0 \implies B = 800/11.470 = 69.7$

The net annual benefit must be at least `USD 69.7` million, meaning annual benefits must be at least
$69.7 + 30 = 99.7$ million. This is only 17% below the base-case estimate of 120, indicating the
project has limited tolerance for benefit overestimation.

</details>

<details>
<summary>Problem 10: IS-LM with Algebraic Derivation</summary>

An economy is described by:

Consumption function: $C = 100 + 0.8(Y - T)$
Investment function: $I = 200 - 10r$
Government spending: $G = 150$
Taxes: $T = 50$
Money supply: $M^s = 500$
Price level: $P = 1$
Money demand: $L = 0.5Y - 5r$

(a) Derive the IS and LM curves algebraically.

(b) Find the equilibrium output and interest rate.

(c) The government increases spending to $G = 200$. Calculate the new equilibrium and the
degree of crowding out.

(a) **IS curve:** $Y = C + I + G = 100 + 0.8(Y - 50) + 200 - 10r + 150$

$Y = 100 + 0.8Y - 40 + 200 - 10r + 150 = 410 + 0.8Y - 10r$

$0.2Y = 410 - 10r$

$r = 41 - 0.02Y$

**LM curve:** $M^s/P = L \implies 500 = 0.5Y - 5r$

$r = 0.1Y - 100$

(b) Setting IS $=$ LM:

$41 - 0.02Y = 0.1Y - 100$

$141 = 0.12Y$

$Y^* = 1175$

$r^* = 41 - 0.02(1175) = 41 - 23.5 = 17.5\%$

(c) New IS: $Y = 100 + 0.8(Y - 50) + 200 - 10r + 200 = 460 + 0.8Y - 10r$

$0.2Y = 460 - 10r \implies r = 46 - 0.02Y$

New equilibrium: $46 - 0.02Y = 0.1Y - 100 \implies 146 = 0.12Y \implies Y = 1216.7$

$r = 46 - 0.02(1216.7) = 46 - 24.33 = 21.67\%$

**Output change:** $\Delta Y = 1216.7 - 1175 = 41.7$

**Simple multiplier:** $1/0.2 = 5$. Without crowding out: $\Delta Y = 5 \times 50 = 250$.

**Actual change:** 41.7. Crowding out $= 250 - 41.7 = 208.3$ (83.3% of the simple multiplier
effect is crowded out).

The large crowding out occurs because the LM curve is relatively steep ($k/h = 0.5/5 = 0.1$),
meaning the interest rate rises significantly when output increases, substantially reducing
investment.

</details>

<details>
<summary>Problem 11: Break-Even and Profit Analysis</summary>

A manufacturing firm has the following cost and revenue data:

- Total fixed costs: `USD 120,000` per month
- Variable cost per unit: `USD 15`
- Selling price per unit: `USD 35`
- Maximum capacity: 15,000 units per month

(a) Calculate the break-even point in units and in revenue.

(b) Calculate the profit or loss at 80% capacity.

(c) The firm is considering a price cut to `USD 30` per unit, which is expected to increase
demand by 30%. Should the firm proceed?

(d) Calculate the margin of safety at the current price and output of 10,000 units.

(a) $Q_{\text{BE}} = \frac{120\,000}{35 - 15} = \frac{120\,000}{20} = 6000$ units

Break-even revenue $= 35 \times 6000 = \$210\,000$

(b) At 80% capacity: $Q = 0.8 \times 15\,000 = 12\,000$ units

$\pi = (35 - 15) \times 12\,000 - 120\,000 = 20 \times 12\,000 - 120\,000 = 240\,000 - 120\,000 = \$120\,000$

(c) At `USD 30` price, expected demand $= 10\,000 \times 1.3 = 13\,000$ units.

$\pi_{\text{new}} = (30 - 15) \times 13\,000 - 120\,000 = 15 \times 13\,000 - 120\,000 = 195\,000 - 120\,000 = \$75\,000$

New break-even: $Q_{\text{BE}} = 120\,000/(30 - 15) = 8000$ units

Profit falls from `USD 120,000` to `USD 75,000`. The firm should NOT proceed with the price cut.
Although revenue increases ($30 \times 13\,000 = \$390\,000$ vs. $35 \times 10\,000 = \$350\,000$),
the contribution margin per unit falls from $20$ to $15$, and the profit decline outweighs the
volume gain.

(d) Margin of safety $= (10\,000 - 6000)/10\,000 \times 100 = 40\%$

The firm can absorb a 40% decline in output before reaching the break-even point.

</details>

## Measuring Development Indicators: Quantitative Methods (HL Extension)

### Gender-Related Development Index (GDI) Calculation

The GDI adjusts the HDI for gender disparities. The calculation involves computing separate HDI
values for males and females:

$$\text{GDI} = \left(\frac{\text{HDI}_f^{1-\epsilon} + \text{HDI}_m^{1-\epsilon}}{2}\right)^{\frac{1}{1-\epsilon}}$$

Where $\epsilon$ is an aversion-to-inequality parameter. The UNDP uses $\epsilon = 2$, which
gives the GDI as the harmonic mean of the male and female HDI values:

$$\text{GDI} = \left(\frac{1}{\text{HDI}_f^{-1} + \text{HDI}_m^{-1}} \times 2\right)^{-1} = \frac{2 \times \text{HDI}_f \times \text{HDI}_m}{\text{HDI}_f + \text{HDI}_m}$$

The GDI is bounded between 0 and the overall HDI. A GDI equal to the HDI indicates perfect
gender parity.

**Worked example:**

Country X has $\text{HDI}_f = 0.700$ and $\text{HDI}_m = 0.850$, overall $\text{HDI} = 0.780$.

$$\text{GDI} = \frac{2 \times 0.700 \times 0.850}{0.700 + 0.850} = \frac{1.190}{1.550} = 0.768$$

The GDI (0.768) is below the HDI (0.780), indicating that gender inequality reduces overall
human development. The gender development gap is $(0.780 - 0.768)/0.780 = 1.5\%$.

### Poverty Gap Calculations

Given a poverty line $z$ and the incomes of poor individuals $y_1, y_2, \ldots, y_q$:

**Headcount ratio:**

$$P_0 = \frac{q}{N}$$

**Poverty gap index:**

$$P_1 = \frac{1}{N} \sum_{i=1}^{q} \frac{z - y_i}{z}$$

**Squared poverty gap (severity):**

$$P_2 = \frac{1}{N} \sum_{i=1}^{q} \left(\frac{z - y_i}{z}\right)^2$$

The Foster-Greer-Thorbecke class $P_\alpha$ generalises these:

$$P_\alpha = \frac{1}{N} \sum_{i=1}^{q} \left(\frac{z - y_i}{z}\right)^\alpha$$

Where $\alpha \geq 0$ is the poverty aversion parameter. Higher $\alpha$ gives more weight to
the poorest.

**Worked example:** Poverty line $z = \$1000$. Population $N = 5$. Incomes below the line:
$y_1 = 800$, $y_2 = 500$, $y_3 = 200$.

$P_0 = 3/5 = 0.60$ (60% of the population is poor)

$P_1 = \frac{1}{5}\left(\frac{1000-800}{1000} + \frac{1000-500}{1000} + \frac{1000-200}{1000}\right) = \frac{1}{5}(0.2 + 0.5 + 0.8) = \frac{1.5}{5} = 0.30$

$P_2 = \frac{1}{5}(0.2^2 + 0.5^2 + 0.8^2) = \frac{1}{5}(0.04 + 0.25 + 0.64) = \frac{0.93}{5} = 0.186$

The poverty gap of 0.30 means the average shortfall from the poverty line, as a fraction of the
poverty line, averaged over the entire population, is 30%. The squared gap of 0.186 indicates
that poverty is concentrated among the deeply poor (the person earning $200 has a much larger
squared gap contribution than the person earning $800).

### Real vs. Nominal: Comprehensive Worked Example

A country's nominal data and CPI are:

| Year | Nominal GDP ($bn) | CPI (2015 = 100) | Population (m) |
|------|-------------------|-------------------|----------------|
| 2015 | 800               | 100               | 40             |
| 2018 | 1000              | 115               | 42             |
| 2021 | 1200              | 130               | 45             |

(a) Calculate real GDP, real GDP per capita, and GDP growth for each year.

(b) Calculate the inflation rate between 2015--2018 and 2018--2021.

(c) Did living standards improve between 2015 and 2021?

(a)

| Year | Real GDP ($bn) | Real GDP per capita ($) |
|------|---------------|------------------------|
| 2015 | 800/1.00 = 800.0 | 800,000/40 = 20,000 |
| 2018 | 1000/1.15 = 869.6 | 869,600/42 = 20,705 |
| 2021 | 1200/1.30 = 923.1 | 923,100/45 = 20,513 |

Real GDP growth 2015--2018: $(869.6 - 800)/800 \times 100 = 8.7\%$

Real GDP growth 2018--2021: $(923.1 - 869.6)/869.6 \times 100 = 6.2\%$

(b) Inflation 2015--2018: $(115 - 100)/100 \times 100 = 15.0\%$

Inflation 2018--2021: $(130 - 115)/115 \times 100 = 13.0\%$

(c) Real GDP per capita rose from $20,000 to $20,705 (2015--2018) then fell to $20,513
(2018--2021). The net change from 2015 to 2021 is an increase of $513, or 2.6%. Living
standards improved slightly, but the improvement was modest and partially reversed. The
population grew faster than real GDP in the later period, reducing per capita gains.

### Common Pitfalls in Quantitative Development Measurement

- Using arithmetic mean instead of geometric mean for the HDI. Since 2010, the UNDP uses the
  geometric mean to prevent perfect scores in one dimension from compensating for very low
  scores in another
- Comparing Gini coefficients across countries without standardising for household size and
  income measurement methodology
- Confusing $P_0$ (headcount) with $P_1$ (poverty gap). Two countries can have the same
  headcount ratio but very different poverty depths
- Using the poverty gap to make distributional judgements without considering the squared
  gap. The squared gap reveals whether poverty is concentrated among the very poorest
- Forgetting that the Gini coefficient is a relative measure. Two countries with very different
  average incomes can have the same Gini coefficient

## Additional Practice Problems

<details>
<summary>Problem 12: Fisher Index and Substitution Bias</summary>

A consumer buys three goods. The data are:

| Good | $P_0$ | $Q_0$ | $P_1$ | $Q_1$ |
|------|-------|-------|-------|-------|
| Rice | 2     | 100   | 3     | 80    |
| Milk | 3     | 50    | 4     | 45    |
| Eggs | 5     | 30    | 6     | 35    |

(a) Calculate the Laspeyres and Paasche price indices.

(b) Calculate the Fisher price index.

(c) Which index provides a better measure of inflation? Explain the substitution bias.

(d) If a worker's nominal wage was `USD 500` in the base period, what real wage does each index
imply in period 1?

(a) **Laspeyres:**

$P_L = \frac{3 \times 100 + 4 \times 50 + 6 \times 30}{2 \times 100 + 3 \times 50 + 5 \times 30} \times 100$

$= \frac{300 + 200 + 180}{200 + 150 + 150} \times 100 = \frac{680}{500} \times 100 = 136.0$

**Paasche:**

$P_P = \frac{3 \times 80 + 4 \times 45 + 6 \times 35}{2 \times 80 + 3 \times 45 + 5 \times 35} \times 100$

$= \frac{240 + 180 + 210}{160 + 135 + 175} \times 100 = \frac{630}{470} \times 100 = 134.0$

(b) **Fisher:**

$P_F = \sqrt{136.0 \times 134.0} = \sqrt{18\,224} = 135.0$

(c) The Laspeyres index (136.0) overstates inflation because it uses base-period quantities,
  which do not account for consumer substitution away from goods whose relative prices rose most
  (rice, whose price rose 50%). The Paasche index (134.0) uses current-period quantities, which
  reflect the substitution toward eggs (whose relative price rose least, 20%).

The Fisher index (135.0) provides the best single measure because it is the geometric mean of
  Laspeyres and Paasche, satisfying the time-reversal test.

(d) **Using Laspeyres:** Real wage $= 500 \times 100/136.0 = \$367.65$

**Using Paasche:** Real wage $= 500 \times 100/134.0 = \$373.13$

**Using Fisher:** Real wage $= 500 \times 100/135.0 = \$370.37$

The choice of index affects the measured change in living standards. Using Laspeyres (which
  overstates inflation) understates the real wage by more than using Paasche.

</details>

<details>
<summary>Problem 13: NPV with Probabilistic Outcomes</summary>

A government is evaluating two mutually exclusive projects:

**Project A:** certain costs and benefits.
- Cost: `USD 200` million (Year 0)
- Annual benefit: `USD 40` million (Years 1--10)
- Discount rate: 8%

**Project B:** uncertain benefits.
- Cost: `USD 200` million (Year 0)
- Annual benefit: `USD 30` million with probability 0.4, `USD 60` million with probability 0.6
  (Years 1--10)
- Discount rate: 8%

(a) Calculate the NPV of Project A.

(b) Calculate the expected NPV of Project B.

(c) Which project should the government choose? Discuss the risk implications.

(a) Annuity factor for 10 years at 8%: $\frac{1 - (1.08)^{-10}}{0.08} = \frac{1 - 0.4632}{0.08} = 6.710$

$\text{NPV}_A = -200 + 40 \times 6.710 = -200 + 268.4 = \$68.4$ million

(b) Expected annual benefit $= 0.4 \times 30 + 0.6 \times 60 = 12 + 36 = \$48$ million

$\text{NPV}_B = -200 + 48 \times 6.710 = -200 + 322.1 = \$122.1$ million

(c) Project B has a higher expected NPV ($122.1$ million vs. $68.4$ million) and should be
  preferred on expected value grounds.

However, risk considerations matter:

- Project A has no risk (certain benefits)
- Project B has uncertainty: there is a 40% chance that annual benefits are only $30 million,
  giving $\text{NPV} = -200 + 30 \times 6.710 = -200 + 201.3 = \$1.3$ million (barely positive)

The government's risk tolerance determines the choice:
- **Risk-neutral:** choose Project B (higher expected NPV)
- **Risk-averse:** may prefer Project A despite lower expected NPV, because it avoids the 40%
  chance of near-zero returns

The standard deviation of Project B's NPV:

$\text{NPV}_{\text{low}} = -200 + 30 \times 6.710 = 1.3$
$\text{NPV}_{\text{high}} = -200 + 60 \times 6.710 = 202.6$

$E[\text{NPV}] = 0.4 \times 1.3 + 0.6 \times 202.6 = 0.52 + 121.56 = 122.08$

$\text{Var}(\text{NPV}) = 0.4(1.3 - 122.08)^2 + 0.6(202.6 - 122.08)^2 = 0.4(14\,524) + 0.6(6\,481)$
$= 5\,810 + 3\,889 = 9\,699$

$\text{SD}(\text{NPV}) = \sqrt{9\,699} = \$98.5$ million

The coefficient of variation $= 98.5/122.1 = 0.81$, indicating substantial risk relative to
expected return.

</details>

## Sensitivity Analysis (HL Extension)

### What is Sensitivity Analysis?

**Sensitivity analysis** examines how the results of an economic calculation (typically NPV or CBA)
change when one or more input variables are varied. It identifies which variables have the greatest
impact on the outcome and therefore require the most accurate estimation.

### One-Way Sensitivity Analysis

Each variable is changed individually while holding all others constant. The results are typically
presented in a sensitivity table or tornado diagram.

**Example:** A project has NPV that depends on three variables:

- Discount rate (base case: 8%)
- Annual benefit (base case: USD 50 million)
- Project life (base case: 10 years)

| Variable | Pessimistic | Base | Optimistic |
|---|---|---|---|
| Discount rate = 5% | -- | USD 68.4m | -- |
| Discount rate = 8% | -- | USD 68.4m | -- |
| Discount rate = 12% | -- | USD 68.4m | -- |
| Annual benefit = USD 40m | USD 8.4m | USD 68.4m | USD 128.4m |
| Annual benefit = USD 60m | -- | -- | -- |
| Project life = 5 years | USD 20.0m | USD 68.4m | USD 102.6m |
| Project life = 15 years | -- | -- | -- |

Recalculating with each variable changed to pessimistic and optimistic values:

**Discount rate 5%:** annuity factor (10 years) $= 7.722$. NPV $= -200 + 50 \times 7.722 = 186.1$ million
**Discount rate 12%:** annuity factor (10 years) $= 5.650$. NPV $= -200 + 50 \times 5.650 = 82.5$ million

**Annual benefit USD 40m:** NPV $= -200 + 40 \times 6.710 = 68.4$ million
**Annual benefit USD 60m:** NPV $= -200 + 60 \times 6.710 = 202.6$ million

**Project life 5 years (8%):** annuity factor $= 3.993$. NPV $= -200 + 50 \times 3.993 = -0.4$ million
**Project life 15 years (8%):** annuity factor $= 8.559$. NPV $= -200 + 50 \times 8.559 = 228.0$ million

**Sensitivity ranking (by NPV range):**

1. Project life: USD -0.4m to USD 228.0m (range: 228.4m) -- most sensitive
2. Annual benefit: USD 68.4m to USD 202.6m (range: 134.2m)
3. Discount rate: USD 82.5m to USD 186.1m (range: 103.6m) -- least sensitive

The project is most sensitive to the project life assumption.

### Scenario Analysis

Scenario analysis changes multiple variables simultaneously to reflect coherent "stories" about the
future:

| Scenario | Discount rate | Annual benefit | Project life | NPV |
|---|---|---|---|---|
| Pessimistic | 12% | USD 40m | 5 years | -48.0m |
| Base | 8% | USD 50m | 10 years | 68.4m |
| Optimistic | 5% | USD 60m | 15 years | 363.1m |

The pessimistic scenario yields a negative NPV, suggesting the project is risky.

### Break-Even Analysis

A special case of sensitivity analysis that identifies the critical value at which NPV = 0.

**Break-even annual benefit:**

$0 = -200 + B \times 6.710 \implies B = 200/6.710 = 29.8$ million

The annual benefit must exceed USD 29.8 million (60% of the base case) for the project to be viable.

**Break-even project life:**

$0 = -200 + 50 \times \text{AF}(n, 8\%)$

$\text{AF}(n, 8\%) = 4.0$

Solving: $\frac{1 - 1.08^{-n}}{0.08} = 4.0 \implies 1 - 1.08^{-n} = 0.32 \implies 1.08^{-n} = 0.68$

$n = -\frac{\ln 0.68}{\ln 1.08} = \frac{0.3857}{0.0770} = 5.01$ years

The project must last at least 5 years to break even.

## Discounting in Cost-Benefit Analysis: Advanced Topics (HL Extension)

### Social Discount Rate

The **social discount rate** (SDR) reflects society's preference for present over future
consumption. It is typically lower than market interest rates because:

1. Society has a longer time horizon than private individuals
2. Future generations are not represented in current markets (intergenerational equity)
3. Market rates include risk premiums that may not apply to public projects

**The Ramsey formula:**

$$r = \delta + \eta \times g$$

Where:
- $r$ = social discount rate
- $\delta$ = pure rate of time preference (how much society discounts future utility simply
  because it is in the future; Stern Review used $\delta = 0.1\%$)
- $\eta$ = elasticity of marginal utility of consumption (how quickly the marginal value of
  consumption declines as income rises; typically $\eta \in [1, 2]$)
- $g$ = growth rate of per capita consumption

**Numerical comparison:**

Stern Review (2006): $\delta = 0.1\%$, $\eta = 1$, $g = 1.3\%$: $r = 0.1 + 1.3 = 1.4\%$

Nordhaus (2007): $\delta = 3\%$, $\eta = 2$, $g = 1.3\%$: $r = 3 + 2.6 = 5.6\%$

The difference between a 1.4% and 5.6% discount rate has dramatic implications for long-term
projects:

Present value of USD 1 billion received in 100 years:

At 1.4%: $1/(1.014)^{100} = 1/4.06 = 0.246$ billion (USD 246 million)
At 5.6%: $1/(1.056)^{100} = 1/258.5 = 0.004$ billion (USD 4 million)

The Stern discount rate values benefits 100 years hence at 60 times the Nordhaus rate.

### Hyperbolic Discounting

**Hyperbolic discounting** describes the empirical observation that individuals discount the
near future at a much higher rate than the distant future:

$$\text{Hyperbolic: } d(t) = \frac{1}{(1 + \alpha t)^{\beta/\alpha}}$$

vs. exponential discounting:

$$\text{Exponential: } d(t) = \frac{1}{(1 + r)^t}$$

**Implications:**

1. **Time inconsistency:** individuals plan to save more in the future than they actually do
   (the "planning fallacy"). In period 0, they prefer USD 110 in period 2 to USD 100 in period 1.
   But in period 1, they prefer USD 100 immediately to USD 110 in period 2
2. **Commitment devices:** hyperbolic discounting explains demand for commitment mechanisms
   (pension plans with penalties for early withdrawal, Christmas savings clubs)
3. **Environmental policy:** hyperbolic discounting implies even stronger arguments for
   immediate climate action, because near-term costs are overweighted relative to long-term
   benefits

### Shadow Pricing

When market prices do not reflect true social costs and benefits (due to externalities, taxes,
subsidies, or market failures), **shadow prices** are used in CBA to estimate the true
economic value.

**Examples:**

1. **Unemployed labour:** the opportunity cost of employing an unemployed worker is not the
   market wage but the value of their leisure time plus any unemployment benefits they
   forgo. Shadow wage $< $ market wage
2. **Foreign exchange:** in developing countries with overvalued exchange rates, the shadow
   exchange rate exceeds the official rate
3. **Environmental costs:** carbon emissions have a social cost (the social cost of carbon, or
   SCC) that exceeds the market price of carbon (if a carbon price exists at all). The US
   Interagency Working Group estimated SCC at USD 51/tonne (2020)

## Regression Analysis Basics (HL Extension)

### Simple Linear Regression

**The regression model:**

$$Y_i = \beta_0 + \beta_1 X_i + \epsilon_i$$

Where:
- $Y_i$ = dependent variable (the variable being explained)
- $X_i$ = independent variable (the explanatory variable)
- $\beta_0$ = intercept (the value of $Y$ when $X = 0$)
- $\beta_1$ = slope coefficient (the change in $Y$ for a one-unit change in $X$)
- $\epsilon_i$ = error term (the difference between the actual and predicted value of $Y$)

**Ordinary Least Squares (OLS) estimation:**

The OLS estimator minimises the sum of squared residuals:

$$\min_{\beta_0, \beta_1} \sum_{i=1}^{n} (Y_i - \hat{\beta}_0 - \hat{\beta}_1 X_i)^2$$

The OLS estimators are:

$$\hat{\beta}_1 = \frac{\sum(X_i - \bar{X})(Y_i - \bar{Y})}{\sum(X_i - \bar{X})^2} = \frac{\text{Cov}(X, Y)}{\text{Var}(X)}$$

$$\hat{\beta}_0 = \bar{Y} - \hat{\beta}_1 \bar{X}$$

### Goodness of Fit: $R^2$

The coefficient of determination ($R^2$) measures the proportion of the variation in $Y$
explained by the variation in $X$:

$$R^2 = 1 - \frac{\text{SSR}}{\text{SST}} = 1 - \frac{\sum(Y_i - \hat{Y}_i)^2}{\sum(Y_i - \bar{Y})^2}$$

$R^2 \in [0, 1]$: $R^2 = 0$ means $X$ explains none of the variation in $Y$; $R^2 = 1$ means
$X$ explains all of the variation.

**Adjusted $R^2$** accounts for the number of regressors:

$$\bar{R}^2 = 1 - \frac{\text{SSR}/(n - k - 1)}{\text{SST}/(n - 1)}$$

Where $k$ is the number of independent variables and $n$ is the sample size.

### Numerical Example: Consumption Function

An economist estimates the consumption function $C = \beta_0 + \beta_1 Y_d + \epsilon$ using
the following data:

| Observation | Disposable income ($Y_d$, USD thousands) | Consumption ($C$, USD thousands) |
|---|---|---|
| 1 | 10 | 8 |
| 2 | 20 | 15 |
| 3 | 30 | 22 |
| 4 | 40 | 28 |
| 5 | 50 | 35 |

$\bar{X} = 30$, $\bar{Y} = 21.6$

$\sum(X_i - \bar{X})(Y_i - \bar{Y})$:

$= (-20)(-13.6) + (-10)(-6.6) + (0)(0.4) + (10)(6.4) + (20)(13.4)$
$= 272 + 66 + 0 + 64 + 268 = 670$

$\sum(X_i - \bar{X})^2 = 400 + 100 + 0 + 100 + 400 = 1000$

$\hat{\beta}_1 = 670/1000 = 0.67$

$\hat{\beta}_0 = 21.6 - 0.67 \times 30 = 21.6 - 20.1 = 1.5$

Estimated consumption function: $\hat{C} = 1.5 + 0.67 Y_d$

The MPC is 0.67, and autonomous consumption is USD 1,500.

$R^2$ calculation:

Predicted values: $\hat{Y} = 1.5 + 0.67X$

| $X$ | $Y$ | $\hat{Y}$ | $(Y - \hat{Y})^2$ | $(Y - \bar{Y})^2$ |
|---|---|---|---|---|
| 10 | 8 | 8.2 | 0.04 | 184.96 |
| 20 | 15 | 14.9 | 0.01 | 43.56 |
| 30 | 22 | 21.6 | 0.16 | 0.16 |
| 40 | 28 | 28.3 | 0.09 | 40.96 |
| 50 | 35 | 35.0 | 0.00 | 179.56 |

$\text{SSR} = 0.30$, $\text{SST} = 449.20$

$R^2 = 1 - 0.30/449.20 = 0.999$

$R^2 = 0.999$: the model explains 99.9% of the variation in consumption. (This is an artificially
clean example with constructed data.)

## Correlation vs. Causation (HL Extension)

### The Fundamental Distinction

**Correlation** measures the strength and direction of the linear relationship between two variables.
**Causation** means that a change in one variable directly causes a change in another.

$$r_{XY} = \frac{\text{Cov}(X, Y)}{\sigma_X \sigma_Y}$$

$r_{XY} \in [-1, 1]$: $r = 1$ (perfect positive correlation), $r = -1$ (perfect negative
correlation), $r = 0$ (no linear correlation).

### Why Correlation Does Not Imply Causation

1. **Reverse causality:** $Y$ causes $X$ rather than $X$ causing $Y$. Example: higher police
   presence is correlated with higher crime rates, but crime causes police deployment, not the
   reverse
2. **Omitted variable bias (confounding):** a third variable $Z$ causes both $X$ and $Y$.
   Example: ice cream sales ($X$) and drowning deaths ($Y$) are positively correlated, but both
   are caused by hot weather ($Z$)
3. **Spurious correlation:** two variables are correlated by coincidence, with no causal
   connection. Example: the number of people who drown by falling into a pool correlates with
   the number of films starring Nicolas Cage
4. **Simultaneity:** $X$ and $Y$ cause each other simultaneously. Example: income and education
   are correlated because education increases income (human capital theory) and higher income
   enables more education (affordability)

### Establishing Causation

To establish causation, economists use:

1. **Randomised controlled trials (RCTs):** randomly assign treatment and control groups to
   isolate the causal effect. Gold standard but expensive and not always feasible
2. **Natural experiments:** events that randomly assign treatment (e.g., policy changes that
   affect only some regions)
3. **Instrumental variables:** find a variable $Z$ that affects $Y$ only through $X$ (the
   exclusion restriction)
4. **Difference-in-differences:** compare changes in outcomes between treatment and control
   groups before and after a policy change
5. **Regression discontinuity design:** exploit sharp thresholds in policy rules to compare
   outcomes just above and below the threshold

### Omitted Variable Bias: Formal Treatment

If the true model is $Y = \beta_0 + \beta_1 X + \beta_2 Z + \epsilon$ but we estimate
$\tilde{Y} = \tilde{\beta}_0 + \tilde{\beta}_1 X + u$, then:

$$\tilde{\beta}_1 = \beta_1 + \beta_2 \frac{\text{Cov}(X, Z)}{\text{Var}(X)}$$

The omitted variable bias depends on:
- $\beta_2$: the effect of $Z$ on $Y$
- $\text{Cov}(X, Z)/\text{Var}(X)$: the relationship between $X$ and $Z$

The bias is zero if either $\beta_2 = 0$ ($Z$ does not affect $Y$) or $\text{Cov}(X, Z) = 0$
($X$ and $Z$ are uncorrelated).

**Numerical example:**

True model: test score $= 5 + 0.5(\text{study hours}) + 0.3(\text{sleep hours}) + \epsilon$

If we omit sleep hours and study hours and sleep hours are positively correlated
($\text{Cov} = 2$, $\text{Var}(\text{study hours}) = 10$):

OVB on study hours coefficient $= 0.3 \times 2/10 = 0.06$

$\tilde{\beta}_1 = 0.5 + 0.06 = 0.56$

The estimated effect of study hours is biased upward by 0.06 because study hours and sleep
hours are positively correlated, and we are attributing some of the effect of sleep to study.

## Index Number Chaining (HL Extension)

### The Chain-Linking Problem

When constructing index numbers over long periods, the fixed-base approach (using a single base
year) becomes increasingly inaccurate because the basket of goods and relative prices change over
time. **Chain-linking** addresses this by calculating the index as the product of period-to-period
changes.

**Fixed-base index:**

$$I_t = \frac{\sum P_{i,t} Q_{i,0}}{\sum P_{i,0} Q_{i,0}} \times 100$$

**Chain-linked index:**

$$I_t = I_{t-1} \times \frac{\sum P_{i,t} Q_{i,t-1}}{\sum P_{i,t-1} Q_{i,t-1}}$$

Or equivalently:

$$I_t = I_0 \times \prod_{s=1}^{t} \frac{\sum P_{i,s} Q_{i,s-1}}{\sum P_{i,s-1} Q_{i,s-1}}$$

### Why Chain-Linking Matters

**Substitution bias:** when the price of a good rises, consumers substitute away from it. A
fixed-base index (Laspeyres) overstates the cost of living because it uses the old (pre-price
change) basket, which overweights the now-more-expensive good.

**New goods bias:** fixed-base indices cannot incorporate new goods until the base is updated.
Chain-linked indices incorporate new goods as soon as they appear in the basket.

**Quality change:** improvements in quality mean that a price increase may reflect improved
quality rather than pure inflation. Chain-linked indices allow more frequent quality adjustments.

### Numerical Example: Chain-Linked CPI

An economy consumes two goods: food and housing.

| Year | Price of food | Quantity of food | Price of housing | Quantity of housing |
|---|---|---|---|---|
| 2020 | 10 | 100 | 50 | 20 |
| 2021 | 12 | 90 | 55 | 20 |
| 2022 | 11 | 95 | 60 | 18 |

**Fixed-base (Laspeyres) index with 2020 base:**

2021: $I_{2021} = \frac{12 \times 100 + 55 \times 20}{10 \times 100 + 50 \times 20} \times 100 = \frac{1200 + 1100}{1000 + 1000} \times 100 = \frac{2300}{2000} \times 100 = 115.0$

2022: $I_{2022} = \frac{11 \times 100 + 60 \times 20}{10 \times 100 + 50 \times 20} \times 100 = \frac{1100 + 1200}{2000} \times 100 = \frac{2300}{2000} \times 100 = 115.0$

Inflation 2020--2021 = 15.0%. Inflation 2021--2022 = 0.0%.

**Chain-linked index:**

2021: $I_{2021} = 100 \times \frac{12 \times 100 + 55 \times 20}{10 \times 100 + 50 \times 20} = 100 \times \frac{2300}{2000} = 115.0$

2022: $I_{2022} = 115.0 \times \frac{11 \times 90 + 60 \times 20}{12 \times 90 + 55 \times 20} = 115.0 \times \frac{990 + 1200}{1080 + 1100}$

$= 115.0 \times \frac{2190}{2180} = 115.0 \times 1.0046 = 115.5$

Chain-linked inflation 2021--2022 = 0.46%.

The chain-linked index shows positive inflation (0.46%) while the fixed-base index shows zero
inflation. The difference arises because the chain-linked index uses the 2021 basket (which
reflects the substitution away from food toward housing), while the fixed-base index uses the
2020 basket.

**Paasche index for comparison:**

2022 Paasche: $\frac{11 \times 95 + 60 \times 18}{10 \times 95 + 50 \times 18} = \frac{1045 + 1080}{950 + 900} = \frac{2125}{1850} = 114.9$

The Paasche index (using current weights) gives 114.9, slightly lower than both the Laspeyres
and chain-linked results.

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

(c) Perform one-way sensitivity analysis varying the annual benefit to USD 2 billion and
   USD 4 billion.

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
discount rate.

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

| Observation | Unemployment rate ($u$, %) | Inflation rate ($\pi$, %) |
|---|---|---|
| 1 | 3 | 6 |
| 2 | 5 | 4 |
| 3 | 7 | 3 |
| 4 | 8 | 2 |
| 5 | 10 | 1 |

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
|---|---|---|---|---|
| 3 | 6 | 5.74 | 0.068 | 7.84 |
| 5 | 4 | 4.33 | 0.109 | 0.64 |
| 7 | 3 | 2.92 | 0.006 | 0.04 |
| 8 | 2 | 2.21 | 0.044 | 1.44 |
| 10 | 1 | 0.80 | 0.040 | 4.84 |

$\text{SSR} = 0.267$, $\text{SST} = 14.80$

$R^2 = 1 - 0.267/14.80 = 0.982$

$R^2 = 0.982$: the unemployment rate explains 98.2% of the variation in inflation.

(c) The negative coefficient (-0.706) confirms the inverse relationship between unemployment and
inflation predicted by the Phillips curve. A 1 percentage point increase in unemployment is
associated with a 0.7 percentage point decrease in inflation.

**Potential omitted variable:** expected inflation ($\pi^e$). The expectations-augmented Phillips
curve is:

$$\pi = \pi^e - \beta(u - u_n) + \epsilon$$

Omitting $\pi^e$ biases the coefficient on $u$ if expected inflation is correlated with
unemployment. During the 1970s, rising expected inflation shifted the Phillips curve upward,
creating stagflation (high inflation and high unemployment simultaneously), which the simple
Phillips curve cannot explain.

</details>

<details>
<summary>Problem 11: Correlation, Causation, and Omitted Variable Bias</summary>

A researcher finds that countries with higher chocolate consumption per capita have more Nobel
laureates per capita. The correlation coefficient is $r = 0.79$.

(a) Calculate $R^2$ and interpret it.

(b) Identify the most likely source of the correlation (reverse causality, omitted variable, or
   spurious).

(c) Explain how omitted variable bias could affect a regression of Nobel laureates on chocolate
   consumption.

(a) $R^2 = r^2 = 0.79^2 = 0.624$

64.2% of the variation in Nobel laureates per capita is associated with variation in chocolate
consumption per capita.

(b) This is almost certainly an **omitted variable** problem. The likely confounding variables
include:

- GDP per capita (richer countries can afford both more chocolate and more research funding)
- Education spending (better-educated populations both consume more chocolate and produce more
   research)
- Institutional quality (strong institutions support both consumption diversity and research)
- Climate (Northern European countries have higher chocolate consumption and strong research
  institutions)

The correlation is **not spurious** in the strict sense because there are genuine causal chains
connecting the omitted variables to both chocolate consumption and Nobel prizes.

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

To establish causation, the researcher could use an instrumental variable (e.g., a measure of
cocoa production that affects chocolate consumption but not Nobel prizes directly) or a natural
experiment (e.g., a chocolate tax in one country).

</details>

<details>
<summary>Problem 12: Social Discount Rate and Climate Policy</summary>

A climate policy reduces carbon emissions at a cost of USD 2 trillion today. The benefits are
avoided climate damages of USD 100 billion per year, starting in 20 years and continuing forever.

(a) Calculate the NPV using discount rates of 1.4% (Stern), 3.5% (UK Treasury), and 5% (Nordhaus).

(b) At what discount rate does the project break even?

(c) Discuss the ethical implications of the choice of discount rate for climate policy.

(a) The benefits are a perpetuity starting in 20 years:

$\text{PV of benefits} = \frac{B}{r} \times \frac{1}{(1+r)^{20}}$

At 1.4%: $\text{PV} = \frac{100}{0.014} \times \frac{1}{1.014^{20}} = 7\,143 \times \frac{1}{1.320} = 5\,411$ billion

$\text{NPV} = -2\,000 + 5\,411 = +3\,411$ billion

At 3.5%: $\text{PV} = \frac{100}{0.035} \times \frac{1}{1.035^{20}} = 2\,857 \times \frac{1}{1.990} = 1\,436$ billion

$\text{NPV} = -2\,000 + 1\,436 = -564$ billion

At 5%: $\text{PV} = \frac{100}{0.05} \times \frac{1}{1.05^{20}} = 2\,000 \times \frac{1}{2.653} = 754$ billion

$\text{NPV} = -2\,000 + 754 = -1\,246$ billion

The project is justified at the Stern rate but not at higher rates.

(b) Break-even: $0 = -2\,000 + \frac{100}{r(1+r)^{20}}$

$\frac{100}{r(1+r)^{20}} = 2\,000$

$r(1+r)^{20} = 0.05$

Solving by trial: at $r = 2.0\%$: $0.02 \times 1.486 = 0.0297$ (too low)
At $r = 2.5\%$: $0.025 \times 1.639 = 0.0410$ (closer)
At $r = 2.3\%$: $0.023 \times 1.588 = 0.0365$
At $r = 2.2\%$: $0.022 \times 1.562 = 0.0344$
At $r = 2.15\%$: $0.0215 \times 1.549 = 0.0333$

The break-even discount rate is approximately 2.1--2.2%.

(c) The choice of discount rate for climate policy has profound ethical implications:

1. **Intergenerational equity:** a high discount rate effectively places near-zero value on the
   welfare of future generations. At 5%, USD 1 of damage in 100 years is worth USD 0.008 today
2. **Pure time preference:** Stern's low $\delta$ (0.1%) reflects the ethical view that future
   lives should be valued equally to current lives. Nordhaus's higher $\delta$ (3%) reflects the
   empirical observation that people do discount the future
3. **Uncertainty:** climate damages are highly uncertain and potentially catastrophic (fat tails).
   Standard discounting may understate the expected cost of low-probability, high-impact events
4. **Irreversibility:** climate change involves irreversible tipping points. Standard NPV
   analysis does not adequately account for the option value of preserving flexibility

</details>

## Common Pitfalls: Quantitative Economics (Comprehensive)

- Confusing the discount rate with the interest rate. The social discount rate reflects social
  time preference, not the market interest rate
- Using the wrong formula for a perpetuity vs. a finite annuity. A perpetuity has an infinite
  time horizon: $\text{PV} = C/r$. An annity is finite: $\text{PV} = C \times \text{AF}(n, r)$
- Ignoring sensitivity analysis. Presenting a single NPV without sensitivity analysis gives a
  false sense of precision
- Assuming that $R^2$ measures causation. A high $R^2$ does not mean the independent variable
  causes the dependent variable; it only measures the strength of the linear association
- Confusing the Laspeyres and Paasche indices. Laspeyres uses base-year quantities (overstates
  inflation); Paasche uses current-year quantities (understates inflation)
- Forgetting that chain-linking and Fisher indices reduce but do not eliminate substitution bias
- Applying the simple Phillips curve to periods of stagflation. The expectations-augmented
  Phillips curve is needed when expected inflation is changing
- Ignoring the base year when comparing index numbers. Index values are relative to the base;
  the choice of base year affects the level (though not the percentage change between periods)

## Multiple Regression Analysis (HL Extension)

### The Multiple Regression Model

$$Y_i = \beta_0 + \beta_1 X_{1i} + \beta_2 X_{2i} + \cdots + \beta_k X_{ki} + \epsilon_i$$

The OLS estimators minimise $\sum_{i=1}^{n} (Y_i - \hat{\beta}_0 - \hat{\beta}_1 X_{1i} - \cdots - \hat{\beta}_k X_{ki})^2$.

### Hypothesis Testing in Regression

**t-test for individual coefficients:**

$$t = \frac{\hat{\beta}_j - 0}{\text{SE}(\hat{\beta}_j)}$$

If $|t| > t_{\text{critical}}$, reject $H_0: \beta_j = 0$ at the chosen significance level.

**F-test for overall significance:**

$$F = \frac{\text{MSR}}{\text{MSE}} = \frac{\text{SSR}/k}{\text{SSE}/(n-k-1)}$$

If $F > F_{\text{critical}}(k, n-k-1)$, reject $H_0: \beta_1 = \beta_2 = \cdots = \beta_k = 0$.

### Multicollinearity

**Multicollinearity** occurs when two or more independent variables are highly correlated with
each other. This inflates the standard errors of the coefficients, making it difficult to
identify the individual effect of each variable.

**Detection:**

1. **Correlation matrix:** pairwise correlations between independent variables exceeding 0.8
   suggest multicollinearity
2. **Variance Inflation Factor (VIF):**

$$\text{VIF}_j = \frac{1}{1 - R_j^2}$$

Where $R_j^2$ is the $R^2$ from regressing $X_j$ on all other independent variables.
$\text{VIF} > 10$ indicates severe multicollinearity.

**Consequences:**

- Coefficients are still unbiased but have large standard errors
- Coefficients may be statistically insignificant even when the variables are jointly significant
- Small changes in the data can cause large changes in the estimated coefficients

**Solutions:**

1. Drop one of the correlated variables
2. Combine correlated variables (e.g., create an index)
3. Collect more data
4. Use ridge regression or other regularisation techniques (beyond IB scope)

### Numerical Example: Multiple Regression

An economist estimates the demand for coffee:

$Q = \beta_0 + \beta_1 P + \beta_2 I + \epsilon$

Where $Q$ = quantity of coffee demanded, $P$ = price, $I$ = income.

Data:

| Observation | $Q$ | $P$ | $I$ |
|---|---|---|---|
| 1 | 100 | 5 | 50 |
| 2 | 80 | 8 | 50 |
| 3 | 120 | 3 | 60 |
| 4 | 90 | 7 | 55 |
| 5 | 110 | 4 | 65 |

Using OLS (via matrix algebra or software), the estimated regression is:

$\hat{Q} = 124.5 - 8.1P + 0.9I$

Standard errors: (18.2) (1.5) (0.4)

$R^2 = 0.96$, $\bar{R}^2 = 0.92$, $n = 5$, $k = 2$

**Interpretation:**

- $\hat{\beta}_1 = -8.1$: a USD 1 increase in price reduces quantity demanded by 8.1 units,
  holding income constant. The price elasticity at the mean: $\epsilon_P = -8.1 \times \bar{P}/\bar{Q} = -8.1 \times 5.4/100 = -0.44$ (inelastic)
- $\hat{\beta}_2 = 0.9$: a USD 1 increase in income increases quantity demanded by 0.9 units.
  Income elasticity: $\epsilon_I = 0.9 \times \bar{I}/\bar{Q} = 0.9 \times 56/100 = 0.50$ (normal good, income inelastic)

**t-tests:**

$t_1 = -8.1/1.5 = -5.4$. $|t| > t_{0.025,2} = 4.30$. Significant at 5%.
$t_2 = 0.9/0.4 = 2.25$. $|t| < 4.30$. Not significant at 5% (but would be with more data).

**F-test:**

$F = \frac{R^2/k}{(1-R^2)/(n-k-1)} = \frac{0.96/2}{0.04/2} = 24.0$. $F_{0.05}(2,2) = 19.0$.

$F > 19.0$: the model is jointly significant at the 5% level.

## Cost-Benefit Analysis: Real Options (HL Extension)

### The Real Options Approach

Traditional NPV analysis assumes an irreversible investment decision made at a single point in
time. The **real options** approach recognises that managers have flexibility to adapt their
decisions as new information becomes available.

**Types of real options:**

1. **Option to delay:** wait for more information before investing. Valuable when uncertainty
   is high and the investment is irreversible
2. **Option to expand:** invest in a small-scale project with the option to expand if successful
3. **Option to abandon:** the ability to abandon a project and recover some of the investment
4. **Option to switch:** the flexibility to switch inputs or outputs as conditions change

### Option Value of Waiting

The value of the option to delay is the difference between the NPV with flexibility and the
NPV without flexibility:

$$\text{Option value} = \text{NPV}_{\text{with flexibility}} - \text{NPV}_{\text{without flexibility}}$$

### Numerical Example

A government is considering building a new airport. The cost is USD 10 billion. The expected
annual revenue is USD 800 million. The discount rate is 8%.

**Traditional NPV:**

Annuity factor (perpetuity): $1/0.08 = 12.5$

$\text{NPV} = -10 + 0.8 \times 12.5 = -10 + 10 = 0$

The NPV is exactly zero: the government is indifferent.

**With uncertainty:** there is a 50% chance that demand is high (revenue = USD 1.2 billion/year)
and a 50% chance that demand is low (revenue = USD 0.4 billion/year). The government can wait
one year to observe demand before deciding.

**Option to delay:**

If the government waits:

Year 0: no investment.

Year 1: observe demand. If high: invest (NPV at year 1 $= -10 + 1.2/0.08 = -10 + 15 = 5$ billion).
If low: do not invest (NPV $= 0$).

Expected NPV (at year 0): $0.5 \times 5/(1.08) + 0.5 \times 0 = 2.31$ billion.

The option to wait is worth USD 2.31 billion, compared to USD 0 for immediate investment.
The government should wait.

**The value of flexibility:** even though the expected NPV of immediate investment is zero
(the same as the expected NPV of the uncertain project), the option to wait has positive
value because it eliminates the downside risk (the USD 0.4 billion/year scenario).

### Option Value and Irreversibility

The option value of waiting is larger when:

1. **Uncertainty is high:** more uncertainty means more information to be gained by waiting
2. **The investment is irreversible:** if the investment can be reversed (recovered), there
   is no value in waiting
3. **The discount rate is low:** a low discount rate increases the present value of future
   information

$$\text{Option value} \propto \frac{\text{Uncertainty} \times \text{Irreversibility}}{\text{Discount rate}}$$

**Policy implication:** governments should not rush into large, irreversible investments
(infrastructure, climate policy) when there is significant uncertainty. Waiting for better
information can be optimal even when the expected NPV is positive.

## Worked Examples: Quantitative Economics (Additional)

<details>
<summary>Problem 13: Multiple Regression and Multicollinearity</summary>

An economist estimates the determinants of GDP growth:

$\text{Growth} = \beta_0 + \beta_1 \text{Investment} + \beta_2 \text{Education} + \beta_3 \text{Trade} + \epsilon$

Data (10 observations, standardised variables):

| Variable | Coefficient | Std. Error | t-stat | VIF |
|---|---|---|---|---|
| Intercept | 2.5 | 0.8 | 3.13 | -- |
| Investment | 0.35 | 0.12 | 2.92 | 1.8 |
| Education | 0.20 | 0.15 | 1.33 | 3.2 |
| Trade | 0.18 | 0.14 | 1.29 | 3.0 |

$R^2 = 0.72$, $n = 10$, $k = 3$

(a) Test the overall significance of the regression. [3 marks]

(b) Identify any multicollinearity issues. [3 marks]

(c) The economist drops the Education variable and re-estimates:

| Variable | Coefficient | Std. Error | t-stat |
|---|---|---|---|
| Investment | 0.42 | 0.10 | 4.20 |
| Trade | 0.25 | 0.11 | 2.27 |

$R^2 = 0.65$. Compare and interpret. [4 marks]

(a) $F = \frac{R^2/k}{(1-R^2)/(n-k-1)} = \frac{0.72/3}{0.28/6} = \frac{0.24}{0.0467} = 5.14$

$F_{0.05}(3, 6) = 4.76$.

$F = 5.14 > 4.76$: the regression is jointly significant at the 5% level. At least one
coefficient is significantly different from zero.

(b) VIF values: Investment (1.8), Education (3.2), Trade (3.0). None exceeds 10, so there is
no severe multicollinearity by the standard rule. However, the VIFs for Education and Trade
(>3) suggest moderate correlation.

The moderate multicollinearity explains why Education and Trade have large standard errors
and are individually insignificant (t-stats of 1.33 and 1.29) despite the model being jointly
significant. The correlated variables are "stealing" significance from each other.

(c) After dropping Education:

- Investment coefficient increases from 0.35 to 0.42, and its standard error decreases
  (more precise estimate)
- Trade coefficient increases from 0.18 to 0.25, and becomes significant (t = 2.27)
- $R^2$ falls from 0.72 to 0.65 (expected, since a variable was removed)
- $\bar{R}^2$ original: $1 - (0.28/6)/(9/9) = 1 - 0.0467 = 0.953$. Wait, that cannot be
  right.

$\bar{R}^2 = 1 - \frac{0.28 \times 9}{9 \times 0.72} = 1 - 0.389 = 0.611$.

Actually: $\bar{R}^2 = 1 - \frac{(1-0.72)(10-1)}{10-3-1} = 1 - \frac{0.28 \times 9}{6} = 1 - 0.42 = 0.58$.

$\bar{R}^2$ new: $1 - \frac{(1-0.65)(10-1)}{10-2-1} = 1 - \frac{0.35 \times 9}{7} = 1 - 0.45 = 0.55$.

The adjusted $R^2$ falls slightly (0.58 to 0.55), suggesting that Education does add
incremental explanatory power. However, the simpler model provides clearer coefficient
estimates for Investment and Trade.

**Trade-off:** the full model has higher $\bar{R}^2$ but multicollinearity makes individual
coefficients imprecise. The simpler model has clearer coefficients but lower explanatory
power. The choice depends on whether the goal is prediction (full model) or causal
interpretation (simpler model).

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

(a) Annual benefit (expected) $= 0.4 \times 50 \times 1 + 0.6 \times 100 \times 1 = 20 + 60 = 80$ million.

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

Wait -- both scenarios yield negative NPV. The option to wait has zero value because the
project is never viable. Let me adjust the parameters.

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

1. The option value (USD 178 million) exceeds the immediate investment NPV (USD 1,668 million)
   only by a small margin, but waiting eliminates the 40% chance of investing in a
   money-losing project
2. The expected NPV of waiting (1,778) is higher than the NPV of immediate investment (1,668)

Wait, that contradicts. Let me recheck:

Immediate NPV $= +1668$. Wait NPV $= 1778$. $1778 > 1668$, so waiting is better.

The option value is $1778 - 1668 = 110$ million. The government gains USD 110 million in
expected value by waiting, because it avoids investing in the unfavourable scenario.

**Key insight:** even when the expected NPV of immediate investment is positive, waiting can
be optimal when the investment is irreversible and there is uncertainty. The option to
avoid the unfavourable scenario has positive value.

</details>
