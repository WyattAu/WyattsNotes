---
sidebar_label: Theory of Computation
sidebar_position: 8
description: 'A-Level Computer Science Theory of Computation notes covering key definitions, core concepts, worked examples, and practice questions for focused preparation.'
sidebar_custom_props:
  some_prop: true
---

# Theory of Computation

The theory of computation studies what can be computed and what cannot. It provides the mathematical
foundations that explain why some problems are solvable by algorithms and others are not, and
classifies problems by their inherent difficulty.

## Topics Covered

### Finite State Machines (FSMs)

- **Deterministic finite automata (DFA)** — states, transitions, accept/reject; modelling simple
  pattern recognisers
- **State transition diagrams** — drawing and interpreting FSMs
- **State transition tables** — tabular representation of FSMs
- **Mealy and Moore machines** — output-producing FSMs and their differences

### Regular Expressions

- **Syntax and semantics** — concatenation, alternation (`|`), Kleene star (`*`), grouping
- **Relationship to FSMs** — every regular expression has an equivalent FSM and vice versa
- **Pattern matching** — using regular expressions for validation and searching

### Turing Machines

- **Definition** — infinite tape, read/write head, finite state controller, transition function
- **Universal Turing machine** — a TM that can simulate any other TM
- **Church-Turing thesis** — any effectively computable function can be computed by a Turing machine

### Decidability and Computability

- **Decidable problems** — problems for which an algorithm always produces a yes/no answer
- **Undecidable problems** — the Halting Problem; proof by contradiction that no algorithm can
  determine whether an arbitrary program halts
- **Implications** — why undecidability matters for real-world software engineering

### Computational Complexity

- **P and NP classes** — problems solvable in polynomial time vs. verifiable in polynomial time
- **NP-completeness** — the hardest problems in NP; no known polynomial-time solution
- **Why this matters** — practical implications for cryptography, optimisation, and algorithm design

## Study Tips

1. **Draw FSM state diagrams** for every problem — start with the initial state, identify accepting
   states, and fill in transitions systematically.
2. **Convert between representations** — practise converting state diagrams to state tables and vice
   versa.
3. **Understand the Halting Problem proof** — it is a classic proof by contradiction that appears on
   many exam papers. Be able to reproduce the argument.
4. **Distinguish between FSMs and Turing machines** — FSMs have finite memory (states only); Turing
   machines have infinite memory (tape). This is the key difference in computational power.
5. **Practise regular expressions** — write patterns for phone numbers, email addresses, and other
   validation tasks.

## How to Use These Notes

Follow the sidebar order. Each page provides formal definitions, worked examples with state
diagrams, and exam-style problems. Start with FSMs, as they are the most frequently examined topic
in this section.
