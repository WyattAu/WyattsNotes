---
title: Dependent Names and Two-Phase Lookup
description:
  "C++: Dependent Names and Two-Phase Lookup — Dependent vs Non-Dependent Names; When Is a Name Dependent?; Non-Dependent Qualified Names Are a Trap."
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
S13.8.3]. A **non-dependent name** does not. The distinction determines when lookup occurs:

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
[N4950 S13.8.3].
:::

### When Is a Name Dependent?

The standard defines precisely when a name is dependent [N4950 S13.8.3/1]. A name is dependent if
any of the following hold:

1. **A qualified-id whose qualifier is dependent.** `T::member`, `TT&lt;Args&gt;::type`, etc.
2. **An unqualified name in a function call** where at least one argument has a dependent type. This
   triggers ADL at Phase 2.
3. **A name used in a type-specifier** where the type is dependent: `sizeof(T)`, `alignof(T)`,
   `decltype(expr)` where `expr` is type-dependent.
4. **A name used in a `new`-expression** or `delete`-expression where the type is dependent.
5. **A `throw`-expression** where the thrown type is dependent.
6. **A member access expression** where the object expression is type-dependent: `obj.member` where
   `obj` has type `T`.

The following table classifies common patterns:

| Expression                             | Dependent?                    | Phase   | Reason                                       |
| -------------------------------------- | ----------------------------- | ------- | -------------------------------------------- |
| `T::value`                             | Yes                           | Phase 2 | Qualified by dependent type `T`              |
| `T::template foo&lt;int&gt;()`         | Yes                           | Phase 2 | Qualified by dependent type `T`              |
| `this->member`                         | Yes                           | Phase 2 | `this` has dependent type `Derived&lt;T&gt;` |
| `std::cout`                            | No                            | Phase 1 | Qualifier `std` is non-dependent             |
| `g(42)` (unqualified)                  | No                            | Phase 1 | No dependent argument                        |
| `h(x)` where `x: T`                    | Yes (ADL)                     | Phase 2 | Argument has dependent type                  |
| `N::func(x)` where `N` non-dep, `x: T` | No for `N::func`, yes for ADL | Phase 1 | Qualified name at Phase 1; ADL at Phase 2    |
| `T::Nested&lt;int&gt;`                 | Yes                           | Phase 2 | Qualified by dependent type                  |
| `sizeof(T)`                            | Yes                           | Phase 2 | Type-dependent expression                    |

### Non-Dependent Qualified Names Are a Trap

A qualified name with a non-dependent qualifier is always resolved at Phase 1, even if the
unqualified version would be resolved at Phase 2 via ADL. This leads to a subtle bug:

```cpp
#include <iostream>

namespace lib {
    struct Widget {};
    void process(const Widget&) { std::cout << "lib::process\n"; }
}

template <typename T>
void wrapper(T arg) {
    // Phase 2: unqualified 'process' is found via ADL when T = lib::Widget
    process(arg);
    // Phase 1: qualified 'lib::process' is resolved NOW.
    // If lib::process is not yet declared, this is an error.
    // lib::process(arg);  // Would need lib::process to be visible here
}

int main() {
    lib::Widget w;
    wrapper(w);  // prints "lib::process" via ADL
}
```

The unqualified call `process(arg)` works because ADL is deferred to Phase 2, where it finds
`lib::process` in the associated namespace of `lib::Widget`. But a qualified call
`lib::process(arg)` would be resolved at Phase 1 and would fail if `lib::process` is not visible at
the template definition point. This is why generic code should prefer unqualified calls when ADL is
needed.

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

### Formal Model of Two-Phase Lookup

The two-phase model can be understood as a pair of environments, $\lt E_1, E_2 \gt$, where $E_1$ is
the definition-time environment and $E_2$ is the instantiation-time environment. Name resolution
proceeds as follows:

1. At definition time, compute $E_1$ from all declarations visible at the template definition point.
   For each non-dependent name $n$ in the template body, resolve $n$ in $E_1$ and record the
   binding. This binding is permanent.

2. At instantiation time, compute $E_2$ from all declarations visible at the instantiation point.
   For each dependent name $n$ in the template body, resolve $n$ in $E_1 \cup E_2$ (union of both
   environments). For unqualified dependent function calls, also perform ADL using the associated
   namespaces and classes of the argument types.

3. If any non-dependent name fails to resolve in $E_1$, the program is ill-formed. If any dependent
   name fails to resolve in $E_1 \cup E_2$, the program is ill-formed at the point of instantiation.

This model ensures that template definitions can be checked for basic correctness at definition time
(catching typos in non-dependent names early), while template instantiations can find names declared
after the template definition (supporting extension via ADL).

## The `typename` Disambiguator

When a dependent name refers to a **type**, the compiler cannot tell whether the name is a type or a
value at Phase 1. The `typename` keyword tells the compiler to treat the name as a type [N4950
S13.8.1]:

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

### Why `typename` Is Needed: A Parsing Argument

The need for `typename` arises from a fundamental ambiguity in the C++ grammar. Consider the
expression `T::foo * x` inside a template. Without `typename`, the compiler must decide whether this
is:

1. A declaration of a pointer variable named `x` of type `T::foo` (if `T::foo` is a type).
2. A multiplication of `T::foo` (a static data member) by `x` (if `T::foo` is a value).

At Phase 1, the compiler does not know what `T` is, so it cannot resolve this ambiguity. The
standard resolves it by defaulting to interpretation (2): a dependent qualified name is assumed to
be a **non-type** unless prefixed with `typename` [N4950 S13.8.1/1]. This conservative default
ensures that the parser can produce a valid parse tree without knowing the template arguments.

```cpp
#include <iostream>

struct WithStatic {
    static int foo;
};

int WithStatic::foo = 42;

struct WithType {
    using foo = int;
};

template <typename T>
void ambiguous(T) {
    // Without typename, 'T::foo * x' is parsed as multiplication.
    // This is because the compiler assumes T::foo is a non-type by default.
    T::foo * x;  // If T = WithStatic: declares x as pointer-to-int? NO!
                 // Parsed as: (T::foo) * (x), which is multiplication.
                 // 'x' must be previously declared.
}

int main() {
    int x = 10;
    ambiguous(WithStatic{});  // OK: T::foo * x = 42 * 10 = 420
    // ambiguous(WithType{}); // ERROR: WithType::foo is a type, not a value.
}
```

### Formal Rules for When `typename` Is Required

Per [N4950 S13.8.1], `typename` is required in the following contexts and prohibited in others:

| Context                                                              | `typename` Required? | Standard Reference |
| -------------------------------------------------------------------- | -------------------- | ------------------ |
| `typename T::type x;` (variable declaration)                         | Yes                  | S13.8.1/1          |
| `using alias = typename T::type;` (type alias)                       | Yes                  | S13.8.1/1          |
| `typename T::type func();` (return type)                             | Yes                  | S13.8.1/1          |
| `template &lt;typename T&gt; struct S : T::Base {}` (base specifier) | No                   | S13.8.1/2          |
| `S() : T::Base() {}` (mem-initializer)                               | No                   | S13.8.1/2          |
| `sizeof(typename T::type)`                                           | Yes                  | S13.8.1/1          |
| `alignof(typename T::type)`                                          | Yes                  | S13.8.1/1          |
| `static_cast&lt;typename T::type&gt;(expr)`                          | Yes                  | S13.8.1/1          |
| `T::template Inner&lt;int&gt;` (template disambiguator)              | N/A (use `template`) | S13.8.3/2          |
| `typename T::template Inner&lt;int&gt;` (type + template)            | Both required        | S13.8.1 + S13.8.3  |

:::warning The error message "need `typename` before dependent type name" is one of the most common
template compilation errors. Always use `typename` before a qualified dependent name that you intend
to use as a type, unless you are in a base class specifier or mem-initializer. This is a purely
syntactic requirement --- it does not change the generated code.
:::

### Where `typename` Is Required vs Not

| Context                                             | `typename` Required? | Reason                                 |
| --------------------------------------------------- | -------------------- | -------------------------------------- |
| `typename T::type x;`                               | Yes                  | Dependent qualified name as a type     |
| `using alias = typename T::type;`                   | Yes                  | Dependent qualified name in type alias |
| `template &lt;typename T&gt; struct S : T::Base {}` | No                   | Base class specifier                   |
| `T::Base()` (in initializer list)                   | No                   | Mem-initializer context                |
| `T::static_value` (non-type member)                 | No                   | Accessing a static data member         |
| `sizeof(typename T::type)`                          | Yes                  | Dependent type inside `sizeof`         |

## The `template` Disambiguator Keyword

When a dependent name refers to a template member (function or nested type), the compiler needs to
be told that the name is a template using the `template` keyword [N4950 S13.8.3]:

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

### Why `template` Is Needed: A Parsing Argument

Just as `typename` resolves the type-vs-value ambiguity, `template` resolves the template-vs-value
ambiguity. Consider `obj.foo&lt;int&gt;(42)` inside a template where `obj` has dependent type `T`.
The compiler must decide whether this is:

1. A call to a template member function `obj.foo&lt;int&gt;` with argument `42`.
2. A comparison `(obj.foo) &lt; int &gt; (42)`, which parses as `(obj.foo) &lt; (int &gt; 42)`.

Without the `template` keyword, the parser defaults to interpretation (2) because it does not know
that `foo` is a template at Phase 1 [N4950 S13.8.3/2]. The `template` keyword explicitly tells the
parser to treat the following name as a template, enabling correct parsing.

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

### Formal Rules for When `template` Is Required

The `template` keyword is required [N4950 S13.8.3/2] when a dependent qualified name refers to a
member template (a template member function or a nested template class). The rules are:

| Context                                                          | `template` Required? | Example                                 |
| ---------------------------------------------------------------- | -------------------- | --------------------------------------- |
| `obj.template func&lt;Args&gt;()` where `obj` has dependent type | Yes                  | `t.template cast&lt;int&gt;()`          |
| `T::template Type&lt;Args&gt;` where `T` is dependent            | Yes                  | `typename T::template Alloc&lt;int&gt;` |
| `obj.func&lt;Args&gt;()` where `obj` has non-dependent type      | No                   | `std::get&lt;0&gt;(t)`                  |
| `T::func&lt;Args&gt;()` where `T` is non-dependent               | No                   | `std::make_shared&lt;int&gt;()`         |

The `template` disambiguator is needed in exactly the same situations where the compiler would
otherwise parse the `&lt;` as a less-than operator rather than the start of a template argument
list.

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

### ADL Interaction with Overloading and Two-Phase Lookup

ADL at Phase 2 combines with ordinary unqualified lookup in a specific way. Per [N4950 S13.8.3/7],
for an unqualified dependent function call, the compiler performs two lookups:

1. **Ordinary unqualified lookup** in the definition context (Phase 1). This finds functions visible
   at the template definition point, using the usual unqualified lookup rules.
2. **ADL** at instantiation time (Phase 2). This finds functions in the associated namespaces and
   classes of the argument types.

The result is the union of both lookup sets. If both find the same function, it appears once. If
they find different functions with the same name, all candidates participate in overload resolution.

```cpp
#include <iostream>

namespace ns {
    struct Value {
        int v;
    };
    void print(const Value& val) {
        std::cout << "ns::print: " << val.v << "\n";
    }
}

void print(int x) {
    std::cout << "global print: " << x << "\n";
}

template <typename T>
void dispatch(T arg) {
    // Phase 1: ordinary lookup finds ::print(int)
    // Phase 2: ADL finds ns::print(const ns::Value&)
    // Both are candidates; overload resolution picks the best match.
    print(arg);
}

int main() {
    dispatch(ns::Value{42});  // prints "ns::print: 42" (better match via ADL)
    dispatch(42);             // prints "global print: 42" (only match from Phase 1)
}
```

### ADL and Operators

ADL is the mechanism that allows operator overloading to work with template types. When you write
`a + b` inside a template where `a` and `b` have dependent type `T`, the lookup for `operator+` is
deferred to Phase 2 via ADL. This is how `std::cout &lt;&lt; "hello"` works: the `&lt;&lt;` operator
is found via ADL in the namespace of `std::cout` (which is `std`).

```cpp
#include <iostream>

namespace units {
    struct Meters { double value; };
    Meters operator+(Meters a, Meters b) {
        return Meters{a.value + b.value};
    }
    std::ostream& operator<<(std::ostream& os, Meters m) {
        return os << m.value << "m";
    }
}

template <typename T>
T add(T a, T b) {
    return a + b;  // operator+ found via ADL at Phase 2
}

int main() {
    units::Meters total = add(units::Meters{3.0}, units::Meters{4.0});
    std::cout << total << "\n";  // 7m
}
```

## The Base Class Dependent Name Lookup Gotcha

The most common and insidious two-phase lookup bug occurs when a class template inherits from a
dependent base class. Because the base class type depends on the template parameter, the compiler
cannot inspect its members at Phase 1. Any unqualified access to a base class member is therefore
non-dependent and fails:

```cpp
#include <iostream>

template <typename Base>
struct Derived : Base {
    void use_base_member() {
        // All of these fail at Phase 1:
        // member_func();       // ERROR: not declared
        // int x = data_member; // ERROR: not declared
        // using Base::member_func; // ERROR: dependent base class
    }

    void correct_access() {
        this->member_func();   // OK: this-> makes it dependent
        int x = this->data_member;  // OK
    }
};

struct MyBase {
    void member_func() { std::cout << "MyBase::member_func\n"; }
    int data_member = 42;
};

int main() {
    Derived<MyBase> d;
    d.correct_access();
}
```

There are three ways to access members of a dependent base class:

**1. Use `this->`.** This makes the member access expression type-dependent because `this` has the
dependent type `Derived&lt;T&gt;`. Lookup is deferred to Phase 2.

**2. Use a using declaration.** `using Base::member;` brings the name into scope at Phase 2.
However, this itself is a dependent using declaration and is deferred.

**3. Qualify with the base class name.** `Base::member` is a qualified name with a dependent
qualifier, so it is also deferred to Phase 2. But if `member` is a type, you need
`typename Base::member`, and if `member` is a template, you need `Base::template member`.

```cpp
#include <iostream>

template <typename Base>
struct Derived : Base {
    // Method 2: using declaration
    using Base::value;

    void access() {
        // Method 1: this->
        this->value = 10;
        // Method 2: using declaration
        value = 20;
        // Method 3: qualified name
        Base::value = 30;
    }
};

struct MyBase { int value = 0; };

int main() {
    Derived<MyBase> d;
    d.access();
    std::cout << d.value << "\n";  // 30
}
```

### Why the Base Class Is Not Searched at Phase 1

Per [N4950 S13.8.3/7], unqualified name lookup in a template does not search dependent base classes.
The rationale is twofold:

1. **Performance.** Searching a dependent base class would require instantiating the base class (or
   at least enumerating its members) at the template definition point, which defeats lazy
   instantiation.

2. **Correctness.** A dependent base class might have different members for different template
   arguments. Binding a name to a base class member at Phase 1 could produce a different binding
   than what the user expects for a particular instantiation.

The compiler therefore requires an explicit indication that the name comes from the dependent base
(`this->`, a using declaration, or qualification) before deferring the lookup.

### Edge Case: Dependent Base with Non-Dependent Member Name Collision

A particularly tricky case occurs when a member of the derived class has the same name as a member
of the dependent base:

```cpp
#include <iostream>

struct Base {
    int data = 100;
};

template <typename T>
struct Derived : T {
    int data = 200;  // Derived's own member

    void test() {
        std::cout << data << "\n";       // OK: finds Derived::data at Phase 1
        std::cout << this->data << "\n"; // OK: finds Derived::data (hides Base::data)
        std::cout << T::data << "\n";    // OK: finds Base::data via qualified name
    }
};

int main() {
    Derived<Base> d;
    d.test();  // 200, 200, 100
}
```

Here, `data` without `this->` finds `Derived::data` at Phase 1 because it is a member of the
template class itself. The base class member `Base::data` is hidden and can only be accessed via
qualification with `T::`.

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
    //   'helper(42)' -- non-dependent call -> binds ::helper(int) NOW
    helper(42);

    // Phase 2 (instantiation time):
    //   'helper(arg)' -- dependent -> looked up in definition + instantiation context
    //   Uses ADL because 'arg' has type X, whose associated namespace is ::
    helper(arg);
}

int main() {
    // Even though lib::helper(double) exists at this point,
    // the call helper(42) was already bound to ::helper(int) at definition time.
    test(X{});
    // Output:
    //   ::helper(int)      <- phase-1 binding (non-dependent)
    //   ::helper(X)        <- phase-2 binding (dependent + ADL)
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

### Error 4: Dependent qualified name assumed to be non-type

```cpp
template <typename T>
struct S {
    using type = int;
};

template <typename T>
void bad() {
    S<T>::type x;  // ERROR: 'type' assumed to be a non-type (static member)
}

template <typename T>
void good() {
    typename S<T>::type x;  // OK: typename tells compiler it is a type
}
```

## Common Pitfalls

1. **Forgetting `this->` in dependent base classes.** This is the most frequent two-phase lookup
   bug. Always qualify member accesses from dependent bases with `this->` or a using declaration.
   The compiler will not search dependent base classes during unqualified lookup at Phase 1.

2. **Forgetting `typename` for dependent type names.** Any qualified name like `T::SomeType` that is
   used as a type must be prefixed with `typename` when `T` is a template parameter. The compiler
   defaults to assuming such names are non-types, which leads to confusing parse errors.

3. **Forgetting `template` for dependent template members.** When calling a template member function
   through a dependent object, use `obj.template func&lt;Args&gt;()`. Without `template`, the `&lt;`
   is parsed as a comparison operator.

4. **Assuming Phase 2 finds non-ADL names.** Only dependent names and ADL-dependent calls are
   resolved at Phase 2. Non-dependent unqualified names are locked in at Phase 1. Adding a better
   overload after the template definition has no effect on non-dependent calls.

5. **Overloading after definition does not affect non-dependent calls.** Adding overloads after a
   template definition has no effect on non-dependent calls within that template. This is a
   fundamental property of two-phase lookup, not a compiler limitation.

6. **Qualified calls bypass ADL.** A qualified call like `ns::func(arg)` is resolved at Phase 1 via
   qualified lookup only. ADL is not performed for qualified calls. If you need ADL to find
   overloads, use an unqualified call.

7. **Using declarations in dependent bases are themselves dependent.** A `using T::member;`
   declaration inside a class template where `T` is a template parameter is a dependent using
   declaration. It is valid and defers lookup to Phase 2, but it does not make `member` available at
   Phase 1.

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md)
- [Argument Deduction (Class and Function)](./2_argument_deduction.md)
