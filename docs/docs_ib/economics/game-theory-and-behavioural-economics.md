---
title: Game Theory and Behavioural Economics
description: "IB Economics — game theory fundamentals and behavioural economics concepts including heuristics, biases, and nudge theory."
slug: game-theory-and-behavioural-economics
---

## Game Theory Fundamentals

### What Is Game Theory?

Game theory is the study of strategic decision-making among interdependent agents. Each agent's
payoff depends not only on their own actions but also on the actions of others. The framework was
formalised by John von Neumann and Oskar Morgenstern (1944) and extended by John Nash.

A **game** consists of:

- **Players**: the decision-makers
- **Strategies**: the set of actions available to each player
- **Payoffs**: the outcomes (benefits or costs) each player receives for every combination of
  strategies

### Types of Games

- **Simultaneous games**: players choose strategies simultaneously without knowing the other's
  choice (e.g., prisoner's dilemma). Represented by a **payoff matrix**.
- **Sequential games**: players make decisions in turn, observing previous moves (e.g., chess,
  Stackelberg duopoly). Represented by a **game tree** (extensive form).
- **Zero-sum games**: one player's gain is exactly the other's loss (e.g., poker). Total payoffs sum
  to zero.
- **Non-zero-sum games**: the total payoffs can be positive or negative, allowing for mutual benefit
  or mutual harm (e.g., prisoner's dilemma).
- **Cooperative games**: players can form binding agreements and coalitions.
- **Non-cooperative games**: players make decisions independently; binding agreements are not
  enforceable.

### Dominant Strategies

A **dominant strategy** is a strategy that yields a higher payoff for a player regardless of what
the other players do. If every player has a dominant strategy, the game has a **dominant strategy
equilibrium**.

A **strictly dominant strategy** is always strictly better than any other strategy. A **weakly
dominant strategy** is at least as good as any other strategy, and strictly better against at least
one opponent strategy.

### Nash Equilibrium

A **Nash equilibrium** is a set of strategies where no player can improve their payoff by
unilaterally changing their strategy, given the strategies chosen by all other players. Formally,
for each player $i$ with strategy $s_i^*$:

$$u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \forall \; s_i$$

Where $u_i$ is player $i$'s payoff function and $s_{-i}^*$ represents the strategies of all other
players.

Key properties:

- A Nash equilibrium is a self-enforcing prediction: no player has an incentive to deviate
- A game may have zero, one, or multiple Nash equilibria
- Every game with a finite number of strategies has at least one Nash equilibrium in mixed
  strategies
- A dominant strategy equilibrium is always a Nash equilibrium, but not vice versa

### Mixed Strategies

A **pure strategy** is a deterministic choice of one action. A **mixed strategy** assigns a
probability distribution over the available pure strategies.

In a mixed strategy Nash equilibrium, each player randomises over their strategies such that no
player can gain by changing their probabilities. The equilibrium is reached when each player is
**indifferent** between their pure strategies given the other player's mixed strategy.

## The Prisoner's Dilemma

### The Classic Form

Two suspects are arrested and interrogated separately. Each can either **Cooperate** (stay silent)
or **Defect** (betray the other). The payoff matrix (years in prison, so lower is better):

|                  | B Cooperates | B Defects   |
| ---------------- | ------------ | ----------- |
| **A Cooperates** | A: 1, B: 1   | A: 10, B: 0 |
| **A Defects**    | A: 0, B: 10  | A: 5, B: 5  |

**Analysis:**

- For A: if B cooperates, A should defect ($0 < 1$). If B defects, A should defect ($5 < 10$).
  Defect is A's dominant strategy.
- For B: by symmetric reasoning, defect is B's dominant strategy.
- The Nash equilibrium is (Defect, Defect) with payoffs $(5, 5)$.
- The socially optimal outcome is (Cooperate, Cooperate) with payoffs $(1, 1)$, which is Pareto
  superior.

### The Core Insight

The prisoner's dilemma demonstrates that individually rational behaviour can lead to collectively
suboptimal outcomes. The Nash equilibrium is not Pareto efficient — both players would be better off
cooperating, but neither has the incentive to do so unilaterally.

### Applications in Economics

- **Oligopoly pricing**: firms face a dilemma between maintaining high prices (cooperating) and
  undercutting competitors (defecting). Cartels are inherently unstable because each member has an
  incentive to cheat.
- **Arms races**: nations invest in military build-up even when mutual disarmament would leave both
  better off.
- **Tragedy of the commons**: individuals overuse a shared resource even though collective restraint
  would benefit all.
- **Free riding**: individuals avoid contributing to a public good while benefiting from others'
  contributions.

### Repeated Games and the Evolution of Cooperation

In a **one-shot** prisoner's dilemma, defection is the only rational strategy. In an **infinitely
repeated** (or indefinitely repeated) game, cooperation can be sustained as a Nash equilibrium
through strategies such as:

- **Grim trigger**: cooperate until the other player defects, then defect forever. This makes the
  threat of permanent punishment credible.
- **Tit-for-tat**: begin by cooperating, then mirror the opponent's previous move. Simple,
  retaliatory, and forgiving.
- **Pavlov (win-stay, lose-shift)**: repeat the last action if it yielded a high payoff; switch if
  it yielded a low payoff.

The **Folk Theorem** states that in infinitely repeated games, any feasible and individually
rational payoff can be sustained as a Nash equilibrium, provided the discount factor (the weight
placed on future payoffs) is sufficiently high.

In **finitely repeated** games with a known endpoint, backward induction leads to defection in every
round (the unraveling argument). However, if the number of rounds is uncertain or players use
bounded rationality, cooperation may still emerge.

## Other Key Games

### Battle of the Sexes

Two players prefer to coordinate on the same activity but disagree on which activity. There are two
pure strategy Nash equilibria and one mixed strategy equilibrium. This game illustrates coordination
problems.

|                 | B: Opera   | B: Football |
| --------------- | ---------- | ----------- |
| **A: Opera**    | A: 3, B: 2 | A: 0, B: 0  |
| **A: Football** | A: 0, B: 0 | A: 2, B: 3  |

### Chicken (Hawk-Dove)

Two drivers speed toward each other. The player who swerves first is the "chicken." Both swerving is
a compromise; neither swerving is catastrophic. This game models brinkmanship in international
relations and competitive business strategies.

### Stag Hunt

Two hunters can cooperate to catch a stag (high payoff for both) or hunt hare individually (moderate
payoff, certain). The stag hunt has two Nash equilibria: both cooperate (Pareto efficient) and both
defect (risk-dominant). It illustrates the tension between safety and social cooperation.

## Behavioural Economics

### Departures from Rationality

Traditional (neoclassical) economics assumes that agents are **Homo economicus**: fully rational,
self-interested utility maximisers with perfect information, consistent preferences, and unlimited
cognitive capacity. Behavioural economics relaxes these assumptions, drawing on psychology and
empirical evidence to model how people actually make decisions.

### Bounded Rationality

Herbert Simon (1955) proposed that individuals are **boundedly rational**: they make satisfactory
rather than optimal decisions because of limited information, limited cognitive processing capacity,
and limited time. People use **heuristics** — mental shortcuts — to simplify complex decisions.

### Heuristics and Biases

**Availability heuristic**: people estimate the probability of an event based on how easily examples
come to mind. Vivid, recent, or emotionally charged events are overestimated (e.g., overestimating
the probability of plane crashes after media coverage).

**Representativeness heuristic**: people judge the probability of an event based on how similar it
is to a stereotype or prototype, ignoring base rates. For example, assuming a quiet, introverted
person is more likely to be a librarian than a farmer, despite there being far more farmers than
librarians.

**Anchoring**: initial information serves as an anchor that influences subsequent estimates, even
when the anchor is irrelevant. In negotiations, the first offer often anchors the final agreement.

**Framing**: the way information is presented affects decisions. People respond differently to "a
$90\%$ survival rate" vs. "a $10\%$ mortality rate" despite being logically identical. Loss aversion
means that framing an outcome as a loss has a stronger effect than framing the equivalent outcome as
a gain.

**Overconfidence bias**: individuals systematically overestimate their own knowledge, ability, and
the precision of their predictions. This affects investment decisions, entrepreneurial activity, and
risk assessment.

**Confirmation bias**: people seek, interpret, and remember information that confirms their existing
beliefs while ignoring or discounting contradictory evidence.

**Sunk cost fallacy**: individuals continue investing in a losing course of action because of
resources already committed, rather than evaluating future costs and benefits.

### Prospect Theory

Developed by Daniel Kahneman and Amos Tversky (1979), prospect theory describes how people evaluate
potential losses and gains:

1. **Reference dependence**: people evaluate outcomes relative to a reference point (usually the
   status quo), not in absolute terms
2. **Loss aversion**: losses loom larger than equivalent gains. The psychological pain of losing
   `USD 100` is approximately twice the pleasure of gaining `USD 100`
3. **Diminishing sensitivity**: the marginal impact of gains and losses decreases with distance from
   the reference point
4. **Probability weighting**: people overweight small probabilities and underweight
   moderate-to-large probabilities (explaining both gambling behaviour and excessive insurance
   purchases)

The **value function** in prospect theory is:

- Concave for gains (risk-averse in the domain of gains)
- Convex for losses (risk-seeking in the domain of losses)
- Steeper for losses than for gains (loss aversion)

### Intertemporal Choice and Present Bias

Traditional models assume exponential discounting:

$$U = \sum_{t=0}^{T} \delta^t \cdot u(c_t)$$

Where $\delta$ is a constant discount factor.

Behavioural evidence supports **hyperbolic discounting**, where the discount rate declines over
time:

$$U = \sum_{t=0}^{T} \frac{1}{(1 + k \cdot t)^b} \cdot u(c_t)$$

Where $k > 0$ governs impatience and $b > 0$ governs the degree of hyperbolic discounting.

This produces **present bias**: individuals disproportionately prefer immediate gratification over
future rewards, even when they know the long-term consequences are worse. This explains
procrastination, undersaving for retirement, and difficulty maintaining diets.

### Social Preferences

- **Fairness and reciprocity**: people care about fairness and are willing to sacrifice personal
  gain to punish unfair behaviour (as demonstrated in the ultimatum game, where responders
  frequently reject low offers)
- **Inequality aversion**: people experience disutility from unequal outcomes, even when they
  benefit from the inequality
- **Altruism**: individuals derive utility from improving the welfare of others, not only from their
  own consumption

### Nudge Theory

Richard Thaler and Cass Sunstein (2008) proposed that choice architecture — the way options are
presented — can influence decisions without restricting freedom of choice. A **nudge** is any aspect
of that architecture that alters behaviour predictably without forbidding options or significantly
changing economic incentives.

**Examples of nudges:**

- **Default options**: making organ donation or pension enrolment the default significantly
  increases participation rates
- **Social norms**: informing households that their energy consumption exceeds that of their
  neighbours reduces energy use
- **Simplification**: reducing the complexity of tax forms or benefits applications increases
  take-up
- **Framing**: presenting food as "90% fat-free" rather than "contains 10% fat" increases sales
- **Commitment devices**: allowing individuals to pre-commit to future behaviour (e.g., automatic
  transfers to savings accounts)

**Libertarian paternalism**: the philosophical foundation of nudge theory. It holds that it is both
legitimate and desirable for institutions to influence choices in ways that make people better off,
while preserving their freedom to choose otherwise.

### Criticisms of Behavioural Economics

- **Lack of a unified theory**: behavioural economics identifies deviations from rationality but
  does not yet provide a comprehensive, parsimonious alternative model
- **Context dependence**: heuristics and biases are highly context-dependent, making predictions
  difficult
- **Manipulation concerns**: nudges can be used to influence behaviour in ways that serve
  institutional interests rather than individual welfare
- **Paternalism objection**: critics argue that nudges are manipulative and undermine individual
  autonomy, even when they preserve formal freedom of choice
- **Limited external validity**: many behavioural findings are based on laboratory experiments with
  Western, educated, industrialised, rich, and democratic (WEIRD) populations

## Common Pitfalls

- Confusing Nash equilibrium with the socially optimal outcome. The prisoner's dilemma shows that
  the Nash equilibrium can be Pareto inferior to cooperation.
- Assuming that all games have a unique Nash equilibrium. Many games have multiple equilibria, and
  predicting which one will be played requires additional reasoning (focal points, evolutionary
  stability, or social norms).
- Treating prospect theory as a minor correction to expected utility theory. Loss aversion and
  reference dependence are fundamental departures that change predictions qualitatively, not just
  quantitatively.
- Assuming that bounded rationality implies irrationality. Bounded rationality is often a rational
  response to constraints — satisficing can be optimal when information is costly to acquire.
- Confounding nudges with mandates. Nudges preserve freedom of choice; regulations and bans do not.

## Practice Problems

<details>
<summary>Problem 1: Finding Nash Equilibria</summary>

Two firms, Alpha and Beta, are deciding whether to advertise (Ad) or not advertise (No Ad). The
payoff matrix shows profits in millions:

|                  | Beta: Ad | Beta: No Ad |
| ---------------- | -------- | ----------- |
| **Alpha: Ad**    | (4, 4)   | (8, 2)      |
| **Alpha: No Ad** | (2, 8)   | (6, 6)      |

Find all Nash equilibria.

Check each cell:

1. (Ad, Ad): Alpha gets 4. If Alpha switches to No Ad, Alpha gets 2 (worse). Beta gets 4. If Beta
   switches to No Ad, Beta gets 2 (worse). Neither can improve. **Nash equilibrium.**

2. (Ad, No Ad): Alpha gets 8 (best response to No Ad). Beta gets 2. If Beta switches to Ad, Beta
   gets 4 (better). Not an equilibrium.

3. (No Ad, Ad): Alpha gets 2. If Alpha switches to Ad, Alpha gets 4 (better). Not an equilibrium.

4. (No Ad, No Ad): Alpha gets 6. If Alpha switches to Ad, Alpha gets 8 (better). Not an equilibrium.

The only Nash equilibrium is (Ad, Ad) with payoffs $(4, 4)$. This is a prisoner's dilemma: both
would be better off at (No Ad, No Ad) with $(6, 6)$, but neither has the incentive to unilaterally
stop advertising.

</details>

<details>
<summary>Problem 2: Mixed Strategy Nash Equilibrium</summary>

In a zero-sum game, Player 1 can play Up or Down; Player 2 can play Left or Right. The payoff matrix
shows Player 1's payoff (Player 2's payoff is the negative):

|          | Left | Right |
| -------- | ---- | ----- |
| **Up**   | 3    | -1    |
| **Down** | -2   | 4     |

Find the mixed strategy Nash equilibrium.

Let Player 1 play Up with probability $p$ and Down with probability $1 - p$. For Player 2 to be
indifferent between Left and Right:

$$\mathrm{Expected payoff (Left)} = p(-3) + (1-p)(2)$$
$$\mathrm{Expected payoff (Right)} = p(1) + (1-p)(-4)$$

Setting them equal:

$$-3p + 2 - 2p = p - 4 + 4p$$ $$2 - 5p = 5p - 4$$ $$6 = 10p$$ $$p = 0.6$$

Let Player 2 play Left with probability $q$ and Right with probability $1 - q$. For Player 1 to be
indifferent:

$$3q - 1(1-q) = -2q + 4(1-q)$$ $$3q - 1 + q = -2q + 4 - 4q$$ $$4q - 1 = -6q + 4$$ $$10q = 5$$
$$q = 0.5$$

The mixed strategy Nash equilibrium is: Player 1 plays Up with probability $0.6$ and Down with
probability $0.4$; Player 2 plays Left with probability $0.5$ and Right with probability $0.5$.

</details>

<details>
<summary>Problem 3: Behavioural Biases in Decision-Making</summary>

A consumer is choosing between two investment products:

- Product A: "has a 70% chance of gaining value"
- Product B: "has a 30% chance of losing value"

Explain which product the consumer is likely to choose and identify the bias at work.

The consumer is likely to choose Product A, even though the two descriptions are logically
equivalent (a 70% chance of gaining is the same as a 30% chance of losing).

This is an example of **framing bias**: the way information is presented (framed as a gain vs.
framed as a loss) affects decisions. Prospect theory predicts that people are risk-averse in the
domain of gains and risk-seeking in the domain of losses. The positive frame ("gaining value")
triggers a more favourable evaluation than the negative frame ("losing value"), even though the
underlying probabilities are identical.

Loss aversion also plays a role: the word "losing" activates a stronger emotional response than
"gaining," making Product B seem less attractive despite its mathematical equivalence.

</details>

<details>
<summary>Problem 4: Present Bias and Saving</summary>

A person is offered a choice: `USD 100` today or `USD 120` in one month. Most people choose `USD 100`
today. However, when offered `USD 100` in 12 months or `USD 120` in 13 months, most people choose
`USD 120` in 13 months. Explain this inconsistency using behavioural economics.

This pattern is explained by **present bias** (or hyperbolic discounting). When the reward is
immediate, the person heavily discounts the future one-month delay, preferring `USD 100` now. But when
both options are in the future, the one-month difference feels much less significant, and the person
is more patient.

With exponential discounting at a constant rate, the preference should be consistent: if you prefer
`USD 100` today over `USD 120` in a month, you should also prefer `USD 100` in 12 months over `USD 120` in
13 months (since the trade-off is identical). The inconsistency reveals that the discount rate is
not constant — it is much higher for immediate trade-offs than for future ones.

This has important implications for savings behaviour, health decisions, and commitment devices.

</details>

<details>
<summary>Problem 5: Nudge Theory Application</summary>

A government wants to increase organ donation rates. Currently, citizens must actively opt in to
become donors, and the participation rate is $25\%$. Design a nudge-based intervention and evaluate
its potential effectiveness and ethical considerations.

**Intervention: Change the default from opt-in to opt-out.** Under an opt-out (presumed consent)
system, all citizens are automatically registered as organ donors unless they actively withdraw.

**Expected effectiveness:** Evidence from countries that have implemented opt-out systems (e.g.,
Spain, Austria, Wales) shows dramatic increases in donation rates, often exceeding $90\%$. This is
because of **status quo bias** and **inertia**: people tend to stick with the default option rather
than actively changing it.

**Ethical considerations:**

- _Libertarian paternalism_: the nudge preserves freedom of choice — anyone can opt out. The default
  is changed, not forced.
- _Autonomy_: critics argue that presumed consent may not reflect genuine consent, particularly if
  people are unaware of the default or face barriers to opting out.
- _Transparency_: the system must be well-publicised and easy to opt out of to maintain legitimacy.
- _Cultural sensitivity_: attitudes toward organ donation vary across cultures and religious groups;
  a one-size-fits-all default may not be appropriate.
- _Manipulation vs. guidance_: the line between a helpful nudge and manipulation depends on whether
the default serves the individual's likely preferences.
</details>

## Advanced Game Theory Applications (HL Extension)

### Sequential Games and Backward Induction

In sequential games, players move in turn, observing previous moves. The solution concept is
**subgame perfect Nash equilibrium (SPNE)**, found by **backward induction**: starting from the
last decision node and working backwards to determine optimal strategies at each stage.

**Example -- entry deterrence:**

An incumbent monopolist faces a potential entrant. The entrant decides whether to enter. If entry
occurs, the incumbent decides whether to accommodate or fight (engage in a price war).

**Payoffs (entrant, incumbent):**

| Path | Entrant | Incumbent |
|------|---------|-----------|
| Stay out | (0, 10) | -- |
| Enter, Accommodate | (3, 5) | -- |
| Enter, Fight | (-2, -1) | -- |

**Backward induction:**

1. If the entrant enters, the incumbent chooses between Accommodate (payoff 5) and Fight (payoff
   -1). The incumbent accommodates.
2. Knowing the incumbent will accommodate, the entrant compares Enter (payoff 3) with Stay out
   (payoff 0). The entrant enters.
3. SPNE: (Enter, Accommodate) with payoffs (3, 5).

**Credible vs. incredible threats:** the incumbent's threat to fight is not credible because
fighting yields -1, which is worse than accommodating (5). A threat is credible only if it is
in the threatener's interest to carry it out when the time comes.

### Repeated Games and Collusion

In a repeated setting, firms can sustain cooperation (collusion) through the threat of future
punishment.

**Grim trigger strategy:** cooperate as long as all firms have cooperated in the past. If any
firm defects, switch to the Nash equilibrium (competitive) outcome forever.

For collusion to be sustainable, the present value of cooperation must exceed the one-time gain
from defection:

$$\frac{\pi_{\text{collusion}}}{1 - \delta} \geq \pi_{\text{defection}} + \frac{\delta \cdot \pi_{\text{Nash}}}{1 - \delta}$$

Where $\delta$ is the discount factor ($0 < \delta < 1$). Rearranging:

$$\delta \geq \frac{\pi_{\text{defection}} - \pi_{\text{collusion}}}{\pi_{\text{defection}} - \pi_{\text{Nash}}}$$

**Numerical example:** In the pricing game from earlier, $\pi_{\text{collusion}} = 8$ (High, High),
$\pi_{\text{defection}} = 12$ (Low while other plays High), $\pi_{\text{Nash}} = 5$ (Low, Low).

$$\delta \geq \frac{12 - 8}{12 - 5} = \frac{4}{7} = 0.571$$

If $\delta \geq 0.571$ (i.e., firms value future profits at least 57.1% as much as current
profits), collusion is sustainable. This requires:
- Frequent interactions (short time between rounds)
- Low discount rate (low inflation, low risk of bankruptcy)
- High probability that the game continues

### Cournot and Bertrand as Games

**Cournot as a game:**

- Players: firms
- Strategies: quantities $q_i \geq 0$
- Payoffs: $\pi_i = P(Q) \cdot q_i - C(q_i)$
- Nash equilibrium: each firm's quantity is a best response to the other's quantity

**Bertrand as a game:**

- Players: firms
- Strategies: prices $p_i \geq 0$
- Payoffs: $\pi_i = (p_i - c) \cdot D_i(p_i, p_j)$
- Nash equilibrium: $p_1 = p_2 = MC$ (for homogeneous goods)

The dramatic difference between Cournot and Bertrand outcomes (oligopoly power vs. perfect
competition) highlights the importance of the strategic variable (quantity vs. price) and the
assumption about product differentiation.

### Stackelberg as a Sequential Game

The Stackelberg model is a sequential game where the leader moves first:

1. The leader chooses quantity $q_1$
2. The follower observes $q_1$ and chooses $q_2$
3. Payoffs are determined

Backward induction: the follower plays the Cournot best response to $q_1$. The leader
anticipates this and chooses $q_1$ to maximise its profit, taking the follower's reaction into
account. The leader earns higher profit than in the Cournot equilibrium (first-mover advantage).

### Common Pitfalls in Advanced Game Theory

- Confusing Nash equilibrium with SPNE. Every SPNE is a Nash equilibrium, but not every Nash
  equilibrium is subgame perfect. SPNE requires optimal play in every subgame, not just the
  game as a whole.
- Assuming that repeated interaction always leads to cooperation. If the discount factor is
  low (firms are impatient), cooperation may not be sustainable even with infinitely repeated
  interaction.
- Confusing credible and incredible threats. A threat is credible only if the threatener would
  actually carry it out when called upon.
- Applying the grim trigger to finitely repeated games. Backward induction unravels cooperation
  in the last period, making the grim trigger ineffective with a known endpoint.

## Advanced Behavioural Economics (HL Extension)

### Mental Accounting

Thaler (1985) observed that people categorise money into different "mental accounts" and treat
money differently depending on the category:

- **Income effect**: people spend windfall gains (bonuses, lottery winnings) more readily than
  regular income
- **Fungibility violation**: money is not perfectly fungible across mental accounts. A person
  may carry credit card debt at 18% interest while keeping savings earning 2%
- **Budget categories**: people set implicit budgets for categories (food, entertainment, clothing)
  and are reluctant to shift spending between categories

**Implications for policy:**
- Tax rebates framed as "bonus" payments are more likely to be spent than those framed as
  "returned overpayment"
- Savings programmes that label accounts for specific purposes (retirement, education) can
  increase saving rates

### Endowment Effect

People value goods more highly simply because they own them. In experiments, participants given
a mug demanded a higher price to sell it than participants who did not own the mug were willing
to pay to buy it.

$$\text{WTA (willingness to accept)} > \text{WTP (willingness to pay)}$$

This violates the standard Coase theorem prediction that transaction costs aside, initial
ownership should not affect the efficiency of outcomes.

**Causes:**
- Loss aversion: giving up a good feels like a loss, which is weighted more heavily than the
  equivalent gain from acquiring it
- Psychological attachment: ownership creates an emotional connection
- Status quo bias: people prefer to keep things as they are

**Policy implications:**
- Default options in organ donation, pension enrolment, and insurance coverage are powerful
  because people are reluctant to opt out of something they already "have"
- Trial periods and money-back guarantees exploit the endowment effect: once consumers have
  experienced ownership, they are reluctant to give it up

### Time Inconsistency and Self-Control Problems

Present bias leads to time-inconsistent preferences: choices made today about future consumption
differ from the choices that will be made when the future arrives.

**Examples:**
- Procrastination: planning to study tomorrow, but when tomorrow arrives, postponing again
- Overconsumption: intending to eat healthily, but choosing junk food when hungry
- Under-saving: intending to save for retirement, but spending current income instead

**Commitment devices:** mechanisms that restrict future choices to align with long-term
preferences:

- Automatic payroll deductions for savings
- Christmas clubs (forced saving for holiday spending)
- Pre-commitment contracts (e.g., Gym-Pact, where users lose money if they fail to exercise)
- Ulysses contracts (deliberately limiting future options, analogous to Ulysses tying himself
  to the mast to resist the Sirens)

### Behavioural Finance

Behavioural economics has important applications in financial markets:

**Dispositions effect:** investors tend to sell winning stocks too early (locking in gains) and
hold losing stocks too long (avoiding the realisation of losses). This contradicts the rational
expectation that investors should sell assets with poor future prospects and hold those with
good prospects, regardless of past gains or losses.

**Herding:** investors follow the actions of others rather than their own analysis, contributing
to bubbles and crashes. Information cascades occur when individuals ignore their private
information and follow the crowd because they assume the crowd is better informed.

**Overconfidence:** investors overestimate their ability to pick winning stocks and underestimate
risk. This leads to excessive trading (reducing returns through transaction costs) and
under-diversification.

**Representativeness in investing:** investors extrapolate past performance into the future,
assuming that recent high returns will continue. This contributes to momentum effects and
eventual reversals.

### Common Pitfalls in Advanced Behavioural Economics

- Assuming that all biases lead to suboptimal outcomes. Some heuristics (rules of thumb) are
  efficient and produce good decisions with minimal cognitive effort.
- Overstating the policy implications. Knowing that people are biased does not necessarily imply
  that the government should correct the bias (paternalism objection).
- Confounding correlation with causation in behavioural experiments. Laboratory results may not
  generalise to real-world settings with higher stakes and more experienced decision-makers.
- Assuming that nudges are costless. Designing, implementing, and monitoring nudges requires
  resources and expertise.

## Additional Practice Problems

<details>
<summary>Problem 6: Sequential Game with Credible Threats</summary>

Amazon is considering entering the market for online groceries in a country where FreshCo is the
dominant player. Amazon first decides whether to enter. If Amazon enters, FreshCo decides whether
to accommodate (share the market) or fight (price war).

Payoffs (Amazon, FreshCo):

| Scenario | Amazon | FreshCo |
|----------|--------|---------|
| Amazon stays out | (0, 20) | -- |
| Amazon enters, FreshCo accommodates | (5, 8) | -- |
| Amazon enters, FreshCo fights | (-3, -2) | -- |

(a) Find the subgame perfect Nash equilibrium using backward induction.

(b) FreshCo publicly announces it will fight if Amazon enters. Is this threat credible?

(c) How might FreshCo make the threat credible?

(a) **Backward induction:**

Step 1: If Amazon enters, FreshCo chooses between Accommodate (8) and Fight (-2). FreshCo
accommodates.

Step 2: Amazon anticipates FreshCo will accommodate. Amazon compares Enter (5) with Stay out
(0). Amazon enters.

SPNE: (Enter, Accommodate) with payoffs (5, 8).

(b) No, the threat is not credible. If Amazon enters, FreshCo's best response is to accommodate
(8 > -2). A rational FreshCo would not carry out the threat.

(c) FreshCo could make the threat credible by:

1. **Investing in excess capacity**: building additional warehouses and distribution centres
   that lower its marginal cost of expanding output, making a price war less costly. This
   changes the payoffs: if Fight yields (say) 3 instead of -2, the threat becomes credible

2. **Reputation building**: if FreshCo has fought entrants in other markets, it may establish a
   reputation for toughness that deters entry even when the short-run payoff to fighting is
   negative (this works only if FreshCo faces many potential entrants over time)

3. **Long-term contracts**: signing exclusive supplier agreements that FreshCo would lose if it
   accommodates (changing the payoff structure)

4. **Sunk cost commitment**: making irreversible investments that lower the cost of fighting
   (e.g., building a proprietary logistics network optimised for aggressive pricing)

</details>

<details>
<summary>Problem 7: Repeated Game and Collusion Sustainability</summary>

Two airlines, Alpha and Beta, compete on a route. Each can set a High or Low fare. Weekly payoffs
(in millions):

|                  | Beta: High | Beta: Low |
| ---------------- | ---------- | --------- |
| **Alpha: High**  | (6, 6)     | (1, 10)   |
| **Alpha: Low**   | (10, 1)    | (3, 3)    |

The game is repeated weekly. Both airlines use a grim trigger strategy: cooperate (High fare) as
long as the other cooperates; if either defects (Low fare), play the Nash equilibrium (Low fare)
forever.

(a) What is the Nash equilibrium of the one-shot game?

(b) What is the minimum discount factor for collusion to be sustainable?

(c) If the government introduces price transparency regulations that increase the frequency of
price adjustments from weekly to daily, how does this affect the sustainability of collusion?

(a) For Alpha: if Beta plays High, Alpha gets 6 (High) vs. 10 (Low). Alpha plays Low. If Beta
plays Low, Alpha gets 1 (High) vs. 3 (Low). Alpha plays Low. Low is the dominant strategy.
By symmetry, both play Low. Nash equilibrium: (Low, Low) with payoffs (3, 3).

(b) Collusion requires both to play High:

Gain from defection: $10 - 6 = 4$ (one-time gain)
Loss from punishment: $6 - 3 = 3$ per period forever

$$\delta \geq \frac{4}{4 + 3} = \frac{4}{7} \approx 0.571$$

The discount factor must be at least 0.571. If firms interact weekly and use a weekly discount
rate of $r$, then $\delta = 1/(1 + r)$. For $\delta = 0.571$: $r \leq 0.751$ (75.1% per week),
which is easily satisfied. Collusion is sustainable as long as firms expect the market to persist.

(c) More frequent interactions (daily vs. weekly) have two opposing effects:

1. **Pro-collusion**: the effective discount factor per interaction increases (firms are more
   patient within the shorter time frame), making the grim trigger more effective
2. **Anti-collusion**: more frequent price adjustments allow firms to detect deviations faster
   and punish more quickly, which also supports collusion
3. **Anti-collusion**: however, if the market is expected to be disrupted sooner (e.g., by
   entry, regulation, or demand shocks), the expected duration of the collusive relationship
   may decrease, making collusion harder to sustain

Overall, in standard theory, more frequent interactions make collusion easier to sustain because
the punishment comes sooner (discounting matters less for near-future punishments). However,
empirically, the effect depends on the specific market structure and the ease of monitoring.

</details>

<details>
<summary>Problem 8: Behavioural Economics in Policy Design</summary>

A government wants to increase retirement savings rates. Currently, only 40% of eligible workers
contribute to a voluntary pension scheme, and the average contribution rate is 4% of salary.

Using behavioural economics principles, design a policy intervention and evaluate its likely
effectiveness and potential drawbacks.

**Proposed intervention: automatic enrolment with default contribution rate of 6%.**

**Behavioural principles applied:**

1. **Status quo bias / inertia**: workers are automatically enrolled and must actively opt out.
  Evidence from the UK (2006) and the US shows automatic enrolment increases participation to
  over 90%

2. **Default effect**: the default contribution rate of 6% anchors expectations. Research shows
  that most people stick with the default rather than choosing a different rate

3. **Present bias mitigation**: automatic enrolment overcomes the tendency to prioritise current
  consumption over future retirement needs. Workers do not need to make an active saving decision

4. **Loss aversion**: framing contributions as the "normal" state makes opting out feel like a
  loss of security, which people are motivated to avoid

**Expected effectiveness:**

- Participation rate: from 40% to 85--95% (based on international evidence)
- Average contribution rate: from 4% to approximately 6% (the default)
- Additional retirement savings: significant increase in national saving rate

**Potential drawbacks:**

1. **Nudging the poor**: automatic enrolment reduces take-home pay for low-income workers, who
  may face binding liquidity constraints. The "nudge" may effectively be a "shove" for these
  workers

2. **Financial literacy**: some workers may not understand the pension scheme, the investment
  options, or the fees involved. Automatic enrolment does not address this

3. **Crowding out**: workers who were already saving voluntarily through other channels may
  reduce those savings, partially offsetting the increase in pension contributions

4. **Distributional impact**: higher-income workers benefit more from tax relief on pension
  contributions, so the policy may be regressive

5. **Investment risk**: default investment options may not be appropriate for all workers
  (e.g., low-risk funds for near-retirees, higher-risk funds for young workers)

**Recommendations to address drawbacks:**

- Allow low-income workers to opt out without penalty (preserving libertarian paternalism)
- Provide clear, simple information about the scheme and investment options
- Include auto-escalation: automatically increase the contribution rate by 1% per year until
  reaching a target (e.g., 10%), again relying on inertia
- Use lifecycle investment funds as the default (automatically shifting from equities to bonds
  as retirement approaches)

</details>

## Auction Theory and Mechanism Design (HL Extension)

### Types of Auctions

Auctions are mechanisms for determining prices and allocating goods when sellers do not know
buyers' valuations.

**English (ascending-price) auction:**
- The auctioneer starts at a low price and raises it incrementally
- Bidders drop out when the price exceeds their valuation
- The last remaining bidder wins at the price just above the second-highest bidder's valuation
- Dominant strategy: bid up to your true valuation (bidding less risks losing an item you
  value more than the price)

**Dutch (descending-price) auction:**
- The auctioneer starts at a high price and lowers it until a bidder accepts
- The first bidder to accept wins and pays the current price
- Used for perishable goods (flowers in the Netherlands, fish markets)
- No dominant strategy: bidders must decide when to jump in, balancing the risk of waiting too
  long (losing the item) against jumping too early (paying more than necessary)

**First-price sealed-bid auction:**
- All bidders submit sealed bids simultaneously
- The highest bidder wins and pays their bid
- Optimal strategy: bid below your true valuation (to earn a surplus if you win), but how
  much below depends on the number of competitors and the distribution of valuations
- Bidding too low risks losing; bidding too close to your valuation earns little surplus

**Second-price sealed-bid (Vickrey) auction:**
- All bidders submit sealed bids simultaneously
- The highest bidder wins but pays the second-highest bid
- Dominant strategy: bid your true valuation. Since you pay the second-highest bid, you never
  pay more than the item is worth to you, and bidding your true value maximises your chance of
  winning
- Revenue equivalence: the Vickrey auction yields the same expected revenue as the English
  auction

### Revenue Equivalence Theorem

The revenue equivalence theorem states that under certain conditions, all standard auction
formats (English, Dutch, first-price sealed-bid, second-price sealed-bid) yield the same
expected revenue for the seller and the same expected surplus for the buyer with the highest
valuation.

**Conditions:**
1. Bidders are risk-neutral
2. Bidders have independent private values (each bidder's valuation is drawn independently from
   the same distribution)
3. Bidders are symmetric (same distribution of valuations)
4. Payment depends only on bids (no entry fees, etc.)

When these conditions are violated:
- **Risk aversion**: first-price auctions yield higher revenue than second-price auctions
  (risk-averse bidders bid higher in first-price auctions to reduce the risk of losing)
- **Common values**: when the item has the same underlying value but bidders have different
  information (e.g., oil leases), the winner's curse can arise
- **Correlated values**: when bidders' valuations are positively correlated, English auctions
  yield more revenue than sealed-bid auctions (because bidders can update their valuations
  based on when others drop out)

### The Winner's Curse

In common-value auctions, each bidder has an estimate of the item's true value, but all
estimates are imperfect. The bidder with the highest estimate (the winner) is likely to have
overestimated the value, because the highest of several noisy estimates tends to exceed the
true value.

$$E[\text{True value} | \text{Winning} ] < \text{Winning bid}$$

**Example:** bidding for an oil lease. Each firm commissions a geological survey estimating the
amount of oil. The firm with the highest estimate wins the auction but discovers that the
actual amount of oil is less than estimated (because it had the most optimistic survey).

**Rational response to the winner's curse:** experienced bidders shade their bids downward to
compensate for the expected overestimation. The more bidders competing, the stronger the
winner's curse and the more aggressively bidders must shade their bids.

### Mechanism Design: The Revelation Principle

Mechanism design is the reverse of game theory: instead of analysing the outcome of a given
game, the designer asks "what game (rules) should I create to achieve a desired outcome?"

The **revelation principle** states that for any mechanism that achieves a particular outcome,
there exists an equivalent direct mechanism in which participants truthfully reveal their private
information.

**Implications:**
- The designer can focus on direct revelation mechanisms without loss of generality
- A mechanism is incentive-compatible if truth-telling is a dominant strategy for each
  participant
- The challenge is to design mechanisms that are simultaneously incentive-compatible,
  budget-balanced, and efficient (maximising total surplus)

### Common Pitfalls in Auction Theory

- Confusing first-price and second-price auction strategies. In a first-price auction, you
  should bid below your valuation; in a second-price auction, you should bid your true valuation
- Ignoring the winner's curse in common-value auctions. Bidders who do not account for the
  winner's curse systematically overpay
- Assuming revenue equivalence always holds. It depends on specific assumptions about risk
  neutrality, independence, and symmetry
- Confusing private values with common values. Private value auctions (art, collectibles) differ
  fundamentally from common value auctions (mineral rights, spectrum licences)

## Advanced Behavioural Topics (HL Extension)

### Altruism and Public Goods Games

The standard economic model predicts that rational, self-interested individuals will not
contribute to public goods (free riding). Experimental evidence consistently contradicts this:

- In one-shot public goods games, individuals typically contribute 40--60% of their endowment
- Contributions decline with repetition but do not reach zero
- Some individuals consistently contribute at high levels ("conditional cooperators": they
  contribute if others do)
- A small minority always free-rides

**Fischbacher and Gachter (2010):** individuals can be classified as:
1. **Conditional cooperators** (~50%): contribute more when others contribute more
2. **Free riders** (~30%): contribute nothing regardless of others' contributions
3. **Triangle contributors** (~20%): other patterns

**Implications for policy:**
- Tax compliance cannot be explained solely by deterrence (audits, penalties). Social norms,
  trust in government, and perceptions of fairness also matter
- Public awareness campaigns that highlight the contributions of others can increase
  cooperation (social proof)
- Punishment of free-riders (even at a cost to the punisher) can sustain cooperation,
  suggesting a role for social sanctions

### Fairness and the Ultimatum Game

In the ultimatum game, Player 1 proposes a split of a fixed sum (e.g., `USD 10`). Player 2 can
accept (both receive the proposed split) or reject (both receive nothing).

**Standard prediction:** Player 1 offers the minimum possible (e.g., `USD 0.01`); Player 2
accepts because something is better than nothing.

**Experimental findings:**
- Average offers are 40--50% of the total
- Offers below 20% are frequently rejected
- Results are remarkably consistent across cultures, though the exact proportions vary

**Interpretation:** people care about fairness, not just material payoffs. Rejecting a low offer
is a costly signal that unfairness is unacceptable. This behaviour contradicts the standard
model of self-interested utility maximisation.

### Mental Accounting: Extended Analysis

**Thaler's four principles of mental accounting:**

1. **Segregation**: gains are segregated (framed separately), while losses are integrated (combined)
2. **Cancellation**: when a gain and a loss are linked, they are evaluated together (hedonic
   framing)
3. **Integration**: losses are combined with larger gains to reduce the pain of loss
4. **Separation**: small gains are separated from larger losses to provide a silver lining

**Application to pricing:**
- **Bundling**: firms bundle a high-margin product with a low-margin product. Consumers evaluate
  the bundle as a single gain, reducing their sensitivity to the price of the high-margin
  component
- **Partitioned pricing**: quoting a product price plus a separate shipping fee feels cheaper
  than quoting the all-inclusive price (consumers may not fully add the components)
- **Drip pricing**: revealing additional fees incrementally reduces the perceived total cost
  relative to upfront disclosure

### Common Pitfalls in Advanced Behavioural Economics

- Overgeneralising laboratory findings to real-world settings. Behavioural effects observed with
  small stakes may not apply to high-stakes decisions
- Assuming all behavioural biases are "irrational." Many heuristics are ecologically rational
  -- they produce good decisions in the environments where they evolved
- Neglecting individual heterogeneity. Different people exhibit different biases to different
  degrees
- Confounding correlation with causation in field experiments. Even randomised controlled
  trials may have spillover effects, Hawthorne effects, or selection bias

## Additional Practice Problems

<details>
<summary>Problem 9: Auction Strategy</summary>

You are bidding in a second-price sealed-bid auction for a painting. Your private valuation of
the painting is `USD 800`. You believe there are 3 other bidders, each with valuations uniformly
distributed between `USD 0` and `USD 1,000`.

(a) What is your optimal bid?

(b) What is the probability that you win the auction?

(c) What is your expected surplus if you win?

(a) In a second-price sealed-bid auction, the dominant strategy is to bid your true valuation.
Your optimal bid is `USD 800`.

If you bid less (e.g., `USD 700`), you risk losing to a bidder with a valuation between 700
and 800 who bids their true valuation (between 700 and 800). You would lose an item you
value at 800 and pay less than 800, earning a positive surplus.

If you bid more (e.g., `USD 900`), you risk winning when the second-highest bid is between 800
and 900. You would pay more than your valuation (800), earning a negative surplus.

(b) You win if your bid (800) is the highest of the four bids. The other three bids are
uniformly distributed on [0, 1000]. The probability that all three are below 800 is:

$P(\text{win}) = (800/1000)^3 = 0.8^3 = 0.512$ (51.2%)

(c) Given that you win, the second-highest bid is the maximum of three uniform [0, 800]
draws. The expected value of the maximum of $n$ uniform [0, b] draws is:

$E[\text{second bid} | \text{win}] = \frac{3}{4} \times 800 = 600$

Your expected surplus $= 800 - 600 = \$200$.

Expected surplus unconditional: $0.512 \times 200 = \$102.40$.

</details>

<details>
<summary>Problem 10: Public Goods Game and Policy</summary>

A village of 100 households is considering contributing to a new well that costs `USD 10,000`.
Each household values the well at `USD 200`. The village leader proposes that each household
contributes `USD 100`, with the government covering the remaining `USD 0` (since $100 \times 100 = 10,000$).

(a) Is this project socially efficient? Explain.

(b) Why might the voluntary contribution scheme fail?

(c) How might the village leader use behavioural insights to ensure the project is funded?

(a) Total value to the village $= 100 \times 200 = \$20{,}000$. Total cost $= \$10{,}000$.
Net benefit $= \$10{,}000 > 0$. The project is socially efficient.

Each household's individual benefit ($200) exceeds the cost per household ($100), so contributing
is individually rational as well. However, the well is a public good (non-excludable, non-rival),
so free-riding is possible.

(b) The voluntary scheme may fail because:
- Each household reasons: "If others contribute, the well will be built regardless of my
  contribution, so I can free-ride." This is the dominant strategy in a one-shot game
- If many households think this way, too few contribute and the well is not built (even though
  everyone would benefit from it)
- Coordination problems: households may be uncertain whether others will contribute, leading to
  a "wait and see" approach

(c) **Behavioural strategies:**

1. **Default contribution**: make the `USD 100` contribution the default (opt-out rather than
   opt-in). Status quo bias will lead most households to accept the default

2. **Social proof**: publicise the names of households that have already contributed. People are
   more likely to contribute when they know others are contributing (conditional cooperation)

3. **Public commitment**: ask households to publicly pledge their contribution at a village
   meeting. Social pressure and commitment consistency increase follow-through

4. **Framing**: frame the contribution as "your share of the well" rather than "a payment."
  People are more willing to pay when they feel they are getting something specific in return

5. **Matching**: announce that a donor will match each contribution. Matching increases the
  perceived value of contributing and creates a sense of partnership

6. **Sunk cost leverage**: start construction using a small initial fund. Once construction has
  begun, households will feel committed to completing the project (sunk cost fallacy applied
  positively)

</details>

