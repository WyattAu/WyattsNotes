---
title: National Income and Macroeconomic Indicators
description: "DSE Economics notes on national income and macroeconomic indicators covering GDP measurement, inflation, unemployment, economic growth, and living standards."
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Economics
categories:
  - DSE
  - Economics
slug: national-income-and-macroeconomic-indicators
---

## National Income Concepts

### Gross Domestic Product (GDP)

GDP is the total market value of all final goods and services produced within a country's borders
during a given time period (typically one year).

Key attributes:

- **Territorial principle:** GDP counts production within the country's geographic borders,
  regardless of the nationality of the producer. A German-owned factory operating in Hong Kong
  contributes to Hong Kong's GDP, not Germany's.
- **Final goods and services:** Only final goods (those sold to the end user) are counted.
  Intermediate goods (goods used as inputs in the production of other goods) are excluded to avoid
  double counting. The value of intermediate goods is already embedded in the value of the final
  good.
- **Market value:** Goods and services are valued at their market prices. Non-market activities
  (household work, volunteer work) are excluded unless imputed.
- **Within a time period:** GDP is a flow variable measured over a specific period (quarter or
  year), not a stock variable at a point in time.

### GDP vs GNP vs GNI

| Measure                      | Definition                                                                                                                   | Focus                   |
| ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| GDP (Gross Domestic Product) | Value of output produced within a country's borders                                                                          | Location of production  |
| GNP (Gross National Product) | GDP plus net income from abroad (income earned by residents from overseas minus income earned by non-residents domestically) | Nationality of producer |
| GNI (Gross National Income)  | Same concept as GNP; the modern terminology used by international organisations (World Bank, IMF)                            | Nationality of producer |

$$\mathrm{GNP{} = \mathrm{GDP{} + \mathrm{Net factor income from abroad{}$$

$$\mathrm{Net factor income from abroad{} = \mathrm{Income earned by residents from abroad{} - \mathrm{Income paid to non-residents{}$$

**Hong Kong example:** Many Hong Kong firms have operations and investments in mainland China and
Southeast Asia. The income from these overseas operations is counted in Hong Kong's GNP but not in
its GDP. Conversely, profits earned by foreign-owned firms operating in Hong Kong are counted in
Hong Kong's GDP but not in its GNP. Historically, Hong Kong's GNP has been larger than its GDP
because net factor income from abroad has been positive.

### Net Domestic Product (NDP) and Net National Product (NNP)

$$\mathrm{NDP{} = \mathrm{GDP{} - \mathrm{Depreciation{}$$

$$\mathrm{NNP{} = \mathrm{GNP{} - \mathrm{Depreciation{}$$

Depreciation (capital consumption allowance) is the wear and tear on capital stock during the
production process. NDP measures the net output available after maintaining the existing capital
stock. NDP is a better measure of sustainable production than GDP because it accounts for the
capital consumed in the production process.

### Personal Income and Disposable Income

$$\mathrm{Personal Income{} = \mathrm{National Income{} - \mathrm{Undistributed corporate profit{} - \mathrm{Corporate tax{} - \mathrm{Social security contributions{} + \mathrm{Transfer payments{}$$

$$\mathrm{Disposable Income{} = \mathrm{Personal Income{} - \mathrm{Personal income tax{}$$

Disposable income is the income households have available for spending (consumption) and saving
after paying taxes. It is the most relevant measure for analysing household behaviour.

---

## Nominal GDP vs Real GDP

### Nominal GDP

Nominal GDP is GDP measured at current market prices. It changes when either output quantities or
prices change (or both).

$$\mathrm{Nominal GDP{} = \sum_{i=1}^{n} P_{i,t} \times Q_{i,t}$$

### Real GDP

Real GDP is GDP measured at constant (base-year) prices. It changes only when output quantities
change, holding prices constant. Real GDP is the preferred measure for comparing output across time
because it strips out the effect of price changes (inflation).

$$\mathrm{Real GDP{} = \sum_{i=1}^{n} P_{i,\mathrm{base{}} \times Q_{i,t}$$

### GDP Deflator

The GDP deflator is a broad measure of the price level that captures the prices of all goods and
services included in GDP.

$$\mathrm{GDP Deflator{} = \frac{\mathrm{Nominal GDP{}}{\mathrm{Real GDP{}} \times 100$$

The GDP deflator measures the change in prices of all domestically produced final goods and
services. Unlike the Consumer Price Index (CPI), which covers a basket of consumer goods, the GDP
deflator covers investment goods, government services, and exports, but excludes imports.

**Inflation rate from the GDP deflator:**

$$\mathrm{Inflation rate{} = \frac{\mathrm{GDP Deflator{}_t - \mathrm{GDP Deflator{}_{t-1}}{\mathrm{GDP Deflator{}_{t-1}} \times 100\%$$

### Worked Example: Nominal vs Real GDP

| Good | 2024 Price (USD) | 2024 Quantity | 2025 Price (USD) | 2025 Quantity |
| ---- | ---------------- | ------------- | ---------------- | ------------- |
| A    | 10               | 100           | 12               | 110           |
| B    | 20               | 50            | 25               | 45            |

Using 2024 as the base year:

Nominal GDP 2024 = `10 \times 100 + 20 \times 50 = 1000 + 1000 = 2000`

Nominal GDP 2025 = `12 \times 110 + 25 \times 45 = 1320 + 1125 = 2445`

Real GDP 2024 = `10 \times 100 + 20 \times 50 = 2000` (same as nominal in base year)

Real GDP 2025 = `10 \times 110 + 20 \times 45 = 1100 + 900 = 2000`

GDP Deflator 2024 = `2000 / 2000 \times 100 = 100`

GDP Deflator 2025 = `2445 / 2000 \times 100 = 122.25`

Inflation rate = `(122.25 - 100) / 100 \times 100\% = 22.25\%`

Real GDP growth rate = `(2000 - 2000) / 2000 \times 100\% = 0\%`

Output did not grow in real terms; the entire increase in nominal GDP was due to price increases.

---

## Methods of Measuring GDP

### 1. Expenditure Approach

GDP is measured as the total spending on final goods and services produced within the country.

$$\mathrm{GDP{} = C + I + G + (X - M)$$

| Component                 | Description                                                                                                                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `C` (Consumption)         | Household spending on goods and services (durable goods, non-durable goods, services). The largest component of GDP in most economies.                                                                            |
| `I` (Investment)          | Spending on capital goods (machinery, factories, equipment), changes in inventories, and residential construction. This is gross domestic investment, NOT financial investment (buying stocks/bonds).             |
| `G` (Government spending) | Government spending on goods and services (infrastructure, education, defence, public sector wages). Excludes transfer payments (welfare, pensions) because they do not represent payment for current production. |
| `X` (Exports)             | Spending by foreigners on domestically produced goods and services. Added because they are produced domestically.                                                                                                 |
| `M` (Imports)             | Spending by domestic residents on foreign-produced goods and services. Subtracted because they are not produced domestically.                                                                                     |

$$\mathrm{Net exports{} = X - M$$

A trade surplus (`X \gt M`) adds to GDP. A trade deficit (`X \lt M`) subtracts from GDP.

### 2. Income Approach

GDP is measured as the sum of all incomes earned by factors of production in producing output.

$$\mathrm{GDP{} = W + R + I + P + \mathrm{Indirect taxes{} - \mathrm{Subsidies{} + \mathrm{Depreciation{}$$

| Component      | Description                                                                          |
| -------------- | ------------------------------------------------------------------------------------ |
| `W` (Wages)    | Compensation of employees (salaries, wages, benefits)                                |
| `R` (Rent)     | Rental income from land and property                                                 |
| `I` (Interest) | Interest income earned from lending capital                                          |
| `P` (Profit)   | Profit earned by entrepreneurs (both corporate profit and proprietor's income)       |
| Indirect taxes | Taxes on production (sales tax, VAT, excise duty) that are included in market prices |
| Subsidies      | Government payments to producers that reduce market prices                           |
| Depreciation   | Capital consumption allowance                                                        |

**Why add indirect taxes and subtract subsidies?** GDP is measured at market prices, which include
indirect taxes but exclude subsidies. Factor incomes (wages, rent, interest, profit) are measured at
factor cost (before indirect taxes, after subsidies). To convert from factor cost to market prices:
add indirect taxes and subtract subsidies.

### 3. Output (Value-Added) Approach

GDP is measured as the sum of the value added by every firm in the economy.

$$\mathrm{Value added{} = \mathrm{Value of output{} - \mathrm{Value of intermediate inputs{}$$

This method avoids double counting by only counting the additional value created at each stage of
production.

**Example: Bread production chain**

| Stage          | Value of Output (USD) | Value of Intermediate Inputs (USD) | Value Added (USD) |
| -------------- | --------------------- | ---------------------------------- | ----------------- |
| Farmer (wheat) | 100                   | 0                                  | 100               |
| Miller (flour) | 150                   | 100                                | 50                |
| Baker (bread)  | 250                   | 150                                | 100               |
| **Total**      | **500**               | **250**                            | **250**           |

GDP = sum of value added = `100 + 50 + 100 = 250`. The value of final output (bread) = `250`. Both
methods give the same result, confirming that the value-added approach avoids double counting.

### Equivalence of the Three Approaches

All three approaches yield the same GDP figure because every unit of output is either purchased by
someone (expenditure approach), generates income for someone (income approach), or represents value
created at some stage of production (value-added approach).

<details>
<summary>Worked Example: Value-Added Approach</summary>

A car manufacturer's production chain:

| Stage          | Sales Value (USD) | Intermediate Inputs (USD) | Value Added (USD) |
| -------------- | ----------------- | ------------------------ | ----------------- |
| Steel mill     | 5,000             | 0                        | 5,000             |
| Glass factory  | 2,000             | 0                        | 2,000             |
| Tyre factory   | 1,500             | 0                        | 1,500             |
| Car assembly   | 20,000            | 8,500                    | 11,500            |
| **Total**      | **28,500**        | **8,500**                | **20,000**        |

GDP = sum of value added = `5,000 + 2,000 + 1,500 + 11,500 = 20,000`.

Alternatively, value of final output (car) = USD 20,000. Same result.

</details>

---

## GDP Per Capita and Standard of Living

$$\mathrm{GDP per capita{} = \frac{\mathrm{GDP{}}{\mathrm{Population{}}$$

GDP per capita is a rough indicator of the average economic well-being of a country's population.
Higher GDP per capita generally correlates with higher standards of living: better healthcare,
education, infrastructure, and life expectancy.

However, GDP per capita is an average and can be misleading:

- It does not reflect income distribution. A country with high GDP per capita but extreme inequality
  may have a large population living in poverty.
- It does not account for non-market activities (household work, volunteer work).
- It does not measure environmental quality, leisure time, or political freedom.

---

## Limitations of GDP as a Welfare Measure

GDP is a measure of economic activity, not a direct measure of welfare or well-being. Its
limitations are significant and systematic:

### 1. Non-Market Activities Excluded

GDP excludes goods and services that are not exchanged in markets:

- Household production (cooking, cleaning, childcare, home maintenance)
- Volunteer work
- The informal economy (unregistered businesses, barter transactions)

In economies with large informal sectors (developing countries), GDP significantly understates
actual economic activity.

### 2. Externalities Not Accounted For

GDP does not subtract the costs of negative externalities (pollution, congestion, resource
depletion). A factory that produces USD 1 million of output while causing USD 500,000 in
environmental damage contributes USD 1 million to GDP, not USD 500,000. GDP can grow while
environmental quality deteriorates.

### 3. Income Distribution Ignored

GDP per capita is a mean. If income is highly concentrated, the median income may be far below the
mean. Two countries with identical GDP per capita can have vastly different distributions of
well-being.

### 4. Leisure Time Not Valued

If a country's workforce reduces its working hours from 50 to 40 hours per week (with the same
output per hour), GDP falls, but well-being may increase because people have more leisure time. GDP
treats all time not spent producing marketed output as having zero value.

### 5. Quality Changes Not Captured

GDP measures the value of output, not its quality. A smartphone that costs USD 500 today is far more
capable than a USD 500 phone from ten years ago, but GDP does not fully capture this quality
improvement.

### 6. Sustainable vs Unsustainable Growth Not Distinguished

GDP does not distinguish between growth driven by sustainable productivity improvements and growth
driven by depleting natural resources or accumulating debt. A country can boost GDP by deforesting
its land (selling timber) or overfishing its waters, but this growth is not sustainable.

### 7. Defensive Expenditures Counted Positively

Spending on repairing damage (flood defences, pollution cleanup, crime prevention) adds to GDP, even
though it represents a cost rather than a genuine improvement in welfare.

---

## Unemployment

### Definition and Measurement

The unemployment rate is the percentage of the labour force that is actively seeking work but unable
to find it.

$$\mathrm{Unemployment rate{} = \frac{\mathrm{Number of unemployed{}}{\mathrm{Labour force{}} \times 100\%$$

$$\mathrm{Labour force{} = \mathrm{Number of employed{} + \mathrm{Number of unemployed{}$$

$$\mathrm{Labour force participation rate{} = \frac{\mathrm{Labour force{}}{\mathrm{Working-age population{}} \times 100\%$$

**Key definitions:**

- **Employed:** A person who worked at least one hour for pay or profit in the reference week, or
  was temporarily absent from work (illness, holiday, strike).
- **Unemployed:** A person who was not employed during the reference week, was available for work,
  and had actively sought work in the past four weeks.
- **Not in the labour force:** A person who is neither employed nor unemployed (students, retirees,
  homemakers, discouraged workers who have stopped looking for work).

### Types of Unemployment

| Type       | Cause                                                                  | Solution                                    | Duration          |
| ---------- | ---------------------------------------------------------------------- | ------------------------------------------- | ----------------- |
| Frictional | Normal turnover in the labour market; time between jobs                | Better job matching, job search assistance  | Short-term        |
| Structural | Mismatch between workers' skills/location and job requirements         | Retraining, relocation subsidies, education | Long-term         |
| Cyclical   | Insufficient aggregate demand during economic downturns                | Expansionary fiscal/monetary policy         | Varies with cycle |
| Seasonal   | Regular seasonal fluctuations in demand (tourism, agriculture, retail) | Difficult to eliminate entirely             | Predictable       |

**Frictional unemployment** is inevitable and even desirable in a dynamic economy. It reflects the
normal process of workers moving between jobs to find better matches. Some frictional unemployment
indicates a healthy, flexible labour market.

**Structural unemployment** is more serious because it reflects a fundamental mismatch in the
economy. Technological change (automation replacing labour) and globalisation (manufacturing moving
to lower-cost countries) are major drivers. Structural unemployment tends to be long-term and
requires retraining or relocation, which is costly and time-consuming.

**Cyclical unemployment** rises during recessions and falls during expansions. It is directly linked
to the business cycle and is the primary target of macroeconomic stabilisation policy.

**Seasonal unemployment** is predictable and occurs in industries where demand fluctuates with the
seasons (agriculture, tourism, retail during holidays). It is not usually considered a policy
problem.

<details>
<summary>Worked Example: Unemployment Rate Calculations</summary>

An economy has a working-age population of 8 million. Employed = 4.8 million. Unemployed = 0.3 million.
The rest are not in the labour force.

Labour force = `4.8 + 0.3 = 5.1` million.

Unemployment rate = `0.3 / 5.1 \times 100\% = 5.88\%`.

Labour force participation rate = `5.1 / 8.0 \times 100\% = 63.75\%`.

If 0.1 million discouraged workers start looking for work:

New labour force = 5.2 million. New unemployed = 0.4 million.

New unemployment rate = `0.4 / 5.2 \times 100\% = 7.69\%`.

The unemployment rate **rises** even though no one lost a job, because previously uncounted
individuals now enter the labour force as unemployed.

</details>

### Natural Rate of Unemployment (NRU)

The natural rate of unemployment (also called the non-accelerating inflation rate of unemployment,
NAIRU) is the unemployment rate that prevails when the economy is at full employment.

$$\mathrm{NRU{} = \mathrm{Frictional unemployment{} + \mathrm{Structural unemployment{}$$

At the NRU, cyclical unemployment is zero. The economy is producing at its potential output
(full-employment output). The NRU is not zero because frictional and structural unemployment always
exist.

**Full employment does NOT mean zero unemployment.** It means cyclical unemployment is zero.

### Costs of Unemployment

| Cost Type  | Description                                                                                                                                                                                                      |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Economic   | Lost output (GDP gap): goods and services that could have been produced but were not. Okun's law: for every 1% that the actual unemployment rate exceeds the NRU, GDP falls by approximately 2% below potential. |
| Fiscal     | Reduced tax revenue and increased government spending on unemployment benefits and social welfare. Government budget deteriorates.                                                                               |
| Personal   | Loss of income, skill deterioration (especially for long-term unemployed), reduced self-esteem, mental and physical health problems.                                                                             |
| Social     | Increased crime rates, social unrest, family breakdown, inequality.                                                                                                                                              |
| Hysteresis | Long-term unemployment can raise the natural rate itself (workers lose skills and become unemployable, reducing the economy's productive capacity).                                                              |

---

## Inflation

### Definition

Inflation is a sustained increase in the general price level over time. A single price increase is
not inflation; inflation refers to a broad-based, persistent rise in prices.

$$\mathrm{Inflation rate{} = \frac{P_t - P_{t-1}}{P_{t-1}} \times 100\%$$

### Measurement: Consumer Price Index (CPI)

The CPI measures the change in the price of a fixed basket of goods and services typically purchased
by a representative household.

$$\mathrm{CPI{}_t = \frac{\mathrm{Cost of basket in year {} t}{\mathrm{Cost of basket in base year{}} \times 100$$

$$\mathrm{Inflation rate{} = \frac{\mathrm{CPI{}_t - \mathrm{CPI{}_{t-1}}{\mathrm{CPI{}_{t-1}} \times 100\%$$

**Limitations of the CPI:**

1. **Substitution bias:** The CPI uses a fixed basket, but consumers substitute away from goods
   whose prices rise (toward cheaper alternatives). The CPI overstates inflation because it does not
   account for this substitution effect.
2. **Quality bias:** If the quality of a good improves and its price rises, the CPI records the full
   price increase as inflation, even though part of the increase reflects a quality improvement.
3. **New product bias:** New goods are not immediately included in the basket, so the CPI misses the
   price decline that typically accompanies new products as they become established.
4. **Outlet bias:** The CPI may not fully capture the shift to lower-cost retail channels (online
   shopping, discount stores).

### Types of Inflation

**Demand-pull inflation:** Caused by excess aggregate demand relative to aggregate supply. When
total spending in the economy exceeds the economy's productive capacity, prices are bid up.

$$\mathrm{AD{} \gt \mathrm{LRAS{} \implies P \mathrm{ rises{}$$

Triggers include: expansionary fiscal policy, expansionary monetary policy, rising consumer
confidence, export boom.

**Cost-push inflation:** Caused by increases in production costs that shift the short-run aggregate
supply curve leftward.

$$\mathrm{SRAS shifts left{} \implies P \mathrm{ rises, {} Q \mathrm{ falls{}$$

Triggers include: rising wages (wage-price spiral), rising oil/commodity prices, supply chain
disruptions, currency depreciation (imported inflation).

### Effects and Consequences of Inflation

| Group Affected          | Effect of Unanticipated Inflation                                                            |
| ----------------------- | -------------------------------------------------------------------------------------------- |
| Savers                  | Lose purchasing power; the real value of their savings falls                                 |
| Borrowers               | Benefit; repay loans in money that is worth less than when borrowed                          |
| Fixed-income earners    | Lose; wages and pensions fixed in nominal terms do not keep up with rising prices            |
| Flexible-income earners | May keep up if wages are indexed to inflation; otherwise lose                                |
| Government (as debtor)  | Benefits; the real value of outstanding government debt falls                                |
| Taxpayers               | May be pushed into higher tax brackets (bracket creep) even if real income has not increased |

**Shoe-leather costs:** The cost of time and effort spent managing money holdings to minimise the
inflation tax (more frequent trips to the bank, holding less cash).

**Menu costs:** The cost of frequently changing prices (reprinting menus, catalogues, price tags,
updating computer systems).

**Uncertainty:** Unpredictable inflation makes long-term planning difficult. Firms are less willing
to invest, and consumers are less willing to save.

**Redistribution:** Inflation arbitrarily redistributes wealth from lenders to borrowers, from
savers to spenders. This redistribution is not based on merit or need.

**Hyperinflation:** Extremely high inflation (often defined as exceeding 50% per month) destroys the
functions of money as a store of value and medium of exchange. People abandon the currency and
resort to barter or foreign currencies. Historical examples: Germany (1923), Zimbabwe (2008),
Venezuela (2018).

---

## Phillips Curve

### Short-Run Phillips Curve

The Phillips curve describes an inverse relationship between the rate of inflation and the rate of
unemployment in the short run. Lower unemployment is associated with higher inflation, and vice
versa.

This trade-off arises because lower unemployment means tighter labour markets, which push up wages.
Higher wages increase production costs, which firms pass on to consumers as higher prices.
Conversely, higher unemployment means slack in the labour market, which restrains wage growth and
inflation.

### Long-Run Phillips Curve

In the long run, there is no trade-off between inflation and unemployment. The long-run Phillips
curve is vertical at the natural rate of unemployment (NRU).

**Reasoning (adaptive expectations):** If the government tries to keep unemployment below the NRU by
running expansionary policy, inflation rises. Initially, workers do not anticipate the higher
inflation, so they accept jobs at what they believe are higher real wages (money illusion). Once
workers realise that prices have risen, they demand higher nominal wages to compensate. This shifts
the SRAS curve left, returning unemployment to the NRU but at a higher inflation rate. The economy
moves up along the long-run vertical Phillips curve.

### Diagram Description: Short-Run and Long-Run Phillips Curves

```text
  Inflation
    |
    |    SRPC_2
    |   /
    |  /    SRPC_1
    | /    /
    |/    /
    +----|----- Unemployment
        NRU
```

The LRPC is a vertical line at `NRU`. Each SRPC shows the short-run trade-off. Starting at the
intersection of `SRPC_1` and `LRPC`, expansionary policy moves the economy left along `SRPC_1`
(lower unemployment, higher inflation). Once expectations adjust, `SRPC_1` shifts up to `SRPC_2`,
and unemployment returns to `NRU` at a higher inflation rate.

---

## Economic Growth

### Actual vs Potential Growth

**Actual economic growth:** An increase in the economy's real output (real GDP) from one period to
the next. Measured by the real GDP growth rate.

**Potential economic growth:** An increase in the economy's productive capacity (the maximum output
the economy can produce when all resources are fully and efficiently employed). Represented by an
outward shift of the production possibility curve or a rightward shift of the LRAS curve.

$$\mathrm{GDP gap{} = \mathrm{Potential GDP{} - \mathrm{Actual GDP{}$$

A positive GDP gap (actual output below potential) indicates a recessionary gap. A negative GDP gap
(actual output above potential) indicates an inflationary gap.

### Sources of Economic Growth

| Source                     | Description                                                                                                                                                                                                   |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Capital accumulation       | Increasing the quantity and quality of physical capital (machinery, factories, infrastructure). Investment raises the capital stock and productivity.                                                         |
| Human capital development  | Improving the skills, knowledge, and health of the workforce through education, training, and healthcare. More skilled workers produce more output per hour.                                                  |
| Technological progress     | New production techniques, inventions, and innovations that increase productivity (output per unit of input). Endogenous growth theory emphasises R&D and innovation.                                         |
| Natural resource discovery | Finding new resources (oil, minerals) or developing new ways to use existing resources. Important for resource-rich economies.                                                                                |
| Institutional quality      | Strong property rights, rule of law, effective governance, low corruption, and efficient markets create an environment conducive to growth.                                                                   |
| Population growth          | A larger labour force increases total output, though not necessarily output per capita. Growth in the working-age population relative to dependents (favourable demographic structure) boosts GDP per capita. |
| Trade and openness         | Access to larger markets, technology transfer, competitive pressure, and economies of scale through international trade.                                                                                      |

### Productivity

Productivity measures the efficiency with which inputs are converted into output.

$$\mathrm{Labour productivity{} = \frac{\mathrm{Real GDP{}}{\mathrm{Total hours worked{}}$$

$$\mathrm{Total factor productivity (TFP){} = \frac{\mathrm{Total output{}}{\mathrm{Weighted combination of all inputs{}}$$

TFP captures the portion of output growth not explained by increases in capital and labour. It
reflects technological progress, organisational improvements, and better resource allocation.

Sustained increases in living standards require productivity growth, not just increases in factor
inputs. An economy that relies solely on adding more labour and capital faces diminishing returns;
only technological progress and productivity improvements can drive long-run per capita growth.

---

## Business Cycle

### Definition

The business cycle (economic cycle or trade cycle) refers to the fluctuations in economic activity
around its long-term trend. Real GDP does not grow at a constant rate; it experiences periods of
expansion and contraction.

### Phases of the Business Cycle

| Phase       | Description                                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Expansion   | Real GDP rises. Unemployment falls. Capacity utilisation increases. Inflation may begin to rise. Consumer and business confidence improves.  |
| Peak        | The highest point of the cycle. Real GDP is at or above potential. Resources are fully utilised. Inflationary pressures are strongest.       |
| Contraction | Real GDP falls. Unemployment rises. Capacity utilisation decreases. Inflation may moderate. If the contraction is severe, it is a recession. |
| Trough      | The lowest point of the cycle. Real GDP is below potential. Unemployment is high. Capacity is idle. Inventories are depleted.                |

A **recession** is commonly defined as two consecutive quarters of declining real GDP. A
**depression** is a severe, prolonged recession.

### Leading, Coincident, and Lagging Indicators

| Type       | Definition                                                   | Examples                                                                                                             |
| ---------- | ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------- |
| Leading    | Indicators that change before the economy as a whole does    | Stock market index, building permits, new orders for capital goods, consumer confidence index, yield curve inversion |
| Coincident | Indicators that move with the economy                        | Industrial production, retail sales, non-farm payrolls, GDP                                                          |
| Lagging    | Indicators that change after the economy has already changed | Unemployment rate, inflation rate, interest rates, corporate profits, labour cost per unit of output                 |

The **yield curve inversion** (short-term interest rates exceed long-term rates) is one of the most
reliable leading indicators of a recession, historically preceding most US recessions.

### Diagram Description: The Business Cycle

```text
  Real GDP
    |
    |              Peak
    |             /  \
    |            /    \
    |           /      \
    |  ------+-/--------\--------- Long-term trend
    |        /            \
    |       /              \
    |      /                \
    |     /                  \
    |  Trough              Trough
    +-------------------------------- Time
```

The economy fluctuates around the long-term trend line. Peaks are above the trend; troughs are below
it.

---

## Government Budget

### Budget Balance

$$\mathrm{Budget balance{} = \mathrm{Government revenue{} - \mathrm{Government expenditure{}$$

| Outcome         | Condition               | Implication                                     |
| --------------- | ----------------------- | ----------------------------------------------- |
| Fiscal surplus  | Revenue \gt Expenditure | Government can reduce debt or increase reserves |
| Balanced budget | Revenue = Expenditure   | Neutral impact on aggregate demand              |
| Fiscal deficit  | Revenue \lt Expenditure | Government must borrow; adds to public debt     |

### Government Revenue

The primary sources of government revenue are:

| Source          | Description                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------- |
| Direct taxes    | Taxes on income and wealth: income tax, corporate tax, property tax, inheritance tax. Usually progressive.    |
| Indirect taxes  | Taxes on goods and services: sales tax, VAT, excise duties (on alcohol, tobacco, petrol). Usually regressive. |
| Non-tax revenue | Fees, fines, royalties, dividends from state-owned enterprises, land premium (significant in Hong Kong).      |

**Progressive tax:** The average tax rate rises with income. Higher-income earners pay a larger
proportion of their income in tax. Example: Hong Kong's salaries tax (maximum rate of 15% after
deductions, with a progressive rate structure from 2% to 17% before standard rate cap).

**Regressive tax:** The average tax rate falls with income. Lower-income earners pay a larger
proportion of their income in tax. Example: flat-rate indirect taxes (GST/VAT on basic goods).

**Proportional tax:** The average tax rate is constant regardless of income. Example: a flat tax at
a single rate.

### Public Debt

$$\mathrm{Public debt{} = \mathrm{Accumulated budget deficits{} - \mathrm{Accumulated budget surpluses{}$$

Public debt is the total amount the government owes to its creditors (domestic and foreign).

**Debt-to-GDP ratio:**

$$\mathrm{Debt-to-GDP ratio{} = \frac{\mathrm{Total public debt{}}{\mathrm{GDP{}} \times 100\%$$

This ratio indicates the government's ability to service its debt relative to the size of the
economy. A higher ratio signals greater fiscal risk.

### Automatic Stabilisers

Automatic stabilisers are features of the fiscal system that automatically dampen economic
fluctuations without requiring deliberate government action.

| Automatic Stabiliser   | Mechanism During Recession                                                                                                         | Mechanism During Expansion                                                                           |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Progressive income tax | As incomes fall, people move into lower tax brackets; tax revenue falls; disposable income does not fall as much as it would have. | As incomes rise, people move into higher tax brackets; tax revenue rises; dampening spending growth. |
| Unemployment benefits  | More people claim benefits; government transfers increase; disposable income of the unemployed does not fall to zero.              | Fewer people claim benefits; government transfers decrease; dampening spending growth.               |
| Welfare programmes     | More people qualify for means-tested benefits during downturns.                                                                    | Fewer people qualify during upswings.                                                                |

Automatic stabilisers reduce the amplitude of the business cycle but do not eliminate it. They work
without legislative delay, unlike discretionary fiscal policy.

---

## Common Pitfalls

1. **Confusing GDP and GNP:** GDP is production within the country (regardless of who owns the
   factors). GNP is production by a country's nationals (regardless of where production takes
   place). For a country with large overseas investments (like Hong Kong), GNP may exceed GDP.

2. **Counting intermediate goods in GDP:** Only final goods are counted. The value of flour is
   included in the price of bread; counting both would be double counting. Always use the
   value-added approach to avoid this error.

3. **Including transfer payments in the expenditure approach:** Transfer payments (pensions,
   unemployment benefits, welfare) are NOT payments for current production. They are transfers of
   purchasing power from one group to another. They are excluded from `G` in the expenditure
   approach.

4. **Including financial investment in the investment component:** Buying stocks, bonds, or existing
   property is a financial transaction, not investment in the GDP sense. GDP investment (`I`) refers
   only to spending on new physical capital (machinery, factories, new construction, and changes in
   inventories).

5. **Equating full employment with zero unemployment:** Full employment means cyclical unemployment
   is zero. The natural rate of unemployment (frictional + structural) is always positive.

6. **Assuming all inflation is demand-pull:** Inflation can also be cost-push (caused by rising
   production costs). Distinguishing between the two types is important because the appropriate
   policy response differs.

7. **Confusing nominal and real GDP growth:** If nominal GDP grows by 8% and inflation is 5%, real
   GDP grows by approximately 3%. Never compare nominal GDP across time without adjusting for
   inflation.

8. **Stating that GDP measures welfare:** GDP is a measure of market economic activity. It does not
   directly measure well-being, happiness, environmental quality, or income distribution.

9. **Ignoring the difference between recessionary and inflationary gaps:** A recessionary gap
   (actual GDP below potential) calls for expansionary policy. An inflationary gap (actual GDP above
   potential) calls for contractionary policy. Confusing the two leads to the wrong policy
   prescription.

10. **Assuming the Phillips curve trade-off is permanent:** The short-run trade-off between
    inflation and unemployment does not exist in the long run. Any attempt to permanently reduce
    unemployment below the NRU through demand management results only in accelerating inflation.

---

## Practice Problems

<details>
<summary>Question 1: GDP Calculation (Expenditure Approach)</summary>

An economy has the following data (all values in USD billion):

- Consumption expenditure: 800
- Government spending on goods and services: 200
- Gross domestic fixed capital formation: 150
- Change in inventories: 20
- Exports: 300
- Imports: 250
- Transfer payments: 100
- Wages: 600
- Indirect taxes: 80
- Subsidies: 30

(a) Calculate GDP using the expenditure approach. (b) Calculate net exports. (c) Which of the above
items would NOT be included in GDP? Explain.

(a) GDP = C + I + G + (X - M)

C = 800

I = Gross domestic fixed capital formation + Change in inventories = 150 + 20 = 170

G = 200 (government spending on goods and services only)

X - M = 300 - 250 = 50

GDP = 800 + 170 + 200 + 50 = 1220 (USD billion)

(b) Net exports = X - M = 300 - 250 = 50 (USD billion)

(c) Transfer payments (100) and wages (600), indirect taxes (80), and subsidies (30) are NOT
included directly in the expenditure approach.

Transfer payments are excluded because they are not payments for current production. They are
redistributions of existing income.

Wages are not included directly in the expenditure approach (they are part of the income approach).
Including them would double count, since wages are already reflected in consumption spending
(workers use wages to buy goods and services).

Indirect taxes and subsidies are adjustments needed when converting from factor cost to market
prices (used in the income approach), not direct components of the expenditure approach.

</details>

<details>
<summary>Question 2: Real GDP and GDP Deflator</summary>

Country X has the following data:

| Year | Nominal GDP (USD billion) | GDP Deflator (base year = 2020) |
| ---- | ------------------------- | ------------------------------- |
| 2020 | 500                       | 100                             |
| 2021 | 550                       | 105                             |
| 2022 | 630                       | 110                             |

(a) Calculate real GDP for each year. (b) Calculate the real GDP growth rate for 2021 and 2022. (c)
Calculate the inflation rate for 2021 and 2022 using the GDP deflator. (d) Did the economy grow
faster in 2021 or 2022 in real terms?

(a) Real GDP = (Nominal GDP / GDP Deflator) x 100

2020: (500 / 100) x 100 = 500

2021: (550 / 105) x 100 = 523.8

2022: (630 / 110) x 100 = 572.7

(b) Real GDP growth rate:

2021: (523.8 - 500) / 500 x 100% = 4.76%

2022: (572.7 - 523.8) / 523.8 x 100% = 9.34%

(c) Inflation rate:

2021: (105 - 100) / 100 x 100% = 5.00%

2022: (110 - 105) / 105 x 100% = 4.76%

(d) The economy grew faster in real terms in 2022 (9.34%) than in 2021 (4.76%), despite lower
inflation in 2022 (4.76% vs 5.00%). This suggests strong real output growth driven by productive
factors rather than price increases.

</details>

<details>
<summary>Question 3: CPI and Inflation</summary>

A typical household's consumption basket and prices are as follows:

| Good | Quantity (base year) | Base Year Price (USD) | Current Year Price (USD) |
| ---- | -------------------- | --------------------- | ------------------------ |
| Rice | 50 kg                | 4                     | 5                        |
| Pork | 30 kg                | 20                    | 25                       |
| Rent | 1 month              | 3000                  | 3300                     |

(a) Calculate the CPI for the current year (base year = 100). (b) Calculate the inflation rate. (c)
Explain one limitation of using this CPI to measure the cost of living.

(a) Cost of basket in base year = 50 x 4 + 30 x 20 + 1 x 3000 = 200 + 600 + 3000 = 3800

Cost of basket in current year = 50 x 5 + 30 x 25 + 1 x 3300 = 250 + 750 + 3300 = 4300

CPI = (4300 / 3800) x 100 = 113.16

(b) Inflation rate = (113.16 - 100) / 100 x 100% = 13.16%

(c) **Substitution bias:** The CPI uses a fixed basket, assuming the household buys the same
quantities regardless of price changes. In reality, if pork becomes more expensive (25 vs 20), the
household may substitute toward chicken or fish. The CPI overstates inflation by not accounting for
this substitution toward relatively cheaper goods.

</details>

<details>
<summary>Question 4: Unemployment Calculations</summary>

An economy has a working-age population of 10 million. Of these: 6 million are employed, 0.4 million
are unemployed and actively seeking work, 1.5 million are full-time students, 1.8 million are
retirees, and 0.3 million are discouraged workers (want to work but have stopped looking).

(a) Calculate the labour force. (b) Calculate the unemployment rate. (c) Calculate the labour force
participation rate. (d) If 0.1 million discouraged workers start actively seeking work, what happens
to the unemployment rate?

(a) Labour force = Employed + Unemployed = 6.0 + 0.4 = 6.4 million

(b) Unemployment rate = 0.4 / 6.4 x 100% = 6.25%

(c) Labour force participation rate = 6.4 / 10.0 x 100% = 64%

(d) When discouraged workers start seeking work, they move from "not in the labour force" to
"unemployed." The labour force increases by 0.1 million and the unemployed increase by 0.1 million.

New labour force = 6.5 million. New unemployed = 0.5 million.

New unemployment rate = 0.5 / 6.5 x 100% = 7.69%

The unemployment rate INCREASES even though no one lost a job. This is because previously uncounted
individuals are now classified as unemployed.

</details>

<details>
<summary>Question 5: Business Cycle and GDP Gap</summary>

An economy's potential GDP is USD 1,200 billion. The actual GDP and unemployment data are:

| Year | Actual GDP (USD billion) | Unemployment Rate |
| ---- | ------------------------ | ----------------- |
| 2020 | 1,200                    | 5.0%              |
| 2021 | 1,140                    | 7.0%              |
| 2022 | 1,080                    | 9.0%              |
| 2023 | 1,170                    | 6.0%              |
| 2024 | 1,230                    | 4.0%              |

The natural rate of unemployment is 5%.

(a) Calculate the GDP gap for each year. (b) Using Okun's law (1% increase in unemployment above NRU
= 2% decrease in GDP below potential), estimate the GDP gap for 2022 and compare with your
calculation in (a). (c) In which years did the economy experience an inflationary gap?

(a) GDP gap = Potential GDP - Actual GDP

| Year | Potential GDP | Actual GDP | GDP Gap | Type of Gap  |
| ---- | ------------- | ---------- | ------- | ------------ |
| 2020 | 1,200         | 1,200      | 0       | No gap       |
| 2021 | 1,200         | 1,140      | +60     | Recessionary |
| 2022 | 1,200         | 1,080      | +120    | Recessionary |
| 2023 | 1,200         | 1,170      | +30     | Recessionary |
| 2024 | 1,200         | 1,230      | -30     | Inflationary |

(b) 2022: Unemployment above NRU = 9.0% - 5.0% = 4.0%

Estimated GDP gap = 2 x 4.0% x 1,200 = 96

Actual GDP gap = 120. The estimates differ because Okun's law is an empirical approximation, not a
precise relationship. The coefficient may differ across countries and time periods.

(c) Only 2024 had an inflationary gap (actual GDP exceeded potential GDP).

</details>

<details>
<summary>Question 6: Progressive, Regressive, and Proportional Taxes</summary>

Three taxpayers earn USD 20,000, USD 50,000, and USD 100,000 respectively. The tax system is
structured as follows:

- First USD 30,000: 10%
- Next USD 30,000: 20%
- Above USD 60,000: 30%

(a) Calculate the tax paid and the average tax rate for each taxpayer. (b) Is this tax system
progressive? Explain. (c) If the government introduces a flat 15% tax on all income with a USD 5,000
exemption, is this system progressive, regressive, or proportional?

(a) Taxpayer A (USD 20,000): Tax = 20,000 x 10% = 2,000. Average tax rate = 2,000 / 20,000 = 10%.

Taxpayer B (USD 50,000): Tax = 30,000 x 10% + 20,000 x 20% = 3,000 + 4,000 = 7,000. Average tax rate
= 7,000 / 50,000 = 14%.

Taxpayer C (USD 100,000): Tax = 30,000 x 10% + 30,000 x 20% + 40,000 x 30% = 3,000 + 6,000 + 12,000
= 21,000. Average tax rate = 21,000 / 100,000 = 21%.

(b) Yes, this is a progressive tax system. The average tax rate increases with income: 10% for USD
20,000, 14% for USD 50,000, and 21% for USD 100,000. Higher-income earners pay a larger proportion
of their income in tax.

(c) Taxpayer A: Taxable income = 20,000 - 5,000 = 15,000. Tax = 15,000 x 15% = 2,250. Average tax
rate = 2,250 / 20,000 = 11.25%.

Taxpayer B: Taxable income = 50,000 - 5,000 = 45,000. Tax = 45,000 x 15% = 6,750. Average tax rate =
6,750 / 50,000 = 13.5%.

Taxpayer C: Taxable income = 100,000 - 5,000 = 95,000. Tax = 95,000 x 15% = 14,250. Average tax rate
= 14,250 / 100,000 = 14.25%.

The average tax rate increases with income (11.25% to 14.25%), so this system is **progressive**
because of the exemption. The flat rate alone would be proportional, but the fixed exemption makes
lower-income earners effectively pay a lower average rate. The exemption functions as a progressive
element.

</details>

---

## Problem Set

<details>
<summary>Problem 1: GDP Expenditure Approach</summary>

An economy has the following data (USD billion):

- Consumption: 900, Government spending on goods and services: 250
- Gross fixed capital formation: 200, Change in inventories: 30
- Exports: 350, Imports: 400
- Social security payments: 100, Wages: 700

(a) Calculate GDP. (b) Calculate net exports. (c) Which items are excluded from GDP calculation?

<details>
<summary>Solution</summary>

(a) GDP = C + I + G + (X - M) = `900 + (200 + 30) + 250 + (350 - 400) = 900 + 230 + 250 + (-50) = 1330`.

(b) Net exports = `350 - 400 = -50` billion (trade deficit).

(c) Social security payments (transfer payments -- not payment for current production) and wages (part of
income approach, not expenditure approach -- including them would double count).

</details>

If you get this wrong, revise: [Methods of Measuring GDP](#methods-of-measuring-gdp)

</details>

<details>
<summary>Problem 2: Nominal vs Real GDP</summary>

An economy produces only two goods:

| Good | 2023 Price | 2023 Qty | 2024 Price | 2024 Qty |
| ---- | ---------- | -------- | ---------- | -------- |
| X    | 5          | 200      | 6          | 220      |
| Y    | 10         | 100      | 12         | 90       |

Using 2023 as the base year:

(a) Calculate nominal and real GDP for both years. (b) Calculate the GDP deflator and inflation rate
for 2024. (c) Calculate the real GDP growth rate.

<details>
<summary>Solution</summary>

(a) Nominal 2023 = `5 \times 200 + 10 \times 100 = 1000 + 1000 = 2000`.
Nominal 2024 = `6 \times 220 + 12 \times 90 = 1320 + 1080 = 2400`.
Real 2023 = `5 \times 200 + 10 \times 100 = 2000`.
Real 2024 = `5 \times 220 + 10 \times 90 = 1100 + 900 = 2000`.

(b) GDP deflator 2023 = `2000/2000 \times 100 = 100`.
GDP deflator 2024 = `2400/2000 \times 100 = 120`.
Inflation rate = `(120 - 100)/100 \times 100\% = 20\%`.

(c) Real GDP growth = `(2000 - 2000)/2000 \times 100\% = 0\%`.

Real output did not grow; the entire increase in nominal GDP was due to inflation.

</details>

If you get this wrong, revise: [Nominal GDP vs Real GDP](#nominal-gdp-vs-real-gdp)

</details>

<details>
<summary>Problem 3: CPI Calculation</summary>

A household's basket (base year quantities): 40 kg rice at USD 3/kg, 20 kg chicken at USD 10/kg, 1
month rent at USD 2000.

Current year prices: rice USD 4/kg, chicken USD 12/kg, rent USD 2200.

(a) Calculate the CPI. (b) Calculate the inflation rate. (c) Identify one limitation of this CPI
measurement.

<details>
<summary>Solution</summary>

(a) Base year cost = `40 \times 3 + 20 \times 10 + 1 \times 2000 = 120 + 200 + 2000 = 2320`.
Current year cost = `40 \times 4 + 20 \times 12 + 1 \times 2200 = 160 + 240 + 2200 = 2600`.
CPI = `2600/2320 \times 100 = 112.07`.

(b) Inflation rate = `(112.07 - 100)/100 \times 100\% = 12.07\%`.

(c) **Substitution bias:** The CPI assumes the household buys the same quantities regardless of price
changes. If chicken rises from 10 to 12, the household may substitute toward fish or pork. The CPI
overstates the true cost of living increase.

</details>

If you get this wrong, revise: [Measurement: Consumer Price Index (CPI)](#measurement-consumer-price-index-cpi)

</details>

<details>
<summary>Problem 4: GDP vs GNP</summary>

Country K has GDP of USD 500 billion. Its residents earn USD 80 billion from investments abroad. Foreign
residents earn USD 30 billion from investments within Country K.

(a) Calculate GNP. (b) Does Country K have positive or negative net factor income from abroad? (c) Why
might GDP and GNP differ significantly for Hong Kong?

<details>
<summary>Solution</summary>

(a) GNP = GDP + Net factor income from abroad = `500 + (80 - 30) = 550` billion.

(b) Positive: `80 - 30 = +50` billion. Residents earn more from abroad than foreigners earn
domestically.

(c) Hong Kong has massive overseas investments (mainland China, Southeast Asia) generating large income
inflows. At the same time, foreign firms operating in Hong Kong remit profits abroad. Historically,
Hong Kong's GNP exceeds its GDP because net factor income from abroad has been positive -- Hong Kong
residents earn more from overseas investments than foreign residents earn in Hong Kong.

</details>

If you get this wrong, revise: [GDP vs GNP vs GNI](#gdp-vs-gnp-vs-gni)

</details>

<details>
<summary>Problem 5: Types of Unemployment</summary>

Classify each of the following as frictional, structural, cyclical, or seasonal unemployment, and explain:

(a) A construction worker is laid off during the winter due to bad weather.
(b) A bank teller loses her job because ATMs and online banking have reduced the need for tellers.
(c) A recent university graduate is searching for her first job.
(d) A factory worker is laid off because the economy is in a recession.

<details>
<summary>Solution</summary>

(a) **Seasonal** -- the layoff is due to predictable seasonal fluctuation in construction demand.

(b) **Structural** -- technological change (ATMs, online banking) has permanently reduced demand for bank
tellers. The worker's skills do not match the available jobs. Retraining would be needed.

(c) **Frictional** -- the graduate is moving between jobs (from education to employment). This is a
normal part of a dynamic labour market and is short-term.

(d) **Cyclical** -- the layoff is due to insufficient aggregate demand during a recession. The worker
may be rehired when the economy recovers.

</details>

If you get this wrong, revise: [Types of Unemployment](#types-of-unemployment)

</details>

<details>
<summary>Problem 6: Business Cycle Analysis</summary>

An economy's potential GDP is USD 800 billion. The following data shows actual GDP and unemployment:

| Year | Actual GDP | Unemployment Rate |
| ---- | ---------- | ----------------- |
| 2021 | 760        | 7.5%             |
| 2022 | 720        | 9.5%             |
| 2023 | 800        | 5.0%             |
| 2024 | 840        | 3.5%             |

The natural rate of unemployment is 5%.

(a) Identify the type of gap in each year. (b) Using Okun's law (1% above NRU = 2% below potential GDP),
estimate the 2022 GDP gap.

<details>
<summary>Solution</summary>

(a) 2021: Recessionary gap (760 \lt 800). 2022: Recessionary gap (720 \lt 800). 2023: No gap
(800 = 800). 2024: Inflationary gap (840 \gt 800).

(b) 2022: Unemployment above NRU = `9.5\% - 5\% = 4.5\%`.

Estimated GDP gap = `2 \times 4.5\% \times 800 = 72`.

Actual GDP gap = `800 - 720 = 80`. The Okun's law estimate (72) is close but not exact, as Okun's
law is an empirical approximation.

</details>

If you get this wrong, revise: [Business Cycle](#business-cycle)

</details>

<details>
<summary>Problem 7: Phillips Curve</summary>

An economy is at the natural rate of unemployment (5%) with 2% inflation. The government uses
expansionary policy to reduce unemployment to 3%.

(a) What happens to inflation in the short run? (b) What happens in the long run? (c) Illustrate this
process using the Phillips curve framework.

<details>
<summary>Solution</summary>

(a) In the short run, unemployment falls to 3% and inflation rises above 2% (movement along the SRPC).
Tighter labour markets push up wages, which firms pass on as higher prices.

(b) In the long run, workers realise inflation has risen and demand higher nominal wages to compensate.
Higher wages shift the SRAS curve left, returning unemployment to 5% but at a higher inflation rate.
The economy moves up along the vertical LRPC. The long-run trade-off disappears.

(c) Starting at the intersection of SRPC1 and LRPC (5% unemployment, 2% inflation), the policy moves
the economy left along SRPC1 to (3%, higher inflation). Over time, expectations adjust and SRPC1
shifts up to SRPC2. The economy returns to 5% unemployment but at a higher inflation rate. This
demonstrates the accelerationist hypothesis.

</details>

If you get this wrong, revise: [Phillips Curve](#phillips-curve)

</details>

<details>
<summary>Problem 8: Automatic Stabilisers</summary>

Explain how progressive income tax and unemployment benefits act as automatic stabilisers during (a) a
recession and (b) an economic boom. Why are automatic stabilisers considered superior to discretionary
fiscal policy in some respects?

<details>
<summary>Solution</summary>

(a) **Recession:** Incomes fall, pushing taxpayers into lower brackets. Tax revenue falls
automatically, leaving households with more disposable income than under a flat tax. More people claim
unemployment benefits, providing income support. Both effects cushion the fall in aggregate demand.

(b) **Boom:** Incomes rise, pushing taxpayers into higher brackets. Tax revenue rises automatically,
dampening spending growth. Fewer people claim unemployment benefits. Both effects prevent
overheating.

**Advantages over discretionary policy:**
- No legislative delay (act immediately)
- Self-financing (surpluses in booms fund deficits in recessions)
- No political negotiation needed
- More predictable, reducing uncertainty

</details>

If you get this wrong, revise: [Automatic Stabilisers](#automatic-stabilisers)

</details>

---

## Extended Problem Set: Advanced National Income Analysis

### Problem 9: GDP Deflator vs CPI

An economy produces only three goods: rice, clothing, and electronics. The data for 2020 (base year) and 2023 are:

| Good | Quantity 2020 | Price 2020 | Quantity 2023 | Price 2023 |
|---|---|---|---|---|
| Rice (tonnes) | 1000 | $200 | 1200 | $250 |
| Clothing (units) | 500 | $100 | 600 | $120 |
| Electronics (units) | 200 | $500 | 300 | $450 |

The typical consumer basket is: 200 tonnes of rice, 100 units of clothing, 50 units of electronics.

(a) Calculate nominal GDP for 2020 and 2023.
(b) Calculate real GDP for 2023 using 2020 prices.
(c) Calculate the GDP deflator for 2023.
(d) Calculate the CPI for 2023 using the typical consumer basket.
(e) Explain why the GDP deflator and CPI give different inflation rates.

<details>
<summary>Solution</summary>

(a) Nominal GDP 2020 $= 1000(200) + 500(100) + 200(500) = 200\,000 + 50\,000 + 100\,000 = 350\,000$.

Nominal GDP 2023 $= 1200(250) + 600(120) + 300(450) = 300\,000 + 72\,000 + 135\,000 = 507\,000$.

(b) Real GDP 2023 (2020 prices) $= 1200(200) + 600(100) + 300(500) = 240\,000 + 60\,000 + 150\,000 = 450\,000$.

(c) GDP deflator $= \frac{507\,000}{450\,000} \times 100 = 112.67$. GDP deflator inflation $= 12.67\%$.

(d) Cost of basket 2020 $= 200(200) + 100(100) + 50(500) = 40\,000 + 10\,000 + 25\,000 = 75\,000$.

Cost of basket 2023 $= 200(250) + 100(120) + 50(450) = 50\,000 + 12\,000 + 22\,500 = 84\,500$.

CPI $= \frac{84\,500}{75\,000} \times 100 = 112.67$. CPI inflation $= 12.67\%$.

(e) In this example, both give the same rate by coincidence. In general they differ because:
1. The **GDP deflator** uses current production quantities (Paasche-type), while the **CPI** uses a fixed consumption basket (Laspeyres-type).
2. The GDP deflator covers all domestically produced goods and services, while the CPI covers only consumer goods (excluding capital goods, government spending, and net exports).
3. The CPI includes imported consumer goods (whose prices are not in the GDP deflator), while the GDP deflator excludes imports.
4. Substitution bias: the CPI uses a fixed basket and does not account for consumers substituting away from goods whose prices rise (overstating inflation). The GDP deflator automatically incorporates substitution because it uses current quantities.

</details>

If you get this wrong, revise: [GDP Deflator vs CPI](#gdp-deflator-vs-cpi)

### Problem 10: Okun's Law and the Output Gap

An economy has potential GDP of HK$3,000 billion. The natural rate of unemployment is 4.5%. The actual unemployment rate is 7.5%. Okun's coefficient is 2.5 (each 1% increase in unemployment above the natural rate reduces GDP by 2.5% relative to potential).

(a) Calculate the output gap.
(b) Calculate actual GDP.
(c) If the government uses fiscal policy to close the output gap, calculate the required increase in government spending (assuming a multiplier of 1.8).
(d) Critically evaluate the use of Okun's law for policy purposes.

<details>
<summary>Solution</summary>

(a) Cyclical unemployment $= 7.5\% - 4.5\% = 3\%$.

Output gap $= -2.5 \times 3\% = -7.5\%$. The economy is producing 7.5% below potential.

(b) Actual GDP $= 3000 \times (1 - 0.075) = 3000 \times 0.925 = \text{HK{}\$2\,775$ billion.

(c) Required GDP increase $= 3000 - 2775 = \text{HK{}\$225$ billion.

Required spending increase $= 225 / 1.8 = \text{HK{}\$125$ billion.

(d) **Critique of Okun's law:**
1. **The coefficient varies over time and across countries.** The assumption of 2.5 is an approximation. Empirical estimates for Hong Kong may differ significantly due to structural factors (high proportion of services, open economy).
2. **It assumes a stable relationship between unemployment and output.** During deep recessions, the relationship may break down (firms hoard labour, reducing the responsiveness of employment to output).
3. **It does not account for changes in labour force participation.** If discouraged workers exit the labour force, unemployment falls even without output growth, violating Okun's law.
4. **Productivity changes.** If productivity rises (workers produce more per hour), output can grow without employment growth, changing the Okun coefficient.
5. **Sectoral composition.** In Hong Kong, many jobs are in services where the link between output and employment is weaker than in manufacturing.

Despite these limitations, Okun's law provides a useful rule of thumb for estimating the output gap from unemployment data, which is more frequently available than potential GDP estimates.

</details>

If you get this wrong, revise: [Okun's Law](#okuns-law)

### Problem 11: Economic Growth Accounting

An economy's production function is $Y = A \cdot K^{0.3} \cdot L^{0.7}$, where $Y$ is GDP, $K$ is capital, $L$ is labour, and $A$ is total factor productivity (TFP). Data:

| Variable | Year 1 | Year 2 |
|---|---|---|
| Y (billion) | 1000 | 1100 |
| K (billion) | 2000 | 2300 |
| L (million) | 10 | 10.5 |

(a) Calculate the growth rates of Y, K, and L.
(b) Using the growth accounting framework, decompose GDP growth into contributions from capital, labour, and TFP.
(c) What percentage of growth is due to TFP? What does this imply about the source of growth?
(d) Apply this framework to China's growth experience (high capital accumulation, moderate TFP growth) and Hong Kong's (moderate capital, high TFP growth).

<details>
<summary>Solution</summary>

(a) Growth rate of $Y = (1100 - 1000)/1000 = 10\%$. Growth rate of $K = (2300 - 2000)/2000 = 15\%$. Growth rate of $L = (10.5 - 10)/10 = 5\%$.

(b) Growth accounting: $\frac{\Delta Y}{Y} = \alpha \frac{\Delta K}{K} + (1 - \alpha) \frac{\Delta L}{L} + \frac{\Delta A}{A}$.

$\alpha = 0.3$ (capital share), $1 - \alpha = 0.7$ (labour share).

Contribution of capital $= 0.3 \times 15\% = 4.5\%$.

Contribution of labour $= 0.7 \times 5\% = 3.5\%$.

TFP growth $= \frac{\Delta A}{A} = 10\% - 4.5\% - 3.5\% = 2.0\%$.

(c) TFP contribution $= 2.0\% / 10\% = 20\%$ of growth. Capital contributes 45% and labour 35%. This economy's growth is primarily driven by factor accumulation (capital and labour), with TFP playing a secondary role. This pattern is typical of developing economies in the "extensive growth" phase.

(d) **China's growth:** From 1980 to 2010, China's growth was predominantly driven by capital accumulation (investment rates exceeding 40% of GDP). TFP growth was positive but modest (approximately 2--3% per year). This "capital-driven growth" is consistent with the Solow model's prediction: countries far below the technological frontier can grow rapidly by accumulating capital. However, as the capital stock grows, diminishing returns set in and growth slows unless TFP growth accelerates.

**Hong Kong's growth:** Hong Kong's growth has been more TFP-intensive. As a service-based economy with limited natural resources and a mature capital stock, further capital accumulation yields diminishing returns. Growth has relied on: (i) human capital improvement (education), (ii) institutional quality (rule of law, efficient government), (iii) technology adoption (financial technology, logistics innovation), and (iv) integration with the mainland economy (CEPA, Greater Bay Area). These factors all contribute to TFP growth rather than brute-force capital accumulation. This is "intensive growth," which is more sustainable in the long run but inherently slower.

</details>

If you get this wrong, revise: [Economic Growth Accounting](#economic-growth-accounting)

### Problem 12: Measuring Development -- Beyond GDP

Three countries have the following indicators:

| Indicator | Country A | Country B | Country C |
|---|---|---|---|
| GDP per capita (USD) | 55,000 | 15,000 | 8,000 |
| Life expectancy (years) | 83 | 75 | 72 |
| Mean years of schooling | 12 | 9 | 6 |
| Gini coefficient | 0.34 | 0.52 | 0.41 |
| CO2 emissions per capita (tonnes) | 12 | 5 | 2 |
| HDI | 0.93 | 0.75 | 0.68 |

(a) Calculate the HDI for Country A and Country B using the simplified formula: HDI = (life expectancy index + education index + income index) / 3, where life expectancy index = (LE - 20) / 65, education index = MYS / 15, income index = ln(GDPpc) / ln(75000).
(b) Which country has the highest GDP per capita but the highest CO2 emissions? What does this suggest about the relationship between GDP and environmental sustainability?
(c) Which country would you rank as having the highest "quality of life"? Justify using multiple indicators.
(d) Explain why the UN Sustainable Development Goals (SDGs) provide a more comprehensive framework than GDP or HDI alone.

<details>
<summary>Solution</summary>

(a) **Country A:**
- Life expectancy index $= (83 - 20)/65 = 63/65 = 0.969$.
- Education index $= 12/15 = 0.800$.
- Income index $= \ln(55000)/\ln(75000) = 10.915/11.225 = 0.972$.
- HDI $= (0.969 + 0.800 + 0.972)/3 = 0.914$.

**Country B:**
- Life expectancy index $= (75 - 20)/65 = 55/65 = 0.846$.
- Education index $= 9/15 = 0.600$.
- Income index $= \ln(15000)/\ln(75000) = 9.616/11.225 = 0.857$.
- HDI $= (0.846 + 0.600 + 0.857)/3 = 0.768$.

(b) Country A has the highest GDP per capita ($55,000) and the highest CO2 emissions (12 tonnes per capita). This suggests that high GDP per capita often comes with high environmental costs, especially for industrialised economies. GDP does not subtract environmental degradation, so a country can achieve high GDP while depleting natural resources and polluting the environment. The environmental Kuznets curve hypothesis suggests that CO2 emissions eventually fall as countries develop further (shifting to services and clean technology), but Country A has not yet reached this turning point.

(c) **Country A** has the highest quality of life by most measures: highest GDP per capita, longest life expectancy (83), most education (12 years), and highest HDI (0.914). It also has the lowest inequality (Gini 0.34). However, it has the highest CO2 emissions, which reduces environmental quality.

If environmental sustainability is weighted heavily in "quality of life," the ranking becomes less clear. Country C has the lowest environmental impact (2 tonnes CO2) but the lowest GDP, education, and life expectancy. The trade-off between economic development and environmental quality is a central challenge for policymakers.

(d) The **UN SDGs** provide 17 goals and 169 targets covering: no poverty, zero hunger, good health, quality education, gender equality, clean water, clean energy, decent work, industry/innovation, reduced inequality, sustainable cities, responsible consumption, climate action, life below water, life on land, peace/justice, and partnerships. This framework is more comprehensive than GDP (which measures only economic output) or HDI (which covers only health, education, and income) because it includes: environmental sustainability (Goals 7, 12, 13, 14, 15), governance (Goal 16), and global cooperation (Goal 17). However, the SDGs are harder to measure and aggregate into a single index, and the 17 goals may involve trade-offs (e.g., economic growth vs environmental protection).

</details>

If you get this wrong, revise: [Development Indicators](#development-indicators)

</details>

---

## Additional Problems: DSE Exam-Style National Income

### Problem 13: Circular Flow and Leakages-Injections

An economy has the following data: GDP = HK$2,800 billion, Consumption = HK$1,600 billion, Investment = HK$600 billion, Government spending = HK$400 billion, Exports = HK$1,200 billion, Saving = HK$700 billion, Taxes = HK$350 billion, Imports = HK$1,000 billion.

(a) Verify the expenditure and income approaches to GDP.
(b) Calculate the leakages and injections. Verify that leakages = injections.
(c) If the government increases spending by HK$50 billion, calculate the change in GDP using the multiplier. Assume MPC = 0.75 and MPM = 0.3.
(d) Explain why the multiplier is smaller in an open economy than in a closed economy.

<details>
<summary>Solution</summary>

(a) **Expenditure:** $C + I + G + (X - M) = 1600 + 600 + 400 + (1200 - 1000) = 2800 = $ GDP. Verified.

**Income:** GDP $= C + S + T = 1600 + 700 + 350 = 2650 \neq 2800$. There is a discrepancy of 150. This is because the GDP identity is $Y = C + S + T$ only if $S$ includes retained corporate profits and depreciation. The difference of 150 likely represents corporate saving (retained earnings) or a statistical discrepancy in the data.

(b) **Leakages:** $S + T + M = 700 + 350 + 1000 = 2050$. **Injections:** $I + G + X = 600 + 400 + 1200 = 2200$.

Leakages (2050) do not equal injections (2200) -- there is a surplus of injections of 150, consistent with the income approach discrepancy above.

(c) Multiplier with imports: $k = \frac{1}{1 - MPC + MPM} = \frac{1}{1 - 0.75 + 0.30} = \frac{1}{0.55} = 1.818$.

$\Delta GDP = 1.818 \times 50 = \text{HK{}\$90.9$ billion.

(d) In an open economy, some of the additional income from government spending leaks abroad as imports (MPM = 0.3 means 30 cents of every additional dollar is spent on imports). These imports do not generate domestic income, so the circular flow is smaller. In a closed economy (MPM = 0), the multiplier would be $\frac{1}{1 - 0.75} = 4$, and the same HK$50 billion would generate HK$200 billion. The import leakage reduces the multiplier from 4 to 1.818.

</details>

If you get this wrong, revise: [Circular Flow](#circular-flow)

### Problem 14: Misleading GDP Statistics

Country M reports the following annual changes: GDP +8%, nominal wages +5%, CPI +10%, house prices +15%, stock market index +20%.

(a) Calculate real GDP growth.
(b) Calculate the change in real wages.
(c) A government official claims "Our economy is growing strongly at 8% and wages are rising." Evaluate this claim critically.
(d) Why might citizens feel worse off despite positive GDP growth and rising wages?

<details>
<summary>Solution</summary>

(a) Real GDP growth $= \frac{1 + \text{nominal GDP growth{}}{1 + \text{inflation{}} - 1$.

If nominal GDP growth is 8% and inflation (GDP deflator) is approximately the CPI (10%): real growth $= \frac{1.08}{1.10} - 1 = -1.8\%$.

The economy is actually contracting in real terms, not growing!

(b) Real wage change $= \frac{1.05}{1.10} - 1 = -4.5\%$. Real wages are falling by 4.5%.

(c) The official's claim is misleading on both counts:
- GDP is growing at 8% in *nominal* terms, but real GDP is *contracting* by 1.8% because inflation (10%) exceeds nominal growth (8%).
- Wages are rising at 5% in nominal terms, but real wages are *falling* by 4.5% because inflation exceeds wage growth.
- The correct statement would be: "Real GDP is contracting by 1.8% and real wages are falling by 4.5%."

(d) Citizens feel worse off because: (i) their real purchasing power is declining (real wages -4.5%); (ii) housing affordability is worsening dramatically (house prices up 15% vs wages up only 5%); (iii) the stock market gain (20%) benefits primarily wealthier citizens who own stocks, widening inequality; (iv) high inflation (10%) erodes savings and fixed incomes. This illustrates why GDP and nominal wage figures alone can be deeply misleading -- real measures and distributional data are essential for assessing living standards.

</details>

If you get this wrong, revise: [Real vs Nominal](#real-vs-nominal)

### Problem 15: The Green GDP Debate

Country N has GDP of USD 500 billion. Environmental damage from pollution is estimated at USD 80 billion per year. Resource depletion (mining, deforestation) reduces the natural capital stock by USD 30 billion per year. Defensive expenditure on pollution cleanup is USD 20 billion per year.

(a) Calculate a "Green GDP" measure that adjusts for environmental costs.
(b) Explain why defensive expenditure (pollution cleanup) should be subtracted from GDP in a welfare measure.
(c) Calculate the Genuine Savings rate if gross national saving is 25% of GDP.
(d) Evaluate the argument that "GDP growth is incompatible with environmental sustainability."

<details>
<summary>Solution</summary>

(a) **Green GDP** adjusts GDP for environmental costs:

$Green GDP = GDP - Environmental damage - Resource depletion = 500 - 80 - 30 = \text{USD {} 390$ billion.

Note: There are different methods for calculating Green GDP. Some also subtract defensive expenditure: $500 - 80 - 30 - 20 = 370$ billion.

(b) **Defensive expenditure** (e.g., building water treatment plants, medical treatment for pollution-related illness) represents spending to *offset* environmental damage rather than to improve welfare. In standard GDP, this spending is counted as positive output (it adds to GDP). But from a welfare perspective, this spending is a *cost* of pollution, not a benefit. If there were no pollution, these resources could be spent on goods and services that genuinely improve welfare. Therefore, defensive expenditure should be subtracted from GDP in a welfare measure.

(c) **Genuine Savings** = Gross saving - Depreciation of produced capital - Resource depletion - Pollution damage.

Gross saving $= 0.25 \times 500 = 125$ billion.

Assuming produced capital depreciation $= 50$ billion (10% of GDP):

Genuine Savings $= 125 - 50 - 30 - 80 = -35$ billion.

Genuine Savings rate $= -35/500 = -7\%$.

A negative genuine savings rate means the country is running down its total capital stock (produced + natural). It is consuming more than its sustainable income, which is unsustainable in the long run.

(d) **Evaluation:**

*The argument has merit because:*
- GDP counts environmental destruction as positive (cleanup spending adds to GDP) while ignoring the loss of natural capital.
- High GDP growth driven by resource extraction and polluting industries is not sustainable.
- The Genuine Savings calculation shows many resource-dependent economies have negative genuine savings.

*The argument is overstated because:*
- GDP growth can be achieved through sustainable sectors (services, technology, renewable energy) that do not deplete natural capital.
- The Environmental Kuznets Curve hypothesis suggests that as countries develop, they eventually reduce pollution (investing in clean technology and regulation).
- Green growth is possible: countries can grow while reducing environmental impact through technological innovation and policy reform.
- GDP was not designed as a welfare measure; criticising it for not measuring sustainability is like criticising a thermometer for not measuring humidity.

**Balanced view:** GDP growth per se is not incompatible with environmental sustainability, but the *composition* of growth matters. Policymakers should use multiple indicators (GDP, Genuine Savings, environmental quality indices) and pursue growth strategies that decouple economic activity from environmental damage.


If you get this wrong, revise: [Green GDP and Sustainability](#green-gdp-and-sustainability)

