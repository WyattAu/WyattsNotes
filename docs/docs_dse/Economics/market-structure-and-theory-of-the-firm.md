---
title: Market Structure and Theory of the Firm
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Economics
categories:
  - DSE
  - Economics
slug: market-structure-and-theory-of-the-firm
---

## Overview of Market Structures

A market structure describes the organisational and competitive characteristics of a market. The
classification framework rests on four axes: the number of buyers and sellers, the degree of product
differentiation, the height of barriers to entry and exit, and the extent of information symmetry.
These parameters determine how firms make output and pricing decisions, and they determine the
welfare outcomes for consumers and producers.

The continuum of market structures runs from perfect competition (maximum competition) to monopoly
(no competition). Between these poles lie monopolistic competition and oligopoly.

| Characteristic    | Perfect Competition      | Monopolistic Competition | Oligopoly                       | Monopoly                      |
| ----------------- | ------------------------ | ------------------------ | ------------------------------- | ----------------------------- |
| Number of firms   | Very many                | Many                     | Few (typically 3 to 12)         | One                           |
| Product type      | Homogeneous              | Differentiated           | Differentiated or homogeneous   | Unique (no close substitutes) |
| Barriers to entry | None                     | Low                      | High                            | Very high                     |
| Market power      | None (price taker)       | Low (some price setting) | Significant (mutual dependence) | Substantial (price maker)     |
| Information       | Perfect                  | Good                     | Imperfect                       | Imperfect                     |
| Examples          | Agricultural commodities | Restaurants, hair salons | Automobiles, smartphones        | CLP Power (HK electricity)    |

This file assumes familiarity with cost curves (`TC`, `ATC`, `AVC`, `MC`) and revenue curves (`TR`,
`AR`, `MR`) from [demand-supply-markets.md](demand-supply-markets.md).

---

## Theory of Costs and Revenue: Prerequisite Review

Before analysing market structures, the following cost and revenue relationships are foundational.

### Short-Run Cost Curves

In the short run, at least one factor of production is fixed. The key cost curves and their
interactions are:

- `MC` is U-shaped: it initially falls (increasing marginal returns) then rises (diminishing
  marginal returns).
- `MC` intersects `AVC` at the minimum of `AVC`.
- `MC` intersects `ATC` at the minimum of `ATC`.
- When `MC \lt AVC`, `AVC` is falling. When `MC \gt AVC`, `AVC` is rising. The same logic holds for
  `MC` relative to `ATC`.

### Revenue Under Different Market Structures

| Structure             | `AR` (Demand Curve)            | `MR` vs `AR`               |
| --------------------- | ------------------------------ | -------------------------- |
| Perfect competition   | Horizontal (perfectly elastic) | `MR = AR = P` (constant)   |
| Imperfect competition | Downward-sloping               | `MR \lt AR` (falls faster) |

For any firm facing a downward-sloping demand curve, `MR` lies below `AR`. This is the fundamental
reason why imperfectly competitive firms restrict output relative to the perfectly competitive
benchmark: producing an additional unit requires lowering the price on all units sold, not just the
marginal unit.

### Profit Maximisation Condition

Regardless of market structure, a profit-maximising firm produces where `MR = MC`, provided that
price at that output covers average variable cost (the shutdown condition in the short run).

$$\mathrm{Profit} = \mathrm{TR} - \mathrm{TC} = Q(P - \mathrm{ATC})$$

---

## Perfect Competition

### Characteristics

Perfect competition is an idealised market structure defined by the following conditions:

1. **Many buyers and sellers:** No single buyer or seller can influence the market price. Each firm
   is a price taker.
2. **Homogeneous (identical) product:** The output of every firm is a perfect substitute for the
   output of every other firm. Consumers have no brand preference.
3. **Perfect information:** All market participants have full knowledge of prices, costs, quality,
   and technology.
4. **Free entry and exit:** There are no barriers preventing new firms from entering the market or
   existing firms from leaving. Resources are perfectly mobile.
5. **Perfect factor mobility:** Factors of production (labour, capital) can move freely between
   industries without cost or delay.

### The Firm as a Price Taker

Because the firm produces a homogeneous product and faces many competitors, it cannot charge a price
above the market price (consumers would buy from competitors instead). It has no incentive to charge
below the market price (it can sell any quantity it wants at the market price). Therefore, the firm
faces a perfectly elastic (horizontal) individual demand curve at the market price `P`.

$$\mathrm{AR} = \mathrm{MR} = P$$

### Short-Run Equilibrium

In the short run, the number of firms is fixed. Each firm maximises profit by producing where
`P = MR = MC`. Three outcomes are possible depending on the relationship between `P` and `ATC`:

**Case 1: Supernormal (economic) profit** (`P \gt ATC` at the profit-maximising output)

| Condition   | Result                                  |
| ----------- | --------------------------------------- |
| `P \gt ATC` | Supernormal profit per unit = `P - ATC` |
| `P \gt AVC` | Firm continues producing                |

Diagram description: The `MC` curve intersects the horizontal `P = MR = AR` line at output `Q*`. At
`Q*`, the `ATC` curve lies below the price line. The rectangular area between the `ATC` curve and
the price line, from 0 to `Q*`, represents supernormal profit.

<details>
<summary>Worked Example: Supernormal Profit in Perfect Competition</summary>

A perfectly competitive firm has `TC = 200 + 20Q + 2Q^2`. The market price is `P = 60`.

`MC = dTC/dQ = 20 + 4Q`

Set `P = MC`: `60 = 20 + 4Q`, so `Q = 10`.

`ATC = 200/10 + 20 + 2(10) = 20 + 20 + 20 = 60`.

Since `P = ATC = 60`, the firm earns **normal profit** only.

Now suppose the market price rises to `P = 80`:

Set `P = MC`: `80 = 20 + 4Q`, so `Q = 15`.

`ATC = 200/15 + 20 + 2(15) = 13.33 + 20 + 30 = 63.33`.

Since `P = 80 \gt ATC = 63.33`, the firm earns **supernormal profit**.

Supernormal profit per unit = `80 - 63.33 = 16.67`

Total supernormal profit = `15 \times 16.67 = 250`.

</details>

**Case 2: Normal profit** (`P = ATC` at the profit-maximising output)

| Condition | Result                         |
| --------- | ------------------------------ |
| `P = ATC` | Zero economic profit           |
| `P = MC`  | Allocative efficiency achieved |

Normal profit is the minimum profit necessary to keep the firm in the industry. It is the
opportunity cost of the entrepreneur's time and capital. When `P = ATC`, total revenue equals total
cost (including implicit costs), so economic profit is zero but accounting profit is positive.

**Case 3: Subnormal profit (loss)** (`P \lt ATC` but `P \gt AVC`)

| Condition           | Result                                                     |
| ------------------- | ---------------------------------------------------------- |
| `ATC \gt P \gt AVC` | Firm makes a loss but continues producing in the short run |
| `P \lt AVC`         | Firm shuts down (shutdown point)                           |

The firm continues to produce at a loss in the short run as long as `P \gt AVC`, because producing
covers all variable costs and contributes some revenue toward fixed costs. If the firm shut down, it
would still have to pay fixed costs but earn zero revenue. Producing is less bad than shutting down.

The **shutdown point** is where `P = minimum AVC`. Below this price, the firm cannot cover even its
variable costs and minimises losses by producing zero output.

**Case 4: Loss exceeding fixed costs** (`P \lt AVC`)

The firm shuts down immediately. Loss = total fixed cost. Producing would increase the loss beyond
fixed cost.

<details>
<summary>Worked Example: Shutdown Decision</summary>

A perfectly competitive firm has `TC = 500 + 30Q + Q^2`.

`TVC = 30Q + Q^2`, `TFC = 500`.

`AVC = 30 + Q`, `MC = 30 + 2Q`.

Minimum `AVC` occurs as `Q` approaches 0: `min AVC = 30`.

Shutdown price = 30.

At `P = 25`: Since `P = 25 \lt AVC_{\min} = 30`, the firm **shuts down**. Loss = TFC = 500.

At `P = 40`: Set `P = MC`: `40 = 30 + 2Q`, `Q = 5`.

`ATC = 500/5 + 30 + 5 = 100 + 35 = 135`.

Loss = `5 \times (40 - 135) = 5 \times (-95) = -475`.

If the firm shuts down instead, loss = TFC = 500. Since `-475 \gt -500`, the firm should **continue
producing** -- losing 475 is better than losing 500.

The firm covers `AVC = 30 + 5 = 35` per unit and contributes `40 - 35 = 5` per unit toward fixed
costs, recovering `5 \times 5 = 25` of fixed costs.

</details>

### Long-Run Equilibrium

In the long run, all factors are variable and firms can enter or exit the market freely. The
long-run equilibrium is driven by entry and exit:

1. If firms are earning **supernormal profit**, new firms enter the market.
2. Entry increases market supply, which drives the market price down.
3. This continues until supernormal profit is eliminated: `P = ATC`.
4. If firms are making **losses**, some firms exit the market.
5. Exit decreases market supply, which drives the market price up.
6. This continues until losses are eliminated: `P = ATC`.

The long-run equilibrium conditions are:

$$P = MR = MC = \mathrm{ATC}_{\min}$$

At long-run equilibrium:

- Firms earn **normal profit only** (zero economic profit).
- The firm produces at the minimum point of `ATC` (**productive efficiency**).
- `P = MC` (**allocative efficiency**).
- No deadweight loss exists.

### Diagram Description: Long-Run Equilibrium in Perfect Competition

```
  Price
    |
    |----P = MR = AR = MC = ATC_min
    |         *
    |        / \
    |-------/---\-------- ATC
    |      /     \
    |     /       \
    |----/---------\------ MC
    |   /           \
    |  /             \
    | /               \
    +----------------------- Quantity
              Q*
```

The firm produces `Q*` where `P = MC`. At `Q*`, `ATC` is at its minimum, so `P = ATC` and economic
profit is zero.

### Industry Supply Curve in the Short Run

The short-run industry supply curve is the horizontal sum of all individual firms' `MC` curves above
their respective `AVC` minimums. Each firm supplies along its `MC` curve for prices above its
shutdown point.

### Industry Supply Curve in the Long Run

The long-run industry supply curve may be:

- **Horizontal** (constant-cost industry): Entry and exit do not affect factor prices. New firms can
  enter at the same cost as existing firms.
- **Upward-sloping** (increasing-cost industry): Entry bids up factor prices (e.g., wages, rents),
  raising costs for all firms.

---

## Monopoly

### Characteristics

A monopoly exists when a single firm is the sole producer of a good or service with no close
substitutes.

1. **Single seller:** The firm IS the industry.
2. **Unique product:** No close substitutes exist.
3. **High barriers to entry:** New firms cannot enter the market, even if the monopolist earns
   supernormal profit in the long run.
4. **Price maker:** The monopolist faces the entire market demand curve and chooses the
   profit-maximising price-quantity combination.
5. **Imperfect information:** The monopolist may have superior information about costs and demand.

### Sources of Monopoly Power

Barriers to entry are the defining feature that allows a monopoly to persist. Without barriers,
supernormal profit would attract entry, eroding the monopoly.

| Source of Monopoly Power       | Description                                                                                                                                                                                          |
| ------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Natural monopoly               | A single firm can supply the entire market at a lower cost than two or more firms due to substantial economies of scale. Examples: electricity transmission, water supply, railways.                 |
| Legal monopoly (statutory)     | Government grants exclusive rights through patents, copyrights, licences, or franchises. A patent gives a 20-year monopoly on an invention. Public utilities are often granted exclusive franchises. |
| Economies of scale             | If minimum efficient scale is large relative to market demand, only one firm can operate at efficient scale. New entrants would have higher average costs and be unable to compete on price.         |
| Control of essential resources | A firm owns or controls a key input (e.g., De Beers historically controlled most of the world's diamond supply). Without access to this resource, competitors cannot enter.                          |
| Network effects                | The value of the good increases with the number of users (e.g., social media platforms, operating systems). A dominant firm benefits from a self-reinforcing advantage.                              |
| Anti-competitive practices     | Predatory pricing (selling below cost to drive out competitors), exclusive contracts, tying and bundling. These are illegal under competition law in most jurisdictions.                             |

### Natural Monopoly: Detailed Analysis

A natural monopoly arises when a single firm can produce the total market output at a lower average
cost than two or more firms. This occurs when the firm's `ATC` curve is still declining at the
output level that satisfies total market demand.

**Diagram description:**

```
  Price
    |
    |              ATC
    |            /
    |          /
    |        /
    |------/--------- MC
    |    /  :
    |  /    :    Demand
    |/      :   /
    +------------:----------- Quantity
              Q_m
```

The `ATC` curve declines over the entire relevant output range. If the market is split between two
firms, each produces `Q_m / 2` at a higher average cost. A single firm producing `Q_m` is more
efficient.

**Regulatory dilemma:** If the monopolist is left unregulated, it charges `P_m \gt MC`, creating
deadweight loss. If the government forces `P = MC` (allocative efficiency), the monopolist may make
a loss if `MC \lt ATC` at that output. The government must then subsidise the firm. A compromise is
to set `P = ATC` (normal profit), which is productively efficient but not allocatively efficient
(`P \gt MC`).

### Revenue Curves Under Monopoly

The monopolist faces the market demand curve, which is downward-sloping. Since `AR = P` and the
demand curve is downward-sloping, `AR` is also downward-sloping.

`MR` falls faster than `AR`. To sell an additional unit, the monopolist must lower the price on all
units sold, not just the marginal unit. The relationship between `AR` and `MR` for a linear demand
curve `P = a - bQ` is:

$$\mathrm{MR} = a - 2bQ$$

The `MR` curve has twice the slope of the `AR` curve and intersects the quantity axis at half the
quantity where `AR` intersects it.

### Profit Maximisation

The monopolist produces where `MR = MC`, then charges the price read off the `AR` (demand) curve at
that quantity.

$$Q_m : \mathrm{MR} = \mathrm{MC}$$

$$P_m : P = \mathrm{AR}(Q_m)$$

**Supernormal profit** in the long run: Because barriers to entry prevent new firms from entering,
the monopolist can earn supernormal profit indefinitely. This is the key difference from perfect
competition, where long-run equilibrium yields only normal profit.

$$\mathrm{Supernormal profit} = Q_m \times (P_m - \mathrm{ATC}(Q_m))$$

<details>
<summary>Worked Example: Monopoly Profit Maximisation</summary>

A monopolist faces demand `P = 120 - Q` and has `TC = 100 + 10Q + 2Q^2`.

`TR = 120Q - Q^2`. `MR = 120 - 2Q`. `MC = 10 + 4Q`.

Set `MR = MC`: `120 - 2Q = 10 + 4Q`, so `6Q = 110`, `Q_m = 18.33`.

`P_m = 120 - 18.33 = 101.67`.

`ATC = 100/18.33 + 10 + 2(18.33) = 5.45 + 10 + 36.67 = 52.12`.

Supernormal profit = `18.33 \times (101.67 - 52.12) = 18.33 \times 49.55 = 908.4`.

</details>

### Inefficiency of Monopoly

Monopoly is allocatively inefficient because `P_m \gt MC` at the profit-maximising output. Society
values the marginal unit at `P_m` but it costs only `MC` to produce. Additional units would generate
net social benefit, but the monopolist restricts output to maximise profit.

Monopoly is productively inefficient because the monopolist does NOT produce at the minimum `ATC`.
The monopolist produces at an output where `ATC` is still declining (to the left of the `ATC`
minimum).

**Deadweight loss (DWL):** The welfare loss from monopoly is the area between the demand curve and
the `MC` curve, from `Q_m` to `Q_c` (the competitive output where `P = MC`).

$$\mathrm{DWL} = \frac{1}{2}(P_m - \mathrm{MC}(Q_m))(Q_c - Q_m)$$

This DWL represents the total surplus that is neither captured by the monopolist nor by consumers.
It is a pure loss to society.

### Diagram Description: Monopoly vs Perfect Competition

```
  Price
    |
  Pm|----*        MC
    |   / \       /
    |  /   \     /
  Pc|-/-----*---/
    |/      \ /  Demand (AR)
    *       /
    |      / MR
    +---|---------|--- Quantity
       Qm       Qc
```

- `Pm`: Monopoly price (where `MR = MC`, then read up to `AR`)
- `Qm`: Monopoly quantity (where `MR = MC`)
- `Pc`: Competitive price (where `Demand = MC`)
- `Qc`: Competitive quantity
- DWL is the triangle with vertices at `(Qm, Pm)`, `(Qc, Pc)`, and `(Qm, MC(Qm))`

### Comparison: Monopoly vs Perfect Competition

| Feature               | Perfect Competition             | Monopoly                                          |
| --------------------- | ------------------------------- | ------------------------------------------------- |
| Price                 | `P = MC` (lower)                | `P \gt MC` (higher)                               |
| Output                | Higher (at `Q_c`)               | Lower (at `Q_m`)                                  |
| Consumer surplus      | Larger                          | Smaller (partly transferred to monopolist)        |
| Producer surplus      | Smaller                         | Larger (supernormal profit)                       |
| Total surplus         | Maximized                       | Reduced (DWL present)                             |
| Productive efficiency | Yes (`ATC` at minimum)          | No (`ATC` not at minimum)                         |
| Allocative efficiency | Yes (`P = MC`)                  | No (`P \gt MC`)                                   |
| Dynamic efficiency    | May lack incentive (low profit) | May have incentive (supernormal profit funds R&D) |
| Long-run profit       | Normal profit only              | Supernormal profit persists                       |

---

## Price Discrimination

### Definition

Price discrimination occurs when a monopolist charges different prices to different consumers for
the same good or service, where the price difference is not justified by differences in cost.

### Conditions Necessary for Price Discrimination

1. **Market power:** The firm must be a price maker (face a downward-sloping demand curve). A
   perfectly competitive firm cannot price discriminate because it cannot charge above the market
   price.
2. **Market segmentation:** The firm must be able to separate consumers into groups with different
   price elasticities of demand.
3. **No arbitrage (resale):** Consumers who buy at a lower price must not be able to resell the good
   to consumers facing a higher price. This is why price discrimination is common in services
   (haircuts, cinema tickets, airline tickets) and goods that are consumed on the spot.

### Degrees of Price Discrimination

**First-degree (perfect) price discrimination:** The monopolist charges each consumer the maximum
price they are willing to pay for each unit. The firm captures the entire consumer surplus.
`MR = AR = Demand`. The monopolist produces where `P = MC`, achieving allocative efficiency (same
output as perfect competition) but all surplus goes to the producer. This is theoretical; it
requires perfect knowledge of every consumer's willingness to pay.

**Second-degree price discrimination:** The monopolist charges different prices based on the
quantity purchased. Examples: bulk discounts, block pricing. Consumers self-select into different
quantity brackets, revealing their willingness to pay through their purchase decision. No knowledge
of individual consumers is required.

**Third-degree price discrimination:** The monopolist separates consumers into identifiable groups
based on observable characteristics (age, student status, location, time of purchase) and charges
each group a different price. The group with more elastic demand (more sensitive to price) is
charged a lower price. The group with less elastic demand (less sensitive) is charged a higher
price.

**Profit-maximising rule for third-degree price discrimination:**

The monopolist allocates output between segments such that `MR` is equal across all segments and
equals `MC`:

$$\mathrm{MR}_1 = \mathrm{MR}_2 = \ldots = \mathrm{MR}_n = \mathrm{MC}$$

This implies that the segment with more elastic demand pays a lower price (because `MR` is a
function of elasticity).

### Examples of Price Discrimination

| Type   | Example                                                                                                    |
| ------ | ---------------------------------------------------------------------------------------------------------- |
| First  | Not realistically achievable; closest example: personalised online pricing (controversial)                 |
| Second | Quantity discounts (buy 2 get 1 free), block pricing for electricity, software tier pricing                |
| Third  | Student discounts on public transport, senior citizen discounts, peak/off-peak pricing, geographic pricing |

### Welfare Effects of Price Discrimination

Price discrimination is not unambiguously harmful:

- **Output increases** relative to uniform pricing (the monopolist can capture more consumer surplus
  by selling to additional consumers at lower prices).
- **Consumer surplus** may increase or decrease depending on the type of discrimination. Some
  consumers who would not have bought at all under uniform pricing can now purchase at a lower
  price.
- **Producer surplus** always increases (otherwise the monopolist would not price discriminate).
- **Total surplus** may increase (if total output rises toward the competitive level) or may
  decrease (if the deadweight loss from misallocation across groups outweighs the output gain).

---

## Monopolistic Competition

### Characteristics

Monopolistic competition is a market structure with many firms selling differentiated products. It
combines elements of monopoly (each firm faces a downward-sloping demand curve due to product
differentiation) and perfect competition (many firms, free entry and exit).

1. **Many firms:** No single firm has significant market power.
2. **Differentiated products:** Firms sell products that are similar but not identical. Product
   differentiation may be based on quality, branding, design, location, or service.
3. **Free entry and exit:** There are no significant barriers. Firms can enter and exit freely.
4. **Some market power:** Each firm faces a downward-sloping demand curve because consumers perceive
   differences between products. The firm is a price maker, but only to a limited degree.
5. **Non-price competition:** Firms compete through advertising, branding, product quality,
   packaging, and customer service, in addition to price.

### Short-Run Equilibrium

Each firm maximises profit by producing where `MR = MC`. The firm can earn supernormal profit,
normal profit, or make a loss in the short run, depending on the position of its demand curve
relative to `ATC`.

The demand curve for a monopolistically competitive firm is downward-sloping but relatively elastic
(due to the availability of many substitutes). It is more elastic than a monopolist's demand curve
but less elastic than a perfectly competitive firm's (horizontal) demand curve.

### Long-Run Equilibrium

If firms earn supernormal profit in the short run, new firms enter. New entrants draw demand away
from existing firms (each firm's demand curve shifts left). Entry continues until supernormal profit
is eliminated: `P = ATC`.

If firms make losses, some exit. The demand curves of remaining firms shift right. Exit continues
until remaining firms earn normal profit.

Long-run equilibrium conditions:

$$\mathrm{MR} = \mathrm{MC} \mathrm{ (profit maximisation)}$$

$$P = \mathrm{ATC} \mathrm{ (zero economic profit due to free entry/exit)}$$

Note: In monopolistic competition, `P \gt MC` at equilibrium (allocative inefficiency persists) and
the firm does NOT produce at the minimum `ATC` (productive inefficiency). The demand curve is
tangent to the `ATC` curve at the equilibrium output, but the tangency point is to the LEFT of the
minimum `ATC`.

### Excess Capacity

The difference between the output where `ATC` is minimised and the actual output produced by the
firm in long-run equilibrium is called **excess capacity**. This represents the cost of product
variety: society pays higher average costs in exchange for having differentiated products.

$$\mathrm{Excess capacity} = Q_{\mathrm{ATC}_{\min}} - Q^*$$

### Diagram Description: Long-Run Monopolistic Competition

```
  Price
    |
    |    P=ATC
    |    *
    |   / \ ATC
    |  /   \
    | /     \
    |/       * Demand (AR)
    *       /
    |\     /  MR
    | \   /
    |  \ /
    |   * MC
    +----|----|--- Quantity
       Q*  Q_ATC_min
```

The demand curve is tangent to `ATC` at `Q*`. The firm produces `Q*` where `MR = MC`. `Q_ATC_min` is
to the right of `Q*`, showing excess capacity.

### Efficiency of Monopolistic Competition

| Efficiency Type       | Result                                                                                          |
| --------------------- | ----------------------------------------------------------------------------------------------- |
| Productive efficiency | No: the firm does not produce at `ATC_min`. Excess capacity exists.                             |
| Allocative efficiency | No: `P \gt MC`. The markup reflects market power from product differentiation.                  |
| Dynamic efficiency    | Potentially yes: supernormal profit in the short run and competitive pressure drive innovation. |
| Consumer welfare      | Ambiguous: consumers pay higher prices than under perfect competition but benefit from variety. |

<details>
<summary>Worked Example: Excess Capacity in Monopolistic Competition</summary>

A monopolistically competitive firm has demand `P = 60 - Q` and `TC = 50 + 10Q + 0.5Q^2`.

`MR = 60 - 2Q`. `MC = 10 + Q`.

Set `MR = MC`: `60 - 2Q = 10 + Q`, `3Q = 50`, `Q^* = 16.67`.

`P = 60 - 16.67 = 43.33`.

`ATC = 50/16.67 + 10 + 0.5(16.67) = 3.0 + 10 + 8.33 = 21.33`.

Since `P = 43.33 \gt ATC = 21.33`, the firm earns supernormal profit in the short run.

To find `ATC_{\min}`: `MC = ATC` means `10 + Q = 50/Q + 10 + 0.5Q`, so `0.5Q = 50/Q`, `Q^2 = 100`,
`Q_{ATC_{\min}} = 10`.

Excess capacity = `10 - 16.67` -- wait, `16.67 \gt 10` here, which suggests the firm produces beyond
the minimum ATC. This is because at `Q = 16.67`, the firm has supernormal profit. In the long run, entry
would shift demand left until `P = ATC` at a `Q` less than 10, creating excess capacity.

</details>

### Advertising and Non-Price Competition

Advertising is a central feature of monopolistic competition. Its effects are debated:

**Arguments for advertising:**

- Provides information to consumers about product availability, quality, and price
- Enables new firms to enter the market by building brand awareness
- Supports product differentiation, which drives innovation and quality improvement
- Funds media content (broadcasting, journalism)

**Arguments against advertising:**

- Creates artificial product differentiation and brand loyalty, reducing price competition
- Increases production costs (advertising is a cost that is passed on to consumers via higher
  prices)
- May be manipulative rather than informative, creating wants rather than satisfying them
- Creates barriers to entry (new firms must spend heavily on advertising to compete with established
  brands)

---

## Oligopoly

### Characteristics

Oligopoly is a market structure dominated by a few large firms. The key distinguishing feature is
**mutual interdependence**: each firm's decisions (price, output, advertising) significantly affect
its rivals, and each firm must anticipate rivals' reactions when making decisions.

1. **Few large firms:** Each firm has a significant share of the market. A small number of firms
   dominate.
2. **Interdependence:** The actions of one firm directly affect, and are affected by, the actions of
   other firms. Strategic behaviour is essential.
3. **High barriers to entry:** Economies of scale, brand loyalty, control of distribution channels,
   patents, and large capital requirements prevent new firms from entering.
4. **Products may be homogeneous or differentiated:** If homogeneous (oil, steel), the oligopoly is
   a **pure oligopoly**. If differentiated (automobiles, smartphones), it is a **differentiated
   oligopoly**.
5. **Non-price competition:** Because price competition can trigger destructive price wars, firms
   often compete through advertising, product development, branding, and customer service.

### Game Theory and Strategic Behaviour

Game theory provides the analytical framework for understanding oligopolistic behaviour. The
simplest model is the **prisoners' dilemma**, which illustrates why rational firms may not cooperate
even when cooperation would benefit all parties.

**Prisoners' dilemma applied to oligopoly:**

|                    | Firm B: High Price | Firm B: Low Price |
| ------------------ | ------------------ | ----------------- |
| Firm A: High Price | A: 10, B: 10       | A: 2, B: 12       |
| Firm A: Low Price  | A: 12, B: 2        | A: 5, B: 5        |

Both firms earn the highest combined profit if they both charge a high price (cooperate). However,
each firm has a dominant strategy to charge a low price: regardless of what the rival does, the firm
earns more by charging a low price. The Nash equilibrium is (Low, Low) with payoffs (5, 5), even
though (High, High) with payoffs (10, 10) is Pareto superior.

This explains why firms in an oligopoly are tempted to cheat on collusive agreements.

### Collusion and Cartels

**Collusion** occurs when firms in an oligopoly cooperate (explicitly or tacitly) to maximise joint
profits by acting as a single monopolist.

**Explicit collusion (cartel):** Firms formally agree on output quotas, prices, and market shares. A
cartel acts as a monopoly, restricting total output to the level where `MR = MC` for the cartel as a
whole, and charging the monopoly price. Profits are distributed among members according to the
agreement.

**Why cartels tend to break down:**

1. **Incentive to cheat:** Each member can increase its own profit by secretly producing more than
   its quota. If one member cheats, the cartel price falls and all members suffer.
2. **Detection difficulty:** In a differentiated oligopoly or when demand fluctuates, cheating is
   hard to detect.
3. **New entrants:** Cartel profits attract new entrants who are not bound by the agreement.
4. **Legal prohibition:** Cartels are illegal in most jurisdictions under competition/anti-trust
   law. Fines and penalties increase the cost of collusion.

**Tacit collusion:** Firms coordinate behaviour without explicit agreement, often through price
leadership or following industry norms.

### The Kinked Demand Curve Model

The kinked demand curve model (Sweezy, 1939) attempts to explain price rigidity in oligopolistic
markets.

**Assumption:** If one firm raises its price, rivals do NOT follow (they gain market share). If one
firm lowers its price, rivals DO follow (to avoid losing market share).

This creates a demand curve with a **kink** at the current price:

- Above the current price: demand is relatively elastic (small price increase leads to large
  quantity loss as rivals undercut).
- Below the current price: demand is relatively inelastic (small price decrease leads to small
  quantity gain as rivals match the cut).

At the kink, the `MR` curve has a **discontinuity** (a vertical gap). This means that even if `MC`
changes within the gap, the profit-maximising output and price do not change. This explains price
rigidity: firms in an oligopoly may not change their prices even when costs change, as long as the
`MC` curve passes through the `MR` gap.

**Diagram description:**

```
  Price
    |
    |     *  D (elastic portion, above kink)
    |    /|
    |   / |
    |  /  |
    | *   |  D (inelastic portion, below kink)
    |  \  |
    |   \ |
    |    \|
    |     *    MR gap
    |     |
    |  ---|--- MC
    |     |
    +-----|--------- Quantity
        Q*
```

The kink is at the current price-output point `(Q*, P*)`. The `MR` curve has a vertical gap at `Q*`.
The `MC` curve can shift up or down within this gap without changing the profit-maximising output or
price.

### Limitations of the Kinked Demand Curve

1. It does not explain how the initial price `P*` is determined.
2. It predicts price rigidity but does not explain price changes when they occur.
3. Empirical evidence is mixed; not all oligopolies exhibit price rigidity.
4. It assumes asymmetric reactions to price increases vs decreases, which may not always hold.

### Price Leadership

An alternative model of oligopolistic behaviour is price leadership, where one firm (the dominant
firm or the firm with the best market information) sets the price and other firms follow.

**Dominant firm price leadership:** The largest firm sets the price based on its profit-maximising
condition, and smaller firms act as price takers (they produce where their `MC` equals the price set
by the dominant firm).

**Barometric price leadership:** A firm with a reputation for accurately reading market conditions
changes price first, and other firms follow. The leading firm is not necessarily the largest.

---

## Efficiency Comparison Across Market Structures

### Productive Efficiency

Productive efficiency requires production at the minimum point of `ATC`, where `MC = ATC`.

| Structure                | Productive Efficiency                        | Reason                                                     |
| ------------------------ | -------------------------------------------- | ---------------------------------------------------------- |
| Perfect competition (LR) | Yes                                          | `P = ATC_min`; free entry drives price to minimum `ATC`    |
| Monopolistic competition | No                                           | Excess capacity; `P = ATC` but `ATC \gt ATC_min`           |
| Oligopoly                | Generally no                                 | Firms restrict output; may or may not produce at `ATC_min` |
| Monopoly                 | No `ATC` is declining at the output produced |

### Allocative Efficiency

Allocative efficiency requires `P = MC`, meaning the price consumers pay reflects the marginal cost
of production.

| Structure                | Allocative Efficiency | Reason                                                  |
| ------------------------ | --------------------- | ------------------------------------------------------- |
| Perfect competition (LR) | Yes                   | `P = MC` at equilibrium                                 |
| Monopolistic competition | No                    | `P \gt MC` at equilibrium (markup from differentiation) |
| Oligopoly                | No                    | `P \gt MC`; output is restricted                        |
| Monopoly                 | No                    | `P \gt MC` significantly; output is most restricted     |

### Dynamic Efficiency

Dynamic efficiency refers to the rate of technological innovation and improvement over time. The
relationship between market structure and dynamic efficiency is complex and context-dependent:

| Structure                | Dynamic Efficiency Argument                                                                                                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Perfect competition      | May under-invest in R&D: firms earn only normal profit and lack funds for innovation.                                                                                                           |
| Monopoly                 | Supernormal profit provides funds for R&D; the threat of potential competition may motivate innovation (Schumpeterian hypothesis). However, lack of competitive pressure may breed complacency. |
| Monopolistic competition | Competitive pressure and supernormal profit in the short run both incentivise innovation.                                                                                                       |
| Oligopoly                | Large firms have resources for R&D; strategic rivalry drives innovation races. However, collusion may reduce the incentive.                                                                     |

### Summary Table

| Criterion                | Perfect Competition | Monopolistic Competition | Oligopoly        | Monopoly           |
| ------------------------ | ------------------- | ------------------------ | ---------------- | ------------------ |
| Productive efficiency    | Yes                 | No (excess capacity)     | Generally no     | No                 |
| Allocative efficiency    | Yes                 | No                       | No               | No                 |
| Dynamic efficiency       | Ambiguous           | Potentially high         | Potentially high | Ambiguous          |
| Consumer choice          | None (homogeneous)  | High (variety)           | Moderate         | None (unique)      |
| Price relative to MC     | `P = MC`            | `P \gt MC` (small)       | `P \gt MC`       | `P \gt MC` (large) |
| Long-run economic profit | Zero                | Zero                     | May persist      | Positive           |
| DWL                      | None                | Small                    | Moderate         | Large              |

---

## Contestable Markets Theory

### Definition

The theory of contestable markets (Baumol, 1982) challenges the traditional structure-conduct-
performance paradigm by arguing that the threat of potential entry can discipline incumbent firms
even when the market currently has few firms.

A market is **perfectly contestable** if:

1. Entry is free (no barriers to entry or exit).
2. Entry is costless and reversible (sunk costs are zero). A firm can enter, test the market, and
   exit without losing any investment.
3. Incumbent firms cannot respond to entry before the new firm has established itself (no
   "hit-and-run" deterrence).

### Key Implications

Even a monopoly in a perfectly contestable market will behave like a perfectly competitive firm:

- It will charge `P = AC` (zero economic profit) to avoid attracting entry.
- It will produce at minimum efficient scale.
- It will be allocatively efficient if the threat of entry is credible.

The number of firms in the market is irrelevant; what matters is the **contestability** of the
market. A market with two firms but high barriers to entry may be less competitive than a market
with one firm but perfectly contestable conditions.

### Limitations

1. Sunk costs are pervasive in the real world (factories, brand investment, specialised equipment).
   Few markets approach perfect contestability.
2. Strategic deterrence (limit pricing, capacity expansion, predatory pricing) can reduce
   contestability.
3. The theory does not address dynamic efficiency or innovation adequately.

---

## Common Pitfalls

1. **Stating that a monopolist charges the highest possible price:** A monopolist maximises profit
   where `MR = MC`, not at the highest price the demand curve allows. Charging the highest price
   would result in near-zero sales and negligible revenue.

2. **Confusing normal profit with zero accounting profit:** Normal profit is zero economic profit.
   The firm covers all explicit and implicit costs (including the opportunity cost of the
   entrepreneur's time and capital). Accounting profit is positive when the firm earns normal
   economic profit.

3. **Assuming monopoly is always worse than perfect competition:** While monopoly creates static
   allocative and productive inefficiency, it may generate dynamic efficiency gains through R&D
   investment (the Schumpeterian argument). Large firms with supernormal profit have the resources
   to fund innovation. This is especially relevant in industries with large fixed costs and
   significant economies of scale (pharmaceuticals, technology).

4. **Confusing shutdown in the short run with exit in the long run:** In the short run, a firm shuts
   down if `P \lt AVC` (it stops producing but still pays fixed costs). In the long run, a firm
   exits if `P \lt ATC` (it cannot cover all costs and leaves the industry permanently).

5. **Misidentifying the shutdown point:** The shutdown point is where `P = minimum AVC`, NOT where
   `P = minimum ATC`. A firm continues to produce at a loss as long as `P \gt AVC` because it covers
   variable costs and contributes to fixed costs.

6. **Stating that monopolistic competition is productively efficient:** It is not. The tangency of
   the demand curve to `ATC` occurs at an output less than the `ATC` minimum, resulting in excess
   capacity.

7. **Assuming the kinked demand curve model explains price determination:** It explains price
   rigidity (why prices do not change) but not the initial price level. The initial price is
   determined by other factors (cost-plus pricing, historical precedent, price leadership).

8. **Confusing collusion with competition:** In an oligopoly, firms may collude to raise prices and
   restrict output (acting like a cartel). This is the opposite of competition. Students sometimes
   assume that because there are few firms, competition is intense. In reality, few firms make it
   easier to collude.

9. **Ignoring the role of sunk costs in determining contestability:** Contestable market theory
   assumes zero sunk costs. In practice, sunk costs create barriers to entry and make markets less
   contestable, even if there are no legal or regulatory barriers.

10. **Assuming price discrimination always reduces consumer welfare:** Third-degree price
    discrimination may benefit some consumers (those in the elastic segment who pay a lower price
    than under uniform pricing). The net welfare effect depends on whether total output increases
    and how the gains and losses are distributed across consumer groups.

---

## Practice Problems

<details>
<summary>Question 1: Perfect Competition Short-Run Analysis</summary>

A perfectly competitive firm has the following cost data:

| Output (Q) | TC (USD) |
| ---------- | -------- |
| 0          | 50       |
| 1          | 90       |
| 2          | 120      |
| 3          | 140      |
| 4          | 170      |
| 5          | 210      |
| 6          | 260      |
| 7          | 320      |

The market price is USD 40 per unit.

(a) Calculate `MC`, `ATC`, `AVC`, and `AFC` at each output level. (b) What is the profit- maximising
output? (c) Calculate the profit at that output. (d) Will the firm produce or shut down in the short
run? Explain. (e) If the market price falls to USD 25, what will the firm do?

(a) | Q | TC | MC | ATC | AVC | AFC | | --- | --- | --- | --- | --- | --- | | 0 | 50 | -- | -- | --
| -- | | 1 | 90 | 40 | 90.0 | 40.0 | 50.0 | | 2 | 120 | 30 | 60.0 | 35.0 | 25.0 | | 3 | 140 | 20 |
46.7 | 30.0 | 16.7 | | 4 | 170 | 30 | 42.5 | 30.0 | 12.5 | | 5 | 210 | 40 | 42.0 | 32.0 | 10.0 | | 6
| 260 | 50 | 43.3 | 35.0 | 8.3 | | 7 | 320 | 60 | 45.7 | 38.6 | 7.1 |

(b) The firm produces where `P = MC`. At `P = 40`: `MC = 40` at `Q = 1` and `Q = 5`. To determine
which, check: at `Q = 1`, `MR = 40 \gt MC = 40` is borderline (producing the first unit is
profitable since `P \gt AVC`). At `Q = 5`, `MR = 40 = MC`. For `Q = 6`, `MC = 50 \gt MR = 40`, so
the firm should NOT produce the 6th unit. The profit-maximising output is `Q = 5`.

(c) At `Q = 5`: `TR = 5 \times 40 = 200`. `TC = 210`. Profit = `200 - 210 = -10`. The firm makes a
loss of USD 10.

(d) The firm will continue to produce. At `Q = 5`, `P = 40 \gt AVC = 32`. The firm covers all
variable costs (USD 160) and contributes USD 40 toward fixed costs (USD 50). If it shut down, it
would lose the entire fixed cost of USD 50. By producing, it loses only USD 10.

(e) At `P = 25`: Check where `P = MC`. `MC = 25` falls between `Q = 2` (`MC = 30`) and `Q = 3`
(`MC = 20`). At `Q = 2`, `MC = 30 \gt P = 25`, so the firm should not produce the 2nd unit. At
`Q = 1`, `MC = 40 \gt P = 25`, so the firm should not produce the 1st unit. But check shutdown:
`AVC` at `Q = 1` is 40. Since `P = 25 \lt AVC = 40`, the firm should shut down. Loss = TFC = USD 50.

</details>

<details>
<summary>Question 2: Monopoly Profit Maximisation</summary>

A monopolist faces the demand function `P = 100 - 2Q` and has a total cost function `TC = 50 + 20Q

- Q^2`.

(a) Find the profit-maximising output and price. (b) Calculate the monopolist's profit. (c)
Calculate the deadweight loss. (d) What would the output and price be under perfect competition?

(a) `TR = P \times Q = (100 - 2Q)Q = 100Q - 2Q^2`

`MR = d(TR)/dQ = 100 - 4Q`

`MC = d(TC)/dQ = 20 + 2Q`

Set `MR = MC`: `100 - 4Q = 20 + 2Q`

`80 = 6Q`

`Q = 13.33`

`P = 100 - 2(13.33) = 100 - 26.67 = 73.33`

(b) `TR = 73.33 \times 13.33 = 977.3`

`TC = 50 + 20(13.33) + (13.33)^2 = 50 + 266.6 + 177.7 = 494.3`

Profit = `977.3 - 494.3 = 483.0`

(c) Under perfect competition, `P = MC`: `100 - 2Q = 20 + 2Q`, so `80 = 4Q`, `Q = 20`, `P = 60`.

`MC` at `Q = 13.33` = `20 + 2(13.33) = 46.67`

`DWL = 0.5 \times (73.33 - 46.67) \times (20 - 13.33) = 0.5 \times 26.67 \times 6.67 = 88.9`

(d) As calculated above: `Q_c = 20`, `P_c = 60`.

</details>

<details>
<summary>Question 3: Price Discrimination</summary>

A cinema has two segments: adults and students. The demand functions are:

Adults: `P_A = 30 - 0.5Q_A`

Students: `P_S = 20 - 0.5Q_S`

The cinema's marginal cost is constant at `MC = 4` per ticket. There are no fixed costs.

(a) If the cinema cannot price discriminate, find the single profit-maximising price, quantity, and
profit. (b) If the cinema can price discriminate, find the price and quantity for each segment, and
total profit. (c) Compare total output and profit under both scenarios.

(a) Without price discrimination, aggregate demand: `Q = Q_A + Q_S`

From `P_A = 30 - 0.5Q_A`, so `Q_A = 60 - 2P` (for `P \le 30`)

From `P_S = 20 - 0.5Q_S`, so `Q_S = 40 - 2P` (for `P \le 20`)

For `P \le 20`: `Q = (60 - 2P) + (40 - 2P) = 100 - 4P`, so `P = 25 - 0.25Q`

For `20 \lt P \le 30`: `Q = 60 - 2P`, so `P = 30 - 0.5Q`

At `P = 20`, `Q = 100 - 80 = 20` (from combined demand) or `Q = 60 - 40 = 20` (adults only).

Since `P = 25 - 0.25Q` applies for `P \le 20`, i.e., `Q \ge 20`:

`TR = 25Q - 0.25Q^2`

`MR = 25 - 0.5Q`

Set `MR = MC = 4`: `25 - 0.5Q = 4`, `0.5Q = 21`, `Q = 42`

`P = 25 - 0.25(42) = 25 - 10.5 = 14.5`

Since `P = 14.5 \le 20`, the combined demand is correct.

`Q_A = 60 - 2(14.5) = 31`, `Q_S = 40 - 2(14.5) = 11`

`TR = 14.5 \times 42 = 609`

`TC = 4 \times 42 = 168`

Profit = `609 - 168 = 441`

(b) With third-degree price discrimination:

Adults: `MR_A = 30 - Q_A`. Set `MR_A = MC = 4`: `30 - Q_A = 4`, `Q_A = 26`.
`P_A = 30 - 0.5(26) = 17`.

Students: `MR_S = 20 - Q_S`. Set `MR_S = MC = 4`: `20 - Q_S = 4`, `Q_S = 16`.
`P_S = 20 - 0.5(16) = 12`.

Total `Q = 26 + 16 = 42`

`TR_A = 17 \times 26 = 442`. `TR_S = 12 \times 16 = 192`. Total `TR = 634`.

`TC = 4 \times 42 = 168`. Profit = `634 - 168 = 466`.

(c) Total output is the same (`Q = 42`) in this case because marginal cost is constant. However,
profit is higher with price discrimination (`466 \gt 441`). The distribution of output shifts:
adults buy fewer tickets (`26` vs `31`) at a higher price (`17` vs `14.5`), while students buy more
(`16` vs `11`) at a lower price (`12` vs `14.5`).

</details>

<details>
<summary>Question 4: Monopolistic Competition Long-Run Equilibrium</summary>

A monopolistically competitive firm faces the demand function `P = 80 - 2Q` and has a total cost
function `TC = 100 + 10Q + Q^2`.

(a) Find the short-run profit-maximising output, price, and profit. (b) In the long run, new firms
enter until economic profit is zero. If entry causes the firm's demand curve to shift parallel
inward to `P = a - 2Q`, find the value of `a` at long-run equilibrium. (c) At long-run equilibrium,
what is the firm's output, price, and excess capacity?

(a) `TR = 80Q - 2Q^2`. `MR = 80 - 4Q`. `MC = 10 + 2Q`.

Set `MR = MC`: `80 - 4Q = 10 + 2Q`, `70 = 6Q`, `Q = 11.67`.

`P = 80 - 2(11.67) = 56.67`.

`TR = 56.67 \times 11.67 = 661.3`. `TC = 100 + 10(11.67) + (11.67)^2 = 100 + 116.7 + 136.1 = 352.8`.

Profit = `661.3 - 352.8 = 308.5`. Supernormal profit.

(b) In the long run, `P = ATC` at the profit-maximising output.

New demand: `P = a - 2Q`. `TR = aQ - 2Q^2`. `MR = a - 4Q`. `MC = 10 + 2Q`.

Set `MR = MC`: `a - 4Q = 10 + 2Q`, so `Q = (a - 10) / 6`.

At this `Q`: `P = a - 2 \times (a - 10) / 6 = a - (a - 10) / 3 = (3a - a + 10) / 3 = (2a + 10) / 3`.

`ATC = 100/Q + 10 + Q = 100 / ((a - 10)/6) + 10 + (a - 10)/6 = 600 / (a - 10) + 10 + (a - 10) / 6`.

Set `P = ATC`: `(2a + 10) / 3 = 600 / (a - 10) + 10 + (a - 10) / 6`.

Multiply by `6(a - 10)`: `2(a - 10)(2a + 10) = 3600 + 60(a - 10) + (a - 10)^2`.

`2(2a^2 + 10a - 20a - 100) = 3600 + 60a - 600 + a^2 - 20a + 100`.

`4a^2 - 40a - 200 = 3100 + 40a + a^2`.

`3a^2 - 80a - 3300 = 0`.

Using the quadratic formula:
`a = (80 + sqrt(6400 + 39600)) / 6 = (80 + sqrt(46000)) / 6 = (80 + 214.5) / 6 = 49.1`.

So `a \approx 49.1`.

(c) At `a \approx 49.1`: `Q = (49.1 - 10) / 6 = 6.52`.

`ATC_min` occurs where `MC = ATC`: `10 + 2Q = 100/Q + 10 + Q`, so `Q = 100/Q`, `Q^2 = 100`,
`Q = 10`.

Excess capacity = `10 - 6.52 = 3.48` units.

</details>

<details>
<summary>Question 5: Natural Monopoly Regulation</summary>

A natural monopoly providing water supply has a total cost function `TC = 200 + 10Q` and faces
demand `P = 50 - 2Q`.

(a) Find the unregulated profit-maximising output, price, and profit. (b) Calculate the deadweight
loss under unregulated monopoly. (c) If the government regulates the firm to produce at allocative
efficiency (`P = MC`), find the output, price, and the firm's profit/loss. (d) If the government
regulates the firm to earn zero economic profit (`P = ATC`), find the output and price.

(a) `MR = 50 - 4Q`. `MC = 10`.

Set `MR = MC`: `50 - 4Q = 10`, `Q = 10`. `P = 50 - 2(10) = 30`.

`TR = 300`. `TC = 200 + 100 = 300`. Profit = 0. (In this case, the monopolist earns normal profit at
the profit-maximising output.)

(b) At allocative efficiency: `P = MC`: `50 - 2Q = 10`, `Q = 20`, `P = 10`.

`MC` at `Q = 10` is `10`.
`DWL = 0.5 \times (30 - 10) \times (20 - 10) = 0.5 \times 20 \times 10 = 100`.

(c) Allocative efficiency: `Q = 20`, `P = 10`.

`TR = 200`. `TC = 200 + 200 = 400`. Loss = `200 - 400 = -200`.

The firm makes a loss of USD 200. The government would need to subsidise the firm by USD 200 per
period to keep it operating. This illustrates the regulatory dilemma of natural monopolies.

(d) Zero economic profit: `P = ATC`. `ATC = 200/Q + 10`.

`50 - 2Q = 200/Q + 10`. Multiply by `Q`: `50Q - 2Q^2 = 200 + 10Q`.

`2Q^2 - 40Q + 200 = 0`. `Q^2 - 20Q + 100 = 0`. `(Q - 10)^2 = 0`. `Q = 10`. `P = 30`.

This is the same as the unregulated outcome in this particular example because the monopolist
happens to earn normal profit at `Q = 10`. In general, `P = ATC` regulation would yield a different
result from unregulated monopoly.

</details>

<details>
<summary>Question 6: Oligopoly Game Theory</summary>

Two airlines, `A` and `B`, are the only carriers on a route. Each can choose to set a high price
(USD 500) or a low price (USD 300). The payoff matrix (profit in USD million per month) is:

|                 | `B`: High Price  | `B`: Low Price  |
| --------------- | ---------------- | --------------- |
| `A`: High Price | `A`: 12, `B`: 12 | `A`: 3, `B`: 18 |
| `A`: Low Price  | `A`: 18, `B`: 3  | `A`: 6, `B`: 6  |

(a) Does either firm have a dominant strategy? (b) What is the Nash equilibrium? (c) Is the Nash
equilibrium Pareto efficient? (d) If the game is repeated indefinitely (supergame), is collusion
more likely to be sustained?

(a) If `B` chooses High: `A` gets 12 (High) vs 18 (Low). `A` prefers Low.

If `B` chooses Low: `A` gets 3 (High) vs 6 (Low). `A` prefers Low.

Low is a dominant strategy for `A`. By symmetry, Low is a dominant strategy for `B`.

(b) The Nash equilibrium is (Low, Low) with payoffs (6, 6). Both firms play their dominant strategy.

(c) No. The outcome (High, High) with payoffs (12, 12) is Pareto superior: both firms are better
off. However, neither firm will choose High because the incentive to deviate is too strong
(prisoner's dilemma).

(d) In a repeated game (infinitely repeated supergame), collusion can be sustained through **trigger
strategies**: each firm starts by choosing High. If the rival ever chooses Low, the defecting firm
punishes by switching to Low forever (grim trigger). The present value of cooperating must exceed
the present value of defecting. If the discount factor is high enough (firms value future profits
sufficiently), collusion is sustainable because the one-time gain from cheating (USD 6 million extra
this period) is outweighed by the loss of future cooperation (USD 6 million per period forever).
This is why oligopolistic firms often sustain tacit collusion in practice.

</details>

<details>
<summary>Question 7: Comparing Market Structures</summary>

An industry has demand `P = 120 - Q` and each firm has `TC = 100 + 10Q + 0.5Q^2`.

(a) Under perfect competition with many identical firms, find the long-run equilibrium price, firm
output, and number of firms. (b) Under monopoly, find the profit-maximising price, output, and
profit. (c) Calculate the deadweight loss of monopoly. (d) Compare consumer surplus under both
structures.

(a) Long-run equilibrium: `P = MC = ATC_min`.

`MC = 10 + Q`. `ATC = 100/Q + 10 + 0.5Q`.

`ATC_min`: `d(ATC)/dQ = -100/Q^2 + 0.5 = 0`, so `Q^2 = 200`, `Q = 14.14`.

`ATC_min = 100/14.14 + 10 + 0.5(14.14) = 7.07 + 10 + 7.07 = 24.14`.

`MC` at `Q = 14.14` = `10 + 14.14 = 24.14`. So `P = 24.14`.

Market demand at `P = 24.14`: `24.14 = 120 - Q`, `Q = 95.86`.

Number of firms = `95.86 / 14.14 = 6.78` (approximately 7 firms).

(b) Monopoly: `MR = 120 - 2Q`. `MC = 10 + Q`.

Set `MR = MC`: `120 - 2Q = 10 + Q`, `Q = 36.67`. `P = 120 - 36.67 = 83.33`.

`TR = 83.33 \times 36.67 = 3055.4`.
`TC = 100 + 10(36.67) + 0.5(36.67)^2 = 100 + 366.7 + 672.2 = 1138.9`.

Profit = `3055.4 - 1138.9 = 1916.5`.

(c) Competitive output: `P = MC`: `120 - Q = 10 + Q`, `Q = 55`, `P = 65`.

Wait, let me recalculate. Under perfect competition with many firms, the industry supply curve is
the horizontal sum of individual `MC` curves. For `n` firms, each with `MC = 10 + q_i`:
`P = 10 + q_i`, so `q_i = P - 10`. Total supply: `Q = n(P - 10)`.

Market equilibrium: `120 - Q = P` and `Q = n(P - 10)`, so `120 - n(P - 10) = P`.

In the long run, `P = ATC_min = 24.14` as calculated above.

Competitive output: `Q = 120 - 24.14 = 95.86`. Competitive price: `P = 24.14`.

`DWL = 0.5 \times (83.33 - 28.33) \times (95.86 - 36.67) = 0.5 \times 55 \times 59.19 = 1627.7`.

Note: `MC` at monopoly output = `10 + 36.67 = 46.67`.

(d) `CS_{comp} = 0.5 \times (120 - 24.14) \times 95.86 = 0.5 \times 95.86 \times 95.86 = 4594.5`.

`CS_{mon} = 0.5 \times (120 - 83.33) \times 36.67 = 0.5 \times 36.67 \times 36.67 = 672.2`.

Consumer surplus is much higher under perfect competition (4594.5 vs 672.2). The monopolist captures
a large portion of consumer surplus as producer surplus (supernormal profit).

</details>

<details>
<summary>Question 8: Short-Run Supply Curve</summary>

A perfectly competitive firm has `TVC = 5Q^2` and `TFC = 200`.

(a) Derive the `AVC`, `MC`, and `ATC` functions. (b) At what price does the firm shut down? (c)
Derive the firm's short-run supply function. (d) If the market price is USD 30, how much does the
firm produce?

(a) `AVC = TVC / Q = 5Q`. `MC = d(TVC)/dQ = 10Q`. `ATC = (200 + 5Q^2) / Q = 200/Q + 5Q`.

(b) Shutdown occurs at `P = min AVC`. `AVC = 5Q` is minimised as `Q` approaches 0. The minimum `AVC`
is 0 (at `Q = 0`). However, this is a special case because `AVC` starts at 0 and increases linearly.
The shutdown price is technically `P = 0`, meaning the firm will produce at any positive price. In
practice, the firm will produce as long as `P \gt 0`.

A more realistic interpretation: the firm produces at any price above `P = 0` because `AVC` is
increasing from 0. The supply function is valid for all positive prices.

(c) The firm produces where `P = MC` (as long as `P \ge AVC`): `P = 10Q`, so `Q = P/10`.

For `P \gt 0`: `Q = P/10`.

(d) At `P = 30`: `Q = 30/10 = 3` units.

</details>

---

## Problem Set

<details>
<summary>Problem 1: Identifying Market Structures</summary>

For each of the following markets, identify the most appropriate market structure and explain your
reasoning with reference to the characteristics discussed in this file.

(a) Fresh vegetables at a wet market in Hong Kong
(b) Electricity supply in Hong Kong (CLP Power)
(c) Restaurants in Causeway Bay
(d) Smartphone operating systems globally

<details>
<summary>Solution</summary>

(a) **Perfect competition** (approximately). Many sellers, homogeneous product (vegetables are largely
undifferentiated), no barriers to entry (anyone can set up a stall), price-taking behaviour.

(b) **Monopoly**. Single seller (CLP Power has an exclusive franchise), unique product, very high
barriers to entry (natural monopoly due to huge infrastructure costs), price maker.

(c) **Monopolistic competition**. Many restaurants, differentiated products (cuisine, location, service,
ambiance), low barriers to entry (new restaurants can open relatively easily), some price-setting
power through differentiation.

(d) **Oligopoly**. A few dominant firms (Android/Google, Apple iOS), high barriers to entry (network
effects, app ecosystems, development costs), mutual interdependence.

</details>

If you get this wrong, revise: [Overview of Market Structures](#overview-of-market-structures)

</details>

<details>
<summary>Problem 2: Perfect Competition Long-Run Entry</summary>

In a perfectly competitive industry, each firm has `TC = 100 + 5Q + Q^2`. The current market price is
`P = 30`.

(a) Find each firm's profit-maximising output and profit. (b) In the long run, will firms enter or
exit? What will the long-run equilibrium price be?

<details>
<summary>Solution</summary>

(a) `MC = 5 + 2Q`. Set `P = MC`: `30 = 5 + 2Q`, `Q = 12.5`.

`ATC = 100/12.5 + 5 + 12.5 = 8 + 5 + 12.5 = 25.5`.

Profit per unit = `30 - 25.5 = 4.5`. Total profit = `12.5 \times 4.5 = 56.25`.

The firm earns supernormal profit.

(b) Supernormal profit attracts entry. New firms enter, increasing industry supply, which drives the
price down. Entry continues until `P = ATC_{\min}`.

`ATC_{\min}`: `MC = ATC` means `5 + 2Q = 100/Q + 5 + Q`, so `Q = 100/Q`, `Q^2 = 100`, `Q = 10`.

`ATC_{\min} = 100/10 + 5 + 10 = 25`.

Long-run equilibrium price = 25. Each firm produces `Q = 10` and earns normal profit.

</details>

If you get this wrong, revise: [Long-Run Equilibrium](#long-run-equilibrium)

</details>

<details>
<summary>Problem 3: Monopoly Deadweight Loss</summary>

A monopolist faces demand `P = 80 - 0.5Q` and has `TC = 40 + 10Q`.

(a) Find the profit-maximising price and output. (b) Find the competitive price and output (where
`P = MC`). (c) Calculate the deadweight loss.

<details>
<summary>Solution</summary>

(a) `TR = 80Q - 0.5Q^2`. `MR = 80 - Q`. `MC = 10`.

Set `MR = MC`: `80 - Q = 10`, `Q_m = 70`. `P_m = 80 - 35 = 45`.

(b) Competitive: `P = MC`: `80 - 0.5Q = 10`, `0.5Q = 70`, `Q_c = 140`. `P_c = 10`.

(c) `MC` at `Q_m = 70` is 10.

`DWL = 0.5 \times (45 - 10) \times (140 - 70) = 0.5 \times 35 \times 70 = 1225`.

</details>

If you get this wrong, revise: [Inefficiency of Monopoly](#inefficiency-of-monopoly)

</details>

<details>
<summary>Problem 4: Third-Degree Price Discrimination</summary>

A museum charges different prices to adults and students. Demand: `P_A = 50 - Q_A`,
`P_S = 30 - Q_S`. `MC = 5` (constant).

(a) If the museum cannot price discriminate, find the optimal single price and profit. (b) If it can
price discriminate, find the price for each group and total profit. (c) Which group has more elastic
demand?

<details>
<summary>Solution</summary>

(a) Without discrimination, we need aggregate demand. `Q_A = 50 - P`, `Q_S = 30 - P`.

For `P \le 30`: `Q = 80 - 2P`, so `P = 40 - 0.5Q`, `MR = 40 - Q`.

Set `MR = MC`: `40 - Q = 5`, `Q = 35`. `P = 40 - 17.5 = 22.5`.

`TR = 22.5 \times 35 = 787.5`. `TC = 5 \times 35 = 175`. Profit = 612.5.

(b) Adults: `MR_A = 50 - 2Q_A`. Set `MR_A = 5`: `Q_A = 22.5`. `P_A = 27.5`.

Students: `MR_S = 30 - 2Q_S`. Set `MR_S = 5`: `Q_S = 12.5`. `P_S = 17.5`.

Total `Q = 35`. `TR = 27.5 \times 22.5 + 17.5 \times 12.5 = 618.75 + 218.75 = 837.5`.

Profit = `837.5 - 175 = 662.5`.

(c) Students face a lower price (`17.5` vs `27.5`), so students have **more elastic demand**. They are
more price-sensitive, so the monopolist charges them less.

</details>

If you get this wrong, revise: [Price Discrimination](#price-discrimination)

</details>

<details>
<summary>Problem 5: Game Theory — Nash Equilibrium</summary>

Two firms, Alpha and Beta, compete on advertising spend. Each can choose High or Low advertising. The
payoff matrix (annual profit in USD million):

|                 | Beta: High Ad | Beta: Low Ad |
| --------------- | ------------- | ------------ |
| Alpha: High Ad  | 5, 5          | 15, 2        |
| Alpha: Low Ad   | 2, 15         | 10, 10       |

(a) Does either firm have a dominant strategy? (b) Find the Nash equilibrium. (c) Is there a
Pareto-superior outcome? Explain.

<details>
<summary>Solution</summary>

(a) If Beta chooses High: Alpha gets 5 (High) vs 2 (Low). Alpha prefers High.
If Beta chooses Low: Alpha gets 15 (High) vs 10 (Low). Alpha prefers High.
High is a dominant strategy for Alpha. By symmetry, High is a dominant strategy for Beta.

(b) Nash equilibrium: (High Ad, High Ad) with payoffs (5, 5).

(c) (Low Ad, Low Ad) with payoffs (10, 10) is Pareto superior -- both firms are better off. But neither
will choose Low because the incentive to deviate to High is too strong (prisoner's dilemma).

</details>

If you get this wrong, revise: [Game Theory and Strategic Behaviour](#game-theory-and-strategic-behaviour)

</details>

<details>
<summary>Problem 6: Kinked Demand Curve</summary>

An oligopolistic firm faces a kinked demand curve. Above the current price `P^* = 50`, demand is given
by `P = 60 - 0.5Q`. Below `P^*`, demand is given by `P = 70 - Q`.

(a) Find the quantity at the kink. (b) Derive the `MR` above and below the kink. (c) If `MC` increases
from 20 to 30, will the firm change its price? Explain.

<details>
<summary>Solution</summary>

(a) Above the kink: at `P = 50`, `50 = 60 - 0.5Q`, `Q = 20`. Below the kink: at `P = 50`,
`50 = 70 - Q`, `Q = 20`. Both segments meet at `(Q, P) = (20, 50)`. The kink is at `Q^* = 20`.

(b) Above the kink: `P = 60 - 0.5Q`, `TR = 60Q - 0.5Q^2`, `MR = 60 - Q`.
At `Q = 20`: `MR = 40`.

Below the kink: `P = 70 - Q`, `TR = 70Q - Q^2`, `MR = 70 - 2Q`.
At `Q = 20`: `MR = 30`.

The `MR` gap is from 30 to 40 at `Q = 20`.

(c) As long as `MC` stays between 30 and 40, the profit-maximising output and price do not change. Since
`MC = 20` is below the gap and `MC = 30` is at the bottom of the gap, the firm continues to produce at
`Q = 20`, `P = 50`. This illustrates **price rigidity** under the kinked demand curve model.

</details>

If you get this wrong, revise: [The Kinked Demand Curve Model](#the-kinked-demand-curve-model)

</details>

<details>
<summary>Problem 7: Natural Monopoly Regulation</summary>

A natural monopoly has `TC = 300 + 5Q` and faces demand `P = 45 - 0.5Q`.

(a) Find the unregulated monopoly output, price, and profit. (b) If the government forces `P = MC`,
find output, price, and profit/loss. (c) If the government forces `P = ATC`, find output and price.

<details>
<summary>Solution</summary>

(a) `MR = 45 - Q`. `MC = 5`. Set `MR = MC`: `45 - Q = 5`, `Q = 40`. `P = 45 - 20 = 25`.

`TR = 25 \times 40 = 1000`. `TC = 300 + 200 = 500`. Profit = 500.

(b) Allocative efficiency: `P = MC`: `45 - 0.5Q = 5`, `Q = 80`. `P = 5`.

`TR = 400`. `TC = 300 + 400 = 700`. Loss = -300. The government must subsidise the firm.

(c) `P = ATC`: `45 - 0.5Q = 300/Q + 5`. Multiply by `Q`: `45Q - 0.5Q^2 = 300 + 5Q`.

`0.5Q^2 - 40Q + 300 = 0`. `Q^2 - 80Q + 600 = 0`.

Using the quadratic formula: `Q = (80 \pm \sqrt{6400 - 2400}) / 2 = (80 \pm 63.2) / 2`.

`Q = 71.6` (taking the larger root). `P = 45 - 35.8 = 9.2`.

</details>

If you get this wrong, revise: [Natural Monopoly: Detailed Analysis](#natural-monopoly-detailed-analysis)

</details>

<details>
<summary>Problem 8: Contestable Markets</summary>

A single firm operates as a monopoly on a small island, producing electricity with `TC = 200 + 2Q`.
Demand is `P = 20 - Q`. There are no sunk costs -- any firm can enter and exit at zero cost.

(a) If the firm acts as an unregulated monopolist, what price does it charge? (b) If the market is
perfectly contestable, what price will the firm charge? Explain. (c) Compare the output under both
scenarios.

<details>
<summary>Solution</summary>

(a) Unregulated: `MR = 20 - 2Q`. `MC = 2`. Set `MR = MC`: `20 - 2Q = 2`, `Q = 9`. `P = 11`.

(b) If the market is perfectly contestable, the threat of entry forces the firm to charge `P = ATC`
(normal profit) to avoid attracting entrants. `ATC = 200/Q + 2`.

`P = ATC`: `20 - Q = 200/Q + 2`. `Q^2 - 18Q + 200 = 0`. Discriminant = `324 - 800 = -476 \lt 0`.

No real solution exists. The firm can always undercut any potential entrant because its costs are lower
(due to economies of scale). However, contestable market theory predicts the firm will charge the
lowest price consistent with zero economic profit for a potential entrant. The potential entrant's cost
is also `TC = 200 + 2Q` (same technology, no sunk costs), so the threat of entry forces `P` down
towards `MC = 2`, the competitive price. At `P = 2`, `Q = 18`.

(c) Unregulated monopoly: `Q = 9`. Contestable market: `Q = 18`. Contestability doubles output and
halves the price, approaching the competitive outcome despite there being only one firm.

</details>

If you get this wrong, revise: [Contestable Markets Theory](#contestable-markets-theory)

</details>
