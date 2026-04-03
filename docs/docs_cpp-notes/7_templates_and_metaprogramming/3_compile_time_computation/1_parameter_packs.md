---
title: Parameter Packs and Variadic Templates
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: parameter-packs-and-variadic-templates
---

# Parameter Packs and Variadic Templates

A **variadic template** accepts a variable number of template arguments via a **parameter pack**
[N4950 §13.7.3]. Parameter packs come in two forms: type parameter packs and non-type parameter
packs. Combined with **pack expansion** syntax and perfect forwarding, they enable type-safe
operations on arbitrary numbers of arguments.

## Variadic Function Templates and Parameter Packs

A **variadic template** accepts a variable number of template arguments via a **parameter pack**
[N4950 §13.7.3]. Parameter packs come in two forms: type parameter packs and non-type parameter
packs.

```cpp
#include <iostream>
#include <type_traits>

// sizeof... returns the number of elements in a pack [N4950 §8.3.3]
template <typename... Ts>
constexpr std::size_t count_types() {
    return sizeof...(Ts);
}

int main() {
    static_assert(count_types<>() == 0);
    static_assert(count_types<int>() == 1);
    static_assert(count_types<int, double, char>() == 3);
    std::cout << count_types<int, double, char, long>() << "\n";  // 4
}
```

## Pack Expansion Syntax

A **pack expansion** `pattern...` expands the pattern by substituting each element of the pack
[N4950 §13.7.3]. The expansion can appear in various contexts:

- Function argument lists: `f(args...)`
- Template argument lists: `Tuple<Types...>`
- Initializer lists: `{args...}`
- Base class lists: `class Derived : Bases...`

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>

// Recursive variadic print
void print() {
    std::cout << "\n";
}

template <typename T, typename... Rest>
void print(T first, Rest... rest) {
    std::cout << first;
    if constexpr (sizeof...(rest) > 0) {
        std::cout << ", ";
    }
    print(rest...);
}

// Forwarding reference + variadic: perfect forwarding wrapper
template <typename... Args>
auto make_tuple_wrapper(Args&&... args) {
    return std::make_tuple(std::forward<Args>(args)...);
}

// Count occurrences of T in Ts...
template <typename T, typename... Ts>
struct count_occurrences;

template <typename T>
struct count_occurrences<T> : std::integral_constant<int, 0> {};

template <typename T, typename First, typename... Rest>
struct count_occurrences<T, First, Rest...>
    : std::integral_constant<int,
        (std::is_same_v<T, First> ? 1 : 0)
        + count_occurrences<T, Rest...>::value> {};

int main() {
    print(1, "hello", 3.14, 'x');
    // Output: 1, hello, 3.14, x

    auto t = make_tuple_wrapper(42, std::string{"world"}, 3.14);
    std::cout << std::get<0>(t) << "\n";   // 42
    std::cout << std::get<1>(t) << "\n";   // world

    static_assert(count_occurrences<int, int, double, int, char>::value == 2);
    static_assert(count_occurrences<double, int, double, int>::value == 1);
}
```

## Variadic `make_unique` (Custom Implementation)

```cpp
#include <iostream>
#include <memory>
#include <utility>

template <typename T, typename... Args>
std::unique_ptr<T> my_make_unique(Args&&... args) {
    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));
}

struct Widget {
    int x, y;
    Widget(int a, int b) : x(a), y(b) {
        std::cout << "Widget(" << x << ", " << y << ")\n";
    }
};

int main() {
    auto w = my_make_unique<Widget>(10, 20);
    std::cout << w->x << ", " << w->y << "\n";  // 10, 20
}
```

:::tip `std::make_unique` (C++14) is implemented essentially as shown above. The variadic template +
perfect forwarding pattern (`Args&&... args` with `std::forward<Args>(args)...`) is one of the most
important idioms in modern C++ template programming. :::

## See Also

- [Fold Expressions and Pack Expansion](./2_fold_expressions.md)
- [Compile-Time Branching (if constexpr)](./3_if_constexpr.md)
- [Type Traits and Static Reflection Patterns](./4_type_traits.md)
- [Argument Deduction (Class and Function)](../1_generic_programming/2_argument_deduction.md)
