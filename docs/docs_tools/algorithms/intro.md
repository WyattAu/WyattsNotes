---
id: intro
title: Introduction to Algorithms
description:
  'Algorithms Introduction to Algorithms notes covering key definitions, core concepts, worked
  examples, and practice questions for practical revision.'
slug: intro
sidebar_position: 1
---

## What Algorithms Are

An algorithm is a finite sequence of well-defined instructions that takes an input and produces an
Output. This definition is deceptively simple. In practice, the gap between "an algorithm that
Produces the correct answer" and "an algorithm that produces the correct answer fast enough to
Matter" is where most of the engineering happens.

Every system you build, maintain, or debug is a composition of algorithms: the B-tree index your
Database uses to serve a query, the congestion control algorithm in TCP that decides how fast your
Service can send data, the load balancing algorithm that distributes requests across your fleet, the
Garbage collector that reclaims memory in your runtime. Understanding these algorithms at a deep
Level is what separates engineers who can diagnose a latency regression from engineers who can only
Reboot the service.

## Data Structures and Algorithms

Data structures and algorithms are inseparable. A data structure is a particular way of organising
Data in memory; an algorithm is a sequence of operations on that data. Choosing the wrong data
Structure makes the best algorithm slow, and choosing the right data structure can make a naive
Algorithm fast enough.

```mermaid
graph LR
    A[Data Structures] --> B[Arrays / Strings]
    A --> C[Linked Lists]
    A --> D[Stacks / Queues]
    A --> E[Trees / Heaps]
    A --> F[Graphs]
    A --> G[Hash Tables]
    H[Algorithms] --> I[Sorting]
    H --> J[Searching]
    H --> K[Graph Traversal]
    H --> L[Dynamic Programming]
    H --> M[Greedy / Backtracking]
    B -.-> I
    G -.-> J
    F -.-> K
    D -.-> L
```

The relationship is not one-to-one. A hash table can implement a set or a map. A balanced BST can do
The same. Which one you choose depends on whether you need ordered iteration, worst-case guarantees,
Or amortised constant-time operations. These trade-offs are the substance of systems engineering.

## Mathematical Prerequisites

This subject assumes familiarity with:

- **Logarithms** — $O(\log n)$ is the most important complexity class you will encounter. You need
  to be comfortable with the algebraic identities: $\log(ab) = \log a + \log b$
  $\log(a^b) =
 b \log a$, and the change of base formula.
- **Summations** — Many algorithm analyses reduce to evaluating sums. Know the closed forms for
  $\sum_{i=1}^{n} i = n(n+1)/2$, $\sum_{i=1}^{n} i^2 = n(n+1)(2n+1)/6$And the geometric series
  $\sum_{i=0}^{k} r^i = (r^{k+1} - 1)/(r - 1)$.
- **Recurrence relations** — Divide-and-conquer algorithms produce recurrences like $T(n) = 2T(n/2)
- O(n)$. The Master Theorem provides closed-form solutions for a broad class of these.
- **Proof techniques** — Induction, contradiction, and construction are used throughout to prove
  correctness and bounds.

## What This Subject Covers

| Chapter                      | Focus                                                                    | Key Algorithms                    |
| ---------------------------- | ------------------------------------------------------------------------ | --------------------------------- |
| Complexity Analysis          | Asymptotic notation, Master Theorem, amortised analysis, NP-completeness | —                                 |
| Arrays and Strings           | Two pointers, sliding window, prefix sums, hashing, string matching      | Rabin-Karp, KMP                   |
| Linked Lists, Stacks, Queues | Linear structures, monotonic structures, union-find                      | Floyd's cycle detection           |
| Trees and Graphs             | BSTs, balanced trees, heaps, tries, graph traversal, topological sort    | BFS, DFS                          |
| Sorting                      | Comparison and non-comparison sorting, stability, adaptive behaviour     | Merge sort, quicksort, radix sort |
| Dynamic Programming          | Memoisation, tabulation, state space reduction, common DP patterns       | Knapsack, LCS, edit distance      |
| Graph Algorithms             | Shortest paths, MSTs, network flow, strong connectivity                  | Dijkstra, Kruskal, Ford-Fulkerson |

## How to Use These Notes

These notes are written for systems engineers who need to understand algorithms at the level
Required to make informed design decisions — not just pass an interview. Each chapter includes
Complexity analysis, practical implementation considerations, and a "Common Pitfalls" section drawn
From real production failures.

Read the chapters in order if you are building foundational knowledge. Use them as reference
Material if you are looking up a specific algorithm or trying to understand why a particular data
Structure is the wrong choice for your workload.

:::tip

The only way to internalise algorithms is to implement them. Reading about quicksort is not the same
As writing quicksort, debugging the off-by-one errors, and measuring its performance on pathological
Inputs. Use the pseudocode here as a starting point, but write the code yourself.

:::

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing terminology or concepts that appear similar but have distinct meanings.
- Overlooking key assumptions or boundary conditions that limit applicability.

