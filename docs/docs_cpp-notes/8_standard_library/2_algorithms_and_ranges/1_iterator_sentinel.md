---
title: Iterator-Sentinel Model
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: iterator-sentinel-model
---

## The Iterator-Sentinel Model

C++20 fundamentally restructured the standard library around **ranges and views**, introducing the
iterator-sentinel model as the primary abstraction for sequence traversal. A range is anything with
`begin()` and `end()`, and a sentinel is the endpoint of a range that is not necessarily an iterator
itself. This section covers the iterator-sentinel distinction, `std::ranges::begin`/`end`, standard
sentinel types, and custom sentinel implementations.

### Iterators and Sentinels in C++20

C++20 fundamentally restructured the standard library around **ranges and views**, introducing the
iterator-sentinel model as the primary abstraction for sequence traversal [N4950 §25.3]. A **range**
is anything you can call `begin()` and `end()` on [N4950 §25.3.5]. A **sentinel** is the endpoint of
a range that is not necessarily an iterator.

The key distinction from the traditional iterator-pair model:

- **Traditional (C++17)**: A range is defined by a pair of iterators `[begin, end)`, both of the
  same type `I`.
- **C++20**: A range is defined by an iterator `begin` and a sentinel `end`, potentially of
  different types `I` and `S` where `std::sentinel_for&lt;S, I>` holds [N4950 §25.3.5.2].

The `std::sentinel_for` concept requires [N4950 §25.3.5.2]:

$$
\text{sentinel\_for}(S, I) \iff \text{input\_iterator}(I) \land \text{semiregular}(S) \land \text{weakly\_equality\_comparable\_with}(S, I)
$$

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <concepts>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    // std::ranges::begin / std::ranges::end [N4950 §25.3.6]
    auto it = std::ranges::begin(v);
    auto sent = std::ranges::end(v);

    // Both iterators and sentinels support comparison
    while (it != sent) {
        std::cout << *it << " ";
        ++it;
    }
    std::cout << "\n";

    // C++20 range-for loop uses ranges::begin/end internally
    for (int x : v) {
        std::cout << x << " ";
    }
    std::cout << "\n";
}
```

### `std::ranges::begin` and `std::ranges::end`

`std::ranges::begin(E)` and `std::ranges::end(E)` are customization point objects (CPOs) [N4950
§25.3.6] that resolve to the appropriate `begin`/`end` function for an expression `E`. The lookup
follows this order [N4950 §25.3.6.2]:

1. If `E` is an lvalue or rvalue of array type, returns `E + 0` and `E + N`.
2. If `E` has a member `begin()` / `end()`, uses it (ADL-qualified).
3. Otherwise, uses `std::begin(E)` / `std::end(E)`.

This differs from `std::begin` / `std::end` in that it properly handles ranges that return different
types from `begin()` and `end()` (i.e., iterator-sentinel pairs).

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <array>

int main() {
    std::vector<int> v = {10, 20, 30, 40, 50};

    // ranges::begin/end work with all standard containers
    // and also with arrays [N4950 §25.3.6]
    std::array<int, 5> arr = {1, 2, 3, 4, 5};

    auto vit = std::ranges::begin(v);
    auto ait = std::ranges::begin(arr);

    std::cout << "*vit = " << *vit << "\n";  // 10
    std::cout << "*ait = " << *ait << "\n";  // 1

    // ranges::size, ranges::data, ranges::empty [N4950 §25.3.6]
    std::cout << "ranges::size(v) = " << std::ranges::size(v) << "\n";
    std::cout << "ranges::empty(v) = " << std::ranges::empty(v) << "\n";
    std::cout << "ranges::data(arr) = " << std::ranges::data(arr) << "\n";
}
```

### Sentinel Types: `default_sentinel` and `unreachable_sentinel`

The standard library provides two sentinel types [N4950 §25.5]:

**`std::default_sentinel`** [N4950 §25.5.3] is used with `std::counted_iterator&lt;I>` to denote the
end of a counted range. A `counted_iterator` pairs an underlying iterator with a remaining count and
compares equal to `default_sentinel` when the count reaches zero.

**`std::unreachable_sentinel`** [N4950 §25.5.4] is a sentinel type that never compares equal to any
iterator. It is used as a performance hint to the compiler and standard library algorithms,
indicating that a range theoretically extends to infinity (or at least beyond the actual data). This
enables optimizations in algorithms like `std::copy` that can eliminate bounds checks.

```cpp
#include <iostream>
#include <vector>
#include <iterator>
#include <algorithm>
#include <span>

int main() {
    std::vector<int> src = {1, 2, 3, 4, 5};
    std::vector<int> dst(5);

    // counted_iterator + default_sentinel [N4950 §25.5.3]
    std::counted_iterator src_it(src.begin(), 5);  // 5 elements
    std::default_sentinel_t end;

    std::copy(src_it, end, dst.begin());
    for (int x : dst) std::cout << x << " ";
    std::cout << "\n";

    // unreachable_sentinel: hints that end is not reachable [N4950 §25.5.4]
    // Useful when you KNOW the destination has enough space
    std::vector<int> dst2(5);
    std::copy(src.begin(), src.end(), std::counted_iterator(dst2.begin(), 5));
    for (int x : dst2) std::cout << x << " ";
    std::cout << "\n";

    // Practical use: copying exactly N elements
    std::vector<int> src2 = {10, 20, 30, 40, 50, 60, 70};
    std::vector<int> dst3(3);
    std::ranges::copy(std::counted_iterator(src2.begin(), 3),
                      std::default_sentinel,
                      dst3.begin());
    std::cout << "First 3: ";
    for (int x : dst3) std::cout << x << " ";
    // Output: First 3: 10 20 30
    std::cout << "\n";
}
```

### Custom Sentinel for Null-Terminated String

```cpp
#include <iostream>
#include <concepts>
#include <iterator>
#include <algorithm>

class NullSentinel {};

template <std::input_or_output_iterator It>
bool operator==(It it, NullSentinel) {
    if constexpr (requires { { *it } -> std::convertible_to<const char&>; }) {
        return *it == '\0';
    } else {
        return false;
    }
}

int main() {
    const char* str = "Hello, C++20 sentinel!";

    // Without computing strlen, iterate until null terminator
    auto it = str;
    while (it != NullSentinel{}) {
        std::cout << *it;
        ++it;
    }
    std::cout << "\n";

    // Works with algorithms too
    auto count = std::ranges::distance(str, NullSentinel{});
    std::cout << "String length: " << count << "\n";  // 24

    // Can create a subrange
    auto range = std::ranges::subrange(str, NullSentinel{});
    std::cout << "Range size: " << range.size() << "\n";
    for (char c : range) std::cout << c;
    std::cout << "\n";
}
```

:::info The iterator-sentinel model eliminates the need to compute `end` iterators for bounded
sequences. For null-terminated strings, this avoids computing `strlen` before iteration. For counted
ranges, it avoids computing the end pointer from a base + count. :::

## See Also

- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Range Materialization](./4_range_materialization.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)
