---
title: Object Layout, vptr, and the this Pointer
description:
  C++: Object Layout, vptr, and the this Pointer — Object Layout, vptr, and the
  `this` Pointer; 1.1 Memory Layout of a Simple Class.
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: object-layout-vptr-this-pointer
---

# Object Layout, vptr, and the `this` Pointer

Understanding how the compiler lays out objects in memory is fundamental to writing correct and
efficient C++. This section covers the memory layout of simple and polymorphic classes, the `this`
pointer mechanism, and the Empty Base Optimization (EBO).

## 1.1 Memory Layout of a Simple Class

For a class with no virtual functions and no base classes, the memory layout is straightforward:
data members are laid out in declaration order with potential padding between them for alignment
[N4950 §11.4.1]. Each non-static data member occupies
$\lceil \mathrm{size} / \mathrm{alignment} \rceil \times \mathrm{alignment}$ bytes.

```cpp
#include <cstddef>
#include <cstdint>
#include <cstdio>

struct Simple {
    std::int8_t  a;   // 1 byte at offset 0
                     // 3 bytes padding (alignment of int32_t)
    std::int32_t b;   // 4 bytes at offset 4
    std::int8_t  c;   // 1 byte at offset 8
                     // 3 bytes padding (alignment of double)
    double       d;   // 8 bytes at offset 12 (aligned to 8)
};

static_assert(sizeof(Simple) == 24);
static_assert(alignof(Simple) == 8);
static_assert(offsetof(Simple, a) == 0);
static_assert(offsetof(Simple, b) == 4);
static_assert(offsetof(Simple, c) == 8);
static_assert(offsetof(Simple, d) == 12);

int main() {
    std::printf("sizeof(Simple) = %zu\n", sizeof(Simple));
    std::printf("offsetof a=%zu b=%zu c=%zu d=%zu\n",
        offsetof(Simple, a), offsetof(Simple, b),
        offsetof(Simple, c), offsetof(Simple, d));
}
```

The layout on a typical 64-bit System V ABI platform is:

$$
\mathrm{sizeof}(\texttt{Simple}) = 1 + 3\mathrm{(pad)} + 4 + 1 + 3\mathrm{(pad)} + 8 = 24
$$

:::tip Standard Layout A class with no virtual functions, no non-static data members of reference
type, and all non-static data members with the same access control is a **standard-layout class**
[N4950 §11.4.1]. Such classes have a well-defined, portable memory layout and are compatible with C
structs.
:::

## 1.2 The `this` Pointer [N4950 §11.4.3.2]

Every non-static member function receives an implicit first parameter: a pointer to the object on
which the function is invoked. This pointer is named `this` and has the type `T*` in a non-const
member function, `const T*` in a const member function, and `volatile T*` in a volatile member
function.

```cpp
#include <cstdio>

class Widget {
    int value_ = 0;
public:
    void set(int v) {
        this->value_ = v;
    }

    void print() const {
        std::printf("this = %p, value_ = %d\n", (const void*)this, this->value_);
    }

    Widget* self() { return this; }
    const Widget* cself() const { return this; }
};

int main() {
    Widget w;
    w.set(42);
    w.print();

    static_assert(std::is_same_v<decltype(&Widget::self), Widget*(Widget::*)()>);
    static_assert(std::is_same_v<decltype(&Widget::cself), const Widget*(Widget::*)() const>);
}
```

## 1.3 How `this` Is Passed

The C++ Standard does not specify the mechanism for passing `this` — that is determined by the ABI.
On the dominant 64-bit platforms:

- **System V AMD64 ABI** (Linux, macOS): `this` is passed as the first implicit argument in register
  **rdi** (the same register used for the first explicit parameter of a non-member function). If the
  member function is called on a `const` object, the pointer is passed in the same register; the
  type difference is purely a compile-time distinction.
- **Windows x64 ABI**: `this` is passed in register **rcx**.

The key insight: a member function call `obj.method(arg)` is ABI-equivalent to a non-member call
`method(&obj, arg)`, modulo the name-mangling convention that encodes the class name.

```cpp
#include <cstdio>

struct Point {
    double x, y;

    double distance_to(const Point& other) const {
        double dx = this->x - other.x;
        double dy = this->y - other.y;
        return __builtin_sqrt(dx * dx + dy * dy);
    }
};

int main() {
    Point a{0.0, 0.0};
    Point b{3.0, 4.0};
    std::printf("distance = %f\n", a.distance_to(b));

    Point* pa = &a;
    std::printf("a is at %p\n", (void*)pa);
    // In the compiled code, a.distance_to(b) is lowered to
    // something equivalent to: Point_distance_to(&a, b)
}
```

## 1.4 Empty Base Optimization (EBO)

The Standard requires that every complete object has a unique address [N4950 §6.9]. This means that
even an empty class — one with no non-static data members and no virtual functions — must occupy at
least one byte:

```cpp
#include <cstddef>

struct Empty {};
static_assert(sizeof(Empty) == 1);
```

However, when an empty class is used as a **base class**, the compiler is permitted to apply the
**Empty Base Optimization** (EBO): it may allocate zero bytes for the base class subobject, since
the derived class's own address already satisfies the unique-address requirement.

```cpp
#include <cstddef>

struct Empty {};

struct Holder {
    int data;
    Empty e;    // member: occupies 1 byte + potential padding
};
static_assert(sizeof(Holder) >= sizeof(int) + 1);

struct Derived : Empty {
    int data;   // EBO: Empty base consumes 0 bytes
};
static_assert(sizeof(Derived) == sizeof(int));
```

:::info Practical Importance EBO is exploited heavily by standard library implementations.
`std::allocator&lt;T&gt;` is typically an empty class, and
`std::vector&lt;T, std::allocator&lt;T&gt;&gt;` inherits from it privately so that the allocator
storage costs nothing.
:::

### EBO Limitations

EBO cannot be applied when:

- The empty class is a **member**, not a base class.
- Multiple base classes of the **same type** exist (they must have distinct addresses).
- The empty base is also a base of another base in a diamond hierarchy (the compiler must still
  ensure unique addresses in some configurations).

```cpp
struct Empty {};
struct Bad : Empty, Empty { };  // ERROR: duplicate base type
struct OK : Empty { int x; };   // OK: single Empty base, EBO applies
```

## 1.5 Examining Object Layout

```cpp
#include <cstddef>
#include <cstdint>
#include <cstdio>

class Base {
    std::int32_t x_;
public:
    virtual void foo() {}
    explicit Base(std::int32_t x) : x_(x) {}
};

class Derived : public Base {
    std::int32_t y_;
public:
    Derived(std::int32_t x, std::int32_t y) : Base(x), y_(y) {}
    void foo() override {}
};

int main() {
    static_assert(sizeof(Base) == 16);     // vptr (8) + x_ (4) + padding (4)
    static_assert(sizeof(Derived) == 16);   // vptr (8) + x_ (4) + y_ (4)

    Base b(1);
    Derived d(2, 3);

    std::printf("Base:   size=%zu, align=%zu\n", sizeof(Base), alignof(Base));
    std::printf("Derived: size=%zu, align=%zu\n", sizeof(Derived), alignof(Derived));
}
```

When a class has virtual functions, the compiler adds a hidden pointer — the **vptr** — as the first
member of the object layout. The vptr points to a per-class virtual table (vtable) containing
function pointers for each virtual function. On 64-bit platforms, the vptr occupies 8 bytes.

## 1.6 Multiple Inheritance Layout

Multiple inheritance introduces a more complex layout because each base class contributes its own
vptr (if it has virtual functions) and the compiler must handle `this` pointer adjustments when
converting between derived and base pointers.

```cpp
#include <cstdio>
#include <cstdint>
#include <cstddef>

struct Base1 {
    int32_t a;
    virtual void f1() {}
};

struct Base2 {
    int32_t b;
    virtual void f2() {}
};

struct Derived : Base1, Base2 {
    int32_t c;
    void f1() override {}
    void f2() override {}
};

int main() {
    static_assert(sizeof(Base1) == 16);    // vptr(8) + a(4) + pad(4)
    static_assert(sizeof(Base2) == 16);    // vptr(8) + b(4) + pad(4)
    static_assert(sizeof(Derived) == 32);  // Base1(16) + Base2(16)

    Derived d;
    d.a = 1;
    d.b = 2;
    d.c = 3;

    // Pointer to first base: no adjustment needed
    Base1* b1 = &d;
    // Pointer to second base: this pointer is adjusted by sizeof(Base1)
    Base2* b2 = &d;

    std::printf("d    = %p\n", (void*)&d);
    std::printf("b1   = %p (offset 0)\n", (void*)b1);
    std::printf("b2   = %p (offset %zu)\n", (void*)b2, (size_t)((char*)b2 - (char*)&d));

    // b2 == (char*)&d + sizeof(Base1) == (char*)&d + 16
}
```

### The `this` Pointer Adjustment Problem

When a virtual function is called through a pointer to a non-first base, the compiler must adjust
the `this` pointer before invoking the function. This adjustment is encoded in the **vtable** or
performed by a **thunk** (a small code stub):

```cpp
// When calling b2->f2():
// 1. Load vptr from b2 (which points to Base2's vtable)
// 2. Load function pointer for f2 from Base2's vtable
// 3. The thunk subtracts sizeof(Base1) from 'this' to get the Derived*
// 4. Jump to Derived::f2
```

This has a runtime cost: one additional instruction (a `sub` or `add` on the `this` pointer) for
every virtual call through a non-first base pointer. In hot paths, this can be measurable.

## 1.7 Virtual Inheritance Layout

Virtual inheritance solves the diamond problem by ensuring that a virtually inherited base class has
exactly one subobject shared by all paths in the inheritance hierarchy. The cost is significant:
virtual base pointers and indirection.

```cpp
#include <cstdio>
#include <cstdint>
#include <cstddef>

struct VBase {
    int32_t data;
    virtual void vf() {}
};

struct Left : virtual VBase {
    int32_t left_data;
};

struct Right : virtual VBase {
    int32_t right_data;
};

struct Diamond : Left, Right {
    int32_t diamond_data;
    void vf() override {}
};

int main() {
    std::printf("sizeof(VBase):   %zu\n", sizeof(VBase));
    std::printf("sizeof(Left):    %zu\n", sizeof(Left));
    std::printf("sizeof(Right):   %zu\n", sizeof(Right));
    std::printf("sizeof(Diamond): %zu\n", sizeof(Diamond));

    Diamond d;
    d.data = 42;

    VBase* vb = &d;
    std::printf("VBase* points to offset %zu\n",
        (size_t)((char*)vb - (char*)&d));
}
```

### Virtual Base Pointer (vbptr)

Classes with virtual bases contain a hidden **virtual base pointer** (vbptr) that points to a shared
table containing the offset of the virtual base subobject. The layout is approximately:

```
Diamond object layout:
+--------------------+  offset 0
| Left::vptr         |
+--------------------+  offset 8
| Left::left_data    |
+--------------------+  offset 12
| Left::vbptr        |  -> points to VBase offset table
+--------------------+  offset 16
| Right::vptr        |
+--------------------+  offset 24
| Right::right_data  |
+--------------------+  offset 28
| Diamond::diamond_data |
+--------------------+  offset 32
| VBase::vptr        |  (shared)
+--------------------+  offset 40
| VBase::data        |  (shared)
+--------------------+  offset 44
```

The exact layout varies by compiler and ABI. MSVC uses a separate vbptr; the Itanium ABI (GCC/Clang)
often stores virtual base offsets in the vtable itself.

**Performance cost:** Every access to a virtual base member requires an additional indirection
through the vbptr table. Construction of a diamond object requires multiple `this` adjustments as
each base constructor is called.

## 1.8 vtable Internals

The vtable is a compiler-generated array of function pointers, one per virtual function in the class
hierarchy. Each polymorphic class has its own vtable.

### vtable Structure (Itanium C++ ABI)

```
vtable for Derived:
+---------------------------+
| offset_to_top = 0         |  <- for dynamic_cast this adjustment
| typeinfo pointer          |  <- RTTI: points to std::type_info for Derived
|---------------------------|
| &Derived::foo             |  <- virtual function pointer
| &Derived::bar             |  <- virtual function pointer
| &Base::baz                |  <- inherited, not overridden
|---------------------------+
```

### RTTI and `type_info`

Every polymorphic class has an associated `std::type_info` object [N4950 §17.2.1]. The vtable
contains a pointer to this object, enabling `dynamic_cast` and `typeid`:

```cpp
#include <cstdio>
#include <typeinfo>

struct Base { virtual ~Base() = default; };
struct Derived : Base {};

int main() {
    Derived d;
    Base& ref = d;

    // typeid uses the vtable's type_info pointer
    const std::type_info& ti = typeid(ref);
    std::printf("type: %s\n", ti.name());  // "7Derived" (mangled name)

    // dynamic_cast uses the type_info hierarchy for runtime type checking
    if (auto* derived = dynamic_cast<Derived*>(&ref)) {
        std::printf("cast succeeded\n");
    }
}
```

**RTTI overhead:** Each polymorphic class adds a `type_info` object to the binary (typically in
`.data.rel.ro`), and each object carries a vptr pointing to a vtable that contains a `type_info`
pointer. This overhead is present even if you never use `dynamic_cast` or `typeid`.

Disabling RTTI: Use `-fno-rtti` (GCC/Clang) or `/GR-` (MSVC) to eliminate this overhead. This also
disables `dynamic_cast` (except for upcasts, which are compile-time resolved).

### Pure Virtual Functions and Abstract Classes

A class with at least one **pure virtual function** is abstract — it cannot be instantiated. In the
vtable, a pure virtual function's slot typically points to `__cxa_pure_virtual` (Itanium ABI) or
`_purecall` (MSVC), which triggers a runtime error if called:

```cpp
#include <cstdio>

struct Interface {
    virtual void process() = 0;
    virtual ~Interface() = default;
};

struct Concrete : Interface {
    void process() override {
        std::printf("processing\n");
    }
};

// struct Bad : Interface { };  // ERROR: cannot instantiate abstract class

int main() {
    Concrete c;
    Interface* i = &c;
    i->process();  // Calls Concrete::process via vtable
}
```

### Calling a Pure Virtual Function from a Constructor

A common Undefined Behavior scenario: calling a virtual function (especially a pure virtual) from a
base class constructor. During base class construction, the derived class vtable is not yet set up:

```cpp
#include <cstdio>

struct Base {
    Base() {
        // During Base construction, the vtable is Base's vtable
        // NOT the Derived vtable
        do_work();  // Calls Base::do_work, NOT Derived::do_work
    }
    virtual void do_work() {
        std::printf("Base::do_work\n");
    }
};

struct Derived : Base {
    void do_work() override {
        std::printf("Derived::do_work\n");
    }
};

int main() {
    Derived d;  // Prints "Base::do_work", NOT "Derived::do_work"
}
```

## 1.9 Virtual Destructors and Object Destruction

When deleting an object through a base class pointer, the destructor must be virtual to ensure the
derived destructor runs. Without `virtual`, only the base destructor runs, causing resource leaks
and Undefined Behavior.

```cpp
#include <cstdio>
#include <memory>

struct Base {
    ~Base() { std::printf("Base dtor\n"); }
};

struct Derived : Base {
    ~Derived() { std::printf("Derived dtor\n"); }
};

int main() {
    // BAD: Undefined Behavior — Derived dtor is not called
    Base* p = new Derived();
    delete p;  // Only ~Base() runs. Memory leak for Derived members.

    // GOOD: Both destructors run
    struct BaseVirt { virtual ~BaseVirt() { std::printf("BaseVirt dtor\n"); } };
    struct DerivedVirt : BaseVirt { ~DerivedVirt() { std::printf("DerivedVirt dtor\n"); } };

    BaseVirt* pv = new DerivedVirt();
    delete pv;  // ~DerivedVirt() then ~BaseVirt()

    // BEST: Use smart pointers
    auto up = std::make_unique<DerivedVirt>();
    // Automatic destruction with correct virtual dispatch
}
```

### Destruction Order

When a derived object is destroyed, destructors run in reverse order of construction:

1. Derived destructor body runs.
2. Derived member destructors run.
3. Base destructor body runs.
4. Base member destructors run.
5. (If multiple bases, right-to-left per declaration order.)

## 1.10 Devirtualization and the `final` Specifier

The compiler can devirtualize a virtual call (convert it to a direct call) when it can prove the
dynamic type at compile time. The `final` specifier helps the compiler make this determination.

```cpp
#include <cstdio>

struct Widget {
    virtual void draw() { std::printf("Widget::draw\n"); }
    virtual ~Widget() = default;
};

struct Button final : Widget {  // 'final' prevents further derivation
    void draw() override { std::printf("Button::draw\n"); }
};

void render(Widget& w) {
    w.draw();
}

int main() {
    Button b;
    // The compiler knows 'b' is a Button (not a base pointer).
    // With 'final', it can prove no further-derived type exists.
    // Result: devirtualized to a direct call to Button::draw.
    b.draw();

    // Through a reference: the compiler may or may not devirtualize
    // depending on optimization level and escape analysis.
    render(b);
}
```

### When Devirtualization Occurs

1. **Static type analysis:** If the object is allocated locally and never escapes (no pointers to it
   are stored), the compiler can track its exact type.
2. **`final` on the class:** If the class is `final`, no further derivation is possible, so the
   dynamic type is always the static type.
3. **`final` on the method:** If the virtual function is `final`, no override exists, so the
   compiler can use the static type's vtable entry.
4. **Speculative devirtualization:** At `-O2`/`-O3`, compilers may emit speculative direct calls
   guarded by a type check (comparing the vptr against the expected vtable).

## Common Pitfalls

### 1. Object Slicing

Assigning a derived object to a base object by value copies only the base subobject, discarding the
derived portion:

```cpp
#include <cstdio>

struct Base { int a; virtual void print() { std::printf("Base: %d\n", a); } };
struct Derived : Base { int b; void print() override { std::printf("Derived: %d, %d\n", a, b); } };

int main() {
    Derived d{1, 2};
    Base b = d;  // SLICING: b contains only {a=1, vptr=Base::vtable}
    b.print();   // Prints "Base: 1", not "Derived: 1, 2"
}
```

### 2. `offsetof` with Non-Standard-Layout Types

`offsetof` is undefined behavior for non-standard-layout classes [N4950 §18.2.4]. A class with
virtual functions is not standard-layout. Compilers typically still produce correct results, but the
behavior is not portable:

```cpp
struct Polymorphic {
    virtual void f() {}
    int x;
};

// offsetof(Polymorphic, x);  // Technically UB, though usually works
```

### 3. Forgetting Virtual Destructors in Interface Classes

Any class that is intended to be used as a base class with polymorphic deletion must have a virtual
destructor. This is the single most common C++ bug related to object layout. If a destructor is
non-virtual and the class has any virtual functions, deleting through a base pointer causes
Undefined Behavior.

### 4. Multiple Inheritance `this` Pointer Adjustments

When casting between base class pointers in a multiple inheritance hierarchy, the pointer value may
change. This is surprising but correct — the different base subobjects are at different offsets
within the derived object. Always use `static_cast` for known-safe downcasts and `dynamic_cast` for
runtime-checked downcasts.

### 5. EBO Failure with Same-Type Bases

EBO does not apply when two or more base classes have the same type. Each base subobject must have a
unique address, so each one occupies at least one byte. Use parameterized base classes (empty base
class templates with different template arguments) to work around this:

```cpp
template <typename Tag>
struct EmptyBase {};

struct Combined : EmptyBase<struct A>, EmptyBase<struct B> {
    int data;
};
static_assert(sizeof(Combined) == sizeof(int));  // EBO applies for both
```

:::

:::
