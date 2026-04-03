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
\text{sort}(r, comp = \\{\\}, proj = \\{\\})
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

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Range Materialization](./4_range_materialization.md)
- [Parallel Algorithms](./5_parallel_algorithms.md)
