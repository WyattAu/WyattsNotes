---
title: Template Instantiation, Monomorphization, and Code Bloat
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: template-instantiation-monomorphization-code-bloat
---

# Template Instantiation, Monomorphization, and Code Bloat

Templates are blueprints the compiler uses to generate type-specific code on demand. This process —
called **instantiation** — produces optimized, type-specific functions and classes through
**monomorphization**, but can lead to significant code bloat if not managed carefully.

## Function Templates and Class Templates

A **function template** is a blueprint the compiler uses to generate type-specific functions on
demand [N4950 §13.7]. A **class template** similarly generates type-specific classes [N4950
§13.7.3]. The process of generating concrete code from a template is called **instantiation**.

```cpp
#include <iostream>
#include <vector>
#include <string>

// Function template [N4950 §13.7]
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

// Class template [N4950 §13.7.3]
template <typename T, typename Allocator = std::allocator<T>>
class Stack {
public:
    void push(const T& value) { data_.push_back(value); }
    void pop() { data_.pop_back(); }
    const T& top() const { return data_.back(); }
    bool empty() const { return data_.empty(); }
private:
    std::vector<T, Allocator> data_;
};

int main() {
    int x = max_of(3, 7);            // instantiates max_of<int>
    double y = max_of(1.5, 2.3);     // instantiates max_of<double>
    std::string s = max_of(std::string{"hello"}, std::string{"world"});

    Stack<int> si;
    si.push(42);
    std::cout << si.top() << "\n";   // prints 42

    Stack<std::string> ss;
    ss.push("generic");
    std::cout << ss.top() << "\n";   // prints "generic"
}
```

The compiler performs **monomorphization**: for each unique set of template arguments used, it
generates a separate copy of the template code. If you call `max_of<int>`, `max_of<double>`, and
`max_of<std::string>`, the compiler produces three distinct functions. This is a form of
compile-time polymorphism --- there is no virtual dispatch, no vtable, and (when inlined) no call
overhead at all.

## Two-Phase Name Lookup

The C++ standard specifies **two-phase name lookup** for templates [N4950 §13.8.3]:

1. **Phase 1 (definition time):** Non-dependent names are looked up when the template is _defined_.
   A name is **non-dependent** if its meaning does not depend on a template parameter.
2. **Phase 2 (instantiation time):** Dependent names (those that _do_ depend on a template
   parameter) are looked up when the template is _instantiated_, using both the declaration context
   and the instantiation context.

```cpp
#include <iostream>

void g(int) { std::cout << "global g(int)\n"; }

template <typename T>
void f(T x) {
    // Phase 1: 'g' is non-dependent → looked up NOW
    // This calls global g(int) even if a better match exists at instantiation site.
    g(42);
    // Phase 2: 'x' is dependent → argument-dependent lookup (ADL) at instantiation
    h(x);  // 'h' is dependent: looked up when f<T> is instantiated
}

void g(double) { std::cout << "global g(double)\n"; }

struct S {};
void h(S) { std::cout << "h(S)\n"; }

int main() {
    f(42);       // prints "global g(int)" — phase-1 binding
    f(3.14);     // STILL prints "global g(int)" — overload resolution was locked at phase 1
    f(S{});      // prints "global g(int)" then "h(S)"
}
```

:::warning A non-dependent call like `g(42)` inside a template is bound at definition time [N4950
§13.8.3]. If a better overload of `g` is declared _after_ the template definition, it will **not**
be found. This is the single most surprising aspect of two-phase lookup and a frequent source of
bugs. :::

## Code Bloat from Implicit Instantiation

Every distinct set of template arguments produces a new instantiation. Consider:

```cpp
#include <vector>
#include <list>
#include <deque>

template <typename T, typename Container = std::vector<T>>
class PriorityQueue {
    Container data_;
public:
    void insert(const T& v) { data_.push_back(v); }
    bool empty() const { return data_.empty(); }
};

void instantiate_many() {
    PriorityQueue<int, std::vector<int>>    a;
    PriorityQueue<int, std::list<int>>      b;
    PriorityQueue<int, std::deque<int>>     c;
    PriorityQueue<double, std::vector<double>> d;
}
```

This generates **four** distinct class types, each with its own `insert` and `empty` functions. For
large templates used across many translation units, this can cause significant code bloat.

## See Also

- [Argument Deduction](./2_argument_deduction.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
- [Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md)
