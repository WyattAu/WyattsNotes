---
title: Exchange Rates
description: 'IB Economics Exchange Rates notes covering key definitions, core concepts, worked examples, and practice questions for effective revision and exam readiness.'
date: 2026-05-21
tags: [ib, ib-economics]
categories: [ib-economics]
---

## Exchange Rates

### Types of Exchange Rate Systems

- **Floating exchange rate**: determined by market forces of supply and demand for the currency. The
  central bank does not intervene (or intervenes only rarely). Examples: USD, AUD, CAD, EUR
- **Fixed (pegged) exchange rate**: the central bank fixes the currency's value against another
  currency (or a basket). It maintains the peg by buying or selling foreign reserves. Examples: Hong
  Kong dollar (pegged to USD), some Gulf currencies
- **Managed float (dirty float)**: the exchange rate is primarily market-determined, but the central
  bank intervenes occasionally to smooth excessive fluctuations or achieve policy objectives

### Determinants of Floating Exchange Rates

The exchange rate is the price of one currency in terms of another. In a floating system, it is
Determined by supply and demand in the foreign exchange market.

**Factors that cause a currency to appreciate:**

- Higher interest rates (attracting capital inflows -- the interest rate differential)
- Stronger economic growth (attracting investment)
- Improved current account position (higher demand for exports increases demand for the currency)
- Speculation (expectations of future appreciation lead to buying now)
- Political stability and investor confidence (safe-haven flows)
- Higher returns on domestic assets

**Factors that cause a currency to depreciate:**

- Lower interest rates relative to other countries
- Current account deficit (excess supply of the currency as importers sell domestic currency)
- Higher inflation (reducing export competitiveness, purchasing power parity)
- Capital outflows (investors selling domestic assets)
- Political instability or economic uncertainty
- Expansionary monetary policy (increasing the money supply)

### Effects of Exchange Rate Changes

**Depreciation:**

- Exports become cheaper for foreign buyers ($X \uparrow$)
- Imports become more expensive ($M \downarrow$)
- Current account may improve (assuming the Marshall-Lerner condition holds)
- Imported inflation (higher cost of imported goods and raw materials)
- Foreign debt denominated in foreign currency becomes more expensive to service
- May improve the trade balance if the country is a net exporter
- Domestic consumers face higher prices for imported goods

**Appreciation:**

- Exports become more expensive for foreign buyers ($X \downarrow$)
- Imports become cheaper ($M \uparrow$)
- Current account may worsen
- Lower imported inflation (cheaper imported goods help contain price pressures)
- Cheaper foreign travel and imports for domestic consumers
- Foreign debt servicing becomes cheaper
- May reduce cost-push inflation

### The Marshall-Lerner Condition and J-Curve

A currency depreciation improves the current account balance only if the sum of the absolute values
Of PED for exports and PED for imports exceeds 1:

$$|\mathrm{PED}_X| + |\mathrm{PED}_M| > 1$$

**Intuition:** if demand for both exports and imports is elastic, the depreciation increases export
Revenue (more units sold at a lower price per unit) and reduces import expenditure (fewer units
Bought at a higher price per unit), improving the trade balance. If demand is inelastic, the
Opposite occurs.

**The J-curve effect:** in the short run, demand tends to be inelastic because consumers and firms
Have existing contracts and cannot quickly adjust. After a depreciation:

1. **Short run**: import costs rise immediately (because imports are priced in foreign currency),
   but export volumes take time to adjust. The current account initially **worsens**
2. **Medium to long run**: consumers substitute away from more expensive imports toward domestic
   goods, and foreign buyers increase purchases of cheaper exports. The current account **improves**

The path traces a J-shape when plotted over time.

### Purchasing Power Parity (PPP)

The theory of purchasing power parity states that exchange rates should adjust to equalise the
Purchasing power of different currencies:

**Absolute PPP**: the exchange rate should equal the ratio of price levels between two countries:

$$S = \frac{P_{\text{domestic}}}{P_{\text{foreign}}}$$

**Relative PPP**: changes in the exchange rate should reflect the inflation differential between two
Countries:

$$\%\Delta S \approx \pi_{\text{domestic}} - \pi_{\text{foreign}}$$

Where $S$ is the spot exchange rate (domestic currency per unit of foreign currency). If domestic
Inflation exceeds foreign inflation, the domestic currency should depreciate.

PPP is a long-run theory and is a poor predictor of short-run exchange rate movements. In the short
Run, exchange rates are influenced by interest rate differentials, capital flows, speculation, and
Risk sentiment.

### Fixed Exchange Rate Management

Under a fixed exchange rate system, the central bank must maintain the peg by:

1. **Buying or selling foreign exchange reserves**: if the currency is under depreciation pressure
   (excess supply), the central bank buys its own currency using foreign reserves. If under
   appreciation pressure, it sells its own currency and buys foreign currency
2. **Adjusting interest rates**: raising rates attracts capital inflows, supporting the currency;
   lowering rates has the opposite effect
3. **Capital controls**: restricting cross-border capital flows to reduce pressure on the exchange
   rate

**Problems with fixed exchange rates:**

- Loss of independent monetary policy (the central bank must set interest rates to maintain the peg,
  not to manage domestic demand)
- Need for large foreign exchange reserves
- Vulnerability to speculative attacks (if speculators believe the peg is unsustainable, they may
  sell the currency, forcing a devaluation -- self-fulfilling crisis)
- Misalignment: the fixed rate may diverge from the equilibrium rate, causing persistent trade
  imbalances

## Exchange Rate Determination: Advanced (HL Extension)

### Purchasing Power Parity (PPP)

**Absolute PPP:** the exchange rate should equal the ratio of national price levels:

$$S = \frac{P_{\text{domestic}}}{P_{\text{foreign}}}$$

**Relative PPP:** the rate of depreciation should equal the inflation differential:

$$\%\Delta S \approx \pi_{\text{domestic}} - \pi_{\text{foreign}}$$

**Big Mac Index (The Economist):** a light-hearted but instructive application of PPP. If a Big Mac
costs `USD 5.50` in the US and `EUR 4.50` in the Eurozone, the PPP-implied exchange rate is
$5.50/4.50 = 1.22$ USD/EUR. If the actual exchange rate is 1.10 USD/EUR, the euro is Undervalued by
approximately 10% relative to PPP.

**Limitations of PPP:**

- Non-tradable goods (housing, services) are included in price levels but cannot be arbitraged
  across countries
- Transport costs and trade barriers prevent goods from being perfectly tradable
- Quality differences in goods across countries
- Differences in consumption patterns and preferences
- PPP is a long-run theory; short-run deviations are large and persistent

### Interest Rate Parity

**Covered Interest Rate Parity (CIRP):**

$$F = S \times \frac{1 + i_{\text{domestic}}}{1 + i_{\text{foreign}}}$$

Where $F$ is the forward exchange rate and $S$ is the spot rate. If CIRP does not hold, risk-free
Arbitrage is possible (borrow in the low-interest currency, convert at the spot rate, invest in The
high-interest currency, and lock in the forward rate).

**Uncovered Interest Rate Parity (UIP):**

$$E(S_{t+1}) = S_t \times \frac{1 + i_{\text{domestic}}}{1 + i_{\text{foreign}}}$$

Where $E(S_{t+1})$ is the expected future spot rate. UIP states that the expected return on Domestic
and foreign assets should be equal when adjusted for expected exchange rate changes.

**Implication:** a country with higher interest rates should see its currency depreciate (to Offset
the interest rate advantage). In practice, high-interest-rate currencies often appreciate In the
short run (the "forward premium puzzle").

### The Marshall-Lerner Condition: Derivation

The trade balance in domestic currency (assuming imports are denominated in foreign currency and
Then converted):

$$\mathrm{TB} = P_X \cdot X(S) - S \cdot P_M^* \cdot M(S)$$

Where $S$ is the domestic currency price of foreign currency (an increase in $S$ represents
Depreciation).

For a depreciation to improve the trade balance, the derivative of TB with respect to $S$ must be
Positive. This condition simplifies to:

$$|\mathrm{PED}_X| + |\mathrm{PED}_M| > 1$$

Where $\mathrm{PED}_X = \frac{\%\Delta X}{\%\Delta S}$ and
$\mathrm{PED}_M = \frac{\%\Delta M}{\%\Delta S}$.

**Empirical estimates:** in the short run (within 1 year), PED values are low (sum < 1), So the
Marshall-Lerner condition is not satisfied. In the medium to long run (2--5 years), PED Values
increase and the condition is satisfied. The J-curve describes this transition.

### J-Curve: Detailed Analysis

**Phase 1 (short run, 0--6 months):**

- Import contracts are denominated in foreign currency and fixed in the short term
- Depreciation raises the domestic currency cost of existing import contracts
- Export volumes cannot adjust immediately (production capacity constraints, new marketing efforts)
- The trade balance **worsens**

**Phase 2 (adjustment, 6--18 months):**

- New contracts are negotiated at the new exchange rate
- Domestic consumers substitute away from expensive imports toward domestic alternatives
- Foreign buyers respond to cheaper export prices by increasing orders
- The trade balance begins to **improve**

**Phase 3 (long run, 18+ months):**

- Full adjustment of trade flows
- If the Marshall-Lerner condition holds, the trade balance is **higher** than before depreciation
- The long-run improvement may be partially offset by higher domestic inflation (imported inflation)
  feeding into wages and other costs

## Exchange Rate Regimes: Comparative Analysis (HL Extension)

### Types of Exchange Rate Regimes

1. **Currency union:** countries share a common currency and a common central bank (e.g., Eurozone,
   CFA franc zone)
2. **Currency board:** domestic currency is fully backed by foreign reserves and convertible at a
   fixed rate (e.g., Hong Kong dollar pegged to USD)
3. **Fixed (pegged) exchange rate:** the central bank intervenes to maintain a target rate, with
   some flexibility (e.g., Saudi riyal pegged to USD)
4. **Crawling peg:** the exchange rate is adjusted periodically in small, pre-announced amounts
   (e.g., Nicaragua's crawling peg against USD)
5. **Managed float:** the exchange rate is determined by market forces, but the central bank
   intervenes occasionally to smooth volatility (e.g., India, Singapore)
6. **Free float:** the exchange rate is determined entirely by market forces without government
   intervention (e.g., USD, AUD, NZD)

### The Impossible Trinity (Trilemma)

A country cannot simultaneously maintain:

1. A fixed exchange rate
2. Free capital mobility
3. An independent monetary policy

It must choose two of the three:

| Regime                                   | Fixed exchange rate | Free capital mobility | Independent monetary policy |
| ---------------------------------------- | ------------------- | --------------------- | --------------------------- |
| Currency board                           | Yes                 | Yes                   | No                          |
| Bretton Woods (1950s--60s)               | Yes                 | No                    | Yes                         |
| Free float (e.g., USA)                   | No                  | Yes                   | Yes                         |
| Capital controls (e.g., China, pre-2005) | Yes                 | No                    | Yes                         |

### Advantages and Disadvantages of Each Regime

**Fixed exchange rates:**

_Advantages:_

- Reduces exchange rate uncertainty, promoting trade and investment
- Disciplines monetary policy (prevents inflationary finance)
- Reduces transaction costs for international trade

_Disadvantages:_

- Requires large foreign exchange reserves to defend the peg
- Loss of independent monetary policy (the interest rate must match the anchor currency)
- Vulnerable to speculative attacks (as in the 1997 Asian financial crisis)
- Requires fiscal discipline (fiscal deficits put pressure on the peg)

**Floating exchange rates:**

_Advantages:_

- Automatic adjustment to external shocks (the exchange rate absorbs the shock)
- Independent monetary policy (the central bank can set interest rates for domestic objectives)
- No need for large foreign exchange reserves

_Disadvantages:_

- Exchange rate volatility creates uncertainty for trade and investment
- Potential for excessive volatility (speculative bubbles, overshooting)
- May lead to misalignment (persistently overvalued or undervalued exchange rates)

### The Asian Financial Crisis (1997--1998): A Case Study

**Causes:**

1. **Fixed exchange rates with free capital mobility:** Thailand, Indonesia, and South Korea
   maintained fixed or semi-fixed exchange rates while liberalising capital accounts, creating the
   impossible trinity problem
2. **Short-term foreign currency debt:** firms and banks borrowed in USD at low interest rates,
   creating currency mismatches (revenues in local currency, debts in USD)
3. **Speculative attack:** when investors lost confidence, capital outflows forced central banks to
   deplete reserves defending the peg
4. **Contagion:** the crisis spread from Thailand to Indonesia, South Korea, Malaysia, and the
   Philippines

**Sequence of events:**

$$\text{Capital inflows} \implies \text{Credit boom} \implies \text{Asset price bubble}$$
$$\implies \text{Loss of confidence} \implies \text{Capital outflows}$$
$$\implies \text{Reserve depletion} \implies \text{Forced devaluation}$$
$$\implies \text{Currency crisis} \implies \text{Banking crisis} \implies \text{Recession}$$

**Impact:**

- Thai baht: lost 50% of its value against USD
- Indonesian rupiah: lost 80%
- South Korean won: lost 50%
- GDP declines: Thailand -10.5%, Indonesia -13.1%, South Korea -5.1% (1998)
- Poverty increased dramatically: Indonesian poverty rate rose from 11% to 20%

**Lessons:**

1. The impossible trinity matters: fixed rates + free capital flows + independent monetary policy is
   unsustainable
2. Short-term foreign currency debt is dangerous for emerging markets
3. Capital account liberalisation should be sequenced carefully (domestic financial reform before
   capital account opening)
4. International financial architecture needs a better mechanism for resolving sovereign debt crises
   (the IMF's role was controversial)

## Common Pitfalls

- Confusing the exchange rate notation. "GBP/USD = 1.25" means £1 = $1.25. A "rise" in GBP/USD means
  the pound has appreciated
- Stating that a depreciation "makes imports cheaper." A depreciation makes imports more expensive
  (more domestic currency needed) and exports cheaper for foreign buyers
- Confusing devaluation (deliberate government action under a fixed regime) with depreciation
  (market-driven change under a floating regime)
- Forgetting that Marshall-Lerner condition must hold for a depreciation to improve the trade
  balance. If $|PED_x| + |PED_m| > 1$, the J-curve effect applies
- Assuming exchange rate changes affect only trade. They also affect FDI flows, debt servicing, and
  inflation
- Ignoring the J-curve: in the short run, a depreciation can worsen the trade balance before
  improving it (because import contracts are pre-existing)

## Worked Examples

### Example 1: Exchange Rate Appreciation

The EUR/USD rate moves from 1.10 to 1.20. The euro has appreciated by:

$$\frac{1.20 - 1.10}{1.10} \times 100 = 9.09\%$$

European exports become 9.09% more expensive for US buyers. European imports from the US become
cheaper.

### Example 2: Marshall-Lerner Condition

Country A's exports have $PED_x = 0.6$ and imports have $PED_m = 0.5$.

$|PED_x| + |PED_m| = 0.6 + 0.5 = 1.1 > 1$

The Marshall-Lerner condition is satisfied: a depreciation of Country A's currency will improve the
trade balance (after the J-curve adjustment period).

## Summary

- **Exchange rates** can be floating, fixed, or managed (dirty float)
- **Appreciation** makes imports cheaper and exports more expensive; **depreciation** has the
  opposite effect
- Exchange rates are determined by supply and demand for currencies, influenced by interest rate
  differentials, inflation, current account balance, speculation, and government intervention
- **The Marshall-Lerner condition** ($|PED_x| + |PED_m| > 1$) determines whether depreciation
  improves the trade balance
- **The J-curve** describes the short-run deterioration before long-run improvement in the trade
  balance
- Fixed exchange rates require foreign currency reserves and may involve sacrificing monetary policy
  independence (impossible trinity)
- Key diagrams: exchange rate determination, J-curve, effects of appreciation/depreciation on trade
