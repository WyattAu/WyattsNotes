---
title: Game Theory and Behavioural Economics
description:
  'IB Economics — game theory fundamentals and behavioural economics concepts including heuristics,
  biases, and nudge theory.'
slug: game-theory-and-behavioural-economics
---

## Game Theory Fundamentals

### What Is Game Theory?

Game theory is the study of strategic decision-making among interdependent agents. Each agent's
Payoff depends not only on their own actions but also on the actions of others. The framework was
Formalised by John von Neumann and Oskar Morgenstern (1944) and extended by John Nash.

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
The other players do. If every player has a dominant strategy, the game has a **dominant strategy
Equilibrium**.

A **strictly dominant strategy** is always strictly better than any other strategy. A **weakly
Dominant strategy** is at least as good as any other strategy, and strictly better against at least
One opponent strategy.

### Nash Equilibrium

A **Nash equilibrium** is a set of strategies where no player can improve their payoff by
Unilaterally changing their strategy, given the strategies chosen by all other players. Formally,
For each player $i$ with strategy $s_i^*$:

$$u_i(s_i^*, s_{-i}^*) \geq u_i(s_i, s_{-i}^*) \quad \forall \; s_i$$

Where $u_i$ is player $i$'s payoff function and $s_{-i}^*$ represents the strategies of all other
Players.

Key properties:

- A Nash equilibrium is a self-enforcing prediction: no player has an incentive to deviate
- A game may have zero, one, or multiple Nash equilibria
- Every game with a finite number of strategies has at least one Nash equilibrium in mixed
  strategies
- A dominant strategy equilibrium is always a Nash equilibrium, but not vice versa

### Mixed Strategies

A **pure strategy** is a deterministic choice of one action. A **mixed strategy** assigns a
Probability distribution over the available pure strategies.

In a mixed strategy Nash equilibrium, each player randomises over their strategies such that no
Player can gain by changing their probabilities. The equilibrium is reached when each player is
**indifferent** between their pure strategies given the other player's mixed strategy.

## The Prisoner's Dilemma

### The Classic Form

Two suspects are arrested and interrogated separately. Each can either **Cooperate** (stay silent)
Or **Defect** (betray the other). The payoff matrix (years in prison, so lower is better):

|                  | B Cooperates | B Defects   |
| ---------------- | ------------ | ----------- |
| **A Cooperates** | A: 1, B: 1   | A: 10, B: 0 |
| **A Defects**    | A: 0, B: 10  | A: 5, B: 5  |

**Analysis:**

- For A: if B cooperates, A should defect ($0 < 1$). If B defects, A should defect ($5 < 10$).
  Defect is A's dominant strategy.
- For B: by symmetric reasoning, defect is B's dominant strategy.
- The Nash equilibrium is (Defect, Defect) with payoffs $(5, 5)$.
- The socially optimal outcome is (Cooperate, Cooperate) with payoffs $(1, 1)$Which is Pareto
  superior.

### The Core Insight

The prisoner's dilemma demonstrates that individually rational behaviour can lead to collectively
Suboptimal outcomes. The Nash equilibrium is not Pareto efficient — both players would be better off
Cooperating, but neither has the incentive to do so unilaterally.

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
Repeated** (or indefinitely repeated) game, cooperation can be sustained as a Nash equilibrium
Through strategies such as:

- **Grim trigger**: cooperate until the other player defects, then defect forever. This makes the
  threat of permanent punishment credible.
- **Tit-for-tat**: begin by cooperating, then mirror the opponent's previous move. Simple,
  retaliatory, and forgiving.
- **Pavlov (win-stay, lose-shift)**: repeat the last action if it yielded a high payoff; switch if
  it yielded a low payoff.

The **Folk Theorem** states that in infinitely repeated games, any feasible and individually
Rational payoff can be sustained as a Nash equilibrium, provided the discount factor (the weight
Placed on future payoffs) is sufficiently high.

In **finitely repeated** games with a known endpoint, backward induction leads to defection in every
Round (the unraveling argument). However, if the number of rounds is uncertain or players use
Bounded rationality, cooperation may still emerge.

## Other Key Games

### Battle of the Sexes

Two players prefer to coordinate on the same activity but disagree on which activity. There are two
Pure strategy Nash equilibria and one mixed strategy equilibrium. This game illustrates coordination
Problems.

|                 | B: Opera   | B: Football |
| --------------- | ---------- | ----------- |
| **A: Opera**    | A: 3, B: 2 | A: 0, B: 0  |
| **A: Football** | A: 0, B: 0 | A: 2, B: 3  |

### Chicken (Hawk-Dove)

Two drivers speed toward each other. The player who swerves first is the "chicken." Both swerving is
A compromise; neither swerving is catastrophic. This game models brinkmanship in international
Relations and competitive business strategies.

### Stag Hunt

Two hunters can cooperate to catch a stag (high payoff for both) or hunt hare individually (moderate
Payoff, certain). The stag hunt has two Nash equilibria: both cooperate (Pareto efficient) and both
Defect (risk-dominant). It illustrates the tension between safety and social cooperation.

## Behavioural Economics

### Departures from Rationality

Traditional (neoclassical) economics assumes that agents are **Homo economicus**: fully rational,
Self-interested utility maximisers with perfect information, consistent preferences, and unlimited
Cognitive capacity. Behavioural economics relaxes these assumptions, drawing on psychology and
Empirical evidence to model how people actually make decisions.

### Bounded Rationality

Herbert Simon (1955) proposed that individuals are **boundedly rational**: they make satisfactory
Rather than optimal decisions because of limited information, limited cognitive processing capacity,
And limited time. People use **heuristics** — mental shortcuts — to simplify complex decisions.

### Heuristics and Biases

**Availability heuristic**: people estimate the probability of an event based on how examples Come
to mind. Vivid, recent, or emotionally charged events are overestimated (e.g., overestimating The
probability of plane crashes after media coverage).

**Representativeness heuristic**: people judge the probability of an event based on how similar it
Is to a stereotype or prototype, ignoring base rates. For example, assuming a quiet, introverted
Person is more likely to be a librarian than a farmer, despite there being far more farmers than
Librarians.

**Anchoring**: initial information serves as an anchor that influences subsequent estimates, even
When the anchor is irrelevant. In negotiations, the first offer often anchors the final agreement.

**Framing**: the way information is presented affects decisions. People respond differently to "a
$90\%$ survival rate" vs. "a $10\%$ mortality rate" despite being logically identical. Loss aversion
Means that framing an outcome as a loss has a stronger effect than framing the equivalent outcome as
A gain.

**Overconfidence bias**: individuals systematically overestimate their own knowledge, ability, and
The precision of their predictions. This affects investment decisions, entrepreneurial activity, and
Risk assessment.

**Confirmation bias**: people seek, interpret, and remember information that confirms their existing
Beliefs while ignoring or discounting contradictory evidence.

**Sunk cost fallacy**: individuals continue investing in a losing course of action because of
Resources already committed, rather than evaluating future costs and benefits.

### Prospect Theory

Developed by Daniel Kahneman and Amos Tversky (1979), prospect theory describes how people evaluate
Potential losses and gains:

1. **Reference dependence**: people evaluate outcomes relative to a reference point ( the status
   quo), not in absolute terms
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
Time:

$$U = \sum_{t=0}^{T} \frac{1}{(1 + k \cdot t)^b} \cdot u(c_t)$$

Where $k > 0$ governs impatience and $b > 0$ governs the degree of hyperbolic discounting.

This produces **present bias**: individuals disproportionately prefer immediate gratification over
Future rewards, even when they know the long-term consequences are worse. This explains
Procrastination, undersaving for retirement, and difficulty maintaining diets.

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
Presented — can influence decisions without restricting freedom of choice. A **nudge** is any aspect
Of that architecture that alters behaviour predictably without forbidding options or significantly
Changing economic incentives.

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
Legitimate and desirable for institutions to influence choices in ways that make people better off,
While preserving their freedom to choose otherwise.

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
Payoff matrix shows profits in millions:

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
Would be better off at (No Ad, No Ad) with $(6, 6)$But neither has the incentive to unilaterally
Stop advertising.

</details>
<summary>Problem 2: Mixed Strategy Nash Equilibrium</summary>

In a zero-sum game, Player 1 can play Up or Down; Player 2 can play Left or Right. The payoff matrix
Shows Player 1's payoff (Player 2's payoff is the negative):

|          | Left | Right |
| -------- | ---- | ----- |
| **Up**   | 3    | -1    |
| **Down** | -2   | 4     |

Find the mixed strategy Nash equilibrium.

Let Player 1 play Up with probability $p$ and Down with probability $1 - p$. For Player 2 to be
Indifferent between Left and Right:

$$\mathrm{Expected payoff (Left)} = p(-3) + (1-p)(2)$$
$$\mathrm{Expected payoff (Right)} = p(1) + (1-p)(-4)$$

Setting them equal:

$$-3p + 2 - 2p = p - 4 + 4p$$ $$2 - 5p = 5p - 4$$ $$6 = 10p$$ $$p = 0.6$$

Let Player 2 play Left with probability $q$ and Right with probability $1 - q$. For Player 1 to be
Indifferent:

$$3q - 1(1-q) = -2q + 4(1-q)$$ $$3q - 1 + q = -2q + 4 - 4q$$ $$4q - 1 = -6q + 4$$ $$10q = 5$$
$$q = 0.5$$

The mixed strategy Nash equilibrium is: Player 1 plays Up with probability $0.6$ and Down with
Probability $0.4$; Player 2 plays Left with probability $0.5$ and Right with probability $0.5$.

<details>
<summary>Problem 3: Behavioural Biases in Decision-Making</summary>

A consumer is choosing between two investment products:

- Product A: "has a 70% chance of gaining value"
- Product B: "has a 30% chance of losing value"

Explain which product the consumer is likely to choose and identify the bias at work.

The consumer is likely to choose Product A, even though the two descriptions are logically
Equivalent (a 70% chance of gaining is the same as a 30% chance of losing).

This is an example of **framing bias**: the way information is presented (framed as a gain vs.
Framed as a loss) affects decisions. Prospect theory predicts that people are risk-averse in the
Domain of gains and risk-seeking in the domain of losses. The positive frame ("gaining value")
Triggers a more favourable evaluation than the negative frame ("losing value"), even though the
Underlying probabilities are identical.

Loss aversion also plays a role: the word "losing" activates a stronger emotional response than
"gaining," making Product B seem less attractive despite its mathematical equivalence.

</details>
<summary>Problem 4: Present Bias and Saving</summary>

A person is offered a choice: `USD 100` today or `USD 120` in one month. Most people choose
`USD 100` Today. However, when offered `USD 100` in 12 months or `USD 120` in 13 months, most people
choose `USD 120` in 13 months. Explain this inconsistency using behavioural economics.

This pattern is explained by **present bias** (or hyperbolic discounting). When the reward is
Immediate, the person heavily discounts the future one-month delay, preferring `USD 100` now. But
when Both options are in the future, the one-month difference feels much less significant, and the
person Is more patient.

With exponential discounting at a constant rate, the preference should be consistent: if you prefer
`USD 100` today over `USD 120` in a month, you should also prefer `USD 100` in 12 months over
`USD 120` in 13 months (since the trade-off is identical). The inconsistency reveals that the
discount rate is Not constant — it is much higher for immediate trade-offs than for future ones.

This has important implications for savings behaviour, health decisions, and commitment devices.

<details>
<summary>Problem 5: Nudge Theory Application</summary>

A government wants to increase organ donation rates. Currently, citizens must actively opt in to
Become donors, and the participation rate is $25\%$. Design a nudge-based intervention and evaluate
Its potential effectiveness and ethical considerations.

**Intervention: Change the default from opt-in to opt-out.** Under an opt-out (presumed consent)
System, all citizens are automatically registered as organ donors unless they actively withdraw.

**Expected effectiveness:** Evidence from countries that have implemented opt-out systems (e.g.,
Spain, Austria, Wales) shows dramatic increases in donation rates, often exceeding $90\%$. This is
Because of **status quo bias** and **inertia**: people tend to stick with the default option rather
Than actively changing it.

**Ethical considerations:**

- _Libertarian paternalism_: the nudge preserves freedom of choice — anyone can opt out. The default
  is changed, not forced.
- _Autonomy_: critics argue that presumed consent may not reflect genuine consent, particularly if
  people are unaware of the default or face barriers to opting out.
- _Transparency_: the system must be well-publicised and easy to opt out of to maintain legitimacy.
- _Cultural sensitivity_: attitudes toward organ donation vary across cultures and religious groups;
  a one-size-fits-all default may not be appropriate.
- _Manipulation vs. Guidance_: the line between a helpful nudge and manipulation depends on whether
  The default serves the individual's likely preferences.

## Advanced Game Theory Applications (HL Extension)

### Sequential Games and Backward Induction

In sequential games, players move in turn, observing previous moves. The solution concept is
**subgame perfect Nash equilibrium (SPNE)**, found by **backward induction**: starting from the Last
decision node and working backwards to determine optimal strategies at each stage.

**Example -- entry deterrence:**

An incumbent monopolist faces a potential entrant. The entrant decides whether to enter. If entry
Occurs, the incumbent decides whether to accommodate or fight (engage in a price war).

**Payoffs (entrant, incumbent):**

| Path               | Entrant  | Incumbent |
| ------------------ | -------- | --------- |
| Stay out           | (0, 10)  | --        |
| Enter, Accommodate | (3, 5)   | --        |
| Enter, Fight       | (-2, -1) | --        |

**Backward induction:**

1. If the entrant enters, the incumbent chooses between Accommodate (payoff 5) and Fight (payoff
   -1). The incumbent accommodates.
2. Knowing the incumbent will accommodate, the entrant compares Enter (payoff 3) with Stay out
   (payoff 0). The entrant enters.
3. SPNE: (Enter, Accommodate) with payoffs (3, 5).

**Credible vs. Incredible threats:** the incumbent's threat to fight is not credible because
Fighting yields -1, which is worse than accommodating (5). A threat is credible only if it is In the
threatener's interest to carry it out when the time comes.

### Repeated Games and Collusion

In a repeated setting, firms can sustain cooperation (collusion) through the threat of future
Punishment.

**Grim trigger strategy:** cooperate as long as all firms have cooperated in the past. If any Firm
defects, switch to the Nash equilibrium (competitive) outcome forever.

For collusion to be sustainable, the present value of cooperation must exceed the one-time gain From
defection:

$$\frac{\pi_{\text{collusion}}}{1 - \delta} \geq \pi_{\text{defection}} + \frac{\delta \cdot \pi_{\text{Nash}}}{1 - \delta}$$

Where $\delta$ is the discount factor ($0 < \delta < 1$). Rearranging:

$$\delta \geq \frac{\pi_{\text{defection}} - \pi_{\text{collusion}}}{\pi_{\text{defection}} - \pi_{\text{Nash}}}$$

**Numerical example:** In the pricing game from earlier, $\pi_{\text{collusion}} = 8$ (High, High),
$\pi_{\text{defection}} = 12$ (Low while other plays High), $\pi_{\text{Nash}} = 5$ (Low, Low).

$$\delta \geq \frac{12 - 8}{12 - 5} = \frac{4}{7} = 0.571$$

If $\delta \geq 0.571$ (i.e., firms value future profits at least 57.1% as much as current Profits),
collusion is sustainable. This requires:

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

The dramatic difference between Cournot and Bertrand outcomes (oligopoly power vs. Perfect
Competition) highlights the importance of the strategic variable (quantity vs. Price) and the
Assumption about product differentiation.

### Stackelberg as a Sequential Game

The Stackelberg model is a sequential game where the leader moves first:

1. The leader chooses quantity $q_1$
2. The follower observes $q_1$ and chooses $q_2$
3. Payoffs are determined

Backward induction: the follower plays the Cournot best response to $q_1$. The leader Anticipates
this and chooses $q_1$ to maximise its profit, taking the follower's reaction into Account. The
leader earns higher profit than in the Cournot equilibrium (first-mover advantage).

### Common Pitfalls in Advanced Game Theory

- Confusing Nash equilibrium with SPNE. Every SPNE is a Nash equilibrium, but not every Nash
  equilibrium is subgame perfect. SPNE requires optimal play in every subgame, not just the game as
  a whole.
- Assuming that repeated interaction always leads to cooperation. If the discount factor is low
  (firms are impatient), cooperation may not be sustainable even with infinitely repeated
  interaction.
- Confusing credible and incredible threats. A threat is credible only if the threatener would
  actually carry it out when called upon.
- Applying the grim trigger to finitely repeated games. Backward induction unravels cooperation in
  the last period, making the grim trigger ineffective with a known endpoint.

## Advanced Behavioural Economics (HL Extension)

### Mental Accounting

Thaler (1985) observed that people categorise money into different "mental accounts" and treat Money
differently depending on the category:

- **Income effect**: people spend windfall gains (bonuses, lottery winnings) more readily than
  regular income
- **Fungibility violation**: money is not perfectly fungible across mental accounts. A person may
  carry credit card debt at 18% interest while keeping savings earning 2%
- **Budget categories**: people set implicit budgets for categories (food, entertainment, clothing)
  and are reluctant to shift spending between categories

**Implications for policy:**

- Tax rebates framed as "bonus" payments are more likely to be spent than those framed as "returned
  overpayment"
- Savings programmes that label accounts for specific purposes (retirement, education) can increase
  saving rates

### Endowment Effect

People value goods more highly because they own them. In experiments, participants given A mug
demanded a higher price to sell it than participants who did not own the mug were willing To pay to
buy it.

$$\text{WTA (willingness to accept)} > \text{WTP (willingness to pay)}$$

This violates the standard Coase theorem prediction that transaction costs aside, initial Ownership
should not affect the efficiency of outcomes.

**Causes:**

- Loss aversion: giving up a good feels like a loss, which is weighted more heavily than the
  equivalent gain from acquiring it
- Psychological attachment: ownership creates an emotional connection
- Status quo bias: people prefer to keep things as they are

**Policy implications:**

- Default options in organ donation, pension enrolment, and insurance coverage are powerful because
  people are reluctant to opt out of something they already "have"
- Trial periods and money-back guarantees exploit the endowment effect: once consumers have
  experienced ownership, they are reluctant to give it up

### Time Inconsistency and Self-Control Problems

Present bias leads to time-inconsistent preferences: choices made today about future consumption
Differ from the choices that will be made when the future arrives.

**Examples:**

- Procrastination: planning to study tomorrow, but when tomorrow arrives, postponing again
- Overconsumption: intending to eat healthily, but choosing junk food when hungry
- Under-saving: intending to save for retirement, but spending current income instead

**Commitment devices:** mechanisms that restrict future choices to align with long-term Preferences:

- Automatic payroll deductions for savings
- Christmas clubs (forced saving for holiday spending)
- Pre-commitment contracts (e.g., Gym-Pact, where users lose money if they fail to exercise)
- Ulysses contracts (deliberately limiting future options, analogous to Ulysses tying himself to the
  mast to resist the Sirens)

### Behavioural Finance

Behavioural economics has important applications in financial markets:

**Dispositions effect:** investors tend to sell winning stocks too early (locking in gains) and Hold
losing stocks too long (avoiding the realisation of losses). This contradicts the rational
Expectation that investors should sell assets with poor future prospects and hold those with Good
prospects, regardless of past gains or losses.

**Herding:** investors follow the actions of others rather than their own analysis, contributing To
bubbles and crashes. Information cascades occur when individuals ignore their private Information
and follow the crowd because they assume the crowd is better informed.

**Overconfidence:** investors overestimate their ability to pick winning stocks and underestimate
Risk. This leads to excessive trading (reducing returns through transaction costs) and
Under-diversification.

**Representativeness in investing:** investors extrapolate past performance into the future,
Assuming that recent high returns will continue. This contributes to momentum effects and Eventual
reversals.

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

</details>
<summary>Problem 6: Sequential Game with Credible Threats</summary>

Amazon is considering entering the market for online groceries in a country where FreshCo is the
Dominant player. Amazon first decides whether to enter. If Amazon enters, FreshCo decides whether To
accommodate (share the market) or fight (price war).

Payoffs (Amazon, FreshCo):

| Scenario                            | Amazon   | FreshCo |
| ----------------------------------- | -------- | ------- |
| Amazon stays out                    | (0, 20)  | --      |
| Amazon enters, FreshCo accommodates | (5, 8)   | --      |
| Amazon enters, FreshCo fights       | (-3, -2) | --      |

(a) Find the subgame perfect Nash equilibrium using backward induction.

(b) FreshCo publicly announces it will fight if Amazon enters. Is this threat credible?

(c) How might FreshCo make the threat credible?

(a) **Backward induction:**

Step 1: If Amazon enters, FreshCo chooses between Accommodate (8) and Fight (-2). FreshCo
Accommodates.

Step 2: Amazon anticipates FreshCo will accommodate. Amazon compares Enter (5) with Stay out (0).
Amazon enters.

SPNE: (Enter, Accommodate) with payoffs (5, 8).

(b) No, the threat is not credible. If Amazon enters, FreshCo's best response is to accommodate (8 >
-2). A rational FreshCo would not carry out the threat.

(c) FreshCo could make the threat credible by:

1. **Investing in excess capacity**: building additional warehouses and distribution centres that
   lower its marginal cost of expanding output, making a price war less costly. This changes the
   payoffs: if Fight yields (say) 3 instead of -2, the threat becomes credible

2. **Reputation building**: if FreshCo has fought entrants in other markets, it may establish a
   reputation for toughness that deters entry even when the short-run payoff to fighting is negative
   (this works only if FreshCo faces many potential entrants over time)

3. **Long-term contracts**: signing exclusive supplier agreements that FreshCo would lose if it
   accommodates (changing the payoff structure)

4. **Sunk cost commitment**: making irreversible investments that lower the cost of fighting (e.g.,
   building a proprietary logistics network optimised for aggressive pricing)

<details>
<summary>Problem 7: Repeated Game and Collusion Sustainability</summary>

Two airlines, Alpha and Beta, compete on a route. Each can set a High or Low fare. Weekly payoffs
(in millions):

|                 | Beta: High | Beta: Low |
| --------------- | ---------- | --------- |
| **Alpha: High** | (6, 6)     | (1, 10)   |
| **Alpha: Low**  | (10, 1)    | (3, 3)    |

The game is repeated weekly. Both airlines use a grim trigger strategy: cooperate (High fare) as
Long as the other cooperates; if either defects (Low fare), play the Nash equilibrium (Low fare)
Forever.

(a) What is the Nash equilibrium of the one-shot game?

(b) What is the minimum discount factor for collusion to be sustainable?

(c) If the government introduces price transparency regulations that increase the frequency of Price
adjustments from weekly to daily, how does this affect the sustainability of collusion?

(a) For Alpha: if Beta plays High, Alpha gets 6 (High) vs. 10 (Low). Alpha plays Low. If Beta Plays
Low, Alpha gets 1 (High) vs. 3 (Low). Alpha plays Low. Low is the dominant strategy. By symmetry,
both play Low. Nash equilibrium: (Low, Low) with payoffs (3, 3).

(b) Collusion requires both to play High:

Gain from defection: $10 - 6 = 4$ (one-time gain) Loss from punishment: $6 - 3 = 3$ per period
forever

$$\delta \geq \frac{4}{4 + 3} = \frac{4}{7} \approx 0.571$$

The discount factor must be at least 0.571. If firms interact weekly and use a weekly discount Rate
of $r$Then $\delta = 1/(1 + r)$. For $\delta = 0.571$: $r \leq 0.751$ (75.1% per week), Which is
satisfied. Collusion is sustainable as long as firms expect the market to persist.

(c) More frequent interactions (daily vs. Weekly) have two opposing effects:

1. **Pro-collusion**: the effective discount factor per interaction increases (firms are more
   patient within the shorter time frame), making the grim trigger more effective
2. **Anti-collusion**: more frequent price adjustments allow firms to detect deviations faster and
   punish more quickly, which also supports collusion
3. **Anti-collusion**: however, if the market is expected to be disrupted sooner (e.g., by entry,
   regulation, or demand shocks), the expected duration of the collusive relationship may decrease,
   making collusion harder to sustain

Overall, in standard theory, more frequent interactions make collusion easier to sustain because The
punishment comes sooner (discounting matters less for near-future punishments). However,
Empirically, the effect depends on the specific market structure and the ease of monitoring.

</details>
<summary>Problem 8: Behavioural Economics in Policy Design</summary>

A government wants to increase retirement savings rates. Currently, only 40% of eligible workers
Contribute to a voluntary pension scheme, and the average contribution rate is 4% of salary.

Using behavioural economics principles, design a policy intervention and evaluate its likely
Effectiveness and potential drawbacks.

**Proposed intervention: automatic enrolment with default contribution rate of 6%.**

**Behavioural principles applied:**

1. **Status quo bias / inertia**: workers are automatically enrolled and must actively opt out.
   Evidence from the UK (2006) and the US shows automatic enrolment increases participation to over
   90%

2. **Default effect**: the default contribution rate of 6% anchors expectations. Research shows that
   most people stick with the default rather than choosing a different rate

3. **Present bias mitigation**: automatic enrolment overcomes the tendency to prioritise current
   consumption over future retirement needs. Workers do not need to make an active saving decision

4. **Loss aversion**: framing contributions as the "normal" state makes opting out feel like a loss
   of security, which people are motivated to avoid

**Expected effectiveness:**

- Participation rate: from 40% to 85--95% (based on international evidence)
- Average contribution rate: from 4% to approximately 6% (the default)
- Additional retirement savings: significant increase in national saving rate

**Potential drawbacks:**

1. **Nudging the poor**: automatic enrolment reduces take-home pay for low-income workers, who may
   face binding liquidity constraints. The "nudge" may effectively be a "shove" for these workers

2. **Financial literacy**: some workers may not understand the pension scheme, the investment
   options, or the fees involved. Automatic enrolment does not address this

3. **Crowding out**: workers who were already saving voluntarily through other channels may reduce
   those savings, partially offsetting the increase in pension contributions

4. **Distributional impact**: higher-income workers benefit more from tax relief on pension
   contributions, so the policy may be regressive

5. **Investment risk**: default investment options may not be appropriate for all workers (e.g.,
   low-risk funds for near-retirees, higher-risk funds for young workers)

**Recommendations to address drawbacks:**

- Allow low-income workers to opt out without penalty (preserving libertarian paternalism)
- Provide clear, simple information about the scheme and investment options
- Include auto-escalation: automatically increase the contribution rate by 1% per year until
  reaching a target (e.g., 10%), again relying on inertia
- Use lifecycle investment funds as the default (automatically shifting from equities to bonds as
  retirement approaches)

## Auction Theory and Mechanism Design (HL Extension)

### Types of Auctions

Auctions are mechanisms for determining prices and allocating goods when sellers do not know Buyers'
valuations.

**English (ascending-price) auction:**

- The auctioneer starts at a low price and raises it incrementally
- Bidders drop out when the price exceeds their valuation
- The last remaining bidder wins at the price just above the second-highest bidder's valuation
- Dominant strategy: bid up to your true valuation (bidding less risks losing an item you value more
  than the price)

**Dutch (descending-price) auction:**

- The auctioneer starts at a high price and lowers it until a bidder accepts
- The first bidder to accept wins and pays the current price
- Used for perishable goods (flowers in the Netherlands, fish markets)
- No dominant strategy: bidders must decide when to jump in, balancing the risk of waiting too long
  (losing the item) against jumping too early (paying more than necessary)

**First-price sealed-bid auction:**

- All bidders submit sealed bids simultaneously
- The highest bidder wins and pays their bid
- Optimal strategy: bid below your true valuation (to earn a surplus if you win), but how much below
  depends on the number of competitors and the distribution of valuations
- Bidding too low risks losing; bidding too close to your valuation earns little surplus

**Second-price sealed-bid (Vickrey) auction:**

- All bidders submit sealed bids simultaneously
- The highest bidder wins but pays the second-highest bid
- Dominant strategy: bid your true valuation. Since you pay the second-highest bid, you never pay
  more than the item is worth to you, and bidding your true value maximises your chance of winning
- Revenue equivalence: the Vickrey auction yields the same expected revenue as the English auction

### Revenue Equivalence Theorem

The revenue equivalence theorem states that , all standard auction Formats (English, Dutch,
first-price sealed-bid, second-price sealed-bid) yield the same Expected revenue for the seller and
the same expected surplus for the buyer with the highest Valuation.

**Conditions:**

1. Bidders are risk-neutral
2. Bidders have independent private values (each bidder's valuation is drawn independently from the
   same distribution)
3. Bidders are symmetric (same distribution of valuations)
4. Payment depends only on bids (no entry fees, etc.)

When these conditions are violated:

- **Risk aversion**: first-price auctions yield higher revenue than second-price auctions
  (risk-averse bidders bid higher in first-price auctions to reduce the risk of losing)
- **Common values**: when the item has the same underlying value but bidders have different
  information (e.g., oil leases), the winner's curse can arise
- **Correlated values**: when bidders' valuations are positively correlated, English auctions yield
  more revenue than sealed-bid auctions (because bidders can update their valuations based on when
  others drop out)

### The Winner's Curse

In common-value auctions, each bidder has an estimate of the item's true value, but all Estimates
are imperfect. The bidder with the highest estimate (the winner) is likely to have Overestimated the
value, because the highest of several noisy estimates tends to exceed the True value.

$$E[\text{True value} | \text{Winning} ] < \text{Winning bid}$$

**Example:** bidding for an oil lease. Each firm commissions a geological survey estimating the
Amount of oil. The firm with the highest estimate wins the auction but discovers that the Actual
amount of oil is less than estimated (because it had the most optimistic survey).

**Rational response to the winner's curse:** experienced bidders shade their bids downward to
Compensate for the expected overestimation. The more bidders competing, the stronger the Winner's
curse and the more aggressively bidders must shade their bids.

### Mechanism Design: The Revelation Principle

Mechanism design is the reverse of game theory: instead of analysing the outcome of a given Game,
the designer asks "what game (rules) should I create to achieve a desired outcome?"

The **revelation principle** states that for any mechanism that achieves a particular outcome, There
exists an equivalent direct mechanism in which participants truthfully reveal their private
Information.

**Implications:**

- The designer can focus on direct revelation mechanisms without loss of generality
- A mechanism is incentive-compatible if truth-telling is a dominant strategy for each participant
- The challenge is to design mechanisms that are simultaneously incentive-compatible,
  budget-balanced, and efficient (maximising total surplus)

### Common Pitfalls in Auction Theory

- Confusing first-price and second-price auction strategies. In a first-price auction, you should
  bid below your valuation; in a second-price auction, you should bid your true valuation
- Ignoring the winner's curse in common-value auctions. Bidders who do not account for the winner's
  curse systematically overpay
- Assuming revenue equivalence always holds. On specific assumptions about risk neutrality,
  independence, and symmetry
- Confusing private values with common values. Private value auctions (art, collectibles) differ
  fundamentally from common value auctions (mineral rights, spectrum licences)

## Advanced Behavioural Topics (HL Extension)

### Altruism and Public Goods Games

The standard economic model predicts that rational, self-interested individuals will not Contribute
to public goods (free riding). Experimental evidence consistently contradicts this:

- In one-shot public goods games, individuals contribute 40--60% of their endowment
- Contributions decline with repetition but do not reach zero
- Some individuals consistently contribute at high levels ("conditional cooperators": they
  contribute if others do)
- A small minority always free-rides

**Fischbacher and Gachter (2010):** individuals can be classified as:

1. **Conditional cooperators** (~50%): contribute more when others contribute more
2. **Free riders** (~30%): contribute nothing regardless of others' contributions
3. **Triangle contributors** (~20%): other patterns

**Implications for policy:**

- Tax compliance cannot be explained solely by deterrence (audits, penalties). Social norms, trust
  in government, and perceptions of fairness also matter
- Public awareness campaigns that highlight the contributions of others can increase cooperation
  (social proof)
- Punishment of free-riders (even at a cost to the punisher) can sustain cooperation, suggesting a
  role for social sanctions

### Fairness and the Ultimatum Game

In the ultimatum game, Player 1 proposes a split of a fixed sum (e.g., `USD 10`). Player 2 can
Accept (both receive the proposed split) or reject (both receive nothing).

**Standard prediction:** Player 1 offers the minimum possible (e.g., `USD 0.01`); Player 2 Accepts
because something is better than nothing.

**Experimental findings:**

- Average offers are 40--50% of the total
- Offers below 20% are frequently rejected
- Results are remarkably consistent across cultures, though the exact proportions vary

**Interpretation:** people care about fairness, not just material payoffs. Rejecting a low offer Is
a costly signal that unfairness is unacceptable. This behaviour contradicts the standard Model of
self-interested utility maximisation.

### Mental Accounting: Extended Analysis

**Thaler's four principles of mental accounting:**

1. **Segregation**: gains are segregated (framed separately), while losses are integrated (combined)
2. **Cancellation**: when a gain and a loss are linked, they are evaluated together (hedonic
   framing)
3. **Integration**: losses are combined with larger gains to reduce the pain of loss
4. **Separation**: small gains are separated from larger losses to provide a silver lining

**Application to pricing:**

- **Bundling**: firms bundle a high-margin product with a low-margin product. Consumers evaluate the
  bundle as a single gain, reducing their sensitivity to the price of the high-margin component
- **Partitioned pricing**: quoting a product price plus a separate shipping fee feels cheaper than
  quoting the all-inclusive price (consumers may not fully add the components)
- **Drip pricing**: revealing additional fees incrementally reduces the perceived total cost
  relative to upfront disclosure

### Common Pitfalls in Advanced Behavioural Economics

- Overgeneralising laboratory findings to real-world settings. Behavioural effects observed with
  small stakes may not apply to high-stakes decisions
- Assuming all behavioural biases are "irrational." Many heuristics are ecologically rational --
  they produce good decisions in the environments where they evolved
- Neglecting individual heterogeneity. Different people exhibit different biases to different
  degrees
- Confounding correlation with causation in field experiments. Even randomised controlled trials may
  have spillover effects, Hawthorne effects, or selection bias

## Additional Practice Problems

<details>
<summary>Problem 9: Auction Strategy</summary>

You are bidding in a second-price sealed-bid auction for a painting. Your private valuation of The
painting is `USD 800`. You believe there are 3 other bidders, each with valuations uniformly
Distributed between `USD 0` and `USD 1,000`.

(a) What is your optimal bid?

(b) What is the probability that you win the auction?

(c) What is your expected surplus if you win?

(a) In a second-price sealed-bid auction, the dominant strategy is to bid your true valuation. Your
optimal bid is `USD 800`.

If you bid less (e.g., `USD 700`), you risk losing to a bidder with a valuation between 700 And 800
who bids their true valuation (between 700 and 800). You would lose an item you Value at 800 and pay
less than 800, earning a positive surplus.

If you bid more (e.g., `USD 900`), you risk winning when the second-highest bid is between 800
And 900. You would pay more than your valuation (800), earning a negative surplus.

(b) You win if your bid (800) is the highest of the four bids. The other three bids are Uniformly
distributed on [0, 1000]. The probability that all three are below 800 is:

$P(\text{win}) = (800/1000)^3 = 0.8^3 = 0.512$ (51.2%)

(c) Given that you win, the second-highest bid is the maximum of three uniform [0, 800] Draws. The
expected value of the maximum of $n$ uniform [0, b] draws is:

$E[\text{second bid} | \text{win}] = \frac{3}{4} \times 800 = 600$

Your expected surplus $= 800 - 600 = \$200$.

Expected surplus unconditional: $0.512 \times 200 = \$102.40$.

</details>
<summary>Problem 10: Public Goods Game and Policy</summary>

A village of 100 households is considering contributing to a new well that costs `USD 10,000`. Each
household values the well at `USD 200`. The village leader proposes that each household Contributes
`USD 100`With the government covering the remaining `USD 0` (since $100 \times 100 = 10,000$).

(a) Is this project socially efficient? Explain.

(b) Why might the voluntary contribution scheme fail?

(c) How might the village leader use behavioural insights to ensure the project is funded?

(a) Total value to the village $= 100 \times 200 = \$20\,000$. Total cost $= \$10\,000$. Net benefit
$= \$10\,000 > 0$. The project is socially efficient.

Each household's individual benefit ($200) exceeds the cost per household ($100), so contributing Is
individually rational as well. However, the well is a public good (non-excludable, non-rival), So
free-riding is possible.

(b) The voluntary scheme may fail because:

- Each household reasons: "If others contribute, the well will be built regardless of my
  contribution, so I can free-ride." This is the dominant strategy in a one-shot game
- If many households think this way, too few contribute and the well is not built (even though
  everyone would benefit from it)
- Coordination problems: households may be uncertain whether others will contribute, leading to a
  "wait and see" approach

(c) **Behavioural strategies:**

1. **Default contribution**: make the `USD 100` contribution the default (opt-out rather than
   opt-in). Status quo bias will lead most households to accept the default

2. **Social proof**: publicise the names of households that have already contributed. People are
   more likely to contribute when they know others are contributing (conditional cooperation)

3. **Public commitment**: ask households to publicly pledge their contribution at a village meeting.
   Social pressure and commitment consistency increase follow-through

4. **Framing**: frame the contribution as "your share of the well" rather than "a payment." People
   are more willing to pay when they feel they are getting something specific in return

5. **Matching**: announce that a donor will match each contribution. Matching increases the
   perceived value of contributing and creates a sense of partnership

6. **Sunk cost leverage**: start construction using a small initial fund. Once construction has
   begun, households will feel committed to completing the project (sunk cost fallacy applied
   positively)

## Bayesian Games and Incomplete Information (HL Extension)

### Games with Incomplete Information

In the games discussed so far, all players know the payoffs of all other players. In reality,
Players often have private information that others do not know. A **Bayesian game** (or **game of
Incomplete information**) models this situation using probability distributions.

**Harsanyi's transformation (1967):** any game of incomplete information can be represented as A
Bayesian game by introducing **types** and **beliefs**:

1. **Types**: each player has a set of possible types (e.g., a firm might have "low cost" or "high
   cost" technology). A player's type determines their payoffs
2. **Beliefs**: each player has a prior probability distribution over the types of other players
3. **Strategies**: a strategy specifies an action for each possible type

### Bayesian Nash Equilibrium

A **Bayesian Nash equilibrium** is a strategy profile where each type of each player plays a Best
response to the strategies of all other types, given their beliefs.

Formally, for each player $i$ with type $\theta_i$:

$$s_i^*(\theta_i) \in \arg\max_{s_i} \sum_{\theta_{-i}} p_i(\theta_{-i} | \theta_i) \cdot u_i(s_i, s_{-i}^*, \theta_i, \theta_{-i})$$

### Worked Example: Entry Game with Incomplete Information

An incumbent firm (player 2) can be either "strong" (low cost, can fight profitably) or "weak" (high
cost, fighting is costly). A potential entrant (player 1) does not know the incumbent's Type but
believes each is equally likely ($p = 0.5$).

**Payoffs (entrant, incumbent):**

| Scenario                               | Strong Incumbent | Weak Incumbent |
| -------------------------------------- | ---------------- | -------------- |
| Entrant stays out                      | (0, 10)          | (0, 10)        |
| Entrant enters, Incumbent accommodates | (3, 5)           | (3, 5)         |
| Entrant enters, Incumbent fights       | (-2, 3)          | (-2, -3)       |

**Analysis:**

For the **strong** incumbent: if the entrant enters, compare Accommodate (5) vs. Fight (3). The
Strong incumbent fights (payoff $3 > 5$ is false; actually $3 < 5$So the strong incumbent
Accommodates). Wait -- let me re-examine. With payoffs as stated:

For the **strong** incumbent: Accommodate $= 5$Fight $= 3$. Since $5 > 3$The strong Incumbent
accommodates.

For the **weak** incumbent: Accommodate $= 5$Fight $= -3$. Since $5 > -3$The weak incumbent also
Accommodates.

In this case, the entrant knows the incumbent will always accommodate, so the entrant always Enters.
This is not very interesting. Let me adjust the payoffs to create a meaningful Incomplete
information game:

**Revised payoffs:**

| Scenario                               | Strong Incumbent | Weak Incumbent |
| -------------------------------------- | ---------------- | -------------- |
| Entrant stays out                      | (0, 10)          | (0, 10)        |
| Entrant enters, Incumbent accommodates | (3, 5)           | (3, 5)         |
| Entrant enters, Incumbent fights       | (-2, 6)          | (-2, -3)       |

For the **strong** incumbent: Accommodate $= 5$Fight $= 6$. Since $6 > 5$The strong incumbent
Fights.

For the **weak** incumbent: Accommodate $= 5$Fight $= -3$. Since $5 > -3$The weak incumbent
Accommodates.

The entrant's expected payoff from entering:

$$E[\text{payoff}] = 0.5 \times (-2) + 0.5 \times 3 = -1 + 1.5 = 0.5$$

Since $0.5 > 0$ (the payoff from staying out), the entrant enters.

**Bayesian Nash equilibrium:**

- Entrant: Enter
- Strong incumbent: Fight
- Weak incumbent: Accommodate

### Signalling

When one player has private information, they may try to **signal** their type to the other Player.
A **signal** is an observable action that is costly and may be correlated with the Player's type.

**Example: education as a signal of productivity.** In Spence's (1973) job market signalling Model,
a worker knows their own productivity (high or low) but the employer does not. Education Is costly:
for high-productivity workers, education costs $c_H$ per year; for low-productivity Workers, it
costs $c_L > c_H$.

A **separating equilibrium** exists if the cost difference is large enough that high-productivity
Workers obtain education while low-productivity workers do not:

$$w_H - w_L > c_H \cdot e \quad \text{but} \quad w_H - w_L < c_L \cdot e$$

Where $e$ is the required education level, $w_H$ is the wage paid to educated workers, and $w_L$ is
The wage paid to uneducated workers.

The separating equilibrium condition is:

$$\frac{w_H - w_L}{c_H} > e > \frac{w_H - w_L}{c_L}$$

This interval must be non-empty for a separating equilibrium to exist.

### Screening

**Screening** occurs when the uninformed party designs a mechanism to induce the informed party To
reveal their private information through their choices.

**Example: insurance markets.** An insurance company cannot observe a driver's risk type (safe or
reckless). It offers two policies:

- **Full coverage** at premium $p_H$ (designed for high-risk drivers)
- **Partial coverage** at premium $p_L < p_H$ with a deductible $d$

Safe drivers prefer partial coverage with the lower premium; reckless drivers prefer full Coverage
despite the higher premium. The menu of contracts **screens** the two types.

The screening condition for the safe type to choose partial coverage:

$$u_s(\text{partial}) > u_s(\text{full})$$

And for the reckless type to choose full coverage:

$$u_r(\text{full}) > u_r(\text{partial})$$

Where $u$ denotes expected utility under each contract.

### Mechanism Design Applications

**Mechanism design** is the reverse of game theory: the designer specifies the rules of the Game to
achieve a desired outcome, anticipating how rational agents will respond.

**Key concepts:**

1. **Incentive compatibility**: a mechanism is incentive-compatible if truth-telling is a best
   response for every participant type

2. **Individual rationality**: each participant must prefer participating to not participating

3. **The revelation principle**: any outcome achievable by any mechanism can also be achieved by a
   direct mechanism where participants report their types, provided truth-telling is
   incentive-compatible

**Practical applications:**

- **Spectrum auctions**: governments design auction rules to allocate radio frequencies efficiently,
  raising revenue while preventing monopolisation
- **Procurement**: governments design bidding processes to select contractors efficiently while
  preventing collusion
- **Matching markets**: school choice systems (e.g., Boston's school assignment mechanism) use
  strategy-proof mechanisms to allocate students to schools
- **Regulation**: pollution permit allocation, spectrum sharing, airport slot allocation

## Worked Examples: Advanced Game Theory (HL Extension)

### Details

<summary>Problem 11: Bayesian Nash Equilibrium</summary>

Two firms are bidding for a government contract. Firm 1's cost of completing the project is Either
$c_L = 10$ or $c_H = 20$Each with probability 0.5. Firm 2's cost is always $c_2 = 15$. Firm 1 knows
its own cost but Firm 2 only knows the probability distribution.

The government uses a first-price sealed-bid auction. The firm with the lowest bid wins and is Paid
its bid.

(a) Find the Bayesian Nash equilibrium bidding strategy for Firm 1.

(b) What is Firm 2's equilibrium bid?

(a) Firm 1's strategy: if its cost is $c_L = 10$It bids $b_L$; if its cost is $c_H = 20$It bids
$b_H$.

In a first-price auction with independent private values, the equilibrium bid for a player with Cost
$c_i$ drawn from distribution $F$ on $[\underline{c}, \overline{c}]$ is:

$$b_i(c_i) = \frac{1}{F(c_i)} \int_{\underline{c}}^{c_i} y \, f(y) \, dy$$

For Firm 1 with cost $c \sim \text{Uniform}[10, 20]$:

$$b_1(c) = \frac{1}{(c - 10)/10} \int_{10}^{c} y \cdot \frac{1}{10} \, dy = \frac{10}{c - 10} \cdot \frac{y^2}{20} \bigg|_{10}^{c} = \frac{10}{c - 10} \cdot \frac{c^2 - 100}{20}$$

$$b_1(c) = \frac{c^2 - 100}{2(c - 10)} = \frac{(c - 10)(c + 10)}{2(c - 10)} = \frac{c + 10}{2}$$

When $c = 10$: $b_1 = (10 + 10)/2 = 10$ (bids at cost, earning zero surplus)

When $c = 20$: $b_1 = (20 + 10)/2 = 15$ (shades bid downward by $5$)

For the low-cost type: $b_L = 10$

For the high-cost type: $b_H = 15$

(b) Firm 2 has a known cost of 15. Firm 2 must bid against Firm 1, whose bid is uncertain from Firm
2's perspective.

Firm 2 believes Firm 1's cost is uniformly distributed on $[10, 20]$. Firm 1's bidding function Is
$b_1(c) = (c + 10)/2$.

Since $b_1$ is monotonically increasing in $c$And $c$ is uniform on $[10, 20]$:

$b_1$ is uniform on $[10, 15]$.

Firm 2 wins when its bid is below Firm 1's bid. Firm 2's expected profit when bidding $b_2$:

$$E[\pi_2] = (b_2 - 15) \cdot P(b_2 < b_1) = (b_2 - 15) \cdot \frac{b_2 - 10}{5}$$

Maximising: $\frac{d}{db_2}\left[(b_2 - 15)(b_2 - 10)\right] = 2b_2 - 25 = 0$

$b_2 = 12.5$

Firm 2's equilibrium bid is 12.5, shading its cost (15) downward by 2.5.

Expected profit for Firm 2: $(12.5 - 15)(12.5 - 10)/5 = (-2.5)(2.5)/5 = -1.25$

Firm 2 earns negative expected profit because it faces the risk of winning when Firm 1 has a Very
low cost. This illustrates the **winner's curse**: in common-value auctions, winning is bad News
about the winner's bid relative to competitors' costs.

<details>
<summary>Problem 12: Signalling Equilibrium</summary>

A job applicant's productivity is either $\theta_H = 50$ or $\theta_L = 20$. The employer cannot
Observe productivity but offers wage $w_H = 40$ to college graduates and $w_L = 25$ to
Non-graduates. Education costs $e$ years; the cost per year is $c_H = 4$ for high-productivity
Workers and $c_L = 10$ for low-productivity workers.

(a) Find the range of education levels $e$ that can sustain a separating equilibrium.

(b) Explain why a pooling equilibrium may fail.

(a) For a separating equilibrium:

- High-productivity workers must obtain education: $w_H - w_L \geq c_H \cdot e$
- Low-productivity workers must not obtain education: $w_H - w_L < c_L \cdot e$

Substituting:

$40 - 25 = 15 \geq 4e \implies e \leq 3.75$

$40 - 25 = 15 < 10e \implies e > 1.5$

So any education level $e \in (1.5, 3.75]$ can serve as a separating signal. The employer Interprets
education $e \geq e^*$ as a signal of high productivity and offers $w_H$.

In equilibrium, the minimum signal is $e^* = 1.5 + \epsilon$ (slightly above 1.5). High-productivity
Workers obtain $e^*$ years of education; low-productivity workers do not.

(b) A **pooling equilibrium** (where both types make the same education choice) fails because The
employer cannot distinguish between types and would offer an average wage:
$w_p = 0.5 \times 40 + 0.5 \times 25 = 32.5$

High-productivity workers would deviate: their education cost ($4e$) is lower than their wage Gain
($40 - 32.5 = 7.5$), so they would obtain more education to separate themselves.

Therefore, the only stable equilibrium is the separating one.

</details>
<summary>Problem 13: Prospect Theory Calculations</summary>

A student must choose between two exam preparation strategies:

- Strategy A: 70% chance of scoring 70, 30% chance of scoring 40
- Strategy B: 50% chance of scoring 80, 50% chance of scoring 30

The student's reference point is a score of 60.

(a) Calculate the expected value of each strategy.

(b) Using prospect theory (loss aversion coefficient $\lambda = 2$Probability weighting function
$\pi(p) = p^{0.65}$), calculate the prospect theory value of each strategy.

(c) Which strategy does prospect theory predict the student will choose?

(a) $EV_A = 0.7 \times 70 + 0.3 \times 40 = 49 + 12 = 61$

$EV_B = 0.50 \times 80 + 0.50 \times 30 = 40 + 15 = 55$

Under expected utility, the student chooses Strategy A ($61 > 55$).

(b) Prospect theory calculation:

**Strategy A:**

Outcomes relative to reference point (60):

- Gain of 10 with probability 0.70
- Loss of 20 with probability 0.30

Probability weights: $\pi(0.70) = 0.70^{0.65} = 0.792$$\pi(0.30) = 0.30^{0.65} = 0.415$

Prospect theory value:

$$V_A = \pi(0.70) \cdot v(10) + \pi(0.30) \cdot v(-20)$$

Using the value function $v(x) = x^{0.88}$ for gains and $v(x) = -\lambda|x|^{0.88}$ for losses:

$v(10) = 10^{0.88} = 7.59$

$v(-20) = -2 \times 20^{0.88} = -2 \times 15.60 = -31.20$

$V_A = 0.792 \times 7.59 + 0.415 \times (-31.20) = 6.01 - 12.95 = -6.94$

**Strategy B:**

Outcomes relative to reference point (60):

- Gain of 20 with probability 0.50
- Loss of 30 with probability 0.50

$\pi(0.50) = 0.50^{0.65} = 0.637$$\pi(0.50) = 0.637$ (same)

$v(20) = 20^{0.88} = 15.60$

$v(-30) = -2 \times 30^{0.88} = -2 \times 22.65 = -45.30$

$V_B = 0.637 \times 15.60 + 0.637 \times (-45.30) = 9.94 - 28.86 = -18.92$

(c) Prospect theory predicts Strategy A ($V_A = -6.94 > V_B = -18.92$), which is the same as
expected Utility in this case. However, the intuition differs:

- Strategy A has a smaller potential loss (-20 vs. -30) and a higher probability of a gain
- The loss aversion coefficient makes the larger potential loss in Strategy B particularly aversive
- The probability weighting overweights the 50% probability of a large loss in Strategy B

If the reference point were lower (e.g., 40), the analysis would shift significantly toward Strategy
A, as both strategies would involve only gains.

## Common Pitfalls: Advanced Game Theory (Comprehensive)

- Assuming that Bayesian Nash equilibrium requires players to know each other's types. Players only
  need to know the probability distribution of others' types
- Confusing signalling with screening. Signalling is initiated by the informed party; screening is
  initiated by the uninformed party
- Assuming that all separating equilibria are efficient. The equilibrium with the highest education
  requirement ($e = 3.75$) wastes resources on signalling -- the same separation could be achieved
  with less education
- Applying the revelation principle without understanding its scope. The revelation principle says
  an equivalent direct mechanism exists, but it does not guarantee that finding or implementing it
  is practical
- Ignoring mixed strategies in Bayesian games. Just as complete information games can have mixed
  strategy equilibria, Bayesian games can have mixed strategy Bayesian Nash equilibria
- Overstating the practical relevance of mechanism design. Many real-world allocation problems
  involve computational complexity that makes optimal mechanism design intractable

## Repeated Games and Cooperation (HL Extension)

### The Finitely Repeated Prisoner's Dilemma

When the prisoner's dilemma is repeated a known, finite number of times, backward induction Predicts
defection in every round:

$$\text{Round } T: \text{defect (no future punishment possible)}$$
$$\text{Round } T-1: \text{defect (round } T \text{ will be defection regardless)}$$ $$\vdots$$
$$\text{Round 1: defect}$$

The unique subgame perfect equilibrium is (Defect, Defect) in every round.

### The Infinitely Repeated Prisoner's Dilemma

When the game is repeated infinitely (or with an unknown endpoint), cooperation can be sustained As
a Nash equilibrium.

**Grim trigger strategy:** cooperate as long as the other player cooperates; if the other player
Defects once, defect forever.

**Cooperation condition:** cooperation is sustainable if the present discounted value of Cooperating
exceeds the one-time gain from defection:

$$\frac{g}{1 - \delta} \geq t$$

Where:

- $g$ = gain per round from mutual cooperation (vs. Mutual defection)
- $t$ = temptation payoff from unilateral defection
- $\delta$ = discount factor ($0 < \delta < 1$)

Rearranging:

$$\delta \geq \frac{t - g}{t - p}$$

Where $p$ is the punishment payoff (mutual defection).

**Numerical example:**

Payoff matrix:

|           | Cooperate | Defect |
| --------- | --------- | ------ |
| Cooperate | (3, 3)    | (0, 5) |
| Defect    | (5, 0)    | (1, 1) |

$g = 3 - 1 = 2$$t = 5$$p = 1$.

$\delta \geq (5 - 3)/(5 - 1) = 2/4 = 0.5$

If $\delta \geq 0.5$ (players value future payoffs at least half as much as current payoffs),
Cooperation is sustainable under grim trigger.

### Axelrod's Tournament

Robert Axelrod (1984) ran a computer tournament where strategies for the repeated prisoner's Dilemma
competed against each other. The winner was **Tit-for-Tat** (Anatol Rapoport):

1. Cooperate in the first round
2. In subsequent rounds, do whatever the opponent did in the previous round

**Why Tit-for-Tat works:**

1. **Nice:** never defects first, so it can cooperate with other cooperative strategies
2. **Retaliatory:** punishes defection immediately, preventing exploitation
3. **Forgiving:** returns to cooperation as soon as the opponent does, avoiding permanent punishment
   spirals
4. **Clear:** simple and predictable, so opponents can understand the consequences of their actions

### Applications of Repeated Games

1. **Oligopoly pricing:** firms in an oligopoly can sustain collusive (monopoly) pricing if the game
   is repeated and the discount factor is high enough. The condition is:

$$\delta \geq \frac{1}{n}$$

Where $n$ is the number of firms. More firms make cooperation harder (the discount factor must Be
higher). With 2 firms, $\delta \geq 0.5$; with 10 firms, $\delta \geq 0.9$.

2. **International trade agreements:** WTO rules can be understood as a repeated game. Countries
   comply with trade rules because the long-run benefit of open trade exceeds the short-run gain
   from protectionism
3. **Environmental agreements:** the tragedy of the commons can be overcome through repeated
   interaction. Communities that interact repeatedly can sustain cooperative resource management

## Auction Theory (HL Extension)

### Types of Auctions

1. **English (ascending-price) auction:** price rises until only one bidder remains
2. **Dutch (descending-price) auction:** price falls until a bidder accepts
3. **First-price sealed-bid auction:** highest bidder wins and pays their bid
4. **Second-price sealed-bid (Vickrey) auction:** highest bidder wins and pays the second-highest
   bid

### Revenue Equivalence Theorem

(risk-neutral bidders, independent private values, symmetric bidders), All four auction formats
yield the same expected revenue for the seller.

**Vickrey auction dominance:** the second-price auction has a dominant strategy equilibrium Where
each bidder bids their true valuation. This is because:

- If you bid above your valuation, you might win but pay more than the item is worth
- If you bid below your valuation, you might lose an item you would have won at a price below your
  valuation
- Bidding your true valuation is weakly dominant

### Winner's Curse

In common-value auctions (where the item has the same value for all bidders, but no one knows The
exact value), the winner tends to be the bidder who most overestimated the value.

**Formal model:**

Suppose the true value of an oil field is $V$And each bidder receives a signal
$s_i = V + \epsilon_i$ Where $\epsilon_i$ is noise.

The expected value of $V$ given that you won the auction is:

$$E[V | s_i \text{ is the highest signal}] < s_i$$

Because winning the auction provides information that your signal was likely the most optimistic.

**Mitigation:** rational bidders should shade their bids below their signal:

$$\text{Optimal bid} = s_i - \frac{\sigma^2}{s_i}$$

Where $\sigma^2$ is the variance of the signal noise. The more uncertain the value, the more Bidders
should shade their bids.

**Numerical example:**

Three oil companies bid on an offshore oil field. Each estimates the field's value with Uncertainty:

- Company A: $s_A = 100$ million
- Company B: $s_B = 80$ million
- Company C: $s_C = 90$ million

In a first-price auction, Company A wins with a bid of 100 million. But $E[V | A \text{ wins}]$ Is
less than 100 million because A had the highest signal, suggesting A was the most optimistic.

If the signals have standard deviation of 20 million:

Approximate correction for A: $\text{bid} = 100 - 20^2/100 = 100 - 4 = 96$ million.

Company A should bid approximately 96 million rather than 100 million to avoid the winner's curse.

### Auction Applications

1. **Spectrum auctions:** governments use auctions to allocate radio spectrum to telecom companies.
   The 3G spectrum auction in the UK (2000) raised GBP 22.5 billion
2. **Treasury auctions:** central banks use auctions to sell government bonds
3. **Online advertising:** Google's AdWords auction is a generalised second-price auction
4. **Art and antiques:** Christie's and Sotheby's use English auctions

## Exam-Style Questions: Game Theory (HL Extension)

<details>
<summary>Question 1: Repeated Prisoner's Dilemma and Oligopoly (10 marks)</summary>

Two firms, A and B, compete in a market. They can either set a high price (cooperate) or a low Price
(defect). The payoff matrix (annual profits in USD million) is:

|            | High Price | Low Price |
| ---------- | ---------- | --------- |
| High Price | (10, 10)   | (0, 15)   |
| Low Price  | (15, 0)    | (3, 3)    |

The discount factor is $\delta = 0.8$.

(a) Identify the Nash equilibrium of the one-shot game. [2 marks]

(b) Show that cooperation can be sustained using grim trigger. [4 marks]

(c) A third firm enters the market. Can cooperation still be sustained? Explain. [4 marks]

(a) Each firm has a dominant strategy to set a low price (15 > 10 and 3 > 0). The unique Nash
Equilibrium is (Low Price, Low Price) with payoffs (3, 3).

(b) Gain from cooperation: $g = 10 - 3 = 7$ per year. Temptation: $t = 15$.

Grim trigger condition: $\delta \geq (t - g)/(t - p) = (15 - 10)/(15 - 3) = 5/12 = 0.417$

Since $\delta = 0.8 > 0.417$Cooperation is sustainable. The present value of cooperation:
$10 + 10(0.8) + 10(0.8)^2 + \cdots = 10/(1 - 0.8) = 50$.

The present value of defection:
$15 + 3(0.8) + 3(0.8)^2 + \cdots = 15 + 3 \times 0.8/(1 - 0.8) = 15 + 12 = 27$.

$50 > 27$: cooperation yields higher lifetime profits.

(c) With three firms using grim trigger, the condition becomes:

$\delta \geq 1/n = 1/3 = 0.333$

Since $\delta = 0.8 > 0.333$Cooperation is still sustainable in theory. However, with more Firms,
the incentive to defect increases because each firm's share of the cooperative payoff Decreases, and
monitoring becomes harder. The probability of accidental defection or deviation Rises with the
number of firms.

</details>

<details>
<summary>Question 2: Auction Design (10 marks)</summary>

A government is selling a mining licence. Two mining companies bid. Each company's private Valuation
is independently drawn from a uniform distribution on [USD 0, USD 100 million].

(a) In a first-price sealed-bid auction, what is the optimal bid for a company with valuation v? [3
marks]

(b) Calculate the optimal bid for valuations of USD 60 million and USD 80 million. [2 marks]

(c) The government considers using a second-price (Vickrey) auction. Explain why the expected
revenue is the same as the first-price auction. [5 marks]

(a) In a first-price sealed-bid auction with two bidders and valuations uniformly distributed on
$[0, V]$The symmetric equilibrium bidding strategy is:

$$b(v) = \frac{n-1}{n} \cdot v = \frac{1}{2} v$$

Each bidder shades their bid to half their valuation.

(b) For $v = 60$: $b = 30$ million. For $v = 80$: $b = 40$ million.

(c) By the **Revenue Equivalence Theorem**, the expected revenue is the same in both auction Formats
under the conditions given (risk-neutral bidders, independent private values, symmetric Bidders).

In the first-price auction: expected revenue $= E[b(v_{(1)})]$ where $v_{(1)}$ is the highest
Valuation. $E[v_{(1)}] = 2V/3 = 66.7$ million, so expected revenue $= 33.3$ million.

In the second-price auction: expected revenue $= E[v_{(2)}]$ where $v_{(2)}$ is the second-highest
Valuation. $E[v_{(2)}] = V/3 = 33.3$ million.

Both yield expected revenue of 33.3 million. The second-price auction is simpler for bidders (bid
your true valuation) and avoids the winner's curse, but yields the same expected revenue For the
seller.

**Practical advantage of Vickrey:** bidders do not need to strategise about how much to shade Their
bids, reducing the complexity of participation and encouraging more bidders to enter. More bidders
increase expected revenue in both formats.

</details>

<details>
<summary>Question 3: Behavioural Economics and Policy Design (10 marks)</summary>

A government wants to increase pension contributions. Currently, 40% of eligible workers Contribute
to a pension scheme. Research shows:

- With an opt-in system: 40% enrolment
- With an opt-out system: 92% enrolment
- With an active choice (mandatory decision): 75% enrolment

(a) Which behavioural bias does the opt-in/opt-out difference illustrate? [2 marks]

(b) Calculate the increase in annual pension contributions if 10 million workers each contribute an
average of USD 2,000 more per year under opt-out. [2 marks]

(c) Evaluate the use of defaults as a policy tool. [6 marks]

(a) **Status quo bias** and **default effects**. Individuals tend to stick with the default Option
because changing requires active effort, and losses (the effort of enrolment) are Weighted more
heavily than gains (future pension benefits).

(b) Additional contributors $= (92\% - 40\%) \times 10 = 5.2$ million.

Additional annual contributions $= 5.2 \times 2\,000 = 10.4$ billion.

(c) **Evaluation of defaults as a policy tool:**

_Advantages:_

1. **Effectiveness:** opt-out systems dramatically increase participation (40% to 92%)
2. **Low cost:** defaults require minimal administrative change compared to financial incentives or
   mandates
3. **Preserves choice:** workers can still opt out if they have strong preferences against saving
4. **Evidence-based:** extensive empirical evidence from the UK, US, and other OECD countries
   confirms the effectiveness of automatic enrolment

_Disadvantages:_

1. **Paternalism:** defaults manipulate choice architecture without explicit consent. Some argue
   this undermines autonomy
2. **Heterogeneity:** the optimal default varies across individuals. A single default may not be
   appropriate for low-income workers who need current consumption
3. **Limited effect on contribution rates:** automatic enrolment increases the number of
   contributors but not necessarily the contribution rate (many stick with the minimum default rate)
4. **May crowd out financial literacy:** reliance on defaults may reduce individuals' engagement
   with their financial decisions

_Conclusion:_ defaults are a powerful and cost-effective policy tool, but should be Complemented
with financial education and flexible options for those with different needs.

</details>

## Case Studies: Game Theory and Behavioural Economics (HL Extension)

### OPEC and Repeated Game Theory

OPEC (Organisation of Petroleum Exporting Countries) is a real-world example of a repeated game With
incomplete monitoring:

1. **Cooperation (cartel):** OPEC sets production quotas to maintain high oil prices
2. **Defection:** individual members exceed their quotas to increase revenue
3. **Punishment:** OPEC lacks a formal enforcement mechanism, but Saudi Arabia has historically
   acted as the "swing producer," increasing output to punish defectors by driving prices down
4. **Credibility:** Saudi Arabia's willingness to absorb short-term losses to punish defectors
   enhances the credibility of the grim trigger

**Empirical pattern:** OPEC cooperation tends to break down when:

- Oil prices are high (temptation to defect increases)
- New members join (more players make cooperation harder)
- Demand shocks create uncertainty about future payoffs

### Behavioural Economics in Practice: UK Behavioural Insights Team

The UK's Behavioural Insights Team ("Nudge Unit"), established in 2010, was the world's first
Government unit dedicated to applying behavioural economics to policy:

1. **Tax compliance:** sending letters informing taxpayers that "9 out of 10 people in your town pay
   their tax on time" increased on-time payments by 15 percentage points
2. **Organ donation:** the shift to an opt-out system (2015) was informed by behavioural evidence on
   default effects
3. **Job seeker compliance:** rewriting job centre letters in simpler language and adding social
   norms increased appointment attendance
4. **Energy efficiency:** providing households with comparisons of their energy use to neighbours
   reduced energy consumption by 2--6%

**Evaluation:** the BIT has demonstrated that low-cost behavioural interventions can achieve
Significant policy outcomes. However, effects are often modest, may decay over time, and raise
Questions about the ethics of state-sponsored "nudging."

## Evolutionary Game Theory (HL Extension)

### Replicator Dynamics

In evolutionary game theory, strategies are not chosen rationally but spread through a population
Based on their relative fitness (payoff). The **replicator equation** describes how the Frequency of
a strategy changes over time:

$$\frac{dx_i}{dt} = x_i \left[ f_i(\mathbf{{'}x{}'}) - \bar{f}(\mathbf{{'}x{}'}) \right]$$

Where:

- $x_i$ = frequency of strategy $i$ in the population
- $f_i(\mathbf{{'}x{}'})$ = fitness (expected payoff) of strategy $i$
- $\bar{f}(\mathbf{{'}x{}'})$ = average fitness of the population

Strategies with above-average fitness grow; those with below-average fitness shrink.

### Evolutionary Stable Strategies (ESS)

A strategy $s^*$ is an **evolutionary stable strategy** if, when adopted by the entire population,
No mutant strategy can invade:

$$u(s^*, s^*) \geq u(s, s^*) \text{ for all } s$$

And for any neutral mutant ($u(s, s^*) = u(s^*, s^*)$):

$$u(s^*, s) > u(s, s)$$

**Application to the Prisoner's Dilemma:**

In a population of Cooperators and Defectors, the payoff matrix is:

|           | Cooperate | Defect |
| --------- | --------- | ------ |
| Cooperate | (3, 3)    | (0, 5) |
| Defect    | (5, 0)    | (1, 1) |

If the population fraction of Cooperators is $x$:

Fitness of Cooperator: $f_C = 3x + 0(1-x) = 3x$

Fitness of Defector: $f_D = 5x + 1(1-x) = 1 + 4x$

Average fitness: $\bar{f} = x(3x) + (1-x)(1+4x) = 3x^2 + 1 + 4x - x - 4x^2 = 1 + 3x - x^2$

Replicator dynamics:

$$\frac{dx}{dt} = x(3x - 1 - 3x + x^2) = x(x^2 - 1) = x(x-1)(x+1)$$

Since $x \in [0, 1]$$\frac{dx}{dt} < 0$ for all $x \in (0, 1)$. Cooperators always decline.

Defect is the unique ESS. This shows that in a well-mixed population, cooperation cannot Survive in
a one-shot prisoner's dilemma.

### Spatial Games and Cooperation

When players interact with neighbours rather than randomly, cooperation can persist because
Cooperators cluster together and benefit from mutual cooperation, while defectors at the Boundary of
cooperator clusters are outcompeted.

**Spatial prisoner's dilemma:** if each cell in a grid plays the prisoner's dilemma with its Four
neighbours and adopts the strategy of its most successful neighbour, cooperators can Survive in
clusters because:

- Interior cooperators: surrounded by cooperators, high payoff
- Boundary defectors: some neighbours are cooperators, moderate payoff
- Interior defectors: surrounded by defectors, low payoff

This explains why cooperation is observed in nature despite the prisoner's dilemma logic.

### Hawk-Dove Game

The Hawk-Dove game models conflict over a resource of value $V$:

|      | Hawk                                        | Dove                                    |
| ---- | ------------------------------------------- | --------------------------------------- |
| Hawk | $\left(\frac{V-C}{2}, \frac{V-C}{2}\right)$ | $(V, 0)$                                |
| Dove | $(0, V)$                                    | $\left(\frac{V}{2}, \frac{V}{2}\right)$ |

Where $C$ is the cost of fighting.

**If $V > C$:** Hawk is dominant (the resource is worth fighting for)

**If $V < C$:** the ESS is a mixed strategy. Let $p$ = probability of playing Hawk:

$p \cdot \frac{V-C}{2} + (1-p) \cdot V = p \cdot 0 + (1-p) \cdot \frac{V}{2}$

$p(V-C)/2 + V - pV = V/2 - pV/2$

$pV/2 - pC/2 + V - pV = V/2 - pV/2$

$V - pV - pC/2 = V/2 - pV/2$

$V - pV + pV/2 - pC/2 = V/2$

$V - pV/2 - pC/2 = V/2$

$p(V + C)/2 = V - V/2 = V/2$

$p = V/(V + C)$

**Numerical example:** $V = 4$$C = 6$.

$p = 4/(4+6) = 0.4$.

The ESS is: play Hawk with probability 0.4, Dove with probability 0.6.

In a population at equilibrium, 40% play Hawk and 60% play Dove. The average payoff for both
Strategies is equal:

Hawk payoff $= 0.4 \times (-1) + 0.6 \times 4 = -0.4 + 2.4 = 2.0$

Dove payoff $= 0.4 \times 0 + 0.6 \times 2 = 0 + 1.2 = 1.2$

Wait -- these should be equal at the mixed ESS. Let me recalculate:

Hawk expected payoff
$= p \times \frac{V-C}{2} + (1-p) \times V = 0.4 \times (-1) + 0.6 \times 4 = 2.0$

Dove expected payoff $= p \times 0 + (1-p) \times V/2 = 0.4 \times 0 + 0.6 \times 2 = 1.2$

These are not equal, which indicates an error. The correct ESS condition requires equal payoffs:

$p \times \frac{V-C}{2} + (1-p)V = (1-p)\frac{V}{2}$

$p(V-C)/2 + V - pV = V/2 - pV/2$

Multiply through by 2: $p(V-C) + 2V - 2pV = V - pV$

$pV - pC + 2V - 2pV = V - pV$

$2V - pV - pC = V$

$p(V + C) = V$

$p = V/(V+C) = 4/10 = 0.4$

Now verify: Hawk payoff $= 0.4(-1) + 0.6(4) = 2.0$. Dove payoff $= 0.4(0) + 0.6(2) = 1.2$.

The discrepancy arises because the average population payoff is:

$\bar{f} = 0.4(2.0) + 0.6(1.2) = 0.8 + 0.72 = 1.52$

The replicator dynamics check: $\Delta x = x(f_H - \bar{f}) = 0.4(2.0 - 1.52) = 0.192 > 0$.

Hawks would grow, which contradicts the ESS. This suggests $p = 0.4$ is not the correct ESS. The
correct derivation: at the mixed ESS, the expected payoff of Hawk must equal the expected Payoff of
Dove.

Let me use the correct formula: the expected payoff of Hawk against a population playing Hawk With
probability $p$:

$f_H = p \cdot \frac{V-C}{2} + (1-p) \cdot V$

$f_D = p \cdot 0 + (1-p) \cdot \frac{V}{2}$

Setting $f_H = f_D$:

$p(V-C)/2 + (1-p)V = (1-p)V/2$

$pV/2 - pC/2 + V - pV = V/2 - pV/2$

$V - pV/2 - pC/2 = V/2$

$V/2 = p(V + C)/2$

$p = V/(V+C)$

This IS correct. Let me recheck the arithmetic with $V=4, C=6, p=0.4$:

$f_H = 0.4 \times (-6/2) + 0.6 \times 4 = 0.4(-1) + 2.4 = -0.4 + 2.4 = 2.0$

$f_D = 0.4 \times 0 + 0.6 \times 2 = 1.2$

$2.0 \neq 1.2$. Something is wrong. Let me recheck:

$f_H = p(V-C)/2 + (1-p)V$

$= 0.4(4-6)/2 + 0.6(4) = 0.4(-2/2) + 2.4 = 0.4(-1) + 2.4 = -0.4 + 2.4 = 2.0$

$f_D = (1-p)V/2 = 0.6(4)/2 = 0.6(2) = 1.2$

The payoffs are indeed not equal at $p = 0.4$. This means the standard formula needs Re-examination.
The correct ESS for Hawk-Dove is actually:

$p^* = V/C$ when $V < C$.

$p = 4/6 = 2/3 \approx 0.667$.

Check: $f_H = (2/3)(-1) + (1/3)(4) = -2/3 + 4/3 = 2/3$

$f_D = (2/3)(0) + (1/3)(2) = 2/3$

Now the payoffs are equal at $2/3$. The correct ESS is $p^* = V/C$Not $V/(V+C)$.

(The formula $V/(V+C)$ applies to a different normalisation of the game. With the standard Payoffs
above, the correct ESS is $p^* = V/C$.)

**Policy implication:** when the cost of conflict ($C$) is high relative to the value of the
Resource ($V$), aggression is rare ($p^* = V/C$ is small). This explains why most international
Disputes are resolved peacefully: the cost of war exceeds the value of the disputed Resource.

## Cognitive Biases and Decision-Making: Extended Analysis (HL Extension)

### Confirmation Bias

**Definition:** the tendency to seek, interpret, and remember information that confirms existing
Beliefs while ignoring or discounting contradictory evidence.

**Economic implications:**

1. **Investment:** investors may hold losing stocks too long (seeking confirming information about
   the stock's future prospects) and sell winning stocks too early
2. **Policy:** policymakers may interpret data in ways that confirm their preferred policy approach,
   leading to suboptimal decisions
3. **Hiring:** interviewers may ask questions designed to confirm their initial impression of a
   candidate

### Overconfidence Bias

**Definition:** individuals systematically overestimate their knowledge, ability, and the Precision
of their predictions.

**Evidence:**

- 93% of US drivers rate themselves as above average in safety (Svenson, 1981)
- Startup founders consistently overestimate the probability of success
- Stock traders overestimate the accuracy of their predictions

**Economic consequences:**

1. **Excessive trading:** overconfident investors trade too frequently, reducing returns through
   transaction costs (Barber and Odean, 2000: overconfident investors underperform by 3% per year)
2. **Under-diversification:** overconfident investors hold concentrated portfolios
3. **Entrepreneurial entry:** overconfidence leads to excessive market entry, reducing average
   profits for all firms (Camerer and Lovallo, 1999)

### Present Bias and Time Inconsistency

**Definition:** individuals disproportionately discount the near future relative to the distant
Future, leading to time-inconsistent preferences.

**Quasi-hyperbolic discounting (Laibson, 1997):**

$$U = u(c_t) + \beta \sum_{s=1}^{T} \delta^s u(c_{t+s})$$

Where $\beta < 1$ captures present bias ( $\beta \approx 0.7$) and $\delta$ is the Standard
exponential discount factor.

**Implications:**

1. **Under-saving:** individuals plan to save more in the future but fail to do so when the future
   arrives. The savings rate is lower than planned
2. **Procrastination:** tasks with immediate costs and future benefits are postponed
3. **Addiction:** the present bias explains why addictive behaviours persist despite long-term costs

**Numerical example:**

An individual with $\beta = 0.7$$\delta = 0.95$ chooses between:

Option A: receive USD 100 today Option B: receive USD 110 in one week

From today's perspective: $U(A) = 100$$U(B) = 0.7 \times 0.95 \times 110 = 73.15$.

The individual chooses A (immediate gratification).

But from the perspective of next week: $U(A) = 0.7 \times 0.95 \times 100 = 66.50$ $U(B) = 110$.

The individual would choose B if both options were in the future. This is time inconsistency:
Preferences reverse as the future becomes the present.

### Mental Accounting

**Definition:** individuals categorise money into different mental "accounts" based on its source Or
intended use, treating money differently depending on the account.

**Examples:**

1. **House money effect:** gamblers are more willing to take risks with money they have won than
   with their own money
2. **Sunk cost fallacy:** continuing a project because of resources already invested, even when
   future costs exceed future benefits. Rationally, sunk costs should be ignored
3. **Windfall spending:** people spend tax refunds or bonuses more freely than regular income

**Policy implications:**

1. **Framing tax rebates:** presenting tax relief as a "bonus" rather than a "refund of overpayment"
   increases spending
2. **Savings products:** earmarking savings accounts for specific goals (education, housing)
   increases savings rates
3. **Budget rules:** mental accounting can be harnessed to improve financial decision-making (e.g.,
   "pay yourself first" rules)

## Exam-Style Questions: Behavioural Economics (Additional)

<details>
<summary>Question 4: Present Bias and Savings Behaviour (10 marks)</summary>

A worker earns USD 50,000 per year and can save either USD 5,000 or USD 2,000 per year for
Retirement. At age 25, the worker plans to save USD 5,000 per year for 40 years.

With $\beta = 0.7$ and $\delta = 0.95$The present bias makes the worker save only USD 2,000 per
year.

(a) Calculate the retirement savings at age 65 under both plans, assuming a 5% annual return. [4
marks]

(b) Calculate the annual retirement income under both plans, assuming a 20-year drawdown and a 4%
return. [3 marks]

(c) Evaluate two policies to overcome present bias in savings decisions. [3 marks]

(a) Plan A (USD 5,000/year for 40 years at 5%):

$\text{FV} = 5000 \times \frac{1.05^{40} - 1}{0.05} = 5000 \times 120.80 = 604\,000$

Plan B (USD 2,000/year for 40 years at 5%):

$\text{FV} = 2000 \times 120.80 = 241\,600$

Present bias costs the worker $604\,000 - 241\,600 = 362\,400$ in retirement savings.

(b) Plan A: annuity factor (20 years, 4%) $= \frac{1 - 1.04^{-20}}{0.04} = 13.59$.

Annual income $= 604\,000 / 13.59 = 44\,445$

Plan B: annual income $= 241\,600 / 13.59 = 17\,778$

Present bias reduces annual retirement income by USD 26,667.

(c) **Policy 1: Automatic enrolment with escalation.**

Workers are automatically enrolled in a pension plan with a default contribution rate that Escalates
by 1 percentage point per year (e.g., from 3% to 10%). This exploits status quo Bias and inertia to
overcome present bias. Evidence: the US Save More Tomorrow programme Increased savings rates from
3.5% to 13.6% over four years.

**Policy 2: Commitment savings products.**

Banks offer savings accounts with penalties for early withdrawal (illiquidity). By committing Future
income to an illiquid account, workers pre-commit to saving, overcoming the temptation To spend.
Evidence: SEED (Save, Earn, Enjoy Deposit) accounts in the Philippines increased Savings by 82
percentage points among participants.

Both policies work by changing the choice architecture or adding commitment mechanisms that
Counteract present bias.

</details>

<details>
<summary>Question 5: Evolutionary Game Theory and International Cooperation (10 marks)</summary>

Two countries are negotiating a climate agreement. Each can either Abide (reduce emissions) Or
Defect (continue business as usual). The payoff matrix (welfare in USD billion) is:

|        | Abide    | Defect   |
| ------ | -------- | -------- |
| Abide  | (50, 50) | (10, 70) |
| Defect | (70, 10) | (20, 20) |

(a) Find the Nash equilibrium of the one-shot game. [2 marks]

(b) If the game is repeated indefinitely with discount factor $\delta$Find the minimum $\delta$ for
cooperation under grim trigger. [4 marks]

(c) Explain how evolutionary game theory predicts the outcome in a population of countries where
some always Abide and some always Defect. [4 marks]

(a) Each country has a dominant strategy to Defect (70 > 50 and 20 > 10). The Nash equilibrium Is
(Defect, Defect) with payoffs (20, 20).

(b) Gain from cooperation: $g = 50 - 20 = 30$. Temptation: $t = 70$.

$\delta \geq (t - g)/(t - p) = (70 - 50)/(70 - 20) = 20/50 = 0.4$

If $\delta \geq 0.4$ (countries value future payoffs at least 40% as much as current payoffs),
Cooperation is sustainable.

(c) In an evolutionary framework with fraction $x$ of Abiders:

$f_{\text{Abide}} = 50x + 10(1-x) = 10 + 40x$

$f_{\text{Defect}} = 70x + 20(1-x) = 20 + 50x$

$\Delta x = x(f_{\text{Abide}} - \bar{f})$

$\bar{f} = x(10 + 40x) + (1-x)(20 + 50x) = 10x + 40x^2 + 20 + 50x - 20x - 50x^2 = 20 + 40x - 10x^2$

$f_{\text{Abide}} - \bar{f} = 10 + 40x - 20 - 40x + 10x^2 = -10 + 10x^2 = 10(x^2 - 1) < 0$ for all
$x \in (0,1)$.

The fraction of Abiders always declines: Defect is the unique ESS.

This explains why international climate cooperation is difficult: even if some countries Initially
cooperate, the evolutionary dynamics drive the population toward universal defection. The only way
to sustain cooperation is through repeated interaction (as in part b) or through Institutional
mechanisms (enforcement, penalties, reputation).

## Bargaining and Negotiation Theory (HL Extension)

### Nash Bargaining Solution

The **Nash bargaining solution** maximises the product of the players' gains over their Disagreement
(threat) points:

$$\max_{(u_1, u_2)} (u_1 - d_1)(u_2 - d_2)$$

Subject to $u_1 \geq d_1$$u_2 \geq d_2$And $(u_1, u_2)$ being feasible.

Where $d_1$ and $d_2$ are the payoffs each player receives if negotiations break down (the threat
point or disagreement point).

### Numerical Example: Wage Negotiation

A firm and a union are negotiating wages. The firm's profit is $\pi = 100 - w$ (where $w$ is The
wage). The union's utility is $u = w$. If negotiations fail, the firm hires replacement Workers at
$w = 30$ (profit $= 70$), and the union receives $d_u = 0$.

The Nash bargaining solution:

$\max_w (100 - w - 70)(w - 0) = (30 - w)w$

FOC: $30 - 2w = 0 \implies w = 15$.

The Nash solution gives $w = 15$With the firm earning profit $= 85$ and the union receiving
$u = 15$.

**Alternative threat point:** if the union can strike and reduce the firm's profit to 20 During the
strike (while union members receive strike pay of 10):

$\max_w (100 - w - 20)(w - 10) = (80 - w)(w - 10)$

FOC: $80 - w - (w - 10) = 90 - 2w = 0 \implies w = 45$.

The union's stronger threat point (strike pay of 10 vs. 0) raises the negotiated wage from 15 To 45.
This illustrates a key insight: **bargaining power depends on the threat point.**

### The Ultimatum Game

**Rules:** Player 1 proposes a division of USD 10. Player 2 can accept or reject. If Player 2
Accepts, both receive the proposed amounts. If Player 2 rejects, both receive nothing.

**Standard economic prediction:** Player 1 offers USD 0.01, keeps USD 9.99. Player 2 accepts (any
positive amount is better than zero).

**Experimental result:** the median offer is approximately USD 4--5. Offers below USD 2 are
rejected.

**Interpretation:** Player 2's willingness to reject positive offers (reducing their own Payoff)
reflects:

1. **Fairness concerns:** players care about equitable outcomes, not just their own payoff
2. **Emotional response:** anger at unfairness motivates rejection
3. **Reputation:** rejecting unfair offers may build a reputation that improves future bargaining
   outcomes

### The Dictator Game

**Rules:** Player 1 decides how much of USD 10 to give to Player 2. Player 2 has no choice.

**Standard prediction:** Player 1 gives USD 0.

**Experimental result:** the average offer is approximately USD 2--3. Many people give Positive
amounts even when they have no strategic incentive to do so.

**Interpretation:** this reflects genuine altruism and social norms, not strategic behaviour. People
have intrinsic preferences for fairness.

## Information Cascades (HL Extension)

### Definition

An **information cascade** occurs when individuals observe the actions of others and ignore Their
own private information, following the crowd instead.

### Model

1. Each individual receives a private signal about the state of the world (good or bad)
2. Individuals make decisions sequentially, observing previous decisions (but not private signals)
3. If an individual's private signal agrees with the majority of previous decisions, they follow it.
   If it disagrees, they may still follow the majority if the majority is large enough

### Cascade Formation

A cascade begins when the accumulated public information (from observed actions) outweighs Any
individual's private signal. Once a cascade starts, all subsequent individuals ignore their Private
information and follow the crowd.

**Example:**

Two restaurants, A and B. Each person receives a private signal (correct with probability
$p = 0.6$).

Person 1: signal says A. Chooses A. Person 2: signal says B. But the public information (Person 1
chose A) is equally balanced With the private signal. Person 2 is indifferent and may follow either
signal. Suppose Person 2 follows their signal and chooses B. Person 3: signal says A. Public
information: one A, one B (balanced). Person 3 follows their Signal and chooses A. Person 4: signal
says B. Public information: two A, one B. Person 4 weighs the public info (2-1 in favour of A)
against their private signal (B). Bayesian updating: posterior Probability that A is better $> 0.5$.
Person 4 chooses A.

Now: three A, one B. Person 5 has a signal for B but sees 3-1 in favour of A. The public Information
is strong enough to outweigh any single private signal. A cascade begins.

**Key insight:** cascades can be wrong. If the first two people happened to receive incorrect
Signals, the cascade converges on the wrong outcome.

**Economic applications:**

1. **Financial markets:** investors follow the herd, leading to bubbles and crashes
2. **Technology adoption:** consumers adopt technologies because others have adopted them, not
   because the technology is superior (QWERTY keyboard, VHS vs. Betamax)
3. **Academic publishing:** researchers follow prevailing paradigms, potentially suppressing
   innovative ideas

## Exam-Style Questions: Behavioural Economics (Additional)

<details>
<summary>Question 6: Nash Bargaining and Trade Negotiations (10 marks)</summary>

Country A and Country B are negotiating a trade agreement. Without the agreement:

- Country A's welfare: 100
- Country B's welfare: 80

With the agreement, total welfare increases to 250. The surplus (70) must be divided.

(a) Calculate the Nash bargaining solution. [3 marks]

(b) If Country B's threat point improves to 90 (e.g., by signing an alternative agreement with
Country C), what is the new Nash solution? [3 marks]

(c) Evaluate the Nash bargaining solution as a model of international negotiations. [4 marks]

(a) Nash solution: maximise $(u_A - 100)(u_B - 80)$ subject to $u_A + u_B = 250$.

Substituting $u_B = 250 - u_A$:

$(u_A - 100)(250 - u_A - 80) = (u_A - 100)(170 - u_A)$

FOC: $(170 - u_A) - (u_A - 100) = 270 - 2u_A = 0 \implies u_A = 135$.

$u_B = 250 - 135 = 115$.

Country A gains 35, Country B gains 35. Equal split of the surplus.

(b) New threat point: $(u_A - 100)(u_B - 90)$ with $u_A + u_B = 250$.

$(u_A - 100)(160 - u_A)$

FOC: $(160 - u_A) - (u_A - 100) = 260 - 2u_A = 0 \implies u_A = 130$.

$u_B = 250 - 130 = 120$.

Country A gains 30, Country B gains 40. Country B's improved threat point shifts the Bargaining
outcome in its favour.

(c) **Evaluation:**

_Strengths:_

1. Provides a unique, symmetric solution that is Pareto efficient
2. Formalises the intuitive idea that bargaining power depends on the threat point
3. The solution is proportional to bargaining power: the player with the better outside option
   receives a larger share

_Limitations:_

1. **Symmetry assumption:** the Nash solution assumes equal bargaining power (equal weight on each
   player's gain). In reality, countries have asymmetric power (US vs. Small developing countries)
2. **Risk neutrality:** the solution assumes players are risk-neutral. Risk-averse players may
   accept a smaller share of the surplus to avoid the risk of no agreement
3. **Incomplete information:** in practice, countries do not know each other's true threat points,
   making the Nash solution difficult to apply
4. **Multi-issue negotiations:** real trade negotiations involve multiple issues (tariffs, services,
   IP, labour standards), not a single divisible surplus
5. **Non-cooperative behaviour:** countries may use threats, deadlines, and other strategic tactics
   not captured by the cooperative Nash framework

</details>
<summary>Question 7: Information Cascades and Financial Markets (10 marks)</summary>

An IPO (initial public offering) is being evaluated by four investors. Each investor receives A
private signal (high quality or low quality) that is correct with probability 65%.

The true quality is high.

Investors decide sequentially, observing previous investors' decisions (but not their signals).

(a) What is the probability that all four investors invest? [3 marks]

(b) What is the probability that an information cascade (correct or incorrect) has begun by investor
3? [4 marks]

(c) How might information cascades contribute to stock market bubbles? [3 marks]

(a) Each investor's signal is correct with $p = 0.65$. Since the true quality is high, The signal is
"high" with probability 0.65 and "low" with probability 0.35.

Each investor invests if their signal is "high" OR if the public information outweighs Their "low"
signal.

Investor 1: invests with probability 0.65 (if signal is high). Investor 2: if investor 1 invested,
investor 2 invests if their signal is high (0.65) or If they follow the crowd. Since there is only
one prior decision, investor 2 follows their Signal: invests with probability 0.65. Investor 3: if
both predecessors invested (prob $= 0.65^2 = 0.4225$), investor 3 has two "invest" signals from
public information. Bayesian posterior: the probability of high quality Given two prior invests is
very high. Even with a "low" signal, the posterior is $> 0.5$ So investor 3 always invests. If only
one predecessor invested, investor 3 follows their Signal.

The probability that all four invest requires at least the first two to invest (0.4225). Given the
first two invested, investor 3 always invests (cascade begins), and investor 4 Always invests.

P(all four invest) $= 0.65 \times 0.65 = 0.4225$.

(b) A cascade begins at investor 3 if the first two investors agree. This happens with Probability:

Both invest: $0.65^2 = 0.4225$ Both don't invest: $0.35^2 = 0.1225$ Total cascade probability
$= 0.4225 + 0.1225 = 0.545$.

If the first two disagree (prob $= 2 \times 0.65 \times 0.35 = 0.455$), no cascade at investor 3.
Investor 3 follows their signal, creating a 2-1 split. Investor 4 then faces a cascade (public info
2-1 outweighs private signal).

So cascade by investor 3: 54.5%. Cascade by investor 4: additional probability.

(c) **Information cascades and bubbles:**

1. **IPO cascades:** early investors' decisions influence later investors, creating self-reinforcing
   demand. If early investors happen to receive positive signals (even if unwarranted), a cascade of
   buying can drive the price above fundamental value
2. **Analyst cascades:** financial analysts may follow each other's recommendations rather than
   conducting independent analysis. When the consensus is wrong, the entire analyst community
   provides incorrect guidance
3. **Herding in fund management:** fund managers may buy popular stocks to avoid underperforming
   their peers, creating herding behaviour that amplifies price movements
4. **Cascade reversal:** when new information arrives that contradicts the cascade, the correction
   can be sharp (a crash), as all investors simultaneously revise their beliefs

**Policy implications:** regulators can reduce cascade-driven bubbles by:

1. Requiring disclosure of analysts' conflicts of interest
2. Encouraging contrarian research and diverse viewpoints
3. Implementing circuit breakers that halt trading during rapid price movements
4. Promoting financial literacy so individual investors rely less on observed behaviour

## Social Preferences and Altruism (HL Extension)

### Beyond Self-Interest

Traditional economic models assume individuals are purely self-interested (homo economicus).
Behavioural economics and experimental evidence demonstrate that people have **social preferences:**

1. **Altruism:** willingness to incur personal costs to benefit others
2. **Fairness:** preference for equitable outcomes
3. **Reciprocity:** willingness to reward kind behaviour and punish unkind behaviour
4. **Inequality aversion:** dislike of unequal outcomes (Fehr-Schmidt model)

### The Fehr-Schmidt Model of Inequality Aversion

Individuals maximise:

$$U_i = x_i - \alpha_i \frac{1}{n-1} \sum_{j \neq i} \max(x_j - x_i, 0) - \beta_i \frac{1}{n-1} \sum_{j \neq i} \max(x_i - x_j, 0)$$

Where:

- $x_i$ = individual $i$'s payoff
- $\alpha_i$ = envy parameter (disutility from being worse off than others, $\alpha \geq 0$)
- $\beta_i$ = guilt parameter (disutility from being better off than others,
  $0 \leq \beta < \alpha$)

The constraint $\beta < \alpha$ ensures that individuals dislike disadvantageous inequality More
than advantageous inequality.

**Numerical example:**

Two players, A and B. $\alpha = 0.5$$\beta = 0.3$.

Allocation: A gets 10, B gets 5.

$U_A = 10 - 0.5 \times \max(5-10, 0) - 0.3 \times \max(10-5, 0) = 10 - 0 - 1.5 = 8.5$

$U_B = 5 - 0.5 \times \max(10-5, 0) - 0.3 \times \max(5-10, 0) = 5 - 2.5 - 0 = 2.5$

A's utility is reduced by guilt (being better off). B's utility is reduced by envy (being worse
off).

If A could transfer 1 to B: A gets 9, B gets 6.

$U_A = 9 - 0 - 0.3 \times 3 = 9 - 0.9 = 8.1$. $U_B = 6 - 0.5 \times 3 - 0 = 6 - 1.5 = 4.5$.

A's utility decreases (8.5 to 8.1), so a purely self-interested A would not transfer. But if $\beta$
were higher (say 0.5), A would transfer because the guilt of inequality exceeds the Monetary cost.

### Public Goods and Free-Riding

A **public good** is non-rivalrous and non-excludable. The classic problem is free-riding:
Individuals have an incentive to undercontribute because they can benefit from the good Regardless
of their contribution.

**Standard prediction:** in a voluntary contribution game, contributions converge to zero As
individuals learn that others are free-riding.

**Experimental finding:** contributions start at 40--60% of the socially optimal Level and decline
over repeated rounds, but do not converge to zero. Many individuals Continue to contribute even when
free-riding is the dominant strategy.

**Explanations for persistent contributions:**

1. **Altruism:** some individuals genuinely care about the welfare of others
2. **Warm glow:** individuals derive utility from the act of giving itself, not just from the public
   good (Andreoni, 1990)
3. **Reciprocity:** conditional cooperators contribute if they believe others are contributing
4. **Social norms:** contributions are influenced by social expectations and reputational concerns
5. **Incomplete learning:** in finitely repeated games, not all individuals reach the subgame
   perfect equilibrium

### The Trust Game

**Rules:** Player 1 (investor) receives USD 10 and can send any amount $s$ to Player 2 (trustee).
The amount is tripled. Player 2 can return any amount $r$ to Player 1.

**Standard prediction:** Player 2 returns nothing ($r = 0$). Player 1, anticipating this, Sends
nothing ($s = 0$).

**Experimental result:**

- Average send: USD 5--6 (investors trust)
- Average return: USD 5--6 (trustees reciprocate)
- The amount sent is positively correlated with the amount returned

**Interpretation:**

1. Trust (sending money) reflects expectations of reciprocity
2. Trustworthiness (returning money) reflects reciprocity and fairness
3. The level of trust and trustworthiness varies across cultures and countries
4. Higher trust is associated with higher economic growth (Knack and Keefer, 1997)

### Policy Applications of Social Preferences

1. **Tax compliance:** individuals are more likely to pay taxes if they believe others are paying
   (reciprocity and social norms). Tax authorities can leverage this by providing information about
   compliance rates
2. **Charitable giving:** the "warm glow" effect means that tax deductions for charitable giving may
   be less effective than social recognition or public acknowledgement
3. **Environmental regulation:** appeals to social norms ("most of your neighbours recycle") can be
   more effective than fines for promoting pro-environmental behaviour
4. **Anti-corruption:** building a culture of trust and reciprocity can reduce corruption more
   effectively than punitive measures alone

## Bounded Rationality and Satisficing (HL Extension)

### Herbert Simon's Critique

Herbert Simon (1955) argued that individuals do not optimise (maximise utility) because:

1. **Information is incomplete:** individuals cannot know all available options and their
   consequences
2. **Cognitive limitations:** the human brain cannot process all the information needed for full
   optimisation
3. **Time constraints:** decisions must be made within limited time, preventing exhaustive search
4. **Computational complexity:** many optimisation problems are computationally intractable

Instead, individuals **satisfice:** they choose the first option that meets a minimum Acceptability
threshold (the "aspiration level"), rather than searching for the optimal option.

### Formal Model of Satisficing

1. Define an aspiration level $A$
2. Search options sequentially
3. Accept the first option with value $v \geq A$
4. If no option meets $A$Adjust $A$ downward (reduce aspirations)

**Contrast with optimisation:**

- Optimisation: $\max_{x \in X} U(x)$. Requires knowledge of all $x \in X$ and their utilities
- Satisficing: $\text{accept } x \text{ if } U(x) \geq A$. Requires only sequential evaluation until
  the threshold is met

### Implications for Economic Behaviour

1. **Consumer choice:** consumers may not find the lowest price or the best quality product; they
   choose the first acceptable option. This explains brand loyalty (reducing search costs)
2. **Firm behaviour:** firms may not maximise profits; they set "satisfactory" profit targets and
   focus on survival rather than optimisation
3. **Market equilibrium:** satisficing behaviour can lead to different market outcomes than those
   predicted by models of full rationality. Prices may not equal marginal cost, and firms may
   coexist at different efficiency levels

### Fast and Frugal Heuristics (Gigerenzer)

Gerd Gigerenzer (2007) argued that simple heuristics can outperform complex optimisation in Many
real-world contexts:

1. **Recognition heuristic:** if one of two objects is recognised and the other is not, infer that
   the recognised object has the higher value (e.g., which city is larger?)
2. **Take-the-best:** use the most important cue and ignore all others. If the most important cue
   does not discriminate, use the next most important cue
3. **Tit-for-tat:** in repeated interactions, cooperate first, then imitate the other player's last
   action (see repeated games section)

**Empirical evidence:** in forecasting competitions, simple heuristics often outperform Complex
statistical models, especially when data is noisy and the environment is uncertain.

### Numerical Example: satisficing vs. Optimising

A consumer is choosing a mobile phone plan. There are 100 plans available, each with different
Prices and data allowances. The consumer's utility function is $U = \sqrt{D} - P/10$ where $D$ Is
data (GB) and $P$ is price (USD).

**Optimising:** evaluate all 100 plans, calculate $U$ for each, choose the maximum.

**Satisficing:** set aspiration level $A = 5$. Evaluate plans sequentially. Accept the first Plan
with $U \geq 5$.

If the consumer evaluates plans in random order, the average number of plans evaluated Before
finding one with $U \geq 5$ depends on the distribution of $U$ across plans.

If 30% of plans have $U \geq 5$The expected number of evaluations before acceptance is
$1/0.30 = 3.3$ plans. The satisficer evaluates 3.3 plans on average, compared to 100 for The
optimiser.

The satisficer saves 97% of search effort but may end up with a suboptimal plan. The Expected
utility of the satisficer's choice depends on the distribution of utilities above The threshold. If
all plans with $U \geq 5$ have similar utilities (5--7), the cost of Satisficing is small (forgone
utility of 0--2). If the distribution has a long right tail (some plans have $U = 15$), the cost of
satisficing can be large.

### Dual-Process Theory

Daniel Kahneman (2011) distinguished two modes of thinking:

**System 1 (fast, automatic):**

- Intuitive, effortless, associative
- Uses heuristics and shortcuts
- Susceptible to cognitive biases
- Example: reading emotions on a face, answering $2 + 2 = ?$

**System 2 (slow, deliberate):**

- Analytical, effortful, logical
- Requires attention and cognitive resources
- Can override System 1 but is lazy (minimises effort)
- Example: solving $17 \times 24$Comparing investment options

**Economic implications:**

1. Most economic decisions are made by System 1 (routine purchases, habitual behaviour)
2. System 2 is engaged for important decisions but often delegates to System 1 when fatigued or
   distracted ("decision fatigue")
3. Nudges work by influencing System 1 processing (changing defaults, framing, social norms)
4. Financial education targets System 2 but has limited effectiveness because most financial
   decisions are made by System 1

## Coordination Games and Multiple Equilibria (HL Extension)

### Pure Coordination Games

In a **coordination game**, players benefit from choosing the same action, but there are Multiple
equilibria. The challenge is to coordinate on one equilibrium.

**Example: Technology adoption**

Two firms choose between Technology A and Technology B.

|        | Tech A | Tech B |
| ------ | ------ | ------ |
| Tech A | (5, 5) | (0, 0) |
| Tech B | (0, 0) | (3, 3) |

Two pure-strategy Nash equilibria: (A, A) and (B, B). Both firms prefer (A, A) but must Coordinate.
If each firm expects the other to choose A, both choose A. If each expects B, Both choose B.

**Real-world examples:**

1. **QWERTY keyboard:** the QWERTY layout is inferior to Dvorak but is the standard because everyone
   has coordinated on it (path dependence)
2. **VHS vs. Betamax:** VHS won the video format war despite Betamax's technical superiority, partly
   because more studios adopted VHS initially
3. **Driving on the left vs. Right:** the equilibrium (left, left) or (right, right) is efficient;
   mixed equilibria are dangerous

### Battle of the Sexes

|          | Opera  | Football |
| -------- | ------ | -------- |
| Opera    | (3, 2) | (0, 0)   |
| Football | (0, 0) | (2, 3)   |

Two Nash equilibria: (Opera, Opera) and (Football, Football). Each player prefers a Different
equilibrium. This models situations where players want to coordinate but have Different preferences
about which equilibrium to coordinate on.

**Mixed strategy equilibrium:**

Let $p$ = probability Player 1 chooses Opera. Player 2 is indifferent when:

$p \times 2 + (1-p) \times 0 = p \times 0 + (1-p) \times 3$

$2p = 3 - 3p \implies 5p = 3 \implies p = 3/5 = 0.6$

Similarly, Player 1 is indifferent when Player 2 chooses Opera with probability 0.4.

Mixed Nash equilibrium: Player 1 plays Opera with probability 0.6; Player 2 plays Opera With
probability 0.4.

### Stag Hunt Game

|      | Stag   | Hare   |
| ---- | ------ | ------ |
| Stag | (4, 4) | (0, 3) |
| Hare | (3, 0) | (2, 2) |

Two Nash equilibria: (Stag, Stag) with payoff (4, 4) and (Hare, Hare) with payoff (2, 2).

The Stag equilibrium is Pareto-superior but risk-dominant only if players trust each other. If
Player 1 is unsure whether Player 2 will cooperate, playing Hare is safer (guaranteed 2 Vs. Risky 0
or 4).

**Application to international cooperation:** the Stag Hunt models climate agreements. Full
cooperation (Stag) is the best outcome for all, but individual countries may defect (Hare) because
they cannot trust others to cooperate. The risk-dominant equilibrium may be (Hare, Hare), leading to
climate inaction.

### Focal Points

Thomas Schelling (1960) argued that in coordination games, players often coordinate on **focal
points** -- salient solutions that stand out for reasons not captured by the formal Payoff
structure.

**Examples:**

1. Two people must meet in New York City on a given day but cannot communicate. Many coordinate on
   Grand Central Station at noon (the most prominent meeting point)
2. Two people must name a positive number. If they name the same number, they both win a prize. Many
   coordinate on "1" (the simplest number)
3. In the Stag Hunt, shared norms, communication, or institutional frameworks can serve as focal
   points that coordinate players on the efficient equilibrium

### Sunspots and Self-Fulfilling Expectations

In some coordination games, expectations can be self-fulfilling. If everyone expects a Recession,
firms cut investment and consumers reduce spending, causing a recession. If Everyone expects
recovery, the opposite occurs.

**Application to financial crises:** bank runs are self-fulfilling. If depositors expect a Bank to
fail, they withdraw their deposits, causing the bank to fail (even if the bank was Fundamentally
sound). Diamond and Dybvig (1983) showed that bank runs are a coordination Failure: the efficient
equilibrium (no run) coexists with the inefficient equilibrium (run).

**Policy solution:** deposit insurance (FDIC in the US) eliminates the incentive to run by
Guaranteeing deposits. This changes the payoff structure, eliminating the run equilibrium.

</details>

## Summary

<!-- TODO: Add a summary for this topic -->
