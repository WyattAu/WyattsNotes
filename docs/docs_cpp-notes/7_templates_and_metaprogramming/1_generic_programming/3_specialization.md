---
title: Explicit and Partial Specialization
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: explicit-and-partial-specialization
---

# Explicit and Partial Specialization

Specialization allows you to provide alternative implementations for specific sets of template
arguments. **Full specialization** replaces the primary template entirely for a specific type, while
**partial specialization** provides a pattern-matched alternative that the compiler selects using
partial ordering rules.

## Full Specialization

**Full (explicit) specialization** provides a completely separate definition for a specific set of
template arguments [N4950 §13.7.5]. The general template is called the **primary template**.

```cpp
#include <iostream>
#include <type_traits>
#include <string>

// Primary template [N4950 §13.7.5]
template <typename T>
struct is_same {
    static constexpr bool value = false;
};

// Full specialization for T == U
template <typename T>
struct is_same<T, T> {
    static constexpr bool value = true;
};

// This requires TWO template parameters on the primary template.
// The standard library version is std::is_same_v [N4950 §20.15.4.3].

template <typename T, typename U>
inline constexpr bool is_same_v = is_same<T, U>::value;

int main() {
    static_assert(!is_same_v<int, double>);
    static_assert(is_same_v<int, int>);
    static_assert(is_same_v<const int, const int>);
    static_assert(!is_same_v<int, const int>);
    static_assert(is_same_v<std::string, std::string>);

    std::cout << std::boolalpha;
    std::cout << is_same_v<int, double> << "\n";  // false
    std::cout << is_same_v<int, int> << "\n";     // true
}
```

:::warning Full specializations are **not** templates themselves --- they are concrete definitions.
They must be declared in the same namespace as the primary template. If you fully specialize a
function template, you must specialize every overload that participates in overload resolution. :::

## Partial Specialization

**Partial specialization** allows you to specialize for a _subset_ of possible template arguments.
The primary template still exists for arguments that don't match any partial specialization. The
compiler selects the most specialized version using **partial ordering rules** [N4950 §13.7.5.5].

```cpp
#include <iostream>
#include <type_traits>
#include <string>
#include <vector>

// Primary template
template <typename T>
struct remove_cv {
    using type = T;
};

// Partial specialization: match const T
template <typename T>
struct remove_cv<const T> {
    using type = T;
};

// Partial specialization: match volatile T
template <typename T>
struct remove_cv<volatile T> {
    using type = T;
};

// Partial specialization: match const volatile T
template <typename T>
struct remove_cv<const volatile T> {
    using type = T;
};

template <typename T>
using remove_cv_t = typename remove_cv<T>::type;

// More partial specialization examples:

// Primary template for is_pointer
template <typename T>
struct is_pointer : std::false_type {};

// Partial specialization: match T*
template <typename T>
struct is_pointer<T*> : std::true_type {};

template <typename T>
inline constexpr bool is_pointer_v = is_pointer<T>::value;

// Partial specialization for remove_reference
template <typename T>
struct remove_reference { using type = T; };

template <typename T>
struct remove_reference<T&> { using type = T; };

template <typename T>
struct remove_reference<T&&> { using type = T; };

template <typename T>
using remove_reference_t = typename remove_reference<T>::type;

int main() {
    static_assert(std::is_same_v<remove_cv_t<const int>, int>);
    static_assert(std::is_same_v<remove_cv_t<volatile double>, double>);
    static_assert(std::is_same_v<remove_cv_t<const volatile char>, char>);
    static_assert(std::is_same_v<remove_cv_t<int>, int>);

    static_assert(is_pointer_v<int*>);
    static_assert(is_pointer_v<const int*>);
    static_assert(!is_pointer_v<int>);
    static_assert(!is_pointer_v<int&>);

    static_assert(std::is_same_v<remove_reference_t<int&>, int>);
    static_assert(std::is_same_v<remove_reference_t<int&&>, int>);
    static_assert(std::is_same_v<remove_reference_t<int>, int>);

    std::cout << std::boolalpha;
    std::cout << is_pointer_v<int*> << "\n";    // true
    std::cout << is_pointer_v<int> << "\n";     // false
}
```

## Partial Ordering Rules

When multiple partial specializations match, the compiler uses **partial ordering** to select the
most specialized one [N4950 §13.7.5.5]. Informally, specialization $A$ is more specialized than $B$
if every type accepted by $A$ is also accepted by $B$, but not vice versa.

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
struct DebugName {
    static const char* name() { return "primary"; }
};

template <typename T>
struct DebugName<T*> {
    static const char* name() { return "pointer"; }
};

template <typename T>
struct DebugName<T* const> {
    static const char* name() { return "const pointer"; }
};

int main() {
    std::cout << DebugName<int>::name() << "\n";          // "primary"
    std::cout << DebugName<int*>::name() << "\n";         // "pointer"
    std::cout << DebugName<int* const>::name() << "\n";   // "const pointer"
    // For int* const, both T* and T* const match, but
    // T* const is more specialized (a subset of T*).
}
```

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Argument Deduction (Class and Function)](./2_argument_deduction.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
