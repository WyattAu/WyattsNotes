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

:::warning
NRVO can be inhibited by multiple return paths returning different named variables, by
returning a function parameter, or by certain compiler flags. Always write code that is correct even
if NRVO fails — which means ensuring your move constructor is correct (or your copy constructor, as
a fallback).
:::

## See Also

- [Value Taxonomy](1_value_taxonomy.md)
- [Reference Collapsing and Forwarding References](2_reference_collapsing.md)
- [Return Value Optimization (RVO) and NRVO](5_return_value_optimization.md)

## 5.4 Materialization Points

A prvalue is materialized at specific points in the language. The materialization creates a
temporary object with automatic storage duration [N4950 §7.3.5]. The following contexts are
materialization points:

1. **Binding to a reference.** When a prvalue binds to a `const T&` or `T&&`, a temporary is created
   and the reference binds to it.
2. **Member access on a prvalue class.** `Point{1, 2}.x` materializes the `Point` temporary.
3. **Taking the address.** `&Point{1, 2}` is ill-formed in C++17 — you cannot take the address of a
   prvalue. You must materialize it first: `const auto& r = Point{1, 2}; &r;`.
4. **Initializing an object.** `T t = T{...};` — the prvalue initializes `t` directly (no separate
   temporary, due to guaranteed copy elision).
5. **Using a prvalue in a condition.** `if (Point{1, 2}.x &gt; 0)` materializes the temporary.

```cpp
#include <iostream>

struct Sensor {
    int id;
    double reading;

    Sensor(int i, double r) : id{i}, reading{r} {
        std::cout << "Sensor(" << id << ", " << reading << ")\n";
    }
    ~Sensor() { std::cout << "~Sensor(" << id << ")\n"; }
};

void materialization_points() {
    // 1. Binding to const reference — lifetime extended to scope end
    const Sensor& ref = Sensor{42, 36.6};
    std::cout << "ref.id = " << ref.id << "\n";

    // 2. Member access on prvalue — temporary lives until end of full-expression
    int x = Sensor{99, 98.0}.id;
    std::cout << "x = " << x << "\n";
    // Temporary Sensor{99, 98.0} is destroyed at the semicolon above

    // 3. Direct initialization — prvalue initializes dest, no separate temporary
    Sensor s = Sensor{7, 37.5};
    std::cout << "s.id = " << s.id << "\n";
}
// ref's temporary destroyed here
// s destroyed here

int main() {
    materialization_points();
}
```

Output:

```
Sensor(42, 36.6)
ref.id = 42
Sensor(99, 98.0)
~Sensor(99, 98.0)
x = 99
Sensor(7, 37.5)
s.id = 7
~Sensor(7, 37.5)
~Sensor(42, 36.6)
```

## 5.5 Lifetime Extension Rules

When a prvalue is bound to a `const T&` or a `T&&`, the lifetime of the materialized temporary is
extended to match the lifetime of the reference [N4950 §11.4.7]. This is called **temporary lifetime
extension**.

:::warning
Lifetime extension applies only when the reference is directly bound to the prvalue. If
the prvalue is passed through an intermediate function or stored in a member, lifetime extension
does **not** propagate.
:::

```cpp
#include <iostream>

struct Widget {
    Widget() { std::cout << "Widget ctor\n"; }
    ~Widget() { std::cout << "Widget dtor\n"; }
    int data = 42;
};

// BAD: function parameter does not extend lifetime
const int& bad_extend() {
    return 42;  // dangling reference — temporary dies at end of return statement
}

// BAD: member reference does not extend lifetime
struct Holder {
    const Widget& ref;  // dangling if initialized from a temporary
};

void lifetime_extension() {
    // GOOD: direct binding extends lifetime to end of scope
    const int& r1 = 42;
    std::cout << "r1 = " << r1 << "\n";  // OK

    // GOOD: direct binding of prvalue to const ref
    const Widget& w = Widget{};
    std::cout << "w.data = " << w.data << "\n";  // OK, temporary alive

    // BAD: indirect binding through function return
    // const int& r2 = bad_extend();  // r2 is dangling — undefined behavior

    // BAD: member reference from temporary
    // Holder h{Widget{}};  // h.ref is dangling — temporary dies at end of constructor
}

int main() {
    lifetime_extension();
}
```

## 5.6 Materialization and Move Semantics

Materialization interacts with move semantics in subtle ways. When a prvalue initializes an object,
no move occurs — the object is constructed directly. But when an xvalue (materialized temporary
bound to an rvalue reference) is used to initialize another object, move semantics apply.

```cpp
#include <iostream>
#include <utility>
#include <vector>
#include <string>

struct Buffer {
    std::vector<int> data;

    Buffer(std::size_t n) : data(n, 0) {
        std::cout << "Buffer ctor (" << n << " elements)\n";
    }
    Buffer(const Buffer& other) : data(other.data) {
        std::cout << "Buffer copy ctor\n";
    }
    Buffer(Buffer&& other) noexcept : data(std::move(other.data)) {
        std::cout << "Buffer move ctor\n";
    }
    ~Buffer() { std::cout << "Buffer dtor\n"; }
};

Buffer make_buffer() {
    return Buffer{1000};  // prvalue — guaranteed elision
}

void move_semantics_demo() {
    // 1. prvalue → direct initialization (no move)
    std::cout << "--- prvalue init ---\n";
    Buffer b1 = Buffer{500};
    // Only default ctor called, no move

    // 2. Function return prvalue → direct initialization (no move)
    std::cout << "--- return prvalue ---\n";
    Buffer b2 = make_buffer();
    // Only default ctor called, no move

    // 3. std::move creates xvalue → move ctor is called
    std::cout << "--- move from lvalue ---\n";
    Buffer b3 = std::move(b1);
    // Move ctor is called, b1 is left in a moved-from state

    // 4. Materialized temporary bound to rvalue ref → move from it
    std::cout << "--- move from materialized temp ---\n";
    Buffer&& rref = Buffer{200};  // prvalue materializes into temporary
    Buffer b4 = std::move(rref);  // Move ctor called on the materialized temporary
}

int main() {
    move_semantics_demo();
}
```

## 5.7 Implicit Conversion Chains and Materialization

When an implicit conversion occurs, each step in the chain may involve materialization. The prvalue
result of one conversion becomes the initializer for the next, and the entire chain is resolved into
direct initialization of the final object [N4950 §7.3.5].

```cpp
#include <iostream>

struct IntWrapper {
    int value;
    IntWrapper(int v) : value{v} {
        std::cout << "IntWrapper(" << v << ")\n";
    }
};

struct DoubleWrapper {
    double value;
    DoubleWrapper(IntWrapper w) : value{static_cast&lt;double&gt;(w.value)} {
        std::cout << "DoubleWrapper(" << value << ")\n";
    }
};

void conversion_chain() {
    // The literal 42 is an int prvalue.
    // It converts to IntWrapper via IntWrapper(int).
    // The IntWrapper prvalue converts to DoubleWrapper via DoubleWrapper(IntWrapper).
    // In C++17: no temporary IntWrapper is created.
    // The IntWrapper is constructed directly as the argument to DoubleWrapper.
    // Then DoubleWrapper is constructed directly as 'dw'.
    DoubleWrapper dw = 42;
    std::cout << "dw.value = " << dw.value << "\n";
}

int main() {
    conversion_chain();
}
```

## 5.8 Materialization in Expressions

Materialization can occur at any point within a complex expression where an identity is required.
Understanding exactly when materialization happens helps avoid subtle lifetime bugs.

```cpp
#include <iostream>
#include <string>

struct Recorder {
    std::string name;
    Recorder(const std::string& n) : name{n} {
        std::cout << "  ctor: " << name << "\n";
    }
    ~Recorder() {
        std::cout << "  dtor: " << name << "\n";
    }
};

void expression_materialization() {
    // Materialization at member access: temporary lives until end of full-expression
    std::cout << "Expression 1:\n";
    std::string s = Recorder{"temp"}.name;
    std::cout << "s = " << s << "\n";
    // Recorder temporary destroyed at the semicolon above

    // Materialization in a conditional
    std::cout << "Expression 2:\n";
    bool b = Recorder{"cond"}.name.size() &gt; 0;
    std::cout << "b = " << b << "\n";
    // Recorder temporary destroyed at the semicolon above

    // Materialization in function argument
    std::cout << "Expression 3:\n";
    auto take_ref = [](const Recorder& r) {
        return r.name;
    };
    std::string result = take_ref(Recorder{"arg"});
    std::cout << "result = " << result << "\n";
    // Recorder temporary lives until end of the full-expression containing the call
}

int main() {
    expression_materialization();
}
```

## Common Pitfalls

- **Dangling references from lifetime non-extension.** Returning a reference to a materialized
  temporary, or storing a temporary in a struct member reference, creates a dangling reference.
- **Assuming materialization creates a copy.** In C++17, prvalue materialization creates the object
  directly at the destination — there is no separate temporary and no copy/move.
- **Taking the address of a prvalue.** `&T{...}` is ill-formed. Bind to a reference first, then take
  its address.
- **Relying on materialization order in function arguments.** The order of evaluation of function
  arguments is unspecified. Materialized temporaries in different arguments may be destroyed in any
  order.

:::

:::
