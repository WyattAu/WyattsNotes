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
   $\$100$ is approximately twice the pleasure of gaining $\$100$
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

A person is offered a choice: $\$100$ today or $\$120$ in one month. Most people choose $\$100$
today. However, when offered $\$100$ in 12 months or $\$120$ in 13 months, most people choose
$\$120$ in 13 months. Explain this inconsistency using behavioural economics.

This pattern is explained by **present bias** (or hyperbolic discounting). When the reward is
immediate, the person heavily discounts the future one-month delay, preferring $\$100$ now. But when
both options are in the future, the one-month difference feels much less significant, and the person
is more patient.

With exponential discounting at a constant rate, the preference should be consistent: if you prefer
$\$100$ today over $\$120$ in a month, you should also prefer $\$100$ in 12 months over $\$120$ in
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

