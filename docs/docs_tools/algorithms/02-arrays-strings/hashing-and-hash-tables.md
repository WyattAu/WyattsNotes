---
id: hashing-and-hash-tables
title: Hashing and Hash Tables
description:
  Hashing and Hash Tables — Hash Function Fundamentals; Desirable Properties;
  Avalanche Criterion; Uniformity with worked examples and exam-style questions.
slug: hashing-and-hash-tables
---

## Hash Function Fundamentals

A hash function maps an input from a large domain to a smaller, fixed-size range. Formally,
$h: U \to \{0, 1, \ldots, m-1\}$ where $U$ is the universe of possible keys and $m$ is the table
size. The quality of a hash function determines the performance of every data structure built on top
of it.

### Desirable Properties

| Property          | Definition                                                                                      | Why It Matters                                           |
| ----------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| **Deterministic** | Same input always produces same output                                                          | Lookups must find the same bucket as inserts             |
| **Uniform**       | Each output is equally likely: $P(h(x) = i) = 1/m$ for all $i$                                  | Minimises collisions                                     |
| **Avalanche**     | Flipping any input bit changes each output bit with probability $\approx 0.5$                   | Small input changes produce unpredictable output changes |
| **Efficient**     | Computable in $O(k)$ where $k$ is the key length                                                | Hash computation should not dominate lookup cost         |
| **Reversible**    | (For non-cryptographic use) Given a hash value, finding a preimage should not be trivially easy | Prevents intentional collision attacks                   |

### Avalanche Criterion

The strict avalanche criterion requires that for any single-bit change in the input, each output bit
flips with probability exactly 0.5. This is a necessary condition for the hash function to be
"random-looking." A weaker but still useful property is that flipping any input bit changes the
output value significantly (not just one output bit).

### Uniformity

A perfectly uniform hash function distributes $n$ keys across $m$ buckets so that each bucket
contains approximately $n/m$ keys. In practice, we measure uniformity by hashing a large sample of
inputs and checking that the chi-squared statistic of the bucket distribution is close to what we
would expect from a truly random distribution.

```python
def uniformity_test(hash_func, keys, num_buckets):
    """
    Test hash function uniformity with chi-squared statistic.
    Returns (chi_squared, p_value) — high p_value means good uniformity.
    """
    import math

    buckets = [0] * num_buckets
    for key in keys:
        buckets[hash_func(key) % num_buckets] += 1

    expected = len(keys) / num_buckets
    chi_sq = sum((b - expected) ** 2 / expected for b in buckets)

    # Degrees of freedom = num_buckets - 1
    # For a good hash, chi_sq should be close to degrees of freedom
    return chi_sq
```

## Hash Functions for Integers

### Multiplicative Hashing

$$h(k) = \lfloor m \cdot (k \cdot A \bmod 1) \rfloor$$

where $A$ is a constant in $(0, 1)$ and $m$ is the table size. Knuth recommends
$A = (\sqrt{5} - 1) / 2 \approx 0.6180339887$. This avoids the problem of poor distribution when the
table size and key values share common factors.

```python
def multiplicative_hash(k, m, A=0x9E3779B9):
    """
    Multiplicative hash using a fixed-point approximation of golden ratio.
    A = 2^32 / golden_ratio, common choice in practice.
    Time: O(1)
    """
    k = (k * A) & 0xFFFFFFFF
    return (k >> (32 - int(m).bit_length())) % m
```

### Integer Hashing (Murmur-style Mixing)

For general-purpose hashing of integers, bit-mixing functions are preferred. These scramble the bits
of the input so that small changes in the input produce large changes in the output.

```python
def splitmix64(x):
    """
    Fast integer hash function. Excellent avalanche properties.
    Used as the default in Java's SplittableRandom.
    Time: O(1)
    """
    x = (x + 0x9E3779B97F4A7C15) & 0xFFFFFFFFFFFFFFFF
    x = (x ^ (x >> 30)) * 0xBF58476D1CE4E5B9 & 0xFFFFFFFFFFFFFFFF
    x = (x ^ (x >> 27)) * 0x94D049BB133111EB & 0xFFFFFFFFFFFFFFFF
    x = x ^ (x >> 31)
    return x
```

## Hash Functions for Strings

### Polynomial Rolling Hash

$$h(s) = \left(\sum_{i=0}^{k-1} s[i] \cdot p^{k-1-i}\right) \bmod m$$

where $p$ is a prime (commonly 31, 37, or 257) and $m$ is typically $2^{64}$ (using unsigned integer
overflow). This is the basis for Java's `String.hashCode()` and many other implementations.

```python
def polynomial_hash(s, p=31, mod=(1 << 64)):
    """
    Polynomial rolling hash for strings.
    Java uses p=31, mod=2^31-1.
    Time: O(len(s))
    """
    h = 0
    for c in s:
        h = (h * p + ord(c)) % mod
    return h
```

:::info

Java's `String.hashCode()` uses $p = 31$ with 32-bit signed integer overflow (which wraps around).
This is adequate for hash tables but unsuitable for cryptographic purposes. The choice of 31 is
historical and largely arbitrary — any odd prime works reasonably well.

:::

### FNV-1a

Fowler-Noll-Vo is a non-cryptographic hash popular in systems programming. FNV-1a XORs the input
byte with the hash before multiplying, which gives slightly better avalanche than FNV-1 (which
multiplies first).

```python
def fnv1a_64(data):
    """
    FNV-1a 64-bit hash.
    Used in many systems: DNS, BIND, Apache, etc.
    Time: O(len(data))
    """
    FNV_OFFSET = 14695981039346656037
    FNV_PRIME = 1099511628211
    h = FNV_OFFSET
    for byte in data:
        h ^= byte
        h = (h * FNV_PRIME) & 0xFFFFFFFFFFFFFFFF
    return h
```

## Hash Table Fundamentals

### Direct Addressing

When the universe of keys $U$ is small, we can use an array of size $|U|$ where index $k$ stores the
element with key $k$. This gives $O(1)$ worst-case insert, delete, and lookup, but wastes memory
when $|U|$ is much larger than the actual number of keys $n$.

| Operation | Time   | Space      |
| --------- | ------ | ---------- |
| Insert    | $O(1)$ | $O(\|U\|)$ |
| Delete    | $O(1)$ | $O(\|U\|)$ |
| Lookup    | $O(1)$ | $O(\|U\|)$ |

### Hash Tables

A hash table uses a hash function to map keys to indices in an array of size $m$ (typically
$m \approx n$). The space is $O(n)$ instead of $O(|U|)$, at the cost of handling collisions (when
two keys hash to the same index).

```python
class HashTable:
    """
    Hash table with separate chaining.
    Time (amortised): O(1) insert, delete, lookup
    Space: O(n)
    """
    def __init__(self, capacity=16, load_factor=0.75):
        self.capacity = capacity
        self.load_factor = load_factor
        self.size = 0
        self.buckets = [[] for _ in range(capacity)]

    def _hash(self, key):
        return hash(key) % self.capacity

    def insert(self, key, value):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                self.buckets[idx][i] = (key, value)
                return
        self.buckets[idx].append((key, value))
        self.size += 1
        if self.size / self.capacity > self.load_factor:
            self._resize(self.capacity * 2)

    def lookup(self, key):
        idx = self._hash(key)
        for k, v in self.buckets[idx]:
            if k == key:
                return v
        return None

    def delete(self, key):
        idx = self._hash(key)
        for i, (k, v) in enumerate(self.buckets[idx]):
            if k == key:
                del self.buckets[idx][i]
                self.size -= 1
                return True
        return False

    def _resize(self, new_capacity):
        old_buckets = self.buckets
        self.capacity = new_capacity
        self.buckets = [[] for _ in range(new_capacity)]
        self.size = 0
        for bucket in old_buckets:
            for key, value in bucket:
                self.insert(key, value)
```

## Collision Resolution: Separate Chaining

### How It Works

Each bucket is a linked list (or dynamic array) of all key-value pairs that hash to that bucket. On
a lookup, compute the hash, then scan the chain for the key.

### Load Factor and Performance

The load factor is $\alpha = n / m$ where $n$ is the number of elements and $m$ is the table size.

| Statistic                         | Value                           |
| --------------------------------- | ------------------------------- |
| Expected chain length             | $\alpha$                        |
| Unsuccessful search (average)     | $O(\alpha)$ comparisons         |
| Successful search (average)       | $O(1 + \alpha / 2)$ comparisons |
| With chaining and $\alpha \lt{1}$ | $O(1)$ amortised per operation  |

:::warning

If the load factor exceeds 1, the expected chain length grows linearly. In practice, keep
$\alpha \le 0.75$ (the default for Java `HashMap` and Python `dict`). When $\alpha$ exceeds the
threshold, resize the table and rehash all elements.

:::

### Using Dynamic Arrays Instead of Linked Lists

In practice, most modern hash table implementations use dynamic arrays (small ones) instead of
linked lists for chains. This is because:

- **Cache locality**: small arrays are contiguous in memory
- **Memory overhead**: no per-element pointer overhead
- **Memory allocator overhead**: one allocation per bucket instead of one per element

When chains get long, Java converts them to balanced trees (since Java 8). Python uses a single
contiguous array for all entries (a compact hash table).

## Collision Resolution: Open Addressing

### How It Works

All elements are stored directly in the hash table array (no separate data structures). When a
collision occurs, we probe for the next available slot using a deterministic probe sequence.

### Linear Probing

$$h(k, i) = (h'(k) + i) \bmod m$$

The simplest open addressing scheme: on collision at index $h'(k)$, try $h'(k)+1$, $h'(k)+2$, etc.

```python
class LinearProbingHashTable:
    """
    Open addressing with linear probing.
    Time (amortised): O(1) insert, delete, lookup
    Space: O(m) where m >= n / load_factor
    """
    DELETED = object()

    def __init__(self, capacity=16, load_factor=0.5):
        self.capacity = capacity
        self.load_factor = load_factor
        self.size = 0
        self.keys = [None] * capacity
        self.values = [None] * capacity

    def _hash(self, key):
        return hash(key) % self.capacity

    def _probe(self, key):
        """Generate probe sequence for key."""
        idx = self._hash(key)
        while True:
            yield idx
            idx = (idx + 1) % self.capacity

    def insert(self, key, value):
        if self.size >= self.load_factor * self.capacity:
            self._resize(self.capacity * 2)
        for idx in self._probe(key):
            if self.keys[idx] is None or self.keys[idx] is self.DELETED:
                self.keys[idx] = key
                self.values[idx] = value
                self.size += 1
                return
            if self.keys[idx] == key:
                self.values[idx] = value
                return

    def lookup(self, key):
        for idx in self._probe(key):
            if self.keys[idx] is None:
                return None
            if self.keys[idx] == key:
                return self.values[idx]

    def delete(self, key):
        for idx in self._probe(key):
            if self.keys[idx] is None:
                return False
            if self.keys[idx] == key:
                self.keys[idx] = self.DELETED
                self.values[idx] = None
                self.size -= 1
                return True
```

**Primary clustering**: linear probing suffers from primary clustering — when a cluster of occupied
slots forms, new keys that hash into or near the cluster extend it. The expected number of probes
for an unsuccessful search with linear probing is approximately
$\frac{1}{2}(1 + \frac{1}{(1-\alpha)^2})$.

### Quadratic Probing

$$h(k, i) = (h'(k) + c_1 \cdot i + c_2 \cdot i^2) \bmod m$$

Reduces primary clustering by probing at increasing distances. However, it can suffer from
**secondary clustering** — keys that hash to the same initial slot follow the same probe sequence.

**Guarantee of finding an empty slot**: if the table size $m$ is prime and the load factor is less
than 0.5, quadratic probing with $c_1 = c_2 = 1/2$ will always find an empty slot.

### Double Hashing

$$h(k, i) = (h_1(k) + i \cdot h_2(k)) \bmod m$$

Uses a second hash function $h_2(k)$ to determine the probe step size. This eliminates both primary
and secondary clustering. The table size $m$ and the step size $h_2(k)$ should be relatively prime
for the probe sequence to visit all slots.

```python
class DoubleHashingHashTable:
    def __init__(self, capacity=16):
        self.capacity = capacity
        self.size = 0
        self.keys = [None] * capacity
        self.values = [None] * capacity
        self.DELETED = object()

    def _hash1(self, key):
        return hash(key) % self.capacity

    def _hash2(self, key):
        return 1 + (hash(key) >> 16) % (self.capacity - 1)

    def _probe(self, key):
        h1 = self._hash1(key)
        h2 = self._hash2(key)
        for i in range(self.capacity):
            yield (h1 + i * h2) % self.capacity

    def insert(self, key, value):
        if self.size >= self.capacity * 0.75:
            self._resize()
        for idx in self._probe(key):
            if self.keys[idx] is None or self.keys[idx] is self.DELETED:
                self.keys[idx] = key
                self.values[idx] = value
                self.size += 1
                return
            if self.keys[idx] == key:
                self.values[idx] = value
                return

    def lookup(self, key):
        for idx in self._probe(key):
            if self.keys[idx] is None:
                return None
            if self.keys[idx] == key:
                return self.values[idx]

    def delete(self, key):
        for idx in self._probe(key):
            if self.keys[idx] is None:
                return False
            if self.keys[idx] == key:
                self.keys[idx] = self.DELETED
                self.values[idx] = None
                self.size -= 1
                return True
```

| Probe Method   | Clustering | Expected Probes (unsuccessful)            | Cache Performance |
| -------------- | ---------- | ----------------------------------------- | ----------------- |
| Linear         | Primary    | $\frac{1}{2}(1 + \frac{1}{(1-\alpha)^2})$ | Best              |
| Quadratic      | Secondary  | $\frac{1}{1-\alpha}$                      | Good              |
| Double hashing | None       | $\frac{1}{1-\alpha}$                      | Moderate          |

### Robin Hood Hashing

Robin Hood hashing reduces the variance of probe lengths. When inserting, if the new element has
probed more times than the element at the current slot (i.e., the new element is "poorer"), swap
them. The new element continues probing from the swapped position.

The key insight: instead of minimising the average probe length, Robin Hood minimises the variance,
which means worst-case lookups are much faster. The probe length of an element never exceeds
$O(\log n)$ with high probability.

```python
def robin_hood_insert(table, key, value, hashes):
    """
    Insert into Robin Hood hash table.
    Keeps track of probe distance for each element.
    """
    idx = hashes[0]
    probe_dist = 0
    while True:
        if table.keys[idx] is None:
            table.keys[idx] = key
            table.values[idx] = value
            table.probe_dists[idx] = probe_dist
            return
        if table.probe_dists[idx] < probe_dist:
            table.keys[idx], key = key, table.keys[idx]
            table.values[idx], value = value, table.values[idx]
            table.probe_dists[idx], probe_dist = probe_dist, table.probe_dists[idx]
        probe_dist += 1
        idx = (idx + 1) % table.capacity
```

## Cuckoo Hashing

Cuckoo hashing uses two hash functions and two arrays (or one array split into two halves). Each key
is stored at either $h_1(k)$ or $h_2(k)$. On collision, the existing element is "kicked out" to its
alternative position. If a cycle is detected, the table is rebuilt with new hash functions.

**Properties:**

| Property            | Value                             |
| ------------------- | --------------------------------- |
| Lookup              | $O(1)$ worst-case (2 probes)      |
| Insert (expected)   | $O(1)$ amortised                  |
| Insert (worst case) | $O(n)$ during rehash              |
| Space overhead      | Maximum load factor $\approx 0.5$ |
| Cache performance   | Moderate (two memory accesses)    |

```python
class CuckooHashTable:
    """
    Cuckoo hashing with two hash tables.
    Lookup is O(1) worst-case (max 2 probes).
    """
    def __init__(self, capacity=16):
        self.capacity = capacity
        self.table1_keys = [None] * capacity
        self.table1_values = [None] * capacity
        self.table2_keys = [None] * capacity
        self.table2_values = [None] * capacity
        self.max_displacements = 500

    def _hash1(self, key):
        return hash(key) % self.capacity

    def _hash2(self, key):
        return (hash(key) >> 16) % self.capacity

    def lookup(self, key):
        idx1 = self._hash1(key)
        if self.table1_keys[idx1] == key:
            return self.table1_values[idx1]
        idx2 = self._hash2(key)
        if self.table2_keys[idx2] == key:
            return self.table2_values[idx2]
        return None

    def insert(self, key, value):
        for _ in range(self.max_displacements):
            idx1 = self._hash1(key)
            if self.table1_keys[idx1] is None:
                self.table1_keys[idx1] = key
                self.table1_values[idx1] = value
                return True
            key, self.table1_keys[idx1] = self.table1_keys[idx1], key
            value, self.table1_values[idx1] = self.table1_values[idx1], value

            idx2 = self._hash2(key)
            if self.table2_keys[idx2] is None:
                self.table2_keys[idx2] = key
                self.table2_values[idx2] = value
                return True
            key, self.table2_keys[idx2] = self.table2_keys[idx2], key
            value, self.table2_values[idx2] = self.table2_values[idx2], value

        self._rehash()
        return self.insert(key, value)

    def _rehash(self):
        old_keys1 = [(k, v) for k, v in zip(self.table1_keys, self.table1_values) if k is not None]
        old_keys2 = [(k, v) for k, v in zip(self.table2_keys, self.table2_values) if k is not None]
        self.capacity *= 2
        self.table1_keys = [None] * self.capacity
        self.table1_values = [None] * self.capacity
        self.table2_keys = [None] * self.capacity
        self.table2_values = [None] * self.capacity
        for k, v in old_keys1 + old_keys2:
            self.insert(k, v)
```

## Consistent Hashing

### Motivation

In distributed systems, when you add or remove a server from a hash ring, you want to minimise the
number of keys that need to be remapped. Traditional modulo hashing ($h(key) \bmod n$) requires
remapping nearly all keys when $n$ changes.

### Algorithm

Consistent hashing places both keys and servers on a circle (ring) in the same hash space
$[0, 2^m)$. Each key is assigned to the first server encountered when moving clockwise around the
ring.

```python
import bisect

class ConsistentHashRing:
    """
    Consistent hashing for distributed key assignment.
    Adding/removing a node affects O(k/n) keys on average.
    Time: O(log n) per lookup
    """
    def __init__(self, num_replicas=150):
        self.ring = []
        self.node_map = {}
        self.num_replicas = num_replicas

    def _hash(self, key):
        return hash(key) % (2 ** 32)

    def add_node(self, node_id):
        for i in range(self.num_replicas):
            replica_key = f"{node_id}:replica:{i}"
            h = self._hash(replica_key)
            bisect.insort(self.ring, h)
            self.node_map[h] = node_id

    def remove_node(self, node_id):
        for i in range(self.num_replicas):
            replica_key = f"{node_id}:replica:{i}"
            h = self._hash(replica_key)
            idx = bisect.bisect_left(self.ring, h)
            if idx < len(self.ring) and self.ring[idx] == h:
                self.ring.pop(idx)
                del self.node_map[h]

    def get_node(self, key):
        if not self.ring:
            return None
        h = self._hash(key)
        idx = bisect.bisect(self.ring, h)
        if idx == len(self.ring):
            idx = 0
        return self.node_map[self.ring[idx]]
```

### Virtual Nodes

Without virtual nodes, a small number of physical servers leads to uneven distribution (each server
occupies a large arc of the ring). Virtual nodes (replicas) solve this: each physical server is
placed on the ring multiple times (typically 100-200 virtual nodes per physical server). This
smooths out the distribution and reduces the variance in key assignment.

| Physical servers | Virtual nodes per server | Keys per server (std dev / mean) |
| ---------------- | ------------------------ | -------------------------------- |
| 10               | 1                        | $\approx 0.39$                   |
| 10               | 100                      | $\approx 0.04$                   |
| 10               | 1000                     | $\approx 0.01$                   |

### Load Balancing Properties

When adding or removing a node, only the keys in the affected arc are remapped. With $n$ nodes and
$k$ keys, the expected number of keys remapped when one node is added or removed is $k/n$ —
regardless of the total number of nodes. This is far better than modulo hashing, which remaps
$k \cdot (1 - 1/(n+1)) \approx k$ keys when going from $n$ to $n+1$ nodes.

:::tip

Consistent hashing is used in Amazon Dynamo, Apache Cassandra, Riak, and many other distributed
databases. The standard number of virtual nodes is 150, which gives less than 10% imbalance with
high probability.

:::

## Bloom Filters

A bloom filter is a space-efficient probabilistic data structure for membership testing. It can tell
you whether an element is **definitely not** in the set or **possibly** in the set (with a
configurable false positive rate).

### Structure

A bloom filter is a bit array of $m$ bits, initially all 0, together with $k$ independent hash
functions $h_1, h_2, \ldots, h_k$.

### Operations

| Operation           | Algorithm                                                     | Time   |
| ------------------- | ------------------------------------------------------------- | ------ |
| Add                 | Set bits at positions $h_1(x), h_2(x), \ldots, h_k(x)$        | $O(k)$ |
| Query               | Check if all bits at $h_1(x), h_2(x), \ldots, h_k(x)$ are set | $O(k)$ |
| False positive prob | $(1 - e^{-kn/m})^k$                                           | N/A    |

```python
import mmh3

class BloomFilter:
    """
    Bloom filter for probabilistic membership testing.
    Space: O(m) bits where m = -(n * ln(p)) / (ln(2)^2)
    Time: O(k) per operation where k = (m/n) * ln(2)
    """
    def __init__(self, expected_items, false_positive_rate=0.01):
        self.expected_items = expected_items
        self.fpr = false_positive_rate
        self.size = self._optimal_size(expected_items, false_positive_rate)
        self.num_hashes = self._optimal_hashes(self.size, expected_items)
        self.bit_array = 0  # using Python int as bit array

    @staticmethod
    def _optimal_size(n, p):
        return int(-n * (p.ln() if hasattr(p, 'ln') else __import__('math').log(p)) / (__import__('math').log(2) ** 2))

    @staticmethod
    def _optimal_hashes(m, n):
        return max(1, int((m / n) * __import__('math').log(2)))

    def add(self, item):
        for i in range(self.num_hashes):
            h = mmh3.hash(str(item), i) % self.size
            self.bit_array |= (1 << h)

    def might_contain(self, item):
        for i in range(self.num_hashes):
            h = mmh3.hash(str(item), i) % self.size
            if not (self.bit_array & (1 << h)):
                return False
        return True
```

### Sizing

Given $n$ expected items and desired false positive rate $p$:

$$m = -\frac{n \ln p}{(\ln 2)^2} \quad k = \frac{m}{n} \ln 2$$

| False positive rate | Bits per element | Hash functions |
| ------------------- | ---------------- | -------------- |
| 1%                  | 9.6              | 7              |
| 0.1%                | 14.4             | 10             |
| 0.01%               | 19.2             | 14             |

:::warning

Bloom filters cannot handle deletion. Once a bit is set, it cannot be cleared without potentially
affecting other elements. If you need deletion, use a counting bloom filter (each position stores a
counter instead of a single bit) or a cuckoo filter.

:::

### Applications

- **Spam filtering**: check if an email's hash is in a known-spam bloom filter
- **Database queries**: Cassandra uses bloom filters to avoid unnecessary disk reads
- **Network routing**: routers use bloom filters to summarise routing tables
- **Cache filtering**: web browsers use bloom filters for malicious URL detection
- **Deduplication**: check if content has been seen before

## Count-Min Sketch

The count-min sketch is a probabilistic data structure for frequency estimation. Like a bloom
filter, it uses hash functions but stores counters instead of bits.

### Structure

$d$ hash functions map to $w$ counters each, giving a $d \times w$ matrix of counters. Each hash
function $h_i$ maps an element to a row and column.

### Operations

| Operation | Algorithm                                 | Time   | Error                   |
| --------- | ----------------------------------------- | ------ | ----------------------- |
| Increment | For each row $i$: `count[i][h_i(x)] += 1` | $O(d)$ | N/A                     |
| Estimate  | Return $\min_i \mathrm{count}[i][h_i(x)]$   | $O(d)$ | $\le \mathrm{true count}$ |
| Space     | $d \times w$ counters                     | N/A    | N/A                     |

The estimate is always an **overestimate**: $\hat{f}(x) \ge f(x)$ with high probability. The error
is bounded by $\epsilon \cdot N$ where $N$ is the total count and $\epsilon = e / w$.

```python
import hashlib

class CountMinSketch:
    """
    Count-min sketch for frequency estimation.
    Space: O(d * w) counters
    Time: O(d) per operation
    Error: estimate <= true_count + (total_count * e / w) with probability >= 1 - delta
    """
    def __init__(self, epsilon=0.01, delta=0.01):
        self.w = int(__import__('math').e / epsilon)
        self.d = int(__import__('math').log(1 / delta))
        self.counts = [[0] * self.w for _ in range(self.d)]
        self.total = 0

    def _hash(self, x, i):
        h = hashlib.md5(f"{i}:{x}".encode()).hexdigest()
        return int(h, 16) % self.w

    def add(self, x, count=1):
        for i in range(self.d):
            self.counts[i][self._hash(x, i)] += count
        self.total += count

    def estimate(self, x):
        return min(self.counts[i][self._hash(x, i)] for i in range(self.d))

    def estimate_range(self, x):
        lower = max(0, self.estimate(x) - self.total * __import__('math').e / self.w)
        upper = self.estimate(x)
        return lower, upper
```

## HyperLogLog

HyperLogLog is a probabilistic algorithm for estimating the cardinality (number of distinct
elements) of a set using very little memory — typically 12 KB for an error rate of about 0.8%.

### Algorithm

1. Hash each element to a binary string
2. Use the first $b$ bits to determine which of $2^b$ registers to update
3. For each register, track the position of the leftmost 1-bit in the remaining bits
4. The estimate is based on the harmonic mean of the register values

$$\hat{n} = \alpha_{m} \cdot m^2 \cdot \left(\sum_{j=1}^{m} 2^{-M[j]}\right)^{-1}$$

where $m = 2^b$ is the number of registers, $M[j]$ is the maximum position of the leftmost 1-bit
seen in register $j$, and $\alpha_m$ is a bias correction constant.

```python
class HyperLogLog:
    """
    HyperLogLog for cardinality estimation.
    Space: O(2^b) registers (typically b=12, so 4096 registers = 12 KB)
    Error: ~1.04 / sqrt(m)
    """
    def __init__(self, b=12):
        self.b = b
        self.m = 1 << b
        self.registers = [0] * self.m
        self.alpha = self._alpha(self.m)

    @staticmethod
    def _alpha(m):
        if m == 16:
            return 0.673
        if m == 32:
            return 0.697
        if m == 64:
            return 0.709
        return 0.7213 / (1 + 1.079 / m)

    def add(self, item):
        import hashlib
        h = int(hashlib.md5(str(item).encode()).hexdigest(), 16)
        idx = h & (self.m - 1)
        w = h >> self.b
        self.registers[idx] = max(self.registers[idx], self._rho(w))

    @staticmethod
    def _rho(w):
        rank = 1
        while w & 1 == 0 and rank < 64:
            w >>= 1
            rank += 1
        return rank

    def count(self):
        import math
        estimate = self.alpha * self.m ** 2 / sum(2.0 ** (-r) for r in self.registers)
        if estimate <= 2.5 * self.m:
            zeros = self.registers.count(0)
            if zeros > 0:
                estimate = self.m * math.log(self.m / zeros)
        return int(estimate)
```

| Registers ($m$) | Memory | Standard error  |
| --------------- | ------ | --------------- |
| 64              | 64 B   | $\approx 13\%$  |
| 1024            | 1 KB   | $\approx 3.3\%$ |
| 4096            | 4 KB   | $\approx 1.6\%$ |
| 16384           | 16 KB  | $\approx 0.8\%$ |

## Cryptographic vs Non-Cryptographic Hashing

| Property             | Non-Cryptographic                 | Cryptographic                                              |
| -------------------- | --------------------------------- | ---------------------------------------------------------- |
| Speed                | Very fast (GB/s)                  | Slower (hundreds of MB/s)                                  |
| Preimage resistance  | No                                | Yes — given $h(x)$, hard to find $x$                       |
| Second preimage      | No                                | Yes — given $x$, hard to find $y \ne x$ with $h(y) = h(x)$ |
| Collision resistance | Weak                              | Yes — hard to find $x, y$ with $h(x) = h(y)$               |
| Examples             | FNV, MurmurHash, xxHash, CityHash | SHA-256, SHA-3, BLAKE3                                     |
| Use case             | Hash tables, fingerprints         | Passwords, signatures, TLS                                 |

:::info

For hash tables, always use non-cryptographic hashes — they are 10-100x faster. Cryptographic hashes
are necessary only when an adversary can choose inputs (e.g., hash DoS attacks). Python switched
from a simple hash to SipHash (a cryptographic hash) in Python 3.4+ specifically to prevent hash
flooding attacks.

:::

## Hash Table Implementation Details

### Python `dict`

Python's `dict` is a highly optimised hash table using open addressing with a compact
representation:

- **Compact hash table** (since Python 3.6): stores entries in a dense array separate from the
  sparse hash index array. This improves memory locality for iteration.
- **Hash randomisation**: `PYTHONHASHSEED` randomises hash values to prevent hash DoS attacks.
- **Growth factor**: starts at 8, grows by approximately $3\times$ on the first resize, then
  $2\times$ subsequently.
- **Load factor**: maintains $2/3$ load factor (never exceeds this).
- **Deleted entries**: uses a special sentinel value, with periodic cleanup during resize.

### Java `HashMap`

- **Separate chaining** with linked lists, converting to red-black trees when a chain exceeds 8
  elements (since Java 8).
- **Load factor**: 0.75 by default. Threshold for tree conversion: 8. Tree-to-list conversion: 6.
- **Initial capacity**: 16 by default. The capacity is always a power of 2.
- **Hash mixing**: applies a secondary hash function to the `hashCode()` result to spread higher
  bits into lower bits (XOR-shift).

### C++ `std::unordered_map`

- **Separate chaining** (typically). The standard does not mandate a specific collision resolution
  strategy.
- **Load factor**: 1.0 by default (`max_load_factor()`).
- **Bucket count**: power-of-two in libstdc++ (GCC), but not required by the standard.
- **Rehash policy**: `rehash(n)` sets the bucket count to at least `n`, `reserve(n)` sets it to
  accommodate `n` elements without rehashing.

## Resize and Rehashing

When the load factor exceeds the threshold, the table must be resized:

1. Allocate a new array of size $m' \gt m$
2. Compute $h'(k)$ for each existing key using the new table size
3. Insert all key-value pairs into the new array

```python
def resize(old_table, new_capacity):
    """
    Resize and rehash. O(n) time where n = number of elements.
    Amortised O(1) per insert because we resize geometrically.
    """
    new_table = HashTable(new_capacity)
    for bucket in old_table.buckets:
        for key, value in bucket:
            new_table.insert(key, value)
    return new_table
```

**Why geometric resizing gives amortised $O(1)$**: if the table grows by factor $c$ when it reaches
load factor $\alpha$, the cost of resizing is $O(n)$ but it only happens every $O(n)$ insertions.
Over a sequence of $n$ insertions, the total resize cost is
$O(n) + O(n/c) + O(n/c^2) + \ldots = O(cn)$, giving $O(c)$ amortised per insertion — a constant.

## Common Pitfalls

### 1. Using Mutable Objects as Hash Keys

If you mutate an object after using it as a hash key, its hash value changes and you can no longer
find it in the table. In Python, using a `list` as a `dict` key raises `TypeError`. Using a custom
object with a hash based on mutable fields silently breaks lookups. Always use immutable keys or
freeze objects before hashing.

### 2. Hash Flooding Attacks

An adversary who can control the keys inserted into a hash table can choose keys that all hash to
the same bucket, degrading performance from $O(1)$ to $O(n)$ per operation. Defences: hash
randomisation (Python's `PYTHONHASHSEED`), SipHash (Python 3.4+), or switching to balanced trees for
long chains (Java 8+).

### 3. Forgetting to Override Both `__hash__` and `__eq__`

In Python, if you override `__eq__` without overriding `__hash__`, the class becomes unhashable. If
you override `__hash__` without overriding `__eq__`, objects that compare equal may hash to
different values. Both must be consistent: if `a == b`, then `hash(a) == hash(b)`.

### 4. Integer Overflow in Hash Computation

When implementing hash functions in languages with fixed-width integers, multiplication can
overflow. In C/C++, signed integer overflow is undefined behaviour; use unsigned integers. In Java,
integer overflow wraps around (which is fine for non-cryptographic hashes). In Python, integers have
arbitrary precision, so overflow is not an issue.

### 5. Poor Choice of Hash Function for the Data Distribution

If your keys have a pattern (e.g., sequential integers, IPv4 addresses in a subnet), a naive hash
function like modulo may map them to a small number of buckets. Always use a hash function with good
avalanche properties, or test your hash function against your actual data distribution.

### 6. Not Handling the Tombstone Problem in Open Addressing

When deleting from an open-addressing table, you cannot simply clear the slot — doing so breaks the
probe chain for elements that were inserted after the deleted element. You must use a "tombstone"
marker (as shown in the linear probing implementation above) and periodically clean up tombstones
during resize.

### 7. Bloom Filter False Positives in Production

Bloom filters are probabilistic. If your application cannot tolerate any false positives (e.g.,
security-critical access control), do not use a bloom filter. If you can tolerate them, size the
filter correctly and monitor the actual false positive rate in production.

### 8. Choosing the Wrong Probabilistic Structure

Use a bloom filter for membership testing (set membership), count-min sketch for frequency
estimation, and HyperLogLog for cardinality estimation. Each is optimised for a different query type
and cannot substitute for another.
