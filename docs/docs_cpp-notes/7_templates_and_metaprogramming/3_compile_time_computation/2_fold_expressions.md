---
title: Fold Expressions and Pack Expansion
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: fold-expressions-and-pack-expansion
---

# Fold Expressions and Pack Expansion

A **fold expression** reduces a parameter pack using a binary operator [N4950 §8.3.5], introduced in
C++17. Fold expressions come in four forms (unary left/right, binary left/right) and provide a
concise, readable way to perform operations across all elements of a parameter pack without manual
recursion.

## Fold Expressions

A **fold expression** reduces a parameter pack using a binary operator [N4950 §8.3.5], introduced in
C++17. Fold expressions come in four forms:

$$
\text{unary right fold: } (pack \ op \ ...)
$$

$$
\text{unary left fold: } (\ldots \ op \ pack)
$$

$$
\text{binary right fold: } (pack \ op \ \ldots \ op \ init)
$$

$$
\text{binary left fold: } (init \ op \ \ldots \ op \ pack)
$$

```cpp
#include <iostream>
#include <concepts>
#include <type_traits>

// Sum all arguments: unary right fold
template <typename... Args>
auto sum(Args... args) {
    return (args + ...);
}

// Product with initial value: binary left fold
template <typename... Args>
auto product(Args... args) {
    return (1 * ... * args);  // binary left fold with init = 1
}

// All-true predicate using fold expression
template <typename... Args>
constexpr bool all_true(Args... args) {
    return (args && ...);
}

// Any-true predicate
template <typename... Args>
constexpr bool any_true(Args... args) {
    return (args || ...);
}

// Push all elements into a vector: fold over comma operator
template <typename T, typename... Args>
void push_all(std::vector<T>& vec, Args&&... args) {
    (vec.push_back(std::forward<Args>(args)), ...);
    // This is a unary right fold over the comma operator.
}

// Print all arguments
template <typename... Args>
void print_all(Args&&... args) {
    ((std::cout << args << " "), ...);
    std::cout << "\n";
}

int main() {
    static_assert(sum(1, 2, 3, 4) == 10);
    static_assert(product(2, 3, 4) == 24);
    static_assert(all_true(true, true, true));
    static_assert(!all_true(true, false, true));
    static_assert(any_true(false, false, true));
    static_assert(!any_true(false, false, false));

    std::cout << sum(1, 2, 3) << "\n";       // 6
    std::cout << product(2, 3, 4) << "\n";   // 24

    std::vector<int> v;
    push_all(v, 10, 20, 30);
    for (auto x : v) std::cout << x << " ";  // 10 20 30
    std::cout << "\n";

    print_all("hello", 42, 3.14);            // hello 42 3.14
}
```

## Empty Pack Behavior

The behavior of fold expressions with empty packs depends on the operator [N4950 §8.3.5]:

| Operator   | Empty pack value (unary fold) | Notes                            |
| ---------- | ----------------------------- | -------------------------------- |
| `&&`       | `true`                        | Identity element for logical AND |
| `\|\|`     | `false`                       | Identity element for logical OR  |
| `,`        | `void()`                      | No-op                            |
| All others | **Ill-formed**                | Must use binary fold with init   |

```cpp
#include <iostream>
#include <cassert>

template <typename... Args>
constexpr bool all(Args... args) {
    return (args && ...);  // Empty pack → true
}

template <typename... Args>
constexpr bool any(Args... args) {
    return (args || ...);  // Empty pack → false
}

// This would be ill-formed with empty pack:
// template <typename... Args>
// auto sum(Args... args) { return (args + ...); }  // ERROR if empty

// Fix: use binary fold with identity element
template <typename... Args>
auto safe_sum(Args... args) {
    return (0 + ... + args);  // Binary left fold: (init op ... op pack)
}

int main() {
    static_assert(all());              // true (empty pack)
    static_assert(!any());             // false (empty pack)
    static_assert(safe_sum() == 0);    // 0 (empty pack, uses init)
    static_assert(safe_sum(1, 2) == 3);
    static_assert(safe_sum(10) == 10);
}
```

## `hash_combine` with Fold Expressions

```cpp
#include <iostream>
#include <functional>
#include <string>
#include <cstdint>

// Boost-style hash_combine using fold expressions
template <typename T>
void hash_combine(std::size_t& seed, const T& value) {
    seed ^= std::hash<T>{}(value) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
}

template <typename... Args>
std::size_t hash_all(const Args&... args) {
    std::size_t seed = 0;
    (hash_combine(seed, args), ...);
    return seed;
}

int main() {
    auto h1 = hash_all(42);
    auto h2 = hash_all(42, std::string{"hello"});
    auto h3 = hash_all(std::string{"hello"}, 42);
    auto h4 = hash_all();  // empty pack: comma fold is a no-op → seed = 0

    std::cout << h1 << "\n";
    std::cout << h2 << "\n";
    std::cout << h3 << "\n";  // different from h2 (order matters)
    std::cout << h4 << "\n";  // 0

    // Verify determinism
    auto h1_again = hash_all(42);
    std::cout << (h1 == h1_again ? "deterministic" : "non-deterministic") << "\n";
}
```

## See Also

- [Parameter Packs and Variadic Templates](./1_parameter_packs.md)
- [Compile-Time Branching (if constexpr)](./3_if_constexpr.md)
- [Type Traits and Static Reflection Patterns](./4_type_traits.md)
