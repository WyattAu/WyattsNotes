---
title: "Probability -- Diagnostic Tests"
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

$P(B) = 0.6$$P(F) = 0.3$$P(B \cap F) = 0.2$.

(a) $P(F \mid B) = \dfrac{P(B \cap F)}{P(B)} = \dfrac{0.2}{0.6} = \dfrac{1}{3}$

(b) $P(B \mid F) = \dfrac{P(B \cap F)}{P(F)} = \dfrac{0.2}{0.3} = \dfrac{2}{3}$

$\dfrac{1}{3} \neq \dfrac{2}{3}$. They are NOT equal.

$P(A \mid B) \neq P(B \mid A)$ . This is a fundamental misconception.

---

### UT-2: Independence vs Mutually Exclusive

**Question:**

If events $A$ and $B$ are mutually exclusive, can they also be independent?

**Solution:**

If $A$ and $B$ are mutually exclusive, then $P(A \cap B) = 0$.

If $A$ and $B$ are independent, then $P(A \cap B) = P(A) \times P(B)$.

So we need $P(A) \times P(B) = 0$Which means at least one of $P(A)$ or $P(B)$ is zero.

If both $P(A) > 0$ and $P(B) > 0$Then mutually exclusive events CANNOT be independent.

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

Events $A$ and $B$ satisfy $P(A) = 0.4$$P(B) = 0.7$And $P(A \cup B) = 0.85$. Find $P(A \cap B)$ and determine whether $A$ and $B$ are independent.

**Solution:**

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

$$0.85 = 0.4 + 0.7 - P(A \cap B)$$

$$P(A \cap B) = 0.25$$

For independence: $P(A) \times P(B) = 0.4 \times 0.7 = 0.28$.

Since $P(A \cap B) = 0.25 \neq 0.28$The events are **not** independent.

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

Events $A$ and $B$ are independent with $P(A) = p$ and $P(B) = 2p$. Given that $P(A \cap B) = \dfrac{1}{8}$Find $p$.

**Solution:**

Since $A$ and $B$ are independent:

$$P(A \cap B) = P(A) \times P(B) = p \times 2p = 2p^2$$

$$2p^2 = \frac{1}{8} \implies p^2 = \frac{1}{16} \implies p = \frac{1}{4}$$

($p > 0$ since it is a probability, and $2p \leq 1$ gives $p \leq \dfrac{1}{2}$Which is satisfied.)

---

### IT-3: Probability and Sequences (with Sequences and Series)

**Question:**

A coin is tossed until the first head appears. If the probability of heads is $p$Find the probability that the first head appears on the $n$-th toss. Show that the total probability sums to 1.

**Solution:**

First head on toss $n$ means: $n - 1$ tails followed by 1 head.

$$P(X = n) = (1 - p)^{n-1} \cdot p$$

Total probability:

$$\sum_{n=1}^{\infty} p(1-p)^{n-1} = p \cdot \frac{1}{1 - (1-p)} = p \cdot \frac{1}{p} = 1$$

This is a geometric series with first term $p$ and ratio $(1-p)$Converging since $0 < 1-p < 1$ when $0 < p < 1$.

---

## Worked Examples

### WE-1: Law of Total Probability

**Question:**

A factory has two machines producing items. Machine $A$ produces $60\%$ of the items and has a defect rate of $3\%$. Machine $B$ produces $40\%$ of the items and has a defect rate of $5\%$. An item is randomly selected and found to be defective. Find the probability that it was produced by Machine $B$.

**Solution:**

Define events: $A$ = produced by Machine $A$$B$ = produced by Machine $B$$D$ = defective.

Given: $P(A) = 0.6$$P(B) = 0.4$$P(D \mid A) = 0.03$$P(D \mid B) = 0.05$.

By the law of total probability:

$$P(D) = P(D \mid A)P(A) + P(D \mid B)P(B) = 0.03 \times 0.6 + 0.05 \times 0.4 = 0.018 + 0.020 = 0.038$$

By Bayes' theorem:

$$P(B \mid D) = \frac{P(D \mid B)P(B)}{P(D)} = \frac{0.05 \times 0.4}{0.038} = \frac{0.020}{0.038} = \frac{10}{19}$$

**DSE Exam Technique:** When applying Bayes' theorem, always state the law of total probability step explicitly. The HKEAA awards method marks for this intermediate step even if the final answer has a minor arithmetic error.

---

### WE-2: Drawing Without Replacement

**Question:**

A bag contains 5 red marbles and 3 blue marbles. Three marbles are drawn without replacement. Find the probability that:

(a) All three are red.
(b) Exactly two are red.
(c) At least one is blue.

**Solution:**

Total number of ways to draw 3 from 8: $\dbinom{8}{3} = 56$.

(a) All three red: $\dbinom{5}{3} = 10$.

$$P(\text{all red}) = \frac{10}{56} = \frac{5}{28}$$

(b) Exactly two red (and one blue): $\dbinom{5}{2} \times \dbinom{3}{1} = 10 \times 3 = 30$.

$$P(\text{exactly 2 red}) = \frac{30}{56} = \frac{15}{28}$$

(c) At least one blue = 1 - P(all red):

$$P(\text{at least 1 blue}) = 1 - \frac{5}{28} = \frac{23}{28}$$

---

### WE-3: Probability with Arrangement

**Question:**

The letters of the word "PROBABILITY" are arranged at random. Find the probability that the two B's are together.

**Solution:**

The word PROBABILITY has 11 letters: P, R, O, B, A, B, I, L, I, T, Y.

The B's are identical. The I's are identical. Total arrangements:

$$\frac{11!}{2! \times 2!} = \frac{39916800}{4} = 9979200$$

Treat the two B's as a single block. Then we have 10 "letters" with the two I's identical.

Arrangements with B's together: $\dfrac{10!}{2!} = 1814400$.

$$P = \frac{1814400}{9979200} = \frac{1}{5.5} = \frac{2}{11}$$

---

### WE-4: Repeated Trials with Different Outcomes

**Question:**

A fair coin is tossed 4 times. Find the probability of getting exactly 3 heads.

**Solution:**

This follows a binomial distribution: $X \sim \mathrm{Bin}(4,\; 0.5)$.

$$P(X = 3) = \dbinom{4}{3}\left(\frac{1}{2}\right)^3\left(\frac{1}{2}\right)^1 = 4 \times \frac{1}{16} = \frac{1}{4}$$

Alternatively, listing: there are $\dbinom{4}{3} = 4$ arrangements with exactly 3 heads (HHHT, HHTH, HTHH, THHH), each with probability $\left(\dfrac{1}{2}\right)^4 = \dfrac{1}{16}$.

$$P = 4 \times \frac{1}{16} = \frac{1}{4}$$

---

### WE-5: Conditional Probability with Venn Diagrams

**Question:**

In a class of 40 students, 25 study Mathematics, 20 study Physics, and 8 study neither. A student is chosen at random. Given that the student studies Mathematics, find the probability that the student also studies Physics.

**Solution:**

Let $M$ = studies Mathematics, $P$ = studies Physics.

$P(M \cup P) = 1 - P(\text{neither}) = 1 - \dfrac{8}{40} = \dfrac{32}{40} = \dfrac{4}{5}$.

Number studying at least one: 32.

$$P(M \cup P) = P(M) + P(P) - P(M \cap P)$$

$$\frac{4}{5} = \frac{25}{40} + \frac{20}{40} - P(M \cap P)$$

$$P(M \cap P) = \frac{25}{40} + \frac{20}{40} - \frac{32}{40} = \frac{13}{40}$$

13 students study both.

$$P(P \mid M) = \frac{P(M \cap P)}{P(M)} = \frac{13/40}{25/40} = \frac{13}{25}$$

---

### WE-6: Expected Value and Fair Game

**Question:**

A game costs $\$5$ to play. A fair six-sided die is rolled. If the result is 6, you win $\$20$. Otherwise, you win nothing. Determine whether this game is fair.

**Solution:**

Expected winnings:

$$E(X) = 0 \times \frac{5}{6} + 20 \times \frac{1}{6} = \frac{20}{6} = \frac{10}{3} \approx \$3.33$$

Net expected gain: $E(X) - 5 = \dfrac{10}{3} - 5 = -\dfrac{5}{3} \approx -\$1.67$.

Since the expected net gain is negative, the game is **not fair**. The player loses on average $\dfrac{5}{3}$ dollars per game.

A fair game would require the cost to equal the expected winnings, i.e. The cost should be $\dfrac{10}{3}$ dollars.

---

### WE-7: Sequential Drawing with Changing Probabilities

**Question:**

A box contains 4 gold coins and 6 silver coins. Coins are drawn one at a time without replacement until a gold coin is drawn. Find the probability that exactly 3 draws are needed.

**Solution:**

Exactly 3 draws means: first two are silver, third is gold.

$$P = \frac{6}{10} \times \frac{5}{9} \times \frac{4}{8} = \frac{6 \times 5 \times 4}{10 \times 9 \times 8} = \frac{120}{720} = \frac{1}{6}$$

**DSE Exam Technique:** Show each multiplication step . Write the probability of each individual draw before combining them.

---

### WE-8: Probability Involving Geometric Regions

**Question:**

A point is chosen at random inside a square of side 4 cm. Find the probability that the point is more than 1 cm from all sides of the square.

**Solution:**

The region more than 1 cm from all sides forms an inner square of side $4 - 1 - 1 = 2$ cm.

$$P = \frac{\text{area of inner square}}{\text{area of outer square}} = \frac{2^2}{4^2} = \frac{4}{16} = \frac{1}{4}$$

---

## Common Pitfalls

1. **Confusing $P(A \mid B)$ with $P(B \mid A)$.** These are generally different. Always identify which is the "given" condition and apply the formula $P(A \mid B) = \dfrac{P(A \cap B)}{P(B)}$ correctly. In DSE Paper 2, this distinction is frequently tested.

2. **Assuming independence without justification.** Two events are independent only if $P(A \cap B) = P(A) \times P(B)$. You must verify this algebraically; never assume it from the context of the problem.

3. **Forgetting to check if events are mutually exclusive when using addition rule.** The general formula is $P(A \cup B) = P(A) + P(B) - P(A \cap B)$. Only if $A$ and $B$ are mutually exclusive can you simplify to $P(A) + P(B)$.

4. **Not using the complement for "at least" problems.** For questions asking "at least one" or "at least two," always consider using $P(\text{at least } k) = 1 - P(\text{fewer than } k)$. Direct enumeration often leads to errors and missed cases.

5. **Incorrect counting with identical objects.** When arranging letters or selecting items with identical elements, remember to divide by the factorial of the number of identical items. For example, the arrangements of "AABB" is $\dfrac{4!}{2! \times 2!} = 6$Not $4! = 24$.

---

## DSE Exam-Style Questions

### DSE-1

A school has 120 students. 70 play basketball, 50 play football, and 30 play volleyball. 20 play both basketball and football, 15 play both basketball and volleyball, 10 play both football and volleyball, and 5 play all three sports.

(a) Draw a Venn diagram to represent this information. (2 marks)
(b) A student is chosen at random. Find the probability that the student plays exactly one sport. (3 marks)
(c) Given that a student plays basketball, find the probability that the student also plays volleyball. (2 marks)

**Solution:**

(a) Using inclusion-exclusion for "all three":

Number playing basketball only: $70 - 20 - 15 + 5 = 40$.

Number playing football only: $50 - 20 - 10 + 5 = 25$.

Number playing volleyball only: $30 - 15 - 10 + 5 = 10$.

Number playing basketball and football only: $20 - 5 = 15$.

Number playing basketball and volleyball only: $15 - 5 = 10$.

Number playing football and volleyball only: $10 - 5 = 5$.

Number playing none: $120 - 40 - 25 - 10 - 15 - 10 - 5 - 5 = 10$.

(b) Exactly one sport: $40 + 25 + 10 = 75$.

$$P = \frac{75}{120} = \frac{5}{8}$$

(c) Students playing basketball: 70. Students playing both basketball and volleyball: 15.

$$P(\text{volleyball} \mid \text{basketball}) = \frac{15}{70} = \frac{3}{14}$$

---

### DSE-2

Two unbiased dice are thrown. Find the probability that:

(a) The sum of the numbers shown is 7. (2 marks)
(b) The sum is at least 10. (2 marks)
(c) The product is a prime number. (3 marks)
(d) Given that the sum is 7, find the probability that one of the dice shows a 3. (2 marks)

**Solution:**

Total outcomes: $6 \times 6 = 36$.

(a) Sum = 7: $(1,6), (2,5), (3,4), (4,3), (5,2), (6,1)$ --- 6 outcomes.

$$P = \frac{6}{36} = \frac{1}{6}$$

(b) Sum $\geq$ 10: Sum 10 (3 outcomes), Sum 11 (2 outcomes), Sum 12 (1 outcome) = 6 outcomes.

$$P = \frac{6}{36} = \frac{1}{6}$$

(c) Product is prime: The only way is one die shows 1 and the other shows a prime (2, 3, or 5). The pairs are $(1,2), (2,1), (1,3), (3,1), (1,5), (5,1)$ --- 6 outcomes.

$$P = \frac{6}{36} = \frac{1}{6}$$

(d) Given sum = 7 (6 equally likely outcomes). Those with a 3: $(3,4), (4,3)$ --- 2 outcomes.

$$P = \frac{2}{6} = \frac{1}{3}$$

---

### DSE-3

The probability that it rains on any given day in June is $0.3$. Assuming independence between days:

(a) Find the probability that it does not rain for 5 consecutive days. (2 marks)
(b) Find the probability that it rains on exactly 2 out of 7 days. (3 marks)
(c) Find the probability that it rains on at least 3 out of 7 days. (3 marks)

**Solution:**

(a) $P(\text{no rain for 5 days}) = (1 - 0.3)^5 = 0.7^5 = 0.16807$.

(b) $X \sim \mathrm{Bin}(7,\; 0.3)$.

$$P(X = 2) = \dbinom{7}{2}(0.3)^2(0.7)^5 = 21 \times 0.09 \times 0.16807 = 0.3177$$

(c) $P(X \geq 3) = 1 - P(X \leq 2) = 1 - [P(X=0) + P(X=1) + P(X=2)]$.

$P(X = 0) = 0.7^7 = 0.08235$.

$P(X = 1) = 7 \times 0.3 \times 0.7^6 = 7 \times 0.3 \times 0.11765 = 0.24707$.

$P(X = 2) = 0.3177$ (from part b).

$$P(X \geq 3) = 1 - (0.08235 + 0.24707 + 0.3177) = 1 - 0.64712 = 0.35288$$

---

### DSE-4

A box contains $n$ red balls and $n$ blue balls. Three balls are drawn at random without replacement. Find, in terms of $n$The probability that:

(a) All three balls are of the same colour. (3 marks)
(b) The three balls are not all of the same colour. (2 marks)
(c) For $n = 5$Evaluate the probability in part (a) as a fraction. (1 mark)

**Solution:**

Total balls: $2n$. Total ways to draw 3: $\dbinom{2n}{3}$.

(a) Same colour means all red OR all blue.

$$P = \frac{\dbinom{n}{3} + \dbinom{n}{3}}{\dbinom{2n}{3}} = \frac{2\dbinom{n}{3}}{\dbinom{2n}{3}}$$

Expanding:

$$= \frac{2 \cdot \dfrac{n(n-1)(n-2)}{6}}{\dfrac{2n(2n-1)(2n-2)}{6}} = \frac{n(n-1)(n-2)}{2n(2n-1)(2n-2)} = \frac{n(n-1)(n-2)}{4n(n-1)(2n-1)} = \frac{n - 2}{4(2n - 1)}$$

(b) Complement:

$$P(\text{not all same}) = 1 - \frac{n - 2}{4(2n - 1)} = \frac{4(2n-1) - (n-2)}{4(2n-1)} = \frac{8n - 4 - n + 2}{4(2n-1)} = \frac{7n - 2}{4(2n-1)}$$

(c) For $n = 5$:

$$P = \frac{5 - 2}{4(10 - 1)} = \frac{3}{36} = \frac{1}{12}$$

---

### DSE-5

Events $A$ and $B$ are such that $P(A) = 0.5$$P(B) = 0.6$And $P(A \mid B) = 0.4$.

(a) Find $P(A \cap B)$. (1 mark)
(b) Determine whether $A$ and $B$ are independent. Justify your answer. (3 marks)
(c) Find $P(A \cup B)$. (2 marks)
(d) Find $P(A' \cap B')$. (2 marks)

**Solution:**

(a) $P(A \cap B) = P(A \mid B) \times P(B) = 0.4 \times 0.6 = 0.24$.

(b) For independence: $P(A) \times P(B) = 0.5 \times 0.6 = 0.30$.

Since $P(A \cap B) = 0.24 \neq 0.30 = P(A) \times P(B)$The events are **not independent**.

(c) $P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.5 + 0.6 - 0.24 = 0.86$.

(d) By De Morgan's law: $P(A' \cap B') = P((A \cup B)') = 1 - P(A \cup B) = 1 - 0.86 = 0.14$.
