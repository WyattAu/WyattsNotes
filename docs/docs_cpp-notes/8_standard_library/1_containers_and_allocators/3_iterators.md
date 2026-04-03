---
title: Iterator Categories, Traversal, and Invalidation
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: iterator-categories-traversal-invalidation
---

## Iterator Categories, Traversal, and Invalidation

Iterators are the glue between containers and algorithms in the C++ standard library. Understanding
iterator categories is essential for knowing which algorithms can be used with which containers.
This section covers the six legacy iterator categories, the C++20 sentinel model, per-container
invalidation rules, and algorithm compatibility constraints.

### Legacy Iterator Categories

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

| Category                        | Capabilities [N4950 §25.3.4]                                  |
| ------------------------------- | ------------------------------------------------------------- |
| **LegacyInputIterator**         | `++it`, `*it`, `it == end`, single-pass                       |
| **LegacyOutputIterator**        | `*it = value`, `++it`, single-pass                            |
| **LegacyForwardIterator**       | Multi-pass, default-constructible, `it++` returns copy        |
| **LegacyBidirectionalIterator** | `--it`, multi-pass                                            |
| **LegacyRandomAccessIterator**  | `it + n`, `it - n`, `it[n]`, `&lt;`, `&gt;`, `&lt;=`, `&gt;=` |
| **LegacyContiguousIterator**    | Points to contiguous elements (e.g., vector iterators)        |

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

### Sentinel Iterators (C++20) vs Traditional End Iterators

C++20 introduced the **sentinel** concept [N4950 §25.3.5]. A sentinel is a type that can be compared
with an iterator to determine the end of a range, but is **not itself an iterator**. The key
interface is `std::sentinel_for&lt;S, I>`, which requires that `S` and `I` be comparable with `==`
and `!=` [N4950 §25.3.5.2].

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

:::info The standard library provides `std::default_sentinel` (used with `std::counted_iterator`)
and `std::unreachable_sentinel` (a sentinel that never compares equal to any iterator, used as a
hint to the optimizer that a loop will not reach it) [N4950 §25.5]. :::

### Iterator Invalidation Rules Per Container Type

Understanding iterator invalidation is critical for correctness. The rules vary by container type
and operation [N4950 §22]:

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

### Iterator Categories Demonstrated: Algorithm Compatibility

Different algorithms require different iterator categories. For example, `std::sort` requires
random-access iterators, while `std::find` only requires input iterators [N4950 §25.7]:

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

## See Also

- [Sequence Containers](./1_sequence_containers.md)
- [Associative and Unordered Containers](./2_associative_containers.md)
- [Polymorphic Memory Resources (PMR)](./4_pmr.md)
