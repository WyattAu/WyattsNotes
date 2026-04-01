---
title: Algorithms and Ranges
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: algorithms-and-ranges
---

## 1. The Iterator-Sentinel Model

### 1.1 Iterators and Sentinels in C++20

C++20 fundamentally restructured the standard library around **ranges and views**, introducing the iterator-sentinel model as the primary abstraction for sequence traversal [N4950 §25.3]. A **range** is anything you can call `begin()` and `end()` on [N4950 §25.3.5]. A **sentinel** is the endpoint of a range that is not necessarily an iterator.

The key distinction from the traditional iterator-pair model:

- **Traditional (C++17)**: A range is defined by a pair of iterators `[begin, end)`, both of the same type `I`.
- **C++20**: A range is defined by an iterator `begin` and a sentinel `end`, potentially of different types `I` and `S` where `std::sentinel_for<S, I>` holds [N4950 §25.3.5.2].

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

### 1.2 `std::ranges::begin` and `std::ranges::end`

`std::ranges::begin(E)` and `std::ranges::end(E)` are customization point objects (CPOs) [N4950 §25.3.6] that resolve to the appropriate `begin`/`end` function for an expression `E`. The lookup follows this order [N4950 §25.3.6.2]:

1. If `E` is an lvalue or rvalue of array type, returns `E + 0` and `E + N`.
2. If `E` has a member `begin()` / `end()`, uses it (ADL-qualified).
3. Otherwise, uses `std::begin(E)` / `std::end(E)`.

This differs from `std::begin` / `std::end` in that it properly handles ranges that return different types from `begin()` and `end()` (i.e., iterator-sentinel pairs).

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

### 1.3 Sentinel Types: `default_sentinel` and `unreachable_sentinel`

The standard library provides two sentinel types [N4950 §25.5]:

**`std::default_sentinel`** [N4950 §25.5.3] is used with `std::counted_iterator<I>` to denote the end of a counted range. A `counted_iterator` pairs an underlying iterator with a remaining count and compares equal to `default_sentinel` when the count reaches zero.

**`std::unreachable_sentinel`** [N4950 §25.5.4] is a sentinel type that never compares equal to any iterator. It is used as a performance hint to the compiler and standard library algorithms, indicating that a range theoretically extends to infinity (or at least beyond the actual data). This enables optimizations in algorithms like `std::copy` that can eliminate bounds checks.

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

### 1.4 Custom Sentinel for Null-Terminated String

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

:::info
The iterator-sentinel model eliminates the need to compute `end` iterators for bounded sequences. For null-terminated strings, this avoids computing `strlen` before iteration. For counted ranges, it avoids computing the end pointer from a base + count.
:::

## 2. Range Adaptors, Views, and Composition Pipelines

### 2.1 Range Adaptors Overview

Range adaptors are lazy, composable transformations applied to ranges via the pipe operator `|` [N4950 §26.5.2]. Each adaptor returns a **view** --- a lightweight object that refers to the underlying elements without owning them. Views satisfy `std::ranges::view` [N4950 §26.5.2] and have $O(1)$ construction and destruction.

The standard library provides these range adaptors [N4950 §26.5.2 Table 96]:

| Adaptor                   | Description                                |
| ------------------------- | ------------------------------------------ | -------------------- |
| `views::filter(pred)`     | Elements satisfying predicate              |
| `views::transform(f)`     | Apply function to each element             |
| `views::take(n)`          | First `n` elements                         |
| `views::drop(n)`          | Skip first `n` elements                    |
| `views::reverse`          | Reverse order                              |
| `views::zip(r1, r2, ...)` | Zip multiple ranges into tuples            |
| `views::split(delim)`     | Split by delimiter                         |
| `views::join`             | Flatten a range of ranges                  |
| `views::enumerate`        | Pair each element with its index (C++23)   |
| `views::iota(start)`      | Infinite sequence from `start`             |
| `views::keys`             | Extract keys from associative containers   |
| `views::values`           | Extract values from associative containers |
| `views::take_while(pred)` | Take elements while predicate holds        |
| `views::drop_while(pred)` | Drop elements while predicate holds        |
| `views::elements<N>`      | Extract Nth element from tuple-like values |
| `views::transform(f)      | views::filter(pred)`                       | Composition via pipe |

### 2.2 Lazy Evaluation: Views Are Composable Without Materialization

Views are **lazy**: no computation occurs until the view is iterated. This means you can compose arbitrarily many adaptors without paying any cost until you actually consume the elements.

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
Views are so lightweight that they typically consist of just a few pointers and sizes stored on the stack. The entire pipeline in the example above likely compiles to a tight loop with no heap allocations.
:::

### 2.3 View Composition with the Pipe Operator

The pipe operator `|` is the standard way to compose range adaptors [N4950 §26.5.2]. Each adaptor is a **callable object** that returns a closure type when called with arguments. The pipe operator is defined via `std::ranges::views::adaptor` internally.

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

### 2.4 Advanced View Composition: Zip, Join, Enumerate

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

### 2.5 Complete Data Processing Pipeline

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

## 3. Projections and Callable Objects

### 3.1 Projections: Transforming Elements During Algorithm Execution

A **projection** is a callable that transforms an element before it is passed to the algorithm's predicate or comparison function [N4950 §25.3.5.7]. Projections are a C++20 ranges feature that allows algorithms to operate on **derived data** without modifying the original elements or creating temporary copies.

The projection is applied transparently: the algorithm "sees" the projected value, but the actual swap, move, or assignment operates on the original element.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>
#include <string>

struct Employee {
    std::string name;
    int id;
    double salary;
};

int main() {
    std::vector<Employee> staff = {
        {"Alice", 3, 95000.0},
        {"Bob", 1, 88000.0},
        {"Charlie", 2, 105000.0}
    };

    // Sort by salary using a projection [N4950 §25.7.7]
    // The projection extracts salary; comparison operates on the projected value
    // But the actual reordering swaps Employee objects
    std::ranges::sort(staff, std::ranges::less{}, &Employee::salary);

    std::cout << "Sorted by salary:\n";
    for (const auto& emp : staff) {
        std::cout << "  " << emp.name << ": $" << emp.salary << "\n";
    }
    // Output (ascending salary):
    //   Bob: $88000
    //   Alice: $95000
    //   Charlie: $105000

    // Sort by name using projection
    std::ranges::sort(staff, {}, &Employee::name);

    std::cout << "\nSorted by name:\n";
    for (const auto& emp : staff) {
        std::cout << "  " << emp.name << " (id=" << emp.id << ")\n";
    }
    // Output:
    //   Alice (id=3)
    //   Bob (id=1)
    //   Charlie (id=2)
}
```

### 3.2 `std::ranges::sort` with Projection

`std::ranges::sort` [N4950 §25.7.7] accepts an optional projection parameter. The signature is:

$$
\text{sort}(r, comp = \{\}, proj = \{\})
$$

where `comp` compares the **projected** values, and `proj` maps each element to the value used for comparison.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>
#include <algorithm>

struct Student {
    std::string name;
    double gpa;
    int year;
};

int main() {
    std::vector<Student> students = {
        {"Alice",   3.8, 2},
        {"Bob",     3.2, 4},
        {"Charlie", 3.9, 1},
        {"Diana",   3.5, 3},
        {"Eve",     3.8, 2}
    };

    // Sort by GPA descending, then by name ascending
    // Projection + custom comparator
    auto by_gpa_desc = [](const Student& a, const Student& b) {
        if (a.gpa != b.gpa) return a.gpa > b.gpa;
        return a.name < b.name;
    };
    std::ranges::sort(students, by_gpa_desc);

    std::cout << "By GPA (desc), name (asc):\n";
    for (const auto& s : students) {
        std::cout << "  " << std::fixed << std::setprecision(1)
                  << s.gpa << " " << s.name << "\n";
    }

    // Sort by year using projection (member pointer)
    std::ranges::sort(students, {}, &Student::year);

    std::cout << "\nBy year:\n";
    for (const auto& s : students) {
        std::cout << "  Year " << s.year << ": " << s.name << "\n";
    }

    // Find the student with the highest GPA using max_element with projection
    auto best = std::ranges::max_element(students, {}, &Student::gpa);
    if (best != students.end()) {
        std::cout << "\nTop student: " << best->name
                  << " (GPA: " << best->gpa << ")\n";
    }
}
```

### 3.3 `std::ranges::count_if` with Projection

Projections work with any ranges algorithm that accepts a predicate. `std::ranges::count_if` [N4950 §25.7.1] counts elements where the projected value satisfies the predicate:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

struct Product {
    std::string name;
    double price;
    std::string category;
    bool in_stock;
};

int main() {
    std::vector<Product> inventory = {
        {"Laptop",     999.99,  "Electronics", true},
        {"Mouse",       29.99,  "Electronics", true},
        {"Keyboard",    79.99,  "Electronics", false},
        {"Desk",       299.99,  "Furniture",   true},
        {"Chair",      449.99,  "Furniture",   true},
        {"Monitor",    349.99,  "Electronics", true},
        {"Lamp",        49.99,  "Furniture",   false}
    };

    // Count expensive items (price > 100) using projection
    auto expensive_count = std::ranges::count_if(
        inventory,
        [](double price) { return price > 100.0; },
        &Product::price
    );
    std::cout << "Items over $100: " << expensive_count << "\n";
    // Output: Items over $100: 4

    // Count items in stock
    auto in_stock_count = std::ranges::count_if(
        inventory,
        [](bool stock) { return stock; },
        &Product::in_stock
    );
    std::cout << "Items in stock: " << in_stock_count << "\n";
    // Output: Items in stock: 5

    // Count electronics
    auto electronics_count = std::ranges::count_if(
        inventory,
        [](const std::string& cat) { return cat == "Electronics"; },
        &Product::category
    );
    std::cout << "Electronics: " << electronics_count << "\n";
    // Output: Electronics: 4

    // Use projection with views
    auto electronic_names = inventory
        | std::views::filter([](const Product& p) { return p.category == "Electronics"; })
        | std::views::transform([](const Product& p) { return p.name; });

    std::cout << "Electronic products: ";
    for (const auto& name : electronic_names) {
        std::cout << name << " ";
    }
    // Output: Electronic products: Laptop Mouse Keyboard Monitor
    std::cout << "\n";
}
```

:::info
The projection parameter appears **after** the predicate in the argument list for most algorithms. The pattern is: `algorithm(range, predicate, projection)`. The predicate receives the **projected** value, not the original element.
:::

## 4. Range Materialization (std::ranges::to)

### 4.1 `std::ranges::to<T>` (C++23)

C++23 introduced `std::ranges::to<T>` [N4950 §26.5.8], which materializes a lazy view into an eager container. This is the bridge between the lazy world of views and the eager world of containers.

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

### 4.2 Converting Lazy Views to Eager Containers

The key distinction between views and containers [N4950 §26.5.2]:

| Property       | View                | Container               |
| -------------- | ------------------- | ----------------------- |
| Ownership      | Borrows elements    | Owns elements           |
| Lifetime       | Tied to source      | Independent             |
| Construction   | $O(1)$              | $O(n)$                  |
| Destruction    | $O(1)$              | $O(n)$                  |
| Composition    | Chainable with `\|` | Must materialize        |
| Element access | Lazy (on iteration) | Eager (on construction) |

`std::ranges::to<T>` performs the materialization eagerly: it iterates the entire view and inserts each element into the target container. This is $O(n)$ in the number of elements.

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
Prefer `std::ranges::to<std::vector>()` when you need to consume a view multiple times, pass it to a non-range API, or decouple its lifetime from the source. The cost is $O(n)$ for the materialization, but you gain ownership and stability.
:::

## 5. Parallel Algorithms and Execution Policies

### 5.1 Execution Policies

C++17 introduced **execution policies** as the first argument to many standard algorithms, enabling parallel and vectorized execution [N4950 §25.5]. The three standard policies are defined in `<execution>`:

| Policy                      | Type                  | Behavior [N4950 §25.5.2]                                     |
| --------------------------- | --------------------- | ------------------------------------------------------------ |
| `std::execution::seq`       | Sequenced             | Sequential execution (default if no policy specified)        |
| `std::execution::par`       | Parallel              | May execute in multiple threads                              |
| `std::execution::par_unseq` | Parallel + Vectorized | May execute in multiple threads AND vectorize within threads |

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <chrono>

int main() {
    constexpr std::size_t N = 10'000'000;
    std::vector<int> v(N);
    for (std::size_t i = 0; i < N; ++i) {
        v[i] = static_cast<int>(N - i);  // Reverse-sorted
    }

    // Sequential sort [N4950 §25.5.2]
    auto start = std::chrono::high_resolution_clock::now();
    std::vector<int> v_seq = v;
    std::sort(std::execution::seq, v_seq.begin(), v_seq.end());
    auto end = std::chrono::high_resolution_clock::now();
    auto seq_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    // Parallel sort [N4950 §25.5.2]
    start = std::chrono::high_resolution_clock::now();
    std::vector<int> v_par = v;
    std::sort(std::execution::par, v_par.begin(), v_par.end());
    end = std::chrono::high_resolution_clock::now();
    auto par_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    std::cout << "Sequential sort: " << seq_ms << " ms\n";
    std::cout << "Parallel sort:   " << par_ms << " ms\n";
    std::cout << "Speedup:         " << static_cast<double>(seq_ms) / par_ms << "x\n";

    // Verify correctness
    std::cout << "seq sorted: " << std::ranges::is_sorted(v_seq) << "\n";
    std::cout << "par sorted: " << std::ranges::is_sorted(v_par) << "\n";
}
```

### 5.2 `std::sort`, `std::for_each`, and `std::reduce` with Parallel Policies

Several standard algorithms accept execution policies [N4950 §25.7]:

- **`std::sort`** [N4950 §25.7.7]: Parallel sort using `par` or `par_unseq`
- **`std::for_each`** [N4950 §25.7.1]: Apply function to each element (parallel with `par`)
- **`std::reduce`** [N4950 §25.7.4]: Parallel reduction (like `accumulate` but with no guaranteed order)
- **`std::transform`** [N4950 §25.7.7]: Apply function in parallel
- **`std::count` / `std::count_if`** [N4950 §25.7.1]: Count in parallel
- **`std::find` / `std::find_if`** [N4950 §25.7.2]: Search in parallel
- **`std::copy` / `std::transform`** [N4950 §25.7.7]: Copy/transform in parallel

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <string>

int main() {
    std::vector<int> data(10'000'000);
    for (std::size_t i = 0; i < data.size(); ++i) {
        data[i] = static_cast<int>(i + 1);
    }

    // Parallel for_each [N4950 §25.7.1]
    std::atomic<int> counter{0};
    std::for_each(std::execution::par, data.begin(), data.end(),
        [&counter](int x) {
            // NOTE: counter increment is atomic to avoid data race
            counter.fetch_add(1, std::memory_order_relaxed);
        });
    std::cout << "Processed " << counter.load() << " elements (parallel for_each)\n";

    // Parallel reduce [N4950 §25.7.4]
    // Unlike accumulate, reduce has no guaranteed order of combination
    // This means the binary operation must be commutative and associative
    // for well-defined results
    auto sum = std::reduce(
        std::execution::par,
        data.begin(), data.end(),
        0L  // initial value (use long to avoid overflow)
    );
    std::cout << "Sum (reduce): " << sum << "\n";

    // Parallel transform_reduce [N4950 §25.7.4]
    auto sum_of_squares = std::transform_reduce(
        std::execution::par,
        data.begin(), data.end(),
        0L,
        std::plus<>{},
        [](int x) { return static_cast<long>(x) * x; }
    );
    std::cout << "Sum of squares: " << sum_of_squares << "\n";

    // Parallel count_if [N4950 §25.7.1]
    auto prime_count = std::count_if(
        std::execution::par,
        data.begin(), data.end(),
        [](int n) {
            if (n < 2) return false;
            for (int d = 2; d * d <= n; ++d) {
                if (n % d == 0) return false;
            }
            return true;
        }
    );
    std::cout << "Primes found: " << prime_count << "\n";
}
```

### 5.3 Data Races in Parallel Algorithms

:::warning
The most common pitfall with parallel algorithms is **data races**. When an algorithm uses `std::execution::par`, the user-provided function objects may be called concurrently from multiple threads. The standard imposes specific requirements [N4950 §25.5.1]:

1. The function object must not modify elements of the input range (unless the algorithm is documented as modifying them, like `sort` or `transform`).
2. If the function object modifies any other data, the caller is responsible for ensuring synchronization.
3. Element access functions (including the function object) must not call `std::terminate`, block, or access any object that is not element-accessible.

Violating these rules results in **undefined behavior**.
:::

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <mutex>
#include <thread>

// DANGEROUS: Data race in parallel algorithm
void bad_example() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    int sum = 0;  // SHARED, unsynchronized!
    // DATA RACE: multiple threads writing to 'sum' concurrently
    // std::for_each(std::execution::par, v.begin(), v.end(),
    //     [&sum](int x) { sum += x; });  // UB!
    std::cout << "This is undefined behavior.\n";
}

// CORRECT: Use reduce (parallel-friendly)
void good_example_reduce() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // std::reduce is designed for parallel use [N4950 §25.7.4]
    auto sum = std::reduce(
        std::execution::par,
        v.begin(), v.end(),
        0  // identity element for addition
    );
    std::cout << "Sum (reduce): " << sum << "\n";  // 55
}

// CORRECT: Use atomic for simple accumulations
void good_example_atomic() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    std::atomic<int> sum{0};
    std::for_each(std::execution::par, v.begin(), v.end(),
        [&sum](int x) {
            sum.fetch_add(x, std::memory_order_relaxed);
        });
    std::cout << "Sum (atomic): " << sum.load() << "\n";  // 55
}

// CORRECT: Use mutex for complex operations
void good_example_mutex() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    std::mutex mtx;
    int sum = 0;
    std::for_each(std::execution::par, v.begin(), v.end(),
        [&sum, &mtx](int x) {
            std::lock_guard lock(mtx);
            sum += x;
        });
    std::cout << "Sum (mutex): " << sum << "\n";  // 55
}

int main() {
    good_example_reduce();
    good_example_atomic();
    good_example_mutex();
}
```

### 5.4 `std::reduce` vs `std::accumulate`: Order Guarantees

`std::accumulate` [N4950 §25.7.4] processes elements **left to right**, guaranteeing a specific evaluation order:

$$
\text{accumulate}([a_1, a_2, \ldots, a_n], init, op) = op(\ldots op(op(init, a_1), a_2) \ldots, a_n)
$$

`std::reduce` [N4950 §25.7.4] has **no guaranteed order** when used with parallel execution. Elements may be combined in any order and in any grouping:

$$
\text{reduce}([a_1, a_2, \ldots, a_n], init, op) = \text{any binary tree of } op \text{ applications}
$$

This means `op` must be **commutative** and **associative** for well-defined results with `reduce`:

$$
op(a, b) = op(b, a) \quad \text{(commutative)}
$$

$$
op(op(a, b), c) = op(a, op(b, c)) \quad \text{(associative)}
$$

```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <execution>
#include <iomanip>

int main() {
    std::vector<double> values = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0};

    // accumulate: left-to-right, deterministic
    auto acc = std::accumulate(values.begin(), values.end(), 0.0);
    std::cout << std::fixed << std::setprecision(15);
    std::cout << "accumulate: " << acc << "\n";

    // reduce: parallel, may produce slightly different result
    // due to different floating-point addition order
    auto red = std::reduce(std::execution::par, values.begin(), values.end(), 0.0);
    std::cout << "reduce (par): " << red << "\n";

    // For floating-point, the results may differ slightly
    // This is a known issue with parallel reduction of floats
    // Both results are "correct" within floating-point semantics

    // Safe use: integer arithmetic where order doesn't matter
    std::vector<int> ints = {1, 2, 3, 4, 5, 6, 7, 8};
    auto int_sum = std::reduce(std::execution::par, ints.begin(), ints.end(), 0);
    std::cout << "Integer sum: " << int_sum << "\n";  // Always 36
}
```

:::warning
**Never use `std::reduce` with floating-point arithmetic if you need bit-exact reproducibility.** Floating-point addition is not associative (e.g., `(0.1 + 0.2) + 0.3 != 0.1 + (0.2 + 0.3)` in IEEE 754). Use `std::accumulate` for deterministic floating-point results, or use compensated summation (Kahan summation) for accuracy.
:::

### 5.5 Complete Parallel Pipeline Example

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <random>
#include <chrono>
#include <string>
#include <cmath>

struct City {
    std::string name;
    double latitude;
    double longitude;
    double population_millions;
};

int main() {
    // Generate sample data
    std::vector<City> cities = {
        {"Tokyo",       35.6762, 139.6503, 37.4},
        {"Delhi",       28.7041,  77.1025, 32.9},
        {"Shanghai",    31.2304, 121.4737, 29.2},
        {"São Paulo",  -23.5505, -46.6333, 22.4},
        {"Mexico City", 19.4326, -99.1332, 21.8},
        {"Cairo",       30.0444,  31.2357, 21.3},
        {"Mumbai",      19.0760,  72.8777, 20.7},
        {"Beijing",     39.9042, 116.4074, 20.9},
        {"Dhaka",       23.8103,  90.4125, 22.5},
        {"Osaka",       34.6937, 135.5023, 19.1},
        {"New York",    40.7128, -74.0060, 18.8},
        {"Karachi",     24.8607,  67.0011, 16.8},
    };

    // 1. Parallel sort by population descending
    std::sort(std::execution::par, cities.begin(), cities.end(),
        [](const City& a, const City& b) {
            return a.population_millions > b.population_millions;
        });

    std::cout << "=== Top 5 Cities by Population ===\n";
    for (std::size_t i = 0; i < 5 && i < cities.size(); ++i) {
        std::cout << "  " << (i + 1) << ". " << cities[i].name
                  << " (" << cities[i].population_millions << "M)\n";
    }

    // 2. Parallel reduce: total population
    auto total_pop = std::reduce(
        std::execution::par,
        cities.begin(), cities.end(),
        0.0,
        [](double acc, const City& c) { return acc + c.population_millions; }
    );
    std::cout << "\nTotal population: " << total_pop << "M\n";

    // 3. Parallel transform_reduce: find max population
    auto max_pop = std::transform_reduce(
        std::execution::par,
        cities.begin(), cities.end(),
        0.0,
        [](double a, double b) { return a > b ? a : b; },
        [](const City& c) { return c.population_millions; }
    );
    std::cout << "Max population: " << max_pop << "M\n";

    // 4. Parallel count_if: cities in Northern hemisphere (lat > 0)
    auto northern = std::count_if(
        std::execution::par,
        cities.begin(), cities.end(),
        [](const City& c) { return c.latitude > 0; }
    );
    std::cout << "Northern hemisphere cities: " << northern << "\n";

    // 5. Parallel for_each: compute and display distance from Tokyo
    const City& tokyo = cities.back();  // After sort, Tokyo should be first
    // Find Tokyo
    auto tokyo_it = std::find_if(cities.begin(), cities.end(),
        [](const City& c) { return c.name == "Tokyo"; });

    if (tokyo_it != cities.end()) {
        std::vector<double> distances(cities.size());

        std::transform(std::execution::par,
            cities.begin(), cities.end(),
            distances.begin(),
            [&tokyo = *tokyo_it](const City& c) {
                // Haversine approximation (simplified)
                auto deg_to_rad = [](double deg) { return deg * 3.14159265 / 180.0; };
                double dlat = deg_to_rad(c.latitude - tokyo.latitude);
                double dlon = deg_to_rad(c.longitude - tokyo.longitude);
                double a = std::sin(dlat / 2) * std::sin(dlat / 2)
                         + std::cos(deg_to_rad(tokyo.latitude))
                         * std::cos(deg_to_rad(c.latitude))
                         * std::sin(dlon / 2) * std::sin(dlon / 2);
                double c_val = 2 * std::atan2(std::sqrt(a), std::sqrt(1 - a));
                return 6371.0 * c_val;  // Earth radius in km
            }
        );

        std::cout << "\n=== Distance from Tokyo ===\n";
        for (std::size_t i = 0; i < cities.size(); ++i) {
            std::cout << "  " << cities[i].name << ": "
                      << static_cast<int>(distances[i]) << " km\n";
        }
    }
}
```

:::info
Not all algorithms have parallel overloads. The following algorithms do **not** support execution policies: `std::stable_sort` (until C++20), `std::nth_element` (until C++20), and `std::inplace_merge`. Check the standard or your compiler's documentation for the full list of parallel-capable algorithms.
:::
