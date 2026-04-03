---
title: Object Layout, vptr, and the this Pointer
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
$\lceil \text{size} / \text{alignment} \rceil \times \text{alignment}$ bytes.

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
\text{sizeof}(\texttt{Simple}) = 1 + 3\text{(pad)} + 4 + 1 + 3\text{(pad)} + 8 = 24
$$

:::tip Standard Layout A class with no virtual functions, no non-static data members of reference
type, and all non-static data members with the same access control is a **standard-layout class**
[N4950 §11.4.1]. Such classes have a well-defined, portable memory layout and are compatible with C
structs. :::

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
`std::allocator<T>` is typically an empty class, and `std::vector<T, std::allocator<T>>` inherits
from it privately so that the allocator storage costs nothing. :::

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

## See Also

- [Access Control and Friendship](./2_access_control.md)
- [Special Member Function Generation Rules](./3_special_member_functions.md)
