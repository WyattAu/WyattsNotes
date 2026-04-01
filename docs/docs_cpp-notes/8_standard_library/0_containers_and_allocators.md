---
title: Containers and Allocators
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: containers-and-allocators
---

## 1. Sequence Containers (Vector, Deque, List) Memory Models

### 1.1 `std::vector`: Contiguous Memory, Capacity, and Reallocation

`std::vector` is a sequence container that encapsulates dynamic-size arrays [N4950 §22.3.11]. Elements are stored contiguously, meaning that a pointer to the first element can be used as a C-style array. This layout provides $O(1)$ random access via pointer arithmetic and excellent cache locality, making `std::vector` the default choice for most use cases.

```cpp
#include <vector>
#include <iostream>
#include <cassert>

int main() {
    std::vector<int> v;
    v.reserve(10);
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);

    // Contiguous guarantee [N4950 §22.3.11.1 Table 79]
    int* p = v.data();
    assert(p[0] == 1);
    assert(p[1] == 2);
    assert(p[2] == 3);

    // Random access is O(1) [N4950 §22.3.11.1 Table 79]
    std::cout << "v[1] = " << v[1] << "\n";  // 2

    std::cout << "size=" << v.size() << " capacity=" << v.capacity() << "\n";
    // size=3 capacity=10 (reserved)
}
```

The relationship between `size()` and `capacity()` is fundamental. `size()` returns the number of elements currently stored, while `capacity()` returns the number of elements for which space has been allocated [N4950 §22.3.11.3]. The invariant is:

$$
\text{size}() \leq \text{capacity}()
$$

`shrink_to_fit()` is a **non-binding request** to reduce `capacity()` to `size()` [N4950 §22.3.11.3]. Implementations are free to ignore it.

### 1.2 Growth Factor and Amortized O(1) push_back

When `push_back` is called and `size() == capacity()`, the vector must **reallocate**: allocate a new, larger block, move or copy elements into it, and deallocate the old block. The standard does not mandate a specific growth factor [N4950 §22.3.11.5], but most major implementations (libstdc++, libc++, MSVC) use a factor of $\times 2$ (geometric growth).

Geometric growth guarantees **amortized $O(1)$** insertion at the end. Consider inserting $n$ elements starting from an empty vector. If the capacity doubles each time it is exceeded, the total number of element copies across all reallocations is bounded by:

$$
\sum_{k=0}^{\lceil \log_2 n \rceil} 2^k = 2^{\lceil \log_2 n \rceil + 1} - 1 \leq 4n
$$

Thus the total work for $n$ insertions is $O(n)$, yielding amortized $O(1)$ per insertion [N4950 §22.3.11.5 Table 80].

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v;

    // Observe growth pattern
    std::size_t last_cap = 0;
    for (int i = 0; i < 30; ++i) {
        v.push_back(i);
        if (v.capacity() != last_cap) {
            std::cout << "Reallocated at size=" << v.size()
                      << " new capacity=" << v.capacity() << "\n";
            last_cap = v.capacity();
        }
    }
}
```

:::info
The C++ standard guarantees amortized $O(1)$ `push_back` [N4950 §22.3.11.5 Table 80], but the exact growth factor is implementation-defined. A factor of 2 is common, and some implementations (e.g., Facebook's folly) use 1.5 to reduce peak memory usage.
:::

### 1.3 Iterator, Pointer, and Reference Invalidation Rules

Reallocation invalidates all iterators, pointers, and references to elements of the vector [N4950 §22.3.11.5]. This is a critical correctness concern: any iterator obtained before a reallocation-triggering operation becomes **undefined behavior** if dereferenced afterward.

The invalidation rules for `std::vector` [N4950 §22.3.11.5 Table 80]:

| Operation                | Iterator                             | Pointer         | Reference       |
| ------------------------ | ------------------------------------ | --------------- | --------------- |
| `push_back` (no realloc) | valid                                | valid           | valid           |
| `push_back` (realloc)    | **invalidated**                      | **invalidated** | **invalidated** |
| `insert` (no realloc)    | valid if position <= insertion point | same            | same            |
| `insert` (realloc)       | **invalidated**                      | **invalidated** | **invalidated** |
| `erase`                  | valid if position < erased element   | same            | same            |
| `pop_back`               | valid if not pointing to last        | same            | same            |
| `reserve` (realloc)      | **invalidated**                      | **invalidated** | **invalidated** |
| `resize` (grow, realloc) | **invalidated**                      | **invalidated** | **invalidated** |
| `swap`                   | valid (refers to exchanged elements) | valid           | valid           |

```cpp
#include <vector>
#include <iostream>
#include <cassert>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    // Pre-reserve to avoid reallocation during push_back
    v.reserve(100);

    // Safe: no reallocation will occur because capacity is sufficient
    auto it = v.begin();
    std::cout << "Before: *it = " << *it << "\n";  // 1

    v.push_back(6);  // No reallocation: capacity was 100
    std::cout << "After:  *it = " << *it << "\n";  // Still 1, iterator valid

    // Demonstrate invalidation
    std::vector<int> v2;
    v2.push_back(1);
    v2.push_back(2);

    auto it2 = v2.begin();  // points to element 1
    std::cout << "Before realloc: *it2 = " << *it2 << "\n";

    // Force reallocation by exhausting capacity
    // capacity is likely 2, so push_back triggers realloc
    v2.push_back(3);  // May or may not reallocate depending on initial capacity

    // it2 is now INVALIDATED — undefined behavior to dereference
    // std::cout << *it2 << "\n";  // UB!

    // Safe approach: store indices, not iterators
    std::size_t idx = 0;
    v2.push_back(4);
    if (idx < v2.size()) {
        std::cout << "v2[" << idx << "] = " << v2[idx] << "\n";  // Safe
    }
}
```

:::warning
After any operation that may cause reallocation (e.g., `push_back` when `size() == capacity()`), **all** iterators, pointers, and references into the vector are invalidated. Dereferencing them is undefined behavior. Use `reserve()` proactively if you need stable iterators.
:::

### 1.4 `std::deque`: Segment-Based Memory, No Reallocation

`std::deque` (double-ended queue) is a sequence container that supports $O(1)$ insertion and deletion at both the beginning and the end [N4950 §22.3.8]. Unlike `std::vector`, `std::deque` is not guaranteed to store elements contiguously. Typical implementations use a **map of fixed-size blocks** (segments):

$$
\text{deque} = \underbrace{[\text{block}_0][\text{block}_1] \cdots [\text{block}_{n-1}]}_{\text{fixed-size segments}}
$$

A central **map array** stores pointers to each block. Insertion at the front or back simply adds to the first or last block (allocating a new block if the current one is full). This means `push_front` and `push_back` are both amortized $O(1)$, and **no reallocation of existing elements ever occurs** [N4950 §22.3.8.4 Table 77].

```cpp
#include <deque>
#include <iostream>

int main() {
    std::deque<int> d;

    // O(1) insertion at both ends [N4950 §22.3.8.4 Table 77]
    d.push_back(1);
    d.push_back(2);
    d.push_front(0);
    d.push_front(-1);

    for (int x : d) std::cout << x << " ";
    // Output: -1 0 1 2

    // Random access is O(1) but with higher constant than vector
    std::cout << "\nd[2] = " << d[2] << "\n";  // 1

    // No reallocation of existing elements occurs [N4950 §22.3.8.4]
    // Iterators remain valid unless the element is erased
}
```

:::tip
Use `std::deque` when you need efficient insertion at both ends. Use `std::vector` when you only need efficient insertion at the end, as `std::vector` has better cache locality and lower memory overhead per element.
:::

Invalidation rules for `std::deque` differ from `std::vector` [N4950 §22.3.8.4 Table 77]:

| Operation                  | Iterator                                     | Pointer | Reference |
| -------------------------- | -------------------------------------------- | ------- | --------- |
| `push_back` / `push_front` | valid                                        | valid   | valid     |
| `insert` at front/back     | **invalidated** if only front/back iterators | valid   | valid     |
| `insert` in middle         | **all invalidated**                          | valid   | valid     |
| `erase` at front/back      | only erased element invalidated              | valid   | valid     |
| `erase` in middle          | **all invalidated**                          | valid   | valid     |

Note: pointers and references to elements are **never invalidated** by insertion or erasure in `std::deque` (unless the element itself is erased), unlike iterators.

### 1.5 `std::list`: Doubly-Linked List, Stable Splice

`std::list` is a doubly-linked list that supports bidirectional iteration and $O(1)$ insertion and deletion at any position, given an iterator [N4950 §22.3.9]. Each element is stored in a separate node, with forward and backward pointers to adjacent nodes. This means:

- No contiguous storage guarantee
- No random access ($O(n)$ to access the $k$-th element)
- $O(1)$ insertion and erasure at any position (given an iterator)
- Stable addresses: iterators, pointers, and references to non-erased elements are never invalidated [N4950 §22.3.9.5 Table 78]

The most distinctive operation is `splice`, which transfers elements between lists in $O(1)$ time **without copying or moving elements** [N4950 §22.3.9.5]. This is a pointer manipulation, not a copy:

```cpp
#include <list>
#include <iostream>

int main() {
    std::list<int> a = {1, 2, 3, 4, 5};
    std::list<int> b = {10, 20, 30};

    // splice transfers nodes without copying [N4950 §22.3.9.5]
    auto pos = a.begin();  // points to 1
    std::advance(pos, 2);  // points to 3

    a.splice(pos, b);  // Insert all of b before position 3 in a

    std::cout << "a: ";
    for (int x : a) std::cout << x << " ";
    // Output: a: 1 2 10 20 30 3 4 5

    std::cout << "\nb: ";
    std::cout << "b.size() = " << b.size() << "\n";  // 0 — b is now empty

    // Pointers/iterators to spliced elements remain valid
    // and now refer to elements in 'a'
}
```

:::info
`std::list::splice` is the only standard container operation that transfers ownership of nodes between containers. The spliced elements' iterators, pointers, and references remain valid and now refer to the same elements within the destination container [N4950 §22.3.9.5].
:::

### 1.6 Choosing Between Sequence Containers

| Criterion             | `vector`              | `deque`                   | `list`                       |
| --------------------- | --------------------- | ------------------------- | ---------------------------- |
| Random access         | $O(1)$                | $O(1)$ (higher constant)  | $O(n)$                       |
| `push_back`           | Amortized $O(1)$      | Amortized $O(1)$          | $O(1)$                       |
| `push_front`          | $O(n)$                | Amortized $O(1)$          | $O(1)$                       |
| Insert in middle      | $O(n)$                | $O(n)$                    | $O(1)$ with iterator         |
| Cache locality        | Excellent             | Good                      | Poor                         |
| Memory overhead       | Low (capacity > size) | Moderate (block pointers) | High (2-3 pointers per node) |
| Iterator invalidation | High (on realloc)     | Moderate                  | Low (only on erase)          |
| Stable addresses      | No                    | No                        | Yes                          |

```cpp
#include <vector>
#include <deque>
#include <list>
#include <iostream>
#include <chrono>
#include <random>

template <typename Container>
void benchmark_push_back(std::size_t n, const char* name) {
    Container c;
    auto start = std::chrono::high_resolution_clock::now();
    for (std::size_t i = 0; i < n; ++i) {
        c.push_back(static_cast<int>(i));
    }
    auto end = std::chrono::high_resolution_clock::now();
    auto ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();
    std::cout << name << " push_back " << n << " elements: " << ms << " ms\n";
}

int main() {
    constexpr std::size_t N = 10'000'000;
    benchmark_push_back<std::vector<int>>(N, "vector");
    benchmark_push_back<std::deque<int>>(N, "deque");
    benchmark_push_back<std::list<int>>(N, "list");
}
```

## 2. Associative and Unordered Containers (Maps, Sets)

### 2.1 `std::map` and `std::set`: Red-Black Tree, O(log n) Operations

`std::map` and `std::set` are associative containers that store elements sorted by key using a **red-black tree** [N4950 §22.4]. The standard does not mandate red-black trees specifically, but requires:

- $O(\log n)$ insertion, deletion, and lookup [N4950 §22.4.4.1 Table 83]
- In-order traversal yields sorted keys
- Keys are unique (`std::map`, `std::set`) or may be duplicated (`std::multimap`, `std::multiset`)

A red-black tree is a self-balancing binary search tree with the following properties [N4950 §22.4.4.1]:

1. Every node is either red or black
2. The root is black
3. Every leaf (NIL) is black
4. If a node is red, both children are black
5. Every path from a node to its descendant NIL nodes passes through the same number of black nodes

These constraints guarantee that the **height** of the tree is at most $2 \log_2(n + 1)$, which bounds all operations to $O(\log n)$.

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

:::tip
Since C++17, `std::map::try_emplace` is preferred over `operator[]` or `insert` when you want to insert only if the key is absent, avoiding unnecessary construction of the value [N4950 §22.4.4.4].
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

### 2.2 `std::unordered_map` and `std::unordered_set`: Hash Table, O(1) Average

`std::unordered_map` and `std::unordered_set` are **unordered associative containers** that use a hash table for $O(1)$ average-case insertion, deletion, and lookup [N4950 §22.5]. The standard specifies that each bucket holds a singly-linked list of elements that hash to the same value, and rehashing occurs when the load factor exceeds `max_load_factor()` [N4950 §22.5.5].

The **load factor** is defined as:

$$
\text{load\_factor} = \frac{\text{size}()}{\text{bucket\_count}()}
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

### 2.3 Hash Function Requirements

The hash function `H` used by `std::unordered_map` and `std::unordered_set` must satisfy [N4950 §22.5.3.2]:

1. `H` is a function object whose return type is `std::size_t`
2. If `h1(k1) == h2(k2)` and `k1 == k2`, then `h1(k1) == h2(k2)` must hold for the same key
3. If `k1 == k2`, then `H(k1) == H(k2)` must hold
4. `H` must not throw exceptions

The default hash `std::hash<T>` is specialized for all arithmetic types, `std::string`, `std::string_view`, and all standard smart pointer types [N4950 §22.14.3]. For custom types, you must provide a specialization:

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

### 2.4 Choosing Between Ordered and Unordered Containers

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
| Key requirement       | `operator<`                          | `operator==` and hash             |
| Range queries         | Supported (lower_bound, upper_bound) | Not supported                     |
| Iterator invalidation | Only on erase                        | On rehash                         |

:::warning
`std::unordered_map` lookup is $O(1)$ on average but $O(n)$ in the worst case (all keys hash to the same bucket). If adversarial inputs are a concern, consider hash functions resistant to collision attacks, or use `std::map` for guaranteed $O(\log n)$ worst-case.
:::

## 3. Iterator Categories, Traversal, and Invalidation

### 3.1 Legacy Iterator Categories

The C++ standard defines six **iterator categories** [N4950 §25.3], forming a refinement hierarchy:

$$
\text{input} \subset \text{forward} \subset \text{bidirectional} \subset \text{random-access}
$$

$$
\text{output} \quad (\text{not comparable with input})
$$

$$
\text{contiguous} \subset \text{random-access}
$$

Each category adds capabilities:

| Category                        | Capabilities [N4950 §25.3.4]                           |
| ------------------------------- | ------------------------------------------------------ |
| **LegacyInputIterator**         | `++it`, `*it`, `it == end`, single-pass                |
| **LegacyOutputIterator**        | `*it = value`, `++it`, single-pass                     |
| **LegacyForwardIterator**       | Multi-pass, default-constructible, `it++` returns copy |
| **LegacyBidirectionalIterator** | `--it`, multi-pass                                     |
| **LegacyRandomAccessIterator**  | `it + n`, `it - n`, `it[n]`, `<`, `>`, `<=`, `>=`      |
| **LegacyContiguousIterator**    | Points to contiguous elements (e.g., vector iterators) |

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <forward_list>
#include <iterator>
#include <type_traits>

int main() {
    // RandomAccessIterator: vector, array, string [N4950 §25.3.4.8]
    using VecIt = std::vector<int>::iterator;
    static_assert(std::random_access_iterator<VecIt>);
    static_assert(!std::bidirectional_iterator<VecIt> || true);  // random-access is bidirectional

    // BidirectionalIterator: list, map, set [N4950 §25.3.4.7]
    using ListIt = std::list<int>::iterator;
    static_assert(std::bidirectional_iterator<ListIt>);
    static_assert(!std::random_access_iterator<ListIt>);

    // ForwardIterator: forward_list, unordered containers [N4950 §25.3.4.6]
    using FwdIt = std::forward_list<int>::iterator;
    static_assert(std::forward_iterator<FwdIt>);
    static_assert(!std::bidirectional_iterator<FwdIt>);

    // ContiguousIterator: vector, array [N4950 §25.3.4.9]
    static_assert(std::contiguous_iterator<VecIt>);

    std::cout << "All iterator category checks passed.\n";
}
```

### 3.2 Sentinel Iterators (C++20) vs Traditional End Iterators

C++20 introduced the **sentinel** concept [N4950 §25.3.5]. A sentinel is a type that can be compared with an iterator to determine the end of a range, but is **not itself an iterator**. The key interface is `std::sentinel_for<S, I>`, which requires that `S` and `I` be comparable with `==` and `!=` [N4950 §25.3.5.2].

```cpp
#include <iostream>
#include <concepts>
#include <iterator>

// A sentinel for null-terminated strings [N4950 §25.3.5]
struct NullTerminatedSentinel {};

// Iterator for null-terminated strings
class CStringIterator {
    const char* ptr_;
public:
    using iterator_category = std::contiguous_iterator_tag;
    using value_type = char;
    using difference_type = std::ptrdiff_t;
    using pointer = const char*;
    using reference = const char&;

    explicit CStringIterator(const char* p) : ptr_(p) {}
    reference operator*() const { return *ptr_; }
    CStringIterator& operator++() { ++ptr_; return *this; }
    CStringIterator operator++(int) { auto tmp = *this; ++ptr_; return tmp; }
    CStringIterator operator+(std::ptrdiff_t n) const { return CStringIterator(ptr_ + n); }
    friend bool operator==(CStringIterator it, NullTerminatedSentinel) { return *it.ptr_ == '\0'; }
    friend bool operator==(NullTerminatedSentinel, CStringIterator it) { return *it.ptr_ == '\0'; }
    friend std::ptrdiff_t operator-(CStringIterator a, CStringIterator b) { return a.ptr_ - b.ptr_; }
};

// Custom range for null-terminated strings
class CStringRange {
    const char* str_;
public:
    explicit CStringRange(const char* s) : str_(s) {}
    CStringIterator begin() const { return CStringIterator(str_); }
    NullTerminatedSentinel end() const { return {}; }
};

int main() {
    const char* msg = "Hello, C++20 sentinels!";

    // Traditional approach: find length first
    std::size_t len = 0;
    while (msg[len] != '\0') ++len;
    for (std::size_t i = 0; i < len; ++i) {
        std::cout << msg[i];
    }
    std::cout << "\n";

    // Sentinel approach: no length calculation needed
    CStringRange range(msg);
    for (char c : range) {
        std::cout << c;
    }
    std::cout << "\n";

    // Standard sentinels
    // std::default_sentinel: pairs with counted_iterator [N4950 §25.5.3]
    // std::unreachable_sentinel: always compares unequal [N4950 §25.5.4]
    std::cout << "Sentinel demo complete.\n";
}
```

:::info
The standard library provides `std::default_sentinel` (used with `std::counted_iterator`) and `std::unreachable_sentinel` (a sentinel that never compares equal to any iterator, used as a hint to the optimizer that a loop will not reach it) [N4950 §25.5].
:::

### 3.3 Iterator Invalidation Rules Per Container Type

Understanding iterator invalidation is critical for correctness. The rules vary by container type and operation [N4950 §22]:

| Container                       | Reallocation               | Insert (middle)            | Erase                 | push_back                        |
| ------------------------------- | -------------------------- | -------------------------- | --------------------- | -------------------------------- |
| `vector`                        | All invalidated            | All invalidated            | At/after erased       | May invalidate all               |
| `deque`                         | N/A                        | All iters invalidated      | All iters invalidated | Valid (iters at end invalidated) |
| `list`                          | N/A                        | Valid                      | Only erased           | Valid                            |
| `forward_list`                  | N/A                        | Valid                      | Only erased           | Valid                            |
| `map`/`set`                     | N/A                        | Valid                      | Only erased           | N/A                              |
| `unordered_map`/`unordered_set` | On rehash: all invalidated | On rehash: all invalidated | Only erased           | On rehash: all invalidated       |

```cpp
#include <vector>
#include <list>
#include <deque>
#include <map>
#include <iostream>
#include <cassert>

void demo_vector_invalidation() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    auto it = v.begin() + 2;  // points to 3

    v.insert(v.begin() + 1, 99);  // Insert before position 1
    // it is invalidated if reallocation occurred

    // Safe: re-obtain iterator
    it = v.begin() + 3;  // now points to 3 (shifted by insertion)
    std::cout << "After insert: v[3] = " << *it << "\n";  // 3
}

void demo_list_stable_iterators() {
    std::list<int> l = {1, 2, 3, 4, 5};
    auto it = l.begin();
    std::advance(it, 2);  // points to 3

    l.insert(l.begin(), 99);  // Insert at beginning
    // it is STILL VALID and still points to 3 [N4950 §22.3.9.5]
    std::cout << "List after insert: *it = " << *it << "\n";  // 3

    l.erase(l.begin());  // Erase 99
    // it is STILL VALID [N4950 §22.3.9.5]
    std::cout << "List after erase: *it = " << *it << "\n";  // 3
}

void demo_associative_stable_iterators() {
    std::map<int, std::string> m = {{1, "one"}, {2, "two"}, {3, "three"}};
    auto it = m.find(2);  // iterator to {2, "two"}

    m.insert({4, "four"});
    // it is STILL VALID [N4950 §22.4.4.5]
    std::cout << "Map after insert: " << it->second << "\n";  // "two"

    m.erase(m.find(1));  // Erase key 1
    // it is STILL VALID (we erased a different element)
    std::cout << "Map after erase: " << it->second << "\n";  // "two"
}

int main() {
    demo_vector_invalidation();
    demo_list_stable_iterators();
    demo_associative_stable_iterators();
}
```

### 3.4 Iterator Categories Demonstrated: Algorithm Compatibility

Different algorithms require different iterator categories. For example, `std::sort` requires random-access iterators, while `std::find` only requires input iterators [N4950 §25.7]:

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <algorithm>
#include <numeric>

int main() {
    // std::sort requires RandomAccessIterator [N4950 §25.7.7]
    std::vector<int> v = {5, 3, 1, 4, 2};
    std::sort(v.begin(), v.end());  // OK: vector iterators are random-access

    // std::list has bidirectional iterators — cannot use std::sort directly
    std::list<int> l = {5, 3, 1, 4, 2};
    // std::sort(l.begin(), l.end());  // ERROR: list::iterator is not RandomAccessIterator

    // Use list::sort member function instead [N4950 §22.3.9.5]
    l.sort();

    // std::find works with any InputIterator [N4950 §25.7.2]
    auto vit = std::find(v.begin(), v.end(), 3);
    auto lit = std::find(l.begin(), l.end(), 3);

    // std::reverse works with BidirectionalIterator [N4950 §25.7.9]
    std::reverse(l.begin(), l.end());  // OK: list iterators are bidirectional

    // std::accumulate works with InputIterator [N4950 §25.7.4]
    int sum = std::accumulate(v.begin(), v.end(), 0);

    std::cout << "Sorted vector: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\nSum: " << sum << "\n";

    std::cout << "Reversed list: ";
    for (int x : l) std::cout << x << " ";
    std::cout << "\n";
}
```

## 4. Polymorphic Memory Resources (PMR) and Monotonic Buffers

### 4.1 `std::pmr::memory_resource`: The Polymorphic Allocator Interface

C++17 introduced **polymorphic memory resources** (PMR) in `<memory_resource>` [N4950 §23.10]. PMR decouples container allocation strategy from the container type itself, enabling containers to use different allocation strategies without changing the container's type.

The central abstraction is `std::pmr::memory_resource` [N4950 §23.10.2], an abstract base class with three virtual functions:

```cpp
class memory_resource {
public:
    virtual ~memory_resource() = default;

    void* allocate(std::size_t bytes, std::size_t alignment = alignof(std::max_align_t));
    void deallocate(void* p, std::size_t bytes, std::size_t alignment = alignof(std::max_align_t));

    bool is_equal(const memory_resource& other) const noexcept;

private:
    virtual void* do_allocate(std::size_t bytes, std::size_t alignment) = 0;
    virtual void do_deallocate(void* p, std::size_t bytes, std::size_t alignment) = 0;
    virtual bool do_is_equal(const memory_resource& other) const noexcept = 0;
};
```

The public `allocate` / `deallocate` functions check alignment and size constraints before delegating to the private virtual functions [N4950 §23.10.2.2].

`std::pmr::polymorphic_allocator<T>` [N4950 §23.10.8] is a concrete allocator class that wraps a `memory_resource*`. Standard containers parameterized on the allocator can use `polymorphic_allocator` to gain polymorphic allocation:

```cpp
#include <memory_resource>
#include <vector>
#include <iostream>
#include <cassert>

int main() {
    // Default-constructed polymorphic_allocator uses new_delete_resource()
    // [N4950 §23.10.8.1]
    std::pmr::polymorphic_allocator<int> alloc;

    // Vector using polymorphic allocator [N4950 §22.3.11.1]
    std::vector<int, std::pmr::polymorphic_allocator<int>> v(alloc);
    v.push_back(1);
    v.push_back(2);
    v.push_back(3);

    std::cout << "PMR vector: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";

    // The resource() method returns the underlying memory_resource
    std::cout << "Resource: " << v.get_allocator().resource() << "\n";
}
```

### 4.2 `std::pmr::monotonic_buffer_resource`: Arena Allocation

`std::pmr::monotonic_buffer_resource` [N4950 §23.10.5] implements **arena allocation**: memory is allocated from an initial buffer, and when that buffer is exhausted, a new buffer is obtained from an upstream resource. Critically, **individual deallocations are no-ops** --- all memory is released when the resource itself is destroyed.

This makes `monotonic_buffer_resource` ideal for scenarios with many short-lived allocations:

$$
\text{allocate}(n) = O(1) \quad \text{deallocate}(n) = O(1) \text{ (no-op)}
$$

$$
\text{destroy}() = O(1) \text{ (releases all buffers at once)}
$$

```cpp
#include <memory_resource>
#include <vector>
#include <string>
#include <iostream>
#include <array>

int main() {
    // Stack buffer for initial allocations [N4950 §23.10.5]
    std::array<std::byte, 4096> buffer;

    // monotonic_buffer_resource: arena allocator [N4950 §23.10.5]
    // First uses 'buffer', then falls back to new_delete_resource()
    std::pmr::monotonic_buffer_resource pool{
        buffer.data(), buffer.size(),
        std::pmr::new_delete_resource()
    };

    // All containers using 'pool' allocate from the arena
    std::pmr::vector<std::pmr::string> strings(&pool);

    strings.emplace_back("Hello");
    strings.emplace_back("Polymorphic");
    strings.emplace_back("Memory");
    strings.emplace_back("Resources");

    std::cout << "Strings:\n";
    for (const auto& s : strings) {
        std::cout << "  \"" << s << "\"\n";
    }

    // No individual deallocations needed
    // All memory is released when 'pool' is destroyed
    std::cout << "pool upstream: " << pool.upstream_resource() << "\n";

    // Explicit release (rarely needed; happens on destruction)
    pool.release();
    std::cout << "Pool released.\n";
}
```

:::tip
`monotonic_buffer_resource` is perfect for parsing, JSON processing, AST construction, and any scenario where many objects are created and destroyed together. Since individual `deallocate` calls are no-ops, allocation is extremely fast.
:::

### 4.3 `std::pmr::unsynchronized_pool_resource`

`std::pmr::unsynchronized_pool_resource` [N4950 §23.10.4] is a general-purpose pool allocator that manages a set of pools, one for each commonly-used allocation size. It provides:

- **Fast allocation**: typically faster than `new` for small objects
- **Thread-unsafe**: must not be used from multiple threads simultaneously (use `synchronized_pool_resource` for thread safety)
- **Proper deallocation**: unlike `monotonic_buffer_resource`, individual deallocations work correctly

```cpp
#include <memory_resource>
#include <vector>
#include <iostream>
#include <vector>

int main() {
    // unsynchronized_pool_resource: pool allocator [N4950 §23.10.4]
    // Manages pools for different size classes
    std::pmr::unsynchronized_pool_resource pool;

    std::pmr::vector<int> v1(&pool);
    std::pmr::vector<double> v2(&pool);
    std::pmr::vector<std::pmr::string> v3(&pool);

    for (int i = 0; i < 100; ++i) v1.push_back(i);
    for (int i = 0; i < 50; ++i) v2.push_back(i * 1.5);
    for (int i = 0; i < 20; ++i) v3.emplace_back("item_" + std::to_string(i));

    // Individual deallocations work correctly
    v1.clear();  // Frees memory back to pool
    v2.clear();  // Frees memory back to pool

    std::cout << "v1 empty: " << v1.empty() << "\n";
    std::cout << "v3 size: " << v3.size() << "\n";
    std::cout << "Pool still managing v3's memory.\n";

    // All pool memory released on pool destruction
}
```

### 4.4 PMR Resource Hierarchy

The PMR library provides a hierarchy of resources [N4950 §23.10]:

```
memory_resource (abstract base) [N4950 §23.10.2]
├── new_delete_resource() [N4950 §23.10.3] — uses global operator new/delete
├── null_memory_resource() [N4950 §23.10.3] — throws on allocate
├── monotonic_buffer_resource [N4950 §23.10.5] — arena, no individual dealloc
├── unsynchronized_pool_resource [N4950 §23.10.4] — pool, single-threaded
└── synchronized_pool_resource [N4950 §23.10.4] — pool, thread-safe
```

Each resource can have an **upstream resource** that it falls back to when its own resources are exhausted [N4950 §23.10.2]. The default upstream is `new_delete_resource()`.

### 4.5 Complete Example: Arena Allocation with PMR

```cpp
#include <memory_resource>
#include <vector>
#include <string>
#include <iostream>
#include <array>
#include <chrono>
#include <fstream>

struct Employee {
    int id;
    std::pmr::string name;
    double salary;

    Employee(int i, std::pmr::string n, double s, std::pmr::memory_resource* mr)
        : id(i), name(std::move(n), mr), salary(s) {}
};

int main() {
    constexpr std::size_t ARENA_SIZE = 64 * 1024;  // 64 KB arena
    std::array<std::byte, ARENA_SIZE> buffer;

    // Create arena with stack buffer, falling back to new/delete
    std::pmr::monotonic_buffer_resource arena{
        buffer.data(), buffer.size(),
        std::pmr::new_delete_resource()
    };

    // All allocations below come from the arena
    std::pmr::vector<Employee> employees(&arena);

    // Emplace constructs Employee in-place; the string member also uses arena
    employees.emplace_back(1, "Alice Johnson", 95000.0, &arena);
    employees.emplace_back(2, "Bob Smith", 88000.0, &arena);
    employees.emplace_back(3, "Charlie Brown", 72000.0, &arena);
    employees.emplace_back(4, "Diana Prince", 105000.0, &arena);
    employees.emplace_back(5, "Eve Williams", 91000.0, &arena);

    // Report
    std::pmr::string report(&arena);
    report += "Employee Report\n";
    report += "===============\n";

    double total_salary = 0.0;
    for (const auto& emp : employees) {
        report += "  [" + std::pmr::to_string(emp.id) + "] " + emp.name
                + " — $" + std::pmr::to_string(emp.salary) + "\n";
        total_salary += emp.salary;
    }

    report += "\nTotal payroll: $" + std::pmr::to_string(total_salary) + "\n";
    report += "Average salary: $" + std::pmr::to_string(total_salary / employees.size()) + "\n";

    std::cout << report;

    // Memory accounting [N4950 §23.10.5]
    std::cout << "\n--- Memory Accounting ---\n";
    // monotonic_buffer_resource does not expose bytes allocated
    // (it only knows about its buffer blocks)
    // For detailed tracking, use a custom memory_resource wrapper

    // Arena cleanup: O(1) — just destroy the resource
    std::cout << "Arena cleanup is O(1) — no per-object destruction overhead.\n";
    arena.release();
}
```

:::warning
When using `monotonic_buffer_resource`, remember that `deallocate` is a no-op. If you create container A, then container B, and A still holds references to memory allocated from B's objects, those references may dangle if B is destroyed and its memory is recycled. Arena allocation is safest when all allocations share the same lifetime scope.
:::

### 4.6 Integration Pattern: Dependency Injection of Memory Resources

A powerful PMR pattern is **dependency injection**: functions and classes accept a `memory_resource*` parameter, allowing callers to control the allocation strategy:

```cpp
#include <memory_resource>
#include <vector>
#include <string>
#include <iostream>
#include <array>

class Parser {
public:
    explicit Parser(std::pmr::memory_resource* mr = std::pmr::get_default_resource())
        : tokens_(mr), ast_nodes_(mr) {}

    void parse(const std::string& input) {
        // Tokenize and parse, allocating all tokens and AST nodes from the injected resource
        for (char c : input) {
            if (c != ' ' && c != '\n') {
                tokens_.push_back(c);
            }
        }
    }

    const std::pmr::vector<char>& tokens() const { return tokens_; }
    std::size_t token_count() const { return tokens_.size(); }

private:
    std::pmr::vector<char> tokens_;
    std::pmr::vector<int> ast_nodes_;
};

int main() {
    // Scenario 1: Default allocation (uses global new/delete)
    {
        Parser parser;  // uses get_default_resource()
        parser.parse("hello world");
        std::cout << "Default: " << parser.token_count() << " tokens\n";
    }

    // Scenario 2: Arena allocation (fast, bulk cleanup)
    {
        std::array<std::byte, 1024> buffer;
        std::pmr::monotonic_buffer_resource arena{buffer.data(), buffer.size()};
        Parser parser(&arena);  // inject arena
        parser.parse("arena allocation demo");
        std::cout << "Arena: " << parser.token_count() << " tokens\n";
        // All memory released when arena goes out of scope
    }

    // Scenario 3: Pool allocation (reusable)
    {
        std::pmr::unsynchronized_pool_resource pool;
        Parser parser(&pool);  // inject pool
        parser.parse("pool allocation demo");
        std::cout << "Pool: " << parser.token_count() << " tokens\n";
        // Pool memory reused across allocations
    }
}
```

This pattern allows the same `Parser` class to be used in different performance contexts without modification, simply by injecting a different memory resource.
