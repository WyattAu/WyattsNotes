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
§7.6]. It is enabled by default on most compilers and can be disabled with `-fno-rtti` (GCC/Clang)
or `/GR-` (MSVC).

RTTI provides two primary operators:

| Operator       | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| `dynamic_cast` | Safe downcast with runtime type check                 |
| `typeid`       | Returns a `const std::type_info&` describing the type |

RTTI relies on the same vtable infrastructure used for virtual dispatch. Each polymorphic class's
vtable contains a pointer to its `std::type_info` object.

:::warning RTTI Overhead Disabling RTTI (`-fno-rtti`) reduces binary size (by removing type_info
metadata) and may enable further optimizations. However, it also makes `dynamic_cast` and `typeid`
unavailable for polymorphic types. Disabling RTTI does **not** eliminate the vtable or vptr —
virtual dispatch still works. :::

## 4.2 `dynamic_cast<T*>(ptr)` — Safe Downcast

`dynamic_cast<T*>(ptr)` converts a base-class pointer to a derived-class pointer. If the cast is
invalid (the object is not of type `T` or a type derived from `T`), the result is `nullptr` [N4950
§7.6.1.7].

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

The cost of `dynamic_cast`:

- The runtime walks the class hierarchy (using the vtable's type_info chain) to verify the cast.
- For single inheritance, this is $O(1)$ — a single pointer comparison against the target
  `type_info`.
- For multiple inheritance, it may require traversing the base class list, costing $O(d)$ where $d$
  is the depth of the inheritance tree (typically still very fast).

## 4.3 `dynamic_cast<T&>(ref)` — Reference Downcast

When `dynamic_cast` is applied to a reference, a failed cast throws `std::bad_cast` (defined in
`<typeinfo>`) instead of returning `nullptr` [N4950 §7.6.1.7]:

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
preferred — it allows the caller to check for failure without exception overhead. :::

## 4.4 `typeid` Operator

The `typeid` operator [N4950 §7.6.1.8] returns a `const std::type_info&` describing the **dynamic
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
- `typeid(T)` uses the **static type** — it is evaluated at compile time.
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

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Inheritance, Object Slicing, and Virtual Destructors](./2_inheritance_slicing.md)
