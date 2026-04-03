---
title: Standard Library Concepts
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: standard-library-concepts
---

# Standard Library Concepts

The `<concepts>` header [N4950 §18.4] provides a comprehensive set of predefined concepts that serve
as building blocks for user-defined constraints. These concepts cover core language relationships,
comparisons, object properties, callable requirements, type categories, and iterator hierarchies.
Using standard library concepts instead of ad-hoc constraints ensures interoperability and correct
subsumption ordering.

## The `<concepts>` Header

### Core Language Concepts

| Concept                            | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `std::same_as<T, U>`               | `T` and `U` are the same type [§18.4.2]             |
| `std::derived_from<D, B>`          | `D` is derived from `B` [§18.4.2]                   |
| `std::convertible_to<From, To>`    | `From` is implicitly convertible to `To` [§18.4.2]  |
| `std::common_reference_with<T, U>` | `T` and `U` share a common reference type [§18.4.2] |
| `std::common_with<T, U>`           | `T` and `U` share a common type [§18.4.2]           |

### Comparison Concepts

| Concept                        | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `std::equality_comparable<T>`  | `==` is an equivalence relation on `T` [§18.4.5] |
| `std::totally_ordered<T>`      | `<` defines a total order on `T` [§18.4.5]       |
| `std::three_way_comparable<T>` | `<=>` is defined for `T` (C++20) [§18.4.5]       |

### Object Concepts

| Concept               | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `std::copyable<T>`    | `T` is copyable (copy constructible + copy assignable + destructible) [§18.4.6]            |
| `std::movable<T>`     | `T` is movable (move constructible + move assignable + destructible + swappable) [§18.4.6] |
| `std::regular<T>`     | `T` is copyable, default-constructible, and equality-comparable [§18.4.6]                  |
| `std::semiregular<T>` | `T` is copyable and default-constructible [§18.4.6]                                        |

### Callable Concepts

| Concept                      | Description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `std::invocable<F, Args...>` | `F` can be invoked with `Args...` [§18.4.8]                     |
| `std::predicate<F, Args...>` | `F` invoked with `Args...` returns `bool`-convertible [§18.4.8] |
| `std::relation<R, T, U>`     | `R` defines an equivalence relation on `T` and `U` [§18.4.8]    |

### Type Categories

| Concept                     | Description                                |
| --------------------------- | ------------------------------------------ |
| `std::integral<T>`          | `T` is an integral type [§18.4.3]          |
| `std::signed_integral<T>`   | `T` is a signed integral type [§18.4.3]    |
| `std::unsigned_integral<T>` | `T` is an unsigned integral type [§18.4.3] |
| `std::floating_point<T>`    | `T` is a floating-point type [§18.4.3]     |

:::info `std::regular` and `std::semiregular` The concept `std::regular<T>` [N4950 §18.4.6] models
types that behave like built-in values: they can be copied, default-constructed, and compared for
equality. `int`, `double`, and `std::string` are all `std::regular`. `std::unique_ptr` is
`std::movable` but not `std::regular` (not copyable). `std::mutex` is neither `std::movable` nor
`std::copyable`. These concepts are the vocabulary types of generic programming. :::

## Iterator Concepts

The iterator concepts in `<iterator>` [N4950 §18.4.4] form a refinement hierarchy:

$$
\text{input\_iterator} \prec \text{forward\_iterator} \prec \text{bidirectional\_iterator} \prec \text{random\_access\_iterator} \prec \text{contiguous\_iterator}
$$

| Concept                       | Key Requirements                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `std::input_iterator`         | Can be dereferenced, pre/post-incremented, and compared to a sentinel [§18.4.4]        |
| `std::forward_iterator`       | Input iterator + multi-pass guarantee (equality-preserving increment) [§18.4.4]        |
| `std::bidirectional_iterator` | Forward iterator + decrementable [§18.4.4]                                             |
| `std::random_access_iterator` | Bidirectional iterator + constant-time advancement with `+`, `-`, `+=`, `-=` [§18.4.4] |
| `std::contiguous_iterator`    | Random access iterator + elements are stored contiguously in memory [§18.4.4]          |

Additionally, `std::output_iterator` is a separate concept for write-only iterators.

```cpp
#include <concepts>
#include <forward_list>
#include <list>
#include <vector>
#include <iostream>
#include <array>

template<std::input_iterator It>
void print_category() {
    std::cout << "input_iterator";
    if constexpr (std::forward_iterator<It>) std::cout << " -> forward";
    if constexpr (std::bidirectional_iterator<It>) std::cout << " -> bidirectional";
    if constexpr (std::random_access_iterator<It>) std::cout << " -> random_access";
    if constexpr (std::contiguous_iterator<It>) std::cout << " -> contiguous";
    std::cout << "\n";
}

int main() {
    print_category<std::vector<int>::iterator>();      // input -> forward -> bidirectional -> random_access -> contiguous
    print_category<std::list<int>::iterator>();        // input -> forward -> bidirectional
    print_category<std::forward_list<int>::iterator>(); // input -> forward
    print_category<std::array<int, 5>::iterator>();    // input -> forward -> bidirectional -> random_access -> contiguous
}
```

Output:

```
input_iterator -> forward -> bidirectional -> random_access -> contiguous
input_iterator -> forward -> bidirectional
input_iterator -> forward
input_iterator -> forward -> bidirectional -> random_access -> contiguous
```

## Code Example: `std::totally_ordered` for Custom Types

The `std::totally_ordered` concept [N4950 §18.4.5] requires that `<`, `>`, `<=`, `>=` all define a
total order on the type. The easiest way to satisfy this concept is to define `operator<=>` (the
spaceship operator, C++20) [N4950 §7.6.8]:

```cpp
#include <concepts>
#include <iostream>
#include <string>
#include <compare>
#include <set>

struct Version {
    int major;
    int minor;
    int patch;

    std::strong_ordering operator<=>(const Version&) const = default;
};

static_assert(std::totally_ordered<Version>);
static_assert(std::equality_comparable<Version>);

int main() {
    Version v1{2, 0, 1};
    Version v2{2, 1, 0};
    Version v3{2, 0, 1};

    std::cout << std::boolalpha;
    std::cout << (v1 < v2) << "\n";   // true
    std::cout << (v1 == v3) << "\n";  // true
    std::cout << (v2 >= v3) << "\n";  // true

    std::set<Version> versions{
        Version{1, 0, 0},
        Version{2, 0, 1},
        Version{0, 1, 0}
    };

    for (const auto& v : versions) {
        std::cout << v.major << "." << v.minor << "." << v.patch << "\n";
    }
}
```

Output:

```
true
true
true
0.1.0
1.0.0
2.0.1
```

The default `operator<=>` performs lexicographic comparison on the data members in declaration order
[N4950 §7.6.8]. Because `int` already supports `<=>`, the compiler generates the full comparison
operator suite for `Version`, satisfying `std::totally_ordered`.

## Code Example: Constraining a Generic Algorithm

```cpp
#include <concepts>
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <numeric>
#include <ranges>

template<std::ranges::range R>
    requires std::totally_ordered<std::ranges::range_value_t<R>>
auto find_median(R&& range) -> std::ranges::range_value_t<R> {
    auto r = std::ranges::to<std::vector>(std::forward<R>(range));
    std::ranges::sort(r);

    const auto n = r.size();
    if (n % 2 == 1) {
        return r[n / 2];
    } else {
        return (r[n / 2 - 1] + r[n / 2]) / 2;
    }
}

template<std::ranges::input_range R, typename T>
    requires std::totally_ordered<T> &&
             std::convertible_to<std::ranges::range_reference_t<R>, T>
auto count_less_than(R&& range, const T& threshold) -> std::size_t {
    return std::ranges::count_if(std::forward<R>(range),
        [&threshold](const auto& val) { return val < threshold; });
}

template<std::invocable<int, int> BinaryOp>
auto fold(const std::vector<int>& v, int init, BinaryOp op) -> int {
    return std::accumulate(v.begin(), v.end(), init, op);
}

int main() {
    std::vector<int> nums{5, 2, 8, 1, 9, 3, 7, 4, 6};
    std::cout << "median = " << find_median(nums) << "\n";

    std::vector<double> dnums{5.0, 2.0, 8.0, 1.0, 9.0};
    std::cout << "median = " << find_median(dnums) << "\n";

    std::cout << "less than 5: " << count_less_than(nums, 5) << "\n";

    auto sum = fold(nums, 0, std::plus<int>());
    auto product = fold(nums, 1, std::multiplies<int>());
    std::cout << "sum = " << sum << "\n";
    std::cout << "product = " << product << "\n";
}
```

Output:

```
median = 5
median = 5
less than 5: 4
sum = 45
product = 362880
```

:::tip Using Range Concepts The `std::ranges` namespace provides range versions of many concepts.
Prefer `std::ranges::range` over manually checking `begin()`/`end()`. Prefer
`std::ranges::range_value_t<R>` over `typename R::value_type` (it works with proxy iterators). Range
concepts are defined in `<ranges>` [N4950 §26.2] and compose naturally with the concepts in
`<concepts>`. :::

## See Also

- [Defining Concepts and Requires Clauses](./1_defining_concepts.md)
- [Constraint Subsumption and Overload Resolution](./2_constraint_subsumption.md)
- [SFINAE vs Concepts](./4_sfinae_vs_concepts.md)
