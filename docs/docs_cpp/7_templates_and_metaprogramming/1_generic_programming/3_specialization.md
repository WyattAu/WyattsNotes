---
title: Explicit and Partial Specialization
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: explicit-and-partial-specialization
---

# Explicit and Partial Specialization

Specialization allows you to provide alternative implementations for specific sets of template
arguments. **Full specialization** replaces the primary template entirely for a specific type, while
**partial specialization** provides a pattern-matched alternative that the compiler selects using
partial ordering rules.

## Full Specialization

**Full (explicit) specialization** provides a completely separate definition for a specific set of
template arguments [N4950 S13.7.5]. The general template is called the **primary template**.

```cpp
#include <iostream>
#include <type_traits>
#include <string>

// Primary template [N4950 S13.7.5]
template <typename T, typename U>
struct is_same {
    static constexpr bool value = false;
};

// Full specialization for T == U
template <typename T>
struct is_same<T, T> {
    static constexpr bool value = true;
};

// The standard library version is std::is_same_v [N4950 S20.15.4.3].

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
Full specializations are **not** templates themselves --- they are concrete definitions.
They must be declared in the same namespace as the primary template. If you fully specialize a
function template, you must specialize every overload that participates in overload resolution.
:::

### Full Specialization of Function Templates

Function templates can be fully specialized, but this is rarely recommended because overloading
usually provides a better solution:

```cpp
#include <iostream>
#include <cstring>

// Primary function template
template <typename T>
T clamp(T value, T lo, T hi) {
    return value < lo ? lo : (value > hi ? hi : value);
}

// Full specialization for const char* -- but overloading is preferred!
template <>
const char* clamp<const char*>(const char* value, const char* lo, const char* hi) {
    if (std::strcmp(value, lo) < 0) return lo;
    if (std::strcmp(value, hi) > 0) return hi;
    return value;
}

int main() {
    std::cout << clamp(5, 0, 10) << "\n";         // 5
    std::cout << clamp(15, 0, 10) << "\n";        // 10
    std::cout << clamp("banana", "apple", "cherry") << "\n";  // banana
}
```

**Why overloading is preferred over function specialization:** Overloads participate in overload
resolution at the same level, while specializations do not. A full specialization of a function
template is only considered if the primary template is already the best match, which can lead to
surprising behavior. Per [N4950 S13.7.5/4], a full function template specialization is selected only
after overload resolution has already chosen the primary template. This means that a non-template
overload that is a better match will always be preferred over a specialization.

## Partial Specialization

**Partial specialization** allows you to specialize for a _subset_ of possible template arguments.
The primary template still exists for arguments that don't match any partial specialization. The
compiler selects the most specialized version using **partial ordering rules** [N4950 S13.7.5.5].

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

## Partial Ordering Rules

When multiple partial specializations match, the compiler uses **partial ordering** to select the
most specialized one [N4950 S13.7.5.5]. Informally, specialization $A$ is more specialized than $B$
if every type accepted by $A$ is also accepted by $B$, but not vice versa.

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

### Formal Partial Ordering Algorithm

The partial ordering algorithm [N4950 S13.7.5.5/2] works by **synthetic substitution**:

1. Given two partial specializations $A$ and $B$ that both match a given set of template arguments,
   the compiler attempts to determine which is "more specialized."

2. To test whether $A$ is at least as specialized as $B$, the compiler replaces each template
   parameter of $A$ with a **unique synthetic type** and checks whether the resulting pattern
   matches $B$. If it does, $A$ is at least as specialized as $B$.

3. The compiler then performs the same test in the other direction: replace each template parameter
   of $B$ with a unique synthetic type and check whether it matches $A$.

4. If $A$ matches $B$ but $B$ does not match $A$, then $A$ is more specialized. If both match each
   other, they are ambiguous. If neither matches the other, neither is more specialized.

**Proof that `T* const` is more specialized than `T*`.** Replace the `T` in `T* const` with a unique
type $U_{unique}$. The result is `U_{unique}* const`. Now check: does this match the pattern `T*`?
Yes, with `T = U_{unique} const`. Conversely, replace the `T` in `T*` with a unique type
$V_{unique}$. The result is `V_{unique}*`. Does this match the pattern `T* const`? No, because
`V_{unique}*` is not `const`-qualified. Therefore `T* const` is strictly more specialized than `T*`.

### Ordering Example: Pointers vs Arrays

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
struct TypeInfo { static const char* name() { return "unknown"; }; };

template <typename T>
struct TypeInfo<T*> { static const char* name() { return "pointer"; }; };

template <typename T, std::size_t N>
struct TypeInfo<T[N]> { static const char* name() { return "array"; }; };

int main() {
    std::cout << TypeInfo<int>::name() << "\n";     // "unknown"
    std::cout << TypeInfo<int*>::name() << "\n";    // "pointer"
    std::cout << TypeInfo<int[10]>::name() << "\n"; // "array"
    // Note: int[10] does NOT decay to int* for partial matching.
    // T[N] is more specialized than T* for array types.
}
```

### Proof That Ambiguous Specializations Are Ill-Formed

When two partial specializations are equally specialized, the program is ill-formed [N4950
S13.7.5.5/1]. The reasoning is as follows: partial ordering is a **strict weak ordering** on the set
of matching specializations. If neither $A \le B$ nor $B \le A$ holds (where $\le$ means "at least
as specialized as"), then $A$ and $B$ are **incomparable** under the ordering. Since the ordering
must produce a unique maximum element, incomparable elements represent an ambiguity, and the
standard requires a diagnostic.

```cpp
template <typename T>
struct Ambig {};

// Both specializations match Ambig<const int*> -- ambiguous!
template <typename T>
struct Ambig<const T*> {};     // matches: T = int

template <typename T>
struct Ambig<T* const> {};     // matches: T = const int

// Ambig<const int*> ai;  // ERROR: ambiguous partial specialization
```

**Proof of ambiguity.** Let $A$ = `const T*` and $B$ = `T* const`. Replace `T` in $A$ with a unique
type $U$: we get `const U*`. Does this match $B$ (`T* const`)? Yes, with $T = \mathrm{const }
U$. Now
replace `T` in $B$ with a unique type $V$: we get `V* const`. Does this match $A$ (`const T*`)? Yes,
with $T = V \mathrm{ const}$. Since $A$ matches $B$ **and** $B$ matches $A$, neither is strictly more
specialized. The program is ill-formed.

The fix is to provide a disambiguating specialization that is strictly more specialized than both:

```cpp
template <typename T>
struct Ambig<const T* const> {};  // Matches const pointers, strictly more specialized
// Now Ambig<const int*> still ambiguous between first two.
// The real fix is to avoid overlapping patterns entirely.
```

## Partial Specialization with SFINAE

Partial specializations can use SFINAE via constraints (C++20 `requires`) or `std::enable_if` to
select implementations based on type properties:

```cpp
#include <iostream>
#include <type_traits>
#include <string>
#include <vector>

// Primary template
template <typename T, typename = void>
struct element_type {
    using type = T;
};

// Partial specialization for containers with ::value_type
template <typename T>
struct element_type<T, std::void_t<typename T::value_type>> {
    using type = typename T::value_type;
};

template <typename T>
using element_type_t = typename element_type<T>::type;

// C++20 version using concepts
template <typename T>
struct element_type_cxx20 {
    using type = T;
};

template <typename T>
    requires requires { typename T::value_type; }
struct element_type_cxx20<T> {
    using type = typename T::value_type;
};

int main() {
    static_assert(std::is_same_v<element_type_t<int>, int>);
    static_assert(std::is_same_v<element_type_t<std::vector<int>>, int>);
    static_assert(std::is_same_v<element_type_t<std::string>, char>);
    static_assert(std::is_same_v<element_type_t<std::vector<std::string>>, std::string>);

    std::cout << "element_type works for primitives and containers\n";
}
```

### SFINAE in Specialization Contexts

SFINAE applies differently in partial specializations than in function template overload resolution.
In a partial specialization, the SFINAE check occurs when the compiler tries to match the
specialization pattern against the given template arguments. If the substitution of arguments into
the specialization pattern fails, the specialization is simply not considered --- it is not an
error:

```cpp
#include <iostream>
#include <type_traits>

// Primary template
template <typename T, typename = void>
struct has_size : std::false_type {};

// Partial specialization: enabled only if T has a .size() member function
template <typename T>
struct has_size<T, std::void_t<decltype(std::declval<T>().size())>>
    : std::true_type {};

struct Sized { std::size_t size() const { return 0; } };
struct NotSized {};

int main() {
    static_assert(has_size<Sized>::value);
    static_assert(!has_size<NotSized>::value);
    static_assert(!has_size<int>::value);
    std::cout << std::boolalpha;
    std::cout << has_size<Sized>::value << "\n";     // true
    std::cout << has_size<NotSized>::value << "\n";  // false
}
```

With C++20 constraints, the same pattern is cleaner and produces better error messages:

```cpp
#include <iostream>
#include <type_traits>
#include <vector>

template <typename T>
    requires requires(const T& t) { t.size(); }
std::size_t get_size(const T& obj) {
    return obj.size();
}

template <typename T>
std::size_t get_size(const T&) {
    return 0;
}

struct Custom { std::size_t size() const { return 42; } };

int main() {
    std::cout << get_size(std::vector<int>{1, 2, 3}) << "\n";  // 3
    std::cout << get_size(Custom{}) << "\n";                    // 42
    std::cout << get_size(42) << "\n";                          // 0
}
```

## Template Template Parameters

A **template template parameter** is a template parameter that is itself a template. This enables
specialization on the "shape" of a type:

```cpp
#include <iostream>
#include <vector>
#include <list>
#include <deque>

// Primary template: accepts any container of T
template <typename T, template <typename, typename> class Container>
struct ContainerInfo {
    static void print() {
        std::cout << "generic container\n";
    }
};

// Partial specialization for std::vector
template <typename T, typename Alloc>
struct ContainerInfo<T, std::vector> {
    static void print() {
        std::cout << "std::vector (contiguous, random-access)\n";
    }
};

// Partial specialization for std::list
template <typename T, typename Alloc>
struct ContainerInfo<T, std::list> {
    static void print() {
        std::cout << "std::list (doubly-linked, bidirectional)\n";
    }
};

int main() {
    ContainerInfo<int, std::vector>::print();  // std::vector (contiguous, ...)
    ContainerInfo<int, std::list>::print();    // std::list (doubly-linked, ...)
    ContainerInfo<int, std::deque>::print();   // generic container
}
```

### Template Template Parameter Matching (C++17)

C++17 relaxed the rules for template template parameter matching [N4950 S13.3.3]. Previously, a
template template parameter had to match the exact parameter list of the template argument
(including default arguments). C++17 allows a template template parameter with fewer parameters than
the template argument, as long as the parameters are deducible:

```cpp
#include <iostream>
#include <vector>

// C++17: OK even though std::vector has two template parameters (T, Allocator)
// The template template parameter Container only needs one (T).
template <typename T, template <typename> class Container>
class Adapter {
    Container<T> data_;
public:
    void add(const T& v) { data_.push_back(v); }
    std::size_t size() const { return data_.size(); }
};

int main() {
    Adapter<int, std::vector> a;
    a.add(1);
    a.add(2);
    std::cout << a.size() << "\n";  // 2
}
```

## Variadic Template Specialization

Variadic templates can be partially specialized to handle specific pack patterns:

```cpp
#include <iostream>

// Primary template: recursive case
template <typename... Ts>
struct Count {
    static constexpr std::size_t value = 1 + Count<Ts...>::value;
};

// Partial specialization: empty pack (base case)
template <>
struct Count<> {
    static constexpr std::size_t value = 0;
};

// Partial specialization: single type
template <typename T>
struct Count<T> {
    static constexpr std::size_t value = 1;
};

// Specialization pattern: first type + rest
template <typename First, typename... Rest>
struct Front {
    using type = First;
};

template <typename First, typename... Rest>
using Front_t = typename Front<First, Rest...>::type;

int main() {
    static_assert(Count<int, double, char>::value == 3);
    static_assert(Count<>::value == 0);
    static_assert(Count<int>::value == 1);

    static_assert(std::is_same_v<Front_t<int, double, char>, int>);
    static_assert(std::is_same_v<Front_t<char>, char>);

    std::cout << Count<int, double, char, float>::value << "\n";  // 4
}
```

### Variadic Specialization Patterns

Variadic partial specialization enables several important patterns. Here are the most common ones:

**Pattern 1: Head/tail decomposition.** Peel off the first element of a pack and recurse on the
rest. This is the foundation of most compile-time list algorithms:

```cpp
#include <iostream>
#include <type_traits>

// Head of a type list
template <typename... Ts>
struct Head;

template <typename First, typename... Rest>
struct Head<First, Rest...> {
    using type = First;
};

// Tail of a type list
template <typename... Ts>
struct Tail;

template <typename First, typename... Rest>
struct Tail<First, Rest...> {
    using type = Tail<Rest...>;
};

template <typename Last>
struct Tail<Last> {
    using type = Tail<>;
};

template <>
struct Tail<> {};

int main() {
    static_assert(std::is_same_v<Head<int, double, char>::type, int>);
    std::cout << "head works\n";
}
```

**Pattern 2: Filter a type list by predicate.**

```cpp
#include <iostream>
#include <type_traits>
#include <vector>

// Primary: empty list
template <template <typename> class Pred, typename... Ts>
struct Filter;

// Base case: empty list
template <template <typename> class Pred>
struct Filter<Pred> {
    using type = std::tuple<>;
};

// Recursive case: head satisfies predicate
template <template <typename> class Pred, typename Head, typename... Tail>
    requires Pred<Head>::value
struct Filter<Pred, Head, Tail...> {
    using type = decltype(
        std::tuple_cat(
            std::declval<std::tuple<Head>>(),
            std::declval<typename Filter<Pred, Tail...>::type>()
        ));
};

// Recursive case: head does not satisfy predicate
template <template <typename> class Pred, typename Head, typename... Tail>
    requires (!Pred<Head>::value)
struct Filter<Pred, Head, Tail...> {
    using type = typename Filter<Pred, Tail...>::type;
};

template <template <typename> class Pred, typename... Ts>
using Filter_t = typename Filter<Pred, Ts...>::type;

int main() {
    using Types = int, double, float, char;
    using Integers = Filter_t<std::is_integral, int, double, float, char>;
    // Integers is std::tuple<int, char>
    static_assert(std::is_same_v<Integers, std::tuple<int, char>>);
    std::cout << "filter works\n";
}
```

**Pattern 3: Concatenation of type lists.**

```cpp
#include <iostream>
#include <type_traits>

template <typename List1, typename List2>
struct Concat;

template <typename... T1s, typename... T2s>
struct Concat<std::tuple<T1s...>, std::tuple<T2s...>> {
    using type = std::tuple<T1s..., T2s...>;
};

template <typename L1, typename L2>
using Concat_t = typename Concat<L1, L2>::type;

int main() {
    using A = std::tuple<int, double>;
    using B = std::tuple<char, float>;
    using C = Concat_t<A, B>;
    static_assert(std::is_same_v<C, std::tuple<int, double, char, float>>);
    std::cout << "concat works\n";
}
```

### Variadic Type Traits with Specialization

```cpp
#include <iostream>
#include <type_traits>

// All-of trait using recursive specialization
template <typename... Conds>
struct AllOf : std::true_type {};

template <typename First, typename... Rest>
struct AllOf<First, Rest...>
    : std::conditional_t<bool(First::value), AllOf<Rest...>, std::false_type> {};

template <bool... Bools>
inline constexpr bool all_of_v = AllOf<std::bool_constant<Bools>...>::value;

int main() {
    static_assert(all_of_v<true, true, true>);
    static_assert(!all_of_v<true, false, true>);
    static_assert(all_of_v<>);  // empty: true
    std::cout << "all_of_v works\n";
}
```

## Specialization of Member Templates

Member templates (template members of a class template) can be fully or partially specialized
independently of the enclosing class template. This is useful for providing type-specific
implementations of individual member functions:

```cpp
#include <iostream>
#include <string>

template <typename T>
class Serializer {
public:
    std::string serialize() const;

    template <typename U>
    U convert() const;

    T value_;
};

// Full specialization of a member function for T = int
template <>
std::string Serializer<int>::serialize() const {
    return std::to_string(value_);
}

// Full specialization of a member template for T = int, U = double
template <>
template <>
double Serializer<int>::convert<double>() const {
    return static_cast<double>(value_);
}

// Generic member definitions
template <typename T>
std::string Serializer<T>::serialize() const {
    return "generic serialization";
}

template <typename T>
template <typename U>
U Serializer<T>::convert() const {
    return static_cast<U>(value_);
}

int main() {
    Serializer<int> si{42};
    std::cout << si.serialize() << "\n";         // "42" (specialized)
    std::cout << si.convert<double>() << "\n";    // 42.0 (specialized)

    Serializer<double> sd{3.14};
    std::cout << sd.serialize() << "\n";         // "generic serialization"
    std::cout << sd.convert<int>() << "\n";       // 3 (generic)
}
```

:::warning
You cannot partially specialize a member template without partially specializing the
enclosing class template. Member templates can only be **fully** specialized. If you need partial
specialization of a member, you must partially specialize the entire class.
:::

## Common Errors with Ambiguity

### Ambiguous Partial Specializations

When two partial specializations are equally specialized, the program is ill-formed:

```cpp
template <typename T>
struct Ambig {};

// Both specializations match Ambig<const int*> -- ambiguous!
template <typename T>
struct Ambig<const T*> {};     // matches: T = int

template <typename T>
struct Ambig<T* const> {};     // matches: T = const int

// Ambig<const int*> ai;  // ERROR: ambiguous partial specialization

// Fix: provide a specialization that is strictly more specialized
template <typename T>
struct Ambig<const T* const> {};
// Now Ambig<const int*> still ambiguous between first two.
// The real fix is to reorder: put the more specific one first
// and ensure no overlap, or add a disambiguating specialization.
```

### Full vs Partial Specialization Ordering

Full specializations always take precedence over partial specializations, regardless of declaration
order:

```cpp
template <typename T>
struct Prioritized { static constexpr int value = 0; };

template <typename T>
struct Prioritized<T*> { static constexpr int value = 1; };  // partial

template <>
struct Prioritized<int*> { static constexpr int value = 2; };  // full

int main() {
    static_assert(Prioritized<int*>::value == 2);   // full specialization wins
    static_assert(Prioritized<double*>::value == 1); // partial specialization
    static_assert(Prioritized<int>::value == 0);     // primary template
}
```

### Specialization and Declaration Order

Partial specializations must be declared before they are used, but the order of partial
specializations relative to each other does not matter for selection --- the compiler considers all
visible partial specializations and applies the partial ordering rules:

```cpp
#include <iostream>

template <typename T>
struct S { static constexpr int val = 0; };

// Order does not matter: compiler picks the most specialized.
template <typename T>
struct S<T*> { static constexpr int val = 1; };

template <typename T>
struct S<T&> { static constexpr int val = 2; };

int main() {
    static_assert(S<int*>::val == 1);
    static_assert(S<int&>::val == 2);
    static_assert(S<int>::val == 0);
    std::cout << "ordering works\n";
}
```

## Common Pitfalls

1. **Partial specializations of function templates are not allowed.** You can only partially
   specialize class templates and variable templates. For functions, use overloading instead. This
   is a fundamental asymmetry in the language [N4950 S13.7.5/5].

2. **Specialization must be visible at the point of use.** If you specialize a template in a
   different translation unit, the specialization may not be used. Prefer header-only templates or
   explicit instantiation. The compiler selects specializations from among those that are visible at
   the point of instantiation.

3. **Specialization does not inherit from the primary template.** Each specialization is a
   completely independent definition. If you want shared behavior, use a base class or CRTP. Members
   defined in the primary template are not automatically available in specializations.

4. **`std::enable_if` in partial specializations.** Using `std::enable_if` as a template argument is
   the SFINAE-compatible way to conditionally specialize. C++20 `requires` clauses are preferred
   because they produce better error messages and compose more naturally.

5. **Ambiguity is a hard error.** If two partial specializations are equally specialized, the
   compiler does not pick one --- it emits an error. Always test with edge cases that exercise the
   boundaries of your specialization patterns.

6. **Default template arguments and specialization interaction.** Default arguments on the primary
   template do not affect which partial specialization is selected. The partial specialization
   pattern must match the actual arguments (including defaults) for selection to occur.

7. **Member template specialization limitations.** Member templates of class templates can only be
   fully specialized, not partially specialized. To partially specialize a member, partially
   specialize the entire enclosing class template. This often leads to code duplication when only
   one member needs specialization.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Argument Deduction (Class and Function)](./2_argument_deduction.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
- [Type Traits and Static Reflection Patterns](../3_compile_time_computation/4_type_traits.md)
