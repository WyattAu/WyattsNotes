---
title: Automata and Formal Languages
description: 'University Computer Science Automata and Formal Languages notes covering key definitions, core concepts, worked examples, and practice questions for revision.'
date: 2026-05-31T00:00:00.000Z
tags:
  - Computer Science
  - University
categories:
  - Computer Science
---

## 1. Finite Automata

### 1.1 Deterministic Finite Automaton (DFA)

A DFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $Q$ = finite set of states
- $\Sigma$ = input alphabet
- $\delta: Q \times \Sigma \to Q$ = transition function
- $q_0 \in Q$ = start state
- $F \subseteq Q$ = set of accepting states

**Language of $M$:** $L(M) = \{w \in \Sigma^* : M \text{ accepts } w\}$

**Example:** DFA for strings ending in "ab" over $\Sigma = \{a, b\}$:

```
States: {q0, q1, q2}
q0 → (a) → q1,  q0 → (b) → q0
q1 → (a) → q1,  q1 → (b) → q2
q2 → (a) → q1,  q2 → (b) → q0
Start: q0, Accept: q2
```

**Extended transition function:** $\delta^*: Q \times \Sigma^* \to Q$

$$\delta^*(q, \epsilon) = q$$
$$\delta^*(q, wa) = \delta(\delta^*(q, w), a)$$

### 1.2 Nondeterministic Finite Automaton (NFA)

An NFA is a 5-tuple $M = (Q, \Sigma, \delta, q_0, F)$ where:

- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \to 2^Q$ = transition function (returns a set of states)

**Key difference from DFA:** Multiple transitions per symbol, $\epsilon$-transitions allowed.

**Example:** NFA for strings containing "aba" over $\Sigma = \{a, b\}$:

```
States: {q0, q1, q2, q3}
q0 → (a) → {q0, q1}
q1 → (b) → q2
q2 → (a) → q3
Start: q0, Accept: q3
```

### 1.3 NFA to DFA Conversion (Subset Construction)

Convert NFA $N$ to equivalent DFA $D$:

```
SUBSET_CONSTRUCTION(N):
    D.states = 2^Q
    D.start = ε-closure({q0})
    mark D.start as unexplored
    while unexplored states exist:
        pick unexplored state S
        for each symbol a in Σ:
            T = ε-closure(∪ δ(q, a) for each q in S)
            D.transition[S][a] = T
            if T not yet in D.states:
                add T as unexplored
        mark S as explored
    D.accept = {S : S ∩ F ≠ ∅}
```

**Time:** $O(2^n)$ states in worst case. Often much smaller in practice.

### 1.4 DFA Minimization

Minimize a DFA to the smallest equivalent DFA.

```
MINIMIZE(DFA):
    // Remove unreachable states
    remove states not reachable from start

    // Partition into accepting and non-accepting
    P = {F, Q \ F}

    repeat:
        P' = {}
        for each group G in P:
            split G into subgroups where
                for all a in Σ: δ(p,a) and δ(q,a) are in same group of P
            add subgroups to P'
    until P' == P
    return DFA with P' as states
```

**Result:** Unique minimal DFA (up to isomorphism). $O(n \log n)$ with Hopcroft's algorithm.

### 1.5 DFA vs NFA Equivalence

**Theorem:** DFAs and NFAs recognize exactly the same class of languages: the **regular languages**.

$$\text{DFA} \equiv \text{NFA} \equiv \text{Regular Expressions}$$

## 2. Regular Expressions

### 2.1 Definition

Regular expressions over alphabet $\Sigma$:

- $\emptyset$: Empty language.
- $\epsilon$: Language $\{\epsilon\}$.
- $a$ (for $a \in \Sigma$): Language $\{a\}$.
- $R_1 \cdot R_2$ (concatenation): $\{uv : u \in L(R_1), v \in L(R_2)\}$.
- $R_1 \cup R_2$ (union/alternation): $L(R_1) \cup L(R_2)$.
- $R^*$ (Kleene star): $\{w_1 w_2 \cdots w_k : k \geq 0, w_i \in L(R)\}$.
- $R^+ = R \cdot R^*$: One or more repetitions.

### 2.2 RE to NFA Conversion (Thompson's Construction)

| RE Form | Construction                          |
| -------- | ------------------------------------- |
| $\emptyset$ | Single non-accepting state          |
| $\epsilon$ | Start = accept (single state)        |
| $a$       | Start → $a$ → accept                 |
| $R_1 \cup R_2$ | New start with $\epsilon$ to starts of $R_1$ and $R_2$; accepts merge via $\epsilon$ |
| $R_1 \cdot R_2$ | Connect accept of $R_1$ to start of $R_2$ via $\epsilon$ |
| $R^*$     | New start/accept with $\epsilon$ loops through $R$ |

**Properties:**
- RE has at most $O(|R|)$ states in the NFA.
- NFA may have $\epsilon$-transitions but no more than 2 outgoing transitions per state.

### 2.3 DFA to RE Conversion

```
DFA_TO_RE(DFA):
    rename states q1, q2, ..., qn
    add new start state qs and new accept state qf
    for each pair (qi, qj), eliminate states one by one
    update transition labels using state elimination formula:

    // Eliminating state qk:
    // For each path qi → qk → qj:
    //   new label = (label(qi,qk)) (label(qk,qk))* (label(qk,qj)) ∪ label(qi,qj)
```

### 2.4 Closure Properties of Regular Languages

Regular languages are closed under:

| Operation          | Proof Method                       |
| ------------------ | ---------------------------------- |
| Union              | RE: $R_1 \cup R_2$; NFA: parallel construction |
| Intersection       | DFA: product construction          |
| Complement         | DFA: swap accept/non-accept states |
| Concatenation      | RE: $R_1 \cdot R_2$                |
| Kleene star        | RE: $R^*$                          |
| Reversal           | RE: reverse expression; NFA: reverse arrows |
| Difference         | $A \setminus B = A \cap \overline{B}$ |

## 3. Pumping Lemma for Regular Languages

### 3.1 Statement

If $L$ is a regular language, then there exists a constant $p$ (the **pumping length**) such that any string $s \in L$ with $|s| \geq p$ can be divided into $s = xyz$ satisfying:

1. $|y| > 0$ (y is non-empty)
2. $|xy| \leq p$
3. $xy^iz \in L$ for all $i \geq 0$

### 3.2 Using the Pumping Lemma (Proof by Contradiction)

To prove $L$ is **not regular**:

1. Assume $L$ is regular. Let $p$ be the pumping length.
2. Choose a string $s \in L$ with $|s| \geq p$ (strategically).
3. Show that for **any** division $s = xyz$ with $|xy| \leq p$, $|y| > 0$, some $xy^iz \notin L$.
4. Contradiction → $L$ is not regular.

**Example: $L = \{a^n b^n : n \geq 0\}$**

Let $s = a^p b^p$. Since $|xy| \leq p$, $y = a^k$ for some $k \geq 1$. Then $xy^0z = a^{p-k}b^p \notin L$. Therefore $L$ is not regular.

**Example: $L = \{0^n 1^n : n \geq 0\}$**

Same approach. Not regular.

**Example: $L = \{ww^R : w \in \{0,1\}^*\}$**

Choose $s = 0^p 1 1^p 0^p$. Pumping $y$ (within first $p$ symbols) breaks the palindrome structure.

### 3.3 Common Non-Regular Languages

| Language                                        | Not Regular Because      |
| ----------------------------------------------- | ----------------------- |
| $\{a^n b^n : n \geq 0\}$                       | Need to count $a$'s vs $b$'s |
| $\{a^n b^n c^n : n \geq 0\}$                   | Need to match three counts |
| $\{ww : w \in \Sigma^*\}$                      | Need unbounded memory   |
| $\{a^p : p \text{ is prime}\}$                 | Primes are non-regular  |
| $\{w \in \{a,b\}^* : \#_a(w) = \#_b(w)\}$    | Need to count           |

## 4. Context-Free Grammars

### 4.1 Definition

A CFG is a 4-tuple $G = (V, \Sigma, R, S)$ where:

- $V$ = finite set of variables (nonterminals)
- $\Sigma$ = finite set of terminals (alphabet)
- $R$ = finite set of production rules of form $A \to \alpha$ where $A \in V$, $\alpha \in (V \cup \Sigma)^*$
- $S \in V$ = start variable

**Language of $G$:** $L(G) = \{w \in \Sigma^* : S \Rightarrow^* w\}$

### 4.2 Examples

**Balanced parentheses:**

```
S → (S)
S → SS
S → ε
```

**$\{a^n b^n : n \geq 0\}$:**

```
S → aSb
S → ε
```

**$\{a^n b^n c^n : n \geq 0\}$ is NOT context-free** (proven by pumping lemma for CFLs).

### 4.3 Chomsky Normal Form (CNF)

Every production is of the form:

- $A \to BC$ (two variables)
- $A \to a$ (one terminal)
- $S \to \epsilon$ (only for start symbol)

**Conversion:**

1. Eliminate $\epsilon$-productions (except $S \to \epsilon$).
2. Eliminate unit productions ($A \to B$).
3. Eliminate useless symbols (unreachable and non-generating).
4. Convert remaining productions to CNF.

### 4.4 Parse Trees

A parse tree for a string $w$ generated by a CFG:

- Root: labeled $S$
- Internal nodes: labeled with variables
- Leaves: labeled with terminals (left to right form $w$)
- Children of node $A$: labeled with the right-hand side of a production $A \to \alpha$

### 4.5 Ambiguity

A CFG is **ambiguous** if some string has two or more different parse trees (equivalently, different leftmost derivations).

**Example:**

```
E → E + E
E → E * E
E → (E)
E → a
```

The string $a + a * a$ has two parse trees: $(a + a) * a$ and $a + (a * a)$.

**Unambiguous version (precedence):**

```
E → E + T | T
T → T * F | F
F → (E) | a
```

**Inherent ambiguity:** Some CFLs have no unambiguous grammar (e.g., $\{a^i b^j c^k : i = j \text{ or } j = k\}$).

## 5. Pushdown Automata

### 5.1 Definition

A PDA is a 6-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, F)$ where:

- $\Gamma$ = stack alphabet
- $\delta: Q \times (\Sigma \cup \{\epsilon\}) \times (\Gamma \cup \{\epsilon\}) \to 2^{Q \times (\Gamma \cup \{\epsilon\})}$

Each transition: read input symbol (or $\epsilon$), pop stack symbol (or $\epsilon$), push symbol(s) (or $\epsilon$), change state.

**Deterministic PDA (DPDA):** For every configuration, at most one move is possible.

### 5.2 PDA for $\{a^n b^n : n \geq 0\}$

```
Q = {q0, q1, q2}, F = {q2}, Σ = {a,b}, Γ = {S, $}

δ(q0, a, $)  = {(q0, a$)}    // push a for each a read
δ(q0, a, a)  = {(q0, aa)}
δ(q0, b, a)  = {(q1, ε)}      // pop a for each b read
δ(q1, b, a)  = {(q1, ε)}
δ(q1, ε, $)  = {(q2, $)}      // accept when stack has only $
```

### 5.3 Equivalence

**Theorem:** CFGs and PDAs recognize the same class of languages: the **context-free languages**.

$$\text{CFG} \equiv \text{PDA} \equiv \text{CFL}$$

**Key difference from regular languages:** DPDAs are strictly weaker than nondeterministic PDAs.

$$\text{Regular} = \text{DPDA} \subsetneq \text{NPDA} = \text{CFL}$$

### 5.4 Closure Properties of CFLs

| Operation     | Closed? |
| ------------- | ------- |
| Union         | Yes     |
| Concatenation | Yes     |
| Kleene star   | Yes     |
| Intersection  | No*     |
| Complement    | No      |
| Intersection with regular | Yes |

*Not closed under general intersection, but closed under intersection with a regular language (using product of PDA and DFA).

## 6. Pumping Lemma for Context-Free Languages

### 6.1 Statement

If $L$ is a CFL, then there exists $p$ such that any $s \in L$ with $|s| \geq p$ can be divided into $s = uvxyz$ satisfying:

1. $|vy| > 0$ (v and y not both empty)
2. $|vxy| \leq p$
3. $uv^ixy^iz \in L$ for all $i \geq 0$

### 6.2 Application

**Example: $L = \{a^n b^n c^n : n \geq 0\}$ is not context-free.**

Let $s = a^p b^p c^p$. Since $|vxy| \leq p$, the substring $vxy$ cannot span all three letter types.

- If $vxy$ contains only $a$'s and $b$'s: pumping breaks the $a$-$b$-$c$ balance.
- If $vxy$ contains only $b$'s and $c$'s: same issue.
- If $vxy$ contains only one letter type: pumping breaks all three counts.

### 6.3 CFLs vs Non-CFLs

**Not CFL (require three matching counts or more):**

| Language                          | Why Not CFL              |
| --------------------------------- | ------------------------ |
| $\{a^n b^n c^n : n \geq 0\}$     | Three matching counts    |
| $\{a^i b^j c^k : i > j > k\}$    | Three ordered counts     |
| $\{ww : w \in \{a,b\}^*\}$      | Copy language (non-CFL)  |

## 7. Turing Machines

### 7.1 Definition

A Turing machine is a 7-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, q_{\text{accept}}, q_{\text{reject}})$ where:

- $Q$ = states
- $\Sigma$ = input alphabet ($\sqcup \notin \Sigma$, blank symbol)
- $\Gamma = \Sigma \cup \{\sqcup\}$ = tape alphabet
- $\delta: Q \times \Gamma \to Q \times \Gamma \times \{L, R\}$
- $q_0$ = start, $q_{\text{accept}}, q_{\text{reject}}$ = halting states

**Operation:** Read symbol under head, write symbol, move left/right, change state. Computation halts on accept or reject.

### 7.2 TM Variants

All are equivalent in power to the standard TM:

| Variant            | Description                           |
| ------------------ | ------------------------------------- |
| Multi-tape TM      | Multiple tapes, each with its own head |
| Nondeterministic TM | Multiple possible transitions        |
| Enumerators        | Print out strings of a language       |
| Multi-dimensional tape | Tape extended to 2D+ grid          |

**Theorem:** Multi-tape TMs, nondeterministic TMs, and standard TMs recognize the same class of languages.

### 7.3 Turing-Recognizable (Recursively Enumerable)

A language is **Turing-recognizable** (RE) if some TM accepts it (may loop on non-members).

### 7.4 Turing-Decidable (Recursive)

A language is **decidable** if some TM **halts on all inputs** (accepts members, rejects non-members).

$$\text{Decidable} \subsetneq \text{RE} \subsetneq \text{All languages}$$

## 8. Church-Turing Thesis

### 8.1 Statement

**Any algorithmic procedure can be simulated by a Turing machine.**

This is a **thesis** (not a theorem) — it cannot be proven because "algorithmic procedure" is an informal notion.

### 8.2 Implications

- TM defines the boundary of what is computable.
- No more powerful computational model exists (in terms of computable functions).
- Equivalent models: lambda calculus, $\mu$-recursive functions, Post systems, register machines.

## 9. Decidability

### 9.1 Decidable Languages

| Language                                      | Decidable? | Algorithm                             |
| --------------------------------------------- | ---------- | ------------------------------------- |
| $A_{\text{DFA}} = \{(B, w) : B \text{ accepts } w\}$ | Yes | Simulate DFA on $w$ |
| $A_{\text{CFG}} = \{(G, w) : G \text{ generates } w\}$ | Yes | CYK algorithm, $O(n^3|G|)$ |
| $E_{\text{DFA}} = \{A : L(A) = \emptyset\}$ | Yes | Check reachable accepting states |
| $EQ_{\text{DFA}} = \{A, B : L(A) = L(B)\}$ | Yes | Check $\overline{L(A \Delta B)}$ for non-emptiness |
| $A_{\text{TM}} = \{(M, w) : M \text{ accepts } w\}$ | **No** | Diagonalization proof |

### 9.2 The Halting Problem

$A_{\text{TM}} = \{(M, w) : M \text{ accepts } w\}$ is **undecidable**.

**Proof (diagonalization):**

```
Assume H is a decider for A_TM.
Define D(M):
    run H(M, <M>)
    if H accepts: reject
    if H rejects: accept

Run D on D: D(D) accepts iff D(D) rejects.
Contradiction. Therefore H cannot exist.
```

### 9.3 Reductions for Undecidability

To prove $L$ is undecidable, reduce a known undecidable language to $L$.

**Common undecidable problems:**

| Problem                                        | Reduction From    |
| ---------------------------------------------- | ----------------- |
| $E_{\text{TM}} = \{M : L(M) = \emptyset\}$     | $A_{\text{TM}}$  |
| $REG_{\text{TM}} = \{M : L(M) \text{ is regular}\}$ | $A_{\text{TM}}$ |
| $EQ_{\text{TM}} = \{M_1, M_2 : L(M_1) = L(M_2)\}$ | $E_{\text{TM}}$ |
| PCP (Post Correspondence Problem)             | $A_{\text{TM}}$  |
| Hilbert's 10th Problem (Diophantine equations) | $A_{\text{TM}}$ |

### 9.4 Rice's Theorem

**Theorem:** Any non-trivial property of the language of a Turing machine is undecidable.

A property is **non-trivial** if it holds for some TMs and not for others.

**Examples of undecidable properties (by Rice's theorem):**
- Does $M$ accept any string?
- Is $L(M)$ finite?
- Is $L(M)$ regular?
- Does $L(M) = \Sigma^*$?

**Not covered by Rice's theorem:** Properties about the machine’s behavior (not its language), such as "does $M$ run for more than 100 steps on input $w$?"

## 10. Common Pitfalls

1. **Confusing NFA and DFA complexity.** NFA simulation requires tracking multiple states simultaneously ($O(2^n)$ worst case for subset construction), but the NFA itself may be exponentially smaller than any equivalent DFA.

2. **Wrong string choice for pumping lemma proofs.** The string must be long enough ($\geq p$) and specifically chosen to make pumping impossible. A poor choice leads to failing the proof.

3. **Forgetting that CFLs are not closed under complement and intersection.** Unlike regular languages, CFLs lose these closure properties. $\overline{L}$ of a CFL may not be context-free.

4. **Assuming decidability based on the existence of an algorithm.** An algorithm that may not halt (e.g., simulating a TM) does not establish decidability. The TM must halt on all inputs.

5. **Misapplying Rice's theorem.** Rice’s theorem applies only to properties of the **language** recognized by a TM, not properties of the TM's code or computation behavior.

6. **Confusing Turing-recognizable and decidable.** Every decidable language is Turing-recognizable, but not vice versa. The halting problem is recognizable but not decidable.

7. **Assuming more tape heads make TMs more powerful.** Multi-tape TMs are equivalent to single-tape TMs. No variant of the standard TM increases computational power (only efficiency).

## Worked Examples

### Example 1: Designing a Finite Automaton
**Problem:** Design a DFA over {0, 1} that accepts strings containing the substring "010".
**Solution:** States: q0 (start, scanning for first 0), q1 (saw 0, waiting for 1), q2 (saw 01, waiting for 0), q3 (accepting, saw 010). Transitions: q0 on 0 -> q1, q0 on 1 -> q0. q1 on 1 -> q2, q1 on 0 -> q1. q2 on 0 -> q3, q2 on 1 -> q0. q3 on 0 -> q3, q3 on 1 -> q3. The DFA has 4 states and transitions back to earlier states when partial matches are broken.

### Example 2: Context-Free Grammar for a Language
**Problem:** Write a CFG that generates the language L = {a^n b^n c^n : n >= 1}.
**Solution:** S -> aBC. B -> aBB (this ensures more a's push B’s onto the middle). C -> cD. D -> cDD (this ensures more c's match). B -> b (terminal). D -> d (terminal). Wait -- this generates a^n b^n c^m which is wrong. The language a^n b^n c^n is not context-free (proven by the pumping lemma for CFLs). No CFG exists for this language. This is a common exam trick question.

## Summary

- **DFA** and **NFA** recognize the same **regular languages**, convertible via subset construction.
- **Regular expressions** are equivalent to finite automata (Thompson's construction).
- **Pumping lemma for regular languages** proves non-regularity by contradiction.
- **CFGs** generate **context-free languages**, equivalent to **PDAs**.
- **Ambiguity** means multiple parse trees; some CFLs are inherently ambiguous.
- **Pumping lemma for CFLs** proves non-context-freeness (e.g., $a^n b^n c^n$).
- **Turing machines** are the most powerful model; equivalent to lambda calculus and recursive functions.
- **Church-Turing thesis:** TMs capture all algorithmic computation.
- **Halting problem** is undecidable (diagonalization). **Rice's theorem** generalizes undecidability.

## Cross-References

| Topic | Link |
|-------|------|
| Compilers | [View](/docs/university/computer-science/compilers) |
| Complexity Theory | [View](/docs/university/computer-science/complexity-theory) |
| Algorithm Design | [View](/docs/university/computer-science/algorithm-design) |
