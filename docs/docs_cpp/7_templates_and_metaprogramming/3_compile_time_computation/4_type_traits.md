---
title: Type Traits and Static Reflection Patterns
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: type-traits-and-static-reflection-patterns
---

# Type Traits and Static Reflection Patterns

Type traits provide compile-time type introspection and transformation, forming the foundation of
generic programming in C++. Combined with techniques like SFINAE, tag dispatch, `if constexpr`, and
the upcoming C++26 static reflection, they enable type-safe compile-time polymorphism with zero
runtime overhead.

## The `<type_traits>` Header

The `<type_traits>` header [N4950 §20.15] provides a comprehensive set of compile-time type
introspection and transformation utilities. They fall into several categories:

| Category                  | Examples                                                                    |
| ------------------------- | --------------------------------------------------------------------------- |
| Primary type categories   | `is_void`, `is_integral`, `is_floating_point`, `is_pointer`, `is_reference` |
| Composite type categories | `is_arithmetic`, `is_compound`, `is_reference`, `is_fundamental`            |
| Type properties           | `is_const`, `is_volatile`, `is_trivial`, `is_standard_layout`, `is_empty`   |
| Type relationships        | `is_same`, `is_base_of`, `is_convertible`, `is_nothrow_convertible`         |
| Type modifications        | `remove_cv`, `add_pointer`, `decay`, `enable_if`, `conditional`             |
| Query properties          | `alignment_of`, `rank`, `extent`, `tuple_size`                              |

```cpp
#include <iostream>
#include <type_traits>
#include <vector>
#include <string>

template <typename T>
void dump_type_info() {
    std::cout << "Type analysis:\n";
    std::cout << "  is_integral:       " << std::is_integral_v<T> << "\n";
    std::cout << "  is_floating_point: " << std::is_floating_point_v<T> << "\n";
    std::cout << "  is_pointer:        " << std::is_pointer_v<T> << "\n";
    std::cout << "  is_const:          " << std::is_const_v<T> << "\n";
    std::cout << "  is_reference:      " << std::is_reference_v<T> << "\n";
    std::cout << "  is_arithmetic:     " << std::is_arithmetic_v<T> << "\n";
    std::cout << "  is_trivial:        " << std::is_trivial_v<T> << "\n";
    std::cout << "  is_trivially_copyable: " << std::is_trivially_copyable_v<T> << "\n";
    std::cout << "  size_of:           " << sizeof(T) << " bytes\n";
    std::cout << "  alignment_of:      " << alignof(T) << "\n";
    std::cout << "\n";
}

int main() {
    dump_type_info<int>();
    dump_type_info<const double>();
    dump_type_info<int*>();
    dump_type_info<std::string>();
    dump_type_info<std::vector<int>>();
}
```

## `std::enable_if` and SFINAE

**SFINAE** (Substitution Failure Is Not An Error) [N4950 §13.8.3] means that when substituting
deduced template arguments into the function type causes a failure, the function is simply removed
from the overload set rather than causing a compilation error.

`std::enable_if<Condition, Type = void>` [N4950 §20.15.8] is the classic SFINAE tool: if `Condition`
is true, it provides the nested type `type` (defaults to `void`); otherwise, no `type` member
exists, causing substitution failure.

```cpp
#include <iostream>
#include <type_traits>
#include <string>
#include <vector>

// SFINAE with enable_if: only enable for integral types
template <typename T>
std::enable_if_t<std::is_integral_v<T>, T>
safe_divide(T a, T b) {
    if (b == 0) {
        std::cerr << "Division by zero!\n";
        return T{};
    }
    return a / b;
}

// SFINAE with enable_if: only enable for floating-point types
template <typename T>
std::enable_if_t<std::is_floating_point_v<T>, T>
safe_divide(T a, T b) {
    return a / b;  // IEEE 754 handles division by zero
}

// SFINAE via function return type
template <typename T>
auto serialize(const T& value)
    -> std::enable_if_t<std::is_arithmetic_v<T>, std::string> {
    return std::to_string(value);
}

template <typename T>
auto serialize(const T& value)
    -> std::enable_if_t<
        std::is_same_v<T, std::string>
        || (std::is_array_v<T> && std::is_same_v<std::remove_extent_t<T>, char>)
       , std::string> {
    return std::string{value};
}

int main() {
    std::cout << safe_divide(10, 3) << "\n";      // 3 (int overload)
    std::cout << safe_divide(10.0, 3.0) << "\n";  // 3.333... (double overload)
    safe_divide(10, 0);                            // "Division by zero!", returns 0

    std::cout << serialize(42) << "\n";            // "42"
    std::cout << serialize(3.14) << "\n";          // "3.140000"
    std::cout << serialize(std::string{"hi"}) << "\n";  // "hi"
}
```

:::warning `std::enable_if` SFINAE is effective but produces terrible error messages and makes
function signatures hard to read. In C++17 and later, prefer `if constexpr` for compile-time
branching inside function bodies. In C++20, prefer **concepts** and **constraints** [N4950 §13.7.7]
for the clearest syntax.
:::

## Tag Dispatch

**Tag dispatch** is a SFINAE technique that uses tag types to select overloads at compile time
[N4950 §20.15.4.3]:

```cpp
#include <iostream>
#include <type_traits>
#include <vector>
#include <string>
#include <iterator>

// Tag types
struct trivial_tag {};
struct non_trivial_tag {};

// Tag selector: maps type properties to tags
template <typename T, typename = void>
struct dispatch_tag { using type = non_trivial_tag; };

template <typename T>
struct dispatch_tag<T, std::enable_if_t<std::is_trivially_copyable_v<T>>> {
    using type = trivial_tag;
};

template <typename T>
using dispatch_tag_t = typename dispatch_tag<T>::type;

// Implementation for trivially copyable types
template <typename T>
void copy_data_impl(const T* src, T* dst, std::size_t n, trivial_tag) {
    std::cout << "  [trivial: using memcpy]\n";
    std::memcpy(dst, src, n * sizeof(T));
}

// Implementation for non-trivially copyable types
template <typename T>
void copy_data_impl(const T* src, T* dst, std::size_t n, non_trivial_tag) {
    std::cout << "  [non-trivial: using placement new]\n";
    for (std::size_t i = 0; i < n; ++i) {
        new (dst + i) T(src[i]);
    }
}

// Public interface
template <typename T>
void copy_data(const T* src, T* dst, std::size_t n) {
    copy_data_impl(src, dst, n, dispatch_tag_t<T>{});
}

int main() {
    // Trivially copyable: uses memcpy
    int src1[] = {1, 2, 3};
    int dst1[3];
    copy_data(src1, dst1, 3);

    // Non-trivially copyable: uses placement new
    std::string src2[] = {"hello", "world"};
    std::string dst2[2];
    copy_data(src2, dst2, 2);
    std::cout << dst2[0] << " " << dst2[1] << "\n";
}
```

## `if constexpr` as a SFINAE Alternative

C++17 introduced `if constexpr` [N4950 §8.5.2], which performs compile-time branching. Unlike
`std::enable_if` (which operates on the function signature level), `if constexpr` operates inside
the function body and discards the untaken branch at compile time.

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <type_traits>
#include <sstream>

// A unified serializer using if constexpr
template <typename T>
std::string to_string_generic(const T& value) {
    if constexpr (std::is_arithmetic_v<T>) {
        return std::to_string(value);
    } else if constexpr (std::is_same_v<T, std::string>) {
        return value;
    } else if constexpr (std::is_convertible_v<T, std::string>) {
        return static_cast<std::string>(value);
    } else if constexpr (std::is_pointer_v<T>) {
        if (value == nullptr) return "null";
        std::ostringstream oss;
        oss << value;
        return oss.str();
    } else {
        static_assert(std::is_same_v<T, void>,
            "to_string_generic: unsupported type");
        return {};
    }
}

// Generic container printer
template <typename Container>
void print_container(const Container& c) {
    using value_type = typename Container::value_type;

    std::cout << "[";
    bool first = true;

    for (const auto& elem : c) {
        if (!first) std::cout << ", ";
        first = false;

        // Compile-time dispatch based on element type
        if constexpr (std::is_same_v<value_type, char>) {
            std::cout << "'" << elem << "'";
        } else if constexpr (std::is_same_v<value_type, bool>) {
            std::cout << (elem ? "true" : "false");
        } else {
            std::cout << elem;
        }
    }
    std::cout << "]\n";
}

// Compile-time recursive flatten
template <typename T>
std::size_t flatten_size(const T&) {
    return 1;
}

template <typename T>
std::size_t flatten_size(const std::vector<T>& v) {
    std::size_t total = 0;
    for (const auto& elem : v) {
        if constexpr (std::is_same_v<std::vector<T>,
                                     std::vector<std::vector<T>>>) {
            total += flatten_size(elem);  // recursive for nested vectors
        } else {
            total += 1;
        }
    }
    return total;
}

int main() {
    std::cout << to_string_generic(42) << "\n";             // "42"
    std::cout << to_string_generic(3.14) << "\n";           // "3.140000"
    std::cout << to_string_generic(std::string{"hi"}) << "\n"; // "hi"

    const char* s = "ptr";
    std::cout << to_string_generic(s) << "\n";

    print_container(std::vector<int>{1, 2, 3});             // [1, 2, 3]
    print_container(std::vector<char>{'a', 'b', 'c'});     // ['a', 'b', 'c']
    print_container(std::vector<bool>{true, false, true}); // [true, false, true]

    std::vector<std::vector<int>> nested{{1, 2}, {3, 4, 5}};
    std::cout << flatten_size(nested) << "\n";              // 5
}

```

:::tip Prefer `if constexpr` over `std::enable_if` when you have a single function that needs to
handle multiple type categories. Prefer `std::enable_if` (or better, C++20 concepts) when different
implementations should be entirely separate overloads. The `if constexpr` approach is generally
easier to read, debug, and maintain.
:::

## Comparison: Tag Dispatch vs `if constexpr` vs Concepts

```cpp
#include <iostream>
#include <type_traits>
#include <concepts>

// APPROACH 1: enable_if (SFINAE) — pre-C++17
template <typename T>
std::enable_if_t<std::is_integral_v<T>>
approach1_sfniae(T val) {
    std::cout << "integral: " << val << "\n";
}

template <typename T>
std::enable_if_t<std::is_floating_point_v<T>>
approach1_sfniae(T val) {
    std::cout << "floating: " << val << "\n";
}

// APPROACH 2: Tag dispatch — pre-C++17
template <typename T>
void approach2_tag(T val) {
    if constexpr (std::is_integral_v<T>) {
        approach2_tag_impl(val, std::integral_constant<bool, true>{});
    } else {
        approach2_tag_impl(val, std::integral_constant<bool, false>{});
    }
}

template <typename T>
void approach2_tag_impl(T val, std::true_type) {
    std::cout << "integral: " << val << "\n";
}

template <typename T>
void approach2_tag_impl(T val, std::false_type) {
    std::cout << "non-integral: " << val << "\n";
}

// APPROACH 3: if constexpr — C++17+
template <typename T>
void approach3_constexpr(T val) {
    if constexpr (std::is_integral_v<T>) {
        std::cout << "integral: " << val << "\n";
    } else if constexpr (std::is_floating_point_v<T>) {
        std::cout << "floating: " << val << "\n";
    } else {
        std::cout << "other: " << val << "\n";
    }
}

// APPROACH 4: Concepts — C++20+
template <std::integral T>
void approach4_concept(T val) {
    std::cout << "integral: " << val << "\n";
}

template <std::floating_point T>
void approach4_concept(T val) {
    std::cout << "floating: " << val << "\n";
}

int main() {
    approach1_sfniae(42);       // integral: 42
    approach1_sfniae(3.14);     // floating: 3.14

    approach2_tag(42);          // integral: 42
    approach2_tag("hello");     // non-integral: hello

    approach3_constexpr(42);    // integral: 42
    approach3_constexpr(3.14);  // floating: 3.14
    approach3_constexpr("hi");  // other: hi

    approach4_concept(42);      // integral: 42
    approach4_concept(3.14);    // floating: 3.14
}
```

| Technique            | C++ version | Readability | Error messages | Flexibility              |
| -------------------- | ----------- | ----------- | -------------- | ------------------------ |
| `enable_if` (SFINAE) | C++11       | Poor        | Terrible       | High                     |
| Tag dispatch         | C++11       | Medium      | Medium         | High                     |
| `if constexpr`       | C++17       | Good        | Good           | Medium (single function) |
| Concepts/constraints | C++20       | Excellent   | Excellent      | Highest                  |

## Advanced Type Traits

Beyond the basic `std::is_*` traits, several advanced traits are essential for generic programming:

### Tuple Traits

| Trait                            | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| `std::tuple_element_t<I, Tuple>` | The type of the `I`-th element of `Tuple` [§20.5.3] |
| `std::tuple_size_v<Tuple>`       | The number of elements in `Tuple` [§20.5.3]         |
| `std::tuple_size<Tuple>::value`  | Same as above (C++11 style)                         |

### Variant Traits

| Trait                                    | Description                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| `std::variant_alternative_t<I, Variant>` | The type of the `I`-th alternative of `Variant` [§20.7.3] |
| `std::variant_size_v<Variant>`           | The number of alternatives in `Variant` [§20.7.3]         |

### Conditional Type Selection

| Trait                         | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `std::conditional_t<B, T, F>` | `T` if `B` is true, `F` otherwise [§20.15.8]                                         |
| `std::type_identity_t<T>`     | Simply `T` --- used to prevent deduction [§20.15.8]                                  |
| `std::decay_t<T>`             | Applies array-to-pointer, function-to-pointer, and cv-qualifier removal [§20.15.7.2] |

```cpp
#include <iostream>
#include <type_traits>
#include <tuple>
#include <variant>
#include <string>

int main() {
    using MyTuple = std::tuple<int, double, std::string>;

    static_assert(std::tuple_size_v<MyTuple> == 3);
    static_assert(std::is_same_v<std::tuple_element_t<0, MyTuple>, int>);
    static_assert(std::is_same_v<std::tuple_element_t<1, MyTuple>, double>);
    static_assert(std::is_same_v<std::tuple_element_t<2, MyTuple>, std::string>);

    using MyVariant = std::variant<int, double, std::string>;

    static_assert(std::variant_size_v<MyVariant> == 3);
    static_assert(std::is_same_v<std::variant_alternative_t<0, MyVariant>, int>);
    static_assert(std::is_same_v<std::variant_alternative_t<1, MyVariant>, double>);
    static_assert(std::is_same_v<std::variant_alternative_t<2, MyVariant>, std::string>);

    // std::conditional_t selects a type at compile time
    using IntOrFloat = std::conditional_t<sizeof(void*) == 8, int64_t, int32_t>;
    static_assert(std::is_same_v<IntOrFloat, int64_t>); // on 64-bit

    // std::type_identity_t prevents template argument deduction
    std::cout << "sizeof(IntOrFloat) = " << sizeof(IntOrFloat) << "\n";
}
```

## `std::conditional_t` and `std::type_identity_t`

`std::conditional_t` is the type-level analog of a ternary operator. `std::type_identity_t<T>`
[N4950 §20.15.8] is deceptively simple --- it just returns `T` --- but it is critically useful for
preventing unwanted template argument deduction:

```cpp
#include <iostream>
#include <type_traits>
#include <concepts>

// Problem: this template deduces T from both arguments
template<typename T>
void f(T a, T b) {
    std::cout << "same type\n";
}

// Solution: use type_identity_t to prevent deduction on the second argument
template<typename T>
void g(T a, std::type_identity_t<T> b) {
    std::cout << "second argument must match first\n";
}

// Compile-time type selection
template<typename T>
struct IntegerType {
    using type = std::conditional_t<
        sizeof(T) <= 1, int8_t,
        std::conditional_t<
            sizeof(T) <= 2, int16_t,
            std::conditional_t<
                sizeof(T) <= 4, int32_t,
                int64_t
            >
        >
    >;
};

int main() {
    f(1, 2);    // OK: both int
    g(1, 2);    // OK: second is forced to int
    // f(1, 2.0); // Error: T cannot be both int and double
    g(1, 2.0);  // Error: second argument must match first (int vs double)

    static_assert(std::is_same_v<IntegerType<char>::type, int8_t>);
    static_assert(std::is_same_v<IntegerType<short>::type, int16_t>);
    static_assert(std::is_same_v<IntegerType<int>::type, int32_t>);
    static_assert(std::is_same_v<IntegerType<long long>::type, int64_t>);
}
```

## `std::index_sequence` and `std::index_sequence_for`

`std::index_sequence` [N4950 §20.15.9] is a compile-time sequence of integer indices represented as
a type. It is the primary mechanism for "unrolling" variadic templates and tuples. The key utilities
are:

| Type                                | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- |
| `std::index_sequence<Is...>`        | A type representing the compile-time sequence `0, 1, ..., n-1` |
| `std::make_index_sequence<N>`       | Produces `std::index_sequence<0, 1, ..., N-1>`                 |
| `std::index_sequence_for<Types...>` | Produces `std::make_index_sequence<sizeof...(Types)>`          |

These work by mapping the count `N` to a parameter pack of integers, which can then be expanded with
parameter pack expansion:

$$
\mathrm{make\_index\_sequence<3>} \Rightarrow \mathrm{index\_sequence<0, 1, 2>}
$$

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>

template<typename Tuple, typename Func, std::size_t... Is>
void for_each_impl(Tuple&& t, Func&& f, std::index_sequence<Is...>) {
    (f(std::get<Is>(std::forward<Tuple>(t))), ...);
}

template<typename Tuple, typename Func>
void for_each(Tuple&& t, Func&& f) {
    for_each_impl(
        std::forward<Tuple>(t),
        std::forward<Func>(f),
        std::make_index_sequence<std::tuple_size_v<std::remove_reference_t<Tuple>>>{}
    );
}

template<typename Tuple, typename Func, std::size_t... Is>
auto transform_impl(const Tuple& t, Func&& f, std::index_sequence<Is...>) {
    return std::make_tuple(f(std::get<Is>(t))...);
}

template<typename Tuple, typename Func>
auto transform(const Tuple& t, Func&& f) {
    return transform_impl(
        t,
        std::forward<Func>(f),
        std::make_index_sequence<std::tuple_size_v<Tuple>>{}
    );
}

int main() {
    auto tup = std::make_tuple(1, 2.5, std::string{"hello"});

    std::cout << "for_each output: ";
    for_each(tup, [](const auto& elem) {
        std::cout << "[" << elem << "] ";
    });
    std::cout << "\n";

    auto transformed = transform(tup, [](const auto& elem) {
        if constexpr (std::is_integral_v<std::decay_t<decltype(elem)>>) {
            return elem * 2;
        } else {
            return elem + std::string{"!"};
        }
    });

    std::cout << "transformed: ";
    for_each(transformed, [](const auto& elem) {
        std::cout << "[" << elem << "] ";
    });
    std::cout << "\n";
}
```

Output:

```
for_each output: [1] [2.5] [hello]
transformed: [2] [5] [hello!]
```

:::info Fold Expressions and index_sequence The pattern `(f(std::get<Is>(t)), ...)` is a **fold
expression** [N4950 §7.5.6] that expands the comma operator over the parameter pack `Is`. This is
the idiomatic way to iterate over a tuple at compile time. Without `index_sequence`, there is no way
to iterate over a tuple's elements in a generic function, because tuples do not have a
runtime-iterable interface.
:::

## Unrolling a Tuple with `index_sequence`

The following example demonstrates a more advanced use of `index_sequence` --- extracting specific
elements from a tuple and building a new tuple:

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>
#include <type_traits>

template<typename Tuple, std::size_t... Is>
auto select_impl(const Tuple& t, std::index_sequence<Is...>) {
    return std::make_tuple(std::get<Is>(t)...);
}

template<std::size_t... Indices, typename Tuple>
auto select(const Tuple& t) {
    return select_impl(t, std::index_sequence<Indices...>{});
}

template<typename Tuple, std::size_t... Is>
auto take_impl(const Tuple& t, std::index_sequence<Is...>) {
    return std::make_tuple(std::get<Is>(t)...);
}

template<std::size_t N, typename Tuple>
auto take(const Tuple& t) {
    return take_impl(t, std::make_index_sequence<N>{});
}

template<typename Tuple, typename Func, std::size_t... Is>
auto apply_impl(const Tuple& t, Func&& f, std::index_sequence<Is...>) {
    return f(std::get<Is>(t)...);
}

template<typename Tuple, typename Func>
auto apply(Tuple&& t, Func&& f) {
    return apply_impl(
        std::forward<Tuple>(t),
        std::forward<Func>(f),
        std::make_index_sequence<
            std::tuple_size_v<std::remove_reference_t<Tuple>>
        >{}
    );
}

int main() {
    auto data = std::make_tuple(10, 3.14, std::string{"hello"}, 42, 2.71);

    // Select specific indices
    auto selected = select<0, 2, 4>(data);
    std::cout << "Selected: " << std::get<0>(selected) << ", "
              << std::get<1>(selected) << ", "
              << std::get<2>(selected) << "\n";

    // Take first N elements
    auto first_three = take<3>(data);
    std::cout << "First 3: " << std::get<0>(first_three) << ", "
              << std::get<1>(first_three) << ", "
              << std::get<2>(first_three) << "\n";

    // Apply a function to tuple elements
    auto result = apply(std::make_tuple(3, 4), [](int a, int b) {
        return a + b;
    });
    std::cout << "3 + 4 = " << result << "\n";

    auto concat = apply(std::make_tuple(std::string{"hello"}, std::string{" world"}),
        [](const std::string& a, const std::string& b) {
            return a + b;
        });
    std::cout << "Concatenated: " << concat << "\n";
}
```

Output:

```
Selected: 10, hello, 2.71
First 3: 10, 3.14, hello
3 + 4 = 7
Concatenated: hello world
```

## Structured Binding with `std::tuple`

Structured bindings [N4950 §9.6] combined with `std::tuple` and `std::tie` provide a clean syntax
for returning and unpacking multiple values. The key feature is that structured bindings work at
compile time when used with `constexpr`:

```cpp
#include <iostream>
#include <tuple>
#include <string>
#include <cmath>
#include <sstream>

constexpr auto parse_version(std::string_view version) {
    auto dot1 = version.find('.');
    auto dot2 = version.find('.', dot1 + 1);

    int major = 0, minor = 0, patch = 0;

    auto to_int = [](std::string_view sv) constexpr -> int {
        int result = 0;
        for (char c : sv) {
            result = result * 10 + (c - '0');
        }
        return result;
    };

    major = to_int(version.substr(0, dot1));
    minor = to_int(version.substr(dot1 + 1, dot2 - dot1 - 1));
    patch = to_int(version.substr(dot2 + 1));

    return std::make_tuple(major, minor, patch);
}

constexpr auto min_version(std::tuple<int, int, int> a, std::tuple<int, int, int> b) {
    auto [ma, mi, pa] = a;
    auto [mb, mi2, pb] = b;
    if (ma != mb) return ma < mb ? a : b;
    if (mi != mi2) return mi < mi2 ? a : b;
    return pa < pb ? a : b;
}

int main() {
    constexpr auto [maj, min, pat] = parse_version("2.15.7");
    static_assert(maj == 2);
    static_assert(min == 15);
    static_assert(pat == 7);

    constexpr auto v1 = parse_version("3.0.0");
    constexpr auto v2 = parse_version("2.99.99");
    constexpr auto [rm, ri, rp] = min_version(v1, v2);
    static_assert(rm == 2);

    std::cout << "Version: " << maj << "." << min << "." << pat << "\n";
    std::cout << "Min version: " << rm << "." << ri << "." << rp << "\n";

    // Runtime use
    auto [a, b, c] = std::tuple{1, 2.0, std::string{"three"}};
    std::cout << a << ", " << b << ", " << c << "\n";
}
```

Output:

```
Version: 2.15.7
Min version: 2.99.99
1, 2, three
```

:::tip `std::apply` for Tuple Unpacking `std::apply` [N4950 §20.14.4] is the standard library
utility that unpacks a tuple as arguments to a callable. It is implemented using the same
`index_sequence` pattern shown above. Prefer `std::apply` over writing your own unpacking code.
:::

## Reflection Preview (C++26)

### `std::meta::info` and `std::meta::value` (C++26)

C++26 introduces **static reflection** through the `<meta>` header [P2996R9], which provides the
ability to inspect types, functions, and class members at compile time. The core types are:

| Type               | Description                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `std::meta::info`  | A compile-time value representing a reflection of a C++ entity (type, function, member, etc.) |
| `std::meta::value` | A type-erased compile-time value that can hold any reflection                                 |

The key operations include:

- `std::meta::infoof(expression)` --- obtains a `std::meta::info` representing the type or entity of
  the expression.
- `^^identifier` --- the reflection operator, produces `std::meta::info` for the named entity.
- `std::meta::members_of(type_info)` --- returns a `std::vector<std::meta::info>` of the members of
  a class type.
- `std::meta::name_of(info)` --- returns the name of the reflected entity as a `std::string_view`.

:::warning C++26 Status Static reflection is approved for C++26 but the exact API is still being
finalized. The examples below follow the direction of P2996R9, which is the leading proposal.
Compiler support may vary. Check the latest compiler documentation for current support.
:::

### Code Example: Aggregate Introspection Pattern

The following example demonstrates the intended C++26 reflection pattern for iterating over
aggregate members. This pattern would eliminate the need for manual boilerplate when serializing or
printing aggregates:

```cpp
// C++26 — Pseudocode following P2996R9 direction
// NOTE: This may not compile on current compilers (as of early 2026)
// It is included for educational purposes to illustrate the API design.

#include <meta>
#include <iostream>
#include <string>
#include <format>

struct Person {
    std::string name;
    int age;
    double height;
};

// C++26: reflect on the type to get its members
consteval auto get_member_names(std::meta::info type) {
    std::vector<std::string_view> names;
    for (auto member : std::meta::members_of(type)) {
        names.push_back(std::meta::name_of(member));
    }
    return names;
}

// C++26: generate a format string from the member names
template<typename T>
consteval std::string make_format_string() {
    std::string result;
    bool first = true;
    for (auto member : std::meta::members_of(^^T)) {
        if (!first) result += ", ";
        result += std::meta::name_of(member);
        result += "={}";
        first = false;
    }
    return result;
}

void print_person(const Person& p) {
    // In C++26, this would be possible:
    // std::cout << std::format(make_format_string<Person>(),
    //     p.name, p.age, p.height) << "\n";

    // For now, the manual equivalent:
    std::cout << std::format("name={}, age={}, height={}\n",
        p.name, p.age, p.height);
}

int main() {
    Person alice{"Alice", 30, 1.68};
    print_person(alice);
}
```

### Alternative: Boost.PFR (Precise and Flat Reflection)

Before C++26 reflection is widely available, **Boost.PFR** provides aggregate introspection by
exploiting the fact that standard-layout aggregates have well-defined member layout [N4950 §11.4].
Boost.PFR can access aggregate members by index without requiring any macros or registration:

```cpp
#include <iostream>
#include <string>
#include <boost/pfr.hpp>

struct Point {
    double x;
    double y;
    double z;
};

struct Config {
    std::string name;
    int port;
    bool debug;
    double timeout;
};

template<typename T>
void print_aggregate(const T& obj) {
    boost::pfr::for_each_field(obj, [](const auto& field, std::size_t idx) {
        if constexpr (std::is_same_v<std::decay_t<decltype(field)>, bool>) {
            std::cout << "  [" << idx << "] = " << (field ? "true" : "false") << "\n";
        } else {
            std::cout << "  [" << idx << "] = " << field << "\n";
        }
    });
}

template<typename T>
std::size_t field_count() {
    return boost::pfr::tuple_size_v<T>;
}

int main() {
    Point p{1.0, 2.0, 3.0};
    Config cfg{"my_server", 8080, true, 30.5};

    std::cout << "Point (" << field_count<Point>() << " fields):\n";
    print_aggregate(p);

    std::cout << "Config (" << field_count<Config>() << " fields):\n";
    print_aggregate(cfg);

    // Access by index (no macros needed)
    auto port = boost::pfr::get<1>(cfg);
    std::cout << "Port via index: " << port << "\n";
}
```

Output:

```
Point (3 fields):
  [0] = 1
  [1] = 2
  [2] = 3
Config (4 fields):
  [0] = my_server
  [1] = 8080
  [2] = true
  [3] = 30.5
Port via index: 8080
```

:::tip When to Use Boost.PFR Boost.PFR works for **standard-layout aggregates** (plain structs with
public members, no virtual functions, no base classes, no custom constructors). It does not work for
types with private members, virtual functions, or non-standard layout. If your types satisfy these
constraints, Boost.PFR is a practical, header-only solution that requires no code generation or
macro registration. For more complex types, wait for C++26 reflection or use a library like Magic
Enum for enums.
:::

### Comparison: Current Approaches to Compile-Time Introspection

| Approach                              | C++ Version       | Limitations                     | Overhead     |
| ------------------------------------- | ----------------- | ------------------------------- | ------------ |
| Manual macros (e.g., `DEFINE_FIELDS`) | Any               | Boilerplate, error-prone        | Zero runtime |
| Boost.PFR                             | C++14+            | Standard-layout aggregates only | Zero runtime |
| Magic Get (Agate/Boost)               | C++14+            | Same as Boost.PFR               | Zero runtime |
| `__builtin_*` compiler intrinsics     | Compiler-specific | Non-portable                    | Zero runtime |
| C++26 `<meta>` reflection             | C++26             | Not yet widely supported        | Zero runtime |

All of these approaches are **zero-overhead** --- the introspection happens at compile time, and the
generated code is equivalent to hand-written member access. The primary difference is in
**ergonomics** (how much boilerplate is required) and **generality** (what kinds of types can be
introspected).

## See Also

- [Parameter Packs and Variadic Templates](./1_parameter_packs.md)
- [Fold Expressions and Pack Expansion](./2_fold_expressions.md)
- [Compile-Time Branching and Constexpr Functions](./3_if_constexpr.md)
- [SFINAE vs Concepts](../2_concepts_and_constraints/4_sfinae_vs_concepts.md)

:::

:::

:::

:::

:::

:::
