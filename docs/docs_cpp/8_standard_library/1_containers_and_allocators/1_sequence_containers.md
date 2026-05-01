---
title: Sequence Containers (Vector, Deque, List)
description:
description: >-
  C++: Sequence Containers (Vector, Deque, List) — Sequence Containers Memory Models; `std::vector`: Contiguous Memory, Capacity, and Reallocation.
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
\mathrm{size}() \leq \mathrm{capacity}()
$$

`shrink_to_fit()` is a **non-binding request** to reduce `capacity()` to `size()` [N4950
§22.3.11.3]. Implementations are free to ignore it.

### Internal Layout of `std::vector`

A `std::vector` is typically implemented as three pointers [N4950 §22.3.11.1]:

```
┌──────────────────────────────────────────────────┐
│  _M_start    _M_finish         _M_end_of_storage  │
│  ↓            ↓                  ↓               │
│  ┌─────┬─────┬─────┬─────┬───┬─────┬─────┬─────┐  │
│  │  1  │  2  │  3  │  ?  │...│  ?  │  ?  │  ?  │  │
│  └─────┴─────┴─────┴─────┴───┴─────┴─────┴─────┘  │
│  ◄── size() ──►◄──── capacity() - size() ────►   │
│  ◄──────────── capacity() ──────────────────────► │
└──────────────────────────────────────────────────┘
```

- `_M_start` points to the beginning of the allocated block.
- `_M_finish` points one past the last constructed element (`size() = _M_finish - _M_start`).
- `_M_end_of_storage` points one past the allocated capacity
  (`capacity() = _M_end_of_storage - _M_start`).

This three-pointer structure means `sizeof(std::vector<int>) == 24` on 64-bit systems, regardless of
the number of elements. The vector itself is always on the stack (or as part of another object);
only the element storage is on the heap.

```cpp
#include <vector>
#include <iostream>

int main() {
    std::cout << "sizeof(std::vector<int>): " << sizeof(std::vector<int>) << "\n";
    std::cout << "sizeof(std::vector<double>): " << sizeof(std::vector<double>) << "\n";
    // Both print 24 on 64-bit (three pointers, independent of T)
}
```

### Growth Factor and Amortized O(1) push_back

When `push_back` is called and `size() == capacity()`, the vector must **reallocate**: allocate a
new, larger block, move or copy elements into it, and deallocate the old block. The standard does
not mandate a specific growth factor [N4950 §22.3.11.5], but most major implementations (libstdc++,
libc++, MSVC) use a factor of $\times 2$ (geometric growth).

#### Formal Amortized Analysis Proof

We prove that geometric growth with factor $\alpha \gt 1$ yields amortized $O(1)$ per `push_back`.

**Theorem.** Starting from an empty vector, inserting $n$ elements by `push_back` with geometric
growth factor $\alpha$ incurs total element-copy cost $O(n)$, hence amortized $O(1)$ per insertion.

**Proof.** Let $c_k$ denote the capacity after the $k$-th reallocation, with $c_0 = 1$. Then
$c_k = \lceil \alpha^k \rceil$. The total number of element copies across all reallocations is the
sum of capacities at each reallocation step:

$$
C(n) = \sum_{k=0}^{\lceil \log_\alpha n \rceil} c_k \leq \sum_{k=0}^{\lceil \log_\alpha n \rceil} \alpha^k = \frac{\alpha^{\lceil \log_\alpha n \rceil + 1} - 1}{\alpha - 1} \leq \frac{\alpha \cdot n}{\alpha - 1}
$$

For $\alpha = 2$, this gives $C(n) \leq 2n$, so total copies are at most $2n$ for $n$ insertions,
yielding amortized cost of 2 element copies per insertion.

For $\alpha = 1.5$, we get $C(n) \leq 3n$. Each insertion is still amortized $O(1)$, but the
constant is slightly worse. QED.

#### Why 1.5x Can Be Preferred Over 2x

Although both factors give amortized $O(1)$, the choice of growth factor affects **peak memory
usage**. Consider a vector that just reallocated from capacity $c$ to capacity $\alpha c$. Before
the old buffer is freed, the vector temporarily holds $\alpha c$ bytes of allocated (but unused)
memory. The **peak allocated memory** at this point is $c + \alpha c = c(1 + \alpha)$.

For $\alpha = 2$: peak = $3c$ (the old buffer plus the new buffer of size $2c$). For $\alpha = 1.5$:
peak = $2.5c$.

More critically, a factor of exactly 2 can lead to the allocator being unable to reuse freed memory.
When the vector grows from $c$ to $2c$, the old block of size $c$ is freed. On the next reallocation
from $2c$ to $4c$, the old block of size $2c$ is freed. If the heap allocator places blocks
contiguously, the freed block of size $c$ or $2c$ may be too small to hold the next allocation of
$4c$, forcing the allocator to find a completely new region. With $\alpha = 1.5$, the old block of
size $c$ is freed when growing to $1.5c$, and the next reallocation needs $2.25c$. Because
$c + 1.5c = 2.5c \gt 2.25c$, the previously freed space can sometimes be reused.

This is why some production allocators (e.g., Facebook's folly `fbvector`) use a factor of 1.5.

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
(e.g., Facebook's folly) use 1.5 to reduce peak memory usage.
:::

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
stable iterators.
:::

### `std::deque`: Segment-Based Memory, No Reallocation

`std::deque` (double-ended queue) is a sequence container that supports $O(1)$ insertion and
deletion at both the beginning and the end [N4950 §22.3.8]. Unlike `std::vector`, `std::deque` is
not guaranteed to store elements contiguously. Typical implementations use a **map of fixed-size
blocks** (segments):

$$
\mathrm{deque} = \underbrace{[\mathrm{block}_0][\mathrm{block}_1] \cdots [\mathrm{block}_{n-1}]}_{\mathrm{fixed-size segments}}
$$

A central **map array** stores pointers to each block. Insertion at the front or back simply adds to
the first or last block (allocating a new block if the current one is full). This means `push_front`
and `push_back` are both amortized $O(1)$, and **no reallocation of existing elements ever occurs**
[N4950 §22.3.8.4 Table 77].

#### Deque Segment Layout

```
Map array (central control block):
┌────────┬────────┬────────┬────────┬────────┐
│ block0 │ block1 │ block2 │ block3 │ block4 │
│  ptr   │  ptr   │  ptr   │  ptr   │  ptr   │
└───┬────┴───┬────┴───┬────┴───┬────┴───┬────┘
    │        │        │        │        │
    ▼        ▼        ▼        ▼        ▼
┌────────┐┌────────┐┌────────┐┌────────┐┌────────┐
│ elem   ││ elem   ││ elem   ││ elem   ││ elem   │
│  0..15 ││ 16..31 ││ 32..47 ││ 48..63 ││ 64..79 │
└────────┘└────────┘└────────┘└────────┘└────────┘
  front
  ◄───────
```

Each block typically holds a power-of-two number of elements (e.g., 16 or 512 bytes worth). The map
array itself is a small heap-allocated array of pointers. When the map array fills up, it is
reallocated (but the element blocks are never moved). This means:

- **Random access** requires two pointer dereferences (map lookup, then element access), giving
  $O(1)$ with a higher constant than `std::vector`.
- **No contiguous guarantee** — you cannot pass `d.data()` to a C API expecting a flat array and
  expect all elements to be contiguous.

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
memory overhead per element.
:::

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

#### Node Overhead

Each `std::list` node allocates a separate heap block containing:

```
┌──────────┬──────────┬──────────┬──────────┐
│  prev*   │  next*   │ element  │ padding  │
│ (8 bytes)│ (8 bytes)│ (sizeof(T))│         │
└──────────┴──────────┴──────────┴──────────┘
```

On 64-bit systems, the per-node overhead is 16 bytes (two pointers) plus any alignment padding. For
`std::list<int>` (4-byte `int`), the node is typically 24 bytes: 16 bytes of metadata + 4 bytes of
data + 4 bytes of padding to 8-byte alignment. This is a 6x overhead compared to storing `int`
values in a `std::vector`.

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
now refer to the same elements within the destination container [N4950 §22.3.9.5].
:::

### `std::array`: Fixed-Size, Zero Overhead

`std::array` is a fixed-size container that wraps a C-style array with the standard container
interface [N4950 §22.3.7]. It has no heap allocation, no dynamic growth, and zero overhead compared
to a raw array. Since C++17, all member functions of `std::array` are `constexpr`, enabling
compile-time computation.

```cpp
#include <array>
#include <iostream>
#include <algorithm>

int main() {
    // Fully constexpr since C++17 [N4950 §22.3.7]
    constexpr std::array<int, 5> arr = {5, 3, 1, 4, 2};

    constexpr auto sorted = [&]() {
        std::array<int, 5> copy = arr;
        std::sort(copy.begin(), copy.end());
        return copy;
    }();

    static_assert(sorted[0] == 1);
    static_assert(sorted[4] == 5);

    std::cout << "sizeof(std::array<int,5>) = " << sizeof(std::array<int, 5>) << "\n";
    // 20 bytes (5 * sizeof(int)), same as int[5]

    // Bounds-checked access
    try {
        std::cout << arr.at(10) << "\n";  // throws std::out_of_range
    } catch (const std::out_of_range& e) {
        std::cout << "Caught: " << e.what() << "\n";
    }
}
```

Key properties:

- `sizeof(std::array<T, N>) == N * sizeof(T)` — no padding, no overhead [N4950 §22.3.7.1].
- Aggregate initialization: `std::array<int, 3> a = {1, 2, 3}`.
- No iterator invalidation: the container never reallocates.
- `at()` provides bounds-checked access with `std::out_of_range` on failure [N4950 §22.3.7.2].
- `operator[]` does **not** bounds-check (same as raw arrays).

### Choosing Between Sequence Containers

| Criterion             | `vector`                 | `deque`                   | `list`                       | `array`            |
| --------------------- | ------------------------ | ------------------------- | ---------------------------- | ------------------ |
| Random access         | $O(1)$                   | $O(1)$ (higher constant)  | $O(n)$                       | $O(1)$             |
| `push_back`           | Amortized $O(1)$         | Amortized $O(1)$          | $O(1)$                       | N/A                |
| `push_front`          | $O(n)$                   | Amortized $O(1)$          | $O(1)$                       | N/A                |
| Insert in middle      | $O(n)$                   | $O(n)$                    | $O(1)$ with iterator         | N/A                |
| Cache locality        | Excellent                | Good                      | Poor                         | Excellent          |
| Memory overhead       | Low (capacity &gt; size) | Moderate (block pointers) | High (2-3 pointers per node) | None               |
| Iterator invalidation | High (on realloc)        | Moderate                  | Low (only on erase)          | None               |
| Stable addresses      | No                       | No                        | Yes                          | Yes (stack/static) |
| Heap allocation       | Yes (for elements)       | Yes (for blocks + map)    | Yes (per node)               | No                 |
| Size                  | Dynamic                  | Dynamic                   | Dynamic                      | Fixed at compile   |

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
library if you need compact storage.
:::

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

The capacity of a default-constructed or short string reveals the SSO threshold. libstdc++ uses 15
bytes, libc++ uses 22 bytes, and MSVC uses 15 bytes on 64-bit platforms.

### Common Pitfalls

**1. Reserving too much or too little.** `reserve(n)` allocates capacity for at least `n` elements
but never reduces capacity below `size()`. If you reserve a massive capacity and then discard most
elements, the memory is not returned until the vector is destroyed or `shrink_to_fit()` is called
(and even then, the request is non-binding) [N4950 §22.3.11.3]. Conversely, not reserving at all
before a known-size insertion loop causes $O(n \log n)$ total copies instead of $O(n)$.

**2. Erasing during range-for iteration.** Erasing an element invalidates the iterator to that
element and all subsequent iterators. The following is UB:

```cpp
for (auto it = v.begin(); it != v.end(); ++it) {
    if (*it == target) v.erase(it);  // UB: 'it' invalidated
}
```

The correct pattern returns the iterator from `erase()`:

```cpp
for (auto it = v.begin(); it != v.end(); ) {
    if (*it == target) it = v.erase(it);
    else ++it;
}
```

Or use the C++20 erase-if idiom: `std::erase_if(v, [](int x) { return x == target; });` [N4950
§22.3.11.5].

**3. Using `deque` for random-access-heavy workloads.** `std::deque` has $O(1)$ random access, but
each access requires a map lookup plus a block dereference. For workloads dominated by `operator[]`
or `at()`, `std::vector` is 2-5x faster due to single-pointer indirection and prefetcher
friendliness. Only use `deque` when `push_front` is a frequent operation.

**4. Assuming `vector::data()` is null-terminated.** `data()` returns a pointer to contiguous
storage, but there is no null terminator after the last element unless you explicitly append one.
Passing `v.data()` to a C API expecting a null-terminated string is UB. Use
`std::string(v.begin(), v.end())` instead.

**5. `clear()` does not free memory.** `v.clear()` destroys all elements and sets `size()` to 0, but
`capacity()` remains unchanged. The heap allocation is retained. Call `shrink_to_fit()` after
`clear()` to request capacity reduction, or swap with an empty vector:
`std::vector&lt;int>().swap(v);`.

**6. Using `vector&lt;bool>` as a generic container.** `vector&lt;bool>` does not satisfy the
container requirements [N4950 §22.2] because `operator[]` returns a proxy, not a real reference.
Generic code that assumes `T&` from `operator[]` will fail to compile. Use `vector&lt;uint8_t>` for
bit storage with addressable elements.

**7. Comparing vectors with `==` is $O(n)$.** Two vectors are equal if they have the same size and
all elements compare equal. For large vectors, this is linear. If you need frequent equality checks,
consider a hash of the contents (but beware of hash collisions).

### `emplace_back` vs `push_back`

`emplace_back` constructs an element in-place from forwarded arguments, avoiding a temporary
construction [N4950 §22.3.11.5]. `push_back` takes an existing object and moves/copies it into the
vector. For types with expensive move constructors or types that are not movable, `emplace_back` can
be significantly faster:

```cpp
#include <vector>
#include <string>
#include <iostream>

int main() {
    std::vector<std::string> v;

    // push_back: constructs a temporary, then moves it
    v.push_back(std::string("hello"));  // 1 construction + 1 move

    // emplace_back: constructs directly in the vector's storage
    v.emplace_back("world");  // 1 construction, no move

    // For complex types, the difference is more pronounced
    v.emplace_back(10, 'x');  // constructs std::string(10, 'x') in place
    // Equivalent to: v.push_back(std::string(10, 'x'));  // temp + move
}
```

Since C++17, `push_back` also supports constructing from arguments via perfect forwarding in some
contexts, but `emplace_back` remains the idiomatic choice when constructing from individual
arguments.

### `reserve` vs `resize` vs `assign`

These three operations serve different purposes and are frequently confused:

| Operation         | Effect                                             | Changes size? |    Changes capacity?     |
| ----------------- | -------------------------------------------------- | :-----------: | :----------------------: |
| `resize(n)`       | Sets `size()` to `n`; default-constructs or erases |      Yes      | If `n` &gt; `capacity()` |
| `reserve(n)`      | Sets `capacity()` to at least `n`                  |      No       |           Yes            |
| `assign(n, v)`    | Replaces contents with `n` copies of `v`           |      Yes      |        As needed         |
| `shrink_to_fit()` | Non-binding request to set `capacity() == size()`  |      No       |          Maybe           |

```cpp
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v;

    v.reserve(100);
    std::cout << "after reserve(100): size=" << v.size()
              << " cap=" << v.capacity() << "\n";
    // after reserve(100): size=0 cap=100

    v.resize(10);
    std::cout << "after resize(10): size=" << v.size()
              << " cap=" << v.capacity() << "\n";
    // after resize(10): size=10 cap=100  (no realloc needed)

    v.resize(200);
    std::cout << "after resize(200): size=" << v.size()
              << " cap=" << v.capacity() << "\n";
    // after resize(200): size=200 cap>=200  (realloc to at least 200)

    v.shrink_to_fit();
    std::cout << "after shrink_to_fit: size=" << v.size()
              << " cap=" << v.capacity() << "\n";
    // after shrink_to_fit: size=200 cap=200 (or still >= 200, non-binding)
}
```

### `std::deque` Random Access Internals

Random access on `std::deque` requires computing which block an element belongs to and then indexing
within that block. Given block size $B$ and element index $i$:

$$
\mathrm{block\_index} = \left\lfloor \frac{\mathrm{start\_offset} + i}{B} \right\rfloor
$$

$$
\mathrm{element\_offset} = (\mathrm{start\_offset} + i) \mod B
$$

The map array is typically a small heap-allocated array (often 8-16 entries initially). When the map
fills up, it is reallocated to a larger size, but the element blocks are never moved. This means
deque random access involves two indirections: map lookup + element lookup. On modern CPUs with deep
caches, this extra indirection typically adds 2-5 cycles per access compared to vector's single
indirection.

## See Also

- [Associative and Unordered Containers](./2_associative_containers.md)
- [Iterator Categories, Traversal, Invalidation](./3_iterators.md)
- [Polymorphic Memory Resources (PMR)](./4_pmr.md)
