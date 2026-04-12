---
title: Fiscal and Monetary Policy
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Economics
categories:
  - DSE
  - Economics
slug: fiscal-and-monetary-policy
---

## Overview of Macroeconomic Policy

Macroeconomic policy refers to government actions designed to influence the overall performance of
the economy. The primary objectives are:

1. **Economic growth:** Sustained increase in real GDP and living standards
2. **Full employment:** Minimising cyclical unemployment (achieving the natural rate of
   unemployment)
3. **Price stability:** Keeping inflation low and stable (typically targeting 2-3%)
4. **Balance of payments stability:** Avoiding persistent, unsustainable current account deficits
5. **Equitable income distribution:** Reducing excessive inequality

The three main categories of macroeconomic policy are **fiscal policy** (government spending and
taxation), **monetary policy** (money supply and interest rates), and **supply-side policy**
(improving the productive capacity of the economy).

This file assumes familiarity with the monetary policy tools covered in
[money-and-banking.md](money-and-banking.md) and the national income concepts covered in
[national-income-and-macroeconomic-indicators.md](national-income-and-macroeconomic-indicators.md).

---

## Fiscal Policy

### Definition

Fiscal policy is the use of government spending, taxation, and borrowing to influence the level of
aggregate demand, economic activity, and employment in the economy.

### Government Spending

Government spending falls into two categories:

| Category            | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Current expenditure | Day-to-day spending on goods and services: public sector wages, healthcare, education, defence, welfare. Recurrent and predictable.               |
| Capital expenditure | Investment in physical infrastructure: roads, bridges, public housing, airports, hospitals, schools. Increases the economy's productive capacity. |

Current expenditure directly affects aggregate demand in the short run. Capital expenditure affects
both aggregate demand (in the short run, through construction spending) and aggregate supply (in the
long run, by expanding the economy's productive capacity).

### Taxation

Taxes are compulsory payments to the government. They serve two functions in macroeconomic policy:
financing government expenditure and influencing economic behaviour.

| Tax Type       | Description                                                                                                                                                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Direct taxes   | Taxes on income and wealth: personal income tax, corporate profits tax, property tax. These reduce disposable income and affect incentives to work and invest. |
| Indirect taxes | Taxes on spending: VAT/sales tax, excise duties, customs duties. These raise prices and reduce real purchasing power.                                          |

### Budget Balance

$$\text{Budget balance} = T - G$$

Where `T` is total tax revenue and `G` is total government expenditure (excluding debt interest
payments for simplicity).

| Situation       | Condition | Effect on AD                                                                 |
| --------------- | --------- | ---------------------------------------------------------------------------- |
| Budget surplus  | `T \gt G` | Contractionary (reduces AD)                                                  |
| Balanced budget | `T = G`   | Neutral (some say mildly expansionary due to the balanced budget multiplier) |
| Budget deficit  | `T \lt G` | Expansionary (increases AD)                                                  |

---

## Expansionary Fiscal Policy

### Objective

To stimulate aggregate demand during a recession or when the economy is operating below full
employment (a recessionary gap exists).

### Instruments

| Instrument                   | Mechanism                                                                                                           |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| Increase government spending | Direct injection into the circular flow of income; raises AD; multiplier effect amplifies the initial spending.     |
| Decrease taxes               | Increases disposable income; households spend more; firms invest more; AD rises.                                    |
| Increase transfer payments   | Increases the income of recipients (unemployed, low-income households); they spend most of it (high MPC); AD rises. |
| Investment tax credits       | Reduces the cost of investment for firms; encourages capital spending; AD rises and LRAS may shift right.           |

### The Multiplier Effect

The multiplier effect is the mechanism by which an initial change in spending (or taxation) produces
a larger final change in national income.

When the government increases spending by an amount, this becomes income for someone else (workers,
suppliers). Those recipients spend a portion of this additional income (determined by the marginal
propensity to consume, MPC), which becomes income for yet others. This process continues, with each
round of spending generating further income and further spending, though the amount gets smaller
each round.

**Simple spending multiplier (no taxes, no imports):**

$$k = \frac{1}{1 - \text{MPC}} = \frac{1}{\text{MPS}}$$

Where MPC = marginal propensity to consume, MPS = marginal propensity to save.

$$\text{MPC} + \text{MPS} = 1$$

**Complex multiplier (with taxes and imports):**

$$k = \frac{1}{\text{MPS} + \text{MPT} + \text{MPM}}$$

Where MPT = marginal propensity to tax (proportion of additional income paid in tax) and MPM =
marginal propensity to import (proportion of additional income spent on imports).

**Why do taxes and imports reduce the multiplier?** Taxes and imports are **leakages** from the
circular flow. Each round of spending, some income is taxed (not available for consumption) and some
is spent on imports (not part of domestic demand). These leakages reduce the amount of income
available for the next round of domestic spending, shrinking the multiplier.

$$\Delta Y = k \times \Delta G$$

**Tax multiplier (absolute value is smaller than the spending multiplier):**

$$\Delta Y = -\text{MPC} \times k \times \Delta T$$

A tax cut of `Delta T` increases disposable income by `Delta T`, but only `MPC x Delta T` is spent
(the rest is saved). This initial spending is then multiplied. The tax multiplier is always smaller
than the spending multiplier (in absolute value) because part of the tax cut is saved, not spent.

### Worked Example: Expansionary Fiscal Policy

The government increases spending by USD 100 billion. MPC = 0.8, MPT = 0.15, MPM = 0.05.

$$k = \frac{1}{0.2 + 0.15 + 0.05} = \frac{1}{0.4} = 2.5$$

$$\Delta Y = 2.5 \times 100 = 250$$

National income increases by USD 250 billion. The initial USD 100 billion injection generates an
additional USD 150 billion through the multiplier process.

If instead the government cut taxes by USD 100 billion:

$$\Delta Y = -0.8 \times 2.5 \times (-100) = 200$$

National income increases by USD 200 billion. The tax cut is less effective than the spending
increase (200 vs 250) because part of the tax cut is saved.

---

## Contractionary Fiscal Policy

### Objective

To reduce aggregate demand when the economy is overheating (operating above full employment,
inflationary gap).

### Instruments

| Instrument                   | Mechanism                                                                                    |
| ---------------------------- | -------------------------------------------------------------------------------------------- |
| Decrease government spending | Reduces the injection into the economy; AD falls; multiplier effect amplifies the reduction. |
| Increase taxes               | Reduces disposable income; households and firms have less to spend; AD falls.                |
| Decrease transfer payments   | Reduces the income of recipients; their spending falls; AD falls.                            |

### Worked Example: Contractionary Fiscal Policy

The economy is experiencing demand-pull inflation. The government cuts spending by USD 50 billion.
MPC = 0.75, MPT = 0.1, MPM = 0.1.

$$k = \frac{1}{0.25 + 0.1 + 0.1} = \frac{1}{0.45} = 2.22$$

$$\Delta Y = 2.22 \times (-50) = -111$$

National income falls by approximately USD 111 billion, reducing inflationary pressure.

---

## Automatic Stabilisers

Automatic stabilisers are built-in features of the fiscal system that automatically reduce the
amplitude of the business cycle without requiring new legislation or discretionary action.

### Progressive Income Tax

During an expansion: incomes rise, pushing taxpayers into higher tax brackets. The average tax rate
rises, reducing the proportion of additional income available for consumption. This dampens the
expansion.

During a contraction: incomes fall, pushing taxpayers into lower tax brackets. The average tax rate
falls, leaving more disposable income available for consumption. This cushions the contraction.

### Unemployment Benefits and Welfare

During a contraction: unemployment rises, more people claim benefits. Government transfer payments
automatically increase, supporting household incomes and consumption. This prevents a deeper fall in
aggregate demand.

During an expansion: unemployment falls, fewer people claim benefits. Government transfer payments
automatically decrease, reducing household income growth. This prevents excessive overheating.

### Significance

Automatic stabilisers act immediately (no legislative delay), are self-financing (they generate
surpluses during booms and deficits during recessions), and do not require political negotiation.
They are the first line of defence against economic fluctuations.

---

## Government Debt and the Crowding-Out Effect

### Government Debt

When the government runs a budget deficit, it must borrow by issuing government bonds. Accumulated
deficits over time constitute the national debt.

$$\text{Debt}_{t} = \text{Debt}_{t-1} + \text{Deficit}_{t}$$

### Crowding-Out Effect

The crowding-out effect occurs when increased government borrowing to finance a deficit drives up
interest rates, which reduces private investment.

**Mechanism:**

1. Government runs a deficit and issues bonds to borrow.
2. Increased supply of bonds pushes bond prices down and bond yields (interest rates) up.
3. Higher interest rates make borrowing more expensive for firms.
4. Firms reduce investment spending (fewer projects meet the required rate of return).
5. The increase in government spending is partially or fully offset by a decrease in private
   investment.

$$\text{Full crowding out: } \Delta G = -\Delta I$$

In the extreme case (full crowding out), the increase in government spending is exactly offset by
the decrease in private investment, and aggregate demand does not change at all. The composition of
output shifts from investment to government spending, which may reduce long-run growth (investment
drives productivity improvements).

### Factors Affecting the Degree of Crowding Out

| Factor                          | Effect on Crowding Out                                                                                                                                                                  |
| ------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Size of the deficit             | Larger deficit = more borrowing = more crowding out                                                                                                                                     |
| State of the economy            | In a recession with idle resources, crowding out is minimal (the central bank may accommodate). At full employment, crowding out is significant.                                        |
| Central bank response           | If the central bank accommodates (buys bonds to keep rates stable), crowding out is reduced. If not, crowding out is larger.                                                            |
| Openness of the economy         | In a small open economy with mobile capital (like Hong Kong), higher interest rates attract foreign capital inflows, which moderate the rise in domestic rates and reduce crowding out. |
| Elasticity of investment demand | If investment is highly interest-elastic (sensitive to rate changes), crowding out is larger.                                                                                           |
| Source of financing             | If financed by issuing bonds, crowding out occurs. If financed by money creation (monetised), crowding out is avoided but inflation risk increases.                                     |

---

## Monetary Policy

### Definition

Monetary policy is the central bank's use of interest rates, money supply, and other tools to
influence aggregate demand, inflation, and economic growth. For a detailed discussion of monetary
policy tools, see [money-and-banking.md](money-and-banking.md).

### Expansionary Monetary Policy

**Objective:** Stimulate aggregate demand during a recession.

**Instruments:**

| Instrument                     | Mechanism                                                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Lower the policy interest rate | Reduces cost of borrowing for banks; banks lower lending rates; consumers and firms borrow and spend more.                      |
| Lower the reserve ratio        | Banks can lend a larger proportion of deposits; credit creation expands; money supply increases.                                |
| Open market purchases          | Central bank buys government bonds; injects reserves into the banking system; interest rates fall.                              |
| Quantitative easing (QE)       | Central bank buys large quantities of longer-term securities; further lowers long-term interest rates; increases bank reserves. |

### Contractionary Monetary Policy

**Objective:** Reduce aggregate demand to combat inflation.

**Instruments:**

| Instrument                     | Mechanism                                                                                          |
| ------------------------------ | -------------------------------------------------------------------------------------------------- |
| Raise the policy interest rate | Increases cost of borrowing; banks raise lending rates; consumers and firms borrow and spend less. |
| Raise the reserve ratio        | Banks must hold more reserves; credit creation contracts; money supply decreases.                  |
| Open market sales              | Central bank sells government bonds; drains reserves from the banking system; interest rates rise. |

### Transmission Mechanism of Monetary Policy

The transmission mechanism describes the chain of cause and effect through which monetary policy
influences the real economy. This process operates with lags (typically 12-18 months for the full
effect to materialise).

**Step 1: Policy rate change.** The central bank adjusts the base rate / policy rate.

**Step 2: Market interest rates adjust.** Commercial banks adjust their lending and deposit rates in
response to the policy rate change. Bond yields adjust. The yield curve shifts.

**Step 3: Transmission channels:**

| Channel               | Mechanism                                                                                                                                                                                                     |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Interest rate channel | Lower rates reduce the cost of borrowing for households (mortgages, car loans) and firms (business loans). Consumption and investment increase.                                                               |
| Exchange rate channel | Lower domestic interest rates reduce the attractiveness of domestic assets to foreign investors. Capital flows out. The domestic currency depreciates. Exports become cheaper, imports become more expensive. |
| Asset price channel   | Lower rates increase the present value of future cash flows, raising asset prices (stocks, bonds, property). Higher asset prices increase household wealth, boosting consumption (wealth effect).             |
| Credit channel        | Lower policy rates improve banks' willingness to lend. Firms and households find it easier to obtain credit.                                                                                                  |
| Expectations channel  | Central bank communication about future policy influences expectations. If firms and households expect lower rates to persist, they bring forward spending and investment decisions.                          |

**Step 4: Aggregate demand shifts.** The combined effect of these channels shifts the aggregate
demand curve (to the right for expansionary policy, to the left for contractionary policy).

**Step 5: Real output and prices adjust.** Higher AD increases real GDP and employment in the short
run. If the economy is near full employment, higher AD primarily raises prices (inflation).

### Limitations of Monetary Policy

| Limitation                      | Description                                                                                                                |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Time lags                       | The full effect of a rate change takes 12-18 months. By the time the effect is felt, economic conditions may have changed. |
| Liquidity trap                  | When interest rates are already near zero, further rate cuts may have little effect (zero lower bound).                    |
| Bank lending channel blocked    | If banks are risk-averse, they may not pass on lower rates to borrowers, weakening the transmission mechanism.             |
| Exchange rate constraint        | For countries with fixed exchange rates (like Hong Kong), monetary policy is constrained by the need to maintain the peg.  |
| Unpredictable velocity of money | The relationship between money supply changes and nominal GDP changes may be unstable during financial crises.             |
| Distributional effects          | Lower interest rates boost asset prices (benefiting asset owners) more than wages, potentially exacerbating inequality.    |

---

## Supply-Side Policies

### Definition

Supply-side policies aim to increase the productive capacity of the economy (shift the LRAS curve to
the right) by improving the quantity, quality, and efficiency of factors of production. Unlike
demand-side policies (fiscal and monetary policy), supply-side policies address the supply side of
the economy and are the primary tool for achieving long-run economic growth.

### Market-Oriented Supply-Side Policies

These policies rely on market forces and incentives, with minimal government intervention.

| Policy                  | Description                                                                                                                                                                                                   |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Deregulation            | Removing unnecessary government regulations that increase business costs and reduce competition. Examples: removing price controls, reducing licensing requirements, simplifying business registration.       |
| Privatisation           | Transferring state-owned enterprises to private ownership. Arguments: private firms face profit incentives and are more efficient. Counter-argument: natural monopolies may need public ownership.            |
| Tax reform              | Reducing marginal tax rates on income and corporate profits to increase incentives to work, save, and invest. Shifting the tax base from income to consumption. Broadening the tax base while lowering rates. |
| Reducing trade barriers | Lowering tariffs, removing quotas, signing free trade agreements. Increases competition, forces domestic firms to improve efficiency.                                                                         |
| Labour market reform    | Making it easier for firms to hire and fire workers, reducing minimum wages, weakening trade union power. Aims to increase labour market flexibility and reduce structural unemployment.                      |
| Encouraging competition | Strengthening anti-trust / competition law to prevent monopolies and cartels. Promoting new firm entry. Reducing barriers to entrepreneurship.                                                                |
| Property rights reform  | Strengthening legal protection of private property rights. Secure property rights encourage investment and long-term planning.                                                                                |

### Interventionist Supply-Side Policies

These policies involve direct government action and spending.

| Policy                    | Description                                                                                                                                                                                  |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Education and training    | Government investment in education improves human capital. Retraining programmes for unemployed workers reduce structural unemployment.                                                      |
| Infrastructure investment | Government spending on transport, telecommunications, energy, and water infrastructure reduces business costs and increases productivity.                                                    |
| R&D subsidies             | Government grants, tax credits, and direct funding for research and development. Encourages private firms to invest in innovation. Addresses the positive externality of knowledge creation. |
| Industrial policy         | Targeted government support for specific industries. May include tax incentives, subsidies, or special economic zones.                                                                       |
| Healthcare investment     | A healthier workforce is more productive and takes fewer sick days. Government healthcare spending improves human capital.                                                                   |
| Regional policy           | Government incentives for firms to locate in depressed areas. Reduces regional inequality and structural unemployment.                                                                       |

### Comparison: Market-Oriented vs Interventionist Supply-Side Policies

| Criterion          | Market-Oriented                                       | Interventionist                                              |
| ------------------ | ----------------------------------------------------- | ------------------------------------------------------------ |
| Role of government | Minimal; create enabling environment                  | Active; direct spending and intervention                     |
| Speed of impact    | Slow (requires cultural and institutional change)     | Medium to slow (infrastructure takes years)                  |
| Cost to government | Low (may even increase tax revenue through growth)    | High (requires significant government spending)              |
| Risk               | May increase inequality if deregulation harms workers | May create government failure, inefficiency                  |
| Examples           | Thatcher (UK), Reagan (US)                            | East Asian industrial policy (Japan, South Korea, Singapore) |

---

## Policy Conflicts and Trade-Offs

Macroeconomic policies frequently conflict with one another. Achieving all objectives simultaneously
is rarely possible, forcing policymakers to make trade-offs.

### Inflation vs Unemployment

The short-run Phillips curve describes an inverse relationship between inflation and unemployment.
Reducing unemployment below the natural rate requires accepting higher inflation, and reducing
inflation requires accepting higher unemployment.

**Policy conflict:** Expansionary policy reduces unemployment but risks inflation. Contractionary
policy reduces inflation but increases unemployment.

### Economic Growth vs Inflation

Rapid economic growth (driven by strong aggregate demand) tends to generate inflationary pressure,
especially as the economy approaches full capacity. Policymakers must balance the desire for growth
with the need for price stability.

### Economic Growth vs Environment

Economic growth driven by industrial production and consumption often increases pollution, resource
depletion, and carbon emissions. Supply-side policies that increase productive capacity may also
increase environmental degradation unless paired with environmental regulation.

**Policy conflict:** Deregulation and reduced trade barriers promote growth but may increase
pollution. Environmental regulation protects the environment but may increase business costs and
reduce competitiveness.

### Balance of Payments vs Domestic Objectives

Expansionary monetary policy (lower interest rates) may stimulate domestic growth but can cause
currency depreciation, which may worsen the trade balance (if the Marshall-Lerner condition is not
met in the short run) and cause imported inflation.

Contractionary monetary policy (higher interest rates) may reduce inflation but attract capital
inflows, causing currency appreciation, which may worsen the trade balance (exports become more
expensive).

### Fiscal Policy vs Monetary Policy

**Conflict:** If the government runs a large deficit (expansionary fiscal policy) while the central
bank is raising interest rates (contractionary monetary policy), the two policies work at
cross-purposes. The government's borrowing pushes interest rates up, while the central bank also
pushes rates up, creating very tight financial conditions.

**Coordination:** Ideally, fiscal and monetary policy should be coordinated. During a recession,
both should be expansionary. During inflation, both should be contractionary. In practice,
coordination is complicated by the independence of central banks and political pressures on fiscal
policy.

### Hong Kong's Policy Constraints

Hong Kong faces unique constraints:

1. **No independent monetary policy:** Under the Linked Exchange Rate System, Hong Kong must follow
   US monetary policy. The HKMA cannot lower interest rates independently during a local recession
   if the US Federal Reserve is raising rates.
2. **Small, open economy:** Hong Kong is extremely trade-dependent. Changes in the global economic
   environment have a disproportionate impact on Hong Kong's economy.
3. **Narrow tax base:** Hong Kong relies heavily on a few revenue sources (land premiums, salaries
   tax, profits tax). This limits the government's ability to use tax policy as a macroeconomic
   stabiliser.

Given these constraints, Hong Kong relies more on automatic stabilisers, land supply management, and
targeted fiscal measures than on discretionary macroeconomic policy.

---

## Common Pitfalls

1. **Confusing the spending multiplier with the tax multiplier:** The spending multiplier is larger
   than the tax multiplier (in absolute value). A USD 100 billion increase in government spending
   has a larger effect on GDP than a USD 100 billion tax cut, because some of the tax cut is saved
   rather than spent.

2. **Ignoring leakages in the multiplier:** The simple multiplier formula `1/(1-MPC)` assumes no
   taxes and no imports. In reality, taxes and imports are leakages that reduce the multiplier.
   Using the simple formula for an open economy with taxation overstates the multiplier effect.

3. **Assuming crowding out is always complete:** Crowding out depends on the state of the economy.
   In a deep recession with idle resources and near-zero interest rates, crowding out is minimal. At
   full employment, crowding out is more significant.

4. **Confusing fiscal policy with monetary policy:** Fiscal policy involves government spending and
   taxation (the government's budget). Monetary policy involves the money supply and interest rates
   (the central bank's actions). They are distinct instruments, even though they both affect
   aggregate demand.

5. **Assuming supply-side policies work quickly:** Supply-side policies (education, infrastructure,
   deregulation) take years, sometimes decades, to have their full effect. They are not suitable as
   short-term stabilisation tools. Demand-side policies (fiscal and monetary) are more appropriate
   for short-run stabilisation.

6. **Stating that lower interest rates always stimulate the economy:** If banks are unwilling to
   lend (credit crunch), if businesses are pessimistic about future demand, or if interest rates are
   already near zero (liquidity trap), lower rates may have little effect. The transmission
   mechanism can break down.

7. **Ignoring the time lags in policy:** Fiscal policy has an implementation lag (time to pass
   legislation) and an impact lag (time for spending changes to affect the economy). Monetary policy
   has a shorter implementation lag but a longer impact lag (12-18 months for full effect).

8. **Assuming the balanced budget multiplier is zero:** The balanced budget multiplier is actually
   equal to 1. If the government increases both spending and taxes by the same amount, national
   income still increases. This is because the full amount of the spending increase is injected, but
   only a portion of the tax increase is withdrawn from spending (the rest comes from saving).

9. **Confusing demand-side and supply-side policies:** Demand-side policies (fiscal and monetary)
   shift the AD curve and affect output and prices in the short run. Supply-side policies shift the
   LRAS curve and affect the economy's productive capacity in the long run.

10. **Ignoring the impact of expectations:** If firms and households expect the government's
    policies to be inflationary, they may adjust their behaviour in ways that undermine the policy
    (e.g., demanding higher wages in anticipation of inflation, which triggers cost-push inflation).
    Expectations can be self-fulfilling.

---

## Practice Problems

<details>
<summary>Question 1: Multiplier Calculations</summary>

An economy has MPC = 0.75, MPT = 0.1, and MPM = 0.1.

(a) Calculate the multiplier. (b) If the government increases spending by USD 50 billion, what is
the total change in national income? (c) If the government instead cuts taxes by USD 50 billion,
what is the total change in national income? (d) Which policy is more effective? Explain.

(a) Multiplier = 1 / (MPS + MPT + MPM) = 1 / (0.25 + 0.1 + 0.1) = 1 / 0.45 = 2.22

(b) Change in Y = 2.22 x 50 = 111.1 billion

(c) Tax multiplier = -MPC x multiplier = -0.75 x 2.22 = -1.67

Change in Y = -1.67 x (-50) = 83.5 billion

(d) The spending increase is more effective (111.1 vs 83.5 billion) because the full USD 50 billion
is injected directly into the economy. With a tax cut, only MPC x 50 = 37.5 billion is initially
spent (the remaining 12.5 billion is saved). The initial injection is smaller, so the total effect
is smaller.

</details>

<details>
<summary>Question 2: Crowding-Out Analysis</summary>

An economy is at full employment. The government increases spending by USD 80 billion. The MPC is
0.6, and there are no taxes or imports. Assume the interest rate rises enough to fully crowd out
private investment.

(a) Calculate the simple multiplier. (b) What is the change in national income without crowding out?
(c) With full crowding out, what is the actual change in national income? (d) By how much does
private investment change?

(a) Simple multiplier = 1 / (1 - 0.6) = 1 / 0.4 = 2.5

(b) Without crowding out: Change in Y = 2.5 x 80 = 200 billion

(c) With full crowding out: The increase in government spending is exactly offset by a decrease in
private investment. AD does not change, so national income does not change. Change in Y = 0.

(d) Private investment decreases by USD 80 billion. The increase in government borrowing drives
interest rates up by enough to reduce private investment by exactly the amount of the government
spending increase.

Note: Full crowding out is a theoretical extreme. In practice, crowding out is usually partial.

</details>

<details>
<summary>Question 3: Policy Mix</summary>

An economy is experiencing high inflation (8%) and high unemployment (9%). The natural rate of
unemployment is 5%.

(a) What type of gap does the economy have? (b) Can demand-side policy alone solve both problems?
Explain. (c) What combination of policies would you recommend?

(a) The economy has STAGFLATION: high inflation AND high unemployment. The actual unemployment rate
(9%) exceeds the natural rate (5%), indicating a recessionary gap in output. However, inflation is
also high (8%), which is inconsistent with a simple recessionary gap. This situation is caused by a
leftward shift of the SRAS curve (cost-push inflation), not by excess demand.

(b) No, demand-side policy alone cannot solve both problems simultaneously:

- Expansionary fiscal/monetary policy would reduce unemployment but worsen inflation.
- Contractionary fiscal/monetary policy would reduce inflation but worsen unemployment.

This is a policy dilemma because the standard demand management tools move inflation and
unemployment in opposite directions.

(c) The recommended policy mix is:

- **Contractionary demand-side policy** (higher interest rates, reduced government spending) to
  reduce inflation.
- **Expansionary supply-side policy** (education, retraining, infrastructure investment,
  deregulation, R&D subsidies) to increase productive capacity, reduce structural unemployment, and
  shift the LRAS curve to the right.

Supply-side policies address the root cause of stagflation (a supply shock that reduced productive
capacity) without the inflationary side effects of demand-side stimulus.

</details>

<details>
<summary>Question 4: Fiscal Policy in Hong Kong</summary>

Hong Kong's government runs a budget surplus of HKD 100 billion. The economy is growing at 2% (real
GDP growth) and inflation is 1.5%.

(a) What type of fiscal policy is this? (b) What effect does this have on aggregate demand? (c) Is
this policy appropriate given the economic conditions? Explain. (d) What are the constraints on Hong
Kong's fiscal policy?

(a) A budget surplus is a **contractionary** fiscal stance (tax revenue exceeds government spending,
withdrawing net demand from the economy).

(b) The surplus reduces aggregate demand. The government is removing more purchasing power from the
economy (through taxes) than it is injecting (through spending).

(c) The appropriateness depends on the position of the economy relative to potential output:

- If the economy is at or above potential output, the contractionary stance helps prevent
  overheating and is appropriate.
- If the economy is below potential output (a recessionary gap exists), the contractionary stance
  would worsen the gap and is inappropriate. However, with inflation at 1.5% (below typical targets
  of 2-3%), there may be room for expansionary policy.

With growth at 2% and inflation at 1.5%, the economy appears to be operating below its potential. A
budget surplus may not be the most appropriate fiscal stance in this context.

(d) Hong Kong's fiscal policy constraints:

- No independent monetary policy limits the ability to coordinate fiscal and monetary policy.
- Narrow tax base (reliance on land premiums, salaries tax, profits tax).
- Small, open economy: fiscal multipliers are smaller because imports are a large leakage.
- Land premium revenue is volatile and cyclical, making budget forecasting difficult.
- Fiscal reserves provide a buffer but are finite.

</details>

<details>
<summary>Question 5: Balanced Budget Multiplier</summary>

The government increases both spending and taxes by USD 60 billion. MPC = 0.8. There are no imports
and no proportional taxes.

(a) Calculate the spending multiplier. (b) Calculate the change in national income from the spending
increase alone. (c) Calculate the change in national income from the tax increase alone. (d)
Calculate the net change in national income. (e) What is the balanced budget multiplier?

(a) Spending multiplier = 1 / (1 - 0.8) = 1 / 0.2 = 5

(b) From spending increase: Delta Y = 5 x 60 = 300 billion

(c) Tax multiplier = -MPC x spending multiplier = -0.8 x 5 = -4

From tax increase: Delta Y = -4 x 60 = -240 billion

(d) Net change = 300 + (-240) = 60 billion

(e) Balanced budget multiplier = Net change in Y / Change in G (or T) = 60 / 60 = 1

The balanced budget multiplier is 1. Equal increases in government spending and taxation raise
national income by the same amount as the increase in spending. This is because all of the spending
increase is injected, but only the portion of the tax increase that would have been consumed (MPC x
Delta T = 48 billion) is withdrawn from spending. The remaining 12 billion of the tax increase would
have been saved, so its withdrawal does not reduce consumption.

</details>

<details>
<summary>Question 6: Monetary Policy Transmission</summary>

The central bank lowers the base rate by 1 percentage point. Trace the full transmission mechanism
and explain the expected effects on each sector of the economy, assuming the economy is in a
recession with high unemployment and low inflation.

**Step 1: Policy rate change.** The central bank lowers the base rate by 1 percentage point.

**Step 2: Market interest rates adjust.** Commercial banks lower their prime lending rates, mortgage
rates, and deposit rates. Bond yields fall as existing bonds with higher coupon rates become more
valuable, pushing up their prices and lowering yields.

**Step 3: Transmission channels operate:**

Interest rate channel: Lower mortgage rates reduce monthly housing costs for variable-rate
borrowers, increasing disposable income. Lower business loan rates reduce the cost of financing
investment projects. Firms with viable projects that were previously marginal (expected return just
below the old borrowing cost) now find them profitable and proceed. Consumption of big-ticket
durables (cars, appliances) financed by credit increases.

Exchange rate channel: Lower domestic interest rates reduce the attractiveness of domestic assets to
foreign investors. Capital flows out, depreciating the domestic currency. Export goods become
cheaper for foreign buyers (boosting export volumes and revenue). Import goods become more expensive
for domestic consumers (reducing import volumes). Net exports increase, further stimulating
aggregate demand.

Asset price channel: Lower discount rates increase the present value of future cash flows. Stock
prices rise. Bond prices rise. Property prices rise. Household wealth increases, and the wealth
effect boosts consumption (homeowners feel wealthier and spend more). The lower cost of equity
financing encourages firms to raise capital by issuing shares.

Credit channel: Banks' funding costs fall, improving their willingness to extend credit. Lending
standards may be relaxed. Firms and households that were previously credit-constrained gain access
to borrowing.

Expectations channel: The rate cut signals that the central bank is committed to supporting the
economy. Business confidence improves. Firms may bring forward investment plans that they had
postponed. Consumers expecting economic recovery may increase spending rather than precautionary
saving.

**Step 4: Aggregate demand shifts right.** Consumption, investment, and net exports all increase. AD
shifts right.

**Step 5: Real output and prices adjust.** With the economy in recession (output below potential),
the increase in AD primarily raises real GDP and employment. The output gap narrows. Inflation may
rise slightly but remains below target due to the large output gap. The economy moves toward full
employment without generating significant inflationary pressure.

</details>

<details>
<summary>Question 7: Supply-Side Policy Evaluation</summary>

An economy has the following characteristics: high structural unemployment (6%), low productivity
growth (0.5% per year), declining competitiveness in manufacturing, and an ageing population.

Evaluate the effectiveness of market-oriented and interventionist supply-side policies for
addressing each of these problems.

**Structural unemployment (6%):**

Market-oriented: Labour market deregulation (reducing employment protection legislation, minimum
wage reform) may increase hiring flexibility but risks reducing job security and worker welfare.
Reducing unemployment benefits may increase the incentive to search for work but pushes some
unemployed into poverty.

Interventionist: Government-funded retraining programmes directly address the skills mismatch.
Education reform (emphasising STEM, vocational training) improves the long-term skills base.
Regional policy (incentives for firms to locate in high-unemployment areas) addresses geographic
mismatch.

**Low productivity growth (0.5% per year):**

Market-oriented: Tax incentives for R&D encourage private innovation. Privatisation of inefficient
state-owned enterprises forces productivity improvements through competition. Reducing trade
barriers exposes domestic firms to international competition, compelling efficiency gains.

Interventionist: Government funding for basic research (which has large positive externalities that
private firms under-invest in). Infrastructure investment (broadband, transport, energy) reduces
business costs and raises productivity. Industrial policy targeting high-productivity sectors.

**Declining manufacturing competitiveness:**

Market-oriented: Free trade agreements reduce input costs and open export markets. Currency
flexibility allows exchange rate adjustment. Reducing corporate tax rates improves after-tax returns
on investment.

Interventionist: Targeted subsidies for advanced manufacturing. Special economic zones with tax
breaks and streamlined regulation. Government-backed loans for manufacturing firms investing in
automation and technology upgrading.

**Ageing population:**

Market-oriented: Raising the retirement age keeps older workers in the labour force. Immigration
reform to attract young, skilled workers. Tax incentives for private pension savings reduces future
fiscal burden.

Interventionist: Healthcare investment to extend healthy working years. Lifelong learning programmes
to retrain older workers. Family-friendly policies (childcare subsidies, parental leave) to increase
the birth rate over the long term (though this is a very slow policy).

</details>

### Limitations of Supply-Side Policies

1. **Time lags:** Supply-side policies take years to have their full effect. Education reform today
   does not improve the skills of the workforce for a decade or more. Infrastructure projects take
   years to plan, approve, and build. They cannot address short-term recessions.
2. **Cost:** Interventionist supply-side policies require significant government spending, which may
   increase the budget deficit or require higher taxes (which themselves create distortions).
3. **Uncertainty:** The effects of deregulation, tax reform, and education investment are uncertain.
   It is difficult to predict exactly how much LRAS will shift.
4. **Distributional effects:** Market-oriented supply-side policies (deregulation, labour market
   reform) may increase inequality by reducing worker protections and wage bargaining power.
5. **Political resistance:** Supply-side reforms often face opposition from groups that lose out
   (workers facing reduced job security, firms in protected industries, bureaucrats whose
   departments are privatised).
6. **May not address demand deficiencies:** If the economy is in recession due to insufficient
   aggregate demand, supply-side policies alone will not restore full employment. Supply-side
   policies increase potential output but do not directly stimulate demand.

### Fiscal Policy in Hong Kong: Special Considerations

Hong Kong's fiscal policy operates under unique institutional constraints that differ from
conventional macroeconomic frameworks:

1. **No independent monetary policy:** Because Hong Kong operates the Linked Exchange Rate System
   (pegged to the USD), monetary policy is imported from the US. Fiscal policy bears a heavier
   burden for macroeconomic stabilisation than in economies with independent monetary policy.
2. **Currency board system:** Hong Kong does not have a conventional central bank that can monetise
   fiscal deficits. Government borrowing must come from the market (issuing bonds) or from fiscal
   reserves, not from money creation.
3. **Large fiscal reserves:** Hong Kong has accumulated substantial fiscal reserves (equivalent to
   approximately 12 months of government expenditure). These reserves provide a buffer against
   economic downturns but also raise questions about whether the government is over-saving
   (under-spending on social needs and infrastructure).
4. **Volatile revenue base:** Hong Kong's government revenue is heavily dependent on land premiums
   (revenue from land sales), which are cyclical and unpredictable. During property market
   downturns, land revenue falls sharply, creating budget deficits even without changes in
   expenditure policy.
5. **Simple and low tax system:** Hong Kong has no sales tax or VAT, no capital gains tax, and no
   dividend tax. The narrow tax base limits the government's ability to use tax policy as a
   counter-cyclical stabiliser. Salaries tax and profits tax are the main revenue sources, and both
   are relatively low by international standards.

Despite these constraints, Hong Kong's government has used fiscal policy counter-cyclically, notably
during the 2008-09 Global Financial Crisis (economic stimulus packages), the 2020 COVID-19 pandemic
(consumption vouchers, wage subsidies under the Anti-epidemic Fund), and the 2019 social unrest. The
Consumption Voucher Scheme distributed HKD 10,000 to each permanent resident to stimulate domestic
consumption during the pandemic-induced recession.
