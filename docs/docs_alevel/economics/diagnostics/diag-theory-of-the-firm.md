---
title: Theory of the Firm -- Diagnostic Tests
description: "Diagnostic tests for A-Level Economics theory of the firm: profit maximisation, costs, market structures, and game theory."
slug: diag-theory-of-the-firm
hide_table_of_contents: true
---

# Theory of the Firm — Diagnostic Tests

## Unit Tests

### UT-1: Profit Maximisation and Shut-Down
**Question:** A firm has total cost function $\text{TC} = 200 + 20Q + 2Q^2$ and faces a perfectly competitive market price of $\pounds 80$. Calculate: (a) the profit-maximising output, (b) the maximum profit, (c) the shut-down price, (d) the output at which average cost is minimised.

**Solution:**

(a) Profit maximisation: $\text{MC} = \text{MR} = P$.

$\text{MC} = \frac{d\text{TC}}{dQ} = 20 + 4Q$.

$20 + 4Q = 80$, $4Q = 60$, $Q^* = 15$.

(b) Profit $= \text{TR} - \text{TC}$.

$\text{TR} = 80 \times 15 = 1200$.

$\text{TC} = 200 + 20(15) + 2(15)^2 = 200 + 300 + 450 = 950$.

$\pi = 1200 - 950 = \pounds 250$.

(c) Shut-down price: the firm shuts down if $P \lt \text{AVC}$ at the output where $\text{MC} = \text{AVC}$ (minimum of AVC).

$\text{TVC} = 20Q + 2Q^2$, $\text{AVC} = 20 + 2Q$.

Minimum AVC: $\frac{d(\text{AVC})}{dQ} = 2 \neq 0$. Actually, since AVC is linear with a positive slope, the minimum is at $Q = 0$: $\text{AVC}_{\min} = 20$.

Wait -- $\text{AVC} = \frac{\text{TVC}}{Q} = 20 + 2Q$, which increases with $Q$. The minimum is at $Q = 0$, where $\text{AVC} = 20$. So the shut-down price is $\pounds 20$.

Alternatively, $\text{AVC} = \text{MC}$: $20 + 2Q = 20 + 4Q$, which gives $Q = 0$, $\text{AVC} = 20$. Shut-down price $= \pounds 20$.

(d) Minimum AC: $\text{AC} = \frac{200 + 20Q + 2Q^2}{Q} = \frac{200}{Q} + 20 + 2Q$.

$\frac{d(\text{AC})}{dQ} = -\frac{200}{Q^2} + 2 = 0$, so $Q^2 = 100$, $Q = 10$.

$\text{AC}_{\min} = \frac{200}{10} + 20 + 20 = 20 + 20 + 20 = \pounds 40$.

At $Q = 10$: $\text{MC} = 20 + 4(10) = 60$. Note that $\text{MC} \neq \text{AC}$ at minimum AC for this cost function because AC includes a fixed cost component. Actually, the condition for minimum AC is that MC passes through AC at its minimum. Let me verify: $\text{MC}(10) = 60$, $\text{AC}(10) = 40$. These are not equal -- this seems wrong.

Let me recheck: $\text{AC} = 200/Q + 20 + 2Q$. At $Q = 10$: $\text{AC} = 20 + 20 + 20 = 40$. $\text{MC}(10) = 20 + 40 = 60$.

The property $\text{MC} = \text{AC}$ at minimum AC should hold. Let me recheck the derivative:

$\frac{d(\text{AC})}{dQ} = \frac{-200}{Q^2} + 2 = 0 \Rightarrow Q = 10$. And $\text{MC}(10) = 60 \neq 40 = \text{AC}(10)$.

There is an error. The condition is that MC intersects AC at its minimum. Let me check with a different approach: $\text{AC}$ is minimised when $\text{MC} = \text{AC}$:

$20 + 4Q = 200/Q + 20 + 2Q$

$4Q = 200/Q + 2Q$

$2Q = 200/Q$

$2Q^2 = 200$

$Q = 10$. At $Q = 10$: $\text{AC} = 200/10 + 20 + 20 = 60$. Now $\text{MC} = 60 = \text{AC}$. So $\text{AC}_{\min} = \pounds 60$, not $\pounds 40$. The earlier AC calculation was correct at $Q = 10$: $200/10 + 20 + 2(10) = 20 + 20 + 20 = 60$.

Correction: $\text{AC}_{\min} = \pounds 60$ at $Q = 10$.

---
### UT-2: Monopoly Pricing and Deadweight Loss
**Question:** A monopolist faces demand $P = 120 - 2Q$ and has total cost $\text{TC} = 50 + 10Q + Q^2$. Calculate: (a) the profit-maximising price and quantity, (b) the monopoly profit, (c) the deadweight loss compared to perfect competition, (d) the Lerner Index.

**Solution:**

(a) $\text{MR} = 120 - 4Q$ (double the slope of demand). $\text{MC} = 10 + 2Q$.

$\text{MR} = \text{MC}$: $120 - 4Q = 10 + 2Q$, $110 = 6Q$, $Q_m = 18.33$, $P_m = 120 - 2(18.33) = \pounds 83.33$.

(b) Profit $= \text{TR} - \text{TC}$.

$\text{TR} = 83.33 \times 18.33 = 1527.2$.

$\text{TC} = 50 + 10(18.33) + (18.33)^2 = 50 + 183.3 + 336.0 = 569.3$.

$\pi = 1527.2 - 569.3 = \pounds 957.9 \approx \pounds 958$.

(c) Competitive outcome: $P = \text{MC}$, $120 - 2Q = 10 + 2Q$, $110 = 4Q$, $Q_c = 27.5$, $P_c = 120 - 55 = \pounds 65$.

$\text{DWL} = \frac{1}{2}(P_m - \text{MC at } Q_m)(Q_c - Q_m) = \frac{1}{2}(83.33 - 46.67)(27.5 - 18.33)$

$\text{MC at } Q_m = 10 + 2(18.33) = 46.67$.

$\text{DWL} = \frac{1}{2}(36.67)(9.17) = \pounds 168.1$.

(d) Lerner Index $= \frac{P - \text{MC}}{P} = \frac{83.33 - 46.67}{83.33} = \frac{36.67}{83.33} = 0.44$.

The Lerner Index of 0.44 indicates significant market power. A perfectly competitive firm would have a Lerner Index of 0.

---
### UT-3: Game Theory -- Prisoner's Dilemma
**Question:** Two firms (A and B) in a duopoly can choose to set a high price or a low price. The payoff matrix (profits in $\pounds$m) is:

| | B: High | B: Low |
|---|---|---|
| A: High | (8, 8) | (2, 12) |
| A: Low | (12, 2) | (5, 5) |

Identify the Nash equilibrium. Explain why this is a prisoner's dilemma. Discuss how repeated interaction might change the outcome.

**Solution:**

For Firm A: if B chooses High, A prefers Low (12 $\gt$ 8). If B chooses Low, A prefers Low (5 $\gt$ 2). Low is a dominant strategy for A.

For Firm B: if A chooses High, B prefers Low (12 $\gt$ 8). If A chooses Low, B prefers Low (5 $\gt$ 2). Low is a dominant strategy for B.

**Nash equilibrium:** (Low, Low) with payoffs (5, 5).

**Prisoner's dilemma:** Both firms would be better off cooperating at (High, High) with payoffs (8, 8), but each has an individual incentive to defect (set Low price) regardless of what the other does. The Nash equilibrium is Pareto inferior to the cooperative outcome.

**Repeated interaction:** In an infinitely repeated game (or a finitely repeated game with uncertain endpoint), cooperative outcomes can be sustained through trigger strategies:
- **Tit-for-tat:** Start by cooperating (High), then match the opponent's previous action.
- **Grim trigger:** Cooperate until the opponent defects, then defect forever.

If the discount factor (weight placed on future payoffs) is sufficiently high, the present value of future cooperation exceeds the one-time gain from defecting. For the grim trigger: the gain from defecting once is $12 - 8 = 4$, but the future loss is $8 - 5 = 3$ per period forever. The firm will cooperate if $3/(1 - \delta) \gt 4$, i.e., $\delta \gt 1/4$. Since most firms value future profits, repeated interaction typically sustains cooperative pricing (as observed in real-world oligopolies where prices remain stable for long periods).

## Integration Tests

### IT-1: Market Structure and Labour Demand (with Labour Markets)
**Question:** A perfectly competitive firm produces output using labour as the only variable input. The production function is $Q = 10L - 0.5L^2$ and the output price is $\pounds 5$. Calculate: (a) the marginal revenue product of labour ($\text{MRP}_L$), (b) the firm's demand for labour if the wage rate is $\pounds 30$, (c) the number of workers hired at a wage of $\pounds 20$. Explain why the labour demand curve is the downward-sloping portion of the $\text{MRP}_L$ curve.

**Solution:**

(a) $\text{MRP}_L = \text{MR} \times \text{MP}_L = P \times \text{MP}_L$ (perfect competition: MR $= P$).

$\text{MP}_L = \frac{dQ}{dL} = 10 - L$.

$\text{MRP}_L = 5(10 - L) = 50 - 5L$.

(b) Profit-maximising labour hire: $\text{MRP}_L = w$.

$50 - 5L = 30$, $5L = 20$, $L = 4$ workers.

(c) At $w = 20$: $50 - 5L = 20$, $5L = 30$, $L = 6$ workers.

The labour demand curve is the downward-sloping portion of $\text{MRP}_L$ because:
1. The firm hires workers up to the point where the value of the output produced by the last worker ($\text{MRP}_L$) equals the wage ($w$).
2. As more workers are hired, $\text{MP}_L$ diminishes (law of diminishing marginal returns), so $\text{MRP}_L$ falls.
3. For each wage rate, there is a corresponding profit-maximising quantity of labour. The locus of these points traces the $\text{MRP}_L$ curve.
4. Only the downward-sloping portion is relevant because: (i) the upward-sloping portion (where $\text{MP}_L$ is increasing) represents a stage of production where adding workers increases their individual productivity, and no rational firm would stop hiring in this range; (ii) if $w \gt \text{MRP}_L$ at all levels of $L$, the firm hires zero workers.

---
### IT-2: Economies of Scale and Natural Monopoly (with Market Failure)
**Question:** A natural monopoly has total cost $\text{TC} = 1000 + 50Q$ and faces demand $P = 200 - 2Q$. Calculate: (a) the profit-maximising price and quantity, (b) the socially optimal price and quantity, (c) the price under average cost pricing, (d) the subsidy required for socially optimal pricing. Discuss the regulatory trade-off.

**Solution:**

(a) Profit maximisation: $\text{MR} = 200 - 4Q$, $\text{MC} = 50$.

$200 - 4Q = 50$, $Q_m = 37.5$, $P_m = 200 - 75 = \pounds 125$.

Profit $= 125 \times 37.5 - (1000 + 50 \times 37.5) = 4687.5 - 2875 = \pounds 1812.5$.

(b) Socially optimal (allocatively efficient): $P = \text{MC}$.

$200 - 2Q = 50$, $Q_{\text{opt}} = 75$, $P_{\text{opt}} = \pounds 50$.

Profit at social optimum: $50 \times 75 - (1000 + 3750) = 3750 - 4750 = -\pounds 1000$ (loss).

(c) Average cost pricing: $P = \text{AC}$.

$\text{AC} = \frac{1000}{Q} + 50$. $P = 200 - 2Q$.

$200 - 2Q = \frac{1000}{Q} + 50$, $150 - 2Q = \frac{1000}{Q}$, $150Q - 2Q^2 = 1000$.

$2Q^2 - 150Q + 1000 = 0$, $Q^2 - 75Q + 500 = 0$.

$Q = \frac{75 \pm \sqrt{5625 - 2000}}{2} = \frac{75 \pm 60.1}{2}$.

$Q = 67.6$ (taking the feasible root). $P = 200 - 2(67.6) = \pounds 64.8$.

(d) Subsidy for socially optimal pricing: the firm loses $\pounds 1000$ at $P = 50$, $Q = 75$. The government must provide a subsidy of $\pounds 1000$ to keep the firm in operation.

**Regulatory trade-off:**
- Socially optimal pricing ($P = \text{MC} = 50$) is allocatively efficient but requires a $\pounds 1000$ subsidy, creating a deadweight loss from taxation (the cost of raising $\pounds 1000$ in tax revenue exceeds $\pounds 1000$ due to the excess burden of taxation).
- Average cost pricing ($P \approx 65$) allows the firm to break even without subsidy but creates a deadweight loss from underproduction ($Q = 67.6$ instead of $75$).
- The regulator must balance these: if the excess burden of taxation is small, $P = \text{MC}$ is preferable; if large, average cost pricing may be more efficient overall.

---
### IT-3: Oligopoly, Collusion, and International Trade (with The International Economy)
**Question:** Two countries (Home and Foreign) each have one steel producer with constant marginal cost $\pounds 40$. World demand is $P = 160 - Q$. In a Cournot duopoly, calculate: (a) the equilibrium output, price, and profit for each firm, (b) the output and profit if they form a cartel (acting as a monopoly), (c) the incentive for each firm to cheat on the cartel. Discuss how international trade agreements (e.g., anti-dumping laws) affect such arrangements.

**Solution:**

(a) **Cournot duopoly:** Each firm chooses $Q_i$ to maximise profit given the other's output.

$P = 160 - (Q_H + Q_F)$.

Firm H's profit: $\pi_H = (160 - Q_H - Q_F)Q_H - 40Q_H = (120 - Q_F)Q_H - Q_H^2$.

$\frac{d\pi_H}{dQ_H} = 120 - Q_F - 2Q_H = 0$, so $Q_H = 60 - Q_F/2$. (Best response function)

By symmetry: $Q_F = 60 - Q_H/2$.

Solving simultaneously: $Q_H = 60 - (60 - Q_H/2)/2 = 60 - 30 + Q_H/4 = 30 + Q_H/4$.

$3Q_H/4 = 30$, $Q_H = 40$. By symmetry, $Q_F = 40$.

Total output $= 80$, $P = 160 - 80 = \pounds 80$.

$\pi_H = (80 - 40)(40) = \pounds 1600$. $\pi_F = \pounds 1600$.

(b) **Cartel (monopoly):** $Q_{\text{total}}$: $\text{MR} = 160 - 2Q = 40$, $Q = 60$, $P = \pounds 100$.

Total profit $= (100 - 40)(60) = \pounds 3600$. If split equally: each firm produces 30 units and earns $\pounds 1800$.

(c) **Incentive to cheat:** If Firm H cheats while Firm F produces 30:

Firm H's demand: $P = 160 - (Q_H + 30) = 130 - Q_H$.

$\text{MR}_H = 130 - 2Q_H = 40$, $Q_H = 45$.

$P = 130 - 45 = \pounds 85$.

$\pi_H = (85 - 40)(45) = \pounds 2025$.

$\pi_F = (85 - 40)(30) = \pounds 1350$.

Firm H earns $\pounds 2025$ by cheating vs $\pounds 1800$ by complying -- a gain of $\pounds 225$. This incentive to cheat is why cartels are inherently unstable.

**Anti-dumping laws:** If the cartel raises price to $\pounds 100$ but one firm cheats by selling excess output abroad at lower prices (dumping), anti-dumping laws allow importing countries to impose tariffs on goods sold below fair market value. This reduces the profitability of cheating on international cartels and provides a mechanism to prevent predatory pricing strategies that could drive domestic competitors out of business.
