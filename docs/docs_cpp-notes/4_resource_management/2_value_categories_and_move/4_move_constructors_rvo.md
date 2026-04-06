---
title: Move Constructors, Assignment, Swap Idiom
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
assignable, but its value is not guaranteed [N4950 §11.4.5.3].

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

## 6.3 `noexcept` on Move Operations

Marking move constructors and move assignment operators `noexcept` is **critical** for performance.
Standard library containers (e.g., `std::vector`, `std::unordered_map`) use `noexcept` move
operations to provide the **strong exception guarantee** during reallocation. If the move
constructor is not `noexcept`, containers fall back to copying — negating the benefit of move
semantics [N4950 §16.4.5.2.6].

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
silently copied in containers, which can be a severe performance regression. :::

:::info Relevance The Rule of Five states: if a class defines (or deletes) any of the following, it
should probably define all five: destructor, copy constructor, copy assignment operator, move
constructor, and move assignment operator. This is because manual resource management in one
operation typically implies manual management is needed in all of them [N4950 §11.4.5.3]. :::

## 7.1 `std::swap` and Move Semantics

`std::swap` is the canonical example of move semantics in action. Prior to C++11, `std::swap` used
three copies. Since C++11, it uses three moves — which for resource-owning types means three pointer
swaps instead of three deep copies [N4950 §16.4.3.3].

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
while falling back to `std::swap` for types that do not. :::

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

:::info Relevance The copy-and-swap idiom unifies copy assignment and move assignment into a single
function by taking the parameter by value. When an lvalue is passed, it is copy-constructed; when an
rvalue is passed, it is move-constructed. The swap is then `noexcept`, so the assignment itself
provides the strong exception guarantee. This is a widely used pattern but note that it always
creates a temporary, which may be slightly less efficient than separate copy/move assignment
operators for simple types. :::

## 7.4 Self-Move Assignment: The Silent Undefined Behavior

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
3. `other.data_ = nullptr` — setting both `this-&gt;data_` and `other.data_` to `nullptr` (same
   object).

After self-move, the object holds a dangling pointer and a zero size. Any subsequent access or
destruction triggers use-after-free.

:::warning Self-move assignment (`a = std::move(a)`) is **not undefined behavior** in the general
case [N4950 §11.4.5.3], but the Standard requires the object to be in a "valid but unspecified
state" afterward. For resource-owning types that do not guard against self-assignment, this
typically means a use-after-free. Always include the self-assignment check in move assignment
operators, or restructure to avoid the issue entirely (e.g., using the copy-and-swap idiom which
handles self-assignment naturally). :::

## 7.5 Move-Only Types and the Standard Library

The Standard Library makes extensive use of move-only types. Understanding which types are move-only
and why is critical for writing correct generic code:

| Type                              | Move-Only? | Reason                        |
| :-------------------------------- | :--------- | :---------------------------- |
| `std::unique_ptr&lt;T&gt;`        | Yes        | Exclusive ownership model     |
| `std::thread`                     | Yes        | OS thread handle is unique    |
| `std::jthread`                    | Yes        | Same as `std::thread`         |
| `std::mutex`                      | Yes        | OS synchronization primitive  |
| `std::atomic&lt;T&gt;`            | Yes        | Cannot be atomically moved    |
| `std::unique_lock&lt;Mutex&gt;`   | Yes        | Owns lock state               |
| `std::shared_ptr&lt;T&gt;`        | No         | Reference-counted, copyable   |
| `std::vector&lt;T&gt;`            | No         | Deep-copyable                 |
| `std::function&lt;R(Args...)&gt;` | No         | Type-erased, copyable         |
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
  operations. Standard containers check `std::is_nothrow_move_constructible_v&lt;T&gt;` at compile
  time and fall back to copying if it is `false`. Always mark move constructors and move assignment
  operators `noexcept`.

## See Also

- [Reference Collapsing and Forwarding References](2_reference_collapsing.md)
- [Temporary Materialization](3_temporary_materialization.md)
- [Return Value Optimization (RVO) and NRVO](5_return_value_optimization.md)

:::

:::

:::

:::

:::
