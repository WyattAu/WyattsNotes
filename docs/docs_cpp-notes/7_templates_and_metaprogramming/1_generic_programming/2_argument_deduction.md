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

## Deduction Rules in Detail

The deduction process treats each function parameter as a pattern and tries to match the argument
type against it. The rules are:

1. **Top-level CV-qualifiers are stripped** from the argument before matching.
2. **References are not deduced differently** from non-references at the top level — `T&` and `T`
   deduce the same `T`.
3. **Array-to-pointer decay** and **function-to-pointer decay** apply to arguments.
4. Each deduced template parameter must produce a **consistent type** across all deduction sites.

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
void f(T param) {
    std::cout << "T deduced as: ";
    if constexpr (std::is_same_v<T, int>) std::cout << "int\n";
    else if constexpr (std::is_same_v<T, int*>) std::cout << "int*\n";
    else if constexpr (std::is_same_v<T, const int>) std::cout << "const int\n";
    else std::cout << "other\n";
}

int main() {
    int x = 10;
    const int cx = x;
    int& rx = x;
    const int& crx = x;
    int arr[5] = {};

    f(x);     // T = int
    f(cx);    // T = int (top-level const stripped)
    f(rx);    // T = int (reference stripped)
    f(crx);   // T = int (reference + const stripped)
    f(arr);   // T = int* (array decays to pointer)
}
```

### Preserving CV-Qualifiers and References

To preserve the argument's cv-qualifiers or reference-ness, use forwarding references or explicit
qualification in the template parameter:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
void by_value(T param) {}        // Strips references, strips top-level const

template <typename T>
void by_ref(T& param) {}         // Preserves lvalue-ness, does NOT accept rvalues

template <typename T>
void by_const_ref(const T& param) {}  // Preserves const on underlying type

template <typename T>
void by_fwd_ref(T&& param) {}    // Forwarding reference: preserves value category

int main() {
    int x = 42;
    const int cx = 42;

    by_value(x);       // T = int
    by_value(cx);      // T = int (const stripped)
    by_ref(x);         // T = int
    // by_ref(cx);     // T = const int, but deduces T = const int → binds to const int&
    // by_ref(42);     // ERROR: cannot bind rvalue to non-const lvalue reference

    by_const_ref(x);   // T = int
    by_const_ref(cx);  // T = int (const is on the reference, not T)
    by_const_ref(42);  // T = int (const ref binds to rvalue)

    by_fwd_ref(x);     // T = int& (lvalue → reference collapse to int&)
    by_fwd_ref(42);    // T = int (rvalue → T = int, param = int&&)
    by_fwd_ref(cx);    // T = const int& (const lvalue → const int&)
}
```

### Array-to-Pointer and Function-to-Pointer Decay

Arrays and functions decay to pointers during deduction unless the parameter is a reference:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
void decay(T param) {
    static_assert(std::is_same_v<T, int*>, "");
}

template <typename T>
void no_decay(T& param) {
    static_assert(std::is_same_v<T, int[5]>, "");
}

void func() {}

template <typename T>
void func_decay(T param) {
    static_assert(std::is_same_v<T, void(*)()>, "");
}

int main() {
    int arr[5] = {};
    decay(arr);       // T = int* (decay)
    no_decay(arr);    // T = int[5] (no decay)

    func_decay(func); // T = void(*)() (function-to-pointer decay)
}
```

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

### CTAD and Implicitly Generated Deduction Guides

For each constructor of a class template, the compiler generates an **implicit deduction guide**
that mirrors the constructor's signature. For a constructor `C(Args...)`, the implicit guide is:

```
C(Args...) -> C<deduced-types-from-Args>
```

This means CTAD works out of the box for most constructors, but there are important limitations:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
class Box {
    T value_;
public:
    Box(const T& v) : value_(v) {}
    T get() const { return value_; }
};

int main() {
    Box b{42};  // CTAD deduces Box<int> from Box(const int&)
    std::cout << b.get() << "\n";  // 42

    // Note: the implicit guide deduces T = int from const int&.
    // The const and reference are stripped during deduction.
}
```

### CTAD Does Not Work with Default Constructors

A class template with only a default constructor does **not** get CTAD, because there are no
constructor arguments to deduce from:

```cpp
template <typename T>
class Container {
    T data_{};
public:
    Container() = default;
};

// Container c;  // ERROR: cannot deduce T from no arguments
// You must still write: Container<int> c;
```

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

### Alias Template Deduction Guides (C++20)

C++20 allows deduction guides for alias templates, which was previously not allowed:

```cpp
#include <iostream>
#include <vector>

template <typename T>
using Vec = std::vector<T>;

// C++20: deduction guide for alias template
template <typename T>
Vec(std::initializer_list<T>) -> Vec<T>;

int main() {
    Vec v = {1, 2, 3};  // Vec<int> via deduction guide
    std::cout << v.size() << "\n";  // 3
}
```

## `auto` Deduction for Function Templates

The `auto` keyword in function return types and parameters leverages the same deduction rules as
template argument deduction:

```cpp
#include <iostream>
#include <type_traits>

// auto return type: deduced from return statement
template <typename T, typename U>
auto add(T a, U b) {
    return a + b;
}

// auto parameter (C++20): abbreviated function template
void print(auto&& value) {
    std::cout << value << "\n";
}

// Multiple auto parameters (C++20)
auto multiply(auto a, auto b) {
    return a * b;
}

int main() {
    auto result = add(1, 2.5);  // result is double
    std::cout << result << "\n";  // 3.5

    print(42);       // 42
    print("hello");  // hello

    std::cout << multiply(3, 4.0) << "\n";  // 12
}
```

**Abbreviated function templates** (C++20) using `auto` parameters are syntactic sugar for explicit
template parameters. The compiler generates a template parameter for each `auto` in the parameter
list.

## Deduction Failures and Fixes

### Failure 1: Contradictory Deductions

```cpp
template <typename T>
T min_val(T a, T b) { return a < b ? a : b; }

// min_val(1, 2.0);  // ERROR: T deduced as both int and double

// Fix 1: Two template parameters
template <typename T, typename U>
auto min_val2(T a, U b) -> decltype(a < b ? a : b) { return a < b ? a : b; }

// Fix 2: Explicit template argument
// min_val<double>(1, 2.0);  // OK: T explicitly set to double
```

### Failure 2: No Deduction for Non-Deduced Contexts

Certain template parameters cannot be deduced because they do not appear in a deduction context:

```cpp
template <typename T, typename U>
U cast(T value) { return static_cast<U>(value); }

// cast(42);  // ERROR: U cannot be deduced (it doesn't appear in function params)

// Fix: explicit template argument
auto x = cast<int, double>(42);  // OK: U explicitly set to double
```

### Failure 3: CTAD with Multiple Constructors

```cpp
#include <string>

template <typename T>
class Ambiguous {
public:
    Ambiguous(T) {}
    Ambiguous(T, T) {}
};

// Ambiguous a{42};  // OK: single T constructor wins
// Ambiguous b{42, 3.14};  // ERROR: T deduced as int and double — contradiction
```

## Common Pitfalls

1. **Array-to-pointer decay during deduction.** Passing an array to a template function by value
   deduces a pointer, losing the size. Use `std::span` (C++20) or reference-to-array to preserve
   bounds.

2. **CV-qualifier stripping.** Top-level `const` and `volatile` qualifiers are stripped from
   arguments during deduction. The template parameter `T` in `f(const T&)` will never be `const`.

3. **CTAD with string literals.** `std::pair p{"hello", "world"}` deduces
   `std::pair&lt;const char*, const char*&gt;`, not `std::pair&lt;std::string, std::string&gt;`. Use
   `std::pair&lt;std::string, std::string&gt;` explicitly or provide a deduction guide.

4. **CTAD does not work with aggregate initialization in C++17.** Aggregate types do not have
   constructors, so no implicit deduction guides are generated. C++20 fixes this with aggregate
   CTAD.

5. **`auto` returns by value, not reference.** `auto f()` returns by value. Use `auto&` or `auto&&`
   to return a reference, but be careful about dangling references.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Parameter Packs and Variadic Templates](../3_compile_time_computation/1_parameter_packs.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
