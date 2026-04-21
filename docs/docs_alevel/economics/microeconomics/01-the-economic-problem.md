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

We define **scarcity** as the condition in which human wants exceed the resources available to
satisfy them. Formally, if we denote the set of all desired goods and services by $\mathcal{W}$ and
the set of all producible goods and services by $\mathcal{P}$, then scarcity is the statement that
$\mathcal{W} \supsetneq \mathcal{P}$. This is not a temporary condition — it is a permanent feature
of human existence, because wants are effectively unlimited while resources (land, labour, capital,
entrepreneurship) are finite.

Scarcity is the fundamental constraint that makes economics a discipline. Without scarcity, every
want could be satisfied simultaneously and there would be no need to choose, allocate, or optimise.

:::info Board-Specific Note All four boards (AQA, Edexcel, OCR, CIE) place the economic problem at
the start of the syllabus. CIE (9708) Paper 1 frequently opens with MCQs testing precise definitions
of scarcity and opportunity cost. :::

### 1.2 Choice

**Choice** is the act of selecting among alternative uses of scarce resources. Given scarcity, every
economic agent — whether a household, firm, or government — must decide _how_ to allocate limited
resources among competing ends. We model choice formally as an optimisation problem: the agent
maximises an objective function subject to constraints.

### 1.3 Opportunity Cost

We define the **opportunity cost** of a decision as the value of the next-best alternative forgone
as a result of that decision.

$$\mathrm{Opportunity cost of } A = \max_{B \neq A} \{U(B)\}$$

where $U(B)$ is the utility (or value) of alternative $B$. This is not the sum of all alternatives —
only the single best one that was rejected.

:::warning Common Pitfall Students often state that opportunity cost is "everything you give up."
This is incorrect. It is the value of the _next-best_ alternative only. If you spend £10 on a book
when your next-best option is a film ticket costing £10, the opportunity cost is the film ticket —
not the book, not the £10 itself, and not the film ticket _plus_ a coffee. :::

<details>
<summary>Example</summary>
A student has 3 hours of free time. Their options, ranked by preference:

1. Study economics (utility: 30)
2. Play football (utility: 25)
3. Watch television (utility: 15)

If the student chooses to study economics, the opportunity cost is playing football (utility 25),
not television.

</details>

#### Opportunity Cost in Practice

Opportunity cost operates at every level of the economy:

- **Individuals**: A worker who takes a year out to travel forgoes a year's salary and career
  progression. The opportunity cost is the wages _plus_ the experience, not just one or the other.
- **Firms**: A technology company choosing to invest USD 500 million in developing a new smartphone
  could have used that capital to acquire a smaller competitor. The opportunity cost is the forgone
  acquisition revenue.
- **Governments**: If the UK government spends GBP 40 billion on a high-speed rail project, the
  opportunity cost is the alternative public services that money could have funded — NHS capacity,
  school building programmes, or tax cuts.

Opportunity cost also has a **time dimension**. Short-run opportunity costs may differ from long-run
ones. A student investing in a degree forgoes immediate earnings (short-run cost) but may gain
higher lifetime income (long-run benefit). Rational decision making requires weighing both time
horizons.

#### Evaluation of Opportunity Cost

The concept of opportunity cost, while fundamental, has limitations. In practice, measuring the
"value" of the next-best alternative is often subjective and difficult to quantify. How does one
compare the utility of three years of travel against three years of work experience? The assumption
that individuals can identify and rank all alternatives is itself questionable — behavioural
economics shows that people suffer from _choice overload_ and often fail to consider relevant
alternatives (Simon, 1955). Furthermore, in macroeconomic policy, the "next-best alternative" is
itself contested: economists disagree on what the government _would have done_ with resources not
spent on a particular programme, making opportunity cost estimates inherently debatable.

### 1.4 Rational Decision Making

A **rational economic agent** seeks to maximise utility (for consumers) or profit (for firms)
subject to constraints. For a consumer choosing between goods $x$ and $y$ at prices $P_x$ and $P_y$
with income $M$:

$$
\begin{aligned}
\max_{x,y} \quad & U(x, y) \\
\mathrm{s.t.} \quad & P_x \cdot x + P_y \cdot y \leq M \\
& x \geq 0, \quad y \geq 0
\end{aligned}
$$

This constrained optimisation problem is the foundation of consumer theory. The solution — the
consumer's optimal bundle — depends on the shape of the utility function and the budget constraint.

**Satisficing** is an alternative model (Simon, 1955): agents choose the first option that meets a
minimum acceptable threshold, rather than optimising. This accounts for bounded rationality —
limited cognitive capacity and information.

:::info Board-Specific Note AQA (4.1.1.1) and Edexcel (Theme 1, 1.1.1) both require understanding of
rational decision making as the basis of economic behaviour. OCR (H460, Micro 1.1) places particular
emphasis on _behavioural_ challenges to rationality — be prepared to discuss how bounded
rationality, heuristics, and framing effects undermine the assumption of rational utility
maximisation. CIE (9708) focuses more narrowly on the formal optimisation framework in Paper 2 essay
questions. :::

## 2. The Production Possibility Frontier

### 2.1 Derivation

Consider an economy that produces two goods, $X$ and $Y$, using a fixed quantity of resources. We
define the **production possibility frontier (PPF)** as the set of all maximum combinations of $X$
and $Y$ that the economy can produce when all resources are fully and efficiently employed.

$$\mathrm{PPF} = \{(x, y) : x = f_X(L_X), \; y = f_Y(L_Y), \; L_X + L_Y = \bar{L}, \; f'_X, f'_Y > 0\}$$

where $L_X$ and $L_Y$ are the quantities of labour allocated to goods $X$ and $Y$ respectively, and
$\bar{L}$ is total labour available.

### 2.2 Shape: Increasing Opportunity Cost

The PPF is typically **concave to the origin** (bowed outward). We prove this by showing that the
opportunity cost of producing additional units of $X$ increases as more $X$ is produced.

**Proof.** Resources are not perfectly adaptable between uses. As we shift resources from $Y$ to
$X$, we first transfer those resources that are _most_ suited to $X$ production. The initial units
of $X$ gained are large relative to the $Y$ given up. As we continue transferring, we must use
resources that are less suited to $X$ and more suited to $Y$. Each additional unit of $X$ requires
giving up _more_ $Y$.

Formally, if the marginal product of labour in $X$ is diminishing ($f''_X < 0$) and the marginal
product in $Y$ is also diminishing, then:

$$\frac{dy}{dx} = -\frac{f'_Y(L_Y)}{f'_X(L_X)}$$

As $L_X$ increases, $f'_X(L_X)$ decreases (diminishing returns). As $L_Y$ decreases, $f'_Y(L_Y)$
increases. Therefore $\left|\frac{dy}{dx}\right|$ increases — the slope becomes steeper, producing
concavity. $\blacksquare$

A **linear PPF** (straight line) arises when resources are perfectly adaptable — the opportunity
cost of $X$ in terms of $Y$ is constant. A **convex PPF** would imply decreasing opportunity cost —
rare but possible if there are economies of scale.

:::info Board-Specific Note AQA frequently asks students to explain _why_ the PPF is bowed outward
(concave) and to calculate opportunity cost from a numerical table or diagram. Edexcel (Theme 1)
often presents PPF data in table form and asks students to plot and interpret. CIE (9708) may ask
for a formal derivation or for students to identify the shape from a production function. OCR tends
to focus more on the _policy implications_ of PPF shifts. :::

#### Evaluation of PPF Assumptions

The standard PPF model rests on several simplifying assumptions that limit its real-world
applicability. The assumption of only two goods is clearly unrealistic — modern economies produce
millions of goods and services. The two-good model is a pedagogical simplification; in reality, the
PPF is a multi-dimensional surface that cannot be easily drawn. Additionally, the model assumes that
resources are fixed in quantity and quality during the analysis period. In practice, resources
change continuously: workers gain experience (learning by doing), capital depreciates, and
technology evolves even over short timeframes. Finally, the PPF assumes all resources are
homogeneous — that any unit of labour can be switched between sectors. This ignores skill
differences, geographic immobility, and occupational immobility, all of which make real-world
reallocation slower and costlier than the model suggests.

### 2.3 Efficiency on the PPF

We define two types of efficiency:

**Productive efficiency**: achieved when the economy is producing on the PPF (not inside it). All
resources are fully employed and used in their most productive applications.

$$\mathrm{Productive efficiency} \iff (x, y) \in \mathrm{PPF}$$

**Allocative efficiency**: achieved when the economy is producing the combination of goods that
_society values most_. This requires that the marginal rate of transformation equals the marginal
rate of substitution:

$$\mathrm{MRT}_{XY} = \mathrm{MRS}_{XY}$$

where $\mathrm{MRT}_{XY} = \left|\frac{dy}{dx}\right|$ is the slope of the PPF and
$\mathrm{MRS}_{XY} = \frac{MU_X}{MU_Y}$ is the ratio of marginal utilities.

A point inside the PPF represents inefficiency — resources are unemployed or misallocated. A point
outside the PPF is unattainable given current resources and technology.

<details>
<summary>Example: PPF Analysis</summary>
An economy can produce either guns or butter. Its PPF is given by:

$$y = 100 - x^2$$

where $x$ = guns, $y$ = butter (both in thousands of units).

- At $x = 0$: $y = 100$ (all resources to butter)
- At $x = 5$: $y = 75$ (5,000 guns, 75,000 butter)
- At $x = 10$: $y = 0$ (all resources to guns)

The opportunity cost of increasing guns from 5 to 6 is $100 - 36 - 75 = -11$ thousand butter. The
opportunity cost of increasing guns from 0 to 1 is $100 - 1 - 100 = -1$ thousand butter. Opportunity
cost rises as gun production increases.

</details>

#### Real-World Applications of PPF Efficiency

**Productive inefficiency** is widespread during economic downturns. The UK during the 2008
financial crisis is a clear example: GDP fell by over 6% from peak to trough, representing a
movement inside the PPF as workers and factories sat idle. The COVID-19 pandemic in 2020 produced an
even sharper contraction — the UK economy shrank by 9.9% in a single year as lockdowns forced
businesses to close.

**Allocative inefficiency** can occur even when an economy is on its PPF. Consider an economy at
full employment that devotes the majority of output to military spending rather than healthcare or
education. It is productively efficient (on the frontier) but allocatively inefficient if society
would prefer more civilian goods. The Soviet Union in the 1970s and 1980s exemplified this: high
military output alongside chronic shortages of consumer goods.

The concept of **Pareto efficiency** is closely related: an allocation is Pareto efficient if no one
can be made better off without making someone else worse off. Every point on the PPF is Pareto
efficient in production, but different points on the PPF represent different distributions of output
— and hence different distributions of welfare between consumers of $X$ and $Y$.

### 2.4 Shifts of the PPF

The PPF can shift due to:

- **Economic growth**: increase in quantity or quality of resources (e.g., population growth,
  education, capital accumulation) $\Rightarrow$ PPF shifts outward
- **Technological progress**: new production methods $\Rightarrow$ PPF shifts outward (possibly
  asymmetrically if progress is sector-specific)
- **Natural disasters, war**: destruction of resources $\Rightarrow$ PPF shifts inward
- **Discovery of new resources**: $\Rightarrow$ PPF shifts outward

#### Evaluation of PPF Shifts

Not all PPF shifts are equally beneficial. An outward shift driven by capital accumulation may come
at the cost of current consumption (the classic guns vs butter trade-off). An economy that invests
heavily in capital goods today sacrifices current living standards for future growth — but if the
investment is misdirected (e.g., ghost cities in China), the outward shift may not materialise.
Similarly, resource discovery (such as North Sea oil in the 1970s) can shift the PPF outward but may
also cause "Dutch disease" — the resource sector crowds out manufacturing, leading to
deindustrialisation. The net effect on welfare depends on how the additional output is distributed
and whether it satisfies society's most pressing needs.

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

**Free market economies** tend to operate near the PPF because price signals allocate resources
efficiently. However, they may not achieve allocative efficiency (due to market failure — see Topic
3).

**Command economies** often operate inside the PPF because central planners lack the information to
allocate resources efficiently (the _economic calculation problem_, Hayek, 1945).

**Mixed economies** attempt to combine the efficiency of markets with government intervention to
correct market failures and promote equity.

#### Real-World Examples of Economic Systems

- **Command economy**: North Korea operates one of the world's most centrally planned economies. The
  government allocates the vast majority of resources, with chronic food shortages and low living
  standards suggesting operation well inside the PPF.
- **Free market economy**: Singapore is often cited as a close approximation to a free market
  economy, with minimal government intervention, low taxation, and strong protection of property
  rights. It consistently ranks highly on measures of economic freedom and per capita GDP.
- **Mixed economy**: The UK is a mixed economy. Most allocation occurs through markets, but the
  government provides public goods (defence, infrastructure), regulates industries (competition
  policy, environmental standards), and redistributes income through the tax and welfare system.

#### Evaluation of Economic Systems

The comparison between economic systems is more nuanced than the textbook model suggests. Pure
command and pure market economies are theoretical extremes — no real economy operates at either
pole. China's economy, for instance, combines state-owned enterprises in strategic sectors with
vigorous private enterprise in consumer goods and technology. The "information problem" identified
by Hayek (1945) and Mises (1920) remains the strongest theoretical argument against central
planning: no planner can possess the dispersed, tacit knowledge held by millions of individuals.
However, market economies also suffer from information problems — asymmetric information between
buyers and sellers can lead to market failure (Akerlof, 1970). The optimal degree of government
intervention remains one of the central debates in economics and depends on the specific context:
the effectiveness of institutions, the nature of the goods being produced, and societal values
regarding equity and freedom.

:::info Board-Specific Note AQA (4.1.1.3) requires students to understand the economic problem and
economic systems together, often asking 9-mark questions comparing market and command economies.
Edexcel (Theme 1, 1.1.4) emphasises the role of the price mechanism in allocating resources and
expects students to evaluate when government intervention improves outcomes. OCR (H460) expects
students to apply economic systems to contemporary issues such as climate change. CIE (9708) Paper 2
essay questions frequently ask students to assess the relative merits of different economic systems.
:::

## 3. Positive vs Normative Economics

### 3.1 Definitions

A **positive statement** is a claim about what _is_ — it can be tested against evidence and is
either true or false.

$$\mathrm{Example: "A 10\% increase in the minimum wage reduces employment by 2\%."}$$

A **normative statement** is a claim about what _ought to be_ — it involves value judgements and
cannot be tested.

$$\mathrm{Example: "The government should increase the minimum wage."}$$

### 3.2 The Distinction Matters

The positive-normative distinction is fundamental because:

1. It clarifies what can be resolved by evidence (positive) vs what requires ethical debate
   (normative).
2. Economists can agree on positive analysis but disagree on normative conclusions due to different
   value judgements.
3. Policy debates often conflate the two — "X is bad" (normative) is different from "X causes Y"
   (positive).

:::tip Exam Technique When asked "Is this statement positive or normative?", look for value-laden
words: _should, ought, fair, unfair, too much, too little, best, worst_. These signal normative
statements. :::

<details>
<summary>Example: Classification</summary>
Classify each statement:

1. "Inflation is 3.2%." — **Positive** (testable)
2. "Inflation is too high." — **Normative** (what counts as "too high"?)
3. "A carbon tax reduces emissions by 5% per £10 of tax." — **Positive** (testable)
4. "The government should introduce a carbon tax." — **Normative** (value judgement)
5. "If interest rates rise, investment falls." — **Positive** (testable)
</details>

#### Evaluation of the Positive-Normative Distinction

While the positive-normative distinction is a useful analytical tool, it is not always clear-cut in
practice. Some statements blend positive and normative elements. For example, "The government should
raise the minimum wage because it reduces poverty" contains a normative claim ("should raise")
embedded within a positive claim ("reduces poverty"). The effectiveness of the positive claim does
not settle the normative debate — even if a minimum wage reduces poverty, one could still argue
against it on the grounds that it causes unemployment. Furthermore, the choice of what to study (the
research agenda itself) is shaped by normative concerns. Economists who prioritise research into
inequality are making a value judgement about what matters. The positive-normative distinction is
therefore best understood as a continuum rather than a binary classification.

:::info Board-Specific Note AQA (4.1.1.2) and Edexcel (Theme 1, 1.1.2) both explicitly test the
positive-normative distinction, typically with 2-4 mark MCQs or short-answer questions asking
students to classify statements. CIE (9708) may embed the distinction within longer essay questions.
OCR often asks students to identify the positive and normative components within a single policy
argument. :::

## 4. Factors of Production

We define the four factors of production:

| Factor               | Definition                                                                   | Reward   |
| -------------------- | ---------------------------------------------------------------------------- | -------- |
| **Land**             | All natural resources (physical space, minerals, water, forests)             | Rent     |
| **Labour**           | The physical and mental effort contributed by humans                         | Wages    |
| **Capital**          | Manufactured goods used to produce other goods (machinery, tools, factories) | Interest |
| **Entrepreneurship** | The organisation of the other three factors, bearing risk                    | Profit   |

**Key distinction**: Capital is _produced_ (it is itself an output of the production process),
whereas land and labour are not. Entrepreneurship is a form of human capital but is distinguished
because it involves decision-making under uncertainty.

:::info Board-Specific Note Edexcel (Theme 1, 1.1.1) lists the four factors of production and their
rewards explicitly in the specification and frequently asks students to identify which factor is
being described in a given scenario. AQA (4.1.1.1) covers factors of production within the broader
topic of scarcity and choice. CIE (9708) expects students to distinguish between factor rewards and
understand the concept of factor mobility. OCR (H460) may ask students to explain how changes in the
quantity or quality of a factor of production affect the PPF. :::

## 5. Specialisation and Division of Labour

**Specialisation** occurs when individuals, firms, or countries concentrate on producing a narrow
range of goods or services.

**Division of labour** is the breaking down of production into separate tasks performed by different
workers.

Adam Smith (1776, _Wealth of Nations_) identified the advantages:

1. Workers specialise $\Rightarrow$ develop skill through repetition $\Rightarrow$ higher
   productivity
2. Time saved from switching between tasks
3. Specialisation enables use of specialised machinery

**Limitations**: monotony and worker demotivation, interdependence (if one worker fails, production
stops), risk of structural unemployment if demand patterns change.

#### Real-World Examples of Specialisation

Adam Smith's pin factory remains the classic example: a single worker could produce perhaps 20 pins
per day, but 10 workers specialising in distinct tasks (drawing wire, cutting, pointing, grinding,
heading, whitening, papering) could produce over 48,000 pins per day. In modern economies,
specialisation extends far beyond individual workers:

- **Firm-level specialisation**: Companies like TSMC specialise entirely in semiconductor
  fabrication, while Apple focuses on design and software.
- **International specialisation**: Countries specialise according to comparative advantage — Saudi
  Arabia in oil extraction, New Zealand in dairy, Japan in advanced manufacturing.
- **Occupational specialisation**: The division of labour within a hospital (surgeons,
  anaesthetists, nurses, radiologists) enables complex procedures that no single individual could
  perform alone.

#### Evaluation of Specialisation and Division of Labour

While specialisation drives productivity gains, it carries significant risks. Excessive
specialisation makes workers vulnerable to structural unemployment when technology or demand
changes. The decline of manufacturing employment in the UK (from over 25% of the workforce in 1979
to under 8% today) illustrates this: workers with highly specific skills struggled to find new
employment when factories closed. Moreover, extreme division of labour can lead to **alienation** —
a concept developed by Karl Marx — where workers lose connection to the final product and find their
work meaningless. Henry Ford's assembly lines achieved extraordinary productivity but also produced
high worker turnover until he introduced the USD 5/day wage in 1914. The gig economy represents a
partial reversal: platforms like Uber allow flexible, multi-task work but sacrifice the productivity
gains of deep specialisation. On balance, the benefits of specialisation typically outweigh the
costs, but the distribution of those benefits is uneven and requires policy attention (retraining
programmes, education systems, social safety nets).

:::info Board-Specific Note AQA (4.1.1.4) and Edexcel (Theme 1, 1.1.3) both cover specialisation and
division of labour, with AQA placing more emphasis on the link to international trade and Edexcel
focusing on the efficiency gains within firms. CIE (9708) Paper 2 may ask students to evaluate the
effects of specialisation on an economy. OCR (H460) often links specialisation to broader questions
about globalisation and its discontents. :::

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

:::info Board-Specific Note CIE (9708) often asks students to apply the PPF to real economies —
e.g., "Using a PPF diagram, explain how a country might reallocate resources from consumer goods to
capital goods and evaluate the consequences." Focus on the trade-off between current consumption and
future growth. :::

#### Additional Evaluation Points

- **Dynamic efficiency**: The PPF is a static model — it captures a snapshot in time. In reality,
  economies that sacrifice current consumption for investment in capital goods and R&D may achieve
  _faster_ PPF growth over time (dynamic efficiency). South Korea's rapid industrialisation from the
  1960s onwards exemplifies this: high savings and investment rates drove sustained outward shifts
  of the PPF, transforming a war-torn agrarian economy into a high-income industrial nation.
- **Environmental sustainability**: The PPF model treats resource use as costless. In reality,
  production often involves negative externalities (pollution, resource depletion) that are not
  captured on the diagram. An economy operating on its PPF may still be unsustainable if it is
  depleting natural capital faster than it can regenerate. This is a significant limitation of the
  model in the context of climate change.
- **Distributional considerations**: The PPF shows what an economy _can_ produce but says nothing
  about _who_ receives the output. Two economies with identical PPFs could have vastly different
  levels of inequality, poverty, and social welfare depending on their distributional mechanisms.

## 7. Problem Set

**Problem 1.** An economy's PPF is given by $y = 50 - \frac{x^2}{10}$, where $x$ and $y$ are in
millions of units. Calculate the opportunity cost of producing the 10th unit of $x$ and the 20th
unit of $x$. What does the comparison tell you?

<details>
<summary>Hint</summary>
Opportunity cost of the $n$th unit of $x$ = $y(n-1) - y(n)$. Compute $y(9)$ and $y(10)$ for the 10th unit, then $y(19)$ and $y(20)$ for the 20th unit.
</details>

**Problem 2.** Prove that if the PPF is linear ($y = a - bx$), then the opportunity cost of $x$ in
terms of $y$ is constant. Explain what economic assumption this implies about resource adaptability.

<details>
<summary>Hint</summary>
Take the derivative $\frac{dy}{dx} = -b$. Since this is constant, the opportunity cost doesn't change. This implies resources are equally productive in both sectors.
</details>

**Problem 3.** "The PPF shows the maximum an economy can produce, so any point inside the PPF must
involve unemployment." Evaluate this statement.

<details>
<summary>Hint</summary>
Consider: is unemployment the *only* reason an economy might produce inside its PPF? What about misallocation of resources (e.g., using highly skilled workers for unskilled tasks)? What about inefficiency?
</details>

**Problem 4.** A country produces only food ($F$) and clothing ($C$). The PPF is
$C = 200 - 2F^{0.5}$. A famine destroys 20% of agricultural land. Explain, with a diagram, the
effect on the PPF.

<details>
<summary>Hint</summary>
This is an asymmetric shock — it affects food production capacity but not directly clothing. The PPF pivots inward on the $F$-axis but the $C$-intercept may not change (since resources can be moved from food to clothing, but the food sector's maximum output is reduced).
</details>

**Problem 5.** Classify each statement as positive or normative, explaining your reasoning: (a) "The
UK's Gini coefficient is 0.35." (b) "A Gini coefficient of 0.35 is unacceptable." (c) "Increasing
the income tax rate to 50% for earners above £100,000 would raise £5 billion." (d) "The government
ought to raise taxes on the wealthy."

<details>
<summary>Hint</summary>
(a) Positive — factual, testable. (b) Normative — "unacceptable" is a value judgement. (c) Positive — a counterfactual claim that could be estimated empirically. (d) Normative — "ought to" signals a value judgement about what should be done.
</details>

**Problem 6.** Using the PPF model, explain how an increase in the quality of education (e.g., more
graduates) would affect an economy's capacity to produce both consumer goods and capital goods in
the long run.

<details>
<summary>Hint</summary>
Better education improves human capital $\Rightarrow$ resources become more productive $\Rightarrow$ PPF shifts outward. If education specifically enhances the productivity of capital goods production (engineers, scientists), the outward shift may be asymmetric — larger for capital goods. In the long run, more capital goods today $\Rightarrow$ even more outward shift in the future.
</details>

**Problem 7.** A student has 6 hours to revise for two exams: Economics and Mathematics. Her
expected marks are $E_E = 20\sqrt{t_E}$ and $E_M = 15\sqrt{t_M}$, where $t_E + t_M = 6$. Find the
allocation that maximises her total mark. What is the opportunity cost of the last hour spent on
Economics?

<details>
<summary>Hint</summary>
Set up the Lagrangian: $\mathcal{L} = 20\sqrt{t_E} + 15\sqrt{t_M} + \lambda(6 - t_E - t_M)$. Take derivatives and set to zero: $\frac{10}{\sqrt{t_E}} = \lambda$ and $\frac{7.5}{\sqrt{t_M}} = \lambda$. So $\frac{10}{\sqrt{t_E}} = \frac{7.5}{\sqrt{t_M}}$, giving $\frac{t_E}{t_M} = \frac{16}{9}$, so $t_E = \frac{96}{25} = 3.84$ hours, $t_M = 2.16$ hours.
</details>

**Problem 8.** Evaluate the argument that "scarcity can be eliminated through technological
progress."

<details>
<summary>Hint</summary>
While technology shifts the PPF outward, it cannot eliminate scarcity because human wants also expand with new possibilities. Consider: did the invention of smartphones eliminate scarcity, or create new wants (apps, data plans, accessories)? Technological progress changes the *composition* of scarcity but does not eliminate it.
</details>

**Problem 9.** A command economy decides to allocate all resources to military production during a
war. Using PPF analysis, explain: (a) The short-run trade-off (b) The long-run consequences when the
war ends (c) Why a market economy might make different choices

<details>
<summary>Hint</summary>
(a) All production at the military goods intercept of the PPF — zero consumer goods. (b) Capital stock depreciates, infrastructure decays $\Rightarrow$ PPF shifts inward post-war (the "peace dividend" in reverse). (c) In a market economy, consumer demand for food, housing, etc. would push production toward a more balanced point, though government could still intervene.
</details>

**Problem 10.** "The concept of opportunity cost implies that there is no such thing as a free
lunch." Discuss this statement with reference to the PPF model.

<details>
<summary>Hint</summary>
Even a "free" school meal costs resources that could have been used elsewhere (teacher salaries, ingredients, kitchen equipment). The opportunity cost is the next-best use of those resources. Formally: if resources are on the PPF, producing more of anything requires giving up something else. If resources are inside the PPF, "free" goods may use unemployed resources — but even then, there may be alternative uses for those resources.
</details>

**Problem 11.** An economy produces capital goods ($K$) and consumer goods ($C$) with PPF
$C = 400 - K^2$. The economy currently produces at $K = 10, C = 300$. (a) Is this point on, inside,
or outside the PPF? (b) If the government wants to increase capital goods production to $K = 15$,
what is the opportunity cost in terms of consumer goods? (c) Evaluate whether this trade-off is
justified for a developing economy seeking long-term growth.

<details>
<summary>Hint</summary>
(a) At $K = 10$: $C = 400 - 100 = 300$. The point $(10, 300)$ lies exactly on the PPF — productively efficient.
(b) At $K = 15$: $C = 400 - 225 = 175$. Opportunity cost = $300 - 175 = 125$ units of consumer goods.
(c) Evaluation: In the short run, consumers experience a significant reduction in living standards. However, increased capital goods production expands productive capacity, shifting the PPF outward in future periods. This is the fundamental trade-off faced by developing economies like China and South Korea. Whether it is justified depends on the marginal productivity of the additional capital, the time horizon, and the social cost of reduced current consumption.
</details>

**Problem 12.** "A mixed economy always achieves a more efficient allocation of resources than
either a pure market or a pure command economy." To what extent do you agree with this statement?
[25 marks]

<details>
<summary>Hint</summary>
This is an evaluative essay question typical of AQA and Edexcel A Level papers. Structure your answer as follows:
- **Agree**: Mixed economies can correct market failures (public goods, externalities, information asymmetries) through government intervention while retaining the efficiency of the price mechanism for most goods. The Nordic countries combine high living standards with strong social safety nets.
- **Disagree**: Government intervention can itself cause inefficiency — government failure (regulatory capture, bureaucratic waste, distortionary taxes). The "optimal" mix varies by context. Hong Kong's minimal government approach produced high growth; Sweden's extensive welfare state also produces high living standards.
- **Conclusion**: There is no universally optimal mix. The effectiveness of a mixed economy depends on the quality of institutions, the nature of market failures present, and societal preferences regarding equity vs efficiency.
</details>

**Problem 13.** The table below shows the maximum output of two goods that Country A can produce
with its available resources:

| Product | Quantity (units) |
| ------- | ---------------: |
| Cars    |                0 |
| Cars    |              100 |
| Wheat   |              200 |
| Wheat   |                0 |

(a) Plot the PPF and explain its shape. (b) Calculate the opportunity cost of producing 1 additional
car when 50 cars are being produced. (c) If a new technology doubles wheat productivity but has no
effect on car production, explain how the PPF changes.

<details>
<summary>Hint</summary>
(a) The PPF connects (0, 200) to (100, 0). Assuming increasing opportunity cost (concave shape), the curve bows outward from the origin. This reflects that resources are not perfectly adaptable between car manufacturing and wheat farming.
(b) The opportunity cost depends on the shape of the PPF. If we assume a linear PPF for simplicity (constant opportunity cost), the slope is $-200/100 = -2$, so each car costs 2 units of wheat. If the PPF is concave, the opportunity cost at 50 cars is greater than at 0 cars — resources less suited to car production must be transferred from wheat farming.
(c) This is an asymmetric outward shift. The wheat intercept doubles from 200 to 400, but the car intercept remains at 100. The new PPF connects (0, 400) to (100, 0), pivoting outward on the vertical axis. This represents a sector-specific technological improvement.
</details>

**Problem 14.** Evaluate the view that the concept of rational decision making is of limited use in
explaining how consumers actually behave in markets. [25 marks]

<details>
<summary>Hint</summary>
This question requires evaluating the assumptions of rational choice theory against evidence from behavioural economics.
- **Arguments that rationality is limited**: Kahneman and Tversky's prospect theory shows that people are loss-averse — they value losses more heavily than equivalent gains, violating the rational assumption of symmetric preferences. Thaler's mental accounting shows people treat money differently depending on its source (e.g., spending bonus income more freely than salary). Present bias (hyperbolic discounting) leads people to underinvest in long-term goods like pensions. Framing effects mean the same choice presented differently produces different decisions.
- **Arguments that rationality remains useful**: Despite these deviations, the rational model provides strong predictive power for aggregate market behaviour. Firms use rational models effectively for pricing and production decisions. Behavioural deviations are often systematic and can be incorporated into extended models (e.g., incorporating probability weighting into expected utility). The rational model remains the benchmark against which deviations are measured.
- **Conclusion**: Rational decision making is a simplification, but it remains the foundation of economic analysis. Its limitations are well-documented, and behavioural economics provides valuable corrections. For A Level purposes, acknowledge both the predictive power and the empirical limitations.
</details>

:::

:::

:::

:::

:::

:::

:::

:::

:::
