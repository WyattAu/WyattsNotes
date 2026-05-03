---
title: "Macroeconomic Policy -- Diagnostic Tests"
description: "Diagnostic tests for A-Level macroeconomics: AD/AS model, fiscal and monetary policy, Phillips curve, and the multiplier."
slug: diag-macroeconomic-policy
hide_table_of_contents: true
---

# Macroeconomic Policy — Diagnostic Tests

## Unit Tests

### UT-1: The Multiplier Effect
**Question:** In a closed economy with no government, the marginal propensity to consume is $\text{MPC} = 0.75$. An increase in investment of $\pounds 200\text{m}$ occurs. Calculate: (a) the multiplier, (b) the total change in national income, (c) the change in consumption. If the government introduces a proportional income tax of $t = 0.2$ and $\text{MPM} = 0.1$, recalculate the multiplier.

**Solution:**

(a) Simple multiplier: $k = \frac{1}{1 - \text{MPC}} = \frac{1}{1 - 0.75} = \frac{1}{0.25} = 4$.

(b) Change in income: $\Delta Y = k \times \Delta I = 4 \times 200 = \pounds 800\text{m}$.

(c) Change in consumption: $\Delta C = \text{MPC} \times \Delta Y = 0.75 \times 800 = \pounds 600\text{m}$.

With tax and imports, the complex multiplier: $k = \frac{1}{1 - \text{MPC}(1-t) + \text{MPM}}$.

$k = \frac{1}{1 - 0.75(1 - 0.2) + 0.1} = \frac{1}{1 - 0.75(0.8) + 0.1} = \frac{1}{1 - 0.60 + 0.1} = \frac{1}{0.50} = 2$.

The tax and imports act as automatic withdrawals, reducing the multiplier from 4 to 2. This means the same $\pounds 200\text{m}$ investment increase would now raise income by only $\pounds 400\text{m}$ instead of $\pounds 800\text{m}$.

---
### UT-2: Phillips Curve Analysis
**Question:** The short-run Phillips curve is given by $\pi = \pi^e - 3(u - 5) + 0.5x$, where $\pi$ is inflation, $\pi^e$ is expected inflation, $u$ is unemployment (%), and $x$ is a supply shock. Initially, $\pi^e = 3\%$ and $x = 0$. (a) If the government reduces unemployment to 3%, what is the inflation rate? (b) In the long run, with adaptive expectations, what happens to the Phillips curve? (c) Calculate the natural rate of unemployment.

**Solution:**

(a) With $u = 3\%$, $\pi^e = 3\%$, $x = 0$:

$\pi = 3 - 3(3 - 5) + 0 = 3 - 3(-2) = 3 + 6 = 9\%$.

Reducing unemployment by 2 percentage points below the natural rate comes at the cost of 6 percentage points of additional inflation.

(b) With adaptive expectations, $\pi^e$ adjusts to actual inflation with a lag. When inflation rises to 9%, workers and firms eventually revise their expectations upward ($\pi^e$ rises toward 9%). As expectations rise, workers demand higher wages, shifting the SRPC upward. The Phillips curve shifts up until the expected inflation equals actual inflation at the natural rate of unemployment. In the long run, there is no trade-off between inflation and unemployment -- the long-run Phillips curve (LRPC) is vertical at the natural rate.

(c) The natural rate of unemployment ($u^*$) is the rate at which $\pi = \pi^e$ with no supply shock ($x = 0$):

$\pi = \pi^e - 3(u^* - 5) + 0$. For $\pi = \pi^e$: $-3(u^* - 5) = 0$, so $u^* = 5\%$.

The natural rate is 5%.

---
### UT-3: Fiscal Policy Analysis
**Question:** The government increases spending by $\pounds 50\text{bn}$, financed entirely by borrowing. The marginal propensity to consume is 0.8, the marginal tax rate is 0.25, and the marginal propensity to import is 0.15. Calculate: (a) the government spending multiplier, (b) the change in the budget deficit (initial and after multiplier effects), (c) the extent of crowding out if the interest sensitivity of investment is such that a 1 percentage point increase in interest rates reduces investment by $\pounds 10\text{bn}$, and the increased borrowing raises interest rates by 0.5 percentage points.

**Solution:**

(a) Multiplier: $k = \frac{1}{1 - \text{MPC}(1-t) + \text{MPM}}$

$k = \frac{1}{1 - 0.8(0.75) + 0.15} = \frac{1}{1 - 0.60 + 0.15} = \frac{1}{0.55} = 1.82$

$\Delta Y = 1.82 \times 50 = \pounds 91\text{bn}$.

(b) Initial increase in deficit: $\pounds 50\text{bn}$ (the additional spending).

After multiplier effects: tax revenue increases by $t \times \Delta Y = 0.25 \times 91 = \pounds 22.75\text{bn}$.

New deficit increase $= 50 - 22.75 = \pounds 27.25\text{bn}$ (the automatic stabiliser partially offsets the initial deficit increase).

(c) Crowding out: the $\pounds 50\text{bn}$ borrowing raises interest rates by 0.5 percentage points.

Investment reduction: $0.5 \times 10 = \pounds 5\text{bn}$.

The crowding out effect reduces the net fiscal expansion. The effective change in aggregate demand is not just the multiplier effect on government spending, but also accounts for the fall in investment:

$\Delta \text{AD} = k_G \times 50 + k_I \times (-5) = 91 + 1.82 \times (-5) = 91 - 9.1 = \pounds 81.9\text{bn}$.

The crowding out reduces the expansionary effect by about 10%. In practice, the extent of crowding out depends on the state of the economy (it is larger when the economy is near full employment and smaller in a recession with a liquidity trap).

## Integration Tests

### IT-1: Monetary Policy Transmission Mechanism (with The Financial Sector)
**Question:** The Bank of England raises the base rate from 2% to 3%. Trace the full monetary policy transmission mechanism, explaining each step. Given that the money multiplier is 5 and the banking system holds no excess reserves, calculate: (a) the maximum change in the money supply if the central bank sells $\pounds 2\text{bn}$ of government bonds through open market operations simultaneously, (b) the impact on the velocity of money if $\text{MV} = PY$ and $Y$ rises by 2% while $P$ is unchanged.

**Solution:**

**Transmission mechanism:**
1. The central bank raises the base rate $\to$ commercial banks raise their lending rates (SVR, mortgage rates, business loan rates).
2. Higher interest rates increase the cost of borrowing $\to$ consumers reduce spending on credit (mortgages, car loans, credit cards) $\to$ consumption falls.
3. Higher rates increase the cost of business borrowing $\to$ firms reduce investment in capital $\to$ investment falls.
4. Higher rates increase the return on saving $\to$ consumers save more and spend less.
5. Higher UK interest rates attract foreign capital inflows $\to$ demand for sterling rises $\to$ the exchange rate appreciates $\to$ exports become more expensive and imports cheaper $\to$ net exports fall.
6. Combined effect: AD shifts left, reducing inflationary pressure but also reducing real GDP and increasing unemployment.

(a) Selling $\pounds 2\text{bn}$ of bonds removes $\pounds 2\text{bn}$ of reserves from the banking system. With a money multiplier of 5:

Maximum change in money supply $= 5 \times (-2) = -\pounds 10\text{bn}$.

(b) $\text{MV} = PY$. If $Y$ rises by 2% and $P$ is unchanged, then $\text{MV}$ must rise by 2%.

If $M$ decreases (from the open market sale), then $V$ must increase to compensate. The relationship is:

$\frac{\Delta(\text{MV})}{\text{MV}} = \frac{\Delta M}{M} + \frac{\Delta V}{V} + \frac{\Delta M}{M} \times \frac{\Delta V}{V}$

For small changes: $\frac{\Delta M}{M} + \frac{\Delta V}{V} \approx 2\%$.

This scenario is contradictory: the interest rate rise and bond sale both reduce the money supply, which should reduce $Y$ or $P$, not increase $Y$ by 2%. If we observe $Y$ rising despite contractionary monetary policy, either: (1) the policy has not yet taken effect (lags), (2) other factors are boosting $Y$ (fiscal expansion, export boom), or (3) velocity has increased significantly as people spend money faster in anticipation of further rate rises.

---
### IT-2: AD/AS and Supply-Side Policy (with Supply-Side Policy)
**Question:** An economy is experiencing stagflation: inflation at 8% and unemployment at 8%, with the natural rate at 5%. Using the AD/AS model, explain why demand-side policies alone cannot solve stagflation. A supply-side policy reduces the natural rate of unemployment to 4% and increases potential output by 5%. Assuming initial output is $\pounds 2000\text{bn}$, calculate: (a) the new potential output, (b) the change in the price level if AD is unchanged (assuming unitary elasticity of demand at potential output).

**Solution:**

**Why demand-side policies fail:** Stagflation (high inflation + high unemployment) occurs when the SRAS shifts left (adverse supply shock, e.g., oil price increase). If the government uses expansionary fiscal or monetary policy to reduce unemployment, AD shifts right, which further increases inflation without sustainably reducing unemployment (the economy moves along the new, higher SRPC). Conversely, contractionary demand-side policy to reduce inflation would further increase unemployment. There is no single AD shift that can simultaneously reduce both inflation and unemployment -- the economy faces a trade-off.

**Supply-side solution:** Supply-side policies shift the LRAS (and SRAS) to the right, increasing potential output and reducing the natural rate. This allows lower inflation AND lower unemployment simultaneously.

(a) New potential output $= 2000 \times 1.05 = \pounds 2100\text{bn}$.

(b) With AD unchanged and unitary elasticity (PQ approximately constant at potential):

Initial: $P_0 \times 2000 = \text{AD}$, New: $P_1 \times 2100 = \text{AD}$.

$P_1 \times 2100 = P_0 \times 2000$, so $P_1 = P_0 \times \frac{2000}{2100} = P_0 \times 0.9524$.

The price level falls by approximately 4.76%. The supply-side improvement simultaneously:
- Reduces inflation (price level falls)
- Reduces unemployment (natural rate falls from 5% to 4%)
- Increases economic growth (output rises from $\pounds 2000\text{bn}$ to $\pounds 2100\text{bn}$)

This is the key advantage of supply-side policies over demand-side policies in addressing stagflation.

---
### IT-3: Exchange Rates and Balance of Payments (with The International Economy)
**Question:** The UK current account is in deficit by $\pounds 50\text{bn}$. The exchange rate is $E = \$1.25/\pounds$. The Marshall-Lerner condition holds (sum of PEDs for exports and imports $= 1.8$). If the pound depreciates by 20% to $\$1.00/\pounds$: (a) Calculate the J-curve effect in the first 6 months, assuming short-run PEDs sum to 0.6, (b) Calculate the long-run improvement in the current account if import spending was initially $\pounds 500\text{bn}$ and export revenue was $\pounds 400\text{bn}$.

**Solution:**

(a) **J-curve effect:** In the short run (first 6 months), consumers and firms cannot easily change their trading patterns. The short-run PEDs sum to 0.6 (less than 1), so the Marshall-Lerner condition is NOT satisfied in the short run.

The depreciation makes imports more expensive (more pounds needed per dollar of imports) and exports cheaper (fewer dollars needed per pound of exports). With inelastic demand in the short run, the value effect (higher import prices) dominates the volume effect (quantity changes).

Initial: exports $\pounds 400\text{bn}$, imports $\pounds 500\text{bn}$, deficit $= \pounds 100\text{bn}$ (note: deficit is $\pounds 100\text{bn}$ by these figures, not $\pounds 50\text{bn}$ -- let me use $\pounds 450\text{bn}$ imports for a $\pounds 50\text{bn}$ deficit).

Let me use: exports $= \pounds 400\text{bn}$, imports $= \pounds 450\text{bn}$, deficit $= \pounds 50\text{bn}$.

With 20% depreciation, import prices rise by approximately 20% (in pound terms) and export prices fall by approximately 20% (in foreign currency terms).

Short-run: $\% \Delta \text{exports} = 0.3 \times 20 = 6\%$ (assuming export PED $= 0.3$). New exports $= 400 \times 1.06 = \pounds 424\text{bn}$.

$\% \Delta \text{imports} = -0.3 \times 20 = -6\%$ (import PED $= 0.3$). New import volume $= 450 \times 0.94 = \pounds 423\text{bn}$ at old prices, but at 20% higher prices $= 423 \times 1.20 = \pounds 507.6\text{bn}$.

New deficit $= 507.6 - 424 = \pounds 83.6\text{bn}$. The deficit **worsens** by $\pounds 33.6\text{bn}$ in the short run -- the J-curve effect.

(b) **Long-run improvement:** PEDs sum to 1.8 (Marshall-Lerner satisfied).

$\% \Delta \text{exports} = 0.9 \times 20 = 18\%$. New exports $= 400 \times 1.18 = \pounds 472\text{bn}$.

$\% \Delta \text{imports} = -0.9 \times 20 = -18\%$. New import volume $= 450 \times 0.82 = 369$ at old prices, but at 20% higher prices $= 369 \times 1.20 = \pounds 442.8\text{bn}$.

New deficit $= 442.8 - 472 = -\pounds 29.2\text{bn}$ (surplus of $\pounds 29.2\text{bn}$).

Improvement $= 50 + 29.2 = \pounds 79.2\text{bn}$ (from $\pounds 50\text{bn}$ deficit to $\pounds 29.2\text{bn}$ surplus).

The J-curve illustrates that exchange rate depreciation initially worsens the trade balance before improving it -- the full benefits may take 1--2 years to materialise.
