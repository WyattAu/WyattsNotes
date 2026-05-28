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

A **probability space** is a triple $(\Omega, \mathcal◆LB◆F◆RB◆, P)$ where:

- $\Omega$ is the **sample space** (set of all possible outcomes).
- $\mathcal◆LB◆F◆RB◆$ is a **sigma-algebra** on $\Omega$.
- $P : \mathcal◆LB◆F◆RB◆ \to [0, 1]$ is a **probability measure**.

**Definition.** A **sigma-algebra** $\mathcal◆LB◆F◆RB◆$ on $\Omega$ is a collection of subsets satisfying:

1. $\Omega \in \mathcal◆LB◆F◆RB◆$.
2. If $A \in \mathcal◆LB◆F◆RB◆$Then $A^c \in \mathcal◆LB◆F◆RB◆$ (closed under complementation).
3. If $A_1, A_2, \ldots \in \mathcal◆LB◆F◆RB◆$Then $\bigcup_◆LB◆i=1◆RB◆^◆LB◆\infty◆RB◆ A_i \in \mathcal◆LB◆F◆RB◆$ (closed
   under countable unions).

**Definition.** A **probability measure** $P$ satisfies:

1. **Non-negativity:** $P(A) \geq 0$ for all $A \in \mathcal◆LB◆F◆RB◆$.
2. **Normalisation:** $P(\Omega) = 1$.
3. **Countable additivity:** If $A_1, A_2, \ldots$ are pairwise disjoint, then
   $P\left(\bigcup_◆LB◆i=1◆RB◆^◆LB◆\infty◆RB◆ A_i\right) = \sum_◆LB◆i=1◆RB◆^◆LB◆\infty◆RB◆ P(A_i)$.

### 1.2 Basic Properties

**Proposition 1.1.** For any probability space:

1. $P(\emptyset) = 0$.
2. $P(A^c) = 1 - P(A)$.
3. If $A \subseteq B$Then $P(A) \leq P(B)$.
4. $P(A \cup B) = P(A) + P(B) - P(A \cap B)$ (inclusion-exclusion).
5. **Boole's inequality:** $P\left(\bigcup_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ A_i\right) \leq \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ P(A_i)$.
6. **Bonferroni inequality:**
   $P\left(\bigcap_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ A_i\right) \geq 1 - \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ (1 - P(A_i))$.

_Proof._ (1) Apply countable additivity to the disjoint union
$\Omega = \Omega \cup \emptyset \cup \emptyset \cup \cdots$:
$1 = 1 + P(\emptyset) + P(\emptyset) + \cdots$So $P(\emptyset) = 0$.

(3) $B = A \cup (B \setminus A)$ is a disjoint union, so $P(B) = P(A) + P(B \setminus A) \geq P(A)$.

(4) $P(A \cup B) = P(A) + P(B \setminus A) = P(A) + P(B) - P(A \cap B)$. $\blacksquare$

### 1.3 Conditional Probability and Independence

**Definition.** The **conditional probability** of $A$ given $B$ (with $P(B) > 0$) is

$$P(A \mid B) = \frac◆LB◆P(A \cap B)◆RB◆◆LB◆P(B)◆RB◆$$

**Theorem 1.2 (Law of Total Probability).** If $B_1, \ldots, B_n$ form a partition of $\Omega$ with
$P(B_i) > 0$ for all $i$Then

$$P(A) = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ P(A \mid B_i)\, P(B_i)$$

**Theorem 1.3 (Bayes' Theorem).** Under the same conditions:

$$P(B_j \mid A) = \frac◆LB◆P(A \mid B_j)\, P(B_j)◆RB◆◆LB◆\sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ P(A \mid B_i)\, P(B_i)◆RB◆$$

**Definition.** Events $A$ and $B$ are **independent** if $P(A \cap B) = P(A)\,P(B)$.

**Proposition 1.4.** If $A$ and $B$ are independent with $P(B) > 0$Then $P(A \mid B) = P(A)$.

_Proof._ $P(A \mid B) = P(A \cap B)/P(B) = P(A)P(B)/P(B) = P(A)$. $\blacksquare$

**Definition.** Events $A_1, \ldots, A_n$ are **mutually independent** if for every subset
$J \subseteq \{1, \ldots, n\}$:

$$P\left(\bigcap_◆LB◆j \in J◆RB◆ A_j\right) = \prod_◆LB◆j \in J◆RB◆ P(A_j)$$

Pairwise independence does not imply mutual independence.

<details>
<summary>Worked Example: Pairwise vs Mutual Independence</summary>

_Solution._ Roll two fair dice. Let $A$ = "first die is even", $B$ = "second die is even", $C$ =
"sum is even".

$P(A) = P(B) = P(C) = 1/2$.

$P(A \cap B) = 1/4 = P(A)P(B)$.
$P(A \cap C) = P(\text◆LB◆first◆RB◆ even, sum even) = P(\text◆LB◆second◆RB◆ even) = 1/4 = P(A)P(C)$.

$P(B \cap C) = 1/4 = P(B)P(C)$. So $A$, $B$, $C$ are pairwise independent.

But
$P(A \cap B \cap C) = P(\text◆LB◆both◆RB◆ even, sum even) = P(\text◆LB◆both◆RB◆ even) = 1/4 \neq 1/8 = P(A)P(B)P(C)$.

So $A$, $B$, $C$ are pairwise independent but not mutually independent. $\blacksquare$

</details>

## 2. Random Variables

### 2.1 Definition and Distribution Functions

**Definition.** A **random variable** is a measurable function $X : \Omega \to \mathbb◆LB◆R◆RB◆$. The
**cumulative distribution function (CDF)** of $X$ is

$$F_X(x) = P(X \leq x)$$

**Proposition 2.1 (Properties of the CDF).**

1. $F$ is non-decreasing: if $a \leq b$Then $F(a) \leq F(b)$.
2. $\lim_◆LB◆x \to -\infty◆RB◆ F(x) = 0$ and $\lim_◆LB◆x \to +\infty◆RB◆ F(x) = 1$.
3. $F$ is right-continuous: $\lim_◆LB◆x \to a^+◆RB◆ F(x) = F(a)$.

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

$$E[X] = \sum_◆LB◆x◆RB◆ x\, p_X(x)$$

Provided the sum converges absolutely.

**Definition (Variance).** $\mathrm◆LB◆Var◆RB◆(X) = E[(X - \mu)^2] = E[X^2] - (E[X])^2$ where $\mu = E[X]$.

**Proposition 2.2 (Linearity of Expectation).** $E[aX + bY] = aE[X] + bE[Y]$ for any random
variables $X$$Y$ and constants $a$$b$.

_Proof._ Direct computation from the definition of expected value. For the discrete case:

$$E[aX + bY] = \sum_◆LB◆x,y◆RB◆ (ax + by)\, p_◆LB◆X,Y◆RB◆(x,y) = a\sum_x x\, p_X(x) + b\sum_y y\, p_Y(y) = aE[X] + bE[Y]$$

$\blacksquare$

### 2.3 Continuous Random Variables

A random variable is **continuous** if its CDF is absolutely continuous, i.e., there exists a
**probability density function (PDF)** $f_X$ such that

$$F_X(x) = \int_◆LB◆-\infty◆RB◆^◆LB◆x◆RB◆ f_X(t)\, dt$$

**Key properties:**

1. $f_X(x) \geq 0$ for all $x$.
2. $\int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_X(x)\, dx = 1$.
3. $P(a \leq X \leq b) = \int_a^b f_X(x)\, dx$.
4. $P(X = a) = 0$ for any single point $a$.

### 2.4 Common Distributions

**Discrete distributions:**

| Distribution       | PMF                             | $E[X]$    | $\mathrm◆LB◆Var◆RB◆(X)$ |
| ------------------ | ------------------------------- | --------- | ---------------- |
| Bernoulli$(p)$     | $p^x(1-p)^◆LB◆1-x◆RB◆$, $x \in \{0,1\}$ | $p$       | $p(1-p)$         |
| Binomial$(n,p)$    | $\binom◆LB◆n◆RB◆◆LB◆x◆RB◆p^x(1-p)^◆LB◆n-x◆RB◆$    | $np$      | $np(1-p)$        |
| Poisson$(\lambda)$ | $e^◆LB◆-\lambda◆RB◆\lambda^x / x!$    | $\lambda$ | $\lambda$        |
| Geometric$(p)$     | $(1-p)^◆LB◆x-1◆RB◆p$, $x \geq 1$        | $1/p$     | $(1-p)/p^2$      |

**Continuous distributions:**

| Distribution           | PDF                                                     | $E[X]$      | $\mathrm◆LB◆Var◆RB◆(X)$ |
| ---------------------- | ------------------------------------------------------- | ----------- | ---------------- |
| Uniform$(a,b)$         | $1/(b-a)$ on $[a,b]$                                    | $(a+b)/2$   | $(b-a)^2/12$     |
| Exponential$(\lambda)$ | $\lambda e^◆LB◆-\lambda x◆RB◆$, $x \geq 0$                      | $1/\lambda$ | $1/\lambda^2$    |
| $N(\mu, \sigma^2)$     | $\frac◆LB◆1◆RB◆◆LB◆\sigma\sqrt◆LB◆2\pi◆RB◆◆RB◆e^◆LB◆-(x-\mu)^2/(2\sigma^2)◆RB◆$ | $\mu$       | $\sigma^2$       |

### 2.5 The Normal Distribution

**Definition.** $X \sim N(\mu, \sigma^2)$ if $X$ has PDF
$f(x) = \frac◆LB◆1◆RB◆◆LB◆\sigma\sqrt◆LB◆2\pi◆RB◆◆RB◆\exp\left(-\frac◆LB◆(x-\mu)^2◆RB◆◆LB◆2\sigma^2◆RB◆\right)$.

**Theorem 2.3 (Standardisation).** If $X \sim N(\mu, \sigma^2)$Then
$Z = (X - \mu)/\sigma \sim N(0, 1)$.

_Proof._ The CDF of $Z$:
$P(Z \leq z) = P(X \leq \mu + \sigma z) = \int_◆LB◆-\infty◆RB◆^◆LB◆\mu + \sigma z◆RB◆ \frac◆LB◆1◆RB◆◆LB◆\sigma\sqrt◆LB◆2\pi◆RB◆◆RB◆ e^◆LB◆-t^2/2◆RB◆\, dt$.
Substituting $u = (t - \mu)/\sigma$:
$= \int_◆LB◆-\infty◆RB◆^◆LB◆z◆RB◆ \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2\pi◆RB◆◆RB◆ e^◆LB◆-u^2/2◆RB◆\, du$Which is the CDF of $N(0, 1)$.
$\blacksquare$

**Theorem 2.4 (Moment Generating Function).** If $X \sim N(\mu, \sigma^2)$Then

$$M_X(t) = E[e^◆LB◆tX◆RB◆] = \exp\left(\mu t + \frac◆LB◆\sigma^2 t^2◆RB◆◆LB◆2◆RB◆\right)$$

_Proof._
$M_X(t) = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ e^◆LB◆tx◆RB◆ \frac◆LB◆1◆RB◆◆LB◆\sigma\sqrt◆LB◆2\pi◆RB◆◆RB◆ e^◆LB◆-(x-\mu)^2/(2\sigma^2)◆RB◆\, dx$.
Completing the square in the exponent and evaluating the Gaussian integral gives the result.
$\blacksquare$

### 2.6 Moment Generating Functions

**Definition.** The **moment generating function (MGF)** of $X$ is $M_X(t) = E[e^◆LB◆tX◆RB◆]$ (when it
exists in a neighbourhood of $t = 0$).

**Theorem 2.5.** If the MGF exists in a neighbourhood of 0, it uniquely determines the distribution.
Furthermore, $E[X^n] = M_X^◆LB◆(n)◆RB◆(0)$.

### 2.7 Worked Examples

**Problem.** Let $X \sim \mathrm◆LB◆Poisson◆RB◆(3)$ and $Y \sim \mathrm◆LB◆Poisson◆RB◆(5)$ be independent. Find
the distribution of $X + Y$.

<details>
<summary>Solution</summary>

The MGF of $X \sim \mathrm◆LB◆Poisson◆RB◆(\lambda)$ is $M_X(t) = e^◆LB◆\lambda(e^t - 1)◆RB◆$.

$M_◆LB◆X+Y◆RB◆(t) = M_X(t) \cdot M_Y(t) = e^◆LB◆3(e^t - 1)◆RB◆ \cdot e^◆LB◆5(e^t - 1)◆RB◆ = e^◆LB◆8(e^t - 1)◆RB◆$.

This is the MGF of $\mathrm◆LB◆Poisson◆RB◆(8)$. Since the MGF uniquely determines the distribution,
$X + Y \sim \mathrm◆LB◆Poisson◆RB◆(8)$.

$\blacksquare$

</details>

<details>
<summary>Worked Example: Minimum of Exponential Random Variables</summary>

_Solution._ Let $X_1, \ldots, X_n$ be independent with $X_i \sim \mathrm◆LB◆Exp◆RB◆(\lambda_i)$. Find the
distribution of $M = \min(X_1, \ldots, X_n)$.

$P(M > t) = P(X_1 > t, \ldots, X_n > t) = \prod_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ P(X_i > t) = \prod_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ e^◆LB◆-\lambda_i t◆RB◆ = e^◆LB◆-(\lambda_1 + \cdots + \lambda_n)t◆RB◆$

So $P(M \leq t) = 1 - e^◆LB◆-\lambda t◆RB◆$ where $\lambda = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ \lambda_i$. This means
$M \sim \mathrm◆LB◆Exp◆RB◆(\lambda)$. $\blacksquare$

</details>

## 3. Joint Distributions and Independence

### 3.1 Joint Distribution Functions

**Definition.** The **joint CDF** of $(X, Y)$ is $F_◆LB◆X,Y◆RB◆(x, y) = P(X \leq x, Y \leq y)$.

**Definition.** The **joint PDF** (for continuous random variables) is $f_◆LB◆X,Y◆RB◆(x, y) \geq 0$ such
that

$$F_◆LB◆X,Y◆RB◆(x, y) = \int_◆LB◆-\infty◆RB◆^◆LB◆x◆RB◆\int_◆LB◆-\infty◆RB◆^◆LB◆y◆RB◆ f_◆LB◆X,Y◆RB◆(u, v)\, du\, dv$$

**Definition.** The **marginal PDF** of $X$ is
$f_X(x) = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_◆LB◆X,Y◆RB◆(x, y)\, dy$.

### 3.2 Covariance and Correlation

**Definition.** The **covariance** of $X$ and $Y$ is

$$\mathrm◆LB◆Cov◆RB◆(X, Y) = E[(X - E[X])(Y - E[Y])] = E[XY] - E[X]E[Y]$$

**Proposition 2.6.** $\mathrm◆LB◆Cov◆RB◆(X, Y) = \mathrm◆LB◆Cov◆RB◆(Y, X)$ and
$\mathrm◆LB◆Cov◆RB◆(aX + b, cY + d) = ac\,\mathrm◆LB◆Cov◆RB◆(X, Y)$.

**Definition.** The **correlation coefficient** is

$$\rho(X, Y) = \frac◆LB◆\mathrm◆LB◆Cov◆RB◆(X, Y)◆RB◆◆LB◆\sqrt◆LB◆\mathrm◆LB◆Var◆RB◆(X)\,\mathrm◆LB◆Var◆RB◆(Y)◆RB◆◆RB◆$$

**Theorem 2.7 (Cauchy--Schwarz for Random Variables).** $|\rho(X, Y)| \leq 1$With equality if and
only if $Y = aX + b$ almost surely for some $a, b$.

### 3.3 Independence of Random Variables

**Definition.** $X$ and $Y$ are **independent** if $F_◆LB◆X,Y◆RB◆(x, y) = F_X(x)\, F_Y(y)$ for all $x, y$.

For continuous random variables, this is equivalent to $f_◆LB◆X,Y◆RB◆(x, y) = f_X(x)\, f_Y(y)$.

**Proposition 2.8.** If $X$ and $Y$ are independent, then $\mathrm◆LB◆Cov◆RB◆(X, Y) = 0$. The converse is
false.

<details>
<summary>Worked Example: Uncorrelated but Dependent</summary>

_Solution._ Let $X \sim N(0, 1)$ and $Y = X^2$. Then
$\mathrm◆LB◆Cov◆RB◆(X, Y) = E[X^3] - E[X]E[X^2] = 0 - 0 \cdot 1 = 0$ (since the third moment of a standard
normal is 0).

But $Y$ is completely determined by $X$So they are not independent. $\blacksquare$

</details>

## 4. Limit Theorems

### 4.1 The Law of Large Numbers

**Theorem 4.1 (Weak Law of Large Numbers).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$
and $\mathrm◆LB◆Var◆RB◆(X_i) = \sigma^2 < \infty$. Then for every $\varepsilon > 0$:

$$\lim_◆LB◆n \to \infty◆RB◆ P\left(\left|\frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ X_i - \mu\right| \geq \varepsilon\right) = 0$$

_Proof._ Let $S_n = \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ X_i$. Then $E[S_n] = \mu$ and
$\mathrm◆LB◆Var◆RB◆(S_n) = \sigma^2/n$. By Chebyshev's inequality:

$$P(|S_n - \mu| \geq \varepsilon) \leq \frac◆LB◆\mathrm◆LB◆Var◆RB◆(S_n)◆RB◆◆LB◆\varepsilon^2◆RB◆ = \frac◆LB◆\sigma^2◆RB◆◆LB◆n\varepsilon^2◆RB◆ \to 0 \quad \mathrm◆LB◆as\ ◆RB◆ n \to \infty$$

$\blacksquare$

**Theorem 4.2 (Strong Law of Large Numbers).** Under the same conditions:

$$P\left(\lim_◆LB◆n \to \infty◆RB◆ \frac◆LB◆1◆RB◆◆LB◆n◆RB◆\sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ X_i = \mu\right) = 1$$

The sample mean converges to the population mean almost surely.

### 4.2 The Central Limit Theorem

**Theorem 4.3 (Central Limit Theorem).** Let $X_1, X_2, \ldots$ be i.i.d. With $E[X_i] = \mu$ and
$\mathrm◆LB◆Var◆RB◆(X_i) = \sigma^2 \in (0, \infty)$. Then

$$\frac◆LB◆S_n - n\mu◆RB◆◆LB◆\sigma\sqrt◆LB◆n◆RB◆◆RB◆ \xrightarrow◆LB◆d◆RB◆ N(0, 1)$$

Where $S_n = \sum_◆LB◆i=1◆RB◆^◆LB◆n◆RB◆ X_i$ and $\xrightarrow◆LB◆d◆RB◆$ denotes convergence in distribution.

Equivalently, for large $n$:

$$P\left(\frac◆LB◆S_n - n\mu◆RB◆◆LB◆\sigma\sqrt◆LB◆n◆RB◆◆RB◆ \leq z\right) \approx \Phi(z)$$

Where $\Phi$ is the CDF of the standard normal.

_Proof (using characteristic functions)._ Let $\varphi_X(t) = E[e^◆LB◆itX◆RB◆]$ be the characteristic
function of $X_1$. The characteristic function of $(S_n - n\mu)/(\sigma\sqrt◆LB◆n◆RB◆)$ is:

$$\varphi_n(t) = \left[\varphi_X\left(\frac◆LB◆t◆RB◆◆LB◆\sigma\sqrt◆LB◆n◆RB◆◆RB◆\right)\right]^n \cdot e^◆LB◆-it\sqrt◆LB◆n◆RB◆\mu/\sigma◆RB◆$$

Expanding $\varphi_X$ around 0:
$\varphi_X(s) = 1 + i\mu s - \frac◆LB◆(\sigma^2 + \mu^2)s^2◆RB◆◆LB◆2◆RB◆ + o(s^2)$. Substituting
$s = t/(\sigma\sqrt◆LB◆n◆RB◆)$:

$$\varphi_n(t) = \left[1 + \frac◆LB◆i\mu t◆RB◆◆LB◆\sigma\sqrt◆LB◆n◆RB◆◆RB◆ - \frac◆LB◆(\sigma^2 + \mu^2)t^2◆RB◆◆LB◆2\sigma^2 n◆RB◆ + o\left(\frac◆LB◆1◆RB◆◆LB◆n◆RB◆\right)\right]^n \cdot e^◆LB◆-it\sqrt◆LB◆n◆RB◆\mu/\sigma◆RB◆$$

Using $\lim_◆LB◆n \to \infty◆RB◆(1 + a_n/n)^n = e^◆LB◆\lim a_n◆RB◆$:

$$\lim_◆LB◆n \to \infty◆RB◆ \varphi_n(t) = \exp\left(\frac◆LB◆i\mu t◆RB◆◆LB◆\sigma◆RB◆ - \frac◆LB◆(\sigma^2 + \mu^2)t^2◆RB◆◆LB◆2\sigma^2◆RB◆\right) \cdot \exp\left(-\frac◆LB◆i\mu t◆RB◆◆LB◆\sigma◆RB◆\right) = e^◆LB◆-t^2/2◆RB◆$$

This is the characteristic function of $N(0, 1)$. By Levy's continuity theorem, the convergence in
distribution follows. $\blacksquare$

### 4.3 Worked Examples

**Problem.** A fair die is rolled 100 times. Approximate the probability that the sum exceeds 370.

<details>
<summary>Solution</summary>

Let $X_i$ be the value of the $i$-th roll. Then $E[X_i] = 7/2 = 3.5$ and
$\mathrm◆LB◆Var◆RB◆(X_i) = 35/12 \approx 2.917$.

$S_◆LB◆100◆RB◆ = \sum_◆LB◆i=1◆RB◆^◆LB◆100◆RB◆ X_i$. By the CLT:

$$\frac◆LB◆S_◆LB◆100◆RB◆ - 350◆RB◆◆LB◆\sqrt◆LB◆100 \cdot 35/12◆RB◆◆RB◆ \approx N(0, 1)$$

$$P(S_◆LB◆100◆RB◆ > 370) = P\left(Z > \frac◆LB◆370 - 350◆RB◆◆LB◆\sqrt◆LB◆291.7◆RB◆◆RB◆\right) \approx P(Z > 1.17) \approx 0.121$$

$\blacksquare$

</details>

<details>
<summary>Worked Example: Sample Mean Distribution</summary>

_Solution._ A population has mean 50 and standard deviation 10. Find the probability that the mean
of a sample of 64 observations exceeds 52.

By the CLT, $\bar◆LB◆X◆RB◆ \approx N(50, 100/64) = N(50, 1.5625)$.

$$P(\bar◆LB◆X◆RB◆ > 52) = P\left(Z > \frac◆LB◆52 - 50◆RB◆◆LB◆\sqrt◆LB◆1.5625◆RB◆◆RB◆\right) = P(Z > 1.6) \approx 0.0548$$

$\blacksquare$

</details>

### 4.4 Common Pitfalls

- **The CLT does not apply to small samples.** The CLT is an asymptotic result. For small $n$ (
  $n < 30$), the normal approximation can be poor unless the underlying distribution is already
  close to normal. Use the Berry--Esseen theorem for finite-sample bounds.
- **Independence is critical for the LLN and CLT.** If the $X_i$ are dependent, the sample mean may
  not converge to the population mean, or the convergence rate may differ. For stationary sequences
  with weak dependence, versions of these theorems still hold, but the proofs are more involved.
- **Convergence in distribution is weaker than convergence in probability.** The CLT gives
  convergence in distribution of the standardised sum, not convergence of the sum itself. The LLN
  gives the latter (convergence in probability).

## 5. Transformations and Convolutions

### 5.1 Distribution of a Function of a Random Variable

**Theorem 5.1 (CDF Method).** If $Y = g(X)$ and $g$ is monotone, then

$$F_Y(y) = P(g(X) \leq y) = \begin◆LB◆cases◆RB◆ F_X(g^◆LB◆-1◆RB◆(y)) & \text◆LB◆if◆RB◆  g \text◆LB◆ is◆RB◆ increasing \\ 1 - F_X(g^◆LB◆-1◆RB◆(y)) & \text◆LB◆if◆RB◆  g \text◆LB◆ is◆RB◆ decreasing \end◆LB◆cases◆RB◆$$

**Theorem 5.2 (Change of Variables).** If $Y = g(X)$ where $g$ is differentiable and strictly
monotone, then

$$f_Y(y) = f_X(g^◆LB◆-1◆RB◆(y)) \cdot \left|\frac◆LB◆d◆RB◆◆LB◆dy◆RB◆ g^◆LB◆-1◆RB◆(y)\right|$$

<details>
<summary>Worked Example: Distribution of $X^2$ where $X \sim N(0, 1)$</summary>

_Solution._ Let $Y = X^2$ where $X \sim N(0, 1)$. For $y \geq 0$:

$$F_Y(y) = P(X^2 \leq y) = P(-\sqrt◆LB◆y◆RB◆ \leq X \leq \sqrt◆LB◆y◆RB◆) = \Phi(\sqrt◆LB◆y◆RB◆) - \Phi(-\sqrt◆LB◆y◆RB◆) = 2\Phi(\sqrt◆LB◆y◆RB◆) - 1$$

$$f_Y(y) = \frac◆LB◆d◆RB◆◆LB◆dy◆RB◆[2\Phi(\sqrt◆LB◆y◆RB◆) - 1] = 2\phi(\sqrt◆LB◆y◆RB◆) \cdot \frac◆LB◆1◆RB◆◆LB◆2\sqrt◆LB◆y◆RB◆◆RB◆ = \frac◆LB◆1◆RB◆◆LB◆\sqrt◆LB◆2\pi y◆RB◆◆RB◆\, e^◆LB◆-y/2◆RB◆$$

This is the PDF of the $\chi^2(1)$ distribution. $\blacksquare$

</details>

### 5.2 Convolution

**Theorem 5.3.** If $X$ and $Y$ are independent continuous random variables, the PDF of $Z = X + Y$
is

$$f_Z(z) = (f_X * f_Y)(z) = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_X(x)\, f_Y(z - x)\, dx$$

_Proof._
$F_Z(z) = P(X + Y \leq z) = \iint_◆LB◆x+y \leq z◆RB◆ f_◆LB◆X,Y◆RB◆(x, y)\, dx\, dy = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_X(x)\left[\int_◆LB◆-\infty◆RB◆^◆LB◆z-x◆RB◆ f_Y(y)\, dy\right] dx = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_X(x)\, F_Y(z - x)\, dx$.

Differentiating: $f_Z(z) = \int_◆LB◆-\infty◆RB◆^◆LB◆\infty◆RB◆ f_X(x)\, f_Y(z - x)\, dx$. $\blacksquare$

**Corollary 5.4.** The sum of independent normals is normal: if $X \sim N(\mu_1, \sigma_1^2)$ and
$Y \sim N(\mu_2, \sigma_2^2)$ are independent, then
$X + Y \sim N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$.

_Proof._ The convolution of two Gaussian PDFs is Gaussian. This follows from the MGF:
$M_◆LB◆X+Y◆RB◆(t) = M_X(t)M_Y(t) = \exp((\mu_1 + \mu_2)t + (\sigma_1^2 + \sigma_2^2)t^2/2)$Which is the
MGF of $N(\mu_1 + \mu_2, \sigma_1^2 + \sigma_2^2)$. $\blacksquare$

## Common Pitfalls

1. Dropping negative signs during algebraic manipulation — substitute back to verify your answer.

2. Misreading the question, particularly with 'hence' vs 'hence or otherwise' — the former requires
   using previous work.

3. Confusing the domain and range of functions, or not considering restrictions (e.g., denominator
   cannot be zero).

4. Confusing $P(A|B)$ with $P(B|A)$ — these are related by Bayes' theorem but are not equal in
   general.

## Worked Examples

### Example 1: Law of Total Probability

**Problem.** Factory A produces 60% of items and factory B produces 40%. Defect rates are 2% and 5%
respectively. Find the probability a randomly selected item is defective.

**Solution.**
$P(D) = P(D|A)P(A) + P(D|B)P(B) = 0.02 \times 0.6 + 0.05 \times 0.4 = 0.012 + 0.020 = 0.032$.

Given a defective item, $P(A|D) = \frac◆LB◆0.012◆RB◆◆LB◆0.032◆RB◆ = 0.375$ (Bayes' theorem).

$\blacksquare$

### Example 2: Generating Functions

**Problem.** A fair coin is tossed until the first head appears. Find the expected number of tosses
using the probability generating function.

**Solution.** $X \sim \text◆LB◆Geo◆RB◆(p = 0.5)$. $P(X = k) = 0.5^k$ for $k = 1, 2, \ldots$

PGF: $G(s) = \sum_◆LB◆k=1◆RB◆^◆LB◆\infty◆RB◆ 0.5^k s^k = \frac◆LB◆0.5s◆RB◆◆LB◆1 - 0.5s◆RB◆$.

$E(X) = G'(1) = \frac◆LB◆0.5◆RB◆◆LB◆(1-0.5)^2◆RB◆ = \frac◆LB◆0.5◆RB◆◆LB◆0.25◆RB◆ = 2$.

$\blacksquare$

## Summary

- Sample spaces, events, and sigma-algebras provide the rigorous foundation for probability theory.
- Random variables: discrete (PMF) and continuous (PDF); CDF $F(x) = P(X \leq x)$.
- Expectation: $E(X) = \sum x \cdot P(X=x)$ or $\int x f(x)\,dx$; linearity
  $E(aX + bY) = aE(X) + bE(Y)$.
- Variance: $\text◆LB◆Var◆RB◆(X) = E(X^2) - [E(X)]^2$; $\text◆LB◆Var◆RB◆(aX + b) = a^2\text◆LB◆Var◆RB◆(X)$.
- Generating functions (PGF, MGF) encode distribution information; moments obtained by
  differentiation at specific points.

## Cross-References

| Topic                          | Site        | Link                                                            |
| ------------------------------ | ----------- | --------------------------------------------------------------- |
| Probability and Statistics     | WyattsNotes | [View](/docs/university/mathematics/probability-and-statistics) |
| Real Analysis                  | WyattsNotes | [View](/docs/university/mathematics/real-analysis)              |
| Differential Equations         | WyattsNotes | [View](/docs/university/mathematics/differential-equations)     |
| Probability — Harvard Stat 110 | Harvard     | [View](https://stat110.com/)                                    |
