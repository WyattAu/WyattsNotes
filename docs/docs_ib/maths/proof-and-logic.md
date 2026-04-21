---
title: Proof and Logic
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - Maths
categories:
  - IB
  - Maths
slug: proof-and-logic
---

# Proof and Logic

This note covers **IB Mathematics AA — Topic 1.4: Proof** in full depth. Everything here is
examinable at both Standard Level and Higher Level, with HL extensions marked where relevant.

## 1. Logic Foundations

### 1.1 Propositions and Truth Values

A **proposition** is a declarative sentence that is either **true** or **false** — never both, never
neither.

"7 is prime" is a proposition (true). "Solve for x" is not a proposition. "This sentence is false"
is not a proposition (it is paradoxical).

The truth value of a proposition $P$ is denoted $\mathcal{T}(P) \in \{T, F\}$.

### 1.2 Logical Connectives

There are five fundamental connectives. Let $P$ and $Q$ be propositions.

| Connective    | Symbol         | Read as              | Meaning                                 |
| :------------ | :------------- | :------------------- | :-------------------------------------- |
| Negation      | $\neg P$       | "not P"              | True when P is false                    |
| Conjunction   | $P \wedge Q$   | "P and Q"            | True when both are true                 |
| Disjunction   | $P \vee Q$     | "P or Q"             | True when at least one is true          |
| Implication   | $P \implies Q$ | "P implies Q"        | False only when P true and Q false      |
| Biconditional | $P \iff Q$     | "P if and only if Q" | True when P and Q have same truth value |

#### Truth Tables

**Negation:**

| $P$ | $\neg P$ |
| :-: | :------: |
|  T  |    F     |
|  F  |    T     |

**Conjunction:**

| $P$ | $Q$ | $P \wedge Q$ |
| :-: | :-: | :----------: |
|  T  |  T  |      T       |
|  T  |  F  |      F       |
|  F  |  T  |      F       |
|  F  |  F  |      F       |

**Disjunction (inclusive OR):**

| $P$ | $Q$ | $P \vee Q$ |
| :-: | :-: | :--------: |
|  T  |  T  |     T      |
|  T  |  F  |     T      |
|  F  |  T  |     T      |
|  F  |  F  |     F      |

**Implication:**

| $P$ | $Q$ | $P \implies Q$ |
| :-: | :-: | :------------: |
|  T  |  T  |       T        |
|  T  |  F  |       F        |
|  F  |  T  |       T        |
|  F  |  F  |       T        |

The implication $P \implies Q$ is only false when a true premise leads to a false conclusion. This
is the single most misunderstood truth table entry in all of mathematics. When $P$ is false, the
implication is **vacuously true** — there is no counterexample to "whenever P holds, Q holds."

**Biconditional:**

| $P$ | $Q$ | $P \iff Q$ |
| :-: | :-: | :--------: |
|  T  |  T  |     T      |
|  T  |  F  |     F      |
|  F  |  T  |     F      |
|  F  |  F  |     T      |

### 1.3 Logical Equivalence

Two compound propositions are **logically equivalent** (written $\equiv$) if they have identical
truth values for every possible assignment of truth values to their component propositions.

**Key equivalences (Laws of Logic):**

1. **Commutative:** $P \wedge Q \equiv Q \wedge P$, and $P \vee Q \equiv Q \vee P$
2. **Associative:** $(P \wedge Q) \wedge R \equiv P \wedge (Q \wedge R)$, and similarly for $\vee$
3. **Distributive:** $P \wedge (Q \vee R) \equiv (P \wedge Q) \vee (P \wedge R)$, and
   $P \vee (Q \wedge R) \equiv (P \vee Q) \wedge (P \vee R)$
4. **Identity:** $P \wedge T \equiv P$, and $P \vee F \equiv P$
5. **Domination:** $P \vee T \equiv T$, and $P \wedge F \equiv F$
6. **Idempotent:** $P \wedge P \equiv P$, and $P \vee P \equiv P$
7. **Double Negation:** $\neg(\neg P) \equiv P$
8. **Absorption:** $P \vee (P \wedge Q) \equiv P$, and $P \wedge (P \vee Q) \equiv P$

### 1.4 De Morgan's Laws

These are essential for negating compound statements.

$$\neg(P \wedge Q) \equiv \neg P \vee \neg Q$$

$$\neg(P \vee Q) \equiv \neg P \wedge \neg Q$$

**Intuition:** To negate an "and," negate each part and switch to "or." To negate an "or," negate
each part and switch to "and."

**Worked Example — Negating a compound statement:**

Negate: "The function $f$ is continuous and differentiable."

Let $C$: "$f$ is continuous." Let $D$: "$f$ is differentiable." The statement is $C \wedge D$. Its
negation is $\neg C \vee \neg D$, i.e., "$f$ is either not continuous or not differentiable."

:::info A common mistake is to negate "P and Q" as "not P and not Q." That is wrong. The negation of
"$f$ is continuous and differentiable" is NOT "$f$ is not continuous and not differentiable" — that
is too strong. :::

### 1.5 The Contrapositive

For any implication $P \implies Q$, the **contrapositive** is $\neg Q \implies \neg P$.

**Theorem:** An implication and its contrapositive are logically equivalent.

$$P \implies Q \equiv \neg Q \implies \neg P$$

This is proved by comparing truth tables. Both are false only when $P$ is true and $Q$ is false.

Compare with two other related statements that are NOT equivalent:

- The **converse** of $P \implies Q$ is $Q \implies P$ (not equivalent in general)
- The **inverse** of $P \implies Q$ is $\neg P \implies \neg Q$ (not equivalent in general, but
  equivalent to the converse)

:::danger The converse and inverse are logically equivalent to each other, but NOT to the original
implication. Never confuse the contrapositive with the converse. :::

**Worked Example:**

Statement: "If $n$ is even, then $n^2$ is even."

Contrapositive: "If $n^2$ is odd, then $n$ is odd."

Converse: "If $n^2$ is even, then $n$ is even." (True in this case, but not logically guaranteed.)

Inverse: "If $n$ is odd, then $n^2$ is odd." (Also true here, but again not guaranteed.)

### 1.6 Tautologies and Contradictions

A **tautology** is a compound proposition that is true for every possible truth assignment. A
**contradiction** is a compound proposition that is false for every possible truth assignment.

**Important tautology:** $P \vee \neg P$ (Law of Excluded Middle)

**Important contradiction:** $P \wedge \neg P$

**Another key tautology — Modus Ponens:** $((P \implies Q) \wedge P) \implies Q$

This says: if you know $P \implies Q$ and you know $P$, then you can conclude $Q$. This is the
fundamental rule of direct proof.

**Modus Tollens:** $((P \implies Q) \wedge \neg Q) \implies \neg P$

This says: if you know $P \implies Q$ and you know $\neg Q$, then you can conclude $\neg P$. This is
the fundamental rule of proof by contrapositive.

### 1.7 Quantifiers

Quantifiers let us express statements about collections of objects.

**Universal quantifier** ($\forall$): "For all" — the statement must hold for every element in the
domain.

$$\forall x \in S, \; P(x)$$

**Existential quantifier** ($\exists$): "There exists" — the statement must hold for at least one
element.

$$\exists x \in S, \; P(x)$$

**Negating quantified statements:**

$$\neg(\forall x, \; P(x)) \equiv \exists x, \; \neg P(x)$$

$$\neg(\exists x, \; P(x)) \equiv \forall x, \; \neg P(x)$$

To negate a universal statement, you get an existential counterexample. To negate an existential
statement, you must show it fails for every case.

**Nested quantifiers** require careful handling. The order matters:

$$\forall x \, \exists y, \; P(x,y) \quad \mathrm{is NOT equivalent to} \quad \exists y \, \forall x, \; P(x,y)$$

**Worked Example — Negating a nested quantifier statement:**

Negate: "For every positive real number $\varepsilon$, there exists a positive real number $\delta$
such that..."

$$\neg\left(\forall \varepsilon \gt 0, \; \exists \delta \gt 0, \; P(\varepsilon, \delta)\right) \equiv \exists \varepsilon \gt 0, \; \forall \delta \gt 0, \; \neg P(\varepsilon, \delta)$$

The existential becomes universal and the universal becomes existential. This is the logical
backbone of epsilon-delta definitions in analysis.

:::warning When negating a statement with both $\forall$ and $\exists$, flip each quantifier and
negate the predicate. The order of quantifiers does NOT change — it remains the same sequence but
with each quantifier flipped. :::

<details>
<summary>Worked Example: Negate $\forall n \in \mathbb{Z}^+, \; \exists p \mathrm{ prime}, \; p \gt n$</summary>

Step 1: Identify the structure — it is $\forall n, \; \exists p, \; P(n,p)$ where $P(n,p)$ is "$p$
is prime and $p \gt n$."

Step 2: Negate — $\exists n \in \mathbb{Z}^+, \; \forall p \mathrm{ prime}, \; \neg(p \gt n)$

Step 3: Simplify — $\exists n \in \mathbb{Z}^+, \; \forall p \mathrm{ prime}, \; p \le n$

Reading: "There exists a positive integer $n$ such that every prime $p$ satisfies $p \le n$." This
is false (there are infinitely many primes), so the original statement is true.

</details>

---

## 2. Methods of Proof

### 2.1 Direct Proof

**Strategy:** To prove $P \implies Q$, assume $P$ is true and use logical deduction to arrive at
$Q$.

This is the most straightforward method. You chain together known results, definitions, and
algebraic manipulations.

**Template:**

1. Assume $P$.
2. [Logical steps...]
3. Therefore $Q$.
4. Hence $P \implies Q$.

**Worked Example — If $n$ is odd, then $n^2$ is odd:**

Assume $n$ is odd. By definition, $n = 2k + 1$ for some $k \in \mathbb{Z}$.

$$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

Since $2k^2 + 2k$ is an integer (sum and product of integers), let $m = 2k^2 + 2k \in \mathbb{Z}$.
Then $n^2 = 2m + 1$, which is odd by definition.

Therefore, if $n$ is odd, then $n^2$ is odd.

**Worked Example — The sum of two even numbers is even:**

Let $a = 2m$ and $b = 2n$ for some $m, n \in \mathbb{Z}$.

$$a + b = 2m + 2n = 2(m + n)$$

Since $m + n \in \mathbb{Z}$, we have $a + b = 2(m+n)$ is even.

<details>
<summary>Exercise: Prove that the product of two odd numbers is odd.</summary>

Let $a = 2m + 1$ and $b = 2n + 1$ for some $m, n \in \mathbb{Z}$.

$a \cdot b = (2m+1)(2n+1) = 4mn + 2m + 2n + 1 = 2(2mn + m + n) + 1$

Since $2mn + m + n \in \mathbb{Z}$, the product is of the form $2k + 1$, hence odd.

</details>

### 2.2 Proof by Contradiction

**Strategy:** To prove a statement $P$, assume $\neg P$ and derive a logical contradiction
(something that is always false, like $1 = 0$ or $0 \lt 0$).

**Template:**

1. Assume $\neg P$ (the negation of what you want to prove).
2. [Logical steps leading to a contradiction...]
3. This contradicts [known fact].
4. Therefore $\neg P$ is false, so $P$ is true.

This method is especially powerful when the statement you want to prove is a negation itself ("there
does not exist..." or "there are no...").

:::info Proof by contradiction is logically equivalent to proving $\neg P \implies \mathrm{false}$,
which means $\neg P$ must be false, hence $P$ is true. It relies on the Law of Excluded Middle
($P \vee \neg P$ must be true). :::

**Worked Example — $\sqrt{2}$ is irrational:**

Assume $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{a}{b}$ where $a, b \in \mathbb{Z}^+$,
$\gcd(a, b) = 1$ (the fraction is in lowest terms).

Squaring both sides: $2 = \frac{a^2}{b^2}$, so $a^2 = 2b^2$.

Since $a^2 = 2b^2$, we have $a^2$ is even. Therefore $a$ is even (by the lemma: if $a^2$ is even,
then $a$ is even — proved below).

Write $a = 2k$ for some $k \in \mathbb{Z}^+$. Substituting:

$(2k)^2 = 2b^2$, so $4k^2 = 2b^2$, so $b^2 = 2k^2$.

Therefore $b^2$ is even, so $b$ is even.

But now both $a$ and $b$ are even, contradicting $\gcd(a, b) = 1$.

Therefore our assumption is false, and $\sqrt{2}$ is irrational.

:::note **Supporting lemma:** If $a^2$ is even, then $a$ is even. Proof by contrapositive: if $a$ is
odd, then $a = 2k+1$, so $a^2 = 4k^2 + 4k + 1 = 2(2k^2+2k) + 1$, which is odd. Hence if $a^2$ is
even, $a$ cannot be odd, so $a$ is even. :::

<details>
<summary>Exercise: Prove that $\sqrt{3}$ is irrational.</summary>

Assume $\sqrt{3} = \frac{a}{b}$ in lowest terms. Then $a^2 = 3b^2$, so $a^2$ is divisible by 3. By
the lemma (if $3 \mid a^2$, then $3 \mid a$), write $a = 3k$. Then $9k^2 = 3b^2$, so $b^2 = 3k^2$,
hence $3 \mid b^2$, so $3 \mid b$. Both $a$ and $b$ are divisible by 3, contradicting lowest terms.

The supporting lemma "if $p \mid a^2$ for prime $p$, then $p \mid a$" follows from the Fundamental
Theorem of Arithmetic: if $p$ appears in the prime factorization of $a^2$, it must appear in the
factorization of $a$.

</details>

### 2.3 Proof by Contrapositive

**Strategy:** To prove $P \implies Q$, instead prove $\neg Q \implies \neg P$. Since an implication
is logically equivalent to its contrapositive, this proves the original statement.

**When to use this:** When the hypothesis $P$ feels "too big" or "too loose" to work with directly,
but the negation of the conclusion $\neg Q$ gives you something concrete to grab.

**Template:**

1. We prove the contrapositive: if $\neg Q$, then $\neg P$.
2. Assume $\neg Q$.
3. [Logical steps...]
4. Therefore $\neg P$.
5. Hence $P \implies Q$.

**Worked Example — If $n^2$ is even, then $n$ is even:**

We prove the contrapositive: if $n$ is odd, then $n^2$ is odd.

Assume $n$ is odd. Then $n = 2k + 1$ for some $k \in \mathbb{Z}$.

$n^2 = (2k+1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$

This is odd. Therefore, if $n$ is odd, $n^2$ is odd. By contrapositive, if $n^2$ is even, then $n$
is even.

:::tip **Direct proof vs. contrapositive vs. contradiction for the same statement:** You could prove
"$n^2$ even implies $n$ even" by contradiction (assume $n^2$ even and $n$ odd, derive that $n^2$ is
both even and odd). But the contrapositive proof is cleaner — it is a direct proof of the equivalent
statement. :::

<details>
<summary>Exercise: Prove that if $3n + 2$ is odd, then $n$ is odd (by contrapositive).</summary>

Contrapositive: If $n$ is even, then $3n + 2$ is even.

Assume $n$ is even, so $n = 2k$ for some $k \in \mathbb{Z}$.

$3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)$

Since $3k + 1 \in \mathbb{Z}$, $3n + 2$ is even. By contrapositive, if $3n + 2$ is odd, then $n$ is
odd.

</details>

### 2.4 Mathematical Induction

Induction proves statements of the form $\forall n \ge n_0, \; P(n)$, where $n_0 \in \mathbb{Z}$.

#### 2.4.1 Standard (Weak) Induction

**Template:**

1. **Base case:** Verify $P(n_0)$ is true.
2. **Inductive hypothesis:** Assume $P(k)$ is true for some arbitrary $k \ge n_0$.
3. **Inductive step:** Using the hypothesis that $P(k)$ holds, prove that $P(k+1)$ holds.
4. **Conclusion:** By the Principle of Mathematical Induction, $P(n)$ is true for all $n \ge n_0$.

**Worked Example — Sum formula $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$:**

Let $P(n)$: $1 + 2 + \cdots + n = \frac{n(n+1)}{2}$.

**Base case ($n = 1$):** LHS $= 1$, RHS $= \frac{1 \cdot 2}{2} = 1$. So $P(1)$ is true.

**Inductive hypothesis:** Assume $P(k)$ is true for some $k \ge 1$, i.e.,
$1 + 2 + \cdots + k = \frac{k(k+1)}{2}$.

**Inductive step:** We must show $P(k+1)$: $1 + 2 + \cdots + k + (k+1) = \frac{(k+1)(k+2)}{2}$.

Starting from the LHS:

$$1 + 2 + \cdots + k + (k+1) = \frac{k(k+1)}{2} + (k+1)$$

(by the inductive hypothesis)

$$= \frac{k(k+1) + 2(k+1)}{2} = \frac{(k+1)(k + 2)}{2}$$

This is exactly the RHS of $P(k+1)$. Therefore $P(k+1)$ holds.

**Conclusion:** By induction, $P(n)$ is true for all $n \ge 1$.

**Worked Example — Sum of squares $1^2 + 2^2 + \cdots + n^2 = \frac{n(n+1)(2n+1)}{6}$:**

Let $P(n)$: $\displaystyle\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$.

**Base case ($n = 1$):** LHS $= 1$, RHS $= \frac{1 \cdot 2 \cdot 3}{6} = 1$. True.

**Inductive hypothesis:** Assume $P(k)$ holds for some $k \ge 1$.

**Inductive step:**

$$\sum_{i=1}^{k+1} i^2 = \sum_{i=1}^{k} i^2 + (k+1)^2 = \frac{k(k+1)(2k+1)}{6} + (k+1)^2$$

$$= \frac{k(k+1)(2k+1) + 6(k+1)^2}{6}$$

$$= \frac{(k+1)[k(2k+1) + 6(k+1)]}{6}$$

$$= \frac{(k+1)[2k^2 + k + 6k + 6]}{6}$$

$$= \frac{(k+1)(2k^2 + 7k + 6)}{6}$$

$$= \frac{(k+1)(k+2)(2k+3)}{6}$$

$$= \frac{(k+1)((k+1)+1)(2(k+1)+1)}{6}$$

This is $P(k+1)$. By induction, the formula holds for all $n \ge 1$.

<details>
<summary>Exercise: Prove by induction that $1 + 3 + 5 + \cdots + (2n-1) = n^2$ for all $n \ge 1$.</summary>

Let $P(n)$: $\displaystyle\sum_{i=1}^{n} (2i - 1) = n^2$.

Base case ($n = 1$): LHS $= 1$, RHS $= 1$. True.

Inductive hypothesis: Assume $P(k)$: $1 + 3 + \cdots + (2k-1) = k^2$.

Inductive step: $1 + 3 + \cdots + (2k-1) + (2(k+1)-1) = k^2 + (2k + 1) = k^2 + 2k + 1 = (k+1)^2$.

By induction, $P(n)$ holds for all $n \ge 1$.

</details>

<details>
<summary>Exercise: Prove by induction that $2^n \gt n$ for all $n \ge 1$.</summary>

Let $P(n)$: $2^n \gt n$.

Base case ($n = 1$): $2^1 = 2 \gt 1$. True.

Inductive hypothesis: Assume $2^k \gt k$ for some $k \ge 1$.

Inductive step: $2^{k+1} = 2 \cdot 2^k \gt 2k$ (by IH, since $2^k \gt k$ and multiplying by 2).

Now, $2k = k + k \ge k + 1$ for $k \ge 1$. Therefore $2^{k+1} \gt k + 1$.

By induction, $P(n)$ holds for all $n \ge 1$.

</details>

#### 2.4.2 Strong Induction

In strong induction, the inductive hypothesis assumes $P(n_0), P(n_0+1), \ldots, P(k)$ are ALL true,
not just $P(k)$.

**Template:**

1. **Base case(s):** Verify $P(n_0)$ (and possibly more base cases).
2. **Inductive hypothesis:** Assume $P(j)$ is true for all $n_0 \le j \le k$.
3. **Inductive step:** Using that $P(j)$ holds for all $j \le k$, prove $P(k+1)$.
4. **Conclusion:** By the Principle of Strong Induction, $P(n)$ is true for all $n \ge n_0$.

**When to use strong induction:** When proving $P(k+1)$ requires not just $P(k)$ but some earlier
case $P(j)$ where $j \lt k$.

:::warning Weak and strong induction are logically equivalent — anything provable by one is provable
by the other. But strong induction can make certain proofs much more natural. Use it when the
inductive step needs to reference cases earlier than just $k$. :::

**Worked Example — Every integer $n \ge 2$ is a product of primes:**

Let $P(n)$: "$n$ is a product of primes (possibly a single prime)."

**Base case ($n = 2$):** 2 is prime, hence a product of primes. True.

**Strong inductive hypothesis:** Assume $P(j)$ is true for all $2 \le j \le k$.

**Inductive step for $n = k + 1$:**

Case 1: $k+1$ is prime. Then it is trivially a product of primes.

Case 2: $k+1$ is composite. Then $k+1 = ab$ where $2 \le a \le b \le k$. By the strong inductive
hypothesis, both $a$ and $b$ are products of primes. Therefore $k+1 = ab$ is a product of primes.

In either case, $P(k+1)$ holds. By strong induction, every integer $n \ge 2$ is a product of primes.

<details>
<summary>Exercise: Prove that every amount of postage $\ge 4$ cents can be formed using 4-cent and 5-cent stamps.</summary>

Let $P(n)$: "Postage of $n$ cents can be formed using 4-cent and 5-cent stamps."

Base cases: $P(4)$: one 4-cent stamp. $P(5)$: one 5-cent stamp. $P(6)$: cannot — wait, this needs
checking. $P(7)$: cannot either. Let me reconsider.

Actually, we need $P(8)$: two 4-cent stamps. $P(9)$: one 4-cent + one 5-cent. $P(10)$: two 5-cent
stamps. $P(11)$: ... Hmm, $P(12)$: three 4-cent stamps. $P(13)$: two 4-cent + one 5-cent. $P(14)$:
one 4-cent + two 5-cent. $P(15)$: three 5-cent stamps.

Let us use base cases $P(12)$, $P(13)$, $P(14)$, $P(15)$. Strong inductive hypothesis: assume $P(j)$
for all $12 \le j \le k$, where $k \ge 15$.

For $P(k+1)$: note that $(k+1) - 4 = k - 3 \ge 12$ (since $k \ge 15$). By strong IH, $P(k-3)$ holds,
meaning we can form $(k-3)$ cents. Adding one 4-cent stamp gives $(k-3) + 4 = k+1$ cents.

By strong induction, $P(n)$ holds for all $n \ge 12$. But we should verify the smaller cases: $P(4)$
through $P(11)$. We find $P(4)$, $P(5)$, $P(8)$, $P(9)$, $P(10)$ hold, but $P(6)$, $P(7)$, $P(11)$
do not. So the correct statement is: all postage $n \ge 8$ except $n = 11$. Or: all $n \ge 12$.

The cleanest formulation: all $n \ge 12$ can be formed. Base cases $P(12)$ through $P(15)$.
Inductive step as above.

</details>

### 2.5 Proof by Exhaustion

**Strategy:** When the domain of possible cases is finite and small, prove the statement by
verifying each case individually.

This is brute-force but rigorous. It is only practical when the number of cases is manageable.

**Worked Example — Show that $n^2 + n + 17$ is prime for $n = 0, 1, 2, 3, 4$:**

$n = 0$: $0 + 0 + 17 = 17$ (prime) $n = 1$: $1 + 1 + 17 = 19$ (prime) $n = 2$: $4 + 2 + 17 = 23$
(prime) $n = 3$: $9 + 3 + 17 = 29$ (prime) $n = 4$: $16 + 4 + 17 = 37$ (prime)

All five cases verified. (Note: this polynomial produces primes for $n = 0$ through $n = 15$, but
fails at $n = 16$ since $16^2 + 16 + 17 = 289 = 17^2$.)

### 2.6 Counterexamples

A single counterexample is sufficient to disprove a universal statement.

**Strategy:** To disprove $\forall x \in S, \; P(x)$, find one $a \in S$ such that $P(a)$ is false.

**Worked Example — Disprove: "All prime numbers are odd."**

Counterexample: $2$ is prime and $2$ is even.

**Worked Example — Disprove: "$n^2 - n + 41$ is prime for all $n \in \mathbb{N}$."**

When $n = 41$: $41^2 - 41 + 41 = 41^2 = 1681$, which is composite ($41 \times 41$).

:::tip To prove a universal claim requires a general proof. To disprove it requires only one
counterexample. This asymmetry is fundamental to mathematical logic. :::

<details>
<summary>Exercise: Disprove: "For all positive integers $a$ and $b$, $\gcd(a+b, a-b) = \gcd(a, b)$."</summary>

Take $a = 3$, $b = 1$. Then $\gcd(3+1, 3-1) = \gcd(4, 2) = 2$, but $\gcd(3, 1) = 1$. Since
$2 \ne 1$, the statement is false.

</details>

---

## 3. Classical Proof Examples

### 3.1 $\sqrt{2}$ is Irrational (Detailed)

This proof appeared in Section 2.2. Here we present it with full commentary on every logical step.

**Theorem:** $\sqrt{2} \notin \mathbb{Q}$.

**Proof:**

We proceed by contradiction.

Assume $\sqrt{2} \in \mathbb{Q}$. Then there exist coprime integers $a, b$ with $b \gt 0$ such that
$\sqrt{2} = \frac{a}{b}$.

The requirement that $\gcd(a, b) = 1$ is without loss of generality: any rational number can be
expressed as a fraction in lowest terms.

Squaring: $2 = \frac{a^2}{b^2}$, so $a^2 = 2b^2$. Equation (1).

From (1): $a^2$ is divisible by 2, so $a^2$ is even. By the contrapositive of "odd implies square is
odd," $a$ is even.

Since $a$ is even, write $a = 2m$ for some integer $m$. Substituting into (1):

$(2m)^2 = 2b^2$, i.e., $4m^2 = 2b^2$, i.e., $b^2 = 2m^2$. Equation (2).

From (2): $b^2$ is even, so $b$ is even (same reasoning as above).

But now $a$ and $b$ are both even, meaning $\gcd(a, b) \ge 2$, contradicting $\gcd(a, b) = 1$.

This contradiction shows our assumption is false. Hence $\sqrt{2} \notin \mathbb{Q}$. $\blacksquare$

### 3.2 There Are Infinitely Many Primes

**Theorem (Euclid):** The set of prime numbers is infinite.

**Proof:**

We proceed by contradiction.

Assume there are only finitely many primes: $p_1, p_2, \ldots, p_n$.

Consider the number $N = p_1 p_2 \cdots p_n + 1$.

Since $N \gt 1$, by the Fundamental Theorem of Arithmetic, $N$ has a prime factor $p$.

This prime $p$ must be one of $p_1, p_2, \ldots, p_n$ (since we assumed these are all the primes).

But $N = p_1 p_2 \cdots p_n + 1$, and for each $p_i$:

$$N \equiv 0 + 1 \equiv 1 \pmod{p_i}$$

So $p_i \nmid N$ for all $i$. This contradicts that some $p_i$ divides $N$.

Therefore, there are infinitely many primes. $\blacksquare$

:::info An important subtlety: $N = p_1 p_2 \cdots p_n + 1$ is NOT necessarily prime itself. For
example, $2 \cdot 3 \cdot 5 \cdot 7 \cdot 11 \cdot 13 + 1 = 30031 = 59 \times 509$. The proof only
requires that $N$ has SOME prime factor not in the list. :::

### 3.3 $\log_2{3}$ is Irrational

**Theorem:** $\log_2{3}$ is irrational.

**Proof:**

We proceed by contradiction. Assume $\log_2{3}$ is rational.

Then $\log_2{3} = \frac{p}{q}$ for some coprime positive integers $p, q$ with $q \ge 1$.

This means $2^{p/q} = 3$, so $2^p = 3^q$.

Since $p \ge 1$, $2^p$ is a power of 2. Its only prime factor is 2.

Since $q \ge 1$, $3^q$ is a power of 3. Its only prime factor is 3.

By the Fundamental Theorem of Arithmetic, prime factorizations are unique. The number $2^p = 3^q$
would need to have prime factorization consisting of only 2's AND only 3's simultaneously. This is
impossible unless $p = q = 0$, but $p \ge 1$.

Contradiction. Hence $\log_2{3}$ is irrational. $\blacksquare$

<details>
<summary>Exercise: Prove that $\log_3{5}$ is irrational.</summary>

Assume $\log_3{5} = \frac{p}{q}$ in lowest terms, so $3^p = 5^q$. The LHS has only prime factor 3;
the RHS has only prime factor 5. By uniqueness of prime factorization, this is impossible unless
$p = q = 0$, contradicting $p \ge 1$. Hence $\log_3{5}$ is irrational.

</details>

### 3.4 Sum Formulas

We proved these by induction in Section 2.4. Here is the complete reference:

$$\sum_{i=1}^{n} i = \frac{n(n+1)}{2}$$

$$\sum_{i=1}^{n} i^2 = \frac{n(n+1)(2n+1)}{6}$$

$$\sum_{i=1}^{n} i^3 = \frac{n^2(n+1)^2}{4} = \left(\frac{n(n+1)}{2}\right)^2$$

The last identity is notable: the sum of cubes equals the square of the sum of the first $n$
integers.

<details>
<summary>Exercise: Prove $\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2$ by induction.</summary>

Let $P(n)$: $\displaystyle\sum_{i=1}^{n} i^3 = \left(\frac{n(n+1)}{2}\right)^2$.

Base case ($n = 1$): LHS $= 1$, RHS $= \left(\frac{1 \cdot 2}{2}\right)^2 = 1$. True.

Inductive hypothesis: Assume $P(k)$ holds.

Inductive step:

$$\sum_{i=1}^{k+1} i^3 = \left(\frac{k(k+1)}{2}\right)^2 + (k+1)^3$$

$$= \frac{k^2(k+1)^2}{4} + (k+1)^3 = (k+1)^2 \left(\frac{k^2}{4} + (k+1)\right)$$

$$= (k+1)^2 \cdot \frac{k^2 + 4k + 4}{4} = (k+1)^2 \cdot \frac{(k+2)^2}{4}$$

$$= \left(\frac{(k+1)(k+2)}{2}\right)^2$$

This is $P(k+1)$. By induction, $P(n)$ holds for all $n \ge 1$.

</details>

### 3.5 Divisibility Proofs

**Theorem:** If $n^2$ is even, then $n$ is even.

We proved this by contrapositive in Section 2.3. Here are additional divisibility results.

**Theorem:** If $a \mid b$ and $b \mid c$, then $a \mid c$ (transitivity of divisibility).

**Proof:**

Since $a \mid b$, there exists $m \in \mathbb{Z}$ such that $b = am$. Since $b \mid c$, there exists
$n \in \mathbb{Z}$ such that $c = bn$.

Therefore $c = bn = (am)n = a(mn)$.

Since $mn \in \mathbb{Z}$, we have $a \mid c$. $\blacksquare$

**Theorem:** If $d \mid a$ and $d \mid b$, then $d \mid (ax + by)$ for all $x, y \in \mathbb{Z}$.

**Proof:**

Since $d \mid a$, write $a = dm$ for some $m \in \mathbb{Z}$. Since $d \mid b$, write $b = dn$ for
some $n \in \mathbb{Z}$.

$ax + by = (dm)x + (dn)y = d(mx + ny)$.

Since $mx + ny \in \mathbb{Z}$, $d \mid (ax + by)$. $\blacksquare$

:::note This theorem is the foundation of the Euclidean algorithm. The expression $ax + by$ is
called a **linear combination** of $a$ and $b$. The greatest common divisor $\gcd(a, b)$ can always
be expressed as a linear combination of $a$ and $b$ (Bezout's identity). :::

### 3.6 Inequality Proofs

**AM-GM Inequality (two variables):** For $a, b \ge 0$:

$$\frac{a + b}{2} \ge \sqrt{ab}$$

with equality if and only if $a = b$.

**Proof:**

Note that $(\sqrt{a} - \sqrt{b})^2 \ge 0$ for all $a, b \ge 0$.

Expanding: $a - 2\sqrt{ab} + b \ge 0$, so $a + b \ge 2\sqrt{ab}$.

Dividing by 2: $\frac{a+b}{2} \ge \sqrt{ab}$. Equality holds when $\sqrt{a} = \sqrt{b}$, i.e.,
$a = b$. $\blacksquare$

**Cauchy-Schwarz Inequality (statement):** For real numbers $a_1, \ldots, a_n$ and
$b_1, \ldots, b_n$:

$$\left(\sum_{i=1}^{n} a_i b_i\right)^2 \le \left(\sum_{i=1}^{n} a_i^2\right) \left(\sum_{i=1}^{n} b_i^2\right)$$

with equality when the vectors are proportional ($a_i = \lambda b_i$ for all $i$ and some scalar
$\lambda$).

The proof is beyond the scope of this note but uses the fact that $\sum (a_i x + b_i)^2 \ge 0$ for
all $x \in \mathbb{R}$, and a quadratic in $x$ that is always non-negative must have a non-positive
discriminant.

<details>
<summary>Exercise: Prove the AM-GM inequality for three variables: $\frac{a+b+c}{3} \ge \sqrt[3]{abc}$ for $a, b, c \ge 0$.</summary>

Apply two-variable AM-GM twice. First, $\frac{a+b}{2} \ge \sqrt{ab}$. Let $m = \frac{a+b}{2}$. Then:

$\frac{m + c}{2} \ge \sqrt{mc} \ge \sqrt{\sqrt{ab} \cdot c} = (abc)^{1/4}$

Wait, that gives us $\frac{\frac{a+b}{2} + c}{2} \ge (abc)^{1/4}$, i.e.,
$\frac{a+b+2c}{4} \ge (abc)^{1/4}$.

That is not quite right for three-variable AM-GM. A cleaner approach: let $a = x^3$, $b = y^3$,
$c = z^3$ with $x, y, z \ge 0$. We need $\frac{x^3 + y^3 + z^3}{3} \ge xyz$.

Consider $x^3 + y^3 + z^3 - 3xyz = \frac{1}{2}(x+y+z)[(x-y)^2 + (y-z)^2 + (z-x)^2] \ge 0$.

Since $x+y+z \ge 0$ and squares are non-negative, $x^3 + y^3 + z^3 \ge 3xyz$. Dividing by 3 and
substituting back gives the result.

</details>

---

## 4. Number Theory Proofs (HL Extension)

### 4.1 Divisibility Properties

For integers $a, b, c$ with $a \ne 0$:

**Definition:** $a \mid b$ (read "$a$ divides $b$") means there exists $k \in \mathbb{Z}$ such that
$b = ak$.

**Key properties:**

1. $a \mid 0$ for all $a \ne 0$ (since $0 = a \cdot 0$)
2. $1 \mid b$ for all $b$ (since $b = 1 \cdot b$)
3. If $a \mid b$ and $b \mid a$, then $a = \pm b$
4. If $a \mid b$ and $a \mid c$, then $a \mid (b + c)$ and $a \mid (b - c)$

**Proof of property 3:**

$a \mid b$ implies $b = ma$ for some $m \in \mathbb{Z}$. $b \mid a$ implies $a = nb$ for some
$n \in \mathbb{Z}$.

Substituting: $a = n(ma) = (nm)a$, so $(nm - 1)a = 0$. Since $a \ne 0$, we have $nm = 1$.

In integers, $nm = 1$ implies $(n, m) = (1, 1)$ or $(n, m) = (-1, -1)$.

If $m = 1$: $b = a$. If $m = -1$: $b = -a$. So $a = \pm b$. $\blacksquare$

### 4.2 Congruences and Modular Arithmetic

**Definition:** $a \equiv b \pmod{n}$ means $n \mid (a - b)$, i.e., $a - b = kn$ for some
$k \in \mathbb{Z}$.

**Key properties of congruences:**

If $a \equiv b \pmod{n}$ and $c \equiv d \pmod{n}$, then:

1. $a + c \equiv b + d \pmod{n}$
2. $a - c \equiv b - d \pmod{n}$
3. $ac \equiv bd \pmod{n}$
4. $a^m \equiv b^m \pmod{n}$ for any $m \in \mathbb{Z}^+$

**Proof of property 1:**

$a \equiv b \pmod{n}$ means $a - b = kn$. $c \equiv d \pmod{n}$ means $c - d = ln$.

$(a+c) - (b+d) = (a-b) + (c-d) = kn + ln = (k+l)n$.

Therefore $n \mid [(a+c) - (b+d)]$, so $a+c \equiv b+d \pmod{n}$. $\blacksquare$

**Proof of property 3:**

$a = b + kn$ and $c = d + ln$ for some $k, l \in \mathbb{Z}$.

$ac = (b + kn)(d + ln) = bd + bln + dkn + kln^2 = bd + n(bl + dk + kln)$.

Therefore $n \mid (ac - bd)$, so $ac \equiv bd \pmod{n}$. $\blacksquare$

:::warning Division does NOT work with congruences in general. From $ac \equiv bc \pmod{n}$, you can
only conclude $a \equiv b \pmod{n}$ if $\gcd(c, n) = 1$. For example, $6 \equiv 0 \pmod{3}$ and
$3 \equiv 0 \pmod{3}$, but $\frac{6}{3} = 2 \not\equiv \frac{0}{0}$ (undefined). :::

<details>
<summary>Worked Example: Find the last two digits of $7^{100}$.</summary>

We need $7^{100} \pmod{100}$.

First, find $7^{100} \pmod{4}$: $7 \equiv 3 \equiv -1 \pmod{4}$, so
$7^{100} \equiv (-1)^{100} = 1 \pmod{4}$.

Next, find $7^{100} \pmod{25}$: By Euler's theorem (or Fermat's Little Theorem since 25 is a prime
power and $\gcd(7, 25) = 1$), $\phi(25) = 20$, so $7^{20} \equiv 1 \pmod{25}$, hence
$7^{100} = (7^{20})^5 \equiv 1^5 = 1 \pmod{25}$.

We need $x$ such that $x \equiv 1 \pmod{4}$ and $x \equiv 1 \pmod{25}$. By CRT,
$x \equiv 1 \pmod{100}$.

The last two digits are 01.

</details>

### 4.3 Fermat's Little Theorem

**Theorem (Fermat's Little Theorem):** If $p$ is prime and $\gcd(a, p) = 1$, then:

$$a^{p-1} \equiv 1 \pmod{p}$$

Equivalently, for any integer $a$ and prime $p$: $a^p \equiv a \pmod{p}$.

**Proof sketch (using the fact that $\{a, 2a, 3a, \ldots, (p-1)a\}$ is a permutation of
$\{1, 2, \ldots, p-1\}$ modulo $p$):**

Consider the product $1 \cdot 2 \cdot 3 \cdots (p-1) = (p-1)!$.

Modulo $p$, the numbers $a, 2a, 3a, \ldots, (p-1)a$ are all nonzero and pairwise non-congruent
modulo $p$ (since $ja \equiv ka \pmod{p}$ implies $p \mid (j-k)a$, and since $p \nmid a$, we get
$p \mid (j-k)$, which means $j \equiv k \pmod{p}$, and since $1 \le j, k \le p-1$, we get $j = k$).

Therefore $\{a, 2a, \ldots, (p-1)a\}$ is a complete residue system modulo $p$ excluding 0, so:

$$a \cdot 2a \cdot 3a \cdots (p-1)a \equiv (p-1)! \pmod{p}$$

$$a^{p-1} \cdot (p-1)! \equiv (p-1)! \pmod{p}$$

Since $p \nmid (p-1)!$ (Wilson's theorem tells us $(p-1)! \equiv -1 \pmod{p}$), we can divide both
sides by $(p-1)!$ modulo $p$:

$$a^{p-1} \equiv 1 \pmod{p} \quad \blacksquare$$

**Worked Example — Find $2^{100} \pmod{13}$:**

Since 13 is prime and $\gcd(2, 13) = 1$, by Fermat: $2^{12} \equiv 1 \pmod{13}$.

$100 = 8 \cdot 12 + 4$, so
$2^{100} = (2^{12})^8 \cdot 2^4 \equiv 1^8 \cdot 16 \equiv 16 \equiv 3 \pmod{13}$.

<details>
<summary>Exercise: Find $3^{50} \pmod{11}$.</summary>

By Fermat: $3^{10} \equiv 1 \pmod{11}$.

$50 = 5 \cdot 10$, so $3^{50} = (3^{10})^5 \equiv 1^5 = 1 \pmod{11}$.

Answer: $3^{50} \equiv 1 \pmod{11}$.

</details>

### 4.4 Fundamental Theorem of Arithmetic

**Theorem:** Every integer $n \ge 2$ can be expressed uniquely (up to order of factors) as a product
of primes:

$$n = p_1^{a_1} \cdot p_2^{a_2} \cdots p_k^{a_k}$$

where $p_1 \lt p_2 \lt \cdots \lt p_k$ are primes and $a_i \ge 1$.

**Existence** was proved in Section 2.4.2 using strong induction. Here we sketch **uniqueness**.

**Uniqueness proof (sketch):**

Suppose $n$ has two prime factorizations:

$$n = p_1 p_2 \cdots p_r = q_1 q_2 \cdots q_s$$

where all $p_i, q_j$ are primes. Since $p_1 \mid n = q_1 q_2 \cdots q_s$, by Euclid's lemma
($p \mid ab$ and $p$ prime implies $p \mid a$ or $p \mid b$), $p_1$ divides some $q_j$.

Since $q_j$ is prime and $p_1$ is prime with $p_1 \mid q_j$, we must have $p_1 = q_j$. Cancel this
factor and repeat. By induction, the factorizations are identical. $\blacksquare$

### 4.5 GCD and LCM Properties

**Definition:** $\gcd(a, b)$ is the greatest common divisor of $a$ and $b$ — the largest positive
integer dividing both.

**Definition:** $\mathrm{lcm}(a, b)$ is the least common multiple — the smallest positive integer
that both $a$ and $b$ divide.

**Key relationship:**

$$\gcd(a, b) \cdot \mathrm{lcm}(a, b) = |ab|$$

**Proof (using prime factorizations):**

Let $a = \prod p_i^{\alpha_i}$ and $b = \prod p_i^{\beta_i}$ (with $\alpha_i, \beta_i \ge 0$,
padding with zeros where needed).

$\gcd(a, b) = \prod p_i^{\min(\alpha_i, \beta_i)}$

$\mathrm{lcm}(a, b) = \prod p_i^{\max(\alpha_i, \beta_i)}$

$\gcd(a,b) \cdot \mathrm{lcm}(a,b) = \prod p_i^{\min(\alpha_i, \beta_i) + \max(\alpha_i, \beta_i)} = \prod p_i^{\alpha_i + \beta_i} = ab$.
$\blacksquare$

**Bezout's Identity:** For integers $a, b$ (not both zero), there exist integers $x, y$ such that:

$$\gcd(a, b) = ax + by$$

This is proved constructively by the Euclidean algorithm (reversing the steps).

### 4.6 Euclidean Algorithm Correctness

**Theorem:** The Euclidean algorithm correctly computes $\gcd(a, b)$.

**Algorithm:** For $a \ge b \ge 0$:

$$a = bq_1 + r_1, \quad 0 \le r_1 \lt b$$ $$b = r_1 q_2 + r_2, \quad 0 \le r_2 \lt r_1$$
$$r_1 = r_2 q_3 + r_3, \quad 0 \le r_3 \lt r_2$$

$$\vdots$$

$$r_{n-2} = r_{n-1} q_n + r_n, \quad 0 \le r_n \lt r_{n-1}$$ $$r_{n-1} = r_n q_{n+1} + 0$$

The algorithm terminates with $\gcd(a, b) = r_n$.

**Proof of correctness:**

**Claim 1:** The remainders form a strictly decreasing sequence of non-negative integers:
$b \gt r_1 \gt r_2 \gt \cdots \ge 0$. This follows from the division algorithm: each remainder is
strictly less than the previous divisor.

**Claim 2:** The algorithm terminates. Since the remainders are non-negative integers and strictly
decrease, the process must eventually reach remainder 0 (by the well-ordering principle).

**Claim 3:** $\gcd(a, b) = \gcd(b, r_1) = \gcd(r_1, r_2) = \cdots = \gcd(r_{n-1}, r_n)$. This
follows from the key lemma: $\gcd(a, b) = \gcd(b, a - bq)$ for any integer $q$.

Proof of the key lemma: if $d \mid a$ and $d \mid b$, then $d \mid (a - bq)$. Conversely, if
$d \mid b$ and $d \mid (a - bq)$, then $d \mid (a - bq + bq) = a$. So $d$ divides both $a$ and $b$
if and only if $d$ divides both $b$ and $a - bq$. Therefore $\gcd(a, b) = \gcd(b, a - bq)$.

**Claim 4:** $\gcd(r_{n-1}, r_n) = r_n$. Since $r_n \mid r_{n-1}$ (the last step is
$r_{n-1} = r_n q_{n+1}$), the GCD is $r_n$.

Combining claims: $\gcd(a, b) = r_n$. $\blacksquare$

<details>
<summary>Worked Example: Compute $\gcd(252, 105)$ and express it as a linear combination.</summary>

$252 = 105 \cdot 2 + 42$ $105 = 42 \cdot 2 + 21$ $42 = 21 \cdot 2 + 0$

So $\gcd(252, 105) = 21$.

Back-substitution to find Bezout coefficients:

$21 = 105 - 42 \cdot 2$

$42 = 252 - 105 \cdot 2$

$21 = 105 - (252 - 105 \cdot 2) \cdot 2 = 105 - 252 \cdot 2 + 105 \cdot 4 = 105 \cdot 5 - 252 \cdot 2$

So $\gcd(252, 105) = 21 = 5 \cdot 105 + (-2) \cdot 252$.

</details>

---

## 5. Common Pitfalls

### 5.1 Circular Reasoning

Circular reasoning occurs when you implicitly assume what you are trying to prove.

**Example of circular reasoning:**

"Prove that $\sqrt{2}$ is irrational."

Bad proof: "Since $\sqrt{2}$ is irrational, it cannot be written as $\frac{a}{b}$. Therefore
$\sqrt{2}$ is irrational."

The conclusion ($\sqrt{2}$ is irrational) appears in the hypothesis. This proves nothing.

**How to avoid:** Check that every step of your proof relies only on axioms, definitions, and
previously established theorems — never on the statement you are proving.

:::danger Circular reasoning is the most dangerous logical fallacy in mathematics because it can
look convincing. Always verify that your proof does not contain the conclusion as an unstated
assumption. :::

### 5.2 Assuming the Conclusion

Related to circular reasoning, this occurs when you "work backwards" from the conclusion without
checking reversibility.

**Example:**

"Prove: If $x^2 = 4$, then $x = 2$."

Bad proof: $x^2 = 4$, so $x = \sqrt{4} = 2$. Done.

This is wrong because $x = -2$ also satisfies $x^2 = 4$. The step $x = \sqrt{4}$ implicitly assumes
$x \ge 0$.

The statement itself is false: $x^2 = 4$ does not imply $x = 2$. The correct implication is
$x^2 = 4 \implies x = 2$ or $x = -2$.

### 5.3 Incorrect Negation of Implications

The negation of $P \implies Q$ is NOT $P \implies \neg Q$.

$$\neg(P \implies Q) \equiv P \wedge \neg Q$$

**Reasoning:** $P \implies Q$ is logically equivalent to $\neg P \vee Q$ (check the truth table).
So:

$$\neg(P \implies Q) \equiv \neg(\neg P \vee Q) \equiv P \wedge \neg Q$$

**Worked Example:**

Negate: "If it rains, the ground gets wet."

Correct negation: "It rains AND the ground does NOT get wet." (The premise holds but the conclusion
fails.)

Incorrect negation: "If it rains, the ground does not get wet." (This is a different implication
entirely.)

:::warning This is one of the most common errors on IB exams. Memorize: the negation of "$P$ implies
$Q$" is "$P$ AND not $Q$." :::

### 5.4 Induction Base Case Errors

**The pitfall:** Skipping the base case or proving the wrong base case.

**Example:**

"Prove: $n = n + 1$ for all $n \ge 1$."

Bad proof: Assume $k = k + 1$. Then $k + 1 = (k + 1) + 1 = k + 2$. So $k + 1 = k + 2$, i.e.,
$k + 1 = (k+1) + 1$. QED.

This "proof" never checks the base case. The statement $1 = 1 + 1 = 2$ is false, so the base case
fails.

**Another example:** When using strong induction with a recursive definition like the Fibonacci
sequence, you may need MULTIPLE base cases. Proving the induction step from $P(k)$ and $P(k-1)$ to
$P(k+1)$ requires both $P(1)$ and $P(2)$ as base cases.

<details>
<summary>Worked Example: Prove $F_n \le 2^n$ for all $n \ge 1$, where $F_n$ is the $n$-th Fibonacci number.</summary>

Let $P(n)$: $F_n \le 2^n$.

Base cases: $F_1 = 1 \le 2 = 2^1$. True. $F_2 = 1 \le 4 = 2^2$. True. We need TWO base cases because
the recurrence $F_{k+1} = F_k + F_{k-1}$ references two previous terms.

Strong inductive hypothesis: Assume $F_j \le 2^j$ for all $1 \le j \le k$, where $k \ge 2$.

Inductive step:

$F_{k+1} = F_k + F_{k-1} \le 2^k + 2^{k-1} = 2^{k-1}(2 + 1) = 3 \cdot 2^{k-1}$

Now, $3 \cdot 2^{k-1} \le 4 \cdot 2^{k-1} = 2^{k+1}$ since $3 \le 4$.

Therefore $F_{k+1} \le 2^{k+1}$. By strong induction, $P(n)$ holds for all $n \ge 1$.

If we had only checked $P(1)$ and tried to use weak induction, the inductive step from $P(k)$ alone
would not suffice because $F_{k+1}$ depends on $F_{k-1}$ as well.

</details>

### 5.5 Weak vs. Strong Induction Confusion

**Weak induction** assumes $P(k)$ and proves $P(k+1)$.

**Strong induction** assumes $P(1), P(2), \ldots, P(k)$ and proves $P(k+1)$.

**Common mistake:** Using weak induction when you need strong induction. If $P(k+1)$ depends on
$P(k-1)$ or earlier, weak induction's hypothesis is insufficient.

**Common mistake (reverse):** Always using strong induction "to be safe." While not logically wrong,
this is usually unnecessary and makes proofs harder to read. Use weak induction unless the structure
of the problem clearly requires strong induction.

:::tip **Rule of thumb:** If the statement for $n$ depends only on the statement for $n-1$ (like
$n! = n \cdot (n-1)!$), use weak induction. If it depends on earlier terms (like
$F_n = F_{n-1} + F_{n-2}$), use strong induction. :::

### 5.6 Confusing Converse with Contrapositive

| Original                    | $P \implies Q$           |
| :-------------------------- | :----------------------- |
| Contrapositive (equivalent) | $\neg Q \implies \neg P$ |
| Converse (NOT equivalent)   | $Q \implies P$           |
| Inverse (NOT equivalent)    | $\neg P \implies \neg Q$ |

A true implication does NOT guarantee a true converse.

**Example:** "If a number is prime, then it is positive." True (for integers). Converse: "If a
number is positive, then it is prime." False ($4$ is positive but not prime).

### 5.7 Forgetting Vacuous Truth

The implication $P \implies Q$ is true whenever $P$ is false, regardless of $Q$.

**Example:** "If $1 = 0$, then the moon is made of cheese." This is TRUE (vacuously), because the
premise "$1 = 0$" is false.

**Practical consequence:** To disprove $P \implies Q$, you must show $P$ is true AND $Q$ is false.
Showing $P$ is false does NOT disprove the implication.

### 5.8 Incorrect Quantifier Negation

| Statement                            | Correct Negation                          |
| :----------------------------------- | :---------------------------------------- |
| $\forall x, \; P(x)$                 | $\exists x, \; \neg P(x)$                 |
| $\exists x, \; P(x)$                 | $\forall x, \; \neg P(x)$                 |
| $\forall x, \; \exists y, \; P(x,y)$ | $\exists x, \; \forall y, \; \neg P(x,y)$ |
| $\exists x, \; \forall y, \; P(x,y)$ | $\forall x, \; \exists y, \; \neg P(x,y)$ |

:::danger The order of quantifiers matters. "For every person, there exists a mother" is very
different from "There exists a person who is the mother of everyone." The negation of "for every x
there exists y" is "there exists x such that for every y" — quantifiers flip but their order is
preserved. :::

---

## 6. Proof Techniques Summary

| Method             | When to Use                                        | Key Idea                           |
| :----------------- | :------------------------------------------------- | :--------------------------------- |
| Direct             | Straightforward chain from P to Q                  | Assume P, derive Q                 |
| Contradiction      | Statement is a negation, or no obvious direct path | Assume not-P, find contradiction   |
| Contrapositive     | Not-Q gives more to work with than P               | Prove not-Q implies not-P          |
| Induction (weak)   | Statement depends on previous case                 | Base case + inductive step         |
| Induction (strong) | Statement depends on multiple previous cases       | Base cases + strong inductive step |
| Exhaustion         | Finite, small number of cases                      | Check each case                    |
| Counterexample     | Disproving a universal claim                       | Find one exception                 |

<details>
<summary>Comprehensive Exercise Set</summary>

1. Prove that $\sqrt{6}$ is irrational.

2. Prove that the product of any three consecutive integers is divisible by 6.

3. Prove by induction that $\sum_{i=0}^{n} 2^i = 2^{n+1} - 1$ for all $n \ge 0$.

4. Prove that if $n^2$ is divisible by 3, then $n$ is divisible by 3.

5. Disprove: "For all real numbers $x$, $x^2 \gt x$."

6. Negate: "For every real number $x$, there exists a real number $y$ such that $x + y = 0$."

7. Prove that there is no largest prime number.

8. Prove that $\log_5{7}$ is irrational.

9. Find $\gcd(372, 84)$ using the Euclidean algorithm, and express it as a linear combination.

10. Prove that if $a \equiv b \pmod{m}$ and $n \mid m$, then $a \equiv b \pmod{n}$.
</details>

<details>
<summary>Answers to Selected Exercises</summary>

**Exercise 1:** Assume $\sqrt{6} = \frac{a}{b}$ in lowest terms. Then $a^2 = 6b^2$, so $a^2$ is even
(divisible by 2), hence $a$ is even. Write $a = 2k$. Then $4k^2 = 6b^2$, so $2k^2 = 3b^2$. This
means $3b^2$ is even, so $b^2$ is even, so $b$ is even. Both $a$ and $b$ are even, contradicting
lowest terms.

**Exercise 2:** Among any three consecutive integers $n, n+1, n+2$: one is divisible by 3 (since one
of $n, n+1, n+2$ is a multiple of 3), and at least one is even (among any two consecutive integers,
one is even, and we have three). Since 2 and 3 are coprime, the product is divisible by
$2 \cdot 3 = 6$.

**Exercise 4:** By contrapositive. If $3 \nmid n$, then $n \equiv 1 \pmod{3}$ or
$n \equiv 2 \pmod{3}$. If $n \equiv 1$, then $n^2 \equiv 1 \pmod{3}$. If $n \equiv 2$, then
$n^2 \equiv 4 \equiv 1 \pmod{3}$. In either case $n^2 \not\equiv 0 \pmod{3}$, so $3 \nmid n^2$.

**Exercise 5:** Counterexample: $x = 0.5$. Then $x^2 = 0.25 \not\gt 0.5$. Also $x = 0$:
$0^2 = 0 \not\gt 0$.

**Exercise 6:** $\exists x \in \mathbb{R}, \; \forall y \in \mathbb{R}, \; x + y \ne 0$.

**Exercise 10:** $a \equiv b \pmod{m}$ means $m \mid (a-b)$. Since $n \mid m$ and $m \mid (a-b)$, by
transitivity of divisibility, $n \mid (a-b)$. Therefore $a \equiv b \pmod{n}$.

</details>
