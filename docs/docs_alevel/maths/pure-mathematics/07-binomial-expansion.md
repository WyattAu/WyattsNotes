---
title: Binomial Expansion
description:
  A-Level Mathematics notes on Binomial Expansion: Board Coverage; 1. Pascal's
  Triangle; 2. Binomial Coefficients; 2.1 Properties of Binomial Coefficients.
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: binomial-expansion
---

## Board Coverage

| Board      | Paper      | Notes                                                            |
| ---------- | ---------- | ---------------------------------------------------------------- |
| AQA        | Paper 1, 2 | Binomial theorem for positive integer $n$; P2: general expansion |
| Edexcel    | P1, P2     | P1: positive integer; P2: negative/fractional                    |
| OCR (A)    | Paper 1, 2 | Similar split                                                    |
| CIE (9709) | P1, P3     | P1: positive integer; P3: general                                |

:::info AQA provides the binomial expansion formula in the formula booklet. Edexcel does not —
memorise it.
:::

<hr />

## 1. Pascal's Triangle

Pascal's triangle displays the binomial coefficients for successive powers of $(a + b)^n$:

$$
\begin{array}{c}
n = 0: \quad 1 \\
n = 1: \quad 1 \quad 1 \\
n = 2: \quad 1 \quad 2 \quad 1 \\
n = 3: \quad 1 \quad 3 \quad 3 \quad 1 \\
n = 4: \quad 1 \quad 4 \quad 6 \quad 4 \quad 1 \\
\end{array}
$$

Each entry is the sum of the two entries above it.

<hr />

## 2. Binomial Coefficients

**Definition.** The _binomial coefficient_ $\binom{n}{r}$ (read "$n$ choose $r$") is defined for
non-negative integers $n, r$ with $r \leq n$ by:

$$\binom{n}{r} = \frac{n!}{r!(n - r)!}$$

where $n! = n(n-1)(n-2)\cdots 1$ is the factorial of $n$, and $0! = 1$.

**Theorem.** $\binom{n}{r}$ counts the number of ways to choose $r$ objects from $n$ distinct
objects (order does not matter).

_Proof._ We count the number of ways to form a subset of size $r$ from $\{1, 2, \ldots, n\}$.

The number of _ordered_ selections of $r$ objects from $n$ is
$n(n-1)\cdots(n-r+1) = \frac{n!}{(n-r)!}$.

But each subset of size $r$ can be ordered in $r!$ ways. Dividing by $r!$ (to account for
overcounting):

$$\binom{n}{r} = \frac{n!}{r!(n-r)!} \quad \blacksquare$$

### 2.1 Properties of Binomial Coefficients

**Theorem (Symmetry).** $\binom{n}{r} = \binom{n}{n - r}$.

_Proof._ $\binom{n}{n-r} = \frac{n!}{(n-r)!(n - (n-r))!} = \frac{n!}{(n-r)!\,r!} = \binom{n}{r}$.
$\blacksquare$

_Intuition._ Choosing $r$ objects to _include_ is equivalent to choosing $n - r$ objects to
_exclude_.

**Theorem (Pascal's Identity).** $\binom{n}{r} = \binom{n-1}{r} + \binom{n-1}{r-1}$.

_Proof._ Consider a set of $n$ elements, with one distinguished element $x$. To choose $r$ elements:

- Case 1: Include $x$. Choose $r - 1$ more from the remaining $n - 1$: $\binom{n-1}{r-1}$ ways.
- Case 2: Exclude $x$. Choose all $r$ from the remaining $n - 1$: $\binom{n-1}{r}$ ways.

Total: $\binom{n-1}{r-1} + \binom{n-1}{r}$. $\blacksquare$

<hr />

## 3. The Binomial Theorem

**Theorem (Binomial Theorem for Positive Integer $n$).** For $n \in \mathbb{N}$:

$$(a + b)^n = \sum_{r=0}^{n} \binom{n}{r} a^{n-r} b^r$$

$$= a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n-1}ab^{n-1} + b^n$$

_Proof (by induction on $n$)._

Base case ($n = 0$): $(a+b)^0 = 1 = \binom{0}{0}a^0 b^0$. ✓

Base case ($n = 1$): $(a+b)^1 = a + b = \binom{1}{0}a + \binom{1}{1}b$. ✓

Inductive step: Assume $(a+b)^k = \sum_{r=0}^{k} \binom{k}{r} a^{k-r} b^r$.

$$
\begin{aligned}
(a+b)^{k+1} &= (a+b)(a+b)^k \\
&= (a+b)\sum_{r=0}^{k} \binom{k}{r} a^{k-r} b^r \\
&= \sum_{r=0}^{k} \binom{k}{r} a^{k+1-r} b^r + \sum_{r=0}^{k} \binom{k}{r} a^{k-r} b^{r+1} \\
&= a^{k+1} + \sum_{r=1}^{k} \binom{k}{r} a^{k+1-r} b^r + \sum_{r=1}^{k+1} \binom{k}{r-1} a^{k+1-r} b^r + b^{k+1} \\
&= a^{k+1} + \sum_{r=1}^{k} \left[\binom{k}{r} + \binom{k}{r-1}\right] a^{k+1-r} b^r + b^{k+1}
\end{aligned}
$$

By Pascal's identity, $\binom{k}{r} + \binom{k}{r-1} = \binom{k+1}{r}$:

$$= a^{k+1} + \sum_{r=1}^{k} \binom{k+1}{r} a^{k+1-r} b^r + b^{k+1} = \sum_{r=0}^{k+1} \binom{k+1}{r} a^{k+1-r} b^r \quad \blacksquare$$

_Intuition._ Each term in the expansion corresponds to a way of choosing $a$'s and $b$'s: from $n$
factors of $(a + b)$, choosing $r$ of them to contribute a $b$ (and the remaining $n - r$ to
contribute an $a$) gives the term $\binom{n}{r} a^{n-r} b^r$.

<details>
<summary>Example</summary>
Expand $(2x - 3)^5$.

$$(2x - 3)^5 = \sum_{r=0}^{5} \binom{5}{r} (2x)^{5-r}(-3)^r$$

$$= 32x^5 + 5 \cdot 16x^4(-3) + 10 \cdot 8x^3 \cdot 9 + 10 \cdot 4x^2(-27) + 5 \cdot 2x \cdot 81 + (-243)$$

$$= 32x^5 - 240x^4 + 720x^3 - 1080x^2 + 810x - 243$$

</details>

<hr />

## 4. General Binomial Expansion

When $n$ is not a positive integer (e.g., $n$ is negative or fractional), the expansion becomes an
_infinite series_.

**Theorem (General Binomial Theorem).** For $|x| \lt 1$ and any $n \in \mathbb{R}$:

$$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$$

$$= \sum_{r=0}^{\infty} \binom{n}{r} x^r$$

where $\binom{n}{r} = \frac{n(n-1)(n-2)\cdots(n-r+1)}{r!}$.

**Note.** When $n$ is a positive integer, the series terminates at $r = n$ (since $\binom{n}{r} = 0$
for $r \gt n$). When $n$ is not a positive integer, the series is infinite.

**Convergence.** The series converges when $|x| \lt 1$. This condition is essential.

<details>
<summary>Example</summary>
Find the expansion of $(1 - 2x)^{-3}$ up to and including the term in $x^3$.

Here $n = -3$ and we replace $x$ with $-2x$.

$$
\begin{aligned}
(1 - 2x)^{-3} &= 1 + (-3)(-2x) + \frac{(-3)(-4)}{2!}(-2x)^2 + \frac{(-3)(-4)(-5)}{3!}(-2x)^3 + \cdots \\
&= 1 + 6x + \frac{12}{2}(4x^2) + \frac{-60}{6}(-8x^3) + \cdots \\
&= 1 + 6x + 24x^2 + 80x^3 + \cdots
\end{aligned}
$$

Valid for $|-2x| \lt 1$, i.e., $|x| \lt \frac{1}{2}$.

</details>

### 4.1 Expanding $(a + bx)^n$

To expand $(a + bx)^n$, first factor out $a$:

$$(a + bx)^n = a^n\left(1 + \frac{b}{a}x\right)^n$$

Then expand $\left(1 + \frac{b}{a}x\right)^n$ using the general binomial theorem. The convergence
condition becomes $\left|\frac{b}{a}x\right| \lt 1$.

<details>
<summary>Example</summary>
Expand $\sqrt{4 + x}$ in ascending powers of $x$ up to $x^2$.

$$
\begin{aligned}
(4 + x)^{1/2} &= 4^{1/2}\left(1 + \frac{x}{4}\right)^{1/2} \\
&= 2\left[1 + \frac{1}{2}\cdot\frac{x}{4} + \frac{\frac{1}{2}\cdot\left(-\frac{1}{2}\right)}{2!}\cdot\frac{x^2}{16} + \cdots\right] \\
&= 2\left[1 + \frac{x}{8} - \frac{x^2}{128} + \cdots\right] \\
&= 2 + \frac{x}{4} - \frac{x^2}{64} + \cdots
\end{aligned}
$$

Valid for $\left|\frac{x}{4}\right| \lt 1$, i.e., $|x| \lt 4$.

</details>

<hr />

## 5. Finding Specific Terms

### 5.1 The General Term

In the expansion of $(a + bx)^n$, the $(r+1)$th term is:

$$T_{r+1} = \binom{n}{r} a^{n-r}(bx)^r$$

The index $r$ counts from $0$, so the first term corresponds to $r = 0$ and the last term (when $n$
is a positive integer) corresponds to $r = n$.

### 5.2 Strategy for Finding a Specific Term

To find the coefficient of $x^k$ in $(a + bx)^n$:

1. Write the general term: $T_{r+1} = \binom{n}{r} a^{n-r} b^r x^r$.
2. Set the power of $x$ equal to $k$: $r = k$.
3. Substitute $r = k$ and evaluate.

When $n$ is not a positive integer, the general term still works — but you must also check
convergence ($|bx/a| \lt 1$).

<details>
<summary>Example 1: Constant term</summary>
Find the constant term in the expansion of $\left(x^2 + \frac{2}{x}\right)^8$.

The general term is:

$$T_{r+1} = \binom{8}{r} (x^2)^{8-r}\left(\frac{2}{x}\right)^r = \binom{8}{r} 2^r x^{16-3r}$$

For the constant term, set $16 - 3r = 0$, giving $r = \frac{16}{3}$. Since $r$ must be a
non-negative integer, there is no constant term.

(If the power had been $9$, we would get $r = \frac{18}{3} = 6$, and the constant term would be
$\binom{9}{6} 2^6 = 84 \cdot 64 = 5376$.)

</details>

<details>
<summary>Example 2: Specific power of $x$</summary>
Find the coefficient of $x^5$ in the expansion of $(1 + 2x)^{12}$.

The general term is $T_{r+1} = \binom{12}{r}(2x)^r = \binom{12}{r} 2^r x^r$.

Set $r = 5$:

$$\mathrm{Coefficient} = \binom{12}{5} 2^5 = 792 \cdot 32 = 25344$$

</details>

<details>
<summary>Example 3: Non-integer power</summary>
Find the coefficient of $x^3$ in the expansion of $(1 - 3x)^{-1/2}$ up to $x^3$.

The general term is:

$$T_{r+1} = \binom{-1/2}{r}(-3x)^r$$

For $r = 3$:

$$\binom{-1/2}{3} = \frac{(-1/2)(-3/2)(-5/2)}{3!} = \frac{-15/8}{6} = -\frac{5}{16}$$

$$T_4 = \left(-\frac{5}{16}\right)(-3x)^3 = \left(-\frac{5}{16}\right)(-27x^3) = \frac{135}{16}x^3$$

Coefficient of $x^3$: $\frac{135}{16}$.

</details>

<hr />

## 6. Binomial Approximation and Error Estimation

### 6.1 Using Partial Sums for Approximation

When $(1 + x)^n$ is expanded as an infinite series, taking only the first $k + 1$ terms gives an
approximation. The accuracy depends on how many terms are taken and how small $|x|$ is.

For small $|x|$, the series converges rapidly, so few terms are needed for high accuracy.

### 6.2 Error Bounds

**Theorem (Error bound for alternating decreasing series).** If the terms of $(1+x)^n$ are
alternating in sign and decreasing in magnitude, then the error when truncating after $k$ terms is
bounded by the magnitude of the next (first omitted) term:

$$\left|(1+x)^n - S_k\right| \leq |T_{k+1}|$$

where $S_k$ is the partial sum up to and including the $x^k$ term, and $T_{k+1}$ is the $(k+1)$th
term.

This applies when $n \lt 0$ and $x \gt 0$, or when $n$ is fractional with alternating signs.

<details>
<summary>Example: Approximating $\sqrt[3]{28}$</summary>
We write $28 = 27 + 1 = 27(1 + 1/27)$, so:

$$\sqrt[3]{28} = \left(27\left(1 + \frac{1}{27}\right)\right)^{1/3} = 3\left(1 + \frac{1}{27}\right)^{1/3}$$

Expanding with $n = 1/3$ and $x = 1/27$:

$$
\begin{aligned}
\left(1 + \frac{1}{27}\right)^{1/3} &= 1 + \frac{1}{3}\cdot\frac{1}{27} + \frac{\frac{1}{3}\cdot\left(-\frac{2}{3}\right)}{2!}\cdot\frac{1}{729} + \frac{\frac{1}{3}\cdot\left(-\frac{2}{3}\right)\cdot\left(-\frac{5}{3}\right)}{3!}\cdot\frac{1}{19683} + \cdots \\
&= 1 + \frac{1}{81} - \frac{1}{6561} + \frac{5}{1594323} + \cdots \\
&\approx 1 + 0.012346 - 0.000152 + 0.000003 + \cdots \\
&\approx 1.012197
\end{aligned}
$$

So $\sqrt[3]{28} \approx 3 \times 1.012197 = 3.036591$.

**Error estimation.** The terms alternate and decrease in magnitude. The next term (the $x^4$ term)
has magnitude:

$$\left|\frac{\frac{1}{3}\cdot\left(-\frac{2}{3}\right)\cdot\left(-\frac{5}{3}\right)\cdot\left(-\frac{8}{3}\right)}{4!}\cdot\frac{1}{27^4}\right| = \frac{80}{243 \cdot 531441} \approx 6.2 \times 10^{-7}$$

So the error in the expansion of $(1 + 1/27)^{1/3}$ is at most $\approx 6.2 \times 10^{-7}$, and the
error in $\sqrt[3]{28}$ is at most $3 \times 6.2 \times 10^{-7} \approx 1.9 \times 10^{-6}$.

</details>

<hr />

## 7. Relationships Between Binomial Coefficients

### 7.1 Sum of Binomial Coefficients

We already know (from Problem 7 below) that:

$$\sum_{r=0}^{n} \binom{n}{r} = 2^n$$

This follows from setting $a = 1$, $b = 1$ in the binomial theorem.

### 7.2 Weighted Sum: $\sum r\binom{n}{r} = n \cdot 2^{n-1}$

**Theorem.** $\displaystyle\sum_{r=0}^{n} r\binom{n}{r} = n \cdot 2^{n-1}$.

_Proof (using differentiation)._

Start with $(1 + x)^n = \sum_{r=0}^{n} \binom{n}{r} x^r$.

Differentiate both sides with respect to $x$:

$$n(1 + x)^{n-1} = \sum_{r=0}^{n} r\binom{n}{r} x^{r-1}$$

Multiply through by $x$:

$$nx(1 + x)^{n-1} = \sum_{r=0}^{n} r\binom{n}{r} x^r$$

Set $x = 1$:

$$n \cdot 1 \cdot 2^{n-1} = \sum_{r=0}^{n} r\binom{n}{r}$$

Therefore $\sum_{r=0}^{n} r\binom{n}{r} = n \cdot 2^{n-1}$. $\blacksquare$

_Intuition._ If you want to select a committee of any size from $n$ people and then choose a
chairperson, you can first pick $r$ members ($\binom{n}{r}$ ways) and then a chair from those $r$
($r$ ways). Summing over all $r$ gives $\sum r\binom{n}{r}$. Alternatively, pick the chair first
($n$ ways) and then any subset of the remaining $n - 1$ people ($2^{n-1}$ ways), giving
$n \cdot 2^{n-1}$.

### 7.3 Sum of Squares: $\sum r^2\binom{n}{r} = n(n+1)2^{n-2}$

**Theorem.** $\displaystyle\sum_{r=0}^{n} r^2\binom{n}{r} = n(n+1) \cdot 2^{n-2}$.

_Proof (using differentiation)._

We have $nx(1+x)^{n-1} = \sum_{r=0}^{n} r\binom{n}{r} x^r$.

Differentiate both sides with respect to $x$:

$$n(1+x)^{n-1} + n(n-1)x(1+x)^{n-2} = \sum_{r=0}^{n} r^2\binom{n}{r} x^{r-1}$$

Multiply through by $x$:

$$nx(1+x)^{n-1} + n(n-1)x^2(1+x)^{n-2} = \sum_{r=0}^{n} r^2\binom{n}{r} x^r$$

Set $x = 1$:

$$n \cdot 2^{n-1} + n(n-1) \cdot 2^{n-2} = \sum_{r=0}^{n} r^2\binom{n}{r}$$

Factor out $n \cdot 2^{n-2}$:

$$n \cdot 2^{n-2}(2 + n - 1) = n(n+1) \cdot 2^{n-2} = \sum_{r=0}^{n} r^2\binom{n}{r} \quad \blacksquare$$

### 7.4 Vandermonde's Identity

**Theorem (Vandermonde's Identity).** For non-negative integers $n, r, m$:

$$\sum_{k=0}^{m} \binom{r}{k}\binom{n - r}{m - k} = \binom{n}{m}$$

_Proof (combinatorial)._

Consider a set of $n$ people, of which $r$ are women and $n - r$ are men. The right-hand side
$\binom{n}{m}$ counts the number of ways to choose a committee of $m$ people from all $n$.

Alternatively, we can count by cases: choose $k$ women and $m - k$ men. The number of ways to choose
$k$ women is $\binom{r}{k}$, and the number of ways to choose $m - k$ men is $\binom{n-r}{m-k}$.
Summing over all valid $k$ gives the left-hand side. $\blacksquare$

<hr />

## 8. Validity of General Binomial Expansion

### 8.1 Single Expansion Validity

When expanding $(a + bx)^n$ with non-integer $n$, we write it as
$a^n\left(1 + \frac{bx}{a}\right)^n$. The expansion is valid when:

$$\left|\frac{bx}{a}\right| \lt 1 \quad \mathrm{i.e.,} \quad |x| \lt \left|\frac{a}{b}\right|$$

:::warning Always state the range of validity when working with non-integer powers. Marks are
routinely deducted for omitting this.
:::

### 8.2 Product of Two Expansions

When a question asks for the expansion of a product of two binomial expressions, such as
$(1 + px)^a(1 + qx)^b$, each factor has its own validity range:

$$|px| \lt 1 \quad \mathrm{and} \quad |qx| \lt 1$$

The combined expansion is valid only where **both** individual expansions are valid. This means the
overall validity is the **intersection** of the two ranges, which is always the **more restrictive**
condition:

$$|x| \lt \min\left(\frac{1}{|p|}, \frac{1}{|q|}\right)$$

**Why?** The product expansion is obtained by multiplying the individual series term by term. If
either series diverges, the term-by-term multiplication is not justified, so the product expansion
may not equal the original expression.

### 8.3 More Complex Cases

For expressions involving three or more factors, the validity is the intersection of all individual
validity ranges.

For partial fraction decompositions that lead to sums of binomial expansions, the same principle
applies: the overall validity is the most restrictive individual condition.

<details>
<summary>Example 1</summary>
Find the expansion of $(1 + x)^{-2}(1 - 3x)^{-1}$ up to $x^2$, stating the validity.

$(1 + x)^{-2}$: valid for $|x| \lt 1$.

$(1 - 3x)^{-1}$: valid for $|3x| \lt 1$, i.e., $|x| \lt \frac{1}{3}$.

The combined validity is $|x| \lt \frac{1}{3}$ (the more restrictive condition).

$$(1 + x)^{-2} = 1 - 2x + 3x^2 + \cdots$$

$$(1 - 3x)^{-1} = 1 + 3x + 9x^2 + \cdots$$

Product up to $x^2$:

$$(1)(1) + [(-2)(1) + (1)(3)]x + [(3)(1) + (-2)(3) + (1)(9)]x^2$$

$$= 1 + x + (3 - 6 + 9)x^2 = 1 + x + 6x^2 + \cdots$$

</details>

<details>
<summary>Example 2</summary>
Expand $\frac{3}{(1-x)(2+x)}$ in ascending powers of $x$ up to $x^2$.

Partial fractions: $\frac{3}{(1-x)(2+x)} = \frac{A}{1-x} + \frac{B}{2+x}$.

$$3 = A(2 + x) + B(1 - x)$$

Setting $x = 1$: $3 = 3A \implies A = 1$. Setting $x = -2$: $3 = 3B \implies B = 1$.

$$\frac{3}{(1-x)(2+x)} = \frac{1}{1-x} + \frac{1}{2+x} = (1-x)^{-1} + \frac{1}{2}(1 + x/2)^{-1}$$

$(1-x)^{-1}$: valid for $|x| \lt 1$.

$(1 + x/2)^{-1}$: valid for $|x/2| \lt 1$, i.e., $|x| \lt 2$.

Combined validity: $|x| \lt 1$.

$$(1-x)^{-1} = 1 + x + x^2 + \cdots$$

$$\frac{1}{2}\left(1 + \frac{x}{2}\right)^{-1} = \frac{1}{2}\left(1 - \frac{x}{2} + \frac{x^2}{4} - \cdots\right) = \frac{1}{2} - \frac{x}{4} + \frac{x^2}{8} - \cdots$$

$$\frac{3}{(1-x)(2+x)} = \frac{3}{2} + \frac{3}{4}x + \frac{9}{8}x^2 + \cdots$$

</details>

<hr />

## 9. Problem Set

**Problem 1.** Expand $(1 + 3x)^4$.

<details>
<summary>Solution</summary>
$$(1 + 3x)^4 = \binom{4}{0} + \binom{4}{1}(3x) + \binom{4}{2}(3x)^2 + \binom{4}{3}(3x)^3 + \binom{4}{4}(3x)^4$$

$$= 1 + 12x + 54x^2 + 108x^3 + 81x^4$$

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

<hr />

**Problem 2.** Find the coefficient of $x^3$ in the expansion of $(2 - x)^6$.

<details>
<summary>Solution</summary>
The $x^3$ term comes from $r = 3$:

$$\binom{6}{3}(2)^{6-3}(-x)^3 = 20 \cdot 8 \cdot (-x^3) = -160x^3$$

Coefficient of $x^3$: $-160$.

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

<hr />

**Problem 3.** Expand $(1 + x)^{-2}$ up to the term in $x^3$, stating the range of validity.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
(1 + x)^{-2} &= 1 + (-2)x + \frac{(-2)(-3)}{2!}x^2 + \frac{(-2)(-3)(-4)}{3!}x^3 + \cdots \\
&= 1 - 2x + 3x^2 - 4x^3 + \cdots
\end{aligned}
$$

Valid for $|x| \lt 1$.

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

<hr />

**Problem 4.** Find the coefficient of $x^2$ in the expansion of $(1 - 2x)^5(1 + 3x)^4$.

<details>
<summary>Solution</summary>
$(1 - 2x)^5 = 1 - 10x + 40x^2 + \cdots$

$(1 + 3x)^4 = 1 + 12x + 54x^2 + \cdots$

Coefficient of $x^2$ in the product:

- From $(1)(54x^2)$: $54$
- From $(-10x)(12x)$: $-120$
- From $(40x^2)(1)$: $40$

Total: $54 - 120 + 40 = -26$.

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

<hr />

**Problem 5.** Use the binomial expansion to estimate $\sqrt{1.05}$ to 5 decimal places.

<details>
<summary>Solution</summary>
$$\sqrt{1.05} = (1 + 0.05)^{1/2}$$

$$= 1 + \frac{1}{2}(0.05) + \frac{\frac{1}{2} \cdot \left(-\frac{1}{2}\right)}{2}(0.05)^2 + \frac{\frac{1}{2}\left(-\frac{1}{2}\right)\left(-\frac{3}{2}\right)}{6}(0.05)^3 + \cdots$$

$$= 1 + 0.025 - 0.0003125 + 0.0000078125 - \cdots$$

$$\approx 1.024695$$

To 5 d.p.: $1.02470$.

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

<hr />

**Problem 6.** In the expansion of $(1 + ax)^n$, the coefficients of $x$, $x^2$, and $x^3$ are in
the ratio $1 : 4 : 12$. Find $a$ and $n$.

<details>
<summary>Solution</summary>
Coefficient of $x$: $na$

Coefficient of $x^2$: $\frac{n(n-1)}{2}a^2$

Coefficient of $x^3$: $\frac{n(n-1)(n-2)}{6}a^3$

Ratio $1 : 4 : 12$:

$$\frac{n(n-1)}{2}a^2 = 4na \implies \frac{(n-1)a}{2} = 4 \implies (n-1)a = 8 \quad \mathrm{--- (1)}$$

$$\frac{n(n-1)(n-2)}{6}a^3 = 12na \implies \frac{(n-1)(n-2)a^2}{6} = 12 \quad \mathrm{--- (2)}$$

From (1): $a = \frac{8}{n-1}$. Substitute into (2):

$$\frac{(n-1)(n-2)}{6} \cdot \frac{64}{(n-1)^2} = 12$$

$$\frac{64(n-2)}{6(n-1)} = 12$$

$$64(n-2) = 72(n-1)$$

$$64n - 128 = 72n - 72$$

$$-8n = 56 \implies n = -7$$

$a = \frac{8}{-8} = -1$.

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

<hr />

**Problem 7.** Prove that $\sum_{r=0}^{n} \binom{n}{r} = 2^n$.

<details>
<summary>Solution</summary>
Setting $a = 1$ and $b = 1$ in the binomial theorem:

$$(1 + 1)^n = \sum_{r=0}^{n} \binom{n}{r} 1^{n-r} 1^r = \sum_{r=0}^{n} \binom{n}{r}$$

So $\sum_{r=0}^{n} \binom{n}{r} = 2^n$. $\blacksquare$

_Intuition._ The sum of all binomial coefficients counts the total number of subsets of an
$n$-element set, which is $2^n$ (each element can either be included or excluded).

</details>
<b>If you get this wrong, revise:</b> [Binomial coefficients](#2-binomial-coefficients)

<hr />

**Problem 8.** Expand $\frac{1}{(1 + x)(1 - 2x)}$ in ascending powers of $x$ up to $x^3$, stating
the range of validity.

<details>
<summary>Solution</summary>
Using partial fractions: $\frac{1}{(1+x)(1-2x)} = \frac{1}{3}\cdot\frac{1}{1+x} + \frac{2}{3}\cdot\frac{1}{1-2x}$.

$$\frac{1}{1+x} = (1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots \quad (|x| \lt 1)$$

$$\frac{1}{1-2x} = (1-2x)^{-1} = 1 + 2x + 4x^2 + 8x^3 + \cdots \quad (|2x| \lt 1)$$

$$
\begin{aligned}
\frac{1}{(1+x)(1-2x)} &= \frac{1}{3}(1 - x + x^2 - x^3) + \frac{2}{3}(1 + 2x + 4x^2 + 8x^3) + \cdots \\
&= \frac{1}{3} + \frac{2}{3} + \left(-\frac{1}{3} + \frac{4}{3}\right)x + \left(\frac{1}{3} + \frac{8}{3}\right)x^2 + \left(-\frac{1}{3} + \frac{16}{3}\right)x^3 + \cdots \\
&= 1 + x + 3x^2 + 5x^3 + \cdots
\end{aligned}
$$

Valid for $|x| \lt \frac{1}{2}$ (the more restrictive condition).

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

<hr />

**Problem 9.** Given that the expansion of $(1 + kx)^{10}$ in ascending powers of $x$ has a
coefficient of $x^3$ equal to $1080$, find the value of $k$.

<details>
<summary>Solution</summary>
$$\binom{10}{3} k^3 = 1080$$

$$120k^3 = 1080$$

$$k^3 = 9$$

$$k = \sqrt[3]{9}$$

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

<hr />

**Problem 10.** Prove that $\sum_{r=0}^{n} (-1)^r \binom{n}{r} = 0$ for $n \geq 1$.

<details>
<summary>Solution</summary>
Setting $a = 1$ and $b = -1$ in the binomial theorem:

$$(1 - 1)^n = \sum_{r=0}^{n} \binom{n}{r} 1^{n-r}(-1)^r = \sum_{r=0}^{n} (-1)^r \binom{n}{r}$$

$0^n = 0$ for $n \geq 1$. $\blacksquare$

_Intuition._ This counts the difference between subsets of even size and subsets of odd size — which
is zero by a parity argument (there's a bijection between even-sized and odd-sized subsets: add or
remove one element).

</details>
<b>If you get this wrong, revise:</b> [Binomial coefficients](#2-binomial-coefficients)

<hr />

**Problem 11.** Find the coefficient of $x^3$ in the expansion of $(1 + x)^{-3}(1 - 2x)^{-1}$ up to
$x^3$, stating the range of validity.

<details>
<summary>Solution</summary>
First expand each factor:

$$(1 + x)^{-3} = 1 + (-3)x + \frac{(-3)(-4)}{2}x^2 + \frac{(-3)(-4)(-5)}{6}x^3 + \cdots = 1 - 3x + 6x^2 - 10x^3 + \cdots$$

$$(1 - 2x)^{-1} = 1 + 2x + 4x^2 + 8x^3 + \cdots$$

Coefficient of $x^3$ in the product:

- From $(1)(8x^3)$: $8$
- From $(-3x)(4x^2)$: $-12$
- From $(6x^2)(2x)$: $12$
- From $(-10x^3)(1)$: $-10$

Total: $8 - 12 + 12 - 10 = -2$.

Validity: $(1+x)^{-3}$ requires $|x| \lt 1$ and $(1-2x)^{-1}$ requires $|x| \lt 1/2$. Overall:
$|x| \lt 1/2$.

</details>
<b>If you get this wrong, revise:</b> [Validity of general binomial expansion](#8-validity-of-general-binomial-expansion)

<hr />

**Problem 12.** Use the binomial expansion to approximate $\sqrt[3]{126}$ to 4 decimal places.
Estimate the error in your approximation.

<details>
<summary>Solution</summary>
Write $126 = 125 + 1 = 125(1 + 1/125)$:

$$\sqrt[3]{126} = 5\left(1 + \frac{1}{125}\right)^{1/3}$$

Expand with $n = 1/3$, $x = 1/125 = 0.008$:

$$
\begin{aligned}
\left(1 + \frac{1}{125}\right)^{1/3} &= 1 + \frac{1}{3}\cdot\frac{1}{125} + \frac{\frac{1}{3}\cdot\left(-\frac{2}{3}\right)}{2}\cdot\frac{1}{15625} + \cdots \\
&= 1 + \frac{1}{375} - \frac{1}{70312.5} + \cdots \\
&\approx 1 + 0.0026667 - 0.0000142 + \cdots \\
&\approx 1.0026525
\end{aligned}
$$

$$\sqrt[3]{126} \approx 5 \times 1.0026525 = 5.01326$$

To 4 d.p.: $5.0133$.

**Error estimate.** The terms alternate and decrease. The next term (the $x^3$ term) has magnitude:

$$\left|\frac{\frac{1}{3}\cdot\left(-\frac{2}{3}\right)\cdot\left(-\frac{5}{3}\right)}{6}\cdot\frac{1}{125^3}\right| = \frac{10/162}{6} \cdot \frac{1}{1953125} \approx 5.3 \times 10^{-9}$$

The error in $\sqrt[3]{126}$ is at most $5 \times 5.3 \times 10^{-9} \approx 2.7 \times 10^{-8}$,
which is negligible for 4 decimal places. The approximation $5.0133$ is reliable.

</details>
<b>If you get this wrong, revise:</b> [Binomial approximation and error estimation](#6-binomial-approximation-and-error-estimation)

<hr />

**Problem 13.** Evaluate $\sum_{r=0}^{10} r\binom{10}{r}$.

<details>
<summary>Solution</summary>
By the identity $\sum_{r=0}^{n} r\binom{n}{r} = n \cdot 2^{n-1}$ with $n = 10$:

$$\sum_{r=0}^{10} r\binom{10}{r} = 10 \cdot 2^{9} = 10 \times 512 = 5120$$

_Verification by differentiation:_

$(1+x)^{10} = \sum_{r=0}^{10} \binom{10}{r} x^r$. Differentiate and set $x = 1$:

$$10(1+1)^9 = \sum_{r=0}^{10} r\binom{10}{r} = 10 \times 512 = 5120$$ ✓

</details>
<b>If you get this wrong, revise:</b> [Relationships between binomial coefficients](#7-relationships-between-binomial-coefficients)

<hr />

**Problem 14.** In the expansion of $(2 + 3x)^{2n}$, the ratio of the coefficient of $x^3$ to the
coefficient of $x$ is $11 : 1$. Find the value of $n$.

<details>
<summary>Solution</summary>
The general term in the expansion of $(2 + 3x)^{2n}$ is $\binom{2n}{r} 2^{2n-r}(3x)^r$.

Coefficient of $x$: $\binom{2n}{1} 2^{2n-1} \cdot 3 = 2n \cdot 2^{2n-1} \cdot 3 = 3n \cdot 2^{2n}$.

Coefficient of $x^3$:
$\binom{2n}{3} 2^{2n-3} \cdot 27 = \frac{2n(2n-1)(2n-2)}{6} \cdot 27 \cdot 2^{2n-3}$.

Ratio is $11 : 1$:

$$\frac{\displaystyle \frac{2n(2n-1)(2n-2)}{6} \cdot 27 \cdot 2^{2n-3}}{3n \cdot 2^{2n}} = 11$$

Simplify:

$$\frac{2n(2n-1)(2n-2) \cdot 27 \cdot 2^{2n-3}}{6 \cdot 3n \cdot 2^{2n}} = 11$$

$$\frac{2n(2n-1)(2n-2) \cdot 9 \cdot 2^{2n-3}}{6n \cdot 2^{2n}} = 11$$

$$\frac{(2n-1)(2n-2) \cdot 18 \cdot 2^{2n-3}}{6 \cdot 2^{2n}} = 11$$

$$\frac{(2n-1)(2n-2) \cdot 18}{6 \cdot 8} = 11$$

$$\frac{(2n-1)(2n-2) \cdot 3}{8} = 11$$

$$(2n-1)(2n-2) = \frac{88}{3}$$

This gives a non-integer, so let us recheck. We need $n$ such that the ratio equals $11$. Trying
small values:

$n = 3$: coefficient of $x^3$ is $\binom{6}{3} 2^3 \cdot 27 = 20 \cdot 8 \cdot 27 = 4320$.
Coefficient of $x$ is $6 \cdot 32 \cdot 3 = 576$. Ratio: $4320/576 = 7.5$.

$n = 4$: coefficient of $x^3$ is $\binom{8}{3} 2^5 \cdot 27 = 56 \cdot 32 \cdot 27 = 48384$.
Coefficient of $x$ is $8 \cdot 128 \cdot 3 = 3072$. Ratio: $48384/3072 \approx 15.75$.

$n = 5$: coefficient of $x^3$ is $\binom{10}{3} 2^7 \cdot 27 = 120 \cdot 128 \cdot 27 = 414720$.
Coefficient of $x$ is $10 \cdot 512 \cdot 3 = 15360$. Ratio: $414720/15360 = 27$.

Since $7.5 \lt 11 \lt 15.75$ and the ratio is increasing, there is no integer $n$ giving ratio
exactly $11$. However, solving the equation more carefully:

$$\frac{(2n-1)(2n-2)}{4} = 11$$

$$2(2n-1)(n-1) = 11$$

$$(2n-1)(n-1) = \frac{11}{2}$$

$$2n^2 - 3n + 1 = \frac{11}{2}$$

$$4n^2 - 6n - 9 = 0$$

$$n = \frac{6 \pm \sqrt{36 + 144}}{8} = \frac{6 \pm \sqrt{180}}{8} = \frac{6 \pm 6\sqrt{5}}{8} = \frac{3 \pm 3\sqrt{5}}{4}$$

Since $n$ must be a positive integer, there is no integer solution. The ratio $11 : 1$ cannot be
achieved for any positive integer $n$ with $(2+3x)^{2n}$.

(The closest integer value is $n = 4$ giving ratio $\approx 15.75$, and $n = 3$ giving $7.5$.)

</details>
<b>If you get this wrong, revise:</b> [Finding specific terms](#5-finding-specific-terms)

<hr />

**Problem 15.** Expand $\frac{2}{(1+x)^2(1-2x)}$ in ascending powers of $x$ up to $x^2$, stating the
range of validity.

<details>
<summary>Solution</summary>
First, find partial fractions. Write:

$$\frac{2}{(1+x)^2(1-2x)} = \frac{A}{1+x} + \frac{B}{(1+x)^2} + \frac{C}{1-2x}$$

$$2 = A(1+x)(1-2x) + B(1-2x) + C(1+x)^2$$

Setting $x = -2$: $2 = C(-1)^2 = C$, so $C = 2$.

Setting $x = -1$: $2 = B(3)$, so $B = \frac{2}{3}$.

Setting $x = 0$: $2 = A + B + C = A + 2/3 + 2$, so $A = 2 - 8/3 = -2/3$.

So:

$$\frac{2}{(1+x)^2(1-2x)} = -\frac{2}{3}(1+x)^{-1} + \frac{2}{3}(1+x)^{-2} + 2(1-2x)^{-1}$$

Now expand each:

$$(1+x)^{-1} = 1 - x + x^2 + \cdots \quad (|x| \lt 1)$$

$$(1+x)^{-2} = 1 - 2x + 3x^2 + \cdots \quad (|x| \lt 1)$$

$$(1-2x)^{-1} = 1 + 2x + 4x^2 + \cdots \quad (|x| \lt 1/2)$$

$$
\begin{aligned}
\frac{2}{(1+x)^2(1-2x)} &= -\frac{2}{3}(1 - x + x^2) + \frac{2}{3}(1 - 2x + 3x^2) + 2(1 + 2x + 4x^2) + \cdots \\
&= \left(-\frac{2}{3} + \frac{2}{3} + 2\right) + \left(\frac{2}{3} - \frac{4}{3} + 4\right)x + \left(-\frac{2}{3} + 2 + 8\right)x^2 + \cdots \\
&= 2 + \frac{10}{3}x + \frac{28}{3}x^2 + \cdots
\end{aligned}
$$

Validity: the most restrictive condition is $|x| \lt 1/2$ (from $(1-2x)^{-1}$).

</details>
<b>If you get this wrong, revise:</b> [Validity of general binomial expansion](#8-validity-of-general-binomial-expansion)
