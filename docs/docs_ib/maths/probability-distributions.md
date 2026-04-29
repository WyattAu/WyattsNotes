---
title: Probability Distributions
tags:
- IB
- Maths
slug: probability-distributions
description: Comprehensive guide to probability distributions for the International
  Baccalaureate.
---


## Discrete Random Variables

### Definition

A **discrete random variable** $X$ is a function that assigns a numerical value to each outcome in a
countable sample space. The set of possible values is finite or countably infinite: for example,
$\{0, 1, 2, \ldots, n\}$ or $\{0, 1, 2, \ldots\}$.

### Probability Mass Function (PMF)

The **probability mass function** of $X$ is $p(x) = P(X = x)$, assigning a probability to each
possible value. It must satisfy:

1. $p(x) \ge 0$ for all $x$
2. $\displaystyle\sum_{\mathrm{all } x} p(x) = 1$

### Cumulative Distribution Function (CDF)

$$
F(x) = P(X \le x) = \sum_&lbrace;t \le x&rbrace; p(t)
$$

The CDF is non-decreasing and right-continuous, with $F(-\infty) = 0$ and $F(\infty) = 1$. For a
discrete variable it is a step function with jumps at each value in the range of $X$. The size of
each jump at $x = a$ equals $P(X = a)$.

### Expected Value

The **expected value** (mean) of $X$ is the probability-weighted average of all possible values:

$$
E(X) = \mu = \sum_&lbrace;\mathrm&lbrace;all &rbrace; x&rbrace; x \cdot p(x)
$$

This represents the long-run average if the experiment is repeated many times. For a function
$g(X)$:

$$
E(g(X)) = \sum_&lbrace;\mathrm&lbrace;all &rbrace; x&rbrace; g(x) \cdot p(x)
$$

A critical special case is $E(X^2) = \sum x^2 p(x)$.

### Variance and Standard Deviation

$$
\mathrm&lbrace;Var&rbrace;(X) = \sigma^2 = E\!\left[(X - \mu)^2\right] = \sum_&lbrace;\mathrm&lbrace;all &rbrace; x&rbrace; (x - \mu)^2 \cdot p(x)
$$

The **computational formula** is almost always more convenient:

$$
\mathrm&lbrace;Var&rbrace;(X) = E(X^2) - [E(X)]^2
$$

The **standard deviation** is $\sigma = \sqrt{\mathrm{Var}(X)}$. It has the same units as $X$ and
measures the typical distance of values from the mean.

### Properties of Expectation and Variance

For any constant $a$ and random variable $X$:

$$
E(a) = a, \quad E(aX) = aE(X), \quad E(X + a) = E(X) + a
$$

$$
\mathrm&lbrace;Var&rbrace;(a) = 0, \quad \mathrm&lbrace;Var&rbrace;(aX) = a^2 \mathrm&lbrace;Var&rbrace;(X), \quad \mathrm&lbrace;Var&rbrace;(X + a) = \mathrm&lbrace;Var&rbrace;(X)
$$

Adding a constant shifts the distribution but does not change its spread. Multiplying by $a$ scales
the spread by $|a|$.

:::info[Example]

A discrete random variable $X$ has PMF:

| $x$        | 0   | 1   | 2   | 3   |
| ---------- | --- | --- | --- | --- |
| $P(X = x)$ | 0.1 | 0.4 | 0.3 | 0.2 |

$$
E(X) = 0(0.1) + 1(0.4) + 2(0.3) + 3(0.2) = 1.6
$$

$$
E(X^2) = 0(0.1) + 1(0.4) + 4(0.3) + 9(0.2) = 3.4
$$

$$
\mathrm&lbrace;Var&rbrace;(X) = 3.4 - 1.6^2 = 3.4 - 2.56 = 0.84, \quad \sigma = \sqrt&lbrace;0.84&rbrace; \approx 0.917
$$

:::

:::info[Example: Finding an unknown parameter]

$P(X = x) = kx$ for $x = 1, 2, 3, 4$. Find $k$ and $E(X)$.

$k(1 + 2 + 3 + 4) = 1 \implies 10k = 1 \implies k = 0.1$

$E(X) = 1(0.1) + 2(0.2) + 3(0.3) + 4(0.4) = 0.1 + 0.4 + 0.9 + 1.6 = 3.0$

:::

<details>
<summary>Worked Example: E(X) and Var(X) from a Table</summary>

A random variable $X$ has the following PMF:

| $x$        | 1   | 2   | 3   | 4   | 5   |
| ---------- | --- | --- | --- | --- | --- |
| $P(X = x)$ | 0.1 | 0.2 | 0.3 | 0.25 | 0.15 |

$$E(X) = 1(0.1) + 2(0.2) + 3(0.3) + 4(0.25) + 5(0.15) = 0.1 + 0.4 + 0.9 + 1.0 + 0.75 = 3.15$$

$$E(X^2) = 1(0.1) + 4(0.2) + 9(0.3) + 16(0.25) + 25(0.15) = 0.1 + 0.8 + 2.7 + 4.0 + 3.75 = 11.35$$

$$\mathrm{Var}(X) = 11.35 - 3.15^2 = 11.35 - 9.9225 = 1.4275$$

$$\sigma = \sqrt{1.4275} \approx 1.195$$

</details>

---

## Binomial Distribution

### Conditions

A random variable $X$ follows a binomial distribution, $X \sim B(n, p)$, when all four conditions
hold:

1. **Fixed number of trials**: exactly $n$ identical trials.
2. **Independent trials**: each trial's outcome does not affect any other.
3. **Two outcomes**: each trial yields success (probability $p$) or failure (probability $q = 1-p$).
4. **Constant probability**: $p$ is the same for every trial.

$X$ counts the number of successes in $n$ trials.

### Probability Mass Function

$$
P(X = x) = \binom&lbrace;n&rbrace;&lbrace;x&rbrace; p^x (1-p)^&lbrace;n-x&rbrace;, \quad x = 0, 1, 2, \ldots, n
$$

where $\dbinom{n}{x} = \dfrac{n!}{x!(n-x)!}$ counts the arrangements of $x$ successes among $n$
trials.

### Mean and Variance

$$
E(X) = np, \quad \mathrm&lbrace;Var&rbrace;(X) = np(1-p), \quad \sigma = \sqrt&lbrace;np(1-p)&rbrace;
$$

<details>
<summary>Derivation of $E(X) = np$ and $\mathrm{Var}(X) = np(1-p)$</summary>

Let $X_1, \ldots, X_n$ be indicator variables: $X_i = 1$ if trial $i$ succeeds, $X_i = 0$ otherwise.
Then $X = X_1 + \cdots + X_n$.

$E(X_i) = 1 \cdot p + 0 \cdot (1-p) = p$, so $E(X) = np$ by linearity of expectation.

$\mathrm{Var}(X_i) = E(X_i^2) - [E(X_i)]^2 = p - p^2 = p(1-p)$, so $\mathrm{Var}(X) = np(1-p)$ by
independence.

</details>

### Shape

- $p = 0.5$: symmetric about $np$.
- $p \lt 0.5$: positively skewed (right tail longer).
- $p \gt 0.5$: negatively skewed (left tail longer).

As $n$ increases the distribution approaches a bell shape (by the Central Limit Theorem). The mode
of $B(n, p)$ is at $\lfloor (n+1)p \rfloor$.

### Cumulative Probabilities

On a GDC, $P(X \le k)$ is computed directly. For "at least" problems, use the complement:

$$
P(X \ge k) = 1 - P(X \le k - 1)
$$

### Normal Approximation to the Binomial

When $n$ is large and $p$ is not too close to 0 or 1 (rule of thumb: $np \ge 5$ and $n(1-p) \ge 5$),
the binomial can be approximated by the normal with matching mean and variance:

$$
B(n, p) \approx N(np, np(1-p))
$$

A **continuity correction** is required. For example:

$$
P(X \le k) \approx P\!\left(Z \le \frac&lbrace;k + 0.5 - np&rbrace;&lbrace;\sqrt&lbrace;np(1-p)&rbrace;&rbrace;\right)
$$

$$
P(X = k) \approx P\!\left(\frac&lbrace;k - 0.5 - np&rbrace;&lbrace;\sqrt&lbrace;np(1-p)&rbrace;&rbrace; \lt Z \lt \frac&lbrace;k + 0.5 - np&rbrace;&lbrace;\sqrt&lbrace;np(1-p)&rbrace;&rbrace;\right)
$$

:::info[Example]

A factory produces bulbs with 3% defect rate. $X \sim B(20, 0.03)$ is the number of defects in a
sample of 20.

$P(X = 2) = \binom{20}{2}(0.03)^2(0.97)^{18} = 190 \times 0.0009 \times 0.5781 \approx 0.0988$

$P(X \le 1) = (0.97)^{20} + 20(0.03)(0.97)^{19} \approx 0.5438 + 0.3364 \approx 0.8802$

$P(X \ge 3) = 1 - P(X \le 2) \approx 1 - 0.8802 - 0.0988 = 0.0210$

$E(X) = 20(0.03) = 0.6$, $\sigma = \sqrt{20(0.03)(0.97)} = \sqrt{0.582} \approx 0.763$

:::

:::info[Example: IB Paper 2 style]

A multiple choice test has 15 questions with 5 options each. A student guesses all answers.

$X \sim B(15, 0.2)$.

$P(X = 4) = \binom{15}{4}(0.2)^4(0.8)^{11} \approx 0.1876$

$P(X \ge 8) = 1 - P(X \le 7) \approx 0.0042$

To set a pass mark so that guessing gives at most 1% chance of passing:

$P(X \ge 7) \approx 0.0181$ and $P(X \ge 8) \approx 0.0042$, so the minimum pass mark is 8 correct.

:::

<details>
<summary>Worked Example: Binomial Probability with Normal Approximation</summary>

A company manufactures light bulbs. On average, 8% are defective. A random sample of 100 bulbs is
selected. Find the probability that more than 12 are defective.

Let $X \sim B(100, 0.08)$.

Check conditions for normal approximation: $np = 8 \ge 5$ and $n(1-p) = 92 \ge 5$.

$$\mu = 100(0.08) = 8, \quad \sigma^2 = 100(0.08)(0.92) = 7.36, \quad \sigma = 2.713$$

With continuity correction:

$$P(X \gt 12) = P(X \ge 13) \approx P\!\left(Z \gt \frac{12.5 - 8}{2.713}\right) = P(Z \gt 1.659)$$

$$\approx 1 - \Phi(1.659) \approx 1 - 0.9515 = 0.0485$$

There is approximately a 4.85% chance that more than 12 bulbs are defective.

</details>

---

## Poisson Distribution

### Conditions

$X \sim \mathrm{Po}(\lambda)$ models the number of events in a fixed interval of time or space when:

1. **Events occur singly**: no simultaneous events.
2. **Independence**: events in non-overlapping intervals are independent.
3. **Constant rate**: events occur at average rate $\lambda$ per unit interval.
4. **Randomness**: the count is proportional to the interval size.

### Probability Mass Function

$$
P(X = x) = \frac&lbrace;e^&lbrace;-\lambda&rbrace; \lambda^x&rbrace;&lbrace;x!&rbrace;, \quad x = 0, 1, 2, \ldots
$$

where $\lambda \gt 0$ is the mean number of events, and $e \approx 2.71828$.

### Mean and Variance

$$
E(X) = \lambda, \quad \mathrm&lbrace;Var&rbrace;(X) = \lambda
$$

That $E(X) = \mathrm{Var}(X)$ is a distinguishing feature. If observed data has mean approximately
equal to variance, a Poisson model may be appropriate.

<details>
<summary>Derivation of $E(X) = \lambda$ and $\mathrm{Var}(X) = \lambda$</summary>

$E(X) = \displaystyle\sum_{x=0}^{\infty} x \cdot \frac{e^{-\lambda}\lambda^x}{x!} = e^{-\lambda} \sum_{x=1}^{\infty} \frac{\lambda^x}{(x-1)!}$

Substituting $k = x-1$:
$= e^{-\lambda} \sum_{k=0}^{\infty} \frac{\lambda^{k+1}}{k!} = \lambda e^{-\lambda} \cdot e^{\lambda} = \lambda$.

For variance, use $x^2 = x(x-1) + x$: $E(X^2) = E[X(X-1)] + E(X) = \lambda^2 + \lambda$, so
$\mathrm{Var}(X) = \lambda^2 + \lambda - \lambda^2 = \lambda$.

</details>

### Poisson as a Limit of the Binomial

If $n \to \infty$, $p \to 0$, while $np = \lambda$ stays constant, then
$B(n, p) \to \mathrm{Po}(\lambda)$. The Poisson approximates the binomial when $n$ is large, $p$ is
small, and $np$ is moderate (typically $n \ge 50$, $p \le 0.1$).

### Additivity

If $X \sim \mathrm{Po}(\lambda_1)$ and $Y \sim \mathrm{Po}(\lambda_2)$ are independent, then:

$$
X + Y \sim \mathrm&lbrace;Po&rbrace;(\lambda_1 + \lambda_2)
$$

If the rate is $\lambda$ per unit interval, then over $t$ intervals the count is
$\mathrm{Po}(t\lambda)$.

:::info[Example]

A helpdesk receives $\lambda = 3.5$ calls per hour. $X \sim \mathrm{Po}(3.5)$.

$P(X = 5) = \dfrac{e^{-3.5} \cdot 3.5^5}{5!} \approx 0.1318$

$P(X \le 2) = e^{-3.5}\!\left(1 + 3.5 + \dfrac{12.25}{2}\right) = 10.625 \, e^{-3.5} \approx 0.3208$

Over 2 hours: $Y \sim \mathrm{Po}(7)$, $P(Y \gt 7) = 1 - P(Y \le 7) \approx 0.4013$.

:::

:::info[Example: Poisson approximation to Binomial]

A typesetter makes errors at a rate of 1 per 500 characters. In a passage of 2000 characters, find
the probability of at most 2 errors.

Exact: $X \sim B(2000, 1/500)$, with $\lambda = 2000/500 = 4$.

Approximate: $X \approx \mathrm{Po}(4)$.

$P(X \le 2) = e^{-4}\!\left(1 + 4 + \dfrac{16}{2}\right) = 13e^{-4} \approx 0.2381$

Using exact binomial:
$P(X \le 2) = (499/500)^{2000} + 2000(1/500)(499/500)^{1999} + \binom{2000}{2}(1/500)^2(499/500)^{1998}$

This is computationally intensive but gives a result extremely close to 0.2381.

:::

<details>
<summary>Worked Example: Poisson Distribution</summary>

A call centre receives calls at a rate of $\lambda = 4.2$ per 10-minute interval.

**(a) Find the probability of receiving exactly 6 calls in a 10-minute interval.**

$$P(X = 6) = \frac{e^{-4.2} \cdot 4.2^6}{6!} = \frac{e^{-4.2} \times 5489.0}{720}$$

$$= 7.624 \times e^{-4.2} \approx 7.624 \times 0.0150 \approx 0.1142$$

**(b) Find the probability of receiving at most 3 calls.**

$$P(X \le 3) = e^{-4.2}\!\left(1 + 4.2 + \frac{17.64}{2} + \frac{74.088}{6}\right) = e^{-4.2}(1 + 4.2 + 8.82 + 12.348)$$

$$= 26.368 \times e^{-4.2} \approx 0.3954$$

**(c) Over a full hour (six intervals), find the probability of more than 30 calls.**

Over one hour: $Y \sim \mathrm{Po}(6 \times 4.2) = \mathrm{Po}(25.2)$.

Using the normal approximation (since $\lambda$ is large):

$$\mu = 25.2, \quad \sigma = \sqrt{25.2} = 5.020$$

$$P(Y \gt 30) \approx P\!\left(Z \gt \frac{30.5 - 25.2}{5.020}\right) = P(Z \gt 1.056) \approx 0.1455$$

</details>

---

## Normal Distribution

### Definition and Properties

$X \sim N(\mu, \sigma^2)$ has probability density function:

$$
f(x) = \frac&lbrace;1&rbrace;&lbrace;\sigma\sqrt&lbrace;2\pi&rbrace;&rbrace; \, e^&lbrace;-\frac&lbrace;(x-\mu)^2&rbrace;&lbrace;2\sigma^2&rbrace;&rbrace;, \quad -\infty \lt x \lt \infty
$$

Key properties: bell-shaped, symmetric about $x = \mu$, asymptotic to the $x$-axis, total area = 1,
inflection points at $x = \mu \pm \sigma$. The mean, median, and mode all equal $\mu$.

$E(X) = \mu$ and $\mathrm{Var}(X) = \sigma^2$.

For any normal variable, $P(X = a) = 0$ for any specific value $a$ (continuous distribution).

### The Empirical Rule (68-95-99.7)

$$
P(\mu - \sigma \lt X \lt \mu + \sigma) \approx 68.27\%
$$

$$
P(\mu - 2\sigma \lt X \lt \mu + 2\sigma) \approx 95.45\%
$$

$$
P(\mu - 3\sigma \lt X \lt \mu + 3\sigma) \approx 99.73\%
$$

### Standard Normal Distribution

The **standard normal** is $Z \sim N(0, 1)$. Any normal variable standardises via:

$$
Z = \frac&lbrace;X - \mu&rbrace;&lbrace;\sigma&rbrace;
$$

The CDF is $\Phi(z) = P(Z \le z)$. Key properties:

$$
\Phi(-z) = 1 - \Phi(z), \quad P(Z \gt z) = 1 - \Phi(z), \quad P(-z \lt Z \lt z) = 2\Phi(z) - 1
$$

### Probability Calculations

For $X \sim N(\mu, \sigma^2)$, to find $P(a \lt X \lt b)$, convert to $z$-scores:

$$
P(a \lt X \lt b) = \Phi\!\left(\frac&lbrace;b - \mu&rbrace;&lbrace;\sigma&rbrace;\right) - \Phi\!\left(\frac&lbrace;a - \mu&rbrace;&lbrace;\sigma&rbrace;\right)
$$

On the GDC these are computed directly without manual standardisation.

### Inverse Normal

Given probability $p$, the inverse normal finds $x$ such that $P(X \le x) = p$. For the standard
normal, $z = \Phi^{-1}(p)$. For a general normal: $x = \mu + z\sigma$.

### Finding Unknown Parameters

When $\mu$ or $\sigma$ is unknown, use standardisation with a known probability to set up
simultaneous equations. Each known probability gives one equation in two unknowns; two probabilities
are needed.

:::info[Example]

Bags of flour: $X \sim N(1000, 225)$ (mean 1000 g, $\sigma = 15$ g).

$P(985 \lt X \lt 1020) = P(-1 \lt Z \lt 1.333) = \Phi(1.333) - \Phi(-1) \approx 0.9088 - 0.1587 = 0.7501$

$P(X \lt 970) = P(Z \lt -2) = 0.0228$, so about 2.28% are rejected.

For the mass exceeded by only 5%: $P(X \le x) = 0.95$, $x = 1000 + 1.645(15) = 1024.67$ g.

:::

:::info[Example: Unknown parameters]

Test scores are normal. 15% score above 80, 10% score below 45. Find $\mu$ and $\sigma$.

$\dfrac{80 - \mu}{\sigma} = 1.036$ and $\dfrac{45 - \mu}{\sigma} = -1.282$.

Subtracting: $35 = 2.318\sigma$, so $\sigma \approx 15.1$ and $\mu = 80 - 1.036(15.1) \approx 64.4$.

:::

:::info[Example: Normal approximation to Binomial]

$X \sim B(80, 0.4)$. Find $P(X \le 30)$ using a normal approximation.

$\mu = 80(0.4) = 32$, $\sigma^2 = 80(0.4)(0.6) = 19.2$, $\sigma = 4.382$.

With continuity correction:
$P(X \le 30) \approx P\!\left(Z \le \dfrac{30.5 - 32}{4.382}\right) = P(Z \le -0.342)$.

$\approx 0.3665$

Exact binomial: $P(X \le 30) \approx 0.3642$. The approximation is very close.

:::

<details>
<summary>Worked Example: Normal Distribution with Unknown Parameters</summary>

Heights of a population are normally distributed. The 90th percentile is $182\,\mathrm{cm}$ and the
30th percentile is $164\,\mathrm{cm}$. Find the mean and standard deviation.

$$P(X \le 182) = 0.90 \implies \frac{182 - \mu}{\sigma} = 1.282$$

$$P(X \le 164) = 0.30 \implies \frac{164 - \mu}{\sigma} = -0.524$$

Subtracting the second equation from the first:

$$\frac{18}{\sigma} = 1.806 \implies \sigma = \frac{18}{1.806} = 9.97\,\mathrm{cm}$$

From the first equation: $\mu = 182 - 1.282(9.97) = 182 - 12.78 = 169.2\,\mathrm{cm}$.

So $\mu \approx 169\,\mathrm{cm}$ and $\sigma \approx 10\,\mathrm{cm}$.

</details>

---

## Continuous Uniform Distribution (AHL)

### Definition

$X \sim U(a, b)$ has PDF:

$$
f(x) = \frac&lbrace;1&rbrace;&lbrace;b - a&rbrace;, \quad a \le x \le b
$$

and $f(x) = 0$ otherwise. The PDF is constant over $[a, b]$, meaning all values in the interval are
equally likely.

### Mean and Variance

$$
E(X) = \frac&lbrace;a + b&rbrace;&lbrace;2&rbrace;, \quad \mathrm&lbrace;Var&rbrace;(X) = \frac&lbrace;(b - a)^2&rbrace;&lbrace;12&rbrace;, \quad \sigma = \frac&lbrace;b - a&rbrace;&lbrace;2\sqrt&lbrace;3&rbrace;&rbrace;
$$

<details>
<summary>Derivation</summary>

$E(X) = \displaystyle\int_a^b \frac{x}{b-a}\,dx = \frac{b^2-a^2}{2(b-a)} = \frac{a+b}{2}$

$E(X^2) = \displaystyle\int_a^b \frac{x^2}{b-a}\,dx = \frac{b^3-a^3}{3(b-a)} = \frac{a^2+ab+b^2}{3}$

$\mathrm{Var}(X) = \dfrac{a^2+ab+b^2}{3} - \dfrac{(a+b)^2}{4} = \dfrac{4(a^2+ab+b^2) - 3(a^2+2ab+b^2)}{12} = \dfrac{(b-a)^2}{12}$

</details>

### CDF

$$
F(x) = \begin&lbrace;cases&rbrace; 0 & x \lt a \\ \dfrac&lbrace;x - a&rbrace;&lbrace;b - a&rbrace; & a \le x \le b \\ 1 & x \gt b \end&lbrace;cases&rbrace;
$$

For any $[c, d] \subseteq [a, b]$: $P(c \le X \le d) = \dfrac{d - c}{b - a}$.

:::info[Example]

A bus arrives every 15 minutes. $X \sim U(0, 15)$ is the waiting time.

$P(X \gt 10) = 5/15 = 1/3$

$E(X) = 7.5$ minutes, $\sigma = \dfrac{15}{2\sqrt{3}} = \dfrac{5\sqrt{3}}{2} \approx 4.33$ minutes.

Given 5 minutes already waited, the remaining wait is $U(0, 10)$:
$P(\mathrm{wait} \ge 8) = 2/10 = 1/5$.

:::

---

## Geometric Distribution (AHL)

### Definition

$X \sim \mathrm{Geo}(p)$ models the number of trials needed for the first success in independent
Bernoulli trials with success probability $p$.

### Probability Mass Function

$$
P(X = x) = (1-p)^&lbrace;x-1&rbrace; p, \quad x = 1, 2, 3, \ldots
$$

The first $x-1$ trials must be failures, and trial $x$ must succeed. This is the probability of
exactly $x-1$ consecutive failures followed by one success.

### Mean and Variance

$$
E(X) = \frac&lbrace;1&rbrace;&lbrace;p&rbrace;, \quad \mathrm&lbrace;Var&rbrace;(X) = \frac&lbrace;1-p&rbrace;&lbrace;p^2&rbrace;
$$

<details>
<summary>Derivation of $E(X) = 1/p$ and $\mathrm{Var}(X) = (1-p)/p^2$</summary>

$E(X) = p\displaystyle\sum_{x=1}^{\infty} x(1-p)^{x-1}$

Using $\displaystyle\sum_{x=1}^{\infty} xr^{x-1} = \frac{1}{(1-r)^2}$ for $|r| \lt 1$, with
$r = 1-p$:

$E(X) = p \cdot \dfrac{1}{p^2} = \dfrac{1}{p}$

For variance: $E(X^2) = E[X(X-1)] + E(X) = \dfrac{2(1-p)}{p^2} + \dfrac{1}{p} = \dfrac{2-p}{p^2}$,

so $\mathrm{Var}(X) = \dfrac{2-p}{p^2} - \dfrac{1}{p^2} = \dfrac{1-p}{p^2}$.

</details>

### Useful shortcut

$$
P(X \gt n) = (1-p)^n
$$

The first $n$ trials must all be failures. Similarly $P(X \ge n) = (1-p)^{n-1}$.

:::info[Example]

A basketball player has free-throw success rate 72%. $X \sim \mathrm{Geo}(0.72)$.

$P(X = 3) = (0.28)^2(0.72) = 0.0784 \times 0.72 \approx 0.05645$

$P(X \gt 5) = (0.28)^5 \approx 0.00172$

$E(X) = 1/0.72 \approx 1.389$ attempts.

:::

<details>
<summary>Worked Example: Geometric Distribution</summary>

A die is rolled repeatedly until a 6 appears.

$X \sim \mathrm{Geo}(1/6)$.

**(a) Find the probability that the first 6 appears on the 4th roll.**

$$P(X = 4) = \left(\frac{5}{6}\right)^3 \times \frac{1}{6} = \frac{125}{1296} \approx 0.0965$$

**(b) Find the probability that at least 10 rolls are needed.**

$$P(X \ge 10) = (1 - p)^{10-1} = \left(\frac{5}{6}\right)^9 = 0.1938$$

**(c) Find the expected number of rolls.**

$$E(X) = \frac{1}{p} = \frac{1}{1/6} = 6$$

On average, 6 rolls are needed to get the first 6.

</details>

---

## Negative Binomial Distribution (AHL)

### Definition

$X \sim \mathrm{NB}(r, p)$ models the number of trials needed to obtain exactly $r$ successes. The
geometric distribution is the special case $\mathrm{NB}(1, p)$.

### Probability Mass Function

$$
P(X = x) = \binom&lbrace;x-1&rbrace;&lbrace;r-1&rbrace; p^r (1-p)^&lbrace;x-r&rbrace;, \quad x = r, r+1, r+2, \ldots
$$

In the first $x-1$ trials there are $r-1$ successes (in $\dbinom{x-1}{r-1}$ ways), and trial $x$ is
the $r$-th success.

### Mean and Variance

$$
E(X) = \frac&lbrace;r&rbrace;&lbrace;p&rbrace;, \quad \mathrm&lbrace;Var&rbrace;(X) = \frac&lbrace;r(1-p)&rbrace;&lbrace;p^2&rbrace;
$$

Note the parallel with geometric: multiplying $r$ by a factor scales both $E(X)$ and
$\mathrm{Var}(X)$ by the same factor.

:::info[Example]

A coin has $P(\mathrm{heads}) = 0.4$. $X \sim \mathrm{NB}(3, 0.4)$ counts flips for 3 heads.

$P(X = 7) = \dbinom{6}{2}(0.4)^3(0.6)^4 = 15 \times 0.064 \times 0.1296 \approx 0.1244$

$E(X) = 3/0.4 = 7.5$, $\mathrm{Var}(X) = 3(0.6)/0.16 = 11.25$,
$\sigma = \sqrt{11.25} \approx 3.354$.

:::

---

## Central Limit Theorem (AHL)

### Statement

If $X_1, X_2, \ldots, X_n$ are independent and identically distributed with mean $\mu$ and variance
$\sigma^2$, then for large $n$:

$$
\bar&lbrace;X&rbrace;_n \sim N\!\left(\mu, \frac&lbrace;\sigma^2&rbrace;&lbrace;n&rbrace;\right)
$$

This holds regardless of the shape of the original distribution. The rule of thumb is $n \ge 30$.

### Distribution of the Sum

The sum $S_n = X_1 + \cdots + X_n$ is approximately $S_n \sim N(n\mu, n\sigma^2)$ for large $n$.

### Standard Error

$$
\mathrm&lbrace;SE&rbrace;(\bar&lbrace;X&rbrace;) = \frac&lbrace;\sigma&rbrace;&lbrace;\sqrt&lbrace;n&rbrace;&rbrace;
$$

As $n$ increases, the standard error decreases: larger samples give more precise estimates of the
population mean.

:::info[Example]

Apple masses: mean 150 g, $\sigma = 20$ g. Sample of 36. Find $P(\bar{X} \gt 155)$.

$\bar{X} \sim N(150, 400/36)$. $P\!\left(Z \gt \dfrac{5}{20/6}\right) = P(Z \gt 1.5) = 0.0668$.

:::

:::info[Example: Sum of uniform variables]

$X \sim U(2, 10)$. Sample of 50 observations. Find $P(\mathrm{sum} \gt 310)$.

$\mu = 6$, $\sigma^2 = 64/12 = 16/3$. Sum has mean $300$ and variance $50(16/3) = 800/3$.

$P\!\left(Z \gt \dfrac{10}{\sqrt{800/3}}\right) = P(Z \gt 0.612) \approx 0.2704$.

:::

---

## Confidence Intervals (AHL)

### Concept

A $C\%$ confidence interval gives a range of plausible values for an unknown population parameter.
If the sampling process were repeated many times, approximately $C\%$ of constructed intervals would
contain the true parameter. The confidence level does not mean there is a $C\%$ probability that the
parameter lies in any particular interval.

### Confidence Interval for the Mean ($\sigma$ known)

$$
\bar&lbrace;x&rbrace; \pm z_&lbrace;\alpha/2&rbrace; \cdot \frac&lbrace;\sigma&rbrace;&lbrace;\sqrt&lbrace;n&rbrace;&rbrace;
$$

where $z_{\alpha/2}$ satisfies $P(Z \gt z_{\alpha/2}) = \alpha/2$ and $\alpha = 1 - C/100$.

| Confidence Level | $z_{\alpha/2}$ |
| ---------------- | -------------- |
| 90%              | 1.645          |
| 95%              | 1.960          |
| 99%              | 2.576          |

When $\sigma$ is unknown and $n$ is large ($n \ge 30$), replace $\sigma$ with the sample standard
deviation $s$.

### Margin of Error and Sample Size

Margin of error: $E = z_{\alpha/2} \cdot \dfrac{\sigma}{\sqrt{n}}$. To halve $E$, quadruple $n$.

Required sample size for margin $E$: $n = \left(\dfrac{z_{\alpha/2} \cdot \sigma}{E}\right)^2$
(round up to the next integer).

:::info[Example]

Bottle volumes: $N(\mu, 25)$, $\sigma = 5$ ml. Sample of 25 gives $\bar{x} = 498$ ml.

95% CI: $498 \pm 1.960 \times 5/\sqrt{25} = 498 \pm 1.96$, so $(496.04, 499.96)$ ml.

For margin 1 ml at 95%: $n = (1.960 \times 5/1)^2 = 96.04$, round up to 97.

:::

---

## Combining Random Variables

### Linear Combinations

For any random variables $X$, $Y$ and constants $a$, $b$:

$$
E(aX + bY) = aE(X) + bE(Y)
$$

This is the **linearity of expectation** and holds always, even without independence.

### Variance of Sums

For **independent** $X$ and $Y$:

$$
\mathrm&lbrace;Var&rbrace;(aX + bY) = a^2\mathrm&lbrace;Var&rbrace;(X) + b^2\mathrm&lbrace;Var&rbrace;(Y)
$$

$$
\mathrm&lbrace;Var&rbrace;(X + Y) = \mathrm&lbrace;Var&rbrace;(X) + \mathrm&lbrace;Var&rbrace;(Y), \quad \mathrm&lbrace;Var&rbrace;(X - Y) = \mathrm&lbrace;Var&rbrace;(X) + \mathrm&lbrace;Var&rbrace;(Y)
$$

Note the plus sign even for differences: subtracting a variable still adds variability.

The general formula (not necessarily independent):

$$
\mathrm&lbrace;Var&rbrace;(X + Y) = \mathrm&lbrace;Var&rbrace;(X) + \mathrm&lbrace;Var&rbrace;(Y) + 2\mathrm&lbrace;Cov&rbrace;(X, Y)
$$

where $\mathrm{Cov}(X, Y) = E(XY) - E(X)E(Y) = 0$ when $X$ and $Y$ are independent.

:::warning[Important]

Linearity of expectation always holds. The simple variance formula
$\mathrm{Var}(X+Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$ requires independence.

:::

### Independent Copies

If $X_1, \ldots, X_n$ are iid with mean $\mu$ and variance $\sigma^2$:

$$
E(X_1 + \cdots + X_n) = n\mu, \quad \mathrm&lbrace;Var&rbrace;(X_1 + \cdots + X_n) = n\sigma^2
$$

$$
E(\bar&lbrace;X&rbrace;) = \mu, \quad \mathrm&lbrace;Var&rbrace;(\bar&lbrace;X&rbrace;) = \frac&lbrace;\sigma^2&rbrace;&lbrace;n&rbrace;
$$

### Combining Normal Variables

If $X \sim N(\mu_X, \sigma_X^2)$ and $Y \sim N(\mu_Y, \sigma_Y^2)$ are independent, then:

$$
aX + bY \sim N(a\mu_X + b\mu_Y, a^2\sigma_X^2 + b^2\sigma_Y^2)
$$

This is exact (not an approximation) for normal variables, and requires no CLT.

:::info[Example]

$X \sim B(10, 0.3)$, $Y \sim B(15, 0.4)$, independent.

$E(X + Y) = 3 + 6 = 9$

$\mathrm{Var}(X + Y) = 10(0.3)(0.7) + 15(0.4)(0.6) = 2.1 + 3.6 = 5.7$

$\mathrm{Var}(2X - 3Y) = 4(2.1) + 9(3.6) = 8.4 + 32.4 = 40.8$

:::

:::info[Example: Normal combinations]

Bus ride $X \sim N(25, 16)$, walk $Y \sim N(10, 9)$, independent.

$X + Y \sim N(35, 25)$. $P(X + Y \gt 40) = P(Z \gt 1) = 0.1587$.

Machine A produces rods: $X \sim N(50.0, 0.04)$. Machine B: $Y \sim N(50.2, 0.09)$.

$X - Y \sim N(-0.2, 0.13)$.
$P(X - Y \gt 0) = P\!\left(Z \gt \dfrac{0.2}{\sqrt{0.13}}\right) = P(Z \gt 0.555) \approx 0.2894$.

:::

<details>
<summary>Worked Example: Combining Random Variables</summary>

$X \sim B(12, 0.3)$ and $Y \sim \mathrm{Po}(5)$ are independent. Find:

**(a)** $E(3X - 2Y)$

$$E(3X - 2Y) = 3E(X) - 2E(Y) = 3(12 \times 0.3) - 2(5) = 3(3.6) - 10 = 10.8 - 10 = 0.8$$

**(b)** $\mathrm{Var}(3X - 2Y)$

$$\mathrm{Var}(3X - 2Y) = 9\mathrm{Var}(X) + 4\mathrm{Var}(Y) = 9(12 \times 0.3 \times 0.7) + 4(5)$$

$$= 9(2.52) + 20 = 22.68 + 20 = 42.68$$

Note: the variance of the difference uses addition (plus signs for both terms), and the constants
are squared.

</details>

---

## IB Exam-Style Questions

### Question 1 (Paper 1)

$X \sim B(20, 0.35)$. Find $P(5 \le X \le 8)$.

$P(5 \le X \le 8) = P(X \le 8) - P(X \le 4) \approx 0.7625 - 0.1260 = 0.6365$

### Question 2 (Paper 1)

$X \sim \mathrm{Po}(4.2)$. Find $P(X \ge 3)$.

$P(X \ge 3) = 1 - P(X \le 2) = 1 - e^{-4.2}(1 + 4.2 + 8.82) \approx 1 - 0.2103 = 0.7897$

### Question 3 (Paper 2)

Daily rainfall: $X \sim N(2.8, 1.44)$ (mean 2.8 mm, $\sigma = 1.2$ mm).

$P(X \gt 4) = P(Z \gt 1) = 0.1587$

Expected days per year exceeding 4 mm: $365 \times 0.1587 \approx 58$ days.

Rainfall exceeded on only 5% of days: $x = 2.8 + 1.645(1.2) = 4.774$ mm.

### Question 4 (Paper 2, AHL)

$X \sim U(0, a)$ has $P(X \gt 3) = 0.4$. Find $a$ and $\mathrm{Var}(X)$.

$\dfrac{a-3}{a} = 0.4 \implies 0.6a = 3 \implies a = 5$

$\mathrm{Var}(X) = 25/12 \approx 2.083$

### Question 5 (Paper 2, AHL)

$X \sim \mathrm{Geo}(0.15)$. Find the smallest $n$ with $P(X \le n) \ge 0.8$.

$P(X \le n) = 1 - 0.85^n \ge 0.8 \implies 0.85^n \le 0.2$

$n \ge \ln(0.2)/\ln(0.85) \approx 9.90$, so $n = 10$.

### Question 6 (Paper 2, AHL)

Component lengths: $N(\mu, 0.25)$, $\sigma = 0.5$ mm. Sample of 30 gives $\bar{x} = 100.2$ mm.

90% CI: $100.2 \pm 1.645 \times 0.5/\sqrt{30} = 100.2 \pm 0.150$, so $(100.05, 100.35)$ mm.

The claim $\mu = 100$ mm is not supported at 90% confidence, since 100 falls below the interval.

### Question 7 (Paper 2, AHL)

$X \sim \mathrm{NB}(4, 0.25)$. Find $P(X = 10)$ and $E(X)$.

$P(X = 10) = \dbinom{9}{3}(0.25)^4(0.75)^6 = 84 \times 0.003906 \times 0.1780 \approx 0.0584$

$E(X) = 4/0.25 = 16$

### Question 8 (Paper 2, AHL)

The masses of male students are $N(72, 36)$ and female students are $N(58, 25)$, independent. Find
the probability that a randomly chosen male is heavier than a randomly chosen female.

Let $M \sim N(72, 36)$ and $F \sim N(58, 25)$. Then $D = M - F \sim N(72-58, 36+25) = N(14, 61)$.

$P(D \gt 0) = P\!\left(Z \gt \dfrac{0 - 14}{\sqrt{61}}\right) = P(Z \gt -1.793) = \Phi(1.793) \approx 0.9636$

---

## Summary of Distributions

### Discrete Distributions

| Distribution        | Notation               | PMF                                 | $E(X)$         | $\mathrm{Var}(X)$     | Support           |
| ------------------- | ---------------------- | ----------------------------------- | -------------- | --------------------- | ----------------- |
| Binomial            | $B(n, p)$              | $\dbinom{n}{x}p^x(1-p)^{n-x}$       | $np$           | $np(1-p)$             | $0, 1, \ldots, n$ |
| Poisson             | $\mathrm{Po}(\lambda)$ | $\dfrac{e^{-\lambda}\lambda^x}{x!}$ | $\lambda$      | $\lambda$             | $0, 1, 2, \ldots$ |
| Geometric (AHL)     | $\mathrm{Geo}(p)$      | $(1-p)^{x-1}p$                      | $\dfrac{1}{p}$ | $\dfrac{1-p}{p^2}$    | $1, 2, 3, \ldots$ |
| Neg. Binomial (AHL) | $\mathrm{NB}(r, p)$    | $\dbinom{x-1}{r-1}p^r(1-p)^{x-r}$   | $\dfrac{r}{p}$ | $\dfrac{r(1-p)}{p^2}$ | $r, r+1, \ldots$  |

### Continuous Distributions

| Distribution  | Notation           | PDF                                                            | $E(X)$           | $\mathrm{Var}(X)$     | Support             |
| ------------- | ------------------ | -------------------------------------------------------------- | ---------------- | --------------------- | ------------------- |
| Normal        | $N(\mu, \sigma^2)$ | $\dfrac{1}{\sigma\sqrt{2\pi}}e^{-\frac{(x-\mu)^2}{2\sigma^2}}$ | $\mu$            | $\sigma^2$            | $(-\infty, \infty)$ |
| Uniform (AHL) | $U(a, b)$          | $\dfrac{1}{b-a}$                                               | $\dfrac{a+b}{2}$ | $\dfrac{(b-a)^2}{12}$ | $[a, b]$            |

### Key Relationships

| Relationship                                                      | Condition                                              |
| ----------------------------------------------------------------- | ------------------------------------------------------ |
| $B(n, p) \approx \mathrm{Po}(np)$                                 | $n$ large, $p$ small, $np$ moderate                    |
| $B(n, p) \approx N(np, np(1-p))$                                  | $np \ge 5$, $n(1-p) \ge 5$, with continuity correction |
| $\mathrm{Geo}(p) = \mathrm{NB}(1, p)$                             | Special case                                           |
| $X + Y \sim \mathrm{Po}(\lambda_1 + \lambda_2)$                   | Independent Poisson variables                          |
| $aX + bY \sim N(a\mu_X + b\mu_Y, a^2\sigma_X^2 + b^2\sigma_Y^2)$  | Independent normal variables                           |
| $\bar{X}_n \approx N(\mu, \sigma^2/n)$                            | CLT, large $n$                                         |
| $E(aX + bY) = aE(X) + bE(Y)$                                      | Always                                                 |
| $\mathrm{Var}(aX + bY) = a^2\mathrm{Var}(X) + b^2\mathrm{Var}(Y)$ | $X$, $Y$ independent                                   |

---

## Common Pitfalls

1. **Confusing $p$ and $\lambda$**: For Poisson, $\lambda$ is a rate, not a probability. Unlike
   binomial $p$, there is no upper bound of 1 on $\lambda$.

2. **Forgetting conditions**: Before applying a distribution, verify all conditions. For binomial:
   fixed $n$, independence, two outcomes, constant $p$.

3. **Variance of differences**: $\mathrm{Var}(X - Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$ (plus, not
   minus) for independent variables.

4. **Continuity correction**: When approximating a discrete distribution with a continuous one,
   apply a continuity correction. For example, $P(X \le 5)$ becomes $P(X \lt 5.5)$ under the normal
   approximation.

5. **Standardisation direction**: $\Phi(z)$ goes from $z$-score to probability; $\Phi^{-1}(p)$ goes
   from probability to $z$-score.

6. **Geometric support**: $X \sim \mathrm{Geo}(p)$ counts trials starting from 1 (IB convention).

7. **Poisson additivity**: Requires independence. If events are correlated, the sum is not Poisson.

8. **Confidence interval interpretation**: A 95% CI does not mean there is a 95% probability that
   $\mu$ lies in the interval. It means 95% of similarly constructed intervals contain $\mu$.

9. **Squaring constants in variance**: $\mathrm{Var}(3X) = 9\mathrm{Var}(X)$, not
   $3\mathrm{Var}(X)$.

:::tip[Exam Strategy]

Always define your random variable and state the distribution with parameters at the start. For
normal problems, sketch the bell curve and shade the relevant area. When combining variables,
clearly state whether independence is assumed. For confidence intervals, state the level and
interpret in context.

:::

---

## Problem Set

### Problem 1

A discrete random variable $X$ has PMF $P(X = x) = \frac{x + 1}{15}$ for $x = 0, 1, 2, 3, 4$. Find
$E(X)$, $\mathrm{Var}(X)$, and $P(X \ge 2)$.

<details>
<summary>Solution</summary>

Verify: $\sum_{x=0}^{4}\frac{x+1}{15} = \frac{1+2+3+4+5}{15} = \frac{15}{15} = 1$.

$$E(X) = 0\!\left(\frac{1}{15}\right) + 1\!\left(\frac{2}{15}\right) + 2\!\left(\frac{3}{15}\right) + 3\!\left(\frac{4}{15}\right) + 4\!\left(\frac{5}{15}\right)$$

$$= \frac{0 + 2 + 6 + 12 + 20}{15} = \frac{40}{15} = \frac{8}{3} \approx 2.667$$

$$E(X^2) = 0 + 1\!\left(\frac{2}{15}\right) + 4\!\left(\frac{3}{15}\right) + 9\!\left(\frac{4}{15}\right) + 16\!\left(\frac{5}{15}\right) = \frac{0 + 2 + 12 + 36 + 80}{15} = \frac{130}{15} = \frac{26}{3}$$

$$\mathrm{Var}(X) = \frac{26}{3} - \left(\frac{8}{3}\right)^2 = \frac{26}{3} - \frac{64}{9} = \frac{78 - 64}{9} = \frac{14}{9} \approx 1.556$$

$$P(X \ge 2) = \frac{3}{15} + \frac{4}{15} + \frac{5}{15} = \frac{12}{15} = \frac{4}{5} = 0.8$$

**If you get this wrong, revise:** Discrete Random Variables section.

</details>

### Problem 2

$X \sim B(25, 0.35)$. Find $P(X = 10)$, $P(X \le 5)$, and $P(X \ge 15)$.

<details>
<summary>Solution</summary>

$$P(X = 10) = \binom{25}{10}(0.35)^{10}(0.65)^{15} \approx 0.1268$$

$$P(X \le 5) = \sum_{x=0}^{5}\binom{25}{x}(0.35)^x(0.65)^{25-x} \approx 0.0334$$

$$P(X \ge 15) = 1 - P(X \le 14) \approx 1 - 0.9752 = 0.0248$$

**If you get this wrong, revise:** Binomial Distribution section.

</details>

### Problem 3

A bookshop sells an average of 3.2 rare books per week. $X \sim \mathrm{Po}(3.2)$ is the number sold
in a week. Find $P(X = 4)$, $P(X = 0)$, and $P(X \gt 5)$.

<details>
<summary>Solution</summary>

$$P(X = 4) = \frac{e^{-3.2} \cdot 3.2^4}{4!} = \frac{104.858 \times e^{-3.2}}{24} \approx 0.1781$$

$$P(X = 0) = e^{-3.2} \approx 0.0408$$

$$P(X \gt 5) = 1 - P(X \le 5) = 1 - e^{-3.2}\!\left(1 + 3.2 + \frac{10.24}{2} + \frac{32.768}{6} + \frac{104.858}{24} + \frac{335.544}{120}\right)$$

$$= 1 - e^{-3.2}(1 + 3.2 + 5.12 + 5.461 + 4.369 + 2.796) = 1 - e^{-3.2}(21.946) \approx 1 - 0.8955 = 0.1045$$

**If you get this wrong, revise:** Poisson Distribution section.

</details>

### Problem 4

Exam scores follow $N(65, 64)$ (mean 65, variance 64). Find the probability that a randomly chosen
student scores above 75, and the score that is exceeded by only 10% of students.

<details>
<summary>Solution</summary>

$\mu = 65$, $\sigma = \sqrt{64} = 8$.

$$P(X \gt 75) = P\!\left(Z \gt \frac{75 - 65}{8}\right) = P(Z \gt 1.25) = 1 - \Phi(1.25) \approx 1 - 0.8944 = 0.1056$$

For the 90th percentile (exceeded by only 10%):

$$P(X \le x) = 0.90 \implies \frac{x - 65}{8} = 1.282 \implies x = 65 + 1.282(8) = 75.26$$

A score of approximately 75.3 is exceeded by only 10% of students.

**If you get this wrong, revise:** Normal Distribution section.

</details>

### Problem 5

The waiting time for a train is uniformly distributed between 0 and 12 minutes. Find the probability
that the waiting time is (a) less than 5 minutes, (b) between 7 and 10 minutes, (c) more than 8
minutes given that it has already been 3 minutes.

<details>
<summary>Solution</summary>

$X \sim U(0, 12)$.

**(a)** $P(X \lt 5) = 5/12 \approx 0.4167$

**(b)** $P(7 \lt X \lt 10) = (10 - 7)/12 = 3/12 = 0.25$

**(c)** Given 3 minutes already waited, the remaining time is $U(0, 9)$ (memoryless property of the
uniform distribution):

$P(\mathrm{remaining} \gt 5) = 4/9 \approx 0.4444$

Alternatively: $P(X \gt 8 \mid X \gt 3) = P(X \gt 8)/P(X \gt 3) = (4/12)/(9/12) = 4/9$.

**If you get this wrong, revise:** Continuous Uniform Distribution section.

</details>

### Problem 6

$X \sim \mathrm{Geo}(0.25)$. Find the smallest $n$ such that $P(X \le n) \ge 0.95$.

<details>
<summary>Solution</summary>

$$P(X \le n) = 1 - (1 - p)^n = 1 - 0.75^n \ge 0.95$$

$$0.75^n \le 0.05$$

$$n \ln(0.75) \le \ln(0.05)$$

$$n \ge \frac{\ln(0.05)}{\ln(0.75)} = \frac{-2.996}{-0.288} = 10.40$$

So $n = 11$ trials are needed.

**If you get this wrong, revise:** Geometric Distribution section.

</details>

### Problem 7

$X \sim \mathrm{NB}(3, 0.2)$. Find $P(X = 8)$ and $\mathrm{Var}(X)$.

<details>
<summary>Solution</summary>

$$P(X = 8) = \binom{7}{2}(0.2)^3(0.8)^5 = 21 \times 0.008 \times 0.32768 = 0.05505$$

$$E(X) = \frac{3}{0.2} = 15$$

$$\mathrm{Var}(X) = \frac{3(0.8)}{0.04} = \frac{2.4}{0.04} = 60$$

$$\sigma = \sqrt{60} \approx 7.75$$

**If you get this wrong, revise:** Negative Binomial Distribution section.

</details>

### Problem 8

The masses of packets of sugar are normally distributed with mean $500\,\mathrm{g}$ and standard
deviation $5\,\mathrm{g}$. A sample of 36 packets is selected. Find the probability that the sample
mean is between $498\,\mathrm{g}$ and $503\,\mathrm{g}$.

<details>
<summary>Solution</summary>

By the CLT:

$$\bar{X} \sim N\!\left(500, \frac{25}{36}\right)$$

$$\sigma_{\bar{X}} = \frac{5}{6} \approx 0.833$$

$$P(498 \lt \bar{X} \lt 503) = P\!\left(\frac{498 - 500}{5/6} \lt Z \lt \frac{503 - 500}{5/6}\right) = P(-2.4 \lt Z \lt 3.6)$$

$$= \Phi(3.6) - \Phi(-2.4) = 0.9998 - 0.0082 = 0.9916$$

**If you get this wrong, revise:** Central Limit Theorem section.

</details>

### Problem 9

A 95% confidence interval for the mean diameter of bolts is $(10.02\,\mathrm{mm}, 10.18\,\mathrm{mm})$
based on a sample of size 50. The population standard deviation is known to be
$\sigma = 0.4\,\mathrm{mm}$. Find the sample mean and verify the confidence interval.

<details>
<summary>Solution</summary>

The sample mean is the midpoint of the interval:

$$\bar{x} = \frac{10.02 + 10.18}{2} = 10.10\,\mathrm{mm}$$

The margin of error is half the width:

$$E = \frac{10.18 - 10.02}{2} = 0.08\,\mathrm{mm}$$

Verify: $E = z_{\alpha/2} \cdot \frac{\sigma}{\sqrt{n}} = 1.960 \times \frac{0.4}{\sqrt{50}} = 1.960 \times 0.0566 = 0.1109$

The calculated margin of error ($0.1109$) exceeds the stated margin ($0.08$). This suggests the
confidence interval was constructed with a different confidence level or the stated $\sigma$ does
not match the data. If we solve for the confidence level that gives $E = 0.08$:

$$z_{\alpha/2} = \frac{0.08}{0.4/\sqrt{50}} = \frac{0.08}{0.0566} = 1.413$$

This corresponds to approximately 84% confidence, not 95%.

**If you get this wrong, revise:** Confidence Intervals section.

</details>

### Problem 10

$X \sim B(15, 0.4)$ and $Y \sim B(20, 0.3)$ are independent. Find $E(X + Y)$,
$\mathrm{Var}(X - Y)$, and $P(X + Y = 10)$.

<details>
<summary>Solution</summary>

$$E(X) = 15(0.4) = 6, \quad E(Y) = 20(0.3) = 6$$

$$E(X + Y) = 6 + 6 = 12$$

$$\mathrm{Var}(X) = 15(0.4)(0.6) = 3.6, \quad \mathrm{Var}(Y) = 20(0.3)(0.7) = 4.2$$

$$\mathrm{Var}(X - Y) = 3.6 + 4.2 = 7.8$$

For $P(X + Y = 10)$, enumerate pairs $(x, y)$ where $x + y = 10$, $0 \le x \le 15$, $0 \le y \le 20$:

This requires summing over $x = 0$ to $x = 10$:

$$P(X + Y = 10) = \sum_{x=0}^{10} P(X = x)P(Y = 10 - x)$$

This is computationally intensive without a GDC, but the key principle is clear: since $X$ and $Y$ are
independent binomial variables with the same success probability ($p = 0.3$ and $p = 0.4$ differ,
so the sum is **not** binomial), the distribution of $X + Y$ must be found by convolution.

**If you get this wrong, revise:** Combining Random Variables section.

</details>

### Problem 11

The lifetimes of batteries are normally distributed with mean $500\,\mathrm{hours}$ and standard
deviation $50\,\mathrm{hours}$. Find the probability that a randomly selected battery lasts more than
$550\,\mathrm{hours}$. If four batteries are selected independently, find the probability that at
least three last more than $550\,\mathrm{hours}$.

<details>
<summary>Solution</summary>

$$P(X \gt 550) = P\!\left(Z \gt \frac{550 - 500}{50}\right) = P(Z \gt 1) = 1 - 0.8413 = 0.1587$$

Let $Y$ be the number (out of 4) lasting more than 550 hours. $Y \sim B(4, 0.1587)$.

$$P(Y \ge 3) = P(Y = 3) + P(Y = 4)$$

$$= \binom{4}{3}(0.1587)^3(0.8413) + (0.1587)^4$$

$$= 4(0.003997)(0.8413) + 0.000635 = 0.01345 + 0.000635 = 0.01409$$

Approximately 1.4% chance that at least three out of four batteries last more than 550 hours.

**If you get this wrong, revise:** Normal Distribution and Binomial Distribution sections.

</details>

### Problem 12

Use the Poisson approximation to the binomial to estimate the probability of getting 3 or more
sixes when rolling a fair die 60 times.

<details>
<summary>Solution</summary>

$X \sim B(60, 1/6)$. $\lambda = np = 60/6 = 10$.

Approximate: $X \approx \mathrm{Po}(10)$.

Check conditions: $n = 60 \ge 50$, $p = 1/6 \le 0.1$? No, $p = 0.167 \gt 0.1$. The Poisson
approximation is less accurate here but still usable as an estimate.

$$P(X \ge 3) = 1 - P(X \le 2) = 1 - e^{-10}\!\left(1 + 10 + \frac{100}{2}\right)$$

$$= 1 - 61e^{-10} = 1 - 61(0.0000454) = 1 - 0.00277 = 0.9972$$

Exact binomial: $P(X \le 2) = \binom{60}{0}(5/6)^{60} + \binom{60}{1}(1/6)(5/6)^{59} + \binom{60}{2}(1/6)^2(5/6)^{58}$

This gives approximately $P(X \le 2) \approx 0.00268$, so $P(X \ge 3) \approx 0.9973$. The
approximation is quite close despite $p \gt 0.1$ because $\lambda = 10$ is moderate.

**If you get this wrong, revise:** Poisson as a Limit of the Binomial section.

</details>
