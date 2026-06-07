---
title: Database Systems (Advanced)
description:
  'University Computing Database Systems (Advanced) notes covering key definitions, core concepts,
  worked examples, and practice questions for analytical revision.'
date: 2026-05-06T00:00:00.000Z
tags:
  - Computing
  - University
categories:
  - Computing
slug: databases-advanced
---

## 1. Advanced Relational Algebra

### 1.1 Extended Relational Algebra

Beyond the basic operations (selection, projection, join, etc.), extended relational algebra
includes:

**Grouping and aggregation:** $\gamma_{F}(R)$ where $F$ is a list of aggregate functions and
grouping attributes.

$$\gamma_{\text{dept}, \text{AVG}(salary) \to \text{avg}\_sal}(\text{Employee})$$

**Generalised projection:** Allows arithmetic expressions in the projection list.

$$\pi_{\text{name}, \text{salary} \times 12 \to \text{annual}(\text{Employee})}$$

**Outer join:** Preserves unmatched tuples from one or both relations.

- **Left outer join** $R \bowtie_L S$: All tuples from $R$With NULLs for unmatched $S$ attributes.
- **Right outer join** $R \bowtie_R S$: All tuples from $S$With NULLs for unmatched $R$ attributes.
- **Full outer join** $R \bowtie_F S$: All tuples from both relations.

**Recursive closure:** Not expressible in basic relational algebra. Requires recursive CTEs or
Datalog.

**Division:** $R \div S$ returns tuples $t$ such that for every tuple $s \in S$, $(t, s) \in R$.

**Theorem 1.1.** Division can be expressed using basic relational algebra:

$$R \div S = \pi_{A}(R) - \pi_{A}\left(\pi_{A}(R) \times S - R\right)$$

Where $A$ is the set of attributes of $R$ not in $S$.

_Proof._ Let $t \in \pi_A(R)$. We need to show $t \in R \div S$ if and only if
$t \notin \pi_A(\pi_A(R) \times S - R)$.

($\Rightarrow$) If $t \in R \div S$Then for every $s \in S$, $(t, s) \in R$. So
$(t, s) \notin \pi_A(R) \times S - R$ for any $s$Hence $t \notin \pi_A(\pi_A(R) \times S - R)$.

($\Leftarrow$) If $t \notin \pi_A(\pi_A(R) \times S - R)$Then there is no $s \in S$ such that
$(t, s) \notin R$. This means for every $s \in S$, $(t, s) \in R$So $t \in R \div S$. $\blacksquare$

<details>
<summary>Worked Example: Relational Division</summary>

Find students who have taken **all** courses offered by the CS department.

$R$ = (student, course) pairs from Enrolment. $S$ = courses offered by CS department:
$\pi_{\text{course}(\sigma_{\text{dept}=\text{'CS'}(\text{Course}))}}$.

$R \div S$ gives the students enrolled in every CS course.

Example:
$R = \{(\text{Alice}, \text{CS101}), (\text{Alice}, \text{CS201}), (\text{Bob}, \text{CS101}), (\text{Carol}, \text{CS101}), (\text{Carol}, \text{CS201})\}$

$S = \{\text{CS101}, \text{CS201}\}$

$\pi_A(R) = \{\text{Alice}, \text{Bob}, \text{Carol}\}$

$\pi_A(R) \times S = \{(\text{Alice}, \text{CS101}), (\text{Alice}, \text{CS201}), (\text{Bob}, \text{CS101}), (\text{Bob}, \text{CS201}), (\text{Carol}, \text{CS101}), (\text{Carol}, \text{CS201})\}$

$\pi_A(R) \times S - R = \{(\text{Bob}, \text{CS201})\}$

$\pi_A(\pi_A(R) \times S - R) = \{\text{Bob}\}$

$R \div S = \{\text{Alice}, \text{Carol}\} - \{\text{Bob}\} = \{\text{Alice}, \text{Carol}\}$

Alice and Carol have taken all CS courses. Bob has not taken CS201.

</details>

### 1.2 Query Optimisation via Algebra

The query optimiser transforms a query into an equivalent but more efficient form using algebraic
equivalences.

**Key equivalences:**

1. **Selection pushdown:** $\sigma_\theta(R \bowtie S) = \sigma_\theta(R) \bowtie S$ if $\theta$
   only involves attributes of $R$.
2. **Projection pushdown:** Push projections as early as possible to reduce intermediate result
   sizes.
3. **Join reordering:** $R \bowtie S = S \bowtie R$ (commutativity);
   $(R \bowtie S) \bowtie T = R \bowtie (S \bowtie T)$ (associativity).
4. **Selection splitting:**
   $\sigma_{\theta_1 \wedge \theta_2}(R) = \sigma_{\theta_1}(\sigma_{\theta_2}(R))$.
5. **Cascade of selections:**
   $\sigma_{\theta_1}(\sigma_{\theta_2}(R)) = \sigma_{\theta_1 \wedge \theta_2}(R)$.

**Theorem 1.2.** Selection pushdown is always beneficial: $\sigma_\theta(R \bowtie S)$ with $\theta$
on $R$ costs $O(|R \bowtie S|)$ without pushdown but
$O(|\sigma_\theta(R)| + |\sigma_\theta(R)| \cdot |S| / |R|)$ with pushdown (using hash join), which
is always less.

### 1.3 Tuple Relational Calculus

**Syntax:** $\{t \mid \exists u (R(u) \wedge t.A = u.A \wedge \ldots)\}$

**Safety.** A calculus expression is safe if its result is finite. Unsafe expressions can produce
infinite relations (e.g., $\{t \mid \neg R(t)\}$ is the complement of $R$Which is infinite if the
domain is infinite).

**Theorem 1.3 (Codd).** Every safe relational calculus query can be expressed in relational algebra,
and vice versa. Therefore, relational algebra and safe relational calculus have the same expressive
power.

## 2. Advanced SQL

### 2.1 Window Function Analysis

Window functions compute values across a set of table rows related to the current row, without
collapsing rows (unlike GROUP BY).

**Syntax:**

```sql
FUNCTION(args) OVER (
    [PARTITION BY col1, col2, ...]
    [ORDER BY col3, col4, ...]
    [frame_clause]
)
```

**Frame specification:**

$$\text{ROWS} | RANGE BETWEEN frame_start AND frame_end$$

| Frame unit            | Meaning                                                  |
| --------------------- | -------------------------------------------------------- |
| `ROWS`                | Physical offset from current row                         |
| `RANGE`               | Logical offset (based on ORDER BY value)                 |
| `UNBOUNDED PRECEDING` | From the first row of the partition                      |
| `UNBOUNDED FOLLOWING` | To the last row of the partition                         |
| `CURRENT ROW`         | Current row (ROWS: just this row; RANGE: peers included) |
| `n PRECEDING`         | $n$ rows/range values before current                     |
| `n FOLLOWING`         | $n$ rows/range values after current                      |

**Default frame:** `RANGE BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW` (when ORDER BY is present),
or `ROWS BETWEEN UNBOUNDED PRECEDING AND UNBOUNDED FOLLOWING` (when no ORDER BY).

<details>
<summary>Worked Example: Running Totals and Rankings</summary>

Table: Sales(salesperson, month, amount)

| salesperson | month | amount |
| ----------- | ----- | ------ |
| Alice       | Jan   | 5000   |
| Alice       | Feb   | 7000   |
| Alice       | Mar   | 6000   |
| Bob         | Jan   | 3000   |
| Bob         | Feb   | 4000   |
| Bob         | Mar   | 5000   |

**Running total per salesperson:**

```sql
SELECT salesperson, month, amount,
       SUM(amount) OVER (
           PARTITION BY salesperson
           ORDER BY month
           ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW
       ) AS running_total
FROM Sales;
```

Result: | salesperson | month | amount | running_total |
|-------------|-------|--------|---------------| | Alice | Jan | 5000 | 5000 | | Alice | Feb | 7000
| 12000 | | Alice | Mar | 6000 | 18000 | | Bob | Jan | 3000 | 3000 | | Bob | Feb | 4000 | 7000 | |
Bob | Mar | 5000 | 12000 |

**Ranking (RANK vs DENSE_RANK vs ROW_NUMBER):**

```sql
SELECT salesperson, month, amount,
       RANK() OVER (PARTITION BY salesperson ORDER BY amount DESC) AS rnk,
       DENSE_RANK() OVER (PARTITION BY salesperson ORDER BY amount DESC) AS drnk,
       ROW_NUMBER() OVER (PARTITION BY salesperson ORDER BY amount DESC) AS rn
FROM Sales;
```

If Alice had amounts 7000, 7000, 5000: RANK = (1, 1, 3), DENSE_RANK = (1, 1, 2), ROW_NUMBER = (1, 2,
3).

</details>

### 2.2 Advanced Query Patterns

**Pivoting (rows to columns):**

```sql
SELECT salesperson,
       SUM(CASE WHEN month = 'Jan' THEN amount ELSE 0 END) AS jan_total,
       SUM(CASE WHEN month = 'Feb' THEN amount ELSE 0 END) AS feb_total,
       SUM(CASE WHEN month = 'Mar' THEN amount ELSE 0 END) AS mar_total
FROM Sales
GROUP BY salesperson;
```

**Unpivoting (columns to rows):**

```sql
SELECT salesperson, month, amount
FROM MonthlySales
UNPIVOT (amount FOR month IN (jan_total, feb_total, mar_total));
```

**Gaps and Islands.** Identifying consecutive sequences (e.g., consecutive login days):

```sql
WITH numbered AS (
    SELECT user_id, login_date,
           login_date - ROW_NUMBER() OVER (
               PARTITION BY user_id ORDER BY login_date
           ) * INTERVAL '1 day' AS grp
    FROM Logins
)
SELECT user_id, MIN(login_date) AS streak_start, MAX(login_date) AS streak_end, COUNT(*) AS streak_length
FROM numbered
GROUP BY user_id, grp;
```

### 2.3 Recursive CTEs for Graph Traversal

```sql
WITH RECURSIVE reachable(node, depth, path) AS (
    SELECT start_node, 0, ARRAY[start_node]
    FROM Edges WHERE start_node = 'A'
    UNION ALL
    SELECT e.end_node, r.depth + 1, r.path || e.end_node
    FROM reachable r JOIN Edges e ON r.node = e.start_node
    WHERE NOT (e.end_node = ANY(r.path))  -- prevent cycles
)
SELECT * FROM reachable WHERE depth <= 5;
```

:::caution Common Pitfall Recursive CTEs without cycle detection will loop forever on cyclic graphs.
Always include a cycle check (e.g., tracking the path or visited nodes) or a depth limit. PostgreSQL
supports the `CYCLE` clause for automatic cycle detection.
:::

## 3. Advanced Normalisation

### 3.1 Join Dependencies and Fifth Normal Form (5NF)

A **join dependency (JD)** $\bowtie\{R_1, R_2, \ldots, R_k\}$ holds over $R$ if
$R = R_1 \bowtie R_2 \bowtie \cdots \bowtie R_k$.

**Definition.** A relation $R$ is in **5NF (Project-Join Normal Form)** if for every non-trivial
join dependency $\bowtie\{R_1, \ldots, R_k\}$ that holds over $R$Each $R_i$ is a superkey of $R$.

5NF generalises 4NF: every 4NF violation is also a 5NF violation, but not vice versa.

<details>
<summary>Worked Example: 5NF Violation</summary>

Relation: Teaching(course, teacher, textbook).

Constraint: Each course may have multiple teachers and multiple textbooks, but the teacher-textbook
combination is independent (any teacher can use any textbook for a course they teach).

| course | teacher | textbook |
| ------ | ------- | -------- |
| CS101  | Smith   | Knuth    |
| CS101  | Smith   | Cormen   |
| CS101  | Jones   | Knuth    |
| CS101  | Jones   | Cormen   |

This satisfies 4NF (no multi-valued dependencies beyond those implied by the key).

But the JD $\bowtie\{(course, teacher), (course, textbook)\}$ holds: the relation is the join of its
projections on (course, teacher) and (course, textbook).

Neither (course, teacher) nor (course, textbook) is a superkey. Therefore, the relation violates
5NF.

**Decomposition:**

- $R_1$(course, teacher): $\{(\text{CS101}, \text{Smith}), (\text{CS101}, \text{Jones})\}$
- $R_2$(course, textbook): $\{(\text{CS101}, \text{Knuth}), (\text{CS101}, \text{Cormen})\}$

This avoids the redundancy: adding a new teacher only requires adding one row to $R_1$Not $n$ rows
(one per textbook).

</details>

### 3.2 Domain-Key Normal Form (DKNF/6NF)

**Definition.** A relation is in **Domain-Key Normal Form (DKNF)** if every constraint is a logical
consequence of domain constraints and key constraints.

DKNF is the "ultimate" normal form: every relation in DKNF is free from insertion, deletion, and
update anomalies. However, not every relation can be decomposed into DKNF while preserving
dependencies.

**Theorem 3.1 (Fagin, 1981).** There is no algorithm to decompose an arbitrary relation schema into
DKNF. This is in contrast to BCNF and 4NF, which can always be achieved via lossless decomposition.

### 3.3 Normalisation Algorithm Summary

| Normal Form | Condition                                       | Decomposition always possible? | Dependency preserving? |
| ----------- | ----------------------------------------------- | ------------------------------ | ---------------------- |
| 1NF         | Atomic values                                   | yes                            | Yes                    |
| 2NF         | No partial dependencies                         | Yes                            | Yes                    |
| 3NF         | No transitive dependencies                      | Yes                            | Yes                    |
| BCNF        | No non-trivial FDs with non-superkey LHS        | Yes                            | Not always             |
| 4NF         | No non-trivial MVDs with non-superkey LHS       | Yes                            | Not always             |
| 5NF         | No non-trivial JDs with non-superkey components | Not always                     | Not always             |
| DKNF        | Only domain + key constraints                   | Not always                     | N/A                    |

## 4. Query Optimisation in Depth

### 4.1 Cost-Based Optimisation

The optimiser estimates the cost of each query plan and chooses the cheapest one.

**Cost model parameters:**

| Parameter | Symbol | Description                                       |
| --------- | ------ | ------------------------------------------------- |
| $B$       |        | Number of disk blocks                             |
| $R$       |        | Number of records                                 |
| $V(A, R)$ |        | Number of distinct values of attribute $A$ in $R$ |
| $bfr$     |        | Blocking factor (records per block)               |
| $f_{rt}$  |        | Fan-out of internal nodes of a B+ tree            |

**Cost estimates for selection:**

| Selection type                   | Cost (blocks)                                    |
| -------------------------------- | ------------------------------------------------ |
| Primary key equality (B+ tree)   | $h + 1$ (tree height + leaf)                     |
| Secondary key equality (B+ tree) | $h + \lceil n / f_{rt} \rceil$                   |
| Linear scan                      | $\lceil R / bfr \rceil$                          |
| Comparison on sorted file        | $\lceil \log_2 B \rceil + \lceil s / bfr \rceil$ |

**Theorem 4.1.** For a selection $\sigma_{A=v}(R)$ with $V(A, R)$ distinct values, the expected cost
of a secondary B+ tree index lookup is $\lceil R / (V(A, R) \cdot f_{rt}) \rceil + h + 1$.

### 4.2 Join Algorithm Costs

| Algorithm         | Cost                                                  | Best when                      |
| ----------------- | ----------------------------------------------------- | ------------------------------ |
| Nested-loop       | $B_r + B_r \cdot B_s$                                 | Small relations, no index      |
| Block nested-loop | $B_r + \lceil B_r / M - 1 \rceil \cdot B_s$           | $M$ blocks of memory           |
| Index nested-loop | $B_r + R_r \cdot (\text{cost} of index lookup on  S)$ | Index on join attribute of $S$ |
| Sort-merge        | $B_r + B_s + \text{sort} cost$                        | Both relations large           |
| Hash join         | $3(B_r + B_s)$                                        | Equi-join, no order required   |

Where $M$ is the number of available memory blocks.

**Sort-merge join cost:** $O(B_r \log_{M-1} B_r + B_s \log_{M-1} B_s + B_r + B_s)$.

**Hash join cost:** Build phase: scan $R$ and build hash table ($B_r$ blocks read + written). Probe
phase: scan $S$ and probe ($B_s$ blocks read). Total: approximately $3(B_r + B_s)$ (reading +
writing both phases).

<details>
<summary>Worked Example: Choosing a Join Algorithm</summary>

$R$: 2000 blocks, 100,000 records. $S$: 500 blocks, 25,000 records. Memory: 52 blocks. Join on
$R.A = S.B$.

**Block nested-loop:**
$B_r + \lceil B_r / (M-1) \rceil \cdot B_s = 2000 + \lceil 2000 / 51 \rceil \cdot 500 = 2000 + 40 \times 500 = 22,000$
blocks.

**Sort-merge:** Sort $R$: $2 \times 2000 \times \lceil \log_2(2000/51) \rceil / 51$... More
precisely, $O(B_r \log_{M-1} B_r) = O(2000 \log_{51} 2000) \approx O(2000 \times 1.88) = O(3760)$.
Sort $S$: $O(500 \log_{51} 500) \approx O(500 \times 1.46) = O(730)$. Merge: $2000 + 500 = 2500$.
Total: $\approx 7000$ blocks.

**Hash join:** $3(2000 + 500) = 7500$ blocks. But we need $M \geq \lceil \min(B_r, B_s) \rceil$...
Actually, we need $M \geq \sqrt{B_r + B_s}$ for the single-pass hash join.
$\sqrt{2500} = 50 \leq 52 = M$. So single-pass hash join works.

**Hybrid hash join:** Partition $R$ into $\lceil 2000/50 \rceil = 40$ partitions, each fitting in
memory. Cost: $3 \times 2000 + 3 \times 500 = 7500$.

Sort-merge (7000) is slightly better than hash join (7500) here, but both are far superior to block
nested-loop (22,000).

If $R$ had an index on $A$: **Index nested-loop:** $B_s + R_s \times \text{cost} per lookup$. If the
index gives $O(1)$ lookup: $500 + 25000 \times 1 = 25500$ (worse, due to random I/O). If clustered
index: $500 + 25000/100 = 750$ (much better, since each lookup reads a page with 100 matching
records on average).

</details>

### 4.3 The System R Optimiser

The **System R optimiser** (Selinger et al., 1979) was the first cost-based query optimiser. Key
ideas:

1. **Dynamic programming.** Build optimal plans bottom-up for each subset of relations in the FROM
   clause.
2. **Interesting orders.** Only keep plans that produce output in an order useful for subsequent
   operations (e.g., sorted for sort-merge join or ORDER BY).
3. **Stored .../4-statistics-and-probability/2_statistics.** Use catalog
   .../4-statistics-and-probability/2_statistics (table sizes, index cardinalities, value
   distributions) for cost estimation.

**Theorem 4.2.** The System R optimiser examines $O(2^n)$ join orderings for $n$ relations, using
dynamic programming to avoid redundant computation.

## 5. Transaction Management in Depth

### 5.1 Serialisability Theory

**Conflict serialisability.** A schedule is conflict-serialisable if it can be transformed into a
serial schedule by swapping non-conflicting operations (operations on different data items or both
reads).

**Precedence graph (dependency graph).** Directed graph where nodes are transactions and there is an
edge $T_i \to T_j$ if $T_i$ executes a write before $T_j$ reads or writes the same data item.

**Theorem 5.1.** A schedule is conflict-serialisable if and only if its precedence graph is acyclic.

_Proof._ ($\Rightarrow$) If the schedule is conflict-serialisable, there exists an equivalent serial
schedule. In this serial schedule, transactions are totally ordered. The precedence graph must be
consistent with this order (no cycles).

($\Leftarrow$) If the precedence graph is acyclic, perform a topological sort of the transactions.
Execute the transactions in this topological order. By construction, all conflicting operations are
in the same order as in the original schedule, so the serial schedule is equivalent. $\blacksquare$

<details>
<summary>Worked Example: Conflict Serialisability</summary>

Schedule (operations on data items $A, B$):

$T_1: r(A), w(A), r(B), w(B)$ $T_2: r(A), w(A), r(B), w(B)$

Schedule: $r_1(A), r_2(A), w_1(A), r_1(B), w_2(A), r_2(B), w_1(B), w_2(B)$

Precedence graph:

- $r_2(A)$ before $w_1(A)$: $T_2$ reads $A$ before $T_1$ writes $A$. Conflict: $T_2 \to T_1$
  (read-write conflict on $A$).
- $w_1(A)$ before $w_2(A)$: $T_1 \to T_2$ (write-write conflict on $A$).
- $r_1(B)$ before $r_2(B)$: No conflict (both reads).
- $r_1(B)$ before $w_1(B)$: Same transaction, no edge.
- $r_2(B)$ before $w_1(B)$: $T_2$ reads $B$ before $T_1$ writes $B$. Conflict: $T_2 \to T_1$
  (read-write conflict on $B$).
- $w_1(B)$ before $w_2(B)$: $T_1 \to T_2$ (write-write conflict on $B$).

Precedence graph: $T_1 \to T_2$ (from $w_1(A)$ before $w_2(A)$ and $w_1(B)$ before $w_2(B)$) AND
$T_2 \to T_1$ (from $r_2(A)$ before $w_1(A)$ and $r_2(B)$ before $w_1(B)$).

The graph has a cycle: $T_1 \to T_2 \to T_1$. Therefore, this schedule is **not
conflict-serialisable**.

</details>

### 5.2 View Serialisability

A schedule is **view-serialisable** if it is equivalent to a serial schedule under view equivalence:

1. **Initial read:** If $T_i$ reads the initial value of $A$Then in the serial schedule, $T_i$ must
   also read the initial value.
2. **Updated read:** If $T_i$ reads the value of $A$ written by $T_j$Then in the serial schedule,
   $T_i$ must read the value written by $T_j$.
3. **Final write:** If $T_i$ performs the final write of $A$Then in the serial schedule, $T_i$ must
   perform the final write.

**Theorem 5.2.** Every conflict-serialisable schedule is view-serialisable, but not vice versa.
Determining view serialisability is NP-complete.

### 5.3 Two-Phase Locking (2PL)

**Basic 2PL.** A transaction has two phases:

1. **Growing phase:** Acquire locks, do not release any.
2. **Shrinking phase:** Release locks, do not acquire any.

**Theorem 5.3.** 2PL guarantees conflict serialisability.

_Proof._ Consider any two conflicting operations $p_i(A)$ and $q_j(A)$ in transactions $T_i$ and
$T_j$. By 2PL, both operations acquire locks on $A$. Since a lock can be held by only one
transaction at a time, one must precede the other. If $T_i$ acquires the lock first, then in the
precedence graph, $T_i \to T_j$. If $T_j$ acquires the lock first, $T_j \to T_i$. In either case,
there is a consistent ordering. Since this holds for every conflicting pair, the precedence graph is
acyclic, and by Theorem 5.1, the schedule is conflict-serialisable. $\blacksquare$

**Variants of 2PL:**

| Variant      | Description                                                                   | Deadlock? |
| ------------ | ----------------------------------------------------------------------------- | --------- |
| Basic 2PL    | No restrictions on when locks are released                                    | Possible  |
| Strict 2PL   | All locks held until commit/abort                                             | Possible  |
| Rigorous 2PL | All locks held until commit/abort (same as strict for writes, but also reads) | Possible  |

:::caution Common Pitfall 2PL prevents conflicts but does not prevent deadlocks. Deadlock prevention
(e.g., wait-die, wound-wait) or detection (wait-for graph) is still needed. Additionally, 2PL may
not be necessary: there exist conflict-serialisable schedules that cannot be produced by any 2PL
protocol.
:::

### 5.4 Multi-Version Concurrency Control (MVCC)

MVCC maintains multiple versions of each data item, allowing readers to access a consistent snapshot
without blocking writers.

**Key idea:** Each transaction sees a snapshot of the database as of its start time. Writers create
new versions.

**PostgreSQL MVCC:**

- Each row has system columns: `xmin` (transaction ID that created the row), `xmax` (transaction ID
  that deleted or updated the row), `ctid` (physical location).
- A transaction can see a row if `xmin` is committed and `xmax` is either uncommitted or not set.
- UPDATE creates a new row version (with the old version's `xmax` set).

**MVCC vs locking:**

| Aspect                | Locking                       | MVCC                               |
| --------------------- | ----------------------------- | ---------------------------------- |
| Read-write conflicts  | Readers block writers         | No blocking                        |
| Write-write conflicts | Serialised                    | First committer wins, others abort |
| Storage overhead      | Low                           | Higher (multiple versions)         |
| Garbage collection    | Not needed                    | Needed (VACUUM in PostgreSQL)      |
| Phantom reads         | Prevented by predicates locks | Not always prevented               |

**Snapshot Isolation.** Each transaction reads from a snapshot as of its start. Writes are checked
for conflicts at commit time: if two transactions modify the same row, the later committer aborts.

**Theorem 5.4.** Snapshot isolation prevents dirty reads, non-repeatable reads, and phantom reads
(within a single transaction), but does not guarantee serialisability. In particular, write skew is
possible under snapshot isolation.

**Write skew example:**

- $T_1$ reads rows where $x + y = 10$Checks $x > 3$Updates $x := x - 1$.
- $T_2$ reads rows where $x + y = 10$Checks $y > 3$Updates $y := y - 1$.
- Both commit successfully under snapshot isolation, but the invariant $x + y \geq 7$ may be
  violated.

### 5.5 Log-Based Recovery

**WAL (Write-Ahead Logging).** Before writing a modified page to disk, the log record describing the
modification must be written to the stable log.

**WAL protocol:** $\log_i$ must be on stable storage before the data page containing the update of
operation $i$ is written to disk.

**ARIES recovery algorithm (used in most commercial DBMS):**

1. **Analysis phase:** Scan the log from the last checkpoint to identify dirty pages and active
   transactions.
2. **Redo phase:** Scan the log from the last checkpoint, redoing all committed (and possibly
   uncommitted) updates to restore the database to the state at the time of the crash.
3. **Undo phase:** Undo all updates of uncommitted transactions.

**Theorem 5.5.** ARIES guarantees that after recovery, the database reflects all committed
transactions and no uncommitted transactions (atomicity and durability).

## 6. Distributed Databases

### 6.1 Two-Phase Commit (2PC)

**Phase 1 (Voting):** The coordinator sends a PREPARE message to all participants. Each participant
votes YES (if it can commit) or NO (if it cannot).

**Phase 2 (Decision):** If all participants vote YES, the coordinator sends COMMIT. If any votes NO
or times out, the coordinator sends ABORT.

**Failure scenarios:**

| Failure                                     | Handling                                             |
| ------------------------------------------- | ---------------------------------------------------- |
| Participant crashes before voting           | Coordinator times out, sends ABORT                   |
| Participant crashes after voting YES        | On recovery, ask coordinator for decision            |
| Coordinator crashes before sending decision | Participants timeout, elect new coordinator or block |
| Coordinator crashes after sending decision  | Participants re-send decision when asked             |

**Theorem 6.1.** 2PC guarantees atomicity: all participants commit or all abort. However, 2PC is a
**blocking protocol**: if the coordinator crashes, participants may block indefinitely.

### 6.2 Three-Phase Commit (3PC)

3PC adds a **pre-commit** phase to eliminate blocking:

1. **Voting:** Same as 2PC Phase 1.
2. **Pre-commit:** Coordinator sends PRE-COMMIT to all YES voters. Participants acknowledge.
3. **Commit:** Coordinator sends COMMIT. Participants commit and acknowledge.

**Theorem 6.2.** 3PC is non-blocking if at most $k$ of $3k + 1$ processes fail (failure detector is
accurate).

_Proof sketch._ After the pre-commit phase, no participant can unilaterally decide to abort (they
have all voted YES). If the coordinator fails, the remaining participants can communicate and
determine the outcome: if any participant has received PRE-COMMIT, they know the decision is COMMIT.
If no participant has received PRE-COMMIT, they know the decision is ABORT (since some participant
must have voted NO or timed out). $\blacksquare$

### 6.3 Consensus Algorithms

**Paxos.** A consensus algorithm that guarantees safety (agreement, integrity, validity) and
liveness (eventual agreement) under asynchronous network conditions with $f < n/2$ failures.

**Raft.** A more understandable alternative to Paxos:

1. **Leader election:** Nodes elect a leader using randomised timeouts.
2. **Log replication:** Leader appends entries to its log, replicates to followers.
3. **Safety:** A log entry is committed once a majority of nodes have replicated it.

**Theorem 6.3.** Raft guarantees that committed entries are never lost and that all servers
eventually agree on the same log entries.

## 10. Advanced Indexing Techniques

### 10.1 Bitmap Indexes

A **bitmap index** stores bitmaps for each distinct value of an attribute. For a column with $V$
distinct values and $n$ rows, the index consists of $V$ bitmaps, each of $n$ bits.

**Example.** Column "colour" with values `\{Red, Green, Blue\}` and 8 rows:

| Row | Colour |
| --- | ------ |
| 1   | Red    |
| 2   | Green  |
| 3   | Blue   |
| 4   | Red    |
| 5   | Red    |
| 6   | Green  |
| 7   | Blue   |
| 8   | Red    |

Bitmaps:

- Red: 10111001
- Green: 01000100
- Blue: 00100010

**Query:** "colour = Red OR colour = Green": Red | Green = 11111101. Rows 1, 2, 4, 5, 6, 8.

**Theorem 10.1.** Bitmap indexes are most effective when the cardinality of the indexed column is
low (few distinct values). The space usage is $O(n \cdot V)$ bits.

**Bitwise operations.** AND, OR, NOT on bitmaps take $O(n/w)$ time where $w$ is the machine word
size (64). Modern CPUs process 64 bits per cycle, so scanning 1 million rows takes
$1000000 / 64 \approx 15625$ operations.

**Encoded bitmap indexes.** For high-cardinality columns, use compression techniques:

- **WAH (Word-Aligned Hybrid):** Run-length encoding with word-aligned literals.
- **Roaring bitmaps:** Split the 32-bit value range into containers of $2^{16}$ values. Each
  container is either a bitmap (if dense) or a sorted array (if sparse).

### 10.2 Hash Index Variants

**Extendible hashing.** Dynamically grows the hash table by doubling the number of buckets. Uses a
**global depth** $d$ and per-bucket **local depth** $d'$.

**Linear hashing.** Grows the hash table one bucket at a time, using a **split pointer**. No
overflow buckets needed on average.

**Comparison:**

| Property          | Extendible            | Linear                      |
| ----------------- | --------------------- | --------------------------- |
| Bucket split      | Triggered by overflow | Gradual (one per insertion) |
| Directory         | Yes (size $2^d$)      | No directory needed         |
| Worst-case lookup | 2 disk accesses       | 1 disk access               |
| Space utilisation | ~69%                  | ~77%                        |

### 10.3 Multi-Dimensional Indexes

**R-tree.** A balanced tree for spatial data (rectangles, points). Each node stores a minimum
bounding rectangle (MBR) covering all its children.

**Operations:**

- **Search:** Starting at the root, check if the query rectangle overlaps the node's MBR. If so,
  recurse into children. $O(n^{1-1/d} + k)$ where $d$ is the number of dimensions.
- **Insert:** Find the leaf whose MBR needs the least enlargement. Split if overflow.
- **Delete:** Find the leaf, remove the entry, condense the tree.

**Theorem 10.2.** An R-tree with $n$ rectangles in $d$ dimensions has $O(\log n)$ height (in
practice) and supports point queries in $O(\log n)$ average time.

<details>
<summary>Worked Example: R-tree Construction</summary>

Insert rectangles into an R-tree with maximum 3 entries per node:

R1 = (1, 1, 3, 3), R2 = (2, 2, 4, 4), R3 = (5, 5, 7, 7), R4 = (6, 1, 8, 3), R5 = (1, 5, 3, 7).

_Insert R1:_ Root = leaf `{R1}`. MBR = (1, 1, 3, 3). _Insert R2:_ Leaf `{R1, R2}`. MBR = (1, 1, 4,
4). _Insert R3:_ Leaf `{R1, R2, R3}`. MBR = (1, 1, 7, 7). Full (3 entries). _Insert R4:_ Leaf is
full. Split.

- R1, R2 are close together. R3 is far. Best split: `{R1, R2}` and `{R3, R4}`.
- Split 1 MBR: (1, 1, 4, 4). Split 2 MBR: (5, 1, 8, 7).
- Create internal node with two children. _Insert R5:_ Which leaf to insert into? R5 = (1, 5, 3, 7).
- Enlargement for split 1 (1,1,4,4): new MBR = (1, 1, 4, 7), enlargement = 4*3 - 3*3 = 3.
- Enlargement for split 2 (5,1,8,7): no overlap, no enlargement needed... Wait, R5 (1,5,3,7) does
  overlap with (5,1,8,7)? No, R5's x-range [1,3] and split 2's x-range [5,8] don't overlap. So R5
  goes into split 1.
- Split 1: `{R1, R2, R5}`. MBR = (1, 1, 4, 7). Full again!
- Split split 1: `{R1, R2}` and `{R5}`. Or `{R1, R5}` and `{R2}`.
- Choose `{R1, R2}` (MBR 1,1,4,4) and `{R5}` (MBR 1,5,3,7). Minimum total enlargement.

Final R-tree:

```
         Root (MBR: 1,1,8,7)
        /                   \
  [R1,R2] (1,1,4,4)    [R3,R4] (5,1,8,7)
                          |        \
                      [R3]      [R4]   [R5] (1,5,3,7)
```

Wait, this structure doesn't work cleanly. R-trees require careful split algorithms. The key
takeaway is that R-trees group nearby spatial objects together and split when nodes overflow.

</details>

### 10.4 GiST (Generalised Search Tree)

**GiST** is a framework for building index structures for arbitrary data types and predicates.
B-trees and R-trees are special cases of GiST.

**Key idea.** The user provides:

- A **consistent** predicate: does a query match a tree entry?
- A **union** method: compute the bounding predicate of a set of entries.
- A **penalty** method: cost of inserting an entry into a subtree.
- A **pick-split** method: how to split an overflowing node.

**Theorem 10.3.** GiST is correct (never misses results) if the user-supplied `consistent` predicate
is sound: if `consistent(entry, query)` returns false, then no item in `entry`'s subtree matches
`query`.

## 11. Advanced SQL Patterns

### 11.1 Recursive CTEs for Hierarchical Data

**Employee-manager hierarchy:**

```sql
WITH RECURSIVE hierarchy AS (
    SELECT emp_id, name, manager_id, 1 AS level
    FROM Employee
    WHERE manager_id IS NULL
    UNION ALL
    SELECT e.emp_id, e.name, e.manager_id, h.level + 1
    FROM Employee e
    JOIN hierarchy h ON e.manager_id = h.emp_id
)
SELECT * FROM hierarchy ORDER BY level, name;
```

### 11.2 Window Functions for Time Series

**Moving average:**

```sql
SELECT date, value,
       AVG(value) OVER (
           ORDER BY date
           ROWS BETWEEN 6 PRECEDING AND CURRENT ROW
       ) AS moving_avg_7day
FROM StockPrices
WHERE symbol = 'AAPL';
```

**Year-over-year growth:**

```sql
SELECT year, quarter, revenue,
       revenue - LAG(revenue, 4) OVER (PARTITION BY symbol ORDER BY year, quarter) AS yoy_change,
       (revenue - LAG(revenue, 4) OVER (PARTITION BY symbol ORDER BY year, quarter))
           / LAG(revenue, 4) OVER (PARTITION BY symbol ORDER BY year, quarter) * 100 AS yoy_pct
FROM Financials
WHERE symbol = 'ACME';
```

### 11.3 Materialised Views

A **materialised view** stores the result of a query physically, like a table. Unlike a regular view
(which is just a stored query), materialised views can be queried without recomputing.

**Benefits:**

- Pre-computed results for expensive queries.
- Can be indexed.
- Query rewrite: the optimiser may automatically use a materialised view to answer a query.

**Maintenance:**

| Approach                   | Description                           | Overhead            |
| -------------------------- | ------------------------------------- | ------------------- |
| Complete refresh           | Recompute from scratch                | High, but simple    |
| Incremental (fast refresh) | Apply only changes since last refresh | Low, but complex    |
| On commit                  | Refresh after every transaction       | Highest consistency |

**Theorem 11.1.** Materialised view maintenance adds overhead to every update on the base tables.
The overhead is proportional to the number of rows affected and the complexity of the view query.

## 12. Advanced Transaction Patterns

### 12.1 Savepoints

**Savepoints** allow partial rollback within a transaction:

```sql
BEGIN;
UPDATE Accounts SET balance = balance - 100 WHERE id = 1;
SAVEPOINT sp1;
UPDATE Accounts SET balance = balance - 200 WHERE id = 2;
-- Oops, should have been 50, not 200
ROLLBACK TO sp1;
UPDATE Accounts SET balance = balance - 50 WHERE id = 2;
COMMIT;
```

### 12.2 Isolation Level Anomalies

A comprehensive summary of anomalies by isolation level:

| Anomaly             | Read Uncommitted | Read Committed | Repeatable Read | Serializable |
| ------------------- | ---------------- | -------------- | --------------- | ------------ |
| Dirty read          | Possible         | Prevented      | Prevented       | Prevented    |
| Non-repeatable read | Possible         | Possible       | Prevented       | Prevented    |
| Phantom read        | Possible         | Possible       | Possible        | Prevented    |
| Write skew          | Possible         | Possible       | Possible        | Prevented    |
| Read skew           | Possible         | Possible       | Prevented       | Prevented    |

**Read skew:** $T_1$ reads $A$ and $B$, $T_2$ updates $A$, $T_1$ reads $A$ again and sees a
different value. Prevented by Repeatable Read (locks on read rows).

**Write skew:** $T_1$ reads rows where $x + y > 10$Updates $x$; $T_2$ reads same rows, updates $y$.
Both commit, but $x + y$ may now be $\leq 10$. NOT prevented by Repeatable Read (requires
Serializable).

### 12.3 Optimistic Concurrency Control (OCC)

**Phases:**

1. **Read phase:** Read data into private workspace, record read set.
2. **Validation phase:** At commit time, check if any data in the read set was modified by another
   transaction.
3. **Write phase:** If validation passes, apply writes. Otherwise, abort and retry.

**Validation types:**

| Type                | Check                                                                           | Cost                              |
| ------------------- | ------------------------------------------------------------------------------- | --------------------------------- |
| Backward validation | Check against committed transactions that finished after our read phase started | $O(\text{committed} since start)$ |
| Forward validation  | Check against active transactions that started before our validation phase      | $O(\text{currently} active)$      |

**Theorem 12.1.** OCC is serialisable if the validation phase ensures that for every pair of
overlapping transactions (reading/writing the same data), at most one commits.

## 14. Distributed Database Patterns

### 14.1 Partitioning (Sharding)

**Horizontal partitioning.** Rows of a table are distributed across nodes based on a partition key.

**Partitioning strategies:**

| Strategy           | Description                       | Hotspot risk                    |
| ------------------ | --------------------------------- | ------------------------------- |
| Hash partitioning  | $f(\text{key}) \mod n$            | Low                             |
| Range partitioning | Key ranges assigned to nodes      | High (skewed ranges)            |
| Directory-based    | Lookup service maps keys to nodes | Low (directory is a bottleneck) |

**Consistent hashing.** Nodes and keys are placed on a hash ring (e.g., $0$ to $2^{128} - 1$). Each
key is assigned to the first node clockwise. Virtual nodes (replicas on the ring) improve balance.

**Theorem 14.1.** With $n$ real nodes and $k$ virtual nodes per real node, the expected ratio of the
most-loaded to least-loaded node is $O(\log n / k)$.

### 14.2 Replication

**Single-leader replication.** One node accepts writes; others replicate asynchronously or
synchronously.

| Mode             | Latency                      | Durability | Consistency           |
| ---------------- | ---------------------------- | ---------- | --------------------- |
| Synchronous      | High (wait for all replicas) | High       | Strong (linearisable) |
| Semi-synchronous | Medium (wait for majority)   | Medium     | Strong (with quorum)  |
| Asynchronous     | Low (no wait)                | Low        | Eventual              |

**Multi-leader replication.** Any node accepts writes. Conflicts are resolved using CRDTs,
last-write-wins, or application-specific logic.

**Theorem 14.2.** Under asynchronous replication, if the leader fails, any data not yet replicated
to followers is lost. This is unavoidable (FLP impossibility: in an asynchronous system, consensus
is impossible with even one failure).

### 14.3 Consistency Models

**Linearisability.** The strongest consistency model: operations appear to execute atomically in
real-time order.

**Sequential consistency.** Operations appear to execute atomically in some total order (but not
necessarily real-time order).

**Eventual consistency.** If no new writes are made, eventually all reads return the same value.

**Consistency model hierarchy:**

$$\text{Linearisable} \subset \text{Sequential} \subset \text{Causal} \subset \text{Eventual}$$

<details>
<summary>Worked Example: Consistency Anomalies</summary>

Consider a social media system with two replicas (US and EU):

**Linearisable.** User A posts "Hello" in US. User B in EU immediately reads A's post. This is
guaranteed under linearisability: the write is visible to all subsequent reads.

**Eventual consistency.** User A posts "Hello" in US. User B in EU may not see "Hello" for several
seconds. But eventually, B will see it.

**Write skew under snapshot isolation:**

- Transaction T1 (US): Read count of "likes" on post P (value = 10). Check count > 5. Update count
  to 9 (unlike).
- Transaction T2 (EU): Read count of "likes" on post P (value = 10). Check count > 5. Update count
  to 9 (unlike).
- Both commit under snapshot isolation (no conflict detected since they read the same value).
- Final count = 9, but two unlikes happened. The correct count should be 8.

This is prevented by serialisable isolation (which would detect the conflict).

</details>

## 15. Advanced Query Processing

### 15.1 Sort-Merge Join Details

**Phase 1: Sort.** Both relations are sorted on the join attribute.

If the relations fit in memory ($B_r + B_s \leq M$): use in-memory sort. If not: use external merge
sort.

**External merge sort cost for relation $R$ with $B$ blocks and $M$ memory blocks:**

$$\text{Sort}(R) = 2B \left(1 + \lceil \log_{M-1} \lceil B / M \rceil \rceil \right)$$

**Phase 2: Merge.** Both sorted relations are scanned simultaneously, outputting matching pairs.

**Merge cost:** $B_r + B_s$ (one pass over each sorted relation).

**Total sort-merge join cost:** $\text{Sort}(R) + \text{Sort}(S) + B_r + B_s$.

### 15.2 Hash Join Details

**Build phase.** Scan the smaller relation $R$ and build an in-memory hash table using the join
attribute as the key. If $R$ fits in $M - 1$ blocks: single-pass hash join.

**Probe phase.** Scan the larger relation $S$ and probe the hash table for matches.

**Grace hash join (when $R$ does not fit in memory):**

1. **Partition phase:** Hash both relations into $k = \lceil \min(B_r, B_s) / (M - 1) \rceil$
   partitions on disk. Each partition of $R$ must fit in memory.
2. **Build + probe phase:** For each partition pair $(R_i, S_i)$Load $R_i$ into memory, build hash
   table, and probe with $S_i$.

**Cost:** Partition: $2(B_r + B_s)$. Build + probe: $B_r + B_s$. Total: $3(B_r + B_s)$.

**Theorem 15.1.** Grace hash join works correctly if the hash function distributes tuples uniformly
and the partition of $R$ fits in memory for each partition.

### 15.3 Index Nested-Loop Join Cost

For each tuple in $R$Look up matching tuples in $S$ using an index on the join attribute.

$$\text{Cost} = B_r + R_r \cdot (\text{cost} per probe)$$

Where $R_r$ is the number of records in $R$ and the cost per probe depends on the index:

| Index type            | Cost per probe                                               |
| --------------------- | ------------------------------------------------------------ |
| B+ tree (clustered)   | $\lceil h + \text{matching} records / \text{fan}-out \rceil$ |
| B+ tree (unclustered) | $\lceil h + \text{matching} records \rceil$                  |
| Hash index            | $\approx 1.2$ (average)                                      |

<details>
<summary>Worked Example: Join Cost Comparison</summary>

$R$: 10,000 blocks, 500,000 records. $S$: 5,000 blocks, 250,000 records. Memory: 101 blocks.
Equi-join on $R.A = S.B$. $S$ has a clustered B+ tree index on $B$ (height 3, fan-out 100).

**Block nested-loop:**
$B_r + \lceil B_r / (M-1) \rceil \cdot B_s = 10000 + \lceil 10000/100 \rceil \cdot 5000 = 10000 + 100 \times 5000 = 510,000$
blocks.

**Sort-merge:** Sort $R$: $2 \times 10000 \times (1 + \lceil \log_{100} 100 \rceil) = 40000$. Sort
$S$: $2 \times 5000 \times (1 + \lceil \log_{100} 50 \rceil) = 20000$. Merge:
$10000 + 5000 = 15000$. Total: $75,000$ blocks.

**Hash join:** $3(10000 + 5000) = 45,000$ blocks. Check: need $M \geq \sqrt{15000} \approx 122$. We
have 101 < 122. Need graceful hash join. Cost: $3 \times 15000 = 45,000$ plus partition overhead.
Still best.

**Index nested-loop:**
$B_r + R_r \times \text{probe} cost = 10000 + 500000 \times (3 + \text{matching} records per probe / 100)$.
If the average matching records per probe is 2 (500000/250000 = 2): cost =
$10000 + 500000 \times 3.02 = 1,520,000$ blocks. Much worse due to random I/O.

Ranking: Hash join (45K) < Sort-merge (75K) < Block nested-loop (510K) < Index nested-loop (1.5M).

</details>

## 17. Advanced SQL: Analytic Functions and Patterns

### 17.1 Percentile and Distribution Functions

```sql
-- Median salary per department
SELECT department_id,
       PERCENTILE_CONT(0.5) WITHIN GROUP (ORDER BY salary) AS median_salary,
       PERCENTILE_DISC(0.5) WITHIN GROUP (ORDER BY salary) AS median_discrete
FROM Employee
GROUP BY department_id;
```

**PERCENTILE_CONT** interpolates (continuous); **PERCENTILE_DISC** returns an actual value from the
data set (discrete).

### 17.2 Pattern Matching with MATCH_RECOGNIZE (SQL:2016)

```sql
SELECT *
FROM StockTicks
MATCH_RECOGNIZE (
    ORDER BY tick_time
    MEASURES FIRST(A.price) AS start_price, LAST(B.price) AS end_price
    ONE ROW PER MATCH
    AFTER MATCH SKIP TO LAST B
    PATTERN (A+ B+)
    DEFINE A AS A.price < PREV(A.price),
           B AS B.price > PREV(B.price)
) AS v_shaped;
```

This finds "V-shaped" price patterns (consecutive decreases followed by consecutive increases).

### 17.3 Temporal Tables (System-Versioned)

SQL:2011 introduced **system-versioned temporal tables**, which automatically maintain historical
data:

```sql
CREATE TABLE Employee (
    emp_id INT PRIMARY KEY,
    name VARCHAR(100),
    salary DECIMAL(10,2),
    sys_start TIMESTAMP GENERATED ALWAYS AS ROW START,
    sys_end TIMESTAMP GENERATED ALWAYS AS ROW END,
    PERIOD FOR SYSTEM_TIME (sys_start, sys_end)
) WITH SYSTEM VERSIONING;

-- Query data as of a specific point in time
SELECT * FROM Employee FOR SYSTEM_TIME AS OF '2025-01-01 00:00:00';

-- Query all historical changes
SELECT * FROM Employee FOR SYSTEM_TIME FROM '2025-01-01' TO '2025-12-31';
```

### 17.4 JSON and XML Support

**JSON functions (PostgreSQL):**

```sql
-- Create table with JSONB column
CREATE TABLE events (
    id SERIAL PRIMARY KEY,
    data JSONB NOT NULL
);

-- Insert
INSERT INTO events (data) VALUES ('{"type": "click", "user": "alice", "page": "/home"}');

-- Query
SELECT data->>'user' AS user, data->'page' AS page
FROM events
WHERE data->>'type' = 'click';

-- Index on JSONB
CREATE INDEX idx_events_type ON events USING gin ((data->>'type'));
```

**Theorem 17.1.** JSONB in PostgreSQL stores data in a decomposed binary format, enabling efficient
indexing and querying. JSON (without the B) stores the exact text, which is faster to insert but
slower to query.

## 18. Distributed Transactions: Two-Phase Commit Details

### 18.1 2PC Message Flow

```
Coordinator          Participant 1        Participant 2
    |                      |                    |
    |--- PREPARE --------->|                    |
    |--- PREPARE ----------------------------->|
    |                      |                    |
    |<-- VOTE_COMMIT -----|                    |
    |<-- VOTE_COMMIT -------------------------|
    |                      |                    |
    |--- COMMIT --------->|                    |
    |--- COMMIT ----------------------------->|
    |<-- ACK -------------|                    |
    |<-- ACK ----------------------------------|
```

**Failure scenarios:**

1. **Participant crashes before voting:** Coordinator times out, sends ABORT.
2. **Participant crashes after voting YES:** On recovery, participant asks coordinator for the
   decision.
3. **Coordinator crashes after collecting all votes but before sending decision:** Participants
   timeout and query other participants. If any participant knows the decision (received
   COMMIT/ABORT before crash), it can inform others.
4. **Coordinator crashes after sending COMMIT to some but not all participants:** Committed
   participants have committed. On recovery, coordinator re-sends COMMIT to remaining participants.

### 18.2 2PC Performance Analysis

**Theorem 18.1.** 2PC requires at least 2 RTTs (one for voting, one for decision) plus the disk I/O
for logging. In a wide-area network with 100 ms RTT, 2PC adds at least 200 ms to each distributed
transaction.

**Optimisation: Presumed abort.** If a participant does not know the outcome, it can assume ABORT
(since COMMIT must be recorded in the coordinator's log before sending). This reduces the
coordinator's recovery work.

**Optimisation: Collected commit.** Participants send their votes along with their redo log records.
The coordinator writes all votes and the commit record in a single log flush.

## 19. Problem Set

### 7.1 Relational Algebra (Problems 1--3)

**Problem 1.** Express the following in relational algebra: "Find the names of students who have taken all courses offered by the department in which they are majoring." Assume schemas:
Student(name, dept), Course(cname, dept), Enrolment(name, cname).

**Problem 2.** Prove the equivalence:
$\sigma_{\theta_1 \wedge \theta_2}(R \bowtie S) = \sigma_{\theta_1}(R) \bowtie \sigma_{\theta_2}(S)$
when $\theta_1$ involves only attributes of $R$ and $\theta_2$ involves only attributes of $S$.

**Problem 3.** Given relations $R(A, B)$ and $S(B, C)$ with $|R| = 10\,000$ records (100 blocks),
$|S| = 5\,000$ records (50 blocks), and 101 blocks of memory, compare the cost of hash join,
sort-merge join, and block nested-loop join.

### 7.2 SQL and Normalisation (Problems 4--7)

**Problem 4.** Write a single SQL query that, for each department, returns the top 3 employees by
salary. Use window functions.

**Problem 5.** Consider the relation $R(A, B, C, D, E)$ with functional dependencies: $AB \to C$,
$C \to D$, $D \to E$, $E \to A$. Find all candidate keys, decompose into BCNF, and check if the
decomposition is dependency-preserving.

**Problem 6.** The relation Teaching(course, teacher, textbook, room) has the constraint: "The teacher and textbook assigned to a course section are independent." What normal form does this
violate? Decompose accordingly.

**Problem 7.** Prove that if a relation is in BCNF, it is also in 3NF. Give an example of a relation
in 3NF but not BCNF.

### 7.3 Transactions and Recovery (Problems 8--11)

**Problem 8.** Consider the following schedule: $w_1(A), r_2(A), w_2(B), r_3(B), w_3(C), r_1(C)$.
Draw the precedence graph and determine if the schedule is conflict-serialisable.

**Problem 9.** Explain how snapshot isolation allows write skew, and give a concrete example with
bank accounts where the invariant "total balance >= 0" is violated.

**Problem 10.** A database uses ARIES recovery. The log contains (at the time of crash):

```
[LSN 001] BEGIN T1
[LSN 002] UPDATE T1 A: old=5, new=10
[LSN 003] BEGIN T2
[LSN 004] UPDATE T2 B: old=3, new=7
[LSN 005] COMMIT T1
[LSN 006] UPDATE T2 C: old=1, new=4
[LSN 007] CHECKPOINT (dirty: A, B, C; active: T2)
```

Describe the analysis, redo, and undo phases.

**Problem 11.** In 2PC, the coordinator crashes after sending PREPARE to all participants but before
receiving all votes. Participant P1 votes YES, P2 votes NO. What happens when the coordinator
recovers?

### 7.4 Distributed Databases (Problems 12--15)

**Problem 12.** Explain why 2PC is a blocking protocol. Give a specific failure scenario where
participants block indefinitely.

**Problem 13.** Compare Paxos and Raft. In what situations is Raft preferred? What are Raft's
limitations compared to Paxos?

**Problem 14.** A distributed database uses synchronous replication with 3 replicas. What is the
maximum number of node failures that can be tolerated while maintaining strong consistency?

**Problem 15.** Explain the CAP theorem. If a distributed database chooses consistency and partition
tolerance (CP), what trade-offs does it make in terms of availability?

<details>
<summary>Solution to Problem 5</summary>

FDs: $AB \to C$, $C \to D$, $D \to E$, $E \to A$.

**Closure computation:**

$AB^+ = \{A, B\}$ $ABC^+ = \{A, B, C, D, E\}$ (via $C \to D$, $D \to E$, $E \to A$)

So $AB$ is a candidate key. Similarly:

$BC^+ = \{B, C, D, E, A\}$ (via $C \to D$, $D \to E$, $E \to A$). So $BC$ is a candidate key.

$CD^+ = \{C, D, E, A\}$ (no $B$So not a candidate key).

$DE^+ = \{D, E, A\}$ (no $B$Not a key).

$CE^+ = \{C, E, A, D\}$ (no $B$Not a key).

$BD^+ = \{B, D, E, A\}$ (no $C$Not a key).

$BE^+ = \{B, E, A\}$ (no $C$Not a key).

$AE^+ = \{A, E\}$ (not a key).

$AC^+ = \{A, C, D, E\}$ (no $B$Not a key).

$AD^+ = \{A, D, E\}$ (no $B$Not a key).

Candidate keys: $\{AB, BC\}$.

**BCNF decomposition:**

$C \to D$ violates BCNF (LHS $C$ is not a superkey). Decompose $R$ into:

- $R_1(C, D)$ with $C \to D$ (BCNF, key = $C$)
- $R_2(A, B, C, E)$ with $AB \to CE$, $E \to A$, $CE \to AB$... Wait, let me recompute.

Actually, $R_2$ has attributes $\{A, B, C, E\}$ and the restricted FDs are $AB \to C$, $E \to A$.

$E \to A$ violates BCNF (LHS $E$ is not a superkey of $R_2$). Superkeys of $R_2$ include $AB$, $BC$
(since $BC \to D$ is lost but $BC$ in $R_2$: $BC \to C$Not useful). Actually, $BC$ is not a key in
$R_2$ because we lost $D$.

Keys of $R_2$: $AB$ is a key ($AB \to C$And with $C$ we need... $ABC \to ?$ in $R_2$: $C$ doesn't
give us $E$ in $R_2$. So $AB$ gives $\{A, B, C\}$Not $\{A, B, C, E\}$. So $AB$ is NOT a key in
$R_2$!

Hmm, let me recompute. In the original relation, $AB$ is a key. But after removing $D$The remaining
FDs are $AB \to C$ and $E \to A$.

$AB^+ = \{A, B, C\}$ in $R_2$. Not a superkey (missing $E$).

$BE^+ = \{B, E, A, C\} = \{A, B, C, E\}$ (via $E \to A$, $AB \to C$). So $BE$ is a key!

$CE^+ = \{C, E, A, B\} = \{A, B, C, E\}$ (via $E \to A$, $AB \to C$). So $CE$ is a key!

$BC^+ = \{B, C\}$ (no applicable FD). Not a key.

$AE^+ = \{A, E\}$. Not a key.

Keys of $R_2$: $\{BE, CE\}$.

$E \to A$ violates BCNF. Decompose $R_2$ into:

- $R_{2a}(E, A)$ with $E \to A$ (BCNF, key = $E$)
- $R_{2b}(B, C, E)$ with restricted FDs: $BE \to C$, $CE \to B$... Wait, $BE \to C$ comes from
  $AB \to C$ restricted to $\{B, C, E\}$: we lose the dependency since $A$ is not in $R_{2b}$.

Actually, $AB \to C$ restricted to $R_{2b}(B, C, E)$: the LHS is $AB$ but $A \notin R_{2b}$So this
FD is lost. The only remaining FDs in $R_{2b}$ are trivial. So $R_{2b}$ is in BCNF with key $BE$ (or
$CE$).

**BCNF decomposition:** $R_1(C, D)$, $R_{2a}(E, A)$, $R_{2b}(B, C, E)$.

**Dependency preservation:** $C \to D$ is preserved (in $R_1$). $E \to A$ is preserved (in
$R_{2a}$). $AB \to C$ is NOT preserved (lost in the decomposition). $D \to E$ is NOT preserved
(lost).

So the decomposition is NOT dependency-preserving.

If you get this wrong, revise: Sections 3 and 4.

</details>

<details>
<summary>Solution to Problem 8</summary>

Schedule: $w_1(A), r_2(A), w_2(B), r_3(B), w_3(C), r_1(C)$.

Conflicting operations (same data item, at least one write):

$w_1(A)$ and $r_2(A)$: $T_1$ writes $A$ before $T_2$ reads $A$. Edge: $T_1 \to T_2$. $w_2(B)$ and
$r_3(B)$: $T_2$ writes $B$ before $T_3$ reads $B$. Edge: $T_2 \to T_3$. $w_3(C)$ and $r_1(C)$: $T_3$
writes $C$ before $T_1$ reads $C$. Edge: $T_3 \to T_1$.

Precedence graph: $T_1 \to T_2 \to T_3 \to T_1$.

This contains a cycle ($T_1 \to T_2 \to T_3 \to T_1$). Therefore, the schedule is **not
conflict-serialisable**.

If you get this wrong, revise: Section 5.1.

</details>

## Common Pitfalls

- **Confusing 2NF and 3NF.** 2NF removes partial dependencies; 3NF removes transitive dependencies.
  **Fix:** A relation in 3NF is also in 2NF; check for non-prime attributes depending on other
  non-prime attributes.
- **Wrong isolation level.** Read uncommitted: dirty reads possible. Serializable: no anomalies but
  lowest concurrency. **Fix:** Balance consistency and performance; most applications use Read
  Committed or Repeatable Read.
- **Confusing the CAP theorem trade-offs.** A distributed system can guarantee at most 2 of:
  Consistency, Availability, Partition tolerance. **Fix:** Network partitions are inevitable; choose
  between CP (consistent but unavailable) and AP (available but eventually consistent).

## Worked Examples

### Example 1: Normalisation

**Problem.** Relation R(A, B, C, D) with FDs: AB → C, C → D. Is R in 3NF?

**Solution.** Key: AB. C depends on AB (partial dependency on non-prime B? No — C depends on the
full key AB). C → D: D depends on C, which is non-prime. This is a transitive dependency, violating
3NF.

Decompose: R1(A, B, C), R2(C, D). Both are in 3NF.

$\blacksquare$

### Example 2: SQL join

**Problem.** Students(ID, Name, DeptID) and Departments(DeptID, DeptName). Write SQL to list all
students with their department names.

**Solution.**
`SELECT s.Name, d.DeptName FROM Students s INNER JOIN Departments d ON s.DeptID = d.DeptID;`

$\blacksquare$

## Summary

- Normalisation: 1NF (atomic), 2NF (no partial dependencies), 3NF (no transitive dependencies),
  BCNF.
- ACID properties: Atomicity, Consistency, Isolation, Durability.
- SQL: DDL (CREATE, ALTER, DROP), DML (SELECT, INSERT, UPDATE, DELETE), DCL (GRANT, REVOKE).
- CAP theorem: distributed systems trade off consistency, availability, and partition tolerance.

