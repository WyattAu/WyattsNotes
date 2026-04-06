---
title: Overload Resolution
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: overload-resolution
---

# Overload Resolution

C++ function resolution is not a simple name match. The compiler performs a multi-phase search
through namespaces, ranks candidate functions against a strict hierarchy of conversion ranks, and
selects a single best viable function — or rejects the call as ambiguous.

## 1.1 Name Lookup [N4950 §6.5.4]

Name lookup determines which set of declarations are considered as candidates for a function call.
There are three forms of lookup:

1. **Unqualified lookup**: Searches enclosing scopes from innermost to outermost, stopping at the
   first scope that contains a declaration of the name.
2. **Qualified lookup**: When a name is prefixed with a namespace or class scope (e.g.,
   `std::sort`), lookup searches only that scope and its inline namespaces.
3. **Argument-dependent lookup (ADL)**: Also called Koenig lookup. For unqualified function calls,
   the namespaces and classes associated with each argument type are additionally searched.

```cpp
#include <iostream>
#include <string>

namespace lib {
    struct S {};
    void print(const S&) { std::cout << "lib::S\n"; }
}

void print(int) { std::cout << "int\n"; }

int main() {
    lib::S s;
    print(s);  // ADL finds lib::print — even though lib:: is not in scope
    print(42); // Unqualified lookup finds ::print(int)
}
```

The ADL rule is the reason `std::cout << "hello"` works: the left operand has type `std::ostream`
(in namespace `std`), and the right operand has type `const char[6]` (built-in type, no ADL
contribution). ADL adds the namespace `std` to the search set, where `operator<<` is found.

:::info Relevance ADL is essential for operator overloading and generic code. Without ADL, every
call to `operator<<`, `operator==`, or a custom swap function would require explicit namespace
qualification, breaking generic programming. :::

## 1.2 ADL in Detail [N4950 §6.5.4.2]

For each argument in a function call, the following namespaces and classes are added to the lookup
set:

- The type of the argument (ignoring top-level cv-qualifiers and references).
- The template type arguments (if the argument type is a class template specialization).
- The type of each base class.
- The type of each member of the class.

The fundamental types (`int`, `double`, `bool`, etc.) and types whose associated namespaces are the
global namespace contribute no additional search scope.

```cpp
#include <vector>
#include <iterator>

namespace A {
    struct X {};
    void swap(X&, X&) { /* A's swap */ }
}

namespace B {
    struct Y : A::X {};
}

int main() {
    B::Y y1, y2;
    swap(y1, y2);
    // ADL finds A::swap because:
    //   Y's base class is A::X, which is associated with namespace A
}
```

## 1.3 Overload Resolution Phases [N4950 §12.4.3]

Once name lookup has produced a set of candidate functions, the compiler performs overload
resolution in two phases:

**Phase 1: Build the set of viable functions.** A candidate is viable if:

- It has the right number of parameters (or is variadic).
- Each argument can be implicitly converted to the corresponding parameter type.
- If the function has a trailing parameter pack, it can accept any remaining arguments.

**Phase 2: Select the best viable function.** For each argument position, the compiler ranks the
implicit conversion sequences required. A function $f_1$ is a better match than $f_2$ if:

- For at least one argument, the conversion for $f_1$ is better than for $f_2$.
- For no argument is the conversion for $f_1$ worse than for $f_2$.

## 1.4 Conversion Ranking [N4950 §12.4.3.2.2]

The conversion ranking hierarchy (from best to worst) is:

| Rank                        | Description                                               | Example                                |
| :-------------------------- | :-------------------------------------------------------- | :------------------------------------- |
| **Exact Match**             | No conversion, or trivial conversion (lval→rval, cv-qual) | `int` → `int`, `int` → `const int&`    |
| **Promotion**               | Integral promotion or floating-point promotion            | `short` → `int`, `float` → `double`    |
| **Standard Conversion**     | Other implicit standard conversions                       | `int` → `double`, `Derived*` → `Base*` |
| **User-Defined Conversion** | One user-defined conversion + standard conv               | `class A` → `class B` (via `B(A)`)     |
| **Ellipsis**                | `...` catch-all                                           | any type                               |

```cpp
#include <iostream>

void f(int)      { std::cout << "int\n"; }
void f(double)   { std::cout << "double\n"; }
void f(long)     { std::cout << "long\n"; }

int main() {
    f(42);       // Exact match → f(int)
    f(3.14);     // Exact match → f(double)
    f(42L);      // Exact match → f(long)  (long is exact match, not promoted)
    f('c');      // Promotion → f(int)     (char promotes to int, not to long or double)
    f(42.f);     // Promotion → f(double)  (float promotes to double)
}
```

## 1.5 Ambiguity and Tie-Breaking

When two viable functions are equally good for every argument, the call is **ambiguous** and the
program is ill-formed:

```cpp
#include <iostream>

void g(int, double) { std::cout << "int, double\n"; }
void g(double, int) { std::cout << "double, int\n"; }

int main() {
    g(42, 3.14);   // OK: g(int, double) is better
    g(3.14, 42);   // OK: g(double, int) is better
    // g(42, 42);   // ERROR: ambiguous — g(int, int) matches both equally
    //   g(int, double):  int→int (exact), int→double (promotion)
    //   g(double, int):  int→double (promotion), int→int (exact)
    //   Neither is strictly better → ambiguity
}
```

**Partial ordering** of function templates resolves ambiguities between template functions. When
both an ordinary function and a function template are viable, the ordinary function is preferred
unless the template provides a more specialized match [N4950 §13.7.6.6.5].

## 1.6 Complete ADL Example: `operator<<`

The canonical ADL scenario is the stream insertion operator:

```cpp
#include <iostream>
#include <string>

namespace physics {
    struct Vec3 {
        double x, y, z;
    };

    std::ostream& operator<<(std::ostream& os, const Vec3& v) {
        return os << '(' << v.x << ", " << v.y << ", " << v.z << ')';
    }
}

int main() {
    physics::Vec3 v{1.0, 2.0, 3.0};
    std::cout << v << '\n';
    // Unqualified lookup for << finds built-in operators and std::operator<<
    // ADL adds namespace physics (associated with Vec3) to the search set
    // physics::operator<<(std::ostream&, const Vec3&) is found and selected
}
```

:::warning ADL can pull in unexpected overloads from associated namespaces. The "hidden friend"
idiom — defining the operator as a friend inside the class — restricts the operator to being found
only via ADL, preventing unintended overloads:

```cpp
struct Vec3 {
    double x, y, z;
    friend std::ostream& operator<<(std::ostream& os, const Vec3& v) {
        return os << '(' << v.x << ", " << v.y << ", " << v.z << ')';
    }
};
```

:::

## 1.7 Implicit Conversion Sequences in Depth

An **implicit conversion sequence** (ICS) is the sequence of conversions the compiler applies to
convert an argument to a parameter type. Each ICS consists of up to three parts [N4950 §12.4.3.2]:

1. **Standard conversion** (always present): lvalue-to-rvalue conversion, qualification conversions,
   etc.
2. **User-defined conversion** (optional): a converting constructor or conversion operator.
3. **Second standard conversion** (optional): applied after the user-defined conversion.

No ICS can contain more than one user-defined conversion. This is why chaining `A → B → C` through
two user-defined conversions is ill-formed.

### Ranking Tie-Breaking Rules

When two ICSes have the same rank (e.g., both are standard conversions), the compiler applies
tie-breaking rules [N4950 §12.4.3.2.3]:

1. **Rank the second standard conversion:** If both ICSes end with a standard conversion, the better
   second conversion wins.
2. **Prefer non-templates to templates:** A non-template function is preferred over a function
   template specialization providing the same conversion.
3. **Prefer more specialized templates:** When both are templates, partial ordering selects the more
   specialized one.
4. **Prefer functions with fewer ellipsis parameters in the signature.**

```cpp
#include <iostream>

void f(int&)       { std::cout << "lvalue ref\n"; }
void f(const int&) { std::cout << "const lvalue ref\n"; }
void f(int&&)      { std::cout << "rvalue ref\n"; }

int main() {
    int x = 42;
    f(x);        // int& is better match than const int& → lvalue ref
    f(42);       // int&& binds rvalue, const int& also viable but rvalue ref preferred
    const int cx = 10;
    f(cx);       // const int& is the only viable match
}
```

### Reference Binding and Overload Resolution

Reference collapsing and binding rules interact with overload resolution in subtle ways:

- An rvalue reference parameter (`T&&`) can bind to:
  - An rvalue of type `T` (exact match).
  - An rvalue of a type convertible to `T` (standard conversion).
  - It **cannot** bind to an lvalue (unless `T` is a template parameter subject to reference
    collapsing).

- A const lvalue reference parameter (`const T&`) can bind to:
  - An lvalue of type `T` (exact match, but adds a qualification conversion).
  - An rvalue of type `T` (lvalue-to-rvalue + qualification conversion).
  - An lvalue or rvalue of a type convertible to `T`.

```cpp
#include <iostream>

void take(int&& r)       { std::cout << "rvalue ref\n"; }
void take(const int& r)  { std::cout << "const lvalue ref\n"; }

int main() {
    take(42);       // rvalue ref (better: no qualification conversion needed)
    int x = 10;
    // take(x);     // ERROR: int&& cannot bind to lvalue — no viable candidate with int&&
    const int& cr = x;
    take(cr);       // const lvalue ref (int&& cannot bind to const lvalue)
}
```

---

## 1.8 Overload Resolution and Templates

When both function templates and non-template functions are candidates, the ranking rules are:

1. Non-template functions are preferred over function template specializations, all else being
   equal.
2. Among function templates, the more specialized template is preferred.
3. If a non-template and a template provide the same conversion rank, the non-template wins.

```cpp
#include <iostream>

void f(int x) { std::cout << "non-template: " << x << "\n"; }

template<typename T>
void f(T x) { std::cout << "template: " << x << "\n"; }

int main() {
    f(42);       // Non-template wins: f(int) is exact match, f&lt;int&gt;(int) is also exact
                // but non-template is preferred by tie-breaking rule
    f(3.14);     // Template wins: f(double) is not viable (no non-template overload),
                // f&lt;double&gt;(double) is the only candidate
}
```

### SFINAE and Overload Set Construction

Substitution Failure Is Not An Error (SFINAE) [N4950 §13.10.3] affects overload resolution by
removing candidates from the viable set rather than causing compilation errors. When template
argument deduction or constraint checking fails for a particular candidate, that candidate is
silently removed from the overload set.

```cpp
#include <iostream>
#include <type_traits>

template<typename T>
typename std::enable_if<std::is_integral_v<T>, T>::type
f(T x) { std::cout << "integral: " << x << "\n"; return x; }

template<typename T>
typename std::enable_if<std::is_floating_point_v<T>, T>::type
f(T x) { std::cout << "floating: " << x << "\n"; return x; }

int main() {
    f(42);     // SFINAE removes the floating-point overload → calls integral overload
    f(3.14);   // SFINAE removes the integral overload → calls floating-point overload
}
```

In C++20, SFINAE is superseded by concepts and `requires` clauses, which are more readable and
produce better error messages:

```cpp
#include <iostream>
#include <concepts>

template<std::integral T>
void f(T x) { std::cout << "integral: " << x << "\n"; }

template<std::floating_point T>
void f(T x) { std::cout << "floating: " << x << "\n"; }
```

---

## 1.9 Overload Resolution with Multi-Parameter Functions

When multiple parameters are involved, overload resolution requires that the best candidate be
better for at least one argument and no worse for any argument. This is a **partial order** on
viable functions.

```cpp
#include <iostream>

struct A {};
struct B : A {};

void g(A, int)    { std::cout << "A, int\n"; }
void g(B, double) { std::cout << "B, double\n"; }

int main() {
    g(B{}, 3.14);   // g(B, double) wins: B→B exact, double→double exact

    // g(B{}, 42);   // AMBIGUOUS:
    //   g(A, int):   B→A (derived-to-base), int→int (exact)
    //   g(B, double): B→B (exact), int→double (promotion)
    //   Neither is strictly better — ambiguity
}
```

### `const` and Non-`const` Overloads

A common pattern is providing both `const` and non-`const` accessors:

```cpp
#include <iostream>

class Buffer {
    int data_[4]{1, 2, 3, 4};
public:
    int& at(std::size_t i)             { return data_[i]; }
    const int& at(std::size_t i) const { return data_[i]; }
};

int main() {
    Buffer buf;
    buf.at(0) = 99;        // Calls non-const at(int&)
    const Buffer cbuf;
    // cbuf.at(0) = 99;    // ERROR: calls const at() const, returns const int&
}
```

The overload resolution rule for `const` member functions: if the object expression is a const
lvalue, only `const` member functions are viable. If the object expression is a non-const lvalue,
both `const` and non-`const` members are viable, but the non-`const` version is preferred (exact
match vs qualification conversion).

---

## 1.10 ADL and Hidden Friends: Preventing Unintended Overload Discovery

ADL is powerful but can pull in unexpected overloads. Consider a library that defines `swap` in its
namespace:

```cpp
// lib.h
namespace lib {
    struct Widget {
        int value;
        friend void swap(Widget& a, Widget& b) {
            std::swap(a.value, b.value);
        }
    };
}
```

With the hidden friend idiom, `lib::swap` is only found via ADL — it is not found by unqualified or
qualified lookup. This means:

```cpp
#include <lib.h>
#include <algorithm>
#include <utility>

int main() {
    lib::Widget a{1}, b{2};

    // ADL finds lib::swap — correct, uses the efficient member-aware swap
    swap(a, b);

    // Qualified lookup finds std::swap — may be less efficient
    std::swap(a, b);
}
```

The standard library's `std::swap` implementation (since C++11) uses `using std::swap; swap(a, b);`
to enable ADL-based customization:

```cpp
template<typename T>
void my_swap(T& a, T& b) {
    using std::swap;
    swap(a, b);  // ADL finds T's namespace's swap if it exists, falls back to std::swap
}
```

This two-phase lookup (unqualified + ADL) is the correct way to write generic code that respects
custom `swap` implementations.

---

## Common Pitfalls

- **Ambiguous overloads with mixed types.** `f(short, long)` vs `f(long, short)` called as `f(1, 1)`
  is ambiguous because both arguments are `int`, which converts equally well to `short` (truncation)
  or `long` (promotion). Use explicit casts or provide an `f(int, int)` overload.
- **Surprising `bool` conversions.** `bool` is an integral type. `f(bool)` is a viable candidate for
  `f(42)` via the boolean conversion (`42 → true`). This can cause surprising overload selection.
  Use `std::same_as<T, bool>` constraints to exclude `bool` from integral overloads.
- **ADL pulling in unexpected operators.** If you define `operator==` for your type in its
  namespace, it will be found by ADL in any context where your type is used as an argument. This is
  usually desired, but can cause issues with implicit conversions pulling in operators you didn't
  intend.
- **Overload resolution and `std::function`.** `std::function` uses type erasure, which creates a
  new callable object. The target callable's overloads are resolved at construction time, not at
  call time. You cannot pass an overloaded function name directly to `std::function` without
  disambiguation.
- **`nullptr` overload resolution.** `f(int)` and `f(int*)` called with `f(nullptr)` selects
  `f(int*)` because `nullptr` has type `std::nullptr_t`, which converts to any pointer type but not
  to `int`. However, `f(0)` selects `f(int)` because `0` is an `int` literal.

:::
