---
title: Reference Collapsing and Forwarding References
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: reference-collapsing-and-forwarding-references
---

# Reference Collapsing and Forwarding References

Reference collapsing is the template mechanism that enables a single function template to accept
both lvalues and rvalues while preserving their original value category. Combined with
`std::forward`, this enables **perfect forwarding** — the foundation behind `std::make_unique`,
`std::make_shared`, `emplace_back`, and virtually every factory function in the standard library.

## 3.1 The Rules

Reference collapsing occurs when a reference to a reference is formed during **template argument
deduction** or **typedef/alias template substitution** [N4950 §13.3.2.3]. The language defines four
rules:

| Form     | Collapses To |
| :------- | :----------: |
| `T& &`   |     `T&`     |
| `T& &&`  |     `T&`     |
| `T&& &`  |     `T&`     |
| `T&& &&` |    `T&&`     |

The rule is simple: **if any component is an lvalue reference (`&`), the result is an lvalue
reference.** Only when both components are rvalue references (`&&`) does the result remain an rvalue
reference.

## 3.2 Where Collapsing Occurs

Reference collapsing does **not** occur in direct type declarations — you cannot declare `int& & x;`
in C++. It occurs only in:

1. **Template instantiation** where a template parameter is deduced to be a reference type.
2. **typedef / alias template** substitution where the substituted type is a reference.
3. **`decltype`** of an expression that is a reference.

## 3.3 Code Example

```cpp
#include <type_traits>
#include <utility>

template<typename T>
using LRef = T&;

template<typename T>
using RRef = T&&;

void collapsing_demo() {
    // Alias template substitution
    using A = LRef<int&>;   // int& & -> int&
    using B = LRef<int&&>;  // int&& & -> int&
    using C = RRef<int&>;   // int& && -> int&
    using D = RRef<int&&>;  // int&& && -> int&&

    static_assert(std::is_same_v<A, int&>);
    static_assert(std::is_same_v<B, int&>);
    static_assert(std::is_same_v<C, int&>);
    static_assert(std::is_same_v<D, int&&>);

    // Template argument deduction
    int x = 42;
    int& ref = x;

    // When T is deduced as int& (from passing an lvalue):
    // T&& becomes int& &&, which collapses to int&
    static_assert(std::is_same_v<decltype(std::forward<int&>(ref)), int&>);

    // When T is deduced as int (from passing an rvalue):
    // T&& becomes int&&, no collapsing needed
    static_assert(std::is_same_v<decltype(std::forward<int>(42)), int&&>);
}
```

:::info Relevance Reference collapsing is the mechanism that enables **forwarding references**
(Section 4). Without collapsing, a `T&&` parameter could not bind to lvalues — the deduction would
always produce `T&&`, which cannot accept lvalues. Collapsing allows `T&&` to become `T&` when an
lvalue is passed, making perfect forwarding possible. :::

## 4.1 Distinguishing Forwarding References from Rvalue References

The syntax `T&&` has two distinct meanings depending on context:

1. **Rvalue reference:** `void f(int&& x)` — `T` is a concrete type, not deduced. This function
   accepts **only rvalues**.
2. **Forwarding reference (universal reference):** `template<typename T> void f(T&& x)` — `T` is a
   deduced template parameter. This function accepts **both lvalues and rvalues**.

The critical distinction is whether `T` is being **deduced** [N4950 §13.3.2.3]. If `T` appears in a
`template<typename T>` parameter list and is used as `T&&`, it is a forwarding reference. Otherwise,
it is a plain rvalue reference.

```cpp
#include <type_traits>
#include <utility>

// Forwarding reference: T is deduced
template<typename T>
void forwarding_ref(T&& x) {
    // T can be int& (if lvalue passed) or int (if rvalue passed)
}

// Plain rvalue reference: T is NOT deduced (it is explicitly int)
void rvalue_ref(int&& x) {
    // Accepts only rvalues
}

int main() {
    int x = 42;
    const int cx = 10;

    forwarding_ref(x);       // OK: T deduced as int&, T&& collapses to int&
    forwarding_ref(cx);      // OK: T deduced as const int&, collapses to const int&
    forwarding_ref(42);      // OK: T deduced as int, T&& is int&&
    forwarding_ref(std::move(x));  // OK: T deduced as int, T&& is int&&

    // rvalue_ref(x);        // ERROR: x is an lvalue, cannot bind to int&&
    rvalue_ref(42);          // OK: 42 is a prvalue
    rvalue_ref(std::move(x)); // OK: std::move(x) is an xvalue
}
```

## 4.2 Additional Cases That Are NOT Forwarding References

```cpp
#include <utility>

// NOT a forwarding reference: auto&& in a non-deduced context
struct S {
    template<typename T>
    void f(T&&);   // Forwarding reference
};

// NOT a forwarding reference: T is constrained (not pure deduction)
template<typename T>
    requires std::is_integral_v<T>
void constrained(T&& x);  // Plain rvalue reference

// NOT a forwarding reference: T is explicitly specified
template<typename T>
void not_forwarding() {
    // Inside a function body, T&& is always a plain rvalue reference
    // because T is already known from the outer template parameter.
}
```

:::warning If you add a constraint like `requires` that depends on `T`, the parameter `T&&` is
**not** a forwarding reference — it becomes a plain rvalue reference. The forwarding reference
deduction requires that `T` be a freshly deduced, unconstrained type parameter. :::

## 4.3 `std::forward<T>(x)` — Perfect Forwarding

`std::forward<T>(x)` casts `x` to `T&&`. Combined with reference collapsing, this preserves the
original value category of the argument:

- If the caller passed an **lvalue**, `T` was deduced as `U&`, so `T&&` collapses to `U&` —
  `std::forward` returns an lvalue reference.
- If the caller passed an **rvalue**, `T` was deduced as `U`, so `T&&` is `U&&` — `std::forward`
  returns an rvalue reference.

```cpp
#include <utility>
#include <iostream>
#include <string>

void process(const std::string& lvalue_arg) {
    std::cout << "lvalue: " << lvalue_arg << "\n";
}

void process(std::string&& rvalue_arg) {
    std::cout << "rvalue (moved): " << rvalue_arg << "\n";
}

template<typename T>
void forwarder(T&& arg) {
    process(std::forward<T>(arg));
}

int main() {
    std::string s = "hello";

    forwarder(s);             // lvalue: calls process(const string&)
    forwarder(std::string("world"));  // rvalue: calls process(string&&)
    forwarder(std::move(s));  // rvalue: calls process(string&&)
}
```

## 4.4 Perfect Forwarding Factory Function

```cpp
#include <utility>
#include <memory>
#include <string>
#include <iostream>

struct Widget {
    std::string name;
    int id;

    Widget(std::string n, int i) : name(std::move(n)), id(i) {
        std::cout << "Widget(" << name << ", " << id << ") constructed\n";
    }
};

template<typename T, typename... Args>
std::unique_ptr<T> make_unique_custom(Args&&... args) {
    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));
}

int main() {
    std::string label = "sensor-7";

    // label is an lvalue — forwarded as an lvalue reference to Widget's constructor,
    // which copies it into name.
    auto p1 = make_unique_custom<Widget>(label, 1);

    // std::string("actuator") is a prvalue — forwarded as an rvalue reference,
    // so Widget's constructor moves it into name.
    auto p2 = make_unique_custom<Widget>(std::string("actuator"), 2);

    // 42 is a prvalue — forwarded as int&& (no difference from int for scalars).
    auto p3 = make_unique_custom<Widget>("valve", 3);
}
```

## 4.5 Forwarding Wrapper That Preserves Value Category

```cpp
#include <utility>
#include <iostream>
#include <string>

struct Logger {
    void log(const std::string& msg) & {
        std::cout << "[instance] " << msg << "\n";
    }
};

template<typename T, typename F>
void with_logging(T&& target, F&& func) {
    std::cout << "=== entering scope ===\n";
    std::forward<F>(func)(std::forward<T>(target));
    std::cout << "=== exiting scope ===\n";
}

int main() {
    Logger logger;

    auto callback = [](Logger& l) {
        l.log("callback executed");
    };

    // lvalue Logger, lvalue lambda — both forwarded as lvalue references
    with_logging(logger, callback);

    // rvalue Logger (moved), rvalue lambda — both forwarded as rvalue references
    with_logging(Logger{}, [](Logger& l) {
        l.log("temporary callback executed");
    });
}
```

:::info Relevance Perfect forwarding is the mechanism behind `std::make_unique`, `std::make_shared`,
`std::vector::emplace_back`, and virtually every factory or emplacement function in the standard
library. Without forwarding references and `std::forward`, these functions would be forced to copy
their arguments or require separate overloads for every combination of lvalue/rvalue parameters — a
combinatorial explosion. :::

## See Also

- [Value Taxonomy](1_value_taxonomy.md)
- [Temporary Materialization](3_temporary_materialization.md)
- [Move Constructors, Assignment, Swap Idiom](4_move_constructors_rvo.md)
