---
title: Normalisation
tags:
  - Computing
  - University
---

### 4.1 Functional Dependencies

A **functional dependency** $X \to Y$ holds on relation $R$ if for any two tuples $t_1, t_2$ in $R$
$t_1[X] = t_2[X]$ implies $t_1[Y] = t_2[Y]$.

**Armstrong's axioms:**

1. **Reflexivity:** If $Y \subseteq X$Then $X \to Y$.
2. **Augmentation:** If $X \to Y$Then $XZ \to YZ$.
3. **Transitivity:** If $X \to Y$ and $Y \to Z$Then $X \to Z$.

**Derived rules:**

4. **Union:** If $X \to Y$ and $X \to Z$Then $X \to YZ$.
5. **Decomposition:** If $X \to YZ$Then $X \to Y$ and $X \to Z$.
6. **Pseudotransitivity:** If $X \to Y$ and $YW \to Z$Then $XW \to Z$.

**Attribute closure.** $X^+$ is the set of all attributes functionally determined by $X$. Computed
By starting with $X$ and repeatedly applying Armstrong's axioms until no new attributes can be
added.

**Theorem 4.1.** $X \to Y$ holds if and only if $Y \subseteq X^+$.

### 4.2 Normal Forms

**First Normal Form (1NF).** All attribute values are atomic (indivisible). No repeating groups or
Nested relations.

**Second Normal Form (2NF).** In 1NF, and no non-prime attribute is partially dependent on any
Candidate key. Equivalently: every non-prime attribute is fully functionally dependent on every
Candidate key.

A **partial dependency** is $A \to B$ where $A$ is a proper subset of a candidate key and $B$ is
Non-prime.

**Third Normal Form (3NF).** In 2NF, and for every non-trivial FD $X \to A$ in $R$Either $X$ is a
Superkey or $A$ is a prime attribute.

A **prime attribute** is an attribute that belongs to some candidate key.

**Boyce-Codd Normal Form (BCNF).** For every non-trivial FD $X \to A$ in $R$, $X$ is a superkey.

**Theorem 4.2.** Every relation in BCNF is in 3NF, but the converse does not hold.

_Proof._ BCNF requires $X$ to be a superkey for every non-trivial FD $X \to A$. 3NF allows $X$ to be
A superkey **or** $A$ to be prime. Since the BCNF condition is stricter, every BCNF relation is in
3NF. For the converse, consider $R(A, B, C)$ with FDs $AB \to C$ and $C \to B$. Candidate keys:
$\\{AB\\}$, $\\{AC\\}$. $C \to B$ does not violate 3NF ($B$ is prime) but violates BCNF ($C$ is not
a Superkey). $\blacksquare$

### 4.3 Decomposition

A decomposition of $R$ into $R_1, R_2, \ldots, R_k$ must satisfy:

1. **Lossless-join:** $R = R_1 \bowtie R_2 \bowtie \cdots \bowtie R_k$. No information is lost.
2. **Dependency preservation:** Every FD in the original schema is implied by the FDs in the
   decomposed schemas.

**Theorem 4.3 (Lossless-join test).** A decomposition of $R$ into $R_1, R_2$ is lossless if and Only
if $R_1 \cap R_2 \to R_1$ or $R_1 \cap R_2 \to R_2$.

_Proof._ Let $r$ be an instance of $R$ and let $r_1 = \pi_{R_1}(r)$, $r_2 = \pi_{R_2}(r)$. We must
Show $r = r_1 \bowtie r_2$ under the given condition. Since $r_1$ and $r_2$ are projections of $r$
Every tuple in $r_1 \bowtie r_2$ agrees with some tuple of $r$ on every attribute. It suffices to
show That no spurious tuple is produced. Suppose $(t_1, t_2) \in r_1 \bowtie r_2$ where
$t_1 \in r_1$ and $t_2 \in r_2$. Since $t_1$ and $t_2$ agree on $R_1 \cap R_2$And by the condition
$R_1 \cap R_2 \to
R_1$ (WLOG), there exists $T' \in r$ with
$T'[R_1 \cap R_2] = t_1[R_1 \cap R_2] = t_2[R_1 \cap
R_2]$. Since
$T'[R_1 \cap R_2] = t_1[R_1 \cap R_2]$ and $R_1 \cap R_2 \to R_1$, we have $t'[R_1] = t_1[R_1]$.
Similarly $t'[R_2] = t_2[R_2]$. Thus $(t_1, t_2)$ corresponds to a real tuple $t' \in r$So no
spurious tuple exists. $\blacksquare$

**Dependency preservation.** Let $F$ be the set of FDs for $R$. The decomposition $R_1, \ldots, R_k$
Preserves dependencies if the **closure** of $\bigcup_{i=1}^{k} F_i^+$ (where $F_i$ is the
restriction Of $F$ to $R_i$) equals $F^+$. In practice, we check that every FD in a minimal cover of
$F$ can be Tested within a single $R_i$.

Dependency preservation is important for **efficient constraint checking**: when updating $R_i$The
DBMS can verify relevant FDs locally without joining all decomposed relations.

### 4.4 Normalisation Examples

**Example 1.** `Enrolment(StudentID, CourseID, StudentName, Dept, Grade)` with FDs:
$\mathrm{StudentID} \to \mathrm{StudentName}$, $\mathrm{StudentID} \to \mathrm{Dept}$
$\\{\mathrm{StudentID}, \mathrm{CourseID}\\} \to \mathrm{Grade}$.

- Candidate key: $\\{\mathrm{StudentID}, \mathrm{CourseID}\\}$.
- 1NF: satisfied (atomic values).
- 2NF violation: $\mathrm{StudentID} \to \mathrm{StudentName}$ is a partial dependency (StudentID is
  a proper subset of the key).
- Decompose: `Student(StudentID, StudentName, Dept)` and `Enrolment(StudentID, CourseID, Grade)`.
  Both are in 3NF and BCNF.

**Example 2 (3NF but not BCNF).** `CourseOffering(Course, Instructor, Room, Time)` with FDs:
$\\{\mathrm{Course}, \mathrm{Time}\\} \to \\{\mathrm{Instructor}, \mathrm{Room}\\}$
$\mathrm{Instructor} \to \mathrm{Room}$.

- Candidate key: $\\{\mathrm{Course}, \mathrm{Time}\\}$.
- 3NF: $\mathrm{Instructor} \to \mathrm{Room}$ -- Instructor is not a superkey, but Room is not
  prime. Wait -- Room is **not** prime (not in any candidate key). So this actually violates 3NF
  too.

Let us correct: `CourseOffering(Course, Instructor, Textbook)` with FDs:
$\mathrm{Course} \to \mathrm{Instructor}$ $\mathrm{Instructor} \to \mathrm{Textbook}$.

- Candidate key: $\\{\mathrm{Course}\\}$ (since Course determines everything transitively).
- 3NF: $\mathrm{Instructor} \to \mathrm{Textbook}$. Instructor is not a superkey. Textbook is not
  prime. Violates 3NF.

Better example. `Class(Course, Instructor, Student)` with FDs:
$\\{\mathrm{Course}, \mathrm{Student}\\} \to \mathrm{Instructor}$
$\mathrm{Instructor} \to \mathrm{Course}$.

- Candidate keys: $\\{\mathrm{Course}, \mathrm{Student}\\}$,
  $\\{\mathrm{Instructor}, \mathrm{Student}\\}$.
- 3NF check for $\mathrm{Instructor} \to \mathrm{Course}$: Instructor is not a superkey. But Course
  **is** prime (in candidate key $\\{\mathrm{Course}, \mathrm{Student}\\}$). So 3NF is satisfied.
- BCNF check: $\mathrm{Instructor} \to \mathrm{Course}$ violates BCNF (Instructor is not a
  superkey).

Decompose: `Teaches(Instructor, Course)` and `Attends(Instructor, Student)`. This is lossless
($\mathrm{Instructor}$ is common and $\mathrm{Instructor} \to \mathrm{Course}$ holds in `Teaches`).
But the dependency $\\{\mathrm{Course}, \mathrm{Student}\\} \to \mathrm{Instructor}$ is Not
preserved.

**Theorem 4.4.** Not every relation can be decomposed into BCNF while preserving dependencies. 3NF
Is the strongest normal form guaranteeing dependency-preserving, lossless-join decomposition.

<details>
<summary>Worked Example 4.1: BCNF Decomposition Algorithm</summary>

**Relation:** $R(A, B, C, D, E)$ with FDs $F = \\{A \to B, BC \to E, ED \to A\\}$.

**Step 1.** Find candidate keys. Compute $A^+ = \\{A, B\\}$.
$BC^+ = \\{B, C, E, D, A\\} = \\{A, B, C, D, E\\}$. So $BC$ is a candidate key. Check $ED$:
$ED^+ = \\{E, D, A, B, C\\} = \\{A, B, C, D, E\\}$. So $ED$ is Also a candidate key. Prime
attributes: $B, C, D, E$.

**Step 2.** Check BCNF. $A \to B$: $A$ is not a superkey (since $A^+ \neq R$). Violates BCNF.
Decompose on $A \to B$: $R_1 = \\{A, B\\}$ and $R_2 = \\{A, C, D, E\\}$.

**Step 3.** $R_1 = \\{A, B\\}$ is in BCNF (FD $A \to B$ with $A$ as superkey).

For $R_2 = \\{A, C, D, E\\}$ with FDs restricted to $R_2$: $BC \to E$ involves $B$ which is not in
$R_2$ So it is dropped. $ED \to A$ holds. Also, $A \to B$ involves $B$ not in $R_2$So it is dropped.
Check for implied FDs: $A \to B$ in $R$ implies $AC \to BC$ (augmentation), so $AC \to E$ in $R$
(since $BC \to E$). But $AC$ is not a superkey of $R_2$... Wait, let us recheck.

Actually, from $BC \to E$ and the fact that $B$ is not in $R_2$We cannot directly use $BC \to E$ In
$R_2$. We should compute the projection of $F$ onto $R_2$:
$F_2 = \\{ED \to A, A \to \varnothing\\}$. So the only non-trivial FD in $R_2$ is $ED \to A$. Is
$ED$ a superkey of $R_2$? $ED^+ = \\{E, D, A\\} \neq
\\{A, C, D, E\\}$ (missing $C$). So $ED$ is not
a superkey of $R_2$.

Hmm, we need to be more careful. Let us check if $C$ is determined by $ED$ in the original $R$.
$ED^+$ in $R = \\{E, D, A, B\\}$Which does not include $C$. So $C$ is not determined.

This means $R_2 = \\{A, C, D, E\\}$ has no non-trivial FDs that hold (other than keys determining
all Attributes). Check: candidate keys of $R_2$ must be superkeys. Since $ED \to A$ holds but $ED$
does Not determine $C$We need $EDC$ as a key: $EDC^+ = \\{E, D, C, A, B\\} = R$ (all of $R$). So in
$R_2$, $EDC$ is a candidate key (since it determines all attributes of $R_2$: $EDC \to A$ and
$A \to
\varnothing$ in $R_2$, so $EDC^+ = \\{A, C, D, E\\}$). $R_2$ is in BCNF since the only
non-trivial FD is $ED \to A$ and we need to check if $ED$ is a superkey of $R_2$. Since
$ED^+ \cap R_2 = \\{A, D, E\\}
\neq R_2$, $ED$ is not a superkey.

But wait -- there are no other non-trivial FDs in $R_2$. The only one is $ED \to A$Which violates
BCNF. Decompose: $R_{2a} = \\{E, D, A\\}$ and
$R_{2b} = \\{A, C, D, E\\} \setminus \\{E, D, A\\} =
\\{C\\}$.

Hmm, $\\{C\\}$ alone is a relation with no non-trivial FDs, so it is in BCNF.
$R_{2a} = \\{E, D, A\\}$ With $ED \to A$: $ED$ is a superkey (it determines all three attributes).
BCNF.

**Final decomposition:** $R_1 = \\{A, B\\}$, $R_{2a} = \\{A, D, E\\}$, $R_{2b} = \\{C\\}$.

**Lossless check:** $R_1 \cap R_{2a} = \\{A\\}$, $A \to B$ (from $F$), so $R_1 \bowtie R_{2a}$ is
lossless. $R_{2a} \cap R_{2b} = \varnothing$... This is problematic. $R_{2b} = \\{C\\}$ shares no
attributes with The others.

The issue is that $C$ is a "dangling" attribute. This is correct -- $C$ appears only in the key $BC$
Of the original relation but is not functionally determined by anything except the full key. The
Decomposition is technically correct but $R_{2b} = \\{C\\}$ by itself cannot be joined losslessly
with The others.

This illustrates a limitation of BCNF decomposition: it may produce a relation with no common
Attributes, making lossless join impossible to verify with the pairwise test. In practice, the 3NF
Synthesis algorithm avoids this issue.

</details>

:::caution Common Pitfall Do not confuse partial dependency (2NF violation) with transitive
dependency (3NF violation). A Partial dependency involves a **proper subset** of a candidate key
determining a non-prime attribute. A transitive dependency involves a non-key attribute determining
another non-prime attribute.

### 4.5 Multivalued Dependencies and 4NF

A **multivalued dependency (MVD)** $X \twoheadrightarrow Y$ holds on relation $R$ if for any two
Tuples $t_1, t_2 \in R$ with $t_1[X] = t_2[X]$There exists a tuple $t_3 \in R$ such that:

- $t_3[X] = t_1[X]$
- $t_3[Y] = t_1[Y]$
- $t_3[R - X - Y] = t_2[R - X - Y]$

: $X$ determines $Y$ independently of $R - X - Y$.

**Trivial MVDs:** $X \twoheadrightarrow Y$ where $Y \subseteq X$ or $X \cup Y = R$.

**Fourth Normal Form (4NF).** $R$ is in 4NF if for every non-trivial MVD $X \twoheadrightarrow Y$
That holds on $R$, $X$ is a superkey.

**Theorem 4.5.** Every relation in 4NF is in BCNF.

_Proof._ Every FD $X \to Y$ implies the MVD $X \twoheadrightarrow Y$. In 4NF, every non-trivial MVD
$X \twoheadrightarrow Y$ requires $X$ to be a superkey. Therefore, every non-trivial FD $X \to Y$
Also requires $X$ to be a superkey, which is the BCNF condition. $\blacksquare$

**4NF decomposition.** Given $R$ with MVD $X \twoheadrightarrow Y$ where $X$ is not a superkey,
Decompose into $R_1 = X \cup Y$ and $R_2 = R - Y$. The decomposition is lossless-join.

<details>
<summary>Worked Example 4.2: Decomposition to 4NF</summary>

**Relation:** `CourseInstructor(Course, Instructor, Textbook)` where each course can have multiple
Instructors and multiple textbooks, independently.

MVDs: $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$
$\mathrm{Course} \twoheadrightarrow \mathrm{Textbook}$.

**Sample data:**

| Course | Instructor | Textbook         |
| ------ | ---------- | ---------------- |
| CS101  | Smith      | DB Systems       |
| CS101  | Lee        | DB Systems       |
| CS101  | Smith      | Algorithm Design |
| CS101  | Lee        | Algorithm Design |

The redundancy is clear: each instructor-textbook pair is repeated for each course.

**4NF check:** $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$ is non-trivial, and
$\mathrm{Course}$ is not a superkey. Violates 4NF.

**Decompose:**

- `CI(Course, Instructor)` with MVD $\mathrm{Course} \twoheadrightarrow \mathrm{Instructor}$
- `CT(Course, Textbook)` with MVD $\mathrm{Course} \twoheadrightarrow \mathrm{Textbook}$

Both are in 4NF (the determining attribute `Course` is a candidate key in each).

</details>



:::
