---
title: Further Algebra
date: 2026-04-02T00:00:00.000Z
tags:
  - FurtherMaths
  - ALevel
categories:
  - Maths
slug: further-algebra
sidebar_position: 3
---

## Further Algebra

Further algebra builds on the polynomial and algebraic techniques from A Level mathematics,
extending to partial fractions with irreducible quadratics, the relationships between roots and
coefficients of polynomial equations, and systematic summation of series using the method of
differences.

### Board Coverage

| Board   | Paper   | Notes                                                    |
| ------- | ------- | -------------------------------------------------------- |
| AQA     | Paper 1 | Further partial fractions; roots and coefficients        |
| Edexcel | FP1/FP2 | Summation of series; roots of polynomials                |
| OCR (A) | Paper 1 | All topics; summation of series emphasised               |
| CIE     | P1/P3   | Summation of series required; partial fractions in depth |

---

## 1. Polynomial Division and the Remainder Theorem

### 1.1 Polynomial long division

To divide $P(x)$ by $(ax + b)$, perform polynomial long division (or synthetic division) to obtain:

$$P(x) = (ax + b)Q(x) + R$$

where $Q(x)$ is the quotient and $R$ is a constant remainder.

### Proof of the remainder theorem

### Proof

Let $P(x)$ be divided by $(x - c)$:

$$P(x) = (x - c)Q(x) + R$$

for some polynomial $Q(x)$ and constant $R$. Setting $x = c$:

$$P(c) = (c - c)Q(c) + R = 0 + R = R$$

$$\boxed{P(c) = R}$$

$\square$

### 1.2 The factor theorem

**Definition.** If $P(c) = 0$, then $(x - c)$ is a factor of $P(x)$. This is the _factor theorem_.

This follows directly from the remainder theorem: if the remainder is zero, the divisor is a factor.

### 1.3 Finding unknown coefficients

When a polynomial has unknown coefficients, use the factor theorem by substituting known roots, or
use the remainder theorem by evaluating at specified points.

<details>
<summary>Worked Example: Finding unknown coefficients</summary>

The polynomial $P(x) = x^3 + ax^2 + bx - 6$ is divisible by $(x - 1)$ and leaves remainder $-24$
when divided by $(x + 3)$. Find $a$ and $b$.

Since $(x - 1)$ is a factor: $P(1) = 1 + a + b - 6 = 0 \implies a + b = 5$ ... (i)

Remainder when divided by $(x + 3)$: $P(-3) = -27 + 9a - 3b - 6 = -24$

$9a - 3b = 9 \implies 3a - b = 3$ ... (ii)

Adding (i) and (ii): $4a = 8 \implies a = 2$. Then $b = 3$.

$P(x) = x^3 + 2x^2 + 3x - 6$.
</details>

---

## 2. Partial Fractions with Irreducible Quadratics

In A Level, partial fractions involved only linear factors. In further mathematics, denominators may
contain irreducible quadratic factors, requiring a different decomposition.

**Definition.** A quadratic $x^2 + cx + d$ is _irreducible_ if it has no real roots, i.e.
$\Delta = c^2 - 4d < 0$.

### 2.1 Type 1: Linear times irreducible quadratic

$$\boxed{\frac{px + q}{(ax + b)(x^2 + cx + d)} = \frac{A}{ax + b} + \frac{Bx + C}{x^2 + cx + d}}$$

The numerator of the irreducible quadratic factor is always linear ($Bx + C$), not just a constant.

<details>
<summary>Worked Example: Type 1 partial fractions</summary>

Express $\dfrac{3x + 5}{(x + 1)(x^2 + 1)}$ in partial fractions.

$$\frac{3x + 5}{(x + 1)(x^2 + 1)} = \frac{A}{x + 1} + \frac{Bx + C}{x^2 + 1}$$

$$3x + 5 = A(x^2 + 1) + (Bx + C)(x + 1)$$

Setting $x = -1$: $3(-1) + 5 = A(2) \implies A = 1$.

Setting $x = 0$: $5 = A + C \implies C = 4$.

Setting $x = 1$: $8 = 2A + (B + C)(2) = 2 + 2(B + 4) \implies 2B + 10 = 6 \implies B = -2$.

$$\frac{3x + 5}{(x + 1)(x^2 + 1)} = \frac{1}{x + 1} + \frac{-2x + 4}{x^2 + 1}$$
</details>

### 2.2 Type 2: Repeated irreducible quadratic

$$\boxed{\frac{px^2 + qx + r}{(x^2 + a)^2} = \frac{Ax + B}{x^2 + a} + \frac{Cx + D}{(x^2 + a)^2}}$$

When the irreducible quadratic is repeated, the numerators follow the same pattern as repeated
linear factors.

### 2.3 Type 3: Distinct irreducible quadratics

$$\boxed{\frac{px^2 + qx + r}{(x^2 + cx + d)(x^2 + ex + f)} = \frac{Ax + B}{x^2 + cx + d} + \frac{Cx + D}{x^2 + ex + f}}$$

Each distinct irreducible quadratic factor contributes a linear numerator.

<details>
<summary>Worked Example: Type 2 partial fractions</summary>

Express $\dfrac{x^2 + 1}{(x^2 + 4)^2}$ in partial fractions.

$$\frac{x^2 + 1}{(x^2 + 4)^2} = \frac{Ax + B}{x^2 + 4} + \frac{Cx + D}{(x^2 + 4)^2}$$

$$x^2 + 1 = (Ax + B)(x^2 + 4) + Cx + D = Ax^3 + Bx^2 + 4Ax + 4B + Cx + D$$

Comparing coefficients:

- $x^3$: $A = 0$
- $x^2$: $B = 1$
- $x^1$: $4A + C = 0 \implies C = 0$
- $x^0$: $4B + D = 1 \implies 4 + D = 1 \implies D = -3$

$$\frac{x^2 + 1}{(x^2 + 4)^2} = \frac{1}{x^2 + 4} - \frac{3}{(x^2 + 4)^2}$$
</details>

:::info
AQA requires all three types of partial fractions with irreducible quadratics. Edexcel and
OCR cover Types 1 and 2. CIE covers Type 1 extensively in P3.
:::

---

## 3. Roots of Polynomial Equations

### 3.1 Cubic equations

If $P(x) = ax^3 + bx^2 + cx + d = a(x - \alpha)(x - \beta)(x - \gamma)$ where $\alpha, \beta,
\gamma$
are the roots, then:

$$\boxed{\alpha + \beta + \gamma = -\frac{b}{a}}$$

$$\boxed{\alpha\beta + \alpha\gamma + \beta\gamma = \frac{c}{a}}$$

$$\boxed{\alpha\beta\gamma = -\frac{d}{a}}$$

### Proof of the relationship between roots and coefficients for a cubic

### Proof

Let $P(x) = ax^3 + bx^2 + cx + d = a(x - \alpha)(x - \beta)(x - \gamma)$.

Expanding the RHS:

$$a[(x - \alpha)(x - \beta)(x - \gamma)] = a[x^3 - (\alpha + \beta + \gamma)x^2 + (\alpha\beta + \alpha\gamma + \beta\gamma)x - \alpha\beta\gamma]$$

$$= ax^3 - a(\alpha + \beta + \gamma)x^2 + a(\alpha\beta + \alpha\gamma + \beta\gamma)x - a\alpha\beta\gamma$$

Comparing coefficients with $ax^3 + bx^2 + cx + d$:

- $x^2$: $-a(\alpha + \beta + \gamma) = b \implies \alpha + \beta + \gamma = -\dfrac{b}{a}$
- $x^1$:
  $a(\alpha\beta + \alpha\gamma + \beta\gamma) = c \implies \alpha\beta + \alpha\gamma + \beta\gamma = \dfrac{c}{a}$
- $x^0$: $-a\alpha\beta\gamma = d \implies \alpha\beta\gamma = -\dfrac{d}{a}$

$\square$

### 3.2 Quartic equations

For $P(x) = ax^4 + bx^3 + cx^2 + dx + e = a(x - \alpha)(x - \beta)(x - \gamma)(x - \delta)$:

$$\boxed{\sum\alpha = \alpha + \beta + \gamma + \delta = -\frac{b}{a}}$$

$$\boxed{\sum\alpha\beta = \alpha\beta + \alpha\gamma + \alpha\delta + \beta\gamma + \beta\delta + \gamma\delta = \frac{c}{a}}$$

$$\boxed{\sum\alpha\beta\gamma = -\frac{d}{a}}$$

$$\boxed{\alpha\beta\gamma\delta = \frac{e}{a}}$$

### 3.3 Symmetric functions of roots

Using the elementary symmetric sums, we can express other symmetric functions:

- $\alpha^2 + \beta^2 + \gamma^2 = (\alpha + \beta + \gamma)^2 - 2(\alpha\beta + \alpha\gamma + \beta\gamma)$
- $\dfrac{1}{\alpha} + \dfrac{1}{\beta} + \dfrac{1}{\gamma} = \dfrac{\alpha\beta + \alpha\gamma + \beta\gamma}{\alpha\beta\gamma}$
- $\alpha^2\beta + \alpha^2\gamma + \beta^2\alpha + \beta^2\gamma + \gamma^2\alpha + \gamma^2\beta = (\alpha + \beta + \gamma)(\alpha\beta + \alpha\gamma + \beta\gamma) - 3\alpha\beta\gamma$

<details>
<summary>Worked Example: Symmetric functions of roots</summary>

The equation $2x^3 - 3x^2 - 4x + 5 = 0$ has roots $\alpha, \beta, \gamma$. Find the value of
$\alpha^2 + \beta^2 + \gamma^2$.

From the relationships: $\alpha + \beta + \gamma = \dfrac{3}{2}$ and
$\alpha\beta + \alpha\gamma + \beta\gamma = \dfrac{-4}{2} = -2$.

$$\alpha^2 + \beta^2 + \gamma^2 = \left(\frac{3}{2}\right)^2 - 2(-2) = \frac{9}{4} + 4 = \frac{25}{4}$$
</details>

---

## 4. Summation of Series

### 4.1 Standard results

The following summation formulae are essential:

$$\boxed{\sum_{r=1}^{n} r = \frac{n(n+1)}{2}}$$

$$\boxed{\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}}$$

$$\boxed{\sum_{r=1}^{n} r^3 = \left[\frac{n(n+1)}{2}\right]^2}$$

### 4.2 The method of differences

To find $\displaystyle\sum_{r=1}^{n} f(r)$ where $f(r)$ can be written as $g(r) - g(r+1)$:

$$\sum_{r=1}^{n} f(r) = \sum_{r=1}^{n} [g(r) - g(r+1)] = g(1) - g(n+1)$$

This is a _telescoping sum_ — all intermediate terms cancel.

### Proof of the sum of squares formula by the method of differences

### Proof

Note that $r^3 - (r-1)^3 = 3r^2 - 3r + 1$, so $r^2 = \dfrac{r^3 - (r-1)^3 + 3r - 1}{3}$.

Summing from $r = 1$ to $n$:

$$\sum_{r=1}^{n} r^2 = \frac{1}{3}\sum_{r=1}^{n}[r^3 - (r-1)^3] + \sum_{r=1}^{n} r - \frac{n}{3}$$

The first sum telescopes: $\sum_{r=1}^{n}[r^3 - (r-1)^3] = n^3 - 0 = n^3$.

$$\sum_{r=1}^{n} r^2 = \frac{n^3}{3} + \frac{n(n+1)}{2} - \frac{n}{3} = \frac{2n^3 + 3n^2 + 3n + 2n^2 + 2n - 2n}{6} \cdot \frac{1}{1}$$

More carefully:

$$\sum_{r=1}^{n} r^2 = \frac{n^3}{3} + \frac{n(n+1)}{2} - \frac{n}{3} = \frac{2n^3 + 3n(n+1) - 2n}{6} = \frac{2n^3 + 3n^2 + 3n - 2n}{6}$$

$$= \frac{2n^3 + 3n^2 + n}{6} = \frac{n(2n^2 + 3n + 1)}{6} = \frac{n(n+1)(2n+1)}{6} \quad \square$$

### 4.3 Further standard results

$$\boxed{\sum_{r=1}^{n} r(r+1) = \frac{n(n+1)(n+2)}{3}}$$

$$\boxed{\sum_{r=1}^{n} r(r+1)(r+2) = \frac{n(n+1)(n+2)(n+3)}{4}}$$

In general, $\displaystyle\sum_{r=1}^{n} \binom{r+k}{k+1} = \binom{n+k+1}{k+2}$.

---

## 5. Further Summation Techniques

### 5.1 Using partial fractions for summation

When the general term of a series can be decomposed into partial fractions, the method of
differences often applies.

<details>
<summary>Worked Example: Sum using method of differences</summary>

Find $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+1)}$.

Using partial fractions: $\dfrac{1}{r(r+1)} = \dfrac{1}{r} - \dfrac{1}{r+1}$.

$$\sum_{r=1}^{n}\left(\frac{1}{r} - \frac{1}{r+1}\right) = \left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+1}\right)$$

$$= 1 - \frac{1}{n+1} = \frac{n}{n+1}$$
</details>

<details>
<summary>Worked Example: Sum with quadratic denominator</summary>

Find $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+2)}$.

Partial fractions: $\dfrac{1}{r(r+2)} = \dfrac{1}{2}\!\left(\dfrac{1}{r} - \dfrac{1}{r+2}\right)$.

$$\frac{1}{2}\sum_{r=1}^{n}\left(\frac{1}{r} - \frac{1}{r+2}\right) = \frac{1}{2}\left[\left(1 - \frac{1}{3}\right) + \left(\frac{1}{2} - \frac{1}{4}\right) + \left(\frac{1}{3} - \frac{1}{5}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+2}\right)\right]$$

Terms cancel in pairs. The surviving terms are $1 + \dfrac{1}{2} - \dfrac{1}{n+1} - \dfrac{1}{n+2}$.

$$= \frac{1}{2}\left(\frac{3}{2} - \frac{1}{n+1} - \frac{1}{n+2}\right) = \frac{3}{4} - \frac{2n+3}{2(n+1)(n+2)}$$
</details>

### 5.2 Summation of $r \cdot a_r$

To find $\displaystyle\sum_{r=1}^{n} r \cdot a_r$ where $a_r = f(r) - f(r-1)$:

$$\sum_{r=1}^{n} r \cdot a_r = \sum_{r=1}^{n} r[f(r) - f(r-1)] = nf(n) - \sum_{r=0}^{n-1} f(r)$$

This is known as the _summation by parts_ technique.

---

## 6. Proofs of Standard Summation Formulae

### Proof of $\sum r = \frac{n(n+1)}{2}$ (by induction)

### Proof

_Base case ($n = 1$):_ $\displaystyle\sum_{r=1}^{1} r = 1 = \frac{1 \times 2}{2}$. ✓

_Inductive step._ Assume $\displaystyle\sum_{r=1}^{k} r = \frac{k(k+1)}{2}$. Then:

$$\sum_{r=1}^{k+1} r = \frac{k(k+1)}{2} + (k+1) = \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k+2)}{2}$$

✓ $\square$

### Proof of $\sum r^3 = \left[\frac{n(n+1)}{2}\right]^2$ (by induction)

### Proof

_Base case ($n = 1$):_ $1^3 = 1 = \left[\dfrac{1 \times 2}{2}\right]^2 = 1$. ✓

_Inductive step._ Assume $\displaystyle\sum_{r=1}^{k} r^3 = \left[\frac{k(k+1)}{2}\right]^2$. Then:

$$\sum_{r=1}^{k+1} r^3 = \left[\frac{k(k+1)}{2}\right]^2 + (k+1)^3 = \frac{k^2(k+1)^2}{4} + \frac{4(k+1)^3}{4}$$

$$= \frac{(k+1)^2[k^2 + 4(k+1)]}{4} = \frac{(k+1)^2(k+2)^2}{4} = \left[\frac{(k+1)(k+2)}{2}\right]^2$$

✓ $\square$

:::info
CIE places particular emphasis on the method of differences and requires proof of standard
summation formulae. Edexcel FP2 requires summation of series including method of differences. AQA
covers summation in the context of mathematical induction.
:::

---

## 7. Summary of Key Results

$$\boxed{P(c) = R \quad \text{(Remainder Theorem)}}$$

$$\boxed{\frac{px + q}{(ax + b)(x^2 + cx + d)} = \frac{A}{ax + b} + \frac{Bx + C}{x^2 + cx + d}}$$

$$\boxed{\alpha + \beta + \gamma = -\frac{b}{a}, \quad \alpha\beta + \alpha\gamma + \beta\gamma = \frac{c}{a}, \quad \alpha\beta\gamma = -\frac{d}{a}}$$

$$\boxed{\sum_{r=1}^{n} r = \frac{n(n+1)}{2}, \quad \sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}, \quad \sum_{r=1}^{n} r^3 = \left[\frac{n(n+1)}{2}\right]^2}$$

$$\boxed{\sum_{r=1}^{n} [g(r) - g(r+1)] = g(1) - g(n+1)}$$

---

## Problems

**Problem 1.** Express $\dfrac{2x^2 + 3x + 4}{(x + 2)(x^2 + 2x + 5)}$ in partial fractions.

<details>
<summary>Hint</summary>

Since $x^2 + 2x + 5 = (x+1)^2 + 4$ has $\Delta = 4 - 20 < 0$, it is irreducible. Use the form
$\dfrac{A}{x+2} + \dfrac{Bx + C}{x^2 + 2x + 5}$.
</details>

<details>
<summary>Answer</summary>

$$\frac{2x^2 + 3x + 4}{(x + 2)(x^2 + 2x + 5)} = \frac{A}{x + 2} + \frac{Bx + C}{x^2 + 2x + 5}$$

$2x^2 + 3x + 4 = A(x^2 + 2x + 5) + (Bx + C)(x + 2)$

Setting $x = -2$: $8 - 6 + 4 = A(4 + 1) = 5A \implies A = \dfrac{6}{5}$.

Setting $x = 0$: $4 = 5A + 2C = 6 + 2C \implies C = -1$.

Setting $x = 1$: $2 + 3 + 4 = 5A + (B - 1)(3) = 6 + 3B - 3 \implies 9 = 3 + 3B \implies B = 2$.

$$\frac{2x^2 + 3x + 4}{(x + 2)(x^2 + 2x + 5)} = \frac{6/5}{x + 2} + \frac{2x - 1}{x^2 + 2x + 5}$$
</details>

---

**Problem 2.** The equation $x^3 - 4x^2 + x + 6 = 0$ has roots $\alpha, \beta, \gamma$. Find the
value of $\dfrac{1}{\alpha\beta} + \dfrac{1}{\alpha\gamma} + \dfrac{1}{\beta\gamma}$.

<details>
<summary>Hint</summary>

$\dfrac{1}{\alpha\beta} + \dfrac{1}{\alpha\gamma} + \dfrac{1}{\beta\gamma} = \dfrac{\alpha + \beta + \gamma}{\alpha\beta\gamma}$.
</details>

<details>
<summary>Answer</summary>

$\alpha + \beta + \gamma = \dfrac{-(-4)}{1} = 4$ and $\alpha\beta\gamma = \dfrac{-6}{1} = -6$.

$$\frac{1}{\alpha\beta} + \frac{1}{\alpha\gamma} + \frac{1}{\beta\gamma} = \frac{\alpha + \beta + \gamma}{\alpha\beta\gamma} = \frac{4}{-6} = -\frac{2}{3}$$
</details>

---

**Problem 3.** Express $\dfrac{3x + 1}{(x^2 + 1)(x^2 + 4)}$ in partial fractions.

<details>
<summary>Hint</summary>

Both $x^2 + 1$ and $x^2 + 4$ are irreducible. Use the form
$\dfrac{Ax + B}{x^2 + 1} + \dfrac{Cx + D}{x^2 + 4}$.
</details>

<details>
<summary>Answer</summary>

$$\frac{3x + 1}{(x^2 + 1)(x^2 + 4)} = \frac{Ax + B}{x^2 + 1} + \frac{Cx + D}{x^2 + 4}$$

$3x + 1 = (Ax + B)(x^2 + 4) + (Cx + D)(x^2 + 1)$

$= (A + C)x^3 + (B + D)x^2 + (4A + C)x + (4B + D)$

Comparing coefficients:

- $x^3$: $A + C = 0$
- $x^2$: $B + D = 0$
- $x^1$: $4A + C = 3$
- $x^0$: $4B + D = 1$

From $A + C = 0$ and $4A + C = 3$: $3A = 3 \implies A = 1, C = -1$.

From $B + D = 0$ and $4B + D = 1$: $3B = 1 \implies B = \dfrac{1}{3}, D = -\dfrac{1}{3}$.

$$\frac{3x + 1}{(x^2 + 1)(x^2 + 4)} = \frac{x + 1/3}{x^2 + 1} + \frac{-x - 1/3}{x^2 + 4}$$
</details>

---

**Problem 4.** Find $\displaystyle\sum_{r=1}^{n} \frac{2}{r(r+1)(r+2)}$.

<details>
<summary>Hint</summary>

Use partial fractions to show that
$\dfrac{2}{r(r+1)(r+2)} = \dfrac{1}{r(r+1)} - \dfrac{1}{(r+1)(r+2)}$, then apply the method of
differences.
</details>

<details>
<summary>Answer</summary>

$\dfrac{2}{r(r+1)(r+2)} = \dfrac{1}{r(r+1)} - \dfrac{1}{(r+1)(r+2)}$.

This telescopes:

$$\sum_{r=1}^{n}\left[\frac{1}{r(r+1)} - \frac{1}{(r+1)(r+2)}\right] = \frac{1}{1 \times 2} - \frac{1}{(n+1)(n+2)}$$

$$= \frac{1}{2} - \frac{1}{(n+1)(n+2)}$$
</details>

---

**Problem 5.** The equation $3x^3 + px^2 + qx + 12 = 0$ has roots $\alpha, \beta, \gamma$ such that
$\alpha + \beta + \gamma = 4$ and $\alpha\beta\gamma = -4$. Find $p$, $q$, and
$\alpha\beta + \alpha\gamma + \beta\gamma$.

<details>
<summary>Hint</summary>

Use the relationships between roots and coefficients directly.
</details>

<details>
<summary>Answer</summary>

$\alpha + \beta + \gamma = -\dfrac{p}{3} = 4 \implies p = -12$.

$\alpha\beta\gamma = -\dfrac{12}{3} = -4$. This is consistent with the given information. ✓

$\alpha\beta + \alpha\gamma + \beta\gamma = \dfrac{q}{3}$, so
$q = 3(\alpha\beta + \alpha\gamma + \beta\gamma)$.

We need additional information. Note that
$\alpha^2 + \beta^2 + \gamma^2 = (\alpha + \beta + \gamma)^2 - 2(\alpha\beta + \alpha\gamma + \beta\gamma)$
$= 16 - 2S$ where $S = \alpha\beta + \alpha\gamma + \beta\gamma$.

Without further information about the individual roots, $S$ cannot be determined uniquely. However,
we know $p = -12$ and $q$ depends on $S$.

If the question provides that the roots are integers: trying factors of $\dfrac{-4}{3}$, the roots
are $1, 1, 2$ (checking: sum = 4 ✓, product = 2 ≠ $-4$ ✗). The roots $-1, 2, 3$ give sum = 4 ✓ and
product = $-6$ ✗.

$p = -12$ and $q = 3S$ where $S$ requires more information about the roots.
</details>

---

**Problem 6.** Find $\displaystyle\sum_{r=1}^{n} \frac{1}{r(r+3)}$.

<details>
<summary>Hint</summary>

Use partial fractions:
$\dfrac{1}{r(r+3)} = \dfrac{1}{3}\!\left(\dfrac{1}{r} - \dfrac{1}{r+3}\right)$. Three terms survive
the telescoping.
</details>

<details>
<summary>Answer</summary>

$$\frac{1}{3}\sum_{r=1}^{n}\left(\frac{1}{r} - \frac{1}{r+3}\right) = \frac{1}{3}\left[\left(1 - \frac{1}{4}\right) + \left(\frac{1}{2} - \frac{1}{5}\right) + \left(\frac{1}{3} - \frac{1}{6}\right) + \cdots + \left(\frac{1}{n} - \frac{1}{n+3}\right)\right]$$

The surviving terms are
$\dfrac{1}{1} + \dfrac{1}{2} + \dfrac{1}{3} - \dfrac{1}{n+1} - \dfrac{1}{n+2} - \dfrac{1}{n+3}$.

$$= \frac{1}{3}\left(\frac{11}{6} - \frac{1}{n+1} - \frac{1}{n+2} - \frac{1}{n+3}\right) = \frac{11}{18} - \frac{1}{3}\!\left(\frac{1}{n+1} + \frac{1}{n+2} + \frac{1}{n+3}\right)$$
</details>

---

**Problem 7.** The polynomial $P(x) = x^4 + ax^3 + bx^2 + cx + d$ has roots
$\alpha, \beta, \gamma,
\delta$. Given that $\alpha + \beta = 3$, $\gamma + \delta = -5$, and
$\alpha\beta = 2$, find $a$ and $b$.

<details>
<summary>Hint</summary>

Use $\sum\alpha = -\dfrac{a}{1}$ and $\sum\alpha\beta = \dfrac{b}{1}$.
</details>

<details>
<summary>Answer</summary>

$\sum\alpha = \alpha + \beta + \gamma + \delta = 3 + (-5) = -2$.

$a = -\sum\alpha = 2$.

$\sum\alpha\beta = \alpha\beta + \alpha\gamma + \alpha\delta + \beta\gamma + \beta\delta + \gamma\delta$.

$= \alpha\beta + (\alpha + \beta)(\gamma + \delta) + \gamma\delta = 2 + (3)(-5) + \gamma\delta = 2 - 15 + \gamma\delta = -13 + \gamma\delta$.

We need $\gamma\delta$. Since we don't have $\gamma\delta$ directly, $b = -13 + \gamma\delta$.

$a = 2$ and $b$ depends on $\gamma\delta$ (which requires further information to determine).
</details>

---

**Problem 8.** Prove by induction that $\displaystyle\sum_{r=1}^{n} r(r+1) = \frac{n(n+1)(n+2)}{3}$
for all $n \in \mathbb{Z}^+$.

<details>
<summary>Hint</summary>

Base case: $n = 1$. Inductive step: assume for $n = k$ and add the $(k+1)$-th term.
</details>

<details>
<summary>Answer</summary>

_Base case ($n = 1$):_ $1 \times 2 = 2 = \dfrac{1 \times 2 \times 3}{3} = 2$. ✓

_Inductive step._ Assume $\displaystyle\sum_{r=1}^{k} r(r+1) = \frac{k(k+1)(k+2)}{3}$. Then:

$$\sum_{r=1}^{k+1} r(r+1) = \frac{k(k+1)(k+2)}{3} + (k+1)(k+2)$$

$$= \frac{(k+1)(k+2)[k + 3]}{3} = \frac{(k+1)(k+2)(k+3)}{3}$$

✓ $\square$
</details>

---

**Problem 9.** Express $\dfrac{x^2 + 3x + 2}{(x^2 + 2x + 3)^2}$ in partial fractions.

<details>
<summary>Hint</summary>

Use the form $\dfrac{Ax + B}{x^2 + 2x + 3} + \dfrac{Cx + D}{(x^2 + 2x + 3)^2}$.
</details>

<details>
<summary>Answer</summary>

$$x^2 + 3x + 2 = (Ax + B)(x^2 + 2x + 3) + Cx + D$$

$$= Ax^3 + (2A + B)x^2 + (3A + 2B + C)x + (3B + D)$$

Comparing coefficients:

- $x^3$: $A = 0$
- $x^2$: $B = 1$
- $x^1$: $2 + C = 3 \implies C = 1$
- $x^0$: $3 + D = 2 \implies D = -1$

$$\frac{x^2 + 3x + 2}{(x^2 + 2x + 3)^2} = \frac{1}{x^2 + 2x + 3} + \frac{x - 1}{(x^2 + 2x + 3)^2}$$
</details>

---

**Problem 10.** The cubic equation $x^3 + px^2 + qx + r = 0$ has roots $\alpha, \beta, \gamma$ where
$\beta = 2\alpha$ and $\gamma = 3\alpha$. Express $p$, $q$, and $r$ in terms of $\alpha$, and hence
find the roots when $p = -6$.

<details>
<summary>Hint</summary>

Substitute the root relationships into $\alpha + \beta + \gamma = -p$,
$\alpha\beta + \alpha\gamma + \beta\gamma = q$, and $\alpha\beta\gamma = -r$.
</details>

<details>
<summary>Answer</summary>

$\alpha + 2\alpha + 3\alpha = 6\alpha = -p$, so $p = -6\alpha$.

$\alpha(2\alpha) + \alpha(3\alpha) + (2\alpha)(3\alpha) = 2\alpha^2 + 3\alpha^2 + 6\alpha^2 = 11\alpha^2 = q$.

$\alpha(2\alpha)(3\alpha) = 6\alpha^3 = -r$, so $r = -6\alpha^3$.

When $p = -6$: $-6\alpha = -6 \implies \alpha = 1$.

Then $q = 11$, $r = -6$, and the roots are $1, 2, 3$.

Verification: $(x-1)(x-2)(x-3) = x^3 - 6x^2 + 11x - 6$. ✓
</details>

:::

:::
