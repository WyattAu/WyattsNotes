---
title: Regular Languages
tags:
  - Computing
  - University
---

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
Symbol, and $\varepsilon$-transitions (transitions without consuming input). Formally,
$\delta : Q \times (\Sigma \cup \{\varepsilon\}) \to \mathcal{P}(Q)$.

$M$ accepts $w$ if there exists some path of transitions consuming $w$ that ends in a state in $F$.

<details>
<summary>Worked Example: DFA for binary numbers divisible by 3</summary>

Design a DFA over $\Sigma = \{0, 1\}$ that accepts exactly those strings (interpreted as binary
Numbers, most significant bit first) that are divisible by 3.

We track the value of the number read so far, modulo 3. After reading prefix $x$Let $r = x \bmod 3$.
Reading a new bit $b$ appends $b$ to the right: the new value is $2r + b \bmod 3$.

States: $q_0$ (remainder 0), $q_1$ (remainder 1), $q_2$ (remainder 2). Start state: $q_0$ (the empty
prefix has value 0). Accept state: $q_0$.

$$M = (\{q_0, q_1, q_2\}, \{0, 1\}, \delta, q_0, \{q_0\})$$

| State | $\delta(\cdot, 0)$ | $\delta(\cdot, 1)$ |
| ----- | ------------------ | ------------------ |
| $q_0$ | $q_0$              | $q_1$              |
| $q_1$ | $q_2$              | $q_0$              |
| $q_2$ | $q_1$              | $q_2$              |

_Correctness._ By induction on input length. Base: $x = \varepsilon$,
$\mathrm{val}(\varepsilon) = 0$ DFA is in $q_0$. Step: if after $x$ the DFA is in $q_r$ (where
$r = \mathrm{val}(x) \bmod 3$), Then reading $b$ moves to $q_{(2r+b) \bmod 3}$Which equals
$q_{\mathrm{val}(xb) \bmod 3}$. $\blacksquare$

</details>

<details>
<summary>Worked Example: NFA for strings ending in `01`</summary>

Construct an NFA over $\{0, 1\}$ that accepts strings ending in the substring `01`.

States: $q_0$ (start), $q_1$ (have seen a `0`), $q_2$ (accept, have seen `01`).

| State | $\delta(\cdot, 0)$ | $\delta(\cdot, 1)$ |
| ----- | ------------------ | ------------------ |
| $q_0$ | $\{q_0, q_1\}$     | $\{q_0\}$          |
| $q_1$ | $\emptyset$        | $\{q_2\}$          |
| $q_2$ | $\{q_1\}$          | $\emptyset$        |

Accept: $\{q_2\}$. The NFA is nondeterministic because from $q_0$ on input `0`It can either stay In
$q_0$ or move to $q_1$.

</details>

### 2.2 Equivalence of DFA and NFA

**Theorem 2.1.** For every NFA $N$There exists a DFA $D$ such that $L(N) = L(D)$.

_Proof (subset construction)._ Given NFA $N = (Q, \Sigma, \delta, q_0, F)$Construct DFA
$D = (Q', \Sigma, \delta', q_0', F')$ where:

- $Q' = \mathcal{P}(Q)$ (each state of $D$ is a subset of states of $N$).
- $q_0' = \varepsilon\mathrm{-closure(\{q_0\})}$.
- $\delta'(S, a) = \varepsilon\mathrm{-closure(\bigcup_{q \in S} \delta(q, a))}$ for $S \subseteq Q$
  $a \in \Sigma$.
- $F' = \{S \subseteq Q : S \cap F \neq \emptyset\}$.

Every string accepted by $N$ has some path through $N$'s states. The subset construction tracks
**all** Possible states $N$ could be in after reading each symbol. $D$ accepts exactly when at least
one Possibility in $N$ leads to acceptance. $\blacksquare$

**Corollary 2.2.** NFA, DFA, and NFA with $\varepsilon$-transitions all recognise exactly the class
of Regular languages.

<details>
<summary>Worked Example: Subset construction (NFA to DFA)</summary>

Convert the NFA from the "strings ending in `01`" example to a DFA via the subset construction.

NFA states: $\{q_0, q_1, q_2\}$, $\Sigma = \{0, 1\}$, $F = \{q_2\}$No $\varepsilon$-transitions.

Start state: $\{q_0\}$.

| DFA State      | $\delta'(\cdot, 0)$ | $\delta'(\cdot, 1)$ | Accept? |
| -------------- | ------------------- | ------------------- | ------- |
| $\{q_0\}$      | $\{q_0, q_1\}$      | $\{q_0\}$           | No      |
| $\{q_0, q_1\}$ | $\{q_0, q_1\}$      | $\{q_0, q_2\}$      | No      |
| $\{q_0, q_2\}$ | $\{q_0, q_1\}$      | $\{q_0\}$           | Yes     |

The DFA has 3 reachable states. $\{q_1\}$, $\{q_2\}$And $\{q_1, q_2\}$ are unreachable.

</details>

### 2.3 Regular Expressions

**Definition.** Regular expressions over $\Sigma$ are defined inductively:

1. $\emptyset$ (empty set), $\varepsilon$ (empty string), and $a$ for each $a \in \Sigma$ are regex.
2. If $R_1$ and $R_2$ are regex, then $(R_1 \cup R_2)$, $(R_1 \cdot R_2)$And $(R_1^*)$ are regex.
3. Nothing else is a regex.

**Shorthand:** $R^+$ means $R \cdot R^*$. $R?$ means $(R \cup \varepsilon)$.

**Examples:**

- $(0 \cup 1)^* 00 (0 \cup 1)^*$: strings containing `00`.
- $1^* 01^* 01^*$: strings with exactly two `0`S.
- $(0 \cup 1)^*$: all strings over $\{0, 1\}$.
- $\emptyset$: the empty language.

**Regex identities.** The following algebraic laws hold for regular expressions and can be used To
simplify or reason about them:

| Identity                                            | Description                    |
| --------------------------------------------------- | ------------------------------ |
| $\emptyset \cdot R = R \cdot \emptyset = \emptyset$ | Annihilator for concatenation  |
| $\varepsilon \cdot R = R \cdot \varepsilon = R$     | Identity for concatenation     |
| $\emptyset \cup R = R \cup \emptyset = R$           | Identity for union             |
| $\emptyset^* = \varepsilon$                         | Kleene star of empty set       |
| $\varepsilon^* = \varepsilon$                       | Kleene star of empty string    |
| $(R^*)^* = R^*$                                     | Idempotence of Kleene star     |
| $R \cdot (S \cdot T) = (R \cdot S) \cdot T$         | Associativity of concatenation |
| $R \cup S = S \cup R$                               | Commutativity of union         |
| $R \cup (S \cup T) = (R \cup S) \cup T$             | Associativity of union         |
| $R \cup R = R$                                      | Idempotence of union           |
| $R(S \cup T) = RS \cup RT$                          | Distributivity                 |

These identities can be used to prove that two regex describe the same language, analogous to
Simplifying algebraic expressions. Two regex $R_1$ and $R_2$ are equivalent (written
$R_1 \equiv R_2$) If $L(R_1) = L(R_2)$.

### 2.4 Equivalence of Regular Expressions and Finite Automata

**Theorem 2.3 (Kleene).** A language is regular if and only if it is described by some regular
Expression.

_Proof (sketch)._

**Regex to NFA:** Induction on the structure of the regex.

- Base cases: $\emptyset$, $\varepsilon$, $a$ each have trivial NFAs.
- Union: Combine two NFAs with a new start state and $\varepsilon$-transitions to each.
- Concatenation: Connect the accept states of the first NFA to the start state of the second via
  $\varepsilon$-transitions.
- Kleene star: Add $\varepsilon$-transitions from a new start state to the NFA's start and from the
  NFA's accept states back to the start state.

**NFA to regex:** State elimination. Systematically eliminate states of the NFA one at a time,
Updating the transition labels (which are regex) between remaining states. The final label from
start To accept is the equivalent regex. $\blacksquare$

**Thompson's construction.** The regex-to-NFA translation can be made fully explicit. For each
Sub-expression of the regex, we build a small NFA fragment with exactly one entry and one exit
State, connected by $\varepsilon$-transitions. The construction guarantees that the NFA has at most
One accept state, no transitions into the start state, and no transitions out of the accept state.

**Theorem 2.3a (Thompson's construction correctness).** For every regular expression $R$ over
$\Sigma$Thompson's construction produces an NFA $N_R$ with $L(N_R) = L(R)$And $N_R$ has $O(|R|)$
States and transitions.

_Proof._ By structural induction on $R$.

- **Base cases:**
- $R = \emptyset$: $N_R$ has a start state and an accept state with no transitions.
  $L(N_R) = \emptyset = L(\emptyset)$.
- $R = \varepsilon$: $N_R$ has a start state, an accept state, and an $\varepsilon$-transition
  between them. $L(N_R) = \{\varepsilon\} = L(\varepsilon)$.
- $R = a$ for $a \in \Sigma$: $N_R$ has a start state, an accept state, and a transition on $a$.
  $L(N_R) = \{a\} = L(a)$.

- **Inductive cases:**
- $R = R_1 \cup R_2$: By IH, $L(N_{R_1}) = L(R_1)$ and $L(N_{R_2}) = L(R_2)$. Thompson adds a new
  start $s$ and accept $f$ with $\varepsilon$-transitions to the start states of $N_{R_1}$ and
  $N_{R_2}$And $\varepsilon$-transitions from their accept states to $f$. Any accepting path goes
  through exactly one sub-NFA, so $L(N_R) = L(R_1) \cup L(R_2) = L(R)$.
- $R = R_1 \cdot R_2$: Thompson connects the accept state of $N_{R_1}$ to the start state of
  $N_{R_2}$ via $\varepsilon$-transitions. A string $w \in L(N_R)$ iff $w = w_1 w_2$ where
  $w_1 \in L(N_{R_1})$ and $w_2 \in L(N_{R_2})$I.e., $w \in L(R_1) \cdot L(R_2) = L(R)$.
- $R = R_1^*$: Thompson adds a new start $s$ and accept $f$With $\varepsilon$-transitions from $s$
  to $f$ (allowing zero repetitions) and from $s$ to the start of $N_{R_1}$And from the accept of
  $N_{R_1}$ back to $s$. Any accepting path corresponds to zero or more traversals of $N_{R_1}$So
  $L(N_R) = L(R_1)^* = L(R)$.

In all cases, the number of states added is a constant per operator, so $|N_R| = O(|R|)$.
$\blacksquare$

### 2.5 DFA Minimisation and the Myhill-Nerode Theorem

**Theorem 2.4 (Myhill-Nerode).** The following are equivalent for a language $L$:

1. $L$ is regular.
2. The Myhill-Nerode equivalence relation has finitely many equivalence classes.
3. $L$ is the union of some of the equivalence classes.

**Definition.** Two strings $x, y$ are **distinguishable** with respect to $L$ if there exists $z$
Such that exactly one of $xz, yz$ is in $L$. The **Myhill-Nerode equivalence** $\equiv_L$ is:
$x \equiv_L y$ iff $x$ and $y$ are not distinguishable.

_Proof of Theorem 2.4._

**(1) $\Rightarrow$ (2):** Let $D = (Q, \Sigma, \delta, q_0, F)$ be a DFA for $L$. Define $x \sim y$
iff $\delta^*(q_0, x) = \delta^*(q_0, y)$ (i.e., $D$ reaches the same state on $x$ and $y$). Then
$\sim$ has at most $|Q|$ equivalence classes. We show $\sim = \equiv_L$. If $x \sim y$Then for All
$z$, $\delta^*(q_0, xz) = \delta^*(q_0, yz)$So $xz \in L$ iff $yz \in L$Meaning $x \equiv_L y$.
Conversely, if $x \not\equiv_L y$There exists $z$ with $xz \in L$ and $yz \notin L$ (or vice versa),
so $\delta^*(q_0, xz) \neq \delta^*(q_0, yz)$Hence $x \not\sim y$.

**(2) $\Rightarrow$ (3):** Trivial, since $L$ consists of all strings whose equivalence class is one
That contains at least one string in $L$.

**(3) $\Rightarrow$ (1):** Suppose $\equiv_L$ has finitely many equivalence classes
$C_1, \ldots, C_k$. Construct a DFA with one state per equivalence class, start state
$[x]_{\equiv_L}$ for $x = \varepsilon$ Transition $\delta'([x], a) = [xa]$And accept states = those
classes contained in $L$. This DFA is Well-defined because $\equiv_L$ is a right congruence: if
$x \equiv_L y$Then $xa \equiv_L ya$ for all $a \in \Sigma$. $\blacksquare$

<details>
<summary>Worked Example: Myhill-Nerode classes for $L = \{0^n 1^n : n \geq 0\}$</summary>

We show $L$ is not regular by exhibiting infinitely many pairwise distinguishable strings.

Claim: the strings $0^0, 0^1, 0^2, 0^3, \ldots$ are pairwise distinguishable with respect to $L$.

_Proof._ For $i \neq j$ with $i \lt j$Consider the suffix $z = 1^i$. Then:

- $0^i \cdot 1^i = 0^i 1^i \in L$.
- $0^j \cdot 1^i = 0^j 1^i \notin L$ (since $j \gt i$).

Therefore $0^i \not\equiv_L 0^j$. Since there are infinitely many such strings, $\equiv_L$ has
Infinitely many equivalence classes, so $L$ is not regular by the Myhill-Nerode theorem.
$\blacksquare$

This .../1-number-and-algebra/3_proof-and-logic technique is often cleaner than the pumping lemma,
as it avoids case analysis over Decompositions.

</details>

**Corollary 2.5.** The minimum-state DFA for $L$ has exactly as many states as there are Equivalence
classes of $\equiv_L$.

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
Length) such that for every string $w \in L$ with $|w| \geq p$, $w$ can be decomposed as $w = xyz$
satisfying:

1. $|y| \gt 0$ (the pumped part is non-empty).
2. $|xy| \leq p$ (the pumpable part is within the first $p$ symbols).
3. $xy^iz \in L$ for all $i \geq 0$.

_Proof._ Let $D$ be a DFA for $L$ with $n$ states. Set $p = n$. For any string $w$ of length
$\geq n$ The path through $D$ visits at least $n + 1$ states, so by the pigeonhole principle, some
state is Visited twice within the first $p$ symbols. The substring $y$ between the two visits can be
repeated Or removed ($xy^iz$) without affecting acceptance. $\blacksquare$

**Using the pumping lemma to prove non-regularity.** To show $L$ is not regular, assume it is, let
$p$ Be the pumping length, and exhibit a string $w \in L$ with $|w| \geq p$ such that **every**
Decomposition $w = xyz$ satisfying (1) and (2) has some $i$ with $xy^iz \notin L$.

**Example.** $L = \{0^n 1^n : n \geq 0\}$ is not regular.

_Proof._ Assume $L$ is regular with pumping length $p$. Let $w = 0^p 1^p \in L$. By (2),
$|xy| \leq p$So $y$ consists only of `0`S. Let $|y| = k \gt 0$. Then $xy^0 z = 0^{p-k} 1^p \notin L$
(since $p - k \neq p$). Contradiction. $\blacksquare$

**Example.** $L = \{ww : w \in \{0,1\}^*\}$ is not regular.

_Proof._ Assume pumping length $p$. Let $w = 0^p 1 0^p 1 \in L$. Since $|xy| \leq p$, $y = 0^k$ for
Some $k \gt 0$. Then $xy^0 z = 0^{p-k} 1 0^p 1 \notin L$ (the two halves have different lengths).
$\blacksquare$

**Example.** $L = \{0^n 1^m : n \neq m\}$ is not regular.

_Proof._ Assume $L$ is regular with pumping length $p$. Since regular languages are closed under
Complement, $\overline{L} = \{0^n 1^m : n = m\} \cup \{w : w \notin 0^* 1^*\}$ would also be
regular. Then $\overline{L} \cap 0^* 1^* = \{0^n 1^n : n \geq 0\}$ would be regular (since $0^* 1^*$
is regular And regular languages are closed under intersection). But $\{0^n 1^n : n \geq 0\}$ is not
regular — Contradiction. $\blacksquare$

<details>
<summary>Worked Example: Proving $\{w : n_0(w) = n_1(w)\}$ is not regular</summary>

Let $L = \{w \in \{0,1\}^* : n_0(w) = n_1(w)\}$.

_Proof._ Assume $L$ is regular with pumping length $p$. Let $w = 0^p 1^p \in L$. By (2),
$|xy| \leq p$So $y = 0^k$ for some $k \geq 1$. Then $xy^0z = 0^{p-k}1^p$Which has $p - k$ zeros and
$p$ ones. Since $k \geq 1$ $p - k \neq p$So $xy^0z \notin L$. Contradiction. $\blacksquare$

</details>

<details>
<summary>Worked Example: $L = \{a^{n!} : n \geq 0\}$ is not regular</summary>

_Proof._ Assume pumping length $p$. Let $w = a^{p!} \in L$ with $|w| = p! \geq p$. By (2),
$|xy| \leq p$So $y = a^k$ for some $1 \leq k \leq p$. Choose $i = (p! + k) / k = p!/k + 1$ (an
integer since $k \leq p$). Then $xy^iz = a^{p! + (i-1)k} = a^{p! + p!} = a^{2 \cdot p!}$. But
$2 \cdot p!$ is not a factorial for $p \geq 2$ (since $(p+1)! / (p!)^2 = (p+1)/p! \lt 1$ for
$p \geq 3$ And $2 \cdot 2! = 4 \neq n!$ for any $n$). Hence $xy^iz \notin L$. $\blacksquare$

</details>

:::caution Common Pitfall The pumping lemma says that **for every** decomposition satisfying (1) and
(2), **there exists** a Pumping that fails. To prove non-regularity, you must show that **all**
valid decompositions lead To a contradiction. A single decomposition that works is insufficient to
disprove the lemma. The converse of the pumping lemma is false: if a language satisfies the pumping
condition, it is Not necessarily regular.

### 2.7 Closure Properties of Regular Languages

Regular languages are closed under:

| Operation            | Proof technique                         |
| -------------------- | --------------------------------------- |
| Union                | NFA union construction                  |
| Intersection         | DFA product construction                |
| Complement           | Swap accepting and non-accepting states |
| Concatenation        | NFA concatenation construction          |
| Kleene star          | NFA star construction                   |
| Reversal             | Reverse all transitions, swap start/F   |
| Difference           | $A \cap \overline{B}$                   |
| Homomorphism         | Apply the homomorphism to each symbol   |
| Inverse homomorphism | Pre-image construction                  |

**Theorem 2.7 (Intersection via product construction).** If $L_1$ and $L_2$ are regular, then
$L_1 \cap L_2$ is regular.

_Proof._ Let $D_1 = (Q_1, \Sigma, \delta_1, q_1, F_1)$ and
$D_2 = (Q_2, \Sigma, \delta_2, q_2, F_2)$. Construct
$D = (Q_1 \times Q_2, \Sigma, \delta, (q_1, q_2), F_1 \times F_2)$ where
$\delta((r_1, r_2), a) = (\delta_1(r_1, a), \delta_2(r_2, a))$. Then $D$ accepts $w$ iff both $D_1$
and $D_2$ accept $w$I.e., $w \in L_1 \cap L_2$. $\blacksquare$

**Theorem 2.7.** If $L_1$ is regular and $L_2$ is not regular, then $L_1 \cap L_2$ may or may not be
Regular. Closure properties do not apply when one operand is non-regular.


:::
