---
title: Automata and Computability
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: automata-and-computability
---

## 1. Finite State Machines (FSM)

### Deterministic Finite Automaton (DFA)

**Formal definition.** A DFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q$ is a finite set of **states**
- $\Sigma$ is a finite **alphabet** (input symbols)
- $\delta: Q \times \Sigma \to Q$ is the **transition function**
- $q_0 \in Q$ is the **start state**
- $F \subseteq Q$ is the set of **accepting (final) states**

**Language accepted:** $L(M) = \{w \in \Sigma^* \mid \hat{\delta}(q_0, w) \in F\}$

where $\hat{\delta}$ is the extended transition function (processes entire string).

### Example: DFA that accepts strings ending in "01"

$M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q = \{S, A, B\}$ (S = start, A = saw 0, B = saw 01)
- $\Sigma = \{0, 1\}$
- $F = \{B\}$

|       | 0   | 1   |
| ----- | --- | --- |
| **S** | A   | S   |
| **A** | A   | B   |
| **B** | A   | S   |

Trace for "1101": S → S → A → B → S. Not accepted. ✗

Trace for "1001": S → S → A → S → A →... wait, let me retrace.

"1001": S -(1)→ S -(0)→ A -(0)→ A -(1)→ B. Accepted. ✓

### Non-Deterministic Finite Automaton (NFA)

**Formal definition.** An NFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $\delta: Q \times \Sigma \to \mathcal{P}(Q)$ (maps to a **set** of states, not a single state)
- All other components are the same as a DFA

An NFA **accepts** a string if there exists at least one path through the machine that ends in an
accepting state.

### NFA with Epsilon Transitions (ε-NFA)

An ε-NFA additionally allows transitions on the empty string ε (changing state without consuming
input).

$\delta: Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$

---

## 2. DFA-NFA Equivalence

**Theorem (Rabin-Scott).** For every NFA $N$, there exists a DFA $D$ such that $L(N) = L(D)$. DFAs
and NFAs accept exactly the same class of languages (the **regular languages**).

**Proof (subset construction).** Given NFA $N = (Q_N, \Sigma, \delta_N, q_0, F_N)$, construct DFA
$D = (Q_D, \Sigma, \delta_D, q_0', F_D)$:

1. $Q_D = \mathcal{P}(Q_N)$ (states are subsets of $Q_N$)
2. $q_0' = \varepsilon\text{-closure}(\{q_0\})$
3. $\delta_D(S, a) = \varepsilon\text{-closure}\left(\bigcup_{q \in S} \delta_N(q, a)\right)$ for
   $S \subseteq Q_N$
4. $F_D = \{S \subseteq Q_N \mid S \cap F_N \neq \emptyset\}$

The DFA tracks the set of all states the NFA could be in. Since $Q_N$ is finite, $Q_D$ is finite (at
most $2^{|Q_N|}$ states). The DFA accepts exactly the same strings as the NFA. $\square$

**Corollary.** The class of regular languages is closed under union, intersection, complementation,
concatenation, and Kleene star.

:::info
Board-specific

- **AQA** requires finite state machines (FSMs) with state transition diagrams and tables, regular
  expressions, and Turing machines (conceptual understanding)
- **CIE (9618)** requires finite state machines and Turing machines; may not emphasise regular
  expressions as heavily
- **OCR (A)** requires finite state machines, state transition diagrams, regular expressions, and
  understanding of decidability
- **Edexcel** covers finite state machines and basic automata theory
:::

---

## 3. Regular Expressions

### Definition

A **regular expression** defines a regular language using operators:

| Operator      | Name          | Meaning                          | Regex  |
| ------------- | ------------- | -------------------------------- | ------ |
| $\emptyset$   | Empty set     | Accepts nothing                  | —      |
| $\varepsilon$ | Empty string  | Accepts the empty string         | `ε`    |
| $a$           | Literal       | Accepts the character $a$        | `a`    |
| $R \cdot S$   | Concatenation | Strings from $R$ followed by $S$ | `RS`   |
| $R \mid S$    | Alternation   | Strings from $R$ or $S$          | `R\|S` |
| $R^*$         | Kleene star   | Zero or more repetitions of $R$  | `R*`   |

**Kleene's Theorem.** A language is regular if and only if it can be described by a regular
expression.

### Examples

| Language                       | Regular Expression |
| ------------------------------ | ------------------ |
| Strings containing "abc"       | `.*(abc).*`        |
| Binary strings ending in "01"  | `(0\|1)*01`        |
| Strings of even length         | `((0\|1)(0\|1))*`  |
| Strings with no consecutive 1s | `(0\|10)*(1\|ε)`   |

### Limitations of Regular Languages

**Theorem.** The language $L = \{a^n b^n \mid n \geq 0\}$ is **not** regular.

**Proof (Pumping Lemma).** The Pumping Lemma for regular languages states: if $L$ is regular, then
there exists a pumping length $p$ such that any string $s \in L$ with $|s| \geq p$ can be split into
$s = xyz$ where:

1. $|xy| \leq p$
2. $|y| \geq 1$
3. $xy^iz \in L$ for all $i \geq 0$

Choose $s = a^p b^p$. By condition 1, $y$ consists only of $a$'s. Pumping ($i = 0$):
$xz = a^{p-|y|}b^p$. Since $|y| \geq 1$, $p - |y| \neq p$, so $a^{p-|y|}b^p \notin L$.
Contradiction. $\square$

---

## 4. Turing Machines

### Definition

A **Turing machine (TM)** is a 7-tuple
$M = (Q, \Sigma, \Gamma, \delta, q_0, q_{accept}, q_{reject})$ where:

- $Q$ is a finite set of states
- $\Sigma$ is the input alphabet (does not include the blank symbol)
- $\Gamma$ is the tape alphabet ($\Sigma \subseteq \Gamma$, includes blank symbol $\sqcup$)
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is the transition function
- $q_0$ is the start state
- $q_{accept}$ is the accept state
- $q_{reject}$ is the reject state ($q_{reject} \neq q_{accept}$)

### Operation

1. Tape is infinite in both directions, initialised with input followed by blanks
2. Read/write head starts at the leftmost input symbol
3. At each step: read the current symbol, consult $\delta$, write a symbol, move head left or right
4. Accept if $q_{accept}$ is reached; reject if $q_{reject}$ is reached; may loop forever

### Example: TM that accepts $L = \{a^n b^n \mid n \geq 0\}$

**Algorithm:**

1. If tape is empty, accept
2. Find the leftmost `a`, replace with `X`, move right to find the leftmost `b`, replace with `X`
3. Return to the leftmost remaining `a`
4. Repeat until no `a` remains
5. If only `X`'s and blanks remain, accept; otherwise reject

**Formal transitions (partial):**

| State | Read     | Write    | Move | Next State   |
| ----- | -------- | -------- | ---- | ------------ |
| $q_0$ | $a$      | $X$      | $R$  | $q_1$        |
| $q_0$ | $X$      | $X$      | $R$  | $q_3$        |
| $q_0$ | $\sqcup$ | $\sqcup$ | $S$  | $q_{accept}$ |
| $q_1$ | $a$      | $a$      | $R$  | $q_1$        |
| $q_1$ | $X$      | $X$      | $R$  | $q_1$        |
| $q_1$ | $b$      | $X$      | $L$  | $q_2$        |
| $q_2$ | $a$      | $a$      | $L$  | $q_2$        |
| $q_2$ | $X$      | $X$      | $R$  | $q_0$        |
| $q_3$ | $X$      | $X$      | $R$  | $q_3$        |
| $q_3$ | $\sqcup$ | $\sqcup$ | $S$  | $q_{accept}$ |
| $q_3$ | $b$      | $b$      | $S$  | $q_{reject}$ |

---

## 5. The Church-Turing Thesis

**Thesis (not provable — a thesis):** Every effectively computable function is computable by a
Turing machine.

Equivalently: any reasonable model of computation (lambda calculus, μ-recursive functions, modern
programming languages) can compute exactly the same set of functions as a Turing machine.

This is a **thesis**, not a theorem — it cannot be proven because "effectively computable" is an
informal concept. However, no counterexample has ever been found.

---

## 6. The Halting Problem

### Definition

**Halting problem:** Given a description of a Turing machine $M$ and an input $w$, determine whether
$M$ halts (accepts or rejects) when run on $w$.

**Theorem (Turing, 1936).** The halting problem is **undecidable** — no Turing machine can solve it
for all possible inputs.

### Proof by Contradiction

Assume a Turing machine $H$ exists that decides the halting problem:

$$H(M, w) = \begin{cases} \text{accept} & \text{if } M \text{ halts on } w \\ \text{reject} & \text{if } M \text{ does not halt on } w \end{cases}$$

Construct a new machine $D$ that uses $H$:

$$D(M) = \begin{cases} \text{loop forever} & \text{if } H(M, M) = \text{accept} \\ \text{halt (reject)} & \text{if } H(M, M) = \text{reject} \end{cases}$$

**The contradiction:** What happens when $D$ is run on its own description, $D$?

- If $D(D)$ halts → $H(D, D)$ accepted → $D$ should loop forever → **contradiction**
- If $D(D)$ loops forever → $H(D, D)$ rejected → $D$ should halt → **contradiction**

Both cases lead to contradictions, so $H$ cannot exist. $\square$

**Corollary.** The halting problem is semi-decidable (recursively enumerable): we can build a
machine that accepts when $M$ halts on $w$, but it cannot always reject when $M$ doesn't halt (it
would have to run forever).

---

## 7. Decidable and Undecidable Problems

| Category       | Definition                                            | Example                |
| -------------- | ----------------------------------------------------- | ---------------------- |
| Decidable      | A TM always halts with the correct answer             | "Is $n$ prime?"        |
| Semi-decidable | A TM halts on yes-instances; may loop on no-instances | Halting problem        |
| Undecidable    | No TM can solve it for all inputs                     | Halting problem (full) |
| Unrecognisable | No TM even semi-decides it                            | Complement of halting  |

---

## 8. P vs NP

### Definitions

- **P:** The class of decision problems solvable by a deterministic Turing machine in **polynomial
  time** $O(n^k)$ for some constant $k$.
- **NP:** The class of decision problems whose **yes-instances** can be **verified** by a
  deterministic Turing machine in polynomial time (given a certificate).

### Relationship

$$\text{P} \subseteq \text{NP}$$

Every problem in P is also in NP (if you can solve it in polynomial time, you can certainly verify a
solution in polynomial time).

**The P vs NP question:** Is $\text{P} = \text{NP}$? This is one of the seven Millennium Prize
Problems. Most computer scientists believe $\text{P} \neq \text{NP}$.

### NP-Complete Problems

A problem is **NP-complete** if:

1. It is in NP
2. Every problem in NP can be reduced to it in polynomial time

**Examples of NP-complete problems:**

- Boolean satisfiability (SAT)
- Travelling Salesman Problem (decision version)
- Graph colouring
- Knapsack problem
- Subset sum

**Implication:** If **any** NP-complete problem is in P, then $\text{P} = \text{NP}$.

### Examples of Problems in P

| Problem                  | Complexity          |
| ------------------------ | ------------------- |
| Sorting                  | $O(n \log n)$       |
| Shortest path (Dijkstra) | $O((V+E)\log V)$    |
| MST (Kruskal/Prim)       | $O(E \log V)$       |
| String matching          | $O(nm)$ or $O(n+m)$ |
| 2-SAT                    | $O(n + m)$          |

### Examples of Problems in NP (not known to be in P)

| Problem           | Verification                 |
| ----------------- | ---------------------------- |
| SAT               | Verify assignment in $O(n)$  |
| TSP (decision)    | Verify tour length in $O(n)$ |
| Sudoku (n×n)      | Verify solution in $O(n^2)$  |
| Graph 3-colouring | Verify colouring in $O(V+E)$ |

---

## Problem Set

**Problem 1.** Design a DFA that accepts all binary strings containing an even number of 0s. Give
the formal definition and draw the transition table.

<details>
<summary>Answer</summary>

$M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q = \{q_0, q_1\}$ ($q_0$ = even 0s seen, $q_1$ = odd 0s seen)
- $\Sigma = \{0, 1\}$
- $q_0$ is start state
- $F = \{q_0\}$ (accept when even number of 0s)

|         | 0     | 1     |
| ------- | ----- | ----- |
| → $q_0$ | $q_1$ | $q_0$ |
| $q_1$   | $q_0$ | $q_1$ |

Trace "110": $q_0 \to q_0 \to q_0 \to q_0$. Accept (0 zeros, even). ✓ Trace "101":
$q_0 \to q_0 \to q_1 \to q_1$. Reject (1 zero, odd). ✓

</details>

**Problem 2.** Convert the following NFA to a DFA using the subset construction.

NFA: States $\{0, 1, 2\}$, alphabet $\{a, b\}$, start state 0, accepting state 2.

| From | Input | To     |
| ---- | ----- | ------ |
| 0    | a     | {0, 1} |
| 0    | b     | {0}    |
| 1    | a     | ∅      |
| 1    | b     | {2}    |
| 2    | a     | ∅      |
| 2    | b     | ∅      |

<details>
<summary>Answer</summary>

DFA states (subsets of {0, 1, 2}):

Start: $\{0\}$

From $\{0\}$: a → {0, 1}, b → {0} From $\{0, 1\}$: a → δ(0,a) ∪ δ(1,a) = {0,1} ∪ ∅ = {0,1}; b →
δ(0,b) ∪ δ(1,b) = {0} ∪ {2} = {0,2} From $\{0, 2\}$: a → δ(0,a) ∪ δ(2,a) = {0,1} ∪ ∅ = {0,1}; b →
δ(0,b) ∪ δ(2,b) = {0} ∪ ∅ = {0} From ∅: a → ∅, b → ∅

Accepting states: any subset containing 2 → $\{0, 2\}$.

| DFA State   | a           | b           | Accept? |
| ----------- | ----------- | ----------- | ------- |
| → $\{0\}$   | $\{0,1\}$   | $\{0\}$     | No      |
| $\{0,1\}$   | $\{0,1\}$   | $\{0,2\}$   | No      |
| $\{0,2\}$   | $\{0,1\}$   | $\{0\}$     | Yes     |
| $\emptyset$ | $\emptyset$ | $\emptyset$ | No      |

</details>

**Problem 3.** Write a regular expression for the language of all binary strings that do NOT contain
the substring "11".

<details>
<summary>Answer</summary>

Any such string is a sequence of blocks, where each block is either `0`, `10`, or `1` (but the last
`1` must not be followed by another `1`).

Regular expression: `(0|10)*(1|ε)`

Explanation:

- `(0|10)*` matches zero or more blocks of "0" or "10" (each 1 is followed by 0)
- `(1|ε)` allows an optional trailing 1 (not followed by another 1)

Verification:

- "" → matches `(1|ε)` with ε. ✓
- "0" → matches `(0|10)*(1|ε)` with "0" and ε. ✓
- "1" → matches `(0|10)*(1|ε)` with empty and "1". ✓
- "10" → matches with "10" and ε. ✓
- "0101" → matches with "0", "10", "1"... wait: "0101" = "0" + "10" + "1". ✓
- "11" → cannot match (no way to have two consecutive 1s). ✓

</details>

**Problem 4.** Use the Pumping Lemma to prove that $L = \{ww \mid w \in \{0,1\}^*\}$ is not regular.

<details>
<summary>Answer</summary>

Assume $L$ is regular. Let $p$ be the pumping length. Choose $s = 0^p 1 0^p 1$ (this is $w = 0^p1$,
$ww = 0^p10^p1$). Note $|s| = 2p + 2 \geq p$. ✓

By the Pumping Lemma, $s = xyz$ with $|xy| \leq p$ and $|y| \geq 1$.

Since $|xy| \leq p$, $y$ consists entirely of 0s from the first half. Say $y = 0^k$ where
$1 \leq k \leq p$.

Pump with $i = 0$: $xz = 0^{p-k}10^p1$.

Is this in $L$? It would need to be $ww$ for some $w$. The length is $2p - k + 2$, which is odd when
$k$ is odd, so it cannot be $ww$ (which always has even length). But even when $k$ is even, the
first half is $0^{(p-k/2)+1}$... actually, for $xz = 0^{p-k}10^p1$ to be in $L = \{ww\}$, we need
the first half to equal the second half. The total length is $2p + 2 - k$. The first half is the
first $p + 1 - k/2$ characters: $0^{p-k}1$. The second half is: $0^{k/2}0^p1 = 0^{p+k/2}1$. For
these to be equal, $p-k = p+k/2$, giving $k = -k/2$, so $k = 0$. But $k \geq 1$. Contradiction. ✓

Therefore, $L$ is not regular. $\square$

</details>

**Problem 5.** Describe a Turing machine that decides whether a binary string is a palindrome (reads
the same forwards and backwards).

<details>
<summary>Answer</summary>

**Algorithm:**

1. Read the leftmost symbol, remember it
2. Move right to the rightmost non-blank symbol
3. Compare: if they differ, reject; if same, replace both with blank
4. Repeat until the tape is empty or one symbol remains
5. Accept

**States:**

- $q_0$: Start. Read leftmost symbol.
- $q_a$: Saw `0`, going right to find rightmost
- $q_b$: Saw `1`, going right to find rightmost
- $q_{check0}$: At rightmost, check if it's `0`
- $q_{check1}$: At rightmost, check if it's `1`
- $q_{return}$: Going left to find leftmost
- $q_{accept}$: Accept
- $q_{reject}$: Reject

**Key transitions:**

- $q_0$ reads `0`: write blank, go right → $q_a$
- $q_0$ reads `1`: write blank, go right → $q_b$
- $q_0$ reads blank: accept (empty string is palindrome)
- $q_a$ reads `0` or `1`: move right
- $q_a$ reads blank: move left → $q_{check0}$
- $q_{check0}$ reads `0`: write blank, move left → $q_{return}$ (match!)
- $q_{check0}$ reads `1`: reject (mismatch!)
- $q_{return}$ reads `0`, `1`: move left
- $q_{return}$ reads blank: move right → $q_0$

This TM halts on all inputs (always reaches accept or reject), so the language of palindromes is
**decidable**. ✓

</details>

**Problem 6.** Prove that if the halting problem were decidable, then every semi-decidable language
would be decidable.

<details>
<summary>Answer</summary>

**Proof.** Let $L$ be a semi-decidable language. There exists a TM $M_L$ that accepts $w$ if
$w \in L$ and loops forever if $w \notin L$.

If the halting problem were decidable, we could build a TM $M$ that decides $L$:

1. On input $w$, run the halting decider $H$ on $(M_L, w)$
2. If $H$ says $M_L$ halts on $w$: $M_L$ will accept (since it only halts on members of $L$), so run
   $M_L$ on $w$ and accept
3. If $H$ says $M_L$ doesn't halt on $w$: reject (since $w \notin L$)

This TM $M$ always halts and correctly decides $L$. Since $L$ was arbitrary, every semi-decidable
language would be decidable.

But we know the halting problem is undecidable, so there must exist semi-decidable languages that
are not decidable (e.g., the halting problem itself). $\square$

</details>

**Problem 7.** Explain the difference between a decidable problem and a semi-decidable problem. Give
an example of each.

<details>
<summary>Answer</summary>

**Decidable:** There exists a TM that halts on ALL inputs and correctly answers yes/no.

- Example: "Given a DFA $M$ and a string $w$, does $M$ accept $w$?" — simulate $M$ on $w$; it always
  halts.

**Semi-decidable (recursively enumerable):** There exists a TM that halts and accepts on
yes-instances, but may loop forever on no-instances.

- Example: "Given a TM $M$ and input $w$, does $M$ halt on $w$?" — run $M$ on $w$; if it halts,
  accept. But if $M$ doesn't halt, our verifier loops forever.

**Key difference:** For semi-decidable problems, you can verify a "yes" answer in finite time, but
you cannot always verify a "no" answer (the machine might just be taking a long time, or it might
loop forever).

</details>

**Problem 8.** Is the complement of the halting problem semi-decidable? Explain.

<details>
<summary>Answer</summary>

No. The complement of the halting problem is **not** semi-decidable.

**Proof.** If both a language $L$ and its complement $\overline{L}$ were semi-decidable, then $L$
would be decidable (run both semi-decidable machines in parallel; one must eventually halt, giving
the answer).

The halting problem is semi-decidable (run the TM and accept when it halts). If its complement were
also semi-decidable, the halting problem would be decidable — but we proved it's not. Therefore, the
complement of the halting problem is not semi-decidable. $\square$

</details>

**Problem 9.** Explain why the Travelling Salesman Problem (decision version: "Is there a tour of
length ≤ k?") is in NP.

<details>
<summary>Answer</summary>

The TSP decision problem is in NP because a proposed solution (a tour) can be **verified** in
polynomial time:

**Certificate:** A permutation of the $n$ cities (the proposed tour).

**Verification algorithm:**

1. Check that the certificate is a valid permutation of all $n$ cities — $O(n)$
2. Sum the distances between consecutive cities (and from last back to first) — $O(n)$
3. Compare the total to $k$ — $O(1)$

Total verification time: $O(n)$, which is polynomial. Therefore, TSP is in NP. ✓

(Note: this does NOT mean TSP is in P. Verification is polynomial, but finding the tour may not be.)

</details>

**Problem 10.** State the Church-Turing thesis. Explain why it is a thesis and not a theorem. What
would it mean if it were false?

<details>
<summary>Answer</summary>

**Church-Turing Thesis:** Every function that is effectively computable (can be computed by an
algorithm) is computable by a Turing machine.

**Why it's a thesis, not a theorem:** "Effectively computable" is an informal, intuitive concept —
it refers to any step-by-step procedure that a human could follow with pen and paper (or a computer
could execute). Since this is not a mathematically precise definition, we cannot formally prove that
Turing machines capture all of "computation." However, every reasonable model of computation
proposed (lambda calculus, μ-recursive functions, register machines, modern programming languages)
has been shown to be equivalent to Turing machines, providing overwhelming evidence for the thesis.

**If it were false:** There would exist an effectively computable function that no Turing machine
could compute. This would mean our entire understanding of computation is fundamentally incomplete —
there would be a type of computation that our current theoretical models cannot capture. It would
revolutionise computer science and mathematics, as it would imply the existence of a "super-Turing"
model of computation.

For revision on algorithms and complexity, see
[Complexity Analysis](/docs/docs_ALevel-notes/computer-science/algorithms/complexity-analysis).

</details>

:::
