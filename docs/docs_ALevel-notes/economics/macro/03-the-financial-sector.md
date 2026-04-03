---
title: The Financial Sector
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
borrowers face. Savers want safety, liquidity, and a return. Borrowers want large sums, long
maturities, and lower interest rates. No individual transaction between a saver and a borrower can
satisfy both parties simultaneously.

**Real-world example:** Suppose a household wishes to save £200 per month from their salary. They
cannot lend directly to a property developer who needs GBP 50 million over 25 years. A commercial
bank aggregates thousands of small deposits, transforms the maturity (short deposits into a
long-term mortgage), and assumes the credit risk. The saver gets instant-access deposits; the
developer gets a 25-year loan. Both parties are better off than without intermediation.

**Types of intermediation:**

| Type                           | Description                                                           | Example                                              |
| ------------------------------ | --------------------------------------------------------------------- | ---------------------------------------------------- |
| **Maturity intermediation**    | Matching short-term liabilities with long-term assets                 | Current accounts funding 25-year mortgages           |
| **Size intermediation**        | Aggregating small deposits into large loans                           | Retail deposits funding corporate loans              |
| **Risk intermediation**        | Diversifying and managing credit risk                                 | Banks spreading default risk across a loan portfolio |
| **Information intermediation** | Assessing borrower creditworthiness (reducing asymmetric information) | Banks performing credit checks before lending        |

The problem of **asymmetric information** is central to financial intermediation. Borrowers know
more about their own risk than lenders do. This leads to **adverse selection** (risky borrowers are
most eager to borrow) and **moral hazard** (borrowers may take excessive risks after receiving a
loan). Banks mitigate both through screening, monitoring, and collateral requirements.

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
the 2% CPI inflation target. CIE (9708) focuses more on the _functions_ of central banks in general
rather than a specific institution. OCR expects you to distinguish between the central bank's roles
in monetary stability and financial stability, and to evaluate whether these roles can conflict. :::

**Real-world example — the Bank of England during COVID-19 (2020):** In March 2020, the BoE cut Bank
Rate from 0.75% to 0.1% (an emergency 0.65 percentage point cut) and launched a GBP 200 billion QE
programme. Simultaneously, it introduced the COVID Corporate Financing Facility (CCFF) to buy
short-term corporate debt directly from firms. This illustrates multiple central bank functions
operating at once: monetary policy (rate cut), financial stability (supporting corporate bond
markets to prevent fire sales), and lender of last resort (supporting commercial paper markets).

**Evaluation — independence vs accountability:** Central bank independence (adopted by the BoE
in 1997) is argued to improve policy credibility and anchor inflation expectations. However, critics
argue that unelected officials setting interest rates is democratically illegitimate, and that QE
decisions (which redistribute wealth and affect government borrowing costs) are fiscal policy by
another name. During the 2022 cost-of-living crisis, the BoE faced criticism for being slow to raise
rates despite inflation exceeding 10%, raising questions about whether independence truly delivers
better outcomes.

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
definitions in your specification. :::

### 2.2 Money Creation: The Money Multiplier

**Fractional reserve banking**: banks are required (or choose) to hold only a fraction of deposits
as reserves, lending out the rest.

We define the **reserve ratio** as $rr = \frac{R}{D}$ where $R$ = reserves and $D$ = deposits.

**Derivation of the money multiplier.** Suppose the central bank injects £1,000 of new reserves into
the banking system:

| Round    | Deposits                      | Reserves ($rr \times D$)    | Loans                     |
| -------- | ----------------------------- | --------------------------- | ------------------------- |
| 1        | £1,000                        | $rr \times 1{,}000$         | $(1-rr) \times 1{,}000$   |
| 2        | $(1-rr) \times 1{,}000$       | $rr(1-rr) \times 1{,}000$   | $(1-rr)^2 \times 1{,}000$ |
| 3        | $(1-rr)^2 \times 1{,}000$     | $rr(1-rr)^2 \times 1{,}000$ | $(1-rr)^3 \times 1{,}000$ |
| $\vdots$ | $\vdots$                      | $\vdots$                    | $\vdots$                  |
| $n$      | $(1-rr)^{n-1} \times 1{,}000$ |                             |                           |

Total deposits created:

$$
\begin{aligned}
\Delta D &= 1{,}000\left[1 + (1-rr) + (1-rr)^2 + \cdots\right] \\
&= 1{,}000 \times \frac{1}{1 - (1-rr)} \\
&= \frac{1{,}000}{rr} = 1{,}000 \times m
\end{aligned}
$$

where $m = \frac{1}{rr}$ is the **simple money multiplier**.

If $rr = 0.1$ (10% reserve ratio): $m = 10$. A £1,000 increase in reserves creates £10,000 of new
deposits.

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
central bank creates reserves, banks lend, money supply expands. The endogenous money model reverses
this: banks lend first (creating deposits), then obtain reserves as needed from the interbank market
or central bank. In the UK, Canada, and many other modern banking systems, there are no binding
reserve requirements, lending is capital-constrained rather than reserve-constrained, and the
central bank sets the price of reserves (the interest rate) rather than the quantity. This supports
the endogenous money view. However, for exam purposes, the money multiplier remains the standard
model on most A Level specifications.

:::info Board-Specific Note AQA and Edexcel teach the traditional money multiplier model. CIE (9708)
has recently moved towards acknowledging endogenous money but still primarily examines the
multiplier approach. OCR tends to focus on the practical implications (why QE did not cause
hyperinflation) rather than the theoretical debate. When answering, use the multiplier model but
acknowledge its limitations for evaluation marks. :::

**Credit creation process (step-by-step balance sheets):**

Bank A receives £1,000 deposit. With $rr = 0.1$:

- Reserves: +£1,000 | Deposits: +£1,000
- Lends £900 to Customer 1
- Reserves: £100 | Loans: £900 | Deposits: £1,000

Customer 1 deposits £900 in Bank B:

- Bank B lends £810, keeps £90 reserves
- Reserves: £90 | Loans: £810 | Deposits: £900

And so on. Total new money = £10,000 (deposits) + £9,000 (loans) — the deposit is money, the loan
creates the deposit.

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

$$M^s = M^d \implies \bar{M} = (k+j)Y - hi \implies i = \frac{(k+j)Y - \bar{M}}{h}$$

### 3.3 Term Structure of Interest Rates

The **yield curve** plots interest rates against the maturity of bonds.

- **Normal (upward-sloping)**: long-term rates > short-term rates (compensation for risk and
  inflation uncertainty)
- **Inverted (downward-sloping)**: short-term rates > long-term rates (signals expectation of future
  rate cuts, often precedes recession)
- **Flat**: rates are similar across maturities

**Real-world example — the inverted yield curve:** In August 2019, the US 2-year Treasury yield
exceeded the 10-year yield (an inverted yield curve), which has historically preceded every US
recession since WWII. The inversion reflected market expectations that the Federal Reserve would
need to cut rates to combat an impending downturn. The 2020 COVID recession followed, though the
causality is debated (the curve may have anticipated COVID-related disruptions). In the UK, the
yield curve also inverted briefly in 2019, signalling expectations of BoE rate cuts.

:::info Board-Specific Note AQA often asks students to explain the yield curve and its significance
as a predictor. Edexcel may link the yield curve to business investment decisions (firms use
long-term rates to evaluate projects). OCR emphasises the expectations theory and liquidity
preference theory of the term structure. CIE generally does not examine the yield curve in depth but
may ask about the relationship between bond prices and interest rates. :::

## 4. Monetary Policy

### 4.1 The Transmission Mechanism

Monetary policy affects the economy through several channels:

$$
\begin{aligned}
\text{Central bank } &\uparrow \text{ interest rate} \\
&\downarrow \\
\text{Commercial banks } &\uparrow \text{ lending rates} \\
&\downarrow \\
\text{Borrowing becomes more expensive } &\Rightarrow C \downarrow, I \downarrow \\
&\downarrow \\
\text{Saving becomes more attractive } &\Rightarrow C \downarrow \\
&\downarrow \\
\text{Exchange rate appreciates } &\Rightarrow X \downarrow, M \uparrow \\
&\downarrow \\
AD &\downarrow \Rightarrow Y \downarrow, P \downarrow
\end{aligned}
$$

#### Detailed Transmission Channels

The diagram above summarises the main channels, but exam answers should demonstrate deeper
understanding of each pathway:

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
diagrams. Edexcel requires a clear chain of reasoning from the interest rate change to the final
impact on AD, inflation, and employment. OCR is particularly interested in the _limitations_ of
monetary policy transmission — time lags, interest elasticity, and the liquidity trap. CIE expects a
more formal diagrammatic analysis using the IS-LM framework (though not all centres teach IS-LM, so
check with your teacher). :::

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
between 2009 and 2022 boosted GDP by around 1.5-2% and raised inflation by 0.75-1.5 percentage
points. However, the distributional effects were significant: the Bank of England estimated in 2012
that its QE programme had increased the wealth of the top 5% of households by up to 40%, while the
bottom 50% saw minimal benefit. This is because the top 5% hold the majority of financial assets
whose prices were inflated by QE.

**Real-world example — QE and the COVID-19 recovery:** Between March 2020 and late 2021, the BoE
purchased an additional GBP 450 billion of government bonds. Despite this massive expansion of the
money supply, CPI inflation remained below the 2% target until mid-2021, when supply chain
disruptions and energy price shocks drove inflation higher. This illustrates that QE alone does not
cause high inflation — the broader macroeconomic context matters.

:::info Board-Specific Note AQA and Edexcel both require evaluation of QE. CIE (9708) Paper 4
frequently includes questions on unconventional monetary policy. Key evaluation points: QE is less
effective when banks are unwilling to lend (liquidity trap), the impact on the real economy is
uncertain and hard to measure, and the exit strategy (quantitative tightening) is politically and
economically risky. OCR may also ask about the interaction between QE and fiscal policy (monetary
financing). :::

## 5. Financial Markets

### 5.1 Bonds

A **bond** is a debt instrument: the issuer promises to pay the holder a fixed coupon (interest)
periodically and repay the face value at maturity.

**Key relationship: bond prices and yields are inversely related.**

_Proof._ Let $P$ = bond price, $C$ = annual coupon, $F$ = face value, $n$ = years to maturity, $r$ =
yield (required return).

$$P = \sum_{t=1}^{n} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^n}$$

$\frac{dP}{dr} < 0$ (each term is decreasing in $r$). If market interest rates rise, existing bonds
with lower coupons become less attractive, so their price falls to offer a competitive yield.
$\blacksquare$

**Yield to maturity**: the discount rate that equates the present value of future cash flows to the
current price.

### 5.2 Shares (Equities)

A **share** represents ownership in a company. Shareholders receive dividends and may benefit from
capital gains.

**Share price valuation** (simplified dividend discount model):

$$P_0 = \frac{D_1}{r - g}$$

where $D_1$ = expected dividend next year, $r$ = required return, $g$ = expected growth rate of
dividends.

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
coordinated through Reddit to buy shares in GameStop, driving the price from USD 18 to USD 483 in
weeks. This forced hedge funds that had shorted the stock to buy shares to cover their positions,
amplifying the price rise. The episode illustrates both the power of market sentiment (prices can
deviate far from fundamentals) and the role of financial market regulation (trading was temporarily
restricted by brokerages, raising questions about market fairness).

## 6. Critical Evaluation

### The 2008 Financial Crisis

The crisis originated in the US subprime mortgage market and spread globally through interconnected
financial markets. Key lessons:

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
reforms worked.

On the other hand, risks have shifted rather than disappeared. The growth of **shadow banking**
(non-bank financial intermediaries such as money market funds, hedge funds, and private equity) now
accounts for nearly 50% of global financial intermediation. These entities are less regulated than
banks, less transparent, and can be sources of systemic risk (as the 2022 UK Gilt Crisis, triggered
by liability-driven investments in pension funds, demonstrated). The Bank of England's intervention
in the gilt market during the mini-budget crisis showed that systemic risk now originates outside
the traditional banking sector.

Furthermore, moral hazard persists. The implicit guarantee that governments will bail out large
financial institutions ("too big to fail") has not been fully resolved. The failure of Credit Suisse
in 2023 was resolved through a government-brokered takeover by UBS, reinforcing the perception that
large banks will always be rescued.

:::tip Exam Technique When analysing monetary policy, always distinguish between the _transmission
mechanism_ (how the policy affects the economy) and the _effectiveness_ (how well it works in
practice). Consider time lags, the interest elasticity of investment, and the shape of the liquidity
preference curve. :::

:::tip Exam Technique For evaluation questions (typically worth 12-25 marks), structure your answer
as: (1) identify the issue, (2) explain the mechanism with a diagram, (3) evaluate using
**however/on the other hand/significantly** to introduce counterarguments, (4) conclude with a
justified judgement. Always consider short-run vs long-run effects and the context (e.g., the state
of the economy at the time). :::

## 7. Problem Set

**Problem 1.** If the reserve ratio is 8% and the central bank injects £500 million of new reserves
into the banking system, what is the maximum increase in the money supply? What assumptions does
this calculation rely on?

<details>
<summary>Hint</summary>
<p>
$m = 1/0.08 = 12.5$. Maximum increase $= 12.5 \times 500 = £6{,}250$m. Assumptions: no cash leakages, no excess reserves held, all loans are redeposited in the banking system, demand for loans is infinite at the prevailing interest rate.
</p>
</details>

**Problem 2.** The nominal interest rate on a savings account is 3% and inflation is 5%. Calculate
the real interest rate. Should the saver be happy or unhappy? What does this imply for the central
bank's policy stance?

<details>
<summary>Hint</summary>
<p>
Real rate $\approx 3\% - 5\% = -2\%$. The saver is losing purchasing power (negative real return). This implies the central bank has an expansionary policy stance (low real rates to stimulate the economy). If sustained, negative real rates discourage saving and encourage borrowing and spending.
</p>
</details>

**Problem 3.** A 5-year government bond with face value £100 and annual coupon of £4 is currently
priced at £95. Calculate the current yield. Explain why the yield is higher than the coupon rate.

<details>
<summary>Hint</summary>
<p>
Current yield $= 4/95 \times 100 = 4.21\%$. The yield exceeds the coupon rate (4%) because the bond is trading at a discount (£95 < £100). The investor receives the coupon plus a capital gain of £5 at maturity, so the total return exceeds the coupon.
</p>
</details>

**Problem 4.** Using the liquidity preference framework, explain what happens to the interest rate
when (a) the central bank increases the money supply, and (b) national income increases. Use a
diagram in your explanation.

<details>
<summary>Hint</summary>
<p>
(a) Money supply curve shifts right $\Rightarrow$ interest rate falls (excess supply of money at the original rate, people buy bonds, bond prices rise, yields fall). (b) Income increases $\Rightarrow$ transactions demand for money rises $\Rightarrow$ money demand curve shifts right $\Rightarrow$ interest rate rises (excess demand for money at the original rate, people sell bonds, bond prices fall, yields rise).
</p>
</details>

**Problem 5.** Explain the process of quantitative easing. Why might QE be less effective in a
liquidity trap? Evaluate the risks of QE for (a) asset price inflation and (b) wealth inequality.

<details>
<summary>Hint</summary>
<p>
QE: central bank buys assets (mainly government bonds) $\Rightarrow$ bond prices rise, yields fall $\Rightarrow$ lower borrowing costs, portfolio rebalancing. Liquidity trap: at the zero lower bound, interest rates can't fall further, and banks may hoard reserves rather than lend (excess reserves). Risks: (a) QE increases demand for assets (bonds, equities, property), pushing up prices — potentially creating bubbles disconnected from fundamentals. (b) Asset price inflation benefits those who own assets (wealthy) more than those who don't (poor), exacerbating wealth inequality.
</p>
</details>

**Problem 6.** A commercial bank has £500m in deposits, £50m in reserves, and £450m in loans. The
reserve ratio is 10%. (a) Is the bank meeting its reserve requirement? (b) What is the maximum new
loan the bank can make? (c) If the reserve ratio is increased to 15%, what happens?

<details>
<summary>Hint</summary>
<p>
(a) Required reserves $= 10\% \times 500 = £50$m. Actual reserves = £50m. Yes, exactly meeting. (b) Maximum new loan = £0 (no excess reserves). (c) Required reserves $= 15\% \times 500 = £75$m. The bank has only £50m, so it must reduce lending by £25m to meet the new requirement (or borrow reserves).
</p>
</details>

**Problem 7.** "Banks create money out of thin air." Evaluate this statement with reference to the
credit creation process and the role of central bank reserves.

<details>
<summary>Hint</summary>
<p>
Technically true: when a bank makes a loan, it simultaneously creates a deposit (money). The bank doesn't need reserves first — it creates the loan-deposit pair. However, constraints exist: (1) The bank must have enough reserves *later* to settle interbank payments and meet reserve requirements. (2) Capital requirements limit lending relative to equity. (3) The bank must find creditworthy borrowers willing to borrow. (4) Regulatory oversight limits excessive credit creation. The statement is misleading because it suggests unlimited money creation, which is false.
</p>
</details>

**Problem 8.** Explain how an increase in the Bank of England's base rate would affect (a) mortgage
holders, (b) savers, (c) exporters, (d) the government's debt servicing costs, and (e) the exchange
rate.

<details>
<summary>Hint</summary>
<p>
(a) Variable-rate mortgage payments increase $\Rightarrow$ disposable income falls $\Rightarrow$ consumption falls. (b) Savers earn higher returns $\Rightarrow$ saving becomes more attractive $\Rightarrow$ consumption falls. (c) Higher interest rates attract foreign capital $\Rightarrow$ sterling appreciates $\Rightarrow$ UK exports become more expensive $\Rightarrow$ exports fall. (d) Government pays more interest on its debt (much of which is linked to interest rates) $\Rightarrow$ fiscal deficit widens. (e) Exchange rate appreciates (hot money flows in, attracted by higher returns).
</p>
</details>

**Problem 9.** Compare and contrast the use of interest rates and quantitative easing as tools of
monetary policy. In what circumstances would each be more appropriate?

<details>
<summary>Hint</summary>
<p>
Interest rates: primary tool, affects short-term borrowing costs, well-understood transmission mechanism. Appropriate for normal economic conditions. QE: used when interest rates are at or near zero (zero lower bound), affects long-term rates and asset prices. Appropriate for severe recessions when conventional policy is exhausted. QE is less precise, harder to reverse, and has distributional consequences. Interest rate changes are quick and reversible but may be insufficient in a deep crisis.
</p>
</details>

**Problem 10.** "The 2008 financial crisis was primarily caused by excessive risk-taking by banks."
Evaluate this statement, considering the roles of (a) banks, (b) regulators, (c) central banks, and
(d) consumers.

<details>
<summary>Hint</summary>
<p>
(a) Banks: excessive leverage, inadequate risk management, complex securitisation, mis-selling of subprime mortgages. (b) Regulators: light-touch regulation, failure to monitor systemic risk, regulatory arbitrage (shadow banking). (c) Central banks: low interest rates encouraged excessive borrowing, failure to identify asset bubbles. (d) Consumers: borrowed beyond their means (subprime mortgages), irrational exuberance about house prices. The crisis was a *systemic* failure — no single cause, but rather a combination of misaligned incentives, regulatory gaps, and collective irrationality.
</p>
</details>

**Problem 11.** Explain the inverse relationship between bond prices and interest rates. If a bond
with face value £100 and coupon 5% has 3 years to maturity and the market interest rate rises from
5% to 6%, calculate the new bond price.

<details>
<summary>Hint</summary>
<p>
At 5%: $P = 5/1.05 + 5/1.05^2 + 105/1.05^3 = 4.76 + 4.54 + 90.70 = £100$ (par). At 6%: $P = 5/1.06 + 5/1.06^2 + 105/1.06^3 = 4.72 + 4.45 + 88.16 = £97.33$. The price falls from £100 to £97.33 when the yield rises from 5% to 6%. This confirms the inverse relationship.
</p>
</details>

**Problem 12.** Discuss the argument that "fractional reserve banking is inherently unstable and
should be replaced by full reserve banking." What are the counterarguments?

<details>
<summary>Hint</summary>
<p>
For: fractional reserve banking creates credit booms and busts (Minsky cycle), bank runs are possible (Diamond-Dybvig model), socialises losses (bailouts) while privatising gains. Full reserve banking (Chicago Plan) would eliminate bank runs and credit cycles. Against: fractional reserve banking performs useful maturity transformation (converting short-term deposits into long-term loans), full reserve banking would dramatically reduce lending and economic growth, banks would need to charge for deposits (end of free banking), credit creation could move to shadow banking (unregulated).
</p>
</details>

**Problem 13.** In 2022, UK CPI inflation reached 11.1% while the Bank of England's Bank Rate was
raised from 0.25% to 3.0%. (a) Calculate the real interest rate at the start and end of this
tightening cycle, assuming inflation of 5.4% at the start. (b) Explain why the BoE was criticised
for being "behind the curve." (c) Evaluate the argument that the BoE should have raised rates
earlier.

<details>
<summary>Hint</summary>
<p>
(a) Start: real rate $\approx 0.25\% - 5.4\% = -5.15\%$. End: real rate $\approx 3.0\% - 11.1\% = -8.1\%$. Real rates were deeply negative throughout, even after significant tightening. (b) The BoE was criticised because inflation had been rising since late 2021, but it kept rates at 0.25% until December 2021 and raised them only gradually. By the time rates reached meaningful levels, inflation had already become entrenched. (c) For raising earlier: pre-emptive tightening could have anchored expectations, prevented a wage-price spiral, and reduced the peak inflation rate. Against raising earlier: the inflation was primarily driven by external supply shocks (energy, post-COVID supply chains) which monetary policy cannot easily address. Raising rates earlier risked unnecessarily choking the recovery from COVID-19 when the inflation spike might have proved transitory. The judgement depends on whether the inflation was viewed as demand-pull or cost-push in nature.
</p>
</details>

**Problem 14.** Explain how a central bank could use each of the following to implement
contractionary monetary policy: (a) open market operations, (b) the reserve requirement, (c) forward
guidance. For each, explain one reason why it might be less effective than simply raising the policy
interest rate.

<details>
<summary>Hint</summary>
<p>
(a) OMO: the central bank sells government bonds, removing money from circulation and reducing bank reserves. Less effective because: in a well-developed financial system, banks can obtain liquidity from other sources (interbank market, central bank standing facilities), so OMOs mainly signal policy intent rather than directly constraining lending. (b) Reserve requirement: increasing the required reserve ratio forces banks to hold more reserves, reducing their lending capacity. Less effective because: in the UK there are no mandatory reserve requirements, and changing them is a blunt instrument that doesn't discriminate between risky and safe lending. Banks may also find ways around the requirement (e.g., shifting activity to shadow banking). (c) Forward guidance: signalling that rates will stay higher for longer to manage inflation expectations. Less effective because: credibility depends on the central bank's track record. If the public doubts the central bank will follow through (e.g., due to political pressure to cut rates), forward guidance loses its power.
</p>
</details>

**Problem 15.** "The growth of shadow banking poses a greater threat to financial stability than
traditional banking." Evaluate this statement with reference to the 2008 financial crisis, the 2022
UK Gilt Crisis, and the failure of Silicon Valley Bank in 2023.

<details>
<summary>Hint</summary>
<p>
For the statement: (1) Shadow banking entities (hedge funds, money market funds, private credit) are less regulated, less transparent, and not subject to Basel III capital requirements. (2) The 2008 crisis was amplified by shadow banking — mortgage-backed securities and SIVs (structured investment vehicles) operated outside the regulated banking system. (3) The 2022 UK Gilt Crisis was triggered by liability-driven investments (LDIs) held by pension funds — non-bank entities using leverage that was not captured by banking regulation. (4) SVB's failure was caused by losses on its bond portfolio, but the bank run was amplified by social media and venture capital networks (a form of shadow banking contagion). Against: (1) Traditional banks still pose systemic risk — Credit Suisse's 2023 failure showed that even regulated banks can fail. (2) Shadow banking provides valuable services (credit to SMEs, alternative investments) that traditional banks cannot or will not provide. (3) The solution is better regulation of shadow banking, not eliminating it. Conclusion: shadow banking is a significant and growing risk, but the threat comes from the *interaction* between regulated and unregulated parts of the financial system, not from shadow banking alone.
</p>
</details>

**Problem 16.** A country's money supply is currently GBP 2 trillion. The central bank wants to
increase it by GBP 200 billion through open market operations. If the current reserve ratio is 5%
but banks choose to hold 3% excess reserves and the public holds 10% of any new deposits as cash,
calculate (a) the effective money multiplier and (b) the value of bonds the central bank must
purchase to achieve its target.

<details>
<summary>Hint</summary>
<p>
The effective multiplier accounts for excess reserves and cash leakages. Let $rr = 0.05$ (required), $re = 0.03$ (excess), and $c = 0.10$ (cash ratio). Total reserves held per unit of deposits $= rr + re = 0.08$. Each round, only $(1 - c)$ of loans are redeposited. The money multiplier becomes: $m = \frac{1 + c}{rr + re + c} = \frac{1.10}{0.08 + 0.10} = \frac{1.10}{0.18} \approx 6.11$. (a) The effective multiplier is approximately 6.11 (compared to the simple multiplier of $1/0.05 = 20$). (b) Required reserve injection $= \text{target increase} / m = 200 / 6.11 \approx$ GBP 32.7 billion. The central bank must purchase approximately GBP 32.7 billion of bonds. This is much larger than under the simple model (which would suggest only GBP 10 billion needed), illustrating the importance of accounting for cash leakages and excess reserves.
</p>
</details>
