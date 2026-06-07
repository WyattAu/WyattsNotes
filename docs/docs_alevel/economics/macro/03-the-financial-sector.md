---
title: The Financial Sector
description:
  'A-Level Economics The Financial Sector notes covering key definitions, core concepts, worked
  examples, and practice questions for thorough revision.'
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: the-financial-sector
sidebar_position: 3
---

## 1. The Role of Banks

### 1.1 Commercial Banks

Commercial banks perform four key functions:

1. **Financial intermediation**: channel funds from savers (depositors) to borrowers (loans). This
   converts small, liquid deposits into large, illiquid loans — overcoming the mismatch between
   savers' and borrowers' needs.

2. **Maturity transformation**: borrow short-term (demand deposits) and lend long-term (mortgages,
   business loans). This creates liquidity for depositors while providing long-term finance for
   borrowers.

3. **Risk transformation**: pool many deposits to diversify risk. Individual depositors face lower
   risk than if they lent directly to a single borrower.

4. **Payment system**: facilitate transactions through cheque clearing, electronic transfers, and
   card payments.

#### Deeper Analysis: Financial Intermediation

Financial intermediation is critical because it solves the **dual problem** that savers and
Borrowers face. Savers want safety, liquidity, and a return. Borrowers want large sums, long
Maturities, and lower interest rates. No individual transaction between a saver and a borrower can
Satisfy both parties simultaneously.

**Real-world example:** Suppose a household wishes to save £200 per month from their salary. They
Cannot lend directly to a property developer who needs GBP 50 million over 25 years. A commercial
Bank aggregates thousands of small deposits, transforms the maturity (short deposits into a
Long-term mortgage), and assumes the credit risk. The saver gets instant-access deposits; the
Developer gets a 25-year loan. Both parties are better off than without intermediation.

**Types of intermediation:**

| Type                           | Description                                                           | Example                                              |
| ------------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------- |
| **Maturity intermediation**    | Matching short-term liabilities with long-term assets                 | Current accounts funding 25-year mortgages           |
| **Size intermediation**        | Aggregating small deposits into large loans                           | Retail deposits funding corporate loans              |
| **Risk intermediation**        | Diversifying and managing credit risk                                 | Banks spreading default risk across a loan portfolio |
| **Information intermediation** | Assessing borrower creditworthiness (reducing asymmetric information) | Banks performing credit checks before lending        |

The problem of **asymmetric information** is central to financial intermediation. Borrowers know
More about their own risk than lenders do. This leads to **adverse selection** (risky borrowers are
Most eager to borrow) and **moral hazard** (borrowers may take excessive risks after receiving a
Loan). Banks mitigate both through screening, monitoring, and collateral requirements.

### 1.2 Central Banks

The **central bank** (Bank of England, ECB, Federal Reserve) performs:

1. **Lender of last resort**: provides emergency liquidity to commercial banks facing temporary
   liquidity shortages (Bagehot's rule: lend freely at a penalty rate against good collateral)

2. **Banker to the government**: manages government accounts, conducts debt issuance

3. **Monetary policy**: sets interest rates, conducts open market operations to control the money
   supply and achieve the inflation target

4. **Financial stability**: regulates and supervises banks, manages systemic risk (macroprudential
   regulation)

5. **Issuer of currency**: has the monopoly on note issuance

:::info Board-Specific Note AQA and Edexcel require detailed knowledge of the Bank of England's
Monetary Policy Committee (MPC): 9 members, meets 8 times per year, sets the Bank Rate to achieve
The 2% CPI inflation target. CIE (9708) focuses more on the _functions_ of central banks Rather than
a specific institution. OCR expects you to distinguish between the central bank's roles In monetary
stability and financial stability, and to evaluate whether these roles can conflict.
:::

**Real-world example — the Bank of England during COVID-19 (2020):** In March 2020, the BoE cut Bank
Rate from 0.75% to 0.1% (an emergency 0.65 percentage point cut) and launched a GBP 200 billion QE
Programme. Simultaneously, it introduced the COVID Corporate Financing Facility (CCFF) to buy
Short-term corporate debt directly from firms. This illustrates multiple central bank functions
Operating at once: monetary policy (rate cut), financial stability (supporting corporate bond
Markets to prevent fire sales), and lender of last resort (supporting commercial paper markets).

**Evaluation — independence vs accountability:** Central bank independence (adopted by the BoE
In 1997) is argued to improve policy credibility and anchor inflation expectations. However, critics
Argue that unelected officials setting interest rates is democratically illegitimate, and that QE
Decisions (which redistribute wealth and affect government borrowing costs) are fiscal policy by
Another name. During the 2022 cost-of-living crisis, the BoE faced criticism for being slow to raise
Rates despite inflation exceeding 10%, raising questions about whether independence truly delivers
Better outcomes.

## 2. Money Supply

### 2.1 Definitions of Money

Money serves three functions: medium of exchange, store of value, unit of account.

| Measure                | Components (UK)                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| **M0 (monetary base)** | Cash (notes and coins) in circulation + banks' operational deposits at the Bank of England |
| **M2**                 | Cash + retail bank deposits (current accounts, instant-access savings)                     |
| **M4 (broad money)**   | Cash + all retail and wholesale bank deposits + certificates of deposit                    |

:::info Board-Specific Note The exact definitions vary by board and country. CIE (9708) uses M0, M1,
M2, M4. Edexcel emphasises M0 and M4. AQA focuses on broad vs narrow money. Always use the
Definitions in your specification.
:::

### 2.2 Money Creation: The Money Multiplier

**Fractional reserve banking**: banks are required (or choose) to hold only a fraction of deposits
As reserves, lending out the rest.

We define the **reserve ratio** as $rr = \frac{R}{D}$ where $R$ = reserves and $D$ = deposits.

**Derivation of the money multiplier.** Suppose the central bank injects £1,000 of new reserves into
The banking system:

| Round    | Deposits                     | Reserves ($rr \times D$)   | Loans                    |
| -------- | ---------------------------- | -------------------------- | ------------------------ |
| 1        | £1,000                       | $rr \times 1\,000$         | $(1-rr) \times 1\,000$   |
| 2        | $(1-rr) \times 1\,000$       | $rr(1-rr) \times 1\,000$   | $(1-rr)^2 \times 1\,000$ |
| 3        | $(1-rr)^2 \times 1\,000$     | $rr(1-rr)^2 \times 1\,000$ | $(1-rr)^3 \times 1\,000$ |
| $\vdots$ | $\vdots$                     | $\vdots$                   | $\vdots$                 |
| $n$      | $(1-rr)^{n-1} \times 1\,000$ |                            |                          |

Total deposits created:

$$
\begin{aligned}
\Delta D &= 1\,000\left[1 + (1-rr) + (1-rr)^2 + \cdots\right] \\
&= 1\,000 \times \frac{1}{1 - (1-rr)} \\
&= \frac{1\,000}{rr} = 1\,000 \times m
\end{aligned}
$$

Where $m = \frac{1}{rr}$ is the **simple money multiplier**.

If $rr = 0.1$ (10% reserve ratio): $m = 10$. A £1,000 increase in reserves creates £10,000 of new
Deposits.

### 2.3 Limitations of the Simple Money Multiplier

In practice, the actual money multiplier differs from $1/rr$ because:

1. **Banks may hold excess reserves** (above the required minimum), reducing the multiplier
2. **Not all loans are redeposited** (some is held as cash, "cash leakages"), reducing the
   multiplier
3. **Capital requirements** (Basel III) constrain lending based on risk-weighted assets, not just
   reserves
4. **Liquidity preference**: banks may not lend even when they have reserves if demand for loans is
   weak (as after 2008)
5. **The modern view**: banks create deposits by making loans first, then seek reserves later
   (endogenous money theory)

**Evaluation — which model is correct?** The textbook money multiplier model implies a causal chain:
Central bank creates reserves, banks lend, money supply expands. The endogenous money model reverses
This: banks lend first (creating deposits), then obtain reserves as needed from the interbank market
Or central bank. In the UK, Canada, and many other modern banking systems, there are no binding
Reserve requirements, lending is capital-constrained rather than reserve-constrained, and the
Central bank sets the price of reserves (the interest rate) rather than the quantity. This supports
The endogenous money view. However, for exam purposes, the money multiplier remains the standard
Model on most A Level specifications.

:::info Board-Specific Note AQA and Edexcel teach the traditional money multiplier model. CIE (9708)
Has recently moved towards acknowledging endogenous money but still primarily examines the
Multiplier approach. OCR tends to focus on the practical implications (why QE did not cause
Hyperinflation) rather than the theoretical debate. When answering, use the multiplier model but
Acknowledge its limitations for evaluation marks.
:::

**Credit creation process (step-by-step balance sheets):**

Bank A receives £1,000 deposit. With $rr = 0.1$:

- Reserves: +£1,000 | Deposits: +£1,000
- Lends £900 to Customer 1
- Reserves: £100 | Loans: £900 | Deposits: £1,000

Customer 1 deposits £900 in Bank B:

- Bank B lends £810, keeps £90 reserves
- Reserves: £90 | Loans: £810 | Deposits: £900

And so on. Total new money = £10,000 (deposits) + £9,000 (loans) — the deposit is money, the loan
Creates the deposit.

## 3. Interest Rates

### 3.1 Nominal vs Real Interest Rates

**Nominal interest rate ($i$)**: the rate quoted on financial products (not adjusted for inflation).

**Real interest rate ($r$)**: the nominal rate adjusted for inflation.

**Fisher equation:**

$$(1 + i) = (1 + r)(1 + \pi)$$

Approximately:

$$r \approx i - \pi$$

When $r > 0$: savers earn a positive real return. When $r < 0$: savers lose purchasing power
(negative real interest rates).

### 3.2 The Market for Money: Liquidity Preference

Keynes's **liquidity preference theory** explains the interest rate as the price of holding money.

Money demand (liquidity preference) has three motives:

1. **Transactions demand**: $L_T = kY$ (proportional to income)
2. **Precautionary demand**: $L_P = jY$ (proportional to income)
3. **Speculative demand**: $L_S = -hi$ (inversely related to interest rate)

$$M^d = L_T + L_P + L_S = (k + j)Y - hi$$

The interest rate is determined by the intersection of money demand and money supply:

$$M^s = M^d \implies \bar{M} = (k+j)Y - hi \implies i = \frac◆LB◆(k+j)Y - \bar{M}◆RB◆◆LB◆h◆RB◆$$

### 3.3 Term Structure of Interest Rates

The **yield curve** plots interest rates against the maturity of bonds.

- **Normal (upward-sloping)**: long-term rates > short-term rates (compensation for risk and
  inflation uncertainty)
- **Inverted (downward-sloping)**: short-term rates > long-term rates (signals expectation of future
  rate cuts, often precedes recession)
- **Flat**: rates are similar across maturities

**Real-world example — the inverted yield curve:** In August 2019, the US 2-year Treasury yield
Exceeded the 10-year yield (an inverted yield curve), which has historically preceded every US
Recession since WWII. The inversion reflected market expectations that the Federal Reserve would
Need to cut rates to combat an impending downturn. The 2020 COVID recession followed, though the
Causality is debated (the curve may have anticipated COVID-related disruptions). In the UK, the
Yield curve also inverted briefly in 2019, signalling expectations of BoE rate cuts.

:::info Board-Specific Note AQA often asks students to explain the yield curve and its significance
As a predictor. Edexcel may link the yield curve to business investment decisions (firms use
Long-term rates to evaluate projects). OCR emphasises the expectations theory and liquidity
Preference theory of the term structure. CIE generally does not examine the yield curve in depth but
May ask about the relationship between bond prices and interest rates.
:::

## 4. Monetary Policy

### 4.1 The Transmission Mechanism

Monetary policy affects the economy through several channels:

$$
\begin{aligned}
\mathrm{Central bank } &\uparrow \mathrm{ interest rate} \\
&\downarrow \\
\mathrm{Commercial banks } &\uparrow \mathrm{ lending rates} \\
&\downarrow \\
\mathrm{Borrowing becomes more expensive } &\Rightarrow C \downarrow, I \downarrow \\
&\downarrow \\
\mathrm{Saving becomes more attractive } &\Rightarrow C \downarrow \\
&\downarrow \\
\mathrm{Exchange rate appreciates } &\Rightarrow X \downarrow, M \uparrow \\
&\downarrow \\
AD &\downarrow \Rightarrow Y \downarrow, P \downarrow
\end{aligned}
$$

#### Detailed Transmission Channels

The diagram above summarises the main channels, but exam answers should demonstrate deeper
Understanding of each pathway:

1. **Interest rate channel (cost of borrowing):** Higher policy rates increase commercial banks'
   funding costs, which are passed on to households (mortgages, personal loans, credit cards) and
   firms (business loans, overdrafts). The effect depends on the _interest elasticity of investment_
   — investment is more responsive to rate changes when firms are highly leveraged and when rates
   rise from a low base. In the UK, approximately 35% of mortgages are variable-rate, so rate
   changes transmit relatively quickly to household disposable income.

2. **Exchange rate channel:** Higher UK interest rates attract foreign capital inflows ("hot
   money"), increasing demand for sterling and causing appreciation. This makes UK exports more
   expensive and imports cheaper, reducing net exports ($X - M$) and hence AD. The effectiveness
   depends on the _Marshall-Lerner condition_ (in the short run, the J-curve effect may cause a
   temporary worsening of the trade balance).

3. **Wealth effect:** Higher interest rates reduce asset prices (bonds, equities, property).
   Households feel less wealthy and reduce consumption. The Bank of England estimates that a 1
   percentage point rate rise reduces UK house prices by around 1-2% over two years, with knock-on
   effects on consumer spending through the housing wealth effect.

4. **Expectations channel (forward guidance):** If the central bank signals that rates will remain
   high for an extended period, households and firms adjust their expectations of future inflation
   and economic conditions. This can be powerful — expectations of lower future inflation reduce
   wage demands and price-setting behaviour, reinforcing the central bank's inflation target.

5. **Credit channel:** Higher interest rates tighten banks' lending standards. Banks become more
   risk-averse, reducing credit availability even for borrowers willing to pay higher rates. This is
   particularly relevant for small and medium-sized enterprises (SMEs) that depend on bank lending
   and cannot access capital markets directly.

:::info Board-Specific Note AQA expects you to identify at least three transmission channels with
Diagrams. Edexcel requires a clear chain of reasoning from the interest rate change to the final
Impact on AD, inflation, and employment. OCR is particularly interested in the _limitations_ of
Monetary policy transmission — time lags, interest elasticity, and the liquidity trap. CIE expects a
More formal diagrammatic analysis using the IS-LM framework (though not all centres teach IS-LM, so
Check with your teacher).
:::

**Evaluation — how effective is monetary policy?**

- **Time lags:** Monetary policy operates with long and variable time lags. The BoE estimates that a
  rate change takes 12-24 months to fully affect inflation. This means policy is inherently
  backward-looking (responding to past data) and can be pro-cyclical if misjudged.
- **Interest elasticity:** In a recession, investment may be interest-inelastic — firms won't invest
  regardless of how low rates go if they lack confidence about future demand (as Keynes argued, "you
  can't push on a string").
- **Conflicting objectives:** Tightening monetary policy to control inflation may worsen
  unemployment and economic growth. The Phillips curve trade-off means the central bank must judge
  the appropriate balance.
- **Global factors:** In a small open economy like the UK, exchange rate effects can be
  destabilising — an appreciating currency helps control inflation (cheaper imports) but harms
  exporters.
- **Distributional effects:** Rate rises benefit savers but hurt borrowers. Since younger households
  tend to be net borrowers and older households net savers, monetary policy redistributes across
  generations.

### 4.2 Tools of Monetary Policy

1. **Interest rate (Bank Rate)**: the rate at which the central bank lends to commercial banks. The
   primary tool of UK monetary policy.

2. **Open market operations (OMO)**: the central bank buys/sells government bonds to
   increase/decrease the money supply.

- Buying bonds $\Rightarrow$ pays money to sellers $\Rightarrow$ money supply $\uparrow$
- Selling bonds $\Rightarrow$ takes money from buyers $\Rightarrow$ money supply $\downarrow$

3. **Quantitative easing (QE)**: large-scale asset purchases (government bonds, corporate bonds) by
   the central bank to increase the money supply and lower long-term interest rates when the policy
   rate is at or near zero.

4. **Reserve requirements**: changing the minimum reserve ratio (rarely used in the UK).

5. **Forward guidance**: communicating future policy intentions to influence expectations.

### 4.3 Quantitative Easing

QE was first used extensively after the 2008 financial crisis and again during COVID-19.

**Mechanism:**

1. Central bank creates new reserves electronically
2. Buys government bonds from commercial banks and pension funds
3. Banks receive reserves $\Rightarrow$ lending capacity increases
4. Bond prices rise $\Rightarrow$ yields (interest rates) fall
5. Lower long-term rates stimulate investment and consumption
6. Portfolio rebalancing: investors shift from bonds to equities and corporate bonds $\Rightarrow$
   lower borrowing costs for firms

**Limitations:**

- May create asset price bubbles (inflation in asset markets rather than goods markets)
- Benefits asset owners disproportionately (exacerbates wealth inequality)
- Transmission to the real economy may be weak if banks don't lend (liquidity trap)
- Unwinding QE (quantitative tightening) may be disruptive

**Evaluation — was QE effective?**

Evidence from the UK: the BoE's own estimates suggest that the GBP 895 billion of QE conducted
Between 2009 and 2022 boosted GDP by around 1.5-2% and raised inflation by 0.75-1.5 percentage
Points. However, the distributional effects were significant: the Bank of England estimated in 2012
That its QE programme had increased the wealth of the top 5% of households by up to 40%, while the
Bottom 50% saw minimal benefit. This is because the top 5% hold the majority of financial assets
Whose prices were inflated by QE.

**Real-world example — QE and the COVID-19 recovery:** Between March 2020 and late 2021, the BoE
Purchased an additional GBP 450 billion of government bonds. Despite this massive expansion of the
Money supply, CPI inflation remained below the 2% target until mid-2021, when supply chain
Disruptions and energy price shocks drove inflation higher. This illustrates that QE alone does not
Cause high inflation — the broader macroeconomic context matters.

:::info Board-Specific Note AQA and Edexcel both require evaluation of QE. CIE (9708) Paper 4
Frequently includes questions on unconventional monetary policy. Key evaluation points: QE is less
Effective when banks are unwilling to lend (liquidity trap), the impact on the real economy is
Uncertain and hard to measure, and the exit strategy (quantitative tightening) is politically and
Economically risky. OCR may also ask about the interaction between QE and fiscal policy (monetary
Financing).
:::

## 5. Financial Markets

### 5.1 Bonds

A **bond** is a debt instrument: the issuer promises to pay the holder a fixed coupon (interest)
Periodically and repay the face value at maturity.

**Key relationship: bond prices and yields are inversely related.**

_Proof._ Let $P$ = bond price, $C$ = annual coupon, $F$ = face value, $n$ = years to maturity, $r$ =
Yield (required return).

$$P = \sum_{t=1}^{n} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^n}$$

$\frac{dP}{dr} < 0$ (each term is decreasing in $r$). If market interest rates rise, existing bonds
With lower coupons become less attractive, so their price falls to offer a competitive yield.
$\blacksquare$

**Yield to maturity**: the discount rate that equates the present value of future cash flows to the
Current price.

### 5.2 Shares (Equities)

A **share** represents ownership in a company. Shareholders receive dividends and may benefit from
Capital gains.

**Share price valuation** (simplified dividend discount model):

$$P_0 = \frac{D_1}{r - g}$$

Where $D_1$ = expected dividend next year, $r$ = required return, $g$ = expected growth rate of
Dividends.

#### The Role of Financial Markets in the Economy

Financial markets perform crucial functions beyond matching buyers and sellers:

1. **Price discovery:** markets aggregate dispersed information from millions of participants into a
   single price. A share price reflects the market's collective expectation of a firm's future
   profitability.

2. **Risk transfer:** derivatives (options, futures, swaps) allow firms and investors to hedge
   risks. For example, an airline can buy fuel futures to lock in the price of jet fuel, reducing
   uncertainty about future costs.

3. **Corporate governance:** share prices provide a signal about managerial performance. Persistent
   underperformance leads to a falling share price, making the firm a takeover target — disciplining
   management.

4. **Capital allocation:** financial markets direct savings towards the most productive investments.
   In theory, capital flows to firms offering the highest risk-adjusted returns, improving
   allocative efficiency.

**Real-world example — the 2021 GameStop short squeeze:** In January 2021, retail investors
Coordinated through Reddit to buy shares in GameStop, driving the price from USD 18 to USD 483 in
Weeks. This forced hedge funds that had shorted the stock to buy shares to cover their positions,
Amplifying the price rise. The episode illustrates both the power of market sentiment (prices can
Deviate far from fundamentals) and the role of financial market regulation (trading was temporarily
Restricted by brokerages, raising questions about market fairness).

## 6. Critical Evaluation

### The 2008 Financial Crisis

The crisis originated in the US subprime mortgage market and spread globally through interconnected
Financial markets. Key lessons:

1. **Systemic risk**: individual bank risk management is insufficient — the system as a whole can be
   fragile (Minsky's financial instability hypothesis)
2. **Too big to fail**: large banks' failure would cause systemic collapse $\Rightarrow$ moral
   hazard (banks take excessive risks expecting bailouts)
3. **Regulatory failure**: light-touch regulation allowed excessive leverage, complex derivatives,
   and inadequate capital buffers
4. **Liquidity vs solvency**: banks faced both liquidity crises (couldn't meet short-term
   obligations) and solvency crises (assets < liabilities)

**Post-crisis reforms:**

- Basel III: higher capital requirements, liquidity coverage ratios, leverage ratios
- Vickers Report (UK): ring-fencing retail banking from investment banking
- Stress testing: regular assessment of banks' resilience to adverse scenarios
- Resolution planning: "living wills" to allow orderly bank failure without taxpayer bailouts

**Evaluation — have post-crisis reforms been sufficient?**

On one hand, the UK banking system is significantly more resilient than in 2008. The Common Equity
Tier 1 (CET1) capital ratio of major UK banks rose from around 4-5% pre-crisis to over 15% by 2023.
The 2023 banking turmoil (Silicon Valley Bank, Credit Suisse) did not spread to the UK, suggesting
Reforms worked.

On the other hand, risks have shifted rather than disappeared. The growth of **shadow banking**
(non-bank financial intermediaries such as money market funds, hedge funds, and private equity) now
Accounts for nearly 50% of global financial intermediation. These entities are less regulated than
Banks, less transparent, and can be sources of systemic risk (as the 2022 UK Gilt Crisis, triggered
By liability-driven investments in pension funds, demonstrated). The Bank of England's intervention
In the gilt market during the mini-budget crisis showed that systemic risk now originates outside
The traditional banking sector.

Furthermore, moral hazard persists. The implicit guarantee that governments will bail out large
Financial institutions ("too big to fail") has not been fully resolved. The failure of Credit Suisse
In 2023 was resolved through a government-brokered takeover by UBS, reinforcing the perception that
Large banks will always be rescued.

:::tip Exam Technique When analysing monetary policy, always distinguish between the _transmission
Mechanism_ (how the policy affects the economy) and the _effectiveness_ (how well it works in
Practice). Consider time lags, the interest elasticity of investment, and the shape of the liquidity
Preference curve.
:::

:::tip Exam Technique For evaluation questions ( worth 12-25 marks), structure your answer As: (1)
identify the issue, (2) explain the mechanism with a diagram, (3) evaluate using **however/on the
other hand/significantly** to introduce counterarguments, (4) conclude with a Justified judgement.
Always consider short-run vs long-run effects and the context (e.g., the state Of the economy at the
time).
:::

## 7. Problem Set

**Problem 1.** If the reserve ratio is 8% and the central bank injects £500 million of new reserves
Into the banking system, what is the maximum increase in the money supply? What assumptions does
This calculation rely on?

<details>
<summary>Hint</summary>
$m = 1/0.08 = 12.5$. Maximum increase $= 12.5 \times 500 = £6\,250$M. Assumptions: no cash leakages, no excess reserves held, all loans are redeposited in the banking system, demand for loans is infinite at the prevailing interest rate.
</details>

**Problem 2.** The nominal interest rate on a savings account is 3% and inflation is 5%. Calculate
The real interest rate. Should the saver be happy or unhappy? What does this imply for the central
Bank's policy stance?

<details>
<summary>Hint</summary>
Real rate $\approx 3\% - 5\% = -2\%$. The saver is losing purchasing power (negative real return). This implies the central bank has an expansionary policy stance (low real rates to stimulate the economy). If sustained, negative real rates discourage saving and encourage borrowing and spending.
</details>

**Problem 3.** A 5-year government bond with face value £100 and annual coupon of £4 is currently
Priced at £95. Calculate the current yield. Explain why the yield is higher than the coupon rate.

<details>
<summary>Hint</summary>
Current yield $= 4/95 \times 100 = 4.21\%$. The yield exceeds the coupon rate (4%) because the bond is trading at a discount (£95 < £100). The investor receives the coupon plus a capital gain of £5 at maturity, so the total return exceeds the coupon.
</details>

**Problem 4.** Using the liquidity preference framework, explain what happens to the interest rate
When (a) the central bank increases the money supply, and (b) national income increases. Use a
Diagram in your explanation.

<details>
<summary>Hint</summary>
(a) Money supply curve shifts right $\Rightarrow$ interest rate falls (excess supply of money at the original rate, people buy bonds, bond prices rise, yields fall). (b) Income increases $\Rightarrow$ transactions demand for money rises $\Rightarrow$ money demand curve shifts right $\Rightarrow$ interest rate rises (excess demand for money at the original rate, people sell bonds, bond prices fall, yields rise).
</details>

**Problem 5.** Explain the process of quantitative easing. Why might QE be less effective in a
Liquidity trap? Evaluate the risks of QE for (a) asset price inflation and (b) wealth inequality.

<details>
<summary>Hint</summary>
QE: central bank buys assets (mainly government bonds) $\Rightarrow$ bond prices rise, yields fall $\Rightarrow$ lower borrowing costs, portfolio rebalancing. Liquidity trap: at the zero lower bound, interest rates can't fall further, and banks may hoard reserves rather than lend (excess reserves). Risks: (a) QE increases demand for assets (bonds, equities, property), pushing up prices — potentially creating bubbles disconnected from fundamentals. (b) Asset price inflation benefits those who own assets (wealthy) more than those who don't (poor), exacerbating wealth inequality.
</details>

**Problem 6.** A commercial bank has £500m in deposits, £50m in reserves, and £450m in loans. The
Reserve ratio is 10%. (a) Is the bank meeting its reserve requirement? (b) What is the maximum new
Loan the bank can make? (c) If the reserve ratio is increased to 15%, what happens?

<details>
<summary>Hint</summary>
(a) Required reserves $= 10\% \times 500 = £50$M. Actual reserves = £50m. Yes, exactly meeting. (b) Maximum new loan = £0 (no excess reserves). (c) Required reserves $= 15\% \times 500 = £75$M. The bank has only £50m, so it must reduce lending by £25m to meet the new requirement (or borrow reserves).
</details>

**Problem 7.** "Banks create money out of thin air." Evaluate this statement with reference to the
Credit creation process and the role of central bank reserves.

<details>
<summary>Hint</summary>
Technically true: when a bank makes a loan, it simultaneously creates a deposit (money). The bank doesn't need reserves first — it creates the loan-deposit pair. However, constraints exist: (1) The bank must have enough reserves *later* to settle interbank payments and meet reserve requirements. (2) Capital requirements limit lending relative to equity. (3) The bank must find creditworthy borrowers willing to borrow. (4) Regulatory oversight limits excessive credit creation. The statement is misleading because it suggests unlimited money creation, which is false.
</details>

**Problem 8.** Explain how an increase in the Bank of England's base rate would affect (a) mortgage
Holders, (b) savers, (c) exporters, (d) the government's debt servicing costs, and (e) the exchange
Rate.

<details>
<summary>Hint</summary>
(a) Variable-rate mortgage payments increase $\Rightarrow$ disposable income falls $\Rightarrow$ consumption falls. (b) Savers earn higher returns $\Rightarrow$ saving becomes more attractive $\Rightarrow$ consumption falls. (c) Higher interest rates attract foreign capital $\Rightarrow$ sterling appreciates $\Rightarrow$ UK exports become more expensive $\Rightarrow$ exports fall. (d) Government pays more interest on its debt (much of which is linked to interest rates) $\Rightarrow$ fiscal deficit widens. (e) Exchange rate appreciates (hot money flows in, attracted by higher returns).
</details>

**Problem 9.** Compare and contrast the use of interest rates and quantitative easing as tools of
Monetary policy. In what circumstances would each be more appropriate?

<details>
<summary>Hint</summary>
Interest rates: primary tool, affects short-term borrowing costs, well-understood transmission mechanism. Appropriate for normal economic conditions. QE: used when interest rates are at or near zero (zero lower bound), affects long-term rates and asset prices. Appropriate for severe recessions when conventional policy is exhausted. QE is less precise, harder to reverse, and has distributional consequences. Interest rate changes are quick and reversible but may be insufficient in a deep crisis.
</details>

**Problem 10.** "The 2008 financial crisis was primarily caused by excessive risk-taking by banks."
Evaluate this statement, considering the roles of (a) banks, (b) regulators, (c) central banks, and
(d) consumers.

<details>
<summary>Hint</summary>
(a) Banks: excessive leverage, inadequate risk management, complex securitisation, mis-selling of subprime mortgages. (b) Regulators: light-touch regulation, failure to monitor systemic risk, regulatory arbitrage (shadow banking). (c) Central banks: low interest rates encouraged excessive borrowing, failure to identify asset bubbles. (d) Consumers: borrowed beyond their means (subprime mortgages), irrational exuberance about house prices. The crisis was a *systemic* failure — no single cause, but rather a combination of misaligned incentives, regulatory gaps, and collective irrationality.
</details>

**Problem 11.** Explain the inverse relationship between bond prices and interest rates. If a bond
With face value £100 and coupon 5% has 3 years to maturity and the market interest rate rises from
5% to 6%, calculate the new bond price.

<details>
<summary>Hint</summary>
At 5%: $P = 5/1.05 + 5/1.05^2 + 105/1.05^3 = 4.76 + 4.54 + 90.70 = £100$ (par). At 6%: $P = 5/1.06 + 5/1.06^2 + 105/1.06^3 = 4.72 + 4.45 + 88.16 = £97.33$. The price falls from £100 to £97.33 when the yield rises from 5% to 6%. This confirms the inverse relationship.
</details>

**Problem 12.** Discuss the argument that "fractional reserve banking is inherently unstable and
Should be replaced by full reserve banking." What are the counterarguments?

<details>
<summary>Hint</summary>
For: fractional reserve banking creates credit booms and busts (Minsky cycle), bank runs are possible (Diamond-Dybvig model), socialises losses (bailouts) while privatising gains. Full reserve banking (Chicago Plan) would eliminate bank runs and credit cycles. Against: fractional reserve banking performs useful maturity transformation (converting short-term deposits into long-term loans), full reserve banking would dramatically reduce lending and economic growth, banks would need to charge for deposits (end of free banking), credit creation could move to shadow banking (unregulated).
</details>

**Problem 13.** In 2022, UK CPI inflation reached 11.1% while the Bank of England's Bank Rate was
Raised from 0.25% to 3.0%. (a) Calculate the real interest rate at the start and end of this
Tightening cycle, assuming inflation of 5.4% at the start. (b) Explain why the BoE was criticised
For being "behind the curve." (c) Evaluate the argument that the BoE should have raised rates
Earlier.

<details>
<summary>Hint</summary>
(a) Start: real rate $\approx 0.25\% - 5.4\% = -5.15\%$. End: real rate $\approx 3.0\% - 11.1\% = -8.1\%$. Real rates were deeply negative throughout, even after significant tightening. (b) The BoE was criticised because inflation had been rising since late 2021, but it kept rates at 0.25% until December 2021 and raised them only gradually. By the time rates reached meaningful levels, inflation had already become entrenched. (c) For raising earlier: pre-emptive tightening could have anchored expectations, prevented a wage-price spiral, and reduced the peak inflation rate. Against raising earlier: the inflation was primarily driven by external supply shocks (energy, post-COVID supply chains) which monetary policy cannot address. Raising rates earlier risked unnecessarily choking the recovery from COVID-19 when the inflation spike might have proved transitory. The judgement depends on whether the inflation was viewed as demand-pull or cost-push in nature.
</details>

**Problem 14.** Explain how a central bank could use each of the following to implement
Contractionary monetary policy: (a) open market operations, (b) the reserve requirement, (c) forward
Guidance. For each, explain one reason why it might be less effective than raising the policy
Interest rate.

<details>
<summary>Hint</summary>
(a) OMO: the central bank sells government bonds, removing money from circulation and reducing bank reserves. Less effective because: in a well-developed financial system, banks can obtain liquidity from other sources (interbank market, central bank standing facilities), so OMOs mainly signal policy intent rather than directly constraining lending. (b) Reserve requirement: increasing the required reserve ratio forces banks to hold more reserves, reducing their lending capacity. Less effective because: in the UK there are no mandatory reserve requirements, and changing them is a blunt instrument that doesn't discriminate between risky and safe lending. Banks may also find ways around the requirement (e.g., shifting activity to shadow banking). (c) Forward guidance: signalling that rates will stay higher for longer to manage inflation expectations. Less effective because: credibility depends on the central bank's track record. If the public doubts the central bank will follow through (e.g., due to political pressure to cut rates), forward guidance loses its power.
</details>

**Problem 15.** "The growth of shadow banking poses a greater threat to financial stability than
Traditional banking." Evaluate this statement with reference to the 2008 financial crisis, the 2022
UK Gilt Crisis, and the failure of Silicon Valley Bank in 2023.

<details>
<summary>Hint</summary>
For the statement: (1) Shadow banking entities (hedge funds, money market funds, private credit) are less regulated, less transparent, and not subject to Basel III capital requirements. (2) The 2008 crisis was amplified by shadow banking — mortgage-backed securities and SIVs (structured investment vehicles) operated outside the regulated banking system. (3) The 2022 UK Gilt Crisis was triggered by liability-driven investments (LDIs) held by pension funds — non-bank entities using leverage that was not captured by banking regulation. (4) SVB's failure was caused by losses on its bond portfolio, but the bank run was amplified by social media and venture capital networks (a form of shadow banking contagion). Against: (1) Traditional banks still pose systemic risk — Credit Suisse's 2023 failure showed that even regulated banks can fail. (2) Shadow banking provides valuable services (credit to SMEs, alternative investments) that traditional banks cannot or will not provide. (3) The solution is better regulation of shadow banking, not eliminating it. Conclusion: shadow banking is a significant and growing risk, but the threat comes from the *interaction* between regulated and unregulated parts of the financial system, not from shadow banking alone.
</details>

**Problem 16.** A country's money supply is currently GBP 2 trillion. The central bank wants to
Increase it by GBP 200 billion through open market operations. If the current reserve ratio is 5%
But banks choose to hold 3% excess reserves and the public holds 10% of any new deposits as cash,
Calculate (a) the effective money multiplier and (b) the value of bonds the central bank must
Purchase to achieve its target.

<details>
<summary>Hint</summary>
The effective multiplier accounts for excess reserves and cash leakages. Let $rr = 0.05$ (required), $re = 0.03$ (excess), and $c = 0.10$ (cash ratio). Total reserves held per unit of deposits $= rr + re = 0.08$. Each round, only $(1 - c)$ of loans are redeposited. The money multiplier becomes: $m = \frac{1 + c}{rr + re + c} = \frac{1.10}{0.08 + 0.10} = \frac{1.10}{0.18} \approx 6.11$. (a) The effective multiplier is approximately 6.11 (compared to the simple multiplier of $1/0.05 = 20$). (b) Required reserve injection $= \mathrm{target increase} / m = 200 / 6.11 \approx$ GBP 32.7 billion. The central bank must purchase approximately GBP 32.7 billion of bonds. This is much larger than under the simple model (which would suggest only GBP 10 billion needed), illustrating the importance of accounting for cash leakages and excess reserves.
</details>


:::danger Common Pitfalls

- **Confusing bond prices and bond yields:** Bond prices and interest rates (yields) move in
  OPPOSITE directions. When interest rates rise, existing bonds with lower coupon rates become less
  attractive, so their price falls. Many students get this relationship backwards.

- **Assuming the money multiplier works in reverse:** In reality, banks create loans first (creating
  deposits) and then obtain reserves later -- the endogenous money view. The textbook money
  multiplier (reserves create deposits) is a simplification. Exam answers should acknowledge this
  limitation for evaluation marks.

- **Confusing nominal and real interest rates:** A nominal interest rate of 5% with inflation at 7%
  gives a NEGATIVE real interest rate of -2%. Savers are losing purchasing power. Always apply the
  Fisher equation: real rate is approximately nominal rate minus inflation rate.

- **Treating QE as equivalent to printing money:** QE involves the central bank buying assets
  (mostly government bonds), not directly financing government spending. The newly created reserves
  largely remain in the banking system. This distinction matters for understanding why QE did not
  cause hyperinflation after 2008.

## 8. Advanced Financial Sector Topics

### 8.1 The Money Multiplier: Step-by-Step Balance Sheet Analysis

**Example with cash leakages and excess reserves.**

Central bank injects GBP 1,000 of new reserves. Reserve ratio $rr = 0.1$. Cash leakage rate
$c = 0.1$ (10% of deposits held as cash). Banks hold excess reserves of $re = 0.05$ (5% of
deposits).

**Round 1:** Bank A receives GBP 1,000.

- Required reserves: $0.1 \times 1000 = 100$. Excess reserves: $0.05 \times 1000 = 50$.
- Loans: $1000 - 100 - 50 = 850$. But only $(1 - c) = 90\%$ is redeposited: $850 \times 0.9 = 765$.
- Cash held: $850 \times 0.1 = 85$.

**Round 2:** Bank B receives 765.

- Required reserves: $0.1 \times 765 = 76.5$. Excess reserves: $0.05 \times 765 = 38.25$.
- Loans: $765 - 76.5 - 38.25 = 650.25$. Redeposited: $650.25 \times 0.9 = 585.23$.
- Cash held: $650.25 \times 0.1 = 65.03$.

**Total deposits created:** $$D = 1000 + 765 + 585.23 + \cdots$$
$$D = \frac{1000}{1 - (1 - rr - re)(1 - c)} = \frac◆LB◆1000◆RB◆◆LB◆1 - 0.85 \times 0.9◆RB◆ = \frac{1000}{1 - 0.765} = \frac{1000}{0.235} = \text{GBP } 4\,255$$

**Effective money multiplier:** $$m = \frac{D}{R} = \frac{4255}{1000} = 4.26$$

Compared to the simple multiplier of $1/rr = 10$Cash leakages and excess reserves reduce the
multiplier by more than half.

### 8.2 Bond Yield Calculations: Comprehensive Worked Examples

**Example: Yield to maturity.** A 3-year bond with face value GBP 100 pays an annual coupon of 6%
and is priced at GBP 95.

The yield to maturity $r$ satisfies:

$$95 = \frac{6}{(1+r)} + \frac{6}{(1+r)^2} + \frac{106}{(1+r)^3}$$

Trial and error:

- At $r = 7\%$: $PV = 5.61 + 5.24 + 86.53 = 97.38 > 95$. Yield too low.
- At $r = 8\%$: $PV = 5.56 + 5.15 + 84.17 = 94.87 \approx 95$.

More precisely: at $r = 7.9\%$: $PV = 5.56 + 5.16 + 84.56 = 95.28$. Close enough.

The YTM is approximately 8%. The bond trades at a discount because the coupon (6%) is below the
market yield (8%), so the investor is compensated by a capital gain of GBP 5 at maturity.

**Example: Duration and interest rate sensitivity.**

The **Macaulay duration** of a bond measures its sensitivity to interest rate changes:

$$D = \frac{1}{P} \sum_{t=1}^{n} \frac◆LB◆t \times C_t◆RB◆◆LB◆(1+r)^t◆RB◆$$

For a 5-year bond with 6% coupon, face 100, priced at par ($r = 6\%$):

$$D = \frac{1}{100}\left[\frac◆LB◆1 \times 6◆RB◆◆LB◆1.06◆RB◆ + \frac◆LB◆2 \times 6◆RB◆◆LB◆1.06^2◆RB◆ + \frac◆LB◆3 \times 6◆RB◆◆LB◆1.06^3◆RB◆ + \frac◆LB◆4 \times 6◆RB◆◆LB◆1.06^4◆RB◆ + \frac◆LB◆5 \times 106◆RB◆◆LB◆1.06^5◆RB◆\right]$$
$$D = \frac{1}{100}[5.66 + 10.68 + 15.08 + 18.88 + 79.34] = \frac{129.64}{100} = 4.30 \text{ years}$$

**Interpretation:** if interest rates rise by 1%, the bond price falls by approximately 4.30%.
Duration captures the weighted-average time to receipt of the bond's cash flows.

### 8.3 Monetary Policy Transmission: Quantitative Worked Example

**Example.** The Bank of England raises the Bank Rate from 4% to 5%.

**Interest rate channel:**

- Variable-rate mortgage holders with GBP 200,000 mortgages see monthly payments increase by
  approximately GBP 167 per month ($200\,000 \times 0.01/12$).
- Approximately 35% of UK mortgages are variable-rate, so approximately 2.8 million households are
  directly affected.
- Aggregate annual reduction in disposable income:
  $2.8\text{m} \times 12 \times 167 = \text{GBP } 5.6\text{bn}$.

**Exchange rate channel:**

- Higher UK rates attract foreign capital $\Rightarrow$ demand for sterling rises $\Rightarrow$
  sterling appreciates by approximately 2-5%.
- UK exports become 2-5% more expensive abroad $\Rightarrow$ export volumes fall.
- UK imports become 2-5% cheaper $\Rightarrow$ import volumes rise.
- Net effect on the current account: deterioration of approximately GBP 5-15 billion per year.

**Wealth effect:**

- Higher rates reduce house prices by approximately 1-2% over 2 years (Bank of England estimate).
- UK housing wealth is approximately GBP 8.7 trillion. A 1.5% fall represents GBP 130 billion of
  lost wealth.
- The marginal propensity to consume out of housing wealth is estimated at 0.02-0.05. Consumption
  falls by approximately GBP 2.6-6.5 billion.

**Total estimated impact on AD:**

- Direct interest rate effect on consumption: GBP 5.6bn
- Wealth effect on consumption: GBP 2.6-6.5bn
- Net exports effect: -GBP 5-15bn (worsens trade balance)
- Total: approximately GBP 3-9bn contraction in AD (0.15-0.45% of GDP).

This is the estimated impact 12-24 months after the rate hike. The full effect takes 2-3 years to
materialise.

## 9. Exam-Style Questions with Full Mark Schemes

**Question 1 (25 marks).** "Quantitative easing was an effective response to the 2008 financial
crisis and the COVID-19 recession." Evaluate this statement.

<details>
<summary>Full Mark Scheme</summary>
**Arguments for QE effectiveness (10 marks):**
- Prevented a deeper recession: by lowering long-term interest rates and supporting asset prices, QE prevented a collapse of the financial system. The BoE estimates GBP 895bn of QE boosted GDP by 1.5-2%.
- Supported government borrowing: by buying gilts, QE kept government borrowing costs low during the crisis. UK 10-year gilt yields fell from approximately 5% (2007) to 0.5% (2020).
- Prevented deflation: the inflationary effect of QE helped avoid the deflationary spiral experienced by Japan in the 1990s.
- Portfolio rebalancing: QE pushed investors towards corporate bonds and equities, lowering borrowing costs for firms and supporting investment.

**Arguments against QE effectiveness (10 marks):**

- Limited transmission to the real economy: bank lending did not recover quickly post-2008 because
  demand for loans was weak. QE inflated asset prices (bonds, equities, property) more than the real
  economy.
- Distributional effects: the BoE estimates QE increased the wealth of the top 5% by up to 40% while
  the bottom 50% saw minimal benefit. QE exacerbated wealth inequality.
- Created asset price bubbles: concerns that QE inflated property and equity prices to unsustainable
  levels, risking future corrections.
- Exit strategy challenges: unwinding QE (QT) may be disruptive. As the BoE sells bonds, prices fall
  and yields rise, potentially triggering market instability.
- The post-COVID inflation surge raised questions about whether QE created excess liquidity that
  contributed to inflation.

**Evaluation (5 marks):**

- QE was necessary in the specific circumstances of both crises (rates at the zero lower bound,
  financial system stress, deflation risk).
- However, QE was most effective as a financial stabilisation tool and least effective as a stimulus
  for the real economy.
- The appropriate use of QE is as a temporary, emergency measure, not a permanent feature of
  monetary policy.
- Going forward, the BoE should rely primarily on interest rate adjustments and use QE only when the
  ZLB is binding.
- Conclusion: QE was effective at preventing worse outcomes but was not a panacea. Its limitations
-- particularly distributional effects and the risk of asset bubbles -- must be acknowledged.
</details>

**Question 2 (12 marks).** Using the liquidity preference theory, explain the impact of an increase
in the money supply on interest rates. Why might this be less effective during a liquidity trap?

<details>
<summary>Full Mark Scheme</summary>
**Liquidity preference analysis (6 marks):**
An increase in the money supply shifts the money supply curve rightward. At the original interest rate, there is now an excess supply of money. Individuals use the surplus money to buy bonds. Bond prices rise, yields fall. The new equilibrium has a lower interest rate.

Diagram: money demand curve ($M^d = (k+j)Y - hi$) and money supply curve ($M^s = \bar{M}$). The
$M^s$ curve shifts right from $M_1^s$ to $M_2^s$. The interest rate falls from $i_1$ to $i_2$.

**Liquidity trap analysis (6 marks):** In a liquidity trap (Keynes, 1936), interest rates are at or
near zero. The speculative demand for money becomes perfectly elastic: individuals expect interest
rates to rise in the future, so they prefer to hold cash rather than bonds (to avoid capital losses
when bond prices fall). In this case, the money supply curve shifts right, but the interest rate
does not fall because money demand is horizontal at $i = 0$.

The central bank "pushes on a string" -- it can increase the monetary base, but cannot force
interest rates below zero. The conventional transmission mechanism breaks down. This was the
situation in the UK and Japan after 2008.

Implications: conventional monetary policy is ineffective. Unconventional policies (QE, forward
guidance, negative interest rates) may be needed.

</details>

## 10. Extended Worked Examples

### 10.1 Bank Lending and the Money Multiplier: Full Simulation

**Example.** The central bank conducts an open market operation, purchasing GBP 1 billion of
government bonds from Bank A.

**Step 1: Bank A's balance sheet changes.** Assets: +GBP 1bn reserves, -GBP 1bn bonds. Bank A now
has excess reserves of GBP 1bn.

**Step 2: Bank A lends to Firm X.** Reserve ratio = 10%. Bank A must keep 10% of deposits as
reserves. If Bank A creates a loan of GBP 900m (keeping 100m as reserves), Firm X deposits the 900m
in Bank B.

**Step 3: Bank B's balance sheet.** Deposits: +GBP 900m. Reserves: +GBP 900m. Required reserves:
90m. Excess reserves: 810m. Bank B lends 810m to Firm Y. Firm Y deposits in Bank C.

**Step 4: Bank C.** Deposits: +810m. Lends 729m.

**Continuing the process:**

|  Round   | New deposits | New loans | New reserves held |
| :------: | :----------: | :-------: | :---------------: |
|    1     |    1,000     |    900    |        100        |
|    2     |     900      |    810    |        90         |
|    3     |     810      |    729    |        81         |
|    4     |     729      |    656    |        73         |
|    5     |     656      |    590    |        66         |
|   ...    |     ...      |    ...    |        ...        |
| $\infty$ |    10,000    |   9,000   |       1,000       |

**Total deposits created:** $1000 \times \frac{1}{0.1} = 10\,000$. **Total loans created:** $9000$.
**Money multiplier:** $10$.

**With a 20% reserve ratio:** Total deposits: $1000 / 0.2 = 5\,000$. Money multiplier: 5.

**With excess reserves (banks hold 5% excess):** Effective reserve ratio = 15%. Money multiplier
$= 1/0.15 = 6.67$.

**With cash leakages (5% of deposits withdrawn as cash):** Effective multiplier: more complex. Let
$c = 0.05$ (cash ratio), $rr = 0.1$ (reserve ratio). Money multiplier
$= \frac{1 + c}{rr + c} = \frac{1.05}{0.15} = 7$.

**Post-2008 reality:** The actual money multiplier in the UK fell from approximately 20 (pre-2008)
to approximately 3-5 (post-2008) because banks held large excess reserves. The BoE's QE created
enormous reserves, but bank lending did not expand proportionally because:

- Demand for loans was weak (recession).
- Banks tightened lending standards (risk aversion).
- Regulatory requirements (Basel III) increased capital requirements.

### 10.2 Interest Rate Risk and Bank Solvency

**Example.** A bank has the following balance sheet (GBP billions):

| Assets                            |         | Liabilities                        |         |
| --------------------------------- | :-----: | ---------------------------------- | :-----: |
| Fixed-rate mortgages (5yr, 3%)    |   200   | Customer deposits (instant access) |   250   |
| Variable-rate business loans (5%) |   100   | Wholesale funding (6-month)        |   80    |
| Government bonds (10yr, 2%)       |   80    | Equity capital                     |   50    |
| Reserves at BoE                   |   10    |                                    |         |
| **Total**                         | **390** | **Total**                          | **390** |

**Interest rate risk:** The bank has a maturity mismatch. Its assets are predominantly long-term
(fixed-rate mortgages, long-term bonds) while its liabilities are short-term (instant-access
deposits, 6-month wholesale funding).

**If the Bank Rate rises by 2 percentage points:**

- Asset returns: fixed-rate mortgages and bonds are UNCHANGED (2% and 3% respectively).
  Variable-rate loans reprice to 7%.
- New asset value: fixed-rate assets lose market value as yields rise. Bond value: GBP 80bn of
  10-year bonds at 2% yield. At 4% yield:
  $PV = \frac◆LB◆80 \times 0.02◆RB◆◆LB◆0.04◆RB◆ \times (1 - 1.04^{-10}) + 80 / 1.04^{10}$.
  Approximately, bond prices fall by 15-20% for a 2% yield rise on 10-year bonds. New bond value:
  approximately 64bn. Loss: 16bn. Mortgage value: similarly, fixed-rate mortgages lose approximately
  10% of value. Loss: 20bn.

- Liability costs: instant-access deposits may not reprice immediately, but wholesale funding rolls
  over at higher rates. Additional interest cost: $80 \times 0.02 = 1.6$Bn per year.

**Impact on equity:** Asset losses of approximately 36bn reduce equity from 50bn to 14bn. The
capital adequacy ratio falls from $50/390 = 12.8\%$ to $14/354 = 4.0\%$. This is below the Basel III
minimum requirement of 8% (including capital conservation buffer).

**The bank would need to:**

- Raise new capital (issue shares): diluting existing shareholders.
- Reduce lending (sell assets): contracting credit supply, potentially triggering a credit crunch.
- Increase deposit rates to retain funding: squeezing net interest margins.

**This is why central banks are cautious about raising interest rates too quickly:** rapid
tightening can destabilise the banking system by eroding the value of fixed-rate assets relative to
short-term liabilities. The SVB collapse in March 2023 was caused by exactly this mechanism
(interest rate rises destroyed the value of SVB's bond portfolio).

### 10.3 Financial Derivatives: Hedging Example

**Example.** A UK exporter expects to receive USD 10 million in 3 months. The current exchange rate
is $1.25/\pounds$. The exporter is concerned that sterling may appreciate, reducing the pound value
of the dollar receivables.

**Unhedged position:** If the exchange rate in 3 months is $1.30/\pounds$: the exporter receives
$10/1.30 = \pounds 7.69$M. If the exchange rate is $1.20/\pounds$: the exporter receives
$10/1.20 = \pounds 8.33$M. Uncertainty: the exporter does not know the pound value of the
receivables.

**Hedge using a forward contract:** The exporter enters a 3-month forward contract to sell USD 10m
at $1.25/\pounds$ (the forward rate). In 3 months: the exporter receives exactly
$10/1.25 = \pounds 8.0$M regardless of the spot rate. The exporter has eliminated exchange rate
risk.

**Cost of the hedge:** If the spot rate in 3 months is $1.20/\pounds$ (sterling depreciated):
without the hedge, the exporter would have received 8.33m. With the hedge, they receive 8.0m. The
hedge "cost" 0.33m.

If the spot rate is $1.30/\pounds$ (sterling appreciated): without the hedge, the exporter would
have received 7.69m. With the hedge, they receive 8.0m. The hedge "saved" 0.31m.

**Hedge using options:** The exporter buys a put option on USD (right to sell USD at a strike price
of $1.25/\pounds$). Premium: 0.5% of the notional amount = USD 50,000.

If spot > 1.25 (sterling appreciated): the exporter exercises the put option, selling at 1.25.
Receives: 8.0m - 0.05m (premium) = 7.95m.

If spot < 1.25 (sterling depreciated): the exporter lets the option expire and sells at the spot
rate. Receives: $10/\text{spot} - 0.05$M. For example, at 1.20: 8.33 - 0.05 = 8.28m.

**Comparison:**

| Spot rate | Unhedged | Forward hedge | Option hedge |
| :-------: | :------: | :-----------: | :----------: |
|   1.20    |   8.33   |     8.00      |     8.28     |
|   1.25    |   8.00   |     8.00      |     7.95     |
|   1.30    |   7.69   |     8.00      |     7.95     |

The forward contract provides certainty (always 8.00). The option provides downside protection with
upside participation, but at a cost (the premium). The choice depends on the exporter's risk
aversion and expectations.

### 10.4 Central Bank Balance Sheet: QE Unwind

**Example.** The Bank of England's balance sheet at peak QE (2022):

**Assets (GBP billions):**

- UK government bonds (gilts): 875
- Corporate bonds: 20
- Other assets: 30
- **Total assets: 925**

**Liabilities (GBP billions):**

- Reserve balances (commercial bank deposits at BoE): 870
- Banknotes in circulation: 90
- Other liabilities: -35
- **Total liabilities: 925**

**Quantitative tightening (QT):** The BoE decides to reduce its gilt holdings by GBP 100bn over 12
months by not reinvesting maturing gilts.

**Month 1:** GBP 8bn of gilts mature. The BoE does not reinvest. Assets: gilts fall to 867. Reserves
fall by 8bn to 862. The reduction in reserves removes liquidity from the banking system.

**Effect on interest rates:**

- Fewer reserves in the system push up the short-term interest rate (market rates rise as banks
  compete for scarcer reserves).
- The BoE sells fewer gilts, reducing demand for gilts, pushing gilt yields UP (bond prices fall).
- Higher gilt yields feed through to mortgage rates and corporate borrowing costs.

**Risk of QT:**

- If the BoE reduces reserves too quickly, short-term rates may spike above the Bank Rate,
  disrupting money markets.
- If gilt yields rise too fast, the government's borrowing costs increase (the interest on
  government debt rises).
- If the economy is weak, QT may be premature -- tightening financial conditions when the economy
  needs support.

**The BoE's approach (2022-2024):**

- Active QT (selling gilts): GBP 100bn over 12 months.
- Passive QT (not reinvesting maturities): additional reduction.
- Total balance sheet reduction: from GBP 925bn to approximately GBP 700bn.
- The pace was calibrated to avoid market disruption while reducing the balance sheet to a more
  normal level.

## 11. Extended Worked Examples

### 11.1 Mortgage Affordability: Interest Rate Impact

**Example.** A household takes out a GBP 300,000 repayment mortgage over 25 years.

**At 2% interest rate:** Monthly payment
$= 300\,000 \times \frac◆LB◆0.02/12 \times (1 + 0.02/12)^{300}◆RB◆◆LB◆(1 + 0.02/12)^{300} - 1◆RB◆ = 300\,000 \times \frac◆LB◆0.001667 \times 1.646◆RB◆◆LB◆0.646◆RB◆ = 300\,000 \times 0.004249 = \pounds 1\,275$.
Total payments over 25 years: $1275 \times 300 = 382\,500$. Total interest: 82,500.

**At 5% interest rate:** Monthly payment
$= 300\,000 \times \frac◆LB◆0.05/12 \times (1 + 0.05/12)^{300}◆RB◆◆LB◆(1 + 0.05/12)^{300} - 1◆RB◆ = 300\,000 \times 0.005846 = \pounds 1\,754$.
Total payments: $1754 \times 300 = 526\,200$. Total interest: 226,200.

**At 7% interest rate:** Monthly payment $= 300\,000 \times 0.007068 = \pounds 2\,120$. Total
payments: $2120 \times 300 = 636\,000$. Total interest: 336,000.

**Comparison:**

| Rate | Monthly payment | Total interest | % of income (at GBP 4k/month) |
| :--: | :-------------: | :------------: | :---------------------------: |
|  2%  |      1,275      |     82,500     |             31.9%             |
|  5%  |      1,754      |    226,200     |             43.9%             |
|  7%  |      2,120      |    336,000     |             53.0%             |

The rise from 2% to 7% increases monthly payments by GBP 845 (66% increase). A household earning GBP
4,000/month would see mortgage costs rise from 32% to 53% of income. Many households would be forced
to sell or would default.

**Aggregated to the UK level:** Approximately 9 million households have mortgages with an average
balance of GBP 150,000. A 5 percentage point rate rise increases total monthly mortgage payments by
approximately GBP 5 billion (9 million x GBP 560 increase). This reduces disposable income by
approximately GBP 60 billion per year (0.6% of GDP), contributing to a recession.

### 11.2 Bank Runs and Liquidity Crises

**Example.** Northern Rock (2007-2008) had the following balance sheet (GBP billions):

| Assets                |         | Liabilities                    |         |
| --------------------- | :-----: | ------------------------------ | :-----: |
| Mortgages (long-term) |   100   | Retail deposits (short-term)   |   25    |
| Securitised assets    |   30    | Wholesale funding (short-term) |   80    |
| Reserves              |    3    | Equity                         |    5    |
| Other                 |    2    |                                |         |
| **Total**             | **135** | **Total**                      | **110** |

Wait, assets (135) do not equal liabilities (110). Let me adjust:

| Assets             |         | Liabilities       |         |
| ------------------ | :-----: | ----------------- | :-----: |
| Mortgages          |   107   | Retail deposits   |   24    |
| Securitised assets |   23    | Wholesale funding |   75    |
| Reserves           |    3    | Other liabilities |   30    |
| Other              |    2    | Equity            |    6    |
| **Total**          | **135** | **Total**         | **135** |

**Vulnerability:** Northern Rock relied heavily on wholesale funding (55% of liabilities) rather
than retail deposits (18%). When the global credit crunch hit in August 2007:

1. Wholesale lenders refused to roll over Northern Rock's short-term borrowing.
2. Northern Rock could not replace 75bn of wholesale funding.
3. The bank approached the BoE for emergency lending (a lender of last resort facility).
4. News of the BoE loan triggered a bank run: depositors queued to withdraw funds.
5. Retail deposits (24bn) could be withdrawn quickly; mortgages (107bn) could not be liquidated
   quickly.

**Liquidity vs solvency:**

- Liquidity: Northern Rock had sufficient assets to cover liabilities (assets 135 > liabilities 129,
  excluding equity). The bank was LIQUID before the crisis (reserves of 3bn plus access to wholesale
  markets).
- After the credit freeze: Northern Rock lost access to wholesale funding. With only 3bn in reserves
  and 24bn in retail deposits (which were being withdrawn), the bank faced a LIQUIDITY crisis.
- Solvency: Northern Rock may or may not have been solvent. If mortgage values fell by more than 6bn
  (the equity buffer), the bank would be insolvent. During the crisis, UK house prices fell by
  approximately 20%, implying mortgage losses of approximately 21bn -- far exceeding the equity.
  Northern Rock was likely INSOLVENT as well as illiquid.

**Policy response:** The government nationalised Northern Rock in February 2008, the first
nationalisation of a UK bank since the 1970s. The total cost to the taxpayer was approximately GBP
1.4 billion (much less than feared, because the mortgage book was ultimately profitable).

**Lessons for regulation:**

1. Banks must maintain adequate liquidity buffers (Basel III introduced the Liquidity Coverage
   Ratio: HQLA / net cash outflows over 30 days > 100%).
2. Banks should not rely too heavily on short-term wholesale funding (Basel III introduced the Net
   Stable Funding Ratio: available stable funding / required stable funding > 100%).
3. The lender of last resort facility must be available but used discreetly to avoid triggering bank
   runs.
4. Deposit insurance (FSCS in the UK, covering GBP 85,000 per depositor) reduces the incentive for
   bank runs.

### 11.3 Monetary Policy and the Housing Market

**Example.** The Bank Rate channel to the housing market operates through several mechanisms.

**Direct channel (variable-rate mortgages):** Approximately 35% of UK mortgages are variable-rate or
tracker mortgages. These reprice immediately when the Bank Rate changes.

Bank Rate rises from 0.25% to 5.25% (a 5 percentage point increase): Average variable-rate mortgage
balance: GBP 150,000. Monthly payment increase: $150\,000 \times 0.05/12 = \pounds 625$. Annual cost
increase: GBP 7,500 per household. Total for 3.15 million variable-rate households:
$7\,500 \times 3.15\text{m} = \pounds 23.6\text{bn}$.

**Indirect channel (fixed-rate mortgages):** Approximately 65% of UK mortgages are fixed-rate ( 2 or
5 years). These do not reprice immediately but reprice when the fixed term ends.

If 1 million fixed-rate mortgages reprice each year, and the average increase is 3 percentage points
(because some were taken out at higher rates): Annual cost increase per household:
$150\,000 \times 0.03/12 = \pounds 375$. Total: $375 \times 1\text{m} = \pounds 375\text{m}$
initially, rising as more fixed-rate terms expire.

**Housing market activity channel:** Higher mortgage rates reduce affordability, reducing demand for
housing:

- Mortgage approvals fall: from 70,000/month to 45,000/month (a 36% decline).
- House price growth slows or reverses: UK house prices fell 5% from peak (August 2022) to trough
  (early 2024).
- Housing wealth effect: UK housing wealth is approximately GBP 8.7 trillion. A 5% fall represents
  GBP 435 billion of lost wealth.
- Consumption impact: MPC out of housing wealth is approximately 0.02. Consumption falls by
  $0.02 \times 435\text{bn} = \pounds 8.7\text{bn}$.

**Construction channel:** Higher rates increase the cost of development finance. House builders
reduce construction:

- New housing starts fall by 15-20%.
- Construction employment falls by approximately 50,000 jobs.
- GDP impact: construction is approximately 6% of GDP. A 20% decline in residential construction
  reduces GDP by approximately 1.2%.

**Total estimated impact of a 5 percentage point rate rise on the housing market:**

- Direct mortgage cost: GBP 23.6bn per year.
- Wealth effect on consumption: GBP 8.7bn per year.
- Construction decline: approximately GBP 12bn per year.
- Total: approximately GBP 44bn per year (approximately 1.8% of GDP), phased in over 2-3 years.

This illustrates why the housing market is one of the most important transmission channels of
monetary policy in the UK, where 65% of households own their home and housing wealth represents the
largest component of household wealth.

## Common Pitfalls

1. Writing pseudocode that is too language-specific rather than using standard algorithmic
   constructs.

2. Confusing an algorithm with a program — an algorithm is a step-by-step procedure, not its
   implementation in code.

3. Forgetting edge cases in algorithm design (e.g., empty input, single element, already sorted
   data).

4. Confusing authentication (who you are) with authorisation (what you can do) in security contexts.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

:::
