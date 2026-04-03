---
title: Temporary Materialization
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: temporary-materialization
---

# Temporary Materialization

In C++17 and later, a prvalue is not an object — it is a recipe for constructing one. The prvalue is
**materialized** into an actual object only when the language requires an identity: binding to a
reference, accessing a member, or taking an address. This distinction is what makes guaranteed copy
elision (RVO) possible.

## 5.1 From prvalue to xvalue

In C++17 and later, a prvalue is not an object — it is a recipe for constructing an object. The
prvalue is **materialized** (converted to an xvalue) only when it needs an identity: binding to a
reference, accessing a member, or being used in a context that requires an address [N4950 §7.3.5].

This is called **temporary materialization conversion**. The materialized temporary has the same
type as the prvalue and its lifetime is determined by the context in which it appears [N4950
§11.4.7].

```cpp
#include <type_traits>
#include <utility>

struct Point {
    int x, y;
};

void materialization_demo() {
    // Point{1, 2} is a prvalue — no object exists yet
    // Binding to const Point& materializes it into a temporary
    const Point& ref = Point{1, 2};
    // ref now refers to a materialized temporary with lifetime extended to match ref

    // std::move(ref) is an xvalue — it already has identity
    Point stolen = std::move(ref);
}
```

## 5.2 Guaranteed Copy Elision (C++17)

Since C++17, when a prvalue initializes an object of the same type, no temporary is created and no
copy/move constructor is invoked. The prvalue initializes the destination object directly [N4950
§8.4.4]. This is called **guaranteed copy elision** or **mandatory copy elision**.

```cpp
#include <iostream>

struct Tracer {
    Tracer() { std::cout << "default ctor\n"; }
    Tracer(const Tracer&) { std::cout << "copy ctor\n"; }
    Tracer(Tracer&&) { std::cout << "move ctor\n"; }
    ~Tracer() { std::cout << "dtor\n"; }
};

Tracer make_tracer() {
    return Tracer{};  // prvalue — guaranteed elision
}

int main() {
    std::cout << "--- direct init from prvalue ---\n";
    Tracer t = Tracer{};  // No copy, no move — only default ctor + dtor

    std::cout << "--- return from function ---\n";
    Tracer t2 = make_tracer();  // No copy, no move — only default ctor + dtor
}
```

Output:

```
--- direct init from prvalue ---
default ctor
dtor
--- return from function ---
default ctor
dtor
```

Notice that neither the copy constructor nor the move constructor is called. The prvalue `Tracer{}`
is not materialized into a temporary — it directly initializes `t` and `t2`.

## 5.3 NRVO and RVO

Two related but distinct optimizations exist:

- **RVO (Return Value Optimization):** The unnamed prvalue returned from a function is used to
  directly initialize the destination. This is **guaranteed** in C++17 [N4950 §8.4.4].
- **NRVO (Named Return Value Optimization):** A named local variable returned from a function is
  constructed directly in the caller's storage. This is **not guaranteed** but is performed by all
  major compilers under `-O2`.

```cpp
#include <iostream>

struct Tracer {
    Tracer() { std::cout << "  default ctor\n"; }
    Tracer(const Tracer&) { std::cout << "  copy ctor\n"; }
    Tracer(Tracer&&) noexcept { std::cout << "  move ctor\n"; }
    ~Tracer() { std::cout << "  dtor\n"; }
};

// NRVO candidate: named local variable
Tracer nrvo_example() {
    Tracer local;  // Named variable
    return local;  // NRVO may elide the copy/move
}

// RVO (guaranteed): prvalue return
Tracer rvo_example() {
    return Tracer{};  // Guaranteed: no copy, no move
}

int main() {
    std::cout << "NRVO:\n";
    Tracer a = nrvo_example();

    std::cout << "RVO (guaranteed):\n";
    Tracer b = rvo_example();
}
```

With NRVO enabled (`-O2`), output:

```
NRVO:
  default ctor
  dtor
RVO (guaranteed):
  default ctor
  dtor
```

With NRVO disabled (`-fno-elide-constructors`), output:

```
NRVO:
  default ctor
  move ctor
  dtor
  dtor
RVO (guaranteed):
  default ctor
  dtor
```

Note: even with NRVO disabled, the RVO case still produces no copy/move because C++17 guarantees it.

:::warning NRVO can be inhibited by multiple return paths returning different named variables, by
returning a function parameter, or by certain compiler flags. Always write code that is correct even
if NRVO fails — which means ensuring your move constructor is correct (or your copy constructor, as
a fallback). :::

## See Also

- [Value Taxonomy](1_value_taxonomy.md)
- [Reference Collapsing and Forwarding References](2_reference_collapsing.md)
- [Return Value Optimization (RVO) and NRVO](5_return_value_optimization.md)
