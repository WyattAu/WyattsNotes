---
title: Theory of the Firm
description:
  'A-Level Economics notes on Theory of the Firm: 1. Costs of Production; 1.1 Definitions; 1.2
  Deriving Costs from the Production Function; 1.3 Economies of Scale.'
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

- **Total cost (TC)**: $TC(Q) = TFC + TVC(Q)$Where TFC = total fixed cost, TVC = total variable cost
- **Average total cost (ATC)**: $ATC = \frac{TC}{Q} = AFC + AVC$
- **Average fixed cost (AFC)**: $AFC = \frac{TFC}{Q}$
- **Average variable cost (AVC)**: $AVC = \frac{TVC}{Q}$
- **Marginal cost (MC)**: $MC = \frac{dTC}{dQ} = \frac{dTVC}{dQ}$

### 1.2 Deriving Costs from the Production Function

In the **short run**, at least one factor of production is fixed ( capital $K = \bar{K}$). The
production function is $Q = f(L, \bar{K})$.

**Law of diminishing marginal returns**: as more of a variable factor (labour) is added to a fixed
Factor (capital), the marginal product of labour eventually diminishes.

$$MP_L = \frac{dQ}{dL}, \quad \frac{d^2 Q}{dL^2} < 0 \mathrm{ for } L > L^*$$

Since $MC = \frac{dw}{dQ} = \frac{w}{MP_L}$ (where $w$ is the wage rate), diminishing marginal
Returns ($MP_L$ falling) implies $MC$ is eventually rising.

In the **long run**, all factors are variable. The firm chooses the cost-minimising combination of
Inputs:

$$
\begin{aligned}
\min_{L,K} \quad & wL + rK \\
\mathrm{s.t.} \quad & Q = f(L, K)
\end{aligned}
$$

The first-order condition gives the **expansion path**: $\frac{MP_L}{w} = \frac{MP_K}{r}$ (equating
The marginal product per pound spent on each input).

### 1.3 Economies of Scale

We define **economies of scale** as the condition where long-run average cost (LRAC) falls as output
Increases:

$$\frac{d(LRAC)}{dQ} < 0$$

**Internal economies of scale:**

| Type         | Mechanism                                                |
| ------------ | -------------------------------------------------------- |
| Technical    | Indivisibilities, increased dimension, linking processes |
| Purchasing   | Bulk-buying discounts                                    |
| Financial    | Lower interest rates for larger firms                    |
| Managerial   | Specialisation of management functions                   |
| Risk-bearing | Diversification of product lines and markets             |

**External economies of scale**: cost advantages arising from the growth of the _industry_ as a
Whole (e.g., a skilled labour pool, specialised suppliers, knowledge spillovers in Silicon Valley).

**Minimum efficient scale (MES)**: the lowest output at which LRAC is minimised. If MES is large
Relative to market demand, the market can support only a few firms $\Rightarrow$ natural tendency
Toward oligopoly or monopoly.

**Diseconomies of scale**: LRAC rises as output increases due to coordination difficulties,
Communication problems, and alienation in very large organisations.

### 1.4 Relationship Between Short-Run and Long-Run Costs

The **long-run average cost curve** is the envelope of all short-run average cost curves:

$$LRAC(Q) = \min_{K} SRAC(Q; K)$$

At each output level, the firm chooses the plant size (capital stock) that minimises average cost.
The LRAC is U-shaped, reflecting economies of scale at low output and diseconomies at high Output.

## 2. Revenue

### 2.1 Definitions

- **Total revenue**: $TR = P \times Q$
- **Average revenue**: $AR = \frac{TR}{Q} = P$ (AR curve is the demand curve)
- **Marginal revenue**: $MR = \frac{dTR}{dQ}$

### 2.2 Deriving MR from Demand

If demand is $P = a - bQ$Then:

$$TR = P \times Q = aQ - bQ^2$$

$$MR = \frac{dTR}{dQ} = a - 2bQ$$

**Proposition: For a downward-sloping demand curve, $MR < AR$ (i.e., $MR < P$).**

_Proof._ $MR = a - 2bQ < a - bQ = P$ for all $Q > 0$. The MR curve has the same intercept as the
Demand curve but twice the slope. Intuition: to sell an additional unit, the firm must lower the
Price on _all_ units sold, not just the marginal unit. The revenue loss on inframarginal units means
$MR < P$. $\blacksquare$

For a perfectly competitive firm (price taker), demand is perfectly elastic: $P$ is constant, so
$MR = AR = P$.

## 3. Profit Maximisation

### 3.1 Proof Using Calculus

The firm chooses output $Q$ to maximise economic profit:

$$\pi(Q) = TR(Q) - TC(Q)$$

First-order condition:

$$\frac◆LB◆d\pi◆RB◆◆LB◆dQ◆RB◆ = MR - MC = 0 \implies MR = MC$$

Second-order condition (for maximum):

$$\frac◆LB◆d^2\pi◆RB◆◆LB◆dQ^2◆RB◆ = \frac{d(MR)}{dQ} - \frac{d(MC)}{dQ} < 0 \implies MC \mathrm{ cuts MR from below}$$

**Normal profit** is the minimum profit necessary to keep a firm in the industry (included in total
Cost as _opportunity cost_ of capital). **Economic profit** (supernormal profit) is profit above
Normal profit.

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
- If $AVC < P < ATC$: the firm makes a loss but continues producing (covers variable costs and
  contributes to fixed costs)
- If $P < AVC$: the firm shuts down in the short run ($\pi = -TFC$)

The **firm's short-run supply curve** is the portion of the MC curve above AVC.

#### Long-Run Equilibrium

If firms earn supernormal profit, new firms enter. This shifts the market supply curve right,
Reducing price until $P = ATC_{min}$. Conversely, if firms make losses, firms exit, supply shifts
Left, price rises.

$$P = MC = ATC_{min}$$

**Proposition: In long-run perfect competition, firms earn zero economic profit.**

_Proof._ Free entry and exit drive price to the minimum of ATC. At $P = ATC_{min}$
$\pi = TR - TC = P \cdot Q - ATC \cdot Q = 0$. $\blacksquare$

#### Efficiency Properties

- **Allocative efficiency**: $P = MC$ — the price consumers pay equals the marginal cost of
  production, so resources are allocated to produce the socially optimal quantity
- **Productive efficiency**: $P = ATC_{min}$ — production occurs at minimum cost per unit
- **Dynamic efficiency**: debatable — zero profit may reduce funds for R&D, but competitive pressure
  may spur innovation

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

$$Q_m : a - 2bQ_m = MC(Q_m)$$ $$P_m = a - bQ_m$$

**Deadweight loss**: The monopolist produces less and charges more than a competitive market.

$$\mathrm{DWL} = \int_{Q_m}^{Q_c} [P(Q) - MC(Q)] \, dQ > 0$$

Where $Q_c$ is the competitive output ($P = MC$).

#### Price Discrimination

**Conditions for price discrimination:**

1. The firm must have market power (downward-sloping demand)
2. The firm must be able to identify different consumer groups with different elasticities
3. The firm must be able to prevent arbitrage (resale between groups)

**First-degree (perfect) price discrimination**: the firm charges each consumer their maximum
Willingness to pay. The firm captures all consumer surplus. Output increases to the competitive
Level (MR = MC = P at each unit), so allocative efficiency is achieved, but all surplus goes to the
Producer.

**Second-degree price discrimination**: the firm charges different prices for different _quantities_
(e.g., bulk discounts, block pricing). Consumers self-select into different quantity brackets.

**Third-degree price discrimination**: the firm divides consumers into groups with different PEDs
And charges a higher price to the less elastic group.

$$\frac{P_1}{P_2} = \frac◆LB◆1 - \frac{1}{|\mathrm{PED}_2|}◆RB◆◆LB◆1 - \frac{1}{|\mathrm{PED}_1|}◆RB◆$$

Group with lower $|\mathrm{PED}|$ pays higher price.

<details>
<summary>Example: Third-Degree Price Discrimination</summary>
A cinema charges £12 for adults and £6 for students. Adult demand: $P_A = 20 - Q_A$Student demand:
$P_S = 14 - Q_S$$MC = 2$.

Adult MR: $MR_A = 20 - 2Q_A$. Set $MR_A = MC$: $20 - 2Q_A = 2 \Rightarrow Q_A = 9$$P_A = 11$.
Student MR: $MR_S = 14 - 2Q_S$. Set $MR_S = MC$: $14 - 2Q_S = 2 \Rightarrow Q_S = 6$$P_S = 8$.

Without discrimination (single price, aggregate demand): total demand
$Q = Q_A + Q_S = (20 - P) + (14 - P) = 34 - 2P$So $P = 17 - Q/2$. $MR = 17 - Q$. Set
$MR = 2 \Rightarrow Q = 15$$P = 9.50$.

With discrimination: revenue = $11 \times 9 + 8 \times 6 = 99 + 48 = 147$. Without:
$9.50 \times 15 = 142.50$. Discrimination increases profit.

</details>

**Real-world examples of price discrimination:**

- **Airlines**: Third-degree discrimination between business and leisure travellers. Business
  travellers have inelastic demand (flights are booked close to departure, often by employers).
  Leisure travellers book early and are price-sensitive. Airlines also use **yield management**
  (second-degree) — the same seat may sell for GBP 50 or GBP 500 depending on when it is booked,
  whether it is refundable, and whether baggage is included.
- **Software and digital goods**: Near-zero marginal cost makes price discrimination extremely
  profitable. Microsoft offers Windows in Home, Pro, and Enterprise editions at very different
  prices, despite the marginal cost of an additional download being negligible. Student discounts
  exploit differences in PED.
- **Uber surge pricing**: Second-degree discrimination based on real-time demand elasticity. When
  demand spikes (rain, events), the algorithm raises prices — consumers with inelastic demand still
  ride, while price-sensitive consumers wait or use alternatives.

**Evaluation of price discrimination**: The welfare effects depend on the type. First-degree
Discrimination eliminates consumer surplus entirely but achieves allocative efficiency (output
Equals the competitive level). Third-degree discrimination _may_ increase total output compared to
Single-price monopoly, but it also redistributes surplus from consumers with inelastic demand to the
Firm. A strong evaluation point: price discrimination can be **pro-competitive** if it enables a
Firm to enter a market that would otherwise be unprofitable (e.g., cross-subsidy between market
Segments). However, it raises equity concerns — poorer consumers ( more price-elastic) may Benefit
from lower prices, while less elastic groups face higher prices.

:::info Board-Specific Note Edexcel (A) often asks students to evaluate whether price discrimination
Always reduces consumer welfare — the key is to recognise that _some_ consumers (the elastic group)
May face lower prices. CIE (9708) requires calculation of profit under single-price vs
Discriminatory pricing. AQA Paper 2 frequently features questions on the ethics and fairness of
Price discrimination. OCR (A) may ask about the conditions necessary for each type of price
Discrimination to be feasible. :::

#### Natural Monopoly

A natural monopoly exists where LRAC falls continuously over the relevant output range (strong
Economies of scale). One firm can supply the entire market at lower cost than two or more firms.

$$LRAC(Q_{total}) < \sum_{i} LRAC(Q_i) \quad \mathrm{for any partition } Q_{total} = \sum Q_i$$

Examples: water supply, electricity distribution, railway networks.

**Problem**: if a natural monopoly charges $P = MC$ (allocative efficiency), it makes a loss because
$MC \lt AC$. Regulatory options: average cost pricing ($P = AC$), price cap regulation, public
Ownership.

:::info Info Regulators, including RPI-X price cap regulation. Edexcel requires understanding of how
regulation Can create **X-inefficiency** — the monopoly has no incentive to minimise costs if the
regulator allows cost-plus pricing. CIE (9708) often asks students to compare **public ownership vs
Regulation** using efficiency criteria. OCR (A) focuses on the principal-agent problem between
Regulator and firm (information asymmetry). :::

**Real-world example: UK water industry.** Thames Water and other regional water companies are
Natural monopolies covering specific geographic areas — it would be deeply inefficient to run
Multiple pipe networks through the same streets. Ofwat regulates prices using the RPI-X formula
(prices can rise by RPI inflation minus an efficiency factor X). However, the 2023-2024 crisis at
Thames Water (debt of GBP 14 billion, sewage discharge failures) illustrates the limits of
Regulatory oversight when firms are privately owned but provide essential public services.

**Real-world example: Tech monopolies.** Google controls approximately 92% of the UK search engine
Market, and Apple's App Store charges a 30% commission on digital sales — both cases where **network
Effects** create enormous barriers to entry. The European Commission's Digital Markets Act (2024)
Designates such firms as "gatekeepers" and mandates interoperability with third-party app stores.
This raises the evaluation point: does regulation of tech monopolies promote competition, or does it
Reduce the incentive to invest in platform quality?

**Evaluation of monopoly**: On balance, monopolies are most harmful when they arise from
**anti-competitive conduct** rather than superior efficiency. A monopoly achieved through genuine
Innovation (e.g., a pharmaceutical patent) may generate dynamic benefits that outweigh static
Deadweight loss. The critical question for exam answers is always: _does this monopoly exist because
It is efficient, or because it has successfully blocked competition?_

### 4.3 Monopolistic Competition

#### Assumptions

1. Many firms
2. Differentiated product (branding, quality, location)
3. Free entry and exit
4. Some market power (due to product differentiation)

#### Equilibrium

**Short run**: like monopoly — the firm faces a downward-sloping demand curve, sets $MR = MC$And May
earn supernormal profit.

**Long run**: free entry eliminates supernormal profit, but $P > MC$ and $P > AC_{min}$.

$$\pi = 0 \implies P = AC$$ $$MR = MC \implies P > MC \mathrm{ (since } MR < P\mathrm{)}$$

**Excess capacity**: the firm produces at an output below the output that minimises AC. The gap
Between actual output and the minimum efficient scale output is excess capacity — a measure of
Inefficiency.

$$Q_{MC} < Q_{MES} \quad \mathrm{where } Q_{MES} \mathrm{ minimises AC}$$

**Evaluation of monopolistic competition**: While the model predicts excess capacity and allocative
Inefficiency ($P > MC$), it has important strengths that are often underemphasised in exam answers.
Product differentiation generates **consumer choice and variety** — the value of having multiple
Restaurants, coffee shops, or clothing brands may exceed the deadweight loss from pricing above
Marginal cost. Additionally, the competitive pressure of free entry drives firms to innovate in
Product quality and branding (dynamic efficiency). The advertising expenditure that characterises
Monopolistic competition can be seen as wasteful (persuasive advertising shifts demand rather than
Informs), but it can also be informative (reducing search costs for consumers). A balanced exam
Answer should conclude that monopolistic competition is a realistic model that captures the
Trade-off between efficiency and variety.

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

**Nash equilibrium**: each player's strategy is optimal given the other player's strategy. Firm A's
Dominant strategy: Low Price (regardless of B's choice, A is better off). Same for B. Nash
Equilibrium: (Low, Low) with payoffs (5, 5).

**Pareto optimal outcome**: (High, High) with payoffs (10, 10) — no other outcome makes both players
Better off. But neither firm has an incentive to choose High Price unilaterally.

**Proposition: The Nash equilibrium of the prisoner's dilemma is not Pareto optimal.**

_Proof._ At (Low, Low), if both firms switch to High Price, both are better off (£10m > £5m). But
Each firm individually cannot improve by deviating from Low Price (given the other plays Low).
Therefore (Low, Low) is Nash but not Pareto optimal. $\blacksquare$

**Implications**: individual rationality leads to collective suboptimality — explains why firms have
Difficulty sustaining collusion without enforcement mechanisms.

#### Repeated Games and the Tit-for-Tat Strategy

The static prisoner's dilemma predicts that collusion always fails. However, in the **real world**,
Oligopolists interact repeatedly over many years. In an infinitely repeated game (or one with an
Uncertain end date), the **threat of future punishment** can sustain cooperation.

Consider the discount factor $\delta \in (0, 1)$Which represents how much firms value future Profits
relative to current profits. If both firms play **tit-for-tat** (cooperate in the first Round, then
copy the opponent's previous action), collusion is sustainable if:

$$(\mathrm{Gain from cheating today}) \lt (\mathrm{Loss from future punishment})$$

More : if firms are sufficiently patient ($\delta$ is close to 1), the long-run gains From
cooperation outweigh the short-run temptation to cheat. This explains why OPEC has maintained
Periods of effective output restriction despite the incentive to cheat.

**Real-world application: supermarket pricing in the UK.** Tesco, Sainsbury's, Asda, and Morrisons
Operate in a tight oligopoly with a combined market share of approximately 68%. The rise of Aldi and
Lidl (which grew from approximately 5% to over 17% market share between 2010 and 2024) has
Intensified competitive pressure. The incumbent supermarkets must balance cooperation (avoiding a
Destructive price war that destroys margins for all) against competition (matching Aldi's lower
Prices to retain customers). This is a repeated game where the "punishment" for not matching prices
Is loss of market share to discounters.

:::info Board-Specific Note AQA and Edexcel require students to explain how repeated interaction
Differs from a one-shot game in sustaining collusion. CIE (9708) may ask students to construct a
Payoff matrix and identify dominant strategies. OCR (A) has recently included questions on whether
The prisoner's dilemma applies to real-world oligopolies where firms can communicate — a key
Evaluation point. :::

#### Kinked Demand Curve Model (Sweezy, 1939)

Assumptions:

- If a firm raises its price, competitors _don't follow_ $\Rightarrow$ demand is elastic above
  current price (the firm loses many customers)
- If a firm lowers its price, competitors _do follow_ $\Rightarrow$ demand is inelastic below
  current price (the firm gains few customers)

This creates a kink in the demand curve at the current price, and a discontinuity in the MR curve.
Result: prices tend to be rigid (sticky) even when costs change, as long as the MC curve passes
Through the gap in the MR curve.

**Limitation**: the model explains price rigidity but not how the initial price is determined.

**Evaluation of the kinked demand curve**: While empirically relevant (prices in oligopolistic
Markets do tend to be sticky — e.g., the price of a pint of milk changed very little between 2015
And 2022 despite cost fluctuations), the model has been largely superseded by game-theoretic
Approaches. A strong evaluation point for exams: the kinked demand curve assumes asymmetric
Reactions (competitors follow price cuts but not price rises), but in reality firms may also follow
Price rises if costs have increased across the industry (e.g., energy cost increases post-2021).
This makes the model overly rigid in its assumptions.

#### Collusion and Cartels

**Cartel**: a group of firms acting together as a monopoly to restrict output and raise prices.

**Why cartels are unstable**: each member has an incentive to secretly increase output above the
Agreed quota (cheating), because the cartel price exceeds each firm's marginal cost. The more
Members cheat, the lower the price falls, and the cartel collapses.

OPEC is a well-known example: member countries frequently exceed production quotas, causing oil
Prices to fluctuate.

**Real-world example: the UK energy market.** The "Big Six" energy suppliers (British Gas, EDF,
E.ON, Npower, Scottish Power, SSE — now reduced through mergers to the "Big Five") operated as an
Effective oligopoly in UK residential energy supply for decades. Despite apparent competition, price
Changes were highly correlated — when one firm raised prices, others followed within weeks (tacit
Collusion rather than explicit agreement). The entry of smaller challenger suppliers (Octopus
Energy, Bulb before its collapse) increased contestability. However, the 2021-2022 energy crisis
Exposed the vulnerability of smaller firms — 29 UK energy suppliers collapsed between September 2021
And November 2022 because they could not hedge against the wholesale gas price spike. This
Illustrates a critical evaluation point: **barriers to entry in oligopoly are not always obvious** —
The need for working capital and hedging capacity acts as a significant barrier even where
Regulation nominally encourages entry.

**Evaluation of collusion**: Tacit collusion is extremely difficult to prove legally because firms
Independently arrive at similar pricing strategies without any formal agreement. The Competition and
Markets Authority (CMA) can prosecute explicit cartel agreements under the Competition Act 1998
(fines of up to 10% of global turnover) and the Enterprise Act 2002 (criminal penalties including
Imprisonment for individuals). However, the effectiveness of competition policy depends on the
Regulator's resources and information — asymmetric information between the CMA and firms is a
Persistent problem.

#### Contestable Markets

A market is **contestable** if there are no barriers to entry or exit. Even with only one firm
(monopoly), the _threat_ of entry constrains the incumbent's behaviour.

**Hit-and-run entry**: a new firm enters, captures profit, and exits if the incumbent responds by
Lowering prices. For this to work, there must be no sunk costs.

**Implication**: in a perfectly contestable market, even a monopoly will charge $P = AC$ (zero
Economic profit), because any supernormal profit would attract entry.

**Conditions for contestability:**

- No sunk costs (all costs are recoverable on exit)
- No legal barriers (licences, patents)
- Low consumer switching costs
- Access to the same technology as the incumbent

**Evaluation of contestable market theory**: The theory provides a powerful critique of the
Traditional structure-conduct-performance paradigm — it suggests that market _conduct_ (and threat
Of entry) matters more than the number of firms. However, the assumption of zero sunk costs is
Extremely restrictive. In practice, most industries involve significant sunk costs: a new airline
Needs aircraft, airport slots, and brand recognition; a new energy supplier needs regulatory
Approval and IT systems. The theory is therefore most applicable to markets with relatively low
Capital requirements, such as **taxi services** (before Uber, local taxi licensing created barriers;
Uber's platform model dramatically increased contestability by reducing sunk costs for drivers) and
**online retail**.

**Example**: The UK bus market after deregulation (1985 Transport Act) was intended to be highly
Contestable — new operators could enter any route. In practice, the incumbent operator often had
Advantages (depots, driver knowledge, existing contracts), and many routes remained de facto
Monopolies. This illustrates the gap between theoretical contestability and real-world outcomes.

:::info Board-Specific Note CIE (9708) frequently asks students to explain the difference between
Contestable and competitive markets — the key distinction is that a contestable market may have only
One firm but behaves as if competitive due to the threat of entry. AQA Paper 1 has included 25-mark
Questions on the extent to which UK supermarket markets are contestable. OCR (A) requires
Understanding of sunk costs as the key barrier to contestability. :::

## 5. Comparative Table of Market Structures

| Feature                   | Perfect Competition      | Monopoly             | Monopolistic Competition  | Oligopoly                  |
| ------------------------- | ------------------------ | -------------------- | ------------------------- | -------------------------- |
| **Number of firms**       | Very many                | One                  | Many                      | Few                        |
| **Product**               | Homogeneous              | Unique               | Differentiated            | Homo./differentiated       |
| **Barriers to entry**     | None                     | Very high            | Low                       | High                       |
| **Price**                 | Taker                    | Maker                | Maker                     | Maker (interdependent)     |
| **Demand curve**          | Perfectly elastic ($P$)  | Market demand        | Downward-sloping          | Downward-sloping (kinked?) |
| **Equilibrium**           | $P = MC = AC_{min}$      | $MR = MC$$P > MC$    | $P = AC$$P > MC$          | $MR = MC$$P > MC$          |
| **LR profit**             | Zero (normal)            | Supernormal          | Zero (normal)             | Possibly supernormal       |
| **Allocative efficiency** | Yes ($P = MC$)           | No ($P > MC$)        | No ($P > MC$)             | No ($P > MC$)              |
| **Productive efficiency** | Yes ($P = AC_{min}$)     | No                   | No (excess capacity)      | No                         |
| **DWL**                   | None                     | Yes                  | Yes                       | Yes                        |
| **Examples**              | Agricultural commodities | National rail, water | Restaurants, hairdressers | Supermarkets, banking, oil |

:::info Board-Specific Note All boards require the comparative table but differ in emphasis. AQA
Focuses on the link between market structure and **economic efficiency**, often asking students to
Evaluate which structure is most efficient. Edexcel (A) requires analysis of how market structures
Affect **consumer and producer surplus**. CIE (9708) expects students to draw diagrams for each
Structure and annotate efficiency losses. OCR (A) frequently asks about **real-world markets that
Fall between categories** (e.g., is Amazon a monopoly or oligopoly?). :::

## 6. Critical Evaluation

### Strengths of the Structure-Conduct-Performance Framework

- Provides a systematic way to analyse different market types
- Predicts efficiency outcomes based on market structure
- Useful for competition policy (identifying markets requiring regulation)

### Limitations

- Real-world markets rarely fit neatly into one category
- The theory focuses on static efficiency — dynamic efficiency (innovation, R&D) may be higher under
  monopoly (Schumpeterian hypothesis)
- Contestable market theory challenges the structural approach — _behaviour_ matters more than
  _structure_
- Transaction cost economics (Coase, Williamson) suggests firm boundaries are determined by the
  relative costs of market transactions vs internal organisation

### Dynamic Efficiency vs Static Efficiency

A critical evaluation theme across all exam boards is the trade-off between **static efficiency**
(productive and allocative efficiency at a point in time) and **dynamic efficiency** (improvements
In technology, products, and processes over time).

**The Schumpeterian hypothesis** argues that large firms with market power are better positioned to
Innovate because:

- Supernormal profits fund R&D investment
- Large firms can spread the risk of innovation across a diversified product portfolio
- Patents (which create temporary monopoly power) are specifically designed to reward innovation

**Counter-arguments:**

- Competitive markets may innovate more because firms _must_ innovate to survive (the "innovation
  stimulus" of competition)
- Monopolists may become complacent — X-inefficiency (Leibenstein, 1966) arises when firms lack
  competitive pressure to minimise costs
- Empirical evidence is mixed: small startups are responsible for many disruptive innovations (e.g.,
  Dyson, Deliveroo), but large firms dominate R&D spending (Amazon invested USD 73 billion in R&D
  in 2023)

**Exam technique**: When evaluating market structures, always consider both static and dynamic
Efficiency. A strong conclusion might be: "Perfect competition maximises static efficiency but may
Underprovide dynamic efficiency; monopoly does the reverse. The optimal market structure depends on
Whether the industry is characterised by rapid technological change (where dynamic efficiency is
Paramount) or stable technology (where static efficiency dominates)."

### The Role of Behavioural Economics

Traditional theory of the firm assumes profit maximisation. Behavioural economics challenges this:

- **Satisficing** (Simon, 1955): managers may not maximise profit but instead aim for a
  "satisfactory" level of performance. This is particularly relevant in oligopoly where objectives
  may include market share, revenue growth, or managerial prestige.
- **Principal-agent problem**: in large corporations, shareholders (principals) cannot perfectly
  monitor managers (agents). Managers may pursue their own objectives (empire-building, higher
  salaries) rather than maximising shareholder profit. This is a form of market failure within the
  firm itself.
- **Loss aversion**: firms may react asymmetrically to price changes — cutting prices reluctantly
  but matching competitors' cuts quickly (consistent with the kinked demand curve, but explained by
  psychology rather than game theory).

:::info Board-Specific Note AQA Paper 2 (25-mark essay questions) frequently requires students to
Debate whether firms really maximise profit — behavioural objections are high-scoring evaluation
Points. CIE (9708) does not formally require behavioural economics but rewards students who mention
Satisficing as an alternative objective. Edexcel includes the principal-agent problem in its
Specification for market failure topics. :::

:::info Board-Specific Note CIE (9708) requires detailed diagrammatic analysis for each market
Structure, including short-run and long-run equilibrium diagrams. AQA and Edexcel emphasise
Evaluation of real-world examples. OCR (A) often asks about the relationship between market
Structure and efficiency. :::

## 7. Problem Set

**Problem 1.** A firm has total cost $TC = 100 + 20Q - 5Q^2 + Q^3/3$. Find (a) the output at which
Diminishing marginal returns set in, (b) the output at which average variable cost is minimised, (c)
The output at which average total cost is minimised.

<details>
<summary>Hint</summary>
(a) $MC = 20 - 10Q + Q^2$. Diminishing returns: $MC$ starts rising, i.e., $MC' = -10 + 2Q = 0 \Rightarrow Q = 5$. (b) $AVC = 20 - 5Q + Q^2/3$. Minimise: $AVC' = -5 + 2Q/3 = 0 \Rightarrow Q = 7.5$. (c) $ATC = 100/Q + 20 - 5Q + Q^2/3$. $ATC' = -100/Q^2 - 5 + 2Q/3 = 0$. Solve numerically: $Q \approx 9.25$.
</details>

**Problem 2.** A perfectly competitive industry has market demand $Q_D = 500 - 10P$ and each firm
Has cost function $TC = 50 + 2Q + Q^2$. In the long run, how many firms will there be? What is the
Market price?

<details>
<summary>Hint</summary>
LR equilibrium: $P = MC = AC_{min}$. $MC = 2 + 2Q$$AC = 50/Q + 2 + Q$. Set $MC = AC$: $2 + 2Q = 50/Q + 2 + Q \Rightarrow Q = 50/Q \Rightarrow Q = \sqrt{50} \approx 7.07$. $AC_{min} = 50/7.07 + 2 + 7.07 \approx 16.14$. $P^* = 16.14$. Market demand: $Q_D = 500 - 161.4 = 338.6$. Number of firms: $338.6 / 7.07 \approx 47.9 \approx 48$ firms.
</details>

**Problem 3.** A monopolist faces demand $P = 100 - 2Q$ and has total cost $TC = 50 + 10Q + Q^2$.
Find the profit-maximising price and quantity. Calculate the deadweight loss compared with the
Competitive outcome.

<details>
<summary>Hint</summary>
$MR = 100 - 4Q$. $MC = 10 + 2Q$. Set $MR = MC$: $100 - 4Q = 10 + 2Q \Rightarrow Q_m = 15$$P_m = 70$. Profit $= 70 \times 15 - (50 + 150 + 225) = 1050 - 425 = 625$. Competitive: $P = MC \Rightarrow 100 - 2Q = 10 + 2Q \Rightarrow Q_c = 22.5$$P_c = 55$. DWL $= \frac{1}{2}(70 - 55)(22.5 - 15) = \frac{1}{2}(15)(7.5) = 56.25$.
</details>

**Problem 4.** A monopolist can identify two groups of consumers. Group 1 has demand
$P_1 = 24 - Q_1$ and Group 2 has demand $P_2 = 16 - Q_2$. Total cost is $TC = 40 + 2(Q_1 + Q_2)$.
Find the profit-maximising price and quantity for each group under third-degree price
Discrimination. Compare total profit with the single-price monopoly outcome.

<details>
<summary>Hint</summary>
$MR_1 = 24 - 2Q_1 = 2 \Rightarrow Q_1 = 11$$P_1 = 13$. $MR_2 = 16 - 2Q_2 = 2 \Rightarrow Q_2 = 7$$P_2 = 9$. Profit $= 13(11) + 9(7) - 40 - 2(18) = 143 + 63 - 40 - 36 = 130$. Without discrimination: aggregate $P = 24 - Q_1 = 16 - Q_2$ for $P \leq 16$So $Q = Q_1 + Q_2 = (24 - P) + (16 - P) = 40 - 2P$$P = 20 - Q/2$. $MR = 20 - Q = 2 \Rightarrow Q = 18$$P = 11$. Profit $= 11(18) - 40 - 36 = 198 - 76 = 122$. Discrimination yields higher profit (£130 vs £122).
</details>

**Problem 5.** In a monopolistically competitive market, each firm has demand $P = 40 - Q$ and cost
$TC = 100 + 10Q + Q^2$. Find the long-run equilibrium price, quantity, and the excess capacity.

<details>
<summary>Hint</summary>
SR: $MR = 40 - 2Q = MC = 10 + 2Q \Rightarrow 3Q = 30 \Rightarrow Q = 10$$P = 30$. Profit $= 300 - (100 + 100 + 100) = 0$ (already in LR equilibrium). $AC_{min}$: $AC = 100/Q + 10 + Q$. $AC' = -100/Q^2 + 1 = 0 \Rightarrow Q_{MES} = 10$. Since $Q = Q_{MES}$There is no excess capacity in this specific case. For excess capacity to arise, the demand curve must be tangent to AC at a point where $Q < Q_{MES}$.
</details>

**Problem 6.** Two duopolists, Firm A and Firm B, face market demand $P = 100 - Q_A - Q_B$. Both
Have $MC = 10$. Assuming Cournot competition (each firm chooses output taking the other's output as
Given), find the Nash equilibrium outputs, price, and profit for each firm.

<details>
<summary>Hint</summary>
Firm A's reaction function: $\pi_A = (100 - Q_A - Q_B)Q_A - 10Q_A$. FOC: $100 - 2Q_A - Q_B - 10 = 0 \Rightarrow Q_A = 45 - Q_B/2$. By symmetry: $Q_B = 45 - Q_A/2$. Solving: $Q_A = 45 - (45 - Q_A/2)/2 = 45 - 22.5 + Q_A/4 \Rightarrow 3Q_A/4 = 22.5 \Rightarrow Q_A = 30$$Q_B = 30$. $P = 40$. $\pi_A = \pi_B = 30 \times 30 = 900$. Compare with collusion: $Q = 45$$P = 55$Profit each = $55 \times 22.5 - 10 \times 22.5 = 1012.5$.
</details>

**Problem 7.** A natural monopoly has total cost $TC = 200 + 20Q$ and faces demand $P = 100 - Q$.
(a) Find the profit-maximising outcome. (b) Find the allocatively efficient outcome. (c) Find the
Outcome under average cost pricing. (d) Evaluate the trade-offs.

<details>
<summary>Hint</summary>
(a) Monopoly: $MR = 100 - 2Q = MC = 20 \Rightarrow Q_m = 40$$P_m = 60$. Profit $= 2400 - 1000 = 1400$. (b) Allocative efficiency: $P = MC \Rightarrow 100 - Q = 20 \Rightarrow Q = 80$$P = 20$. Loss $= 1600 - 1800 = -200$ (subsidy needed). (c) AC pricing: $P = AC \Rightarrow 100 - Q = 200/Q + 20 \Rightarrow Q(80 - Q) = 200 \Rightarrow 80Q - Q^2 - 200 = 0 \Rightarrow Q \approx 2.56$ or $Q \approx 77.4$. Valid: $Q \approx 77.4$$P \approx 22.6$. Zero profit. (d) Trade-off: monopoly maximises profit but has DWL; MC pricing is efficient but requires subsidy; AC pricing is a compromise.
</details>

**Problem 8.** "Monopolies are always harmful to consumer welfare." Evaluate this statement with
Reference to (a) natural monopolies, (b) innovation incentives, and (c) price discrimination.

<details>
<summary>Hint</summary>
(a) Natural monopolies: LRAC falls over relevant range, so a competitive market with many small firms would have *higher* costs. Regulation (price caps) can capture some monopoly benefits. (b) Schumpeterian argument: monopoly profits fund R&D; patent monopolies incentivise innovation. Counter: monopolies may also be complacent. (c) First-degree price discrimination increases output to competitive level (allocative efficiency), but all surplus goes to producer. Third-degree discrimination increases total output compared to single-price monopoly.
</details>

**Problem 9.** Explain why the kinked demand curve model predicts price rigidity but cannot explain
How the initial price is determined. How does game theory provide a more complete analysis of
Oligopoly pricing?

<details>
<summary>Hint</summary>
The kinked demand curve takes the current price as given and analyses reactions to price changes. It doesn't explain the level of that initial price. Game theory provides a more complete framework: the initial price may be set by historical factors, collusion, or a focal point. Repeated games show that collusion can be sustained as a Nash equilibrium if the discount factor is high enough (the threat of future punishment deters cheating).
</details>

**Problem 10.** "The theory of perfect competition is irrelevant because no real market satisfies
All its assumptions." Discuss this criticism.

<details>
<summary>Hint</summary>
For: perfect competition is an idealised model — no market has infinitely many firms, perfect information, or zero transaction costs. Against: the model provides a benchmark for efficiency, helps identify sources of market failure, and many markets approximate perfect competition (agricultural commodities, foreign exchange). The value of a model is not realism of assumptions but predictive power and explanatory insight (Friedman's methodology).
</details>

**Problem 11.** A firm in monopolistic competition spends £50,000 on advertising. This shifts demand
From $P = 50 - Q$ to $P = 60 - Q$ without changing costs ($TC = 200 + 10Q + Q^2$). Is advertising
Profitable? What are the welfare implications?

<details>
<summary>Hint</summary>
Without advertising: $MR = 50 - 2Q = 10 + 2Q \Rightarrow Q = 10$$P = 40$. Profit $= 400 - 400 = 0$ (LR equilibrium). With advertising: $MR = 60 - 2Q = 10 + 2Q \Rightarrow Q = 12.5$$P = 47.5$. Profit $= 593.75 - 456.25 - 50 = 87.5$. Advertising is profitable. Welfare: output increases from 10 to 12.5 (closer to social optimum), but consumers face higher price. The advertising itself may be a wasteful arms race (if all firms advertise, demand shifts back).
</details>

**Problem 12.** Evaluate the argument that "the best policy towards monopoly is to break it up into
Many small competing firms." Under what circumstances might this policy be counterproductive?

<details>
<summary>Hint</summary>
Counterproductive for natural monopolies: breaking up would destroy economies of scale, raising costs for consumers. Also problematic where monopoly arises from innovation (patents): breaking up reduces R&D incentives. May be appropriate where monopoly stems from anti-competitive behaviour (mergers, predatory pricing) rather than natural cost advantages. Consider contestable markets as an alternative: maintain single firm but eliminate entry barriers.
</details>

**Problem 13.** A tech platform operates as a two-sided market: it connects app developers with
Smartphone users. The platform charges developers a commission of 30% on each sale but charges users
GBP 0 to download the app. Explain this pricing strategy using the concept of cross-subsidy. Why
Might regulators be concerned about this business model?

<details>
<summary>Hint</summary>
This is an example of third-degree price discrimination combined with **network effects**. Users have highly elastic demand (many free alternatives), so the platform charges them nothing to maximise the user base. Developers have inelastic demand (they need access to the platform's users), so the platform extracts surplus via commissions. The cross-subsidy means users are subsidised by developers. Regulators (e.g., the European Commission under the Digital Markets Act) are concerned because: (a) the 30% commission may be excessive (monopoly pricing), (b) developers cannot pass the full cost to consumers, (c) the platform's control over app distribution creates barriers to entry for competing platforms. Evaluation: the commission also funds platform security, app review, and infrastructure — it is not pure surplus extraction.
</details>

**Problem 14.** Two firms in a duopoly can choose to invest in R&D or not. The payoffs (profit in
Millions of GBP) are shown below. Identify the Nash equilibrium and discuss why the outcome may
Differ in a repeated game.

|               | B: Invest in R&D | B: No R&D    |
| ------------- | ---------------- | ------------ |
| **A: Invest** | A: 8, B: 8       | A: 15, B: 2  |
| **A: No R&D** | A: 2, B: 15      | A: 10, B: 10 |

<details>
<summary>Hint</summary>
Nash equilibrium: (Invest, Invest) — this is the **only** Nash equilibrium. If A invests, B's best response is to invest (8 > 2). If B invests, A's best response is to invest (8 > 2). (No R&D, No R&D) is NOT a Nash equilibrium because either firm can deviate to Invest and earn 15. This is an inverted prisoner's dilemma — cooperation (both investing) is also the dominant strategy, unlike the pricing prisoner's dilemma where defection is dominant. In a repeated game, the outcome is even more likely to be (Invest, Invest) because firms that fail to invest will lose market share permanently. Evaluation: in practice, firms may underinvest in R&D if they cannot appropriate the full returns (knowledge spillovers), which is a justification for government R&D subsidies.
</details>

**Problem 15.** The UK supermarket industry has seen significant merger activity. The CMA blocked
The proposed merger between Sainsbury's and Asda in 2019. Using game theory and the concept of
Contestable markets, evaluate the CMA's decision.

<details>
<summary>Hint</summary>
The CMA's rationale: the merger would have reduced the number of "big four" supermarkets from four to three, reducing competitive pressure and potentially raising prices. The Herfindahl-Hirschman Index (HHI) would have increased significantly. Game theory supports this: fewer firms means the temptation to collude (tacitly) increases, and monitoring cheating becomes easier. Contestable market theory provides a counter-argument: the threat of entry from Aldi, Lidl, and online grocery (Ocado, Amazon Fresh) constrains pricing behaviour even with fewer incumbents. The CMA ultimately concluded that Aldi and Lidl were not yet close enough substitutes (different product ranges, store locations) to fully offset the loss of competition. Evaluation: the CMA's decision may need revisiting as Aldi and Lidl continue to expand their product ranges and market share.
</details>

**Problem 16.** A monopolist has the option to engage in limit pricing (charging a price below the
Short-run profit-maximising level to deter entry). The firm faces potential entry from a competitor
With identical costs. Using the concept of contestable markets, analyse under what conditions limit
Pricing is a rational strategy. Why might limit pricing fail in practice?

<details>
<summary>Hint</summary>
Limit pricing is rational when: (a) the long-run gain from maintaining monopoly power (higher future profits) exceeds the short-run sacrifice (lower current profits from charging below the monopoly price), (b) the incumbent has a cost advantage or better information than the potential entrant (asymmetric information about demand or costs), (c) there are significant sunk costs for the entrant, making hit-and-run entry difficult. Limit pricing may fail because: (a) the entrant may interpret the low price as a sign of weak demand rather than a threat, (b) the incumbent cannot credibly commit to maintaining the low price if the entrant does enter (the incumbent would rationally raise prices after the entrant's sunk costs are sunk), (c) predatory pricing (limit pricing pushed below average variable cost) is illegal under UK and EU competition law. Evaluation: contestable market theory suggests that if there are no sunk costs, the mere *threat* of entry achieves the same outcome as limit pricing without the incumbent needing to actually lower its price.
</details>

:::

:::

:::

:::

:::

:::

:::

:::danger Common Pitfalls

- **Confusing MR with AR (price):** For a firm facing a downward-sloping demand curve, MR is always
  LESS than price (AR). The MR curve has twice the slope of the demand curve. The only exception is
  perfect competition, where MR = AR = P because the firm is a price taker.

- **Stating that monopolies always earn supernormal profit:** A monopoly can make losses if demand
  is insufficient. The monopoly profit-maximising condition (MR = MC) determines output and price,
  but whether profit is positive depends on whether price exceeds average total cost at that output.

- **Confusing economies of scale with the law of diminishing returns:** Economies of scale are a
  LONG-RUN concept (all factors variable, LRAC falls). Diminishing returns are a SHORT-RUN concept
  (at least one factor fixed, MC eventually rises). They operate over different time horizons and
  are not opposites.

- **Misidentifying the shutdown condition in the short run:** A firm should shut down if price falls
  below AVERAGE VARIABLE COST (AVC), not below average total cost (ATC). If P > AVC but P < ATC, the
  firm makes a loss but should continue producing because it covers variable costs and contributes
  to fixed costs.

:::

## 8. Advanced Market Structure Analysis

### 8.1 Revenue Diagrams for Each Market Structure

**Perfect competition:**

Revenue relationships:

- $P = MR = AR$ (perfectly elastic demand at the market price)
- $TR = P \times Q$ (linear, upward-sloping from origin)
- $AR = P$ (horizontal line at market price)
- $MR = P$ (same horizontal line)

Since $P = MR$Total revenue is maximised by producing as much as possible (subject to cost
constraints). There is no tension between revenue and profit maximisation.

**Monopoly:**

Revenue relationships with linear demand $P = a - bQ$:

- $AR = a - bQ$ (downward-sloping demand curve)
- $MR = a - 2bQ$ (steeper downward-sloping, same intercept)
- $TR = aQ - bQ^2$ (inverted-U parabola, maximised at $Q = a/(2b)$)

Key insight: TR is maximised at $MR = 0$Which gives $Q = a/(2b)$ and $P = a/2$. But profit
maximisation requires $MR = MC$Which gives a LOWER output and HIGHER price. The profit-maximising
firm always produces less than the revenue-maximising level.

**Monopolistic competition:**

Revenue relationships are similar to monopoly (downward-sloping demand), but the demand curve is
more elastic because of product differentiation and the presence of close substitutes.

- $AR = a - bQ$ (downward-sloping, flatter than monopoly)
- $MR = a - 2bQ$ (steeper, same intercept)
- Long-run equilibrium: $P > MC$ (allocatively inefficient) but $P = AC$ (zero economic profit)

### 8.2 Profit/Revenue Calculations: Comprehensive Worked Examples

**Example 1: Perfect Competition.**

A perfectly competitive firm has $TC = 200 + 10Q + 0.5Q^2$. Market price $P = 40$.

**Profit maximisation:** $P = MC \Rightarrow 40 = 10 + Q \Rightarrow Q = 30$.
$AC = 200/30 + 10 + 0.5(30) = 6.67 + 10 + 15 = 31.67$.
$\pi = (40 - 31.67) \times 30 = 8.33 \times 30 = \pounds 250$.

**Producer surplus:**
$PS = \int_0^{30} [40 - (10 + 0.5Q)]\,dQ = \int_0^{30} [30 - 0.5Q]\,dQ = [30Q - 0.25Q^2]_0^{30} = 900 - 225 = \pounds 675$.

**Example 2: Monopoly with Price Discrimination (full calculation).**

A monopolist has two markets. Market 1: $P_1 = 50 - Q_1$. Market 2: $P_2 = 30 - 0.5Q_2$.
$TC = 100 + 2(Q_1 + Q_2)$.

**Third-degree price discrimination:** Market 1:
$MR_1 = 50 - 2Q_1 = 2 \Rightarrow Q_1 = 24$$P_1 = 26$.
$\pi_1 = 26 \times 24 - 100 - 48 = 624 - 148 = \pounds 476$.

Market 2: $MR_2 = 30 - Q_2 = 2 \Rightarrow Q_2 = 28$$P_2 = 16$.
$\pi_2 = 16 \times 28 - 56 - 100 = 448 - 156 = \pounds 292$.

Total profit with discrimination: $476 + 292 = \pounds 768$.

**Single-price monopoly:** Total demand: for
$P \leq 30$$Q = Q_1 + Q_2 = (50 - P) + (60 - 2P) = 110 - 3P$. For $30 < P \leq 50$$Q = 50 - P$ (only
Market 1 is active).

At $P = 30$: $Q = 110 - 90 = 20$. $MR = 110/3 - 2Q/3$ (for $Q \leq 20$). Set $MR = MC$:
$110/3 - 2Q/3 = 2 \Rightarrow 110 - 2Q = 6 \Rightarrow Q = 52$.

But $Q = 52$ is only valid if $P \leq 30$: $P = 110/3 - 52/3 = 58/3 = 19.33 \leq 30$. Valid.

Single-price: $Q = 52$$P = 19.33$.
$\pi = 19.33 \times 52 - 100 - 104 = 1005.16 - 204 = \pounds 801.16$.

In this case, single pricing yields higher profit than discrimination because the aggregation
creates a kink in the demand curve. The result depends on the specific demand functions.

### 8.3 Efficiency Comparison Across Market Structures

| Efficiency Type             | Perfect Competition        | Monopoly                   | Monopolistic Competition           | Oligopoly                      |
| --------------------------- | -------------------------- | -------------------------- | ---------------------------------- | ------------------------------ |
| Allocative ($P = MC$)       | Yes                        | No ($P > MC$)              | No ($P > MC$)                      | No ($P > MC$))                 |
| Productive ($P = AC_{min}$) | Yes                        | No                         | No (excess capacity)               | No                             |
| Dynamic (innovation)        | Debated                    | Potentially high           | Moderate (product differentiation) | Potentially high (R&D rivalry) |
| X-efficiency                | Yes (competitive pressure) | No (no competitive threat) | Moderate                           | Moderate                       |
| Consumer surplus            | Maximum                    | Reduced (DWL)              | Reduced but some variety gain      | Reduced                        |
| DWL                         | Zero                       | Positive                   | Positive (smaller)                 | Positive                       |

**Key evaluation points:**

1. **Static vs dynamic efficiency trade-off**: Perfect competition maximises static efficiency but
   may underinvest in R&D (no supernormal profits to fund innovation). Monopoly may sacrifice static
   efficiency for dynamic efficiency (Schumpeterian hypothesis).

2. **Product variety as a welfare gain**: Monopolistic competition is allocatively inefficient
   ($P > MC$) but creates product variety. The value of variety to consumers may partially or fully
   offset the DWL. If consumers value having 10 types of restaurant, the welfare gain from variety
   may exceed the welfare loss from pricing above marginal cost.

3. **Contestability matters**: Even a monopoly with high barriers to entry may behave efficiently if
   the THREAT of entry is credible. Contestable market theory suggests that the number of firms
   matters less than the ease of entry.

## 9. Exam-Style Questions with Full Mark Schemes

**Question 1 (25 marks).** "Monopolies are always harmful to economic welfare." Evaluate this
statement with reference to natural monopolies, innovation, and price discrimination.

<details>
<summary>Full Mark Scheme</summary>
**Arguments that monopolies are harmful (10 marks):**
- Allocative inefficiency: $P > MC$ means the monopolist produces less than the socially optimal quantity. DWL $= \int_{Q_m}^{Q_c} [P(Q) - MC(Q)]\,dQ > 0$.
- Productive inefficiency: the monopolist may not produce at minimum AC (X-inefficiency: lack of competitive pressure to minimise costs).
- Distributive inefficiency: supernormal profits transfer surplus from consumers to producers. This is particularly concerning when the monopoly arises from anti-competitive behaviour rather than genuine efficiency.
- Reduced consumer choice: monopoly limits the variety of products available.
- Higher prices: consumers pay more than under competition.
- Empirical evidence: the CMA estimates that anti-competitive practices cost UK consumers billions of pounds annually.

**Arguments that monopolies may be beneficial (10 marks):**

- Natural monopoly: if LRAC falls over the relevant output range, a single firm produces at lower
  cost than multiple firms. Breaking up a natural monopoly would INCREASE costs. Regulation (price
  caps, RPI-X) can capture the efficiency benefits while constraining prices.
- Innovation (Schumpeterian hypothesis): supernormal profits fund R&D investment. Patents create
  temporary monopoly power to reward innovation. Without patent protection, firms would underinvest
  in R&D because they cannot capture the full returns. Examples: pharmaceutical industry (patents
  reward the development of new drugs); technology sector (Apple, Google invest billions in R&D).
- Price discrimination: can increase total output (closer to the competitive level), improve
  allocative efficiency (first-degree), and enable the firm to cross-subsidise (charging lower
  prices to elastic groups).
- Economies of scale: large firms can achieve lower costs through bulk purchasing, financial
  economies, and technological advantages.

**Evaluation (5 marks):**

- The statement is too absolute. Monopolies arising from genuine efficiency advantages (natural
  monopoly, innovation) may generate net welfare benefits.
- The critical question is: WHY does the monopoly exist? If it exists because the firm is the most
  efficient producer, the welfare costs may be small. If it exists because of anti-competitive
  behaviour (predatory pricing, mergers that reduce competition), the welfare costs are large.
- Policy response: regulation (price caps, merger control) is superior to breaking up monopolies
  that are natural or innovative.
- Conclusion: monopolies are most harmful when they arise from anti-competitive conduct rather than
superior efficiency. A nuanced analysis must examine the source of monopoly power in each case.
</details>

**Question 2 (12 marks).** A cinema has two types of customers: adults (demand $P_A = 20 - Q_A$) and
students (demand $P_S = 12 - Q_S$). Marginal cost is constant at GBP 2. (a) Calculate the
profit-maximising prices and quantities under third-degree price discrimination. (b) Calculate the
profit under discrimination and compare with single-price profit.

<details>
<summary>Full Mark Scheme</summary>
**(a) Discriminatory pricing (6 marks).**
Adults: $MR_A = 20 - 2Q_A = 2 \Rightarrow Q_A = 9$$P_A = 11$.
Students: $MR_S = 12 - 2Q_S = 2 \Rightarrow Q_S = 5$$P_S = 7$.
Profit from adults: $11 \times 9 - 2 \times 9 = 99 - 18 = 81$.
Profit from students: $7 \times 5 - 2 \times 5 = 35 - 10 = 25$.
Total profit with discrimination: $81 + 25 = \pounds 106$.

**(b) Single-price comparison (6 marks).** Total demand: for
$P \leq 12$$Q = (20 - P) + (12 - P) = 32 - 2P$. For $12 < P \leq 20$$Q = 20 - P$.

Aggregate MR: $MR = 16 - Q$ (for $Q \leq 8$). Set $MR = 2$: $16 - Q = 2 \Rightarrow Q = 14$.
$P = 16 - 14/2 = 9$. Check: $Q = 32 - 2(9) = 14$. Valid (both groups active). Single-price profit:
$9 \times 14 - 2 \times 14 = 126 - 28 = \pounds 98$.

Discrimination yields higher profit: $\pounds 106 > \pounds 98$. The gain from discrimination is
$\pounds 8$.

</details>

## 12. Extended Worked Examples

### 12.1 Perfect Competition: Long-Run Industry Dynamics

**Example.** An industry has 100 identical firms, each with $TC = 100 + 10Q + 0.5Q^2$. Market
demand: $P = 150 - Q$ (where $Q$ is market quantity).

**Short-run equilibrium:** $MC = 10 + Q$. $P = MC$: $P = 10 + q$ where $q$ is firm output. Firm
supply: $q = P - 10$ for $P \geq 10$. Market supply: $Q_S = 100(P - 10) = 100P - 1000$.

$150 - Q = 100P - 1000 \Rightarrow 150 - (100P - 1000) = 100P - 1000 \Rightarrow 1150 = 200P - 1000$.

Wait: $Q_D = 150 - P$$Q_S = 100P - 1000$.
$150 - P = 100P - 1000 \Rightarrow 1150 = 101P \Rightarrow P = 11.39$. $Q = 150 - 11.39 = 138.61$.
Each firm: $q = 11.39 - 10 = 1.39$.

Profit per firm: $TR = 11.39 \times 1.39 = 15.83$.
$TC = 100 + 10(1.39) + 0.5(1.39)^2 = 100 + 13.9 + 0.97 = 114.87$. Profit
$= 15.83 - 114.87 = -99.04$.

Firms are making large losses. In the long run, firms exit.

**Long-run equilibrium:** Firms exit until profit = 0, which occurs at $P = \min ATC$.
$ATC = 100/Q + 10 + 0.5Q$.
$\frac{dATC}{dQ} = -100/Q^2 + 0.5 = 0 \Rightarrow Q = \sqrt{200} = 14.14$.
$\min ATC = 100/14.14 + 10 + 0.5(14.14) = 7.07 + 10 + 7.07 = 24.14$.

Long-run price $= 24.14$. Market demand: $Q = 150 - 24.14 = 125.86$. Number of firms:
$125.86 / 14.14 = 8.9$So approximately 9 firms.

**81 firms have exited** (from 100 to 9). The industry has undergone massive consolidation due to
significant fixed costs (GBP 100 per firm).

### 12.2 Monopoly with Two-Part Tariff

**Example.** A monopolist serves identical consumers, each with demand $P = 50 - Q$. The
monopolist's $MC = 10$$FC = 0$.

**Single-price monopoly:** $MR = 50 - 2Q = 10 \Rightarrow Q = 20$$P = 40$. Profit per consumer
$= (40 - 10)(20) = 600$. CS per consumer $= \frac{1}{2}(50 - 40)(20) = 100$.

**Two-part tariff:** The monopolist charges a fixed fee $F$ (entry fee) plus a per-unit price $p$.
The optimal strategy is to set $p = MC = 10$ (extract all consumer surplus through the fixed fee)
and $F = CS = \frac{1}{2}(50 - 10)(40) = 800$.

At $p = 10$: each consumer buys $Q = 40$. Revenue from per-unit sales $= 10 \times 40 = 400$. Fixed
fee $= 800$. Total revenue per consumer $= 1200$. Total cost per consumer $= 10 \times 40 = 400$.
Profit per consumer $= 800$.

**Comparison:**

|                       | Single price | Two-part tariff |
| --------------------- | :----------: | :-------------: |
| Price per unit        |      40      |       10        |
| Quantity per consumer |      20      |       40        |
| Consumer surplus      |     100      |        0        |
| Profit per consumer   |     600      |       800       |

The two-part tariff increases the monopolist's profit by 33.3% and eliminates consumer surplus
entirely. It also achieves the allocatively efficient quantity ($P = MC$). However, it only works
when consumers are identical. With heterogeneous consumers, the monopolist faces a trade-off: a high
fixed fee extracts more surplus from high-demand consumers but drives away low-demand consumers.

### 12.3 Oligopoly: Stackelberg Model

**Example.** Two firms produce a homogeneous good. Market demand: $P = 100 - Q$. Firm 1 (leader) has
$MC_1 = 10$. Firm 2 (follower) has $MC_2 = 10$.

**Firm 2's reaction function (follower):** Firm 2 maximises profit taking Firm 1's output $q_1$ as
given. $P = 100 - q_1 - q_2$. $MR_2 = 100 - q_1 - 2q_2 = 10 \Rightarrow q_2 = 45 - 0.5q_1$.

**Firm 1's decision (leader):** Firm 1 anticipates Firm 2's reaction function.
$P = 100 - q_1 - (45 - 0.5q_1) = 55 - 0.5q_1$. $MR_1 = 55 - q_1 = 10 \Rightarrow q_1 = 45$.

**Firm 2's output:** $q_2 = 45 - 0.5(45) = 22.5$.

**Results:** $Q = 67.5$$P = 32.5$. $\pi_1 = (32.5 - 10)(45) = 1012.5$.
$\pi_2 = (32.5 - 10)(22.5) = 506.25$.

**Comparison with Cournot (same costs):** Cournot: $q_1 = q_2 = 30$$P = 40$$\pi_1 = \pi_2 = 900$.

**First-mover advantage:** The leader earns 1012.5 vs 900 in Cournot (12.5% more). The follower
earns 506.25 vs 900 (43.7% less). The Stackelberg leader exploits its ability to commit to output
first, forcing the follower to accommodate.

**Comparison with all models:**

|              | Collusion | Stackelberg | Cournot | Bertrand |
| ------------ | :-------: | :---------: | :-----: | :------: |
| $Q$          |    45     |    67.5     |   60    |    90    |
| $P$          |    55     |    32.5     |   40    |    10    |
| $\pi_1$      |  1012.5   |   1012.5    |   900   |    0     |
| $\pi_2$      |  1012.5   |   506.25    |   900   |    0     |
| Total profit |   2025    |   1518.75   |  1800   |    0     |

Bertrand competition (price competition with identical products) leads to marginal cost pricing and
zero profit -- the most competitive outcome. Collusion yields the highest profit but is illegal and
unstable.

### 12.4 Game Theory: Repeated Games and Trigger Strategies

**Example.** Two firms play the prisoner's dilemma repeatedly. Each period, they can Cooperate
(maintain high price) or Defect (cut price).

Payoffs per period (Firm A, Firm B):

|             | B Cooperate | B Defect |
| ----------- | :---------: | :------: |
| A Cooperate | (100, 100)  | (0, 150) |
| A Defect    |  (150, 0)   | (50, 50) |

**One-shot game:** Defect is the dominant strategy for both. Nash equilibrium: (Defect, Defect) with
payoffs (50, 50).

**Infinitely repeated game with trigger strategy:** Both firms play "Cooperate as long as the other
cooperated last period; if the other ever defects, defect forever."

**Firm's incentive to cooperate:** The present value of cooperation:
$$PV_{coop} = 100 + \frac{100}{1+r} + \frac{100}{(1+r)^2} + \cdots = \frac{100(1+r)}{r}$$

**Firm's incentive to defect:** Defect this period (150), then the other firm triggers permanent
punishment (50 forever):
$$PV_{defect} = 150 + \frac{50}{1+r} + \frac{50}{(1+r)^2} + \cdots = 150 + \frac{50}{r}$$

**Cooperation is sustainable if:** $$\frac{100(1+r)}{r} \geq 150 + \frac{50}{r}$$
$$\frac{100 + 100r}{r} \geq 150 + \frac{50}{r}$$ $$\frac{50 + 100r}{r} \geq 150$$
$$50 + 100r \geq 150r$$ $$50 \geq 50r$$ $$r \leq 1$$

Cooperation is sustainable if the discount rate is at most 100%. This is a very lax condition -- it
means that as long as firms value future profits at all ($r < \infty$), cooperation can be
sustained.

**With higher gains from defection:** If the defection payoff rises to 200:
$$PV_{defect} = 200 + 50/r$$ $$100(1+r)/r \geq 200 + 50/r$$ $$50 + 100r \geq 200r$$
$$50 \geq 100r \Rightarrow r \leq 0.5$$

Now cooperation requires $r \leq 50\%$A stricter condition. The higher the temptation to defect, the
more patient firms must be to sustain cooperation.

**Policy implication:** Industries where firms interact frequently (stable market, few entrants) and
where the gains from cheating are small relative to the long-run profits from cooperation are more
likely to sustain tacit collusion. This is why competition regulators scrutinise markets with few
firms, stable demand, and transparent pricing.

## 13. Extended Worked Examples

### 13.1 Cost Functions: Short-Run and Long-Run

**Example.** A firm has the short-run cost function $TC = 1000 + 50Q + 5Q^2$.

**Derive all cost curves:**

- $FC = 1000$$VC = 50Q + 5Q^2$
- $MC = 50 + 10Q$
- $ATC = 1000/Q + 50 + 5Q$
- $AVC = 50 + 5Q$
- $AFC = 1000/Q$

**Key output levels:**

- Shutdown: $AVC_{min} = 50$ (at $Q = 0$). Shutdown price = GBP 50.
- $ATC_{min}$: $\frac{dATC}{dQ} = -1000/Q^2 + 5 = 0 \Rightarrow Q^2 = 200 \Rightarrow Q = 14.14$.
  $ATC_{min} = 1000/14.14 + 50 + 5(14.14) = 70.71 + 50 + 70.71 = 191.42$.
- Profit at $P = 250$: $MC = 250 \Rightarrow Q = 20$. $ATC(20) = 50 + 50 + 100 = 200$. Profit per
  unit $= 50$. Total profit $= 1000$.

**Long-run cost function:** In the long run, all costs are variable. Suppose the long-run
$TC = 10Q + 5Q^2$ (no fixed costs). This implies the firm can adjust its scale.

$LRATC = 10 + 5Q$. $LRMC = 10 + 10Q$. $LRATC_{min} = 10$ (at $Q = 0$). Wait, $LRATC$ is increasing
for all $Q > 0$ (since $d(LRATC)/dQ = 5 > 0$). This means the firm has no economies of scale --
costs per unit always rise with output. This is a diseconomies-of-scale cost function.

Let me use a more realistic U-shaped long-run cost function: $LRATC = 200 - 20Q + 2Q^2$.
$LRATC_{min}$: $-20 + 4Q = 0 \Rightarrow Q = 5$. $LRATC_{min} = 200 - 100 + 50 = 150$. Minimum
efficient scale (MES): $Q = 5$.

At $Q = 3$ (below MES): $LRATC = 200 - 60 + 18 = 158$. 5.3% above minimum. At $Q = 8$ (above MES):
$LRATC = 200 - 160 + 128 = 168$. 12% above minimum.

The cost disadvantage of being below MES is smaller than the cost disadvantage of being above MES,
suggesting that the firm should aim to produce at least $Q = 5$ but has more flexibility at higher
output levels.

**Economies of scale:** $LRATC(5) = 150$. $LRATC(10) = 200 - 200 + 200 = 200$. Diseconomies of scale
above $Q = 5$. The MES is relatively small ($Q = 5$), suggesting that the market can support many
firms without inefficiency. This is characteristic of a competitive market structure.

### 13.2 Monopolistic Competition: Long-Run Equilibrium

**Example.** A monopolistically competitive firm faces demand $Q = 100 - 2P$ and has
$TC = 200 + 10Q + Q^2$.

**Short-run profit maximisation:** $P = 50 - 0.5Q$. $MR = 50 - Q$. $MC = 10 + 2Q$. $MR = MC$:
$50 - Q = 10 + 2Q \Rightarrow 40 = 3Q \Rightarrow Q = 13.33$$P = 43.33$.
$ATC = 200/13.33 + 10 + 13.33 = 15 + 10 + 13.33 = 38.33$. Profit $= (43.33 - 38.33)(13.33) = 66.67$.

The firm makes positive economic profit. In the long run, new firms enter, shifting this firm's
demand curve left.

**Long-run equilibrium (zero economic profit):** $P = ATC$. $50 - 0.5Q = 200/Q + 10 + Q$.
$50 - 0.5Q = 200/Q + 10 + Q \Rightarrow 40 - 1.5Q = 200/Q \Rightarrow 40Q - 1.5Q^2 = 200$.
$1.5Q^2 - 40Q + 200 = 0 \Rightarrow Q = \frac◆LB◆40 \pm \sqrt{1600 - 1200}◆RB◆◆LB◆3◆RB◆ = \frac◆LB◆40 \pm 20◆RB◆◆LB◆3◆RB◆$.
$Q = 20$ or $Q = 6.67$.

At $Q = 20$: $P = 40$$ATC = 200/20 + 10 + 20 = 40$. $P = ATC$. Profit $= 0$. At $Q = 6.67$:
$P = 46.67$$ATC = 200/6.67 + 10 + 6.67 = 46.67$. $P = ATC$. Profit $= 0$.

Both solutions give zero profit, but the relevant one depends on the direction of the demand shift.
With entry, demand shifts left, so the equilibrium moves from $Q = 13.33$ to the lower output.
$Q = 6.67$ is the long-run equilibrium with entry.

**Characteristics of monopolistic competition long-run equilibrium:**

- $P > MC$: $46.67 > 10 + 2(6.67) = 23.33$. Allocative inefficiency (deadweight loss exists).
- $P > ATC_{min}$: $ATC_{min} = 200/14.14 + 10 + 14.14 = 38.33$. $P = 46.67$. Excess capacity of
  $14.14 - 6.67 = 7.47$ units.
- Zero economic profit: no incentive for entry or exit.

**Deadweight loss:** $DWL = \frac{1}{2}(P - MC)(Q_{social} - Q_{actual})$. $Q_{social}$:
$P = MC \Rightarrow 50 - 0.5Q = 10 + 2Q \Rightarrow 40 = 2.5Q \Rightarrow Q = 16$.
$DWL = \frac{1}{2}(46.67 - 23.33)(16 - 6.67) = \frac{1}{2}(23.34)(9.33) = 108.9$.

**Evaluation:** Monopolistic competition is inefficient (DWL and excess capacity) but provides
variety, which is valued by consumers. The DWL is small because demand is elastic (many close
substitutes). The welfare loss from excess capacity may be justified by the gain from product
diversity.

### 13.3 Regulation of Natural Monopoly: Price Cap vs Rate of Return

**Example.** A water company is a natural monopoly. $TC = 500 + 20Q$. Demand: $P = 100 - Q$.

**Unregulated:** $MR = 100 - 2Q = 20 \Rightarrow Q = 40$$P = 60$. Profit
$= (60 - 20)(40) - 500 = 1100$.

**Price cap regulation (RPI-X):** The regulator sets maximum price $P_{cap} = 40$.
$Q = 100 - 40 = 60$. Revenue $= 2400$. $TC = 500 + 1200 = 1700$. Profit $= 700$. The firm has an
incentive to reduce costs (since it keeps any cost savings as profit). If it reduces MC from 20 to
18: $TC = 500 + 18Q = 500 + 1080 = 1580$. New profit $= 820$. The firm benefits from efficiency
gains.

**Rate of return regulation:** The regulator sets a maximum allowed return on capital of 10%.
Capital = 500 (the fixed cost). Maximum profit $= 0.10 \times 500 = 50$.
$TR - TC = 50 \Rightarrow P \times Q - 500 - 20Q = 50$. With $Q = 100 - P$:
$P(100 - P) - 500 - 20(100 - P) = 50$.
$100P - P^2 - 500 - 2000 + 20P = 50 \Rightarrow -P^2 + 120P - 2550 = 0 \Rightarrow P^2 - 120P + 2550 = 0$.
$P = \frac◆LB◆120 \pm \sqrt{14400 - 10200}◆RB◆◆LB◆2◆RB◆ = \frac◆LB◆120 \pm 64.8◆RB◆◆LB◆2◆RB◆$.
$P = 92.4$ or $P = 27.6$. $P = 27.6$$Q = 72.4$. This is close to the allocatively efficient outcome
($P = MC = 20$$Q = 80$).

**Comparison:**

|          | Unregulated | Price cap | Rate of return |
| -------- | :---------: | :-------: | :------------: |
| Price    |     60      |    40     |      27.6      |
| Quantity |     40      |    60     |      72.4      |
| Profit   |    1,100    |    700    |       50       |
| DWL      |     400     |    100    |      7.2       |

Rate of return regulation is closest to allocative efficiency but creates a problem: the firm has an
incentive to over-invest in capital (the "Averch-Johnson effect") to increase the allowed profit. If
the firm invests in unnecessary capital (raising fixed costs from 500 to 700), the allowed profit
rises to 70, but the cost to consumers may not fall.

**Price cap regulation is generally preferred** because:

1. It provides strong incentives for cost reduction (the firm keeps the savings).
2. It avoids the Averch-Johnson effect (no incentive to over-invest).
3. It is simpler to administer (the regulator sets a price, not a rate of return).
4. It has been used successfully in the UK since the 1980s (telecoms, water, energy).

**UK regulatory experience:** Ofwat (water regulator) has used price cap regulation since
privatisation in 1989. The typical price cap formula is $P_{t+1} = P_t + K + CPI - X$ where $K$ is
the allowed cost increase (infrastructure investment) and $X$ is the efficiency factor ( 2-3%). The
formula gives the firm an incentive to reduce costs below $X$ while allowing cost recovery for
essential investment. Ofgem (energy regulator) and Ofcom (telecoms) use similar approaches. The
system has generally worked well: prices have risen more slowly than inflation, and firms have
invested in infrastructure (the UK has some of the lowest water leakage rates in Europe). However,
concerns remain: water companies have been criticised for paying excessive dividends and bonuses
while underinvesting in environmental compliance (sewage overflow incidents). This illustrates the
limitations of price cap regulation when the X factor is set too generously.

**Alternatives to price cap regulation:**

- Licence conditions: the regulator sets quality standards (water quality, supply reliability) as
  well as price controls. Failure to meet standards triggers enforcement action.
- Benchmarking: comparing the performance of regulated firms (e.g., different water companies) to
  identify inefficiency. Ofwat introduced performance comparison in 2017, leading to visible
  improvements in customer service and environmental performance.
- Ownership restructuring: separating infrastructure ownership (natural monopoly) from service
  delivery (potentially competitive). Thames Water's proposed restructuring in 2024 is an example of
  this approach.

## Common Pitfalls

<!-- TODO: Add common pitfalls for this topic -->

## Summary

<!-- TODO: Add a summary for this topic -->
