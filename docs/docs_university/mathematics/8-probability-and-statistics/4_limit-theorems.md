---
title: Limit Theorems
description: 'University Mathematics Probability Theory notes covering key definitions, core concepts, worked examples, and practice questions for practical revision.'
tags:
  - Mathematics
  - University
---

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

