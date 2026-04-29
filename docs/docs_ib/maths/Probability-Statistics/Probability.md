---
title: Probability
description: IB Mathematics — probability theory, conditional probability, Bayes theorem,
  and distributions.
slug: probability
---


## Probability Fundamentals

### Sample Space and Events

The **sample space** $\Omega$ (or $S$) is the set of all possible outcomes of an experiment. An
**event** $A$ is a subset of the sample space.

### Probability Axioms (Kolmogorov)

1. $P(A) \ge 0$ for every event $A$.
2. $P(\Omega) = 1$.
3. If $A_1, A_2, \ldots$ are mutually exclusive events, then:

$$
P\!\left(\bigcup_&lbrace;i=1&rbrace;^&lbrace;\infty&rbrace; A_i\right) = \sum_&lbrace;i=1&rbrace;^&lbrace;\infty&rbrace; P(A_i)
$$

### Complementary Events

$$
P(A') = 1 - P(A)
$$

where $A'$ (or $\bar{A}$) is the complement of $A$.

### Venn Diagrams

Venn diagrams visually represent events and their relationships:

- **Union**: $A \cup B$ (elements in $A$ or $B$ or both)
- **Intersection**: $A \cap B$ (elements in both $A$ and $B$)
- **Disjoint (mutually exclusive)**: $A \cap B = \emptyset$

---

## Addition Rule

For any two events $A$ and $B$:

$$
P(A \cup B) = P(A) + P(B) - P(A \cap B)
$$

For **mutually exclusive** events ($A \cap B = \emptyset$):

$$
P(A \cup B) = P(A) + P(B)
$$

:::info[Example]

In a class of 40 students, 25 play football, 18 play basketball, and 8 play both. Find the
probability that a randomly selected student plays at least one sport.

$$
P(F \cup B) = P(F) + P(B) - P(F \cap B) = \frac&lbrace;25&rbrace;&lbrace;40&rbrace; + \frac&lbrace;18&rbrace;&lbrace;40&rbrace; - \frac&lbrace;8&rbrace;&lbrace;40&rbrace; = \frac&lbrace;35&rbrace;&lbrace;40&rbrace; = \frac&lbrace;7&rbrace;&lbrace;8&rbrace;
$$

:::

---

## Multiplication Rule

### Independent Events

Two events $A$ and $B$ are **independent** if and only if:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

For independent events:

$$
P(A \cap B) = P(A) \cdot P(B)
$$

### Dependent Events

For dependent events, the **conditional probability** is needed:

$$
P(A \cap B) = P(A) \cdot P(B|A) = P(B) \cdot P(A|B)
$$

:::warning[Exam Tip]

Independence is NOT the same as mutual exclusivity. In fact, if two events are both mutually
exclusive and both have non-zero probability, they CANNOT be independent (since
$P(A \cap B) = 0 \neq P(A) \cdot P(B)$).

:::

---

## Conditional Probability

### Definition

The probability of $A$ given that $B$ has occurred:

$$
P(A|B) = \frac&lbrace;P(A \cap B)&rbrace;&lbrace;P(B)&rbrace;
$$

### Formula for Independence

Events $A$ and $B$ are independent if and only if:

$$
P(A|B) = P(A)
$$

:::info[Example]

A bag contains 5 red and 3 blue marbles. Two marbles are drawn without replacement. Find the
probability that both are red.

$$
P(\mathrm&lbrace;both red&rbrace;) = P(\mathrm&lbrace;first red&rbrace;) \cdot P(\mathrm&lbrace;second red&rbrace; | \mathrm&lbrace;first red&rbrace;) = \frac&lbrace;5&rbrace;&lbrace;8&rbrace; \cdot \frac&lbrace;4&rbrace;&lbrace;7&rbrace; = \frac&lbrace;20&rbrace;&lbrace;56&rbrace; = \frac&lbrace;5&rbrace;&lbrace;14&rbrace;
$$

:::

### Tree Diagrams

Tree diagrams are useful for multi-stage experiments. Multiply along branches, add between branches.

:::info[Example]

A box contains 4 defective and 6 non-defective items. Two items are drawn without replacement. Find
the probability that exactly one is defective.

Paths giving exactly one defective:

- First defective, second non-defective: $\dfrac{4}{10} \times \dfrac{6}{9} = \dfrac{24}{90}$
- First non-defective, second defective: $\dfrac{6}{10} \times \dfrac{4}{9} = \dfrac{24}{90}$

$$
P(\mathrm&lbrace;exactly one defective&rbrace;) = \frac&lbrace;24&rbrace;&lbrace;90&rbrace; + \frac&lbrace;24&rbrace;&lbrace;90&rbrace; = \frac&lbrace;48&rbrace;&lbrace;90&rbrace; = \frac&lbrace;8&rbrace;&lbrace;15&rbrace;
$$

:::

---

## Bayes' Theorem

### Theorem

For events $A$ and $B$ with $P(B) \neq 0$:

$$
P(A|B) = \frac&lbrace;P(B|A) \cdot P(A)&rbrace;&lbrace;P(B)&rbrace;
$$

### Extended Form

If $A_1, A_2, \ldots, A_n$ form a partition of $\Omega$:

$$
P(A_k|B) = \frac&lbrace;P(B|A_k) \cdot P(A_k)&rbrace;&lbrace;\displaystyle\sum_&lbrace;i=1&rbrace;^&lbrace;n&rbrace; P(B|A_i) \cdot P(A_i)&rbrace;
$$

The denominator $P(B) = \displaystyle\sum_{i=1}^{n} P(B|A_i) \cdot P(A_i)$ is the **law of total
probability**.

:::info[Example]

A factory has three machines producing items. Machine `A` produces 50% of items with 2% defect rate.
Machine `B` produces 30% with 3% defect rate. Machine `C` produces 20% with 1% defect rate. An item
is found to be defective. What is the probability it came from machine `B`?

$$
P(\mathrm&lbrace;defective&rbrace;) = 0.5 \times 0.02 + 0.3 \times 0.03 + 0.2 \times 0.01 = 0.01 + 0.009 + 0.002 = 0.021
$$

$$
P(B|\mathrm&lbrace;defective&rbrace;) = \frac&lbrace;0.3 \times 0.03&rbrace;&lbrace;0.021&rbrace; = \frac&lbrace;0.009&rbrace;&lbrace;0.021&rbrace; = \frac&lbrace;3&rbrace;&lbrace;7&rbrace;
$$

:::

### Medical Testing Example

A disease affects 1% of a population. A test has 99% sensitivity
($P(\mathrm{positive}|\mathrm{disease}) = 0.99$) and 95% specificity
($P(\mathrm{negative}|\mathrm{no disease}) = 0.95$). What is
$P(\mathrm{disease}|\mathrm{positive})$?

$$
P(\mathrm&lbrace;positive&rbrace;) = 0.01 \times 0.99 + 0.99 \times 0.05 = 0.0099 + 0.0495 = 0.0594
$$

$$
P(\mathrm&lbrace;disease&rbrace;|\mathrm&lbrace;positive&rbrace;) = \frac&lbrace;0.01 \times 0.99&rbrace;&lbrace;0.0594&rbrace; = \frac&lbrace;0.0099&rbrace;&lbrace;0.0594&rbrace; \approx 0.167
$$

:::warning[Exam Tip]

This result (approximately 16.7%) is counterintuitively low. Always work through Bayes' theorem
carefully rather than relying on intuition for conditional probability questions.

:::

---

## Discrete Random Variables

### Definition

A **discrete random variable** $X$ takes a countable set of values $x_1, x_2, \ldots$ with
probabilities $P(X = x_i) = p_i$.

### Probability Distribution

A probability distribution satisfies:

1. $p_i \ge 0$ for all $i$
2. $\displaystyle\sum_{\mathrm{all } i} p_i = 1$

### Expectation (Mean)

$$
E(X) = \mu = \sum x_i \cdot p_i
$$

### Variance

$$
\mathrm&lbrace;Var&rbrace;(X) = \sigma^2 = E(X^2) - [E(X)]^2 = \sum x_i^2 p_i - \mu^2
$$

### Standard Deviation

$$
\sigma = \sqrt&lbrace;\mathrm&lbrace;Var&rbrace;(X)&rbrace;
$$

### Properties of Expectation and Variance

For any constant $a$ and $b$:

$$
E(aX + b) = aE(X) + b
$$

$$
\mathrm&lbrace;Var&rbrace;(aX + b) = a^2 \mathrm&lbrace;Var&rbrace;(X)
$$

For independent random variables $X$ and $Y$:

$$
E(X + Y) = E(X) + E(Y)
$$

$$
\mathrm&lbrace;Var&rbrace;(X + Y) = \mathrm&lbrace;Var&rbrace;(X) + \mathrm&lbrace;Var&rbrace;(Y)
$$

:::info[Example]

A random variable $X$ has the following probability distribution:

| $x$        | 0   | 1   | 2   | 3   |
| ---------- | --- | --- | --- | --- |
| $P(X = x)$ | 0.1 | 0.4 | 0.3 | 0.2 |

$$
E(X) = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 0 + 0.4 + 0.6 + 0.6 = 1.6
$$

$$
E(X^2) = 0(0.1) + 1(0.4) + 4(0.3) + 9(0.2) = 0 + 0.4 + 1.2 + 1.8 = 3.4
$$

$$
\mathrm&lbrace;Var&rbrace;(X) = 3.4 - 1.6^2 = 3.4 - 2.56 = 0.84
$$

$$
\sigma = \sqrt&lbrace;0.84&rbrace; \approx 0.917
$$

:::

---

## The Binomial Distribution

### Conditions

A random variable $X$ follows a binomial distribution $X \sim B(n, p)$ if:

1. There are a fixed number $n$ of trials.
2. Each trial has exactly two outcomes (success/failure).
3. The probability of success $p$ is constant for each trial.
4. Trials are independent.

### Probability Mass Function

$$
P(X = x) = \binom&lbrace;n&rbrace;&lbrace;x&rbrace; p^x (1-p)^&lbrace;n-x&rbrace;
$$

for $x = 0, 1, 2, \ldots, n$.

### Mean and Variance

$$
E(X) = np
$$

$$
\mathrm&lbrace;Var&rbrace;(X) = np(1-p)
$$

$$
\sigma = \sqrt&lbrace;np(1-p)&rbrace;
$$

:::info[Example]

A fair coin is tossed 10 times. Find the probability of getting exactly 6 heads.

$X \sim B(10, 0.5)$.

$$
P(X = 6) = \binom&lbrace;10&rbrace;&lbrace;6&rbrace;(0.5)^6(0.5)^4 = 210 \times (0.5)^&lbrace;10&rbrace; = \frac&lbrace;210&rbrace;&lbrace;1024&rbrace; \approx 0.205
$$

:::

:::info[Example]

A multiple-choice test has 20 questions, each with 5 options. A student guesses all answers. Find
the probability of getting at least 10 correct.

$X \sim B(20, 0.2)$.

$$
P(X \ge 10) = 1 - P(X \le 9) = 1 - \sum_&lbrace;x=0&rbrace;^&lbrace;9&rbrace;\binom&lbrace;20&rbrace;&lbrace;x&rbrace;(0.2)^x(0.8)^&lbrace;20-x&rbrace;
$$

This is best computed using a GDC (calculator). The result is approximately $0.00026$.

:::

### Cumulative Binomial Probabilities

$$
P(X \le k) = \sum_&lbrace;x=0&rbrace;^&lbrace;k&rbrace;\binom&lbrace;n&rbrace;&lbrace;x&rbrace;p^x(1-p)^&lbrace;n-x&rbrace;
$$

Most questions require using the cumulative binomial function on a GDC.

:::warning[Exam Tip]

For binomial probability questions, always state the distribution clearly: "$X \sim B(n, p)$
where...". Use your GDC for calculations involving large $n$ or cumulative probabilities.

:::

---

## The Normal Distribution

### Properties

A continuous random variable $X$ follows a normal distribution $X \sim N(\mu, \sigma^2)$.

- The curve is **bell-shaped** and symmetric about $\mu$.
- The mean, median, and mode are all equal to $\mu$.
- Approximately 68% of data lies within $\mu \pm \sigma$.
- Approximately 95% of data lies within $\mu \pm 2\sigma$.
- Approximately 99.7% of data lies within $\mu \pm 3\sigma$.

### Standardisation

To find probabilities, convert to the **standard normal** $Z \sim N(0, 1)$:

$$
Z = \frac&lbrace;X - \mu&rbrace;&lbrace;\sigma&rbrace;
$$

$$
P(X \lt a) = P\!\left(Z \lt \frac&lbrace;a - \mu&rbrace;&lbrace;\sigma&rbrace;\right)
$$

:::info[Example]

Given $X \sim N(50, 16)$, find $P(45 \lt X \lt 55)$.

$\mu = 50$, $\sigma = 4$.

$$
P(45 \lt X \lt 55) = P\!\left(\frac&lbrace;45-50&rbrace;&lbrace;4&rbrace; \lt Z \lt \frac&lbrace;55-50&rbrace;&lbrace;4&rbrace;\right) = P(-1.25 \lt Z \lt 1.25)
$$

$$
= \Phi(1.25) - \Phi(-1.25) = 0.8944 - 0.1056 = 0.7888
$$

:::

### Inverse Normal

Given a probability, find the corresponding value of $X$:

$$
P(X \lt x) = p \implies x = \mu + z_p \cdot \sigma
$$

where $z_p$ is the $p$-th percentile of the standard normal.

:::info[Example]

Heights of a population follow $N(170, 64)$ (in cm). Find the height that is at the 90th percentile.

$\mu = 170$, $\sigma = 8$.

$$
P(X \lt x) = 0.90 \implies \frac&lbrace;x - 170&rbrace;&lbrace;8&rbrace; = z_&lbrace;0.90&rbrace; = 1.282
$$

$$
x = 170 + 1.282 \times 8 = 170 + 10.26 = 180.26 \mathrm&lbrace; cm&rbrace;
$$

:::

### Combining Normal Variables

For **independent** normal variables $X \sim N(\mu_X, \sigma_X^2)$ and
$Y \sim N(\mu_Y, \sigma_Y^2)$:

$$
X + Y \sim N(\mu_X + \mu_Y, \sigma_X^2 + \sigma_Y^2)
$$

$$
X - Y \sim N(\mu_X - \mu_Y, \sigma_X^2 + \sigma_Y^2)
$$

$$
aX + b \sim N(a\mu_X + b, a^2\sigma_X^2)
$$

:::info[Example]

The weight of a parcel is $X \sim N(2, 0.04)$ kg. The packaging adds $Y \sim N(0.3, 0.01)$ kg. Find
the probability that the total exceeds 2.5 kg.

$$
X + Y \sim N(2.3, 0.05)
$$

$$
P(X + Y \gt 2.5) = P\!\left(Z \gt \frac&lbrace;2.5 - 2.3&rbrace;&lbrace;\sqrt&lbrace;0.05&rbrace;&rbrace;\right) = P(Z \gt 0.894) = 1 - 0.814 = 0.186
$$

:::

---

## Continuous Random Variables

### Probability Density Functions (PDF)

A function $f(x)$ is a PDF if:

1. $f(x) \ge 0$ for all $x$.
2. $\displaystyle\int_{-\infty}^{\infty} f(x)\,dx = 1$.

### Probabilities from a PDF

$$
P(a \le X \le b) = \int_a^b f(x)\,dx
$$

### Mean and Variance

$$
E(X) = \int_&lbrace;-\infty&rbrace;^&lbrace;\infty&rbrace; x f(x)\,dx
$$

$$
E(X^2) = \int_&lbrace;-\infty&rbrace;^&lbrace;\infty&rbrace; x^2 f(x)\,dx
$$

$$
\mathrm&lbrace;Var&rbrace;(X) = E(X^2) - [E(X)]^2
$$

### Median

The median $m$ satisfies:

$$
\int_&lbrace;-\infty&rbrace;^&lbrace;m&rbrace; f(x)\,dx = 0.5
$$

:::info[Example]

A continuous random variable $X$ has PDF $f(x) = 2x$ for $0 \le x \le 1$.

Verify it is a valid PDF:

$$
\int_0^1 2x\,dx = [x^2]_0^1 = 1
$$

Find $P(X \lt 0.5)$:

$$
P(X \lt 0.5) = \int_0^&lbrace;0.5&rbrace; 2x\,dx = [x^2]_0^&lbrace;0.5&rbrace; = 0.25
$$

Find $E(X)$:

$$
E(X) = \int_0^1 x \cdot 2x\,dx = \int_0^1 2x^2\,dx = \left[\frac&lbrace;2x^3&rbrace;&lbrace;3&rbrace;\right]_0^1 = \frac&lbrace;2&rbrace;&lbrace;3&rbrace;
$$

Find the median:

$$
\int_0^m 2x\,dx = 0.5 \implies m^2 = 0.5 \implies m = \frac&lbrace;1&rbrace;&lbrace;\sqrt&lbrace;2&rbrace;&rbrace; = \frac&lbrace;\sqrt&lbrace;2&rbrace;&rbrace;&lbrace;2&rbrace;
$$

:::

---

## IB Exam-Style Questions

### Question 1 (Paper 1 style)

Events `A` and `B` are such that $P(A) = 0.6$, $P(B) = 0.4$, and $P(A|B) = 0.3$.

**(a)** Find $P(A \cap B)$.

$$
P(A \cap B) = P(A|B) \cdot P(B) = 0.3 \times 0.4 = 0.12
$$

**(b)** Determine whether `A` and `B` are independent.

$P(A) \cdot P(B) = 0.6 \times 0.4 = 0.24 \neq 0.12 = P(A \cap B)$.

Not independent.

**(c)** Find $P(A \cup B)$.

$$
P(A \cup B) = 0.6 + 0.4 - 0.12 = 0.88
$$

### Question 2 (Paper 2 style)

A bag contains 7 red and 5 blue marbles. Three marbles are drawn without replacement.

**(a)** Find the probability that all three are red.

$$
P = \frac&lbrace;7&rbrace;&lbrace;12&rbrace; \times \frac&lbrace;6&rbrace;&lbrace;11&rbrace; \times \frac&lbrace;5&rbrace;&lbrace;10&rbrace; = \frac&lbrace;210&rbrace;&lbrace;1320&rbrace; = \frac&lbrace;7&rbrace;&lbrace;44&rbrace;
$$

**(b)** Find the probability that exactly two are red.

$$
P = \binom&lbrace;3&rbrace;&lbrace;2&rbrace; \times \frac&lbrace;7&rbrace;&lbrace;12&rbrace; \times \frac&lbrace;6&rbrace;&lbrace;11&rbrace; \times \frac&lbrace;5&rbrace;&lbrace;10&rbrace; = 3 \times \frac&lbrace;210&rbrace;&lbrace;1320&rbrace; = \frac&lbrace;21&rbrace;&lbrace;44&rbrace;
$$

Wait, let me recalculate using a tree diagram approach:

- RRB: $\dfrac{7}{12} \times \dfrac{6}{11} \times \dfrac{5}{10} = \dfrac{7}{44}$
- RBR: $\dfrac{7}{12} \times \dfrac{5}{11} \times \dfrac{6}{10} = \dfrac{7}{44}$
- BRR: $\dfrac{5}{12} \times \dfrac{7}{11} \times \dfrac{6}{10} = \dfrac{7}{44}$

$$
P = \frac&lbrace;7&rbrace;&lbrace;44&rbrace; + \frac&lbrace;7&rbrace;&lbrace;44&rbrace; + \frac&lbrace;7&rbrace;&lbrace;44&rbrace; = \frac&lbrace;21&rbrace;&lbrace;44&rbrace;
$$

### Question 3 (Paper 2 style)

The time taken to complete a task follows a normal distribution with mean 45 minutes and standard
deviation 8 minutes.

**(a)** Find the probability that a randomly selected person takes between 40 and 50 minutes.

$$
P(40 \lt X \lt 50) = P\!\left(\frac&lbrace;40-45&rbrace;&lbrace;8&rbrace; \lt Z \lt \frac&lbrace;50-45&rbrace;&lbrace;8&rbrace;\right) = P(-0.625 \lt Z \lt 0.625)
$$

$$
\approx 2\Phi(0.625) - 1 \approx 2(0.734) - 1 = 0.468
$$

**(b)** The fastest 10% of people receive a certificate. Find the maximum time to qualify.

$$
P(X \lt x) = 0.10 \implies \frac&lbrace;x - 45&rbrace;&lbrace;8&rbrace; = -1.282
$$

$$
x = 45 - 1.282 \times 8 = 45 - 10.26 = 34.74 \mathrm&lbrace; minutes&rbrace;
$$

### Question 4 (Paper 1 style)

$X \sim B(15, 0.3)$. Find $P(X = 5)$.

$$
P(X = 5) = \binom&lbrace;15&rbrace;&lbrace;5&rbrace;(0.3)^5(0.7)^&lbrace;10&rbrace;
$$

Using a GDC: $P(X = 5) \approx 0.206$.

### Question 5 (Paper 2 style)

A continuous random variable $X$ has PDF $f(x) = \dfrac{3x^2}{8}$ for $0 \le x \le 2$.

**(a)** Verify that $f(x)$ is a valid PDF.

$$
\int_0^2 \frac&lbrace;3x^2&rbrace;&lbrace;8&rbrace;\,dx = \frac&lbrace;3&rbrace;&lbrace;8&rbrace;\left[\frac&lbrace;x^3&rbrace;&lbrace;3&rbrace;\right]_0^2 = \frac&lbrace;3&rbrace;&lbrace;8&rbrace; \cdot \frac&lbrace;8&rbrace;&lbrace;3&rbrace; = 1
$$

**(b)** Find $E(X)$.

$$
E(X) = \int_0^2 x \cdot \frac&lbrace;3x^2&rbrace;&lbrace;8&rbrace;\,dx = \int_0^2 \frac&lbrace;3x^3&rbrace;&lbrace;8&rbrace;\,dx = \frac&lbrace;3&rbrace;&lbrace;8&rbrace;\left[\frac&lbrace;x^4&rbrace;&lbrace;4&rbrace;\right]_0^2 = \frac&lbrace;3&rbrace;&lbrace;8&rbrace; \times 4 = \frac&lbrace;3&rbrace;&lbrace;2&rbrace;
$$

**(c)** Find the mode.

Since $f(x) = \dfrac{3x^2}{8}$ is increasing on $[0, 2]$, the mode is $x = 2$.

---

## Summary

| Distribution | Notation           | $E(X)$ | $\mathrm{Var}(X)$ |
| ------------ | ------------------ | ------ | ----------------- |
| Binomial     | $B(n, p)$          | $np$   | $np(1-p)$         |
| Normal       | $N(\mu, \sigma^2)$ | $\mu$  | $\sigma^2$        |

| Key Formula             | Expression                                |
| ----------------------- | ----------------------------------------- |
| Addition rule           | $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ |
| Conditional probability | $P(A\|B) = \dfrac{P(A \cap B)}{P(B)}$     |
| Bayes' theorem          | $P(A\|B) = \dfrac{P(B\|A)P(A)}{P(B)}$     |
| Standardisation         | $Z = \dfrac{X - \mu}{\sigma}$             |

:::tip[Exam Strategy]

Always define your random variable clearly at the start of probability questions. For normal
distribution problems, draw a sketch of the bell curve and shade the relevant area. For binomial
problems, verify the four conditions before applying the formula.

:::

---

## Probability Distributions: Additional Topics

### Poisson Distribution

The Poisson distribution models the number of events occurring in a fixed interval of time or space.

$X \sim \mathrm{Po}(\lambda)$ where $\lambda$ is the mean number of events.

$$
P(X = x) = \frac&lbrace;e^&lbrace;-\lambda&rbrace;\lambda^x&rbrace;&lbrace;x!&rbrace;, \quad x = 0, 1, 2, \ldots
$$

$$
E(X) = \lambda, \quad \mathrm&lbrace;Var&rbrace;(X) = \lambda
$$

:::info[Example]

A call centre receives an average of 4 calls per minute. Find the probability of receiving exactly 6
calls in a minute.

$$
P(X = 6) = \frac&lbrace;e^&lbrace;-4&rbrace; \cdot 4^6&rbrace;&lbrace;6!&rbrace; = \frac&lbrace;e^&lbrace;-4&rbrace; \cdot 4096&rbrace;&lbrace;720&rbrace; = \frac&lbrace;4096&rbrace;&lbrace;720 \times 54.60&rbrace; \approx 0.104
$$

:::

### Geometric Distribution

Models the number of trials until the first success.

$X \sim \mathrm{Geo}(p)$ where $p$ is the probability of success on each trial.

$$
P(X = x) = (1-p)^&lbrace;x-1&rbrace;p, \quad x = 1, 2, 3, \ldots
$$

$$
E(X) = \frac&lbrace;1&rbrace;&lbrace;p&rbrace;, \quad \mathrm&lbrace;Var&rbrace;(X) = \frac&lbrace;1-p&rbrace;&lbrace;p^2&rbrace;
$$

:::info[Example]

A die is rolled until a 6 appears. Find the probability that it takes exactly 4 rolls.

$$
P(X = 4) = \left(\frac&lbrace;5&rbrace;&lbrace;6&rbrace;\right)^3 \times \frac&lbrace;1&rbrace;&lbrace;6&rbrace; = \frac&lbrace;125&rbrace;&lbrace;1296&rbrace; \approx 0.0965
$$

:::

---

## Combinations and Permutations

### Factorial

$$
n! = n \times (n-1) \times \cdots \times 2 \times 1, \quad 0! = 1
$$

### Permutations

The number of ways to arrange $r$ objects from $n$ distinct objects (order matters):

$$
&lbrace;&rbrace;^nP_r = \frac&lbrace;n!&rbrace;&lbrace;(n-r)!&rbrace;
$$

### Combinations

The number of ways to choose $r$ objects from $n$ distinct objects (order does not matter):

$$
&lbrace;&rbrace;^nC_r = \binom&lbrace;n&rbrace;&lbrace;r&rbrace; = \frac&lbrace;n!&rbrace;&lbrace;r!(n-r)!&rbrace;
$$

:::info[Example]

A committee of 4 is to be chosen from 7 men and 5 women. How many committees have at least 2 women?

Total ways $= \dbinom{12}{4} = 495$.

Ways with 0 women: $\dbinom{7}{4} = 35$.

Ways with 1 woman: $\dbinom{5}{1}\dbinom{7}{3} = 5 \times 35 = 175$.

Ways with at least 2 women $= 495 - 35 - 175 = 285$.

:::

---

## Additional Exam-Style Questions

### Question 6 (Paper 2 style)

A bag contains 4 red and 6 blue marbles. Marbles are drawn one at a time without replacement until a
red marble is drawn.

**(a)** Find the probability that exactly 3 draws are needed.

$$
P = \frac&lbrace;6&rbrace;&lbrace;10&rbrace; \times \frac&lbrace;5&rbrace;&lbrace;9&rbrace; \times \frac&lbrace;4&rbrace;&lbrace;8&rbrace; = \frac&lbrace;120&rbrace;&lbrace;720&rbrace; = \frac&lbrace;1&rbrace;&lbrace;6&rbrace;
$$

**(b)** Find the expected number of draws.

Let $X$ be the number of draws. We need $E(X)$.

$P(X=1) = \dfrac{4}{10} = 0.4$

$P(X=2) = \dfrac{6}{10} \times \dfrac{4}{9} = \dfrac{24}{90} = \dfrac{4}{15}$

$P(X=3) = \dfrac{6}{10} \times \dfrac{5}{9} \times \dfrac{4}{8} = \dfrac{1}{6}$

$P(X=4) = \dfrac{6}{10} \times \dfrac{5}{9} \times \dfrac{4}{8} \times \dfrac{4}{7} = \dfrac{4}{42}$

$P(X=5) = \dfrac{6}{10} \times \dfrac{5}{9} \times \dfrac{4}{8} \times \dfrac{3}{7} \times \dfrac{4}{6} = \dfrac{3}{42}$

$P(X=6) = \dfrac{6}{10} \times \dfrac{5}{9} \times \dfrac{4}{8} \times \dfrac{3}{7} \times \dfrac{2}{6} \times \dfrac{4}{5} = \dfrac{2}{105}$

$P(X=7) = \dfrac{6}{10} \times \dfrac{5}{9} \times \dfrac{4}{8} \times \dfrac{3}{7} \times \dfrac{2}{6} \times \dfrac{1}{5} \times \dfrac{4}{4} = \dfrac{1}{210}$

$$
E(X) = 1(0.4) + 2\!\left(\frac&lbrace;4&rbrace;&lbrace;15&rbrace;\right) + 3\!\left(\frac&lbrace;1&rbrace;&lbrace;6&rbrace;\right) + 4\!\left(\frac&lbrace;4&rbrace;&lbrace;42&rbrace;\right) + 5\!\left(\frac&lbrace;3&rbrace;&lbrace;42&rbrace;\right) + 6\!\left(\frac&lbrace;2&rbrace;&lbrace;105&rbrace;\right) + 7\!\left(\frac&lbrace;1&rbrace;&lbrace;210&rbrace;\right)
$$

$$
= 0.4 + 0.533 + 0.5 + 0.381 + 0.357 + 0.114 + 0.033 = 2.318
$$

### Question 7 (Paper 1 style)

$X \sim B(12, 0.25)$. Find $P(X \le 2)$.

$$
P(X \le 2) = P(X=0) + P(X=1) + P(X=2)
$$

$$
= \binom&lbrace;12&rbrace;&lbrace;0&rbrace;(0.25)^0(0.75)^&lbrace;12&rbrace; + \binom&lbrace;12&rbrace;&lbrace;1&rbrace;(0.25)^1(0.75)^&lbrace;11&rbrace; + \binom&lbrace;12&rbrace;&lbrace;2&rbrace;(0.25)^2(0.75)^&lbrace;10&rbrace;
$$

$$
= 0.0317 + 0.1267 + 0.2323 = 0.3907
$$

### Question 8 (Paper 2 style)

The heights of Year 12 students follow a normal distribution with mean $165\mathrm{ cm}$ and
standard deviation $8\mathrm{ cm}$.

**(a)** What percentage of students are taller than $180\mathrm{ cm}$?

$$
P(X \gt 180) = P\!\left(Z \gt \frac&lbrace;180-165&rbrace;&lbrace;8&rbrace;\right) = P(Z \gt 1.875) = 1 - 0.9696 = 0.0304
$$

About $3.0\%$.

**(b)** The school needs to order desks for the middle 90% of students. What height range should the
desks accommodate?

Middle 90% means 5th to 95th percentile.

5th percentile: $\dfrac{h - 165}{8} = -1.645 \implies h = 165 - 13.16 = 151.8\mathrm{ cm}$.

95th percentile: $\dfrac{h - 165}{8} = 1.645 \implies h = 165 + 13.16 = 178.2\mathrm{ cm}$.

Desks should accommodate heights from about $152\mathrm{ cm}$ to $178\mathrm{ cm}$.
