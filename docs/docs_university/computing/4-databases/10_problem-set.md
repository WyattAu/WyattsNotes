---
title: Problem Set
slug: databases-problem-set
tags:
  - Computing
  - University
---

**Problems 1--3:** Introduction and Data Models

1. Explain the three levels of the ANSI-SPARC architecture with an example. Show how logical data
   independence allows a new column to be added to the conceptual schema without modifying existing
   external views.

2. Compare the relational and graph data models. Give two concrete scenarios where a graph database
   would be preferable to a relational database, explaining why.

3. A university uses a relational database for student records and a document store for course
   materials. Discuss the benefits and challenges of this polyglot persistence approach.

**Problems 4--7:** Relational Model and Algebra

4. Given relation `R(A, B, C, D, E)` with FDs $F = \\{AB \to C, C \to D, D \to E\\}$: (a) Find all
   candidate keys. (b) Compute the attribute closure $\\{A, B\\}^+$. (c) Compute $\\{C\\}^+$ and
   $\\{D\\}^+$.

5. Given `R(A, B, C)` with tuples $\\{(1,2,3), (1,2,4), (1,3,5), (2,2,3), (2,3,4)\\}$ and `S(B, C)`
   with tuples $\\{(2,3), (3,5)\\}$: (a) Compute $\sigma_{B=2}(R)$. (b) Compute $R \bowtie S$. (c)
   Compute $R \div S$.

6. Express the following query in relational algebra: "Find the names of students who have enrolled in at least two courses taught by the same instructor."

7. Prove that the cross product is commutative: $R \times S \equiv S \times R$. Prove that the cross
   product is associative: $(R \times S) \times T \equiv R \times (S \times T)$.

**Problems 8--10:** SQL

8. Write a recursive SQL query that computes the total cost of all parts (direct and indirect)
   required to assemble product `P100`Given a `BOM(parent_part, child_part, quantity)` table.

9. Write a SQL query that, for each department, returns the student with the highest GPA, their GPA,
   and the difference between their GPA and the department average. Use window functions only (no
   subqueries).

10. Consider the Python code:
    ```python
    query = f"DELETE FROM Student WHERE dept = '{dept}' AND gpa < {min_gpa}"
    ```
    (a) Identify the SQL injection vulnerability. (b) Show an input that exploits it. (c) Rewrite
    using parameterised queries.

**Problems 11--14:** Normalisation

11. Given `R(A, B, C, D, E)` with FDs $F = \\{A \to BC, CD \to E, B \to D, E \to A\\}$: (a) Find all
    candidate keys. (b) Determine the highest normal form of $R$. Justify your answer. (c) If $R$ is
    not in BCNF, decompose it into BCNF relations. Verify each decomposition is lossless.

12. Given `R(A, B, C, D)` with FDs $F = \\{A \to B, B \to C, C \to D, D \to A\\}$: (a) Find all
    candidate keys. (b) Decompose into BCNF. Is the decomposition dependency-preserving? (c) Show
    that $R$ is actually already in BCNF.

13. Prove Theorem 4.5: every relation in 4NF is in BCNF.

14. Given `R(A, B, C, D)$ with MVDs $A \twoheadrightarrow B$ and $A \twoheadrightarrow C$, and FD
    $A \to D$: (a) Find all candidate keys. (b) Is $R$ in 4NF? If not, decompose into 4NF.

**Problems 15--16:** Indexing

15. Insert the keys 8, 5, 1, 7, 3, 12, 9, 6 into a B+ tree of order 3 (maximum 2 keys per node).
    Show the tree after each operation that causes a split. How many leaf-level and internal-level
    splits occur in total?

16. A table has 100000 tuples stored in 5000 pages. The buffer pool has 101 pages. Compare the
    estimated I/O cost of answering `SELECT * FROM T WHERE A = 42` using: (a) A full table scan. (b)
    A B+ tree index on $A$ of height 3. (c) A static hash index on $A$ with 500 buckets and average
    chain length 0.4. State any assumptions you make.

**Problems 17--18:** Transaction Management

17. For each schedule below, determine if it is conflict-serialisable by drawing the precedence
    graph. If serialisable, give the equivalent serial order. (a)
    $r_1(A), r_2(A), w_1(A), w_2(A), r_1(B), w_2(B), w_1(B)$ (b)
    $r_1(A), w_1(A), r_2(A), r_2(B), w_2(A), w_2(B), r_1(B), w_1(B)$ (c)
    $r_1(A), w_1(A), r_2(B), w_2(B), r_3(A), w_3(A), r_3(B), w_3(B)$

18. Explain the difference between strict 2PL and rigorous 2PL. Give a schedule that is allowed by
    basic 2PL but not by strict 2PL. Explain why strict 2PL is preferred in practice.

**Problems 19--20:** Distributed Databases

19. Explain the two-phase commit protocol. Describe what happens in each of the following failure
    scenarios: (a) A participant crashes after voting `YES` but before receiving the coordinator's
    decision. (b) The coordinator crashes after sending `COMMIT` to some but not all participants.
    (c) The coordinator crashes after phase 1 (all votes received) but before sending any decision.

20. A distributed key-value store uses $N = 7$ replicas with quorum settings $W = 4$ and $R = 4$.
    (a) Show that any read is guaranteed to see the latest write. (b) What is the maximum number of
    node failures the system can tolerate while still serving both reads and writes? (c) How does
    the system behave during a network partition that isolates 3 nodes from the remaining 4?

