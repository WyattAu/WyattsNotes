---
title: Sequence Containers (Vector, Deque, List)
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: sequence-containers
---

## Sequence Containers Memory Models

The C++ standard library provides three primary sequence containers: `std::vector`, `std::deque`,
and `std::list`. Each uses a different memory model with distinct trade-offs in terms of random
access, insertion/deletion performance, cache locality, and iterator invalidation guarantees. This
section covers their internal structure, growth strategies, and practical usage patterns.

### `std::vector`: Contiguous Memory, Capacity, and Reallocation

`std::vector` is a sequence container that encapsulates dynamic-size arrays [N4950 §22.3.11].
Elements are stored contiguously, meaning that a pointer to the first element can be used as a
C-style array. This layout provides $O(1)$ random access via pointer arithmetic and excellent cache
locality, making `std::vector` the default choice for most use cases.

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

The relationship between `size()` and `capacity()` is fundamental. `size()` returns the number of
elements currently stored, while `capacity()` returns the number of elements for which space has
been allocated [N4950 §22.3.11.3]. The invariant is:

$$
\text{size}() \leq \text{capacity}()
$$

`shrink_to_fit()` is a **non-binding request** to reduce `capacity()` to `size()` [N4950
§22.3.11.3]. Implementations are free to ignore it.

### Growth Factor and Amortized O(1) push_back

When `push_back` is called and `size() == capacity()`, the vector must **reallocate**: allocate a
new, larger block, move or copy elements into it, and deallocate the old block. The standard does
not mandate a specific growth factor [N4950 §22.3.11.5], but most major implementations (libstdc++,
libc++, MSVC) use a factor of $\times 2$ (geometric growth).

Geometric growth guarantees **amortized $O(1)$** insertion at the end. Consider inserting $n$
elements starting from an empty vector. If the capacity doubles each time it is exceeded, the total
number of element copies across all reallocations is bounded by:

$$
\sum_{k=0}^{\lceil \log_2 n \rceil} 2^k = 2^{\lceil \log_2 n \rceil + 1} - 1 \leq 4n
$$

Thus the total work for $n$ insertions is $O(n)$, yielding amortized $O(1)$ per insertion [N4950
§22.3.11.5 Table 80].

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

:::info The C++ standard guarantees amortized $O(1)$ `push_back` [N4950 §22.3.11.5 Table 80], but
the exact growth factor is implementation-defined. A factor of 2 is common, and some implementations
(e.g., Facebook's folly) use 1.5 to reduce peak memory usage. :::

### Iterator, Pointer, and Reference Invalidation Rules

Reallocation invalidates all iterators, pointers, and references to elements of the vector [N4950
§22.3.11.5]. This is a critical correctness concern: any iterator obtained before a
reallocation-triggering operation becomes **undefined behavior** if dereferenced afterward.

The invalidation rules for `std::vector` [N4950 §22.3.11.5 Table 80]:

| Operation                | Iterator                                | Pointer         | Reference       |
| ------------------------ | --------------------------------------- | --------------- | --------------- |
| `push_back` (no realloc) | valid                                   | valid           | valid           |
| `push_back` (realloc)    | **invalidated**                         | **invalidated** | **invalidated** |
| `insert` (no realloc)    | valid if position &lt;= insertion point | same            | same            |
| `insert` (realloc)       | **invalidated**                         | **invalidated** | **invalidated** |
| `erase`                  | valid if position &lt; erased element   | same            | same            |
| `pop_back`               | valid if not pointing to last           | same            | same            |
| `reserve` (realloc)      | **invalidated**                         | **invalidated** | **invalidated** |
| `resize` (grow, realloc) | **invalidated**                         | **invalidated** | **invalidated** |
| `swap`                   | valid (refers to exchanged elements)    | valid           | valid           |

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

:::warning After any operation that may cause reallocation (e.g., `push_back` when
`size() == capacity()`), **all** iterators, pointers, and references into the vector are
invalidated. Dereferencing them is undefined behavior. Use `reserve()` proactively if you need
stable iterators. :::

### `std::deque`: Segment-Based Memory, No Reallocation

`std::deque` (double-ended queue) is a sequence container that supports $O(1)$ insertion and
deletion at both the beginning and the end [N4950 §22.3.8]. Unlike `std::vector`, `std::deque` is
not guaranteed to store elements contiguously. Typical implementations use a **map of fixed-size
blocks** (segments):

$$
\text{deque} = \underbrace{[\text{block}_0][\text{block}_1] \cdots [\text{block}_{n-1}]}_{\text{fixed-size segments}}
$$

A central **map array** stores pointers to each block. Insertion at the front or back simply adds to
the first or last block (allocating a new block if the current one is full). This means `push_front`
and `push_back` are both amortized $O(1)$, and **no reallocation of existing elements ever occurs**
[N4950 §22.3.8.4 Table 77].

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

:::tip Use `std::deque` when you need efficient insertion at both ends. Use `std::vector` when you
only need efficient insertion at the end, as `std::vector` has better cache locality and lower
memory overhead per element. :::

Invalidation rules for `std::deque` differ from `std::vector` [N4950 §22.3.8.4 Table 77]:

| Operation                  | Iterator                                     | Pointer | Reference |
| -------------------------- | -------------------------------------------- | ------- | --------- |
| `push_back` / `push_front` | valid                                        | valid   | valid     |
| `insert` at front/back     | **invalidated** if only front/back iterators | valid   | valid     |
| `insert` in middle         | **all invalidated**                          | valid   | valid     |
| `erase` at front/back      | only erased element invalidated              | valid   | valid     |
| `erase` in middle          | **all invalidated**                          | valid   | valid     |

Note: pointers and references to elements are **never invalidated** by insertion or erasure in
`std::deque` (unless the element itself is erased), unlike iterators.

### `std::list`: Doubly-Linked List, Stable Splice

`std::list` is a doubly-linked list that supports bidirectional iteration and $O(1)$ insertion and
deletion at any position, given an iterator [N4950 §22.3.9]. Each element is stored in a separate
node, with forward and backward pointers to adjacent nodes. This means:

- No contiguous storage guarantee
- No random access ($O(n)$ to access the $k$-th element)
- $O(1)$ insertion and erasure at any position (given an iterator)
- Stable addresses: iterators, pointers, and references to non-erased elements are never invalidated
  [N4950 §22.3.9.5 Table 78]

The most distinctive operation is `splice`, which transfers elements between lists in $O(1)$ time
**without copying or moving elements** [N4950 §22.3.9.5]. This is a pointer manipulation, not a
copy:

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

:::info `std::list::splice` is the only standard container operation that transfers ownership of
nodes between containers. The spliced elements' iterators, pointers, and references remain valid and
now refer to the same elements within the destination container [N4950 §22.3.9.5]. :::

### Choosing Between Sequence Containers

| Criterion             | `vector`                 | `deque`                   | `list`                       |
| --------------------- | ------------------------ | ------------------------- | ---------------------------- |
| Random access         | $O(1)$                   | $O(1)$ (higher constant)  | $O(n)$                       |
| `push_back`           | Amortized $O(1)$         | Amortized $O(1)$          | $O(1)$                       |
| `push_front`          | $O(n)$                   | Amortized $O(1)$          | $O(1)$                       |
| Insert in middle      | $O(n)$                   | $O(n)$                    | $O(1)$ with iterator         |
| Cache locality        | Excellent                | Good                      | Poor                         |
| Memory overhead       | Low (capacity &gt; size) | Moderate (block pointers) | High (2-3 pointers per node) |
| Iterator invalidation | High (on realloc)        | Moderate                  | Low (only on erase)          |
| Stable addresses      | No                       | No                        | Yes                          |

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

### `std::vector&lt;bool>`: A Specialization That Is Not a Container

`std::vector&lt;bool>` is a **partial specialization** of `std::vector` that stores one bit per
element instead of one byte [N4950 §22.3.11.2]. It packs bits into `unsigned long` words, reducing
memory usage by 8x but introducing several surprising behaviors:

```cpp
#include <vector>
#include <iostream>
#include <cassert>

int main() {
    std::vector<bool> vb = {true, false, true, true, false};

    // operator[] returns a PROXY object, not bool&
    auto ref = vb[0];
    (void)ref;

    // The following does NOT compile:
    // bool& bad = vb[0];  // error: cannot convert proxy to bool&

    // You CAN assign through the proxy
    vb[1] = true;

    // But taking the address of an element is not straightforward:
    // bool* p = &vb[0];  // error: address of proxy, not a real bool

    // Reference invalidation on swap:
    std::vector<bool> other = {false, true, false};
    vb.swap(other);
    // After swap, any saved references/proxies from 'vb' refer to 'other' elements
}
```

The proxy reference (`std::vector&lt;bool>::reference`) is a library-defined class that overloads
`operator bool`, `operator=`, and `operator~`. This causes problems with generic code that assumes
`T&` semantics from `operator[]` [N4950 §22.3.11.2]. Specifically, `std::vector&lt;bool>` does not
satisfy the container requirements in [N4950 §22.2] because its elements are not addressable.

:::warning `std::vector&lt;bool>` is widely regarded as a design mistake. Scott Meyers' "Effective
STL" (Item 18) recommends using `std::deque&lt;bool>` or `boost::dynamic_bitset` instead. For new
code, consider `std::vector&lt;uint8_t>` if you need addressable elements, or a dedicated bitset
library if you need compact storage. :::

### `std::vector` Exception Safety: Strong Guarantee for `push_back`

The C++ Standard provides a strong exception-safety guarantee for `std::vector::push_back` [N4950
§22.3.11.5]: if `push_back` throws (either because the element's copy/move constructor throws or
because memory allocation fails), the vector's state is rolled back to its prior state — no elements
are lost and the vector remains valid.

This guarantee is achieved by allocating the new buffer **before** moving elements into it. If any
element move/copy throws during the reallocation, the new buffer is deallocated and the original
buffer remains intact:

```cpp
#include <vector>
#include <iostream>

struct ThrowingCopy {
    int value;
    static int copy_count;
    static int throw_after;

    ThrowingCopy(int v) : value(v) {}
    ThrowingCopy(const ThrowingCopy& other) : value(other.value) {
        if (++copy_count >= throw_after) {
            throw std::runtime_error("copy limit reached");
        }
    }
};

int ThrowingCopy::copy_count = 0;
int ThrowingCopy::throw_after = 5;

int main() {
    std::vector<ThrowingCopy> v;
    v.reserve(2);
    v.emplace_back(1);
    v.emplace_back(2);

    // This push_back will trigger reallocation (capacity=2, size=2)
    // The reallocation copies existing elements to new buffer.
    // If copy throws, the vector remains valid with its original elements.
    ThrowingCopy::copy_count = 0;
    ThrowingCopy::throw_after = 1;  // Throw on first copy during realloc

    try {
        v.push_back(ThrowingCopy(3));
    } catch (const std::runtime_error& e) {
        std::cout << "Caught: " << e.what() << "\n";
    }

    // Vector is still valid — strong guarantee
    std::cout << "Vector size after exception: " << v.size() << "\n";
    for (const auto& tc : v) {
        std::cout << "  value=" << tc.value << "\n";
    }
}
```

Note: If `T`'s move constructor is `noexcept`, the vector will use move instead of copy during
reallocation, which is both faster and less likely to throw. This is why `noexcept` move
constructors are critical for performance-critical types stored in vectors.

### Small Buffer Optimization (SBO) and `std::string`

While `std::vector` does not perform SBO (its elements are always on the heap once allocated),
`std::string` typically implements **Small String Optimization**: short strings (usually &lt; 15-23
bytes depending on implementation) are stored inline in the string object itself, avoiding heap
allocation [N4950 §23.4.5]. This is an implementation detail, not mandated by the Standard:

```cpp
#include <string>
#include <iostream>

int main() {
    std::string s1 = "hi";          // Likely SBO: no heap allocation
    std::string s2(100, 'x');       // Too large for SBO: heap allocation

    std::cout << "sizeof(std::string) = " << sizeof(std::string) << "\n";
    std::cout << "s1 capacity = " << s1.capacity() << "\n";
    std::cout << "s2 capacity = " << s2.capacity() << "\n";
    // Typical 64-bit output:
    // sizeof(std::string) = 32
    // s1 capacity = 15
    // s2 capacity = 100
}
```

The capacity of a default-constructed or short string reveals the SBO threshold. libstdc++ uses 15
bytes, libc++ uses 22 bytes, and MSVC uses 15 bytes on 64-bit platforms.

## See Also

- [Associative and Unordered Containers](./2_associative_containers.md)
- [Iterator Categories, Traversal, Invalidation](./3_iterators.md)
- [Polymorphic Memory Resources (PMR)](./4_pmr.md)
