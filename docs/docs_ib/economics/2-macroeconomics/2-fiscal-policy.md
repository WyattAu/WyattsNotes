---
title: Fiscal Policy
description:
  'IB Economics — government spending, taxation, budget deficits, crowding out, fiscal rules.'
date: 2026-05-21
tags: [ib, ib-economics]
categories: [ib-economics]
---

## Fiscal Policy

Fiscal policy involves government decisions about taxation and spending to influence the economy.

### Expansionary Fiscal Policy

Used during recessions to stimulate aggregate demand:

- **Increase government spending** ($G \uparrow$) -- direct injection into the economy
- **Decrease taxes** ($T \downarrow$) -- increases disposable income, boosting consumption ($C$) and
  investment ($I$)
- **Increase transfer payments** (unemployment benefits, welfare) -- supports household incomes

### Contractionary Fiscal Policy

Used to reduce inflationary pressures:

- **Decrease government spending** ($G \downarrow$)
- **Increase taxes** ($T \uparrow$)
- **Decrease transfer payments**

### The Multiplier Effect

The fiscal multiplier captures the idea that an initial change in spending generates a larger total
Change in national income through successive rounds of spending and re-spending.

**Simple multiplier (no taxes, no imports):**

$$k = \frac{1}{1 - \mathrm{MPC}} = \frac{1}{\mathrm{MPS}}$$

Where MPC is the marginal propensity to consume and MPS is the marginal propensity to save
($\mathrm{MPC} + \mathrm{MPS} = 1$).

An initial government spending increase of $\Delta G$ leads to a total change in output of:

$$\Delta Y = k \times \Delta G = \frac{\Delta G}{1 - \mathrm{MPC}}$$

**The multiplier with proportional taxation:**

$$k_T = \frac{1}{1 - \mathrm{MPC}(1 - t)}$$

Where $t$ is the marginal tax rate. Higher taxes reduce the multiplier because they leak spending
Power out of the circular flow at each round.

**The multiplier with imports:**

$$k_{T,M} = \frac{1}{\mathrm{MPS} + t \times \mathrm{MPC} + \mathrm{MPM}}$$

Where MPM is the marginal propensity to import. Imports are a leakage from the circular flow.

**Worked example:** if $\mathrm{MPC} = 0.75$, $t = 0.2$And $\mathrm{MPM} = 0.1$:

$$k = \frac{1}{0.25 + 0.2 \times 0.75 + 0.1} = \frac{1}{0.25 + 0.15 + 0.1} = \frac{1}{0.50} = 2$$

A `USD 100` billion increase in government spending would increase GDP by `USD 200` billion.

### The Balanced Budget Multiplier

If government spending and taxes increase by the same amount ($\Delta G = \Delta T$), the net effect
On GDP is positive but smaller than the spending multiplier alone:

$$k_B = \frac{\Delta Y}{\Delta G} = 1$$

A `USD 100` billion increase in both $G$ and $T$ increases GDP by `USD 100` billion. The government
Spending injection has a direct multiplier effect, while the tax increase reduces disposable income
By only the amount of the tax, and the induced reduction in consumption is MPC times the tax.

### Budget Position

- **Budget deficit**: $G > T$ (government spending exceeds tax revenue)
- **Budget surplus**: $T > G$
- **Balanced budget**: $G = T$
- **Public debt**: the accumulated total of past budget deficits, representing total government
  borrowing obligations

**Cyclical vs. Structural budget balance:**

- The **cyclical deficit** is the portion of the deficit attributable to the business cycle (lower
  tax revenues and higher transfer payments during recessions)
- The **structural deficit** is the deficit that would exist even at full employment, reflecting the
  underlying fiscal stance independent of the cycle

### Limitations of Fiscal Policy

- **Time lags**: recognition lag (identifying the problem), decision lag (political process of
  approving spending or tax changes), implementation lag (projects take time to begin)
- **Crowding out**: increased government borrowing to finance a deficit may raise interest rates,
  reducing private investment. The extent of crowding out depends on the state of the economy (it is
  less significant during deep recessions when resources are idle)
- **Size of the multiplier**: if the multiplier is small (due to high MPS, high MPM, or high tax
  rates), fiscal policy has limited impact
- **Political constraints**: tax increases and spending cuts are politically unpopular; deficit
  spending may face opposition
- **Inefficiency**: government spending may not be directed to the most productive uses
- **Ricardian equivalence**: the proposition that households anticipate future tax liabilities from
  current deficit spending and therefore save rather than spend any tax cuts, neutralising the
  fiscal stimulus. Empirical support is limited but the concept highlights the importance of
  expectations

## Fiscal Policy in Depth (HL Extension)

### Automatic Stabilisers

Automatic stabilisers are features of the tax and transfer system that automatically dampen Economic
fluctuations without any deliberate policy action:

- **Progressive income taxes**: as incomes rise during booms, taxpayers move into higher brackets,
  paying a larger fraction of income in tax. During recessions, falling incomes reduce tax
  liabilities, leaving more disposable income
- **Unemployment benefits**: when unemployment rises during recessions, transfer payments
  automatically increase, supporting household incomes and cushioning the fall in consumption
- **Welfare benefits**: means-tested benefits automatically increase when incomes fall
- **Corporate taxes**: profits fall during recessions, reducing corporate tax liabilities

**Effect on the multiplier:** automatic stabilisers reduce the effective multiplier by increasing
The cyclically-adjusted budget deficit during recessions (providing stimulus) and reducing it During
booms (restraining demand).

### Discretionary vs. Automatic Fiscal Policy

| Feature              | Automatic                         | Discretionary                                             |
| -------------------- | --------------------------------- | --------------------------------------------------------- |
| Timing               | Immediate (built into the system) | Subject to recognition, decision, and implementation lags |
| Political process    | No legislation required           | Requires legislative approval                             |
| Cyclical sensitivity | Automatically counter-cyclical    | May be pro-cyclical if poorly timed                       |
| Predictability       | Highly predictable                | Uncertain (depends on political negotiations)             |

### Crowding Out

**Full crowding out:** in a classical (full-employment) economy, increased government spending
Raises demand for loanable funds, increasing the interest rate and reducing private investment by
Exactly the amount of the fiscal expansion. $\Delta G$ is fully offset by $\Delta I$.

$$\Delta Y = 0 \text{ (in the classical case)}$$

**Partial crowding out:** in a Keynesian framework with idle resources, the interest rate rise
Reduces some investment but not all. The net increase in output is positive but smaller than the
Simple multiplier predicts.

$$0 < \Delta Y < k \cdot \Delta G$$

**No crowding out:** at the zero lower bound or in a deep recession (liquidity trap), increased
Government spending does not raise interest rates because the central bank accommodates the fiscal
Expansion. The full multiplier operates:

$$\Delta Y = k \cdot \Delta G$$

**Factors determining the degree of crowding out:**

- State of the economy: more crowding out at full employment, less during recessions
- Elasticity of investment demand for interest rates: more elastic investment $\implies$ more
  crowding out
- Central bank response: if the central bank accommodates (maintains interest rates), crowding out
  is minimised
- Openness of the economy: higher interest rates attract capital inflows, appreciating the exchange
  rate and reducing net exports (further crowding out)

### Ricardian Equivalence

Proposed by Robert Barro (1974), Ricardian equivalence states that households are forward-looking
And understand that current deficit spending must be financed by future taxes. Therefore:

$$\text{Tax cut today} = \text{Tax increase tomorrow (with interest)}$$

Households save the entire tax cut to pay future taxes, leaving consumption unchanged:

$$\Delta C = 0, \quad \Delta S = \Delta T_{\text{cut}}$$

**Conditions for Ricardian equivalence to hold:**

1. Perfect capital markets (households can borrow and save freely)
2. Infinite horizons (households care about their descendants' welfare through bequests)
3. Lump-sum taxes (not distortionary)
4. Full information about future government obligations

**Why Ricardian equivalence fails in practice:**

- Borrowing constraints: liquidity-constrained households cannot save a tax cut for future taxes
- Myopia: many households do not plan beyond the short term
- Finite lives: people do not fully internalise the tax burden on future generations
- Distortionary taxes: future taxes are not lump-sum but affect incentives
- Uncertainty: households may not know the timing or magnitude of future tax increases

Empirical evidence overwhelmingly rejects Ricardian equivalence. Tax cuts do stimulate consumption,
Particularly for liquidity-constrained households, but the multiplier is smaller than predicted by
Simple Keynesian models.

### Common Pitfalls in Fiscal Policy

- Confusing the cyclical deficit with the structural deficit. The cyclical deficit reflects the
  state of the economy; only the structural deficit reflects the government's discretionary fiscal
  stance.
- Assuming crowding out is always significant. In a recession with idle resources and low interest
  rates, crowding out may be negligible.
- Stating that government debt is always harmful. If debt is used to finance productive investment
  (infrastructure, education), it can enhance growth and be self-financing.

## Fiscal Rules (HL Extension)

### Types of Fiscal Rules

Fiscal rules constrain government discretion over spending and taxation:

1. **Budget balance rule:** the budget must be balanced (or the deficit must not exceed X% of GDP)
2. **Debt-to-GDP rule:** public debt must not exceed a ceiling (e.g., the Maastricht Treaty's 60%
   ceiling)
3. **Expenditure growth rule:** government spending growth must not exceed a specified rate (e.g.,
   the EU's expenditure benchmark)
4. **Cyclical adjustment rule:** the structural (cyclically-adjusted) balance must meet a target,
   allowing the actual balance to fluctuate with the cycle
5. **Revenue rule:** government revenue must not fall below a specified share of GDP

### The EU's Fiscal Rules

The Stability and Growth Pact (SGP) has evolved through several iterations:

1. **Original SGP (1997):** deficit $< 3\%$ of GDP; debt $< 60\%$ of GDP
2. **Reformed SGP (2005):** introduced cyclical adjustment, allowing temporary deviations
3. **Fiscal Compact (2012):** introduced structural balance requirements
4. **New SGP (2024):** introduced an expenditure benchmark alongside the structural balance
   requirement

### Evaluation of Fiscal Rules

**Advantages:**

- Credibility: fiscal rules signal commitment to sustainable public finances
- Counter-cyclical design (with cyclical adjustment) allows automatic stabilisers to operate during
  recessions
- Discipline: constrains the political incentive for deficit spending
- Transparency: requires governments to publish medium-term fiscal plans

**Disadvantages:**

- Pro-cyclical bias: many fiscal rules have been pro-cyclical, requiring austerity during recessions
  (as during the Eurozone crisis)
- Inflexibility: rigid rules may prevent necessary stimulus during crises
- Gaming: governments may manipulate forecasts to meet the rule (e.g., overly optimistic growth
  projections)
- One-size-fits-all: the same rule may not be appropriate for all countries
- Complexity: cyclical adjustment requires estimating potential output, which is imprecise

## Crowding Out: Detailed Analysis (HL Extension)

### Full Theoretical Framework

Crowding out occurs when increased government borrowing raises interest rates, reducing private
Investment. The extent of crowding out depends on the source of financing and the state of the
Economy.

**In the loanable funds market:**

$$S_{\text{private}} + S_{\text{government}} = I_{\text{private}} + I_{\text{government}}$$

When government saving falls (deficit increases), the supply of loanable funds shifts leftward,
Raising the real interest rate and reducing private investment.

**The degree of crowding out:**

1. **Complete crowding out:** in the classical model (vertical AS), an increase in $G$ exactly
   offsets $\Delta I$So $\Delta Y = 0$. This occurs when the economy is at full employment
2. **Partial crowding out:** in the Keynesian model (upward-sloping AS), some investment is
   displaced but output still increases
3. **No crowding out:** at the zero lower bound (horizontal LM curve), government borrowing does not
   raise interest rates because the central bank accommodates the fiscal expansion

### Open-Economy Crowding Out

In an open economy, higher interest rates attract foreign capital inflows, appreciating the Exchange
rate:

$$G \uparrow \implies r \uparrow \implies \text{Capital inflows} \uparrow \implies \text{Exchange rate} \uparrow$$
$$\implies (X - M) \downarrow \implies \text{Further reduction in AD}$$

This creates **double crowding out:** higher interest rates reduce both domestic investment and net
Exports. Small open economies with mobile capital are particularly vulnerable.

**Numerical example:**

An economy has MPC $= 0.75$MPM $= 0.2$And a 1 percentage point increase in $r$ reduces Investment by
USD 2 billion. The government increases spending by USD 10 billion.

Closed-economy multiplier: $\frac{1}{1 - \text{MPC}} = \frac{1}{0.25} = 4$.

Open-economy multiplier:
$\frac{1}{\text{MPM} + \text{MPS}} = \frac{1}{0.2 + 0.25} = \frac{1}{0.45} = 2.22$.

Simple increase: $\Delta Y = 2.22 \times 10 = 22.2$ billion.

With crowding out: if government borrowing raises $r$ by 2 percentage points, investment falls by
$2 \times 2 = 4$ billion, and the exchange rate appreciation reduces net exports by USD 1 billion.

Total offset $= 4 + 1 = 5$ billion.

$\Delta Y = 22.2 - 5 = 17.2$ billion. Crowding out reduces the stimulus effect by approximately 23%.

## Worked Examples

### Example 1: Fiscal Multiplier

The government increases spending by $100$ billion. The marginal propensity to consume (MPC) is 0.8.

$$k = \frac{1}{1 - MPC} = \frac{1}{1 - 0.8} = 5$$

The total increase in GDP: $\Delta Y = k \times \Delta G = 5 \times 100 = 500$ billion.

If the government also raises taxes by $100$ billion to fund the spending:

$$k_T = \frac{MPC}{1 - MPC} = \frac{0.8}{0.2} = 4$$

Tax multiplier effect: $\Delta Y = -4 \times 100 = -400$ billion. Net effect: $+500 - 400 = +100$
billion (balanced budget multiplier = 1).

### Example 2: Crowding Out

Government borrowing of $200$ billion raises the interest rate from 3% to 4%. Private investment
falls by $80$ billion.

Effective fiscal stimulus = $200 - 80 = 120$ billion (partial crowding out). If investment falls by
$200$ billion, full crowding out has occurred and the fiscal policy is ineffective.

## Summary

- **Fiscal policy** uses government spending and taxation to influence aggregate demand
- **Expansionary fiscal policy** (increased spending, decreased taxes) is used to combat recession
- **Contractionary fiscal policy** (decreased spending, increased taxes) is used to combat inflation
- **Budget deficits** can stimulate the economy but increase national debt
- **Crowding out** occurs when government borrowing raises interest rates, reducing private
  investment
- **Automatic stabilisers** (progressive taxes, welfare) smooth the business cycle without
  deliberate action
- **Fiscal rules** (debt-to-GDP targets, balanced budget amendments) constrain discretionary policy
- Key calculations: fiscal multiplier ($k = 1/(1-MPC)$), tax multiplier, balanced budget multiplier
