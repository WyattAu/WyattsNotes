---
title: Macroeconomic Policy Debates
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: macroeconomic-policy-debates
sidebar_position: 7
---

## 1. Monetarism vs Keynesianism

### 1.1 The Keynesian Revolution

Keynes (1936, _General Theory_) challenged the classical view that markets always clear. His central
insight: **aggregate demand determines output in the short run**, and there is no automatic
mechanism ensuring full employment.

**Key propositions:**

1. Prices and wages are **sticky downward** — they do not adjust quickly to clear markets
2. The economy can be in **equilibrium with involuntary unemployment** (a persistent output gap)
3. Active **fiscal policy** is needed to manage aggregate demand
4. The **multiplier** amplifies the effects of spending changes
5. **Liquidity preference** determines the interest rate: the demand for money is a stable function
   of income and the interest rate

$$IS-LM: \quad Y = C(Y - T) + I(r) + G, \quad \frac{M}{P} = L(Y, r)$$

### 1.2 The Monetarist Counter-Revolution

Friedman (1968, _The Role of Monetary Policy_) and the monetarists argued:

1. **"Inflation is always and everywhere a monetary phenomenon"**: sustained inflation is caused by
   excessive growth of the money supply

$$\pi = \Delta M - \Delta V + \Delta Y \approx \Delta M - \Delta Y$$

(from the quantity theory: $MV = PY$)

2. **The long-run Phillips curve is vertical**: there is no long-run trade-off between inflation and
   unemployment

3. **Markets are broadly self-correcting**: given time, wages and prices adjust to restore full
   employment

4. **Fiscal policy is ineffective** (crowding out dominates), and **monetary policy is the primary
   tool** of macroeconomic stabilisation

5. **Discretionary policy is harmful**: due to lags and the time-inconsistency problem, systematic
   policy rules outperform discretionary interventions

### 1.3 The Policy Implications

| Issue                   | Keynesian View                           | Monetarist View                                              |
| ----------------------- | ---------------------------------------- | ------------------------------------------------------------ |
| Cause of inflation      | Excess demand, cost-push                 | Excessive money supply growth                                |
| Cause of unemployment   | Insufficient aggregate demand            | Real wages above equilibrium (structural), plus natural rate |
| Role of fiscal policy   | Active and effective                     | Ineffective (crowding out), harmful (lags)                   |
| Role of monetary policy | Important, but fiscal policy also needed | Primary policy tool; should follow a rule                    |
| Phillips curve          | Short-run trade-off is exploitable       | Vertical in long run; only acceleration possible             |
| Self-correction         | Slow or non-existent                     | Automatic, though may take time                              |
| Government intervention | Essential for stability                  | Minimise — rules-based policy                                |

:::info
Board-Specific Note The Keynesian-monetarist debate is a staple of A-Level economics. CIE
(9708) Paper 4 often asks students to evaluate the effectiveness of demand-side policies, requiring
them to contrast Keynesian and monetarist perspectives. Edexcel requires students to discuss the
"battle of the economists" in the context of policy debates.
:::

### 1.4 Evaluation: The Keynesian-Monetarist Debate in Practice

In practice, modern macroeconomic policy represents a **synthesis** of both views. The post-2008
consensus acknowledges:

- **Short run**: Keynesian — active fiscal and monetary policy is essential when the economy is far
  from full employment, especially at the ZLB
- **Long run**: Monetarist — inflation is ultimately a monetary phenomenon, and sustained fiscal
  deficits must be financed by money creation, risking inflation
- **Supply side**: Both schools now accept the importance of structural reforms for long-run growth

The key insight for exams: the "correct" view depends on the **time horizon** and the **state of the
economy**. In a deep recession with spare capacity, Keynesian policies are more relevant. When the
economy is near full employment, monetarist concerns about inflation dominate.

## 2. Rules vs Discretion

### 2.1 The Time-Inconsistency Problem

**Proposition (Kydland & Prescott, 1977): Discretionary policymakers have an incentive to renege on
announced policies, leading to a suboptimal outcome (inflationary bias).**

_Proof sketch._ The central bank announces low inflation. If the public believes this, workers set
moderate wage demands. The central bank then has an incentive to create surprise inflation to boost
output (exploiting the short-run Phillips curve). But rational agents anticipate this — they don't
believe the announcement. The equilibrium has high inflation with no output gain. $\blacksquare$

Formally, the central bank's loss function:

$$L = (\pi - \pi^*)^2 + \beta(u - u^*)^2$$

Minimising subject to the Phillips curve $\pi = \pi^e - \alpha(u - u^*)$:

Under **discretion** (after expectations are formed): the optimal policy creates inflation bias:

$$\pi_{discretion} = \pi^* + \frac{\beta \alpha}{1 + \beta \alpha^2} > \pi^*$$

Under a **rule** (commitment to $\pi = \pi^*$): $\pi = \pi^*$ with no bias.

The rule dominates because it eliminates the inflationary bias without sacrificing output.

### 2.2 The Taylor Rule

The **Taylor Rule** (Taylor, 1993) is a specific monetary policy rule that prescribes how the
central bank should set the interest rate in response to deviations of inflation from target and
output from potential:

$$i = r^* + \pi + 0.5(\pi - \pi^*) + 0.5(y - y^*)$$

where:

- $i$ = nominal interest rate (policy rate)
- $r^*$ = equilibrium real interest rate (estimated ~2%)
- $\pi$ = current inflation rate
- $\pi^*$ = target inflation rate
- $y - y^*$ = output gap (percentage deviation of actual from potential GDP)

**Interpretation**: The central bank raises the real interest rate by 0.5% for every 1% that
inflation exceeds target, and by 0.5% for every 1% that output exceeds potential.

**Properties:**

- When $\pi = \pi^*$ and $y = y^*$: $i = r^* + \pi^*$ (neutral rate)
- When $\pi > \pi^*$: $i$ rises above neutral (tightening)
- When $y < y^*$: $i$ falls below neutral (loosening)

<details>
<summary>Worked Example</summary>
Suppose $r^* = 2\%$, $\pi^* = 2\%$, current $\pi = 5\%$, output gap = $-3\%$ (recession).

$$i = 2 + 5 + 0.5(5 - 2) + 0.5(-3) = 2 + 5 + 1.5 - 1.5 = 7\%$$

The Taylor Rule prescribes a 7% policy rate: above neutral (4%) to fight inflation, but moderated by
the recessionary output gap.
</details>

### 2.3 Arguments for Rules

1. **Anchors expectations**: a credible rule reduces uncertainty about future policy
2. **Eliminates time inconsistency**: removes the temptation for surprise inflation
3. **Transparent and accountable**: the public can evaluate whether the central bank is following
   the rule
4. **Prevents political pressure**: an independent central bank following a rule is insulated from
   electoral cycles

### 2.4 Arguments for Discretion

1. **Unforeseen circumstances**: rules cannot anticipate all shocks (financial crises, pandemics,
   wars)
2. **Model uncertainty**: the Taylor Rule assumes we know $r^*$, $y^*$, and the correct coefficients
   — these are uncertain
3. **Multiple objectives**: rules may be too rigid when trade-offs between objectives change
4. **Communication**: discretion allows nuanced forward guidance

### 2.5 Time Lags and Policy Effectiveness

A critical challenge for both rules-based and discretionary policy is the existence of **time
lags**:

1. **Recognition lag**: the time between a shock occurring and policymakers identifying it. Data is
   published with delays and is often revised.
2. **Decision lag**: the time between identifying a problem and implementing a policy response.
   Fiscal policy has a longer decision lag (parliamentary approval needed) than monetary policy (MPC
   meets monthly).
3. **Implementation lag**: the time between the decision and the policy taking effect. Monetary
   policy affects the economy through interest rate channels with a lag of 12–18 months. Fiscal
   policy (e.g., infrastructure spending) may take years to affect AD.
4. **Impact lag**: the time for the full effects to materialise in output and employment.

**Real-world example: The 2008 crisis.** The Bank of England cut rates from 5% to 0.5% between
October 2008 and March 2009, but the UK recession continued until Q3 2009. Fiscal stimulus (the 2008
temporary VAT cut from 17.5% to 15%) was implemented relatively quickly but had limited effect — the
multiplier was estimated at only 0.3–0.5 (IMF, 2010) because households saved the extra income
rather than spending it (the **paradox of thrift**).

**Implication**: By the time discretionary policy takes effect, the economic conditions may have
changed, potentially making the policy **pro-cyclical** (stimulating when the economy is already
recovering, or tightening when it is entering recession). This is the strongest argument for
rules-based policy — rules respond automatically, without lags.

### 2.6 Inflation Targeting: A Compromise

Most modern central banks use **inflation targeting with discretion**:

- **Explicit inflation target** (e.g., 2% CPI for the Bank of England)
- **Independence** to set interest rates to achieve the target
- **Accountability** through regular reports and parliamentary oversight
- **Flexibility** to respond to shocks (the target is symmetric — deviations above and below are
  equally undesirable)

$$\text{UK (1992–present), NZ (1990–present), Canada (1991–present), Eurozone (2003–present)}$$

:::info
Board-Specific Note AQA (Paper 2) typically asks students to evaluate the effectiveness of
monetary policy and may require discussion of the transmission mechanism. Edexcel (Paper 3) often
asks about the role of central bank independence in achieving macroeconomic objectives. OCR
(Paper 3) may ask students to compare different monetary policy frameworks. CIE (9708) Paper 4
expects students to evaluate the relative merits of rules vs discretion with reference to specific
country examples.
:::

## 3. The Lucas Critique

### 3.1 Statement

**Proposition (Lucas, 1976): Policy evaluation using econometric models that assume fixed parameters
is invalid, because the parameters of behavioural equations depend on the policy regime itself.**

### 3.2 Explanation

Traditional macroeconomic models estimated relationships (e.g., the Phillips curve, consumption
function) from historical data, assuming the parameters were constant. Lucas argued that when policy
changes, people's **expectations and behaviour change**, so the historical relationships no longer
hold.

**Example: The Phillips Curve.** The historical Phillips curve (1958–1969) showed a stable inverse
relationship between inflation and unemployment. Governments tried to exploit this trade-off by
creating inflation to reduce unemployment. But once workers and firms anticipated higher inflation,
they adjusted wage demands and price-setting, and the trade-off disappeared. The Phillips curve
shifted — the historical relationship was not a structural parameter but a function of the policy
regime.

### 3.3 Implications

1. **Microfoundations**: macroeconomic models should be derived from individual optimisation
   (micro-founded), not estimated from aggregate data
2. **Policy evaluation**: you cannot reliably predict the effects of a new policy using models
   estimated under the old policy
3. **Rational expectations**: agents use all available information, including understanding of the
   policy regime, when forming expectations

$$\text{Policy change} \Rightarrow \text{Expectations change} \Rightarrow \text{Behaviour changes} \Rightarrow \text{Old model parameters invalid}$$

## 4. Post-2008 Policy Debates

### 4.1 The Zero Lower Bound (ZLB)

The **zero lower bound** is the constraint that nominal interest rates cannot fall significantly
below zero (since holding cash pays zero nominal interest).

$$i \geq 0 \text{ (approximately)}$$

When the equilibrium real interest rate is negative (as during a severe recession), the central bank
cannot cut rates far enough to stimulate the economy. The economy is caught in a **liquidity trap**
(Keynes, 1936):

$$r^* < 0 \Rightarrow i = 0 \Rightarrow r = i - \pi^e = -\pi^e$$

Even with zero nominal rates, the real interest rate may be positive if expected inflation is
negative (deflation). In this case, monetary policy is impotent — conventional tools have been
exhausted.

### 4.2 Quantitative Easing (QE)

**Quantitative easing** is an unconventional monetary policy where the central bank purchases
long-term assets (government bonds, corporate bonds) to increase the money supply and lower
long-term interest rates when the policy rate is at the ZLB.

**Mechanism:**

$$\text{Central bank buys bonds} \Rightarrow \text{bond prices rise} \Rightarrow \text{bond yields fall} \Rightarrow \text{long-term interest rates fall}$$

$$\Rightarrow \text{cheaper borrowing for firms and households} \Rightarrow \text{investment and consumption increase}$$

$$\Rightarrow \text{asset prices rise (portfolio rebalancing)} \Rightarrow \text{wealth effect} \Rightarrow \text{consumption increases}$$

$$\Rightarrow \text{exchange rate may depreciate} \Rightarrow \text{exports increase}$$

**UK QE programme**: The Bank of England purchased £875 billion of assets between 2009 and 2021,
expanding the monetary base from ~£100bn to ~£800bn.

**The 2008 Financial Crisis: A Policy Case Study**

The global financial crisis provides the clearest real-world illustration of the
Keynesian-monetarist debate in action:

1. **Monetary response**: The Bank of England cut the base rate from 5.25% (October 2008) to 0.5%
   (March 2009) — the lowest in the `` `{BoE}` ``'s 315-year history. When this proved insufficient
   (ZLB), it launched QE in March 2009, purchasing GBP 75 billion of government bonds initially,
   eventually reaching GBP 875 billion by 2021.

2. **Fiscal response**: The Labour government introduced a GBP 20 billion fiscal stimulus package
   (November 2008), including a temporary VAT cut (17.5% to 15%), increased infrastructure spending,
   and support for the banking sector (GBP 500 billion in guarantees and capital injections). The
   budget deficit peaked at 10.2% of GDP in 2009–10.

3. **Austerity (2010–2015)**: The incoming Coalition government adopted a monetarist-inspired
   austerity programme, aiming to eliminate the structural deficit within five years. Public sector
   net borrowing was cut from 10.2% to 4.0% of GDP by 2014–15, but GDP growth averaged only 1.8%
   (vs. 2.5% pre-crisis trend), and real wages fell for the longest period since the 1860s.

4. **Evaluation**: The initial Keynesian response (2008–2009) was widely regarded as necessary to
   prevent a depression. However, the subsequent austerity programme is more controversial — many
   economists argue it delayed the recovery unnecessarily (the UK did not regain its pre-crisis GDP
   per capita level until 2015). The OBR (2013) estimated that austerity reduced GDP growth by
   approximately 1% per year between 2010 and 2013.

### 4.3 Evaluation of QE

**Advantages:**

- Provides stimulus when conventional policy is exhausted (ZLB)
- Lower long-term rates support investment and housing
- Prevents deflationary spiral
- Supports asset prices and financial stability

**Disadvantages:**

- **Distributional effects**: QE raises asset prices (bonds, equities, property), benefiting
  wealthier households who own these assets → increases inequality
- **Asset bubbles**: low rates may encourage excessive risk-taking and misallocation of capital
- **Exit strategy**: unwinding QE (selling bonds, raising rates) may destabilise financial markets
- **Diminishing returns**: each round of QE may have a smaller effect
- **Inflation risk**: if the money created is not absorbed when the economy recovers, inflation may
  surge

### 4.4 Fiscal Policy Revival

The 2008 crisis and the ZLB led to a **Keynesian revival**:

1. **Multipliers are larger at the ZLB**: with no crowding out (interest rates cannot rise), the
   fiscal multiplier is closer to its theoretical maximum. IMF (2012) revised its multiplier
   estimates upward to 0.9–1.7.

2. **Austerity was premature**: many economists (Blanchard, Stiglitz, Krugman) argued that fiscal
   consolidation in 2010–2012 slowed the recovery unnecessarily.

3. **The case for fiscal-monetary coordination**: when monetary policy is constrained, fiscal policy
   must take the lead. "Helicopter money" (Friedman, 1969) — direct monetary financing of government
   spending — entered mainstream debate.

4. **Modern Monetary Theory (MMT)**: argues that sovereign currency issuers cannot go bankrupt and
   should use fiscal policy freely until inflation emerges. This is highly controversial.

### 4.5 The Post-COVID Inflation Surge (2021–2023)

The pandemic and policy response created a new policy challenge:

- **Demand shock**: fiscal stimulus + pent-up consumer demand → AD surged
- **Supply shock**: supply chain disruptions, labour shortages, energy crisis (Ukraine war) → SRAS
  shifted left
- **Monetary accommodation**: interest rates at ZLB, QE continued

Result: inflation surged to 10.1% in the UK (July 2022) — the highest in 40 years.

**Policy response**: Bank of England raised rates from 0.1% to 5.25% (2021–2023). Government
implemented tighter fiscal policy.

**Key debate**: Was the inflation **transitory** (as initially claimed by the Fed) or
**persistent**? In hindsight, a combination of persistent supply-side pressures and excess demand
contributed, requiring a strong monetary tightening.

### 4.6 The COVID-19 Policy Response: Real-World Examples

The pandemic triggered an unprecedented policy response, illustrating both the power and limitations
of macroeconomic policy:

**Fiscal packages by country:**

| Country | Fiscal Stimulus (as % of GDP) | Key Measures                                                                   |
| ------- | ----------------------------- | ------------------------------------------------------------------------------ |
| UK      | ~19% (2020–21)                | Furlough scheme (GBP 70 billion), business grants, VAT cut to 5% (hospitality) |
| US      | ~25% (2020–21)                | CARES Act (USD 2.2 trillion), stimulus checks, expanded unemployment benefits  |
| Germany | ~34% (2020–21)                | Kurzarbeit (short-time work), VAT cut, emergency aid for firms                 |
| Japan   | ~40% (2020–21)                | Cash handouts, business subsidies, tourism campaign                            |

**Evaluation**: The scale of fiscal response was justified by the Keynesian logic that when the
private sector withdraws spending simultaneously (lockdowns), the government must fill the gap. The
furlough scheme was particularly effective at preventing mass unemployment (UK unemployment peaked
at only 5.2%, compared to the OBR's initial forecast of 12%). However, the withdrawal of stimulus in
2021–22, combined with supply bottlenecks, contributed to the inflation surge.

### 4.7 Brexit Policy Trade-Offs

The UK's departure from the EU created unique macroeconomic policy challenges:

1. **Trade friction**: Non-tariff barriers (customs checks, regulatory divergence) reduced UK-EU
   trade by an estimated 15% (OBR, 2022). This is a negative supply shock (LRAS shifts left),
   reducing potential output.

2. **Labour market effects**: The end of free movement reduced EU worker inflows, contributing to
   labour shortages in agriculture, hospitality, and logistics — a cost-push inflation factor
   post-Brexit and post-COVID.

3. **Policy implications**: The supply-side nature of the Brexit shock meant that demand management
   tools (fiscal and monetary policy) could not fully offset the output loss. Supply-side policies
   (training, investment, deregulation) were needed, but these take years to deliver results.

4. **Exchange rate**: GBP depreciated by ~15% against USD following the 2016 referendum, providing a
   temporary export boost (Marshall-Lerner conditions satisfied) but increasing import prices and
   contributing to inflation.

**Exam evaluation point**: Brexit illustrates the limits of demand-side policy in addressing
supply-side shocks. No amount of fiscal or monetary stimulus can fully compensate for the loss of
trade openness and labour mobility — only structural supply-side reforms can address the root
causes.

## 5. Modern Monetary Theory (MMT)

### 5.1 Core Propositions

Modern Monetary Theory, associated with economists such as Warren Mosler, Stephanie Kelton, and Bill
Mitchell, argues:

1. **Sovereign currency issuers cannot go bankrupt**: a government that issues its own fiat currency
   can always meet obligations denominated in that currency by creating money. The constraint is not
   solvency but inflation.

$$\text{Government can always pay} \iff \text{debt denominated in own currency}$$

2. **Functional finance** (Lerner, 1943): fiscal policy should be used to achieve full employment
   and price stability, regardless of the deficit. The deficit is not a target — real outcomes are.

3. **Taxes drive money**: taxes create demand for the government's currency (people need it to pay
   taxes). Taxes are not primarily a revenue-raising tool but a tool to control inflation and
   redistribute income.

4. **Sectoral balances**: the government deficit equals the non-government sector surplus:

$$(G - T) = (S - I) + (M - X)$$

If the government runs a balanced budget, the private sector cannot net-save (unless there is a
current account surplus). A government deficit is necessary for private sector net saving.

### 5.2 Evaluation

**Strengths**: (1) Correctly identifies that sovereign currency issuers face an inflation
constraint, not a solvency constraint. (2) Highlights the importance of functional outcomes over
arbitrary deficit targets. (3) Sectoral balances identity is accounting-accurate.

**Weaknesses**: (1) Underestimates inflation risks — the 2021–2023 inflation surge showed that
excessive fiscal stimulus combined with supply constraints does generate inflation. (2) Assumes the
government can perfectly calibrate fiscal policy to maintain full employment without inflation —
this requires information the government does not have. (3) Ignores political economy — giving
governments a "blank cheque" risks fiscal profligacy and loss of market confidence. (4) May not
apply to countries that borrow in foreign currency (emerging markets — most developing countries).
(5) Assumes away the crowding out channel and Ricardian equivalence too casually.

:::warning
Common Pitfall MMT is often caricatured as "deficits don't matter." This is a
misrepresentation. MMT argues that deficits should be used to achieve real objectives (full
employment) and that the only constraint is inflation. It does not claim that unlimited deficits are
harmless. However, the practical difficulty of knowing when inflation will emerge makes MMT's policy
prescriptions risky.
:::

### 5.3 Exam Technique: Evaluating Policy Frameworks

When evaluating any macroeconomic policy framework (inflation targeting, MMT, fiscal rules), use the
following structure:

1. **Define** the policy framework and its objectives
2. **Explain the mechanism** — how does it work in theory?
3. **Apply** with real-world evidence — use specific data points (e.g., "UK inflation averaged 2.0%
   under inflation targeting, 1992–2020")
4. **Evaluate** by considering:
   - **Effectiveness**: did it achieve its stated objectives?
   - **Trade-offs**: what was sacrificed? (e.g., QE increased inequality)
   - **Context dependency**: does it work in all circumstances? (e.g., inflation targeting fails at
     the ZLB)
   - **Unintended consequences**: what went wrong? (e.g., austerity slowed recovery)
   - **Alternatives**: what would have worked better?
5. **Conclude** with a balanced judgement — "On balance, X was effective in achieving Y but failed
   to address Z."

## 6. Policy Mixes for Various Scenarios

### 5.1 Scenario Analysis

| Scenario                      | Problem                                    | Recommended Policy Mix                                                     |
| ----------------------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| **Recession + low inflation** | Output gap, deflation risk                 | Expansionary fiscal + expansionary monetary (rates cut, QE)                |
| **Overheating + inflation**   | Output above potential, demand-pull        | Contractionary fiscal + contractionary monetary (rates raised)             |
| **Stagflation**               | High inflation + low growth (supply shock) | Supply-side policy + tight monetary + targeted fiscal (support vulnerable) |
| **BoP deficit + growth**      | Current account worsening                  | Depreciation + supply-side (improve competitiveness) + fiscal tightening   |
| **ZLB recession**             | Deep recession, rates at zero              | Aggressive fiscal expansion + QE + forward guidance                        |
| **Currency crisis**           | Capital flight, sharp depreciation         | Raise rates (defend currency) + IMF support + structural reform            |

### 5.2 The Assignment Problem

The **assignment problem** (Mundell, 1962): which policy instrument should be assigned to which
objective?

**Mundell's principle of effective market classification**: assign each instrument to the objective
on which it has the most comparative advantage.

- **Monetary policy** → price stability (domestic objective)
- **Fiscal policy** → output stabilisation (domestic objective)
- **Exchange rate policy** → BoP equilibrium (external objective)

Under floating exchange rates, the BoP is self-correcting (exchange rate adjusts), so monetary and
fiscal policy can focus on domestic objectives.

### 6.3 Policy Coordination and Conflict

In practice, fiscal and monetary policy may **conflict** rather than coordinate:

**Example 1: The UK (2010–2015)**. The government pursued fiscal austerity (contractionary fiscal
policy) while the Bank of England maintained expansionary monetary policy (QE + low rates). This
policy mix created unusual dynamics: government borrowing costs fell to record lows (QE pushed down
gilt yields), but bank lending to the real economy remained weak — the "rebalancing" the government
sought (towards manufacturing and exports) was undermined by the strong pound caused by capital
inflows attracted by QE.

**Example 2: The US (2017–2019)**. The Trump administration pursued expansionary fiscal policy (Tax
Cuts and Jobs Act, 2017 — USD 1.5 trillion over 10 years) while the Fed was tightening monetary
policy (raising rates from 0.5% to 2.5%). This created upward pressure on interest rates and the
dollar, partially crowding out the fiscal stimulus.

**Key principle**: When fiscal and monetary policy pull in the same direction, their effects are
amplified. When they pull in opposite directions, they partially offset each other, and the net
effect depends on the relative strength of each.

:::info
Board-Specific Note AQA Paper 2 (Section B) often requires students to evaluate the
effectiveness of policy mixes. Edexcel Paper 3 expects discussion of policy conflicts and
trade-offs. OCR may ask about the role of the Treasury and `` `{BoE}` `` in coordinating policy. CIE
Paper 4 frequently asks students to assess whether government intervention can achieve multiple
macroeconomic objectives simultaneously.
:::

## 7. Nominal GDP Targeting: An Alternative Framework

### 7.1 Concept

Instead of targeting inflation, the central bank could target the **growth rate of nominal GDP**:

$$\text{Target: } \Delta(NGDP) = \Delta(Real\ GDP) + \pi = \text{constant (e.g., 5\%)}$$

### 7.2 Advantages over Inflation Targeting

1. **Automatic stabiliser**: A negative supply shock (SRAS shifts left) raises inflation but reduces
   real growth. Under inflation targeting, the central bank raises rates (worsening the recession).
   Under NGDP targeting, the central bank accommodates — the nominal target is unchanged, so the
   central bank loosens to support real growth.

2. **Handles demand and supply shocks symmetrically**: The central bank responds to the _nominal_
   income gap, not just the inflation gap.

3. **Better communication**: "We will ensure total spending in the economy grows at 5% per year" is
   arguably clearer than "We will ensure prices rise at 2% per year."

4. **Financial stability**: Accommodates supply shocks without tightening, reducing the risk of
   over-tightening after cost-push inflation.

### 7.3 Disadvantages

1. **Measurement**: Real-time GDP data is revised frequently and with long lags. The central bank
   might be targeting the wrong number.

2. **Double-counting risk**: If a supply shock reduces real GDP, NGDP targeting requires the central
   bank to accommodate with more inflation — the public may see this as "accepting inflation."

3. **Less established**: No major central bank has adopted NGDP targeting (though some economists
   advocate it strongly — Sumner, 2011; Frankel, 2012).

4. **Political feasibility**: shifting from an established framework (inflation targeting) to an
   untested one faces resistance.

## 8. Problem Set

**Problem 1.** Using the quantity theory of money ($MV = PY$), explain the monetarist argument that
"inflation is always and everywhere a monetary phenomenon." Under what conditions might this
statement be less valid?

<details>
<summary>Hint</summary>
From $MV = PY$: if $V$ is stable (Friedman's assumption) and $Y$ is at potential in the long run (LRAS vertical), then $\Delta P \approx \Delta M$. Sustained inflation requires sustained money supply growth. Conditions where this is less valid: (1) $V$ is not stable — during financial crises, velocity falls sharply (people hoard cash), so $\Delta M$ does not translate to $\Delta P$. (2) The economy has a large output gap — $Y$ can increase, absorbing the money supply growth. (3) Supply shocks cause inflation without money supply growth (cost-push). (4) In the short run, prices are sticky, so $\Delta M$ affects $Y$ not $P$ (Keynesian view). Overall: the monetarist argument is strong in the long run but weaker in the short run and during crises.
</details>

**Problem 2.** Suppose the central bank follows the Taylor Rule with $r^* = 2\%$, $\pi^* = 2\%$, and
coefficients 0.5 for both inflation and output gap. Calculate the prescribed interest rate when: (a)
$\pi = 3\%$, $y - y^* = 0\%$, (b) $\pi = 2\%$, $y - y^* = -4\%$, (c) $\pi = 6\%$, $y - y^* = 1\%$.
Comment on the results.

<details>
<summary>Hint</summary>
(a) $i = 2 + 3 + 0.5(1) + 0.5(0) = 5.5\%$. Rate above neutral (4%) to fight inflation. (b) $i = 2 + 2 + 0.5(0) + 0.5(-4) = 2\%$. Rate below neutral — aggressive easing for the recession. (c) $i = 2 + 6 + 0.5(4) + 0.5(1) = 2 + 6 + 2 + 0.5 = 10.5\%$. Very aggressive tightening — high inflation combined with above-potential output. The Taylor Rule responds symmetrically to inflation and output deviations, providing a systematic and transparent framework.
</details>

**Problem 3.** Explain the Lucas critique. Why does it imply that traditional macroeconomic models
are unreliable for policy evaluation? Illustrate your answer with the Phillips curve example.

<details>
<summary>Hint</summary>
The Lucas critique: when policy changes, people's expectations and behaviour change, so relationships estimated under the old policy regime are no longer valid. Phillips curve example: the 1958–1969 Phillips curve showed a stable trade-off. Governments tried to exploit it by creating inflation to reduce unemployment. But once agents (workers, firms) learned that inflation was being deliberately created, they built inflation expectations into wage and price setting. The Phillips curve shifted upward — for any given unemployment rate, inflation was now higher. The historical relationship was not a structural law but a function of the low-inflation policy regime. Once the regime changed (higher inflation policy), the relationship broke down. Implication: to evaluate policy, we need models based on deep structural parameters (preferences, technology) that do not change when policy changes — i.e., micro-founded models. *Revision: see [Macroeconomic Performance](/docs/docs_ALevel-notes/economics/macro/macroeconomic-performance) for the Phillips curve derivation.*
</details>

**Problem 4.** "Quantitative easing was a necessary and effective response to the 2008 financial
crisis, but it has created significant long-term problems." Evaluate this statement.

<details>
<summary>Hint</summary>
Necessary: (1) Interest rates were at the ZLB — conventional monetary policy was exhausted. (2) QE prevented a deeper recession and deflation. (3) It stabilised financial markets by providing liquidity. (4) Evidence suggests it lowered long-term rates by 1–2 percentage points. Effective: (1) UK GDP returned to pre-crisis levels by 2013. (2) Inflation remained close to target (until 2021). (3) Financial markets stabilised. Long-term problems: (1) Wealth inequality — QE inflated asset prices, benefiting the wealthy (BoE estimated top 5% gained 40% of benefits). (2) Asset bubbles — property prices surged, creating affordability issues. (3) Zombie firms — low rates kept unproductive firms alive. (4) Exit strategy — unwinding QE without disrupting markets is challenging. (5) Distorted incentives — prolonged low rates may have delayed necessary structural reforms. *Revision: see [The Financial Sector](/docs/docs_ALevel-notes/economics/macro/the-financial-sector) for QE mechanisms.*
</details>

**Problem 5.** The economy is experiencing stagflation: inflation is 8% and rising, while GDP growth
has fallen to -1%. The central bank's inflation target is 2%. Using the AD/AS framework, explain the
policy dilemma and evaluate possible policy responses.

<details>
<summary>Hint</summary>
The dilemma: the economy faces both high inflation (requiring contractionary policy) and low growth (requiring expansionary policy). The AD/AS analysis: SRAS has shifted left (cost-push — e.g., oil prices, supply chain disruption). This raises $P$ and reduces $Y$ simultaneously. Option 1: Do nothing → wait for self-correction (wages fall, SRAS shifts right). But this takes time and causes prolonged unemployment. Option 2: Contractionary monetary policy (raise rates) → AD shifts left → inflation falls but recession deepens. Option 3: Expansionary fiscal policy → AD shifts right → output rises but inflation worsens. Option 4: Supply-side policy → shift SRAS right → both $P$ falls and $Y$ rises (the ideal solution, but takes time). Option 5: Accept higher inflation temporarily → use nominal GDP targeting instead of inflation targeting. Best approach: a combination of tight monetary policy (to anchor expectations), targeted fiscal support (to protect the vulnerable), and aggressive supply-side reform (to address the root cause). *Revision: see [Aggregate Demand and Aggregate Supply](/docs/docs_ALevel-notes/economics/macro/aggregate-demand-and-supply).*
</details>

**Problem 6.** "Inflation targeting has been a success and should continue to be the primary
objective of monetary policy." Evaluate this statement with reference to the experience of the UK
since 1992.

<details>
<summary>Hint</summary>
Successes: (1) UK inflation averaged 2.0% from 1992–2020, compared to 10%+ in the 1970s. (2) Inflation expectations became well-anchored. (3) The Bank of England's independence (1997) enhanced credibility. (4) Transparent framework improved accountability. Limitations: (1) Pre-2008, inflation targeting contributed to neglect of financial stability (the BoE focused on CPI while a housing bubble built up). (2) Post-2021, inflation targeting failed to prevent the inflation surge (10.1% in 2022) — the target was breached by a wide margin for an extended period. (3) Inflation targeting may have been too tight post-2008, preventing faster recovery (the BoE could have been more aggressive). (4) A single target ignores output and employment objectives. Reform proposals: (1) Nominal GDP targeting (more flexible, accommodates supply shocks). (2) Average inflation targeting (Fed's new approach, 2020). (3) Dual mandate (like the Fed: price stability + maximum employment). (4) Financial stability as a co-equal objective.
</details>

**Problem 7.** Explain the time-inconsistency problem. How does an independent central bank with an
inflation target help to solve it?

<details>
<summary>Hint</summary>
Time inconsistency (Kydland & Prescott, 1977): the optimal policy ex ante (when expectations are being formed) differs from the optimal policy ex post (after expectations are set). The central bank promises low inflation. Once workers set moderate wage demands based on this promise, the bank is tempted to create surprise inflation to boost output (moving along the SRPC). Rational agents anticipate this, so they don't believe the promise. Result: high inflation with no output gain (inflationary bias). Solution: an independent central bank with an explicit inflation target solves this by: (1) Removing the political incentive to boost output before elections. (2) Creating a reputation for low inflation — if the bank deviates, it loses credibility. (3) Providing a clear benchmark for accountability. (4) Delegating to a "conservative" central banker (Rogoff, 1985) who places greater weight on inflation than the government. The UK's institutional framework (Bank of England independence + 2% inflation target + MPC) is designed to address the time-inconsistency problem.
</details>

**Problem 8.** "The COVID-19 pandemic demonstrated that the Keynesian view of macroeconomic policy
is more relevant than the monetarist view." Discuss.

<details>
<summary>Hint</summary>
Arguments for: (1) The pandemic caused a massive demand shock (lockdowns → AD collapsed). Keynesian fiscal stimulus (furlough, business grants) was essential to prevent a depression. (2) Monetary policy hit the ZLB — conventional tools were exhausted, confirming the Keynesian concern about the liquidity trap. (3) QE (an unconventional monetary tool) was essentially Keynesian in spirit — government-issued liquidity to support demand. (4) The multiplier was large (estimated 1.0–1.5), validating Keynesian predictions. (5) Austerity during recovery (monetarist approach) was widely rejected as harmful. Arguments against: (1) The post-pandemic inflation surge showed that excessive money creation (monetarist concern) does cause inflation — money supply grew 20%+ in 2020. (2) The Bank of England's eventual tightening (rates from 0.1% to 5.25%) was monetarist in spirit — controlling the money supply/inflation. (3) Supply-side constraints (labour shortages, supply chains) were the primary driver of inflation, not just demand. Best answer: the pandemic validated aspects of both views — Keynesianism for the recession response (active fiscal policy essential at the ZLB), monetarism for the inflation response (tighten monetary policy when inflation rises). The modern consensus is a pragmatic synthesis.
</details>

**Problem 9.** "Brexit has made it harder for the UK government to achieve its macroeconomic
objectives." Evaluate this statement with reference to the period 2016–2025.

<details>
<summary>Hint</summary>
Macroeconomic objectives: economic growth, price stability, low unemployment, balance of payments
equilibrium. Brexit effects: (1) **Growth**: the OBR estimated Brexit would reduce long-run
productivity by 4% — this shifts LRAS left, reducing trend growth. UK GDP growth averaged 1.4%
(2017–2019) vs. 2.1% (2013–2016). (2) **Inflation**: the 15% sterling depreciation (2016) increased
import prices, contributing to inflation peaking at 3.1% in 2017. The `` `{BoE}` `` responded by
raising rates, creating a trade-off with growth. (3) **Employment**: unemployment fell to 3.5%
(2022) — a 50-year low — partly because reduced EU migration tightened the labour market. However,
labour shortages in key sectors (NHS, agriculture, hospitality) represent a supply constraint. (4)
**Balance of payments**: the trade deficit with the EU widened as non-tariff barriers reduced
exports. The current account deficit averaged 3.5% of GDP (2017–2023). However, (5) **policy
flexibility**: leaving the EU gave the UK freedom to pursue independent monetary policy, set its own
regulations, and sign trade deals (e.g., CPTPP, 2024). Evaluation: on balance, the evidence suggests
Brexit has made macroeconomic management harder, primarily through supply-side constraints and
reduced trade openness. However, some effects are confounded with COVID-19, making attribution
difficult.
</details>

**Problem 10.** To what extent is the Lucas critique relevant for modern macroeconomic
policy-making? Discuss with reference to the UK's experience of quantitative easing.

<details>
<summary>Hint</summary>
The Lucas critique argues that relationships estimated under one policy regime may not hold when
policy changes. Application to QE: (1) **Interest rate channel**: pre-2008 models estimated a stable
relationship between the policy rate and long-term borrowing costs. QE changed this relationship by
directly purchasing long-term assets — the historical interest rate transmission mechanism was
altered. (2) **Portfolio rebalancing**: the standard IS-LM framework assumes money and bonds are
substitutes. QE works partly through a portfolio rebalancing channel (investors sell bonds to the
central bank and buy riskier assets), which is not captured in traditional models. (3)
**Expectations**: QE's effectiveness depends partly on signalling (forward guidance) — the central
bank's announcement effect. If the public's expectations formation process changes in response to QE
(e.g., learning that the central bank will buy bonds in a crisis), then the historical relationship
between policy and expectations is unreliable. (4) **Counterargument**: some relationships have
proved relatively stable. The Phillips curve, despite shifting, still shows a short-run trade-off.
The Taylor Rule, while not followed mechanically, still provides a useful benchmark for the
`` `{BoE}` ``'s rate decisions. Overall: the Lucas critique remains highly relevant — it reminds us
that the unprecedented scale of QE means historical evidence may be an unreliable guide to its
effects, particularly regarding inflation and the exit strategy.
</details>

**Problem 11.** Assess the case for replacing inflation targeting with nominal GDP targeting as the
primary monetary policy framework for the Bank of England.

<details>
<summary>Hint</summary>
Case for NGDP targeting: (1) **Automatic stabiliser**: NGDP targeting would have led to a more
accommodative response after the 2008 crisis and during COVID — the `` `{BoE}` `` would not have
tightened prematurely as inflation rose due to supply shocks. (2) **Handles supply shocks better**:
the 2021–2023 inflation was partly cost-push (energy, supply chains). Under NGDP targeting, the
`` `{BoE}` `` would have accommodated more inflation (since real GDP was falling), reducing the
depth of the recession. (3) **Simplicity**: a single target for the growth of total nominal income
is arguably easier to communicate than an inflation target. (4) **Financial stability**: by not
overtightening after supply shocks, NGDP targeting may reduce the risk of triggering a financial
crisis. Case against: (1) **Measurement problems**: GDP data is revised frequently and with long
lags (3–6 months). The `` `{BoE}` `` might be targeting an incorrect number. Inflation data, by
contrast, is available monthly with less revision. (2) **No precedent**: no major central bank has
adopted NGDP targeting, so there is no real-world evidence of its effectiveness. (3) **Legitimacy**:
NGDP targeting could be seen as "giving up on price stability" — the public may resist a framework
that explicitly tolerates higher inflation. (4) **Confusion**: the public understands "2% inflation"
but may not understand "5% nominal GDP growth." (5) **Distributional effects**: accommodative policy
after supply shocks may benefit borrowers at the expense of savers. Conclusion: NGDP targeting is
intellectually appealing but faces significant practical obstacles. The best reform may be a more
flexible inflation target (average inflation targeting, as adopted by the Fed in 2020) rather than a
complete regime change.
</details>

:::

:::

:::

:::
