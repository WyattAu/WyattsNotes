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

:::info
`std::regular` and `std::semiregular` The concept `std::regular<T>` [N4950 §18.4.6] models
types that behave like built-in values: they can be copied, default-constructed, and compared for
equality. `int`, `double`, and `std::string` are all `std::regular`. `std::unique_ptr` is
`std::movable` but not `std::regular` (not copyable). `std::mutex` is neither `std::movable` nor
`std::copyable`. These concepts are the vocabulary types of generic programming.
:::

## Understanding `std::derived_from` vs `std::is_base_of`

`std::derived_from<D, B>` is stricter than `std::is_base_of_v<B, D>`:

```cpp
#include <iostream>
#include <concepts>
#include <type_traits>

struct Base {};
struct Derived : Base {};

struct Unrelated {};

int main() {
    std::cout << std::boolalpha;
    std::cout << "is_base_of: " << std::is_base_of_v<Base, Derived> << "\n";
    std::cout << "derived_from: " << std::derived_from<Derived, Base> << "\n";

    // The difference: derived_from requires implicit convertibility to const Base&
    // is_base_of does not (e.g., private inheritance)
    std::cout << "is_base_of<int, int>: " << std::is_base_of_v<int, int> << "\n";
    std::cout << "derived_from<int, int>: " << std::derived_from<int, int> << "\n";
    return 0;
}
// Output:
//   is_base_of: true
//   derived_from: true
//   is_base_of<int, int>: true  (vacuously true — every type is a base of itself)
//   derived_from<int, int>: false (int is not implicitly convertible to const int&)
```

The `std::derived_from` concept requires:

1. `B` is a base class of `D` (or `B` and `D` are the same type).
2. `D` is implicitly convertible to `const B&`.

This means private inheritance is correctly rejected by `std::derived_from` but accepted by
`std::is_base_of`.

## Understanding `std::convertible_to` vs `std::is_convertible`

`std::convertible_to<From, To>` [N4950 §18.4.2] requires that `From` is both implicitly and
explicitly convertible to `To`. The explicit conversion requirement means that types with only
implicit conversion (but not explicit construction) are handled correctly:

```cpp
#include <iostream>
#include <concepts>
#include <type_traits>

struct ExplicitOnly {
    explicit operator int() const { return 42; }
};

struct ImplicitAndExplicit {
    operator int() const { return 99; }
};

int main() {
    std::cout << std::boolalpha;
    std::cout << "is_convertible<ExplicitOnly, int>: "
              << std::is_convertible_v<ExplicitOnly, int> << "\n";
    std::cout << "convertible_to<ExplicitOnly, int>: "
              << std::convertible_to<ExplicitOnly, int> << "\n";

    std::cout << "is_convertible<ImplicitAndExplicit, int>: "
              << std::is_convertible_v<ImplicitAndExplicit, int> << "\n";
    std::cout << "convertible_to<ImplicitAndExplicit, int>: "
              << std::convertible_to<ImplicitAndExplicit, int> << "\n";
    return 0;
}
// Output:
//   is_convertible<ExplicitOnly, int>: false
//   convertible_to<ExplicitOnly, int>: true
//   is_convertible<ImplicitAndExplicit, int>: true
//   convertible_to<ImplicitAndExplicit, int>: true
```

`std::is_convertible` only checks implicit conversion. `std::convertible_to` also checks explicit
conversion (via `static_cast<To>(declval<From>())`), making it more permissive.

## Iterator Concepts

The iterator concepts in `<iterator>` [N4950 §18.4.4] form a refinement hierarchy:

$$
\mathrm{input\_iterator} \prec \mathrm{forward\_iterator} \prec \mathrm{bidirectional\_iterator} \prec \mathrm{random\_access\_iterator} \prec \mathrm{contiguous\_iterator}
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

### Sentinel Concepts

C++20 also provides sentinel concepts for range-based iteration:

| Concept                         | Description                                               |
| ------------------------------- | --------------------------------------------------------- |
| `std::sentinel_for<S, I>`       | `S` is a sentinel for iterator `I` (comparable with `==`) |
| `std::sized_sentinel_for<S, I>` | `S` supports subtraction with `I` to get a difference     |

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

### Three-Way Comparison Categories

The `<=>` operator returns one of three comparison category types [N4950 §18.4.5]:

| Category                | Properties                                          | Example                 |
| ----------------------- | --------------------------------------------------- | ----------------------- |
| `std::strong_ordering`  | Substitutable (a == b implies f(a) == f(b))         | `int`, `std::string`    |
| `std::weak_ordering`    | Equivalence but not substitutable                   | Case-insensitive string |
| `std::partial_ordering` | Incomparable values possible (e.g., NaN with float) | `double`                |

```cpp
#include <iostream>
#include <compare>
#include <cmath>

int main() {
    double a = 1.0;
    double b = std::nan("");

    auto cmp = a <=> b;
    std::cout << (cmp == std::partial_ordering::unordered) << "\n";  // true
    std::cout << (cmp < 0) << "\n";  // false
    std::cout << (cmp > 0) << "\n";  // false
    std::cout << (cmp == 0) << "\n"; // false

    // strong_ordering does not have "unordered"
    int x = 1, y = 2;
    auto icmp = x <=> y;
    std::cout << (icmp < 0) << "\n";  // true
    return 0;
}
```

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

:::tip
Using Range Concepts The `std::ranges` namespace provides range versions of many concepts.
Prefer `std::ranges::range` over manually checking `begin()`/`end()`. Prefer
`std::ranges::range_value_t<R>` over `typename R::value_type` (it works with proxy iterators). Range
concepts are defined in `<ranges>` [N4950 §26.2] and compose naturally with the concepts in
`<concepts>`.
:::

## Range Concepts

The `<ranges>` header provides concepts that operate on ranges (pairs of iterators and sentinels)
rather than individual iterators:

| Concept                               | Description                                             |
| ------------------------------------- | ------------------------------------------------------- |
| `std::ranges::range<R>`               | `R` has `begin()` and `end()`                           |
| `std::ranges::input_range<R>`         | Range whose iterator satisfies `input_iterator`         |
| `std::ranges::forward_range<R>`       | Range whose iterator satisfies `forward_iterator`       |
| `std::ranges::bidirectional_range<R>` | Range whose iterator satisfies `bidirectional_iterator` |
| `std::ranges::random_access_range<R>` | Range whose iterator satisfies `random_access_iterator` |
| `std::ranges::contiguous_range<R>`    | Range whose iterator satisfies `contiguous_iterator`    |
| `std::ranges::sized_range<R>`         | Range where `size()` is O(1)                            |
| `std::ranges::view<R>`                | Range that is a view (cheap to copy/move)               |
| `std::ranges::borrowed_range<R>`      | Range whose iterators outlive the range object          |

```cpp
#include <iostream>
#include <concepts>
#include <ranges>
#include <vector>
#include <list>
#include <string_view>

int main() {
    std::cout << std::boolalpha;
    std::cout << "vector is sized_range: "
              << std::ranges::sized_range<std::vector<int>> << "\n";
    std::cout << "list is sized_range: "
              << std::ranges::sized_range<std::list<int>> << "\n";

    // Views are ranges but not borrowed_ranges (they own their data)
    auto transformed = std::views::iota(0, 10) | std::views::filter([](int x) { return x % 2 == 0; });
    std::cout << "filter view is view: "
              << std::ranges::view<decltype(transformed)> << "\n";

    // string_view is a borrowed_range (it doesn't own data)
    std::cout << "string_view is borrowed_range: "
              << std::ranges::borrowed_range<std::string_view> << "\n";
    return 0;
}
```

## `std::invocable` and `std::regular_invocable`

`std::invocable<F, Args...>` checks that `F(Args...)` is a valid expression.
`std::regular_invocable` adds the requirement that the invocation is equality-preserving — calling
the same function with the same arguments produces the same result. This distinction matters for
pure functions vs functions with side effects:

```cpp
#include <iostream>
#include <concepts>

int pure(int x) { return x * 2; }

int counter = 0;
int impure(int x) { return x * 2 + counter++; }

int main() {
    std::cout << std::boolalpha;
    std::cout << "invocable(pure, int): "
              << std::invocable<decltype(pure), int> << "\n";
    std::cout << "regular_invocable(pure, int): "
              << std::regular_invocable<decltype(pure), int> << "\n";

    std::cout << "invocable(impure, int): "
              << std::invocable<decltype(impure), int> << "\n";
    // regular_invocable is still true for impure — the concept only checks
    // structural properties, not actual behavior
    std::cout << "regular_invocable(impure, int): "
              << std::regular_invocable<decltype(impure), int> << "\n";
    return 0;
}
```

## Common Pitfalls

### Pitfall 1: `std::integral` Excludes `bool`

`std::integral<T>` does not include `bool` in C++20. This was a design decision because `bool` has
different semantics (only two values, implicit conversion rules). Use `std::integral<T>` for
arithmetic types and check for `bool` separately if needed:

```cpp
#include <iostream>
#include <concepts>

template <typename T>
    requires std::integral<T>
void process(T val) {
    std::cout << val << "\n";
}

int main() {
    process(42);     // OK
    // process(true); // Error: bool does not satisfy integral
    return 0;
}
```

### Pitfall 2: `std::copyable` vs `std::is_copy_constructible`

`std::copyable<T>` requires more than just being copy-constructible. It requires:

- Copy constructible
- Move constructible (or copy constructible implies it)
- Copy assignable
- Move assignable
- Destructible
- Equality comparable (via `std::equality_comparable`)

A type that is copy-constructible but not copy-assignable does NOT satisfy `std::copyable`:

```cpp
#include <iostream>
#include <concepts>

struct CopyOnly {
    int value;
    CopyOnly(int v) : value(v) {}
    CopyOnly(const CopyOnly&) = default;
    CopyOnly& operator=(const CopyOnly&) = delete;  // No copy assignment
    CopyOnly(CopyOnly&&) = default;
    CopyOnly& operator=(CopyOnly&&) = default;
};

int main() {
    std::cout << std::boolalpha;
    std::cout << "copy_constructible: "
              << std::is_copy_constructible_v<CopyOnly> << "\n";
    std::cout << "copyable: " << std::copyable<CopyOnly> << "\n";
    return 0;
}
// Output:
//   copy_constructible: true
//   copyable: false
```

### Pitfall 3: Concept Subsumption Order Matters for Overload Resolution

When two overloads are constrained, the more specific constraint should subsume the less specific
one. If constraints don't properly subsume, overload resolution becomes ambiguous:

```cpp
#include <iostream>
#include <concepts>

// This overload should subsume the more general one
template <typename T>
    requires std::integral<T>
void process(T val) {
    std::cout << "integral: " << val << "\n";
}

// This overload is more specific but does NOT subsume the integral version
template <typename T>
    requires std::signed_integral<T>
void process(T val) {
    std::cout << "signed integral: " << val << "\n";
}

// process(42);  // Ambiguous! Both constraints are satisfied.
// Fix: reorder so signed_integral comes first (it subsumes integral)
```

The fix is to place the more specific overload first, since `std::signed_integral<T>` subsumes
`std::integral<T>` (every signed integral is an integral, but not vice versa).

:::

:::
