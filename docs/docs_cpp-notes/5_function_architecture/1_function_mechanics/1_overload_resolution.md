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

## See Also

- [Calling Conventions and Stack Management](2_calling_conventions.md)
- [Lambda Expressions](3_lambdas.md)
