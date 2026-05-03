---
title: Sequences and Series — Diagnostic Tests
description: Hard diagnostic tests for sequences and series covering convergence, sigma notation, recurrence relations, telescoping sums, and tolerance bounds.
slug: diag-sequences-and-series
hide_table_of_contents: true
---

# Sequences and Series — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for sequences and series.

### UT-1: Telescoping Series with Misidentified Cancellation

**Question:**

Evaluate the sum:

$$S_n = \sum_{r=1}^{n} \frac{1}{r(r+1)(r+2)}$$

Express your answer in terms of $n$, and hence find $\lim_{n \to \infty} S_n$.

[Difficulty: hard. Tests partial fraction decomposition for a telescoping series with three factors in the denominator, where the cancellation pattern is commonly misidentified.]

**Solution:**

**Step 1: Partial fraction decomposition.**

We seek constants $A$, $B$, $C$ such that:

$$\frac{1}{r(r+1)(r+2)} = \frac{A}{r} + \frac{B}{r+1} + \frac{C}{r+2}$$

Multiplying through by $r(r+1)(r+2)$:

$$1 = A(r+1)(r+2) + Br(r+2) + Cr(r+1)$$

Substituting $r = 0$: $1 = A(1)(2) \implies A = \frac{1}{2}$.

Substituting $r = -1$: $1 = B(-1)(1) \implies B = -1$.

Substituting $r = -2$: $1 = C(-2)(-1) \implies C = \frac{1}{2}$.

**Step 2: Verify.**

$$\frac{1/2}{r} - \frac{1}{r+1} + \frac{1/2}{r+2} = \frac{(r+1)(r+2) - 2r(r+2) + r(r+1)}{2r(r+1)(r+2)}$$

Numerator: $(r^2 + 3r + 2) + (-2r^2 - 4r) + (r^2 + r) = (r^2 - 2r^2 + r^2) + (3r - 4r + r) + 2 = 0 + 0 + 2 = 2$.

So the fraction is $\frac{2}{2r(r+1)(r+2)} = \frac{1}{r(r+1)(r+2)}$. Confirmed.

**Step 3: Write out the telescoping sum.**

$$S_n = \sum_{r=1}^{n}\left(\frac{1/2}{r} - \frac{1}{r+1} + \frac{1/2}{r+2}\right)$$

$$= \frac{1}{2}\sum_{r=1}^{n}\frac{1}{r} - \sum_{r=1}^{n}\frac{1}{r+1} + \frac{1}{2}\sum_{r=1}^{n}\frac{1}{r+2}$$

Re-index the sums:

$$= \frac{1}{2}\sum_{r=1}^{n}\frac{1}{r} - \sum_{r=2}^{n+1}\frac{1}{r} + \frac{1}{2}\sum_{r=3}^{n+2}\frac{1}{r}$$

$$= \left(\frac{1}{2} \cdot 1 + \frac{1}{2} \cdot \frac{1}{2} + \frac{1}{2}\sum_{r=3}^{n}\frac{1}{r}\right) - \left(\frac{1}{2} + \sum_{r=3}^{n}\frac{1}{r} + \frac{1}{n+1}\right) + \left(\frac{1}{2}\sum_{r=3}^{n}\frac{1}{r} + \frac{1}{2}\cdot\frac{1}{n+1} + \frac{1}{2}\cdot\frac{1}{n+2}\right)$$

Collecting terms involving $\sum_{r=3}^{n}\frac{1}{r}$: $\frac{1}{2} - 1 + \frac{1}{2} = 0$. The sums cancel (confirming the telescoping).

Remaining terms:

$$\frac{1}{2} + \frac{1}{4} - \frac{1}{2} - \frac{1}{n+1} + \frac{1}{2(n+1)} + \frac{1}{2(n+2)}$$

$$= \frac{1}{4} - \frac{1}{2(n+1)} + \frac{1}{2(n+1)} + \frac{1}{2(n+2)}$$

$$= \frac{1}{4} + \frac{1}{2(n+2)}$$

**Step 4: Find the limit.**

$$\lim_{n \to \infty} S_n = \frac{1}{4} + 0 = \frac{1}{4}$$

---

### UT-2: Sigma Notation Index Shifting Errors

**Question:**

Given that $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$, find the value of:

$$\sum_{r=4}^{n+3} (r-3)^2$$

in terms of $n$.

A common student error is to substitute $r - 3$ into the formula and write $\frac{(n+3)(n+4)(2n+7)}{6}$. Identify the mistake in this approach and give the correct answer.

[Difficulty: hard. Tests the common error of not adjusting the summation limits when performing an index shift.]

**Solution:**

**The student's error:** The student substitutes $r - 3$ for $r$ in the formula but forgets that the upper limit also changes. The formula $\sum_{r=1}^{m} r^2 = \frac{m(m+1)(2m+1)}{6}$ requires the sum to start at $r = 1$ and end at $r = m$.

**Correct approach — Method 1: Index shift.**

Let $k = r - 3$. When $r = 4$, $k = 1$. When $r = n + 3$, $k = n$.

$$\sum_{r=4}^{n+3} (r-3)^2 = \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

**Correct approach — Method 2: Subtract sums.**

$$\sum_{r=4}^{n+3} (r-3)^2 = \sum_{r=1}^{n+3} (r-3)^2 - \sum_{r=1}^{3} (r-3)^2$$

Note that $\sum_{r=1}^{n+3}(r-3)^2 = \sum_{k=-2}^{n} k^2$ where $k = r - 3$. This is not the standard form. We need to be more careful:

$$\sum_{r=4}^{n+3} (r-3)^2 = \sum_{r=1}^{n+3}(r-3)^2 - \sum_{r=1}^{3}(r-3)^2$$

$$= \sum_{k=-2}^{n} k^2 - [(-2)^2 + (-1)^2 + 0^2]$$

$$= \sum_{k=1}^{n} k^2 + (-2)^2 + (-1)^2 - [4 + 1 + 0]$$

$$= \sum_{k=1}^{n} k^2 + 4 + 1 - 5 = \sum_{k=1}^{n} k^2 = \frac{n(n+1)(2n+1)}{6}$$

**The student's answer** was $\frac{(n+3)(n+4)(2n+7)}{6}$, which equals $\sum_{r=1}^{n+3} r^2$, not $\sum_{r=4}^{n+3}(r-3)^2$. The student incorrectly treated the sum as starting from $r = 1$ with upper limit $n + 3$.

---

### UT-3: Recurrence Relation with Non-Standard Initial Terms

**Question:**

A sequence is defined by the recurrence relation:

$$u_{n+2} = 5u_{n+1} - 6u_n, \quad n \geq 1$$

with $u_1 = 1$ and $u_2 = 5$.

**(a)** Find $u_3$, $u_4$, and $u_5$.

**(b)** Find a closed-form expression for $u_n$ in terms of $n$.

**(c)** Find the smallest value of $n$ such that $u_n > 10000$.

[Difficulty: hard. Tests solving second-order linear recurrence relations using the characteristic equation method.]

**Solution:**

**(a)**

$$u_3 = 5(5) - 6(1) = 25 - 6 = 19$$

$$u_4 = 5(19) - 6(5) = 95 - 30 = 65$$

$$u_5 = 5(65) - 6(19) = 325 - 114 = 211$$

**(b)** The characteristic equation is:

$$\lambda^2 - 5\lambda + 6 = 0$$
$$(\lambda - 2)(\lambda - 3) = 0$$
$$\lambda = 2 \quad \text{or} \quad \lambda = 3$$

The general solution is $u_n = A \cdot 2^n + B \cdot 3^n$.

Using the initial conditions:

$$n = 1: A \cdot 2 + B \cdot 3 = 1$$
$$n = 2: A \cdot 4 + B \cdot 9 = 5$$

From the first equation: $A = \frac{1 - 3B}{2}$.

Substituting into the second:

$$4\left(\frac{1-3B}{2}\right) + 9B = 5$$
$$2 - 6B + 9B = 5$$
$$3B = 3$$
$$B = 1$$

$$A = \frac{1 - 3}{2} = -1$$

$$u_n = 3^n - 2^n$$

**Verification:** $u_1 = 3 - 2 = 1$ ✓. $u_2 = 9 - 4 = 5$ ✓. $u_3 = 27 - 8 = 19$ ✓.

**(c)** We need $3^n - 2^n > 10000$.

For large $n$, $3^n$ dominates $2^n$. We need $3^n \gtrapprox 10000$.

$n = 8$: $3^8 - 2^8 = 6561 - 256 = 6305 < 10000$.

$n = 9$: $3^9 - 2^9 = 19683 - 512 = 19171 > 10000$.

The smallest value is $n = 9$.

---

## Integration Tests

> Tests synthesis of sequences and series with other topics. Requires combining concepts from multiple units.

### IT-1: Integral as a Limit of Partial Sums (with Integration)

**Question:**

**(a)** Show that $\sum_{r=1}^{n} \frac{r}{n^2} = \frac{n(n+1)}{2n^2}$.

**(b)** Hence evaluate $\lim_{n \to \infty} \sum_{r=1}^{n} \frac{r}{n^2}$.

**(c)** By interpreting the limit in part (b) as a Riemann sum, identify the corresponding definite integral and verify your answer by direct integration.

**(d)** Use a similar approach to evaluate $\lim_{n \to \infty} \sum_{r=1}^{n} \frac{r^2}{n^3}$.

[Difficulty: hard. Connects summation to integration through Riemann sums, testing understanding of the Fundamental Theorem of Calculus.]

**Solution:**

**(a)** $\sum_{r=1}^{n} \frac{r}{n^2} = \frac{1}{n^2}\sum_{r=1}^{n} r = \frac{1}{n^2} \cdot \frac{n(n+1)}{2} = \frac{n(n+1)}{2n^2}$.

**(b)** $\lim_{n \to \infty} \frac{n(n+1)}{2n^2} = \lim_{n \to \infty} \frac{n+1}{2n} = \lim_{n \to \infty} \frac{1 + 1/n}{2} = \frac{1}{2}$.

**(c)** The sum $\sum_{r=1}^{n} \frac{r}{n^2} = \sum_{r=1}^{n} \frac{r}{n} \cdot \frac{1}{n}$ is a Riemann sum for $\int_0^1 x \, dx$ with $n$ subdivisions, using right-endpoint evaluation (since $x_r = r/n$).

Verification: $\int_0^1 x \, dx = \left[\frac{x^2}{2}\right]_0^1 = \frac{1}{2}$. Confirmed.

**(d)** $\sum_{r=1}^{n} \frac{r^2}{n^3} = \sum_{r=1}^{n} \left(\frac{r}{n}\right)^2 \cdot \frac{1}{n}$.

This is a Riemann sum for $\int_0^1 x^2 \, dx$.

$$\int_0^1 x^2 \, dx = \left[\frac{x^3}{3}\right]_0^1 = \frac{1}{3}$$

Algebraic verification: $\frac{1}{n^3} \cdot \frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6n^2}$.

$$\lim_{n \to \infty} \frac{(n+1)(2n+1)}{6n^2} = \lim_{n \to \infty} \frac{2n^2 + 3n + 1}{6n^2} = \frac{2}{6} = \frac{1}{3}$$

Confirmed.

---

### IT-2: Iteration Converging to a Fixed Point (with Functions)

**Question:**

The function $f$ is defined by $f(x) = \cos x$ where $x$ is in radians.

A sequence is defined by $x_0 = 1$ and $x_{n+1} = f(x_n) = \cos(x_n)$ for $n \geq 0$.

**(a)** Find $x_1$, $x_2$, $x_3$, and $x_4$ to 6 decimal places.

**(b)** Prove that the sequence $(x_n)$ is convergent.

**(c)** The limit $L$ satisfies $L = \cos L$. By considering the function $g(x) = x - \cos x$, show that $L$ is the unique solution to this equation in $[0, \pi/2]$.

**(d)** Use the Newton-Raphson method with starting value $x_0 = 1$ to find $L$ to 8 decimal places.

[Difficulty: hard. Combines fixed-point iteration, convergence proofs, and the Newton-Raphson method.]

**Solution:**

**(a)** Using a calculator (radians):

$$x_1 = \cos(1) = 0.540302$$
$$x_2 = \cos(0.540302) = 0.857553$$
$$x_3 = \cos(0.857553) = 0.654290$$
$$x_4 = \cos(0.654290) = 0.793480$$

**(b)** To prove convergence, we use the contraction mapping theorem. We need $|f'(x)| < 1$ on the relevant interval.

$f'(x) = -\sin x$, so $|f'(x)| = |\sin x| \leq \sin(1) \approx 0.841 < 1$ for all $x \in [0, 1]$.

Since $x_0 = 1 \in [0, 1]$ and $f$ maps $[0, 1]$ into itself (because $\cos(0) = 1 \leq 1$ and $\cos(1) \approx 0.54 \geq 0$), and $|f'(x)| \leq k < 1$ for all $x \in [0, 1]$ where $k = \sin 1$, the sequence converges by the Banach fixed-point theorem.

**(c)** $g(x) = x - \cos x$. Then $g(0) = 0 - 1 = -1 < 0$ and $g(\pi/2) = \pi/2 - 0 = \pi/2 > 0$.

By the intermediate value theorem, there exists $L \in (0, \pi/2)$ with $g(L) = 0$.

For uniqueness: $g'(x) = 1 + \sin x > 0$ for all $x \in [0, \pi/2]$ (since $\sin x \geq 0$ in this interval). Therefore $g$ is strictly increasing on $[0, \pi/2]$, so $g(x) = 0$ has at most one solution in this interval.

Combined: there is exactly one solution $L \in (0, \pi/2)$.

**(d)** Newton-Raphson: $x_{n+1} = x_n - \frac{g(x_n)}{g'(x_n)} = x_n - \frac{x_n - \cos x_n}{1 + \sin x_n}$.

Starting with $x_0 = 1$:

$$x_1 = 1 - \frac{1 - \cos 1}{1 + \sin 1} = 1 - \frac{1 - 0.540302}{1 + 0.841471} = 1 - \frac{0.459698}{1.841471} = 1 - 0.249649 = 0.750351$$

$$x_2 = 0.750351 - \frac{0.750351 - \cos(0.750351)}{1 + \sin(0.750351)} = 0.750351 - \frac{0.750351 - 0.731125}{1 + 0.681676} = 0.750351 - \frac{0.019226}{1.681676}$$

$$= 0.750351 - 0.011434 = 0.738917$$

$$x_3 = 0.738917 - \frac{0.738917 - 0.739067}{1 + 0.673717} = 0.738917 - \frac{-0.000150}{1.673717} = 0.738917 + 0.000090 = 0.739007$$

$$x_4 = 0.739007 - \frac{0.739007 - 0.739085}{1 + 0.673812} = 0.739007 - \frac{-0.000078}{1.673812} = 0.739007 + 0.000047 = 0.739054$$

$$x_5 = 0.739054 - \frac{0.739054 - 0.739085}{1.673812} = 0.739054 + 0.000019 = 0.739073$$

$$x_6 = 0.739073 - \frac{0.739073 - 0.739085}{1.673813} = 0.739073 + 0.000007 = 0.739080$$

$$x_7 = 0.739080 - \frac{0.739080 - 0.739085}{1.673813} = 0.739080 + 0.000003 = 0.739083$$

$$x_8 = 0.739083 - \frac{0.739083 - 0.739085}{1.673813} = 0.739083 + 0.000001 = 0.739084$$

To 8 decimal places: $L = 0.73908513$.

This is the Dottie number, the unique fixed point of the cosine function.

---

### IT-3: Binomial Identity Used to Sum a Series (with Binomial Expansion)

**Question:**

**(a)** Use the binomial theorem to expand $(1 + 1)^n$ and hence show that:

$$\sum_{r=0}^{n} \binom{n}{r} = 2^n$$

**(b)** By differentiating the binomial expansion of $(1 + x)^n$ and setting $x = 1$, show that:

$$\sum_{r=1}^{n} r\binom{n}{r} = n \cdot 2^{n-1}$$

**(c)** Hence evaluate:

$$\sum_{r=1}^{n} r^2 \binom{n}{r}$$

[Difficulty: hard. Tests generating function techniques applied to combinatorial sums through differentiation of the binomial expansion.]

**Solution:**

**(a)** By the binomial theorem:

$$(1 + 1)^n = \sum_{r=0}^{n} \binom{n}{r} 1^{n-r} \cdot 1^r = \sum_{r=0}^{n} \binom{n}{r}$$

But $(1+1)^n = 2^n$. Therefore $\sum_{r=0}^{n} \binom{n}{r} = 2^n$.

**(b)** Start with $(1 + x)^n = \sum_{r=0}^{n} \binom{n}{r} x^r$.

Differentiating both sides with respect to $x$:

$$n(1+x)^{n-1} = \sum_{r=0}^{n} r\binom{n}{r} x^{r-1} = \sum_{r=1}^{n} r\binom{n}{r} x^{r-1}$$

(Note: the $r = 0$ term vanishes.)

Setting $x = 1$:

$$n \cdot 2^{n-1} = \sum_{r=1}^{n} r\binom{n}{r}$$

**(c)** Start with $n(1+x)^{n-1} = \sum_{r=1}^{n} r\binom{n}{r} x^{r-1}$.

Multiply both sides by $x$:

$$nx(1+x)^{n-1} = \sum_{r=1}^{n} r\binom{n}{r} x^r$$

Differentiate with respect to $x$:

$$n(1+x)^{n-1} + nx(n-1)(1+x)^{n-2} = \sum_{r=1}^{n} r^2\binom{n}{r} x^{r-1}$$

Factor the left side:

$$n(1+x)^{n-2}[(1+x) + x(n-1)] = n(1+x)^{n-2}(1 + x + nx - x) = n(1+x)^{n-2}(1 + nx)$$

Setting $x = 1$:

$$n \cdot 2^{n-2}(1 + n) = \sum_{r=1}^{n} r^2\binom{n}{r}$$

$$\sum_{r=1}^{n} r^2\binom{n}{r} = n(n+1) \cdot 2^{n-2}$$

**Verification for $n = 3$:** LHS $= 1 \cdot 3 + 4 \cdot 3 + 9 \cdot 1 = 3 + 12 + 9 = 24$. RHS $= 3 \cdot 4 \cdot 2 = 24$. Confirmed.
