---
title: The Economic Problem
date: 2025-06-02T16:25:28.480Z
tags:
  - Economics
  - ALevel
categories:
  - Economics
slug: the-economic-problem
sidebar_position: 1
---

## 1. Fundamental Concepts

### 1.1 Scarcity

We define **scarcity** as the condition in which human wants exceed the resources available to satisfy them. Formally, if we denote the set of all desired goods and services by $\mathcal{W}$ and the set of all producible goods and services by $\mathcal{P}$, then scarcity is the statement that $\mathcal{W} \supsetneq \mathcal{P}$. This is not a temporary condition — it is a permanent feature of human existence, because wants are effectively unlimited while resources (land, labour, capital, entrepreneurship) are finite.

Scarcity is the fundamental constraint that makes economics a discipline. Without scarcity, every want could be satisfied simultaneously and there would be no need to choose, allocate, or optimise.

:::info Board-Specific Note
All four boards (AQA, Edexcel, OCR, CIE) place the economic problem at the start of the syllabus. CIE (9708) Paper 1 frequently opens with MCQs testing precise definitions of scarcity and opportunity cost.
:::

### 1.2 Choice

**Choice** is the act of selecting among alternative uses of scarce resources. Given scarcity, every economic agent — whether a household, firm, or government — must decide _how_ to allocate limited resources among competing ends. We model choice formally as an optimisation problem: the agent maximises an objective function subject to constraints.

### 1.3 Opportunity Cost

We define the **opportunity cost** of a decision as the value of the next-best alternative forgone as a result of that decision.

$$\text{Opportunity cost of } A = \max_{B \neq A} \{U(B)\}$$

where $U(B)$ is the utility (or value) of alternative $B$. This is not the sum of all alternatives — only the single best one that was rejected.

:::warning Common Pitfall
Students often state that opportunity cost is "everything you give up." This is incorrect. It is the value of the _next-best_ alternative only. If you spend £10 on a book when your next-best option is a film ticket costing £10, the opportunity cost is the film ticket — not the book, not the £10 itself, and not the film ticket _plus_ a coffee.
:::

<details>
<summary>Example</summary>
<p>

A student has 3 hours of free time. Their options, ranked by preference:

1. Study economics (utility: 30)
2. Play football (utility: 25)
3. Watch television (utility: 15)

If the student chooses to study economics, the opportunity cost is playing football (utility 25), not television.

</p>
</details>

### 1.4 Rational Decision Making

A **rational economic agent** seeks to maximise utility (for consumers) or profit (for firms) subject to constraints. For a consumer choosing between goods $x$ and $y$ at prices $P_x$ and $P_y$ with income $M$:

$$
\begin{aligned}
\max_{x,y} \quad & U(x, y) \\
\text{s.t.} \quad & P_x \cdot x + P_y \cdot y \leq M \\
& x \geq 0, \quad y \geq 0
\end{aligned}
$$

This constrained optimisation problem is the foundation of consumer theory. The solution — the consumer's optimal bundle — depends on the shape of the utility function and the budget constraint.

**Satisficing** is an alternative model (Simon, 1955): agents choose the first option that meets a minimum acceptable threshold, rather than optimising. This accounts for bounded rationality — limited cognitive capacity and information.

## 2. The Production Possibility Frontier

### 2.1 Derivation

Consider an economy that produces two goods, $X$ and $Y$, using a fixed quantity of resources. We define the **production possibility frontier (PPF)** as the set of all maximum combinations of $X$ and $Y$ that the economy can produce when all resources are fully and efficiently employed.

$$\text{PPF} = \{(x, y) : x = f_X(L_X), \; y = f_Y(L_Y), \; L_X + L_Y = \bar{L}, \; f'_X, f'_Y > 0\}$$

where $L_X$ and $L_Y$ are the quantities of labour allocated to goods $X$ and $Y$ respectively, and $\bar{L}$ is total labour available.

### 2.2 Shape: Increasing Opportunity Cost

The PPF is typically **concave to the origin** (bowed outward). We prove this by showing that the opportunity cost of producing additional units of $X$ increases as more $X$ is produced.

**Proof.** Resources are not perfectly adaptable between uses. As we shift resources from $Y$ to $X$, we first transfer those resources that are _most_ suited to $X$ production. The initial units of $X$ gained are large relative to the $Y$ given up. As we continue transferring, we must use resources that are less suited to $X$ and more suited to $Y$. Each additional unit of $X$ requires giving up _more_ $Y$.

Formally, if the marginal product of labour in $X$ is diminishing ($f''_X < 0$) and the marginal product in $Y$ is also diminishing, then:

$$\frac{dy}{dx} = -\frac{f'_Y(L_Y)}{f'_X(L_X)}$$

As $L_X$ increases, $f'_X(L_X)$ decreases (diminishing returns). As $L_Y$ decreases, $f'_Y(L_Y)$ increases. Therefore $\left|\frac{dy}{dx}\right|$ increases — the slope becomes steeper, producing concavity. $\blacksquare$

A **linear PPF** (straight line) arises when resources are perfectly adaptable — the opportunity cost of $X$ in terms of $Y$ is constant. A **convex PPF** would imply decreasing opportunity cost — rare but possible if there are economies of scale.

### 2.3 Efficiency on the PPF

We define two types of efficiency:

**Productive efficiency**: achieved when the economy is producing on the PPF (not inside it). All resources are fully employed and used in their most productive applications.

$$\text{Productive efficiency} \iff (x, y) \in \text{PPF}$$

**Allocative efficiency**: achieved when the economy is producing the combination of goods that _society values most_. This requires that the marginal rate of transformation equals the marginal rate of substitution:

$$\text{MRT}_{XY} = \text{MRS}_{XY}$$

where $\text{MRT}_{XY} = \left|\frac{dy}{dx}\right|$ is the slope of the PPF and $\text{MRS}_{XY} = \frac{MU_X}{MU_Y}$ is the ratio of marginal utilities.

A point inside the PPF represents inefficiency — resources are unemployed or misallocated. A point outside the PPF is unattainable given current resources and technology.

<details>
<summary>Example: PPF Analysis</summary>
<p>

An economy can produce either guns or butter. Its PPF is given by:

$$y = 100 - x^2$$

where $x$ = guns, $y$ = butter (both in thousands of units).

- At $x = 0$: $y = 100$ (all resources to butter)
- At $x = 5$: $y = 75$ (5,000 guns, 75,000 butter)
- At $x = 10$: $y = 0$ (all resources to guns)

The opportunity cost of increasing guns from 5 to 6 is $100 - 36 - 75 = -11$ thousand butter. The opportunity cost of increasing guns from 0 to 1 is $100 - 1 - 100 = -1$ thousand butter. Opportunity cost rises as gun production increases.

</p>
</details>

### 2.4 Shifts of the PPF

The PPF can shift due to:

- **Economic growth**: increase in quantity or quality of resources (e.g., population growth, education, capital accumulation) $\Rightarrow$ PPF shifts outward
- **Technological progress**: new production methods $\Rightarrow$ PPF shifts outward (possibly asymmetrically if progress is sector-specific)
- **Natural disasters, war**: destruction of resources $\Rightarrow$ PPF shifts inward
- **Discovery of new resources**: $\Rightarrow$ PPF shifts outward

### 2.5 Economic Systems

We compare three systems using PPF analysis:

| Feature      | Free Market        | Command                   | Mixed    |
| ------------ | ------------------ | ------------------------- | -------- |
| Ownership    | Private            | State                     | Both     |
| Allocation   | Price mechanism    | Central planning          | Both     |
| Incentives   | Profit motive      | Targets/bonuses           | Both     |
| Efficiency   | High (competitive) | Low (information problem) | Variable |
| Equity       | Low                | High (in theory)          | Moderate |
| PPF position | Near frontier      | Often inside frontier     | Between  |

**Free market economies** tend to operate near the PPF because price signals allocate resources efficiently. However, they may not achieve allocative efficiency (due to market failure — see Topic 3).

**Command economies** often operate inside the PPF because central planners lack the information to allocate resources efficiently (the _economic calculation problem_, Hayek, 1945).

**Mixed economies** attempt to combine the efficiency of markets with government intervention to correct market failures and promote equity.

## 3. Positive vs Normative Economics

### 3.1 Definitions

A **positive statement** is a claim about what _is_ — it can be tested against evidence and is either true or false.

$$\text{Example: "A 10\% increase in the minimum wage reduces employment by 2\%."}$$

A **normative statement** is a claim about what _ought to be_ — it involves value judgements and cannot be tested.

$$\text{Example: "The government should increase the minimum wage."}$$

### 3.2 The Distinction Matters

The positive-normative distinction is fundamental because:

1. It clarifies what can be resolved by evidence (positive) vs what requires ethical debate (normative).
2. Economists can agree on positive analysis but disagree on normative conclusions due to different value judgements.
3. Policy debates often conflate the two — "X is bad" (normative) is different from "X causes Y" (positive).

:::tip Exam Technique
When asked "Is this statement positive or normative?", look for value-laden words: _should, ought, fair, unfair, too much, too little, best, worst_. These signal normative statements.
:::

<details>
<summary>Example: Classification</summary>
<p>

Classify each statement:

1. "Inflation is 3.2%." — **Positive** (testable)
2. "Inflation is too high." — **Normative** (what counts as "too high"?)
3. "A carbon tax reduces emissions by 5% per £10 of tax." — **Positive** (testable)
4. "The government should introduce a carbon tax." — **Normative** (value judgement)
5. "If interest rates rise, investment falls." — **Positive** (testable)

</p>
</details>

## 4. Factors of Production

We define the four factors of production:

| Factor               | Definition                                                                   | Reward   |
| -------------------- | ---------------------------------------------------------------------------- | -------- |
| **Land**             | All natural resources (physical space, minerals, water, forests)             | Rent     |
| **Labour**           | The physical and mental effort contributed by humans                         | Wages    |
| **Capital**          | Manufactured goods used to produce other goods (machinery, tools, factories) | Interest |
| **Entrepreneurship** | The organisation of the other three factors, bearing risk                    | Profit   |

**Key distinction**: Capital is _produced_ (it is itself an output of the production process), whereas land and labour are not. Entrepreneurship is a form of human capital but is distinguished because it involves decision-making under uncertainty.

## 5. Specialisation and Division of Labour

**Specialisation** occurs when individuals, firms, or countries concentrate on producing a narrow range of goods or services.

**Division of labour** is the breaking down of production into separate tasks performed by different workers.

Adam Smith (1776, _Wealth of Nations_) identified the advantages:

1. Workers specialise $\Rightarrow$ develop skill through repetition $\Rightarrow$ higher productivity
2. Time saved from switching between tasks
3. Specialisation enables use of specialised machinery

**Limitations**: monotony and worker demotivation, interdependence (if one worker fails, production stops), risk of structural unemployment if demand patterns change.

## 6. Critical Evaluation

### Strengths of the PPF Model

- Provides a clear visualisation of scarcity, choice, and opportunity cost
- Demonstrates the trade-off between different types of output
- Shows the effect of economic growth and technological change

### Limitations

- Assumes only two goods — the real economy produces millions
- Assumes resources are homogeneous within each category
- Assumes a given state of technology (static analysis)
- Cannot capture dynamic changes (innovation, learning by doing)
- Does not model the institutional framework that determines _how_ production decisions are made

:::info Board-Specific Note
CIE (9708) often asks students to apply the PPF to real economies — e.g., "Using a PPF diagram, explain how a country might reallocate resources from consumer goods to capital goods and evaluate the consequences." Focus on the trade-off between current consumption and future growth.
:::

## 7. Problem Set

**Problem 1.** An economy's PPF is given by $y = 50 - \frac{x^2}{10}$, where $x$ and $y$ are in millions of units. Calculate the opportunity cost of producing the 10th unit of $x$ and the 20th unit of $x$. What does the comparison tell you?

<details>
<summary>Hint</summary>
<p>
Opportunity cost of the $n$th unit of $x$ = $y(n-1) - y(n)$. Compute $y(9)$ and $y(10)$ for the 10th unit, then $y(19)$ and $y(20)$ for the 20th unit.
</p>
</details>

**Problem 2.** Prove that if the PPF is linear ($y = a - bx$), then the opportunity cost of $x$ in terms of $y$ is constant. Explain what economic assumption this implies about resource adaptability.

<details>
<summary>Hint</summary>
<p>
Take the derivative $\frac{dy}{dx} = -b$. Since this is constant, the opportunity cost doesn't change. This implies resources are equally productive in both sectors.
</p>
</details>

**Problem 3.** "The PPF shows the maximum an economy can produce, so any point inside the PPF must involve unemployment." Evaluate this statement.

<details>
<summary>Hint</summary>
<p>
Consider: is unemployment the *only* reason an economy might produce inside its PPF? What about misallocation of resources (e.g., using highly skilled workers for unskilled tasks)? What about inefficiency?
</p>
</details>

**Problem 4.** A country produces only food ($F$) and clothing ($C$). The PPF is $C = 200 - 2F^{0.5}$. A famine destroys 20% of agricultural land. Explain, with a diagram, the effect on the PPF.

<details>
<summary>Hint</summary>
<p>
This is an asymmetric shock — it affects food production capacity but not directly clothing. The PPF pivots inward on the $F$-axis but the $C$-intercept may not change (since resources can be moved from food to clothing, but the food sector's maximum output is reduced).
</p>
</details>

**Problem 5.** Classify each statement as positive or normative, explaining your reasoning:
(a) "The UK's Gini coefficient is 0.35."
(b) "A Gini coefficient of 0.35 is unacceptable."
(c) "Increasing the income tax rate to 50% for earners above £100,000 would raise £5 billion."
(d) "The government ought to raise taxes on the wealthy."

<details>
<summary>Hint</summary>
<p>
(a) Positive — factual, testable. (b) Normative — "unacceptable" is a value judgement. (c) Positive — a counterfactual claim that could be estimated empirically. (d) Normative — "ought to" signals a value judgement about what should be done.
</p>
</details>

**Problem 6.** Using the PPF model, explain how an increase in the quality of education (e.g., more graduates) would affect an economy's capacity to produce both consumer goods and capital goods in the long run.

<details>
<summary>Hint</summary>
<p>
Better education improves human capital $\Rightarrow$ resources become more productive $\Rightarrow$ PPF shifts outward. If education specifically enhances the productivity of capital goods production (engineers, scientists), the outward shift may be asymmetric — larger for capital goods. In the long run, more capital goods today $\Rightarrow$ even more outward shift in the future.
</p>
</details>

**Problem 7.** A student has 6 hours to revise for two exams: Economics and Mathematics. Her expected marks are $E_E = 20\sqrt{t_E}$ and $E_M = 15\sqrt{t_M}$, where $t_E + t_M = 6$. Find the allocation that maximises her total mark. What is the opportunity cost of the last hour spent on Economics?

<details>
<summary>Hint</summary>
<p>
Set up the Lagrangian: $\mathcal{L} = 20\sqrt{t_E} + 15\sqrt{t_M} + \lambda(6 - t_E - t_M)$. Take derivatives and set to zero: $\frac{10}{\sqrt{t_E}} = \lambda$ and $\frac{7.5}{\sqrt{t_M}} = \lambda$. So $\frac{10}{\sqrt{t_E}} = \frac{7.5}{\sqrt{t_M}}$, giving $\frac{t_E}{t_M} = \frac{16}{9}$, so $t_E = \frac{96}{25} = 3.84$ hours, $t_M = 2.16$ hours.
</p>
</details>

**Problem 8.** Evaluate the argument that "scarcity can be eliminated through technological progress."

<details>
<summary>Hint</summary>
<p>
While technology shifts the PPF outward, it cannot eliminate scarcity because human wants also expand with new possibilities. Consider: did the invention of smartphones eliminate scarcity, or create new wants (apps, data plans, accessories)? Technological progress changes the *composition* of scarcity but does not eliminate it.
</p>
</details>

**Problem 9.** A command economy decides to allocate all resources to military production during a war. Using PPF analysis, explain:
(a) The short-run trade-off
(b) The long-run consequences when the war ends
(c) Why a market economy might make different choices

<details>
<summary>Hint</summary>
<p>
(a) All production at the military goods intercept of the PPF — zero consumer goods. (b) Capital stock depreciates, infrastructure decays $\Rightarrow$ PPF shifts inward post-war (the "peace dividend" in reverse). (c) In a market economy, consumer demand for food, housing, etc. would push production toward a more balanced point, though government could still intervene.
</p>
</details>

**Problem 10.** "The concept of opportunity cost implies that there is no such thing as a free lunch." Discuss this statement with reference to the PPF model.

<details>
<summary>Hint</summary>
<p>
Even a "free" school meal costs resources that could have been used elsewhere (teacher salaries, ingredients, kitchen equipment). The opportunity cost is the next-best use of those resources. Formally: if resources are on the PPF, producing more of anything requires giving up something else. If resources are inside the PPF, "free" goods may use unemployed resources — but even then, there may be alternative uses for those resources.
</p>
</details>
