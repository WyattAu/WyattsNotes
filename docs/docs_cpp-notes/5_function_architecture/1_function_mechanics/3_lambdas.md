---
title: Lambda Expressions — Capture Layouts and Closure Types
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: lambda-expressions-capture-layouts-and-closure-types
---

# Lambda Expressions: Capture Layouts and Closure Types

A lambda expression produces a **closure object** — an unnamed object of an unnamed class type (the
closure type). This section covers lambda syntax, capture modes, generic lambdas, stateful lambda
lifetime issues, and the overhead of type erasure via `std::function`.

## 3.1 Syntax and Structure [N4950 §8.1.5]

A lambda expression produces a **closure object** — an unnamed object of an unnamed class type (the
closure type). The closure type contains:

- A public inline `operator()` corresponding to the lambda's parameters and body.
- Data members corresponding to each captured entity.
- A constructor (since C++14, lambdas are default-constructible if no captures are used).
- A closure type is not a struct/class in the traditional sense but behaves as one.

```cpp
#include <iostream>
#include <utility>

int main() {
    int x = 10;
    int y = 20;

    auto sum = [x, y]() { return x + y; };

    // The closure type is roughly equivalent to:
    // class __lambda_1 {
    //     int x;
    //     int y;
    // public:
    //     __lambda_1(int x_, int y_) : x(x_), y(y_) {}
    //     int operator()() const { return x + y; }
    // };

    std::cout << sum() << '\n';  // 30
}
```

## 3.2 Capture Modes

| Capture Syntax | Meaning                                       |
| :------------- | :-------------------------------------------- |
| `[]`           | No captures                                   |
| `[=]`          | Capture all used variables by value (copy)    |
| `[&]`          | Capture all used variables by reference       |
| `[x]`          | Capture `x` by value                          |
| `[&x]`         | Capture `x` by reference                      |
| `[x, &y]`      | Capture `x` by value, `y` by reference        |
| `[=, &x]`      | Capture all by value, except `x` by reference |
| `[&, x]`       | Capture all by reference, except `x` by value |

```cpp
#include <iostream>
#include <string>

int main() {
    int a = 1;
    int b = 2;
    int c = 3;

    // Mixed capture: a by value, b by reference, c by value
    auto f = [a, &b, c]() {
        // a = 10;   // ERROR: a is const (captured by value in non-mutable lambda)
        b = 20;     // OK: b is captured by reference
        return a + b + c;
    };

    std::cout << f() << '\n';  // 1 + 20 + 3 = 24
    std::cout << b << '\n';    // 20 (b was modified through the reference)

    // Init-capture (C++14): capture with an arbitrary expression
    std::string prefix = "Hello, ";
    auto greet = [prefix = std::move(prefix)](const std::string& name) {
        return prefix + name;
    };
    std::cout << greet("World") << '\n';  // Hello, World
}
```

## 3.3 Mutable Lambdas

By default, a lambda's `operator()` is `const`. The `mutable` keyword removes the `const` qualifier,
allowing the lambda to modify its captured-by-value members:

```cpp
#include <iostream>

int main() {
    int counter = 0;

    auto inc = [counter]() mutable {
        return ++counter;
    };

    std::cout << inc() << '\n';  // 1
    std::cout << inc() << '\n';  // 2
    std::cout << inc() << '\n';  // 3
    std::cout << counter << '\n'; // 0 — the original is unchanged

    // Without mutable, this would not compile:
    // auto inc_const = [counter]() { return ++counter; };
    // ERROR: increment of member 'counter' in read-only object
}
```

## 3.4 Generic Lambdas [N4950 §8.1.5.5]

C++14 introduced generic lambdas with `auto` parameters. Each `auto` parameter generates a separate
template parameter of the closure type's `operator()`.

```cpp
#include <iostream>
#include <typeinfo>

int main() {
    auto print_type = [](const auto& val) {
        std::cout << typeid(val).name() << ": " << val << '\n';
    };

    print_type(42);       // int: 42
    print_type(3.14);     // double: 3.14
    print_type("hello");  // char const*: hello

    // C++20: explicit template parameter list
    auto add = []<typename T>(T a, T b) -> T {
        return a + b;
    };

    std::cout << add(1, 2) << '\n';       // 3
    std::cout << add(1.5, 2.5) << '\n';   // 4.0

    // C++20: template parameter with constraints
    auto add_numbers = []<typename T>(T a, T b) requires std::integral<T> {
        return a + b;
    };
    // add_numbers(1.5, 2.5);  // ERROR: constraint not satisfied
}
```

:::info Relevance Generic lambdas are the backbone of STL algorithms. `std::sort`, `std::transform`,
`std::find_if` all accept callable objects, and generic lambdas provide the most ergonomic way to
pass custom comparators and predicates. :::

## 3.5 Stateful Lambdas and Lifetime Issues

A lambda that captures by reference holds references to local variables. If the lambda outlives
those variables (e.g., by being returned or stored), the references become dangling — undefined
behavior.

```cpp
#include <functional>
#include <iostream>
#include <string>

// DANGEROUS: returning a lambda that captures by reference
std::function<int(int)> make_multiplier_bad(int& factor) {
    return [&factor](int x) { return x * factor; };
    // factor is a reference to a local in the caller's scope
    // If the caller's local goes out of scope, this lambda holds a dangling reference
}

// SAFE: capturing by value
std::function<int(int)> make_multiplier_good(int factor) {
    return [factor](int x) { return x * factor; };
    // factor is copied into the closure object
}

int main() {
    auto good = make_multiplier_good(5);
    std::cout << good(10) << '\n';  // 50 — safe, factor is stored by value

    int f = 5;
    auto bad = make_multiplier_bad(f);
    std::cout << bad(10) << '\n';   // 50 — works here, but fragile
    // After f goes out of scope, calling bad() is undefined behavior
}
```

## 3.6 `std::function` vs Lambda: Type Erasure Overhead

A lambda has a **unique, unnameable type**. Two lambdas with identical bodies have different types.
This means lambdas cannot be stored in a heterogeneous container or returned as a specific type
without type erasure.

`std::function<R(Args...)>` performs type erasure: it wraps any callable with a compatible signature
behind a uniform interface. The cost of this flexibility is:

- **Indirection**: each invocation goes through a virtual dispatch or function pointer.
- **Potential heap allocation**: large closures (exceeding the Small Buffer Optimization threshold)
  are allocated on the heap.
- **No inlining**: the call target is determined at runtime, preventing compiler optimization.

```cpp
#include <functional>
#include <iostream>
#include <chrono>

int main() {
    auto direct_lambda = [](int x) { return x * x; };

    // Direct call: known type, fully inlinable
    volatile int r1 = direct_lambda(5);

    // Through std::function: type erasure, cannot be inlined
    std::function<int(int)> erased = direct_lambda;
    volatile int r2 = erased(5);

    // Benchmark comparison (approximate):
    using namespace std::chrono;
    constexpr int N = 100'000'000;

    auto start = high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        volatile int r = direct_lambda(i);
    }
    auto end = high_resolution_clock::now();
    std::cout << "Direct: " << duration_cast<microseconds>(end - start).count() << " us\n";

    start = high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        volatile int r = erased(i);
    }
    end = high_resolution_clock::now();
    std::cout << "std::function: " << duration_cast<microseconds>(end - start).count() << " us\n";
    // Expect: std::function is 2-10x slower due to indirect dispatch
}
```

## See Also

- [Overload Resolution](1_overload_resolution.md)
- [Type Erasure](4_type_erasure.md)
