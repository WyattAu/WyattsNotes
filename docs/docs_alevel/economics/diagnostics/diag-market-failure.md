---
title: 'Market Failure -- Diagnostic Tests'
description:
  'Diagnostic tests for A-Level Economics market failure: externalities, public goods, government
  intervention, and welfare analysis.'
slug: diag-market-failure
hide_table_of_contents: true
---

# Market Failure — Diagnostic Tests

## Unit Tests

### UT-1: Negative Externality Diagram and Analysis

**Question:** The market for steel has demand $P = 100 - Q$ and private supply $P = 20 + Q$. Steel
production causes pollution with a marginal external cost of $\text{MEC} = 10 + 0.5Q$. Calculate:
(a) the market equilibrium quantity and price, (b) the socially optimal quantity and price, (c) the
deadweight loss of the externality. Explain how a Pigouvian tax could correct this market failure.

**Solution:**

(a) Market equilibrium (private costs only):
$100 - Q = 20 + Q$$80 = 2Q$$Q_m = 40$$P_m = \pounds 60$.

(b) Social optimum: Marginal Social Cost
$= \text{MPC} + \text{MEC} = (20 + Q) + (10 + 0.5Q) = 30 + 1.5Q$.

Set MSC $=$ MSB (demand):
$30 + 1.5Q = 100 - Q$$70 = 2.5Q$$Q_{\text{opt}} = 28$$P_{\text{opt}} = 100 - 28 = \pounds 72$.

(c) Deadweight loss:
$\text{DWL} = \frac{1}{2} \times (Q_m - Q_{\text{opt}}) \times (\text{MSC at } Q_m - \text{MSB at } Q_m)$.

MSC at $Q_m = 40$: $30 + 1.5(40) = 90$. MSB at $Q_m = 40$: $100 - 40 = 60$.

$\text{DWL} = \frac{1}{2} \times (40 - 28) \times (90 - 60) = \frac{1}{2} \times 12 \times 30 = \pounds 180$.

A Pigouvian tax equal to the MEC at the socially optimal output would internalise the externality:

$\text{MEC at } Q_{\text{opt}} = 28$: $10 + 0.5(28) = \pounds 24$.

A per-unit tax of $\pounds 24$ would shift the private supply curve up to:
$P = (20 + 24) + Q = 44 + Q$.

New equilibrium: $100 - Q = 44 + Q$$56 = 2Q$$Q = 28$$P = \pounds 72$. This matches the social
optimum.

---

### UT-2: Public Goods and Free-Rider Problem

**Question:** A town of 1000 residents is considering building a public park. Each resident's
individual demand for the park is $P = 10 - 0.01Q$Where $Q$ is the park size in hectares. The
marginal cost of providing the park is $\text{MC} = 200 + 20Q$. Calculate the socially optimal park
size. Explain why the private market would underprovide this good.

**Solution:**

For a public good, the social marginal benefit is the vertical sum of all individual demand curves
(since everyone consumes the same quantity).

Aggregate demand (vertical sum): $P_{\text{social}} = 1000 \times (10 - 0.01Q) = 10000 - 10Q$.

Social optimum: set SMB $=$ SMC:

$10000 - 10Q = 200 + 20Q$

$9800 = 30Q$

$Q^* = 326.67$ hectares (approximately 327 hectares).

Why private markets underprovide: Each individual resident only values the park at $P = 10 - 0.01Q$.
At $Q = 327$Individual willingness to pay $= 10 - 3.27 = \pounds 6.73$. But the marginal cost per
hectare $= 200 + 20(327) = \pounds 6740$. No individual (or small group) would pay this cost
voluntarily, even though the collective benefit far exceeds the cost. The free-rider problem means
each person hopes others will pay, so no one contributes. This is a market failure -- the good is
non-excludable (cannot prevent non-payers from using it) and non-rivalrous (one person's use does
not reduce availability to others).

---

### UT-3: Government Intervention Effectiveness

**Question:** The government bans the sale of a good with negative externalities. Using the concepts
of consumer surplus, producer surplus, external cost, and deadweight loss, explain why a ban might
create a larger deadweight loss than a Pigouvian tax. Use the demand $P = 80 - Q$ and supply
$P = 20 + Q$ with $\text{MEC} = 15$ (constant).

**Solution:**

Market equilibrium: $80 - Q = 20 + Q$$Q_m = 30$$P_m = \pounds 50$.

Social optimum with constant MEC $= 15$: MSC $= (20 + Q) + 15 = 35 + Q$.

$35 + Q = 80 - Q$$45 = 2Q$$Q_{\text{opt}} = 22.5$$P_{\text{opt}} = 80 - 22.5 = \pounds 57.50$.

**Pigouvian tax of $\pounds 15$:** New supply $P = 35 + Q$.

$80 - Q = 35 + Q$$Q_t = 22.5$$P_{\text{buyer}} = \pounds 57.50$.

This achieves the social optimum. DWL with tax $= 0$ (the tax perfectly corrects the externality).

**Ban (Q = 0):** All production and consumption ceases.

- Consumer surplus lost: $\frac{1}{2}(80 - 50)(30) = \pounds 450$
- Producer surplus lost: $\frac{1}{2}(50 - 20)(30) = \pounds 450$
- External cost avoided: $15 \times 30 = \pounds 450$
- Net DWL from ban $= 450 + 450 - 450 = \pounds 450$

The ban creates a DWL of $\pounds 450$While the tax creates DWL of $\pounds 0$. The ban is too blunt
an instrument -- it eliminates all consumption, including the 22.5 units where the marginal social
benefit exceeds the marginal social cost. Only the 7.5 units from $Q = 22.5$ to $Q = 30$ generate
external costs exceeding their social benefit. The tax allows the beneficial units to be consumed
while charging for the external cost, whereas the ban sacrifices all consumer and producer surplus.

## Integration Tests

### IT-1: Externalities and Labour Markets (with Labour Markets)

**Question:** Education generates positive externalities because a more educated workforce increases
productivity, reduces crime, and improves civic participation. The private demand for higher
education is $P = 50 - 0.1Q$ and private supply is $P = 10 + 0.1Q$ (where $Q$ is in thousands of
student places). The marginal external benefit is constant at $\text{MEB} = \pounds 8$. Calculate:
(a) the market equilibrium, (b) the social optimum, (c) the subsidy needed to achieve the optimum.
Discuss the equity implications of relying on a subsidy versus free provision.

**Solution:**

(a) Market equilibrium: $50 - 0.1Q = 10 + 0.1Q$$40 = 0.2Q$$Q_m = 200$ (thousand),
$P_m = \pounds 30$.

(b) Social optimum: $\text{MSB} = (50 - 0.1Q) + 8 = 58 - 0.1Q$. Set $\text{MSB} = \text{MSC}$:

$58 - 0.1Q = 10 + 0.1Q$$48 = 0.2Q$$Q_{\text{opt}} = 240$ (thousand),
$P_{\text{opt}} = 58 - 24 = \pounds 34$.

(c) Subsidy $= \text{MEB} = \pounds 8$ per student place.

With $\pounds 8$ subsidy: effective supply $= 10 + 0.1Q - 8 = 2 + 0.1Q$.

$50 - 0.1Q = 2 + 0.1Q$$48 = 0.2Q$$Q = 240$. Confirms the social optimum.

**Equity implications:** A subsidy preserves market provision but lowers the price to students.
However, lower-income students may still be unable to afford education even with the subsidy,
creating an equity concern -- the benefits of education (including positive externalities) would
disproportionately accrue to wealthier families. Free provision (e.g., fully funded university)
would ensure access regardless of income but is more costly for the government and may lead to
overconsumption (students may choose degrees with low private returns). A means-tested subsidy or
grants system could address both efficiency (correcting the externality) and equity (ensuring access
for disadvantaged students).

---

### IT-2: Information Failure and Insurance Markets (with The Financial Sector)

**Question:** In the market for health insurance, asymmetric information exists because individuals
know more about their health status than insurers. Explain adverse selection and moral hazard in
this context. If the probability of a healthy person needing medical treatment is 5% and for an
unhealthy person is 30%, and treatment costs $\pounds 10000$Calculate the minimum premium an insurer
would charge if the population is 70% healthy and 30% unhealthy. Explain why this premium might
drive healthy people out of the market.

**Solution:**

**Adverse selection:** Before purchasing insurance, individuals know their own health risk but
insurers do not. Unhealthy individuals are more likely to buy insurance, while healthy individuals
may opt out. As healthy people leave the risk pool, the average risk increases, forcing premiums
higher, which drives out more healthy people -- a death spiral.

**Moral hazard:** After purchasing insurance, individuals may take more risks or use more healthcare
services than they would without insurance, because they do not bear the full cost of their actions.
This increases the insurer's costs beyond what was anticipated when the premium was set.

**Premium calculation:**

Expected cost per person in the population
$= 0.70 \times 0.05 \times 10000 + 0.30 \times 0.30 \times 10000$

$= 0.70 \times 500 + 0.30 \times 3000 = 350 + 900 = \pounds 1250$

Minimum premium (ignoring admin costs and profit margin) $= \pounds 1250$.

**Why healthy people leave:** A healthy person's expected medical cost is only
$0.05 \times 10000 = \pounds 500$. The premium of $\pounds 1250$ is 2.5 times their expected cost. A
rational healthy person would prefer to self-insure (pay out of pocket if needed) rather than pay
$\pounds 1250$ for insurance. If healthy people leave, the pool becomes disproportionately
unhealthy, raising the average cost further.

New pool (if all healthy leave): expected cost $= 0.30 \times 3000 = \pounds 900$ per person, but
now 100% of the pool is unhealthy, so expected cost per person $= 0.30 \times 10000 = \pounds 3000$.
Premium rises to $\pounds 3000$.

This is the adverse selection death spiral: the inability to distinguish risk types leads to market
failure where the insurance market may collapse entirely.

---

### IT-3: Environmental Policy and International Trade (with The International Economy)

**Question:** A country imposes a carbon tax of $\pounds 50$ per tonne of $\text{CO}_2$ on domestic
steel producers. World steel price is $\pounds 500$ per tonne. The domestic supply is
$P = 200 + 0.5Q$ and demand is $P = 800 - 0.5Q$. Without the tax, the country imports steel.
Calculate: (a) the quantity of imports before and after the tax, (b) the change in domestic
production, (c) the risk of carbon leakage. Explain how a carbon border adjustment mechanism (CBAM)
could address this.

**Solution:**

(a) Without tax at world price $\pounds 500$:

$Q_d = (800 - 500)/0.5 = 600$. $Q_s = (500 - 200)/0.5 = 600$.

Domestic supply equals demand at world price, so imports $= 0$.

Wait, let me recalculate: $Q_d = 2(800 - 500) = 600$$Q_s = 2(500 - 200) = 600$. At $\pounds 500$The
domestic market is in equilibrium with no trade.

Let me reconsider with a lower world price. Let world price $= \pounds 400$:

$Q_d = 2(800 - 400) = 800$$Q_s = 2(400 - 200) = 400$. Imports $= 800 - 400 = 400$.

With carbon tax of $\pounds 50$: domestic producers face higher costs. New supply $P = 250 + 0.5Q$
(shifted up by 50).

At world price $\pounds 400$: $Q_s = 2(400 - 250) = 300$. $Q_d = 800$ (unchanged). Imports
$= 800 - 300 = 500$.

(b) Change in domestic production: $400 - 300 = 100$ fewer units. The carbon tax reduced domestic
steel production by 100 units.

(c) **Carbon leakage:** The carbon tax makes domestic steel less competitive, reducing domestic
production (from 400 to 300 units) and increasing imports (from 400 to 500 units). The imported
steel is produced in countries without carbon pricing, so global $\text{CO}_2$ emissions may not
decrease -- they shift to other countries. This is carbon leakage.

**CBAM:** A carbon border adjustment mechanism imposes a tariff on imported steel equal to the
carbon tax that would have been paid had the steel been produced domestically. If imported steel
generates 2 tonnes of $\text{CO}_2$ per tonne, the CBAM tariff $= 2 \times \pounds 50 = \pounds 100$
per tonne of imported steel. This levels the playing field, preventing carbon leakage and
incentivising foreign producers to reduce their emissions. It addresses the trade-off between
environmental policy and international competitiveness.

---

## Section 3: Extended Market Failure Practice

**UT-4 (Extension).** A factory produces steel and emits pollution. Demand: $P = 500 - Q$. Private
MC: $MC = 50 + 2Q$. The marginal external cost of pollution is $MEC = Q$. (a) Find the market
equilibrium (without government intervention). (b) Find the socially optimal output. (c) Calculate
the Pigouvian tax per unit. (d) Calculate the deadweight loss without the tax and verify it is
eliminated with the tax. (e) Calculate the change in consumer surplus, producer surplus, government
revenue, and total welfare.

**Solution:**

(a) Market equilibrium:
$P = MC \Rightarrow 500 - Q = 50 + 2Q \Rightarrow 450 = 3Q \Rightarrow Q = 150$$P = 350$.

(b) Social optimum:
$MSB = MSC \Rightarrow 500 - Q = 50 + 2Q + Q = 50 + 3Q \Rightarrow 450 = 4Q \Rightarrow Q = 112.5$$P = 387.5$.

(c) Pigouvian tax: $t = MEC$ at socially optimal output $= 112.5$ per unit.

(d) DWL without tax: area between MSC and MSB from $Q = 112.5$ to $Q = 150$.
$MSC_{112.5} = 50 + 3(112.5) = 387.5$. $MSB_{112.5} = 387.5$. (Confirmed: they intersect at
$Q = 112.5$.) $MSC_{150} = 50 + 3(150) = 500$. $MSB_{150} = 350$. DWL
$= \frac{1}{2}(500 - 350)(150 - 112.5) = \frac{1}{2}(150)(37.5) = 2812.5$.

With tax: supply shifts to $MC + t = 50 + 2Q + 112.5 = 162.5 + 2Q$.
$500 - Q = 162.5 + 2Q \Rightarrow 337.5 = 3Q \Rightarrow Q = 112.5$. The tax achieves the social
optimum. DWL = 0.

(e) Without tax: CS $= \frac{1}{2}(500 - 350)(150) = 11250$. PS
$= \frac{1}{2}(350 - 50)(150) = 22500$. External cost
$= \int_0^{150} Q \, dQ = \frac{150^2}{2} = 11250$. Total welfare $= 11250 + 22500 - 11250 = 22500$.

With tax: $P_c = 387.5$ (consumers pay), $P_p = 387.5 - 112.5 = 275$ (producers receive). CS
$= \frac{1}{2}(500 - 387.5)(112.5) = 6328.1$. Change: $-4921.9$. PS
$= \frac{1}{2}(275 - 50)(112.5) = 12656.3$. Change: $-9843.8$. Tax revenue
$= 112.5 \times 112.5 = 12656.3$. External cost $= \frac{112.5^2}{2} = 6328.1$. Change: $-4921.9$.
Total welfare $= 6328.1 + 12656.3 + 12656.3 - 6328.1 = 25312.5$.

Welfare gain $= 25312.5 - 22500 = 2812.5 = $ DWL. Correct. The tax eliminates the DWL and makes
society better off by exactly the DWL amount.

---

**UT-5 (Extension): Public Goods.** A village of 100 people is considering building a street
lighting system. Each streetlight costs $\pounds 500$ to install and $\pounds 50$ per year to
maintain. Each resident's marginal benefit from streetlights is given by $MB_i = 10 - 0.5Q$ where
$Q$ is the number of streetlights. (a) Derive the aggregate marginal benefit function. (b) Calculate
the socially optimal number of streetlights. (c) Explain why the private market would underprovide
streetlights. (d) If the village council funds streetlights through a local tax, calculate the
per-person tax required for the optimal quantity (spreading cost evenly across residents).

**Solution:**

(a) Aggregate MB (vertical summation for public goods):
$MB = \sum_{i=1}^{100} MB_i = 100(10 - 0.5Q) = 1000 - 50Q$.

(b) Social optimum: $MB = MC$. The MC per streetlight is the annual maintenance cost of $\pounds 50$
(the installation cost is sunk). $1000 - 50Q = 50 \Rightarrow 50Q = 950 \Rightarrow Q = 19$.

(c) A private individual would install streetlights only if their private MB exceeds the private MC.
Private MB at $Q = 0$ is 10, which is well below the MC of 500 (installation) or even 50
(maintenance). No individual has an incentive to provide ANY streetlights, even though the social
benefit of the first streetlight is 1000 (far exceeding the cost). This is the free-rider problem:
each individual hopes others will pay, so no one pays.

(d) Total annual cost of 19 streetlights: $19 \times 50 = \pounds 950$. Per-person tax:
$950 / 100 = \pounds 9.50$ per year. Each person's MB at $Q = 19$: $MB_i = 10 - 0.5(19) = 0.5$.
Since $MB_i = 0.5 < 9.50$Each individual would vote against the tax if given a choice, even though
the social optimum benefits everyone. This illustrates the difficulty of funding public goods
through voluntary means.

---

**IT-4 (Extension): Merit Goods and Information Failure.** Vaccination against a disease provides
both private benefits and positive externalities (herd immunity). Private demand: $Q_D = 1000 - 5P$.
Private supply (MC): $P = 40 + 0.5Q$. The marginal external benefit per vaccination is $\pounds 20$.
(a) Calculate the market equilibrium and the socially optimal quantity. (b) Calculate the deadweight
loss. (c) If the government provides free vaccination (subsidises the full cost), calculate the
quantity consumed and the total cost to the government. (d) Is free vaccination economically
efficient? Explain.

**Solution:**

(a) Market equilibrium: $1000 - 5P = 2(P - 40) = 2P - 80$.
$1000 - 5P = 2P - 80 \Rightarrow 1080 = 7P \Rightarrow P = 154.29$$Q = 228.57$.

Wait, let me use demand in $Q$ form. $P = 200 - 0.2Q$ (from $Q_D = 1000 - 5P$).
$200 - 0.2Q = 40 + 0.5Q \Rightarrow 160 = 0.7Q \Rightarrow Q = 228.57$$P = 154.29$.

Social optimum: $MSB = MPB + MEB = (200 - 0.2Q) + 20 = 220 - 0.2Q$. $MSB = MSC$:
$220 - 0.2Q = 40 + 0.5Q \Rightarrow 180 = 0.7Q \Rightarrow Q = 257.14$$P_{MSB} = 220 - 0.2(257.14) = 168.57$.

(b) DWL: area between MSB and MSC from $Q = 228.57$ to $Q = 257.14$. At $Q = 228.57$:
$MSB = 220 - 0.2(228.57) = 174.29$. $MSC = 40 + 0.5(228.57) = 154.29$. At $Q = 257.14$:
$MSB = MSC = 168.57$. DWL
$= \frac{1}{2}(MSB_{228.57} - MSC_{228.57})(257.14 - 228.57) = \frac{1}{2}(174.29 - 154.29)(28.57) = \frac{1}{2}(20)(28.57) = 285.7$.

(c) Free vaccination: $P_c = 0$. $Q_D = 1000 - 5(0) = 1000$. $Q_S$ at $P = 0$:
$0 = 40 + 0.5Q \Rightarrow Q = -80$. This is negative, meaning supply is zero at $P = 0$. The
government would need to purchase at the supply price. At $Q = 1000$: $P = 40 + 0.5(1000) = 540$.
Government cost per vaccination = 540. Total cost $= 540 \times 1000 = 540\,000$.

(d) No, free vaccination is NOT economically efficient. The socially optimal quantity is 257.14,
not 1000. Providing 1000 vaccinations means vaccinating people whose private marginal benefit
($P_{MSB}$ at $Q = 1000$ is $220 - 200 = 20$) is far below the marginal cost ($P = 540$). The
government overspends by providing vaccinations beyond the social optimum.

The efficient policy is a per-unit subsidy equal to the MEB ($\pounds 20$), not free provision. The
subsidy shifts the demand curve from MPB to MSB, achieving the socially optimal quantity at minimal
government cost: Government cost $= 20 \times 257.14 = 5142.8$ (vs 540,000 for free vaccination).

---

**IT-5 (Extension): Government Failure.** The government imposes rent control on housing. The market
for rental housing has demand $Q_D = 1000 - 5P$ and supply $Q_S = 4P - 200$ (where $P$ is monthly
rent in $\pounds$). (a) Calculate the free market equilibrium. (b) The government sets a maximum
rent of $\pounds 100$. Calculate the shortage and the deadweight loss. (c) Suppose landlords respond
by converting 30% of rental properties to short-term holiday lets (removing them from the long-term
rental market). Recalculate the shortage and DWL. (d) Calculate the welfare loss from the government
failure (conversion) compared to the original market failure.

**Solution:**

(a) $1000 - 5P = 4P - 200 \Rightarrow 1200 = 9P \Rightarrow P = 133.33$$Q = 333.33$.

(b) At $P = 100$: $Q_D = 1000 - 500 = 500$. $Q_S = 400 - 200 = 200$. Shortage $= 500 - 200 = 300$
units. DWL $= \frac{1}{2}(133.33 - 100)(333.33 - 200) = \frac{1}{2}(33.33)(133.33) = 2222.0$.

(c) Supply shifts left by 30%: new supply $Q_S' = 0.7(4P - 200) = 2.8P - 140$. At $P = 100$:
$Q_S' = 280 - 140 = 140$. Shortage $= 500 - 140 = 360$ units (worse than before). DWL
$= \frac{1}{2}(133.33 - 100)(333.33 - 140) = \frac{1}{2}(33.33)(193.33) = 3222.0$.

(d) Government failure (conversion) adds $3222.0 - 2222.0 = 1000$ of additional DWL. The rent
control policy causes a secondary market failure: the incentive for landlords to exit the market
worsens the original shortage. This is a classic example of government intervention creating
unintended consequences that make the original problem worse.
