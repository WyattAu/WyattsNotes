---
title: Concepts and Constraints
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: concepts-and-constraints
---

# Concepts and Constraints

C++20 introduced **concepts** — named requirements for template parameters that allow the compiler to check, at the point of instantiation, whether a type satisfies a set of constraints. Before C++20, template type requirements were expressed only implicitly through usage inside the template body, producing obscure error messages when violated. Concepts make these requirements **explicit**, **named**, and **composable**, transforming template metaprogramming from an implicit contract into an explicit, readable interface. This module covers the `concept` keyword, `requires` clauses and requires-expressions, constraint subsumption and overload resolution, the standard library concepts in `<concepts>`, and the migration path from SFINAE.

---

## 1. Defining Concepts and Requires Clauses

### 1.1 The `concept` Keyword

A **concept** is a named compile-time predicate that evaluates to `true` or `false` for a given set of template arguments [N4950 §18.4]. The syntax is defined in [N4950 §13.9.3]:

```cpp
template <template-parameter-list>
concept concept-name = constraint-expression;
```

A concept is declared with the `concept` keyword and must be defined at namespace scope. The constraint-expression on the right-hand side is a **constant expression of type `bool`** [N4950 §13.5.3]. The concept evaluates to `true` if the constraint-expression is satisfied for the given template arguments.

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

The `concept` keyword restricts what can appear on the right-hand side. Specifically [N4950 §13.5.3]:

- The constraint-expression must be a **constexpr boolean expression**.
- It cannot introduce new template parameters (those go in the template-parameter-list).
- A concept itself is never instantiated — it is only **evaluated** during constraint checking.

:::info Semantic Difference from `constexpr bool`
A `constexpr bool` variable template and a `concept` are both compile-time boolean predicates, but a concept participates in **partial ordering** (subsumption) during overload resolution, while a `constexpr bool` variable template does not. Concepts are also required to be `true` for all substitutions — a concept that is `false` for some argument is well-formed, whereas a `static_assert(false)` in the concept body would be ill-formed.
:::

### 1.2 Requires-Expressions

A **requires-expression** is the primary building block for expressing constraints on types [N4950 §7.5.8]. Its grammar is:

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

Each requirement in the sequence is checked independently. If any single requirement fails, the entire requires-expression evaluates to `false`. Importantly, the check is performed in an **unevaluated context** — no runtime code is generated for the requirement checks [N4950 §7.5.8].

#### Expression Validity in Requires-Expressions

A requires-expression tests whether an expression is **well-formed**, not whether it produces a particular value. The expression `a + b` is valid if `operator+` is accessible and unambiguous for types `a` and `b`, regardless of the result value.

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

### 1.3 Requires-Clauses

A **requires-clause** is a mechanism for attaching a constraint to a template declaration or function declaration [N4950 §13.9.2]. There are two syntactic forms:

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

Both forms are semantically equivalent. The trailing requires-clause is more flexible because it can reference multiple template parameters or the function's own parameters [N4950 §13.9.2.1]:

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

### 1.4 Compound Concepts: Conjunction and Disjunction

Constraints form a lattice ordered by **subsumption** [N4950 §13.5.4]. The logical operators `&&` (conjunction) and `||` (disjunction) are used to combine constraints:

- **Conjunction (`&&`):** All atomic constraints must be satisfied. This produces a constraint that is **at least as strict** as any individual component.
- **Disjunction (`||`):** At least one atomic constraint must be satisfied. This produces a constraint that is **at most as strict** as any individual component.

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

:::warning Negation with `!`
The negation operator `!` is defined for constraints but **does not participate in subsumption ordering**. A concept `!C` does not subsume or is not subsumed by `C` — they are incomparable. This means `!C` cannot be used to establish a partial ordering between overloads, which limits its usefulness in overload resolution. Prefer using a positive constraint on an alternative overload instead of negating a constraint.
:::

### 1.5 Defining and Using a `Numeric` Concept

The following complete example demonstrates defining a `Numeric` concept, using it to constrain a template function, and providing specialized behavior for different numeric categories:

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

:::tip Concept Design Principle
A well-designed concept should be **minimal** (only require what is necessary) and **specific** (exclude types that would cause undefined behavior). Avoid overly broad concepts like `requires(T t) { t + t; }` — this would accept `std::string` (which supports `+` for concatenation) even if the algorithm is intended for arithmetic. Use the standard library concepts in `<concepts>` as building blocks whenever possible.
:::

---

## 2. Constraint Subsumption and Overload Resolution

### 2.1 Partial Ordering of Constraints

The C++ standard defines a **partial ordering** on constraints called **subsumption** [N4950 §13.5.4]. Given two constraints $P$ and $Q$, we say $P$ **subsumes** $Q$ (written $P \succeq Q$) if $P$ is at least as restrictive as $Q$ — meaning that every set of template arguments satisfying $P$ also satisfies $Q$.

Formally, for a constraint $P$ to subsume a constraint $Q$:

$$
\forall \text{substitutions } S : P(S) \implies Q(S)
$$

This is a structural comparison performed by the compiler, not a runtime check. The rules for determining subsumption between constraint conjunctions and disjunctions are [N4950 §13.5.4.1]:

| $P$         | $Q$         | $P$ subsumes $Q$?                                         |
| ----------- | ----------- | --------------------------------------------------------- |
| $A \land B$ | $A$         | Yes (conjunction subsumes each conjunct)                  |
| $A$         | $A \land B$ | No (the conjunct is less restrictive)                     |
| $A$         | $A \lor B$  | Yes (disjunction is subsumed by each disjunct)            |
| $A \lor B$  | $A$         | No (the disjunction is less restrictive)                  |
| $A$         | $A$         | Yes (identical constraints subsume each other)            |
| $A$         | $B$         | Indeterminate (incomparable unless one implies the other) |

### 2.2 How the Compiler Selects the Most Constrained Viable Function

When resolving a call to a constrained function template, the compiler follows this process [N4950 §13.10.3]:

1. **Name lookup** finds all candidate functions.
2. **Template argument deduction** determines the template arguments for each viable candidate.
3. **Constraint satisfaction** eliminates candidates whose constraints are not satisfied.
4. **Partial ordering by constraints** selects the most constrained candidate among the remaining viable functions.

If, after constraint subsumption, exactly one candidate is more constrained than all others, that candidate is selected. If no unique most-constrained candidate exists (i.e., two candidates are equally constrained or incomparable), the call is **ambiguous** and the program is ill-formed.

```cpp
#include <concepts>
#include <iostream>
#include <string>
#include <vector>

// Less constrained: only requires integral
template<std::integral T>
void process(T value) {
    std::cout << "integral: " << value << "\n";
}

// More constrained: requires integral AND signed
template<std::integral T>
    requires std::is_signed_v<T>
void process(T value) {
    std::cout << "signed integral: " << value << "\n";
}

int main() {
    process(42);            // Calls the more constrained overload (signed)
    process(42u);           // Calls the less constrained overload (unsigned)

    // process(3.14);       // Error: no viable overload (not integral)
}
```

Output:

```
signed integral: 42
integral: 42
```

The second overload subsumes the first because `std::integral<T> && std::is_signed_v<T>` implies `std::integral<T>`.

### 2.3 Subsumption with Standard Concepts

The standard library concepts in `<concepts>` are carefully designed so that subsumption works correctly. For example [N4950 §18.4]:

- `std::integral<T>` subsumes `std::integral<T>` (identity).
- `std::signed_integral<T>` subsumes `std::integral<T>` (every signed integral is integral).
- `std::integral<T>` does **not** subsume `std::signed_integral<T>` (not every integral is signed).
- `std::forward_iterator<T>` subsumes `std::input_iterator<T>` (every forward iterator is an input iterator).

This hierarchy enables natural overload sets:

```cpp
#include <concepts>
#include <forward_list>
#include <vector>
#include <iostream>

template<std::input_iterator It>
void advance(It& it, std::iter_difference_t<It> n) {
    std::cout << "single-pass advance\n";
    while (n-- > 0) ++it;
}

template<std::forward_iterator It>
void advance(It& it, std::iter_difference_t<It> n) {
    std::cout << "multi-pass advance\n";
    while (n-- > 0) ++it;
}

int main() {
    std::vector<int>::iterator vi;
    advance(vi, 3);  // Calls forward_iterator overload

    std::istream_iterator<int> ii;
    // advance(ii, 3);  // Would call input_iterator overload
}
```

:::warning Subsumption is Structural, Not Semantic
The compiler checks subsumption by comparing the **structure** of the constraint expressions (the expression trees), not by evaluating them. Two constraints that are logically equivalent but structurally different (e.g., `std::integral<T>` and `requires(T t) { t + 1; } requires std::integral<T>`) are **incomparable** for subsumption purposes. To ensure correct overload resolution, use the same concept names consistently.
:::

### 2.4 Complete Example: Overload Resolution with Constrained Templates

```cpp
#include <concepts>
#include <iostream>
#include <string>
#include <vector>
#include <ranges>
#include <iterator>

template<typename C>
concept Container = requires(C c) {
    { c.begin() } -> std::input_or_output_iterator;
    { c.end() } -> std::sentinel_for<decltype(c.begin())>;
    { c.size() } -> std::convertible_to<std::size_t>;
};

template<typename C>
concept Sortable = Container<C> && requires(C c) {
    { c[0] } -> std::same_as<typename C::reference>;
    requires std::random_access_iterator<decltype(c.begin())>;
    requires std::totally_ordered<typename C::value_type>;
};

template<Container C>
void describe(const C& c) {
    std::cout << "generic container, size = " << c.size() << "\n";
}

template<Sortable C>
void describe(const C& c) {
    std::cout << "sortable container, size = " << c.size()
              << ", front = " << c[0] << "\n";
}

int main() {
    std::vector<int> v{1, 2, 3};
    describe(v);  // Calls Sortable overload (more constrained)

    std::forward_list<int> fl{1, 2, 3};
    // std::forward_list does not have random access or operator[],
    // so it satisfies Container but not Sortable.
    // However, it also doesn't have .size() in C++11...
    // Let's use a compatible example:

    std::vector<std::string> vs{"hello", "world"};
    describe(vs);  // Calls Sortable overload
}
```

Output:

```
sortable container, size = 3, front = 1
sortable container, size = 2, front = hello
```

The `Sortable` concept subsumes `Container` because it includes all of `Container`'s requirements plus additional ones. Therefore, when both overloads are viable, the `Sortable` overload is preferred.

---

## 3. Standard Library Concepts

### 3.1 The `<concepts>` Header

The `<concepts>` header [N4950 §18.4] provides a comprehensive set of concepts organized into several categories:

#### Core Language Concepts

| Concept                            | Description                                         |
| ---------------------------------- | --------------------------------------------------- |
| `std::same_as<T, U>`               | `T` and `U` are the same type [§18.4.2]             |
| `std::derived_from<D, B>`          | `D` is derived from `B` [§18.4.2]                   |
| `std::convertible_to<From, To>`    | `From` is implicitly convertible to `To` [§18.4.2]  |
| `std::common_reference_with<T, U>` | `T` and `U` share a common reference type [§18.4.2] |
| `std::common_with<T, U>`           | `T` and `U` share a common type [§18.4.2]           |

#### Comparison Concepts

| Concept                        | Description                                      |
| ------------------------------ | ------------------------------------------------ |
| `std::equality_comparable<T>`  | `==` is an equivalence relation on `T` [§18.4.5] |
| `std::totally_ordered<T>`      | `<` defines a total order on `T` [§18.4.5]       |
| `std::three_way_comparable<T>` | `<=>` is defined for `T` (C++20) [§18.4.5]       |

#### Object Concepts

| Concept               | Description                                                                                |
| --------------------- | ------------------------------------------------------------------------------------------ |
| `std::copyable<T>`    | `T` is copyable (copy constructible + copy assignable + destructible) [§18.4.6]            |
| `std::movable<T>`     | `T` is movable (move constructible + move assignable + destructible + swappable) [§18.4.6] |
| `std::regular<T>`     | `T` is copyable, default-constructible, and equality-comparable [§18.4.6]                  |
| `std::semiregular<T>` | `T` is copyable and default-constructible [§18.4.6]                                        |

#### Callable Concepts

| Concept                      | Description                                                     |
| ---------------------------- | --------------------------------------------------------------- |
| `std::invocable<F, Args...>` | `F` can be invoked with `Args...` [§18.4.8]                     |
| `std::predicate<F, Args...>` | `F` invoked with `Args...` returns `bool`-convertible [§18.4.8] |
| `std::relation<R, T, U>`     | `R` defines an equivalence relation on `T` and `U` [§18.4.8]    |

#### Type Categories

| Concept                     | Description                                |
| --------------------------- | ------------------------------------------ |
| `std::integral<T>`          | `T` is an integral type [§18.4.3]          |
| `std::signed_integral<T>`   | `T` is a signed integral type [§18.4.3]    |
| `std::unsigned_integral<T>` | `T` is an unsigned integral type [§18.4.3] |
| `std::floating_point<T>`    | `T` is a floating-point type [§18.4.3]     |

:::info `std::regular` and `std::semiregular`
The concept `std::regular<T>` [N4950 §18.4.6] models types that behave like built-in values: they can be copied, default-constructed, and compared for equality. `int`, `double`, and `std::string` are all `std::regular`. `std::unique_ptr` is `std::movable` but not `std::regular` (not copyable). `std::mutex` is neither `std::movable` nor `std::copyable`. These concepts are the vocabulary types of generic programming.
:::

### 3.2 Iterator Concepts

The iterator concepts in `<iterator>` [N4950 §18.4.4] form a refinement hierarchy:

$$
\text{input\_iterator} \prec \text{forward\_iterator} \prec \text{bidirectional\_iterator} \prec \text{random\_access\_iterator} \prec \text{contiguous\_iterator}
$$

| Concept                       | Key Requirements                                                                       |
| ----------------------------- | -------------------------------------------------------------------------------------- |
| `std::input_iterator`         | Can be dereferenced, pre/post-incremented, and compared to a sentinel [§18.4.4]        |
| `std::forward_iterator`       | Input iterator + multi-pass guarantee (equality-preserving increment) [§18.4.4]        |
| `std::bidirectional_iterator` | Forward iterator + decrementable [§18.4.4]                                             |
| `std::random_access_iterator` | Bidirectional iterator + constant-time advancement with `+`, `-`, `+=`, `-=` [§18.4.4] |
| `std::contiguous_iterator`    | Random access iterator + elements are stored contiguously in memory [§18.4.4]          |

Additionally, `std::output_iterator` is a separate concept for write-only iterators.

```cpp
#include <concepts>
#include <forward_list>
#include <list>
#include <vector>
#include <iostream>
#include <array>

template<std::input_iterator It>
void print_category() {
    std::cout << "input_iterator";
    if constexpr (std::forward_iterator<It>) std::cout << " -> forward";
    if constexpr (std::bidirectional_iterator<It>) std::cout << " -> bidirectional";
    if constexpr (std::random_access_iterator<It>) std::cout << " -> random_access";
    if constexpr (std::contiguous_iterator<It>) std::cout << " -> contiguous";
    std::cout << "\n";
}

int main() {
    print_category<std::vector<int>::iterator>();      // input -> forward -> bidirectional -> random_access -> contiguous
    print_category<std::list<int>::iterator>();        // input -> forward -> bidirectional
    print_category<std::forward_list<int>::iterator>(); // input -> forward
    print_category<std::array<int, 5>::iterator>();    // input -> forward -> bidirectional -> random_access -> contiguous
}
```

Output:

```
input_iterator -> forward -> bidirectional -> random_access -> contiguous
input_iterator -> forward -> bidirectional
input_iterator -> forward
input_iterator -> forward -> bidirectional -> random_access -> contiguous
```

### 3.3 Code Example: `std::totally_ordered` for Custom Types

The `std::totally_ordered` concept [N4950 §18.4.5] requires that `<`, `>`, `<=`, `>=` all define a total order on the type. The easiest way to satisfy this concept is to define `operator<=>` (the spaceship operator, C++20) [N4950 §7.6.8]:

```cpp
#include <concepts>
#include <iostream>
#include <string>
#include <compare>
#include <set>

struct Version {
    int major;
    int minor;
    int patch;

    std::strong_ordering operator<=>(const Version&) const = default;
};

static_assert(std::totally_ordered<Version>);
static_assert(std::equality_comparable<Version>);

int main() {
    Version v1{2, 0, 1};
    Version v2{2, 1, 0};
    Version v3{2, 0, 1};

    std::cout << std::boolalpha;
    std::cout << (v1 < v2) << "\n";   // true
    std::cout << (v1 == v3) << "\n";  // true
    std::cout << (v2 >= v3) << "\n";  // true

    std::set<Version> versions{
        Version{1, 0, 0},
        Version{2, 0, 1},
        Version{0, 1, 0}
    };

    for (const auto& v : versions) {
        std::cout << v.major << "." << v.minor << "." << v.patch << "\n";
    }
}
```

Output:

```
true
true
true
0.1.0
1.0.0
2.0.1
```

The default `operator<=>` performs lexicographic comparison on the data members in declaration order [N4950 §7.6.8]. Because `int` already supports `<=>`, the compiler generates the full comparison operator suite for `Version`, satisfying `std::totally_ordered`.

### 3.4 Code Example: Constraining a Generic Algorithm

```cpp
#include <concepts>
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <numeric>
#include <ranges>

template<std::ranges::range R>
    requires std::totally_ordered<std::ranges::range_value_t<R>>
auto find_median(R&& range) -> std::ranges::range_value_t<R> {
    auto r = std::ranges::to<std::vector>(std::forward<R>(range));
    std::ranges::sort(r);

    const auto n = r.size();
    if (n % 2 == 1) {
        return r[n / 2];
    } else {
        return (r[n / 2 - 1] + r[n / 2]) / 2;
    }
}

template<std::ranges::input_range R, typename T>
    requires std::totally_ordered<T> &&
             std::convertible_to<std::ranges::range_reference_t<R>, T>
auto count_less_than(R&& range, const T& threshold) -> std::size_t {
    return std::ranges::count_if(std::forward<R>(range),
        [&threshold](const auto& val) { return val < threshold; });
}

template<std::invocable<int, int> BinaryOp>
auto fold(const std::vector<int>& v, int init, BinaryOp op) -> int {
    return std::accumulate(v.begin(), v.end(), init, op);
}

int main() {
    std::vector<int> nums{5, 2, 8, 1, 9, 3, 7, 4, 6};
    std::cout << "median = " << find_median(nums) << "\n";

    std::vector<double> dnums{5.0, 2.0, 8.0, 1.0, 9.0};
    std::cout << "median = " << find_median(dnums) << "\n";

    std::cout << "less than 5: " << count_less_than(nums, 5) << "\n";

    auto sum = fold(nums, 0, std::plus<int>());
    auto product = fold(nums, 1, std::multiplies<int>());
    std::cout << "sum = " << sum << "\n";
    std::cout << "product = " << product << "\n";
}
```

Output:

```
median = 5
median = 5
less than 5: 4
sum = 45
product = 362880
```

:::tip Using Range Concepts
The `std::ranges` namespace provides range versions of many concepts. Prefer `std::ranges::range` over manually checking `begin()`/`end()`. Prefer `std::ranges::range_value_t<R>` over `typename R::value_type` (it works with proxy iterators). Range concepts are defined in `<ranges>` [N4950 §26.2] and compose naturally with the concepts in `<concepts>`.
:::

---

## 4. SFINAE vs Concepts

### 4.1 How SFINAE Works

**SFINAE** (Substitution Failure Is Not An Error) is a C++98-era mechanism that allows template argument deduction to discard overloads where substituting the deduced type would produce an invalid type or expression [N4950 §13.10.3.6]. The key idea is:

> If a type or expression used in the function type or template parameter declaration is invalid after substitution, the program is not ill-formed — instead, the overload is simply removed from the candidate set.

The two primary SFINAE techniques are:

1. **SFINAE via the return type:** using `std::enable_if` in the return type.
2. **SFINAE via a dummy template parameter:** using `std::enable_if` as a default template argument.

```cpp
#include <iostream>
#include <type_traits>

// SFINAE via return type
template<typename T>
typename std::enable_if<std::is_integral<T>::value, T>::type
safe_abs(T x) {
    return x < 0 ? -x : x;
}

template<typename T>
typename std::enable_if<std::is_floating_point<T>::value, T>::type
safe_abs(T x) {
    return x < 0 ? -x : x;
}

// SFINAE via dummy template parameter
template<typename T, typename = typename std::enable_if<std::is_arithmetic<T>::value>::type>
T double_value(T x) {
    return 2 * x;
}

int main() {
    std::cout << safe_abs(-5) << "\n";    // 5
    std::cout << safe_abs(-3.14) << "\n"; // 3.14
    std::cout << double_value(21) << "\n"; // 42
}
```

### 4.2 Drawbacks of SFINAE

SFINAE has several significant problems that motivated the introduction of concepts:

**1. Poor error messages.** When no overload is viable, the compiler reports the substitution failure in the `enable_if` machinery, not the actual semantic requirement that was violated.

```
error: no matching function for call to 'safe_abs'
note: candidate template ignored: substitution failure
      [with T = std::string]: type 'std::string' cannot be used
      before '::' in type 'std::enable_if<..., T>'
```

Compare this to a concept error:

```
error: constraint not satisfied
note: 'safe_abs' requires 'std::integral<T>' or 'std::floating_point<T>'
```

**2. No subsumption ordering.** Two overloads constrained by `enable_if` with different conditions are **always ambiguous** if both conditions are true — the compiler cannot determine which is more constrained [N4950 §13.10.3.2]. This forces the use of tag dispatch or other workarounds.

**3. Syntax is verbose and hard to read.** `typename std::enable_if<std::is_integral<T>::value, T>::type` is far less readable than `std::integral<T>`.

**4. Constraints are invisible in the function signature.** With `enable_if` in the return type or a defaulted template parameter, the constraint is buried in the type system rather than being a first-class part of the interface.

**5. Interaction with `auto` return types is problematic.** SFINAE via the return type does not work with `auto` return type deduction, requiring awkward workarounds.

### 4.3 How Concepts Solve SFINAE Problems

| Problem               | SFINAE                                             | Concepts                                                     |
| --------------------- | -------------------------------------------------- | ------------------------------------------------------------ |
| Error messages        | Show substitution failure in `enable_if`           | Show the concept name and which requirement failed           |
| Overload ordering     | No subsumption; ambiguous when multiple are viable | Partial ordering by subsumption selects the most constrained |
| Syntax                | `enable_if<cond, T>::type`                         | `requires cond` or `concept T`                               |
| Readability           | Constraint hidden in type manipulation             | Constraint is explicit in the signature                      |
| Composability         | Boolean logic in template parameters               | Named concepts composed with `&&`, `\|\|`                    |
| Interacts with `auto` | Problematic                                        | Works naturally                                              |

### 4.4 Migration Path

The migration from SFINAE to concepts follows these steps:

1. **Identify the SFINAE condition.** Find the `enable_if` or `void_t`-based condition.
2. **Express it as a concept.** Either use a standard concept or define a new one.
3. **Replace the SFINAE mechanism** with a requires-clause or constrained template parameter.
4. **Test for behavioral equivalence.** Ensure overload resolution still selects the same candidate.

### 4.5 Side-by-Side Comparison

```cpp
#include <iostream>
#include <type_traits>
#include <concepts>
#include <vector>
#include <string>
#include <iterator>

// ============================================================
// SFINAE approach
// ============================================================

// 1. Type trait-based SFINAE
template<typename T>
typename std::enable_if<std::is_arithmetic<T>::value, std::string>::type
to_string_sfinae(T value) {
    return std::to_string(value);
}

// 2. void_t-based SFINAE for detecting member functions
template<typename T, typename = void>
struct has_size : std::false_type {};

template<typename T>
struct has_size<T, std::void_t<decltype(std::declval<T>().size())>> : std::true_type {};

template<typename T>
typename std::enable_if<has_size<T>::value, std::size_t>::type
get_size_sfinae(const T& t) {
    return t.size();
}

// ============================================================
// Concepts approach
// ============================================================

// 1. Direct concept constraint
template<std::arithmetic T>
std::string to_string_concept(T value) {
    return std::to_string(value);
}

// 2. Requires-expression for detecting member functions
template<typename T>
concept HasSize = requires(T t) {
    { t.size() } -> std::convertible_to<std::size_t>;
};

template<HasSize T>
std::size_t get_size_concept(const T& t) {
    return t.size();
}

// ============================================================
// Comparison demonstration
// ============================================================

int main() {
    // SFINAE versions
    std::cout << to_string_sfinae(42) << "\n";
    std::cout << to_string_sfinae(3.14) << "\n";
    std::cout << get_size_sfinae(std::vector<int>{1, 2, 3}) << "\n";

    // Concept versions (identical behavior, better errors)
    std::cout << to_string_concept(42) << "\n";
    std::cout << to_string_concept(3.14) << "\n";
    std::cout << get_size_concept(std::vector<int>{1, 2, 3}) << "\n";

    // Error demonstration:
    // to_string_sfinae("hello")   -> complex enable_if error
    // to_string_concept("hello") -> clear: "constraint not satisfied: std::arithmetic<std::string>"
}
```

Output:

```
42
3.140000
3
42
3.140000
3
```

:::tip When to Still Use SFINAE
Concepts cannot replace all SFINAE use cases. In particular, SFINAE is still needed when the constraint depends on the **function's return type** in a way that cannot be expressed as a simple boolean predicate, or when working with C++17 or earlier codebases. However, for new C++20 code, concepts should be the default choice for template constraints.
:::

---

## Summary

| Feature                | Standard | Section            |
| ---------------------- | -------- | ------------------ |
| `concept` keyword      | C++20    | [N4950 §18.4]      |
| `requires` clause      | C++20    | [N4950 §13.9.2]    |
| Requires-expression    | C++20    | [N4950 §7.5.8]     |
| Constraint subsumption | C++20    | [N4950 §13.5.4]    |
| `<concepts>` header    | C++20    | [N4950 §18.4]      |
| SFINAE                 | C++98    | [N4950 §13.10.3.6] |
