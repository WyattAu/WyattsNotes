---
title: Algebraic Expressions
date: 2025-06-02T16:25:28.480Z
tags:
  - Maths
  - ALevel
categories:
  - Maths
slug: algebraic-expressions
---

## Board Coverage

| Board      | Paper   | Notes                                       |
| ---------- | ------- | ------------------------------------------- |
| AQA        | Paper 1 | Surds, indices, polynomials, factor theorem |
| Edexcel    | P1, P2  | Same core; P2 includes harder factorisation |
| OCR (A)    | Paper 1 | Similar coverage                            |
| CIE (9709) | P1      | Surds, quadratics, factor theorem           |

<hr />

## 1. Surds

**Definition.** A _surd_ is an irrational number expressible as the root of a rational number — that is, an expression of the form $\sqrt{n}$ where $n \in \mathbb{Q}^+$ and $\sqrt{n} \notin \mathbb{Q}$.

The most familiar surds are $\sqrt{2}$, $\sqrt{3}$, $\sqrt{5}$, and so on. The set of surds is a subset of the algebraic numbers, and they arise naturally whenever we solve equations of degree 2 or higher.

### 1.1 Laws of Surds

For positive real numbers $a$ and $b$:

$$
\begin{aligned}
\sqrt{a}\sqrt{b} &= \sqrt{ab} \\
\frac{\sqrt{a}}{\sqrt{b}} &= \sqrt{\frac{a}{b}} \\
(\sqrt{a})^n &= a^{n/2}
\end{aligned}
$$

These follow directly from the laws of indices (which we prove in Section 2), since $\sqrt{a} = a^{1/2}$.

**Rationalising the denominator.** If a fraction has a surd in the denominator, we multiply numerator and denominator by the surd (or its conjugate) to eliminate it.

For a denominator of the form $\sqrt{a}$, multiply by $\frac{\sqrt{a}}{\sqrt{a}}$:

$$
\begin{aligned}
\frac{1}{\sqrt{a}} &= \frac{1}{\sqrt{a}} \cdot \frac{\sqrt{a}}{\sqrt{a}} = \frac{\sqrt{a}}{a}
\end{aligned}
$$

For a denominator of the form $a + b\sqrt{c}$, multiply by the _conjugate_ $a - b\sqrt{c}$:

$$
\begin{aligned}
\frac{1}{a + b\sqrt{c}} &= \frac{a - b\sqrt{c}}{(a + b\sqrt{c})(a - b\sqrt{c})} = \frac{a - b\sqrt{c}}{a^2 - b^2 c}
\end{aligned}
$$

:::warning
A common error is to "rationalise" by splitting the fraction: $\frac{a + b\sqrt{c}}{d} \neq \frac{a}{d} + b\sqrt{\frac{c}{d}}$ in general. Always distribute the denominator correctly.
:::

### 1.2 Irrationality of $\sqrt{2}$

**Theorem.** $\sqrt{2}$ is irrational.

_Proof._ We proceed by contradiction. Assume $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{p}{q}$ where $p, q \in \mathbb{Z}^+$, $q \neq 0$, and $\gcd(p, q) = 1$ (i.e., the fraction is in lowest terms).

$$
\begin{aligned}
\sqrt{2} &= \frac{p}{q} \\
2 &= \frac{p^2}{q^2} \\
p^2 &= 2q^2
\end{aligned}
$$

Since $p^2 = 2q^2$, we have that $p^2$ is even. A standard result (proved below) tells us that if $p^2$ is even, then $p$ is even. So $p = 2k$ for some integer $k$.

Substituting: $(2k)^2 = 2q^2$, so $4k^2 = 2q^2$, hence $q^2 = 2k^2$.

By the same argument, $q^2$ is even, so $q$ is even. But this contradicts $\gcd(p, q) = 1$ since both $p$ and $q$ are divisible by 2. Therefore our assumption was false, and $\sqrt{2}$ is irrational. $\blacksquare$

_Lemma._ If $p^2$ is even, then $p$ is even.

_Proof._ The contrapositive: if $p$ is odd, then $p^2$ is odd. If $p = 2k + 1$, then $p^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$, which is odd. $\blacksquare$

_Intuition._ This proof exploits the structure of divisibility: the number 2 has a unique prime factorisation, and squaring preserves parity. The contradiction arises because $2$ "forces" factors of 2 into both $p$ and $q$, making the fraction reducible.

<hr />

## 2. Indices (Exponent Laws)

**Definition.** For $a > 0$ and $n \in \mathbb{Z}^+$, we define $a^n = \underbrace{a \times a \times \cdots \times a}_{n \mathrm{ times}}$. We extend this definition as follows:

$$
\begin{aligned}
a^0 &= 1 \quad \mathrm{for } a \neq 0 \\
a^{-n} &= \frac{1}{a^n} \quad \mathrm{for } a \neq 0 \\
a^{1/n} &= \sqrt[n]{a} \quad \mathrm{(the positive root for } a > 0)
\end{aligned}
$$

### 2.1 Laws of Indices

For $a, b > 0$ and $m, n \in \mathbb{R}$:

$$
\begin{aligned}
a^m \cdot a^n &= a^{m+n} \\
\frac{a^m}{a^n} &= a^{m-n} \\
(a^m)^n &= a^{mn} \\
(ab)^n &= a^n b^n \\
\left(\frac{a}{b}\right)^n &= \frac{a^n}{b^n}
\end{aligned}
$$

_Proof of $a^m \cdot a^n = a^{m+n}$ for positive integer exponents._

$$
\begin{aligned}
a^m \cdot a^n &= \underbrace{a \cdot a \cdots a}_{m} \cdot \underbrace{a \cdot a \cdots a}_{n} \\
&= \underbrace{a \cdot a \cdots a}_{m + n} = a^{m+n}
\end{aligned}
$$

The extension to rational and real exponents requires more sophisticated machinery (continuity arguments and the exponential function), which we develop in [Exponentials and Logarithms](./09-exponentials-and-logarithms.md).

_Intuition._ Exponentiation is repeated multiplication, so multiplying two powers of the same base adds the counts. Just as $3 \times 5$ counts $3 + 5$ groups of size 1, $a^3 \cdot a^5$ counts $3 + 5 = 8$ factors of $a$.

<hr />

## 3. Algebraic Manipulation

### 3.1 Expanding Brackets

The distributive law is the foundation: $a(b + c) = ab + ac$.

For two brackets: $(a + b)(c + d) = ac + ad + bc + bd$.

_Proof._ By applying the distributive law twice:

$$
\begin{aligned}
(a + b)(c + d) &= a(c + d) + b(c + d) \\
&= ac + ad + bc + bd \quad \blacksquare
\end{aligned}
$$

### 3.2 Factorisation

Factorisation is the reverse of expansion. The key techniques are:

- **Common factors:** $ab + ac = a(b + c)$
- **Difference of two squares:** $a^2 - b^2 = (a - b)(a + b)$
- **Trinomial (quadratic):** $ax^2 + bx + c = (px + q)(rx + s)$ where $pr = a$, $ps + qr = b$, $qs = c$
- **Grouping:** $ab + ac + db + dc = a(b + c) + d(b + c) = (a + d)(b + c)$

**Theorem (Difference of Two Squares).** $a^2 - b^2 = (a - b)(a + b)$.

_Proof._ Direct expansion:

$$
\begin{aligned}
(a - b)(a + b) &= a^2 + ab - ab - b^2 = a^2 - b^2 \quad \blacksquare
\end{aligned}
$$

### 3.3 Factorising Cubics

A cubic $ax^3 + bx^2 + cx + d$ can be factorised by finding one root $\alpha$ (using the Factor Theorem), then dividing by $(x - \alpha)$ to obtain a quadratic, which can then be factorised.

<hr />

## 4. Polynomial Division

### 4.1 Long Division

Polynomial long division mirrors integer long division exactly. We demonstrate with an example, then state the general theorem.

**Example.** Divide $x^3 + 2x^2 - 5x + 6$ by $x - 1$.

$$
\begin{aligned}
x^3 + 2x^2 - 5x + 6 &= (x - 1)(x^2) + \mathrm{remainder of } x^3 - x^2 \\
&= (x - 1)(x^2) + 3x^2 - 5x + 6 \\
&= (x - 1)(x^2 + 3x) + \mathrm{remainder of } 3x^2 - 3x \\
&= (x - 1)(x^2 + 3x) - 2x + 6 \\
&= (x - 1)(x^2 + 3x - 2) + \mathrm{remainder of } -2x + 2 \\
&= (x - 1)(x^2 + 3x - 2) - 2(x - 1) \\
&= (x - 1)(x^2 + 3x - 2) + 4
\end{aligned}
$$

So the quotient is $x^2 + 3x - 2$ with remainder $4$.

More systematically, the division algorithm tells us:

**Theorem (Polynomial Division Algorithm).** For polynomials $f(x)$ and $g(x)$ with $g(x) \neq 0$, there exist unique polynomials $q(x)$ (the quotient) and $r(x)$ (the remainder) such that:

$$f(x) = g(x) \cdot q(x) + r(x)$$

where $\deg(r) < \deg(g)$ or $r(x) = 0$.

_Intuition._ This is exactly analogous to integer division: $47 = 5 \times 9 + 2$, where $0 \leq 2 < 5$. In polynomials, the "size" ordering is replaced by degree, and the remainder must have smaller degree than the divisor.

### 4.2 Why Polynomial Division Mirrors Integer Long Division

The structural analogy is deep. Both are instances of a _Euclidean domain_ — an algebraic structure where we can perform division with remainder. In $\mathbb{Z}$, the "degree" is the absolute value; in $\mathbb{R}[x]$, the degree is the polynomial degree. The algorithm is the same: at each step, eliminate the leading term.

<hr />

## 5. The Factor Theorem and Remainder Theorem

### 5.1 The Remainder Theorem

**Theorem (Remainder Theorem).** If a polynomial $f(x)$ is divided by $(x - a)$, the remainder is $f(a)$.

_Proof._ By the division algorithm, $f(x) = (x - a) \cdot q(x) + r$, where $r$ is a constant (since $\deg(r) < \deg(x - a) = 1$).

Substituting $x = a$:

$$
\begin{aligned}
f(a) &= (a - a) \cdot q(a) + r = 0 \cdot q(a) + r = r \quad \blacksquare
\end{aligned}
$$

_Intuition._ When you plug in $x = a$, the $(x - a)$ factor vanishes, leaving only the remainder. The remainder is the "leftover" that doesn't contain the factor $(x - a)$.

### 5.2 The Factor Theorem

**Theorem (Factor Theorem).** $(x - a)$ is a factor of $f(x)$ if and only if $f(a) = 0$.

_Proof._

($\Rightarrow$) If $(x - a)$ is a factor, then $f(x) = (x - a) \cdot q(x)$. Setting $x = a$: $f(a) = (a - a) \cdot q(a) = 0$.

($\Leftarrow$) If $f(a) = 0$, then by the Remainder Theorem, the remainder upon division by $(x - a)$ is $f(a) = 0$. So $f(x) = (x - a) \cdot q(x)$, meaning $(x - a)$ is a factor. $\blacksquare$

_Intuition._ The Factor Theorem connects algebra (polynomials) to geometry (roots on the $x$-axis). A root $x = a$ means the graph crosses the $x$-axis at $a$, which means $(x - a)$ must divide the polynomial.

<details>
<summary>Example</summary>
Show that $(x - 2)$ is a factor of $f(x) = x^3 - 3x^2 + 4$.

By the Factor Theorem, we check $f(2)$:

$$
\begin{aligned}
f(2) &= 2^3 - 3(2)^2 + 4 = 8 - 12 + 4 = 0
\end{aligned}
$$

Since $f(2) = 0$, $(x - 2)$ is a factor. To find the remaining factor, we perform polynomial division:

$$
\begin{aligned}
x^3 - 3x^2 + 4 &= (x - 2)(x^2 - x - 2) \\
&= (x - 2)(x - 2)(x + 1) \\
&= (x - 2)^2(x + 1)
\end{aligned}
$$
</details>

<hr />

## 6. Simplifying Algebraic Fractions

### 6.1 Cancellation

$$\frac{ab + ac}{ad + ae} = \frac{a(b + c)}{a(d + e)} = \frac{b + c}{d + e}$$

:::warning
You can only cancel _factors_, not terms. $\frac{x + 3}{x}$ is NOT equal to $3$. The $x$ in the denominator is a factor of the whole expression, but the $x$ in the numerator is only one term.
:::

### 6.2 Addition and Subtraction

Find a common denominator, then combine:

$$
\begin{aligned}
\frac{1}{x + 1} + \frac{2}{x - 3} &= \frac{(x - 3) + 2(x + 1)}{(x + 1)(x - 3)} \\
&= \frac{x - 3 + 2x + 2}{(x + 1)(x - 3)} \\
&= \frac{3x - 1}{x^2 - 2x - 3}
\end{aligned}
$$

<hr />

## 7. Problem Set

**Problem 1.** Simplify $\frac{\sqrt{3} + 1}{\sqrt{3} - 1}$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\frac{\sqrt{3} + 1}{\sqrt{3} - 1} &= \frac{(\sqrt{3} + 1)(\sqrt{3} + 1)}{(\sqrt{3} - 1)(\sqrt{3} + 1)} \\
&= \frac{3 + 2\sqrt{3} + 1}{3 - 1} \\
&= \frac{4 + 2\sqrt{3}}{2} = 2 + \sqrt{3}
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Rationalising denominators](#11-rationalising-the-denominator)

<hr />

**Problem 2.** Solve $(2^{x})^3 \cdot 2^{4-x} = 128$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
2^{3x} \cdot 2^{4 - x} &= 128 \\
2^{3x + 4 - x} &= 2^7 \\
2^{2x + 4} &= 2^7 \\
2x + 4 &= 7 \\
x &= \frac{3}{2}
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Laws of indices](#2-indices-exponent-laws)

<hr />

**Problem 3.** Factorise fully $x^3 - 6x^2 + 11x - 6$.

<details>
<summary>Solution</summary>
Try $f(1) = 1 - 6 + 11 - 6 = 0$. So $(x - 1)$ is a factor.

Divide $x^3 - 6x^2 + 11x - 6$ by $(x - 1)$:

$$
\begin{aligned}
x^3 - 6x^2 + 11x - 6 &= (x - 1)(x^2 - 5x + 6) \\
&= (x - 1)(x - 2)(x - 3)
\end{aligned}
$$
</details>
<b>If you get this wrong, revise:</b> [Factor theorem](#52-the-factor-theorem)

<hr />

**Problem 4.** When $f(x) = 2x^3 + ax^2 + bx - 12$ is divided by $(x - 1)$ the remainder is $-6$, and $(x + 2)$ is a factor. Find $a$ and $b$.

<details>
<summary>Solution</summary>
By the Remainder Theorem: $f(1) = -6$:

$$
\begin{aligned}
2(1)^3 + a(1)^2 + b(1) - 12 &= -6 \\
2 + a + b - 12 &= -6 \\
a + b &= 4 \quad \mathrm{--- (1)}
\end{aligned}
$$

By the Factor Theorem: $f(-2) = 0$:

$$
\begin{aligned}
2(-2)^3 + a(-2)^2 + b(-2) - 12 &= 0 \\
-16 + 4a - 2b - 12 &= 0 \\
4a - 2b &= 28 \\
2a - b &= 14 \quad \mathrm{--- (2)}
\end{aligned}
$$

Adding (1) and (2): $3a = 18$, so $a = 6$. Then $b = 4 - 6 = -2$.
</details>
<b>If you get this wrong, revise:</b> [Remainder theorem](#51-the-remainder-theorem)

<hr />

**Problem 5.** Simplify $\left(\frac{8x^6}{27y^3}\right)^{-2/3}$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\left(\frac{8x^6}{27y^3}\right)^{-2/3} &= \left(\frac{27y^3}{8x^6}\right)^{2/3} \\
&= \frac{(27)^{2/3} \cdot (y^3)^{2/3}}{(8)^{2/3} \cdot (x^6)^{2/3}} \\
&= \frac{9y^2}{4x^4}
\end{aligned}
$$

Since $27^{1/3} = 3$ and $8^{1/3} = 2$.
</details>
<b>If you get this wrong, revise:</b> [Laws of indices](#2-indices-exponent-laws)

<hr />

**Problem 6.** Express $\frac{2x + 1}{x^2 + x - 6}$ in partial fractions.

<details>
<summary>Solution</summary>
First factorise: $x^2 + x - 6 = (x + 3)(x - 2)$.

$$
\begin{aligned}
\frac{2x + 1}{(x + 3)(x - 2)} &= \frac{A}{x + 3} + \frac{B}{x - 2} \\
2x + 1 &= A(x - 2) + B(x + 3)
\end{aligned}
$$

Setting $x = -3$: $-6 + 1 = A(-5)$, so $A = 1$.

Setting $x = 2$: $4 + 1 = B(5)$, so $B = 1$.

$$\frac{2x + 1}{(x + 3)(x - 2)} = \frac{1}{x + 3} + \frac{1}{x - 2}$$
</details>
<b>If you get this wrong, revise:</b> [Algebraic fractions](#6-simplifying-algebraic-fractions)

<hr />

**Problem 7.** Given $f(x) = x^4 - x^3 - 7x^2 + x + 6$, show that $(x - 1)$, $(x + 1)$, and $(x - 3)$ are all factors, and hence factorise $f(x)$ completely.

<details>
<summary>Solution</summary>
$f(1) = 1 - 1 - 7 + 1 + 6 = 0$ ✓

$f(-1) = 1 + 1 - 7 - 1 + 6 = 0$ ✓

$f(3) = 81 - 27 - 63 + 3 + 6 = 0$ ✓

Since $f$ is degree 4 with three known linear factors:

$$
\begin{aligned}
f(x) &= (x - 1)(x + 1)(x - 3)(px + q)
\end{aligned}
$$

The product $(x-1)(x+1)(x-3) = (x^2-1)(x-3) = x^3 - 3x^2 - x + 3$.

Comparing leading coefficients: $p = 1$.

Comparing constant terms: $(-1)(1)(-3)(q) = 6$, so $3q = 6$, $q = 2$.

$$f(x) = (x - 1)(x + 1)(x - 3)(x + 2)$$
</details>
<b>If you get this wrong, revise:</b> [Factor theorem](#52-the-factor-theorem)

<hr />

**Problem 8.** Prove that $\sqrt{3}$ is irrational.

<details>
<summary>Solution</summary>
Assume $\sqrt{3} = \frac{p}{q}$ in lowest terms, $p, q \in \mathbb{Z}^+$, $\gcd(p, q) = 1$.

$$
\begin{aligned}
3 &= \frac{p^2}{q^2} \\
p^2 &= 3q^2
\end{aligned}
$$

So $3 \mid p^2$, which means $3 \mid p$ (since 3 is prime). Write $p = 3k$:

$$
\begin{aligned}
9k^2 &= 3q^2 \\
q^2 &= 3k^2
\end{aligned}
$$

So $3 \mid q^2$, hence $3 \mid q$. But $\gcd(p, q) = 1$ and both are divisible by 3 — contradiction. $\blacksquare$
</details>
<b>If you get this wrong, revise:</b> [Irrationality of surds](#12-irrationality-of-sqrt2)

<hr />

**Problem 9.** Divide $3x^3 + 5x^2 - 10x + 8$ by $x + 2$. State the quotient and remainder.

<details>
<summary>Solution</summary>
Using long division:

$3x^3 \div x = 3x^2$. Multiply: $3x^2(x + 2) = 3x^3 + 6x^2$. Subtract: $-x^2 - 10x$.

$-x^2 \div x = -x$. Multiply: $-x(x + 2) = -x^2 - 2x$. Subtract: $-8x + 8$.

$-8x \div x = -8$. Multiply: $-8(x + 2) = -8x - 16$. Subtract: $24$.

Quotient: $3x^2 - x - 8$, Remainder: $24$.

Verification: $(x + 2)(3x^2 - x - 8) + 24 = 3x^3 - x^2 - 8x + 6x^2 - 2x - 16 + 24 = 3x^3 + 5x^2 - 10x + 8$ ✓
</details>
<b>If you get this wrong, revise:</b> [Polynomial division](#4-polynomial-division)

<hr />

**Problem 10.** Solve $\frac{3}{x + 1} - \frac{1}{x - 2} = 1$.

<details>
<summary>Solution</summary>
$$
\begin{aligned}
\frac{3(x - 2) - (x + 1)}{(x + 1)(x - 2)} &= 1 \\
\frac{3x - 6 - x - 1}{x^2 - x - 2} &= 1 \\
\frac{2x - 7}{x^2 - x - 2} &= 1 \\
2x - 7 &= x^2 - x - 2 \\
x^2 - 3x + 5 &= 0
\end{aligned}
$$

Discriminant: $\Delta = 9 - 20 = -11 < 0$. No real solutions.
</details>
<b>If you get this wrong, revise:</b> [Algebraic fractions](#6-simplifying-algebraic-fractions) and [Quadratics](./02-quadratics.md)

<hr />

**Problem 11.** Given that $x^3 + ax^2 + bx + c$ is exactly divisible by $(x - 1)^2$ and leaves remainder $12$ when divided by $(x + 2)$, find $a$, $b$, and $c$.

<details>
<summary>Solution</summary>
Since $(x - 1)^2$ is a factor, both $f(1) = 0$ and $f'(1) = 0$.

$$
\begin{aligned}
f(1) &= 1 + a + b + c = 0 \quad \mathrm{--- (1)} \\
f'(x) &= 3x^2 + 2ax + b \\
f'(1) &= 3 + 2a + b = 0 \quad \mathrm{--- (2)}
\end{aligned}
$$

Also $f(-2) = 12$:

$$
\begin{aligned}
-8 + 4a - 2b + c &= 12 \\
4a - 2b + c &= 20 \quad \mathrm{--- (3)}
\end{aligned}
$$

From (2): $b = -3 - 2a$.

From (1): $c = -1 - a - b = -1 - a + 3 + 2a = 2 + a$.

Substituting into (3): $4a - 2(-3 - 2a) + (2 + a) = 20$

$$4a + 6 + 4a + 2 + a = 20 \implies 9a + 8 = 20 \implies a = \frac{12}{9} = \frac{4}{3}$$

$$b = -3 - \frac{8}{3} = -\frac{17}{3}, \quad c = 2 + \frac{4}{3} = \frac{10}{3}$$
</details>
<b>If you get this wrong, revise:</b> [Remainder and Factor theorems](#5-the-factor-theorem-and-remainder-theorem)

<hr />

**Problem 12.** Simplify $\frac{x^2 - 9}{x^2 + 5x + 6} \div \frac{x^2 - 4x + 3}{x^2 - x - 6}$.

<details>
<summary>Solution</summary>
Factorise all quadratics:

$$
\begin{aligned}
\frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} \div \frac{(x - 1)(x - 3)}{(x - 3)(x + 2)} &= \frac{(x - 3)(x + 3)}{(x + 2)(x + 3)} \times \frac{(x - 3)(x + 2)}{(x - 1)(x - 3)} \\
&= \frac{(x - 3)^2(x + 3)(x + 2)}{(x + 2)(x + 3)(x - 1)(x - 3)} \\
&= \frac{x - 3}{x - 1}
\end{aligned}
$$

for $x \neq -3, -2, 1, 3$.
</details>
<b>If you get this wrong, revise:</b> [Factorisation](#32-factorisation) and [Algebraic fractions](#6-simplifying-algebraic-fractions)

<hr />

**Problem 13.** Find the value of $k$ such that $x^2 + kx + (k + 3)$ is a perfect square.

<details>
<summary>Solution</summary>
A perfect square has discriminant $\Delta = 0$:

$$
\begin{aligned}
k^2 - 4(k + 3) &= 0 \\
k^2 - 4k - 12 &= 0 \\
(k - 6)(k + 2) &= 0
\end{aligned}
$$

$k = 6$: gives $x^2 + 6x + 9 = (x + 3)^2$ ✓

$k = -2$: gives $x^2 - 2x + 1 = (x - 1)^2$ ✓
</details>
<b>If you get this wrong, revise:</b> [Quadratics](./02-quadratics.md)
