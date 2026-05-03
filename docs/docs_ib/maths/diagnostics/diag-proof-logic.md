---
title: "Proof and Logic -- Diagnostic Tests"
description: Hardest IB Mathematics diagnostic tests for proof and logic covering necessary vs sufficient conditions, contrapositive, quantifier negation, and proof methods.
slug: diag-proof-logic
hide_table_of_contents: true
---

# Proof and Logic — Diagnostic Tests

## Unit Tests

> Tests edge cases, boundary conditions, and common misconceptions for proof and logic.

### UT-1: Necessary vs Sufficient Conditions

**Question:**

For each of the following statements, state whether the condition $P$ is necessary, sufficient, both, or neither for $Q$:

**(a)** $P$: "$n$ is divisible by $4$" and $Q$: "$n^2$ is divisible by $16$"

**(b)** $P$: "$f''(x) \gt 0$ for all $x$" and $Q$: "$f$ is injective"

**(c)** $P$: "$\Delta = 0$" and $Q$: "The quadratic equation $ax^2 + bx + c = 0$ has exactly one real root"

**(d)** A student argues: "Since $P \implies Q$ is true, and $Q$ is true, therefore $P$ is true." Identify the logical fallacy.

[Difficulty: hard. Tests the distinction between necessary and sufficient conditions, which IB exams test extensively.]

**Solution:**

**(a)** **Both necessary and sufficient.** If $n$ is divisible by $4$, then $n = 4k$, so $n^2 = 16k^2$, which is divisible by $16$ (sufficient). Conversely, if $n^2$ is divisible by $16 = 2^4$, then $n^2$ has at least $4$ factors of $2$, so $n$ has at least $2$ factors of $2$, meaning $n$ is divisible by $4$ (necessary).

**(b)** **Sufficient but not necessary.** If $f''(x) \gt 0$ everywhere, then $f'(x)$ is strictly increasing. If $f'(c) = 0$ for some $c$, then $f'(x) \lt 0$ for $x \lt c$ and $f'(x) \gt 0$ for $x \gt c$, making $f$ strictly convex with a unique global minimum. This means $f$ is injective (sufficient). However, $f(x) = x^3$ is injective but $f''(0) = 0 \not\gt 0$ (not necessary).

**(c)** **Both necessary and sufficient.** $\Delta = 0$ gives exactly one real root (sufficient). If the quadratic has exactly one real root, then $\Delta = 0$ (necessary, since $\Delta \gt 0$ gives two distinct roots and $\Delta \lt 0$ gives none).

**(d)** This is the **fallacy of affirming the consequent**. $P \implies Q$ and $Q$ does not imply $P$. The correct inference from $P \implies Q$ and $Q$ is nothing — we cannot deduce $P$. The valid inference is *modus ponens*: from $P \implies Q$ and $P$, we deduce $Q$.

---

### UT-2: Quantifier Negation with Nested Quantifiers

**Question:**

**(a)** Negate the following statement:

$$\forall \varepsilon \gt 0, \; \exists \delta \gt 0, \; \forall x \in \mathbb{R}, \; (0 \lt |x - a| \lt \delta) \implies (|f(x) - f(a)| \lt \varepsilon)$$

**(b)** A student writes the negation as "$\exists \varepsilon \gt 0, \; \exists \delta \gt 0, \; \forall x \in \mathbb{R}, \; (0 \lt |x - a| \lt \delta) \implies (|f(x) - f(a)| \geq \varepsilon)$". Identify the errors.

[Difficulty: hard. Tests correct negation of nested quantifiers and the implication.]

**Solution:**

**(a)** To negate, flip each quantifier and negate the predicate. The negation of an implication $P \implies Q$ is $P \wedge \neg Q$.

$$\neg(P \implies Q) = \neg(\neg P \vee Q) = P \wedge \neg Q$$

So:

$$\exists \varepsilon \gt 0, \; \forall \delta \gt 0, \; \exists x \in \mathbb{R}, \; (0 \lt |x - a| \lt \delta) \;\wedge\; (|f(x) - f(a)| \geq \varepsilon)$$

**(b)** The student made two errors:
1. The existential quantifier on $\delta$ should be universal ($\forall \delta \gt 0$), not existential.
2. The negation of the implication was written incorrectly. The student wrote the "converse implication" with a negated conclusion, rather than the correct negation which is $(0 \lt |x-a| \lt \delta) \wedge (|f(x) - f(a)| \geq \varepsilon)$. The student kept the implication structure $\implies$, which is wrong.

---

### UT-3: Contrapositive vs Converse vs Contradiction

**Question:**

Prove that if $n^3 + 5n$ is even for some integer $n$, then $n$ is even.

A student writes:

> We prove the contrapositive: if $n$ is odd, then $n^3 + 5n$ is odd.
> If $n = 2k + 1$, then $n^3 + 5n = (2k+1)^3 + 5(2k+1) = 8k^3 + 12k^2 + 8k + 1 + 10k + 5 = 8k^3 + 12k^2 + 18k + 6 = 2(4k^3 + 6k^2 + 9k + 3)$, which is even.

**(a)** Explain why the student's answer is self-contradictory.

**(b)** Write a correct proof of the original statement.

[Difficulty: hard. Tests confusion between contrapositive and converse, and algebraic errors in divisibility proofs.]

**Solution:**

**(a)** The student set out to prove "if $n$ is odd, then $n^3 + 5n$ is odd" (the contrapositive), but the algebra showed that $n^3 + 5n$ is **even** when $n$ is odd. This contradicts what the student was trying to prove. The conclusion should be that $n^3 + 5n$ is even, which means the contrapositive is **false**, implying the original statement is **false**.

In fact, the original statement "if $n^3 + 5n$ is even, then $n$ is even" **is false**: when $n$ is odd, $n^3 + 5n = 2(4k^3 + 6k^2 + 9k + 3)$ is always even. So $n^3 + 5n$ is even for ALL integers $n$, not just even ones. The original statement is false, and the student's work inadvertently proves this.

**(b)** The correct approach: since $n^3 + 5n$ is even for all $n \in \mathbb{Z}$ (as shown above), the statement "if $n^3 + 5n$ is even, then $n$ is even" is **false**. A counterexample is $n = 1$: $1 + 5 = 6$ is even, but $n = 1$ is odd.

---

## Integration Tests

> Tests synthesis of proof and logic with other topics.

### IT-1: Proof by Induction for a Divisibility Result (with Number and Algebra)

**Question:**

Prove by mathematical induction that $3^{2n} + 2^{n+2}$ is divisible by $7$ for all $n \in \mathbb{N}$.

[Difficulty: hard. Combines proof by induction with number-theoretic divisibility.]

**Solution:**

**Base case ($n = 1$):** $3^2 + 2^3 = 9 + 8 = 17$. But $17$ is not divisible by $7$. Let me check: $3^{2(1)} + 2^{1+2} = 9 + 8 = 17$. This is not divisible by $7$.

Let me recheck the problem. $3^{2n} + 2^{n+2}$: for $n = 1$, $9 + 8 = 17$. Not divisible by $7$.

The correct problem should be $3^{2n+1} + 2^{n+2}$, or we need to adjust. Let me verify: $3^{2(1)+1} + 2^{1+2} = 27 + 8 = 35 = 7 \times 5$. Yes.

Let me prove the corrected statement: $3^{2n+1} + 2^{n+2}$ is divisible by $7$.

**Base case ($n = 0$):** $3^1 + 2^2 = 3 + 4 = 7$, divisible by $7$. True.

**Inductive hypothesis:** Assume $3^{2k+1} + 2^{k+2} = 7m$ for some integer $m$.

**Inductive step:** Consider $n = k + 1$:

$$3^{2(k+1)+1} + 2^{(k+1)+2} = 3^{2k+3} + 2^{k+3}$$

$$= 9 \cdot 3^{2k+1} + 2 \cdot 2^{k+2}$$

$$= 9 \cdot 3^{2k+1} + 2 \cdot 2^{k+2} + 7 \cdot 3^{2k+1} - 7 \cdot 3^{2k+1}$$

$$= 7 \cdot 3^{2k+1} + 2(3^{2k+1} + 2^{k+2})$$

$$= 7 \cdot 3^{2k+1} + 2 \cdot 7m = 7(3^{2k+1} + 2m)$$

Since $3^{2k+1} + 2m$ is an integer, $3^{2k+3} + 2^{k+3}$ is divisible by $7$.

**Conclusion:** By induction, $3^{2n+1} + 2^{n+2}$ is divisible by $7$ for all $n \geq 0$.

---

### IT-2: Proof by Contradiction for Irrationality (with Number and Algebra)

**Question:**

Prove that $\sqrt{2} + \sqrt{3}$ is irrational.

[Difficulty: hard. Combines proof by contradiction with algebraic manipulation and the Fundamental Theorem of Arithmetic.]

**Solution:**

Assume $\sqrt{2} + \sqrt{3}$ is rational. Then $\sqrt{2} + \sqrt{3} = \frac{a}{b}$ for some coprime positive integers $a, b$.

Squaring: $2 + 2\sqrt{6} + 3 = \frac{a^2}{b^2}$, so:

$$2\sqrt{6} = \frac{a^2}{b^2} - 5$$

$$\sqrt{6} = \frac{a^2 - 5b^2}{2b^2}$$

Since $a, b$ are integers, the RHS is rational. So $\sqrt{6}$ is rational. But $\sqrt{6}$ is irrational (proved by the standard contradiction proof: if $\sqrt{6} = \frac{p}{q}$ in lowest terms, then $p^2 = 6q^2$, so $p$ is even, $p = 2r$, $4r^2 = 6q^2$, $2r^2 = 3q^2$, so $q$ is even, contradicting lowest terms).

This contradiction means our assumption is false. Therefore $\sqrt{2} + \sqrt{3}$ is irrational.
