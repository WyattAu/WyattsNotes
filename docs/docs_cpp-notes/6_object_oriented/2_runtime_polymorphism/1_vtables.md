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
reference through which it is invoked [N4950 §13.3.2].

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

## 1.2 The vptr/vtable Mechanism

The implementation of virtual dispatch is not specified by the C++ Standard — the Standard only
prescribes the _observable behavior_. However, virtually every mainstream compiler (GCC, Clang,
MSVC) uses the **vtable** (virtual function table) model, codified in the
[Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html).

The mechanism works as follows:

1. **One vtable per polymorphic class.** The compiler generates a hidden static array of function
   pointers — the vtable — for every class that has at least one virtual function or inherits from a
   polymorphic class.

2. **One vptr per object instance.** Every object of a polymorphic class contains a hidden pointer
   (the vptr) to its class's vtable. The vptr is set by the constructor.

3. **Dispatch is a two-step indirect call:** When a virtual function `f` is called through a pointer
   `p`, the compiler emits code equivalent to `(*p->vptr[offset_of_f])(p)`. This is a single
   indirect function call.

$$
\text{dispatch cost} = 1 \text{ memory load (vptr)} + 1 \text{ indexed load (function pointer)} + 1 \text{ indirect call}
$$

| Component  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| **vtable** | Static array of function pointers; one per class            |
| **vptr**   | Hidden pointer in each object; points to the class's vtable |
| **Slot**   | Each virtual function occupies a fixed index in the vtable  |
| **Thunks** | Compiler-generated stubs that adjust `this` before dispatch |

:::info ABI Note The Itanium C++ ABI (used by GCC and Clang on all platforms except Windows)
mandates that the vptr is at offset 0 within the object (before any data members). MSVC uses a
similar but incompatible layout on Windows. :::

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
EmptyVirtual:      16 bytes
SingleInheritance: 24 bytes
MultipleBases:     16 bytes
DiamondDerived:    32 bytes
```

Analysis:

- `NonVirtual`: two `int` members = $2 \times 4 = 8$ bytes. No vptr.
- `EmptyVirtual`: one vptr (8 bytes) + padding for alignment = 16 bytes. Even with no data members,
  a polymorphic class pays the vptr cost.
- `SingleInheritance`: vptr (8) + `int z` (4) + padding (4) = 16 bytes. The derived class **reuses**
  the base's vptr — no additional vptr is added for single inheritance.
- `MultipleBases`: one vptr = 16 bytes (with padding).
- `DiamondDerived`: **two** vptrs (one per polymorphic base) + padding = 32 bytes. Each base class
  subobject carries its own vptr.

## 1.4 Cost of Virtual Dispatch

Every virtual call involves:

| Step                       | Cost                                    |
| -------------------------- | --------------------------------------- |
| Load vptr from object      | 1 memory access (may hit L1 cache)      |
| Index into vtable          | 1 arithmetic op + 1 memory access       |
| Indirect call              | 1 branch (may be mispredicted)          |
| **Total extra vs. direct** | ~2–5 cycles on modern hardware (cached) |

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
the virtual dispatch entirely if the dynamic type is provable. :::

## 1.5 The `final` Keyword

The `final` specifier has two uses [N4950 §11.7.4]:

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

The `override` specifier [N4950 §11.7.3] instructs the compiler to verify that the function actually
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
    // Missing 'const' — this HIDES Base::process, does NOT override it.
    // The compiler would NOT warn without 'override'.
    // Adding 'override' here would produce an error.
};
```

:::tip Best Practice Always use `override` on every function intended to override a base-class
virtual function. This eliminates an entire class of bugs caused by signature mismatches. :::

## See Also

- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)
