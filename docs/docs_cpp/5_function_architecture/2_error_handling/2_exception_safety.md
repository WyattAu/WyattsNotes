---
title: Exception Safety Guarantees
description:
  "C++: Exception Safety Guarantees — 2.1 No-Throw Guarantee (Strongest); Conditional `noexcept` and Exception Propagation; Destructors and `noexcept`."
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

### Conditional `noexcept` and Exception Propagation

The `noexcept` specifier can be conditionally evaluated at compile time. This is critical because
the exception safety guarantee of a composed operation depends on the guarantees of its
sub-operations [N4950 §14.7.5.2]. The standard library extensively uses conditional `noexcept`:

```cpp
#include <type_traits>
#include <utility>
#include <iostream>

struct ThrowingMove {
    ThrowingMove() = default;
    ThrowingMove(ThrowingMove&&) noexcept(false) {
        throw std::runtime_error("move failed");
    }
    ThrowingMove(const ThrowingMove&) = default;
    ThrowingMove& operator=(ThrowingMove&&) = default;
    ThrowingMove& operator=(const ThrowingMove&) = default;
};

struct NoThrowMove {
    NoThrowMove() = default;
    NoThrowMove(NoThrowMove&&) noexcept = default;
    NoThrowMove(const NoThrowMove&) = default;
    NoThrowMove& operator=(NoThrowMove&&) = default;
    NoThrowMove& operator=(const NoThrowMove&) = default;
};

int main() {
    std::cout << std::boolalpha;
    std::cout << "vector<ThrowingMove>::push_back noexcept? "
              << noexcept(std::declval<std::vector<ThrowingMove>&>().push_back(
                     std::declval<ThrowingMove>()))
              << "\n";
    std::cout << "vector<NoThrowMove>::push_back noexcept? "
              << noexcept(std::declval<std::vector<NoThrowMove>&>().push_back(
                     std::declval<NoThrowMove>()))
              << "\n";
}
// Output:
//   vector<ThrowingMove>::push_back noexcept? false
//   vector<NoThrowMove>::push_back noexcept? true
```

When `std::vector::push_back` is `noexcept`, callers can make stronger guarantees about their own
exception safety. If `push_back` throws, any function calling it can only provide the basic
guarantee at best. The conditional `noexcept` mechanism propagates this information through the type
system, enabling the compiler to generate tighter code for non-throwing paths (no unwinding tables
needed).

### Destructors and `noexcept`

Destructors are implicitly `noexcept` in C++11 and later [N4950 §14.7.5.2]. If a destructor attempts
to throw, `std::terminate` is called immediately. This is non-negotiable: during stack unwinding, if
a second exception propagates while a first is already active, the runtime calls `std::terminate` —
there is no way to catch both.

```cpp
#include <iostream>
#include <exception>

struct Dangerous {
    ~Dangerous() noexcept(false) {
        throw std::runtime_error("destructor threw");
    }
};

int main() {
    try {
        Dangerous d;
        throw std::logic_error("first exception");
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    return 0;
}
// Output: std::terminate called. Two active exceptions during stack unwinding.
```

The lesson: never let exceptions escape destructors. If a destructor performs an operation that
might fail, catch and swallow the exception, or use `std::uncaught_exceptions()` to conditionally
suppress throws during unwinding.

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

### When the Strong Guarantee Is Too Expensive

Copy-and-swap is clean but has a significant cost: every modifying operation allocates a complete
copy. For large data structures, this is unacceptable. Consider a database buffer managing 1 GB of
in-memory data — copying on every insert would destroy performance.

In practice, many operations only provide the **basic guarantee** precisely because the strong
guarantee is prohibitively expensive. `std::vector::insert` at an arbitrary position provides the
strong guarantee [N4950 §23.3.11.4], but `std::sort` only provides the basic guarantee — it
rearranges elements in place, and if a comparator throws mid-sort, the container is valid but in an
unspecified permutation.

### Strong Guarantee with Move-Only Types

Move-only types (e.g., `std::unique_ptr`, `std::thread`) cannot be copied, so the classic
copy-and-swap idiom does not apply directly. For these types, you must use alternative strategies:

```cpp
#include <memory>
#include <utility>
#include <iostream>

class MoveOnlyBuffer {
    std::unique_ptr<int[]> data_;
    std::size_t size_ = 0;
    std::size_t cap_ = 0;

public:
    MoveOnlyBuffer() = default;

    void push_back(int val) {
        if (size_ == cap_) {
            std::size_t new_cap = cap_ ? cap_ * 2 : 4;
            auto new_data = std::make_unique<int[]>(new_cap);
            for (std::size_t i = 0; i < size_; ++i) {
                new_data[i] = std::move(data_[i]);
            }
            data_ = std::move(new_data);
            cap_ = new_cap;
        }
        data_[size_++] = val;
    }

    std::size_t size() const noexcept { return size_; }
    int operator[](std::size_t i) const { return data_[i]; }
};

int main() {
    MoveOnlyBuffer buf;
    buf.push_back(10);
    buf.push_back(20);
    buf.push_back(30);
    std::cout << "size: " << buf.size() << "\n";
    std::cout << "buf[1]: " << buf[1] << "\n";
    return 0;
}
```

Since `std::make_unique` and `int` moves never throw, this `push_back` provides the strong guarantee
without copy-and-swap. The key insight: if every sub-operation is non-throwing, the composite
operation is automatically strong.

## 2.3 Basic Guarantee

The operation **does not leak resources** and leaves every object in a **valid state**, but the
state may be unspecified (different from the original state). This is the minimum acceptable
guarantee for any operation [N4950 §16.4.6.3].

### RAII as the Foundation of the Basic Guarantee

RAII (Resource Acquisition Is Initialization) is the mechanism that makes the basic guarantee
possible. When an exception unwinds the stack, every local object's destructor runs, releasing its
resource. Without RAII, the basic guarantee is extremely difficult to achieve manually:

```cpp
#include <cstdio>
#include <stdexcept>

// BAD: Manual resource management without RAII
void write_file_bad(const char* path, const char* data) {
    FILE* f = fopen(path, "w");
    if (!f) throw std::runtime_error("cannot open file");
    if (fprintf(f, "%s", data) < 0) {
        fclose(f);  // Easy to forget on every exit path
        throw std::runtime_error("write failed");
    }
    if (some_condition()) {
        fclose(f);  // Must remember here too
        throw std::runtime_error("condition");
    }
    fclose(f);
}

// GOOD: RAII wrapper
struct FileCloser {
    FILE* f;
    ~FileCloser() { if (f) fclose(f); }
};

void write_file_good(const char* path, const char* data) {
    FileCloser fc{fopen(path, "w")};
    if (!fc.f) throw std::runtime_error("cannot open file");
    if (fprintf(fc.f, "%s", data) < 0) {
        throw std::runtime_error("write failed");
    }
    // File is closed automatically by ~FileCloser regardless of exit path
    // Basic guarantee: no resource leak
}

bool some_condition() { return false; }

int main() {
    try {
        write_file_good("/tmp/test.txt", "hello");
    } catch (const std::exception& e) {
        // Resource is always released
    }
    return 0;
}
```

### Class Invariants After Basic Guarantee

"Valid state" means all class invariants hold. This does not mean the state is predictable or useful
— only that you can call `begin()`, `end()`, `size()`, and the destructor without causing undefined
behavior:

```cpp
#include <vector>
#include <algorithm>
#include <stdexcept>
#include <iostream>

struct ThrowingComparator {
    int threshold;
    bool operator()(int a, int b) const {
        if (a > threshold || b > threshold) {
            throw std::runtime_error("comparator threw");
        }
        return a < b;
    }
};

int main() {
    std::vector<int> v = {5, 3, 8, 1, 4, 7, 2, 6};

    try {
        std::sort(v.begin(), v.end(), ThrowingComparator{5});
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }

    // Basic guarantee holds: v is in a valid state
    std::cout << "size: " << v.size() << "\n";
    std::cout << "data: ";
    for (int x : v) std::cout << x << " ";
    std::cout << "\n";
    // The elements are present but in an unspecified order
    // All invariants hold: size() == 8, no duplicates added, no leaks
    return 0;
}
```

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

## Exception Safety in the Standard Library

The standard library mandates specific guarantees for every container operation [N4950 §23.2]. Here
is a non-exhaustive mapping of commonly used operations:

| Operation                     | Guarantee | Rationale                                                             |
| ----------------------------- | --------- | --------------------------------------------------------------------- |
| `std::vector::push_back`      | Strong    | If reallocation fails, original buffer is untouched                   |
| `std::vector::insert`         | Strong    | Copy elements to new buffer, swap on success                          |
| `std::vector::erase`          | No-throw  | Element destruction + move-assignment of trailing elements            |
| `std::vector::reserve`        | Basic     | If allocation succeeds but move throws, elements may be in new buffer |
| `std::map::insert`            | Strong    | Node allocation is separate from tree rebalancing                     |
| `std::unordered_map::insert`  | Basic     | Rehash may fail after partial element insertion                       |
| `std::sort`                   | Basic     | In-place partition; mid-sort throw leaves valid but scrambled state   |
| `std::make_shared`            | Strong    | Allocation succeeds before construction begins                        |
| `std::make_unique`            | Strong    | Allocation precedes construction; exception frees memory              |
| `std::vector::resize(n, val)` | Basic     | If copy of `val` throws mid-resize, vector is valid but partial       |
| `std::vector::swap`           | No-throw  | O(1) pointer swap                                                     |

### Why `std::unordered_map::insert` Is Only Basic

Node-based containers like `std::map` provide the strong guarantee for insertion because each
element is allocated in its own node — if construction throws, the node is freed and the tree is
untouched. But `std::unordered_map` must maintain its hash table, and if a rehash is triggered
during insertion, the table must be rebuilt. If rehash allocation fails after some nodes have been
re-linked, the container is valid (no leaks, no dangling pointers) but elements may have been moved
to a new bucket array that was only partially constructed.

## Common Pitfalls

### Pitfall 1: Destructors That Throw

As discussed, destructors are implicitly `noexcept`. A throwing destructor during stack unwinding
causes `std::terminate`. The fix is to catch exceptions inside the destructor:

```cpp
#include <iostream>
#include <exception>

struct Logger {
    ~Logger() noexcept {
        try {
            flush();
        } catch (...) {
            // Swallow the exception during unwinding
            // Log to stderr if possible (stderr write is typically noexcept)
            std::cerr << "Logger flush failed during unwind\n";
        }
    }

    void flush() {
        // May throw
    }
};
```

### Pitfall 2: Exception-Safety Hole in Operator Overloads

When overloading binary operators, both arguments must be evaluated before the operation proceeds.
If the left operand's evaluation throws, the right operand must not leak:

```cpp
#include <iostream>
#include <stdexcept>

struct Resource {
    int* data;
    explicit Resource(int v) : data(new int(v)) {}
    ~Resource() { delete data; }

    Resource(const Resource& o) : data(new int(*o.data)) {}

    Resource operator+(const Resource& o) const {
        Resource result(*this);  // Copy left operand — may throw
        *result.data += *o.data; // Add right operand — int addition is noexcept
        return result;
    }
};

int main() {
    Resource a(10);
    Resource b(20);
    Resource c = a + b;
    std::cout << *c.data << "\n";  // 30
    return 0;
}
```

The key is that the copy of `*this` happens first. If it throws, `o` is untouched and its destructor
will clean up normally. This provides the strong guarantee.

### Pitfall 3: `new` vs `new(std::nothrow)`

When `operator new` fails, it throws `std::bad_alloc` by default. This is correct behavior — the
strong guarantee relies on allocation failure being signaled via exception. Using
`new(std::nothrow)` silently returns `nullptr`, which converts an exceptional condition into a logic
error that must be checked manually. Prefer the throwing version.

### Pitfall 4: Self-Assignment in Strong-Guarantee Code

Copy-and-swap naturally handles self-assignment because the copy is made before any modification
occurs. But if you implement assignment without copy-and-swap, you must check for self-assignment to
avoid destroying the source before copying from it:

```cpp
#include <cstring>
#include <iostream>

class String {
    char* data_ = nullptr;
    std::size_t size_ = 0;
public:
    explicit String(const char* s = "") {
        size_ = std::strlen(s);
        data_ = new char[size_ + 1];
        std::memcpy(data_, s, size_ + 1);
    }
    ~String() { delete[] data_; }

    // BAD: No self-assignment check
    String& assign_bad(const String& o) {
        delete[] data_;          // Destroy our data
        size_ = o.size_;
        data_ = new char[size_ + 1]; // If this throws, we have a dangling pointer
        std::memcpy(data_, o.data_, size_ + 1); // UB if o is *this
        return *this;
    }

    // GOOD: Copy-and-swap (no self-assignment check needed)
    String& assign_good(const String& o) {
        String tmp(o);  // If this throws, *this is untouched
        std::swap(data_, tmp.data_);
        std::swap(size_, tmp.size_);
        return *this;
    }

    const char* c_str() const { return data_; }
};

int main() {
    String s("hello");
    s.assign_good(s);  // Self-assignment: safe
    std::cout << s.c_str() << "\n";
    return 0;
}
```

## The Itanium C++ ABI and Exception Handling

On platforms using the Itanium C++ ABI (Linux, macOS, BSD, most non-Windows), exceptions are
implemented using **zero-cost tables**. When no exception is thrown, there is zero runtime overhead
— the compiler generates DWARF `.eh_frame` tables that describe how to unwind each function. Only
when an exception is thrown does the runtime walk these tables, which is significantly slower than a
normal function return.

This design choice means that exception-heavy code paths are expensive, but exception-free code
paths pay nothing. This is the rationale behind `noexcept`: marking a function `noexcept` tells the
compiler it does not need to generate unwind tables for that function, and allows callers to skip
their own unwind bookkeeping.

On MSVC (Windows), exceptions use a different mechanism (table-based with code cookies) that also
has zero cost on the happy path, but the table format and runtime are different from the Itanium
ABI.
