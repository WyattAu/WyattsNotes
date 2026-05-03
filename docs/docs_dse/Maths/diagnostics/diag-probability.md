---
title: Probability — Diagnostic Tests
description: "Diagnostic tests for DSE Probability: conditional probability, independence, tree diagrams, and common fallacies in probability reasoning."
slug: diag-probability
hide_table_of_contents: true
---

# Probability — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for probability.

### UT-1: Conditional Probability is Not Symmetric

**Question:**

In a school, $60\%$ of students play basketball and $30\%$ play football. $20\%$ play both sports. Find:

(a) $P(\text{Football} \mid \text{Basketball})$
(b) $P(\text{Basketball} \mid \text{Football})$

Are they equal?

**Solution:**

$P(B) = 0.6$, $P(F) = 0.3$, $P(B \cap F) = 0.2$.

(a) $P(F \mid B) = \dfrac{P(B \cap F)}{P(B)} = \dfrac{0.2}{0.6} = \dfrac{1}{3}$

(b) $P(B \mid F) = \dfrac{P(B \cap F)}{P(F)} = \dfrac{0.2}{0.3} = \dfrac{2}{3}$

$\dfrac{1}{3} \neq \dfrac{2}{3}$. They are NOT equal.

$P(A \mid B) \neq P(B \mid A)$ in general. This is a fundamental misconception.

---

### UT-2: Independence vs Mutually Exclusive

**Question:**

If events $A$ and $B$ are mutually exclusive, can they also be independent?

**Solution:**

If $A$ and $B$ are mutually exclusive, then $P(A \cap B) = 0$.

If $A$ and $B$ are independent, then $P(A \cap B) = P(A) \times P(B)$.

So we need $P(A) \times P(B) = 0$, which means at least one of $P(A)$ or $P(B)$ is zero.

If both $P(A) > 0$ and $P(B) > 0$, then mutually exclusive events CANNOT be independent.

Only the trivial case (where one event has probability zero) allows both properties simultaneously.

A common mistake is confusing "independent" with "mutually exclusive." They are generally opposite concepts.

---

### UT-3: At Least One Using Complement

**Question:**

A fair die is rolled 5 times. Find the probability of getting at least one 6.

**Solution:**

$$P(\text{at least one 6}) = 1 - P(\text{no 6s}) = 1 - \left(\frac{5}{6}\right)^5 = 1 - \frac{3125}{7776} = \frac{4651}{7776}$$

A common mistake is trying to enumerate all cases with "at least one 6" directly (which has many terms), instead of using the complement.

---

### UT-4: Tree Diagram with Replacement

**Question:**

A bag contains 3 red and 5 blue balls. Two balls are drawn **with replacement**. Find the probability that:

(a) Both are red.
(b) They are of different colours.

**Solution:**

After replacement, the bag always has 3 red and 5 blue (8 total).

(a) $P(\text{RR}) = \dfrac{3}{8} \times \dfrac{3}{8} = \dfrac{9}{64}$

(b) $P(\text{different}) = P(\text{RB}) + P(\text{BR}) = \dfrac{3}{8} \times \dfrac{5}{8} + \dfrac{5}{8} \times \dfrac{3}{8} = \dfrac{15}{64} + \dfrac{15}{64} = \dfrac{30}{64} = \dfrac{15}{32}$

---

### UT-5: Probability with Combined Events

**Question:**

Events $A$ and $B$ satisfy $P(A) = 0.4$, $P(B) = 0.7$, and $P(A \cup B) = 0.85$. Find $P(A \cap B)$ and determine whether $A$ and $B$ are independent.

**Solution:**

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

$$0.85 = 0.4 + 0.7 - P(A \cap B)$$

$$P(A \cap B) = 0.25$$

For independence: $P(A) \times P(B) = 0.4 \times 0.7 = 0.28$.

Since $P(A \cap B) = 0.25 \neq 0.28$, the events are **not** independent.

---

## Integration Tests

> Tests synthesis of probability with other topics.

### IT-1: Probability and Combinatorics (with Combinatorics)

**Question:**

A committee of 5 is chosen from 7 men and 6 women. Find the probability that the committee contains exactly 3 women.

**Solution:**

Total ways: $\dbinom{13}{5} = 1287$.

Ways with exactly 3 women (and 2 men): $\dbinom{6}{3} \times \dbinom{7}{2} = 20 \times 21 = 420$.

$$P = \frac{420}{1287} = \frac{140}{429}$$

---

### IT-2: Probability and Algebra (with Functions)

**Question:**

Events $A$ and $B$ are independent with $P(A) = p$ and $P(B) = 2p$. Given that $P(A \cap B) = \dfrac{1}{8}$, find $p$.

**Solution:**

Since $A$ and $B$ are independent:

$$P(A \cap B) = P(A) \times P(B) = p \times 2p = 2p^2$$

$$2p^2 = \frac{1}{8} \implies p^2 = \frac{1}{16} \implies p = \frac{1}{4}$$

($p > 0$ since it is a probability, and $2p \leq 1$ gives $p \leq \dfrac{1}{2}$, which is satisfied.)

---

### IT-3: Probability and Sequences (with Sequences and Series)

**Question:**

A coin is tossed until the first head appears. If the probability of heads is $p$, find the probability that the first head appears on the $n$-th toss. Show that the total probability sums to 1.

**Solution:**

First head on toss $n$ means: $n - 1$ tails followed by 1 head.

$$P(X = n) = (1 - p)^{n-1} \cdot p$$

Total probability:

$$\sum_{n=1}^{\infty} p(1-p)^{n-1} = p \cdot \frac{1}{1 - (1-p)} = p \cdot \frac{1}{p} = 1$$

This is a geometric series with first term $p$ and ratio $(1-p)$, converging since $0 < 1-p < 1$ when $0 < p < 1$.
