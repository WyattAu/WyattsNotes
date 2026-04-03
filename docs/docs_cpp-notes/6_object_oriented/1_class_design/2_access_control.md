---
title: Access Control and Friendship
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: access-control-friendship
---

# Access Control and Friendship

C++ provides fine-grained access control through `public`, `protected`, and `private` specifiers,
plus the `friend` mechanism for granting selective access to non-members. Access control is enforced
entirely at compile time with zero runtime cost.

## 2.1 Access Specifiers [N4950 §14.2]

A class member can be declared with one of three access specifiers:

| Specifier   | Class members | Derived class members | External code |
| ----------- | :-----------: | :-------------------: | :-----------: |
| `public`    |      Yes      |          Yes          |      Yes      |
| `protected` |      Yes      |          Yes          |      No       |
| `private`   |      Yes      |          No           |      No       |

Access control is enforced at compile time only; it has zero runtime cost. The access specifier
applies to all members declared after it until another access specifier is encountered.

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

## 2.2 Class vs Struct

In C++, `class` and `struct` are identical except for one default: in a `class`, members are
`private` by default; in a `struct`, members are `public` by default [N4950 §13.3].

```cpp
struct S { int x; };    // x is public
class  C { int x; };    // x is private

static_assert(sizeof(S) == sizeof(C));
```

:::tip Convention Use `struct` for passive data aggregates with no invariant enforcement. Use
`class` for types that maintain invariants and require encapsulation. :::

## 2.3 Friend Declarations [N4950 §14.3]

A `friend` declaration grants a function or another class access to `private` and `protected`
members of the class that grants friendship. Friendship is **not transitive**, **not inherited**,
and **not symmetric**: if class A declares B as a friend, B can access A's private members, but A
cannot access B's, and B's derived classes cannot access A's private members.

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

## 2.4 Friend Classes and Member Functions

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

## 2.5 When to Use Friendship

Friendship should be used sparingly. The two most common legitimate use cases are:

1. **Symmetric binary operators**: When the left operand does not belong to the class (e.g.,
   `ostream& operator<<(ostream&, const T&)` or `Vector operator*(const Matrix&, const Vector&)`).
2. **Factory patterns**: When a factory function needs access to a private constructor.
3. **Internal helpers**: When a utility function needs deep access but should not be a member.

## See Also

- [Object Layout, vptr, and the this Pointer](./1_object_layout_vptr.md)
- [Special Member Function Generation Rules](./3_special_member_functions.md)
