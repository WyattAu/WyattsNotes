---
title: Logic
date: 2025-08-01T02:44:51.120Z
tags:
  - maths
categories:
  - maths
slug: logic
---

:::info
TMUA Specification

- The Logic of Arguments
- Arg1 Understand and be able to use mathematical logic in simple situations:
- The terms true and false;
- The terms and, or (meaning inclusive or), not;
- Statements of the form:
- if A then B
- A if B
- A only if B
- A if and only if B
- The converse of a statement;
- The contrapositive of a statement;
- The relationship between the truth of a statement and its converse
- and its contrapositive.
- Note: candidates will not be expected to recognise or use symbolic notation for any
- of these terms, nor will they be expected to complete formal truth tables.
- Arg2 Understand and use the terms necessary and sufficient.
- Arg3 Understand and use the terms for all, for some (meaning for at least one),
- and there exists.
- Arg4 Be able to negate statements that use any of the above terms.
- Mathematical Proof
- Prf1 Follow a proof of the following types, and in simple cases know how to
- construct such a proof:
- Direct deductive proof ('Since A, therefore B, therefore C, …,
- therefore Z, which is what we wanted to prove.');
- Proof by cases (for example, by considering even and odd cases
- separately);
- Proof by contradiction;
- Disproof by counterexample.
- Prf2 Deduce implications from given statements.
- Prf3 Make conjectures based on small cases, and then justify these conjectures.
- Prf4 Rearrange a sequence of statements into the correct order to give a proof for
- a statement.
- Prf5 Problems requiring a sophisticated chain of reasoning to solve.
- Identifying Errors in Proofs
- Err1 Identifying errors in purported proofs.
- Err2 Be aware of common mathematical errors in purported proofs; for example,
- claiming 'if $ab = ac$, then $b = c$' or assuming 'if $\sin A = \sin B$, then $A = B$'
- neither of which are valid deductions.
:::

# The Logic Of Arguments

## Arg1: Simple Logic

- In mathematics, statements must be true or false.
- A statement is a sentence which is definitely true or definitely false. A statement can never be
  both true and false.
- Examples:
  - "If $x = 3$, then $x^2 = 9$." This is certainly true, so it is a statement.
  - "If $x = 3$, then $x^2 = 4$." This is certainly false, so it is a statement.
  - "The sum of two odd numbers is an even number." This is certainly true, so it is a statement.

### Truth values

A truth value is whether the statement is true or false. For instance:

- Truth value of the statement "2 is an even number" is "true"
- Truth value of the statement "2 is an odd number" is "false".

### Logically equivalent

Two statements being logically equivalent means that they have the same truth values in the same
circumstances. For example:

- Today is Tuesday; True
- Today is the day after Monday; Also True.

### Making new statements

- 21 is divisible by 3 and 21 is divisible by 6 \[A and B]
- 21 is divisible by 3 or 21 is divisible by 6 \[A or B]
- 21 is not divisible by 6 \[not B]
- if 21 is divisible by 3 then 21 is divisible by 6 \[if A then B]
- 21 is divisible by 3 if 21 is divisible by 6 \[A if B]
- 21 is divisible by 3 only if 21 is divisible by 6 \[A only if B]
- 21 is divisible by 3 if and only if 21 is divisible by 6 \[A if and only if B]

### The term "not"

Negates a statement. Only applies to what occurs immediately after unless there are brackets.
Therefore, we can say not A or B is the same as (not A) or B.

### If, only if, if and only if

I cry if I am sad

- $\mathrm{Sad}\implies\mathrm{Cry}$
- Means that if I am sad, then I cry.
- It doesn't say that there aren't other situations in which I might also cry.
- I can cry under other conditions. Being sad is NOT the only condition.
- Leads to the 'if... then...' statement: If I am sad, then I am crying.

I cry only if I am sad

- $\mathrm{Cry}\implies\mathrm{Sad}$
- If I am crying, then I am sad. This is because only under this condition (being sad) I can cry.
- This does not mean that I cry every time I am sad. I can be sad and not cry, but if I am crying,
  then I HAVE to be sad.
- Being sad is the only thing that can cause me to cry.
- Leads to the 'if... then...' statement: If I am crying, then I am sad.

I cry if and only if I am sad

- $\mathrm{Sad}\iff\mathrm{Cry}$
- Combination of the other two statements, both must be true.
- I cry if I am sad: 'If I am sad then I cry'
- I cry only if I am sad: 'If I am crying then I am sad'
- The only time I ever cry is if I am sad, and I will 100% cry if I am sad.

The church bells ring if it is Sunday

- $\mathrm{Sunday}\implies\mathrm{Ring}$
- If it is Sunday, then the bells ring
- On Sunday, at some point the bells ring
- Doesn't say anything else about the other days
- Example: A church that rings the bells at midday every day

The church bells ring only if it is Sunday

- $\mathrm{Ring}\implies\mathrm{Sunday}$
- If the bells ring, then it is Sunday
- The bells will not ring on any other day
- They might not ring on Sunday/on every Sunday
- Example: A church that rings only once a year on remembrance Sunday

The church bells ring if and only if it is Sunday

- Both 'if... then...' statements are true
- On Sunday you will hear the bells ring, and you will not hear the bells ring on any other day.

A number is prime if it is an integer

- $\mathrm{Integer}\implies\mathrm{Prime}$ : False, lots of integers are not prime.
- If a number is an integer, then it is prime.
- It can also possible be a decimal and prime, doesn't have to be an integer

A number is prime only if it is an integer

- $\mathrm{Prime}\implies\mathrm{Integer}$ : True, all primes are integers.
- If a number is prime, then it is an integer.

A number is prime if and only if it is an integer

- $\mathrm{Integer}\iff\mathrm{Prime}$ : False, all primes are integers, but not all integers are primes
- Both statements must be true.

A shape is a rectangle if it is a square

- $\mathrm{Square}\implies\mathrm{Rectangle}$ : True, all squares are rectangles
- If a shape is a square, then it is a rectangle

A shape is a rectangle only if it is a square

- $\mathrm{Rectangle}\implies\mathrm{Square}$ : False, not all rectangles are squares
- If a shape is a rectangle, then it is a square.

A shape is a rectangle if and only if it is a square

- $\mathrm{Square}\iff\mathrm{Rectangle}$ : False, because one of the two statements above are false.

A if B

- Same as: If B, then A
- Therefore B is sufficient for A
- $B\implies A$

A only if B

- Same as: If A then B
- Therefore B is necessary for A
- $A\implies B$

A if and only if B

- Same as: If A then B and If B then A
- B is necessary and sufficient for A
- $A\iff B$

### Negation of Statements

Statement: That man is tall Negation: That man is not tall Wrong: That man is short

Rule 1: Just add not Rule 2: Don't say the opposite

Statement: All the students are short Negation: At least one student is not short

Rule 3: Don't claim too much

Statement: None of the teachers are interesting Equivalent to: All of the teachers are not
interesting Negation: Some of the teachers are interesting At least one teacher is interesting

Statement: All A are B Negation: Some A are not B At least one A is not B

Statement: No A are B Negation: Some A are B At least one A is B

Statement: Some of the topics are hard Negation: All of the topics are not hard None of the topics
are hard

Statement: All numbers are prime Negation: Some numbers are not prime

Statement: Some shapes have 4 sides Negation: No shapes have 4 sides

Statement: No integers are factors of 20 Negation: Some integers are factors of 20

Statement: Every day next week, Fred will do at least one maths problem All days, Fred don math
Negation: Some day next week, Fred will do no maths problems. Some days, Fred not do math

### Converse

Basically opposite of a statement. Swap A and B.

| Statement   | Converse    |
| ----------- | ----------- |
| if A then B | if B then A |
| A only if B | B only if A |
| A if B      | B if A      |
| A iff B     | B iff A     |

### Contrapositive

Basically the equivalent of a statement. Swap A and B, then negate both of them

| Statement   | Contrapositive      |
| ----------- | ------------------- |
| if A then B | if not B then not A |
| A only if B | not B only if not A |
| A if B      | not B if not A      |
| A iff B     | not B iff not A     |

# Truth Tables

### Basic connectives

A **truth table** lists all possible truth values of a compound statement in terms of its component
statements. For a statement depending on $n$ propositions, the table has $2^n$ rows.

**Negation (NOT):** $\neg P$ is true exactly when $P$ is false.

| $P$ | $\neg P$ |
| --- | -------- |
| T   | F        |
| F   | T        |

**Conjunction (AND):** $P \land Q$ is true only when both $P$ and $Q$ are true.

| $P$ | $Q$ | $P \land Q$ |
| --- | --- | ----------- |
| T   | T   | T           |
| T   | F   | F           |
| F   | T   | F           |
| F   | F   | F           |

**Disjunction (OR, inclusive):** $P \lor Q$ is false only when both $P$ and $Q$ are false.

| $P$ | $Q$ | $P \lor Q$ |
| --- | --- | ---------- |
| T   | T   | T          |
| T   | F   | T          |
| F   | T   | T          |
| F   | F   | F          |

### The implication $P \Rightarrow Q$

The truth table for implication is often the least intuitive:

| $P$ | $Q$ | $P \Rightarrow Q$ |
| --- | --- | ----------------- |
| T   | T   | T                 |
| T   | F   | F                 |
| F   | T   | T                 |
| F   | F   | T                 |

An implication is **false only when the hypothesis is true and the conclusion is false**. This
captures the logical reading: if you promise "if $P$ then $Q$", you have only broken your promise
when $P$ happens and $Q$ does not.

The last two rows often feel surprising. Consider the statement "If it is raining, then I carry an
umbrella." If it is not raining (rows 3 and 4), the statement places no restriction on my behaviour
-- it remains true regardless of whether I carry an umbrella.

### Contrapositive has the same truth table

The contrapositive of $P \Rightarrow Q$ is $\neg Q \Rightarrow \neg P$. Constructing the truth
table:

| $P$ | $Q$ | $\neg P$ | $\neg Q$ | $\neg Q \Rightarrow \neg P$ |
| --- | --- | -------- | -------- | --------------------------- |
| T   | T   | F        | F        | T                           |
| T   | F   | F        | T        | F                           |
| F   | T   | T        | F        | T                           |
| F   | F   | T        | T        | T                           |

The column for $\neg Q \Rightarrow \neg P$ is identical to the column for $P \Rightarrow Q$ (T, F,
T, T). This is why a statement and its contrapositive are **logically equivalent**: proving one
proves the other.

### The converse does NOT have the same truth table

The converse of $P \Rightarrow Q$ is $Q \Rightarrow P$:

| $P$ | $Q$ | $P \Rightarrow Q$ | $Q \Rightarrow P$ |
| --- | --- | ----------------- | ----------------- |
| T   | T   | T                 | T                 |
| T   | F   | F                 | T                 |
| F   | T   | T                 | F                 |
| F   | F   | T                 | T                 |

The truth values differ in rows 2 and 3. This is why the converse of a true statement need not be
true. For instance, "If a number is prime then it is odd" ($P = \mathrm{prime}$, $Q = \mathrm{odd}$) is
false (witness $2$), but its converse "If a number is odd then it is prime" is also false (witness
$9$). In contrast, "If a number is a square then it is a rectangle" is true, but its converse "If a
number is a rectangle then it is a square" is false.

# Quantifiers

### Universal and existential quantifiers

Many mathematical statements involve quantifiers, which specify the scope over which a statement
applies.

- The **universal quantifier** "for all" (symbol $\forall$) asserts that a property holds for every
  element in a set.
  - Example: "For all integers $n$, $n + 0 = n$."
  - In symbols: $\forall n \in \mathbb{Z},\; n + 0 = n$.

- The **existential quantifier** "there exists" (symbol $\exists$) asserts that a property holds for
  at least one element in a set.
  - Example: "There exists an integer $n$ such that $n^2 = 4$."
  - In symbols: $\exists n \in \mathbb{Z},\; n^2 = 4$.

A useful mnemonic: $\forall$ is an **upside-down A** (for "All"); $\exists$ is a **backwards E**
(for "Exists").

### Negating quantified statements

Negation flips the quantifier and negates the predicate:

- $\neg(\forall x,\; P(x)) \equiv \exists x,\; \neg P(x)$

  "Not (for all $x$, $P(x)$ holds)" means "there exists some $x$ for which $P(x)$ does not hold."

- $\neg(\exists x,\; P(x)) \equiv \forall x,\; \neg P(x)$

  "Not (there exists an $x$ such that $P(x)$ holds)" means "for every $x$, $P(x)$ does not hold."

This matches the informal rules from the Negation section:

| Original                          | Negation         |
| --------------------------------- | ---------------- |
| All A are B                       | Some A are not B |
| No A are B (i.e. all A are not B) | Some A are B     |
| Some A are B                      | No A are B       |

### Worked examples

**Example 1.** Negate: "For all real numbers $x$, $x^2 \ge 0$."

Negation: "There exists a real number $x$ such that $x^2 \lt 0$."

(As it happens, the original statement is true and its negation is false.)

**Example 2.** Negate: "There exists an integer $n$ such that $n^2 + 1 = 0$."

Negation: "For all integers $n$, $n^2 + 1 \neq 0$."

**Example 3.** Negate: "For every integer $n$, if $n$ is even then $n^2$ is even."

Negation: "There exists an integer $n$ such that $n$ is even and $n^2$ is not even."

Notice that negating an implication $P \Rightarrow Q$ produces $\neg Q$ alongside $P$: the negation
is "$P$ and not $Q$", not "$P \Rightarrow \neg Q$". This is because $P \Rightarrow Q$ is logically
equivalent to $\neg P \lor Q$, and negating gives $P \land \neg Q$.

**Example 4.** Negate: "For all real numbers $x$ there exists a real number $y$ such that
$x + y = 0$."

Negation: "There exists a real number $x$ such that for all real numbers $y$, $x + y \neq 0$."

When negating a chain of quantifiers, the order reverses. The rightmost quantifier flips first, then
the next, and so on -- just like removing nested negations.

# Necessary and Sufficient Conditions: Formal Definitions

## Arg2: Necessary and Sufficient

The informal airport and twin examples give the right intuition. Here is the formal framework.

### Definitions

- $A$ is **sufficient** for $B$ means $A \Rightarrow B$.  
  Establishing $A$ is enough to guarantee $B$; no further conditions are needed.

- $A$ is **necessary** for $B$ means $B \Rightarrow A$.  
  Whenever $B$ holds, $A$ must hold; $B$ cannot be true without $A$.

- $A$ is **necessary and sufficient** for $B$ means $A \Leftrightarrow B$.  
  $A$ and $B$ are logically equivalent; they stand or fall together.

### Table of examples

| Condition $A$             | Condition $B$             | Relationship           | Why                                                  |
| ------------------------- | ------------------------- | ---------------------- | ---------------------------------------------------- |
| $n$ is even               | $n^2$ is even             | $A$ sufficient for $B$ | If $n = 2k$ then $n^2 = 4k^2 = 2(2k^2)$              |
| $n^2$ is even             | $n$ is even               | $A$ necessary for $B$  | If $n$ were odd, $n^2$ would be odd (contrapositive) |
| $x \lt 10$                | $x \lt 20$                | $A$ sufficient for $B$ | Every number below 10 is below 20                    |
| $x \lt 20$                | $x \lt 10$                | $A$ necessary for $B$  | Not every number below 20 is below 10                |
| $n$ is prime              | $n$ is a positive integer | $A$ sufficient for $B$ | All primes are positive integers                     |
| $n$ is a positive integer | $n$ is prime              | neither                | 4 is positive but not prime; 2 is prime              |
| $n$ is divisible by 6     | $n$ is divisible by 2     | $A$ sufficient for $B$ | $6 \mid n \Rightarrow 2 \mid n$                      |
| $n$ is divisible by 2     | $n$ is divisible by 6     | $A$ necessary for $B$  | $6 \mid n \Rightarrow 2 \mid n$                      |
| $x = y$                   | $x^2 = y^2$               | $A$ sufficient for $B$ | Squaring preserves equality                          |
| $x^2 = y^2$               | $x = y$                   | neither                | $(-1)^2 = 1^2$ but $-1 \neq 1$                       |

### Connecting to if/only if

The relationship between "if", "only if", and necessary/sufficient is:

- "$A$ if $B$" means $B$ is sufficient for $A$ (i.e. $B \Rightarrow A$).
- "$A$ only if $B$" means $B$ is necessary for $A$ (i.e. $A \Rightarrow B$).
- "$A$ if and only if $B$" means $B$ is necessary and sufficient for $A$ (i.e.
  $A \Leftrightarrow B$).

### A useful rephrasing

When asked "Is $A$ necessary/sufficient for $B$?", you can reframe the question:

- Is $A$ sufficient for $B$? $\longleftrightarrow$ Is $A \Rightarrow B$ a true statement?
- Is $A$ necessary for $B$? $\longleftrightarrow$ Is $B \Rightarrow A$ a true statement?

Answering these reduces to constructing a proof or finding a counterexample.

# Proof Techniques

## Prf1: Types of Proof

### Direct proof

**Structure.** To prove $P \Rightarrow Q$ directly, assume $P$ is true and deduce $Q$ through a
chain of valid deductions.

$$P \Rightarrow S_1 \Rightarrow S_2 \Rightarrow \cdots \Rightarrow Q$$

**Worked example.** Prove that the sum of two even integers is even.

**Proof.** Let $a$ and $b$ be even integers. By definition of evenness, there exist integers $k$ and
$m$ such that $a = 2k$ and $b = 2m$. Then

$$a + b = 2k + 2m = 2(k + m)$$

Since $k + m$ is an integer (the integers are closed under addition), $a + b$ is divisible by 2, and
therefore $a + b$ is even. $\square$

**Remark.** The key move was substituting the definition of evenness ($a = 2k$), performing algebra,
and then reversing the definition. This pattern -- unpack a definition, manipulate, repack -- is the
backbone of most direct proofs.

### Proof by contradiction

**Structure.** To prove a statement $P$, assume $\neg P$ is true and deduce a contradiction
(something that is always false, such as $0 = 1$ or $q^2 = 2$ where $q$ is rational). Since the
assumption $\neg P$ led to an impossibility, $\neg P$ must be false, so $P$ is true.

$$\neg P \Rightarrow \cdots \Rightarrow \mathrm{contradiction} \quad \therefore P$$

**Worked example 1.** Prove that $\sqrt{2}$ is irrational.

**Proof.** Suppose, for contradiction, that $\sqrt{2}$ is rational. Then $\sqrt{2} = \frac{a}{b}$
for some coprime integers $a$ and $b$ (i.e. $\gcd(a, b) = 1$), with $b \neq 0$. Squaring both sides:

$$2 = \frac{a^2}{b^2} \quad \Rightarrow \quad a^2 = 2b^2$$

This means $a^2$ is even. Since the square of an odd number is odd, $a$ must be even. Write $a = 2k$
for some integer $k$. Substituting:

$$(2k)^2 = 2b^2 \quad \Rightarrow \quad 4k^2 = 2b^2 \quad \Rightarrow \quad b^2 = 2k^2$$

So $b^2$ is even, and therefore $b$ is even. But now both $a$ and $b$ are even, contradicting
$\gcd(a, b) = 1$. Hence $\sqrt{2}$ is irrational. $\square$

**Worked example 2.** Prove that there are infinitely many primes.

**Proof.** Suppose, for contradiction, that there are only finitely many primes. List them as
$p_1, p_2, \ldots, p_n$. Consider the number

$$N = p_1 p_2 \cdots p_n + 1$$

When $N$ is divided by any $p_i$, the remainder is 1 (since each $p_i$ divides the product
$p_1 p_2 \cdots p_n$ but not the added 1). Therefore no $p_i$ divides $N$. Since every integer
greater than 1 has a prime factor, $N$ must have a prime factor not in our list -- a contradiction.
Hence there are infinitely many primes. $\square$

### Proof by contrapositive

**Structure.** To prove $P \Rightarrow Q$, instead prove the logically equivalent contrapositive
$\neg Q \Rightarrow \neg P$.

$$\neg Q \Rightarrow \cdots \Rightarrow \neg P$$

This is useful when the negation of the conclusion gives you more to work with than the hypothesis
does.

**Worked example.** Prove that if $n^2$ is even, then $n$ is even.

Rather than working from "$n^2$ is even" to "$n$ is even" directly, we prove the contrapositive: if
$n$ is not even (i.e. $n$ is odd), then $n^2$ is not even (i.e. $n^2$ is odd).

**Proof.** Let $n$ be an odd integer. Then $n = 2k + 1$ for some integer $k$. Computing:

$$n^2 = (2k + 1)^2 = 4k^2 + 4k + 1 = 2(2k^2 + 2k) + 1$$

Since $2k^2 + 2k$ is an integer, $n^2$ is of the form $2m + 1$, which means $n^2$ is odd. We have
shown: if $n$ is odd then $n^2$ is odd. By contrapositive, if $n^2$ is even then $n$ is even.
$\square$

### Proof by cases

**Structure.** Split the domain into exhaustive, mutually exclusive cases and prove the result holds
in each one.

$$\mathrm{Case 1: } C_1 \Rightarrow Q \qquad \mathrm{Case 2: } C_2 \Rightarrow Q \qquad \cdots$$

Since the cases cover all possibilities, $Q$ holds unconditionally.

**Worked example.** Prove that $|xy| = |x|\,|y|$ for all real numbers $x$ and $y$.

**Proof.** We consider four cases based on the signs of $x$ and $y$. In each case $a$ and $b$ denote
non-negative reals.

| Case | $x$  | $y$  | $xy$  | $    | xy               | $   | $   | x   | \,  | y   | $   |
| ---- | ---- | ---- | ----- | ---- | ---------------- | --- | --- | --- | --- | --- | --- |
| 1    | $a$  | $b$  | $ab$  | $ab$ | $a \cdot b = ab$ |
| 2    | $a$  | $-b$ | $-ab$ | $ab$ | $a \cdot b = ab$ |
| 3    | $-a$ | $b$  | $-ab$ | $ab$ | $a \cdot b = ab$ |
| 4    | $-a$ | $-b$ | $ab$  | $ab$ | $a \cdot b = ab$ |

In all four cases $|xy| = |x|\,|y|$. $\square$

### Disproof by counterexample

**Structure.** To disprove a universal claim $\forall x,\; P(x)$, it suffices to produce a single
$x_0$ for which $P(x_0)$ is false. This is the negation of a universal statement:
$\exists x,\; \neg P(x)$.

**Worked example 1.** Disprove: "All prime numbers are odd."

Counterexample: $2$ is prime and $2$ is even.

**Worked example 2.** Disprove: "For all real numbers $x$, $x^2 \gt x$."

Counterexample: $x = 0.5$ gives $x^2 = 0.25 \lt 0.5 = x$.

**Worked example 3.** Disprove: "If $a$ and $b$ are positive integers, then
$a^2 + b^2 \ge 2ab + 1$."

Counterexample: $a = 1$, $b = 1$ gives $1 + 1 = 2$ but $2(1)(1) + 1 = 3$, and $2 \lt 3$.

### Common errors in proofs (Err1, Err2)

Several tempting deductions are invalid. The TMUA specification specifically highlights two:

**Error 1:** "If $ab = ac$, then $b = c$."

This implicitly assumes $a \neq 0$. Counterexample: $a = 0$, $b = 3$, $c = 7$. Then
$0 \cdot 3 = 0 \cdot 7 = 0$, but $3 \neq 7$. The correct deduction is: if $ab = ac$ and $a \neq 0$,
then $b = c$.

**Error 2:** "If $\sin A = \sin B$, then $A = B$."

Counterexample: $\sin 30° = \sin 150° = 0.5$, but $30° \neq 150^\circ$. The correct statement is: if
$\sin A = \sin B$ and $A, B \in [-90°, 90°]$, then $A = B$. In general, $\sin A = \sin B$ implies
$A = B + 360°k$ or $A = 180° - B + 360°k$ for some integer $k$.

**Other common errors:**

- **Affirming the consequent:** From $P \Rightarrow Q$ and $Q$, deducing $P$. This is the fallacy of
  treating the converse as equivalent to the original. Example: "All primes greater than 2 are odd.
  9 is odd. Therefore 9 is prime." -- Invalid.

- **Denying the antecedent:** From $P \Rightarrow Q$ and $\neg P$, deducing $\neg Q$. Example: "If
  it is a square, then it is a rectangle. This shape is not a square. Therefore it is not a
  rectangle." -- Invalid (it could be a non-square rectangle).

- **Dividing by a variable without checking it is non-zero.** This is the root cause of Error 1
  above.

- **Assuming what you are trying to prove** (circular reasoning / begging the question). Every step
  in a proof must follow from definitions, axioms, or previously established results -- not from the
  statement being proved.

# Common Pitfalls

### Pitfall 1: Confusing necessary and sufficient

"$A$ is necessary for $B$" means $B \Rightarrow A$, not $A \Rightarrow B$. Students frequently swap
these. Remember: a necessary condition is one you **cannot do without**; a sufficient condition is
one that is **enough on its own**.

A reliable test: ask yourself "Is condition $A$ enough to guarantee $B$?" If yes, $A$ is sufficient.
Ask "Must $A$ hold whenever $B$ holds?" If yes, $A$ is necessary.

### Pitfall 2: Negating an implication incorrectly

The negation of "$P \Rightarrow Q$" is **not** "$P \Rightarrow \neg Q$". It is "$P$ and $\neg Q$".
Intuitively: to show that "if $P$ then $Q$" is false, you must exhibit a case where $P$ is true but
$Q$ is false.

### Pitfall 3: Forgetting that "or" is inclusive

In mathematics, "or" means **at least one** holds, possibly both. "A or B" is false only when both
are false. This differs from everyday English, where "or" is sometimes exclusive (e.g. "tea or
coffee").

### Pitfall 4: Treating the converse as equivalent

A statement and its converse have different truth values in general (see the truth table section).
Proving $P \Rightarrow Q$ does **not** prove $Q \Rightarrow P$. If you need both directions, you
must prove them separately.

### Pitfall 5: Misapplying proof by contradiction

Proof by contradiction is not the same as proof by contrapositive. In a proof by contradiction, you
assume the **negation of the entire statement** and derive any contradiction. In a proof by
contrapositive, you assume $\neg Q$ and derive $\neg P$. The contrapositive method is often cleaner
because it targets a specific conclusion rather than hunting for any contradiction.

### Pitfall 6: Incomplete case analysis

When using proof by cases, the cases must be **exhaustive** (cover all possibilities) and **mutually
exclusive** (no overlap). For example, splitting integers into "even" and "odd" is exhaustive and
mutually exclusive. Splitting real numbers into "$x \gt 0$" and "$x \lt 0$" is **not** exhaustive --
you must include "$x = 0$".

# Problem Set

### Problem 1

State the converse and contrapositive of: "If $n$ is a multiple of 6, then $n$ is even." Determine
whether each is true.

<details>
<summary>Solution</summary>

Original: $n$ is a multiple of 6 $\Rightarrow$ $n$ is even. (True: $n = 6k = 2(3k)$.)

Converse: If $n$ is even, then $n$ is a multiple of 6. (False: $n = 4$ is even but not a multiple of
6.)

Contrapositive: If $n$ is not even (i.e. $n$ is odd), then $n$ is not a multiple of 6. (True:
contrapositive of a true statement is always true. Also directly: no odd number is divisible by 6.)

</details>

### Problem 2

Prove by contradiction that $\sqrt{3}$ is irrational.

<details>
<summary>Solution</summary>

Assume $\sqrt{3} = \frac{a}{b}$ where $a, b$ are coprime integers and $b \neq 0$. Then:

$$3 = \frac{a^2}{b^2} \quad \Rightarrow \quad a^2 = 3b^2$$

So $a^2$ is a multiple of 3, which means $a$ is a multiple of 3 (if 3 divides $a^2$, then 3 must
divide $a$). Write $a = 3k$. Substituting:

$$9k^2 = 3b^2 \quad \Rightarrow \quad b^2 = 3k^2$$

So $b^2$ is a multiple of 3, meaning $b$ is a multiple of 3. But then both $a$ and $b$ are multiples
of 3, contradicting $\gcd(a, b) = 1$. Hence $\sqrt{3}$ is irrational. $\square$

</details>

### Problem 3

Negate: "For all integers $n$, if $n$ is prime then $n$ is odd or $n = 2$."

<details>
<summary>Solution</summary>

Step 1: Negate the universal quantifier. "There exists an integer $n$ such that it is **not** the
case that (if $n$ is prime then $n$ is odd or $n = 2$)."

Step 2: Negate the implication. "$P \Rightarrow Q$" negates to "$P$ and $\neg Q$". So: "$n$ is prime
and $\neg(n \mathrm{ is odd or } n = 2)$."

Step 3: Apply De Morgan's law. $\neg(A \lor B) = (\neg A) \land (\neg B)$. So: "$n$ is even and
$n \neq 2$."

Full negation: "There exists an integer $n$ such that $n$ is prime and $n$ is even and $n \neq 2$."

Since no such integer exists (the only even prime is 2), the negation is false, confirming the
original statement is true.

</details>

### Problem 4

Let $f(x) = x^2 - 5x + 6$. A student claims: "For all real $x$, $f(x) \ge 0$." Disprove by
counterexample.

<details>
<summary>Solution</summary>

Factorise: $f(x) = (x - 2)(x - 3)$. Testing $x = 2.5$:

$$f(2.5) = (2.5 - 2)(2.5 - 3) = (0.5)(-0.5) = -0.25 \lt 0$$

So $f(2.5) \lt 0$, providing a counterexample. The claim is false. (In fact, $f(x) \ge 0$ only when
$x \le 2$ or $x \ge 3$.)

</details>

### Problem 5

Prove by cases: for all integers $n$, $n^2 + n$ is even.

<details>
<summary>Solution</summary>

**Case 1: $n$ is even.** Then $n = 2k$ for some integer $k$.

$$n^2 + n = 4k^2 + 2k = 2(2k^2 + k)$$

Since $2k^2 + k$ is an integer, $n^2 + n$ is even.

**Case 2: $n$ is odd.** Then $n = 2k + 1$ for some integer $k$.

$$n^2 + n = (2k+1)^2 + (2k+1) = 4k^2 + 4k + 1 + 2k + 1 = 4k^2 + 6k + 2 = 2(2k^2 + 3k + 1)$$

Since $2k^2 + 3k + 1$ is an integer, $n^2 + n$ is even.

In both cases $n^2 + n$ is even. $\square$

</details>

### Problem 6

A student writes the following "proof". Identify the error.

"Claim: If $x^2 = y^2$, then $x = y$.

Proof: $x^2 = y^2$. Taking square roots, $x = y$. QED."

<details>
<summary>Solution</summary>

The error is in the step "taking square roots gives $x = y$". This is invalid because
$\sqrt{x^2} = |x|$, not $x$. From $x^2 = y^2$ we get $|x| = |y|$, which means $x = y$ or $x = -y$.

Counterexample: $x = 3$, $y = -3$. Then $x^2 = 9 = y^2$, but $3 \neq -3$.

The correct statement is: "If $x^2 = y^2$, then $x = y$ or $x = -y$."

</details>

### Problem 7

Prove by contrapositive: if $3n + 2$ is odd, then $n$ is odd.

<details>
<summary>Solution</summary>

The contrapositive is: if $n$ is not odd (i.e. $n$ is even), then $3n + 2$ is not odd (i.e. $3n + 2$
is even).

**Proof.** Let $n$ be even, so $n = 2k$ for some integer $k$. Then:

$$3n + 2 = 3(2k) + 2 = 6k + 2 = 2(3k + 1)$$

Since $3k + 1$ is an integer, $3n + 2$ is even. By contrapositive, if $3n + 2$ is odd then $n$ is
odd. $\square$

</details>

### Problem 8

Prove by contradiction: there is no largest integer.

<details>
<summary>Solution</summary>

Assume, for contradiction, that there is a largest integer. Call it $N$. Then for every integer $n$,
$n \le N$. But $N + 1$ is an integer and $N + 1 \gt N$, contradicting the assumption that $N$ is the
largest integer. Hence there is no largest integer. $\square$

</details>

### Problem 9

Determine whether each condition is necessary, sufficient, both, or neither for "$n$ is divisible by
15":

(a) $n$ is divisible by 3.

(b) $n$ is divisible by 3 and by 5.

(c) $n$ is divisible by 30.

(d) $n$ ends in the digit 5.

<details>
<summary>Solution</summary>

(a) **Necessary but not sufficient.** If $15 \mid n$ then $3 \mid n$ (so necessary). But $3 \mid 6$
while $15 \nmid 6$ (so not sufficient).

(b) **Necessary and sufficient.** $3 \mid n$ and $5 \mid n$ together mean $n$ is a common multiple
of 3 and 5. Since $\gcd(3, 5) = 1$, the least common multiple is $15$, so $15 \mid n$.

(c) **Sufficient but not necessary.** If $30 \mid n$ then $15 \mid n$ (since $30 = 2 \times 15$).
But $15 \mid 15$ while $30 \nmid 15$.

(d) **Neither.** Not sufficient: $25$ ends in 5 but $15 \nmid 25$. Not necessary: $30$ is divisible
by 15 but does not end in 5.

</details>

### Problem 10

Let $P$ and $Q$ be statements. In terms of $P$ and $Q$, express: "It is not the case that both $P$
and $Q$ are true." Show that this is logically equivalent to "At least one of $P$, $Q$ is false."

<details>
<summary>Solution</summary>

"It is not the case that both $P$ and $Q$ are true" is $\neg(P \land Q)$.

By De Morgan's law: $\neg(P \land Q) \equiv (\neg P) \lor (\neg Q)$.

"At least one of $P$, $Q$ is false" means either $P$ is false or $Q$ is false (or both), which is
precisely $\neg P \lor \neg Q$.

Therefore the two statements are logically equivalent. This can also be verified by truth table:

| $P$ | $Q$ | $P \land Q$ | $\neg(P \land Q)$ | $\neg P$ | $\neg Q$ | $\neg P \lor \neg Q$ |
| --- | --- | ----------- | ----------------- | -------- | -------- | -------------------- |
| T   | T   | T           | F                 | F        | F        | F                    |
| T   | F   | F           | T                 | F        | T        | T                    |
| F   | T   | F           | T                 | T        | F        | T                    |
| F   | F   | F           | T                 | T        | T        | T                    |

The fourth and seventh columns are identical, confirming equivalence.

</details>
