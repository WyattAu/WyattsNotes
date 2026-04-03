---
title: Devirtualization and Final Specifiers
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: devirtualization-final-specifiers
---

# Devirtualization and Final Specifiers

**Devirtualization** is a compiler optimization that replaces a virtual function call with a direct
call or inlines it entirely, eliminating the vtable lookup overhead. This section covers the
conditions for devirtualization, the role of `final`, profile-guided optimization, and type-based
devirtualization.

## 3.1 What is Devirtualization?

**Devirtualization** is a compiler optimization that replaces a virtual function call with a
**direct call** (or inlines it), eliminating the vtable lookup overhead. This is possible when the
compiler can prove the dynamic type of the object at compile time.

The C++ Standard does not define devirtualization — it is a pure optimization. However, the
Standard's type system and specifiers provide the information compilers need to perform it.

## 3.2 Conditions for Devirtualization

A compiler may devirtualize when it can prove that the dynamic type equals the static type:

1. **The object has a known final type.** If the class is marked `final` or the function is marked
   `final`, the compiler knows there is no override.
2. **The static type is exact.** When calling a virtual function on a local variable (not through a
   pointer or reference), the compiler knows the exact type.
3. **Speculative devirtualization.** The compiler may emit a type check at runtime (using the vptr
   or type info) and branch to a direct call on the likely path, falling back to virtual dispatch on
   the unlikely path.

```cpp
#include <iostream>

struct Base {
    virtual int compute(int x) const { return x * 2; }
    virtual ~Base() = default;
};

struct Derived final : Base {
    int compute(int x) const override { return x * 3; }
};

struct Other : Base {
    int compute(int x) const override { return x * 4; }
};

int main() {
    Derived d;

    int r1 = d.compute(10);
    // The compiler knows 'd' is a Derived, so it can devirtualize.
    // This is equivalent to a direct call to Derived::compute.

    Base* bp = &d;
    int r2 = bp->compute(10);
    // Even through a pointer, if the compiler can see that bp points
    // to a Derived (and Derived is final), it can devirtualize.

    Base* bp2 = /* opaque source */;
    int r3 = bp2->compute(10);
    // Cannot devirtualize: the dynamic type is unknown at compile time.

    std::cout << r1 << " " << r2 << " " << r3 << "\n";
    (void)r1; (void)r2; (void)r3;
}
```

## 3.3 `final` as a Devirtualization Hint

The `final` specifier provides the strongest guarantee to the compiler. When a class or virtual
function is marked `final`, the compiler can prove that no further override exists:

```cpp
#include <iostream>

struct Renderer {
    virtual void draw() const { std::cout << "Renderer::draw\n"; }
    virtual ~Renderer() = default;
};

struct OpenGLRenderer final : Renderer {
    void draw() const override { std::cout << "OpenGL::draw\n"; }
};

void render_scene(const Renderer* r) {
    // If the compiler can see that r points to an OpenGLRenderer
    // (which is final), it devirtualizes this call.
    r->draw();
}

int main() {
    OpenGLRenderer gl;
    render_scene(&gl);
}
```

Compiled with `-O2` on GCC or Clang, the call `r->draw()` inside `render_scene` is typically inlined
entirely — no indirect call is emitted.

## 3.4 Profile-Guided Optimization (PGO)

Even when the compiler cannot prove the exact type statically, **profile-guided optimization** (PGO)
can enable speculative devirtualization:

1. The program is compiled with instrumentation (`-fprofile-instr-generate`).
2. The program is run on representative workloads to collect profiling data.
3. The program is recompiled with the profile data (`-fprofile-use`).

During the second compilation, the compiler knows the most likely dynamic type at each virtual call
site and can emit a speculative direct call:

```cpp
#include <iostream>
#include <vector>
#include <memory>

struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };
struct Circle : Shape { void draw() const override { std::cout << "O"; } };
struct Square : Shape { void draw() const override { std::cout << "#"; } };
struct Triangle : Shape { void draw() const override { std::cout << "^"; } };

void render(const std::vector<std::unique_ptr<Shape>>& shapes) {
    for (const auto& s : shapes) {
        s->draw();
        // With PGO, if profiling shows 90% of calls dispatch to Circle::draw,
        // the compiler emits:
        //   if (s->vptr == Circle::vtable) { Circle::draw(s); } // likely
        //   else { s->vptr->draw(s); }                          // fallback
    }
}

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    for (int i = 0; i < 100; ++i) shapes.push_back(std::make_unique<Circle>());
    for (int i = 0; i < 5; ++i) shapes.push_back(std::make_unique<Square>());
    for (int i = 0; i < 2; ++i) shapes.push_back(std::make_unique<Triangle>());

    render(shapes);
    std::cout << "\n";
}
```

## 3.5 Type-Based Devirtualization

Compilers can also devirtualize through **type propagation**. If a pointer is assigned from a
known-type object and the compiler can track that no reassignment occurs, it can prove the dynamic
type:

```cpp
#include <iostream>

struct B { virtual int f() const { return 1; } virtual ~B() = default; };
struct D : B { int f() const override { return 2; } };

int call_through_ref(const B& b) {
    // Cannot devirtualize: b's dynamic type is unknown.
    return b.f();
}

int call_local() {
    D d;
    // Compiler knows 'd' is a D. Devirtualized.
    return d.f();
}

int call_after_assign() {
    D d;
    B& ref = d;
    // Compiler can track ref -> d -> D. Devirtualized.
    return ref.f();
}

int main() {
    std::cout << call_local() << "\n";
    std::cout << call_after_assign() << "\n";
    std::cout << call_through_ref(D{}) << "\n";
}
```

:::tip Practical Advice To enable maximum devirtualization:

- Mark leaf classes and leaf overrides as `final`.
- Prefer local objects over heap-allocated objects where possible.
- Use PGO for hot code paths where the dynamic type distribution is predictable.
- Compile with `-O2` or `-O3` (required for most devirtualization passes). :::

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
