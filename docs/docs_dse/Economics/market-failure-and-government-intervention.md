---
title: Market Failure and Government Intervention
description: "DSE Economics notes on market failure and government intervention covering externalities, public goods, information asymmetry, taxation, and regulation."
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - Economics
categories:
  - DSE
  - Economics
slug: market-failure-and-government-intervention
---

## What Is Market Failure?

Market failure occurs when the free market, operating without government intervention, fails to
allocate resources in a way that maximises economic welfare. The result is a loss of total surplus
(deadweight loss): society could be made better off by reallocating resources.

This file assumes familiarity with supply and demand analysis from
[demand-supply-markets.md](demand-supply-markets.md) and the basic market failure overview in
[basic-economic-concepts.md](basic-economic-concepts.md).

### Types of Market Failure

| Type                  | Description                                                                                                                                              |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Externalities         | Costs or benefits of production or consumption that spill over to third parties who are not part of the transaction.                                     |
| Public goods          | Goods that are non-excludable and non-rivalrous. The free-rider problem leads to under-provision or zero provision by the market.                        |
| Information asymmetry | When one party to a transaction has more or better information than the other. Leads to adverse selection and moral hazard.                              |
| Monopoly power        | A single seller (or a small number of sellers) can restrict output and raise prices above the competitive level, causing deadweight loss.                |
| Factor immobility     | Factors of production (especially labour) cannot move easily between industries or regions, causing structural unemployment and persistent inefficiency. |
| Inequality            | The market may produce an unacceptable distribution of income and wealth, even if it is allocatively efficient in a Pareto sense.                        |

---

## Negative Externalities

### Definition

A negative externality (external cost) exists when the social cost of an activity exceeds the
private cost borne by the decision-maker. The cost is imposed on third parties who did not consent
to bear it.

### Negative Externality of Production

This occurs when the production of a good imposes costs on society that are not reflected in the
producer's private costs.

$$\mathrm{MSC} = \mathrm{MPC} + \mathrm{MEC}$$

Where:

- MSC = marginal social cost
- MPC = marginal private cost (the producer's cost, reflected in the supply curve)
- MEC = marginal external cost (the cost imposed on third parties)

**Example:** A factory produces chemicals and discharges waste into a river. The factory bears the
private cost of production (labour, raw materials, energy). But the pollution damages the health of
downstream residents and harms fisheries. This external cost is not borne by the factory, so its
supply curve reflects only MPC, not MSC.

**Result:** The market produces where `MPB = MPC` (market equilibrium). The socially optimal output
is where `MSB = MSC`. Since `MSC \gt MPC`, the market equilibrium output is greater than the
socially optimal output. The market **over-produces** the good.

### Diagram Description: Negative Externality of Production

```
  Price
    |
    |       MSC
    |      /
    |     /
    |    /  DWL
    |   /| |
    |  / | |
    |--/--+-|---- MPC = Supply
    | /  | |
    |/   | |
    *    | |    Demand = MPB = MSB
    |    | |
    +----|-|--------- Quantity
      Q*  Q_opt
```

- `Q*` = market equilibrium output (where `MPB = MPC`)
- `Q_opt` = socially optimal output (where `MSB = MSC`)
- DWL = triangle between MSC and MPC, from `Q_opt` to `Q*`
- The market produces too much because the producer does not bear the full social cost

### Negative Externality of Consumption

This occurs when the consumption of a good imposes costs on third parties.

$$\mathrm{MSC} = \mathrm{MPB} + \mathrm{MEC}$$

Where MEC is the marginal external cost of consumption.

**Example:** Smoking in public places. The smoker derives private benefit (MPB), but second-hand
smoke harms the health of nearby non-smokers. The full social benefit of the last unit consumed is
less than the private benefit.

**Result:** The market over-consumes the good relative to the social optimum because the consumer
does not account for the external cost imposed on others.

---

## Positive Externalities

### Definition

A positive externality (external benefit) exists when the social benefit of an activity exceeds the
private benefit received by the decision-maker. The benefit accrues to third parties who did not pay
for it.

### Positive Externality of Production

$$\mathrm{MSB} = \mathrm{MPB} + \mathrm{MEB}$$

Where MEB = marginal external benefit of production.

**Example:** A beekeeper's bees pollinate nearby orchards. The beekeeper sells honey (private
benefit), but the orchard owner benefits from free pollination (external benefit). The beekeeper
does not capture this external benefit in revenue, so produces less than the socially optimal
quantity.

**Result:** The market **under-produces** the good because `MSB \gt MPB`. The socially optimal
output is where `MSB = MSC`, but the market produces where `MPB = MPC`, which is less than the
social optimum.

### Positive Externality of Consumption

$$\mathrm{MSB} = \mathrm{MPB} + \mathrm{MEB}$$

**Example:** Education. The individual student benefits from higher future earnings (MPB), but
society benefits from a more educated population (lower crime rates, better civic participation,
higher productivity -- MEB). The student does not account for these external benefits when deciding
how much education to consume.

**Result:** The market under-consumes education relative to the social optimum. This is the
rationale for government provision or subsidisation of education.

### Other Examples of Positive Externalities

| Activity         | Private Benefit           | External Benefit                                     |
| ---------------- | ------------------------- | ---------------------------------------------------- |
| Vaccination      | Protection from disease   | Reduced transmission to others (herd immunity)       |
| Research         | Firm's profit from patent | Knowledge spillovers benefit other firms and society |
| Public transport | Convenience for the user  | Reduced congestion and pollution for everyone        |
| Healthcare       | Individual health         | Reduced disease transmission, healthier workforce    |

---

## Corrective Taxes (Pigouvian Taxes)

### Mechanism

A Pigouvian tax is a tax levied on each unit of a good that generates a negative externality. The
tax is set equal to the marginal external cost at the socially optimal output.

$$\mathrm{Pigouvian tax per unit} = \mathrm{MEC} \mathrm{ at } Q_{\mathrm{opt}}$$

By internalising the externality, the tax shifts the private cost curve upward to coincide with the
social cost curve:

$$\mathrm{MPC} + \mathrm{Tax} = \mathrm{MSC}$$

The firm now faces the full social cost of production and reduces output to the socially optimal
level.

### Properties of an Ideal Pigouvian Tax

1. The tax equals the marginal external cost at the optimal quantity (not at the current market
   quantity).
2. It changes the firm's behaviour: the firm reduces output (or installs pollution control
   equipment) because the tax makes the socially costly activity more expensive.
3. It generates tax revenue for the government. This revenue can be used to offset other taxes (the
   "double dividend" hypothesis) or to compensate those affected by the externality.
4. It is more efficient than regulation (command-and-control) because it allows firms to choose the
   least-cost method of reducing the externality (reduce output, install abatement technology, or
   pay the tax).

### Worked Example: Pigouvian Tax

A factory's MPC is given by `P = 20 + 0.5Q`. The marginal external cost is `MEC = 10`. Demand is
`P = 80 - Q`.

Without the tax, market equilibrium: `20 + 0.5Q = 80 - Q`, so `1.5Q = 60`, `Q = 40`, `P = 40`.

With a Pigouvian tax of `MEC = 10` per unit, the supply curve shifts up: `P = 30 + 0.5Q`.

New equilibrium: `30 + 0.5Q = 80 - Q`, so `1.5Q = 50`, `Q = 33.33`, `P = 46.67`.

The tax reduces output from 40 to 33.33 (closer to the social optimum). Tax revenue =
`10 x 33.33 = 333.3`.

<details>
<summary>Worked Example: Calculating Pigouvian Tax and DWL</summary>

A chemical plant has `MPC = 15 + Q` and `MEC = 12`. Demand: `P = 90 - Q`.

Market equilibrium: `15 + Q = 90 - Q`, `Q^* = 37.5`, `P^* = 52.5`.

Social optimum: `MSC = 15 + Q + 12 = 27 + Q`. Set `27 + Q = 90 - Q`, `Q_{opt} = 31.5`.

Price consumers pay = `90 - 31.5 = 58.5`.
Price producers receive = `15 + 31.5 = 46.5`.

Pigouvian tax = `58.5 - 46.5 = 12` (= `MEC`).

Tax revenue = `12 \times 31.5 = 378`.

DWL = `0.5 \times 12 \times (37.5 - 31.5) = 0.5 \times 12 \times 6 = 36`.

</details>

---

## Corrective Subsidies

### Mechanism

A subsidy is a payment per unit to producers (or consumers) of a good that generates a positive
externality. The subsidy shifts the private benefit curve upward to coincide with the social benefit
curve:

$$\mathrm{MPB} + \mathrm{Subsidy} = \mathrm{MSB}$$

The firm (or consumer) now receives the full social benefit and increases consumption/production to
the socially optimal level.

### Properties of an Ideal Subsidy

1. The subsidy equals the marginal external benefit at the optimal quantity.
2. It increases output toward the social optimum.
3. It costs the government money (unlike a tax, which generates revenue).
4. The government must finance the subsidy through taxation, which itself may create distortions.

### Worked Example: Education Subsidy

The private demand for university education is `P = 50 - 0.1Q` (MPB). The marginal external benefit
is `MEB = 15`. The supply (MPC = MSC for simplicity) is `P = 10 + 0.1Q`.

Without subsidy: `50 - 0.1Q = 10 + 0.1Q`, so `0.2Q = 40`, `Q = 200`.

Social optimum: `MSB = 50 - 0.1Q + 15 = 65 - 0.1Q`. Set `MSB = MSC`: `65 - 0.1Q = 10 + 0.1Q`,
`0.2Q = 55`, `Q = 275`.

A subsidy of `MEB = 15` per student shifts the demand curve up: `P = 65 - 0.1Q`.

New equilibrium: `65 - 0.1Q = 10 + 0.1Q`, `Q = 275`. The subsidy achieves the social optimum.

Government cost = `15 x 275 = 4,125`.

<details>
<summary>Worked Example: Subsidy for Vaccination</summary>

Private demand for flu shots: `P = 30 - 0.1Q` (MPB). `MEB = 8`. Supply: `P = 4 + 0.1Q`.

Market equilibrium: `30 - 0.1Q = 4 + 0.1Q`, `Q = 130`.

Social optimum: `MSB = 38 - 0.1Q`. Set `MSB = MSC`: `38 - 0.1Q = 4 + 0.1Q`, `Q_{opt} = 170`.

Subsidy = `MEB = 8` per vaccination. Government cost = `8 \times 170 = 1,360`.

DWL without intervention = `0.5 \times 8 \times (170 - 130) = 0.5 \times 8 \times 40 = 160`.

</details>

---

## Tradable Pollution Permits (Cap and Trade)

### Mechanism

The government sets a total cap on the quantity of pollution (e.g., total tonnes of CO2 emissions
per year). It then issues permits equal to the cap. Each permit allows the holder to emit a fixed
quantity of pollution. Firms can buy and sell permits among themselves.

### How It Works

1. The government sets the cap (total allowable pollution).
2. Permits are initially allocated to firms (by auction or grandfathering).
3. Firms that can reduce pollution cheaply sell their excess permits to firms that find it expensive
   to reduce pollution.
4. The market price of permits reflects the marginal cost of abatement.
5. Total pollution is capped at the government-set level.

### Advantages Over Pigouvian Taxes

| Feature               | Pigouvian Tax                                                          | Cap and Trade                                                                     |
| --------------------- | ---------------------------------------------------------------------- | --------------------------------------------------------------------------------- |
| Quantity certainty    | Emissions quantity uncertain (depends on how firms respond to the tax) | Emissions quantity is certain (set by the cap)                                    |
| Price certainty       | Tax rate is certain; emission reduction cost uncertain                 | Permit price is uncertain (determined by market)                                  |
| Revenue               | Generates government revenue                                           | Depends on allocation method (auctions generate revenue; grandfathering does not) |
| Efficiency            | Efficient if MEC is known                                              | Efficient if permits are tradeable                                                |
| Political feasibility | Often unpopular ("tax")                                                | May be more politically acceptable                                                |

### Conditions for Cap and Trade to Work

1. Well-defined property rights (permits must be legally enforceable).
2. Low transaction costs (firms can easily trade permits).
3. Monitoring and enforcement (the government must verify that firms do not exceed their permitted
   emissions).
4. Enough firms in the market to ensure competition (prevent market power in permit trading).

---

## Public Goods

### Definition and Characteristics

| Characteristic    | Definition                                                                                              | Implication                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| Non-excludability | It is impossible or prohibitively costly to prevent someone from consuming the good once it is provided | The free-rider problem: people can benefit without paying |
| Non-rivalry       | One person's consumption does not reduce the quantity or quality available for others                   | Marginal cost of additional consumption is zero           |

### Types of Goods

| Type                     | Excludable | Rivalrous | Example                                       |
| ------------------------ | ---------- | --------- | --------------------------------------------- |
| Pure public good         | No         | No        | National defence, street lighting, lighthouse |
| Private good             | Yes        | Yes       | Food, clothing, cars                          |
| Common resource          | No         | Yes       | Fish stocks, clean air, public grazing land   |
| Club good (quasi-public) | Yes        | No        | Cable TV, private parks, toll roads           |

### The Free-Rider Problem

Because public goods are non-excludable, individuals have an incentive to free-ride: to enjoy the
benefit of the good without paying for it. If everyone free-rides, no one pays, and the good is not
provided (even though society would be better off with provision).

**Rational free-riding:** A single individual's contribution has a negligible effect on whether the
good is provided. The individual's dominant strategy is to not contribute and free-ride on others'
contributions. Since this logic applies to everyone, the good is under-provided or not provided at
all.

### Quasi-Public Goods

Quasi-public goods (club goods) are excludable but non-rivalrous up to a point. They can be provided
by the market (since exclusion is possible), but the market may under-provide them because the
marginal cost of additional users is near zero (making the efficient price zero or very low).

Examples: roads (non-rivalrous until congestion sets in), public parks, museums, education,
healthcare. These goods are often provided or subsidised by the government because the market would
under-provide them relative to the social optimum.

---

## Merit Goods and Demerit Goods

### Merit Goods

Merit goods are goods that are deemed socially desirable, but which individuals under-consume
because they do not fully appreciate their long-term benefits (imperfect information, myopic
behaviour).

**Characteristics:**

- Positive externalities (the social benefit exceeds the private benefit)
- Information problems (consumers underestimate the benefits)
- Under-consumption relative to the social optimum

**Examples:** Education, healthcare, vaccination, public libraries, museums.

**Government intervention:** Subsidies, direct provision, compulsory consumption (mandatory
schooling, mandatory vaccination), information campaigns.

### Demerit Goods

Demerit goods are goods that are deemed socially undesirable, but which individuals over-consume
because they do not fully appreciate their long-term costs (imperfect information, addiction).

**Characteristics:**

- Negative externalities (the social cost exceeds the private cost)
- Information problems (consumers underestimate the costs)
- Over-consumption relative to the social optimum

**Examples:** Tobacco, alcohol, illegal drugs, gambling, sugary drinks.

**Government intervention:** Taxes (Pigouvian taxes), regulation (minimum age restrictions,
advertising bans), information campaigns (health warnings on cigarette packets), outright
prohibition (for the most harmful substances).

### Why Markets Fail for Merit and Demerit Goods

The market fails not because of the externality alone (which could be corrected by a tax or subsidy)
but because consumers make poor decisions due to:

1. **Imperfect information:** Consumers lack the knowledge or cognitive capacity to fully evaluate
   the long-term benefits or costs.
2. **Myopia / time inconsistency:** Consumers overweight present benefits/costs relative to future
   ones. A teenager may not fully consider the long-term health consequences of smoking.
3. **Addiction:** For some demerit goods, consumption creates physical or psychological dependence
   that impairs rational decision-making.

---

## Information Asymmetry

### Definition

Information asymmetry exists when one party to a transaction has more or better information than the
other. This leads to two key problems:

### Adverse Selection

Adverse selection occurs **before** a transaction, when the buyer or seller has private information
that the other party does not know. The party with better information self-selects into the
transaction in a way that harms the less-informed party.

**Example 1 (market for lemons):** In the used car market, the seller knows whether the car is a
"lemon" (defective) or a "peach" (good quality), but the buyer does not. The buyer, knowing that
some cars are lemons, offers a price that reflects the average quality. This price is acceptable to
sellers of lemons (who get more than their car is worth) but not to sellers of peaches (who get less
than their car is worth). Peach sellers exit the market, leaving only lemons. The market collapses.

**Example 2 (insurance):** People who know they are high-risk are more likely to buy insurance. If
the insurer cannot distinguish high-risk from low-risk customers, it charges an average premium.
Low-risk customers find the premium too high and exit. The insurer is left with only high-risk
customers and must raise premiums further, driving more low-risk customers away.

### Moral Hazard

Moral hazard occurs **after** a transaction, when one party changes their behaviour because they are
insulated from the consequences of their actions.

**Example 1 (insurance):** After buying health insurance, a person may take more health risks
(smoking, extreme sports) because the insurer bears the cost of medical treatment. The insured
person exercises less care because they are protected from the financial consequences.

**Example 2 (banking):** Deposit insurance protects depositors from bank failures. Banks may take
excessive risks (lending to risky borrowers, high leverage) because they know depositors will not
withdraw funds (they are protected by insurance). The bank's shareholders benefit from risky
behaviour during good times, while the insurer (government) bears the cost of failure.

### Solutions to Information Asymmetry

| Problem           | Solution                                                                                                                                                 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Adverse selection | Signalling (seller reveals information: warranties, certifications, education credentials), screening (buyer investigates: medical exams, credit checks) |
| Moral hazard      | Deductibles and co-payments in insurance, performance-based contracts, monitoring and regulation, regulation of risky behaviour                          |

---

## Cost-Benefit Analysis of Government Intervention

Before intervening to correct a market failure, the government should conduct a cost-benefit
analysis (CBA) to determine whether the intervention will improve net welfare.

### Steps in Cost-Benefit Analysis

1. **Identify all costs and benefits:** Include direct costs (government spending, administrative
   costs), indirect costs (distortions created by the intervention), direct benefits (reduced
   externality), and indirect benefits (improved health, productivity).
2. **Quantify costs and benefits:** Express in monetary terms where possible.
3. **Discount future costs and benefits:** Future costs and benefits are worth less than present
   ones (time preference). Use a social discount rate to convert future flows to present value.

$$\mathrm{NPV} = \sum_{t=0}^{T} \frac{B_t - C_t}{(1 + r)^t}$$

4. **Compare:** If NPV \gt 0, the intervention improves net welfare and should be undertaken. If NPV
   \lt 0, the costs outweigh the benefits.

### Challenges

- Valuing non-market goods (how to value a human life saved, a cleaner environment, or
  biodiversity?)
- Choosing the appropriate discount rate (a higher rate favours short-term benefits; a lower rate
  favours long-term benefits)
- Uncertainty about future costs and benefits
- Distributional effects (who gains and who loses may matter even if total NPV is positive)

---

## Government Failure

Government intervention to correct market failure can itself create problems. Government failure
occurs when government intervention reduces welfare rather than increasing it.

### Types of Government Failure

| Type                      | Description                                                                                                                                                                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Regulatory capture        | Regulatory agencies become dominated by the industries they are supposed to regulate. Regulators act in the interest of the industry rather than the public.                                |
| Bureaucratic inefficiency | Government agencies may be slow, costly, and unresponsive. They lack the profit motive that drives efficiency in the private sector.                                                        |
| Information problems      | The government, like the market, may suffer from imperfect information. Central planners cannot access the dispersed knowledge held by millions of individuals (Hayek's knowledge problem). |
| Unintended consequences   | Policies may have effects that were not anticipated or intended. Rent control may reduce the supply of housing; minimum wages may increase unemployment for low-skilled workers.            |
| Political motivation      | Government decisions may be driven by political considerations (winning elections, rewarding supporters) rather than economic efficiency.                                                   |
| Principal-agent problem   | Government officials (agents) may not act in the interest of the public (principals). Their incentives may not align with the public good.                                                  |
| Time inconsistency        | Governments may make commitments they later renege on (e.g., promising not to inflate, then inflating to reduce the real value of debt).                                                    |
| Crowding out              | Government provision of goods and services may crowd out private provision, even when private provision would be more efficient.                                                            |

### Regulatory Capture: Detailed Analysis

Regulatory capture is one of the most significant forms of government failure. Industries have a
strong incentive to influence regulators because regulation directly affects their profits. The
public, in contrast, is diffuse and has weak incentives to monitor regulatory agencies.

**Mechanism of capture:**

1. Regulated industries develop close relationships with their regulators (revolving door:
   regulators later take jobs in the industry they regulated).
2. Industries provide information and expertise to regulators, creating dependence.
3. Industries lobby for favourable regulations (barriers to entry, price controls that guarantee
   profits).
4. Regulators, having developed sympathy for the industry, make decisions that benefit the industry
   rather than the public.

**Result:** Regulation that was intended to protect consumers ends up protecting the industry from
competition, raising prices, and reducing innovation.

---

## Common Pitfalls

1. **Confusing negative externalities of production with negative externalities of consumption:** A
   negative externality of production means the supply curve (MPC) understates the true cost (MSC).
   A negative externality of consumption means the demand curve (MPB) overstates the true benefit
   (MSB). The corrective measure is different: a tax on the producer vs a tax on the consumer.

2. **Stating that the free market always fails with public goods:** The market may provide some
   public goods through private means (e.g., a developer builds a park to increase property values).
   However, the market will systematically under-provide public goods relative to the social optimum
   due to the free-rider problem.

3. **Confusing public goods with merit goods:** Public goods are defined by their characteristics
   (non-excludable, non-rivalrous). Merit goods are defined by the judgement that they are socially
   desirable and under-consumed. Education is a merit good but not a pure public good (it is
   excludable and rivalrous to some extent). National defence is a pure public good.

4. **Assuming government intervention always improves outcomes:** Government failure is a real
   possibility. The relevant comparison is not "market with intervention vs perfect outcome" but
   "market without intervention vs market with intervention (including government failure costs)."

5. **Confusing adverse selection with moral hazard:** Adverse selection occurs BEFORE a transaction
   (hidden information at the time of contracting). Moral hazard occurs AFTER a transaction (hidden
   action after contracting). Both arise from information asymmetry, but they operate at different
   stages.

6. **Ignoring the marginal principle in externality correction:** A Pigouvian tax should equal the
   MEC at the OPTIMAL quantity, not at the current market quantity. If the tax is set too high
   (above MEC at the optimum), output falls below the social optimum, creating a different
   deadweight loss.

7. **Stating that all market failures require government intervention:** Some market failures may be
   addressed by private solutions (Coase theorem: if transaction costs are low, private parties can
   negotiate an efficient outcome regardless of the initial allocation of property rights).
   Government intervention is warranted when private solutions fail due to high transaction costs.

8. **Confusing deadweight loss with lost surplus:** DWL is not the total loss of surplus. It is the
   net loss -- the surplus that is destroyed and not captured by anyone. The total loss of consumer
   and producer surplus exceeds DWL because some surplus is redistributed (e.g., from consumers to
   the government as tax revenue).

---

## Practice Problems

<details>
<summary>Question 1: Negative Externality Analysis</summary>

A chemical factory produces output where `MPC = 10 + 0.5Q`. The marginal external cost is `MEC = 5`.
Demand is `P = 50 - Q`.

(a) Find the market equilibrium output and price. (b) Find the socially optimal output and price.
(c) Calculate the deadweight loss. (d) What per-unit tax would achieve the social optimum?

(a) Market equilibrium (no tax): `MPC = MPB`: `10 + 0.5Q = 50 - Q`, `1.5Q = 40`, `Q* = 26.67`,
`P* = 23.33`.

(b) Social optimum: `MSC = MSB`. `MSC = MPC + MEC = 10 + 0.5Q + 5 = 15 + 0.5Q`. `MSB = 50 - Q`.

`15 + 0.5Q = 50 - Q`, `1.5Q = 35`, `Q_opt = 23.33`.

Price consumers pay: `P = 50 - 23.33 = 26.67`.

Price producers receive (net of tax): `P = 10 + 0.5(23.33) = 21.67`.

(c) DWL = triangle with base = `Q* - Q_opt = 26.67 - 23.33 = 3.34` and height = `MEC = 5`.

`DWL = 0.5 x 5 x 3.34 = 8.33`.

(d) The Pigouvian tax = `MEC = 5` per unit. This shifts the supply curve up from `MPC` to `MSC`, and
the new equilibrium is at the social optimum.

</details>

<details>
<summary>Question 2: Positive Externality Analysis</summary>

The demand for flu vaccinations is `P = 40 - 0.2Q` (MPB). The marginal external benefit is
`MEB = 10`. The supply (MPC = MSC) is `P = 5 + 0.1Q`.

(a) Find the market equilibrium output. (b) Find the socially optimal output. (c) Calculate the
deadweight loss. (d) What per-unit subsidy would achieve the social optimum?

(a) Market equilibrium: `MPB = MPC`: `40 - 0.2Q = 5 + 0.1Q`, `0.3Q = 35`, `Q = 116.67`.

(b) Social optimum: `MSB = MSC`. `MSB = MPB + MEB = 40 - 0.2Q + 10 = 50 - 0.2Q`. `MSC = 5 + 0.1Q`.

`50 - 0.2Q = 5 + 0.1Q`, `0.3Q = 45`, `Q_opt = 150`.

(c) DWL = `0.5 x MEB x (Q_opt - Q) = 0.5 x 10 x (150 - 116.67) = 0.5 x 10 x 33.33 = 166.67`.

(d) The subsidy = `MEB = 10` per vaccination. This shifts the demand curve up from `MPB` to `MSB`,
and the new equilibrium is at the social optimum.

Government cost = `10 x 150 = 1,500`.

</details>

<details>
<summary>Question 3: Public Goods and Free Riding</summary>

A community of 1,000 residents is considering building a public park. Each resident values the park
at USD 200. The park costs USD 120,000 to build.

(a) Is it efficient to build the park? (b) Will the park be built if left to the private market?
Explain. (c) How can the government ensure the park is built?

(a) Total social benefit = `1,000 x 200 = 200,000`. Total cost = `120,000`. Since social benefit \gt
cost, it is efficient to build the park. NPV = `200,000 - 120,000 = 80,000 \gt 0`.

(b) The park will likely NOT be built by the private market due to the free-rider problem. The park
is a public good (non-excludable, non-rivalrous). Each resident can enjoy the park even if they do
not contribute. Each individual's contribution has a negligible effect on whether the park is built
(it requires contributions from many people). The dominant strategy for each resident is to
free-ride on others' contributions. Since everyone reasons this way, total contributions are
insufficient to build the park.

Even if each resident were asked to contribute their valuation (USD 200), they have an incentive to
understate their valuation (say they value it at USD 50) to pay less while still enjoying the park.

(c) The government can build the park and finance it through compulsory taxation. Since the total
cost (USD 120,000) is less than the total benefit (USD 200,000), the park should be built. Each
resident can be taxed USD 120 (120,000 / 1,000), which is less than their valuation (USD 200), so
everyone is better off.

</details>

<details>
<summary>Question 4: Information Asymmetry</summary>

In a health insurance market, there are two types of customers: healthy (60% of the population) and
unhealthy (40%). Healthy customers have expected annual medical costs of USD 2,000. Unhealthy
customers have expected annual medical costs of USD 8,000. The insurer cannot distinguish between
the two types.

(a) If the insurer charges a single community-rated premium, what must the premium be to break even?
(b) Will healthy customers buy insurance at this premium? (c) What happens to the market over time?
(d) How can the insurer solve this adverse selection problem?

(a) Expected cost per customer = `0.6 x 2,000 + 0.4 x 8,000 = 1,200 + 3,200 = 4,400`.

The insurer must charge at least USD 4,400 per customer to break even.

(b) Healthy customers have expected costs of USD 2,000 but face a premium of USD 4,400. They are
paying USD 2,400 more than their expected costs. Many healthy customers will choose not to buy
insurance (they can self-insure by saving USD 2,000 per year instead).

(c) If healthy customers exit the market, the remaining pool consists only of unhealthy customers.
The insurer must now charge USD 8,000 to break even. This even higher premium may drive out
unhealthy customers with lower-than-average costs. The market may collapse entirely (the "adverse
selection death spiral").

(d) Solutions to adverse selection:

- **Screening:** Require medical examinations before issuing insurance. The insurer can then charge
  risk-based premiums (healthy customers pay less).
- **Signalling:** Healthy customers can signal their health status through voluntary certifications
  or by accepting deductibles and co-payments (unhealthy customers are less willing to accept
  these).
- **Mandatory insurance:** The government can require everyone to buy insurance, eliminating the
  adverse selection problem by ensuring both healthy and unhealthy customers participate. This is
  the approach used in many healthcare systems (e.g., individual mandate under the Affordable Care
  Act).
- **Group insurance:** Employers offer insurance to their entire workforce, spreading risk across a
  mixed group of healthy and unhealthy individuals.

</details>

<details>
<summary>Question 5: Cap and Trade vs Pigouvian Tax</summary>

Two power plants, `A` and `B`, emit pollution. Their marginal abatement cost (MAC) functions are:

Plant `A`: `MAC_A = 20 + 2Q_A`

Plant `B`: `MAC_B = 10 + 4Q_B`

Where `Q` is the quantity of pollution abated (reduced). The government wants total abatement of 30
units.

(a) If the government mandates each plant to abate 15 units, what is the total abatement cost? (b)
If instead the government issues 30 permits (each allowing 1 unit of pollution) and lets the plants
trade, what is the equilibrium permit price and the allocation of abatement? (c) Compare the total
cost under (a) and (b). (d) Why is the tradable permit approach more efficient?

(a) Cost to `A`: integral of `MAC_A` from 0 to 15 = `20(15) + 2(15^2)/2 = 300 + 225 = 525`.

Cost to `B`: integral of `MAC_B` from 0 to 15 = `10(15) + 4(15^2)/2 = 150 + 450 = 600`.

Total cost = `525 + 600 = 1,125`.

(b) At the cost-minimising allocation, `MAC_A = MAC_B = permit price`.

`20 + 2Q_A = 10 + 4Q_B`. And `Q_A + Q_B = 30`, so `Q_B = 30 - Q_A`.

`20 + 2Q_A = 10 + 4(30 - Q_A) = 10 + 120 - 4Q_A = 130 - 4Q_A`.

`6Q_A = 110`, `Q_A = 18.33`, `Q_B = 11.67`.

Permit price = `20 + 2(18.33) = 56.67`.

(c) Cost to `A`: `20(18.33) + 2(18.33^2)/2 = 366.6 + 336.1 = 702.7`.

Cost to `B`: `10(11.67) + 4(11.67^2)/2 = 116.7 + 272.2 = 388.9`.

Total cost = `702.7 + 388.9 = 1,091.6`.

(d) The tradable permit approach costs less (1,091.6 vs 1,125). This is because trading allows the
plants to equalise their marginal abatement costs, achieving the total abatement target at the
lowest total cost. Plant `A` (with lower MAC) does more abatement, and Plant `B` (with higher MAC)
does less. This is the equimarginal principle: cost is minimised when the marginal cost of abatement
is equal across all firms.

Under the uniform mandate, Plant `B` is forced to abate beyond its cost-effective level, while Plant
`A` abates less than it could cost-effectively. Trading corrects this misallocation.

</details>

<details>
<summary>Question 6: Government Failure Evaluation</summary>

"The government should ban all smoking because it is a demerit good." Evaluate this statement using
economic concepts.

This statement has merit but oversimplifies the policy analysis. A complete evaluation requires
considering both the market failure and the potential for government failure.

**Case for intervention (market failure):**

- Smoking generates negative externalities of consumption (second-hand smoke imposes health costs on
  non-smokers).
- Information asymmetry exists: individuals, especially young people, may not fully appreciate the
  long-term health consequences of smoking.
- Addiction impairs rational decision-making, leading to over-consumption relative to what the
  individual would choose with full information and no addiction.
- A Pigouvian tax (rather than a ban) could internalise the externality and reduce consumption.

**Problems with a complete ban:**

- A ban eliminates consumer choice. Some individuals may rationally choose to smoke, fully aware of
  the risks, and derive genuine enjoyment from it. A ban denies them this choice and reduces their
  welfare.
- A ban creates a black market (as seen with alcohol prohibition in the US). Black markets are
  unregulated, fund criminal organisations, and may deliver more dangerous products (tainted
  alcohol, unregulated tobacco).
- Enforcement costs are significant: the government must spend resources on policing, courts, and
  prisons.
- The ban destroys a legitimate industry and the jobs and tax revenue it generates.
- Government failure: the government may overestimate the externality, underestimate the enforcement
  cost, or be driven by paternalistic ideology rather than evidence.

**Better alternatives:**

1. **Pigouvian tax:** Set a tax equal to the marginal external cost. This reduces consumption toward
   the social optimum while preserving consumer choice and generating revenue. Hong Kong uses high
   tobacco taxes for this purpose.
2. **Regulation:** Minimum age restrictions, advertising bans, smoking bans in public places. These
   target specific market failures (underage consumption, information asymmetry, negative
   externalities in public spaces) without a blanket prohibition.
3. **Information provision:** Mandatory health warnings on packaging, public health campaigns. These
   address information asymmetry directly.

**Conclusion:** While government intervention in the tobacco market is justified by market failure,
a complete ban is a blunt instrument that may cause more harm than good. Targeted interventions
(taxes, regulation, information) are more likely to improve net welfare than a prohibition.

</details>

<details>
<summary>Question 7: Coase Theorem Application</summary>

A factory emits pollution that causes USD 5,000 of damage per year to a neighbouring farmer. The
factory could install a scrubber at a cost of USD 3,000 per year to eliminate the pollution.

(a) What is the efficient outcome? (b) If the factory has the right to pollute (no legal
restriction), will the farmer pay the factory to install the scrubber? Explain. (c) If the farmer
has the right to clean air (the factory must compensate the farmer for any damage), what will
happen? (d) What conditions must hold for the Coase theorem to apply?

(a) The efficient outcome is for the factory to install the scrubber. The scrubber costs USD 3,000
and prevents USD 5,000 of damage. Net social benefit = 5,000 - 3,000 = USD 2,000. Installing the
scrubber is the lower-cost solution.

(b) If the factory has the right to pollute, the farmer can offer to pay the factory to install the
scrubber. The farmer would be willing to pay up to USD 5,000 (the damage avoided). The factory would
accept any payment above USD 3,000 (the cost of the scrubber). If they negotiate a payment between
USD 3,000 and USD 5,000, both parties are better off. The efficient outcome is achieved through
private bargaining.

(c) If the farmer has the right to clean air, the factory must either stop polluting (install the
scrubber at USD 3,000) or compensate the farmer USD 5,000 per year. The factory will choose to
install the scrubber (USD 3,000 is cheaper than USD 5,000 in compensation). The efficient outcome is
achieved.

(d) The Coase theorem states that if property rights are well-defined and transaction costs are low,
private bargaining will lead to an efficient outcome regardless of the initial allocation of rights.
The required conditions are:

1. Well-defined property rights (either the factory has the right to pollute or the farmer has the
   right to clean air).
2. Low transaction costs (the parties can negotiate easily, without expensive legal proceedings or
   intermediaries).
3. A small number of affected parties (bargaining between one factory and one farmer is feasible;
   bargaining between one factory and 10,000 affected residents is not).
4. No income effects (the payment does not significantly change either party's wealth and therefore
   their marginal valuations).

In practice, the Coase theorem often fails because transaction costs are high (legal fees,
collective action problems among many affected parties), property rights are unclear, and there are
many affected parties (making bargaining impractical). In these cases, government intervention
(taxes, regulation, or tradable permits) is necessary.

</details>

### Merit Goods: Education and Healthcare as Examples

Education and healthcare are the two most commonly cited merit goods. They share several
characteristics that justify government intervention:

**Education:**

- Positive externalities: a more educated workforce is more productive, generates innovation, and
  has lower crime rates. These benefits accrue to society, not just the individual student.
- Imperfect information: young people and their parents may underestimate the long-term returns to
  education (especially for disadvantaged families with limited experience of higher education and
  its benefits).
- Capital market failure: students cannot borrow against future earnings to finance education (banks
  are unwilling to lend to young people with no collateral), even when the expected return on
  education exceeds the borrowing cost. Government student loans overcome this market failure.
- Equity: access to education should not depend solely on parental income. Government provision or
  subsidisation promotes equality of opportunity.

**Healthcare:**

- Positive externalities: vaccination and treatment of infectious diseases protect the broader
  community. A healthy workforce is more productive.
- Imperfect information: patients cannot easily evaluate the quality of medical treatment. The
  principal-agent problem exists between doctor and patient (the doctor knows more than the patient
  and may recommend unnecessary treatments).
- Uncertainty: health shocks are unpredictable and potentially catastrophic. Private insurance
  markets may fail due to adverse selection (high-risk individuals are more likely to buy insurance)
  and moral hazard (insured individuals may take more health risks).
- Equity: access to basic healthcare should not depend on income. Government provision ensures a
  minimum standard of health for all citizens.

### The Coase Theorem

The Coase theorem (Ronald Coase, 1960) states that if property rights are well-defined and
transaction costs are zero (or sufficiently low), private bargaining between affected parties will
lead to an efficient outcome regardless of the initial allocation of property rights.

**Implications:**

1. The efficient outcome does not depend on who initially holds the property rights.
2. The allocation of rights affects the distribution of wealth (who pays whom) but not the
   efficiency of the outcome (the total quantity of pollution or consumption).
3. Government intervention (taxes, regulation) is only necessary when transaction costs are high or
   property rights are unclear.

**Limitations in practice:**

- Transaction costs are rarely zero (legal fees, negotiation costs, enforcement costs).
- When many parties are affected (e.g., pollution affecting thousands of residents), collective
  action problems make bargaining impractical (free-riding within the group of affected parties).
- Information asymmetry may prevent efficient bargaining.
- Income effects may change marginal valuations (if the factory must pay a large sum to the farmer,
the factory's willingness to pay for abatement may change).

---

## Problem Set

<details>
<summary>Problem 1: Negative Externality of Consumption</summary>

Smoking in public places generates a negative externality. The private demand for cigarettes is
`P = 20 - 0.02Q` (MPB). The marginal external cost of consumption is `MEC = 6`. Supply (MPC = MSC)
is `P = 2 + 0.01Q`.

(a) Find the market equilibrium quantity and price. (b) Find the socially optimal quantity. (c) What
per-unit tax on consumers would achieve the social optimum? (d) Calculate the DWL without intervention.

<details>
<summary>Solution</summary>

(a) Market: `MPB = MPC`: `20 - 0.02Q = 2 + 0.01Q`, `0.03Q = 18`, `Q = 600`. `P = 8`.

(b) Social optimum: `MSB = MPB - MEC = 20 - 0.02Q - 6 = 14 - 0.02Q`.
Set `MSB = MSC`: `14 - 0.02Q = 2 + 0.01Q`, `0.03Q = 12`, `Q = 400`.

(c) Tax = `MEC = 6` per pack of cigarettes.

(d) DWL = `0.5 \times 6 \times (600 - 400) = 0.5 \times 6 \times 200 = 600`.

</details>

If you get this wrong, revise: [Negative Externality of Consumption](#negative-externality-of-consumption)

</details>

<details>
<summary>Problem 2: Public Goods Provision</summary>

A village of 500 residents is considering building a street lighting system costing USD 25,000. Each
resident values the lighting at USD 60.

(a) Is it efficient to build the system? (b) Will the private market provide it? (c) How should the
village fund it?

<details>
<summary>Solution</summary>

(a) Total benefit = `500 \times 60 = 30,000`. Cost = `25,000`. Since `30,000 \gt 25,000`, it IS
efficient (NPV = 5,000 \gt 0).

(b) No -- street lighting is a **public good** (non-excludable, non-rivalrous). The free-rider problem
means each resident hopes others will pay while they enjoy the benefit for free. Private provision will
under-provide or not provide at all.

(c) The village government should build the system and fund it through compulsory taxation. Each
resident can be taxed `25,000/500 = 50`, which is less than their valuation (60). Everyone is better
off.

</details>

If you get this wrong, revise: [Public Goods](#public-goods)

</details>

<details>
<summary>Problem 3: Adverse Selection in Insurance</summary>

An insurance market has two groups: low-risk (70% of population, expected claims USD 1,000/year) and
high-risk (30%, expected claims USD 5,000/year). The insurer cannot distinguish between them.

(a) What single premium must the insurer charge to break even? (b) Will low-risk customers buy at this
premium? (c) What happens to the market over time?

<details>
<summary>Solution</summary>

(a) Expected cost = `0.7 \times 1,000 + 0.3 \times 5,000 = 700 + 1,500 = 2,200`. Premium must be at
least USD 2,200.

(b) Low-risk customers have expected costs of USD 1,000 but must pay USD 2,200. Many will not buy
(they can self-insure by saving USD 1,000/year). They are overpaying by USD 1,200.

(c) Low-risk customers exit. Remaining pool has more high-risk customers. The insurer must raise the
premium further. This "death spiral" may collapse the market entirely, leaving only high-risk
customers at very high premiums.

</details>

If you get this wrong, revise: [Adverse Selection](#adverse-selection)

</details>

<details>
<summary>Problem 4: Merit vs Demerit Goods</summary>

For each of the following, classify as a merit good, a demerit good, or neither, and identify the type
of market failure involved:

(a) University education (b) Sugary drinks (c) Vaccination (d) Designer clothing (e) Cigarettes

<details>
<summary>Solution</summary>

(a) **Merit good.** Positive externalities (educated workforce benefits society). Information problems
(students underestimate long-term returns). Under-consumed.

(b) **Demerit good.** Negative externalities (health costs to society from obesity/diabetes). Information
problems (consumers underestimate long-term health risks). Over-consumed.

(c) **Merit good.** Positive externalities (herd immunity). Information problems (individuals may not
understand the full social benefit). Under-consumed.

(d) **Neither.** No significant externality. Consumers are generally well-informed. Market allocation
is efficient.

(e) **Demerit good.** Negative externalities (second-hand smoke, healthcare costs). Information problems
and addiction. Over-consumed.

</details>

If you get this wrong, revise: [Merit Goods and Demerit Goods](#merit-goods-and-demerit-goods)

</details>

<details>
<summary>Problem 5: Cap and Trade Efficiency</summary>

Two factories emit pollution. `MAC_A = 30 + 3Q_A` and `MAC_B = 10 + 5Q_B`. The government requires total
abatement of 24 units.

(a) If each factory must abate 12 units, what is the total cost? (b) If permits are tradeable, find the
cost-minimising allocation. (c) How much does trading save?

<details>
<summary>Solution</summary>

(a) Cost of A: `30(12) + 3(144)/2 = 360 + 216 = 576`.
Cost of B: `10(12) + 5(144)/2 = 120 + 360 = 480`.
Total = `576 + 480 = 1,056`.

(b) Cost minimisation: `MAC_A = MAC_B`: `30 + 3Q_A = 10 + 5Q_B`, and `Q_A + Q_B = 24`, so `Q_B = 24 - Q_A`.
`30 + 3Q_A = 10 + 5(24 - Q_A) = 130 - 5Q_A`. `8Q_A = 100`, `Q_A = 12.5`, `Q_B = 11.5`.
Permit price = `30 + 3(12.5) = 67.5`.

Cost of A: `30(12.5) + 3(156.25)/2 = 375 + 234.4 = 609.4`.
Cost of B: `10(11.5) + 5(132.25)/2 = 115 + 330.6 = 445.6`.
Total = `609.4 + 445.6 = 1,055`.

(c) Savings = `1,056 - 1,055 = 1` (small saving here, but the principle holds: trading allows equalisation
of marginal costs).

</details>

If you get this wrong, revise: [Tradable Pollution Permits (Cap and Trade)](#tradable-pollution-permits-cap-and-trade)

</details>

<details>
<summary>Problem 6: Government Failure Evaluation</summary>

"The government should ban all sugary drinks to solve the obesity problem." Evaluate this statement
using economic concepts.

<details>
<summary>Solution</summary>

**Market failure case for intervention:**

- Sugary drinks have negative externalities (healthcare costs from obesity, diabetes).
- Information asymmetry: consumers may not fully appreciate long-term health consequences.
- Over-consumption relative to the social optimum.

**Problems with a ban:**

- Eliminates consumer choice entirely. Moderate consumers who are not harmed are penalised.
- Creates a black market (as with alcohol prohibition).
- Enforcement costs are significant.
- Lost tax revenue and industry jobs.
- Government failure: the government may overestimate the externality.

**Better alternatives:**

1. Pigouvian tax (sugar tax) -- reduces consumption while preserving choice and generating revenue.
2. Information campaigns (health warnings, calorie labelling) -- addresses information asymmetry.
3. Regulation (portion size limits, advertising restrictions to children) -- targeted measures.

**Conclusion:** While intervention is justified, a blanket ban is disproportionate. Targeted measures
(taxes, regulation, information) are more likely to improve net welfare.

</details>

If you get this wrong, revise: [Government Failure](#government-failure)

</details>

<details>
<summary>Problem 7: Coase Theorem Application</summary>

A nightclub generates noise that causes USD 8,000 of damage per year to a neighbouring hotel. The
nightclub could install soundproofing at a cost of USD 3,000 per year to eliminate the noise.

(a) What is the efficient outcome? (b) If the nightclub has the right to make noise, will the hotel pay
for soundproofing? What is the range of payment? (c) What conditions must hold for the Coase theorem to
apply? (d) Why might the Coase theorem fail in practice?

<details>
<summary>Solution</summary>

(a) Install soundproofing. Cost (3,000) is less than damage avoided (8,000). Net social benefit = 5,000.

(b) Yes. The hotel would pay up to USD 8,000 (damage avoided). The nightclub would accept any payment
above USD 3,000 (cost of soundproofing). Any payment between 3,000 and 8,000 makes both parties
better off.

(c) Well-defined property rights, low transaction costs, small number of affected parties, no
significant income effects.

(d) In practice: many affected parties (collective action problems), high legal costs, uncertainty
about damages, difficulty enforcing agreements, income effects.

</details>

If you get this wrong, revise: [The Coase Theorem](#the-coase-theorem)

</details>

<details>
<summary>Problem 8: Cost-Benefit Analysis</summary>

A government is considering building a new bridge costing USD 500 million. Benefits: reduced travel time
worth USD 80 million/year for 10 years, increased economic activity worth USD 20 million/year for 10
years. The social discount rate is 5%.

(a) Calculate the NPV. (b) Should the bridge be built? (c) What are the limitations of this analysis?

<details>
<summary>Solution</summary>

(a) Annual benefit = `80 + 20 = 100` million for 10 years.

PV of benefits = `100 \times [1 - 1/(1.05)^{10}] / 0.05 = 100 \times [1 - 0.6139] / 0.05 = 100 \times 7.722 = 772.2` million.

NPV = `772.2 - 500 = 272.2` million.

(b) Yes. NPV is positive (272.2 \gt 0), so the bridge should be built.

(c) Limitations: difficult to value reduced travel time accurately; may underestimate environmental
costs (noise, visual impact); uncertain economic activity estimates; the discount rate choice
significantly affects the result (a higher rate would reduce NPV); distributional effects (who gains
and who loses) are not captured.

</details>

If you get this wrong, revise: [Cost-Benefit Analysis of Government Intervention](#cost-benefit-analysis-of-government-intervention)

</details>

