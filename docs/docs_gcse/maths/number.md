---
title: Number
date: 2026-04-14
tags:
  - Maths
  - GCSE
categories:
  - Maths
slug: number
---

## Number

:::info
Board Coverage AQA Paper 1 | Edexcel Paper 1 | OCR Paper 1 (Foundation & Higher) | WJEC Unit
1
:::

## 1. Types of Number

### 1.1 The Number System

The real numbers can be classified into several nested subsets. Understanding these classifications
is essential for working with the number system fluently.

**Definition.** The set of **natural numbers** is $\mathbb{N} = \{1, 2, 3, \ldots\}$. The set of
**integers** is $\mathbb{Z} = \{\ldots, -2, -1, 0, 1, 2, \ldots\}$.

A **rational number** is any number that can be expressed as $\frac{p}{q}$ where $p \in \mathbb{Z}$,
$q \in \mathbb{Z} \setminus \{0\}$, and $p$ and $q$ have no common factors other than 1 (i.e. the
fraction is in its **lowest terms**).

An **irrational number** is a real number that cannot be expressed as a fraction of two integers.
Key examples include $\sqrt{2}$, $\pi$, and $e$.

**Theorem.** $\sqrt{2}$ is irrational.

**Proof.** Suppose for contradiction that $\sqrt{2} = \frac{p}{q}$ where $p$ and $q$ are coprime
integers with $q \neq 0$. Then:

$$2 = \frac{p^2}{q^2} \implies p^2 = 2q^2$$

Since $p^2$ is even, $p$ must be even. Write $p = 2k$ for some integer $k$. Then:

$$4k^2 = 2q^2 \implies q^2 = 2k^2$$

So $q^2$ is also even, meaning $q$ is even. But this contradicts the assumption that $p$ and $q$ are
coprime. Therefore $\sqrt{2}$ is irrational. $\blacksquare$

### 1.2 Prime Numbers and Factorisation

**Definition.** A **prime number** is a natural number greater than 1 that has exactly two factors:
1 and itself.

The prime numbers below 30 are: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.

**Theorem (Fundamental Theorem of Arithmetic).** Every integer greater than 1 can be written as a
unique product of prime numbers, up to the order of the factors.

**Example.** Write $1260$ as a product of primes.

$$1260 = 126 \times 10 = (63 \times 2) \times (2 \times 5) = (7 \times 9) \times 2^2 \times 5 = 2^2 \times 3^2 \times 5 \times 7$$

### 1.3 Highest Common Factor and Lowest Common Multiple

Given two integers $a$ and $b$, their **highest common factor** (HCF) is the largest integer that
divides both $a$ and $b$. Their **lowest common multiple** (LCM) is the smallest positive integer
that is a multiple of both.

If the prime factorisations are $a = p_1^{\alpha_1} p_2^{\alpha_2} \cdots$ and
$b = p_1^{\beta_1} p_2^{\beta_2} \cdots$, then:

$$\text{HCF}(a, b) = p_1^{\min(\alpha_1, \beta_1)} p_2^{\min(\alpha_2, \beta_2)} \cdots$$

$$\text{LCM}(a, b) = p_1^{\max(\alpha_1, \beta_1)} p_2^{\max(\alpha_2, \beta_2)} \cdots$$

**Relationship:** For any positive integers $a$ and $b$:

$$\text{HCF}(a, b) \times \text{LCM}(a, b) = a \times b$$

**Worked Example.** Find the HCF and LCM of $84$ and $210$.

$$84 = 2^2 \times 3 \times 7, \qquad 210 = 2 \times 3 \times 5 \times 7$$

$$\text{HCF} = 2^{\min(2,1)} \times 3^{\min(1,1)} \times 5^{\min(0,1)} \times 7^{\min(1,1)} = 2 \times 3 \times 7 = 42$$

$$\text{LCM} = 2^{\max(2,1)} \times 3^{\max(1,1)} \times 5^{\max(0,1)} \times 7^{\max(1,1)} = 2^2 \times 3 \times 5 \times 7 = 420$$

**Verification:** $42 \times 420 = 17640 = 84 \times 210$. $\checkmark$

## 2. Fractions, Decimals, and Percentages

### 2.1 Fraction Arithmetic

**Addition and subtraction:** $\frac{a}{b} \pm \frac{c}{d} = \frac{ad \pm bc}{bd}$

**Multiplication:** $\frac{a}{b} \times \frac{c}{d} = \frac{ac}{bd}$

**Division:** $\frac{a}{b} \div \frac{c}{d} = \frac{a}{b} \times \frac{d}{c} = \frac{ad}{bc}$

**Worked Example.** Evaluate $\frac{3}{4} + \frac{2}{5} - \frac{1}{3}$.

$$\frac{3}{4} + \frac{2}{5} - \frac{1}{3} = \frac{45 + 24 - 20}{60} = \frac{49}{60}$$

### 2.2 Recurring Decimals to Fractions

A **recurring decimal** has digits that repeat infinitely. We can convert these to exact fractions
using algebra.

**Worked Example.** Convert $0.\dot{3}\dot{6}$ to a fraction.

Let $x = 0.363636\ldots$

The repeating block has 2 digits, so multiply by 100:

$$100x = 36.363636\ldots$$

$$x = 0.363636\ldots$$

Subtracting: $99x = 36$, so $x = \frac{36}{99} = \frac{4}{11}$.

**General rule:** If the repeating block has $n$ digits, multiply by $10^n$, subtract the original,
and simplify.

### 2.3 Percentages

A percentage represents a fraction out of 100. The key operations are:

- **Percentage of an amount:** $P\%$ of $A = \frac{P}{100} \times A$
- **Percentage change:** $\frac{\text{change}}{\text{original}} \times 100\%$
- **Percentage increase/decrease:**
  $\text{new} = \text{original} \times \left(1 \pm \frac{P}{100}\right)$

**Worked Example.** A coat costs 120 pounds. It is reduced by 15% in a sale, then the sale price is
increased by 15%. What is the final price?

After the reduction: $120 \times 0.85 = 102$ pounds.

After the increase: $102 \times 1.15 = 117.30$ pounds.

:::warning
A 15% decrease followed by a 15% increase does NOT return to the original value. The
second percentage is applied to a smaller base.
:::

### 2.4 Reverse Percentages

**Worked Example.** After a 20% increase, a price is 336 pounds. Find the original price.

The original price is $100\%$, and after the increase it is $120\%$. So:

$$\text{original} = \frac{336}{1.20} = 280 \text{ pounds}$$

### 2.5 Compound Interest and Depreciation

For compound growth at rate $r\%$ per period over $n$ periods:

$$A = P\left(1 + \frac{r}{100}\right)^n$$

For depreciation:

$$A = P\left(1 - \frac{r}{100}\right)^n$$

**Worked Example.** 2000 pounds is invested at 3.5% compound interest per year. Find the value after
6 years, giving your answer to the nearest penny.

$$A = 2000 \times 1.035^6 = 2000 \times 1.22925\ldots = 2458.51 \text{ pounds}$$

## 3. Indices and Surds

### 3.1 Laws of Indices

For positive integers $m$ and $n$, and non-zero base $a$:

| Law                | Expression                             |
| ------------------ | -------------------------------------- |
| Multiplication     | $a^m \times a^n = a^{m+n}$             |
| Division           | $a^m \div a^n = a^{m-n}$               |
| Power of a power   | $(a^m)^n = a^{mn}$                     |
| Power of a product | $(ab)^n = a^n b^n$                     |
| Negative index     | $a^{-n} = \frac{1}{a^n}$               |
| Zero index         | $a^0 = 1$                              |
| Fractional index   | $a^{1/n} = \sqrt[n]{a}$                |
| Mixed fractional   | $a^{m/n} = \left(\sqrt[n]{a}\right)^m$ |

**Worked Example.** Simplify $\frac{8a^3 b^2 \times 3a^{-1} b^4}{6a^2 b^{-3}}$.

$$\frac{8 \times 3}{6} \cdot a^{3 + (-1) - 2} \cdot b^{2 + 4 - (-3)} = 4 \cdot a^0 \cdot b^9 = 4b^9$$

### 3.2 Surds

A **surd** is an irrational number expressed as the root of an integer, for example $\sqrt{3}$ or
$\sqrt[3]{5}$.

**Rules of surds:**

$$\sqrt{a} \times \sqrt{b} = \sqrt{ab}, \qquad \frac{\sqrt{a}}{\sqrt{b}} = \sqrt{\frac{a}{b}}, \qquad (\sqrt{a})^2 = a$$

**Rationalising the denominator:** To remove a surd from the denominator, multiply top and bottom by
the surd (or its conjugate if the denominator is a binomial).

**Worked Example.** Simplify $\frac{6}{\sqrt{3}}$.

$$\frac{6}{\sqrt{3}} = \frac{6\sqrt{3}}{3} = 2\sqrt{3}$$

**Worked Example.** Rationalise $\frac{5}{2 - \sqrt{3}}$.

Multiply by the conjugate $2 + \sqrt{3}$:

$$\frac{5(2 + \sqrt{3})}{(2 - \sqrt{3})(2 + \sqrt{3})} = \frac{5(2 + \sqrt{3})}{4 - 3} = 5(2 + \sqrt{3}) = 10 + 5\sqrt{3}$$

### 3.3 Standard Form

A number in **standard form** is written as $a \times 10^n$ where $1 \leq a \lt 10$ and $n$ is an
integer.

**Worked Example.** Calculate $\frac{4.5 \times 10^8}{3 \times 10^{-2}}$, giving your answer in
standard form.

$$\frac{4.5 \times 10^8}{3 \times 10^{-2}} = 1.5 \times 10^{8 - (-2)} = 1.5 \times 10^{10}$$

## 4. Upper and Lower Bounds

When a measurement is given to a specified degree of accuracy, the true value lies within a range.

**Definition.** If a quantity $x$ is given as $a$ to the nearest unit, then:

- The **upper bound** of $x$ is $a + 0.5$
- The **lower bound** of $x$ is $a - 0.5$

For $x$ rounded to $d$ decimal places, the bounds are $a \pm 0.5 \times 10^{-d}$.

For $x$ rounded to $s$ significant figures, the bounds are
$a \pm 0.5 \times 10^{\lfloor \log_{10} a \rfloor - s + 1}$.

**Worked Example.** A rectangle has length $8.4$ cm and width $5.2$ cm, both measured to 1 decimal
place. Find the upper and lower bounds for the area.

Bounds for length: $8.35 \leq l \lt 8.45$

Bounds for width: $5.15 \leq w \lt 5.20$

- Upper bound of area: $8.45 \times 5.20 = 43.94 \text{ cm}^2$
- Lower bound of area: $8.35 \times 5.15 = 43.0025 \text{ cm}^2$

:::warning
For division, the upper bound of the quotient is NOT upper/upper. It is upper/lower (for
positive quantities).
:::

## 5. Estimation and Approximation

### 5.1 Rounding

- **Decimal places:** Count digits after the decimal point.
- **Significant figures:** Count from the first non-zero digit.

**Worked Example.** Round $0.004063$ to 2 significant figures.

The first significant figure is 4, the second is 0. The next digit is 6, so round up: $0.0041$.

### 5.2 Estimation

Replace numbers with approximate values (usually 1 significant figure) to get a quick estimate.

**Worked Example.** Estimate $\frac{3.97 \times 18.4}{0.498}$.

$$\approx \frac{4 \times 20}{0.5} = \frac{80}{0.5} = 160$$

### 5.3 Error Intervals

An **error interval** for a rounded value $x$ is the range of possible true values.

**Worked Example.** $x$ is rounded to the nearest integer as 7. Write down the error interval for
$x$.

$$6.5 \leq x \lt 7.5$$

Note: the lower bound is inclusive (values of exactly 6.5 round up to 7), but the upper bound is
exclusive (values of exactly 7.5 round up to 8).

## 6. Direct and Inverse Proportion

### 6.1 Direct Proportion

$y$ is **directly proportional** to $x$ if $y = kx$ for some constant $k$ (the constant of
proportionality).

We write $y \propto x$.

**Worked Example.** $y$ is directly proportional to $x$. When $x = 5$, $y = 30$. Find $y$ when
$x = 8$.

$$30 = 5k \implies k = 6$$

$$y = 6 \times 8 = 48$$

### 6.2 Inverse Proportion

$y$ is **inversely proportional** to $x$ if $y = \frac{k}{x}$.

We write $y \propto \frac{1}{x}$.

**Worked Example.** $y$ is inversely proportional to $x^2$. When $x = 3$, $y = 12$. Find $y$ when
$x = 6$.

$$12 = \frac{k}{9} \implies k = 108$$

$$y = \frac{108}{36} = 3$$

## 7. Factors, Multiples, and Primes in Context

### 7.1 Squares, Cubes, and Roots

| Operation   | Symbol        | Example            |
| ----------- | ------------- | ------------------ |
| Square      | $n^2$         | $7^2 = 49$         |
| Cube        | $n^3$         | $4^3 = 64$         |
| Square root | $\sqrt{n}$    | $\sqrt{81} = 9$    |
| Cube root   | $\sqrt[3]{n}$ | $\sqrt[3]{27} = 3$ |

### 7.2 Triangular and Other Sequences

**Triangular numbers:** $T_n = \frac{n(n+1)}{2}$, giving the sequence $1, 3, 6, 10, 15, 21, \ldots$

These represent the number of dots that can form an equilateral triangle with $n$ dots on each side.

**Square numbers:** $S_n = n^2$, giving $1, 4, 9, 16, 25, \ldots$

### 7.3 Rules of Divisibility

| Divisible by | Rule                                           |
| ------------ | ---------------------------------------------- |
| 2            | Last digit is even                             |
| 3            | Sum of digits is divisible by 3                |
| 4            | Last two digits form a number divisible by 4   |
| 5            | Last digit is 0 or 5                           |
| 6            | Divisible by both 2 and 3                      |
| 8            | Last three digits form a number divisible by 8 |
| 9            | Sum of digits is divisible by 9                |
| 10           | Last digit is 0                                |
| 11           | Alternating sum of digits is divisible by 11   |

## Common Pitfalls

- **Confusing HCF and LCM.** The HCF uses the _minimum_ power of each prime; the LCM uses the
  _maximum_.
- **Incorrect bounds for subtraction and division.** For positive quantities, the upper bound of
  $a - b$ is upper$(a)$ - lower$(b)$, not upper$(a)$ - upper$(b)$.
- **Forgetting that $a^0 = 1$ for any $a \neq 0$.** This is a definition, not a pattern.
- **Mishandling negative indices.** $a^{-n} = \frac{1}{a^n}$, not $-a^n$.
- **Rationalising denominators incorrectly.** When the denominator is $a + \sqrt{b}$, multiply by
  $a - \sqrt{b}$, not by $\sqrt{a} - \sqrt{b}$.
- **Assuming compound percentage changes cancel.** A 20% increase followed by a 20% decrease gives
  $1.2 \times 0.8 = 0.96$, a net decrease of 4%.

## Practice Questions

1. Express $540$ as a product of prime factors. Hence find the HCF and LCM of $540$ and $324$.

2. Convert $0.2\dot{7}$ to a fraction in its lowest terms.

3. Simplify $\frac{(2\sqrt{3})^3}{\sqrt{27}}$.

4. A car depreciates at 12% per year. If it was bought for 18000 pounds, find its value after 4
   years to the nearest pound.

5. $a = 6.3$ and $b = 2.7$, both correct to 1 decimal place. Find the lower bound of $\frac{a}{b}$.

6. $y$ is directly proportional to the cube of $x$. When $x = 2$, $y = 40$. Find $x$ when
   $y = 1080$.

7. Simplify $\frac{12x^5 y^{-2}}{3x^{-1} y^4} \times (xy^3)^2$.

8. Rationalise the denominator of $\frac{\sqrt{5} + 3}{\sqrt{5} - 1}$.

9. Calculate $\frac{6.2 \times 10^{-3} \times 4.8 \times 10^7}{1.2 \times 10^2}$ in standard form.

10. Prove that the sum of any three consecutive integers is divisible by 3.
