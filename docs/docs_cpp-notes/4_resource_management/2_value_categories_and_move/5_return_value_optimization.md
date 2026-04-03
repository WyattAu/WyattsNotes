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

## See Also

- [Temporary Materialization](3_temporary_materialization.md)
- [Move Constructors, Assignment, Swap Idiom](4_move_constructors_rvo.md)
