---
title: Hash Tables
date: 2025-06-02T16:25:28.480Z
tags:
  - ComputerScience
  - ALevel
categories:
  - ComputerScience
slug: hash-tables
---

## 1. Introduction

### Definition

A **hash table** (hash map) is a data structure that maps keys to values using a **hash function**
to compute an index into an array of buckets. It provides average-case $O(1)$ time for insert,
delete, and search.

### The Core Idea

Given a key $k$, compute $\text{index} = h(k) \bmod m$, where $h$ is the hash function and $m$ is
the table size. Store the key-value pair at this index.

---

## 2. Hash Functions

### Properties of a Good Hash Function

1. **Deterministic:** The same key always produces the same hash
2. **Efficient:** Computed in $O(1)$ time
3. **Uniform distribution:** Maps keys evenly across all indices
4. **Minimal collisions:** Different keys rarely hash to the same index

### Common Hash Functions

#### Division Method

$$h(k) = k \bmod m$$

**Choosing $m$.** Avoid powers of 2 (patterns in keys align with binary structure). Choose $m$ to be
a **prime** not close to a power of 2.

:::warning Pitfall If $m = 2^p$ and keys have patterns in their low-order bits (e.g., even numbers),
the hash function will map many keys to the same bucket. :::

#### Multiplication Method

$$h(k) = \lfloor m \cdot (k \cdot A \bmod 1) \rfloor$$

where $A$ is a constant $0 \lt{} A \lt{} 1$ (Knuth suggests
$A = \frac{\sqrt{5} - 1}{2} \approx 0.618$).

**Advantage:** Works well with any value of $m$.

#### Polynomial Rolling Hash (for strings)

$$h(s) = \left(\sum_{i=0}^{n-1} s[i] \cdot p^i\right) \bmod m$$

where $p$ is a prime (typically 31 or 37) and $m$ is a large prime or $2^{64}$.

```python
def polynomial_hash(s, p=31, m=10**9 + 7):
    h = 0
    for ch in s:
        h = (h * p + ord(ch)) % m
    return h
```

---

## 3. Collisions

### Definition

A **collision** occurs when two distinct keys $k_1 \neq k_2$ hash to the same index:
$h(k_1) = h(k_2)$.

**Theorem (Pigeonhole Principle).** If a hash table has $m$ buckets and stores more than $m$ keys,
at least one collision must occur.

**Proof.** By the pigeonhole principle: $n$ keys mapped to $m$ buckets where $n \gt{} m$ means at
least one bucket contains $\lceil n/m \rceil \geq 2$ keys. $\square$

---

## 4. Collision Resolution: Chaining

### Method

Each bucket contains a **linked list** of all key-value pairs that hash to that index.

```python
class ChainedHashTable:
    def __init__(self, size=10):
        self.size = size
        self.table = [[] for _ in range(size)]

    def _hash(self, key):
        return hash(key) % self.size

    def insert(self, key, value):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                self.table[index][i] = (key, value)
                return
        self.table[index].append((key, value))

    def search(self, key):
        index = self._hash(key)
        for k, v in self.table[index]:
            if k == key:
                return v
        return None

    def delete(self, key):
        index = self._hash(key)
        for i, (k, v) in enumerate(self.table[index]):
            if k == key:
                del self.table[index][i]
                return
```

### Complexity Analysis

**Theorem.** Under **simple uniform hashing** (each key is equally likely to hash to any of the $m$
buckets, independently), the expected length of a chain for $n$ keys and $m$ buckets is
$\alpha = n/m$ (the **load factor**).

**Proof.** By linearity of expectation, the expected number of keys in any particular bucket is
$n \cdot (1/m) = n/m$. $\square$

| Operation | Average case    | Worst case |
| --------- | --------------- | ---------- |
| Search    | $O(1 + \alpha)$ | $O(n)$     |
| Insert    | $O(1)$          | $O(1)$     |
| Delete    | $O(1 + \alpha)$ | $O(n)$     |

**Theorem.** Chaining requires $O(n + m)$ total memory.

**Proof.** $m$ bucket headers plus $n$ nodes, each storing a key, value, and pointer. $\square$

---

## 5. Collision Resolution: Open Addressing

### Method

All key-value pairs are stored in the table itself (no linked lists). When a collision occurs, the
algorithm **probes** for the next available slot.

### Linear Probing

$$h(k, i) = (h'(k) + i) \bmod m$$

where $i = 0, 1, 2, \ldots$ is the probe sequence.

```python
class LinearProbeHashTable:
    def __init__(self, size):
        self.size = size
        self.keys = [None] * size
        self.values = [None] * size
        self.deleted = [False] * size

    def insert(self, key, value):
        i = 0
        while i < self.size:
            index = (hash(key) + i) % self.size
            if self.keys[index] is None or self.deleted[index]:
                self.keys[index] = key
                self.values[index] = value
                self.deleted[index] = False
                return
            if self.keys[index] == key:
                self.values[index] = value
                return
            i += 1
        raise Exception("Table full")

    def search(self, key):
        i = 0
        while i < self.size:
            index = (hash(key) + i) % self.size
            if self.keys[index] is None:
                return None
            if self.keys[index] == key and not self.deleted[index]:
                return self.values[index]
            i += 1
        return None
```

#### Clustering in Linear Probing

**Theorem.** Linear probing suffers from **primary clustering**: consecutive occupied slots form
clusters, and new insertions are more likely to land in larger clusters, making them grow even
faster.

**Proof of clustering.** Consider a cluster of length $L$. The probability that the next insertion
lands in this cluster is $(L + 1)/m$ (one more than the cluster length, since the slot after the
cluster also triggers probing into the cluster). When an insertion lands in the cluster, the cluster
grows by at least 1. This positive feedback means large clusters grow disproportionately, leading to
$O(\log n)$ expected probe length in practice (vs $O(1)$ for uniform hashing).

More formally, after inserting $n$ keys into a table of size $m$ with linear probing, the expected
number of probes for an unsuccessful search is approximately:

$$\frac{1}{2}\left(1 + \frac{1}{(1 - \alpha)^2}\right)$$

where $\alpha = n/m$ is the load factor. As $\alpha \to 1$, this grows to $\infty$. $\square$

### Quadratic Probing

$$h(k, i) = (h'(k) + c_1 i + c_2 i^2) \bmod m$$

Eliminates primary clustering but may cause **secondary clustering** (keys with the same initial
hash follow the same probe sequence).

**Theorem.** If the table size $m$ is prime and the load factor $\alpha \lt{} 0.5$, quadratic
probing will always find an empty slot.

### Double Hashing

$$h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod m$$

Uses a second hash function $h_2$ to determine the probe step. Eliminates both primary and secondary
clustering.

**Requirement:** $h_2(k) \neq 0$ and $h_2(k)$ is coprime with $m$. Common choice:
$h_2(k) = 1 + (k \bmod (m - 1))$.

---

## 6. Load Factor and Resizing

### Definition

$$\alpha = \frac{n}{m}$$

where $n$ is the number of stored keys and $m$ is the table size.

### Resizing (Rehashing)

When $\alpha$ exceeds a threshold (typically 0.7 for chaining, 0.5 for open addressing), allocate a
new table of size $\approx 2m$ and rehash all keys.

**Theorem.** Resizing maintains $O(1)$ amortised time per operation.

**Proof.** Similar to dynamic array analysis. The total cost of $n$ insertions with resizing at
powers of 2 is dominated by the last resize: $\sum_{k=0}^{\log n} 2^k \cdot O(1) = O(n)$. Amortised
per insertion: $O(1)$. $\square$

---

## 7. Comparison of Collision Resolution Methods

| Property          | Chaining        | Linear Probing    | Double Hashing   |
| ----------------- | --------------- | ----------------- | ---------------- |
| Memory            | $O(n + m)$      | $O(m)$            | $O(m)$           |
| Cache performance | Poor (pointers) | Good (contiguous) | Good             |
| Clustering        | None            | Primary           | None             |
| Delete            | $O(1)$          | Lazy deletion     | Lazy deletion    |
| Load factor limit | No hard limit   | $\alpha \lt{} 1$  | $\alpha \lt{} 1$ |

:::info Board-specific

- **AQA** requires understanding of hash functions, collision resolution (linear probing, quadratic
  probing, rehashing), and calculating hash table load factor
- **CIE (9618)** covers hashing and collision handling; may use different terminology
- **OCR (A)** requires hash tables with collision resolution using linear probing and rehashing
- **Edexcel** covers hash tables and collision resolution methods :::

---

## Problem Set

**Problem 1.** Using the division method with table size $m = 7$, compute the hash values for keys:
14, 21, 28, 35, 42. What do you observe?

<details>
<summary>Answer</summary>

$h(k) = k \bmod 7$:

- 14 mod 7 = 0
- 21 mod 7 = 0
- 28 mod 7 = 0
- 35 mod 7 = 0
- 42 mod 7 = 0

All keys hash to index 0 — **maximum collisions**. This demonstrates why $m$ should not divide
common key patterns. If $m = 7$ and all keys are multiples of 7, every key collides. Choose $m$ to
be a prime not dividing common key values.

</details>

**Problem 2.** Insert keys 10, 22, 31, 4, 15, 28, 17 into a hash table of size 11 using linear
probing. Show the table after each insertion.

<details>
<summary>Answer</summary>

$h(k) = k \bmod 11$

| Key | Hash | Probe sequence | Final index |
| --- | ---- | -------------- | ----------- |
| 10  | 10   | 10             | 10          |
| 22  | 0    | 0              | 0           |
| 31  | 9    | 9              | 9           |
| 4   | 4    | 4              | 4           |
| 15  | 4    | 4, 5           | 5           |
| 28  | 6    | 6              | 6           |
| 17  | 6    | 6, 7           | 7           |

Final table:

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Key   | 22  | —   | —   | —   | 4   | 15  | 28  | 17  | —   | 31  | 10  |

</details>

**Problem 3.** Using the same keys as Problem 2, insert into a hash table using chaining with
$m = 5$. Show each bucket.

<details>
<summary>Answer</summary>

$h(k) = k \bmod 5$

| Bucket | Keys (chain) |
| ------ | ------------ |
| 0      | 10 → 15 → 28 |
| 1      | 31           |
| 2      | 22 → 17      |
| 3      |              |
| 4      | 4            |

Load factor: $\alpha = 7/5 = 1.4$.

</details>

**Problem 4.** Compute the polynomial rolling hash of the string "abc" using base $p = 31$ and
modulus $m = 101$.

<details>
<summary>Answer</summary>

$h = (a \cdot 31^2 + b \cdot 31^1 + c \cdot 31^0) \bmod 101$

$= (97 \cdot 961 + 98 \cdot 31 + 99 \cdot 1) \bmod 101$

$= (93217 + 3038 + 99) \bmod 101$

$= 96354 \bmod 101$

$96354 / 101 = 953$ remainder $96354 - 953 \times 101 = 96354 - 96253 = 101$... let me recalculate.

$953 \times 101 = 96253$. $96354 - 96253 = 101$. So $96354 \bmod 101 = 101 \bmod 101 = 0$.

Alternatively, computing iteratively:

- $h = 0$
- $h = (0 \times 31 + 97) \bmod 101 = 97$
- $h = (97 \times 31 + 98) \bmod 101 = (3007 + 98) \bmod 101 = 3105 \bmod 101$
- $3105 / 101 = 30$ remainder $3105 - 3030 = 75$
- $h = (75 \times 31 + 99) \bmod 101 = (2325 + 99) \bmod 101 = 2424 \bmod 101$
- $2424 / 101 = 24$ remainder $2424 - 2424 = 0$

$h(\text{"abc"}) = 0$.

</details>

**Problem 5.** Explain why the load factor must be less than 1 for open addressing but can exceed 1
for chaining.

<details>
<summary>Answer</summary>

In open addressing, all keys are stored in the table itself. If $\alpha = n/m \geq 1$, there are
more keys than slots, making it impossible to store all keys (the table is full). With linear
probing, the search for an empty slot may never terminate.

In chaining, each bucket can hold an arbitrary number of keys (via a linked list). The table never
"fills up" — chains simply grow longer. However, performance degrades as $\alpha$ increases, since
search time is proportional to chain length.

</details>

**Problem 6.** Prove that with double hashing, the probe sequence visits all $m$ slots before
repeating if $h_2(k)$ and $m$ are coprime.

<details>
<summary>Answer</summary>

**Proof.** The probe sequence is: $h_1(k),\ h_1(k) + h_2(k),\ h_1(k) + 2h_2(k),\ \ldots \pmod m$.

This is an arithmetic progression modulo $m$ with common difference $d = h_2(k)$. The sequence
visits distinct values as long as $d$ is coprime with $m$. If $\gcd(d, m) = g \gt{} 1$, the sequence
cycles through only $m/g$ distinct values. When $\gcd(d, m) = 1$, by the properties of modular
arithmetic, the sequence covers all $m$ residues before repeating. $\square$

This is why $h_2(k)$ must be chosen so that $\gcd(h_2(k), m) = 1$.

</details>

**Problem 7.** A hash table with chaining has 1000 slots and contains 500 elements. What is the
expected number of probes for a successful search? For an unsuccessful search?

<details>
<summary>Answer</summary>

Load factor: $\alpha = 500/1000 = 0.5$.

**Unsuccessful search:** Expected probes = $\alpha = 0.5$ (we traverse the entire chain on average).

**Successful search:** Expected probes =
$1 + \frac{\alpha}{2} - \frac{\alpha}{2n} \approx 1 + \frac{\alpha}{2} = 1 + 0.25 = 1.25$.

More precisely: for successful search, we examine half the chain on average (the target is equally
likely to be at any position in the chain). Expected chain length = $\alpha = 0.5$, so expected
probes = $1 + 0.5/2 = 1.25$.

</details>

**Problem 8.** Design a hash table that maps student IDs (7-digit integers) to names. Specify the
hash function, table size, and collision resolution method. Justify your choices.

<details>
<summary>Answer</summary>

**Table size:** $m = 10007$ (a prime number, allowing for up to ~7000 students with load factor <
0.7).

**Hash function:** Division method: $h(k) = k \bmod 10007$.

**Collision resolution:** Chaining with linked lists.

**Justification:**

- Division method is simple and efficient ($O(1)$)
- Prime table size reduces collisions from patterns in student IDs (e.g., sequential IDs)
- Chaining handles variable load gracefully and simplifies deletion
- Load factor < 0.7 ensures average $O(1)$ operations

For revision on complexity, see
[Complexity Analysis](/docs/docs_ALevel-notes/computer-science/algorithms/complexity-analysis).

</details>
