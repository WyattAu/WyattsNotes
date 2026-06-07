---
title: Probability Spaces
description: 'University Mathematics Probability Theory notes covering key definitions, core concepts, worked examples, and practice questions for practical revision.'
tags:
  - Mathematics
  - University
---

### 1.1 Sample Spaces and Events

A **probability space** is a triple $(\Omega, \mathcal{F}, P)$ where:

- $\Omega$ is the **sample space** (set of all possible outcomes).
- $\mathcal{F}$ is a **sigma-algebra** on $\Omega$.
- $P : \mathcal{F} \to [0, 1]$ is a **probability measure**.

**Definition.** A **sigma-algebra** $\mathcal{F}$ on $\Omega$ is a collection of subsets satisfying:

1. $\Omega \in \mathcal{F}$.
2. If $A \in \mathcal{F}$Then $A^c \in \mathcal{F}$ (closed under complementation).
3. If $A_1, A_2, \ldots \in \mathcal{F}$Then $\bigcup_{i=1}^{\infty} A_i \in \mathcal{F}$ (closed
   under countable unions).

**Definition.** A **probability measure** $P$ satisfies:

1. **Non-negativity:** $P(A) \geq 0$ for all $A \in \mathcal{F}$.
2. **Normalisation:** $P(\Omega) = 1$.
3. **Countable additivity:** If $A_1, A_2, \ldots$ are pairwise disjoint, then
   $P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$.

### 1.2 Basic Properties

**Proposition 1.1.** For any probability space:

1. $P(\emptyset) = 0$.
2. $P(A^c) = 1 - P(A)$.
3. If $A \subseteq B$Then $P(A) \leq P(B)$.
4. $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (inclusion-exclusion).
5. **Boole's inequality:** $P\left(\bigcup_{i=1}^{n} A_i\right) \leq \sum_{i=1}^{n} P(A_i)$.
6. **Bonferroni inequality:**
   $P\left(\bigcap_{i=1}^{n} A_i\right) \geq 1 - \sum_{i=1}^{n} (1 - P(A_i))$.

_Proof._ (1) Apply countable additivity to the disjoint union
$\Omega = \Omega \cup \emptyset \cup \emptyset \cup \cdots$:
$1 = 1 + P(\emptyset) + P(\emptyset) + \cdots$So $P(\emptyset) = 0$.

(3) $B = A \cup (B \setminus A)$ is a disjoint union, so $P(B) = P(A) + P(B \setminus A) \geq P(A)$.

(4) $P(A \cup B) = P(A) + P(B \setminus A) = P(A) + P(B) - P(A \cap B)$. $\blacksquare$

### 1.3 Conditional Probability and Independence

**Definition.** The **conditional probability** of $A$ given $B$ (with $P(B) > 0$) is

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Theorem 1.2 (Law of Total Probability).** If $B_1, \ldots, B_n$ form a partition of $\Omega$ with
$P(B_i) > 0$ for all $i$Then

$$P(A) = \sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)$$

**Theorem 1.3 (Bayes' Theorem).** Under the same conditions:

$$P(B_j \mid A) = \frac{P(A \mid B_j)\, P(B_j)}{\sum_{i=1}^{n} P(A \mid B_i)\, P(B_i)}$$

**Definition.** Events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)\,P(B)$.

**Proposition 1.4.** If $A$ and $B$ are independent with $P(B) > 0$Then $P(A \mid B) = P(A)$.

_Proof._ $P(A \mid B) = P(A \cap B)/P(B) = P(A)P(B)/P(B) = P(A)$. $\blacksquare$

**Definition.** Events $A_1, \ldots, A_n$ are **mutually independent** if for every subset
$J \subseteq \{1, \ldots, n\}$:

$$P\left(\bigcap_{j \in J} A_j\right) = \prod_{j \in J} P(A_j)$$

Pairwise independence does not imply mutual independence.

<details>
<summary>Worked Example: Pairwise vs Mutual Independence</summary>

_Solution._ Roll two fair dice. Let $A$ = "first die is even", $B$ = "second die is even", $C$ =
"sum is even".

$P(A) = P(B) = P(C) = 1/2$.

$P(A \cap B) = 1/4 = P(A)P(B)$.
$P(A \cap C) = P(\text{first} even, sum even) = P(\text{second} even) = 1/4 = P(A)P(C)$.

$P(B \cap C) = 1/4 = P(B)P(C)$. So $A$, $B$, $C$ are pairwise independent.

But
$P(A \cap B \cap C) = P(\text{both} even, sum even) = P(\text{both} even) = 1/4 \neq 1/8 = P(A)P(B)P(C)$.

So $A$, $B$, $C$ are pairwise independent but not mutually independent. $\blacksquare$

</details>

