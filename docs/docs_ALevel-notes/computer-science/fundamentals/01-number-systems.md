---
title: Number Systems
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: number-systems
---

## 1. Positional Number Systems

### Definition

A **positional number system** represents a number as a sequence of digits
$d_{n-1}d_{n-2}\ldots d_1d_0$ in base $b$, where the value of the number is:

$$
N = \sum_{i=0}^{n-1} d_i \cdot b^i
$$

Each digit $d_i$ satisfies $0 \leq d_i \lt{} b$. The **most significant digit** (MSD) is $d_{n-1}$
and the **least significant digit** (LSD) is $d_0$.

The bases relevant to A Level Computer Science are:

| Base | Name   | Digits Used           |
| ---- | ------ | --------------------- |
| 10   | Denary | 0, 1, 2, ..., 9       |
| 2    | Binary | 0, 1                  |
| 8    | Octal  | 0, 1, 2, ..., 7       |
| 16   | Hex    | 0–9, A, B, C, D, E, F |

We use subscript notation to denote the base: $1011_2 = 11_{10}$.

### Conversion Between Bases

#### Base $b$ to Denary

**Algorithm.** Given digits $d_{n-1}\ldots d_0$ in base $b$, compute:

$$
N = \sum_{i=0}^{n-1} d_i \cdot b^i
$$

**Correctness.** This is exactly the definition of positional notation, so correctness is immediate.

**Proof of termination.** The sum has exactly $n$ terms, so the algorithm terminates after $n$
iterations.

<details>
<summary>Example: Convert $1A3_{16}$ to denary</summary>

$$1 \times 16^2 + 10 \times 16^1 + 3 \times 16^0 = 256 + 160 + 3 = 419_{10}$$

</details>

#### Denary to Base $b$ (Repeated Division)

**Algorithm.** To convert denary $N$ to base $b$:

1. Set $i = 0$
2. While $N \gt{} 0$: digit $d_i = N \bmod b$; set $N = \lfloor N / b \rfloor$; $i \leftarrow i + 1$
3. The result is $d_{i-1}d_{i-2}\ldots d_0$ (digits collected in reverse order)

**Correctness proof.** We prove by induction on the number of division steps that the algorithm
produces the correct base-$b$ representation.

_Base case._ After the first step, $d_0 = N \bmod b$ and $N' = \lfloor N / b \rfloor$. We have
$N = d_0 + b \cdot N'$, so $d_0$ is indeed the coefficient of $b^0$.

_Inductive step._ Assume after $k$ steps we have
$N = d_0 + d_1 b + \cdots + d_{k-1}b^{k-1} + b^k \cdot N_k$ where $N_k = \lfloor N / b^k \rfloor$.
The next step computes $d_k = N_k \bmod b$ and $N_{k+1} = \lfloor N_k / b \rfloor$, giving
$N_k = d_k + b \cdot N_{k+1}$. Substituting:

$$N = \sum_{i=0}^{k-1} d_i b^i + b^k(d_k + b \cdot N_{k+1}) = \sum_{i=0}^{k} d_i b^i + b^{k+1} N_{k+1}$$

This maintains the invariant. When $N_k = 0$, the representation is complete.

<details>
<summary>Example: Convert $156_{10}$ to binary</summary>

| Step | $N$ | $N \bmod 2$ | $\lfloor N/2 \rfloor$ |
| ---- | --- | ----------- | --------------------- |
| 1    | 156 | 0           | 78                    |
| 2    | 78  | 0           | 39                    |
| 3    | 39  | 1           | 19                    |
| 4    | 19  | 1           | 9                     |
| 5    | 9   | 1           | 4                     |
| 6    | 4   | 0           | 2                     |
| 7    | 2   | 0           | 1                     |
| 8    | 1   | 1           | 0                     |

Reading bottom to top: $156_{10} = 10011100_2$

</details>

#### Binary to Hexadecimal (and vice versa)

Since $16 = 2^4$, each hex digit corresponds to exactly 4 binary digits. Group binary digits from
right to left in groups of 4, then convert each group.

<details>
<summary>Example: Convert $10111011011_2$ to hex</summary>

Group: $101\ 1101\ 1011$

Pad left group: $0101\ 1101\ 1011$

Convert: $5\ \text{D}\ \text{B} = 5DB_{16}$

</details>

#### Hexadecimal to Binary

Replace each hex digit with its 4-bit binary equivalent.

<details>
<summary>Example: Convert $3F7_{16}$ to binary</summary>

$3 = 0011$, $F = 1111$, $7 = 0111$

Result: $001111110111_2 = 11111110111_2$

</details>

#### Octal Conversions

Since $8 = 2^3$, each octal digit maps to exactly 3 binary digits. Convert by grouping in 3s (or
multiplying/dividing by 8).

---

## 2. Binary Arithmetic

### Binary Addition

We add bitwise from right to left, with carries:

| $A$ | $B$ | $C_{in}$ | Sum | $C_{out}$ |
| --- | --- | -------- | --- | --------- |
| 0   | 0   | 0        | 0   | 0         |
| 0   | 0   | 1        | 1   | 0         |
| 0   | 1   | 0        | 1   | 0         |
| 0   | 1   | 1        | 0   | 1         |
| 1   | 0   | 0        | 1   | 0         |
| 1   | 0   | 1        | 0   | 1         |
| 1   | 1   | 0        | 0   | 1         |
| 1   | 1   | 1        | 1   | 1         |

**Proposition (Carry propagation).** The carry into bit position $i$ depends only on bits $0$
through $i-1$.

**Proof.** The carry $C_i$ is defined recursively: $C_0 = 0$ and
$C_{i+1} = (A_i \cdot B_i) + (A_i \cdot C_i) + (B_i \cdot C_i)$. By structural induction on $i$,
$C_i$ is a Boolean function of $\{A_0, B_0, \ldots, A_{i-1}, B_{i-1}\}$ only. $\square$

<details>
<summary>Example: Add $1011_2 + 0110_2$</summary>

```
  Carry: 1 1 1 0 0
         1 0 1 1
       + 0 1 1 0
       ---------
       1 0 0 0 1
```

$1011_2 = 11_{10}$, $0110_2 = 6_{10}$, $10001_2 = 17_{10}$. Correct. ✓

</details>

### Binary Subtraction

Binary subtraction can be performed using two's complement (see below).

---

## 3. Two's Complement Representation

### Motivation

We need a way to represent both positive and negative integers in binary, using a fixed number of
bits.

### Definition

For an $n$-bit two's complement representation, the range of representable integers is:

$$[-2^{n-1},\ 2^{n-1} - 1]$$

The representation of a non-negative integer $x$ is simply its standard $n$-bit binary
representation. The representation of a negative integer $-x$ (where $x \gt{} 0$) is:

$$\text{TwosComp}_n(-x) = 2^n - x$$

### Derivation: Why $\bar{x} + 1$ Works

**Theorem.** For any $n$-bit positive integer $x$ ($1 \leq x \leq 2^{n-1} - 1$), the two's
complement representation of $-x$ equals $\bar{x} + 1$ (where $\bar{x}$ is the bitwise NOT of the
$n$-bit representation of $x$, and $+1$ is binary addition).

**Proof.** The $n$-bit representation of $x$ has bits $x_{n-1}\ldots x_0$. The bitwise complement
$\bar{x}$ has bits $\bar{x}_{n-1}\ldots\bar{x}_0$, where $\bar{x}_i = 1 - x_i$. The value of
$\bar{x}$ as an unsigned $n$-bit number is:

$$\bar{x} = \sum_{i=0}^{n-1}(1 - x_i) \cdot 2^i = \sum_{i=0}^{n-1} 2^i - \sum_{i=0}^{n-1} x_i \cdot 2^i = (2^n - 1) - x$$

Therefore:

$$\bar{x} + 1 = (2^n - 1) - x + 1 = 2^n - x$$

This is exactly the definition of the two's complement of $-x$. $\square$

**Corollary.** Adding $x$ and $-x$ in two's complement yields zero (modulo $2^n$).

**Proof.**

$$x + (\bar{x} + 1) = x + 2^n - x = 2^n$$

In $n$ bits, $2^n$ is represented as $00\ldots0$ with a carry out of bit position $n-1$, which is
discarded. Hence the result is $0$. $\square$

### Two's Complement Addition and Overflow

When adding two $n$-bit two's complement numbers, the result is correct (modulo $2^n$) if and only
if no overflow occurs.

**Overflow detection rules:**

| Condition                           | Overflow? |
| ----------------------------------- | --------- |
| Positive + Positive = Negative      | Yes       |
| Negative + Negative = Positive      | Yes       |
| Positive + Negative                 | Never     |
| Same signs produce same sign result | No        |

**Formally:** overflow occurs if and only if the carry into the MSB differs from the carry out of
the MSB.

<details>
<summary>Example: Add $-5$ and $3$ in 4-bit two's complement</summary>

$-5 = 1011_2$ (since $2^4 - 5 = 11 = 1011_2$) $3 = 0011_2$

```
  Carry: 1 1 1 1 0
         1 0 1 1
       + 0 0 1 1
       ---------
       1 1 1 0
```

$1110_2$ in two's complement: $-2$. Let us verify: $-5 + 3 = -2$. ✓

No overflow (negative + positive never overflows).

</details>

<details>
<summary>Example: Overflow — Add $6$ and $5$ in 4-bit two's complement</summary>

$6 = 0110_2$, $5 = 0101_2$

```
  Carry: 0 1 1 0 0
         0 1 1 0
       + 0 1 0 1
       ---------
       1 0 1 1
```

Result: $1011_2 = -5$ in two's complement. But $6 + 5 = 11$, which is outside the range $[-8, 7]$
for 4 bits. Overflow detected: positive + positive yielded negative. ✓

</details>

:::info Board-specific

- **AQA:** Requires two's complement for 8-bit and 16-bit numbers.
- **CIE:** Requires two's complement for 8-bit numbers specifically.
- **OCR:** Requires understanding of sign and magnitude as well as two's complement. :::

---

## 4. Fixed-Point Binary Representation

### Definition

A **fixed-point** binary number uses a specified number of bits for the integer part and a specified
number of bits for the fractional part.

For an $n$-bit number with $m$ integer bits and $f$ fractional bits ($n = m + f$):

$$N = \sum_{i=0}^{m-1} b_i \cdot 2^i + \sum_{j=1}^{f} b_{m+j-1} \cdot 2^{-j}$$

where $b_0$ is the LSB of the integer part and $b_{m+f-1}$ is the MSB.

### Range and Precision

For an unsigned fixed-point number with $m$ integer bits and $f$ fractional bits:

- **Range:** $[0,\ 2^m - 2^{-f}]$
- **Precision (resolution):** $2^{-f}$

For signed (two's complement) with $m$ integer bits and $f$ fractional bits:

- **Range:** $[-2^{m-1},\ 2^{m-1} - 2^{-f}]$

<details>
<summary>Example: 8-bit fixed-point with 5 integer bits and 3 fractional bits</summary>

$01101011_2$:

Integer part: $01101_2 = 13_{10}$ Fractional part:
$011_2 = 0 \times 2^{-1} + 1 \times 2^{-2} + 1 \times 2^{-3} = 0.375_{10}$

Value: $13.375_{10}$

Range: $[0,\ 31.875]$, Precision: $0.125$

</details>

---

## 5. Binary Coded Decimal (BCD)

### Definition

In **Binary Coded Decimal (BCD)**, each decimal digit (0–9) is represented by its 4-bit binary
equivalent.

| Decimal | BCD  |
| ------- | ---- |
| 0       | 0000 |
| 1       | 0001 |
| 2       | 0010 |
| ...     | ...  |
| 9       | 1001 |

The codes $1010$ through $1111$ are **invalid** in BCD.

### Properties

- Each decimal digit requires exactly 4 bits (a **nibble**)
- A $k$-digit decimal number requires $4k$ bits in BCD
- BCD is less space-efficient than pure binary: e.g., $999_{10}$ requires 12 bits in BCD but only 10
  bits in pure binary ($1111100111_2$)
- BCD avoids rounding errors in decimal arithmetic — useful in financial systems

:::warning Pitfall BCD is NOT the same as converting the entire number to binary. $12_{10}$ in BCD
is $00010010_2$, NOT $1100_2$. :::

---

## 6. Character Encoding

### ASCII

The **American Standard Code for Information Interchange (ASCII)** is a 7-bit character encoding
standard representing 128 characters:

- $0$–$31$: Control characters (NUL, BEL, LF, CR, etc.)
- $32$: Space
- $48$–$57$: Digits '0'–'9'
- $65$–$90$: Uppercase letters 'A'–'Z'
- $97$–$122$: Lowercase letters 'a'–'z'

**Key property:** The codes for uppercase and lowercase letters differ by exactly $32$ ($2^5$), so
bit 5 distinguishes them. Specifically, 'A' = $65$ and 'a' = $97$.

Extended ASCII uses 8 bits (256 characters) but is not standardised — various extensions exist.

### Unicode

**Unicode** is a universal character encoding standard that aims to represent every character from
every writing system. Key facts:

- Unicode assigns a unique **code point** to each character, written as `U+XXXX` (e.g., 'A' =
  `U+0041`, '€' = `U+20AC`)
- As of Unicode 15.0, there are over 149,000 characters across 161 scripts
- Unicode is an abstract standard — it defines code points, not how they are stored in bytes

### UTF-8 Encoding

**UTF-8** is a variable-length encoding of Unicode code points into bytes. It is backward-compatible
with ASCII.

**Encoding rules:**

| Code Point Range       | Binary Pattern                        | Bytes |
| ---------------------- | ------------------------------------- | ----- |
| `U+0000` – `U+007F`    | `0xxxxxxx`                            | 1     |
| `U+0080` – `U+07FF`    | `110xxxxx 10xxxxxx`                   | 2     |
| `U+0800` – `U+FFFF`    | `1110xxxx 10xxxxxx 10xxxxxx`          | 3     |
| `U+10000` – `U+10FFFF` | `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx` | 4     |

**Properties of UTF-8:**

1. **Self-synchronising:** Any byte can identify whether it is a single-byte character, the start of
   a multi-byte sequence, or a continuation byte. Continuation bytes always start with `10`, start
   bytes start with `11...0`.
2. **ASCII compatible:** All ASCII text is valid UTF-8.
3. **Prefix-free:** No valid UTF-8 sequence is a prefix of another valid sequence.

<details>
<summary>Example: Encode '€' (U+20AC) in UTF-8</summary>

$20AC_{16} = 0010\ 0000\ 1010\ 1100_2$

This falls in the range `U+0800`–`U+FFFF`, so it uses 3 bytes: `1110xxxx 10xxxxxx 10xxxxxx`.

Fill in the bits from the code point:

$0010\ 0000\ 1010\ 1100$

Split: $\underbrace{0010}_{x} \underbrace{000010}_{xx} \underbrace{101100}_{xx}$

Result: `11100010 10000010 10101100` = `E2 82 AC` in hex.

</details>

---

## 7. Representing Negative Numbers: Other Methods

### Sign and Magnitude

The MSB represents the sign (0 = positive, 1 = negative), and the remaining bits represent the
magnitude.

- Range for $n$ bits: $[-(2^{n-1} - 1),\ 2^{n-1} - 1]$
- Two representations of zero: $+0 = 000\ldots0$ and $-0 = 100\ldots0$

:::warning Pitfall Sign and magnitude is rarely used in practice because:

1. It has two representations of zero
2. Addition requires different logic depending on the signs
3. The range is asymmetric :::

---

## Problem Set

**Problem 1.** Convert $2F7_{16}$ to denary.

<details>
<summary>Hint</summary>

Use the positional formula with $b = 16$. Remember $F = 15$.

</details>

<details>
<summary>Answer</summary>

$2 \times 256 + 15 \times 16 + 7 = 512 + 240 + 7 = 759_{10}$

</details>

**Problem 2.** Convert $314_{10}$ to binary and hexadecimal.

<details>
<summary>Hint</summary>

Use repeated division by 2, then group into 4-bit nibbles for hex.

</details>

<details>
<summary>Answer</summary>

Binary: $314 = 256 + 32 + 16 + 8 + 2 = 100111010_2$

Hex: Group as $0001\ 0011\ 1010 = 13A_{16}$

</details>

**Problem 3.** Represent $-42$ in 8-bit two's complement. Verify by adding it to $+42$ and showing
the result is zero.

<details>
<summary>Hint</summary>

Find the binary of 42, flip all bits, add 1.

</details>

<details>
<summary>Answer</summary>

$42 = 00101010_2$

Bitwise NOT: $11010101_2$

Add 1: $11010110_2$

Verification: $00101010 + 11010110 = 100000000$. The carry out of 8 bits is discarded, leaving
$00000000$. ✓

</details>

**Problem 4.** Perform the addition $10110110_2 + 01101011_2$ and interpret the result in 8-bit
unsigned and 8-bit two's complement.

<details>
<summary>Hint</summary>

Do the binary addition first. Then interpret based on the encoding scheme.

</details>

<details>
<summary>Answer</summary>

```
  1 0 1 1 0 1 1 0
+ 0 1 1 0 1 0 1 1
-----------------
1 0 0 1 0 0 0 0 1
```

8-bit result (discard carry): $00100001_2$

- **Unsigned:** $00100001_2 = 33_{10}$. Check: $182 + 107 = 289$. But $289 \bmod 256 = 33$. ✓
- **Two's complement:** $00100001_2 = 33_{10}$. Check: $-74 + 107 = 33$. ✓

</details>

**Problem 5.** A fixed-point system uses 12 bits: 8 for the integer part and 4 for the fractional
part. What is the range and precision? Convert $01011010.1010$ to denary.

<details>
<summary>Hint</summary>

Precision is $2^{-4}$. Range depends on whether signed or unsigned.

</details>

<details>
<summary>Answer</summary>

Unsigned range: $[0,\ 255.9375]$, precision: $0.0625$ ($2^{-4}$).

$01011010_2 = 64 + 16 + 8 + 2 = 90_{10}$

$.1010_2 = 0.5 + 0.125 = 0.625_{10}$

Value: $90.625_{10}$

</details>

**Problem 6.** Encode the string "Hi!" in ASCII (hex). Then explain how many bytes this would take
in UTF-8.

<details>
<summary>Hint</summary>

Look up each character's ASCII code point.

</details>

<details>
<summary>Answer</summary>

'H' = 72 = $48_{16}$ = `01001000` 'i' = 105 = $69_{16}$ = `01101001` '!' = 33 = $21_{16}$ =
`00100001`

In ASCII hex: `48 69 21`

Since all code points are below `U+007F`, UTF-8 uses 1 byte per character, so 3 bytes total. UTF-8
encoding is identical to ASCII for these characters.

</details>

**Problem 7.** Encode the character 'ñ' (`U+00F1`) in UTF-8. Show each step.

<details>
<summary>Hint</summary>

`U+00F1` falls in the 2-byte range `U+0080`–`U+07FF`. Use the pattern `110xxxxx 10xxxxxx`.

</details>

<details>
<summary>Answer</summary>

$00F1_{16} = 0000\ 1111\ 0001_2$

Split into bits: $\underbrace{00011}_{x} \underbrace{110001}_{xx}$

First byte: `110` + `00011` = `11000011` = $C3_{16}$ Second byte: `10` + `110001` = `10110001` =
$B1_{16}$

UTF-8: `C3 B1`

</details>

**Problem 8.** A student claims that $1101_2$ in 4-bit two's complement represents $-3$. Another
claims it represents $+13$. Who is correct? Explain.

<details>
<summary>Hint</summary>

What does the MSB tell you in two's complement?

</details>

<details>
<summary>Answer</summary>

The first student is correct for two's complement interpretation. The MSB is 1, so it is negative.

Value: $- (2^4 - 13) = -(16 - 13) = -3$. ✓

The second student is interpreting it as an unsigned number: $8 + 4 + 1 = 13$. This is also valid —
the bit pattern is the same, but the interpretation differs. Context determines which encoding is
used.

</details>

**Problem 9.** Prove that the two's complement of the two's complement of $x$ equals $x$ (for $x$ in
the valid range, excluding $-2^{n-1}$).

<details>
<summary>Hint</summary>

Start with $\text{TwosComp}(x) = 2^n - x$. Apply the operation again.

</details>

<details>
<summary>Answer</summary>

Let $y = \text{TwosComp}_n(x) = 2^n - x$.

$\text{TwosComp}_n(y) = 2^n - y = 2^n - (2^n - x) = x$. ✓

The exception is $x = -2^{n-1}$, whose two's complement is
$2^n - (-2^{n-1}) = 2^n + 2^{n-1} = 2^{n-1} \cdot 3$, which exceeds $n$ bits. In $n$-bit arithmetic,
$2^n - (-2^{n-1}) \bmod 2^n = 2^{n-1}$, which is the bit pattern $100\ldots0$ — the same as
$-2^{n-1}$. So $-2^{n-1}$ is its own two's complement.

</details>

**Problem 10.** In a system using 6-bit two's complement, what is the result of adding $-16$ and
$-15$? Does overflow occur?

<details>
<summary>Hint</summary>

Range of 6-bit two's complement is $[-32, 31]$. Compute $-16 + (-15) = -31$. Is this in range?

</details>

<details>
<summary>Answer</summary>

$-16 = 2^6 - 16 = 48 = 110000_2$ $-15 = 2^6 - 15 = 49 = 110001_2$

```
  1 1 0 0 0 0
+ 1 1 0 0 0 1
-----------
1 1 0 0 0 0 1
```

6-bit result: $100001_2$. This is $-(2^6 - 33) = -31$.

Check: $-16 + (-15) = -31$. No overflow: $-31$ is in range $[-32, 31]$. ✓

Both inputs are negative and the result is negative, so no overflow.

</details>
