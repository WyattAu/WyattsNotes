---
title: Relational Model
tags:
  - Computing
  - University
---

### 2.1 Relations, Tuples, Attributes

A **relation** $R$ over attributes $A_1, \ldots, A_n$ is a set of tuples $(a_1, \ldots, a_n)$ where
Each $a_i$ is drawn from the domain of $A_i$. A relation is a subset of
$D_1 \times D_2 \times
\cdots \times D_n$.

**Properties of relations:**

- Each relation has a unique name.
- Each attribute has a unique name within a relation.
- Tuples are unordered (a relation is a set).
- All tuples are distinct (no duplicates in a mathematical relation, though SQL tables allow them).
- Attributes are unordered.

### 2.2 Keys

Let $R$ be a relation schema.

- **Superkey:** A set of attributes $K \subseteq R$ such that no two distinct tuples agree on all
  attributes in $K$.
- **Candidate key:** A minimal superkey (no proper subset is also a superkey).
- **Primary key:** One of the candidate keys, chosen by the designer.
- **Foreign key:** An attribute (or set) $FK$ in relation $R_1$ that references the primary key $PK$
  of relation $R_2$. Enforces referential integrity: every value of $FK$ must appear as a value of
  $PK$ in $R_2$Or be `NULL`.

**Example.** `Student(ID, Name, Email)`. `ID` is a candidate key (unique). If `Email` is also
unique, It is another candidate key. One is chosen as the primary key.

**Theorem 2.1.** Every relation has at least one candidate key (possibly the entire set of
attributes).

### 2.3 Relational Algebra

Relational algebra provides a formal query language based on operations on relations.

**Selection** $\sigma_{\theta}(R)$: Return tuples from $R$ satisfying condition $\theta$.

$$\sigma_{\mathrm{dept} = \mathrm{'CS'}(\mathrm{Student})}$$

**Projection** $\pi_{A_1, \ldots, A_k}(R)$: Return a relation containing only attributes
$A_1, \ldots, A_k$.

$$\pi_{\mathrm{name}, \mathrm{gpa}(\mathrm{Student})}$$

**Union** $R \cup S$: All tuples in $R$ or $S$ (both must be union-compatible: same arity and
Attribute domains).

**Difference** $R - S$: Tuples in $R$ but not in $S$.

**Cartesian product** $R \times S$: All pairs $(r, s)$ where $r \in R$ and $s \in S$.

**Rename** $\rho_{x}(R)$: Rename relation $R$ to $x$.

**Natural join** $R \bowtie S$: Combine tuples from $R$ and $S$ that agree on all common attributes.

$$R \bowtie S = \pi_{R \cup S}(\sigma_{R.\mathrm{common} = S.\mathrm{common}(R \times S))}$$

**Theta join** $R \bowtie_{\theta} S$: $\sigma_{\theta}(R \times S)$.

**Equi-join** $R \bowtie_{R.A = S.B} S$: A theta join where $\theta$ is an equality on specific
Attributes. Keeps both join columns.

**Left outer join** $R \bowtie_{\mathrm{left} S}$: All tuples from $R$Matched with $S$ where
possible; `NULL`-padded otherwise.

**Right outer join** $R \bowtie_{\mathrm{right} S}$: All tuples from $S$Matched with $R$.

**Full outer join** $R \bowtie_{\mathrm{full} S}$: All tuples from both $R$ and $S$.

**Division** $R \div S$: Tuples $t$ in $\pi_{R-S}(R)$ such that for every tuple $s \in S$,
$(t, s)
\in R$.

$$R \div S = \pi_{R-S}(R) - \pi_{R-S}\Bigl(\bigl(\pi_{R-S}(R) \times S\bigr) - R\Bigr)$$

**Example.** Find students who have taken **all** courses:

$$\pi_{\mathrm{sid}, \mathrm{cid}(\mathrm{Takes}) \div \pi_{\mathrm{cid}(\mathrm{Course})}}$$

<details>
<summary>Worked Example 2.1: Complex Relational Algebra Query</summary>

**Query:** Find the names of students who have enrolled in every course offered by the CS
department.

**Schema:** `Student(sid, name, dept)``Course(cid, title, dept)``Takes(sid, cid, semester)`.

**Step 1.** Get CS course IDs:

$$C_{\mathrm{CS} = \pi_{\mathrm{cid}\bigl(\sigma_{\mathrm{dept} = \mathrm{'CS'}(\mathrm{Course})\bigr)}}}$$

**Step 2.** Get student-course pairs from enrolments:

$$T = \pi_{\mathrm{sid}, \mathrm{cid}(\mathrm{Takes})}$$

**Step 3.** Students who have taken all CS courses (division):

$$S_{\mathrm{all} = T \div C_{\mathrm{CS}}}$$

**Step 4.** Get names:

$$\pi_{\mathrm{name}(S_{\mathrm{all} \bowtie \mathrm{Student})}}$$

**Combined:**

$$\pi_{\mathrm{name}\Bigl(\bigl(\pi_{\mathrm{sid}, \mathrm{cid}(\mathrm{Takes}) \div \pi_{\mathrm{cid}(\sigma_{\mathrm{dept}=\mathrm{'CS'}(\mathrm{Course}))\bigr) \bowtie \mathrm{Student}\Bigr)}}}}$$

</details>

<details>
<summary>Worked Example 2.2: Relational Algebra with Outer Joins</summary>

**Query:** Find all students and the number of CS courses they have taken, including students who
have Taken no CS courses (count should be 0).

**Step 1.** Filter enrolments to CS courses:

$$E_{\mathrm{CS} = \pi_{\mathrm{sid}, \mathrm{cid}\bigl(\mathrm{Takes} \bowtie \sigma_{\mathrm{dept}=\mathrm{'CS'}(\mathrm{Course})\bigr)}}}$$

**Step 2.** Left outer join with Student to include those with no CS courses:

$$\mathrm{Result} = \mathrm{Student} \bowtie_{\mathrm{left} E_{\mathrm{CS}}}$$

Note: aggregation over outer join results handles `NULL` values (they are excluded from `COUNT`).

In SQL, this translates directly to:

```sql
SELECT S.sid, S.name, COUNT(E.cid) AS num_cs_courses
FROM Student S
LEFT JOIN Takes T ON S.sid = T.sid
LEFT JOIN Course C ON T.cid = C.cid AND C.dept = 'CS'
GROUP BY S.sid, S.name;
```

</details>

### 2.4 Relational Calculus

**Tuple relational calculus.** A query has the form $\\{t \mid P(t)\\}$ where $t$ is a tuple
variable And $P$ is a well-formed formula. The formula is built from:

- Atoms: $t \in R$ (tuple $t$ is in relation $R$), $t[A] \mathbin{\mathrm{op} s[A]}$ (comparison),
  $t[A] \mathbin{\mathrm{op} c}$ (comparison with constant), where
  $\mathrm{op} \in \\{=, \neq, \lt, \gt, \le, \ge\\}$.
- Logical connectives: $\land$ (and), $\lor$ (or), $\lnot$ (not).
- Quantifiers: $\exists t$ (there exists), $\forall t$ (for all).

$$\{t \mid \exists s \in \mathrm{Takes}(t[\mathrm{name}] = s[\mathrm{name}] \land s[\mathrm{grade}] = \mathrm{'A'})\}$$

**Domain relational calculus.** Variables range over individual attribute domains (not entire
tuples). A query has the form $\\{\langle x_1, \ldots, x_k \rangle \mid P(x_1, \ldots, x_k)\\}$.

$$\{ \langle n \rangle \mid \exists s, g \;(\mathrm{Takes}(s, \mathrm{'CS101'}, g) \land \mathrm{Student}(s, n, \ldots) \land g = \mathrm{'A'})\}$$

**Safety.** A calculus expression is **safe** if it yields a finite relation. The expression
$\\{t \mid \lnot(t \in R)\\}$ is unsafe (it includes every tuple not in $R$An infinite set). We
Restrict variables to domains of the relations appearing in the query.

**Theorem 2.2 (Codd).** Relational algebra and relational calculus (both tuple and domain) are
Equally expressive: every query expressible in one is expressible in the other.

<details>
<summary>Worked Example 2.3: Tuple Relational Calculus</summary>

**Query:** Find students who have taken **no** CS course.

Using tuple relational calculus:

$$\{t \mid t \in \mathrm{Student} \land \lnot \exists s \in \mathrm{Takes}\bigl(s[\mathrm{sid}] = t[\mathrm{sid}] \land \exists c \in \mathrm{Course}(c[\mathrm{cid}] = s[\mathrm{cid}] \land c[\mathrm{dept}] = \mathrm{'CS'}\bigr)\}$$

**Translation to relational algebra:**

$$\pi_{\mathrm{name}(\mathrm{Student}) - \pi_{\mathrm{name}(\mathrm{Student} \bowtie \mathrm{Takes} \bowtie \sigma_{\mathrm{dept}=\mathrm{'CS'}(\mathrm{Course}))}}}$$

</details>

### 2.5 Equivalence Rules for Relational Algebra

The following rules allow the optimiser to transform queries without changing their meaning. Each
rule States that two expressions produce the same relation for any input relations.

**Rule 1 (Cascade of selections).**
$\sigma_{\theta_1 \land \theta_2}(R) \equiv \sigma_{\theta_1}(\sigma_{\theta_2}(R))$.

_Proof._ A tuple satisfies $\theta_1 \land \theta_2$ if and only if it satisfies both $\theta_1$ and
$\theta_2$. Applying $\sigma_{\theta_2}$ first removes tuples failing $\theta_2$; then
$\sigma_{\theta_1}$ removes tuples failing $\theta_1$ among the remainder. The result is exactly the
Tuples satisfying both conditions. $\blacksquare$

**Rule 2 (Commutativity of selections).**
$\sigma_{\theta_1}(\sigma_{\theta_2}(R)) \equiv \sigma_{\theta_2}(\sigma_{\theta_1}(R))$.

_Proof._ Immediate from the commutativity of logical conjunction
($\theta_1 \land \theta_2 \equiv
\theta_2 \land \theta_1$). $\blacksquare$

**Rule 3 (Selection pushdown through cross product).** If $\theta$ involves only attributes of $R$
Then $\sigma_{\theta}(R \times S) \equiv \sigma_{\theta}(R) \times S$.

_Proof._ For each pair $(r, s)$ with $r \in R$ and $s \in S$The condition $\theta$ depends only on
$r$. Filtering $(r, s)$ by $\theta$ on $R \times S$ is equivalent to first filtering $R$ by $\theta$
And then forming the cross product, since $s$ does not affect the result of $\theta$. $\blacksquare$

**Rule 4 (Selection pushdown through join).** If $\theta$ involves only attributes of $R$Then
$\sigma_{\theta}(R \bowtie S) \equiv \sigma_{\theta}(R) \bowtie S$.

_Proof._ The join $R \bowtie S$ combines matching pairs from $R$ and $S$. Applying $\sigma_{\theta}$
After the join filters these pairs by $\theta$ on $R$'s attributes. Filtering $R$ first removes
Non-matching $R$-tuples before the join, yielding the same final set of pairs. $\blacksquare$

**Rule 5 (Commutativity of joins).** $R \bowtie S \equiv S \bowtie R$.

_Proof._ The natural join combines tuples agreeing on common attributes. This relation is symmetric
In $R$ and $S$. $\blacksquare$

**Rule 6 (Associativity of joins).** $(R \bowtie S) \bowtie T \equiv R \bowtie (S \bowtie T)$.

_Proof._ Both expressions produce tuples from $R \times S \times T$ that agree on all attributes
Shared by any pair of the three relations. $\blacksquare$

**Rule 7 (Projection pushdown).** If $L_1 \subseteq L_2$ and $L_2$ includes all attributes used in
Join conditions, then $\pi_{L_1}(R \bowtie S) \equiv \pi_{L_1}(\pi_{L_2}(R) \bowtie \pi_{L_2}(S))$.

_Proof._ Projecting after the join retains only attributes in $L_1$. Since $L_2$ includes all
Attributes needed for the join, performing the join on projected versions of $R$ and $S$ yields the
Same join result, from which $L_1$ is then projected. $\blacksquare$

These rules form the foundation of heuristic query optimisation (see Section 7).

