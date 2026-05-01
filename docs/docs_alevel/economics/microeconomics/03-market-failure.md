---
title: Market Failure
description:
  "A-Level Economics notes on Market Failure: 2.1 Externalities; Derivation of the Welfare Loss; Types of Externalities; 2.2 Public Goods."
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: market-failure
sidebar_position: 3
---

## 1. Definition of Market Failure

We define **market failure** as the condition in which the free market allocation of resources is
_allocatively inefficient_ — that is, the market fails to produce the Pareto-optimal quantity of
goods and services.

Formally, market failure occurs when the price mechanism does not equate marginal social benefit
with marginal social cost:

$$P \neq MSC \quad \mathrm{or equivalently} \quad MSB \neq MSC$$

This leads to a **deadweight welfare loss**: the total surplus (consumer + producer + third-party)
is not maximised.

:::warning Common Pitfall Market failure does not mean the market has "failed" in a colloquial
sense. It means the _outcome_ is suboptimal — there exists a reallocation that could make at least
one person better off without making anyone worse off (Pareto improvement).
:::

## 2. Types of Market Failure

:::info Board-Specific Note **AQA** requires detailed analysis of all four types of externality
(production/consumption, positive/negative) with diagrammatic welfare loss triangles. **Edexcel**
emphasises the distinction between private and social costs/benefits using demand-supply diagrams.
**CIE (9708)** covers market failure in the context of allocative efficiency and requires
consumer/producer surplus, deadweight loss, and cost-benefit analysis. **OCR (A)** links market
failure directly to government intervention and expects evaluation of whether intervention improves
outcomes.
:::

### 2.1 Externalities

We define an **externality** as a cost or benefit arising from production or consumption that
affects a third party who is not part of the transaction.

**Negative externality**: the social cost exceeds the private cost.

$$MSC = MPC + MEC$$

where $MPC$ = marginal private cost, $MEC$ = marginal external cost.

**Positive externality**: the social benefit exceeds the private benefit.

$$MSB = MPB + MEB$$

where $MPB$ = marginal private benefit, $MEB$ = marginal external benefit.

#### Derivation of the Welfare Loss

Consider a good with a negative production externality (e.g., pollution from a factory). The market
equilibrium is where demand (MPB) equals supply (MPC):

$$\mathrm{Market equilibrium: } MPB = MPC \implies Q_{mkt}, P_{mkt}$$

The socially optimal outcome is where marginal social benefit equals marginal social cost:

$$\mathrm{Social optimum: } MSB = MSC \implies Q^*, P^*$$

Since $MSC > MPC$ (there is an external cost), the social optimum quantity $Q^*$ is _less than_ the
market quantity $Q_{mkt}$. The free market **over-produces** the good.

The deadweight welfare loss (DWL) is:

$$\mathrm{DWL} = \frac{1}{2}(Q_{mkt} - Q^*)(MSC(Q_{mkt}) - MSB(Q_{mkt}))$$

This is the area of the triangle between the MSC and MSB curves from $Q^*$ to $Q_{mkt}$.

For positive externalities (e.g., education, vaccinations), the analysis is reversed: $MSB > MPB$,
so $Q^* > Q_{mkt}$. The free market **under-produces** the good, and the DWL triangle lies between
$Q_{mkt}$ and $Q^*$.

<details>
<summary>Example: Pollution from a Chemical Factory</summary>
A chemical factory produces output $Q$ with marginal private cost $MPC = 20 + Q$ and marginal
external cost $MEC = Q$. The marginal private benefit (demand) is $MPB = 80 - Q$.

- $MSC = MPC + MEC = 20 + 2Q$
- Market equilibrium: $80 - Q = 20 + Q \Rightarrow Q_{mkt} = 30$, $P_{mkt} = 50$
- Social optimum: $80 - Q = 20 + 2Q \Rightarrow Q^* = 20$, $P^* = 60$
- DWL $= \frac{1}{2}(30 - 20)(MSC(30) - MSB(30)) = \frac{1}{2}(10)(80 - 50) = 150$

The market over-produces by 10 units, creating a welfare loss of 150.

</details>

#### Types of Externalities

|              | Production                             | Consumption                                 |
| ------------ | -------------------------------------- | ------------------------------------------- |
| **Negative** | Factory pollution ($MSC > MPC$)        | Second-hand smoke, congestion ($MSC > MPB$) |
| **Positive** | Beekeeping near orchards ($MSC < MPC$) | Vaccination, education ($MSB > MPB$)        |

### 2.2 Public Goods

We define a **public good** as a good that is:

1. **Non-excludable**: it is impossible (or prohibitively costly) to prevent non-payers from
   consuming the good
2. **Non-rivalrous**: one person's consumption does not reduce the quantity available to others

$$Q_{total} = Q_{individual} \quad \mathrm{(non-rivalry)}$$

Contrast with **private goods**: excludable and rivalrous (your consumption of an apple means I
cannot eat it).

|                    | Rivalrous                                    | Non-rivalrous                                    |
| ------------------ | -------------------------------------------- | ------------------------------------------------ |
| **Excludable**     | Private goods (food, clothing)               | Club goods (cable TV, cinema)                    |
| **Non-excludable** | Common resources (fish stocks, grazing land) | Public goods (national defence, street lighting) |

#### The Free-Rider Problem

**Proposition:** In a free market, public goods will be under-provided or not provided at all.

_Proof._ Suppose a public good costs $C$ to provide and benefits each of $n$ individuals by $B_i$.
The socially optimal provision requires $\sum_{i=1}^{n} B_i \geq C$. However, each individual $i$
reasons: "If others pay, I can enjoy the good without paying (non-excludability). If others don't
pay, my contribution is insufficient to provide the good." Therefore, it is individually rational
for each person not to contribute — the **dominant strategy is to free-ride**. By the same logic, no
one contributes, and the good is not provided, even when $\sum B_i \gg C$. $\blacksquare$

**Quasi-public goods**: goods that are largely non-rivalrous but are excludable (e.g., roads,
education, healthcare). These are often provided by the government because the market would
under-provide them.

### 2.3 Information Asymmetry

We define **information asymmetry** as a situation in which one party to a transaction has more or
better information than the other.

#### Adverse Selection (Akerlof's Lemons Model)

Akerlof (1970) analysed the market for used cars. Sellers know the quality of their car; buyers do
not. There are two types of cars:

- **"Peaches"** (high quality): value to seller $= £8{,}000$, value to buyer $= £10{,}000$
- **"Lemons"** (low quality): value to seller $= £4{,}000$, value to buyer $= £6{,}000$

If buyers can distinguish quality, both types trade at mutually beneficial prices. But if buyers
cannot distinguish, and 50% of cars are peaches and 50% are lemons, the **expected value** to a
buyer of a random car is:

$$E[V] = 0.5 \times 10{,}000 + 0.5 \times 6{,}000 = £8{,}000$$

Buyers are willing to pay at most £8,000. But at this price, sellers of peaches (£8,000 value to
seller) will not sell — only lemons are offered. Buyers, anticipating this, revise their offer
downward to £6,000. Now _only_ lemons trade. **The market for high-quality cars collapses** — this
is adverse selection: asymmetric information drives high-quality products out of the market.

#### Moral Hazard

We define **moral hazard** as a situation in which one party alters their behaviour after entering
into an agreement, knowing that the other party bears some of the cost of that behaviour.

<details>
<summary>Example</summary>
After purchasing comprehensive car insurance, a driver may take more risks (driving faster, parking
in unsafe areas) because the insurance company bears the cost of accidents. The driver's behaviour
changes _because_ they are insured — this is moral hazard.
</details>

### 2.4 Market Power

When a single firm (monopoly) or a small number of firms (oligopoly) have significant market power,
they restrict output and raise prices above the competitive level. This creates a deadweight loss
(analysed in detail in Topic 4).

### 2.5 Factor Immobility

**Occupational immobility**: workers cannot easily move between jobs due to lack of skills,
training, or qualifications.

**Geographical immobility**: workers cannot easily move between regions due to housing costs, family
ties, or information gaps.

Both types of immobility prevent the market from clearing, leading to structural unemployment and
inefficient allocation of labour.

### 2.6 Inequality

Markets reward factors of production according to marginal productivity. Those who own scarce,
highly productive factors (skilled labour, capital, land) receive higher incomes. Without
redistribution, this can lead to extreme inequality — which many consider a form of market failure
because:

1. Unequal incomes $\Rightarrow$ unequal access to education, healthcare, opportunities
2. High inequality may reduce aggregate demand (the rich have a lower MPC)
3. Social and political instability

## 3. Measuring Inequality: The Lorenz Curve and Gini Coefficient

### 3.1 Lorenz Curve

The **Lorenz curve** plots the cumulative share of income received by the cumulative share of the
population, ordered from poorest to richest.

If income were perfectly equally distributed, the Lorenz curve would be the 45° line (line of
perfect equality). The greater the deviation (bow) of the Lorenz curve from the 45° line, the
greater the inequality.

### 3.2 Gini Coefficient

We define the **Gini coefficient** as:

$$G = \frac{A}{A + B}$$

where $A$ is the area between the 45° line and the Lorenz curve, and $B$ is the area under the
Lorenz curve.

Since $A + B = \frac{1}{2}$ (area of the triangle below the 45° line):

$$G = \frac{A}{A + B} = 2A = 1 - 2B$$

| Gini Value  | Interpretation                                       |
| ----------- | ---------------------------------------------------- |
| $G = 0$     | Perfect equality                                     |
| $G = 1$     | Perfect inequality (one person has all income)       |
| $0.2 - 0.3$ | Relatively equal (e.g., Nordic countries: 0.25-0.28) |
| $0.3 - 0.4$ | Moderate inequality (e.g., UK: 0.35)                 |
| $0.5 - 0.6$ | High inequality (e.g., South Africa: 0.63)           |

## 4. Government Intervention

:::info Board-Specific Note **AQA** requires comparison of taxes, subsidies, regulation, and
tradable permits with evaluation of each. **Edexcel** expects diagrammatic analysis showing the
effect of Pigouvian taxes and subsidies on equilibrium. **CIE (9708)** covers government
intervention alongside cost-benefit analysis and requires understanding of when intervention may
fail. **OCR (A)** emphasises the link between market failure and government failure, requiring
students to evaluate whether intervention worsens outcomes.
:::

### 4.1 Pigouvian Taxation

For a negative externality, the optimal **Pigouvian tax** equals the marginal external cost at the
socially optimal quantity:

$$t^* = MEC(Q^*)$$

**Proof of optimality.** With a specific tax $t$ per unit, the firm's private cost becomes
$MPC + t$. The firm produces where demand equals private cost plus tax: $MPB = MPC + t$. For this to
equal the social optimum ($MPB = MSC = MPC + MEC$), we need $t = MEC$ at the optimal quantity.
$\blacksquare$

The tax **internalises the externality**: the firm now faces the full social cost of its production
and reduces output to $Q^*$.

<details>
<summary>Example: Carbon Tax</summary>
A coal power plant produces electricity with $MPC = 10 + Q$ and $MEC = 0.5Q$ (carbon emissions
damage). Demand: $P = 100 - Q$.

- $MSC = 10 + 1.5Q$
- Social optimum: $100 - Q = 10 + 1.5Q \Rightarrow Q^* = 36$, $P^* = 64$
- Optimal tax: $t^* = MEC(36) = 18$
- With tax, firm faces: $MPC + t = 10 + Q + 18 = 28 + Q$. Equilibrium:
$100 - Q = 28 + Q \Rightarrow Q = 36$ ✓
</details>

### 4.2 Subsidies

For positive externalities, a **Pigouvian subsidy** equal to the marginal external benefit can
internalise the externality and increase output to the social optimum.

**Limitation**: subsidies require government revenue (from taxation), which may itself create
distortions.

### 4.3 Regulation

The government can directly regulate production or consumption:

- **Quantity regulation**: e.g., banning smoking in public places, setting emission limits
- **Price regulation**: e.g., price ceilings (rent control), price floors (minimum wage)
- **Quality standards**: e.g., minimum building standards, food safety regulations

**Evaluation**: regulation can be effective but may be:

- Inflexible (doesn't allow firms to find least-cost solutions)
- Costly to enforce (monitoring and compliance)
- Subject to regulatory capture (regulated firms influence the regulator)

### 4.4 Tradable Permits

The government sets a total quantity of pollution allowed and issues permits that firms can trade
among themselves. This combines quantity regulation with market efficiency:

- Firms with low abatement costs reduce pollution and sell permits
- Firms with high abatement costs buy permits instead
- The equilibrium permit price equals the marginal abatement cost across all firms

**Advantage**: achieves the environmental target at minimum cost to society.

### 4.5 Direct Provision

The government directly provides public goods (defence, street lighting) and merit goods (education,
healthcare) that the market would under-provide.

### 4.6 Provision of Information

Government can reduce information asymmetry by:

- Mandatory labelling (nutritional information, energy ratings)
- Product safety standards
- Employment laws (preventing discrimination)
- Financial regulation (requiring disclosure)

## 5. Government Failure

We define **government failure** as the situation in which government intervention to correct a
market failure worsens the outcome.

### 5.1 Types of Government Failure

1. **Regulatory capture**: the regulatory agency becomes dominated by the industry it regulates,
   acting in the industry's interest rather than the public's
2. **Information problems**: governments face the same information constraints as markets — they may
   not know the optimal tax rate or the true marginal external cost
3. **Bureaucracy and inefficiency**: government agencies lack the profit motive and may be slow,
   costly, and unresponsive
4. **Unintended consequences**: e.g., rent control reducing the supply of housing, agricultural
   subsidies encouraging overproduction
5. **Political constraints**: short election cycles incentivise policies with immediate visible
   benefits but long-term costs
6. **Principal-agent problems**: government officials (agents) may not act in the public's
   (principal's) interest

:::tip Exam Technique When evaluating government intervention, always consider government failure. A
strong answer acknowledges that government intervention is not automatically superior to the market
— it depends on the relative severity of market failure vs government failure in each specific case.
:::

## 6. Critical Evaluation

### Merit and Demerit Goods

**Merit goods**: goods that the government believes consumers _should_ consume more of, because
consumers underestimate their private benefit (due to imperfect information or myopia). Examples:
education, healthcare, vaccinations.

**Demerit goods**: goods that the government believes consumers _should_ consume less of. Examples:
alcohol, tobacco, illegal drugs.

:::warning Common Pitfall Merit and demerit goods are normative concepts — they depend on value
judgements about what is "good" or "bad" for people. This is different from positive externalities
(which are objective welfare effects on third parties). Many merit goods also generate positive
externalities, but the concepts are distinct.
:::

### Tragedy of the Commons

For **common resources** (rivalrous but non-excludable), individual rationality leads to collective
irrationality. Each herder adds animals to the common grazing land because they receive the full
benefit of the additional animal but share the cost of overgrazing with all herders. The result is
depletion of the common resource (Hardin, 1968).

## 7. Problem Set

**Problem 1.** A steel factory has marginal private cost $MPC = 15 + 0.5Q$ and generates marginal
external cost $MEC = 0.3Q$. The demand curve is $P = 60 - Q$. Find (a) the market equilibrium, (b)
the socially optimal output, (c) the optimal Pigouvian tax, (d) the deadweight loss of the free
market outcome.

<details>
<summary>Hint</summary>
(a) Market: $60 - Q = 15 + 0.5Q \Rightarrow Q_{mkt} = 30$, $P = 30$. (b) $MSC = 15 + 0.8Q$. Social optimum: $60 - Q = 15 + 0.8Q \Rightarrow Q^* = 25$, $P^* = 35$. (c) $t^* = MEC(25) = 7.5$. (d) DWL $= \frac{1}{2}(30 - 25)(MSC(30) - MSB(30)) = \frac{1}{2}(5)(15 + 24 - 30) = \frac{1}{2}(5)(9) = 22.5$.
</details>

**Problem 2.** Vaccination against a disease has marginal private benefit $MPB = 100 - Q$ and
marginal private cost $MPC = 20 + Q$. The marginal external benefit is $MEB = 0.5Q$ (herd immunity).
Find the market outcome, the social optimum, and the optimal subsidy.

<details>
<summary>Hint</summary>
Market: $100 - Q = 20 + Q \Rightarrow Q_{mkt} = 40$. Social: $MSB = 100 - Q + 0.5Q = 100 - 0.5Q$. $100 - 0.5Q = 20 + Q \Rightarrow Q^* = 160/3 \approx 53.3$. Optimal subsidy $= MEB(Q^*) = 0.5 \times 53.3 = 26.7$.
</details>

**Problem 3.** Using Akerlof's lemons model, explain what happens if the proportion of peaches
increases to 80%. Calculate the expected value to the buyer and determine whether the market for
peaches survives.

<details>
<summary>Hint</summary>
Expected value $= 0.8 \times 10{,}000 + 0.2 \times 6{,}000 = £9{,}200$. Sellers of peaches (value £8,000) will sell at £9,200. Sellers of lemons (value £4,000) will also sell. Both types trade — the market survives because the expected value exceeds the sellers' reservation price for peaches.
</details>

**Problem 4.** A country has five income groups with the following shares of total income: poorest
20% receive 5%, second 20% receive 10%, third 20% receive 15%, fourth 20% receive 25%, richest 20%
receive 45%. Plot the Lorenz curve (conceptually) and calculate the Gini coefficient.

<details>
<summary>Hint</summary>
Cumulative shares: (20%, 5%), (40%, 15%), (60%, 30%), (80%, 55%), (100%, 100%). Gini $= 1 - 2B$ where $B$ is the area under the Lorenz curve. Using the trapezoidal rule: $B = 0.2 \times [0 + 2(0.05 + 0.15 + 0.30 + 0.55) + 1]/2 = 0.2 \times [0 + 2.10 + 1]/2 = 0.2 \times 1.55 = 0.31$. Gini $= 1 - 0.62 = 0.38$.
</details>

**Problem 5.** "Government provision of healthcare is justified because healthcare is a merit good."
Evaluate this statement, considering both market failure and government failure arguments.

<details>
<summary>Hint</summary>
For: imperfect information (patients can't assess treatment quality), positive externalities (healthy population is more productive), equity concerns (healthcare as a basic right). Against: government provision may be inefficient (no profit motive leads to waste), long waiting times, rationing by queuing rather than price, taxpayer burden. Consider: could the government achieve similar outcomes through regulation and subsidies rather than direct provision?
</details>

**Problem 6.** A government is considering two policies to reduce carbon emissions: (a) a carbon tax
of £50 per tonne, (b) a regulation requiring all firms to reduce emissions by 20%. Evaluate both
policies using the criteria of efficiency, equity, and practicality.

<details>
<summary>Hint</summary>
Tax (a): efficient (firms with low abatement costs reduce more, high-cost firms pay tax), generates revenue (could be used to reduce other distortionary taxes or fund green investment), but uncertain environmental outcome (can't guarantee emission reduction target), regressive (low-income households spend larger share on energy). Regulation (b): certain environmental outcome (guaranteed 20% reduction), but inefficient (all firms must reduce by same amount regardless of cost), no revenue generated, may be difficult to enforce.
</details>

**Problem 7.** Explain why a pure public good (non-excludable, non-rivalrous) will not be provided
by the free market. In your answer, distinguish between the free-rider problem and the tragedy of
the commons.

<details>
<summary>Hint</summary>
Free-rider problem applies to public goods (non-excludable): individuals can benefit without paying, so no one pays $\Rightarrow$ not provided. Tragedy of the commons applies to common resources (rivalrous, non-excludable): individuals over-use because they don't bear the full cost $\Rightarrow$ resource is depleted. Both involve non-excludability but differ in rivalry.
</details>

**Problem 8.** A tradable permit scheme for pollution allows 100 firms to each emit up to 10 tonnes
of CO₂. Firm A can reduce emissions at a cost of £5/tonne, while Firm B's abatement cost is
£20/tonne. Show that both firms benefit from trading permits, and find the equilibrium permit price
range.

<details>
<summary>Hint</summary>
If Firm A reduces by 1 extra tonne (cost £5) and sells the permit to Firm B (saving £20), both benefit. The gain is shared. Trading continues until the permit price equals both firms' marginal abatement costs. The equilibrium price is between £5 and £20. Total cost savings = £15 per permit traded.
</details>

**Problem 9.** "Rent control is an effective way to make housing affordable." Evaluate this
statement using both theoretical analysis and empirical evidence.

<details>
<summary>Hint</summary>
Rent control sets a price ceiling below equilibrium $\Rightarrow$ excess demand (shortage). Short-run: existing tenants benefit from lower rents. Long-run: landlords reduce supply (convert to condos, neglect maintenance, exit market) $\Rightarrow$ shortage worsens, housing quality deteriorates. Empirical evidence (e.g., New York, Stockholm) generally supports these predictions. Alternatives: housing benefit (subsidy to low-income renters) increases demand but doesn't restrict supply.
</details>

**Problem 10.** Explain the concept of moral hazard in the context of (a) health insurance and (b)
bank bailouts. How can policymakers mitigate moral hazard in each case?

<details>
<summary>Hint</summary>
(a) Insured individuals may over-use healthcare or take health risks. Mitigation: co-payments, deductibles, no-claims bonuses. (b) Banks knowing they will be bailed out may take excessive risks (too big to fail). Mitigation: require higher capital ratios, impose "living wills" (resolution plans), use "bail-in" mechanisms (bondholders bear losses before taxpayers).
</details>

**Problem 11.** "The existence of market failure justifies government intervention." To what extent
do you agree with this statement?

<details>
<summary>Hint</summary>
Agree: market failure leads to allocative inefficiency (DWL), government can internalise externalities, provide public goods, reduce information asymmetry. Disagree: government failure may be worse than market failure (regulatory capture, information problems, unintended consequences). The key question is *comparative* analysis: which is worse in this specific case? Some market failures may be better addressed through private solutions (Coase theorem, reputation mechanisms, contracts).
</details>

**Problem 12.** Explain how the Coase theorem applies to externalities. Under what conditions can
private bargaining resolve externalities without government intervention? Why might the Coase
theorem fail in practice?

<details>
<summary>Hint</summary>
Coase theorem: if property rights are well-defined, transaction costs are zero, and there are few parties, private bargaining will achieve the efficient outcome regardless of who holds the property rights. Example: a factory and neighbouring residents can negotiate a payment for reduced pollution. Fails when: many affected parties (high transaction costs), measurement problems (hard to verify pollution levels), wealth effects (assignment of rights affects distribution), strategic behaviour (holdout problems).
</details>

## 8. Negative Externalities: Extended Worked Examples

### 8.1 Calculating DWL with Linear Functions

**Example.** A factory producing widgets has $MPC = 10 + Q$ and generates pollution with
$MEC = 0.5Q$. Demand is $P = 80 - Q$. Find the market equilibrium, social optimum, optimal Pigouvian
tax, and DWL.

**Answer.**

$MSC = 10 + 1.5Q$.

Market equilibrium: $80 - Q = 10 + Q \implies Q_{mkt} = 35$, $P_{mkt} = 45$.

Social optimum: $80 - Q = 10 + 1.5Q \implies Q^* = 28$, $P^* = 52$.

Optimal tax: $t^* = MEC(28) = 14$.

DWL
$= \frac{1}{2}(35 - 28)(MSC(35) - MSB(35)) = \frac{1}{2}(7)(10 + 52.5 - 45) = \frac{1}{2}(7)(17.5) = 61.25$.

### 8.2 Diagrammatic Analysis

For a negative production externality, the standard diagram shows:

- Demand curve (MPB) downward sloping
- Supply curve (MPC) upward sloping, to the right of MSC
- MSC curve above MPC by the vertical distance equal to MEC
- Market equilibrium at intersection of MPB and MPC (over-production)
- Social optimum at intersection of MPB and MSC
- DWL triangle between MSC and MPB from $Q^*$ to $Q_{mkt}$

The tax shifts the MPC curve upward by $t^*$, so the new MPC + tax curve passes through the social
optimum.

## 9. Public Goods and the Free-Rider Problem: Extended Analysis

### 9.1 Pure Public Goods vs Quasi-Public Goods

| Feature          | Pure Public Good                  | Quasi-Public Good              |
| ---------------- | --------------------------------- | ------------------------------ |
| Excludability    | Non-excludable                    | Excludable                     |
| Rivalry          | Non-rivalrous                     | Non-rivalrous (up to capacity) |
| Market provision | Will not be provided              | Under-provided                 |
| Examples         | National defence, street lighting | Roads, parks, education        |
| Funding          | General taxation                  | Taxation or user fees          |

### 9.2 Worked Example: Valuing a Public Good

**Example.** A street lamp benefits 50 residents. Each resident values the lamp at $£30$. The lamp
costs $£1{,}000$ to install. Should it be provided?

**Answer.** Total social benefit $= 50 \times 30 = £1{,}500$. Cost $= £1{,}000$. Since
$£1{,}500 > £1{,}000$, it is socially efficient to provide the lamp. However, if each resident
reasons "I can benefit without paying," no one contributes and the lamp is not provided (free-rider
problem). Government intervention (funding through taxation) is needed.

### 9.3 The Samuelson Condition

The efficient provision of a public good requires:

$$\sum_{i=1}^{n} MRS_i = MRT$$

where $MRS_i$ is each individual's marginal rate of substitution between the public good and a
private good, and $MRT$ is the marginal rate of transformation (the marginal cost of the public good
in terms of the private good). This differs from private goods, where efficiency requires
$MRS_i = MRT$ for each individual.

## 10. Demerit Goods and Information Asymmetry

### 10.1 Demerit Goods

Demerit goods are goods whose consumption generates negative externalities or which consumers
over-consume due to imperfect information. Unlike negative externalities (which affect third
parties), demerit goods harm the consumer themselves.

| Feature        | Demerit Good                                    | Good with Negative Externality       |
| -------------- | ----------------------------------------------- | ------------------------------------ |
| Harm           | Falls on the consumer                           | Falls on third parties               |
| Market outcome | Over-consumption (consumers underestimate harm) | Over-production                      |
| Examples       | Alcohol, tobacco, junk food                     | Factory pollution, second-hand smoke |
| Policy         | Taxation, regulation, information provision     | Pigouvian tax, regulation            |

### 10.2 Information Asymmetry in Healthcare

In healthcare markets, patients (buyers) typically have far less information than doctors (sellers).
This leads to:

- **Supplier-induced demand**: doctors may recommend unnecessary treatments
- **Adverse selection**: healthier individuals opt out of insurance, leaving a sicker risk pool
- **Moral hazard**: insured patients over-consume healthcare

Government responses: mandatory qualification standards, clinical guidelines, public provision of
healthcare, regulation of insurance markets.

## 11. Government Intervention: Effectiveness Analysis

### 11.1 Comparing Policy Instruments

| Policy           | Efficiency                      | Certainty of Outcome                | Administrative Cost                       | Equity                    |
| ---------------- | ------------------------------- | ----------------------------------- | ----------------------------------------- | ------------------------- |
| Pigouvian tax    | High (internalises externality) | Uncertain (depends on elasticities) | Low                                       | Can be regressive         |
| Regulation       | Low (inflexible)                | High (directly controls quantity)   | Medium (enforcement needed)               | Depends on design         |
| Tradable permits | High (cost-effective)           | High (cap is fixed)                 | High (monitoring, trading infrastructure) | Permits can be auctioned  |
| Subsidy          | High for positive externalities | Uncertain                           | Medium                                    | Pro-poor if well-targeted |
| Direct provision | Variable                        | High                                | High (bureaucracy)                        | Can ensure access         |

### 11.2 When Government Intervention Fails

Government failure occurs when intervention worsens outcomes. Common examples:

- **Regulatory capture**: regulators become influenced by the industry they regulate (e.g.,
  financial regulators before the 2008 crisis)
- **Information problems**: governments cannot accurately measure MEC to set the optimal tax rate
- **Unintended consequences**: agricultural subsidies encouraging overproduction and environmental
  damage
- **Political economy**: short-term electoral incentives lead to underinvestment in long-term
  projects (e.g., infrastructure, climate mitigation)

## 12. Common Pitfalls

1. **Confusing demerit goods with negative externalities.** A demerit good harms the consumer; a
   negative externality harms third parties. Alcohol is both (health harm to consumer + anti-social
   behaviour), but the concepts are distinct.

2. **Assuming all market failure requires government intervention.** Private solutions exist in some
   cases (Coase theorem, contracts, reputation mechanisms, voluntary agreements).

3. **Ignoring the second-best problem.** If there are multiple market failures, correcting one may
   worsen another. For example, a tax on pollution may reduce output and employment in the taxed
   industry.

4. **Drawing DWL triangles incorrectly.** The DWL triangle is bounded by MSC, MSB (or MPB), and the
   vertical lines at $Q^*$ and $Q_{mkt}$. Make sure you identify the correct quantities.

5. **Confusing public goods with common resources.** Public goods are non-rivalrous and
   non-excludable. Common resources are rivalrous and non-excludable. The free-rider problem applies
   to public goods; the tragedy of the commons applies to common resources.

6. **Treating the optimal tax as easy to implement.** In practice, measuring MEC is extremely
   difficult. The optimal tax rate is uncertain, and setting it too high creates its own deadweight
   loss.

## 13. Extension Problem Set

**Problem 1.** A chemical plant has $MPC = 20 + 2Q$ and produces pollution with $MEC = 10 + Q$.
Demand is $P = 120 - Q$. Calculate the market equilibrium, social optimum, DWL, and the optimal tax
rate.

<details>
<summary>Hint</summary>
$MSC = 30 + 3Q$. Market: $120 - Q = 20 + 2Q \implies Q_{mkt} = 33.3$, $P = 86.7$. Social: $120 - Q = 30 + 3Q \implies Q^* = 22.5$, $P^* = 97.5$. DWL $= \frac{1}{2}(33.3 - 22.5)(MSC(33.3) - MSB(33.3)) = \frac{1}{2}(10.8)(129.9 - 86.7) = 233$. Tax $= MEC(22.5) = 32.5$.
</details>

**Problem 2.** A vaccination programme has $MPB = 200 - 2Q$ and $MPC = 20 + Q$. The marginal
external benefit is $MEB = 40 - Q$ (herd immunity effect). Calculate the market outcome, social
optimum, and the optimal subsidy per vaccination.

<details>
<summary>Hint</summary>
Market: $200 - 2Q = 20 + Q \implies Q_{mkt} = 60$. $MSB = 240 - 3Q$. Social: $240 - 3Q = 20 + Q \implies Q^* = 55$. Wait, $MSB = MPB + MEB = 200 - 2Q + 40 - Q = 240 - 3Q$. $240 - 3Q = 20 + Q \implies 220 = 4Q \implies Q^* = 55$. Subsidy $= MEB(55) = 40 - 55 = -15$. This is negative, which means $MEB$ is already declining. Let me recheck: at $Q_{mkt} = 60$, $MEB = 40 - 60 = -20$, meaning there's actually a negative externality at high vaccination rates. The optimal subsidy should be $MEB(Q^*) = 40 - 55 = -15$. A negative subsidy means a tax, which doesn't make sense. The issue is the linear $MEB$ function. In practice, $MEB$ would be positive over the relevant range.
</details>

**Problem 3.** Explain why road congestion is an example of a negative externality. Using a diagram,
show how a road toll could improve welfare.

<details>
<summary>Hint</summary>
Each additional driver imposes travel time costs on all other drivers (negative externality of consumption). The private marginal benefit of driving (saving time vs alternative transport) exceeds the social marginal benefit (which accounts for the congestion caused). A toll equal to the marginal external congestion cost shifts the effective private cost upward, reducing traffic to the socially optimal level. The DWL triangle is eliminated. Revenue from the toll can fund public transport, further reducing congestion.
</details>

**Problem 4.** "Government provision of healthcare is always superior to market provision." Evaluate
this statement using concepts of market failure and government failure.

<details>
<summary>Hint</summary>
For: healthcare has severe information asymmetry (patients cannot assess quality), positive externalities (healthy population), equity concerns. Market provision leads to adverse selection (only sick buy insurance) and supplier-induced demand. Against: government provision can be inefficient (no profit motive, bureaucracy), long waiting times, rationing by queue rather than price, fiscal burden. Government failure: poor incentives for cost control, political interference, slow innovation. Best approach: mixed model with government funding/insurance and private provision, with regulation to correct information asymmetry.
</details>

**Problem 5.** A lake is used by 10 fishermen. Each fisherman can catch $Q$ fish per day. The total
sustainable catch is $1{,}000$ fish per day. If each fisherman maximises their own catch, they each
catch 150 fish, depleting the stock. Explain this as a tragedy of the commons and propose a
solution.

<details>
<summary>Hint</summary>
Each fisherman receives the full benefit of an additional fish caught (private benefit) but shares the cost of stock depletion with all 10 fishermen (1/10 of the social cost). This creates an incentive to overfish. Total catch $= 10 \times 150 = 1{,}500 \gt{} 1{,}000$ (unsustainable). Solutions: (1) privatisation (assign property rights to the lake), (2) regulation (catch quotas of 100 per fisherman), (3) tradable permits (each fisherman gets 100 permits, can trade), (4) Coase bargaining (fishermen agree to limit catches).
</details>

**Problem 6.** Compare and contrast tradable pollution permits with a Pigouvian tax as methods of
reducing pollution. Under what circumstances is each policy preferable?

<details>
<summary>Hint</summary>
Tax: price certainty (firm knows the cost per unit of pollution), quantity uncertainty (total pollution depends on firm response). Better when: MEC is relatively flat (cost of pollution doesn't change much with quantity), or when government wants to raise revenue. Permits: quantity certainty (cap is fixed), price uncertainty (permit price fluctuates). Better when: there is a critical pollution threshold (e.g., emissions must stay below X tonnes), or when MEC is steep (cost of pollution rises sharply with quantity). Both are market-based and efficient relative to command-and-control regulation.
</details>
