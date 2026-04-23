---
title: Probability and Statistics
date: 2026-04-23T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: probability-and-statistics
---

## 1. Probability Spaces

### 1.1 Sample Spaces and Events

A **probability space** is a triple $(\Omega, \mathcal{F}, P)$ where:

- $\Omega$ is the **sample space** (set of all possible outcomes).
- $\mathcal{F}$ is a **sigma-algebra** (collection of events) on $\Omega$.
- $P : \mathcal{F} \to [0,1]$ is a **probability measure**.

### 1.2 Axioms of Probability (Kolmogorov)

1. **Non-negativity**: $P(A) \geq 0$ for all $A \in \mathcal{F}$.
2. **Normalisation**: $P(\Omega) = 1$.
3. **Countable additivity**: If $A_1, A_2, \ldots$ are pairwise disjoint events, then

$$P\left(\bigcup_{i=1}^{\infty} A_i\right) = \sum_{i=1}^{\infty} P(A_i)$$

### 1.3 Basic Properties

**Proposition 1.1.** $P(\emptyset) = 0$.

*Proof.* $\Omega = \Omega \cup \emptyset$ (disjoint union), so $P(\Omega) = P(\Omega) + P(\emptyset)$,
hence $P(\emptyset) = 0$. $\blacksquare$

**Proposition 1.2 (Complement).** $P(A^c) = 1 - P(A)$.

**Proposition 1.3 (Monotonicity).** If $A \subseteq B$, then $P(A) \leq P(B)$.

**Proposition 1.4 (Inclusion-Exclusion).** For any two events $A, B$:

$$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$

**Proposition 1.5 (Boole's Inequality).** $P(A \cup B) \leq P(A) + P(B)$. More generally,

$$P\left(\bigcup_{i=1}^n A_i\right) \leq \sum_{i=1}^n P(A_i)$$

### 1.4 Conditional Probability

**Definition.** The **conditional probability** of $A$ given $B$ (where $P(B) > 0$) is

$$P(A \mid B) = \frac{P(A \cap B)}{P(B)}$$

**Theorem 1.1 (Law of Total Probability).** If $B_1, \ldots, B_n$ partition $\Omega$ with $P(B_i) > 0$:

$$P(A) = \sum_{i=1}^n P(A \mid B_i) P(B_i)$$

**Theorem 1.2 (Bayes' Theorem).** For events $A$ and $B$ with $P(B) > 0$:

$$P(A \mid B) = \frac{P(B \mid A) P(A)}{P(B)}$$

In the partition form:

$$P(B_j \mid A) = \frac{P(A \mid B_j) P(B_j)}{\sum_{i=1}^n P(A \mid B_i) P(B_i)}$$

## 2. Random Variables

### 2.1 Definition

A **random variable** is a measurable function $X : \Omega \to \mathbb{R}$.

- **Discrete random variable**: takes values in a countable set.
- **Continuous random variable**: has a probability density function (PDF).

### 2.2 Cumulative Distribution Function

The **CDF** of a random variable $X$ is

$$F_X(x) = P(X \leq x)$$

**Properties:**
1. $\lim_{x \to -\infty} F(x) = 0$, $\lim_{x \to +\infty} F(x) = 1$.
2. $F$ is non-decreasing and right-continuous.
3. $P(a < X \leq b) = F(b) - F(a)$.

### 2.3 Probability Mass Function (Discrete)

For a discrete random variable $X$ with values $\{x_1, x_2, \ldots\}$:

$$f_X(x) = P(X = x) = \begin{cases} p_i & \mathrm{if } x = x_i \\ 0 & \mathrm{otherwise} \end{cases}$$

### 2.4 Probability Density Function (Continuous)

A random variable $X$ is continuous if there exists a function $f_X \geq 0$ such that

$$P(a \leq X \leq b) = \int_a^b f_X(x)\, dx$$

and $\int_{-\infty}^{\infty} f_X(x)\, dx = 1$.

Note: $f_X(x)$ is not a probability; it is a probability density. For continuous $X$, $P(X = x) = 0$
for any individual $x$.

## 3. Common Distributions

### 3.1 Discrete Distributions

**Bernoulli.** $X \sim \mathrm{Bernoulli}(p)$: $P(X = 1) = p$, $P(X = 0) = 1 - p$.

$$E[X] = p, \quad \mathrm{Var}(X) = p(1 - p)$$

**Binomial.** $X \sim \mathrm{Bin}(n, p)$: number of successes in $n$ independent Bernoulli trials.

$$P(X = k) = \binom{n}{k} p^k (1-p)^{n-k}, \quad k = 0, 1, \ldots, n$$

$$E[X] = np, \quad \mathrm{Var}(X) = np(1-p)$$

**Poisson.** $X \sim \mathrm{Poisson}(\lambda)$: models rare events occurring at rate $\lambda$.

$$P(X = k) = \frac{e^{-\lambda} \lambda^k}{k!}, \quad k = 0, 1, 2, \ldots$$

$$E[X] = \lambda, \quad \mathrm{Var}(X) = \lambda$$

*Proof that $E[X] = \lambda$:*

$$E[X] = \sum_{k=0}^{\infty} k \frac{e^{-\lambda} \lambda^k}{k!} = e^{-\lambda} \sum_{k=1}^{\infty} \frac{\lambda^k}{(k-1)!} = e^{-\lambda} \lambda \sum_{k=0}^{\infty} \frac{\lambda^k}{k!} = \lambda$$

$\blacksquare$

### 3.2 Continuous Distributions

**Uniform.** $X \sim \mathrm{Uniform}(a, b)$:

$$f(x) = \begin{cases} \frac{1}{b - a} & \mathrm{if } a \leq x \leq b \\ 0 & \mathrm{otherwise} \end{cases}$$

$$E[X] = \frac{a + b}{2}, \quad \mathrm{Var}(X) = \frac{(b-a)^2}{12}$$

**Exponential.** $X \sim \mathrm{Exp}(\lambda)$:

$$f(x) = \begin{cases} \lambda e^{-\lambda x} & \mathrm{if } x \geq 0 \\ 0 & \mathrm{if } x < 0 \end{cases}$$

$$E[X] = \frac{1}{\lambda}, \quad \mathrm{Var}(X) = \frac{1}{\lambda^2}$$

**Normal (Gaussian).** $X \sim N(\mu, \sigma^2)$:

$$f(x) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(x - \mu)^2}{2\sigma^2}\right), \quad x \in \mathbb{R}$$

$$E[X] = \mu, \quad \mathrm{Var}(X) = \sigma^2$$

The **standard normal** $Z \sim N(0,1)$ has CDF denoted $\Phi(z)$. For any $X \sim N(\mu, \sigma^2)$:

$$Z = \frac{X - \mu}{\sigma} \sim N(0, 1)$$

**Theorem 3.1.** The sum of independent normal random variables is normal:
if $X_i \sim N(\mu_i, \sigma_i^2)$ are independent, then
$\sum X_i \sim N(\sum \mu_i, \sum \sigma_i^2)$.

## 4. Expectation, Variance, and Moment Generating Functions

### 4.1 Expectation

**Definition.** The **expected value** of $X$ is

$$E[X] = \begin{cases} \sum_x x\, f_X(x) & \mathrm{(discrete)} \\ \int_{-\infty}^{\infty} x\, f_X(x)\, dx & \mathrm{(continuous)} \end{cases}$$

**Proposition 4.1 (LOTUS).** For any function $g$:

$$E[g(X)] = \begin{cases} \sum_x g(x)\, f_X(x) & \mathrm{(discrete)} \\ \int_{-\infty}^{\infty} g(x)\, f_X(x)\, dx & \mathrm{(continuous)} \end{cases}$$

**Theorem 4.1 (Properties of Expectation).**

1. $E[aX + b] = aE[X] + b$ (linearity).
2. $E[X + Y] = E[X] + E[Y]$ (always, even without independence).
3. If $X$ and $Y$ are independent, $E[XY] = E[X]E[Y]$.

### 4.2 Variance

$$\mathrm{Var}(X) = E[(X - E[X])^2] = E[X^2] - (E[X])^2$$

**Theorem 4.2.**

1. $\mathrm{Var}(aX + b) = a^2 \mathrm{Var}(X)$.
2. If $X, Y$ are independent: $\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$.

### 4.3 Moment Generating Functions

The **moment generating function** (MGF) of $X$ is

$$M_X(t) = E[e^{tX}]$$

(provided the expectation exists in a neighbourhood of $t = 0$).

**Theorem 4.3.** If $M_X(t)$ exists in a neighbourhood of $0$, then $E[X^n] = M_X^{(n)}(0)$.

**Theorem 4.4 (Uniqueness).** If $M_X(t) = M_Y(t)$ for all $t$ in a neighbourhood of $0$, then $X$
and $Y$ have the same distribution.

**Theorem 4.5.** If $X$ and $Y$ are independent, $M_{X+Y}(t) = M_X(t) M_Y(t)$.

**Worked Example.** Find the MGF of $X \sim \mathrm{Exp}(\lambda)$.

$$M_X(t) = E[e^{tX}] = \int_0^{\infty} e^{tx} \lambda e^{-\lambda x}\, dx = \lambda \int_0^{\infty} e^{-(\lambda - t)x}\, dx$$

For $t < \lambda$: $M_X(t) = \frac{\lambda}{\lambda - t}$.

$M_X'(t) = \frac{\lambda}{(\lambda - t)^2}$, so $E[X] = M_X'(0) = 1/\lambda$. $\blacksquare$

## 5. Joint Distributions

### 5.1 Joint PDF and CDF

For two random variables $X$ and $Y$, the **joint CDF** is $F_{X,Y}(x,y) = P(X \leq x, Y \leq y)$.

The **joint PDF** (for continuous) satisfies $P((X,Y) \in A) = \iint_A f_{X,Y}(x,y)\, dx\, dy$.

### 5.2 Marginal Distributions

The **marginal PDF** of $X$ is obtained by integrating out $Y$:

$$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x,y)\, dy$$

### 5.3 Independence

$X$ and $Y$ are **independent** if and only if

$$f_{X,Y}(x,y) = f_X(x) f_Y(y) \quad \mathrm{for all } x, y$$

**Theorem 5.1.** If $X$ and $Y$ are independent, then $E[XY] = E[X]E[Y]$ and
$\mathrm{Var}(X + Y) = \mathrm{Var}(X) + \mathrm{Var}(Y)$.

### 5.4 Covariance and Correlation

$$\mathrm{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$$

The **correlation coefficient** is

$$\rho_{X,Y} = \frac{\mathrm{Cov}(X,Y)}{\sqrt{\mathrm{Var}(X)\mathrm{Var}(Y)}}$$

**Properties:**
- $-1 \leq \rho_{X,Y} \leq 1$.
- $\rho = \pm 1$ if and only if $X$ and $Y$ are linearly related.
- $\rho = 0$ does not imply independence (only uncorrelatedness).

## 6. Limit Theorems

### 6.1 Law of Large Numbers

**Theorem 6.1 (Weak Law of Large Numbers).** Let $X_1, X_2, \ldots$ be i.i.d. with $E[X_i] = \mu$ and
$\mathrm{Var}(X_i) = \sigma^2 < \infty$. Then for every $\varepsilon > 0$:

$$\lim_{n \to \infty} P\left(\left|\frac{1}{n}\sum_{i=1}^n X_i - \mu\right| > \varepsilon\right) = 0$$

*Proof.* Let $\bar{X}_n = \frac{1}{n}\sum_{i=1}^n X_i$. Then $E[\bar{X}_n] = \mu$ and
$\mathrm{Var}(\bar{X}_n) = \sigma^2/n$. By Chebyshev's inequality:

$$P(|\bar{X}_n - \mu| > \varepsilon) \leq \frac{\mathrm{Var}(\bar{X}_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \to 0$$

$\blacksquare$

**Theorem 6.2 (Strong Law of Large Numbers).** Under the same hypotheses:

$$P\left(\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^n X_i = \mu\right) = 1$$

### 6.2 Central Limit Theorem

**Theorem 6.3 (Central Limit Theorem).** Let $X_1, X_2, \ldots$ be i.i.d. with $E[X_i] = \mu$ and
$\mathrm{Var}(X_i) = \sigma^2 > 0$. Then

$$\frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} \xrightarrow{d} N(0, 1)$$

That is, for all $a < b$:

$$\lim_{n \to \infty} P\left(a < \frac{\bar{X}_n - \mu}{\sigma / \sqrt{n}} < b\right) = \Phi(b) - \Phi(a)$$

### 6.3 Worked Example

**Problem.** A factory produces light bulbs with mean lifetime 1000 hours and standard deviation 200
hours. What is the probability that the mean lifetime of 100 bulbs exceeds 1040 hours?

*Solution.* By the CLT, $\bar{X}_{100} \approx N(1000, 200^2/100) = N(1000, 400)$.

$$P(\bar{X} > 1040) = P\left(Z > \frac{1040 - 1000}{20}\right) = P(Z > 2) \approx 0.0228$$

$\blacksquare$

## 7. Maximum Likelihood Estimation

### 7.1 Likelihood Function

Given i.i.d. observations $x_1, \ldots, x_n$ from a distribution with parameter $\theta$, the
**likelihood function** is

$$L(\theta) = \prod_{i=1}^n f(x_i \mid \theta)$$

and the **log-likelihood** is

$$\ell(\theta) = \log L(\theta) = \sum_{i=1}^n \log f(x_i \mid \theta)$$

### 7.2 MLE Procedure

The **maximum likelihood estimator** (MLE) $\hat{\theta}_{\mathrm{MLE}}$ maximises $L(\theta)$ (equivalently,
$\ell(\theta)$):

$$\hat{\theta}_{\mathrm{MLE}} = \arg\max_\theta L(\theta)$$

Typically found by solving $\ell'(\theta) = 0$ and verifying $\ell''(\hat{\theta}) < 0$.

### 7.3 Worked Example

**Problem.** Find the MLE for $\lambda$ given i.i.d. observations $x_1, \ldots, x_n$ from
$\mathrm{Exp}(\lambda)$.

*Solution.*

$$L(\lambda) = \prod_{i=1}^n \lambda e^{-\lambda x_i} = \lambda^n e^{-\lambda \sum x_i}$$

$$\ell(\lambda) = n \log \lambda - \lambda \sum_{i=1}^n x_i$$

$$\frac{d\ell}{d\lambda} = \frac{n}{\lambda} - \sum_{i=1}^n x_i = 0 \implies \hat{\lambda} = \frac{n}{\sum x_i} = \frac{1}{\bar{x}}$$

Verify: $\frac{d^2\ell}{d\lambda^2} = -\frac{n}{\lambda^2} < 0$, confirming this is a maximum. $\blacksquare$

:::caution Common Pitfall
The MLE is not always unbiased. For example, the MLE $\hat{\sigma}^2 = \frac{1}{n}\sum (X_i - \bar{X})^2$
for the normal variance is biased; the unbiased estimator uses $n - 1$ in the denominator.
:::

## 8. Hypothesis Testing

### 8.1 Framework

A **hypothesis test** evaluates two competing statements:

- **Null hypothesis** $H_0$: the status quo (e.g., $\mu = \mu_0$).
- **Alternative hypothesis** $H_1$: what we want to show (e.g., $\mu > \mu_0$).

### 8.2 Test Statistics and Decisions

A **test statistic** $T$ is a function of the data. We reject $H_0$ if $T$ falls in the **rejection
region** (critical region).

**Type I error**: rejecting $H_0$ when it is true (false positive). Probability = $\alpha$ (significance
level).

**Type II error**: failing to reject $H_0$ when it is false (false negative). Probability = $\beta$.

The **power** of a test is $1 - \beta = P(\mathrm{reject } H_0 \mid H_1 \mathrm{ is true})$.

### 8.3 p-Values

The **p-value** is the probability of observing a test statistic at least as extreme as the one
computed, assuming $H_0$ is true. We reject $H_0$ if the p-value is less than $\alpha$.

### 8.4 Z-Test for a Mean

If $X_1, \ldots, X_n \sim N(\mu, \sigma^2)$ with known $\sigma$, to test $H_0: \mu = \mu_0$:

$$Z = \frac{\bar{X} - \mu_0}{\sigma / \sqrt{n}}$$

Under $H_0$, $Z \sim N(0, 1)$.

- For $H_1: \mu > \mu_0$: reject if $Z > z_\alpha$.
- For $H_1: \mu < \mu_0$: reject if $Z < -z_\alpha$.
- For $H_1: \mu \neq \mu_0$: reject if $|Z| > z_{\alpha/2}$.

### 8.5 t-Test for a Mean (Unknown Variance)

If $\sigma$ is unknown, replace $\sigma$ with the sample standard deviation $S$:

$$T = \frac{\bar{X} - \mu_0}{S / \sqrt{n}}$$

Under $H_0$, $T \sim t_{n-1}$ (Student's t-distribution with $n - 1$ degrees of freedom).

### 8.6 Worked Example

**Problem.** A process produces bolts with mean diameter 10mm. A sample of 25 bolts has mean 10.12mm
and standard deviation 0.3mm. Test $H_0: \mu = 10$ vs $H_1: \mu \neq 10$ at $\alpha = 0.05$.

*Solution.* Use the t-test: $T = \frac{10.12 - 10}{0.3/\sqrt{25}} = \frac{0.12}{0.06} = 2$.

Under $H_0$, $T \sim t_{24}$. The critical values are $t_{24, 0.025} \approx 2.064$.

Since $|T| = 2 < 2.064$, we fail to reject $H_0$ at the 5% significance level. There is insufficient
evidence to conclude the mean diameter differs from 10mm. $\blacksquare$

:::caution Common Pitfall
"Failing to reject $H_0$" is not the same as "accepting $H_0$". The test only provides evidence against
$H_0$; absence of evidence is not evidence of absence. The distinction is critical in scientific
reasoning.
:::
