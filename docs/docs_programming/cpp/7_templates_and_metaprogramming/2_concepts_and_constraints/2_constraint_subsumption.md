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

:::warning
Subsumption is Structural, Not Semantic The compiler checks subsumption by comparing the
**structure** of the constraint expressions (the expression trees), not by evaluating them. Two
constraints that are logically equivalent but structurally different (e.g., `std::integral<T>` and
`requires(T t) { t + 1; } requires std::integral<T>`) are **incomparable** for subsumption purposes.
To ensure correct overload resolution, use the same concept names consistently.
:::

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

## Subsumption and `requires` Expressions

A `requires` expression introduces a local scope with template parameters that are checked for
validity. These expressions participate in subsumption based on their structural form [N4950
§7.1.8].

```cpp
#include <concepts>
#include <iostream>
#include <string>

// Constraint P: uses a requires-expression
template<typename T>
concept Hashable = requires(T t) {
    { std::hash<T>{}(t) } -> std::convertible_to<std::size_t>;
};

// Constraint Q: uses a conjunction that includes P
template<typename T>
concept Serializable = Hashable<T> && requires(T t) {
    { t.serialize() } -> std::convertible_to<std::string>;
};

// Q subsumes P because Q = P && additional_requirement
template<Hashable T>
void process(const T& val) {
    std::cout << "hashable\n";
}

template<Serializable T>
void process(const T& val) {
    std::cout << "serializable and hashable\n";
}

struct MyData {
    std::string serialize() const { return "data"; }
};

namespace std {
    template<> struct hash<MyData> {
        std::size_t operator()(const MyData&) const { return 42; }
    };
}

int main() {
    MyData d;
    process(d);  // Calls Serializable overload (more constrained)
}
```

### Atomic Constraints and Normalization

The compiler normalizes constraints into a set of **atomic constraints** before performing
subsumption. An atomic constraint is an expression that cannot be decomposed further into
conjunctions or disjunctions [N4950 §13.5.4.1].

For `Sortable = Container && RandomAccess && TotallyOrdered`, the atomic constraints are:

1. `Container<T>` (itself a normalized set of atomic constraints from its definition)
2. `std::random_access_iterator<decltype(C::begin())>`
3. `std::totally_ordered<typename C::value_type>`

Subsumption checks each atomic constraint individually: if every atomic constraint of $P$ is
subsumed by at least one atomic constraint of $Q$, then $P$ is subsumed by $Q$.

### Parameter Mapping in Subsumption

When comparing two constrained templates, the compiler maps template parameters between the two
constraint sets. This is where structural equivalence matters:

```cpp
#include <concepts>
#include <iostream>

template<typename T>
concept IsIntegral = std::integral<T>;

template<typename U>
concept AlsoIntegral = std::integral<U>;

template<IsIntegral T>
void f(T) { std::cout << "IsIntegral\n"; }

template<AlsoIntegral T>
void f(T) { std::cout << "AlsoIntegral\n"; }
```

Here, `IsIntegral<T>` and `AlsoIntegral<T>` are **structurally identical** after normalization (both
reduce to `std::integral<T>`). The compiler maps `T` (from the first template) to `T` (from the
second template) and determines that they are equivalent. This results in **ambiguity** — neither
subsumes the other because subsumption requires strict "at least as restrictive," not "equally
restrictive."

To resolve this, make one clearly more restrictive:

```cpp
template<std::integral T>
void f(T) { std::cout << "integral\n"; }

template<std::signed_integral T>
void f(T) { std::cout << "signed integral\n"; }
```

Now `std::signed_integral<T>` subsumes `std::integral<T>` because every signed integral is also
integral.

---

## Requires Clauses with Local Parameters

The `requires` clause can introduce local template parameters using a
**requirement-parameter-list**. This is a common source of confusion because local parameters do not
participate in the outer template parameter mapping during subsumption.

```cpp
#include <concepts>
#include <iostream>

// Version A: constraint on T directly
template<typename T>
    requires std::integral<T>
void f(T) { std::cout << "A: integral T\n"; }

// Version B: constraint using a requires-expression with local parameter
template<typename T>
    requires requires(T x) { x + 1; }
void f(T) { std::cout << "B: T supports + 1\n"; }
```

These two constraints are **incomparable** for subsumption purposes, even if `T` is an `int`. The
requires-expression in Version B introduces a local parameter `x`, and the compiler cannot
structurally compare `std::integral<T>` with the compound requirement `x + 1`. The result is
ambiguity when `T` is `int`.

**Rule:** For subsumption to work correctly across overloads, use the same structural form for
constraints. Prefer concept names over ad-hoc requires-expressions when overloading.

---

## Fold Expressions and Conjunctions in Constraints

Constraints can use fold expressions to express "all types in a parameter pack satisfy a concept":

```cpp
#include <concepts>
#include <iostream>
#include <string>

template<typename... Ts>
concept AllIntegral = (std::integral<Ts> && ...);

template<typename... Ts>
concept AllSame = (std::same_as<Ts, std::tuple_element_t<0, std::tuple<Ts...>>> && ...);

template<typename... Ts>
    requires AllIntegral<Ts>
void print_sum(Ts... args) {
    std::cout << (args + ...) << "\n";
}

int main() {
    print_sum(1, 2, 3);       // OK: all int
    // print_sum(1, 2.0, 3);  // ERROR: double is not integral
}
```

### Subsumption with Pack Expansion Constraints

When comparing constrained variadic templates, subsumption is evaluated per-element in the pack.
However, packs of different sizes are inherently incomparable — a constraint requiring "at least two
integral types" cannot structurally subsume one requiring "at least one integral type" using
standard concept syntax.

```cpp
#include <concepts>
#include <iostream>

template<std::integral T>
void f(T) { std::cout << "single integral\n"; }

template<std::integral T, std::integral U>
void f(T, U) { std::cout << "two integrals\n"; }

int main() {
    f(42);        // Calls single integral overload
    f(1, 2);      // Calls two integrals overload
    // f(42, 3.14); // ERROR: no viable overload
}
```

In this case, the two overloads have different arity (1 vs 2 parameters), so they don't compete
during overload resolution — the compiler selects based on argument count before applying constraint
subsumption.

---

## Interaction with SFINAE and `enable_if`

C++20 concepts were designed to replace SFINAE-based constraints. When concepts and `enable_if` are
mixed in the same overload set, concepts take priority in the resolution order:

1. Template argument deduction eliminates non-deducible candidates.
2. Constraint satisfaction (concepts and `requires` clauses) eliminates unsatisfied candidates.
3. Partial ordering by constraints selects the most constrained candidate.
4. SFINAE from `enable_if` / `std::void_t` is checked as part of template argument deduction.

**Best practice:** Do not mix concepts and `enable_if` in the same overload set. Convert all
`enable_if` constraints to concepts for consistency and better error messages.

```cpp
// BAD: mixing SFINAE and concepts
template<typename T, std::enable_if_t<std::is_integral_v<T>, int> = 0>
void f(T) {}

template<std::integral T>
void f(T) {}  // Ambiguous with the enable_if version when T is integral

// GOOD: use concepts consistently
template<std::integral T>
void f(T) { std::cout << "integral\n"; }

template<std::signed_integral T>
void f(T) { std::cout << "signed integral\n"; }
```

---

## Constraint Subsumption and Class Templates

Concepts can also constrain class template partial specializations. Subsumption determines which
specialization is selected:

```cpp
#include <concepts>
#include <iostream>
#include <type_traits>

template<typename T>
struct Renderer {
    static void draw() { std::cout << "default renderer\n"; }
};

template<std::integral T>
struct Renderer<T> {
    static void draw() { std::cout << "integral renderer\n"; }
};

template<std::floating_point T>
struct Renderer<T> {
    static void draw() { std::cout << "floating-point renderer\n"; }
};

int main() {
    Renderer<int>::draw();       // integral renderer
    Renderer<double>::draw();    // floating-point renderer
    Renderer<std::string>::draw(); // default renderer
}
```

Partial specializations are selected by the most specialized match. If two specializations are
equally specialized, the program is ill-formed.

---

## Common Pitfalls

- **Structurally different but semantically equivalent constraints are incomparable.**
  `std::integral<T>` and `requires(T t) { t + 1; } requires std::integral<T>` may be logically
  equivalent but structurally different. The compiler cannot determine subsumption between them,
  leading to ambiguity. Use the same concept name consistently.
- **Forgetting that subsumption requires strict "more restrictive."** Two constraints that are
  exactly equally restrictive (e.g., two different concept names that normalize to the same atomic
  constraints) result in ambiguity, not preference. One must be strictly a superset.
- **Using `requires` expressions with local parameters in overloads.** Local parameters in
  `requires(T x) { ... }` do not participate in the template parameter mapping during subsumption.
  This makes the constraint structurally incomparable with other constraints. Prefer
  `requires std::integral<T>` (no local parameter) over `requires(T x) { x + x; }` (local parameter)
  when the constraint doesn't need to test specific operations on a parameter.
- **Concepts with `auto` in `requires` expressions.** `requires(auto x) { x.foo(); }` is less useful
  for subsumption because `auto` introduces a deduced type that may not map cleanly to the outer
  template parameters. Use explicit type parameters.
- **Negated constraints and subsumption.** `!std::integral<T>` does not subsume
  `std::floating_point<T>` even though all floating-point types are non-integral. The compiler
  compares constraint structure, not set-theoretic relationships.

:::
