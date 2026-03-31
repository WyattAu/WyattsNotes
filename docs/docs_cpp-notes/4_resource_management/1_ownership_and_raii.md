---
title: Ownership and RAII
date: 2026-03-31T00:00:00.000Z
tags:
  - cpp
categories:
  - cpp
slug: ownership-and-raii
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Ownership and RAII

Every non-trivial C++ program must manage resources: heap memory, file descriptors, network sockets, mutex locks, GPU buffers, database connections. A **resource leak** occurs when a resource is acquired but never released. A **use-after-free** occurs when a resource is accessed after it has been released. Both are undefined behavior.

C++ solves this problem not with a garbage collector, but with a deterministic, scope-based discipline called **RAII** — Resource Acquisition Is Initialization.

## 1. The RAII Pattern

### 1.1 Formal Definition

A class follows the RAII pattern when:

1. Its **constructor** acquires a resource (opens a file, locks a mutex, allocates memory).
2. Its **destructor** releases that same resource (closes the file, unlocks the mutex, deallocates memory).
3. The class maintains the **invariant**: if construction completes successfully, the resource is held; destruction always releases it.

This binding of resource lifetime to object lifetime is the single most important idiom in C++. It is not a language feature — it is a convention that the language's destructor semantics make natural and safe [N4950 §11.4.7].

### 1.2 Stack Unwinding Guarantee

The critical property that makes RAII work is **stack unwinding**. When an exception propagates out of a scope, the C++ runtime calls the destructors of all automatic-storage-duration objects in that scope before transferring control to the handler [N4950 §8.4.4].

```cpp
#include <cstdio>
#include <mutex>
#include <stdexcept>

void process_file(const char* path) {
    std::FILE* fp = std::fopen(path, "r");
    if (!fp) throw std::runtime_error("cannot open file");

    char buf[1024];
    std::fread(buf, 1, sizeof(buf), fp);
    // If this throws, fp is NEVER closed. Resource leak.

    std::fclose(fp);
}
```

With RAII, the resource is released regardless of how the scope is exited:

```cpp
#include <cstdio>
#include <stdexcept>

class FileHandle {
    std::FILE* fp_;
public:
    explicit FileHandle(const char* path) : fp_(std::fopen(path, "r")) {
        if (!fp_) throw std::runtime_error("cannot open file");
    }
    ~FileHandle() {
        if (fp_) std::fclose(fp_);
    }

    FileHandle(const FileHandle&) = delete;
    FileHandle& operator=(const FileHandle&) = delete;

    std::FILE* get() const noexcept { return fp_; }
};

void process_file(const char* path) {
    FileHandle fh(path);
    char buf[1024];
    std::fread(buf, 1, sizeof(buf), fh.get());
    // If fread or anything below throws, ~FileHandle() runs.
    // The file is always closed.
}
```

:::info Relevance
RAII is why C++ programs do not need `try`/`finally` blocks. The destructor **is** the `finally`. This is the mechanism that enables exception-safe code without manual cleanup.
:::

### 1.3 MutexLock Example

```cpp
#include <mutex>

class MutexLock {
    std::mutex& mtx_;
public:
    explicit MutexLock(std::mutex& m) : mtx_(m) { mtx_.lock(); }
    ~MutexLock() { mtx_.unlock(); }

    MutexLock(const MutexLock&) = delete;
    MutexLock& operator=(const MutexLock&) = delete;
};

void thread_safe_operation(std::mutex& mtx) {
    MutexLock lock(mtx);
    // Critical section
    // If an exception is thrown here, ~MutexLock() unlocks the mutex.
}
```

:::tip
In production code, prefer `std::lock_guard` or `std::scoped_lock` (C++17) over a hand-rolled MutexLock. They are the standard library's RAII wrappers for mutexes.
:::

## 2. `std::unique_ptr` — Exclusive Ownership

### 2.1 Definition

`std::unique_ptr<T>` is a smart pointer that holds a heap-allocated object via exclusive ownership. Exactly one `unique_ptr` owns the pointed-to object at any time. When the `unique_ptr` is destroyed, the object is deleted [N4950 §20.11.1].

```
Layout (default deleter, no EBO savings):
┌──────────────────┐
│ T* ptr_          │  (1 pointer, 8 bytes on x86_64)
└──────────────────┘
sizeof(std::unique_ptr<T>) == sizeof(T*)
```

### 2.2 Construction: `std::make_unique`

Always prefer `std::make_unique<T>(args...)` over `new T(args...)` [N4950 §20.11.3]. The reasons are:

1. **Exception safety:** `make_unique` performs a single allocation. Expressions like `f(unique_ptr<T>(new T), may_throw())` can leak if evaluation order causes `new T` to succeed but `may_throw()` throws before the `unique_ptr` is constructed.
2. **No裸 `new` exposure:** The `new` expression is hidden inside the factory, preventing accidental raw pointer use.

```cpp
#include <memory>
#include <string>

struct Widget {
    std::string name;
    int value;
    Widget(std::string n, int v) : name(std::move(n)), value(v) {}
};

std::unique_ptr<Widget> create_widget() {
    return std::make_unique<Widget>("sensor", 42);
}

void use_widget() {
    auto w = create_widget();
    // w owns the Widget. When w goes out of scope, the Widget is deleted.
}
```

### 2.3 Move-Only Semantics

`unique_ptr` deletes its copy constructor and copy assignment operator. Ownership can only be transferred via move:

```cpp
#include <memory>

void sink(std::unique_ptr<int> p) {
    // sink now owns the int
}

void transfer_demo() {
    auto p = std::make_unique<int>(10);

    // auto q = p;                  // ERROR: copy is deleted
    auto q = std::move(p);         // OK: p is now nullptr, q owns the int

    sink(std::move(q));            // OK: q is now nullptr, sink owns the int

    // *p;                          // UB: p is nullptr
}
```

:::info Relevance
Move-only semantics are the foundation of C++ ownership discipline. If a function takes a `unique_ptr` by value, the caller **must** explicitly transfer ownership with `std::move`. This makes the ownership transfer visible at the call site.
:::

### 2.4 Custom Deleters

`std::unique_ptr<T, D>` accepts a second template parameter: the **deleter type** `D`. The deleter is a callable invoked instead of `delete` when the `unique_ptr` is destroyed [N4950 §20.11.1.2].

When the deleter is stateless (empty class, no captured data), the compiler applies **Empty Base Optimization (EBO)** and the deleter consumes zero bytes:

```cpp
#include <memory>
#include <cstdio>

struct FileDeleter {
    void operator()(std::FILE* fp) const {
        if (fp) std::fclose(fp);
    }
};

using UniqueFile = std::unique_ptr<std::FILE, FileDeleter>;

void custom_deleter_demo() {
    // sizeof(UniqueFile) == 8 (just the pointer; FileDeleter is empty, EBO applies)
    UniqueFile fp(std::fopen("data.bin", "rb"));
    if (!fp) return;
    // fp is automatically closed when it goes out of scope
}
```

When the deleter captures state (a lambda with captures), its size is added:

```cpp
#include <memory>

void stateful_deleter_demo() {
    // This lambda captures nothing -> EBO applies, sizeof == 8
    auto deleter1 = [](int* p) { delete[] p; };
    std::unique_ptr<int, decltype(deleter1)> p1(new int[10], deleter1);

    // This lambda captures a value -> sizeof == 8 (pointer) + 4 (int capture)
    int log_id = 42;
    auto deleter2 = [log_id](int* p) {
        // Log the deletion (for demonstration; std::println in C++23)
        delete[] p;
    };
    std::unique_ptr<int, decltype(deleter2)> p2(new int[10], deleter2);
    // sizeof(p2) == 16 on most platforms
}
```

### 2.5 Array Specialization

`std::unique_ptr<T[]>` manages arrays. It calls `delete[]` instead of `delete` and provides `operator[]` instead of `operator*` and `operator->`:

```cpp
#include <memory>
#include <cstddef>

void array_demo() {
    auto arr = std::make_unique<int[]>(100);
    arr[0] = 42;
    // ~unique_ptr<int[]>() calls delete[] arr
}
```

:::warning
`std::make_unique` with arrays initializes elements to value-initialization (zero for built-in types). If you need non-zero initialization, use `std::vector` or construct manually.
:::

## 3. `std::shared_ptr` — Shared Ownership

### 3.1 Definition

`std::shared_ptr<T>` is a smart pointer that allows multiple owners to share a single heap-allocated object. The object is destroyed when the last `shared_ptr` pointing to it is destroyed or reset [N4950 §20.11.3].

### 3.2 Control Block Layout

Every group of `shared_ptr` instances that refer to the same object share a **control block** allocated on the heap:

```
Control Block (separate allocation from the object):
┌─────────────────────────────────────┐
│ strong_count  (std::atomic<size_t>) │  Number of shared_ptr owners
│ weak_count    (std::atomic<size_t>) │  Number of weak_ptr observers + 1 if strong > 0
│ deleter       (function pointer)    │  Called when strong_count reaches 0
│ allocator     (function pointer)    │  Called to deallocate the control block itself
└─────────────────────────────────────┘

std::shared_ptr<T> object layout:
┌──────────────────┐
│ T* ptr_          │  (pointer to the managed object)
│ ControlBlock* cb_│  (pointer to the control block)
└──────────────────┘
sizeof(std::shared_ptr<T>) == 16 (two pointers on x86_64)
```

The control block is typically allocated separately from the managed object, unless `std::make_shared` is used.

### 3.3 `std::make_shared` vs Direct Construction

```cpp
#include <memory>
#include <iostream>

struct Sensor {
    int id;
    Sensor(int i) : id(i) {
        std::cout << "Sensor(" << id << ") constructed\n";
    }
    ~Sensor() {
        std::cout << "Sensor(" << id << ") destroyed\n";
    }
};

void make_shared_demo() {
    // Single allocation: object + control block in one block
    auto p1 = std::make_shared<Sensor>(1);

    // Two allocations: object via new, control block separately
    std::shared_ptr<Sensor> p2(new Sensor(2));
}

void reference_counting_demo() {
    auto a = std::make_shared<Sensor>(3);
    std::cout << "use_count: " << a.use_count() << "\n";  // 1

    {
        auto b = a;  // Copy: increments strong_count
        std::cout << "use_count: " << a.use_count() << "\n";  // 2
    }
    // b destroyed, strong_count decremented

    std::cout << "use_count: " << a.use_count() << "\n";  // 1
}
// a destroyed, strong_count reaches 0, Sensor destroyed
```

Output:

```
Sensor(1) constructed
Sensor(2) constructed
Sensor(3) constructed
use_count: 1
use_count: 2
use_count: 1
Sensor(2) destroyed
Sensor(3) destroyed
Sensor(1) destroyed
```

:::info Relevance
`std::make_shared` performs a single allocation (better cache locality, fewer syscalls). However, the control block and object share the same memory block, so the memory for the control block cannot be freed until **all** `weak_ptr` references are also gone. For very large objects with long-lived `weak_ptr` observers, this can delay deallocation.
:::

### 3.4 Thread Safety Model

`shared_ptr` provides a subtle and often misunderstood thread safety guarantee:

| Operation                                             | Thread-Safe?                                       |
| :---------------------------------------------------- | :------------------------------------------------- |
| Copying a `shared_ptr` (incrementing `strong_count`)  | Yes — atomic                                       |
| Destroying/resetting a `shared_ptr`                   | Yes — atomic                                       |
| Accessing the **pointed-to object** via `*p` or `p->` | **No** — you must provide your own synchronization |

The control block's reference counts are modified using `std::atomic` operations [N4950 §20.11.3.6]. This means you can safely copy `shared_ptr` instances between threads. But the **object itself** is not protected — concurrent writes to `*p` without external synchronization is a data race and undefined behavior.

```cpp
#include <memory>
#include <thread>
#include <mutex>
#include <iostream>

struct Counter {
    int value = 0;
    std::mutex mtx;
};

void thread_safe_shared_ptr() {
    auto c = std::make_shared<Counter>();

    auto increment = [&c] {
        // This is safe: copying shared_ptr is atomic
        auto local = c;

        // This is safe: we lock the mutex before accessing the object
        std::lock_guard lock(local->mtx);
        local->value++;
    };

    std::thread t1(increment);
    std::thread t2(increment);
    t1.join();
    t2.join();

    std::cout << "value: " << c->value << "\n";  // 2
}
```

### 3.5 Performance Warning

`shared_ptr` has significant overhead compared to `unique_ptr`:

1. **Size:** 16 bytes (two pointers) vs 8 bytes.
2. **Allocation:** Always allocates a control block on the heap.
3. **Reference counting:** Every copy and destruction involves an atomic increment/decrement. These are ** sequentially consistent** by default and act as memory barriers, inhibiting compiler and CPU reordering.
4. **Cache pressure:** The control block is a separate allocation, causing an additional cache miss on every `shared_ptr` copy or destruction.

:::warning
Do not use `shared_ptr` by default. Use `unique_ptr` as your default smart pointer. Only reach for `shared_ptr` when you genuinely need shared ownership. Premature use of `shared_ptr` is a common source of performance bugs in C++ codebases.
:::

## 4. `std::weak_ptr` — Non-Owning Observer

### 4.1 Definition

`std::weak_ptr<T>` is a non-owning observer of a `shared_ptr`-managed object. It does not participate in the reference count that determines when the object is destroyed. It holds a **weak count** in the control block [N4950 §20.11.3].

### 4.2 The `lock()` Method

To access the object through a `weak_ptr`, you must call `lock()`, which returns a `shared_ptr`. If the object has already been destroyed, `lock()` returns an empty `shared_ptr`:

```cpp
#include <memory>
#include <iostream>

void weak_ptr_demo() {
    auto sp = std::make_shared<int>(42);
    std::weak_ptr<int> wp = sp;

    if (auto locked = wp.lock()) {
        std::cout << "value: " << *locked << "\n";  // 42
        std::cout << "use_count: " << locked.use_count() << "\n";  // 2
    }
    // locked destroyed, use_count back to 1

    sp.reset();  // Destroy the int; strong_count reaches 0

    if (wp.lock()) {
        std::cout << "still alive\n";
    } else {
        std::cout << "object was destroyed\n";  // This branch
    }
}
```

### 4.3 Breaking Cyclic References

The primary use case for `weak_ptr` is breaking reference cycles. Consider a parent-child tree structure:

```cpp
#include <memory>
#include <iostream>
#include <string>

struct Node;
using NodePtr = std::shared_ptr<Node>;

struct Node {
    std::string name;
    std::weak_ptr<Node> parent;  // weak: avoids cycle
    std::vector<NodePtr> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(NodePtr child) {
        child->parent = /* need shared_ptr to this */;
        children.push_back(std::move(child));
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};
```

The problem: inside `add_child`, we need a `shared_ptr` to `this` to set `child->parent`. But `this` is a raw pointer. Constructing a `shared_ptr` from `this` would create a **second** control block, leading to double-free.

The solution is `std::enable_shared_from_this`:

```cpp
#include <memory>
#include <iostream>
#include <string>
#include <vector>

struct Node : std::enable_shared_from_this<Node> {
    std::string name;
    std::weak_ptr<Node> parent;
    std::vector<std::shared_ptr<Node>> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(std::shared_ptr<Node> child) {
        child->parent = shared_from_this();  // Safe: returns shared_ptr to *this
        children.push_back(std::move(child));
    }

    void print_tree(int depth = 0) const {
        std::cout << std::string(depth * 2, ' ') << name << "\n";
        for (const auto& child : children) {
            child->print_tree(depth + 1);
        }
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};

int main() {
    auto root = std::make_shared<Node>("root");
    auto left = std::make_shared<Node>("left");
    auto right = std::make_shared<Node>("right");

    root->add_child(left);
    root->add_child(right);

    root->print_tree();
    // root goes out of scope; strong_count reaches 0; entire tree is destroyed.
    // No memory leak because parent links are weak_ptr.
}
```

Output:

```
root
  left
  right
~Node(right)
~Node(left)
~Node(root)
```

:::warning
`std::enable_shared_from_this` only works when the object is **originally** managed by a `shared_ptr`. If the object is stack-allocated or managed by a `unique_ptr`, calling `shared_from_this()` is undefined behavior.
:::

:::info Relevance
Reference cycles are the most common memory leak in `shared_ptr`-heavy codebases. If you use `shared_ptr` for graph structures (trees, DAGs, observer patterns), always use `weak_ptr` for back-references. If you can, prefer `unique_ptr` with raw non-owning pointers for tree structures — the parent owns the children; children hold raw pointers to the parent.
:::

## 5. Common Pitfalls

### 5.1 Raw `new`/`delete` vs Smart Pointers

Never write raw `delete` in application code. Every `new` should be immediately wrapped in a smart pointer or managed by a container:

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

### 5.2 `std::make_unique` vs `new` in Expressions — Exception Safety

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

:::info Relevance
This is a real bug pattern. The C++ standard allows argument evaluation in any order [N4950 §7.6.1.9]. If `compute_risk()` is evaluated before the `unique_ptr` constructor, and it throws, the `new Widget()` allocation is leaked. `make_unique` eliminates this class of bug entirely.
:::

### 5.3 `shared_ptr` Overuse and Reference Cycles

`shared_ptr` should not be the default ownership model. Its overhead is substantial and its reference cycles are insidious leaks that tools like AddressSanitizer may not detect (the memory is still reachable via the cycle).

**Guidelines:**

- Use `unique_ptr` for single-owner semantics (the vast majority of cases).
- Use `shared_ptr` only when ownership is genuinely shared and the lifetime is non-trivial.
- Use `weak_ptr` to observe `shared_ptr`-managed objects without extending their lifetime.
- For tree structures, prefer `unique_ptr` for children and raw pointers for parent back-references.

### 5.4 Aliasing Constructor of `shared_ptr`

The aliasing constructor of `shared_ptr` creates a `shared_ptr` that shares ownership with another `shared_ptr` but points to a different object:

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

:::warning
The aliasing constructor is useful but dangerous. The aliased pointer does not extend the lifetime of the member it points to — it only extends the lifetime of the **owning** object. If the owning object is destroyed first, the aliased pointer dangles. Use cases include returning pointers to members from APIs that need to express shared ownership of the containing object.
:::

## Summary

| Ownership Model    | Smart Pointer        | Size (x86_64) | Semantics                   | Thread-Safe Refcount |
| :----------------- | :------------------- | :------------ | :-------------------------- | :------------------- |
| Exclusive          | `std::unique_ptr<T>` | 8 bytes       | Move-only                   | N/A (single owner)   |
| Shared             | `std::shared_ptr<T>` | 16 bytes      | Copyable                    | Yes (atomic)         |
| Non-owning observe | `std::weak_ptr<T>`   | 16 bytes      | Not directly dereferencable | N/A                  |

The hierarchy of preference is clear: `unique_ptr` first, `shared_ptr` when genuinely needed, raw pointers only for non-owning observation, and `weak_ptr` specifically to break `shared_ptr` cycles.
