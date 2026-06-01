---
title: 'Market Failure and Government Intervention -- Diagnostic Tests'
description: 'DSE Economics Market Failure and Government Intervention -- notes covering key definitions, core concepts, worked examples, and practice questions for revision.'
slug: diag-market-failure
hide_table_of_contents: true
---

# Market Failure and Government Intervention — Diagnostic Tests

## Unit Tests

### UT-1: Negative Externalities and Pigouvian Tax

**Question:** A factory producing chemicals generates pollution as a negative externality. Private
Marginal cost: $MPC = 20 + 0.5Q$. Marginal external cost: $MEC = 0.3Q$. Demand (marginal private
Benefit): $P = 100 - 0.8Q$. (a) Calculate the free market equilibrium quantity and price. (b)
Calculate the socially optimal quantity and price. (c) Calculate the Pigouvian tax needed to achieve
The social optimum. (d) Calculate the deadweight loss of the free market outcome.

**Solution:**

(a) Free market: $MPC = MPB$: $20 + 0.5Q = 100 - 0.8Q$$1.3Q = 80$$Q_m = 61.54$.
$P_m = 100 - 0.8(61.54) = \$50.77$.

(b) Social optimum: $MSC = MSB$. $MSC = MPC + MEC = 20 + 0.5Q + 0.3Q = 20 + 0.8Q$.
$MSB = MPB = 100 - 0.8Q$ (assuming no external benefit).

$20 + 0.8Q = 100 - 0.8Q$$1.6Q = 80$$Q^* = 50$. $P^* = 100 - 0.8(50) = \$60$.

(c) Pigouvian tax $= MEC$ at $Q^* = 50$: $t = 0.3(50) = \$15$. The tax shifts the private supply up
By $\$15$, so $MPC + t = 20 + 0.5Q + 15 = 35 + 0.5Q$. At $Q = 50$: $35 + 0.5(50) = 60 = P^*$.

(d) DWL
$= \frac{1}{2} \times MEC_{at  Q_m} \times (Q_m - Q^*) = \frac{1}{2} \times 0.3(61.54) \times (61.54 - 50) = \frac{1}{2} \times 18.46 \times 11.54 = \$106.5$.

### UT-2: Public Goods and Free Rider Problem

**Question:** A coastal community of 100 residents is considering building a lighthouse. Each
Resident's individual demand for the lighthouse is $P_i = 10 - 0.1Q$Where $Q$ is the quality level
(0 to 100). The total cost of providing quality level $Q$ is $TC = 200 + 5Q$. (a) Explain why a
Lighthouse is a public good, identifying which characteristics it satisfies. (b) Derive the market
Demand (marginal social benefit) curve. (c) Calculate the socially optimal quality level. (d)
Explain why the private market would underprovide the lighthouse.

**Solution:**

(a) A lighthouse is a **public good** because it satisfies two characteristics:

1. **Non-excludable**: Once built, it is impossible or extremely costly to exclude any ship from
   benefiting from the light.
2. **Non-rivalrous**: One ship using the lighthouse does not reduce the amount of light available to
   other ships.

These characteristics create a free rider problem -- individual residents have an incentive not to
Pay, hoping others will fund it while they still benefit.

(b) For a public good, the market demand (MSB) is the **vertical summation** of individual demands,
Since all residents consume the same quantity simultaneously.

$MSB = \sum_{i=1}^{100} P_i = 100(10 - 0.1Q) = 1000 - 10Q$.

(c) Social optimum: MSB $=$ MSC. $MSC = \frac{\text{dTC}}{	ext{dQ}} = 5$.

$1000 - 10Q = 5$$10Q = 995$$Q^* = 99.5$.

The socially optimal quality level is approximately 99.5 (essentially maximum quality).

(d) In the private market, each resident decides whether to contribute based on their **private
Marginal benefit** (PMB $= 10 - 0.1Q$), not the social marginal benefit. At any quality level, PMB
$\lt$ MSB, so each resident undervalues the lighthouse. The private market equilibrium would occur
Where the individual demand equals the average cost share: $10 - 0.1Q = 5Q/100 + 2 = 0.05Q + 2$.
This gives $8 = 0.15Q$$Q = 53.3$ -- far below the social optimum of 99.5. The free rider problem
Means many residents would not contribute at all, expecting others to pay.

### UT-3: Information Asymmetry

**Question:** In the market for used cars, sellers know the true quality of their cars but buyers do
Not. There are two types of cars: good cars worth $\$80,000$ and bad cars (lemons) worth $\$40,000$.
Buyers value good cars at $\$100,000$ and bad cars at $\$50,000$. Half of all cars on the market are
Good and half are bad. (a) What price would a risk-neutral buyer be willing to pay if they cannot
Distinguish between good and bad cars? (b) What happens to the market if the price from part (a)
Prevails? (c) Explain the concept of adverse selection in this context.

**Solution:**

(a) Expected value to buyer $= 0.5 \times 100,000 + 0.5 \times 50,000 = \$75,000$.

A risk-neutral buyer would pay up to $\$75,000$.

(b) At a price of $\$75,000$: Sellers of good cars (value $\$80,000$) would not sell because the
Price is below their valuation. Only sellers of bad cars (value $\$40,000$) would sell. This means
Only lemons remain in the market.

(c) **Adverse selection** occurs when asymmetric information leads to the withdrawal of high-quality
Products from the market. Since buyers cannot distinguish good from bad cars, they offer a price
Based on the average quality. This price drives out the good cars (whose owners won't sell at that
Price), leaving only lemons. Buyers then realise only lemons remain and lower their offer price
Further. In the extreme, the market can collapse entirely -- a result known as the "market for
Lemons" (Akerlof, 1970). Solutions include: warranties/s guarantees (signalling), third-party
Inspections, certification programmes, and reputation systems.

---

## Integration Tests

### IT-1: Externalities and Tax Incidence (with Demand and Supply)

**Question:** The market for electricity has demand $P = 200 - Q$ and supply $P = 40 + Q$ (in cents
Per kWh). Electricity generation produces pollution with marginal external cost $MEC = 20$. (a)
Calculate the free market equilibrium. (b) Calculate the socially optimal quantity. (c) If the
Government imposes a Pigouvian tax, calculate: the tax per unit, the new equilibrium, tax revenue,
Deadweight loss reduction, and the tax incidence on consumers vs producers. (d) If demand becomes
More inelastic (shifts to $P = 200 - 0.5Q$), how does this change the tax incidence?

**Solution:**

(a) Free market: $200 - Q = 40 + Q$$2Q = 160$$Q_m = 80$$P_m = \$1.20$.

(b) Social optimum: $MSC = MPC + MEC = (40 + Q) + 20 = 60 + Q = MSB = 200 - Q$. $2Q = 140$
$Q^* = 70$, $P^* = \$1.30$.

(c) Pigouvian tax $= MEC = 20$ cents. New supply: $P = 60 + Q$. New equilibrium: $200 - Q = 60 + Q$
$Q = 70$$P_b = \$1.30$, $P_s = \$1.10$.

Tax revenue $= 20 \times 70 = 1400$ cents $= \$14$.

DWL without tax $= \frac{1}{2} \times 20 \times (80 - 70) = \$100$ cents. With the tax, DWL from
Externality is eliminated. Total DWL $= 0$ (the tax perfectly corrects the externality).

Tax incidence: Consumer burden $= 130 - 120 = 10$ cents (50%). Producer burden $= 120 - 110 = 10$
Cents (50%).

(d) With $P = 200 - 0.5Q$: Free market: $200 - 0.5Q = 40 + Q$$1.5Q = 160$$Q_m = 106.67$
$P_m = 146.67$.

Post-tax: $200 - 0.5Q = 60 + Q$$1.5Q = 140$$Q_t = 93.33$$P_b = 153.33$$P_s = 133.33$.

Consumer burden $= 153.33 - 146.67 = 6.67$ (33%). Producer burden $= 146.67 - 133.33 = 13.33$ (67%).

With more inelastic demand, producers bear a larger share of the tax burden. This is because
Consumers are less responsive to price changes, so producers cannot pass the full tax onto them.

### IT-2: Government Regulation and Market Failure (with Market Structure)

**Question:** A monopoly water company has $TC = 200 + 5Q$ and faces demand $P = 50 - 0.5Q$. The
Government is considering three regulatory options: (a) marginal cost pricing, (b) average cost
Pricing, or (c) a price cap. (a) Calculate the profit-maximising monopoly outcome. (b) Calculate the
Outcome under each regulatory option. (c) Which option eliminates deadweight loss? Which ensures the
Firm breaks even? (d) What problem might arise with marginal cost pricing in practice?

**Solution:**

(a) Monopoly: $MR = 50 - Q$. $MC = 5$. $50 - Q = 5$$Q_m = 45$. $P_m = 50 - 22.5 = \$27.50$. Profit
$= 27.50(45) - 200 - 5(45) = 1237.50 - 200 - 225 = \$812.50$.

(b) **Marginal cost pricing**: $P = MC = 5$. $50 - 0.5Q = 5$$Q = 90$$P = \$5$. Profit
$= 5(90) - 200 - 5(90) = -\$200$ (loss equal to fixed costs).

**Average cost pricing**: $P = AC$. $AC = 200/Q + 5$. $50 - 0.5Q = 200/Q + 5$. Multiply by $Q$:
$50Q - 0.5Q^2 = 200 + 5Q$. $0.5Q^2 - 45Q + 200 = 0$. $Q^2 - 90Q + 400 = 0$.
$Q = \frac{90 \pm \sqrt{8100 - 1600}}{2} = \frac{90 \pm \sqrt{6500}}{2} = \frac{90 \pm 80.62}{2}$.
$Q = 85.31$ or $Q = 4.69$. Taking the larger: $Q = 85.31$$P = 50 - 0.5(85.31) = \$7.35$. Profit
$\approx 0$.

**Price cap**: If set at, say, $\$10$: $Q_d = 80$. The firm maximises profit subject to $P \le 10$,
Producing $Q = 80$.

(c) Marginal cost pricing eliminates DWL (achieves allocative efficiency). Average cost pricing
Ensures the firm breaks even (zero economic profit). Price caps can achieve something in between
Depending on the cap level.

(d) With marginal cost pricing, the firm makes a loss equal to its fixed costs (\$200). In the long
Run, the firm would exit the market unless subsidised. This creates a dependency on government
Subsidy, which may be politically costly. This is the "natural monopoly dilemma" -- the technology
That creates natural monopoly (high fixed costs, low marginal costs) also makes marginal cost
Pricing unsustainable without subsidy.

### IT-3: Multiple Externalities and Policy Design (with Government Policy)

**Question:** A city has two sources of pollution: factories (negative production externality) and
Driving (negative consumption externality). Factory output $Q_f$: MPC $= 30 + Q_f$MEC $= 0.5Q_f$
Demand $P_f = 100 - Q_f$. Driving $Q_d$: MPB $= 60 - 0.5Q_d$MEC $= 0.3Q_d$Private MC of driving
$= 10$. (a) Calculate the free market equilibrium for each activity. (b) Calculate the socially
Optimal levels. (c) If the government has a budget constraint and can only tax one activity, which
Should it tax first? Justify using DWL calculations.

**Solution:**

(a) **Factory**: $MPC = MPB$: $30 + Q_f = 100 - Q_f$$2Q_f = 70$$Q_f = 35$$P_f = \$65$. **Driving**:
$MPB = MC$: $60 - 0.5Q_d = 10$$0.5Q_d = 50$$Q_d = 100$.

(b) **Factory**: $MSC = MPC + MEC = 30 + 1.5Q_f = MSB = 100 - Q_f$. $2.5Q_f = 70$$Q_f^* = 28$
$P_f^* = \$72$. **Driving**: $MSC = MC + MEC = 10 + 0.3Q_d = MSB = 60 - 0.5Q_d$. $0.8Q_d = 50$,
$Q_d^* = 62.5$.

(c) DWL from factory overproduction:
$\frac{1}{2} \times 0.5(35) \times (35 - 28) = \frac{1}{2} \times 17.5 \times 7 = \$61.25$. DWL from
Driving overconsumption:
$\frac{1}{2} \times 0.3(100) \times (100 - 62.5) = \frac{1}{2} \times 30 \times 37.5 = \$562.50$.

The government should tax driving first because the DWL from overconsumption of driving (\$562.50)
Is far larger than from factory overproduction (\$61.25). This demonstrates that the government
Should prioritise correcting the largest market failures first when resources are limited.

## Additional DSE Exam-Style Questions

### EQ-1: Positive Externalities and Education Subsidy

**Question:** The market for university education has demand $P = 200 - 0.5Q$ and supply
$P = 40 + Q$Where $P$ is in thousands of HKD and $Q$ is in thousands of students. University
education generates positive externalities (a more educated workforce, lower crime rates, better
civic participation) with a constant marginal external benefit of $MEB = 30$. (a) Calculate the
market equilibrium quantity and price. (b) Calculate the socially optimal quantity and price. (c)
Calculate the Pigouvian subsidy per student needed to achieve the social optimum. (d) Calculate the
deadweight loss of the free market outcome.

**Solution:**

(a) Market equilibrium: $200 - 0.5Q = 40 + Q$$1.5Q = 160$$Q_m = 106.67$$P_m = \$146.67$ (thousand).

(b) Social optimum: $MSB = MPB + MEB = 200 - 0.5Q + 30 = 230 - 0.5Q$. Set $MSB = MSC = 40 + Q$.

$230 - 0.5Q = 40 + Q$$1.5Q = 190$$Q^* = 126.67$.

Price consumers pay (from demand curve): $P_b = 200 - 0.5(126.67) = \$136.67$. Price producers
receive (from supply curve): $P_s = 40 + 126.67 = \$166.67$.

(c) The Pigouvian subsidy $= MEB = 30$ (thousand HKD per student).

Verification: With subsidy of 30, the effective demand becomes
$P + 30 = 200 - 0.5Q + 30 = 230 - 0.5Q$. Set equal to supply: $230 - 0.5Q = 40 + Q$Which gives
$Q = 126.67 = Q^*$. The subsidy works.

Alternatively, the subsidy should equal the MEB at the optimal quantity: $MEB = 30$ (constant), so
the subsidy is 30 regardless of the quantity.

(d) DWL of underconsumption:

$$DWL = \frac{1}{2} \times MEB \times (Q^* - Q_m) = \frac{1}{2} \times 30 \times (126.67 - 106.67) = \frac{1}{2} \times 30 \times 20 = 300$$

The DWL is $\$300$ thousand (or $\$300,000$ in absolute terms). This represents the net social
benefit that is forgone because the market produces too few university graduates.

### EQ-2: Congestion Charging in Hong Kong

**Question:** A major tunnel in Hong Kong has a demand curve for vehicle crossings of
$P = 80 - 0.2Q$ (where $P$ is HKD per crossing and $Q$ is thousands of crossings per hour). The
marginal private cost of a crossing is constant at $P = 20$ (fuel, toll). However, each additional
vehicle adds to congestion, with marginal external cost $MEC = 0.3Q$. (a) Calculate the free market
equilibrium number of crossings. (b) Calculate the socially optimal number of crossings. (c)
Calculate the optimal congestion charge. (d) Calculate the reduction in DWL. (e) Evaluate the
practical difficulties of implementing congestion charging in Hong Kong.

**Solution:**

(a) Free market: $P = MPC = 20$. Demand: $80 - 0.2Q = 20$$0.2Q = 60$$Q_m = 300$ thousand crossings
per hour.

(b) Social optimum: $MSC = MPC + MEC = 20 + 0.3Q$. Set $MSC = MSB = 80 - 0.2Q$.

$20 + 0.3Q = 80 - 0.2Q$$0.5Q = 60$$Q^* = 120$ thousand crossings per hour.

Price at social optimum: $P^* = 80 - 0.2(120) = \text{HK}\$56$ per crossing.

(c) Optimal congestion charge $= MEC$ at $Q^* = 120$: $t = 0.3 \times 120 = \text{HK}\$36$ per
crossing.

Verification: With the charge, the effective private cost becomes $20 + 36 = 56$. At $P = 56$:
$Q = (80 - 56)/0.2 = 120 = Q^*$.

(d) DWL without the charge:

$$DWL = \frac{1}{2} \times MEC_{at Q_m} \times (Q_m - Q^*) = \frac{1}{2} \times 0.3(300) \times (300 - 120) = \frac{1}{2} \times 90 \times 180 = \text{HK}\$8\,100$$

(thousands, i.e., HK$8.1 million per hour).

With the charge, DWL is eliminated entirely (assuming perfect implementation).

(e) **Practical difficulties in Hong Kong:**

1. **Political acceptability:** Drivers would strongly oppose any new charge, especially if public
   transport alternatives are perceived as inadequate. The 2019 experience with the proposed
   electronic road pricing pilot showed significant public resistance.
2. **Equity concerns:** A flat congestion charge is regressive -- it represents a larger proportion
   of income for lower-income drivers. Essential workers (delivery drivers, taxi drivers) who must
   drive during peak hours would be disproportionately affected.
3. **Technology and enforcement:** Requires electronic tracking (GPS or license plate recognition),
   raising privacy concerns. Evasion through alternative routes could shift congestion rather than
   eliminate it.
4. **Cross-harbour alternatives:** Hong Kong's geography means there are limited alternatives to the
   major tunnels. If one tunnel is charged, traffic may divert to other tunnels, shifting the
   congestion.
5. **Dynamic pricing complexity:** The optimal charge varies by time of day and traffic conditions.
   A static charge is easier to implement but less efficient; dynamic pricing requires sophisticated
   real-time systems.

### EQ-3: Common Resources and the Tragedy of the Commons

**Question:** A fishing ground is open access. The total cost of fishing as a function of the number
of boats $B$ is $TC = 10B + 0.5B^2$ (in thousands of HKD). The total revenue from fishing is
$TR = 50B - 0.2B^2$. (a) Calculate the number of boats under open access (where average revenue
equals average cost). (b) Calculate the socially optimal number of boats (where marginal revenue
equals marginal cost). (c) Explain why open access leads to overfishing. (d) Suggest two policy
solutions and explain how they internalise the externality.

**Solution:**

(a) Under open access, boats enter until economic profit is zero: $AR = AC$.

$AR = \frac{TR}{B} = 50 - 0.2B$. $AC = \frac{TC}{B} = 10 + 0.5B$.

$50 - 0.2B = 10 + 0.5B$$0.7B = 40$$B_{OA} = 57.14$ boats.

(b) Social optimum: $MR = MC$.

$MR = \frac{dTR}{dB} = 50 - 0.4B$. $MC = \frac{dTC}{dB} = 10 + B$.

$50 - 0.4B = 10 + B$$1.4B = 40$$B^* = 28.57$ boats.

(c) Under open access, each boat owner considers only their private cost and revenue, not the
externality they impose on others. Each additional boat reduces the catch per boat (because the fish
stock is finite), imposing a cost on all other boats. This negative externality means individual
boat owners enter even when the marginal social cost exceeds the marginal social benefit, leading to
too many boats and overfishing. This is the **tragedy of the commons**: common-pool resources are
overexploited because no individual has an incentive to conserve them.

(d) **Policy solution 1 -- ITQs (Individual Transferable Quotas):** The government sets a total
allowable catch (corresponding to $B^* = 28.57$ boats) and distributes quotas to fishers. Quotas are
tradeable, so the most efficient fishers buy quotas from less efficient ones. This creates property
rights over the resource, internalising the externality. Fishers now have an incentive to conserve
the fish stock because the quota represents a valuable asset whose future value depends on the
sustainability of the stock.

**Policy solution 2 -- Licensing (limited entry):** The government issues a fixed number of fishing
licences ($B^* = 28.57$) and restricts access to licence holders. This directly limits the number of
boats to the socially optimal level. However, licences are less efficient than ITQs because they do
not allow reallocation to more efficient fishers (unless licences are also tradeable).

### EQ-4: Information Asymmetry in Healthcare

**Question:** In the market for health insurance, individuals know their own health status but
insurance companies do not. There are two types of individuals: healthy (probability of illness
$= 0.1$Medical cost if ill $= \$100\,000$) and unhealthy (probability of illness $= 0.5$, medical
cost if ill $= \$100\,000$). The population is 60% healthy and 40% unhealthy. Each individual has
income of $\$200\,000$ and utility $U = \sqrt{W}$ where $W$ is wealth. (a) Calculate the actuarially
fair premium for each type. (b) If the insurer cannot distinguish between types and must offer a
single premium, what premium would it charge? (c) Explain the adverse selection problem that arises.
(d) How does mandatory health insurance (as in Hong Kong's Voluntary Health Insurance Scheme)
address this problem?

**Solution:**

(a) Expected cost for healthy: $0.1 \times 100\,000 = \$10\,000$. Fair premium $= \$10\,000$.

Expected cost for unhealthy: $0.5 \times 100\,000 = \$50\,000$. Fair premium $= \$50\,000$.

(b) Pooled expected cost $= 0.6 \times 10\,000 + 0.4 \times 50\,000 = 6\,000 + 20\,000 = \$26\,000$.

The insurer would charge a pooled premium of $\$26,000$ (plus a loading for admin costs and profit).

(c) At a pooled premium of $\$26\,000$:

- Healthy individuals: Expected benefit $= \$10\,000$, but premium $= \$26\,000$. They are paying
  more than their expected cost. Many healthy individuals would choose not to buy insurance (they
  are better off self-insuring).
- Unhealthy individuals: Expected benefit $= \$50\,000$, premium $= \$26\,000$. They get a good deal
  and will definitely buy.

As healthy individuals drop out, the risk pool becomes sicker. The insurer must raise the premium,
causing more healthy people to leave. This spiral continues until only the unhealthy remain in the
pool -- the "adverse selection death spiral." The market may collapse entirely, leaving unhealthy
individuals without coverage.

(d) **Mandatory insurance** (or an individual mandate) addresses adverse selection by requiring
everyone to buy insurance regardless of health status. This forces healthy individuals into the risk
pool, keeping average costs down. Hong Kong's Voluntary Health Insurance Scheme (VHIS) is a step in
this direction, though it is voluntary rather than mandatory. Tax incentives for purchasing
VHIS-certified plans encourage participation. A fully mandatory system (as in Singapore's Medishield
Life) eliminates adverse selection entirely because everyone is in the pool by law. The trade-off is
reduced individual choice and the potential for cross-subsidisation from healthy to unhealthy
individuals.

### EQ-5: Cost-Benefit Analysis of a Public Project

**Question:** The Hong Kong government is considering building a new MTR line costing HK$150
billion. The line will generate: (i) HK$8 billion per year in fare revenue for 40 years, (ii) HK$3
billion per year in time savings for commuters, (iii) HK$2 billion per year in reduced road
congestion and pollution. The discount rate is 4%. (a) Calculate the net present value (NPV) of the
project. (b) Calculate the benefit-cost ratio. (c) Should the government proceed with the project?
(d) Discuss three non-quantifiable factors that should be considered.

**Solution:**

(a) Annual benefits $= 8 + 3 + 2 = \text{HK}\$13$ billion.

Present value of benefits (40-year annuity at 4%):

$$PV = \frac{C}{r}\left(1 - \frac{1}{(1+r)^n}\right) = \frac{13}{0.04}\left(1 - \frac{1}{(1.04)^{40}}\right)$$

$(1.04)^{40} = 4.8010$. $PV = 325 \times (1 - 0.2083) = 325 \times 0.7917 = \text{HK}\$257.3$
billion.

$NPV = PV_{benefits} - PV_{costs} = 257.3 - 150 = \text{HK}\$107.3$ billion.

(b) Benefit-cost ratio $= \frac{257.3}{150} = 1.72$.

(c) Yes. The NPV is positive (HK$107.3 billion) and the benefit-cost ratio exceeds 1 (1.72), meaning
the project generates HK$1.72 of benefits for every HK$1 of cost. The government should proceed.

(d) **Non-quantifiable factors:**

1. **Equity and accessibility:** The new line may improve access to employment and services for
   low-income communities, reducing spatial inequality. The distributional impact depends on which
   areas the line serves.
2. **Environmental impact:** Construction generates noise, dust, and disruption. The permanent
   environmental benefit (reduced road traffic) must be weighed against the construction impact.
   Tunnelling may affect groundwater and heritage sites.
3. **Strategic planning:** The line may unlock development potential in new areas (e.g., the
   Northern Metropolis), generating agglomeration economies and land value capture. These dynamic
   effects are difficult to quantify but may be substantial.
4. **Contingent liabilities:** Cost overruns are common in large infrastructure projects (Hong
   Kong's Express Rail Link exceeded its budget significantly). The government must account for the
   risk of cost escalation.

## Common Pitfalls

1. **Confusing the Pigouvian tax rate with the tax revenue:** The optimal Pigouvian tax equals the
   marginal external cost at the _optimal_ quantity ($Q^*$), not at the market quantity ($Q_m$). Tax
   revenue equals the tax rate multiplied by the _post-tax_ quantity. These are different because
   the tax changes the quantity.

2. **Vertically summing demands for private goods:** For private goods, market demand is the
   horizontal summation of individual demands (add quantities at each price). For public goods, it
   is the vertical summation (add willingness to pay at each quantity). Mixing these up is a common
   error in DSE exams.

3. **Assuming government intervention always improves welfare:** Government intervention can itself
   create inefficiency: regulatory capture (regulators serve the industry they regulate),
   information problems (government has imperfect information about optimal tax levels), and
   bureaucratic costs. The DSE often requires evaluating whether government intervention actually
   improves on the market outcome.

4. **Ignoring the second-best principle:** If there are multiple market failures, correcting one
   does not necessarily improve welfare. In a second-best world with pre-existing distortions (e.g.,
   taxes, other externalities), removing one distortion can make things worse. This is why
   cost-benefit analysis is important for specific policy proposals.

5. **Confusing public goods with publicly provided goods:** A public good is defined by
   non-excludability and non-rivalry (e.g., national defence, street lighting). Many goods provided
   by the government (e.g., public healthcare, public education) are actually private goods (rival
   and excludable) that are publicly provided for equity reasons. They are not public goods in the
   economic sense.
