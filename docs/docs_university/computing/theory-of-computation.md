---
title: Theory of Computation
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

### 2.5 DFA Minimisation

**Theorem 2.4 (Myhill-Nerode).** The following are equivalent for a language $L$:

1. $L$ is regular.
2. The Myhill-Nerode equivalence relation has finitely many equivalence classes.
3. $L$ is the union of some of the equivalence classes.

**Definition.** Two strings $x, y$ are **distinguishable** with respect to $L$ if there exists $z$
such that exactly one of $xz, yz$ is in $L$. The **Myhill-Nerode equivalence** $\equiv_L$ is:
$x \equiv_L y$ iff $x$ and $y$ are not distinguishable.

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

:::caution Common Pitfall
The pumping lemma says that **for every** decomposition satisfying (1) and (2), **there exists** a
pumping that fails. To prove non-regularity, you must show that **all** valid decompositions lead
to a contradiction. A single decomposition that works is insufficient to disprove the lemma.
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

**Inherent ambiguity.** A language is **inherently ambiguous** if every CFG generating it is ambiguous.

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

### 3.5 Equivalence of CFG and PDA

**Theorem 3.2.** A language is context-free if and only if some PDA recognises it.

*Proof (sketch).*

**CFG to PDA:** The PDA simulates a leftmost derivation. It maintains the current sentential form
on the stack. At each step, it pops a variable from the stack and pushes the right-hand side of a
production for that variable.

**PDA to CFG:** Given PDA $M$, construct a grammar whose variables encode pairs of states $(p, q)$
meaning "the PDA can go from state $p$ to state $q$, popping everything pushed onto the stack."
The productions simulate the PDA's transitions. $\blacksquare$

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

### 4.3 Church-Turing Thesis

**Theorem 4.3 (Church-Turing Thesis).** A function is computable (can be computed by any reasonable
model of computation) if and only if it is computable by a Turing machine.

This is a **thesis**, not a theorem -- it cannot be formally proved because "reasonable model" is not
formally defined. However, all proposed models of computation (lambda calculus, recursive functions,
Post systems, cellular automata, modern programming languages) have been shown equivalent to Turing
machines.

**Implication:** To show a problem is uncomputable, it suffices to show no TM can solve it.

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

## 6. Complexity Theory

### 6.1 Time Complexity

The **running time** of a deterministic TM $M$ on input $w$ is the number of steps $M$ takes before
halting. If $M$ never halts, the running time is $\infty$.

$M$ **runs in time $t(n)$** if for every input $w$ of length $n$, $M$ halts within $t(n)$ steps.

**Theorem 6.1.** Let $t(n)$ be a function with $t(n) \geq n$. Every TM that runs in time $t(n)$ has
an equivalent single-tape TM that runs in time $O(t^2(n))$.

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

**Theorem 6.2.** $\mathrm{P} \subseteq \mathrm{NP}$.

*Proof.* Every deterministic polynomial-time algorithm is a special case of a nondeterministic one
(with exactly one choice at each step). Alternatively, the certificate can be empty. $\blacksquare$

**Open question:** $\mathrm{P} = \mathrm{NP}$? This is the most important open problem in computer
science. Most researchers believe $\mathrm{P} \neq \mathrm{NP}$.

### 6.4 NP-Completeness

A language $B$ is **NP-complete** if:

1. $B \in \mathrm{NP}$, and
2. $A \leq_p B$ for every $A \in \mathrm{NP}$ (polynomial-time mapping reduction).

A language is **NP-hard** if condition (2) holds (it need not be in NP).

**Theorem 6.3 (Cook-Levin, 1971).** $\mathrm{SAT}$ is NP-complete.

*Proof (sketch).*

1. $\mathrm{SAT} \in \mathrm{NP}$: a satisfying assignment is a polynomial-size certificate that
   can be verified in polynomial time.
2. For any $L \in \mathrm{NP}$, there is a polynomial-time NTM $N$ that decides $L$. Given input $w$,
   construct a Boolean formula $\phi_{N,w}$ that is satisfiable iff $N$ accepts $w$.

   The formula encodes the tableau (table of configurations) of $N$ on $w$: a cell for each
   (time step, tape cell) pair. Constraints enforce:
   - The first row is the start configuration.
   - Each subsequent row follows from the previous by a valid transition.
   - Some row is an accepting configuration.

   These constraints are expressible as a polynomial-size CNF formula. $\blacksquare$

**Corollary 6.4.** If any NP-complete problem is in P, then P = NP.

**Theorem 6.5.** If $A \leq_p B$ and $B \in \mathrm{P}$, then $A \in \mathrm{P}$.

*Proof.* To decide $A$ on input $w$: compute $f(w)$ in polynomial time (the reduction), then decide
$B$ on $f(w)$ in polynomial time. Total: polynomial time. $\blacksquare$

### 6.5 Classic NP-Complete Problems

**3-SAT.** Given a CNF formula with exactly 3 literals per clause, is it satisfiable?

**Reduction:** SAT $\leq_p$ 3-SAT. Replace each clause with more or fewer than 3 literals by
equivalent clauses with exactly 3 literals using auxiliary variables.

**Vertex Cover.** Given a graph $G = (V, E)$ and integer $k$, is there a vertex cover of size $\leq k$?

*Reduction sketch:* 3-SAT $\leq_p$ Vertex Cover. Construct a graph with gadgets for each variable
and each clause. Variable gadgets force choosing true/false; clause gadgets enforce that at least one
literal is satisfied.

**Clique.** Given $G = (V, E)$ and integer $k$, does $G$ contain a clique of size $k$?

**Reduction:** Vertex Cover $\leq_p$ Clique. $\{V, E\}$ has a vertex cover of size $k$ iff
$\{V, \overline{E}\}$ (the complement graph) has a clique of size $|V| - k$.

**Hamiltonian Path.** Given a graph $G = (V, E)$, does $G$ have a path visiting every vertex exactly
once?

**Subset Sum.** Given integers $S = \{s_1, \ldots, s_n\}$ and target $T$, is there a subset summing
to $T$?

**Partition.** Given integers $S = \{s_1, \ldots, s_n\}$, can $S$ be partitioned into two subsets of
equal sum?

**Reduction chain:**

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{VertexCover} \to \mathrm{Clique}$$

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{HamiltonianPath}$$

$$\mathrm{SAT} \to \mathrm{3\mathrm{-}SAT} \to \mathrm{SubsetSum} \to \mathrm{Partition}$$

### 6.6 Beyond NP

**coNP.** The class of languages whose complements are in NP. A problem is in coNP if every "no"
instance has a polynomial-time verifiable certificate.

- Example: "Is this formula a tautology?" (the certificate for "no" would be a failing assignment).
- $\mathrm{P} \subseteq \mathrm{NP} \cap \mathrm{coNP}$.
- It is unknown whether $\mathrm{NP} = \mathrm{coNP}$.

**PSPACE.** The class of languages decidable in polynomial space:

$$\mathrm{PSPACE} = \bigcup_{k \geq 1} \mathrm{SPACE}(n^k)$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE}$.
- $\mathrm{P} \neq \mathrm{PSPACE}$ (space hierarchy theorem).
- PSPACE-complete problems: Quantified Boolean Formula (QBF), generalised geography, determining the
  winner of a position in certain games.

**EXPTIME.** The class of languages decidable in exponential time:

$$\mathrm{EXPTIME} = \bigcup_{k \geq 1} \mathrm{TIME}(2^{n^k})$$

- $\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXPTIME}$.
- $\mathrm{P} \neq \mathrm{EXPTIME}$ (time hierarchy theorem).
- EXPTIME-complete problems: Generalised chess, Go (on sufficiently large boards), determining the
  winner of a two-player game with exponential game tree.

**Hierarchy summary:**

$$\mathrm{Regular} \subsetneq \mathrm{CFL} \subsetneq \mathrm{Decidable} \subsetneq \mathrm{TM\mathrm{-}recognisable}$$

$$\mathrm{P} \subseteq \mathrm{NP} \subseteq \mathrm{PSPACE} \subseteq \mathrm{EXPTIME}$$

Both inclusions $\mathrm{P} \subseteq \mathrm{NP}$ and $\mathrm{NP} \subseteq \mathrm{PSPACE}$ are
known to be proper ($\mathrm{P} \neq \mathrm{PSPACE}$), but the status of $\mathrm{P}$ vs.
$\mathrm{NP}$ remains open.

:::caution Common Pitfall
NP-completeness refers to **decision** problems. The optimisation versions (e.g., "find the shortest
tour") are NP-hard, not necessarily NP-complete. Also, "NP" stands for "Nondeterministic Polynomial
time," not "Not Polynomial time." Every problem in NP is verifiable in polynomial time; whether all
such problems are solvable in polynomial time is the P vs. NP question.
:::
