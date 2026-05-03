---
title: "National Income and Macroeconomic Indicators -- Diagnostic Tests"
description: "DSE Economics diagnostic tests for national income: GDP/GNP calculation, real vs nominal, per capita measures, inflation, unemployment indicators."
slug: diag-national-income
hide_table_of_contents: true
---

# National Income and Macroeconomic Indicators — Diagnostic Tests

## Unit Tests

### UT-1: GDP Calculation Methods
**Question:** An economy has the following data (in billions of HKD): Consumption $= 800$, Investment $= 300$, Government spending $= 250$, Exports $= 400$, Imports $= 350$, Subsidies $= 60$, Indirect taxes $= 100$, Depreciation $= 120$, Net factor income from abroad $= -20$. Calculate: (a) GDP by expenditure method, (b) GNP, (c) NNP, (d) National Income.

**Solution:**

(a) GDP by expenditure method:
$\text{GDP} = C + I + G + (X - M) = 800 + 300 + 250 + (400 - 350) = \text{HK\$}1400$ billion.

(b) $\text{GNP} = \text{GDP} + \text{Net factor income from abroad} = 1400 + (-20) = \text{HK\$}1380$ billion.

(c) $\text{NNP} = \text{GNP} - \text{Depreciation} = 1380 - 120 = \text{HK\$}1260$ billion.

(d) $\text{National Income} = \text{NNP} - \text{Indirect taxes} + \text{Subsidies} = 1260 - 100 + 60 = \text{HK\$}1220$ billion.

### UT-2: Real vs Nominal GDP and GDP Deflator
**Question:** Country X has the following data:

| Year | Nominal GDP (billion) | GDP Deflator (base year = 2015) |
|---|---|---|
| 2015 | 500 | 100 |
| 2020 | 700 | 125 |
| 2025 | 900 | 150 |

(a) Calculate real GDP for each year. (b) Calculate the real GDP growth rate from 2020 to 2025. (c) A student claims "Nominal GDP rose 80% from 2015 to 2025, so the economy grew 80%." Explain why this is incorrect. (d) If the population grew from 10 million (2015) to 12 million (2025), calculate real GDP per capita for 2015 and 2025.

**Solution:**

(a) Real GDP $= \frac{\text{Nominal GDP}}{\text{GDP Deflator}} \times 100$.

- 2015: $\text{Real GDP} = \frac{500}{100} \times 100 = 500$ billion.
- 2020: $\text{Real GDP} = \frac{700}{125} \times 100 = 560$ billion.
- 2025: $\text{Real GDP} = \frac{900}{150} \times 100 = 600$ billion.

(b) Real GDP growth rate $= \frac{600 - 560}{560} \times 100\% = 7.14\%$.

(c) The student confuses nominal and real GDP. Nominal GDP increased 80% ($\frac{900 - 500}{500} = 80\%$), but part of this increase is due to inflation (the GDP deflator rose from 100 to 150, meaning prices rose 50%). Real GDP only grew from 500 to 600 billion -- a 20% increase. The nominal increase overstates true economic growth because it includes the effect of rising prices, not just increased output.

(d) Real GDP per capita $= \frac{\text{Real GDP}}{\text{Population}}$.

- 2015: $\frac{500}{10} = 50{,}000$ per person.
- 2025: $\frac{600}{12} = 50{,}000$ per person.

Despite real GDP growing 20%, real GDP per capita remained unchanged because population grew proportionally. This illustrates why per capita measures are important for assessing living standards.

### UT-3: Limitations of GDP as a Welfare Measure
**Question:** Two countries have the same GDP per capita of $\$40{,}000$. Country A has: average working hours $= 48$/week, life expectancy $= 72$ years, Gini coefficient $= 0.45$, air quality index $= 150$ (unhealthy). Country B has: average working hours $= 35$/week, life expectancy $= 82$ years, Gini coefficient $= 0.28$, air quality index $= 40$ (good). (a) Explain three ways in which GDP fails to measure economic welfare. (b) Which country likely has higher economic welfare despite equal GDP per capita? Justify. (c) Suggest two alternative measures that would better capture welfare differences.

**Solution:**

(a) Three limitations of GDP as a welfare measure:
1. **Does not account for leisure**: GDP measures output but not how much time people work to produce it. Longer working hours increase GDP but reduce quality of life.
2. **Ignores income distribution**: GDP per capita is an average that masks inequality. A high GDP per capita with extreme inequality (high Gini coefficient) means many citizens live in poverty despite the high average.
3. **Excludes non-market activities and externalities**: GDP does not subtract the cost of pollution, congestion, or resource depletion. A country with high industrial output but severe pollution may have high GDP but low actual welfare.

(b) Country B likely has higher economic welfare. Although GDP per capita is equal, Country B's citizens work fewer hours (more leisure), live significantly longer (better healthcare), have more equitable income distribution (lower Gini), and enjoy cleaner air. GDP captures none of these welfare-relevant differences.

(c) Two alternative measures:
1. **Human Development Index (HDI)**: Combines life expectancy, education (mean years of schooling and expected years of schooling), and GNI per capita into a composite index.
2. **Genuine Progress Indicator (GPI)**: Starts with personal consumption but adds value of unpaid household work, subtracts costs of crime, pollution, and resource depletion, and adjusts for income inequality.

---

## Integration Tests

### IT-1: National Income and Inflation (with Fiscal and Monetary Policy)
**Question:** An economy has nominal GDP of $\$1200$ billion and real GDP of $\$1000$ billion. The population is 50 million. Unemployment is 8%. The natural rate of unemployment is 5%. (a) Calculate the GDP deflator and inflation rate (assuming last year's deflator was 105). (b) Calculate the output gap using Okun's law (assume Okun's coefficient $= 2$). (c) Calculate real GDP per capita. (d) Based on the output gap and unemployment, should the government pursue expansionary or contractionary policy? Explain.

**Solution:**

(a) GDP deflator $= \frac{1200}{1000} \times 100 = 120$.
Inflation rate $= \frac{120 - 105}{105} \times 100\% = 14.29\%$.

(b) Cyclical unemployment $= 8\% - 5\% = 3\%$.
Using Okun's law: $\frac{Y - Y^*}{Y^*} = -2 \times u_c = -2 \times 3\% = -6\%$.

So $Y = 0.94 Y^*$, meaning actual output is 6% below potential. $Y^* = 1000/0.94 = \$1063.8$ billion. Output gap $= 1000 - 1063.8 = -\$63.8$ billion (negative = recessionary gap).

(c) Real GDP per capita $= \frac{1000}{50} = \$20{,}000$.

(d) The economy has a recessionary output gap (-6%) and unemployment above the natural rate (8% vs 5%). The government should pursue **expansionary policy** -- either increase government spending, cut taxes (fiscal policy), or lower interest rates (monetary policy) to stimulate aggregate demand, close the output gap, and reduce unemployment towards the natural rate.

### IT-2: Comparative Economic Performance (with International Trade)
**Question:** Two economies, A and B, have the following data:

| Indicator | Country A | Country B |
|---|---|---|
| Nominal GDP (USD billion) | 2000 | 500 |
| Population (million) | 60 | 10 |
| GDP growth rate (%) | 2.5 | 7.0 |
| Inflation rate (%) | 1.5 | 5.0 |
| Current account (USD billion) | -100 | +50 |

(a) Calculate GDP per capita for each country. (b) Which economy is "larger" and which is "growing faster"? (c) Explain the significance of the current account figures. (d) Country A's government claims its economy is performing better. Critically evaluate this claim using the data.

**Solution:**

(a) Country A: GDP per capita $= \frac{2000}{60} = \$33{,}333$.
Country B: GDP per capita $= \frac{500}{10} = \$50{,}000$.

(b) Country A has a larger total economy (nominal GDP $\$2000$B vs $\$500$B), but Country B has a higher GDP per capita and is growing much faster (7.0% vs 2.5%).

(c) Country A has a current account deficit of $\$100$B, meaning it imports more than it exports and/or receives less net income from abroad. Country B has a surplus of $\$50$B. The deficit means Country A is borrowing from abroad or selling assets to finance its excess imports -- this is sustainable in the short run but may create debt problems. Country B's surplus means it is a net lender to the rest of the world.

(d) Country A's claim is misleading. While its total GDP is larger, its GDP per capita is lower than B's. Its growth rate (2.5%) is less than a third of B's (7.0%). It has a large current account deficit, indicating it may be living beyond its means. However, A has lower inflation (1.5% vs 5.0%), suggesting greater price stability. A balanced assessment would note that Country B performs better on living standards and growth, while Country A performs better on price stability. No single indicator tells the full story.

### IT-3: National Income Accounting Pitfalls (with Basic Economic Concepts)
**Question:** A developing country experiences the following in one year: (i) a severe earthquake destroys $\$50$B of infrastructure, (ii) the government spends $\$80$B rebuilding, (iii) the rebuilding employs 200{,}000 previously unemployed workers, (iv) pollution from rebuilding reduces air quality significantly. (a) How would each event affect GDP? (b) Calculate the net effect on GDP. (c) Does the GDP change reflect an improvement in welfare? Explain. (d) How does the concept of opportunity cost apply to the rebuilding expenditure?

**Solution:**

(a) (i) Destruction of infrastructure does **not** directly reduce GDP (GDP measures current production, not the stock of capital). However, it reduces the capital stock, which will reduce future productive capacity.
(ii) Government spending of $\$80$B **increases** GDP by $\$80$B through the $G$ component.
(iii) The employment of previously unemployed workers is already captured in (ii) -- the wages paid are part of the income approach to GDP.
(iv) Pollution is **not** subtracted from GDP. In fact, if the government hires environmental consultants or cleanup crews, this would *increase* GDP.

(b) Net effect on GDP: $+\$80$B from government spending. GDP rises despite the destruction.

(c) No. The country is clearly worse off -- it lost $\$50$B of infrastructure, suffered environmental damage, and had to divert $\$80$B from other productive uses to rebuild. Yet GDP shows an increase. This is one of the most serious limitations of GDP: it counts the cost of rebuilding after a disaster as economic growth, even though the country is merely restoring what it already had (and not even fully, since the environmental damage is not accounted for).

(d) The $\$80$B spent on rebuilding has an opportunity cost -- the goods and services that could have been produced if those resources had been allocated elsewhere. The 200{,}000 workers could have been producing consumer goods, new infrastructure, or education. The construction materials could have built new factories or housing. The earthquake forced the country to consume its rebuilding capacity on restoring the status quo rather than improving living standards.
