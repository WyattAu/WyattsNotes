---
title: Demand, Supply and Equilibrium
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

We define **demand** as the quantity of a good or service that consumers are _willing and able_ to purchase at each possible price during a given time period, _ceteris paribus_.

$$Q_d = f(P, Y, P_s, P_c, T, E, N)$$

where $P$ = price of the good, $Y$ = income, $P_s$ = price of substitutes, $P_c$ = price of complements, $T$ = tastes, $E$ = expectations, $N$ = population.

The **law of demand** states that, ceteris paribus, as price rises, quantity demanded falls. This follows from:

1. **Income effect**: a higher price reduces real purchasing power
2. **Substitution effect**: a higher price makes substitutes relatively more attractive

### 1.2 Deriving Individual Demand from Utility Maximisation

Consider a consumer with utility function $U(x, y)$ facing prices $P_x$, $P_y$ and income $M$. The consumer solves:

$$
\begin{aligned}
\max_{x,y} \quad & U(x, y) \\
\text{s.t.} \quad & P_x \cdot x + P_y \cdot y = M
\end{aligned}
$$

The Lagrangian is:

$$\mathcal{L} = U(x, y) + \lambda(M - P_x \cdot x - P_y \cdot y)$$

First-order conditions:

$$\frac{\partial \mathcal{L}}{\partial x} = \frac{\partial U}{\partial x} - \lambda P_x = 0 \implies \frac{MU_x}{P_x} = \lambda$$

$$\frac{\partial \mathcal{L}}{\partial y} = \frac{\partial U}{\partial y} - \lambda P_y = 0 \implies \frac{MU_y}{P_y} = \lambda$$

Therefore:

$$\frac{MU_x}{MU_y} = \frac{P_x}{P_y} \implies \text{MRS}_{xy} = \frac{P_x}{P_y}$$

This equates the marginal rate of substitution (the consumer's internal valuation) with the price ratio (the market's valuation). Solving for $x$ as a function of $P_x$ (holding other parameters constant) yields the **individual demand curve** $x = d_i(P_x)$.

### 1.3 Market Demand

The **market demand curve** is derived by **horizontal summation** of individual demand curves:

$$Q_D(P) = \sum_{i=1}^{n} d_i(P) = d_1(P) + d_2(P) + \cdots + d_n(P)$$

At each price, we add up the quantities demanded by all consumers.

### 1.4 Movements Along vs Shifts

- **Movement along the demand curve**: caused by a change in the good's _own price_. We move from one point to another _on the same curve_.
- **Shift of the demand curve**: caused by a change in any _determinant other than the good's own price_. The entire curve moves left (decrease in demand) or right (increase in demand).

### 1.5 Determinants of Demand

| Determinant                               | Effect on Demand                                       | Example                                                |
| ----------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------ |
| Income ($\uparrow$)                       | Normal goods: $\uparrow$; Inferior goods: $\downarrow$ | Demand for bus travel falls as income rises (inferior) |
| Price of substitute ($\uparrow$)          | $\uparrow$                                             | Tea demand rises when coffee price rises               |
| Price of complement ($\uparrow$)          | $\downarrow$                                           | Petrol demand falls when car prices rise               |
| Tastes (towards good)                     | $\uparrow$                                             | Health campaigns increase demand for fruit             |
| Expectations of future price ($\uparrow$) | $\uparrow$ (current demand)                            | Consumers stockpile before expected price rise         |
| Population ($\uparrow$)                   | $\uparrow$                                             | UK population growth increases housing demand          |

:::warning Common Pitfall
"A rise in demand" means the _curve shifts right_. "A rise in quantity demanded" means a _movement along the curve_ due to a price change. These are fundamentally different. Examiners penalise imprecise language.
:::

## 2. Supply

### 2.1 Definition

We define **supply** as the quantity of a good or service that producers are _willing and able_ to offer for sale at each possible price during a given time period, _ceteris paribus_.

$$Q_s = g(P, C, T, S, E, n)$$

where $C$ = costs of production, $T$ = technology, $S$ = subsidies/taxes, $E$ = expectations, $n$ = number of firms.

The **law of supply** states that, ceteris paribus, as price rises, quantity supplied rises. This follows from profit maximisation.

### 2.2 Deriving Supply from Profit Maximisation

A firm with cost function $C(Q)$ and facing price $P$ maximises profit:

$$\pi(Q) = P \cdot Q - C(Q)$$

First-order condition:

$$\frac{d\pi}{dQ} = P - C'(Q) = 0 \implies P = MC(Q)$$

where $MC(Q) = C'(Q)$ is marginal cost. Second-order condition requires $C''(Q) > 0$ (MC rising). The **supply curve** of a competitive firm is the portion of its $MC$ curve above the average variable cost (AVC) curve.

$$Q_s(P) = MC^{-1}(P) \quad \text{for } P \geq \min AVC$$

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

We define **market equilibrium** as the price-quantity pair $(P^*, Q^*)$ at which quantity demanded equals quantity supplied:

$$Q_D(P^*) = Q_S(P^*)$$

**Stability proof.** Suppose price $P_1 > P^*$. Then $Q_S(P_1) > Q_D(P_1)$ — there is excess supply (a surplus). Unsold goods pile up, so firms cut prices. As price falls, quantity demanded rises and quantity supplied falls until equilibrium is restored.

Suppose price $P_2 < P^*$. Then $Q_D(P_2) > Q_S(P_2)$ — there is excess demand (a shortage). Consumers bid up prices. As price rises, quantity supplied rises and quantity demanded falls until equilibrium is restored.

Therefore, the equilibrium is **stable**: any deviation sets in motion forces that restore equilibrium. $\blacksquare$

:::tip Exam Technique
When asked to "analyse the effect of X on equilibrium," use the three-step framework:

1. Identify whether X shifts demand or supply (and which direction)
2. Show the shift on a diagram
3. State the new equilibrium price and quantity
4. Evaluate: what if both curves shift simultaneously?
   :::

### 3.2 Price Mechanism (The Invisible Hand)

The price mechanism is the process by which prices adjust to equate demand and supply, thereby allocating resources without central direction. It performs three functions:

1. **Signalling**: prices convey information about scarcity (high price = scarce)
2. **Incentive**: high prices incentivise production, low prices incentivise consumption
3. **Rationing**: prices ration scarce goods to those willing and able to pay

## 4. Elasticity

### 4.1 Price Elasticity of Demand (PED)

We define the **price elasticity of demand** as:

$$\text{PED} = \frac{\%\Delta Q_d}{\%\Delta P} = \frac{\Delta Q_d / Q_d}{\Delta P / P} = \frac{P}{Q_d} \cdot \frac{\Delta Q_d}{\Delta P}$$

Since the demand curve slopes downward, $\text{PED} < 0$. We often state the _absolute value_ $|\text{PED}|$.

**Classification:**

| $          | \text{PED}          | $                         | Description | Interpretation            |
| ---------- | ------------------- | ------------------------- | ----------- | ------------------------- |
| $= 0$      | Perfectly inelastic | Vertical demand curve     |
| $0 <       | \text{PED}          | < 1$                      | Inelastic   | %$\Delta Q$ < %$\Delta P$ |
| $= 1$      | Unit elastic        | %$\Delta Q$ = %$\Delta P$ |
| $1 <       | \text{PED}          | < \infty$                 | Elastic     | %$\Delta Q$ > %$\Delta P$ |
| $= \infty$ | Perfectly elastic   | Horizontal demand curve   |

### 4.2 PED and Total Revenue

**Total revenue** is $TR = P \times Q$.

$$\frac{d(TR)}{dP} = Q + P \cdot \frac{dQ}{dP} = Q\left(1 + \frac{P}{Q} \cdot \frac{dQ}{dP}\right) = Q(1 + \text{PED})$$

Since PED < 0:

- If $|\text{PED}| > 1$ (elastic): $\frac{d(TR)}{dP} < 0$. Price increase $\Rightarrow$ revenue _falls_.
- If $|\text{PED}| < 1$ (inelastic): $\frac{d(TR)}{dP} > 0$. Price increase $\Rightarrow$ revenue _rises_.
- If $|\text{PED}| = 1$ (unit elastic): $\frac{d(TR)}{dP} = 0$. Revenue is _maximised_.

**Proposition: Total revenue is maximised where $|\text{PED}| = 1$.**

_Proof._ We showed $\frac{d(TR)}{dP} = Q(1 + \text{PED})$. Setting $\frac{d(TR)}{dP} = 0$: $1 + \text{PED} = 0$, so $\text{PED} = -1$, i.e., $|\text{PED}| = 1$. The second derivative confirms this is a maximum (for downward-sloping demand). $\blacksquare$

### 4.3 PED Varies Along a Linear Demand Curve

**Proposition:** For a linear demand curve $Q = a - bP$, PED varies from $0$ (at the quantity axis) to $-\infty$ (at the price axis), with $|\text{PED}| = 1$ at the midpoint.

_Proof._ $P = \frac{a - Q}{b}$, so:

$$\text{PED} = \frac{P}{Q} \cdot \frac{dQ}{dP} = \frac{P}{Q} \cdot (-b) = \frac{-bP}{Q} = \frac{-b(a - Q)/b}{Q} = -\frac{a - Q}{Q} = -\frac{a}{Q} + 1$$

At the midpoint, $Q = a/2$: $\text{PED} = -\frac{a}{a/2} + 1 = -1$. As $Q \to 0$ (price axis): $\text{PED} \to -\infty$ (perfectly elastic). As $Q \to a$ (quantity axis): $\text{PED} \to 0$ (perfectly inelastic). $\blacksquare$

### 4.4 Determinants of PED

1. **Availability of substitutes**: more substitutes $\Rightarrow$ more elastic (e.g., bottled water vs insulin)
2. **Proportion of income spent**: larger share $\Rightarrow$ more elastic (e.g., cars vs matches)
3. **Time period**: longer time horizon $\Rightarrow$ more elastic (consumers can adjust behaviour)
4. **Necessity vs luxury**: necessities tend to be inelastic, luxuries elastic
5. **Definition of the market**: narrowly defined markets are more elastic (e.g., "Coca-Cola" vs "soft drinks")

### 4.5 Income Elasticity of Demand (YED)

$$\text{YED} = \frac{\%\Delta Q_d}{\%\Delta Y} = \frac{\Delta Q_d / Q_d}{\Delta Y / Y}$$

| YED         | Type of Good       | Example                            |
| ----------- | ------------------ | ---------------------------------- |
| YED < 0     | Inferior           | Own-brand food, bus travel         |
| 0 < YED < 1 | Normal (necessity) | Bread, electricity                 |
| YED > 1     | Normal (luxury)    | Designer clothes, foreign holidays |

### 4.6 Cross-Price Elasticity of Demand (XED)

$$\text{XED}_{AB} = \frac{\%\Delta Q_A}{\%\Delta P_B}$$

| XED     | Relationship | Example            |
| ------- | ------------ | ------------------ |
| XED > 0 | Substitutes  | Tea and coffee     |
| XED < 0 | Complements  | Petrol and cars    |
| XED = 0 | Unrelated    | Books and tomatoes |

The _magnitude_ of XED indicates the closeness of the relationship — relevant for competition policy (defining the relevant market).

### 4.7 Price Elasticity of Supply (PES)

$$\text{PES} = \frac{\%\Delta Q_s}{\%\Delta P} = \frac{\Delta Q_s / Q_s}{\Delta P / P}$$

**Determinants of PES:**

1. **Time period**: momentary (perfectly inelastic) < short-run < long-run (more elastic)
2. **Spare capacity**: excess capacity $\Rightarrow$ more elastic
3. **Mobility of factors**: easily reallocated factors $\Rightarrow$ more elastic
4. **Ability to store goods**: storable goods $\Rightarrow$ more elastic
5. **Natural constraints**: agricultural supply is inelastic in the short run

## 5. Consumer and Producer Surplus

### 5.1 Definitions

**Consumer surplus** is the difference between what consumers are willing to pay and what they actually pay:

$$CS = \int_0^{Q^*} [P_d(Q) - P^*] \, dQ$$

where $P_d(Q)$ is the inverse demand function (the maximum price consumers will pay for quantity $Q$).

**Producer surplus** is the difference between the price received and the minimum price producers would accept:

$$PS = \int_0^{Q^*} [P^* - P_s(Q)] \, dQ$$

where $P_s(Q)$ is the inverse supply function.

**Total surplus** = $CS + PS$. At competitive equilibrium, total surplus is maximised — this is the **First Theorem of Welfare Economics**.

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

:::info Board-Specific Note
Edexcel (9EC0) emphasises elasticity calculations using the midpoint (arc elasticity) formula: $\text{PED} = \frac{\Delta Q}{\Delta P} \times \frac{(P_1 + P_2)/2}{(Q_1 + Q_2)/2}$. CIE typically uses the point elasticity formula. Check your board's preference.
:::

## 7. Problem Set

**Problem 1.** A consumer has utility $U(x, y) = x^{0.5}y^{0.5}$, income $M = 100$, and faces prices $P_x = 4$, $P_y = 2$. Derive the demand functions for $x$ and $y$. What happens to demand for $x$ if $P_x$ rises to 5?

<details>
<summary>Hint</summary>
<p>
Set up MRS = price ratio: $\frac{y}{x} = \frac{P_x}{P_y} = 2$, so $y = 2x$. Substitute into budget constraint: $4x + 2(2x) = 100 \Rightarrow 8x = 100 \Rightarrow x = 12.5$, $y = 25$. General demand: $x = \frac{M}{2P_x}$, $y = \frac{M}{2P_y}$. At $P_x = 5$: $x = 10$.
</p>
</details>

**Problem 2.** The market demand for good $X$ is $Q_D = 100 - 2P$ and market supply is $Q_S = 20 + 3P$. Find the equilibrium price and quantity. Calculate the consumer and producer surplus at equilibrium.

<details>
<summary>Hint</summary>
<p>
$100 - 2P = 20 + 3P \Rightarrow 80 = 5P \Rightarrow P^* = 16$, $Q^* = 68$. CS = $\int_0^{68} [50 - Q/2 - 16] \, dQ = \int_0^{68} [34 - Q/2] \, dQ = [34Q - Q^2/4]_0^{68} = 2312 - 1156 = 1156$. PS = $\int_0^{68} [16 - (Q - 20)/3] \, dQ = \int_0^{68} [22/3 - Q/3] \, dQ = [22Q/3 - Q^2/6]_0^{68} = 498.67 - 770.67 = \ldots$ Recalculate: inverse supply $P = (Q - 20)/3 + 0 = (Q-20)/3$. PS = $\int_0^{68} [16 - (Q-20)/3] dQ = \int_0^{68} [16 - Q/3 + 20/3] dQ = \int_0^{68} [68/3 - Q/3] dQ = [68Q/3 - Q^2/6]_0^{68} = 1541.33 - 770.67 = 770.67$.
</p>
</details>

**Problem 3.** A linear demand curve passes through points $(P, Q) = (10, 50)$ and $(P, Q) = (20, 30)$. Calculate PED at each point using the point elasticity formula. At what point is $|\text{PED}| = 1$?

<details>
<summary>Hint</summary>
<p>
Demand equation: slope $= \frac{30-50}{20-10} = -2$, so $Q = 70 - 2P$. At $(10, 50)$: PED $= \frac{10}{50} \times (-2) = -0.4$ (inelastic). At $(20, 30)$: PED $= \frac{20}{30} \times (-2) = -1.33$ (elastic). Midpoint: $Q = 35$, $P = 17.5$: PED $= \frac{17.5}{35} \times (-2) = -1$.
</p>
</details>

**Problem 4.** The price of good $A$ rises from £5 to £7, causing quantity demanded of good $B$ to fall from 100 to 80 units. Calculate XED and interpret the relationship between $A$ and $B$.

<details>
<summary>Hint</summary>
<p>
Using midpoint formula: XED $= \frac{(80-100)/90}{(7-5)/6} = \frac{-20/90}{2/6} = \frac{-0.222}{0.333} = -0.667$. Since XED < 0, $A$ and $B$ are complements. The magnitude (0.667) suggests a moderate complement relationship.
</p>
</details>

**Problem 5.** A government imposes a specific tax of £3 per unit on a good with demand $Q_D = 120 - P$ and supply $Q_S = 2P - 30$. Find the new equilibrium, the tax incidence on consumers and producers, and the deadweight loss.

<details>
<summary>Hint</summary>
<p>
With tax, supply shifts up: $P_s = P_d - 3$, so $Q_S = 2(P_d - 3) - 30 = 2P_d - 36$. New equilibrium: $120 - P_d = 2P_d - 36 \Rightarrow 156 = 3P_d \Rightarrow P_d = 52$. $P_s = 49$. $Q^* = 68$. Tax burden on consumers: $52 - 50 = 2$ (out of £3). Tax burden on producers: $50 - 49 = 1$. DWL $= \frac{1}{2} \times 3 \times (70 - 68) = 3$.
</p>
</details>

**Problem 6.** Prove that if demand is perfectly inelastic ($\text{PED} = 0$), the full burden of a specific tax falls on consumers. Prove that if demand is perfectly elastic, the full burden falls on producers.

<details>
<summary>Hint</summary>
<p>
With vertical demand curve, quantity doesn't change. The price consumers pay rises by the full amount of the tax. With horizontal demand curve, consumers are willing to pay only $P^*$. Producers must absorb the entire tax to continue selling.
</p>
</details>

**Problem 7.** A firm's total cost function is $TC = 50 + 10Q + 0.5Q^2$. Derive the supply curve. If the market price is £25, how much will the firm produce?

<details>
<summary>Hint</summary>
<p>
$MC = dTC/dQ = 10 + Q$. Supply curve: $P = MC$ for $P \geq AVC$. $AVC = 10 + 0.5Q$, $\min AVC = 10$ at $Q = 0$. So supply: $Q = P - 10$ for $P \geq 10$. At $P = 25$: $Q = 15$.
</p>
</details>

**Problem 8.** "A firm should always produce at the level where total revenue is maximised." Evaluate this statement.

<details>
<summary>Hint</summary>
<p>
False. A profit-maximising firm produces where $MR = MC$, not where $TR$ is maximised ($MR = 0$). Since $MC > 0$ (typically), the profit-maximising output is lower than the revenue-maximising output. Only if $MC = 0$ would the two coincide.
</p>
</details>

**Problem 9.** When the price of cinema tickets rises from £8 to £10, weekly attendance falls from 500 to 400. Calculate PED. If the cinema raises prices further to £12, and PED remains constant, predict the new attendance. Is this assumption realistic?

<details>
<summary>Hint</summary>
<p>
PED $= \frac{-100/450}{2/9} = \frac{-0.222}{0.222} = -1$ (unit elastic, using midpoints). If PED remains $-1$: $\frac{\%\Delta Q}{\%\Delta P} = -1$. Price rises from 10 to 12 = 20%. So quantity falls by 20%: $Q = 400 \times 0.8 = 320$. The assumption is unrealistic because PED varies along a linear demand curve.
</p>
</details>

**Problem 10.** The government is considering imposing a tax on cigarettes. Using demand and supply analysis, discuss the likely effects on (a) equilibrium price and quantity, (b) consumer surplus, (c) tax revenue, and (d) deadweight loss. In your evaluation, consider the implications of inelastic demand for tax revenue vs the goal of reducing smoking.

<details>
<summary>Hint</summary>
<p>
Cigarettes have inelastic demand (few substitutes, addictive). (a) Price rises substantially, quantity falls modestly. (b) Consumer surplus falls by a large amount (consumers bear most of the tax burden). (c) Tax revenue is high because quantity doesn't fall much. (d) DWL is relatively small (narrow triangle). Evaluation: if the goal is revenue, inelastic goods are ideal for taxation. If the goal is reducing smoking, the tax may be insufficient — complementary policies (education, regulation) may be needed.
</p>
</details>

**Problem 11.** Two goods have demand curves $Q_A = 50 - P_A + 0.5P_B$ and $Q_B = 80 - 2P_B + P_A$. Calculate the cross-price elasticity of demand for good $B$ with respect to the price of $A$ when $P_A = 20$, $P_B = 10$.

<details>
<summary>Hint</summary>
<p>
$\text{XED}_{BA} = \frac{\partial Q_B / \partial P_A \times P_A}{Q_B}$. $\partial Q_B / \partial P_A = 1$. At $P_A = 20$, $P_B = 10$: $Q_B = 80 - 20 + 20 = 80$. XED $= 1 \times 20/80 = 0.25$. Positive, so $A$ and $B$ are weak substitutes.
</p>
</details>

**Problem 12.** Evaluate the usefulness of elasticity concepts for government policymakers. In your answer, discuss the limitations of elasticity estimates in practice.

<details>
<summary>Hint</summary>
<p>
Useful for: tax policy (tax inelastic goods for revenue), subsidy design, price regulation. Limitations: estimates vary with time period and data quality, assume ceteris paribus, may change after policy intervention (endogeneity), difficult to estimate for new goods.
</p>
</details>
