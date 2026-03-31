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

1. **Financial intermediation**: channel funds from savers (depositors) to borrowers (loans). This converts small, liquid deposits into large, illiquid loans — overcoming the mismatch between savers' and borrowers' needs.

2. **Maturity transformation**: borrow short-term (demand deposits) and lend long-term (mortgages, business loans). This creates liquidity for depositors while providing long-term finance for borrowers.

3. **Risk transformation**: pool many deposits to diversify risk. Individual depositors face lower risk than if they lent directly to a single borrower.

4. **Payment system**: facilitate transactions through cheque clearing, electronic transfers, and card payments.

### 1.2 Central Banks

The **central bank** (Bank of England, ECB, Federal Reserve) performs:

1. **Lender of last resort**: provides emergency liquidity to commercial banks facing temporary liquidity shortages (Bagehot's rule: lend freely at a penalty rate against good collateral)

2. **Banker to the government**: manages government accounts, conducts debt issuance

3. **Monetary policy**: sets interest rates, conducts open market operations to control the money supply and achieve the inflation target

4. **Financial stability**: regulates and supervises banks, manages systemic risk (macroprudential regulation)

5. **Issuer of currency**: has the monopoly on note issuance

## 2. Money Supply

### 2.1 Definitions of Money

Money serves three functions: medium of exchange, store of value, unit of account.

| Measure                | Components (UK)                                                                            |
| ---------------------- | ------------------------------------------------------------------------------------------ |
| **M0 (monetary base)** | Cash (notes and coins) in circulation + banks' operational deposits at the Bank of England |
| **M2**                 | Cash + retail bank deposits (current accounts, instant-access savings)                     |
| **M4 (broad money)**   | Cash + all retail and wholesale bank deposits + certificates of deposit                    |

:::info Board-Specific Note
The exact definitions vary by board and country. CIE (9708) uses M0, M1, M2, M4. Edexcel emphasises M0 and M4. AQA focuses on broad vs narrow money. Always use the definitions in your specification.
:::

### 2.2 Money Creation: The Money Multiplier

**Fractional reserve banking**: banks are required (or choose) to hold only a fraction of deposits as reserves, lending out the rest.

We define the **reserve ratio** as $rr = \frac{R}{D}$ where $R$ = reserves and $D$ = deposits.

**Derivation of the money multiplier.** Suppose the central bank injects £1,000 of new reserves into the banking system:

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

If $rr = 0.1$ (10% reserve ratio): $m = 10$. A £1,000 increase in reserves creates £10,000 of new deposits.

### 2.3 Limitations of the Simple Money Multiplier

In practice, the actual money multiplier differs from $1/rr$ because:

1. **Banks may hold excess reserves** (above the required minimum), reducing the multiplier
2. **Not all loans are redeposited** (some is held as cash, "cash leakages"), reducing the multiplier
3. **Capital requirements** (Basel III) constrain lending based on risk-weighted assets, not just reserves
4. **Liquidity preference**: banks may not lend even when they have reserves if demand for loans is weak (as after 2008)
5. **The modern view**: banks create deposits by making loans first, then seek reserves later (endogenous money theory)

**Credit creation process (step-by-step balance sheets):**

Bank A receives £1,000 deposit. With $rr = 0.1$:

- Reserves: +£1,000 | Deposits: +£1,000
- Lends £900 to Customer 1
- Reserves: £100 | Loans: £900 | Deposits: £1,000

Customer 1 deposits £900 in Bank B:

- Bank B lends £810, keeps £90 reserves
- Reserves: £90 | Loans: £810 | Deposits: £900

And so on. Total new money = £10,000 (deposits) + £9,000 (loans) — the deposit is money, the loan creates the deposit.

## 3. Interest Rates

### 3.1 Nominal vs Real Interest Rates

**Nominal interest rate ($i$)**: the rate quoted on financial products (not adjusted for inflation).

**Real interest rate ($r$)**: the nominal rate adjusted for inflation.

**Fisher equation:**

$$(1 + i) = (1 + r)(1 + \pi)$$

Approximately:

$$r \approx i - \pi$$

When $r > 0$: savers earn a positive real return. When $r < 0$: savers lose purchasing power (negative real interest rates).

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

- **Normal (upward-sloping)**: long-term rates > short-term rates (compensation for risk and inflation uncertainty)
- **Inverted (downward-sloping)**: short-term rates > long-term rates (signals expectation of future rate cuts, often precedes recession)
- **Flat**: rates are similar across maturities

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

### 4.2 Tools of Monetary Policy

1. **Interest rate (Bank Rate)**: the rate at which the central bank lends to commercial banks. The primary tool of UK monetary policy.

2. **Open market operations (OMO)**: the central bank buys/sells government bonds to increase/decrease the money supply.
   - Buying bonds $\Rightarrow$ pays money to sellers $\Rightarrow$ money supply $\uparrow$
   - Selling bonds $\Rightarrow$ takes money from buyers $\Rightarrow$ money supply $\downarrow$

3. **Quantitative easing (QE)**: large-scale asset purchases (government bonds, corporate bonds) by the central bank to increase the money supply and lower long-term interest rates when the policy rate is at or near zero.

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
6. Portfolio rebalancing: investors shift from bonds to equities and corporate bonds $\Rightarrow$ lower borrowing costs for firms

**Limitations:**

- May create asset price bubbles (inflation in asset markets rather than goods markets)
- Benefits asset owners disproportionately (exacerbates wealth inequality)
- Transmission to the real economy may be weak if banks don't lend (liquidity trap)
- Unwinding QE (quantitative tightening) may be disruptive

## 5. Financial Markets

### 5.1 Bonds

A **bond** is a debt instrument: the issuer promises to pay the holder a fixed coupon (interest) periodically and repay the face value at maturity.

**Key relationship: bond prices and yields are inversely related.**

_Proof._ Let $P$ = bond price, $C$ = annual coupon, $F$ = face value, $n$ = years to maturity, $r$ = yield (required return).

$$P = \sum_{t=1}^{n} \frac{C}{(1+r)^t} + \frac{F}{(1+r)^n}$$

$\frac{dP}{dr} < 0$ (each term is decreasing in $r$). If market interest rates rise, existing bonds with lower coupons become less attractive, so their price falls to offer a competitive yield. $\blacksquare$

**Yield to maturity**: the discount rate that equates the present value of future cash flows to the current price.

### 5.2 Shares (Equities)

A **share** represents ownership in a company. Shareholders receive dividends and may benefit from capital gains.

**Share price valuation** (simplified dividend discount model):

$$P_0 = \frac{D_1}{r - g}$$

where $D_1$ = expected dividend next year, $r$ = required return, $g$ = expected growth rate of dividends.

## 6. Critical Evaluation

### The 2008 Financial Crisis

The crisis originated in the US subprime mortgage market and spread globally through interconnected financial markets. Key lessons:

1. **Systemic risk**: individual bank risk management is insufficient — the system as a whole can be fragile (Minsky's financial instability hypothesis)
2. **Too big to fail**: large banks' failure would cause systemic collapse $\Rightarrow$ moral hazard (banks take excessive risks expecting bailouts)
3. **Regulatory failure**: light-touch regulation allowed excessive leverage, complex derivatives, and inadequate capital buffers
4. **Liquidity vs solvency**: banks faced both liquidity crises (couldn't meet short-term obligations) and solvency crises (assets < liabilities)

**Post-crisis reforms:**

- Basel III: higher capital requirements, liquidity coverage ratios, leverage ratios
- Vickers Report (UK): ring-fencing retail banking from investment banking
- Stress testing: regular assessment of banks' resilience to adverse scenarios
- Resolution planning: "living wills" to allow orderly bank failure without taxpayer bailouts

:::tip Exam Technique
When analysing monetary policy, always distinguish between the _transmission mechanism_ (how the policy affects the economy) and the _effectiveness_ (how well it works in practice). Consider time lags, the interest elasticity of investment, and the shape of the liquidity preference curve.
:::

## 7. Problem Set

**Problem 1.** If the reserve ratio is 8% and the central bank injects £500 million of new reserves into the banking system, what is the maximum increase in the money supply? What assumptions does this calculation rely on?

<details>
<summary>Hint</summary>
<p>
$m = 1/0.08 = 12.5$. Maximum increase $= 12.5 \times 500 = £6{,}250$m. Assumptions: no cash leakages, no excess reserves held, all loans are redeposited in the banking system, demand for loans is infinite at the prevailing interest rate.
</p>
</details>

**Problem 2.** The nominal interest rate on a savings account is 3% and inflation is 5%. Calculate the real interest rate. Should the saver be happy or unhappy? What does this imply for the central bank's policy stance?

<details>
<summary>Hint</summary>
<p>
Real rate $\approx 3\% - 5\% = -2\%$. The saver is losing purchasing power (negative real return). This implies the central bank has an expansionary policy stance (low real rates to stimulate the economy). If sustained, negative real rates discourage saving and encourage borrowing and spending.
</p>
</details>

**Problem 3.** A 5-year government bond with face value £100 and annual coupon of £4 is currently priced at £95. Calculate the current yield. Explain why the yield is higher than the coupon rate.

<details>
<summary>Hint</summary>
<p>
Current yield $= 4/95 \times 100 = 4.21\%$. The yield exceeds the coupon rate (4%) because the bond is trading at a discount (£95 < £100). The investor receives the coupon plus a capital gain of £5 at maturity, so the total return exceeds the coupon.
</p>
</details>

**Problem 4.** Using the liquidity preference framework, explain what happens to the interest rate when (a) the central bank increases the money supply, and (b) national income increases. Use a diagram in your explanation.

<details>
<summary>Hint</summary>
<p>
(a) Money supply curve shifts right $\Rightarrow$ interest rate falls (excess supply of money at the original rate, people buy bonds, bond prices rise, yields fall). (b) Income increases $\Rightarrow$ transactions demand for money rises $\Rightarrow$ money demand curve shifts right $\Rightarrow$ interest rate rises (excess demand for money at the original rate, people sell bonds, bond prices fall, yields rise).
</p>
</details>

**Problem 5.** Explain the process of quantitative easing. Why might QE be less effective in a liquidity trap? Evaluate the risks of QE for (a) asset price inflation and (b) wealth inequality.

<details>
<summary>Hint</summary>
<p>
QE: central bank buys assets (mainly government bonds) $\Rightarrow$ bond prices rise, yields fall $\Rightarrow$ lower borrowing costs, portfolio rebalancing. Liquidity trap: at the zero lower bound, interest rates can't fall further, and banks may hoard reserves rather than lend (excess reserves). Risks: (a) QE increases demand for assets (bonds, equities, property), pushing up prices — potentially creating bubbles disconnected from fundamentals. (b) Asset price inflation benefits those who own assets (wealthy) more than those who don't (poor), exacerbating wealth inequality.
</p>
</details>

**Problem 6.** A commercial bank has £500m in deposits, £50m in reserves, and £450m in loans. The reserve ratio is 10%. (a) Is the bank meeting its reserve requirement? (b) What is the maximum new loan the bank can make? (c) If the reserve ratio is increased to 15%, what happens?

<details>
<summary>Hint</summary>
<p>
(a) Required reserves $= 10\% \times 500 = £50$m. Actual reserves = £50m. Yes, exactly meeting. (b) Maximum new loan = £0 (no excess reserves). (c) Required reserves $= 15\% \times 500 = £75$m. The bank has only £50m, so it must reduce lending by £25m to meet the new requirement (or borrow reserves).
</p>
</details>

**Problem 7.** "Banks create money out of thin air." Evaluate this statement with reference to the credit creation process and the role of central bank reserves.

<details>
<summary>Hint</summary>
<p>
Technically true: when a bank makes a loan, it simultaneously creates a deposit (money). The bank doesn't need reserves first — it creates the loan-deposit pair. However, constraints exist: (1) The bank must have enough reserves *later* to settle interbank payments and meet reserve requirements. (2) Capital requirements limit lending relative to equity. (3) The bank must find creditworthy borrowers willing to borrow. (4) Regulatory oversight limits excessive credit creation. The statement is misleading because it suggests unlimited money creation, which is false.
</p>
</details>

**Problem 8.** Explain how an increase in the Bank of England's base rate would affect (a) mortgage holders, (b) savers, (c) exporters, (d) the government's debt servicing costs, and (e) the exchange rate.

<details>
<summary>Hint</summary>
<p>
(a) Variable-rate mortgage payments increase $\Rightarrow$ disposable income falls $\Rightarrow$ consumption falls. (b) Savers earn higher returns $\Rightarrow$ saving becomes more attractive $\Rightarrow$ consumption falls. (c) Higher interest rates attract foreign capital $\Rightarrow$ sterling appreciates $\Rightarrow$ UK exports become more expensive $\Rightarrow$ exports fall. (d) Government pays more interest on its debt (much of which is linked to interest rates) $\Rightarrow$ fiscal deficit widens. (e) Exchange rate appreciates (hot money flows in, attracted by higher returns).
</p>
</details>

**Problem 9.** Compare and contrast the use of interest rates and quantitative easing as tools of monetary policy. In what circumstances would each be more appropriate?

<details>
<summary>Hint</summary>
<p>
Interest rates: primary tool, affects short-term borrowing costs, well-understood transmission mechanism. Appropriate for normal economic conditions. QE: used when interest rates are at or near zero (zero lower bound), affects long-term rates and asset prices. Appropriate for severe recessions when conventional policy is exhausted. QE is less precise, harder to reverse, and has distributional consequences. Interest rate changes are quick and reversible but may be insufficient in a deep crisis.
</p>
</details>

**Problem 10.** "The 2008 financial crisis was primarily caused by excessive risk-taking by banks." Evaluate this statement, considering the roles of (a) banks, (b) regulators, (c) central banks, and (d) consumers.

<details>
<summary>Hint</summary>
<p>
(a) Banks: excessive leverage, inadequate risk management, complex securitisation, mis-selling of subprime mortgages. (b) Regulators: light-touch regulation, failure to monitor systemic risk, regulatory arbitrage (shadow banking). (c) Central banks: low interest rates encouraged excessive borrowing, failure to identify asset bubbles. (d) Consumers: borrowed beyond their means (subprime mortgages), irrational exuberance about house prices. The crisis was a *systemic* failure — no single cause, but rather a combination of misaligned incentives, regulatory gaps, and collective irrationality.
</p>
</details>

**Problem 11.** Explain the inverse relationship between bond prices and interest rates. If a bond with face value £100 and coupon 5% has 3 years to maturity and the market interest rate rises from 5% to 6%, calculate the new bond price.

<details>
<summary>Hint</summary>
<p>
At 5%: $P = 5/1.05 + 5/1.05^2 + 105/1.05^3 = 4.76 + 4.54 + 90.70 = £100$ (par). At 6%: $P = 5/1.06 + 5/1.06^2 + 105/1.06^3 = 4.72 + 4.45 + 88.16 = £97.33$. The price falls from £100 to £97.33 when the yield rises from 5% to 6%. This confirms the inverse relationship.
</p>
</details>

**Problem 12.** Discuss the argument that "fractional reserve banking is inherently unstable and should be replaced by full reserve banking." What are the counterarguments?

<details>
<summary>Hint</summary>
<p>
For: fractional reserve banking creates credit booms and busts (Minsky cycle), bank runs are possible (Diamond-Dybvig model), socialises losses (bailouts) while privatising gains. Full reserve banking (Chicago Plan) would eliminate bank runs and credit cycles. Against: fractional reserve banking performs useful maturity transformation (converting short-term deposits into long-term loans), full reserve banking would dramatically reduce lending and economic growth, banks would need to charge for deposits (end of free banking), credit creation could move to shadow banking (unregulated).
</p>
</details>
