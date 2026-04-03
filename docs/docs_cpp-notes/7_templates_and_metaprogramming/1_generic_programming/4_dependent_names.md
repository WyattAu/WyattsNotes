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

## Complete Two-Phase Lookup Example

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

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md)
