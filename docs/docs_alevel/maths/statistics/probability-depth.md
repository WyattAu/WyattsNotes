---
title: Probability (Extended)
date: 2026-04-23T00:00:00.000Z
tags: [Mathematics, ALevel]
categories: [Mathematics]
slug: probability-extended
---

## Probability (Extended Treatment)

This document extends the core probability material with rigorous treatments of conditional
probability, independence, Venn diagrams, tree diagrams, and Bayes' theorem.

:::info
Probability problems reward careful notation and clear event definitions. Always define your events
explicitly before writing any equations.
:::

<hr />

## 1. Conditional Probability

### 1.1 Definition

The **conditional probability** of event $A$ given that event $B$ has occurred is:

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

provided $P(B) \gt 0$.

**Interpretation.** $P(A \mid B)$ is the probability of $A$ within the "reduced sample space" $B$.

### 1.2 Multiplication rule

For any two events $A$ and $B$:

$$P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$$

**Extension to three events:**

$$P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B)$$

### 1.3 Worked example

**Problem.** A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find
the probability that both are red.

Let $R_1$ = "first ball is red", $R_2$ = "second ball is red".

$$P(R_1 \cap R_2) = P(R_1) \cdot P(R_2 \mid R_1) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$$

### 1.4 The Law of Total Probability

If $\{B_1, B_2, \ldots, B_n\}$ is a partition of the sample space (mutually exclusive and exhaustive),
then for any event $A$:

$$\boxed{P(A) = \sum_{i=1}^{n} P(A \mid B_i)\,P(B_i)}$$

**Proof.** Since the $B_i$ partition $\Omega$:

$$A = A \cap \Omega = A \cap \!\left(\bigcup_{i=1}^n B_i\right) = \bigcup_{i=1}^n (A \cap B_i)$$

The sets $A \cap B_i$ are mutually exclusive, so:

$$P(A) = \sum_{i=1}^n P(A \cap B_i) = \sum_{i=1}^n P(A \mid B_i)\,P(B_i) \quad \blacksquare$$

### 1.5 Worked example: law of total probability

**Problem.** In a factory, Machine $A$ produces 60% of items and Machine $B$ produces 40%. Machine
$A$ has a defect rate of 2% and Machine $B$ has a defect rate of 5%. Find the probability that a
randomly selected item is defective.

Let $D$ = "item is defective".

$$P(D) = P(D \mid A)\,P(A) + P(D \mid B)\,P(B) = 0.02 \times 0.6 + 0.05 \times 0.4 = 0.012 + 0.020 = 0.032$$

<hr />

## 2. Bayes' Theorem

### 2.1 Statement

**Bayes' Theorem.** For events $A$ and $B$ with $P(B) \gt 0$:

$$\boxed{P(A \mid B) = \frac{P(B \mid A)\,P(A)}{P(B)}}$$

Using the law of total probability in the denominator, for a partition $\{A_1, \ldots, A_n\}$:

$$P(A_i \mid B) = \frac{P(B \mid A_i)\,P(A_i)}{\sum_{j=1}^{n} P(B \mid A_j)\,P(A_j)}$$

### 2.2 Proof

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{P(B \mid A)\,P(A)}{P(B)}$$

The first step is the definition of conditional probability. The second step applies the
multiplication rule to the numerator. $\blacksquare$

### 2.3 Worked example

**Problem.** A disease affects 1% of a population. A test for the disease has a 95% true positive
rate ($P(\mathrm{positive} \mid \mathrm{disease}) = 0.95$) and a 10% false positive rate
($P(\mathrm{positive} \mid \mathrm{no\ disease}) = 0.10$). If a person tests positive, what is the
probability they actually have the disease?

Let $D$ = "has disease", $T^+$ = "tests positive".

$$P(D \mid T^+) = \frac{P(T^+ \mid D)\,P(D)}{P(T^+ \mid D)\,P(D) + P(T^+ \mid D')\,P(D')}$$

$$= \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.10 \times 0.99} = \frac{0.0095}{0.0095 + 0.099} = \frac{0.0095}{0.1085} \approx 0.0876$$

So even with a positive test, there is only about an 8.8% chance of having the disease.

:::warning Common Pitfall
This counterintuitive result arises because the disease is rare. The number of false positives far
exceeds the number of true positives. This is the **base rate fallacy** -- ignoring the prior
probability of the condition.
:::

### 2.4 Worked example: factory with three machines

**Problem.** A factory has three machines producing bolts. Machine 1 produces 50%, Machine 2 produces
30%, and Machine 3 produces 20%. Defect rates are 1%, 2%, and 3% respectively. A bolt is found to
be defective. What is the probability it came from Machine 3?

$$P(M_3 \mid D) = \frac{P(D \mid M_3)\,P(M_3)}{P(D \mid M_1)\,P(M_1) + P(D \mid M_2)\,P(M_2) + P(D \mid M_3)\,P(M_3)}$$

$$= \frac{0.03 \times 0.20}{0.01 \times 0.50 + 0.02 \times 0.30 + 0.03 \times 0.20}$$

$$= \frac{0.006}{0.005 + 0.006 + 0.006} = \frac{0.006}{0.017} \approx 0.353$$

<hr />

## 3. Venn Diagrams

### 3.1 Notation and regions

For two events $A$ and $B$, the Venn diagram has four regions:

| Region          | Description                      | Probability          |
| --------------- | -------------------------------- | -------------------- |
| $A \cap B$      | In both $A$ and $B$              | $P(A \cap B)$        |
| $A \cap B'$     | In $A$ but not in $B$            | $P(A) - P(A \cap B)$ |
| $A' \cap B$     | In $B$ but not in $A$            | $P(B) - P(A \cap B)$ |
| $A' \cap B'$    | In neither $A$ nor $B$           | $1 - P(A \cup B)$    |

### 3.2 Worked example

**Problem.** In a group of 100 students, 45 study Maths, 30 study Physics, and 15 study both. A
student is chosen at random. Find: (a) the probability they study at least one subject; (b) the
probability they study Maths given they study Physics.

$$P(M) = 0.45, \quad P(P) = 0.30, \quad P(M \cap P) = 0.15$$

(a) $P(M \cup P) = 0.45 + 0.30 - 0.15 = 0.60$

(b) $P(M \mid P) = \dfrac{P(M \cap P)}{P(P)} = \dfrac{0.15}{0.30} = 0.50$

### 3.3 Three-event Venn diagrams

For three events $A$, $B$, $C$, the inclusion-exclusion formula gives:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

### 3.4 Worked example: three events

**Problem.** In a survey, 60% of people like tea, 50% like coffee, 40% like chocolate, 30% like
tea and coffee, 25% like tea and chocolate, 20% like coffee and chocolate, and 10% like all three.
What proportion likes none of these?

$$P(T \cup C \cup H) = 0.6 + 0.5 + 0.4 - 0.3 - 0.25 - 0.2 + 0.1 = 0.85$$

$$P(\mathrm{none}) = 1 - 0.85 = 0.15$$

<hr />

## 4. Tree Diagrams

### 4.1 Structure

A tree diagram represents a sequence of events. Each branch represents a possible outcome with its
probability. The probability of any path through the tree is the product of the probabilities along
that path.

### 4.2 Rules

1. The probabilities on branches from any single node must sum to 1.
2. The probability of an outcome is the product of probabilities along the path to that outcome.
3. To find the probability of a compound event, add the probabilities of all paths leading to that
   event.

### 4.3 Worked example: two-stage selection

**Problem.** A box contains 7 red and 5 green counters. Two counters are drawn at random without
replacement. Find the probability that: (a) both are the same colour; (b) exactly one is red.

(a) $P(\mathrm{both\ red}) = \dfrac{7}{12} \times \dfrac{6}{11} = \dfrac{42}{132} = \dfrac{7}{22}$

$P(\mathrm{both\ green}) = \dfrac{5}{12} \times \dfrac{4}{11} = \dfrac{20}{132} = \dfrac{5}{33}$

$P(\mathrm{same\ colour}) = \dfrac{7}{22} + \dfrac{5}{33} = \dfrac{21 + 10}{66} = \dfrac{31}{66}$

(b) $P(\mathrm{one\ red}) = \dfrac{7}{12} \times \dfrac{5}{11} + \dfrac{5}{12} \times \dfrac{7}{11} = \dfrac{35}{132} + \dfrac{35}{132} = \dfrac{70}{132} = \dfrac{35}{66}$

### 4.4 Worked example: with replacement

**Problem.** Two dice are rolled. Find the probability that the sum is at least 9, given that the
first die shows at least 4.

Let $A$ = "sum $\geq 9$" and $B$ = "first die $\geq 4$".

$$P(B) = \frac{3}{6} = \frac{1}{2}$$

$$P(A \cap B): \mathrm{First\ die} = 4: \mathrm{need\ second} \geq 5 \implies 2\ \mathrm{outcomes}$$

$$\mathrm{First\ die} = 5: \mathrm{need\ second} \geq 4 \implies 3\ \mathrm{outcomes}$$

$$\mathrm{First\ die} = 6: \mathrm{need\ second} \geq 3 \implies 4\ \mathrm{outcomes}$$

$$P(A \cap B) = \frac{2 + 3 + 4}{36} = \frac{9}{36} = \frac{1}{4}$$

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{1/4}{1/2} = \frac{1}{2}$$

<hr />

## 5. Independence

### 5.1 Definition

Events $A$ and $B$ are **independent** if and only if:

$$P(A \cap B) = P(A) \cdot P(B)$$

Equivalently: $P(A \mid B) = P(A)$, or $P(B \mid A) = P(B)$.

**Interpretation.** Knowing that $B$ occurred provides no information about whether $A$ occurred.

### 5.2 Pairwise vs mutual independence

For three events $A$, $B$, $C$:

- **Pairwise independence** means each pair is independent.
- **Mutual independence** means pairwise independence **and** $P(A \cap B \cap C) = P(A)\,P(B)\,P(C)$.

Mutual independence is a stronger condition. Pairwise independence does not imply mutual
independence.

### 5.3 Worked example

**Problem.** Events $A$ and $B$ are independent with $P(A) = 0.4$ and $P(B) = 0.7$. Find:
(a) $P(A \cap B)$; (b) $P(A \cup B)$; (c) $P(A \mid B)$; (d) $P(A' \cap B')$.

(a) $P(A \cap B) = 0.4 \times 0.7 = 0.28$

(b) $P(A \cup B) = 0.4 + 0.7 - 0.28 = 0.82$

(c) $P(A \mid B) = P(A) = 0.4$ (by independence)

(d) $P(A' \cap B') = P((A \cup B)') = 1 - 0.82 = 0.18$

**Note:** $P(A' \cap B') = P(A') \cdot P(B') = 0.6 \times 0.3 = 0.18$ confirms the complements are
also independent.

### 5.4 Theorem: complements of independent events are independent

**Theorem.** If $A$ and $B$ are independent, then $A'$ and $B'$ are also independent.

**Proof.**

$$P(A' \cap B') = P((A \cup B)') = 1 - P(A \cup B) = 1 - P(A) - P(B) + P(A)P(B)$$

$$= (1 - P(A))(1 - P(B)) = P(A') \cdot P(B') \quad \blacksquare$$

:::warning Common Pitfall
"Independent" and "mutually exclusive" are different concepts. In fact, if $A$ and $B$ are both
non-trivial (positive probability) and mutually exclusive, they **cannot** be independent:
$P(A \cap B) = 0 \neq P(A)P(B)$.
:::

<hr />

## 6. Practice Problems

### Problem 1

In a class of 40 students, 25 play football, 18 play cricket, and 5 play neither. A student is
chosen at random. Given that they play football, find the probability they also play cricket.

<details>
<summary>Solution</summary>

$P(F) = 25/40 = 0.625$, $P(C) = 18/40 = 0.45$, $P(F \cup C) = 35/40 = 0.875$.

$P(F \cap C) = 0.625 + 0.45 - 0.875 = 0.20$.

$P(C \mid F) = 0.20 / 0.625 = 0.32$.

</details>

### Problem 2

A test for a condition has sensitivity 92% (true positive rate) and specificity 96% (true negative
rate). The condition prevalence is 3%. Find: (a) $P(\mathrm{condition} \mid \mathrm{positive})$;
(b) $P(\mathrm{condition} \mid \mathrm{negative})$.

<details>
<summary>Solution</summary>

$P(T^+ \mid C) = 0.92$, $P(T^- \mid C') = 0.96$, $P(C) = 0.03$.

(a) $P(C \mid T^+) = \dfrac{0.92 \times 0.03}{0.92 \times 0.03 + 0.04 \times 0.97} = \dfrac{0.0276}{0.0276 + 0.0388} = \dfrac{0.0276}{0.0664} \approx 0.416$

(b) $P(C \mid T^-) = \dfrac{0.08 \times 0.03}{0.08 \times 0.03 + 0.96 \times 0.97} = \dfrac{0.0024}{0.0024 + 0.9312} = \dfrac{0.0024}{0.9336} \approx 0.00257$

</details>

### Problem 3

Events $A$ and $B$ are independent with $P(A) = \dfrac{1}{3}$ and $P(A \cup B) = \dfrac{3}{4}$. Find
$P(B)$.

<details>
<summary>Solution</summary>

$P(A \cup B) = P(A) + P(B) - P(A)P(B)$.

$\dfrac{3}{4} = \dfrac{1}{3} + P(B) - \dfrac{1}{3}P(B)$.

$\dfrac{3}{4} - \dfrac{1}{3} = \dfrac{2}{3}P(B)$.

$\dfrac{5}{12} = \dfrac{2}{3}P(B) \implies P(B) = \dfrac{5}{8}$.

</details>

### Problem 4

A bag contains 4 red, 6 green, and 5 blue balls. Three balls are drawn without replacement. Find
the probability that they are all different colours.

<details>
<summary>Solution</summary>

Total balls $= 15$. Ways to draw one of each colour:

Number of ways $= \binom{4}{1}\binom{6}{1}\binom{5}{1} = 120$.

Total ways to draw 3 from 15 $= \binom{15}{3} = 455$.

$P = \dfrac{120}{455} = \dfrac{24}{91} \approx 0.264$.

Alternatively, using conditional probability:

$P = \dfrac{4}{15} \times \dfrac{6}{14} \times \dfrac{5}{13} \times 6 = \dfrac{720}{2730} = \dfrac{24}{91}$.

(The factor of 6 accounts for the $3! = 6$ orderings of the three colours.)

</details>
