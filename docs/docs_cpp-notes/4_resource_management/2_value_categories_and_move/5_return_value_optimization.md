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
No temporary is created, and no copy or move constructor is invoked [N4950 §8.4.4]. This applies
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

## 8.4 The Fallback Chain

When returning a local variable from a function, the compiler tries each strategy in order:

1. **Guaranteed elision (C++17 RVO):** If the return expression is a prvalue of the same type as the
   function return type, no copy/move occurs. This is mandatory.
2. **NRVO:** If the return expression names a local variable, the compiler may construct it in the
   caller's storage. This is optional but widely implemented.
3. **Implicit move:** If NRVO does not apply, the compiler treats the return as if
   `std::move(local)` were written. The move constructor is called [N4950 §11.9.6].
4. **Copy:** If no move constructor exists (or it is deleted), the copy constructor is called. If
   neither exists, compilation fails.

:::warning Do not write `return std::move(local);` in a function that returns by value. This
prevents NRVO from applying (because `std::move(local)` is an xvalue, not a named local variable)
and forces a move. Let the compiler apply NRVO or implicit move automatically. The only correct use
of `std::move` in a return statement is when returning a member variable or a function parameter.
:::

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

:::info Relevance The interaction between value categories, move semantics, and copy elision is one
of the most performance-critical aspects of C++. In a well-written C++ program, objects are
constructed in place (RVO), moved between scopes (move constructors), and swapped (swap idiom).
Copies are the exception, not the rule. Understanding the fallback chain (RVO → NRVO → implicit move
→ copy) is essential for writing code that is both correct and efficient. :::

## 8.6 RVO in Other Contexts

Guaranteed copy elision (C++17 RVO) applies not only to `return` statements but also to variable
initialization from prvalues [N4950 §8.4.4]. Whenever a prvalue appears as the initializer for an
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
until it is needed [N4950 §7.2.1]. This is why `return Widget{42}` does not create a temporary: the
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

## Common Pitfalls

### 1. NRVO and Debug Builds

NRVO is an optimization that compilers apply at higher optimization levels. In debug builds (`-O0`
on GCC/Clang), NRVO is typically not applied, resulting in extra move constructor calls. This means
code that works correctly in debug mode (relying on destructors being called for moved- from
objects) may exhibit different behavior than optimized builds. Always test move semantics at `-O2`
or higher.

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

## See Also

- [Temporary Materialization](3_temporary_materialization.md)
- [Move Constructors, Assignment, Swap Idiom](4_move_constructors_rvo.md)

:::
