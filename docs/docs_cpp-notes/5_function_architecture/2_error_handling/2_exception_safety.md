---
title: Exception Safety Guarantees
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: exception-safety-guarantees
---

# Exception Safety Guarantees

The exception safety taxonomy, formalized by Abrahams (2001) and referenced in the C++ Standard
Library requirements, classifies every operation into four levels [N4950 §16.4.6.3].

## 2.1 No-Throw Guarantee (Strongest)

The operation **never** throws an exception. If it cannot complete, it terminates or reports via
some non-throwing mechanism.

All destructors, deallocation functions, and swap operations in the standard library provide the
no-throw guarantee [N4950 §16.4.6.3 Table 30].

```cpp
#include <vector>
#include <utility>
#include <iostream>

template <typename T>
class SafeVector {
public:
    SafeVector() = default;

    void push_back(const T& val) noexcept(std::is_nothrow_copy_constructible_v<T>) {
        if (size_ == cap_) {
            std::size_t new_cap = cap_ ? cap_ * 2 : 4;
            T* buf = static_cast<T*>(::operator new(sizeof(T) * new_cap));
            for (std::size_t i = 0; i < size_; ++i) {
                new (buf + i) T(data_[i]);
            }
            for (std::size_t i = 0; i < size_; ++i) {
                data_[i].~T();
            }
            ::operator delete(data_);
            data_ = buf;
            cap_ = new_cap;
        }
        new (data_ + size_) T(val);
        ++size_;
    }

    ~SafeVector() {
        for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
        ::operator delete(data_);
    }

    void swap(SafeVector& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
        swap(cap_, other.cap_);
    }

private:
    T* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t cap_ = 0;
};

int main() {
    static_assert(noexcept(std::declval<SafeVector<int>&>().swap(
        std::declval<SafeVector<int>&>())));
    std::cout << "swap is noexcept: true\n";
    return 0;
}
```

## 2.2 Strong Guarantee (Transactional)

The operation either **succeeds completely** or **has no observable effect** — the state of the
program is rolled back to before the operation began [N4950 §16.4.6.3].

The canonical technique is **copy-and-swap**: perform all work on a copy, then atomically swap the
copy into place.

```cpp
#include <vector>
#include <algorithm>
#include <stdexcept>
#include <iostream>

template <typename T>
class StrongVector {
public:
    StrongVector() = default;

    void push_back(const T& val) {
        StrongVector tmp{*this};
        tmp.push_back_unchecked(val);
        swap(tmp);
    }

    void swap(StrongVector& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
        swap(cap_, other.cap_);
    }

    std::size_t size() const noexcept { return size_; }
    const T& operator[](std::size_t i) const { return data_[i]; }

    ~StrongVector() {
        for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
        ::operator delete(data_);
    }

private:
    void push_back_unchecked(const T& val) {
        if (size_ == cap_) {
            std::size_t new_cap = cap_ ? cap_ * 2 : 4;
            T* buf = static_cast<T*>(::operator new(sizeof(T) * new_cap));
            for (std::size_t i = 0; i < size_; ++i) {
                new (buf + i) T(data_[i]);
            }
            for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
            ::operator delete(data_);
            data_ = buf;
            cap_ = new_cap;
        }
        new (data_ + size_) T(val);
        ++size_;
    }

    T* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t cap_ = 0;
};

struct ThrowingCopy {
    int value;
    static int copy_count;
    explicit ThrowingCopy(int v) : value(v) {}
    ThrowingCopy(const ThrowingCopy& o) : value(o.value) {
        if (++copy_count > 2) throw std::runtime_error{"too many copies"};
    }
    ThrowingCopy& operator=(const ThrowingCopy&) = default;
};
int ThrowingCopy::copy_count = 0;

int main() {
    StrongVector<ThrowingCopy> sv;
    sv.push_back(ThrowingCopy{1});
    sv.push_back(ThrowingCopy{2});
    std::cout << "size before failed push: " << sv.size() << "\n";
    ThrowingCopy::copy_count = 0;

    try {
        sv.push_back(ThrowingCopy{3});
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }

    std::cout << "size after failed push: " << sv.size() << "\n";
    std::cout << "data preserved: " << sv[0].value << ", " << sv[1].value << "\n";
    return 0;
}
// Output:
//   size before failed push: 2
//   caught: too many copies
//   size after failed push: 2
//   data preserved: 1, 2
```

## 2.3 Basic Guarantee

The operation **does not leak resources** and leaves every object in a **valid state**, but the
state may be unspecified (different from the original state). This is the minimum acceptable
guarantee for any operation [N4950 §16.4.6.3].

## 2.4 No Guarantee

No invariant is maintained. The program may leak resources, leave objects in invalid states, or
exhibit undefined behavior. Standard library operations **never** offer this level intentionally,
though user code may.

## 2.5 Guarantee Comparison

```cpp
#include <iostream>
#include <vector>

struct BadVector {
    std::vector<int> data;

    void push_back_basic(int val) {
        data.push_back(val);
    }

    void push_back_no_guarantee(int val) {
        int* raw = new int[data.size() + 1];
        for (std::size_t i = 0; i < data.size(); ++i) {
            raw[i] = data[i];
        }
        raw[data.size()] = val;
        data.clear();
        if (val == -1) throw -1;
        for (std::size_t i = 0; i <= data.size(); ++i) {
            data.push_back(raw[i]);
        }
        delete[] raw;
    }
};

int main() {
    std::cout << "Guarantee levels:\n"
              << "  No-throw : operation never throws\n"
              << "  Strong   : all-or-nothing (transactional)\n"
              << "  Basic    : no leaks, valid but unspecified state\n"
              << "  None     : anything goes\n";
    return 0;
}
```

| Guarantee | Resource Safety | State Consistency      | Example                           |
| --------- | --------------- | ---------------------- | --------------------------------- |
| No-throw  | Yes             | Guaranteed identical   | `swap()`, destructors             |
| Strong    | Yes             | Rolled back on failure | `std::vector::push_back` (C++11+) |
| Basic     | Yes             | Valid but unspecified  | `std::sort`                       |
| None      | No              | No guarantee           | Manual `new[]` without cleanup    |

## See Also

- [The Itanium Exception ABI](1_exception_abi.md)
- [The noexcept Specifier](3_noexcept.md)
