---
title: Associative and Unordered Containers
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

These constraints guarantee that the **height** of the tree is at most $2 \log_2(n + 1)$, which
bounds all operations to $O(\log n)$.

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
§22.4.4.4]. :::

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
collision attacks, or use `std::map` for guaranteed $O(\log n)$ worst-case. :::

## See Also

- [Sequence Containers](./1_sequence_containers.md)
- [Iterator Categories, Traversal, Invalidation](./3_iterators.md)
- [Polymorphic Memory Resources (PMR)](./4_pmr.md)
