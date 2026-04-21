---
title: RTTI, dynamic_cast, and typeid
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: rtti-dynamic-cast-typeid
---

# RTTI, dynamic_cast, and Typeid

Run-Time Type Information (RTTI) allows programs to query the dynamic type of polymorphic objects at
runtime. This section covers `dynamic_cast` for safe downcasting, the `typeid` operator for type
identification, and practical patterns for type-based dispatch.

## 4.1 Run-Time Type Information (RTTI)

RTTI is the mechanism by which the type of a polymorphic object can be queried at runtime [N4950
S7.6]. It is enabled by default on most compilers and can be disabled with `-fno-rtti` (GCC/Clang)
or `/GR-` (MSVC).

RTTI provides two primary operators:

| Operator       | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| `dynamic_cast` | Safe downcast with runtime type check                 |
| `typeid`       | Returns a `const std::type_info&` describing the type |

RTTI relies on the same vtable infrastructure used for virtual dispatch. Each polymorphic class's
vtable contains a pointer to its `std::type_info` object.

### RTTI Implementation in the Itanium ABI

Under the Itanium C++ ABI, the vtable layout includes a pointer to the `std::type_info` object for
the class. The vtable structure is:

```
vtable for class C:
  [0]: offset-to-top (for dynamic_cast pointer adjustment)
  [1]: &std::type_info for C
  [2]: C::~C() (complete destructor)
  [3]: C::virtual_func_1()
  [4]: C::virtual_func_2()
  ...
```

The `type_info` object stores:

- A pointer to a type_info name (mangled, implementation-defined).
- A pointer to the base class type_info list (for `dynamic_cast` hierarchy traversal).

This structure enables `dynamic_cast` to walk the base class chain and compute pointer adjustments
at runtime.

:::warning RTTI Overhead Disabling RTTI (`-fno-rtti`) reduces binary size (by removing type_info
metadata) and may enable further optimizations. However, it also makes `dynamic_cast` and `typeid`
unavailable for polymorphic types. Disabling RTTI does **not** eliminate the vtable or vptr --
virtual dispatch still works. :::

## 4.2 `dynamic_cast<T*>(ptr)` -- Safe Downcast

`dynamic_cast<T*>(ptr)` converts a base-class pointer to a derived-class pointer. If the cast is
invalid (the object is not of type `T` or a type derived from `T`), the result is `nullptr` [N4950
S7.6.1.7].

```cpp
#include <iostream>
#include <vector>
#include <memory>

struct Document {
    virtual ~Document() = default;
    virtual void print() const { std::cout << "Document\n"; }
};

struct PDF : Document {
    void print() const override { std::cout << "PDF Document\n"; }
    void extract_text() const { std::cout << "Extracting text from PDF\n"; }
};

struct HTML : Document {
    void print() const override { std::cout << "HTML Document\n"; }
    void get_links() const { std::cout << "Getting links from HTML\n"; }
};

struct PlainText : Document {
    void print() const override { std::cout << "Plain Text Document\n"; }
    void get_word_count() const { std::cout << "Word count: 42\n"; }
};

void process_documents(const std::vector<Document*>& docs) {
    for (auto* doc : docs) {
        if (auto* pdf = dynamic_cast<PDF*>(doc)) {
            pdf->extract_text();
        } else if (auto* html = dynamic_cast<HTML*>(doc)) {
            html->get_links();
        } else if (auto* text = dynamic_cast<PlainText*>(doc)) {
            text->get_word_count();
        } else {
            doc->print();
        }
    }
}

int main() {
    PDF p;
    HTML h;
    PlainText t;
    Document d;

    std::vector<Document*> docs = {&p, &h, &t, &d};
    process_documents(docs);
}
```

Output:

```
Extracting text from PDF
Getting links from HTML
Word count: 42
Document
```

### Proof: Cost of `dynamic_cast` [N4950 S7.6.1.7]

The cost of `dynamic_cast<T*>(p)` depends on the inheritance relationship between the static type of
`*p` and `T`:

**Down-cast (single inheritance):** `T` is derived from the static type of `*p`. The implementation
compares `p`'s `type_info` pointer against `T`'s `type_info` pointer. This is a single pointer
comparison -- $O(1)$.

**Down-cast (multiple inheritance):** `T` is derived from the static type of `*p` through a
non-primary base. The implementation walks the base class list stored in `type_info` and computes
the pointer offset. Cost is $O(d)$ where $d$ is the number of direct base classes (typically 1--3).

**Cross-cast:** `T` is a sibling base class of the static type of `*p`. The implementation finds the
most-derived type, then walks the base class list to find `T` and compute the offset. Cost is $O(b)$
where $b$ is the total number of base classes in the most-derived type.

**Cast to `void*`:** Returns a pointer to the most-derived object. Cost is $O(1)$ -- a single offset
lookup.

## 4.3 `dynamic_cast<T&>(ref)` -- Reference Downcast

When `dynamic_cast` is applied to a reference, a failed cast throws `std::bad_cast` (defined in
`<typeinfo>`) instead of returning `nullptr` [N4950 S7.6.1.7]:

```cpp
#include <iostream>
#include <typeinfo>

struct Base { virtual ~Base() = default; };
struct Derived : Base { };

void try_cast_ref(Base& b) {
    try {
        Derived& d = dynamic_cast<Derived&>(b);
        std::cout << "Cast succeeded\n";
        (void)d;
    } catch (const std::bad_cast& e) {
        std::cout << "Cast failed: " << e.what() << "\n";
    }
}

int main() {
    Derived d;
    Base b;

    try_cast_ref(d);
    try_cast_ref(b);
}
```

Output:

```
Cast succeeded
Cast failed: std::bad_cast
```

:::info `dynamic_cast<T&>` cannot return `nullptr` because references cannot be null. Throwing an
exception is the only way to signal failure. This is why `dynamic_cast` on pointers is generally
preferred -- it allows the caller to check for failure without exception overhead. :::

## 4.4 `typeid` Operator

The `typeid` operator [N4950 S7.6.1.8] returns a `const std::type_info&` describing the **dynamic
type** of a polymorphic object (when applied to a dereferenced pointer or reference) or the **static
type** (when applied to a type name or non-polymorphic object).

```cpp
#include <iostream>
#include <typeinfo>
#include <typeindex>
#include <unordered_map>

struct Base { virtual ~Base() = default; virtual void identify() const = 0; };
struct Cat : Base { void identify() const override { std::cout << "Cat\n"; } };
struct Dog : Base { void identify() const override { std::cout << "Dog\n"; } };
struct Bird : Base { void identify() const override { std::cout << "Bird\n"; } };

std::unordered_map<std::type_index, int> create_counts() {
    std::unordered_map<std::type_index, int> counts;
    counts[std::type_index(typeid(Cat))] = 0;
    counts[std::type_index(typeid(Dog))] = 0;
    counts[std::type_index(typeid(Bird))] = 0;
    return counts;
}

void count_types(const std::vector<Base*>& animals) {
    auto counts = create_counts();
    for (const auto* a : animals) {
        counts[std::type_index(typeid(*a))]++;
    }

    for (const auto& [ti, count] : counts) {
        std::cout << ti.name() << ": " << count << "\n";
    }
}

int main() {
    Cat c1, c2;
    Dog d1;
    Bird b1, b2, b3;

    std::vector<Base*> animals = {&c1, &c2, &d1, &b1, &b2, &b3};
    count_types(animals);
}
```

Key points:

- `typeid(*ptr)` uses the **dynamic type** when `ptr` points to a polymorphic type.
- `typeid(T)` uses the **static type** -- it is evaluated at compile time.
- `typeid` returns a reference to a `std::type_info` object, whose lifetime extends for the entire
  program.
- `std::type_index` (from `<typeindex>`) is a wrapper around `std::type_info` that provides value
  semantics and can be used as a key in associative containers.

:::warning The `name()` member of `std::type_info` returns an implementation-defined string. It is
useful for debugging but should not be parsed or compared. Use `std::type_index` for type
comparisons. :::

## 4.5 RTTI and `dynamic_cast` for the Visitor Pattern

When a traditional double-dispatch visitor is overkill, `dynamic_cast` chains can serve as a simpler
(if less extensible) alternative:

```cpp
#include <iostream>
#include <memory>
#include <vector>

struct Expr {
    virtual ~Expr() = default;
    virtual double eval() const = 0;
    virtual void print() const = 0;
};

struct Literal : Expr {
    double value;
    explicit Literal(double v) : value(v) {}
    double eval() const override { return value; }
    void print() const override { std::cout << value; }
};

struct Add : Expr {
    std::unique_ptr<Expr> left;
    std::unique_ptr<Expr> right;
    Add(std::unique_ptr<Expr> l, std::unique_ptr<Expr> r)
        : left(std::move(l)), right(std::move(r)) {}
    double eval() const override { return left->eval() + right->eval(); }
    void print() const override {
        std::cout << "(";
        left->print();
        std::cout << " + ";
        right->print();
        std::cout << ")";
    }
};

struct Mul : Expr {
    std::unique_ptr<Expr> left;
    std::unique_ptr<Expr> right;
    Mul(std::unique_ptr<Expr> l, std::unique_ptr<Expr> r)
        : left(std::move(l)), right(std::move(r)) {}
    double eval() const override { return left->eval() * right->eval(); }
    void print() const override {
        std::cout << "(";
        left->print();
        std::cout << " * ";
        right->print();
        std::cout << ")";
    }
};

void optimize(std::unique_ptr<Expr>& expr) {
    if (auto* add = dynamic_cast<Add*>(expr.get())) {
        if (dynamic_cast<Literal*>(add->left.get()) &&
            dynamic_cast<Literal*>(add->right.get())) {
            double val = add->left->eval() + add->right->eval();
            expr = std::make_unique<Literal>(val);
            std::cout << "Constant folded Add to " << val << "\n";
        }
    } else if (auto* mul = dynamic_cast<Mul*>(expr.get())) {
        if (dynamic_cast<Literal*>(mul->left.get())) {
            auto* lit = dynamic_cast<Literal*>(mul->left.get());
            if (lit->value == 0.0) {
                expr = std::make_unique<Literal>(0.0);
                std::cout << "Simplified 0 * x to 0\n";
            } else if (lit->value == 1.0) {
                expr = std::move(mul->right);
                std::cout << "Simplified 1 * x to x\n";
            }
        }
    }
}

int main() {
    auto expr = std::make_unique<Add>(
        std::make_unique<Mul>(
            std::make_unique<Literal>(0.0),
            std::make_unique<Literal>(5.0)
        ),
        std::make_unique<Literal>(3.0)
    );

    std::cout << "Before: ";
    expr->print();
    std::cout << " = " << expr->eval() << "\n";

    optimize(expr);

    std::cout << "After:  ";
    expr->print();
    std::cout << " = " << expr->eval() << "\n";
}
```

:::tip The `dynamic_cast`-based approach is simpler to implement than the classic Visitor pattern
for small, stable type hierarchies. However, adding a new derived type requires updating every
`dynamic_cast` chain. The Visitor pattern localizes changes: adding a new visitor doesn't modify
existing types, and adding a new type doesn't modify existing visitors (it only requires extending
the visitor interface). :::

## 4.6 `dynamic_cast` with Multiple and Virtual Inheritance

When multiple or virtual inheritance is involved, `dynamic_cast` performs a more complex traversal
of the class hierarchy. The Itanium C++ ABI stores base-to-derived offset information in the vtable
(through `typeinfo` and base class offset tables), and `dynamic_cast` walks these structures to
determine whether a cast is valid and to compute the pointer adjustment.

**Cross-cast (casting across sibling branches):** A `dynamic_cast` from one base to another base
within the same derived object (a "cross-cast") is valid only when both bases are accessible and the
derived object actually exists. This requires the object to be polymorphic:

```cpp
#include <iostream>

struct InterfaceA {
    virtual ~InterfaceA() = default;
    virtual void a() const { std::cout << "A\n"; }
};

struct InterfaceB {
    virtual ~InterfaceB() = default;
    virtual void b() const { std::cout << "B\n"; }
};

struct Impl : InterfaceA, InterfaceB {
    void a() const override { std::cout << "Impl::A\n"; }
    void b() const override { std::cout << "Impl::B\n"; }
};

void cross_cast(InterfaceA* pa) {
    // Cross-cast: from InterfaceA* to InterfaceB* within the same Impl object
    if (auto* pb = dynamic_cast<InterfaceB*>(pa)) {
        pb->b();
    } else {
        std::cout << "cross-cast failed\n";
    }
}

int main() {
    Impl obj;
    cross_cast(&obj);
}
```

Output:

```
Impl::B
```

The cross-cast succeeds because `dynamic_cast` inspects the `typeinfo` to determine that the actual
object (`Impl`) derives from both `InterfaceA` and `InterfaceB`. The pointer is adjusted by the
offset between the `InterfaceA` subobject and the `InterfaceB` subobject within `Impl`. For single
inheritance, `dynamic_cast` is a single `typeinfo` pointer comparison -- $O(1)$. For cross-casts and
casts through virtual bases, the cost is $O(d)$ where $d$ is the depth of the DAG [N4950 S7.6.1.7].

### Down-cast vs Cross-cast

| Cast Type    | Source and Target           | Cost                          | Mechanism                               |
| ------------ | --------------------------- | ----------------------------- | --------------------------------------- |
| Down-cast    | Base* to Derived*           | $O(1)$ (single inheritance)   | `type_info` pointer comparison          |
| Down-cast    | Base* to Derived*           | $O(b)$ (multiple inheritance) | Walk base class list                    |
| Cross-cast   | Base1* to Base2* (siblings) | $O(b)$                        | Find most-derived, walk to target base  |
| Up-cast      | Derived* to Base*           | $O(1)$                        | Compile-time offset (use `static_cast`) |
| `void*` cast | Base* to `void*`            | $O(1)$                        | Offset to most-derived object           |

## 4.7 `dynamic_cast` to `void*`: The Most-Derived Type

A `dynamic_cast&lt;void*>(expr)` where `expr` is a pointer to a polymorphic type yields a pointer to
the **most-derived object** [N4950 S7.6.1.7]. This is useful for implementing `memcmp`-style
identity checks or determining the root of an object's allocation:

```cpp
#include <iostream>

struct Base { virtual ~Base() = default; };
struct Derived : Base { int x{}; };
struct MoreDerived : Derived { int y{}; };

int main() {
    MoreDerived md;
    Base* bp = &md;
    Derived* dp = &md;

    void* v1 = dynamic_cast<void*>(bp);
    void* v2 = dynamic_cast<void*>(dp);

    std::cout << "&md = " << static_cast<void*>(&md) << "\n";
    std::cout << "dynamic_cast<void*>(bp) = " << v1 << "\n";
    std::cout << "dynamic_cast<void*>(dp) = " << v2 << "\n";

    // All three pointers are the same: the address of the most-derived object
    std::cout << "all same: " << (v1 == v2 && v1 == static_cast<void*>(&md)) << "\n";
}
```

This cast is the only `dynamic_cast` that does not require the target type to be related to the
source type. It is often used in debugging, custom memory management, and implementing
`std::pointer_traits`.

## 4.8 `typeid` on Null Pointers and Non-Polymorphic Types

The behavior of `typeid` depends critically on whether the operand is a type or an expression:

- **`typeid(T)`** (type operand): Always well-formed, returns `std::type_info` for the static type
  `T`. Evaluated at compile time.
- **`typeid(expr)`** (expression operand, `expr` is a dereferenced pointer to a polymorphic type):
  Returns `std::type_info` for the **dynamic type** at runtime.
- **`typeid(*p)` where `p` is null:** If `p` is a null pointer to a polymorphic type, `typeid(*p)`
  throws `std::bad_typeid` [N4950 S7.6.1.8]. This is because the dereference would require accessing
  the vtable, which does not exist for a null pointer.

```cpp
#include <iostream>
#include <typeinfo>

struct Poly { virtual ~Poly() = default; };
struct NonPoly {};

int main() {
    Poly p;
    NonPoly np;

    std::cout << "typeid(Poly).name() = " << typeid(Poly).name() << "\n";
    std::cout << "typeid(p).name() = " << typeid(p).name() << "\n";
    std::cout << "typeid(NonPoly).name() = " << typeid(NonPoly).name() << "\n";

    Poly* null_p = nullptr;
    try {
        (void)typeid(*null_p);
    } catch (const std::bad_typeid& e) {
        std::cout << "bad_typeid caught: " << e.what() << "\n";
    }
}
```

### `typeid` on Non-Polymorphic Types

When applied to a non-polymorphic type (or a dereferenced pointer to a non-polymorphic type),
`typeid` returns the `std::type_info` for the **static type** [N4950 S7.6.1.8]. No runtime type
information is consulted because there is no vtable to provide it:

```cpp
#include <iostream>
#include <typeinfo>

struct Base { int x; };
struct Derived : Base { int y; };

int main() {
    Derived d;
    Base& ref = d;

    // typeid(ref) returns type_info for Base (static type), NOT Derived
    std::cout << "typeid(ref) = " << typeid(ref).name() << "\n";
    // typeid(d) returns type_info for Derived
    std::cout << "typeid(d) = " << typeid(d).name() << "\n";
}
```

## 4.9 Disabling RTTI (`-fno-rtti`) and Alternatives

Disabling RTTI removes the `type_info` metadata from the binary and makes `dynamic_cast` and
`typeid` unavailable for polymorphic types. This is common in performance-sensitive or embedded
contexts.

```bash
# GCC / Clang
g++ -fno-rtti -O2 main.cpp

# MSVC
cl /GR- /O2 main.cpp
```

### Alternatives to `dynamic_cast`

When RTTI is disabled, or when `dynamic_cast` is too expensive for hot paths, consider these
alternatives:

#### Alternative 1: Manual Type Tags (enum)

```cpp
#include <iostream>
#include <vector>

enum class Type { Base, DerivedA, DerivedB };

struct Base {
    Type type = Type::Base;
    virtual ~Base() = default;
};

struct DerivedA : Base {
    DerivedA() { type = Type::DerivedA; }
    void special_a() { std::cout << "A\n"; }
};

struct DerivedB : Base {
    DerivedB() { type = Type::DerivedB; }
    void special_b() { std::cout << "B\n"; }
};

void process(const std::vector<Base*>& objects) {
    for (auto* obj : objects) {
        switch (obj->type) {
            case Type::DerivedA:
                static_cast<DerivedA*>(obj)->special_a();
                break;
            case Type::DerivedB:
                static_cast<DerivedB*>(obj)->special_b();
                break;
            default:
                break;
        }
    }
}

int main() {
    DerivedA a;
    DerivedB b;
    std::vector<Base*> objs = {&a, &b};
    process(objs);
}
```

Cost: $O(1)$ per dispatch (switch on enum). Downside: requires manual maintenance of the enum and
does not handle deep hierarchies well.

#### Alternative 2: `std::variant` (Closed Type Set)

```cpp
#include <iostream>
#include <variant>
#include <vector>

struct Circle { double r; void draw() const { std::cout << "Circle\n"; } };
struct Square { double s; void draw() const { std::cout << "Square\n"; } };
struct Triangle { double b, h; void draw() const { std::cout << "Triangle\n"; } };

using Shape = std::variant<Circle, Square, Triangle>;

void draw_all(const std::vector<Shape>& shapes) {
    for (const auto& s : shapes) {
        std::visit([](const auto& shape) { shape.draw(); }, s);
    }
}

int main() {
    std::vector<Shape> shapes = {Circle{1.0}, Square{2.0}, Triangle{3.0, 4.0}};
    draw_all(shapes);
}
```

Cost: $O(1)$ per dispatch (index check + jump table). Downside: the set of types must be known at
compile time; cannot add new types without modifying the variant.

#### Alternative 3: Visitor Pattern (Double Dispatch)

```cpp
#include <iostream>
#include <memory>

struct Visitor;
struct Circle;
struct Square;

struct Shape {
    virtual ~Shape() = default;
    virtual void accept(Visitor& v) const = 0;
};

struct Visitor {
    virtual void visit(const Circle& c) = 0;
    virtual void visit(const Square& s) = 0;
};

struct Circle : Shape {
    double r;
    explicit Circle(double radius) : r(radius) {}
    void accept(Visitor& v) const override { v.visit(*this); }
};

struct Square : Shape {
    double s;
    explicit Square(double side) : s(side) {}
    void accept(Visitor& v) const override { v.visit(*this); }
};

struct DrawVisitor : Visitor {
    void visit(const Circle& c) override { std::cout << "Draw Circle r=" << c.r << "\n"; }
    void visit(const Square& s) override { std::cout << "Draw Square s=" << s.s << "\n"; }
};

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(3.0));
    shapes.push_back(std::make_unique<Square>(2.0));

    DrawVisitor dv;
    for (const auto& s : shapes) {
        s->accept(dv);
    }
}
```

Cost: $O(1)$ per dispatch (two virtual calls). Downside: adding a new `Shape` type requires
modifying all visitors; adding a new visitor requires modifying all shapes.

### Alternative Comparison Table

| Approach                      | RTTI Required | Closed Set | Cost                     | Extensibility          |
| ----------------------------- | ------------- | ---------- | ------------------------ | ---------------------- |
| `dynamic_cast` chain          | Yes           | No         | $O(d)$ hierarchy depth   | Add types freely       |
| Manual type tag               | No            | No         | $O(1)$ switch            | Manual maintenance     |
| `std::variant` + `std::visit` | No            | Yes        | $O(1)$                   | Compile-time only      |
| Visitor pattern               | No            | No         | $O(1)$ (2 virtual calls) | Both axes need changes |
| CRTP / deducing this          | No            | Yes        | $O(0)$ (inlined)         | Compile-time only      |

## 4.10 RTTI Overhead Measurement

The following benchmark measures the cost of `dynamic_cast` in a tight loop:

```cpp
#include <chrono>
#include <cstdio>
#include <memory>
#include <typeinfo>
#include <vector>

struct Base { virtual ~Base() = default; };
struct Derived : Base { int data{}; };

double bench_dynamic_cast(const std::vector<Base*>& v, int iters) {
    volatile int sink = 0;
    auto t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < iters; ++i)
        for (auto* p : v)
            if (auto* d = dynamic_cast<Derived*>(p))
                sink += d->data;
    return std::chrono::duration<double>(std::chrono::high_resolution_clock::now() - t0).count();
}

double bench_typeid(const std::vector<Base*>& v, int iters) {
    volatile int sink = 0;
    auto t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < iters; ++i)
        for (auto* p : v)
            if (typeid(*p) == typeid(Derived))
                sink += static_cast<Derived*>(p)->data;
    return std::chrono::duration<double>(std::chrono::high_resolution_clock::now() - t0).count();
}

double bench_tag(const std::vector<Base*>& v, int iters) {
    // Simulates manual tag check (would use a real tag field)
    volatile int sink = 0;
    auto t0 = std::chrono::high_resolution_clock::now();
    for (int i = 0; i < iters; ++i)
        for (auto* p : v)
            sink += p ? 1 : 0;  // Minimal pointer check baseline
    return std::chrono::duration<double>(std::chrono::high_resolution_clock::now() - t0).count();
}

int main() {
    constexpr int N = 10000, ITERS = 10000;
    std::vector<Base*> v;
    v.reserve(N);
    for (int i = 0; i < N; ++i) v.push_back(new Derived);

    double t1 = bench_dynamic_cast(v, ITERS);
    double t2 = bench_typeid(v, ITERS);
    double t3 = bench_tag(v, ITERS);

    std::printf("dynamic_cast: %.3f s\n", t1);
    std::printf("typeid:       %.3f s\n", t2);
    std::printf("baseline:     %.3f s\n", t3);

    for (auto* p : v) delete p;
}
```

Typical results show `dynamic_cast` is 2--5x slower than a manual tag check for single inheritance,
but the absolute cost is still only a few nanoseconds per call. The overhead becomes significant
only in tight inner loops processing millions of objects.

## Common Pitfalls

**1. `dynamic_cast` on non-polymorphic types:** `dynamic_cast` requires the source type to be
polymorphic (have at least one virtual function). Attempting `dynamic_cast&lt;Derived*>(base_ptr)`
where `Base` has no virtual functions is a **compile-time error** [N4950 S7.6.1.7]. Use
`static_cast` instead for downcasting non-polymorphic types (at your own risk -- no runtime check).

**2. `dynamic_cast` and undefined behavior:** The Standard specifies that if the object pointed to
by the operand is not actually of the target type (or a type derived from it), the behavior of
`dynamic_cast&lt;T*>(p)` is **implementation-defined** when `p` points to an incomplete type, and
returns `nullptr` otherwise [N4950 S7.6.1.7]. Never rely on `dynamic_cast` succeeding with
incomplete types.

**3. Performance in tight loops:** Each `dynamic_cast` may traverse the class hierarchy and perform
pointer comparisons. In a tight inner loop processing millions of objects, this overhead is
measurable. If the type hierarchy is small and stable, consider a manual type tag (enum) or the
Visitor pattern instead.

**4. `dynamic_cast` across shared library boundaries:** When the base and derived classes are
defined in different shared libraries, `type_info` comparison may fail because the `type_info`
objects are not unified across library boundaries. This is implementation-specific and can cause
`dynamic_cast` to return `nullptr` even when the cast is valid. Use the Visitor pattern or manual
type tags for cross-library polymorphism.

**5. Using `typeid` for type comparison:** `typeid(a) == typeid(b)` compares `type_info` objects,
which is well-defined. However, `typeid(a).name() == typeid(b).name()` compares
implementation-defined strings and may fail even when the types are the same (different name
mangling, whitespace, etc.). Always use `std::type_index` or direct `type_info` comparison.

**6. RTTI and binary size:** Each polymorphic class generates a `type_info` object and associated
metadata. In a large codebase with many polymorphic classes, this can add tens of kilobytes to the
binary. If binary size is critical (e.g., embedded systems), consider `-fno-rtti` and use manual
type tags.

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)
