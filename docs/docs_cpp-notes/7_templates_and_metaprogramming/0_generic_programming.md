---
title: Generic Programming
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: generic-programming
---

## 1. Template Instantiation, Monomorphization, and Code Bloat

### 1.1 Function Templates and Class Templates

A **function template** is a blueprint the compiler uses to generate type-specific functions on demand [N4950 §13.7]. A **class template** similarly generates type-specific classes [N4950 §13.7.3]. The process of generating concrete code from a template is called **instantiation**.

```cpp
#include <iostream>
#include <vector>
#include <string>

// Function template [N4950 §13.7]
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

// Class template [N4950 §13.7.3]
template <typename T, typename Allocator = std::allocator<T>>
class Stack {
public:
    void push(const T& value) { data_.push_back(value); }
    void pop() { data_.pop_back(); }
    const T& top() const { return data_.back(); }
    bool empty() const { return data_.empty(); }
private:
    std::vector<T, Allocator> data_;
};

int main() {
    int x = max_of(3, 7);            // instantiates max_of<int>
    double y = max_of(1.5, 2.3);     // instantiates max_of<double>
    std::string s = max_of(std::string{"hello"}, std::string{"world"});

    Stack<int> si;
    si.push(42);
    std::cout << si.top() << "\n";   // prints 42

    Stack<std::string> ss;
    ss.push("generic");
    std::cout << ss.top() << "\n";   // prints "generic"
}
```

The compiler performs **monomorphization**: for each unique set of template arguments used, it generates a separate copy of the template code. If you call `max_of<int>`, `max_of<double>`, and `max_of<std::string>`, the compiler produces three distinct functions. This is a form of compile-time polymorphism --- there is no virtual dispatch, no vtable, and (when inlined) no call overhead at all.

### 1.2 Two-Phase Name Lookup

The C++ standard specifies **two-phase name lookup** for templates [N4950 §13.8.3]:

1. **Phase 1 (definition time):** Non-dependent names are looked up when the template is _defined_. A name is **non-dependent** if its meaning does not depend on a template parameter.
2. **Phase 2 (instantiation time):** Dependent names (those that _do_ depend on a template parameter) are looked up when the template is _instantiated_, using both the declaration context and the instantiation context.

```cpp
#include <iostream>

void g(int) { std::cout << "global g(int)\n"; }

template <typename T>
void f(T x) {
    // Phase 1: 'g' is non-dependent → looked up NOW
    // This calls global g(int) even if a better match exists at instantiation site.
    g(42);
    // Phase 2: 'x' is dependent → argument-dependent lookup (ADL) at instantiation
    h(x);  // 'h' is dependent: looked up when f<T> is instantiated
}

void g(double) { std::cout << "global g(double)\n"; }

struct S {};
void h(S) { std::cout << "h(S)\n"; }

int main() {
    f(42);       // prints "global g(int)" — phase-1 binding
    f(3.14);     // STILL prints "global g(int)" — overload resolution was locked at phase 1
    f(S{});      // prints "global g(int)" then "h(S)"
}
```

:::warning
A non-dependent call like `g(42)` inside a template is bound at definition time [N4950 §13.8.3]. If a better overload of `g` is declared _after_ the template definition, it will **not** be found. This is the single most surprising aspect of two-phase lookup and a frequent source of bugs.
:::

### 1.3 Code Bloat from Implicit Instantiation

Every distinct set of template arguments produces a new instantiation. Consider:

```cpp
#include <vector>
#include <list>
#include <deque>

template <typename T, typename Container = std::vector<T>>
class PriorityQueue {
    Container data_;
public:
    void insert(const T& v) { data_.push_back(v); }
    bool empty() const { return data_.empty(); }
};

void instantiate_many() {
    PriorityQueue<int, std::vector<int>>    a;
    PriorityQueue<int, std::list<int>>      b;
    PriorityQueue<int, std::deque<int>>     c;
    PriorityQueue<double, std::vector<double>> d;
}
```

This generates **four** distinct class types, each with its own `insert` and `empty` functions. For large templates used across many translation units, this can cause significant code bloat.

### 1.4 Explicit Instantiation and `extern template`

To control where instantiation happens, C++ provides **explicit instantiation** and **extern template** declarations [N4950 §13.9.3]:

- `template void foo<int>();` --- _forces_ instantiation in this translation unit.
- `extern template void foo<int>();` --- _suppresses_ implicit instantiation in this translation unit; the instantiation must exist elsewhere.

```cpp
// ---- utils.h ----
#ifndef UTILS_H
#define UTILS_H
#include <vector>
#include <string>

template <typename T>
std::vector<T> range(T start, T end) {
    std::vector<T> result;
    for (T i = start; i < end; ++i)
        result.push_back(i);
    return result;
}

// Explicit instantiation declarations [N4950 §13.9.3]
extern template std::vector<int>    range(int, int);
extern template std::vector<double> range(double, double);
extern template std::vector<std::string> range(std::string, std::string);

#endif // UTILS_H
```

```cpp
// ---- utils.cpp ----
#include "utils.h"

// Explicit instantiation definitions [N4950 §13.9.2]
// These definitions live in ONE translation unit.
template std::vector<int>    range(int, int);
template std::vector<double> range(double, double);
template std::vector<std::string> range(std::string, std::string);
```

```cpp
// ---- main.cpp ----
#include "utils.h"
#include <iostream>

int main() {
    auto v1 = range(0, 5);       // uses instantiation from utils.cpp
    auto v2 = range(0.0, 3.0);   // uses instantiation from utils.cpp
    for (auto x : v1) std::cout << x << " ";
    std::cout << "\n";
    for (auto x : v2) std::cout << x << " ";
    std::cout << "\n";
}
```

:::tip
Use `extern template` in header files for templates that are instantiated with common types (e.g., `int`, `double`, `std::string`). Provide explicit instantiation definitions in a single `.cpp` file. This reduces compilation time and binary size without sacrificing the flexibility of templates.
:::

---

## 2. Argument Deduction (Class and Function)

### 2.1 Function Template Argument Deduction

The compiler deduces template arguments from the types of function call arguments [N4950 §13.8.2.1]. The deduction rules follow pattern matching against the parameter types.

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

Deduction can fail in several ways: contradictory deductions from different arguments, no viable specialization, or ambiguous partial ordering.

### 2.2 Class Template Argument Deduction (CTAD)

Starting with C++17, the compiler can deduce class template arguments from constructor arguments [N4950 §16.3.1.1]. This eliminates the need to repeat type arguments that the compiler can figure out.

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

:::info
CTAD only works when there is exactly one viable deduction. If the constructor template and the class template both participate in deduction and produce conflicting results, deduction fails [N4950 §16.3.1.7].
:::

### 2.3 Deduction Guides

When the compiler's default deduction is insufficient or wrong, you can write **explicit deduction guides** [N4950 §16.3.1.7]. A deduction guide tells the compiler how to map constructor argument types to class template arguments.

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

The deduction guide `Pair(T, U) -> Pair<std::decay_t<T>, std::decay_t<U>>` uses `std::decay_t` to ensure that array and function types decay to pointer types (matching the behavior of pass-by-value constructors), just as `std::make_pair` does.

---

## 3. Explicit and Partial Specialization

### 3.1 Full Specialization

**Full (explicit) specialization** provides a completely separate definition for a specific set of template arguments [N4950 §13.7.5]. The general template is called the **primary template**.

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
Full specializations are **not** templates themselves --- they are concrete definitions. They must be declared in the same namespace as the primary template. If you fully specialize a function template, you must specialize every overload that participates in overload resolution.
:::

### 3.2 Partial Specialization

**Partial specialization** allows you to specialize for a _subset_ of possible template arguments. The primary template still exists for arguments that don't match any partial specialization. The compiler selects the most specialized version using **partial ordering rules** [N4950 §13.7.5.5].

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

### 3.3 Partial Ordering Rules

When multiple partial specializations match, the compiler uses **partial ordering** to select the most specialized one [N4950 §13.7.5.5]. Informally, specialization $A$ is more specialized than $B$ if every type accepted by $A$ is also accepted by $B$, but not vice versa.

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

---

## 4. Dependent Names and Two-Phase Lookup

### 4.1 Dependent vs Non-Dependent Names

A **dependent name** is a name whose meaning depends on one or more template parameters [N4950 §13.8.3]. A **non-dependent name** does not. The distinction determines when lookup occurs:

| Name kind       | Lookup time             | Scope                              |
| --------------- | ----------------------- | ---------------------------------- |
| Non-dependent   | Phase 1 (definition)    | Definition context only            |
| Dependent       | Phase 2 (instantiation) | Definition + instantiation context |
| Dependent + ADL | Phase 2 (instantiation) | Associated namespaces/classes      |

```cpp
#include <iostream>
#include <string>

struct Base {
    void foo() const { std::cout << "Base::foo\n"; }
    int bar = 42;
};

template <typename T>
struct Derived : T {
    void call_foo() const {
        // 'foo' is a dependent name (depends on base T)
        // But without 'this->', it will NOT be found in the base class
        // because at Phase 1 the compiler doesn't know what T::foo is.
        // foo();              // ERROR: 'foo' was not declared in this scope
        this->foo();           // OK: this-> makes lookup dependent
    }

    void use_bar() const {
        // 'bar' is a dependent member of T
        // int x = bar;        // ERROR: not declared in this scope
        int x = this->bar;     // OK
        std::cout << x << "\n";
    }
};

int main() {
    Derived<Base> d;
    d.call_foo();    // Base::foo
    d.use_bar();     // 42
}
```

:::warning
Inside a class template that inherits from a dependent base, **you must use `this->`** to access members of the base class. Without `this->`, the name is non-dependent and looked up at Phase 1, where the base class members are invisible. This is the single most common two-phase lookup bug [N4950 §13.8.3].
:::

### 4.2 The `template` Disambiguation Keyword

When a dependent name refers to a template member (function or nested type), the compiler needs to be told that the name is a template using the `template` keyword [N4950 §13.8.3]:

```cpp
#include <iostream>
#include <vector>

struct MyContainer {
    template <typename U>
    U cast_value(int v) const {
        return static_cast<U>(v);
    }

    template <typename U>
    struct Nested {
        U value;
    };
};

template <typename T>
void process(const T& container) {
    // Without 'template', the compiler parses 'container.cast_value<double>'
    // as: (container.cast_value) < double > >, which is a comparison.
    // The 'template' keyword tells the parser that what follows is a template.
    double d = container.template cast_value<double>(42);
    std::cout << d << "\n";

    // Same for nested template types:
    using N = typename T::template Nested<double>;
    N n{3.14};
    std::cout << n.value << "\n";
}

int main() {
    MyContainer c;
    process(c);  // prints 42.0, then 3.14
}
```

### 4.3 Complete Two-Phase Lookup Example

```cpp
#include <iostream>
#include <vector>

namespace lib {
    void helper(double) { std::cout << "lib::helper(double)\n"; }
}

struct X {};

void helper(int) { std::cout << "::helper(int)\n"; }

// ADL helper found via associated namespace of X
void helper(X) { std::cout << "::helper(X)\n"; }

template <typename T>
void test(T arg) {
    // Phase 1 (definition time):
    //   'helper(42)' — non-dependent call → binds ::helper(int) NOW
    helper(42);

    // Phase 2 (instantiation time):
    //   'helper(arg)' — dependent → looked up in definition + instantiation context
    //   Uses ADL because 'arg' has type X, whose associated namespace is ::
    helper(arg);
}

int main() {
    // Even though lib::helper(double) exists at this point,
    // the call helper(42) was already bound to ::helper(int) at definition time.
    test(X{});
    // Output:
    //   ::helper(int)      ← phase-1 binding (non-dependent)
    //   ::helper(X)        ← phase-2 binding (dependent + ADL)
}
```

---

## 5. Variadic Templates and Parameter Packs

### 5.1 Variadic Function Templates and Parameter Packs

A **variadic template** accepts a variable number of template arguments via a **parameter pack** [N4950 §13.7.3]. Parameter packs come in two forms: type parameter packs and non-type parameter packs.

```cpp
#include <iostream>
#include <type_traits>

// sizeof... returns the number of elements in a pack [N4950 §8.3.3]
template <typename... Ts>
constexpr std::size_t count_types() {
    return sizeof...(Ts);
}

int main() {
    static_assert(count_types<>() == 0);
    static_assert(count_types<int>() == 1);
    static_assert(count_types<int, double, char>() == 3);
    std::cout << count_types<int, double, char, long>() << "\n";  // 4
}
```

### 5.2 Pack Expansion Syntax

A **pack expansion** `pattern...` expands the pattern by substituting each element of the pack [N4950 §13.7.3]. The expansion can appear in various contexts:

- Function argument lists: `f(args...)`
- Template argument lists: `Tuple<Types...>`
- Initializer lists: `{args...}`
- Base class lists: `class Derived : Bases...`

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>

// Recursive variadic print
void print() {
    std::cout << "\n";
}

template <typename T, typename... Rest>
void print(T first, Rest... rest) {
    std::cout << first;
    if constexpr (sizeof...(rest) > 0) {
        std::cout << ", ";
    }
    print(rest...);
}

// Forwarding reference + variadic: perfect forwarding wrapper
template <typename... Args>
auto make_tuple_wrapper(Args&&... args) {
    return std::make_tuple(std::forward<Args>(args)...);
}

// Count occurrences of T in Ts...
template <typename T, typename... Ts>
struct count_occurrences;

template <typename T>
struct count_occurrences<T> : std::integral_constant<int, 0> {};

template <typename T, typename First, typename... Rest>
struct count_occurrences<T, First, Rest...>
    : std::integral_constant<int,
        (std::is_same_v<T, First> ? 1 : 0)
        + count_occurrences<T, Rest...>::value> {};

int main() {
    print(1, "hello", 3.14, 'x');
    // Output: 1, hello, 3.14, x

    auto t = make_tuple_wrapper(42, std::string{"world"}, 3.14);
    std::cout << std::get<0>(t) << "\n";   // 42
    std::cout << std::get<1>(t) << "\n";   // world

    static_assert(count_occurrences<int, int, double, int, char>::value == 2);
    static_assert(count_occurrences<double, int, double, int>::value == 1);
}
```

### 5.3 Variadic `make_unique` (Custom Implementation)

```cpp
#include <iostream>
#include <memory>
#include <utility>

template <typename T, typename... Args>
std::unique_ptr<T> my_make_unique(Args&&... args) {
    return std::unique_ptr<T>(new T(std::forward<Args>(args)...));
}

struct Widget {
    int x, y;
    Widget(int a, int b) : x(a), y(b) {
        std::cout << "Widget(" << x << ", " << y << ")\n";
    }
};

int main() {
    auto w = my_make_unique<Widget>(10, 20);
    std::cout << w->x << ", " << w->y << "\n";  // 10, 20
}
```

:::tip
`std::make_unique` (C++14) is implemented essentially as shown above. The variadic template + perfect forwarding pattern (`Args&&... args` with `std::forward<Args>(args)...`) is one of the most important idioms in modern C++ template programming.
:::

---

## 6. Fold Expressions and Pack Expansion

### 6.1 Fold Expressions

A **fold expression** reduces a parameter pack using a binary operator [N4950 §8.3.5], introduced in C++17. Fold expressions come in four forms:

$$
\text{unary right fold: } (pack \ op \ ...)
$$

$$
\text{unary left fold: } (\ldots \ op \ pack)
$$

$$
\text{binary right fold: } (pack \ op \ \ldots \ op \ init)
$$

$$
\text{binary left fold: } (init \ op \ \ldots \ op \ pack)
$$

```cpp
#include <iostream>
#include <concepts>
#include <type_traits>

// Sum all arguments: unary right fold
template <typename... Args>
auto sum(Args... args) {
    return (args + ...);
}

// Product with initial value: binary left fold
template <typename... Args>
auto product(Args... args) {
    return (1 * ... * args);  // binary left fold with init = 1
}

// All-true predicate using fold expression
template <typename... Args>
constexpr bool all_true(Args... args) {
    return (args && ...);
}

// Any-true predicate
template <typename... Args>
constexpr bool any_true(Args... args) {
    return (args || ...);
}

// Push all elements into a vector: fold over comma operator
template <typename T, typename... Args>
void push_all(std::vector<T>& vec, Args&&... args) {
    (vec.push_back(std::forward<Args>(args)), ...);
    // This is a unary right fold over the comma operator.
}

// Print all arguments
template <typename... Args>
void print_all(Args&&... args) {
    ((std::cout << args << " "), ...);
    std::cout << "\n";
}

int main() {
    static_assert(sum(1, 2, 3, 4) == 10);
    static_assert(product(2, 3, 4) == 24);
    static_assert(all_true(true, true, true));
    static_assert(!all_true(true, false, true));
    static_assert(any_true(false, false, true));
    static_assert(!any_true(false, false, false));

    std::cout << sum(1, 2, 3) << "\n";       // 6
    std::cout << product(2, 3, 4) << "\n";   // 24

    std::vector<int> v;
    push_all(v, 10, 20, 30);
    for (auto x : v) std::cout << x << " ";  // 10 20 30
    std::cout << "\n";

    print_all("hello", 42, 3.14);            // hello 42 3.14
}
```

### 6.2 Empty Pack Behavior

The behavior of fold expressions with empty packs depends on the operator [N4950 §8.3.5]:

| Operator   | Empty pack value (unary fold) | Notes                            |
| ---------- | ----------------------------- | -------------------------------- |
| `&&`       | `true`                        | Identity element for logical AND |
| `\|\|`     | `false`                       | Identity element for logical OR  |
| `,`        | `void()`                      | No-op                            |
| All others | **Ill-formed**                | Must use binary fold with init   |

```cpp
#include <iostream>
#include <cassert>

template <typename... Args>
constexpr bool all(Args... args) {
    return (args && ...);  // Empty pack → true
}

template <typename... Args>
constexpr bool any(Args... args) {
    return (args || ...);  // Empty pack → false
}

// This would be ill-formed with empty pack:
// template <typename... Args>
// auto sum(Args... args) { return (args + ...); }  // ERROR if empty

// Fix: use binary fold with identity element
template <typename... Args>
auto safe_sum(Args... args) {
    return (0 + ... + args);  // Binary left fold: (init op ... op pack)
}

int main() {
    static_assert(all());              // true (empty pack)
    static_assert(!any());             // false (empty pack)
    static_assert(safe_sum() == 0);    // 0 (empty pack, uses init)
    static_assert(safe_sum(1, 2) == 3);
    static_assert(safe_sum(10) == 10);
}
```

### 6.3 `hash_combine` with Fold Expressions

```cpp
#include <iostream>
#include <functional>
#include <string>
#include <cstdint>

// Boost-style hash_combine using fold expressions
template <typename T>
void hash_combine(std::size_t& seed, const T& value) {
    seed ^= std::hash<T>{}(value) + 0x9e3779b9 + (seed << 6) + (seed >> 2);
}

template <typename... Args>
std::size_t hash_all(const Args&... args) {
    std::size_t seed = 0;
    (hash_combine(seed, args), ...);
    return seed;
}

int main() {
    auto h1 = hash_all(42);
    auto h2 = hash_all(42, std::string{"hello"});
    auto h3 = hash_all(std::string{"hello"}, 42);
    auto h4 = hash_all();  // empty pack: comma fold is a no-op → seed = 0

    std::cout << h1 << "\n";
    std::cout << h2 << "\n";
    std::cout << h3 << "\n";  // different from h2 (order matters)
    std::cout << h4 << "\n";  // 0

    // Verify determinism
    auto h1_again = hash_all(42);
    std::cout << (h1 == h1_again ? "deterministic" : "non-deterministic") << "\n";
}
```

---

## 7. Type Traits and Static Reflection Patterns

### 7.1 The `<type_traits>` Header

The `<type_traits>` header [N4950 §20.15] provides a comprehensive set of compile-time type introspection and transformation utilities. They fall into several categories:

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

### 7.2 `std::enable_if` and SFINAE

**SFINAE** (Substitution Failure Is Not An Error) [N4950 §13.8.3] means that when substituting deduced template arguments into the function type causes a failure, the function is simply removed from the overload set rather than causing a compilation error.

`std::enable_if<Condition, Type = void>` [N4950 §20.15.8] is the classic SFINAE tool: if `Condition` is true, it provides the nested type `type` (defaults to `void`); otherwise, no `type` member exists, causing substitution failure.

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

:::warning
`std::enable_if` SFINAE is effective but produces terrible error messages and makes function signatures hard to read. In C++17 and later, prefer `if constexpr` for compile-time branching inside function bodies. In C++20, prefer **concepts** and **constraints** [N4950 §13.7.7] for the clearest syntax.
:::

### 7.3 Tag Dispatch

**Tag dispatch** is a SFINAE technique that uses tag types to select overloads at compile time [N4950 §20.15.4.3]:

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

### 7.4 `if constexpr` as a SFINAE Alternative

C++17 introduced `if constexpr` [N4950 §8.5.2], which performs compile-time branching. Unlike `std::enable_if` (which operates on the function signature level), `if constexpr` operates inside the function body and discards the untaken branch at compile time.

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

:::tip
Prefer `if constexpr` over `std::enable_if` when you have a single function that needs to handle multiple type categories. Prefer `std::enable_if` (or better, C++20 concepts) when different implementations should be entirely separate overloads. The `if constexpr` approach is generally easier to read, debug, and maintain.
:::

### 7.5 Comparison: Tag Dispatch vs `if constexpr` vs Concepts

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

---

## Summary

Generic programming in C++ rests on a powerful template system governed by precise rules:

- **Two-phase name lookup** [N4950 §13.8.3] separates non-dependent (Phase 1) and dependent (Phase 2) name resolution, requiring `this->` for base class member access and the `template` keyword for dependent template names.
- **Monomorphization** produces optimized, type-specific code at the cost of potential code bloat, controllable via `extern template` [N4950 §13.9.3].
- **CTAD** [N4950 §16.3.1.1] and **deduction guides** [N4950 §16.3.1.7] eliminate redundant type annotations for class templates.
- **Specialization** (full [N4950 §13.7.5] and partial) enables type-specific behavior, forming the foundation of type traits.
- **Variadic templates** [N4950 §13.7.3] and **fold expressions** [N4950 §8.3.5] enable type-safe operations on arbitrary numbers of arguments.
- **Type traits** [N4950 §20.15] provide compile-time introspection, paired with SFINAE, tag dispatch, `if constexpr`, or concepts for compile-time polymorphism.
