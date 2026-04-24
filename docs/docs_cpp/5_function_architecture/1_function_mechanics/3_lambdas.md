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

### Lambda Components

The full lambda syntax is:

```
[capture](template_params)(params) mutable noexcept(…) -> ret { body }
```

Every component after `capture` is optional:

```cpp
#include <iostream>

int main() {
    // Minimal lambda
    auto f1 = []{};

    // With return type deduction
    auto f2 = [] { return 42; };

    // Explicit return type
    auto f3 = []() -> double { return 3.14; };

    // Mutable
    int n = 0;
    auto f4 = [n]() mutable { return ++n; };

    // Noexcept
    auto f5 = []() noexcept { };

    // C++20 template parameters
    auto f6 = []<typename T>(T x) { return x * x; };

    // C++20 requires clause
    auto f7 = [](auto x) requires std::integral<decltype(x)> { return x; };

    std::cout << f2() << '\n';
    std::cout << f4() << '\n' << f4() << '\n';
    return 0;
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

### Init-Captures in Detail

Init-captures (C++14) are the most flexible capture mechanism. They allow you to:

- Move objects into the closure (avoiding copies).
- Capture the result of an arbitrary expression.
- Rename captures for clarity.

```cpp
#include <iostream>
#include <string>
#include <memory>
#include <vector>

int main() {
    // Move capture: transfers ownership of the unique_ptr into the closure
    auto ptr = std::make_unique<int>(42);
    auto use_ptr = [p = std::move(ptr)]() {
        return *p;
    };
    std::cout << use_ptr() << '\n';  // 42
    // ptr is now nullptr — ownership moved into the closure

    // Expression capture: compute a derived value at capture time
    std::vector<int> data = {1, 2, 3, 4, 5};
    auto snapshot_sum = [sum = 0, d = data]() mutable {
        for (int x : d) sum += x;
        return sum;
    };
    std::cout << snapshot_sum() << '\n';  // 15

    // Renaming capture: shorter names inside the lambda
    int very_long_variable_name = 100;
    auto f = [short_name = very_long_variable_name] {
        return short_name * 2;
    };
    std::cout << f() << '\n';  // 200
    return 0;
}
```

### Structured Binding Capture (C++20)

C++20 allows capturing structured bindings in init-captures:

```cpp
#include <iostream>
#include <map>

int main() {
    std::map<std::string, int> m = {{"a", 1}, {"b", 2}, {"c", 3}};

    for (const auto& [key, value] : m) {
        auto f = [k = key, v = value] {
            std::cout << k << " = " << v << '\n';
        };
        f();
    }
    return 0;
}
```

Note that `[key, value]` alone in the capture list does NOT work for structured bindings — you must
use init-capture syntax `[k = key, v = value]`.

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

### Why `mutable` Exists

The default `const` qualifier on `operator()` is a safety feature. It ensures that value captures
are immutable by default, preventing accidental modification. The `mutable` keyword is an explicit
opt-in that signals "I intend to modify the captured state." This mirrors the philosophy of `const`
correctness throughout C++.

### Stateful Lambdas as Function Objects

A `mutable` lambda with captured state is a full function object. It can maintain state across
invocations, making it useful for algorithms that need accumulation or filtering:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> data = {5, 3, 8, 1, 4, 7, 2, 6, 9};

    auto running_sum = [total = 0](int x) mutable mutable {
        total += x;
        return total;
    };

    std::vector<int> prefix_sums;
    std::transform(data.begin(), data.end(), std::back_inserter(prefix_sums),
                   running_sum);

    std::cout << "Prefix sums: ";
    for (int s : prefix_sums) std::cout << s << " ";
    std::cout << '\n';
    // Output: Prefix sums: 5 8 16 17 21 28 30 36 45
    return 0;
}
```

Note: `std::transform` copies the lambda by value. Each copy has its own `total`. If you need a
shared state across all copies, capture a `std::shared_ptr` or use a reference.

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

### Generic Lambda with `auto&&` (Forwarding Reference)

Using `auto&&` in a lambda parameter creates a forwarding reference, allowing the lambda to accept
both lvalues and rvalues without unnecessary copies:

```cpp
#include <iostream>
#include <utility>
#include <string>

int main() {
    auto forwarder = [](auto&& arg) {
        return std::forward<decltype(arg)>(arg);
    };

    std::string s = "hello";
    std::cout << forwarder(s) << '\n';           // lvalue: hello
    std::cout << forwarder(std::string("world")) << '\n';  // rvalue: world
    return 0;
}
```

### Variadic Generic Lambdas

```cpp
#include <iostream>
#include <string>

int main() {
    auto print_all = [](const auto&... args) {
        (std::cout << ... << args) << '\n';
    };

    print_all(1, " ", 2.5, " ", "hello");
    // Output: 1 2.5 hello
    return 0;
}
```

:::info Relevance Generic lambdas are the backbone of STL algorithms. `std::sort`, `std::transform`,
`std::find_if` all accept callable objects, and generic lambdas provide the most ergonomic way to
pass custom comparators and predicates.
:::

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

### Capturing `this` in Member Functions

When a lambda is created inside a member function and captures `this`, it holds a raw pointer to the
object. If the object is destroyed before the lambda executes, the pointer dangles:

```cpp
#include <iostream>
#include <functional>
#include <memory>

class Widget {
    int value_ = 42;
public:
    std::function<int()> get_value_fn() {
        // CAPTURES RAW this POINTER
        return [this] { return value_; };
    }
};

// SAFER: capture by value if possible
class SaferWidget {
    int value_ = 42;
public:
    std::function<int()> get_value_fn() {
        return [self = *this] { return self.value_; };
    }
};

// SAFEST: use weak_ptr for shared ownership
class SafestWidget : public std::enable_shared_from_this<SafestWidget> {
    int value_ = 42;
public:
    std::function<int()> get_value_fn() {
        auto weak = weak_from_this();
        return [weak] {
            if (auto ptr = weak.lock()) {
                return ptr->value_;
            }
            return -1;  // Object was destroyed
        };
    }
};

int main() {
    auto widget = std::make_shared<SafestWidget>();
    auto fn = widget->get_value_fn();
    std::cout << fn() << '\n';  // 42
    widget.reset();
    std::cout << fn() << '\n';  // -1 (object destroyed)
    return 0;
}
```

### `[*this]` Capture (C++17)

C++17 introduced `[*this]` which captures the current object by value (calls the copy constructor),
avoiding the dangling `this` pointer problem:

```cpp
#include <iostream>
#include <thread>

class Counter {
    int count_ = 0;
public:
    void start_counting() {
        std::jthread t([*this] {
            // Safe: this->count_ is captured by value
            // Modifying count_ here modifies the COPY, not the original
            // Use & for actual mutation of the original object
        });
    }
};
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

### `std::function` SBO Threshold

The Small Buffer Optimization (SBO) threshold for `std::function` is implementation-defined but
typically 1-3 machine words (8-24 bytes on 64-bit). Closures smaller than this are stored inline;
larger ones are heap-allocated:

```cpp
#include <functional>
#include <iostream>
#include <cstdint>

int main() {
    // Small closure (8 bytes: one int) — fits in SBO, no heap allocation
    auto small = [x = 42]() { return x; };
    std::function<int()> f_small = small;

    // Large closure (64 bytes: 8 ints) — heap allocated on most implementations
    auto large = [a = 1, b = 2, c = 3, d = 4, e = 5, f = 6, g = 7, h = 8]() {
        return a + b + c + d + e + f + g + h;
    };
    std::function<int()> f_large = large;

    std::cout << "sizeof(small closure): " << sizeof(small) << " bytes\n";
    std::cout << "sizeof(large closure): " << sizeof(large) << " bytes\n";
    std::cout << "sizeof(std::function): " << sizeof(std::function<int()>) << " bytes\n";
    return 0;
}
```

### `std::function_ref`: Zero-Cost Type Erasure

For non-owning references to callables, `std::function_ref` (C++26, or third-party implementations)
provides type erasure without heap allocation:

```cpp
#include <iostream>

// Simplified function_ref implementation
template <typename Sig>
class function_ref;

template <typename R, typename... Args>
class function_ref<R(Args...)> {
    void* obj_ = nullptr;
    R (*invoke_)(void*, Args...) = nullptr;

    template <typename F>
    static R invoke_impl(void* obj, Args... args) {
        return (*static_cast<F*>(obj))(std::forward<Args>(args)...);
    }

public:
    template <typename F>
    function_ref(F& f) noexcept
        : obj_(&f), invoke_(invoke_impl<F>) {}

    R operator()(Args... args) const {
        return invoke_(obj_, std::forward<Args>(args)...);
    }
};

int main() {
    auto lambda = [](int x) { return x * x; };
    function_ref<int(int)> ref = lambda;
    std::cout << ref(5) << '\n';  // 25
    // No heap allocation, no virtual dispatch (inlined in practice)
    return 0;
}
```

## 3.7 Lambda in Unevaluated Contexts

Lambdas can appear in unevaluated contexts (`decltype`, `sizeof`, `noexcept`, `requires`), but with
limitations:

```cpp
#include <iostream>
#include <type_traits>

int main() {
    auto f = [](int x) { return x * 2; };

    // Lambda type is unnameable but can be queried
    using ClosureType = decltype(f);
    std::cout << std::is_trivially_copyable_v<ClosureType> << '\n';
    std::cout << sizeof(f) << '\n';  // Size of captured members

    // Default-constructible only if no captures
    auto empty = []{};
    auto another = decltype(empty){};  // OK: no captures

    // auto copy = decltype(f){};  // ERROR: f has captures, not default-constructible
    return 0;
}
```

## Common Pitfalls

### Pitfall 1: Capturing by Reference in Async Code

The most common source of dangling reference bugs is capturing local variables by reference in
lambdas passed to asynchronous operations (threads, callbacks, futures):

```cpp
#include <iostream>
#include <thread>
#include <string>

void async_bug() {
    std::string message = "hello";
    std::jthread t([&message] {
        // BUG: message may be destroyed before thread executes
        std::cout << message << '\n';
    });
    t.detach();
}  // message destroyed here, but thread may still be running
```

### Pitfall 2: Lambda Copy Semantics in STL Algorithms

STL algorithms copy their callable arguments. If the lambda has mutable state, each copy has
independent state:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    int count = 0;
    auto counter = [&count]() mutable { return ++count; };

    std::vector<int> v(5);
    // std::for_each may copy the lambda multiple times internally
    std::for_each(v.begin(), v.end(), counter);
    // count may not be 5 — depends on implementation's copy count

    // Fix: use std::ref to pass by reference
    count = 0;
    std::for_each(v.begin(), v.end(), std::ref(counter));
    std::cout << count << '\n';  // Guaranteed 5
    return 0;
}
```

### Pitfall 3: Overcapturing with `[=]` and `[&]`

Default captures (`[=]`, `[&]`) capture everything that is used, which can inadvertently capture
pointers, references to local variables, or `this`:

```cpp
#include <iostream>

struct Handler {
    void setup() {
        int local = 42;
        // BAD: [=] captures `this` implicitly
        auto callback = [=]() {
            // Uses this->member_ and local
            // If callback outlives Handler, this is dangling
        };
    }
    int member_ = 0;
};
```

:::
