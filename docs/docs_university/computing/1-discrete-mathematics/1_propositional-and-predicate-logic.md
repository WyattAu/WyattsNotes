---
title: Propositional and Predicate Logic
tags:
  - Computing
  - University
---

### 1.1 Propositional Logic

A **proposition** is a statement that is either true or false. Propositional logic deals with
Propositions and their combinations using logical connectives.

**Basic connectives:**

| Symbol     | Name          | Meaning        |
| ---------- | ------------- | -------------- |
| $\neg$     | Negation      | NOT            |
| $\land$    | Conjunction   | AND            |
| $\lor$     | Disjunction   | OR             |
| $\implies$ | Implication   | IF...THEN      |
| $\iff$     | Biconditional | IF AND ONLY IF |

**Truth tables.** The implication $p \implies q$ is false only when $p$ is true and $q$ is false.

**Logical equivalence.** Two propositions are **logically equivalent** ($\equiv$) if they have the
Same truth value for all assignments.

**Important equivalences:**

- $\neg(p \land q) \equiv \neg p \lor \neg q$ (De Morgan)
- $\neg(p \lor q) \equiv \neg p \land \neg q$ (De Morgan)
- $p \implies q \equiv \neg p \lor q$
- $p \iff q \equiv (p \implies q) \land (q \implies p)$
- $\neg(p \implies q) \equiv p \land \neg q$

### 1.2 Predicate Logic

**Predicates** extend propositional logic with variables and quantifiers.

- **Universal quantifier:** $\forall x\, P(x)$ -- "$P(x)$ holds for all $x$."
- **Existential quantifier:** $\exists x\, P(x)$ -- "there exists $x$ such that $P(x)$ holds."

**Negation of quantifiers:**

$$\neg \forall x\, P(x) \equiv \exists x\, \neg P(x)$$

$$\neg \exists x\, P(x) \equiv \forall x\, \neg P(x)$$

**Nested quantifiers** must be read carefully. The order matters:

$$\forall x\, \exists y\, P(x, y) \not\equiv \exists y\, \forall x\, P(x, y)$$

The first says "for every $x$ there is a (possibly different) $y$." The second says "there exists a Single $y$ that works for all $x$."

### 1.3 Validity and Satisfiability

A formula is **valid** (a tautology) if it is true under all interpretations. A formula is
**satisfiable** if it is true under at least one interpretation.

**Theorem 1.1.** A formula is valid if and only if its negation is unsatisfiable.

### 1.4 Truth Table Construction Methods

For a propositional formula with $n$ distinct variables, the truth table has $2^n$ rows (one per
Assignment). Two systematic methods ensure no assignment is missed.

**Method 1: Binary counting.** Treat the first variable as the most significant bit. Enumerate all
Binary $n$-tuples from $(0, \ldots, 0)$ to $(1, \ldots, 1)$. The first variable changes most slowly
(only every $2^{n-1}$ rows), while the last variable alternates every row.

**Method 2: Recursive splitting.** For $n$ variables, the table splits into two blocks of $2^{n-1}$
Rows: the top block has the first variable as $T$The bottom as $F$. Recurse on the remaining $n - 1$
variables within each block.

**Worked Example.** Construct the truth table for $(p \implies q) \land (q \implies r)$.

<details>
<summary>Solution</summary>

With 3 variables we have $2^3 = 8$ rows.

| $p$ | $q$ | $r$ | $p \implies q$ | $q \implies r$ | $\phi$ |
| --- | --- | --- | -------------- | -------------- | ------ |
| T   | T   | T   | T              | T              | T      |
| T   | T   | F   | T              | F              | F      |
| T   | F   | T   | F              | T              | F      |
| T   | F   | F   | F              | T              | F      |
| F   | T   | T   | T              | T              | T      |
| F   | T   | F   | T              | F              | F      |
| F   | F   | T   | T              | T              | T      |
| F   | F   | F   | T              | T              | T      |

The formula is satisfiable (e.g., $p = F, q = F, r = T$) but not a tautology (e.g.,
$p = T, q = T, r = F$).

</details>

**Worked Example.** Verify that hypothetical syllogism
$(p \implies q) \land (q \implies r) \implies (p \implies r)$ is a tautology.

<details>
<summary>Solution</summary>

Extending the table above:

| $p$ | $q$ | $r$ | $\phi$ | $p \implies r$ | $\phi \implies (p \implies r)$ |
| --- | --- | --- | ------ | -------------- | ------------------------------ |
| T   | T   | T   | T      | T              | T                              |
| T   | T   | F   | F      | F              | T                              |
| T   | F   | T   | F      | T              | T                              |
| T   | F   | F   | F      | F              | T                              |
| F   | T   | T   | T      | T              | T                              |
| F   | T   | F   | F      | T              | T                              |
| F   | F   | T   | T      | T              | T                              |
| F   | F   | F   | T      | T              | T                              |

The final column is all $T$Confirming the tautology.

</details>

### 1.5 Natural Deduction

**Natural deduction** is a .../1-number-and-algebra/3*proof-and-logic system that mirrors ordinary
mathematical reasoning. Each connective Has **introduction rules** (how to \_derive* a formula with
that connective) and **elimination rules** (how to _use_ a formula with that connective).

**Rules of inference:**

| Rule          | Premises                               | Conclusion  |
| ------------- | -------------------------------------- | ----------- |
| $\land$-I     | $A$, $B$                               | $A \land B$ |
| $\land$-E$_1$ | $A \land B$                            | $A$         |
| $\land$-E$_2$ | $A \land B$                            | $B$         |
| $\lor$-I$_1$  | $A$                                    | $A \lor B$  |
| $\lor$-I$_2$  | $B$                                    | $A \lor B$  |
| $\lor$-E      | $A \lor B$, $A \vdash C$, $B \vdash C$ | $C$         |
| $\to$-I       | $[A] \vdash B$                         | $A \to B$   |
| $\to$-E       | $A$, $A \to B$                         | $B$         |
| $\neg$-I      | $[A] \vdash \bot$                      | $\neg A$    |
| $\neg$-E      | $A$, $\neg A$                          | $\bot$      |
| DNE           | $\neg\neg A$                           | $A$         |
| RAA           | $[\neg A] \vdash \bot$                 | $A$         |

Square brackets $[A]$ denote an assumption that is **discharged** after the rule is applied.

**Worked Example.** Prove: $p \to q \vdash \neg q \to \neg p$ (contraposition).

<details>
<summary>Solution</summary>

1. $p \to q$ — premise
2. $[\neg q]$ — assumption (for $\to$-I)
3. $[p]$ — assumption (for $\neg$-I)
4. $q$ — $\to$-E on 1, 3
5. $\bot$ — $\neg$-E on 4, 2
6. $\neg p$ — $\neg$-I on 3--5, discharging $[p]$
7. $\neg q \to \neg p$ — $\to$-I on 2--6, discharging $[\neg q]$

$\blacksquare$

</details>

**Worked Example.** Prove: $p \lor q, \neg p \vdash q$ (disjunctive syllogism).

<details>
<summary>Solution</summary>

1. $p \lor q$ — premise
2. $\neg p$ — premise
3. $[p]$ — assumption (left case for $\lor$-E)
4. $\bot$ — $\neg$-E on 3, 2
5. $q$ — ex falso on 4
6. $[q]$ — assumption (right case for $\lor$-E)
7. $q$ — reiterate 6
8. $q$ — $\lor$-E on 1, 3--5, 6--7

$\blacksquare$

</details>

**Worked Example.** Prove: $p \land (q \lor r) \vdash (p \land q) \lor (p \land r)$ (distribution).

<details>
<summary>Solution</summary>

1. $p \land (q \lor r)$ — premise
2. $p$ — $\land$-E$_1$ on 1
3. $q \lor r$ — $\land$-E$_2$ on 1
4. $[q]$ — assumption (left case for $\lor$-E on 3)
5. $p \land q$ — $\land$-I on 2, 4
6. $(p \land q) \lor (p \land r)$ — $\lor$-I$_1$ on 5
7. $[r]$ — assumption (right case for $\lor$-E on 3)
8. $p \land r$ — $\land$-I on 2, 7
9. $(p \land q) \lor (p \land r)$ — $\lor$-I$_2$ on 8
10. $(p \land q) \lor (p \land r)$ — $\lor$-E on 3, 4--6, 7--9

$\blacksquare$

</details>

:::caution Common Pitfall In natural deduction, always track which assumptions are discharged. A
common mistake is to use a Discharged assumption in a later step. Each discharged assumption is only
valid within the scope Indicated by the rule that discharges it.
:::

### 1.6 CNF and DNF

A **literal** is a propositional variable or its negation. A **clause** is a disjunction of
literals. A **term** (or **cube**) is a conjunction of literals.

- **Disjunctive Normal Form (DNF):** a disjunction of terms, e.g.
  $(p \land \neg q) \lor (\neg p \land r)$.
- **Conjunctive Normal Form (CNF):** a conjunction of clauses, e.g.
  $(p \lor \neg q) \land (\neg p \lor r)$.

**Theorem 1.2.** Every propositional formula is equivalent to a formula in CNF and to a formula in
DNF.

**Conversion to CNF:**

1. Eliminate $\iff$ and $\implies$: $A \implies B \equiv \neg A \lor B$And
   $A \iff B \equiv (\neg A \lor B) \land (A \lor \neg B)$.
2. Push $\neg$ inward using De Morgan's laws and double negation ($\neg\neg A \equiv A$) until every
   $\neg$ applies to a single variable.
3. Distribute $\lor$ over $\land$: $A \lor (B \land C) \equiv (A \lor B) \land (A \lor C)$.

**Conversion to DNF:** Same steps 1--2; in step 3 distribute $\land$ over $\lor$ instead.

**Worked Example.** Convert $(p \land q) \lor (\neg p \land r)$ to CNF.

<details>
<summary>Solution</summary>

Step 1: No $\implies$ or $\iff$ to eliminate.

Step 2: No $\neg$ to push inward.

Step 3: Distribute $\lor$ over $\land$:

$(p \land q) \lor (\neg p \land r) \equiv (p \lor \neg p) \land (p \lor r) \land (q \lor \neg p) \land (q \lor r)$.

Since $p \lor \neg p$ is a tautology we may simplify to
$(p \lor r) \land (\neg p \lor q) \land (q \lor r)$.

</details>

**Worked Example.** Convert $\neg(p \implies q) \lor r$ to CNF.

<details>
<summary>Solution</summary>

Step 1: Eliminate $\implies$: $\neg(\neg p \lor q) \lor r$.

Step 2: Push $\neg$ inward: $(p \land \neg q) \lor r$.

Step 3: Distribute $\lor$ over $\land$: $(p \lor r) \land (\neg q \lor r)$.

This is in CNF.

</details>

:::caution Common Pitfall Distributing $\lor$ over $\land$ can cause exponential blowup. A DNF
formula with $n$ terms can Produce up to $2^n$ clauses when converted to CNF. This exponential
growth underlies the hardness Of many satisfiability problems.
:::

### 1.7 Resolution

The **resolution rule** is a single inference rule that is refutation-complete for propositional
Logic.

**Resolution rule.** From clauses $(A \lor x)$ and $(B \lor \neg x)$Derive the **resolvent**
$(A \lor B)$Where $A$ and $B$ are (possibly empty) sets of literals and $x$ is a propositional
Variable.

**Resolution refutation.** To show that clauses $\{C_1, \ldots, C_k\}$ entail clause $C$:

1. Add $\neg C$ to the clause set.
2. Repeatedly apply the resolution rule to derive new clauses.
3. If the empty clause $\bot$ is derived, the entailment holds.

**Theorem 1.3 (Refutation completeness).** If a set of clauses is unsatisfiable, the empty clause
Can be derived by resolution.

**Worked Example.** Show that $\{p \lor q,\; \neg p \lor r,\; \neg q \lor \neg r\}$ entails
$\neg r$.

<details>
<summary>Solution</summary>

Add the negation of the conclusion: clause (4) $r$.

Clauses: (1) $p \lor q$; (2) $\neg p \lor r$; (3) $\neg q \lor \neg r$; (4) $r$.

Resolve (2) and (4) on $r$: (5) $\neg p$. Resolve (1) and (5) on $p$: (6) $q$. Resolve (3) and (6)
on $q$: (7) $\neg r$. Resolve (7) and (4) on $r$: (8) $\bot$.

Since $\bot$ is derived, the entailment holds. $\blacksquare$

</details>

### 1.8 The SAT Problem

The **Boolean satisfiability problem (SAT)** asks: given a propositional formula $\phi$Is there a
Truth assignment that makes $\phi$ true?

**Definition.** An instance of SAT is a propositional formula. The answer is YES if $\phi$ is
Satisfiable, NO otherwise.

**k-SAT.** A restricted version where the formula is in CNF and every clause has exactly $k$
Literals.

- **1-SAT:** solvable in linear time (each clause is a single literal).
- **2-SAT:** solvable in $O(n + m)$ time using the implication graph and strongly connected
  components, where $n$ is the number of variables and $m$ the number of clauses.
- **3-SAT:** NP-complete (Cook--Levin theorem, 1971). This was the first problem proven NP-complete.

**Theorem 1.4 (Cook--Levin).** SAT is NP-complete. Consequently, 3-SAT is also NP-complete.

SAT solvers (DPLL, CDCL) are widely deployed in hardware verification, software model checking, and
AI planning. Modern solvers routinely handle instances with millions of variables.

:::caution Common Pitfall Do not confuse satisfiability with validity. A formula is _satisfiable_ if
it is true under _some_ Assignment; it is _valid_ (a tautology) if true under _all_ assignments.
Checking validity is Co-NP-complete, not NP-complete.



