---
title: 'National Income and Macroeconomic Indicators -- Diagnostic Tests'
description:
  'DSE Economics diagnostic tests for national income: GDP/GNP calculation, real vs nominal, per
  capita measures, inflation, unemployment indicators.'
slug: diag-national-income
hide_table_of_contents: true
---

# National Income and Macroeconomic Indicators — Diagnostic Tests

## Unit Tests

### UT-1: GDP Calculation Methods

**Question:** An economy has the following data (in billions of HKD): Consumption $= 800$Investment
$= 300$Government spending $= 250$Exports $= 400$Imports $= 350$Subsidies $= 60$Indirect taxes
$= 100$Depreciation $= 120$Net factor income from abroad $= -20$. Calculate: (a) GDP by expenditure
method, (b) GNP, (c) NNP, (d) National Income.

**Solution:**

(a) GDP by expenditure method:
$GDP = C + I + G + (X - M) = 800 + 300 + 250 + (400 - 350) = HK\$1400$ billion.

(b) $GNP = GDP + Net factor income from abroad = 1400 + (-20) = HK\$1380$ billion.

(c) $NNP = GNP - Depreciation = 1380 - 120 = HK\$1260$ billion.

(d) $National Income = NNP - Indirect taxes + Subsidies = 1260 - 100 + 60 = HK\$1220$ billion.

### UT-2: Real vs Nominal GDP and GDP Deflator

**Question:** Country X has the following data:

| Year | Nominal GDP (billion) | GDP Deflator (base year = 2015) |
| ---- | --------------------- | ------------------------------- |
| 2015 | 500                   | 100                             |
| 2020 | 700                   | 125                             |
| 2025 | 900                   | 150                             |

(a) Calculate real GDP for each year. (b) Calculate the real GDP growth rate from 2020 to 2025. (c)
A student claims "Nominal GDP rose 80% from 2015 to 2025, so the economy grew 80%." Explain why this
is incorrect. (d) If the population grew from 10 million (2015) to 12 million (2025), calculate real
GDP per capita for 2015 and 2025.

**Solution:**

(a) Real GDP $= \frac{{}\text{Nominal GDP}{}}{{}\text{GDP Deflator}{}} \times 100$.

- 2015: $Real GDP = \frac{500}{100} \times 100 = 500$ billion.
- 2020: $Real GDP = \frac{700}{125} \times 100 = 560$ billion.
- 2025: $Real GDP = \frac{900}{150} \times 100 = 600$ billion.

(b) Real GDP growth rate $= \frac{600 - 560}{560} \times 100\% = 7.14\%$.

(c) The student confuses nominal and real GDP. Nominal GDP increased 80%
($\frac{900 - 500}{500} = 80\%$), but part of this increase is due to inflation (the GDP deflator
rose from 100 to 150, meaning prices rose 50%). Real GDP only grew from 500 to 600 billion -- a 20%
increase. The nominal increase overstates true economic growth because it includes the effect of
rising prices, not just increased output.

(d) Real GDP per capita $= \frac{{}\text{Real GDP}{}}{Population}$.

- 2015: $\frac{500}{10} = 50,000$ per person.
- 2025: $\frac{600}{12} = 50,000$ per person.

Despite real GDP growing 20%, real GDP per capita remained unchanged because population grew
proportionally. This illustrates why per capita measures are important for assessing living
standards.

### UT-3: Limitations of GDP as a Welfare Measure

**Question:** Two countries have the same GDP per capita of $\$40,000$. Country A has: average
working hours $= 48$/week, life expectancy $= 72$ years, Gini coefficient $= 0.45$, air quality
index $= 150$ (unhealthy). Country B has: average working hours $= 35$/week, life expectancy $= 82$
years, Gini coefficient $= 0.28$, air quality index $= 40$ (good). (a) Explain three ways in which
GDP fails to measure economic welfare. (b) Which country likely has higher economic welfare despite
equal GDP per capita? Justify. (c) Suggest two alternative measures that would better capture
welfare differences.

**Solution:**

(a) Three limitations of GDP as a welfare measure:

1. **Does not account for leisure**: GDP measures output but not how much time people work to
   produce it. Longer working hours increase GDP but reduce quality of life.
2. **Ignores income distribution**: GDP per capita is an average that masks inequality. A high GDP
   per capita with extreme inequality (high Gini coefficient) means many citizens live in poverty
   despite the high average.
3. **Excludes non-market activities and externalities**: GDP does not subtract the cost of
   pollution, congestion, or resource depletion. A country with high industrial output but severe
   pollution may have high GDP but low actual welfare.

(b) Country B likely has higher economic welfare. Although GDP per capita is equal, Country B's
citizens work fewer hours (more leisure), live significantly longer (better healthcare), have more
equitable income distribution (lower Gini), and enjoy cleaner air. GDP captures none of these
welfare-relevant differences.

(c) Two alternative measures:

1. **Human Development Index (HDI)**: Combines life expectancy, education (mean years of schooling
   and expected years of schooling), and GNI per capita into a composite index.
2. **Genuine Progress Indicator (GPI)**: Starts with personal consumption but adds value of unpaid
   household work, subtracts costs of crime, pollution, and resource depletion, and adjusts for
   income inequality.

---

## Integration Tests

### IT-1: National Income and Inflation (with Fiscal and Monetary Policy)

**Question:** An economy has nominal GDP of $\$1200$ billion and real GDP of $\$1000$ billion. The
population is 50 million. Unemployment is 8%. The natural rate of unemployment is 5%. (a) Calculate
the GDP deflator and inflation rate (assuming last year's deflator was 105). (b) Calculate the
output gap using Okun's law (assume Okun's coefficient $= 2$). (c) Calculate real GDP per capita.
(d) Based on the output gap and unemployment, should the government pursue expansionary or
contractionary policy? Explain.

**Solution:**

(a) GDP deflator $= \frac{1200}{1000} \times 100 = 120$. Inflation rate
$= \frac{120 - 105}{105} \times 100\% = 14.29\%$.

(b) Cyclical unemployment $= 8\% - 5\% = 3\%$. Using Okun's law:
$\frac{Y - Y^*}{Y^*} = -2 \times u_c = -2 \times 3\% = -6\%$.

So $Y = 0.94 Y^*$Meaning actual output is 6% below potential. $Y^* = 1000/0.94 = \$1063.8$ billion.
Output gap $= 1000 - 1063.8 = -\$63.8$ billion (negative = recessionary gap).

(c) Real GDP per capita $= \frac{1000}{50} = \$20,000$.

(d) The economy has a recessionary output gap (-6%) and unemployment above the natural rate (8% vs
5%). The government should pursue **expansionary policy** -- either increase government spending,
cut taxes (fiscal policy), or lower interest rates (monetary policy) to stimulate aggregate demand,
close the output gap, and reduce unemployment towards the natural rate.

### IT-2: Comparative Economic Performance (with International Trade)

**Question:** Two economies, A and B, have the following data:

| Indicator                     | Country A | Country B |
| ----------------------------- | --------- | --------- |
| Nominal GDP (USD billion)     | 2000      | 500       |
| Population (million)          | 60        | 10        |
| GDP growth rate (%)           | 2.5       | 7.0       |
| Inflation rate (%)            | 1.5       | 5.0       |
| Current account (USD billion) | -100      | +50       |

(a) Calculate GDP per capita for each country. (b) Which economy is "larger" and which is "growing
faster"? (c) Explain the significance of the current account figures. (d) Country A's government
claims its economy is performing better. Critically evaluate this claim using the data.

**Solution:**

(a) Country A: GDP per capita $= \frac{2000}{60} = \$33,333$. Country B: GDP per capita
$= \frac{500}{10} = \$50,000$.

(b) Country A has a larger total economy (nominal GDP $\$2000$B vs $\$500$B), but Country B has a
higher GDP per capita and is growing much faster (7.0% vs 2.5%).

(c) Country A has a current account deficit of $\$100$B, meaning it imports more than it exports
and/or receives less net income from abroad. Country B has a surplus of $\$50$B. The deficit means
Country A is borrowing from abroad or selling assets to finance its excess imports -- this is
sustainable in the short run but may create debt problems. Country B's surplus means it is a net
lender to the rest of the world.

(d) Country A's claim is misleading. While its total GDP is larger, its GDP per capita is lower than
B's. Its growth rate (2.5%) is less than a third of B's (7.0%). It has a large current account
deficit, indicating it may be living beyond its means. However, A has lower inflation (1.5% vs
5.0%), suggesting greater price stability. A balanced assessment would note that Country B performs
better on living standards and growth, while Country A performs better on price stability. No single
indicator tells the full story.

### IT-3: National Income Accounting Pitfalls (with Basic Economic Concepts)

**Question:** A developing country experiences the following in one year: (i) a severe earthquake
destroys $\$50$B of infrastructure, (ii) the government spends $\$80$B rebuilding, (iii) the
rebuilding employs 200,000 previously unemployed workers, (iv) pollution from rebuilding reduces air
quality significantly. (a) How would each event affect GDP? (b) Calculate the net effect on GDP. (c)
Does the GDP change reflect an improvement in welfare? Explain. (d) How does the concept of
opportunity cost apply to the rebuilding expenditure?

**Solution:**

(a) (i) Destruction of infrastructure does **not** directly reduce GDP (GDP measures current
production, not the stock of capital). However, it reduces the capital stock, which will reduce
future productive capacity. (ii) Government spending of $\$80$B **increases** GDP by $\$80$B through
the $G$ component. (iii) The employment of previously unemployed workers is already captured in (ii)
-- the wages paid are part of the income approach to GDP. (iv) Pollution is **not** subtracted from
GDP. In fact, if the government hires environmental consultants or cleanup crews, this would
_increase_ GDP.

(b) Net effect on GDP: $+\$80$B from government spending. GDP rises despite the destruction.

(c) No. The country is worse off -- it lost $\$50$B of infrastructure, suffered environmental
damage, and had to divert $\$80$B from other productive uses to rebuild. Yet GDP shows an increase.
This is one of the most serious limitations of GDP: it counts the cost of rebuilding after a
disaster as economic growth, even though the country is merely restoring what it already had (and
not even fully, since the environmental damage is not accounted for).

(d) The $\$80$B spent on rebuilding has an opportunity cost -- the goods and services that could
have been produced if those resources had been allocated elsewhere. The 200,000 workers could have
been producing consumer goods, new infrastructure, or education. The construction materials could
have built new factories or housing. The earthquake forced the country to consume its rebuilding
capacity on restoring the status quo rather than improving living standards.

## Additional DSE Exam-Style Questions

### EQ-1: GDP by Factor Income Method

**Question:** An economy has the following factor income data (in HK$ billion): Compensation of
employees $= 600$, Gross operating surplus $= 350$, Gross mixed income $= 100$, Taxes on production
and imports $= 80$, Subsidies $= 30$. (a) Calculate GDP by the income approach. (b) If depreciation
is HK$120 billion and net factor income from abroad is $-$HK$15 billion, calculate GNP, NNP, and
National Income. (c) Explain why the expenditure, income, and output approaches to GDP should yield
the same result. (d) If a domestic company earns HK$50 billion from its subsidiary in Vietnam, how
does this affect the calculation?

**Solution:**

(a) GDP by income approach:

$$GDP = \text{Compensation of employees} + \text{Gross operating surplus} + \text{Gross mixed income} + \text{Taxes on production} - \text{Subsidies}$$

$$GDP = 600 + 350 + 100 + 80 - 30 = HK\$1\,100 \text{ billion}$$

(b) GNP $= GDP + \text{Net factor income from abroad} = 1100 + (-15) = HK\$1\,085$ billion.

NNP $= GNP - \text{Depreciation} = 1085 - 120 = HK\$965$ billion.

National Income $= NNP - \text{Indirect taxes} + \text{Subsidies} = 965 - 80 + 30 = HK\$915$
billion.

(c) The three approaches yield the same result because every transaction in the economy has two
sides. When a consumer buys a good for $\$100$ (expenditure approach), the $\$100$ becomes income
for the producer (income approach), who uses it to pay wages, rent, and profit. The good was
produced using resources valued at $\$100$ (output approach). This is the circular flow of income:
expenditure $\rightarrow$ income $\rightarrow$ production $\rightarrow$ expenditure.

(d) The
HK$50 billion earned from a subsidiary in Vietnam is **factor income from abroad**. It is included in GNP (which counts income earned by residents regardless of location) but not in GDP (which counts production within geographical borders). This means GNP $>$
GDP in this case, if this income exceeds the income earned by foreign-owned factors in Hong Kong. If
net factor income from abroad becomes $+35$ billion (50 earned abroad minus 15 paid to foreigners),
then GNP $= 1100 + 35 = HK\$1\,135$ billion.

### EQ-2: Inflation Measurement and Real Values

**Question:** A worker's nominal monthly salary was
HK$20,000 in 2018 and HK$24,000 in 2023. The CPI was 110 in 2018 and 132 in 2023 (base year 2015 $= 100$).
(a) Calculate the inflation rate between 2018 and 2023. (b) Calculate the worker's real salary in
both years. (c) Has the worker's purchasing power increased or decreased? (d) If the worker's salary
in 2023 was HK$25,000 instead, what would the real salary be and how does it compare to 2018?

**Solution:**

(a) Inflation rate
$= \frac{CPI_{2023} - CPI_{2018}}{CPI_{2018}} \times 100\% = \frac{132 - 110}{110} \times 100\% = 20\%$.

(b) Real salary $= \frac{\text{Nominal salary}}{CPI} \times 100$.

- 2018: Real salary $= \frac{20000}{110} \times 100 = HK\$18\,182$.
- 2023: Real salary $= \frac{24000}{132} \times 100 = HK\$18\,182$.

(c) The worker's real salary is exactly the same in both years (HK$18,182). Although the nominal
salary rose by 20% (from 20,000 to 24,000), prices also rose by 20%, leaving purchasing power
unchanged. The 20% nominal increase exactly matched inflation.

(d) With HK$25,000 in 2023: Real salary $= \frac{25000}{132} \times 100 = HK\$18\,939$.

This is an increase of $\frac{18\,939 - 18182}{18\,182} \times 100\% = 4.2\%$ in real terms.
The worker's purchasing power has genuinely improved because the nominal salary increase (25%)
exceeded inflation (20%).

### EQ-3: Unemployment Rate and Hidden Unemployment

**Question:** Country X has a working-age population of 10 million. Of these, 2 million are
full-time students, 1.5 million are retired, 0.5 million are stay-at-home parents, and 0.3 million
are discouraged workers who have stopped looking for jobs. There are 4.5 million employed persons
and 0.7 million actively seeking work. (a) Calculate the labour force, the unemployment rate, and
the labour force participation rate. (b) Explain why discouraged workers are not counted as
unemployed. (c) If the government introduces a policy that successfully encourages all discouraged
workers to search for jobs, what happens to the unemployment rate? (d) Explain the types of
unemployment and which types are most relevant to Hong Kong.

**Solution:**

(a) Labour force $= \text{Employed} + \text{Unemployed (actively seeking)} = 4.5 + 0.7 = 5.2$
million.

Unemployment rate $= \frac{0.7}{5.2} \times 100\% = 13.46\%$.

Labour force participation rate $= \frac{5.2}{10.0} \times 100\% = 52\%$.

Note: The 2 million students, 1.5 million retired, and 0.5 million stay-at-home parents are not in
the labour force. The 0.3 million discouraged workers are also not counted.

(b) To be counted as unemployed, a person must be: (i) without work, (ii) available for work, and
(iii) **actively seeking** work. Discouraged workers have given up searching because they believe no
jobs are available. Since they are not actively seeking, they are classified as "out of the labour
force" rather than unemployed. This means the official unemployment rate understates true labour
market slack.

(c) If 0.3 million discouraged workers begin actively searching, the labour force becomes
$5.2 + 0.3 = 5.5$ million. The number of unemployed becomes $0.7 + 0.3 = 1.0$ million (assuming not
all find jobs immediately).

New unemployment rate $= \frac{1.0}{5.5} \times 100\% = 18.18\%$.

The unemployment rate **rises** despite no job losses, because previously hidden unemployment
(discouraged workers) now becomes visible. This is a paradox: improved labour market conditions
(more people looking for work) can temporarily increase the measured unemployment rate.

(d) **Types of unemployment:**

1. **Frictional unemployment:** Workers between jobs due to normal turnover. Low in duration,
   unavoidable and even healthy for the economy (workers find better job matches). Hong Kong
   example: a finance professional leaving one bank for another.

2. **Structural unemployment:** Mismatch between workers' skills and job requirements, caused by
   technological change, industry decline, or geographical mismatches. Hong Kong example:
   manufacturing workers displaced by factory relocation to mainland China in the 1980s--2000s, who
   lack skills for the growing service sector.

3. **Cyclical unemployment:** Due to insufficient aggregate demand during economic downturns. Hong
   Kong example: tourism and retail workers laid off during the COVID-19 pandemic (2020--2022).

4. **Seasonal unemployment:** Due to seasonal patterns in demand. Hong Kong example: reduced hiring
   in the tourism sector during typhoon season.

For Hong Kong, structural unemployment is the most significant long-term concern due to the
structural shift from manufacturing to services. The government addresses this through retraining
programmes (Employees Retraining Board) and education reform. Cyclical unemployment has been a
problem during external shocks (1997 Asian Financial Crisis, 2003 SARS, 2008 GFC, 2019--2020 social
unrest and COVID-19).

### EQ-4: Economic Growth and the Solow Growth Model

**Question:** Country Y has GDP per capita of $\$5,000$. Its saving rate $S = 20\%$, depreciation
rate $\delta = 5\%$, and population growth rate $N = 2\%$. The production function is $Y = k^{0.4}$,
where $Y$ is output per worker and $K$ is capital per worker. (a) Calculate the steady-state capital
per worker and output per worker. (b) If the saving rate increases to 30%, calculate the new steady
state. (c) Explain why higher saving does not produce permanently higher growth in the Solow model.
(d) Apply this analysis to China's growth strategy.

**Solution:**

(a) In the Solow model, the steady state is where investment equals break-even investment:
$s \cdot f(k) = (n + \delta) \cdot k$.

$$0.20 \cdot k^{0.4} = (0.02 + 0.05) \cdot k = 0.07k$$

$$k^{0.4} = \frac{0.07}{0.20} k = 0.35k$$

$$k^{-0.6} = 0.35$$

$$k = 0.35^{-1/0.6} = 0.35^{-1.667} = \frac{1}{0.35^{1.667}}$$

$0.35^{1.667} = e^{1.667 \times \ln(0.35)} = e^{1.667 \times (-1.0498)} = e^{-1.7497} = 0.1739$.

$k^* = 1 / 0.1739 = 5.751$.

$y^* = k^{0.4} = 5.751^{0.4} = e^{0.4 \times \ln(5.751)} = e^{0.4 \times 1.7497} = e^{0.6999} = 2.014$.

Steady-state output per worker $= 2.014$ (in efficiency units).

(b) With $s = 0.30$:

$$0.30 \cdot k^{0.4} = 0.07k$$

$$k^{-0.6} = 0.07/0.30 = 0.2333$$

$$k = 0.2333^{-1.667} = \frac{1}{0.2333^{1.667}}$$

$0.2333^{1.667} = e^{1.667 \times \ln(0.2333)} = e^{1.667 \times (-1.4553)} = e^{-2.4255} = 0.0885$.

$k^* = 1 / 0.0885 = 11.30$.

$y^* = 11.30^{0.4} = e^{0.4 \times 2.4243} = e^{0.9697} = 2.637$.

Output per worker rises from 2.014 to 2.637 -- a 31% increase. But this is a **one-time level
effect**, not a permanent increase in the growth rate.

(c) In the Solow model, a higher saving rate leads to a higher _level_ of output per worker in the
steady state, but the long-run growth rate of output per worker is determined solely by
**technological progress** (the exogenous rate $g$ in the augmented model). Once the economy reaches
the new steady state, growth returns to the rate of technological progress. This is because of
diminishing returns to capital: each additional unit of capital produces less additional output, so
increasing saving produces smaller and smaller gains until the economy converges to the new steady
state.

(d) **Application to China:** China achieved remarkable growth from 1978 onwards, with GDP growth
averaging nearly 10% per year for three decades. Several factors contributed:

1. **High saving and investment rate:** China's gross capital formation exceeded 40% of GDP for many
   years, well above the global average. This drove capital accumulation, moving the economy along
   the transition path toward a higher steady state.

2. **Technological catch-up:** China started far below the technological frontier. By adopting
   existing technologies from advanced economies (through FDI, technology transfer, and imitation),
   China experienced rapid total factor productivity (TFP) growth. This is like having a high
   "technology" parameter in the Solow model.

3. **Demographic dividend:** A large working-age population (due to the baby boom before the
   one-child policy took full effect) provided abundant labour, boosting the labour input.

4. **Structural transformation:** Moving workers from low-productivity agriculture to
   higher-productivity manufacturing and services raised aggregate productivity.

However, the Solow model predicts that this growth model has limits. As China approaches the
technological frontier, catch-up growth slows. As capital per worker rises, diminishing returns set
in. The demographic dividend is reversing as the population ages. China's growth rate has already
declined from ~10% to ~5% and is expected to slow further. To sustain growth, China must shift from
capital accumulation toward innovation-driven growth (increasing the rate of technological progress
rather than merely accumulating more capital).

### EQ-5: Hong Kong's Economic Indicators and Living Standards

**Question:** Hong Kong has the following data (2023 estimates): GDP $= HK\$2.9$ trillion,
Population $= 7.5$ million, Gini coefficient $= 0.54$, Life expectancy $= 85.5$ years, Median
monthly household income $= HK\$27\,500$. (a) Calculate GDP per capita. (b) The Gini coefficient of
0.54 is one of the highest among developed economies. Explain what this means and why it is a
limitation of using GDP per capita as a welfare indicator. (c) Calculate the GDP per capita in USD
(assuming 1 USD $= 7.8$ HKD) and compare it with the median household income approach to measuring
living standards. (d) Suggest three policies Hong Kong could implement to reduce income inequality
while maintaining economic efficiency.

**Solution:**

(a) GDP per capita $= \frac{{}2\,900000{}}{7.5} = HK\$386\,667 \approx HK\$387\,000$.

(b) A Gini coefficient of 0.54 means significant income inequality. The Gini ranges from 0 (perfect
equality) to 1 (perfect inequality). Hong Kong's 0.54 is higher than most OECD countries (
0.25--0.40) and higher than China (0.47) and the US (0.49). GDP per capita of HK$387,000 is an
**average** that is heavily skewed by high-income earners. The median household income of HK$27,500
per month (HK$330,000 per year) is considerably lower than the GDP per capita suggests. This means a
typical Hong Kong resident's income is well below the average, reflecting the extreme concentration
of income at the top.

(c) GDP per capita in USD $= \frac{387000}{7.8} \approx \$49\,615$.

Median household income per capita (assuming average household size of 2.9):
$\frac{330000}{2.9} \approx HK\$113\,793$ per year $= \$14\,589$ USD.

The median income per capita is only about 29% of GDP per capita. This massive gap reflects both:
(i) income inequality (the Gini coefficient), and (ii) the fact that GDP includes corporate profits,
government revenue, and depreciation that do not flow directly to households as personal income.

(d) Three policies:

1. **Progressive taxation:** Hong Kong currently has relatively flat tax rates (maximum salaries tax
   of 15--17%, compared to 37--45% in many developed countries). Introducing more progressive tax
   brackets would redistribute from high-income to low-income earners while maintaining incentives
   for work and investment (as long as rates remain below the revenue-maximising point on the Laffer
   curve).

2. **Increase public housing supply:** Hong Kong has one of the most expensive housing markets in
   the world. Housing costs disproportionately affect low-income households. Expanding public
   housing and increasing land supply would lower housing costs, effectively increasing the real
   income of lower-income groups. This is an equity-efficiency policy because high housing costs
   also reduce labour mobility and economic dynamism.

3. **Invest in education and skills training:** Improving access to quality education for children
   from low-income families (e.g., expanding subsidised pre-primary education, increasing support
   for first-generation university students) addresses inequality of _opportunity_ rather than just
   inequality of outcome. Education increases human capital, which raises productivity and earnings
   potential, benefiting both equity and economic growth.

**Evaluation:** These policies involve trade-offs. Progressive taxation may reduce work incentives
for high earners. Public housing expansion requires government spending and land allocation.
Education investment has long lags. The key is to find the right balance that reduces inequality
without undermining the free-market efficiency that has driven Hong Kong's prosperity.

## Common Pitfalls

1. **Confusing GDP and GNP:** GDP measures production within a country's borders regardless of who
   owns the factors of production. GNP measures income earned by a country's residents regardless of
   where the production takes place. For Hong Kong, a major international financial centre with
   substantial overseas investments, GNP may differ significantly from GDP. Many Hong Kong firms
   earn income from mainland Chinese operations (included in GNP but not GDP).

2. **Using nominal values when real values are required:** Always adjust for inflation when
   comparing values across time. A 10% increase in nominal GDP means nothing if inflation is also
   10%. The DSE frequently tests the distinction between nominal and real GDP, nominal and real
   wages, and nominal and real interest rates.

3. **Assuming GDP per capita equals individual income:** GDP per capita is an average of total
   output divided by population, not a measure of individual income. It includes corporate profits,
   government revenue, and depreciation. Median household income per capita is a much better
   indicator of typical living standards. The difference between mean and median is particularly
   large in unequal societies like Hong Kong.

4. **Ignoring the base year when using index numbers:** When calculating real GDP from nominal GDP
   and the GDP deflator, remember that the deflator is an index with a specific base year. Real GDP
   $= \frac{{}\text{Nominal GDP}{}}{{}\text{GDP Deflator}{}} \times 100$. The "100" comes from the
   base year deflator being normalised to 100. Students sometimes forget this factor of 100.

5. **Misclassifying discouraged workers:** Discouraged workers are not unemployed -- they are out of
   the labour force. The unemployment rate only counts those actively seeking work. This means the
   unemployment rate can fall during a recession not because people find jobs, but because they give
   up looking (the "discouraged worker effect"). Always consider both the unemployment rate and the
   labour force participation rate together.
