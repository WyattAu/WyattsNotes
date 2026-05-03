---
title: A-Level Computer Science -- Diagnostic Guide
description: "Comprehensive guide to A-Level CS diagnostic tests with coverage map, grading rubric, prerequisite chains, and timing recommendations."
slug: diag-guide-cs
hide_table_of_contents: true
---

# A-Level Computer Science — Diagnostic Guide

## Coverage Map

| Diagnostic File | Topics Covered | Source Files |
|---|---|---|
| `diag-fundamentals.md` | Binary/hex, two's complement, floating point, Boolean algebra, logic gates | `01-number-systems.md`, `02-floating-point.md`, `03-boolean-algebra.md`, `04-computer-architecture.md` |
| `diag-data-structures.md` | Arrays, linked lists, stacks, queues, hash tables, binary search trees, graphs | `01-arrays-and-records.md`, `02-linked-lists.md`, `03-stacks-and-queues.md`, `04-trees.md`, `05-graphs.md`, `06-hash-tables.md` |
| `diag-algorithms.md` | Big O notation, bubble/merge/quicksort, binary search, recursion, graph algorithms | `01-searching-algorithms.md`, `02-sorting-algorithms.md`, `03-graph-algorithms.md`, `04-complexity-analysis.md` |
| `diag-programming.md` | OOP, encapsulation, polymorphism, SQL queries, normalisation, recursion | `01-programming-constructs.md`, `02-object-oriented-programming.md`, `03-data-representation-in-programming.md`, `01-relational-databases.md` |
| `diag-networks.md` | TCP/IP, OSI, IP addressing, subnetting, symmetric/asymmetric encryption, TCP vs UDP, web technologies | `01-network-fundamentals.md`, `02-network-security.md`, `05-web-technologies.md` |
| `diag-theory-of-computation.md` | FSM, regular expressions, Turing machines, halting problem, complexity classes | `01-automata-and-computability.md` |

### Topics Covered Through Integration Tests

| Topic | Covered In | Source File |
|---|---|---|
| Software Engineering / SDLC | IT-1 (programming), IT-2 (theory) | `01-software-development-lifecycle.md` |
| Testing | IT-1 (programming) | `02-testing.md` |
| Operating Systems | Throughout (process management references) | `05-operating-systems.md` |
| Legal/Ethical Issues | IT-2 (networks security) | `06-legal-ethical-moral.md` |

## Grading Rubric

### PASS Criteria
- Correctly solve at least 2 out of 3 Unit Tests with complete working
- Correctly solve at least 2 out of 3 Integration Tests showing cross-topic reasoning
- Correct use of Big O notation, binary representations, and SQL syntax
- Code/pseudocode is logically correct and follows structured programming principles

### PARTIAL Criteria
- Correctly solve 1--2 Unit Tests and 1 Integration Test
- Shows understanding of concepts but has errors in implementation or calculation
- Partially correct code with logical gaps or syntax issues
- Correct high-level approach but incorrect details (e.g., wrong subnet mask, off-by-one in binary search)

### FAIL Indicators
- Cannot perform basic binary/hex conversions or two's complement
- Confuses data structure operations (e.g., stack vs queue behaviour)
- Cannot analyse algorithm complexity (assigning wrong Big O class)
- Unable to write basic SQL queries or identify normal form violations
- Fundamental misunderstanding of FSM/Turing machine concepts

## Prerequisite Chains

```
Fundamentals (number systems, binary, Boolean algebra)
  └── Data Structures (arrays, linked lists, trees, hash tables)
        ├── Algorithms (sorting, searching, graph algorithms, complexity)
        │     └── Theory of Computation (FSM, regular languages, decidability)
        └── Programming (OOP, SQL, data representation)
              └── Software Engineering (SDLC, testing)

Networks (TCP/IP, addressing, security)
  └── Web Technologies (HTTP, protocols)
```

**Recommended order of diagnostic completion:**
1. `diag-fundamentals` -- foundational number systems and logic
2. `diag-data-structures` -- requires binary understanding
3. `diag-algorithms` -- requires data structure knowledge
4. `diag-programming` -- requires algorithm and data structure understanding
5. `diag-networks` -- largely independent
6. `diag-theory-of-computation` -- builds on algorithms and programming

## Timing Recommendations

| Diagnostic | Recommended Time | Notes |
|---|---|---|
| `diag-fundamentals` | 35 minutes | Binary arithmetic requires careful work |
| `diag-data-structures` | 40 minutes | Hash table tracing takes time |
| `diag-algorithms` | 40 minutes | Sorting traces are time-consuming |
| `diag-programming` | 50 minutes | OOP design and SQL queries need thought |
| `diag-networks` | 35 minutes | Subnetting calculations require practice |
| `diag-theory-of-computation` | 35 minutes | FSM design and Turing machine traces |

**Total recommended time:** approximately 3.9 hours (spread across multiple sessions).

**Full battery timing:** Complete all 6 diagnostics over 3--4 sessions of 60--70 minutes each.

## How to Use These Diagnostics

1. Complete each diagnostic without referring to notes or reference materials.
2. For programming questions, write pseudocode or actual code on paper first.
3. Check solutions immediately after each question to identify gaps.
4. If you score FAIL, review the corresponding source file before retrying.
5. Integration Tests are the strongest predictor of exam readiness -- they test your ability to combine concepts from different topics, which is essential for A-Level exam questions that often span multiple areas of the specification.
6. Pay special attention to: binary arithmetic accuracy, Big O notation, SQL syntax, and FSM design -- these are frequently tested and easy to lose marks on through small errors.
