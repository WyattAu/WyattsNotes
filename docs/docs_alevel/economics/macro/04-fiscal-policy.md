---
title: Fiscal Policy
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: fiscal-policy
sidebar_position: 4
---

## 1. Introduction to Fiscal Policy

### 1.1 Definition

We define **fiscal policy** as the use of government spending ($G$) and taxation ($T$) to influence
the level of aggregate demand, economic activity, and the allocation of resources in the economy.

$$\mathrm{Fiscal policy tools: } G, T, \mathrm{ and } (G - T)$$

Fiscal policy is conducted by the government (Chancellor of the Exchequer in the UK, Secretary of
the Treasury in the US) alongside the central bank's monetary policy.

### 1.2 The Government Budget

The government budget records planned revenue and expenditure:

$$\mathrm{Budget balance} = T - G$$

- **Budget surplus**: $T > G$ (government revenue exceeds spending)
- **Budget deficit**: $G > T$ (government spending exceeds revenue)
- **Balanced budget**: $T = G$

:::info Board-Specific Note CIE (9708) requires students to distinguish between the budget balance
and the national debt. AQA and Edexcel may ask about the UK's fiscal rules (e.g., the fiscal mandate
and supplementary target).
:::

## 2. Government Spending

### 2.1 Types of Government Spending

**Current expenditure** (recurring, day-to-day):

- Public sector wages (NHS, education, civil service)
- Transfer payments (pensions, unemployment benefits, child benefit)
- Debt interest payments

**Capital expenditure** (investment in infrastructure):

- Roads, railways, hospitals, schools
- Research and development
- IT infrastructure

$$G = G_{current} + G_{capital}$$

Only $G$ in the AD equation ($AD = C + I + G + (X - M)$) represents spending on goods and services.
Transfer payments are not directly part of $G$ — they affect $AD$ indirectly through their effect on
disposable income and hence consumption ($C$).

:::warning Common Pitfall Transfer payments (benefits, pensions) are NOT part of $G$ in the AD
formula. They are a government outlay but not a purchase of goods and services. They affect $C$, not
$G$ directly. However, exam questions sometimes use "government spending" loosely — always clarify
what is meant.
:::

### 2.2 Government Spending as a Share of GDP

$$\mathrm{Government spending ratio} = \frac{G}{Y} \times 100\%$$

In the UK, this ratio was approximately 45% of GDP in 2023–24, reflecting the expansionary fiscal
response to COVID-19 and the energy crisis. The long-run average is closer to 40%.

## 3. Taxation

### 3.1 Direct vs Indirect Taxation

**Direct taxes** are levied on income, wealth, or profits. They are typically progressive and
difficult to evade.

| Tax Type          | Description                        | Examples                     |
| ----------------- | ---------------------------------- | ---------------------------- |
| Income tax        | Tax on earned income               | PAYE, self-assessment        |
| Corporation tax   | Tax on company profits             | 19–25% (UK, 2023–24)         |
| Capital gains tax | Tax on profit from sale of assets  | 10–28% (UK)                  |
| Inheritance tax   | Tax on transfer of wealth at death | 40% above £325,000 threshold |
| Council tax       | Tax on property value (local)      | Bands A–H                    |

**Indirect taxes** are levied on goods and services. They are typically regressive and easier to
pass on to consumers.

| Tax Type       | Description                                    | Examples                               |
| -------------- | ---------------------------------------------- | -------------------------------------- |
| VAT            | Value added tax on most goods and services     | 20% standard rate (UK)                 |
| Excise duties  | Tax on specific goods (alcohol, tobacco, fuel) | Per-unit or ad valorem                 |
| Customs duties | Tax on imports                                 | Varies by product and trade agreements |
| Stamp duty     | Tax on property and share transactions         | Percentage of transaction value        |

### 3.2 Progressive, Proportional, and Regressive Taxation

We define these in terms of the **average tax rate (ATR)** as income changes:

$$ATR = \frac{T(Y)}{Y}$$

where $T(Y)$ is the total tax paid by someone earning income $Y$.

**Progressive tax**: ATR rises as income rises.

$$\frac{d(ATR)}{dY} > 0$$

**Proportional tax (flat tax)**: ATR is constant regardless of income.

$$\frac{d(ATR)}{dY} = 0$$

**Regressive tax**: ATR falls as income rises.

$$\frac{d(ATR)}{dY} < 0$$

**Proof with examples.**

Consider three individuals earning £10,000, £30,000, and £100,000.

_Progressive tax_ (UK income tax, simplified):

- £10,000: pays £0 (below personal allowance) → ATR = 0%
- £30,000: pays £3,486 (20% on £12,570–£30,000 after £12,570 allowance) → ATR = 11.6%
- £100,000: pays £27,432 → ATR = 27.4%

ATR rises with income. ✓

_Proportional tax_ (10% flat tax on all income):

- £10,000: pays £1,000 → ATR = 10%
- £30,000: pays £3,000 → ATR = 10%
- £100,000: pays £10,000 → ATR = 10%

ATR constant. ✓

_Regressive tax_ (VAT at 20% on all consumption, assuming lower earners spend a larger share of
income):

- £10,000 earner spends £9,500, pays £1,900 in VAT → ATR = 19.0%
- £30,000 earner spends £22,000, pays £4,400 in VAT → ATR = 14.7%
- £100,000 earner spends £55,000, pays £11,000 in VAT → ATR = 11.0%

ATR falls with income because higher earners save a larger proportion of income. ✓ $\blacksquare$

:::tip Exam Technique When asked to evaluate whether a tax is progressive or regressive, calculate
the ATR at different income levels. Never just state the marginal rate — a tax can have increasing
marginal rates but still be regressive in practice (e.g., if there are generous allowances for high
earners).
:::

### 3.3 Laffer Curve

The **Laffer curve** illustrates the theoretical relationship between the tax rate and tax revenue:

$$R = t \cdot Y(t)$$

where $t$ is the tax rate and $Y(t)$ is the tax base (income), which depends on $t$ because higher
tax rates discourage work, investment, and encourage tax evasion.

**Proposition: There exists a tax rate $t^*$ that maximises revenue, and beyond this rate, further
increases reduce revenue.**

_Proof sketch._ At $t = 0$, revenue $R = 0$. At $t = 100\%$, no one works (all income is taxed
away), so $R = 0$. Since $R$ is continuous, by the Intermediate Value Theorem there exists at least
one maximum $t^*$ where $\frac{dR}{dt} = 0$. At this point, the marginal gain from a higher rate
(more tax per unit of income) exactly equals the marginal loss from a smaller tax base.
$\blacksquare$

$$\frac{dR}{dt} = Y(t) + t \cdot \frac{dY}{dt} = 0 \quad \mathrm{at } t^*$$

The key debate is **where** $t^*$ lies. Supply-side economists (e.g., Arthur Laffer) argue that many
economies are already to the right of $t^*$, so cutting rates would increase revenue. Empirical
evidence is mixed.

## 4. Budget Deficit and National Debt

### 4.1 Definitions

**Budget deficit**: the amount by which government spending exceeds revenue in a given year.

$$\mathrm{Deficit}_t = G_t - T_t$$

**National debt**: the accumulated total of all past budget deficits minus surpluses.

$$D_t = D_{t-1} + (G_t - T_t)$$

**Debt-to-GDP ratio**:

$$\frac{D}{Y} = \frac{D_t}{Y_t}$$

This is the preferred measure of debt sustainability, since a large absolute debt is manageable if
GDP is also large.

:::warning Common Pitfall Deficit and debt are different. A country can have a large debt but a
small (or zero) deficit if it is running a balanced budget. The deficit is a _flow_ (per year),
while the debt is a _stock_ (accumulated). Reducing the deficit does _not_ reduce the debt — it
merely slows the rate at which debt grows. Only a surplus reduces the debt.
:::

### 4.2 Debt Dynamics

The evolution of the debt-to-GDP ratio is given by:

$$\frac{D_{t}}{Y_{t}} = \frac{(1 + r) D_{t-1} + (G_t - T_t)}{(1 + g) Y_{t-1}}$$

where $r$ is the average interest rate on government debt and $g$ is the GDP growth rate.

**Key insight**: If $g > r$, the debt-to-GDP ratio can fall even with a primary deficit (before
interest payments), because GDP is growing faster than the debt stock. If $r > g$, debt dynamics are
unstable — the debt ratio grows unless offset by primary surpluses.

### 4.3 Sustainability

A government's debt is sustainable if it can continue to service it without default. Indicators of
concern:

- Debt-to-GDP ratio above 90% (Reinhart & Rogoff threshold, though contested)
- Interest payments exceeding 10% of tax revenue
- Rising $r - g$ differential
- Loss of market confidence (rising bond yields)

## 5. Expansionary and Contractionary Fiscal Policy

### 5.1 Expansionary Fiscal Policy

Used to increase aggregate demand during a recession:

| Tool                       | Action                                    | Effect on AD                           |
| -------------------------- | ----------------------------------------- | -------------------------------------- |
| Increase $G$               | Build infrastructure, hire public workers | AD shifts right directly               |
| Decrease $T$               | Cut income tax, VAT, corporation tax      | AD shifts right via higher $C$ and $I$ |
| Increase transfer payments | Raise benefits, pensions                  | AD shifts right via higher $C$         |

The total effect on output:

$$\Delta Y = k \cdot \Delta G \quad \mathrm{or} \quad \Delta Y = k \cdot MPC \cdot \Delta T$$

where $k$ is the complex multiplier.

### 5.2 Contractionary Fiscal Policy

Used to reduce aggregate demand during an overheating economy (to combat inflation):

| Tool                       | Action                         | Effect on AD                 |
| -------------------------- | ------------------------------ | ---------------------------- |
| Decrease $G$               | Cut public spending programmes | AD shifts left directly      |
| Increase $T$               | Raise income tax, VAT          | AD shifts left via lower $C$ |
| Decrease transfer payments | Reduce benefits                | AD shifts left via lower $C$ |

### 5.3 The Balanced Budget Multiplier

**Proposition: Equal increases in $G$ and $T$ increase output by exactly the amount of the
increase.**

_Proof._ The increase in $G$ directly adds $\Delta G$ to AD. The increase in $T$ reduces disposable
income by $\Delta T = \Delta G$, reducing consumption by $MPC \times \Delta G$. The net injection
is:

$$\Delta A = \Delta G - MPC \cdot \Delta G = (1 - MPC) \cdot \Delta G = MPS \cdot \Delta G$$

The total change in output:

$$\Delta Y = k \cdot \Delta A = \frac{1}{MPS} \cdot MPS \cdot \Delta G = \Delta G$$

So $\Delta Y / \Delta G = 1$ when $\Delta G = \Delta T$. The balanced budget multiplier equals 1.
$\blacksquare$

## 6. Crowding Out

### 6.1 Definition

**Crowding out** refers to the reduction in private sector spending (particularly investment) that
results from an increase in government spending.

### 6.2 Mechanism

When the government runs a deficit, it must borrow by selling bonds:

$$G > T \Rightarrow \mathrm{government issues bonds} \Rightarrow \mathrm{demand for loanable funds rises}$$

This increases the demand for loanable funds, pushing up the real interest rate:

$$r \uparrow \Rightarrow I \downarrow$$

The rise in $r$ reduces private investment, partially (or fully) offsetting the expansionary effect
of $\Delta G$ on AD.

### 6.3 Types of Crowding Out

**Financial crowding out**: the mechanism described above — government borrowing raises interest
rates, reducing private investment.

$$\Delta I = -\frac{1}{MPS} \cdot \Delta G \quad \mathrm{(full crowding out in extreme case)}$$

**Resource crowding out**: if the economy is at full employment, government spending uses resources
that would otherwise be employed by the private sector. The increase in $G$ bids up wages and
prices, reducing private sector profitability.

**Full vs partial crowding out**:

- **Full crowding out**: $\Delta I = -\Delta G$ in the simple model. The increase in $G$ is exactly
  offset by the decrease in $I$. Output does not change (LRAS is vertical).
- **Partial crowding out**: $\Delta I > -\Delta G$. Some private investment is displaced, but the
  net effect on AD is still positive.

### 6.4 Factors Affecting the Degree of Crowding Out

| Factor                          | More crowding out              | Less crowding out                         |
| ------------------------------- | ------------------------------ | ----------------------------------------- |
| State of the economy            | At full employment             | In deep recession (idle resources)        |
| Central bank response           | Keeps money supply constant    | Accommodates (increases money supply)     |
| Elasticity of investment demand | Investment is interest-elastic | Investment is interest-inelastic          |
| Source of financing             | Domestic borrowing             | Foreign borrowing / monetary financing    |
| Type of spending                | Current spending (consumption) | Capital spending (productivity-enhancing) |

:::tip Exam Technique When evaluating fiscal policy, always consider crowding out. The strongest
answer recognises that crowding out is less severe in a recession (Keynesian view) and more severe
at full employment (Classical view). Reference the state of the economic cycle.
:::

## 7. Automatic Stabilisers

### 7.1 Definition

**Automatic stabilisers** are features of the tax and benefit system that automatically dampen
fluctuations in economic activity, without any deliberate policy action.

$$\mathrm{Automatic stabilisers: } T(Y) \mathrm{ and } B(Y) \mathrm{ where } \frac{dT}{dY} > 0 \mathrm{ and } \frac{dB}{dY} < 0$$

### 7.2 Mechanism

**During a boom** ($Y \uparrow$):

- More people are employed and earn higher incomes $\Rightarrow$ tax revenue rises automatically
  (progressive income tax)
- Fewer people claim unemployment benefits $\Rightarrow$ transfer payments fall
- **Net effect**: disposable income rises by less than GDP $\Rightarrow$ consumption grows more
  slowly $\Rightarrow$ AD is dampened

**During a recession** ($Y \downarrow$):

- People lose jobs or earn less $\Rightarrow$ tax revenue falls automatically
- More people claim benefits $\Rightarrow$ transfer payments rise
- **Net effect**: disposable income falls by less than GDP $\Rightarrow$ consumption falls more
  slowly $\Rightarrow$ AD is supported

### 7.3 Mathematical Representation

The budget balance as a function of output:

$$BB(Y) = T(Y) - G - B(Y)$$

where $T'(Y) > 0$ and $B'(Y) < 0$.

The **cyclical component** of the budget balance:

$$BB_{cyclical} = BB(Y) - BB(Y^*)$$

where $Y^*$ is potential output. During a recession ($Y < Y^*$), $BB_{cyclical} < 0$ (the deficit
widens automatically). During a boom ($Y > Y^*$), $BB_{cyclical} > 0$ (the deficit narrows or a
surplus emerges).

### 7.4 Discretionary vs Automatic Fiscal Policy

| Feature       | Automatic stabilisers                      | Discretionary fiscal policy                               |
| ------------- | ------------------------------------------ | --------------------------------------------------------- |
| Timing        | Immediate (no lag)                         | Subject to recognition, decision, and implementation lags |
| Reversibility | Automatic (reverse when cycle turns)       | Politically difficult to reverse (e.g., spending cuts)    |
| Scope         | Limited to built-in tax/benefit structures | Can target specific sectors or problems                   |
| Political     | Non-controversial (no active decision)     | Subject to political debate and lobbying                  |

## 8. Evaluation of Fiscal Policy

### 8.1 Time Lags

Fiscal policy is subject to three significant lags:

1. **Recognition lag**: time taken to identify that the economy is entering a recession or
   overheating. Data is published with a delay and is often revised. (Typically 3–6 months)

2. **Decision lag**: time between recognition and the political decision to act. Parliamentary
   processes, coalition negotiations, and political disagreements can delay action. (Typically 3–12
   months)

3. **Implementation lag**: time between the decision and the actual impact on the economy.
   Infrastructure projects take years; tax changes are faster. (Typically 6–18 months)

**Total lag**: potentially 12–36 months, by which time the economic cycle may have turned.

### 8.2 Political Constraints

1. **Electoral cycle**: governments may pursue expansionary policy before elections and
   contractionary policy after, creating a political business cycle.

2. **Voter myopia**: voters reward short-term gains (tax cuts, spending increases) and punish
   short-term pain (tax rises, spending cuts), biasing policy toward expansion.

3. **Interest group pressure**: powerful groups (pensioners, public sector unions, business lobbies)
   resist changes that affect them.

4. **Institutional constraints**: EU Stability and Growth Pact (deficit < 3% of GDP, debt < 60% of
   GDP), UK fiscal rules.

### 8.3 Size of the Multiplier

The effectiveness of fiscal policy depends on the size of the multiplier:

$$k = \frac{1}{MPS + MPT + MPM}$$

- **Large multiplier**: economy in deep recession, MPC high, economy relatively closed (low MPM),
  interest rates at the zero lower bound (no crowding out)
- **Small multiplier**: economy near full employment, open economy (high MPM), high interest rates
  (significant crowding out)

IMF (2012) estimated multipliers of 0.9–1.7 for advanced economies post-2008, larger than previously
assumed.

### 8.4 Ricardian Equivalence

**Proposition (Barro, 1974): Tax-financed and debt-financed government spending have the same effect
on AD.**

_Argument._ Rational, forward-looking households anticipate that current government borrowing
implies future tax increases to repay the debt. They increase saving by exactly the amount of the
deficit to pay the expected future taxes:

$$\Delta G \mathrm{ (deficit-financed)} \Rightarrow \Delta S_{private} = \Delta G \Rightarrow \Delta C = 0$$

Therefore, the multiplier is zero — fiscal policy is completely ineffective.

_Critique._ Ricardian equivalence requires:

- Perfect capital markets (households can borrow against future income)
- Infinite horizons or intergenerational altruism
- Lump-sum taxes (not distortionary)
- Rational expectations

These assumptions are unrealistic. Empirical evidence suggests partial Ricardian effects at best —
fiscal policy does affect AD, but the multiplier may be smaller than predicted by the simple
Keynesian model.

## 9. Real-World Examples

### 9.1 The 2008–09 Fiscal Stimulus

In response to the Global Financial Crisis, the UK government introduced:

- Temporary reduction in VAT from 17.5% to 15% (December 2008)
- Bank recapitalisation (£500bn)
- Increased public spending (infrastructure, education)

The budget deficit rose from 2.7% of GDP (2007–08) to 10.2% (2009–10). The OBR estimated the
multiplier for the VAT cut at approximately 0.3–0.5 (small, due to the open economy and temporary
nature).

### 9.2 Austerity (2010–2018)

The Coalition government (2010) implemented austerity measures:

- Spending cuts (departmental budgets reduced by ~25% on average)
- Welfare reforms (benefit cap, universal credit)
- VAT increase from 17.5% to 20% (January 2011)

This was contractionary fiscal policy aimed at reducing the deficit. Critics argue it prolonged the
recovery; supporters argue it was necessary for market confidence and debt sustainability.

### 9.3 COVID-19 Response (2020–2021)

The largest peacetime fiscal expansion in UK history:

- Furlough scheme (£70bn): paid 80% of wages for furloughed workers
- Self-Employment Income Support Scheme (£25bn)
- Business support grants and loans
- Universal Credit uplift of £20/week

Budget deficit peaked at 14.8% of GDP in 2020–21. The multipliers were estimated to be relatively
large (1.0–1.5) because the economy was in a deep recession with the zero lower bound binding.

## 10. Problem Set

**Problem 1.** An economy has MPC = 0.8, MPT = 0.2, MPM = 0.15. The government increases spending by
£50 billion. (a) Calculate the multiplier. (b) Calculate the total change in GDP. (c) If the
government had instead cut taxes by £50 billion, what would the change in GDP be? (d) Compare the
two approaches.

<details>
<summary>Hint</summary>
(a) $k = 1/(MPS + MPT + MPM) = 1/(0.2 + 0.2 + 0.15) = 1/0.55 = 1.82$. (b) $\Delta Y = 1.82 \times 50 = £91$bn. (c) Tax cut: $\Delta C = MPC \times \Delta T_{disposable} = 0.8 \times 50 = £40$bn initial injection. $\Delta Y = 1.82 \times 40 = £72.7$bn. (d) Government spending is more effective per pound because it is a direct injection, whereas tax cuts are partially saved. The "spending multiplier" > "tax multiplier."
</details>

**Problem 2.** A country's income tax schedule is: 0% on the first £12,570, 20% on £12,571–£50,270,
40% on £50,271–£125,140, 45% above £125,140. Calculate the average tax rate for individuals earning
(a) £20,000, (b) £60,000, and (c) £150,000. Is the system progressive?

<details>
<summary>Hint</summary>
(a) £20,000: Tax = $0.20 \times (20,000 - 12,570) = 0.20 \times 7,430 = £1,486$. ATR = $1,486/20,000 = 7.4\%$. (b) £60,000: Tax = $0.20 \times 37,700 + 0.40 \times 9,730 = 7,540 + 3,892 = £11,432$. ATR = $11,432/60,000 = 19.1\%$. (c) £150,000: Tax = $0.20 \times 37,700 + 0.40 \times 74,870 + 0.45 \times 24,860 = 7,540 + 29,948 + 11,187 = £48,675$. ATR = $48,675/150,000 = 32.5\%$. Yes, progressive — ATR rises with income.
</details>

**Problem 3.** Explain why VAT is considered regressive despite being charged at a flat rate. Use a
numerical example with two individuals earning £15,000 and £80,000, both spending 90% and 60% of
their income respectively on VAT-able goods at 20%.

<details>
<summary>Hint</summary>
£15,000 earner: spends $0.9 \times 15,000 = £13,500$. VAT paid = $0.20 \times 13,500 = £2,700$. ATR = $2,700/15,000 = 18.0\%$. £80,000 earner: spends $0.6 \times 80,000 = £48,000$. VAT paid = $0.20 \times 48,000 = £9,600$. ATR = $9,600/80,000 = 12.0\%$. The lower earner pays a higher proportion of income as VAT because they spend a larger fraction of income (lower savings rate). Therefore VAT is regressive. Note: essentials are zero-rated (food, children's clothes), which partially mitigates regressivity.
</details>

**Problem 4.** A government increases spending by £100 billion, financed entirely by borrowing. If
the economy is at full employment, the MPC is 0.75, and investment is relatively interest-elastic,
analyse the likely effects on (a) output in the short run and long run, (b) interest rates, (c)
private investment, and (d) inflation.

<details>
<summary>Hint</summary>
(a) SR: AD shifts right, but at full employment SRAS is vertical or very steep, so most of the effect is on prices not output. LR: no change in output (LRAS vertical). (b) Government borrowing increases demand for loanable funds → interest rates rise. (c) Private investment falls due to higher interest rates (financial crowding out). Since investment is interest-elastic, the fall is significant — potentially full crowding out. (d) Inflation rises due to demand-pull pressure. The policy is ineffective at raising output and harmful for investment and inflation. This illustrates the Classical critique of fiscal policy.
</details>

**Problem 5.** "Automatic stabilisers are superior to discretionary fiscal policy." Evaluate this
statement.

<details>
<summary>Hint</summary>
Arguments for: (1) No time lags — operate immediately as the cycle turns. (2) No political bias — not subject to electoral manipulation. (3) Automatically reverse, avoiding pro-cyclical policy. Arguments against: (1) Limited scope — can only operate through existing tax/benefit structures. (2) Cannot target specific problems (e.g., regional unemployment, structural issues). (3) May not be sufficient for severe recessions (the 2008 crisis required discretionary stimulus). (4) The strength of automatic stabilisers varies across countries (stronger in Nordic countries with generous welfare states). Best answer: automatic stabilisers are the first line of defence; discretionary policy is needed for exceptional circumstances. *Revision: see [Aggregate Demand and Aggregate Supply](/docs/alevel/economics/macro/aggregate-demand-and-supply).*
</details>

**Problem 6.** The national debt is £2.7 trillion and GDP is £3.0 trillion. Interest payments on the
debt are £110 billion. GDP growth is 2.5% per year. (a) Calculate the debt-to-GDP ratio. (b) If the
primary deficit is £50 billion, will the debt-to-GDP ratio rise or fall next year? (c) Explain your
reasoning.

<details>
<summary>Hint</summary>
(a) Debt-to-GDP = $2,700/3,000 = 90\%$. (b) Approximate change: $\Delta(D/Y) \approx (r - g) \times (D/Y) + \mathrm{primary deficit}/Y$. $r = 110/2,700 = 4.1\%$. $r - g = 4.1\% - 2.5\% = 1.6\%$. $(r-g) \times D/Y = 1.6\% \times 90\% = 1.44\%$. Primary deficit ratio = $50/3,000 = 1.67\%$. Total change $\approx 1.44\% + 1.67\% = 3.1\%$. The debt ratio rises. (c) Because the interest rate on debt exceeds the growth rate ($r > g$), and the primary deficit adds to borrowing, the debt burden grows faster than the economy.
</details>

**Problem 7.** Using the concept of the Laffer curve, explain why a government might increase tax
revenue by cutting tax rates. Under what conditions is this most likely to be true?

<details>
<summary>Hint</summary>
If the economy is to the right of $t^*$ (tax rates so high that they discourage work and investment), cutting rates increases the tax base by more than the rate reduction, raising total revenue. Most likely when: (1) marginal tax rates are very high (e.g., 80%+ top rate in 1970s UK). (2) The tax base is elastic (people can easily relocate, retire early, or work less). (3) There is significant tax evasion that would decline at lower rates. (4) The economy is small and open (mobile capital). Less likely at moderate tax rates (most evidence suggests the UK and US are to the left of $t^*$ for most taxes). Thatcher's cut of the top rate from 83% to 40% (1980s) is a historical example where revenue may have increased.
</details>

**Problem 8.** Explain the concept of Ricardian equivalence. Why do most economists believe it does
not fully hold in practice?

<details>
<summary>Hint</summary>
Ricardian equivalence (Barro, 1974): households anticipate future tax liabilities from current government borrowing, so they save the full amount of a deficit-financed tax cut → no change in consumption → multiplier is zero. Why it fails in practice: (1) **Liquidity constraints** — poor households cannot borrow against future income, so a tax cut raises current consumption. (2) **Myopia** — households do not fully anticipate future taxes. (3) **Finite lives** — if taxpayers do not care about future generations, they will not save for taxes they won't pay. (4) **Distortionary taxes** — future taxes create deadweight loss, so the equivalence is not exact. (5) **Uncertainty** — households may not know when or how future taxes will be raised. Empirical evidence: consumption responds to tax cuts, suggesting partial but not full Ricardian equivalence. *Revision: see [Aggregate Demand and Aggregate Supply](/docs/alevel/economics/macro/aggregate-demand-and-supply).*
</details>

**Problem 9.** The government is considering two options to stimulate the economy: (A) increase
spending on infrastructure by £80 billion, or (B) cut income tax by £80 billion. The economy has MPC
= 0.7, MPT = 0.15, MPM = 0.1. (a) Which option has a larger impact on GDP? (b) Which option might
have greater long-run benefits? (c) Evaluate the trade-offs.

<details>
<summary>Hint</summary>
$k = 1/(0.3 + 0.15 + 0.1) = 1/0.55 = 1.82$. (a) Option A: $\Delta Y = 1.82 \times 80 = £145.5$bn. Option B: initial consumption boost $= 0.7 \times 80 = £56$bn. $\Delta Y = 1.82 \times 56 = £101.9$bn. Option A has a larger impact (£145.5bn vs £101.9bn). (b) Option B might be better long-term if it incentivises work and investment. But Option A (infrastructure) also has long-run supply-side benefits — better transport raises productivity, shifting LRAS right. (c) Trade-offs: Option A has higher multiplier but adds to debt and may suffer from implementation lags. Option B is faster to implement and may improve work incentives but has a smaller multiplier. The best choice depends on the economic context.
</details>

**Problem 10.** "Fiscal policy was ineffective during the 2008 financial crisis because of crowding
out." Evaluate this statement.

<details>
<summary>Hint</summary>
Partially false. Crowding out was limited during 2008–09 because: (1) The economy was in deep recession with large output gap → idle resources available. (2) Interest rates were cut to near zero (the zero lower bound) → central bank accommodated fiscal expansion by keeping $r$ low. (3) Private investment was already depressed ( pessimism) → crowding out was minimal. However: (1) The UK's high MPM (~0.3) reduced the multiplier. (2) Some financial crowding out occurred as government borrowing increased. (3) Confidence effects may have amplified or dampened the policy. The effectiveness of fiscal policy was moderate — sufficient to prevent a deeper recession but not enough to deliver a rapid recovery. *Revision: see [Macroeconomic Performance](/docs/alevel/economics/macro/macroeconomic-performance) for data on UK GDP and unemployment post-2008.*
</details>

:::

:::

:::

:::

:::
