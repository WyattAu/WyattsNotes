---
title: Range Materialization (std::ranges::to)
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: range-materialization
---

## Range Materialization (std::ranges::to)

Views are lazy and borrow elements from their source. When you need ownership, multiple passes, or
independence from the source lifetime, you must **materialize** the view into an eager container.
C++23 introduced `std::ranges::to&lt;T>` as the standard bridge between the lazy world of views and
the eager world of containers.

### `std::ranges::to<T>` (C++23)

C++23 introduced `std::ranges::to&lt;T>` [N4950 §26.5.8], which materializes a lazy view into an
eager container. This is the bridge between the lazy world of views and the eager world of
containers.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <deque>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Materialize a filtered view into a vector [N4950 §26.5.8]
    auto evens = v
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::ranges::to<std::vector>();

    std::cout << "Evens (vector): ";
    for (int x : evens) std::cout << x << " ";
    // Output: Evens (vector): 2 4 6 8 10
    std::cout << "\n";

    // Materialize into a different container type
    auto evens_deque = v
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::ranges::to<std::deque>();

    std::cout << "Evens (deque): ";
    for (int x : evens_deque) std::cout << x << " ";
    std::cout << "\n";

    // Transform and materialize
    auto squares = v
        | std::views::transform([](int x) { return x * x; })
        | std::views::take(5)
        | std::ranges::to<std::vector>();

    std::cout << "First 5 squares: ";
    for (int x : squares) std::cout << x << " ";
    // Output: First 5 squares: 1 4 9 16 25
    std::cout << "\n";

    // Materialize strings
    std::string text = "hello world foo bar";
    auto words = text
        | std::views::split(' ')
        | std::views::transform([](auto&& rng) {
            return std::string(rng.begin(), rng.end());
        })
        | std::views::filter([](const std::string& s) { return s.size() >= 4; })
        | std::ranges::to<std::vector<std::string>>();

    std::cout << "Long words: ";
    for (const auto& w : words) std::cout << w << " ";
    // Output: Long words: hello world
    std::cout << "\n";
}
```

### Converting Lazy Views to Eager Containers

The key distinction between views and containers [N4950 §26.5.2]:

| Property       | View                | Container               |
| -------------- | ------------------- | ----------------------- |
| Ownership      | Borrows elements    | Owns elements           |
| Lifetime       | Tied to source      | Independent             |
| Construction   | $O(1)$              | $O(n)$                  |
| Destruction    | $O(1)$              | $O(n)$                  |
| Composition    | Chainable with `\|` | Must materialize        |
| Element access | Lazy (on iteration) | Eager (on construction) |

`std::ranges::to&lt;T>` performs the materialization eagerly: it iterates the entire view and
inserts each element into the target container. This is $O(n)$ in the number of elements.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <set>

int main() {
    std::vector<int> data = {5, 3, 1, 4, 2, 5, 3, 1};

    // Materialize into a set (deduplicates and sorts)
    auto unique_sorted = data | std::ranges::to<std::set<int>>();
    std::cout << "Unique sorted: ";
    for (int x : unique_sorted) std::cout << x << " ";
    // Output: Unique sorted: 1 2 3 4 5
    std::cout << "\n";

    // Chain: filter, transform, deduplicate, materialize
    auto result = data
        | std::views::filter([](int x) { return x > 2; })
        | std::views::transform([](int x) { return x * 10; })
        | std::ranges::to<std::vector>()
    ;
    // result is a vector<int> with {50, 30, 40, 50, 30}
    // Note: ranges::to doesn't deduplicate; use to<std::set> for that

    auto deduped = data
        | std::views::filter([](int x) { return x > 2; })
        | std::views::transform([](int x) { return x * 10; })
        | std::ranges::to<std::set>()
    ;
    std::cout << "Deduped: ";
    for (int x : deduped) std::cout << x << " ";
    // Output: Deduped: 30 40 50
    std::cout << "\n";
}
```

:::tip Prefer `std::ranges::to&lt;std::vector>()` when you need to consume a view multiple times,
pass it to a non-range API, or decouple its lifetime from the source. The cost is $O(n)$ for the
materialization, but you gain ownership and stability. :::

## See Also

- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)
