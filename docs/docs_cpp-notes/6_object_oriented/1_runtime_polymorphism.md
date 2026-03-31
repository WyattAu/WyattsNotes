---
title: "Runtime Polymorphism"
date: 2026-03-31
tags: [C++]
categories: [C++]
slug: /cpp-notes/object-oriented/runtime-polymorphism
---

import CodeBlock from "@theme/CodeBlock";

# Runtime Polymorphism

Runtime polymorphism is the mechanism by which a single interface (a base-class function) resolves to different concrete implementations at program execution time, based on the **dynamic type** of the object. C++ implements this primarily through **virtual functions** and the **vtable** dispatch mechanism. This module covers the vtable ABI, virtual destructors, devirtualization, RTTI, and the C++23 deducing-this feature as a replacement for the CRTP pattern.

---

## 1. Virtual Functions and Dispatch Tables (vtables)

### 1.1 The `virtual` Keyword

A member function declared `virtual` in a base class enables **dynamic dispatch**: the function called depends on the **runtime type** of the object, not the static type of the pointer or reference through which it is invoked [N4950 §13.3.2].

```cpp
#include <iostream>

struct Base {
    virtual void greet() const {
        std::cout << "Base\n";
    }
    virtual ~Base() = default;
};

struct Derived : Base {
    void greet() const override {
        std::cout << "Derived\n";
    }
};

int main() {
    Base b;
    Derived d;

    Base& ref_to_d = d;
    ref_to_d.greet();
    Base* ptr_to_d = &d;
    ptr_to_d->greet();
}
```

Output:

```
Derived
Derived
```

When `greet()` is called through a `Base&` or `Base*` that actually refers to a `Derived` object, the **virtual dispatch mechanism** selects `Derived::greet`. This selection occurs at runtime, not at compile time.

### 1.2 The vptr/vtable Mechanism

The implementation of virtual dispatch is not specified by the C++ Standard — the Standard only prescribes the _observable behavior_. However, virtually every mainstream compiler (GCC, Clang, MSVC) uses the **vtable** (virtual function table) model, codified in the [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html).

The mechanism works as follows:

1. **One vtable per polymorphic class.** The compiler generates a hidden static array of function pointers — the vtable — for every class that has at least one virtual function or inherits from a polymorphic class.

2. **One vptr per object instance.** Every object of a polymorphic class contains a hidden pointer (the vptr) to its class's vtable. The vptr is set by the constructor.

3. **Dispatch is a two-step indirect call:** When a virtual function `f` is called through a pointer `p`, the compiler emits code equivalent to `(*p->vptr[offset_of_f])(p)`. This is a single indirect function call.

$$
\text{dispatch cost} = 1 \text{ memory load (vptr)} + 1 \text{ indexed load (function pointer)} + 1 \text{ indirect call}
$$

| Component  | Description                                                 |
| ---------- | ----------------------------------------------------------- |
| **vtable** | Static array of function pointers; one per class            |
| **vptr**   | Hidden pointer in each object; points to the class's vtable |
| **Slot**   | Each virtual function occupies a fixed index in the vtable  |
| **Thunks** | Compiler-generated stubs that adjust `this` before dispatch |

:::info ABI Note
The Itanium C++ ABI (used by GCC and Clang on all platforms except Windows) mandates that the vptr is at offset 0 within the object (before any data members). MSVC uses a similar but incompatible layout on Windows.
:::

### 1.3 Vtable Layout: `sizeof` Demonstration

The following program demonstrates the vptr overhead and the layout of vtables across an inheritance hierarchy:

```cpp
#include <iostream>

struct NonVirtual {
    int x;
    int y;
};

struct EmptyVirtual {
    virtual void f() {}
    virtual ~EmptyVirtual() = default;
};

struct SingleInheritance : EmptyVirtual {
    int z;
    void f() override {}
};

struct MultipleBases {
    virtual void g() {}
    virtual ~MultipleBases() = default;
};

struct DiamondBase1 {
    virtual void a() {}
    virtual ~DiamondBase1() = default;
};

struct DiamondBase2 {
    virtual void b() {}
    virtual ~DiamondBase2() = default;
};

struct DiamondDerived : DiamondBase1, DiamondBase2 {
    void a() override {}
    void b() override {}
    virtual void c() {}
};

int main() {
    std::cout << "NonVirtual:        " << sizeof(NonVirtual) << " bytes\n";
    std::cout << "EmptyVirtual:      " << sizeof(EmptyVirtual) << " bytes\n";
    std::cout << "SingleInheritance: " << sizeof(SingleInheritance) << " bytes\n";
    std::cout << "MultipleBases:     " << sizeof(MultipleBases) << " bytes\n";
    std::cout << "DiamondDerived:    " << sizeof(DiamondDerived) << " bytes\n";
}
```

Typical output on a 64-bit platform (Itanium ABI, LP64):

```
NonVirtual:        8 bytes
EmptyVirtual:      16 bytes
SingleInheritance: 24 bytes
MultipleBases:     16 bytes
DiamondDerived:    32 bytes
```

Analysis:

- `NonVirtual`: two `int` members = $2 \times 4 = 8$ bytes. No vptr.
- `EmptyVirtual`: one vptr (8 bytes) + padding for alignment = 16 bytes. Even with no data members, a polymorphic class pays the vptr cost.
- `SingleInheritance`: vptr (8) + `int z` (4) + padding (4) = 16 bytes. The derived class **reuses** the base's vptr — no additional vptr is added for single inheritance.
- `MultipleBases`: one vptr = 16 bytes (with padding).
- `DiamondDerived`: **two** vptrs (one per polymorphic base) + padding = 32 bytes. Each base class subobject carries its own vptr.

### 1.4 Cost of Virtual Dispatch

Every virtual call involves:

| Step                       | Cost                                    |
| -------------------------- | --------------------------------------- |
| Load vptr from object      | 1 memory access (may hit L1 cache)      |
| Index into vtable          | 1 arithmetic op + 1 memory access       |
| Indirect call              | 1 branch (may be mispredicted)          |
| **Total extra vs. direct** | ~2–5 cycles on modern hardware (cached) |

The primary costs are **indirection** (preventing inlining) and **branch misprediction** (the CPU cannot predict which function will be called at the indirect branch). In tight loops, this can be measurable.

```cpp
#include <chrono>
#include <iostream>
#include <vector>

struct Base {
    virtual double compute(double x) const { return x * x; }
    virtual ~Base() = default;
};

struct Derived : Base {
    double compute(double x) const override { return x * x * x; }
};

struct NonVirtualBase {
    double compute(double x) const { return x * x; }
};

struct NonVirtualDerived : NonVirtualBase {
    double compute(double x) const { return x * x * x; }
};

template <typename T>
double benchmark(const std::vector<T*>& objects, int iterations) {
    auto start = std::chrono::high_resolution_clock::now();
    volatile double sink = 0;
    for (int i = 0; i < iterations; ++i) {
        for (auto* obj : objects) {
            sink += obj->compute(1.0000001);
        }
    }
    auto end = std::chrono::high_resolution_clock::now();
    std::chrono::duration<double> elapsed = end - start;
    return elapsed.count();
}

int main() {
    constexpr int N = 1000;
    constexpr int ITERS = 100000;

    std::vector<Base*> virtual_objects;
    std::vector<NonVirtualBase*> nonvirtual_objects;
    virtual_objects.reserve(N);
    nonvirtual_objects.reserve(N);

    for (int i = 0; i < N; ++i) {
        virtual_objects.push_back(new Derived{});
        nonvirtual_objects.push_back(new NonVirtualDerived{});
    }

    double vt = benchmark(virtual_objects, ITERS);
    double nvt = benchmark(nonvirtual_objects, ITERS);

    std::cout << "Virtual dispatch:   " << vt << " s\n";
    std::cout << "Non-virtual call:   " << nvt << " s\n";
    std::cout << "Ratio:              " << vt / nvt << "x\n";

    for (auto* p : virtual_objects) delete p;
    for (auto* p : nonvirtual_objects) delete p;
}
```

:::warning
The actual performance difference depends heavily on compiler optimization levels, CPU branch prediction accuracy, and whether the compiler can **devirtualize** the call (see Section 3). With `-O2` or `-O3`, modern compilers may eliminate the virtual dispatch entirely if the dynamic type is provable.
:::

### 1.5 The `final` Keyword

The `final` specifier has two uses [N4950 §11.7.4]:

1. **On a class:** prevents the class from being used as a base class.
2. **On a virtual member function:** prevents the function from being overridden in a derived class.

```cpp
#include <iostream>

struct Base {
    virtual void f() const { std::cout << "Base::f\n"; }
};

struct Mid : Base {
    void f() const final { std::cout << "Mid::f (final)\n"; }
};

struct Leaf final : Mid {
};

int main() {
    Leaf obj;
    obj.f();
}
```

The following would be ill-formed:

```cpp
struct Derived : Leaf { };
// error: cannot derive from 'final' class 'Leaf'

struct Other : Mid {
    void f() const override { }
    // error: declaration of 'f' overrides a 'final' function
};
```

### 1.6 The `override` Keyword

The `override` specifier [N4950 §11.7.3] instructs the compiler to verify that the function actually overrides a virtual function from a base class. It catches accidental mismatches in signature or constness:

```cpp
#include <iostream>

struct Base {
    virtual void process(int x) const { std::cout << "Base: " << x << "\n"; }
    virtual ~Base() = default;
};

struct Correct : Base {
    void process(int x) const override { std::cout << "Correct: " << x << "\n"; }
};

struct Wrong : Base {
    void process(int x) { std::cout << "Wrong (non-const)\n"; }
    // Missing 'const' — this HIDES Base::process, does NOT override it.
    // The compiler would NOT warn without 'override'.
    // Adding 'override' here would produce an error.
};
```

:::tip Best Practice
Always use `override` on every function intended to override a base-class virtual function. This eliminates an entire class of bugs caused by signature mismatches.
:::

---

## 2. Inheritance, Object Slicing, and Virtual Destructors

### 2.1 Single and Multiple Inheritance

A derived class inherits from one or more base classes [N4950 §11.7]. Each base class subobject is laid out in memory according to the inheritance graph.

**Single inheritance:** The derived class extends the base by appending its own members after the base subobject. Only one vptr is needed (shared with the base).

**Multiple inheritance:** Each base class subobject retains its own vptr (if polymorphic). The derived object contains multiple base subobjects, each at a distinct offset.

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
With multiple inheritance, `pa` and `pb` point to **different addresses** within the same `C` object — they point to the respective base subobjects. The compiler generates **thunks** (small adjustment stubs) to correct the `this` pointer when dispatching virtual calls through non-primary bases.
:::

### 2.2 Object Slicing

Object slicing occurs when a derived object is copied into a base-class object by value. Only the base-class subobject is copied; the derived portion is discarded [N4950 §11.7.3.2].

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

When `d` is passed by value to `process_by_value`, only the `Animal` subobject is copied. The vptr is set to `Animal`'s vtable, so `a.speak()` dispatches to `Animal::speak`. The `Dog`-specific data (`breed`) and the `Dog::speak` override are lost.

:::warning
Never pass polymorphic objects by value. Always use pointers (`Animal*`) or references (`Animal&` / `const Animal&`) to preserve the dynamic type.
:::

### 2.3 Virtual Destructors

If a derived object is deleted through a base-class pointer and the base class's destructor is **not** `virtual`, the behavior is undefined [N4950 §11.4.7]:

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

With `BadBase`, only `BadBase::~BadBase()` is called — `BadDerived::~BadDerived()` never runs, causing resource leaks. With `GoodBase`, the virtual dispatch mechanism selects `GoodDerived::~GoodDerived()`, which then implicitly calls `GoodBase::~GoodBase()`.

:::tip Rule
If a class has **any** virtual function, its destructor **must** also be virtual. If a class is designed to be a polymorphic base class, always declare `virtual ~Base() = default;` (or provide a virtual destructor with a body).
:::

### 2.4 Pure Virtual Functions and Abstract Classes

A **pure virtual function** is declared using the `= 0` syntax [N4950 §13.4.4]. A class with at least one pure virtual function is an **abstract class** — it cannot be instantiated directly.

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

- A pure virtual function **may** have a definition in the base class. The class is still abstract, but derived classes can explicitly call it via `Base::f()`.
- A derived class that does not provide an override for all inherited pure virtual functions is itself abstract.
- Abstract classes can have data members and non-pure virtual functions.

### 2.5 Interfaces in C++

C++ does not have a native `interface` keyword (unlike Java or C#). An **interface** in C++ is a convention: a class with only pure virtual functions and no data members.

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

:::info Convention
Prefixing interface names with `I` (e.g., `ISerializable`) is a common C++ convention borrowed from COM and C#. It is not mandated by the Standard. Alternatives include suffixes like `-able` (e.g., `Serializable`).
:::

---

## 3. Devirtualization and Final Specifiers

### 3.1 What is Devirtualization?

**Devirtualization** is a compiler optimization that replaces a virtual function call with a **direct call** (or inlines it), eliminating the vtable lookup overhead. This is possible when the compiler can prove the dynamic type of the object at compile time.

The C++ Standard does not define devirtualization — it is a pure optimization. However, the Standard's type system and specifiers provide the information compilers need to perform it.

### 3.2 Conditions for Devirtualization

A compiler may devirtualize when it can prove that the dynamic type equals the static type:

1. **The object has a known final type.** If the class is marked `final` or the function is marked `final`, the compiler knows there is no override.
2. **The static type is exact.** When calling a virtual function on a local variable (not through a pointer or reference), the compiler knows the exact type.
3. **Speculative devirtualization.** The compiler may emit a type check at runtime (using the vptr or type info) and branch to a direct call on the likely path, falling back to virtual dispatch on the unlikely path.

```cpp
#include <iostream>

struct Base {
    virtual int compute(int x) const { return x * 2; }
    virtual ~Base() = default;
};

struct Derived final : Base {
    int compute(int x) const override { return x * 3; }
};

struct Other : Base {
    int compute(int x) const override { return x * 4; }
};

int main() {
    Derived d;

    int r1 = d.compute(10);
    // The compiler knows 'd' is a Derived, so it can devirtualize.
    // This is equivalent to a direct call to Derived::compute.

    Base* bp = &d;
    int r2 = bp->compute(10);
    // Even through a pointer, if the compiler can see that bp points
    // to a Derived (and Derived is final), it can devirtualize.

    Base* bp2 = /* opaque source */;
    int r3 = bp2->compute(10);
    // Cannot devirtualize: the dynamic type is unknown at compile time.

    std::cout << r1 << " " << r2 << " " << r3 << "\n";
    (void)r1; (void)r2; (void)r3;
}
```

### 3.3 `final` as a Devirtualization Hint

The `final` specifier provides the strongest guarantee to the compiler. When a class or virtual function is marked `final`, the compiler can prove that no further override exists:

```cpp
#include <iostream>

struct Renderer {
    virtual void draw() const { std::cout << "Renderer::draw\n"; }
    virtual ~Renderer() = default;
};

struct OpenGLRenderer final : Renderer {
    void draw() const override { std::cout << "OpenGL::draw\n"; }
};

void render_scene(const Renderer* r) {
    // If the compiler can see that r points to an OpenGLRenderer
    // (which is final), it devirtualizes this call.
    r->draw();
}

int main() {
    OpenGLRenderer gl;
    render_scene(&gl);
}
```

Compiled with `-O2` on GCC or Clang, the call `r->draw()` inside `render_scene` is typically inlined entirely — no indirect call is emitted.

### 3.4 Profile-Guided Optimization (PGO)

Even when the compiler cannot prove the exact type statically, **profile-guided optimization** (PGO) can enable speculative devirtualization:

1. The program is compiled with instrumentation (`-fprofile-instr-generate`).
2. The program is run on representative workloads to collect profiling data.
3. The program is recompiled with the profile data (`-fprofile-use`).

During the second compilation, the compiler knows the most likely dynamic type at each virtual call site and can emit a speculative direct call:

```cpp
#include <iostream>
#include <vector>
#include <memory>

struct Shape { virtual void draw() const = 0; virtual ~Shape() = default; };
struct Circle : Shape { void draw() const override { std::cout << "O"; } };
struct Square : Shape { void draw() const override { std::cout << "#"; } };
struct Triangle : Shape { void draw() const override { std::cout << "^"; } };

void render(const std::vector<std::unique_ptr<Shape>>& shapes) {
    for (const auto& s : shapes) {
        s->draw();
        // With PGO, if profiling shows 90% of calls dispatch to Circle::draw,
        // the compiler emits:
        //   if (s->vptr == Circle::vtable) { Circle::draw(s); } // likely
        //   else { s->vptr->draw(s); }                          // fallback
    }
}

int main() {
    std::vector<std::unique_ptr<Shape>> shapes;
    for (int i = 0; i < 100; ++i) shapes.push_back(std::make_unique<Circle>());
    for (int i = 0; i < 5; ++i) shapes.push_back(std::make_unique<Square>());
    for (int i = 0; i < 2; ++i) shapes.push_back(std::make_unique<Triangle>());

    render(shapes);
    std::cout << "\n";
}
```

### 3.5 Type-Based Devirtualization

Compilers can also devirtualize through **type propagation**. If a pointer is assigned from a known-type object and the compiler can track that no reassignment occurs, it can prove the dynamic type:

```cpp
#include <iostream>

struct B { virtual int f() const { return 1; } virtual ~B() = default; };
struct D : B { int f() const override { return 2; } };

int call_through_ref(const B& b) {
    // Cannot devirtualize: b's dynamic type is unknown.
    return b.f();
}

int call_local() {
    D d;
    // Compiler knows 'd' is a D. Devirtualized.
    return d.f();
}

int call_after_assign() {
    D d;
    B& ref = d;
    // Compiler can track ref -> d -> D. Devirtualized.
    return ref.f();
}

int main() {
    std::cout << call_local() << "\n";
    std::cout << call_after_assign() << "\n";
    std::cout << call_through_ref(D{}) << "\n";
}
```

:::tip Practical Advice
To enable maximum devirtualization:

- Mark leaf classes and leaf overrides as `final`.
- Prefer local objects over heap-allocated objects where possible.
- Use PGO for hot code paths where the dynamic type distribution is predictable.
- Compile with `-O2` or `-O3` (required for most devirtualization passes).
  :::

---

## 4. RTTI, dynamic_cast, and Typeid

### 4.1 Run-Time Type Information (RTTI)

RTTI is the mechanism by which the type of a polymorphic object can be queried at runtime [N4950 §7.6]. It is enabled by default on most compilers and can be disabled with `-fno-rtti` (GCC/Clang) or `/GR-` (MSVC).

RTTI provides two primary operators:

| Operator       | Purpose                                               |
| -------------- | ----------------------------------------------------- |
| `dynamic_cast` | Safe downcast with runtime type check                 |
| `typeid`       | Returns a `const std::type_info&` describing the type |

RTTI relies on the same vtable infrastructure used for virtual dispatch. Each polymorphic class's vtable contains a pointer to its `std::type_info` object.

:::warning RTTI Overhead
Disabling RTTI (`-fno-rtti`) reduces binary size (by removing type_info metadata) and may enable further optimizations. However, it also makes `dynamic_cast` and `typeid` unavailable for polymorphic types. Disabling RTTI does **not** eliminate the vtable or vptr — virtual dispatch still works.
:::

### 4.2 `dynamic_cast<T*>(ptr)` — Safe Downcast

`dynamic_cast<T*>(ptr)` converts a base-class pointer to a derived-class pointer. If the cast is invalid (the object is not of type `T` or a type derived from `T`), the result is `nullptr` [N4950 §7.6.1.7].

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
- For single inheritance, this is $O(1)$ — a single pointer comparison against the target `type_info`.
- For multiple inheritance, it may require traversing the base class list, costing $O(d)$ where $d$ is the depth of the inheritance tree (typically still very fast).

### 4.3 `dynamic_cast<T&>(ref)` — Reference Downcast

When `dynamic_cast` is applied to a reference, a failed cast throws `std::bad_cast` (defined in `<typeinfo>`) instead of returning `nullptr` [N4950 §7.6.1.7]:

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

:::info
`dynamic_cast<T&>` cannot return `nullptr` because references cannot be null. Throwing an exception is the only way to signal failure. This is why `dynamic_cast` on pointers is generally preferred — it allows the caller to check for failure without exception overhead.
:::

### 4.4 `typeid` Operator

The `typeid` operator [N4950 §7.6.1.8] returns a `const std::type_info&` describing the **dynamic type** of a polymorphic object (when applied to a dereferenced pointer or reference) or the **static type** (when applied to a type name or non-polymorphic object).

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
- `typeid` returns a reference to a `std::type_info` object, whose lifetime extends for the entire program.
- `std::type_index` (from `<typeindex>`) is a wrapper around `std::type_info` that provides value semantics and can be used as a key in associative containers.

:::warning
The `name()` member of `std::type_info` returns an implementation-defined string. It is useful for debugging but should not be parsed or compared. Use `std::type_index` for type comparisons.
:::

### 4.5 RTTI and `dynamic_cast` for the Visitor Pattern

When a traditional double-dispatch visitor is overkill, `dynamic_cast` chains can serve as a simpler (if less extensible) alternative:

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

:::tip
The `dynamic_cast`-based approach is simpler to implement than the classic Visitor pattern for small, stable type hierarchies. However, adding a new derived type requires updating every `dynamic_cast` chain. The Visitor pattern localizes changes: adding a new visitor doesn't modify existing types, and adding a new type doesn't modify existing visitors (it only requires extending the visitor interface).
:::

---

## 5. Explicit Object Parameters (Deducing This) and CRTP Replacement

### 5.1 The CRTP Pattern

The **Curiously Recurring Template Pattern (CRTP)** is a compile-time technique where a derived class passes itself as a template parameter to its base class. It enables static polymorphism — the base class can call methods on the derived class without virtual dispatch.

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
- Does not work with type erasure or heterogeneous containers (all types must be known at compile time).
- Cannot be used when the derived type is not known at the point of base class definition.

### 5.2 C++23 Deducing This

C++23 introduces **explicit object parameters** (also called "deducing this") [N4950 §11.4.8.3]. A member function can declare its object parameter explicitly using the `this` keyword in the parameter list:

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

- The syntax `this const Self& self` declares an **explicit object parameter**. The compiler deduces `Self` from the type of the object on which the member function is called.
- When `p.print()` is called, `Self` is deduced as `Point`, so `self` is `const Point&`.
- When `c.print()` is called, `Self` is deduced as `Circle`, so `self` is `const Circle&`.
- The base class can call `self.to_string()` directly — no `static_cast` needed.

### 5.3 CRTP vs Deducing This: Comparison

| Aspect                     | CRTP                                              | Deducing This (C++23)                          |
| -------------------------- | ------------------------------------------------- | ---------------------------------------------- |
| **Syntax**                 | `class Derived : Base<Derived>`                   | `void f(this const auto& self)`                |
| **Type access**            | `static_cast<const Derived&>(*this)`              | Direct: `self` is already the derived type     |
| **Boilerplate**            | High: each derived class repeats the template arg | Low: derived classes just inherit              |
| **Compile-time poly**      | Yes                                               | Yes                                            |
| **Requires template base** | Yes                                               | No                                             |
| **Value category**         | Can only bind to lvalues (const&)                 | Can preserve value category (`auto&&`, `auto`) |
| **Standard**               | C++98                                             | C++23                                          |

### 5.4 Value Category Preservation

A key advantage of deducing this over CRTP is the ability to preserve the value category of the object:

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

This is impossible with CRTP, which can only bind to `const Derived&` or `Derived&` — it cannot distinguish between lvalue and rvalue receivers.

### 5.5 Deducing This for a Fluent API Builder

Deducing this enables fluent builder patterns where the return type adapts to the most-derived class:

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

Without deducing this, each builder method in a base class would return `BuilderBase&`, breaking the chain when the derived class adds its own methods. CRTP solves this but with significant boilerplate. Deducing this solves it with minimal syntax.

### 5.6 Deducing This for Mixin Classes

Deducing this makes mixin classes straightforward — a mixin can provide methods that return the correct derived type without requiring CRTP:

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

:::tip
Deducing this eliminates the need for CRTP in most mixin and static-polymorphism use cases. Prefer deducing this in new C++23 code. Reserve CRTP for projects that must target pre-C++23 standards, or when explicit template instantiation control is needed.
:::

### 5.7 Summary: Runtime vs. Compile-Time Polymorphism

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

---

## References

- [N4950 §7.6] — Run-Time Type Information (`dynamic_cast`, `typeid`)
- [N4950 §7.6.1.7] — `dynamic_cast`
- [N4950 §7.6.1.8] — `typeid`
- [N4950 §11.4.7] — Destructors
- [N4950 §11.4.8.3] — Explicit object member functions (deducing this)
- [N4950 §11.7] — Derived classes
- [N4950 §11.7.3] — Virtual functions
- [N4950 §11.7.4] — `final` specifier
- [N4950 §13.3.2] — Virtual functions
- [N4950 §13.4.4] — Pure virtual functions and abstract classes
- [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html) — vtable layout specification
