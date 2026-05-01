---
title: Theory of Computation
description:
  University-level notes on Theory of Computation: 1. Introduction; 1.1 Why
  Theory Matters; 1.2 Alphabets, Strings, and Languages.
date: 2026-04-24T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: theory-of-computation
---

## 1. Introduction

### 1.1 Why Theory Matters

The theory of computation provides the mathematical foundations for computer science. It answers
fundamental questions: What can be computed? What cannot? How efficiently? These answers guide the
design of algorithms, programming languages, compilers, and hardware.

### 1.2 Alphabets, Strings, and Languages

An **alphabet** $\Sigma$ is a finite, non-empty set of symbols (e.g., $\Sigma = \{0, 1\}$).

A **string** (or word) over $\Sigma$ is a finite sequence of symbols from $\Sigma$. The empty string
is denoted $\varepsilon$.

**Notation:**

- $\Sigma^*$: The set of all strings over $\Sigma$ (including $\varepsilon$).
- $\Sigma^+$: The set of all non-empty strings over $\Sigma$.
- $|w|$: The length of string $w$. $|\varepsilon| = 0$.
- $w^R$: The reversal of $w$.
- $\Sigma^n$: Strings of length $n$ over $\Sigma$.

A **language** $L$ over $\Sigma$ is any subset of $\Sigma^*$. The empty language is $\emptyset$
(distinct from $\{\varepsilon\}$, which contains one string).

**Operations on languages:**

- Union: $L_1 \cup L_2 = \{w : w \in L_1 \mathrm{ or } w \in L_2\}$.
- Intersection: $L_1 \cap L_2 = \{w : w \in L_1 \mathrm{ and } w \in L_2\}$.
- Concatenation: $L_1 \cdot L_2 = \{w_1 w_2 : w_1 \in L_1, w_2 \in L_2\}$.
- Kleene star: $L^* = \{\varepsilon\} \cup L \cup L^2 \cup \cdots$.
- Complement: $\overline{L} = \Sigma^* \setminus L$.

### 1.3 Examples of Formal Languages

Formal languages arise naturally throughout computer science. Here are representative examples
organised by complexity class.

**Finite languages** (always regular):

- $L_1 = \{\mathrm{true}, \mathrm{false}\}$ — the set of Boolean literals.
- $L_2 = \{w \in \{0,1\}^* : |w| \leq 3\}$ — all binary strings of length at most 3.

**Regular languages** (decidable by finite automata):

- $L_3 = \{w \in \{0,1\}^* : w \mathrm{ contains the substring } 101\}$.
- $L_4 = \{w \in \{0,1\}^* : w \mathrm{ has an even number of } 1\mathrm{s}\}$.
- $L_5 = \{w \in \{0,1\}^* : w \mathrm{ interpreted in binary is divisible by } 3\}$.

**Context-free but not regular:**

- $L_6 = \{a^n b^n : n \geq 0\}$ — matching counts of two symbols.
- $L_7 = \{w w^R : w \in \{0,1\}^*\}$ — even-length palindromes.
- $L_8 = \{w \in \{a,b,c\}^* : n_a(w) = n_b(w)\}$ — equal numbers of `a`s and `b`s.

**Decidable but not context-free:**

- $L_9 = \{a^n b^n c^n : n \geq 0\}$.
- $L_{10} = \{\langle G \rangle : G \mathrm{ is a connected undirected graph}\}$.

**Undecidable (Turing-recognisable):**

- $A_{\mathrm{TM}} = \{\langle M, w \rangle : M \mathrm{ accepts } w\}$ — the acceptance problem.
- $\mathrm{HALT}_{\mathrm{TM}} = \{\langle M, w \rangle : M \mathrm{ halts on } w\}$.

**Not even Turing-recognisable:**

- $\overline{A_{\mathrm{TM}}}$ — the complement of the acceptance problem.

This hierarchy illustrates the central theme of the course: as we move to more expressive language
classes, the corresponding machines become more powerful, but certain properties (decidability,
closure under complement) may be lost.

### 1.4 Countability and Cardinality

An important foundational observation is that the set of all languages over $\Sigma$ is
**uncountable**, while the set of all Turing machines (and hence the set of all decidable
languages) is **countable**.

**Theorem 1.1.** The set of all languages over a non-empty alphabet $\Sigma$ is uncountable.

*Proof.* The set $\Sigma^*$ is countable (enumerate strings by length, then lexicographically).
The set of all languages is $\mathcal{P}(\Sigma^*)$, which is uncountable by Cantor's theorem
(since $|\mathcal{P}(S)| \gt{} |S|$ for any set $S$). $\blacksquare$

**Theorem 1.2.** The set of all Turing machines is countable.

*Proof.* Each TM has a finite description (its states, alphabet, and transition function). Encode
this as a string over a finite alphabet. The set of all finite strings is countable. $\blacksquare$

**Corollary 1.3.** There exist languages that are not Turing-recognisable (in fact, uncountably
many such languages).

This follows because there are uncountably many languages but only countably many TMs. The set
of Turing-recognisable languages is a countable subset of the uncountable set of all languages.

**Cantor's diagonalisation.** The classic proof of Theorem 1.1 uses diagonalisation: assume the
set of all languages is countable, list them as $L_1, L_2, L_3, \ldots$, and construct a language
$D$ that differs from each $L_i$ on the $i$-th string. Then $D$ is not in the list — contradiction.
This technique reappears in the proof of undecidability of $A_{\mathrm{TM}}$ (Section 5.2).

## 2. Regular Languages

### 2.1 Finite Automata

A **deterministic finite automaton (DFA)** is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet.
- $\delta : Q \times \Sigma \to Q$ is the transition function.
- $q_0 \in Q$ is the start state.
- $F \subseteq Q$ is the set of accepting (final) states.

$M$ accepts a string $w = w_1 w_2 \cdots w_n$ if the sequence of states
$q_0, \delta(q_0, w_1), \delta(\delta(q_0, w_1), w_2), \ldots$ ends in a state in $F$.

**Example.** DFA for strings over $\{0, 1\}$ containing the substring `01`:

$$M = (\{q_0, q_1, q_2\}, \{0, 1\}, \delta, q_0, \{q_2\})$$

| State | $\delta(\cdot, 0)$ | $\delta(\cdot, 1)$ |
| ----- | ------------------ | ------------------ |
| $q_0$ | $q_1$              | $q_0$              |
| $q_1$ | $q_1$              | $q_2$              |
| $q_2$ | $q_2$              | $q_2$              |

A **nondeterministic finite automaton (NFA)** allows multiple transitions from a state on the same
symbol, and $\varepsilon$-transitions (transitions without consuming input). Formally,
$\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.

$M$ accepts $w$ if there exists some path of transitions consuming $w$ that ends in a state in $F$.

<details>
<summary>Worked Example: DFA for binary numbers divisible by 3</summary>

Design a DFA over $\Sigma = \{0, 1\}$ that accepts exactly those strings (interpreted as binary
numbers, most significant bit first) that are divisible by 3.

We track the value of the number read so far, modulo 3. After reading prefix $x$, let $r = x \bmod 3$.
Reading a new bit $b$ appends $b$ to the right: the new value is $2r + b \bmod 3$.

States: $q_0$ (remainder 0), $q_1$ (remainder 1), $q_2$ (remainder 2). Start state: $q_0$
(the empty prefix has value 0). Accept state: $q_0$.

$$M = (\{q_0, q_1, q_2\}, \{0, 1\}, \delta, q_0, \{q_0\})$$

| State | $\delta(\cdot, 0)$ | $\delta(\cdot, 1)$ |
| ----- | ------------------ | ------------------ |
| $q_0$ | $q_0$              | $q_1$              |
| $q_1$ | $q_2$              | $q_0$              |
| $q_2$ | $q_1$              | $q_2$              |

*Correctness.* By induction on input length. Base: $x = \varepsilon$, $\mathrm{val}(\varepsilon) = 0$,
DFA is in $q_0$. Step: if after $x$ the DFA is in $q_r$ (where $r = \mathrm{val}(x) \bmod 3$),
then reading $b$ moves to $q_{(2r+b) \bmod 3}$, which equals $q_{\mathrm{val}(xb) \bmod 3}$.
$\blacksquare$

</details>

<details>
<summary>Worked Example: NFA for strings ending in `01`</summary>

Construct an NFA over $\{0, 1\}$ that accepts strings ending in the substring `01`.

States: $q_0$ (start), $q_1$ (have seen a `0`), $q_2$ (accept, have seen `01`).

| State | $\delta(\cdot, 0)$ | $\delta(\cdot, 1)$ |
| ----- | ------------------ | ------------------ |
| $q_0$ | $\{q_0, q_1\}$    | $\{q_0\}$         |
| $q_1$ | $\emptyset$        | $\{q_2\}$         |
| $q_2$ | $\{q_1\}$          | $\emptyset$        |

Accept: $\{q_2\}$. The NFA is nondeterministic because from $q_0$ on input `0`, it can either stay
in $q_0$ or move to $q_1$.

</details>

### 2.2 Equivalence of DFA and NFA

**Theorem 2.1.** For every NFA $N$, there exists a DFA $D$ such that $L(N) = L(D)$.

*Proof (subset construction).* Given NFA $N = (Q, \Sigma, \delta, q_0, F)$, construct DFA
$D = (Q', \Sigma, \delta', q_0', F')$ where:

- $Q' = \mathcal{P}(Q)$ (each state of $D$ is a subset of states of $N$).
- $q_0' = \varepsilon\mathrm{-closure}(\{q_0\})$.
- $\delta'(S, a) = \varepsilon\mathrm{-closure}(\bigcup_{q \in S} \delta(q, a))$ for $S \subseteq Q$,
  $a \in \Sigma$.
- $F' = \{S \subseteq Q : S \cap F \neq \emptyset\}$.

Every string accepted by $N$ has some path through $N$'s states. The subset construction tracks **all**
possible states $N$ could be in after reading each symbol. $D$ accepts exactly when at least one
possibility in $N$ leads to acceptance. $\blacksquare$

**Corollary 2.2.** NFA, DFA, and NFA with $\varepsilon$-transitions all recognise exactly the class of
regular languages.

<details>
<summary>Worked Example: Subset construction (NFA to DFA)</summary>

Convert the NFA from the "strings ending in `01`" example to a DFA via the subset construction.

NFA states: $\{q_0, q_1, q_2\}$, $\Sigma = \{0, 1\}$, $F = \{q_2\}$, no $\varepsilon$-transitions.

Start state: $\{q_0\}$.

| DFA State     | $\delta'(\cdot, 0)$ | $\delta'(\cdot, 1)$ | Accept? |
| ------------- | ------------------- | ------------------- | ------- |
| $\{q_0\}$     | $\{q_0, q_1\}$     | $\{q_0\}$          | No      |
| $\{q_0, q_1\}$| $\{q_0, q_1\}$     | $\{q_0, q_2\}$     | No      |
| $\{q_0, q_2\}$| $\{q_0, q_1\}$     | $\{q_0\}$          | Yes     |

The DFA has 3 reachable states. $\{q_1\}$, $\{q_2\}$, and $\{q_1, q_2\}$ are unreachable.

</details>

### 2.3 Regular Expressions

**Definition.** Regular expressions over $\Sigma$ are defined inductively:

1. $\emptyset$ (empty set), $\varepsilon$ (empty string), and $a$ for each $a \in \Sigma$ are regex.
2. If $R_1$ and $R_2$ are regex, then $(R_1 \cup R_2)$, $(R_1 \cdot R_2)$, and $(R_1^*)$ are regex.
3. Nothing else is a regex.

**Shorthand:** $R^+$ means $R \cdot R^*$. $R?$ means $(R \cup \varepsilon)$.

**Examples:**

- $(0 \cup 1)^* 00 (0 \cup 1)^*$: strings containing `00`.
- $1^* 01^* 01^*$: strings with exactly two `0`s.
- $(0 \cup 1)^*$: all strings over $\{0, 1\}$.
- $\emptyset$: the empty language.

**Regex identities.** The following algebraic laws hold for regular expressions and can be used
to simplify or reason about them:

| Identity | Description |
| -------- | ----------- |
| $\emptyset \cdot R = R \cdot \emptyset = \emptyset$ | Annihilator for concatenation |
| $\varepsilon \cdot R = R \cdot \varepsilon = R$ | Identity for concatenation |
| $\emptyset \cup R = R \cup \emptyset = R$ | Identity for union |
| $\emptyset^* = \varepsilon$ | Kleene star of empty set |
| $\varepsilon^* = \varepsilon$ | Kleene star of empty string |
| $(R^*)^* = R^*$ | Idempotence of Kleene star |
| $R \cdot (S \cdot T) = (R \cdot S) \cdot T$ | Associativity of concatenation |
| $R \cup S = S \cup R$ | Commutativity of union |
| $R \cup (S \cup T) = (R \cup S) \cup T$ | Associativity of union |
| $R \cup R = R$ | Idempotence of union |
| $R(S \cup T) = RS \cup RT$ | Distributivity |

These identities can be used to prove that two regex describe the same language, analogous to
simplifying algebraic expressions. Two regex $R_1$ and $R_2$ are equivalent (written $R_1 \equiv R_2$)
if $L(R_1) = L(R_2)$.

### 2.4 Equivalence of Regular Expressions and Finite Automata

**Theorem 2.3 (Kleene).** A language is regular if and only if it is described by some regular
expression.

*Proof (sketch).*

**Regex to NFA:** Induction on the structure of the regex.

- Base cases: $\emptyset$, $\varepsilon$, $a$ each have trivial NFAs.
- Union: Combine two NFAs with a new start state and $\varepsilon$-transitions to each.
- Concatenation: Connect the accept states of the first NFA to the start state of the second via
  $\varepsilon$-transitions.
- Kleene star: Add $\varepsilon$-transitions from a new start state to the NFA's start and from the
  NFA's accept states back to the start state.

**NFA to regex:** State elimination. Systematically eliminate states of the NFA one at a time,
updating the transition labels (which are regex) between remaining states. The final label from start
to accept is the equivalent regex. $\blacksquare$

**Thompson's construction.** The regex-to-NFA translation can be made fully explicit. For each
sub-expression of the regex, we build a small NFA fragment with exactly one entry and one exit
state, connected by $\varepsilon$-transitions. The construction guarantees that the NFA has at most
one accept state, no transitions into the start state, and no transitions out of the accept state.

**Theorem 2.3a (Thompson's construction correctness).** For every regular expression $R$ over
$\Sigma$, Thompson's construction produces an NFA $N_R$ with $L(N_R) = L(R)$, and $N_R$ has $O(|R|)$
states and transitions.

*Proof.* By structural induction on $R$.

- **Base cases:**
  - $R = \emptyset$: $N_R$ has a start state and an accept state with no transitions. $L(N_R) = \emptyset = L(\emptyset)$.
  - $R = \varepsilon$: $N_R$ has a start state, an accept state, and an $\varepsilon$-transition between them. $L(N_R) = \{\varepsilon\} = L(\varepsilon)$.
  - $R = a$ for $a \in \Sigma$: $N_R$ has a start state, an accept state, and a transition on $a$. $L(N_R) = \{a\} = L(a)$.

- **Inductive cases:**
  - $R = R_1 \cup R_2$: By IH, $L(N_{R_1}) = L(R_1)$ and $L(N_{R_2}) = L(R_2)$. Thompson adds a new start $s$ and accept $f$ with $\varepsilon$-transitions to the start states of $N_{R_1}$ and $N_{R_2}$, and $\varepsilon$-transitions from their accept states to $f$. Any accepting path goes through exactly one sub-NFA, so $L(N_R) = L(R_1) \cup L(R_2) = L(R)$.
  - $R = R_1 \cdot R_2$: Thompson connects the accept state of $N_{R_1}$ to the start state of $N_{R_2}$ via $\varepsilon$-transitions. A string $w \in L(N_R)$ iff $w = w_1 w_2$ where $w_1 \in L(N_{R_1})$ and $w_2 \in L(N_{R_2})$, i.e., $w \in L(R_1) \cdot L(R_2) = L(R)$.
  - $R = R_1^*$: Thompson adds a new start $s$ and accept $f$, with $\varepsilon$-transitions from $s$ to $f$ (allowing zero repetitions) and from $s$ to the start of $N_{R_1}$, and from the accept of $N_{R_1}$ back to $s$. Any accepting path corresponds to zero or more traversals of $N_{R_1}$, so $L(N_R) = L(R_1)^* = L(R)$.

In all cases, the number of states added is a constant per operator, so $|N_R| = O(|R|)$. $\blacksquare$

### 2.5 DFA Minimisation and the Myhill-Nerode Theorem

**Theorem 2.4 (Myhill-Nerode).** The following are equivalent for a language $L$:

1. $L$ is regular.
2. The Myhill-Nerode equivalence relation has finitely many equivalence classes.
3. $L$ is the union of some of the equivalence classes.

**Definition.** Two strings $x, y$ are **distinguishable** with respect to $L$ if there exists $z$
such that exactly one of $xz, yz$ is in $L$. The **Myhill-Nerode equivalence** $\equiv_L$ is:
$x \equiv_L y$ iff $x$ and $y$ are not distinguishable.

*Proof of Theorem 2.4.*

**(1) $\Rightarrow$ (2):** Let $D = (Q, \Sigma, \delta, q_0, F)$ be a DFA for $L$. Define
$x \sim y$ iff $\delta^*(q_0, x) = \delta^*(q_0, y)$ (i.e., $D$ reaches the same state on $x$ and $y$).
Then $\sim$ has at most $|Q|$ equivalence classes. We show $\sim = \equiv_L$. If $x \sim y$, then for
all $z$, $\delta^*(q_0, xz) = \delta^*(q_0, yz)$, so $xz \in L$ iff $yz \in L$, meaning
$x \equiv_L y$. Conversely, if $x \not\equiv_L y$, there exists $z$ with $xz \in L$ and $yz \notin L$
(or vice versa), so $\delta^*(q_0, xz) \neq \delta^*(q_0, yz)$, hence $x \not\sim y$.

**(2) $\Rightarrow$ (3):** Trivial, since $L$ consists of all strings whose equivalence class is one
that contains at least one string in $L$.

**(3) $\Rightarrow$ (1):** Suppose $\equiv_L$ has finitely many equivalence classes $C_1, \ldots, C_k$.
Construct a DFA with one state per equivalence class, start state $[x]_{\equiv_L}$ for $x = \varepsilon$,
transition $\delta'([x], a) = [xa]$, and accept states = those classes contained in $L$. This DFA is
well-defined because $\equiv_L$ is a right congruence: if $x \equiv_L y$, then $xa \equiv_L ya$ for all
$a \in \Sigma$. $\blacksquare$

<details>
<summary>Worked Example: Myhill-Nerode classes for $L = \{0^n 1^n : n \geq 0\}$</summary>

We show $L$ is not regular by exhibiting infinitely many pairwise distinguishable strings.

Claim: the strings $0^0, 0^1, 0^2, 0^3, \ldots$ are pairwise distinguishable with respect to $L$.

*Proof.* For $i \neq j$ with $i \lt{} j$, consider the suffix $z = 1^i$. Then:
- $0^i \cdot 1^i = 0^i 1^i \in L$.
- $0^j \cdot 1^i = 0^j 1^i \notin L$ (since $j \gt{} i$).

Therefore $0^i \not\equiv_L 0^j$. Since there are infinitely many such strings, $\equiv_L$ has
infinitely many equivalence classes, so $L$ is not regular by the Myhill-Nerode theorem. $\blacksquare$

This proof technique is often cleaner than the pumping lemma, as it avoids case analysis over
decompositions.

</details>

**Corollary 2.5.** The minimum-state DFA for $L$ has exactly as many states as there are
equivalence classes of $\equiv_L$.

**Minimisation algorithm:**

```
1. Start with two partitions: F (accepting states) and Q \ F (non-accepting).
2. Repeatedly refine: for each pair (p, q) in the same partition,
   if delta(p, a) and delta(q, a) are in different partitions for some a,
   split p and q into different partitions.
3. Repeat until no further splitting occurs.
4. Each partition becomes a state in the minimised DFA.
```

This algorithm runs in $O(n^2 k)$ time where $n$ is the number of states and $k = |\Sigma|$.

### 2.6 Pumping Lemma for Regular Languages

**Theorem 2.6 (Pumping Lemma).** If $L$ is regular, then there exists a constant $p$ (the pumping
length) such that for every string $w \in L$ with $|w| \geq p$, $w$ can be decomposed as
$w = xyz$ satisfying:

1. $|y| \gt{} 0$ (the pumped part is non-empty).
2. $|xy| \leq p$ (the pumpable part is within the first $p$ symbols).
3. $xy^iz \in L$ for all $i \geq 0$.

*Proof.* Let $D$ be a DFA for $L$ with $n$ states. Set $p = n$. For any string $w$ of length $\geq n$,
the path through $D$ visits at least $n + 1$ states, so by the pigeonhole principle, some state is
visited twice within the first $p$ symbols. The substring $y$ between the two visits can be repeated
or removed ($xy^iz$) without affecting acceptance. $\blacksquare$

**Using the pumping lemma to prove non-regularity.** To show $L$ is not regular, assume it is, let $p$
be the pumping length, and exhibit a string $w \in L$ with $|w| \geq p$ such that **every**
decomposition $w = xyz$ satisfying (1) and (2) has some $i$ with $xy^iz \notin L$.

**Example.** $L = \{0^n 1^n : n \geq 0\}$ is not regular.

*Proof.* Assume $L$ is regular with pumping length $p$. Let $w = 0^p 1^p \in L$.
By (2), $|xy| \leq p$, so $y$ consists only of `0`s. Let $|y| = k \gt{} 0$.
Then $xy^0 z = 0^{p-k} 1^p \notin L$ (since $p - k \neq p$). Contradiction. $\blacksquare$

**Example.** $L = \{ww : w \in \{0,1\}^*\}$ is not regular.

*Proof.* Assume pumping length $p$. Let $w = 0^p 1 0^p 1 \in L$. Since $|xy| \leq p$, $y = 0^k$ for
some $k \gt{} 0$. Then $xy^0 z = 0^{p-k} 1 0^p 1 \notin L$ (the two halves have different lengths).
$\blacksquare$

**Example.** $L = \{0^n 1^m : n \neq m\}$ is not regular.

*Proof.* Assume $L$ is regular with pumping length $p$. Since regular languages are closed under
complement, $\overline{L} = \{0^n 1^m : n = m\} \cup \{w : w \notin 0^* 1^*\}$ would also be regular.
Then $\overline{L} \cap 0^* 1^* = \{0^n 1^n : n \geq 0\}$ would be regular (since $0^* 1^*$ is regular
and regular languages are closed under intersection). But $\{0^n 1^n : n \geq 0\}$ is not regular —
contradiction. $\blacksquare$

<details>
<summary>Worked Example: Proving $\{w : n_0(w) = n_1(w)\}$ is not regular</summary>

Let $L = \{w \in \{0,1\}^* : n_0(w) = n_1(w)\}$.

*Proof.* Assume $L$ is regular with pumping length $p$. Let $w = 0^p 1^p \in L$.
By (2), $|xy| \leq p$, so $y = 0^k$ for some $k \geq 1$.
Then $xy^0z = 0^{p-k}1^p$, which has $p - k$ zeros and $p$ ones. Since $k \geq 1$,
$p - k \neq p$, so $xy^0z \notin L$. Contradiction. $\blacksquare$

</details>

<details>
<summary>Worked Example: $L = \{a^{n!} : n \geq 0\}$ is not regular</summary>

*Proof.* Assume pumping length $p$. Let $w = a^{p!} \in L$ with $|w| = p! \geq p$.
By (2), $|xy| \leq p$, so $y = a^k$ for some $1 \leq k \leq p$.
Choose $i = (p! + k) / k = p!/k + 1$ (an integer since $k \leq p$). Then
$xy^iz = a^{p! + (i-1)k} = a^{p! + p!} = a^{2 \cdot p!}$.
But $2 \cdot p!$ is not a factorial for $p \geq 2$ (since $(p+1)! / (p!)^2 = (p+1)/p! \lt{} 1$ for $p \geq 3$,
and $2 \cdot 2! = 4 \neq n!$ for any $n$). Hence $xy^iz \notin L$. $\blacksquare$

</details>

:::caution Common Pitfall
The pumping lemma says that **for every** decomposition satisfying (1) and (2), **there exists** a
pumping that fails. To prove non-regularity, you must show that **all** valid decompositions lead
to a contradiction. A single decomposition that works is insufficient to disprove the lemma.
The converse of the pumping lemma is false: if a language satisfies the pumping condition, it is
not necessarily regular.
:::

### 2.7 Closure Properties of Regular Languages

Regular languages are closed under:

| Operation          | Proof technique                        |
| ------------------ | -------------------------------------- |
| Union              | NFA union construction                 |
| Intersection       | DFA product construction               |
| Complement         | Swap accepting and non-accepting states|
| Concatenation      | NFA concatenation construction         |
| Kleene star        | NFA star construction                  |
| Reversal           | Reverse all transitions, swap start/F  |
| Difference         | $A \cap \overline{B}$                  |
| Homomorphism       | Apply the homomorphism to each symbol  |
| Inverse homomorphism| Pre-image construction                 |

**Theorem 2.7 (Intersection via product construction).** If $L_1$ and $L_2$ are regular, then
$L_1 \cap L_2$ is regular.

*Proof.* Let $D_1 = (Q_1, \Sigma, \delta_1, q_1, F_1)$ and $D_2 = (Q_2, \Sigma, \delta_2, q_2, F_2)$.
Construct $D = (Q_1 \times Q_2, \Sigma, \delta, (q_1, q_2), F_1 \times F_2)$ where
$\delta((r_1, r_2), a) = (\delta_1(r_1, a), \delta_2(r_2, a))$. Then $D$ accepts $w$ iff both
$D_1$ and $D_2$ accept $w$, i.e., $w \in L_1 \cap L_2$. $\blacksquare$

**Theorem 2.7.** If $L_1$ is regular and $L_2$ is not regular, then $L_1 \cap L_2$ may or may not be
regular. Closure properties do not apply when one operand is non-regular.

## 3. Context-Free Languages

### 3.1 Context-Free Grammars

A **context-free grammar (CFG)** is a 4-tuple $G = (V, \Sigma, R, S)$ where:

- $V$ is a finite set of variables (non-terminals).
- $\Sigma$ is a finite set of terminals.
- $R \subseteq V \times (V \cup \Sigma)^*$ is a finite set of production rules.
- $S \in V$ is the start variable.

A production $A \to \alpha$ means variable $A$ can be replaced by string $\alpha$.

**Example.** CFG for $L = \{a^n b^n : n \geq 0\}$:

$$S \to aSb \mid \varepsilon$$

**Example.** CFG for balanced parentheses:

$$S \to (S) \mid SS \mid \varepsilon$$

**Example.** CFG for $\{w \in \{0,1\}^* : w = w^R\}$ (palindromes):

$$S \to 0S0 \mid 1S1 \mid 0 \mid 1 \mid \varepsilon$$

**Example.** CFG for $L = \{a^i b^j c^k : i = j + k\}$:

$$S \to aSb \mid T, \quad T \to aTc \mid \varepsilon$$

The variable $S$ generates the $a^i b^i$ part, and $T$ generates the $a^k c^k$ part. Since
$S \Rightarrow^* a^i S b^i \Rightarrow a^i T b^i \Rightarrow^* a^{i+k} c^k b^i$, the total number
of `b`s and `c`s equals the total number of `a`s.

**Example.** CFG for strings with equal numbers of `0`s and `1`s:

$$S \to 0S1 \mid 1S0 \mid SS \mid \varepsilon$$

The first two rules add a matched pair (in either order); the third concatenates two balanced
strings; the fourth handles the empty string.

**Example.** CFG for the language of all strings over $\{a, b\}$ that are **not** palindromes:

$$S \to aAb \mid bAa \mid aSa \mid bSb \mid a \mid b, \quad A \to aAa \mid aAb \mid bAa \mid bAb \mid a \mid b$$

Here $S$ generates non-palindromes and $A$ generates arbitrary strings of length $\geq 1$.

<details>
<summary>Worked Example: CFG for $\{a^i b^j : 2i = j \mathrm{ or } 2j = i\}$</summary>

$$S \to S_1 \mid S_2, \quad S_1 \to aS_1bb \mid \varepsilon, \quad S_2 \to aaS_2b \mid \varepsilon$$

$S_1$ generates $\{a^i b^{2i}\}$ and $S_2$ generates $\{a^{2j} b^j\}$. Their union is the desired
language.

*Proof of correctness for $S_1$.* By induction: $S_1 \Rightarrow^n a^n S_1 b^{2n} \Rightarrow a^n b^{2n}$.
So $L(S_1) = \{a^n b^{2n} : n \geq 0\}$. Similarly $L(S_2) = \{a^{2n} b^n : n \geq 0\}$.
Hence $L(S) = L(S_1) \cup L(S_2)$, which is exactly the target language. $\blacksquare$

</details>

### 3.2 Parse Trees and Ambiguity

A **parse tree** (derivation tree) for a string $w$ according to grammar $G$ is a tree where:

- The root is labelled $S$.
- Internal nodes are labelled with variables.
- Leaves are labelled with terminals (or $\varepsilon$).
- Children of a node labelled $A$ are the symbols of the right-hand side of a production $A \to \alpha$,
  in left-to-right order.

A CFG is **ambiguous** if some string in its language has two or more distinct parse trees (equivalently,
two or more leftmost derivations or two or more rightmost derivations).

**Example (ambiguous).** $S \to S + S \mid S \times S \mid \mathrm{id}$. The string
$\mathrm{id} + \mathrm{id} \times \mathrm{id}$ has two parse trees:
$S + (S \times S)$ and $(S + S) \times S$.

**Removing ambiguity.** Some ambiguous grammars can be made unambiguous by rewriting the productions
to enforce a particular evaluation order. For the arithmetic expression grammar:

$$E \to E + T \mid T, \quad T \to T \times F \mid F, \quad F \to (E) \mid \mathrm{id}$$

This grammar is unambiguous and enforces the standard precedence ($\times$ before $+$) and left
associativity.

<details>
<summary>Worked Example: Proving a grammar is unambiguous</summary>

Consider the grammar: $S \to aSb \mid ab$. We prove it is unambiguous.

*Proof.* Any string in $L(G)$ has the form $a^n b^n$ for some $n \geq 1$. We show by induction
on $n$ that $a^n b^n$ has exactly one parse tree.

Base ($n = 1$): $ab$ has only the parse tree using $S \to ab$.

Inductive step: $a^{n+1} b^{n+1}$ must use $S \to aSb$ (the rule $S \to ab$ produces only
strings of length 2). The inner $S$ must derive $a^n b^n$, which by IH has a unique parse tree.
Hence $a^{n+1} b^{n+1}$ has exactly one parse tree. $\blacksquare$

</details>

**Example.** $L = \{a^i b^j c^k : i = j \mathrm{ or } j = k\}$ is inherently ambiguous. (Proof omitted;
intuitively, any grammar must have two competing mechanisms for the two conditions, and these
interfere.)

### 3.3 Chomsky Normal Form

A CFG is in **Chomsky Normal Form (CNF)** if every production is of the form:

- $A \to BC$ (two variables), or
- $A \to a$ (single terminal), or
- $S \to \varepsilon$ (only the start variable, and $S$ does not appear on the right of any rule).

**Theorem 3.1.** Every CFG has an equivalent CFG in Chomsky Normal Form.

*Proof (conversion algorithm).*

1. Add a new start variable $S_0$ with rule $S_0 \to S$ (ensures $S$ does not appear on any right
   side if it generates $\varepsilon$).
2. Remove all $\varepsilon$-productions $A \to \varepsilon$ (except possibly $S_0 \to \varepsilon$).
   For each occurrence of $A$ in a right-hand side, add a variant without $A$.
3. Remove all unit productions $A \to B$. For each chain $A \Rightarrow^* B$, add $A \to \alpha$ for
   each $B \to \alpha$.
4. Convert remaining rules: replace terminals $a$ in right-hand sides of length $\geq 2$ with new
   variables $T_a$ and rules $T_a \to a$. Replace right-hand sides of length $\geq 3$ by
   introducing intermediate variables. $\blacksquare$

<details>
<summary>Worked Example: Converting a CFG to CNF</summary>

Convert the following grammar to CNF:

$$S \to AbB, \quad A \to aA \mid \varepsilon, \quad B \to bB \mid \varepsilon$$

**Step 1:** Add new start variable. $S_0 \to S$.

**Step 2:** Remove $\varepsilon$-productions. Both $A$ and $B$ are nullable. For each production
containing $A$ or $B$, add variants with nullable symbols removed:
- $S \to AbB \mid Ab \mid aB \mid ab$
- $A \to aA \mid a$
- $B \to bB \mid b$
- $S_0 \to S$

**Step 3:** Remove unit productions. $S_0 \to S$ is a unit production. Replace with all $S$-productions:
- $S_0 \to AbB \mid Ab \mid aB \mid ab$

**Step 4:** Convert long right-hand sides and terminals.

Introduce $T_a \to a$ and $T_b \to b$:
- $S \to AT_bB \mid AT_b \mid T_aB \mid T_aT_b$
- $S_0 \to AT_bB \mid AT_b \mid T_aB \mid T_aT_b$

Handle $AT_bB$ (length 3): introduce $C_1 \to AT_b$, then $S \to C_1B$ and $S_0 \to C_1B$.

Final CNF grammar:

$$S_0 \to C_1B \mid AT_b \mid T_aB \mid T_aT_b$$
$$S \to C_1B \mid AT_b \mid T_aB \mid T_aT_b$$
$$A \to T_aA \mid T_a$$
$$B \to T_bB \mid T_b$$
$$C_1 \to AT_b$$
$$T_a \to a, \quad T_b \to b$$

</details>

### 3.4 Pushdown Automata

A **pushdown automaton (PDA)** is a 6-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, F)$ where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet.
- $\Gamma$ is the stack alphabet.
- $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \times (\Gamma \cup \{\varepsilon\}) \to \mathcal{P}(Q \times (\Gamma \cup \{\varepsilon\}))$ is the transition function.
- $q_0 \in Q$ is the start state.
- $F \subseteq Q$ is the set of accepting states.

A PDA can read input, push symbols onto the stack, pop symbols from the stack, and make
$\varepsilon$-moves (without consuming input or changing the stack).

**Example.** PDA for $L = \{a^n b^n : n \geq 0\}$:

1. Push a marker $\$$ onto the stack.
2. For each `a`, push `X` onto the stack.
3. For each `b`, pop `X` from the stack.
4. Accept if the stack is empty (just the marker) and all input is consumed.

Formally: states $q_0$ (start), $q_1$ (pushing), $q_2$ (popping), $q_3$ (accept).

<details>
<summary>Worked Example: PDA for palindromes $\{ww^R : w \in \{0,1\}^*\}$</summary>

Design a PDA for $L = \{ww^R : w \in \{0,1\}^*\}$.

**Idea:** Push the first half of the input onto the stack. Nondeterministically guess when the
middle is reached, then pop and compare with the remaining input.

**States:** $q_0$ (pushing), $q_1$ (popping/comparing), $q_2$ (accept).

**Transitions:**
- Push phase ($q_0$):
  - $(q_0, 0, \varepsilon) \to (q_0, 0)$ — push `0`.
  - $(q_0, 1, \varepsilon) \to (q_0, 1)$ — push `1`.
  - $(q_0, \varepsilon, \varepsilon) \to (q_1, \varepsilon)$ — guess the midpoint.

- Pop phase ($q_1$):
  - $(q_1, 0, 0) \to (q_1, \varepsilon)$ — match `0`.
  - $(q_1, 1, 1) \to (q_1, \varepsilon)$ — match `1`.
  - $(q_1, \varepsilon, \varepsilon) \to (q_2, \varepsilon)$ — accept if stack empty and input consumed.

**Accept:** $\{q_2\}$.

*Correctness.* If $w = uu^R$, the PDA pushes $u$, guesses the midpoint, then pops and matches
$u^R$. If $w \neq uu^R$, no sequence of guesses leads to acceptance. $\blacksquare$

</details>

### 3.5 Equivalence of CFG and PDA

**Theorem 3.2.** A language is context-free if and only if some PDA recognises it.

*Proof (sketch).*

**CFG to PDA:** The PDA simulates a leftmost derivation. It maintains the current sentential form
on the stack. At each step, it pops a variable from the stack and pushes the right-hand side of a
production for that variable.

**PDA to CFG:** Given PDA $M$, construct a grammar whose variables encode pairs of states $(p, q)$
meaning "the PDA can go from state $p$ to state $q$, popping everything pushed onto the stack."
The productions simulate the PDA's transitions. $\blacksquare$

**Theorem 3.2a (CFG to PDA construction).** Let $G = (V, \Sigma, R, S)$ be a CFG. Then there exists a
PDA $M$ with $L(M) = L(G)$.

*Proof.* Construct $M = (\{q_0, q_1, q_2\}, \Sigma, V \cup \Sigma \cup \{\$\}, \delta, q_0, \{q_2\})$:

1. $(q_0, \varepsilon, \varepsilon) \to (q_1, S\$)$ — push the start variable and bottom marker.
2. For each $A \to \alpha \in R$: $(q_1, \varepsilon, A) \to (q_1, \alpha)$ — replace a variable with its production.
3. For each $a \in \Sigma$: $(q_1, a, a) \to (q_1, \varepsilon)$ — match a terminal on input with stack.
4. $(q_1, \varepsilon, \$) \to (q_2, \$)$ — accept when only the marker remains.

The PDA maintains the current sentential form (minus terminals already matched) on the stack. When
only $\$$ remains, the derivation is complete and all input has been consumed. $\blacksquare$

### 3.6 Pumping Lemma for Context-Free Languages

**Theorem 3.3.** If $L$ is context-free, there exists $p$ such that for every $w \in L$ with
$|w| \geq p$, $w$ can be decomposed as $w = uvxyz$ satisfying:

1. $|vy| \gt{} 0$.
2. $|vxy| \leq p$.
3. $uv^ixy^iz \in L$ for all $i \geq 0$.

*Proof.* Let $G$ be a CFG in CNF with $k$ variables. Any parse tree of height $h$ generates a string
of length at most $2^{h-1}$. Set $p = 2^k$. For $|w| \geq p$, the parse tree has height $\gt{} k$,
so some path repeats a variable. The substring generated between the two occurrences can be pumped.
$\blacksquare$

**Example.** $L = \{a^n b^n c^n : n \geq 0\}$ is not context-free.

*Proof.* Assume pumping length $p$. Let $w = a^p b^p c^p$. Since $|vxy| \leq p$, the substring
$vxy$ cannot span all three letter types. Case analysis:

- If $vxy$ is within the `a`s or `b`s or `c`s: pumping changes only one count, breaking the equality.
- If $vxy$ spans `a`s and `b`s: pumping changes the `a` and `b` counts but not `c`, breaking equality.
- If $vxy$ spans `b`s and `c`s: analogous.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

**Example.** $L = \{a^i b^j c^k : i \lt{} j \lt{} k\}$ is not context-free.

*Proof.* Assume pumping length $p$. Let $w = a^p b^{p+1} c^{p+2}$. Since $|vxy| \leq p$:

- If $vxy$ lies entirely within one block: pumping up ($i = 2$) increases only one count, but the
  gap between adjacent counts is only 1 or 2, so doubling the pumped count violates the strict
  inequalities.
- If $vxy$ spans two blocks: pumping changes two adjacent counts by the same additive amount.
  The gap between those counts is 1, so increasing both by the same positive amount makes them
  equal, violating $i \lt{} j \lt{} k$.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

<details>
<summary>Worked Example: $\{a^n b^n a^n : n \geq 0\}$ is not context-free</summary>

*Proof.* Assume pumping length $p$. Let $w = a^p b^p a^p$. Since $|vxy| \leq p$, the substring
$vxy$ cannot span all three blocks. Case analysis:

- $vxy$ within the first $a^p$ block: pumping down ($i = 0$) reduces the first count only.
  $uv^0xy^0z = a^{p-k}b^pa^p \notin L$ for $k \gt{} 0$.
- $vxy$ within the $b^p$ block: pumping changes the $b$ count only, breaking equality.
- $vxy$ within the last $a^p$ block: analogous.
- $vxy$ spans the first $a^p$ and $b^p$: pumping changes first $a$ and $b$ counts but not the last
  $a$ count.
- $vxy$ spans $b^p$ and last $a^p$: analogous.

In all cases, pumping produces a string not in $L$. $\blacksquare$

</details>

### 3.7 The CYK Parsing Algorithm

The **Cocke--Younger--Kasami (CYK) algorithm** determines membership in a context-free language
when the grammar is in Chomsky Normal Form.

**Theorem 3.4.** Given a CFG $G$ in CNF and a string $w$ of length $n$, the CYK algorithm decides
whether $w \in L(G)$ in $O(n^3 \cdot |G|)$ time.

**Algorithm.** Construct a table $T[i, j]$ for $1 \leq i \leq j \leq n$, where $T[i, j]$ is the set
of variables that can derive the substring $w_i w_{i+1} \cdots w_j$.

1. **Base case** ($j = 1$): $T[i, i] = \{A : A \to w_i \mathrm{ is a rule in } G\}$.
2. **Recursive case** ($j \gt{} 1$): For each split $k$ with $i \leq k \lt{} j$:
   $$T[i, j] \mathrel{{:}{=}} T[i, j] \cup \{A : A \to BC \in R, B \in T[i, k], C \in T[k+1, j]\}$$
3. **Answer:** $w \in L(G)$ iff $S \in T[1, n]$.

*Proof of correctness.* In CNF, every derivation of a string of length $\ell$ involves exactly
$\ell - 1$ binary productions. The table considers every possible "root" of the derivation tree
for each substring, and every possible split of that substring into two parts. By induction on the
substring length, $T[i, j]$ contains exactly those variables that derive $w_i \cdots w_j$.
$\blacksquare$

**Time complexity.** The table has $O(n^2)$ entries. Each entry considers at most $n$ split points
and checks all $|G|$ rules, giving $O(n^3 \cdot |G|)$ total time.

<details>
<summary>Worked Example: CYK on a small grammar</summary>

Grammar (CNF): $S \to AB \mid BC$, $A \to BA \mid a$, $B \to CC \mid b$, $C \to AB \mid a$.

String: $w = ba$.

**Length 1:**
- $T[1,1]$: $w_1 = b$, so $T[1,1] = \{B\}$ (since $B \to b$).
- $T[2,2]$: $w_2 = a$, so $T[2,2] = \{A, C\}$ (since $A \to a$ and $C \to a$).

**Length 2:**
- $T[1,2]$: split at $k = 1$. Check all pairs $(X \in T[1,1], Y \in T[2,2])$:
  - $X = B, Y = A$: $S \to BA$? No. $B \to BA$? No. $A \to BA$? No. $C \to BA$? No.
  - $X = B, Y = C$: $S \to BC$? Yes — add $S$.
  - $X = B, Y = A$: already checked.
  So $T[1,2] = \{S\}$.

Since $S \in T[1,2]$, the string $ba$ is **in** $L(G)$. The parse tree is $S \to BC$,
where $B \to b$ and $C \to a$.

</details>

## 4. Turing Machines

### 4.1 Definition

A **Turing machine (TM)** is a 7-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\mathrm{accept}},
q_{\mathrm{reject}})$ where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet (does not contain the blank symbol $\sqcup$).
- $\Gamma$ is the tape alphabet, $\sqcup \in \Gamma$, $\Sigma \subseteq \Gamma$.
- $\delta : Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$ is the transition function.
- $q_0 \in Q$ is the start state.
- $q_{\mathrm{accept}} \in Q$ is the accept state.
- $q_{\mathrm{reject}} \in Q$ is the reject state ($q_{\mathrm{accept}} \neq q_{\mathrm{reject}}$).

The TM has an infinite tape (initially containing the input followed by blanks), a read/write head
that moves left or right, and a finite control. At each step, based on the current state and symbol
under the head, it writes a symbol, moves the head, and changes state.

$M$ **accepts** input $w$ if the computation halts in $q_{\mathrm{accept}}$. $M$ **rejects** $w$ if
it halts in $q_{\mathrm{reject}}$. $M$ **loops** if it never halts.

The **language recognised** by $M$ is $L(M) = \{w : M \mathrm{ accepts } w\}$.

A language is **Turing-recognisable** (recursively enumerable) if some TM recognises it. A language
is **decidable** if some TM decides it (halts on all inputs, accepting or rejecting).

### 4.2 TM Variants

**Multitape TMs.** Multiple tapes, each with its own head. The transition function maps
$(q, a_1, \ldots, a_k)$ to $(q', b_1, \ldots, b_k, d_1, \ldots, d_k)$.

**Theorem 4.1.** Every multitape TM has an equivalent single-tape TM.

*Proof.* Simulate $k$ tapes on a single tape using $k$ tracks (or interleaving symbols with
delimiters). Simulating one step of the multitape TM requires scanning the single tape to read all
$k$ heads and update them, costing $O(k \cdot n)$ steps per simulated step. $\blacksquare$

**Nondeterministic TMs.** $\delta : Q \times \Gamma \to \mathcal{P}(Q \times \Gamma \times \{L, R\})$.
The TM accepts if **some** computation path accepts.

**Theorem 4.2.** Every nondeterministic TM has an equivalent deterministic TM.

*Proof.* Simulate the NTM using breadth-first search on the computation tree. Each level of the tree
has at most $b$ branches (where $b$ is the maximum number of choices). After $n$ steps, the tree has
at most $b^n$ nodes. The simulation visits nodes in order, using a 3-tape DTM: tape 1 stores the
input, tape 2 simulates the current branch, tape 3 tracks the address of the current node in the
tree. The simulation runs in $O(b^n)$ times the NTM's time, which is exponential overhead.
$\blacksquare$

**Enumerators.** A TM with a printer that outputs a list of strings. A language is Turing-recognisable
if and only if some enumerator enumerates it.

**Theorem 4.2a.** A language is Turing-recognisable if and only if some enumerator enumerates it.

*Proof.* ($\Rightarrow$) Given TM $M$ recognising $L$, construct an enumerator $E$ that dovetails:
runs $M$ on $\varepsilon$ for 1 step, then $M$ on $\varepsilon$ and $M$ on $0$ for 2 steps, then on
$\varepsilon, 0, 1, 00, 01, 10, 11$ for 3 steps, and so on. Whenever $M$ accepts, $E$ prints that
string. Every string in $L$ is eventually printed.

($\Leftarrow$) Given enumerator $E$ for $L$, construct TM $M$ that on input $w$ runs $E$ and checks
each printed string against $w$. If $w$ is printed, accept. If $w \in L$, it will eventually be
printed, so $M$ recognises $L$. $\blacksquare$

### 4.3 Church-Turing Thesis

**Theorem 4.3 (Church-Turing Thesis).** A function is computable (can be computed by any reasonable
model of computation) if and only if it is computable by a Turing machine.

This is a **thesis**, not a theorem -- it cannot be formally proved because "reasonable model" is not
formally defined. However, all proposed models of computation (lambda calculus, recursive functions,
Post systems, cellular automata, modern programming languages) have been shown equivalent to Turing
machines.

**Implication:** To show a problem is uncomputable, it suffices to show no TM can solve it.

**Evidence supporting the thesis:**

1. **Robustness.** Every "reasonable" model of computation proposed since the 1930s has been shown
   to compute exactly the Turing-computable functions.
2. **Invariance.** Adding resources (more tapes, nondeterminism, random access) does not increase the
   class of computable functions.
3. **Empirical adequacy.** No physically realisable process has been shown to compute a
   non-Turing-computable function.
4. **Universality.** The existence of universal Turing machines (Section 4.5) shows that a single
   fixed machine can simulate any other, reinforcing the notion of a canonical model.

**Limitations.** The Church-Turing thesis concerns computability *in principle* (unlimited time and
space). It does not address *feasibility*, which is the domain of complexity theory (Section 6).
Quantum computers do not compute non-Turing-computable functions; they may offer speedups for
specific problems but remain within the Turing-computable class.

### 4.4 TM Construction Examples

<details>
<summary>Worked Example: TM for $L = \{0^n 1^n : n \geq 0\}$</summary>

Design a single-tape TM that decides $L = \{0^n 1^n : n \geq 0\}$.

**Idea:** Repeatedly cross off one `0` and one `1`. If all symbols are crossed off, accept.

$M = (Q, \{0, 1\}, \{0, 1, \mathrm{x}, \sqcup\}, \delta, q_0, q_{\mathrm{accept}}, q_{\mathrm{reject}})$.

**Key transitions:**

1. In $q_0$, read `0`: write `x`, move right, go to $q_1$. (Cross off a `0`.)
2. In $q_0$, read `1`: reject. (A `1` before any `0`.)
3. In $q_0$, read $\sqcup$: accept. (Nothing left.)
4. In $q_1$, read `0`: move right, stay in $q_1$. (Skip remaining `0`s.)
5. In $q_1$, read `1`: write `x`, move left, go to $q_2$. (Cross off a `1`.)
6. In $q_1$, read $\sqcup$: reject. (No `1` to match.)
7. In $q_2$, read `0` or `x`: move left, stay in $q_2$. (Scan back.)
8. In $q_2$, read $\sqcup$: move right, go to $q_0$. (Return to start.)

*Correctness.* Each iteration crosses off exactly one `0` and one `1`. If the input is $0^n 1^n$,
the machine performs $n$ iterations and accepts. If counts differ or the pattern is violated,
the machine rejects. $\blacksquare$

</details>

<details>
<summary>Worked Example: TM that decides $A_{\mathrm{DFA}}$</summary>

Design a TM that decides $A_{\mathrm{DFA}} = \{\langle B, w \rangle : B \mathrm{ accepts } w\}$.

**Construction.** On input $\langle B, w \rangle$ where $B = (Q, \Sigma, \delta, q_0, F)$:

1. Simulate $B$ on $w$. Maintain the current state $q$ and position $i$ in $w$.
2. At each step, look up $\delta(q, w_i)$ in $B$'s transition table (encoded on the tape).
3. Update $q$ and $i$. If $q \in F$ when $i = |w| + 1$, accept.
4. If $i = |w| + 1$ and $q \notin F$, reject.

The simulation takes $O(|w|)$ steps and always halts. $\blacksquare$

</details>

### 4.5 The Universal Turing Machine

A **universal Turing machine (UTM)** $U$ is a Turing machine that can simulate any other Turing
machine $M$ on any input $w$. The input to $U$ is an encoding $\langle M, w \rangle$.

**Theorem 4.4.** A universal Turing machine exists.

*Proof (construction sketch).* Fix an encoding scheme for TMs and their inputs as strings over a
finite alphabet. The UTM $U$ uses multiple tapes:

1. **Tape 1:** Stores the description $\langle M \rangle$ of the simulated TM (the "program").
2. **Tape 2:** Stores the current contents of $M$'s tape (the "memory").
3. **Tape 3:** Stores the current state of $M$ and the position of $M$'s head.

At each step, $U$ reads the current state and tape symbol from tapes 3 and 2, scans tape 1 to
find the matching transition in $M$'s description, updates tape 2 (write symbol), tape 3 (state
and head position), and repeats. Since $M$'s description is finite and each step requires a finite
scan, $U$ correctly simulates $M$. $\blacksquare$

**Significance.** The UTM is the theoretical foundation for the stored-program computer: hardware
(the UTM) is fixed, and software (the encoded TM) provides the specific computation.

**Simulation overhead.** If $M$ runs in time $t(n)$, then $U$ simulates $M$ in time
$O(t(n) \cdot |M|)$, where $|M|$ is the size of $M$'s description.

<details>
<summary>Worked Example: TM for $L = \{w\#w^R : w \in \{0,1\}^*\}$</summary>

Design a TM that decides $L = \{w\#w^R : w \in \{0,1\}^*\}$.

**Idea:** Repeatedly check the first and last non-$\#$ symbols, then cross them off. When only
$\#$ remains, accept.

**Algorithm:**

1. Scan right to find the rightmost non-$\sqcup$, non-$\mathrm{x}$ symbol (call it $a$). If we
   cross $\#$ on the way, note its position.
2. Return to the leftmost non-$\sqcup$, non-$\mathrm{x}$ symbol (call it $b$).
3. If $a \neq b$, reject.
4. Cross off both $a$ and $b$ (write $\mathrm{x}$).
5. Repeat until only $\#$ (and $\mathrm{x}$s) remain, then accept.

*Correctness.* If the input is $w\#w^R$, the first symbol of $w$ equals the last symbol of
$w^R$ (which is the first symbol of $w$), the second equals the second-to-last, etc. Each
iteration verifies one pair. If any pair mismatches, the string is not of the form $w\#w^R$.
$\blacksquare$

</details>

## 5. Decidability

### 5.1 Decidable Languages

**Theorem 5.1.** The following languages are decidable:

- $A_{\mathrm{DFA}} = \{\langle B, w \rangle : B \mathrm{ is a DFA that accepts } w\}$.
- $E_{\mathrm{DFA}} = \{\langle B \rangle : B \mathrm{ is a DFA with } L(B) = \emptyset\}$.
- $\mathrm{EQ}_{\mathrm{DFA}} = \{\langle A, B \rangle : A, B \mathrm{ are DFAs with } L(A) = L(B)\}$.
- $A_{\mathrm{CFG}} = \{\langle G, w \rangle : G \mathrm{ is a CFG that generates } w\}$.

*Proof (for $A_{\mathrm{DFA}}$).* Simulate $B$ on input $w$. This takes $O(|w|)$ steps and always halts.

*Proof (for $E_{\mathrm{DFA}}$).* Mark the start state. Repeatedly mark states reachable by
transitions from already-marked states. After no more states can be marked, check if any accept state
is marked. If not, $L(B) = \emptyset$.

*Proof (for $\mathrm{EQ}_{\mathrm{DFA}}$).* Use the product construction to build a DFA for
$L(A) \triangle L(B) = (L(A) \cap \overline{L(B)}) \cup (\overline{L(A)} \cap L(B))$. Test if this
DFA accepts any string (using the algorithm for $E_{\mathrm{DFA}}$). $\blacksquare$

**Additional decidable problems:**

- $A_{\mathrm{REX}} = \{\langle R, w \rangle : R \mathrm{ is a regex and } w \in L(R)\}$ — convert $R$ to a DFA, then decide $A_{\mathrm{DFA}}$.
- $E_{\mathrm{CFG}} = \{\langle G \rangle : L(G) = \emptyset\}$ — test all derivations up to length $2^{|V|}$.
- $\mathrm{INF}_{\mathrm{CFL}} = \{\langle G \rangle : L(G) \mathrm{ is infinite}\}$ — check if any variable has a self-embedding derivation.

### 5.2 The Halting Problem

**Theorem 5.2.** $A_{\mathrm{TM}} = \{\langle M, w \rangle : M \mathrm{ is a TM and } M \mathrm{ accepts } w\}$
is Turing-recognisable but undecidable.

*Proof of recognisability.* Simulate $M$ on $w$. If $M$ accepts, accept. If $M$ rejects, reject.
This recognises $A_{\mathrm{TM}}$. $\blacksquare$

*Proof of undecidability (by contradiction).* Assume a decider $H$ for $A_{\mathrm{TM}}$ exists.
Construct a TM $D$ that on input $\langle M \rangle$:

1. Run $H$ on $\langle M, \langle M \rangle \rangle$.
2. If $H$ accepts, reject.
3. If $H$ rejects, accept.

Consider $D$ on input $\langle D \rangle$:

- If $D$ accepts $\langle D \rangle$, then by construction $D$ rejects $\langle D \rangle$. Contradiction.
- If $D$ rejects $\langle D \rangle$, then by construction $D$ accepts $\langle D \rangle$. Contradiction.

Therefore $H$ cannot exist. $\blacksquare$

**Theorem 5.2a.** $\overline{A_{\mathrm{TM}}}$ is not Turing-recognisable.

*Proof.* If $\overline{A_{\mathrm{TM}}}$ were Turing-recognisable, then since $A_{\mathrm{TM}}$ is
also Turing-recognisable, $A_{\mathrm{TM}}$ would be decidable (run both recognisers in parallel; one
must accept). But $A_{\mathrm{TM}}$ is undecidable. Contradiction. $\blacksquare$

### 5.3 Reductions and Undecidability

A **reduction** from language $A$ to language $B$ is a computable function $f$ that maps instances of
$A$ to instances of $B$ such that $w \in A \iff f(w) \in B$.

**Theorem 5.3.** If $A \leq_m B$ and $B$ is decidable, then $A$ is decidable.

*Proof.* To decide $A$ on input $w$: compute $f(w)$, then decide $B$ on $f(w)$. Since both steps are
computable, $A$ is decidable. $\blacksquare$

**Corollary 5.4.** If $A \leq_m B$ and $A$ is undecidable, then $B$ is undecidable.

**Applications.** Using reductions from $A_{\mathrm{TM}}$, we can prove many problems undecidable:

| Language | Description | Reduction from |
| -------- | ----------- | -------------- |
| $\mathrm{HALT}_{\mathrm{TM}}$ | $\{M, w : M \mathrm{ halts on } w\}$ | $A_{\mathrm{TM}}$ |
| $E_{\mathrm{TM}}$ | $\{M : L(M) = \emptyset\}$ | $A_{\mathrm{TM}}$ |
| $\mathrm{REGULAR}_{\mathrm{TM}}$ | $\{M : L(M) \mathrm{ is regular}\}$ | $A_{\mathrm{TM}}$ |
| $\mathrm{EQ}_{\mathrm{TM}}$ | $\{M_1, M_2 : L(M_1) = L(M_2)\}$ | $E_{\mathrm{TM}}$ |

**Example reduction.** $A_{\mathrm{TM}} \leq_m \mathrm{HALT}_{\mathrm{TM}}$.

*Proof.* Given $\langle M, w \rangle$, construct a TM $M'$ that on input $x$: simulates $M$ on $w$.
If $M$ accepts, accept. If $M$ rejects, loop. Then $\langle M, w \rangle \in A_{\mathrm{TM}}$ iff
$M'$ halts on some input (any input), iff $\langle M' \rangle \in \mathrm{HALT}_{\mathrm{TM}}$.
$\blacksquare$

<details>
<summary>Worked Example: $A_{\mathrm{TM}} \leq_m E_{\mathrm{TM}}$</summary>

*Proof.* Given $\langle M, w \rangle$, construct a TM $M_w$ that on input $x$:
1. Simulate $M$ on $w$.
2. If $M$ accepts $w$, accept $x$.
3. If $M$ rejects $w$, reject $x$.

Then $L(M_w) = \Sigma^*$ if $M$ accepts $w$, and $L(M_w) = \emptyset$ if $M$ does not accept $w$.

Therefore: $\langle M, w \rangle \in A_{\mathrm{TM}}$ iff $L(M_w) \neq \emptyset$
iff $\langle M_w \rangle \notin E_{\mathrm{TM}}$.

The reduction $f(\langle M, w \rangle) = \langle M_w \rangle$ is computable. So if $E_{\mathrm{TM}}$
were decidable, $\overline{E_{\mathrm{TM}}}$ would be decidable, and hence $A_{\mathrm{TM}}$
would be decidable — contradiction. $\blacksquare$

</details>

<details>
<summary>Worked Example: $E_{\mathrm{TM}} \leq_m \mathrm{EQ}_{\mathrm{TM}}$</summary>

*Proof.* Given $\langle M \rangle$, construct two TMs:
- $M_1$: on any input, immediately rejects. So $L(M_1) = \emptyset$.
- $M_2$: on any input, simulates $M$ and accepts iff $M$ accepts. So $L(M_2) = L(M)$.

Then $L(M) = \emptyset$ iff $L(M_1) = L(M_2)$.

Therefore $\langle M \rangle \in E_{\mathrm{TM}}$ iff $\langle M_1, M_2 \rangle \in \mathrm{EQ}_{\mathrm{TM}}$.
If $\mathrm{EQ}_{\mathrm{TM}}$ were decidable, $E_{\mathrm{TM}}$ would be decidable — contradiction.
$\blacksquare$

</details>

### 5.4 Rice's Theorem

**Theorem 5.5 (Rice's Theorem).** Every non-trivial property of the language recognised by a Turing
machine is undecidable.

A **property** $P$ is a set of Turing-recognisable languages. It is **non-trivial** if $P$ is neither
empty nor the set of all Turing-recognisable languages.

*Proof (sketch).* Let $P$ be a non-trivial property. Since $P$ is non-trivial, there exists a TM
$M_0$ with $L(M_0) \in P$ and a TM $M_1$ with $L(M_1) \notin P$. Given an arbitrary TM $M$ and input
$w$, construct $M_w$ that on input $x$: first simulates $M$ on $w$, then simulates $M_0$ on $x$. If
$M$ accepts $w$, then $L(M_w) = L(M_0) \in P$; if $M$ does not accept $w$, $L(M_w) = \emptyset$.
If $\emptyset \notin P$, then $M_w \in P$ iff $M$ accepts $w$, so deciding $P$ would decide
$A_{\mathrm{TM}}$. The case $\emptyset \in P$ is similar. $\blacksquare$

**Corollary.** The following are undecidable: "Does $M$ accept at least one string?", "Is $L(M)$
finite?", "Is $L(M)$ regular?", "Is $L(M)$ context-free?"

:::caution Common Pitfall
Rice's theorem applies only to properties of the **language** $L(M)$, not properties of the
**machine** $M$ itself. For example, "Does $M$ halt within 100 steps on input $w$?" is a property
of $M$'s behaviour, not of $L(M)$, and is in fact decidable (just simulate for 100 steps).
:::

### 5.5 Post Correspondence Problem

**Definition.** An instance of the **Post Correspondence Problem (PCP)** consists of two lists of
strings $\alpha = (\alpha_1, \ldots, \alpha_k)$ and $\beta = (\beta_1, \ldots, \beta_k)$ over some
alphabet $\Sigma$. A **solution** is a non-empty sequence of indices $i_1, i_2, \ldots, i_m$ such
that:

$$\alpha_{i_1} \alpha_{i_2} \cdots \alpha_{i_m} = \beta_{i_1} \beta_{i_2} \cdots \beta_{i_m}$$

The **PCP language** is $\mathrm{PCP} = \{\langle \alpha, \beta \rangle : \alpha, \beta \mathrm{ have a solution}\}$.

**Example.** $\alpha = (a, ab, bba)$, $\beta = (ba, aa, bb)$. The sequence $(2, 1, 1, 3)$ gives
$ab \cdot a \cdot a \cdot bba = abaabba$ and $aa \cdot ba \cdot ba \cdot bb = aabababb$ — not equal.
The sequence $(1, 3, 1)$ gives $a \cdot bba \cdot a = abbaa$ and $ba \cdot bb \cdot ba = babba$
— not equal. This instance may or may not have a solution; determining this is undecidable in general.

<details>
<summary>Worked Example: A solvable PCP instance</summary>

$\alpha = (b, ba, aab)$, $\beta = (bb, aa, ba)$.

Try the sequence $(2, 3, 1)$:
- Top: $\alpha_2 \alpha_3 \alpha_1 = ba \cdot aab \cdot b = baaab b$
- Bottom: $\beta_2 \beta_3 \beta_1 = aa \cdot ba \cdot bb = aababb$

Not equal.

Try $(3, 2, 1, 3, 2, 1)$:
- Top: $aab \cdot ba \cdot b \cdot aab \cdot ba \cdot b = aabbaabaabb$
- Bottom: $ba \cdot aa \cdot bb \cdot ba \cdot aa \cdot bb = baabbbbaabb$

Not equal. Finding solutions to PCP instances can be very difficult — there is no general algorithm.

</details>

**Theorem 5.6.** PCP is undecidable.

*Proof (sketch).* Reduce from $A_{\mathrm{TM}}$. Given TM $M$ and input $w$, construct a PCP instance
whose tiles encode the computation history of $M$ on $w$. The tiles are designed so that a matching
sequence corresponds to a valid accepting computation: the first tile starts the computation, middle
tiles enforce that each configuration follows from the previous by a valid transition, and the last
tile allows termination only if an accept state is reached. Thus the PCP instance has a solution iff
$M$ accepts $w$. The construction is computable, so if PCP were decidable, $A_{\mathrm{TM}}$ would
be decidable — contradiction. $\blacksquare$

**Modified PCP (MPCP).** In the modified version, the first tile used must be tile 1. MPCP is also
undecidable, and the reduction from PCP to MPCP adds a "prefix" tile that forces tile 1 to be used
first.

### 5.6 Oracle Machines and the Arithmetical Hierarchy

An **oracle machine** $M^O$ is a Turing machine with access to an **oracle** $O$ for a language
$O \subseteq \Sigma^*$. In addition to its ordinary transitions, $M^O$ may enter a special
"query state," write a string $q$ on a query tape, and enter an "answer state" where the tape
contains `1` if $q \in O$ and `0` if $q \notin O$. The oracle answers in one step.

**Definition.** $A^O = \{w : M^O \mathrm{ accepts } w\}$ for a fixed oracle TM $M$ and oracle $O$.

**Theorem 5.7.** There exists an oracle $A$ such that $P^A \neq NP^A$, and an oracle $B$ such
that $P^B = NP^B$.

This result (Baker--Gill--Solovay, 1975) shows that resolving $P \stackrel{?}{=} NP$ will require
non-relativising techniques — proof methods that do not carry over in the presence of oracles.

**The Turing jump.** Given a language $A$, define the **halting problem relative to $A$**:

$$A' = \{\langle M^A, w \rangle : M^A \mathrm{ accepts } w\}$$

**Theorem 5.8.** $A' \not\leq_T A$ (i.e., $A'$ is strictly more difficult than $A$ under Turing
reductions).

The arithmetical hierarchy is defined by iterating the jump: $\emptyset^{(0)} = \emptyset$,
$\emptyset^{(n+1)} = (\emptyset^{(n)})'$. Each jump produces a strictly more difficult problem,
yielding an infinite hierarchy of undecidability.

:::caution Common Pitfall
A common mistake when using reductions is confusing the direction. To prove $B$ is undecidable
using a reduction from a known undecidable problem $A$, you need $A \leq_m B$, not $B \leq_m A$.
Remember: if $A \leq_m B$ and $A$ is undecidable, then $B$ is undecidable (contrapositive of
"if $B$ is decidable then $A$ is decidable"). Reversing the direction gives a valid implication
("if $B \leq_m A$ and $A$ is undecidable, then...") that tells us nothing about $B$.
:::

## 6. Complexity Theory

### 6.1 Time Complexity

The **running time** of a deterministic TM $M$ on input $w$ is the number of steps $M$ takes before
halting. If $M$ never halts, the running time is $\infty$.

$M$ **runs in time $t(n)$** if for every input $w$ of length $n$, $M$ halts within $t(n)$ steps.

**Theorem 6.1.** Let $t(n)$ be a function with $t(n) \geq n$. Every TM that runs in time $t(n)$ has
an equivalent single-tape TM that runs in time $O(t^2(n))$.

*Proof.* A $k$-tape TM running in time $t(n)$ uses at most $t(n)$ tape cells on each tape. Simulating
one step of the $k$-tape machine requires scanning the single-tape simulation from left to right
to read all $k$ heads, then left to right again to update them. This costs $O(t(n))$ per simulated
step. Over $t(n)$ steps, the total is $O(t(n)^2)$. $\blacksquare$

**Theorem 6.1a (Time Hierarchy Theorem).** If $t_1, t_2$ are time-constructible functions with
$t_1(n) \log t_1(n) = o(t_2(n))$, then $\mathrm{TIME}(t_1(n)) \subsetneq \mathrm{TIME}(t_2(n))$.

*Proof (idea).* Use diagonalisation. Construct a TM $D$ that on input $x$ of length $n$:
1. Compute $t_2(n)$ (possible since $t_2$ is time-constructible).
2. Simulate all TMs $M_1, M_2, \ldots$ in parallel for $t_1(n)$ steps on input $x$.
3. If any $M_i$ accepts $x$ within $t_1(n)$ steps, $D$ does the opposite (reject).
4. Otherwise, accept.

$D$ runs in time $O(t_2(n))$ and differs from every TM that runs in time $O(t_1(n))$ on at least
one input. $\blacksquare$

**Corollary.** $\mathrm{P} \subsetneq \mathrm{EXPTIME}$.

**Definition.** $\mathrm{TIME}(t(n)) = \{L : L \mathrm{ is decided by a deterministic TM in } O(t(n))\}$.

**Definition.** $\mathrm{NTIME}(t(n)) = \{L : L \mathrm{ is decided by a nondeterministic TM in } O(t(n))\}$.

### 6.2 The Class P

$$\mathrm{P} = \bigcup_{k \geq 1} \mathrm{TIME}(n^k)$$

$\mathrm{P}$ is the class of languages decidable in polynomial time by a deterministic TM. This
captures the notion of "efficiently solvable."

**Examples of problems in P:**

- Path connectivity (BFS/DFS): $O(V + E)$.
- Shortest paths (Dijkstra): $O((V + E) \log V)$.
- Sorting: $O(n \log n)$.
- 2-SAT: $O(n + m)$.
- Primality testing: $O(\log^6 n)$ (AKS algorithm).

### 6.3 The Class NP

$$\mathrm{NP} = \bigcup_{k \geq 1} \mathrm{NTIME}(n^k)$$

**Equivalent definition.** A language $L$ is in NP if there exists a polynomial-time verifier $V$
and a polynomial $p$ such that:

$$L = \{w : \exists c \mathrm{ with } |c| \leq p(|w|) \mathrm{ and } V(w, c) = \mathrm{accept}\}$$

The string $c$ is called a **certificate** (or witness).

**Examples of problems in NP:**

- SAT: certificate is a satisfying assignment.
- Clique: certificate is the set of vertices forming the clique.
- Travelling Salesman (decision): certificate is the tour.
- Subset Sum: certificate is the subset.
- Graph 3-Colouring: certificate is the colouring.
- Integer factorisation (decision version): certificate is a factor.

**Theorem 6.2.** $\mathrm{P} \subseteq \mathrm{NP}$.

*Proof.* Every deterministic polynomial-time algorithm is a special case of a nondeterministic one
(with exactly one choice at each step). Alternatively, the certificate can be empty. $\blacksquare$

**Theorem 6.2a.** If $A \leq_p B$ and $B \in \mathrm{NP}$, then $A \in \mathrm{NP}$.

*Proof.* Let $V_B$ be the polynomial-time verifier for $B$ and $f$ be the polynomial-time reduction.
Then $V_A(w, c) = V_B(f(w), c)$ is a polynomial-time verifier for $A$. $\blacksquare$

**Open question:** $\mathrm{P} = \mathrm{NP}$? This is the most important open problem in computer
science. Most researchers believe $\mathrm{P} \neq \mathrm{NP}$.

**Consequences of P = NP.** If $\mathrm{P} = \mathrm{NP}$, then every problem in NP (including SAT,
Travelling Salesman, graph colouring, protein folding, etc.) would have polynomial-time algorithms.
This would revolutionise optimisation, cryptography (RSA and most public-key systems would be broken),
and artificial intelligence. However, after decades of research, no polynomial-time algorithm has
been found for any NP-complete problem, providing strong empirical evidence for $\mathrm{P} \neq \mathrm{NP}$.

### 6.4 NP-Completeness

A language $B$ is **NP-complete** if:

1. $B \in \mathrm{NP}$, and
2. $A \leq_p B$ for every $A \in \mathrm{NP}$ (polynomial-time mapping reduction).

A language is **NP-hard** if condition (2) holds (it need not be in NP).

**Theorem 6.3 (Cook-Levin, 1971).** $\mathrm{SAT}$ is NP-complete.

*Proof (detailed sketch).*

1. $\mathrm{SAT} \in \mathrm{NP}$: a satisfying assignment is a polynomial-size certificate that
   can be verified in polynomial time.

2. For any $L \in \mathrm{NP}$, there is a polynomial-time NTM $N$ that decides $L$ in time
   $n^k$ for some $k$. Given input $w$ of length $n$, construct a Boolean formula $\phi_{N,w}$
   that is satisfiable iff $N$ accepts $w$.

   The formula encodes the **tableau** of $N$ on $w$: a table of size $n^k \times n^k$ where
   each cell $T[i, j]$ records the symbol at tape cell $j$ after step $i$ of the computation.

   **Variables:** For each position $(i, j)$ in the tableau and each symbol $s$ in the combined
   state-tape alphabet $\Gamma' = Q \times \Gamma$, a variable $x_{i,j,s}$ indicating that cell
   $(i, j)$ contains $s$.

   **Constraints:**
   - **Well-formedness:** Each cell contains exactly one symbol.
     For each $(i, j)$: exactly one of $\{x_{i,j,s} : s \in \Gamma'\}$ is true.
   - **Start configuration:** Row 0 encodes $q_0$ at position 0, $w_1$ at position 1, etc.
   - **Transition correctness:** For every $2 \times 3$ window of the tableau, the bottom row
     must be a valid successor of the top row according to $N$'s transition function.
   - **Acceptance:** Some cell in the last row contains $q_{\mathrm{accept}}$.

   Each constraint can be expressed as a polynomial-size CNF formula (using standard encodings
   of "exactly one" and "window" constraints). The total formula has size $O(n^{2k})$, which is
   polynomial in $|w|$. $\blacksquare$

<details>
<summary>Worked Example: Cook-Levin tableau construction (simplified)</summary>

Consider an NTM $N$ that decides a language $L$ in time $n^2$. On input $w = 01$ (length $n = 2$),
the tableau is a $4 \times 4$ grid (since $n^2 = 4$).

The formula $\phi_{N,w}$ has variables for each cell. For instance, $x_{0,0,q_0}$ indicates
that position $(0,0)$ contains the start state. The constraints enforce:

- Row 0: $q_0$ at position 0, `0` at position 1, `1` at position 2, $\sqcup$ at position 3.
- Transition windows: each $2 \times 3$ block must be consistent with $\delta$.
- Row 3: at least one cell contains $q_{\mathrm{accept}}$.

If $N$ accepts $w$, then the accepting computation path provides a satisfying assignment
(the tableau records that path). If $\phi_{N,w}$ is satisfiable, the satisfying assignment
encodes a valid accepting computation.

</details>

**Corollary 6.4.** If any NP-complete problem is in P, then P = NP.

**Theorem 6.5.** If $A \leq_p B$ and $B \in \mathrm{P}$, then $A \in \mathrm{P}$.

*Proof.* To decide $A$ on input $w$: compute $f(w)$ in polynomial time (the reduction), then decide
$B$ on $f(w)$ in polynomial time. Total: polynomial time. $\blacksquare$

### 6.5 Classic NP-Complete Problems

**3-SAT.** Given a CNF formula with exactly 3 literals per clause, is it satisfiable?

**Reduction:** SAT $\leq_p$ 3-SAT. Replace each clause with more or fewer than 3 literals by
equivalent clauses with exactly 3 literals using auxiliary variables.

**Theorem 6.5a.** SAT $\leq_p$ 3-SAT.

*Proof.* Given a CNF formula $\phi$, convert each clause to exactly 3 literals:

- Clause $(l_1)$ (1 literal): replace with $(l_1 \lor a \lor b) \land (l_1 \lor a \lor \bar{b}) \land (l_1 \lor \bar{a} \lor b) \land (l_1 \lor \bar{a} \lor \bar{b})$ where $a, b$ are new variables. This is satisfiable iff $l_1$ is true.
- Clause $(l_1 \lor l_2)$ (2 literals): replace with $(l_1 \lor l_2 \lor a) \land (l_1 \lor l_2 \lor \bar{a})$ where $a$ is new. Satisfiable iff $l_1 \lor l_2$ is true.
- Clause $(l_1 \lor l_2 \lor l_3)$: leave as is.
- Clause $(l_1 \lor \cdots \lor l_k)$ for $k \gt{} 3$: replace with $(l_1 \lor l_2 \lor z_1) \land (\bar{z}_1 \lor l_3 \lor z_2) \land \cdots \land (\bar{z}_{k-4} \lor l_{k-1} \lor l_k)$ where $z_i$ are new variables. Satisfiable iff the original clause is satisfiable.

Each transformation is polynomial-size and preserves satisfiability. $\blacksquare$

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$, is there a vertex cover of size $\leq k$?

**Theorem 6.5b.** 3-SAT $\leq_p$ Vertex Cover.

*Proof (sketch).* Given a 3-CNF formula $\phi$ with $k$ clauses and $n$ variables, construct a graph $G$:

1. For each variable $x_i$, create a **variable gadget**: two vertices $x_i$ and $\bar{x}_i$ connected by an edge. Selecting $x_i$ into the cover corresponds to setting $x_i$ to true (removing $\bar{x}_i$ from consideration).
2. For each clause $C_j = (l_a \lor l_b \lor l_c)$, create a **clause gadget**: a triangle of three vertices connected to the corresponding literal vertices in the variable gadgets.
3. Set the target: $k' = n + 2k$.

The cover must include at least one endpoint of each variable-gadget edge ($n$ vertices) and at
least two vertices from each clause triangle ($2k$ vertices). Selecting a literal vertex in the
cover removes it from clause consideration; the remaining two triangle vertices must be in the
cover. The formula is satisfiable iff we can choose literal vertices such that each clause triangle
has at most one vertex already excluded. $\blacksquare$

**Clique.** Given $G = (V, E)$ and integer $k$, does $G$ contain a clique of size $k$?

**Reduction:** Vertex Cover $\leq_p$ Clique. $G = (V, E)$ has a vertex cover of size $k$ iff
$\overline{G} = (V, \overline{E})$ has a clique of size $|V| - k$.

*Proof.* If $C \subseteq V$ is a vertex cover of size $k$ in $G$, then every edge of $G$ has at
least one endpoint in $C$. So $V \setminus C$ is an independent set in $G$, meaning every pair in
$V \setminus C$ is an edge in $\overline{G}$. Hence $\overline{G}$ has a clique of size $|V| - k$.
The converse is analogous. $\blacksquare$

**Hamiltonian Path.** Given a graph $G = (V, E)$, does $G$ have a path visiting every vertex exactly
once?

**Theorem 6.5c.** Vertex Cover $\leq_p$ Hamiltonian Path (via Hamiltonian Cycle).

*Proof (sketch).* Given $(G, k)$ for Vertex Cover, construct a graph $G'$ such that $G$ has a
vertex cover of size $k$ iff $G'$ has a Hamiltonian cycle. The construction uses selection gadgets
that choose $k$ vertices (the cover), verification gadgets that check every edge is covered, and
connecting gadgets that string the selections together into a single cycle. The construction is
polynomial. $\blacksquare$

**Subset Sum.** Given integers $S = \{s_1, \ldots, s_n\}$ and target $T$, is there a subset summing
to $T$?

**Theorem 6.5d.** 3-SAT $\leq_p$ Subset Sum.

*Proof (sketch).* Given a 3-CNF formula with variables $x_1, \ldots, x_n$ and clauses
$C_1, \ldots, C_k$, construct a set of numbers $S$ and target $T$ in decimal.

For each variable $x_i$, create two numbers $v_i$ and $\bar{v}_i$. In the "variable digits"
(first $n$ columns), $v_i$ has a `1` in column $i$ and `0` elsewhere; $\bar{v}_i$ also has a
`1` in column $i$ and `0` elsewhere. This forces choosing exactly one of $v_i, \bar{v}_i$.

For each clause $C_j$, add a "clause digit" (column $n + j$): in $v_i$ (resp. $\bar{v}_i$),
this digit is `1` iff $x_i$ (resp. $\bar{x}_i$) appears in $C_j$. The target $T$ has `1` in
every digit. Choosing $v_i$ or $\bar{v}_i$ contributes to satisfying the clauses that contain
that literal. $\blacksquare$

**Partition.** Given integers $S = \{s_1, \ldots, s_n\}$, can $S$ be partitioned into two subsets of
equal sum?

**Reduction chain:**

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{VertexCover} \to \mathrm{Clique}$$

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{HamiltonianPath}$$

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{SubsetSum} \to \mathrm{Partition}$$

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{SubsetSum} \to \mathrm{Partition}$$

<details>
<summary>Worked Example: Reducing 3-SAT to Independent Set</summary>

Given a 3-CNF formula $\phi$ with $k$ clauses, construct a graph $G$:

1. For each clause $C_j$, create a group of 3 vertices (one per literal).
2. Within each group, add all three edges (forming a triangle) — at most one vertex per group
   can be in an independent set.
3. For each pair of contradictory literals ($x_i$ and $\bar{x}_i$) in different groups, add an
   edge — they cannot both be selected.

Set the target to $k$ (one vertex per clause). An independent set of size $k$ exists iff $\phi$
is satisfiable: selecting one literal per clause without contradiction gives a consistent
satisfying assignment. $\blacksquare$

</details>

### 6.6 Space Complexity

**Definition.** $\mathrm{SPACE}(s(n))$ is the class of languages decidable by a deterministic TM
using $O(s(n))$ tape cells. $\mathrm{NSPACE}(s(n))$ is the nondeterministic analogue.

**Key classes:**

- $\mathrm{L} = \mathrm{SPACE}(\log n)$ — logarithmic space.
- $\mathrm{NL} = \mathrm{NSPACE}(\log n)$ — nondeterministic logarithmic space.
- $\mathrm{PSPACE} = \bigcup_{k \geq 1} \mathrm{SPACE}(n^k)$.

**Theorem 6.6 (Savitch, 1970).** $\mathrm{NSPACE}(s(n)) \subseteq \mathrm{SPACE}(s(n)^2)$
for $s(n) \geq \log n$.

*Proof (sketch).* To decide whether an NTM using space $s(n)$ accepts, we check reachability in the
configuration graph. The graph has at most $N = |\Gamma|^{s(n)} \cdot s(n) \cdot |Q|$ nodes, where
$|\Gamma|$ is the tape alphabet size and $|Q|$ the number of states. A deterministic TM can decide
reachability using the recursive algorithm $\mathrm{REACH}(u, v, d)$ (can $u$ reach $v$ in at most
$d$ steps?), which uses $O(\log N) = O(s(n))$ space and recurses to depth $O(\log N)$. Total space:
$O(s(n) \cdot \log N) = O(s(n)^2)$. $\blacksquare$

**Corollary 6.7.** $\mathrm{PSPACE} = \mathrm{NPSPACE}$.

*Proof.* $\mathrm{NPSPACE} \subseteq \bigcup_k \mathrm{NSPACE}(n^k) \subseteq \bigcup_k \mathrm{SPACE}(n^{2k}) = \mathrm{PSPACE}$ by Savitch's theorem. $\blacksquare$

**NL-completeness.** A language $B$ is **NL-complete** if $B \in \mathrm{NL}$ and every
$A \in \mathrm{NL}$ is log-space reducible to $B$.

**Theorem 6.8 (Immerman--Szelepcsényi, 1987).** $\mathrm{NL} = \mathrm{coNL}$.

This is surprising because it is not known whether $\mathrm{NP} = \mathrm{coNP}$. The proof uses
an inductive counting argument: given an NTM for $L$, construct an NTM for $\overline{L}$ that
counts the number of reachable configurations.

**PSPACE-completeness.** A language is PSPACE-complete if it is in PSPACE and every PSPACE problem
reduces to it. Key PSPACE-complete problems:

- **TQBF (True Quantified Boolean Formula):** Given a fully quantified Boolean formula
  $\phi = Q_1 x_1 Q_2 x_2 \cdots Q_n x_n \, \psi(x_1, \ldots, x_n)$ where $Q_i \in \{\forall, \exists\}$
  and $\psi$ is a CNF formula, is $\phi$ true?

**Theorem 6.9.** TQBF is PSPACE-complete.

*Proof (membership).* Evaluate the quantifiers recursively. For $\exists x_i \phi$, try both values
of $x_i$ and recurse. For $\forall x_i \phi$, similarly. At depth $n$, evaluate $\psi$. Each level
uses $O(n)$ space to store the current assignment, giving $O(n^2)$ total.

*Proof (hardness).* Reduce from any $L \in \mathrm{PSPACE}$ using the configuration graph. A
computation of a PSPACE TM on input $w$ of length $n$ uses at most $p(n)$ cells for some
polynomial $p$. The number of distinct configurations is at most $N = |\Gamma|^{p(n)} \cdot p(n) \cdot |Q|$,
which is exponential. The statement "$M$ accepts $w$" can be expressed as: "there exists a
configuration $c_1$ reachable from the start configuration in $\leq N$ steps such that for all
configurations $c_2$ reachable from $c_1$ in one step, there exists a configuration $c_3$..."
This alternating reachability formula can be encoded as a quantified Boolean formula of
polynomial size. $\blacksquare$

<details>
<summary>Worked Example: Evaluating a QBF formula</summary>

Evaluate $\phi = \forall x \exists y \, [(x \lor y) \land (\bar{x} \lor y)]$.

- For $x = 0$: need $\exists y$ such that $(0 \lor y) \land (1 \lor y) = y \land \mathrm{true} = y$.
  So we need $y = 1$ (which exists).
- For $x = 1$: need $\exists y$ such that $(1 \lor y) \land (0 \lor y) = \mathrm{true} \land y = y$.
  So we need $y = 1$ (which exists).

Since both values of $x$ lead to a satisfying assignment for $y$, $\phi$ is true.

</details>

### 6.7 The Polynomial Hierarchy

The **polynomial hierarchy (PH)** generalises the notions of NP and coNP through alternating
quantifiers.

**Definition.** Define the classes $\Sigma_k^P$ and $\Pi_k^P$ inductively:

- $\Sigma_0^P = \Pi_0^P = \mathrm{P}$.
- $\Sigma_{k+1}^P = \mathrm{NP}^{\Sigma_k^P}$ (NP with a $\Sigma_k^P$ oracle).
- $\Pi_{k+1}^P} = \mathrm{coNP}^{\Sigma_k^P}$ (coNP with a $\Sigma_k^P$ oracle).
- $\mathrm{PH} = \bigcup_{k \geq 0} \Sigma_k^P$.

**Equivalent characterisation.** A language $L$ is in $\Sigma_k^P$ iff there exist polynomial-time
computable relations $R$ and polynomials $p$ such that:

$$L = \{x : \exists y_1 \forall y_2 \exists y_3 \cdots Q_k y_k \, R(x, y_1, \ldots, y_k)\}$$

where each $|y_i| \leq p(|x|)$ and the quantifiers alternate, starting with $\exists$.

**Examples:**

- $\Sigma_1^P = \mathrm{NP}$: "there exists a certificate."
- $\Pi_1^P = \mathrm{coNP}$: "for all certificates."
- $\Sigma_2^P$ contains problems like "does there exist a strategy for player 1 such that for all
  strategies of player 2, player 1 wins?" (for polynomial-size games).
- $\Pi_2^P$ contains the complement of such problems.

**Relationships:**

$$\mathrm{P} \subseteq \mathrm{NP} \subseteq \Sigma_2^P \subseteq \Sigma_3^P \subseteq \cdots \subseteq \mathrm{PH} \subseteq \mathrm{PSPACE}$$

**Theorem 6.10.** If $\Sigma_k^P = \Sigma_{k+1}^P$ for some $k$, then $\mathrm{PH} = \Sigma_k^P$
(the polynomial hierarchy collapses to level $k$).

*Proof.* If $\Sigma_k^P = \Sigma_{k+1}^P = \mathrm{NP}^{\Sigma_k^P}$, then the $\Sigma_k^P$ oracle
provides no additional power. By induction, $\Sigma_{k+i}^P = \Sigma_k^P$ for all $i \geq 0$,
so $\mathrm{PH} = \Sigma_k^P$. $\blacksquare$

It is widely believed that $\mathrm{PH}$ does not collapse.

### 6.8 Beyond NP

**coNP.** The class of languages whose complements are in NP. A problem is in coNP if every "no"
instance has a polynomial-time verifiable certificate.

- Example: "Is this formula a tautology?" (the certificate for "no" would be a failing assignment).
- $\mathrm{P} \subseteq \mathrm{NP} \cap \mathrm{coNP}$.
- It is unknown whether $\mathrm{NP} = \mathrm{coNP}$. If $\mathrm{P} = \mathrm{NP}$, then
  $\mathrm{NP} = \mathrm{coNP}$.

**Theorem 6.11.** If $\mathrm{NP} \neq \mathrm{coNP}$, then $\mathrm{P} \neq \mathrm{NP}$.

*Proof.* If $\mathrm{P} = \mathrm{NP}$, then $\mathrm{P} = \mathrm{coNP}$ (since $\mathrm{P}$
is closed under complement), so $\mathrm{NP} = \mathrm{coNP}$. The contrapositive gives the
result. $\blacksquare$

**PSPACE.** The class of languages decidable in polynomial space:

$$\mathrm{PSPACE} = \bigcup_{k \geq 1} \mathrm{SPACE}(n^k)$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE}$.
- $\mathrm{P} \neq \mathrm{PSPACE}$ (space hierarchy theorem).
- PSPACE-complete problems: TQBF, generalised geography, determining the winner of a position
  in certain games.

**EXPTIME.** The class of languages decidable in exponential time:

$$\mathrm{EXPTIME} = \bigcup_{k \geq 1} \mathrm{TIME}(2^{n^k})$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXPTIME}$.
- $\mathrm{P} \neq \mathrm{EXPTIME}$ (time hierarchy theorem).
- EXPTIME-complete problems: Generalised chess, Go (on sufficiently large boards), determining the
  winner of a two-player game with exponential game tree.

**Hierarchy summary:**

$$\mathrm{Regular} \subsetneq \mathrm{CFL} \subsetneq \mathrm{Decidable} \subsetneq \mathrm{TM\mathrm{-}recognisable}$$

$$\mathrm{L} \subseteq \mathrm{NL} \subseteq \mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXPTIME}$$

$$\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PH} \subseteq \mathrm{PSPACE}$$

| Inclusion            | Known to be proper? | Theorem used        |
| ------------------- | ------------------- | ------------------- |
| $\mathrm{Regular} \subseteq \mathrm{CFL}$ | Yes | Pumping lemma |
| $\mathrm{CFL} \subseteq \mathrm{Decidable}$ | Yes | CYK algorithm |
| $\mathrm{Decidable} \subseteq \mathrm{TM}\mathrm{-recognisable}$ | Yes | Diagonalisation |
| $\mathrm{P} \subseteq \mathrm{EXPTIME}$ | Yes | Time hierarchy |
| $\mathrm{P} \subseteq \mathrm{PSPACE}$ | Yes | Space hierarchy |
| $\mathrm{NP} \subseteq \mathrm{PSPACE}$ | Yes | Savitch's corollary |
| $\mathrm{L} \subseteq \mathrm{NL}$ | Unknown | |
| $\mathrm{P} \subseteq \mathrm{NP}$ | Unknown | Open problem |
| $\mathrm{NP} \subseteq \mathrm{coNP}$ | Unknown | Open problem |

Both inclusions $\mathrm{P} \subseteq \mathrm{NP}$ and $\mathrm{NP} \subseteq \mathrm{PSPACE}$ are
known to be proper ($\mathrm{P} \neq \mathrm{PSPACE}$), but the status of $\mathrm{P}$ vs.
$\mathrm{NP}$ remains open.

:::caution Common Pitfall
NP-completeness refers to **decision** problems. The optimisation versions (e.g., "find the shortest
tour") are NP-hard, not necessarily NP-complete. Also, "NP" stands for "Nondeterministic Polynomial
time," not "Not Polynomial time." Every problem in NP is verifiable in polynomial time; whether all
such problems are solvable in polynomial time is the P vs. NP question. A common error is confusing
"NP-hard" with "NP-complete": NP-hard means at least as hard as all NP problems, but the problem
itself might not be in NP (e.g., the halting problem is NP-hard but undecidable).
:::

## 7. Problem Set

### 7.1 Regular Languages

**Problem 1.** Construct a DFA over $\Sigma = \{0, 1\}$ that accepts exactly those strings whose
length is a multiple of 3. Prove your DFA is correct.

**Problem 2.** Let $L = \{w \in \{0,1\}^* : w \mathrm{ contains an even number of } 0\mathrm{s and
\mathrm{ ends with } 1\}$. Give a DFA with the minimum number of states for $L$.

**Problem 3.** Use the Myhill-Nerode theorem to prove that
$L = \{0^n 1^{2n} : n \geq 0\}$ is not regular.

**Problem 4.** Prove or disprove: if $L_1 \cdot L_2$ is regular, then both $L_1$ and $L_2$ are regular.

### 7.2 Context-Free Languages

**Problem 5.** Give a CFG for $L = \{a^i b^j c^k : i + j = k\}$. Prove your grammar generates
exactly this language.

**Problem 6.** Convert the following grammar to CNF:
$S \to aSbS \mid \varepsilon$. Show all steps of the conversion.

**Problem 7.** Use the CFL pumping lemma to prove that
$L = \{a^i b^j a^i b^j : i, j \geq 1\}$ is not context-free.

**Problem 8.** Construct a PDA for $L = \{a^n b^m : n \leq 2m\}$. Give the formal definition
of the PDA and explain why it is correct.

### 7.3 Turing Machines and Decidability

**Problem 9.** Design a TM that decides the language
$L = \{0^{2^n} : n \geq 0\}$. Describe the algorithm and prove it always halts.

**Problem 10.** Prove that the language
$L = \{\langle M_1, M_2 \rangle : L(M_1) \cap L(M_2) \neq \emptyset\}$ is undecidable.

**Problem 11.** Use Rice's theorem to prove that
$L = \{\langle M \rangle : L(M) \mathrm{ contains at least two strings}\}$ is undecidable.
Explain why Rice's theorem applies.

**Problem 12.** Show that the PCP instance with $\alpha = (01, 0, 1)$ and $\beta = (0, 10, 01)$
has a solution by finding one, or prove it has no solution.

### 7.4 Complexity Theory

**Problem 13.** Show that if $\mathrm{P} = \mathrm{NP}$, then $\mathrm{NP} = \mathrm{coNP}$.

**Problem 14.** A **3-colouring** of a graph $G = (V, E)$ is a function $c : V \to \{1, 2, 3\}$
such that $c(u) \neq c(v)$ for every edge $(u, v) \in E$. Show that 3-SAT $\leq_p$ 3-Colouring
by describing the reduction construction.

**Problem 15.** Prove that $\mathrm{CLIQUE}$ is self-reducible: given an oracle for
$\mathrm{CLIQUE}$, describe a polynomial-time algorithm to find an actual clique of size $k$
(if one exists).

**Problem 16.** Using Savitch's theorem, prove that $\mathrm{NL} \subseteq \mathrm{P}$.
What is the time complexity of your algorithm?

**Problem 17.** Define the language $\mathrm{EXACT}\mathrm{-CLIQUE} = \{\langle G, k \rangle : G$
$\mathrm{ has a clique of exactly size } k\}$. Show that $\mathrm{EXACT}\mathrm{-CLIQUE}$ is
NP-complete.

**Problem 18.** A language $L$ is in **DP** (difference of two NP sets) if there exist
$L_1, L_2 \in \mathrm{NP}$ such that $L = L_1 \cap \overline{L_2}$. Show that
$\mathrm{SAT}\mathrm{-UNSAT} = \{\langle \phi, \psi \rangle : \phi \in \mathrm{SAT} \mathrm{ and }
\psi \notin \mathrm{SAT}\}$ is in DP. Is DP contained in $\Sigma_2^P$? Justify.

### 7.5 Comprehensive

**Problem 19.** Consider the language $L = \{w \# w : w \in \{0,1\}^*\}$.
(a) Prove $L$ is not regular using the pumping lemma.
(b) Give a CFG for $L$ and prove it is correct.
(c) Is $L$ decidable? Justify.

**Problem 20.** For each of the following languages, state the smallest complexity class
(from $\mathrm{Regular}$, $\mathrm{CFL}$, $\mathrm{Decidable}$, $\mathrm{NP}$,
$\mathrm{PSPACE}$, $\mathrm{EXPTIME}$, or "undecidable") that is known to contain it.
Justify each answer briefly.

(a) $\{0^n 1^n 0^n : n \geq 0\}$
(b) $\{\langle G \rangle : G \mathrm{ has a Hamiltonian cycle}\}$
(c) $\{\langle G, k \rangle : G \mathrm{ has a vertex cover of size } \leq k\}$
(d) $\{\langle M \rangle : M \mathrm{ runs for at most } 100 \mathrm{ steps on } \varepsilon\}$
(e) $\{\langle \phi \rangle : \phi \mathrm{ is a true quantified Boolean formula}\}$

### 7.6 Selected Solutions and Hints

**Problem 1.** States $q_0, q_1, q_2$ with transitions $\delta(q_i, a) = q_{(i+1) \bmod 3}$ for
all $a \in \{0, 1\}$. Accept state: $q_0$. Proof by induction on the number of symbols read.

**Problem 3.** The strings $0^1, 0^2, 0^3, \ldots$ are pairwise distinguishable: for $i \lt{} j$,
the suffix $1^{2i}$ distinguishes $0^i$ from $0^j$ since $0^i 1^{2i} \in L$ but
$0^j 1^{2i} \notin L$ (because $2i \neq 2j$).

**Problem 4.** Disproof: let $L_1 = \{0^n 1^n : n \geq 0\}$ (not regular) and $L_2 = \emptyset$
(regular). Then $L_1 \cdot L_2 = \emptyset$ is regular, but $L_1$ is not.

**Problem 7.** Let $w = a^p b^p a^p b^p$ with pumping length $p$. Since $|vxy| \leq p$, the
substring $vxy$ cannot span all four blocks. Case analysis shows that pumping any valid
decomposition produces a string not in $L$.

**Problem 10.** Reduce from $E_{\mathrm{TM}}$. Given $\langle M \rangle$, construct two TMs
$M_1$ (accepts $\varepsilon$ only) and $M_2$ (accepts what $M$ accepts). Then
$L(M_1) \cap L(M_2) \neq \emptyset$ iff $M$ accepts $\varepsilon$ iff
$\langle M \rangle \notin E_{\mathrm{TM}}$ (after adjusting for the specific reduction).

**Problem 13.** If $\mathrm{P} = \mathrm{NP}$, then for any $L \in \mathrm{NP}$, we have
$L \in \mathrm{P}$. Since $\mathrm{P}$ is closed under complement, $\overline{L} \in \mathrm{P}
\subseteq \mathrm{NP}$. So $\overline{L} \in \mathrm{NP}$ for every $L \in \mathrm{NP}$, meaning
$\mathrm{NP} \subseteq \mathrm{coNP}$. By symmetry, $\mathrm{coNP} \subseteq \mathrm{NP}$.

**Problem 19.**
(a) Let $w = 0^p 1^p \# 0^p 1^p \in L$. Since $|xy| \leq p$, $y$ is in the first $0^p$ block.
Pumping down gives $0^{p-k}1^p\#0^p1^p \notin L$.
(b) $S \to 0S0 \mid 1S1 \mid S\#S \mid \varepsilon$ (generate matched pairs on both sides of $\#$).
(c) Yes — a TM can check the $\#$ symbol and verify both halves are reverses of each other.

**Problem 20.**
(a) Decidable but not CFL (pumping lemma for CFLs).
(b) NP-complete (Hamiltonian cycle is NP-complete).
(c) NP-complete (vertex cover is NP-complete).
(d) Decidable (in fact, in P — simulate for 100 steps).
(e) PSPACE-complete (TQBF is PSPACE-complete).
