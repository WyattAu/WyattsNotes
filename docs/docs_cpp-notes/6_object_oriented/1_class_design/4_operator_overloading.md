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

## 4.1 Rules for Operator Overloading [N4950 §11.4.5]

An overloaded operator is a function with a special name composed of the keyword `operator` followed
by the operator symbol. The following constraints apply:

- You cannot invent new operators (`operator**` is ill-formed).
- You cannot change the arity, precedence, or associativity of an operator.
- The operators `.`, `.*`, `::`, `?:`, and `sizeof` cannot be overloaded.
- At least one operand must be of class or enumeration type.
- `operator()`, `operator[]`, `operator->`, and `operator->*` must be non-static member functions.

## 4.2 Member vs Non-Member Overloads

For **binary operators**, the choice between member and non-member affects implicit conversions:

- **Member function**: The left operand must be of the class type (or a reference to it). Implicit
  conversions are only applied to the right operand.
- **Non-member function**: Both operands participate in implicit conversions.

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

The subscript operator should be overloaded in two versions — a `const` version returning by value
or const reference, and a non-const version returning a non-const reference — so that the operator
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
compiler generates an unnamed class type with an `operator()` [N4950 §7.5.5].

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
modification [N4950 §11.4.5].

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
code, prefer `++it` over `it++` for iterators and counters. :::

## See Also

- [Special Member Function Generation Rules](./3_special_member_functions.md)
- [The Spaceship Operator](./5_spaceship_operator.md)
