---
title: Shared Ownership (std::shared_ptr) and Control Block
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: shared-ownership-and-control-block
---

# Shared Ownership (std::shared_ptr) and Control Block

`std::shared_ptr` enables multiple owners to share a single heap-allocated object via a
reference-counted control block. While powerful, it carries significant overhead — atomic reference
counting, a separate heap allocation, and the risk of reference cycles — and should only be used
when shared ownership is genuinely required.

## 3.1 Definition

`std::shared_ptr<T>` is a smart pointer that allows multiple owners to share a single heap-allocated
object. The object is destroyed when the last `shared_ptr` pointing to it is destroyed or reset
[N4950 §20.11.3].

## 3.2 Control Block Layout

Every group of `shared_ptr` instances that refer to the same object share a **control block**
allocated on the heap:

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

The control block is typically allocated separately from the managed object, unless
`std::make_shared` is used.

### When the Control Block Is Created

A control block is created at the following points:

1. `std::make_shared&lt;T&gt;(args...)` — single allocation for object + control block
2. `std::shared_ptr&lt;T&gt;(new T(args...))` — separate allocations for object and control block
3. `std::allocate_shared&lt;T&gt;(alloc, args...)` — uses custom allocator for both
4. Constructing from a `std::weak_ptr` via `weak_ptr::lock()` — reuses existing control block

:::warning Never construct multiple `shared_ptr` instances from the same raw pointer. Each
construction creates a new control block, leading to multiple destructions (double-free):

````cpp
int* raw = new int(42);
std::shared_ptr<int> p1(raw);
std::shared_ptr<int> p2(raw);  // BUG: second control block, double-free!
``` :::

## 3.3 `std::make_shared` vs Direct Construction

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
````

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

### Memory Layout Comparison

```
make_shared (single allocation):
┌──────────┬─────────────────────────────────────┐
│ Sensor   │ Control Block (strong, weak, deleter)│
│ (object) │                                     │
└──────────┴─────────────────────────────────────┘
  One allocation, one free

shared_ptr(new Sensor) (two allocations):
┌──────────┐     ┌─────────────────────────────────────┐
│ Sensor   │     │ Control Block (strong, weak, deleter)│
│ (object) │     │                                     │
└──────────┘     └─────────────────────────────────────┘
  allocation 1         allocation 2
  Two allocations, two frees
```

:::info Relevance `std::make_shared` performs a single allocation (better cache locality, fewer
syscalls). However, the control block and object share the same memory block, so the memory for the
control block cannot be freed until **all** `weak_ptr` references are also gone. For very large
objects with long-lived `weak_ptr` observers, this can delay deallocation. :::

## 3.4 Thread Safety Model

`shared_ptr` provides a subtle and often misunderstood thread safety guarantee:

| Operation                                             | Thread-Safe?                                       |
| :---------------------------------------------------- | :------------------------------------------------- |
| Copying a `shared_ptr` (incrementing `strong_count`)  | Yes — atomic                                       |
| Destroying/resetting a `shared_ptr`                   | Yes — atomic                                       |
| Accessing the **pointed-to object** via `*p` or `p->` | **No** — you must provide your own synchronization |

The control block's reference counts are modified using `std::atomic` operations [N4950 §20.11.3.6].
This means you can safely copy `shared_ptr` instances between threads. But the **object itself** is
not protected — concurrent writes to `*p` without external synchronization is a data race and
undefined behavior.

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

### Atomic Reference Counting Overhead

Every `shared_ptr` copy increments `strong_count` with an atomic fetch-add, and every destruction
decrements with an atomic fetch-sub. On x86_64, these compile to `lock xadd` instructions, which:

1. **Acquire exclusive cache line ownership** — causes cache line bouncing on multi-core systems
2. **Act as full memory barriers** — prevent reordering of loads/stores across the atomic operation
3. **Cost ~20-50 cycles** each on modern x86 — compared to ~1 cycle for a non-atomic increment

In practice, passing `shared_ptr` by value through multiple function calls can create measurable
overhead in hot paths. Prefer passing by `const std::shared_ptr&lt;T&gt;&amp;` if you only need to
observe the object, or pass a raw `T*` if ownership is not needed.

## 3.5 Custom Deleters

`shared_ptr` supports custom deleters, allowing it to manage resources beyond simple `new`/`delete`:

```cpp
#include <memory>
#include <iostream>
#include <cstdio>

struct FileCloser {
    void operator()(FILE* f) const {
        if (f) {
            std::fclose(f);
            std::cout << "file closed\n";
        }
    }
};

void custom_deleter_demo() {
    // Custom deleter for C FILE*
    std::shared_ptr<FILE> file(std::fopen("/dev/null", "r"), FileCloser{});

    // Custom deleter with lambda
    std::shared_ptr<int> buffer(
        static_cast<int*>(std::malloc(100 * sizeof(int))),
        [](int* p) {
            std::free(p);
            std::cout << "buffer freed\n";
        }
    );

    // Custom deleter for array
    std::shared_ptr<char[]> str(new char[100], std::default_delete<char[]>());
}
```

The custom deleter is stored in the control block and does **not** affect `sizeof(shared_ptr)`,
which remains 16 bytes (two pointers). The deleter is type-erased, so different `shared_ptr`
instances with different deleters can still point to the same object.

## 3.6 Circular Reference Problem

The most dangerous pitfall of `shared_ptr` is **reference cycles**. When two objects hold
`shared_ptr` to each other, neither will ever be destroyed:

```cpp
#include <memory>
#include <iostream>

struct Person {
    std::string name;
    std::shared_ptr<Person> friend_;

    explicit Person(std::string n) : name(std::move(n)) {
        std::cout << name << " created\n";
    }
    ~Person() {
        std::cout << name << " destroyed\n";
    }
};

void circular_ref_leak() {
    auto alice = std::make_shared<Person>("Alice");
    auto bob = std::make_shared<Person>("Bob");

    alice->friend_ = bob;  // Bob's strong_count = 2
    bob->friend_ = alice;  // Alice's strong_count = 2

    // When alice and bob go out of scope:
    // Alice's strong_count: 2 → 1 (NOT zero, not destroyed)
    // Bob's strong_count: 2 → 1 (NOT zero, not destroyed)
    // MEMORY LEAK: neither is destroyed
}
```

Output:

```
Alice created
Bob created
```

Neither destructor runs. The fix is to break the cycle using `weak_ptr` (see
[Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)).

## 3.7 Copy-on-Write Pattern

`shared_ptr` can implement a copy-on-write (COW) pattern where the object is shared read-only until
a modification is needed:

```cpp
#include <memory>
#include <iostream>
#include <string>
#include <vector>

class CowString {
    std::shared_ptr<std::vector<char>> data_;

    void detach() {
        if (!data_.unique()) {
            data_ = std::make_shared<std::vector<char>>(*data_);
            std::cout << "  (COW: detached copy)\n";
        }
    }

public:
    CowString(std::string s) {
        data_ = std::make_shared<std::vector<char>>(s.begin(), s.end());
    }

    // Copy is cheap — just shares the pointer
    CowString(const CowString& other) = default;

    char operator[](std::size_t i) const { return (*data_)[i]; }

    void set(std::size_t i, char c) {
        detach();  // Only copy if shared
        (*data_)[i] = c;
    }

    std::size_t ref_count() const { return data_.use_count(); }
    std::string str() const {
        return std::string(data_->begin(), data_->end());
    }
};

int main() {
    CowString a("hello");
    std::cout << "a ref_count: " << a.ref_count() << "\n";  // 1

    CowString b = a;  // Cheap copy, shares data
    std::cout << "b ref_count: " << b.ref_count() << "\n";  // 2

    // Reading does not detach
    std::cout << "a[0]: " << a[0] << "\n";  // h

    // Writing detaches because data is shared
    b.set(0, 'H');
    std::cout << "after write, a ref_count: " << a.ref_count() << "\n";  // 1
    std::cout << "a: " << a.str() << "\n";  // hello
    std::cout << "b: " << b.str() << "\n";  // Hello
}
```

:::warning COW with `shared_ptr` has thread-safety subtleties. The `unique()` check is a data race
if another thread might modify the object concurrently. COW is safe only in single-threaded contexts
or with external synchronization. `std::string` implementations have moved away from COW for this
reason. :::

## 3.8 `sizeof(shared_ptr)` Across Implementations

| Implementation                | `sizeof(shared_ptr&lt;T&gt;)` | Notes              |
| ----------------------------- | ----------------------------- | ------------------ |
| libstdc++ (GCC)               | 16 bytes                      | Two raw pointers   |
| libc++ (Clang)                | 16 bytes                      | Two raw pointers   |
| MSVC STL                      | 16 bytes                      | Two raw pointers   |
| `sizeof(unique_ptr&lt;T&gt;)` | 8 bytes                       | Single raw pointer |

`shared_ptr` is always twice the size of `unique_ptr` due to the extra control block pointer. This
matters in memory-constrained applications or when storing many pointers in containers.

## 3.9 Performance Warning

`shared_ptr` has significant overhead compared to `unique_ptr`:

1. **Size:** 16 bytes (two pointers) vs 8 bytes.
2. **Allocation:** Always allocates a control block on the heap.
3. **Reference counting:** Every copy and destruction involves an atomic increment/decrement. These
   are **sequentially consistent** by default and act as memory barriers, inhibiting compiler and
   CPU reordering.
4. **Cache pressure:** The control block is a separate allocation, causing an additional cache miss
   on every `shared_ptr` copy or destruction.

:::warning Do not use `shared_ptr` by default. Use `unique_ptr` as your default smart pointer. Only
reach for `shared_ptr` when you genuinely need shared ownership. Premature use of `shared_ptr` is a
common source of performance bugs in C++ codebases. :::

## Common Pitfalls

1. **Reference cycles.** Two `shared_ptr` objects pointing to each other will never be destroyed.
   Use `weak_ptr` for back-references.

2. **Constructing from raw pointer multiple times.** Creates multiple control blocks, causing
   double-free. Always use `make_shared` or `make_unique`.

3. **Passing `shared_ptr` by value unnecessarily.** Each copy triggers an atomic increment. Pass by
   `const&amp;` or pass a raw pointer if ownership transfer is not needed.

4. **Thread safety misunderstanding.** The control block is thread-safe, but the pointed-to object
   is NOT. Use `std::mutex` or `std::atomic` to protect the object itself.

5. **`make_shared` delays memory release.** With `make_shared`, the object and control block share
   one allocation. The memory cannot be freed until all `weak_ptr` references are gone.

## See Also

- [Unique Ownership (std::unique_ptr) and EBO](2_unique_ptr.md)
- [Weak Pointers and Cyclic Reference Breaking](4_weak_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
