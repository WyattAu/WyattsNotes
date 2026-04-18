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
\mathrm{input} \subset \mathrm{forward} \subset \mathrm{bidirectional} \subset \mathrm{random-access}
$$

$$
\mathrm{output} \quad (\mathrm{not comparable with input})
$$

$$
\mathrm{contiguous} \subset \mathrm{random-access}
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

### Iterator Traits

Every iterator must expose a set of associated types through `std::iterator_traits` [N4950 §25.3.3].
These traits allow algorithms to determine iterator properties at compile time:

| Trait               | Description                                              |
| ------------------- | -------------------------------------------------------- |
| `difference_type`   | Signed integer type for distance between iterators       |
| `value_type`        | Type of the element the iterator points to               |
| `pointer`           | Pointer-to-element type                                  |
| `reference`         | Reference-to-element type                                |
| `iterator_category` | Legacy category tag (e.g., `random_access_iterator_tag`) |

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <iterator>

int main() {
    using VecIt = std::vector<int>::iterator;
    using ListIt = std::list<int>::iterator;

    std::cout << "vector::iterator traits:\n";
    std::cout << "  category: "
              << (std::is_same_v<std::iterator_traits<VecIt>::iterator_category,
                                std::random_access_iterator_tag> ? "random_access" : "other")
              << "\n";
    std::cout << "  value_type: "
              << (std::is_same_v<std::iterator_traits<VecIt>::value_type, int> ? "int" : "other")
              << "\n";
    std::cout << "  difference_type: "
              << (std::is_same_v<std::iterator_traits<VecIt>::difference_type, std::ptrdiff_t>
                  ? "ptrdiff_t" : "other")
              << "\n";

    std::cout << "list::iterator traits:\n";
    std::cout << "  category: "
              << (std::is_same_v<std::iterator_traits<ListIt>::iterator_category,
                                std::bidirectional_iterator_tag> ? "bidirectional" : "other")
              << "\n";
    return 0;
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

:::info
The standard library provides `std::default_sentinel` (used with `std::counted_iterator`)
and `std::unreachable_sentinel` (a sentinel that never compares equal to any iterator, used as a
hint to the optimizer that a loop will not reach it) [N4950 §25.5].
:::

### `std::counted_iterator` and `std::default_sentinel`

`std::counted_iterator` wraps an iterator and a count. It pairs with `std::default_sentinel`:

```cpp
#include <iostream>
#include <iterator>
#include <vector>

int main() {
    std::vector<int> data = {10, 20, 30, 40, 50};

    std::counted_iterator it(data.begin(), 3);
    std::default_sentinel_t end;

    for (; it != end; ++it) {
        std::cout << *it << " ";
    }
    std::cout << "\n";
    // Output: 10 20 30
    return 0;
}
```

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

### Why Vector Invalidates All Iterators on Insert

`std::vector` stores elements in a contiguous array. When the capacity is exceeded, the vector
allocates a new, larger array, copies (or moves) all elements to the new array, and frees the old
array. All iterators, pointers, and references to elements in the old array are invalidated because
the old memory is deallocated.

The reallocation strategy is typically geometric growth (capacity doubles), which amortizes the cost
of reallocation across insertions. The amortized cost of `push_back` is O(1), but any individual
`push_back` may trigger a reallocation costing O(n).

### Unordered Container Invalidation on Rehash

`std::unordered_map` and `std::unordered_set` store elements in a hash table. When the load factor
exceeds `max_load_factor()`, the container **rehashes**: it allocates a new bucket array and
re-inserts all elements. During rehash, all iterators are invalidated because elements are moved to
different buckets.

```cpp
#include <iostream>
#include <unordered_map>

int main() {
    std::unordered_map<int, int> m;
    m.max_load_factor(0.5);  // Force frequent rehashing

    auto it = m.begin();
    m.insert({1, 10});
    // it may be invalidated if rehash occurred

    // Safe pattern: re-obtain iterators after insertions
    m.insert({2, 20});
    it = m.find(1);  // Fresh iterator
    return 0;
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

### Algorithm Requirements Quick Reference

| Algorithm               | Minimum Iterator Requirement             |
| ----------------------- | ---------------------------------------- |
| `std::find`             | Input                                    |
| `std::count`            | Input                                    |
| `std::for_each`         | Input                                    |
| `std::copy`             | Input (source), Output (dest)            |
| `std::transform`        | Input (source), Output (dest)            |
| `std::accumulate`       | Input                                    |
| `std::reverse`          | Bidirectional                            |
| `std::next_permutation` | Bidirectional                            |
| `std::sort`             | RandomAccess                             |
| `std::nth_element`      | RandomAccess                             |
| `std::partial_sort`     | RandomAccess                             |
| `std::lower_bound`      | RandomAccess (or Forward on associative) |
| `std::binary_search`    | RandomAccess                             |
| `std::shuffle`          | RandomAccess                             |
| `std::stable_sort`      | RandomAccess                             |

### Proxy Iterators

Some containers use **proxy iterators** where `*it` returns a proxy object instead of a reference to
the actual element. The canonical example is `std::vector<bool>`, which stores bits packed into
words. Dereferencing its iterator returns a temporary proxy object, not a `bool&`:

```cpp
#include <iostream>
#include <vector>
#include <type_traits>

int main() {
    std::vector<bool> bits = {true, false, true};

    // *bits.begin() returns a proxy object, not bool&
    auto ref = *bits.begin();
    // static_assert(std::is_same_v<decltype(ref), bool&>);  // FAILS
    static_assert(!std::is_lvalue_reference_v<decltype(ref)>);  // PASSES

    std::cout << std::boolalpha;
    std::cout << ref << "\n";  // true

    // The proxy is assignable
    *bits.begin() = false;
    std::cout << bits[0] << "\n";  // false
    return 0;
}
```

Proxy iterators complicate generic code because they violate the assumption that `*it` returns a
reference. C++20 ranges handle this correctly via `std::ranges::range_reference_t`, which returns
the proxy type rather than requiring a true reference.

### Const Iterators vs Non-Const Iterators

Every container provides both `iterator` and `const_iterator` types. The `begin()`/`end()` methods
have const and non-const overloads:

```cpp
#include <iostream>
#include <vector>

int main() {
    std::vector<int> v = {1, 2, 3};

    std::vector<int>::iterator it = v.begin();           // Non-const
    std::vector<int>::const_iterator cit = v.cbegin();    // Always const

    *it = 10;     // OK: can modify through non-const iterator
    // *cit = 10; // ERROR: cannot modify through const iterator

    const std::vector<int> cv = {4, 5, 6};
    // std::vector<int>::iterator cit2 = cv.begin();  // ERROR: returns const_iterator
    std::vector<int>::const_iterator cit2 = cv.begin();  // OK

    // C++11: cbegin/cend always return const_iterator
    auto it2 = v.cbegin();  // Type is const_iterator
    return 0;
}
```

## Common Pitfalls

### Pitfall 1: Using Invalidated Iterators

This is the most common iterator-related bug. It compiles and may run without crashing on some
platforms (especially in debug builds with debug allocators), but is undefined behavior:

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};
    auto it = v.begin();  // Points to 1

    v.push_back(4);  // May cause reallocation, invalidating it

    // UB: it may be invalidated
    // std::cout << *it << "\n";

    // Safe: re-obtain iterator after modification
    it = v.begin();
    std::cout << *it << "\n";  // OK
    return 0;
}
```

### Pitfall 2: Erasing in a Loop

Erasing an element invalidates the iterator to that element. The `erase` method returns an iterator
to the next element, which must be used to continue iteration:

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5, 2, 6, 2, 7};

    // WRONG: using invalidated iterator
    // for (auto it = v.begin(); it != v.end(); ++it) {
    //     if (*it == 2) v.erase(it);  // it is invalidated after erase
    // }

    // CORRECT: use erase return value
    for (auto it = v.begin(); it != v.end(); ) {
        if (*it == 2) {
            it = v.erase(it);  // Returns iterator to next element
        } else {
            ++it;
        }
    }

    // C++20: use std::erase_if
    std::erase_if(v, [](int x) { return x == 2; });

    std::cout << "Remaining: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";
    return 0;
}
```

### Pitfall 3: Off-by-One with `end()`

The `end()` iterator points **past the last element** — it is not dereferenceable:

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};

    auto last = v.end();
    --last;  // Now points to 3
    std::cout << *last << "\n";  // OK: 3

    // auto it = v.end();
    // std::cout << *it << "\n";  // UB: end iterator is not dereferenceable
    return 0;
}
```

### Pitfall 4: Iterator Invalidation with `reserve`

`reserve` only guarantees that `push_back` won't reallocate until the reserved capacity is exceeded.
But if a reallocation was needed to satisfy the reservation, all iterators are invalidated:

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3};
    auto it = v.begin();

    v.reserve(1000);  // May reallocate (if capacity &lt; 1000)
    // it is potentially invalidated

    it = v.begin();  // Re-obtain
    std::cout << *it << "\n";  // OK
    return 0;
}
```

:::
