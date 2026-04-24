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
\mathrm{sentinel\_for}(S, I) \iff \mathrm{input\_iterator}(I) \land \mathrm{semiregular}(S) \land \mathrm{weakly\_equality\_comparable\_with}(S, I)
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
ranges, it avoids computing the end pointer from a base + count.
:::

## Iterator Concepts Hierarchy

C++20 replaced the legacy iterator category tags (`std::input_iterator_tag`, etc.) with a hierarchy
of concepts [N4950 §25.3.4]. Understanding this hierarchy is essential for implementing custom
sentinels and ranges.

### The Concept Refinement Chain

| Concept                         | Refines                                                                                 | Capabilities                                                      |
| :------------------------------ | :-------------------------------------------------------------------------------------- | :---------------------------------------------------------------- |
| `std::input_or_output_iterator` | —                                                                                       | Can be incremented (`++it`), dereferenceable (`*it`)              |
| `std::input_iterator`           | `input_or_output_iterator`, `std::indirectly_readable`, `std::input_or_output_iterator` | Multi-pass read, `->`, `==` / `!=` with sentinel                  |
| `std::output_iterator`          | `input_or_output_iterator`                                                              | Can write through `*it = val`                                     |
| `std::forward_iterator`         | `std::input_iterator`                                                                   | Multi-pass, default-constructible                                 |
| `std::bidirectional_iterator`   | `std::forward_iterator`                                                                 | Can decrement (`--it`)                                            |
| `std::random_access_iterator`   | `std::bidirectional_iterator`                                                           | Arithmetic (`it + n`, `it - n`), comparison (`&lt;`, `&gt;`)      |
| `std::contiguous_iterator`      | `std::random_access_iterator`                                                           | Elements are contiguous in memory; `std::to_address(it)` is valid |

### The `std::semiregular` Constraint on Sentinels

A sentinel type must model `std::semiregular` [N4950 §18.5]. This means it must be:

- Default-constructible
- Copy-constructible
- Move-constructible
- Assignable (copy and move)
- Destructible

This is a strict requirement. A sentinel that holds a reference or is non-copyable cannot model
`sentinel_for`:

```cpp
#include <concepts>
#include <iterator>

// BAD: Non-default-constructible sentinel
struct BadSentinel {
    int limit;
    BadSentinel(int l) : limit(l) {}
    // No default constructor — fails std::semiregular
};

// GOOD: Default-constructible sentinel
struct LimitSentinel {
    int limit = 0;
};

template <std::input_iterator It>
bool operator==(It it, LimitSentinel s) {
    return *it >= s.limit;
}

static_assert(std::semiregular<LimitSentinel>);
```

## Sentinel with State

A sentinel can carry state that influences the comparison logic. This is where the type distinction
between iterators and sentinels provides real value — a sentinel that encodes termination criteria
as state avoids computing an end iterator.

```cpp
#include <iostream>
#include <concepts>
#include <ranges>
#include <vector>

template <std::integral T>
class ThresholdSentinel {
    T threshold_;
public:
    ThresholdSentinel() : threshold_{} {}
    explicit ThresholdSentinel(T t) : threshold_(t) {}
    T threshold() const { return threshold_; }
};

template <std::input_iterator It, std::integral T>
bool operator==(It it, ThresholdSentinel<T> s) {
    return *it >= s.threshold();
}

int main() {
    std::vector<int> data = {1, 3, 7, 2, 9, 4, 12, 5, 8, 15};

    // Iterate until we find a value >= 10
    auto it = data.begin();
    auto sent = ThresholdSentinel<int>{10};

    while (it != sent) {
        std::cout << *it << " ";
        ++it;
    }
    // Output: 1 3 7 2 9 4

    std::cout << "\nStopped at: " << *it << "\n";  // 12

    // Works with ranges::subrange
    auto sub = std::ranges::subrange(data.begin(), sent);
    std::cout << "Subrange size (distance): " << std::ranges::distance(sub) << "\n";
    // Output: 6 (elements 1, 3, 7, 2, 9, 4)
}
```

The key insight: `ThresholdSentinel` carries the termination condition as state, so we never need to
scan the entire vector to find the "end" position. The sentinel comparison is O(1) per element, and
iteration terminates as soon as the condition is met.

## Range-For Loop Desugaring

The range-for loop in C++20 is desugared to use `std::ranges::begin` and `std::ranges::end`, which
support iterator-sentinel pairs [N4950 §9.5.5].

### C++17 Desugaring (Iterator Pair)

```cpp
// C++17:
for (auto elem : range) { /* ... */ }

// Desugars to:
{
    auto&& __range = range;
    auto __begin = __range.begin();   // Same type as end
    auto __end = __range.end();       // Same type as begin
    for (; __begin != __end; ++__begin) {
        auto elem = *__begin;
        /* ... */
    }
}
```

### C++20 Desugaring (Iterator-Sentinel)

```cpp
// C++20:
for (auto elem : range) { /* ... */ }

// Desugars to:
{
    auto&& __range = range;
    auto __begin = std::ranges::begin(__range);   // Iterator type I
    auto __end = std::ranges::end(__range);       // Sentinel type S (may differ from I)
    for (; __begin != __end; ++__begin) {
        auto elem = *__begin;
        /* ... */
    }
}
```

The `!=` comparison between different types (`I` and `S`) is what enables sentinel semantics. This
means you can write custom range types where `begin()` and `end()` return different types and they
will work correctly with range-for:

```cpp
#include <iostream>
#include <ranges>

class NullTerminatedString {
    const char* data_;
public:
    explicit NullTerminatedString(const char* s) : data_(s) {}

    const char* begin() const { return data_; }
    NullSentinel end() const { return {}; }  // Different type from begin()
};

int main() {
    NullTerminatedString str("Hello, sentinel-powered range-for!");

    // This works in C++20 because != is defined between const char* and NullSentinel
    for (char c : str) {
        std::cout << c;
    }
    std::cout << "\n";
}
```

## Bounded vs. Unbounded Ranges

The iterator-sentinel model formalizes the distinction between ranges with known bounds and those
without.

### Sized Ranges

A **sized range** models `std::sized_range`, meaning `ranges::size(r)` is available in O(1) time
[N4950 §25.3.6]. For standard containers, this is typically implemented via a stored size counter or
by computing `end() - begin()` for random-access iterators.

### Unbounded Ranges

A range paired with `unreachable_sentinel` is **unbounded** — it has no finite end. This is
primarily used as a performance optimization:

```cpp
#include <algorithm>
#include <vector>
#include <iterator>
#include <iostream>

int main() {
    std::vector<int> src = {1, 2, 3, 4, 5};
    std::vector<int> dst(5);

    // Without unreachable_sentinel: std::copy checks bounds
    // With unreachable_sentinel: std::copy elides the bounds check on the output
    // WARNING: You must guarantee dst has enough space!
    std::copy(src.begin(), src.end(),
              std::counted_iterator(dst.begin(), src.size()));
    for (int x : dst) std::cout << x << " ";
    std::cout << "\n";
}
```

### Sentinel-terminated Ranges

Ranges like null-terminated strings are bounded but their bound is not known a priori — the bound is
discovered during iteration. These are the most natural fit for the sentinel model, because
computing `end()` (i.e., calling `strlen`) would require a full scan of the data, defeating the
purpose of lazy iteration.

## `std::views::counted`

C++20 provides `std::views::counted` as a range adaptor that creates a view over the first `N`
elements starting from an iterator [N4950 §26.7.20]:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> data = {10, 20, 30, 40, 50, 60, 70, 80, 90, 100};

    // Create a view of the first 4 elements without computing an end iterator
    auto first_four = std::views::counted(data.begin(), 4);

    for (int x : first_four) {
        std::cout << x << " ";
    }
    // Output: 10 20 30 40
    std::cout << "\n";

    // Can start from the middle
    auto middle_three = std::views::counted(data.begin() + 3, 3);
    for (int x : middle_three) {
        std::cout << x << " ";
    }
    // Output: 40 50 60
    std::cout << "\n";

    // Composable with other views
    auto transformed = std::views::counted(data.begin(), 5)
                     | std::views::filter([](int x) { return x > 20; })
                     | std::views::transform([](int x) { return x * 2; });
    for (int x : transformed) {
        std::cout << x << " ";
    }
    // Output: 60 80 100
    std::cout << "\n";
}
```

Under the hood, `views::counted` creates a `subrange` from a `counted_iterator` and
`default_sentinel`. The range-for loop over this view performs zero additional computation — the
sentinel comparison simply decrements an internal counter.

## Performance Implications

The sentinel model is not just a semantic improvement — it has direct performance consequences.

### Eliminating `strlen` for C-String Iteration

When iterating a null-terminated C string with a traditional iterator pair, you must call `strlen`
first to compute the end pointer:

```cpp
// Legacy approach: O(N) scan before iteration even begins
const char* str = "hello";
size_t len = strlen(str);         // Full scan
for (size_t i = 0; i < len; ++i) {  // Second scan
    process(str[i]);
}

// Sentinel approach: single scan
for (auto it = str; it != NullSentinel{}; ++it) {  // One pass
    process(*it);
}
```

### Zero-Cost `counted_iterator` Comparison

The comparison between `counted_iterator` and `default_sentinel` is a simple integer decrement and
comparison against zero. On x86_64, this compiles to:

```asm
dec rax         ; decrement count
jnz loop_body   ; jump if non-zero (no flags set needed)
```

This is identical in cost to a hand-written counted loop.

### Sentinel-Eligible Algorithm Optimizations

The standard library algorithms are aware of sentinel types. When an algorithm receives
`unreachable_sentinel`, it can eliminate bounds-checking branches in inner loops. When it receives a
`default_sentinel`, it can use count-based loop termination instead of pointer comparison.

## `std::ranges::subrange` Details

`std::ranges::subrange<I, S>` is the general-purpose range type that pairs an iterator with a
sentinel [N4950 §25.7.3]. It is the return type of many range adaptors and is the primary way to
pass around half-open intervals.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <concepts>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // subrange with different iterator and sentinel types
    auto sub = std::ranges::subrange(v.begin(), v.end());

    static_assert(std::ranges::view<decltype(sub)>);
    static_assert(std::ranges::sized_range<decltype(sub)>);

    // subrange from counted_iterator + default_sentinel
    auto counted_sub = std::ranges::subrange(
        std::counted_iterator(v.begin(), 4),
        std::default_sentinel
    );

    std::cout << "counted_sub: ";
    for (int x : counted_sub) std::cout << x << " ";
    // Output: 1 2 3 4
    std::cout << "\n";

    // subrange supports conversion to pair-like types
    auto [it, sent] = counted_sub;
    std::cout << "distance from pair: " << std::ranges::distance(it, sent) << "\n";
    // Output: 4
}
```

## Common Pitfalls

### 1. Sentinel Comparison Must Be Heterogeneous

The `sentinel_for` concept requires that `S` and `I` be **weakly-equality-comparable-with** each
other, but they do not need to be the same type. A common mistake is implementing `==` only for
`(I, I)` pairs and forgetting the `(I, S)` and `(S, I)` overloads:

```cpp
// WRONG: Only defines same-type comparison
template <typename It>
bool operator==(It a, It b) { return *a == *b; }

// CORRECT: Defines cross-type comparison with sentinel
template <std::input_iterator It>
bool operator==(It it, NullSentinel) { return *it == '\0'; }

// Also define the reverse for symmetry (required by the standard)
template <std::input_iterator It>
bool operator==(NullSentinel, It it) { return it == NullSentinel{}; }
```

### 2. `std::sized_range` Requires O(1) Size

If you provide a custom `size()` member function, it must return the size in O(1). If computing the
size requires a linear scan, do not model `sized_range` — instead, let algorithms fall back to
`ranges::distance()` which performs the scan only when needed.

### 3. Dangling Iterators from Temporary Ranges

A `subrange` does not own its data. If the underlying container is a temporary, the subrange will
dangle:

```cpp
auto bad() {
    return std::ranges::subrange(
        std::vector<int>{1, 2, 3}.begin(),
        std::vector<int>{1, 2, 3}.end()
    );
    // The vector is destroyed here. The subrange dangles.
}
```

### 4. `unreachable_sentinel` Safety

Using `unreachable_sentinel` is a contract: you are guaranteeing to the standard library that the
range is infinite (or at least large enough). If the range is shorter than the algorithm expects,
you get buffer overread — and unlike with bounds-checked iterators, there is no diagnostic. Use this
only when you have proven the bounds at a higher level.

:::
