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

:::info
With multiple inheritance, `pa` and `pb` point to **different addresses** within the same
`C` object — they point to the respective base subobjects. The compiler generates **thunks** (small
adjustment stubs) to correct the `this` pointer when dispatching virtual calls through non-primary
bases.
:::

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

:::warning
Never pass polymorphic objects by value. Always use pointers (`Animal*`) or references
(`Animal&` / `const Animal&`) to preserve the dynamic type.
:::

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

:::tip
Rule If a class has **any** virtual function, its destructor **must** also be virtual. If a
class is designed to be a polymorphic base class, always declare `virtual ~Base() = default;` (or
provide a virtual destructor with a body).
:::

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

:::info
Convention Prefixing interface names with `I` (e.g., `ISerializable`) is a common C++
convention borrowed from COM and C#. It is not mandated by the Standard. Alternatives include
suffixes like `-able` (e.g., `Serializable`).
:::

## 2.6 Virtual Inheritance and the Diamond Problem

When two base classes each inherit from the same base, a **diamond inheritance** pattern arises.
Without **virtual inheritance**, the derived object contains **two separate copies** of the common
base subobject, leading to ambiguity [N4950 §11.7.1]:

```cpp
#include <iostream>

struct Device {
    int id{};
    void init() { std::cout << "Device::init id=" << id << "\n"; }
};

struct Printer : Device {
    void print() { std::cout << "printing\n"; }
};

struct Scanner : Device {
    void scan() { std::cout << "scanning\n"; }
};

// WITHOUT virtual inheritance: two Device subobjects
struct PrintScanner_Bad : Printer, Scanner {
};

// WITH virtual inheritance: ONE shared Device subobject
struct Printer_V : virtual Device {
    void print() { std::cout << "printing\n"; }
};

struct Scanner_V : virtual Device {
    void scan() { std::cout << "scanning\n"; }
};

struct PrintScanner_Good : Printer_V, Scanner_V {
};

int main() {
    PrintScanner_Bad ps_bad;
    // ps_bad.id = 42;  // ERROR: ambiguous — which Device::id?
    ps_bad.Printer::id = 1;
    ps_bad.Scanner::id = 2;
    std::cout << "Printer::id=" << ps_bad.Printer::id
              << " Scanner::id=" << ps_bad.Scanner::id << "\n";

    PrintScanner_Good ps_good;
    ps_good.id = 42;  // OK: single shared Device subobject
    ps_good.init();
    ps_good.print();
    ps_good.scan();
}
```

Output:

```
Printer::id=1 Scanner::id=2
Device::init id=42
printing
scanning
```

With virtual inheritance, `Device` becomes a **virtual base**, and the most-derived class
(`PrintScanner_Good`) is responsible for constructing it. The compiler generates a hidden vbase
pointer (stored in the vtable or as a separate vptr) to locate the shared `Device` subobject at
runtime. This adds one level of indirection to every access of a virtual base member [N4950
§11.7.1].

:::warning
Virtual inheritance adds runtime cost: accessing members of a virtual base requires an
extra indirection through the vbase offset table. Construction order is also affected — virtual
bases are constructed by the most-derived class, before any non-virtual base classes [N4950
§11.9.3]. Avoid virtual inheritance unless the diamond pattern is genuinely needed.
:::

## 2.7 `override`, `final`, and Name Hiding

A derived class member function with the **same name** as a base class function **hides** all base
class overloads with that name, regardless of signature [N4950 §11.8.3]. This is one of the most
insidious bugs in C++ inheritance:

```cpp
#include <iostream>

struct Base {
    virtual void process(int x) { std::cout << "Base::process(int): " << x << "\n"; }
    virtual void process(double x) { std::cout << "Base::process(double): " << x << "\n"; }
    virtual ~Base() = default;
};

struct Derived_Wrong : Base {
    // This HIDES both Base::process overloads — does NOT override either
    void process(int x) { std::cout << "Derived::process(int): " << x << "\n"; }
};

struct Derived_Right : Base {
    // 'override' verifies this matches a base class virtual function
    void process(int x) override { std::cout << "Derived_Right::process(int): " << x << "\n"; }

    // Bring remaining base overloads into scope
    using Base::process;
};

int main() {
    Derived_Wrong dw;
    dw.process(1);      // OK: calls Derived_Wrong::process(int)
    // dw.process(1.5);  // ERROR: Base::process(double) is hidden!

    Derived_Right dr;
    dr.process(1);      // Calls Derived_Right::process(int)
    dr.process(1.5);    // OK: 'using Base::process' makes it visible
}
```

The `using Base::process;` declaration in `Derived_Right` un-hides the remaining overloads from
`Base`. Without it, only the derived-class version is visible in overload resolution. This hiding
applies even when the derived function is `virtual` and does override one specific overload — all
other overloads are still hidden.

:::tip
Best Practice When overriding a base class function that participates in overloading, always
add `using Base::function_name;` in the derived class to avoid accidentally hiding sibling
overloads. The `override` keyword catches signature mismatches but does not prevent hiding.
:::

## Common Pitfalls

**1. Slicing through container value semantics:** `std::vector&lt;Base>` stores `Base` objects.
Pushing a `Derived` object slices it. Use `std::vector&lt;std::unique_ptr&lt;Base>>` or
`std::vector&lt;Base*>` to store polymorphic objects.

**2. Copying polymorphic objects:** The compiler-generated copy constructor performs a memberwise
copy of the static type. To correctly copy a polymorphic object through a base pointer, you need a
**virtual `clone()` method** (the Prototype pattern):

```cpp
struct Cloneable {
    virtual ~Cloneable() = default;
    virtual std::unique_ptr<Cloneable> clone() const = 0;
};

struct Concrete : Cloneable {
    int data{};
    std::unique_ptr<Cloneable> clone() const override {
        return std::make_unique<Concrete>(*this);
    }
};
```

**3. Deleting through a non-virtual destructor:** This is undefined behavior per [N4950 §11.4.7].
The base destructor does not run, leaking resources. Always declare `virtual ~Base() = default;` on
any class intended as a polymorphic base.

## See Also

- [Virtual Functions and vtables](./1_vtables.md)
- [Devirtualization and Final Specifiers](./3_devirtualization.md)

:::

:::

:::

:::

:::

:::
