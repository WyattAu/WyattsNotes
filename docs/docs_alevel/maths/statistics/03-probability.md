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

**Corollary.** For any event $A$, $P(\emptyset) = 0$.

**Proof.** $P(\emptyset) = P(\Omega') = 1 - P(\Omega) = 1 - 1 = 0$. $\blacksquare$

**Corollary.** If $A \subseteq B$, then $P(A) \leq P(B)$.

**Proof.** Write $B = A \cup (B \cap A')$ where the two sets are disjoint. Then
$P(B) = P(A) + P(B \cap A') \geq P(A)$ since $P(B \cap A') \geq 0$. $\blacksquare$

### 2.2 Addition rule

**Theorem.** $P(A \cup B) = P(A) + P(B) - P(A \cap B)$.

**Proof.** $A \cup B$ can be partitioned into three disjoint sets: $A \cap B'$, $A \cap B$, and
$A' \cap B$.

$$P(A \cup B) = P(A \cap B') + P(A \cap B) + P(A' \cap B)$$

$$P(A) = P(A \cap B') + P(A \cap B) \implies P(A \cap B') = P(A) - P(A \cap B)$$

$$P(B) = P(A \cap B) + P(A' \cap B) \implies P(A' \cap B) = P(B) - P(A \cap B)$$

$$P(A \cup B) = [P(A) - P(A \cap B)] + P(A \cap B) + [P(B) - P(A \cap B)] = P(A) + P(B) - P(A \cap B). \quad \blacksquare$$

For mutually exclusive events ($A \cap B = \emptyset$): $P(A \cup B) = P(A) + P(B)$.

**Corollary (Boole's inequality).** For any events $A$ and $B$, $P(A \cup B) \leq P(A) + P(B)$.

**Proof.** Since $P(A \cap B) \geq 0$, we have
$P(A \cup B) = P(A) + P(B) - P(A \cap B) \leq P(A) + P(B)$. $\blacksquare$

### 2.3 Multiplication rule

**Theorem.** $P(A \cap B) = P(A) \cdot P(B|A)$.

**Proof.** This follows directly from the definition of conditional probability (Section 3.1).
$\blacksquare$

**General multiplication rule.** For events $A_1, A_2, \ldots, A_n$:

$$P\!\left(\bigcap_{i=1}^{n} A_i\right) = P(A_1) \cdot P(A_2|A_1) \cdot P(A_3|A_1 \cap A_2) \cdots P(A_n|A_1 \cap \cdots \cap A_{n-1})$$

---

## 3. Conditional Probability

### 3.1 Definition

**Definition.** The conditional probability of $A$ given $B$ is

$$P(A|B) = \frac{P(A \cap B)}{P(B)} \quad \mathrm{for } P(B) > 0$$

**Intuition.** $P(A|B)$ is the probability of $A$ occurring **given that we already know $B$ has
occurred**. Knowing $B$ has happened changes our sample space from $\Omega$ to $B$, and we measure
what fraction of $B$ is also in $A$.

### 3.2 Properties of conditional probability

**Theorem.** Conditional probability satisfies the Kolmogorov axioms for a fixed conditioning event
$B$ (with $P(B) > 0$).

**Proof.**

1. $P(A|B) = P(A \cap B)/P(B) \geq 0$ since $P(A \cap B) \geq 0$ and $P(B) > 0$.
2. $P(\Omega|B) = P(\Omega \cap B)/P(B) = P(B)/P(B) = 1$.
3. If $A_1, A_2, \ldots$ are mutually exclusive, then so are $A_1 \cap B, A_2 \cap B, \ldots$, and

$$P\!\left(\bigcup_i A_i \,\middle|\, B\right) = \frac{P\!\left(\left(\bigcup_i A_i\right) \cap B\right)}{P(B)} = \frac{\sum_i P(A_i \cap B)}{P(B)} = \sum_i P(A_i|B). \quad \blacksquare$$

**Corollary.** The complement rule holds for conditional probability: $P(A'|B) = 1 - P(A|B)$.

**Proof.** This follows from applying the complement rule within the conditional probability
measure, which is justified by the theorem above. $\blacksquare$

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

### 5.3 Pairwise and mutual independence

**Definition.** Events $A_1, A_2, \ldots, A_n$ are **mutually independent** if for every subset
$\\{i_1, \ldots, i_k\\} \subseteq \\{1, 2, \ldots, n\\}$ with $k \geq 2$:

$$P(A_{i_1} \cap A_{i_2} \cap \cdots \cap A_{i_k}) = P(A_{i_1}) \cdot P(A_{i_2}) \cdots P(A_{i_k})$$

**Definition.** Events $A_1, A_2, \ldots, A_n$ are **pairwise independent** if every pair
$(A_i, A_j)$ with $i \neq j$ is independent.

:::warning
Mutual independence is a **stronger** condition than pairwise independence. Pairwise
independence does not imply mutual independence. For example, with two independent coin tosses, let
$A$ = "first toss is heads", $B$ = "second toss is heads", $C$ = "both tosses are the same". Then
$A$, $B$, $C$ are pairwise independent but not mutually independent since
$P(A \cap B \cap C) = 0 \neq P(A)P(B)P(C) = 1/8$.
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

$$P(\mathrm{both red}) = \frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

$$P(\mathrm{one of each}) = \frac{3}{5} \times \frac{2}{4} + \frac{2}{5} \times \frac{3}{4} = \frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$$

---

## 7. Counting Principles

### 7.1 Factorials

$n! = n(n-1)(n-2)\cdots 1$, with $0! = 1$.

### 7.2 Permutations and combinations

- **Permutations:** ${}^n P_r = \dfrac{n!}{(n-r)!}$ (order matters)
- **Combinations:** ${}^n C_r = \binom{n}{r} = \dfrac{n!}{r!(n-r)!}$ (order does not matter)

### 7.3 Probability with equally likely outcomes

When all outcomes are equally likely:
$P(A) = \dfrac{|A|}{|\Omega|} = \dfrac{\mathrm{number of favourable outcomes}}{\mathrm{total number of outcomes}}$.

---

## 8. Venn Diagrams for Three Events

### 8.1 Inclusion-exclusion principle

**Theorem (Inclusion-Exclusion for three events).** For events $A$, $B$, $C$:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C)$$

**Proof.** Apply the two-event inclusion-exclusion rule twice:

$$P(A \cup B \cup C) = P(A) + P(B \cup C) - P(A \cap (B \cup C))$$

Now $P(B \cup C) = P(B) + P(C) - P(B \cap C)$, and by the distributive law of set theory
$A \cap (B \cup C) = (A \cap B) \cup (A \cap C)$, so:

$$P(A \cap (B \cup C)) = P(A \cap B) + P(A \cap C) - P(A \cap B \cap C)$$

Substituting:

$$P(A \cup B \cup C) = P(A) + P(B) + P(C) - P(B \cap C) - P(A \cap B) - P(A \cap C) + P(A \cap B \cap C). \quad \blacksquare$$

### 8.2 De Morgan's laws for three events

**Theorem.** For events $A$, $B$, $C$:

$$(A \cup B \cup C)' = A' \cap B' \cap C'$$

$$(A \cap B \cap C)' = A' \cup B' \cup C'$$

**Proof.** The three-event case follows by induction from the two-event case. For the first law:

$$(A \cup B \cup C)' = ((A \cup B) \cup C)' = (A \cup B)' \cap C' = A' \cap B' \cap C'. \quad \blacksquare$$

### 8.3 Working with three-event Venn diagrams

When solving problems with three events, the Venn diagram is divided into **8 regions** (including
the exterior). The fundamental approach is:

1. Start from the innermost region $A \cap B \cap C$ and work outward.
2. Use the given information to find the value of each region.
3. Each region represents a **disjoint** event, so probabilities add.

**Example.** In a class of 40 students, 18 study Maths, 15 study Physics, and 12 study Chemistry. 5
study all three, 8 study Maths and Physics, 6 study Maths and Chemistry, and 7 study Physics and
Chemistry.

The region for "Maths only" is: $18 - 8 - 6 + 5 = 9$ (subtract overlaps, add back the triple
overlap).

| Region               | Description                | Calculation      | Count |
| -------------------- | -------------------------- | ---------------- | ----- |
| $A \cap B \cap C$    | All three                  | Given            | 5     |
| $A \cap B \cap C'$   | Maths and Physics only     | $8 - 5$          | 3     |
| $A \cap C \cap B'$   | Maths and Chemistry only   | $6 - 5$          | 1     |
| $B \cap C \cap A'$   | Physics and Chemistry only | $7 - 5$          | 2     |
| $A \cap B' \cap C'$  | Maths only                 | $18 - 3 - 1 - 5$ | 9     |
| $B \cap A' \cap C'$  | Physics only               | $15 - 3 - 2 - 5$ | 5     |
| $C \cap A' \cap B'$  | Chemistry only             | $12 - 1 - 2 - 5$ | 4     |
| $A' \cap B' \cap C'$ | None                       | $40 - 29$        | 11    |

**Check:** $5 + 3 + 1 + 2 + 9 + 5 + 4 + 11 = 40$. $\checkmark$

---

## 9. Multi-Stage Experiments and Tree Diagrams

### 9.1 Formal structure

A multi-stage experiment consists of a sequence of trials. A tree diagram represents this as:

- **Levels** correspond to stages (trials).
- **Branches** at each node represent possible outcomes at that stage.
- **Branch probabilities** are the conditional probabilities of each outcome given the path so far.
- **Path probability** is the product of all branch probabilities along the path.
- **Event probability** is the sum of all relevant path probabilities.

### 9.2 With and without replacement

**With replacement.** At each stage, the sample space and probabilities reset. The trials are
independent.

**Without replacement.** At each stage, the sample space shrinks. The trials are **not**
independent; later probabilities depend on earlier outcomes.

**Example.** A bag contains 5 balls: 2 red and 3 blue. Three balls are drawn without replacement.
Find the probability of drawing exactly 2 red balls.

There are $\binom{3}{2} = 3$ ways to arrange the two red draws among three positions: RRB, RBR, BRR.

$$P(\mathrm{RRB}) = \frac{2}{5} \times \frac{1}{4} \times \frac{3}{3} = \frac{6}{60} = \frac{1}{10}$$

$$P(\mathrm{RBR}) = \frac{2}{5} \times \frac{3}{4} \times \frac{1}{3} = \frac{6}{60} = \frac{1}{10}$$

$$P(\mathrm{BRR}) = \frac{3}{5} \times \frac{2}{4} \times \frac{1}{3} = \frac{6}{60} = \frac{1}{10}$$

$$P(\mathrm{exactly 2 red}) = \frac{1}{10} + \frac{1}{10} + \frac{1}{10} = \frac{3}{10}$$

### 9.3 At least and at most problems

For "at least $k$" problems, it is often easier to compute the complement:
$P(\mathrm{at least } k) = 1 - P(\mathrm{at most } k-1)$.

**Example.** A fair coin is tossed 4 times. Find $P(\mathrm{at least 3 heads})$.

$$P(\mathrm{at least 3 heads}) = P(\mathrm{exactly 3 heads}) + P(\mathrm{exactly 4 heads})$$

$$= \binom{4}{3}\left(\frac{1}{2}\right)^4 + \binom{4}{4}\left(\frac{1}{2}\right)^4 = \frac{4}{16} + \frac{1}{16} = \frac{5}{16}$$

Alternatively:
$P(\mathrm{at least 3 heads}) = 1 - P(\mathrm{at most 2 heads}) = 1 - \frac{11}{16} = \frac{5}{16}$.

### 9.4 Conditional probability from tree diagrams

To find a conditional probability $P(X|Y)$ from a tree diagram:

1. Identify all paths leading to $Y$ (the conditioning event).
2. Sum these path probabilities to get $P(Y)$.
3. Among those paths, identify which also satisfy $X$.
4. Sum the relevant path probabilities to get $P(X \cap Y)$.
5. $P(X|Y) = P(X \cap Y)/P(Y)$.

---

## 10. Discrete Random Variables and Probability Mass Functions

### 10.1 Discrete random variables

**Definition.** A **random variable** is a function $X \colon \Omega \to \mathbb{R}$ that assigns a
real number to each outcome in the sample space.

**Definition.** A random variable $X$ is **discrete** if its set of possible values is countable
(i.e. finite or countably infinite).

**Example.** If a fair die is rolled, define $X$ = "the number shown". Then $X$ takes values in
$\\{1, 2, 3, 4, 5, 6\\}$, so $X$ is discrete.

**Example.** If a coin is tossed until the first head appears, define $X$ = "number of tosses". Then
$X$ takes values in $\\{1, 2, 3, \ldots\\}$, which is countably infinite.

### 10.2 Probability mass function (PMF)

**Definition.** The **probability mass function** (PMF) of a discrete random variable $X$ is the
function $p(x) = P(X = x)$, defined for all $x \in \mathbb{R}$.

**Properties of a PMF.** A function $p \colon \mathbb{R} \to [0, 1]$ is a valid PMF if and only if:

1. $p(x) \geq 0$ for all $x$.
2. $\displaystyle\sum_{\mathrm{all } x} p(x) = 1$.

**Proof.** Property 1 follows from non-negativity of probability. Property 2 follows because the
events $\\{X = x\\}$ for all possible values of $x$ form a partition of $\Omega$, so their
probabilities sum to 1 by the normalisation axiom. $\blacksquare$

### 10.3 Cumulative distribution function (CDF)

**Definition.** The **cumulative distribution function** (CDF) of a discrete random variable $X$ is

$$F(x) = P(X \leq x) = \sum_{t \leq x} p(t)$$

The CDF is a non-decreasing, right-continuous function with $\lim_{x \to -\infty} F(x) = 0$ and
$\lim_{x \to +\infty} F(x) = 1$.

### 10.4 Expectation and variance

**Definition.** The **expected value** (mean) of a discrete random variable $X$ is

$$E(X) = \mu = \sum_{\mathrm{all } x} x \cdot p(x)$$

**Definition.** The **variance** of $X$ is

$$\mathrm{Var}(X) = \sigma^2 = E\!\left[(X - \mu)^2\right] = \sum_{\mathrm{all } x} (x - \mu)^2 \cdot p(x)$$

An equivalent computational formula is:

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2$$

**Proof of the computational formula:**

$$\mathrm{Var}(X) = E\!\left[(X - \mu)^2\right] = E(X^2 - 2\mu X + \mu^2) = E(X^2) - 2\mu E(X) + \mu^2 = E(X^2) - \mu^2. \quad \blacksquare$$

### 10.5 Worked example

A biased die has PMF:

| $x$    | 1      | 2     | 3     | 4     | 5     | 6      |
| ------ | ------ | ----- | ----- | ----- | ----- | ------ |
| $p(x)$ | $1/12$ | $1/6$ | $1/4$ | $1/4$ | $1/6$ | $1/12$ |

**Check:**
$1/12 + 1/6 + 1/4 + 1/4 + 1/6 + 1/12 = 1/12 + 2/12 + 3/12 + 3/12 + 2/12 + 1/12 = 12/12 = 1$.
$\checkmark$

$$E(X) = 1\!\cdot\!\tfrac{1}{12} + 2\!\cdot\!\tfrac{1}{6} + 3\!\cdot\!\tfrac{1}{4} + 4\!\cdot\!\tfrac{1}{4} + 5\!\cdot\!\tfrac{1}{6} + 6\!\cdot\!\tfrac{1}{12}$$

$$= \tfrac{1}{12} + \tfrac{2}{6} + \tfrac{3}{4} + \tfrac{4}{4} + \tfrac{5}{6} + \tfrac{6}{12} = \tfrac{1 + 4 + 9 + 12 + 10 + 6}{12} = \tfrac{42}{12} = 3.5$$

$$E(X^2) = 1\!\cdot\!\tfrac{1}{12} + 4\!\cdot\!\tfrac{1}{6} + 9\!\cdot\!\tfrac{1}{4} + 16\!\cdot\!\tfrac{1}{4} + 25\!\cdot\!\tfrac{1}{6} + 36\!\cdot\!\tfrac{1}{12}$$

$$= \tfrac{1 + 8 + 27 + 48 + 50 + 36}{12} = \tfrac{170}{12} = \tfrac{85}{6}$$

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = \tfrac{85}{6} - \tfrac{49}{4} = \tfrac{170 - 147}{12} = \tfrac{23}{12} \approx 1.917$$

:::info
For a fair die, $E(X) = 3.5$ and $\mathrm{Var}(X) = 35/12 \approx 2.917$. The biased die above
has the same mean but smaller variance, meaning its outcomes are more concentrated around the
centre.
:::

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
$\Omega = \{HH, HT, TH, TT\}$. $A = \{\mathrm{at least one heads}\} = \{HH, HT, TH\}$. $B = \{\mathrm{both heads}\} = \{HH\}$.

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

$P(\mathrm{flush}) = 5148/2598960 \approx 0.00198 \approx 0.2\%$.

**If you get this wrong, revise:** [Counting Principles](#7-counting-principles) — Section 7.

</details>

<details>
<summary>Problem 13</summary>
A discrete random variable $X$ has PMF $p(x) = kx$ for $x \in \{1, 2, 3, 4, 5\}$ and $p(x) = 0$ otherwise. Find the constant $k$, then find $E(X)$ and $\mathrm{Var}(X)$.
</details>

<details>
<summary>Solution 13</summary>
For a valid PMF: $\sum_{x=1}^{5} kx = k(1 + 2 + 3 + 4 + 5) = 15k = 1$, so $k = 1/15$.

$$E(X) = \sum_{x=1}^{5} x \cdot \frac{x}{15} = \frac{1 + 4 + 9 + 16 + 25}{15} = \frac{55}{15} = \frac{11}{3}$$

$$E(X^2) = \sum_{x=1}^{5} x^2 \cdot \frac{x}{15} = \frac{1 + 8 + 27 + 64 + 125}{15} = \frac{225}{15} = 15$$

$$\mathrm{Var}(X) = E(X^2) - [E(X)]^2 = 15 - \frac{121}{9} = \frac{135 - 121}{9} = \frac{14}{9}$$

**If you get this wrong, revise:**
[Discrete Random Variables](#10-discrete-random-variables-and-probability-mass-functions) —
Section 10.

</details>

<details>
<summary>Problem 14</summary>
A bag contains 4 red and 6 blue balls. Balls are drawn one at a time without replacement until a red ball is drawn. Find the probability that exactly 3 draws are needed.
</details>

<details>
<summary>Solution 14</summary>
We need the first two draws to be blue and the third to be red:

$$P = \frac{6}{10} \times \frac{5}{9} \times \frac{4}{8} = \frac{120}{720} = \frac{1}{6}$$

**If you get this wrong, revise:**
[Multi-Stage Experiments](#9-multi-stage-experiments-and-tree-diagrams) — Section 9.

</details>

<details>
<summary>Problem 15</summary>
Prove Boole's inequality: for events $A_1, A_2, \ldots, A_n$,

$$P\!\left(\bigcup_{i=1}^{n} A_i\right) \leq \sum_{i=1}^{n} P(A_i)$$

</details>

<details>
<summary>Solution 15</summary>
By induction on $n$.

**Base case** ($n = 2$): $P(A_1 \cup A_2) = P(A_1) + P(A_2) - P(A_1 \cap A_2) \leq P(A_1) + P(A_2)$.
$\checkmark$

**Inductive step:** Assume $P\!\left(\bigcup_{i=1}^{k} A_i\right) \leq \sum_{i=1}^{k} P(A_i)$. Then

$$P\!\left(\bigcup_{i=1}^{k+1} A_i\right) = P\!\left(\bigcup_{i=1}^{k} A_i\right) + P(A_{k+1}) - P\!\left(\bigcup_{i=1}^{k} A_i \cap A_{k+1}\right)$$

$$\leq \sum_{i=1}^{k} P(A_i) + P(A_{k+1}) = \sum_{i=1}^{k+1} P(A_i). \quad \blacksquare$$

**If you get this wrong, revise:** [Basic Probability Results](#2-basic-probability-results) —
Section 2.

</details>

<details>
<summary>Problem 16</summary>
In a survey, 70% of people like tea, 50% like coffee, and 35% like both. A person is chosen at random. Given that they like at least one of the two drinks, find the probability that they like both.
</details>

<details>
<summary>Solution 16</summary>
$P(T) = 0.7$, $P(C) = 0.5$, $P(T \cap C) = 0.35$.

$P(T \cup C) = P(T) + P(C) - P(T \cap C) = 0.7 + 0.5 - 0.35 = 0.85$.

$$P(T \cap C \mid T \cup C) = \frac{P(T \cap C)}{P(T \cup C)} = \frac{0.35}{0.85} = \frac{7}{17} \approx 0.412$$

**If you get this wrong, revise:** [Conditional Probability](#3-conditional-probability) —
Section 3.

</details>

<details>
<summary>Problem 17</summary>
A fair coin is tossed 5 times. Using the complement rule, find the probability of getting at least one head.
</details>

<details>
<summary>Solution 17</summary>
Let $A$ = "at least one head". Then $A'$ = "no heads" = "all tails".

$$P(A) = 1 - P(A') = 1 - \left(\frac{1}{2}\right)^5 = 1 - \frac{1}{32} = \frac{31}{32}$$

**If you get this wrong, revise:** [Complement Rule](#21-complement-rule) — Section 2.1.

</details>

<details>
<summary>Problem 18</summary>
Two events $A$ and $B$ satisfy $P(A) = 0.6$, $P(B|A) = 0.4$, and $P(B|A') = 0.7$. Find $P(B)$, $P(A|B)$, and determine whether $A$ and $B$ are independent.
</details>

<details>
<summary>Solution 18</summary>
By the law of total probability:

$$P(B) = P(B|A)P(A) + P(B|A')P(A') = 0.4 \times 0.6 + 0.7 \times 0.4 = 0.24 + 0.28 = 0.52$$

$$P(A \cap B) = P(B|A)P(A) = 0.4 \times 0.6 = 0.24$$

$$P(A|B) = \frac{P(A \cap B)}{P(B)} = \frac{0.24}{0.52} = \frac{6}{13} \approx 0.462$$

Check independence: $P(A)P(B) = 0.6 \times 0.52 = 0.312 \neq 0.24 = P(A \cap B)$. So $A$ and $B$ are
**not** independent.

**If you get this wrong, revise:** [Bayes' Theorem](#4-bayes-theorem) — Section 4, and
[Independence](#5-independence) — Section 5.

</details>

<details>
<summary>Problem 19</summary>
A discrete random variable $X$ has CDF $F(x) = 0$ for $x \lt{} 0$, $F(x) = x/4$ for $0 \leq x \lt{} 1$, $F(x) = 1/2$ for $1 \leq x \lt{} 2$, $F(x) = 3/4$ for $2 \leq x \lt{} 3$, and $F(x) = 1$ for $x \geq 3$. Find the PMF of $X$ and verify it sums to 1.
</details>

<details>
<summary>Solution 19</summary>
The PMF is obtained from the jumps in the CDF:

- $p(0) = F(0) - F(0^-) = 0 - 0 = 0$. But from the formula $F(x) = x/4$ at $x = 0$: $p(0) = 0$.
  Actually, the jump occurs at the boundary. Since $F$ is continuous at $x = 0$, there is no point
  mass at 0. The value $X = 0$ has probability 0; we look at where jumps occur.

More carefully, the jumps occur at:

- $x = 1$: $p(1) = F(1) - F(1^-) = 1/2 - 1/4 = 1/4$
- $x = 2$: $p(2) = F(2) - F(2^-) = 3/4 - 1/2 = 1/4$
- $x = 3$: $p(3) = F(3) - F(3^-) = 1 - 3/4 = 1/4$

There is also a continuous component on $[0, 1)$, but since $X$ is discrete, the CDF must be a step
function. The given CDF has a linear portion, which indicates this CDF actually corresponds to a
**mixed** distribution. For a purely discrete $X$, the CDF should be piecewise constant with jumps.

Assuming the problem intended a discrete distribution, the PMF from the jumps is:

$$p(1) = \frac{1}{4}, \quad p(2) = \frac{1}{4}, \quad p(3) = \frac{1}{4}, \quad p(x) = 0 \mathrm{ otherwise}$$

**Check:** $1/4 + 1/4 + 1/4 = 3/4 \neq 1$. This indicates the continuous portion $F(x) = x/4$ on
$[0,1)$ contributes probability $1/4$ spread over a continuum, confirming this is not a purely
discrete distribution.

**If you get this wrong, revise:**
[Discrete Random Variables](#10-discrete-random-variables-and-probability-mass-functions) —
Section 10.

</details>

<details>
<summary>Problem 20</summary>
Three machines $M_1$, $M_2$, $M_3$ produce items with proportions 50%, 30%, 20%. Their defect rates are 2%, 3%, 5% respectively. An item is found to be defective. Find the probability it was produced by $M_3$.
</details>

<details>
<summary>Solution 20</summary>
Let $D$ = "defective". By the law of total probability:

$$P(D) = P(D|M_1)P(M_1) + P(D|M_2)P(M_2) + P(D|M_3)P(M_3)$$
$$= 0.02 \times 0.5 + 0.03 \times 0.3 + 0.05 \times 0.2 = 0.01 + 0.009 + 0.01 = 0.029$$

By Bayes' theorem:

$$P(M_3|D) = \frac{P(D|M_3)P(M_3)}{P(D)} = \frac{0.05 \times 0.2}{0.029} = \frac{0.01}{0.029} = \frac{10}{29} \approx 0.345$$

**If you get this wrong, revise:** [Extended Bayes' Theorem](#44-extended-bayes-theorem) — Section
4.4.

</details>
