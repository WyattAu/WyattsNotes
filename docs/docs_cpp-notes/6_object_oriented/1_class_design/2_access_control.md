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

## 2.6 Access Control and Inheritance

Access specifiers on base classes control how inherited members are accessible in the derived class.
This is distinct from the access specifiers on individual members within a class.

### Public, Protected, and Private Inheritance

```cpp
#include <iostream>

class Base {
public:
    int pub = 1;
protected:
    int prot = 2;
private:
    int priv = 3;
};

class PubDerived : public Base {
public:
    void test() {
        std::cout << pub << "\n";   // OK: public, accessible
        std::cout << prot << "\n";  // OK: protected, accessible in derived
        // std::cout << priv << "\n"; // ERROR: private, not accessible
    }
};

class PrivDerived : private Base {
public:
    void test() {
        std::cout << pub << "\n";   // OK: still accessible within PrivDerived
        std::cout << prot << "\n";  // OK: still accessible within PrivDerived
    }
};

int main() {
    PubDerived pd;
    std::cout << pd.pub << "\n";   // OK: public inheritance preserves public access
    // std::cout << pd.prot << "\n"; // ERROR: protected, not accessible outside

    PrivDerived prd;
    // std::cout << prd.pub << "\n";  // ERROR: private inheritance makes everything private
}
```

### Inheritance Access Summary

| Base Member Access | Public Inheritance | Protected Inheritance | Private Inheritance |
| :----------------- | :----------------: | :-------------------: | :-----------------: |
| `public`           |      `public`      |      `protected`      |      `private`      |
| `protected`        |    `protected`     |      `protected`      |      `private`      |
| `private`          |    inaccessible    |     inaccessible      |    inaccessible     |

**Private inheritance** is not an "is-a" relationship — it is an "implemented-in-terms-of"
relationship. It is used when you want to reuse a base class's implementation without exposing the
base interface to users.

### The `using` Declaration in Derived Classes

You can restore the access level of inherited members with a `using` declaration:

```cpp
class PrivateBase {
public:
    void public_func() {}
};

class Adapter : private PrivateBase {
public:
    using PrivateBase::public_func;  // Restore public access for this member
};

int main() {
    Adapter a;
    a.public_func();  // OK: access was restored by using-declaration
}
```

---

## 2.7 Access Control and Templates

Template instantiation interacts with access control in specific ways. Access control is checked at
the point of instantiation, not at the point of definition. This means a friend of a class can
access private members during template instantiation.

```cpp
#include <iostream>

class Secret {
    int value_ = 42;
    template<typename T> friend void inspect(T&);
};

template<typename T>
void inspect(T& obj) {
    // Access to value_ is checked when T = Secret
    // At that point, inspect is a friend of Secret
    // This is valid even though value_ is private
    std::cout << "inspecting\n";
}

int main() {
    Secret s;
    inspect(s);
}
```

### CRTP and Private Members

The Curiously Recurring Template Pattern (CRTP) commonly requires the derived class to access
private members of the base:

```cpp
#include <iostream>

template<typename Derived>
class Counter {
    int count_ = 0;
protected:
    void increment() { ++count_; }
    int count() const { return count_; }
};

class Widget : private Counter<Widget> {
    friend class Counter<Widget>;
public:
    void click() { increment(); }
    int clicks() const { return count(); }
};

int main() {
    Widget w;
    w.click();
    w.click();
    std::cout << "Clicks: " << w.clicks() << "\n";  // Output: 2
}
```

---

## 2.8 `final` Specifier

The `final` specifier prevents further derivation or overriding. It is enforced at compile time with
zero runtime cost.

```cpp
#include <iostream>

class Base {
public:
    virtual void process() { std::cout << "Base::process\n"; }
    virtual ~Base() = default;
};

class Final : public Base {
public:
    void process() final { std::cout << "Final::process\n"; }
};

// class Derived : public Final {};  // ERROR: cannot derive from 'final' class
```

The `final` specifier on a virtual function prevents further overriding in derived classes:

```cpp
class Mid : public Base {
public:
    void process() override final { std::cout << "Mid::process\n"; }
};

// class Leaf : public Mid {
//     void process() override {}  // ERROR: process is final
// };
```

`final` enables **devirtualization**: if the compiler can prove that a virtual call targets a
`final` class or method, it can replace the indirect call with a direct call or even inline the
function.

---

## 2.9 Nested Access and Friends of Nested Classes

A nested class has access to all members of its enclosing class (both private and protected), but
the enclosing class does not have special access to the nested class's private members.

```cpp
#include <iostream>

class Outer {
    int secret_ = 99;
    class Inner {
        int inner_secret_ = 42;
    public:
        void access_outer(Outer& o) {
            std::cout << o.secret_ << "\n";  // OK: nested class accesses enclosing private
        }
    };
    friend class Inner;  // Implicit — nested classes are implicitly friends of enclosing
public:
    void test() {
        Inner i;
        // i.inner_secret_;  // ERROR: enclosing class cannot access nested's private
        i.access_outer(*this);  // OK
    }
};
```

---

## 2.10 Access Control and `constexpr`/`consteval` Functions

Access control is fully enforced in `constexpr` and `consteval` contexts. A `constexpr` function
cannot access private members of an unrelated class, even at compile time.

```cpp
class Vault {
    int code_ = 1337;
    friend int break_in(const Vault&);
};

consteval int break_in(const Vault& v) {
    return v.code_;  // OK: friend access, evaluated at compile time
}

int main() {
    constexpr int result = break_in(Vault{});
    static_assert(result == 1337);
}
```

---

## Common Pitfalls

- **Assuming friendship is transitive or inherited.** If `A` declares `B` as a friend, and `C`
  inherits from `B`, `C` does **not** have access to `A`'s private members. Each class controls its
  own friendship independently.
- **Using `protected` data members.** While syntactically legal, `protected` data members break
  encapsulation because any derived class can modify them directly without the base class's
  knowledge. Prefer `protected` member functions (getters/setters) or `private` data with
  `protected` accessors.
- **Forgetting that `class` defaults to `private` and `struct` defaults to `public`.** A `struct`
  with no access specifier has public members by default, which can accidentally expose
  implementation details. Always be explicit about access specifiers.
- **Overusing friendship.** Every `friend` declaration creates a tight coupling between two classes.
  Prefer public interfaces, member functions, or the hidden friend idiom for operators. Reserve
  friendship for cases where no alternative exists (symmetric operators, factories).
- **Private inheritance confusion.** Private inheritance is not a substitute for composition. It
  inherits the base class's layout (vtable, sizeof), which increases coupling. Use composition
  (member variable) unless you specifically need `protected` member access or virtual function
  overriding.

:::
