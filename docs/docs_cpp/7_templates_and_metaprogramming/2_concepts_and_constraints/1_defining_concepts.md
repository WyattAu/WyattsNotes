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

### Formal Semantics of the `concept` Keyword

The Standard defines a concept as a "template that defines a set of requirements" [N4950 §18.4]. The
grammar is:

```
concept-definition:
    template < template-parameter-list > concept attribute-specifier-seqopt identifier = constraint-expression ;
```

Several constraints on this grammar are important:

1. The template-parameter-list must contain at least one type or type-constraint parameter. A
   concept with no parameters is ill-formed.
2. The constraint-expression must be a _constraint-expression_ as defined in [N4950 §13.5.3], which
   means it must be one of:
   - A logical AND expression of constraints (`&&`)
   - A logical OR expression of constraints (`||`)
   - A `requires`-expression
   - A concept name with arguments
3. A concept is implicitly `constexpr` --- the compiler evaluates it at compile time. You cannot
   declare a concept that depends on runtime values.

4. A concept cannot be `virtual`, `explicit`, `friend`, or have storage class specifiers. It is a
   purely compile-time entity.

5. A concept is not a type. You cannot use it as a type argument, return type, or variable type. It
   can only appear in constrained contexts: template parameter lists, `requires` clauses, and
   `static_assert` declarations.

## Proof: Concepts Are Compile-Time Boolean Predicates

**Claim:** A concept `C<T>` is a compile-time predicate --- for any type `T`, `C<T>` evaluates to
either `true` or `false` during compilation, and the evaluation has no runtime side effects.

**Proof:**

1. By [N4950 §13.5.3/1], a constraint-expression is defined as a logical AND/OR of _atomic
   constraints_. An atomic constraint is either a concept-id or a `requires`-expression.

2. By [N4950 §13.5.3/3], an atomic constraint is formed from an expression and a mapping from
   template parameters to template arguments. The atomic constraint is **satisfied** if and only if
   substitution of the mapped arguments into the expression is valid and the resulting expression is
   `true`.

3. The substitution in step 2 is performed in an **unevaluated operand** context [N4950 §7.5.8]. No
   runtime code is generated for the substitution, and no runtime side effects occur.

4. If the substitution fails (i.e., the expression is ill-formed after substitution), the atomic
   constraint is **not satisfied** --- this is not a hard error. This is the SFINAE principle
   applied to constraints [N4950 §13.5.3/2].

5. The logical combination of satisfied/unsatisfied atomic constraints via `&&` and `||` produces a
   single boolean result. By the laws of boolean algebra, this result is well-defined and unique.

6. Since all evaluation occurs during template argument deduction and constraint checking (which are
   compilation phases), the result is available at compile time with zero runtime cost.

Therefore, `C<T>` is a compile-time boolean predicate. $\blacksquare$

**Corollary:** A concept can be used in `static_assert` declarations to verify properties of types
at compile time:

```cpp
template<typename T>
concept Numeric = std::integral<T> || std::floating_point<T>;

static_assert(Numeric<int>, "int must be numeric");
static_assert(Numeric<double>, "double must be numeric");
static_assert(!Numeric<std::string>, "string must not be numeric");
```

**Corollary:** Since a concept is a compile-time predicate with no runtime representation, it has
zero overhead on the generated binary. The concept is "compiled away" after constraint checking
succeeds or fails.

:::info
Semantic Difference from `constexpr bool` A `constexpr bool` variable template and a
`concept` are both compile-time boolean predicates, but a concept participates in **partial
ordering** (subsumption) during overload resolution, while a `constexpr bool` variable template does
not. Concepts are also required to be `true` for all substitutions --- a concept that is `false` for
some argument is well-formed, whereas a `static_assert(false)` in the concept body would be
ill-formed.
:::

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

### Substitution Failure Semantics in Requires-Expressions

When the compiler evaluates a requires-expression, it performs template argument substitution for
each requirement. If substitution causes a failure (e.g., the type does not have a member function,
or an expression is ill-formed), that specific requirement is treated as unsatisfied rather than
causing a compilation error [N4950 §7.5.8/7]:

```cpp
template<typename T>
concept HasFooAndBar = requires(T t) {
    t.foo();  // If T doesn't have foo(), this fails silently
    t.bar();  // If T doesn't have bar(), this fails silently
    // The concept evaluates to false, but NO compilation error is emitted
};
```

This is the SFINAE principle applied to requires-expressions. The compiler does not emit an error
for a failed substitution inside a requires-expression; it simply records that the constraint is not
satisfied.

However, if substitution succeeds but the expression is ill-formed for a reason **unrelated to
substitution** (e.g., a `static_assert` fires inside a constexpr function called by the expression),
the program is ill-formed [N4950 §7.5.8/7]:

```cpp
constexpr int bad(int x) {
    static_assert(x > 0, "x must be positive");  // Hard error if x <= 0
    return x;
}

template<typename T>
concept Broken = requires(T t) {
    bad(t);  // If substitution succeeds but bad(t) fails the static_assert,
             // this IS a hard error
};
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

:::warning
Negation with `!` The negation operator `!` is defined for constraints but **does not
participate in subsumption ordering**. A concept `!C` does not subsume or is not subsumed by `C` ---
they are incomparable. This means `!C` cannot be used to establish a partial ordering between
overloads, which limits its usefulness in overload resolution. Prefer using a positive constraint on
an alternative overload instead of negating a constraint.
:::

## Standard Library Concepts Overview

The C++20 standard library provides a comprehensive set of concepts in the `<concepts>` header
[N4950 §18.4]. These concepts form a hierarchy that mirrors the type categories and iterator
hierarchy of the standard library.

### Core Language Concepts

| Concept                         | Description                                          | Key relationships                             |
| ------------------------------- | ---------------------------------------------------- | --------------------------------------------- |
| `std::same_as<T, U>`            | `T` and `U` are the same type                        | Reflexive, symmetric, transitive              |
| `std::derived_from<D, B>`       | `D` is derived from `B`                              | Implies `is_base_of_v<B, D>`                  |
| `std::convertible_to<From, To>` | `From` is implicitly convertible to `To`             | Includes numeric promotions                   |
| `std::integral<T>`              | `T` is an integral type (excluding `bool` by design) | Includes `char`, `short`, `int`, `long`, etc. |
| `std::signed_integral<T>`       | `T` is a signed integral type                        | Subsumes `std::integral<T>`                   |
| `std::unsigned_integral<T>`     | `T` is an unsigned integral type                     | Subsumes `std::integral<T>`                   |
| `std::floating_point<T>`        | `T` is a floating-point type                         | `float`, `double`, `long double`              |

### Comparison Concepts

| Concept                        | Description                                          |
| ------------------------------ | ---------------------------------------------------- |
| `std::equality_comparable<T>`  | `==` is an equivalence relation on `T`               |
| `std::totally_ordered<T>`      | `\<`, `\>`, `\<=`, `\>=` define a total order on `T` |
| `std::three_way_comparable<T>` | `\<=\>` is defined for `T`                           |

### Object Concepts

| Concept                | Description                                                  |
| ---------------------- | ------------------------------------------------------------ |
| `std::copyable<T>`     | `T` is copy-constructible, copy-assignable, and destructible |
| `std::movable<T>`      | `T` is move-constructible, move-assignable, and swappable    |
| `std::semiregular<T>`  | `T` is copyable and default-constructible                    |
| `std::regular<T>`      | `T` is semiregular and equality_comparable                   |
| `std::destructible<T>` | `T` can be destroyed                                         |

### Callable Concepts

| Concept                           | Description                                                       |
| --------------------------------- | ----------------------------------------------------------------- |
| `std::invocable<F, Args...>`      | `F` can be called with `Args...`                                  |
| `std::predicate<F, Args...>`      | `F(Args...)` returns something convertible to `bool`              |
| `std::relation<F, T, U>`          | `F(T, U)` defines an equivalence relation or strict weak ordering |
| `std::strict_weak_order<F, T, U>` | `F(T, U)` defines a strict weak ordering                          |

### Iterator and Range Concepts

The iterator concepts form a refinement hierarchy [N4950 §18.4]:

```
std::input_or_output_iterator<It>
  └── std::input_iterator<It>       (requires readable, incrementable)
       └── std::forward_iterator<It>  (requires multi-pass, equality comparable)
            └── std::bidirectional_iterator<It>  (requires decrementable)
                 └── std::random_access_iterator<It>  (requires +=, -=, indexing)
                      └── std::contiguous_iterator<It>  (requires contiguous memory)
```

Range concepts build on iterator concepts:

```
std::ranges::range<R>               (has begin() and end())
  └── std::ranges::borrowed_range<R>  (safe to return by value)
  └── std::ranges::sized_range<R>     (has size())
  └── std::ranges::view<R>            (semiregular, movable, cheap to copy)
  └── std::ranges::input_range<R>     (input_iterator begin())
  └── std::ranges::forward_range<R>   (forward_iterator begin())
  └── std::ranges::bidirectional_range<R>
  └── std::ranges::random_access_range<R>
  └── std::ranges::contiguous_range<R>
```

This hierarchy is designed so that subsumption works correctly: a `forward_iterator` subsumes an
`input_iterator`, enabling clean overload sets based on iterator category.

## SFINAE vs Concepts: A Detailed Comparison

Before C++20, template constraints were expressed using SFINAE (Substitution Failure Is Not An
Error) with techniques like `std::enable_if`, `std::void_t`, and `decltype`. Concepts provide a
cleaner, more expressive, and more composable alternative.

| Aspect                  | SFINAE (`enable_if`)                                         | Concepts                                    |
| ----------------------- | ------------------------------------------------------------ | ------------------------------------------- |
| **Syntax**              | Verbose, often nested in return types or default arguments   | Concise, declarative                        |
| **Error messages**      | Cryptic (deep in the instantiation stack)                    | Clear (constraint not satisfied)            |
| **Readability**         | Low (logic buried in type traits)                            | High (named predicates)                     |
| **Composability**       | Manual conjunction via `std::enable_if<... && ...>`          | Natural `&&` and `\|\|` operators           |
| **Subsumption**         | Not supported (compiler cannot compare enable_if conditions) | Supported (partial ordering on constraints) |
| **Overload resolution** | Ambiguity-prone with multiple enable_if                      | Ambiguity-free with proper concept design   |
| **Performance**         | Zero runtime overhead                                        | Zero runtime overhead                       |
| **Standard reference**  | [N4950 §13.10.3] (SFINAE context)                            | [N4950 §18.4] (concept definitions)         |

**Example: SFINAE approach (pre-C++20)**

```cpp
#include <type_traits>
#include <iostream>

// Only integral types: enable_if in template parameter
template<typename T,
         typename std::enable_if<std::is_integral_v<T>, int>::type = 0>
T absolute(T x) {
    return x < 0 ? -x : x;
}

// Only floating-point types: enable_if in return type
template<typename T>
std::enable_if_t<std::is_floating_point_v<T>, T>
absolute(T x) {
    return x < 0 ? -x : x;
}

int main() {
    std::cout << absolute(-3) << "\n";    // OK
    std::cout << absolute(-3.5) << "\n";  // OK
    // absolute("hello");  // Error: no matching function
}
```

**Equivalent: Concepts approach (C++20)**

```cpp
#include <concepts>
#include <iostream>

template<std::integral T>
T absolute(T x) {
    return x < 0 ? -x : x;
}

template<std::floating_point T>
T absolute(T x) {
    return x < 0 ? -x : x;
}

int main() {
    std::cout << absolute(-3) << "\n";    // OK
    std::cout << absolute(-3.5) << "\n";  // OK
    // absolute("hello");  // Error: constraints not satisfied (clear message)
}
```

The concepts version is shorter, more readable, and produces better error messages. The compiler can
also determine that `std::integral<T>` and `std::floating_point<T>` are mutually exclusive (via
subsumption), eliminating the ambiguity that would arise with two `enable_if` overloads that the
compiler cannot structurally compare.

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

:::tip
Concept Design Principle A well-designed concept should be **minimal** (only require what is
necessary) and **specific** (exclude types that would cause undefined behavior). Avoid overly broad
concepts like `requires(T t) { t + t; }` --- this would accept `std::string` (which supports `+` for
concatenation) even if the algorithm is intended for arithmetic. Use the standard library concepts
in `<concepts>` as building blocks whenever possible.
:::

## Recursive Concept Constraints

Concepts can express recursive constraints --- a concept that references itself or references
another concept that transitively references the original. This is useful for defining hierarchical
type relationships:

```cpp
#include <concepts>
#include <iostream>
#include <type_traits>

// Base case: a leaf type is comparable to itself
template<typename T>
concept LeafComparable = std::equality_comparable<T>;

// Recursive: a tuple-like type is comparable if all its elements are comparable
// (This requires a helper trait for decomposition)
template<typename T>
concept TupleComparable = requires(T t) {
    std::tuple_size<T>::value;
} && []<std::size_t... Is>(std::index_sequence<Is...>) {
    return (LeafComparable<std::tuple_element_t<Is, T>> && ...);
}(std::make_index_sequence<std::tuple_size_v<T>>{});
```

A simpler form of recursive-like behavior uses concept refinement chains:

```cpp
#include <concepts>
#include <iterator>
#include <ranges>

// Each concept refines the previous one
template<typename T>
concept Readable = std::input_iterator<T>;

template<typename T>
concept ForwardReadable = Readable<T> && std::forward_iterator<T>;

template<typename T>
concept RandomReadable = ForwardReadable<T> && std::random_access_iterator<T>;

template<typename T>
concept ContiguousReadable = RandomReadable<T> && std::contiguous_iterator<T>;

// Each level subsumes the previous level:
// ContiguousReadable subsumes RandomReadable subsumes ForwardReadable subsumes Readable
```

The key insight is that the compiler resolves concept constraints eagerly --- it does not perform
unbounded recursive evaluation. If a concept references itself directly without a base case, the
compiler will terminate with a constraint evaluation depth limit error. Always ensure recursive
concept constraints have a structural base case (e.g., the "leaf" type case).

## Concept Design Patterns

### Pattern 1: Minimal + Refined Concepts

Define a minimal base concept and progressively refine it for more specific use cases:

```cpp
#include <concepts>
#include <ranges>

template<typename T>
concept Container = std::ranges::range<T> && requires(T t) {
    { t.size() } -> std::convertible_to<std::size_t>;
};

template<typename T>
concept SortableContainer = Container<T> && requires(T& t) {
    requires std::sortable<std::ranges::iterator_t<T>>;
};

template<typename T>
concept RandomAccessContainer = Container<T> && requires(T t) {
    { t[0] } -> std::same_as<std::ranges::range_reference_t<T>>;
    requires std::random_access_iterator<std::ranges::iterator_t<T>>;
};
```

This pattern ensures that each concept is independently useful and that subsumption works correctly:
`SortableContainer` subsumes `Container`, and `RandomAccessContainer` subsumes `Container`.

### Pattern 2: Tag Concepts for Dispatch

Use concepts as tags to select the correct implementation via overload resolution:

```cpp
#include <concepts>
#include <iostream>
#include <vector>
#include <list>

template<typename C>
concept RandomAccess = std::random_access_iterator<typename C::iterator>;

template<typename C>
concept BidirectionalOnly = std::bidirectional_iterator<typename C::iterator>
    && !RandomAccess<C>;

template<RandomAccess C>
void sort_impl(C& c) {
    std::cout << "using quicksort\n";
    // quicksort implementation
}

template<BidirectionalOnly C>
void sort_impl(C& c) {
    std::cout << "using merge sort\n";
    // merge sort implementation
}

int main() {
    std::vector<int> v{3, 1, 2};
    std::list<int> l{3, 1, 2};
    sort_impl(v);  // "using quicksort"
    sort_impl(l);  // "using merge sort"
}
```

### Pattern 3: Concept as Interface Contract

Use concepts to document the expected interface of a template parameter:

```cpp
#include <concepts>
#include <string>

template<typename T>
concept Drawable = requires(T shape, std::ostream& os) {
    { shape.draw(os) } -> std::same_as<void>;
    { shape.area() } -> std::convertible_to<double>;
    { shape.bounding_box() } -> std::convertible_to<std::pair<double, double>>;
};

template<Drawable T>
void render(const T& shape, std::ostream& os) {
    os << "Area: " << shape.area() << "\n";
    shape.draw(os);
}
```

## Abbreviated Function Templates

C++20 introduced **abbreviated function templates** --- the `auto` parameter syntax that implicitly
generates an implicit template parameter with deduction from the argument type [N4950 §11.4.1]:

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

Concepts can be composed by **refinement** --- a concept `C2` refines concept `C1` when every type
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
satisfies `InputRange` --- the subsumption relationship enables the compiler to select the most
constrained overload during overload resolution.

## Common Pitfalls

**1. Concepts do not short-circuit in the usual sense:** While `&&` and `||` in constraint
expressions follow short-circuit evaluation for **atomic constraints** (each individual predicate is
evaluated independently, and the result is the logical combination), the constraint as a whole is
evaluated by checking all atomic constraints. A failed substitution in one branch of a disjunction
does not cause a hard error --- SFINAE applies [N4950 §13.5.3].

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

**5. Using `auto` in concept definitions:** A concept like
`concept Foo = requires(auto x) { x.bar(); }` is valid but less useful for subsumption because
`auto` deduces a type that may not map cleanly to the concept's template parameters. Prefer
`requires(T x)` with an explicit template parameter.

**6. Concepts cannot be forward-declared:** Unlike classes and functions, a concept must be defined
before it is used. There is no mechanism for forward-declaring a concept. This means concept
definitions must appear in headers, and mutual recursion between concepts (A requires B, B requires
A) is impossible without indirection through type traits.

**7. `requires`-expression parameters are distinct from template parameters:** The parameters
introduced in a `requires`-expression (e.g., `requires(T a, T b)`) are local to that expression.
They do not appear in the concept's template parameter list and cannot be referenced outside the
requires-expression. This is a common source of confusion when mixing `requires`-clauses and
`requires`-expressions.

**8. Concepts evaluate to `bool`, not to types:** You cannot use a concept in a context that expects
a type. `std::vector<Addable>` is ill-formed; you must write `std::vector<Addable auto>` or use a
constrained template parameter.

## See Also

- [Constraint Subsumption and Overload Resolution](./2_constraint_subsumption.md)
- [Standard Library Concepts](./3_standard_concepts.md)
- [SFINAE vs Concepts](./4_sfinae_vs_concepts.md)
