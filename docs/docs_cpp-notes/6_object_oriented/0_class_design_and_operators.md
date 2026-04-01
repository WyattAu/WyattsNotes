---
title: Class Design and Operators
date: 2026-03-31T00:00:00.000Z
tags:
  - cpp
categories:
  - cpp
slug: class-design-and-operators
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Class Design and Operators

A C++ class is a user-defined type that bundles data members, member functions, access control, and operator semantics into a single abstraction. The compiler transforms class definitions into concrete memory layouts, generates special member functions according to well-defined rules, and enforces access control at compile time. Understanding these mechanisms is essential for writing correct, efficient, and maintainable abstractions.

This module covers the object memory model, access control and friendship, special member function generation rules, operator overloading, the three-way comparison operator, and custom formatting — the full toolkit for designing robust class types.

## 1. Object Layout, vptr, and the `this` Pointer

### 1.1 Memory Layout of a Simple Class

For a class with no virtual functions and no base classes, the memory layout is straightforward: data members are laid out in declaration order with potential padding between them for alignment [N4950 §11.4.1]. Each non-static data member occupies $\lceil \text{size} / \text{alignment} \rceil \times \text{alignment}$ bytes.

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

:::tip Standard Layout
A class with no virtual functions, no non-static data members of reference type, and all non-static data members with the same access control is a **standard-layout class** [N4950 §11.4.1]. Such classes have a well-defined, portable memory layout and are compatible with C structs.
:::

### 1.2 The `this` Pointer [N4950 §11.4.3.2]

Every non-static member function receives an implicit first parameter: a pointer to the object on which the function is invoked. This pointer is named `this` and has the type `T*` in a non-const member function, `const T*` in a const member function, and `volatile T*` in a volatile member function.

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

### 1.3 How `this` Is Passed

The C++ Standard does not specify the mechanism for passing `this` — that is determined by the ABI. On the dominant 64-bit platforms:

- **System V AMD64 ABI** (Linux, macOS): `this` is passed as the first implicit argument in register **rdi** (the same register used for the first explicit parameter of a non-member function). If the member function is called on a `const` object, the pointer is passed in the same register; the type difference is purely a compile-time distinction.
- **Windows x64 ABI**: `this` is passed in register **rcx**.

The key insight: a member function call `obj.method(arg)` is ABI-equivalent to a non-member call `method(&obj, arg)`, modulo the name-mangling convention that encodes the class name.

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

### 1.4 Empty Base Optimization (EBO)

The Standard requires that every complete object has a unique address [N4950 §6.9]. This means that even an empty class — one with no non-static data members and no virtual functions — must occupy at least one byte:

```cpp
#include <cstddef>

struct Empty {};
static_assert(sizeof(Empty) == 1);
```

However, when an empty class is used as a **base class**, the compiler is permitted to apply the **Empty Base Optimization** (EBO): it may allocate zero bytes for the base class subobject, since the derived class's own address already satisfies the unique-address requirement.

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

:::info Practical Importance
EBO is exploited heavily by standard library implementations. `std::allocator<T>` is typically an empty class, and `std::vector<T, std::allocator<T>>` inherits from it privately so that the allocator storage costs nothing.
:::

### 1.5 Examining Object Layout

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

When a class has virtual functions, the compiler adds a hidden pointer — the **vptr** — as the first member of the object layout. The vptr points to a per-class virtual table (vtable) containing function pointers for each virtual function. On 64-bit platforms, the vptr occupies 8 bytes.

## 2. Access Control and Friendship

### 2.1 Access Specifiers [N4950 §14.2]

A class member can be declared with one of three access specifiers:

| Specifier   | Class members | Derived class members | External code |
| ----------- | :-----------: | :-------------------: | :-----------: |
| `public`    |      Yes      |          Yes          |      Yes      |
| `protected` |      Yes      |          Yes          |      No       |
| `private`   |      Yes      |          No           |      No       |

Access control is enforced at compile time only; it has zero runtime cost. The access specifier applies to all members declared after it until another access specifier is encountered.

```cpp
#include <cstdio>

class Account {
private:
    double balance_ = 0.0;

    void log(const char* msg) const {
        std::printf("[LOG] %s: balance=%.2f\n", msg, balance_);
    }

protected:
    void set_balance(double b) { balance_ = b; }

public:
    void deposit(double amount) {
        balance_ += amount;
        log("deposit");
    }

    double balance() const { return balance_; }
};

class SavingsAccount : public Account {
public:
    void apply_interest(double rate) {
        set_balance(balance() * (1.0 + rate));  // protected: accessible
    }
};

int main() {
    Account a;
    a.deposit(100.0);
    // a.set_balance(50.0);   // error: protected
    // a.balance_ = 0;        // error: private
    // a.log("test");         // error: private

    SavingsAccount s;
    s.deposit(200.0);
    s.apply_interest(0.05);
}
```

### 2.2 Class vs Struct

In C++, `class` and `struct` are identical except for one default: in a `class`, members are `private` by default; in a `struct`, members are `public` by default [N4950 §13.3].

```cpp
struct S { int x; };    // x is public
class  C { int x; };    // x is private

static_assert(sizeof(S) == sizeof(C));
```

:::tip Convention
Use `struct` for passive data aggregates with no invariant enforcement. Use `class` for types that maintain invariants and require encapsulation.
:::

### 2.3 Friend Declarations [N4950 §14.3]

A `friend` declaration grants a function or another class access to `private` and `protected` members of the class that grants friendship. Friendship is **not transitive**, **not inherited**, and **not symmetric**: if class A declares B as a friend, B can access A's private members, but A cannot access B's, and B's derived classes cannot access A's private members.

```cpp
#include <cstdio>

class Matrix;

class Vector {
    double data_[3]{};
    friend Vector operator*(const Matrix& m, const Vector& v);
public:
    Vector(double x, double y, double z) {
        data_[0] = x; data_[1] = y; data_[2] = z;
    }
    double operator[](std::size_t i) const { return data_[i]; }
};

class Matrix {
    double m_[3][3]{};
    friend Vector operator*(const Matrix& m, const Vector& v);
public:
    Matrix(std::initializer_list<std::initializer_list<double>> il) {
        std::size_t i = 0;
        for (auto row : il) {
            std::size_t j = 0;
            for (auto val : row) {
                m_[i][j++] = val;
            }
            ++i;
        }
    }
};

Vector operator*(const Matrix& m, const Vector& v) {
    Vector result{0, 0, 0};
    for (std::size_t i = 0; i < 3; ++i) {
        double sum = 0;
        for (std::size_t j = 0; j < 3; ++j) {
            sum += m.m_[i][j] * v.data_[j];
        }
        result.data_[i] = sum;
    }
    return result;
}

int main() {
    Matrix m{{1, 0, 0}, {0, 1, 0}, {0, 0, 1}};
    Vector v{1, 2, 3};
    Vector r = m * v;
    std::printf("result: %.1f %.1f %.1f\n", r[0], r[1], r[2]);
}
```

### 2.4 Friend Classes and Member Functions

Friendship can be granted to an entire class or to a specific member function of another class:

```cpp
#include <cstdio>

class Engine;

class DiagnosticTool {
public:
    void inspect(const Engine& e);
};

class Engine {
    int rpm_ = 0;
    double temp_ = 0.0;
    friend class Mechanic;             // entire class is a friend
    friend void DiagnosticTool::inspect(const Engine&);  // one member
public:
    void set_rpm(int rpm) { rpm_ = rpm; }
    void set_temp(double t) { temp_ = t; }
};

class Mechanic {
public:
    void tune(Engine& e) {
        e.rpm_ = 800;     // OK: Mechanic is a friend
        e.temp_ = 90.0;
        std::printf("Tuned: rpm=%d, temp=%.1f\n", e.rpm_, e.temp_);
    }
};

void DiagnosticTool::inspect(const Engine& e) {
    std::printf("Inspect: rpm=%d, temp=%.1f\n", e.rpm_, e.temp_);
}

int main() {
    Engine e;
    Mechanic m;
    m.tune(e);

    DiagnosticTool d;
    d.inspect(e);
}
```

### 2.5 When to Use Friendship

Friendship should be used sparingly. The two most common legitimate use cases are:

1. **Symmetric binary operators**: When the left operand does not belong to the class (e.g., `ostream& operator<<(ostream&, const T&)` or `Vector operator*(const Matrix&, const Vector&)`).
2. **Factory patterns**: When a factory function needs access to a private constructor.
3. **Internal helpers**: When a utility function needs deep access but should not be a member.

## 3. Special Member Function Generation Rules

### 3.1 The Rule of Five

A class with user-defined resource management must define or delete each of the five **special member functions** (SMFs) [N4950 §11.4.5.3]:

1. Destructor: `~T()`
2. Copy constructor: `T(const T&)`
3. Copy assignment operator: `T& operator=(const T&)`
4. Move constructor: `T(T&&)` (since C++11)
5. Move assignment operator: `T& operator=(T&&)` (since C++11)

If any one of these is user-declared, the others are not implicitly generated under various conditions, leading to potentially incorrect or surprising behavior.

### 3.2 Default Generation Rules

The compiler implicitly declares a default SMF if the class has no user-declared constructor, destructor, copy/move operations, or other conditions that would trigger implicit deletion. The exact rules are [N4950 §11.4.5.3]:

| SMF                  | Implicitly declared if...                                           | Implicitly defined as default if...                  | Implicitly deleted if...                                                                                                 |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Destructor**       | No user-declared destructor                                         | Trivial (all bases/members have trivial destructors) | Any base or member has deleted/inaccessible destructor                                                                   |
| **Copy constructor** | No user-declared move constructor or move assignment                | Trivial                                              | Any base/member has deleted copy ctor, or has move ctor, or volatile member                                              |
| **Copy assignment**  | No user-declared move constructor or move assignment                | Trivial                                              | Any base/member has deleted copy assign, or has move assign, or reference member, or volatile member                     |
| **Move constructor** | No user-declared copy ctor, copy assign, move assign, or destructor | Trivial                                              | Any base/member has deleted move ctor or inaccessible non-move ctor, or has copy-only semantics                          |
| **Move assignment**  | No user-declared copy ctor, copy assign, move ctor, or destructor   | Trivial                                              | Any base/member has deleted move assign or inaccessible non-move assign, or has copy-only semantics, or reference member |

:::warning C++11 vs C++14+ Move Generation
In C++11, if any SMF is user-declared, the move constructor and move assignment are **not** implicitly declared. In C++14 and later, this remains true — the Standard was not changed. The critical point: declaring a destructor suppresses implicit move generation.
:::

### 3.3 `= default` and `= delete`

The `= default` specifier explicitly requests the compiler-generated default implementation [N4950 §11.4.5.2]. It can appear inside the class body or out-of-line. When applied out-of-line, the SMF is only generated if it is odr-used.

The `= delete` specifier explicitly suppresses the SMF [N4950 §11.4.5.2]. Any use of a deleted function is ill-formed.

```cpp
#include <cstdio>

class NonCopyable {
    int data_ = 0;
public:
    NonCopyable() = default;
    ~NonCopyable() = default;

    NonCopyable(const NonCopyable&) = delete;
    NonCopyable& operator=(const NonCopyable&) = delete;

    NonCopyable(NonCopyable&&) = default;
    NonCopyable& operator=(NonCopyable&&) = default;

    void set(int v) { data_ = v; }
    int get() const { return data_; }
};

int main() {
    NonCopyable a;
    a.set(42);

    NonCopyable b = std::move(a);   // OK: move constructor
    // NonCopyable c = a;            // error: copy constructor is deleted
    // a = b;                        // error: copy assignment is deleted
}
```

### 3.4 Implicit Deletion: A Complete Example

```cpp
#include <cstdio>
#include <string>

class HasRef {
    int& ref_;
public:
    explicit HasRef(int& r) : ref_(r) {}
    ~HasRef() = default;

    HasRef(const HasRef&) = default;
    HasRef& operator=(const HasRef&) = default;
    // Move constructor: implicitly DELETED (reference member)
    // Move assignment:  implicitly DELETED (reference member)
};

class HasUniquePtr {
    std::unique_ptr<int> ptr_;
public:
    explicit HasUniquePtr(int v) : ptr_(std::make_unique<int>(v)) {}
    ~HasUniquePtr() = default;
    // Copy constructor: implicitly DELETED (unique_ptr has deleted copy ctor)
    // Copy assignment:  implicitly DELETED
};

class HasVolatile {
    volatile int v_ = 0;
public:
    // Copy constructor: implicitly DELETED (volatile member)
    // Copy assignment:  implicitly DELETED (volatile member)
};

int main() {
    int x = 10;
    HasRef hr(x);
    HasRef hr2 = hr;       // OK: copy is default
    // HasRef hr3 = std::move(hr);  // error: move is deleted
}
```

### 3.5 Proper Rule of Five Implementation

```cpp
#include <cstdio>
#include <cstring>
#include <utility>

class Buffer {
    char* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t capacity_ = 0;

    void grow(std::size_t min_cap) {
        std::size_t new_cap = capacity_ ? capacity_ * 2 : 16;
        if (new_cap < min_cap) new_cap = min_cap;
        char* new_data = new char[new_cap];
        std::memcpy(new_data, data_, size_);
        delete[] data_;
        data_ = new_data;
        capacity_ = new_cap;
    }

public:
    Buffer() = default;

    explicit Buffer(std::size_t n, char fill = 0)
        : data_(new char[n]), size_(n), capacity_(n)
    {
        std::memset(data_, fill, n);
    }

    ~Buffer() { delete[] data_; }

    Buffer(const Buffer& other)
        : data_(new char[other.capacity_])
        , size_(other.size_)
        , capacity_(other.capacity_)
    {
        std::memcpy(data_, other.data_, other.size_);
    }

    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            Buffer tmp(other);
            std::swap(data_, tmp.data_);
            std::swap(size_, tmp.size_);
            std::swap(capacity_, tmp.capacity_);
        }
        return *this;
    }

    Buffer(Buffer&& other) noexcept
        : data_(other.data_)
        , size_(other.size_)
        , capacity_(other.capacity_)
    {
        other.data_ = nullptr;
        other.size_ = 0;
        other.capacity_ = 0;
    }

    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            capacity_ = other.capacity_;
            other.data_ = nullptr;
            other.size_ = 0;
            other.capacity_ = 0;
        }
        return *this;
    }

    void push_back(char c) {
        if (size_ == capacity_) grow(size_ + 1);
        data_[size_++] = c;
    }

    std::size_t size() const { return size_; }
    char operator[](std::size_t i) const { return data_[i]; }
};

int main() {
    Buffer a;
    a.push_back('H');
    a.push_back('i');

    Buffer b = a;                          // copy constructor
    Buffer c = std::move(b);               // move constructor
    a = c;                                 // copy assignment
    c = Buffer(4, 'X');                    // move assignment (from temporary)

    std::printf("a: ");
    for (std::size_t i = 0; i < a.size(); ++i)
        std::printf("%c", a[i]);
    std::printf("\n");
}
```

## 4. Operator Overloading: Arithmetic, Subscript, and Function Call

### 4.1 Rules for Operator Overloading [N4950 §11.4.5]

An overloaded operator is a function with a special name composed of the keyword `operator` followed by the operator symbol. The following constraints apply:

- You cannot invent new operators (`operator**` is ill-formed).
- You cannot change the arity, precedence, or associativity of an operator.
- The operators `.`, `.*`, `::`, `?:`, and `sizeof` cannot be overloaded.
- At least one operand must be of class or enumeration type.
- `operator()`, `operator[]`, `operator->`, and `operator->*` must be non-static member functions.

### 4.2 Member vs Non-Member Overloads

For **binary operators**, the choice between member and non-member affects implicit conversions:

- **Member function**: The left operand must be of the class type (or a reference to it). Implicit conversions are only applied to the right operand.
- **Non-member function**: Both operands participate in implicit conversions.

This is why symmetric operators like `==`, `+`, `*` should typically be implemented as non-members (often non-member friends), so that expressions like `2 + vec` work alongside `vec + 2`.

```cpp
#include <cstdio>

class Int {
    int value_;
public:
    explicit Int(int v) : value_(v) {}

    Int operator+(const Int& rhs) const {
        return Int(value_ + rhs.value_);
    }

    int get() const { return value_; }
};

// Non-member: allows Int(2) + Int(3) via implicit conversion
Int operator+(int lhs, const Int& rhs) {
    return Int(lhs) + rhs;
}

int main() {
    Int a(1), b(2);
    // Int c = 3 + a;  // error if only member operator+ exists
    //                  // OK with the non-member overload

    Int c = a + b;
    Int d = 3 + a;     // OK: non-member overload; int(3) -> Int(3)
    std::printf("%d %d\n", c.get(), d.get());
}
```

### 4.3 A `Vec3` Class with Full Operator Suite

```cpp
#include <cmath>
#include <cstdio>
#include <stdexcept>

class Vec3 {
    double e_[3]{};

public:
    Vec3() = default;
    Vec3(double x, double y, double z) : e_{x, y, z} {}

    double x() const { return e_[0]; }
    double y() const { return e_[1]; }
    double z() const { return e_[2]; }

    double& x() { return e_[0]; }
    double& y() { return e_[1]; }
    double& z() { return e_[2]; }

    Vec3 operator+() const { return *this; }
    Vec3 operator-() const { return {-e_[0], -e_[1], -e_[2]}; }

    Vec3& operator+=(const Vec3& v) {
        e_[0] += v.e_[0]; e_[1] += v.e_[1]; e_[2] += v.e_[2];
        return *this;
    }

    Vec3& operator-=(const Vec3& v) {
        e_[0] -= v.e_[0]; e_[1] -= v.e_[1]; e_[2] -= v.e_[2];
        return *this;
    }

    Vec3& operator*=(double t) {
        e_[0] *= t; e_[1] *= t; e_[2] *= t;
        return *this;
    }

    Vec3& operator/=(double t) {
        return *this *= (1.0 / t);
    }

    double length_squared() const {
        return e_[0]*e_[0] + e_[1]*e_[1] + e_[2]*e_[2];
    }

    double length() const {
        return std::sqrt(length_squared());
    }

    double operator[](int i) const {
        if (i < 0 || i > 2) throw std::out_of_range("Vec3 index");
        return e_[i];
    }

    double& operator[](int i) {
        if (i < 0 || i > 2) throw std::out_of_range("Vec3 index");
        return e_[i];
    }

    Vec3& operator++() {
        ++e_[0]; ++e_[1]; ++e_[2];
        return *this;
    }

    Vec3 operator++(int) {
        Vec3 tmp = *this;
        ++(*this);
        return tmp;
    }
};

inline Vec3 operator+(const Vec3& u, const Vec3& v) { return u += v; }
inline Vec3 operator-(const Vec3& u, const Vec3& v) { return u -= v; }
inline Vec3 operator*(const Vec3& u, double t) { return u *= t; }
inline Vec3 operator*(double t, const Vec3& u) { return u *= t; }
inline Vec3 operator/(const Vec3& u, double t) { return u /= t; }

double dot(const Vec3& u, const Vec3& v) {
    return u.x() * v.x() + u.y() * v.y() + u.z() * v.z();
}

Vec3 cross(const Vec3& u, const Vec3& v) {
    return {
        u.y() * v.z() - u.z() * v.y(),
        u.z() * v.x() - u.x() * v.z(),
        u.x() * v.y() - u.y() * v.x()
    };
}

int main() {
    Vec3 a(1, 2, 3);
    Vec3 b(4, 5, 6);
    Vec3 c = a + b;
    Vec3 d = 2.0 * a;

    std::printf("a + b  = (%.1f, %.1f, %.1f)\n", c.x(), c.y(), c.z());
    std::printf("2 * a  = (%.1f, %.1f, %.1f)\n", d.x(), d.y(), d.z());
    std::printf("dot    = %.1f\n", dot(a, b));
    std::printf("cross  = (%.1f, %.1f, %.1f)\n",
        cross(a, b).x(), cross(a, b).y(), cross(a, b).z());

    Vec3 e = a;
    Vec3 f = e++;    // postfix: f = (1,2,3), e = (2,3,4)
    Vec3 g = ++a;    // prefix:  a = (2,3,4), g = (2,3,4)
    std::printf("e = (%.1f, %.1f, %.1f)\n", e.x(), e.y(), e.z());
}
```

### 4.4 Subscript Operator: Const and Non-Const Overloads

The subscript operator should be overloaded in two versions — a `const` version returning by value or const reference, and a non-const version returning a non-const reference — so that the operator works correctly on both const and non-const objects.

```cpp
#include <cstddef>
#include <stdexcept>
#include <vector>

template<std::size_t Rows, std::size_t Cols>
class Matrix {
    std::vector<double> data_;

public:
    Matrix() : data_(Rows * Cols, 0.0) {}

    double& operator()(std::size_t r, std::size_t c) {
        if (r >= Rows || c >= Cols)
            throw std::out_of_range("Matrix index out of range");
        return data_[r * Cols + c];
    }

    double operator()(std::size_t r, std::size_t c) const {
        if (r >= Rows || c >= Cols)
            throw std::out_of_range("Matrix index out of range");
        return data_[r * Cols + c];
    }

    double& at(std::size_t r, std::size_t c) {
        return data_.at(r * Cols + c);
    }

    double at(std::size_t r, std::size_t c) const {
        return data_.at(r * Cols + c);
    }

    std::size_t rows() const { return Rows; }
    std::size_t cols() const { return Cols; }
};

int main() {
    Matrix<3, 3> m;
    m(0, 0) = 1.0;
    m(1, 1) = 2.0;
    m(2, 2) = 3.0;

    const Matrix<3, 3>& cm = m;
    double diag = cm(1, 1);  // calls const overload
}
```

### 4.5 Function Call Operator: Functors

The function call operator `operator()` allows an object to be invoked like a function. Such objects are called **function objects** or **functors**. Lambda closures are the most common example: the compiler generates an unnamed class type with an `operator()` [N4950 §7.5.5].

```cpp
#include <algorithm>
#include <cstdio>
#include <vector>

class MovingAverage {
    std::vector<double> window_;
    std::size_t capacity_;
    double sum_ = 0.0;
    std::size_t pos_ = 0;
    std::size_t count_ = 0;

public:
    explicit MovingAverage(std::size_t n) : window_(n, 0.0), capacity_(n) {}

    double operator()(double value) {
        if (count_ < capacity_) {
            sum_ += value;
            window_[pos_] = value;
            ++count_;
        } else {
            sum_ -= window_[pos_];
            sum_ += value;
            window_[pos_] = value;
        }
        pos_ = (pos_ + 1) % capacity_;
        return sum_ / count_;
    }
};

int main() {
    MovingAverage ma(3);

    std::vector<double> data = {1.0, 2.0, 3.0, 4.0, 5.0};
    std::printf("Moving averages: ");
    for (double v : data) {
        std::printf("%.2f ", ma(v));
    }
    std::printf("\n");
    // Output: 1.00 1.50 2.00 3.00 4.00
}
```

### 4.6 Increment and Decrement: Prefix vs Postfix

The prefix increment/decrement (`++obj`, `--obj`) modifies the object and returns a reference to it. The postfix increment/decrement (`obj++`, `obj--`) returns a copy of the original value before modification [N4950 §11.4.5].

The postfix form is distinguished by a dummy `int` parameter:

```cpp
#include <cstdio>

class Counter {
    int count_ = 0;
public:
    Counter& operator++() {        // prefix
        ++count_;
        return *this;
    }

    Counter operator++(int) {      // postfix
        Counter tmp = *this;
        ++count_;
        return tmp;
    }

    int get() const { return count_; }
};

int main() {
    Counter c;
    Counter d = c++;    // d = 0, c = 1
    Counter e = ++c;    // c = 2, e = 2

    std::printf("c=%d d=%d e=%d\n", c.get(), d.get(), e.get());
    // Output: c=2 d=0 e=2
}
```

:::tip Prefer Prefix
Prefix increment avoids creating a temporary copy. In performance-sensitive code, prefer `++it` over `it++` for iterators and counters.
:::

## 5. The Spaceship Operator (`<=>`) and Default Comparisons

### 5.1 Three-Way Comparison [N4950 §11.4.5.4]

C++20 introduced the **spaceship operator** `<=>` as a unified comparison mechanism. It returns one of three comparison category types from `<compare>`:

| Category                | Meaning                                      | Total ordering? | Equality substitutable? |
| ----------------------- | -------------------------------------------- | :-------------: | :---------------------: |
| `std::strong_ordering`  | Total, with substitutable equality           |       Yes       |           Yes           |
| `std::weak_ordering`    | Total, but equality may not be substitutable |       Yes       |           No            |
| `std::partial_ordering` | Partial (incomparable values possible)       |       No        |           No            |

$$
\texttt{strong\_ordering} \subset \texttt{weak\_ordering} \subset \texttt{partial\_ordering}
$$

The implicit conversion rules allow a `strong_ordering` to be used where a `weak_ordering` or `partial_ordering` is expected, and a `weak_ordering` to be used where a `partial_ordering` is expected.

### 5.2 Default Comparisons with `= default`

When you write `auto operator<=>(const T&) const = default;`, the compiler generates the `<=>` operator by lexicographically comparing each non-static data member in declaration order [N4950 §11.4.5.4]. Furthermore, if `<=>` is defaulted and returns `std::strong_ordering`, the compiler also synthesizes the six relational operators: `==`, `!=`, `<`, `>`, `<=`, `>=`.

```cpp
#include <compare>
#include <cstdio>
#include <string>

struct Version {
    int major = 0;
    int minor = 0;
    int patch = 0;

    std::strong_ordering operator<=>(const Version&) const = default;
};

struct Config {
    std::string name;
    int priority = 0;

    auto operator<=>(const Config&) const = default;
};

int main() {
    Version v1{1, 2, 3};
    Version v2{1, 2, 4};
    Version v3{1, 2, 3};

    static_assert(v1 < v2);
    static_assert(v2 > v1);
    static_assert(v1 == v3);
    static_assert(v1 != v2);
    static_assert(v1 <= v3);
    static_assert(v1 >= v3);

    Config c1{"alpha", 1};
    Config c2{"beta", 0};
    // Compares name first (lexicographic), then priority
    std::printf("c1 <=> c2: %s\n", c1 < c2 ? "less" : "greater");
}
```

### 5.3 Comparison Categories in Detail

```cpp
#include <compare>
#include <cstdio>
#include <iostream>
#include <cmath>

struct Finite {
    double value;
    std::partial_ordering operator<=>(const Finite&) const = default;
};

struct WithNaN {
    double value;

    std::partial_ordering operator<=>(const WithNaN& other) const {
        if (std::isnan(value) || std::isnan(other.value))
            return std::partial_ordering::unordered;
        return value <=> other.value;
    }

    bool operator==(const WithNaN& other) const {
        return (*this <=> other) == std::partial_ordering::equivalent;
    }
};

int main() {
    auto ord = 42 <=> 43;
    static_assert(std::is_same_v<decltype(ord), std::strong_ordering>);
    std::printf("42 <=> 43 is %s\n",
        ord < 0 ? "less" : ord > 0 ? "greater" : "equal");

    WithNaN a{1.0};
    WithNaN b{std::nan("")};
    auto cmp = a <=> b;
    std::printf("1.0 <=> NaN is %s\n",
        cmp == std::partial_ordering::unordered ? "unordered" : "ordered");
}
```

### 5.4 Custom `<=>` for Case-Insensitive String Comparison

```cpp
#include <algorithm>
#include <cctype>
#include <compare>
#include <cstdio>
#include <string>
#include <string_view>

struct CaseInsensitiveString {
    std::string data;

    CaseInsensitiveString() = default;
    CaseInsensitiveString(std::string_view sv) : data(sv) {}

    std::strong_ordering operator<=>(const CaseInsensitiveString& other) const {
        auto to_lower = [](unsigned char c) -> char {
            return static_cast<char>(std::tolower(c));
        };

        std::string a = data;
        std::string b = other.data;
        std::transform(a.begin(), a.end(), a.begin(), to_lower);
        std::transform(b.begin(), b.end(), b.begin(), to_lower);

        if (a < b) return std::strong_ordering::less;
        if (a > b) return std::strong_ordering::greater;
        return std::strong_ordering::equal;
    }

    bool operator==(const CaseInsensitiveString& other) const {
        return (*this <=> other) == std::strong_ordering::equal;
    }
};

int main() {
    CaseInsensitiveString s1{"Hello"};
    CaseInsensitiveString s2{"HELLO"};
    CaseInsensitiveString s3{"World"};

    static_assert(s1 == s2);
    static_assert(s1 < s3);
    static_assert(s3 > s1);

    std::printf("\"Hello\" == \"HELLO\": %s\n", s1 == s2 ? "true" : "false");
    std::printf("\"Hello\" <  \"World\": %s\n", s1 < s3 ? "true" : "false");
}
```

:::warning Performance Note
The above implementation allocates temporary strings for each comparison. For performance-critical code, implement a locale-aware character-by-character comparison that avoids allocation.
:::

## 6. Custom Formatting: Extending `std::formatter`

### 6.1 `std::formatter<T, CharT>` Specialization [N4950 §22.14.4]

C++20 introduced `<format>`, which provides type-safe text formatting. To enable formatting for a user-defined type, you specialize `std::formatter<T, CharT>` in namespace `std`. The specialization must provide two member functions:

1. **`constexpr auto parse(format_parse_context& ctx)`**: Parses format specifiers from the format string. Returns an iterator pointing past the last character consumed.
2. **`auto format(const T& obj, format_context& ctx) const`**: Formats the object and writes the output. Returns an iterator past the last character written.

### 6.2 Formatter for an Enum Class

```cpp
#include <format>
#include <iostream>
#include <string_view>
#include <array>
#include <stdexcept>

enum class Color { Red, Green, Blue };

template<>
struct std::formatter<Color, char> {
    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format specifier for Color");
        return it;
    }

    auto format(Color c, format_context& ctx) const {
        constexpr std::array names = {"Red", "Green", "Blue"};
        return std::format_to(ctx.out(), "{}", names[static_cast<int>(c)]);
    }
};

int main() {
    Color c = Color::Green;
    std::cout << std::format("Color: {}\n", c);
    std::cout << std::format("Palette: {}, {}, {}\n",
        Color::Red, Color::Green, Color::Blue);
}
```

### 6.3 Formatter for `Vec3` with Configurable Output

This example demonstrates format specifiers that control output precision and format style:

```cpp
#include <cmath>
#include <format>
#include <iostream>
#include <string>
#include <string_view>

struct Vec3 {
    double x, y, z;
};

template<>
struct std::formatter<Vec3, char> {
    char presentation = 'n';   // 'n' = normal, 'c' = compact, 'p' = parenthesized
    int precision = -1;

    constexpr auto parse(format_parse_context& ctx) {
        auto it = ctx.begin();
        if (it != ctx.end()) {
            presentation = *it;
            ++it;
        }

        if (it != ctx.end() && *it == '.') {
            ++it;
            int prec = 0;
            while (it != ctx.end() && *it != '}') {
                prec = prec * 10 + (*it - '0');
                ++it;
            }
            precision = prec;
        }

        if (it != ctx.end() && *it != '}')
            throw std::format_error("invalid format specifier for Vec3");

        return it;
    }

    auto format(const Vec3& v, format_context& ctx) const {
        std::string spec;
        if (precision >= 0)
            spec = std::format(".{}f", precision);

        auto fmt_component = [&](double val) {
            if (precision >= 0)
                return std::format(std::locale::classic(), "{:" + spec + "}", val);
            return std::format("{}", val);
        };

        std::string sx = fmt_component(v.x);
        std::string sy = fmt_component(v.y);
        std::string sz = fmt_component(v.z);

        if (presentation == 'c') {
            return std::format_to(ctx.out(), "{},{},{}", sx, sy, sz);
        } else if (presentation == 'p') {
            return std::format_to(ctx.out(), "({},{},{})", sx, sy, sz);
        } else {
            return std::format_to(ctx.out(), "Vec3({}, {}, {})", sx, sy, sz);
        }
    }
};

int main() {
    Vec3 v{1.0 / 3.0, 2.0 / 3.0, std::sqrt(2.0)};

    std::cout << std::format("Default:    {}\n", v);
    std::cout << std::format("Compact:    {:c}\n", v);
    std::cout << std::format("Precision:  {:n.2}\n", v);
    std::cout << std::format("Paren:      {:p.4}\n", v);
}
```

Expected output:

```
Default:    Vec3(0.333333, 0.666667, 1.41421)
Compact:    0.333333,0.666667,1.41421
Precision:  Vec3(0.33, 0.67, 1.41)
Paren:      (0.3333, 0.6667, 1.4142)
```

### 6.4 Format Specifiers: Width, Fill, and Alignment

Standard format specifiers support width, fill character, and alignment. A custom formatter can forward these to the underlying `format_to` call:

```cpp
#include <format>
#include <iostream>
#include <string>

struct Boxed {
    std::string label;
    double value;
};

template<>
struct std::formatter<Boxed, char> {
    template<typename ParseCtx>
    constexpr auto parse(ParseCtx& ctx) {
        return ctx.begin();
    }

    template<typename FmtCtx>
    auto format(const Boxed& b, FmtCtx& ctx) const {
        return std::format_to(ctx.out(), "[{} = {}]", b.label, b.value);
    }
};

int main() {
    Boxed b{"pi", 3.14159};

    std::cout << std::format("{}\n", b);
    std::cout << std::format("{:>30}\n", b);
    std::cout << std::format("{:*<30}\n", b);
    std::cout << std::format("{:^30}\n", b);
}
```

:::info C++23 Extension
C++23 adds `std::formatter` specializations for `std::optional<T>`, `std::variant<Ts...>`, and other standard library types, reducing the need for custom specializations in many cases.
:::
