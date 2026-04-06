---
title: Defining Concepts and Requires Clauses
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: defining-concepts-and-requires-clauses
---

# Defining Concepts and Requires Clauses

C++20 introduced **concepts** --- named requirements for template parameters that allow the compiler
to check, at the point of instantiation, whether a type satisfies a set of constraints. Concepts
make template requirements **explicit**, **named**, and **composable**, transforming template
metaprogramming from an implicit contract into a readable interface.

## The `concept` Keyword

A **concept** is a named compile-time predicate that evaluates to `true` or `false` for a given set
of template arguments [N4950 §18.4]. The syntax is defined in [N4950 §13.9.3]:

```cpp
template <template-parameter-list>
concept concept-name = constraint-expression;
```

A concept is declared with the `concept` keyword and must be defined at namespace scope. The
constraint-expression on the right-hand side is a **constant expression of type `bool`** [N4950
§13.5.3]. The concept evaluates to `true` if the constraint-expression is satisfied for the given
template arguments.

```cpp
#include <concepts>
#include <iostream>

template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;
};

template<typename T>
concept HasSize = requires(T t) {
    { t.size() } -> std::convertible_to<std::size_t>;
};

template<Addable T>
T add(T a, T b) {
    return a + b;
}

int main() {
    std::cout << add(3, 4) << "\n";        // OK: int is Addable
    // std::cout << add("a", "b") << "\n"; // Error: const char* is not Addable
}
```

The `concept` keyword restricts what can appear on the right-hand side. Specifically [N4950
§13.5.3]:

- The constraint-expression must be a **constexpr boolean expression**.
- It cannot introduce new template parameters (those go in the template-parameter-list).
- A concept itself is never instantiated --- it is only **evaluated** during constraint checking.

:::info Semantic Difference from `constexpr bool` A `constexpr bool` variable template and a
`concept` are both compile-time boolean predicates, but a concept participates in **partial
ordering** (subsumption) during overload resolution, while a `constexpr bool` variable template does
not. Concepts are also required to be `true` for all substitutions --- a concept that is `false` for
some argument is well-formed, whereas a `static_assert(false)` in the concept body would be
ill-formed. :::

## Requires-Expressions

A **requires-expression** is the primary building block for expressing constraints on types [N4950
§7.5.8]. Its grammar is:

```
requires { requirement-seq }
requires parameter-list { requirement-seq }
```

There are four kinds of **requirements** that can appear in the requirement-seq [N4950 §7.5.8]:

1. **Simple requirements:** an expression that must be well-formed.
2. **Type requirements:** a type that must be valid (using `typename` keyword).
3. **Compound requirements:** an expression with an expected return type.
4. **Nested requirements:** a constraint that must be satisfied (using `requires` keyword).

```cpp
#include <concepts>
#include <string>
#include <vector>

template<typename T>
concept SortableContainer = requires(T container) {
    // Simple requirement: the expression must be valid
    container.begin();
    container.end();
    container.size();

    // Type requirement: the nested type must exist
    typename T::value_type;

    // Compound requirement: the expression must be valid AND return the specified type
    { container[0] } -> std::same_as<typename T::value_type&>;

    // Nested requirement: an additional constraint must hold
    requires std::random_access_iterator<decltype(container.begin())>;
};

template<SortableContainer C>
void process(C& container) {
    // Guaranteed: C has begin(), end(), size(), operator[], value_type
}

int main() {
    std::vector<int> v{1, 2, 3};
    process(v);  // OK: std::vector<int> satisfies SortableContainer
}
```

Each requirement in the sequence is checked independently. If any single requirement fails, the
entire requires-expression evaluates to `false`. Importantly, the check is performed in an
**unevaluated context** --- no runtime code is generated for the requirement checks [N4950 §7.5.8].

### Expression Validity in Requires-Expressions

A requires-expression tests whether an expression is **well-formed**, not whether it produces a
particular value. The expression `a + b` is valid if `operator+` is accessible and unambiguous for
types `a` and `b`, regardless of the result value.

```cpp
#include <iostream>

template<typename T>
concept HasStreamInsertion = requires(std::ostream& os, T value) {
    { os << value } -> std::same_as<std::ostream&>;
};

int main() {
    static_assert(HasStreamInsertion<int>);
    static_assert(HasStreamInsertion<const char*>);
    // static_assert(HasStreamInsertion<void>); // Error: void does not satisfy
}
```

## Requires-Clauses

A **requires-clause** is a mechanism for attaching a constraint to a template declaration or
function declaration [N4950 §13.9.2]. There are two syntactic forms:

**Trailing requires-clause** (after the function parameter list):

```cpp
template<typename T>
    requires std::integral<T>
T absolute(T x) {
    return x < 0 ? -x : x;
}
```

**Constrained template parameter** (directly on the parameter):

```cpp
template<std::integral T>
T absolute(T x) {
    return x < 0 ? -x : x;
}
```

Both forms are semantically equivalent. The trailing requires-clause is more flexible because it can
reference multiple template parameters or the function's own parameters [N4950 §13.9.2.1]:

```cpp
#include <concepts>
#include <type_traits>

template<typename T, typename U>
    requires std::integral<T> && std::integral<U>
auto safe_divide(T numerator, U denominator) -> std::common_type_t<T, U> {
    return static_cast<std::common_type_t<T, U>>(numerator) / denominator;
}

// This cannot be expressed with constrained template parameters alone
// because the constraint references both T and U
```

A requires-clause can also appear on non-template functions (C++20) [N4950 §7.6.7]:

```cpp
#include <concepts>

void process(int x)
    requires (x > 0)
{
    // This overload is only viable when x > 0
}
```

## Compound Concepts: Conjunction and Disjunction

Constraints form a lattice ordered by **subsumption** [N4950 §13.5.4]. The logical operators `&&`
(conjunction) and `||` (disjunction) are used to combine constraints:

- **Conjunction (`&&`):** All atomic constraints must be satisfied. This produces a constraint that
  is **at least as strict** as any individual component.
- **Disjunction (`||`):** At least one atomic constraint must be satisfied. This produces a
  constraint that is **at most as strict** as any individual component.

```cpp
#include <concepts>
#include <iostream>
#include <complex>

template<typename T>
concept Arithmetic = std::integral<T> || std::floating_point<T>;

template<typename T>
concept Number = Arithmetic<T> || requires(T v) {
    // Additional support for complex numbers, custom numeric types, etc.
    { v.real() } -> std::convertible_to<double>;
    { v.imag() } -> std::convertible_to<double>;
};

template<Number T>
T compute(T a, T b) {
    return a + b;
}

int main() {
    std::cout << compute(1, 2) << "\n";             // OK: int is Arithmetic
    std::cout << compute(1.5, 2.5) << "\n";         // OK: double is Arithmetic
    std::cout << compute(std::complex<double>(1, 0), std::complex<double>(0, 1)) << "\n";
}
```

:::warning Negation with `!` The negation operator `!` is defined for constraints but **does not
participate in subsumption ordering**. A concept `!C` does not subsume or is not subsumed by `C` ---
they are incomparable. This means `!C` cannot be used to establish a partial ordering between
overloads, which limits its usefulness in overload resolution. Prefer using a positive constraint on
an alternative overload instead of negating a constraint. :::

## Defining and Using a `Numeric` Concept

The following complete example demonstrates defining a `Numeric` concept, using it to constrain a
template function, and providing specialized behavior for different numeric categories:

```cpp
#include <concepts>
#include <iostream>
#include <iomanip>
#include <limits>
#include <type_traits>

template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

template<typename T>
concept SignedNumeric = Numeric<T> && std::is_signed_v<T>;

template<typename T>
concept UnsignedNumeric = Numeric<T> && !SignedNumeric<T>;

template<Numeric T>
T safe_add(T a, T b) {
    if constexpr (std::floating_point<T>) {
        return a + b;
    } else if constexpr (SignedNumeric<T>) {
        if ((b > 0 && a > std::numeric_limits<T>::max() - b) ||
            (b < 0 && a < std::numeric_limits<T>::min() - b)) {
            throw std::overflow_error("signed overflow detected");
        }
        return a + b;
    } else {
        if (a > std::numeric_limits<T>::max() - b) {
            throw std::overflow_error("unsigned overflow detected");
        }
        return a + b;
    }
}

template<Numeric T>
auto mean(T a, T b) -> double {
    return static_cast<double>(a) + static_cast<double>(b);
}

int main() {
    std::cout << std::fixed << std::setprecision(1);
    std::cout << "3 + 4 = " << safe_add(3, 4) << "\n";
    std::cout << "1.5 + 2.5 = " << safe_add(1.5, 2.5) << "\n";

    try {
        safe_add(static_cast<int>(2147483647), 1);
    } catch (const std::overflow_error& e) {
        std::cout << "Caught: " << e.what() << "\n";
    }

    std::cout << "mean(3, 7) = " << mean(3, 7) << "\n";
    std::cout << "mean(3.0, 7.0) = " << mean(3.0, 7.0) << "\n";
}
```

Output:

```
3 + 4 = 7
1.5 + 2.5 = 4.0
Caught: signed overflow detected
mean(3, 7) = 10.0
mean(3.0, 7.0) = 10.0
```

:::tip Concept Design Principle A well-designed concept should be **minimal** (only require what is
necessary) and **specific** (exclude types that would cause undefined behavior). Avoid overly broad
concepts like `requires(T t) { t + t; }` --- this would accept `std::string` (which supports `+` for
concatenation) even if the algorithm is intended for arithmetic. Use the standard library concepts
in `<concepts>` as building blocks whenever possible. :::

## Abbreviated Function Templates

C++20 introduced **abbreviated function templates** — the `auto` parameter syntax that implicitly
generates a template parameter with an implicit `std::type_identity` constraint [N4950 §11.4.1]:

```cpp
#include <concepts>
#include <iostream>
#include <string>

void print(auto&& value) {
    std::cout << value << "\n";
}

void print_all(const auto&... args) {
    (print(args), ...);
}

int main() {
    print(42);
    print(3.14);
    print("hello");

    print_all(1, "two", 3.0);
}
```

This is equivalent to writing `template&lt;typename T> void print(T&& value)` but with less syntax.
The parameter is deduced using the same rules as a function template. Constraints can be applied
using a trailing requires-clause:

```cpp
#include <concepts>
#include <iostream>

void print_numeric(std::integral auto x) {
    std::cout << "integral: " << x << "\n";
}

void print_numeric(std::floating_point auto x) {
    std::cout << "floating: " << x << "\n";
}

int main() {
    print_numeric(42);    // calls integral overload
    print_numeric(3.14);  // calls floating_point overload
}
```

Abbreviated function templates with constrained `auto` parameters participate in **partial
ordering** (subsumption) just like constrained template parameters. The overload set above is
well-ordered: `std::integral&lt;T>` and `std::floating_point&lt;T>` are mutually exclusive atomic
constraints [N4950 §13.5.4].

## Concept Refinement and the `requires` Clause Inside Concepts

Concepts can be composed by **refinement** — a concept `C2` refines concept `C1` when every type
satisfying `C2` also satisfies `C1`. This is expressed with a `requires` clause on the concept
definition [N4950 §13.9.3]:

```cpp
#include <concepts>
#include <iostream>
#include <iterator>
#include <ranges>

template<typename T>
concept InputRange = std::ranges::input_range<T>;

template<typename T>
concept SortableRange = InputRange<T> &&
    requires(T& rng) {
        { rng.begin() } -> std::random_access_iterator;
        { rng.end() } -> std::sentinel_for<decltype(rng.begin())>;
        requires std::sortable<decltype(rng.begin())>;
    };

template<SortableRange R>
void insertion_sort(R& rng) {
    auto it = rng.begin();
    auto end = rng.end();
    for (auto cur = it + 1; cur != end; ++cur) {
        auto key = *cur;
        auto pos = cur;
        while (pos != it && *(pos - 1) > key) {
            *pos = *(pos - 1);
            --pos;
        }
        *pos = key;
    }
}

int main() {
    std::vector<int> v = {5, 2, 8, 1, 9, 3};
    insertion_sort(v);
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";
}
```

The refinement `SortableRange` requires `InputRange` as a base and adds additional constraints for
random access and sortability. This means any type satisfying `SortableRange` automatically
satisfies `InputRange` — the subsumption relationship enables the compiler to select the most
constrained overload during overload resolution.

## Common Pitfalls

**1. Concepts do not short-circuit in the usual sense:** While `&&` and `||` in constraint
expressions follow short-circuit evaluation for **atomic constraints** (each individual predicate is
evaluated independently, and the result is the logical combination), the constraint as a whole is
evaluated by checking all atomic constraints. A failed substitution in one branch of a disjunction
does not cause a hard error — SFINAE applies [N4950 §13.5.3].

**2. `requires` inside a concept body vs requires-clause:** A `requires` clause on a function
constrains the function. A `requires { ... }` expression inside a concept body is a
requires-expression that tests whether certain expressions are valid. These are distinct constructs:

```cpp
template<typename T>
concept HasFoo = requires(T t) { t.foo(); };  // requires-expression

template<typename T>
    requires HasFoo<T>  // requires-clause
void bar(T t) { t.foo(); }
```

**3. Overly permissive concepts:** A concept like `requires(T t) { t + t; }` accepts `std::string`
(concatenation), `std::string_view`, and pointer types (pointer arithmetic). Always combine with
`std::same_as` or `std::convertible_to` on the return type to narrow the intent:

```cpp
template<typename T>
concept Addable = requires(T a, T b) {
    { a + b } -> std::convertible_to<T>;  // Also constrains the return type
};
```

**4. Concepts and implicit conversions:** `std::integral&lt;int>` is true, but
`std::integral&lt;bool>` is also true (since `bool` is an integral type). If you need to exclude
`bool`, add `!std::same_as&lt;T, bool>` to your constraint.

## See Also

- [Constraint Subsumption and Overload Resolution](./2_constraint_subsumption.md)
- [Standard Library Concepts](./3_standard_concepts.md)
- [SFINAE vs Concepts](./4_sfinae_vs_concepts.md)

:::

:::

:::
