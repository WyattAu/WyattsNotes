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

The C++ Standard does not define devirtualization -- it is a pure optimization. However, the
Standard's type system and specifiers provide the information compilers need to perform it.

Devirtualization is important because virtual dispatch prevents several critical optimizations:

- **Inlining.** The compiler cannot inline a call whose target is determined at runtime.
- **Constant propagation.** The return value of a virtual call cannot be propagated as a constant if
  the target is unknown.
- **Loop unrolling.** Virtual calls inside loops prevent the loop body from being unrolled.
- **Dead code elimination.** If the virtual call has known side effects only in one target, the
  compiler cannot eliminate dead code without knowing the target.

## 3.2 Conditions for Devirtualization

A compiler may devirtualize when it can prove that the dynamic type equals the static type:

1. **The object has a known final type.** If the class is marked `final` or the function is marked
   `final`, the compiler knows there is no override.
2. **The static type is exact.** When calling a virtual function on a local variable (not through a
   pointer or reference), the compiler knows the exact type.
3. **Speculative devirtualization.** The compiler may emit a type check at runtime (using the vptr
   or type info) and branch to a direct call on the likely path, falling back to virtual dispatch on
   the unlikely path.

### Proof: When the Compiler Can Prove the Dynamic Type

By [N4950 S13.3.2], the dynamic type of an object is the most-derived type of the object. The
compiler can prove the dynamic type in the following cases:

**Case 1: Local variable of exact type.** If `D d;` is a local variable of type `D`, the dynamic
type of `d` is `D`. No pointer or reference to a base class is involved, so the static type equals
the dynamic type. The compiler emits a direct call to `D::f`.

**Case 2: `final` class.** If `D` is marked `final` [N4950 S11.7.4], no class can derive from `D`.
If the compiler sees a call `d.f()` where `d` has static type `D`, the dynamic type must be `D` (it
cannot be a more-derived type). Therefore, `D::f` is the only possible target.

**Case 3: `final` virtual function.** If `D::f` is marked `final`, no derived class can override
`f`. If the compiler can prove the dynamic type is `D` or a type derived from `D`, the call resolves
to `D::f` regardless of the actual derived type. This is less powerful than a `final` class but
still useful.

**Case 4: Type propagation through assignments.** If `D d; B& ref = d; ref.f();`, the compiler can
track that `ref` is an alias for `d` and prove that the dynamic type is `D`. This requires the
compiler to perform alias analysis.

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
entirely -- no indirect call is emitted.

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
- Compile with `-O2` or `-O3` (required for most devirtualization passes).
:::

## 3.6 Devirtualization Barriers

Even with optimization enabled, devirtualization can fail in many real-world scenarios.
Understanding these barriers helps you write code that is amenable to optimization.

### Barrier 1: Multiple Inheritance

Multiple inheritance introduces vptr offsets and additional indirection. When a method is called
through a base class pointer that is not the primary base, the compiler must adjust the `this`
pointer before performing the vtable lookup. This adjustment can prevent devirtualization.

```cpp
#include <iostream>

struct Interface1 {
    virtual void method1() const { std::cout << "I1::method1\n"; }
    virtual ~Interface1() = default;
};

struct Interface2 {
    virtual void method2() const { std::cout << "I2::method2\n"; }
    virtual ~Interface2() = default;
};

struct Impl : Interface1, Interface2 {
    void method1() const override { std::cout << "Impl::method1\n"; }
    void method2() const override { std::cout << "Impl::method2\n"; }
};

void call_via_secondary(Interface2* p) {
    p->method2();
    // Compiler may not devirtualize even if it knows the full type,
    // because the this-pointer adjustment for the secondary base
    // complicates the analysis.
}

int main() {
    Impl obj;
    call_via_secondary(&obj);
}
```

### Barrier 2: Indirect Calls Through Function Pointers

When a virtual function call is hidden behind a function pointer, the compiler typically cannot see
through the indirection to determine the dynamic type.

```cpp
#include <iostream>
#include <functional>

struct Base { virtual void f() const { std::cout << "Base\n"; } virtual ~Base() = default; };
struct Derived : Base { void f() const override { std::cout << "Derived\n"; } };

void call_f(const Base& obj) {
    obj.f();  // Compiler can potentially devirtualize
}

void call_via_funcptr(const Base& obj, void (*fp)(const Base&)) {
    fp(obj);  // Compiler cannot devirtualize through function pointer
}

int main() {
    Derived d;
    call_f(d);  // Likely devirtualized

    // Function pointer hides the virtual dispatch context
    void (*fp)(const Base&) = [](const Base& b) { b.f(); };
    call_via_funcptr(d, fp);  // Not devirtualized
}
```

### Barrier 3: Separate Compilation

When the caller and the callee are in different translation units, the compiler may not have
visibility into the full type hierarchy. This is especially problematic when:

- The derived class is defined in a different `.cpp` file.
- The class hierarchy is defined in a shared library (`.so` / `.dll`).
- The constructor of the derived class is not visible at the call site.

```cpp
// --- header.h ---
struct Base { virtual int compute() const = 0; virtual ~Base() = default; };

// --- factory.cpp ---
#include "header.h"
struct Secret : Base { int compute() const override { return 42; } };
Base* create() { return new Secret; }

// --- main.cpp ---
#include "header.h"
Base* create();

int main() {
    Base* p = create();
    return p->compute();
    // Compiler in main.cpp cannot see Secret's definition.
    // Devirtualization is impossible without LTO.
}
```

## 3.7 Link-Time Optimization (LTO) for Cross-TU Devirtualization

**Link-Time Optimization** (LTO) allows the compiler to analyze the entire program across
translation units during linking. This is the primary tool for enabling devirtualization when
separate compilation is a barrier.

### How LTO Works

1. During compilation, the compiler emits an intermediate representation (IR) instead of machine
   code.
2. During linking, the linker collects all IR files and runs an optimization pass on the combined
   IR.
3. The optimizer can now see the full type hierarchy and devirtualize calls that were impossible
   during individual compilation.

### Enabling LTO

```cmake
cmake_minimum_required(VERSION 3.25)
project(LtoExample)

set(CMAKE_CXX_STANDARD 23)

# Enable LTO for all targets
include(CheckIPOSupported)
check_ipo_supported(RESULT ipo_supported)
if(ipo_supported)
    set(CMAKE_INTERPROCEDURAL_OPTIMIZATION ON)
endif()

add_executable(app main.cpp factory.cpp)
```

```bash
# GCC
g++ -O2 -flto main.cpp factory.cpp -o app

# Clang
clang++ -O2 -flto main.cpp factory.cpp -o app

# MSVC
cl /O2 /GL main.cpp factory.cpp /link /LTCG
```

### LTO Trade-offs

| Aspect           | Without LTO | With LTO                              |
| :--------------- | :---------- | :------------------------------------ |
| Compile time     | Fast        | Slow (full-program analysis)          |
| Link time        | Fast        | Slow (optimization at link time)      |
| Memory usage     | Low         | High (entire program IR in memory)    |
| Devirtualization | Limited     | Cross-TU devirtualization enabled     |
| Binary size      | Normal      | Often smaller (dead code elimination) |
| Debugging        | Easy        | Harder (optimized code at link time)  |

:::warning LTO can increase link time significantly for large projects (minutes to tens of minutes).
For CI builds, consider using ThinLTO (`-flto=thin` on Clang), which performs parallel LTO with
lower memory usage at the cost of slightly less aggressive optimization.
:::

## 3.8 `final` and Its Effect on vtable Layout

The `final` specifier does not change the vtable layout itself -- the vtable still exists and the
vptr still points to it. However, `final` enables the compiler to:

1. **Skip the vtable lookup entirely.** The compiler can emit a direct call to the known final
   function.
2. **Inline the function body.** Since the call target is known, the compiler can inline it.
3. **Eliminate the vptr in some cases.** If a class is `final` and has no virtual base classes, some
   compilers can omit the vptr entirely when the object is not accessed through a base class
   pointer.

```cpp
#include <iostream>

struct NonFinal {
    virtual void f() const { std::cout << "NonFinal::f\n"; }
    virtual ~NonFinal() = default;
};

struct FinalClass final {
    virtual void f() const { std::cout << "FinalClass::f\n"; }
    virtual ~FinalClass() = default;
};

void call_non_final(const NonFinal& obj) {
    obj.f();
    // Even at -O2, this typically emits an indirect call
    // because NonFinal could be subclassed in another TU
}

void call_final(const FinalClass& obj) {
    obj.f();
    // At -O2, this is typically inlined to std::cout << "FinalClass::f\n"
    // The compiler knows FinalClass cannot be subclassed
}

int main() {
    NonFinal nf;
    FinalClass fc;
    call_non_final(nf);
    call_final(fc);
}
```

Compile and inspect the generated assembly to verify:

```bash
# GCC: generate assembly
g++ -O2 -S -masm=intel devirtualization.cpp -o devirtualization.s

# Look for "call" vs "jmp" vs inlined code
grep -A3 'call_final' devirtualization.s
```

## 3.9 Speculative Devirtualization (Type Profiling)

Even when the compiler cannot prove the exact type at compile time, it can emit a speculative direct
call based on profiling data or heuristics:

```cpp
#include <iostream>
#include <memory>
#include <vector>

struct Shape { virtual double area() const = 0; virtual ~Shape() = default; };
struct Circle : Shape {
    double r;
    explicit Circle(double radius) : r{radius} {}
    double area() const override { return 3.14159265 * r * r; }
};
struct Rectangle : Shape {
    double w, h;
    Rectangle(double width, double height) : w{width}, h{height} {}
    double area() const override { return w * h; }
};

double total_area(const std::vector<std::unique_ptr<Shape>>& shapes) {
    double sum = 0.0;
    for (const auto& s : shapes) {
        sum += s->area();
        // With PGO: compiler emits
        //   if (typeid(*s) == typeid(Circle))
        //     sum += Circle::area(s);  // direct call (fast path)
        //   else
        //     sum += s->vptr->area(s); // indirect call (slow path)
    }
    return sum;
}

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    for (int i = 0; i < 1000; ++i) shapes.push_back(std::make_unique<Circle>(1.0));
    for (int i = 0; i < 10; ++i) shapes.push_back(std::make_unique<Rectangle>(2.0, 3.0));

    std::cout << "Total area: " << total_area(shapes) << "\n";
}
```

## 3.10 Benchmark: Devirtualization Impact

The following benchmark measures the impact of devirtualization on a tight loop:

```cpp
#include <chrono>
#include <cstdio>
#include <memory>
#include <vector>

struct Base {
    virtual double work(double x) const { return x * x; }
    virtual ~Base() = default;
};

struct Derived final : Base {
    double work(double x) const override { return x * x * x; }
};

double bench_virtual(const std::vector<Base*>& v, int iters) {
    volatile double sink = 0;
    auto t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < iters; ++i)
        for (auto* p : v)
            sink += p->work(1.0000001);
    return std::chrono::duration<double>(std::chrono::high_resolution_clock::now() - t0).count();
}

double bench_devirtualized(const std::vector<Derived*>& v, int iters) {
    volatile double sink = 0;
    auto t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < iters; ++i)
        for (auto* p : v)
            sink += p->work(1.0000001);
    return std::chrono::duration<double>(std::chrono::high_resolution_clock::now() - t0).count();
}

int main() {
    constexpr int N = 1000, ITERS = 100000;
    std::vector<Base*> vp;
    std::vector<Derived*> dp;
    vp.reserve(N); dp.reserve(N);
    for (int i = 0; i < N; ++i) {
        vp.push_back(new Derived);
        dp.push_back(new Derived);
    }

    double tv = bench_virtual(vp, ITERS);
    double td = bench_devirtualized(dp, ITERS);
    std::printf("Virtual:        %.3f s\n", tv);
    std::printf("Devirtualized:  %.3f s\n", td);
    std::printf("Ratio:          %.2fx\n", tv / td);

    for (auto* p : vp) delete p;
    for (auto* p : dp) delete p;
}
```

Compile with `-O3` and compare. With `Derived` marked `final`, the compiler may eliminate the
virtual dispatch in `bench_devirtualized`, yielding a measurable speedup (typically 1.2x--2x).

## 3.11 Devirtualization and `std::function`

`std::function` is a type-erased wrapper. When a virtual call occurs inside a `std::function` that
holds a pointer to a polymorphic object, the compiler typically cannot see through the type erasure
to devirtualize:

```cpp
#include <cstdio>
#include <functional>

struct Base { virtual int compute() const = 0; virtual ~Base() = default; };
struct Derived final : Base { int compute() const override { return 42; } };

int main() {
    Derived d;
    std::function<int()> f = [&d]() { return d.compute(); };

    // The compiler cannot see through std::function's type erasure
    // to know that f always calls Derived::compute
    int result = f();
    std::printf("%d\n", result);
}
```

If the virtual call is on the hot path, consider replacing `std::function` with a template parameter
or a manually specialized callable to allow devirtualization.

## 3.12 Devirtualization of Returned Virtual Calls

When a virtual function returns a reference or pointer to the object itself, the compiler may be
able to devirtualize subsequent calls:

```cpp
#include <cstdio>

struct Processor {
    virtual Processor& step() = 0;
    virtual int result() const = 0;
    virtual ~Processor() = default;
};

struct FastProcessor final : Processor {
    int val_ = 0;
    FastProcessor& step() override { ++val_; return *this; }
    int result() const override { return val_; }
};

int main() {
    FastProcessor fp;
    Processor& p = fp;

    // After p.step() returns, the compiler may track that the result
    // is a reference to the same FastProcessor object
    p.step().step().step();
    std::printf("%d\n", p.result());
}
```

Modern compilers can sometimes chain virtual call results and prove the type through the chain, but
this is less reliable than direct type knowledge.

## 3.13 Whole-Program Devirtualization with CFI

**Control Flow Integrity (CFI)** can work alongside devirtualization. With `-fsanitize=cfi-vcall`
(Clang), the compiler inserts runtime checks that the virtual call target is a valid override of the
function being called. While CFI does not directly devirtualize, it ensures that speculative
devirtualization is safe: if the speculative direct call's type check fails, CFI guarantees the
fallback virtual dispatch targets a valid override, not an attacker-controlled address.

```bash
# Clang: enable CFI for virtual calls
clang++ -O2 -flto -fsanitize=cfi-vcall -fvisibility=hidden main.cpp
```

CFI is primarily a security mitigation, not an optimization, but it interacts with speculative
devirtualization by providing safety guarantees for the fallback path.

## 3.14 Devirtualization of Virtual Calls on `this`

A common pattern is calling a virtual function on `this` within a member function. If the class is
`final`, or if the function is `final`, the compiler can devirtualize the self-call:

```cpp
#include <cstdio>

struct Handler {
    virtual void on_event(int id) { std::printf("Handler::on_event(%d)\n", id); }
    virtual ~Handler() = default;
};

struct EventHandler final : Handler {
    void on_event(int id) override { std::printf("EventHandler::on_event(%d)\n", id); }

    void dispatch(int id) {
        // Self-call: 'this' has static type EventHandler*
        // Since EventHandler is final, the compiler can devirtualize
        on_event(id);  // Devirtualized to EventHandler::on_event
    }
};

int main() {
    EventHandler eh;
    eh.dispatch(42);
}
```

Without `final`, the compiler may still devirtualize if it can prove that no further derived class
exists (e.g., the class definition is visible and no derived classes are defined in the same
translation unit).

## 3.15 Devirtualization in Template Instantiations

Templates provide the compiler with complete type information at instantiation time. When a virtual
call is made on a type that is a template parameter, the compiler may devirtualize if the actual
type passed to the template is known to be `final` or if the call site is on a local object of known
type:

```cpp
#include <iostream>

struct Base { virtual void f() { std::cout << "Base\n"; } virtual ~Base() = default; };
struct Derived final : Base { void f() override { std::cout << "Derived\n"; } };

template <typename T>
void call_f(T& obj) {
    obj.f();
    // When T = Derived (which is final), the compiler can devirtualize
}

int main() {
    Derived d;
    call_f(d);  // T = Derived, devirtualized
}
```

At `-O2`, both GCC and Clang typically devirtualize this call because the template instantiation
provides the full type definition.

## 3.16 Checking Devirtualization with Compiler Reports

Both GCC and Clang provide options to verify whether devirtualization occurred:

```bash
# GCC: optimization remarks
g++ -O2 -fopt-info-vec-missed devirtualization.cpp

# Clang: optimization remarks
clang++ -O2 -Rpass=devirtualize devirtualization.cpp
clang++ -O2 -Rpass-missed=devirtualize devirtualization.cpp
```

These reports show which virtual call sites were devirtualized and which were not, along with the
reason. This is invaluable for verifying that `final` specifiers and type propagation are having the
intended effect.

## Common Pitfalls

- **Adding `final` too early.** Marking a class `final` prevents extension, which can be problematic
  in library code where users may need to subclass. Use `final` on leaf classes that you control and
  that are not part of a public API.
- **Assuming devirtualization always happens.** Even with `-O3`, compilers may fail to devirtualize
  due to ABI boundaries, separate compilation, or complex inheritance. Always measure with your
  specific compiler and optimization level.
- **Relying on devirtualization for correctness.** Devirtualization is an optimization, not a
  language guarantee. The program must be correct even without it.
- **Forgetting LTO for cross-TU calls.** Without LTO, the compiler cannot see the full class
  hierarchy across translation units. If devirtualization is critical for performance, enable LTO.
- **PGO without representative workloads.** Profile-guided speculative devirtualization is only as
  good as the profiling data. If the production workload differs from the training workload, the
  speculative direct calls may hurt performance (branch misprediction on the fast path).
- **Devirtualization and shared libraries.** Even with LTO, calls into shared libraries (.so, .dll)
  cannot be devirtualized because the library may be updated independently of the application. If
  you control both sides, consider static linking or LTO-aware shared library builds.
- **Devirtualization requires the full definition.** The compiler needs the complete definition of
  the derived class to perform devirtualization. If the derived class is defined in a header that is
  not included at the call site (forward-declared only), devirtualization is impossible.
- **Virtual calls through `std::variant` visitation.** Even though `std::visit` dispatches to the
  correct alternative at compile time (via a jump table), if the visitor itself makes a virtual call
  on the visited object, that virtual call may or may not be devirtualized depending on whether the
  compiler can prove the type.

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
- [Deducing This and CRTP](./5_deducing_this_crtp.md)
