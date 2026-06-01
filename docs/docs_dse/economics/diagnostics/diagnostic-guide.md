---
title: 'DSE Economics -- Diagnostic Guide'
description: 'DSE Economics -- Diagnostic notes covering key definitions, core concepts, worked examples, and practice questions for solid study and examination practice.'
slug: diagnostic-guide
hide_table_of_contents: true
---

# DSE Economics — Diagnostic Guide

## Coverage Map

### Microeconomics

| Diagnostic File                                              | Topics Covered                                                                                           | Source File                                             |
| ------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------- |
| `diag-./1-basic-economic-concepts/1_basic-economic-concepts` | Scarcity, opportunity cost, PPC, economic systems, division of labour, specialisation                    | `./1-basic-economic-concepts/1_basic-economic-concepts` |
| `diag-./2-demand-supply-markets/1_demand-supply-and-markets` | PED, PES, equilibrium, consumer/producer surplus, price controls, subsidies                              | `./2-demand-supply-markets/1_demand-supply-and-markets` |
| `diag-market-structure.md`                                   | Perfect competition, monopoly, monopolistic competition, oligopoly, barriers to entry, game theory       | `market-structure-and-theory-of-the-firm.md`            |
| `diag-market-failure.md`                                     | Externalities, Pigouvian tax, public goods, free rider problem, information asymmetry, adverse selection | `market-failure-and-government-intervention.md`         |

### Macroeconomics

| Diagnostic File                  | Topics Covered                                                                                      | Source File                                      |
| -------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------------------ |
| `diag-national-income.md`        | GDP/GNP calculation, real vs nominal, GDP deflator, per capita measures, limitations of GDP         | `./5-macroeconomic-indicators/1_national-income` |
| `diag-money-banking.md`          | Money creation, money multiplier, functions of money, interest rate determination, banking system   | `./8-money-and-banking/1_money-and-banking`      |
| `diag-fiscal-monetary-policy.md` | Fiscal multiplier, monetary transmission, budget balance, policy mix, supply-side policy            | `fiscal-and-monetary-policy.md`                  |
| `diag-international-trade.md`    | Comparative advantage, exchange rates, tariffs/quotas, balance of payments, PPP, impossible trinity | `international-trade-and-finance.md`             |

## Grading Rubric

### PASS Criteria

- Correctly solve at least 2 out of 3 Unit Tests with full working
- Correctly solve at least 2 out of 3 Integration Tests showing cross-topic analysis
- Correct use of economic terminology (PED, DWL, multiplier, comparative advantage, etc.)
- Diagrams labelled correctly where applicable

### PARTIAL Criteria

- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of concepts but makes calculation errors
- Partially correct analysis with some steps missing
- Can explain concepts qualitatively but struggles with quantitative analysis

### FAIL Indicators

- Cannot calculate PED, PES, or multipliers correctly
- Confuses nominal and real values
- Cannot apply opportunity cost reasoning
- Unable to identify market failures or appropriate policy responses

## Prerequisite Chains

```
Basic Economic Concepts (scarcity, opportunity cost, PPC)
  └── Demand, Supply, and Markets (PED, PES, equilibrium)
        ├── Market Structure (requires surplus analysis)
        │     └── Market Failure (builds on welfare analysis)
        └── International Trade (comparative advantage builds on opportunity cost)

National Income and Macroeconomic Indicators
  ├── Money and Banking (money supply, interest rates)
  │     ├── Fiscal and Monetary Policy (requires money/banking understanding)
  │     └── International Trade and Finance (exchange rates, BOP)
  └── Fiscal and Monetary Policy (AD-AS model)
```

**Recommended order of diagnostic completion:**

1. `diag-basic-economic-concepts` -- foundational concepts
2. `diag-demand-supply-markets` -- core analytical toolkit
3. `diag-market-failure` -- welfare analysis and government intervention
4. `diag-market-structure` -- requires supply/demand and welfare understanding
5. `diag-national-income` -- macroeconomic foundations
6. `diag-money-banking` -- monetary system mechanics
7. `diag-fiscal-monetary-policy` -- policy analysis
8. `diag-international-trade` -- integrates micro and macro concepts

## Timing Recommendations

| Diagnostic                     | Recommended Time | Notes                                                |
| ------------------------------ | ---------------- | ---------------------------------------------------- |
| `diag-basic-economic-concepts` | 30 minutes       | Conceptual questions with some calculation           |
| `diag-demand-supply-markets`   | 40 minutes       | Quantitative elasticity and surplus questions        |
| `diag-market-structure`        | 45 minutes       | Game theory and profit maximisation are complex      |
| `diag-market-failure`          | 40 minutes       | Multi-step welfare analysis                          |
| `diag-national-income`         | 35 minutes       | GDP accounting and real/nominal conversions          |
| `diag-money-banking`           | 35 minutes       | Money multiplier and interest rate calculations      |
| `diag-fiscal-monetary-policy`  | 45 minutes       | Multiplier and policy analysis                       |
| `diag-international-trade`     | 40 minutes       | Comparative advantage and exchange rate calculations |

**Total recommended time:** approximately 5 hours (spread across 3--4 sessions).

## How to Use These Diagnostics

1. Complete each diagnostic without notes. Show all working for quantitative questions.
2. Check solutions immediately, comparing both the method and the final answer.
3. If you score FAIL, review the corresponding source file before retrying.
4. If you score PARTIAL, focus on specific calculation errors or conceptual gaps.
5. Integration Tests are critical for DSE exam preparation -- DSE frequently requires applying
   concepts across topics (e.g., using PED in the context of government policy, or combining
   national income analysis with trade).
6. Always practice drawing labelled diagrams for microeconomic questions -- they carry significant
   marks in the DSE exam.
7. Pay special attention to the distinction between real and nominal values, as this is a common
   exam pitfall.

## Extended Practice: Cross-Topic Synthesis Questions

### SQ-1: The Full Macro Policy Chain

**Question:** A small open economy with a fixed exchange rate experiences a recession. GDP is 5%
below potential, unemployment is 8% (natural rate is 4%), and inflation is 1%. The current account
is in deficit. (a) Explain why monetary policy cannot be used to address the recession. (b) Design a
fiscal policy response, calculating the required fiscal expansion if the multiplier is 2. (c)
Explain how the fiscal expansion might affect the current account. (d) What structural reforms could
address the current account deficit while supporting growth?

**Solution:**

(a) Under a fixed exchange rate with free capital mobility, the impossible trinity means monetary
policy is not independent. Any attempt to lower interest rates would cause capital outflow and put
pressure on the exchange rate peg. The central bank would be forced to sell foreign reserves and buy
domestic currency, reversing the interest rate cut. Monetary policy is effectively determined by the
anchor currency's central bank.

(b) Required output increase $= 5\%$ of potential GDP. If multiplier $= 2$Required fiscal injection
$= \frac{5\%}{2} = 2.5\%$ of GDP. This could be achieved through increased government spending, tax
cuts, or a combination. For a GDP of $\$500$ billion, the required injection $= \$12.5$ billion.

(c) The fiscal expansion increases aggregate demand, which increases imports (as domestic residents
spend more, including on foreign goods). Since the exchange rate is fixed, there is no automatic
exchange rate adjustment to correct the trade imbalance. The current account deficit would widen.
This is the **twin deficits** problem: fiscal expansion worsens the current account.

(d) Structural reforms to address the current account deficit:

1. **Export diversification:** Invest in high-value-added industries (e.g., technology, financial
   services) to increase export earnings.
2. **Productivity improvements:** Invest in education, infrastructure, and technology to improve
   competitiveness, making exports cheaper and more attractive.
3. **Import substitution:** Develop domestic industries to replace imports (though this risks
   protectionism and inefficiency).
4. **Energy policy:** Reduce dependence on imported energy through renewable energy or nuclear
   power.

### SQ-2: Micro-Macro Integration -- Housing Market

**Question:** Hong Kong's housing market has demand $Q_d = 500 - 0.1P$ and supply
$Q_s = -200 + 0.2P$ (where $P$ is in HK$10,000 and $Q$ is in thousands of units). (a) Calculate
equilibrium price and quantity. (b) The government imposes a price ceiling at $P = 1500$
(HK$15,000). Calculate the resulting shortage, change in consumer surplus, change in producer
surplus, and deadweight loss. (c) Explain how high housing costs affect Hong Kong's macroeconomy
(inflation, labour mobility, income inequality). (d) Evaluate rent control versus increasing land
supply as solutions.

**Solution:**

(a) $500 - 0.1P = -200 + 0.2P$$700 = 0.3P$$P^* = 2333.3$ (i.e., HK$23,333$).
$Q^* = 500 - 233.3 = 266.7$ thousand units.

(b) At $P = 1500$: $Q_d = 500 - 150 = 350$. $Q_s = -200 + 300 = 100$. Shortage $= 350 - 100 = 250$
thousand units.

CS before $= \frac{1}{2}(5000 - 2333.3)(266.7) = \frac{1}{2}(2666.7)(266.7) = 355\,556$ (in
HK$10,000 units).

CS after $= \frac{1}{2}(5000 - 1500 + 3500 - 1500)(100) = \frac{1}{2}(3500 + 2000)(100) = 275\,000$.

Note: The demand price at $Q = 100$ is
$P = 500 - 1000/0.1 = 500 - 1000 = $ wait, recalculate: $Q_d = 500 - 0.1P$So
$P = (500 - Q)/0.1 = 5000 - 10Q$. At $Q = 100$: $P = 5000 - 1000 = 4000$.

CS after
$= \frac{1}{2}(4000 - 1500)(100) + (4000 - 1500)(0) = $ Actually, CS with price ceiling: $CS = \frac{1}{2}(P_{max} - P_{ceiling} + P_{demand\_at\_Q_s} - P_{ceiling}) \times Q_s$.
No -- the correct formula for CS under a binding ceiling is the area below the demand curve and
above the ceiling price, up to the quantity traded ($Q_s$):

$CS = \int_0^{100} (5000 - 10Q) \, dQ - 1500 \times 100 = [5000Q - 5Q^2]_0^{100} - 150\,000 = (500\,000 - 50\,000) - 150\,000 = 300\,000$.

PS before $= \frac{1}{2}(2333.3 - 1000)(266.7) = \frac{1}{2}(1333.3)(266.7) = 177\,778$.

PS after $= \frac{1}{2}(1500 - 1000)(100) = 25\,000$.

DWL $= (355\,556 + 177\,778) - (300\,000 + 25\,000) = 533\,334 - 325\,000 = 208\,334$.

(c) High housing costs in Hong Kong:

- **Inflation:** Rent is a major component of the CPI (approximately 30% weight in Hong Kong's CPI).
  Rising rents push up measured inflation, potentially triggering tighter monetary conditions
  (though under the Currency Board, this is largely determined by the Fed).
- **Labour mobility:** High housing costs make it difficult for workers to move to areas with better
  job opportunities, reducing labour market efficiency. Young professionals may emigrate to other
  cities with lower housing costs.
- **Income inequality:** Property owners benefit from rising prices (wealth effect), while renters
  face increasing costs. This widens the wealth gap and contributes to Hong Kong's high Gini
  coefficient.
- **Consumption crowding out:** High rent-to-income ratios (often exceeding 50% for lower-income
  households) reduce disposable income for other consumption, dampening aggregate demand.

(d) **Rent control:** Advantages -- provides immediate relief for existing tenants, prevents
displacement. Disadvantages -- reduces the incentive for landlords to maintain properties (quality
deterioration), discourages new construction (reducing long-run supply), creates black markets. Rent
control addresses the symptom (high prices) but worsens the underlying cause (insufficient supply).

**Increasing land supply:** Advantages -- addresses the root cause by shifting supply rightward,
reducing equilibrium price. In the long run, this benefits both renters and new entrants.
Disadvantages -- long implementation lag (5--15 years from planning to completion), environmental
and community opposition, requires government land releases or rezoning. This is the economically
superior solution but requires political will and time.

**Evaluation:** A combination approach is optimal: short-term measures (housing allowances,
increased public housing) to help current residents, combined with long-term supply expansion
(Lantau development, Northern Metropolis, brownfield redevelopment) to address the structural
shortage. Hong Kong's Land Resumption Ordinance and zoning regulations constrain supply; reforming
these would be more effective than price controls.

### SQ-3: Development Economics and the DSE

**Question:** Compare Country A (GDP per capita $\$50,000$, growth rate 2%, HDI 0.92, literacy rate
99%, life expectancy 83) with Country B (GDP per capita $\$5,000$Growth rate 7%, HDI 0.65, literacy
rate 75%, life expectancy 68). (a) Calculate how many years it will take for Country B's GDP per
capita to equal Country A's current level, assuming constant growth rates. (b) Explain three reasons
why GDP per capita alone is an inadequate measure of development. (c) Using the HDI components,
suggest specific policies Country B should prioritise. (d) Discuss the role of international trade
in development, referring to Hong Kong's experience.

**Solution:**

(a) Using the rule of 70 or the compound growth formula: $50\,000 = 5\,000 \times (1.07)^n$.

$(1.07)^n = 10$, $n = \frac{\ln 10}{\ln 1.07} = \frac{2.3026}{0.0677} = 34.0$ years.

It would take approximately 34 years for Country B to reach Country A's current GDP per capita,
assuming constant 7% growth (which is very optimistic -- growth rates slow as economies develop, as
predicted by the Solow convergence model).

(b) Three reasons GDP per capita is inadequate:

1. **Distribution:** GDP per capita is a mean that hides inequality. Country B could have high GDP
   per capita concentrated among a small elite, with most of the population in poverty.
2. **Non-market activities:** GDP excludes subsistence farming, unpaid household work, and informal
   economic activities, which are significant in developing countries.
3. **Quality of life factors:** GDP does not capture health, education, environmental quality,
   political freedom, or personal security -- all critical components of human development.

(c) Based on HDI components:

1. **Health (life expectancy 68 vs 83):** Invest in public healthcare infrastructure, vaccination
   programmes, clean water and sanitation, maternal and child health services. Address malnutrition
   and infectious diseases.
2. **Education (literacy 75% vs 99%):** Increase primary and secondary school enrolment, invest in
   teacher training, reduce dropout rates (especially for girls), expand vocational and technical
   education.
3. **Standard of living (GDP per capita $\$5,000$):** Promote industrialisation, attract FDI,
   develop export-oriented manufacturing, invest in infrastructure (roads, electricity,
   telecommunications) to reduce business costs.

(d) **Hong Kong's experience with trade and development:**

- Hong Kong's economic development was driven by export-oriented industrialisation. Starting in the
  1950s, Hong Kong leveraged its natural harbour, low-cost labour, and entrepreneurial population to
  become a manufacturing hub (textiles, electronics, toys).
- As wages rose in the 1970s--1980s, manufacturing relocated to Guangdong province, and Hong Kong
  transitioned to a service-based economy (finance, logistics, trade, tourism).
- International trade allowed Hong Kong to overcome its small domestic market and resource
  constraints. By specialising in goods and services where it had a comparative advantage
  (geographical location, legal system, human capital), Hong Kong achieved one of the highest GDP
  per capita levels in the world.
- The lesson for Country B is that trade openness, combined with investment in human capital and
  infrastructure, can accelerate development. However, trade must be managed carefully to avoid
  over-dependence on a narrow range of exports (the "resource curse" or "commodity dependence"
  problem).

### SQ-4: Exchange Rate Regimes and Economic Stability

**Question:** Country X is considering three exchange rate regimes: (1) a hard peg (Currency Board),
(2) a managed float, and (3) a free float. The country has high inflation (15%), a large current
account deficit, and low foreign exchange reserves. (a) For each regime, explain the advantages and
disadvantages. (b) Which regime would you recommend and why? (c) Under your recommended regime,
explain the appropriate monetary and fiscal policy response. (d) How does this analysis apply to
Hong Kong's Linked Exchange Rate System?

**Solution:**

(a) **Hard peg (Currency Board):**

- Advantages: Provides credibility and anchors inflation expectations. Eliminates exchange rate
  volatility, facilitating trade and investment. Disciplines fiscal policy (cannot monetise
  deficits).
- Disadvantages: No independent monetary policy (must follow the anchor currency's central bank).
  Requires adequate foreign reserves. Vulnerable to speculative attacks if reserves are
  insufficient. Cannot devalue to regain competitiveness.

**Managed float:**

- Advantages: Allows some flexibility to absorb external shocks while providing stability through
  intervention. The central bank retains some monetary policy autonomy.
- Disadvantages: Requires substantial reserves for intervention. Creates uncertainty about the true
  exchange rate policy. Can lead to conflicts between domestic objectives and exchange rate targets.

**Free float:**

- Advantages: Automatic adjustment to external shocks (depreciation corrects current account
  deficits). No need for reserves to defend a peg. Full monetary policy independence.
- Disadvantages: Exchange rate volatility creates uncertainty for traders and investors. Risk of
  excessive volatility or speculative bubbles. Requires deep and liquid foreign exchange markets.

(b) Given high inflation (15%), a large current account deficit, and low reserves, a **managed float
transitioning to a free float** is recommended. A hard peg is not viable because: (i) low reserves
make it indefensible against speculative attack, (ii) the current account deficit requires exchange
rate depreciation to correct, (iii) high inflation means the currency is likely overvalued at any
fixed rate. A free float allows the currency to depreciate, which: (i) makes exports cheaper and
imports more expensive, improving the current account, (ii) reduces imported inflation (depreciation
initially raises import prices, but over time, a weaker currency can boost export-led growth).

(c) Under a free float with high inflation:

- **Monetary policy:** Tighten (raise interest rates) to reduce inflation. This will also attract
  capital inflows, partially supporting the currency.
- **Fiscal policy:** Reduce the fiscal deficit to reduce aggregate demand and inflation. Cut
  non-essential spending and improve tax collection.
- **Structural reform:** Improve export competitiveness, diversify the economy, and build foreign
  exchange reserves during periods of currency strength.

(d) **Hong Kong's LERS:** Hong Kong's Currency Board is the opposite of the recommendation for
Country X because Hong Kong's fundamentals are entirely different. Hong Kong has: (i) massive
foreign exchange reserves (US$180+ billion, equivalent to over 40% of GDP), (ii) fiscal reserves of
HK$800+ billion, (iii) low inflation (anchored by the USD peg), (iv) a persistent current account
surplus. The Currency Board works for Hong Kong because: the fiscal position is strong (no
monetisation of deficits), reserves are adequate to defend the peg, and the trade-to-GDP ratio is
extremely high (exchange rate stability is critical). The lesson is that the optimal exchange rate
regime depends on a country's specific economic conditions -- there is no one-size-fits-all
solution.

## Exam Technique Tips for DSE Economics

1. **Always show working for calculations:** DSE markers award method marks even if the final answer
   is wrong. For PED calculations, show the formula, the values substituted, and the final answer
   with the correct sign and interpretation (elastic vs inelastic).

2. **Use diagrams where possible:** Microeconomic questions almost always require a diagram. Label
   axes ($P$$Q$), curves ($D$$S$$MR$$MC$$ATC$$AVC$), equilibrium points, and shaded areas (CS, PS,
   DWL, tax revenue). An unlabelled diagram earns minimal marks.

3. **Define key terms at the start of each answer:** Begin by defining the economic concept in the
   question (e.g., "Opportunity cost is the value of the next best alternative forgone"). This
   demonstrates understanding and secures definition marks.

4. **Use real-world Hong Kong examples:** DSE examiners reward answers that apply economic theory to
   Hong Kong's context. Examples include: the Linked Exchange Rate, public housing, the MPC, HKMA,
   Competition Ordinance, Cross-Border Trade, and the Greater Bay Area.

5. **Address both sides of evaluation questions:** For 7--8 mark questions, always include
   evaluation: discuss advantages and disadvantages, short-run vs long-run effects, and conditions
   under which the analysis may or may not hold. Use phrases like "however," "on the other hand," "
   on," and "in the long run."

6. **Distinguish between equity and efficiency:** Many government intervention questions require
   weighing equity (fairness) against efficiency (maximising total surplus). Acknowledge the
   trade-off and explain why the optimal policy depends on society's preferences.
