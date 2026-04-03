---
title: Argument Deduction (Class and Function)
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: argument-deduction-class-and-function
---

# Argument Deduction (Class and Function)

Template argument deduction allows the compiler to infer template parameters from the types of
arguments provided at call sites or construction sites. This section covers function template
argument deduction, class template argument deduction (CTAD, C++17), and explicit deduction guides.

## Function Template Argument Deduction

The compiler deduces template arguments from the types of function call arguments [N4950 §13.8.2.1].
The deduction rules follow pattern matching against the parameter types.

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
T add(T a, T b) {
    return a + b;
}

template <typename T, typename U>
auto multiply(T a, U b) -> decltype(a * b) {
    return a * b;
}

int main() {
    add(1, 2);           // T = int (both args are int)
    add(1.0, 2.0);       // T = double
    // add(1, 2.0);      // ERROR: T cannot be both int and double

    multiply(3, 2.5);    // T = int, U = double; return type is double

    // Explicit template arguments override deduction [N4950 §13.8.2.1]
    add<double>(1, 2.0); // T explicitly set to double; OK
}
```

Deduction can fail in several ways: contradictory deductions from different arguments, no viable
specialization, or ambiguous partial ordering.

## Class Template Argument Deduction (CTAD)

Starting with C++17, the compiler can deduce class template arguments from constructor arguments
[N4950 §16.3.1.1]. This eliminates the need to repeat type arguments that the compiler can figure
out.

```cpp
#include <iostream>
#include <utility>
#include <string>
#include <array>

// Before C++17:
//   std::pair<int, std::string> p{42, "hello"};
// With C++17 CTAD:
//   std::pair p{42, "hello"};   // deduces pair<int, const char*>

template <typename T>
class Wrapper {
    T value_;
public:
    Wrapper(T v) : value_(std::move(v)) {}
    const T& get() const { return value_; }
};

int main() {
    Wrapper w{42};       // CTAD deduces Wrapper<int>
    Wrapper ws{"hi"};    // CTAD deduces Wrapper<const char*>
    std::cout << w.get() << "\n";   // 42
    std::cout << ws.get() << "\n";  // hi

    // CTAD also works with standard library types:
    std::pair p2{1.0, "text"};      // pair<double, const char*>
    std::array arr{1, 2, 3};        // array<int, 3>
}
```

:::info CTAD only works when there is exactly one viable deduction. If the constructor template and
the class template both participate in deduction and produce conflicting results, deduction fails
[N4950 §16.3.1.7]. :::

## Deduction Guides

When the compiler's default deduction is insufficient or wrong, you can write **explicit deduction
guides** [N4950 §16.3.1.7]. A deduction guide tells the compiler how to map constructor argument
types to class template arguments.

```cpp
#include <iostream>
#include <type_traits>

// A simple Pair class
template <typename T, typename U>
class Pair {
public:
    Pair(T first, U second) : first_(first), second_(second) {}

    T first()  const { return first_; }
    U second() const { return second_; }

private:
    T first_;
    U second_;
};

// Implicit deduction guide: Pair(T, U) -> Pair<T, U>
// (The compiler generates this automatically from the constructor.)

// Explicit deduction guide: deduce Pair from a single argument
// that is itself a Pair with different types.
template <typename T, typename U>
Pair(T, U) -> Pair<std::decay_t<T>, std::decay_t<U>>;

// Deduction guide: construct Pair<T, T> from a single value
template <typename T>
Pair(T) -> Pair<T, T>;

// Deduction guide for array-like initialization: Pair from a std::array of size 2
template <typename T, std::size_t N>
requires (N == 2)
Pair(const std::array<T, N>&) -> Pair<T, T>;

int main() {
    Pair p1{42, 3.14};          // Pair<int, double>
    static_assert(std::is_same_v<decltype(p1), Pair<int, double>>);

    Pair p2{42};                // Pair<int, int> via single-arg guide
    static_assert(std::is_same_v<decltype(p2), Pair<int, int>>);

    std::array<int, 2> a{1, 2};
    Pair p3{a};                 // Pair<int, int> via array guide
    static_assert(std::is_same_v<decltype(p3), Pair<int, int>>);

    std::cout << p1.first() << ", " << p1.second() << "\n";  // 42, 3.14
    std::cout << p2.first() << ", " << p2.second() << "\n";  // 42, 42
    std::cout << p3.first() << ", " << p3.second() << "\n";  // 1, 2
}
```

The deduction guide `Pair(T, U) -> Pair<std::decay_t<T>, std::decay_t<U>>` uses `std::decay_t` to
ensure that array and function types decay to pointer types (matching the behavior of pass-by-value
constructors), just as `std::make_pair` does.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Parameter Packs and Variadic Templates](../3_compile_time_computation/1_parameter_packs.md)
