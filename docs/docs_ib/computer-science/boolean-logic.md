---
title: Boolean Logic
date: 2026-04-09T00:00:00.000Z
tags:
  - IB
  - CS
categories:
  - IB
  - CS
slug: boolean-logic
---

## Boolean Algebra Fundamentals

Boolean algebra is a branch of mathematics that operates on binary values: 1 (true) and 0 (false).
It provides the formal foundation for digital circuit design. Every Boolean expression evaluates to
exactly one of these two values, and every Boolean function can be expressed, simplified, and
implemented using a finite set of operators.

The three fundamental operators are AND, OR, and NOT. From these three, all other Boolean operators
can be derived. NAND and NOR are called universal gates because either one alone is sufficient to
construct any Boolean function. XOR and XNOR are useful for parity and comparison operations.

### Basic Operators

**AND (conjunction):** The output is 1 only when all inputs are 1.

| `A` | `B` | `A` AND `B` |
| --- | --- | ----------- |
| 0   | 0   | 0           |
| 0   | 1   | 0           |
| 1   | 0   | 0           |
| 1   | 1   | 1           |

Notation: $A \cdot B$, $AB$, $A \wedge B$

**OR (disjunction):** The output is 1 when at least one input is 1.

| `A` | `B` | `A` OR `B` |
| --- | --- | ---------- |
| 0   | 0   | 0          |
| 0   | 1   | 1          |
| 1   | 0   | 1          |
| 1   | 1   | 1          |

Notation: $A + B$, $A \vee B$

**NOT (negation):** The output is the complement of the input.

| `A` | NOT `A` |
| --- | ------- |
| 0   | 1       |
| 1   | 0       |

Notation: $\overline{A}$, $A'$, $\lnot A$

**NAND:** The negation of AND. Output is 0 only when all inputs are 1.

| `A` | `B` | `A` NAND `B` |
| --- | --- | ------------ |
| 0   | 0   | 1            |
| 0   | 1   | 1            |
| 1   | 0   | 1            |
| 1   | 1   | 0            |

Notation: $\overline{A \cdot B}$, $(A \cdot B)'$

**NOR:** The negation of OR. Output is 1 only when all inputs are 0.

| `A` | `B` | `A` NOR `B` |
| --- | --- | ----------- |
| 0   | 0   | 1           |
| 0   | 1   | 0           |
| 1   | 0   | 0           |
| 1   | 1   | 0           |

Notation: $\overline{A + B}$, $(A + B)'$

**XOR (exclusive OR):** The output is 1 when inputs are different.

| `A` | `B` | `A` XOR `B` |
| --- | --- | ----------- |
| 0   | 0   | 0           |
| 0   | 1   | 1           |
| 1   | 0   | 1           |
| 1   | 1   | 0           |

Notation: $A \oplus B$, $A \veebar B$

**XNOR (exclusive NOR):** The negation of XOR. Output is 1 when inputs are the same.

| `A` | `B` | `A` XNOR `B` |
| --- | --- | ------------ |
| 0   | 0   | 1            |
| 0   | 1   | 0            |
| 1   | 0   | 0            |
| 1   | 1   | 1            |

Notation: $\overline{A \oplus B}$, $A \odot B$

### Derived Expressions for XOR and XNOR

XOR and XNOR can be expressed entirely in terms of AND, OR, and NOT:

$$A \oplus B = A \cdot \overline{B} + \overline{A} \cdot B$$

$$A \odot B = A \cdot B + \overline{A} \cdot \overline{B}$$

These identities are essential when simplifying expressions that contain XOR/XNOR into standard
forms suitable for implementation with basic gates or Karnaugh maps.

## Truth Tables for Multiple Variables

### Three-Variable Truth Tables

A three-variable expression has $2^3 = 8$ rows. The convention is to list combinations in binary
counting order. For variables `A`, `B`, `C`:

| `A` | `B` | `C` | `A` AND `B` AND `C` | `A` OR `B` OR `C` |
| --- | --- | --- | ------------------- | ----------------- |
| 0   | 0   | 0   | 0                   | 0                 |
| 0   | 0   | 1   | 0                   | 1                 |
| 0   | 1   | 0   | 0                   | 1                 |
| 0   | 1   | 1   | 0                   | 1                 |
| 1   | 0   | 0   | 0                   | 1                 |
| 1   | 0   | 1   | 0                   | 1                 |
| 1   | 1   | 0   | 0                   | 1                 |
| 1   | 1   | 1   | 1                   | 1                 |

### Four-Variable Truth Tables

A four-variable expression has $2^4 = 16$ rows. The standard ordering assigns the leftmost variable
as the most significant bit. For variables `A`, `B`, `C`, `D`:

| `A` | `B` | `C` | `D` | `A` AND `B` AND `C` AND `D` | `A` OR `B` OR `C` OR `D` |
| --- | --- | --- | --- | --------------------------- | ------------------------ |
| 0   | 0   | 0   | 0   | 0                           | 0                        |
| 0   | 0   | 0   | 1   | 0                           | 1                        |
| 0   | 0   | 1   | 0   | 0                           | 1                        |
| 0   | 0   | 1   | 1   | 0                           | 1                        |
| 0   | 1   | 0   | 0   | 0                           | 1                        |
| 0   | 1   | 0   | 1   | 0                           | 1                        |
| 0   | 1   | 1   | 0   | 0                           | 1                        |
| 0   | 1   | 1   | 1   | 0                           | 1                        |
| 1   | 0   | 0   | 0   | 0                           | 1                        |
| 1   | 0   | 0   | 1   | 0                           | 1                        |
| 1   | 0   | 1   | 0   | 0                           | 1                        |
| 1   | 0   | 1   | 1   | 0                           | 1                        |
| 1   | 1   | 0   | 0   | 0                           | 1                        |
| 1   | 1   | 0   | 1   | 0                           | 1                        |
| 1   | 1   | 1   | 0   | 0                           | 1                        |
| 1   | 1   | 1   | 1   | 1                           | 1                        |

### Constructing Truth Tables for Arbitrary Expressions

Given an expression, construct the truth table by evaluating each sub-expression column by column.

**Worked example:** Construct the truth table for $F = A \cdot \overline{B} + \overline{A} \cdot C$

| `A` | `B` | `C` | $\overline{B}$ | $\overline{A}$ | $A \cdot \overline{B}$ | $\overline{A} \cdot C$ | $F$ |
| --- | --- | --- | -------------- | -------------- | ---------------------- | ---------------------- | --- |
| 0   | 0   | 0   | 1              | 1              | 0                      | 0                      | 0   |
| 0   | 0   | 1   | 1              | 1              | 0                      | 1                      | 1   |
| 0   | 1   | 0   | 0              | 1              | 0                      | 0                      | 0   |
| 0   | 1   | 1   | 0              | 1              | 0                      | 1                      | 1   |
| 1   | 0   | 0   | 1              | 0              | 1                      | 0                      | 1   |
| 1   | 0   | 1   | 1              | 0              | 1                      | 0                      | 1   |
| 1   | 1   | 0   | 0              | 0              | 0                      | 0                      | 0   |
| 1   | 1   | 1   | 0              | 0              | 0                      | 0                      | 0   |

The minterms (rows where $F = 1$) are: $\overline{A}\overline{B}C$, $\overline{A}BC$,
$A\overline{B}\overline{C}$, $A\overline{B}C$.

## Boolean Identities and Laws

The following identities are the tools for algebraic simplification. Each identity can be verified
by constructing truth tables for both sides and confirming they are identical.

### Fundamental Identities

| Identity          | AND Form                                    | OR Form                                   |
| ----------------- | ------------------------------------------- | ----------------------------------------- |
| Identity          | $A \cdot 1 = A$                             | $A + 0 = A$                               |
| Null (Domination) | $A \cdot 0 = 0$                             | $A + 1 = 1$                               |
| Complement        | $A \cdot \overline{A} = 0$                  | $A + \overline{A} = 1$                    |
| Idempotent        | $A \cdot A = A$                             | $A + A = A$                               |
| Commutative       | $A \cdot B = B \cdot A$                     | $A + B = B + A$                           |
| Associative       | $(A \cdot B) \cdot C = A \cdot (B \cdot C)$ | $(A + B) + C = A + (B + C)$               |
| Distributive      | $A \cdot (B + C) = A \cdot B + A \cdot C$   | $A + (B \cdot C) = (A + B) \cdot (A + C)$ |
| Absorption        | $A \cdot (A + B) = A$                       | $A + (A \cdot B) = A$                     |
| Double Negation   | $\overline{\overline{A}} = A$               | $\overline{\overline{A}} = A$             |

### De Morgan's Laws

De Morgan's Laws are the most frequently applied identities in Boolean simplification. They allow
the distribution of a NOT over an AND or OR:

$$\overline{A \cdot B} = \overline{A} + \overline{B}$$

$$\overline{A + B} = \overline{A} \cdot \overline{B}$$

For three variables, De Morgan's Laws extend as:

$$\overline{A \cdot B \cdot C} = \overline{A} + \overline{B} + \overline{C}$$

$$\overline{A + B + C} = \overline{A} \cdot \overline{B} \cdot \overline{C}$$

The general rule: invert each variable, and swap AND with OR (or vice versa).

### Consensus Theorem

$$A \cdot B + \overline{A} \cdot C + B \cdot C = A \cdot B + \overline{A} \cdot C$$

The term $B \cdot C$ is redundant because it is the "consensus" of the other two terms. The variable
$B$ appears in the first term and $\overline{B}$ does not; $C$ appears in the second term and
$\overline{C}$ does not. The consensus term is $B \cdot C$.

The dual form is:

$$(A + B) \cdot (\overline{A} + C) \cdot (B + C) = (A + B) \cdot (\overline{A} + C)$$

## Simplifying Boolean Expressions

Simplification reduces the number of gates and inputs required, which reduces cost, propagation
delay, and power consumption. The approach is systematic: apply identities one at a time, justifying
each step.

### Worked Example 1

Simplify: $F = A \cdot B + A \cdot \overline{B} + \overline{A} \cdot B$

**Step 1:** Factor $A$ from the first two terms (distributive law, reverse):

$$F = A \cdot (B + \overline{B}) + \overline{A} \cdot B$$

**Step 2:** Apply complement law: $B + \overline{B} = 1$

$$F = A \cdot 1 + \overline{A} \cdot B$$

**Step 3:** Apply identity law: $A \cdot 1 = A$

$$F = A + \overline{A} \cdot B$$

**Step 4:** Apply absorption: $A + \overline{A} \cdot B = A + B$

$$F = A + B$$

### Worked Example 2

Simplify:
$F = \overline{A} \cdot \overline{B} \cdot \overline{C} + \overline{A} \cdot B \cdot C + A \cdot \overline{C}$

**Step 1:** Group terms containing $\overline{A}$:

$$F = \overline{A} \cdot (\overline{B} \cdot \overline{C} + B \cdot C) + A \cdot \overline{C}$$

**Step 2:** Recognize that $\overline{B} \cdot \overline{C} + B \cdot C = B \odot C$ (XNOR):

$$F = \overline{A} \cdot (B \odot C) + A \cdot \overline{C}$$

This is a valid simplification but not in sum-of-products form. For circuit implementation, we can
expand:

$$F = \overline{A} \cdot \overline{B} \cdot \overline{C} + \overline{A} \cdot B \cdot C + A \cdot \overline{C}$$

Using absorption, the term $A \cdot \overline{C}$ absorbs both
$A \cdot \overline{B} \cdot \overline{C}$ and $A \cdot B \cdot \overline{C}$. We already have
$\overline{A} \cdot \overline{B} \cdot \overline{C}$, so $A \cdot \overline{B} \cdot \overline{C}$
is generated when we expand $A \cdot \overline{C}$:

$$A \cdot \overline{C} = A \cdot \overline{B} \cdot \overline{C} + A \cdot B \cdot \overline{C}$$

So the full SOP is:

$$F = \overline{A} \cdot \overline{B} \cdot \overline{C} + \overline{A} \cdot B \cdot C + A \cdot \overline{B} \cdot \overline{C} + A \cdot B \cdot \overline{C}$$

This simplifies to $F = \overline{C} + \overline{A} \cdot B \cdot C$, which requires only 4 gate
inputs instead of the original 8.

### Worked Example 3 (Using De Morgan's Laws)

Simplify: $F = \overline{(A + B) \cdot (\overline{A} + \overline{B})}$

**Step 1:** Apply De Morgan's Law to the outer NOT:

$$F = \overline{A + B} + \overline{\overline{A} + \overline{B}}$$

**Step 2:** Apply De Morgan's Law to each term:

$$F = \overline{A} \cdot \overline{B} + A \cdot B$$

This is $A \odot B$ (XNOR). The expression is now in minimal SOP form.

## Logic Gates

### Gate Symbols and Expressions

| Gate | Boolean Expression      | Standard Symbol (ANSI) | IEC Symbol     |
| ---- | ----------------------- | ---------------------- | -------------- |
| AND  | $A \cdot B$             | D-shaped output        | `&`            |
| OR   | $A + B$                 | Curved output          | `>=1`          |
| NOT  | $\overline{A}$          | Triangle with bubble   | `1` (with o)   |
| NAND | $\overline{A \cdot B}$  | AND with bubble        | `&` (with o)   |
| NOR  | $\overline{A + B}$      | OR with bubble         | `>=1` (with o) |
| XOR  | $A \oplus B$            | OR with extra curve    | `=1`           |
| XNOR | $\overline{A \oplus B}$ | XOR with bubble        | `=1` (with o)  |

### NAND as a Universal Gate

NAND alone can implement all other gates:

- NOT: Connect both inputs of NAND to the same signal:
  $\mathrm{NAND}(A, A) = \overline{A \cdot A} = \overline{A}$
- AND: NAND followed by NOT: $\mathrm{NOT}(\mathrm{NAND}(A, B)) = A \cdot B$
- OR: Use De Morgan's: $A + B = \overline{\overline{A} \cdot \overline{B}}$. Feed $\overline{A}$ and
  $\overline{B}$ (each from a NAND-as-NOT) into a NAND gate.

**NAND-NAND implementation of $F = A \cdot B + C \cdot D$:**

Apply De Morgan's in reverse: $F = \overline{\overline{A \cdot B} \cdot \overline{C \cdot D}}$

This requires two NAND gates for $\overline{A \cdot B}$ and $\overline{C \cdot D}$, and a third NAND
gate to combine them. Total: 3 NAND gates.

### NOR as a Universal Gate

NOR alone can implement all other gates:

- NOT: Connect both inputs to the same signal: $\mathrm{NOR}(A, A) = \overline{A + A} = \overline{A}$
- OR: NOR followed by NOT: $\mathrm{NOT}(\mathrm{NOR}(A, B)) = A + B$
- AND: Use De Morgan's: $A \cdot B = \overline{\overline{A} + \overline{B}}$. Feed $\overline{A}$
  and $\overline{B}$ (each from a NOR-as-NOT) into a NOR gate.

## Karnaugh Maps (K-Maps)

Karnaugh maps provide a visual method for minimizing Boolean expressions with up to 4 variables.
They eliminate the need for trial-and-error algebraic manipulation by systematically identifying
groups of adjacent 1s (or 0s).

### The Adjacency Principle

Two minterms are adjacent if they differ in exactly one variable. Adjacent minterms can be combined
by eliminating the variable that changes. In a K-map, adjacency wraps around the edges (the top row
is adjacent to the bottom row; the leftmost column is adjacent to the rightmost column).

### 2-Variable K-Map

A 2-variable K-map has $2^2 = 4$ cells. The columns represent one variable and the rows represent
the other.

**Worked example:** Minimize
$F = \overline{A} \cdot \overline{B} + \overline{A} \cdot B + A \cdot \overline{B}$

|       | `B` = 0 | `B` = 1 |
| ----- | ------- | ------- |
| `A`=0 | 1       | 1       |
| `A`=1 | 1       | 0       |

The cells for $(0,0)$, $(0,1)$, and $(1,0)$ are 1.

Group the two cells in row `A`=0: this spans both columns, so `B` is eliminated. This group
represents $\overline{A}$.

Group the two cells in column `B`=0: this spans both rows, so `A` is eliminated. This group
represents $\overline{B}$.

Result: $F = \overline{A} + \overline{B}$

Verify: The three minterms
$\overline{A}\overline{B} + \overline{A}B + A\overline{B} = \overline{A}(\overline{B} + B) + A\overline{B} = \overline{A} + A\overline{B} = \overline{A} + \overline{B}$
by absorption. Correct.

### 3-Variable K-Map

A 3-variable K-map has $2^3 = 8$ cells. The standard layout uses Gray code ordering (00, 01, 11, 10)
so that adjacent columns differ by exactly one bit. Variables `B` and `C` are the column headers;
`A` is the row header.

**Worked example:** Minimize $F(A, B, C) = \sum(0, 1, 2, 5, 6, 7)$

The minterms are: $m_0 = \overline{A}\overline{B}\overline{C}$, $m_1 = \overline{A}\overline{B}C$,
$m_2 = \overline{A}B\overline{C}$, $m_5 = A\overline{B}C$, $m_6 = AB\overline{C}$, $m_7 = ABC$.

|       | `BC` = 00 | `BC` = 01 | `BC` = 11 | `BC` = 10 |
| ----- | --------- | --------- | --------- | --------- |
| `A`=0 | 1         | 1         | 0         | 1         |
| `A`=1 | 0         | 1         | 1         | 1         |

**Step 1: Identify groups.**

- Group 1: Cells $(0,00)$ and $(0,01)$ -- adjacent horizontally. These are
  $\overline{A}\overline{B}\overline{C}$ and $\overline{A}\overline{B}C$. The variable that changes
  is `C`, so eliminate it: $\overline{A}\overline{B}$.
- Group 2: Cells $(1,01)$, $(1,11)$, $(1,10)$ -- all three in row `A`=1. But $(1,01)$ and $(1,11)$
  are adjacent, and $(1,11)$ and $(1,10)$ are adjacent. Group $(1,11)$ and $(1,10)$: these are $ABC$
  and $AB\overline{C}$, eliminating `C`: $AB$.
- Group 3: Cells $(0,10)$ and $(1,10)$ -- adjacent vertically. These are $\overline{A}B\overline{C}$
  and $AB\overline{C}$, eliminating `A`: $B\overline{C}$.
- Group 4: Cells $(1,01)$ and $(0,01)$ -- adjacent vertically. These are $A\overline{B}C$ and
  $\overline{A}\overline{B}C$, eliminating `A`: $\overline{B}C$.

Now apply the covering rule: every 1 must be covered by at least one group.

Optimal grouping:

- $AB$: covers $m_6, m_7$
- $B\overline{C}$: covers $m_2, m_6$
- $\overline{B}C$: covers $m_1, m_5$
- $\overline{A}\overline{B}$: covers $m_0, m_1$

But $m_0$ is only covered by $\overline{A}\overline{B}$, so that group is essential. $m_2$ is only
covered by $B\overline{C}$, so that is essential. $m_5$ is only covered by $\overline{B}C$, so that
is essential. $m_7$ is only covered by $AB$, so that is essential.

$$F = \overline{A}\overline{B} + B\overline{C} + \overline{B}C + AB$$

### 4-Variable K-Map

A 4-variable K-map has $2^4 = 16$ cells. The row headers (`AB`) and column headers (`CD`) both use
Gray code ordering: 00, 01, 11, 10.

**Worked example:** Minimize $F(A, B, C, D) = \sum(0, 1, 2, 5, 8, 9, 10)$

|         | `CD` = 00 | `CD` = 01 | `CD` = 11 | `CD` = 10 |
| ------- | --------- | --------- | --------- | --------- |
| `AB`=00 | 1         | 1         | 0         | 1         |
| `AB`=01 | 0         | 1         | 0         | 0         |
| `AB`=11 | 0         | 0         | 0         | 0         |
| `AB`=10 | 1         | 1         | 0         | 1         |

**Step 1: Identify groups of 1s.**

- Group 1: The four corners form a valid group because K-maps wrap around both horizontally and
  vertically. Cells $(00,00)$, $(00,10)$, $(10,00)$, $(10,10)$ are the four corners. In terms of
  variables, these are $\overline{A}\overline{B}\overline{C}\overline{D}$,
  $\overline{A}\overline{B}C\overline{D}$, $A\overline{B}\overline{C}\overline{D}$,
  $A\overline{B}C\overline{D}$. Variables `A` and `C` change, so they are eliminated. Result:
  $\overline{B}\overline{D}$.
- Group 2: Cells $(00,00)$ and $(00,01)$ are adjacent. These are
  $\overline{A}\overline{B}\overline{C}\overline{D}$ and $\overline{A}\overline{B}\overline{C}D$.
  Variable `D` changes, so eliminate it: $\overline{A}\overline{B}\overline{C}$.
- Group 3: Cells $(00,01)$ and $(01,01)$ are adjacent vertically. These are
  $\overline{A}\overline{B}\overline{C}D$ and $\overline{A}B\overline{C}D$. Variable `B` changes, so
  eliminate it: $\overline{A}\overline{C}D$.
- Group 4: Cells $(10,00)$ and $(10,01)$ are adjacent. These are
  $A\overline{B}\overline{C}\overline{D}$ and $A\overline{B}\overline{C}D$. Variable `D` changes:
  $A\overline{B}\overline{C}$.

**Step 2: Determine essential prime implicants.**

The four-corner group $\overline{B}\overline{D}$ covers $m_0, m_2, m_8, m_{10}$.

$\overline{A}\overline{C}D$ covers $m_1, m_5$.

Check coverage: $m_0$ covered by $\overline{B}\overline{D}$, $m_1$ covered by
$\overline{A}\overline{C}D$, $m_2$ covered by $\overline{B}\overline{D}$, $m_5$ covered by
$\overline{A}\overline{C}D$, $m_8$ covered by $\overline{B}\overline{D}$, $m_9$ is NOT covered yet,
$m_{10}$ covered by $\overline{B}\overline{D}$.

$m_9 = A\overline{B}\overline{C}D$. We need to cover it. Options:

- $\overline{A}\overline{C}D$ does not cover it (requires $\overline{A}$).
- $\overline{B}\overline{D}$ does not cover it (requires $\overline{D}$).
- $A\overline{B}\overline{C}$ covers $m_8, m_9$.
- $\overline{A}\overline{B}\overline{C}$ covers $m_0, m_1$ but not $m_9$.

So we add $A\overline{B}\overline{C}$.

$$F = \overline{B}\overline{D} + \overline{A}\overline{C}D + A\overline{B}\overline{C}$$

This requires three AND gates and one OR gate, for a total of 4 gates with 9 gate inputs.

### K-Map Grouping Rules

1. Groups must be rectangular (or square) and contain $2^k$ cells (1, 2, 4, 8, or 16).
2. Groups must be as large as possible. A group of 4 is better than two groups of 2.
3. Every 1 in the map must be covered by at least one group.
4. Groups can wrap around the edges (top-bottom, left-right).
5. Overlapping groups are allowed and often necessary.
6. The four corners of a 4-variable map form a valid $2 \times 2$ group.

### Product-of-Sums (POS) via K-Maps

To obtain the POS form, group the 0s instead of the 1s, then apply De Morgan's Law to the result.

**Worked example:** Using the same map as the 4-variable example above, group the 0s.

The 0s are at: $m_3, m_4, m_6, m_7, m_{11}, m_{12}, m_{13}, m_{14}, m_{15}$.

This produces a POS expression. However, since there are more 0s than 1s in this case, the SOP form
is simpler. POS is advantageous when there are fewer 0s than 1s.

## Don't Care Conditions

Don't care conditions arise when certain input combinations can never occur or when the output value
for certain inputs is irrelevant. In K-maps, don't cares are marked with `X` and can be treated as
either 0 or 1, whichever produces a simpler expression.

**Worked example:** A circuit has inputs `A`, `B`, `C` where the input combination
`A = 1, B = 1, C = 1` is impossible. The required outputs for the other 7 combinations are:

| `A` | `B` | `C` | `F` |
| --- | --- | --- | --- |
| 0   | 0   | 0   | 0   |
| 0   | 0   | 1   | 1   |
| 0   | 1   | 0   | 0   |
| 0   | 1   | 1   | 1   |
| 1   | 0   | 0   | 1   |
| 1   | 0   | 1   | 1   |
| 1   | 1   | 0   | 0   |
| 1   | 1   | 1   | X   |

The K-map is:

|       | `BC` = 00 | `BC` = 01 | `BC` = 11 | `BC` = 10 |
| ----- | --------- | --------- | --------- | --------- |
| `A`=0 | 0         | 1         | 1         | 0         |
| `A`=1 | 1         | 1         | X         | 0         |

**Without don't cares**, the optimal SOP is:

- $m_1, m_3$: $\overline{A}C$ (group vertically in columns 01 and 11 of row `A`=0)
- $m_4, m_5$: $A\overline{B}$ (row `A`=1, columns 00 and 01)

$F = \overline{A}C + A\overline{B}$

**With don't cares**, we can set the X to 1 to create a larger group:

- Cells $(0,01)$, $(0,11)$, $(1,01)$, $(1,11)$: if X = 1, this is a $2 \times 2$ group spanning both
  rows and columns 01 and 11. Variables `A` and `B` change, so eliminate them: $C$.
- Cells $(1,00)$ and $(1,01)$: $A\overline{B}$.

But wait -- $(1,00) = 1$ and $(1,01) = 1$. The group $A\overline{B}$ covers these. The $2 \times 2$
group covering columns 01 and 11 gives $C$. Together: $F = C + A\overline{B}$.

Check: $F = C + A\overline{B}$. For $A=0, B=0, C=0$: $F = 0 + 0 = 0$ (correct). For $A=0, B=0, C=1$:
$F = 1 + 0 = 1$ (correct). For $A=1, B=1, C=0$: $F = 0 + 0 = 0$ (correct). The don't care
($A=1, B=1, C=1$) gives $F = 1 + 0 = 1$, which is acceptable since the output is irrelevant for this
input.

The expression $C + A\overline{B}$ (2 terms, 3 literals) is simpler than
$\overline{A}C + A\overline{B}$ (2 terms, 4 literals).

## Converting Between Representations

### Boolean Expression to Truth Table

Given any Boolean expression, evaluate it for every combination of input values. For an expression
with $n$ variables, construct $2^n$ rows and evaluate the expression for each.

### Truth Table to Boolean Expression (SOP)

1. Identify all rows where the output is 1.
2. For each such row, write a minterm: AND together each variable (complemented if 0, uncomplemented
   if 1).
3. OR together all minterms.

### Truth Table to Boolean Expression (POS)

1. Identify all rows where the output is 0.
2. For each such row, write a maxterm: OR together each variable (complemented if 1, uncomplemented
   if 0).
3. AND together all maxterms.

### Boolean Expression to Logic Circuit

Replace each operation with its corresponding gate:

- AND operations become AND gates
- OR operations become OR gates
- NOT operations become NOT gates (inverter bubbles)

The structure of the expression dictates the circuit topology. An SOP expression produces a
two-level circuit: AND gates feeding into an OR gate.

### Logic Circuit to Boolean Expression

Trace the circuit from inputs to outputs:

1. Label each gate output with the expression it computes.
2. Work from left to right (inputs to outputs).
3. The final gate output is the overall expression.

**Worked example:** A circuit has inputs `A`, `B`, `C`. An AND gate takes `A` and `B`. An OR gate
takes the AND gate output and `C`. The final expression is $(A \cdot B) + C$.

## Half Adder and Full Adder

### Half Adder

A half adder adds two single-bit numbers and produces a sum and a carry. It does not accept a
carry-in from a previous stage.

| `A` | `B` | Sum | Carry |
| --- | --- | --- | ----- |
| 0   | 0   | 0   | 0     |
| 0   | 1   | 1   | 0     |
| 1   | 0   | 1   | 0     |
| 1   | 1   | 0   | 1     |

The sum bit follows the XOR pattern: $\mathrm{Sum} = A \oplus B$

The carry bit follows the AND pattern: $\mathrm{Carry} = A \cdot B$

**Circuit implementation:** One XOR gate and one AND gate.

### Full Adder

A full adder adds two single-bit numbers plus a carry-in from a previous stage, producing a sum and
a carry-out.

| `A` | `B` | $C_{in}$ | Sum | $C_{out}$ |
| --- | --- | -------- | --- | --------- |
| 0   | 0   | 0        | 0   | 0         |
| 0   | 0   | 1        | 1   | 0         |
| 0   | 1   | 0        | 1   | 0         |
| 0   | 1   | 1        | 0   | 1         |
| 1   | 0   | 0        | 1   | 0         |
| 1   | 0   | 1        | 0   | 1         |
| 1   | 1   | 0        | 0   | 1         |
| 1   | 1   | 1        | 1   | 1         |

**Sum derivation via K-map:**

|       | $B \cdot C_{in} = 00$ | $B \cdot C_{in} = 01$ | $B \cdot C_{in} = 11$ | $B \cdot C_{in} = 10$ |
| ----- | --------------------- | --------------------- | --------------------- | --------------------- |
| `A`=0 | 0                     | 1                     | 0                     | 1                     |
| `A`=1 | 1                     | 0                     | 1                     | 0                     |

The 1s appear at $(0,01)$, $(0,10)$, $(1,00)$, $(1,11)$. No two adjacent 1s share a common group in
the standard sense. Each 1 is isolated (adjacent cells are 0). Therefore, no simplification is
possible, and the SOP form is the sum of minterms:

$$\mathrm{Sum} = \overline{A} \cdot \overline{B} \cdot C_{in} + \overline{A} \cdot B \cdot \overline{C_{in}} + A \cdot \overline{B} \cdot \overline{C_{in}} + A \cdot B \cdot C_{in}$$

$$\mathrm{Sum} = A \oplus B \oplus C_{in}$$

**Carry-out derivation via K-map:**

|       | $B \cdot C_{in} = 00$ | $B \cdot C_{in} = 01$ | $B \cdot C_{in} = 11$ | $B \cdot C_{in} = 10$ |
| ----- | --------------------- | --------------------- | --------------------- | --------------------- |
| `A`=0 | 0                     | 0                     | 1                     | 0                     |
| `A`=1 | 0                     | 1                     | 1                     | 1                     |

Groups:

- $(1,01), (1,11), (1,10)$: row `A`=1, columns 01, 11, 10. This is $A \cdot B + A \cdot C_{in}$
  (column 00 is excluded). The $2 \times 2$ group spanning $(1,01)$ and $(1,11)$ gives
  $A \cdot C_{in}$, and the $2 \times 2$ group spanning $(1,11)$ and $(1,10)$ gives $A \cdot B$.
- $(0,11), (1,11)$: column 11, both rows. This is $B \cdot C_{in}$.

$$C_{out} = A \cdot B + A \cdot C_{in} + B \cdot C_{in}$$

**Alternative carry expression:**

$$C_{out} = (A \cdot B) + C_{in} \cdot (A \oplus B)$$

This form has significance: it shows that a full adder can be constructed from two half adders. The
first half adder computes $A \oplus B$ (partial sum) and $A \cdot B$ (partial carry). The second
half adder adds the partial sum and $C_{in}$ to get the final sum, and the final carry is the OR of
the partial carry and the carry from the second half adder.

### Ripple Carry Adder

A ripple carry adder chains multiple full adders to add multi-bit numbers. The carry-out of each
stage feeds into the carry-in of the next stage. For an $n$-bit adder, $n$ full adders are required.

The main disadvantage is propagation delay: the carry must ripple through all stages sequentially.
The worst-case delay is $n \times t_{carry}$, where $t_{carry}$ is the carry propagation time of a
single full adder.

## Common Pitfalls

### Forgetting to Apply De Morgan's Correctly

The most common error is distributing the NOT incorrectly. De Morgan's Laws invert each variable AND
swap the operator. A typical mistake:

$$\overline{A \cdot B + C} \neq \overline{A} \cdot \overline{B} + \overline{C}$$

The correct application is:

$$\overline{A \cdot B + C} = \overline{A \cdot B} \cdot \overline{C} = (\overline{A} + \overline{B}) \cdot \overline{C}$$

### Incomplete K-Map Grouping

Failing to identify all possible groups, particularly wrap-around groups, leads to non-minimal
expressions. Always check:

- Top and bottom rows for horizontal adjacency
- Left and right columns for vertical adjacency
- The four corners as a valid $2 \times 2$ group
- Groups of 4 before groups of 2 (larger groups eliminate more variables)

### Missing Essential Prime Implicants

An essential prime implicant is a group that covers at least one minterm not covered by any other
group. If you fail to include all essential prime implicants, the expression will not correctly
represent the function. Always identify essential prime implicants first, then cover any remaining
uncovered minterms with the largest possible groups.

### Confusing SOP and POS

Sum-of-products (SOP) is an OR of ANDs. Product-of-sums (POS) is an AND of ORs. When converting from
a truth table, SOP is obtained from the 1s and POS from the 0s. Mixing these up produces an
incorrect expression.

### Ignoring Don't Care Conditions

Don't care conditions provide additional flexibility for simplification. Setting a don't care to 0
when it should be 1 (or vice versa) may prevent the formation of a larger group, resulting in a
non-minimal expression. Always consider both options for each don't care and choose the one that
maximizes group sizes.

### Incorrect Gate Counting

When implementing a circuit, count the actual number of physical gates required. An XOR gate is a
single gate, not two gates (even though it can be expressed as $A\overline{B} + \overline{A}B$). A
NAND gate is a single gate, not an AND gate followed by a NOT gate. Physical gate count determines
circuit cost and delay.
