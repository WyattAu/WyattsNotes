---
title: Database Normalization
description:
  Database Normalization — Why Normalization Matters; Normalization vs
  Denormalization; Normal Form Hierarchy; Functional Dependencies.
date: 2026-04-07T00:00:00.000Z
tags:
  - Databases
categories:
  - Databases
slug: database-normalization
---

## Introduction

Database normalization is the systematic process of structuring a relational schema to minimize data
redundancy and eliminate insertion, deletion, and update anomalies. The theory was introduced by
E.F. Codd in 1970 and formalized through a series of normal forms, each defined in terms of
functional dependencies on the relation.

The core idea is simple: every piece of data should live in exactly one place. If the same fact
appears in multiple rows, updating that fact requires updating every row that contains it. If you
miss one, your data is inconsistent. Normalization gives you a principled, mathematical framework
for avoiding this class of problems.

### Why Normalization Matters

Unnormalized schemas suffer from three categories of anomalies:

| Anomaly Type | Description                                            | Concrete Example                                                                 |
| ------------ | ------------------------------------------------------ | -------------------------------------------------------------------------------- |
| Insertion    | Cannot add a fact without adding unrelated facts       | Cannot record a new department until at least one employee is assigned to it     |
| Deletion     | Deleting one fact unintentionally removes another      | Deleting the last employee in a department also removes the department's address |
| Update       | Updating a single fact requires touching multiple rows | Renaming a department requires updating every employee row in that department    |

These are not theoretical concerns. In production systems with millions of rows, an update anomaly
means a single `UPDATE` statement that touches 50,000 rows, requires a table lock, and risks partial
failure. Normalization eliminates these problems at the schema level rather than relying on
application logic to keep data consistent.

### Normalization vs Denormalization

Normalization and denormalization are not opposites in the sense that one is "right" and the other
is "wrong." They are engineering tradeoffs:

```text
Normalized schema:
  + Each fact stored once (single source of truth)
  + No update anomalies
  + Smaller individual tables
  + Schema is self-documenting through foreign keys
  - Queries require JOINs (higher read latency)
  - More complex queries for simple reports

Denormalized schema:
  + Fewer JOINs (lower read latency for common access patterns)
  + Simpler queries for reporting and dashboards
  - Data duplication (write amplification)
  - Update anomalies require application-level consistency logic
  - Higher storage cost
```

:::info

The default starting point for any OLTP system is 3NF. Denormalize only after measuring a specific
performance bottleneck and understanding the consistency cost. Premature denormalization creates
maintenance debt that compounds over time.

:::

### Normal Form Hierarchy

Each normal form is a strict subset of the one below it:

$$1NF \supset 2NF \supset 3NF \supset \mathrm{BCNF} \supset 4NF \supset 5NF$$

A relation in BCNF is automatically in 3NF, 2NF, and 1NF. The higher the normal form, the less
redundancy, but the more relations you need (and the more JOINs you must perform).

## Functional Dependencies

Functional dependencies are the mathematical foundation on which all normal forms are built. Before
discussing any normal form, you must understand FDs thoroughly.

### Formal Definition

**Definition.** Given a relation schema $R$ and two attribute sets $X \subseteq R$ and
$Y \subseteq R$, a functional dependency $X \rightarrow Y$ holds on $R$ if and only if, for every
pair of tuples $t_1$ and $t_2$ in any legal instance of $R$:

$$t_1[X] = t_2[X] \implies t_1[Y] = t_2[Y]$$

In plain language: if two tuples agree on all attributes in $X$, they must also agree on all
attributes in $Y$. $X$ is called the **determinant** and $Y$ is called the **dependent**.

### Trivial vs Non-trivial Dependencies

**Definition.** A functional dependency $X \rightarrow Y$ is:

- **Trivial** if $Y \subseteq X$. It holds for every relation by definition and carries no
  informational content. Example: $\{A, B\} \rightarrow \{A\}$.
- **Non-trivial** if $Y \not\subseteq X$. It carries actual semantic information about the data.
- **Completely non-trivial** if $X \cap Y = \emptyset$.

### Full vs Partial vs Transitive Dependencies

These three categories are critical for understanding the progression from 2NF to 3NF:

**Definition.** Let $K$ be a candidate key of relation $R$.

- A **full functional dependency** $K \rightarrow A$ means that $A$ depends on all of $K$. Removing
  any attribute from $K$ destroys the dependency. Formally, for no proper subset $K' \subset K$ does
  $K' \rightarrow A$ hold.
- A **partial functional dependency** $K \rightarrow A$ means that $A$ depends on only a proper
  subset of $K$. There exists some $K' \subset K$ such that $K' \rightarrow A$ holds.
- A **transitive dependency** occurs when $X \rightarrow Y$ and $Y \rightarrow Z$ both hold, and $Z$
  depends on $X$ only through the intermediate $Y$. Formally, $X \rightarrow Z$ holds because
  $X \rightarrow Y$ and $Y \rightarrow Z$, but neither $Y \subseteq X$ nor $Z \subseteq XY$.

```text
Relation: OrderItem(order_id, product_id, quantity, product_name, category_name)

Full dependency:   {order_id, product_id} -> quantity
                   (quantity depends on the ENTIRE composite key)

Partial dependency: product_id -> product_name, category_name
                   (product_name depends on only product_id, a SUBSET of the key)

Transitive dependency: product_id -> category_id -> category_name
                       (category_name depends on product_id only through category_id)
```

### Armstrong's Axioms

Armstrong's axioms are a sound and complete set of inference rules for deriving all functional
dependencies that are logically implied by a given set $F$.

**Definition.** Given a set of functional dependencies $F$ on a relation schema $R$, the three
axioms are:

1. **Reflexivity (A1):** If $Y \subseteq X$, then $X \rightarrow Y$.
2. **Augmentation (A2):** If $X \rightarrow Y$, then $XZ \rightarrow YZ$ for any attribute set $Z$.
3. **Transitivity (A3):** If $X \rightarrow Y$ and $Y \rightarrow Z$, then $X \rightarrow Z$.

These three axioms alone are sound (every derived dependency is correct) and complete (every correct
dependency can be derived from them).

### Derived Rules

The following rules are not axioms but can be proven from Armstrong's three axioms. They are used
constantly in normalization proofs:

| Rule               | Statement                                                            | Proof Strategy              |
| ------------------ | -------------------------------------------------------------------- | --------------------------- |
| Union              | If $X \rightarrow Y$ and $X \rightarrow Z$, then $X \rightarrow YZ$  | Augmentation + Transitivity |
| Decomposition      | If $X \rightarrow YZ$, then $X \rightarrow Y$ and $X \rightarrow Z$  | Reflexivity + Transitivity  |
| Pseudotransitivity | If $X \rightarrow Y$ and $YW \rightarrow Z$, then $XW \rightarrow Z$ | Augmentation + Transitivity |
| Composition        | If $X \rightarrow Y$ and $W \rightarrow Z$, then $XW \rightarrow YZ$ | Augmentation + Union        |

Proof of the Union rule:

$$
\begin{aligned}
X \rightarrow Y \quad &\mathrm{(given)} \\
X \rightarrow X \quad &\mathrm{(reflexivity, since } X \subseteq X) \\
XX \rightarrow YX \quad &\mathrm{(augmentation, add } X \mathrm{ to both sides)} \\
X \rightarrow XY \quad &\mathrm{(since } XX = X) \\
XY \rightarrow YZ \quad &\mathrm{(augmentation of } X \rightarrow Z \mathrm{ with } Y) \\
X \rightarrow YZ \quad &\mathrm{(transitivity)}
\end{aligned}
$$

### Attribute Closure

**Definition.** The **closure** of an attribute set $X$ under a set of functional dependencies $F$,
denoted $X^+$, is the largest attribute set such that $X \rightarrow X^+$ can be derived from $F$
using Armstrong's axioms.

Algorithm to compute $X^+$:

```text
function attributeClosure(X, F):
    X⁺ = X
    repeat until X⁺ stops changing:
        for each FD Y -> Z in F:
            if Y ⊆ X⁺:
                X⁺ = X⁺ ∪ Z
    return X⁺
```

**Key property:** $X \rightarrow Y$ is logically implied by $F$ if and only if $Y \subseteq X^+$.

This algorithm is used for two critical tasks: determining whether an attribute set is a superkey
($X^+ = R$, i.e., the closure equals the entire relation schema), and determining whether a specific
FD $X \rightarrow Y$ is implied by $F$ (check whether $Y \subseteq X^+$).

```text
Relation: R(A, B, C, D, E)
FDs: {A -> B, BC -> D, D -> E}

Compute A⁺:
  A⁺ = {A}
  A -> B:     A ⊆ A⁺, so A⁺ = {A, B}
  BC -> D:    {B,C} ⊈ A⁺, skip
  D -> E:     D ⊈ A⁺, skip
  No more changes. A⁺ = {A, B}
  A is NOT a superkey.

Compute AC⁺:
  AC⁺ = {A, C}
  A -> B:     A ⊆ AC⁺, so AC⁺ = {A, B, C}
  BC -> D:    {B,C} ⊆ AC⁺, so AC⁺ = {A, B, C, D}
  D -> E:     D ⊆ AC⁺, so AC⁺ = {A, B, C, D, E}
  AC⁺ = R. AC is a superkey.
```

### Closure of a Set of FDs

**Definition.** The closure of a set of functional dependencies $F$, denoted $F^+$, is the set of
all FDs that can be derived from $F$ using Armstrong's axioms.

$F^+$ can be exponentially large (up to $2^{2^n}$ FDs for $n$ attributes), so you never compute it
explicitly. Instead, you use the attribute closure algorithm to answer specific questions about
whether a given FD is in $F^+$.

### Candidate Keys from FDs

To find all candidate keys of a relation $R$ given a set of FDs $F$:

1. Compute the closure of each attribute and each combination of attributes.
2. An attribute set $X$ is a superkey if $X^+ = R$.
3. A superkey $X$ is a candidate key if it is minimal: removing any attribute $A$ from $X$ yields
   $(X - \{A\})^+ \neq R$.

```text
Relation: R(A, B, C, D)
FDs: {A -> C, C -> B, D -> C}

Compute closures of single attributes:
  A⁺ = {A, C, B}       (A -> C -> B)
  B⁺ = {B}
  C⁺ = {C, B}          (C -> B)
  D⁺ = {D, C, B}       (D -> C -> B)

None of A, B, C, D alone is a superkey (none has D in its closure except D⁺,
but D⁺ = {D,C,B} which lacks A).

Check pairs:
  AD⁺ = {A, D, C, B} = R. AD is a superkey.
  Is AD minimal?
    A⁺ = {A, C, B} ≠ R (missing D). So A alone is not a superkey.
    D⁺ = {D, C, B} ≠ R (missing A). So D alone is not a superkey.
  AD is a candidate key.

  BD⁺ = {B, D, C} ≠ R (missing A). Not a superkey.
  AB⁺ = {A, B, C} ≠ R (missing D). Not a superkey.
  CD⁺ = {C, D, B} ≠ R (missing A). Not a superkey.
  AC⁺ = {A, C, B} ≠ R (missing D). Not a superkey.

The only candidate key is {A, D}.
Prime attributes: A, D.
Non-prime attributes: B, C.
```

### Minimal Cover (Canonical Cover)

**Definition.** A minimal cover $F_{min}$ of a set of FDs $F$ satisfies three conditions:

1. **Right-side decomposition:** Every FD in $F_{min}$ has exactly one attribute on the right side.
   (Replace $X \rightarrow YZ$ with $X \rightarrow Y$ and $X \rightarrow Z$.)
2. **No redundant FDs:** Removing any FD from $F_{min}$ changes the closure. For each
   $f \in F_{min}$, $(F_{min} - \{f\})^+ \neq F_{min}^+$.
3. **No redundant attributes on the left side:** For each FD $X \rightarrow A$ in $F_{min}$ and each
   attribute $B \in X$, $(X - \{B\})^+$ does not contain $A$. In other words, removing any attribute
   from the left side would destroy the dependency.

The minimal cover is not necessarily unique, but all minimal covers of $F$ are equivalent.

Algorithm to compute $F_{min}$:

```text
1. START with F.
2. DECOMPOSE right sides:
   Replace each X -> {A₁, A₂, ..., Aₙ} with X -> A₁, X -> A₂, ..., X -> Aₙ.
3. REMOVE redundant FDs:
   For each FD f in F:
     Temporarily remove f from F.
     Compute closure of f's left side using the remaining FDs.
     If the closure still contains f's right side, f is redundant -- remove it permanently.
     Otherwise, restore f.
4. REMOVE redundant attributes from left sides:
   For each FD X -> A in F:
     For each attribute B in X:
       Temporarily remove B from X.
       Compute closure of (X - {B}) using the full set of FDs.
       If the closure contains A, B is redundant -- remove it permanently from X.
       Otherwise, restore B.
5. RETURN the result.
```

```text
Example: Compute minimal cover of F = {AB -> C, C -> B, A -> B}

Step 1: Right sides already single-attribute.

Step 2: Remove redundant FDs:
  Remove AB -> C:
    Compute (AB)⁺ using {C -> B, A -> B}:
      AB⁺ = {A, B}. Does NOT contain C. Restore AB -> C.
  Remove C -> B:
    Compute C⁺ using {AB -> C, A -> B}:
      C⁺ = {C}. Does NOT contain B. Restore C -> B.
  Remove A -> B:
    Compute A⁺ using {AB -> C, C -> B}:
      A⁺ = {A}. Does NOT contain B. Restore A -> B.
  No redundant FDs.

Step 3: Remove redundant attributes:
  AB -> C:
    Remove A: compute B⁺ using {B -> ?, C -> B, A -> B}:
      B⁺ = {B}. Does NOT contain C. A is not redundant.
    Remove B: compute A⁺ using {A -> ?, C -> B, A -> B}:
      A⁺ = {A, B, C} (A -> B, AB -> C). Contains C. B IS redundant.
    Replace AB -> C with A -> C.

  Result: F_min = {A -> C, C -> B, A -> B}

  Verify: Is A -> B still redundant?
    Remove A -> B:
      Compute A⁺ using {A -> C, C -> B}:
        A⁺ = {A, C, B}. Contains B. A -> B IS redundant now.

    Remove A -> B: F_min = {A -> C, C -> B}

  Final minimal cover: {A -> C, C -> B}
```

:::warning

The order in which you process FDs in step 3 can yield different (but equivalent) minimal covers.
This is expected. Different minimal covers may lead to different decompositions, but all are
correct.

:::

## Normal Forms

### First Normal Form (1NF)

**Definition.** A relation $R$ is in first normal form (1NF) if and only if every attribute of every
tuple contains an atomic (indivisible) value. Equivalently, the domain of every attribute contains
only atomic values, and there are no repeating groups.

1NF requires:

- Every cell contains exactly one value (no lists, arrays, sets, or nested relations)
- Each row is uniquely identifiable (there must be a primary key)
- All entries in a column are of the same type (same domain)
- No repeating columns (e.g., `phone1`, `phone2`, `phone3` -- these violate the spirit of 1NF)

```text
Violates 1NF (repeating group):
| student_id | name  | courses                          |
|------------|-------|----------------------------------|
| 1          | Alice | {Math, Physics, Chemistry}       |
| 2          | Bob   | {Biology, Chemistry}             |

Violates 1NF (non-atomic composite value):
| student_id | name  | address                     |
|------------|-------|-----------------------------|
| 1          | Alice | {42 Main St, Springfield}   |

Satisfies 1NF:
| student_id | name  | course   |
|------------|-------|----------|
| 1          | Alice | Math     |
| 1          | Alice | Physics  |
| 1          | Alice | Chemistry|
| 2          | Bob   | Biology  |
| 2          | Bob   | Chemistry|
```

:::info

SQL databases that support array types (PostgreSQL `INTEGER[]`, JSONB) technically allow violations
of 1NF. This is a pragmatic extension. Use these types when the array is opaque data that you never
need to query or join on individually. If you need to query individual elements or enforce
referential integrity, model them as separate rows.

:::

### Second Normal Form (2NF)

**Definition.** A relation $R$ is in second normal form (2NF) if and only if:

1. $R$ is in 1NF, and
2. No non-prime attribute is partially dependent on any candidate key.

A **non-prime attribute** is an attribute that does not belong to any candidate key. A **partial
dependency** exists when a non-prime attribute depends on only a proper subset of a candidate key
(rather than the entire key).

:::warning

2NF is only relevant for relations with composite candidate keys (keys consisting of two or more
attributes). If every candidate key of $R$ is a single attribute, then $R$ is automatically in 2NF
whenever it is in 1NF, because there is no proper subset of a single-attribute key.

:::

```text
Relation: OrderItem(order_id, product_id, quantity, product_name, unit_price)

Candidate key: {order_id, product_id}
Non-prime attributes: quantity, product_name, unit_price

FDs:
  {order_id, product_id} -> quantity       (full dependency)
  product_id -> product_name, unit_price    (PARTIAL dependency)

product_name and unit_price depend on product_id alone, which is a proper subset
of the candidate key. This violates 2NF.

Decomposition:
  OrderItem(order_id, product_id, quantity)     -- key: {order_id, product_id}
  Product(product_id, product_name, unit_price)  -- key: {product_id}
```

### Third Normal Form (3NF)

**Definition.** A relation $R$ is in third normal form (3NF) if and only if, for every non-trivial
functional dependency $X \rightarrow A$ in $R$:

1. $X$ is a superkey, OR
2. $A$ is a prime attribute (i.e., $A$ is part of some candidate key).

Equivalently: no non-prime attribute is transitively dependent on any candidate key.

The distinction between condition 1 and condition 2 is critical. Condition 2 is the "escape hatch"
that makes 3NF less strict than BCNF. It allows dependencies where a non-key attribute determines a
prime attribute, because that prime attribute is already determined by the key.

```text
Relation: Employee(emp_id, name, dept_id, dept_name, dept_location)

Candidate key: {emp_id}
Non-prime attributes: name, dept_id, dept_name, dept_location

FDs:
  emp_id -> name, dept_id, dept_name, dept_location   (key determines all)
  dept_id -> dept_name, dept_location                   (transitive dependency)

dept_name and dept_location depend on dept_id, which depends on emp_id.
The chain is: emp_id -> dept_id -> dept_name, dept_location.
This is a transitive dependency, violating 3NF.

Decomposition:
  Employee(emp_id, name, dept_id)                     -- key: {emp_id}
  Department(dept_id, dept_name, dept_location)        -- key: {dept_id}
```

```text
Another example showing the "prime attribute" escape hatch:

Relation: R(A, B, C)
FDs: {A -> B, B -> C}

Candidate keys: {A} (A⁺ = {A,B,C} = R, and { }⁺ = {}, so A is minimal)
Prime attributes: A
Non-prime attributes: B, C

Check B -> C:
  B is NOT a superkey (B⁺ = {B,C} ≠ R... wait, B⁺ = {B, C} ≠ {A, B, C} = R, so B is not a superkey).
  C is NOT a prime attribute.
  Therefore B -> C violates 3NF.

  Wait -- let me recompute. A⁺ = {A}. A -> B gives A⁺ = {A, B}. B -> C gives A⁺ = {A, B, C} = R.
  So {A} is a superkey. Is it a candidate key? Remove A: {}⁺ = {}. Not a superkey. So {A} is minimal.
  The only candidate key is {A}. Prime attributes: {A}. Non-prime: {B, C}.

  B -> C: B is not a superkey, C is not prime. VIOLATES 3NF.

  Decompose:
    R1(A, B) with FDs: {A -> B}. A is a superkey. 3NF. Also BCNF.
    R2(B, C) with FDs: {B -> C}. B is a superkey. 3NF. Also BCNF.
```

### Boyce-Codd Normal Form (BCNF)

**Definition.** A relation $R$ is in Boyce-Codd normal form (BCNF) if and only if, for every
non-trivial functional dependency $X \rightarrow Y$ that holds in $R$, $X$ is a superkey of $R$.

Compare with 3NF:

| Property                        | 3NF                                                                 | BCNF                                                        |
| ------------------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------- |
| Condition for $X \rightarrow A$ | $X$ is a superkey, OR $A$ is prime                                  | $X$ is a superkey (no exception)                            |
| Strictness                      | Less strict                                                         | Strictest normal form based on FDs alone                    |
| Always exists                   | Yes, dependency-preserving and lossless decomposition always exists | Not always; may require sacrificing dependency preservation |
| Practical recommendation        | Default target for OLTP schemas                                     | Apply when possible; fall back to 3NF when necessary        |

BCNF removes the "prime attribute" exception from 3NF. Every determinant must be a superkey, full
stop.

```text
Classic BCNF violation example:

Relation: Teaching(student, course, instructor)

Business rules:
  - Each student takes at most one section of each course
  - Each course has at most one instructor
  - An instructor teaches at most one course
  - An instructor can teach multiple students

FDs:
  {student, course} -> instructor   (a student's instructor for a course)
  instructor -> course              (an instructor teaches one course)

Candidate keys:
  {student, course}  (determines all three attributes)
  {student, instructor}  (determines course, hence all three)

Prime attributes: student, course, instructor (all attributes are prime!)

Check 3NF:
  {student, course} -> instructor: {student, course} is a superkey. OK.
  instructor -> course: instructor is NOT a superkey, BUT course IS a prime attribute.
  So this is allowed under 3NF.

Check BCNF:
  {student, course} -> instructor: {student, course} is a superkey. OK.
  instructor -> course: instructor is NOT a superkey. VIOLATES BCNF.

BCNF decomposition:
  R1(instructor, course) with FDs: {instructor -> course}. BCNF.
  R2(student, instructor) with FDs: none beyond trivial ones. BCNF.

  Lossless join check:
    R1 ∩ R2 = {instructor}
    instructor -> course holds in R1, so {instructor} is a superkey for R1.
    Lossless. But we lose the dependency {student, course} -> instructor.
    This dependency cannot be checked on R1 or R2 alone without joining them.
```

:::warning

This example demonstrates the fundamental tension between BCNF and dependency preservation. The
decomposition is lossless (you can reconstruct the original data) but not dependency-preserving (the
constraint that a student has one instructor per course cannot be enforced on either decomposed
table alone). In practice, you either stay in 3NF or enforce the lost dependency via application
logic, triggers, or CHECK constraints.

:::

### Fourth Normal Form (4NF)

**Definition.** A relation $R$ is in fourth normal form (4NF) if and only if, for every non-trivial
multivalued dependency $X \twoheadrightarrow Y$ that holds in $R$, $X$ is a superkey of $R$.

**Definition.** A multivalued dependency (MVD) $X \twoheadrightarrow Y$ holds in $R$ if and only if,
for every pair of tuples $t_1$ and $t_2$ in $R$ that agree on $X$, there exists a tuple $t_3$ in $R$
that agrees with $t_1$ on $X$, with $t_1$ on $Y$, and with $t_2$ on $R - X - Y$.

A multivalued dependency $X \twoheadrightarrow Y$ means that the values of $Y$ are independent of
the values of $R - X - Y$, given a fixed value of $X$. Every FD $X \rightarrow Y$ implies the MVD
$X \twoheadrightarrow Y$, but not every MVD implies an FD.

```text
Relation: EmployeeSkill(emp_id, skill, language)

An employee has multiple skills and speaks multiple languages.
Skills and languages are independent attributes of an employee.

FDs: {emp_id -> emp_id} (only trivial FDs)
MVDs: {emp_id ⇸ skill} and {emp_id ⇸ language}

Since neither {emp_id, skill} nor {emp_id, language} is a superkey
(the candidate key is {emp_id, skill, language}), this violates 4NF.

Sample data showing the MVD:
| emp_id | skill    | language |
|--------|----------|----------|
| 1      | Python   | English  |
| 1      | Python   | French   |
| 1      | Java     | English  |
| 1      | Java     | French   |

The cross-product pattern (every combination of skill and language) is the
hallmark of a multi-valued dependency. If emp_id 1 has skills {Python, Java}
and languages {English, French}, the table must contain all 4 combinations.

Decomposition:
  EmployeeSkill(emp_id, skill)       -- key: {emp_id, skill}
  EmployeeLanguage(emp_id, language)  -- key: {emp_id, language}
```

:::info

4NF violations are rare in practice. They typically appear when modeling entity-attribute-value
patterns or when a single entity has multiple independent multi-valued attributes. If you see a
table where adding a row requires adding $m \times n$ rows (for $m$ values of one attribute and $n$
values of another), you likely have a 4NF violation.

:::

### Fifth Normal Form (5NF) / Project-Join Normal Form (PJNF)

**Definition.** A relation $R$ is in fifth normal form (5NF) if and only if, for every non-trivial
join dependency $JD(R_1, R_2, \ldots, R_n)$ that holds in $R$, each $R_i$ is a superkey of $R$.

A join dependency generalizes the concept of lossless-join decomposition to $n$ relations. A
relation $R$ satisfies a join dependency $JD(R_1, R_2, \ldots, R_n)$ if and only if $R$ is equal to
the natural join of its projections on $R_1, R_2, \ldots, R_n$:

$$R = \pi_{R_1}(R) \bowtie \pi_{R_2}(R) \bowtie \ldots \bowtie \pi_{R_n}(R)$$

5NF violations are extremely rare. They arise in ternary (or higher-arity) relationships where the
constraint is inherently multi-way and cannot be decomposed into binary relationships without losing
information.

```text
Classic 5NF example: Supplier-Part-Project

Relation: Supply(supplier, part, project)

Business rule: if a supplier supplies a certain part AND works on a certain project,
then that supplier supplies that part for that project.

This means:
  (S₁, P₁) ∈ Supply AND (S₁, J₁) ∈ Supply
  IMPLIES (S₁, P₁, J₁) ∈ Supply

Sample data satisfying the rule:
| supplier | part | project |
|----------|------|---------|
| S1       | P1   | J1      |
| S1       | P1   | J2      |
| S1       | P2   | J1      |

Decompose into binary relations:
  SP(supplier, part):   {(S1,P1), (S1,P2)}
  SJ(supplier, project): {(S1,J1), (S1,J2)}
  PJ(part, project):     {(P1,J1), (P1,J2), (P2,J1)}

Join SP ⋈ SJ ⋈ PJ:
  (S1,P1) ⋈ (S1,J1) ⋈ (P1,J1) -> (S1,P1,J1)  -- was in original
  (S1,P1) ⋈ (S1,J1) ⋈ (P2,J1) -> (S1,P1,J1)  -- wait, this needs checking
  (S1,P1) ⋈ (S1,J2) ⋈ (P1,J2) -> (S1,P1,J2)  -- was in original
  (S1,P2) ⋈ (S1,J1) ⋈ (P2,J1) -> (S1,P2,J1)  -- was in original

  The join SP ⋈ SJ gives: {(S1,P1,J1), (S1,P1,J2), (S1,P2,J1), (S1,P2,J2)}
  But (S1,P2,J2) was NOT in the original relation!

  This spurious tuple means the decomposition is LOSSY.
  The relation is in 5NF because it cannot be decomposed without losing information.
```

### Normal Form Summary

| Normal Form | Eliminates                                                      | Condition                                                         | Practical Relevance                                        |
| ----------- | --------------------------------------------------------------- | ----------------------------------------------------------------- | ---------------------------------------------------------- |
| 1NF         | Repeating groups, non-atomic values                             | Every attribute is atomic                                         | Mandatory for any relational database                      |
| 2NF         | Partial dependencies on composite keys                          | No non-prime attribute partially dependent on any candidate key   | Only matters with composite keys                           |
| 3NF         | Transitive dependencies                                         | For $X \rightarrow A$: $X$ is a superkey OR $A$ is prime          | Standard target for OLTP schemas                           |
| BCNF        | Determinants that are not superkeys (prime attribute exception) | For every non-trivial $X \rightarrow Y$: $X$ is a superkey        | Apply when possible; may sacrifice dependency preservation |
| 4NF         | Multi-valued dependencies                                       | For every non-trivial $X \twoheadrightarrow Y$: $X$ is a superkey | Rare; occurs with independent multi-valued attributes      |
| 5NF         | Join dependencies not implied by candidate keys                 | For every non-trivial JD: each component is a superkey            | Extremely rare; mostly theoretical                         |

## Normalization Examples

### Worked Example: University Course Registration

Walk through normalizing a real-world schema from unnormalized to BCNF.

#### Starting Point: Unnormalized Data

```text
CourseRegistration(student_id, student_name, student_email,
                   course_id, course_title, course_credits,
                   instructor_id, instructor_name, instructor_office,
                   semester, grade)

Sample row:
(1001, "Alice", "alice@univ.edu",
  CS101, "Intro to CS", 3,
  I5, "Prof Smith", "Room 301",
  "Fall 2025", "A")
```

#### Step 1: Identify Functional Dependencies

From the business rules:

```text
student_id -> student_name, student_email
course_id -> course_title, course_credits
instructor_id -> instructor_name, instructor_office
{student_id, course_id, semester} -> grade
course_id, semester -> instructor_id
```

#### Step 2: Identify Candidate Keys

```text
Compute closure of {student_id, course_id, semester}:
  {student_id, course_id, semester}⁺ = {student_id, student_name, student_email,
    course_id, course_title, course_credits, instructor_id, instructor_name,
    instructor_office, semester, grade} = R

Is it minimal? Remove student_id: {course_id, semester}⁺ = {course_id, course_title,
  course_credits, instructor_id, instructor_name, instructor_office, semester} ≠ R.
Remove course_id: {student_id, semester}⁺ = {student_id, student_name, student_email, semester} ≠ R.
Remove semester: {student_id, course_id}⁺ = {student_id, student_name, student_email,
  course_id, course_title, course_credits} ≠ R.

Candidate key: {student_id, course_id, semester}
Prime attributes: student_id, course_id, semester
Non-prime attributes: everything else
```

#### Step 3: Verify 1NF

All attributes are atomic. The relation is in 1NF.

#### Step 4: Check for 2NF Violations (Partial Dependencies)

```text
{student_id, course_id, semester} -> student_name
  But student_id -> student_name (partial -- depends on subset of key)
  VIOLATES 2NF.

{student_id, course_id, semester} -> course_title, course_credits
  But course_id -> course_title, course_credits (partial)
  VIOLATES 2NF.

{student_id, course_id, semester} -> instructor_id
  But {course_id, semester} -> instructor_id (partial)
  VIOLATES 2NF.

{student_id, course_id, semester} -> grade
  No subset of the key determines grade. FULL dependency. OK.
```

#### Step 5: Decompose to 2NF

```text
R1(student_id, course_id, semester, grade)
  FDs: {student_id, course_id, semester} -> grade
  Key: {student_id, course_id, semester}
  No partial dependencies. In 2NF.

R2(student_id, student_name, student_email)
  FDs: student_id -> student_name, student_email
  Key: {student_id}
  Single-attribute key, automatically in 2NF.

R3(course_id, course_title, course_credits)
  FDs: course_id -> course_title, course_credits
  Key: {course_id}
  Single-attribute key, automatically in 2NF.

R4(course_id, semester, instructor_id)
  FDs: {course_id, semester} -> instructor_id
  Key: {course_id, semester}
  Single non-key attribute. In 2NF.

R5(instructor_id, instructor_name, instructor_office)
  FDs: instructor_id -> instructor_name, instructor_office
  Key: {instructor_id}
  Single-attribute key, automatically in 2NF.
```

#### Step 6: Check for 3NF Violations (Transitive Dependencies)

```text
R1: {student_id, course_id, semester} -> grade. No transitive dependency. 3NF.
R2: student_id -> student_name, student_email. No transitive dependency. 3NF.
R3: course_id -> course_title, course_credits. No transitive dependency. 3NF.
R4: {course_id, semester} -> instructor_id. No transitive dependency. 3NF.
R5: instructor_id -> instructor_name, instructor_office. No transitive dependency. 3NF.

All relations are in 3NF.
```

#### Step 7: Check for BCNF Violations

```text
R1: Only FD is {student_id, course_id, semester} -> grade. Determinant is the key. BCNF.
R2: Only FD is student_id -> student_name, student_email. Determinant is the key. BCNF.
R3: Only FD is course_id -> course_title, course_credits. Determinant is the key. BCNF.
R4: Only FD is {course_id, semester} -> instructor_id. Determinant is the key. BCNF.
R5: Only FD is instructor_id -> instructor_name, instructor_office. Determinant is the key. BCNF.
```

All five relations are in BCNF. The decomposition is both lossless and dependency-preserving.

### Worked Example: BCNF Violation

```text
Relation: Booking(room_number, date, guest_name, guest_passport)

Business rules:
  - A room can have at most one booking per date
  - A guest has exactly one passport number
  - A guest can book multiple rooms on different dates

FDs:
  {room_number, date} -> guest_name, guest_passport
  guest_name -> guest_passport

Candidate keys:
  {room_number, date}  ({room_number, date}⁺ = R)
  {room_number, date, guest_name}  (obviously a superkey, but not minimal)

Check: is {room_number, guest_name} a candidate key?
  {room_number, guest_name}⁺ = {room_number, guest_name, guest_passport} ≠ R (missing date)
  Not a superkey.

Only candidate key: {room_number, date}
Prime attributes: room_number, date
Non-prime attributes: guest_name, guest_passport

3NF check:
  {room_number, date} -> guest_name: superkey. OK.
  {room_number, date} -> guest_passport: superkey. OK.
  guest_name -> guest_passport: guest_name is NOT a superkey.
    BUT guest_passport is NOT a prime attribute.
    VIOLATES 3NF.

Wait -- this also violates 3NF because guest_passport is non-prime.
Let me reconsider: guest_passport depends transitively on the key through guest_name.
  {room_number, date} -> guest_name -> guest_passport.
  This is a transitive dependency. 3NF violation.

Decomposition:
  R1(room_number, date, guest_name)      -- key: {room_number, date}
  R2(guest_name, guest_passport)          -- key: {guest_name}

Both in BCNF. Lossless: R1 ∩ R2 = {guest_name}, guest_name -> guest_passport,
so {guest_name} is a superkey for R2. Lossless.
Dependency-preserving: both FDs are checkable on individual relations.
```

## Decomposition

Decomposition is the mechanism by which normalization is achieved: you replace a single relation
with two or more smaller relations. Not every decomposition is correct. A decomposition must satisfy
two properties to be valid.

### Lossless-Join Decomposition

**Definition.** A decomposition of relation $R$ into $R_1$ and $R_2$ is a lossless-join
decomposition if and only if, for every legal instance of $R$:

$$R = R_1 \bowtie R_2$$

That is, joining the decomposed relations produces exactly the original relation, with no spurious
tuples and no missing tuples.

**Theorem.** A decomposition of $R$ into $R_1$ and $R_2$ is lossless if and only if at least one of
the following holds:

$$R_1 \cap R_2 \rightarrow R_1$$

$$R_1 \cap R_2 \rightarrow R_2$$

In words: the common attributes must form a superkey for at least one of the decomposed relations.

```text
R(A, B, C, D) with FDs: {A -> B, B -> C}

Decompose into R1(A, B) and R2(B, C, D):
  R1 ∩ R2 = {B}
  B -> C holds in F (and thus in R2). But is B a superkey for R2?
  B⁺ = {B, C}. B⁺ ≠ R2 = {B, C, D}. B is NOT a superkey for R2.
  Is B a superkey for R1? R1 = {A, B}. B⁺ = {B, C} ≠ {A, B}. B is NOT a superkey for R1.
  This decomposition is LOSSY.

Decompose into R1(A, B, C) and R2(B, C, D):
  R1 ∩ R2 = {B, C}
  B -> C holds. Is {B, C} a superkey for R1?
  {B, C}⁺ = {B, C}. {B, C}⁺ ≠ {A, B, C}. NOT a superkey for R1.
  Is {B, C} a superkey for R2?
  {B, C}⁺ = {B, C}. {B, C}⁺ ≠ {B, C, D}. NOT a superkey for R2.
  This decomposition is ALSO lossy.

Decompose into R1(A, B, C) and R2(A, D):
  R1 ∩ R2 = {A}
  A -> B holds. Is {A} a superkey for R1?
  A⁺ = {A, B, C} = R1. YES! Lossless. ✓

Decompose into R1(A, B) and R2(A, C, D):
  R1 ∩ R2 = {A}
  A -> B holds. Is {A} a superkey for R1?
  A⁺ = {A, B} = R1. YES! Lossless. ✓
  But dependency B -> C is not checkable on R1 or R2 alone.
  Not dependency-preserving.
```

For decompositions into more than two relations, the lossless-join property must be checked
pairwise. A decomposition $R_1, R_2, \ldots, R_n$ is lossless if, when you join them one at a time,
each intermediate join is lossless.

### Dependency Preservation

**Definition.** A decomposition of $R$ into $R_1, R_2, \ldots, R_n$ is dependency-preserving if and
only if, for every functional dependency $X \rightarrow Y$ in the closure of $F$ (the original set
of FDs), $X \cup Y \subseteq R_i$ for some $i$. Equivalently, the union of the restrictions of $F$
to each $R_i$ is logically equivalent to $F$:

$$(F_{R_1} \cup F_{R_2} \cup \ldots \cup F_{R_n})^+ = F^+$$

In plain language: every functional dependency from the original relation can be verified by
examining a single decomposed relation. You do not need to join the relations back together to check
the constraint.

### BCNF vs 3NF Decomposition Tradeoff

This is the central practical tension in normalization theory:

| Property              | 3NF Decomposition | BCNF Decomposition    |
| --------------------- | ----------------- | --------------------- |
| Lossless-join         | Always achievable | Always achievable     |
| Dependency-preserving | Always achievable | NOT always achievable |
| Redundancy            | Possible (minor)  | None                  |

**Theorem.** For every relation $R$ with a set of FDs $F$, there exists a decomposition of $R$ into
3NF that is both lossless and dependency-preserving.

**Theorem.** For every relation $R$ with a set of FDs $F$, there exists a decomposition of $R$ into
BCNF that is lossless, but such a decomposition may NOT be dependency-preserving.

```text
When BCNF loses dependency preservation:

Relation: R(A, B, C)
FDs: {A -> B, B -> C}

3NF decomposition (dependency-preserving):
  R1(A, B) with FDs: {A -> B}. 3NF and BCNF.
  R2(B, C) with FDs: {B -> C}. 3NF and BCNF.
  Both dependencies checkable on individual relations.
  Lossless: R1 ∩ R2 = {B}, B -> C, so B is a superkey for R2. ✓

BCNF decomposition (also works here):
  Same as above. Both R1 and R2 are already in BCNF.
  In this case, BCNF and 3NF coincide.
```

```text
When BCNF and 3NF differ:

Relation: R(student, course, instructor)
FDs: {{student, course} -> instructor, instructor -> course}

Candidate keys: {student, course} and {student, instructor}
All attributes are prime.

3NF check:
  {student, course} -> instructor: superkey. OK.
  instructor -> course: instructor is NOT a superkey, but course IS prime. Allowed by 3NF.
  In 3NF. ✓

BCNF check:
  instructor -> course: instructor is NOT a superkey. VIOLATES BCNF.

BCNF decomposition:
  R1(instructor, course) -- FD: instructor -> course. BCNF.
  R2(student, instructor) -- no non-trivial FDs. BCNF.

  Lost dependency: {student, course} -> instructor.
  This dependency requires attributes from both R1 and R2.
  It cannot be checked without joining.

3NF approach: keep the original relation.
  It is in 3NF. The dependency is preserved.
  The tradeoff: instructor -> course means that if Prof Smith teaches
  both CS101 and CS201, this information is duplicated across rows.
  But the duplication involves only prime attributes, so it is bounded.
```

:::info

The practical rule: always decompose to 3NF. If a relation is not in BCNF, check whether the BCNF
decomposition loses dependency preservation. If it does, and the lost dependency is important for
data integrity, stay in 3NF. If the lost dependency is trivial or can be enforced through
application logic, proceed with BCNF.

:::

## Practical Normalization

### When to Stop

In practice, nearly all OLTP schemas target 3NF. Here is the reasoning:

- **1NF is mandatory.** Non-atomic values break relational algebra operations and SQL query
  semantics.
- **2NF is almost free.** If your keys are single-column surrogate keys, 2NF violations are
  structurally impossible.
- **3NF is the sweet spot.** It eliminates transitive dependencies (the most common source of real
  update anomalies) and always admits a dependency-preserving, lossless decomposition.
- **BCNF is a bonus.** Apply it when it does not sacrifice dependency preservation. When it does,
  the redundancy it eliminates involves only prime attributes and is typically manageable.
- **4NF and 5NF** are almost never encountered in production schemas. When they do arise, the fix is
  usually obvious (split independent multi-valued attributes into separate tables).

### Normalization Checklist

```text
For each relation in your schema:

1. Does every column contain a single, atomic value?           (1NF)
2. Does every non-key column depend on the ENTIRE primary key? (2NF)
3. Does every non-key column depend ONLY on the primary key?   (3NF)
4. Is every determinant a superkey?                            (BCNF)
5. Are there independent multi-valued attributes?              (4NF)
```

### Normalization and Surrogate Keys

Surrogate keys (auto-increment integers, UUIDs) simplify normalization because they make composite
natural keys unnecessary in most cases. A single-column surrogate key means:

- 2NF violations are impossible (no composite key to have partial dependencies on)
- Candidate key computation is trivial (the surrogate alone is the primary key)
- Foreign key references are simpler and more efficient

```text
Without surrogate key:
  OrderItem(order_id, product_id, quantity)
  Composite key: {order_id, product_id}
  2NF violations are possible if product attributes are mixed in.

With surrogate key:
  OrderItem(item_id, order_id, product_id, quantity)
  Primary key: {item_id}
  2NF violations are impossible.
  But you still need UNIQUE(order_id, product_id) to prevent duplicates.
```

:::warning

Surrogate keys do not eliminate the need for normalization. They make 2NF automatic, but 3NF
violations (transitive dependencies) and BCNF violations can still occur. You still need to identify
and model functional dependencies correctly.

:::

### Normalization in Application Development

Most ORMs do not enforce normalization. It is the developer's responsibility to design a normalized
schema and then map it to ORM models. Common mistakes:

- Storing denormalized data in a "convenience" column without a mechanism to keep it consistent
- Using JSON columns to avoid creating a child table (violates 1NF if the JSON contains queryable
  data)
- Duplicating foreign key data across multiple tables "to avoid JOINs"

## Denormalization

### When to Denormalize

Denormalization is the deliberate reintroduction of redundancy into a normalized schema to improve
read performance. It should be a measured response to a measured problem, not a default design
choice.

**Valid reasons to denormalize:**

1. **Read-heavy workloads.** A query executed 10,000 times per second that requires a 5-table JOIN
   may be too slow even with proper indexing. Duplicating frequently accessed data eliminates the
   JOIN.
2. **Reporting and analytics.** OLAP queries often scan large tables and aggregate data. Precomputed
   aggregates (materialized views, summary tables) avoid recomputing expensive aggregations on every
   query.
3. **Geographic distribution.** In multi-region deployments, duplicating data reduces cross-region
   latency at the cost of eventual consistency.
4. **Caching layers.** A denormalized cache in front of a normalized database gives you fast reads
   without compromising the source of truth.

**Invalid reasons to denormalize:**

1. "JOINs are slow." Fix your indexes and query plans first.
2. "The schema is too complex." A normalized schema with 20 tables is easier to maintain than a
   denormalized schema with 10 tables and 5 consistency-triggering UPDATE statements.
3. "It is simpler to query." Application simplicity is not worth data corruption.

### Denormalization Patterns

#### Precomputed Aggregates

```sql
-- Normalized: compute order total from items on every read
SELECT SUM(quantity * unit_price) AS total
FROM order_items
WHERE order_id = 1;

-- Denormalized: store the total alongside the order
CREATE TABLE orders (
    order_id    INTEGER PRIMARY KEY,
    customer_id INTEGER NOT NULL,
    total       NUMERIC(10,2) NOT NULL,
    -- total must be updated whenever order_items change
    -- enforce via trigger or application logic
    updated_at  TIMESTAMPTZ DEFAULT NOW()
);
```

#### Flattened Tables

```sql
-- Normalized: JOIN to get customer name with every order
SELECT o.order_id, o.total, c.name, c.email
FROM orders o
JOIN customers c ON o.customer_id = c.customer_id;

-- Denormalized: store customer name directly in the order
CREATE TABLE orders (
    order_id      INTEGER PRIMARY KEY,
    customer_id   INTEGER NOT NULL,
    customer_name TEXT NOT NULL,
    customer_email TEXT NOT NULL,
    total         NUMERIC(10,2) NOT NULL
);
-- customer_name and customer_email are redundant with the customers table
-- must be updated when the customer changes their name or email
```

#### Duplicate Data for Filtering

```sql
-- Denormalized: copy a filterable column to avoid a JOIN
CREATE TABLE order_items (
    item_id        INTEGER PRIMARY KEY,
    order_id       INTEGER NOT NULL,
    product_id     INTEGER NOT NULL,
    product_name   TEXT NOT NULL,   -- redundant, copied from products table
    quantity       INTEGER NOT NULL,
    unit_price     NUMERIC(10,2) NOT NULL
);
-- Allows filtering by product_name without joining the products table
```

#### Materialized Views

```sql
-- PostgreSQL materialized view (precomputed, refreshed on schedule)
CREATE MATERIALIZED VIEW order_summary AS
SELECT
    c.customer_id,
    c.name AS customer_name,
    COUNT(o.order_id) AS order_count,
    COALESCE(SUM(o.total), 0) AS lifetime_value
FROM customers c
LEFT JOIN orders o ON c.customer_id = o.customer_id
GROUP BY c.customer_id, c.name
WITH DATA;

-- Refresh periodically (not real-time)
REFRESH MATERIALIZED VIEW order_summary;
```

### Denormalization Tradeoffs

| Tradeoff             | Impact                                                                            |
| -------------------- | --------------------------------------------------------------------------------- |
| Write amplification  | A single logical update may require updating multiple rows across multiple tables |
| Consistency overhead | Application logic, triggers, or background jobs must keep redundant data in sync  |
| Storage cost         | Duplicated data consumes more disk space (usually negligible with modern storage) |
| Query speed          | Fewer JOINs, simpler queries, potentially covering indexes                        |
| Complexity           | More code to maintain, more failure modes to test                                 |

:::warning

The most dangerous denormalization pattern is "silent duplication" -- copying data without any
mechanism to keep it consistent. If you denormalize, you must have a concrete strategy for
consistency: database triggers, application-level event handlers, or periodic reconciliation jobs.
Unmaintained denormalized data silently rots and becomes a source of bugs.

:::

## Anomaly Examples

This section demonstrates each anomaly type with concrete, unnormalized data and shows how
normalization eliminates it.

### The Unnormalized Relation

Consider a university database tracking course offerings:

```text
CourseOffering(course_id, course_title, department, dept_building,
               instructor_id, instructor_name, instructor_phone,
               student_id, student_name, student_major)

FDs:
  course_id -> course_title, department, dept_building
  department -> dept_building
  instructor_id -> instructor_name, instructor_phone
  student_id -> student_name, student_major
  {course_id, student_id} -> instructor_id
```

### Insertion Anomaly

**Problem:** You cannot add a new course until at least one student enrolls. If a new course
"Advanced Quantum Computing" (CS501) is created but has no students yet, there is no row to store
the course information.

**Problem:** You cannot add a new instructor until they are assigned to a course. If Prof Chen is
hired but not yet assigned a course, there is nowhere to record `instructor_name` and
`instructor_phone`.

**After normalization to 3NF:**

```text
Course(course_id, course_title, department_id)
Department(department_id, dept_building)
Instructor(instructor_id, instructor_name, instructor_phone)
Student(student_id, student_name, student_major)
Enrollment(course_id, student_id, instructor_id)

Now you can INSERT into Course, Department, Instructor, or Student independently.
```

### Deletion Anomaly

**Problem:** If student Alice (ID 1001) drops the only section of CS101, deleting her enrollment row
also removes the information that CS101 is titled "Intro to CS" and is in the CS department. If
Alice was the only student, the course data disappears.

**Problem:** If instructor Prof Smith (ID I5) is the only instructor of CS101 and you delete all
enrollment rows for CS101 (end of semester cleanup), you lose Prof Smith's name and phone number.

**After normalization to 3NF:**

```text
Deleting an Enrollment row only removes the enrollment fact.
Course, Instructor, and Department data persist in their own tables.
```

### Update Anomaly

**Problem:** The Computer Science department moves from Building A to Building B. With the
unnormalized schema, you must update `dept_building` in every row that has `department = 'CS'`. If
there are 5,000 enrollments in CS courses, that is 5,000 rows to update. If the UPDATE statement
fails partway through (or if someone updates only some rows), the database is inconsistent: some
rows say Building A, others say Building B.

**Problem:** Instructor Prof Smith changes her phone number. You must update every enrollment row
where she is the instructor. If she teaches 3 courses with 200 students each, that is 600 rows.

**After normalization to 3NF:**

```text
UPDATE Department SET dept_building = 'Building B' WHERE department_id = 'CS';

One row updated. The change is automatically visible to all courses in the department.
```

### Quantifying the Anomaly Cost

```text
Unnormalized CourseOffering table with 10,000 enrollments:
  - 50 distinct courses across 5 departments
  - 200 distinct instructors
  - 8,000 distinct students

Department moves (average 1 per year):
  Normalized: UPDATE 1 row in Department table.
  Unnormalized: UPDATE ~2,000 rows (10,000 enrollments / 5 departments).

Instructor phone change (average 500 per year):
  Normalized: UPDATE 1 row in Instructor table.
  Unnormalized: UPDATE ~50 rows per instructor (10,000 / 200 instructors), 25,000 total.

Student name change (marriage, legal name change):
  Normalized: UPDATE 1 row in Student table.
  Unnormalized: UPDATE ~5 rows per student (10,000 / 8,000 students).
```

The cost scales linearly with the number of enrollments. In a large university with millions of
historical enrollment records, the unnormalized approach becomes untenable.

## Exam-Style Problems

### Problem 1: Find Candidate Keys and Normalize to BCNF

```text
Relation: R(A, B, C, D, E)
FDs: {A -> B, BC -> E, ED -> A}

Step 1: Find candidate keys.
  A⁺ = {A, B}. (A -> B, but no further.)
  B⁺ = {B}.
  C⁺ = {C}.
  D⁺ = {D}.
  E⁺ = {E}.
  AB⁺ = {A, B}.
  AC⁺ = {A, B, C}. (A -> B. Now BC -> E: {A,B,C} -> {A,B,C,E}. Now ED -> A: need D. Stop.)
  AC⁺ = {A, B, C}.
  AD⁺ = {A, B, D}. (A -> B. No BC -> E. No ED -> A (need E). Stop.)
  AE⁺ = {A, B, E}. (A -> B. BC -> E needs C. ED -> A: need D. Stop.)
  BC⁺ = {B, C, E}. (BC -> E. ED -> A needs D. Stop.)
  BD⁺ = {B, D}.
  BE⁺ = {B, E}.
  CD⁺ = {C, D}.
  CE⁺ = {C, E}.
  DE⁺ = {D, E, A, B}. (ED -> A, A -> B. Now BC -> E needs C. Stop.)
  DE⁺ = {A, B, D, E}.
  BCD⁺ = {B, C, D, E, A}. (BC -> E, ED -> A, A -> B. = R!)
    Is {B,C,D} minimal? BC⁺ = {B,C,E}. Need D for ED -> A. D is needed.
    BD⁺ = {B,D}. Without C, no BC -> E. C is needed.
    CD⁺ = {C,D}. Without B, no BC -> E. B is needed.
    {B,C,D} is a candidate key.
  CDE⁺ = {C, D, E, A, B}. (ED -> A, A -> B, BC -> E. = R!)
    Is {C,D,E} minimal? CE⁺ = {C,E}. Without D, no ED -> A. D is needed.
    DE⁺ = {A,B,D,E}. Without C, no BC -> E... wait, after ED -> A and A -> B,
    we have {D,E,A,B}. Still need C to get BC -> E to reach C. But C is in the key!
    So DE⁺ with {C,D,E}: start {C,D,E}. ED -> A: {C,D,E,A}. A -> B: {C,D,E,A,B} = R.
    Remove C: {D,E}⁺ = {A,B,D,E}. ≠ R. C is needed.
    Remove D: {C,E}⁺ = {C,E}. ≠ R. D is needed.
    Remove E: {C,D}⁺ = {C,D}. ≠ R. E is needed.
    {C,D,E} is a candidate key.

Candidate keys: {B,C,D} and {C,D,E}
Prime attributes: B, C, D, E
Non-prime attributes: A

Step 2: Check normal forms.
  A -> B: A is not a superkey. B is a prime attribute. 3NF OK. BCNF violation.
  BC -> E: BC is not a superkey (BC⁺ = {B,C,E} ≠ R). E is prime. 3NF OK. BCNF violation.
  ED -> A: ED is not a superkey (ED⁺ = {A,B,D,E} ≠ R). A is not prime. 3NF VIOLATION.

Wait: A is non-prime, and ED is not a superkey. So ED -> A violates 3NF.

Step 3: Decompose for ED -> A.
  R1(E, D, A) with FDs: {ED -> A}. Key: {E, D}. BCNF.
  R2(E, D, B, C) with FDs: {BC -> E}. Keys: {B,C,D}, {C,D,E}. BCNF.
    (Check: BC⁺ = {B,C,E}. Not all of R2. But the only non-trivial FD is BC -> E.
    BC is not a superkey of R2. Is E prime? E is in candidate key {C,D,E}. Yes, E is prime.
    So R2 is in 3NF. Is it in BCNF? BC -> E, BC is not a superkey of R2. BCNF violation.)

Step 4: Decompose R2 for BC -> E.
  R2a(B, C, E) with FDs: {BC -> E}. Key: {B, C}. BCNF.
  R2b(B, C, D) with FDs: none non-trivial. Key: {B, C, D}. BCNF.

Final decomposition:
  R1(E, D, A)       -- key: {E, D}
  R2a(B, C, E)      -- key: {B, C}
  R2b(B, C, D)      -- key: {B, C, D}

Lossless check:
  R1 ⋈ R2a: R1 ∩ R2a = {E}. ED -> A means {E} alone... no, ED -> A, not E -> A.
  Need to check differently. R2a ⋈ R2b: R2a ∩ R2b = {B, C}. BC -> E, so {B,C} is a superkey
  for R2a. Lossless. ✓
  R1 ⋈ R2a: R1 ∩ R2a = {E}. Is E a superkey for R1? E⁺ in R1 = {E}. Not a superkey.
  Is E a superkey for R2a? E⁺ in R2a = {E}. Not a superkey. LOSSY?

  This means the decomposition order matters. Let me re-check.

  Actually, the lossless-join theorem applies to binary decompositions. For n-way decompositions,
  you need to check that joining one relation at a time is lossless at each step.

  Start with R. Decompose into R1(E,D,A) and R2'(E,D,B,C):
    R1 ∩ R2' = {E,D}. ED -> A, so {E,D} is a superkey for R1. Lossless. ✓

  Now decompose R2' into R2a(B,C,E) and R2b(B,C,D):
    R2a ∩ R2b = {B,C}. BC -> E, so {B,C} is a superkey for R2a. Lossless. ✓

  The full decomposition is lossless.
```

### Problem 2: Normalize to 3NF

```text
Relation: Hospital(patient_id, patient_name, doctor_id, doctor_name,
                   specialty, appointment_date, diagnosis)

FDs:
  patient_id -> patient_name
  doctor_id -> doctor_name, specialty
  {patient_id, appointment_date} -> doctor_id, diagnosis

Step 1: Candidate keys.
  {patient_id, appointment_date}⁺ = R (determins doctor_id, which determines
  doctor_name and specialty, and also determines diagnosis).
  No smaller set is a superkey.
  Candidate key: {patient_id, appointment_date}
  Prime: patient_id, appointment_date
  Non-prime: patient_name, doctor_id, doctor_name, specialty, diagnosis

Step 2: 2NF violations (partial dependencies on composite key).
  patient_id -> patient_name (partial)
  doctor_id -> doctor_name, specialty (partial)

Step 3: Decompose to 2NF.
  R1(patient_id, appointment_date, doctor_id, diagnosis)
    Key: {patient_id, appointment_date}. 2NF.
  R2(patient_id, patient_name)
    Key: {patient_id}. 2NF.
  R3(doctor_id, doctor_name, specialty)
    Key: {doctor_id}. 2NF.

Step 4: 3NF violations (transitive dependencies).
  R1: {patient_id, appointment_date} -> doctor_id -> doctor_name, specialty?
    doctor_name and specialty are not in R1. No transitive dependency in R1. 3NF.
  R2: patient_id -> patient_name. No transitive dependency. 3NF.
  R3: doctor_id -> doctor_name, specialty. No transitive dependency. 3NF.

All in 3NF and BCNF.
```

### Problem 3: Identify the Normal Form

```text
Relation: R(A, B, C, D, E)
FDs: {A -> BC, CD -> E, B -> D, E -> A}

Step 1: Find candidate keys.
  A⁺ = {A, B, C, D, E} (A -> BC -> BCD. B -> D already included. CD -> E -> A, loop.)
  = R. A is a superkey.
  Minimal? Yes (empty set⁺ = {}). Candidate key: {A}.

  Any others? B⁺ = {B, D}. C⁺ = {C}. D⁺ = {D}. E⁺ = {A, B, C, D, E} = R.
  E is a superkey. Minimal? Yes ({}⁺ = {}). Candidate key: {E}.

  Candidate keys: {A}, {E}
  Prime: A, E
  Non-prime: B, C, D

Step 2: Check each FD.
  A -> BC: A is a superkey. OK for any normal form.
  CD -> E: CD is not a superkey (CD⁺ = {C,D,E,A,B} = R... wait.
    CD⁺ = {C,D}. CD -> E: {C,D,E}. E -> A: {C,D,E,A}. A -> BC: {C,D,E,A,B,C,D} = R.
    CD IS a superkey! So CD -> E is fine for BCNF.
  B -> D: B is not a superkey (B⁺ = {B,D}). D is not prime. 3NF violation.
  E -> A: E is a superkey. OK.

  The relation is in 2NF (the only partial dependency issue would be on a composite key,
  but we have single-attribute candidate keys, so 2NF is automatic from 1NF).

  B -> D violates 3NF (and BCNF).

Step 3: Decompose.
  R1(B, D) with FDs: {B -> D}. Key: {B}. BCNF.
  R2(A, B, C, E) with FDs: {A -> BC, E -> A}.
    Candidate keys: {A}, {E}. Both superkeys. All FDs have superkey determinants. BCNF.

Final: R1(B,D) and R2(A,B,C,E). Both in BCNF. Lossless and dependency-preserving.
```

### Problem 4: Compute Minimal Cover and Normalize

```text
Relation: R(A, B, C, D, E, F)
FDs: {AB -> C, C -> BF, AD -> E, E -> F}

Step 1: Find candidate keys.
  A⁺ = {A}. B⁺ = {B}. C⁺ = {C, B, F}. D⁺ = {D}. E⁺ = {E, F}. F⁺ = {F}.
  AB⁺ = {A, B, C, F, E} (AB -> C, C -> BF -> {C,B,F}, E -> F. Missing D.)
  AD⁺ = {A, D, E, F} (AD -> E, E -> F. Missing B, C.)
  ABD⁺ = {A, B, D, C, F, E} (AB -> C, C -> BF, AD -> E, E -> F) = R!
    Minimal? AB⁺ = {A,B,C,F,E}. Missing D. D is needed. Keep D.
    AD⁺ = {A,D,E,F}. Missing B,C. B is needed.
    BD⁺ = {B,D}. Missing A. A is needed.
    {A,B,D} is a candidate key.

  CD⁺ = {C,D,B,F}. Missing A, E.
  CE⁺ = {C,E,B,F}. Missing A, D.
  CDE⁺ = {C,D,E,B,F,A} = R.
    Minimal? CD⁺ missing A, E. CE⁺ missing A, D. DE⁺ = {D,E,F}. Missing A,B,C.
    C is needed, D is needed, E is needed. {C,D,E} is a candidate key.

  Candidate keys: {A,B,D} and {C,D,E}
  Prime: A, B, C, D, E
  Non-prime: F

Step 2: Compute minimal cover.
  Start: {AB -> C, C -> BF, AD -> E, E -> F}
  Decompose right sides: {AB -> C, C -> B, C -> F, AD -> E, E -> F}

  Remove redundant FDs:
    Remove AB -> C: compute AB⁺ using {C->B, C->F, AD->E, E->F}:
      AB⁺ = {A,B}. Does NOT contain C. Restore.
    Remove C -> B: compute C⁺ using {AB->C, C->F, AD->E, E->F}:
      C⁺ = {C,F}. Does NOT contain B. Restore.
    Remove C -> F: compute C⁺ using {AB->C, C->B, AD->E, E->F}:
      C⁺ = {C,B}. Does NOT contain F. Restore.
    Remove AD -> E: compute AD⁺ using {AB->C, C->B, C->F, E->F}:
      AD⁺ = {A,D}. Does NOT contain E. Restore.
    Remove E -> F: compute E⁺ using {AB->C, C->B, C->F, AD->E}:
      E⁺ = {E}. Does NOT contain F. Restore.
  No redundant FDs.

  Remove redundant left-side attributes:
    AB -> C: Remove A: B⁺ = {B}. No. Remove B: A⁺ = {A}. No. Keep.
    C -> B: Only one attribute. Keep.
    C -> F: Only one attribute. Keep.
    AD -> E: Remove A: D⁺ = {D}. No. Remove D: A⁺ = {A}. No. Keep.
    E -> F: Only one attribute. Keep.

  Minimal cover: {AB -> C, C -> B, C -> F, AD -> E, E -> F}

Step 3: Check normal forms.
  All FDs except those with superkey determinants:
    AB -> C: AB is not a superkey. C is prime. 3NF OK.
    C -> B: C is not a superkey. B is prime. 3NF OK.
    C -> F: C is not a superkey. F is NOT prime. 3NF VIOLATION.
    AD -> E: AD is not a superkey. E is prime. 3NF OK.
    E -> F: E is not a superkey. F is NOT prime. 3NF VIOLATION.

  C -> F and E -> F violate 3NF.

Step 4: Decompose.
  For C -> F:
    R1(C, F) with FDs: {C -> F}. Key: {C}. BCNF.
    R'(A, B, C, D, E) with FDs: {AB -> C, C -> B, AD -> E}.

  R' candidate keys: ABD⁺ = {A,B,D,C,E} = R'. CDE⁺ = {C,D,E,B,A} = R'.
  Candidate keys: {A,B,D} and {C,D,E}. Prime: A,B,C,D,E.

  Check E -> F: F is not in R'. The dependency is gone (handled by R1).

  For E -> F: already removed. Check remaining FDs in R':
    AB -> C: C is prime. 3NF OK.
    C -> B: B is prime. 3NF OK.
    AD -> E: E is prime. 3NF OK.

  R' is in 3NF. But check BCNF:
    C -> B: C is not a superkey of R'. BCNF violation.
    But B is prime, so 3NF allows it.

  For BCNF, decompose R' on C -> B:
    R2(C, B) with FDs: {C -> B}. Key: {C}. BCNF.
    R3(A, C, D, E) with FDs: {AD -> E}.
      Candidate key: {A, C, D} (ACD⁺ = {A,C,D,E} = R3. Minimal? Remove A: CD⁺ = {C,D}.
      Remove C: AD⁺ = {A,D,E}. Missing C. Remove D: AC⁺ = {A,C}. {A,C,D} is a candidate key.)
      Also {C, D, E}: CDE⁺ = {C,D,E}. Wait, with only AD -> E, CDE⁺ = {C,D,E}. No, AD -> E
      needs A. CDE⁺ = {C,D,E}. Missing A. Not a superkey.
      Only candidate key: {A, C, D}. AD -> E: AD is not a superkey (AD⁺ = {A,D,E} ≠ R3).
      E is prime? E is in {A,C,D}? No! E is not prime in R3.
      AD -> E violates 3NF in R3.

  Decompose R3 on AD -> E:
    R3a(A, D, E) with FDs: {AD -> E}. Key: {A, D}. BCNF.
    R3b(A, C, D) with FDs: none non-trivial. Key: {A, C, D}. BCNF.

Final BCNF decomposition:
  R1(C, F)         -- key: {C}
  R2(C, B)         -- key: {C}
  R3a(A, D, E)     -- key: {A, D}
  R3b(A, C, D)     -- key: {A, C, D}

Verify lossless join:
  R2 ⋈ R3b: {C} ∩ {A,C,D} = {C}. C -> B, so {C} is superkey for R2. Lossless. ✓
  (R2 ⋈ R3b) ⋈ R3a: {A,C,D} ∩ {A,D,E} = {A,D}. AD -> E, so {A,D} is superkey for R3a. Lossless. ✓
  ((R2 ⋈ R3b) ⋈ R3a) ⋈ R1: {A,C,D} ∩ {C,F} = {C}. C -> F, so {C} is superkey for R1. Lossless. ✓
```

### Problem 5: BCNF with Dependency Preservation Conflict

```text
Relation: R(A, B, C, D)
FDs: {A -> B, B -> C, CD -> A}

Step 1: Candidate keys.
  A⁺ = {A, B, C}. (A -> B, B -> C. Missing D.)
  B⁺ = {B, C}. Missing A, D.
  D⁺ = {D}.
  AD⁺ = {A, D, B, C} = R.
    Minimal? A⁺ missing D. D⁺ missing A,B,C. {A,D} is a candidate key.
  BD⁺ = {B, D, C}. (B -> C. Missing A.) Not a superkey.
  CD⁺ = {C, D, A, B} = R. (CD -> A, A -> B -> C.) = R.
    Minimal? C⁺ = {C}. D⁺ = {D}. {C,D} is a candidate key.

  Candidate keys: {A, D} and {C, D}
  Prime: A, C, D
  Non-prime: B

Step 2: Check normal forms.
  A -> B: A is not a superkey. B is not prime. 3NF VIOLATION.
  B -> C: B is not a superkey. C IS prime. 3NF OK. BCNF violation.
  CD -> A: CD is a superkey. OK.

  3NF is violated by A -> B.

Step 3: Decompose for A -> B.
  R1(A, B) with FDs: {A -> B}. Key: {A}. BCNF.
  R2(A, C, D) with FDs: {CD -> A}.
    Candidate key: {C, D}. CD -> A: CD is a superkey. BCNF.

Lossless: R1 ∩ R2 = {A}. A -> B, so {A} is a superkey for R1. Lossless. ✓

Dependency preservation:
  A -> B: checkable on R1. ✓
  B -> C: B and C are in different relations (B in R1, C in R2).
    NOT checkable on any single relation. ✗
  CD -> A: checkable on R2. ✓

The BCNF decomposition is NOT dependency-preserving (loses B -> C).

Alternative: 3NF decomposition that preserves dependencies.
  Group FDs by overlapping left sides:
    {A -> B} -> R1(A, B)
    {B -> C} -> R2(B, C)
    {CD -> A} -> R3(C, D, A)

  R1(A, B): key {A}. BCNF.
  R2(B, C): key {B}. BCNF.
  R3(C, D, A): key {C, D}. BCNF.
  All FDs checkable on individual relations. Dependency-preserving. ✓
  Lossless: R3 ∩ R1 = {A}. A -> B, superkey for R1. Lossless.
  R3 ∩ R2 = {C}. C -> ? No FD C -> something. Hmm.

  Actually, check R3 ⋈ R1: {A} ∩ {C,D,A} = {A}. In R1, A -> B, so {A} is a superkey for R1.
  Lossless. Then (R3 ⋈ R1) ⋈ R2: the result has {A,B,C,D}. R2 has {B,C}. Intersection = {B,C}.
  B -> C, so {B} is not a superkey for the result... but {B,C} as a set: BC -> ?
  Actually B -> C, and the left side is B. Is B a superkey for R2? R2 = {B,C}. B⁺ = {B,C} = R2.
  Yes! Lossless. ✓

  The 3NF decomposition (R1, R2, R3) is both lossless and dependency-preserving.
  But note that R2(B, C) has a BCNF violation? No: B -> C, and B is a superkey for R2. BCNF. ✓

  So in this case, the 3NF decomposition also achieves BCNF for all individual relations.
  The BCNF decomposition via A -> B (into R1 and R2 only) was the one that lost B -> C.
  The correct approach is to use the synthesis algorithm: group by left sides.
```

### Problem 6: 4NF Identification

```text
Relation: R(employee_id, project_name, role)

An employee works on multiple projects and can have multiple roles on each project.
However, roles and projects are independent: an employee's set of roles is the same
regardless of which project they work on.

FDs: {employee_id, project_name -> role}
     (an employee has a specific role on a specific project -- wait, this contradicts
     independence)

Let me reconsider. If roles are truly independent of projects:

An employee has skills {Python, Java, SQL} and works on projects {Alpha, Beta}.
Skills and projects are independent.

This is better modeled as:
Relation: R(emp_id, skill, project)
MVDs: {emp_id ⇸ skill} and {emp_id ⇸ project}

Candidate key: {emp_id, skill, project}

The cross-product pattern appears:
| emp_id | skill  | project |
|--------|--------|---------|
| 1      | Python | Alpha   |
| 1      | Python | Beta    |
| 1      | Java   | Alpha   |
| 1      | Java   | Beta    |
| 1      | SQL    | Alpha   |
| 1      | SQL    | Beta    |

For 4NF: emp_id is not a superkey ({emp_id}⁺ = {emp_id}).
Both MVDs violate 4NF.

Decompose:
  R1(emp_id, skill)     -- key: {emp_id, skill}
  R2(emp_id, project)   -- key: {emp_id, project}

Both in BCNF (and 4NF, since there are no MVDs in single-key relations).
```
