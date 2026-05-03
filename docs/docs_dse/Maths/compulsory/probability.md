---
title: Probability
description: "DSE Mathematics probability notes covering sample spaces, events, conditional probability, addition and multiplication rules, and probability distributions."
date: 2025-06-03T12:07:31.077Z
tags:
  - Maths
  - DSE
categories:
  - Maths
slug: probability
---

Probability theory provides a rigorous mathematical framework for quantifying uncertainty. In the
DSE compulsory syllabus, we focus on discrete probability spaces, combinatorial counting,
conditional probability, and independence. This page connects to [combinatorics](combinatorics))
for counting techniques and [dispersion](dispersion)) for the statistical interpretation of
probability distributions.

## Notations

| Symbol            | Meaning                                      |
| ----------------- | -------------------------------------------- |
| $P(A)$            | Probability of event $A$                     |
| $P(A \mid B)$     | Conditional probability of $A$ given $B$     |
| $A \cap B$        | Intersection: both $A$ and $B$ occur         |
| $A \cup B$        | Union: $A$ or $B$ or both occur              |
| $A'$ or $\bar{A}$ | Complement of $A$: $A$ does not occur        |
| $A \subseteq B$   | $A$ is a subset of $B$                       |
| $\emptyset$       | Empty set (impossible event)                 |
| $S$ or $\Omega$   | Sample space (universal set of all outcomes) |

## Basic Probability and Sample Spaces

### Definitions

**Sample space** $S$ (or $\Omega$): the set of all possible outcomes of a random experiment.

**Event**: a subset of the sample space. Events that consist of exactly one outcome are called
**elementary events** (or simple events).

**Exhaustive events**: a collection of events $\{E_1, E_2, \ldots, E_n\}$ is exhaustive if
$E_1 \cup E_2 \cup \cdots \cup E_n = S$. Every possible outcome is covered.

**Partition**: a collection of events is a partition of $S$ if they are pairwise mutually exclusive
and exhaustive. Each outcome in $S$ belongs to exactly one event in the partition.

### Classical (Laplace) Definition

If all elementary outcomes in a finite sample space $S$ are equally likely, then for any event $A$:

$$
\begin{aligned}
  P(A) = \frac{|A|}{|S|} = \frac{\mathrm{number of favourable outcomes}}{\mathrm{total number of outcomes}}
\end{aligned}
$$

This definition reduces probability to a counting problem and directly connects to the techniques in
[combinatorics](combinatorics)).

<details>
<summary>Example</summary>

A fair six-sided die is rolled. The sample space is $S = \\{1, 2, 3, 4, 5, 6\\}$.

- $P(\mathrm{even}) = \frac{|\\{2, 4, 6\\}|}{|S|} = \frac{3}{6} = \frac{1}{2}$.
- $P(\mathrm{prime}) = \frac{|\\{2, 3, 5\\}|}{|S|} = \frac{3}{6} = \frac{1}{2}$.
- $P(\mathrm{even AND prime}) = \frac{|\\{2\\}|}{|S|} = \frac{1}{6}$.

</details>

### Frequentist Interpretation

If an experiment is repeated $n$ times under identical conditions and event $A$ occurs $n_A$ times,
then:

$$
\begin{aligned}
  P(A) = \lim_{n \to \infty} \frac{n_A}{n}
\end{aligned}
$$

In practice, $\frac{n_A}{n}$ is used as an estimate of $P(A)$ for large $n$. The frequentist
interpretation motivates the axioms: long-run relative frequencies behave consistently with the
rules below.

### Axioms of Probability (Kolmogorov)

Any probability measure $P$ defined on a sample space $S$ must satisfy three axioms:

1. **Non-negativity**: $P(A) \geq 0$ for every event $A \subseteq S$.
2. **Normalization**: $P(S) = 1$.
3. **Additivity**: For any countable collection of pairwise mutually exclusive events
   $A_1, A_2, \ldots$:

$$
\begin{aligned}
  P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)
\end{aligned}
$$

These three axioms are the foundation of all probability theory. Every theorem and formula on this
page derives from them.

### Fundamental Theorems

**Theorem 1.** $P(\emptyset) = 0$.

_Proof._ $S$ and $\emptyset$ are mutually exclusive and $S \cup \emptyset = S$. By Axiom 3:

$$
\begin{aligned}
  P(S) = P(S \cup \emptyset) = P(S) + P(\emptyset)
\end{aligned}
$$

By Axiom 2, $P(S) = 1$, so $1 = 1 + P(\emptyset)$, hence $P(\emptyset) = 0$. $\square$

**Theorem 2.** $P(A') = 1 - P(A)$.

_Proof._ $A$ and $A'$ are mutually exclusive and $A \cup A' = S$. By Axioms 2 and 3:

$$
\begin{aligned}
  1 = P(S) = P(A \cup A') = P(A) + P(A')
\end{aligned}
$$

Therefore $P(A') = 1 - P(A)$. $\square$

**Theorem 3.** If $A \subseteq B$, then $P(A) \leq P(B)$.

_Proof._ Decompose $B = A \cup (B \cap A')$. Since $A$ and $B \cap A'$ are mutually exclusive, by
Axiom 3:

$$
\begin{aligned}
  P(B) = P(A) + P(B \cap A')
\end{aligned}
$$

By Axiom 1, $P(B \cap A') \geq 0$, so $P(B) \geq P(A)$. $\square$

**Corollary.** $0 \leq P(A) \leq 1$ for any event $A$.

_Proof._ Since $\emptyset \subseteq A \subseteq S$, Theorem 3 gives
$P(\emptyset) \leq P(A) \leq P(S)$, i.e., $0 \leq P(A) \leq 1$. $\square$

<details>
<summary>Example</summary>

Let $S = \\{1, 2, 3, 4, 5, 6\\}$ with uniform probability. Let $A = \\{1, 2\\}$ and
$B = \\{1, 2, 3, 4\\}$.

- $A \subseteq B$: confirmed since every element of $A$ is in $B$.
- $P(A) = \frac{2}{6} = \frac{1}{3}$, $P(B) = \frac{4}{6} = \frac{2}{3}$.
- $P(A) \leq P(B)$: $\frac{1}{3} \leq \frac{2}{3}$. $\checkmark$

</details>

## Addition Rule

### General Addition Rule

**Theorem.** For any two events $A$ and $B$:

$$
\begin{aligned}
  P(A \cup B) = P(A) + P(B) - P(A \cap B)
\end{aligned}
$$

_Proof._ Decompose $B = (A \cap B) \cup (B \cap A')$. These are mutually exclusive, so:

$$
\begin{aligned}
  P(B) &= P(A \cap B) + P(B \cap A') \\
  \implies P(B \cap A') &= P(B) - P(A \cap B)
\end{aligned}
$$

Now $A \cup B = A \cup (B \cap A')$, and $A$ and $B \cap A'$ are mutually exclusive:

$$
\begin{aligned}
  P(A \cup B) &= P(A) + P(B \cap A') \\
             &= P(A) + P(B) - P(A \cap B) \quad \square
\end{aligned}
$$

The subtraction of $P(A \cap B)$ corrects for double-counting: outcomes in both $A$ and $B$ are
counted once in $P(A)$ and once in $P(B)$, so we subtract one copy.

### Mutually Exclusive Events

Two events $A$ and $B$ are **mutually exclusive** (disjoint) if $A \cap B = \emptyset$, i.e., they
cannot occur simultaneously.

When $A \cap B = \emptyset$, the general addition rule reduces to:

$$
\begin{aligned}
  P(A \cup B) = P(A) + P(B)
\end{aligned}
$$

This follows directly because $P(A \cap B) = P(\emptyset) = 0$ by Theorem 1.

<details>
<summary>Example</summary>

A card is drawn from a standard 52-card deck.

- Let $A$ = "drawing a king", $B$ = "drawing a queen".
- $A \cap B = \emptyset$ (a card cannot be both a king and a queen).
- $P(A \cup B) = P(A) + P(B) = \frac{4}{52} + \frac{4}{52} = \frac{8}{52} = \frac{2}{13}$.

</details>

### Extension to Three Events

$$
\begin{aligned}
  P(A \cup B \cup C) &= P(A) + P(B) + P(C) \\
                     &\quad - P(A \cap B) - P(A \cap C) - P(B \cap C) \\
                     &\quad + P(A \cap B \cap C)
\end{aligned}
$$

_Proof sketch._ Apply the two-event rule to $P((A \cup B) \cup C)$:

$$
\begin{aligned}
  P((A \cup B) \cup C) &= P(A \cup B) + P(C) - P((A \cup B) \cap C) \\
                       &= [P(A) + P(B) - P(A \cap B)] + P(C) - P((A \cap C) \cup (B \cap C))
\end{aligned}
$$

Applying the two-event rule to the last term:

$$
\begin{aligned}
  P((A \cap C) \cup (B \cap C)) = P(A \cap C) + P(B \cap C) - P(A \cap B \cap C)
\end{aligned}
$$

Substituting back and rearranging yields the stated result. $\square$

The pattern continues: for $n$ events, you alternate adding and subtracting terms of each
intersection size. This is the probability analogue of the inclusion-exclusion principle.

### Inclusion-Exclusion Principle

The addition rule is the probability counterpart of the inclusion-exclusion principle for counting:

$$
\begin{aligned}
  |A \cup B| = |A| + |B| - |A \cap B|
\end{aligned}
$$

When outcomes are equally likely, dividing both sides by $|S|$ yields the general addition rule. The
full inclusion-exclusion principle extends to $n$ sets and is covered in
[combinatorics](combinatorics)).

<details>
<summary>DSE-style Example</summary>

In a class of 40 students, 25 study Physics, 20 study Chemistry, and 8 study both. A student is
chosen at random. Find the probability that the student studies at least one of the two subjects.

Let $P$ = studies Physics, $C$ = studies Chemistry.

$$
\begin{aligned}
  P(P \cup C) &= P(P) + P(C) - P(P \cap C) \\
              &= \frac{25}{40} + \frac{20}{40} - \frac{8}{40} = \frac{37}{40}
\end{aligned}
$$

The probability that the student studies neither subject:

$$
\begin{aligned}
  P((P \cup C)') = 1 - \frac{37}{40} = \frac{3}{40}
\end{aligned}
$$

</details>

:::info The addition rule generalises naturally. For any number of events, the key insight is: add
all individual probabilities, subtract all pairwise intersections, add back all triple
intersections, and so on, alternating signs.
:::

## Conditional Probability

### Definition

The **conditional probability** of $A$ given $B$ is:

$$
\begin{aligned}
  P(A \mid B) = \frac{P(A \cap B)}{P(B)}, \quad P(B) \gt{} 0
\end{aligned}
$$

### Intuition: Shrinking the Sample Space

Conditioning on $B$ means we restrict our universe to outcomes where $B$ has already occurred. The
sample space effectively shrinks from $S$ to $B$. Within this restricted space, the probability of
$A$ is the proportion of $B$ that also belongs to $A$:

$$
\begin{aligned}
  P(A \mid B) = \frac{|A \cap B|}{|B|}
\end{aligned}
$$

This is equivalent to $\frac{P(A \cap B)}{P(B)}$ when all outcomes are equally likely.

<details>
<summary>Example</summary>

A fair die is rolled. Given that the result is even, find the probability that it is greater than 4.

- $B$ = "even" = $\\{2, 4, 6\\}$, so $P(B) = \frac{3}{6} = \frac{1}{2}$.
- $A$ = "greater than 4" = $\\{5, 6\\}$.
- $A \cap B = \\{6\\}$, so $P(A \cap B) = \frac{1}{6}$.
- $P(A \mid B) = \frac{1/6}{1/2} = \frac{1}{3}$.

Verification by shrinking: within $\\{2, 4, 6\\}$, only $6$ is greater than $4$, so $\frac{1}{3}$.
$\checkmark$

</details>

### Fundamental Properties

**Theorem.** $P(A \mid B) = 1 - P(A' \mid B)$.

_Proof._ Since $A \cap B$ and $A' \cap B$ partition $B$ (they are mutually exclusive and their union
is $B$):

$$
\begin{aligned}
  P(B) &= P(A \cap B) + P(A' \cap B) \\
  1 &= \frac{P(A \cap B)}{P(B)} + \frac{P(A' \cap B)}{P(B)} \\
  1 &= P(A \mid B) + P(A' \mid B)
\end{aligned}
$$

Therefore $P(A \mid B) = 1 - P(A' \mid B)$. $\square$

This is the conditional analogue of Theorem 2: the conditional probabilities of an event and its
complement must sum to 1 within the conditioned space.

### Multiplication Rule

**Theorem.** $P(A \cap B) = P(A) \cdot P(B \mid A) = P(B) \cdot P(A \mid B)$.

_Proof._ From the definition of conditional probability:

$$
\begin{aligned}
  P(A \mid B) = \frac{P(A \cap B)}{P(B)} \implies P(A \cap B) = P(B) \cdot P(A \mid B)
\end{aligned}
$$

By symmetry, swapping $A$ and $B$:

$$
\begin{aligned}
  P(B \mid A) = \frac{P(A \cap B)}{P(A)} \implies P(A \cap B) = P(A) \cdot P(B \mid A) \quad \square
\end{aligned}
$$

For three events, the multiplication rule extends naturally:

$$
\begin{aligned}
  P(A \cap B \cap C) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B)
\end{aligned}
$$

This follows by two applications of the two-event rule:

$$
\begin{aligned}
  P(A \cap B \cap C) = P(A \cap B) \cdot P(C \mid A \cap B) = P(A) \cdot P(B \mid A) \cdot P(C \mid A \cap B)
\end{aligned}
$$

<details>
<summary>Example</summary>

A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement. Find the probability
that both are red.

- $P(\mathrm{1st red}) = \frac{5}{8}$.
- $P(\mathrm{2nd red} \mid \mathrm{1st red}) = \frac{4}{7}$.
- $P(\mathrm{both red}) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$.

With replacement, the second draw is unaffected:

- $P(\mathrm{both red, with replacement}) = \frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$.

</details>

## Independence

### Definition

Two events $A$ and $B$ are **independent** if and only if:

$$
\begin{aligned}
  P(A \cap B) = P(A) \cdot P(B)
\end{aligned}
$$

### Equivalent Characterisation

**Theorem.** $A$ and $B$ are independent if and only if $P(A \mid B) = P(A)$ (provided
$P(B) \gt{} 0$).

_Proof._

($\Rightarrow$) If independent, $P(A \cap B) = P(A) \cdot P(B)$, so:

$$
\begin{aligned}
  P(A \mid B) = \frac{P(A \cap B)}{P(B)} = \frac{P(A) \cdot P(B)}{P(B)} = P(A)
\end{aligned}
$$

($\Leftarrow$) If $P(A \mid B) = P(A)$, then:

$$
\begin{aligned}
  \frac{P(A \cap B)}{P(B)} = P(A) \implies P(A \cap B) = P(A) \cdot P(B) \quad \square
\end{aligned}
$$

Independence means that knowing $B$ occurred provides zero information about $A$. The conditional
probability is unchanged from the unconditional one.

### Complement Independence

**Theorem.** If $A$ and $B$ are independent, then each of the following pairs is also independent:
$A$ and $B'$, $A'$ and $B$, $A'$ and $B'$.

_Proof._ We show $A$ and $B'$ are independent. The others follow by identical reasoning.

$$
\begin{aligned}
  P(A \cap B') &= P(A) - P(A \cap B) &\quad&\mathrm{(since } A = (A \cap B) \cup (A \cap B') \mathrm{)} \\
               &= P(A) - P(A) \cdot P(B) &\quad&\mathrm{(by independence)} \\
               &= P(A)(1 - P(B)) \\
               &= P(A) \cdot P(B') \quad \square
\end{aligned}
$$

<details>
<summary>Example</summary>

Two fair coins are tossed. Let $A$ = "first coin is heads" and $B$ = "second coin is tails".

- $P(A) = \frac{1}{2}$, $P(B) = \frac{1}{2}$, $P(A \cap B) = \frac{1}{4}$.
- $P(A) \cdot P(B) = \frac{1}{4} = P(A \cap B)$. Independent. $\checkmark$

Now $A'$ = "first coin is tails" and $B'$ = "second coin is heads":

- $P(A') = \frac{1}{2}$, $P(B') = \frac{1}{2}$,
  $P(A' \cap B') = P(\mathrm{tails, heads}) = \frac{1}{4}$.
- $P(A') \cdot P(B') = \frac{1}{4} = P(A' \cap B')$. Independent. $\checkmark$

</details>

### Common Pitfall: Mutually Exclusive $\neq$ Independent

**Theorem.** If $A$ and $B$ are mutually exclusive with $P(A) \gt{} 0$ and $P(B) \gt{} 0$, then $A$
and $B$ are **not** independent.

_Proof._ If $A \cap B = \emptyset$, then $P(A \cap B) = 0$. But $P(A) \cdot P(B) \gt{} 0$ since both
factors are positive. Therefore $P(A \cap B) \neq P(A) \cdot P(B)$, so $A$ and $B$ are not
independent. $\square$

Intuition: mutually exclusive events carry strong negative information about each other -- knowing
one occurred guarantees the other did not. Independence means no information transfer at all. These
are opposite extremes.

The only case where mutually exclusive events are also independent is the degenerate case where at
least one event has probability zero.

<details>
<summary>DSE-style Example</summary>

A fair coin is tossed 3 times. Let $A$ = "all three tosses are heads" and $B$ = "the first toss is
tails".

- $P(A) = \frac{1}{8}$, $P(B) = \frac{1}{2}$.
- $A \cap B = \emptyset$ (cannot have all heads if the first is tails), so $P(A \cap B) = 0$.
- Check independence:
  $P(A) \cdot P(B) = \frac{1}{8} \times \frac{1}{2} = \frac{1}{16} \neq 0 = P(A \cap B)$.
- $A$ and $B$ are mutually exclusive but **not** independent.

For a valid independence example in the same experiment: let $C$ = "first toss is heads" and $D$ =
"second toss is tails". Then
$P(C \cap D) = \frac{1}{4} = \frac{1}{2} \times \frac{1}{2} = P(C) \cdot P(D)$. $C$ and $D$ are
independent.

</details>

:::info When testing independence, always compute both $P(A \cap B)$ and $P(A) \cdot P(B)$
separately and compare. Do not assume independence from the problem description -- it must be
verified or explicitly stated.
:::

## Bayes' Theorem

### Statement

For two events $A$ and $B$ with $P(A) \gt{} 0$ and $P(B) \gt{} 0$:

$$
\begin{aligned}
  P(A \mid B) = \frac{P(B \mid A) \cdot P(A)}{P(B)}
\end{aligned}
$$

### Proof

Starting from the definition of conditional probability and the multiplication rule:

$$
\begin{aligned}
  P(A \mid B) &= \frac{P(A \cap B)}{P(B)} \\
              &= \frac{P(B \mid A) \cdot P(A)}{P(B)} \quad \square
\end{aligned}
$$

Bayes' theorem "reverses" the conditioning: it expresses $P(A \mid B)$ in terms of $P(B \mid A)$.
This is the mathematical foundation of statistical inference -- updating beliefs given evidence.

### Law of Total Probability

If $B_1, B_2, \ldots, B_n$ form a **partition** of $S$ (pairwise mutually exclusive, exhaustive, and
$P(B_i) \gt{} 0$ for all $i$), then for any event $A$:

$$
\begin{aligned}
  P(A) = \sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i)
\end{aligned}
$$

_Proof._ Since the $B_i$ partition $S$, the events $A \cap B_1, A \cap B_2, \ldots, A \cap B_n$ are
pairwise mutually exclusive and their union equals $A$. By Axiom 3:

$$
\begin{aligned}
  P(A) &= \sum_{i=1}^{n} P(A \cap B_i) = \sum_{i=1}^{n} P(A \mid B_i) \cdot P(B_i) \quad \square
\end{aligned}
$$

### Extended Bayes' Theorem

Combining Bayes' theorem with the law of total probability gives the most useful form. If
$B_1, \ldots, B_n$ partition $S$ and $A$ is one of them (say $A = B_j$), then for any event $E$ with
$P(E) \gt{} 0$:

$$
\begin{aligned}
  P(B_j \mid E) = \frac{P(E \mid B_j) \cdot P(B_j)}{\displaystyle\sum_{i=1}^{n} P(E \mid B_i) \cdot P(B_i)}
\end{aligned}
$$

The denominator is $P(E)$ computed via the law of total probability.

<details>
<summary>Example: Medical Testing</summary>

A disease affects 1% of a population. A test has:

- Sensitivity (true positive rate): $P(\mathrm{positive} \mid \mathrm{disease}) = 0.95$.
- False positive rate: $P(\mathrm{positive} \mid \mathrm{no disease}) = 0.02$.

A person tests positive. What is the probability they actually have the disease?

Let $D$ = has disease, $D'$ = no disease, $+$ = tests positive. The partition is $\{D, D'\}$.

By Bayes' theorem:

$$
\begin{aligned}
  P(D \mid +) &= \frac{P(+ \mid D) \cdot P(D)}{P(+ \mid D) \cdot P(D) + P(+ \mid D') \cdot P(D')} \\
              &= \frac{0.95 \times 0.01}{0.95 \times 0.01 + 0.02 \times 0.99} \\
              &= \frac{0.0095}{0.0095 + 0.0198} \\
              &= \frac{0.0095}{0.0293} \approx 0.324
\end{aligned}
$$

Despite a 95% accurate test, a positive result only means about 32.4% chance of disease. This
counterintuitive result occurs because the disease is rare -- false positives vastly outnumber true
positives in absolute terms.

</details>

<details>
<summary>Example: Quality Control</summary>

A factory has three machines producing items. Machine $M_1$ produces 50% of items with 2% defective.
Machine $M_2$ produces 30% with 3% defective. Machine $M_3$ produces 20% with 5% defective. An item
is randomly selected and found to be defective. What is the probability it came from $M_3$?

Let $D$ = defective. The partition is $\{M_1, M_2, M_3\}$.

$$
\begin{aligned}
  P(M_3 \mid D) &= \frac{P(D \mid M_3) \cdot P(M_3)}{P(D \mid M_1) \cdot P(M_1) + P(D \mid M_2) \cdot P(M_2) + P(D \mid M_3) \cdot P(M_3)} \\
                &= \frac{0.05 \times 0.20}{0.02 \times 0.50 + 0.03 \times 0.30 + 0.05 \times 0.20} \\
                &= \frac{0.01}{0.01 + 0.009 + 0.01} \\
                &= \frac{0.01}{0.029} \approx 0.345
\end{aligned}
$$

Despite $M_3$ having the highest defect rate, it only accounts for about 34.5% of defective items
because it produces the smallest share of total output.

</details>

## Probability Trees

### Construction

A probability tree is a directed graph that decomposes a multi-stage experiment into sequential
branches. Each level of the tree represents a stage, each branch represents an outcome at that
stage, and each branch is labelled with its probability.

**Rules:**

1. The probabilities on branches from each node must sum to 1.
2. The probability of any complete path (root to leaf) is the product of all branch probabilities
   along that path (multiplication rule).
3. The probability of an event is the sum of probabilities of all paths leading to that event
   (addition rule for mutually exclusive paths).

### Worked Example

Two balls are drawn without replacement from a bag containing 4 red and 2 blue balls.

<details>
<summary>Tree diagram (text representation)</summary>

```text
                    4/6 (R) -- 3/5 (R)  =>  P = 4/6 x 3/5 = 12/30
                   /            \ 2/5 (B) =>  P = 4/6 x 2/5 = 8/30
                  /
Root -- 4/6 (R)
                  \
                   \ 2/6 (B) -- 4/5 (R)  =>  P = 2/6 x 4/5 = 8/30
                                 \ 1/5 (B) =>  P = 2/6 x 1/5 = 2/30
```

Verification: all path probabilities sum to $\frac{12 + 8 + 8 + 2}{30} = \frac{30}{30} = 1$.
$\checkmark$

- $P(\mathrm{both red}) = \frac{12}{30} = \frac{2}{5}$.
- $P(\mathrm{both blue}) = \frac{2}{30} = \frac{1}{15}$.
- $P(\mathrm{same colour}) = \frac{12}{30} + \frac{2}{30} = \frac{14}{30} = \frac{7}{15}$.
- $P(\mathrm{different colours}) = \frac{8}{30} + \frac{8}{30} = \frac{16}{30} = \frac{8}{15}$.

Note: $P(\mathrm{same}) + P(\mathrm{different}) = 1$, as expected since these events are
complements.

</details>

### Connection to Multiplication and Addition Rules

Probability trees are a visual encoding of the multiplication and addition rules:

- **Along a path** (sequential stages): multiply probabilities -- this is the multiplication rule.
- **Across paths** (mutually exclusive ways to reach an event): add probabilities -- this is the
  addition rule for mutually exclusive events.

Trees are especially useful for problems involving:

- Sequential draws with or without replacement.
- Multi-step processes where later probabilities depend on earlier outcomes.
- Any scenario requiring the law of total probability (sum over all branches at the final level).

<details>
<summary>DSE-style Example</summary>

A box contains 3 defective and 7 good bulbs. Bulbs are tested one by one without replacement. Find
the probability that the second defective bulb is found on the third test.

The second defective is found on the third test means: exactly one defective in the first two tests,
and the third is defective.

Case 1: Good, then Defective, then Defective:

$$
\begin{aligned}
  P = \frac{7}{10} \times \frac{3}{9} \times \frac{2}{8} = \frac{42}{720} = \frac{7}{120}
\end{aligned}
$$

Case 2: Defective, then Good, then Defective:

$$
\begin{aligned}
  P = \frac{3}{10} \times \frac{7}{9} \times \frac{2}{8} = \frac{42}{720} = \frac{7}{120}
\end{aligned}
$$

Total probability (addition rule for mutually exclusive cases):

$$
\begin{aligned}
  P = \frac{7}{120} + \frac{7}{120} = \frac{14}{120} = \frac{7}{60}
\end{aligned}
$$

</details>

---

<details>
<summary>Wrap-up Questions</summary>
1. **Question:** A fair coin is tossed three times. Find the probability of getting at least two
   heads.
<details>
<summary>Answer</summary>

Sample space has $2^3 = 8$ equally likely outcomes.

At least two heads means 2 or 3 heads:

- 2 heads: $\\{HHT, HTH, THH\\}$, 3 outcomes.
- 3 heads: $\\{HHH\\}$, 1 outcome.

$$
\begin{aligned}
  P(\mathrm{at least 2 heads}) = \frac{4}{8} = \frac{1}{2}
\end{aligned}
$$

Alternatively, using the binomial formula:

$$
\begin{aligned}
  P(\mathrm{at least 2 heads}) = \binom{3}{2}\left(\frac{1}{2}\right)^3 + \binom{3}{3}\left(\frac{1}{2}\right)^3 = \frac{3}{8} + \frac{1}{8} = \frac{1}{2}
\end{aligned}
$$

</details>

2. **Question:** In a group of 50 students, 30 play basketball, 25 play football, and 10 play
neither. A student is chosen at random. Find the probability that the student plays both sports.
<details>
<summary>Answer</summary>

Let $B$ = plays basketball, $F$ = plays football.

- $P(B) = \frac{30}{50} = \frac{3}{5}$, $P(F) = \frac{25}{50} = \frac{1}{2}$.
- 10 play neither, so 40 play at least one: $P(B \cup F) = \frac{40}{50} = \frac{4}{5}$.

By the addition rule:

$$
\begin{aligned}
  P(B \cap F) &= P(B) + P(F) - P(B \cup F) \\
              &= \frac{3}{5} + \frac{1}{2} - \frac{4}{5} = \frac{6}{10} + \frac{5}{10} - \frac{8}{10} = \frac{3}{10}
\end{aligned}
$$

</details>

3. **Question:** A bag contains 4 white and 6 black balls. Two balls are drawn at random without
replacement. Find the probability that they are of different colours.
<details>
<summary>Answer</summary>

Method 1 (direct): white then black, or black then white.

$$
\begin{aligned}
  P &= \frac{4}{10} \times \frac{6}{9} + \frac{6}{10} \times \frac{4}{9} \\
    &= \frac{24}{90} + \frac{24}{90} = \frac{48}{90} = \frac{8}{15}
\end{aligned}
$$

Method 2 (complement):

$$
\begin{aligned}
  P(\mathrm{different}) &= 1 - P(\mathrm{same}) \\
                     &= 1 - P(\mathrm{both white}) - P(\mathrm{both black}) \\
  P(\mathrm{both white}) &= \frac{4}{10} \times \frac{3}{9} = \frac{12}{90} \\
  P(\mathrm{both black}) &= \frac{6}{10} \times \frac{5}{9} = \frac{30}{90} \\
  P(\mathrm{different}) &= 1 - \frac{12}{90} - \frac{30}{90} = \frac{48}{90} = \frac{8}{15} \quad \checkmark
\end{aligned}
$$

</details>

4. **Question:** Events $A$ and $B$ are such that $P(A) = 0.6$, $P(B) = 0.5$, and
$P(A \mid B) = 0.4$. Find $P(A \cup B)$.
<details>
<summary>Answer</summary>

From $P(A \mid B) = \frac{P(A \cap B)}{P(B)}$:

$$
\begin{aligned}
  P(A \cap B) = P(A \mid B) \cdot P(B) = 0.4 \times 0.5 = 0.2
\end{aligned}
$$

By the addition rule:

$$
\begin{aligned}
  P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.6 + 0.5 - 0.2 = 0.9
\end{aligned}
$$

</details>

5. **Question:** A and B are independent events with $P(A) = 0.3$ and $P(B) = 0.5$. Find
$P(A' \cap B')$.
<details>
<summary>Answer</summary>

By the complement independence theorem, since $A$ and $B$ are independent, $A'$ and $B'$ are also
independent:

$$
\begin{aligned}
  P(A' \cap B') = P(A') \cdot P(B') = (1 - 0.3)(1 - 0.5) = 0.7 \times 0.5 = 0.35
\end{aligned}
$$

Verification via complement: $P(A' \cap B') = P((A \cup B)') = 1 - P(A \cup B)$.

$$
\begin{aligned}
  P(A \cup B) &= P(A) + P(B) - P(A \cap B) = 0.3 + 0.5 - 0.15 = 0.65 \\
  P(A' \cap B') &= 1 - 0.65 = 0.35 \quad \checkmark
\end{aligned}
$$

</details>

6. **Question:** Two events $A$ and $B$ satisfy $P(A) = \frac{1}{3}$, $P(B) = \frac{1}{4}$, and
$P(A \cup B) = \frac{5}{12}$. Determine whether $A$ and $B$ are independent.
<details>
<summary>Answer</summary>

By the addition rule:

$$
\begin{aligned}
  P(A \cap B) &= P(A) + P(B) - P(A \cup B) \\
              &= \frac{1}{3} + \frac{1}{4} - \frac{5}{12} = \frac{4}{12} + \frac{3}{12} - \frac{5}{12} = \frac{2}{12} = \frac{1}{6}
\end{aligned}
$$

Check independence:
$P(A) \cdot P(B) = \frac{1}{3} \times \frac{1}{4} = \frac{1}{12} \neq \frac{1}{6} = P(A \cap B)$.

Since $P(A \cap B) \neq P(A) \cdot P(B)$, the events are **not** independent.

</details>

7. **Question:** A box contains 5 red, 3 green, and 2 blue marbles. Three marbles are drawn without
replacement. Find the probability that all three are the same colour.
<details>
<summary>Answer</summary>

The three colours are mutually exclusive cases, so by the addition rule:

$$
\begin{aligned}
  P(\mathrm{all red}) &= \frac{5}{10} \times \frac{4}{9} \times \frac{3}{8} = \frac{60}{720} = \frac{1}{12} \\
  P(\mathrm{all green}) &= \frac{3}{10} \times \frac{2}{9} \times \frac{1}{8} = \frac{6}{720} = \frac{1}{120} \\
  P(\mathrm{all blue}) &= \frac{2}{10} \times \frac{1}{9} \times \frac{0}{8} = 0
\end{aligned}
$$

$$
\begin{aligned}
  P(\mathrm{all same colour}) = \frac{1}{12} + \frac{1}{120} + 0 = \frac{10}{120} + \frac{1}{120} = \frac{11}{120}
\end{aligned}
$$

</details>

8. **Question:** In a certain school, 60% of students take Mathematics, 40% take Physics, and 30%
take both. A student is selected at random. Given that the student takes Mathematics, what is the
probability that they also take Physics?
<details>
<summary>Answer</summary>

$$
\begin{aligned}
  P(\mathrm{Physics} \mid \mathrm{Maths}) = \frac{P(\mathrm{Physics} \cap \mathrm{Maths})}{P(\mathrm{Maths})} = \frac{0.30}{0.60} = 0.5
\end{aligned}
$$

Half of Mathematics students also take Physics.

</details>

9. **Question:** A factory produces items using Machine $X$ (60% of output) and Machine $Y$ (40% of
output). The defect rates are 3% for $X$ and 7% for $Y$. An item is found to be defective. Use
Bayes' theorem to find the probability it was produced by Machine $X$.
<details>
<summary>Answer</summary>

Let $D$ = defective. The partition is $\{X, Y\}$.

$$
\begin{aligned}
  P(X \mid D) &= \frac{P(D \mid X) \cdot P(X)}{P(D \mid X) \cdot P(X) + P(D \mid Y) \cdot P(Y)} \\
              &= \frac{0.03 \times 0.60}{0.03 \times 0.60 + 0.07 \times 0.40} \\
              &= \frac{0.018}{0.018 + 0.028} = \frac{0.018}{0.046} \approx 0.391
\end{aligned}
$$

Despite producing 60% of items, Machine $X$ accounts for only about 39.1% of defective items because
its defect rate is lower.

</details>

10. **Question:** A fair die is rolled twice. Find the probability that the sum of the two results
is 8, given that the first result is at least 3.
<details>
<summary>Answer</summary>

Let $A$ = "sum is 8", $B$ = "first result $\geq$ 3".

Sample space: $6 \times 6 = 36$ equally likely outcomes.

$|B| = 4 \times 6 = 24$ (first die shows 3, 4, 5, or 6).

$A \cap B$ = outcomes with first $\geq$ 3 and sum 8: $\\{(3,5), (4,4), (5,3), (6,2)\\}$, so
$|A \cap B| = 4$.

$$
\begin{aligned}
  P(A \mid B) = \frac{|A \cap B|}{|B|} = \frac{4}{24} = \frac{1}{6}
\end{aligned}
$$

For comparison, the unconditional probability: $P(A) = \frac{5}{36}$ (pairs
$(2,6), (3,5), (4,4), (5,3), (6,2)$). Conditioning on the first die being $\geq$ 3 eliminates
$(2,6)$, reducing the count from 5 to 4.

</details>

11. **Question:** $A$, $B$, and $C$ are three events with $P(A) = P(B) = P(C) = \frac{1}{3}$,
$P(A \cap B) = P(A \cap C) = P(B \cap C) = \frac{1}{6}$, and $P(A \cap B \cap C) = \frac{1}{12}$.
Find $P(A \cup B \cup C)$.
<details>
<summary>Answer</summary>

Using the three-event addition rule:

$$
\begin{aligned}
  P(A \cup B \cup C) &= P(A) + P(B) + P(C) - P(A \cap B) - P(A \cap C) - P(B \cap C) + P(A \cap B \cap C) \\
                     &= \frac{1}{3} + \frac{1}{3} + \frac{1}{3} - \frac{1}{6} - \frac{1}{6} - \frac{1}{6} + \frac{1}{12} \\
                     &= 1 - \frac{1}{2} + \frac{1}{12} \\
                     &= \frac{12}{12} - \frac{6}{12} + \frac{1}{12} = \frac{7}{12}
\end{aligned}
$$

</details>

12. **Question:** A test for a condition has a sensitivity of 90% and a specificity of 95%. The
condition prevalence in the population is 1%. Find the positive predictive value
$P(\mathrm{condition} \mid \mathrm{positive})$.
<details>
<summary>Answer</summary>

- Sensitivity: $P(+ \mid C) = 0.90$.
- Specificity: $P(- \mid C') = 0.95$, so $P(+ \mid C') = 1 - 0.95 = 0.05$.
- Prevalence: $P(C) = 0.01$, $P(C') = 0.99$.

By Bayes' theorem:

$$
\begin{aligned}
  P(C \mid +) &= \frac{P(+ \mid C) \cdot P(C)}{P(+ \mid C) \cdot P(C) + P(+ \mid C') \cdot P(C')} \\
              &= \frac{0.90 \times 0.01}{0.90 \times 0.01 + 0.05 \times 0.99} \\
              &= \frac{0.009}{0.009 + 0.0495} \\
              &= \frac{0.009}{0.0585} \approx 0.154
\end{aligned}
$$

A positive result means only about 15.4% chance of actually having the condition. This is the base
rate fallacy in action: low prevalence swamps even a good test's signal.

For the A-Level treatment of this topic, see [Probability](https://alevel.wyattau.com/docs/maths/statistics/probability).

</details>
</details>

---

:::tip Diagnostic Test
Ready to test your understanding of **Probability**? The [diagnostic test](/Maths/diagnostics/diag-probability) contains the hardest questions within the DSE specification for this topic, each with a full worked solution.

**Unit tests** probe edge cases and common misconceptions. **Integration tests** combine Probability with other DSE mathematics topics to test synthesis under exam conditions.

See [Diagnostic Guide](/Maths/diagnostics/DIAGNOSTIC_GUIDE) for instructions on self-marking and building a personal test matrix.
:::
