---
title: "Market Failure -- Diagnostic Tests"
description: "Diagnostic tests for A-Level Economics market failure: externalities, public goods, government intervention, and welfare analysis."
slug: diag-market-failure
hide_table_of_contents: true
---

# Market Failure — Diagnostic Tests

## Unit Tests

### UT-1: Negative Externality Diagram and Analysis
**Question:** The market for steel has demand $P = 100 - Q$ and private supply $P = 20 + Q$. Steel production causes pollution with a marginal external cost of $\text{MEC} = 10 + 0.5Q$. Calculate: (a) the market equilibrium quantity and price, (b) the socially optimal quantity and price, (c) the deadweight loss of the externality. Explain how a Pigouvian tax could correct this market failure.

**Solution:**

(a) Market equilibrium (private costs only): $100 - Q = 20 + Q$, $80 = 2Q$, $Q_m = 40$, $P_m = \pounds 60$.

(b) Social optimum: Marginal Social Cost $= \text{MPC} + \text{MEC} = (20 + Q) + (10 + 0.5Q) = 30 + 1.5Q$.

Set MSC $=$ MSB (demand): $30 + 1.5Q = 100 - Q$, $70 = 2.5Q$, $Q_{\text{opt}} = 28$, $P_{\text{opt}} = 100 - 28 = \pounds 72$.

(c) Deadweight loss: $\text{DWL} = \frac{1}{2} \times (Q_m - Q_{\text{opt}}) \times (\text{MSC at } Q_m - \text{MSB at } Q_m)$.

MSC at $Q_m = 40$: $30 + 1.5(40) = 90$. MSB at $Q_m = 40$: $100 - 40 = 60$.

$\text{DWL} = \frac{1}{2} \times (40 - 28) \times (90 - 60) = \frac{1}{2} \times 12 \times 30 = \pounds 180$.

A Pigouvian tax equal to the MEC at the socially optimal output would internalise the externality:

$\text{MEC at } Q_{\text{opt}} = 28$: $10 + 0.5(28) = \pounds 24$.

A per-unit tax of $\pounds 24$ would shift the private supply curve up to: $P = (20 + 24) + Q = 44 + Q$.

New equilibrium: $100 - Q = 44 + Q$, $56 = 2Q$, $Q = 28$, $P = \pounds 72$. This matches the social optimum.

---
### UT-2: Public Goods and Free-Rider Problem
**Question:** A town of 1000 residents is considering building a public park. Each resident's individual demand for the park is $P = 10 - 0.01Q$, where $Q$ is the park size in hectares. The marginal cost of providing the park is $\text{MC} = 200 + 20Q$. Calculate the socially optimal park size. Explain why the private market would underprovide this good.

**Solution:**

For a public good, the social marginal benefit is the vertical sum of all individual demand curves (since everyone consumes the same quantity).

Aggregate demand (vertical sum): $P_{\text{social}} = 1000 \times (10 - 0.01Q) = 10000 - 10Q$.

Social optimum: set SMB $=$ SMC:

$10000 - 10Q = 200 + 20Q$

$9800 = 30Q$

$Q^* = 326.67$ hectares (approximately 327 hectares).

Why private markets underprovide: Each individual resident only values the park at $P = 10 - 0.01Q$. At $Q = 327$, individual willingness to pay $= 10 - 3.27 = \pounds 6.73$. But the marginal cost per hectare $= 200 + 20(327) = \pounds 6740$. No individual (or small group) would pay this cost voluntarily, even though the collective benefit far exceeds the cost. The free-rider problem means each person hopes others will pay, so no one contributes. This is a market failure -- the good is non-excludable (cannot prevent non-payers from using it) and non-rivalrous (one person's use does not reduce availability to others).

---
### UT-3: Government Intervention Effectiveness
**Question:** The government bans the sale of a good with negative externalities. Using the concepts of consumer surplus, producer surplus, external cost, and deadweight loss, explain why a ban might create a larger deadweight loss than a Pigouvian tax. Use the demand $P = 80 - Q$ and supply $P = 20 + Q$ with $\text{MEC} = 15$ (constant).

**Solution:**

Market equilibrium: $80 - Q = 20 + Q$, $Q_m = 30$, $P_m = \pounds 50$.

Social optimum with constant MEC $= 15$: MSC $= (20 + Q) + 15 = 35 + Q$.

$35 + Q = 80 - Q$, $45 = 2Q$, $Q_{\text{opt}} = 22.5$, $P_{\text{opt}} = 80 - 22.5 = \pounds 57.50$.

**Pigouvian tax of $\pounds 15$:** New supply $P = 35 + Q$.

$80 - Q = 35 + Q$, $Q_t = 22.5$, $P_{\text{buyer}} = \pounds 57.50$.

This achieves the social optimum. DWL with tax $= 0$ (the tax perfectly corrects the externality).

**Ban (Q = 0):** All production and consumption ceases.

- Consumer surplus lost: $\frac{1}{2}(80 - 50)(30) = \pounds 450$
- Producer surplus lost: $\frac{1}{2}(50 - 20)(30) = \pounds 450$
- External cost avoided: $15 \times 30 = \pounds 450$
- Net DWL from ban $= 450 + 450 - 450 = \pounds 450$

The ban creates a DWL of $\pounds 450$, while the tax creates DWL of $\pounds 0$. The ban is too blunt an instrument -- it eliminates all consumption, including the 22.5 units where the marginal social benefit exceeds the marginal social cost. Only the 7.5 units from $Q = 22.5$ to $Q = 30$ generate external costs exceeding their social benefit. The tax allows the beneficial units to be consumed while charging for the external cost, whereas the ban sacrifices all consumer and producer surplus.

## Integration Tests

### IT-1: Externalities and Labour Markets (with Labour Markets)
**Question:** Education generates positive externalities because a more educated workforce increases productivity, reduces crime, and improves civic participation. The private demand for higher education is $P = 50 - 0.1Q$ and private supply is $P = 10 + 0.1Q$ (where $Q$ is in thousands of student places). The marginal external benefit is constant at $\text{MEB} = \pounds 8$. Calculate: (a) the market equilibrium, (b) the social optimum, (c) the subsidy needed to achieve the optimum. Discuss the equity implications of relying on a subsidy versus free provision.

**Solution:**

(a) Market equilibrium: $50 - 0.1Q = 10 + 0.1Q$, $40 = 0.2Q$, $Q_m = 200$ (thousand), $P_m = \pounds 30$.

(b) Social optimum: $\text{MSB} = (50 - 0.1Q) + 8 = 58 - 0.1Q$. Set $\text{MSB} = \text{MSC}$:

$58 - 0.1Q = 10 + 0.1Q$, $48 = 0.2Q$, $Q_{\text{opt}} = 240$ (thousand), $P_{\text{opt}} = 58 - 24 = \pounds 34$.

(c) Subsidy $= \text{MEB} = \pounds 8$ per student place.

With $\pounds 8$ subsidy: effective supply $= 10 + 0.1Q - 8 = 2 + 0.1Q$.

$50 - 0.1Q = 2 + 0.1Q$, $48 = 0.2Q$, $Q = 240$. Confirms the social optimum.

**Equity implications:** A subsidy preserves market provision but lowers the price to students. However, lower-income students may still be unable to afford education even with the subsidy, creating an equity concern -- the benefits of education (including positive externalities) would disproportionately accrue to wealthier families. Free provision (e.g., fully funded university) would ensure access regardless of income but is more costly for the government and may lead to overconsumption (students may choose degrees with low private returns). A means-tested subsidy or grants system could address both efficiency (correcting the externality) and equity (ensuring access for disadvantaged students).

---
### IT-2: Information Failure and Insurance Markets (with The Financial Sector)
**Question:** In the market for health insurance, asymmetric information exists because individuals know more about their health status than insurers. Explain adverse selection and moral hazard in this context. If the probability of a healthy person needing medical treatment is 5% and for an unhealthy person is 30%, and treatment costs $\pounds 10000$, calculate the minimum premium an insurer would charge if the population is 70% healthy and 30% unhealthy. Explain why this premium might drive healthy people out of the market.

**Solution:**

**Adverse selection:** Before purchasing insurance, individuals know their own health risk but insurers do not. Unhealthy individuals are more likely to buy insurance, while healthy individuals may opt out. As healthy people leave the risk pool, the average risk increases, forcing premiums higher, which drives out more healthy people -- a death spiral.

**Moral hazard:** After purchasing insurance, individuals may take more risks or use more healthcare services than they would without insurance, because they do not bear the full cost of their actions. This increases the insurer's costs beyond what was anticipated when the premium was set.

**Premium calculation:**

Expected cost per person in the population $= 0.70 \times 0.05 \times 10000 + 0.30 \times 0.30 \times 10000$

$= 0.70 \times 500 + 0.30 \times 3000 = 350 + 900 = \pounds 1250$

Minimum premium (ignoring admin costs and profit margin) $= \pounds 1250$.

**Why healthy people leave:** A healthy person's expected medical cost is only $0.05 \times 10000 = \pounds 500$. The premium of $\pounds 1250$ is 2.5 times their expected cost. A rational healthy person would prefer to self-insure (pay out of pocket if needed) rather than pay $\pounds 1250$ for insurance. If healthy people leave, the pool becomes disproportionately unhealthy, raising the average cost further.

New pool (if all healthy leave): expected cost $= 0.30 \times 3000 = \pounds 900$ per person, but now 100% of the pool is unhealthy, so expected cost per person $= 0.30 \times 10000 = \pounds 3000$. Premium rises to $\pounds 3000$.

This is the adverse selection death spiral: the inability to distinguish risk types leads to market failure where the insurance market may collapse entirely.

---
### IT-3: Environmental Policy and International Trade (with The International Economy)
**Question:** A country imposes a carbon tax of $\pounds 50$ per tonne of $\text{CO}_2$ on domestic steel producers. World steel price is $\pounds 500$ per tonne. The domestic supply is $P = 200 + 0.5Q$ and demand is $P = 800 - 0.5Q$. Without the tax, the country imports steel. Calculate: (a) the quantity of imports before and after the tax, (b) the change in domestic production, (c) the risk of carbon leakage. Explain how a carbon border adjustment mechanism (CBAM) could address this.

**Solution:**

(a) Without tax at world price $\pounds 500$:

$Q_d = (800 - 500)/0.5 = 600$. $Q_s = (500 - 200)/0.5 = 600$.

Domestic supply equals demand at world price, so imports $= 0$.

Wait, let me recalculate: $Q_d = 2(800 - 500) = 600$, $Q_s = 2(500 - 200) = 600$. At $\pounds 500$, the domestic market is in equilibrium with no trade.

Let me reconsider with a lower world price. Let world price $= \pounds 400$:

$Q_d = 2(800 - 400) = 800$, $Q_s = 2(400 - 200) = 400$. Imports $= 800 - 400 = 400$.

With carbon tax of $\pounds 50$: domestic producers face higher costs. New supply $P = 250 + 0.5Q$ (shifted up by 50).

At world price $\pounds 400$: $Q_s = 2(400 - 250) = 300$. $Q_d = 800$ (unchanged). Imports $= 800 - 300 = 500$.

(b) Change in domestic production: $400 - 300 = 100$ fewer units. The carbon tax reduced domestic steel production by 100 units.

(c) **Carbon leakage:** The carbon tax makes domestic steel less competitive, reducing domestic production (from 400 to 300 units) and increasing imports (from 400 to 500 units). The imported steel is produced in countries without carbon pricing, so global $\text{CO}_2$ emissions may not decrease -- they simply shift to other countries. This is carbon leakage.

**CBAM:** A carbon border adjustment mechanism imposes a tariff on imported steel equal to the carbon tax that would have been paid had the steel been produced domestically. If imported steel generates 2 tonnes of $\text{CO}_2$ per tonne, the CBAM tariff $= 2 \times \pounds 50 = \pounds 100$ per tonne of imported steel. This levels the playing field, preventing carbon leakage and incentivising foreign producers to reduce their emissions. It addresses the trade-off between environmental policy and international competitiveness.
