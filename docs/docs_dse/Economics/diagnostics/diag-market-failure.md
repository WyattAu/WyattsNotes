---
title: "Market Failure and Government Intervention -- Diagnostic Tests"
description: "DSE Economics diagnostic tests for market failure: externalities, public goods, information asymmetry, government intervention methods."
slug: diag-market-failure
hide_table_of_contents: true
---

# Market Failure and Government Intervention — Diagnostic Tests

## Unit Tests

### UT-1: Negative Externalities and Pigouvian Tax
**Question:** A factory producing chemicals generates pollution as a negative externality. Private marginal cost: $MPC = 20 + 0.5Q$. Marginal external cost: $MEC = 0.3Q$. Demand (marginal private benefit): $P = 100 - 0.8Q$. (a) Calculate the free market equilibrium quantity and price. (b) Calculate the socially optimal quantity and price. (c) Calculate the Pigouvian tax needed to achieve the social optimum. (d) Calculate the deadweight loss of the free market outcome.

**Solution:**

(a) Free market: $MPC = MPB$: $20 + 0.5Q = 100 - 0.8Q$, $1.3Q = 80$, $Q_m = 61.54$. $P_m = 100 - 0.8(61.54) = \$50.77$.

(b) Social optimum: $MSC = MSB$. $MSC = MPC + MEC = 20 + 0.5Q + 0.3Q = 20 + 0.8Q$. $MSB = MPB = 100 - 0.8Q$ (assuming no external benefit).

$20 + 0.8Q = 100 - 0.8Q$, $1.6Q = 80$, $Q^* = 50$. $P^* = 100 - 0.8(50) = \$60$.

(c) Pigouvian tax $= MEC$ at $Q^* = 50$: $t = 0.3(50) = \$15$. The tax shifts the private supply up by $\$15$, so $MPC + t = 20 + 0.5Q + 15 = 35 + 0.5Q$. At $Q = 50$: $35 + 0.5(50) = 60 = P^*$.

(d) DWL $= \frac{1}{2} \times MEC_{\text{at } Q_m} \times (Q_m - Q^*) = \frac{1}{2} \times 0.3(61.54) \times (61.54 - 50) = \frac{1}{2} \times 18.46 \times 11.54 = \$106.5$.

### UT-2: Public Goods and Free Rider Problem
**Question:** A coastal community of 100 residents is considering building a lighthouse. Each resident's individual demand for the lighthouse is $P_i = 10 - 0.1Q$, where $Q$ is the quality level (0 to 100). The total cost of providing quality level $Q$ is $TC = 200 + 5Q$. (a) Explain why a lighthouse is a public good, identifying which characteristics it satisfies. (b) Derive the market demand (marginal social benefit) curve. (c) Calculate the socially optimal quality level. (d) Explain why the private market would underprovide the lighthouse.

**Solution:**

(a) A lighthouse is a **public good** because it satisfies two characteristics:
1. **Non-excludable**: Once built, it is impossible or extremely costly to exclude any ship from benefiting from the light.
2. **Non-rivalrous**: One ship using the lighthouse does not reduce the amount of light available to other ships.

These characteristics create a free rider problem -- individual residents have an incentive not to pay, hoping others will fund it while they still benefit.

(b) For a public good, the market demand (MSB) is the **vertical summation** of individual demands, since all residents consume the same quantity simultaneously.

$\text{MSB} = \sum_{i=1}^{100} P_i = 100(10 - 0.1Q) = 1000 - 10Q$.

(c) Social optimum: MSB $=$ MSC. $MSC = \frac{dTC}{dQ} = 5$.

$1000 - 10Q = 5$, $10Q = 995$, $Q^* = 99.5$.

The socially optimal quality level is approximately 99.5 (essentially maximum quality).

(d) In the private market, each resident decides whether to contribute based on their **private marginal benefit** (PMB $= 10 - 0.1Q$), not the social marginal benefit. At any quality level, PMB $\lt$ MSB, so each resident undervalues the lighthouse. The private market equilibrium would occur where the individual demand equals the average cost share: $10 - 0.1Q = 5Q/100 + 2 = 0.05Q + 2$. This gives $8 = 0.15Q$, $Q = 53.3$ -- far below the social optimum of 99.5. The free rider problem means many residents would not contribute at all, expecting others to pay.

### UT-3: Information Asymmetry
**Question:** In the market for used cars, sellers know the true quality of their cars but buyers do not. There are two types of cars: good cars worth $\$80{,}000$ and bad cars (lemons) worth $\$40{,}000$. Buyers value good cars at $\$100{,}000$ and bad cars at $\$50{,}000$. Half of all cars on the market are good and half are bad. (a) What price would a risk-neutral buyer be willing to pay if they cannot distinguish between good and bad cars? (b) What happens to the market if the price from part (a) prevails? (c) Explain the concept of adverse selection in this context.

**Solution:**

(a) Expected value to buyer $= 0.5 \times 100{,}000 + 0.5 \times 50{,}000 = \$75{,}000$.

A risk-neutral buyer would pay up to $\$75{,}000$.

(b) At a price of $\$75{,}000$: Sellers of good cars (value $\$80{,}000$) would not sell because the price is below their valuation. Only sellers of bad cars (value $\$40{,}000$) would sell. This means only lemons remain in the market.

(c) **Adverse selection** occurs when asymmetric information leads to the withdrawal of high-quality products from the market. Since buyers cannot distinguish good from bad cars, they offer a price based on the average quality. This price drives out the good cars (whose owners won't sell at that price), leaving only lemons. Buyers then realise only lemons remain and lower their offer price further. In the extreme, the market can collapse entirely -- a result known as the "market for lemons" (Akerlof, 1970). Solutions include: warranties/s guarantees (signalling), third-party inspections, certification programmes, and reputation systems.

---

## Integration Tests

### IT-1: Externalities and Tax Incidence (with Demand and Supply)
**Question:** The market for electricity has demand $P = 200 - Q$ and supply $P = 40 + Q$ (in cents per kWh). Electricity generation produces pollution with marginal external cost $MEC = 20$. (a) Calculate the free market equilibrium. (b) Calculate the socially optimal quantity. (c) If the government imposes a Pigouvian tax, calculate: the tax per unit, the new equilibrium, tax revenue, deadweight loss reduction, and the tax incidence on consumers vs producers. (d) If demand becomes more inelastic (shifts to $P = 200 - 0.5Q$), how does this change the tax incidence?

**Solution:**

(a) Free market: $200 - Q = 40 + Q$, $2Q = 160$, $Q_m = 80$, $P_m = \$1.20$.

(b) Social optimum: $MSC = MPC + MEC = (40 + Q) + 20 = 60 + Q = MSB = 200 - Q$. $2Q = 140$, $Q^* = 70$, $P^* = \$1.30$.

(c) Pigouvian tax $= MEC = 20$ cents. New supply: $P = 60 + Q$. New equilibrium: $200 - Q = 60 + Q$, $Q = 70$, $P_{\text{buyer}} = \$1.30$, $P_{\text{seller}} = \$1.10$.

Tax revenue $= 20 \times 70 = 1400$ cents $= \$14$.

DWL without tax $= \frac{1}{2} \times 20 \times (80 - 70) = \$100$ cents. With the tax, DWL from externality is eliminated. Total DWL $= 0$ (the tax perfectly corrects the externality).

Tax incidence: Consumer burden $= 130 - 120 = 10$ cents (50%). Producer burden $= 120 - 110 = 10$ cents (50%).

(d) With $P = 200 - 0.5Q$: Free market: $200 - 0.5Q = 40 + Q$, $1.5Q = 160$, $Q_m = 106.67$, $P_m = 146.67$.

Post-tax: $200 - 0.5Q = 60 + Q$, $1.5Q = 140$, $Q_t = 93.33$, $P_{\text{buyer}} = 153.33$, $P_{\text{seller}} = 133.33$.

Consumer burden $= 153.33 - 146.67 = 6.67$ (33%). Producer burden $= 146.67 - 133.33 = 13.33$ (67%).

With more inelastic demand, producers bear a larger share of the tax burden. This is because consumers are less responsive to price changes, so producers cannot pass the full tax onto them.

### IT-2: Government Regulation and Market Failure (with Market Structure)
**Question:** A monopoly water company has $TC = 200 + 5Q$ and faces demand $P = 50 - 0.5Q$. The government is considering three regulatory options: (a) marginal cost pricing, (b) average cost pricing, or (c) a price cap. (a) Calculate the profit-maximising monopoly outcome. (b) Calculate the outcome under each regulatory option. (c) Which option eliminates deadweight loss? Which ensures the firm breaks even? (d) What problem might arise with marginal cost pricing in practice?

**Solution:**

(a) Monopoly: $MR = 50 - Q$. $MC = 5$. $50 - Q = 5$, $Q_m = 45$. $P_m = 50 - 22.5 = \$27.50$. Profit $= 27.50(45) - 200 - 5(45) = 1237.50 - 200 - 225 = \$812.50$.

(b) **Marginal cost pricing**: $P = MC = 5$. $50 - 0.5Q = 5$, $Q = 90$, $P = \$5$. Profit $= 5(90) - 200 - 5(90) = -\$200$ (loss equal to fixed costs).

**Average cost pricing**: $P = AC$. $AC = 200/Q + 5$. $50 - 0.5Q = 200/Q + 5$. Multiply by $Q$: $50Q - 0.5Q^2 = 200 + 5Q$. $0.5Q^2 - 45Q + 200 = 0$. $Q^2 - 90Q + 400 = 0$. $Q = \frac{90 \pm \sqrt{8100 - 1600}}{2} = \frac{90 \pm \sqrt{6500}}{2} = \frac{90 \pm 80.62}{2}$. $Q = 85.31$ or $Q = 4.69$. Taking the larger: $Q = 85.31$, $P = 50 - 0.5(85.31) = \$7.35$. Profit $\approx 0$.

**Price cap**: If set at, say, $\$10$: $Q = 80$. The firm becomes a price taker and produces where $P = MC$: $Q = 90$. Wait, at $P = 10$: $Q_d = 80$. The firm maximises profit subject to $P \le 10$, producing $Q = 80$.

(c) Marginal cost pricing eliminates DWL (achieves allocative efficiency). Average cost pricing ensures the firm breaks even (zero economic profit). Price caps can achieve something in between depending on the cap level.

(d) With marginal cost pricing, the firm makes a loss equal to its fixed costs (\$200). In the long run, the firm would exit the market unless subsidised. This creates a dependency on government subsidy, which may be politically costly. This is the "natural monopoly dilemma" -- the technology that creates natural monopoly (high fixed costs, low marginal costs) also makes marginal cost pricing unsustainable without subsidy.

### IT-3: Multiple Externalities and Policy Design (with Government Policy)
**Question:** A city has two sources of pollution: factories (negative production externality) and driving (negative consumption externality). Factory output $Q_f$: MPC $= 30 + Q_f$, MEC $= 0.5Q_f$, demand $P_f = 100 - Q_f$. Driving $Q_d$: MPB $= 60 - 0.5Q_d$, MEC $= 0.3Q_d$, private MC of driving $= 10$. (a) Calculate the free market equilibrium for each activity. (b) Calculate the socially optimal levels. (c) If the government has a budget constraint and can only tax one activity, which should it tax first? Justify using DWL calculations.

**Solution:**

(a) **Factory**: $MPC = MPB$: $30 + Q_f = 100 - Q_f$, $2Q_f = 70$, $Q_f = 35$, $P_f = \$65$.
**Driving**: $MPB = MC$: $60 - 0.5Q_d = 10$, $0.5Q_d = 50$, $Q_d = 100$.

(b) **Factory**: $MSC = MPC + MEC = 30 + 1.5Q_f = MSB = 100 - Q_f$. $2.5Q_f = 70$, $Q_f^* = 28$, $P_f^* = \$72$.
**Driving**: $MSC = MC + MEC = 10 + 0.3Q_d = MSB = 60 - 0.5Q_d$. $0.8Q_d = 50$, $Q_d^* = 62.5$.

(c) DWL from factory overproduction: $\frac{1}{2} \times 0.5(35) \times (35 - 28) = \frac{1}{2} \times 17.5 \times 7 = \$61.25$.
DWL from driving overconsumption: $\frac{1}{2} \times 0.3(100) \times (100 - 62.5) = \frac{1}{2} \times 30 \times 37.5 = \$562.50$.

The government should tax driving first because the DWL from overconsumption of driving (\$562.50) is far larger than from factory overproduction (\$61.25). This demonstrates that the government should prioritise correcting the largest market failures first when resources are limited.
