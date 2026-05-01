---
title: Move Constructors, Assignment, Swap Idiom
description:
  "C++: Move Constructors, Assignment, Swap Idiom — 6.1 Move Constructor: `T(T&& other)`; Proof That Moved-From Objects Are in a Valid-But-Unspecified State."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: move-constructors-assignment-swap-idiom
---

# Move Constructors, Assignment, Swap Idiom

Move semantics allow resources to be transferred between objects without copying. The move
constructor steals resources from a source object, leaving it in a valid but unspecified state. The
swap idiom generalizes this pattern and serves as a building block for exception-safe assignment and
efficient algorithms.

## 6.1 Move Constructor: `T(T&& other)`

The move constructor transfers ownership of resources from `other` to the newly constructed object.
After the move, `other` is left in a **valid but unspecified state** — it must be destructible and
assignable, but its value is not guaranteed [N4950 S11.4.5.3].

```cpp
#include <cstddef>
#include <utility>
#include <iostream>
#include <algorithm>

class Buffer {
    int* data_;
    std::size_t size_;

public:
    explicit Buffer(std::size_t n)
        : data_(new int[n]()), size_(n) {
        std::cout << "  Buffer(" << n << ") allocated\n";
    }

    // Move constructor: steals resources from other
    Buffer(Buffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
        std::cout << "  move ctor: stole " << size_ << " elements\n";
    }

    // Copy constructor
    Buffer(const Buffer& other)
        : data_(new int[other.size_]), size_(other.size_) {
        std::copy(other.data_, other.data_ + size_, data_);
        std::cout << "  copy ctor: copied " << size_ << " elements\n";
    }

    ~Buffer() {
        std::cout << "  ~Buffer(" << size_ << ")\n";
        delete[] data_;
    }

    Buffer& operator=(const Buffer&) = delete;
    Buffer& operator=(Buffer&&) = delete;

    std::size_t size() const noexcept { return size_; }
};

int main() {
    Buffer a(100);
    Buffer b(std::move(a));  // Move ctor: a's data stolen, a.data_ = nullptr
    // a is now valid but unspecified: a.size() == 0, a.data_ == nullptr
}
```

### Proof That Moved-From Objects Are in a Valid-But-Unspecified State

The Standard defines the post-condition of move operations in [N4950 S11.4.5.3]/4:

> The moved-from object is left in a valid but otherwise unspecified state.

We can prove this requirement from first principles by examining what the Standard guarantees:

**Claim:** After `T b(std::move(a));`, object `a` must satisfy:

1. `a.~T()` is well-defined (destructor runs without error).
2. `a = some_T_value;` is well-defined (assignment can be performed).
3. No invariant of `T` is violated (no UB from inspecting `a`).

**Proof:**

1. [N4950 S11.4.5.3]/4 states that after a move, the object is in a "valid but unspecified state."
   "Valid" means the object satisfies all class invariants and can be used in any operation that
   does not require a _specific_ value.
2. [N4950 S11.4.7]/4 requires that every object with automatic storage duration is destroyed at the
   end of its scope. Since the Standard mandates destruction of all objects regardless of their
   value state, the destructor must handle the moved-from state without error.
3. Assignment to a moved-from object must work because the Standard requires that the object is
   "valid" — meaning it can participate in any operation defined for its type, including assignment.
4. "Unspecified" means the implementation (or the type's author) chooses the state, but the program
   must not assume any particular value. The only guarantees are destructibility and assignability.

QED.

This has a practical consequence: your move constructor must leave the source in a state where the
destructor and assignment operator can run safely. For a resource-owning type like `Buffer`, setting
the source's pointer to `nullptr` and size to `0` achieves this because `delete[] nullptr` is a
no-op and assignment to a zero-sized buffer is well-defined.

### What "Valid-But-Unspecified" Means in Practice

"Valid-but-unspecified" is a weaker guarantee than "empty" or "default-constructed." Consider:

```cpp
#include <vector>
#include <string>
#include <iostream>

int main() {
    std::vector<int> v{1, 2, 3, 4, 5};
    std::vector<int> u = std::move(v);
    // v is valid but unspecified. It is NOT required to be empty.
    // However, all major implementations leave v.empty() == true.

    std::cout << "v.size() = " << v.size() << "\n";  // Typically 0, but not guaranteed
    std::cout << "v.empty() = " << std::boolalpha << v.empty() << "\n";  // Typically true

    std::string s = "hello";
    std::string t = std::move(s);
    // s is valid but unspecified. It might be empty, or it might contain garbage.
    std::cout << "s.size() = " << s.size() << "\n";  // Implementation-defined

    // All of the following are guaranteed to work:
    v.clear();      // OK: clear a (possibly empty) vector
    v.push_back(1); // OK: assign/modify
    s = "world";    // OK: assign
    s.clear();      // OK: clear
}
```

The key takeaway: you may assign to a moved-from object and you may destroy it. You should not read
from it (unless you check it first) and you should not assume it is in any particular state such as
empty or default-constructed.

### Implicit vs. Explicit Move Constructors

The compiler implicitly declares a move constructor for a class if [N4950 S11.4.5.3]:

1. The class does not declare any user-declared copy constructor.
2. The class does not declare any user-declared copy assignment operator.
3. The class does not declare any user-declared move assignment operator.
4. The class does not declare any user-declared destructor.

Furthermore, the implicitly declared move constructor is **not defined as deleted** only if every
direct base class and non-static data member has a move constructor that is not deleted and is
accessible.

The following table summarizes when the compiler generates a default move constructor:

| Condition                                  | Implicit Move Ctor Generated?            | Notes                                    |
| :----------------------------------------- | :--------------------------------------- | :--------------------------------------- |
| No user-declared special members           | Yes, if all members/base are movable     | Most common case for simple structs      |
| User-declared copy ctor (and no others)    | No (move ctor not declared)              | Fall back to copy ctor for moves         |
| User-declared destructor (and no others)   | No (move ctor not declared)              | Rule-of-five applies                     |
| `= default` on move ctor                   | Yes, defined as defaulted                | Delegates to member-wise move            |
| `= delete` on move ctor                    | No                                       | Explicitly deleted                       |
| Any member/base has deleted move ctor      | Implicit move ctor is defined as deleted | Must provide explicit move or fix member |
| Any member/base has inaccessible move ctor | Implicit move ctor is defined as deleted | Access violation                         |

```cpp
#include <iostream>
#include <utility>

struct A {
    int x;
    // No user-declared special members → implicit move ctor generated
};

struct B {
    int x;
    B(const B&) { std::cout << "B copy\n"; }
    // User-declared copy ctor → implicit move ctor NOT declared
    // Move falls back to copy constructor
};

struct C {
    int x;
    ~C() { std::cout << "C dtor\n"; }
    // User-declared destructor → implicit move ctor NOT declared
    // Move falls back to copy constructor
};

struct D {
    D() = default;
    D(D&&) = default;  // Explicitly defaulted move ctor
    D(const D&) = default;
};

struct Member {
    Member(Member&&) = delete;  // Move-deleted member
    int x;
};

struct E {
    Member m;  // Member has deleted move ctor
    // Implicit move ctor of E is defined as deleted
};

int main() {
    A a1;
    A a2 = std::move(a1);  // OK: uses implicit move ctor

    B b1;
    B b2 = std::move(b1);  // OK: falls back to copy ctor (outputs "B copy")

    C c1;
    C c2 = std::move(c1);  // OK: falls back to copy ctor

    // E e1;
    // E e2 = std::move(e1);  // ERROR: implicit move ctor is deleted
}
```

The critical lesson: **declaring any of the Rule-of-Five special member functions suppresses the
implicit generation of the others** (with some exceptions for the copy operations when a destructor
is declared). This is why the Rule of Five exists — if you manually manage resources in one
operation, you must manually manage them in all five.

## 6.2 Move Assignment Operator

The move assignment operator transfers resources from the source and releases the target's existing
resources:

```cpp
#include <cstddef>
#include <utility>
#include <iostream>

class Buffer {
    int* data_;
    std::size_t size_;

public:
    explicit Buffer(std::size_t n)
        : data_(new int[n]()), size_(n) {}

    Buffer(Buffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    Buffer(const Buffer& other)
        : data_(new int[other.size_]), size_(other.size_) {
        std::copy(other.data_, other.data_ + size_, data_);
    }

    // Move assignment operator
    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;           // Release current resources
            data_ = other.data_;     // Steal from source
            size_ = other.size_;
            other.data_ = nullptr;   // Leave source in valid state
            other.size_ = 0;
        }
        return *this;
    }

    Buffer& operator=(const Buffer&) = delete;

    ~Buffer() { delete[] data_; }

    std::size_t size() const noexcept { return size_; }
};

int main() {
    Buffer a(100);
    Buffer b(200);

    b = std::move(a);  // b's old data (200 ints) freed, a's data stolen
    // a: valid but unspecified (size_ == 0, data_ == nullptr)
    // b: now owns a's original buffer (100 ints)
}
```

### When the Compiler Generates Default Move Assignment

The rules for implicit generation of the move assignment operator mirror those for the move
constructor [N4950 S11.4.5.3]. The compiler implicitly declares a move assignment operator if:

1. No user-declared copy constructor.
2. No user-declared copy assignment operator.
3. No user-declared move assignment operator.
4. No user-declared destructor.

And the implicit move assignment operator is **not deleted** only if every direct base class and
non-static data member has a move assignment operator that is not deleted and is accessible.

```cpp
#include <iostream>
#include <utility>
#include <string>

struct WithDefaults {
    std::string name;
    int count;
    // No user-declared special members → both move ctor and move assignment
    // are implicitly declared and defaulted.
};

int main() {
    WithDefaults a{"hello", 42};
    WithDefaults b = std::move(a);  // Move ctor: steals string internals
    std::cout << "a.name.size() = " << a.name.size() << "\n";  // Typically 0
    std::cout << "b.name = " << b.name << "\n";  // "hello"

    WithDefaults c{"world", 99};
    c = std::move(b);  // Move assignment: steals b's string internals
    std::cout << "b.name.size() = " << b.name.size() << "\n";  // Typically 0
    std::cout << "c.name = " << c.name << "\n";  // "hello"
}
```

### Move Assignment and Exception Safety

The naive move assignment operator shown above (`delete[] data_; data_ = other.data_;`) is not
exception-safe. If the move assignment of one member throws after another has already been moved,
the object is left in an inconsistent state. The solution is either:

1. Make the move assignment `noexcept` (preferred — move operations should not throw).
2. Use the copy-and-swap idiom for move assignment as well (less common, but exception-safe by
   construction).

For resource-owning types, move assignment should always be `noexcept` because moving typically
involves only pointer swaps and integer assignments — none of which can throw.

## 6.3 `noexcept` on Move Operations

Marking move constructors and move assignment operators `noexcept` is **critical** for performance.
Standard library containers (e.g., `std::vector`, `std::unordered_map`) use `noexcept` move
operations to provide the **strong exception guarantee** during reallocation. If the move
constructor is not `noexcept`, containers fall back to copying — negating the benefit of move
semantics [N4950 S16.4.5.2.6].

```cpp
#include <vector>
#include <iostream>

struct NoexceptMovable {
    int* data;
    explicit NoexceptMovable(std::size_t n) : data(new int[n]()) {}
    NoexceptMovable(NoexceptMovable&& other) noexcept
        : data(other.data) { other.data = nullptr; }
    ~NoexceptMovable() { delete[] data; }
};

struct ThrowingMovable {
    int* data;
    explicit ThrowingMovable(std::size_t n) : data(new int[n]()) {}
    ThrowingMovable(ThrowingMovable&& other)  // NOT noexcept
        : data(other.data) { other.data = nullptr; }
    ~ThrowingMovable() { delete[] data; }
};

void container_demo() {
    std::vector<NoexceptMovable> v1;
    v1.reserve(10);
    for (int i = 0; i < 10; ++i) v1.emplace_back(100);
    // When v1 reallocates (e.g., after push_back exceeds capacity),
    // elements are MOVED because NoexceptMovable's move ctor is noexcept.

    std::vector<ThrowingMovable> v2;
    v2.reserve(10);
    for (int i = 0; i < 10; ++i) v2.emplace_back(100);
    // When v2 reallocates, elements are COPIED (if copy ctor exists)
    // because ThrowingMovable's move ctor might throw.
}
```

:::warning Always mark move constructors and move assignment operators `noexcept` unless they
genuinely can throw (which is rare — moving should only perform pointer swaps and assignments). The
`std::is_nothrow_move_constructible_v<T>` type trait is used by standard containers to select
between move and copy during reallocation. If your move is not `noexcept`, your types will be
silently copied in containers, which can be a severe performance regression.
:::

### How `std::vector` Uses `noexcept` Move

The `std::vector` reallocation strategy is defined in [N4950 S16.4.5.2.6]. If the move constructor
of `T` is `noexcept`, or if `T` is copyable, `vector` uses move operations during reallocation. If
the move constructor is potentially throwing and a copy constructor is available, `vector` falls
back to copying.

## 6.4 The Rule of Five in Detail

The Rule of Five codifies the observation that resource management in C++ is all-or-nothing. If your
class manages a resource (dynamic memory, file handle, socket, lock), then the compiler's default
special member functions will be wrong.

[N4950 S11.4.5.3] defines the conditions under which the compiler implicitly declares each special
member function. The interaction between these rules produces the "Rule of Five" behavior:

| You Declare      | Implicit Copy Ctor | Implicit Move Ctor | Implicit Copy Assign | Implicit Move Assign |
| :--------------- | :----------------- | :----------------- | :------------------- | :------------------- |
| Nothing          | Yes                | Yes                | Yes                  | Yes                  |
| Destructor only  | Yes                | **No**             | Yes                  | **No**               |
| Copy ctor only   | —                  | **No**             | **No**               | **No**               |
| Move ctor only   | Deleted            | —                  | Deleted              | Deleted              |
| Move assign only | Deleted            | Deleted            | Deleted              | —                    |

Key observations from this table:

1. **Declaring a destructor suppresses implicit move operations.** This is the most common surprise.
   If you write `~T() { ... }`, the compiler will not generate a move constructor or move assignment
   operator, even if all members are movable. Move requests will silently fall back to copy.

2. **Declaring a copy constructor suppresses everything else.** If you write `T(const T&)`, the
   compiler generates no move operations and no copy assignment operator.

3. **Declaring a move constructor deletes the copy operations.** The rationale is that if you
   explicitly opted into move semantics, copying might not make sense for your type (e.g.,
   `std::unique_ptr`).

```cpp
#include <iostream>
#include <utility>

struct ResourceOwner {
    int* data;
    explicit ResourceOwner(std::size_t n) : data(new int[n]()) {}

    ~ResourceOwner() { delete[] data; }
    // Destructor declared → implicit move ctor NOT generated!

    // Without an explicit move ctor, this happens:
    ResourceOwner(ResourceOwner&&) = default;  // Must explicitly default or define
    ResourceOwner& operator=(ResourceOwner&&) = default;

    ResourceOwner(const ResourceOwner&) = delete;
    ResourceOwner& operator=(const ResourceOwner&) = delete;
};

int main() {
    ResourceOwner a(100);
    ResourceOwner b = std::move(a);  // Uses the explicitly defaulted move ctor
}
```

### Rule of Five Implementation Template

```cpp
#include <cstddef>
#include <algorithm>
#include <utility>

class Resource {
    int* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t capacity_ = 0;

public:
    // 1. Default constructor
    Resource() = default;

    // 2. Destructor
    ~Resource() {
        delete[] data_;
    }

    // 3. Copy constructor
    Resource(const Resource& other)
        : data_(other.size_ ? new int[other.size_] : nullptr)
        , size_(other.size_)
        , capacity_(other.size_) {
        std::copy(other.data_, other.data_ + size_, data_);
    }

    // 4. Move constructor
    Resource(Resource&& other) noexcept
        : data_(other.data_)
        , size_(other.size_)
        , capacity_(other.capacity_) {
        other.data_ = nullptr;
        other.size_ = 0;
        other.capacity_ = 0;
    }

    // 5. Copy assignment operator
    Resource& operator=(const Resource& other) {
        if (this != &other) {
            Resource tmp(other);  // copy ctor
            swap(tmp);             // swap with tmp
        }
        return *this;
    }

    // 6. Move assignment operator
    Resource& operator=(Resource&& other) noexcept {
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

    // 7. swap (enables copy-and-swap for copy assignment)
    void swap(Resource& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
        swap(capacity_, other.capacity_);
    }
};
```

## 6.5 Move-Only Types

A move-only type is a type that can be moved but not copied. The Standard Library uses move-only
types extensively to express unique ownership semantics.

### Implementing a Move-Only Type

```cpp
#include <cstddef>
#include <utility>
#include <iostream>

class UniqueBuffer {
    int* data_;
    std::size_t size_;

public:
    explicit UniqueBuffer(std::size_t n)
        : data_(new int[n]()), size_(n) {}

    ~UniqueBuffer() { delete[] data_; }

    // Move constructor
    UniqueBuffer(UniqueBuffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    // Move assignment
    UniqueBuffer& operator=(UniqueBuffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            other.data_ = nullptr;
            other.size_ = 0;
        }
        return *this;
    }

    // Delete copy operations to make the type move-only
    UniqueBuffer(const UniqueBuffer&) = delete;
    UniqueBuffer& operator=(const UniqueBuffer&) = delete;

    std::size_t size() const noexcept { return size_; }
    int* data() noexcept { return data_; }
};
```

### Move-Only Types in the Standard Library

| Type                              | Move-Only? | Reason                        |
| :-------------------------------- | :--------- | :---------------------------- |
| `std::unique_ptr<T>`              | Yes        | Exclusive ownership model     |
| `std::thread`                     | Yes        | OS thread handle is unique    |
| `std::jthread`                    | Yes        | Same as `std::thread`         |
| `std::mutex`                      | Yes        | OS synchronization primitive  |
| `std::atomic<T>`                  | Yes        | Cannot be atomically moved    |
| `std::unique_lock<Mutex>`         | Yes        | Owns lock state               |
| `std::shared_ptr<T>`              | No         | Reference-counted, copyable   |
| `std::vector<T>`                  | No         | Deep-copyable                 |
| `std::function<R(Args...)>`       | No         | Type-erased, copyable         |
| `std::move_only_function` (C++23) | Yes        | Non-copyable callable wrapper |

### Move-Only Types and Containers

Move-only types can be stored in standard containers, but you must use move semantics to insert
them:

```cpp
#include <vector>
#include <memory>
#include <utility>

int main() {
    std::vector<std::unique_ptr<int>> v;

    v.push_back(std::make_unique<int>(42));       // OK: rvalue, move
    // v.push_back(v[0]);                          // ERROR: copy is deleted

    std::unique_ptr<int> p = std::make_unique<int>(99);
    v.push_back(std::move(p));                     // OK: explicit move
    // p is now nullptr

    v.emplace_back(new int(7));                    // OK: constructs in-place

    // Range operations also work with move-only types:
    std::vector<std::unique_ptr<int>> v2;
    v2 = std::move(v);  // OK: moves entire vector (move-assigns each element)
    // v is now in a valid-but-unspecified state (typically empty)
}
```

## Common Pitfalls

A move constructor takes `T&&`, which is an rvalue reference, not a forwarding reference. This means
it can only accept rvalues. If you need a constructor that can accept both lvalues and rvalues with
perfect forwarding, you use a variadic template:

```cpp
#include <utility>
#include <iostream>
#include <string>

struct Wrapper {
    std::string data;

    // Move constructor: only accepts rvalues
    Wrapper(Wrapper&& other) noexcept : data(std::move(other.data)) {
        std::cout << "move ctor\n";
    }

    // Perfect-forwarding constructor: accepts any combination of arguments
    template<typename... Args>
    explicit Wrapper(Args&&... args)
        : data(std::forward<Args>(args)...) {
        std::cout << "forwarding ctor\n";
    }
};

int main() {
    std::string s = "hello";

    Wrapper w1(s);              // forwarding ctor: lvalue forwarded
    Wrapper w2(std::move(s));   // forwarding ctor: rvalue forwarded
    Wrapper w3(std::string("world"));  // forwarding ctor: prvalue forwarded

    Wrapper w4 = std::move(w1); // move ctor: explicit rvalue reference
}
```

**Warning:** Overloading a forwarding constructor with a move constructor can lead to surprising
behavior. The forwarding constructor is a better match for many argument types than the move
constructor, because it accepts any `Args&&...`. Use `std::enable_if` or C++20 concepts to constrain
the forwarding constructor:

```cpp
#include <utility>
#include <iostream>
#include <string>
#include <type_traits>

struct Safe {
    std::string data;

    // Constrain the forwarding constructor so it doesn't intercept move/copy
    template<typename T,
             typename = std::enable_if_t<
                 !std::is_same_v<std::decay_t<T>, Safe>>>
    explicit Safe(T&& arg)
        : data(std::forward<T>(arg)) {
        std::cout << "forwarding ctor\n";
    }

    Safe(Safe&& other) noexcept : data(std::move(other.data)) {
        std::cout << "move ctor\n";
    }
};

int main() {
    Safe s1(std::string("hello"));  // forwarding ctor
    Safe s2(Safe{std::string("world")});  // move ctor (not intercepted)
}
```

## 7.1 `std::swap` and Move Semantics

`std::swap` is the canonical example of move semantics in action. Prior to C++11, `std::swap` used
three copies. Since C++11, it uses three moves — which for resource-owning types means three pointer
swaps instead of three deep copies [N4950 S16.4.3.3].

```cpp
#include <utility>

template<typename T>
constexpr void swap(T& a, T& b) noexcept(
    std::is_nothrow_move_constructible_v<T> &&
    std::is_nothrow_move_assignable_v<T>)
{
    T tmp = std::move(a);  // move ctor
    a = std::move(b);      // move assignment
    b = std::move(tmp);    // move assignment
}
```

For a `Buffer` class with a move constructor and move assignment operator, `std::swap` performs
three pointer swaps and three size assignments — **O(1)** regardless of buffer size. Without move
semantics, it would perform three deep copies — **O(n)**.

## 7.2 Custom Swap for a Resource-Owning Class

Providing a custom `swap` as a member function and a non-member `swap` overload enables ADL
(Argument-Dependent Lookup) and allows generic code to find the most efficient swap for your type:

```cpp
#include <cstddef>
#include <utility>
#include <iostream>
#include <algorithm>

class Buffer {
    int* data_;
    std::size_t size_;

public:
    explicit Buffer(std::size_t n)
        : data_(new int[n]()), size_(n) {}

    Buffer(Buffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    Buffer& operator=(Buffer&& other) noexcept {
        if (this != &other) {
            delete[] data_;
            data_ = other.data_;
            size_ = other.size_;
            other.data_ = nullptr;
            other.size_ = 0;
        }
        return *this;
    }

    ~Buffer() { delete[] data_; }

    // Member swap
    void swap(Buffer& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
    }

    std::size_t size() const noexcept { return size_; }
};

// Non-member swap: enables ADL lookup
void swap(Buffer& a, Buffer& b) noexcept {
    a.swap(b);
}

int main() {
    Buffer a(1000);
    Buffer b(2000);

    std::cout << "Before swap: a.size=" << a.size() << ", b.size=" << b.size() << "\n";

    using std::swap;
    swap(a, b);  // Calls custom swap via ADL

    std::cout << "After swap:  a.size=" << a.size() << ", b.size=" << b.size() << "\n";
}
```

Output:

```
Before swap: a.size=1000, b.size=2000
After swap:  a.size=2000, b.size=1000
```

:::tip When writing a custom `swap`, always include `using std::swap;` before calling `swap` on
individual members. This ensures that if a member type has a custom `swap`, it is found via ADL,
while falling back to `std::swap` for types that do not.
:::

## 7.3 Swap as a Building Block

`swap` is used extensively as a building block for other operations:

- **Move assignment:** `a = std::move(b)` can be implemented as `swap(a, b)` followed by `b`'s
  destruction at scope end (the copy-and-swap idiom).
- **Exception-safe assignment:** The copy-and-swap idiom provides the strong exception guarantee by
  constructing a copy first, then swapping.
- **Sorting algorithms:** `std::sort` uses `swap` internally. Efficient `swap` makes sorting of
  large objects cheap.

```cpp
#include <utility>

class Buffer {
    int* data_;
    std::size_t size_;

public:
    explicit Buffer(std::size_t n = 0)
        : data_(n ? new int[n]() : nullptr), size_(n) {}

    // Copy constructor
    Buffer(const Buffer& other)
        : data_(other.size_ ? new int[other.size_] : nullptr), size_(other.size_) {
        std::copy(other.data_, other.data_ + size_, data_);
    }

    // Copy assignment via copy-and-swap idiom (strong exception guarantee)
    Buffer& operator=(Buffer other) noexcept {
        // 'other' is passed by value: it is either copy-constructed (if lvalue)
        // or move-constructed (if rvalue). Then we just swap.
        swap(other);
        return *this;
    }

    Buffer(Buffer&& other) noexcept
        : data_(other.data_), size_(other.size_) {
        other.data_ = nullptr;
        other.size_ = 0;
    }

    ~Buffer() { delete[] data_; }

    void swap(Buffer& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
    }
};
```

## 7.4 Self-Move Assignment

Move-assigning an object to itself is a well-defined but dangerous operation that is rarely
intentional. Consider:

```cpp
Buffer& operator=(Buffer&& other) noexcept {
    if (this != &other) {
        delete[] data_;
        data_ = other.data_;
        size_ = other.size_;
        other.data_ = nullptr;
        other.size_ = 0;
    }
    return *this;
}
```

The `this != &other` guard is essential. Without it, `a = std::move(a)` would:

1. `delete[] data_` — freeing the object's own buffer.
2. `data_ = other.data_` — assigning the now-dangling pointer to itself.
3. `other.data_ = nullptr` — setting both `this->data_` and `other.data_` to `nullptr` (same
   object).

After self-move, the object holds a dangling pointer and a zero size. Any subsequent access or
destruction triggers use-after-free.

:::warning Self-move assignment (`a = std::move(a)`) is **not undefined behavior** in the general
case [N4950 S11.4.5.3], but the Standard requires the object to be in a "valid but unspecified
state" afterward. For resource-owning types that do not guard against self-assignment, this
typically means a use-after-free. Always include the self-assignment check in move assignment
operators, or restructure to avoid the issue entirely (e.g., using the copy-and-swap idiom which
handles self-assignment naturally).
:::

## 7.5 Move-Only Types and the Standard Library

The Standard Library makes extensive use of move-only types. Understanding which types are move-only
and why is critical for writing correct generic code:

| Type                              | Move-Only? | Reason                        |
| :-------------------------------- | :--------- | :---------------------------- |
| `std::unique_ptr<T>`              | Yes        | Exclusive ownership model     |
| `std::thread`                     | Yes        | OS thread handle is unique    |
| `std::jthread`                    | Yes        | Same as `std::thread`         |
| `std::mutex`                      | Yes        | OS synchronization primitive  |
| `std::atomic<T>`                  | Yes        | Cannot be atomically moved    |
| `std::unique_lock<Mutex>`         | Yes        | Owns lock state               |
| `std::shared_ptr<T>`              | No         | Reference-counted, copyable   |
| `std::vector<T>`                  | No         | Deep-copyable                 |
| `std::function<R(Args...)>`       | No         | Type-erased, copyable         |
| `std::move_only_function` (C++23) | Yes        | Non-copyable callable wrapper |

When writing generic code that must accept any callable, prefer `std::move_only_function` (C++23)
over `std::function` if copyability is not required. This avoids the internal heap allocation that
`std::function` performs for type erasure and enables capturing move-only types in the callable.

## Common Pitfalls

- **Moving from const objects:** `std::move(const T&)` returns `const T&&`, which binds to a copy
  constructor (not move constructor). The move is silently downgraded to a copy. If you see this in
  a code review, the object should not be `const` in the first place.
- **Using moved-from objects:** After a move, the source object is in a valid but unspecified state.
  You may only assign to it or destroy it. Reading from it (other than to inspect trivial types like
  `int`) is technically legal but yields unspecified values.
- **Forgetting `noexcept` on moves:** This is the most performance-critical mistake with move
  operations. Standard containers check `std::is_nothrow_move_constructible_v<T>` at compile time
  and fall back to copying if it is `false`. Always mark move constructors and move assignment
  operators `noexcept`.
- **Declaring a destructor without move operations:** When you declare a destructor, the compiler
  suppresses implicit generation of the move constructor and move assignment operator. If your type
  has movable members, you must explicitly `= default` the move operations.
- **Forgetting to move the base class in a derived move constructor:** When defining a derived class
  move constructor, you must explicitly call `Base(std::move(other))`. Writing `Base(other)`
  silently copies the base subobject.
- **Self-move assignment without a guard:** `a = std::move(a)` with a naive move assignment operator
  that does not check `this != &other` leads to use-after-free. Always include the guard or use the
  copy-and-swap idiom.
- **Using `std::move` in a return statement for a local variable:** `return std::move(local);`
  prevents NRVO from applying and forces a move. Just write `return local;`.

## See Also

- [Reference Collapsing and Forwarding References](2_reference_collapsing.md)
- [Temporary Materialization](3_temporary_materialization.md)
- [Return Value Optimization (RVO) and NRVO](5_return_value_optimization.md)
