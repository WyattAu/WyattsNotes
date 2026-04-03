---
title: Stackless Coroutine Frames and Heap Allocation
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: stackless-coroutine-frames-heap-allocation
---

# Stackless Coroutine Frames and Heap Allocation

This section covers coroutines as suspendable functions, the stackless vs stackful design trade-off,
coroutine frame layout, heap allocation and elision, `std::coroutine_handle<P>` for manual lifetime
management, and RAII wrappers for coroutine handles.

## Coroutines as Suspendable Functions

A **coroutine** is a function that can be suspended and resumed [N4950 §8.5]. Unlike ordinary
functions, which run to completion before returning to the caller, a coroutine may yield control
back to its caller at an arbitrary suspension point and later be resumed from that exact point. The
C++20 coroutine mechanism is defined in terms of three keywords:

- `co_await`: suspend execution until an awaitable completes [N4950 §8.5.5].
- `co_yield`: suspend execution while producing a value (syntactic sugar for `co_await` on the
  promise's `yield_value`).
- `co_return`: complete the coroutine and return a value.

Any function body containing one of these keywords is a **coroutine** [N4950 §8.5.2]. The compiler
transforms the coroutine into a state machine at compile time. This transformation is entirely
implicit — the programmer never writes the state machine manually.

```cpp
#include <coroutine>
#include <iostream>

struct SimpleAwaiter {
    bool await_ready() const noexcept { return false; }
    void await_suspend(std::coroutine_handle<>) const noexcept {}
    void await_resume() const noexcept { std::cout << "resumed\n"; }
};

struct SimplePromise {
    SimplePromise() = default;
    SimplePromise(const SimplePromise&) = delete;
    SimplePromise& operator=(const SimplePromise&) = delete;
    ~SimplePromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<SimplePromise>::from_promise(*this);
    }
};

struct SimpleCoroutine {
    using promise_type = SimplePromise;
    std::coroutine_handle<SimplePromise> handle;
};

SimpleCoroutine my_coroutine() {
    std::cout << "step 1\n";
    co_await SimpleAwaiter{};
    std::cout << "step 2\n";
    co_await SimpleAwaiter{};
    std::cout << "step 3\n";
}

int main() {
    auto coro = my_coroutine();
    coro.handle.resume();
    coro.handle.resume();
    coro.handle.destroy();
}
```

Output:

```
step 1
resumed
step 2
resumed
step 3
```

:::info The function `my_coroutine` is a coroutine because its body contains `co_await`. The
compiler generates a `promise_type` lookup, allocates a coroutine frame, and transforms the function
body into a state machine. The `promise_type` member alias tells the compiler which promise type to
use [N4950 §8.5.2]. :::

## Stackless vs Stackful Coroutines

C++ chose **stackless coroutines** — the coroutine frame is a single heap-allocated block, not a
separate stack. This is a deliberate design decision with important trade-offs.

| Property                     | Stackless (C++)                                 | Stackful (e.g., Boost.Context, goroutines)         |
| :--------------------------- | :---------------------------------------------- | :------------------------------------------------- |
| Frame size                   | Fixed at compile time (known locals)            | Dynamic (grows/shrinks like a regular stack)       |
| Memory per coroutine         | $\mathcal{O}(1)$ — typically hundreds of bytes  | $\mathcal{O}(n)$ — typically megabytes reserved    |
| Allocation                   | Single heap allocation                          | Separate stack allocation                          |
| Suspend inside callee        | No — only at explicit `co_await` points         | Yes — any function call can be a suspend point     |
| Implementation cost          | Compiler transforms function into state machine | Context switching (save/restore registers + stack) |
| Migrating between OS threads | Must resume on same or specified thread         | Can freely migrate (stack is self-contained)       |
| Composability                | Requires explicit chaining of coroutines        | Naturally composable via call stack                |

The key limitation of stackless coroutines is that **you cannot suspend in a function called by the
coroutine unless that function is itself a coroutine**. If a regular function calls `co_await`, it
is a compile error — `co_await` can only appear in a coroutine body [N4950 §8.5.5].

```cpp
#include <coroutine>
#include <iostream>

struct NestedPromise {
    NestedPromise() = default;
    NestedPromise(const NestedPromise&) = delete;
    NestedPromise& operator=(const NestedPromise&) = delete;
    ~NestedPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<NestedPromise>::from_promise(*this);
    }
};

struct Nested {
    using promise_type = NestedPromise;
    std::coroutine_handle<NestedPromise> handle;
};

// This is a coroutine — OK to use co_await
Nested inner() {
    std::cout << "inner: before\n";
    co_await std::suspend_always{};
    std::cout << "inner: after\n";
}

// This is a coroutine that calls another coroutine
Nested outer() {
    std::cout << "outer: calling inner\n";
    auto h = inner();
    h.handle.resume();
    h.handle.resume();
    h.handle.destroy();
    std::cout << "outer: done\n";
}

int main() {
    auto coro = outer();
    coro.handle.destroy();
}
```

## Coroutine Frame Layout

When the compiler transforms a coroutine, it generates a **coroutine frame** — a single contiguous
block of memory whose layout is implementation-defined [N4950 §8.5.2]. The general structure is:

```
+-----------------------------------------------+
|  Coroutine frame (heap-allocated)              |
|                                                 |
|  +-------------------------------------------+ |
|  | promise object                             | |
|  |  - coroutine state (initial/running/       | |
|  |    suspended/cancelled/done)              | |
|  |  - stored exception (if any)              | |
|  |  - return value storage                   | |
|  +-------------------------------------------+ |
|  | function parameters (copied)              | |
|  +-------------------------------------------+ |
|  | local variables that cross suspend points  | |
|  +-------------------------------------------+ |
|  | resume/destroy function pointers (vtable)  | |
|  +-------------------------------------------+ |
|  | padding / alignment                        | |
|  +-------------------------------------------+ |
+-----------------------------------------------+
```

The frame must be large enough to hold the **promise object**, a copy of **all function
parameters**, and **every local variable whose lifetime crosses a suspension point**. Variables that
are dead before or after a suspension point need not be stored in the frame. The compiler performs a
liveness analysis to minimize frame size [N4950 §8.5.2].

The total frame size $S$ can be expressed as:

$$
S = \text{sizeof}(\text{promise\_type}) + \sum_{i \in \text{live params}} \text{sizeof}(p_i) + \sum_{j \in \text{live locals}} \text{sizeof}(l_j) + \text{padding}
$$

## Heap Allocation of the Coroutine Frame

By default, the coroutine frame is **dynamically allocated** on the heap using the global
`operator new` [N4950 §8.5.2]. The compiler generates a call equivalent to:

$$
\text{frame} = ::\operatorname{new}\bigl(\text{sizeof(frame)}\bigr)
$$

There are two guaranteed elision scenarios where the compiler **may not** allocate on the heap
[N4950 §8.5.2]:

1. **Guaranteed elision when the coroutine is in the final suspend point and the return object holds
   the coroutine handle.** If `final_suspend` returns `std::suspend_never`, the compiler may destroy
   the frame immediately upon return.

2. **When the coroutine result is prvalue and the promise's `get_return_object` returns a handle
   that does not escape.**

:::warning The standard does not require that the compiler actually perform elision — it only
_permits_ it. In practice, most major compilers (GCC 12+, Clang 16+, MSVC 19.30+) do elide the
allocation in simple cases, but for complex promise types or when the handle escapes, heap
allocation occurs. Always profile if allocation overhead is a concern. :::

Custom allocators can be provided via `operator new` on the promise type or by defining a global
placement `operator new` overload [N4950 §8.5.2]:

```cpp
#include <coroutine>
#include <cstddef>
#include <iostream>

struct TrackedPromise {
    static inline std::size_t alloc_count = 0;
    static inline std::size_t dealloc_count = 0;

    void* operator new(std::size_t size) {
        ++alloc_count;
        std::cout << "Allocating coroutine frame: " << size << " bytes\n";
        return ::operator new(size);
    }

    void operator delete(void* ptr, std::size_t size) {
        ++dealloc_count;
        std::cout << "Deallocating coroutine frame: " << size << " bytes\n";
        ::operator delete(ptr);
    }

    TrackedPromise() = default;
    TrackedPromise(const TrackedPromise&) = delete;
    TrackedPromise& operator=(const TrackedPromise&) = delete;
    ~TrackedPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<TrackedPromise>::from_promise(*this);
    }
};

struct Tracked {
    using promise_type = TrackedPromise;
    std::coroutine_handle<TrackedPromise> handle;
};

Tracked tracked_coro() {
    co_await std::suspend_always{};
    co_return;
}

int main() {
    auto coro = tracked_coro();
    coro.handle.resume();
    coro.handle.destroy();
    std::cout << "allocs=" << TrackedPromise::alloc_count
              << " deallocs=" << TrackedPromise::dealloc_count << "\n";
}
```

## `std::coroutine_handle<P>` for Manual Lifetime Management

`std::coroutine_handle<P>` [N4950 §21.4.4] is a lightweight, copyable, trivially-destructible handle
to a coroutine frame. It does **not** own the frame — it is a non-owning observer. The programmer is
responsible for calling `destroy()` when the coroutine is no longer needed.

Key members of `std::coroutine_handle<P>` [N4950 §21.4.4]:

| Member                   | Description                                               |
| :----------------------- | :-------------------------------------------------------- |
| `handle.done()`          | Returns `true` if the coroutine reached its final suspend |
| `handle.resume()`        | Resumes a suspended coroutine                             |
| `handle.destroy()`       | Destroys the coroutine frame and calls all destructors    |
| `handle.promise()`       | Returns a reference to the promise object                 |
| `handle.from_promise(p)` | Constructs a handle from a promise reference              |
| `coroutine_handle<>()`   | Default-constructed handle (null)                         |
| `handle.operator bool()` | `true` if the handle refers to a coroutine frame          |

## `std::coroutine_handle<P>::destroy()` for Cleanup

Calling `destroy()` on a handle triggers:

1. Destruction of all local variables in the coroutine frame (in reverse order of construction).
2. Destruction of the promise object.
3. Deallocation of the frame memory (via the matching `operator delete`).

After `destroy()`, the handle becomes **invalid** — using it is undefined behavior [N4950 §21.4.4].
If `destroy()` is never called and no other mechanism cleans up, the frame leaks.

:::tip RAII wrappers In production code, wrap `std::coroutine_handle` in an RAII type (e.g.,
`std::unique_ptr` with a custom deleter, or a dedicated `coroutine` class) to ensure `destroy()` is
called even if an exception propagates. :::

## Complete Example: Handle Lifecycle Management

```cpp
#include <coroutine>
#include <iostream>
#include <utility>

struct LifecyclePromise {
    LifecyclePromise() { std::cout << "  promise constructed\n"; }
    LifecyclePromise(const LifecyclePromise&) = delete;
    LifecyclePromise& operator=(const LifecyclePromise&) = delete;
    ~LifecyclePromise() { std::cout << "  promise destroyed\n"; }

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_always final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<LifecyclePromise>::from_promise(*this);
    }
};

struct ScopedCoroutine {
    using promise_type = LifecyclePromise;

    ScopedCoroutine(std::coroutine_handle<LifecyclePromise> h) : handle_(h) {}
    ScopedCoroutine(ScopedCoroutine&& other) noexcept
        : handle_(std::exchange(other.handle_, nullptr)) {}
    ScopedCoroutine& operator=(ScopedCoroutine&& other) noexcept {
        if (this != &other) {
            destroy();
            handle_ = std::exchange(other.handle_, nullptr);
        }
        return *this;
    }
    ScopedCoroutine(const ScopedCoroutine&) = delete;
    ScopedCoroutine& operator=(const ScopedCoroutine&) = delete;

    ~ScopedCoroutine() { destroy(); }

    void destroy() {
        if (handle_) {
            std::cout << "  destroying coroutine frame\n";
            handle_.destroy();
            handle_ = nullptr;
        }
    }

    bool resume() {
        if (handle_ && !handle_.done()) {
            handle_.resume();
            return !handle_.done();
        }
        return false;
    }

    bool done() const { return handle_ && handle_.done(); }

    std::coroutine_handle<LifecyclePromise> handle_;
};

ScopedCoroutine counting_coro(int n) {
    for (int i = 0; i < n; ++i) {
        std::cout << "  yielding " << i << "\n";
        co_await std::suspend_always{};
    }
    std::cout << "  coroutine finished\n";
}

int main() {
    std::cout << "Creating coroutine...\n";
    auto coro = counting_coro(3);

    std::cout << "Resuming...\n";
    while (coro.resume()) {}

    std::cout << "Exiting scope (RAII cleanup)...\n";
    // ~ScopedCoroutine calls destroy() automatically
}
```

Output:

```
Creating coroutine...
  promise constructed
  yielding 0
Resuming...
  yielding 1
  yielding 2
  coroutine finished
Exiting scope (RAII cleanup)...
  destroying coroutine frame
  promise destroyed
```

## See Also

- [Coroutine Handle, Promise Type, and Awaiter](./2_promise_awaiter.md)
- [Generators (std::generator)](./3_generators.md)
- [Task Scheduling and Executors](./4_task_scheduling.md)
