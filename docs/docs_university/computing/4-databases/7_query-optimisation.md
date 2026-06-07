---
title: Query Optimisation
tags:
  - Computing
  - University
---

### 7.1 Query Processing Pipeline

$$\mathrm{SQL} \xrightarrow{\mathrm{parse} \mathrm{AST} \xrightarrow{\mathrm{rewrite} \mathrm{Logical} plan \xrightarrow{\mathrm{optimise} \mathrm{Physical} plan \xrightarrow{\mathrm{execute} \mathrm{Result}}}}}$$

### 7.2 Cost-Based Optimisation

The optimiser estimates the cost of alternative execution plans and chooses the cheapest.

**Cost model.** Cost = I/O cost (disk page accesses) + CPU cost. For disk-bound queries, I/O
Dominates.

**Catalog .../4-statistics-and-probability/2_statistics:** Table cardinality ($n$), attribute value
cardinality, number of distinct Values, histogram of value distribution, index information.

**Selectivity estimation.** For a predicate $\sigma_{A = v}(R)$The selectivity is approximately
$1 / V(A, R)$ where $V(A, R)$ is the number of distinct values of $A$ in $R$.

| Predicate type              | Selectivity estimate                             |
| --------------------------- | ------------------------------------------------ |
| $A = v$                     | $1 / V(A, R)$                                    |
| $A \gt v$                   | $(\max(A) - v) / (\max(A) - \min(A))$            |
| $A_1 = v_1 \land A_2 = v_2$ | $1 / V(A_1) \times 1 / V(A_2)$                   |
| $A_1 = v_1 \lor A_2 = v_2$  | $1/V(A_1) + 1/V(A_2) - 1/(V(A_1) \times V(A_2))$ |

### 7.3 Join Algorithms

**Nested-loop join.** For each tuple in $R$Scan all of $S$.

$$\mathrm{Cost} = n_R \cdot n_S \mathrm{ page} accesses (worst case)$$

If one relation fits in memory, buffer it and scan the other: cost = $n_R + n_S$.

**Block nested-loop join.** Use $B$ buffer pages. Load blocks of $R$ into $B - 2$ buffers, scan $S$
With the remaining buffer.

$$\mathrm{Cost} = n_R + \lceil n_R / (B - 2) \rceil \cdot n_S$$

**Sort-merge join.** Sort both relations on the join attribute, then merge.

$$\mathrm{Cost} = 2 \cdot n_R \cdot \log_{B-1}(n_R) + 2 \cdot n_S \cdot \log_{B-1}(n_S) + n_R + n_S$$

Efficient for large relations, especially when both are already sorted.

**Hash join.** Build a hash table on the smaller relation (build phase), then probe with the larger
(probe phase).

$$\mathrm{Cost} = 3 \cdot (n_R + n_S) \mathrm{ (if build relation fits in memory)}$$

Best for equi-joins when one relation fits in memory.

**Index nested-loop join.** For each tuple in $R$Use an index on $S$ to find matching tuples.

$$\mathrm{Cost} = n_R \cdot (\mathrm{index} lookup cost)$$

Efficient if $S$ has an index on the join attribute and $n_R$ is small.

### 7.4 Query Plan Selection

The optimiser explores the space of equivalent logical plans and physical implementations. For $k$
Joins, the number of join orderings is $O(k!)$ (left-deep trees) or $O(3^k)$ (bushy trees).
Practical optimisers use dynamic programming with pruning.

**Heuristic transformations:**

- Push selections down (reduce intermediate result sizes).
- Push projections down (reduce column widths).
- Convert cross products to joins when possible.
- Reorder joins based on estimated cardinalities.

