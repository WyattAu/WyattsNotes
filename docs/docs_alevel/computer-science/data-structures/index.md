---
sidebar_label: Data Structures
sidebar_position: 2
description:
  'Rigorous A-Level computer science notes covering Data Structures. Includes definitions,
  derivations, worked examples, and exam-style problems.'
sidebar_custom_props:
  some_prop: true
---

# Data Structures

Data structures are organised collections of data that enable efficient access, modification, and
storage. Choosing the right data structure is one of the most impactful decisions in algorithm
design — it determines the complexity of every operation your program performs.

## Topics Covered

### Arrays and Records

- **Static vs. dynamic arrays** — memory layout, indexing, and resizing costs
- **Records (tuples/structs)** — grouping heterogeneous data
- **2D arrays** — row-major and column-major order

### Linked Lists

- **Singly linked lists** — node structure, traversal, insertion, deletion ($O(n)$ search, $O(1)$
  insert/delete at head)
- **Doubly linked lists** — bidirectional traversal, trade-off with extra pointer storage
- **Comparison with arrays** — when to choose each structure

### Stacks and Queues

- **Stack (LIFO)** — push, pop, peek; call stacks, expression evaluation, bracket matching
- **Queue (FIFO)** — enqueue, dequeue, peek; buffering, BFS, scheduling
- **Circular queues** — avoiding wasted space in fixed-size implementations

### Trees

- **Binary trees** — node structure, traversal (in-order, pre-order, post-order)
- **Binary search trees** — insertion, search, deletion; average $O(\log n)$, worst-case $O(n)$
- **Balancing** — why unbalanced BSTs degrade to linked lists

### Graphs

- **Directed and undirected graphs** — vertices, edges, weights
- **Adjacency matrix** ($O(1)$ edge lookup, $O(n^2)$ space) vs. **adjacency list** ($O(n + e)$
  space)
- **Traversal** — DFS and BFS on graph structures

### Hash Tables

- **Hash functions** — mapping keys to indices
- **Collision resolution** — chaining vs. open addressing (linear probing)
- **Average $O(1)$ lookup** — and the worst-case scenarios that degrade it

## Study Tips

1. **Draw diagrams** — data structures are visual. Sketch linked lists, trees, and graphs before
   reasoning about operations.
2. **Trace operations step by step** — especially insertions and deletions in linked lists and
   trees, where pointer manipulation is error-prone.
3. **Know the complexity tables** — memorise search, insert, and delete complexity for each
   structure. This is frequently tested.
4. **Understand trade-offs** — e.g., arrays give $O(1)$ random access but expensive insertion;
   linked lists give $O(1)$ insertion but no random access.
5. **Compare adjacency matrix and list** from memory — this is a common exam question.

## How to Use These Notes

Follow the sidebar order. Each page provides formal definitions, implementation patterns (in
pseudocode), worked traces, and exam-style questions. Master arrays and linked lists first, as all
other structures build on these foundations.
