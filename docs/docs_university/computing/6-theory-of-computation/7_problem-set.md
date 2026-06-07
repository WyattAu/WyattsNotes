---
title: Problem Set
slug: theory-of-computation-problem-set
tags:
  - Computing
  - University
---

### 7.1 Regular Languages

**Problem 1.** Construct a DFA over $\Sigma = \{0, 1\}$ that accepts exactly those strings whose
Length is a multiple of 3. Prove your DFA is correct.

**Problem 2.** Let
$L = \{w \in \{0,1\}^* : w \mathrm{ contains} an even number of  0\mathrm{s} and
\mathrm{ ends} with  1\}$.
Give a DFA with the minimum number of states for $L$.

**Problem 3.** Use the Myhill-Nerode theorem to prove that $L = \{0^n 1^{2n} : n \geq 0\}$ is not
regular.

**Problem 4.** Prove or disprove: if $L_1 \cdot L_2$ is regular, then both $L_1$ and $L_2$ are
regular.

### 7.2 Context-Free Languages

**Problem 5.** Give a CFG for $L = \{a^i b^j c^k : i + j = k\}$. Prove your grammar generates
Exactly this language.

**Problem 6.** Convert the following grammar to CNF: $S \to aSbS \mid \varepsilon$. Show all steps
of the conversion.

**Problem 7.** Use the CFL pumping lemma to prove that $L = \{a^i b^j a^i b^j : i, j \geq 1\}$ is
not context-free.

**Problem 8.** Construct a PDA for $L = \{a^n b^m : n \leq 2m\}$. Give the formal definition Of the
PDA and explain why it is correct.

### 7.3 Turing Machines and Decidability

**Problem 9.** Design a TM that decides the language $L = \{0^{2^n} : n \geq 0\}$. Describe the
algorithm and prove it always halts.

**Problem 10.** Prove that the language
$L = \{\langle M_1, M_2 \rangle : L(M_1) \cap L(M_2) \neq \emptyset\}$ is undecidable.

**Problem 11.** Use Rice's theorem to prove that
$L = \{\langle M \rangle : L(M) \mathrm{ contains} at least two strings\}$ is undecidable. Explain
why Rice's theorem applies.

**Problem 12.** Show that the PCP instance with $\alpha = (01, 0, 1)$ and $\beta = (0, 10, 01)$ Has
a solution by finding one, or prove it has no solution.

### 7.4 Complexity Theory

**Problem 13.** Show that if $\mathrm{P} = \mathrm{NP}$Then $\mathrm{NP} = \mathrm{coNP}$.

**Problem 14.** A **3-colouring** of a graph $G = (V, E)$ is a function $c : V \to \{1, 2, 3\}$ Such
that $c(u) \neq c(v)$ for every edge $(u, v) \in E$. Show that 3-SAT $\leq_p$ 3-Colouring By
describing the reduction construction.

**Problem 15.** Prove that $\mathrm{CLIQUE}$ is self-reducible: given an oracle for
$\mathrm{CLIQUE}$Describe a polynomial-time algorithm to find an actual clique of size $k$ (if one
exists).

**Problem 16.** Using Savitch's theorem, prove that $\mathrm{NL} \subseteq \mathrm{P}$. What is the
time complexity of your algorithm?

**Problem 17.** Define the language $\mathrm{EXACT}\mathrm{-CLIQUE} = \{\langle G, k \rangle : G$
$\mathrm{ has} a clique of exactly size  k\}$. Show that $\mathrm{EXACT}\mathrm{-CLIQUE}$ is
NP-complete.

**Problem 18.** A language $L$ is in **DP** (difference of two NP sets) if there exist
$L_1, L_2 \in \mathrm{NP}$ such that $L = L_1 \cap \overline{L_2}$. Show that
$\mathrm{SAT}\mathrm{-UNSAT} = \{\langle \phi, \psi \rangle : \phi \in \mathrm{SAT} \mathrm{ and}
\psi \notin \mathrm{SAT}\}$
is in DP. Is DP contained in $\Sigma_2^P$? Justify.

### 7.5 Comprehensive

**Problem 19.** Consider the language $L = \{w \# w : w \in \{0,1\}^*\}$. (a) Prove $L$ is not
regular using the pumping lemma. (b) Give a CFG for $L$ and prove it is correct. (c) Is $L$
decidable? Justify.

**Problem 20.** For each of the following languages, state the smallest complexity class (from
$\mathrm{Regular}$, $\mathrm{CFL$, $\mathrm{Decidable}$, $\mathrm{NP$ $\mathrm{PSPACE$,
$\mathrm{EXPTIME}$Or "undecidable") that is known to contain it. Justify each answer briefly.

(a) $\{0^n 1^n 0^n : n \geq 0\}$ (b) $\{\langle G \rangle : G \mathrm{ has} a Hamiltonian cycle\}$
(c) $\{\langle G, k \rangle : G \mathrm{ has} a vertex cover of size  \leq k\}$ (d)
$\{\langle M \rangle : M \mathrm{ runs} for at most  100 \mathrm{ steps} on  \varepsilon\}$ (e)
$\{\langle \phi \rangle : \phi \mathrm{ is} a true quantified Boolean formula\}$

### 7.6 Selected Solutions and Hints

**Problem 1.** States $q_0, q_1, q_2$ with transitions $\delta(q_i, a) = q_{(i+1) \bmod 3}$ for All
$a \in \{0, 1\}$. Accept state: $q_0$. Proof by induction on the number of symbols read.

**Problem 3.** The strings $0^1, 0^2, 0^3, \ldots$ are pairwise distinguishable: for $i \lt j$ The
suffix $1^{2i}$ distinguishes $0^i$ from $0^j$ since $0^i 1^{2i} \in L$ but $0^j 1^{2i} \notin L$
(because $2i \neq 2j$).

**Problem 4.** Dis.../1-number-and-algebra/3_proof-and-logic: let $L_1 = \{0^n 1^n : n \geq 0\}$
(not regular) and $L_2 = \emptyset$ (regular). Then $L_1 \cdot L_2 = \emptyset$ is regular, but
$L_1$ is not.

**Problem 7.** Let $w = a^p b^p a^p b^p$ with pumping length $p$. Since $|vxy| \leq p$The Substring
$vxy$ cannot span all four blocks. Case analysis shows that pumping any valid Decomposition produces
a string not in $L$.

**Problem 10.** Reduce from $E_{\mathrm{TM}}$. Given $\langle M \rangle$Construct two TMs $M_1$
(accepts $\varepsilon$ only) and $M_2$ (accepts what $M$ accepts). Then
$L(M_1) \cap L(M_2) \neq \emptyset$ iff $M$ accepts $\varepsilon$ iff
$\langle M \rangle \notin E_{\mathrm{TM}}$ (after adjusting for the specific reduction).

**Problem 13.** If $\mathrm{P} = \mathrm{NP}$Then for any $L \in \mathrm{NP}$We have
$L \in \mathrm{P}$. Since $\mathrm{P}$ is closed under complement,
$\overline{L} \in \mathrm{P}
\subseteq \mathrm{NP}$. So $\overline{L} \in \mathrm{NP}$ for every
$L \in \mathrm{NP}$, meaning $\mathrm{NP} \subseteq \mathrm{coNP}$. By symmetry,
$\mathrm{coNP} \subseteq \mathrm{NP}$.

**Problem 19.** (a) Let $w = 0^p 1^p \# 0^p 1^p \in L$. Since $|xy| \leq p$, $y$ is in the first
$0^p$ block. Pumping down gives $0^{p-k}1^p\#0^p1^p \notin L$. (b)
$S \to 0S0 \mid 1S1 \mid S\#S \mid \varepsilon$ (generate matched pairs on both sides of $\#$). (c)
Yes — a TM can check the $\#$ symbol and verify both halves are reverses of each other.

**Problem 20.** (a) Decidable but not CFL (pumping lemma for CFLs). (b) NP-complete (Hamiltonian
cycle is NP-complete). (c) NP-complete (vertex cover is NP-complete). (d) Decidable (in fact, in P —
simulate for 100 steps). (e) PSPACE-complete (TQBF is PSPACE-complete).

## Common Pitfalls

- **Confusing regular and context-free languages.** Regular: recognised by finite automata (no
  memory). Context-free: recognised by pushdown automata (stack memory). **Fix:**
  $\{a^n b^n : n \geq 0\}$ is context-free but not regular. $\{a^n b^n c^n\}$ is neither.
- **Wrong halting problem understanding.** The halting problem is undecidable — no algorithm can
  determine for all programs whether they halt. **Fix:** This is a fundamental limitation; specific
  cases may be decidable, but the general problem is not.
- **Confusing P and NP.** P: problems solvable in polynomial time (deterministic). NP: solutions
  verifiable in polynomial time. P $\subseteq$ NP; P $=$ NP is unknown. **Fix:** NP-complete:
  hardest problems in NP; if any NP-complete problem is in P, then P $=$ NP.

## Worked Examples

### Example 1: DFA construction

**Problem.** Construct a DFA that accepts binary strings ending in "01".

**Solution.** States: $q_0$ (start), $q_1$ (last symbol was 0), $q_2$ (accept, ends in 01), $q_3$
(dead state). Transitions: $q_0$--0-->$q_1$, $q_0$--1-->$q_3$; $q_1$--0-->$q_1$, $q_1$--1-->$q_2$;
$q_2$--0-->$q_1$, $q_2$--1-->$q_3$; $q_3$--0/1-->$q_3$.

$\blacksquare$

### Example 2: Pumping lemma

**Problem.** Prove that $L = \{a^n b^n : n \geq 0\}$ is not regular.

**Solution.** Suppose $L$ is regular with pumping length $p$. Choose $s = a^p b^p$. By the pumping
lemma, $s = xyz$ with $|xy| \leq p$, $|y| \geq 1$, $xy^iz \in L$ for all $i \geq 0$. Since
$|xy| \leq p$, $y = a^k$ for some $k \geq 1$. Then $xy^0z = a^{p-k}b^p \notin L$ (since
$p - k \neq p$). Contradiction.

$\blacksquare$

## Summary

- Chomsky hierarchy: regular $\subset$ context-free $\subset$ context-sensitive $\subset$
  recursively enumerable.
- Regular languages: DFAs, NFAs, regular expressions; closed under union, concatenation, Kleene
  star.
- Context-free languages: CFGs, pushdown automata; pumping lemma for non-regular languages.
- Computability: halting problem is undecidable; P vs NP is open; NP-completeness.

## Cross-References

| Topic                   | Site       | Link                                                                                                                         |
| ----------------------- | ---------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [Theory of Computation] | A-Level    | [View](https://alevel-sciences.wyattau.com/docs/alevel/computer-science/theory-of-computation/01-automata-and-computability) |
| [Theory of Computation] | University | [View](https://university.wyattau.com/docs/computing/6-theory-of-computation/1_theory-of-computation)                        |

