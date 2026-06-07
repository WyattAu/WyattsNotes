---
title: Further Reading
tags:
  - Computing
  - University
---

- Silberschatz, Korth, Sudarshan: _Database System Concepts_ (7th ed.).
- Ramakrishnan, Gehrke: _Database Management Systems_ (3rd ed.).
- Elmasri, Navathe: _Fundamentals of Database Systems_ (7th ed.).
- Kleppmann: _Designing Data-Intensive Applications_ (2017).

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

## Cross-References

| Topic       | Site       | Link                                                                                                       |
| ----------- | ---------- | ---------------------------------------------------------------------------------------------------------- |
| [Databases] | A-Level    | [View](https://alevel-sciences.wyattau.com/docs/alevel/computer-science/databases/01-relational-databases) |
| [Databases] | IB         | [View](https://ib.wyattau.com/docs/ib/computer-science/6-resource-management/1_databases)                  |
| [Databases] | DSE        | [View](https://dse.wyattau.com/docs/dse/ict/3-programming-and-databases/3_data-management)                 |
| [Databases] | University | [View](https://university.wyattau.com/docs/computing/4-databases/1_databases)                              |

