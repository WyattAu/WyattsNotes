---
title: Computer Science
description: 'A-Level Computer Science notes covering key definitions, core concepts, worked examples, and practice questions for thorough learning and effective revision.'
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: computer-science
sidebar_position: 4
---

## A Level Computer Science — Course Overview

A Level Computer Science sits at the intersection of mathematics, engineering, and philosophy. It
Teaches you to think precisely about computation — what can be computed, how efficiently, and how to
Design systems that are correct, robust, and maintainable.

### Board Coverage

| Topic                                      | AQA     | Edexcel | OCR (A) | CIE (9618) |
| ------------------------------------------ | ------- | ------- | ------- | ---------- |
| Fundamentals of Data Representation        | Paper 1 | P1      | Paper 1 | Paper 1    |
| Fundamentals of Computer Systems           | Paper 1 | P1      | Paper 1 | Paper 1    |
| Fundamentals of Communication & Networking | Paper 1 | P1      | Paper 1 | Paper 2    |
| Boolean Algebra & Logic Gates              | Paper 1 | P1      | Paper 1 | Paper 1    |
| Data Structures                            | Paper 1 | P1      | Paper 1 | Paper 1    |
| Algorithms                                 | Paper 1 | P1      | Paper 1 | Paper 1    |
| Programming Constructs                     | Paper 2 | P2      | Paper 2 | Paper 2    |
| Problem Solving & Programming              | Paper 2 | P2      | Paper 2 | Paper 2    |
| Software Development                       | Paper 2 | P2      | Paper 2 | Paper 2    |
| Theory of Computation                      | Paper 1 | P1      | Paper 1 | Paper 1    |
| Databases                                  | Paper 1 | P1      | Paper 2 | Paper 1    |
| Web Technologies                           | —       | P1      | —       | —          |

### Course Structure

1. **Fundamentals** — Data representation (binary, two's complement, floating point), hardware
   architecture, Boolean logic
2. **Data Structures** — Arrays, linked lists, stacks, queues, trees, graphs, hash tables
3. **Algorithms** — Sorting, searching, graph algorithms, complexity analysis (Big-O), algorithmic
   paradigms
4. **Programming** — Constructs, OOP, functional programming paradigms, and a programming project
5. **Computer Systems** — Processor architecture, memory hierarchy, operating systems, networking
6. **Theory of Computation** — Finite state machines, Turing machines, decidability, computational
   complexity
7. **Databases** — Relational model, SQL, normalisation, transaction processing
8. **Software Engineering** — Methodologies, testing, maintenance, agile development

### Assessment

| Board   | Components                                                                         | Weighting |
| ------- | ---------------------------------------------------------------------------------- | --------- |
| AQA     | Paper 1 (Theory 40%), Paper 2 (Programming 40%), NEA Project (20%)                 | As shown  |
| Edexcel | P1 (Theory), P2 (Programming), NEA Project                                         | Varies    |
| OCR (A) | Paper 1 (40%), Paper 2 (40%), NEA Project (20%)                                    | As shown  |
| CIE     | Paper 1 (Theory), Paper 2 (Fundamentals), Paper 3 (Programming), Pre-release (20%) | Varies    |

> All boards include a non-examined assessment (NEA) programming project, worth 20% of the A Level.

### How to Use These Notes

Each topic page contains:

1. **Precise definitions** — formal specifications of every concept
2. **Proofs and correctness arguments** — why algorithms work, why data structures have the
   properties they do
3. **Complexity analysis** — rigorous Big-O derivations, not just stating the result
4. **Worked examples** — tracing through algorithms step by step
5. **Multi-step problem set** — questions requiring synthesis of multiple topics
6. **Board-specific notes** — specification differences

When finished, attempt the
[Diagnostic Test](/docs/alevel/computer-science/diagnostics/diagnostic-guide).

## Common Pitfalls

1. Mixing up Big O, Big $\Omega$, and Big $\Theta$ notation — Big O is an upper bound, not
   necessarily tight.

2. Confusing authentication (who you are) with authorisation (what you can do) in security contexts.

3. Neglecting to normalise database designs, leading to data redundancy and update anomalies.

4. Forgetting edge cases in algorithm design (e.g., empty input, single element, already sorted
   data).

### Key Exam Board Differences

| Aspect            | AQA                      | OCR (A)                | CIE (9618)                         |
| ----------------- | ------------------------ | ---------------------- | ---------------------------------- |
| NEA Language      | Any                      | Any (Python common)    | Python / Java / VB                 |
| Paper 2 Focus     | Problem solving + coding | Computational thinking | Advanced programming + pre-release |
| Marks for Working | Method marks available   | Show your reasoning    | Marks for structured answers       |
| Calculators       | Not permitted            | Not permitted          | Permitted in Paper 3               |

### Study Strategy

1. **Start with fundamentals** (data representation, Boolean algebra) — these underpin every other
   topic.
2. **Trace algorithms by hand** on paper before coding them — exam questions test your ability to
   follow execution, not write code.
3. **Practise Big-O analysis** for every algorithm you learn; examiners expect you to derive, not
   just state.
4. **Build the NEA early** — the project is 20% of your grade and requires documentation, testing,
   and evaluation.

### Key Formulae

| Topic          | Formula / Definition                             |
| -------------- | ------------------------------------------------ |
| Big-O (sorts)  | Merge sort: $O(n \log n)$; Bubble sort: $O(n^2)$ |
| Floating point | $(-1)^S \times 1.M \times 2^{E-\text{bias}}$     |
| Truth table    | $A \oplus B = A\bar{B} + \bar{A}B$               |
| Huffman coding | Weighted path length $= \sum f_i \times d_i$     |
| Hashing        | Load factor $= n/k$ (items/buckets)              |

### Recommended Reading

- "Computer Science: An Overview" by Brookshear for foundational breadth
- "Introduction to Algorithms" (CLRS) for rigorous algorithm analysis
- "Structure and Interpretation of Computer Programs" for programming depth
