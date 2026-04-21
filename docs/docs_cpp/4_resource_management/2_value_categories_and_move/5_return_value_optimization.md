---
title: Return Value Optimization (RVO) and NRVO
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: return-value-optimization-rvo-and-nrvo
---

# Return Value Optimization (RVO) and NRVO

Return value optimization is the compiler's ability to construct a return value directly in the
caller's storage, eliminating unnecessary copies and moves. C++17 guarantees this for prvalue
returns (RVO), while named returns (NRVO) remain an optional but widely-implemented optimization.
Understanding the fallback chain — RVO, NRVO, implicit move, copy — is essential for writing
efficient code.

## 8.1 Guaranteed Copy Elision (C++17 RVO)

C++17 mandates that a prvalue returned from a function initializes the destination object directly.
No temporary is created, and no copy or move constructor is invoked [N4950 S8.4.4]. This applies
specifically to **prvalue returns** — returns of unnamed temporaries.

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) { std::cout << "  Widget(" << id << ") copy ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) { std::cout << "  Widget(" << id << ") move ctor\n"; }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget factory(int id) {
    return Widget{id};  // prvalue — guaranteed elision
}

int main() {
    std::cout << "Guaranteed elision:\n";
    Widget w = factory(42);
    // Output: Widget(42) ctor, ~Widget(42)
    // No copy, no move.
}
```

### Proof of Zero-Copy Guarantee for URVO in C++17

URVO (Unnamed Return Value Optimization) is the C++17 guaranteed form. We can prove that it is
zero-copy by tracing the Standard's definitions:

**Claim:** `return T{args};` in a function returning `T` produces exactly one constructor call — the
direct construction of `T` in the caller's storage. No temporary object is created.

**Proof:**

1. `T{args}` is a prvalue of type `T` [N4950 S7.3.4].
2. In C++17 and later, a prvalue is not an object. It is an initializer — a set of instructions for
   constructing an object of type `T` [N4950 S7.3.4]/1.
3. When a prvalue of type `T` is used to initialize an object of type `T` (whether a local variable,
   a function parameter, or the return value of a function), the prvalue directly initializes the
   destination object [N4950 S8.4.4].
4. "Directly initializes" means the constructor for `T` is invoked with the destination object's
   storage as the `this` pointer. There is no intermediate temporary.
5. In a function `T f() { return T{args}; }`, the prvalue `T{args}` directly initializes the
   **result object** of the function call expression [N4950 S8.4.4]/1.
6. The result object is the object in the caller's storage that the function call initializes.
7. Therefore, exactly one `T(args)` constructor call occurs, directly in the caller's storage. QED.

**Corollary:** Even if `T` has deleted copy and move constructors, `return T{args};` is still
well-formed in C++17, because no copy or move is needed.

```cpp
#include <iostream>

struct Immovable {
    int data;
    Immovable(int d) : data(d) {
        std::cout << "Immovable(" << data << ")\n";
    }
    Immovable(const Immovable&) = delete;
    Immovable(Immovable&&) = delete;
    ~Immovable() {
        std::cout << "~Immovable(" << data << ")\n";
    }
};

Immovable make_immovable(int d) {
    return Immovable{d};  // Legal in C++17: prvalue, no copy/move needed
}

int main() {
    Immovable x = make_immovable(42);
    // Output: Immovable(42)  ~Immovable(42)
    // Exactly one constructor call, one destructor call.
}
```

### Assembly-Level Illustration

To build intuition for why URVO is zero-copy, consider the conceptual assembly for a function
returning a large object. In the Itanium C++ ABI (used by GCC and Clang on x86_64), when a function
returns a non-trivial type, the caller passes a hidden first parameter — a pointer to the return
value's storage:

```asm
; Caller code:
    lea     rdi, [rbp-64]       ; Address of destination storage (hidden param)
    call    make_widget          ; Widget constructed directly at rbp-64

; Callee code (make_widget):
    ; rdi = pointer to return slot
    mov     DWORD PTR [rdi], 42 ; Initialize Widget::id directly in caller's storage
    ret                          ; No copy, no move
```

There is no temporary on the callee's stack. The `Widget` is constructed directly at the address
provided by the caller. This is not an optimization — it is the ABI contract for C++17.

### URVO vs. NRVO: The Fundamental Distinction

The difference between URVO and NRVO is a difference between a language rule and a compiler
optimization:

| Property           | URVO (Unnamed RVO)            | NRVO (Named RVO)                                   |
| :----------------- | :---------------------------- | :------------------------------------------------- |
| Standard status    | **Guaranteed** (C++17+)       | Optional optimization                              |
| Applies to         | `return T{args};` (prvalue)   | `return local;` (named variable)                   |
| Fails when         | Never (it is a language rule) | Multiple return paths, address-taken, debug builds |
| Can be disabled    | No (not an optimization)      | Yes (`-fno-elide-constructors`)                    |
| Requires move ctor | No (not needed)               | As fallback if NRVO fails                          |
| Standard reference | [N4950 S8.4.4]                | [N4950 S11.9.6] (implicit move rule)               |

## 8.2 When NRVO Applies

NRVO (Named Return Value Optimization) is a compiler optimization, not a language guarantee. It
applies when a function returns a **named local variable** by value, and the compiler constructs
that variable directly in the caller's storage.

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) { std::cout << "  Widget(" << id << ") copy ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) { std::cout << "  Widget(" << id << ") move ctor\n"; }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget nrvo_factory(int id) {
    Widget local(id);  // Named local variable
    // ... possibly complex logic ...
    return local;  // NRVO may elide the copy/move
}

int main() {
    std::cout << "NRVO (typically elided at -O2):\n";
    Widget w = nrvo_factory(99);
}
```

With `-O2`, output:

```
NRVO (typically elided at -O2):
  Widget(99) ctor
  ~Widget(99)
```

With `-fno-elide-constructors`, output:

```
NRVO (typically elided at -O2):
  Widget(99) ctor
  Widget(99) move ctor
  ~Widget(99)
  ~Widget(0)
```

### Conditions for NRVO

NRVO is applicable when **all** of the following conditions hold:

1. The function returns a **single** named local variable (the same variable on every return path).
2. The local variable's type matches the function's return type.
3. The local variable's address does not escape (it is not passed to another function that might
   store the address).
4. The compiler is performing optimization (NRVO is typically disabled at `-O0`).
5. No inline assembly or other constructs prevent the compiler from redirecting the variable's
   storage.

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(Widget&&) noexcept { std::cout << "  Widget move\n"; }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

// NRVO applicable: single named variable, single return path
Widget good_nrvo(int id) {
    Widget local(id);
    return local;  // NRVO can apply
}

// NRVO applicable: single named variable, early returns but same variable
Widget early_return(int id) {
    Widget local(id);
    if (id < 0) {
        return local;  // Same variable
    }
    return local;  // Same variable — NRVO can apply
}

// NRVO NOT applicable: different named variables on different paths
Widget bad_nrvo(int flag) {
    Widget a(1);
    Widget b(2);
    if (flag) return a;  // Different variable
    return b;              // NRVO fails
}

int main() {
    std::cout << "good_nrvo:\n";
    Widget w1 = good_nrvo(1);

    std::cout << "early_return:\n";
    Widget w2 = early_return(1);

    std::cout << "bad_nrvo:\n";
    Widget w3 = bad_nrvo(true);
}
```

## 8.3 When NRVO Fails: Fallback to Move

When NRVO cannot be applied (multiple return paths, conditional returns, debug builds without
optimization), the compiler falls back to treating the return as a move (if a move constructor
exists), or a copy (if only a copy constructor exists):

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) { std::cout << "  Widget(" << id << ") copy ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) {
        o.id = 0;
        std::cout << "  Widget(" << id << ") move ctor\n";
    }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget conditional_factory(bool flag) {
    Widget a(1);
    Widget b(2);

    if (flag) {
        return a;  // NRVO cannot apply: two different named variables
    }
    return b;      // are returned on different paths
}

int main() {
    std::cout << "NRVO fails — falls back to move:\n";
    Widget w = conditional_factory(true);
}
```

Output (even at `-O2` on most compilers):

```
NRVO fails — falls back to move:
  Widget(1) ctor
  Widget(2) ctor
  Widget(1) move ctor
  ~Widget(0)
  ~Widget(2)
  ~Widget(1)
```

### The Implicit Move Rule

When NRVO does not apply and a named local variable is returned, the compiler treats the return as
if the variable were cast to an rvalue reference. This is called the **implicit move rule** [N4950
S11.9.6]/1:

> When the criteria for elision of a copy/move operation are met or would be met save for the fact
> that the source object is a function parameter, and the object to be copied is designated by an
> lvalue, overload resolution to select the constructor for the copy is first performed as if the
> object were designated by an rvalue.

In practice, this means:

```cpp
Widget f() {
    Widget local(42);
    return local;  // Treated as: return std::move(local);
                   // IF NRVO does not apply
}
```

The implicit move rule ensures that even when NRVO fails, the move constructor is used instead of
the copy constructor (assuming a move constructor exists). This is a significant performance win
compared to C++11's early days, where NRVO failure meant a copy.

### NRVO Failure and the Copy Constructor

If the move constructor is deleted or not declared, and NRVO fails, the compiler falls back to the
copy constructor:

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) {
        std::cout << "  Widget(" << id << ") copy ctor\n";
    }
    // No move constructor declared
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget no_move_factory(int flag) {
    Widget local(42);
    if (flag) return local;  // NRVO may fail, no move ctor → copy ctor used
    return local;
}

int main() {
    Widget w = no_move_factory(true);
    // At -O2 with NRVO: Widget(42) ctor  ~Widget(42)
    // At -O0 without NRVO: Widget(42) ctor  Widget(42) copy ctor  ~Widget(42)  ~Widget(42)
}
```

## 8.4 The Fallback Chain

When returning a local variable from a function, the compiler tries each strategy in order:

1. **Guaranteed elision (C++17 RVO):** If the return expression is a prvalue of the same type as the
   function return type, no copy/move occurs. This is mandatory.
2. **NRVO:** If the return expression names a local variable, the compiler may construct it in the
   caller's storage. This is optional but widely implemented.
3. **Implicit move:** If NRVO does not apply, the compiler treats the return as if
   `std::move(local)` were written. The move constructor is called [N4950 S11.9.6].
4. **Copy:** If no move constructor exists (or it is deleted), the copy constructor is called. If
   neither exists, compilation fails.

:::warning Do not write `return std::move(local);` in a function that returns by value. This
prevents NRVO from applying (because `std::move(local)` is an xvalue, not a named local variable)
and forces a move. Let the compiler apply NRVO or implicit move automatically. The only correct use
of `std::move` in a return statement is when returning a member variable or a function parameter.
:::

### Decision Table: RVO Applicability

| Return Expression                           | Type Match? | RVO (Guaranteed)? | NRVO (Optional)? | Fallback       |
| :------------------------------------------ | :---------- | :---------------- | :--------------- | :------------- |
| `return T{args};`                           | Yes         | Yes               | N/A              | None needed    |
| `return T(args);`                           | Yes         | Yes               | N/A              | None needed    |
| `return local;` (single return path)        | Yes         | N/A               | Yes              | Implicit move  |
| `return local;` (multiple paths)            | Yes         | N/A               | Maybe            | Implicit move  |
| `return local;` (address taken)             | Yes         | N/A               | No               | Implicit move  |
| `return param;` (function parameter)        | Yes         | N/A               | No               | Implicit move  |
| `return member_;` (data member)             | Yes         | N/A               | No               | Implicit move  |
| `return Derived{};` (function returns Base) | No          | No                | N/A              | Move (slicing) |
| `return std::move(local);`                  | Yes         | No                | No               | Explicit move  |

## 8.5 Anti-Pattern: `return std::move(local)`

```cpp
#include <iostream>
#include <utility>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) { std::cout << "  Widget(" << id << ") copy ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) {
        o.id = 0;
        std::cout << "  Widget(" << id << ") move ctor\n";
    }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

// BAD: std::move prevents NRVO
Widget bad_factory() {
    Widget local(42);
    return std::move(local);  // Forces move; NRVO inhibited
}

// GOOD: NRVO applies (or implicit move as fallback)
Widget good_factory() {
    Widget local(42);
    return local;  // NRVO or implicit move
}

int main() {
    std::cout << "Bad (std::move prevents NRVO):\n";
    Widget w1 = bad_factory();

    std::cout << "Good (NRVO or implicit move):\n";
    Widget w2 = good_factory();
}
```

Typical output:

```
Bad (std::move prevents NRVO):
  Widget(42) ctor
  Widget(42) move ctor
  ~Widget(0)
  ~Widget(42)
Good (NRVO or implicit move):
  Widget(42) ctor
  ~Widget(42)
```

### Why `std::move` Prevents NRVO

NRVO works by constructing the named local variable directly in the return slot. For this to work,
the compiler must be able to prove that every use of the local variable can be redirected to the
return slot. When you write `return std::move(local)`, the return expression is no longer the named
variable `local` — it is an xvalue produced by `std::move(local)`. The compiler can no longer prove
that the local variable and the return expression refer to the same object, so NRVO is inhibited.

Furthermore, `std::move` is never an optimization in a return statement because the implicit move
rule already applies when NRVO fails. Writing `return std::move(local)` is always a pessimization:
it prevents NRVO and forces the move that the compiler would have done automatically.

### When `std::move` IS Correct in a Return Statement

The only correct uses of `std::move` in a return statement are:

1. **Returning a data member:** Data members are not local variables, so NRVO never applies. The
   implicit move rule also does not apply to data members. You must use `std::move` explicitly.

```cpp
#include <utility>
#include <string>

class Owner {
    std::string name_;
public:
    explicit Owner(std::string name) : name_(std::move(name)) {}

    std::string release_name() {
        return std::move(name_);  // Correct: data member, no NRVO possible
    }
};
```

2. **Returning a function parameter (by value):** When a function takes a parameter by value and
   returns it, the implicit move rule applies to the parameter. However, some older compilers may
   not implement this correctly. Using `std::move` is defensive but not necessary on conforming
   C++11+ compilers.

```cpp
#include <utility>
#include <string>

std::string transform(std::string s) {
    s += "_suffix";
    return std::move(s);  // Implicit move already applies, but std::move is harmless
}
```

3. **Returning through a wrapper that does not support NRVO:** When the return expression goes
   through a helper function or a type cast that obscures the named variable, NRVO cannot apply.

```cpp
#include <utility>
#include <string>

template<typename T>
T identity(T t) { return t; }

std::string wrapped_return() {
    std::string s = "hello";
    return identity(std::move(s));  // Must move: identity takes by value
}
```

:::info Relevance The interaction between value categories, move semantics, and copy elision is one
of the most performance-critical aspects of C++. In a well-written C++ program, objects are
constructed in place (RVO), moved between scopes (move constructors), and swapped (swap idiom).
Copies are the exception, not the rule. Understanding the fallback chain (RVO → NRVO → implicit move
→ copy) is essential for writing code that is both correct and efficient. :::

## 8.6 RVO in Other Contexts

Guaranteed copy elision (C++17 RVO) applies not only to `return` statements but also to variable
initialization from prvalues [N4950 S8.4.4]. Whenever a prvalue appears as the initializer for an
object of the same type, the object is constructed directly in the target storage:

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget& o) : id(o.id) { std::cout << "  Widget(" << id << ") copy ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) { std::cout << "  Widget(" << id << ") move ctor\n"; }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget make_widget(int id) {
    return Widget{id};  // prvalue — guaranteed elision
}

int main() {
    // All of these are guaranteed elision (prvalue initialization):

    // 1. Direct variable initialization
    Widget w1 = Widget{1};   // Widget(1) ctor only

    // 2. Function return value
    Widget w2 = make_widget(2);  // Widget(2) ctor only

    // 3. New expression
    Widget* p = new Widget{3};  // Widget(3) ctor only

    // 4. Parenthesized initialization
    Widget w4(Widget{4});      // Widget(4) ctor only — NOT a copy

    delete p;
}
```

### RVO and Brace Initialization

Brace initialization with prvalues also benefits from guaranteed copy elision:

```cpp
#include <iostream>

struct Point {
    double x, y;
    Point(double x, double y) : x(x), y(y) {
        std::cout << "  Point(" << x << ", " << y << ")\n";
    }
    Point(const Point&) { std::cout << "  Point copy\n"; }
    Point(Point&&) noexcept { std::cout << "  Point move\n"; }
};

Point origin() {
    return {0.0, 0.0};  // prvalue — guaranteed elision
}

int main() {
    Point p = origin();  // no copy, no move
    Point q = Point{1.0, 2.0};  // guaranteed elision
}
```

## 8.7 RVO with Inheritance

Guaranteed copy elision applies across inheritance hierarchies. When a prvalue of derived type is
used to initialize a base-type variable, the elision does NOT apply (because the types differ), and
the copy/move constructor is called. But when the types match, elision applies normally:

```cpp
#include <iostream>

struct Base {
    int id;
    Base(int i) : id(i) { std::cout << "  Base(" << id << ") ctor\n"; }
    Base(const Base& o) : id(o.id) { std::cout << "  Base(" << id << ") copy\n"; }
    Base(Base&& o) noexcept : id(o.id) { std::cout << "  Base(" << id << ") move\n"; }
    virtual ~Base() = default;
};

struct Derived : Base {
    using Base::Base;
};

int main() {
    // Same type — guaranteed elision
    Base b1 = Base{1};  // Base(1) ctor only

    // Different type — copy elision does NOT apply (slicing occurs)
    Base b2 = Derived{2};  // Base(2) move (Derived prvalue materializes, then moves to Base)

    // Function return with same type
    auto make_base(int id) -> Base { return Base{id}; }
    Base b3 = make_base(3);  // guaranteed elision

    // Function return with derived type
    auto make_derived(int id) -> Derived { return Derived{id}; }
    Base b4 = make_derived(4);  // NOT elided: different type
}
```

### Why Object Slicing Prevents Elision

When `Base b = Derived{};` is evaluated, the types of the source (prvalue `Derived{}`) and the
destination (`Base b`) differ. Guaranteed copy elision requires that the prvalue type and the
destination type are the same [N4950 S8.4.4]/1. Since they differ, the prvalue must be materialized
into a temporary `Derived` object, and then the `Base` constructor is invoked to slice it.

This is not a limitation of the optimization — it is a semantic requirement. The `Derived` object
has a different layout than the `Base` object. The compiler must construct the full `Derived` object
(including its vtable pointer) before extracting the `Base` subobject.

## 8.8 RVO and `std::optional`

When returning a prvalue wrapped in `std::optional`, the prvalue is constructed inside the
optional's storage. This is also guaranteed elision:

```cpp
#include <iostream>
#include <optional>
#include <string>

struct Expensive {
    std::string data;
    Expensive(std::string s) : data(std::move(s)) {
        std::cout << "  Expensive ctor (" << data << ")\n";
    }
    Expensive(const Expensive& o) : data(o.data) {
        std::cout << "  Expensive copy (" << data << ")\n";
    }
    Expensive(Expensive&& o) noexcept : data(std::move(o.data)) {
        std::cout << "  Expensive move (" << data << ")\n";
    }
};

std::optional<Expensive> make_expensive(bool flag) {
    if (flag) {
        return Expensive{"hello"};  // constructed in-place inside optional
    }
    return std::nullopt;
}

int main() {
    auto result = make_expensive(true);
    // Output: Expensive ctor (hello) — no copy, no move
}
```

## 8.9 The C++17 Language Change: Prvalues Are Not Temporaries

Before C++17, a prvalue was a temporary object. C++17 changed the language so that a prvalue is
merely an **initializer** — a recipe for constructing an object. The object is not materialized
until it is needed [N4950 S7.2.1]. This is why `return Widget{42}` does not create a temporary: the
prvalue `Widget{42}` is just instructions for constructing a `Widget`, and those instructions are
applied directly to the return slot.

This has a subtle but important consequence for `decltype`:

```cpp
#include <iostream>
#include <type_traits>

struct Widget {
    Widget(int) {}
};

int main() {
    // C++17: prvalue is not an object, so decltype gives the type, not a reference
    static_assert(std::is_same_v<decltype(Widget{42}), Widget>);

    // Before C++17, decltype(prvalue) would give Widget (not Widget&& or Widget&)
    // but the prvalue WAS a temporary. Now it is just an initializer.

    std::cout << "prvalue is an initializer, not a temporary\n";
}
```

### Pre-C++17: Elision Was Optional

Before C++17, RVO was an optimization. The compiler was **permitted** but not **required** to elide
the copy. The Standard specified the conditions under which elision was allowed [pre-C++17
S12.8/31], but it was always optional. This meant:

1. Code that relied on RVO for correctness (e.g., types with deleted copy/move constructors) was not
   portable.
2. The `std::move` anti-pattern was less obviously harmful because both the `std::move` version and
   the bare `local` version could result in a move if the compiler chose not to elide.

C++17 eliminated this ambiguity by making URVO a language rule rather than an optimization
permission.

### The ABI Implication

The Itanium C++ ABI was designed with copy elision in mind. The ABI specifies that non-trivial
return values are passed via a hidden pointer parameter (the "return slot"). This means the callee
already knows where to construct the return value — no copy is needed. C++17 merely made this
ABI-level behavior a language-level guarantee.

On platforms that use a different ABI (e.g., MSVC on Windows), the same guarantee applies in C++17,
even if the underlying calling convention is different. The Standard's guarantee is independent of
the ABI.

## 8.10 NRVO and Debug Builds

NRVO is an optimization that is typically disabled in debug builds (`-O0`). This has practical
consequences:

1. **Move constructors are called more frequently in debug builds.** If your move constructor has
   side effects (e.g., logging, releasing locks), you will see more invocations in debug builds.

2. **Debug builds may be slower due to extra copies/moves.** For types with expensive move
   operations (rare, but possible if the move constructor does non-trivial work), the debug build
   may be significantly slower than the release build.

3. **Destructors are called on moved-from objects in debug builds.** If NRVO applies, the local
   variable is constructed in the return slot and is not destroyed in the callee. If NRVO fails, the
   local variable is moved from, and the moved-from object is destroyed at the end of the callee.
   This changes the order and count of destructor calls.

```cpp
#include <iostream>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(Widget&& o) noexcept : id(o.id) {
        o.id = 0;
        std::cout << "  Widget(" << id << ") move ctor\n";
    }
    ~Widget() { std::cout << "  ~Widget(" << id << ")\n"; }
};

Widget make_widget() {
    Widget local(42);
    return local;
}

int main() {
    std::cout << "At -O0 (NRVO disabled):\n";
    Widget w = make_widget();
    // Widget(42) ctor  Widget(42) move ctor  ~Widget(0)  ~Widget(42)
    // Note: ~Widget(0) is the moved-from local in make_widget

    std::cout << "At -O2 (NRVO enabled):\n";
    Widget w2 = make_widget();
    // Widget(42) ctor  ~Widget(42)
    // No move, no moved-from destructor
}
```

## 8.11 RVO and ABI Constraints

On some platforms, the ABI imposes constraints on copy elision that go beyond what the Standard
requires. For example:

- **Return value registers:** On x86_64, small trivially-copyable types (e.g., `int`, `double`,
  small structs) are returned in registers, not via the hidden return slot pointer. For these types,
  RVO is irrelevant — there is no memory location to elide into.

- **Virtual function returns:** If a virtual function returns a non-trivial type, the ABI must
  ensure that the caller provides a return slot. The callee cannot construct the return value in a
  register because the caller does not know the dynamic type at the call site.

```cpp
#include <iostream>

struct Small {
    int a, b;
    Small(int a, int b) : a(a), b(b) {
        std::cout << "Small(" << a << ", " << b << ")\n";
    }
};

Small make_small() {
    return Small{1, 2};  // Returned in registers on x86_64
    // RVO is irrelevant — no hidden return slot pointer
}

int main() {
    Small s = make_small();  // Direct register-to-register
}
```

## 8.12 Interaction with `std::initializer_list`

Returning a `std::initializer_list` from a function is dangerous because the list typically
references a temporary array. The temporary array's lifetime ends when the function returns, so the
returned `initializer_list` is dangling:

```cpp
#include <initializer_list>
#include <iostream>

// DANGEROUS: returns dangling initializer_list
std::initializer_list<int> bad_list() {
    return {1, 2, 3};  // Temporary array destroyed at end of function
}

int main() {
    // auto il = bad_list();  // UB: dangling reference to destroyed array
}
```

This is not directly related to RVO, but it is a related pitfall involving prvalue returns and
temporary lifetimes. The `std::initializer_list` object itself can be RVO'd, but the backing array
it references is a temporary whose lifetime does not extend past the function return.

## Common Pitfalls

### 1. NRVO and Debug Builds

NRVO is an optimization that compilers apply at higher optimization levels. In debug builds (`-O0`
on GCC/Clang), NRVO is typically not applied, resulting in extra move constructor calls. This means
code that works correctly in debug mode (relying on destructors being called for moved-from objects)
may exhibit different behavior than optimized builds. Always test move semantics at `-O2` or higher.

### 2. NRVO and Address-Taken Variables

If the address of the named return variable is taken (e.g., passed to another function), NRVO may be
inhibited because the compiler cannot guarantee that all references to the variable can be
redirected to the caller's storage:

```cpp
#include <iostream>

struct Widget {
    Widget(int i) { std::cout << "  Widget ctor\n"; }
    Widget(Widget&&) noexcept { std::cout << "  Widget move\n"; }
};

void register_address(void*);

Widget possibly_inhibited() {
    Widget local(42);
    register_address(&local);  // address escapes — NRVO may fail
    return local;
}
```

### 3. `return std::move(local)` Prevents Both NRVO and Guaranteed RVO

Writing `return std::move(local)` converts the named variable to an xvalue. Since the return
expression is no longer a named variable or a prvalue, neither NRVO nor implicit move can apply. The
move constructor is always called. This is never an optimization — it is always a pessimization:

```cpp
#include <utility>

struct Widget {
    int data[1024]{};
    Widget() = default;
    Widget(Widget&&) noexcept { std::cout << "  move\n"; }
};

// BAD: always moves
Widget bad() {
    Widget local;
    return std::move(local);  // xvalue — NRVO inhibited, move always happens
}

// GOOD: NRVO applies, no move needed
Widget good() {
    Widget local;
    return local;  // named local — NRVO or implicit move
}
```

### 4. RVO Does Not Apply to Function Parameters

Guaranteed copy elision only applies to prvalue initialization, not to returning function
parameters. Returning a function parameter by value always invokes a move or copy:

```cpp
#include <iostream>
#include <utility>

struct Widget {
    Widget() { std::cout << "  ctor\n"; }
    Widget(Widget&&) noexcept { std::cout << "  move\n"; }
};

Widget pass_through(Widget w) {
    return w;  // NOT RVO — w is a function parameter, not a prvalue or local
    // implicit move applies
}

int main() {
    Widget w = pass_through(Widget{});
    // Output: ctor, move, move
    // 1st move: pass_through return (implicit move of parameter)
    // 2nd move: materialization into w — BUT actually this is guaranteed elision
    // of the prvalue returned by pass_through into w
}
```

### 5. RVO Does Not Apply Across Type Boundaries

When the return type and the expression type differ (e.g., returning a derived prvalue from a
function that returns a base type), URVO does not apply. The prvalue materializes, and a move or
copy constructor is invoked:

```cpp
#include <iostream>

struct Base {
    Base(int i) { std::cout << "  Base(" << i << ")\n"; }
    Base(Base&&) noexcept { std::cout << "  Base move\n"; }
    virtual ~Base() = default;
};

struct Derived : Base {
    using Base::Base;
    ~Derived() override = default;
};

Base make_derived() {
    return Derived{42};  // NOT elided: Derived != Base
    // Derived prvalue materializes, then moved to Base
}

int main() {
    Base b = make_derived();
    // Output: Base(42)  Base move
}
```

### 6. Assuming NRVO for Correctness

NRVO is not guaranteed. If your code relies on NRVO to avoid calling a move constructor that has
observable side effects (e.g., releasing a lock, logging), your code is non-portable. The only
guaranteed elision is URVO (prvalue returns). For named returns, always ensure your move constructor
is correct.

## See Also

- [Temporary Materialization](3_temporary_materialization.md)
- [Move Constructors, Assignment, Swap Idiom](4_move_constructors_rvo.md)
