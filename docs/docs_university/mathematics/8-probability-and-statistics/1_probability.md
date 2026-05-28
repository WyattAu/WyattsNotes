---
title: Probability Theory
description:
  'University-level notes on Probability Theory: 1. Probability Spaces; 1.1 Sample Spaces and
  Events; 1.2 Probability Measures; 1.3 Conditional Probability and Ind'
date: 2026-04-26T00:00:00.000Z
tags:
  - Mathematics
  - University
categories:
  - Mathematics
slug: probability
---

## 1. Probability Spaces

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

## 2. Random Variables

### 2.1 Definition and Distribution Functions

**Definition.** A **random variable** is a measurable function $X : \Omega \to \mathbb{R}$. The
**cumulative distribution function (CDF)** of $X$ is

$$F_X(x) = P(X \leq x)$$

**Proposition 2.1 (Properties of the CDF).**

1. $F$ is non-decreasing: if $a \leq b$Then $F(a) \leq F(b)$.
2. $\lim_{x \to -\infty} F(x) = 0$ and $\lim_{x \to +\infty} F(x) = 1$.
3. $F$ is right-continuous: $\lim_{x \to a^+} F(x) = F(a)$.

_Proof._ (1) If $a \leq b$Then $\{X \leq a\} \subseteq \{X \leq b\}$So
$F(a) = P(X \leq a) \leq P(X \leq b) = F(b)$ by Proposition 1.1(3).

(2) As $x \to -\infty$The events $\{X \leq x\}$ decrease to $\emptyset$So by continuity from above
of probability measures, $F(x) \to 0$. As $x \to +\infty$The events increase to $\Omega$So
$F(x) \to 1$.

(3) As $x \to a^+$The events $\{X \leq x\}$ decrease to $\{X \leq a\}$Giving right-continuity.
$\blacksquare$

### 2.2 Discrete Random Variables

A random variable is **discrete** if its range is countable. The **probability mass function (PMF)**
is $p_X(x) = P(X = x)$.

**Definition (Expected Value).** For a discrete random variable:

$$E[X] = \sum_{x} x\, p_X(x)$$

Provided the sum converges absolutely.

**Definition (Variance).** $\mathrm{Var}(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$ where $\mu = E[X]$.

**Proposition 2.2 (Linearity of Expectation).** $E[aX + bY] = aE[X] + bE[Y]$ for any random
variables $X$$Y$ and constants $a$$b$.

_Proof._ Direct computation from the definition of expected value. For the discrete case:

$$E[aX + bY] = \sum_{x,y} (ax + by)\, p_{X,Y}(x,y) = a\sum_x x\, p_X(x) + b\sum_y y\, p_Y(y) = aE[X] + bE[Y]$$

$\blacksquare$

### 2.3 Continuous Random Variables

A random variable is **continuous** if its CDF is absolutely continuous, i.e., there exists a
**probability density function (PDF)** $f_X$ such that

$$F_X(x) = \int_{-\infty}^{x} f_X(t)\, dt$$

**Key properties:**

1. $f_X(x) \geq 0$ for all $x$.
2. $\int_{-\infty}^{\infty} f_X(x)\, dx = 1$.
3. $P(a \leq X \leq b) = \int_a^b f_X(x)\, dx$.
4. $P(X = a) = 0$ for any single point $a$.

### 2.4 Common Distributions

**Discrete distributions:**

| Distribution       | PMF                             | $E[X]$    | $\mathrm{Var}(X)$ |
| ------------------ | ------------------------------- | --------- | ---------------- |
| Bernoulli$(p)$     | $p^x(1-p)^{1-x}$, $x \in \{0,1\}$ | $p$       | $p(1-p)$         |
| Binomial$(n,p)$    | $\binom{n}{x}p^x(1-p)^{n-x}$    | $np$      | $np(1-p)$        |
| Poisson$(\lambda)$ | $e^{-\lambda}\lambda^x / x!$    | $\lambda$ | $\lambda$        |
| Geometric$(p)$     | $(1-p)^{x-1}p$, $x \geq 1$        | $1/p$     | $(1-p)/p^2$      |

**Continuous distributions:**

| Distribution           | PDF                                                     | $E[X]$      | $\mathrm{Var}(X)$ |
| ---------------------- | ------------------------------------------------------- | ----------- | ---------------- |
| Uniform$(a,b)$         | $1/(b-a)$ on $[a,b]$                                    | $(a+b)/2$   | $(b-a)^2/12$     |
| Exponential$(\lambda)$ | $\lambda e^{-\lambda x}$, $x \geq 0$                      | $1/\lambda$ | $1/\lambda^2$    |
| $N(\mu, \sigma^2)$     | $\frac{1}{\sigma\sqrt{2\pi}}e^{-(x-\mu)^2/(2\sigma^2)}$ | $\mu$       | $\sigma^2$       |

### 2.5 The Normal Distribution

**Definition.** $X \sim N(\mu, \sigma^2)$ if $X$ has PDF
$f(x) = \frac{1}{\sigma\sqrt{2\pi}}\exp\left(-\frac{(x-\mu)^2}{2\sigma^2}\right)$.

**Theorem 2.3 (Standardisation).** If $X \sim N(\mu, \sigma^2)$Then
$Z = (X - \mu)/\sigma \sim N(0, 1)$.

_Proof._ The CDF of $Z$:
$P(Z \leq z) = P(X \leq \mu + \sigma z) = \int_{-\infty}^{\mu + \sigma z} \frac{1}{\sigma\sqrt{2\pi}} e^{-t^2/2}\, dt$.
Substituting $u = (t - \mu)/\sigma$:
$= \int_{-\infty}^{z} \frac{1}{\sqrt{2\pi}} e^{-u^2/2}\, du$Which is the CDF of $N(0, 1)$.
$\blacksquare$

**Theorem 2.4 (Moment Generating Function).** If $X \sim N(\mu, \sigma^2)$Then

$$M_X(t) = E[e^{tX}] = \exp\left(\mu t + \frac{\sigma^2 t^2}{2}\right)$$

_Proof._
$M_X(t) = \int_{-\infty}^{\infty} e^{tx} \frac{1}{\sigma\sqrt{2\pi}} e^{-(x-\mu)^2/(2\sigma^2)}\, dx$.
Completing the square in the exponent and evaluating the Gaussian integral gives the result.
$\blacksquare$

### 2.6 Moment Generating Functions

**Definition.** The **moment generating function (MGF)** of $X$ is $M_X(t) = E[e^{tX}]$ (when it
exists in a neighbourhood of $t = 0$).

**Theorem 2.5.** If the MGF exists in a neighbourhood of 0, it uniquely determines the distribution.
Furthermore, $E[X^n] = M_X^{(n)}(0)$.

### 2.7 Worked Examples

**Problem.** Let $X \sim \mathrm{Poisson}(3)$ and $Y \sim \mathrm{Poisson}(5)$ be independent. Find
the distribution of $X + Y$.

<details>
<summary>Solution</summary>

The MGF of $X \sim \mathrm{Poisson}(\lambda)$ is $M_X(t) = e^{\lambda(e^t - 1)}$.

$M_{X+Y}(t) = M_X(t) \cdot M_Y(t) = e^{3(e^t - 1)} \cdot e^{5(e^t - 1)} = e^{8(e^t - 1)}$.

This is the MGF of $\mathrm{Poisson}(8)$. Since the MGF uniquely determines the distribution,
$X + Y \sim \mathrm{Poisson}(8)$.

$\blacksquare$

</details>

<details>
<summary>Worked Example: Minimum of Exponential Random Variables</summary>

_Solution._ Let $X_1, \ldots, X_n$ be independent with $X_i \sim \mathrm{Exp}(\lambda_i)$. Find the
distribution of $M = \min(X_1, \ldots, X_n)$.

$P(M > t) = P(X_1 > t, \ldots, X_n > t) = \prod_{i=1}^{n} P(X_i > t) = \prod_{i=1}^{n} e^{-\lambda_i t} = e^{-(\lambda_1 + \cdots + \lambda_n)t}$

So $P(M \leq t) = 1 - e^{-\lambda t}$ where $\lambda = \sum_{i=1}^{n} \lambda_i$. This means
$M \sim \mathrm{Exp}(\lambda)$. $\blacksquare$

</details>

## 3. Joint Distributions and Independence

### 3.1 Joint Distribution Functions

**Definition.** The **joint CDF** of $(X, Y)$ is $F_{X,Y}(x, y) = P(X \leq x, Y \leq y)$.

**Definition.** The **joint PDF** (for continuous random variables) is $f_{X,Y}(x, y) \geq 0$ such
that

$$F_{X,Y}(x, y) = \int_{-\infty}^{x}\int_{-\infty}^{y} f_{X,Y}(u, v)\, du\, dv$$

**Definition.** The **marginal PDF** of $X$ is
$f_X(x) = \int_{-\infty}^{\infty} f_{X,Y}(x, y)\, dy$.

### 3.2 Covariance and Correlation

**Definition.** The **covariance** of $X$ and $Y$ is

$$\mathrm{Cov}(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$$

**Proposition 2.6.** $\mathrm{Cov}(X, Y) = \mathrm{Cov}(Y, X)$ and
$\mathrm{Cov}(aX + b, cY + d) = ac\,\mathrm{Cov}(X, Y)$.

**Definition.** The **correlation coefficient** is

$$\rho(X, Y) = \frac{\mathrm{Cov}(X, Y)}{\sqrt{\mathrm{Var}(X)\,\mathrm{Var}(Y)}}$$

**Theorem 2.7 (Cauchy--Schwarz for Random Variables).** $|\rho(X, Y)| \leq 1$With equality if and
only if $Y = aX + b$ almost surely for some $a, b$.

### 3.3 Independence of Random Variables

**Definition.** $X$ and $Y$ are **independent** if $F_{X,Y}(x, y) = F_X(x)\, F_Y(y)$ for all $x, y$.

For continuous random variables, this is equivalent to $f_{X,Y}(x, y) = f_X(x)\, f_Y(y)$.

**Proposition 2.8.** If $X$ and $Y$ are independent, then $\mathrm{Cov}(X, Y) = 0$. The converse is
false.

<details>
<summary>Worked Example: Uncorrelated but Dependent</summary>

_Solution._ Let $X \sim N(0, 1)$ and $Y = X^2$. Then
$\mathrm{Cov}(X, Y) = E[X^3] - E[X]E[X^2] = 0 - 0 \cdot 1 = 0$ (since the third moment of a standard
normal is 0).

But $Y$ is completely determined by $X$So they are not independent. $\blacksquare$

</details>

## 4. Limit Theorems

### 4.1 The Law of Large Numbers

**Theorem 4.1 (Weak Law of Large Numbers).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$
and $\mathrm{Var}(X_i) = \sigma^2 < \infty$. Then for every $\varepsilon > 0$:

$$\lim_{n \to \infty} P\left(\left|\frac{1}{n}\sum_{i=1}^{n} X_i - \mu\right| \geq \varepsilon\right) = 0$$

_Proof._ Let $S_n = \frac{1}{n}\sum_{i=1}^{n} X_i$. Then $E[S_n] = \mu$ and
$\mathrm{Var}(S_n) = \sigma^2/n$. By Chebyshev's inequality:

$$P(|S_n - \mu| \geq \varepsilon) \leq \frac{\mathrm{Var}(S_n)}{\varepsilon^2} = \frac{\sigma^2}{n\varepsilon^2} \to 0 \quad \mathrm{as\ } n \to \infty$$

$\blacksquare$

**Theorem 4.2 (Strong Law of Large Numbers).** Under the same conditions:

$$P\left(\lim_{n \to \infty} \frac{1}{n}\sum_{i=1}^{n} X_i = \mu\right) = 1$$

The sample mean converges to the population mean almost surely.

### 4.2 The Central Limit Theorem

**Theorem 4.3 (Central Limit Theorem).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$ and
$\mathrm{Var}(X_i) = \sigma^2 \in (0, \infty)$. Then

$$\frac{S_n - n\mu}{\sigma\sqrt{n}} \xrightarrow{d} N(0, 1)$$

Where $S_n = \sum_{i=1}^{n} X_i$ and $\xrightarrow{d}$ denotes convergence in distribution.

Equivalently, for large $n$:

$$P\left(\frac{S_n - n\mu}{\sigma\sqrt{n}} \leq z\right) \approx \Phi(z)$$

Where $\Phi$ is the CDF of the standard normal.

_Proof (using characteristic functions)._ Let $\varphi_X(t) = E[e^{itX}]$ be the characteristic
function of $X_1$. The characteristic function of $(S_n - n\mu)/(\sigma\sqrt{n})$ is:

$$\varphi_n(t) = \left[\varphi_X\left(\frac{t}{\sigma\sqrt{n}}\right)\right]^n \cdot e^{-it\sqrt{n}\mu/\sigma}$$

Expanding $\varphi_X$ around 0:
$\varphi_X(s) = 1 + i\mu s - \frac{(\sigma^2 + \mu^2)s^2}{2} + o(s^2)$. Substituting
$s = t/(\sigma\sqrt{n})$:

$$\varphi_n(t) = \left[1 + \frac{i\mu t}{\sigma\sqrt{n}} - \frac{(\sigma^2 + \mu^2)t^2}{2\sigma^2 n} + o\left(\frac{1}{n}\right)\right]^n \cdot e^{-it\sqrt{n}\mu/\sigma}$$

Using $\lim_{n \to \infty}(1 + a_n/n)^n = e^{\lim a_n}$:

$$\lim_{n \to \infty} \varphi_n(t) = \exp\left(\frac{i\mu t}{\sigma} - \frac{(\sigma^2 + \mu^2)t^2}{2\sigma^2}\right) \cdot \exp\left(-\frac{i\mu t}{\sigma}\right) = e^{-t^2/2}$$

This is the characteristic function of $N(0, 1)$. By Levy's continuity theorem, the convergence in
distribution follows. $\blacksquare$

### 4.3 Worked Examples

**Problem.** A fair die is rolled 100 times. Approximate the probability that the sum exceeds 370.

<details>
<summary>Solution</summary>

Let $X_i$ be the value of the $i$-th roll. Then $E[X_i] = 7/2 = 3.5$ and
$\mathrm{Var}(X_i) = 35/12 \approx 2.917$.

$S_{100} = \sum_{i=1}^{100} X_i$. By the CLT:

$$\frac{S_{100} - 350}{\sqrt{100 \cdot 35/12}} \approx N(0, 1)$$

$$P(S_{100} > 370) = P\left(Z > \frac{370 - 350}{\sqrt{291.7}}\right) \approx P(Z > 1.17) \approx 0.121$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Sample Mean Distribution</summary>

_Solution._ A population has mean 50 and standard deviation 10. Find the probability that the mean
of a sample of 64 observations exceeds 52.

By the CLT, $\bar{X} \approx N(50, 100/64) = N(50, 1.5625)$.

$$P(\bar{X} > 52) = P\left(Z > \frac{52 - 50}{\sqrt{1.5625}}\right) = P(Z > 1.6) \approx 0.0548$$

$\blacksquare$

</details>

### 4.4 Common Pitfalls

- **The CLT does not apply to small samples.** The CLT is an asymptotic result. For small $n$ (
  $n < 30$), the normal approximation can be poor unless the underlying distribution is already
  close to normal. Use the Berry--Esseen theorem for finite-sample bounds.
- **Independence is critical for the LLN and CLT.** If the $X_i$ are dependent, the sample mean may
  not converge to the population mean, or the convergence rate may differ. For stationary sequences
  with weak dependence, versions of these theorems still hold, but the
  .../1-number-and-algebra/3_proof-and-logics are more involved.
- **Convergence in distribution is weaker than convergence in probability.** The CLT gives
  convergence in distribution of the standardised sum, not convergence of the sum itself. The LLN
  gives the latter (convergence in probability).

## 5. Transformations and Convolutions

### 5.1 Distribution of a Function of a Random Variable

**Theorem 5.1 (CDF Method).** If $Y = g(X)$ and $g$ is monotone, then

$$F_Y(y) = P(g(X) \leq y) = \begin{cases} F_X(g^{-1}(y)) & \text{if}  g \text{ is} increasing \\ 1 - F_X(g^{-1}(y)) & \text{if}  g \text{ is} decreasing \end{cases}$$

**Theorem 5.2 (Change of Variables).** If $Y = g(X)$ where $g$ is differentiable and strictly
monotone, then

$$f_Y(y) = f_X(g^{-1}(y)) \cdot \left|\frac{d}{dy} g^{-1}(y)\right|$$

<details>
<summary>Worked Example: Distribution of $X^2$ where $X \sim N(0, 1)$</summary>

_Solution._ Let $Y = X^2$ where $X \sim N(0, 1)$. For $y \geq 0$:

$$F_Y(y) = P(X^2 \leq y) = P(-\sqrt{y} \leq X \leq \sqrt{y}) = \Phi(\sqrt{y}) - \Phi(-\sqrt{y}) = 2\Phi(\sqrt{y}) - 1$$

$$f_Y(y) = \frac{d}{dy}[2\Phi(\sqrt{y}) - 1] = 2\phi(\sqrt{y}) \cdot \frac{1}{2\sqrt{y}} = \frac{1}{\sqrt{2\pi y}}\, e^{-y/2}$$

This is the PDF of the $\chi^2(1)$ distribution. $\blacksquare$

</details>

### 5.2 Convolution

**Theorem 5.3.** If $X$ and $Y$ are independent continuous random variables, the PDF of $Z = X + Y$
is

$$f_Z(z) = (f_X * f_Y)(z) = \int_{-\infty}^{\infty} f_X(x)\, f_Y(z - x)\, dx$$

_Proof._
$F_Z(z) = P(X + Y \leq z) = \iint_{x+y \leq z} f_{X,Y}(x, y)\, dx\, dy = \int_{-\infty}^{\infty} f_X(x)\left[\int_{-\infty}^{z-x} f_Y(y)\, dy\right] dx = \int_{-\infty}^{\infty} f_X(x)\, F_Y(z - x)\, dx$.

Differentiating: $f_Z(z) = \int_{-\infty}^{\infty} f_X(x)\, f_Y(z - x)\, dx$. $\blacksquare$

**Corollary 5.4.** The sum of independent normals is normal: if $X \sim N(\mu_1, \sigma_1^2)$ and
$Y \sim N(\mu_2, \sigma_2^2)$ are independent, then
$X + Y \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$.

_Proof._ The convolution of two Gaussian PDFs is Gaussian. This follows from the MGF:
$M_{X+Y}(t) = M_X(t)M_Y(t) = \exp((\mu_1 + \mu_2)t + (\sigma_1^2 + \sigma_2^2)t^2/2)$Which is the
MGF of $N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. $\blacksquare$

## Common Pitfalls

- **Confusing PDF and CDF.** PDF $f(x)$: probability density; CDF
  $F(x) = P(X \leq x) = \int_{-\infty}^x f(t)\, dt$. **Fix:** $F'(x) = f(x)$;
  $P(a < X < b) = F(b) - F(a)$.
- **Wrong central limit theorem application.** The CLT applies to the sample mean, not individual
  observations, and requires sufficiently large $n$. **Fix:**
  $\bar{X}_n \xrightarrow{d} N(\mu, \sigma^2/n)$ as $n \to \infty$.
- **Confusing type I and type II errors.** Type I: rejecting $H_0$ when it is true ($\alpha$). Type
  II: failing to reject $H_0$ when it is false ($\beta$). **Fix:** Type I = false positive; Type II
  = false negative. Decreasing one increases the other.

## Worked Examples

### Example 1: Normal distribution

**Problem.** $X \sim N(100, 15^2)$. Find $P(X > 130)$.

**Solution.** $Z = \frac{130 - 100}{15} = 2.0$.
$P(X > 130) = P(Z > 2) = 1 - \Phi(2) \approx 1 - 0.9772 = 0.0228$.

$\blacksquare$

### Example 2: Hypothesis test

**Problem.** Test $H_0: \mu = 50$ vs $H_1: \mu > 50$ given $\bar{x} = 53$, $s = 8$, $n = 25$,
$\alpha = 0.05$.

**Solution.** $t = \frac{53 - 50}{8/\sqrt{25}} = \frac{3}{1.6} = 1.875$. Critical value:
$t_{0.05, 24} = 1.711$. Since $1.875 > 1.711$, reject $H_0$ at the 5% level.

$\blacksquare$

## Summary

- Continuous distributions: PDF integrates to 1; CDF gives cumulative probability.
- Normal distribution: $X \sim N(\mu, \sigma^2)$; standardise: $Z = (X - \mu)/\sigma$.
- Central limit theorem: sample mean is approximately normal for large $n$.
- Hypothesis testing: state $H_0$ and $H_1$, choose significance level, compute test statistic,
  compare with critical value.

## Cross-References

| Topic         | Site       | Link                                                                                               |
| ------------- | ---------- | -------------------------------------------------------------------------------------------------- |
| [Probability] | A-Level    | [View](https://alevel-maths-physics.wyattau.com/docs/alevel/maths/statistics/03-probability)       |
| [Probability] | IB         | [View](https://ib.wyattau.com/docs/ib/maths/4-statistics-and-probability/1_probability)            |
| [Probability] | DSE        | [View](https://dse.wyattau.com/docs/dse/maths/compulsory/11_probability)                           |
| [Probability] | University | [View](https://university.wyattau.com/docs/mathematics/8-probability-and-statistics/1_probability) |
