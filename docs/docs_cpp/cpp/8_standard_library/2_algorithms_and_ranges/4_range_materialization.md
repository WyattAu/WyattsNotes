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

:::tip
Prefer `std::ranges::to&lt;std::vector>()` when you need to consume a view multiple times,
pass it to a non-range API, or decouple its lifetime from the source. The cost is $O(n)$ for the
materialization, but you gain ownership and stability.
:::

### Materialization with Different Containers

`std::ranges::to` works with any container that satisfies the `ranges::to` constraints [N4950
§26.5.8]. The target container must be constructible from an iterator-sentinel pair, or it must have
a suitable `reserve` + `insert` interface.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <set>
#include <map>
#include <unordered_set>
#include <list>
#include <string>
#include <deque>

int main() {
    std::vector<int> data = {5, 3, 1, 4, 2, 5, 3, 1};

    // Materialize into std::set (sorted, deduplicated)
    auto s = data | std::ranges::to<std::set<int>>();
    std::cout << "set: ";
    for (int x : s) std::cout << x << " ";
    // Output: set: 1 2 3 4 5
    std::cout << "\n";

    // Materialize into std::unordered_set (deduplicated, hash-based)
    auto us = data | std::ranges::to<std::unordered_set<int>>();
    std::cout << "unordered_set size: " << us.size() << "\n";
    // Output: unordered_set size: 5

    // Materialize into std::list (doubly-linked, stable iterators)
    auto lst = data | std::views::filter([](int x) { return x > 2; })
                    | std::ranges::to<std::list<int>>();
    std::cout << "list: ";
    for (int x : lst) std::cout << x << " ";
    // Output: list: 5 3 4 5 3
    std::cout << "\n";

    // Materialize into std::deque (amortized push_front/push_back)
    auto dq = data | std::views::take(4) | std::ranges::to<std::deque<int>>();
    std::cout << "deque: ";
    for (int x : dq) std::cout << x << " ";
    // Output: deque: 5 3 1 4
    std::cout << "\n";

    // Materialize into std::string via char range
    std::string source = "a1b2c3d4e5";
    auto letters = source
        | std::views::filter([](char c) { return std::isalpha(c); })
        | std::ranges::to<std::string>();
    std::cout << "letters: " << letters << "\n";
    // Output: letters: abcde

    // Materialize into std::string via transform
    std::vector<std::string> words = {"hello", "world", "foo"};
    auto joined = words
        | std::views::join
        | std::ranges::to<std::string>();
    std::cout << "joined: " << joined << "\n";
    // Output: joined: helloworldfoo
}
```

### Pipe Operator Materialization Patterns

The pipe operator `|` lets you materialize at the end of a pipeline, producing clean data-flow code
[N4950 §26.5.8]:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <numeric>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // Pattern 1: filter -> transform -> materialize
    auto result1 = v
        | std::views::filter([](int x) { return x % 2 == 0; })
        | std::views::transform([](int x) { return x * x; })
        | std::ranges::to<std::vector<int>>();
    std::cout << "evens squared: ";
    for (int x : result1) std::cout << x << " ";
    // Output: evens squared: 4 16 36 64 100
    std::cout << "\n";

    // Pattern 2: take -> drop -> materialize
    auto result2 = v
        | std::views::drop(2)
        | std::views::take(5)
        | std::ranges::to<std::vector<int>>();
    std::cout << "drop 2, take 5: ";
    for (int x : result2) std::cout << x << " ";
    // Output: drop 2, take 5: 3 4 5 6 7
    std::cout << "\n";

    // Pattern 3: filter -> materialize for multiple passes
    auto odds = v
        | std::views::filter([](int x) { return x % 2 != 0; })
        | std::ranges::to<std::vector<int>>();

    // Now we can iterate odds multiple times (views would need recomputation)
    int sum = std::accumulate(odds.begin(), odds.end(), 0);
    int count = static_cast<int>(odds.size());
    double avg = static_cast<double>(sum) / count;
    std::cout << "odds sum=" << sum << " avg=" << avg << "\n";
    // Output: odds sum=25 avg=5
}
```

### Lazy vs Eager Evaluation Comparison

The fundamental trade-off between views (lazy) and containers (eager) is **when computation occurs**
[N4950 §26.5.2]:

| Aspect           | Lazy View                  | Eager Container (`ranges::to`) |
| ---------------- | -------------------------- | ------------------------------ |
| Computation time | At iteration               | At materialization             |
| Memory           | $O(1)$ extra               | $O(n)$ allocated               |
| Multi-pass       | No (single-pass views)     | Yes                            |
| Lifetime         | Tied to source             | Independent                    |
| Side effects     | Each iteration re-executes | Executed once                  |

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    int side_effect_count = 0;

    // LAZY: the lambda runs every time we iterate
    auto lazy = v
        | std::views::transform([&side_effect_count](int x) {
            ++side_effect_count;
            return x * x;
        })
        | std::views::take(3);

    side_effect_count = 0;
    for (int x : lazy) { (void)x; }       // side_effect_count = 3
    std::cout << "lazy pass 1: " << side_effect_count << "\n";

    for (int x : lazy) { (void)x; }       // side_effect_count = 6 (re-executed!)
    std::cout << "lazy pass 2: " << side_effect_count << "\n";

    // EAGER: the lambda runs once at materialization
    side_effect_count = 0;
    auto eager = v
        | std::views::transform([&side_effect_count](int x) {
            ++side_effect_count;
            return x * x;
        })
        | std::views::take(3)
        | std::ranges::to<std::vector<int>>();

    std::cout << "eager materialize: " << side_effect_count << "\n";  // 3
    for (int x : eager) { (void)x; }   // side_effect_count still 3
    for (int x : eager) { (void)x; }   // side_effect_count still 3
    std::cout << "eager after 2 passes: " << side_effect_count << "\n";
}
```

### Interaction with `std::views::filter` and `std::views::transform`

Materialization interacts predictably with filter and transform: the view pipeline is consumed
left-to-right, and each element that survives the pipeline is inserted into the target container.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

struct Record {
    std::string name;
    int score;
    bool active;
};

int main() {
    std::vector<Record> records = {
        {"Alice", 95, true},
        {"Bob", 72, false},
        {"Charlie", 88, true},
        {"Diana", 61, true},
        {"Eve", 45, false},
    };

    // Chain: filter active -> filter high score -> extract names -> materialize
    auto top_active_names = records
        | std::views::filter([](const Record& r) { return r.active; })
        | std::views::filter([](const Record& r) { return r.score >= 70; })
        | std::views::transform([](const Record& r) { return r.name; })
        | std::ranges::to<std::vector<std::string>>();

    std::cout << "Top active: ";
    for (const auto& name : top_active_names) std::cout << name << " ";
    // Output: Top active: Alice Charlie
    std::cout << "\n";

    // Chain: filter -> transform -> take -> materialize
    auto top_two_scores = records
        | std::views::filter([](const Record& r) { return r.active; })
        | std::views::transform([](const Record& r) { return r.score; })
        | std::views::transform([](int s) { return s + 5; })   // bonus points
        | std::ranges::to<std::vector<int>>();

    std::cout << "Scores with bonus: ";
    for (int s : top_two_scores) std::cout << s << " ";
    // Output: Scores with bonus: 100 93 66
    std::cout << "\n";
}
```

### Common Pitfalls

#### Materializing Infinite Ranges

`std::ranges::to` eagerly iterates the entire range. Materializing an infinite range (e.g.,
`std::views::iota`) without a bounded adaptor like `take` causes the program to hang or exhaust
memory:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    // DANGEROUS: infinite range materialized — hangs forever
    // auto bad = std::views::iota(0) | std::ranges::to<std::vector<int>>();

    // CORRECT: bound the infinite range before materializing
    auto safe = std::views::iota(0)
        | std::views::take(10)
        | std::ranges::to<std::vector<int>>();

    for (int x : safe) std::cout << x << " ";
    // Output: 0 1 2 3 4 5 6 7 8 9
    std::cout << "\n";
}
```

#### Materializing Views with Dangling References

Views borrow from their source. If the source is a temporary and you materialize the view after the
source is destroyed, the behavior is undefined:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

std::vector<int> make_data() { return {1, 2, 3, 4, 5}; }

int main() {
    // DANGEROUS: the source vector is a temporary that dies at the semicolon.
    // The view holds a dangling reference. Materializing it is UB.
    // auto view = make_data() | std::views::filter([](int x) { return x > 2; });
    // auto result = view | std::ranges::to<std::vector<int>>();  // UB: dangling

    // CORRECT: store the source in a named variable
    auto data = make_data();
    auto result = data
        | std::views::filter([](int x) { return x > 2; })
        | std::ranges::to<std::vector<int>>();

    for (int x : result) std::cout << x << " ";
    // Output: 3 4 5
    std::cout << "\n";
}
```

:::warning
The C++ standard's range machinery includes **borrowed range** detection [N4950 §26.5.2].
Some views (like `std::views::filter`) are not borrowing views — they cannot outlive their source.
Always ensure the source outlives the view when materializing.
:::

#### Double Materialization Cost

Calling `std::ranges::to` on an already-materialized container copies the data. If you already have
a container, use it directly:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    // WASTEFUL: v is already a vector; this copies into a new vector
    auto wasteful = v | std::ranges::to<std::vector<int>>();

    // CORRECT: use v directly, or use a view without materializing
    auto view = v | std::views::filter([](int x) { return x > 2; });
    for (int x : view) std::cout << x << " ";
    std::cout << "\n";

    // If you DO need a copy, at least be explicit:
    auto copy = v;  // clear intent: I need an independent copy
    (void)wasteful;
    (void)copy;
}
```

## See Also

- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)

:::

:::
