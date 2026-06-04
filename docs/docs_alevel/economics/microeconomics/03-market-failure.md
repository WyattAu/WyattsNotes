---
title: Market Failure
description:
  'A-Level Economics Market Failure notes covering key definitions, core concepts, worked examples,
  and practice questions for efficient revision.'
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
Goods and services.

Formally, market failure occurs when the price mechanism does not equate marginal social benefit
With marginal social cost:

$$P \neq MSC \quad \mathrm{or equivalently} \quad MSB \neq MSC$$

This leads to a **deadweight welfare loss**: the total surplus (consumer + producer + third-party)
Is not maximised.

:::warning Warning Sense. It means the _outcome_ is suboptimal — there exists a reallocation that
could make at least One person better off without making anyone worse off (Pareto improvement). :::

## 2. Types of Market Failure

:::info Info (production/consumption, positive/negative) with diagrammatic welfare loss triangles.
**Edexcel** Emphasises the distinction between private and social costs/benefits using demand-supply
diagrams. **CIE (9708)** covers market failure in the context of allocative efficiency and requires
Consumer/producer surplus, deadweight loss, and cost-benefit analysis. **OCR (A)** links market
Failure directly to government intervention and expects evaluation of whether intervention improves
Outcomes. :::

### 2.1 Externalities

We define an **externality** as a cost or benefit arising from production or consumption that
Affects a third party who is not part of the transaction.

**Negative externality**: the social cost exceeds the private cost.

$$MSC = MPC + MEC$$

Where $MPC$ = marginal private cost, $MEC$ = marginal external cost.

**Positive externality**: the social benefit exceeds the private benefit.

$$MSB = MPB + MEB$$

Where $MPB$ = marginal private benefit, $MEB$ = marginal external benefit.

#### Derivation of the Welfare Loss

Consider a good with a negative production externality (e.g., pollution from a factory). The market
Equilibrium is where demand (MPB) equals supply (MPC):

$$\mathrm{Market equilibrium: } MPB = MPC \implies Q_{mkt}, P_{mkt}$$

The socially optimal outcome is where marginal social benefit equals marginal social cost:

$$\mathrm{Social optimum: } MSB = MSC \implies Q^*, P^*$$

Since $MSC > MPC$ (there is an external cost), the social optimum quantity $Q^*$ is _less than_ the
Market quantity $Q_{mkt}$. The free market **over-produces** the good.

The deadweight welfare loss (DWL) is:

$$\mathrm{DWL} = \frac{1}{2}(Q_{mkt} - Q^*)(MSC(Q_{mkt}) - MSB(Q_{mkt}))$$

This is the area of the triangle between the MSC and MSB curves from $Q^*$ to $Q_{mkt}$.

For positive externalities (e.g., education, vaccinations), the analysis is reversed: $MSB > MPB$ So
$Q^* > Q_{mkt}$. The free market **under-produces** the good, and the DWL triangle lies between
$Q_{mkt}$ and $Q^*$.

<details>
<summary>Example: Pollution from a Chemical Factory</summary>
A chemical factory produces output $Q$ with marginal private cost $MPC = 20 + Q$ and marginal
External cost $MEC = Q$. The marginal private benefit (demand) is $MPB = 80 - Q$.

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
Cannot eat it).

|                    | Rivalrous                                    | Non-rivalrous                                    |
| ------------------ | -------------------------------------------- | ------------------------------------------------ |
| **Excludable**     | Private goods (food, clothing)               | Club goods (cable TV, cinema)                    |
| **Non-excludable** | Common resources (fish stocks, grazing land) | Public goods (national defence, street lighting) |

#### The Free-Rider Problem

**Proposition:** In a free market, public goods will be under-provided or not provided at all.

_Proof._ Suppose a public good costs $C$ to provide and benefits each of $n$ individuals by $B_i$.
The socially optimal provision requires $\sum_{i=1}^{n} B_i \geq C$. However, each individual $i$
Reasons: "If others pay, I can enjoy the good without paying (non-excludability). If others don't
Pay, my contribution is insufficient to provide the good." Therefore, it is individually rational
For each person not to contribute — the **dominant strategy is to free-ride**. By the same logic, no
One contributes, and the good is not provided, even when $\sum B_i \gg C$. $\blacksquare$

**Quasi-public goods**: goods that are largely non-rivalrous but are excludable (e.g., roads,
Education, healthcare). These are often provided by the government because the market would
Under-provide them.

### 2.3 Information Asymmetry

We define **information asymmetry** as a situation in which one party to a transaction has more or
Better information than the other.

#### Adverse Selection (Akerlof's Lemons Model)

Akerlof (1970) analysed the market for used cars. Sellers know the quality of their car; buyers do
Not. There are two types of cars:

- **"Peaches"** (high quality): value to seller $= £8\,000$Value to buyer $= £10\,000$
- **"Lemons"** (low quality): value to seller $= £4\,000$Value to buyer $= £6\,000$

If buyers can distinguish quality, both types trade at mutually beneficial prices. But if buyers
Cannot distinguish, and 50% of cars are peaches and 50% are lemons, the **expected value** to a
Buyer of a random car is:

$$E[V] = 0.5 \times 10\,000 + 0.5 \times 6\,000 = £8\,000$$

Buyers are willing to pay at most £8,000. But at this price, sellers of peaches (£8,000 value to
Seller) will not sell — only lemons are offered. Buyers, anticipating this, revise their offer
Downward to £6,000. Now _only_ lemons trade. **The market for high-quality cars collapses** — this
Is adverse selection: asymmetric information drives high-quality products out of the market.

#### Moral Hazard

We define **moral hazard** as a situation in which one party alters their behaviour after entering
Into an agreement, knowing that the other party bears some of the cost of that behaviour.

<details>
<summary>Example</summary>
After purchasing comprehensive car insurance, a driver may take more risks (driving faster, parking
In unsafe areas) because the insurance company bears the cost of accidents. The driver's behaviour
Changes _because_ they are insured — this is moral hazard.
</details>

### 2.4 Market Power

When a single firm (monopoly) or a small number of firms (oligopoly) have significant market power,
They restrict output and raise prices above the competitive level. This creates a deadweight loss
(analysed in detail in Topic 4).

### 2.5 Factor Immobility

**Occupational immobility**: workers cannot move between jobs due to lack of skills, Training, or
qualifications.

**Geographical immobility**: workers cannot move between regions due to housing costs, family Ties,
or information gaps.

Both types of immobility prevent the market from clearing, leading to structural unemployment and
Inefficient allocation of labour.

### 2.6 Inequality

Markets reward factors of production according to marginal productivity. Those who own scarce,
Highly productive factors (skilled labour, capital, land) receive higher incomes. Without
Redistribution, this can lead to extreme inequality — which many consider a form of market failure
Because:

1. Unequal incomes $\Rightarrow$ unequal access to education, healthcare, opportunities
2. High inequality may reduce aggregate demand (the rich have a lower MPC)
3. Social and political instability

## 3. Measuring Inequality: The Lorenz Curve and Gini Coefficient

### 3.1 Lorenz Curve

The **Lorenz curve** plots the cumulative share of income received by the cumulative share of the
Population, ordered from poorest to richest.

If income were perfectly equally distributed, the Lorenz curve would be the 45° line (line of
Perfect equality). The greater the deviation (bow) of the Lorenz curve from the 45° line, the
Greater the inequality.

### 3.2 Gini Coefficient

We define the **Gini coefficient** as:

$$G = \frac{A}{A + B}$$

Where $A$ is the area between the 45° line and the Lorenz curve, and $B$ is the area under the
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
Tradable permits with evaluation of each. **Edexcel** expects diagrammatic analysis showing the
Effect of Pigouvian taxes and subsidies on equilibrium. **CIE (9708)** covers government
Intervention alongside cost-benefit analysis and requires understanding of when intervention may
Fail. **OCR (A)** emphasises the link between market failure and government failure, requiring
Students to evaluate whether intervention worsens outcomes. :::

### 4.1 Pigouvian Taxation

For a negative externality, the optimal **Pigouvian tax** equals the marginal external cost at the
Socially optimal quantity:

$$t^* = MEC(Q^*)$$

**Proof of optimality.** With a specific tax $t$ per unit, the firm's private cost becomes
$MPC + t$. The firm produces where demand equals private cost plus tax: $MPB = MPC + t$. For this to
Equal the social optimum ($MPB = MSC = MPC + MEC$), we need $t = MEC$ at the optimal quantity.
$\blacksquare$

The tax **internalises the externality**: the firm now faces the full social cost of its production
And reduces output to $Q^*$.

<details>
<summary>Example: Carbon Tax</summary>
A coal power plant produces electricity with $MPC = 10 + Q$ and $MEC = 0.5Q$ (carbon emissions
Damage). Demand: $P = 100 - Q$.

- $MSC = 10 + 1.5Q$
- Social optimum: $100 - Q = 10 + 1.5Q \Rightarrow Q^* = 36$, $P^* = 64$
- Optimal tax: $t^* = MEC(36) = 18$
- With tax, firm faces: $MPC + t = 10 + Q + 18 = 28 + Q$. Equilibrium:
$100 - Q = 28 + Q \Rightarrow Q = 36$ ✓
</details>

### 4.2 Subsidies

For positive externalities, a **Pigouvian subsidy** equal to the marginal external benefit can
Internalise the externality and increase output to the social optimum.

**Limitation**: subsidies require government revenue (from taxation), which may itself create
Distortions.

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
Among themselves. This combines quantity regulation with market efficiency:

- Firms with low abatement costs reduce pollution and sell permits
- Firms with high abatement costs buy permits instead
- The equilibrium permit price equals the marginal abatement cost across all firms

**Advantage**: achieves the environmental target at minimum cost to society.

### 4.5 Direct Provision

The government directly provides public goods (defence, street lighting) and merit goods (education,
Healthcare) that the market would under-provide.

### 4.6 Provision of Information

Government can reduce information asymmetry by:

- Mandatory labelling (nutritional information, energy ratings)
- Product safety standards
- Employment laws (preventing discrimination)
- Financial regulation (requiring disclosure)

## 5. Government Failure

We define **government failure** as the situation in which government intervention to correct a
Market failure worsens the outcome.

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

:::tip Tip Strong answer acknowledges that government intervention is not automatically superior to
the market — on the relative severity of market failure vs government failure in each specific case.
:::

## 6. Critical Evaluation

### Merit and Demerit Goods

**Merit goods**: goods that the government believes consumers _should_ consume more of, because
Consumers underestimate their private benefit (due to imperfect information or myopia). Examples:
Education, healthcare, vaccinations.

**Demerit goods**: goods that the government believes consumers _should_ consume less of. Examples:
Alcohol, tobacco, illegal drugs.

:::warning Warning Judgements about what is "good" or "bad" for people. This is different from
positive externalities (which are objective welfare effects on third parties). Many merit goods also
generate positive Externalities, but the concepts are distinct. :::

### Tragedy of the Commons

For **common resources** (rivalrous but non-excludable), individual rationality leads to collective
Irrationality. Each herder adds animals to the common grazing land because they receive the full
Benefit of the additional animal but share the cost of overgrazing with all herders. The result is
Depletion of the common resource (Hardin, 1968).

## 7. Problem Set

**Problem 1.** A steel factory has marginal private cost $MPC = 15 + 0.5Q$ and generates marginal
External cost $MEC = 0.3Q$. The demand curve is $P = 60 - Q$. Find (a) the market equilibrium, (b)
The socially optimal output, (c) the optimal Pigouvian tax, (d) the deadweight loss of the free
Market outcome.

<details>
<summary>Hint</summary>
(a) Market: $60 - Q = 15 + 0.5Q \Rightarrow Q_{mkt} = 30$$P = 30$. (b) $MSC = 15 + 0.8Q$. Social optimum: $60 - Q = 15 + 0.8Q \Rightarrow Q^* = 25$$P^* = 35$. (c) $t^* = MEC(25) = 7.5$. (d) DWL $= \frac{1}{2}(30 - 25)(MSC(30) - MSB(30)) = \frac{1}{2}(5)(15 + 24 - 30) = \frac{1}{2}(5)(9) = 22.5$.
</details>

**Problem 2.** Vaccination against a disease has marginal private benefit $MPB = 100 - Q$ and
Marginal private cost $MPC = 20 + Q$. The marginal external benefit is $MEB = 0.5Q$ (herd immunity).
Find the market outcome, the social optimum, and the optimal subsidy.

<details>
<summary>Hint</summary>
Market: $100 - Q = 20 + Q \Rightarrow Q_{mkt} = 40$. Social: $MSB = 100 - Q + 0.5Q = 100 - 0.5Q$. $100 - 0.5Q = 20 + Q \Rightarrow Q^* = 160/3 \approx 53.3$. Optimal subsidy $= MEB(Q^*) = 0.5 \times 53.3 = 26.7$.
</details>

**Problem 3.** Using Akerlof's lemons model, explain what happens if the proportion of peaches
Increases to 80%. Calculate the expected value to the buyer and determine whether the market for
Peaches survives.

<details>
<summary>Hint</summary>
Expected value $= 0.8 \times 10\,000 + 0.2 \times 6\,000 = £9\,200$. Sellers of peaches (value £8,000) will sell at £9,200. Sellers of lemons (value £4,000) will also sell. Both types trade — the market survives because the expected value exceeds the sellers' reservation price for peaches.
</details>

**Problem 4.** A country has five income groups with the following shares of total income: poorest
20% receive 5%, second 20% receive 10%, third 20% receive 15%, fourth 20% receive 25%, richest 20%
Receive 45%. Plot the Lorenz curve (conceptually) and calculate the Gini coefficient.

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
Of £50 per tonne, (b) a regulation requiring all firms to reduce emissions by 20%. Evaluate both
Policies using the criteria of efficiency, equity, and practicality.

<details>
<summary>Hint</summary>
Tax (a): efficient (firms with low abatement costs reduce more, high-cost firms pay tax), generates revenue (could be used to reduce other distortionary taxes or fund green investment), but uncertain environmental outcome (can't guarantee emission reduction target), regressive (low-income households spend larger share on energy). Regulation (b): certain environmental outcome (guaranteed 20% reduction), but inefficient (all firms must reduce by same amount regardless of cost), no revenue generated, may be difficult to enforce.
</details>

**Problem 7.** Explain why a pure public good (non-excludable, non-rivalrous) will not be provided
By the free market. In your answer, distinguish between the free-rider problem and the tragedy of
The commons.

<details>
<summary>Hint</summary>
Free-rider problem applies to public goods (non-excludable): individuals can benefit without paying, so no one pays $\Rightarrow$ not provided. Tragedy of the commons applies to common resources (rivalrous, non-excludable): individuals over-use because they don't bear the full cost $\Rightarrow$ resource is depleted. Both involve non-excludability but differ in rivalry.
</details>

**Problem 8.** A tradable permit scheme for pollution allows 100 firms to each emit up to 10 tonnes
Of CO₂. Firm A can reduce emissions at a cost of £5/tonne, while Firm B's abatement cost is
£20/tonne. Show that both firms benefit from trading permits, and find the equilibrium permit price
Range.

<details>
<summary>Hint</summary>
If Firm A reduces by 1 extra tonne (cost £5) and sells the permit to Firm B (saving £20), both benefit. The gain is shared. Trading continues until the permit price equals both firms' marginal abatement costs. The equilibrium price is between £5 and £20. Total cost savings = £15 per permit traded.
</details>

**Problem 9.** "Rent control is an effective way to make housing affordable." Evaluate this
Statement using both theoretical analysis and empirical evidence.

<details>
<summary>Hint</summary>
Rent control sets a price ceiling below equilibrium $\Rightarrow$ excess demand (shortage). Short-run: existing tenants benefit from lower rents. Long-run: landlords reduce supply (convert to condos, neglect maintenance, exit market) $\Rightarrow$ shortage worsens, housing quality deteriorates. Empirical evidence (e.g., New York, Stockholm) generally supports these predictions. Alternatives: housing benefit (subsidy to low-income renters) increases demand but doesn't restrict supply.
</details>

**Problem 10.** Explain the concept of moral hazard in the context of (a) health insurance and (b)
Bank bailouts. How can policymakers mitigate moral hazard in each case?

<details>
<summary>Hint</summary>
(a) Insured individuals may over-use healthcare or take health risks. Mitigation: co-payments, deductibles, no-claims bonuses. (b) Banks knowing they will be bailed out may take excessive risks (too big to fail). Mitigation: require higher capital ratios, impose "living wills" (resolution plans), use "bail-in" mechanisms (bondholders bear losses before taxpayers).
</details>

**Problem 11.** "The existence of market failure justifies government intervention." To what extent
Do you agree with this statement?

<details>
<summary>Hint</summary>
Agree: market failure leads to allocative inefficiency (DWL), government can internalise externalities, provide public goods, reduce information asymmetry. Disagree: government failure may be worse than market failure (regulatory capture, information problems, unintended consequences). The key question is *comparative* analysis: which is worse in this specific case? Some market failures may be better addressed through private solutions (Coase theorem, reputation mechanisms, contracts).
</details>

**Problem 12.** Explain how the Coase theorem applies to externalities. Under what conditions can
Private bargaining resolve externalities without government intervention? Why might the Coase
Theorem fail in practice?

<details>
<summary>Hint</summary>
Coase theorem: if property rights are well-defined, transaction costs are zero, and there are few parties, private bargaining will achieve the efficient outcome regardless of who holds the property rights. Example: a factory and neighbouring residents can negotiate a payment for reduced pollution. Fails when: many affected parties (high transaction costs), measurement problems (hard to verify pollution levels), wealth effects (assignment of rights affects distribution), strategic behaviour (holdout problems).
</details>

## 8. Negative Externalities: Extended Worked Examples

### 8.1 Calculating DWL with Linear Functions

**Example.** A factory producing widgets has $MPC = 10 + Q$ and generates pollution with
$MEC = 0.5Q$. Demand is $P = 80 - Q$. Find the market equilibrium, social optimum, optimal Pigouvian
Tax, and DWL.

**Answer.**

$MSC = 10 + 1.5Q$.

Market equilibrium: $80 - Q = 10 + Q \implies Q_{mkt} = 35$$P_{mkt} = 45$.

Social optimum: $80 - Q = 10 + 1.5Q \implies Q^* = 28$$P^* = 52$.

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

The tax shifts the MPC curve upward by $t^*$So the new MPC + tax curve passes through the social
Optimum.

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
Costs $£1\,000$ to install. Should it be provided?

**Answer.** Total social benefit $= 50 \times 30 = £1\,500$. Cost $= £1\,000$. Since
$£1\,500 > £1\,000$It is socially efficient to provide the lamp. However, if each resident Reasons
"I can benefit without paying," no one contributes and the lamp is not provided (free-rider
Problem). Government intervention (funding through taxation) is needed.

### 9.3 The Samuelson Condition

The efficient provision of a public good requires:

$$\sum_{i=1}^{n} MRS_i = MRT$$

Where $MRS_i$ is each individual's marginal rate of substitution between the public good and a
Private good, and $MRT$ is the marginal rate of transformation (the marginal cost of the public good
In terms of the private good). This differs from private goods, where efficiency requires
$MRS_i = MRT$ for each individual.

## 10. Demerit Goods and Information Asymmetry

### 10.1 Demerit Goods

Demerit goods are goods whose consumption generates negative externalities or which consumers
Over-consume due to imperfect information. Unlike negative externalities (which affect third
Parties), demerit goods harm the consumer themselves.

| Feature        | Demerit Good                                    | Good with Negative Externality       |
| -------------- | ----------------------------------------------- | ------------------------------------ |
| Harm           | Falls on the consumer                           | Falls on third parties               |
| Market outcome | Over-consumption (consumers underestimate harm) | Over-production                      |
| Examples       | Alcohol, tobacco, junk food                     | Factory pollution, second-hand smoke |
| Policy         | Taxation, regulation, information provision     | Pigouvian tax, regulation            |

### 10.2 Information Asymmetry in Healthcare

In healthcare markets, patients (buyers) have far less information than doctors (sellers). This
leads to:

- **Supplier-induced demand**: doctors may recommend unnecessary treatments
- **Adverse selection**: healthier individuals opt out of insurance, leaving a sicker risk pool
- **Moral hazard**: insured patients over-consume healthcare

Government responses: mandatory qualification standards, clinical guidelines, public provision of
Healthcare, regulation of insurance markets.

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
Rate.

<details>
<summary>Hint</summary>
$MSC = 30 + 3Q$. Market: $120 - Q = 20 + 2Q \implies Q_{mkt} = 33.3$$P = 86.7$. Social: $120 - Q = 30 + 3Q \implies Q^* = 22.5$$P^* = 97.5$. DWL $= \frac{1}{2}(33.3 - 22.5)(MSC(33.3) - MSB(33.3)) = \frac{1}{2}(10.8)(129.9 - 86.7) = 233$. Tax $= MEC(22.5) = 32.5$.
</details>

**Problem 2.** A vaccination programme has $MPB = 200 - 2Q$ and $MPC = 20 + Q$. The marginal
External benefit is $MEB = 40 - Q$ (herd immunity effect). Calculate the market outcome, social
Optimum, and the optimal subsidy per vaccination.

<details>
<summary>Hint</summary>
Market: $200 - 2Q = 20 + Q \implies Q_{mkt} = 60$. $MSB = 240 - 3Q$. Social: $240 - 3Q = 20 + Q \implies Q^* = 55$. Wait, $MSB = MPB + MEB = 200 - 2Q + 40 - Q = 240 - 3Q$. $240 - 3Q = 20 + Q \implies 220 = 4Q \implies Q^* = 55$. Subsidy $= MEB(55) = 40 - 55 = -15$. This is negative, which means $MEB$ is already declining. Let me recheck: at $Q_{mkt} = 60$$MEB = 40 - 60 = -20$Meaning there's actually a negative externality at high vaccination rates. The optimal subsidy should be $MEB(Q^*) = 40 - 55 = -15$. A negative subsidy means a tax, which doesn't make sense. The issue is the linear $MEB$ function. In practice, $MEB$ would be positive over the relevant range.
</details>

**Problem 3.** Explain why road congestion is an example of a negative externality. Using a diagram,
Show how a road toll could improve welfare.

<details>
<summary>Hint</summary>
Each additional driver imposes travel time costs on all other drivers (negative externality of consumption). The private marginal benefit of driving (saving time vs alternative transport) exceeds the social marginal benefit (which accounts for the congestion caused). A toll equal to the marginal external congestion cost shifts the effective private cost upward, reducing traffic to the socially optimal level. The DWL triangle is eliminated. Revenue from the toll can fund public transport, further reducing congestion.
</details>

**Problem 4.** "Government provision of healthcare is always superior to market provision." Evaluate
This statement using concepts of market failure and government failure.

<details>
<summary>Hint</summary>
For: healthcare has severe information asymmetry (patients cannot assess quality), positive externalities (healthy population), equity concerns. Market provision leads to adverse selection (only sick buy insurance) and supplier-induced demand. Against: government provision can be inefficient (no profit motive, bureaucracy), long waiting times, rationing by queue rather than price, fiscal burden. Government failure: poor incentives for cost control, political interference, slow innovation. Best approach: mixed model with government funding/insurance and private provision, with regulation to correct information asymmetry.
</details>

**Problem 5.** A lake is used by 10 fishermen. Each fisherman can catch $Q$ fish per day. The total
Sustainable catch is $1\,000$ fish per day. If each fisherman maximises their own catch, they each
Catch 150 fish, depleting the stock. Explain this as a tragedy of the commons and propose a
Solution.

<details>
<summary>Hint</summary>
Each fisherman receives the full benefit of an additional fish caught (private benefit) but shares the cost of stock depletion with all 10 fishermen (1/10 of the social cost). This creates an incentive to overfish. Total catch $= 10 \times 150 = 1\,500 \gt 1\,000$ (unsustainable). Solutions: (1) privatisation (assign property rights to the lake), (2) regulation (catch quotas of 100 per fisherman), (3) tradable permits (each fisherman gets 100 permits, can trade), (4) Coase bargaining (fishermen agree to limit catches).
</details>

**Problem 6.** Compare and contrast tradable pollution permits with a Pigouvian tax as methods of
Reducing pollution. Under what circumstances is each policy preferable?

<details>
<summary>Hint</summary>
Tax: price certainty (firm knows the cost per unit of pollution), quantity uncertainty (total pollution depends on firm response). Better when: MEC is relatively flat (cost of pollution doesn't change much with quantity), or when government wants to raise revenue. Permits: quantity certainty (cap is fixed), price uncertainty (permit price fluctuates). Better when: there is a critical pollution threshold (e.g., emissions must stay below X tonnes), or when MEC is steep (cost of pollution rises sharply with quantity). Both are market-based and efficient relative to command-and-control regulation.
</details>

## 14. Government Failure: Extended Analysis

### 14.1 Government Failure vs Market Failure

The decision to intervene in a market should be based on a comparative analysis: does government
intervention improve or worsen outcomes? The table below summarises the key comparison:

| Dimension                 | Market Failure                                                   | Government Failure                                                          |
| ------------------------- | ---------------------------------------------------------------- | --------------------------------------------------------------------------- |
| **Source**                | Externalities, public goods, information asymmetry, market power | Regulatory capture, information problems, bureaucracy, political incentives |
| **Correction**            | Government intervention (taxes, subsidies, regulation)           | Deregulation, privatisation, improved governance                            |
| **Measurability**         | DWL can be estimated (though imperfectly)                        | Hard to measure the cost of government failure                              |
| **Time horizon**          | Persistent (market forces don't self-correct)                    | May be temporary (political cycles, learning)                               |
| **Distributional impact** | Often harms dispersed third parties                              | Often harms specific groups (taxpayers, consumers of regulated goods)       |

### 14.2 Worked Examples of Government Failure

**Example 1: Agricultural subsidies.** The EU's Common Agricultural Policy (CAP) provided price
supports to farmers, guaranteeing minimum prices for crops. This led to:

- Overproduction: farmers produced more than consumers demanded, creating "butter mountains" and
  "wine lakes."
- Environmental damage: intensive farming to maximise subsidised output caused soil degradation,
  water pollution from fertilisers, and loss of biodiversity.
- Fiscal cost: CAP consumed approximately 40% of the EU budget.
- Regressive distribution: the largest farms received the most subsidy (the top 20% of farms
  received approximately 80% of direct payments).

The subsidy created a DWL triangle where $MSC > MSB$ at the subsidised output level. If the original
market equilibrium was efficient, the subsidy moved output beyond the social optimum, creating a new
DWL.

**Example 2: Rent control.** Rent control sets a maximum price below the market equilibrium for
rental housing.

- Short run: existing tenants benefit from lower rents. Consumer surplus may increase for those who
  secure housing.
- Long run: landlords reduce supply by converting rental properties to owner-occupied units,
  Airbnbs, or commercial use. New construction of rental housing declines. Housing quality
  deteriorates because landlords have less revenue to invest in maintenance.
- Result: shortage of rental housing, reduced quality, and reduced total surplus.

**Calculation.** Suppose demand is $Q_D = 1000 - 5P$ and supply is $Q_S = 200 + 5P$. Equilibrium:
$1000 - 5P = 200 + 5P \Rightarrow P^* = 80$$Q^* = 600$. If rent control sets $P_c = 50$:
$Q_D = 750$$Q_S = 450$. Shortage $= 300$ units. DWL
$= \frac{1}{2}(80 - 50)(600 - 450) = \frac{1}{2}(30)(150) = 2\,250$.

### 14.3 Worked Example: Cost-Benefit Analysis of a Road Project

A government is considering building a new motorway with the following costs and benefits (present
values, in millions):

| Item                                  | Value (GBP m) |
| ------------------------------------- | ------------- |
| Construction cost                     | 500           |
| Land acquisition                      | 100           |
| Annual maintenance (PV over 30 years) | 200           |
| Time savings for commuters (PV)       | 800           |
| Reduced accidents (PV)                | 150           |
| Increased pollution (PV)              | -120          |
| Noise costs (PV)                      | -80           |

**Answer.** Total cost $= 500 + 100 + 200 = £800$M. Total benefit $= 800 + 150 = £950$M. Total
external cost $= 120 + 80 = £200$M.

Net Social Benefit $= 950 - 800 - 200 = -£50$M.

The project has a negative net social benefit when environmental costs are included. Without
environmental costs, NSB $= +£150$M. This illustrates how ignoring externalities in CBA can lead to
government failure -- approving projects that reduce overall welfare.

**Sensitivity analysis.** If the discount rate increases, future benefits (time savings, accident
reduction) are discounted more heavily, making the project even less attractive. If pollution costs
are underestimated (e.g., by using a low social cost of carbon), the project may appear beneficial
when it is not.

## 15. Welfare Loss Calculations: Comprehensive Worked Examples

### 15.1 Negative Externality with Non-Linear MEC

**Example.** A power plant has $MPC = 30 + 0.5Q$ and generates pollution with $MEC = 0.2Q^2$
(increasing marginal damage). Demand is $P = 150 - Q$.

**Step 1: Market equilibrium.**
$150 - Q = 30 + 0.5Q \Rightarrow 120 = 1.5Q \Rightarrow Q_{mkt} = 80$$P_{mkt} = 70$.

**Step 2: Social optimum.** $MSC = 30 + 0.5Q + 0.2Q^2$.
$150 - Q = 30 + 0.5Q + 0.2Q^2 \Rightarrow 0.2Q^2 + 1.5Q - 120 = 0$.

Using the quadratic formula:
$Q^* = \frac◆LB◆-1.5 + \sqrt{2.25 + 96}◆RB◆◆LB◆0.4◆RB◆ = \frac◆LB◆-1.5 + \sqrt{98.25}◆RB◆◆LB◆0.4◆RB◆ = \frac{-1.5 + 9.912}{0.4} = \frac{8.412}{0.4} = 21.03$.

$P^* = 150 - 21.03 = 128.97$.

**Step 3: Optimal tax.** $t^* = MEC(Q^*) = 0.2(21.03)^2 = 0.2 \times 442.26 = 88.45$.

**Step 4: DWL.**
$\mathrm{DWL} = \int_{21.03}^{80} [MSB(Q) - MSC(Q)]\,dQ = \int_{21.03}^{80} [(150 - Q) - (30 + 0.5Q + 0.2Q^2)]\,dQ$
$= \int_{21.03}^{80} [120 - 1.5Q - 0.2Q^2]\,dQ$
$= \left[120Q - 0.75Q^2 - \frac{0.2Q^3}{3}\right]_{21.03}^{80}$
$= [9600 - 4800 - 34133.33] - [2523.6 - 331.7 - 621.2]$ $= -32933.33 - 1570.7 = -31370.63$

The DWL is approximately GBP 31,371 (the absolute value).

### 15.2 Positive Externality: Education

**Example.** Education has demand $MPB = 200 - 2Q$ and supply $MPC = 40 + 2Q$. The marginal external
benefit is constant at $MEB = 30$ (spillover benefits to society from a more educated population).

**Step 1: Market equilibrium.**
$200 - 2Q = 40 + 2Q \Rightarrow 160 = 4Q \Rightarrow Q_{mkt} = 40$$P_{mkt} = 120$.

**Step 2: Social optimum.** $MSB = MPB + MEB = 200 - 2Q + 30 = 230 - 2Q$.
$230 - 2Q = 40 + 2Q \Rightarrow 190 = 4Q \Rightarrow Q^* = 47.5$$P^* = 135$.

The market under-produces by $47.5 - 40 = 7.5$ units.

**Step 3: Optimal subsidy.** $s^* = MEB = 30$ per student.

**Step 4: DWL.** $\mathrm{DWL} = \frac{1}{2}(Q^* - Q_{mkt})(MSB(Q_{mkt}) - MSC(Q_{mkt}))$
$= \frac{1}{2}(7.5)[(230 - 80) - (40 + 80)]$
$= \frac{1}{2}(7.5)(150 - 120) = \frac{1}{2}(7.5)(30) = 112.5$

### 15.3 Common Resources: Tragedy of the Commons with Calculus

**Example.** A lake has total sustainable catch $T = 100L - L^2$ where $L$ is the number of fishing
boats. Each boat earns revenue $p = 50$ per unit of fish.

**Social optimum (joint profit maximisation):** Total profit
$\pi = p \cdot T(L) - cL = 50(100L - L^2) - 200L = 5000L - 50L^2 - 200L = 4800L - 50L^2$.
$\frac◆LB◆d\pi◆RB◆◆LB◆dL◆RB◆ = 4800 - 100L = 0 \Rightarrow L^* = 48$ boats.

**Open access equilibrium (each boat enters until average revenue equals cost):** Average catch per
boat $= \frac{T}{L} = 100 - L$. Entry continues until $p(100 - L) = 200$I.e.,
$50(100 - L) = 200 \Rightarrow 5000 - 50L = 200 \Rightarrow L_{OA} = 96$ boats.

At $L_{OA} = 96$: total catch $= 100(96) - 96^2 = 9600 - 9216 = 384$. Each boat catches $384/96 = 4$
units. Revenue per boat $= 200 = cost$. Profit $= 0$.

At $L^* = 48$: total catch $= 100(48) - 48^2 = 4800 - 2304 = 2496$. Each boat catches $2496/48 = 52$
units. Revenue per boat $= 2600$. Profit per boat $= 2600 - 200 = 2400$. Total profit
$= 48 \times 2400 = 115\,200$.

**DWL of open access:** $\mathrm{DWL} = \pi(48) - \pi(96) = 115\,200 - 0 = £115\,200$.

This illustrates the enormous waste generated by the tragedy of the commons.

## 16. Exam-Style Questions with Full Mark Schemes

**Question 1 (25 marks).** "The most effective way to reduce traffic congestion in cities is through
road pricing rather than investment in public transport." Evaluate this statement.

<details>
<summary>Full Mark Scheme</summary>
**Level 4 (21-25 marks):** Comprehensive evaluation with well-developed chains of reasoning, accurate use of economic terminology, and explicit consideration of context.

**Analysis of road pricing (congestion charge):**

- Correctly identifies congestion as a negative externality of consumption: each additional driver
  imposes travel time costs on all other drivers, but does not bear this cost.
- Road pricing internalises the externality: a charge equal to the marginal external congestion cost
  shifts the private marginal cost upward to the social marginal cost.
- Diagram showing the congestion externality with the tax equal to MEC at the social optimum.
- Mathematical: if the marginal external cost at peak hour is estimated at $£5$ per vehicle-km, a
  charge of this amount reduces traffic to the socially optimal level.
- Real-world evidence: London Congestion Charge (introduced 2003) reduced traffic in the charging
  zone by approximately 30% initially. Stockholm's congestion charge reduced traffic by 20% and was
  approved by public referendum after a trial period.

**Analysis of public transport investment:**

- Increases the availability and quality of substitutes for driving, shifting demand away from
  private road use (the demand curve for car travel shifts left).
- Generates positive externalities: reduced pollution, improved health from walking to stations,
  agglomeration economies.
- Supply-side solution that addresses the underlying infrastructure deficit.
- Limitations: expensive (Crossrail cost approximately GBP 19 billion), long construction time
  (10-20 years), may not reduce congestion if induced demand fills the road space freed up (the
  "fundamental law of road congestion").

**Evaluation points:**

- Road pricing and public transport investment are complements, not substitutes. The most effective
  approach combines both.
- Road pricing generates revenue that can fund public transport (a virtuous cycle).
- Equity concerns: road pricing is regressive (disproportionately affects low-income drivers), while
  public transport investment is progressive if it provides affordable alternatives.
- Technology has reduced implementation costs (automatic number plate recognition, GPS-based
  charging).
- Political feasibility: road pricing is unpopular with voters; public transport investment is more
  politically palatable.
- Conclusion: the optimal policy mix depends on the specific city context (existing public transport
  quality, traffic levels, political constraints).

**Awarding marks:**

- Knowledge and understanding (6 marks): accurate definitions of externalities, Pigouvian taxation,
  merit goods.
- Application (6 marks): relevant real-world examples (London, Stockholm).
- Analysis (6 marks): chains of reasoning showing how each policy affects the market.
- Evaluation (7 marks): balanced judgement considering effectiveness, equity, political feasibility,
and complementarity.
</details>

**Question 2 (25 marks).** "Government intervention to correct market failure always improves
economic welfare." To what extent do you agree?

<details>
<summary>Full Mark Scheme</summary>
**Agree:**
- Theory of Pigouvian taxation: tax equal to MEC achieves the socially optimal quantity, eliminating DWL. Mathematical proof: at $t = MEC(Q^*)$The firm's private cost equals MSC, so $MPB = MSC$ at the new equilibrium.
- Public goods: government provision overcomes the free-rider problem. Without government, public goods would be under-provided or not provided at all.
- Information asymmetry: government regulation (product standards, mandatory labelling) corrects market failures like adverse selection (Akerlof's lemons).
- Merit goods: government provision of education and healthcare corrects under-consumption due to imperfect information.

**Disagree (government failure):**

- Regulatory capture: regulators may act in the interests of the regulated industry rather than the
  public (e.g., financial regulators before 2008).
- Information problems: the government faces the same information constraints as markets. Setting
  the optimal Pigouvian tax requires knowing the MEC function, which is empirically difficult to
  estimate.
- Unintended consequences: rent control reduces housing supply; agricultural subsidies cause
  overproduction; price ceilings create shortages.
- Political constraints: short election cycles incentivise policies with immediate visible benefits
  but long-term costs (e.g., pre-election tax cuts followed by post-election austerity).
- Bureaucratic inefficiency: government agencies lack the profit motive and may be slow and costly.
- Government failure can create DWL larger than the original market failure.

**Conclusion:**

- Whether intervention improves welfare depends on the relative severity of market failure vs
  government failure.
- The second-best theorem: if there are multiple market failures, correcting one may worsen another.
- Some market failures are better addressed through private solutions (Coase theorem, reputation
  mechanisms, contracts).
- The strongest answers recognise that the question requires a case-by-case analysis, not a blanket
  statement.

**Awarding marks:**

- Knowledge (6 marks): definitions of market failure, government failure, DWL.
- Application (6 marks): real-world examples of both successful and unsuccessful intervention.
- Analysis (6 marks): chains of reasoning showing how intervention works and how it can fail.
- Evaluation (7 marks): balanced judgement with clear conclusion supported by evidence.
</details>

**Question 3 (12 marks).** Using the data below, calculate the deadweight loss of the free market
outcome and the optimal Pigouvian tax rate.

A factory producing steel has $MPC = 10 + Q$Faces demand $P = 80 - Q$And generates pollution with
$MEC = 5 + 0.5Q$.

<details>
<summary>Full Mark Scheme</summary>

**Step 1: Market equilibrium (2 marks).** $MPB = MPC$:
$80 - Q = 10 + Q \Rightarrow 2Q = 70 \Rightarrow Q_{mkt} = 35$$P_{mkt} = 45$. (1 mark for quantity,
1 mark for price.)

**Step 2: Social optimum (2 marks).** $MSC = MPC + MEC = 10 + Q + 5 + 0.5Q = 15 + 1.5Q$.
$MSB = MSC$: $80 - Q = 15 + 1.5Q \Rightarrow 2.5Q = 65 \Rightarrow Q^* = 26$$P^* = 54$. (1 mark for
quantity, 1 mark for price.)

**Step 3: Optimal tax (2 marks).** $t^* = MEC(Q^*) = 5 + 0.5(26) = 5 + 13 = 18$. (2 marks.)

**Step 4: DWL calculation (4 marks).** At $Q_{mkt} = 35$:
$MSC = 15 + 1.5(35) = 67.5$$MSB = 80 - 35 = 45$. At $Q^* = 26$: $MSC = MSB = 54$.
$\mathrm{DWL} = \int_{26}^{35} [(80 - Q) - (15 + 1.5Q)]\,dQ = \int_{26}^{35} [65 - 2.5Q]\,dQ$
$= [65Q - 1.25Q^2]_{26}^{35}$ $= (2275 - 1531.25) - (1690 - 845) = 743.75 - 845 = -101.25$

$|\mathrm{DWL}| = 101.25$. (4 marks: 1 for setting up the integral, 1 for correct limits, 1 for
correct integration, 1 for final answer.)

**Step 5: Diagram annotation (2 marks).** Sketch the diagram showing MPB, MPC, MSC, and the DWL
triangle. Label the market and social optimum. (2 marks.)

</details>

## 17. Common Pitfalls (Extended)

1. **Drawing the DWL triangle on the wrong side.** For a negative externality, the market
   over-produces, so the DWL triangle lies between $Q^*$ and $Q_{mkt}$ to the RIGHT of the social
   optimum. For a positive externality, the market under-produces, so the DWL triangle lies to the
   LEFT of the social optimum. Students frequently draw the triangle on the wrong side.

2. **Assuming the optimal tax equals the MEC at the market quantity.** The optimal Pigouvian tax
   equals the MEC at the SOCIAL OPTIMUM quantity ($Q^*$), not at the market quantity ($Q_{mkt}$).
   Since MEC may be increasing, $MEC(Q^*) < MEC(Q_{mkt})$. Setting the tax equal to $MEC(Q_{mkt})$
   would over-correct, creating a new DWL from excessive reduction.

3. **Confusing the Coase theorem with government intervention.** The Coase theorem states that
   private bargaining can achieve efficiency WITHOUT government intervention, provided property
   rights are well-defined and transaction costs are low. It is an argument AGAINST government
   intervention , not for it.

4. **Stating that all market failure requires government intervention.** Some market failures are
   self-correcting (reputation mechanisms address information asymmetry in repeat transactions),
   minor (small externalities may not justify the administrative cost of correction), or better
   addressed through private solutions (contracts, voluntary agreements).

5. **Ignoring the second-best problem.** If there are multiple market failures, correcting one may
   worsen another. For example, a tax on pollution may reduce output and employment in the taxed
   industry. The optimal policy must account for interactions between market failures.

6. **Treating the free-rider problem as the only reason public goods are under-provided.** Even if
   the free-rider problem were solved (e.g., through voluntary contributions or altruism), public
   goods may still be under-provided because individuals undervalue the benefits they receive from
   public goods (they do not account for the benefit to others when making their contribution
   decision -- the "voluntary contribution game" result).

7. **Misapplying the Samuelson condition.** The Samuelson condition states that the efficient
   provision of a public good requires $\sum MRS_i = MRT$NOT $MRS_i = MRT$ for each individual. This
   is because the good is non-rivalrous: one person's consumption does not reduce the amount
   available to others. Confusing these conditions leads to the error of treating public goods as if
   they were private goods.

## 18. Extended Worked Examples

### 18.1 Tragedy of the Commons: Dynamic Model

**Example.** A lake supports fishing. The fish population grows according to
$F_{t+1} = F_t + rF_t(1 - F_t/K) - H_t$ where $F_t$ is the fish stock, $r = 0.5$ is the growth rate,
$K = 1000$ is carrying capacity, and $H_t$ is the harvest.

**Open access (no regulation):** Each fisher earns profit $\pi = pH - cE$ where $p = 2$$c = 1$ per
unit of effort, and $E$ is effort. Harvest $H = qEF$ where $q = 0.01$ (catchability).

The open-access equilibrium occurs where profit per unit of effort is zero:
$pqF = c \Rightarrow 2(0.01)F = 1 \Rightarrow F = 50$.

**Socially optimal stock (maximise sustainable profit):** Maximum sustainable yield at
$F = K/2 = 500$. But profit is maximised at a different stock level.

Sustainable profit $= (pqF - c)E$ where $H = rF(1 - F/K) = qEF \Rightarrow E = r(1 - F/K)/q$.

$\pi = (pqF - c) \times r(1 - F/K)/q = (2F - 100) \times 0.5(1 - F/1000)/0.01 = (2F - 100) \times 50(1 - F/1000)$.

$\pi = (2F - 100)(50 - 0.05F) = 100F - 0.1F^2 - 5000 + 5F = 105F - 0.1F^2 - 5000$.

$\frac◆LB◆d\pi◆RB◆◆LB◆dF◆RB◆ = 105 - 0.2F = 0 \Rightarrow F = 525$.

**Comparison:**

|                   |     Open access      |       Social optimum        |
| ----------------- | :------------------: | :-------------------------: |
| Fish stock        |          50          |             525             |
| Effort            |  High (profit = 0)   | Moderate (profit maximised) |
| Harvest           | Low (depleted stock) |    High (healthy stock)     |
| Profit per fisher |          0           |          Positive           |
| Total profit      |          0           |           Maximum           |

The tragedy of the commons drives the fish stock to a tiny fraction of the optimal level. The
solution is property rights (ITQs -- individual transferable quotas) or government regulation (catch
limits, seasonal closures).

### 18.2 Information Failure: Signalling in Labour Markets

**Example.** A firm cannot distinguish between high-ability workers (productivity = 80) and
low-ability workers (productivity = 40). The firm offers a wage based on the expected productivity
of the applicant pool, which is 50% high-ability.

Expected productivity $= 0.5(80) + 0.5(40) = 60$. The firm offers a wage of 60.

**Signalling with education:** High-ability workers can obtain a degree at cost 15. Low-ability
workers find it harder: their cost is 35.

**Separating equilibrium:** The firm offers wage 80 to degree-holders and 40 to non-degree-holders.

High-ability worker with degree: wage 80, cost 15, net = 65. Without degree: wage 40, net = 40.
Prefers degree (65 > 40).

Low-ability worker with degree: wage 80, cost 35, net = 45. Without degree: wage 40, net = 40.
Prefers degree (45 > 40).

Both types get the degree! This is a pooling equilibrium, not a separating equilibrium. The degree
does NOT signal ability.

**To achieve separation:** The firm could require a more demanding qualification. Suppose a master's
degree costs high-ability workers 25 and low-ability workers 50.

High-ability with master's: $80 - 25 = 55 > 40$. Gets the master's. Low-ability with master's:
$80 - 50 = 30 < 40$. Does not get the master's.

Now the master's degree successfully separates the two types. The firm pays 80 to master's holders
and 40 to non-holders. The signalling is efficient: the firm correctly identifies ability, and
workers invest in education only if the return exceeds the cost.

**Social cost of signalling:** The education (master's degree) cost 25 for high-ability workers but
conveys no productive information (it is purely a signal). This is a deadweight loss from
information asymmetry. If ability were directly observable, no one would invest in the signal, and
total welfare would be higher by 25 per high-ability worker.

### 18.3 Government Intervention: Cost-Benefit Analysis of a Green Tax

**Example.** The government considers a carbon tax of $\pounds 50$ per tonne of $\text{CO}_2$ on
electricity generation. Current emissions: 200 million tonnes/year.

**Demand elasticity for electricity:** $PED = -0.3$. Supply elasticity: $PES = 0.4$. Current
electricity price: $\pounds 100$/MWh.

**Incidence of the tax:** Consumer burden $= \frac{PES}{PED + PES} = \frac{0.4}{0.3 + 0.4} = 0.571$.
Consumers bear 57.1%. Producer burden $= \frac{PED}{PED + PES} = \frac{0.3}{0.7} = 0.429$. Producers
bear 42.9%.

**Price change:** The tax increases the price by approximately
$\frac{PES}{PED + PES} \times \text{tax}$ for consumers. If the tax adds $\pounds 25$/MWh to
production costs: consumer price rises by $0.571 \times 25 = \pounds 14.28$/MWh.

**Emissions reduction:**
$\% \Delta Q = PED \times \% \Delta P_c = -0.3 \times (14.28/100 \times 100) = -0.3 \times 14.28\% = -4.28\%$.

Emissions fall by $4.28\% \times 200 = 8.57$ million tonnes/year.

**Tax revenue:** $50 \times (200 - 8.57) \times 10^6 = \pounds 9.57\text{bn}/\text{year}$.

**Deadweight loss of the tax:**
$DWL = \frac{1}{2} \times \text{tax} \times \Delta Q = \frac{1}{2} \times 50 \times 8.57 \times 10^6 = \pounds 214\text{m}/\text{year}$.

**Benefit of emissions reduction:** Social cost of carbon (SCC) $= \pounds 50$ per tonne (UK
government estimate). Benefit $= 50 \times 8.57 \times 10^6 = \pounds 428.5\text{m}/\text{year}$.

**Net benefit:** $428.5 - 214 = \pounds 214.5\text{m}/\text{year}$ (positive, so the tax is
welfare-improving).

This analysis shows that the carbon tax generates a net social benefit, even after accounting for
the DWL. The revenue can be used to reduce other distortionary taxes (revenue recycling) or fund
green investment, further increasing welfare.

## 19. Extended Worked Examples

### 19.1 Coase Theorem: Numerical Application

**Example.** A factory pollutes a river, causing damage of GBP 200 per unit of output to a
downstream fishery. The factory's production function gives $MB = 500 - Q$ (marginal benefit of
production) and $MC = 100$ (constant marginal cost). Without regulation, the factory produces where
$MB = MC$: $500 - Q = 100 \Rightarrow Q = 400$.

**Total damage to the fishery:** If marginal damage is $MD = 200$ per unit: total damage
$= 200 \times 400 = 80\,000$.

**Coase theorem (property rights assigned to the factory):** The fishery can offer to pay the
factory to reduce output. The fishery's willingness to pay equals the damage avoided: up to GBP 200
per unit of reduction.

The factory will reduce output if the payment exceeds its lost profit. Lost profit per unit at
$Q = 400$: $MB - MC = 100 - 100 = 0$... Wait, at $Q = 400$$MB = 100 = MC$So profit on the marginal
unit is zero.

Let me reconsider. The factory's profit per unit at output $Q$ is
$MB(Q) - MC = (500 - Q) - 100 = 400 - Q$.

At $Q = 400$: profit per unit $= 0$. The factory would accept any positive payment to reduce the
400th unit (since it earns zero profit on it).

At $Q = 300$: profit per unit $= 100$. The fishery would pay up to 200 to avoid this unit. Since
$200 > 100$The factory accepts and reduces to 299.

At $Q = 200$: profit per unit $= 200$. The fishery would pay up to 200. The factory is indifferent
($200 = 200$). Reduction occurs.

At $Q = 199$: profit per unit $= 201$. The fishery would pay 200. The factory refuses ($201 > 200$).

**Coase outcome:** $Q = 200$. This is the socially optimal quantity where $MD = MB - MC$:
$200 = 400 - Q \Rightarrow Q = 200$.

**If property rights are assigned to the fishery:** The factory must compensate the fishery for each
unit of pollution damage (200 per unit). The factory's net marginal benefit is
$MB - MC - MD = (500 - Q) - 100 - 200 = 200 - Q$. Setting this to zero: $Q = 200$. Same outcome.

**The Coase theorem predicts the SAME efficient outcome regardless of who holds the property
rights.** The only difference is the DISTRIBUTION of wealth:

- Factory has rights: fishery pays the factory $200 \times 200 = 40\,000$.
- Fishery has rights: factory pays the fishery $200 \times 200 = 40\,000$.

**Why the Coase theorem may fail in practice:**

- Transaction costs: if there are many affected parties (thousands of fishermen, hundreds of
  factories), bargaining is prohibitively expensive.
- Free-rider problem: each fisherman hopes others will pay for the pollution reduction.
- Information asymmetry: the factory may not know the true damage, and the fishery may not know the
  factory's true costs.
- Income effects: the payment may change the parties' behaviour (if the fishery is very poor, it
  cannot afford to pay).
- Measurement problems: pollution damage is difficult to quantify precisely.

### 19.2 Merit Goods: Education as a Positive Externality

**Example.** An individual's demand for education is $P = 50 - 0.5Q$ where $Q$ is years of education
and $P$ is the willingness to pay per year (in thousands of pounds). The private MC of education is
$MC = 20 + Q$.

**Private market equilibrium:** $50 - 0.5Q = 20 + Q \Rightarrow 30 = 1.5Q \Rightarrow Q = 20$ years.
$P = 50 - 10 = 40$. This is more years of education than typical (20 years would mean education to
age 35). Let me rescale.

Let $Q$ be units of education (courses, modules). $P = 50 - 0.5Q$. $MC = 20 + Q$.

$50 - 0.5Q = 20 + Q \Rightarrow Q = 20$$P = 40$.

**Social optimum:** The marginal social benefit of education exceeds the private marginal benefit
due to positive externalities (reduced crime, higher civic participation, better health outcomes,
technology spillovers). Let $MEB = 10$ (constant).

$MSB = MPB + MEB = 60 - 0.5Q$. $MSC = 20 + Q$.
$60 - 0.5Q = 20 + Q \Rightarrow Q = 26.67$$P_{MSB} = 60 - 13.33 = 46.67$.

The socially optimal quantity is 26.67 (33.3% more than the private market provides).

**Subsidy to achieve the social optimum:** The government subsidises education by GBP 10 per unit
(equal to the MEB). The effective demand becomes $P_d + 10 = 50 - 0.5Q + 10 = 60 - 0.5Q = MSB$. The
market equilibrium shifts to $Q = 26.67$.

Government cost $= 10 \times 26.67 = 266.7$ (in thousands).

**Welfare analysis:** CS before: $\frac{1}{2}(100 - 40)(20) = 600$. (Demand choke:
$Q = 0 \Rightarrow P = 100$. Wait, $P = 50 - 0.5Q$. At $Q = 0$: $P = 50$.) CS before:
$\frac{1}{2}(50 - 40)(20) = 100$. CS after subsidy: $P_c = 40 - 10 = 30$ (consumer pays 30,
government pays 10). $Q = 26.67$. CS after: $\frac{1}{2}(50 - 30)(26.67) = 266.7$.

PS before: $\frac{1}{2}(40 - 20)(20) = 200$. PS after: producers receive 40.
$PS = \frac{1}{2}(40 - 20)(26.67) - \frac{1}{2}(20)(6.67) = 266.7 - 66.7 = 200$. Wait, let me
recalculate.

$PS = \int_0^{26.67} (40 - (20 + Q)) \, dQ = \int_0^{26.67} (20 - Q) \, dQ = [20Q - Q^2/2]_0^{26.67} = 533.4 - 355.6 = 177.8$.

Hmm, PS has fallen. This is because the subsidy has driven the producer price DOWN (consumers pay
30, producers receive 40, government pays 10). The producer price is the same as before (40), so PS
should be higher because more is produced.

Actually, with the subsidy, producers receive $P_c + s = 30 + 10 = 40$. The producer price is 40
(same as before). PS $= \int_0^{26.67} (40 - 20 - Q) \, dQ = 266.7$. PS has risen from 200 to 266.7.

External benefit before: $10 \times 20 = 200$. External benefit after: $10 \times 26.67 = 266.7$.
Government cost: $10 \times 26.67 = 266.7$.

Total welfare before: $100 + 200 + 200 = 500$. Total welfare after:
$266.7 + 266.7 + 266.7 - 266.7 = 533.4$. Welfare gain: $533.4 - 500 = 33.4$. This is the DWL of the
under-provision that has been eliminated.

**Why the government subsidises education:**

1. Efficiency: the subsidy corrects the positive externality, moving output to the social optimum.
2. Equity: education is a merit good that low-income households under-consume due to credit
   constraints. Subsidies (or free provision) improve access.
3. Dynamic efficiency: a more educated workforce increases productivity and innovation, raising
   long-run growth.
4. Social cohesion: education reduces crime (each additional year of schooling reduces crime by
   approximately 5-10%), improves health outcomes, and strengthens democratic institutions.

**The UK policy context:** Higher education in England is funded through a student loan system
(post-1998). Students borrow up to GBP 9,250/year in tuition fees plus living costs, and repay 9% of
income above GBP 27,295. This system effectively privatises the benefit of education (students
capture the earnings premium) while socialising the cost of defaults. The system has expanded access
(university participation rose from 15% in 1990 to 50% in 2017) but has created concerns about
graduate debt (average debt on graduation is approximately GBP 45,000) and the value-for-money of
some degrees. The Augar Review (2019) recommended a lower fee cap and more targeted funding for
high-value courses.

**Non-market solutions to information failure:** In cases where government intervention is
impractical, non-market institutions can address information failure:

- Reputation systems: online reviews (TripAdvisor, Amazon) reduce asymmetric information between
  buyers and sellers.
- Warranties and guarantees: firms signal product quality by offering free repairs and money-back
  guarantees.
- Professional regulation: doctors, lawyers, and accountants are licensed by professional bodies
  (GMC, SRA, ICAEW), which enforce minimum quality standards.
- Franchising: brand reputation reduces information asymmetry (consumers trust McDonald's regardless
  of the local franchisee because the brand enforces standards).

## Summary

This topic covers the economic theories and principles related to market failure, including key
models, evidence, and policy implications.

**Key concepts include:**

- economic models and theories
- data analysis and interpretation
- policy evaluation
- real-world applications
- critical evaluation of economic arguments

The ability to apply these theories to real-world data and evaluate policy decisions is central to
success in this subject.
