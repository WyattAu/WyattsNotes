---
title: Operator Overloading
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: operator-overloading
---

# Operator Overloading: Arithmetic, Subscript, and Function Call

C++ allows user-defined types to overload most operators, enabling natural syntax for custom types.
This section covers the rules for overloading, member vs non-member design, and patterns for common
operators including subscript, function call, and increment/decrement.

## 4.1 Rules for Operator Overloading [N4950 S14.5]

An overloaded operator is a function with a special name composed of the keyword `operator` followed
by the operator symbol. The following constraints apply [N4950 S14.5.1]:

- You cannot invent new operators (`operator**` is ill-formed).
- You cannot change the arity, precedence, or associativity of an operator.
- The operators `.`, `.*`, `::`, `?:`, and `sizeof` cannot be overloaded.
- At least one operand must be of class or enumeration type [N4950 S14.5.1].
- `operator()`, `operator[]`, `operator->`, and `operator->*` must be non-static member functions
  [N4950 S14.5.4].

### Complete List of Overloadable Operators

The following operators may be overloaded [N4950 S14.5]:

| Category            | Operators                                                                 |
| ------------------- | ------------------------------------------------------------------------- |
| Arithmetic          | `+` `-` `*` `/` `%`                                                       |
| Bitwise             | `^` `\&` `\|` `~` `\&lt;\&lt;` `\&gt;\&gt;`                               |
| Comparison          | `==` `!=` `\&lt;` `\&gt;` `\&lt;=` `\&gt;=` `\&lt;=\&gt;`                 |
| Logical             | `!` `\&\&` `\|\|` (but see pitfalls below)                                |
| Assignment          | `=` `+=` `-=` `*=` `/=` `%=` `^=` `\&=` `\|=` `\&lt;\&lt;=` `\&gt;\&gt;=` |
| Increment/Decrement | `++` `--` (prefix and postfix)                                            |
| Dereference         | `*` `->` `->*`                                                            |
| Subscript           | `[]`                                                                      |
| Function call       | `()`                                                                      |
| Memory              | `new` `delete` `new[]` `delete[]`                                         |
| Comma               | `,`                                                                       |

### Non-Overloadable Operators

The following operators cannot be overloaded under any circumstances [N4950 S14.5.1]:

- `.` (member access)
- `.*` (member pointer access) -- note: `operator->*` **is** overloadable
- `::` (scope resolution)
- `?:` (ternary conditional)
- `sizeof` / `sizeof...` (size of type/pack)
- `alignof` (alignment requirement)
- `typeid` (type identification)

## 4.2 Member vs Non-Member Overloads

For **binary operators**, the choice between member and non-member affects implicit conversions:

- **Member function**: The left operand must be of the class type (or a reference to it). Implicit
  conversions are only applied to the right operand.
- **Non-member function**: Both operands participate in implicit conversions.

### Proof: Why Symmetric Operators Should Be Non-Member

Consider a class `Int` with an `explicit` constructor and a member `operator+`:

$$\mathrm{For } \texttt{a + b} \mathrm{ where the left operand is not of class type:}$$

1. Name lookup finds the candidate functions: member `Int::operator+` and non-member `operator+`.
2. If only a member overload exists, the left operand must undergo implicit conversion to `Int`.
3. If the constructor is `explicit`, the implicit conversion is not permitted [N4950 S11.4.5.2].
4. Therefore, the expression `3 + Int(2)` would fail if only a member overload exists.
5. A non-member overload `operator+(int, const Int\&)` is found by ordinary name lookup. The right
   operand matches directly; the left operand requires no conversion for the `int` parameter.

This is why symmetric operators like `==`, `+`, `*` should typically be implemented as non-members
(often non-member friends), so that expressions like `2 + vec` work alongside `vec + 2`.

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

### Decision Table: Member vs Non-Member

| Operator                                    | Recommended Form  | Reason                                             |
| ------------------------------------------- | ----------------- | -------------------------------------------------- |
| Binary arithmetic (`+`, `-`, `*`, `/`)      | Non-member friend | Symmetric implicit conversions on both operands    |
| Compound assignment (`+=`, `-=`, etc.)      | Member            | Modifies `*this`; left operand must be the object  |
| Comparison (`==`, `!=`, `\&lt;`, etc.)      | Non-member friend | Symmetric; both operands may need conversion       |
| `operator\&lt;\&lt;` / `operator\&gt;\&gt;` | Non-member        | Left operand is `std::ostream`/`std::istream`      |
| `operator[]`                                | Member            | Must be non-static member [N4950 S14.5.4]          |
| `operator()`                                | Member            | Must be non-static member [N4950 S14.5.4]          |
| `operator->`                                | Member            | Must be non-static member [N4950 S14.5.4]          |
| Unary (`+`, `-`, `!`, `~`)                  | Member            | Operates on `*this`; no conversion symmetry needed |
| Prefix `++`/`--`                            | Member            | Modifies `*this`                                   |
| Postfix `++`/`--`                           | Member            | Modifies `*this` (returns copy)                    |

## 4.3 A `Vec3` Class with Full Operator Suite

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

## 4.4 Subscript Operator: Const and Non-Const Overloads

The subscript operator should be overloaded in two versions -- a `const` version returning by value
or const reference, and a non-const version returning a non-const reference -- so that the operator
works correctly on both const and non-const objects.

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

## 4.5 Function Call Operator: Functors

The function call operator `operator()` allows an object to be invoked like a function. Such objects
are called **function objects** or **functors**. Lambda closures are the most common example: the
compiler generates an unnamed class type with an `operator()` [N4950 S7.5.5].

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

## 4.6 Increment and Decrement: Prefix vs Postfix

The prefix increment/decrement (`++obj`, `--obj`) modifies the object and returns a reference to it.
The postfix increment/decrement (`obj++`, `obj--`) returns a copy of the original value before
modification [N4950 S14.5.5].

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

:::tip Prefer Prefix Prefix increment avoids creating a temporary copy. In performance-sensitive
code, prefer `++it` over `it++` for iterators and counters.
:::

## 4.7 Stream Insertion and Extraction Operators

The stream operators `operator&lt;&lt;` and `operator&gt;&gt;` must be implemented as **non-member
non-friend functions** (or non-member friends when accessing private state) because the left operand
is `std::ostream`/`std::istream`, which you cannot modify [N4950 S30.4.2]:

```cpp
#include <iostream>
#include <sstream>
#include <iomanip>

class Vec2 {
    double x_, y_;
public:
    Vec2(double x = 0, double y = 0) : x_(x), y_(y) {}
    double x() const { return x_; }
    double y() const { return y_; }
};

std::ostream& operator<<(std::ostream& os, const Vec2& v) {
    os << std::fixed << std::setprecision(2) << "(" << v.x() << ", " << v.y() << ")";
    return os;
}

std::istream& operator>>(std::istream& is, Vec2& v) {
    double x, y;
    char c1, c2, c3;
    if (is >> c1 >> x >> c2 >> y >> c3) {
        if (c1 == '(' && c2 == ',' && c3 == ')') {
            v = Vec2(x, y);
        } else {
            is.setstate(std::ios::failbit);
        }
    }
    return is;
}

int main() {
    Vec2 v(3.14, 2.71);
    std::cout << "v = " << v << "\n";

    std::istringstream iss("(1.5, 2.5)");
    Vec2 parsed;
    iss >> parsed;
    std::cout << "parsed = " << parsed << "\n";

    std::cout << "round-trip: " << (iss ? "OK" : "FAIL") << "\n";
}
```

Key conventions:

- Return `std::ostream&` / `std::istream&` by reference to enable chaining:
  `os &lt;&lt; a &lt;&lt; b`.
- On parse failure, set the stream's failbit via `is.setstate(std::ios::failbit)`. Do **not** throw
  from stream operators -- the stream error state mechanism handles this.
- Format consistently so that `operator&gt;&gt;` can round-trip the output of `operator&lt;&lt;`.

## 4.8 Conversion Operators and the `explicit` Specifier

A **conversion operator** defines an implicit conversion from the class type to another type [N4950
S14.5.3]. Like single-argument constructors, conversion operators can cause surprising implicit
conversions. The `explicit` keyword prevents this [N4950 S11.4.5.2]:

```cpp
#include <iostream>

class Fraction {
    int num_, den_;
public:
    Fraction(int n, int d) : num_(n), den_(d) {}

    // Implicit conversion to double -- potentially dangerous
    // operator double() const { return static_cast<double>(num_) / den_; }

    // Explicit conversion: requires static_cast<Fraction>(expr)
    explicit operator double() const { return static_cast<double>(num_) / den_; }

    int numerator() const { return num_; }
    int denominator() const { return den_; }
};

void process(double d) {
    std::cout << "process(" << d << ")\n";
}

int main() {
    Fraction f(3, 4);

    // process(f);            // error: explicit conversion operator
    process(static_cast<double>(f));  // OK: explicit cast

    // Contextual conversion to bool works even with explicit [N4950 S11.4.5.2]
    if (f) {
        std::cout << "f is truthy (non-zero)\n";
    }
}
```

The `explicit` specifier on a conversion operator prevents it from participating in implicit
conversions **except** in contextual boolean conversions (conditions in `if`, `while`, `for`, `!`,
`\&\&`, `\|\|`, and the ternary operator) [N4950 S11.4.5.2]. This is why `explicit operator bool()`
is the standard pattern for making objects conditionally testable without enabling surprising
implicit conversions to `int` or `double`.

### Conversion Operator Pitfalls

When both an implicit conversion operator and an implicit constructor exist, ambiguity can arise:

```cpp
#include <iostream>

class A {
public:
    A(int x) { std::cout << "A(int " << x << ")\n"; }
};

class B {
public:
    operator A() const { std::cout << "B::operator A()\n"; return A(42); }
};

void convert(A a) {
    (void)a;
}

int main() {
    B b;
    // convert(b);  // AMBIGUOUS: B -> A via operator, or int -> A via constructor?
    // The compiler sees: B -> A (operator A) OR B -> int (??) -> A (constructor)
    // Resolution: be explicit
    convert(static_cast<A>(b));  // OK: unambiguous
}
```

## 4.9 The Spaceship Operator (`operator<=>`) and Automatic Rewrites

C++20 introduced the three-way comparison operator `operator\&lt;=\&gt;` [N4950 S7.6.8]. When a
class defines `operator\&lt;=\&gt;` as defaulted, the compiler automatically generates `==`, `!=`,
`\&lt;`, `\&lt;=`, `\&gt;`, and `\&gt;=` by rewiring to the spaceship operator. The return type
determines the comparison category:

| Return type             | Category         | Meaning                            |
| ----------------------- | ---------------- | ---------------------------------- |
| `std::strong_ordering`  | Total ordering   | Distinct values always comparable  |
| `std::weak_ordering`    | Weak ordering    | Equivalent values may not be equal |
| `std::partial_ordering` | Partial ordering | Some pairs incomparable            |

```cpp
#include <compare>
#include <iostream>

struct Version {
    int major, minor, patch;

    auto operator<=>(const Version&) const = default;
};

int main() {
    Version v1{2, 1, 0};
    Version v2{2, 0, 5};

    std::cout << "v1 == v2: " << (v1 == v2) << "\n";
    std::cout << "v1 > v2:  " << (v1 > v2) << "\n";
    std::cout << "v1 <= v2: " << (v1 <= v2) << "\n";
}
```

The default `operator\&lt;=\&gt;` performs lexicographic comparison of base classes and then
non-static data members in declaration order [N4950 S7.6.8]. Combined with `operator==` being
defaulted independently, this provides a complete comparison suite with zero boilerplate.

### Custom Spaceship Implementation

When the default lexicographic comparison is not appropriate, you can define a custom spaceship
operator:

```cpp
#include <compare>
#include <iostream>
#include <cmath>

struct FuzzyDouble {
    double value;
    double epsilon;

    explicit FuzzyDouble(double v, double eps = 1e-9) : value(v), epsilon(eps) {}

    std::partial_ordering operator<=>(const FuzzyDouble& rhs) const {
        if (std::abs(value - rhs.value) <= epsilon) {
            return std::partial_ordering::equivalent;
        }
        return value <=> rhs.value;
    }

    bool operator==(const FuzzyDouble& rhs) const {
        return (*this <=> rhs) == std::partial_ordering::equivalent;
    }
};

int main() {
    FuzzyDouble a(1.0, 0.01);
    FuzzyDouble b(1.005, 0.01);

    std::cout << "a == b: " << (a == b) << "\n";     // true (within epsilon)
    std::cout << "a < b:  " << (a < b) << "\n";      // false
    std::cout << "a <=> b: "
              << ((a <=> b) == std::partial_ordering::equivalent ? "equiv" : "diff") << "\n";
}
```

## 4.10 Rule of Three/Five/Zero and Operator Overloading

When a class manages resources (raw pointers, file handles, sockets), the special member functions
are deeply intertwined with operator overloading [N4950 S11.4.7]:

### Rule of Five

If you define **any** of the following, you should define **all five**:

1. Destructor
2. Copy constructor
3. Copy assignment operator
4. Move constructor
5. Move assignment operator

```cpp
#include <algorithm>
#include <cstddef>
#include <iostream>

class Buffer {
    double* data_;
    std::size_t size_;

public:
    explicit Buffer(std::size_t n) : data_(new double[n]()), size_(n) {}

    ~Buffer() { delete[] data_; }

    Buffer(const Buffer& other)
        : data_(new double[other.size_]), size_(other.size_) {
        std::copy_n(other.data_, size_, data_);
    }

    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            delete[] data_;
            data_ = new double[other.size_];
            size_ = other.size_;
            std::copy_n(other.data_, size_, data_);
        }
        return *this;
    }

    Buffer(Buffer&& other) noexcept : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            other.data_ = nullptr;
            other.size_ = 0;
        }
        return *this;
    }

    double& operator[](std::size_t i) { return data_[i]; }
    const double& operator[](std::size_t i) const { return data_[i]; }
    std::size_t size() const { return size_; }
};
```

### Rule of Zero

If the class holds only RAII members (`std::vector`, `std::string`, `std::unique_ptr`,
`std::shared_ptr`), do **not** declare any special member functions. The compiler-generated defaults
are correct:

```cpp
#include <string>
#include <vector>

class Person {
    std::string name_;
    std::vector<std::string> emails_;
public:
    Person(std::string name) : name_(std::move(name)) {}

    // No destructor, no copy/move -- all correct by default
};
```

## 4.11 Smart Pointer Operator Overloading

Smart pointers overload several operators to mimic raw pointer behavior:

- `operator*`: dereferences to the managed object.
- `operator->`: member access through the managed object.
- `operator bool` (explicit): contextual conversion to check for null.
- `operator==`, `operator!=` (C++20): comparison with `nullptr`.

```cpp
#include <iostream>
#include <memory>

struct Widget {
    int value;
    explicit Widget(int v) : value(v) {}
    void show() const { std::cout << "Widget(" << value << ")\n"; }
};

int main() {
    auto ptr = std::make_unique<Widget>(42);

    ptr->show();           // operator->
    (*ptr).show();         // operator*

    if (ptr) {             // explicit operator bool
        std::cout << "not null\n";
    }

    if (ptr != nullptr) {  // operator!= with nullptr (C++20)
        std::cout << "still not null\n";
    }
}
```

:::warning Do not overload `operator*`, `operator->`, or `operator bool` on custom types unless you
are implementing a smart pointer or proxy object. Overloading these operators on regular types
creates confusing semantics that mislead readers into expecting pointer-like behavior.
:::

## Common Pitfalls

**1. Overloading `operator&&` and `operator||`:** These operators lose short-circuit evaluation when
overloaded. The Standard evaluates both operands before calling the overloaded operator [N4950
S7.6.4]. For custom boolean logic, provide named methods (e.g., `logical_and()`) instead of
overloading these operators.

**2. Returning by value from `operator+`:** Binary arithmetic operators should return a new object
by value (not by reference). Returning a reference to a temporary is undefined behavior. The
compound assignment operators (`+=`, `-=`) should return `*this` by reference.

**3. `operator[]` bounds checking:** The Standard `operator[]` for `std::vector` and `std::map` does
**not** perform bounds checking -- undefined behavior on out-of-range access. Use `at()` for checked
access, or implement bounds checking in your own `operator[]`.

**4. Implicit conversion ambiguity:** When a class has both an implicit single-argument constructor
and an implicit conversion operator, overload resolution can become ambiguous. Mark one or both as
`explicit` to resolve the ambiguity.

**5. Forgetting to return `*this` from compound assignment:** `operator+=`, `operator-=`, etc. must
return `*this` by reference. Forgetting the return statement causes the operators to return `void`,
breaking chaining (`a += b += c` fails).

**6. Overloading comma operator:** While technically possible, overloading `operator,` changes the
evaluation order and sequence point semantics. The Standard guarantees left-to-right evaluation for
the built-in comma operator but not for the overloaded version. This is almost always a mistake.

## See Also

- [Special Member Function Generation Rules](./3_special_member_functions.md)
- [The Spaceship Operator](./5_spaceship_operator.md)
- [Object Layout and the vptr](./1_object_layout_vptr.md)
