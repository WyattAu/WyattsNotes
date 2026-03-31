---
title: Theory of the Firm
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: theory-of-the-firm
sidebar_position: 4
---

## 1. Costs of Production

### 1.1 Definitions

We define the following cost concepts for a firm producing quantity $Q$:

- **Total cost (TC)**: $TC(Q) = TFC + TVC(Q)$, where TFC = total fixed cost, TVC = total variable cost
- **Average total cost (ATC)**: $ATC = \frac{TC}{Q} = AFC + AVC$
- **Average fixed cost (AFC)**: $AFC = \frac{TFC}{Q}$
- **Average variable cost (AVC)**: $AVC = \frac{TVC}{Q}$
- **Marginal cost (MC)**: $MC = \frac{dTC}{dQ} = \frac{dTVC}{dQ}$

### 1.2 Deriving Costs from the Production Function

In the **short run**, at least one factor of production is fixed (typically capital $K = \bar{K}$). The production function is $Q = f(L, \bar{K})$.

**Law of diminishing marginal returns**: as more of a variable factor (labour) is added to a fixed factor (capital), the marginal product of labour eventually diminishes.

$$MP_L = \frac{dQ}{dL}, \quad \frac{d^2 Q}{dL^2} < 0 \text{ for } L > L^*$$

Since $MC = \frac{dw}{dQ} = \frac{w}{MP_L}$ (where $w$ is the wage rate), diminishing marginal returns ($MP_L$ falling) implies $MC$ is eventually rising.

In the **long run**, all factors are variable. The firm chooses the cost-minimising combination of inputs:

$$
\begin{aligned}
\min_{L,K} \quad & wL + rK \\
\text{s.t.} \quad & Q = f(L, K)
\end{aligned}
$$

The first-order condition gives the **expansion path**: $\frac{MP_L}{w} = \frac{MP_K}{r}$ (equating the marginal product per pound spent on each input).

### 1.3 Economies of Scale

We define **economies of scale** as the condition where long-run average cost (LRAC) falls as output increases:

$$\frac{d(LRAC)}{dQ} < 0$$

**Internal economies of scale:**

| Type         | Mechanism                                                |
| ------------ | -------------------------------------------------------- |
| Technical    | Indivisibilities, increased dimension, linking processes |
| Purchasing   | Bulk-buying discounts                                    |
| Financial    | Lower interest rates for larger firms                    |
| Managerial   | Specialisation of management functions                   |
| Risk-bearing | Diversification of product lines and markets             |

**External economies of scale**: cost advantages arising from the growth of the _industry_ as a whole (e.g., a skilled labour pool, specialised suppliers, knowledge spillovers in Silicon Valley).

**Minimum efficient scale (MES)**: the lowest output at which LRAC is minimised. If MES is large relative to market demand, the market can support only a few firms $\Rightarrow$ natural tendency toward oligopoly or monopoly.

**Diseconomies of scale**: LRAC rises as output increases due to coordination difficulties, communication problems, and alienation in very large organisations.

### 1.4 Relationship Between Short-Run and Long-Run Costs

The **long-run average cost curve** is the envelope of all short-run average cost curves:

$$LRAC(Q) = \min_{K} SRAC(Q; K)$$

At each output level, the firm chooses the plant size (capital stock) that minimises average cost. The LRAC is typically U-shaped, reflecting economies of scale at low output and diseconomies at high output.

## 2. Revenue

### 2.1 Definitions

- **Total revenue**: $TR = P \times Q$
- **Average revenue**: $AR = \frac{TR}{Q} = P$ (AR curve is the demand curve)
- **Marginal revenue**: $MR = \frac{dTR}{dQ}$

### 2.2 Deriving MR from Demand

If demand is $P = a - bQ$, then:

$$TR = P \times Q = aQ - bQ^2$$

$$MR = \frac{dTR}{dQ} = a - 2bQ$$

**Proposition: For a downward-sloping demand curve, $MR < AR$ (i.e., $MR < P$).**

_Proof._ $MR = a - 2bQ < a - bQ = P$ for all $Q > 0$. The MR curve has the same intercept as the demand curve but twice the slope. Intuition: to sell an additional unit, the firm must lower the price on _all_ units sold, not just the marginal unit. The revenue loss on inframarginal units means $MR < P$. $\blacksquare$

For a perfectly competitive firm (price taker), demand is perfectly elastic: $P$ is constant, so $MR = AR = P$.

## 3. Profit Maximisation

### 3.1 Proof Using Calculus

The firm chooses output $Q$ to maximise economic profit:

$$\pi(Q) = TR(Q) - TC(Q)$$

First-order condition:

$$\frac{d\pi}{dQ} = MR - MC = 0 \implies MR = MC$$

Second-order condition (for maximum):

$$\frac{d^2\pi}{dQ^2} = \frac{d(MR)}{dQ} - \frac{d(MC)}{dQ} < 0 \implies MC \text{ cuts MR from below}$$

**Normal profit** is the minimum profit necessary to keep a firm in the industry (included in total cost as _opportunity cost_ of capital). **Economic profit** (supernormal profit) is profit above normal profit.

## 4. Market Structures

### 4.1 Perfect Competition

#### Assumptions

1. Many buyers and sellers (price takers)
2. Homogeneous (identical) product
3. Free entry and exit
4. Perfect information
5. Perfect factor mobility

#### Short-Run Equilibrium

The firm is a price taker: $P = MR = AR$. Profit maximisation: $MR = MC$.

$$P = MC(Q_{SR})$$

- If $P > ATC$: the firm earns supernormal profit ($\pi > 0$)
- If $P = ATC$: the firm earns normal profit ($\pi = 0$)
- If $AVC < P < ATC$: the firm makes a loss but continues producing (covers variable costs and contributes to fixed costs)
- If $P < AVC$: the firm shuts down in the short run ($\pi = -TFC$)

The **firm's short-run supply curve** is the portion of the MC curve above AVC.

#### Long-Run Equilibrium

If firms earn supernormal profit, new firms enter. This shifts the market supply curve right, reducing price until $P = ATC_{min}$. Conversely, if firms make losses, firms exit, supply shifts left, price rises.

$$P = MC = ATC_{min}$$

**Proposition: In long-run perfect competition, firms earn zero economic profit.**

_Proof._ Free entry and exit drive price to the minimum of ATC. At $P = ATC_{min}$, $\pi = TR - TC = P \cdot Q - ATC \cdot Q = 0$. $\blacksquare$

#### Efficiency Properties

- **Allocative efficiency**: $P = MC$ — the price consumers pay equals the marginal cost of production, so resources are allocated to produce the socially optimal quantity
- **Productive efficiency**: $P = ATC_{min}$ — production occurs at minimum cost per unit
- **Dynamic efficiency**: debatable — zero profit may reduce funds for R&D, but competitive pressure may spur innovation

### 4.2 Monopoly

#### Assumptions

1. Single seller (the firm is the industry)
2. No close substitutes
3. High barriers to entry
4. Price maker

#### Sources of Barriers to Entry

- **Natural monopoly**: economies of scale make one large firm cheaper than many small ones
- **Legal barriers**: patents, licences, government-granted monopolies
- **Strategic barriers**: predatory pricing, limit pricing, excess capacity, brand loyalty
- **Control of essential resources**: e.g., De Beers' control of diamond mines

#### Equilibrium

The monopolist faces the market demand curve $P = a - bQ$.

$$MR = a - 2bQ$$

Profit maximisation: $MR = MC$.

$$Q_m : a - 2bQ_m = MC(Q_m)$$
$$P_m = a - bQ_m$$

**Deadweight loss**: The monopolist produces less and charges more than a competitive market.

$$\text{DWL} = \int_{Q_m}^{Q_c} [P(Q) - MC(Q)] \, dQ > 0$$

where $Q_c$ is the competitive output ($P = MC$).

#### Price Discrimination

**Conditions for price discrimination:**

1. The firm must have market power (downward-sloping demand)
2. The firm must be able to identify different consumer groups with different elasticities
3. The firm must be able to prevent arbitrage (resale between groups)

**First-degree (perfect) price discrimination**: the firm charges each consumer their maximum willingness to pay. The firm captures all consumer surplus. Output increases to the competitive level (MR = MC = P at each unit), so allocative efficiency is achieved, but all surplus goes to the producer.

**Second-degree price discrimination**: the firm charges different prices for different _quantities_ (e.g., bulk discounts, block pricing). Consumers self-select into different quantity brackets.

**Third-degree price discrimination**: the firm divides consumers into groups with different PEDs and charges a higher price to the less elastic group.

$$\frac{P_1}{P_2} = \frac{1 - \frac{1}{|\text{PED}_2|}}{1 - \frac{1}{|\text{PED}_1|}}$$

Group with lower $|\text{PED}|$ pays higher price.

<details>
<summary>Example: Third-Degree Price Discrimination</summary>
<p>

A cinema charges £12 for adults and £6 for students. Adult demand: $P_A = 20 - Q_A$, student demand: $P_S = 14 - Q_S$, $MC = 2$.

Adult MR: $MR_A = 20 - 2Q_A$. Set $MR_A = MC$: $20 - 2Q_A = 2 \Rightarrow Q_A = 9$, $P_A = 11$.
Student MR: $MR_S = 14 - 2Q_S$. Set $MR_S = MC$: $14 - 2Q_S = 2 \Rightarrow Q_S = 6$, $P_S = 8$.

Without discrimination (single price, aggregate demand): total demand $Q = Q_A + Q_S = (20 - P) + (14 - P) = 34 - 2P$, so $P = 17 - Q/2$. $MR = 17 - Q$. Set $MR = 2 \Rightarrow Q = 15$, $P = 9.50$.

With discrimination: revenue = $11 \times 9 + 8 \times 6 = 99 + 48 = 147$. Without: $9.50 \times 15 = 142.50$. Discrimination increases profit.

</p>
</details>

#### Natural Monopoly

A natural monopoly exists where LRAC falls continuously over the relevant output range (strong economies of scale). One firm can supply the entire market at lower cost than two or more firms.

$$LRAC(Q_{total}) < \sum_{i} LRAC(Q_i) \quad \text{for any partition } Q_{total} = \sum Q_i$$

Examples: water supply, electricity distribution, railway networks.

**Problem**: if a natural monopoly charges $P = MC$ (allocative efficiency), it makes a loss because $MC < AC$. Regulatory options: average cost pricing ($P = AC$), price cap regulation, public ownership.

### 4.3 Monopolistic Competition

#### Assumptions

1. Many firms
2. Differentiated product (branding, quality, location)
3. Free entry and exit
4. Some market power (due to product differentiation)

#### Equilibrium

**Short run**: like monopoly — the firm faces a downward-sloping demand curve, sets $MR = MC$, and may earn supernormal profit.

**Long run**: free entry eliminates supernormal profit, but $P > MC$ and $P > AC_{min}$.

$$\pi = 0 \implies P = AC$$
$$MR = MC \implies P > MC \text{ (since } MR < P\text{)}$$

**Excess capacity**: the firm produces at an output below the output that minimises AC. The gap between actual output and the minimum efficient scale output is excess capacity — a measure of inefficiency.

$$Q_{MC} < Q_{MES} \quad \text{where } Q_{MES} \text{ minimises AC}$$

### 4.4 Oligopoly

#### Assumptions

1. Few firms (interdependence is key)
2. High barriers to entry
3. Products may be homogeneous or differentiated
4. Firms are aware of their mutual dependence

#### Game Theory: The Prisoner's Dilemma

Two firms (A and B) each choose whether to charge a high price or a low price.

|                   | B: High Price    | B: Low Price    |
| ----------------- | ---------------- | --------------- |
| **A: High Price** | A: £10m, B: £10m | A: £2m, B: £12m |
| **A: Low Price**  | A: £12m, B: £2m  | A: £5m, B: £5m  |

**Nash equilibrium**: each player's strategy is optimal given the other player's strategy. Firm A's dominant strategy: Low Price (regardless of B's choice, A is better off). Same for B. Nash equilibrium: (Low, Low) with payoffs (5, 5).

**Pareto optimal outcome**: (High, High) with payoffs (10, 10) — no other outcome makes both players better off. But neither firm has an incentive to choose High Price unilaterally.

**Proposition: The Nash equilibrium of the prisoner's dilemma is not Pareto optimal.**

_Proof._ At (Low, Low), if both firms switch to High Price, both are better off (£10m > £5m). But each firm individually cannot improve by deviating from Low Price (given the other plays Low). Therefore (Low, Low) is Nash but not Pareto optimal. $\blacksquare$

**Implications**: individual rationality leads to collective suboptimality — explains why firms have difficulty sustaining collusion without enforcement mechanisms.

#### Kinked Demand Curve Model (Sweezy, 1939)

Assumptions:

- If a firm raises its price, competitors _don't follow_ $\Rightarrow$ demand is elastic above current price (the firm loses many customers)
- If a firm lowers its price, competitors _do follow_ $\Rightarrow$ demand is inelastic below current price (the firm gains few customers)

This creates a kink in the demand curve at the current price, and a discontinuity in the MR curve. Result: prices tend to be rigid (sticky) even when costs change, as long as the MC curve passes through the gap in the MR curve.

**Limitation**: the model explains price rigidity but not how the initial price is determined.

#### Collusion and Cartels

**Cartel**: a group of firms acting together as a monopoly to restrict output and raise prices.

**Why cartels are unstable**: each member has an incentive to secretly increase output above the agreed quota (cheating), because the cartel price exceeds each firm's marginal cost. The more members cheat, the lower the price falls, and the cartel collapses.

OPEC is a well-known example: member countries frequently exceed production quotas, causing oil prices to fluctuate.

#### Contestable Markets

A market is **contestable** if there are no barriers to entry or exit. Even with only one firm (monopoly), the _threat_ of entry constrains the incumbent's behaviour.

**Hit-and-run entry**: a new firm enters, captures profit, and exits if the incumbent responds by lowering prices. For this to work, there must be no sunk costs.

**Implication**: in a perfectly contestable market, even a monopoly will charge $P = AC$ (zero economic profit), because any supernormal profit would attract entry.

## 5. Comparative Table of Market Structures

| Feature                   | Perfect Competition      | Monopoly             | Monopolistic Competition  | Oligopoly                  |
| ------------------------- | ------------------------ | -------------------- | ------------------------- | -------------------------- |
| **Number of firms**       | Very many                | One                  | Many                      | Few                        |
| **Product**               | Homogeneous              | Unique               | Differentiated            | Homo./differentiated       |
| **Barriers to entry**     | None                     | Very high            | Low                       | High                       |
| **Price**                 | Taker                    | Maker                | Maker                     | Maker (interdependent)     |
| **Demand curve**          | Perfectly elastic ($P$)  | Market demand        | Downward-sloping          | Downward-sloping (kinked?) |
| **Equilibrium**           | $P = MC = AC_{min}$      | $MR = MC$, $P > MC$  | $P = AC$, $P > MC$        | $MR = MC$, $P > MC$        |
| **LR profit**             | Zero (normal)            | Supernormal          | Zero (normal)             | Possibly supernormal       |
| **Allocative efficiency** | Yes ($P = MC$)           | No ($P > MC$)        | No ($P > MC$)             | No ($P > MC$)              |
| **Productive efficiency** | Yes ($P = AC_{min}$)     | No                   | No (excess capacity)      | No                         |
| **DWL**                   | None                     | Yes                  | Yes                       | Yes                        |
| **Examples**              | Agricultural commodities | National rail, water | Restaurants, hairdressers | Supermarkets, banking, oil |

## 6. Critical Evaluation

### Strengths of the Structure-Conduct-Performance Framework

- Provides a systematic way to analyse different market types
- Predicts efficiency outcomes based on market structure
- Useful for competition policy (identifying markets requiring regulation)

### Limitations

- Real-world markets rarely fit neatly into one category
- The theory focuses on static efficiency — dynamic efficiency (innovation, R&D) may be higher under monopoly (Schumpeterian hypothesis)
- Contestable market theory challenges the structural approach — _behaviour_ matters more than _structure_
- Transaction cost economics (Coase, Williamson) suggests firm boundaries are determined by the relative costs of market transactions vs internal organisation

:::info Board-Specific Note
CIE (9708) requires detailed diagrammatic analysis for each market structure, including short-run and long-run equilibrium diagrams. AQA and Edexcel emphasise evaluation of real-world examples. OCR (A) often asks about the relationship between market structure and efficiency.
:::

## 7. Problem Set

**Problem 1.** A firm has total cost $TC = 100 + 20Q - 5Q^2 + Q^3/3$. Find (a) the output at which diminishing marginal returns set in, (b) the output at which average variable cost is minimised, (c) the output at which average total cost is minimised.

<details>
<summary>Hint</summary>
<p>
(a) $MC = 20 - 10Q + Q^2$. Diminishing returns: $MC$ starts rising, i.e., $MC' = -10 + 2Q = 0 \Rightarrow Q = 5$. (b) $AVC = 20 - 5Q + Q^2/3$. Minimise: $AVC' = -5 + 2Q/3 = 0 \Rightarrow Q = 7.5$. (c) $ATC = 100/Q + 20 - 5Q + Q^2/3$. $ATC' = -100/Q^2 - 5 + 2Q/3 = 0$. Solve numerically: $Q \approx 7.82$.
</p>
</details>

**Problem 2.** A perfectly competitive industry has market demand $Q_D = 500 - 10P$ and each firm has cost function $TC = 50 + 2Q + Q^2$. In the long run, how many firms will there be? What is the market price?

<details>
<summary>Hint</summary>
<p>
LR equilibrium: $P = MC = AC_{min}$. $MC = 2 + 2Q$, $AC = 50/Q + 2 + Q$. Set $MC = AC$: $2 + 2Q = 50/Q + 2 + Q \Rightarrow Q = 50/Q \Rightarrow Q = \sqrt{50} \approx 7.07$. $AC_{min} = 50/7.07 + 2 + 7.07 \approx 16.14$. $P^* = 16.14$. Market demand: $Q_D = 500 - 161.4 = 338.6$. Number of firms: $338.6 / 7.07 \approx 47.9 \approx 48$ firms.
</p>
</details>

**Problem 3.** A monopolist faces demand $P = 100 - 2Q$ and has total cost $TC = 50 + 10Q + Q^2$. Find the profit-maximising price and quantity. Calculate the deadweight loss compared with the competitive outcome.

<details>
<summary>Hint</summary>
<p>
$MR = 100 - 4Q$. $MC = 10 + 2Q$. Set $MR = MC$: $100 - 4Q = 10 + 2Q \Rightarrow Q_m = 15$, $P_m = 70$. Profit $= 70 \times 15 - (50 + 150 + 225) = 1050 - 425 = 625$. Competitive: $P = MC \Rightarrow 100 - 2Q = 10 + 2Q \Rightarrow Q_c = 22.5$, $P_c = 55$. DWL $= \frac{1}{2}(70 - 55)(22.5 - 15) = \frac{1}{2}(15)(7.5) = 56.25$.
</p>
</details>

**Problem 4.** A monopolist can identify two groups of consumers. Group 1 has demand $P_1 = 24 - Q_1$ and Group 2 has demand $P_2 = 16 - Q_2$. Total cost is $TC = 40 + 2(Q_1 + Q_2)$. Find the profit-maximising price and quantity for each group under third-degree price discrimination. Compare total profit with the single-price monopoly outcome.

<details>
<summary>Hint</summary>
<p>
$MR_1 = 24 - 2Q_1 = 2 \Rightarrow Q_1 = 11$, $P_1 = 13$. $MR_2 = 16 - 2Q_2 = 2 \Rightarrow Q_2 = 7$, $P_2 = 9$. Profit $= 13(11) + 9(7) - 40 - 2(18) = 143 + 63 - 40 - 36 = 130$. Without discrimination: aggregate $P = 24 - Q_1 = 16 - Q_2$ for $P \leq 16$, so $Q = Q_1 + Q_2 = (24 - P) + (16 - P) = 40 - 2P$, $P = 20 - Q/2$. $MR = 20 - Q = 2 \Rightarrow Q = 18$, $P = 11$. Profit $= 11(18) - 40 - 36 = 198 - 76 = 122$. Discrimination yields higher profit (£130 vs £122).
</p>
</details>

**Problem 5.** In a monopolistically competitive market, each firm has demand $P = 40 - Q$ and cost $TC = 100 + 10Q + Q^2$. Find the long-run equilibrium price, quantity, and the excess capacity.

<details>
<summary>Hint</summary>
<p>
SR: $MR = 40 - 2Q = MC = 10 + 2Q \Rightarrow 3Q = 30 \Rightarrow Q = 10$, $P = 30$. Profit $= 300 - (100 + 100 + 100) = 0$ (already in LR equilibrium). $AC_{min}$: $AC = 100/Q + 10 + Q$. $AC' = -100/Q^2 + 1 = 0 \Rightarrow Q_{MES} = 10$. Since $Q = Q_{MES}$, there is no excess capacity in this specific case. For excess capacity to arise, the demand curve must be tangent to AC at a point where $Q < Q_{MES}$.
</p>
</details>

**Problem 6.** Two duopolists, Firm A and Firm B, face market demand $P = 100 - Q_A - Q_B$. Both have $MC = 10$. Assuming Cournot competition (each firm chooses output taking the other's output as given), find the Nash equilibrium outputs, price, and profit for each firm.

<details>
<summary>Hint</summary>
<p>
Firm A's reaction function: $\pi_A = (100 - Q_A - Q_B)Q_A - 10Q_A$. FOC: $100 - 2Q_A - Q_B - 10 = 0 \Rightarrow Q_A = 45 - Q_B/2$. By symmetry: $Q_B = 45 - Q_A/2$. Solving: $Q_A = 45 - (45 - Q_A/2)/2 = 45 - 22.5 + Q_A/4 \Rightarrow 3Q_A/4 = 22.5 \Rightarrow Q_A = 30$, $Q_B = 30$. $P = 40$. $\pi_A = \pi_B = 30 \times 30 = 900$. Compare with collusion: $Q = 45$, $P = 55$, profit each = $55 \times 22.5 - 10 \times 22.5 = 1012.5$.
</p>
</details>

**Problem 7.** A natural monopoly has total cost $TC = 200 + 20Q$ and faces demand $P = 100 - Q$. (a) Find the profit-maximising outcome. (b) Find the allocatively efficient outcome. (c) Find the outcome under average cost pricing. (d) Evaluate the trade-offs.

<details>
<summary>Hint</summary>
<p>
(a) Monopoly: $MR = 100 - 2Q = MC = 20 \Rightarrow Q_m = 40$, $P_m = 60$. Profit $= 2400 - 1000 = 1400$. (b) Allocative efficiency: $P = MC \Rightarrow 100 - Q = 20 \Rightarrow Q = 80$, $P = 20$. Loss $= 1600 - 1800 = -200$ (subsidy needed). (c) AC pricing: $P = AC \Rightarrow 100 - Q = 200/Q + 20 \Rightarrow Q(80 - Q) = 200 \Rightarrow 80Q - Q^2 - 200 = 0 \Rightarrow Q \approx 2.56$ or $Q \approx 77.4$. Valid: $Q \approx 77.4$, $P \approx 22.6$. Zero profit. (d) Trade-off: monopoly maximises profit but has DWL; MC pricing is efficient but requires subsidy; AC pricing is a compromise.
</p>
</details>

**Problem 8.** "Monopolies are always harmful to consumer welfare." Evaluate this statement with reference to (a) natural monopolies, (b) innovation incentives, and (c) price discrimination.

<details>
<summary>Hint</summary>
<p>
(a) Natural monopolies: LRAC falls over relevant range, so a competitive market with many small firms would have *higher* costs. Regulation (price caps) can capture some monopoly benefits. (b) Schumpeterian argument: monopoly profits fund R&D; patent monopolies incentivise innovation. Counter: monopolies may also be complacent. (c) First-degree price discrimination increases output to competitive level (allocative efficiency), but all surplus goes to producer. Third-degree discrimination increases total output compared to single-price monopoly.
</p>
</details>

**Problem 9.** Explain why the kinked demand curve model predicts price rigidity but cannot explain how the initial price is determined. How does game theory provide a more complete analysis of oligopoly pricing?

<details>
<summary>Hint</summary>
<p>
The kinked demand curve takes the current price as given and analyses reactions to price changes. It doesn't explain the level of that initial price. Game theory provides a more complete framework: the initial price may be set by historical factors, collusion, or a focal point. Repeated games show that collusion can be sustained as a Nash equilibrium if the discount factor is high enough (the threat of future punishment deters cheating).
</p>
</details>

**Problem 10.** "The theory of perfect competition is irrelevant because no real market satisfies all its assumptions." Discuss this criticism.

<details>
<summary>Hint</summary>
<p>
For: perfect competition is an idealised model — no market has infinitely many firms, perfect information, or zero transaction costs. Against: the model provides a benchmark for efficiency, helps identify sources of market failure, and many markets approximate perfect competition (agricultural commodities, foreign exchange). The value of a model is not realism of assumptions but predictive power and explanatory insight (Friedman's methodology).
</p>
</details>

**Problem 11.** A firm in monopolistic competition spends £50,000 on advertising. This shifts demand from $P = 50 - Q$ to $P = 60 - Q$ without changing costs ($TC = 200 + 10Q + Q^2$). Is advertising profitable? What are the welfare implications?

<details>
<summary>Hint</summary>
<p>
Without advertising: $MR = 50 - 2Q = 10 + 2Q \Rightarrow Q = 10$, $P = 40$. Profit $= 400 - 400 = 0$ (LR equilibrium). With advertising: $MR = 60 - 2Q = 10 + 2Q \Rightarrow Q = 12.5$, $P = 47.5$. Profit $= 593.75 - 456.25 - 50 = 87.5$. Advertising is profitable. Welfare: output increases from 10 to 12.5 (closer to social optimum), but consumers face higher price. The advertising itself may be a wasteful arms race (if all firms advertise, demand shifts back).
</p>
</details>

**Problem 12.** Evaluate the argument that "the best policy towards monopoly is to break it up into many small competing firms." Under what circumstances might this policy be counterproductive?

<details>
<summary>Hint</summary>
<p>
Counterproductive for natural monopolies: breaking up would destroy economies of scale, raising costs for consumers. Also problematic where monopoly arises from innovation (patents): breaking up reduces R&D incentives. May be appropriate where monopoly stems from anti-competitive behaviour (mergers, predatory pricing) rather than natural cost advantages. Consider contestable markets as an alternative: maintain single firm but eliminate entry barriers.
</p>
</details>
