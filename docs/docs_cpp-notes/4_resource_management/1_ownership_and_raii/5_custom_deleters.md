---
title: Common Pitfalls
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: common-pitfalls-smart-pointers
---

# Common Pitfalls

Smart pointers eliminate many classes of resource bugs, but misuse still leads to leaks, undefined
behavior, and performance regressions. This section covers the most common pitfalls encountered when
working with `std::unique_ptr`, `std::shared_ptr`, and raw `new`/`delete`, then dives into custom
deleter patterns and their implications.

## 5.1 Raw `new`/`delete` vs Smart Pointers

Never write raw `delete` in application code. Every `new` should be immediately wrapped in a smart
pointer or managed by a container:

```cpp
// Bad
auto* obj = new Widget();
// ... complex logic ...
delete obj;  // If an exception occurs between new and delete, leak.

// Good
auto obj = std::make_unique<Widget>();
// ... complex logic ...
// Destructor runs automatically, no leak possible.
```

## 5.2 `std::make_unique` vs `new` in Expressions — Exception Safety

Consider a function call where the argument evaluation order matters:

```cpp
void process(std::unique_ptr<Widget> w, int compute_risk());

// Dangerous: if compute_risk() throws after new Widget() succeeds,
// the raw pointer is leaked before unique_ptr can take ownership.
process(std::unique_ptr<Widget>(new Widget), compute_risk());

// Safe: make_unique performs the allocation internally.
// No intermediate raw pointer exists.
process(std::make_unique<Widget>(), compute_risk());
```

:::info Relevance This is a real bug pattern. The C++ standard allows argument evaluation in any
order [N4950 §7.6.1.9]. If `compute_risk()` is evaluated before the `unique_ptr` constructor, and it
throws, the `new Widget()` allocation is leaked. `make_unique` eliminates this class of bug
entirely. :::

## 5.3 `shared_ptr` Overuse and Reference Cycles

`shared_ptr` should not be the default ownership model. Its overhead is substantial and its
reference cycles are insidious leaks that tools like AddressSanitizer may not detect (the memory is
still reachable via the cycle).

**Guidelines:**

- Use `unique_ptr` for single-owner semantics (the vast majority of cases).
- Use `shared_ptr` only when ownership is genuinely shared and the lifetime is non-trivial.
- Use `weak_ptr` to observe `shared_ptr`-managed objects without extending their lifetime.
- For tree structures, prefer `unique_ptr` for children and raw pointers for parent back-references.

## 5.4 Aliasing Constructor of `shared_ptr`

The aliasing constructor of `shared_ptr` creates a `shared_ptr` that shares ownership with another
`shared_ptr` but points to a different object:

```cpp
#include <memory>

struct Person {
    std::string name;
    int age;
};

void aliasing_demo() {
    auto person = std::make_shared<Person>();

    // shares ownership with person, but points to person->age
    std::shared_ptr<int> age_ptr(person, &person->age);

    // Both person and age_ptr share the same control block.
    // The Person object is destroyed when BOTH go out of scope.
    // age_ptr is a dangling pointer after person is destroyed!
}
```

:::warning The aliasing constructor is useful but dangerous. The aliased pointer does not extend the
lifetime of the member it points to — it only extends the lifetime of the **owning** object. If the
owning object is destroyed first, the aliased pointer dangles. Use cases include returning pointers
to members from APIs that need to express shared ownership of the containing object. :::

## 5.5 Custom Deleters

Smart pointers support **custom deleters** — callable objects invoked instead of `delete` when the
managed object is destroyed. This is essential for resources that are not heap-allocated with `new`,
such as C library handles, memory from custom allocators, or OS file descriptors.

### 5.5.1 Function Pointer Deleters

The simplest custom deleter is a free function pointer:

```cpp
#include <memory>
#include <cstdio>

struct FileCloser {
    void operator()(std::FILE* fp) const noexcept {
        if (fp) std::fclose(fp);
    }
};

using unique_file = std::unique_ptr<std::FILE, FileCloser>;

void write_to_file(const char* path) {
    unique_file fp(std::fopen(path, "w"));
    if (!fp) throw std::runtime_error("cannot open file");

    std::fprintf(fp.get(), "Hello, RAII!\n");
    // ~unique_file calls FileCloser::operator(), which calls fclose.
}
```

### 5.5.2 Lambda Deleters

Lambdas are often more convenient than named functors. They capture context and require no separate
type definition:

```cpp
#include <memory>
#include <dlfcn.h>

// Dynamic library handle with RAII cleanup
auto make_lib_handle(const char* path) {
    void* handle = dlopen(path, RTLD_LAZY);
    if (!handle) throw std::runtime_error(dlerror());
    return std::unique_ptr<void, decltype([](void* h) noexcept {
        if (h) dlclose(h);
    })>(handle);
}

void use_dynamic_lib() {
    auto lib = make_lib_handle("./libexample.so");
    // ~unique_ptr calls dlclose via the lambda deleter
}
```

:::info Each unique lambda type produces a different `std::unique_ptr` type. Two `unique_ptr`s with
different lambda deleters (even lexically identical lambdas) are incompatible types [N4950
§20.11.1.2.1]. Use `decltype` or a named functor if you need a shared type across translation units.
:::

### 5.5.3 Functor Deleters with State

A functor deleter can carry state, which is useful when the cleanup requires additional context:

```cpp
#include <memory>
#include <cstdlib>

struct MallocDeleter {
    std::size_t reported_size;

    void operator()(void* ptr) const noexcept {
        if (ptr) {
            // Could log reported_size for diagnostics
            std::free(ptr);
        }
    }
};

using unique_malloc = std::unique_ptr<void, MallocDeleter>;

void process_buffer() {
    constexpr std::size_t buf_size = 4096;
    unique_malloc buf(std::malloc(buf_size), MallocDeleter{buf_size});
    if (!buf) throw std::bad_alloc();
    std::memset(buf.get(), 0, buf_size);
}
```

### 5.5.4 Array Deleters

When `std::unique_ptr` manages an array, the default deleter calls `delete[]`. But if the array was
allocated with a custom allocator, you need a custom array deleter:

```cpp
#include <memory>
#include <cstdlib>

struct AlignedDeleter {
    void operator()(void* ptr) const noexcept {
        if (ptr) std::free(ptr);
    }
};

using unique_aligned = std::unique_ptr<void, AlignedDeleter>;

void aligned_allocation() {
    constexpr std::size_t alignment = 64;
    constexpr std::size_t size = 1024;

    void* raw = nullptr;
    if (posix_memalign(&raw, alignment, size) != 0)
        throw std::bad_alloc();

    unique_aligned buf(raw);
    // ~unique_aligned calls std::free, which is correct for posix_memalign
}
```

For `std::shared_ptr`, array semantics are handled differently. The default deleter calls `delete`,
not `delete[]`, so you **must** provide an array-aware deleter when managing arrays:

```cpp
#include <memory>

// Correct: shared_ptr with array deleter
auto arr = std::shared_ptr<int[]>(new int[10], std::default_delete<int[]>());

// WRONG: this calls delete, not delete[] — undefined behavior for arrays
// auto bad = std::shared_ptr<int>(new int[10]);
```

## 5.6 `unique_ptr` with Custom Deleters and Sizeof Implications

`std::unique_ptr` uses zero-overhead storage for stateless deleters thanks to the Empty Base
Optimization (EBO). A stateless functor deleter adds no size overhead:

```cpp
#include <memory>
#include <iostream>

struct StatelessDeleter {
    void operator()(int* p) const noexcept { delete p; }
};

struct StatefulDeleter {
    std::size_t padding;
    void operator()(int* p) const noexcept { delete p; }
};

int main() {
    std::cout << sizeof(std::unique_ptr<int>) << "\n";                     // 8 (x86_64)
    std::cout << sizeof(std::unique_ptr<int, StatelessDeleter>) << "\n";   // 8 (EBO applies)
    std::cout << sizeof(std::unique_ptr<int, StatefulDeleter>) << "\n";    // 16 (deleter stored)
    std::cout << sizeof(std::unique_ptr<int, void(*)(int*)>) << "\n";      // 16 (function pointer)
}
```

| Deleter Type                    | Overhead (x86_64) | Notes                    |
| ------------------------------- | ----------------- | ------------------------ |
| Default (`std::default_delete`) | 0 bytes           | EBO                      |
| Stateless functor               | 0 bytes           | EBO [N4950 §20.11.1.2.1] |
| Stateful functor                | `sizeof(deleter)` | Stored inline            |
| Function pointer                | 8 bytes           | Stored inline            |
| Lambda (no capture)             | 0 bytes           | Stateless, EBO applies   |
| Lambda (captures)               | Size of captures  | Stored inline            |

:::tip Prefer stateless functor deleters or captureless lambdas to avoid size overhead. If a deleter
must carry state, consider whether `std::shared_ptr` with a capturing lambda is more appropriate,
since `shared_ptr` type-erases the deleter into the control block. :::

## 5.7 `shared_ptr` with Custom Deleters and Control Block Layout

Unlike `std::unique_ptr`, `std::shared_ptr` **type-erases** its deleter. The deleter is stored in
the control block, not in the `shared_ptr` object itself. This means:

- `sizeof(std::shared_ptr<T>)` is always 16 bytes on x86_64 (two pointers), regardless of the
  deleter.
- The deleter is allocated alongside the control block, adding a small heap allocation overhead.
- The deleter can be changed at runtime (via the aliasing constructor or `reset` with a new
  deleter).

```cpp
#include <memory>
#include <cstdio>

void shared_with_custom_deleter() {
    auto deleter = [](std::FILE* fp) noexcept {
        if (fp) std::fclose(fp);
    };

    std::shared_ptr<std::FILE> fp(std::fopen("output.txt", "w"), deleter);

    // sizeof(fp) is 16 bytes regardless of deleter
    // The control block stores: strong count, weak count, deleter, allocator

    std::fprintf(fp.get(), "Hello via shared_ptr!\n");
    // ~shared_ptr invokes the lambda deleter
}
```

When using `std::make_shared`, the control block and the managed object are allocated in a single
heap allocation (one `new` call). When providing a custom deleter, the compiler cannot use
`make_shared` — it must perform a separate allocation for the control block and the managed object:

```cpp
// Single allocation: control block + object (no custom deleter)
auto p1 = std::make_shared<int>(42);

// Two allocations: one for int, one for control block + deleter
auto p2 = std::shared_ptr<int>(new int(42), [](int* p) { delete p; });
```

## 5.8 Incomplete Types and Custom Deleters

`std::unique_ptr` requires the deleter to be callable at the point where the destructor is
generated. For a forward-declared type, the default deleter (`std::default_delete`) will fail to
compile if the destructor is implicitly generated at a point where the type is incomplete:

```cpp
// ---- widget.h ----
struct Widget;  // forward declaration

class Controller {
    std::unique_ptr<Widget> impl_;  // OK: unique_ptr with incomplete type
public:
    Controller();
    ~Controller();  // MUST be declared (not defaulted) in the header
};

// ---- widget.cpp ----
#include "widget.h"
#include "widget_impl.h"  // full definition of Widget

Controller::Controller() : impl_(std::make_unique<Widget>()) {}

Controller::~Controller() = default;  // destructor defined where Widget is complete
```

With a custom deleter, the same rule applies: the deleter must be invocable where the destructor
runs. If the deleter is a lambda defined in the `.cpp` file, the type is complete there, so there is
no issue:

```cpp
// ---- widget.cpp ----
#include "widget.h"
#include "widget_impl.h"

struct WidgetDeleter {
    void operator()(Widget* p) const noexcept { /* Widget is complete here */ }
};

Controller::Controller()
    : impl_(std::unique_ptr<Widget, WidgetDeleter>(new Widget())) {}

Controller::~Controller() = default;
```

## 5.9 Allocator-Aware Containers

The C++ standard library containers are **allocator-aware**: they accept an allocator type as a
template parameter and propagate it through construction, copy, and move operations [N4950 §23.2.1].
Custom allocators interact with smart pointer custom deleters in important ways.

When a container uses a custom allocator, elements are allocated and deallocated through that
allocator. If you extract a raw pointer from a container element and wrap it in a smart pointer, the
default deleter will call `delete`, which bypasses the allocator — a mismatch that causes undefined
behavior:

```cpp
#include <memory>
#include <vector>

struct TrackingAllocator {
    using value_type = int;
    TrackingAllocator() = default;
    template <typename U>
    TrackingAllocator(const TrackingAllocator<U>&) {}

    int* allocate(std::size_t n) {
        std::cout << "allocate(" << n << ")\n";
        return static_cast<int*>(::operator new(n * sizeof(int)));
    }

    void deallocate(int* p, std::size_t) noexcept {
        std::cout << "deallocate\n";
        ::operator delete(p);
    }
};

void allocator_mismatch_example() {
    std::vector<int, TrackingAllocator> v{1, 2, 3};

    // WRONG: extracting a pointer and using default deleter
    // int* raw = &v[0];
    // std::unique_ptr<int> bad(raw);  // ~unique_ptr calls delete, not allocator::deallocate

    // If you must extract, use the allocator's deallocate in the deleter
    auto alloc = v.get_allocator();
    // The correct approach: don't extract pointers from allocator-aware containers
}
```

:::warning Never extract a raw pointer from an allocator-aware container and manage it with a
default-deleter smart pointer. The allocation and deallocation mechanisms must match. If you need to
transfer ownership out of a container, use `std::move`, extract via `release()` on allocator-aware
wrappers, or use `std::pmr` resources [N4950 §23.12]. :::

## Summary

| Ownership Model    | Smart Pointer        | Size (x86_64) | Semantics                   | Thread-Safe Refcount |
| :----------------- | :------------------- | :------------ | :-------------------------- | :------------------- |
| Exclusive          | `std::unique_ptr<T>` | 8 bytes       | Move-only                   | N/A (single owner)   |
| Shared             | `std::shared_ptr<T>` | 16 bytes      | Copyable                    | Yes (atomic)         |
| Non-owning observe | `std::weak_ptr<T>`   | 16 bytes      | Not directly dereferencable | N/A                  |

The hierarchy of preference is clear: `unique_ptr` first, `shared_ptr` when genuinely needed, raw
pointers only for non-owning observation, and `weak_ptr` specifically to break `shared_ptr` cycles.

## Common Pitfalls

**Using `delete` instead of `delete[]` for arrays.** The default `std::shared_ptr` deleter calls
`delete`, not `delete[]`. If you construct `std::shared_ptr<T>(new T[n])`, the deleter invokes
undefined behavior. Always pass `std::default_delete<T[]>()` as the deleter, or use
`std::unique_ptr<T[]>` which has the correct default.

**Custom deleter exceptions.** If a custom deleter throws, the behavior depends on the smart pointer
type. For `unique_ptr`, throwing in the deleter causes `std::terminate` during stack unwinding (if
the destructor is called during exception handling) or direct propagation (if called normally). For
`shared_ptr`, the behavior is similarly dangerous. **Custom deleters must be `noexcept`.**

**Function pointer deleter overhead.** A function pointer deleter adds 8 bytes to `unique_ptr` on
x86_64. If the deleter is stateless, prefer a functor (zero overhead via EBO) or a captureless
lambda.

**Type erasure hiding bugs.** `std::shared_ptr`'s type-erased deleter means the compiler cannot
verify deleter correctness at the call site. If you accidentally pass the wrong deleter (e.g., one
that calls `free` on a `new`-allocated object), the error manifests at runtime as heap corruption.
Prefer `std::unique_ptr` where possible — its deleter is part of the type and checked at compile
time.

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
- [RAII Patterns](1_raii_patterns.md)
