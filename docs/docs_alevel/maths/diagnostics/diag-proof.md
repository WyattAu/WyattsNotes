---
title: Proof — Diagnostic Tests
description: Hard diagnostic tests for proof covering contradiction rigour, induction base cases, counterexample construction, necessary versus sufficient conditions, and iff proofs at A-Level standard.
slug: diag-proof
hide_table_of_contents: true
---

# Proof — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for proof.

### UT-1: Proof by Contradiction — $\sqrt{2}$ is Irrational

**Question:**

**(a)** Prove by contradiction that $\sqrt{2}$ is irrational.

**(b)** A student's proof contains the following claim: "Since $p^2$ is even, $p$ must be even." Justify this step rigorously by proving its contrapositive.

**(c)** Adapt the method to prove that $\sqrt{3}$ is irrational.

[Difficulty: hard. Tests the full rigour of proof by contradiction, including the contrapositive argument that "if $p^2$ is even then $p$ is even."]

**Solution:**

**(a)** Suppose, for contradiction, that $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{p}{q}$ where $p, q \in \mathbb{Z}$, $q \neq 0$, and $\gcd(p, q) = 1$ (i.e. the fraction is in its lowest terms).

Squaring: $2 = \frac{p^2}{q^2}$, so $p^2 = 2q^2$.

Since $p^2 = 2q^2$, $p^2$ is even. Since the square of an odd number is odd, $p$ must be even.

Write $p = 2k$ for some integer $k$. Then $(2k)^2 = 2q^2$, so $4k^2 = 2q^2$, giving $q^2 = 2k^2$.

Since $q^2 = 2k^2$, $q^2$ is even, and by the same argument, $q$ is even.

So both $p$ and $q$ are even, contradicting $\gcd(p, q) = 1$.

Therefore $\sqrt{2}$ is irrational.

**(b)** The claim is: "If $p^2$ is even, then $p$ is even."

The contrapositive is: "If $p$ is odd, then $p^2$ is odd."

Proof of contrapositive: If $p$ is odd, write $p = 2k + 1$ for some integer $k$. Then:

$$p^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

which is odd (of the form $2m + 1$ where $m = 2k^2 + 2k$).

Since the contrapositive is logically equivalent to the original statement, and we have proved the contrapositive, the original statement is also proved.

**(c)** Suppose $\sqrt{3} = \frac{p}{q}$ in lowest terms.

$p^2 = 3q^2$, so $p^2$ is divisible by 3.

We need: "If $p^2$ is divisible by 3, then $p$ is divisible by 3."

Contrapositive: "If $p$ is not divisible by 3, then $p^2$ is not divisible by 3."

If $p$ is not divisible by 3, then $p \equiv 1 \pmod 3$ or $p \equiv 2 \pmod 3$.

- If $p \equiv 1 \pmod 3$: $p^2 \equiv 1 \pmod 3$.
- If $p \equiv 2 \pmod 3$: $p^2 \equiv 4 \equiv 1 \pmod 3$.

In either case, $p^2 \not\equiv 0 \pmod 3$, so $p^2$ is not divisible by 3.

Therefore $p$ is divisible by 3. Write $p = 3k$. Then $9k^2 = 3q^2$, so $q^2 = 3k^2$, and by the same argument, $q$ is divisible by 3.

Both $p$ and $q$ divisible by 3 contradicts $\gcd(p,q) = 1$. Therefore $\sqrt{3}$ is irrational.

---

### UT-2: Proof by Induction — Base Case Errors

**Question:**

A student is asked to prove that $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$ for all $n \geq 1$.

**(a)** Write out the full proof by induction, including the base case and inductive step.

**(b)** A different student claims the formula holds for all $n \geq 0$ and starts their base case at $n = 0$. Show that the formula also holds for $n = 0$ and explain why starting at $n = 0$ does not invalidate the proof.

**(c)** A third student tries to prove that $2^n \gt n^2$ for all $n \geq 1$ by induction. Show that the inductive step fails at $n = 2 \to n = 3$, even though the statement is true for $n = 3$. Find the smallest value of $N$ such that $2^n \gt n^2$ for all $n \geq N$.

[Difficulty: hard. Tests the role of the base case in anchoring the induction, and the subtlety that the inductive step may require $n$ to be sufficiently large.]

**Solution:**

**(a)** Let $P(n)$ be the statement $\sum_{r=1}^{n} r^2 = \frac{n(n+1)(2n+1)}{6}$.

**Base case ($n = 1$):** LHS $= 1^2 = 1$. RHS $= \frac{1 \cdot 2 \cdot 3}{6} = 1$. LHS $=$ RHS. $P(1)$ is true.

**Inductive step:** Assume $P(k)$ is true for some $k \geq 1$:

$$\sum_{r=1}^{k} r^2 = \frac{k(k+1)(2k+1)}{6}$$

For $P(k+1)$:

$$\sum_{r=1}^{k+1} r^2 = \sum_{r=1}^{k} r^2 + (k+1)^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2$$

$$= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6} = \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$

$$= \frac{(k+1)[2k^2 + k + 6k + 6]}{6} = \frac{(k+1)(2k^2 + 7k + 6)}{6}$$

$$= \frac{(k+1)(k+2)(2k+3)}{6} = \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$$

This is $P(k+1)$. By induction, $P(n)$ is true for all $n \geq 1$.

**(b)** At $n = 0$: LHS $= \sum_{r=1}^{0} r^2 = 0$ (empty sum). RHS $= \frac{0 \cdot 1 \cdot 1}{6} = 0$. True.

Starting at $n = 0$ is valid because the inductive step from $P(k)$ to $P(k+1)$ works for $k \geq 0$. The proof establishes the result for all $n \geq 0$, which is a stronger statement than $n \geq 1$. This does not invalidate the proof; it simply proves a more general result.

**(c)** **Check values:** $2^1 = 2 \gt 1 = 1^2$. True. $2^2 = 4 = 4 = 2^2$. Not strictly greater (equality, not inequality). $2^3 = 8 \gt 9 = 3^2$. False!

So the statement "$2^n \gt n^2$ for all $n \geq 1$" is actually **false** at $n = 3$.

**Inductive step from $k$ to $k+1$:** Assume $2^k \gt k^2$. Need $2^{k+1} \gt (k+1)^2$.

$2^{k+1} = 2 \cdot 2^k \gt 2k^2$ (by the inductive hypothesis).

We need $2k^2 \geq (k+1)^2 = k^2 + 2k + 1$, i.e. $k^2 - 2k - 1 \geq 0$, i.e. $k \geq 1 + \sqrt{2} \approx 2.41$.

So the inductive step works for $k \geq 3$, meaning $2^n \gt n^2$ for all $n \geq 5$ (since we need to verify the base case at $n = 5$, or anchor at $n = 3$ and step forward).

Wait, let me check: $2^4 = 16 \gt 16$? No, $16 = 16$. Not strictly greater.

$2^5 = 32 \gt 25 = 5^2$. True.

$2^6 = 64 \gt 36$. True. And the inductive step works from $k = 5$ onwards.

So the smallest $N$ is $5$: $2^n \gt n^2$ for all $n \geq 5$.

---

### UT-3: Necessary vs Sufficient Conditions

**Question:**

For each of the following, state whether the condition is necessary, sufficient, both, or neither.

**(a)** "$x \gt 2$" as a condition for "$x^2 \gt 4$".

**(b)** "$n$ is prime" as a condition for "$n$ is odd".

**(c)** "$a^2 + b^2 = 0$" (where $a, b \in \mathbb{R}$) as a condition for "$a = 0$ and $b = 0$".

**(d)** A student claims: "If a function is differentiable at a point, then it is continuous at that point." State whether this is a necessary condition, a sufficient condition, or both, for continuity.

**(e)** Prove that "$x^2 = 4$" is necessary but not sufficient for "$x = 2$", and construct a counterexample to show insufficiency.

[Difficulty: hard. Tests the fundamental distinction between necessary and sufficient conditions, which students confuse persistently.]

**Solution:**

**(a)** "$x \gt 2$" implies "$x^2 \gt 4$": if $x \gt 2$ then $x^2 \gt 4$. So "$x \gt 2$" is **sufficient** for "$x^2 \gt 4$".

However, "$x \gt 2$" is not necessary: $x = -3$ gives $x^2 = 9 \gt 4$, but $x \lt 2$.

Answer: **sufficient but not necessary**.

**(b)** If $n$ is prime and $n \neq 2$, then $n$ is odd. But $n = 2$ is prime and even.

So "prime" does not imply "odd" (counterexample: 2). Also, "odd" does not imply "prime" (counterexample: 9).

Answer: **neither necessary nor sufficient**.

**(c)** "$a^2 + b^2 = 0$": since $a^2 \geq 0$ and $b^2 \geq 0$, the sum is zero only when both are zero. So $a^2 + b^2 = 0 \iff a = 0 \text{ and } b = 0$.

Answer: **both necessary and sufficient** (the condition is equivalent).

**(d)** The statement "If differentiable then continuous" means differentiability is **sufficient** for continuity. Equivalently, continuity is **necessary** for differentiability.

Note: the converse is false (e.g. $f(x) = \lvert x \rvert$ is continuous at $x = 0$ but not differentiable there), so differentiability is not necessary for continuity.

Answer: Differentiability is **sufficient** (but not necessary) for continuity.

**(e)** "$x^2 = 4$" is necessary for "$x = 2$": if $x = 2$ then $x^2 = 4$. (Every $x = 2$ satisfies $x^2 = 4$.)

"$x^2 = 4$" is not sufficient for "$x = 2$": the counterexample is $x = -2$, since $(-2)^2 = 4$ but $-2 \neq 2$.

---

## Integration Tests

> Tests synthesis of proof with other topics. Requires combining concepts from multiple units.

### IT-1: Proving Convergence of a Recurrence Relation by Induction (with Sequences)

**Question:**

A sequence $(a_n)$ is defined by $a_1 = 2$ and $a_{n+1} = \frac{a_n + 3}{2}$ for $n \geq 1$.

**(a)** Prove by induction that $a_n \lt 3$ for all $n \geq 1$.

**(b)** Prove by induction that $a_n \leq a_{n+1}$ for all $n \geq 1$.

**(c)** State the limit of the sequence and justify your answer using the monotone convergence theorem.

**(d)** Find $\sum_{r=1}^{n} a_r$ in terms of $n$, giving your answer in its simplest form.

[Difficulty: hard. Combines proof by induction with recurrence relations, boundedness, monotonicity, and series summation.]

**Solution:**

**(a)** Let $P(n)$ be "$a_n \lt 3$".

**Base case ($n = 1$):** $a_1 = 2 \lt 3$. True.

**Inductive step:** Assume $a_k \lt 3$ for some $k \geq 1$.

$a_{k+1} = \frac{a_k + 3}{2} \lt \frac{3 + 3}{2} = 3$ (since $a_k \lt 3$).

So $a_{k+1} \lt 3$. By induction, $a_n \lt 3$ for all $n \geq 1$.

**(b)** Let $Q(n)$ be "$a_n \leq a_{n+1}$".

**Base case ($n = 1$):** $a_1 = 2$, $a_2 = \frac{5}{2} = 2.5$. $2 \leq 2.5$. True.

**Inductive step:** Assume $a_k \leq a_{k+1}$ for some $k \geq 1$. We need $a_{k+1} \leq a_{k+2}$.

$a_{k+2} - a_{k+1} = \frac{a_{k+1} + 3}{2} - a_{k+1} = \frac{3 - a_{k+1}}{2}$.

By part (a), $a_{k+1} \lt 3$, so $3 - a_{k+1} \gt 0$, giving $a_{k+2} - a_{k+1} \gt 0$.

So $a_{k+1} \lt a_{k+2}$. By induction, $a_n \lt a_{n+1}$ for all $n \geq 1$ (strictly increasing).

**(c)** The sequence is strictly increasing (part b) and bounded above by 3 (part a). By the monotone convergence theorem, the sequence converges.

Let $L = \lim_{n \to \infty} a_n$. Then $L = \frac{L+3}{2} \implies 2L = L + 3 \implies L = 3$.

**(d)** The recurrence can be solved: $a_{n+1} - 3 = \frac{a_n - 3}{2}$.

This gives $a_n - 3 = \frac{a_1 - 3}{2^{n-1}} = \frac{-1}{2^{n-1}}$, so $a_n = 3 - \frac{1}{2^{n-1}}$.

$$\sum_{r=1}^{n} a_r = \sum_{r=1}^{n}\left(3 - \frac{1}{2^{r-1}}\right) = 3n - \sum_{r=0}^{n-1}\frac{1}{2^r}$$

$$= 3n - \frac{1 - (1/2)^n}{1 - 1/2} = 3n - 2\left(1 - \frac{1}{2^n}\right) = 3n - 2 + \frac{1}{2^{n-1}}$$

---

### IT-2: Proving a Function is Injective (with Functions)

**Question:**

**(a)** Prove that $f(x) = x^3$ is injective on $\mathbb{R}$ using two different methods: (i) by algebra, and (ii) by calculus.

**(b)** Prove that $g(x) = x^2$ is NOT injective on $\mathbb{R}$ by providing a specific counterexample.

**(c)** Find the largest subset of $\mathbb{R}$ on which $g(x) = x^2$ is injective, and prove your answer.

[Difficulty: hard. Combines injectivity proofs with algebraic and calculus-based arguments, and domain restriction analysis.]

**Solution:**

**(a)** **(i) Algebraic proof:** Suppose $f(a) = f(b)$ for some $a, b \in \mathbb{R}$.

$a^3 = b^3 \implies a^3 - b^3 = 0 \implies (a-b)(a^2 + ab + b^2) = 0$.

Either $a = b$ or $a^2 + ab + b^2 = 0$.

Now $a^2 + ab + b^2 = \left(a + \frac{b}{2}\right)^2 + \frac{3b^2}{4} \geq 0$.

Equality requires $a + \frac{b}{2} = 0$ and $b = 0$, giving $a = b = 0$.

So $a^2 + ab + b^2 = 0$ only when $a = b = 0$. In all cases, $a = b$.

Therefore $f$ is injective.

**(ii) Calculus proof:** $f'(x) = 3x^2 \geq 0$ for all $x \in \mathbb{R}$, with equality only at $x = 0$.

$f'(x) \geq 0$ means $f$ is non-decreasing. To show strict monotonicity: for any $a \lt b$ with $a \neq 0$, $f'(x) = 3x^2 \gt 0$ on $(a, b)$ (since $x = 0$ is a single point), so by the Mean Value Theorem, $f(b) - f(a) = f'(c)(b-a) \gt 0$ for some $c \in (a, b)$.

If $a \lt 0 \lt b$: $f(a) = a^3 \lt 0 \lt b^3 = f(b)$.

Therefore $a \lt b \implies f(a) \lt f(b)$ for all $a, b \in \mathbb{R}$, so $f$ is strictly increasing and hence injective.

**(b)** $g(1) = 1^2 = 1 = (-1)^2 = g(-1)$, but $1 \neq -1$. Therefore $g$ is not injective on $\mathbb{R}$.

**(c)** Claim: $g(x) = x^2$ is injective on $[0, \infty)$.

**Proof:** If $a, b \geq 0$ and $a^2 = b^2$, then $a^2 - b^2 = (a-b)(a+b) = 0$. Since $a + b \geq 0$, we need $a - b = 0$, giving $a = b$.

Similarly, $g$ is injective on $(-\infty, 0]$.

**Maximality:** Any domain that contains both a positive and a negative number fails to make $g$ injective (since $g(k) = g(-k)$ for $k \neq 0$). Adding $0$ to either half preserves injectivity. Therefore the largest subsets are $[0, \infty)$ and $(-\infty, 0]$.

---

### IT-3: Divisibility Proof Using Induction (with Number Theory)

**Question:**

**(a)** Prove by induction that $n^3 - n$ is divisible by 6 for all positive integers $n$.

**(b)** Prove that $3^{2n+1} + 2^{n+2}$ is divisible by 7 for all $n \geq 0$.

**(c)** A student claims that $n^2 + n + 1$ is prime for all positive integers $n$. Disprove this claim by counterexample, finding the smallest counterexample.

[Difficulty: hard. Combines induction for divisibility with disproof by counterexample, requiring systematic search.]

**Solution:**

**(a)** Let $P(n)$ be "$n^3 - n$ is divisible by 6."

**Base case ($n = 1$):** $1 - 1 = 0 = 6 \times 0$. True.

**Inductive step:** Assume $k^3 - k = 6m$ for some integer $m$.

For $n = k + 1$:

$$(k+1)^3 - (k+1) = k^3 + 3k^2 + 3k + 1 - k - 1 = k^3 + 3k^2 + 2k$$

$$= (k^3 - k) + 3k^2 + 3k = 6m + 3k(k+1)$$

Since $k(k+1)$ is the product of two consecutive integers, one is even, so $k(k+1)$ is divisible by 2. Therefore $3k(k+1)$ is divisible by $3 \times 2 = 6$.

So $(k+1)^3 - (k+1) = 6m + 6p = 6(m+p)$ for some integer $p$. Divisible by 6.

By induction, $n^3 - n$ is divisible by 6 for all $n \geq 1$.

**(Alternative proof:** $n^3 - n = n(n-1)(n+1) = (n-1)n(n+1)$, the product of three consecutive integers. Among any three consecutive integers, one is divisible by 3 and at least one is divisible by 2. So the product is divisible by $3 \times 2 = 6$.)

**(b)** Let $P(n)$ be "$3^{2n+1} + 2^{n+2}$ is divisible by 7."

**Base case ($n = 0$):** $3^1 + 2^2 = 3 + 4 = 7 = 7 \times 1$. True.

**Inductive step:** Assume $3^{2k+1} + 2^{k+2} = 7m$ for some integer $m$.

For $n = k + 1$:

$$3^{2(k+1)+1} + 2^{(k+1)+2} = 3^{2k+3} + 2^{k+3} = 9 \cdot 3^{2k+1} + 2 \cdot 2^{k+2}$$

$$= 7 \cdot 3^{2k+1} + 2(3^{2k+1} + 2^{k+2})$$

$$= 7 \cdot 3^{2k+1} + 2 \cdot 7m = 7(3^{2k+1} + 2m)$$

Divisible by 7. By induction, $3^{2n+1} + 2^{n+2}$ is divisible by 7 for all $n \geq 0$.

**(c)** Check values:

| $n$ | $n^2 + n + 1$ | Prime? |
|-----|------|--------|
| 1 | 3 | Yes |
| 2 | 7 | Yes |
| 3 | 13 | Yes |
| 4 | 21 | No ($21 = 3 \times 7$) |

The smallest counterexample is $n = 4$: $4^2 + 4 + 1 = 21$, which is not prime.
