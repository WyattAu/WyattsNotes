---
title: Context-Free Languages
tags:
  - Computing
  - University
---

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
$S \Rightarrow^* a^i S b^i \Rightarrow a^i T b^i \Rightarrow^* a^{i+k} c^k b^i$The total number Of
`b`S and `c`S equals the total number of `a`S.

**Example.** CFG for strings with equal numbers of `0`S and `1`S:

$$S \to 0S1 \mid 1S0 \mid SS \mid \varepsilon$$

The first two rules add a matched pair (in either order); the third concatenates two balanced
Strings; the fourth handles the empty string.

**Example.** CFG for the language of all strings over $\{a, b\}$ that are **not** palindromes:

$$S \to aAb \mid bAa \mid aSa \mid bSb \mid a \mid b, \quad A \to aAa \mid aAb \mid bAa \mid bAb \mid a \mid b$$

Here $S$ generates non-palindromes and $A$ generates arbitrary strings of length $\geq 1$.

<details>
<summary>Worked Example: CFG for $\{a^i b^j : 2i = j \mathrm{ or}  2j = i\}$</summary>

$$S \to S_1 \mid S_2, \quad S_1 \to aS_1bb \mid \varepsilon, \quad S_2 \to aaS_2b \mid \varepsilon$$

$S_1$ generates $\{a^i b^{2i}\}$ and $S_2$ generates $\{a^{2j} b^j\}$. Their union is the desired
Language.

_Proof of correctness for $S_1$._ By induction:
$S_1 \Rightarrow^n a^n S_1 b^{2n} \Rightarrow a^n b^{2n}$. So $L(S_1) = \{a^n b^{2n} : n \geq 0\}$.
Similarly $L(S_2) = \{a^{2n} b^n : n \geq 0\}$. Hence $L(S) = L(S_1) \cup L(S_2)$Which is exactly
the target language. $\blacksquare$

</details>

### 3.2 Parse Trees and Ambiguity

A **parse tree** (derivation tree) for a string $w$ according to grammar $G$ is a tree where:

- The root is labelled $S$.
- Internal nodes are labelled with variables.
- Leaves are labelled with terminals (or $\varepsilon$).
- Children of a node labelled $A$ are the symbols of the right-hand side of a production
  $A \to \alpha$ in left-to-right order.

A CFG is **ambiguous** if some string in its language has two or more distinct parse trees
(equivalently, Two or more leftmost derivations or two or more rightmost derivations).

**Example (ambiguous).** $S \to S + S \mid S \times S \mid \mathrm{id}$. The string
$\mathrm{id} + \mathrm{id} \times \mathrm{id}$ has two parse trees: $S + (S \times S)$ and
$(S + S) \times S$.

**Removing ambiguity.** Some ambiguous grammars can be made unambiguous by rewriting the productions
To enforce a particular evaluation order. For the arithmetic expression grammar:

$$E \to E + T \mid T, \quad T \to T \times F \mid F, \quad F \to (E) \mid \mathrm{id}$$

This grammar is unambiguous and enforces the standard precedence ($\times$ before $+$) and left
Associativity.

<details>
<summary>Worked Example: Proving a grammar is unambiguous</summary>

Consider the grammar: $S \to aSb \mid ab$. We prove it is unambiguous.

_Proof._ Any string in $L(G)$ has the form $a^n b^n$ for some $n \geq 1$. We show by induction On
$n$ that $a^n b^n$ has exactly one parse tree.

Base ($n = 1$): $ab$ has only the parse tree using $S \to ab$.

Inductive step: $a^{n+1} b^{n+1}$ must use $S \to aSb$ (the rule $S \to ab$ produces only Strings of
length 2). The inner $S$ must derive $a^n b^n$Which by IH has a unique parse tree. Hence
$a^{n+1} b^{n+1}$ has exactly one parse tree. $\blacksquare$

</details>

**Example.** $L = \{a^i b^j c^k : i = j \mathrm{ or}  j = k\}$ is inherently ambiguous. (Proof
omitted; Any grammar must have two competing mechanisms for the two conditions, and these
Interfere.)

### 3.3 Chomsky Normal Form

A CFG is in **Chomsky Normal Form (CNF)** if every production is of the form:

- $A \to BC$ (two variables), or
- $A \to a$ (single terminal), or
- $S \to \varepsilon$ (only the start variable, and $S$ does not appear on the right of any rule).

**Theorem 3.1.** Every CFG has an equivalent CFG in Chomsky Normal Form.

_Proof (conversion algorithm)._

1. Add a new start variable $S_0$ with rule $S_0 \to S$ (ensures $S$ does not appear on any right
   side if it generates $\varepsilon$).
2. Remove all $\varepsilon$-productions $A \to \varepsilon$ (except possibly $S_0 \to \varepsilon$).
   For each occurrence of $A$ in a right-hand side, add a variant without $A$.
3. Remove all unit productions $A \to B$. For each chain $A \Rightarrow^* B$Add $A \to \alpha$ for
   each $B \to \alpha$.
4. Convert remaining rules: replace terminals $a$ in right-hand sides of length $\geq 2$ with new
   variables $T_a$ and rules $T_a \to a$. Replace right-hand sides of length $\geq 3$ by introducing
   intermediate variables. $\blacksquare$

<details>
<summary>Worked Example: Converting a CFG to CNF</summary>

Convert the following grammar to CNF:

$$S \to AbB, \quad A \to aA \mid \varepsilon, \quad B \to bB \mid \varepsilon$$

**Step 1:** Add new start variable. $S_0 \to S$.

**Step 2:** Remove $\varepsilon$-productions. Both $A$ and $B$ are nullable. For each production
Containing $A$ or $B$Add variants with nullable symbols removed:

- $S \to AbB \mid Ab \mid aB \mid ab$
- $A \to aA \mid a$
- $B \to bB \mid b$
- $S_0 \to S$

**Step 3:** Remove unit productions. $S_0 \to S$ is a unit production. Replace with all
$S$-productions:

- $S_0 \to AbB \mid Ab \mid aB \mid ab$

**Step 4:** Convert long right-hand sides and terminals.

Introduce $T_a \to a$ and $T_b \to b$:

- $S \to AT_bB \mid AT_b \mid T_aB \mid T_aT_b$
- $S_0 \to AT_bB \mid AT_b \mid T_aB \mid T_aT_b$

Handle $AT_bB$ (length 3): introduce $C_1 \to AT_b$Then $S \to C_1B$ and $S_0 \to C_1B$.

Final CNF grammar:

$$S_0 \to C_1B \mid AT_b \mid T_aB \mid T_aT_b$$ $$S \to C_1B \mid AT_b \mid T_aB \mid T_aT_b$$
$$A \to T_aA \mid T_a$$ $$B \to T_bB \mid T_b$$ $$C_1 \to AT_b$$ $$T_a \to a, \quad T_b \to b$$

</details>

### 3.4 Pushdown Automata

A **pushdown automaton (PDA)** is a 6-tuple $M = (Q, \Sigma, \Gamma, \delta, q_0, F)$ where:

- $Q$ is a finite set of states.
- $\Sigma$ is the input alphabet.
- $\Gamma$ is the stack alphabet.
- $\delta : Q \times (\Sigma \cup \{\varepsilon\}) \times (\Gamma \cup \{\varepsilon\}) \to \mathcal{P}(Q \times (\Gamma \cup \{\varepsilon\}))$
  is the transition function.
- $q_0 \in Q$ is the start state.
- $F \subseteq Q$ is the set of accepting states.

A PDA can read input, push symbols onto the stack, pop symbols from the stack, and make
$\varepsilon$-moves (without consuming input or changing the stack).

**Example.** PDA for $L = \{a^n b^n : n \geq 0\}$:

1. Push a marker $\text{\$}$ onto the stack.
2. For each `a`Push `X` onto the stack.
3. For each `b`Pop `X` from the stack.
4. Accept if the stack is empty (just the marker) and all input is consumed.

Formally: states $q_0$ (start), $q_1$ (pushing), $q_2$ (popping), $q_3$ (accept).

<details>
<summary>Worked Example: PDA for palindromes $\{ww^R : w \in \{0,1\}^*\}$</summary>

Design a PDA for $L = \{ww^R : w \in \{0,1\}^*\}$.

**Idea:** Push the first half of the input onto the stack. Nondeterministically guess when the
Middle is reached, then pop and compare with the remaining input.

**States:** $q_0$ (pushing), $q_1$ (popping/comparing), $q_2$ (accept).

**Transitions:**

- Push phase ($q_0$):
- $(q_0, 0, \varepsilon) \to (q_0, 0)$ — push `0`.
- $(q_0, 1, \varepsilon) \to (q_0, 1)$ — push `1`.
- $(q_0, \varepsilon, \varepsilon) \to (q_1, \varepsilon)$ — guess the midpoint.

- Pop phase ($q_1$):
- $(q_1, 0, 0) \to (q_1, \varepsilon)$ — match `0`.
- $(q_1, 1, 1) \to (q_1, \varepsilon)$ — match `1`.
- $(q_1, \varepsilon, \varepsilon) \to (q_2, \varepsilon)$ — accept if stack empty and input
  consumed.

**Accept:** $\{q_2\}$.

_Correctness._ If $w = uu^R$The PDA pushes $u$Guesses the midpoint, then pops and matches $u^R$. If
$w \neq uu^R$No sequence of guesses leads to acceptance. $\blacksquare$

</details>

### 3.5 Equivalence of CFG and PDA

**Theorem 3.2.** A language is context-free if and only if some PDA recognises it.

_Proof (sketch)._

**CFG to PDA:** The PDA simulates a leftmost derivation. It maintains the current sentential form On
the stack. At each step, it pops a variable from the stack and pushes the right-hand side of a
Production for that variable.

**PDA to CFG:** Given PDA $M$Construct a grammar whose variables encode pairs of states $(p, q)$
Meaning "the PDA can go from state $p$ to state $q$Popping everything pushed onto the stack." The
productions simulate the PDA's transitions. $\blacksquare$

**Theorem 3.2a (CFG to PDA construction).** Let $G = (V, \Sigma, R, S)$ be a CFG. Then there exists
a PDA $M$ with $L(M) = L(G)$.

_Proof._ Construct
$M = (\{q_0, q_1, q_2\}, \Sigma, V \cup \Sigma \cup \{\$\}, \delta, q_0, \{q_2\})$:

1. $(q_0, \varepsilon, \varepsilon) \to (q_1, S\$)$ — push the start variable and bottom marker.
2. For each $A \to \alpha \in R$: $(q_1, \varepsilon, A) \to (q_1, \alpha)$ — replace a variable
   with its production.
3. For each $a \in \Sigma$: $(q_1, a, a) \to (q_1, \varepsilon)$ — match a terminal on input with
   stack.
4. $(q_1, \varepsilon, \$) \to (q_2, \$)$ — accept when only the marker remains.

The PDA maintains the current sentential form (minus terminals already matched) on the stack. When
only $\text{\$}$ remains, the derivation is complete and all input has been consumed. $\blacksquare$

### 3.6 Pumping Lemma for Context-Free Languages

**Theorem 3.3.** If $L$ is context-free, there exists $p$ such that for every $w \in L$ with
$|w| \geq p$, $w$ can be decomposed as $w = uvxyz$ satisfying:

1. $|vy| \gt 0$.
2. $|vxy| \leq p$.
3. $uv^ixy^iz \in L$ for all $i \geq 0$.

_Proof._ Let $G$ be a CFG in CNF with $k$ variables. Any parse tree of height $h$ generates a string
Of length at most $2^{h-1}$. Set $p = 2^k$. For $|w| \geq p$The parse tree has height $\gt k$ So
some path repeats a variable. The substring generated between the two occurrences can be pumped.
$\blacksquare$

**Example.** $L = \{a^n b^n c^n : n \geq 0\}$ is not context-free.

_Proof._ Assume pumping length $p$. Let $w = a^p b^p c^p$. Since $|vxy| \leq p$The substring $vxy$
cannot span all three letter types. Case analysis:

- If $vxy$ is within the `a`S or `b`S or `c`S: pumping changes only one count, breaking the
  equality.
- If $vxy$ spans `a`S and `b`S: pumping changes the `a` and `b` counts but not `c`Breaking equality.
- If $vxy$ spans `b`S and `c`S: analogous.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

**Example.** $L = \{a^i b^j c^k : i \lt j \lt k\}$ is not context-free.

_Proof._ Assume pumping length $p$. Let $w = a^p b^{p+1} c^{p+2}$. Since $|vxy| \leq p$:

- If $vxy$ lies entirely within one block: pumping up ($i = 2$) increases only one count, but the
  gap between adjacent counts is only 1 or 2, so doubling the pumped count violates the strict
  inequalities.
- If $vxy$ spans two blocks: pumping changes two adjacent counts by the same additive amount. The
  gap between those counts is 1, so increasing both by the same positive amount makes them equal,
  violating $i \lt j \lt k$.

In all cases, $uv^2xy^2z \notin L$. $\blacksquare$

<details>
<summary>Worked Example: $\{a^n b^n a^n : n \geq 0\}$ is not context-free</summary>

_Proof._ Assume pumping length $p$. Let $w = a^p b^p a^p$. Since $|vxy| \leq p$The substring $vxy$
cannot span all three blocks. Case analysis:

- $vxy$ within the first $a^p$ block: pumping down ($i = 0$) reduces the first count only.
  $uv^0xy^0z = a^{p-k}b^pa^p \notin L$ for $k \gt 0$.
- $vxy$ within the $b^p$ block: pumping changes the $b$ count only, breaking equality.
- $vxy$ within the last $a^p$ block: analogous.
- $vxy$ spans the first $a^p$ and $b^p$: pumping changes first $a$ and $b$ counts but not the last
  $a$ count.
- $vxy$ spans $b^p$ and last $a^p$: analogous.

In all cases, pumping produces a string not in $L$. $\blacksquare$

</details>

### 3.7 The CYK Parsing Algorithm

The **Cocke--Younger--Kasami (CYK) algorithm** determines membership in a context-free language When
the grammar is in Chomsky Normal Form.

**Theorem 3.4.** Given a CFG $G$ in CNF and a string $w$ of length $n$The CYK algorithm decides
Whether $w \in L(G)$ in $O(n^3 \cdot |G|)$ time.

**Algorithm.** Construct a table $T[i, j]$ for $1 \leq i \leq j \leq n$Where $T[i, j]$ is the set Of
variables that can derive the substring $w_i w_{i+1} \cdots w_j$.

1. **Base case** ($j = 1$): $T[i, i] = \{A : A \to w_i \mathrm{ is a rule in  G\}$.
2. **Recursive case** ($j \gt 1$): For each split $k$ with $i \leq k \lt j$:
   $$T[i, j] \mathrel{{:}{=}} T[i, j] \cup \{A : A \to BC \in R, B \in T[i, k], C \in T[k+1, j]\}$$
3. **Answer:** $w \in L(G)$ iff $S \in T[1, n]$.

_Proof of correctness._ In CNF, every derivation of a string of length $\ell$ involves exactly
$\ell - 1$ binary productions. The table considers every possible "root" of the derivation tree For
each substring, and every possible split of that substring into two parts. By induction on the
Substring length, $T[i, j]$ contains exactly those variables that derive $w_i \cdots w_j$.
$\blacksquare$

**Time complexity.** The table has $O(n^2)$ entries. Each entry considers at most $n$ split points
And checks all $|G|$ rules, giving $O(n^3 \cdot |G|)$ total time.

<details>
<summary>Worked Example: CYK on a small grammar</summary>

Grammar (CNF): $S \to AB \mid BC$, $A \to BA \mid a$, $B \to CC \mid b$, $C \to AB \mid a$.

String: $w = ba$.

**Length 1:**

- $T[1,1]$: $w_1 = b$So $T[1,1] = \{B\}$ (since $B \to b$).
- $T[2,2]$: $w_2 = a$So $T[2,2] = \{A, C\}$ (since $A \to a$ and $C \to a$).

**Length 2:**

- $T[1,2]$: split at $k = 1$. Check all pairs $(X \in T[1,1], Y \in T[2,2])$:
- $X = B, Y = A$: $S \to BA$? No. $B \to BA$? No. $A \to BA$? No. $C \to BA$? No.
- $X = B, Y = C$: $S \to BC$? Yes — add $S$.
- $X = B, Y = A$: already checked. So $T[1,2] = \{S\}$.

Since $S \in T[1,2]$The string $ba$ is **in** $L(G)$. The parse tree is $S \to BC$ Where $B \to b$
and $C \to a$.

</details>

