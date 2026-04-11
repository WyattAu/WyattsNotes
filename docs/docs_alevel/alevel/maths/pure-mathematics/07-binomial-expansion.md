---
title: Binomial Expansion
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

:::info
AQA provides the binomial expansion formula in the formula booklet. Edexcel does not —
memorise it.
:::

---

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

---

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

---

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

---

## 4. General Binomial Expansion

When $n$ is not a positive integer (e.g., $n$ is negative or fractional), the expansion becomes an
_infinite series_.

**Theorem (General Binomial Theorem).** For $|x| < 1$ and any $n \in \mathbb{R}$:

$$(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$$

$$= \sum_{r=0}^{\infty} \binom{n}{r} x^r$$

where $\binom{n}{r} = \frac{n(n-1)(n-2)\cdots(n-r+1)}{r!}$.

**Note.** When $n$ is a positive integer, the series terminates at $r = n$ (since $\binom{n}{r} = 0$
for $r > n$). When $n$ is not a positive integer, the series is infinite.

**Convergence.** The series converges when $|x| < 1$. This condition is essential.

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

Valid for $|-2x| < 1$, i.e., $|x| < \frac{1}{2}$.

</details>

### 4.1 Expanding $(a + bx)^n$

To expand $(a + bx)^n$, first factor out $a$:

$$(a + bx)^n = a^n\left(1 + \frac{b}{a}x\right)^n$$

Then expand $\left(1 + \frac{b}{a}x\right)^n$ using the general binomial theorem. The convergence
condition becomes $\left|\frac{b}{a}x\right| < 1$.

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

Valid for $\left|\frac{x}{4}\right| < 1$, i.e., $|x| < 4$.

</details>

---

## 5. Problem Set

**Problem 1.** Expand $(1 + 3x)^4$.

<details>
<summary>Solution</summary>
$$(1 + 3x)^4 = \binom{4}{0} + \binom{4}{1}(3x) + \binom{4}{2}(3x)^2 + \binom{4}{3}(3x)^3 + \binom{4}{4}(3x)^4$$

$$= 1 + 12x + 54x^2 + 108x^3 + 81x^4$$

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

---

**Problem 2.** Find the coefficient of $x^3$ in the expansion of $(2 - x)^6$.

<details>
<summary>Solution</summary>
The $x^3$ term comes from $r = 3$:

$$\binom{6}{3}(2)^{6-3}(-x)^3 = 20 \cdot 8 \cdot (-x^3) = -160x^3$$

Coefficient of $x^3$: $-160$.

</details>
<b>If you get this wrong, revise:</b> [Binomial theorem](#3-the-binomial-theorem)

---

**Problem 3.** Expand $(1 + x)^{-2}$ up to the term in $x^3$, stating the range of validity.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
(1 + x)^{-2} &= 1 + (-2)x + \frac{(-2)(-3)}{2!}x^2 + \frac{(-2)(-3)(-4)}{3!}x^3 + \cdots \\
&= 1 - 2x + 3x^2 - 4x^3 + \cdots
\end{aligned}
$$

Valid for $|x| < 1$.

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

---

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

---

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

---

**Problem 6.** In the expansion of $(1 + ax)^n$, the coefficients of $x$, $x^2$, and $x^3$ are in
the ratio $1 : 4 : 12$. Find $a$ and $n$.

<details>
<summary>Solution</summary>
Coefficient of $x$: $na$

Coefficient of $x^2$: $\frac{n(n-1)}{2}a^2$

Coefficient of $x^3$: $\frac{n(n-1)(n-2)}{6}a^3$

Ratio $1 : 4 : 12$:

$$\frac{n(n-1)}{2}a^2 = 4na \implies \frac{(n-1)a}{2} = 4 \implies (n-1)a = 8 \quad \text{--- (1)}$$

$$\frac{n(n-1)(n-2)}{6}a^3 = 12na \implies \frac{(n-1)(n-2)a^2}{6} = 12 \quad \text{--- (2)}$$

From (1): $a = \frac{8}{n-1}$. Substitute into (2):

$$\frac{(n-1)(n-2)}{6} \cdot \frac{64}{(n-1)^2} = 12$$

$$\frac{64(n-2)}{6(n-1)} = 12$$

$$64(n-2) = 72(n-1)$$

$$64n - 128 = 72n - 72$$

$$-8n = 56 \implies n = -7$$

$a = \frac{8}{-8} = -1$.

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

---

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

---

**Problem 8.** Expand $\frac{1}{(1 + x)(1 - 2x)}$ in ascending powers of $x$ up to $x^3$, stating
the range of validity.

<details>
<summary>Solution</summary>
Using partial fractions: $\frac{1}{(1+x)(1-2x)} = \frac{1}{3}\cdot\frac{1}{1+x} + \frac{2}{3}\cdot\frac{1}{1-2x}$.

$$\frac{1}{1+x} = (1+x)^{-1} = 1 - x + x^2 - x^3 + \cdots \quad (|x| < 1)$$

$$\frac{1}{1-2x} = (1-2x)^{-1} = 1 + 2x + 4x^2 + 8x^3 + \cdots \quad (|2x| < 1)$$

$$
\begin{aligned}
\frac{1}{(1+x)(1-2x)} &= \frac{1}{3}(1 - x + x^2 - x^3) + \frac{2}{3}(1 + 2x + 4x^2 + 8x^3) + \cdots \\
&= \frac{1}{3} + \frac{2}{3} + \left(-\frac{1}{3} + \frac{4}{3}\right)x + \left(\frac{1}{3} + \frac{8}{3}\right)x^2 + \left(-\frac{1}{3} + \frac{16}{3}\right)x^3 + \cdots \\
&= 1 + x + 3x^2 + 5x^3 + \cdots
\end{aligned}
$$

Valid for $|x| < \frac{1}{2}$ (the more restrictive condition).

</details>
<b>If you get this wrong, revise:</b> [General binomial expansion](#4-general-binomial-expansion)

---

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

---

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
