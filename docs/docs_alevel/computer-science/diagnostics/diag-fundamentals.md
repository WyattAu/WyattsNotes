---
title: Fundamentals -- Diagnostic Tests
description: "Diagnostic tests for A-Level CS fundamentals: binary/hex conversion, two's complement, floating point, and Boolean algebra."
slug: diag-fundamentals
hide_table_of_contents: true
---

# Fundamentals — Diagnostic Tests

## Unit Tests

### UT-1: Two's Complement and Arithmetic
**Question:** (a) Convert $-97$ to 8-bit two's complement. (b) Perform the addition $(-97) + 45$ using 8-bit two's complement binary. State whether overflow occurs. (c) What is the range of integers representable in 8-bit two's complement?

**Solution:**

(a) $97 = 01100001_2$. Flip bits: $10011110_2$. Add 1: $10011111_2$.

$-97$ in 8-bit two's complement $= 10011111_2$.

(b) $45 = 00101101_2$.

$$
\begin{array}{r}
  10011111 \\
+ 00101101 \\
\hline
  11001100 \\
\end{array}
$$

$11001100_2$ is a negative number (MSB $= 1$). Convert to decimal: flip bits $= 00110011$, add 1 $= 00110100_2 = 52$. So the result is $-52$.

Check: $-97 + 45 = -52$. Correct.

Overflow: No overflow occurs because a positive and negative number are being added, which can never produce overflow in two's complement. Overflow can only occur when adding two numbers of the same sign.

(c) Range: $-2^{n-1}$ to $2^{n-1} - 1$. For $n = 8$: $-128$ to $+127$.

---
### UT-2: Floating Point Representation
**Question:** A floating-point system uses 8 bits: 1 sign bit, 3 exponent bits (excess-4), and 4 mantissa bits. Represent $-5.75$ in this format. Calculate the absolute error and the relative error as a percentage.

**Solution:**

$5.75 = 5 + 3/4 = 101.11_2$.

Normalise: $1.0111 \times 2^2$.

Sign bit: $1$ (negative).

Exponent: $2$ in excess-4 $= 2 + 4 = 6 = 110_2$.

Mantissa (4 bits after the implicit leading 1): $0111$.

Representation: $1\ 110\ 0111 = 11100111_2$.

Stored value: $(-1)^1 \times 1.0111_2 \times 2^{110_2 - 100_2} = -1.0111_2 \times 2^2 = -101.11_2 = -(4 + 0 + 1 + 0.5 + 0.25) = -5.75$.

Absolute error: $|{-5.75} - ({-5.75})| = 0$. The representation is exact in this case.

Relative error: $0\%$.

Let me verify with a case that does have error. If the system only had 3 mantissa bits:

Mantissa would be $011$, stored value $= -1.011_2 \times 2^2 = -101.1_2 = -(4 + 1 + 0.5) = -5.5$.

Absolute error $= |-5.5 - (-5.75)| = 0.25$. Relative error $= 0.25 / 5.75 = 4.35\%$.

With 4 mantissa bits, $5.75$ is represented exactly because $5.75 = 101.11_2$ which fits in the available bits.

---
### UT-3: Boolean Algebra Simplification
**Question:** Simplify the Boolean expression $F = A\bar{B}C + AB\bar{C} + ABC + \bar{A}BC$. Use Boolean algebra laws and verify with a Karnaugh map. Draw the logic circuit for the simplified expression using only NAND gates.

**Solution:**

$F = A\bar{B}C + AB\bar{C} + ABC + \bar{A}BC$

Group $AB\bar{C} + ABC = AB(\bar{C} + C) = AB(1) = AB$.

$F = A\bar{B}C + AB + \bar{A}BC$

Group $A\bar{B}C + \bar{A}BC = (A + \bar{A})BC = BC$.

$F = AB + BC = B(A + C)$.

**Karnaugh map verification** (3 variables: A, B, C):

| BC | 00 | 01 | 11 | 10 |
|----|----|----|----|----|
| A=0 | 0 | 0 | 1 | 0 |
| A=1 | 0 | 1 | 1 | 1 |

Wait, let me redo with minterms:
- $A\bar{B}C = 101 = m_5$
- $AB\bar{C} = 110 = m_6$
- $ABC = 111 = m_7$
- $\bar{A}BC = 011 = m_3$

K-map (AB on rows, C on columns):

| AB\C | 0 | 1 |
|------|---|---|
| 00 | 0 | 0 |
| 01 | 0 | 1 |
| 11 | 1 | 1 |
| 10 | 1 | 1 |

Group $m_3$ and $m_7$ (column C=1, B=1): $BC$.
Group $m_6$ and $m_7$ (row AB=11, A=1, B=1): $AB$.
Group $m_5, m_7, m_6$... Actually:

Groups:
- $m_3 + m_7$ (same B=1, C=1): $BC$
- $m_6 + m_7$ (same A=1, B=1): $AB$
- $m_5 + m_7$ (same A=1, C=1): $AC$

$F = BC + AB + AC = AB + BC + AC$. Hmm, this differs from my algebraic simplification. Let me recheck.

From the K-map, I can also group:
- $m_5 + m_7$ (column C=1, A=1): $AC$
- $m_3 + m_7$ (column C=1, B=1): $BC$
- $m_6 + m_7$ (row AB=11): $AB$

So $F = AB + AC + BC$. But earlier I got $F = AB + BC$. Let me check if $AC$ is needed.

Check when $A = 1, B = 0, C = 1$: $F = A\bar{B}C = 1$. My simplified $B(A+C) = 0(1+1) = 0$. This is wrong!

The error was in grouping $A\bar{B}C + \bar{A}BC$. These share $BC$ only if $A$ is eliminated, but $(A + \bar{A})BC = BC$ is correct. However, the original $A\bar{B}C$ is NOT covered by $BC$ alone. Let me redo:

$F = A\bar{B}C + AB + \bar{A}BC$

The minterm $A\bar{B}C$ is only covered by the term $AC$ (since it has $A=1, B=0, C=1$). Neither $AB$ ($B=1$) nor $BC$ ($B=1$) covers it.

Correct simplification: $F = AB + BC + AC$ (three terms, all essential prime implicants).

**NAND-only implementation:** $F = AB + BC + AC$.

Each AND becomes NAND followed by NAND (as inverter). Each OR becomes NAND.

Using De Morgan's: $F = \overline{\overline{AB} \cdot \overline{BC} \cdot \overline{AC}}$.

This uses three NAND gates for the AND operations (actually, we can use NAND directly since $\text{NAND}(A,B) = \overline{AB}$), and one NAND gate for the final OR (since $\overline{\overline{AB} \cdot \overline{CD}} = AB + CD$). Total: 4 NAND gates.

## Integration Tests

### IT-1: Number Systems and Data Representation (with Data Representation in Programming)
**Question:** The 16-bit two's complement number $1111111111101001_2$ is stored in memory at address $\text{0x1A00}$. (a) What decimal value does it represent? (b) If this represents the count of characters in a UTF-8 encoded string, how many bytes of memory does the string occupy? (c) If the string contains only ASCII characters, what is the maximum possible length of the string in characters?

**Solution:**

(a) $1111111111101001_2$: This is negative (MSB $= 1$).

Flip: $0000000000010110_2$. Add 1: $0000000000010111_2 = 23$.

So the value is $-23$.

Wait, this cannot represent a character count if it is negative. Let me re-examine.

Actually, re-reading: the question says the 16-bit two's complement number represents the count. If the count is negative, this indicates an error code. But let me recalculate more carefully.

$1111111111101001_2$: Working from right: $1 + 8 + 16 + 32 + 64 + 128 + 256 + 512 + 1024 + 2048 + 4096 + 8192 + 16384 + 32768 = 65513$.

As unsigned: $65513$. As signed 16-bit two's complement: $65513 - 65536 = -23$.

If this represents a signed count, $-23$ is invalid. If interpreted as unsigned: $65513$.

(b) If interpreted as unsigned ($65513$ characters) in UTF-8:
- ASCII characters: 1 byte each
- Extended Latin: 2 bytes
- Other scripts: 3 bytes
- Emoji: 4 bytes

Without knowing the character mix, we cannot determine the exact byte count. If all ASCII: $65513$ bytes. If all 4-byte: $262052$ bytes.

(c) Maximum ASCII characters in a string that occupies this many bytes: $65513$ characters (if unsigned). If the value is $-23$, there is no valid interpretation as a character count.

This question illustrates the importance of choosing the correct representation: using an unsigned integer for counts avoids the confusion of negative values, while two's complement is essential for values that can be negative.

---
### IT-2: Floating Point and Error Propagation (with Measurement/Scientific)
**Question:** A 12-bit floating-point system (1 sign, 5 exponent excess-15, 6 mantissa) stores the value $0.1$. Calculate: (a) the stored binary representation, (b) the decimal value actually stored, (c) the absolute and relative error. (d) If 0.1 is added to itself 10 times using this representation, what is the accumulated error?

**Solution:**

(a) $0.1_{10}$ in binary: $0.1 = 0.0001100110011\ldots_2$ (repeating).

Normalised: $1.100110011\ldots \times 2^{-4}$.

Exponent: $-4$ in excess-15 $= -4 + 15 = 11 = 01011_2$.

Mantissa (6 bits): $100110$ (truncated after the implicit 1).

Sign: $0$ (positive).

Stored: $0\ 01011\ 100110 = 001011100110_2$.

(b) Actual stored value: $1.100110_2 \times 2^{-4}$.

$1.100110_2 = 1 + 1/2 + 0/4 + 0/8 + 1/16 + 1/32 + 0/64 = 1 + 0.5 + 0.0625 + 0.03125 = 1.59375$.

$1.59375 \times 2^{-4} = 1.59375 / 16 = 0.099609375$.

(c) Absolute error: $|0.1 - 0.099609375| = 0.000390625$.

Relative error: $0.000390625 / 0.1 = 0.00390625 = 0.39\%$.

(d) Adding 0.1 (stored as 0.099609375) ten times:

$10 \times 0.099609375 = 0.99609375$.

Expected: $10 \times 0.1 = 1.0$.

Accumulated error: $|1.0 - 0.99609375| = 0.00390625$.

Note: the error does NOT grow by a factor of 10 -- it stays at $0.00390625$ because we are adding the same truncated value repeatedly. In practice, floating-point addition at each step introduces additional rounding errors, so the actual accumulated error would be slightly different.

---
### IT-3: Boolean Algebra and Logic Gates (with Computer Architecture)
**Question:** A half-adder adds two 1-bit numbers and produces a sum and carry. (a) Derive the Boolean expressions for sum ($S$) and carry ($C$). (b) Show how two half-adders and an OR gate can be combined to create a full-adder. (c) For a 4-bit ripple-carry adder, calculate the maximum propagation delay if each half-adder has a delay of $5\ \text{ns}$ and each OR gate has a delay of $3\ \text{ns}$.

**Solution:**

(a) Half-adder truth table:

| A | B | S | C |
|---|---|---|---|
| 0 | 0 | 0 | 0 |
| 0 | 1 | 1 | 0 |
| 1 | 0 | 1 | 0 |
| 1 | 1 | 0 | 1 |

$S = A \oplus B = A\bar{B} + \bar{A}B$ (XOR).
$C = AB$ (AND).

(b) Full adder from two half-adders:

First half-adder: inputs $A$, $B$. Produces $S_1 = A \oplus B$ and $C_1 = AB$.
Second half-adder: inputs $S_1$, $C_{\text{in}}$. Produces $S = S_1 \oplus C_{\text{in}} = A \oplus B \oplus C_{\text{in}}$ and $C_2 = S_1 \cdot C_{\text{in}}$.
OR gate: $C_{\text{out}} = C_1 + C_2 = AB + (A \oplus B)C_{\text{in}}$.

(c) For a 4-bit ripple-carry adder: each full-adder must wait for the carry from the previous stage.

Each full-adder uses 2 half-adders (5 ns each) and 1 OR gate (3 ns). But the critical path is the carry propagation.

Stage 1: carry out ready after $5\text{ (HA1)} + 3\text{ (OR)} = 8\text{ ns}$. But actually, $C_1 = AB$ from the first HA is ready in 5 ns, and $C_2 = S_1 \cdot C_{\text{in}}$ requires $C_{\text{in}}$ to arrive. For the first stage, $C_{\text{in}} = 0$, so $C_2 = 0$ and $C_{\text{out}} = C_1$, ready in 5 ns.

For subsequent stages: the carry-in must propagate through. The longest path for carry:
- HA1 in stage $i$: 5 ns to produce $S_1$ (needed for $C_2$).
- HA2 in stage $i$: 5 ns to produce $C_2 = S_1 \cdot C_{\text{in}}$.
- OR gate: 3 ns for $C_{\text{out}}$.
- Total per stage: $5 + 5 + 3 = 13$ ns.

For 4 stages: $5$ (first stage) $+ 3 \times 13 = 5 + 39 = 44\text{ ns}$.

Maximum propagation delay: $44\text{ ns}$.
