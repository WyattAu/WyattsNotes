---
sidebar_label: Algorithms
sidebar_position: 3
description:
  'Rigorous A-Level computer science notes covering Algorithms. Includes definitions, derivations,
  worked examples, and exam-style problems.'
sidebar_custom_props:
  some_prop: true
---

# Algorithms

Algorithms are the core of computer science: well-defined, finite procedures that transform inputs
into outputs. This section covers the design, analysis, and implementation of the algorithms you
must understand for A-Level, including their time and space complexity.

## Topics Covered

### Searching Algorithms

- **Linear search** — $O(n)$ sequential scan; when to use it (unsorted data, small datasets)
- **Binary search** — $O(\log n)$ on sorted data; the divide-and-conquer paradigm
- **Trace tables** — stepping through algorithm execution to verify correctness

### Sorting Algorithms

- **Bubble sort**, **insertion sort**, **merge sort**, **quick sort** — their mechanisms,
  complexity, and stability
- **Best-case, average-case, and worst-case** analysis using Big-O notation
- **Comparison of sorting algorithms** — when each is appropriate

### Graph Algorithms

- **Depth-first search (DFS)** and **breadth-first search (BFS)** — traversal strategies
- **Dijkstra's shortest path** — weighted graph optimisation
- **Representations** — adjacency matrix vs. adjacency list trade-offs

### Complexity Analysis

- **Big-O, Big-$\Omega$, and Big-$\Theta$** notation — formal definitions and practical use
- **Time vs. space complexity** — analysing both dimensions
- **Classifying common algorithms** — constant, logarithmic, linear, linearithmic, quadratic,
  exponential

## Study Tips

1. **Trace algorithms by hand** on small inputs before writing code — this builds the intuition
   needed for exam trace-table questions.
2. **Learn the complexity classes** cold: $O(1)$, $O(\log n)$, $O(n)$, $O(n \log n)$, $O(n^2)$,
   $O(2^n)$. You should be able to classify any A-Level algorithm instantly.
3. **Understand _why_** merge sort is $O(n \log n)$ and bubble sort is $O(n^2)$, not just that it
   is. Exam questions test reasoning, not memorisation.
4. **Compare algorithms** in terms of time, space, and stability — comparison questions appear
   frequently.
5. **Practice deriving** Big-O from code or pseudocode, counting operations line by line.

## How to Use These Notes

Work through the pages in sidebar order. Each page contains definitions, step-by-step traces, worked
exam examples, and practice problems. Start with searching and sorting, then move to graph
algorithms and complexity analysis.

## Notation

Throughout this section we use the following notation:

| Symbol         | Meaning                                          |
| -------------- | ------------------------------------------------ |
| $O(f(n))$      | Upper bound on growth rate                       |
| $\Omega(f(n))$ | Lower bound on growth rate                       |
| $\Theta(f(n))$ | Tight bound (both upper and lower)               |
| $T(n)$         | Running time as a function of input size $n$     |
| $S(n)$         | Space complexity as a function of input size $n$ |
