---
title: Projections and Callable Objects
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: projections-and-callable-objects
---

## Projections and Callable Objects

A **projection** is a callable that transforms an element before it is passed to an algorithm's
predicate or comparison function. Projections are a C++20 ranges feature that allows algorithms to
operate on **derived data** without modifying the original elements or creating temporary copies.
The actual swap, move, or assignment operates on the original element, while the algorithm "sees"
the projected value.

### Projections: Transforming Elements During Algorithm Execution

A **projection** is a callable that transforms an element before it is passed to the algorithm's
predicate or comparison function [N4950 §25.3.5.7]. Projections are a C++20 ranges feature that
allows algorithms to operate on **derived data** without modifying the original elements or creating
temporary copies.

The projection is applied transparently: the algorithm "sees" the projected value, but the actual
swap, move, or assignment operates on the original element.

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

### `std::ranges::sort` with Projection

`std::ranges::sort` [N4950 §25.7.7] accepts an optional projection parameter. The signature is:

$$
\mathrm{sort}(r, comp = \\{\\}, proj = \\{\\})
$$

where `comp` compares the **projected** values, and `proj` maps each element to the value used for
comparison.

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

### `std::ranges::count_if` with Projection

Projections work with any ranges algorithm that accepts a predicate. `std::ranges::count_if` [N4950
§25.7.1] counts elements where the projected value satisfies the predicate:

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

:::info The projection parameter appears **after** the predicate in the argument list for most
algorithms. The pattern is: `algorithm(range, predicate, projection)`. The predicate receives the
**projected** value, not the original element. :::

### Projection Mechanics: What Happens Under the Hood

When an algorithm like `std::ranges::sort` receives a projection, the comparison is effectively
rewritten as `comp(proj(elem1), proj(elem2))` for every pair of elements compared. The projection is
applied lazily — it is not stored or cached. This means:

1. The projection is called **every time** an element is accessed by the algorithm, not once per
   element.
2. The projection must be a pure function (no side effects) for predictable behavior.
3. The projection's return type must be comparable with the given comparator.

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>
#include <string>

struct Record {
    std::string key;
    int primary;
    int secondary;
};

int main() {
    std::vector<Record> data = {
        {"alpha", 3, 10},
        {"beta",  1, 20},
        {"gamma", 3, 5},
        {"delta", 2, 15},
    };

    // Multi-key sort: first by primary, then by secondary
    // The projection returns a pair, and std::ranges::less compares lexicographically
    std::ranges::sort(data, std::ranges::less{}, [](const Record& r) {
        return std::tie(r.primary, r.secondary);
    });

    std::cout << "Multi-key sort:\n";
    for (const auto& r : data) {
        std::cout << "  " << r.key << ": (" << r.primary << ", " << r.secondary << ")\n";
    }
    // Output:
    //   beta: (1, 20)
    //   delta: (2, 15)
    //   gamma: (3, 5)
    //   alpha: (3, 10)
}
```

### Projections with `std::ranges::find_if` and `std::ranges::any_of`

Projections are not limited to sorting. Any ranges algorithm that accepts a callable parameter
supports projections:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

struct User {
    std::string name;
    int age;
    bool active;
};

int main() {
    std::vector<User> users = {
        {"Alice", 30, true},
        {"Bob", 25, false},
        {"Charlie", 35, true},
        {"Diana", 28, false},
    };

    // Find first active user
    auto it = std::ranges::find_if(users, std::identity{}, &User::active);
    if (it != users.end()) {
        std::cout << "First active: " << it->name << "\n";
    }
    // Output: First active: Alice

    // Check if any user is over 30
    bool has_elderly = std::ranges::any_of(users, [](int age) { return age &gt; 30; }, &User::age);
    std::cout << "Has user over 30: " << has_elderly << "\n";
    // Output: Has user over 30: true

    // Count inactive users
    auto inactive = std::ranges::count_if(users, std::logical_not{}, &User::active);
    std::cout << "Inactive users: " << inactive << "\n";
    // Output: Inactive users: 2

    // Transform with projection: extract names of active users
    auto active_names = users
        | std::views::filter(std::identity{}, &User::active)
        | std::views::transform(&User::name);

    std::cout << "Active users: ";
    for (const auto& name : active_names) {
        std::cout << name << " ";
    }
    std::cout << "\n";
    // Output: Active users: Alice Charlie
}
```

### Identity Projection and `std::identity`

`std::identity` [N4950 §20.14.4] is the identity function object. It returns its argument unchanged.
It is useful as a projection when you want the predicate to receive the element directly, making the
intent explicit:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <string>

struct Item {
    std::string name;
    double weight;
};

int main() {
    std::vector<Item> items = {
        {"Feather", 0.01},
        {"Brick", 2.5},
        {"Phone", 0.2},
    };

    // Using std::identity explicitly — predicate receives the full element
    auto heavy = std::ranges::find_if(
        items,
        [](const Item& item) { return item.weight &gt; 1.0; },
        std::identity{}
    );

    if (heavy != items.end()) {
        std::cout << "Heavy item: " << heavy->name << "\n";
    }
    // Output: Heavy item: Brick
}
```

### Projections with Range Views

Projections and range views solve similar problems but at different levels. Projections are
per-algorithm; views are compositional pipelines. Use projections when you need a single algorithm
to operate on derived data. Use views when you need to build a processing pipeline:

```cpp
#include <iostream>
#include <vector>
#include <ranges>
#include <algorithm>
#include <string>
#include <numeric>

struct Transaction {
    std::string id;
    double amount;
    std::string category;
};

int main() {
    std::vector<Transaction> txns = {
        {"T001", 100.0,  "salary"},
        {"T002", -45.99, "food"},
        {"T003", -12.50, "transport"},
        {"T004", 200.0,  "salary"},
        {"T005", -89.99, "rent"},
        {"T006", -15.00, "food"},
    };

    // APPROACH 1: Projection with algorithm
    auto total_income = std::ranges::fold_left(
        txns | std::views::filter([](const Transaction& t) { return t.amount &gt; 0; }),
        0.0,
        std::plus{},
        &Transaction::amount
    );
    std::cout << "Total income: " << total_income << "\n";

    // APPROACH 2: View pipeline then algorithm
    auto food_amounts = txns
        | std::views::filter([](const Transaction& t) { return t.category == "food"; })
        | std::views::transform(&Transaction::amount);

    auto food_total = std::ranges::fold_left(food_amounts, 0.0, std::plus{});
    std::cout << "Food spending: " << food_total << "\n";

    // APPROACH 3: Projection for sorting, then view for extraction
    std::ranges::sort(txns, std::ranges::greater{}, &Transaction::amount);
    auto top_two = txns | std::views::take(2) | std::views::transform(&Transaction::id);
    std::cout << "Largest transactions: ";
    for (const auto& id : top_two) {
        std::cout << id << " ";
    }
    std::cout << "\n";
    // Output:
    //   Total income: 300
    //   Food spending: -60.99
    //   Largest transactions: T004 T001
}
```

### Projection on Iterated Types

Projections also work on non-container ranges, including `std::map` where the iterated type is
`std::pair<const Key, Value>`. This is a common use case:

```cpp
#include <iostream>
#include <map>
#include <ranges>
#include <string>

int main() {
    std::map<std::string, int> scores = {
        {"Alice", 95},
        {"Bob", 87},
        {"Charlie", 92},
        {"Diana", 98},
    };

    // Find the student with the highest score
    // Projection extracts .second (the value) from each pair
    auto best = std::ranges::max_element(scores, std::ranges::less{}, &std::pair<const std::string, int>::second);
    if (best != scores.end()) {
        std::cout << "Top student: " << best->first << " (" << best->second << ")\n";
    }
    // Output: Top student: Diana (98)

    // Check if any score is above 95
    bool has_top = std::ranges::any_of(
        scores,
        [](int score) { return score &gt; 95; },
        &std::pair<const std::string, int>::second
    );
    std::cout << "Score above 95: " << has_top << "\n";
    // Output: Score above 95: true
}
```

### Algorithms That Do NOT Support Projections

Not all ranges algorithms accept projections. The following algorithms operate on elements directly
and do not have a projection parameter:

- `std::ranges::copy`, `std::ranges::move`, `std::ranges::swap_ranges`
- `std::ranges::fill`, `std::ranges::generate`, `std::ranges::iota`
- `std::ranges::reverse`, `std::ranges::rotate`
- `std::ranges::partition`, `std::ranges::stable_partition`

For these algorithms, use `std::views::transform` as a preprocessing step instead.

## Common Pitfalls

### 1. Projection Return Type Must Match Comparator

The projection's return type must be comparable by the given comparator. If the projection returns a
different type than the comparator expects, you get a compilation error deep inside the algorithm:

```cpp
#include <vector>
#include <ranges>
#include <string>

struct Event {
    std::string name;
    int timestamp;
};

int main() {
    std::vector<Event> events = {{"A", 100}, {"B", 50}};

    // WRONG: projection returns int, but std::ranges::less expects comparable types
    // This actually works because int is comparable with int.
    // But if the projection returned a non-comparable type, it would fail.
    std::ranges::sort(events, std::ranges::less{}, &Event::timestamp);

    // WRONG: projection returns std::string, comparator compares int
    // std::ranges::sort(events, std::ranges::less{}, &Event::name);  // OK
    // But: std::ranges::sort(events, [](int a, int b) { return a &lt; b; }, &Event::name);
    // ERROR: predicate expects int, projection returns string
}
```

### 2. Projection is Not a Transform

A projection does not transform the elements in the range. It only affects how the algorithm "sees"
the elements. The actual modifications (swaps, assignments) operate on the original elements:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

struct Pair {
    int a;
    int b;
};

int main() {
    std::vector<Pair> data = {{3, 1}, {1, 3}, {2, 2}};

    // Sort by .b member — the Pair objects are reordered, not transformed
    std::ranges::sort(data, std::ranges::less{}, &Pair::b);

    for (const auto& p : data) {
        std::cout << "(" << p.a << ", " << p.b << ") ";
    }
    // Output: (3, 1) (2, 2) (1, 3)
    // The .a values follow their .b values — the WHOLE object is moved
}
```

### 3. Projection with Stateful Callables

Using a stateful projection (a lambda that captures mutable state) produces undefined behavior if
the algorithm copies the projection internally. Most algorithms take the projection by value, so
mutations to the original lambda are not visible to the algorithm's copies:

```cpp
#include <iostream>
#include <vector>
#include <ranges>

int main() {
    std::vector<int> v = {3, 1, 2};

    int offset = 0;
    auto bad_proj = [&offset](int x) { return x + offset++; };  // UB: stateful projection

    // The algorithm may copy bad_proj, so offset increments are not synchronized
    // std::ranges::sort(v, std::ranges::less{}, bad_proj);  // undefined behavior
}
```

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Range Materialization](./4_range_materialization.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)

:::
