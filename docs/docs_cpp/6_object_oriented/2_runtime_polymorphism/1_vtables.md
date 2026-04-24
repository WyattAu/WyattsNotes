---
title: Virtual Functions and vtables
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: virtual-functions-vtables
---

# Virtual Functions and Dispatch Tables (vtables)

Virtual functions are the foundation of runtime polymorphism in C++. When a member function is
declared `virtual`, the call is resolved at runtime based on the object's dynamic type through the
vtable dispatch mechanism. This section covers the `virtual` keyword, the vptr/vtable ABI, dispatch
costs, and the `final`/`override` specifiers.

## 1.1 The `virtual` Keyword

A member function declared `virtual` in a base class enables **dynamic dispatch**: the function
called depends on the **runtime type** of the object, not the static type of the pointer or
reference through which it is invoked [N4950 S13.3.2].

```cpp
#include <iostream>

struct Base {
    virtual void greet() const {
        std::cout << "Base\n";
    }
    virtual ~Base() = default;
};

struct Derived : Base {
    void greet() const override {
        std::cout << "Derived\n";
    }
};

int main() {
    Base b;
    Derived d;

    Base& ref_to_d = d;
    ref_to_d.greet();
    Base* ptr_to_d = &d;
    ptr_to_d->greet();
}
```

Output:

```
Derived
Derived
```

When `greet()` is called through a `Base&` or `Base*` that actually refers to a `Derived` object,
the **virtual dispatch mechanism** selects `Derived::greet`. This selection occurs at runtime, not
at compile time.

### Formal Semantics [N4950 S13.3.2]

When a virtual member function is called, the function to be called is determined by the _dynamic
type_ of the object expression. If the object expression is a dereferenced pointer or a reference,
the dynamic type is the type of the most-derived object that the pointer or reference denotes. The
Standard prescribes the observable behavior but does not mandate any particular implementation
mechanism.

## 1.2 The vptr/vtable Mechanism

The implementation of virtual dispatch is not specified by the C++ Standard -- the Standard only
prescribes the _observable behavior_. However, virtually every mainstream compiler (GCC, Clang,
MSVC) uses the **vtable** (virtual function table) model, codified in the
[Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html).

The mechanism works as follows:

1. **One vtable per polymorphic class.** The compiler generates a hidden static array of function
   pointers -- the vtable -- for every class that has at least one virtual function or inherits from
   a polymorphic class.

2. **One vptr per object instance.** Every object of a polymorphic class contains a hidden pointer
   (the vptr) to its class's vtable. The vptr is set by the constructor.

3. **Dispatch is a two-step indirect call:** When a virtual function `f` is called through a pointer
   `p`, the compiler emits code equivalent to `(*p->vptr[offset_of_f])(p)`. This is a single
   indirect function call.

$$
\mathrm{dispatch cost} = 1 \mathrm{ memory load (vptr)} + 1 \mathrm{ indexed load (function pointer)} + 1 \mathrm{ indirect call}
$$

| Component  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| **vtable** | Static array of function pointers; one per class            |
| **vptr**   | Hidden pointer in each object; points to the class's vtable |
| **Slot**   | Each virtual function occupies a fixed index in the vtable  |
| **Thunks** | Compiler-generated stubs that adjust `this` before dispatch |

:::info ABI Note The Itanium C++ ABI (used by GCC and Clang on all platforms except Windows)
mandates that the vptr is at offset 0 within the object (before any data members). MSVC uses a
similar but incompatible layout on Windows.
:::

### Vtable Structure Diagram

For a class hierarchy:

```
struct Base {
    virtual void f();
    virtual void g();
    virtual ~Base();
};

struct Derived : Base {
    void f() override;
    void g() override;
    ~Derived() override;
    virtual void h();
};
```

The vtable layout under the Itanium ABI is:

```
Base::vtable:
  [0] &Base::~Base   (complete object destructor)
  [1] &Base::f
  [2] &Base::g
  [3] &std::type_info for Base

Derived::vtable:
  [0] &Derived::~Derived  (complete object destructor)
  [1] &Derived::f         (overrides Base::f)
  [2] &Derived::g         (overrides Base::g)
  [3] &Derived::h         (new virtual function)
  [4] &std::type_info for Derived
```

Key observations:

- The slot indices for `f` and `g` are preserved across the hierarchy. `Derived::f` occupies the
  same slot as `Base::f`. This is what makes virtual dispatch $O(1)$: the slot index is a
  compile-time constant.
- `Derived` adds a new slot for `h` at the next available index.
- The vtable also stores a pointer to `std::type_info` for RTTI support.

### Proof: Virtual Dispatch is O(1)

Let $f$ be a virtual function at slot index $k$ in the vtable. Let $p$ be a pointer to a polymorphic
object. The dispatch sequence is:

1. Load the vptr: `vptr = *(void**)p` -- one memory load at a fixed offset from the object.
2. Load the function pointer: `func = vptr[k]` -- one indexed load at a fixed offset from the vptr.
3. Call: `func(p)` -- one indirect call.

Since $k$ is a compile-time constant determined by the function declaration order in the class, and
the vptr offset within the object is also a compile-time constant (0 in the Itanium ABI), both
memory accesses are at fixed, known offsets. The total work is two memory loads and one indirect
branch, independent of the depth or breadth of the inheritance hierarchy. Therefore, virtual
dispatch is $O(1)$.

## 1.3 Vtable Layout: `sizeof` Demonstration

The following program demonstrates the vptr overhead and the layout of vtables across an inheritance
hierarchy:

```cpp
#include <iostream>

struct NonVirtual {
    int x;
    int y;
};

struct EmptyVirtual {
    virtual void f() {}
    virtual ~EmptyVirtual() = default;
};

struct SingleInheritance : EmptyVirtual {
    int z;
    void f() override {}
};

struct MultipleBases {
    virtual void g() {}
    virtual ~MultipleBases() = default;
};

struct DiamondBase1 {
    virtual void a() {}
    virtual ~DiamondBase1() = default;
};

struct DiamondBase2 {
    virtual void b() {}
    virtual ~DiamondBase2() = default;
};

struct DiamondDerived : DiamondBase1, DiamondBase2 {
    void a() override {}
    void b() override {}
    virtual void c() {}
};

int main() {
    std::cout << "NonVirtual:        " << sizeof(NonVirtual) << " bytes\n";
    std::cout << "EmptyVirtual:      " << sizeof(EmptyVirtual) << " bytes\n";
    std::cout << "SingleInheritance: " << sizeof(SingleInheritance) << " bytes\n";
    std::cout << "MultipleBases:     " << sizeof(MultipleBases) << " bytes\n";
    std::cout << "DiamondDerived:    " << sizeof(DiamondDerived) << " bytes\n";
}
```

Typical output on a 64-bit platform (Itanium ABI, LP64):

```
NonVirtual:        8 bytes
EmptyVirtual:      8 bytes
SingleInheritance: 16 bytes
MultipleBases:     8 bytes
DiamondDerived:    16 bytes
```

Analysis:

- `NonVirtual`: two `int` members = $2 \times 4 = 8$ bytes. No vptr.
- `EmptyVirtual`: one vptr (8 bytes). Even with no data members, a polymorphic class pays the vptr
  cost, but no additional padding is needed when alignment is already satisfied.
- `SingleInheritance`: vptr (8) + `int z` (4) + padding (4) = 16 bytes. The derived class **reuses**
  the base's vptr -- no additional vptr is added for single inheritance.
- `MultipleBases`: one vptr = 8 bytes.
- `DiamondDerived`: **two** vptrs (one per polymorphic base) + padding = 16 bytes. Each base class
  subobject carries its own vptr.

## 1.4 Cost of Virtual Dispatch

Every virtual call involves:

| Step                       | Cost                                     |
| -------------------------- | ---------------------------------------- |
| Load vptr from object      | 1 memory access (may hit L1 cache)       |
| Index into vtable          | 1 arithmetic op + 1 memory access        |
| Indirect call              | 1 branch (may be mispredicted)           |
| **Total extra vs. direct** | ~2--5 cycles on modern hardware (cached) |

The primary costs are **indirection** (preventing inlining) and **branch misprediction** (the CPU
cannot predict which function will be called at the indirect branch). In tight loops, this can be
measurable.

```cpp
#include <chrono>
#include <iostream>
#include <vector>

struct Base {
    virtual double compute(double x) const { return x * x; }
    virtual ~Base() = default;
};

struct Derived : Base {
    double compute(double x) const override { return x * x * x; }
};

struct NonVirtualBase {
    double compute(double x) const { return x * x; }
};

struct NonVirtualDerived : NonVirtualBase {
    double compute(double x) const { return x * x * x; }
};

template <typename T>
double benchmark(const std::vector<T*>& objects, int iterations) {
    auto start = std::chrono::high_resolution_clock::now();
    volatile double sink = 0;
    for (int i = 0; i < iterations; ++i) {
        for (auto* obj : objects) {
            sink += obj->compute(1.0000001);
        }
    }
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - start;
    return elapsed.count();
}

int main() {
    constexpr int N = 1000;
    constexpr int ITERS = 100000;

    std::vector<Base*> virtual_objects;
    std::vector<NonVirtualBase*> nonvirtual_objects;
    virtual_objects.reserve(N);
    nonvirtual_objects.reserve(N);

    for (int i = 0; i < N; ++i) {
        virtual_objects.push_back(new Derived{});
        nonvirtual_objects.push_back(new NonVirtualDerived{});
    }

    double vt = benchmark(virtual_objects, ITERS);
    double nvt = benchmark(nonvirtual_objects, ITERS);

    std::cout << "Virtual dispatch:   " << vt << " s\n";
    std::cout << "Non-virtual call:   " << nvt << " s\n";
    std::cout << "Ratio:              " << vt / nvt << "x\n";

    for (auto* p : virtual_objects) delete p;
    for (auto* p : nonvirtual_objects) delete p;
}
```

:::warning The actual performance difference depends heavily on compiler optimization levels, CPU
branch prediction accuracy, and whether the compiler can **devirtualize** the call (see
[Devirtualization](./3_devirtualization.md)). With `-O2` or `-O3`, modern compilers may eliminate
the virtual dispatch entirely if the dynamic type is provable.
:::

## 1.5 The `final` Keyword

The `final` specifier has two uses [N4950 S11.7.4]:

1. **On a class:** prevents the class from being used as a base class.
2. **On a virtual member function:** prevents the function from being overridden in a derived class.

```cpp
#include <iostream>

struct Base {
    virtual void f() const { std::cout << "Base::f\n"; }
};

struct Mid : Base {
    void f() const final { std::cout << "Mid::f (final)\n"; }
};

struct Leaf final : Mid {
};

int main() {
    Leaf obj;
    obj.f();
}
```

The following would be ill-formed:

```cpp
struct Derived : Leaf { };
// error: cannot derive from 'final' class 'Leaf'

struct Other : Mid {
    void f() const override { }
    // error: declaration of 'f' overrides a 'final' function
};
```

## 1.6 The `override` Keyword

The `override` specifier [N4950 S11.7.3] instructs the compiler to verify that the function actually
overrides a virtual function from a base class. It catches accidental mismatches in signature or
constness:

```cpp
#include <iostream>

struct Base {
    virtual void process(int x) const { std::cout << "Base: " << x << "\n"; }
    virtual ~Base() = default;
};

struct Correct : Base {
    void process(int x) const override { std::cout << "Correct: " << x << "\n"; }
};

struct Wrong : Base {
    void process(int x) { std::cout << "Wrong (non-const)\n"; }
    // Missing 'const' -- this HIDES Base::process, does NOT override it.
    // The compiler would NOT warn without 'override'.
    // Adding 'override' here would produce an error.
};
```

:::tip Best Practice Always use `override` on every function intended to override a base-class
virtual function. This eliminates an entire class of bugs caused by signature mismatches.
:::

## 1.7 Virtual Dispatch During Construction and Destruction

A critical and often surprising rule: **virtual calls from constructors and destructors do not
dispatch dynamically** [N4950 S11.9.3]. During base class construction, the derived portion of the
object has not yet been constructed, so the vptr points to the base class's vtable. Any virtual call
resolves to the base class's version, even if the derived class overrides it.

### Proof: vptr Initialization Sequence

By [N4950 S11.9.3], during the execution of a constructor for class `B` (where `B` has base class
`A`), the following sequence occurs:

1. Base class `A`'s constructor runs first. The vptr is set to `A::vtable` at the beginning of `A`'s
   constructor body. Any virtual call during `A`'s construction dispatches through `A::vtable`.
2. After `A`'s constructor completes, control enters `B`'s constructor. The vptr is set to
   `B::vtable`. Virtual calls during `B`'s construction dispatch through `B::vtable`.
3. During destruction, the process reverses: `B`'s destructor runs first (vptr = `B::vtable`), then
   `A`'s destructor runs (vptr = `A::vtable`).

This is necessary for correctness: calling `Derived::do_work()` before the `Derived` members are
initialized would access uninitialized memory, which is undefined behavior.

```cpp
#include <iostream>

struct Base {
    Base() {
        std::cout << "Base ctor: ";
        do_work();
    }
    virtual ~Base() {
        std::cout << "Base dtor: ";
        do_work();
    }
    virtual void do_work() { std::cout << "Base::do_work\n"; }
};

struct Derived : Base {
    int data_{42};

    Derived() {
        std::cout << "Derived ctor: ";
        do_work();
    }
    ~Derived() override {
        std::cout << "Derived dtor: ";
        do_work();
    }
    void do_work() override {
        std::cout << "Derived::do_work data_=" << data_ << "\n";
    }
};

int main() {
    Derived d;
    std::cout << "---\n";
}
```

Output:

```
Base ctor: Base::do_work
Derived ctor: Derived::do_work data_=42
Derived dtor: Derived::do_work data_=42
Base dtor: Base::do_work
```

The vptr transitions through three states during `Derived` object construction:

1. During `Base` construction: vptr points to `Base::vtable` -> `do_work()` calls `Base::do_work`
2. During `Derived` construction: vptr points to `Derived::vtable` -> `do_work()` calls
   `Derived::do_work`
3. During `Derived` destruction: vptr is reset to `Base::vtable` -> `do_work()` calls
   `Base::do_work`

:::warning Calling a pure virtual function from a constructor or destructor is **undefined
behavior** [N4950 S11.9.3]. The pure virtual function has no definition to dispatch to (or the
definition is not called). Some implementations call the pure virtual handler and terminate the
program.
:::

## 1.8 NVI (Non-Virtual Interface) Pattern

The **Non-Virtual Interface** pattern makes all public member functions non-virtual and delegates to
private virtual functions. This provides a stable public API while allowing customization through
virtual dispatch:

```cpp
#include <iostream>
#include <stdexcept>

struct StreamProcessor {
    // Public non-virtual interface: invariant checking happens here
    void process(const std::string& data) {
        if (data.empty()) {
            throw std::invalid_argument("empty data");
        }
        std::cout << "pre-processing: " << data.size() << " bytes\n";
        do_process(data);
        std::cout << "post-processing complete\n";
    }

    virtual ~StreamProcessor() = default;

private:
    // Private virtual hook: derived classes override this
    virtual void do_process(const std::string& data) = 0;
};

struct JsonProcessor : StreamProcessor {
private:
    void do_process(const std::string& data) override {
        std::cout << "JSON processing: " << data << "\n";
    }
};

struct XmlProcessor : StreamProcessor {
private:
    void do_process(const std::string& data) override {
        std::cout << "XML processing: " << data << "\n";
    }
};

int main() {
    JsonProcessor jp;
    XmlProcessor xp;
    jp.process(R"({"key": "value"})");
    xp.process("<root><item/></root>");
}
```

The NVI pattern ensures that:

- Pre-conditions and post-conditions are checked in the non-virtual wrapper (cannot be bypassed by a
  derived class override).
- The virtual function signature is a stable extension point.
- Template Method is easier to implement since the non-virtual function controls the algorithm
  skeleton.

## 1.9 Multiple Inheritance vtable Layout

With multiple inheritance, each polymorphic base class contributes its own vptr to the derived
object. The Itanium ABI designates the first polymorphic base as the _primary base_; the derived
class shares the primary base's vptr and appends its own virtual function slots.

```cpp
#include <iostream>
#include <cstdio>

struct A {
    virtual void fa() { std::cout << "A::fa\n"; }
    virtual ~A() = default;
    int a_val{};
};

struct B {
    virtual void fb() { std::cout << "B::fb\n"; }
    virtual ~B() = default;
    int b_val{};
};

struct C : A, B {
    void fa() override { std::cout << "C::fa\n"; }
    void fb() override { std::cout << "C::fb\n"; }
    virtual void fc() { std::cout << "C::fc\n"; }
    int c_val{};
};
```

Memory layout under the Itanium ABI:

```
C object:
  offset 0:   vptr_A (shared between A and C)
  offset 8:   a_val
  offset 12:  b_val
  offset 16:  vptr_B (separate vptr for B subobject)
  offset 24:  c_val
```

When calling `fb()` through a `B*`, the compiler generates a **thunk** -- a small code stub that
adjusts the `this` pointer by the offset between the `B` subobject and the `C` complete object
before jumping to `C::fb`. This thunk is stored in `B`'s vtable within `C`'s vtable structure.

### Thunk Example

```
C::B::vtable for fb:
  thunk: this -= 16; jmp C::fb
```

The thunk ensures that `C::fb` receives a pointer to the start of the `C` object (not the `B`
subobject), so that `C::fb` can access `a_val`, `b_val`, and `c_val` correctly.

## 1.10 Virtual Inheritance and vtable Complications

Virtual inheritance introduces a **virtual base pointer** (vbptr) in addition to the vptr. The
location of the virtual base subobject is not known at compile time -- it depends on the
most-derived class. The Itanium ABI stores the virtual base offset in the vtable, adding another
level of indirection.

```cpp
#include <iostream>

struct VBase {
    virtual void vf() { std::cout << "VBase::vf\n"; }
    virtual ~VBase() = default;
    int vb_data{};
};

struct Left : virtual VBase {
    virtual void lf() { std::cout << "Left::lf\n"; }
    int l_data{};
};

struct Right : virtual VBase {
    virtual void rf() { std::cout << "Right::rf\n"; }
    int r_data{};
};

struct MostDerived : Left, Right {
    void lf() override { std::cout << "MostDerived::lf\n"; }
    void rf() override { std::cout << "MostDerived::rf\n"; }
    int md_data{};
};
```

The layout is complex: each of `Left` and `Right` contains a vbptr that points to a shared subtable
in the vtable. At runtime, these offsets are used to locate the single `VBase` subobject. Every
access to a virtual base member requires one additional indirection compared to non-virtual base
access.

## Common Pitfalls

**1. Forgetting `override`:** Without `override`, a misspelled function name or wrong parameter type
silently creates a new function that **hides** (not overrides) the base version. Always use
`override` on every function intended to be virtual dispatch.

**2. Virtual functions in constructors/destructors:** As shown in section 1.7, virtual dispatch does
not work as expected during construction and destruction. Never call virtual functions that rely on
derived-class state from a base class constructor or destructor.

**3. Diamond inheritance without `virtual`:** If two intermediate classes both inherit from the same
base non-virtually, the most-derived class contains two copies of the base. This causes ambiguity
when calling base-class functions. Use virtual inheritance when a diamond is intended, or
restructure the hierarchy.

**4. Pure virtual function with body:** A pure virtual function (`= 0`) **can** have a definition.
The class is still abstract, but derived classes can call `Base::f()` explicitly. This is useful for
providing shared default behavior that derived classes can opt into:

```cpp
struct Base {
    virtual void f() = 0;
};

void Base::f() { std::cout << "Base::f default\n"; }

struct Derived : Base {
    void f() override { Base::f(); std::cout << "Derived::f\n"; }
};
```

**5. Overhead of virtual dispatch in tight loops:** While the per-call overhead is small (~2--5
cycles), the inability to inline virtual calls prevents a wide range of optimizations. If a function
is called in a tight inner loop and the target is always the same, consider devirtualization (mark
the class or function `final`) or CRTP/deducing-this for static dispatch.

**6. Virtual functions and move semantics:** Virtual functions cannot be templated. If you need a
type-parameterized operation that is dispatched at runtime, you must use a type-erased mechanism
(e.g., `std::function`, a virtual wrapper) rather than a virtual template.

**7. Virtual function calls and `constexpr`:** Virtual function calls are not allowed in constant
expressions [N4950 S7.7]. A `constexpr` function cannot contain a virtual call because the target is
determined at runtime. If you need compile-time dispatch, use `if constexpr` with type traits, CRTP,
or deducing this.

**8. Calling virtual functions through destructors of base classes:** When a derived class
destructor completes and the base class destructor begins, the vptr is reset to the base class's
vtable. Any virtual calls during the base destructor dispatch to the base version, not the derived
version. This is the reverse of the construction order.

## 1.12 Virtual Functions and `override` vs `final` Interaction

`override` and `final` are independent specifiers that can be combined:

- `void f() override;` -- verifies that `f` overrides a base class virtual function.
- `void f() final;` -- prevents further overriding (implies this function overrides a base).
- `void f() override final;` -- both: verifies the override and prevents further overriding.
- `void f() final override;` -- same as above (order does not matter).

```cpp
#include <iostream>

struct Base {
    virtual void f() { std::cout << "Base\n"; }
    virtual ~Base() = default;
};

struct Mid : Base {
    void f() override final { std::cout << "Mid\n"; }
};

// struct Bad : Mid {
//     void f() override {}   // ERROR: f is final
// };

int main() {
    Mid m;
    m.f();  // Mid
}
```

## 1.13 Virtual Functions and Object Size Across Platforms

The size of a vptr depends on the platform's pointer size:

| Platform      | Pointer Size | vptr Size | Empty Polymorphic Class Size |
| ------------- | ------------ | --------- | ---------------------------- |
| 32-bit x86    | 4 bytes      | 4 bytes   | 4 bytes                      |
| 64-bit x86-64 | 8 bytes      | 8 bytes   | 8 bytes                      |
| 64-bit ARM    | 8 bytes      | 8 bytes   | 8 bytes                      |
| 32-bit ARM    | 4 bytes      | 4 bytes   | 4 bytes                      |

On 64-bit platforms, every polymorphic object pays at least 8 bytes for the vptr, even if the class
has no data members. This is the fundamental cost of runtime polymorphism.

## See Also

- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)
- [Deducing This and CRTP](./5_deducing_this_crtp.md)
