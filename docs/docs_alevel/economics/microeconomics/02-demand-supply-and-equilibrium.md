---
title: Demand, Supply and Equilibrium
description:
  'A-Level Economics notes on Demand, Supply and Equilibrium: 1. Demand; 1.1 Definition; 1.2
  Deriving Individual Demand from Utility Maximisation; 1.3 Market De.'
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: demand-supply-and-equilibrium
sidebar_position: 2
---

## 1. Demand

### 1.1 Definition

We define **demand** as the quantity of a good or service that consumers are _willing and able_ to
Purchase at each possible price during a given time period, _ceteris paribus_.

$$Q_d = f(P, Y, P_s, P_c, T, E, N)$$

Where $P$ = price of the good, $Y$ = income, $P_s$ = price of substitutes, $P_c$ = price of
Complements, $T$ = tastes, $E$ = expectations, $N$ = population.

The **law of demand** states that, ceteris paribus, as price rises, quantity demanded falls. This
Follows from:

1. **Income effect**: a higher price reduces real purchasing power
2. **Substitution effect**: a higher price makes substitutes relatively more attractive

### 1.2 Deriving Individual Demand from Utility Maximisation

Consider a consumer with utility function $U(x, y)$ facing prices $P_x$, $P_y$ and income $M$. The
Consumer solves:

$$
\begin{aligned}
\max_{x,y} \quad & U(x, y) \\
\mathrm{s.t.} \quad & P_x \cdot x + P_y \cdot y = M
\end{aligned}
$$

The Lagrangian is:

$$\mathcal{L} = U(x, y) + \lambda(M - P_x \cdot x - P_y \cdot y)$$

First-order conditions:

$$\frac◆LB◆\partial \mathcal{L}◆RB◆◆LB◆\partial x◆RB◆ = \frac◆LB◆\partial U◆RB◆◆LB◆\partial x◆RB◆ - \lambda P_x = 0 \implies \frac{MU_x}{P_x} = \lambda$$

$$\frac◆LB◆\partial \mathcal{L}◆RB◆◆LB◆\partial y◆RB◆ = \frac◆LB◆\partial U◆RB◆◆LB◆\partial y◆RB◆ - \lambda P_y = 0 \implies \frac{MU_y}{P_y} = \lambda$$

Therefore:

$$\frac{MU_x}{MU_y} = \frac{P_x}{P_y} \implies \mathrm{MRS}_{xy} = \frac{P_x}{P_y}$$

This equates the marginal rate of substitution (the consumer's internal valuation) with the price
Ratio (the market's valuation). Solving for $x$ as a function of $P_x$ (holding other parameters
Constant) yields the **individual demand curve** $x = d_i(P_x)$.

### 1.3 Market Demand

The **market demand curve** is derived by **horizontal summation** of individual demand curves:

$$Q_D(P) = \sum_{i=1}^{n} d_i(P) = d_1(P) + d_2(P) + \cdots + d_n(P)$$

At each price, we add up the quantities demanded by all consumers.

### 1.4 Movements Along vs Shifts

- **Movement along the demand curve**: caused by a change in the good's _own price_. We move from
  one point to another _on the same curve_.
- **Shift of the demand curve**: caused by a change in any _determinant other than the good's own
  price_. The entire curve moves left (decrease in demand) or right (increase in demand).

### 1.5 Determinants of Demand

| Determinant                               | Effect on Demand                                       | Example                                                |
| ----------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Income ($\uparrow$)                       | Normal goods: $\uparrow$; Inferior goods: $\downarrow$ | Demand for bus travel falls as income rises (inferior) |
| Price of substitute ($\uparrow$)          | $\uparrow$                                             | Tea demand rises when coffee price rises               |
| Price of complement ($\uparrow$)          | $\downarrow$                                           | Petrol demand falls when car prices rise               |
| Tastes (towards good)                     | $\uparrow$                                             | Health campaigns increase demand for fruit             |
| Expectations of future price ($\uparrow$) | $\uparrow$ (current demand)                            | Consumers stockpile before expected price rise         |
| Population ($\uparrow$)                   | $\uparrow$                                             | UK population growth increases housing demand          |

:::warning Common Pitfall "A rise in demand" means the _curve shifts right_. "A rise in quantity
Demanded" means a _movement along the curve_ due to a price change. These are fundamentally
Different. Examiners penalise imprecise language. :::

## 2. Supply

### 2.1 Definition

We define **supply** as the quantity of a good or service that producers are _willing and able_ to
Offer for sale at each possible price during a given time period, _ceteris paribus_.

$$Q_s = g(P, C, T, S, E, n)$$

Where $C$ = costs of production, $T$ = technology, $S$ = subsidies/taxes, $E$ = expectations, $n$ =
Number of firms.

The **law of supply** states that, ceteris paribus, as price rises, quantity supplied rises. This
Follows from profit maximisation.

### 2.2 Deriving Supply from Profit Maximisation

A firm with cost function $C(Q)$ and facing price $P$ maximises profit:

$$\pi(Q) = P \cdot Q - C(Q)$$

First-order condition:

$$\frac◆LB◆d\pi◆RB◆◆LB◆dQ◆RB◆ = P - C'(Q) = 0 \implies P = MC(Q)$$

Where $MC(Q) = C'(Q)$ is marginal cost. Second-order condition requires $C''(Q) \gt 0$ (MC Rising).
The **supply curve** of a competitive firm is the portion of its $MC$ curve above the Average
variable cost (AVC) curve.

$$Q_s(P) = MC^{-1}(P) \quad \mathrm{for } P \geq \min AVC$$

### 2.3 Market Supply

$$Q_S(P) = \sum_{j=1}^{m} s_j(P)$$

Horizontal summation of individual firm supply curves.

### 2.4 Determinants of Supply

| Determinant                               | Effect on Supply              | Example                                           |
| ----------------------------------------- | ----------------------------- | ------------------------------------------------- |
| Costs of production ($\uparrow$)          | $\downarrow$                  | Higher wages reduce supply                        |
| Technology (improvement)                  | $\uparrow$                    | Automation increases supply                       |
| Subsidy ($\uparrow$)                      | $\uparrow$                    | Renewable energy subsidies increase supply        |
| Indirect tax ($\uparrow$)                 | $\downarrow$                  | Sugar tax reduces supply of sugary drinks         |
| Expectations of future price ($\uparrow$) | $\downarrow$ (current supply) | Farmers withhold supply expecting higher prices   |
| Number of firms ($\uparrow$)              | $\uparrow$                    | Entry of new coffee shops increases market supply |

## 3. Market Equilibrium

### 3.1 Definition and Stability

We define **market equilibrium** as the price-quantity pair $(P^*, Q^*)$ at which quantity demanded
Equals quantity supplied:

$$Q_D(P^*) = Q_S(P^*)$$

**Stability proof.** Suppose price $P_1 \gt P^*$. Then $Q_S(P_1) \gt Q_D(P_1)$ — there is excess
Supply (a surplus). Unsold goods pile up, so firms cut prices. As price falls, quantity demanded
Rises and quantity supplied falls until equilibrium is restored.

Suppose price $P_2 \lt P^*$. Then $Q_D(P_2) \gt Q_S(P_2)$ — there is excess demand (a shortage).
Consumers bid up prices. As price rises, quantity supplied rises and quantity demanded falls until
Equilibrium is restored.

Therefore, the equilibrium is **stable**: any deviation sets in motion forces that restore
Equilibrium. $\blacksquare$

:::tip Exam Technique When asked to "analyse the effect of X on equilibrium," use the three-step
Framework:

1. Identify whether X shifts demand or supply (and which direction)
2. Show the shift on a diagram
3. State the new equilibrium price and quantity
4. Evaluate: what if both curves shift simultaneously? :::

### 3.2 Price Mechanism (The Invisible Hand)

The price mechanism is the process by which prices adjust to equate demand and supply, thereby
Allocating resources without central direction. It performs three functions:

1. **Signalling**: prices convey information about scarcity (high price = scarce)
2. **Incentive**: high prices incentivise production, low prices incentivise consumption
3. **Rationing**: prices ration scarce goods to those willing and able to pay

## 4. Elasticity

### 4.1 Price Elasticity of Demand (PED)

We define the **price elasticity of demand** as:

$$\mathrm{PED} = \frac◆LB◆\%\Delta Q_d◆RB◆◆LB◆\%\Delta P◆RB◆ = \frac◆LB◆\Delta Q_d / Q_d◆RB◆◆LB◆\Delta P / P◆RB◆ = \frac{P}{Q_d} \cdot \frac◆LB◆\Delta Q_d◆RB◆◆LB◆\Delta P◆RB◆$$

Since the demand curve slopes downward, $\mathrm{PED} \lt 0$. We often state the _absolute value_
$|\mathrm{PED}|$.

**Classification:**

| Value                           | Description         | Interpretation               |
| ------------------------------- | ------------------- | ---------------------------- |
| $\mathrm{PED} = 0$              | Perfectly inelastic | Vertical demand curve        |
| $0 \lt \mathrm{PED} \lt 1$      | Inelastic           | %$\Delta Q$ &lt; %$\Delta P$ |
| $\mathrm{PED} = 1$              | Unit elastic        | %$\Delta Q$ = %$\Delta P$    |
| $1 \lt \mathrm{PED} \lt \infty$ | Elastic             | %$\Delta Q$ &gt; %$\Delta P$ |
| $\mathrm{PED} = \infty$         | Perfectly elastic   | Horizontal demand curve      |

### 4.2 PED and Total Revenue

**Total revenue** is $TR = P \times Q$.

$$\frac{d(TR)}{dP} = Q + P \cdot \frac{dQ}{dP} = Q\left(1 + \frac{P}{Q} \cdot \frac{dQ}{dP}\right) = Q(1 + \mathrm{PED})$$

Since PED < 0:

- If $|\mathrm{PED}| \gt 1$ (elastic): $\frac{d(TR)}{dP} \lt 0$. Price increase $\Rightarrow$
  revenue _falls_.
- If $|\mathrm{PED}| \lt 1$ (inelastic): $\frac{d(TR)}{dP} \gt 0$. Price increase $\Rightarrow$
  revenue _rises_.
- If $|\mathrm{PED}| = 1$ (unit elastic): $\frac{d(TR)}{dP} = 0$. Revenue is _maximised_.

**Proposition: Total revenue is maximised where $|\mathrm{PED}| = 1$.**

_Proof._ We showed $\frac{d(TR)}{dP} = Q(1 + \mathrm{PED})$. Setting $\frac{d(TR)}{dP} = 0$:
$1 + \mathrm{PED} = 0$So $\mathrm{PED} = -1$I.e., $|\mathrm{PED}| = 1$. The second derivative
Confirms this is a maximum (for downward-sloping demand). $\blacksquare$

### 4.3 PED Varies Along a Linear Demand Curve

**Proposition:** For a linear demand curve $Q = a - bP$PED varies from $0$ (at the quantity axis) To
$-\infty$ (at the price axis), with $|\mathrm{PED}| = 1$ at the midpoint.

_Proof._ $P = \frac{a - Q}{b}$So:

$$\mathrm{PED} = \frac{P}{Q} \cdot \frac{dQ}{dP} = \frac{P}{Q} \cdot (-b) = \frac{-bP}{Q} = \frac{-b(a - Q)/b}{Q} = -\frac{a - Q}{Q} = -\frac{a}{Q} + 1$$

At the midpoint, $Q = a/2$: $\mathrm{PED} = -\frac{a}{a/2} + 1 = -1$. As $Q \to 0$ (price axis):
$\mathrm{PED} \to -\infty$ (perfectly elastic). As $Q \to a$ (quantity axis): $\mathrm{PED} \to 0$
(perfectly inelastic). $\blacksquare$

### 4.4 Determinants of PED

1. **Availability of substitutes**: more substitutes $\Rightarrow$ more elastic (e.g., bottled water
   vs insulin)
2. **Proportion of income spent**: larger share $\Rightarrow$ more elastic (e.g., cars vs matches)
3. **Time period**: longer time horizon $\Rightarrow$ more elastic (consumers can adjust behaviour)
4. **Necessity vs luxury**: necessities tend to be inelastic, luxuries elastic
5. **Definition of the market**: narrowly defined markets are more elastic (e.g., "Coca-Cola" vs
   "soft drinks")

### 4.5 Income Elasticity of Demand (YED)

$$\mathrm{YED} = \frac◆LB◆\%\Delta Q_d◆RB◆◆LB◆\%\Delta Y◆RB◆ = \frac◆LB◆\Delta Q_d / Q_d◆RB◆◆LB◆\Delta Y / Y◆RB◆$$

| YED         | Type of Good       | Example                            |
| ----------- | ------------------ | ---------------------------------- |
| YED < 0     | Inferior           | Own-brand food, bus travel         |
| 0 < YED < 1 | Normal (necessity) | Bread, electricity                 |
| YED > 1     | Normal (luxury)    | Designer clothes, foreign holidays |

### 4.6 Cross-Price Elasticity of Demand (XED)

$$\mathrm{XED}_{AB} = \frac◆LB◆\%\Delta Q_A◆RB◆◆LB◆\%\Delta P_B◆RB◆$$

| XED     | Relationship | Example            |
| ------- | ------------ | ------------------ |
| XED > 0 | Substitutes  | Tea and coffee     |
| XED < 0 | Complements  | Petrol and cars    |
| XED = 0 | Unrelated    | Books and tomatoes |

The _magnitude_ of XED indicates the closeness of the relationship — relevant for competition policy
(defining the relevant market).

### 4.7 Price Elasticity of Supply (PES)

$$\mathrm{PES} = \frac◆LB◆\%\Delta Q_s◆RB◆◆LB◆\%\Delta P◆RB◆ = \frac◆LB◆\Delta Q_s / Q_s◆RB◆◆LB◆\Delta P / P◆RB◆$$

**Determinants of PES:**

1. **Time period**: momentary (perfectly inelastic) < short-run < long-run (more elastic)
2. **Spare capacity**: excess capacity $\Rightarrow$ more elastic
3. **Mobility of factors**: reallocated factors $\Rightarrow$ more elastic
4. **Ability to store goods**: storable goods $\Rightarrow$ more elastic
5. **Natural constraints**: agricultural supply is inelastic in the short run

## 5. Consumer and Producer Surplus

### 5.1 Definitions

**Consumer surplus** is the difference between what consumers are willing to pay and what they
Actually pay:

$$CS = \int_0^{Q^*} [P_d(Q) - P^*] \, dQ$$

Where $P_d(Q)$ is the inverse demand function (the maximum price consumers will pay for quantity
$Q$).

**Producer surplus** is the difference between the price received and the minimum price producers
Would accept:

$$PS = \int_0^{Q^*} [P^* - P_s(Q)] \, dQ$$

Where $P_s(Q)$ is the inverse supply function.

**Total surplus** = $CS + PS$. At competitive equilibrium, total surplus is maximised — this is the
**First Theorem of Welfare Economics**.

## 6. Critical Evaluation

### Strengths of the Demand-Supply Model

- Provides a powerful, general framework for analysing markets
- Equilibrium concept is robust (stable under reasonable conditions)
- Elasticity provides a quantitative measure of responsiveness
- Consumer/producer surplus allows welfare analysis

### Limitations

- Assumes perfect competition — many markets are not competitive
- Static analysis — doesn't capture dynamic adjustment processes
- Representative agent assumption — ignores heterogeneity
- Ceteris paribus is unrealistic — many variables change simultaneously
- Doesn't account for behavioural biases (prospect theory, loss aversion)

:::info Board-Specific Note Edexcel (9EC0) emphasises elasticity calculations using the midpoint
(arc elasticity) formula:
$\mathrm{PED} = \frac◆LB◆\Delta Q◆RB◆◆LB◆\Delta P◆RB◆ \times \frac{(P_1 + P_2)/2}{(Q_1 + Q_2)/2}$.
CIE Uses the point elasticity formula. Check your board's preference. :::

## 7. Problem Set

**Problem 1.** A consumer has utility $U(x, y) = x^{0.5}y^{0.5}$Income $M = 100$And faces prices
$P_x = 4$, $P_y = 2$. Derive the demand functions for $x$ and $y$. What happens to demand for $x$ if
$P_x$ rises to 5?

<details>
<summary>Hint</summary>
Set up MRS = price ratio: $\frac{y}{x} = \frac{P_x}{P_y} = 2$So $y = 2x$. Substitute into budget constraint: $4x + 2(2x) = 100 \Rightarrow 8x = 100 \Rightarrow x = 12.5$$y = 25$. General demand: $x = \frac{M}{2P_x}$$y = \frac{M}{2P_y}$. At $P_x = 5$: $x = 10$.
</details>

**Problem 2.** The market demand for good $X$ is $Q_D = 100 - 2P$ and market supply is
$Q_S = 20 + 3P$. Find the equilibrium price and quantity. Calculate the consumer and producer
Surplus at equilibrium.

<details>
<summary>Hint</summary>
$100 - 2P = 20 + 3P \Rightarrow 80 = 5P \Rightarrow P^* = 16$$Q^* = 68$. CS = $\int_0^{68} [50 - Q/2 - 16] \, dQ = \int_0^{68} [34 - Q/2] \, dQ = [34Q - Q^2/4]_0^{68} = 2312 - 1156 = 1156$. PS = $\int_0^{68} [16 - (Q - 20)/3] \, dQ = \int_0^{68} [22/3 - Q/3] \, dQ = [22Q/3 - Q^2/6]_0^{68} = 498.67 - 770.67 = \ldots$ Recalculate: inverse supply $P = (Q - 20)/3 + 0 = (Q-20)/3$. PS = $\int_0^{68} [16 - (Q-20)/3] dQ = \int_0^{68} [16 - Q/3 + 20/3] dQ = \int_0^{68} [68/3 - Q/3] dQ = [68Q/3 - Q^2/6]_0^{68} = 1541.33 - 770.67 = 770.67$.
</details>

**Problem 3.** A linear demand curve passes through points $(P, Q) = (10, 50)$ and
$(P, Q) = (20, 30)$. Calculate PED at each point using the point elasticity formula. At what point
Is $|\mathrm{PED}| = 1$?

<details>
<summary>Hint</summary>
Demand equation: slope $= \frac{30-50}{20-10} = -2$So $Q = 70 - 2P$. At $(10, 50)$: PED $= \frac{10}{50} \times (-2) = -0.4$ (inelastic). At $(20, 30)$: PED $= \frac{20}{30} \times (-2) = -1.33$ (elastic). Midpoint: $Q = 35$$P = 17.5$: PED $= \frac{17.5}{35} \times (-2) = -1$.
</details>

**Problem 4.** The price of good $A$ rises from £5 to £7, causing quantity demanded of good $B$ to
Fall from 100 to 80 units. Calculate XED and interpret the relationship between $A$ and $B$.

<details>
<summary>Hint</summary>
Using midpoint formula: XED $= \frac{(80-100)/90}{(7-5)/6} = \frac{-20/90}{2/6} = \frac{-0.222}{0.333} = -0.667$. Since XED < 0, $A$ and $B$ are complements. The magnitude (0.667) suggests a moderate complement relationship.
</details>

**Problem 5.** A government imposes a specific tax of £3 per unit on a good with demand
$Q_D = 120 - P$ and supply $Q_S = 2P - 30$. Find the new equilibrium, the tax incidence on consumers
And producers, and the deadweight loss.

<details>
<summary>Hint</summary>
With tax, supply shifts up: $P_s = P_d - 3$So $Q_S = 2(P_d - 3) - 30 = 2P_d - 36$. New equilibrium: $120 - P_d = 2P_d - 36 \Rightarrow 156 = 3P_d \Rightarrow P_d = 52$. $P_s = 49$. $Q^* = 68$. Tax burden on consumers: $52 - 50 = 2$ (out of £3). Tax burden on producers: $50 - 49 = 1$. DWL $= \frac{1}{2} \times 3 \times (70 - 68) = 3$.
</details>

**Problem 6.** Prove that if demand is perfectly inelastic ($\mathrm{PED} = 0$), the full burden of
A specific tax falls on consumers. Prove that if demand is perfectly elastic, the full burden falls
On producers.

<details>
<summary>Hint</summary>
With vertical demand curve, quantity doesn't change. The price consumers pay rises by the full amount of the tax. With horizontal demand curve, consumers are willing to pay only $P^*$. Producers must absorb the entire tax to continue selling.
</details>

**Problem 7.** A firm's total cost function is $TC = 50 + 10Q + 0.5Q^2$. Derive the supply curve. If
The market price is £25, how much will the firm produce?

<details>
<summary>Hint</summary>
$MC = dTC/dQ = 10 + Q$. Supply curve: $P = MC$ for $P \geq AVC$. $AVC = 10 + 0.5Q$$\min AVC = 10$ at $Q = 0$. So supply: $Q = P - 10$ for $P \geq 10$. At $P = 25$: $Q = 15$.
</details>

**Problem 8.** "A firm should always produce at the level where total revenue is maximised."
Evaluate this statement.

<details>
<summary>Hint</summary>
False. A profit-maximising firm produces where $MR = MC$Not where $TR$ is maximised ($MR = 0$). Since $MC \gt 0$ (), the profit-maximising output is lower than the revenue-maximising output. Only if $MC = 0$ would the two coincide.
</details>

**Problem 9.** When the price of cinema tickets rises from £8 to £10, weekly attendance falls from
500 to 400. Calculate PED. If the cinema raises prices further to £12, and PED remains constant,
Predict the new attendance. Is this assumption realistic?

<details>
<summary>Hint</summary>
PED $= \frac{-100/450}{2/9} = \frac{-0.222}{0.222} = -1$ (unit elastic, using midpoints). If PED remains $-1$: $\frac◆LB◆\%\Delta Q◆RB◆◆LB◆\%\Delta P◆RB◆ = -1$. Price rises from 10 to 12 = 20%. So quantity falls by 20%: $Q = 400 \times 0.8 = 320$. The assumption is unrealistic because PED varies along a linear demand curve.
</details>

**Problem 10.** The government is considering imposing a tax on cigarettes. Using demand and supply
Analysis, discuss the likely effects on (a) equilibrium price and quantity, (b) consumer surplus,
(c) tax revenue, and (d) deadweight loss. In your evaluation, consider the implications of inelastic
Demand for tax revenue vs the goal of reducing smoking.

<details>
<summary>Hint</summary>
Cigarettes have inelastic demand (few substitutes, addictive). (a) Price rises substantially, quantity falls modestly. (b) Consumer surplus falls by a large amount (consumers bear most of the tax burden). (c) Tax revenue is high because quantity doesn't fall much. (d) DWL is relatively small (narrow triangle). Evaluation: if the goal is revenue, inelastic goods are ideal for taxation. If the goal is reducing smoking, the tax may be insufficient — complementary policies (education, regulation) may be needed.
</details>

**Problem 11.** Two goods have demand curves $Q_A = 50 - P_A + 0.5P_B$ and $Q_B = 80 - 2P_B + P_A$.
Calculate the cross-price elasticity of demand for good $B$ with respect to the price of $A$ when
$P_A = 20$$P_B = 10$.

<details>
<summary>Hint</summary>
$\mathrm{XED}_{BA} = \frac◆LB◆\partial Q_B / \partial P_A \times P_A◆RB◆◆LB◆Q_B◆RB◆$. $\partial Q_B / \partial P_A = 1$. At $P_A = 20$$P_B = 10$: $Q_B = 80 - 20 + 20 = 80$. XED $= 1 \times 20/80 = 0.25$. Positive, so $A$ and $B$ are weak substitutes.
</details>

**Problem 12.** Evaluate the usefulness of elasticity concepts for government policymakers. In your
Answer, discuss the limitations of elasticity estimates in practice.

<details>
<summary>Hint</summary>
Useful for: tax policy (tax inelastic goods for revenue), subsidy design, price regulation. Limitations: estimates vary with time period and data quality, assume ceteris paribus, may change after policy intervention (endogeneity), difficult to estimate for new goods.
</details>

## 8. Equilibrium Price and Quantity: Extended Calculations

### 8.1 Solving for Equilibrium Algebraically

**Example.** Market demand is $Q_D = 200 - 4P$ and market supply is $Q_S = 20 + 6P$. Find the
Equilibrium price and quantity, and verify stability.

**Answer.** Set $Q_D = Q_S$: $200 - 4P = 20 + 6P \implies 180 = 10P \implies P^* = 18$.

$Q^* = 200 - 4(18) = 200 - 72 = 128$.

**Stability check.** At $P = 20 \gt P^*$: $Q_D = 120$$Q_S = 140$. Excess supply of $20$ units
$\implies$ price falls. At $P = 15 \lt P^*$: $Q_D = 140$$Q_S = 110$. Excess demand of $30$ units
$\implies$ price rises. The equilibrium is stable. $\square$

### 8.2 Simultaneous Shifts in Demand and Supply

When both curves shift simultaneously, the effect on equilibrium price is ambiguous unless we know
The relative magnitudes.

| Demand Shift     | Supply Shift     | Effect on $P^*$ | Effect on $Q^*$ |
| ---------------- | ---------------- | --------------- | --------------- |
| Right (increase) | Right (increase) | Ambiguous       | Increases       |
| Right (increase) | Left (decrease)  | Increases       | Ambiguous       |
| Left (decrease)  | Right (increase) | Decreases       | Ambiguous       |
| Left (decrease)  | Left (decrease)  | Ambiguous       | Decreases       |

**Example.** Demand increases and supply decreases simultaneously. Both shifts push price up, so
$P^*$ definitely increases. Quantity could increase or decrease depending on which shift dominates.

## 9. Shifts vs Movements: Extended Analysis

### 9.1 A Common Exam Scenario

**Example.** "The price of coffee rises. Explain the effect on the market for tea."

**Correct analysis.** Coffee and tea are substitutes ($\mathrm{XED} \gt 0$). A rise in the price Of
coffee shifts the demand curve for tea to the **right** (increase in demand for tea). At the
Original price, there is now excess demand for tea. The price of tea rises, and the quantity of tea
Traded increases. This is a **shift** in the demand curve, not a movement along it.

**Incorrect analysis.** "The price of tea rises, so demand for tea falls." This confuses a movement
Along the curve with a shift.

### 9.2 Distinguishing the Language

| Scenario                         | Correct Terminology                  | Curve Effect             |
| -------------------------------- | ------------------------------------ | ------------------------ |
| Price of the good itself changes | Change in quantity demanded/supplied | Movement along the curve |
| Any other determinant changes    | Change in demand/supply              | Shift of the curve       |

## 10. Consumer and Producer Surplus: Worked Calculations

### 10.1 Linear Demand and Supply

**Example.** Demand: $Q_D = 100 - 2P$. Supply: $Q_S = 10 + 3P$. Calculate consumer surplus, producer
Surplus, and total surplus at equilibrium.

**Answer.** Equilibrium: $100 - 2P = 10 + 3P \implies 90 = 5P \implies P^* = 18$$Q^* = 64$.

Inverse demand: $P = 50 - Q/2$ (choke price $= 50$). Inverse supply: $P = (Q - 10)/3$.

$$CS = \int_0^{64} [50 - Q/2 - 18]\,dQ = \int_0^{64} [32 - Q/2]\,dQ = [32Q - Q^2/4]_0^{64} = 2048 - 1024 = 1024$$

$$PS = \int_0^{64} [18 - (Q - 10)/3]\,dQ = \int_0^{64} [64/3 - Q/3]\,dQ = [64Q/3 - Q^2/6]_0^{64} = 1365.3 - 682.7 = 682.7$$

Total surplus $= 1024 + 682.7 = 1706.7$.

### 10.2 Effect of a Price Ceiling

A **binding price ceiling** set below $P^*$ creates a shortage and reduces total surplus. The new
Quantity traded is determined by the supply curve at the ceiling price. Consumer surplus may
Increase or decrease depending on the choke price and the extent of the shortage.

## 11. Tax Incidence Analysis

### 11.1 The Key Result

The distribution of a tax burden between consumers and producers depends on the **relative price
Elasticities** of demand and supply:

$$\frac◆LB◆\mathrm{Burden on consumers}◆RB◆◆LB◆\mathrm{Burden on producers}◆RB◆ = \frac◆LB◆|\mathrm{PES}|◆RB◆◆LB◆|\mathrm{PED}|◆RB◆$$

The more inelastic side bears a greater share of the tax burden.

### 11.2 Worked Example

**Example.** Demand: $Q_D = 150 - P$. Supply: $Q_S = 2P - 30$. A specific tax of $t = 10$ per unit
Is imposed.

**Answer.** Original equilibrium: $150 - P = 2P - 30 \implies P^* = 60$, $Q^* = 90$.

With tax, supply shifts: $P_s = P_d - 10$. New supply: $Q_S = 2(P_d - 10) - 30 = 2P_d - 50$.

New equilibrium: $150 - P_d = 2P_d - 50 \implies 200 = 3P_d \implies P_d = 66.67$.

$P_s = 56.67$. $Q^* = 83.3$.

Consumer burden: $66.67 - 60 = 6.67$ (out of 10). Producer burden: $60 - 56.67 = 3.33$.

Ratio: $6.67/3.33 = 2$. Check: $|\mathrm{PES}| = (dQ_S/dP)(P/Q) = 2(60/90) = 1.33$.
$|\mathrm{PED}| = (dQ_D/dP)(P/Q) = |-1|(60/90) = 0.67$. Ratio $= 1.33/0.67 = 2$. $\square$

Deadweight loss:
$\mathrm{DWL} = \frac{1}{2} \times t \times \Delta Q = \frac{1}{2} \times 10 \times (90 - 83.3) = 33.5$.

## 12. Income and Cross-Price Elasticity: Applications

### 12.1 Using YED to Classify Goods

**Example.** When average income rises from $£30\,000$ to $£33\,000$Demand for bus travel falls From
500 to 475 journeys per week, while demand for foreign holidays rises from 200 to 230 per week.
Calculate YED for each and classify the goods.

**Answer.** Bus travel: YED
$= \frac{(475-500)/487.5}{(33000-30000)/31500} = \frac{-0.0513}{0.0952} = -0.54$. Negative YED
$\implies$ bus travel is an inferior good.

Foreign holidays: YED $= \frac{(230-200)/215}{0.0952} = \frac{0.1395}{0.0952} = 1.47$. YED $\gt 1$
$\implies$ foreign holidays are a luxury (normal good).

### 12.2 Using XED for Competition Policy

If XED between two firms' products is high (close substitutes), they operate in the same market and
A merger between them would significantly reduce competition. Competition authorities use XED to
Define the **relevant market**.

## 13. Common Pitfalls

1. **Confusing "demand" with "quantity demanded."** "Demand" refers to the entire curve; "quantity
   demanded" refers to a specific point on the curve. A price change causes a change in quantity
   demanded (movement), not a change in demand (shift).

2. **Ignoring the ceteris paribus assumption.** In reality, multiple factors change simultaneously.
   When analysing a change, state what is being held constant.

3. **Assuming elastic demand always means less revenue.** The relationship between PED and revenue
   depends on the direction of the price change. A price _decrease_ with elastic demand _increases_
   revenue; a price _increase_ with elastic demand _decreases_ revenue.

4. **Misapplying the midpoint formula.** The midpoint (arc elasticity) formula gives the elasticity
   at the midpoint of the change, not at either endpoint. For precise analysis, use point
   elasticity.

5. **Forgetting that supply can be elastic or inelastic too.** PES determines how quickly producers
   can respond to price changes. In the short run, supply is less elastic than in the long run.

6. **Assuming tax burden depends on who pays the government.** The legal incidence (who writes the
   cheque) does not determine the economic incidence (who bears the burden). The burden depends on
   relative elasticities.

## 14. Extension Problem Set

**Problem 1.** Market demand is $Q_D = 80 - P$ and supply is $Q_S = 2P - 20$. Find equilibrium, then
Calculate the new equilibrium after demand increases by $20$ units at every price. Compare the
Change in $P^*$ and $Q^*$.

<details>
<summary>Hint</summary>
Original: $80 - P = 2P - 20 \implies P^* = 33.3$$Q^* = 46.7$. New demand: $Q_D' = 100 - P$. New equilibrium: $100 - P = 2P - 20 \implies P^* = 40$$Q^* = 60$. $\Delta P^* = 6.7$$\Delta Q^* = 13.3$.
</details>

**Problem 2.** A good has PED $= -0.4$. If the price rises by 10%, calculate the percentage change
In quantity demanded and the effect on total revenue.

<details>
<summary>Hint</summary>
$\%\Delta Q_d = \mathrm{PED} \times \%\Delta P = -0.4 \times 10 = -4\%$. Quantity falls by 4%. Since $|\mathrm{PED}| \lt 1$ (inelastic), revenue rises. New $TR = 1.10P \times 0.96Q = 1.056PQ$. Revenue increases by 5.6%.
</details>

**Problem 3.** The government imposes a $£5$ per unit tax on a good with demand $Q_D = 100 - P$ and
Supply $Q_S = 3P - 20$. Calculate the tax incidence and deadweight loss.

<details>
<summary>Hint</summary>
Original: $P^* = 30$$Q^* = 70$. With tax: $Q_S = 3(P_d - 5) - 20 = 3P_d - 35$. New: $100 - P_d = 3P_d - 35 \implies P_d = 33.75$. $P_s = 28.75$. $Q^* = 66.25$. Consumer burden: $3.75$Producer burden: $1.25$. Ratio $= 3$. DWL $= \frac{1}{2} \times 5 \times 3.75 = 9.375$.
</details>

**Problem 4.** A consumer spends $£200$ per month on good $X$ at a price of $£10$. When the price
Rises to $£12$She reduces consumption to 15 units. Calculate PED using the midpoint formula. Is
Demand elastic or inelastic?

<details>
<summary>Hint</summary>
Original quantity $= 200/10 = 20$. PED (midpoint) $= \frac{(15-20)/17.5}{(12-10)/11} = \frac{-0.286}{0.182} = -1.57$. $|\mathrm{PED}| \gt 1$So demand is elastic.
</details>

**Problem 5.** Demand for electric cars is $Q_D = 50 + 0.5Y - 3P$ where $Y$ is income. When $Y = 40$
And $P = 8$Calculate YED and PED. If income rises to $44$By how much does demand change?

<details>
<summary>Hint</summary>
At $Y = 40, P = 8$: $Q_D = 50 + 20 - 24 = 46$. YED $= (\partial Q_D/\partial Y)(Y/Q_D) = 0.5 \times 40/46 = 0.435$ (normal necessity). PED $= (\partial Q_D/\partial P)(P/Q_D) = -3 \times 8/46 = -0.522$ (inelastic). At $Y = 44$: $Q_D = 50 + 22 - 24 = 48$. Increase of 2 units.
</details>

**Problem 6.** "A subsidy on a good with elastic demand and inelastic supply will benefit consumers
More than producers." Evaluate this statement using tax incidence analysis.

<details>
<summary>Hint</summary>
The benefit of a subsidy is distributed in the same way as a tax burden: the more inelastic side receives more benefit. With elastic demand (consumers can switch) and inelastic supply (producers cannot exit), producers receive a larger share of the subsidy benefit. The statement is incorrect: producers benefit more. The price consumers pay falls by less than the price producers receive increases.
</details>

## 15. Advanced Elasticity Applications

### 15.1 Income Elasticity and the Business Cycle

Income elasticity of demand is critical for understanding how different sectors perform during the
business cycle:

**Cyclical goods (YED > 1):** demand rises more than proportionally during booms and falls more
during recessions. Examples: luxury cars, foreign holidays, restaurant meals, airline travel. These
sectors experience amplified fluctuations.

**Defensive goods (0 < YED < 1):** demand is relatively stable across the cycle. Examples: food,
utilities, basic healthcare, public transport. These sectors are less affected by recessions.

**Inferior goods (YED < 0):** demand rises during recessions and falls during booms. Examples:
discount retailers, instant noodles, public transport. These sectors may be counter-cyclical.

**Worked example.** During the 2008-09 recession, UK GDP fell by 6%. Using YED estimates:

- Restaurant demand (YED = 1.5): falls by $1.5 \times 6\% = 9\%$.
- Supermarket food demand (YED = 0.3): falls by $0.3 \times 6\% = 1.8\%$.
- Discount retailer demand (YED = -0.5): rises by $0.5 \times 6\% = 3\%$.

This explains why budget retailers (Aldi, Lidl) grew during the recession while upmarket restaurants
suffered.

### 15.2 Cross-Price Elasticity and Competition Policy

Cross-price elasticity is used by competition authorities to define the relevant market:

**Worked example.** The CMA is investigating a merger between two coffee shop chains. XED between
the two chains' products is estimated at 1.8 (strong substitutes). XED between the chains and
independent coffee shops is 0.3 (weak substitutes). XED between the chains and tea shops is 0.1
(very weak substitutes).

The high XED (1.8) between the two chains suggests they operate in the same relevant market. The
merger would significantly reduce competition. The CMA might block the merger or require remedies
(selling some stores).

The low XED with tea shops (0.1) suggests they are not close substitutes and should not be included
in the relevant market definition.

### 15.3 Elasticity and Total Revenue: Graphical Analysis

**Worked example with linear demand.** A firm faces demand $Q = 100 - 2P$.

Inverse demand: $P = 50 - Q/2$. Revenue: $TR = 50Q - Q^2/2$.

**PED at different points:** At $Q = 25, P = 37.50$: PED $= (37.5/25) \times (-2) = -3.0$ (elastic).
At $Q = 50, P = 25$: PED $= (25/50) \times (-2) = -1.0$ (unit elastic). At $Q = 75, P = 12.50$: PED
$= (12.5/75) \times (-2) = -0.33$ (inelastic).

**TR at different points:** $TR(25) = 50(25) - 625 = 625$. $TR(50) = 50(50) - 1250 = 1250$
(maximum). $TR(75) = 50(75) - 2812.5 = 937.50$.

This confirms: TR is maximised where $|\text{PED}| = 1$ (at the midpoint of the demand curve).

## 16. Exam-Style Questions with Full Mark Schemes

**Question 1 (12 marks).** The government imposes a specific tax of GBP 8 per unit on a good with
demand $Q_D = 200 - 4P$ and supply $Q_S = 4P - 40$. (a) Calculate the new equilibrium price and
quantity. (b) Calculate the consumer and producer burden of the tax. (c) Calculate the deadweight
loss.

<details>
<summary>Full Mark Scheme</summary>
**(a) New equilibrium (4 marks).**
Original equilibrium: $200 - 4P = 4P - 40 \Rightarrow 240 = 8P \Rightarrow P^* = 30$$Q^* = 80$.

With tax: supply shifts to $Q_S = 4(P_d - 8) - 40 = 4P_d - 72$.
$200 - 4P_d = 4P_d - 72 \Rightarrow 272 = 8P_d \Rightarrow P_d = 34$$Q = 64$. $P_s = 34 - 8 = 26$.

**(b) Tax incidence (4 marks).** Consumer burden: $P_d - P^* = 34 - 30 = \text{GBP } 4$ (out of 8).
Producer burden: $P^* - P_s = 30 - 26 = \text{GBP } 4$ (out of 8). Ratio: $1:1$ (equal burden
because demand and supply have equal slopes, hence equal elasticity at the equilibrium).

**(c) Deadweight loss (4 marks).**
$\text{DWL} = \frac{1}{2} \times t \times \Delta Q = \frac{1}{2} \times 8 \times (80 - 64) = \frac{1}{2} \times 8 \times 16 = \text{GBP } 64$.

</details>

**Question 2 (25 marks).** "The price mechanism is the most effective method of resource allocation
in a market economy." Evaluate this statement.

<details>
<summary>Full Mark Scheme</summary>
**Arguments for the price mechanism (10 marks):**
- Signalling: prices convey information about scarcity, quality, and consumer preferences. High prices signal high demand or scarce supply, incentivising production and conservation.
- Incentive: the profit motive drives firms to produce efficiently (minimise costs) and innovate (develop new products).
- Rationing: prices allocate goods to those willing and able to pay the most, which () maximises total surplus.
- Adam Smith's "invisible hand": individuals pursuing self-interest are led, as if by an invisible hand, to promote the social interest.
- First Theorem of Welfare Economics: competitive equilibrium is Pareto efficient (maximises total surplus).

**Arguments against / limitations (10 marks):**

- Market failure: externalities, public goods, information asymmetry, and market power cause the
  price mechanism to misallocate resources.
- Equity concerns: the price mechanism allocates based on willingness to pay, which reflects
  income/wealth, not need or merit. Essential goods (healthcare, education) may be under-consumed by
  the poor.
- Short-run price rigidity: menu costs, contracts, and imperfect information cause prices to adjust
  slowly, leading to persistent disequilibrium.
- Public goods: the price mechanism cannot provide non-excludable, non-rivalrous goods because the
  free-rider problem prevents payment.
- Externalities: the price mechanism ignores external costs and benefits. Pollution is under-priced;
  education is under-consumed.
- Behavioural factors: consumers and firms may not be rational (prospect theory, bounded
  rationality, framing effects).

**Evaluation (5 marks):**

- The price mechanism is highly effective for allocating most goods and services in a market economy
  but is NOT the most effective method for ALL types of goods.
- For private goods in competitive markets, the price mechanism is superior to central planning (as
  demonstrated by the collapse of command economies).
- For public goods, merit goods, and goods with significant externalities, the price mechanism fails
  and government intervention is needed.
- The best approach is a mixed economy: the price mechanism for most allocation, supplemented by
  government intervention to correct market failures and address equity concerns.
- Conclusion: the statement is too absolute. The price mechanism is the most effective method for
ALLOCATIVE EFFICIENCY but not for EQUITY or the provision of public goods.
</details>

**Question 3 (12 marks).** A government is considering imposing a maximum price (price ceiling) of
GBP 5 on a good with demand $Q_D = 100 - 8P$ and supply $Q_S = 4P - 20$. The equilibrium price is
GBP 10. (a) Calculate the shortage created by the price ceiling. (b) Calculate the change in
consumer surplus. (c) Evaluate whether the price ceiling benefits consumers overall.

<details>
<summary>Full Mark Scheme</summary>
**(a) Shortage (4 marks).**
At $P_c = 5$: $Q_D = 100 - 8(5) = 60$$Q_S = 4(5) - 20 = 0$.
The supply is zero at $P = 5$ (below the supply curve intercept of $P = 5$ where $Q_S = 0$).
Actually, supply intercept: $4P - 20 = 0 \Rightarrow P = 5$. So $Q_S = 0$ at the ceiling price.
Shortage $= 60 - 0 = 60$ units. The market completely dries up.

Wait, let me reconsider. The supply curve $Q_S = 4P - 20$ has intercept at $P = 5$. So at
$P_c = 5$$Q_S = 0$. This means the price ceiling is set exactly at the supply intercept, so the
market ceases to function.

For a more interesting case, set $P_c = 7$: $Q_D = 100 - 8(7) = 44$$Q_S = 4(7) - 20 = 8$. Shortage
$= 44 - 8 = 36$ units.

**(b) Change in consumer surplus (4 marks).** Original CS: at $P^* = 10$$Q^* = 100 - 80 = 20$. Choke
price $= 100/8 = 12.5$.
$\text{CS}_{orig} = \int_0^{20} [(12.5 - Q/8) - 10]\,dQ = \int_0^{20} [2.5 - Q/8]\,dQ = [2.5Q - Q^2/16]_0^{20} = 50 - 25 = 25$.

New CS (at $P_c = 7$): quantity traded $= 8$. But only 8 units are available, and demand at
$P_c = 7$ is 44. CS is the area between the demand curve and $P_c = 7$ for $Q = 0$ to $8$:
$\int_0^8 [(12.5 - Q/8) - 7]\,dQ = \int_0^8 [5.5 - Q/8]\,dQ = [5.5Q - Q^2/16]_0^8 = 44 - 4 = 40$.

Change in CS: $40 - 25 = +15$. Consumer surplus INCREASES for those who can still buy the good, but
many consumers (36 out of 44 who want the good at the ceiling price) cannot obtain it. The change in
TOTAL consumer welfare is ambiguous.

**(c) Evaluation (4 marks):**

- Consumers who obtain the good gain (CS increases from 25 to 40).
- Consumers who are excluded from the market lose (they would have bought at $P = 10$ but cannot buy
  at $P = 7$).
- Non-price rationing: those who cannot buy may queue, pay bribes, or accept lower quality. These
  costs are not captured in the CS calculation.
- Producer surplus falls to zero (producers exit the market).
- DWL: $\frac{1}{2}(10 - 7)(20 - 8) = \frac{1}{2}(3)(12) = 18$.
- Conclusion: the price ceiling benefits some consumers but harms others and creates a net welfare
loss. The statement that it "benefits consumers" is misleading without qualification.
</details>

## 10. Extended Worked Examples

### 10.1 Consumer Choice: Indifference Curve Analysis

**Example.** A consumer has a budget of GBP 100 to spend on food ($F$) and clothing ($C$). The price
of food is $P_F = \pounds 5$ and the price of clothing is $P_C = \pounds 10$. The consumer's utility
function is $U = F^{0.5}C^{0.5}$ (Cobb-Douglas).

**Budget constraint:** $5F + 10C = 100 \Rightarrow F = 20 - 2C$.

**Optimal consumption:** $MRS = MU_F/MU_C = \frac{0.5F^{-0.5}C^{0.5}}{0.5F^{0.5}C^{-0.5}} = C/F$.

Set $MRS = P_F/P_C$: $C/F = 5/10 = 0.5 \Rightarrow C = 0.5F$.

Substitute into budget constraint:
$5F + 10(0.5F) = 100 \Rightarrow 5F + 5F = 100 \Rightarrow F = 10$$C = 5$.

**Utility:** $U = (10)^{0.5}(5)^{0.5} = \sqrt{50} = 7.07$.

**Effect of a price change:** Suppose $P_F$ rises from 5 to 8.

New budget constraint: $8F + 10C = 100 \Rightarrow F = 12.5 - 1.25C$.
$MRS = P_F/P_C = 8/10 = 0.8 \Rightarrow C = 0.8F$.
$8F + 10(0.8F) = 100 \Rightarrow 16F = 100 \Rightarrow F = 6.25$$C = 5$.

**Substitution and income effects:**

- Substitution effect: holding utility constant at 7.07, the change in $F$ due to the price ratio
  change. $C = 0.8F$ and $U = F^{0.5}(0.8F)^{0.5} = \sqrt{0.8}F = 7.07 \Rightarrow F = 7.91$.
  Substitution effect: $F$ falls from 10 to 7.91 (a decrease of 2.09).

- Income effect: the price increase reduces real purchasing power. Income effect: $F$ falls from
  7.91 to 6.25 (a decrease of 1.66).

Total effect: $F$ falls from 10 to 6.25 (decrease of 3.75 = 2.09 + 1.66).

Since food is a normal good (income effect reinforces substitution effect), both effects work in the
same direction: less food is consumed when the price rises.

### 10.2 Government Intervention: Agricultural Price Support

**Example.** The EU Common Agricultural Policy (CAP) guarantees a minimum price for wheat. Demand:
$Q_D = 500 - 2P$. Supply: $Q_S = 3P - 100$. The guaranteed price is $\pounds 120$ per tonne.

**Free market equilibrium:**
$500 - 2P = 3P - 100 \Rightarrow 600 = 5P \Rightarrow P = 120$$Q = 260$.

Interesting -- the guaranteed price equals the market equilibrium price. Let me use a lower
guaranteed price to make the example meaningful.

Actually, the guaranteed price is ABOVE the market equilibrium. Let me recalculate with the
guaranteed price at 140.

**Free market:** $P = 120$$Q = 260$ (as above).

**With price floor at 140:** $Q_D = 500 - 280 = 220$. $Q_S = 420 - 100 = 320$. Excess supply:
$320 - 220 = 100$ tonnes. The government must buy 100 tonnes.

**Cost to the government:** $140 \times 100 = \pounds 14\,000$.

**Welfare analysis:** CS before: $\frac{1}{2}(250 - 120)(260) = 16\,900$. (Demand choke price:
$Q = 0 \Rightarrow P = 250$.) CS after: $\frac{1}{2}(250 - 140)(220) = 12\,100$. Change: $-4\,800$.

PS before: $\frac{1}{2}(120 - 33.33)(260) = 11\,267$. (Supply choke:
$Q = 0 \Rightarrow P = 100/3 = 33.33$.) PS after: $\frac{1}{2}(140 - 33.33)(320) = 17\,067$. Change:
$+5\,800$.

Government cost: 14,000. Net welfare change: $-4\,800 + 5\,800 - 14\,000 = -13\,000$.

**Deadweight loss:** The price support creates DWL through two channels:

1. Overproduction: $320 - 260 = 60$ tonnes produced at a cost exceeding the value to consumers. DWL
   $= \frac{1}{2}(140 - 120)(60) = 600$.
2. Underconsumption: $260 - 220 = 40$ tonnes not consumed despite consumer willingness to pay
   exceeding the cost of production. DWL $= \frac{1}{2}(140 - 120)(40) = 400$. Total DWL $= 1000$.

The remaining 12,000 of welfare loss is a pure transfer from taxpayers to producers (via government
purchases). This is not a DWL per se, but it represents a redistribution that may be considered
undesirable on equity grounds.

### 10.3 Multi-Market Analysis: Indirect Taxes and Cross-Price Effects

**Example.** The government imposes a tax on petrol. Petrol demand: $Q_P = 1000 - 5P_P$. Petrol
supply: $Q_P = 4P_P - 200$. The cross-price elasticity between petrol and electric vehicles (EVs) is
$+0.3$. EV demand: $Q_E = 200 + 0.5P_P$ (EV demand increases when petrol price rises).

**Initial petrol equilibrium:**
$1000 - 5P_P = 4P_P - 200 \Rightarrow 1200 = 9P_P \Rightarrow P_P = 133.33$$Q_P = 333.33$.

**Tax of GBP 20 per litre on petrol:** $Q_P = 4(P_P - 20) - 200 = 4P_P - 280$.
$1000 - 5P_P = 4P_P - 280 \Rightarrow 1280 = 9P_P \Rightarrow P_P = 142.22$. Consumers pay 142.22.
Producers receive $142.22 - 20 = 122.22$. $Q_P = 1000 - 5(142.22) = 288.89$.

**Effect on EVs:** Petrol price rises from 133.33 to 142.22
($\% \Delta P_P = (142.22 - 133.33)/133.33 = 6.67\%$).
$\% \Delta Q_E = XED \times \% \Delta P_P = 0.3 \times 6.67 = 2.0\%$. EV demand increases by 2.0%.

**Environmental benefit:** If the average petrol car emits 120g/km of $\text{CO}_2$ and the average
EV emits 0g/km (indirectly), and each car drives 12,000 km/year: $\text{CO}_2$ saved per switched
car $= 120 \times 12000 / 10^6 = 1.44$ tonnes/year.

If 2% of the 333,333 car owners switch: $0.02 \times 333\,333 = 6\,667$ cars switch. Total
$\text{CO}_2$ saved $= 6\,667 \times 1.44 = 9\,600$ tonnes/year.

**Revenue and DWL:** Tax revenue $= 20 \times 288.89 = 5\,778$. DWL
$= \frac{1}{2} \times 20 \times (333.33 - 288.89) = \frac{1}{2} \times 20 \times 44.44 = 444.4$.

**Net environmental benefit:** If the social cost of carbon is GBP 50/tonne:
$9\,600 \times 50 = 480\,000$. Net benefit $= 480\,000 - 444.4 = 479\,556$. The tax generates a
large net social benefit through the EV switching channel, far exceeding the DWL.

### 10.4 Subsidy Analysis with Elasticity

**Example.** The government provides a production subsidy for solar panels. Demand:
$P = 5000 - 0.5Q$. Supply: $P = 2000 + 0.3Q$. The subsidy is GBP 500 per panel.

**Without subsidy:**
$5000 - 0.5Q = 2000 + 0.3Q \Rightarrow 3000 = 0.8Q \Rightarrow Q = 3750$$P = 3125$.

**With subsidy:** Supply shifts down: $P = 1500 + 0.3Q$.
$5000 - 0.5Q = 1500 + 0.3Q \Rightarrow 3500 = 0.8Q \Rightarrow Q = 4375$.

Consumer price: $P_c = 5000 - 0.5(4375) = 2812.5$. Consumers save $3125 - 2812.5 = 312.5$ per panel.
Producer receives: $P_p = 2812.5 + 500 = 3312.5$. Producers gain $3312.5 - 3125 = 187.5$ per panel.

**Incidence:** Consumer share $= 312.5/500 = 62.5\%$. Producer share $= 187.5/500 = 37.5\%$.
Consumers bear a larger share because demand is less elastic than supply:
$PED = -0.5 \times 3125/3750 = -0.417$ (inelastic). $PES = (1/0.3) \times 3125/3750 = 2.78$
(elastic).

**Government cost:** $500 \times 4375 = 2\,187\,500$.

**Positive externality correction:** If the marginal external benefit per solar panel is GBP 600
(reduced pollution, energy security): Social optimum: $MSB = MPB + 500$.
$5000 + 500 - 0.5Q = 2000 + 0.3Q \Rightarrow 3500 = 0.8Q \Rightarrow Q = 4375$.

The subsidy of GBP 500 achieves an output of 4375, which is close to (but not exactly) the social
optimum of 4375. If the MEB were exactly 500, the subsidy would be perfectly set. In this case, the
subsidy slightly under-corrects (optimal subsidy would be 600, not 500). The remaining DWL from
under-correction: $\frac{1}{2}(600 - 500)(Q^*_{MEB=600} - 4375)$. Since the MEB is 600 but the
subsidy is 500, there is still a small under-provision.

**DWL of the subsidy (relative to the first-best):** With MEB = 600 and subsidy = 500: the effective
MPC becomes $2000 + 0.3Q - 500 = 1500 + 0.3Q$. MSB = MPB + MEB = $5000 - 0.5Q + 600 = 5600 - 0.5Q$.
Social optimum: $5600 - 0.5Q = 2000 + 0.3Q \Rightarrow 3600 = 0.8Q \Rightarrow Q^* = 4500$.

The subsidy achieves $Q = 4375$ vs the social optimum of 4500. The remaining DWL:
$DWL = \frac{1}{2}(MSB_{4375} - MSC_{4375})(4500 - 4375)$. $MSB_{4375} = 5600 - 0.5(4375) = 3412.5$.
$MSC_{4375} = 2000 + 0.3(4375) = 3312.5$.
$DWL = \frac{1}{2}(3412.5 - 3312.5)(125) = \frac{1}{2}(100)(125) = 6250$.

The subsidy is close to optimal but not perfect. A subsidy of GBP 600 would be first-best.

## 11. Extended Worked Examples

### 11.1 Market Equilibrium with Multiple Interventions

**Example.** The market for cigarettes has demand $Q_D = 200 - 4P$ and supply $Q_S = 6P - 80$. The
government imposes: (1) a specific tax of GBP 5 per pack, (2) a price floor of GBP 30, and (3) a
maximum production quota of 40 packs.

**Step 1: Free market equilibrium.**
$200 - 4P = 6P - 80 \Rightarrow 280 = 10P \Rightarrow P = 28$$Q = 88$.

**Step 2: With tax only.** $Q_S = 6(P - 5) - 80 = 6P - 110$.
$200 - 4P = 6P - 110 \Rightarrow 310 = 10P \Rightarrow P = 31$ (consumer price). Producer
receives 26. $Q = 200 - 124 = 76$.

**Step 3: With tax AND price floor of 30.** The price floor of 30 is BELOW the consumer price with
tax (31), so the price floor is NOT binding. The equilibrium is the same as Step 2:
$P = 31$$Q = 76$.

If the price floor were 35: consumers pay 35. $Q_D = 200 - 140 = 60$. $Q_S$ at producer price
$= 35 - 5 = 30$: $Q_S = 6(30) - 80 = 100$. Excess supply $= 100 - 60 = 40$. The government would
need to buy 40 packs (costing $40 \times 30 = 1200$).

**Step 4: With tax AND production quota of 40.** The quota restricts supply to 40 units. At
$Q = 40$: demand price $= P_D = (200 - 40)/4 = 40$. Supply price $= P_S = (40 + 80)/6 = 20$. With
tax: producer receives $P_S = P_D - 5 = 35$. But $P_S$ at $Q = 40$ is 20, so producers are willing
to supply at 20 but receive 35. The tax drives a wedge.

Actually, with the quota: supply is fixed at 40. The price is determined by demand: $P_D = 40$.
Producer receives $40 - 5 = 35$. The quota rent is $35 - 20 = 15$ per unit (the difference between
what producers receive and their minimum supply price). Total quota rent $= 15 \times 40 = 600$.

**Combined effect:** The quota (40) is more restrictive than the tax alone (76). The combined policy
results in:

- Higher consumer price (40 vs 31 with tax alone).
- Higher producer revenue per unit (35 vs 26 with tax alone).
- Lower quantity (40 vs 76).
- Quota rent of 600 (captured by whoever holds the quota rights).
- Tax revenue $= 5 \times 40 = 200$ (vs $5 \times 76 = 380$ with tax alone).

**Total government revenue:** tax revenue (200) + quota auction revenue (if quotas are
auctioned, 600) = 800.

**Welfare comparison:**

| Policy      | P consumer |  Q  | CS  |    PS     | Govt revenue | DWL |
| ----------- | :--------: | :-: | :-: | :-------: | :----------: | :-: |
| None        |     28     | 88  | 968 |    361    |      0       |  0  |
| Tax only    |     31     | 76  | 578 |    288    |     380      | 120 |
| Tax + quota |     40     | 40  | 100 | 400 + 600 |     200      | 560 |

The combined tax and quota is highly distortionary: DWL increases from 120 (tax only) to 560 (tax +
quota). The quota is a blunt instrument that creates more DWL than the tax because it prevents the
market from adjusting along the supply curve.

### 11.2 Agricultural Markets: Buffer Stock Scheme

**Example.** The government establishes a buffer stock scheme for wheat. The target price is GBP 200
per tonne. Demand: $Q_D = 1000 - 2P$. Supply: $Q_S = 3P - 200$.

**Free market equilibrium:**
$1000 - 2P = 3P - 200 \Rightarrow 1200 = 5P \Rightarrow P = 240$$Q = 520$.

Since the target price (200) is BELOW the market price (240), the buffer stock is irrelevant -- the
market price is already above the target. The government does not need to intervene.

**If the target price is 280 (above market price):** At $P = 280$: $Q_D = 1000 - 560 = 440$.
$Q_S = 840 - 200 = 640$. Excess supply $= 640 - 440 = 200$ tonnes. The government buys 200 tonnes
and stores them.

**Cost to government:** $280 \times 200 = 56\,000$. Storage cost: GBP 10/tonne/year. Annual storage
cost $= 2000$.

**If a bad harvest reduces supply:** New supply $Q_S = 2P - 100$. New equilibrium:
$1000 - 2P = 2P - 100 \Rightarrow 1100 = 4P \Rightarrow P = 275$$Q = 450$. The market price (275) is
still below the target (280), so the government releases some stocks. Government releases: enough to
push price to 280. At $P = 280$: $Q_D = 440$$Q_S = 460$. Excess supply of 20. The government does
NOT need to release stocks (supply exceeds demand even at the target price).

**If supply falls further:** $Q_S = P$. $1000 - 2P = P \Rightarrow P = 333.33$$Q = 333.33$. Market
price (333.33) is above target (280). The government sells stocks: $Q_D(280) = 440$$Q_S(280) = 80$.
Shortage $= 360$. The government sells 360 tonnes from its buffer stock.

Revenue from sales: $280 \times 360 = 100\,800$.

**Buffer stock balance sheet:**

- Bought: 200 tonnes at 280 = 56,000.
- Sold: 360 tonnes at 280 = 100,800.
- Storage costs: 200 tonnes x 10/tonne x N years.
- Net profit: $100\,800 - 56\,000 - 2000N = 44\,800 - 2000N$.

If stored for 5 years: net profit $= 44\,800 - 10\,000 = 34\,800$. If stored for 22.4 years: net
profit $= 0$.

**Problems with buffer stock schemes:**

1. Expensive: storage costs erode the profit margin.
2. Market distortion: the target price sends the wrong signal to farmers (over-production).
3. Quality deterioration: stored commodities may deteriorate.
4. Political manipulation: governments may set the target price too high to win farmer votes.
5. International trade: buffer stocks may conflict with WTO rules (they are a form of domestic
   support).

**EU Common Agricultural Policy (CAP):** The EU operated a buffer stock scheme from the 1960s to the
1990s. By the 1980s, the "butter mountains" and "wine lakes" had become a political embarrassment.
The scheme was reformed in 1992 (MacSharry reforms) and again in 2003, shifting from price support
to direct income support for farmers.

### 11.3 Black Markets: Price Controls with Enforcement

**Example.** The government imposes a maximum rent of GBP 1,000/month on apartments. The free market
rent is GBP 1,500/month. Demand: $Q_D = 2000 - P$ (where P is monthly rent). Supply:
$Q_S = P - 500$.

**Free market:** $2000 - P = P - 500 \Rightarrow 2500 = 2P \Rightarrow P = 1250$$Q = 750$.

Wait, the free market rent is given as 1500 but the equilibrium gives 1250. Let me adjust the
functions.

Demand: $Q_D = 3000 - P$. Supply: $Q_S = P - 1500$.
$3000 - P = P - 1500 \Rightarrow 4500 = 2P \Rightarrow P = 2250$$Q = 750$.

Hmm, still not matching. Let me just use the given free market equilibrium:

At free market: $P = 1500$$Q = 750$. Demand: $Q_D = a - bP$. $750 = a - 1500b$. Supply:
$Q_S = cP - d$. $750 = 1500c - d$.

Let me use: $Q_D = 2000 - 0.833P$$Q_S = P - 750$. At $P = 1500$:
$Q_D = 750.5 \approx 750$$Q_S = 750$. Good enough.

**With rent control at P = 1000:** $Q_D = 2000 - 833 = 1167$. $Q_S = 1000 - 750 = 250$. Shortage
$= 1167 - 250 = 917$ apartments.

**Black market:** Landlords and tenants may illegally trade at above the controlled price. Suppose
enforcement is imperfect: probability of detection for illegal renting is 20%, and the fine is GBP
5,000.

**Landlord's expected revenue from black market:** If the black market price is $P_b$: Expected
revenue $= P_b \times 0.80 - 5000 \times 0.20 = 0.8P_b - 1000$.

Landlords will participate in the black market if expected revenue exceeds the controlled price:
$0.8P_b - 1000 > 1000 \Rightarrow P_b > 2500$.

At $P_b = 2500$: expected revenue $= 1000$ (same as legal rent). The black market price must exceed
2500 for landlords to participate. This is well above the free market price of 1500, suggesting that
the black market is not profitable for landlords.

But this assumes the fine is 5000 and detection probability is 20%. If the fine is lower (1000) or
detection is less likely (5%):

Expected revenue $= P_b \times 0.95 - 1000 \times 0.05 = 0.95P_b - 50$.
$0.95P_b - 50 > 1000 \Rightarrow P_b > 1105$.

Now the black market price only needs to exceed 1105 for landlords to participate. The black market
would operate at a price between 1105 and 1500 (the free market price).

**With weak enforcement:** approximately $Q_S = 750$ apartments are available (same as free market),
but they trade at $P_b \approx 1400$ (slightly below free market due to the risk premium). Consumers
pay 1400 instead of 1000 (the controlled price). The rent control is entirely ineffective -- the
black market undermines it.

**Key insight:** price controls create black markets unless enforcement is extremely rigorous. The
resources devoted to enforcement (inspections, legal proceedings) are a deadweight loss. In
practice, most economists recommend income support (housing benefit) rather than rent control as a
way to help low-income renters without distorting the market.

## Summary

This topic covers the essential chemistry of demand, supply and equilibrium, including key
reactions, underlying theories, and practical applications.

**Key concepts include:**

- dynamic equilibrium and Le Chatelier's principle
- the equilibrium constant $K_c$ and $K_p$
- the Haber process
- acid-base equilibria and pH
- buffer solutions

Mastery of these concepts requires both theoretical understanding and the ability to apply knowledge
to unfamiliar contexts, particularly in calculation and practical questions.
