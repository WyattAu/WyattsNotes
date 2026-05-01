---
title: Temporary Materialization
description: >-
  C++: Temporary Materialization — 5.1 From prvalue to xvalue; Formal Definition from the Standard; The Two-Phase Model: prvalue as Initializer.
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
reference, accessing a member, or being used in a context that requires an address [N4950 S7.3.5].

This is called **temporary materialization conversion**. The materialized temporary has the same
type as the prvalue and its lifetime is determined by the context in which it appears [N4950
S11.4.7].

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

### Formal Definition from the Standard

[N4950 S7.3.4]/1 defines a prvalue as an expression that **initializes** an object or computes the
value of an operand, as specified by the context in which it appears. Crucially, a prvalue does
**not** have identity — it is not an object, it is not a reference, and it has no address.

Temporary materialization conversion [N4950 S7.3.5] is the process by which a prvalue of type `T` is
converted to an xvalue of type `T`. The conversion creates a temporary object of type `T` by
initializing it from the prvalue. The resulting xvalue refers to this temporary. The temporary is
created with automatic storage duration, and its lifetime is governed by the usual rules for
temporaries [N4950 S11.4.7].

Formally, the Standard states [N4950 S7.3.5]:

> A temporary materialization conversion is applied whenever a prvalue appears as an operand of an
> operator or as the result of a conversion that requires the prvalue to have an object
> representation.

This means materialization is **never optional** — it is a language rule triggered by specific
syntactic contexts, not a compiler optimization.

### The Two-Phase Model: prvalue as Initializer

Prior to C++17, the Standard treated prvalues as rvalue temporaries. A prvalue of type `T` was an
xvalue of type `T` — it was already an object. The compiler was then permitted (but not required) to
elide the copy/move when initializing the destination [N4950 S11.9.6].

C++17 fundamentally changed this model. Now there are two distinct phases:

1. **Initialization phase:** The prvalue is a _recipe_ for construction. No object exists yet. The
   recipe is "applied" to the target storage directly.
2. **Materialization phase:** If the language requires an object with identity (e.g., for member
   access, binding to a reference), the recipe is _applied_ to a temporary, and the prvalue becomes
   an xvalue referring to that temporary.

This separation is what makes guaranteed copy elision a _language rule_ rather than an optimization.
When a prvalue initializes an object of the same type, the recipe is applied directly to the
destination — there is no intermediate temporary to elide, so there is nothing to optimize away.

```cpp
#include <iostream>

struct S {
    S() { std::cout << "S()\n"; }
    S(const S&) { std::cout << "S(const S&)\n"; }
    S(S&&) { std::cout << "S(S&&)\n"; }
    ~S() { std::cout << "~S()\n"; }
};

S make_s() {
    return S{};  // prvalue — recipe for constructing S
}

int main() {
    S s = make_s();
    // The prvalue S{} from inside make_s is a recipe.
    // That recipe is applied directly to s.
    // There is no temporary, no copy, no move.
    // Output: S()  ~S()
}
```

## 5.2 Guaranteed Copy Elision (C++17)

Since C++17, when a prvalue initializes an object of the same type, no temporary is created and no
copy/move constructor is invoked. The prvalue initializes the destination object directly [N4950
S8.4.4]. This is called **guaranteed copy elision** or **mandatory copy elision**.

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

### Proof That C++17 Eliminates Copy/Move in Return Statements

**Claim:** `return T{args};` in a function returning `T` never invokes a copy or move constructor of
`T`, regardless of whether `T`'s copy/move constructors are deleted.

**Proof:**

1. The expression `T{args}` is a prvalue of type `T` [N4950 S7.3.4].
2. A prvalue is not an object — it is an initializer [N4950 S7.3.4]/1.
3. When a prvalue of type `T` appears as the operand of a `return` statement in a function with
   return type `T`, the prvalue initializes the result object directly [N4950 S8.4.4].
4. Direct initialization of an object from a prvalue of the same type does not involve a copy or
   move constructor — the prvalue _is_ the initialization [N4950 S8.4.4]/1.
5. Therefore, no copy or move constructor is invoked. QED.

```cpp
#include <iostream>

struct NonCopyable {
    int data;
    NonCopyable(int d) : data(d) {
        std::cout << "NonCopyable(" << d << ")\n";
    }
    NonCopyable(const NonCopyable&) = delete;
    NonCopyable(NonCopyable&&) = delete;
    ~NonCopyable() {
        std::cout << "~NonCopyable(" << data << ")\n";
    }
};

NonCopyable make(int d) {
    return NonCopyable{d};  // Legal: prvalue, no copy/move needed
}

int main() {
    NonCopyable nc = make(42);
    // Compiles and runs: NonCopyable(42)  ~NonCopyable(42)
    std::cout << "nc.data = " << nc.data << "\n";
}
```

### Interaction with `decltype`

In C++17, `decltype` applied to a prvalue yields the non-reference type `T`, not `T&&` [N4950
S10.1.1]. This is consistent with the prvalue-as-recipe model: since a prvalue is not an object but
an initializer, there is no object to take a reference to.

```cpp
#include <type_traits>

struct Widget {
    int x;
};

int main() {
    static_assert(std::is_same_v<decltype(Widget{42}), Widget>);
    static_assert(std::is_same_v<decltype(std::move(Widget{42})), Widget&&>);

    Widget w{42};
    static_assert(std::is_same_v<decltype(w), Widget&>);
    static_assert(std::is_same_v<decltype(std::move(w)), Widget&&>);
    static_assert(std::is_same_v<decltype((w)), Widget&>);
}
```

## 5.3 NRVO and RVO

Two related but distinct optimizations exist:

- **RVO (Return Value Optimization):** The unnamed prvalue returned from a function is used to
  directly initialize the destination. This is **guaranteed** in C++17 [N4950 S8.4.4].
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

### NRVO Failure Cases

NRVO is an optimization performed by the compiler's backend. It fails when the compiler cannot
statically determine a unique local variable to construct in the caller's storage.

**1. Conditional returns with different named variables.**

```cpp
#include <iostream>

struct T {
    T(int v) : v(v) { std::cout << "  T(" << v << ") ctor\n"; }
    T(T&& o) noexcept : v(o.v) { o.v = 0; std::cout << "  T move\n"; }
    ~T() { std::cout << "  ~T(" << v << ")\n"; }
    int v;
};

T conditional(int x) {
    T a(1);
    T b(2);
    if (x > 0) {
        return a;  // NRVO cannot choose between a and b
    }
    return b;       // Each would need its own return slot
}

int main() {
    T t = conditional(1);
    // NRVO fails — move ctor is called as fallback.
}
```

**2. Returning a function parameter.**

```cpp
#include <iostream>

struct T {
    T(int v) : v(v) { std::cout << "  T(" << v << ") ctor\n"; }
    T(T&& o) noexcept : v(o.v) { o.v = 0; std::cout << "  T move\n"; }
    ~T() { std::cout << "  ~T(" << v << ")\n"; }
    int v;
};

T passthrough(T param) {
    return param;  // NRVO cannot apply: param is not a local variable
}

int main() {
    T t = passthrough(T{42});
    // Output: T(42) ctor  T move  ~T(0)  ~T(42)
}
```

The parameter `param` already exists in its own storage when the function body begins. The implicit
move rule [N4950 S11.9.6] applies instead.

**3. The address of the return variable escapes.**

```cpp
#include <iostream>

struct T {
    T(int v) : v(v) { std::cout << "  T(" << v << ") ctor\n"; }
    T(T&& o) noexcept : v(o.v) { o.v = 0; std::cout << "  T move\n"; }
    ~T() { std::cout << "  ~T(" << v << ")\n"; }
    int v;
};

void* escape_addr = nullptr;

T address_taken() {
    T local(99);
    escape_addr = &local;  // address escapes — NRVO inhibited
    return local;
}
```

**4. Debug builds (`-O0`).**

NRVO is an optimization. At `-O0`, compilers typically do not perform it. Always ensure your move
constructors are correct, because NRVO may not apply.

:::warning NRVO can be inhibited by multiple return paths returning different named variables, by
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
temporary object with automatic storage duration [N4950 S7.3.5]. The following contexts are
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

    // 3. Direct initialization — prvalue initializes dest, no separate temporary
    Sensor s = Sensor{7, 37.5};
    std::cout << "s.id = " << s.id << "\n";
}

int main() {
    materialization_points();
}
```

### Complete Enumeration of Materialization Contexts

The Standard enumerates every context where a temporary materialization conversion occurs [N4950
S7.3.5]. The full list:

- Binding a reference to a prvalue [N4950 S9.4.4].
- Performing a member access (`.`) on a class prvalue.
- Performing a pointer-to-member access (`.*`) on a class prvalue.
- Performing an array subscript (`[]`) on an array prvalue.
- Performing a subscript operation on a class prvalue that has `operator[]`.
- Initializing an object from a prvalue where the prvalue's type differs from the target type.
- Using a prvalue in a `throw` expression (the exception object is materialized [N4950 S14.2]).
- Using a prvalue as an operand where an lvalue is required (e.g., the built-in `&` operator).

## 5.5 Lifetime Extension Rules

When a prvalue is bound to a `const T&` or a `T&&`, the lifetime of the materialized temporary is
extended to match the lifetime of the reference [N4950 S11.4.7]. This is called **temporary lifetime
extension**.

:::warning Lifetime extension applies only when the reference is directly bound to the prvalue. If
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

### Lifetime Extension Does Not Chain

Lifetime extension applies to the **directly bound** reference only. If the reference is used to
initialize another reference, the extension does not propagate. The rule is precisely stated in
[N4950 S11.4.7]/2:

> The temporary object to which the reference is bound or the temporary object that is the complete
> object of a subobject to which the reference is bound persists for the lifetime of the reference
> if the reference is bound to a temporary object.

When a prvalue is passed to a function that takes a `const T&`, the temporary is materialized for
the function parameter, and the parameter's lifetime is the function body. When the function returns
a reference to that parameter, the returned reference is dangling.

### Lifetime Extension with Aggregate Initialization

When an aggregate is initialized from prvalues, the lifetime of those prvalues is extended if they
are bound to reference members. The prvalue `42` is directly bound to the reference member `r`
during aggregate initialization [N4950 S11.6.1]. The lifetime extension rule applies:

```cpp
struct RefHolder {
    const int& r;
};

void aggregate_extension() {
    RefHolder h{42};  // Temporary int(42) materialized, lifetime extended to h's lifetime
    // h.r is valid for the entire scope
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

    // 2. Function return prvalue → direct initialization (no move)
    std::cout << "--- return prvalue ---\n";
    Buffer b2 = make_buffer();

    // 3. std::move creates xvalue → move ctor is called
    std::cout << "--- move from lvalue ---\n";
    Buffer b3 = std::move(b1);

    // 4. Materialized temporary bound to rvalue ref → move from it
    std::cout << "--- move from materialized temp ---\n";
    Buffer&& rref = Buffer{200};  // prvalue materializes into temporary
    Buffer b4 = std::move(rref);  // Move ctor called on the materialized temporary
}

int main() {
    move_semantics_demo();
}
```

### Materialization During Template Argument Deduction

When a prvalue is passed to a function template, materialization depends on the parameter type:

- **By value:** The prvalue directly initializes the parameter (guaranteed elision). No separate
  temporary is created.
- **By `const T&` or `T&&`:** The prvalue materializes into a temporary, and the reference binds to
  it. The temporary lives until the end of the full-expression containing the call.

## 5.7 Implicit Conversion Chains and Materialization

When an implicit conversion occurs, each step in the chain may involve materialization. The prvalue
result of one conversion becomes the initializer for the next, and the entire chain is resolved into
direct initialization of the final object [N4950 S7.3.5].

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
    DoubleWrapper(IntWrapper w) : value{static_cast<double>(w.value)} {
        std::cout << "DoubleWrapper(" << value << ")\n";
    }
};

void conversion_chain() {
    // The literal 42 is an int prvalue.
    // It converts to IntWrapper via IntWrapper(int).
    // The IntWrapper prvalue converts to DoubleWrapper via DoubleWrapper(IntWrapper).
    // In C++17: no temporary IntWrapper is created.
    DoubleWrapper dw = 42;
    std::cout << "dw.value = " << dw.value << "\n";
}

int main() {
    conversion_chain();
}
```

### Materialization in Conversion to Base Class

When a derived-class prvalue initializes a base-class object, the prvalue materializes because the
types differ. The materialized temporary is then sliced:

```cpp
#include <iostream>

struct Base {
    int b;
    Base(int v) : b(v) { std::cout << "Base(" << b << ")\n"; }
    Base(Base&& o) noexcept : b(o.b) { o.b = 0; std::cout << "Base move\n"; }
    ~Base() { std::cout << "~Base(" << b << ")\n"; }
};

struct Derived : Base {
    Derived(int v) : Base(v) { std::cout << "Derived ctor\n"; }
    ~Derived() { std::cout << "~Derived\n"; }
};

void slicing_demo() {
    Base b1 = Base{1};     // Guaranteed elision: same type
    Base b2 = Derived{2};  // Derived prvalue materializes, then moved to Base
}

int main() {
    slicing_demo();
}
```

## 5.8 Materialization in Expressions

Materialization can occur at any point within a complex expression where an identity is required.
The order in which materialized temporaries in different sub-expressions are created and destroyed
is governed by the rules for evaluation order. In C++17, the order of evaluation of function
arguments is unspecified [N4950 S7.6.1.9], so materialized temporaries in different arguments may be
destroyed in any order.

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

    // Materialization in a conditional
    std::cout << "Expression 2:\n";
    bool b = Recorder{"cond"}.name.size() > 0;
    std::cout << "b = " << b << "\n";

    // Materialization in function argument
    std::cout << "Expression 3:\n";
    auto take_ref = [](const Recorder& r) {
        return r.name;
    };
    std::string result = take_ref(Recorder{"arg"});
    std::cout << "result = " << result << "\n";
}

int main() {
    expression_materialization();
}
```

### Materialization in Range-Based For Loops

The range expression in a range-based `for` loop is materialized once, and the resulting temporary
persists for the duration of the loop [N4950 S8.6.5]/1:

```cpp
#include <iostream>
#include <vector>

struct Container {
    std::vector<int> data;
    Container(std::initializer_list<int> il) : data(il) {
        std::cout << "Container ctor\n";
    }
    ~Container() {
        std::cout << "Container dtor\n";
    }
};

void range_for_materialization() {
    for (int x : Container{1, 2, 3}) {
        std::cout << "x = " << x << "\n";
    }
    // Temporary Container destroyed here, after loop completes
}

int main() {
    range_for_materialization();
}
```

## 5.9 Materialization and `new` Expressions

When `new T{args}` is evaluated, the prvalue `T{args}` is used to initialize the newly allocated
storage. The prvalue initializes the object directly — no temporary is created [N4950 S7.6.2.8].

```cpp
#include <iostream>

struct S {
    S(int v) : v(v) { std::cout << "S(" << v << ")\n"; }
    S(const S&) { std::cout << "S copy\n"; }
    S(S&&) noexcept { std::cout << "S move\n"; }
    ~S() { std::cout << "~S(" << v << ")\n"; }
    int v;
};

void new_demo() {
    S* p = new S{42};  // Output: S(42) — no copy, no move
    delete p;
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
- **Confusing materialization with copy elision.** Materialization is a _language rule_ (prvalue
  becomes an object), not an optimization. Copy elision is the _absence_ of materialization when a
  prvalue initializes an object of the same type.
- **NRVO failure in debug builds.** NRVO is an optimization that is typically disabled at `-O0`.
  Always write code that is correct with or without NRVO.
- **Using `std::move` on a prvalue return.** `return std::move(T{args});` is redundant and
  pessimizing. The prvalue `T{args}` would directly initialize the return slot (guaranteed elision),
  but `std::move(T{args})` produces an xvalue, forcing materialization and a move. Just write
  `return T{args};`.
