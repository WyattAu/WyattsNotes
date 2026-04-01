---
title: A Level Computer Science — Diagnostic Test
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: diagnostic-test
---

## Instructions

This diagnostic test covers the full A Level Computer Science syllabus. There are **45 questions** across all topics. Attempt each question, then check your answers. Each question links to the relevant revision page for further study.

**Recommended time:** 90 minutes.

---

## Fundamentals

**Q1.** Convert $101101_2$ to denary.

<details><summary>Answer</summary><div>

$1 \times 32 + 0 \times 16 + 1 \times 8 + 1 \times 4 + 0 \times 2 + 1 \times 1 = 32 + 8 + 4 + 1 = 45_{10}$

**Revision:** [Number Systems](/docs/docs_ALevel-notes/computer-science/fundamentals/01-number-systems)

</div></details>

**Q2.** Represent $-37$ in 8-bit two's complement.

<details><summary>Answer</summary><div>

$37 = 00100101_2$. Flip: $11011010_2$. Add 1: $11011011_2$.

**Revision:** [Number Systems](/docs/docs_ALevel-notes/computer-science/fundamentals/01-number-systems)

</div></details>

**Q3.** The ASCII code for 'A' is 65. What is the ASCII code for 'Z'?

<details><summary>Answer</summary><div>

'Z' = 65 + 25 = 90. (Uppercase letters are consecutive, A–Z spanning 26 characters.)

**Revision:** [Number Systems](/docs/docs_ALevel-notes/computer-science/fundamentals/01-number-systems)

</div></details>

**Q4.** Simplify the Boolean expression $\overline{A} \cdot B + A \cdot B$.

<details><summary>Answer</summary><div>

$B \cdot (\overline{A} + A) = B \cdot 1 = B$ (by the identity law: $X + \overline{X} = 1$).

**Revision:** [Boolean Algebra](/docs/docs_ALevel-notes/computer-science/fundamentals/03-boolean-algebra)

</div></details>

**Q5.** What is the purpose of the MAR (Memory Address Register) in the fetch-decode-execute cycle?

<details><summary>Answer</summary><div>

The MAR holds the address of the memory location to be read from or written to. During the fetch phase, the PC is copied to the MAR so the CPU can read the instruction at that address.

**Revision:** [Computer Architecture](/docs/docs_ALevel-notes/computer-science/fundamentals/04-computer-architecture)

</div></details>

---

## Data Structures

**Q6.** An array has base address 500 and element size 8 bytes. What is the address of element at index 12?

<details><summary>Answer</summary><div>

$500 + 12 \times 8 = 500 + 96 = 596$.

**Revision:** [Arrays and Records](/docs/docs_ALevel-notes/computer-science/data-structures/01-arrays-and-records)

</div></details>

**Q7.** What is the worst-case time complexity of inserting at the beginning of a singly linked list with $n$ elements?

<details><summary>Answer</summary><div>

$O(1)$ — insert at the head by updating the new node's next pointer to the current head and updating the head pointer. No traversal needed.

**Revision:** [Linked Lists](/docs/docs_ALevel-notes/computer-science/data-structures/02-linked-lists)

</div></details>

**Q8.** Evaluate the RPN expression: `3 4 + 2 * 7 -`.

<details><summary>Answer</summary><div>

`3 4 +` → 7; `7 2 *` → 14; `14 7 -` → 7.

Verification: $(3 + 4) \times 2 - 7 = 14 - 7 = 7$. ✓

**Revision:** [Stacks and Queues](/docs/docs_ALevel-notes/computer-science/data-structures/03-stacks-and-queues)

</div></details>

**Q9.** What is the maximum number of nodes at depth 3 in a binary tree?

<details><summary>Answer</summary><div>

$2^3 = 8$ nodes.

**Revision:** [Trees](/docs/docs_ALevel-notes/computer-science/data-structures/04-trees)

</div></details>

**Q10.** Which graph traversal guarantees finding the shortest path in an unweighted graph?

<details><summary>Answer</summary><div>

BFS (Breadth-First Search). BFS explores vertices level by level, so the first time a vertex is discovered, the path to it is the shortest.

**Revision:** [Graphs](/docs/docs_ALevel-notes/computer-science/data-structures/05-graphs)

</div></details>

**Q11.** What is the load factor of a hash table with 200 elements and 50 buckets?

<details><summary>Answer</summary><div>

$\alpha = 200/50 = 4.0$.

**Revision:** [Hash Tables](/docs/docs_ALevel-notes/computer-science/data-structures/06-hash-tables)

</div></details>

---

## Algorithms

**Q12.** What is the worst-case time complexity of binary search on a sorted array of $n$ elements?

<details><summary>Answer</summary><div>

$O(\log n)$ — each comparison halves the search space.

**Revision:** [Searching Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/01-searching-algorithms)

</div></details>

**Q13.** Which sorting algorithm has worst-case complexity $O(n \log n)$ and is in-place?

<details><summary>Answer</summary><div>

Heap sort. (Merge sort is $O(n \log n)$ but not in-place; quick sort is in-place but $O(n^2)$ worst case.)

**Revision:** [Sorting Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/02-sorting-algorithms)

</div></details>

**Q14.** State the lower bound for comparison-based sorting and name the proof technique used.

<details><summary>Answer</summary><div>

$\Omega(n \log n)$. Proved using the **decision tree model**: a decision tree for sorting $n$ elements has at least $n!$ leaves, requiring height $\Omega(\log n!) = \Omega(n \log n)$.

**Revision:** [Sorting Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/02-sorting-algorithms)

</div></details>

**Q15.** For which type of graph does Dijkstra's algorithm fail to find correct shortest paths?

<details><summary>Answer</summary><div>

Graphs with **negative edge weights**. Dijkstra's greedy choice assumes that once a vertex is finalised, its distance cannot improve — this assumption fails with negative edges.

**Revision:** [Graph Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/03-graph-algorithms)

</div></details>

**Q16.** What property must an A\* heuristic have to guarantee an optimal path?

<details><summary>Answer</summary><div>

**Admissibility:** $h(v) \leq$ true cost from $v$ to the goal for all $v$.

**Revision:** [Graph Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/03-graph-algorithms)

</div></details>

**Q17.** Solve the recurrence $T(n) = 2T(n/2) + n$ using the Master Theorem.

<details><summary>Answer</summary><div>

$a = 2$, $b = 2$, $c = \log_2 2 = 1$. $f(n) = n = \Theta(n^1) = \Theta(n^c)$. Case 2: $T(n) = \Theta(n \log n)$.

**Revision:** [Complexity Analysis](/docs/docs_ALevel-notes/computer-science/algorithms/04-complexity-analysis)

</div></details>

---

## Programming

**Q18.** What is the output of `print(7 // 2)` and `print(7 / 2)` in Python?

<details><summary>Answer</summary><div>

`3` and `3.5`. `//` is integer division (floor), `/` is float division.

**Revision:** [Programming Constructs](/docs/docs_ALevel-notes/computer-science/programming/01-programming-constructs)

</div></details>

**Q19.** Explain the difference between a procedure and a function.

<details><summary>Answer</summary><div>

A **function** returns a value; a **procedure** performs an action (side effect) and does not return a value.

**Revision:** [Programming Constructs](/docs/docs_ALevel-notes/computer-science/programming/01-programming-constructs)

</div></details>

**Q20.** What is the time complexity of naive recursive Fibonacci?

<details><summary>Answer</summary><div>

$O(\phi^n)$ where $\phi = (1+\sqrt{5})/2 \approx 1.618$ (exponential).

**Revision:** [Programming Constructs](/docs/docs_ALevel-notes/computer-science/programming/01-programming-constructs)

</div></details>

**Q21.** What is encapsulation in OOP?

<details><summary>Answer</summary><div>

Encapsulation is the bundling of data and methods within a class, and restricting direct access to internal state through access modifiers (public, private, protected).

**Revision:** [OOP](/docs/docs_ALevel-notes/computer-science/programming/02-object-oriented-programming)

</div></details>

**Q22.** State the Liskov Substitution Principle.

<details><summary>Answer</summary><div>

Objects of a superclass shall be replaceable with objects of a subclass without breaking the program.

**Revision:** [OOP](/docs/docs_ALevel-notes/computer-science/programming/02-object-oriented-programming)

</div></details>

**Q23.** Why are strings immutable in Python?

<details><summary>Answer</summary><div>

For thread safety, hash stability (used as dictionary keys), security (prevent in-memory modification), and string interning (memory efficiency through reuse).

**Revision:** [Data Representation in Programming](/docs/docs_ALevel-notes/computer-science/programming/03-data-representation-in-programming)

</div></details>

---

## Software Engineering

**Q24.** Which SDLC model is most appropriate for a project with well-understood, stable requirements?

<details><summary>Answer</summary><div>

The **Waterfall** model — its sequential phases suit stable requirements with clear milestones.

**Revision:** [SDLC](/docs/docs_ALevel-notes/computer-science/software-engineering/01-software-development-lifecycle)

</div></details>

**Q25.** What is a sprint in Scrum?

<details><summary>Answer</summary><div>

A sprint is a time-boxed iteration (typically 2–4 weeks) in which the development team delivers a potentially shippable product increment.

**Revision:** [SDLC](/docs/docs_ALevel-notes/computer-science/software-engineering/01-software-development-lifecycle)

</div></details>

**Q26.** What is the difference between verification and validation?

<details><summary>Answer</summary><div>

**Verification:** "Are we building the product right?" — checks conformance to specification.
**Validation:** "Are we building the right product?" — checks that it meets user needs.

**Revision:** [Testing](/docs/docs_ALevel-notes/computer-science/software-engineering/02-testing)

</div></details>

**Q27.** What is boundary value analysis? Give an example.

<details><summary>Answer</summary><div>

Boundary value analysis tests values at and around the boundaries of equivalence classes, where off-by-one errors are most likely. Example: for a function accepting ages 0–120, test -1, 0, 1 and 119, 120, 121.

**Revision:** [Testing](/docs/docs_ALevel-notes/computer-science/software-engineering/02-testing)

</div></details>

**Q28.** Does 100% statement coverage guarantee 100% branch coverage? Explain.

<details><summary>Answer</summary><div>

No. Consider `if condition: x = 1`. A single test with `condition = True` achieves 100% statement coverage (both `x = 1` and subsequent code execute) but only 50% branch coverage (the false branch is never taken).

**Revision:** [Testing](/docs/docs_ALevel-notes/computer-science/software-engineering/02-testing)

</div></details>

---

## Networks

**Q29.** At which OSI layer does a router operate?

<details><summary>Answer</summary><div>

Layer 3 (Network layer). Routers make forwarding decisions based on IP addresses.

**Revision:** [Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/01-network-fundamentals)

</div></details>

**Q30.** What are the three parts of the TCP three-way handshake?

<details><summary>Answer</summary><div>

1. Client sends **SYN**
2. Server sends **SYN-ACK**
3. Client sends **ACK**

**Revision:** [Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/01-network-fundamentals)

</div></details>

**Q31.** Why is UDP preferred over TCP for video conferencing?

<details><summary>Answer</summary><div>

UDP has lower latency (no handshake, no retransmission). Delayed packets are useless for real-time communication — better to skip them than wait for retransmission.

**Revision:** [Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/01-network-fundamentals)

</div></details>

**Q32.** What is the purpose of DNS?

<details><summary>Answer</summary><div>

DNS (Domain Name System) translates human-readable domain names (e.g., `www.example.com`) into IP addresses (e.g., `93.184.216.34`).

**Revision:** [Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/01-network-fundamentals)

</div></details>

**Q33.** What is NAT and why is it used?

<details><summary>Answer</summary><div>

NAT (Network Address Translation) maps private IP addresses to a single public IP address, allowing multiple devices on a LAN to share one internet-facing IP. It conserves IPv4 addresses and provides a basic level of security by hiding internal addresses.

**Revision:** [Network Fundamentals](/docs/docs_ALevel-notes/computer-science/networks/01-network-fundamentals)

</div></details>

**Q34.** Explain how RSA encryption works in three sentences.

<details><summary>Answer</summary><div>

RSA uses a public key $(e, n)$ to encrypt: $C = M^e \bmod n$, and a private key $(d, n)$ to decrypt: $M = C^d \bmod n$. The keys are derived from two large primes $p, q$ where $n = pq$ and $ed \equiv 1 \pmod{(p-1)(q-1)}$. Security relies on the difficulty of factoring $n$ into $p$ and $q$.

**Revision:** [Network Security](/docs/docs_ALevel-notes/computer-science/networks/02-network-security)

</div></details>

**Q35.** What is the CIA triad in information security?

<details><summary>Answer</summary><div>

**C**onfidentiality (data accessible only to authorised parties), **I**ntegrity (data not tampered with), **A**vailability (data accessible when needed).

**Revision:** [Network Security](/docs/docs_ALevel-notes/computer-science/networks/02-network-security)

</div></details>

---

## Databases

**Q36.** What is the difference between a primary key and a foreign key?

<details><summary>Answer</summary><div>

A **primary key** uniquely identifies each row in its table. A **foreign key** references the primary key of another table, establishing a relationship.

**Revision:** [Relational Databases](/docs/docs_ALevel-notes/computer-science/databases/01-relational-databases)

</div></details>

**Q37.** Write an SQL query to find all students whose average grade is above 80.

<details><summary>Answer</summary><div>

```sql
SELECT student_id, AVG(score) as avg_score
FROM Grades
GROUP BY student_id
HAVING AVG(score) > 80;
```

**Revision:** [Relational Databases](/docs/docs_ALevel-notes/computer-science/databases/01-relational-databases)

</div></details>

**Q38.** What is the difference between WHERE and HAVING in SQL?

<details><summary>Answer</summary><div>

`WHERE` filters rows **before** grouping; `HAVING` filters groups **after** `GROUP BY`.

**Revision:** [Relational Databases](/docs/docs_ALevel-notes/computer-science/databases/01-relational-databases)

</div></details>

**Q39.** What anomaly does 2NF eliminate that 1NF does not?

<details><summary>Answer</summary><div>

**Partial dependencies** — non-key attributes depending on only part of a composite key.

**Revision:** [Relational Databases](/docs/docs_ALevel-notes/computer-science/databases/01-relational-databases)

</div></details>

**Q40.** What does the "A" in ACID stand for, and what does it mean?

<details><summary>Answer</summary><div>

**Atomicity:** A transaction is all-or-nothing — either all operations complete or none do.

**Revision:** [Relational Databases](/docs/docs_ALevel-notes/computer-science/databases/01-relational-databases)

</div></details>

---

## Theory of Computation

**Q41.** What is the difference between a DFA and an NFA?

<details><summary>Answer</summary><div>

A **DFA** has exactly one transition per state per input symbol. An **NFA** can have zero, one, or multiple transitions per state per input symbol, and accepts if ANY path leads to an accepting state.

**Revision:** [Automata and Computability](/docs/docs_ALevel-notes/computer-science/theory-of-computation/01-automata-and-computability)

</div></details>

**Q42.** Is the language $L = \{a^n b^n \mid n \geq 0\}$ regular? Justify.

<details><summary>Answer</summary><div>

No. Proved using the Pumping Lemma: choose $s = a^p b^p$; the pumped substring $y$ lies within the first $p$ symbols (all $a$'s); removing $y$ yields unequal numbers of $a$'s and $b$'s, which is not in $L$.

**Revision:** [Automata and Computability](/docs/docs_ALevel-notes/computer-science/theory-of-computation/01-automata-and-computability)

</div></details>

**Q43.** State the halting problem and explain why it is undecidable.

<details><summary>Answer</summary><div>

The halting problem asks: given a TM $M$ and input $w$, does $M$ halt on $w$? It is undecidable because assuming a decider $H$ exists leads to a contradiction when we construct a machine $D$ that does the opposite of $H$ when run on itself.

**Revision:** [Automata and Computability](/docs/docs_ALevel-notes/computer-science/theory-of-computation/01-automata-and-computability)

</div></details>

**Q44.** What is the difference between P and NP?

<details><summary>Answer</summary><div>

**P** = problems solvable in polynomial time. **NP** = problems whose solutions can be **verified** in polynomial time. P ⊆ NP. Whether P = NP is an open question.

**Revision:** [Automata and Computability](/docs/docs_ALevel-notes/computer-science/theory-of-computation/01-automata-and-computability)

</div></details>

**Q45.** What does the Church-Turing thesis state?

<details><summary>Answer</summary><div>

Every effectively computable function is computable by a Turing machine. It is a thesis (not a theorem) because "effectively computable" is an informal concept.

**Revision:** [Automata and Computability](/docs/docs_ALevel-notes/computer-science/theory-of-computation/01-automata-and-computability)

</div></details>

---

## Scoring

Count your correct answers and identify weak areas:

| Score | Grade | Recommendation                                        |
| ----- | ----- | ----------------------------------------------------- |
| 40–45 | A\*   | Excellent — focus on exam technique                   |
| 35–39 | A     | Strong — review missed topics briefly                 |
| 25–34 | B/C   | Good foundation — systematic revision needed          |
| 15–24 | D/E   | Gaps exist — work through each topic's notes          |
| 0–14  | U     | Significant revision needed — start with fundamentals |

**Next steps:** For each incorrect answer, follow the revision link and work through the full problem set on that page.
