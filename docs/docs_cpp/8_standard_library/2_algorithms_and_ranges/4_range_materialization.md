---
title: Range Materialization (std::ranges::to)
description:
  C++: Range Materialization (std::ranges::to) — `std::ranges::to<T>` (C++23);
  Converting Lazy Views to Eager Containers. and examination.
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

### Owning vs Non-Owning Ranges

Understanding the ownership model is critical for correct range usage:

- **Non-owning ranges** (views): `std::string_view`, `std::span`, `std::ranges::ref_view`,
  `std::ranges::filter_view`. These hold pointers or references into storage owned by another
  object. They are lightweight ($O(1)$ copy) but must not outlive the underlying data.

- **Owning ranges** (containers): `std::vector`, `std::string`, `std::deque`, `std::list`. These own
  their element storage and manage its lifetime. Copying an owning range copies all elements
  ($O(n)$). Moving an owning range transfers ownership ($O(1)$).

- **Hybrid ranges**: `std::ranges::owning_view` wraps a range by value, taking ownership. This is
  useful when a function needs to accept either a view or a container and store it for later use.

```cpp
#include <ranges>
#include <vector>
#include <string_view>
#include <iostream>

void consume_borrowed(std::ranges::borrowed_range auto&& r) {
    for (auto&& x : r) std::cout << x << " ";
    std::cout << "\n";
}

void consume_any(std::ranges::view auto&& v) {
    // Must materialize if we need to store beyond the call
    auto copy = v | std::ranges::to<std::vector<std::ranges::range_value_t<decltype(v)>>>();
    (void)copy;
}

int main() {
    std::vector<int> data = {1, 2, 3, 4, 5};
    consume_borrowed(std::string_view("hello"));  // safe: string_view is borrowed

    auto view = data | std::views::take(3);
    consume_borrowed(view);  // safe: view is borrowed from 'data' which is still alive
}
```

### The Dangling Iterator Problem

When a function returns a range that borrows from a local variable, the returned range dangles. The
standard library detects this at compile time for many cases using the `std::ranges::dangling`
sentinel type [N4950 §26.5.2]:

```cpp
#include <vector>
#include <ranges>
#include <iostream>

// Returns dangling if the source is a temporary
auto get_filtered() {
    return std::vector{1, 2, 3, 4, 5}
         | std::views::filter([](int x) { return x > 2; });
    // Returns std::ranges::dangling, not a real view!
}

int main() {
    // The return type is std::ranges::dangling, preventing accidental use.
    // This is a compile-time safety mechanism [N4950 §26.5.2].
    auto result = get_filtered();

    // The following would fail to compile because result is dangling:
    // for (int x : result) std::cout << x << "\n";

    // Safe alternative: pass the source as a parameter
    auto safe_filter(std::ranges::view auto&& src) {
        return src | std::views::filter([](int x) { return x > 2; });
    }

    std::vector<int> data = {1, 2, 3, 4, 5};
    auto good = safe_filter(data);
    for (int x : good) std::cout << x << " ";
    std::cout << "\n";
}
```

### Table of Borrowed vs Non-Borrowed Views

| View Type              | Borrowed? | Reason                                   |
| ---------------------- | --------- | ---------------------------------------- |
| `ref_view<T>`          | Yes       | Holds an lvalue reference explicitly     |
| `iota_view<W, B>`      | Yes       | Stateless or trivially copyable state    |
| `empty_view<T>`        | Yes       | No storage                               |
| `single_view<T>`       | Yes       | Stores element inline                    |
| `string_view`          | Yes       | Non-owning by design                     |
| `span<T>`              | Yes       | Non-owning by design                     |
| `filter_view<V, P>`    | No        | Borrows from `V`                         |
| `transform_view<V, F>` | No        | Borrows from `V`                         |
| `take_view<V>`         | No        | Borrows from `V`                         |
| `drop_view<V>`         | No        | Borrows from `V`                         |
| `reverse_view<V>`      | No        | Borrows from `V`                         |
| `join_view<V>`         | No        | Borrows from `V` (and inner ranges)      |
| `split_view<V, P>`     | No        | Borrows from `V`                         |
| `zip_view<Views...>`   | Depends   | Borrowed only if ALL component views are |
| `enumerate_view<V>`    | No        | Borrows from `V`                         |
| `keys_view<M>`         | No        | Borrows from map `M`                     |
| `values_view<M>`       | No        | Borrows from map `M`                     |

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
        | std::views::transform([](int s) { return s + 5; })
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

:::warning The C++ standard's range machinery includes **borrowed range** detection [N4950 §26.5.2].
Some views (like `std::views::filter`) are not borrowing views --- they cannot outlive their source.
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

#### Materializing Single-Pass Views

Some views (like `views::istream<T>`) are single-pass: once iterated, the elements are consumed and
cannot be re-read. If you need to process the elements more than once, you must materialize on first
use:

```cpp
#include <iostream>
#include <sstream>
#include <ranges>
#include <vector>
#include <numeric>

int main() {
    std::istringstream iss("10 20 30 40 50");

    // views::istream<int> is single-pass
    auto nums = std::views::istream<int>(iss);

    // MUST materialize if we need multiple passes
    auto stored = nums | std::ranges::to<std::vector<int>>();

    int sum = std::accumulate(stored.begin(), stored.end(), 0);
    int count = static_cast<int>(stored.size());
    std::cout << "sum=" << sum << " count=" << count << " avg="
              << static_cast<double>(sum) / count << "\n";
    // Output: sum=150 count=5 avg=30
}
```

### Materializing into `std::string` via Join

A common pattern is flattening a range of strings into a single `std::string` using `views::join`
and `ranges::to`:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

int main() {
    std::vector<std::string> words = {"hello", " ", "world", " ", "from", " ", "ranges"};

    auto joined = words | std::views::join | std::ranges::to<std::string>();
    std::cout << joined << "\n";
    // Output: hello world from ranges
}
```

### Materialization with `std::ranges::copy` and `std::back_inserter`

Before C++23, the idiomatic way to materialize a view was `std::ranges::copy` with a
`std::back_inserter`. This is still valid and sometimes preferred when you need to append to an
existing container:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>

int main() {
    std::vector<int> source = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
    std::vector<int> destination;

    // Append filtered elements to existing container
    std::ranges::copy(
        source | std::views::filter([](int x) { return x % 3 == 0; }),
        std::back_inserter(destination)
    );

    for (int x : destination) std::cout << x << " ";
    // Output: 3 6 9
    std::cout << "\n";
}
```

### Proof of Dangling Conditions

**Theorem.** A range adaptor view `V` returned from `source | adaptor` dangles if the view `V` is
not a `borrowed_range` and `source` is a temporary (prvalue).

**Proof.** We analyze the lifetime rules of C++ [N4950 §6.7.7]:

1. A temporary (prvalue) is destroyed at the end of the full-expression in which it appears [N4950
   §6.7.7.2].

2. A range adaptor view `V` holds a reference or iterator into its source range. The view does not
   own the source and does not extend its lifetime.

3. If the source is a temporary, its lifetime ends at the semicolon. The view `V`, which is an
   lvalue (bound to a named variable or returned from a function), outlives the source.

4. After the source is destroyed, the view holds a dangling reference/iterator. Dereferencing it is
   undefined behavior per [N4950 §6.7.7.2].

5. Exception: if the view is a `borrowed_range`, it trivially copies the source data (or the source
   has no backing storage), so it does not borrow. Examples: `string_view`, `span`, `iota_view`.

QED. This is why `std::ranges::dangling` exists: the standard library detects this pattern at
compile time for many common cases and returns `dangling` instead of a real iterator, preventing
accidental use.

### When Does Materialization Happen Implicitly?

Materialization occurs not only with `std::ranges::to` but also in several other contexts:

1. **Container constructor from range:** `std::vector<int>(view.begin(), view.end())` --- iterates
   the view and copies elements.

2. **`std::ranges::copy` / `std::ranges::move`:** Copies or moves elements from the view to an
   output iterator.

3. **Algorithms that modify:** `std::ranges::sort(view)` requires a random-access range with mutable
   elements. If the view is a borrowed reference to a container, the sort modifies the container in
   place (no materialization). If the view is a temporary, it dangles.

4. **`std::ranges::distance(view):** Iterates the entire view to count elements. For single-pass
   views, this consumes the elements. For forward views, this is $O(n)$ but does not materialize
   into a container.

5. **`std::ranges::begin(view)` / `std::ranges::end(view)`:** Does not materialize; returns an
   iterator/sentinel pair. Computation happens only during iteration.

### `std::ranges::to` with Custom Containers

`std::ranges::to` works with any container that satisfies the `ranges::to` constraints [N4950
§26.5.8]. The target container must be constructible from an iterator-sentinel pair, or it must have
a suitable `reserve` + `insert` interface. For custom containers, you may need to provide a
deduction guide or a `container-inserter` customization point:

```cpp
#include <vector>
#include <ranges>
#include <iostream>

template <typename T>
class RingBuffer {
    std::vector<T> data_;
    std::size_t head_ = 0;
    std::size_t count_ = 0;
    std::size_t capacity_;

public:
    explicit RingBuffer(std::size_t cap = 16) : capacity_(cap) {
        data_.reserve(cap);
    }

    void push_back(const T& val) {
        if (count_ < capacity_) {
            data_.push_back(val);
            ++count_;
        } else {
            data_[head_] = val;
            head_ = (head_ + 1) % capacity_;
        }
    }

    std::size_t size() const { return count_; }

    auto begin() { return data_.begin(); }
    auto end() { return data_.begin() + static_cast<std::ptrdiff_t>(count_); }
};

int main() {
    std::vector<int> source = {1, 2, 3, 4, 5};

    RingBuffer<int> ring;
    for (int x : source | std::views::filter([](int x) { return x > 2; })) {
        ring.push_back(x);
    }

    std::cout << "Ring size: " << ring.size() << "\n";
    for (int x : ring) std::cout << x << " ";
    std::cout << "\n";
}
```

### Materialization Performance Considerations

The cost of materialization depends on the target container and the view pipeline:

| Target Container | Allocation Strategy                    | Typical Cost per Element         |
| ---------------- | -------------------------------------- | -------------------------------- |
| `std::vector`    | Single allocation (with `reserve`)     | 1 copy + 0-1 reallocations       |
| `std::vector`    | Without `reserve` (amortized growth)   | 1 copy + amortized realloc       |
| `std::deque`     | Block-by-block allocation              | 1 copy + occasional block alloc  |
| `std::list`      | Per-node allocation                    | 1 copy + 1 alloc per element     |
| `std::set`       | Per-node allocation + tree rebalancing | 1 copy + $O(\log n)$ per element |
| `std::string`    | Single allocation                      | 1 copy                           |

For maximum throughput, materialize into `std::vector` (best cache locality, fewest allocations). If
you need deduplication or sorting, materialize into `std::vector` first, then sort and unique-erase,
rather than materializing directly into `std::set`:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>
#include <chrono>

int main() {
    std::vector<int> data(1'000'000);
    for (std::size_t i = 0; i < data.size(); ++i) {
        data[i] = static_cast<int>(i % 1000);
    }

    auto t1 = std::chrono::high_resolution_clock::now();
    auto s = data | std::ranges::to<std::set<int>>();
    auto t2 = std::chrono::high_resolution_clock::now();

    auto t3 = std::chrono::high_resolution_clock::now();
    auto v = data | std::ranges::to<std::vector<int>>();
    std::ranges::sort(v);
    v.erase(std::ranges::unique(v).begin(), v.end());
    auto t4 = std::chrono::high_resolution_clock::now();

    auto ms1 = std::chrono::duration_cast<std::chrono::milliseconds>(t2 - t1).count();
    auto ms2 = std::chrono::duration_cast<std::chrono::milliseconds>(t4 - t3).count();

    std::cout << "set:    " << ms1 << " ms (size=" << s.size() << ")\n";
    std::cout << "vector: " << ms2 << " ms (size=" << v.size() << ")\n";
}
```

## See Also

- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)
