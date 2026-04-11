---
title: Special Member Function Generation Rules
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: special-member-function-generation-rules
---

# Special Member Function Generation Rules

The compiler automatically generates special member functions (SMFs) — destructor, copy/move
constructors, and copy/move assignment operators — according to well-defined rules. Understanding
these rules is critical for writing classes that manage resources correctly.

## 3.1 The Rule of Five

A class with user-defined resource management must define or delete each of the five **special
member functions** (SMFs) [N4950 §11.4.5.3]:

1. Destructor: `~T()`
2. Copy constructor: `T(const T&)`
3. Copy assignment operator: `T& operator=(const T&)`
4. Move constructor: `T(T&&)` (since C++11)
5. Move assignment operator: `T& operator=(T&&)` (since C++11)

If any one of these is user-declared, the others are not implicitly generated under various
conditions, leading to potentially incorrect or surprising behavior.

## 3.2 Default Generation Rules

The compiler implicitly declares a default SMF if the class has no user-declared constructor,
destructor, copy/move operations, or other conditions that would trigger implicit deletion. The
exact rules are [N4950 §11.4.5.3]:

| SMF                  | Implicitly declared if...                                           | Implicitly defined as default if...                  | Implicitly deleted if...                                                                                                 |
| -------------------- | ------------------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| **Destructor**       | No user-declared destructor                                         | Trivial (all bases/members have trivial destructors) | Any base or member has deleted/inaccessible destructor                                                                   |
| **Copy constructor** | No user-declared move constructor or move assignment                | Trivial                                              | Any base/member has deleted copy ctor, or has move ctor, or volatile member                                              |
| **Copy assignment**  | No user-declared move constructor or move assignment                | Trivial                                              | Any base/member has deleted copy assign, or has move assign, or reference member, or volatile member                     |
| **Move constructor** | No user-declared copy ctor, copy assign, move assign, or destructor | Trivial                                              | Any base/member has deleted move ctor or inaccessible non-move ctor, or has copy-only semantics                          |
| **Move assignment**  | No user-declared copy ctor, copy assign, move ctor, or destructor   | Trivial                                              | Any base/member has deleted move assign or inaccessible non-move assign, or has copy-only semantics, or reference member |

:::warning
C++11 vs C++14+ Move Generation In C++11, if any SMF is user-declared, the move
constructor and move assignment are **not** implicitly declared. In C++14 and later, this remains
true — the Standard was not changed. The critical point: declaring a destructor suppresses implicit
move generation.
:::

## 3.3 `= default` and `= delete`

The `= default` specifier explicitly requests the compiler-generated default implementation [N4950
§11.4.5.2]. It can appear inside the class body or out-of-line. When applied out-of-line, the SMF is
only generated if it is odr-used.

The `= delete` specifier explicitly suppresses the SMF [N4950 §11.4.5.2]. Any use of a deleted
function is ill-formed.

```cpp
#include <cstdio>

class NonCopyable {
    int data_ = 0;
public:
    NonCopyable() = default;
    ~NonCopyable() = default;

    NonCopyable(const NonCopyable&) = delete;
    NonCopyable& operator=(const NonCopyable&) = delete;

    NonCopyable(NonCopyable&&) = default;
    NonCopyable& operator=(NonCopyable&&) = default;

    void set(int v) { data_ = v; }
    int get() const { return data_; }
};

int main() {
    NonCopyable a;
    a.set(42);

    NonCopyable b = std::move(a);   // OK: move constructor
    // NonCopyable c = a;            // error: copy constructor is deleted
    // a = b;                        // error: copy assignment is deleted
}
```

## 3.4 Implicit Deletion: A Complete Example

```cpp
#include <cstdio>
#include <string>

class HasRef {
    int& ref_;
public:
    explicit HasRef(int& r) : ref_(r) {}
    ~HasRef() = default;

    HasRef(const HasRef&) = default;
    HasRef& operator=(const HasRef&) = default;
    // Move constructor: implicitly DELETED (reference member)
    // Move assignment:  implicitly DELETED (reference member)
};

class HasUniquePtr {
    std::unique_ptr<int> ptr_;
public:
    explicit HasUniquePtr(int v) : ptr_(std::make_unique<int>(v)) {}
    ~HasUniquePtr() = default;
    // Copy constructor: implicitly DELETED (unique_ptr has deleted copy ctor)
    // Copy assignment:  implicitly DELETED
};

class HasVolatile {
    volatile int v_ = 0;
public:
    // Copy constructor: implicitly DELETED (volatile member)
    // Copy assignment:  implicitly DELETED (volatile member)
};

int main() {
    int x = 10;
    HasRef hr(x);
    HasRef hr2 = hr;       // OK: copy is default
    // HasRef hr3 = std::move(hr);  // error: move is deleted
}
```

## 3.5 Proper Rule of Five Implementation

```cpp
#include <cstdio>
#include <cstring>
#include <utility>

class Buffer {
    char* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t capacity_ = 0;

    void grow(std::size_t min_cap) {
        std::size_t new_cap = capacity_ ? capacity_ * 2 : 16;
        if (new_cap < min_cap) new_cap = min_cap;
        char* new_data = new char[new_cap];
        std::memcpy(new_data, data_, size_);
        delete[] data_;
        data_ = new_data;
        capacity_ = new_cap;
    }

public:
    Buffer() = default;

    explicit Buffer(std::size_t n, char fill = 0)
        : data_(new char[n]), size_(n), capacity_(n)
    {
        std::memset(data_, fill, n);
    }

    ~Buffer() { delete[] data_; }

    Buffer(const Buffer& other)
        : data_(new char[other.capacity_])
        , size_(other.size_)
        , capacity_(other.capacity_)
    {
        std::memcpy(data_, other.data_, other.size_);
    }

    Buffer& operator=(const Buffer& other) {
        if (this != &other) {
            Buffer tmp(other);
            std::swap(data_, tmp.data_);
            std::swap(size_, tmp.size_);
            std::swap(capacity_, tmp.capacity_);
        }
        return *this;
    }

    Buffer(Buffer&& other) noexcept
        : data_(other.data_)
        , size_(other.size_)
        , capacity_(other.capacity_)
    {
        other.data_ = nullptr;
        other.size_ = 0;
        other.capacity_ = 0;
    }

    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            capacity_ = other.capacity_;
            other.data_ = nullptr;
            other.size_ = 0;
            other.capacity_ = 0;
        }
        return *this;
    }

    void push_back(char c) {
        if (size_ == capacity_) grow(size_ + 1);
        data_[size_++] = c;
    }

    std::size_t size() const { return size_; }
    char operator[](std::size_t i) const { return data_[i]; }
};

int main() {
    Buffer a;
    a.push_back('H');
    a.push_back('i');

    Buffer b = a;                          // copy constructor
    Buffer c = std::move(b);               // move constructor
    a = c;                                 // copy assignment
    c = Buffer(4, 'X');                    // move assignment (from temporary)

    std::printf("a: ");
    for (std::size_t i = 0; i < a.size(); ++i)
        std::printf("%c", a[i]);
    std::printf("\n");
}
```

## 3.6 Trivial vs Non-Trivial Special Member Functions

A special member function is **trivial** if it is not user-provided, its class has no virtual
functions or virtual base classes, and all base classes and members have trivial versions of the
same SMF [N4950 §11.4.5.3]. Trivial SMFs have important implications:

- **Trivially copyable types** can be copied with `memcpy` — this is the foundation of
  `std::is_trivially_copyable` [N4950 §20.15.4.3].
- **Trivially destructible types** do not require destructor calls during stack unwinding.
- **Trivial default constructors** allow zero-initialization and static storage duration objects to
  be placed in `.bss` (zero-initialized memory segment).

```cpp
#include <iostream>
#include <type_traits>
#include <cstring>

struct Trivial {
    int a;
    double b;
};
// All SMFs are trivial

struct NonTrivial {
    int* ptr;
    NonTrivial() : ptr(new int(0)) {}
    ~NonTrivial() { delete ptr; }
};
// Destructor is non-trivial, making the class non-trivially-copyable

struct VirtualBase {
    virtual void foo() {}
    int x;
};
// Virtual function makes all SMFs non-trivial

int main() {
    std::cout << std::boolalpha;
    std::cout << "Trivial is trivially copyable: "
              << std::is_trivially_copyable_v&lt;Trivial&gt; << "\n";         // true
    std::cout << "NonTrivial is trivially copyable: "
              << std::is_trivially_copyable_v&lt;NonTrivial&gt; << "\n";     // false
    std::cout << "VirtualBase is trivially copyable: "
              << std::is_trivially_copyable_v&lt;VirtualBase&gt; << "\n";    // false

    // Trivial types can be memcpy'd
    Trivial t1{42, 3.14};
    Trivial t2;
    std::memcpy(&amp;t2, &amp;t1, sizeof(Trivial));  // safe for trivially copyable types
    std::cout << "t2.a: " << t2.a << ", t2.b: " << t2.b << "\n";
    // Output: t2.a: 42, t2.b: 3.14
}
```

## 3.7 The Rule of Zero

The **Rule of Zero** states that classes that do not directly manage resources should not declare
any special member functions. Instead, they should compose resource-owning standard library types
(`std::string`, `std::vector`, `std::unique_ptr`, `std::shared_ptr`) which handle their own resource
management correctly [N4950 §11.4.5.3]:

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <memory>
#include <algorithm>

class UserDatabase {
    std::string name_;
    std::vector&lt;std::string&gt; users_;
    std::unique_ptr&lt;struct Impl&gt; impl_;
public:
    UserDatabase(std::string name) : name_(std::move(name)) {}

    void add_user(std::string user) {
        users_.push_back(std::move(user));
    }

    std::size_t user_count() const { return users_.size(); }

    // No SMFs declared — compiler generates:
    // - Trivial? No (std::string, std::vector have non-trivial SMFs)
    // - Correct? Yes (each member handles its own resource management)
    // - Move constructor: generated (moves name_, users_, impl_)
    // - Move assignment: generated (moves each member)
    // - Copy constructor: DELETED (unique_ptr has deleted copy)
    // - Copy assignment: DELETED (unique_ptr has deleted copy)
    // - Destructor: generated (destroys each member)
};

int main() {
    UserDatabase db("production");
    db.add_user("alice");
    db.add_user("bob");
    std::cout << "Users: " << db.user_count() << "\n";

    // Move works (compiler-generated)
    UserDatabase db2 = std::move(db);
    std::cout << "After move, db2 users: " << db2.user_count() << "\n";

    // Copy does NOT compile (unique_ptr blocks implicit copy)
    // UserDatabase db3 = db2;  // error: use of deleted function
}
```

### When to Prefer Rule of Zero Over Rule of Five

Use the Rule of Zero whenever possible. Only fall back to the Rule of Five when:

1. You need to manage a raw resource directly (e.g., a file descriptor, a network socket, a custom
   allocator).
2. You need to support copying of a type that contains a `unique_ptr` (by implementing a deep copy
   in the copy constructor).
3. You need non-default move semantics (e.g., a type that caches computed data and wants to transfer
   the cache).

## 3.8 The Destructor Destructor-Ordering Guarantee

C++ guarantees that members are destroyed in **reverse order of construction**, and base classes are
destroyed after all members [N4950 §11.9.6]. This ordering is deterministic and does not depend on
the order of member declarations in the destructor body:

```cpp
#include <iostream>

struct Member {
    const char* name;
    explicit Member(const char* n) : name(n) { std::cout << "  ctor: " << name << "\n"; }
    ~Member() { std::cout << "  dtor: " << name << "\n"; }
};

struct Base {
    Member b;
    explicit Base(const char* n) : b(n) {}
    ~Base() { std::cout << "  dtor: Base\n"; }
};

struct Derived : Base {
    Member m1;
    Member m2;
    Derived() : Base("base"), m1("member1"), m2("member2") {}
    ~Derived() { std::cout << "  dtor: Derived\n"; }
};

int main() {
    std::cout << "Construction:\n";
    Derived d;
    std::cout << "Destruction:\n";
}
// Construction:
//   ctor: base
//   ctor: member1
//   ctor: member2
// Destruction:
//   dtor: Derived  (body runs first)
//   dtor: member2  (reverse of construction)
//   dtor: member1
//   dtor: base     (after all members)
```

### Destructor Order and Exception Safety

The reverse-destruction-order guarantee is critical for exception safety. If a member's destructor
throws, all previously-constructed members (constructed after it) have already been destroyed. No
double-destruction occurs:

```cpp
#include <iostream>
#include <stdexcept>

struct ThrowingDtor {
    ~ThrowingDtor() {
        std::cout << "  ~ThrowingDtor (throws)\n";
        throw std::runtime_error{"dtor threw"};
    }
};

struct Container {
    ThrowingDtor td;
    int value = 42;
    ~Container() {
        std::cout << "  ~Container start\n";
        // value is destroyed AFTER td (reverse order)
        // If td's dtor throws, value has already been destroyed
    }
};

int main() {
    try {
        Container c;
    } catch (const std::exception&amp; e) {
        std::cout << "caught: " << e.what() << "\n";
    }
}
```

## 3.9 `= default` Out-of-Line: Lazy Generation

When `= default` is used **out-of-line** (outside the class body), the SMF is only generated if it
is odr-used. This can reduce compile time and binary size for types with complex implicitly-
generated SMFs:

```cpp
#include <iostream>
#include <string>
#include <vector>

class BigData {
    std::vector&lt;std::string&gt; data_;
    std::vector&lt;double&gt; metrics_;
public:
    BigData() = default;
    ~BigData();  // declared but not defined here

    void add(const std::string&amp; s, double m) {
        data_.push_back(s);
        metrics_.push_back(m);
    }
};

// Out-of-line default: only generated if ~BigData() is actually called
// This saves compilation time if BigData is only used in ways that don't
// require destruction (e.g., as a stack variable that is always moved from)
BigData::~BigData() = default;

int main() {
    BigData bd;
    bd.add("test", 1.0);
    std::cout << "entries: " << bd.data_.size() << "\n";
}
```

## 3.10 P0609R3: Fixing the "Destructors Suppress Move" Problem

C++11 introduced a defect: declaring a destructor (even `= default`) suppresses implicit move
constructor and move assignment generation. This was a pragmatic decision to avoid breaking C++03
code that relied on implicit copy semantics, but it creates a common surprise:

```cpp
#include <iostream>
#include <utility>

struct Surprise {
    int* data = nullptr;
    Surprise() : data(new int(42)) {}
    ~Surprise() { delete data; }  // This suppresses implicit move generation!

    // Before C++11: implicit copy ctor and copy assign generated
    // In C++11+: still only implicit copy ctor and copy assign!
    // The move constructor and move assignment are NOT implicitly generated
    // because the destructor is user-declared.
};

int main() {
    Surprise a;
    Surprise b = std::move(a);  // Calls COPY constructor, not move!
    // a.data is still valid (not nullptr) — the copy constructor was called
    std::cout << "a.data: " << (a.data ? *a.data : -1) << "\n";
    std::cout << "b.data: " << (b.data ? *b.data : -1) << "\n";
    // Both a.data and b.data point to the same int — double delete bug!
    // This is a classic resource management error caused by suppressed move generation.
}
```

### The Fix: Explicitly Default or Delete Moves

Always explicitly declare move operations when you declare a destructor:

```cpp
#include <iostream>
#include <utility>

struct Correct {
    int* data = nullptr;
    Correct() : data(new int(42)) {}
    ~Correct() { delete data; }

    // Explicitly default the move operations to prevent the suppression bug
    Correct(Correct&amp;&amp; o) noexcept : data(o.data) { o.data = nullptr; }
    Correct&amp; operator=(Correct&amp;&amp; o) noexcept {
        if (this != &amp;o) {
            delete data;
            data = o.data;
            o.data = nullptr;
        }
        return *this;
    }

    // Delete copy (or implement deep copy) since we manage a resource
    Correct(const Correct&amp;) = delete;
    Correct&amp; operator=(const Correct&amp;) = delete;
};

int main() {
    Correct a;
    Correct b = std::move(a);  // Calls move constructor
    std::cout << "a.data: " << (a.data ? "non-null" : "null") << "\n";  // null
    std::cout << "b.data: " << (b.data ? "non-null" : "null") << "\n";  // non-null
}
```

## Common Pitfalls

### 1. Copy Assignment Without Self-Assignment Check

A copy assignment operator that does not check for self-assignment (`a = a`) can cause resource
corruption. The copy-and-swap idiom naturally handles self-assignment, but manual implementations
must check:

```cpp
#include <cstring>

struct Bad {
    char* data;
    std::size_t size;

    Bad&amp; operator=(const Bad&amp; other) {
        // BUG: no self-assignment check
        delete[] data;           // frees our own data
        data = new char[other.size];  // allocates new buffer
        std::memcpy(data, other.data, other.size);  // reads from freed memory!
        size = other.size;
        return *this;
    }
};

struct Good {
    char* data;
    std::size_t size;

    Good&amp; operator=(const Good&amp; other) {
        if (this != &amp;other) {  // self-assignment check
            delete[] data;
            data = new char[other.size];
            std::memcpy(data, other.data, other.size);
            size = other.size;
        }
        return *this;
    }
};
```

### 2. Move Assignment Without Cleanup

A move assignment operator that does not release the current resource before taking ownership of the
source's resource causes a memory leak:

```cpp
#include <cstring>

struct Leaky {
    char* data = nullptr;
    std::size_t size = 0;

    Leaky&amp; operator=(Leaky&amp;&amp; other) noexcept {
        // BUG: forgot to delete[] data — memory leak!
        data = other.data;
        size = other.size;
        other.data = nullptr;
        other.size = 0;
        return *this;
    }
};
```

### 3. `= default` and Non-Defaultable Members

If a class has a reference member or `const` member, the default constructor cannot be generated
(even with `= default`), because there is no way to default-initialize these members:

```cpp
#include <cstdio>

struct WithRef {
    int&amp; ref;
    WithRef(int&amp; r) : ref(r) {}
    // WithRef() = default;  // ERROR: cannot default-initialize reference
};

struct WithConst {
    const int value;
    // WithConst() = default;  // ERROR: cannot default-initialize const member
    WithConst(int v) : value(v) {}
};

int main() {
    int x = 42;
    WithRef wr(x);
    WithConst wc(10);
    std::printf("ref: %d, const: %d\n", wr.ref, wc.value);
}
```

### 4. Implicit Move and Return Statements

When a function returns by value and the return expression names a local variable, the compiler
first tries NRVO, then falls back to treating the return as an implicit move (if the move
constructor is available). If the move constructor is deleted or not declared, it falls back to
copy. Understanding this chain prevents the common mistake of writing `return std::move(local)`:

```cpp
#include <iostream>
#include <utility>

struct Widget {
    int id;
    Widget(int i) : id(i) { std::cout << "  Widget(" << id << ") ctor\n"; }
    Widget(const Widget&amp; o) : id(o.id) { std::cout << "  Widget(" << id << ") copy\n"; }
    Widget(Widget&amp;&amp; o) noexcept : id(o.id) { o.id = 0; std::cout << "  Widget(" << id << ") move\n"; }
};

Widget factory() {
    Widget local(42);
    return local;  // NRVO or implicit move — correct
    // return std::move(local);  // WRONG: prevents NRVO, always moves
}

int main() {
    Widget w = factory();
    std::cout << "w.id: " << w.id << "\n";
}
```

## See Also

- [Access Control and Friendship](./2_access_control.md)
- [Operator Overloading](./4_operator_overloading.md)

:::
