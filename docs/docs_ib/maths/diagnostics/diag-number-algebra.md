---
title: Number and Algebra — Diagnostic Tests
description: Hardest IB Mathematics diagnostic tests for number and algebra covering sigma notation, binomial theorem, permutations, logarithms, and proof by induction.
slug: diag-number-algebra
hide_table_of_contents: true
---

# Number and Algebra — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for number and algebra.

### UT-1: Sigma Notation Index Shifting Error

**Question:**

A student writes the following "simplification":

$$\sum_{n=1}^{5} n = \sum_{n=0}^{4} n$$

**(a)** Identify the error and write the correct identity for shifting the index by $-1$.

**(b)** Evaluate $\displaystyle\sum_{k=3}^{20} (k - 2)$ by reindexing to start from $k = 1$, and verify your answer using the formula for the sum of the first $N$ positive integers.

**(c)** Evaluate $\displaystyle\sum_{n=1}^{10} n(n+1) - \sum_{n=2}^{11} (n-1)^2$.

[Difficulty: hard. Tests the common error of shifting the index without adjusting the term.]

**Solution:**

**(a)** When shifting the index from $n$ to $n' = n - 1$ (so $n = n' + 1$), the bounds change from $n = 1$ to $n' = 0$ and $n = 5$ to $n' = 4$, but the general term must also change. The correct identity is:

$$\sum_{n=1}^{5} n = \sum_{n'=0}^{4} (n' + 1)$$

The student's error was writing $\sum_{n=0}^{4} n$ instead of $\sum_{n=0}^{4} (n + 1)$. The LHS equals $15$ but the student's RHS equals $10$.

**(b)** Let $j = k - 2$, so when $k = 3$, $j = 1$, and when $k = 20$, $j = 18$:

$$\sum_{k=3}^{20} (k - 2) = \sum_{j=1}^{18} j = \frac{18 \times 19}{2} = 171$$

Verification: the original sum has 18 terms from $1$ to $18$, confirming the result.

**(c)**

$$\sum_{n=1}^{10} n(n+1) = \sum_{n=1}^{10}(n^2 + n) = \frac{10 \times 11 \times 21}{6} + \frac{10 \times 11}{2} = 385 + 55 = 440$$

For the second sum, let $m = n - 1$, so when $n = 2$, $m = 1$, and when $n = 11$, $m = 10$:

$$\sum_{n=2}^{11} (n-1)^2 = \sum_{m=1}^{10} m^2 = \frac{10 \times 11 \times 21}{6} = 385$$

Therefore the difference is $440 - 385 = 55$.

---

### UT-2: Binomial Theorem with Non-Standard Exponent

**Question:**

**(a)** Find the coefficient of $x^3$ in the binomial expansion of $(1 - 2x)^{-1/2}$.

**(b)** Determine the exact range of $x$ for which the expansion converges.

**(c)** A student claims that the coefficient of $x^2$ in $(1 - 2x)^{-1/2}$ is $-\dfrac{1}{2} \cdot \left(-\dfrac{3}{2}\right) \cdot (-2)^2 = -3$. Identify the error and find the correct coefficient.

[Difficulty: hard. Tests binomial expansion with fractional negative exponent, convergence condition, and sign errors.]

**Solution:**

**(a)** Using the general binomial expansion $(1 + x)^n = 1 + nx + \frac{n(n-1)}{2!}x^2 + \frac{n(n-1)(n-2)}{3!}x^3 + \cdots$ with $n = -\frac{1}{2}$ and replacing $x$ with $-2x$:

The general term in $x^k$ is:

$$\binom{-1/2}{k}(-2x)^k$$

For $k = 3$:

$$\binom{-1/2}{3} = \frac{(-1/2)(-3/2)(-5/2)}{3!} = \frac{-15/8}{6} = -\frac{15}{48} = -\frac{5}{16}$$

$$\binom{-1/2}{3}(-2)^3 = -\frac{5}{16} \times (-8) = \frac{5}{2}$$

So the coefficient of $x^3$ is $\dfrac{5}{2}$.

**(b)** The expansion $(1 + x)^n$ for non-integer $n$ converges when $|x| \lt 1$. Here we have $(1 - 2x)^{-1/2}$, so we need $|-2x| \lt 1$, i.e., $|x| \lt \dfrac{1}{2}$.

**(c)** The student computed $\frac{n(n-1)}{2!}(-2)^2$ but used $n = -\frac{1}{2}$ incorrectly. The correct computation for the coefficient of $x^2$:

$$\binom{-1/2}{2}(-2)^2 = \frac{(-1/2)(-3/2)}{2} \times 4 = \frac{3/4}{2} \times 4 = \frac{3}{8} \times 4 = \frac{3}{2}$$

The student's error was multiplying three terms instead of two: $\binom{-1/2}{2}$ only involves two factors $\frac{n(n-1)}{2!}$, not three. The correct coefficient is $\dfrac{3}{2}$, not $-3$.

---

### UT-3: Proof by Induction with Divisibility

**Question:**

Prove by mathematical induction that $7^n - 1$ is divisible by $6$ for all $n \in \mathbb{Z}^+$.

A student presents the following proof:

> **Base case ($n = 0$):** $7^0 - 1 = 0$, which is divisible by $6$.
>
> **Inductive step:** Assume $7^k - 1 = 6m$. Then $7^{k+1} - 1 = 7 \cdot 7^k - 1 = 7(6m + 1) - 1 = 42m + 6 = 6(7m + 1)$.

**(a)** Explain the flaw in the student's base case.

**(b)** Write out a complete, correct proof.

[Difficulty: hard. Tests the common error of starting the base case at the wrong value for divisibility results.]

**Solution:**

**(a)** The statement claims "for all $n \in \mathbb{Z}^+$", meaning $n \geq 1$. The student verified the base case at $n = 0$, which is outside the domain of the claim. While $n = 0$ does happen to satisfy the property, the proof must start at $n = 1$ to be valid. The base case at $n = 0$ is unnecessary and, if it were the only base case, would not constitute a valid proof of the claim.

**(b)**

**Base case ($n = 1$):** $7^1 - 1 = 6$, which is divisible by $6$. True.

**Inductive hypothesis:** Assume $7^k - 1 = 6m$ for some integer $m$, where $k \geq 1$.

**Inductive step:** We must show $7^{k+1} - 1$ is divisible by $6$.

$$7^{k+1} - 1 = 7 \cdot 7^k - 1 = 7(6m + 1) - 1 = 42m + 7 - 1 = 42m + 6 = 6(7m + 1)$$

Since $7m + 1$ is an integer, $7^{k+1} - 1$ is divisible by $6$.

**Conclusion:** By the principle of mathematical induction, $7^n - 1$ is divisible by $6$ for all $n \in \mathbb{Z}^+$.

---

## Integration Tests

> Tests synthesis of number and algebra with other topics.

### IT-1: Geometric Series Convergence with Function Notation (with Functions)

**Question:**

The function $f$ is defined by $f(x) = \dfrac{1}{1 - x^2}$ for $x \in (-1, 1)$.

**(a)** Express $f(x)$ as the sum of an infinite geometric series, stating the common ratio.

**(b)** Find the value of $\displaystyle\sum_{n=0}^{\infty} \frac{1}{4^n}$.

**(c)** The series $\displaystyle\sum_{n=0}^{\infty} \frac{x^{2n}}{3^n}$ converges for some values of $x$. Find the sum to infinity and state the range of $x$ for which it converges.

[Difficulty: hard. Combines geometric series convergence with function domain restrictions.]

**Solution:**

**(a)** Using partial fractions:

$$f(x) = \frac{1}{1 - x^2} = \frac{1}{(1-x)(1+x)} = \frac{1}{2}\left(\frac{1}{1-x} + \frac{1}{1+x}\right)$$

Each fraction is a geometric series:

$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad \text{for } |x| \lt 1$$

$$\frac{1}{1+x} = \sum_{n=0}^{\infty} (-x)^n = \sum_{n=0}^{\infty} (-1)^n x^n \quad \text{for } |x| \lt 1$$

Therefore:

$$f(x) = \frac{1}{2}\sum_{n=0}^{\infty}\big(1 + (-1)^n\big)x^n$$

This gives $f(x) = 1 + x^2 + x^4 + x^6 + \cdots$, a geometric series with first term $1$ and common ratio $x^2$, valid for $|x^2| \lt 1$, i.e., $x \in (-1, 1)$.

**(b)** This is a geometric series with first term $1$ and common ratio $r = \dfrac{1}{4}$. Since $|r| \lt 1$:

$$S_{\infty} = \frac{1}{1 - \frac{1}{4}} = \frac{4}{3}$$

**(c)** Rewrite as $\displaystyle\sum_{n=0}^{\infty} \left(\frac{x^2}{3}\right)^n$.

This is a geometric series with first term $1$ and common ratio $r = \dfrac{x^2}{3}$.

Convergence requires $|r| \lt 1$, so $\left|\dfrac{x^2}{3}\right| \lt 1$, giving $x^2 \lt 3$, i.e., $-\sqrt{3} \lt x \lt \sqrt{3}$.

$$S_{\infty} = \frac{1}{1 - \frac{x^2}{3}} = \frac{3}{3 - x^2}$$

---

### IT-2: Logarithm Equation with Composite Function Domain (with Functions)

**Question:**

Given $f(x) = \log_3(x + 4)$ and $g(x) = x^2 - 5$:

**(a)** Find $(f \circ g)(x)$ and state its domain.

**(b)** Solve $(f \circ g)(x) = 2$.

**(c)** A student solves the equation $\log_3(x^2 - 1) = 2$ and obtains $x = \pm\sqrt{10}$. Explain why one solution must be rejected.

[Difficulty: hard. Combines logarithm domain restrictions with composite function domain analysis.]

**Solution:**

**(a)** $(f \circ g)(x) = f(g(x)) = \log_3(x^2 - 5 + 4) = \log_3(x^2 - 1)$.

Domain restrictions:
- From $g(x)$: $x \in \mathbb{R}$ (no restriction, polynomial).
- From $f$: the argument must be positive, so $x^2 - 1 \gt 0$, giving $x \lt -1$ or $x \gt 1$.

Domain of $f \circ g$: $(-\infty, -1) \cup (1, \infty)$.

**(b)** $\log_3(x^2 - 1) = 2 \implies x^2 - 1 = 9 \implies x^2 = 10 \implies x = \pm\sqrt{10}$.

Check against domain: $\sqrt{10} \approx 3.16 \gt 1$ (valid) and $-\sqrt{10} \approx -3.16 \lt -1$ (valid).

Both solutions are valid: $x = \sqrt{10}$ and $x = -\sqrt{10}$.

**(c)** The student solved $\log_3(x^2 - 1) = 2$ correctly, but without checking the domain. In this case both solutions are valid. However, if the equation were $\log_3(x - 1) = 2$, solving gives $x - 1 = 9 \implies x = 10$, but the domain requires $x \gt 1$, so $x = 10$ is valid. If instead the equation were $\log_3(1 - x) = 2$, then $1 - x = 9 \implies x = -8$, but the domain requires $1 - x \gt 0 \implies x \lt 1$, so $x = -8$ is valid. The key point is that logarithm arguments must always be positive, and extraneous solutions arise when the algebraic solution violates this constraint.

---

### IT-3: Permutations with Restrictions (with Probability)

**Question:**

Eight people — Alice, Ben, Charlie, Diana, Elliot, Fiona, George, and Hannah — are to be seated in a row of eight chairs.

**(a)** In how many ways can they be seated if Alice and Ben must sit next to each other?

**(b)** In how many ways can they be seated if Alice and Ben must NOT sit next to each other?

**(c)** In how many ways can they be seated if Alice, Ben, and Charlie must all sit together, and Diana and Elliot must also sit together (but the two groups may be in any order)?

[Difficulty: hard. Tests arrangements with multiple restrictions requiring careful case analysis.]

**Solution:**

**(a)** Treat Alice and Ben as a single "block." There are $7$ items to arrange: the AB block and the other $6$ people.

Number of arrangements of the blocks: $7! = 5040$.

Within the AB block, Alice and Ben can be arranged in $2! = 2$ ways.

Total: $7! \times 2 = 10080$.

**(b)** Total arrangements without restrictions: $8! = 40320$.

Arrangements where Alice and Ben sit together: $10080$ (from part a).

Arrangements where they do NOT sit together: $40320 - 10080 = 30240$.

**(c)** There are two groups: ABC (size 3) and DE (size 2), plus the remaining 3 individuals: F, G, H.

Items to arrange: 2 groups + 3 individuals = 5 items.

Arrangements of the 5 items: $5! = 120$.

Within the ABC group: $3! = 6$ arrangements.
Within the DE group: $2! = 2$ arrangements.

Total: $5! \times 3! \times 2! = 120 \times 6 \times 2 = 1440$.
