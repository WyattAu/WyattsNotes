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

:::warning C++11 vs C++14+ Move Generation In C++11, if any SMF is user-declared, the move
constructor and move assignment are **not** implicitly declared. In C++14 and later, this remains
true — the Standard was not changed. The critical point: declaring a destructor suppresses implicit
move generation. :::

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

## See Also

- [Access Control and Friendship](./2_access_control.md)
- [Operator Overloading](./4_operator_overloading.md)
