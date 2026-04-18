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

Given a key $k$, compute $\mathrm{index} = h(k) \bmod m$, where $h$ is the hash function and $m$ is
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

:::warning
Pitfall If $m = 2^p$ and keys have patterns in their low-order bits (e.g., even numbers),
the hash function will map many keys to the same bucket.
:::

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
degraded performance. The expected number of probes for an unsuccessful search grows rapidly as the
load factor approaches 1 (vs $O(1)$ for uniform hashing).

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

:::info
Board-specific

- **AQA** requires understanding of hash functions, collision resolution (linear probing, quadratic
  probing, rehashing), and calculating hash table load factor
- **CIE (9618)** covers hashing and collision handling; may use different terminology
- **OCR (A)** requires hash tables with collision resolution using linear probing and rehashing
- **Edexcel** covers hash tables and collision resolution methods
:::

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

$h(\mathrm{"abc"}) = 0$.

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
[Complexity Analysis](/docs/alevel/computer-science/algorithms/complexity-analysis).

</details>

---

## Problems

**Problem 1.** A hash table uses the division method with table size $m = 13$. Calculate the hash
value for each of the following keys: 26, 42, 93, 17, 77, 31, 55, 20.

<details>
<summary>Hint</summary>

Apply $h(k) = k \bmod 13$ to each key. Remember that the modulo operation gives the remainder after
division.

</details>

<details>
<summary>Answer</summary>

$h(k) = k \bmod 13$:

| Key | Calculation      | Hash value |
| --- | ---------------- | ---------- |
| 26  | 26 ÷ 13 = 2 r 0  | 0          |
| 42  | 42 ÷ 13 = 3 r 3  | 3          |
| 93  | 93 ÷ 13 = 7 r 2  | 2          |
| 17  | 17 ÷ 13 = 1 r 4  | 4          |
| 77  | 77 ÷ 13 = 5 r 12 | 12         |
| 31  | 31 ÷ 13 = 2 r 5  | 5          |
| 55  | 55 ÷ 13 = 4 r 3  | 3          |
| 20  | 20 ÷ 13 = 1 r 7  | 7          |

Note: 42 and 55 both hash to index 3 — a collision occurs.

</details>

**Problem 2.** A hash function for strings uses the polynomial rolling hash:
$h(s) = (s[0] + s[1] \cdot 31 + s[2] \cdot 31^2) \bmod 100$, where $s[i]$ is the ASCII code of the
$i$-th character. Calculate the hash value for the string "Cat".

<details>
<summary>Hint</summary>

Look up the ASCII values: C = 67, a = 97, t = 116. Apply the formula:
$h = (67 + 97 \cdot 31 + 116 \cdot 31^2) \bmod 100$.

</details>

<details>
<summary>Answer</summary>

ASCII values: C = 67, a = 97, t = 116

$h = (s[0] + s[1] \cdot 31 + s[2] \cdot 31^2) \bmod 100$

$= (67 + 97 \times 31 + 116 \times 961) \bmod 100$

Calculate each term:

- $97 \times 31 = 3007$
- $116 \times 961 = 111476$

$h = (67 + 3007 + 111476) \bmod 100$ $= 114550 \bmod 100$ $= 50$

The hash value of "Cat" is **50**.

</details>

**Problem 3.** Insert the keys 44, 17, 31, 88, 61, 5, 22 into a hash table of size 7 using linear
probing with $h(k) = k \bmod 7$. Show the state of the table after each insertion.

<details>
<summary>Hint</summary>

For linear probing, if index $h(k)$ is occupied, try $h(k)+1$, then $h(k)+2$, etc., wrapping around
using modulo 7.

</details>

<details>
<summary>Answer</summary>

$h(k) = k \bmod 7$

| Key | $h(k)$ | Probe sequence  | Final index |
| --- | ------ | --------------- | ----------- |
| 44  | 2      | 2               | 2           |
| 17  | 3      | 3               | 3           |
| 31  | 3      | 3 (occupied), 4 | 4           |
| 88  | 4      | 4 (occupied), 5 | 5           |
| 61  | 5      | 5 (occupied), 6 | 6           |
| 5   | 5      | 5, 6, 0         | 0           |
| 22  | 1      | 1               | 1           |

Step-by-step table states:

After inserting 44: `[—, —, 44, —, —, —, —]` After inserting 17: `[—, —, 44, 17, —, —, —]` After
inserting 31: `[—, —, 44, 17, 31, —, —]` After inserting 88: `[—, —, 44, 17, 31, 88, —]` After
inserting 61: `[—, —, 44, 17, 31, 88, 61]` After inserting 5: `[5, —, 44, 17, 31, 88, 61]` After
inserting 22: `[5, 22, 44, 17, 31, 88, 61]`

Final table:

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   |
| ----- | --- | --- | --- | --- | --- | --- | --- |
| Key   | 5   | 22  | 44  | 17  | 31  | 88  | 61  |

</details>

**Problem 4.** Using the final hash table from Problem 3, trace the search for key 61 using linear
probing. Show each probe.

<details>
<summary>Hint</summary>

To search, compute $h(k)$ and probe sequentially. Stop when you find the key or reach an empty slot.

</details>

<details>
<summary>Answer</summary>

Search for 61 with $h(k) = k \bmod 7$:

$h(61) = 61 \bmod 7 = 5$

Probe sequence:

1. Index 5: value is 88. 88 ≠ 61, continue probing.
2. Index 6: value is 61. 61 = 61. **Found!**

The key 61 was found at index 6 after 2 probes.

Note: This illustrates a drawback of linear probing — even though $h(61) = 5$, the key is stored at
index 6 due to earlier collisions. We must continue probing past occupied slots until we find the
key or an empty slot.

</details>

**Problem 5.** Insert the keys 19, 36, 50, 5, 69, 14, 75 into a hash table of size 11 using
quadratic probing with $h(k, i) = (h'(k) + i^2) \bmod 11$ where $h'(k) = k \bmod 11$. Show the table
after all insertions.

<details>
<summary>Hint</summary>

Quadratic probing tries offsets of $0, 1, 4, 9, 16, \ldots$ (i.e., $i^2$ for
$i = 0, 1, 2, 3, \ldots$). If the target index is occupied, try $(h'(k) + i^2) \bmod m$.

</details>

<details>
<summary>Answer</summary>

$h'(k) = k \bmod 11$, $h(k, i) = (h'(k) + i^2) \bmod 11$

| Key | $h'(k)$ | Probe sequence ($i=0, 1, 2, \ldots$)              | Final index |
| --- | ------- | ------------------------------------------------- | ----------- |
| 19  | 8       | $(8+0)=8$                                         | 8           |
| 36  | 3       | $(3+0)=3$                                         | 3           |
| 50  | 6       | $(6+0)=6$                                         | 6           |
| 5   | 5       | $(5+0)=5$                                         | 5           |
| 69  | 3       | $(3+0)=3$ occupied, $(3+1)=4$                     | 4           |
| 14  | 3       | $(3+0)=3$ occupied, $(3+1)=4$ occupied, $(3+4)=7$ | 7           |
| 75  | 9       | $(9+0)=9$                                         | 9           |

Final table:

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Key   | —   | —   | —   | 36  | 69  | 5   | 50  | 14  | 19  | 75  | —   |

Load factor: $\alpha = 7/11 \approx 0.636$

</details>

**Problem 6.** A hash table of size 7 contains the keys `{14, 21, 7, 28, 35}` using the division
method $h(k) = k \bmod 7$. The load factor threshold is 0.7. A new key 42 needs to be inserted.
Describe the rehashing process: choose a new table size, rehash all existing keys plus the new key,
and show the final table using linear probing.

<details>
<summary>Hint</summary>

First check if rehashing is needed. If so, double the table size (to a prime), then reinsert every
key into the new table using the new modulo.

</details>

<details>
<summary>Answer</summary>

Current state: 5 keys in table of size 7. Load factor $\alpha = 5/7 \approx 0.714 > 0.7$.

After inserting 42: 6 keys, $\alpha = 6/7 \approx 0.857 > 0.7$. Rehashing is needed.

**Step 1: Choose new table size.** Double and find nearest prime: $2 \times 7 = 14$, but 14 is not
prime. Nearest prime ≥ 14 is 17. New $m = 17$.

**Step 2: Rehash all keys using $h(k) = k \bmod 17$.**

| Key | $k \bmod 17$ | Index |
| --- | ------------ | ----- |
| 14  | 14           | 14    |
| 21  | 4            | 4     |
| 7   | 7            | 7     |
| 28  | 11           | 11    |
| 35  | 1            | 1     |
| 42  | 8            | 8     |

No collisions occur with the new table size.

**Final table (size 17):**

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  | 11  | 12  | 13  | 14  | 16  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Key   | —   | 35  | —   | —   | 21  | —   | —   | 7   | 42  | —   | —   | 28  | —   | —   | 14  | —   |

New load factor: $\alpha = 6/17 \approx 0.353 < 0.7$ ✓

</details>

**Problem 7.** A hash table using chaining has 500 buckets and currently stores 350 key-value pairs.
Calculate the load factor. If the table is resized to 1001 buckets (a prime), what is the new load
factor? What is the expected number of comparisons for an unsuccessful search before and after
resizing?

<details>
<summary>Hint</summary>

Load factor $\alpha = n/m$. For chaining with unsuccessful search, expected comparisons = $\alpha$.

</details>

<details>
<summary>Answer</summary>

**Before resizing:**

- Load factor: $\alpha = 350/500 = 0.7$
- Expected comparisons for unsuccessful search: $\alpha = 0.7$

**After resizing to 1001 buckets:**

- Load factor: $\alpha = 350/1001 \approx 0.350$
- Expected comparisons for unsuccessful search: $\alpha \approx 0.350$

**For successful search**, the expected comparisons before resizing is
$1 + \alpha/2 = 1 + 0.35 = 1.35$, and after resizing is $1 + 0.175 = 1.175$.

Resizing roughly halves the expected search time, demonstrating why maintaining a low load factor is
important for performance.

</details>

**Problem 8.** Compare linear probing and chaining as collision resolution methods. For each method,
discuss: (a) the best-case and worst-case time complexity for search, (b) how deletion is handled,
and (c) the effect of increasing load factor on performance.

<details>
<summary>Hint</summary>

Consider how each method stores data (in the table itself vs. in linked lists) and how this affects
probe sequences, memory usage, and deletion.

</details>

<details>
<summary>Answer</summary>

| Aspect                 | Linear Probing                                                                                                                     | Chaining                                                                                                                                  |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| **Best-case search**   | $O(1)$ — key at its hash index                                                                                                     | $O(1)$ — key is alone in its bucket                                                                                                       |
| **Worst-case search**  | $O(n)$ — all keys cluster together                                                                                                 | $O(n)$ — all keys hash to same bucket                                                                                                     |
| **Deletion**           | Requires "lazy deletion" (mark slot as deleted, not empty). If simply emptied, search would break by stopping early at the gap.    | $O(1)$ — simply remove node from linked list                                                                                              |
| **Load factor effect** | Performance degrades rapidly as $\alpha \to 1$. At $\alpha > 0.7$, clustering causes significant slowdown. Must keep $\alpha < 1$. | Performance degrades gradually. Chains grow linearly with $\alpha$. No hard upper limit on $\alpha$ (but should keep < 1 for efficiency). |
| **Memory**             | $O(m)$ — fixed array size                                                                                                          | $O(n + m)$ — array + linked list nodes                                                                                                    |
| **Cache performance**  | Good — contiguous memory access                                                                                                    | Poor — following pointers to scattered nodes                                                                                              |

**Key trade-off:** Linear probing has better cache performance but suffers from clustering and
requires careful load factor management. Chaining is simpler to implement and handles deletion
cleanly but uses extra memory for pointers.

</details>

**Problem 9.** A library system needs a hash table to store book records, where each book has a
10-digit ISBN (e.g., 9780132350884). Design a suitable hash function. Explain your choice and show
worked examples for at least three ISBNs.

<details>
<summary>Hint</summary>

Consider using the division method or a digit-selection technique. Think about what properties the
hash function should have (uniform distribution, efficiency, minimal collisions).

</details>

<details>
<summary>Answer</summary>

**Design choice:** Use the division method with a prime table size. Since ISBNs are large integers,
we can select specific digit groups to reduce the number while preserving distribution.

**Hash function:** Extract the last 5 digits of the ISBN and use the division method with
$m = 10007$ (a prime):

$$h(\mathrm{isbn}) = (\mathrm{isbn} \bmod 100000) \bmod 10007$$

**Rationale:**

- Taking the last 5 digits (`mod 100000`) gives values from 0–99999, which is manageable
- Using a prime $m = 10007$ ensures good distribution (avoids patterns in ISBNs aligning with
  divisors of $m$)
- The function is $O(1)$ and deterministic

**Worked examples:**

| ISBN          | Last 5 digits | $\bmod 100000$ | $\bmod 10007$                                                | Hash |
| ------------- | ------------- | -------------- | ------------------------------------------------------------ | ---- |
| 9780132350884 | 50884         | 50884          | 50884 mod 10007 = 50884 − 5×10007 = 50884 − 50035 = **849**  | 849  |
| 9780596007126 | 07126         | 7126           | 7126 mod 10007 = **7126**                                    | 7126 |
| 9780201896831 | 96831         | 96831          | 96831 mod 10007 = 96831 − 9×10007 = 96831 − 90063 = **6768** | 6768 |

This gives good distribution across the table. With $m = 10007$ and a load factor target of 0.7, the
table can hold approximately 7000 books before needing resizing.

</details>

**Problem 10.** (Exam-style multi-step question) A hash table of size 11 uses double hashing with
$h_1(k) = k \bmod 11$ and $h_2(k) = 1 + (k \bmod 9)$. The following keys are to be inserted in
order: 47, 25, 63, 14, 80, 36, 52.

(a) Show the probe sequence for each key and the final state of the hash table. (b) What is the load
factor of the final table? (c) Trace the search for key 80 in the final table. How many probes are
needed? (d) If key 25 is deleted, explain why lazy deletion (tombstone marking) is necessary in open
addressing, and show what happens if a search for key 47 is performed after deletion without
tombstones.

<details>
<summary>Hint</summary>

For double hashing: $h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod 11$. Calculate $h_2(k)$ for each key
first, then trace the probe sequence.

</details>

<details>
<summary>Answer</summary>

**(a) Insertion with double hashing:**

$h_1(k) = k \bmod 11$, $h_2(k) = 1 + (k \bmod 9)$

| Key | $h_1(k)$ | $h_2(k)$                   | Probe sequence ($h_1 + i \cdot h_2$) mod 11 | Final index |
| --- | -------- | -------------------------- | ------------------------------------------- | ----------- |
| 47  | 3        | $1+(47 \bmod 9) = 1+2 = 3$ | $(3+0)=3$                                   | 3           |
| 25  | 3        | $1+(25 \bmod 9) = 1+7 = 8$ | $(3+0)=3$ occupied, $(3+8)=0$               | 0           |
| 63  | 8        | $1+(63 \bmod 9) = 1+0 = 1$ | $(8+0)=8$                                   | 8           |
| 14  | 3        | $1+(14 \bmod 9) = 1+5 = 6$ | $(3+0)=3$ occ, $(3+6)=9$                    | 9           |
| 80  | 3        | $1+(80 \bmod 9) = 1+8 = 9$ | $(3+0)=3$ occ, $(3+9)=1$                    | 1           |
| 36  | 3        | $1+(36 \bmod 9) = 1+0 = 1$ | $(3+0)=3$ occ, $(3+1)=4$                    | 4           |
| 52  | 8        | $1+(52 \bmod 9) = 1+7 = 8$ | $(8+0)=8$ occ, $(8+8)=5$                    | 5           |

Final table:

| Index | 0   | 1   | 2   | 3   | 4   | 5   | 6   | 7   | 8   | 9   | 10  |
| ----- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Key   | 25  | 80  | —   | 47  | 36  | 52  | —   | —   | 63  | 14  | —   |

**(b) Load factor:**

$\alpha = n/m = 7/11 \approx 0.636$

**(c) Search for key 80:**

$h_1(80) = 80 \bmod 11 = 3$ $h_2(80) = 1 + (80 \bmod 9) = 9$

Probe sequence:

1. $(3 + 0 \times 9) \bmod 11 = 3$ → value is 47 ≠ 80, continue
2. $(3 + 1 \times 9) \bmod 11 = 1$ → value is 80 = 80. **Found!**

Key 80 found at index 1 after **2 probes**.

**(d) Deletion and lazy deletion:**

If key 25 at index 0 is deleted by simply setting the slot to empty, a subsequent search for key 47
would fail:

$h_1(47) = 3$, $h_2(47) = 3$

Search for 47:

1. Index 3 → 47 found immediately. (This actually works for 47.)

But consider searching for **key 25** after re-inserting it at a different location — or consider
searching for key 80 if index 0 were emptied: $h_1(80) = 3$, probing goes to index 1 (found).
However, the problem arises with keys that were inserted after the deleted key and probed past it.

Consider searching for a hypothetical key that hashed to index 0 and was placed further along due to
probing. If index 0 is simply emptied, the search would stop prematurely at the empty slot,
incorrectly concluding the key is not in the table.

**Solution:** Use lazy deletion (tombstone). Mark index 0 as DELETED (not EMPTY). During search,
treat DELETED slots as occupied (continue probing past them). During insert, treat DELETED slots as
available for insertion.

</details>

:::

:::
