---
title: Sequences and Series
date: 2025-08-16T17:59:54.768Z
tags:
  - maths
categories:
  - maths
slug: sequences-series
---

Sequences and series are fundamental to the DSE compulsory maths syllabus. A sequence is an ordered
list of numbers governed by a rule; a series is the sum of the terms of a sequence. This topic
covers arithmetic and geometric progressions, sigma notation manipulation, and recurrence relations.

## Notations and Definitions

### Sequences

A **sequence** is a function $a: \mathbb{N} \to \mathbb{R}$ (or a subset of $\mathbb{N}$). We write
the sequence as $a_1, a_2, a_3, \ldots$, or simply $\{a_n\}$. Each $a_n$ is called a **term** of the
sequence. The expression $a_n$ giving the $n$-th term in terms of $n$ is the **general term** or
**formula for the $n$-th term**.

### Series

A **series** is the sum of the terms of a sequence:

$$
S_n = a_1 + a_2 + \cdots + a_n
$$

$S_n$ is called the **$n$-th partial sum**. If the sequence of partial sums $\{S_n\}$ converges to a
limit $S$ as $n \to \infty$, we write $S = \sum_{n=1}^{\infty} a_n$ and call $S$ the **sum to
infinity**.

### Sigma Notation

$$
\sum_{k=1}^{n} a_k = a_1 + a_2 + \cdots + a_n
$$

The variable $k$ is the **index of summation** (a dummy variable -- its name does not matter). The
value below is the **lower limit**; the value above is the **upper limit**.

---

## Arithmetic Sequences

### Definition

An **arithmetic sequence** (or arithmetic progression, AP) is a sequence where the difference
between consecutive terms is constant. This constant difference is denoted $d$:

$$
a_{n+1} - a_n = d \quad \text{for all } n
$$

The first term is $a_1$. The sequence is: $a_1, \; a_1 + d, \; a_1 + 2d, \; \ldots$

### The $n$-th Term

**Theorem.** For an arithmetic sequence with first term $a_1$ and common difference $d$:

$$
a_n = a_1 + (n-1)d
$$

**Proof (by induction).**

- **Base case ($n=1$):** $a_1 = a_1 + (1-1)d = a_1$. True.
- **Inductive step:** Assume $a_k = a_1 + (k-1)d$ for some $k \geq 1$. Then

$$
a_{k+1} = a_k + d = a_1 + (k-1)d + d = a_1 + kd
$$

which matches the formula for $n = k+1$. $\blacksquare$

<details>
<summary>Example</summary>
Find the 20th term of the sequence $3, 7, 11, 15, \ldots$

Here $a_1 = 3$, $d = 4$. So $a_{20} = 3 + 19 \times 4 = 3 + 76 = 79$.

</details>

<details>
<summary>Example</summary>
In an arithmetic sequence, $a_5 = 17$ and $a_{12} = 38$. Find $a_1$ and $d$.

$a_5 = a_1 + 4d = 17$ and $a_{12} = a_1 + 11d = 38$.

Subtracting: $7d = 21 \implies d = 3$. Then $a_1 = 17 - 12 = 5$.

</details>

### Property: Equidistant Terms

**Theorem.** In an arithmetic sequence, terms equidistant from the ends sum to the same constant:

$$
a_k + a_{n-k+1} = a_1 + a_n \quad \text{for all } k = 1, 2, \ldots, n
$$

**Proof.**

$$
a_k + a_{n-k+1} = [a_1 + (k-1)d] + [a_1 + (n-k)d] = 2a_1 + (n-1)d = a_1 + a_n
$$

$\blacksquare$

This is the structural reason why the arithmetic series sum formula works (pairing terms).

---

## Arithmetic Series

### Sum of the First $n$ Terms

**Theorem.** For an arithmetic sequence,

$$
S_n = \frac{n}{2}(a_1 + a_n) = \frac{n}{2}[2a_1 + (n-1)d]
$$

**Proof (pairing equidistant terms).**

Write the sum forwards and backwards:

$$
\begin{aligned}
S_n &= a_1 + a_2 + \cdots + a_n \\
S_n &= a_n + a_{n-1} + \cdots + a_1
\end{aligned}
$$

Adding term by term, each pair sums to $a_1 + a_n$ by the equidistant-terms property. There are $n$
such pairs:

$$
2S_n = n(a_1 + a_n) \implies S_n = \frac{n}{2}(a_1 + a_n)
$$

Substituting $a_n = a_1 + (n-1)d$ gives the second form. $\blacksquare$

### Sum of the First $n$ Positive Integers

Setting $a_1 = 1$, $d = 1$, $a_n = n$:

$$
\sum_{k=1}^{n} k = \frac{n(n+1)}{2}
$$

<details>
<summary>Example</summary>
Find the sum of all integers from 1 to 100.

$S_{100} = \frac{100 \times 101}{2} = 5050$.

</details>

<details>
<summary>Example</summary>
Find the sum of the arithmetic series $2 + 5 + 8 + \cdots + 89$.

$a_1 = 2$, $d = 3$. Find $n$: $a_n = 2 + (n-1)3 = 89 \implies 3(n-1) = 87 \implies n = 30$.

$S_{30} = \frac{30}{2}(2 + 89) = 15 \times 91 = 1365$.

</details>

---

## Geometric Sequences

### Definition

A **geometric sequence** (or geometric progression, GP) is a sequence where the ratio of consecutive
terms is constant. This constant ratio is denoted $r$:

$$
\frac{a_{n+1}}{a_n} = r \quad \text{for all } n, \quad r \neq 0
$$

The sequence is: $a_1, \; a_1 r, \; a_1 r^2, \; \ldots$

### The $n$-th Term

**Theorem.** For a geometric sequence with first term $a_1$ and common ratio $r$:

$$
a_n = a_1 r^{n-1}
$$

**Proof (by induction).**

- **Base case ($n=1$):** $a_1 = a_1 r^0 = a_1$. True.
- **Inductive step:** Assume $a_k = a_1 r^{k-1}$. Then

$$
a_{k+1} = a_k \cdot r = a_1 r^{k-1} \cdot r = a_1 r^k
$$

$\blacksquare$

<details>
<summary>Example</summary>
Find the 8th term of $3, -6, 12, -24, \ldots$

$a_1 = 3$, $r = -2$. $a_8 = 3(-2)^7 = 3(-128) = -384$.

</details>

<details>
<summary>Example</summary>
The 3rd term of a GP is 12 and the 7th term is 192. Find $a_1$ and $r$.

$a_3 = a_1 r^2 = 12$ and $a_7 = a_1 r^6 = 192$.

Dividing: $r^4 = \frac{192}{12} = 16 \implies r^4 = 16$. Taking the positive root (assuming
$r \gt 0$): $r = 2$. Then $a_1 = \frac{12}{4} = 3$.

</details>

---

## Geometric Series

### Sum of the First $n$ Terms

**Theorem.** For a geometric sequence with $r \neq 1$:

$$
S_n = \frac{a_1(1 - r^n)}{1 - r}
$$

**Proof.** Write out the sum and multiply by $r$:

$$
\begin{aligned}
S_n &= a_1 + a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1} \\
r S_n &= \phantom{a_1 + }\, a_1 r + a_1 r^2 + \cdots + a_1 r^{n-1} + a_1 r^n
\end{aligned}
$$

Subtracting: $(1-r)S_n = a_1 - a_1 r^n = a_1(1 - r^n)$.

$$
S_n = \frac{a_1(1 - r^n)}{1 - r}
$$

$\blacksquare$

For $r = 1$, the sequence is constant and $S_n = n a_1$.

### Sum to Infinity

**Theorem.** If $|r| \lt 1$, then:

$$
S_\infty = \sum_{n=1}^{\infty} a_1 r^{n-1} = \frac{a_1}{1 - r}
$$

**Proof.** Since $|r| \lt 1$, we have $\lim_{n \to \infty} r^n = 0$. Applying this to the finite sum
formula:

$$
S_\infty = \lim_{n \to \infty} \frac{a_1(1 - r^n)}{1 - r} = \frac{a_1(1 - 0)}{1 - r} = \frac{a_1}{1 - r}
$$

$\blacksquare$

If $|r| \geq 1$, the terms do not approach zero, so the series diverges.

### Applications

<details>
<summary>Repeating decimals</summary>
Express $0.\overline{37}$ as a fraction.

$0.\overline{37} = 0.37 + 0.0037 + 0.000037 + \cdots$

This is a geometric series with $a = 0.37$, $r = 0.01$.

$S_\infty = \frac{0.37}{1 - 0.01} = \frac{0.37}{0.99} = \frac{37}{99}$.

</details>

<details>
<summary>Example: Compound interest</summary>
A principal of USD 5000 is invested at 4% per annum, compounded annually. Find the value after 10 years.

The amount after $n$ years is $5000(1.04)^n$.

After 10 years: $5000(1.04)^{10} \approx 5000(1.48024) \approx 7401.22$.

</details>

<details>
<summary>Example: Bouncing ball</summary>
A ball is dropped from 8 m. After each bounce it reaches 60% of the previous height. Find the total vertical distance travelled.

Down: 8 m. Up and down repeatedly: $2 \times 8(0.6), \; 2 \times 8(0.6)^2, \; \ldots$

Total distance
$= 8 + 2 \times 8 \sum_{n=1}^{\infty} (0.6)^n = 8 + 16 \cdot \frac{0.6}{1-0.6} = 8 + 16 \cdot 1.5 = 8 + 24 = 32$
m.

</details>

---

## Sigma Notation Manipulation

### Linearity

Sigma notation is linear:

$$
\sum_{k=1}^{n} (a_k + b_k) = \sum_{k=1}^{n} a_k + \sum_{k=1}^{n} b_k
$$

$$
\sum_{k=1}^{n} c \cdot a_k = c \sum_{k=1}^{n} a_k
$$

where $c$ is a constant (does not depend on $k$).

### Index Shifting

The index variable is a dummy. We can shift it:

$$
\sum_{k=m}^{n} a_k = \sum_{k=m+1}^{n+1} a_{k-1} = \sum_{j=0}^{n-m} a_{j+m}
$$

This is essential for re-indexing series to match known formulas.

### Standard Sums

$$
\sum_{k=1}^{n} 1 = n, \qquad \sum_{k=1}^{n} k = \frac{n(n+1)}{2}, \qquad \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}
$$

<details>
<summary>Example</summary>
Evaluate $\sum_{k=3}^{10} (2k - 1)$.

$\sum_{k=3}^{10} (2k-1) = 2\sum_{k=3}^{10} k - \sum_{k=3}^{10} 1$

$= 2\left(\sum_{k=1}^{10} k - \sum_{k=1}^{2} k\right) - (10 - 3 + 1)$

$= 2(55 - 3) - 8 = 2(52) - 8 = 104 - 8 = 96$.

</details>

<details>
<summary>Example</summary>
Evaluate $\sum_{k=1}^{n} (3k^2 - 5k + 2)$.

$= 3\sum_{k=1}^{n} k^2 - 5\sum_{k=1}^{n} k + 2\sum_{k=1}^{n} 1$

$= 3 \cdot \frac{n(n+1)(2n+1)}{6} - 5 \cdot \frac{n(n+1)}{2} + 2n$

$= \frac{n(n+1)(2n+1)}{2} - \frac{5n(n+1)}{2} + 2n$

$= \frac{n}{2}[(n+1)(2n+1-5) + 4] = \frac{n}{2}[(n+1)(2n-4) + 4]$

$= \frac{n}{2}[2n^2 - 2n - 4 + 4] = \frac{n}{2}(2n^2 - 2n) = n^2(n - 1)$.

</details>

---

## Recurrence Relations

### Definition

A **recurrence relation** defines each term of a sequence in terms of preceding terms. The simplest
form is a **first-order recurrence**:

$$
a_{n+1} = f(a_n), \quad a_1 \text{ given}
$$

Arithmetic and geometric sequences are special cases:

- Arithmetic: $a_{n+1} = a_n + d$ (linear, constant increment)
- Geometric: $a_{n+1} = r \cdot a_n$ (linear, proportional)

### Finding the Limit: Fixed Point Method

If a sequence defined by $a_{n+1} = f(a_n)$ converges to a limit $L$, then $L$ must satisfy:

$$
L = f(L)
$$

This equation gives the **fixed point(s)** of $f$. To confirm convergence, one must also show the
sequence is bounded and monotonic (or use other convergence criteria).

<details>
<summary>Example</summary>
A sequence is defined by $a_{n+1} = \frac{1}{2}\left(a_n + \frac{16}{a_n}\right)$ with $a_1 = 1$. Find its limit.

Set $L = \frac{1}{2}\left(L + \frac{16}{L}\right)$.

$2L = L + \frac{16}{L} \implies L = \frac{16}{L} \implies L^2 = 16$.

Since $a_n \gt 0$ for all $n$, $L = 4$.

This is the Babylonian method for computing $\sqrt{16} = 4$.

</details>

<details>
<summary>Example</summary>
A sequence is defined by $a_{n+1} = \sqrt{2 + a_n}$ with $a_1 = \sqrt{2}$. Assuming convergence, find the limit.

$L = \sqrt{2 + L} \implies L^2 = 2 + L \implies L^2 - L - 2 = 0 \implies (L-2)(L+1) = 0$.

Since $a_n \gt 0$, $L = 2$.

</details>

---

## Common Pitfalls

- **Confusing $a_n$ and $S_n$.** $a_n$ is a single term; $S_n$ is the sum up to that term. Read the
  question carefully.
- **Off-by-one errors in the $n$-th term formula.** The formula is $a_n = a_1 + (n-1)d$, not
  $a_1 + nd$. The exponent in the geometric formula is $r^{n-1}$, not $r^n$.
- **Forgetting the convergence condition for infinite series.** $S_\infty = \frac{a_1}{1-r}$ is only
  valid when $|r| \lt 1$. If $|r| \geq 1$, the sum does not exist.
- **Mixing up the common ratio and common difference.** $d$ is for arithmetic (difference), $r$ is
  for geometric (ratio).
- **Sigma notation index errors.** When shifting indices, verify by checking the first and last
  terms. $\sum_{k=1}^{n} a_k \neq \sum_{k=0}^{n} a_k$ in general.
- **Assuming a recurrence converges without justification.** Setting $L = f(L)$ gives candidate
  limits. You still need to verify the sequence actually converges (e.g., via the Monotone
  Convergence Theorem).
- **Arithmetic series formula with wrong $n$.** If asked to sum from $a_3$ to $a_{10}$, the number
  of terms is $10 - 3 + 1 = 8$, not 10 or 7.

---

## Wrap-up Questions

<details>
<summary>Wrap-up Questions</summary>

1. **Question:** A student starts a savings plan. In the first year, they deposit USD 1,200. In each
   subsequent year, they increase their deposit by a constant USD 300. After 5 years of deposits,
   they stop adding money and invest the total accumulated amount in an account that earns 6%
   interest compounded annually. What is the value of the investment 10 years after they made their
   _last_ deposit?

<details>
<summary>Answer</summary>
- This is a two-part problem. First, an arithmetic series to find the total saved, then a geometric sequence for the compound interest.
- **Part 1: Calculate total savings (Arithmetic Series)**
  - The deposits are an arithmetic sequence with $a_1 = 1200$, $d = 300$, and $n=5$ years of deposits.
  - The total amount deposited is the sum of the series, $S_5$.
  - First, find the deposit in the 5th year: $a_5 = a_1 + (5-1)d = 1200 + 4(300) = 2400$.
  - Now, find the sum: $S_5 = \frac{n}{2}(a_1 + a_5) = \frac{5}{2}(1200 + 2400) = 2.5(3600) = \text{USD } 9,000$.
- **Part 2: Calculate investment growth (Geometric Sequence)**
  - The principal for the investment is $P = \text{USD } 9,000$.
  - The annual interest rate is $i = 0.06$, so the common ratio is $r = 1.06$.
  - The time period is $t = 10$ years.
  - The future value is given by the compound interest formula $FV = P(1+i)^t$.
  - $FV = 9000(1.06)^{10} \approx 9000(1.790847) \approx \text{USD } 16,117.62$.

<b>If you get this wrong, you should focus on:</b> Separating a multi-stage problem, calculating the
sum of a finite arithmetic series, and applying the formula for compound interest (a geometric
sequence application).

</details>

2. **Question:** A patient is given an initial dose of 20mg of a medication. Every day, they take a
   10mg maintenance dose. The drug is eliminated from the body such that 50% of the total amount is
   removed every 24 hours. What is the limiting amount of the drug in the body in the long run
   (i.e., the steady state amount)?

<details>
<summary>Answer</summary>
- Let $A_n$ be the amount of the drug in the body immediately after the $n$-th maintenance dose.
- $A_0 = 20$ (initial dose).
- **Day 1:** Before the dose, the amount is $20 \times 0.5 = 10$. After the dose, $A_1 = (20 \times 0.5) + 10 = 20$.
- **Day 2:** Before the dose, the amount is $A_1 \times 0.5 = 20 \times 0.5 = 10$. After the dose, $A_2 = (A_1 \times 0.5) + 10 = (20 \times 0.5) + 10 = 20$.
- It seems the amount right after each dose is always 20mg. Let's write a general recurrence relation.
- Let $Q_n$ be the amount in the body just _after_ the $n$-th dose (for $n \ge 1$). Let $Q_0=20$ be the initial amount.
- The amount just before the $(n+1)$-th dose is $0.5 \cdot Q_n$.
- The amount just after the $(n+1)$-th dose is $Q_{n+1} = 0.5 \cdot Q_n + 10$.
- To find the limiting amount (steady state), we assume the sequence converges to a limit $L$.
- As $n \to \infty$, $Q_{n+1} \to L$ and $Q_n \to L$.
  $$ L = 0.5L + 10 $$
  $$ 0.5L = 10 $$
  $$ L = \frac{10}{0.5} = 20 \text{ mg} $$
- The limiting amount of the drug in the body, measured just after taking the dose, is 20 mg. The amount will then fluctuate between 20mg (just after the dose) and 10mg (just before the next dose). The question asks for the limiting amount, which in this context usually refers to the peak steady-state level.

<b>If you get this wrong, you should focus on:</b> Modeling real-world scenarios with recurrence
relations and finding the fixed point or steady state of the system by taking the limit.

</details>

3. **Question:** Find the exact sum of the infinite series
   $\sum_{n=1}^{\infty} \frac{1}{n(n+1)(n+2)}$.

<details>
<summary>Answer</summary>
- This series can be solved by recognizing it as a telescoping series after applying partial fraction decomposition.
- **Step 1: Decompose the general term.**
  - $$ \frac{1}{n(n+1)(n+2)} = \frac{A}{n} + \frac{B}{n+1} + \frac{C}{n+2} $$
  - $$ 1 = A(n+1)(n+2) + B(n)(n+2) + C(n)(n+1) $$
  - Let $n=0$: $1 = A(1)(2) \implies A = 1/2$.
  - Let $n=-1$: $1 = B(-1)(1) \implies B = -1$.
  - Let $n=-2$: $1 = C(-2)(-1) \implies C = 1/2$.
    So, the term is $\frac{1}{2n} - \frac{1}{n+1} + \frac{1}{2(n+2)}$.
- **Step 2: Write out the partial sum $S_N$ to find the pattern.**
  - To make the pattern clearer, rewrite the term as $\frac{1}{2}\left(\frac{1}{n} - \frac{2}{n+1} + \frac{1}{n+2}\right) = \frac{1}{2}\left[\left(\frac{1}{n} - \frac{1}{n+1}\right) - \left(\frac{1}{n+1} - \frac{1}{n+2}\right)\right]$.
  - Let $a_n = \frac{1}{n} - \frac{1}{n+1}$. The term is $\frac{1}{2}(a_n - a_{n+1})$.
  - $n=1: \frac{1}{2}(a_1 - a_2) = \frac{1}{2}\left[\left(1-\frac{1}{2}\right) - \left(\frac{1}{2}-\frac{1}{3}\right)\right]$
  - $n=2: \frac{1}{2}(a_2 - a_3) = \frac{1}{2}\left[\left(\frac{1}{2}-\frac{1}{3}\right) - \left(\frac{1}{3}-\frac{1}{4}\right)\right]$
  - $n=3: \frac{1}{2}(a_3 - a_4) = \frac{1}{2}\left[\left(\frac{1}{3}-\frac{1}{4}\right) - \left(\frac{1}{4}-\frac{1}{5}\right)\right]$
  - The sum is $\frac{1}{2} [ (a_1 - a_2) + (a_2 - a_3) + \dots + (a_N - a_{N+1}) ]$.
  - This telescopes to $\frac{1}{2}(a_1 - a_{N+1})$.
- **Step 3: Evaluate the limit of the partial sum.**
  - $$ S_N = \frac{1}{2}(a_1 - a_{N+1}) = \frac{1}{2}\left[ \frac{1}{2} - \frac{1}{N+1} + \frac{1}{N+2} \right] $$
  - $$ S = \lim_{N\to\infty} S_N = \lim_{N\to\infty} \frac{1}{2}\left[ \frac{1}{2} - \frac{1}{N+1} + \frac{1}{N+2} \right] = \frac{1}{2} \left( \frac{1}{2} - 0 + 0 \right) = \frac{1}{4} $$

<b>If you get this wrong, you should focus on:</b> Partial fraction decomposition for cubic
denominators and identifying the cancellation pattern in telescoping series.

</details>

4. **Question:** The area of a Koch snowflake can be found by summing an infinite series. Start with
   an equilateral triangle of area $A$. At each step, a new equilateral triangle is added to the
   middle third of each existing side. The new triangle's side length is 1/3 of the side it's added
   to. Find the total area of the snowflake after an infinite number of steps in terms of the
   initial area $A$.

<details>
<summary>Answer</summary>
- This problem requires tracking the number of triangles added and their area at each step.
- Let $A_0 = A$ be the initial area. Let $S_0 = 3$ be the initial number of sides.
- **Step 1 (k=1):**
  - We add one new triangle to each of the $S_0=3$ sides.
  - A triangle with side length $s/3$ has area $(1/3)^2 = 1/9$ of a triangle with side length $s$.
  - Area added: $A_1 = S_0 \cdot \frac{A}{9} = 3 \cdot \frac{A}{9} = \frac{A}{3}$.
  - New number of sides: $S_1 = S_0 \cdot 4 = 12$.
- **Step 2 (k=2):**
  - We add one new triangle to each of the $S_1=12$ sides.
  - The side length of these new triangles is $1/3$ of the previous step's triangles, so their area is $1/9$ of the previous step's triangles, which is $(1/9)^2 A = A/81$.
  - Area added: $A_2 = S_1 \cdot \frac{A}{81} = 12 \cdot \frac{A}{81} = \frac{4A}{27}$.
- **Step 3 (k=3):**
  - Number of sides is now $S_2 = S_1 \cdot 4 = 48$. Area of new triangles is $A/81 \cdot 1/9 = A/729$.
  - Area added: $A_3 = S_2 \cdot \frac{A}{729} = 48 \cdot \frac{A}{729} = \frac{16A}{243}$.
- **Identify the pattern:**
  - The total area is $A_{total} = A_0 + A_1 + A_2 + A_3 + \dots$
  - $A_{total} = A + \frac{A}{3} + \frac{4A}{27} + \frac{16A}{243} + \dots = A + A \left( \frac{1}{3} + \frac{4}{27} + \frac{16}{243} + \dots \right)$
  - The series in the parenthesis is $ \frac{1}{3} + \frac{4}{9} \cdot \frac{1}{3} + \left(\frac{4}{9}\right)^2 \cdot \frac{1}{3} + \dots $
  - This is a geometric series with first term $a = 1/3$ and common ratio $r = 4/9$.
- **Sum the series:**
  - Since $|r| = 4/9 \lt 1$, the series converges.
  - Sum of the added area = $\frac{a}{1-r} = \frac{1/3}{1 - 4/9} = \frac{1/3}{5/9} = \frac{1}{3} \cdot \frac{9}{5} = \frac{3}{5}$.
  - The total area is $A_{total} = A + A \left( \frac{3}{5} \right) = \frac{8}{5}A$.

<b>If you get this wrong, you should focus on:</b> Modeling a geometric process, identifying the
first term and common ratio of the resulting geometric series, and calculating the sum.

</details>

5. **Question:** A student is trying to determine if the series
   $\sum_{n=1}^{\infty} \frac{n^2+n}{n^3+2}$ converges. They first try the Ratio Test, but find it
   inconclusive. Show why the Ratio Test is inconclusive, and then use a more appropriate test to
   definitively determine convergence or divergence.

<details>
<summary>Answer</summary>
- **Part 1: Show the Ratio Test is inconclusive.**
  - Let $a_n = \frac{n^2+n}{n^3+2}$.
    $$ L = \lim_{n\to\infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n\to\infty} \frac{(n+1)^2+(n+1)}{(n+1)^3+2} \cdot \frac{n^3+2}{n^2+n} $$
  - To evaluate this limit, we only need to consider the highest power terms in each polynomial.
  - Highest power in $(n+1)^2+(n+1)$ is $n^2$.
  - Highest power in $(n+1)^3+2$ is $n^3$.
  - Highest power in $n^3+2$ is $n^3$.
  - Highest power in $n^2+n$ is $n^2$.
    $$ L = \lim_{n\to\infty} \frac{n^2 \cdot n^3}{n^3 \cdot n^2} = \lim_{n\to\infty} \frac{n^5}{n^5} = 1 $$
  - Since the limit is 1, the Ratio Test is inconclusive.
- **Part 2: Use a more appropriate test.**
  - The Limit Comparison Test is ideal here. The term $a_n$ behaves like $\frac{n^2}{n^3} = \frac{1}{n}$ for large $n$.
  - Let's compare our series to the harmonic series $\sum b_n = \sum \frac{1}{n}$, which is known to diverge.
  - Compute the limit of the ratio of the terms:
    $$ L = \lim_{n\to\infty} \frac{a_n}{b_n} = \lim_{n\to\infty} \frac{\frac{n^2+n}{n^3+2}}{\frac{1}{n}} = \lim_{n\to\infty} \frac{n(n^2+n)}{n^3+2} = \lim_{n\to\infty} \frac{n^3+n^2}{n^3+2} $$
  - Divide numerator and denominator by $n^3$:
    $$ L = \lim_{n\to\infty} \frac{1+1/n}{1+2/n^3} = \frac{1}{1} = 1 $$
  - Since the limit is a finite, positive number ($0 \lt L \lt \infty$), and the comparison series $\sum \frac{1}{n}$ diverges, the original series $\sum \frac{n^2+n}{n^3+2}$ also diverges by the Limit Comparison Test.

<b>If you get this wrong, you should focus on:</b> Understanding the limitations of the Ratio Test
(especially for rational functions) and applying the Limit Comparison Test by choosing an
appropriate p-series to compare with.

</details>

6. **Question:** A programmer needs to approximate $\cos(0.2)$ for a low-power device. They decide
   to use a Maclaurin polynomial. What is the minimum degree of the polynomial required to guarantee
   an approximation error less than $10^{-7}$?

<details>
<summary>Answer</summary>
- This problem requires using the Taylor Remainder Theorem, specifically the error bound for an alternating series, as the Maclaurin series for cosine is alternating.
- The Maclaurin series for $\cos(x)$ is $\sum_{n=0}^{\infty} \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \frac{x^6}{6!} + \dots$.
- For $x=0.2$, this is an alternating series. The Alternating Series Estimation Theorem states that the error $|R_n|$ in approximating the sum by the $n$-th partial sum is less than the absolute value of the first unused term, $|a_{n+1}|$.
- Let's calculate the absolute values of the terms for $x=0.2$:
  - Term 0 ($1$): Used in $P_0$.
  - Term 1 ($-\frac{0.2^2}{2!}$): $|a_1| = \frac{0.04}{2} = 0.02$. Used in $P_2$.
  - Term 2 ($+\frac{0.2^4}{4!}$): $|a_2| = \frac{0.0016}{24} \approx 6.67 \times 10^{-5}$. Used in $P_4$.
  - Term 3 ($-\frac{0.2^6}{6!}$): $|a_3| = \frac{0.000064}{720} \approx 8.89 \times 10^{-8}$.
- We need the error to be less than $10^{-7}$.
- If we use the polynomial $P_4(x) = 1 - \frac{x^2}{2!} + \frac{x^4}{4!}$, the error will be bounded by the absolute value of the next term, which is $|a_3| \approx 8.89 \times 10^{-8}$.
- Since $8.89 \times 10^{-8} \lt 10^{-7}$, this is sufficient.
- The polynomial $P_4(x)$ has degree 4. However, the question asks for the minimum degree. The polynomial used is $1 - \frac{x^2}{2!} + \frac{x^4}{4!}$. The term with $x^5$ is zero, so $P_5(x) = P_4(x)$. The error for $P_5(x)$ is also bounded by the next non-zero term, which is the $x^6$ term.
- Therefore, using a polynomial of degree 4 (or 5) is sufficient. The minimum degree required to include the $x^4$ term is 4.

<b>If you get this wrong, you should focus on:</b> The Alternating Series Estimation Theorem and how
it applies to Taylor series approximations for functions like sine and cosine.

</details>

7. **Question:** The function $f(x) = \sin(x^2)$ is notoriously difficult to integrate. Approximate
   the value of the definite integral $\int_0^1 \sin(x^2) dx$ by integrating the first three
   non-zero terms of its Maclaurin series.

<details>
<summary>Answer</summary>
- **Step 1: Find the Maclaurin series for $\sin(x^2)$.**
  - Start with the series for $\sin(u) = u - \frac{u^3}{3!} + \frac{u^5}{5!} - \dots$.
  - Substitute $u = x^2$:
    - $$ \sin(x^2) = (x^2) - \frac{(x^2)^3}{3!} + \frac{(x^2)^5}{5!} - \dots = x^2 - \frac{x^6}{6} + \frac{x^{10}}{120} - \dots $$
- **Step 2: Integrate the series term-by-term from 0 to 1.**
  - $$ \int_0^1 \sin(x^2) dx \approx \int_0^1 \left( x^2 - \frac{x^6}{6} + \frac{x^{10}}{120} \right) dx $$
- **Step 3: Evaluate the integral.**
  - $$ \left[ \frac{x^3}{3} - \frac{x^7}{6 \cdot 7} + \frac{x^{11}}{120 \cdot 11} \right]_0^1 $$
  - $$ = \left( \frac{1^3}{3} - \frac{1^7}{42} + \frac{1^{11}}{1320} \right) - (0) $$
  - $$ = \frac{1}{3} - \frac{1}{42} + \frac{1}{1320} $$
- **Step 4: Calculate the final value.**
  - $\frac{1}{3} \approx 0.333333$
  - $\frac{1}{42} \approx 0.023810$
  - $\frac{1}{1320} \approx 0.000758$
  - Approximation $\approx 0.333333 - 0.023810 + 0.000758 = 0.310281$.

<b>If you get this wrong, you should focus on:</b> Creating new series from known Maclaurin series
via substitution, and performing term-by-term integration of a power series to approximate a
definite integral.

</details>

8. **Question:** A ball is dropped from a height of 10 meters. After each bounce, it returns to 75%
   of its previous height. The time it takes to fall from a height $h$ is $\sqrt{h/5}$ seconds, and
   the time it takes to rise to a height $h$ is also $\sqrt{h/5}$ seconds. What is the total time
   the ball is in the air?

<details>
<summary>Answer</summary>
- This problem involves summing two different infinite geometric series: one for the distances and one for the time.
- **Step 1: Analyze the sequence of heights.**
  - Initial drop: $h_0 = 10$.
  - After 1st bounce: $h_1 = 10(0.75)$.
  - After 2nd bounce: $h_2 = 10(0.75)^2$.
  - In general, after the $n$-th bounce, the height is $h_n = 10(0.75)^n$.
- **Step 2: Calculate the time for the initial drop.**
  - $T_{drop,0} = \sqrt{h_0/5} = \sqrt{10/5} = \sqrt{2}$ seconds.
- **Step 3: Calculate the time for all subsequent rises and falls.**
  - For each bounce $n$ (starting at $n=1$), the ball rises to height $h_n$ and falls from height $h_n$.
  - Time for one rise-fall cycle from height $h_n$: $T_n = T_{rise} + T_{fall} = \sqrt{h_n/5} + \sqrt{h_n/5} = 2\sqrt{h_n/5}$.
  - $T_n = 2\sqrt{10(0.75)^n / 5} = 2\sqrt{2(0.75)^n} = 2\sqrt{2}(\sqrt{0.75})^n$.
- **Step 4: Sum the infinite series for the time of the bounces.**
  - Total time for bounces is $\sum_{n=1}^{\infty} T_n = \sum_{n=1}^{\infty} 2\sqrt{2}(\sqrt{0.75})^n$.
  - This is a geometric series with first term $a = 2\sqrt{2}\sqrt{0.75}$ and common ratio $r = \sqrt{0.75}$.
  - $r = \sqrt{3/4} = \frac{\sqrt{3}}{2} \approx 0.866 \lt 1$, so the series converges.
  - Sum = $\frac{a}{1-r} = \frac{2\sqrt{2}\sqrt{0.75}}{1-\sqrt{0.75}} = \frac{2\sqrt{1.5}}{1-\sqrt{0.75}} \approx \frac{2(1.2247)}{1-0.866} \approx \frac{2.4494}{0.134} \approx 18.28$ seconds.
- **Step 5: Calculate total time.**
  - Total Time = Initial Drop Time + Bounce Time
  - Total Time = $\sqrt{2} + 18.28 \approx 1.414 + 18.28 = 19.694$ seconds.

<b>If you get this wrong, you should focus on:</b> Setting up a model based on a word problem,
identifying the correct geometric series (especially the common ratio), and summing an infinite
geometric series.

</details>

9. **Question:** Show that the series $\sum_{n=2}^{\infty} \frac{(-1)^n}{\sqrt{n} \ln(n)}$ is
   conditionally convergent.

<details>
<summary>Answer</summary>
- To prove conditional convergence, we must show two things: (1) the series itself converges, and (2) the series of absolute values diverges.
- **Part 1: Show convergence of the original series.**
  - We use the Alternating Series Test on $\sum_{n=2}^{\infty} \frac{(-1)^n}{\sqrt{n} \ln(n)}$. Let $b_n = \frac{1}{\sqrt{n} \ln(n)}$.
  - Condition 1: $b_n \gt 0$ for $n \ge 2$. This is true.
  - Condition 2: $\lim_{n\to\infty} b_n = \lim_{n\to\infty} \frac{1}{\sqrt{n} \ln(n)} = 0$. This is true as the denominator grows to infinity.
  - Condition 3: $b_{n+1} \le b_n$. The function $f(x) = \sqrt{x}\ln(x)$ is a product of two increasing functions, so it is increasing. Therefore, its reciprocal, $b_n$, is decreasing.
  - Since all three conditions are met, the series converges by the Alternating Series Test.
- **Part 2: Show divergence of the series of absolute values.**
  - We need to test the series $\sum_{n=2}^{\infty} \left| \frac{(-1)^n}{\sqrt{n} \ln(n)} \right| = \sum_{n=2}^{\infty} \frac{1}{\sqrt{n} \ln(n)}$.
  - We can use the Direct Comparison Test. We know that for $n \gt e$, $\ln(n) \lt \sqrt{n}$.
  - Therefore, $\sqrt{n}\ln(n) \lt \sqrt{n}\sqrt{n} = n$.
  - This implies $\frac{1}{\sqrt{n}\ln(n)} \gt \frac{1}{n}$ for $n$ large enough.
  - We are comparing our series to the harmonic series $\sum \frac{1}{n}$, which diverges.
  - Since the terms of our series are greater than the terms of a divergent series, the series $\sum \frac{1}{\sqrt{n} \ln(n)}$ diverges by the Direct Comparison Test.
- **Conclusion:**
  - The series converges, but it does not converge absolutely. Therefore, the series is conditionally convergent.

<b>If you get this wrong, you should focus on:</b> The definition of conditional and absolute
convergence, applying the Alternating Series Test, and using the Direct Comparison Test with a
suitable bounding function (like comparing $\ln(n)$ to a power of $n$).

</details>

10. **Question:** Find the complete interval of convergence for the power series
    $\sum_{n=1}^{\infty} \frac{(2x-5)^n}{n \cdot 3^n}$.

<details>
<summary>Answer</summary>
- **Step 1: Use the Ratio Test to find the radius of convergence.**
  - Let $a_n = \frac{(2x-5)^n}{n \cdot 3^n}$.
  - $$ L = \lim_{n\to\infty} \left| \frac{a_{n+1}}{a_n} \right| = \lim_{n\to\infty} \left| \frac{(2x-5)^{n+1}}{(n+1)3^{n+1}} \cdot \frac{n \cdot 3^n}{(2x-5)^n} \right| $$
  - $$ L = \lim_{n\to\infty} \left| \frac{2x-5}{3} \cdot \frac{n}{n+1} \right| = \frac{|2x-5|}{3} \lim_{n\to\infty} \frac{n}{n+1} = \frac{|2x-5|}{3} $$
- **Step 2: Solve for the interval where the series converges.**
  - The series converges when $L \lt 1$, so $\frac{|2x-5|}{3} \lt 1 \implies |2x-5| \lt 3$.
  - This gives $-3 \lt 2x-5 \lt 3$.
  - Add 5 to all parts: $2 \lt 2x \lt 8$.
  - Divide by 2: $1 \lt x \lt 4$.
- **Step 3: Test the endpoints of the interval.**
  - **Endpoint x = 4:** Substitute into the series:
    - $$ \sum_{n=1}^{\infty} \frac{(2(4)-5)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{3^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{1}{n} $$
      This is the harmonic series, which diverges.
  - **Endpoint x = 1:** Substitute into the series:
    - $$ \sum_{n=1}^{\infty} \frac{(2(1)-5)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-3)^n}{n \cdot 3^n} = \sum_{n=1}^{\infty} \frac{(-1)^n}{n} $$
      This is the alternating harmonic series, which converges by the Alternating Series Test.
- **Step 4: State the final interval of convergence.**
  - The series converges for $x=1$ but not for $x=4$.
  - The interval of convergence is $[1, 4)$.

<b>If you get this wrong, you should focus on:</b> The full process for finding the interval of
convergence: using the Ratio Test correctly with a center other than 0, solving the resulting
inequality, and carefully testing the endpoints using appropriate series tests (like p-series or
AST).

</details>

11. **Question:** A sequence is defined by the recurrence relation
    $a_{n+1} = \frac{1}{2}(a_n + \frac{9}{a_n})$ with $a_1 = 1$. Assuming the sequence converges,
    what is its limit? Then, calculate the first four terms of the sequence to observe its rate of
    convergence.

<details>
<summary>Answer</summary>
- This is the Babylonian method for finding a square root.
- **Part 1: Find the limit.**
  - Assume the sequence converges to a limit $L$. Since all terms will be positive, $L$ must be positive.
  - As $n \to \infty$, $a_{n+1} \to L$ and $a_n \to L$.
  - Substitute $L$ into the recurrence relation:
    - $$ L = \frac{1}{2}\left(L + \frac{9}{L}\right) $$
  - Solve for $L$:
    - $$ 2L = L + \frac{9}{L} \implies L = \frac{9}{L} \implies L^2 = 9 $$
  - Since $L$ must be positive, the limit is $L=3$.
- **Part 2: Calculate the first four terms.**
  - $a_1 = 1$
  - $a_2 = \frac{1}{2}\left(1 + \frac{9}{1}\right) = \frac{1}{2}(10) = 5$
  - $a_3 = \frac{1}{2}\left(5 + \frac{9}{5}\right) = \frac{1}{2}\left(5 + 1.8\right) = \frac{1}{2}(6.8) = 3.4$
  - $a_4 = \frac{1}{2}\left(3.4 + \frac{9}{3.4}\right) \approx \frac{1}{2}(3.4 + 2.64705) = \frac{1}{2}(6.04705) \approx 3.0235$
- **Observation:** The sequence converges to the limit of 3 very quickly. The first term is off by 2, the second is off by 2, the third is off by 0.4, and the fourth is only off by about 0.02. This demonstrates quadratic convergence.

<b>If you get this wrong, you should focus on:</b> The technique for finding the limit of a
convergent recursive sequence and performing iterative calculations.

</details>

12. **Question:** Determine if the series $\sum_{n=1}^\infty \left(1 - \frac{1}{n}\right)^{n^2}$
    converges or diverges. (Hint: A test other than the Ratio Test will be much more effective).

<details>
<summary>Answer</summary>
- The presence of the $n^2$ power in the exponent strongly suggests using the Root Test.
- Let $a_n = \left(1 - \frac{1}{n}\right)^{n^2}$.
- Apply the Root Test:
  - $$ L = \lim_{n\to\infty} \sqrt[n]{|a_n|} = \lim_{n\to\infty} \sqrt[n]{\left(1 - \frac{1}{n}\right)^{n^2}} $$
  - $$ L = \lim_{n\to\infty} \left( \left(1 - \frac{1}{n}\right)^{n^2} \right)^{1/n} = \lim_{n\to\infty} \left(1 - \frac{1}{n}\right)^n $$
- This is a standard limit form related to the definition of $e$. Recall the limit definition $\lim_{n\to\infty} (1 + \frac{x}{n})^n = e^x$.
- In our case, $x=-1$.
  - $$ L = e^{-1} = \frac{1}{e} $$
- Since $e \approx 2.718$, we have $L = 1/e \lt 1$.
- Because the limit $L$ is less than 1, the series converges by the Root Test.

<b>If you get this wrong, you should focus on:</b> Recognizing when to apply the Root Test
(especially for terms with powers of n) and knowing the limit definition of the exponential function
$e^x$.

</details>

13. **Question:** Find the sum of the series $\sum_{n=1}^{\infty} \frac{2}{n^2+4n+3}$.

<details>
<summary>Answer</summary>
- This is a telescoping series that requires factoring the denominator and using partial fractions.
- **Step 1: Factor the denominator and decompose the term.**
  - $n^2+4n+3 = (n+1)(n+3)$.
  - $$ \frac{2}{(n+1)(n+3)} = \frac{A}{n+1} + \frac{B}{n+3} $$
  - $$ 2 = A(n+3) + B(n+1) $$
  - Let $n=-1$: $2 = A(2) \implies A=1$.
  - Let $n=-3$: $2 = B(-2) \implies B=-1$.
  - The term is $\frac{1}{n+1} - \frac{1}{n+3}$.
- **Step 2: Write out the partial sum $S_N$ to find the cancellation pattern.**
  - $n=1: (\frac{1}{2} - \frac{1}{4})$
  - $n=2: (\frac{1}{3} - \frac{1}{5})$
  - $n=3: (\frac{1}{4} - \frac{1}{6})$
  - $n=4: (\frac{1}{5} - \frac{1}{7})$
  - ...
  - $n=N-1: (\frac{1}{N} - \frac{1}{N+2})$
  - $n=N: (\frac{1}{N+1} - \frac{1}{N+3})$
- The terms that do not cancel at the beginning are $\frac{1}{2}$ and $\frac{1}{3}$.
- The terms that do not cancel at the end are $-\frac{1}{N+2}$ (from the $n=N-1$ term) and $-\frac{1}{N+3}$ (from the $n=N$ term).
- $S_N = \frac{1}{2} + \frac{1}{3} - \frac{1}{N+2} - \frac{1}{N+3}$.
- **Step 3: Evaluate the limit.**
  - $$ S = \lim_{N\to\infty} \left( \frac{1}{2} + \frac{1}{3} - \frac{1}{N+2} - \frac{1}{N+3} \right) = \frac{1}{2} + \frac{1}{3} - 0 - 0 = \frac{3+2}{6} = \frac{5}{6} $$

<b>If you get this wrong, you should focus on:</b> Factoring quadratic denominators, partial
fraction decomposition, and carefully identifying the surviving terms in a telescoping series where
the terms are not consecutive.

</details>

14. **Question:** A bank offers a special savings account. If you deposit USD 100 on the first day
    of the month, they add a USD 1 bonus at the end of the month. If you deposit USD 100 on the
    first day of the next month, they add a USD 2 bonus, and so on, with the bonus increasing by USD
    1 each month. You deposit USD 100 each month for 2 years (24 months). What is the total amount
    of money in the account immediately after the 24th month's bonus is paid? (Assume no other
    interest is paid).

<details>
<summary>Answer</summary>
- This problem can be broken into two parts: the sum of your deposits and the sum of the bank's bonuses.
- **Part 1: Sum of your deposits.**
  - You deposit 100 each month for 24 months.
  - Total Deposits = $100 \times 24 = \text{USD } 2,400$.
- **Part 2: Sum of the bank's bonuses.**
  - The bonuses form an arithmetic sequence: 1, 2, 3, ..., 24.
  - We need to find the sum of this arithmetic series, $S_{24}$.
  - $a_1 = 1$, $a_{24} = 24$, $n=24$.
  - $S_{24} = \frac{n}{2}(a_1 + a_n) = \frac{24}{2}(1 + 24) = 12(25) = \text{USD } 300$.
- **Part 3: Total amount.**
  - Total Amount = Total Deposits + Total Bonuses
  - Total Amount = $2,400 + 300 = \text{USD } 2,700$.

<b>If you get this wrong, you should focus on:</b> Breaking a word problem into its constituent
parts and recognizing how to apply the formula for the sum of a simple arithmetic series.

</details>

15. **Question:** Using the Maclaurin series for $e^x$, find the exact value of the sum
    $\sum_{n=0}^{\infty} \frac{2^n}{n!}$. Then, use this result to find the sum of the related
    series $\sum_{n=2}^{\infty} \frac{2^n}{(n-1)!}$.

<details>
<summary>Answer</summary>
- **Part 1: Find the sum of the first series.**
  - The Maclaurin series for $e^x$ is $\sum_{n=0}^{\infty} \frac{x^n}{n!}$.
  - The series $\sum_{n=0}^{\infty} \frac{2^n}{n!}$ matches this form exactly with $x=2$.
  - Therefore, the sum of the first series is $e^2$.
- **Part 2: Find the sum of the second series.**
  - Let $S = \sum_{n=2}^{\infty} \frac{2^n}{(n-1)!}$. This series is not in a standard form. We need to manipulate the index to make it match a known series.
  - Let $k = n-1$. When $n=2$, $k=1$. As $n \to \infty$, $k \to \infty$. Also, $n = k+1$.
  - Substitute these into the sum:
    - $$ S = \sum_{k=1}^{\infty} \frac{2^{k+1}}{k!} = \sum_{k=1}^{\infty} \frac{2 \cdot 2^k}{k!} = 2 \sum_{k=1}^{\infty} \frac{2^k}{k!} $$
  - Now, the sum $\sum_{k=1}^{\infty} \frac{2^k}{k!}$ is almost $e^2$.
  - We know $e^2 = \sum_{k=0}^{\infty} \frac{2^k}{k!} = \frac{2^0}{0!} + \sum_{k=1}^{\infty} \frac{2^k}{k!} = 1 + \sum_{k=1}^{\infty} \frac{2^k}{k!}$.
  - So, $\sum_{k=1}^{\infty} \frac{2^k}{k!} = e^2 - 1$.
  - Substitute this back into our expression for S:
    - $$ S = 2(e^2 - 1) $$

<b>If you get this wrong, you should focus on:</b> Recognizing known Maclaurin series, and using
index manipulation (re-indexing) to transform a given series into a more familiar form.

</details>

16. **Question:** The sum $\sum_{k=1}^n k^2 = \frac{n(n+1)(2n+1)}{6}$ is a well-known formula. Use
    this to find the value of the series $\sum_{k=5}^{20} (3k^2 - 5)$.

<details>
<summary>Answer</summary>
- We need to manipulate the sum to use the given formula, which starts at $k=1$.
- **Step 1: Split the sum and use properties of summation.**
  - $$ \sum_{k=5}^{20} (3k^2 - 5) = \sum_{k=5}^{20} 3k^2 - \sum_{k=5}^{20} 5 = 3\sum_{k=5}^{20} k^2 - 5 \sum_{k=5}^{20} 1 $$
- **Step 2: Adjust the indices of the sums.**
  - For the first sum: $\sum_{k=5}^{20} k^2 = \left(\sum_{k=1}^{20} k^2\right) - \left(\sum_{k=1}^{4} k^2\right)$.
  - For the second sum: There are $20 - 5 + 1 = 16$ terms. So $\sum_{k=5}^{20} 5 = 5 \times 16 = 80$.
- **Step 3: Apply the formula for the sum of squares.**
  - $\sum_{k=1}^{20} k^2 = \frac{20(20+1)(2(20)+1)}{6} = \frac{20(21)(41)}{6} = 10(7)(41) = 2870$.
  - $\sum_{k=1}^{4} k^2 = \frac{4(4+1)(2(4)+1)}{6} = \frac{4(5)(9)}{6} = 2(5)(3) = 30$.
- **Step 4: Substitute back and calculate the final result.**
  - $\sum_{k=5}^{20} k^2 = 2870 - 30 = 2840$.
  - Original expression = $3(2840) - 80 = 8520 - 80 = 8440$.

<b>If you get this wrong, you should focus on:</b> Properties of sigma notation, specifically how to
change the starting and ending indices of a sum to match a known formula.

</details>

17. **Question:** Does the series $\sum_{n=1}^\infty \frac{n^n}{n!}$ converge or diverge? Justify
    your answer with an appropriate test.

<details>
<summary>Answer</summary>
- This series can be tested with the Ratio Test, but a simpler approach is the Test for Divergence.
- **Method 1: Test for Divergence**
  - Let's examine the limit of the terms $a_n = \frac{n^n}{n!}$.
  - Write out the term: $a_n = \frac{n \cdot n \cdot n \cdots n}{1 \cdot 2 \cdot 3 \cdots n} = \left(\frac{n}{1}\right) \left(\frac{n}{2}\right) \cdots \left(\frac{n}{n}\right)$.
  - Each factor $(\frac{n}{k})$ is $\ge 1$. The first factor is $n$.
  - So, $a_n = \frac{n}{1} \cdot (\text{product of terms } \ge 1) \ge n$.
  - As $n \to \infty$, $a_n \to \infty$ because $a_n \ge n$.
  - Since $\lim_{n\to\infty} a_n \ne 0$, the series diverges by the Test for Divergence.
- **Method 2: Ratio Test**
  - $$ L = \lim_{n\to\infty} \left| \frac{(n+1)^{n+1}}{(n+1)!} \cdot \frac{n!}{n^n} \right| = \lim_{n\to\infty} \frac{(n+1)^{n+1}}{(n+1)n!} \cdot \frac{n!}{n^n} $$
  - $$ L = \lim_{n\to\infty} \frac{(n+1)^n}{n^n} = \lim_{n\to\infty} \left(\frac{n+1}{n}\right)^n = \lim_{n\to\infty} \left(1 + \frac{1}{n}\right)^n = e $$
- Since $L = e \approx 2.718 \gt 1$, the series diverges by the Ratio Test.

<b>If you get this wrong, you should focus on:</b> The Test for Divergence as a first-line check,
and the application of the Ratio Test leading to the limit definition of $e$.

</details>

18. **Question:** A sequence is defined recursively by $x_1 = \sqrt{2}$ and
    $x_{n+1} = \sqrt{2 + x_n}$ for $n \ge 1$. Prove that this sequence converges and find its limit.

<details>
<summary>Answer</summary>
- To prove convergence without knowing the limit, we can use the Monotone Convergence Theorem, which requires showing the sequence is both monotonic and bounded.
- **Step 1: Show the sequence is bounded above by 2.**
  - We use mathematical induction.
  - Base Case: $x_1 = \sqrt{2} \lt 2$. True.
  - Inductive Hypothesis: Assume $x_k \lt 2$ for some integer $k \ge 1$.
  - Inductive Step: We must show $x_{k+1} \lt 2$.
    - $$ x_{k+1} = \sqrt{2 + x_k} \lt \sqrt{2 + 2} = \sqrt{4} = 2 $$
    The inequality holds because $x_k \lt 2$. Thus, the sequence is bounded above by 2.
- **Step 2: Show the sequence is monotonic increasing ($x_{n+1} \ge x_n$).**
  - We use induction again.
  - Base Case: $x_2 = \sqrt{2+\sqrt{2}} \gt \sqrt{2} = x_1$. True.
  - Inductive Hypothesis: Assume $x_k \ge x_{k-1}$ for some integer $k \ge 2$.
  - Inductive Step: We must show $x_{k+1} \ge x_k$.
    - $$ x_k \ge x_{k-1} \implies 2+x_k \ge 2+x_{k-1} \implies \sqrt{2+x_k} \ge \sqrt{2+x_{k-1}} \implies x_{k+1} \ge x_k $$
      Thus, the sequence is monotonic increasing.
- **Step 3: Conclude convergence and find the limit.**
  - Since the sequence is bounded above and monotonic increasing, it must converge by the Monotone Convergence Theorem. Let the limit be $L$.
  - To find $L$, we take the limit of the recurrence relation:
    - $$ \lim_{n\to\infty} x_{n+1} = \lim_{n\to\infty} \sqrt{2 + x_n} $$
    - $$ L = \sqrt{2 + L} $$
  - Square both sides: $L^2 = 2 + L \implies L^2 - L - 2 = 0$.
  - Factor the quadratic: $(L-2)(L+1) = 0$.
  - The possible limits are $L=2$ or $L=-1$. Since all terms of the sequence are positive, the limit must be positive.
  - Therefore, the limit of the sequence is 2.

<b>If you get this wrong, you should focus on:</b> The Monotone Convergence Theorem, proof by
mathematical induction for boundedness and monotonicity, and finding the limit of a recursively
defined sequence.

</details>

</details>
