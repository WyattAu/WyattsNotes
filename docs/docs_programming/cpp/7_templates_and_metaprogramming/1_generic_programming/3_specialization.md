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

:::warning
Full specializations are **not** templates themselves --- they are concrete definitions.
They must be declared in the same namespace as the primary template. If you fully specialize a
function template, you must specialize every overload that participates in overload resolution.
:::

### Full Specialization of Function Templates

Function templates can be fully specialized, but this is rarely recommended because overloading
usually provides a better solution:

```cpp
#include <iostream>
#include <cstring>

// Primary function template
template <typename T>
T clamp(T value, T lo, T hi) {
    return value < lo ? lo : (value > hi ? hi : value);
}

// Full specialization for const char* — but overloading is preferred!
template <>
const char* clamp<const char*>(const char* value, const char* lo, const char* hi) {
    if (std::strcmp(value, lo) < 0) return lo;
    if (std::strcmp(value, hi) > 0) return hi;
    return value;
}

int main() {
    std::cout << clamp(5, 0, 10) << "\n";         // 5
    std::cout << clamp(15, 0, 10) << "\n";        // 10
    std::cout << clamp("banana", "apple", "cherry") << "\n";  // banana
}
```

**Why overloading is preferred over function specialization:** Overloads participate in overload
resolution at the same level, while specializations do not. A full specialization of a function
template is only considered if the primary template is already the best match, which can lead to
surprising behavior.

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

### Ordering Example: Pointers vs Arrays

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
struct TypeInfo { static const char* name() { return "unknown"; }; };

template <typename T>
struct TypeInfo<T*> { static const char* name() { return "pointer"; }; };

template <typename T, std::size_t N>
struct TypeInfo<T[N]> { static const char* name() { return "array"; }; };

int main() {
    std::cout << TypeInfo<int>::name() << "\n";     // "unknown"
    std::cout << TypeInfo<int*>::name() << "\n";    // "pointer"
    std::cout << TypeInfo<int[10]>::name() << "\n"; // "array"
    // Note: int[10] does NOT decay to int* for partial matching.
    // T[N] is more specialized than T* for array types.
}
```

## Partial Specialization with SFINAE

Partial specializations can use SFINAE via constraints (C++20 `requires`) or `std::enable_if` to
select implementations based on type properties:

```cpp
#include <iostream>
#include <type_traits>
#include <string>
#include <vector>

// Primary template
template <typename T, typename = void>
struct element_type {
    using type = T;
};

// Partial specialization for containers with ::value_type
template <typename T>
struct element_type<T, std::void_t<typename T::value_type>> {
    using type = typename T::value_type;
};

template <typename T>
using element_type_t = typename element_type<T>::type;

// C++20 version using concepts
template <typename T>
struct element_type_cxx20 {
    using type = T;
};

template <typename T>
    requires requires { typename T::value_type; }
struct element_type_cxx20<T> {
    using type = typename T::value_type;
};

int main() {
    static_assert(std::is_same_v<element_type_t<int>, int>);
    static_assert(std::is_same_v<element_type_t<std::vector<int>>, int>);
    static_assert(std::is_same_v<element_type_t<std::string>, char>);
    static_assert(std::is_same_v<element_type_t<std::vector<std::string>>, std::string>);

    std::cout << "element_type works for primitives and containers\n";
}
```

## Template Template Parameters

A **template template parameter** is a template parameter that is itself a template. This enables
specialization on the "shape" of a type:

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <deque>

// Primary template: accepts any container of T
template <typename T, template <typename, typename> class Container>
struct ContainerInfo {
    static void print() {
        std::cout << "generic container\n";
    }
};

// Partial specialization for std::vector
template <typename T, typename Alloc>
struct ContainerInfo<T, std::vector> {
    static void print() {
        std::cout << "std::vector (contiguous, random-access)\n";
    }
};

// Partial specialization for std::list
template <typename T, typename Alloc>
struct ContainerInfo<T, std::list> {
    static void print() {
        std::cout << "std::list (doubly-linked, bidirectional)\n";
    }
};

int main() {
    ContainerInfo<int, std::vector>::print();  // std::vector (contiguous, ...)
    ContainerInfo<int, std::list>::print();    // std::list (doubly-linked, ...)
    ContainerInfo<int, std::deque>::print();   // generic container
}
```

## Variadic Template Specialization

Variadic templates can be partially specialized to handle specific pack patterns:

```cpp
#include <iostream>

// Primary template: recursive case
template <typename... Ts>
struct Count {
    static constexpr std::size_t value = 1 + Count<Ts...>::value;
};

// Partial specialization: empty pack (base case)
template <>
struct Count<> {
    static constexpr std::size_t value = 0;
};

// Partial specialization: single type
template <typename T>
struct Count<T> {
    static constexpr std::size_t value = 1;
};

// Specialization pattern: first type + rest
template <typename First, typename... Rest>
struct Front {
    using type = First;
};

template <typename First, typename... Rest>
using Front_t = typename Front<First, Rest...>::type;

int main() {
    static_assert(Count<int, double, char>::value == 3);
    static_assert(Count<>::value == 0);
    static_assert(Count<int>::value == 1);

    static_assert(std::is_same_v<Front_t<int, double, char>, int>);
    static_assert(std::is_same_v<Front_t<char>, char>);

    std::cout << Count<int, double, char, float>::value << "\n";  // 4
}
```

### Variadic Type Traits with Specialization

```cpp
#include <iostream>
#include <type_traits>

// All-of trait using recursive specialization
template <typename... Conds>
struct AllOf : std::true_type {};

template <typename First, typename... Rest>
struct AllOf<First, Rest...>
    : std::conditional_t<bool(First::value), AllOf<Rest...>, std::false_type> {};

template <bool... Bools>
inline constexpr bool all_of_v = AllOf<std::bool_constant<Bools>...>::value;

int main() {
    static_assert(all_of_v<true, true, true>);
    static_assert(!all_of_v<true, false, true>);
    static_assert(all_of_v<>);  // empty: true
    std::cout << "all_of_v works\n";
}
```

## Common Errors with Ambiguity

### Ambiguous Partial Specializations

When two partial specializations are equally specialized, the program is ill-formed:

```cpp
template <typename T>
struct Ambig {};

// Both specializations match Ambig<const int*> — ambiguous!
template <typename T>
struct Ambig<const T*> {};     // matches: T = int

template <typename T>
struct Ambig<T* const> {};     // matches: T = const int

// Ambig<const int*> ai;  // ERROR: ambiguous partial specialization

// Fix: provide a specialization that is strictly more specialized
template <typename T>
struct Ambig<const T* const> {};
// Now Ambig<const int*> still ambiguous between first two.
// The real fix is to reorder: put the more specific one first
// and ensure no overlap, or add a disambiguating specialization.
```

### Full vs Partial Specialization Ordering

Full specializations always take precedence over partial specializations, regardless of declaration
order:

```cpp
template <typename T>
struct Prioritized { static constexpr int value = 0; };

template <typename T>
struct Prioritized<T*> { static constexpr int value = 1; };  // partial

template <>
struct Prioritized<int*> { static constexpr int value = 2; };  // full

int main() {
    static_assert(Prioritized<int*>::value == 2);   // full specialization wins
    static_assert(Prioritized<double*>::value == 1); // partial specialization
    static_assert(Prioritized<int>::value == 0);     // primary template
}
```

## Common Pitfalls

1. **Partial specializations of function templates are not allowed.** You can only partially
   specialize class templates and variable templates. For functions, use overloading instead.

2. **Specialization must be visible at the point of use.** If you specialize a template in a
   different translation unit, the specialization may not be used. Prefer header-only templates or
   explicit instantiation.

3. **Specialization does not inherit from the primary template.** Each specialization is a
   completely independent definition. If you want shared behavior, use a base class or CRTP.

4. **`std::enable_if` in partial specializations.** Using `std::enable_if` as a template argument is
   the SFINAE-compatible way to conditionally specialize. C++20 `requires` clauses are preferred.

5. **Ambiguity is a hard error.** If two partial specializations are equally specialized, the
   compiler does not pick one — it emits an error. Always test with edge cases.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Argument Deduction (Class and Function)](./2_argument_deduction.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
- [Type Traits and Static Reflection Patterns](../3_compile_time_computation/4_type_traits.md)

:::
