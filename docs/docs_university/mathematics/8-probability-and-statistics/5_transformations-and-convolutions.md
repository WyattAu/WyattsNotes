---
title: Transformations and Convolutions
description: 'University Mathematics Probability Theory notes covering key definitions, core concepts, worked examples, and practice questions for practical revision.'
tags:
  - Mathematics
  - University
---

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

