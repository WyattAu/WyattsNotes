---
title: Probability
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: probability
---

## Board Coverage

| Board      | Paper      | Notes                                             |
| ---------- | ---------- | ------------------------------------------------- |
| AQA        | Paper 1, 2 | Basic probability in P1; conditional, Bayes in P2 |
| Edexcel    | P1, P2     | Similar                                           |
| OCR (A)    | Paper 1, 2 | Includes Venn diagrams and tree diagrams          |
| CIE (9709) | P1, P6     | Probability in P1; conditional in P6              |

:::info
Probability questions test logical reasoning as much as formula recall. Always define events
clearly and draw a diagram before calculating.
:::

---

## 1. Kolmogorov's Axioms

**Definition.** A probability function $P$ on a sample space $\Omega$ satisfies:

1. **Non-negativity:** $P(A) \geq 0$ for all events $A \subseteq \Omega$.
2. **Normalisation:** $P(\Omega) = 1$.
3. **Countable additivity:** If $A_1, A_2, \ldots$ are mutually exclusive, then
   $P\!\left(\bigcup_{i}A_i\right) = \sum_i P(A_i)$.

These three axioms are the foundation of all probability theory. Every theorem in probability can be
derived from them.

---

## 2. Basic Probability Results

### 2.1 Complement rule

**Theorem.** $P(A') = 1 - P(A)$.

**Proof.** $A$ and $A'$ are mutually exclusive and $A \cup A' = \Omega$.

$$P(A \cup A') = P(A) + P(A') = P(\Omega) = 1 \implies P(A') = 1 - P(A). \quad \blacksquare$$

### 2.2 Addition rule

**Theorem.** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Proof.** $A \cup B$ can be partitioned into three disjoint sets: $A \cap B'$, $A \cap B$, and
$A' \cap B$.

$$P(A \cup B) = P(A \cap B') + P(A \cap B) + P(A' \cap B)$$

$$P(A) = P(A \cap B') + P(A \cap B) \implies P(A \cap B') = P(A) - P(A \cap B)$$

$$P(B) = P(A \cap B) + P(A' \cap B) \implies P(A' \cap B) = P(B) - P(A \cap B)$$

$$P(A \cup B) = [P(A) - P(A \cap B)] + P(A \cap B) + [P(B) - P(A \cap B)] = P(A) + P(B) - P(A \cap B). \quad \blacksquare$$

For mutually exclusive events ($A \cap B = \emptyset$): $P(A \cup B) = P(A) + P(B)$.

### 2.3 Multiplication rule

**Theorem.** $P(A \cap B) = P(A) \cdot P(B|A)$.

**Proof.** This follows directly from the definition of conditional probability (Section 3.1).
$\blacksquare$

---

## 3. Conditional Probability

### 3.1 Definition

**Definition.** The conditional probability of $A$ given $B$ is

$$P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \text{for } P(B) > 0$$

**Intuition.** $P(A|B)$ is the probability of $A$ occurring **given that we already know $B$ has
occurred**. Knowing $B$ has happened changes our sample space from $\Omega$ to $B$, and we measure
what fraction of $B$ is also in $A$.

---

## 4. Bayes' Theorem

### 4.1 Statement

**Theorem.** For events $A$ and $B$ with $P(B) \gt{} 0$:

$$P(A|B) = \frac{P(B|A) \cdot P(A)}{P(B)}$$

### 4.2 Proof

$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{P(B|A) \cdot P(A)}{P(B)} \quad \blacksquare$$

### 4.3 Law of Total Probability

If $B_1, B_2, \ldots, B_n$ partition $\Omega$ (mutually exclusive and exhaustive):

$$P(A) = \sum_{i=1}^{n}P(A|B_i)P(B_i)$$

### 4.4 Extended Bayes' Theorem

$$P(B_k|A) = \frac{P(A|B_k)P(B_k)}{\sum_{i=1}^{n}P(A|B_i)P(B_i)}$$

:::tip
Bayes' theorem is essential for "reverse" probability questions: "Given that a test is
positive, what is the probability the patient actually has the disease?" Always define events
clearly and identify what is given ($P(A|B)$) versus what is sought ($P(B|A)$).
:::

---

## 5. Independence

### 5.1 Definition

**Definition.** Events $A$ and $B$ are **independent** if and only if

$$P(A \cap B) = P(A) \cdot P(B)$$

### 5.2 Proof: Independence ⟺ conditional probability equals unconditional

**Theorem.** $A$ and $B$ are independent if and only if $P(A|B) = P(A)$ (provided $P(B) \gt{} 0$).

**Proof.**

($\Rightarrow$) If $P(A \cap B) = P(A)P(B)$, then
$P(A|B) = \dfrac{P(A \cap B)}{P(B)} = \dfrac{P(A)P(B)}{P(B)} = P(A)$.

($\Leftarrow$) If $P(A|B) = P(A)$, then $\dfrac{P(A \cap B)}{P(B)} = P(A)$, so
$P(A \cap B) = P(A)P(B)$. $\blacksquare$

**Intuition.** Independence means knowing $B$ occurred gives you **no information** about $A$. The
probability of $A$ is the same whether or not $B$ has happened.

:::warning
"Independent" and "mutually exclusive" are **different** concepts. If $A$ and $B$ are
mutually exclusive and both have positive probability, they are **not** independent (since
$P(A \cap B) = 0 \neq P(A)P(B)$).
:::

---

## 6. Venn Diagrams and Tree Diagrams

### 6.1 Venn diagrams

Venn diagrams represent events as regions. Useful for visualising:

- $A \cup B$, $A \cap B$, $A'$
- Relationships between events
- Applying the addition rule

### 6.2 Tree diagrams

Tree diagrams are useful for sequential experiments. Each branch represents a possible outcome with
its probability. The probability along any path is the product of the probabilities along its
branches (multiplication rule). The probability of any event is found by adding the probabilities of
all paths leading to it (addition rule for mutually exclusive paths).

**Example.** A bag contains 3 red and 2 blue balls. Two balls are drawn without replacement.

$$P(\text{both red}) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

$$P(\text{one of each}) = \frac{3}{5} \times \frac{2}{4} + \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$$

---

## 7. Counting Principles

### 7.1 Factorials

$n! = n(n-1)(n-2)\cdots 1$, with $0! = 1$.

### 7.2 Permutations and combinations

- **Permutations:** ${}^n P_r = \dfrac{n!}{(n-r)!}$ (order matters)
- **Combinations:** ${}^n C_r = \binom{n}{r} = \dfrac{n!}{r!(n-r)!}$ (order does not matter)

### 7.3 Probability with equally likely outcomes

When all outcomes are equally likely:
$P(A) = \dfrac{|A|}{|\Omega|} = \dfrac{\text{number of favourable outcomes}}{\text{total number of outcomes}}$.

---

## Problem Set

<details>
<summary>Problem 1</summary>
Events $A$ and $B$ are such that $P(A) = 0.4$, $P(B) = 0.5$, and $P(A \cup B) = 0.7$. Find $P(A \cap B)$ and $P(A|B)$.
</details>

<details>
<summary>Solution 1</summary>
$P(A \cap B) = P(A) + P(B) - P(A \cup B) = 0.4 + 0.5 - 0.7 = 0.2$.

$P(A|B) = P(A \cap B)/P(B) = 0.2/0.5 = 0.4$.

**If you get this wrong, revise:** [Addition Rule](#22-addition-rule) — Section 2.2.

</details>

<details>
<summary>Problem 2</summary>
A disease affects 1% of a population. A test is 99% accurate (both sensitivity and specificity). A person tests positive. What is the probability they actually have the disease?
</details>

<details>
<summary>Solution 2</summary>
Let $D$ = has disease, $T^+$ = tests positive.

$P(D) = 0.01$, $P(T^+|D) = 0.99$, $P(T^+|D') = 0.01$.

By the law of total probability:
$P(T^+) = P(T^+|D)P(D) + P(T^+|D')P(D') = 0.99(0.01) + 0.01(0.99) = 0.0099 + 0.0099 = 0.0198$.

By Bayes' theorem: $P(D|T^+) = \dfrac{P(T^+|D)P(D)}{P(T^+)} = \dfrac{0.0099}{0.0198} = 0.5$.

Even with a 99% accurate test, a positive result means only a 50% chance of actually having the
disease, because the disease is so rare.

**If you get this wrong, revise:** [Bayes' Theorem](#4-bayes-theorem) — Section 4.

</details>

<details>
<summary>Problem 3</summary>
Prove that if $A$ and $B$ are independent, then so are $A$ and $B'$.
</details>

<details>
<summary>Solution 3</summary>
$P(A \cap B') = P(A) - P(A \cap B) = P(A) - P(A)P(B)$ (by independence)
$= P(A)[1 - P(B)] = P(A)P(B')$. $\blacksquare$

**If you get this wrong, revise:** [Independence](#5-independence) — Section 5.

</details>

<details>
<summary>Problem 4</summary>
A bag contains 4 red, 3 blue, and 2 green balls. Three balls are drawn without replacement. Find the probability that all three are different colours.
</details>

<details>
<summary>Solution 4</summary>
Total ways to choose 3 from 9: $\binom{9}{3} = 84$.

Ways to get one of each colour: $\binom{4}{1}\binom{3}{1}\binom{2}{1} = 4 \times 3 \times 2 = 24$.

$P = 24/84 = 2/7$.

**If you get this wrong, revise:** [Counting Principles](#7-counting-principles) — Section 7.

</details>

<details>
<summary>Problem 5</summary>
Events $A$, $B$, $C$ are such that $P(A) = 0.3$, $P(B) = 0.4$, $P(C) = 0.5$, $P(A \cap B) = 0.1$, $P(A \cap C) = 0.15$, $P(B \cap C) = 0.2$, and $P(A \cap B \cap C) = 0.05$. Find $P(A \cup B \cup C)$.
</details>

<details>
<summary>Solution 5</summary>
By the inclusion-exclusion principle:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$
$$= 0.3 + 0.4 + 0.5 - 0.1 - 0.15 - 0.2 + 0.05 = 0.8$$

**If you get this wrong, revise:** [Addition Rule](#22-addition-rule) — Section 2.2.

</details>

<details>
<summary>Problem 6</summary>
Two coins are tossed. Given that at least one is heads, find the probability that both are heads.
</details>

<details>
<summary>Solution 6</summary>
$\Omega = \{HH, HT, TH, TT\}$. $A = \{\text{at least one heads}\} = \{HH, HT, TH\}$. $B = \{\text{both heads}\} = \{HH\}$.

$P(B|A) = P(B \cap A)/P(A) = P(B)/P(A) = (1/4)/(3/4) = 1/3$.

**If you get this wrong, revise:** [Conditional Probability](#3-conditional-probability) —
Section 3.

</details>

<details>
<summary>Problem 7</summary>
A fair die is rolled. Let $A$ = "even number" and $B$ = "number greater than 3". Are $A$ and $B$ independent?
</details>

<details>
<summary>Solution 7</summary>
$A = \{2, 4, 6\}$, $B = \{4, 5, 6\}$, $A \cap B = \{4, 6\}$.

$P(A) = 3/6 = 1/2$, $P(B) = 3/6 = 1/2$, $P(A \cap B) = 2/6 = 1/3$.

$P(A)P(B) = 1/4 \neq 1/3 = P(A \cap B)$. So $A$ and $B$ are **not** independent.

**If you get this wrong, revise:** [Independence](#5-independence) — Section 5.

</details>

<details>
<summary>Problem 8</summary>
In a school, 60% of students study Maths, 40% study Physics, and 25% study both. A student is chosen at random. Given that they study Physics, find the probability they study Maths.
</details>

<details>
<summary>Solution 8</summary>
$P(M) = 0.6$, $P(P) = 0.4$, $P(M \cap P) = 0.25$.

$P(M|P) = P(M \cap P)/P(P) = 0.25/0.4 = 0.625$.

**If you get this wrong, revise:** [Conditional Probability](#3-conditional-probability) —
Section 3.

</details>

<details>
<summary>Problem 9</summary>
A box contains 10 items, 3 of which are defective. Items are inspected one by one without replacement. Find the probability that the first defective item is the third one inspected.
</details>

<details>
<summary>Solution 9</summary>
First two non-defective, third defective:

$$P = \frac{7}{10} \times \frac{6}{9} \times \frac{3}{8} = \frac{7 \times 6 \times 3}{720} = \frac{126}{720} = \frac{7}{40}$$

**If you get this wrong, revise:** [Tree Diagrams](#62-tree-diagrams) — Section 6.2.

</details>

<details>
<summary>Problem 10</summary>
A machine produces components. 5% are defective. Components are packed in boxes of 20. Find the probability that a box contains exactly one defective component.
</details>

<details>
<summary>Solution 10</summary>
This is a binomial scenario: $X \sim B(20, 0.05)$.

$P(X=1) = \binom{20}{1}(0.05)^1(0.95)^{19} = 20 \times 0.05 \times 0.95^{19} \approx 0.3774$.

**If you get this wrong, revise:** [Binomial Distribution](#41-binomial) — Statistical Distributions
chapter.

</details>

<details>
<summary>Problem 11</summary>
Prove that $P(A \cup B') = 1 - P(A' \cap B)$.
</details>

<details>
<summary>Solution 11</summary>
By De Morgan's law: $(A \cup B')' = A' \cap B$.

So $P(A \cup B') = 1 - P((A \cup B')') = 1 - P(A' \cap B)$. $\blacksquare$

**If you get this wrong, revise:** [Complement Rule](#21-complement-rule) — Section 2.1.

</details>

<details>
<summary>Problem 12</summary>
From a standard 52-card deck, 5 cards are dealt. Find the probability of getting a flush (all 5 cards of the same suit).
</details>

<details>
<summary>Solution 12</summary>
Total ways: $\binom{52}{5} = 2598960$.

Ways to get a flush: choose suit (4 ways), then 5 cards from that suit ($\binom{13}{5} = 1287$).

Total flushes: $4 \times 1287 = 5148$.

$P(\text{flush}) = 5148/2598960 \approx 0.00198 \approx 0.2\%$.

**If you get this wrong, revise:** [Counting Principles](#7-counting-principles) — Section 7.

</details>

:::

:::

:::
