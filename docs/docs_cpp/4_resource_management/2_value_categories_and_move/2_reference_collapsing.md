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

## 5.1 Reference Collapsing Under the Hood

Reference collapsing is not a runtime mechanism — it is purely a compile-time type substitution rule
enforced by the C++ core language. When the compiler instantiates a template and deduces `T` to be a
reference type, any `T&&` or `T&` formed from that `T` undergoes collapsing according to the table
above. This happens during **type alias substitution** [N4950 §13.3.2.3].

Consider what the compiler does when you write:

```cpp
template<typename T>
void f(T&& x);

int y = 10;
f(y);  // T deduced as int&
```

The deduction process for forwarding references [N4950 §13.3.2.3]:

1. The argument `y` is an lvalue of type `int`.
2. Under forwarding reference rules, when the argument is an lvalue, `T` is deduced as `int&` (not
   `int`).
3. The parameter type `T&&` becomes `int& &&`.
4. Reference collapsing applies: `int& &&` → `int&`.
5. The parameter `x` has type `int&` — an lvalue reference.

If the argument were an rvalue:

1. The argument `42` is a prvalue of type `int`.
2. Under forwarding reference rules, when the argument is an rvalue, `T` is deduced as `int`.
3. The parameter type `T&&` becomes `int&&`.
4. No collapsing needed — it is already a single reference.
5. The parameter `x` has type `int&&` — an rvalue reference.

## 5.2 The `auto&&` Case

`auto&&` in variable declarations follows the same reference collapsing rules as template argument
deduction. This is because `auto` is conceptually a template parameter:

```cpp
#include <type_traits>
#include <utility>

void auto_forwarding_ref() {
    int x = 42;
    const int cx = 10;

    auto&& a = x;          // int& (lvalue → T = int&, T&& collapses to int&)
    auto&& b = cx;         // const int& (lvalue → T = const int&, collapses to const int&)
    auto&& c = 42;         // int&& (rvalue → T = int, T&& is int&&)
    auto&& d = std::move(x); // int&& (xvalue → T = int, T&& is int&&)

    static_assert(std::is_same_v<decltype(a), int&>);
    static_assert(std::is_same_v<decltype(b), const int&>);
    static_assert(std::is_same_v<decltype(c), int&&>);
    static_assert(std::is_same_v<decltype(d), int&&>);
}
```

This is the mechanism behind **range-based for loops**. The standard specifies that the loop
variable in `for (auto&& elem : container)` uses a forwarding reference, which means it can bind to
both lvalue and rvalue elements without copying:

```cpp
#include <utility>
#include <vector>

struct Heavy {
    std::vector<int> data;
    explicit Heavy(std::size_t n) : data(n) {}
};

void range_for_forwarding() {
    std::vector<Heavy> vec;
    vec.emplace_back(1000);
    vec.emplace_back(2000);

    // auto&& binds to lvalue elements in the vector — no copy, no move
    for (auto&& elem : vec) {
        elem.data.push_back(42);  // modifies the element in place
    }

    // Compare with auto&, which also works here but cannot bind to rvalue ranges
    for (auto& elem : vec) {
        elem.data.push_back(43);
    }

    // auto (by value) would COPY each element — very expensive
    for (auto elem : vec) {
        elem.data.push_back(44);  // modifies a local copy — original unchanged
    }
}
```

:::tip In `for (auto&& x : expr)`, the `auto&&` is a forwarding reference. This is the idiomatic way
to write generic range-based for loops that work with both lvalue and rvalue ranges, and with proxy
iterators that return prvalues (like `std::vector<bool>`). :::

## 5.3 `std::forward` Implementation Detail

`std::forward<T>(x)` is typically implemented as a `static_cast`:

```cpp
// Simplified implementation of std::forward
template<typename T>
constexpr T&& forward(std::remove_reference_t<T>& x) noexcept {
    return static_cast<T&&>(x);
}

// Overload for rvalue (rarely called, but required for completeness)
template<typename T>
constexpr T&& forward(std::remove_reference_t<T>&& x) noexcept {
    static_assert(!std::is_lvalue_reference_v<T>,
                  "Cannot forward an rvalue as an lvalue");
    return static_cast<T&&>(x);
}
```

Let us trace through the two cases:

**Case 1: Lvalue passed** (`T = int&`):

- `std::remove_reference_t<int&>` is `int`.
- The first overload matches: `forward<int&>(int& x)`.
- `static_cast<int& &&>(x)` → reference collapsing → `static_cast<int&>(x)`.
- Returns `int&` — lvalue reference. Correct.

**Case 2: Rvalue passed** (`T = int`):

- `std::remove_reference_t<int>` is `int`.
- The second overload matches (rvalue argument): `forward<int>(int&& x)`.
- `static_cast<int&&>(x)`.
- Returns `int&&` — rvalue reference. Correct.

The key insight is that `std::forward` does **not** move anything. It is purely a **conditional
cast** that produces an lvalue reference or rvalue reference based on the deduced type `T`. The
actual move semantics come from the overload resolution of the receiving function (e.g., a move
constructor or move assignment operator that accepts `T&&`).

## 5.4 Forwarding References with `const` and CV-Qualifiers

When an lvalue with cv-qualifiers is passed to a forwarding reference, the qualifiers are preserved
in the deduced type:

```cpp
#include <type_traits>
#include <utility>

template<typename T>
constexpr auto deduce_category() {
    if constexpr (std::is_lvalue_reference_v<T>) {
        return "lvalue ref";
    } else {
        return "rvalue ref";
    }
}

void cv_qualified_forwarding() {
    int x = 10;
    const int cx = 20;
    volatile int vx = 30;
    const volatile int cvx = 40;

    // T is deduced as int&          → parameter type is int&
    // T is deduced as const int&    → parameter type is const int&
    // T is deduced as volatile int& → parameter type is volatile int&
    // T is deduced as const volatile int& → parameter type is const volatile int&

    // For rvalues:
    // T is deduced as int          → parameter type is int&&
    // T is deduced as const int    → parameter type is const int&& (rvalue ref to const)
}
```

This is critical for forwarding to APIs that have separate const and non-const overloads. If you
forward a `const` lvalue, the receiving function must see it as `const` to avoid accidentally
modifying it:

```cpp
#include <string>
#include <utility>
#include <iostream>

struct Processor {
    void handle(std::string& s) {
        std::cout << "non-const: " << s << "\n";
    }

    void handle(const std::string& s) {
        std::cout << "const: " << s << "\n";
    }

    void handle(std::string&& s) {
        std::cout << "rvalue: " << s << "\n";
    }
};

template<typename T>
void forward_to_processor(T&& arg) {
    Processor p;
    p.handle(std::forward<T>(arg));
}

void cv_forwarding_demo() {
    std::string mutable_str = "hello";
    const std::string const_str = "world";

    forward_to_processor(mutable_str);       // non-const (T = std::string&)
    forward_to_processor(const_str);         // const (T = const std::string&)
    forward_to_processor(std::string("temp")); // rvalue (T = std::string)
}
```

## 5.5 Forwarding References in Variadic Templates

The pack expansion `Args&&... args` is the most common use of forwarding references. Each argument
in the pack undergoes independent reference collapsing:

```cpp
#include <utility>
#include <iostream>
#include <string>
#include <tuple>

// Forward all arguments to another function
template<typename... Args>
void log_and_call(Args&&... args) {
    std::cout << "Called with " << sizeof...(Args) << " arguments\n";
    target(std::forward<Args>(args)...);
}

// Capture arguments into a tuple
template<typename... Args>
auto capture(Args&&... args) {
    // Each arg is decayed if rvalue, or stored by reference if lvalue
    // std::tuple decays: T&& for rvalues becomes T, T& for lvalues becomes T&
    return std::make_tuple(std::forward<Args>(args)...);
}

void variadic_demo() {
    std::string s = "hello";

    // T1 = std::string&, T2 = const int&, T3 = double
    auto t = capture(s, 42, 3.14);

    // std::get<0>(t) is std::string& (reference to s)
    // std::get<1>(t) is const int& (reference to temporary — DANGEROUS)
    // std::get<2>(t) is double (copy of 3.14)
}
```

:::warning The `capture` function above is **unsafe** — it stores references to temporaries (the
literal `42` produces a `const int&` in the tuple, which dangles if the tuple outlives the full
expression). `std::make_tuple` decays its arguments, so rvalues are copied/moved, but lvalues are
stored as references. For safe capture, use `std::make_tuple(std::decay_t&lt;Args>(args)...)` to
always store by value, or `std::forward_as_tuple(args...)` which explicitly stores references with
the same lifetime concerns documented. :::

## 5.6 Forwarding in Class Templates

Forwarding references work in class template constructors, but with a subtlety: the forwarding
reference constructor can compete with copy/move constructors:

```cpp
#include <string>
#include <utility>

struct Widget {
    std::string name;

    Widget(std::string n) : name(std::move(n)) {}

    // Forwarding reference constructor — matches EVERYTHING
    template<typename T>
    Widget(T&& arg) : name(std::forward<T>(arg)) {}

    // Copy constructor — BUT the template above is a better match for
    // non-const lvalues because T is deduced more specifically!
    Widget(const Widget&) = default;

    // Move constructor — similarly shadowed by the template
    Widget(Widget&&) = default;
};

void forwarding_constructor_pitfall() {
    Widget w1("hello");

    // Widget w2(w1);  // AMBIGUOUS or calls the template constructor!
    // The template deduces T = Widget& (not const Widget&), which is a
    // more specific match than const Widget& for a non-const lvalue.

    // Solutions:
    // 1. Use SFINAE to disable the template for Widget types
    // 2. Use std::enable_if or C++20 concepts
}
```

The standard library's own containers use **SFINAE constraints** to prevent forwarding reference
constructors from shadowing copy/move constructors. The typical pattern in C++20 is:

```cpp
#include <concepts>
#include <string>
#include <utility>

struct SafeWidget {
    std::string name;

    // Constrain: T must NOT be the same type (or a derived type) as SafeWidget
    template<typename T>
    requires (!std::same_as<std::decay_t<T>, SafeWidget>)
    SafeWidget(T&& arg) : name(std::forward<T>(arg)) {}

    SafeWidget(const SafeWidget&) = default;
    SafeWidget(SafeWidget&&) = default;
};
```

## 5.7 `std::forward` vs `std::move` — When to Use Which

| Situation                         | Use                  | Reason                                     |
| :-------------------------------- | :------------------- | :----------------------------------------- |
| Forwarding a function parameter   | `std::forward<T>`    | Preserves original value category          |
| Unconditionally casting to rvalue | `std::move(x)`       | Intentionally discarding the source object |
| Moving a local variable           | `std::move(x)`       | Local is about to be destroyed anyway      |
| In a factory/emplacement function | `std::forward<Args>` | Each arg may be lvalue or rvalue           |

`std::move` is equivalent to `std::forward<T>` where `T` is deduced as a non-reference type. It is
syntactic sugar for `static_cast<T&&>(x)`. Use `std::forward` only when you have a forwarding
reference whose deduced type you want to preserve. Use `std::move` everywhere else.

```cpp
#include <string>
#include <utility>
#include <vector>

void move_vs_forward() {
    std::string local = "hello";

    // Moving a local variable: use std::move
    std::vector<std::string> vec;
    vec.push_back(std::move(local));  // local is left in a valid-but-unspecified state
    // After this, 'local' should not be read (except to assign to or destroy)

    // Forwarding: use std::forward
    auto make_vec = [](auto&&... args) {
        std::vector<std::string> v;
        (v.emplace_back(std::forward<decltype(args)>(args)), ...);
        return v;
    };

    std::string s = "world";
    auto v2 = make_vec(s, std::string("temp"), "literal");
    // s is forwarded as lvalue ref → copied into vector
    // std::string("temp") is forwarded as rvalue ref → moved into vector
    // "literal" is forwarded as const char(&)[8] → constructs std::string in place
}
```

## Common Pitfalls

1. **Calling `std::forward` outside of a forwarding reference context:** `std::move(x)` is
   equivalent to `std::forward<remove_reference_t<decltype(x)>>(x)`. But `std::forward<T>(x)`
   requires `T` to be the **deduced** template parameter from a forwarding reference. If you call
   `std::forward<int>(x)` where `x` is an lvalue, you get an rvalue reference — this is effectively
   `std::move`, not forwarding. The distinction matters only for correctness of intent.

2. **Using `std::forward` more than once on the same object:** `std::forward` does not move the
   object — it casts it. But the _recipient_ of the cast may move from it. If you forward the same
   object to two different functions, the first recipient may move from it, leaving the second
   recipient with a moved-from object:

   ```cpp
   template<typename T>
   void double_forward_bad(T&& x) {
       f(std::forward<T>(x));  // f might move from x
       g(std::forward<T>(x));  // x may be in a moved-from state!
   }
   ```

3. **Adding constraints that break forwarding reference deduction:** A `requires` clause that
   references `T` can cause the parameter to be treated as a plain rvalue reference rather than a
   forwarding reference. Use the `!std::same_as<std::decay_t<T>, ...>` pattern or C++20 concepts
   carefully.

4. **Returning `std::forward<T>(x)` from a function:** This is almost always wrong. If `T` is a
   reference type, you return a reference to a parameter — which may dangle if the caller passed a
   temporary. If `T` is a non-reference type, you return an rvalue reference to a local — which
   always dangles. Return by value instead and let NRVO or move semantics handle it.

:::

:::

:::

:::

:::
