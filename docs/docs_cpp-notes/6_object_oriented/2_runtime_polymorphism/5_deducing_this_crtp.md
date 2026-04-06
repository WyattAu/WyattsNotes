---
title: Deducing This and CRTP
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: deducing-this-crtp
---

# Explicit Object Parameters (Deducing This) and CRTP Replacement

C++23 introduces **explicit object parameters** (deducing this), which eliminates the need for the
Curiously Recurring Template Pattern (CRTP) in most cases. This section covers the CRTP pattern, the
new `this` parameter syntax, value category preservation, and practical patterns for fluent APIs and
mixin classes.

## 5.1 The CRTP Pattern

The **Curiously Recurring Template Pattern (CRTP)** is a compile-time technique where a derived
class passes itself as a template parameter to its base class. It enables static polymorphism — the
base class can call methods on the derived class without virtual dispatch.

```cpp
#include <iostream>
#include <sstream>

template <typename Derived>
struct Serializable {
    std::string serialize() const {
        std::ostringstream oss;
        oss << static_cast<const Derived&>(*this).to_string();
        return oss.str();
    }

    void print_serialized() const {
        std::cout << serialize() << "\n";
    }
};

struct Point : Serializable<Point> {
    double x;
    double y;

    Point(double x, double y) : x(x), y(y) {}

    std::string to_string() const {
        return "Point(" + std::to_string(x) + ", " + std::to_string(y) + ")";
    }
};

struct Circle : Serializable<Circle> {
    double cx;
    double cy;
    double radius;

    Circle(double cx, double cy, double r) : cx(cx), cy(cy), radius(r) {}

    std::string to_string() const {
        return "Circle(" + std::to_string(cx) + ", " + std::to_string(cy)
             + ", r=" + std::to_string(radius) + ")";
    }
};

int main() {
    Point p{1.0, 2.0};
    Circle c{3.0, 4.0, 5.0};

    p.print_serialized();
    c.print_serialized();
}
```

Limitations of CRTP:

- Verbose boilerplate: every derived class must repeat the base class template parameter.
- The `static_cast<const Derived&>(*this)` pattern is unintuitive and error-prone.
- Does not work with type erasure or heterogeneous containers (all types must be known at compile
  time).
- Cannot be used when the derived type is not known at the point of base class definition.

## 5.2 C++23 Deducing This

C++23 introduces **explicit object parameters** (also called "deducing this") [N4950 §11.4.8.3]. A
member function can declare its object parameter explicitly using the `this` keyword in the
parameter list:

```cpp
#include <iostream>
#include <sstream>
#include <string>

struct Printable {
    template <typename Self>
    void print(this const Self& self) {
        std::cout << self.to_string() << "\n";
    }
};

struct Point : Printable {
    double x;
    double y;

    Point(double x, double y) : x(x), y(y) {}

    std::string to_string() const {
        return "Point(" + std::to_string(x) + ", " + std::to_string(y) + ")";
    }
};

struct Circle : Printable {
    double cx;
    double cy;
    double radius;

    Circle(double cx, double cy, double r) : cx(cx), cy(cy), radius(r) {}

    std::string to_string() const {
        return "Circle(" + std::to_string(cx) + ", " + std::to_string(cy)
             + ", r=" + std::to_string(radius) + ")";
    }
};

int main() {
    Point p{1.0, 2.0};
    Circle c{3.0, 4.0, 5.0};

    p.print();
    c.print();
}
```

How it works:

- The syntax `this const Self& self` declares an **explicit object parameter**. The compiler deduces
  `Self` from the type of the object on which the member function is called.
- When `p.print()` is called, `Self` is deduced as `Point`, so `self` is `const Point&`.
- When `c.print()` is called, `Self` is deduced as `Circle`, so `self` is `const Circle&`.
- The base class can call `self.to_string()` directly — no `static_cast` needed.

## 5.3 CRTP vs Deducing This: Comparison

| Aspect                     | CRTP                                              | Deducing This (C++23)                          |
| -------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| **Syntax**                 | `class Derived : Base<Derived>`                   | `void f(this const auto& self)`                |
| **Type access**            | `static_cast<const Derived&>(*this)`              | Direct: `self` is already the derived type     |
| **Boilerplate**            | High: each derived class repeats the template arg | Low: derived classes just inherit              |
| **Compile-time poly**      | Yes                                               | Yes                                            |
| **Requires template base** | Yes                                               | No                                             |
| **Value category**         | Can only bind to lvalues (const&)                 | Can preserve value category (`auto&&`, `auto`) |
| **Standard**               | C++98                                             | C++23                                          |

## 5.4 Value Category Preservation

A key advantage of deducing this over CRTP is the ability to preserve the value category of the
object:

```cpp
#include <utility>
#include <iostream>

struct Counter {
    int count = 0;

    template <typename Self>
    auto&& increment(this Self&& self) {
        ++self.count;
        return std::forward<Self>(self);
    }
};

int main() {
    Counter c1;
    Counter c2;

    c1.increment().increment().increment();
    std::cout << "c1.count = " << c1.count << "\n";

    std::move(c2).increment();
    std::cout << "c2.count = " << c2.count << "\n";
}
```

The `Self&&` parameter deduces to:

- `Counter&` when called on an lvalue (preserving the lvalue reference).
- `Counter&&` when called on an rvalue (preserving the rvalue reference, enabling move semantics).

This is impossible with CRTP, which can only bind to `const Derived&` or `Derived&` — it cannot
distinguish between lvalue and rvalue receivers.

## 5.5 Deducing This for a Fluent API Builder

Deducing this enables fluent builder patterns where the return type adapts to the most-derived
class:

```cpp
#include <iostream>
#include <string>

struct BuilderBase {
    template <typename Self>
    Self& set_name(this Self& self, std::string name) {
        self.name_ = std::move(name);
        return self;
    }

protected:
    std::string name_;
};

struct HttpConfig : BuilderBase {
    template <typename Self>
    Self& set_port(this Self& self, int port) {
        self.port_ = port;
        return self;
    }

    template <typename Self>
    Self& set_timeout(this Self& self, int timeout_ms) {
        self.timeout_ms_ = timeout_ms;
        return self;
    }

    void display() const {
        std::cout << "Server: " << name_ << ":" << port_
                  << " (timeout: " << timeout_ms_ << "ms)\n";
    }

private:
    int port_ = 80;
    int timeout_ms_ = 30000;
};

struct GrpcConfig : BuilderBase {
    template <typename Self>
    Self& set_max_retries(this Self& self, int retries) {
        self.max_retries_ = retries;
        return self;
    }

    void display() const {
        std::cout << "Service: " << name_
                  << " (max retries: " << max_retries_ << ")\n";
    }

private:
    int max_retries_ = 3;
};

int main() {
    HttpConfig http;
    http.set_name("api.example.com")
        .set_port(443)
        .set_timeout(5000)
        .display();

    GrpcConfig grpc;
    grpc.set_name("order-service")
        .set_max_retries(5)
        .display();
}
```

Without deducing this, each builder method in a base class would return `BuilderBase&`, breaking the
chain when the derived class adds its own methods. CRTP solves this but with significant
boilerplate. Deducing this solves it with minimal syntax.

## 5.6 Deducing This for Mixin Classes

Deducing this makes mixin classes straightforward — a mixin can provide methods that return the
correct derived type without requiring CRTP:

```cpp
#include <iostream>
#include <string>
#include <sstream>

struct JsonMixin {
    template <typename Self>
    std::string to_json(this const Self& self) {
        std::ostringstream oss;
        oss << "{";
        bool first = true;
        self.visit_fields([&](const char* name, auto value) {
            if (!first) oss << ", ";
            first = false;
            if constexpr (std::is_convertible_v<decltype(value), std::string>) {
                oss << "\"" << name << "\":\"" << value << "\"";
            } else {
                oss << "\"" << name << "\":" << value;
            }
        });
        oss << "}";
        return oss.str();
    }
};

struct Person : JsonMixin {
    std::string name;
    int age;

    Person(std::string n, int a) : name(std::move(n)), age(a) {}

    template <typename F>
    void visit_fields(F&& f) const {
        f("name", name);
        f("age", age);
    }
};

struct Product : JsonMixin {
    std::string title;
    double price;

    Product(std::string t, double p) : title(std::move(t)), price(p) {}

    template <typename F>
    void visit_fields(F&& f) const {
        f("title", title);
        f("price", price);
    }
};

int main() {
    Person alice{"Alice", 30};
    Product widget{"Widget", 9.99};

    std::cout << alice.to_json() << "\n";
    std::cout << widget.to_json() << "\n";
}
```

Output:

```
{"name":"Alice","age":30}
{"title":"Widget","price":9.99}
```

:::tip Deducing this eliminates the need for CRTP in most mixin and static-polymorphism use cases.
Prefer deducing this in new C++23 code. Reserve CRTP for projects that must target pre-C++23
standards, or when explicit template instantiation control is needed. :::

## 5.7 Summary: Runtime vs. Compile-Time Polymorphism

| Criterion             | Virtual Functions (Runtime)           | CRTP / Deducing This (Compile-Time)        |
| --------------------- | ------------------------------------- | ------------------------------------------ |
| Dispatch mechanism    | vtable lookup at runtime              | Direct call or inlined at compile time     |
| Type resolution       | Dynamic (based on object's vptr)      | Static (based on deduced type)             |
| Heterogeneous storage | Supported (base pointers/references)  | Not supported (each type is distinct)      |
| Binary compatibility  | Stable ABI across derived types       | Changes to derived types recompile base    |
| Overhead              | One indirect call per virtual call    | Zero overhead (no indirection)             |
| Flexibility           | Open for extension at any point       | Closed: types must be known at base def.   |
| Extensibility         | Add new derived types without changes | Adding types may require base modification |
| Debugging             | Can inspect dynamic type via RTTI     | No runtime type info needed                |

## References

- [N4950 §7.6] — Run-Time Type Information (`dynamic_cast`, `typeid`)
- [N4950 §7.6.1.7] — `dynamic_cast`
- [N4950 §7.6.1.8] — `typeid`
- [N4950 §11.4.8.3] — Explicit object member functions (deducing this)
- [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html) — vtable layout
  specification

## 5.8 Overload Resolution with Deducing This

Explicit object parameters participate in overload resolution like any other function parameter. The
compiler deduces the `Self` type from the call expression and selects the best matching overload
using standard overload resolution rules [N4950 §12.4.3]. This enables a pattern impossible with
traditional member functions: **overloading based on the value category of the object**:

```cpp
#include <iostream>
#include <utility>
#include <string>

struct Logger {
    std::string prefix_;

    explicit Logger(std::string prefix) : prefix_(std::move(prefix)) {}

    template <typename Self>
    std::string label(this const Self& self) {
        return "[" + self.prefix_ + "] (const)";
    }

    template <typename Self>
    std::string label(this Self&& self) {
        return "[" + self.prefix_ + "] (mutable/rvalue)";
    }
};

int main() {
    Logger l("main");

    std::cout << l.label() << "\n";
    // Calls label(this const Logger& self) -> [main] (const)

    std::cout << std::move(l).label() << "\n";
    // Calls label(this Logger&& self) -> [main] (mutable/rvalue)

    std::cout << Logger("temp").label() << "\n";
    // Calls label(this Logger&& self) -> [temp] (mutable/rvalue)
}
```

The first overload binds to const lvalues. The second overload binds to both non-const lvalues
(`Logger&`) and rvalues (`Logger&&`) due to reference collapsing. This is the deducing-this
equivalent of providing both `const` and non-const overloads of a traditional member function, but
with the added ability to distinguish rvalue receivers.

## 5.9 Deducing This and Multiple Inheritance

Deducing this interacts with multiple inheritance in a way that requires careful attention. Because
`Self` is deduced as the **most-derived type**, a deducing-this member function in a base class has
access to the complete object, including members of sibling bases:

```cpp
#include <iostream>
#include <string>

struct Named {
    std::string name_;
};

struct Timestamped {
    double timestamp_ = 0.0;
};

struct AuditEntry : Named, Timestamped {
    template <typename Self>
    void summarize(this const Self& self) {
        std::cout << self.name_ << " at t=" << self.timestamp_ << "\n";
    }
};

int main() {
    AuditEntry entry{{"login"}, 1704067200.0};
    entry.summarize();
    // login at t=1.70407e+09
}
```

This works because `Self` deduces to `AuditEntry`, which inherits from both `Named` and
`Timestamped`. The `self` parameter is a reference to the complete `AuditEntry` object, so access to
`name_` and `timestamp_` is valid. With CRTP, this would require `static_cast<Derived*>(this)` and
explicit knowledge of the derived class's inheritance chain.

## 5.10 Deducing This: ABI and Name Mangling

Deducing this is a pure compile-time mechanism. It does not affect ABI or name mangling. A deducing-
this member function is mangled as if it were a free function template. For example:

```cpp
struct Foo {
    template <typename Self>
    void bar(this Self&& self);
};
```

The mangled name for `Foo::bar` when called on an lvalue `Foo` resembles a free function `bar(Foo&)`
rather than a traditional member function `Foo::bar()`. This means:

1. **Binary compatibility:** Code compiled with deducing this cannot be linked against code compiled
   without it (different mangling). However, this is only relevant if you are sharing object files
   across compilation units compiled with different compiler versions or different language
   standards.
2. **vtable interaction:** Deducing-this functions are never virtual. They cannot be placed in a
   vtable because the `Self` type is resolved at the call site, not through dynamic dispatch. This
   is by design — deducing this is a static polymorphism mechanism.

## 5.11 Common Pitfalls

- **Cannot be virtual:** Deducing-this member functions cannot be declared `virtual`. The template
  parameter `Self` must be deduced at the call site, which is incompatible with dynamic dispatch.
- **`this` pointer access:** Inside a deducing-this function, `this` is not available. Use the
  explicit `self` parameter instead. Attempting to use `this` results in a compile-time error.
- **Reference collapsing gotchas:** `this Self&& self` deduces `Self` as `T&` for lvalues and `T`
  for rvalues. If you need separate behavior for const and non-const, provide explicit overloads
  rather than relying on `auto&&` to differentiate.
- **CRTP still needed for explicit instantiation:** If you need to explicitly instantiate a base
  class template for specific derived types, CRTP remains the appropriate mechanism. Deducing this
  does not support explicit instantiation of the deduced type.

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)

:::
