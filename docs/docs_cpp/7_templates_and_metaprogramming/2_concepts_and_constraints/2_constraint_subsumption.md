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

## Proof: Partially-Ordered Overloads Are Preferred

**Claim:** When two viable function templates have constraints $P$ and $Q$, and $P$ subsumes $Q$ but
$Q$ does not subsume $P$, the overload with constraint $P$ is unambiguously preferred.

**Proof:**

1. By [N4950 §13.5.4/1], a constraint $P$ _subsumes_ a constraint $Q$ if, after normalizing both
   constraints into sets of atomic constraints, every atomic constraint in $P$'s normalized set is
   subsumed by at least one atomic constraint in $Q$'s normalized set, using the template parameter
   mapping.

2. Subsumption is a **preorder** (reflexive and transitive) on the set of constraints. It is not a
   total order --- some constraints are incomparable.

3. The partial ordering of constraints induces a partial ordering on the set of viable function
   templates. If $f_1$ has constraint $P$ and $f_2$ has constraint $Q$, and $P \succ Q$ (strict
   subsumption), then $f_1$ is _more constrained_ than $f_2$ [N4950 §13.10.3.2/1].

4. [N4950 §13.10.3.2/1] states: "a viable function $F_1$ is defined to be a better function than
   another viable function $F_2$ if ... $F_1$'s associated constraints subsume $F_2$'s associated
   constraints and $F_2$'s associated constraints do not subsume $F_1$'s associated constraints."

5. The "better function" rule is applied in overload resolution [N4950 §13.10.3]. If exactly one
   viable function is better than all others, it is selected. If no unique best function exists, the
   call is ambiguous.

6. When $P \succ Q$ strictly (subsumes but is not subsumed by), $f_1$ is the unique best function.
   No ambiguity arises.

7. When $P \succeq Q$ and $Q \succeq P$ (both subsume each other, i.e., the constraints are
   equivalent), neither function is strictly better than the other. The call is ambiguous.

8. When neither $P \succeq Q$ nor $Q \succeq P$ (the constraints are incomparable), neither function
   is better than the other. The call is ambiguous.

Therefore, partially-ordered overloads with strict subsumption are unambiguously resolved, while
equivalent or incomparable constraints produce ambiguity. $\blacksquare$

**Corollary:** For subsumption to work correctly, constraints must be written in a structurally
comparable form. Two constraints that are logically equivalent but structurally different are
incomparable for subsumption purposes, leading to ambiguity.

**Corollary:** Negated constraints (`!C`) are incomparable with all other constraints because
negation does not preserve subsumption ordering. A constraint `!std::integral<T>` is incomparable
with `std::floating_point<T>` even though, set-theoretically, every floating-point type is
non-integral.

## Normal Form of Constraints

Before performing subsumption, the compiler normalizes constraints into a **disjunctive normal form
(DNF)** --- a disjunction of conjunctions of atomic constraints [N4950 §13.5.4.1]:

$$
C = (a_1 \land a_2 \land \ldots) \lor (b_1 \land b_2 \land \ldots) \lor \ldots
$$

Each disjunct $(a_1 \land a_2 \land \ldots)$ is a conjunction of atomic constraints. The DNF
representation is unique (up to reordering) for a given constraint expression.

**Normalization algorithm:**

1. Replace each concept-id `Concept<T, Args...>` with its definition's normalized constraint
   (recursively).
2. Apply the distributive law to convert to DNF:
   - $(A \land B) \lor C \to (A \lor C) \land (B \lor C)$
3. Collect atomic constraints within each conjunction.
4. Remove duplicate atomic constraints within each conjunction.

**Example:**

```cpp
template<typename T>
concept A = std::integral<T>;

template<typename T>
concept B = std::signed_integral<T>;

template<typename T>
concept C = A<T> && (B<T> || std::floating_point<T>);
```

The normalization of `C<T>` proceeds as follows:

1. Expand `A<T>` to `std::integral<T>`.
2. Expand `B<T>` to `std::signed_integral<T>`.
3. `C<T>` becomes `std::integral<T> && (std::signed_integral<T> || std::floating_point<T>)`.
4. Apply distributive law:
   `(std::integral<T> && std::signed_integral<T>) || (std::integral<T> && std::floating_point<T>)`.

The DNF is two disjuncts:

- Disjunct 1: `std::integral<T> && std::signed_integral<T>`
- Disjunct 2: `std::integral<T> && std::floating_point<T>`

For subsumption, the compiler checks that every atomic constraint in each disjunct of $P$ is
subsumed by at least one atomic constraint in the corresponding disjunct of $Q$.

## Atomic Constraints and Their Combination

An **atomic constraint** is the smallest unit of constraint checking [N4950 §13.5.4.1]. It consists
of an expression and a template parameter mapping. The atomic constraint is satisfied if and only
if:

1. The template arguments are successfully substituted into the expression.
2. The resulting expression is `true`.

An atomic constraint is identified by its **structural form** --- the expression tree, including the
template parameter mapping. Two atomic constraints are the same if and only if their expression
trees are identical (same tokens, same structure) and their template parameter mappings are
equivalent.

**Critical implication:** Two atomic constraints that are logically equivalent but syntactically
different are considered **different** constraints. For example:

```cpp
template<typename T>
concept IsInt1 = std::is_same_v<T, int>;

template<typename U>
concept IsInt2 = std::is_same_v<U, int>;
```

When comparing `IsInt1<T>` and `IsInt2<T>`, the compiler maps `T` (from the first concept) to `T`
(from the second concept) and then compares the expression trees. Both reduce to
`std::is_same_v<T, int>`, so they are structurally identical and subsume each other.

But consider:

```cpp
template<typename T>
concept IsIntA = std::integral<T> && std::is_same_v<T, int>;

template<typename T>
concept IsIntB = std::is_same_v<T, int> && std::integral<T>;
```

Both normalize to the same set of atomic constraints: `{std::integral<T>, std::is_same_v<T, int>}`.
The ordering of conjunctions does not matter for normalization. Both subsume each other.

However:

```cpp
template<typename T>
concept IsIntC = requires(T t) { requires std::is_same_v<T, int>; };
```

This introduces a `requires`-expression with a local parameter `t`. The atomic constraint inside the
`requires`-expression has a different structural form than `std::is_same_v<T, int>`. Even though
they are logically equivalent, the compiler considers them structurally different, and they are
incomparable for subsumption.

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

## Interaction with Non-Template Overloads

When a non-template function competes with a constrained function template, the standard overload
resolution rules apply [N4950 §13.10.3]. A non-template function is preferred over a function
template when the signatures are otherwise equally good matches. However, if the non-template
function's signature requires an implicit conversion that the template does not, the template may be
preferred.

```cpp
#include <concepts>
#include <iostream>

void process(int x) {
    std::cout << "non-template int: " << x << "\n";
}

template<std::integral T>
void process(T x) {
    std::cout << "template integral: " << x << "\n";
}

int main() {
    process(42);    // Calls non-template: exact match on non-template preferred
    process(42L);   // Calls template: long matches T exactly; non-template requires conversion
    // process(3.14); // Error: template not viable (not integral), no non-template match
}
```

Output:

```
non-template int: 42
template integral: 42
```

The rule is: when both a non-template and a template are viable, the non-template is preferred if
and only if the argument conversions are equally good [N4950 §13.10.3.2]. For `process(42)`, both
are exact matches, so the non-template wins. For `process(42L)`, the template is an exact match
(`T = long`) while the non-template requires a narrowing conversion (`long` to `int`), so the
template wins.

**Key insight:** Constraints do not make a template "better" than a non-template function. The
partial ordering rules for constraints only apply between constrained function templates. A
non-template function and a constrained template are compared using the standard overload resolution
tie-breaking rules (non-template preferred on a tie).

```cpp
#include <concepts>
#include <iostream>

// Overloaded on signed vs unsigned via concepts
template<std::signed_integral T>
void classify(T x) {
    std::cout << "signed: " << x << "\n";
}

template<std::unsigned_integral T>
void classify(T x) {
    std::cout << "unsigned: " << x << "\n";
}

// Non-template overload for bool specifically
void classify(bool b) {
    std::cout << "bool: " << b << "\n";
}

int main() {
    classify(42);     // signed: 42
    classify(42u);    // unsigned: 42
    classify(true);   // bool: 1 (non-template wins; bool matches bool exactly)
}
```

Note that `bool` satisfies `std::signed_integral` (on most implementations where `bool` is treated
as a signed integral type). But the non-template overload for `bool` is preferred because it is an
exact match without requiring template instantiation.

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
second template) and determines that they are equivalent. This results in **ambiguity** --- neither
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
However, packs of different sizes are inherently incomparable --- a constraint requiring "at least
two integral types" cannot structurally subsume one requiring "at least one integral type" using
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
during overload resolution --- the compiler selects based on argument count before applying
constraint subsumption.

## Detailed Subsumption Examples

### Example 1: Three-Level Hierarchy

```cpp
#include <concepts>
#include <iostream>

template<typename T>
concept Number = std::integral<T> || std::floating_point<T>;

template<typename T>
concept ExactNumber = Number<T> && std::is_signed_v<T>;

template<typename T>
concept PreciseNumber = ExactNumber<T> && std::floating_point<T>;

template<Number T>
void classify(T) { std::cout << "number\n"; }

template<ExactNumber T>
void classify(T) { std::cout << "exact number\n"; }

template<PreciseNumber T>
void classify(T) { std::cout << "precise number\n"; }

int main() {
    classify(42u);     // "number" (unsigned int: Number, not ExactNumber)
    classify(42);      // "exact number" (int: Number, ExactNumber, not PreciseNumber)
    classify(3.14);    // "precise number" (double: Number, ExactNumber, PreciseNumber)
}
```

The subsumption chain is: `PreciseNumber` $\succ$ `ExactNumber` $\succ$ `Number`. For `double`, all
three are viable, and `PreciseNumber` is the most constrained. For `int`, only `Number` and
`ExactNumber` are viable, and `ExactNumber` is more constrained. For `unsigned int`, only `Number`
is viable.

### Example 2: Incomparable Constraints (Ambiguity)

```cpp
#include <concepts>
#include <iostream>

template<typename T>
    requires std::integral<T>
void dispatch(T) { std::cout << "integral\n"; }

template<typename T>
    requires std::same_as<T, int> || std::same_as<T, long>
void dispatch(T) { std::cout << "int or long\n"; }

int main() {
    dispatch(42);   // AMBIGUOUS
    // dispatch(42L); // AMBIGUOUS
    // dispatch(short{1}); // OK: "integral" (only first viable)
}
```

For `T = int`: the first constraint requires `std::integral<int>` (true). The second requires
`std::same_as<int, int> || std::same_as<int, long>` (true). Neither subsumes the other because
`std::integral<T>` and `std::same_as<T, int>` are structurally different atomic constraints.

**Fix:** Make one constraint clearly more restrictive:

```cpp
template<typename T>
    requires std::integral<T>
void dispatch(T) { std::cout << "integral\n"; }

template<std::same_as<int> T>
void dispatch(T) { std::cout << "exactly int\n"; }

// Now std::same_as<int> does not subsume std::integral<T>
// but std::integral<T> does not subsume std::same_as<int>
// Still ambiguous! The fix requires a proper refinement:
```

The correct fix uses concept refinement:

```cpp
template<std::integral T>
void dispatch(T) { std::cout << "integral\n"; }

template<std::integral T>
    requires std::same_as<T, int>
void dispatch(T) { std::cout << "exactly int\n"; }

// Now the second constraint = std::integral<T> && std::same_as<T, int>
// This subsumes std::integral<T>
```

### Example 3: Disjunction and Subsumption Failure

```cpp
#include <concepts>
#include <iostream>

template<typename T>
concept A = std::integral<T>;

template<typename T>
concept B = std::integral<T> || std::floating_point<T>;

template<A T>
void f(T) { std::cout << "A\n"; }

template<B T>
void f(T) { std::cout << "B\n"; }

int main() {
    f(42);   // AMBIGUOUS: A<T> does not subsume B<T>, B<T> does not subsume A<T>
}
```

This is counterintuitive. Even though `A<T>` is "more restrictive" than `B<T>` (every integral type
is either integral or floating-point), the subsumption check is **structural**, not semantic. The
normalized form of `B<T>` is `std::integral<T> || std::floating_point<T>`, which is a
**disjunction**. The conjunction rule for subsumption does not apply to disjunctions.

**The fix:** Write the refinement explicitly:

```cpp
template<typename T>
concept B = std::integral<T> || std::floating_point<T>;

template<typename T>
concept A = B<T> && std::integral<T>;

// Now A = (std::integral<T> || std::floating_point<T>) && std::integral<T>
// Normalized: std::integral<T>
// A subsumes B? No, because B is a disjunction.
// B subsumes A? No, because B is less restrictive.
// Still ambiguous!
```

The fundamental issue is that **disjunction breaks subsumption**. When a concept uses `||`, it
creates multiple disjuncts, and the subsumption rules do not handle the case where one constraint's
conjunct is a subset of another constraint's disjunct.

**Practical workaround:** Avoid disjunction in concepts that participate in overload sets. Instead,
use mutually exclusive concepts or explicit overloads for each disjunct:

```cpp
template<std::integral T>
void f(T) { std::cout << "integral\n"; }

template<std::floating_point T>
void f(T) { std::cout << "floating_point\n"; }
```

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

## Subsumption in Practice: Design Rules

The most reliable pattern for overload sets with concepts is the **refinement hierarchy**: use
conjunction (`&&`) to progressively refine a base concept. This guarantees that each level subsumes
the previous.

**Rules for reliable subsumption:**

1. Use conjunction (`&&`) to refine concepts, never disjunction (`||`).
2. Use the same structural form for constraints across overloads (same concept names, same parameter
   positions).
3. Avoid `requires`-expressions with local parameters in overloads that need to be ordered.
4. Test subsumption with `static_assert` to catch structural mismatches early.

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

- **Disjunction in concepts breaks subsumption.** A concept defined as `A || B` cannot be compared
  via subsumption with a concept defined as `A`. Even though `A` is more restrictive than `A || B`,
  the structural subsumption rules do not handle this case. Avoid `||` in concepts used for overload
  resolution.

- **Parameter name differences across concepts.** `concept A = requires(T t) { ... }` and
  `concept B = requires(U u) { ... }` are structurally different even if the bodies are identical,
  because the parameter names differ. The compiler normalizes by mapping template parameters, but
  the local parameter names in requires-expressions are part of the structural form. Always use
  consistent parameter names when you need subsumption.

- **Class template partial specializations with concepts.** Unlike function template overloads,
  class template partial specializations do not use constraint subsumption for ordering. They use
  partial specialization ordering rules [N4950 §13.7.6.1], which are based on the template argument
  pattern, not the constraint expression. Do not assume that concept subsumption will select the
  correct class template partial specialization.
