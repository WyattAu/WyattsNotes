---
title: "Probability -- Diagnostic Tests"
description: Hardest IB Mathematics diagnostic tests for probability covering conditional probability, independence confusion, Bayes theorem, and counting with restrictions.
slug: diag-probability
hide_table_of_contents: true
---

# Probability — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and misconceptions for probability.

### UT-1: Conditional Probability vs Independence Confusion

**Question:**

A bag contains 5 red and 3 blue balls. Two balls are drawn without replacement.

**(a)** Find the probability that both balls are red.

**(b)** Find the probability that the second ball is red.

**(c)** Let $A$ be "the first ball is red" and $B$ be "the second ball is red." A student claims that since $P(A) = \frac{5}{8}$ and $P(B) = \frac{5}{8}$, the events are independent. Explain the error.

[Difficulty: hard. Tests the distinction between independent and dependent events in without-replacement scenarios.]

**Solution:**

**(a)** $P(\text{both red}) = \frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$.

**(b)** By the law of total probability:

$$P(B) = P(B|A)P(A) + P(B|A')P(A') = \frac{4}{7} \cdot \frac{5}{8} + \frac{5}{7} \cdot \frac{3}{8}$$

$$= \frac{20}{56} + \frac{15}{56} = \frac{35}{56} = \frac{5}{8}$$

**(c)** The student's error is applying the independence test $P(A \cap B) = P(A)P(B)$ without verifying it. In fact:

$$P(A \cap B) = \frac{5}{14} \neq \frac{5}{8} \times \frac{5}{8} = \frac{25}{64}$$

So $A$ and $B$ are **not** independent. The fact that $P(B) = P(A)$ is coincidental — it does not imply independence. The correct test for independence is $P(A \cap B) = P(A)P(B)$, not $P(B|A) = P(B)$.

---

### UT-2: Bayes' Theorem with Prior Identification

**Question:**

A factory produces items using Machine $X$ (60% of output) and Machine $Y$ (40% of output). Machine $X$ has a defect rate of 3% and Machine $Y$ has a defect rate of 5%.

**(a)** A randomly selected item is found to be defective. What is the probability it was produced by Machine $X$?

**(b)** A student reasons: "60% of items are from Machine $X$ and 3% are defective, so the probability is $0.60 \times 0.03 = 0.018$." Identify the error.

[Difficulty: hard. Tests correct application of Bayes' theorem versus the common prior error.]

**Solution:**

**(a)** Let $D$ be "the item is defective" and $X$ be "produced by Machine $X$."

$$P(X|D) = \frac{P(D|X)P(X)}{P(D)}$$

$$P(D) = P(D|X)P(X) + P(D|Y)P(Y) = 0.03 \times 0.60 + 0.05 \times 0.40 = 0.018 + 0.020 = 0.038$$

$$P(X|D) = \frac{0.03 \times 0.60}{0.038} = \frac{0.018}{0.038} = \frac{9}{19} \approx 0.474$$

**(b)** The student computed $P(X \cap D)$ instead of $P(X|D)$. Bayes' theorem asks for the **posterior** probability $P(X|D)$ (probability the item is from $X$ **given** that it is defective), but the student computed the **joint** probability $P(X \cap D)$ (probability the item is both from $X$ and defective, without the "given" condition). The correct computation divides by the total probability of the evidence, $P(D) = 0.038$.

---

## Integration Tests

> Tests synthesis of probability with other topics.

### IT-1: Combinatorics for Probability Counting (with Number and Algebra)

**Question:**

A committee of 5 people is to be selected from 7 men and 5 women. The committee must contain at least 2 men and at least 2 women.

**(a)** In how many ways can the committee be formed?

**(b)** If the committee must also include exactly one person as chairperson, how many different committees are possible?

[Difficulty: hard. Combines combinatorial counting with selection under multiple constraints.]

**Solution:**

**(a)** Total ways to choose 5 from 12 people: $\binom{12}{5} = 792$.

Subtract committees with fewer than 2 men or fewer than 2 women:

- 0 men, 5 women: $\binom{7}{0}\binom{5}{5} = 1$
- 1 man, 4 women: $\binom{7}{1}\binom{5}{4} = 35$
- 2 men, 3 women: $\binom{7}{2}\binom{5}{3} = 210$
- 3 men, 2 women: $\binom{7}{3}\binom{5}{2} = 350$
- 4 men, 1 woman: $\binom{7}{4}\binom{5}{1} = 175$
- 5 men, 0 women: $\binom{7}{5}\binom{5}{0} = 21$

Total excluded: $1 + 35 + 210 + 350 + 175 + 21 = 792$.

Wait, this equals the total. That means the constraint "at least 2 men and at least 2 women" only excludes the cases with 0 or 1 of one gender:

Excluded: 0 men, 5 women (1 way) + 1 man, 4 women (35 ways) + 5 men, 0 women (21 ways) + 4 men, 1 woman (175 ways) = 232 ways.

$$\text{Valid committees} = 792 - 232 = 560$$

**(b)** For each valid committee of 5, there are 5 choices for chairperson. So: $560 \times 5 = 2800$ different chaired committees.
