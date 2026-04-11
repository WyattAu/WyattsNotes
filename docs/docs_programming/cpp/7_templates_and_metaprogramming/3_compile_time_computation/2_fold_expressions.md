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

## All Supported Operators

Fold expressions support the following 32 binary operators [N4950 §8.3.5]:

| Category   | Operators                                                                |
| ---------- | ------------------------------------------------------------------------ |
| Arithmetic | `+` `-` `*` `/` `%`                                                      |
| Bitwise    | `&amp;` `\|` `^` `&lt;&lt;` `&gt;&gt;`                                   |
| Logical    | `&&` `\|\|`                                                              |
| Comparison | `==` `!=` `&lt;` `&gt;` `&lt;=` `&gt;=`                                  |
| Assignment | `=` `+=` `-=` `*=` `/=` `%=` `&amp;=` `\|=` `^=` `&lt;&lt;=` `&gt;&gt;=` |
| Comma      | `,`                                                                      |

Note: the comma operator `,` has special behavior in folds (see below).

## Unary Folds

Unary folds operate on a parameter pack without an initial value. The expansion pattern is either
`(pack op ...)` (right fold) or `(... op pack)` (left fold):

```cpp
#include <iostream>

// Right fold: (a + (b + (c + d)))
template <typename... Args>
auto right_sum(Args... args) {
    return (args + ...);   // unary right fold
}

// Left fold: (((a + b) + c) + d)
template <typename... Args>
auto left_sum(Args... args) {
    return (... + args);   // unary left fold
}

// Right fold with &&: true && (true && (true && false))
template <typename... Args>
constexpr bool right_all(Args... args) {
    return (args && ...);
}

// Left fold with ||: (false || false) || true
template <typename... Args>
constexpr bool left_any(Args... args) {
    return (... || args);
}

int main() {
    std::cout << right_sum(1, 2, 3, 4) << "\n";  // 10
    std::cout << left_sum(1, 2, 3, 4) << "\n";   // 10
    // For associative + commutative operators, left and right give same result.
    // For non-associative operators (like -), they differ:

    // Right fold: a - (b - (c - d))
    // left_fold_sub(1, 2, 3, 4) = 1 - (2 - (3 - 4)) = 1 - (2 - (-1)) = 1 - 3 = -2
    // Left fold: ((a - b) - c) - d
    // right_fold_sub(1, 2, 3, 4) = ((1 - 2) - 3) - 4 = (-1 - 3) - 4 = -8

    static_assert(right_all(true, true, true));
    static_assert(left_any(false, false, true));
}
```

### Left vs Right: Evaluation Order

For non-associative operators like subtraction, left and right folds produce different results:

```cpp
#include <iostream>

template <typename... Args>
auto left_minus(Args... args) { return (... - args); }

template <typename... Args>
auto right_minus(Args... args) { return (args - ...); }

int main() {
    // Left:  ((10 - 3) - 2) - 1 = 4
    std::cout << left_minus(10, 3, 2, 1) << "\n";   // 4

    // Right: 10 - (3 - (2 - 1)) = 10 - (3 - 1) = 10 - 2 = 8
    std::cout << right_minus(10, 3, 2, 1) << "\n";  // 8
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

### Binary Folds Guarantee Empty-Pack Safety

Binary folds include an initial value, which means the fold is always well-defined even for empty
packs. The expansion evaluates to the initial value when the pack is empty:

```cpp
#include <iostream>
#include <string>

// Safe for empty packs because of init value
template <typename... Args>
int count_positive(Args... args) {
    return ((args > 0 ? 1 : 0) + ... + 0);  // binary left fold, init = 0
}

// Safe string concatenation
template <typename... Args>
std::string join(Args&&... args) {
    std::string result;
    ((result += std::forward<Args>(args)), ...);  // comma fold, no init needed
    return result;
}

int main() {
    std::cout << count_positive(1, -2, 3, -4, 5) << "\n";  // 3
    std::cout << count_positive() << "\n";                   // 0 (empty pack)

    std::cout << join("hello", " ", "world") << "\n";  // "hello world"
    std::cout << "[" << join() << "]\n";               // "[]"
}
```

## Fold with Comma Operator

The comma operator is special in fold expressions. It evaluates each operand for its side effects
and discards the values, making it ideal for "do something for each element" patterns:

```cpp
#include <iostream>
#include <vector>
#include <mutex>

// Print each argument on a separate line
template <typename... Args>
void print_lines(Args&&... args) {
    ((std::cout << args << "\n"), ...);
}

// Lock multiple mutexes (C++17 lock order)
template <typename... Mutexes>
void lock_all(Mutexes&... mtxs) {
    (mtxs.lock(), ...);
}

// Unlock multiple mutexes
template <typename... Mutexes>
void unlock_all(Mutexes&... mtxs) {
    (mtxs.unlock(), ...);
}

// Execute a function on each argument
template <typename Func, typename... Args>
void for_each(Func f, Args&&... args) {
    (f(std::forward<Args>(args)), ...);
}

int main() {
    print_lines("first", "second", "third");

    for_each([](auto x) { std::cout << x * 2 << " "; }, 1, 2, 3, 4);
    std::cout << "\n";  // 2 4 6 8
}
```

## Fold with Logical Operators

Logical folds are the backbone of compile-time predicates. The short-circuit evaluation behavior of
`&&` and `||` is preserved in fold expressions:

```cpp
#include <iostream>
#include <type_traits>

// Check if all types satisfy a predicate
template <template <typename> class Pred, typename... Ts>
constexpr bool all_satisfy = (Pred<Ts>::value && ...);

// Check if any type satisfies a predicate
template <template <typename> class Pred, typename... Ts>
constexpr bool any_satisfy = (Pred<Ts>::value || ...);

// Check if no type satisfies a predicate
template <template <typename> class Pred, typename... Ts>
constexpr bool none_satisfy = !(Pred<Ts>::value || ...);

// C++20 concepts version
template <typename... Ts>
concept AllIntegral = (std::integral<Ts> && ...);

template <typename... Ts>
concept AnyPointer = (std::is_pointer_v<Ts> || ...);

int main() {
    static_assert(all_satisfy<std::is_integral, int, char, long>);
    static_assert(!all_satisfy<std::is_integral, int, double, long>);
    static_assert(any_satisfy<std::is_pointer, int, int*, double>);
    static_assert(none_satisfy<std::is_floating_point, int, char, long>);

    static_assert(AllIntegral<int, char, long>);
    static_assert(!AllIntegral<int, double>);
    static_assert(AnyPointer<int*, double>);

    std::cout << "All compile-time checks passed\n";
}
```

## Comparison with Recursive Template Patterns

Before C++17 fold expressions, operating on parameter packs required manual recursion. Fold
expressions eliminate the boilerplate:

### Pre-C++17: Recursive Approach

```cpp
#include <iostream>

// Base case
void print_recursive() {
    std::cout << "\n";
}

// Recursive case
template <typename T, typename... Rest>
void print_recursive(T&& first, Rest&&... rest) {
    std::cout << first << " ";
    print_recursive(std::forward<Rest>(rest)...);
}

// Recursive sum — requires explicit return type handling
template <typename T>
T recursive_sum(T value) {
    return value;
}

template <typename T, typename... Rest>
auto recursive_sum(T first, Rest... rest) {
    return first + recursive_sum(rest...);
}
```

### C++17: Fold Expression Approach

```cpp
#include <iostream>

template <typename... Args>
void print_fold(Args&&... args) {
    ((std::cout << args << " "), ...);
    std::cout << "\n";
}

template <typename... Args>
auto fold_sum(Args... args) {
    return (args + ...);
}

int main() {
    print_recursive(1, 2, 3, 4, 5);  // 1 2 3 4 5
    print_fold(1, 2, 3, 4, 5);        // 1 2 3 4 5

    std::cout << recursive_sum(1, 2, 3) << "\n";  // 6
    std::cout << fold_sum(1, 2, 3) << "\n";        // 6
}
```

The fold expression version is more concise, avoids the base-case boilerplate, and communicates
intent more clearly. The recursive approach is still needed when the operation does not map cleanly
to a binary fold operator.

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

## Common Pitfalls

1. **Empty packs with non-identity operators.** A unary fold over `+` with an empty pack is
   ill-formed. Always use a binary fold with an initial value (`0` for `+`, `1` for `*`) if the pack
   might be empty.

2. **Non-associative operators.** Left and right folds over `-`, `/`, or `%` produce different
   results. Be explicit about which fold direction you intend.

3. **Comma fold discards values.** The comma operator evaluates for side effects only. If you need
   to collect values, use a different approach (e.g., initializer list construction).

4. **Fold over `=` assignment operator.** While supported, assignment folds can be confusing. Prefer
   comma folds with explicit assignment expressions.

5. **Short-circuit evaluation.** Folds over `&&` and `||` preserve short-circuit semantics. If a
   pack element causes a side effect (like throwing), later elements may not be evaluated.

## See Also

- [Parameter Packs and Variadic Templates](./1_parameter_packs.md)
- [Compile-Time Branching (if constexpr)](./3_if_constexpr.md)
- [Type Traits and Static Reflection Patterns](./4_type_traits.md)
