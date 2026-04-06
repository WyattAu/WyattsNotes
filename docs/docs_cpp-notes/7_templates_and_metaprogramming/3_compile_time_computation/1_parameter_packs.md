---
title: Parameter Packs and Variadic Templates
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: parameter-packs-and-variadic-templates
---

# Parameter Packs and Variadic Templates

A **variadic template** accepts a variable number of template arguments via a **parameter pack**
[N4950 §13.7.3]. Parameter packs come in two forms: type parameter packs and non-type parameter
packs. Combined with **pack expansion** syntax and perfect forwarding, they enable type-safe
operations on arbitrary numbers of arguments.

## Variadic Function Templates and Parameter Packs

A **variadic template** accepts a variable number of template arguments via a **parameter pack**
[N4950 §13.7.3]. Parameter packs come in two forms: type parameter packs and non-type parameter
packs.

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

## Pack Expansion Syntax

A **pack expansion** `pattern...` expands the pattern by substituting each element of the pack
[N4950 §13.7.3]. The expansion can appear in various contexts:

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

## Variadic `make_unique` (Custom Implementation)

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

:::tip `std::make_unique` (C++14) is implemented essentially as shown above. The variadic template +
perfect forwarding pattern (`Args&&... args` with `std::forward<Args>(args)...`) is one of the most
important idioms in modern C++ template programming. :::

## Variadic Class Templates

Parameter packs are not limited to function templates. A **variadic class template** accepts a pack
of type parameters, enabling type-safe heterogeneous containers and mixin-style composition [N4950
§13.7.3].

```cpp
#include <iostream>
#include <tuple>
#include <type_traits>

// Variadic class template: holds one of each type
template <typename... Types>
struct TypeHolder {
    static constexpr std::size_t count = sizeof...(Types);

    template <std::size_t I>
    using type_at = std::tuple_element_t<I, std::tuple<Types...>>;
};

int main() {
    using Holder = TypeHolder<int, double, char, long>;
    static_assert(Holder::count == 4);
    static_assert(std::is_same_v<Holder::type_at<0>, int>);
    static_assert(std::is_same_v<Holder::type_at<2>, char>);
    std::cout << "Types: " << Holder::count << "\n";
}
```

**Variadic inheritance** uses pack expansion in the base class list [N4950 §13.7.3]:

```cpp
#include <iostream>
#include <string>

struct Printer {
    void print() const { std::cout << "Printer\n"; }
};

struct Logger {
    void log() const { std::cout << "Logger\n"; }
};

struct Serializer {
    void serialize() const { std::cout << "Serializer\n"; }
};

// Variadic mixin composition: each base provides a capability
template <typename... Mixins>
class Component : public Mixins... {
public:
    // Inherit all constructors from each mixin
    using Mixins::Mixins...;

    void run_all() const {
        // Each call resolves via the appropriate base
        (void(Printer::print), ...);   // only compiles if Printer is in Mixins...
        (void(Logger::log), ...);
        (void(Serializer::serialize), ...);
    }
};

int main() {
    Component<Printer, Logger> c1;
    c1.print();
    c1.log();

    Component<Serializer> c2;
    c2.serialize();
}
```

## `sizeof...` Operator

`sizeof...(pack)` returns the number of elements in a parameter pack as a `std::size_t` [N4950
§8.3.3]. It is a constant expression usable in `if constexpr`, `static_assert`, and template
metaprogramming. It works on both type packs and non-type packs.

```cpp
#include <iostream>
#include <type_traits>

// Compile-time type list length
template <typename... Ts>
struct TypeList {
    static constexpr std::size_t length = sizeof...(Ts);
};

// Conditional: return first type if pack has exactly one element
template <typename... Ts>
auto first_or_default() {
    if constexpr (sizeof...(Ts) == 1) {
        return 42;  // single element case
    } else if constexpr (sizeof...(Ts) == 0) {
        return 0;   // empty pack
    } else {
        return -1;  // multiple elements
    }
}

int main() {
    static_assert(TypeList<>::length == 0);
    static_assert(TypeList<int, double>::length == 2);

    static_assert(first_or_default<>() == 0);
    static_assert(first_or_default<int>() == 42);
    static_assert(first_or_default<int, double>() == -1);
    std::cout << "All assertions passed\n";
}
```

## Pack Indexing with `std::tuple`

There is no built-in "get the Nth type of a pack" operator in C++. The standard technique is to
convert the pack to `std::tuple` and use `std::tuple_element_t` for type indexing or `std::get` for
value indexing [N4950 §22.4.6].

```cpp
#include <iostream>
#include <tuple>
#include <string>
#include <type_traits>

// Type indexing: get the Nth type from a parameter pack
template <std::size_t I, typename... Ts>
using pack_element_t = std::tuple_element_t<I, std::tuple<Ts...>>;

// Value indexing: get the Nth value from a pack of values
template <std::size_t I, typename... Ts>
decltype(auto) get_pack_element(Ts&&... args) {
    return std::get<I>(std::forward_as_tuple(std::forward<Ts>(args)...));
}

// Apply a function to the Nth argument
template <std::size_t I, typename Fn, typename... Ts>
decltype(auto) apply_at(Fn&& fn, Ts&&... args) {
    return std::forward<Fn>(fn)(get_pack_element<I>(std::forward<Ts>(args)...));
}

int main() {
    static_assert(std::is_same_v<pack_element_t<0, int, double, char>, int>);
    static_assert(std::is_same_v<pack_element_t<1, int, double, char>, double>);
    static_assert(std::is_same_v<pack_element_t<2, int, double, char>, char>);

    auto val = get_pack_element<1>(10, std::string{"hello"}, 3.14);
    std::cout << val << "\n";  // hello

    auto result = apply_at<0>([](int x) { return x * 2; }, 21, "test", 1.0);
    std::cout << result << "\n";  // 42
}
```

## Pack Expansion in Different Contexts

Pack expansion `pattern...` can appear in many syntactic positions [N4950 §13.7.3]. Each context
substitutes each pack element into the pattern and produces a comma-separated list of expansions:

```cpp
#include <iostream>
#include <vector>
#include <tuple>
#include <utility>
#include <string>

// 1. Function argument expansion: f(args...)
template <typename... Args>
void call_print(Args... args) {
    ((std::cout << args << "\n"), ...);
}

// 2. Template argument expansion: Tuple<Types...>
template <typename... Ts>
using MyTuple = std::tuple<Ts...>;

// 3. Braced-init-list expansion: {args...}
template <typename... Args>
auto to_vector(Args&&... args) {
    return std::vector<std::common_type_t<Args...>>{
        std::forward<Args>(args)...
    };
}

// 4. Using-declaration expansion: using Base::foo...
struct Base1 { void foo() { std::cout << "Base1::foo\n"; } };
struct Base2 { void foo() { std::cout << "Base2::foo\n"; } void bar() { std::cout << "Base2::bar\n"; } };

template <typename... Bases>
struct Multi : Bases... {
    using Bases::foo...;   // brings all foo() overloads into scope
};

// 5. Pack expansion in sizeof... (not an expansion context per se, but uses the pack)
template <typename... Ts>
constexpr std::size_t pack_size() { return sizeof...(Ts); }

int main() {
    call_print(42, std::string{"hello"}, 3.14);

    auto vec = to_vector(1, 2, 3, 4, 5);
    for (auto x : vec) std::cout << x << " ";
    std::cout << "\n";

    Multi<Base1, Base2> m;
    m.foo();   // ambiguous: Base1::foo or Base2::foo (as expected for using-decl pack)
    m.bar();   // OK: only Base2::bar
}
```

## Recursive Template Patterns for Pack Processing

Before C++17 fold expressions, pack processing required recursive template instantiation. The
pattern is: peel one element off the pack, process it, then recurse on the remainder [N4950
§13.7.3].

```cpp
#include <iostream>
#include <type_traits>
#include <string>

// Pattern 1: Recursive print (classic head-tail recursion)
void print_recursive() {
    std::cout << "\n";
}

template <typename T, typename... Rest>
void print_recursive(const T& first, const Rest&... rest) {
    std::cout << first;
    if constexpr (sizeof...(rest) > 0) {
        std::cout << ", ";
    }
    print_recursive(rest...);
}

// Pattern 2: Type-level recursion: check if any type satisfies a predicate
template <template <typename> class Pred, typename... Ts>
struct any_of;

template <template <typename> class Pred>
struct any_of<Pred> : std::false_type {};

template <template <typename> class Pred, typename First, typename... Rest>
struct any_of<Pred, First, Rest...>
    : std::bool_constant<Pred<First>::value || any_of<Pred, Rest...>::value> {};

template <typename T>
struct is_integral_pred : std::is_integral<T> {};

// Pattern 3: Recursive tuple for_each
template <typename Fn, typename Tuple, std::size_t... Is>
void tuple_for_each_impl(Fn&& fn, Tuple&& t, std::index_sequence<Is...>) {
    (fn(std::get<Is>(std::forward<Tuple>(t))), ...);
}

template <typename Fn, typename... Ts>
void tuple_for_each(Fn&& fn, const std::tuple<Ts...>& t) {
    tuple_for_each_impl(
        std::forward<Fn>(fn), t,
        std::index_sequence_for<Ts...>{}
    );
}

int main() {
    print_recursive("alpha", 42, 3.14, std::string{"zeta"});

    static_assert(any_of<is_integral_pred, double, std::string, int>::value);
    static_assert(!any_of<is_integral_pred, double, std::string>::value);

    auto t = std::make_tuple(1, std::string{"two"}, 3.0);
    tuple_for_each([](const auto& v) { std::cout << v << " "; }, t);
    std::cout << "\n";
}
```

## Fold Expressions: The Modern Alternative

C++17 fold expressions replace most recursive template patterns with a single line of code. For
details, see [Fold Expressions and Pack Expansion](./2_fold_expressions.md).

```cpp
#include <iostream>
#include <string>

// Before (C++14 recursive):
// template <typename T>
// T sum_old(T val) { return val; }
// template <typename T, typename... Rest>
// T sum_old(T first, Rest... rest) { return first + sum_old(rest...); }

// After (C++17 fold):
template <typename... Args>
auto sum_fold(Args... args) {
    return (args + ...);  // unary right fold
}

// Print with separator using fold
template <typename... Args>
void print_fold(Args&&... args) {
    std::string sep;
    ((std::cout << std::exchange(sep, ", ") << args), ...);
    std::cout << "\n";
}

int main() {
    static_assert(sum_fold(1, 2, 3, 4, 5) == 15);
    print_fold("alpha", 42, 3.14);  // alpha, 42, 3.14
}
```

## Common Pitfalls

### Empty Pack Ambiguity

Overload resolution between a variadic template and a specific overload can be surprising when the
pack is empty:

```cpp
#include <iostream>

// This is called for zero or more arguments
template <typename... Args>
void dispatch(Args... args) {
    std::cout << "variadic: " << sizeof...(args) << " args\n";
}

// This is a better match for zero arguments IF it exists
void dispatch() {
    std::cout << "no-arg overload\n";
}

int main() {
    dispatch();         // calls void dispatch(), NOT the variadic
    dispatch(1, 2);     // calls variadic: 2 args
    dispatch(42);       // calls variadic: 1 arg
}
```

The non-variadic overload wins when the argument list matches exactly. This is by design per
overload resolution rules [N4950 §12.4.3], but it can be surprising.

### Ambiguous Overloads with Variadics

A variadic template can shadow all other overloads in the same scope. The workaround is to constrain
the variadic with `requires` or SFINAE:

```cpp
#include <iostream>
#include <concepts>

struct Widget { int x; };
struct Gizmo { double y; };

// BAD: unconstrained variadic swallows everything
// template <typename... Args>
// void process(Args... args) { std::cout << "variadic\n"; }

// GOOD: constrain the variadic to avoid hijacking other overloads
template <typename T, typename... Args>
    requires (sizeof...(Args) >= 2)
void process(T first, Args... rest) {
    std::cout << "variadic: " << sizeof...(rest) + 1 << " args\n";
}

void process(Widget w) { std::cout << "Widget: " << w.x << "\n"; }
void process(Gizmo g)   { std::cout << "Gizmo: " << g.y << "\n"; }

int main() {
    process(Widget{42});           // Widget: 42
    process(Gizmo{3.14});          // Gizmo: 3.14
    process(1, 2, 3);              // variadic: 3 args
    // process(1);                 // ill-formed: constraint not satisfied
}
```

### Expanding Into the Wrong Context

Pack expansion must appear in a valid expansion context [N4950 §13.7.3]. You cannot expand a pack in
an arbitrary position:

```cpp
#include <iostream>
#include <tuple>

template <typename... Ts>
void bad_expansion() {
    // auto x = std::tuple<Ts...>{Ts{}...};  // ERROR: Ts{} is not a valid expansion here
    // because the pack Ts... is a TYPE pack, not a value pack.
}

template <typename... Ts>
void good_expansion() {
    // OK: expanding in a braced-init-list context
    auto x = std::tuple<Ts...>{};  // zero-constructs each element
    (void)x;
}

int main() {
    good_expansion<int, double, char>();
}
```

### Perfect Forwarding with Parameter Packs

When using forwarding references (`Args&&...`) with parameter packs, always use `std::forward` in
the expansion. Forgetting to forward degrades rvalues to lvalues:

```cpp
#include <iostream>
#include <utility>
#include <string>

// CORRECT: forwards each argument with its original value category
template <typename... Args>
void forward_correct(Args&&... args) {
    some_function(std::forward<Args>(args)...);
}

// WRONG: all arguments become lvalue references
template <typename... Args>
void forward_wrong(Args&&... args) {
    some_function(args...);  // BUG: rvalues decay to lvalues
}

// Stub for illustration
void some_function(int&, double&&, std::string&&) {
    std::cout << "called\n";
}

int main() {
    int x = 10;
    forward_correct(x, 3.14, std::string{"hi"});  // OK
    // forward_wrong(x, 3.14, std::string{"hi"});  // would fail: double&& expects rvalue
}
```

## See Also

- [Fold Expressions and Pack Expansion](./2_fold_expressions.md)
- [Compile-Time Branching (if constexpr)](./3_if_constexpr.md)
- [Type Traits and Static Reflection Patterns](./4_type_traits.md)
- [Argument Deduction (Class and Function)](../1_generic_programming/2_argument_deduction.md)
- [Template Instantiation, Monomorphization, and Code Bloat](../1_generic_programming/1_instantiation.md)

:::
