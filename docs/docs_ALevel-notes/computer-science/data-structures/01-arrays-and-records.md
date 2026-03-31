---
title: Arrays and Records
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: arrays-and-records
---

## 1. One-Dimensional Arrays

### Definition

A **one-dimensional array** (or vector) is a finite, ordered sequence of elements of the same data type, stored in **contiguous memory locations**. Each element is accessed by an integer index.

Formally, an array $A$ of type $T$ with $n$ elements maps indices to memory:

$$A: \{0, 1, \ldots, n-1\} \to \text{Memory addresses}$$

where $A[i]$ is stored at base address $b + i \times s$, and $s$ is the size (in bytes) of one element of type $T$.

### Memory Layout

**Address calculation:**

$$\text{addr}(A[i]) = b + i \cdot s$$

where $b$ is the base address of the array, $i$ is the index, and $s$ is the element size.

**Theorem.** Array element access takes $O(1)$ time.

**Proof.** The address of $A[i]$ is computed by a single multiplication and a single addition — both constant-time operations. No traversal is needed. $\square$

<details><summary>Example: Memory layout of an integer array</summary><p>

Consider `int A[5] = {10, 20, 30, 40, 50}` where each `int` is 4 bytes and the base address is $b = 1000$:

| Index | Value | Address   |
| ----- | ----- | --------- |
| 0     | 10    | 1000–1003 |
| 1     | 20    | 1004–1007 |
| 2     | 30    | 1008–1011 |
| 3     | 40    | 1012–1015 |
| 4     | 50    | 1016–1019 |

$A[3]$ is at $1000 + 3 \times 4 = 1012$. ✓

</p></details>

### Operations and Complexity

| Operation     | Time             | Notes                          |
| ------------- | ---------------- | ------------------------------ |
| Access `A[i]` | $O(1)$           | Direct address calculation     |
| Search        | $O(n)$           | Linear scan (unsorted)         |
| Search        | $O(\log n)$      | Binary search (sorted)         |
| Insert at end | $O(1)$ amortised | Dynamic array                  |
| Insert at $i$ | $O(n)$           | Must shift elements $i..n-1$   |
| Delete at $i$ | $O(n)$           | Must shift elements $i+1..n-1$ |

### Python Implementation

```python
class StaticArray:
    def __init__(self, size, default=None):
        self._data = [default] * size
        self._size = size

    def __getitem__(self, index):
        if 0 <= index < self._size:
            return self._data[index]
        raise IndexError("Array index out of bounds")

    def __setitem__(self, index, value):
        if 0 <= index < self._size:
            self._data[index] = value
        else:
            raise IndexError("Array index out of bounds")

    def __len__(self):
        return self._size
```

---

## 2. Two-Dimensional Arrays

### Definition

A **two-dimensional array** is an array of arrays — a matrix with $m$ rows and $n$ columns. Formally:

$$A: \{0,\ldots,m-1\} \times \{0,\ldots,n-1\} \to \text{Memory}$$

### Memory Layouts

#### Row-Major Order

Elements of each row are stored contiguously. Row 0 first, then row 1, etc.

$$\text{addr}(A[i][j]) = b + (i \cdot n + j) \cdot s$$

This is the default in C, C++, Python (NumPy default), and most modern languages.

#### Column-Major Order

Elements of each column are stored contiguously. Column 0 first, then column 1, etc.

$$\text{addr}(A[i][j]) = b + (j \cdot m + i) \cdot s$$

This is the default in Fortran, MATLAB, R, and Julia.

<details><summary>Example: 3×2 array in row-major vs column-major</summary><p>

$A = \begin{pmatrix} 1 & 2 \\ 3 & 4 \\ 5 & 6 \end{pmatrix}$

**Row-major:** 1, 2, 3, 4, 5, 6

**Column-major:** 1, 3, 5, 2, 4, 6

</p></details>

**Theorem.** 2D array access takes $O(1)$ time.

**Proof.** The address is computed with two multiplications and two additions: $b + (i \cdot n + j) \cdot s$. All are constant-time operations. $\square$

---

## 3. Static vs Dynamic Arrays

### Static Arrays

- **Size is fixed at creation** — determined at compile time (or declaration time)
- Stored on the **stack** (for local arrays) or in the **data segment** (for global arrays)
- Cannot be resized after creation

### Dynamic Arrays

- **Size can change at runtime** — the array automatically resizes when full
- Stored on the **heap**
- Achieved by allocating a larger array and copying elements when capacity is exceeded

**Amortised analysis of dynamic array insertion.**

Consider a dynamic array that starts at capacity 1 and doubles when full.

**Theorem.** The amortised cost of $n$ append operations is $O(1)$ per operation.

**Proof.** A resize at capacity $c$ copies $c$ elements. Resizes occur at capacities $1, 2, 4, 8, \ldots, 2^{\lfloor \log_2 n \rfloor}$. The total cost of all copies is:

$$\sum_{k=0}^{\lfloor \log_2 n \rfloor} 2^k = 2^{\lfloor \log_2 n \rfloor + 1} - 1 \leq 2n - 1 = O(n)$$

Over $n$ operations, the amortised cost per operation is $O(n)/n = O(1)$. $\square$

```python
class DynamicArray:
    def __init__(self):
        self._data = [None] * 1
        self._size = 0
        self._capacity = 1

    def append(self, value):
        if self._size == self._capacity:
            self._resize(self._capacity * 2)
        self._data[self._size] = value
        self._size += 1

    def _resize(self, new_capacity):
        new_data = [None] * new_capacity
        for i in range(self._size):
            new_data[i] = self._data[i]
        self._data = new_data
        self._capacity = new_capacity

    def __len__(self):
        return self._size
```

### Comparison

| Property     | Static Array      | Dynamic Array            |
| ------------ | ----------------- | ------------------------ |
| Size         | Fixed at creation | Grows/shrinks at runtime |
| Memory       | Stack or data seg | Heap                     |
| Access time  | $O(1)$            | $O(1)$                   |
| Append       | N/A (fixed size)  | $O(1)$ amortised         |
| Memory waste | Exact allocation  | Up to 2× allocated       |

---

## 4. Records (Structs)

### Definition

A **record** (called a `struct` in C, `record` in Pascal) is a composite data type that groups related fields of **possibly different types** under a single name.

```python
class Student:
    def __init__(self, name, age, grades):
        self.name = name
        self.age = age
        self.grades = grades
```

### Memory Layout

Fields are stored contiguously in memory, in the order declared. The size of a record is the sum of its field sizes, plus any **padding** added for alignment.

**Alignment rule:** On most architectures, an $n$-byte field must be stored at an address that is a multiple of $n$ (or the largest alignment requirement).

<details><summary>Example: Record memory layout with padding</summary><p>

```c
struct Example {
    char c;     // 1 byte
    int x;      // 4 bytes (aligned to 4-byte boundary)
    short s;    // 2 bytes
};
```

Layout (on a 32-bit system with 4-byte alignment):

| Offset | Field | Size | Padding |
| ------ | ----- | ---- | ------- |
| 0      | c     | 1    | —       |
| 1–3    | —     | 3    | padding |
| 4–7    | x     | 4    | —       |
| 8–9    | s     | 2    | —       |
| 10–11  | —     | 2    | padding |

Total size: 12 bytes (not 7).

</p></details>

### Records vs Arrays

| Property     | Array                    | Record                        |
| ------------ | ------------------------ | ----------------------------- |
| Element type | All elements same type   | Fields can be different types |
| Access       | By integer index         | By named field                |
| Size         | Homogeneous              | Heterogeneous                 |
| Use case     | Collections of same data | Grouping related attributes   |

---

## 5. Bounds Checking

**Definition.** Bounds checking verifies that an array index is within the valid range $[0, n-1]$ before accessing the element.

Without bounds checking, an out-of-bounds access reads or writes arbitrary memory — a **buffer overflow** vulnerability.

:::warning Pitfall
In C and C++, array access is **not** bounds-checked by default. Accessing `A[-1]` or `A[n]` compiles but causes undefined behaviour. Python, Java, and C# perform automatic bounds checking.
:::

---

## 6. Arrays of Records

An array of records combines both structures: each element of the array is a record. This is extremely common in practice.

```python
students = [
    Student("Alice", 17, [85, 92, 78]),
    Student("Bob", 18, [90, 88, 95]),
    Student("Charlie", 17, [76, 81, 84]),
]

def average_grade(student):
    return sum(student.grades) / len(student.grades)
```

**Complexity.** Accessing field $f$ of record $i$ in an array: $O(1)$ — compute array offset, then add field offset.

---

## Problem Set

**Problem 1.** An integer array `A` has base address 2000. Each integer occupies 4 bytes. What is the address of `A[7]`?

<details><summary>Answer</summary><p>

$\text{addr}(A[7]) = 2000 + 7 \times 4 = 2000 + 28 = 2028$

</p></details>

**Problem 2.** A 2D array `A[4][5]` is stored in row-major order with base address 100. Each element is 2 bytes. What is the address of `A[2][3]`?

<details><summary>Answer</summary><p>

$\text{addr}(A[2][3]) = 100 + (2 \times 5 + 3) \times 2 = 100 + 13 \times 2 = 126$

</p></details>

**Problem 3.** The same array `A[4][5]` is stored in column-major order. What is the address of `A[2][3]`?

<details><summary>Answer</summary><p>

$\text{addr}(A[2][3]) = 100 + (3 \times 4 + 2) \times 2 = 100 + 14 \times 2 = 128$

</p></details>

**Problem 4.** A dynamic array starts at capacity 1 and doubles when full. After inserting 17 elements, what is the current capacity? How many total element copies have occurred due to resizing?

<details><summary>Answer</summary><p>

Capacity after 17 insertions: $32$ (doubled from 16 after the 16th insertion).

Total copies: at capacities $1, 2, 4, 8, 16$ → $1 + 2 + 4 + 8 + 16 = 31$ copies.

</p></details>

**Problem 5.** Explain why inserting an element at the beginning of an array of $n$ elements takes $O(n)$ time.

<details><summary>Answer</summary><p>

All $n$ existing elements must be shifted one position to the right to make room at index 0. Each shift is a constant-time assignment, so the total cost is $n$ assignments = $O(n)$.

</p></details>

**Problem 6.** A record `Person` has fields: `name` (string, 20 bytes), `age` (int, 4 bytes), `height` (float, 4 bytes). Assuming 4-byte alignment, what is the total size of the record?

<details><summary>Answer</summary><p>

- `name`: offset 0, 20 bytes
- No padding needed before `age` (offset 20 is divisible by 4)
- `age`: offset 20, 4 bytes
- `height`: offset 24, 4 bytes

Total: 28 bytes. (No padding needed at the end since the total is already a multiple of the largest alignment, 4.)

</p></details>

**Problem 7.** Prove that searching for a value in an unsorted array of $n$ elements requires $\Omega(n)$ comparisons in the worst case.

<details><summary>Answer</summary><p>

In an unsorted array, there is no relationship between the values at different indices. To determine whether a target value $x$ exists in the array, any algorithm must potentially examine every element — if it skips any unchecked element, that element could be $x$. Therefore, the worst case requires $n$ comparisons, giving $\Omega(n)$.

More formally: an adversary can answer "no" to all $n-1$ comparisons. Only after checking all $n$ elements can the algorithm correctly conclude that $x$ is absent.

</p></details>

**Problem 8.** Given an array `A[10] = {3, 1, 4, 1, 5, 9, 2, 6, 5, 3}`, trace a linear search for the value 9 and count the number of comparisons made.

<details><summary>Answer</summary><p>

| Step | Index | A[index] | Comparison    | Count |
| ---- | ----- | -------- | ------------- | ----- |
| 1    | 0     | 3        | 3 ≠ 9         | 1     |
| 2    | 1     | 1        | 1 ≠ 9         | 2     |
| 3    | 2     | 4        | 4 ≠ 9         | 3     |
| 4    | 3     | 1        | 1 ≠ 9         | 4     |
| 5    | 4     | 5        | 5 ≠ 9         | 5     |
| 6    | 5     | 9        | 9 = 9 → found | 6     |

Total comparisons: 6. The value 9 is at index 5.

For revision on searching, see [Searching Algorithms](/docs/docs_ALevel-notes/computer-science/algorithms/01-searching-algorithms).

</p></details>
