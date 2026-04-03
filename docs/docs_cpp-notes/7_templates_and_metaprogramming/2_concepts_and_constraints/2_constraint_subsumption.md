---
title: Constraint Subsumption and Overload Resolution
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: constraint-subsumption-and-overload-resolution
---

# Constraint Subsumption and Overload Resolution

When multiple constrained function templates are viable for a call, the compiler uses
**subsumption** --- a partial ordering on constraints --- to select the most constrained candidate.
This mechanism eliminates the ambiguity problems that plagued SFINAE-based overload sets and enables
clean, readable overloading based on concept constraints.

## Partial Ordering of Constraints

The C++ standard defines a **partial ordering** on constraints called **subsumption** [N4950
§13.5.4]. Given two constraints $P$ and $Q$, we say $P$ **subsumes** $Q$ (written $P \succeq Q$) if
$P$ is at least as restrictive as $Q$ --- meaning that every set of template arguments satisfying
$P$ also satisfies $Q$.

Formally, for a constraint $P$ to subsume a constraint $Q$:

$$
\forall \text{substitutions } S : P(S) \implies Q(S)
$$

This is a structural comparison performed by the compiler, not a runtime check. The rules for
determining subsumption between constraint conjunctions and disjunctions are [N4950 §13.5.4.1]:

| $P$         | $Q$         | $P$ subsumes $Q$?                                         |
| ----------- | ----------- | --------------------------------------------------------- |
| $A \land B$ | $A$         | Yes (conjunction subsumes each conjunct)                  |
| $A$         | $A \land B$ | No (the conjunct is less restrictive)                     |
| $A$         | $A \lor B$  | Yes (disjunction is subsumed by each disjunct)            |
| $A \lor B$  | $A$         | No (the disjunction is less restrictive)                  |
| $A$         | $A$         | Yes (identical constraints subsume each other)            |
| $A$         | $B$         | Indeterminate (incomparable unless one implies the other) |

## How the Compiler Selects the Most Constrained Viable Function

When resolving a call to a constrained function template, the compiler follows this process [N4950
§13.10.3]:

1. **Name lookup** finds all candidate functions.
2. **Template argument deduction** determines the template arguments for each viable candidate.
3. **Constraint satisfaction** eliminates candidates whose constraints are not satisfied.
4. **Partial ordering by constraints** selects the most constrained candidate among the remaining
   viable functions.

If, after constraint subsumption, exactly one candidate is more constrained than all others, that
candidate is selected. If no unique most-constrained candidate exists (i.e., two candidates are
equally constrained or incomparable), the call is **ambiguous** and the program is ill-formed.

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

The second overload subsumes the first because `std::integral<T> && std::is_signed_v<T>` implies
`std::integral<T>`.

## Subsumption with Standard Concepts

The standard library concepts in `<concepts>` are carefully designed so that subsumption works
correctly. For example [N4950 §18.4]:

- `std::integral<T>` subsumes `std::integral<T>` (identity).
- `std::signed_integral<T>` subsumes `std::integral<T>` (every signed integral is integral).
- `std::integral<T>` does **not** subsume `std::signed_integral<T>` (not every integral is signed).
- `std::forward_iterator<T>` subsumes `std::input_iterator<T>` (every forward iterator is an input
  iterator).

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

:::warning Subsumption is Structural, Not Semantic The compiler checks subsumption by comparing the
**structure** of the constraint expressions (the expression trees), not by evaluating them. Two
constraints that are logically equivalent but structurally different (e.g., `std::integral<T>` and
`requires(T t) { t + 1; } requires std::integral<T>`) are **incomparable** for subsumption purposes.
To ensure correct overload resolution, use the same concept names consistently. :::

## Complete Example: Overload Resolution with Constrained Templates

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

The `Sortable` concept subsumes `Container` because it includes all of `Container`'s requirements
plus additional ones. Therefore, when both overloads are viable, the `Sortable` overload is
preferred.

## See Also

- [Defining Concepts and Requires Clauses](./1_defining_concepts.md)
- [Standard Library Concepts](./3_standard_concepts.md)
- [SFINAE vs Concepts](./4_sfinae_vs_concepts.md)
