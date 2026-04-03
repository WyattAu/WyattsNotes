---
title: SFINAE vs Concepts
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: sfinae-vs-concepts
---

# SFINAE vs Concepts

**SFINAE** (Substitution Failure Is Not An Error) was the primary mechanism for constraining
templates from C++98 through C++17. C++20 concepts provide a cleaner, more expressive alternative
with better error messages, built-in overload ordering via subsumption, and first-class syntax. This
section compares the two approaches and shows how to migrate from SFINAE to concepts.

## How SFINAE Works

**SFINAE** (Substitution Failure Is Not An Error) is a C++98-era mechanism that allows template
argument deduction to discard overloads where substituting the deduced type would produce an invalid
type or expression [N4950 §13.10.3.6]. The key idea is:

> If a type or expression used in the function type or template parameter declaration is invalid
> after substitution, the program is not ill-formed --- instead, the overload is simply removed from
> the candidate set.

The two primary SFINAE techniques are:

1. **SFINAE via the return type:** using `std::enable_if` in the return type.
2. **SFINAE via a dummy template parameter:** using `std::enable_if` as a default template argument.

```cpp
#include <iostream>
#include <type_traits>

// SFINAE via return type
template<typename T>
typename std::enable_if<std::is_integral<T>::value, T>::type
safe_abs(T x) {
    return x < 0 ? -x : x;
}

template<typename T>
typename std::enable_if<std::is_floating_point<T>::value, T>::type
safe_abs(T x) {
    return x < 0 ? -x : x;
}

// SFINAE via dummy template parameter
template<typename T, typename = typename std::enable_if<std::is_arithmetic<T>::value>::type>
T double_value(T x) {
    return 2 * x;
}

int main() {
    std::cout << safe_abs(-5) << "\n";    // 5
    std::cout << safe_abs(-3.14) << "\n"; // 3.14
    std::cout << double_value(21) << "\n"; // 42
}
```

## Drawbacks of SFINAE

SFINAE has several significant problems that motivated the introduction of concepts:

**1. Poor error messages.** When no overload is viable, the compiler reports the substitution
failure in the `enable_if` machinery, not the actual semantic requirement that was violated.

```
error: no matching function for call to 'safe_abs'
note: candidate template ignored: substitution failure
      [with T = std::string]: type 'std::string' cannot be used
      before '::' in type 'std::enable_if<..., T>'
```

Compare this to a concept error:

```
error: constraint not satisfied
note: 'safe_abs' requires 'std::integral<T>' or 'std::floating_point<T>'
```

**2. No subsumption ordering.** Two overloads constrained by `enable_if` with different conditions
are **always ambiguous** if both conditions are true --- the compiler cannot determine which is more
constrained [N4950 §13.10.3.2]. This forces the use of tag dispatch or other workarounds.

**3. Syntax is verbose and hard to read.**
`typename std::enable_if<std::is_integral<T>::value, T>::type` is far less readable than
`std::integral<T>`.

**4. Constraints are invisible in the function signature.** With `enable_if` in the return type or a
defaulted template parameter, the constraint is buried in the type system rather than being a
first-class part of the interface.

**5. Interaction with `auto` return types is problematic.** SFINAE via the return type does not work
with `auto` return type deduction, requiring awkward workarounds.

## How Concepts Solve SFINAE Problems

| Problem               | SFINAE                                             | Concepts                                                     |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| Error messages        | Show substitution failure in `enable_if`           | Show the concept name and which requirement failed           |
| Overload ordering     | No subsumption; ambiguous when multiple are viable | Partial ordering by subsumption selects the most constrained |
| Syntax                | `enable_if<cond, T>::type`                         | `requires cond` or `concept T`                               |
| Readability           | Constraint hidden in type manipulation             | Constraint is explicit in the signature                      |
| Composability         | Boolean logic in template parameters               | Named concepts composed with `&&`, `\|\|`                    |
| Interacts with `auto` | Problematic                                        | Works naturally                                              |

## Migration Path

The migration from SFINAE to concepts follows these steps:

1. **Identify the SFINAE condition.** Find the `enable_if` or `void_t`-based condition.
2. **Express it as a concept.** Either use a standard concept or define a new one.
3. **Replace the SFINAE mechanism** with a requires-clause or constrained template parameter.
4. **Test for behavioral equivalence.** Ensure overload resolution still selects the same candidate.

## Side-by-Side Comparison

```cpp
#include <iostream>
#include <type_traits>
#include <concepts>
#include <vector>
#include <string>
#include <iterator>

// ============================================================
// SFINAE approach
// ============================================================

// 1. Type trait-based SFINAE
template<typename T>
typename std::enable_if<std::is_arithmetic<T>::value, std::string>::type
to_string_sfinae(T value) {
    return std::to_string(value);
}

// 2. void_t-based SFINAE for detecting member functions
template<typename T, typename = void>
struct has_size : std::false_type {};

template<typename T>
struct has_size<T, std::void_t<decltype(std::declval<T>().size())>> : std::true_type {};

template<typename T>
typename std::enable_if<has_size<T>::value, std::size_t>::type
get_size_sfinae(const T& t) {
    return t.size();
}

// ============================================================
// Concepts approach
// ============================================================

// 1. Direct concept constraint
template<std::arithmetic T>
std::string to_string_concept(T value) {
    return std::to_string(value);
}

// 2. Requires-expression for detecting member functions
template<typename T>
concept HasSize = requires(T t) {
    { t.size() } -> std::convertible_to<std::size_t>;
};

template<HasSize T>
std::size_t get_size_concept(const T& t) {
    return t.size();
}

// ============================================================
// Comparison demonstration
// ============================================================

int main() {
    // SFINAE versions
    std::cout << to_string_sfinae(42) << "\n";
    std::cout << to_string_sfinae(3.14) << "\n";
    std::cout << get_size_sfinae(std::vector<int>{1, 2, 3}) << "\n";

    // Concept versions (identical behavior, better errors)
    std::cout << to_string_concept(42) << "\n";
    std::cout << to_string_concept(3.14) << "\n";
    std::cout << get_size_concept(std::vector<int>{1, 2, 3}) << "\n";

    // Error demonstration:
    // to_string_sfinae("hello")   -> complex enable_if error
    // to_string_concept("hello") -> clear: "constraint not satisfied: std::arithmetic<std::string>"
}
```

Output:

```
42
3.140000
3
42
3.140000
3
```

:::tip When to Still Use SFINAE Concepts cannot replace all SFINAE use cases. In particular, SFINAE
is still needed when the constraint depends on the **function's return type** in a way that cannot
be expressed as a simple boolean predicate, or when working with C++17 or earlier codebases.
However, for new C++20 code, concepts should be the default choice for template constraints. :::

## See Also

- [Defining Concepts and Requires Clauses](./1_defining_concepts.md)
- [Constraint Subsumption and Overload Resolution](./2_constraint_subsumption.md)
- [Standard Library Concepts](./3_standard_concepts.md)
- [Type Traits and Static Reflection Patterns](../3_compile_time_computation/4_type_traits.md)
