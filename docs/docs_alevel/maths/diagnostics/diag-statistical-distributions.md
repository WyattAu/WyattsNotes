---
title: Statistical Distributions -- Diagnostic Tests
description: Hard diagnostic tests for statistical distributions covering binomial, normal, Poisson, continuity correction, and combining independent normal variables at A-Level.
slug: diag-statistical-distributions
hide_table_of_contents: true
---

# Statistical Distributions — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for statistical distributions.

### UT-1: Binomial Distribution — Identifying and Applying the Correct Model

**Question:**

For each of the following scenarios, determine whether the binomial distribution $B(n, p)$ is appropriate. If it is, state the values of $n$ and $p$. If it is not, identify which binomial condition is violated and name the correct distribution (if one has been covered).

**(a)** A bag contains 5 red and 3 blue balls. Balls are drawn one at a time without replacement until a red ball is drawn. $X$ is the number of blue balls drawn before the first red ball.

**(b)** A machine produces components, and 2% are defective. Components are packed in boxes of 50. $Y$ is the number of defective components in a randomly selected box.

**(c)** A fair coin is tossed repeatedly until 3 heads have been obtained. $Z$ is the total number of tosses required.

**(d)** A biased die is rolled 100 times. The probability of rolling a 6 is $p = 0.3$. $W$ is the number of times a 6 is rolled in the first 50 rolls.

**(e)** A student answers 10 multiple choice questions, each with 4 options. For the first 5 questions, she knows the answer. For the last 5, she guesses randomly. $V$ is the total number of correct answers.

[Difficulty: hard. Tests precise identification of binomial conditions, which is the most common source of error in distribution questions.]

**Solution:**

**(a)** The binomial distribution is **NOT** appropriate. The condition violated is **independence of trials**: since balls are drawn without replacement, the probability of drawing a red ball changes after each draw. The probability of red on the first draw is $\frac{5}{8}$, but if the first ball is blue, the probability of red on the second draw becomes $\frac{5}{7}$.

The correct distribution is the **geometric distribution** (number of failures before the first success in sampling without replacement follows a negative hypergeometric distribution, but the scenario of "number of blue balls before the first red" without replacement is best modelled by a direct probability calculation for each value).

**(b)** The binomial distribution **IS** appropriate.
- Fixed number of trials: $n = 50$ components per box.
- Two outcomes: defective or not defective.
- Constant probability: $p = 0.02$ (assuming the defect rate is constant and independent between components, which is reasonable for a large production process).
- Independent trials: the defect status of one component does not affect another.

So $Y \sim B(50, 0.02)$.

**(c)** The binomial distribution is **NOT** appropriate. The condition violated is **fixed number of trials**: the number of tosses is not fixed in advance; it depends on when the third head occurs.

The correct distribution is the **negative binomial distribution** (or Pascal distribution). If we define $Z$ as the number of trials until the $r$-th success, then $Z \sim \text{NegBin}(r = 3, p = 0.5)$.

**(d)** The binomial distribution **IS** appropriate.
- Fixed number of trials: $n = 50$ (the first 50 rolls).
- Two outcomes: 6 or not 6.
- Constant probability: $p = 0.3$ for each roll.
- Independent trials: die rolls are independent.

So $W \sim B(50, 0.3)$.

The fact that there are 100 total rolls is irrelevant --- we are only considering the first 50.

**(e)** The binomial distribution is **NOT** appropriate. The condition violated is **constant probability of success**: for the first 5 questions, $\mathrm{P}(\text{correct}) = 1$, but for the last 5 questions, $\mathrm{P}(\text{correct}) = \frac{1}{4}$. The probability of success changes partway through.

The correct approach is to split $V = V_1 + V_2$ where $V_1 \sim B(5, 1)$ (deterministic: always 5) and $V_2 \sim B(5, 0.25)$. Then $V = 5 + V_2$ and $V_2 \sim B(5, 0.25)$.

---

### UT-2: Normal Distribution — Continuity Correction and Sign Errors

**Question:**

The random variable $X$ follows a normal distribution $X \sim N(50, 12)$. (Note: the second parameter is the variance, so $\sigma = \sqrt{12}$.)

**(a)** Find $\mathrm{P}(X \lt 48)$.

**(b)** The random variable $Y$ follows a binomial distribution $Y \sim B(80, 0.6)$. Using a normal approximation with continuity correction, approximate $\mathrm{P}(Y \leq 50)$.

**(c)** A student uses the normal approximation $Y \sim N(48, 19.2)$ to approximate $Y \sim B(80, 0.6)$ and writes $\mathrm{P}(Y \leq 50) \approx \mathrm{P}\left(Z \leq \frac{50 - 48}{\sqrt{19.2}}\right)$. Identify the two errors in this working and provide the correct calculation.

**(d)** Verify that the normal approximation is appropriate for this binomial distribution by checking the criteria $np > 5$ and $n(1-p) > 5$.

[Difficulty: hard. Tests the most error-prone aspects of normal approximation: continuity correction and sign errors.]

**Solution:**

**(a)** $X \sim N(50, 12)$, so $\mu = 50$, $\sigma = \sqrt{12} = 2\sqrt{3}$.

Standardising:

$$Z = \frac{X - 50}{2\sqrt{3}}, \quad Z \sim N(0, 1)$$

$$\mathrm{P}(X \lt 48) = \mathrm{P}\left(Z \lt \frac{48 - 50}{2\sqrt{3}}\right) = \mathrm{P}\left(Z \lt \frac{-2}{2\sqrt{3}}\right) = \mathrm{P}\left(Z \lt \frac{-1}{\sqrt{3}}\right)$$

$$\frac{1}{\sqrt{3}} \approx 0.5774$$

$$\mathrm{P}(Z \lt -0.5774) = \Phi(-0.5774) = 1 - \Phi(0.5774) = 1 - 0.7181 = 0.2819 \approx 0.282$$

**(b)** $Y \sim B(80, 0.6)$.

$\mu = np = 80 \times 0.6 = 48$

$\sigma^2 = np(1-p) = 80 \times 0.6 \times 0.4 = 19.2$

$\sigma = \sqrt{19.2}$

**Continuity correction:** Since $Y$ is discrete and we want $\mathrm{P}(Y \leq 50)$, we use $Y \leq 50.5$ for the normal approximation.

$$\mathrm{P}(Y \leq 50) \approx \mathrm{P}(X \leq 50.5) \quad \text{where } X \sim N(48, 19.2)$$

$$Z = \frac{50.5 - 48}{\sqrt{19.2}} = \frac{2.5}{\sqrt{19.2}} = \frac{2.5}{4.3818} = 0.5704$$

$$\mathrm{P}(Z \leq 0.5704) = \Phi(0.5704) = 0.7158 \approx 0.716$$

**(c)** The student has made **two errors**:

1. **No continuity correction:** The student used 50 instead of 50.5. For a discrete distribution approximated by a continuous one, $\mathrm{P}(Y \leq 50)$ should use 50.5, not 50.

2. **Missing the subtraction in the numerator:** The student wrote $\frac{50 - 48}{\sqrt{19.2}}$, which is actually correct for the standardisation formula (though without the continuity correction). However, if the student had meant to compute $\mathrm{P}(Y \geq 50)$ and wrote $\frac{48 - 50}{\sqrt{19.2}}$, that would be a sign error. The standardisation is $Z = \frac{X - \mu}{\sigma}$, so the numerator must be $X - \mu = 50.5 - 48 = 2.5$ (or with continuity correction, $50.5 - 48$). The student's version gives $\frac{50 - 48}{\sqrt{19.2}} = \frac{2}{\sqrt{19.2}} = 0.4564$, which underestimates the correct $z$-value of 0.5704.

The correct calculation is:

$$\mathrm{P}(Y \leq 50) \approx \mathrm{P}\left(Z \leq \frac{50.5 - 48}{\sqrt{19.2}}\right) = \mathrm{P}(Z \leq 0.5704) = 0.716$$

**(d)** Checking the criteria:

$$np = 80 \times 0.6 = 48 > 5 \checkmark$$

$$n(1-p) = 80 \times 0.4 = 32 > 5 \checkmark$$

Both criteria are satisfied, so the normal approximation is appropriate. The approximation will be good because both $np$ and $n(1-p)$ are well above 5 (they are 48 and 32 respectively).

---

### UT-3: Combining Independent Normal Variables and Linear Transformations

**Question:**

The time (in minutes) that employee $A$ takes to complete a task is $A \sim N(25, 9)$, and the time employee $B$ takes is $B \sim N(30, 16)$. The times are independent.

**(a)** Find the probability that employee $A$ completes the task in less than 22 minutes.

**(b)** Both employees work on the same task sequentially (employee $A$ goes first, then employee $B$). Find the probability that the total time for the task is less than 60 minutes.

**(c)** The manager defines efficiency as $E = 3A - 2B$. Find the mean and variance of $E$.

**(d)** A student calculates $\mathrm{SD}(A + B) = \mathrm{SD}(A) + \mathrm{SD}(B) = 3 + 4 = 7$ and concludes that $\mathrm{SD}(A + B) = 7$. Identify the error and calculate the correct value.

[Difficulty: hard. Tests the rules for combining normal variables and the common error of adding standard deviations.]

**Solution:**

**(a)** $A \sim N(25, 9)$, so $\mu_A = 25$, $\sigma_A = 3$.

$$\mathrm{P}(A \lt 22) = \mathrm{P}\left(Z \lt \frac{22 - 25}{3}\right) = \mathrm{P}(Z \lt -1) = 1 - \Phi(1) = 1 - 0.8413 = 0.1587$$

**(b)** The total time is $T = A + B$.

Since $A$ and $B$ are independent normal variables, $T$ is also normally distributed:

$$T \sim N(\mu_A + \mu_B,\; \sigma_A^2 + \sigma_B^2) = N(25 + 30,\; 9 + 16) = N(55, 25)$$

So $\mu_T = 55$, $\sigma_T = 5$.

$$\mathrm{P}(T \lt 60) = \mathrm{P}\left(Z \lt \frac{60 - 55}{5}\right) = \mathrm{P}(Z \lt 1) = 0.8413$$

The key result used here is: if $X \sim N(\mu_1, \sigma_1^2)$ and $Y \sim N(\mu_2, \sigma_2^2)$ are independent, then $X + Y \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. The variances add, not the standard deviations.

**(c)** $E = 3A - 2B$.

$$\mathrm{E}(E) = 3\mathrm{E}(A) - 2\mathrm{E}(B) = 3(25) - 2(30) = 75 - 60 = 15$$

For the variance, we use $\mathrm{Var}(aX + bY) = a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y)$ when $X$ and $Y$ are independent:

$$\mathrm{Var}(E) = 3^2\mathrm{Var}(A) + (-2)^2\mathrm{Var}(B) = 9(9) + 4(16) = 81 + 64 = 145$$

Note: the sign of the coefficient does not affect the variance because $(-2)^2 = 4$.

$$\mathrm{SD}(E) = \sqrt{145} \approx 12.04 \text{ minutes}$$

**(d)** The student's error is adding standard deviations. The correct rule is:

$$\mathrm{Var}(A + B) = \mathrm{Var}(A) + \mathrm{Var}(B) \quad \text{(for independent variables)}$$

$$\mathrm{SD}(A + B) = \sqrt{\mathrm{Var}(A) + \mathrm{Var}(B)} = \sqrt{9 + 16} = \sqrt{25} = 5$$

The student's answer of $\mathrm{SD}(A + B) = 7$ is incorrect. The correct answer is 5.

The formula $\mathrm{SD}(A + B) = \mathrm{SD}(A) + \mathrm{SD}(B)$ is only valid when $A$ and $B$ are perfectly positively correlated ($r = 1$), which is not the case here (they are independent). For independent variables, the variances add, so the standard deviation is the square root of the sum of variances, which is always less than or equal to the sum of standard deviations (by the triangle inequality for $\ell^2$ norms).

---

## Integration Tests

> Tests synthesis of statistical distributions with other topics. Requires combining concepts from multiple units.

### IT-1: Hypothesis Test Using a Binomial Distribution (with Hypothesis Testing)

**Question:**

A supermarket claims that exactly 30% of its customers use reusable bags. An environmental group believes the true proportion is higher and surveys 20 randomly selected customers. They find that 9 of the 20 customers use reusable bags.

**(a)** Stating your hypotheses clearly, carry out a hypothesis test at the 5% significance level to determine whether there is evidence that the proportion of customers using reusable bags is greater than 30%.

**(b)** Calculate the actual significance level (the probability of a Type I error) for this test. Explain why it differs from the stated 5%.

**(c)** The environmental group increases their sample size to 50 customers and finds that 21 use reusable bags. Carry out the test again at the 5% level and compare your conclusion with part (a).

**(d)** Explain what is meant by the power of this test, and describe how increasing the sample size affects the power.

[Difficulty: hard. Combines binomial distribution with hypothesis testing, including actual significance level and power.]

**Solution:**

**(a)** Let $p$ be the proportion of customers using reusable bags.

$H_0: p = 0.3$ (the proportion is 30%)

$H_1: p > 0.3$ (the proportion is greater than 30%)

Under $H_0$: $X \sim B(20, 0.3)$.

We need the critical region. The test is one-tailed (upper tail).

We find the smallest value $c$ such that $\mathrm{P}(X \geq c \mid H_0) \leq 0.05$:

$$\mathrm{P}(X \geq 9) = 1 - \mathrm{P}(X \leq 8)$$

Using the binomial cumulative distribution with $n = 20$, $p = 0.3$:

$$\mathrm{P}(X \leq 8) = 0.8867 \quad \text{(from tables or calculator)}$$

$$\mathrm{P}(X \geq 9) = 1 - 0.8867 = 0.1133$$

Since $0.1133 > 0.05$, 9 is not in the critical region.

$$\mathrm{P}(X \geq 10) = 1 - \mathrm{P}(X \leq 9) = 1 - 0.9520 = 0.0480$$

Since $0.0480 \leq 0.05$, the critical region is $X \geq 10$.

The observed value is $X = 9$, which does **not** fall in the critical region.

**Conclusion:** There is insufficient evidence to reject $H_0$. The data does not provide sufficient evidence that the proportion of customers using reusable bags is greater than 30%.

**(b)** The actual significance level is the probability of rejecting $H_0$ when $H_0$ is true, which equals the probability of falling in the critical region under $H_0$:

$$\alpha_{\text{actual}} = \mathrm{P}(X \geq 10 \mid X \sim B(20, 0.3)) = 0.0480$$

This differs from the stated 5% because the binomial distribution is discrete. There is no critical value that gives exactly 5%. The closest we can get is 4.80% (with critical region $X \geq 10$) or 11.33% (with critical region $X \geq 9$). We choose the critical region that does not exceed the stated significance level.

**(c)** Under $H_0$: $X \sim B(50, 0.3)$, so $\mu = 15$, $\sigma^2 = 10.5$.

Using the normal approximation: $X \approx N(15, 10.5)$, $\sigma = \sqrt{10.5} \approx 3.24$.

With continuity correction for $X \geq c$:

$$\mathrm{P}(X \geq 20.5) = \mathrm{P}\left(Z \geq \frac{20.5 - 15}{\sqrt{10.5}}\right) = \mathrm{P}(Z \geq 1.70) = 1 - \Phi(1.70) = 1 - 0.9554 = 0.0446$$

Since $0.0446 < 0.05$, the critical region is approximately $X \geq 20$.

Alternatively, using exact binomial probabilities: $\mathrm{P}(X \geq 20 \mid B(50, 0.3))$. The observed value is $X = 21$, which is in the critical region.

**Conclusion:** With the larger sample, there **is** sufficient evidence to reject $H_0$ at the 5% level. This demonstrates that a larger sample size provides more statistical power, even when the observed proportion ($\frac{21}{50} = 0.42$) is similar to the smaller sample ($\frac{9}{20} = 0.45$).

**(d)** The **power** of a test is the probability of correctly rejecting $H_0$ when $H_1$ is true. It equals $1 - \mathrm{P}(\text{Type II error})$.

For this test, the power depends on the true value of $p$. If the true proportion were, say, $p = 0.5$, the power would be:

$$\text{Power} = \mathrm{P}(X \geq 10 \mid X \sim B(20, 0.5)) = 1 - \mathrm{P}(X \leq 9 \mid B(20, 0.5))$$

$$= 1 - 0.4119 = 0.5881$$

So the test has about 58.8% power to detect a true proportion of 0.5.

Increasing the sample size increases the power of the test because:
1. The distribution under $H_0$ becomes more concentrated (smaller standard deviation), so the critical region starts at a proportionally lower value.
2. The distribution under $H_1$ also becomes more concentrated, but the separation between the $H_0$ and $H_1$ distributions increases relative to their spread.
3. This makes it easier to distinguish between $H_0$ and $H_1$, reducing the probability of a Type II error and increasing the power.

---

### IT-2: Poisson Approximation and Continuous Uniform Distribution (with Integration)

**Question:**

A call centre receives an average of 2.4 calls per minute.

**(a)** Using the Poisson distribution, find the probability that the call centre receives exactly 3 calls in a one-minute period.

**(b)** Using a suitable approximation, find the probability that the call centre receives more than 60 calls in a 25-minute period. Justify your choice of approximation.

**(c)** The time between consecutive calls, $T$ minutes, follows an exponential distribution with mean $\frac{1}{2.4}$ minutes. However, for simplicity, a student models $T$ using a continuous uniform distribution on $[0, 0.5]$. Using this uniform model, find:

**(i)** The probability that the time between calls is less than 10 seconds.

**(ii)** The median time between calls.

**(iii)** The 90th percentile of the time between calls.

**(d)** Compare the mean of the student's uniform model with the true mean of the exponential distribution. Comment on the suitability of the uniform model.

[Difficulty: hard. Combines Poisson distribution with continuous uniform distribution and integration.]

**Solution:**

**(a)** Let $X$ = number of calls in one minute. Then $X \sim \text{Po}(2.4)$.

$$\mathrm{P}(X = 3) = \frac{e^{-2.4} \times 2.4^3}{3!} = \frac{e^{-2.4} \times 13.824}{6} = 2.304 \times e^{-2.4}$$

$$= 2.304 \times 0.09072 = 0.2090 \approx 0.209$$

**(b)** Let $Y$ = number of calls in 25 minutes. Then $Y \sim \text{Po}(25 \times 2.4) = \text{Po}(60)$.

Since $\lambda = 60$ is large, we can use the normal approximation $Y \approx N(60, 60)$.

$$\mu = 60, \quad \sigma^2 = 60, \quad \sigma = \sqrt{60} \approx 7.746$$

With continuity correction:

$$\mathrm{P}(Y > 60) = \mathrm{P}(Y \geq 61) \approx \mathrm{P}\left(Z > \frac{60.5 - 60}{\sqrt{60}}\right) = \mathrm{P}\left(Z > \frac{0.5}{7.746}\right) = \mathrm{P}(Z > 0.0645)$$

$$= 1 - \Phi(0.0645) = 1 - 0.5257 = 0.4743 \approx 0.474$$

The normal approximation is justified because $\lambda = 60 > 10$, which is the standard criterion for approximating a Poisson distribution with a normal distribution.

**(c)** The student models $T \sim U(0, 0.5)$.

The probability density function is:

$$f(t) = \begin{cases} 2 & \quad 0 \leq t \leq 0.5 \\ 0 & \quad \text{otherwise} \end{cases}$$

**(i)** 10 seconds $= \frac{10}{60} = \frac{1}{6} \approx 0.1667$ minutes.

$$\mathrm{P}\left(T \lt \frac{1}{6}\right) = \int_0^{1/6} 2\,dt = 2 \times \frac{1}{6} = \frac{1}{3}$$

**(ii)** The median $m$ satisfies $\mathrm{P}(T \leq m) = 0.5$:

$$\int_0^m 2\,dt = 2m = 0.5 \implies m = 0.25 \text{ minutes} = 15 \text{ seconds}$$

For a uniform distribution, the median always equals the midpoint of the interval.

**(iii)** The 90th percentile $p_{90}$ satisfies $\mathrm{P}(T \leq p_{90}) = 0.9$:

$$2p_{90} = 0.9 \implies p_{90} = 0.45 \text{ minutes} = 27 \text{ seconds}$$

**(d)** **Uniform model mean:** $\mathrm{E}(T) = \frac{0 + 0.5}{2} = 0.25$ minutes.

**True exponential mean:** $\frac{1}{2.4} \approx 0.417$ minutes.

The uniform model mean (0.25 minutes = 15 seconds) is significantly lower than the true mean (0.417 minutes = 25 seconds). The uniform model assigns equal probability density to all values in $[0, 0.5]$, which means it underestimates the likelihood of longer waiting times. The exponential distribution has a peak near 0 and a long right tail, which is more realistic for inter-arrival times.

The uniform model is unsuitable because:
1. It gives a maximum possible waiting time of 0.5 minutes (30 seconds), whereas the exponential distribution has no upper bound.
2. It assigns the same density to all waiting times, not reflecting the reality that short waiting times are more common than long ones.
3. The mean is off by approximately 40%.

---

### IT-3: Expected Trials Until First Success — Geometric Distribution (with Sequences)

**Question:**

In a game, a player rolls a fair six-sided die. The player wins if they roll a 6. They keep rolling until they get a 6.

**(a)** Find the probability that the player wins on the 3rd roll.

**(b)** Find the expected number of rolls required to get the first 6.

**(c)** Find the probability that the player needs more than 4 rolls to get a 6. Express your answer as a single fraction.

**(d)** The player modifies the game: they roll two fair six-sided dice simultaneously and win if the **sum** of the two dice is 8. Let $N$ be the number of rolls (pairs of dice) until the first win.

**(i)** Find the probability of winning on a single roll.

**(ii)** $N$ follows a geometric distribution. State its parameter and find $\mathrm{E}(N)$ and $\mathrm{Var}(N)$.

**(iii)** The casino charges $\pounds 1$ per roll and pays $\pounds k$ when the player wins. Find the value of $k$ for which the game is fair (expected net gain is zero).

[Difficulty: hard. Combines geometric distribution with sequences, expectation, and a fairness calculation.]

**Solution:**

**(a)** Let $X$ = number of rolls until the first 6. Then $X \sim \text{Geo}(p)$ where $p = \frac{1}{6}$.

$$\mathrm{P}(X = 3) = (1-p)^2 \cdot p = \left(\frac{5}{6}\right)^2 \cdot \frac{1}{6} = \frac{25}{36} \cdot \frac{1}{6} = \frac{25}{216}$$

**(b)** For $X \sim \text{Geo}(p)$: $\mathrm{E}(X) = \frac{1}{p} = 6$.

On average, the player needs 6 rolls to get the first 6. This is intuitive: with probability $\frac{1}{6}$ per roll, you expect to need $\frac{1}{1/6} = 6$ rolls.

**(c)**

$$\mathrm{P}(X > 4) = (1 - p)^4 = \left(\frac{5}{6}\right)^4 = \frac{625}{1296}$$

This uses the memoryless property of the geometric distribution: $\mathrm{P}(X > n) = (1-p)^n$.

**(d)** **(i)** The possible sums when rolling two dice are 2 through 12. We count the outcomes giving sum 8:

(2,6), (3,5), (4,4), (5,3), (6,2) --- that is 5 outcomes out of 36.

$$p = \frac{5}{36}$$

**(ii)** $N \sim \text{Geo}\left(\frac{5}{36}\right)$.

$$\mathrm{E}(N) = \frac{1}{p} = \frac{36}{5} = 7.2$$

$$\mathrm{Var}(N) = \frac{1-p}{p^2} = \frac{31/36}{(5/36)^2} = \frac{31}{36} \times \frac{1296}{25} = \frac{31 \times 36}{25} = \frac{1116}{25} = 44.64$$

**(iii)** Let the net gain be $G$. The player pays $\pounds 1$ per roll and receives $\pounds k$ upon winning. The number of rolls is $N$.

Total cost $= N$ (in pounds), winnings $= k$ (upon winning, which always happens eventually since $p > 0$).

Net gain $= k - N$.

For a fair game: $\mathrm{E}(G) = 0$.

$$\mathrm{E}(k - N) = k - \mathrm{E}(N) = 0$$

$$k = \mathrm{E}(N) = \frac{36}{5} = 7.2$$

The casino should pay $\pounds 7.20$ for the game to be fair.

Alternatively, thinking of it per roll: the expected gain per roll is $-1 + k \cdot \frac{5}{36}$ (lose $\pounds 1$ with probability $\frac{31}{36}$, gain $\pounds(k-1)$ with probability $\frac{5}{36}$). Setting this to zero:

$$-1 + k \cdot \frac{5}{36} = 0 \implies k = \frac{36}{5} = 7.2$$

Both approaches give the same answer, confirming the result.
