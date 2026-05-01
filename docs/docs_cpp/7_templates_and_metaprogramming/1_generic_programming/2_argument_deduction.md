---
title: Argument Deduction (Class and Function)
description:
  "C++: Argument Deduction (Class and Function) — Function Template Argument Deduction; Deduction Rules in Detail; Formal Deduction Algorithm."
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

The compiler deduces template arguments from the types of function call arguments [N4950 S13.8.2.1].
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

    // Explicit template arguments override deduction [N4950 S13.8.2.1]
    add<double>(1, 2.0); // T explicitly set to double; OK
}
```

Deduction can fail in several ways: contradictory deductions from different arguments, no viable
specialization, or ambiguous partial ordering.

## Deduction Rules in Detail

The deduction process treats each function parameter as a pattern and tries to match the argument
type against it. The rules are:

1. **Top-level CV-qualifiers are stripped** from the argument before matching.
2. **References are not deduced differently** from non-references at the top level -- `T&` and `T`
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

### Formal Deduction Algorithm

The deduction algorithm [N4950 S13.8.2.1] proceeds as follows:

1. For each function parameter `P_i` and corresponding argument `A_i`, the compiler forms a
   deduction pair $\lt P_i, A_i \gt$.
2. If $P_i$ has the form `T`, `T&`, `T&&`, `const T&`, etc., the compiler deduces `T` from the type
   of $A_i$.
3. If $P_i$ has the form `T[C]` (array of `T` with bound `C`), and $A_i$ is an array of the same
   rank, both `T` and `C` are deduced.
4. If $P_i$ has the form `T(...)`, a function type, and $A_i$ is a function type of compatible
   signature, `T` is deduced.
5. Top-level cv-qualifiers on $A_i$ are ignored. Reference-ness on $A_i$ is ignored unless $P_i$ is
   a reference type.
6. After all deduction pairs are processed, each template parameter must have received exactly one
   consistent deduction. If any parameter received contradictory deductions, deduction fails.

This algorithm is applied independently to each overload candidate. If exactly one candidate
succeeds, that candidate is selected. If multiple candidates succeed, overload resolution picks the
best one. If no candidate succeeds, the call is ill-formed.

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
    // by_ref(cx);     // T = const int, but deduces T = const int -> binds to const int&
    // by_ref(42);     // ERROR: cannot bind rvalue to non-const lvalue reference

    by_const_ref(x);   // T = int
    by_const_ref(cx);  // T = int (const is on the reference, not T)
    by_const_ref(42);  // T = int (const ref binds to rvalue)

    by_fwd_ref(x);     // T = int& (lvalue -> reference collapse to int&)
    by_fwd_ref(42);    // T = int (rvalue -> T = int, param = int&&)
    by_fwd_ref(cx);    // T = const int& (const lvalue -> const int&)
}
```

### Forwarding References: Complete Deduction Rules

Forwarding references (also called universal references before C++11 was standardized) have
deduction rules that differ from both lvalue references and rvalue references. The rules [N4950
S13.8.2.1] are:

| Argument category  | `T` deduced as | Parameter type after substitution          |
| ------------------ | -------------- | ------------------------------------------ |
| lvalue of type `U` | `U&`           | `U&` (reference collapse: `U& &&` -> `U&`) |
| rvalue of type `U` | `U`            | `U&&`                                      |

The critical asymmetry is that passing an lvalue to a forwarding reference deduces `T` as a
_reference type_, while passing an rvalue deduces `T` as a non-reference type. This is the mechanism
that enables perfect forwarding with `std::forward`:

```cpp
#include <iostream>
#include <type_traits>
#include <utility>

template <typename T>
void inspect(T&& arg) {
    std::cout << "T is ";
    if constexpr (std::is_lvalue_reference_v<T>)
        std::cout << "lvalue reference to ";
    else
        std::cout << "non-reference ";

    if constexpr (std::is_const_v<std::remove_reference_t<T>>)
        std::cout << "const ";
    std::cout << typeid(std::remove_reference_t<T>).name() << "\n";
}

int main() {
    int x = 42;
    const int cx = 42;
    int& rx = x;

    inspect(x);      // T = int&         -> lvalue reference to int
    inspect(cx);     // T = const int&   -> lvalue reference to const int
    inspect(rx);     // T = int&         -> lvalue reference to int
    inspect(42);     // T = int          -> non-reference int
    inspect(std::move(x)); // T = int    -> non-reference int
}
```

:::warning A forwarding reference is **only** formed when the type deduction context is a function
parameter of the form `T&&` where `T` is a template parameter of the function template itself. The
following are **not** forwarding references:

- `std::vector&lt;T&gt;&amp;&amp;` (T is a class template parameter, not a function template
  parameter)
- `T&amp;&amp;` in a class template member function where T is the class template parameter
- `const T&amp;&amp;` (the `const` prevents the forwarding reference interpretation)
:::

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

The decay rules apply because the template parameter `T` in `void f(T param)` is matched against the
argument type after default conversions [N4950 S13.8.2.1/4]. Array-to-pointer and
function-to-pointer are both default conversions. When the parameter is a reference `T&`, no such
conversion occurs, and the array or function type is deduced directly.

### Array-to-Pointer Decay in Deduction: A Closer Look

The interaction between deduction and array decay is a frequent source of surprises. Consider what
happens when you try to deduce the size of an array:

```cpp
#include <iostream>
#include <cstddef>

// This does NOT deduce the array size
template <typename T>
std::size_t wrong_size(T arr) {
    // T = int*, sizeof(arr) = sizeof(int*) = 8 (on 64-bit)
    return sizeof(arr);
}

// This DOES deduce the array size via reference-to-array
template <typename T, std::size_t N>
constexpr std::size_t array_size(T (&)[N]) {
    return N;
}

// This deduces the array type including bounds
template <typename T>
struct ArrayInfo;

template <typename T, std::size_t N>
struct ArrayInfo<T[N]> {
    static constexpr std::size_t size = N;
    using element_type = T;
};

int main() {
    int data[] = {1, 2, 3, 4, 5};

    std::cout << wrong_size(data) << "\n";     // 8 (pointer size)
    std::cout << array_size(data) << "\n";     // 5 (correct)
    std::cout << ArrayInfo<decltype(data)>::size << "\n";  // 5
}
```

The key insight: array-to-pointer decay is a **deduction-time** phenomenon, not a type-system
phenomenon. The array type still exists in the type system; the deduction rules simply choose to
match `T` to the pointer type when the parameter is by value.

## Class Template Argument Deduction (CTAD)

Starting with C++17, the compiler can deduce class template arguments from constructor arguments
[N4950 S16.3.1.1]. This eliminates the need to repeat type arguments that the compiler can figure
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
[N4950 S16.3.1.7].
:::

### CTAD Rules [N4950 S16.3.1.3]

The CTAD process follows a specific algorithm:

1. The compiler collects all **deduction guides** (both implicit and explicit) that apply to the
   constructor arguments.
2. For each deduction guide, the compiler performs template argument deduction to determine the
   class template arguments.
3. If exactly one guide produces a valid deduction, that deduction is used.
4. If multiple guides produce valid deductions, overload resolution selects the best one.

An **implicit deduction guide** is generated for each constructor and each constructor template of a
class template [N4950 S16.3.1.7]. For a constructor `C(Params...)`, the implicit guide is:
`C(Params...) -> C&lt;deduced-types-from-Params&gt;`.

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

### CTAD and Aggregate Types (C++20)

In C++17, aggregate types (classes with no user-declared constructors) do not get implicit deduction
guides, so CTAD does not work for them. C++20 adds aggregate CTAD [N4950 S16.3.1.8]:

```cpp
#include <iostream>

// C++17: no CTAD for aggregates
// C++20: aggregate CTAD is supported
template <typename T>
struct Point {
    T x;
    T y;
};

int main() {
    Point p{1.0, 2.0};  // C++20 OK: deduces Point<double>
    std::cout << p.x << ", " << p.y << "\n";  // 1, 2
}
```

## Deduction Guides

When the compiler's default deduction is insufficient or wrong, you can write **explicit deduction
guides** [N4950 S16.3.1.7]. A deduction guide tells the compiler how to map constructor argument
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

The deduction guide `Pair(T, U) -> Pair&lt;std::decay_t&lt;T&gt;, std::decay_t&lt;U&gt;&gt;` uses
`std::decay_t` to ensure that array and function types decay to pointer types (matching the behavior
of pass-by-value constructors), just as `std::make_pair` does.

### Deduction Guides for Type-Conversion Patterns

Deduction guides are particularly useful for creating type-converting constructors that deduce the
"right" type:

```cpp
#include <iostream>
#include <string>
#include <string_view>

template <typename T>
class OwningString {
    T data_;
public:
    OwningString(T val) : data_(std::move(val)) {}
    const T& value() const { return data_; }
};

// Deduction guide: construct from std::string -> OwningString<std::string>
template <>
OwningString(std::string) -> OwningString<std::string>;

// Deduction guide: construct from const char* -> OwningString<std::string>
// (Not string_view, because we want to own the data)
OwningString(const char*) -> OwningString<std::string>;

// Deduction guide: construct from string_view -> OwningString<std::string>
OwningString(std::string_view) -> OwningString<std::string>;

int main() {
    OwningString s1{std::string{"hello"}};   // OwningString<std::string>
    OwningString s2{"world"};                 // OwningString<std::string>
    OwningString s3{std::string_view{"!"}};   // OwningString<std::string>

    std::cout << s1.value() << " " << s2.value() << s3.value() << "\n";
}
```

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

## `auto` Deduction vs Template Deduction

The `auto` keyword in variable declarations and function return types uses deduction rules that are
similar to, but not identical with, template argument deduction [N4950 S10.1.7.1]. The key
difference appears with braced initializers.

### `auto` vs Template Deduction for Braced Initializers

This is a subtle but important difference. Consider:

```cpp
#include <iostream>
#include <type_traits>
#include <initializer_list>

template <typename T>
void deduce_template(T x) {
    std::cout << "template T deduced as: " << typeid(T).name() << "\n";
}

void deduce_auto() {
    // Template deduction with braced init: deduces std::initializer_list<int>
    deduce_template({1, 2, 3});  // T = std::initializer_list<int>

    // auto deduction with braced init: deduces std::initializer_list<int>
    auto x = {1, 2, 3};          // x is std::initializer_list<int>

    // BUT: the rules differ in some contexts:
    // auto x{1};  // C++17: x is std::initializer_list<int>
    //             // C++20: x is int (CWG issue 1590 resolution)
}
```

The formal difference [N4950 S10.1.7.1] is:

- **`auto x = {expr};`** always deduces `std::initializer_list`, just like template deduction.
- **`auto x{expr};`** (direct initialization) in C++17 deduces `std::initializer_list`, but in C++20
  it deduces the type of `expr` directly (following the rules for copy-list-initialization of a
  plain `auto`).

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
void show_template_deduction(T x) {
    if constexpr (std::is_same_v<T, int>)
        std::cout << "template: int\n";
    else if constexpr (std::is_same_v<T, std::initializer_list<int>>)
        std::cout << "template: initializer_list<int>\n";
    else
        std::cout << "template: other\n";
}

void show_auto_deduction() {
    // Copy initialization with braces
    auto a = {42};          // C++17 and C++20: std::initializer_list<int>
    show_template_deduction({42});  // std::initializer_list<int>

    // Direct initialization with braces
    auto b{42};             // C++17: std::initializer_list<int>
                            // C++20: int
}
```

**Why this matters:** The discrepancy between `auto` and template deduction for braced initializers
was an unintended consequence of the C++11 `auto` rules. C++20 aligns direct `auto{...}`
initialization with the expected behavior (deducing the element type), but template deduction with
`{...}` still produces `std::initializer_list` because there is no corresponding language change for
template argument deduction.

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
list. Per [N4950 S13.8.3.1], a function declaration with an `auto` parameter is equivalent to a
function template where each `auto` introduces a distinct template type parameter.

## SFINAE Interaction with Deduction

SFINAE (Substitution Failure Is Not An Error) interacts with deduction in two ways: deduction
failures and substitution failures. The distinction is important [N4950 S13.9.1]:

- A **deduction failure** occurs when the compiler cannot deduce template arguments from the
  function call arguments. This is always SFINAE-friendly: the candidate is simply removed from the
  overload set.
- A **substitution failure** occurs when deduced arguments are substituted into the function type
  and the result is ill-formed. This is SFINAE-friendly **only** if it occurs in the immediate
  context of the function type and its template parameter declarations.

```cpp
#include <iostream>
#include <type_traits>
#include <string>

// SFINAE-friendly: deduction failure
template <typename T>
typename T::value_type get_value(T t) {
    return t.value_type{};
}

// SFINAE-friendly: substitution failure in return type
template <typename T>
auto get_value(T t) -> decltype(t.size()) {
    return t.size();
}

// Fallback for types without .size()
template <typename T>
int get_value(T t) {
    return static_cast<int>(t);
}

int main() {
    // int has no ::value_type, so first overload is removed (SFINAE)
    // int has no .size(), so second overload is removed (SFINAE)
    // Third overload is used
    std::cout << get_value(42) << "\n";  // 42

    // std::string has .size(), so second overload wins
    std::cout << get_value(std::string{"hello"}) << "\n";  // 5
}
```

```cpp
#include <iostream>
#include <type_traits>

// SFINAE with concepts (C++20) -- cleaner and preferred
template <typename T>
    requires requires { T::value_type; }
auto get_value(const T&) -> typename T::value_type {
    return typename T::value_type{};
}

template <typename T>
    requires (!requires { T::value_type; })
auto get_value(const T&) {
    return T{};
}

struct WithValueType { using value_type = int; };

int main() {
    std::cout << get_value(WithValueType{}) << "\n";  // 0 (int default)
    std::cout << get_value(42) << "\n";               // 42 (int default)
}
```

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

Per [N4950 S13.8.2.5], a template parameter that does not appear in a deducible context (such as a
return type or a non-type template parameter that is not used in the function parameter types) is a
**non-deduced context**. The compiler cannot infer such parameters from call arguments.

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
// Ambiguous b{42, 3.14};  // ERROR: T deduced as int and double -- contradiction
```

### Failure 4: Forwarding Reference Collapsing in Deduction

A common mistake is using a forwarding reference when a simple `const T&` is intended. The
forwarding reference deduces `T` differently for lvalues and rvalues, which can cause surprising
behavior:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
void forward_ref(T&& x) {
    // For lvalue int, T = int&, x = int&
    // For rvalue int, T = int,   x = int&&
}

template <typename T>
void const_ref(const T& x) {
    // For lvalue int,   T = int
    // For rvalue int,   T = int
    // For lvalue const int, T = int
}

int main() {
    int x = 42;
    const int cx = 42;

    // forward_ref(x);   // T = int&
    // forward_ref(cx);  // T = const int&
    // forward_ref(42);  // T = int

    // const_ref(x);     // T = int
    // const_ref(cx);    // T = int
    // const_ref(42);    // T = int

    // If you need to know whether the argument was an lvalue,
    // use forwarding references. If you just need to accept any
    // value, use const T& for simplicity.
}
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

6. **Forwarding reference is not `T&&` in all contexts.** The parameter must be exactly `T&&` where
   `T` is a deduced template parameter of the enclosing function template. A `T&&` where `T` is a
   class template parameter is a plain rvalue reference, not a forwarding reference.

7. **Non-deduced contexts in return types.** Template parameters that appear only in the return type
   cannot be deduced. Either make them appear in the parameter list or provide them explicitly.

8. **`std::decay_t` in deduction guides.** When writing deduction guides for constructors that take
   arguments by value, apply `std::decay_t` to match the implicit guide's behavior. Without it,
   array and function types in the guide arguments will not decay, producing a different deduction
   than the implicit guide.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Parameter Packs and Variadic Templates](../3_compile_time_computation/1_parameter_packs.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
