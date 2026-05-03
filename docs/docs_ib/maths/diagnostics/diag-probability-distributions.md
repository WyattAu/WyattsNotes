---
title: "Probability Distributions -- Diagnostic Tests"
description: Hardest IB Mathematics diagnostic tests for probability distributions covering binomial conditions, normal sign errors, Poisson approximation, and linear combinations.
slug: diag-probability-distributions
hide_table_of_contents: true
---

# Probability Distributions — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for probability distributions.

### UT-1: Binomial Distribution — Verification of Conditions

**Question:**

A student claims that the number of heads in 20 coin tosses follows a binomial distribution with $n = 20$ and $p = 0.5$.

A second student claims that the number of sixes in 60 rolls of a fair die follows a binomial distribution with $n = 60$ and $p = \frac{1}{6}$.

**(a)** Verify the conditions for the binomial distribution for each scenario.

**(b)** For the coin toss scenario, find $P(X = 10)$ and explain why this is the mode.

**(c)** A third student claims the number of hearts drawn from a standard deck (with replacement, 20 draws) follows a binomial distribution with $n = 20$ and $p = \frac{1}{4}$. Is this correct?

[Difficulty: hard. Tests verification of binomial conditions, mode identification, and a tricky case with card draws.]

**Solution:**

**(a)** For the coin tosses:
1. Fixed number of trials: $n = 20$. (Yes)
2. Independent trials: coin tosses are independent. (Yes)
3. Two outcomes per trial: heads or tails. (Yes)

The claim is correct.

For the die rolls:
1. Fixed number of trials: $n = 60$. (Yes)
2. Independent rolls: die rolls are independent. (Yes)
3. Two outcomes per trial: six or not-six. (Yes)

The claim is correct.

**(b)** For $X \sim \mathrm{Bin}(20, 0.5)$:

$$P(X = 10) = \binom{20}{10}\left(\frac{1}{2}\right)^{20} = \frac{184756}{1048576} \approx 0.176$$

The mode of a binomial distribution is $\lfloor (n+1)p \rfloor$. Here $\lfloor 21 \times 0.5 \rfloor = \lfloor 10.5 \rfloor = 10$, confirming $X = 10$ is the mode.

**(c)** The conditions are:
1. Fixed $n = 20$ draws. (Yes)
2. Independent draws with replacement. (Yes)
3. Two outcomes: heart or not-heart. (Yes)

The claim is correct. $X \sim \mathrm{Bin}(20, \frac{1}{4})$.

---

### UT-2: Normal Distribution — Sign Error in Standardisation

**Question:**

The heights of men in a population follow $N(175, 8)$.

**(a)** Find the probability that a randomly selected man is taller than $185\,\mathrm{cm}$.

**(b)** A student computes $P(X \gt 185) = P\!\left(Z \gt \frac{185 - 175}{8}\right) = P(Z \gt 1.25)$ and looks up $P(Z \gt 1.25) = 0.8944$. A second student claims the answer should be $1 - 0.8944 = 0.1056$. Who is correct?

[Difficulty: hard. Tests the common sign error in normal distribution problems.]

**Solution:**

**(a)** Standardising:

$$Z = \frac{X - 175}{8} = \frac{185 - 175}{8} = 1.25$$

$$P(X \gt 185) = P(Z \gt 1.25) = 1 - \Phi(1.25)$$

From standard normal tables: $\Phi(1.25) = 0.8944$.

$$P(X \gt 185) = 1 - 0.8944 = 0.1056$$

**(b)** The second student is correct. The student who got $0.8944$ looked up $P(Z \lt 1.25)$, which gives the probability of being **shorter** than $185\,\mathrm{cm}$, not taller. The question asks for $P(X \gt 185)$, so the answer is $1 - 0.8944 = 0.1056$.

---

### UT-3: Poisson Approximation to Binomial

**Question:**

A call centre receives an average of 2 calls per minute. Find the probability of receiving exactly 5 calls in a one-minute period using the Poisson approximation to the binomial distribution.

A student claims this follows $\mathrm{Poi}(2)$ directly without justification.

**(a)** Explain what assumptions must be verified.

**(b)** Compute the probability and compare it with the exact binomial probability if $n = 200$, $p = 0.01$.

[Difficulty: hard. Tests the conditions for Poisson approximation and comparison with exact binomial.]

**Solution:**

**(a)** For the Poisson approximation to the binomial, we need:
1. $n$ is large (typically $n \geq 50$).
2. $p$ is small (typically $p \leq 0.1$).
3. $np$ is moderate (typically $np \leq 15$).

For the call centre, if we model each second as a Bernoulli trial with $p = \frac{2}{60} = \frac{1}{30}$ and $n = 60$, then $np = 2$. The conditions are satisfied since $n = 60 \geq 50$, $p = \frac{1}{30} \lt 0.1$, and $np = 2 \leq 15$.

However, the student's claim that this is "directly $\mathrm{Poi}(2)$" is incomplete — the Poisson is an approximation that must be justified.

**(b)** With $\lambda = np = 200 \times 0.01 = 2$:

Poisson: $P(X = 5) = \dfrac{e^{-2} \cdot 2^5}{5!} = \dfrac{32 \cdot e^{-2}}{120} = \frac{4e^{-2}}{15}$.

Exact binomial: $P(X = 5) = \binom{200}{5}(0.01)^5(0.99)^{195}$.

Poisson: $\frac{4e^{-2}}{15} \approx \frac{4 \times 0.1353}{15} \approx 0.0361$.

The approximation is very close, with relative error less than $0.3\%$.

---

## Integration Tests

> Tests synthesis of probability distributions with other topics.

### IT-1: Linear Combination of Normal Random Variables (with Number and Algebra)

**Question:**

The weights of apples from orchard $A$ follow $N(150, 12)$ and from orchard $B$ follow $N(140, 15)$. A bag contains 3 apples from orchard $A$ and 2 apples from orchard $B$.

**(a)** Find the probability that the total weight of the bag exceeds $750\,\mathrm{g}$.

**(b)** A student claims that since the apples are independent, the total weight is simply $3 \times 150 + 2 \times 140 = 730\,\mathrm{g}$ and the probability of exceeding $750\,\mathrm{g}$ is $50\%$ since $750$ is close to the mean. Explain why this reasoning is wrong.

[Difficulty: hard. Combines linear combinations of normal distributions with probability calculations.]

**Solution:**

**(a)** Let $A_i \sim N(150, 12)$ for $i = 1, 2, 3$ and $B_j \sim N(140, 15)$ for $j = 1, 2$.

Total weight: $T = A_1 + A_2 + A_3 + B_1 + B_2$.

Since the apples are independent:

$$E(T) = 3(150) + 2(140) = 450 + 280 = 730$$

$$\mathrm{Var}(T) = 3(12^2) + 2(15^2) = 3(144) + 2(225) = 432 + 450 = 882$$

$$T \sim N(730, \sqrt{882}) \approx N(730, 29.7)$$

$$P(T \gt 750) = P\!\left(Z \gt \frac{750 - 730}{\sqrt{882}}\right) = P\!\left(Z \gt \frac{20}{29.7}\right) = P(Z \gt 0.673)$$

$$= 1 - \Phi(0.673) \approx 1 - 0.7495 = 0.2505$$

**(b)** The student's error is confusing the mean with the distribution. While the mean total weight is indeed $730\,\mathrm{g}$, the total weight is a random variable with spread (standard deviation $\approx 29.7\,\mathrm{g}$). The probability of exceeding $750\,\mathrm{g}$ is not $50\%$ — it is approximately $25\%$. The student failed to account for the variance of the sum. The probability is $50\%$ only at the mean ($730\,\mathrm{g}$), not at $750\,\mathrm{g}$.
