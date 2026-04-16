---
title: Number and Algebra
date: 2025-05-10T15:41:14.714Z
tags:
  - maths
categories:
  - maths
slug: number-algebra
---

## Sets

A set is a collection of distinct elements, written by listing its members inside curly braces or by
specifying a property that its members satisfy.

### Notation

- $\emptyset$ — the empty set (contains no elements)
- $x \in X$ — the element $x$ belongs to the set $X$
- $x \notin X$ — the element $x$ does not belong to $X$
- $A \subseteq B$ — $A$ is a subset of $B$: every element of $A$ is also an element of $B$
- $|A|$ — the cardinality (number of elements) of a finite set $A$
- $\mathcal{P}(A)$ — the power set of $A$: the set of all subsets of $A$

### Set-Builder Notation

A set can be defined by a property:

$$
\{x \in \mathbb{R} \mid x^2 - 4 = 0\} = \{-2, 2\}
$$

The vertical bar is read "such that."

### Set Operations

Let $A$ and $B$ be subsets of a universal set $U$.

- **Union:** $A \cup B = \{x \in U \mid x \in A \text{ or } x \in B\}$
- **Intersection:** $A \cap B = \{x \in U \mid x \in A \text{ and } x \in B\}$
- **Complement:** $A' = \{x \in U \mid x \notin A\}$
- **Set difference:** $A \setminus B = \{x \in A \mid x \notin B\}$

These operations are conveniently visualised with Venn diagrams. In a Venn diagram, the universal
set $U$ is drawn as a rectangle, and subsets are drawn as overlapping circles. The union $A \cup B$
is the entire region covered by either circle; the intersection $A \cap B$ is the overlapping
region; the complement $A'$ is everything in the rectangle outside the circle for $A$.

### De Morgan's Laws

**Theorem.** For any subsets $A$ and $B$ of a universal set $U$:

$$(A \cup B)' = A' \cap B'$$

$$(A \cap B)' = A' \cup B'$$

_Proof of the first law._ We show mutual inclusion.

($\subseteq$) Suppose $x \in (A \cup B)'$. Then $x \notin A \cup B$, so $x \notin A$ and
$x \notin B$. Hence $x \in A'$ and $x \in B'$, which means $x \in A' \cap B'$.

($\supseteq$) Suppose $x \in A' \cap B'$. Then $x \in A'$ and $x \in B'$, so $x \notin A$ and
$x \notin B$. Therefore $x \notin A \cup B$, giving $x \in (A \cup B)'$.

The second law follows by symmetry or by applying the first law to $A'$ and $B'$. $\blacksquare$

### Power Sets

The **power set** $\mathcal{P}(A)$ of a set $A$ is the set of all subsets of $A$, including
$\emptyset$ and $A$ itself.

If $|A| = n$, then $|\mathcal{P}(A)| = 2^n$.

<details>
<summary>Worked example: Power set</summary>

Let $A = \{1, 2, 3\}$. Then
$\mathcal{P}(A) = \big\{\emptyset,\, \{1\},\, \{2\},\, \{3\},\, \{1,2\},\, \{1,3\},\, \{2,3\},\, \{1,2,3\}\big\}$.

There are $2^3 = 8$ subsets, as expected.

</details>

### Cardinality of Finite Sets

For finite sets $A$ and $B$:

$$|A \cup B| = |A| + |B| - |A \cap B|$$

This is the **inclusion-exclusion principle** for two sets. It subtracts the overlap that would
otherwise be double-counted.

For three sets $A$, $B$, $C$:

$$|A \cup B \cup C| = |A| + |B| + |C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

<details>
<summary>Worked example: Cardinality</summary>

In a class of 40 students, 25 study Physics, 20 study Chemistry, and 10 study both. How many study
neither subject?

$|P \cup C| = |P| + |C| - |P \cap C| = 25 + 20 - 10 = 35$.

The number studying neither is $40 - 35 = 5$.

</details>

## Functions

A function $f$ is an assignment from a **domain** ($X$, the set of acceptable inputs) to a
**codomain** ($Y$, the set into which all outputs must fall), such that:

- Every element in $X$ is mapped to an element in $Y$: $\forall x \in X,\; f(x) \in Y$
- No element in $X$ is mapped to more than one element in $Y$: $f(x_1) = f(x_2) \implies x_1 = x_2$

### Notation

A function $f$ with domain $X$ and codomain $Y$:

$$f: X \to Y$$

<details>
<summary>Non-examples of functions</summary>

- $f_1: \mathbb{R}^+ \to \mathbb{R},\; f(x) = \pm\sqrt{x}$ — Since $x$ maps to two values, $f_1$ is
  not a function.
- $f_2: \mathbb{R} \to \mathbb{R},\; f_2(x) = \frac{1}{x}$ — At $x = 0$, $f_2(0)$ is undefined, so
  not every element of the domain is mapped. Redefine as
  $f_2: \mathbb{R} \setminus \{0\} \to \mathbb{R}$.
- $f_3: \emptyset \to Y$ — Since no elements are in the domain, uniqueness is vacuously satisfied.
  This is a valid (empty) function.

</details>

### Range

The **range** ($A$) of a function $f: X \to Y$ is the set of all values actually produced:

$$A = \{f(x) \mid x \in X\}, \quad A \subseteq Y$$

### Classes of Functions

- **Surjective (onto):** Every element of the codomain is hit:
  $\forall y \in Y,\; \exists x \in X,\; y = f(x)$
- **Injective (one-to-one):** Distinct inputs give distinct outputs:
  $f(x_1) = f(x_2) \implies x_1 = x_2$
- **Bijective:** Both surjective and injective
- **Odd:** $f(-x) = -f(x)$ for all $x \in \mathbb{R}$
- **Even:** $f(-x) = f(x)$ for all $x \in \mathbb{R}$

### Injectivity, Surjectivity, and Bijectivity — Worked Examples

<details>
<summary>Example: Determining injectivity and surjectivity</summary>

Let $f: \mathbb{R} \to \mathbb{R},\; f(x) = x^2$.

_Injective?_ No. $f(1) = f(-1) = 1$, so distinct inputs map to the same output. (This is also an
even function.)

_Surjective?_ No. There is no $x \in \mathbb{R}$ such that $f(x) = -1$, so
$-1 \notin \text{range}(f)$.

The range is $[0, \infty)$, a proper subset of $\mathbb{R}$.

</details>

<details>
<summary>Example: Proving a function is bijective</summary>

Let $f: \mathbb{R} \to \mathbb{R},\; f(x) = 2x + 3$.

_Injective:_ Suppose $f(x_1) = f(x_2)$. Then $2x_1 + 3 = 2x_2 + 3$, so $x_1 = x_2$.

_Surjective:_ Let $y \in \mathbb{R}$. We need $2x + 3 = y$, i.e. $x = \frac{y - 3}{2}$. Since
$\frac{y-3}{2} \in \mathbb{R}$, every $y$ is in the range.

Therefore $f$ is bijective.

</details>

### Inverse Functions

If $f: X \to Y$ is bijective, the **inverse function** $f^{-1}: Y \to X$ exists and satisfies:

$$f^{-1}(f(x)) = x \quad \text{for all } x \in X, \qquad f(f^{-1}(y)) = y \quad \text{for all } y \in Y$$

To find $f^{-1}$: write $y = f(x)$, solve for $x$ in terms of $y$, then interchange $x$ and $y$.

**Existence condition:** A function has an inverse (on its given domain and codomain) if and only if
it is bijective.

<details>
<summary>Example: Finding an inverse function</summary>

Let $f: \mathbb{R} \to \mathbb{R},\; f(x) = \frac{2x + 1}{x - 3}$, with domain
$\mathbb{R} \setminus \{3\}$.

Set $y = \frac{2x+1}{x-3}$. Then $y(x-3) = 2x+1$, so $yx - 3y = 2x + 1$, hence $x(y-2) = 3y+1$,
giving $x = \frac{3y+1}{y-2}$.

Therefore $f^{-1}(x) = \frac{3x+1}{x-2}$ with domain $\mathbb{R} \setminus \{2\}$.

</details>

### Self-Inverse Functions

A function $f$ is **self-inverse** if $f(f(x)) = x$ for all $x$ in the domain, i.e. $f^{-1} = f$.

Common examples: $f(x) = \frac{1}{x}$ on $\mathbb{R} \setminus \{0\}$; $f(x) = a - x$ on
$\mathbb{R}$.

### Domain Restriction to Achieve Injectivity

A non-injective function can be made injective by restricting its domain.

<details>
<summary>Example: Restricting domain</summary>

$f(x) = x^2$ is not injective on $\mathbb{R}$ since $f(1) = f(-1)$. But by restricting to
$[0, \infty)$, every non-negative real has exactly one non-negative square root, so
$f: [0, \infty) \to [0, \infty)$ is bijective with inverse $f^{-1}(x) = \sqrt{x}$.

Similarly, $f: (-\infty, 0] \to [0, \infty),\; f(x) = x^2$ is bijective with inverse
$f^{-1}(x) = -\sqrt{x}$.

</details>

## Scientific Notation and Approximation

### Scientific Notation

A number in scientific notation has the form:

$$a = b \times 10^k, \quad b \in \mathbb{R},\; 1 \le |b| \lt 10,\; k \in \mathbb{Z}$$

### Multiplication of Numbers in Scientific Notation

Let $a_1 = b_1 \times 10^{k_1}$ and $a_2 = b_2 \times 10^{k_2}$. Then:

$$a_1 \cdot a_2 = b_1 \cdot b_2 \times 10^{k_1 + k_2}$$

If $|b_1 \cdot b_2| \ge 10$ or $|b_1 \cdot b_2| \lt 1$, adjust the mantissa back into $[1, 10)$ by
absorbing a factor of $10$ into the exponent.

### Significant Figures

The rules for significant figures:

1. All non-zero digits are significant.
2. Zeros between non-zero digits are significant.
3. Leading zeros are **not** significant.
4. Trailing zeros after a decimal point are significant.
5. Trailing zeros in a whole number without a decimal point are ambiguous.

**Examples:** $0.00450$ has 3 s.f.; $1020$ has at least 3 s.f.; $1020.$ has 4 s.f.

### Absolute and Relative Error

If a quantity's true value is $x_0$ and the approximate value is $x_a$:

- **Absolute error:** $|x_a - x_0|$
- **Relative error:** $\dfrac{|x_a - x_0|}{|x_0|}$

### Upper and Lower Bounds

If a value is given as $x = 12.5$ (correct to 1 decimal place), then:

- **Upper bound:** $12.55$
- **Lower bound:** $12.45$

The interval is $[12.45,\; 12.55)$. The maximum possible error (absolute) is
$\frac{1}{2} \times 10^{-d}$ where $d$ is the number of decimal places.

<details>
<summary>Worked example: Bounds</summary>

The sides of a rectangle are measured as $5.2\,\text{cm}$ and $3.8\,\text{cm}$ (each to 1 d.p.).

Upper bounds: $5.25$ and $3.85$. Lower bounds: $5.15$ and $3.75$.

Maximum area: $5.25 \times 3.85 = 20.2125\,\text{cm}^2$.

Minimum area: $5.15 \times 3.75 = 19.3125\,\text{cm}^2$.

The area is $19.8\,\text{cm}^2 \pm 0.45\,\text{cm}^2$ (to 1 d.p.), but in bounds form we write
$19.3125 \le A \lt 20.2125$.

</details>

## Sequences and Series

A sequence is a function $f$ with domain $\mathbb{N}$ (or $\mathbb{N}_0$) and codomain $X$. Writing
$u_n = f(n)$, every sequence is ordered by its index.

$$f: \mathbb{N} \to X, \quad u_n = f(n), \; n \in \mathbb{N}$$

### Series and Partial Sums

A **series** is the sum of the terms of a sequence. A **partial sum** $S_k$ is the sum of the first
$k$ terms:

$$S_k = \sum_{n=1}^{k} u_n$$

### Sigma Notation Properties

Sigma notation obeys the following rules (where $c$ is a constant independent of the index):

**Linearity:**

$$\sum_{n=1}^{k} (au_n + bv_n) = a\sum_{n=1}^{k} u_n + b\sum_{n=1}^{k} v_n$$

_Proof._ Distribute the sum over each term and factor constants out. Each term $au_n$ appears
exactly once in the expansion, so grouping gives $a$ times the sum of $u_n$, and similarly for
$bv_n$. $\blacksquare$

**Index shifting:** Replacing $n$ with $n + m$ shifts the bounds:

$$\sum_{n=p}^{q} u_n = \sum_{n=p+m}^{q+m} u_{n-m}$$

**Telescoping:** If $u_n = v_n - v_{n-1}$, then $\sum_{n=1}^{k} u_n = v_k - v_0$.

<details>
<summary>Worked example: Sigma manipulation</summary>

Simplify $\sum_{n=1}^{50} (3n + 2)$.

By linearity:
$3\sum_{n=1}^{50} n + \sum_{n=1}^{50} 2 = 3 \cdot \frac{50 \cdot 51}{2} + 2 \cdot 50 = 3825 + 100 = 3925$.

</details>

### Arithmetic Sequences

An arithmetic sequence has a constant **common difference** $d$ between consecutive terms:

$$a_n = a_1 + (n-1)d$$

### Arithmetic Series — Proof by Pairing

**Theorem.** $S_k = \frac{k}{2}(a_1 + a_k)$

_Proof._ Write the sum forward and backward:

$$S_k = a_1 + (a_1 + d) + (a_1 + 2d) + \cdots + (a_1 + (k-1)d)$$

$$S_k = a_k + (a_k - d) + (a_k - 2d) + \cdots + (a_k - (k-1)d)$$

Adding term-by-term, each pair sums to $a_1 + a_k$, and there are $k$ such pairs:

$$2S_k = k(a_1 + a_k) \implies S_k = \frac{k}{2}(a_1 + a_k)$$

Substituting $a_k = a_1 + (k-1)d$ gives the alternative form:

$$S_k = \frac{k}{2}\big(2a_1 + (k-1)d\big)$$

$\blacksquare$

:::warning In the IB formula booklet this is written as:

$$S_n = \frac{n}{2}(2u_1 + (n-1)d) = \frac{n}{2}(u_1 + u_n)$$

:::

### Geometric Sequences

A geometric sequence has a constant **common ratio** $r$ between consecutive terms:

$$u_n = u_1 \cdot r^{n-1}$$

### Geometric Series — Proof by Subtraction

**Theorem.** $S_k = \dfrac{u_1(1 - r^k)}{1 - r}$ for $r \ne 1$.

_Proof._ Write $S_k$ and $rS_k$:

$$S_k = u_1 + u_1 r + u_1 r^2 + \cdots + u_1 r^{k-1}$$

$$rS_k = u_1 r + u_1 r^2 + u_1 r^3 + \cdots + u_1 r^k$$

Subtracting:

$$S_k - rS_k = u_1 - u_1 r^k$$

$$S_k(1 - r) = u_1(1 - r^k)$$

$$S_k = \frac{u_1(1 - r^k)}{1 - r} \qquad \blacksquare$$

### Convergence of Geometric Series

If $|r| \lt 1$, then $\lim_{k \to \infty} r^k = 0$, so:

$$S_{\infty} = \frac{u_1}{1 - r}$$

If $|r| \ge 1$, the series diverges.

### Applications: Compound Interest

If a principal $P$ is invested at rate $r$ per period, compounded each period, the value after $n$
periods is:

$$A = P(1 + r)^n$$

This is a geometric sequence with $u_1 = P$ and common ratio $1 + r$.

### Applications: Annuities

An annuity pays $d$ per period for $n$ periods, with interest rate $r$ per period. The present value
is:

$$PV = \frac{d}{r}\left(1 - \frac{1}{(1+r)^n}\right)$$

This follows directly from the geometric series sum with first term $\frac{d}{1+r}$ and ratio
$\frac{1}{1+r}$.

<details>
<summary>Worked example: Compound interest</summary>

A deposit of $5,000 earns 4% per year, compounded annually. Find the value after 10 years.

$A = 5000(1.04)^{10} \approx 5000 \times 1.48024 = 7401.22$

The value is approximately $7,401.22.

</details>

<details>
<summary>Worked example: Summation</summary>

Find the sum of the first 20 terms of the arithmetic sequence $3, 7, 11, \ldots$

Here $a_1 = 3$, $d = 4$, $n = 20$.

$S_{20} = \frac{20}{2}\big(2(3) + 19(4)\big) = 10(6 + 76) = 10 \times 82 = 820$

</details>

<details>
<summary>Worked example: Infinite geometric series</summary>

Find the sum of $1 + \frac{1}{2} + \frac{1}{4} + \frac{1}{8} + \cdots$

Here $u_1 = 1$, $r = \frac{1}{2}$. Since $|r| \lt 1$:

$S_{\infty} = \frac{1}{1 - 1/2} = \frac{1}{1/2} = 2$

</details>

<details>
<summary>Worked example: Geometric series — finding n</summary>

The sum of the first $n$ terms of $2, 6, 18, \ldots$ is $6560$. Find $n$.

Here $u_1 = 2$, $r = 3$. Using $S_n = \frac{2(3^n - 1)}{3 - 1} = 3^n - 1$.

$3^n - 1 = 6560 \implies 3^n = 6561 = 3^8 \implies n = 8$

</details>

## Logarithms

A logarithm is the inverse function of the exponential $f(x) = b^x$:

$$\log_b(b^x) = x, \quad b \in \{r \in \mathbb{R} \mid r \gt 0,\; r \ne 1\}$$

The logarithm $\log_b x$ answers the question: "to what power must $b$ be raised to obtain $x$?"

### Logarithm Laws — Proofs

**Law 1 (Product rule):** $\log_a(xy) = \log_a x + \log_a y$

_Proof._ Let $m = \log_a x$ and $n = \log_a y$. Then $a^m = x$ and $a^n = y$. So
$xy = a^m \cdot a^n = a^{m+n}$. Taking $\log_a$ of both sides:
$\log_a(xy) = m + n = \log_a x + \log_a y$. $\blacksquare$

**Law 2 (Quotient rule):** $\log_a\!\left(\dfrac{x}{y}\right) = \log_a x - \log_a y$

_Proof._ Let $m = \log_a x$ and $n = \log_a y$. Then $a^m = x$ and $a^n = y$.
$\frac{x}{y} = \frac{a^m}{a^n} = a^{m-n}$. Taking $\log_a$:
$\log_a(x/y) = m - n = \log_a x - \log_a y$. $\blacksquare$

**Law 3 (Power rule):** $\log_a(x^m) = m\log_a x$

_Proof._ Let $n = \log_a x$, so $a^n = x$. Then $x^m = (a^n)^m = a^{mn}$. Taking $\log_a$:
$\log_a(x^m) = mn = m\log_a x$. $\blacksquare$

### Change of Base Formula

**Theorem.** $\log_a x = \dfrac{\log_b x}{\log_b a}$ for any valid bases $a, b \gt 0$, $a, b \ne 1$.

_Proof._ Let $y = \log_a x$. Then $a^y = x$. Taking $\log_b$ of both sides:
$\log_b(a^y) = \log_b x$. By the power rule, $y\log_b a = \log_b x$, so
$y = \frac{\log_b x}{\log_b a}$. $\blacksquare$

This is particularly useful for computing logarithms in bases other than $10$ or $e$ using a
calculator.

### Solving Exponential Equations

When the variable is in the exponent, take logarithms of both sides to bring it down.

<details>
<summary>Worked example: Exponential equation</summary>

Solve $3^{2x+1} = 7^{x-2}$ for $x$.

Taking $\ln$ of both sides: $(2x+1)\ln 3 = (x-2)\ln 7$.

$2x\ln 3 + \ln 3 = x\ln 7 - 2\ln 7$

$x(2\ln 3 - \ln 7) = -2\ln 7 - \ln 3$

$x = \frac{-2\ln 7 - \ln 3}{2\ln 3 - \ln 7} = \frac{2\ln 7 + \ln 3}{\ln 7 - 2\ln 3} \approx \frac{2(1.946) + 1.099}{1.946 - 2(1.099)} \approx \frac{4.990}{-0.252} \approx -19.8$

</details>

### Solving Logarithmic Equations

Use the logarithm laws to combine terms, then exponentiate both sides.

<details>
<summary>Worked example: Logarithmic equation</summary>

Solve $\log_2(x + 3) + \log_2(x - 3) = 4$.

By the product rule: $\log_2\!\big((x+3)(x-3)\big) = 4$, i.e. $\log_2(x^2 - 9) = 4$.

$x^2 - 9 = 2^4 = 16$, so $x^2 = 25$, giving $x = 5$ or $x = -5$.

Check domain: $x + 3 \gt 0$ and $x - 3 \gt 0$ requires $x \gt 3$. So $x = -5$ is rejected.

Solution: $x = 5$.

</details>

<details>
<summary>Worked example: Change of base</summary>

Evaluate $\log_3 20$ to 3 significant figures.

$\log_3 20 = \frac{\ln 20}{\ln 3} = \frac{2.9957\ldots}{1.0986\ldots} \approx 2.73$

</details>

<details>
<summary>Worked example: Exponential growth</summary>

A bacteria culture doubles every 3 hours. If the initial population is $500$, when will it reach
32,000?

$P(t) = 500 \cdot 2^{t/3}$. Set $500 \cdot 2^{t/3} = 32000$:

$2^{t/3} = 64 = 2^6$, so $t/3 = 6$, giving $t = 18$ hours.

Alternatively, using logarithms: $\frac{t}{3}\ln 2 = \ln 64 = 6\ln 2$, so $t = 18$.

</details>

## Proof by Mathematical Induction

Mathematical induction is a technique for proving statements that are true for all natural numbers
(or all integers greater than or equal to some starting value).

### Structure of an Inductive Proof

To prove $P(n)$ for all $n \ge n_0$:

1. **Base case:** Verify $P(n_0)$ is true directly.
2. **Inductive hypothesis:** Assume $P(k)$ is true for some arbitrary $k \ge n_0$.
3. **Inductive step:** Using the hypothesis, prove that $P(k+1)$ is true.
4. **Conclusion:** By the principle of mathematical induction, $P(n)$ is true for all $n \ge n_0$.

The logic is analogous to an infinite chain of dominoes: the base case knocks over the first domino,
and the inductive step ensures each domino knocks over the next.

### Sum Formula Proofs

<details>
<summary>Example: Prove the sum of squares formula</summary>

Prove $\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$.

**Base case ($n = 1$):** LHS $= 1$. RHS $= \frac{1 \cdot 2 \cdot 3}{6} = 1$. True.

**Inductive hypothesis:** Assume $\sum_{i=1}^{k} i^2 = \frac{k(k+1)(2k+1)}{6}$ for some $k \ge 1$.

**Inductive step:**

$$\sum_{i=1}^{k+1} i^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2$$

$$= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6}$$

$$= \frac{(k+1)\big[k(2k+1) + 6(k+1)\big]}{6}$$

$$= \frac{(k+1)(2k^2 + k + 6k + 6)}{6}$$

$$= \frac{(k+1)(2k^2 + 7k + 6)}{6} = \frac{(k+1)(k+2)(2k+3)}{6}$$

This equals $\frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$, which is the formula for $n = k+1$. $\blacksquare$

</details>

### Divisibility Proofs

<details>
<summary>Example: Prove a divisibility result</summary>

Prove $3^{2n} - 1$ is divisible by 8 for all $n \in \mathbb{N}$.

**Base case ($n = 1$):** $3^2 - 1 = 9 - 1 = 8$, which is divisible by 8. True.

**Inductive hypothesis:** Assume $3^{2k} - 1 = 8m$ for some integer $m$.

**Inductive step:** Consider $3^{2(k+1)} - 1 = 3^{2k+2} - 1 = 9 \cdot 3^{2k} - 1$.

We rewrite: $9 \cdot 3^{2k} - 1 = 9(3^{2k} - 1) + 9 - 1 = 9 \cdot 8m + 8 = 8(9m + 1)$.

Since $9m + 1$ is an integer, $3^{2(k+1)} - 1$ is divisible by 8. $\blacksquare$

</details>

### Inequality Proofs

<details>
<summary>Example: Prove $2^n \gt n$ for all $n \ge 1$</summary>

**Base case ($n = 1$):** $2^1 = 2 \gt 1$. True.

**Inductive hypothesis:** Assume $2^k \gt k$ for some $k \ge 1$.

**Inductive step:** $2^{k+1} = 2 \cdot 2^k \gt 2k$ (by the hypothesis).

Since $k \ge 1$, we have $2k = k + k \ge k + 1$. Therefore $2^{k+1} \gt k + 1$. $\blacksquare$

</details>

### Common Mistakes in Induction

- **Forgetting the base case:** The inductive step alone proves only an implication
  $P(k) \implies P(k+1)$. Without the base case, the chain never starts.
- **Using what you need to prove:** The inductive hypothesis is $P(k)$, not $P(k+1)$. You must
  _derive_ $P(k+1)$, not assume it.
- **Incorrect algebra:** Errors in the inductive step (especially with fractions or factorisation)
  are the most common source of failed induction proofs.
- **Wrong starting value:** If the statement is only claimed for $n \ge 3$, verify the base case at
  $n = 3$, not $n = 1$.

## The Binomial Theorem

### Statement

For any non-negative integer $n$ and any $a, b \in \mathbb{R}$:

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

where the **binomial coefficient** is:

$$\binom{n}{k} = \frac{n!}{k!(n-k)!}$$

### Pascal's Triangle

The binomial coefficients can be generated recursively via **Pascal's triangle**. Each entry is the
sum of the two entries above it:

$$\binom{n}{k} = \binom{n-1}{k-1} + \binom{n-1}{k}$$

_Proof of Pascal's identity._ Using the factorial definition:

$$\binom{n-1}{k-1} + \binom{n-1}{k} = \frac{(n-1)!}{(k-1)!(n-k)!} + \frac{(n-1)!}{k!(n-1-k)!}$$

$$= \frac{(n-1)! \cdot k}{k!(n-k)!} + \frac{(n-1)! \cdot (n-k)}{k!(n-k)!}$$

$$= \frac{(n-1)!\big(k + n - k\big)}{k!(n-k)!} = \frac{n \cdot (n-1)!}{k!(n-k)!} = \frac{n!}{k!(n-k)!} = \binom{n}{k} \qquad \blacksquare$$

### Properties of Binomial Coefficients

- **Symmetry:** $\dbinom{n}{k} = \dbinom{n}{n-k}$
- **Sum of row:** $\displaystyle\sum_{k=0}^{n} \binom{n}{k} = 2^n$ (set $a = b = 1$ in the theorem)
- **Alternating sum:** $\displaystyle\sum_{k=0}^{n} (-1)^k \binom{n}{k} = 0$ (set $a = 1,\; b = -1$)

### Finding Specific Terms

The general term (the $(k+1)$-th term, since the sum starts at $k=0$) is:

$$T_{k+1} = \binom{n}{k} a^{n-k} b^k$$

<details>
<summary>Worked example: Expansion</summary>

Expand $(2x - 3)^4$ using the binomial theorem.

$$(2x - 3)^4 = \binom{4}{0}(2x)^4 + \binom{4}{1}(2x)^3(-3) + \binom{4}{2}(2x)^2(-3)^2 + \binom{4}{3}(2x)(-3)^3 + \binom{4}{4}(-3)^4$$

$$= 16x^4 - 4 \cdot 8x^3 \cdot 3 + 6 \cdot 4x^2 \cdot 9 - 4 \cdot 2x \cdot 27 + 81$$

$$= 16x^4 - 96x^3 + 216x^2 - 216x + 81$$

</details>

<details>
<summary>Worked example: Finding a specific coefficient</summary>

Find the coefficient of $x^3$ in the expansion of $(1 + 2x)^7$.

The term containing $x^3$ occurs when $k = 3$:

$$T_4 = \binom{7}{3}(1)^{7-3}(2x)^3 = 35 \cdot 8x^3 = 280x^3$$

The coefficient is $280$.

</details>

<details>
<summary>Worked example: Binomial coefficient properties</summary>

Evaluate $\binom{10}{0} + \binom{10}{1} + \binom{10}{2} + \cdots + \binom{10}{10}$.

By the row-sum property: $\sum_{k=0}^{10} \binom{10}{k} = 2^{10} = 1024$.

</details>

## Common Pitfalls

### Confusing Subset and Element

$1 \in \{1, 2, 3\}$ but $1 \notin \{\{1\}, 2, 3\}$. In the second set, $\{1\}$ is an element, not
$1$. Meanwhile, $\{1\} \subseteq \{1, 2, 3\}$ is true, but $\{1\} \in \{1, 2, 3\}$ is false.

### Domain and Range Errors

When finding inverse functions, always check that the original function is bijective on the given
domain. A common error is to write $f^{-1}(x) = \sqrt{x}$ for $f(x) = x^2$ without restricting the
domain to $[0, \infty)$ first.

### Off-by-One in Sigma Notation

$\sum_{n=1}^{k}$ has $k$ terms, not $k-1$. $\sum_{n=0}^{k}$ has $k+1$ terms. Be careful when
shifting indices.

### Induction Base Case Errors

If the statement is claimed for $n \ge 2$, verify the base case at $n = 2$, not $n = 0$ or $n = 1$.
A base case at the wrong value invalidates the entire proof.

### Logarithm Domain Restrictions

The arguments of logarithms must be strictly positive. When solving $\log_a f(x) = c$, always check
that $f(x) \gt 0$ in your solution. A solution that violates this is extraneous.

## Problem Set

<details>
<summary>Problem 1: Sets</summary>

Let $U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$, $A = \{1, 2, 3, 4, 5\}$, $B = \{3, 4, 5, 6, 7\}$.

Find: (a) $A \cap B$, (b) $A \cup B$, (c) $A'$, (d) $(A \cap B)'$, (e) $|A \cup B|$.

**Solution.**

(a) $A \cap B = \{3, 4, 5\}$

(b) $A \cup B = \{1, 2, 3, 4, 5, 6, 7\}$

(c) $A' = \{6, 7, 8, 9, 10\}$

(d) $(A \cap B)' = \{1, 2, 6, 7, 8, 9, 10\}$. (Verify: this equals $A' \cup B'$ by De Morgan's law.)

(e) $|A \cup B| = 7$

</details>

<details>
<summary>Problem 2: Functions — bijectivity</summary>

Let $f: \mathbb{R} \to \mathbb{R}$ be defined by $f(x) = x^3 - x$. Determine whether $f$ is
injective, surjective, or neither.

**Solution.**

_Injective?_ No. $f(0) = 0$ and $f(1) = 0$, so distinct inputs map to the same output.

_Surjective?_ Yes. $f(x) = x^3 - x = x(x-1)(x+1)$. As $x \to \infty$, $f(x) \to \infty$; as
$x \to -\infty$, $f(x) \to -\infty$. By continuity (a polynomial is continuous everywhere), $f$
attains every real value by the Intermediate Value Theorem.

Therefore $f$ is surjective but not injective.

</details>

<details>
<summary>Problem 3: Scientific notation and error</summary>

The speed of light is measured as $3.00 \times 10^8\,\text{m/s}$ to 3 s.f. Find the absolute and
relative error.

**Solution.**

Upper bound: $3.005 \times 10^8$. Lower bound: $2.995 \times 10^8$.

Maximum absolute error:
$\frac{1}{2} \times 10^{8-2} = 0.005 \times 10^8 = 5 \times 10^5\,\text{m/s}$.

Relative error:
$\frac{5 \times 10^5}{3.00 \times 10^8} = \frac{5}{300} = \frac{1}{60} \approx 0.0167$ (about
1.67%).

</details>

<details>
<summary>Problem 4: Arithmetic series</summary>

The sum of the first 40 terms of an arithmetic sequence is $4200$. The sum of the first 20 terms is
$1600$. Find the first term and the common difference.

**Solution.**

$S_{40} = 20(2a_1 + 39d) = 4200 \implies 2a_1 + 39d = 210 \quad \cdots (1)$

$S_{20} = 10(2a_1 + 19d) = 1600 \implies 2a_1 + 19d = 160 \quad \cdots (2)$

$(1) - (2)$: $20d = 50 \implies d = 2.5$

From (2): $2a_1 + 19(2.5) = 160 \implies 2a_1 = 160 - 47.5 = 112.5 \implies a_1 = 56.25$

</details>

<details>
<summary>Problem 5: Geometric series</summary>

A geometric series has first term $5$ and common ratio $\frac{1}{3}$. Find the sum to infinity and
determine how many terms are needed for the partial sum to exceed 99% of $S_{\infty}$.

**Solution.**

$S_{\infty} = \frac{5}{1 - 1/3} = \frac{5}{2/3} = 7.5$

We need $S_n \gt 0.99 \times 7.5 = 7.425$.

$S_n = \frac{5(1 - (1/3)^n)}{2/3} = 7.5\big(1 - (1/3)^n\big)$

$7.5\big(1 - (1/3)^n\big) \gt 7.425 \implies 1 - (1/3)^n \gt 0.99 \implies (1/3)^n \lt 0.01$

$n\ln(1/3) \lt \ln(0.01)$. Since $\ln(1/3) \lt 0$, dividing reverses the inequality:

$n \gt \frac{\ln(0.01)}{\ln(1/3)} = \frac{-4.605}{-1.099} \approx 4.19$

So $n \ge 5$ terms are needed.

</details>

<details>
<summary>Problem 6: Logarithms</summary>

Solve for $x$: $\log_3(x - 1) + \log_3(x + 1) = \log_3 8$.

**Solution.**

By the product rule: $\log_3\!\big((x-1)(x+1)\big) = \log_3 8$

$(x-1)(x+1) = 8 \implies x^2 - 1 = 8 \implies x^2 = 9 \implies x = 3 \text{ or } x = -3$

Domain check: $x - 1 \gt 0 \implies x \gt 1$. So $x = -3$ is rejected.

Solution: $x = 3$.

</details>

<details>
<summary>Problem 7: Mathematical induction</summary>

Prove by induction that $n^3 + 2n$ is divisible by $3$ for all $n \in \mathbb{N}$.

**Solution.**

**Base case ($n = 1$):** $1^3 + 2(1) = 3$, which is divisible by $3$. True.

**Inductive hypothesis:** Assume $k^3 + 2k = 3m$ for some integer $m$.

**Inductive step:**

$(k+1)^3 + 2(k+1) = k^3 + 3k^2 + 3k + 1 + 2k + 2$

$= (k^3 + 2k) + 3k^2 + 3k + 3$

$= 3m + 3(k^2 + k + 1) = 3\big(m + k^2 + k + 1\big)$

Since $m + k^2 + k + 1$ is an integer, $(k+1)^3 + 2(k+1)$ is divisible by $3$. $\blacksquare$

</details>

<details>
<summary>Problem 8: Binomial theorem</summary>

Find the term independent of $x$ in the expansion of $\left(x^2 + \dfrac{1}{x}\right)^9$.

**Solution.**

The general term is
$T_{k+1} = \binom{9}{k}(x^2)^{9-k}\!\left(\dfrac{1}{x}\right)^k = \binom{9}{k} x^{18-2k-k} = \binom{9}{k} x^{18-3k}$.

For the term to be independent of $x$, we need $18 - 3k = 0$, so $k = 6$.

The term is $\binom{9}{6} x^0 = \binom{9}{3} = 84$.

</details>
