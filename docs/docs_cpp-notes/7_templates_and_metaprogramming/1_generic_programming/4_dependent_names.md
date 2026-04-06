---
title: Dependent Names and Two-Phase Lookup
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: dependent-names-and-two-phase-lookup
---

# Dependent Names and Two-Phase Lookup

In templates, the distinction between **dependent** and **non-dependent** names determines when name
lookup occurs. Dependent names (those that depend on a template parameter) are looked up at
instantiation time, while non-dependent names are resolved at definition time. Understanding this
distinction is essential for writing correct templates, especially when inheriting from dependent
base classes.

## Dependent vs Non-Dependent Names

A **dependent name** is a name whose meaning depends on one or more template parameters [N4950
§13.8.3]. A **non-dependent name** does not. The distinction determines when lookup occurs:

| Name kind       | Lookup time             | Scope                              |
| --------------- | ----------------------- | ---------------------------------- |
| Non-dependent   | Phase 1 (definition)    | Definition context only            |
| Dependent       | Phase 2 (instantiation) | Definition + instantiation context |
| Dependent + ADL | Phase 2 (instantiation) | Associated namespaces/classes      |

```cpp
#include <iostream>
#include <string>

struct Base {
    void foo() const { std::cout << "Base::foo\n"; }
    int bar = 42;
};

template <typename T>
struct Derived : T {
    void call_foo() const {
        // 'foo' is a dependent name (depends on base T)
        // But without 'this->', it will NOT be found in the base class
        // because at Phase 1 the compiler doesn't know what T::foo is.
        // foo();              // ERROR: 'foo' was not declared in this scope
        this->foo();           // OK: this-> makes lookup dependent
    }

    void use_bar() const {
        // 'bar' is a dependent member of T
        // int x = bar;        // ERROR: not declared in this scope
        int x = this->bar;     // OK
        std::cout << x << "\n";
    }
};

int main() {
    Derived<Base> d;
    d.call_foo();    // Base::foo
    d.use_bar();     // 42
}
```

:::warning Inside a class template that inherits from a dependent base, **you must use `this->`** to
access members of the base class. Without `this->`, the name is non-dependent and looked up at Phase
1, where the base class members are invisible. This is the single most common two-phase lookup bug
[N4950 §13.8.3]. :::

## Name Binding at Definition vs Instantiation

The two-phase lookup model splits name resolution into two distinct phases to allow separate
compilation of templates while still supporting late binding for type-dependent behavior.

**Phase 1 (Definition Time):** When the template is first parsed, the compiler resolves all
non-dependent names. This includes:

- Names that do not involve any template parameter
- Names of base classes when the base is not dependent
- Names found via ordinary unqualified lookup for non-dependent expressions

**Phase 2 (Instantiation Time):** When the template is instantiated with concrete types, the
compiler resolves all dependent names. This includes:

- Names that depend on a template parameter (e.g., `T::value`)
- Member access through a dependent type (e.g., `this->foo()`)
- Names found via Argument-Dependent Lookup (ADL) for arguments with dependent types

```cpp
#include <iostream>

int global_value = 100;

template <typename T>
void example() {
    // Phase 1: 'global_value' is non-dependent, resolved NOW
    std::cout << global_value << "\n";  // Always prints 100

    // Phase 1: 'helper' is non-dependent, resolved NOW
    helper(42);  // Binds to whatever helper(int) is visible here
}

void helper(int x) {
    std::cout << "helper(int): " << x << "\n";
}

// Adding another overload of helper AFTER the template definition
// has NO effect on the non-dependent call inside example().
// The call was already bound at Phase 1.
```

This is why non-dependent calls in templates cannot be "extended" by later declarations. Only
dependent calls benefit from Phase 2 lookup.

## The `typename` Disambiguator

When a dependent name refers to a **type**, the compiler cannot tell whether the name is a type or a
value at Phase 1. The `typename` keyword tells the compiler to treat the name as a type [N4950
§13.8.3]:

```cpp
#include <iostream>
#include <type_traits>
#include <vector>

template <typename T>
struct Container {
    // Without typename, the compiler doesn't know if T::value_type is a type
    // or a static member variable. It defaults to assuming it is NOT a type.
    // typename T::value_type data;     // OK: tells compiler it's a type
    // T::value_type data;              // ERROR: need 'typename' before dependent type name
};

// Real-world example with iterator type extraction
template <typename C>
void print_container(const C& container) {
    // typename is required because C::iterator depends on template parameter C
    typename C::const_iterator it = container.begin();
    for (; it != container.end(); ++it) {
        std::cout << *it << " ";
    }
    std::cout << "\n";
}

// When typename is NOT needed:
// 1. In a base class specifier (list of bases)
// 2. In an initializer list where the type is clear from context
template <typename T>
struct Derived2 : T::Base {  // No typename needed in base class specifier
    Derived2() : T::Base() {}  // No typename needed in mem-initializer
};

int main() {
    std::vector<int> v{1, 2, 3};
    print_container(v);  // 1 2 3
}
```

### Where `typename` Is Required vs Not

| Context                                             | `typename` Required? | Reason                                 |
| --------------------------------------------------- | -------------------- | -------------------------------------- |
| `typename T::type x;`                               | Yes                  | Dependent qualified name as a type     |
| `using alias = typename T::type;`                   | Yes                  | Dependent qualified name in type alias |
| `template &lt;typename T&gt; struct S : T::Base {}` | No                   | Base class specifier                   |
| `T::Base()` (in initializer list)                   | No                   | Mem-initializer context                |
| `T::static_value` (non-type member)                 | No                   | Accessing a static data member         |
| `sizeof(typename T::type)`                          | Yes                  | Dependent type inside `sizeof`         |

:::warning The error message "need `typename` before dependent type name" is one of the most common
template compilation errors. Always use `typename` before a qualified dependent name that you intend
to use as a type, unless you are in a base class specifier or mem-initializer. :::

## The `template` Disambiguation Keyword

When a dependent name refers to a template member (function or nested type), the compiler needs to
be told that the name is a template using the `template` keyword [N4950 §13.8.3]:

```cpp
#include <iostream>
#include <vector>

struct MyContainer {
    template <typename U>
    U cast_value(int v) const {
        return static_cast<U>(v);
    }

    template <typename U>
    struct Nested {
        U value;
    };
};

template <typename T>
void process(const T& container) {
    // Without 'template', the compiler parses 'container.cast_value<double>'
    // as: (container.cast_value) < double > >, which is a comparison.
    // The 'template' keyword tells the parser that what follows is a template.
    double d = container.template cast_value<double>(42);
    std::cout << d << "\n";

    // Same for nested template types:
    using N = typename T::template Nested<double>;
    N n{3.14};
    std::cout << n.value << "\n";
}

int main() {
    MyContainer c;
    process(c);  // prints 42.0, then 3.14
}
```

### Combined `typename` and `template` Disambiguators

In practice, you often need both `typename` and `template` together when accessing a nested template
type through a dependent qualifier:

```cpp
#include <iostream>
#include <vector>

template <typename T>
struct Outer {
    template <typename U>
    struct Inner {
        U value;
    };
};

template <typename T>
void example() {
    // typename: tells compiler T::Inner<U> is a type
    // template: tells compiler Inner is a template
    using Type = typename T::template Inner<int>;
    Type t{42};
    std::cout << t.value << "\n";
}

int main() {
    example<Outer<int>>();
}
```

## ADL and Dependent Names

Argument-Dependent Lookup (ADL) plays a crucial role in two-phase lookup. For dependent calls, ADL
is deferred to Phase 2, which means functions found via ADL in the instantiation context are
visible. This is how templates can find user-defined overloads of operators and free functions
defined in the same namespace as the argument types.

```cpp
#include <iostream>

namespace geometry {
    struct Point {
        double x, y;
    };

    double distance(const Point& a, const Point& b) {
        double dx = a.x - b.x;
        double dy = a.y - b.y;
        return std::sqrt(dx * dx + dy * dy);
    }
}

template <typename T>
double compute(T a, T b) {
    // 'distance' is an unqualified dependent call (depends on T).
    // ADL finds geometry::distance because T = geometry::Point
    // is defined in namespace geometry.
    return distance(a, b);
}

int main() {
    geometry::Point p1{0.0, 0.0};
    geometry::Point p2{3.0, 4.0};
    std::cout << compute(p1, p2) << "\n";  // 5
}
```

**Key rule:** For ADL to work with dependent arguments, the function call must be unqualified. A
qualified call like `geometry::distance(a, b)` is resolved at Phase 1 and does not participate in
ADL at Phase 2.

## Non-Dependent vs Dependent: Complete Example

```cpp
#include <iostream>
#include <vector>

namespace lib {
    void helper(double) { std::cout << "lib::helper(double)\n"; }
}

struct X {};

void helper(int) { std::cout << "::helper(int)\n"; }

// ADL helper found via associated namespace of X
void helper(X) { std::cout << "::helper(X)\n"; }

template <typename T>
void test(T arg) {
    // Phase 1 (definition time):
    //   'helper(42)' — non-dependent call → binds ::helper(int) NOW
    helper(42);

    // Phase 2 (instantiation time):
    //   'helper(arg)' — dependent → looked up in definition + instantiation context
    //   Uses ADL because 'arg' has type X, whose associated namespace is ::
    helper(arg);
}

int main() {
    // Even though lib::helper(double) exists at this point,
    // the call helper(42) was already bound to ::helper(int) at definition time.
    test(X{});
    // Output:
    //   ::helper(int)      ← phase-1 binding (non-dependent)
    //   ::helper(X)        ← phase-2 binding (dependent + ADL)
}
```

## Common Errors and Fixes

### Error 1: "Dependent name is not a type"

```cpp
template <typename T>
void bad(const T& obj) {
    T::value_type x = 42;  // ERROR: need 'typename'
}

template <typename T>
void good(const T& obj) {
    typename T::value_type x = 42;  // OK
}
```

### Error 2: Members of dependent base class not found

```cpp
template <typename T>
struct Bad : T {
    void foo() {
        bar();          // ERROR: not declared (Phase 1 doesn't see T's members)
    }
};

template <typename T>
struct Good : T {
    void foo() {
        this->bar();    // OK: this-> makes lookup dependent (Phase 2)
    }
};

// Alternative: using declaration (also defers to Phase 2)
template <typename T>
struct AlsoGood : T {
    using T::bar;       // OK: using declaration in dependent base
    void foo() {
        bar();          // OK: found via using declaration
    }
};
```

### Error 3: Dependent template name parsed as comparison

```cpp
template <typename T>
void bad(T& obj) {
    obj.process<int>(42);   // ERROR: parsed as (obj.process) < int > (42)
}

template <typename T>
void good(T& obj) {
    obj.template process<int>(42);  // OK: template keyword disambiguates
}
```

## Common Pitfalls

1. **Forgetting `this->` in dependent base classes.** This is the most frequent two-phase lookup
   bug. Always qualify member accesses from dependent bases with `this->` or a using declaration.

2. **Forgetting `typename` for dependent type names.** Any qualified name like `T::SomeType` that is
   used as a type must be prefixed with `typename` when `T` is a template parameter.

3. **Forgetting `template` for dependent template members.** When calling a template member function
   through a dependent object, use `obj.template func&lt;Args&gt;()`.

4. **Assuming Phase 2 finds non-ADL names.** Only dependent names and ADL-dependent calls are
   resolved at Phase 2. Non-dependent unqualified names are locked in at Phase 1.

5. **Overloading after definition does not affect non-dependent calls.** Adding overloads after a
   template definition has no effect on non-dependent calls within that template.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md)
- [Argument Deduction (Class and Function)](./2_argument_deduction.md)

:::

:::
