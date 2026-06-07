---
title: Joint Distributions and Independence
description: 'University Mathematics Probability Theory notes covering key definitions, core concepts, worked examples, and practice questions for practical revision.'
tags:
  - Mathematics
  - University
---

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

