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

:::tip
Views are so lightweight that they typically consist of just a few pointers and sizes stored
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
        | std::views::as_const  // prevent modification
        | std::ranges::to<std::vector>()  // materialize
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

### Common Pitfalls

**1. Iterating a view multiple times:** Some views (like `views::filter` and `views::transform`) are
reusable — you can iterate them multiple times. However, some views consume their source. For
example, `views::istream&lt;int>` reads from a stream and the elements are consumed on each
iteration. Always check whether the view is a single-pass or multi-pass range.

**2. Materializing a range into a container:** Use `std::ranges::to&lt;Container>(range)` (C++23) or
construct the container directly: `std::vector&lt;int>(range.begin(), range.end())`. Do not store
views long-term — they are meant for immediate consumption.

**3. Views on temporaries:** `auto v = std::vector{1,2,3} | std::views::take(2);` — the vector
temporary is destroyed at the end of the full-expression, but `v` still references it. Bind the
source to a named variable first.

**4. Composing views on move-only types:** `views::transform` with a lambda that captures by move
works, but the resulting view may be move-only itself. If you need to store the view, ensure the
source and all closure objects remain valid.

### Range Adaptor Closure Objects

Range adaptors are **closure objects** — unnamed class types generated by the compiler with an
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
allows adaptors to be named, stored, composed, and reused independently of any specific range — a
form of partial application at the type level.

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Projections and Callable Objects](./3_projections.md)
- [Range Materialization](./4_range_materialization.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)

:::
