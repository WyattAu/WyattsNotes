---
title: Range Adaptors, Views, and Composition
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: range-adaptors-views-composition
---

## Range Adaptors, Views, and Composition Pipelines

Range adaptors are lazy, composable transformations applied to ranges via the pipe operator `|`.
Each adaptor returns a **view** --- a lightweight object that refers to underlying elements without
owning them. This section covers the standard adaptors, lazy evaluation semantics, pipe-based
composition, and practical data processing pipelines.

### Range Adaptors Overview

Range adaptors are lazy, composable transformations applied to ranges via the pipe operator `|`
[N4950 §26.5.2]. Each adaptor returns a **view** --- a lightweight object that refers to the
underlying elements without owning them. Views satisfy `std::ranges::view` [N4950 §26.5.2] and have
$O(1)$ construction and destruction.

The standard library provides these range adaptors [N4950 §26.5.2 Table 96]:

| Adaptor                                      | Description                                |
| -------------------------------------------- | ------------------------------------------ |
| `views::filter(pred)`                        | Elements satisfying predicate              |
| `views::transform(f)`                        | Apply function to each element             |
| `views::take(n)`                             | First `n` elements                         |
| `views::drop(n)`                             | Skip first `n` elements                    |
| `views::reverse`                             | Reverse order                              |
| `views::zip(r1, r2, ...)`                    | Zip multiple ranges into tuples            |
| `views::split(delim)`                        | Split by delimiter                         |
| `views::join`                                | Flatten a range of ranges                  |
| `views::enumerate`                           | Pair each element with its index (C++23)   |
| `views::iota(start)`                         | Infinite sequence from `start`             |
| `views::keys`                                | Extract keys from associative containers   |
| `views::values`                              | Extract values from associative containers |
| `views::take_while(pred)`                    | Take elements while predicate holds        |
| `views::drop_while(pred)`                    | Drop elements while predicate holds        |
| `views::elements&lt;N>`                      | Extract Nth element from tuple-like values |
| `views::transform(f) \| views::filter(pred)` | Composition via pipe                       |

### Lazy Evaluation: Views Are Composable Without Materialization

Views are **lazy**: no computation occurs until the view is iterated. This means you can compose
arbitrarily many adaptors without paying any cost until you actually consume the elements.

#### Proof That Views Are Lazy

**Theorem.** For a range adaptor pipeline
`source | views::filter(pred) | views::transform(f) | views::take(n)`, no element evaluation occurs
at pipeline construction time; all computation is deferred to iteration.

**Proof.** We reason about the implementation model mandated by the standard [N4950 §26.5.2].

1. Each adaptor is a class template whose constructor stores references (or copies) to the source
   range and the callable. No iteration of the source occurs in the constructor. By [N4950 §26.5.2],
   `std::ranges::view` requires $O(1)$ construction, which precludes iterating the source.

2. `views::filter` stores the source range and the predicate. Its `begin()` returns an iterator
   that, on `operator++`, advances the source iterator past elements failing the predicate. The
   predicate is only invoked when the iterator is advanced, not at construction.

3. `views::transform` stores the source and the function. Its iterator's `operator*` applies `f` to
   the current element of the source iterator. The function `f` is invoked only when the element is
   dereferenced, not when the view is constructed.

4. `views::take(n)` stores the source and a counter. Its `begin()` returns an iterator that
   increments the counter on each `operator++` and compares it against `n` in `operator!=` with the
   sentinel. No elements are consumed at construction.

Since each adaptor's constructor only captures its inputs (at $O(1)$ cost), and each adaptor's
iterator performs work only when advanced or dereferenced, the entire pipeline performs zero element
processing until iteration begins. QED.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

int main() {
    std::vector<int> numbers = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // This creates a LAZY pipeline — no computation yet [N4950 §26.5.2]
    auto pipeline = numbers
        | std::views::filter([](int x) { return x % 2 == 0; })   // {2,4,6,8,10}
        | std::views::transform([](int x) { return x * x; })     // {4,16,36,64,100}
        | std::views::take(3);                                    // {4,16,36}

    // Computation happens HERE during iteration
    std::cout << "Result: ";
    for (int x : pipeline) {
        std::cout << x << " ";
    }
    // Output: Result: 4 16 36
    std::cout << "\n";
}
```

:::tip Views are so lightweight that they typically consist of just a few pointers and sizes stored
on the stack. The entire pipeline in the example above likely compiles to a tight loop with no heap
allocations.
:::

### View Composition with the Pipe Operator

The pipe operator `|` is the standard way to compose range adaptors [N4950 §26.5.2]. Each adaptor is
a **callable object** that returns a closure type when called with arguments. The pipe operator is
defined via `std::ranges::views::adaptor` internally.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <map>

int main() {
    // Example 1: Process a string into words longer than 3 characters
    std::string text = "the quick brown fox jumps over the lazy dog";

    auto long_words = text
        | std::views::split(' ')
        | std::views::transform([](auto&& rng) {
            return std::string(rng.begin(), rng.end());
        })
        | std::views::filter([](const std::string& s) {
            return s.size() > 3;
        });

    std::cout << "Long words: ";
    for (const auto& word : long_words) {
        std::cout << word << " ";
    }
    // Output: Long words: quick brown jumps over lazy
    std::cout << "\n";

    // Example 2: Extract map keys and sort
    std::map<std::string, int> scores = {
        {"alice", 95}, {"bob", 87}, {"charlie", 92}
    };

    auto names = std::views::keys(scores);
    std::cout << "Names: ";
    for (const auto& name : names) {
        std::cout << name << " ";
    }
    // Output: Names: alice bob charlie
    std::cout << "\n";

    // Example 3: Infinite range with take
    auto first_ten_squares = std::views::iota(1)
        | std::views::transform([](int x) { return x * x; })
        | std::views::take(10);

    std::cout << "Squares: ";
    for (int x : first_ten_squares) {
        std::cout << x << " ";
    }
    // Output: Squares: 1 4 9 16 25 36 49 64 81 100
    std::cout << "\n";
}
```

### Advanced View Composition: Zip, Join, Enumerate

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <tuple>

int main() {
    // views::zip: combine multiple ranges [N4950 §26.5.7]
    std::vector<std::string> names = {"Alice", "Bob", "Charlie"};
    std::vector<int> ages = {30, 25, 35};
    std::vector<double> scores = {95.5, 87.3, 92.1};

    std::cout << "People:\n";
    for (auto&& [name, age, score] : std::views::zip(names, ages, scores)) {
        std::cout << "  " << name << ", age=" << age << ", score=" << score << "\n";
    }

    // views::join: flatten a range of ranges [N4950 §26.5.7]
    std::vector<std::vector<int>> matrix = {
        {1, 2, 3},
        {4, 5, 6},
        {7, 8, 9}
    };

    std::cout << "Flattened: ";
    for (int x : matrix | std::views::join) {
        std::cout << x << " ";
    }
    // Output: Flattened: 1 2 3 4 5 6 7 8 9
    std::cout << "\n";

    // views::enumerate (C++23) [N4950 §26.5.7]
    std::vector<std::string> fruits = {"apple", "banana", "cherry", "date"};

    std::cout << "Indexed fruits:\n";
    for (auto&& [idx, fruit] : std::views::enumerate(fruits)) {
        std::cout << "  [" << idx << "] " << fruit << "\n";
    }

    // Compose: take every other element with stride
    std::vector<int> data = {0, 1, 2, 3, 4, 5, 6, 7, 8, 9};
    auto every_other = data
        | std::views::drop(0)
        | std::views::stride(2);  // C++23: every 2nd element

    std::cout << "Every other: ";
    for (int x : every_other) {
        std::cout << x << " ";
    }
    // Output: Every other: 0 2 4 6 8
    std::cout << "\n";

    // Chunk: split into fixed-size subranges
    auto chunks = data | std::views::chunk(3);
    std::cout << "Chunks:\n";
    for (auto&& chunk : chunks) {
        std::cout << "  ";
        for (int x : chunk) std::cout << x << " ";
        std::cout << "\n";
    }
    // Output:
    //   0 1 2
    //   3 4 5
    //   6 7 8
    //   9
}
```

### Internals: How `views::filter` Works

Understanding the internal structure of a view adaptor clarifies the lazy evaluation model. Consider
`views::filter`:

```cpp
// Conceptual implementation (simplified):
template <std::ranges::view V, std::indirect_unary_predicate<std::ranges::iterator_t<V>> Pred>
class filter_view : public std::ranges::view_interface<filter_view<V, Pred>> {
    V base_;       // the underlying range
    Pred pred_;    // the predicate (copied into the view)

    // The iterator skips elements that don't satisfy pred_
    class iterator {
        std::ranges::iterator_t<V> current_;
        const filter_view* parent_;

        void satisfy() {
            while (current_ != std::ranges::end(parent_->base_)
                   && !std::invoke(parent_->pred_, *current_)) {
                ++current_;
            }
        }
    public:
        iterator& operator++() {
            ++current_;
            satisfy();  // skip non-matching elements
            return *this;
        }
        auto operator*() const { return *current_; }
    };
};
```

Key observations:

- The `filter_view` stores the source range and predicate by value. Construction is $O(1)$.
- The `iterator::satisfy()` method is where the predicate is invoked. It runs only when the iterator
  is advanced, not at construction.
- Each `operator++` may advance the underlying iterator multiple times (for consecutive elements
  that fail the predicate), but this is $O(1)$ amortized per yielded element.

### Complete Data Processing Pipeline

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <sstream>
#include <iomanip>

struct Transaction {
    std::string date;
    std::string description;
    double amount;
    std::string category;
};

std::vector<Transaction> parse_csv(const std::string& csv) {
    std::vector<Transaction> result;
    std::istringstream stream(csv);
    std::string line;

    while (std::getline(stream, line)) {
        if (line.empty()) continue;
        std::istringstream line_stream(line);
        std::string date, desc, amount_str, category;

        std::getline(line_stream, date, ',');
        std::getline(line_stream, desc, ',');
        std::getline(line_stream, amount_str, ',');
        std::getline(line_stream, category, ',');

        result.push_back({
            date,
            desc,
            std::stod(amount_str),
            category
        });
    }
    return result;
}

int main() {
    std::string csv = R"(2026-01-15,Coffee Shop,-4.50,Food
2026-01-15,Salary,5000.00,Income
2026-01-16,Grocery Store,-85.30,Food
2026-01-16,Gas Station,-45.00,Transport
2026-01-17,Freelance Work,1200.00,Income
2026-01-17,Restaurant,-32.50,Food
2026-01-18,Electric Bill,-120.00,Utilities
2026-01-18,Book Store,-25.00,Entertainment
2026-01-19,Gym Membership,-50.00,Health
2026-01-19,Online Shopping,-67.80,Shopping)";

    auto transactions = parse_csv(csv);

    // Pipeline 1: All expenses (negative amounts), sorted by amount
    auto expenses = transactions
        | std::views::filter([](const Transaction& t) { return t.amount < 0; })
        | std::views::transform([](const Transaction& t) {
            return std::make_pair(t.description, t.amount);
        });

    std::cout << "=== All Expenses ===\n";
    for (const auto& [desc, amt] : expenses) {
        std::cout << std::fixed << std::setprecision(2);
        std::cout << "  " << std::setw(20) << std::left << desc
                  << " $" << std::setw(8) << std::right << amt << "\n";
    }

    // Pipeline 2: Unique categories with spending
    std::vector<std::string> categories;
    for (const auto& t : transactions) {
        if (t.amount < 0) {
            categories.push_back(t.category);
        }
    }

    auto unique_cats = categories
        | std::views::as_const
        | std::ranges::to<std::vector>()
    ;

    std::ranges::sort(unique_cats);
    unique_cats.erase(
        std::ranges::unique(unique_cats).begin(),
        unique_cats.end()
    );

    std::cout << "\n=== Expense Categories ===\n";
    for (const auto& cat : unique_cats) {
        double total = 0.0;
        for (const auto& t : transactions) {
            if (t.category == cat && t.amount < 0) {
                total += t.amount;
            }
        }
        std::cout << std::fixed << std::setprecision(2);
        std::cout << "  " << std::setw(15) << std::left << cat
                  << " $" << std::setw(8) << std::right << total << "\n";
    }

    // Pipeline 3: Income transactions only
    auto income = transactions
        | std::views::filter([](const Transaction& t) { return t.amount > 0; });

    double total_income = 0.0;
    for (const auto& t : income) {
        total_income += t.amount;
    }
    std::cout << "\nTotal income: $" << std::fixed << std::setprecision(2) << total_income << "\n";
}
```

### View Lifetime and Dangling References

Views are **non-owning**: they hold references or iterators into the underlying range. If the
underlying range is destroyed or modified while a view refers to it, the view dangles. This is the
most common source of bugs with ranges [N4950 §26.5.2]:

```cpp
#include <vector>
#include <ranges>
#include <iostream>

std::ranges::filter_view<std::vector<int>&, decltype([](int x) { return x > 3; })>
make_dangling_view() {
    std::vector<int> v = {1, 2, 3, 4, 5};
    return v | std::views::filter([](int x) { return x > 3; });
    // WARNING: v is destroyed here, but the view references v's storage
}

int main() {
    // This compiles but is UNDEFINED BEHAVIOR:
    // The view returned by make_dangling_view() refers to a destroyed vector
    // auto bad = make_dangling_view();
    // for (int x : bad) std::cout << x << "\n";  // UB: dangling

    // Safe pattern: ensure the source outlives the view
    std::vector<int> data = {1, 2, 3, 4, 5};
    auto safe = data | std::views::filter([](int x) { return x > 3; });
    for (int x : safe) std::cout << x << " ";
    std::cout << "\n";
}
```

The key rule: **a view must not outlive the range it references**. This is analogous to the rule for
references and pointers. Owning ranges (`std::vector`, `std::string`) are safe as sources; temporary
ranges created inline are dangerous because their lifetime ends at the semicolon.

### Borrowed Ranges and the `borrowed_range` Concept

Some views can safely outlive their source range. A range models `std::ranges::borrowed_range` if
iteration does not require ownership of the range [N4950 §26.5.2]. This concept is critical for
composability: functions that return views can return views over borrowed ranges safely.

A range `R` models `borrowed_range` if and only if:

- `R` is an lvalue reference, OR
- `std::ranges::enable_borrowed_range<std::remove_cvref_t<R>>` is `true`

Standard borrowed ranges include:

| Range type                             | Borrowed? | Reason                                  |
| -------------------------------------- | --------- | --------------------------------------- |
| `std::string_view`                     | Yes       | Non-owning, trivially copyable          |
| `std::span<T>`                         | Yes       | Non-owning, trivially copyable          |
| `std::ranges::ref_view<T>`             | Yes       | Explicitly holds a reference            |
| `std::ranges::iota_view`               | Yes       | No underlying storage                   |
| `std::ranges::empty_view<T>`           | Yes       | No underlying storage                   |
| `std::ranges::single_view<T>`          | Yes       | Owns element inline, trivially copyable |
| `std::vector<int>&` (lvalue reference) | Yes       | Lvalue reference is always borrowed     |
| `std::vector<int>` (prvalue)           | No        | Owning; destroyed at end of expr        |
| `std::ranges::filter_view`             | No        | Holds reference to source               |
| `std::ranges::transform_view`          | No        | Holds reference to source               |

```cpp
#include <ranges>
#include <iostream>
#include <string_view>

// SAFE: string_view is a borrowed_range
std::ranges::take_view<std::string_view> safe_view() {
    std::string_view sv = "hello world";
    return sv | std::views::take(5);
    // sv is copied into the view; the view owns a copy of the string_view,
    // which points to static storage. This is safe.
}

// UNSAFE: filter_view holds a reference to a temporary vector
// auto unsafe_view() {
//     std::vector<int> v = {1, 2, 3};
//     return v | std::views::filter([](int x) { return x > 1; });
//     // v is destroyed, view dangles
// }

int main() {
    auto v = safe_view();
    for (char c : v) std::cout << c;
    std::cout << "\n";
}
```

### Internals: How `views::take` and `views::drop` Work

`views::take(n)` wraps the source range and a count. Its sentinel compares the count against `n`:

```cpp
// Conceptual implementation (simplified):
template <std::ranges::view V>
class take_view : public std::ranges::view_interface<take_view<V>> {
    V base_;
    std::ranges::range_difference_t<V> count_;

    class sentinel {
        std::ranges::sentinel_t<V> end_;
        std::ranges::range_difference_t<V> count_;
    public:
        bool operator==(const iterator& it) const {
            return it.count_ == 0 || it.current_ == end_;
        }
    };
};
```

Each `operator++` on the iterator decrements the count. When the count reaches zero, the iterator
equals the sentinel and iteration stops. This means `take(n)` consumes at most `n` elements from the
source, and the remaining elements are never visited.

`views::drop(n)` is the dual: its `begin()` advances the source iterator `n` times (or to the end,
whichever comes first). After that, iteration proceeds normally over the remaining elements.

### Internals: How `views::transform` Works

```cpp
// Conceptual implementation (simplified):
template <std::ranges::view V, std::movable F>
class transform_view : public std::ranges::view_interface<transform_view<V, F>> {
    V base_;
    F func_;

    class iterator {
        std::ranges::iterator_t<V> current_;
        F* func_;  // pointer to the stored function

    public:
        auto operator*() const {
            return std::invoke(*func_, *current_);
        }
        iterator& operator++() {
            ++current_;
            return *this;
        }
    };
};
```

Key observation: `operator*` applies the function lazily. The function `func_` is invoked only when
the element is dereferenced. If the view is never iterated (e.g., the element is skipped by
`views::filter`), the function is never called. This is the essence of lazy evaluation in range
pipelines.

### `views::reverse` and Bidirectional Requirements

`views::reverse` requires the underlying range to satisfy `std::ranges::bidirectional_range` because
it needs to start from `end()` and move backwards. Applying `views::reverse` to a single-pass range
(e.g., `views::istream<int>`) is a compile-time error.

```cpp
#include <ranges>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> v = {1, 2, 3, 4, 5};

    // OK: vector is bidirectional
    auto reversed = v | std::views::reverse;
    for (int x : reversed) std::cout << x << " ";
    // Output: 5 4 3 2 1
    std::cout << "\n";

    // COMPILE ERROR: istream is input-only (single-pass), not bidirectional
    // auto bad = std::views::istream<int>(std::cin) | std::views::reverse;
}
```

### `views::zip` and Short-Circuit Semantics

`views::zip(r1, r2, ...)` produces tuples from the zipped ranges and stops when the **shortest**
range is exhausted [N4950 §26.5.7]:

```cpp
#include <ranges>
#include <vector>
#include <string>
#include <iostream>

int main() {
    std::vector<int> nums = {1, 2, 3, 4, 5};
    std::vector<std::string> names = {"one", "two", "three"};

    // Stops at 3 elements (shorter range)
    for (auto&& [n, name] : std::views::zip(nums, names)) {
        std::cout << n << " = " << name << "\n";
    }
    // Output:
    // 1 = one
    // 2 = two
    // 3 = three
}
```

### Common Pitfalls

**1. Iterating a view multiple times:** Some views (like `views::filter` and `views::transform`) are
reusable --- you can iterate them multiple times. However, some views consume their source. For
example, `views::istream&lt;int>` reads from a stream and the elements are consumed on each
iteration. Always check whether the view is a single-pass or multi-pass range.

**2. Materializing a range into a container:** Use `std::ranges::to&lt;Container>(range)` (C++23) or
construct the container directly: `std::vector&lt;int>(range.begin(), range.end())`. Do not store
views long-term --- they are meant for immediate consumption.

**3. Views on temporaries:** `auto v = std::vector{1,2,3} | std::views::take(2);` --- the vector
temporary is destroyed at the end of the full-expression, but `v` still references it. Bind the
source to a named variable first.

**4. Composing views on move-only types:** `views::transform` with a lambda that captures by move
works, but the resulting view may be move-only itself. If you need to store the view, ensure the
source and all closure objects remain valid.

**5. Infinite views in algorithms:** `views::iota(0)` produces an infinite range. Passing it to an
algorithm without a bound (e.g., `std::ranges::for_each`) hangs forever. Always compose with
`views::take(n)` or `views::take_while(pred)` before consuming.

**6. Dangling from `views::filter` + temporary container:** This subtle case creates a dangling view
even though it looks safe:

```cpp
// DANGLING: the vector temporary lives until the semicolon,
// but 'v' is a view that references it. After the semicolon,
// the vector is destroyed.
auto v = std::vector{1, 2, 3, 4, 5} | std::views::filter([](int x) { return x > 3; });
// v is now dangling

// SAFE: bind the container to a named variable first
auto data = std::vector{1, 2, 3, 4, 5};
auto safe = data | std::views::filter([](int x) { return x > 3; });
```

### Range Adaptor Closure Objects

Range adaptors are **closure objects** --- unnamed class types generated by the compiler with an
`operator()` that captures the adaptor's arguments [N4950 §26.5.2]. The pipe operator `|` overloaded
for ranges invokes the closure:

```cpp
#include <ranges>
#include <vector>
#include <iostream>

int main() {
    // A closure object: captures the predicate
    auto is_even = std::views::filter([](int x) { return x % 2 == 0; });
    auto squared = std::views::transform([](int x) { return x * x; });

    // Compose closures into a reusable pipeline
    auto pipeline = is_even | squared;

    std::vector<int> v1 = {1, 2, 3, 4, 5};
    std::vector<int> v2 = {10, 11, 12, 13, 14};

    // Reuse the same pipeline on different ranges
    std::cout << "v1: ";
    for (int x : v1 | pipeline) std::cout << x << " ";
    std::cout << "\n";

    std::cout << "v2: ";
    for (int x : v2 | pipeline) std::cout << x << " ";
    std::cout << "\n";
}
```

Each adaptor (e.g., `std::views::filter(pred)`) returns a closure type that stores `pred`. When
piped with `|`, the closure's `operator()` is called with the range, producing the view. This design
allows adaptors to be named, stored, composed, and reused independently of any specific range --- a
form of partial application at the type level.

The type-erased composition is achieved through `operator|` overloads. Given a range `r` and a
closure `c`, `r | c` is equivalent to `c(r)`. Given two closures `c1` and `c2`, `c1 | c2` produces a
new closure that, when applied to a range `r`, evaluates as `c2(c1(r))` --- function composition in
the standard mathematical sense [N4950 §26.5.2].

### `views::split` and Delimiter Handling

`views::split` splits a range based on a delimiter. The delimiter can be a single element or a range
of elements. Each element of the resulting view is itself a range (a sub-view of the input):

```cpp
#include <iostream>
#include <ranges>
#include <string>
#include <vector>

int main() {
    // Split by single character
    std::string csv = "red,green,blue,yellow";

    auto colors = csv | std::views::split(',')
        | std::views::transform([](auto&& rng) {
            return std::string(rng.begin(), rng.end());
        });

    for (const auto& color : colors) {
        std::cout << color << "\n";
    }
    // Output:
    // red
    // green
    // blue
    // yellow

    // Split by whitespace (using find + substr via views)
    std::string text = "  the   quick brown   fox  ";

    // views::split with a single space splits on every space,
    // producing empty subranges for consecutive delimiters
    auto words = text | std::views::split(' ')
        | std::views::transform([](auto&& rng) {
            return std::string(rng.begin(), rng.end());
        })
        | std::views::filter([](const std::string& s) {
            return !s.empty();  // filter out empty strings from consecutive spaces
        });

    for (const auto& word : words) {
        std::cout << "[" << word << "] ";
    }
    // Output: [the] [quick] [brown] [fox]
}
```

### `views::take_while` and `views::drop_while`

Unlike `views::take(n)` and `views::drop(n)` which count elements, `views::take_while(pred)` and
`views::drop_while(pred)` use a predicate to determine when to stop taking or start yielding:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> v = {1, 2, 3, 10, 20, 30, 4, 5};

    // take_while: take elements while they satisfy the predicate
    auto leading_small = v | std::views::take_while([](int x) { return x < 10; });
    std::cout << "Leading small: ";
    for (int x : leading_small) std::cout << x << " ";
    // Output: Leading small: 1 2 3
    std::cout << "\n";

    // drop_while: skip elements while they satisfy the predicate
    auto after_large = v | std::views::drop_while([](int x) { return x < 10; });
    std::cout << "After large: ";
    for (int x : after_large) std::cout << x << " ";
    // Output: After large: 10 20 30 4 5
    std::cout << "\n";

    // Combined: extract the middle "large" section
    auto large_section = v
        | std::views::drop_while([](int x) { return x < 10; })
        | std::views::take_while([](int x) { return x >= 10; });
    std::cout << "Large section: ";
    for (int x : large_section) std::cout << x << " ";
    // Output: Large section: 10 20 30
    std::cout << "\n";
}
```

### Composing with `std::views::elements` and `std::views::keys`/`values`

These adaptors are particularly useful when working with maps or ranges of tuples:

```cpp
#include <iostream>
#include <map>
#include <ranges>
#include <vector>
#include <tuple>

int main() {
    // Extract values from a map
    std::map<std::string, int> scores = {{"alice", 95}, {"bob", 87}, {"charlie", 92}};

    auto top_scores = scores
        | std::views::values
        | std::views::filter([](int s) { return s >= 90; });

    std::cout << "Top scores: ";
    for (int s : top_scores) std::cout << s << " ";
    // Output: Top scores: 95 92
    std::cout << "\n";

    // Extract elements from a range of tuples
    std::vector<std::tuple<int, std::string, double>> records = {
        {1, "alice", 3.5},
        {2, "bob", 2.8},
        {3, "charlie", 3.9},
    };

    auto names = records | std::views::elements<1>;
    std::cout << "Names: ";
    for (const auto& name : names) std::cout << name << " ";
    // Output: Names: alice bob charlie
    std::cout << "\n";

    auto gpas = records | std::views::elements<2>;
    std::cout << "GPAs: ";
    for (double gpa : gpas) std::cout << gpa << " ";
    // Output: GPAs: 3.5 2.8 3.9
    std::cout << "\n";
}
```

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Projections and Callable Objects](./3_projections.md)
- [Range Materialization](./4_range_materialization.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)
