---
title: Access Control and Friendship
description:
description: >-
  C++: Access Control and Friendship — 2.1 Access Specifiers [N4950 S14.2]; Proof: Access Control is Compile-Time Only; 2.2 Class vs Struct.
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

## 2.1 Access Specifiers [N4950 S14.2]

A class member can be declared with one of three access specifiers [N4950 S14.3.1]:

| Specifier   | Class members | Derived class members | External code |
| ----------- | :-----------: | :-------------------: | :-----------: |
| `public`    |      Yes      |          Yes          |      Yes      |
| `protected` |      Yes      |          Yes          |      No       |
| `private`   |      Yes      |          No           |      No       |

Access control is enforced at compile time only; it has zero runtime cost. The access specifier
applies to all members declared after it until another access specifier is encountered.

**Formal definition.** A _member_ of a class is accessible from a particular point in the program if
and only if the access rules in [N4950 S14.3] permit it. The three access specifiers define the
following accessibility sets:

- `public`: the member is a member of the _access interface_ of the class and is accessible from
  anywhere the class itself is accessible [N4950 S14.3.1.1].
- `protected`: the member is accessible from member functions and friends of the class, and from
  member functions and friends of derived classes [N4950 S14.3.1.2].
- `private`: the member is accessible only from member functions and friends of the class that
  declares it [N4950 S14.3.1.3].

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

### Proof: Access Control is Compile-Time Only

The access rules in [N4950 S14.3] apply during _name lookup_ and _access checking_, which are phases
of translation (compilation). The generated object code contains no guards, checks, or indirections
related to access control. Therefore, the cost is provably zero at runtime: the access specifier
does not affect the object layout, function calling convention, or any aspect of the execution
model.

## 2.2 Class vs Struct

In C++, `class` and `struct` are identical except for one default: in a `class`, members are
`private` by default; in a `struct`, members are `public` by default [N4950 S13.3].

```cpp
struct S { int x; };    // x is public
class  C { int x; };    // x is private

static_assert(sizeof(S) == sizeof(C));
```

:::tip Convention Use `struct` for passive data aggregates with no invariant enforcement. Use
`class` for types that maintain invariants and require encapsulation.
:::

## 2.3 Friend Declarations [N4950 S14.3]

A `friend` declaration grants a function or another class access to `private` and `protected`
members of the class that grants friendship. Friendship is **not transitive**, **not inherited**,
and **not symmetric**: if class A declares B as a friend, B can access A's private members, but A
cannot access B's, and B's derived classes cannot access A's private members.

### Formal Semantics of Friendship [N4950 S14.3.2]

A friend declaration is a declaration that nominates a function or class to be granted access to
non-public members. The key properties are:

1. **Granting is unilateral.** The class that contains the `friend` declaration is the _granting_
   class. The nominated entity receives access; no reciprocal access is implied.
2. **Not transitive.** If `A` declares `B` as a friend, and `B` declares `C` as a friend, `C` does
   **not** have access to `A`'s private members.
3. **Not inherited.** If `A` declares `B` as a friend, and `C` inherits from `B`, `C` does **not**
   have access to `A`'s private members.
4. **Friendship is not a membership declaration.** A friend function is not a member of the class.
   It does not have a `this` pointer and is not found by name lookup within the class scope (unless
   it is also declared as a member).

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

### Proof: Friend Access Rules

By [N4950 S14.3.2], a friend of a class `C` is a function or class that is granted access to the
non-public members of `C`. The proof that friendship is not transitive follows from the definition:
the access check in [N4950 S14.3] examines whether the entity attempting access is a friend of the
class being accessed. If `A` grants friendship to `B`, and `B` grants friendship to `C`, the access
check for `C` accessing `A`'s private members examines whether `C` is a friend of `A`. Since `C` is
not declared as a friend of `A`, access is denied.

Similarly, inheritance is irrelevant to friendship: [N4950 S14.3] specifies that "a member of a
derived class... has no special access to members of a base class" except through the normal access
specifiers. Since `C` inherits from `B`, and `B` is a friend of `A`, `C` is not a friend of `A` by
the same argument.

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

When granting friendship to a specific member function, the function must have been declared (but
not necessarily defined) before the `friend` declaration. This is why `DiagnosticTool::inspect` is
forward-declared in the example above.

## 2.5 Hidden Friends (ADL Friends) [N4950 S14.3.3]

A _hidden friend_ is a friend function defined inside a class body. Unlike a free friend declared
outside, a hidden friend is found by **argument-dependent lookup (ADL)** only -- it is not found by
ordinary unqualified name lookup [N4950 S9.4.1].

```cpp
#include <cstdio>

class Metric {
    double value_;
    friend Metric operator+(Metric a, Metric b) {
        return Metric{a.value_ + b.value_};
    }
    friend Metric operator*(Metric m, double scale) {
        return Metric{m.value_ * scale};
    }
    friend double get_value(const Metric& m) {
        return m.value_;
    }
public:
    explicit Metric(double v) : value_(v) {}
};

int main() {
    Metric a{3.0}, b{4.0};
    auto c = a + b;           // OK: found by ADL on Metric
    auto d = a * 2.0;         // OK: found by ADL on Metric
    std::printf("%.1f %.1f\n", get_value(c), get_value(d));

    // operator+(a, b);       // ERROR: not found by unqualified lookup
}
```

Hidden friends are the preferred idiom for defining operators in modern C++ because:

1. They do not pollute the enclosing namespace.
2. They are only found when the associated class is in scope, preventing unintended overload
   resolution.
3. They have access to private members without needing a separate friend declaration outside the
   class.

## 2.6 When to Use Friendship

Friendship should be used sparingly. The two most common legitimate use cases are:

1. **Symmetric binary operators**: When the left operand does not belong to the class (e.g.,
   `ostream& operator&lt;&lt;(ostream&, const T&)` or
   `Vector operator*(const Matrix&, const Vector&)`).
2. **Factory patterns**: When a factory function needs access to a private constructor.
3. **Internal helpers**: When a utility function needs deep access but should not be a member.

## 2.7 Access Control and Inheritance

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

**Private inheritance** is not an "is-a" relationship -- it is an "implemented-in-terms-of"
relationship. It is used when you want to reuse a base class's implementation without exposing the
base interface to users.

### The `using` Declaration in Derived Classes

You can restore the access level of inherited members with a `using` declaration [N4950 S11.4.6]:

```cpp
class PrivateBase {
public:
    void public_func() {}
protected:
    void protected_func() {}
};

class Adapter : private PrivateBase {
public:
    using PrivateBase::public_func;     // Restore public access
    using PrivateBase::protected_func;  // Also restore protected to public
};

int main() {
    Adapter a;
    a.public_func();      // OK: access was restored by using-declaration
    a.protected_func();   // OK: access was restored
}
```

The `using` declaration makes the named member accessible with the access level of the `using`
declaration itself (in this case, `public`). This is the standard mechanism for selectively exposing
members when using private inheritance.

## 2.8 Access Control and Templates

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

## 2.9 `final` Specifier [N4950 S11.7.4]

The `final` specifier prevents further derivation or overriding. It is enforced at compile time with
zero runtime cost. `final` can appear in two contexts:

1. **Class `final`:** A class marked `final` shall not be used as a base class.
2. **Member function `final`:** A virtual function marked `final` shall not be overridden in any
   derived class.

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

### `final` Enables Devirtualization

`final` enables **devirtualization**: if the compiler can prove that a virtual call targets a
`final` class or method, it can replace the indirect call with a direct call or even inline the
function. This is because `final` provides a static guarantee that no further override exists,
eliminating the need for runtime dispatch.

Proof sketch: By [N4950 S11.7.4], a class marked `final` "shall not appear as a base class." If the
compiler sees a call `obj.f()` where `obj` has static type `FinalClass` and `FinalClass` is marked
`final`, then the dynamic type of `obj` is necessarily `FinalClass` (no derived class can exist).
Therefore, the virtual dispatch resolves statically to `FinalClass::f`, and the compiler can emit a
direct call.

## 2.10 Nested Access and Friends of Nested Classes [N4950 S14.3]

A nested class is a member of its enclosing class [N4950 S13.4.2]. The access rules for nested
classes follow from this membership relationship:

- A nested class **has access to all members** of its enclosing class (including `private` and
  `protected` members). This follows from [N4950 S14.3]: a member function of the nested class is
  considered a member of the enclosing class for access checking purposes.
- The enclosing class does **not** have special access to the nested class's private members. The
  nested class's private members are accessible only to the nested class's own members and friends.

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
    friend class Inner;  // Implicit -- nested classes are implicitly friends of enclosing
public:
    void test() {
        Inner i;
        // i.inner_secret_;  // ERROR: enclosing class cannot access nested's private
        i.access_outer(*this);  // OK
    }
};
```

### Friend Declarations in Nested Classes

A nested class may declare friends just like any other class. These friends have access only to the
nested class's members, not to the enclosing class's members:

```cpp
#include <iostream>

class Outer {
    int outer_priv = 1;
    class Inner {
        int inner_priv = 2;
        friend void inner_friend(Inner& i);
    public:
        void show(Outer& o) {
            std::cout << o.outer_priv << "\n";  // OK: nested accesses enclosing
        }
    };
};

void inner_friend(Outer::Inner& i) {
    std::cout << i.inner_priv << "\n";  // OK: friend of Inner
    // i.outer_priv;  // ERROR: not a friend of Outer
}
```

## 2.11 Access Control and `constexpr`/`consteval` Functions

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

## 2.12 Access Control and `using` Directives vs `using` Declarations

A `using` **declaration** (inside a class) affects access, but a `using` **directive** (at namespace
scope) does not bypass class access control:

```cpp
#include <iostream>

namespace lib {
    class Secret {
        int data_ = 42;
        friend void reveal(const Secret&);
    public:
        void public_method() const { std::cout << "public\n"; }
    };

    void reveal(const Secret& s) {
        std::cout << s.data_ << "\n";
    }
}

int main() {
    using namespace lib;

    Secret s;
    s.public_method();   // OK
    // reveal(s);         // OK: reveal is found by ordinary lookup after using-directive
}
```

## 2.13 Access Specifiers and `inline` Functions

An `inline` friend function defined inside a class body is subject to the same access rules as any
other friend: it can access all members of the granting class. The `inline` specifier affects
linkage (multiple definitions are allowed across translation units) but has no effect on access.

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
- **Friend function name hiding.** A friend function defined inside a class body (hidden friend) is
  not found by unqualified lookup outside of ADL. If you need the function to be callable without
  ADL, declare it outside the class.
- **Using-declarations and overloads.** A `using` declaration in a derived class makes accessible
  _all_ overloads of the named member from the base class. If only one overload needs to be exposed,
  you must use a forwarding function instead, since a `using` declaration cannot target a single
  overload.

## 2.14 Access Control and In-Class Member Functions

Access control applies uniformly to all member functions, including those defined inside the class
body. A member function defined inside the class body is implicitly `inline`, but this does not
affect its access to private members of the same class:

```cpp
#include <iostream>

class SecretHolder {
    int secret_ = 42;

    void helper() { std::cout << "helper: " << secret_ << "\n"; }

public:
    void reveal() {
        helper();  // OK: member function accesses private member function
        std::cout << "secret: " << secret_ << "\n";
    }
};

int main() {
    SecretHolder sh;
    sh.reveal();
    // sh.helper();  // ERROR: helper is private
    // sh.secret_;   // ERROR: secret_ is private
}
```

## 2.15 Access Control and Friends of Friends

A friend of a class has the same access as a member function. This means a friend function can
access all private and protected members. However, the friend cannot grant its access to third
parties:

```cpp
#include <iostream>

class A {
    int data_ = 10;
    friend void inspect(A& a);
};

void inspect(A& a) {
    std::cout << a.data_ << "\n";  // OK: friend of A
}

// A separate function that is NOT a friend of A
void external(A& a, void (*inspector)(A&)) {
    inspector(a);  // OK: calls the friend function
    // a.data_;     // ERROR: external is not a friend of A
}

int main() {
    A a;
    inspect(a);
    external(a, inspect);
}
```

## 2.16 Access Control and Lambda Captures

A lambda defined inside a member function can capture `this` (or `*this`) and access private members
through the captured pointer. This is because the lambda's call operator is conceptually a member of
the enclosing scope, and access checking uses the enclosing context:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>

class DataStore {
    std::vector<int> data_;

public:
    void add(int val) { data_.push_back(val); }

    void process() const {
        // Lambda captures 'this' (const, since process() is const)
        // Can access private data_ through the captured this pointer
        auto it = std::find_if(data_.begin(), data_.end(),
            [this](int val) { return val > threshold(); });
        if (it != data_.end()) {
            std::cout << "Found: " << *it << " (threshold=" << threshold() << ")\n";
        }
    }

private:
    int threshold() const { return 5; }
};

int main() {
    DataStore ds;
    ds.add(3);
    ds.add(8);
    ds.add(1);
    ds.process();
}
```

## 2.17 Protected Access Through Pointers and References [N4950 S14.3.1.2]

Protected access has a subtle restriction: a member function of a derived class can access
`protected` members of the base class only through a pointer or reference to the derived class (or a
class derived from it), not through a pointer or reference to the base class directly:

```cpp
#include <iostream>

class Base {
protected:
    int value_ = 42;
};

class Derived : Base {
public:
    void access_own() {
        std::cout << value_ << "\n";           // OK: implicit this is Derived*
    }

    void access_through_derived(Derived& d) {
        std::cout << d.value_ << "\n";         // OK: through Derived&
    }

    void access_through_base(Base& b) {
        // std::cout << b.value_ << "\n";      // ERROR: protected access through Base&
        // This is because b could refer to any Base subobject, and the protected
        // member might belong to a different Derived object.
        // The access rule prevents accessing protected members of sibling objects.
    }
};
```

This rule, specified in [N4950 S14.3.1.2], exists to prevent a derived class from accessing
protected members of sibling instances. If `Base& b` happened to refer to a `Derived2` object that
also inherits from `Base`, allowing access to `b.value_` would violate encapsulation.

## See Also

- [Object Layout and the vptr](./1_object_layout_vptr.md)
- [Operator Overloading](./4_operator_overloading.md)
- [Deducing This and CRTP](../2_runtime_polymorphism/5_deducing_this_crtp.md)
