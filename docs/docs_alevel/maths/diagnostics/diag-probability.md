---
title: "Probability -- Diagnostic Tests"
description: Rigorous diagnostic tests for probability covering independence, conditional probability, Venn diagrams, tree diagrams, and probability distributions at A-Level difficulty.
slug: diag-probability
hide_table_of_contents: true
---

# Probability — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for probability.

### UT-1: Mutually Exclusive vs Independent Events

**Question:**

Events $A$ and $B$ are such that $\mathrm{P}(A) = 0.4$, $\mathrm{P}(B) = 0.5$, and $\mathrm{P}(A \cap B) = 0.1$.

**(a)** Determine whether $A$ and $B$ are mutually exclusive. Justify your answer.

**(b)** Determine whether $A$ and $B$ are independent. Justify your answer.

**(c)** A student claims: "If two events are not mutually exclusive, then they must be independent." Construct a counterexample using numerical values to show this claim is false.

**(d)** A second student claims: "If two events are independent, then they cannot be mutually exclusive (unless one has probability zero)." Prove this claim is true.

[Difficulty: hard. Tests the precise distinction between two concepts that students frequently confuse, and requires a proof.]

**Solution:**

**(a)** Events $A$ and $B$ are mutually exclusive if $\mathrm{P}(A \cap B) = 0$.

Here $\mathrm{P}(A \cap B) = 0.1 \neq 0$, so $A$ and $B$ are **not mutually exclusive**.

**(b)** Events $A$ and $B$ are independent if $\mathrm{P}(A \cap B) = \mathrm{P}(A) \times \mathrm{P}(B)$.

$$\mathrm{P}(A) \times \mathrm{P}(B) = 0.4 \times 0.5 = 0.20$$

But $\mathrm{P}(A \cap B) = 0.1 \neq 0.20$, so $A$ and $B$ are **not independent**.

**(c)** Let $C$ and $D$ be events with $\mathrm{P}(C) = 0.3$, $\mathrm{P}(D) = 0.4$, $\mathrm{P}(C \cap D) = 0.15$.

Not mutually exclusive: $\mathrm{P}(C \cap D) = 0.15 \neq 0$.

Not independent: $\mathrm{P}(C) \times \mathrm{P}(D) = 0.3 \times 0.4 = 0.12 \neq 0.15 = \mathrm{P}(C \cap D)$.

So $C$ and $D$ are neither mutually exclusive nor independent, disproving the claim.

**(d)** Suppose $A$ and $B$ are independent and mutually exclusive.

By independence: $\mathrm{P}(A \cap B) = \mathrm{P}(A) \times \mathrm{P}(B)$.

By mutual exclusivity: $\mathrm{P}(A \cap B) = 0$.

Therefore: $\mathrm{P}(A) \times \mathrm{P}(B) = 0$.

Since probabilities are non-negative, this means $\mathrm{P}(A) = 0$ or $\mathrm{P}(B) = 0$ (or both).

So if two events are both independent and mutually exclusive, at least one of them must have probability zero. This proves the claim: independent non-trivial events (with positive probability) cannot be mutually exclusive.

---

### UT-2: Conditional Probability and the Prosecutor's Fallacy

**Question:**

A medical test for a disease has the following characteristics:
- If a person has the disease, the test is positive with probability 0.95.
- If a person does not have the disease, the test is positive with probability 0.02.
- The prevalence of the disease in the population is 0.01 (1%).

A person is randomly selected from the population and tests positive.

**(a)** Calculate the probability that the person actually has the disease. This probability is called the positive predictive value.

**(b)** A prosecutor argues in court: "The test is 95% accurate, so there is a 95% chance the defendant has the disease." Identify the specific error in this reasoning, naming the two probabilities that have been confused.

**(c)** The hospital director wants the positive predictive value to be at least 50%. Find the minimum prevalence of the disease required to achieve this, keeping the test characteristics the same.

**(d)** Explain why $\mathrm{P}(\text{disease} \mid \text{positive}) \neq \mathrm{P}(\text{positive} \mid \text{disease})$ in general, and state the condition under which they would be equal.

[Difficulty: hard. Tests conditional probability, Bayes' theorem, and the critical distinction between the direction of conditioning.]

**Solution:**

**(a)** Let $D$ = "person has the disease" and $+$ = "test is positive".

We need $\mathrm{P}(D \mid +)$.

By Bayes' theorem (or using a tree diagram / contingency table):

$$\mathrm{P}(D \mid +) = \frac{\mathrm{P}(+ \mid D) \cdot \mathrm{P}(D)}{\mathrm{P}(+)}$$

$$\mathrm{P}(+) = \mathrm{P}(+ \mid D)\mathrm{P}(D) + \mathrm{P}(+ \mid D')\mathrm{P}(D')$$

$$= (0.95)(0.01) + (0.02)(0.99) = 0.0095 + 0.0198 = 0.0293$$

$$\mathrm{P}(D \mid +) = \frac{0.0095}{0.0293} = 0.3242... \approx 0.324$$

So there is approximately a 32.4% chance the person actually has the disease, despite the positive test.

**(b)** The prosecutor has confused:
- $\mathrm{P}(+ \mid D) = 0.95$ (probability of a positive test given the person has the disease)
- $\mathrm{P}(D \mid +) \approx 0.324$ (probability the person has the disease given a positive test)

This is the **prosecutor's fallacy** (also known as the base rate fallacy or confusion of the inverse). The prosecutor has transposed the conditioning, ignoring the base rate (prevalence) of the disease. When the disease is rare (1% prevalence), most positive tests are actually false positives, even with a "95% accurate" test.

**(c)** We need $\mathrm{P}(D \mid +) \geq 0.5$.

Let $p = \mathrm{P}(D)$ be the prevalence. Then:

$$\mathrm{P}(+) = 0.95p + 0.02(1 - p) = 0.95p + 0.02 - 0.02p = 0.93p + 0.02$$

$$\mathrm{P}(D \mid +) = \frac{0.95p}{0.93p + 0.02} \geq 0.5$$

$$0.95p \geq 0.5(0.93p + 0.02) = 0.465p + 0.01$$

$$0.95p - 0.465p \geq 0.01$$

$$0.485p \geq 0.01$$

$$p \geq \frac{0.01}{0.485} = 0.02062...$$

The minimum prevalence is approximately 2.06%. At this prevalence, exactly half of all positive tests are true positives.

**(d)** $\mathrm{P}(D \mid +) \neq \mathrm{P}(+ \mid D)$ in general because they condition on different events. $\mathrm{P}(+ \mid D)$ is the sensitivity of the test (among people with the disease, what fraction test positive), while $\mathrm{P}(D \mid +)$ is the positive predictive value (among people who test positive, what fraction actually have the disease). These are related by Bayes' theorem:

$$\mathrm{P}(D \mid +) = \frac{\mathrm{P}(+ \mid D) \cdot \mathrm{P}(D)}{\mathrm{P}(+)}$$

They would be equal only when $\mathrm{P}(D) = \mathrm{P}(+)$, i.e., when the prevalence equals the overall probability of a positive test. This is a very specific condition that would not generally hold.

---

### UT-3: Probability Distributions and "At Least One" Problems

**Question:**

A bag contains 4 red balls and 6 blue balls. Three balls are drawn at random **without replacement**.

**(a)** Find the probability distribution of $X$, the number of red balls drawn. Verify that your probabilities sum to 1.

**(b)** Calculate $\mathrm{E}(X)$ and $\mathrm{Var}(X)$ directly from the probability distribution.

**(c)** A student claims that since $\mathrm{P}(\text{at least one red}) = 1 - \mathrm{P}(\text{no red})$, this identity is only valid for independent events. Prove that this identity holds for any events (dependent or independent), using the addition rule.

**(d)** In a modified version of the problem, balls are drawn with replacement. Find the probability that the first red ball appears on or before the 5th draw, and express your answer in terms of a geometric distribution.

[Difficulty: hard. Tests probability distribution construction, expectation/variance calculation, and a proof about a fundamental identity.]

**Solution:**

**(a)** $X$ can take values 0, 1, 2, 3.

$$\mathrm{P}(X = 0) = \frac{\binom{6}{3}}{\binom{10}{3}} = \frac{20}{120} = \frac{1}{6}$$

$$\mathrm{P}(X = 1) = \frac{\binom{4}{1}\binom{6}{2}}{\binom{10}{3}} = \frac{4 \times 15}{120} = \frac{60}{120} = \frac{1}{2}$$

$$\mathrm{P}(X = 2) = \frac{\binom{4}{2}\binom{6}{1}}{\binom{10}{3}} = \frac{6 \times 6}{120} = \frac{36}{120} = \frac{3}{10}$$

$$\mathrm{P}(X = 3) = \frac{\binom{4}{3}}{\binom{10}{3}} = \frac{4}{120} = \frac{1}{30}$$

**Verification:**

$$\frac{1}{6} + \frac{1}{2} + \frac{3}{10} + \frac{1}{30} = \frac{5}{30} + \frac{15}{30} + \frac{9}{30} + \frac{1}{30} = \frac{30}{30} = 1 \checkmark$$

**(b)**

$$\mathrm{E}(X) = \sum x \cdot \mathrm{P}(X = x) = 0\left(\frac{1}{6}\right) + 1\left(\frac{1}{2}\right) + 2\left(\frac{3}{10}\right) + 3\left(\frac{1}{30}\right)$$

$$= 0 + \frac{1}{2} + \frac{6}{10} + \frac{3}{30} = \frac{1}{2} + \frac{3}{5} + \frac{1}{10} = \frac{5}{10} + \frac{6}{10} + \frac{1}{10} = \frac{12}{10} = 1.2$$

**Alternative check:** $\mathrm{E}(X) = n \times \frac{\text{number of red}}{\text{total}} = 3 \times \frac{4}{10} = 1.2$. This confirms our result.

$$\mathrm{E}(X^2) = 0^2\left(\frac{1}{6}\right) + 1^2\left(\frac{1}{2}\right) + 2^2\left(\frac{3}{10}\right) + 3^2\left(\frac{1}{30}\right)$$

$$= 0 + \frac{1}{2} + \frac{12}{10} + \frac{9}{30} = \frac{1}{2} + \frac{6}{5} + \frac{3}{10} = \frac{5}{10} + \frac{12}{10} + \frac{3}{10} = \frac{20}{10} = 2$$

$$\mathrm{Var}(X) = \mathrm{E}(X^2) - [\mathrm{E}(X)]^2 = 2 - 1.44 = 0.56$$

**(c)** Let $A$ = "at least one red ball is drawn" and $B$ = "no red balls are drawn".

Note that $A = B'$ (the complement of $B$). This is always true: "at least one" is the complement of "none."

By the complement rule (which holds for all events):

$$\mathrm{P}(A) = \mathrm{P}(B') = 1 - \mathrm{P}(B)$$

This is $\mathrm{P}(\text{at least one red}) = 1 - \mathrm{P}(\text{no red})$.

The complement rule $\mathrm{P}(B') = 1 - \mathrm{P}(B)$ is derived from the addition rule: since $B$ and $B'$ are mutually exclusive and exhaustive (they form a partition of the sample space):

$$\mathrm{P}(B \cup B') = \mathrm{P}(B) + \mathrm{P}(B') = 1$$

So $\mathrm{P}(B') = 1 - \mathrm{P}(B)$.

This holds for **any** events, regardless of whether individual trials are independent or dependent. The identity depends only on the fact that $B$ and $B'$ partition the sample space.

**(d)** With replacement, each draw is independent with $\mathrm{P}(\text{red}) = \frac{4}{10} = 0.4$.

Let $Y$ = number of draws until the first red ball. Then $Y \sim \text{Geo}(0.4)$.

$$\mathrm{P}(Y \leq 5) = 1 - \mathrm{P}(Y > 5) = 1 - \mathrm{P}(\text{first 5 draws are all blue}) = 1 - (0.6)^5$$

$$= 1 - 0.07776 = 0.92224 \approx 0.922$$

Alternatively, using the geometric CDF:

$$\mathrm{P}(Y \leq 5) = \sum_{k=1}^{5} (0.6)^{k-1}(0.4) = 0.4 + 0.24 + 0.144 + 0.0864 + 0.05184 = 0.92224$$

---

## Integration Tests

> Tests synthesis of probability with other topics. Requires combining concepts from multiple units.

### IT-1: Deriving the Expected Value of a Binomial Distribution (with Statistical Distributions)

**Question:**

The random variable $X$ follows a binomial distribution $X \sim B(n, p)$, where $n$ is a positive integer and $0 \lt p \lt 1$.

**(a)** By writing $X = \sum_{i=1}^{n} X_i$ where each $X_i$ is an indicator random variable for the $i$-th trial being a success, show that $\mathrm{E}(X) = np$.

**(b)** Using the fact that $\mathrm{Var}(X_i) = p(1-p)$ for each $X_i$ and that the $X_i$ are independent, show that $\mathrm{Var}(X) = np(1-p)$.

**(c)** A fair coin is tossed 20 times. Using the results from parts (a) and (b), find $\mathrm{E}(X)$ and $\mathrm{Var}(X)$ where $X$ is the number of heads. Hence find $\mathrm{E}(X^2)$.

**(d)** The random variable $Y = 3X - 5$. Find $\mathrm{E}(Y)$ and $\mathrm{Var}(Y)$.

[Difficulty: hard. Derives the binomial expectation and variance from first principles using indicator variables.]

**Solution:**

**(a)** Define $X_i$ as follows:

$$X_i = \begin{cases} 1 & \text{if the } i\text{-th trial is a success} \\ 0 & \text{if the } i\text{-th trial is a failure} \end{cases}$$

Each $X_i$ follows a Bernoulli distribution with parameter $p$:

$$\mathrm{E}(X_i) = 1 \cdot p + 0 \cdot (1-p) = p$$

The total number of successes is $X = X_1 + X_2 + \cdots + X_n = \sum_{i=1}^{n} X_i$.

By the linearity of expectation (which holds regardless of independence):

$$\mathrm{E}(X) = \mathrm{E}\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \mathrm{E}(X_i) = \sum_{i=1}^{n} p = np$$

**(b)** For each $X_i$:

$$\mathrm{E}(X_i^2) = 1^2 \cdot p + 0^2 \cdot (1-p) = p$$

$$\mathrm{Var}(X_i) = \mathrm{E}(X_i^2) - [\mathrm{E}(X_i)]^2 = p - p^2 = p(1-p)$$

Since the trials are independent, the $X_i$ are independent random variables. For independent random variables, the variance of the sum equals the sum of the variances:

$$\mathrm{Var}(X) = \mathrm{Var}\left(\sum_{i=1}^{n} X_i\right) = \sum_{i=1}^{n} \mathrm{Var}(X_i) = \sum_{i=1}^{n} p(1-p) = np(1-p)$$

Note: This step requires independence. If the trials were dependent, we would need to add covariance terms, and the result would not simplify to $np(1-p)$.

**(c)** For a fair coin: $n = 20$, $p = 0.5$.

$$\mathrm{E}(X) = 20 \times 0.5 = 10$$

$$\mathrm{Var}(X) = 20 \times 0.5 \times 0.5 = 5$$

$$\mathrm{E}(X^2) = \mathrm{Var}(X) + [\mathrm{E}(X)]^2 = 5 + 100 = 105$$

**(d)** Using $\mathrm{E}(aX + b) = a\mathrm{E}(X) + b$ and $\mathrm{Var}(aX + b) = a^2\mathrm{Var}(X)$:

$$\mathrm{E}(Y) = 3\mathrm{E}(X) - 5 = 3(10) - 5 = 25$$

$$\mathrm{Var}(Y) = 3^2 \mathrm{Var}(X) = 9 \times 5 = 45$$

Note that the additive constant $-5$ has no effect on the variance. This is a common source of error: students sometimes write $\mathrm{Var}(Y) = \mathrm{Var}(3X) + \mathrm{Var}(-5)$, which is incorrect. The variance of a constant is zero.

---

### IT-2: Solving a Probability Equation with Algebra (with Algebra)

**Question:**

A fair six-sided die is rolled twice. Let $A$ be the event "the sum of the two scores is greater than $k$" and let $B$ be the event "at least one of the scores is prime."

**(a)** Find $\mathrm{P}(A)$ and $\mathrm{P}(B)$ when $k = 7$.

**(b)** Find the value of $k$ for which $\mathrm{P}(A) = \frac{1}{3}$.

**(c)** For $k = 7$, determine whether events $A$ and $B$ are independent. Show all your working.

**(d)** Find the range of values of $k$ for which $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$, and explain the significance of this inequality in terms of dependence.

[Difficulty: hard. Combines probability with algebraic equation solving and formal independence testing.]

**Solution:**

**(a)** The sample space has $6 \times 6 = 36$ equally likely outcomes.

**For $A$ (sum $> 7$):**

| Sum | Outcomes | Count |
|---|---|---|
| 8 | (2,6), (3,5), (4,4), (5,3), (6,2) | 5 |
| 9 | (3,6), (4,5), (5,4), (6,3) | 4 |
| 10 | (4,6), (5,5), (6,4) | 3 |
| 11 | (5,6), (6,5) | 2 |
| 12 | (6,6) | 1 |

$$\mathrm{P}(A) = \frac{5 + 4 + 3 + 2 + 1}{36} = \frac{15}{36} = \frac{5}{12}$$

**For $B$ (at least one prime):** Prime numbers on a die are 2, 3, 5.

$$\mathrm{P}(\text{prime on one roll}) = \frac{3}{6} = \frac{1}{2}$$

$$\mathrm{P}(B) = 1 - \mathrm{P}(\text{no primes}) = 1 - \left(\frac{3}{6}\right)^2 = 1 - \frac{9}{36} = \frac{27}{36} = \frac{3}{4}$$

(Non-prime faces are 1, 4, 6, so 3 out of 6 faces are non-prime.)

**(b)** We need $\mathrm{P}(\text{sum} > k) = \frac{1}{3}$.

The number of outcomes with sum $> k$ must be $\frac{36}{3} = 12$.

Counting outcomes with sum greater than various values of $k$:

- Sum $> 8$: outcomes with sum 9, 10, 11, 12 = $4 + 3 + 2 + 1 = 10$
- Sum $> 7$: outcomes with sum 8, 9, 10, 11, 12 = $5 + 4 + 3 + 2 + 1 = 15$

Since we need exactly 12 outcomes, and the counts jump from 10 to 15, there is no integer value of $k$ for which $\mathrm{P}(A) = \frac{1}{3}$ exactly.

However, let me reconsider. "Sum $> k$" means strictly greater than $k$. The counts are:

| $k$ | Sum $> k$ | Count |
|---|---|---|
| 6 | 7, 8, 9, 10, 11, 12 | 21 |
| 7 | 8, 9, 10, 11, 12 | 15 |
| 8 | 9, 10, 11, 12 | 10 |
| 9 | 10, 11, 12 | 6 |

No integer $k$ gives exactly 12 outcomes. So there is **no integer value** of $k$ for which $\mathrm{P}(A) = \frac{1}{3}$.

If $k$ is allowed to be non-integer, then since the probability function takes discrete values ($\frac{21}{36}, \frac{15}{36}, \frac{10}{36}, \frac{6}{36}, \ldots$), no value of $k$ achieves exactly $\frac{12}{36} = \frac{1}{3}$.

**(c)** For independence, we need $\mathrm{P}(A \cap B) = \mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{5}{12} \times \frac{3}{4} = \frac{5}{16}$.

We need to count outcomes where the sum is $> 7$ AND at least one score is prime.

Listing outcomes with sum $> 7$ and at least one prime:

- Sum 8: (2,6) [2 prime], (3,5) [both prime], (5,3) [both prime], (6,2) [2 prime]. Note: (4,4) has no prime. That is 4 outcomes.
- Sum 9: (3,6) [3 prime], (4,5) [5 prime], (5,4) [5 prime], (6,3) [3 prime]. All 4 outcomes.
- Sum 10: (4,6) [neither prime], (5,5) [prime], (6,4) [neither prime]. That is 1 outcome.
- Sum 11: (5,6) [5 prime], (6,5) [5 prime]. Both 2 outcomes.
- Sum 12: (6,6) [neither prime]. That is 0 outcomes.

$$\mathrm{P}(A \cap B) = \frac{4 + 4 + 1 + 2 + 0}{36} = \frac{11}{36}$$

$$\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{5}{12} \times \frac{3}{4} = \frac{5}{16} = \frac{11.25}{36}$$

Since $\frac{11}{36} \neq \frac{11.25}{36}$, events $A$ and $B$ are **not independent**.

**(d)** We need $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$, which means the events are **negatively dependent**: knowing $B$ occurred makes $A$ less likely.

Computing for different values of $k$:

For $k = 7$: $\mathrm{P}(A \cap B) = \frac{11}{36} \approx 0.306$, $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{5}{16} = 0.3125$. So $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

For $k = 6$: $\mathrm{P}(A) = \frac{21}{36}$. We need $\mathrm{P}(A \cap B)$. Outcomes with sum $> 6$ and at least one prime: add the sum-7 outcomes (6 of them) with at least one prime: (1,6) no, (2,5) yes, (3,4) yes, (4,3) yes, (5,2) yes, (6,1) no. That is 4 more. Total: $\frac{11 + 4}{36} = \frac{15}{36}$. $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{21}{36} \times \frac{3}{4} = \frac{63}{144} = \frac{15.75}{36}$. So $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

For $k = 8$: $\mathrm{P}(A) = \frac{10}{36}$. $\mathrm{P}(A \cap B)$: outcomes with sum $> 8$ and at least one prime = $\frac{11 - 4}{36} = \frac{7}{36}$ (removing the 4 sum-8 outcomes from part c). $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{10}{36} \times \frac{3}{4} = \frac{30}{144} = \frac{7.5}{36}$. So $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

For $k = 9$: $\mathrm{P}(A) = \frac{6}{36}$. $\mathrm{P}(A \cap B)$: sum $> 9$ with at least one prime = $1 + 2 + 0 = 3$ out of 36. $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{6}{36} \times \frac{3}{4} = \frac{18}{144} = \frac{4.5}{36}$. So $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

For $k = 10$: $\mathrm{P}(A) = \frac{3}{36}$. $\mathrm{P}(A \cap B)$: sum $> 10$ with at least one prime = $2 + 0 = 2$ out of 36. $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{3}{36} \times \frac{3}{4} = \frac{2.25}{36}$. So $\mathrm{P}(A \cap B) \gt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

For $k = 11$: $\mathrm{P}(A) = \frac{1}{36}$. $\mathrm{P}(A \cap B)$: sum 12 = (6,6), no prime. $\mathrm{P}(A \cap B) = 0$. $\mathrm{P}(A) \cdot \mathrm{P}(B) = \frac{1}{36} \times \frac{3}{4} = \frac{0.75}{36}$. So $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$.

The inequality $\mathrm{P}(A \cap B) \lt \mathrm{P}(A) \cdot \mathrm{P}(B)$ holds for $k \in \{6, 7, 8, 9, 11\}$ but not for $k = 10$. This inconsistency reflects the discrete nature of the problem.

When this inequality holds, the events are **negatively dependent**: knowing that at least one die shows a prime slightly decreases the probability of a large sum. This is because high sums like 10 = (4,6) or 12 = (6,6) often involve only non-prime numbers, creating a slight negative association.

---

### IT-3: Proof of the Addition Rule Using a Venn Diagram (with Proof)

**Question:**

**(a)** Using a Venn diagram, prove that for any two events $A$ and $B$:

$$\mathrm{P}(A \cup B) = \mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B)$$

**(b)** Hence prove that for three events $A$, $B$, and $C$:

$$\mathrm{P}(A \cup B \cup C) = \mathrm{P}(A) + \mathrm{P}(B) + \mathrm{P}(C) - \mathrm{P}(A \cap B) - \mathrm{P}(A \cap C) - \mathrm{P}(B \cap C) + \mathrm{P}(A \cap B \cap C)$$

**(c)** In a class of 40 students: 18 study Mathematics, 15 study Physics, 12 study Chemistry, 7 study both Mathematics and Physics, 5 study both Mathematics and Chemistry, 4 study both Physics and Chemistry, and 2 study all three subjects. A student is chosen at random. Find the probability that the student studies exactly one of the three subjects.

**(d)** A student claims that if $\mathrm{P}(A \cup B) = \mathrm{P}(A) + \mathrm{P}(B)$, then $A$ and $B$ must be independent. Determine whether this claim is true, justifying with a counterexample or proof.

[Difficulty: hard. Requires a formal proof of the inclusion-exclusion principle and its application to a multi-set problem.]

**Solution:**

**(a)** A Venn diagram for two events $A$ and $B$ has four regions:

1. $A \cap B$ (the overlap)
2. $A \cap B'$ (in $A$ only)
3. $A' \cap B$ (in $B$ only)
4. $A' \cap B'$ (in neither)

The event $A \cup B$ consists of regions 1, 2, and 3.

Now:
- $\mathrm{P}(A) = \mathrm{P}(A \cap B) + \mathrm{P}(A \cap B')$ — the probability of being in $A$ is the probability of being in the overlap plus the probability of being in $A$ only.
- $\mathrm{P}(B) = \mathrm{P}(A \cap B) + \mathrm{P}(A' \cap B)$ — similarly for $B$.
- $\mathrm{P}(A \cup B) = \mathrm{P}(A \cap B) + \mathrm{P}(A \cap B') + \mathrm{P}(A' \cap B)$ — the probability of being in $A$ or $B$ is the sum of all three non-empty regions.

Therefore:

$$\mathrm{P}(A) + \mathrm{P}(B) = [\mathrm{P}(A \cap B) + \mathrm{P}(A \cap B')] + [\mathrm{P}(A \cap B) + \mathrm{P}(A' \cap B)]$$

$$= \mathrm{P}(A \cap B) + \mathrm{P}(A \cap B') + \mathrm{P}(A' \cap B) + \mathrm{P}(A \cap B)$$

$$= \mathrm{P}(A \cup B) + \mathrm{P}(A \cap B)$$

Rearranging:

$$\mathrm{P}(A \cup B) = \mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B)$$

This is the **inclusion-exclusion principle** for two events. The term $\mathrm{P}(A \cap B)$ is subtracted because the overlap was counted twice (once in $\mathrm{P}(A)$ and once in $\mathrm{P}(B)$).

**(b)** Apply the two-event formula repeatedly:

$$\mathrm{P}(A \cup B \cup C) = \mathrm{P}((A \cup B) \cup C)$$

$$= \mathrm{P}(A \cup B) + \mathrm{P}(C) - \mathrm{P}((A \cup B) \cap C)$$

Using the two-event formula for $\mathrm{P}(A \cup B)$:

$$= [\mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B)] + \mathrm{P}(C) - \mathrm{P}((A \cap C) \cup (B \cap C))$$

Using the two-event formula for $\mathrm{P}((A \cap C) \cup (B \cap C))$:

$$= \mathrm{P}(A \cap C) + \mathrm{P}(B \cap C) - \mathrm{P}(A \cap B \cap C)$$

Substituting back:

$$\mathrm{P}(A \cup B \cup C) = \mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B) + \mathrm{P}(C) - \mathrm{P}(A \cap C) - \mathrm{P}(B \cap C) + \mathrm{P}(A \cap B \cap C)$$

Rearranging:

$$\mathrm{P}(A \cup B \cup C) = \mathrm{P}(A) + \mathrm{P}(B) + \mathrm{P}(C) - \mathrm{P}(A \cap B) - \mathrm{P}(A \cap C) - \mathrm{P}(B \cap C) + \mathrm{P}(A \cap B \cap C)$$

This is the inclusion-exclusion principle for three events.

**(c)** Using the inclusion-exclusion formula for three events, or equivalently, constructing the Venn diagram:

Let $M$ = studies Mathematics, $P$ = studies Physics, $C$ = studies Chemistry.

$\mathrm{P}(M) = \frac{18}{40}$, $\mathrm{P}(P) = \frac{15}{40}$, $\mathrm{P}(C) = \frac{12}{40}$

$\mathrm{P}(M \cap P) = \frac{7}{40}$, $\mathrm{P}(M \cap C) = \frac{5}{40}$, $\mathrm{P}(P \cap C) = \frac{4}{40}$

$\mathrm{P}(M \cap P \cap C) = \frac{2}{40}$

Number studying exactly one subject:

- Only Mathematics: $18 - 7 - 5 + 2 = 8$
- Only Physics: $15 - 7 - 4 + 2 = 6$
- Only Chemistry: $12 - 5 - 4 + 2 = 5$

Total studying exactly one: $8 + 6 + 5 = 19$

$$\mathrm{P}(\text{exactly one}) = \frac{19}{40}$$

**(d)** The claim is **false**. If $\mathrm{P}(A \cup B) = \mathrm{P}(A) + \mathrm{P}(B)$, then from the inclusion-exclusion principle:

$$\mathrm{P}(A) + \mathrm{P}(B) = \mathrm{P}(A) + \mathrm{P}(B) - \mathrm{P}(A \cap B)$$

This gives $\mathrm{P}(A \cap B) = 0$, meaning $A$ and $B$ are **mutually exclusive**, not independent.

Counterexample: Let $\mathrm{P}(A) = 0.3$, $\mathrm{P}(B) = 0.2$, $\mathrm{P}(A \cap B) = 0$. Then $\mathrm{P}(A \cup B) = 0.5 = 0.3 + 0.2$. But for independence we need $\mathrm{P}(A \cap B) = 0.3 \times 0.2 = 0.06 \neq 0$. The events are mutually exclusive but not independent.

As shown in UT-1 part (d), independent events with positive probability cannot be mutually exclusive. The student has confused two fundamentally different concepts.
