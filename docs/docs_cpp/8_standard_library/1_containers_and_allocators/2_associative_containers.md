---
title: Associative and Unordered Containers
description:
  "C++: Associative and Unordered Containers — `std::map` and `std::set`: Red-Black Tree, O(log n) Operations; Proof of O(log n) Height Bound."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: associative-and-unordered-containers
---

## Associative and Unordered Containers (Maps, Sets)

C++ provides two families of associative containers: **ordered** containers (`std::map`, `std::set`)
backed by balanced binary search trees with $O(\log n)$ operations, and **unordered** containers
(`std::unordered_map`, `std::unordered_set`) backed by hash tables with $O(1)$ average-case
operations. This section covers their internal structure, performance characteristics, hash function
requirements, and guidance on choosing between them.

### `std::map` and `std::set`: Red-Black Tree, O(log n) Operations

`std::map` and `std::set` are associative containers that store elements sorted by key using a
**red-black tree** [N4950 §22.4]. The standard does not mandate red-black trees specifically, but
requires:

- $O(\log n)$ insertion, deletion, and lookup [N4950 §22.4.4.1 Table 83]
- In-order traversal yields sorted keys
- Keys are unique (`std::map`, `std::set`) or may be duplicated (`std::multimap`, `std::multiset`)

A red-black tree is a self-balancing binary search tree with the following properties [N4950
§22.4.4.1]:

1. Every node is either red or black
2. The root is black
3. Every leaf (NIL) is black
4. If a node is red, both children are black
5. Every path from a node to its descendant NIL nodes passes through the same number of black nodes

#### Proof of O(log n) Height Bound

**Theorem.** A red-black tree with $n$ internal nodes has height $h \leq 2 \log_2(n + 1)$.

**Proof.** Define the **black-height** $\mathrm{bh}(x)$ of a node $x$ as the number of black nodes
on any path from $x$ to a leaf (excluding $x$ itself). By property 5, this is well-defined.

**Claim:** A subtree rooted at any node $x$ contains at least $2^{\mathrm{bh}(x)} - 1$ internal
nodes.

We prove this by induction on the height of $x$.

_Base case:_ If $x$ is a leaf (height 0), then $\mathrm{bh}(x) = 0$ and the subtree has 0 internal
nodes $= 2^0 - 1 = 1 - 1 = 0$. Holds.

_Inductive step:_ Let $x$ have height $h \gt 0$ and children $a, b$. Each child has black-height
either $\mathrm{bh}(x)$ (if the child is red) or $\mathrm{bh}(x) - 1$ (if the child is black). In
either case, $\mathrm{bh}(\mathrm{child}) \geq \mathrm{bh}(x) - 1$. By the inductive hypothesis,
each subtree has at least $2^{\mathrm{bh}(x) - 1} - 1$ internal nodes. Therefore:

$$
\mathrm{size}(x) \geq \left(2^{\mathrm{bh}(x) - 1} - 1\right) + \left(2^{\mathrm{bh}(x) - 1} - 1\right) + 1 = 2^{\mathrm{bh}(x)} - 1
$$

Now, at least half the nodes on any root-to-leaf path are black (by property 4: no two consecutive
red nodes). Therefore, if the tree height is $h$:

$$
\mathrm{bh}(\mathrm{root}) \geq \frac{h}{2}
$$

Combining with the claim ($n \geq 2^{\mathrm{bh}(\mathrm{root})} - 1$):

$$
n \geq 2^{h/2} - 1 \implies 2^{h/2} \leq n + 1 \implies h \leq 2 \log_2(n + 1)
$$

QED. Since all operations (search, insert, delete) touch at most $h$ nodes, and $h = O(\log n)$,
every operation runs in $O(\log n)$ time.

```cpp
#include <map>
#include <set>
#include <iostream>
#include <string>

int main() {
    // std::set: stores unique keys in sorted order [N4950 §22.4.6]
    std::set<int> s = {5, 3, 1, 4, 2, 5, 3};  // duplicates ignored
    std::cout << "set: ";
    for (int x : s) std::cout << x << " ";
    // Output: set: 1 2 3 4 5

    // O(log n) lookup [N4950 §22.4.6.4 Table 87]
    if (s.contains(3)) {
        std::cout << "\n3 is in the set\n";
    }

    // std::map: key-value pairs sorted by key [N4950 §22.4.4]
    std::map<std::string, int> ages;
    ages["Alice"] = 30;   // O(log n) insertion
    ages["Bob"] = 25;
    ages["Charlie"] = 35;

    // O(log n) lookup
    auto it = ages.find("Bob");
    if (it != ages.end()) {
        std::cout << "Bob's age: " << it->second << "\n";  // 25
    }

    // In-order traversal yields sorted keys
    std::cout << "map in order:\n";
    for (const auto& [name, age] : ages) {
        std::cout << "  " << name << " -> " << age << "\n";
    }
    // Output (alphabetical by key):
    //   Alice -> 30
    //   Bob -> 25
    //   Charlie -> 35
}
```

:::tip Since C++17, `std::map::try_emplace` is preferred over `operator[]` or `insert` when you want
to insert only if the key is absent, avoiding unnecessary construction of the value [N4950
§22.4.4.4].
:::

```cpp
#include <map>
#include <string>
#include <iostream>

struct Expensive {
    std::string data;
    Expensive(std::string d) : data(std::move(d)) {
        std::cout << "  Constructed Expensive: " << data << "\n";
    }
};

int main() {
    std::map<std::string, Expensive> m;

    // try_emplace only constructs if key is absent [N4950 §22.4.4.4]
    std::cout << "First insert:\n";
    m.try_emplace("key1", "value1");   // Constructs Expensive

    std::cout << "Second insert (same key):\n";
    m.try_emplace("key1", "should_not_construct");  // No construction!

    std::cout << "Third insert (new key):\n";
    m.try_emplace("key2", "value2");   // Constructs Expensive

    for (const auto& [k, v] : m) {
        std::cout << k << " -> " << v.data << "\n";
    }
}
```

### `std::unordered_map` and `std::unordered_set`: Hash Table, O(1) Average

`std::unordered_map` and `std::unordered_set` are **unordered associative containers** that use a
hash table for $O(1)$ average-case insertion, deletion, and lookup [N4950 §22.5]. The standard
specifies that each bucket holds a singly-linked list of elements that hash to the same value, and
rehashing occurs when the load factor exceeds `max_load_factor()` [N4950 §22.5.5].

#### Hash Table Collision Resolution

The standard mandates **separate chaining** for collision resolution [N4950 §22.5.1]: each bucket
contains a singly-linked list of all elements whose key hashes to that bucket index. When two keys
produce the same bucket index (a **collision**), they are stored in the same linked list.

$$
\mathrm{bucket\_index} = H(\mathrm{key}) \mod \mathrm{bucket\_count}
$$

The average chain length equals the load factor:

$$
\mathrm{avg\_chain\_length} = \frac{\mathrm{size}()}{\mathrm{bucket\_count}()} = \mathrm{load\_factor}
$$

With default `max_load_factor = 1.0`, the average chain length is kept below 1.0, meaning most
lookups require at most one equality comparison. When the load factor exceeds `max_load_factor`, the
container **rehashes**: allocates a new bucket array (typically $2\times$ the old count), recomputes
bucket indices for all elements, and deallocates the old array. This is $O(n)$ but occurs
infrequently.

The **load factor** is defined as [N4950 §22.5.5.3]:

$$
\mathrm{load\_factor} = \frac{\mathrm{size}()}{\mathrm{bucket\_count}()}
$$

The default `max_load_factor()` is `1.0` [N4950 §22.5.5.3].

```cpp
#include <unordered_map>
#include <unordered_set>
#include <iostream>
#include <string>

int main() {
    // std::unordered_set: O(1) average lookup [N4950 §22.5.6]
    std::unordered_set<int> us = {5, 3, 1, 4, 2};
    std::cout << "bucket_count=" << us.bucket_count() << "\n";
    std::cout << "load_factor=" << us.load_factor() << "\n";
    std::cout << "max_load_factor=" << us.max_load_factor() << "\n";

    std::cout << "contains(3): " << us.contains(3) << "\n";  // 1

    // std::unordered_map: O(1) average lookup [N4950 §22.5.4]
    std::unordered_map<std::string, int> word_count;
    word_count["hello"] = 1;
    word_count["world"] = 2;

    // Bucket interface [N4950 §22.5.5]
    for (std::size_t i = 0; i < word_count.bucket_count(); ++i) {
        std::cout << "bucket " << i << " has " << word_count.bucket_size(i) << " elements\n";
    }

    // Rehash to a specific bucket count [N4950 §22.5.5.3]
    word_count.rehash(16);
    std::cout << "After rehash(16): bucket_count=" << word_count.bucket_count() << "\n";
}
```

### Hash Function Requirements

The hash function `H` used by `std::unordered_map` and `std::unordered_set` must satisfy [N4950
§22.5.3.2]:

1. `H` is a function object whose return type is `std::size_t`
2. If `h1(k1) == h2(k2)` and `k1 == k2`, then `h1(k1) == h2(k2)` must hold for the same key
3. If `k1 == k2`, then `H(k1) == H(k2)` must hold
4. `H` must not throw exceptions

The default hash `std::hash&lt;T>` is specialized for all arithmetic types, `std::string`,
`std::string_view`, and all standard smart pointer types [N4950 §22.14.3]. For custom types, you
must provide a specialization:

```cpp
#include <unordered_map>
#include <string>
#include <iostream>
#include <cstdint>

struct Point {
    double x, y;
    bool operator==(const Point& other) const {
        return x == other.x && y == other.y;
    }
};

// Custom hash for Point [N4950 §22.14.3]
struct PointHash {
    std::size_t operator()(const Point& p) const noexcept {
        // Combine two hash values using a standard technique
        std::size_t hx = std::hash<double>{}(p.x);
        std::size_t hy = std::hash<double>{}(p.y);
        return hx ^ (hy << 1);  // Simple combining — see boost::hash_combine for better
    }
};

int main() {
    std::unordered_map<Point, std::string, PointHash> locations;
    locations[{1.0, 2.0}] = "origin";
    locations[{3.5, 4.5}] = "somewhere";

    Point query{1.0, 2.0};
    auto it = locations.find(query);
    if (it != locations.end()) {
        std::cout << "Found: " << it->second << "\n";  // "origin"
    }
}
```

### `std::multimap` and Ordered Equivalence

`std::multimap` (and `std::multiset`) allow duplicate keys. Elements with equivalent keys are stored
in insertion order. The `equal_range` member function returns a pair of iterators defining the range
of elements with a given key [N4950 §22.4.4.4]:

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::multimap<std::string, int> scores;

    scores.insert({"Alice", 90});
    scores.insert({"Bob", 85});
    scores.insert({"Alice", 95});
    scores.insert({"Alice", 88});

    // equal_range returns [first, last) of all elements with key "Alice"
    auto [first, last] = scores.equal_range("Alice");
    std::cout << "Alice's scores: ";
    for (auto it = first; it != last; ++it) {
        std::cout << it->second << " ";
    }
    // Output: Alice's scores: 90 95 88  (insertion order preserved)

    std::cout << "\nCount of 'Alice': " << scores.count("Alice") << "\n";
    // Output: Count of 'Alice': 3
}
```

### Choosing Between Ordered and Unordered Containers

```cpp
#include <map>
#include <unordered_map>
#include <iostream>
#include <chrono>
#include <string>
#include <random>

int main() {
    constexpr std::size_t N = 1'000'000;

    // Pre-generate keys
    std::vector<std::string> keys;
    keys.reserve(N);
    for (std::size_t i = 0; i < N; ++i) {
        keys.push_back("key_" + std::to_string(i));
    }

    // Benchmark std::map (red-black tree, O(log n))
    {
        std::map<std::string, int> m;
        auto start = std::chrono::high_resolution_clock::now();
        for (std::size_t i = 0; i < N; ++i) {
            m[keys[i]] = static_cast<int>(i);
        }
        auto end = std::chrono::high_resolution_clock::now();
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
        std::cout << "std::map insert " << N << ": " << ms << " ms\n";

        // Lookup benchmark
        std::mt19937 rng(42);
        start = std::chrono::high_resolution_clock::now();
        for (std::size_t i = 0; i < N; ++i) {
            std::size_t idx = rng() % N;
            volatile auto val = m.find(keys[idx]);
            (void)val;
        }
        end = std::chrono::high_resolution_clock::now();
        ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
        std::cout << "std::map lookup " << N << ": " << ms << " ms\n";
    }

    // Benchmark std::unordered_map (hash table, O(1) avg)
    {
        std::unordered_map<std::string, int> m;
        m.reserve(N);
        auto start = std::chrono::high_resolution_clock::now();
        for (std::size_t i = 0; i < N; ++i) {
            m[keys[i]] = static_cast<int>(i);
        }
        auto end = std::chrono::high_resolution_clock::now();
        auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
        std::cout << "std::unordered_map insert " << N << ": " << ms << " ms\n";

        std::mt19937 rng(42);
        start = std::chrono::high_resolution_clock::now();
        for (std::size_t i = 0; i < N; ++i) {
            std::size_t idx = rng() % N;
            volatile auto val = m.find(keys[idx]);
            (void)val;
        }
        end = std::chrono::high_resolution_clock::now();
        ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
        std::cout << "std::unordered_map lookup " << N << ": " << ms << " ms\n";
    }
}
```

| Criterion             | `map` / `set`                        | `unordered_map` / `unordered_set` |
| --------------------- | ------------------------------------ | --------------------------------- |
| Ordering              | Sorted by key                        | No ordering                       |
| Lookup                | $O(\log n)$ worst case               | $O(1)$ average, $O(n)$ worst case |
| Insert                | $O(\log n)$                          | $O(1)$ average                    |
| Memory                | ~3 pointers per node                 | bucket array + 1 pointer per node |
| Key requirement       | `operator&lt;`                       | `operator==` and hash             |
| Range queries         | Supported (lower_bound, upper_bound) | Not supported                     |
| Iterator invalidation | Only on erase                        | On rehash                         |

:::warning `std::unordered_map` lookup is $O(1)$ on average but $O(n)$ in the worst case (all keys
hash to the same bucket). If adversarial inputs are a concern, consider hash functions resistant to
collision attacks, or use `std::map` for guaranteed $O(\log n)$ worst-case.
:::

### `std::map` Heterogeneous Lookup (C++14)

By default, `std::map::find`, `std::map::count`, and `std::map::lower_bound` accept `const Key&` and
require an exact key type match. If you want to look up a `std::string` key using a
`std::string_view` without constructing a temporary `std::string`, you need a **transparent
comparator** [N4950 §22.4.4.1]. The standard library provides `std::less&lt;void>` (C++14), which
enables heterogeneous lookup when used as the comparator:

```cpp
#include <map>
#include <string>
#include <string_view>
#include <iostream>

int main() {
    // Transparent comparator enables heterogeneous lookup [N4950 §22.4.4.1]
    std::map<std::string, int, std::less<>> m;
    m["hello"] = 1;
    m["world"] = 2;

    // Lookup with string_view — no temporary std::string constructed
    std::string_view sv = "hello";
    auto it = m.find(sv);
    if (it != m.end()) {
        std::cout << "Found: " << it->first << " -> " << it->second << "\n";
    }

    // count, lower_bound, upper_bound, equal_range also support heterogeneous lookup
    std::cout << "count(\"world\"): " << m.count("world") << "\n";
}
```

The mechanism works because `std::less&lt;void>` deduces the argument types and invokes
`operator&lt;` as `a &lt; b` where `a` and `b` may be different types, as long as the comparison is
well-formed [N4950 §22.14.3]. Without `std::less&lt;void>`, calling `m.find(sv)` would construct a
temporary `std::string` from the `std::string_view`, incurring a heap allocation. With heterogeneous
lookup, the comparison `sv &lt; "hello"` and `"hello" &lt; sv` are both valid via
`std::string::operator&lt;` accepting `std::string_view` [N4950 §23.4.5.2.2].

The same transparent comparator technique applies to `std::set`, `std::multimap`, and
`std::multiset`.

### Node Extraction and Insertion: `extract` / `insert` (C++17)

C++17 introduced node handles and the `extract()` / `insert()` API for associative containers [N4950
§22.4.4.4]. A **node handle** (`std::map::node_type`) owns an extracted element including its key
and value. This enables moving elements between containers **without copying or reallocating**:

```cpp
#include <map>
#include <iostream>
#include <string>

int main() {
    std::map<std::string, int> src;
    src["alpha"] = 1;
    src["bravo"] = 2;
    src["charlie"] = 3;

    std::map<std::string, int> dst;
    dst["delta"] = 4;

    // Extract a node from src — no copy, no deallocation
    auto nh = src.extract("bravo");

    if (!nh.empty()) {
        std::cout << "Extracted: " << nh.key() << " -> " << nh.mapped() << "\n";

        // Modify the key before insertion (unique to extract/insert)
        nh.key() = "echo";
        nh.mapped() = 20;

        // Insert into dst — transfers ownership, no allocation
        dst.insert(std::move(nh));
    }

    std::cout << "src: ";
    for (const auto& [k, v] : src) std::cout << k << " ";
    std::cout << "\n";

    std::cout << "dst: ";
    for (const auto& [k, v] : dst) std::cout << k << "(" << v << ") ";
    std::cout << "\n";
}
```

Output:

```
Extracted: bravo -> 2
src: alpha charlie
dst: delta echo(20)
```

This API is critical for performance-sensitive code that needs to transfer elements between maps
(such as sharding or repartitioning), because the alternative — erase from one map, then emplace
into another — involves a redundant deallocation and allocation. With `extract`/`insert`, the node's
heap memory is simply reparented [N4950 §22.4.4.4].

### Red-Black Tree Node Structure

Each node in a `std::map` or `std::set` stores three pointers (parent, left child, right child) plus
a color bit, in addition to the key (and value for `map`). On 64-bit systems, the per-node overhead
is at least 32 bytes:

```
+--------+--------+--------+----------+
| left*  | right* | parent*| key      |
| 8 bytes| 8 bytes| 8 bytes| sizeof(K)|
+--------+--------+--------+----------+
  (plus color bit, alignment padding, and sizeof(V) for map)
```

For `std::map<std::string, int>`, each node costs approximately 48-64 bytes: 24 bytes of tree
pointers + `sizeof(std::string)` (32 bytes) + `sizeof(int)` (4 bytes) + alignment padding. The
default-constructed empty `std::map` has zero heap allocation; the first `insert` allocates the root
node.

### Iterator Invalidation in Associative Containers

Unlike sequence containers, associative containers have simpler invalidation rules [N4950 §22.4.4.1
Table 83]:

| Operation | Iterator effect                      | Pointer/Reference effect             |
| --------- | ------------------------------------ | ------------------------------------ |
| `insert`  | No invalidation                      | No invalidation                      |
| `emplace` | No invalidation                      | No invalidation                      |
| `erase`   | Only iterators to the erased element | Only to the erased element           |
| `clear`   | All invalidated                      | All invalidated                      |
| `swap`    | No invalidation (elements exchanged) | No invalidation (elements exchanged) |

This is a consequence of the node-based structure: inserting a new node allocates a new heap block
that does not affect existing nodes. Erasing a node only frees that specific block.

For `std::unordered_map`, the rules are stricter: **rehashing** invalidates all iterators, pointers,
and references because elements are moved to new bucket locations [N4950 §22.5.5 Table 89].

### `std::unordered_map` Heterogeneous Lookup (C++20)

C++20 extended heterogeneous lookup to unordered containers. By providing a transparent hash and
equality comparator, you can look up keys using a different type without constructing the key:

```cpp
#include <unordered_map>
#include <string>
#include <string_view>
#include <iostream>

// Transparent hash [N4950 §22.14.3]
struct TransparentHash {
    using is_transparent = void;

    auto operator()(std::string_view sv) const noexcept {
        return std::hash<std::string_view>{}(sv);
    }
    auto operator()(const std::string& s) const noexcept {
        return std::hash<std::string>{}(s);
    }
};

// Transparent equality [N4950 §22.5.3.2]
struct TransparentEqual {
    using is_transparent = void;

    template <typename T, typename U>
    bool operator()(const T& a, const U& b) const noexcept {
        return a == b;
    }
};

int main() {
    std::unordered_map<std::string, int, TransparentHash, TransparentEqual> m;
    m["hello"] = 1;
    m["world"] = 2;

    // Lookup with string_view — no temporary std::string constructed
    std::string_view sv = "hello";
    auto it = m.find(sv);
    if (it != m.end()) {
        std::cout << "Found: " << it->first << " -> " << it->second << "\n";
    }
}
```

The `is_transparent` typedef signals to the container that the hash and equality functions accept
heterogeneous types. This enables `find`, `count`, `contains`, and `equal_range` to work with any
type that is comparable to `Key` and hashable.

### Exception Safety of Associative Container Operations

The standard provides the following guarantees [N4950 §22.4.4.4]:

- **`insert` / `emplace`**: If the operation throws (e.g., key comparison throws during tree
  traversal, or the element constructor throws), the container is unchanged (strong guarantee).
- **`erase`**: Never throws (destructors are `noexcept` for standard types).
- **`extract`**: The node handle takes ownership of the extracted element. If the extraction fails
  (key not found), the container is unchanged.
- **`swap`**: Never throws (pointer swap only).
- **`clear`**: Never throws.

For `std::unordered_map`, `rehash` provides the basic guarantee: if an exception occurs during
rehashing (e.g., hash computation throws), the container is in a valid but unspecified state [N4950
§22.5.5.3].

### Common Pitfalls

**1. Mutable keys in `std::set` and `std::map`:** The keys of ordered associative containers must
remain ordered at all times. The iterator types for `std::set` yield `const Key&`, preventing direct
mutation. However, `std::map` iterators yield `std::pair&lt;const Key, T>&`, and the value type is
`std::pair&lt;const Key, T>` — the key is `const`. This is by design: mutating a key violates the
ordering invariant and causes undefined behavior [N4950 §22.4.4.1].

**2. `operator[]` default-inserts:** `m[key]` inserts a default-constructed value if `key` is
absent, then returns a reference to it. This is surprising when used in a read-only context — it
silently modifies the container. Use `m.at(key)` (throws on miss) or `m.find(key)` (returns
iterator) for lookups that should not modify the map.

**3. Reference stability in `std::unordered_map`:** Rehashing invalidates all iterators, pointers,
and references. If you store a reference or pointer to a value and then insert enough elements to
trigger rehash, that reference dangles. Use `reserve()` before inserting to prevent rehashing, or
store indices/keys instead of raw pointers.

**4. Hash collision attacks on `std::unordered_map`:** The default `std::hash` for strings is
deterministic but not cryptographically secure. An adversary who can control keys can craft inputs
that all hash to the same bucket, degrading $O(1)$ lookup to $O(n)$. In security-sensitive contexts
(e.g., HTTP header parsing), use a hash-seeded or randomized hash function, or switch to `std::map`
for guaranteed $O(\log n)$ worst-case.

**5. Forgetting to `reserve()` on `unordered_map`:** The default initial bucket count is small
(typically 1 or a platform-specific minimum). Without `reserve()`, the first few inserts trigger
repeated rehashing, each costing $O(n)$. For a map expected to hold $n$ elements, call
`m.reserve(n)` before inserting to pre-allocate buckets and avoid all intermediate rehashes [N4950
§22.5.5.3].

**6. Using `std::unordered_map` when you need range queries:** `std::unordered_map` provides no
ordering guarantee. Operations like `lower_bound`, `upper_bound`, and `equal_range` in the ordered
sense are not available. If you need to iterate over all keys in a range $[lo, hi]$, use `std::map`
instead.

**7. Erasing while iterating with `operator[]`:** In `std::map`, the pattern `m.erase(m[key])` first
default-inserts `key` (via `operator[]`) and then immediately erases it, causing a redundant
allocation and deallocation. Use `m.erase(m.find(key))` instead, which only erases if the key
exists.

### `std::map` and `std::set` with Custom Comparators

When the default `std::less<Key>` is not suitable (e.g., case-insensitive string comparison),
provide a custom comparator:

```cpp
#include <map>
#include <string>
#include <iostream>
#include <algorithm>
#include <cctype>

struct CaseInsensitiveLess {
    bool operator()(std::string a, std::string b) const {
        std::ranges::transform(a, a.begin(), [](unsigned char c) { return std::tolower(c); });
        std::ranges::transform(b, b.begin(), [](unsigned char c) { return std::tolower(c); });
        return a < b;
    }
};

int main() {
    std::map<std::string, int, CaseInsensitiveLess> m;
    m["Hello"] = 1;
    m["WORLD"] = 2;
    m["hello"] = 3;  // Replaces "Hello" (case-insensitive equal)

    for (const auto& [k, v] : m) {
        std::cout << k << " -> " << v << "\n";
    }
    // Output: hello -> 3
    //         WORLD -> 2
}
```

The custom comparator must define a **strict weak ordering**: irreflexive ($a \lt a$ is false),
asymmetric ($a \lt b$ implies $b \lt a$ is false), and transitive ($a \lt b$ and $b \lt c$ implies
$a \lt c$). Violating these invariants causes undefined behavior.

### `std::unordered_map` Bucket Inspection

Understanding bucket distribution is critical for diagnosing performance problems. A high maximum
bucket size indicates hash collisions:

```cpp
#include <unordered_map>
#include <string>
#include <iostream>
#include <algorithm>
#include <vector>

int main() {
    std::unordered_map<std::string, int> m;

    // Insert many keys
    for (int i = 0; i < 1000; ++i) {
        m["key_" + std::to_string(i)] = i;
    }

    std::cout << "bucket_count: " << m.bucket_count() << "\n";
    std::cout << "load_factor:  " << m.load_factor() << "\n";
    std::cout << "max_load_factor: " << m.max_load_factor() << "\n";

    // Find the largest bucket
    std::size_t max_bucket_size = 0;
    std::size_t max_bucket_idx = 0;
    for (std::size_t i = 0; i < m.bucket_count(); ++i) {
        auto sz = m.bucket_size(i);
        if (sz > max_bucket_size) {
            max_bucket_size = sz;
            max_bucket_idx = i;
        }
    }
    std::cout << "max bucket size: " << max_bucket_size
              << " (bucket " << max_bucket_idx << ")\n";

    // Ideal: max bucket size should be 1 or 2 for a good hash function
    // If max bucket size is > 10, consider improving the hash function
}
```

### Flat Maps and Alternative Data Structures

For performance-critical code where ordered iteration is not needed, consider alternatives to
`std::unordered_map`:

- **`std::vector&lt;std::pair&lt;K,V>>>` + `std::sort` + `std::lower_bound`**: For small maps (fewer
  than ~100 elements), a sorted vector with binary search is faster than a hash table due to cache
  locality. Lookup is $O(\log n)$ but with a very small constant.

- **`boost::flat_map`**: A sorted vector adapter that provides map semantics. Excellent cache
  locality, but insertion is $O(n)$.

- **`absl::flat_hash_map` / `absl::btree_map`**: Google's Abseil library provides highly optimized
  hash maps with SIMD-accelerated probing and B-tree-based ordered maps.

- **`tsl::hopscotch_map` / `tsl::robin_map`**: Open-addressing hash maps with better cache locality
  than `std::unordered_map`'s separate chaining.

## See Also

- [Sequence Containers](./1_sequence_containers.md)
- [Iterator Categories, Traversal, Invalidation](./3_iterators.md)
- [Polymorphic Memory Resources (PMR)](./4_pmr.md)
