---
title: Inheritance, Object Slicing, and Virtual Destructors
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: inheritance-slicing-virtual-destructors
---

# Inheritance, Object Slicing, and Virtual Destructors

Inheritance allows derived classes to extend base classes, but copying polymorphic objects by value
causes **object slicing** — the derived portion is discarded. This section covers single and
multiple inheritance, object slicing, virtual destructors, pure virtual functions, and interface
conventions.

## 2.1 Single and Multiple Inheritance

A derived class inherits from one or more base classes [N4950 §11.7]. Each base class subobject is
laid out in memory according to the inheritance graph.

**Single inheritance:** The derived class extends the base by appending its own members after the
base subobject. Only one vptr is needed (shared with the base).

**Multiple inheritance:** Each base class subobject retains its own vptr (if polymorphic). The
derived object contains multiple base subobjects, each at a distinct offset.

```cpp
#include <iostream>

struct A {
    virtual void fa() { std::cout << "A::fa\n"; }
    int a_val{};
    virtual ~A() = default;
};

struct B {
    virtual void fb() { std::cout << "B::fb\n"; }
    int b_val{};
    virtual ~B() = default;
};

struct C : A, B {
    void fa() override { std::cout << "C::fa\n"; }
    void fb() override { std::cout << "C::fb\n"; }
    int c_val{};
};

int main() {
    C c;
    c.fa();
    c.fb();

    A* pa = &c;
    B* pb = &c;

    std::cout << "pa = " << pa << "\n";
    std::cout << "pb = " << pb << "\n";
    std::cout << "&c = " << static_cast<void*>(&c) << "\n";

    pa->fa();
    pb->fb();
}
```

:::info With multiple inheritance, `pa` and `pb` point to **different addresses** within the same
`C` object — they point to the respective base subobjects. The compiler generates **thunks** (small
adjustment stubs) to correct the `this` pointer when dispatching virtual calls through non-primary
bases. :::

## 2.2 Object Slicing

Object slicing occurs when a derived object is copied into a base-class object by value. Only the
base-class subobject is copied; the derived portion is discarded [N4950 §11.7.3.2].

```cpp
#include <iostream>
#include <string>

struct Animal {
    std::string name;
    virtual std::string speak() const { return "..."; }
    virtual ~Animal() = default;
};

struct Dog : Animal {
    std::string breed;
    std::string speak() const override { return "Woof!"; }
};

void process_by_value(Animal a) {
    std::cout << "process_by_value: " << a.speak() << "\n";
}

void process_by_ref(const Animal& a) {
    std::cout << "process_by_ref:   " << a.speak() << "\n";
}

void process_by_ptr(const Animal* a) {
    std::cout << "process_by_ptr:   " << a->speak() << "\n";
}

int main() {
    Dog d{"Rex", "Labrador"};
    std::cout << "Direct:           " << d.speak() << "\n";

    process_by_value(d);
    process_by_ref(d);
    process_by_ptr(&d);

    Animal sliced = d;
    std::cout << "Sliced:           " << sliced.speak() << "\n";
}
```

Output:

```
Direct:           Woof!
process_by_value: ...
process_by_ref:   Woof!
process_by_ptr:   Woof!
Sliced:           ...
```

When `d` is passed by value to `process_by_value`, only the `Animal` subobject is copied. The vptr
is set to `Animal`'s vtable, so `a.speak()` dispatches to `Animal::speak`. The `Dog`-specific data
(`breed`) and the `Dog::speak` override are lost.

:::warning Never pass polymorphic objects by value. Always use pointers (`Animal*`) or references
(`Animal&` / `const Animal&`) to preserve the dynamic type. :::

## 2.3 Virtual Destructors

If a derived object is deleted through a base-class pointer and the base class's destructor is
**not** `virtual`, the behavior is undefined [N4950 §11.4.7]:

```cpp
#include <iostream>

struct BadBase {
    ~BadBase() { std::cout << "BadBase dtor\n"; }
};

struct BadDerived : BadBase {
    ~BadDerived() { std::cout << "BadDerived dtor\n"; }
};

struct GoodBase {
    virtual ~GoodBase() { std::cout << "GoodBase dtor\n"; }
};

struct GoodDerived : GoodBase {
    ~GoodDerived() { std::cout << "GoodDerived dtor\n"; }
};

int main() {
    std::cout << "--- Bad (UB) ---\n";
    BadBase* bp = new BadDerived{};
    delete bp;

    std::cout << "--- Good ---\n";
    GoodBase* gp = new GoodDerived{};
    delete gp;
}
```

Output:

```
--- Bad (UB) ---
BadBase dtor
--- Good ---
GoodDerived dtor
GoodBase dtor
```

With `BadBase`, only `BadBase::~BadBase()` is called — `BadDerived::~BadDerived()` never runs,
causing resource leaks. With `GoodBase`, the virtual dispatch mechanism selects
`GoodDerived::~GoodDerived()`, which then implicitly calls `GoodBase::~GoodBase()`.

:::tip Rule If a class has **any** virtual function, its destructor **must** also be virtual. If a
class is designed to be a polymorphic base class, always declare `virtual ~Base() = default;` (or
provide a virtual destructor with a body). :::

## 2.4 Pure Virtual Functions and Abstract Classes

A **pure virtual function** is declared using the `= 0` syntax [N4950 §13.4.4]. A class with at
least one pure virtual function is an **abstract class** — it cannot be instantiated directly.

```cpp
#include <iostream>
#include <vector>
#include <memory>
#include <cmath>

struct Shape {
    virtual double area() const = 0;
    virtual double perimeter() const = 0;
    virtual void describe() const = 0;
    virtual ~Shape() = default;
};

struct Circle : Shape {
    double radius;

    explicit Circle(double r) : radius(r) {}

    double area() const override {
        return M_PI * radius * radius;
    }

    double perimeter() const override {
        return 2 * M_PI * radius;
    }

    void describe() const override {
        std::cout << "Circle(r=" << radius << ")\n";
    }
};

struct Rectangle : Shape {
    double width;
    double height;

    Rectangle(double w, double h) : width(w), height(h) {}

    double area() const override {
        return width * height;
    }

    double perimeter() const override {
        return 2 * (width + height);
    }

    void describe() const override {
        std::cout << "Rectangle(" << width << "x" << height << ")\n";
    }
};

void print_all(const std::vector<std::unique_ptr<Shape>>& shapes) {
    double total = 0;
    for (const auto& s : shapes) {
        s->describe();
        std::cout << "  area = " << s->area() << "\n";
        std::cout << "  perimeter = " << s->perimeter() << "\n";
        total += s->area();
    }
    std::cout << "Total area: " << total << "\n";
}

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    shapes.push_back(std::make_unique<Circle>(3.0));
    shapes.push_back(std::make_unique<Rectangle>(4.0, 5.0));
    shapes.push_back(std::make_unique<Circle>(1.5));

    print_all(shapes);
}
```

Key properties of pure virtual functions:

- A pure virtual function **may** have a definition in the base class. The class is still abstract,
  but derived classes can explicitly call it via `Base::f()`.
- A derived class that does not provide an override for all inherited pure virtual functions is
  itself abstract.
- Abstract classes can have data members and non-pure virtual functions.

## 2.5 Interfaces in C++

C++ does not have a native `interface` keyword (unlike Java or C#). An **interface** in C++ is a
convention: a class with only pure virtual functions and no data members.

```cpp
#include <string>

struct ISerializable {
    virtual ~ISerializable() = default;
    virtual std::string serialize() const = 0;
    virtual void deserialize(const std::string& data) = 0;
};

struct IRenderable {
    virtual ~IRenderable() = default;
    virtual void render() const = 0;
    virtual void update(double dt) = 0;
};

class Player : public ISerializable, public IRenderable {
public:
    std::string serialize() const override {
        return "Player{name=" + name_ + ",x=" + std::to_string(x_)
             + ",y=" + std::to_string(y_) + "}";
    }

    void deserialize(const std::string& data) override {
        (void)data;
    }

    void render() const override { }
    void update(double dt) override { (void)dt; }

private:
    std::string name_{"Hero"};
    double x_{0.0};
    double y_{0.0};
};
```

:::info Convention Prefixing interface names with `I` (e.g., `ISerializable`) is a common C++
convention borrowed from COM and C#. It is not mandated by the Standard. Alternatives include
suffixes like `-able` (e.g., `Serializable`). :::

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)
