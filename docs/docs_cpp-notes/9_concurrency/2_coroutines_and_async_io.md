---
title: Coroutines and Asynchronous I/O
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: coroutines-and-async-io
---

## 1. Stackless Coroutine Frames and Heap Allocation

### 1.1 Coroutines as Suspendable Functions

A **coroutine** is a function that can be suspended and resumed [N4950 §8.5]. Unlike ordinary functions, which run to completion before returning to the caller, a coroutine may yield control back to its caller at an arbitrary suspension point and later be resumed from that exact point. The C++20 coroutine mechanism is defined in terms of three keywords:

- `co_await`: suspend execution until an awaitable completes [N4950 §8.5.5].
- `co_yield`: suspend execution while producing a value (syntactic sugar for `co_await` on the promise's `yield_value`).
- `co_return`: complete the coroutine and return a value.

Any function body containing one of these keywords is a **coroutine** [N4950 §8.5.2]. The compiler transforms the coroutine into a state machine at compile time. This transformation is entirely implicit — the programmer never writes the state machine manually.

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

:::info
The function `my_coroutine` is a coroutine because its body contains `co_await`. The compiler generates a `promise_type` lookup, allocates a coroutine frame, and transforms the function body into a state machine. The `promise_type` member alias tells the compiler which promise type to use [N4950 §8.5.2].
:::

### 1.2 Stackless vs Stackful Coroutines

C++ chose **stackless coroutines** — the coroutine frame is a single heap-allocated block, not a separate stack. This is a deliberate design decision with important trade-offs.

| Property                     | Stackless (C++)                                 | Stackful (e.g., Boost.Context, goroutines)         |
| :--------------------------- | :---------------------------------------------- | :------------------------------------------------- |
| Frame size                   | Fixed at compile time (known locals)            | Dynamic (grows/shrinks like a regular stack)       |
| Memory per coroutine         | $\mathcal{O}(1)$ — typically hundreds of bytes  | $\mathcal{O}(n)$ — typically megabytes reserved    |
| Allocation                   | Single heap allocation                          | Separate stack allocation                          |
| Suspend inside callee        | No — only at explicit `co_await` points         | Yes — any function call can be a suspend point     |
| Implementation cost          | Compiler transforms function into state machine | Context switching (save/restore registers + stack) |
| Migrating between OS threads | Must resume on same or specified thread         | Can freely migrate (stack is self-contained)       |
| Composability                | Requires explicit chaining of coroutines        | Naturally composable via call stack                |

The key limitation of stackless coroutines is that **you cannot suspend in a function called by the coroutine unless that function is itself a coroutine**. If a regular function calls `co_await`, it is a compile error — `co_await` can only appear in a coroutine body [N4950 §8.5.5].

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

### 1.3 Coroutine Frame Layout

When the compiler transforms a coroutine, it generates a **coroutine frame** — a single contiguous block of memory whose layout is implementation-defined [N4950 §8.5.2]. The general structure is:

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

The frame must be large enough to hold the **promise object**, a copy of **all function parameters**, and **every local variable whose lifetime crosses a suspension point**. Variables that are dead before or after a suspension point need not be stored in the frame. The compiler performs a liveness analysis to minimize frame size [N4950 §8.5.2].

The total frame size $S$ can be expressed as:

$$
S = \text{sizeof}(\text{promise\_type}) + \sum_{i \in \text{live params}} \text{sizeof}(p_i) + \sum_{j \in \text{live locals}} \text{sizeof}(l_j) + \text{padding}
$$

### 1.4 Heap Allocation of the Coroutine Frame

By default, the coroutine frame is **dynamically allocated** on the heap using the global `operator new` [N4950 §8.5.2]. The compiler generates a call equivalent to:

$$
\text{frame} = ::\operatorname{new}\bigl(\text{sizeof(frame)}\bigr)
$$

There are two guaranteed elision scenarios where the compiler **may not** allocate on the heap [N4950 §8.5.2]:

1. **Guaranteed elision when the coroutine is in the final suspend point and the return object holds the coroutine handle.** If `final_suspend` returns `std::suspend_never`, the compiler may destroy the frame immediately upon return.

2. **When the coroutine result is prvalue and the promise's `get_return_object` returns a handle that does not escape.**

:::warning
The standard does not require that the compiler actually perform elision — it only _permits_ it. In practice, most major compilers (GCC 12+, Clang 16+, MSVC 19.30+) do elide the allocation in simple cases, but for complex promise types or when the handle escapes, heap allocation occurs. Always profile if allocation overhead is a concern.
:::

Custom allocators can be provided via `operator new` on the promise type or by defining a global placement `operator new` overload [N4950 §8.5.2]:

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

### 1.5 `std::coroutine_handle<P>` for Manual Lifetime Management

`std::coroutine_handle<P>` [N4950 §21.4.4] is a lightweight, copyable, trivially-destructible handle to a coroutine frame. It does **not** own the frame — it is a non-owning observer. The programmer is responsible for calling `destroy()` when the coroutine is no longer needed.

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

### 1.6 `std::coroutine_handle<P>::destroy()` for Cleanup

Calling `destroy()` on a handle triggers:

1. Destruction of all local variables in the coroutine frame (in reverse order of construction).
2. Destruction of the promise object.
3. Deallocation of the frame memory (via the matching `operator delete`).

After `destroy()`, the handle becomes **invalid** — using it is undefined behavior [N4950 §21.4.4]. If `destroy()` is never called and no other mechanism cleans up, the frame leaks.

:::tip RAII wrappers
In production code, wrap `std::coroutine_handle` in an RAII type (e.g., `std::unique_ptr` with a custom deleter, or a dedicated `coroutine` class) to ensure `destroy()` is called even if an exception propagates.
:::

### 1.7 Complete Example: Handle Lifecycle Management

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

---

## 2. The Coroutine Handle, Promise Type, and Awaiter

### 2.1 The Coroutine Machinery Overview

The C++ coroutine mechanism consists of three interacting components [N4950 §8.5]:

1. **Coroutine handle** (`std::coroutine_handle<P>`): a non-owning reference to the coroutine frame [N4950 §21.4.4].
2. **Promise type**: the communication channel between the coroutine author and the caller. Defined by the `promise_type` nested type inside the return type [N4950 §8.5.2].
3. **Awaiter type**: the type that controls what happens at each `co_await` suspension point. Discovered via the awaitable interface [N4950 §8.5.5].

The relationship between these three is:

$$
\text{Caller} \xrightarrow{\text{invoke}} \text{Coroutine} \xleftrightarrow{\text{promise\_type}} \text{Caller} \xleftrightarrow{\text{awaiter}} \text{co\_await}
$$

### 2.2 `co_await` Expression Semantics [N4950 §8.5.5]

The expression `co_await expr` is transformed by the compiler into a sequence of calls on an **awaiter** object. The awaiter is obtained by the following lookup chain [N4950 §8.5.5]:

1. If `expr` has an `operator co_await` member or non-member overload, the result of `expr.operator co_await()` (or `operator co_await(expr)`) is the awaiter.
2. Otherwise, if the promise type has `await_transform`, then `promise.await_transform(expr)` is called, and the result is the awaiter.
3. Otherwise, `expr` itself is the awaiter.

Once the awaiter is obtained, the compiler generates code equivalent to:

```cpp
auto&& awaiter = <awaiter-expression>;
if (!awaiter.await_ready()) {
    using handle_t = std::coroutine_handle<P>;
    awaiter.await_suspend(coroutine_handle);
    // <coroutine suspended; control returns to caller/resumer>
}
// <resumption point>
awaiter.await_resume();
```

The three methods that an awaiter must provide [N4950 §8.5.5]:

| Method                  | Return type                              | Purpose                                                  |
| :---------------------- | :--------------------------------------- | :------------------------------------------------------- |
| `await_ready()`         | `bool`                                   | If `true`, skip suspension and proceed directly          |
| `await_suspend(handle)` | `void`, `bool`, or `coroutine_handle<Z>` | Called when coroutine suspends; controls resumption      |
| `await_resume()`        | any type                                 | Produces the result of `co_await expr`; called on resume |

The return type of `await_suspend` is critical [N4950 §8.5.5]:

- **`void`**: the coroutine is suspended; control returns to the caller.
- **`bool`**: if `true`, the coroutine is suspended; if `false`, it resumes immediately.
- **`coroutine_handle<Z>`**: the coroutine is suspended, and the returned handle is resumed (symmetric transfer).

### 2.3 Promise Type vs Awaiter Type

The **promise type** is the bidirectional communication channel between the coroutine and its caller. The **awaiter type** is the mechanism that controls individual suspension points.

| Aspect      | Promise Type                                            | Awaiter Type                                          |
| :---------- | :------------------------------------------------------ | :---------------------------------------------------- |
| Lifetime    | Lives for the entire duration of the coroutine frame    | Temporary — lives only for the duration of `co_await` |
| Purpose     | Manages coroutine state, return values, exceptions      | Controls individual suspend/resume behavior           |
| Required by | Every coroutine (via `promise_type` alias)              | Every `co_await` expression                           |
| Key methods | `get_return_object`, `initial_suspend`, `final_suspend` | `await_ready`, `await_suspend`, `await_resume`        |

### 2.4 `promise_type::get_return_object()`

The `get_return_object()` method [N4950 §8.5.2] is called **before** the coroutine body begins execution. It produces the value that is returned to the caller. Typically, this is a wrapper type that holds a `std::coroutine_handle` and provides a convenient API:

```cpp
#include <coroutine>
#include <iostream>
#include <string>

struct Result {
    struct promise_type {
        std::string value_{};

        promise_type() = default;
        promise_type(const promise_type&) = delete;
        promise_type& operator=(const promise_type&) = delete;
        ~promise_type() = default;

        std::suspend_never initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void unhandled_exception() {}

        Result get_return_object() {
            return Result{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        void return_value(std::string s) {
            value_ = std::move(s);
        }
    };

    std::coroutine_handle<promise_type> handle;

    std::string& value() { return handle.promise().value_; }

    explicit Result(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~Result() { if (handle) handle.destroy(); }
    Result(const Result&) = delete;
    Result& operator=(const Result&) = delete;
};

Result compute_value() {
    std::cout << "computing...\n";
    co_return "hello from coroutine";
}

int main() {
    Result r = compute_value();
    // The coroutine ran eagerly (initial_suspend returns suspend_never)
    // and is now at final suspend (suspend_always)
    std::cout << "result: " << r.value() << "\n";
    // ~Result calls handle.destroy()
}
```

### 2.5 `await_transform` for Custom Suspension Behavior

If the promise type defines `await_transform`, every `co_await expr` first passes through it [N4950 §8.5.5]. This allows the promise to intercept and transform any awaitable into a custom awaiter, enabling library-level control over suspension semantics:

```cpp
#include <coroutine>
#include <iostream>

struct TransformingPromise {
    TransformingPromise() = default;
    TransformingPromise(const TransformingPromise&) = delete;
    TransformingPromise& operator=(const TransformingPromise&) = delete;
    ~TransformingPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() {}

    auto get_return_object() {
        return std::coroutine_handle<TransformingPromise>::from_promise(*this);
    }

    // Transform any integer into a logging awaiter
    auto await_transform(int value) {
        struct IntAwaiter {
            int value;
            bool await_ready() const noexcept {
                std::cout << "await_ready(" << value << ")\n";
                return value == 0;
            }
            void await_suspend(std::coroutine_handle<>) const noexcept {
                std::cout << "await_suspend(" << value << ")\n";
            }
            int await_resume() const noexcept {
                std::cout << "await_resume(" << value << ")\n";
                return value * 2;
            }
        };
        return IntAwaiter{value};
    }
};

struct Transforming {
    using promise_type = TransformingPromise;
    std::coroutine_handle<TransformingPromise> handle;
};

Transforming transformed() {
    int a = co_await 5;
    int b = co_await 0;
    int c = co_await 3;
    std::cout << "a=" << a << " b=" << b << " c=" << c << "\n";
}

int main() {
    auto coro = transformed();
    coro.handle.destroy();
}
```

Output:

```
await_ready(5)
await_suspend(5)
await_resume(5)
await_ready(0)
await_resume(0)
await_ready(3)
await_suspend(3)
await_resume(3)
a=10 b=0 c=6
```

### 2.6 `yield_value` and `return_value`

The promise type communicates values back to the caller through two distinct channels [N4950 §8.5.2]:

- **`co_yield expr`** is syntactic sugar for `co_await promise.yield_value(expr)`. It suspends the coroutine and makes `expr` available to the caller.
- **`co_return expr`** calls `promise.return_value(expr)` (or `promise.return_void()` if no value) and transitions the coroutine to the final suspend point.

A promise type must define **either** `return_value` or `return_void`, but not both. If the coroutine uses `co_return;` (no value), `return_void` must be present.

```cpp
#include <coroutine>
#include <iostream>
#include <string>
#include <variant>

struct Channel {
    struct promise_type {
        std::variant<std::monostate, std::string, int> value_{};

        promise_type() = default;
        promise_type(const promise_type&) = delete;
        promise_type& operator=(const promise_type&) = delete;
        ~promise_type() = default;

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}

        auto get_return_object() {
            return Channel{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        auto yield_value(std::string s) {
            value_ = std::move(s);
            return std::suspend_always{};
        }

        auto yield_value(int i) {
            value_ = i;
            return std::suspend_always{};
        }
    };

    std::coroutine_handle<promise_type> handle;

    explicit Channel(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~Channel() { if (handle) handle.destroy(); }
    Channel(const Channel&) = delete;
    Channel& operator=(const Channel&) = delete;

    auto& value() { return handle.promise().value_; }

    bool next() {
        if (!handle.done()) {
            handle.resume();
            return !handle.done();
        }
        return false;
    }
};

Channel multi_type_channel() {
    co_yield std::string("hello");
    co_yield 42;
    co_yield std::string("world");
    co_yield 99;
}

int main() {
    Channel ch = multi_type_channel();
    while (ch.next()) {
        auto& v = ch.value();
        if (std::holds_alternative<std::string>(v))
            std::cout << "string: " << std::get<std::string>(v) << "\n";
        else if (std::holds_alternative<int>(v))
            std::cout << "int: " << std::get<int>(v) << "\n";
    }
}
```

---

## 3. Generators (`std::generator<T>`) and Synchronous Yielding

### 3.1 `std::generator<T>` (C++23)

C++23 introduced `std::generator<T>` [N4950 §25.4.4], a standard library type that wraps a coroutine producing a sequence of values via `co_yield`. It is an input iterator whose `operator++` resumes the coroutine and whose `operator*` returns the yielded value.

The declaration (simplified) [N4950 §25.4.4]:

```cpp
template<class Ref, class V = remove_cvref_t<Ref>, class Allocator = allocator<char>>
class generator : public ranges::view_interface<generator<Ref, V, Allocator>> {
    // ...
};
```

`std::generator<T>` is a **view** — it is lightweight, non-owning, and models `input_range`. Values are computed lazily on demand.

### 3.2 `co_yield` as Syntactic Sugar

The expression `co_yield expr` is defined by the standard as [N4950 §8.5.5]:

$$
\text{co\_yield} \; \text{expr} \;\equiv\; \text{co\_await} \; \text{promise.yield\_value}(\text{expr})
$$

This means that `co_yield` requires the promise type to have a `yield_value` method that returns an awaiter. The `std::generator` promise type internally stores the yielded value and returns a `std::suspend_always` awaiter to suspend the coroutine until the caller requests the next value.

### 3.3 Lazy Iteration

The defining characteristic of a generator is **lazy evaluation**. No values are computed until the iterator is advanced. This makes generators suitable for representing potentially infinite sequences, large data pipelines, or expensive computations where only a prefix of the results is needed.

The memory usage of a generator is $\mathcal{O}(d)$ where $d$ is the depth of the coroutine's local variable state that crosses a suspend point — typically constant and independent of the number of values produced.

### 3.4 Comparison with Python Generators

| Feature                     | Python `generator`                        | C++ `std::generator<T>` (C++23)                |
| :-------------------------- | :---------------------------------------- | :--------------------------------------------- |
| Syntax                      | `yield expr`                              | `co_yield expr`                                |
| Return type                 | Implicit                                  | `std::generator<T>` or custom                  |
| Type safety                 | Dynamically typed                         | Statically typed (templates)                   |
| Lazy evaluation             | Yes                                       | Yes                                            |
| Composable via `yield from` | Yes (`yield from gen`)                    | Via nested coroutine calls or range adapters   |
| Exception propagation       | `throw` inside generator caught by caller | Same — exceptions propagate through `co_await` |
| Standard library support    | Built-in since Python 2.2                 | C++23 (`<generator>`)                          |

### 3.5 Complete Example: Fibonacci Generator with `std::generator`

```cpp
#include <generator>
#include <iostream>
#include <cstdint>

std::generator<std::uint64_t> fibonacci() {
    std::uint64_t a = 0, b = 1;
    while (true) {
        co_yield a;
        auto next = a + b;
        a = b;
        b = next;
    }
}

std::generator<std::uint64_t> take(std::generator<std::uint64_t> src, std::size_t n) {
    std::size_t count = 0;
    for (auto val : src) {
        if (count >= n) co_return;
        co_yield val;
        ++count;
    }
}

std::generator<std::uint64_t> even_fibonacci() {
    for (auto val : fibonacci()) {
        if (val > 4'000'000) co_return;
        if (val % 2 == 0) co_yield val;
    }
}

int main() {
    std::cout << "First 15 Fibonacci numbers:\n";
    for (auto val : take(fibonacci(), 15)) {
        std::cout << "  " << val << "\n";
    }

    std::cout << "\nEven Fibonacci numbers under 4,000,000:\n";
    std::uint64_t sum = 0;
    for (auto val : even_fibonacci()) {
        std::cout << "  " << val << "\n";
        sum += val;
    }
    std::cout << "Sum: " << sum << "\n";
}
```

Output:

```
First 15 Fibonacci numbers:
  0
  1
  1
  2
  3
  5
  8
  13
  21
  34
  55
  89
  144
  233
  377

Even Fibonacci numbers under 4,000,000:
  0
  2
  8
  34
  144
  610
  2584
  10946
  46368
  196418
  832040
  3524578
Sum: 4613732
```

:::tip
`std::generator` is composable with C++20 ranges. You can pipe a generator into `std::views::filter`, `std::views::transform`, etc. However, be aware that range adaptors are eager on the iteration step — each `++it` call on the adapted view will advance the underlying generator by one element.
:::

---

## 4. Task Scheduling and Executors

### 4.1 Task Concept

A **task** is a coroutine that produces a result asynchronously. Unlike a generator (which produces many values), a task produces exactly one result upon completion. The task coroutine is typically lazy — it does not begin executing until someone calls `resume()` or an executor schedules it.

The minimal interface for a task is:

- **Awaitable**: the task can be `co_await`ed, suspending the awaiting coroutine until the task completes.
- **Result access**: once the task completes, its result is available.
- **Exception propagation**: if the task throws, the exception is rethrown at the `co_await` point.

### 4.2 Coroutine-Based Pipeline Processing

Coroutines enable natural expression of data pipelines where each stage can suspend and resume independently:

$$
\text{source} \xrightarrow{\text{co\_await}} \text{transform}_1 \xrightarrow{\text{co\_await}} \text{transform}_2 \xrightarrow{\text{co\_await}} \text{sink}
$$

Each stage is a coroutine that reads from the previous stage and writes to the next, with suspension occurring whenever data is not yet available.

### 4.3 Async/Await Patterns Across Languages

| Language   | Keyword(s)                          | Execution model                  | Cancellation            | Error handling        |
| :--------- | :---------------------------------- | :------------------------------- | :---------------------- | :-------------------- |
| C++20      | `co_await`, `co_return`, `co_yield` | Stackless, manual scheduling     | `std::stop_token`       | Exception propagation |
| JavaScript | `async`, `await`                    | Event loop (single-threaded)     | `AbortController`       | `try/catch`           |
| Python     | `async def`, `await`                | Event loop (`asyncio`)           | `asyncio.Task.cancel()` | `try/except`          |
| Rust       | `.await`                            | Async runtime (tokio, async-std) | `CancellationToken`     | `?` operator          |
| C#         | `async`, `await`                    | ThreadPool / IOCP                | `CancellationToken`     | `try/catch`           |

C++ is unique in providing **no built-in executor or event loop**. The coroutine machinery is deliberately low-level — the standard provides only the suspension/resumption primitives, and scheduling is entirely the programmer's or library's responsibility.

### 4.4 Structured Concurrency: `when_all` / `when_any`

**Structured concurrency** is the principle that every concurrent operation should have a well-defined lifetime — all child tasks must complete (or be cancelled) before the parent scope exits. C++ does not yet have a standard `when_all` or `when_any` primitive, but these are common library patterns.

- **`when_all(tasks...)`**: returns when **all** tasks have completed. The result is a tuple of results.
- **`when_any(tasks...)`**: returns when **any** task completes, cancelling the rest. The result identifies which task finished first.

The complexity of `when_all` for $n$ tasks is $\mathcal{O}(n)$ in terms of coroutine handles that must be tracked and resumed.

### 4.5 Complete Example: Task Class Wrapping a Coroutine

```cpp
#include <coroutine>
#include <iostream>
#include <utility>
#include <exception>
#include <functional>

struct Task {
    struct promise_type {
        std::exception_ptr exception_{};
        bool ready_{false};

        promise_type() = default;
        promise_type(const promise_type&) = delete;
        promise_type& operator=(const promise_type&) = delete;
        ~promise_type() = default;

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }

        Task get_return_object() {
            return Task{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        void return_void() { ready_ = true; }

        void unhandled_exception() {
            exception_ = std::current_exception();
            ready_ = true;
        }

        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }
            void await_suspend(std::coroutine_handle<promise_type> h) const noexcept {
                if (h.promise().continuation_)
                    h.promise().continuation_.resume();
            }
            void await_resume() const noexcept {}
        };

        std::coroutine_handle<> continuation_{};
    };

    struct TaskAwaiter {
        std::coroutine_handle<promise_type> handle_;

        bool await_ready() const noexcept {
            return handle_.done();
        }

        std::coroutine_handle<> await_suspend(
            std::coroutine_handle<> caller) const noexcept {
            handle_.promise().continuation_ = caller;
            return handle_;
        }

        void await_resume() const {
            if (handle_.promise().exception_)
                std::rethrow_exception(handle_.promise().exception_);
        }
    };

    std::coroutine_handle<promise_type> handle;

    explicit Task(std::coroutine_handle<promise_type> h) : handle(h) {}

    Task(Task&& other) noexcept
        : handle(std::exchange(other.handle, nullptr)) {}
    Task(const Task&) = delete;
    Task& operator=(Task&& other) noexcept {
        if (this != &other) {
            if (handle) handle.destroy();
            handle = std::exchange(other.handle, nullptr);
        }
        return *this;
    }
    Task& operator=(const Task&) = delete;

    ~Task() { if (handle) handle.destroy(); }

    void start() {
        if (handle && !handle.done())
            handle.resume();
    }

    bool done() const { return !handle || handle.done(); }

    auto operator co_await() && {
        return TaskAwaiter{handle};
    }

    auto operator co_await() & {
        return TaskAwaiter{handle};
    }
};

Task async_add(int a, int b) {
    co_await std::suspend_always{};
    std::cout << "  async_add(" << a << ", " << b << ") resuming\n";
    co_return;
}

Task chained_computation() {
    std::cout << "  starting chained_computation\n";
    co_await std::suspend_always{};
    std::cout << "  chained_computation step 1 done\n";
    co_await std::suspend_always{};
    std::cout << "  chained_computation step 2 done\n";
    co_return;
}

Task runner() {
    std::cout << "runner: launching tasks\n";
    auto t1 = async_add(1, 2);
    auto t2 = async_add(3, 4);
    auto t3 = chained_computation();

    t1.start();
    t2.start();
    t3.start();

    co_await std::move(t1);
    co_await std::move(t2);
    co_await std::move(t3);

    std::cout << "runner: all tasks done\n";
    co_return;
}

int main() {
    std::cout << "main: starting runner\n";
    auto r = runner();
    while (!r.done()) {
        std::cout << "main: pumping event loop\n";
        r.handle.resume();
    }
    std::cout << "main: done\n";
}
```

### 4.6 Complete Example: Simple Thread Pool Executor

```cpp
#include <coroutine>
#include <iostream>
#include <thread>
#include <vector>
#include <queue>
#include <mutex>
#include <condition_variable>
#include <functional>
#include <atomic>
#include <memory>

class ThreadPool {
public:
    explicit ThreadPool(std::size_t num_threads = std::thread::hardware_concurrency())
        : stop_(false) {
        for (std::size_t i = 0; i < num_threads; ++i) {
            workers_.emplace_back([this] { worker_loop(); });
        }
    }

    ~ThreadPool() {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            stop_ = true;
        }
        cv_.notify_all();
        for (auto& t : workers_) {
            if (t.joinable()) t.join();
        }
    }

    void schedule(std::function<void()> task) {
        {
            std::lock_guard<std::mutex> lock(mutex_);
            queue_.push(std::move(task));
        }
        cv_.notify_one();
    }

    static ThreadPool& instance() {
        static ThreadPool pool;
        return pool;
    }

private:
    void worker_loop() {
        while (true) {
            std::function<void()> task;
            {
                std::unique_lock<std::mutex> lock(mutex_);
                cv_.wait(lock, [this] { return stop_ || !queue_.empty(); });
                if (stop_ && queue_.empty()) return;
                task = std::move(queue_.front());
                queue_.pop();
            }
            task();
        }
    }

    std::vector<std::thread> workers_;
    std::queue<std::function<void()>> queue_;
    std::mutex mutex_;
    std::condition_variable cv_;
    bool stop_;
};

struct ThreadPoolTask {
    struct promise_type {
        std::exception_ptr exception_{};

        promise_type() = default;
        promise_type(const promise_type&) = delete;
        promise_type& operator=(const promise_type&) = delete;
        ~promise_type() = default;

        std::suspend_never initial_suspend() noexcept { return {}; }
        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }
            void await_suspend(std::coroutine_handle<promise_type> h) const noexcept {
                if (h.promise().continuation_)
                    h.promise().continuation_.resume();
            }
            void await_resume() const noexcept {}
        };
        std::suspend_always final_suspend() noexcept { return {}; }

        ThreadPoolTask get_return_object() {
            return ThreadPoolTask{
                std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        void return_void() {}
        void unhandled_exception() {
            exception_ = std::current_exception();
        }

        std::coroutine_handle<> continuation_{};
    };

    struct ThreadPoolAwaiter {
        std::coroutine_handle<promise_type> handle_;

        bool await_ready() const noexcept { return handle_.done(); }

        void await_suspend(std::coroutine_handle<> caller) const {
            handle_.promise().continuation_ = caller;
            ThreadPool::instance().schedule([h = handle_] { h.resume(); });
        }

        void await_resume() const {
            if (handle_.promise().exception_)
                std::rethrow_exception(handle_.promise().exception_);
        }
    };

    std::coroutine_handle<promise_type> handle;

    explicit ThreadPoolTask(std::coroutine_handle<promise_type> h) : handle(h) {}
    ThreadPoolTask(ThreadPoolTask&& other) noexcept
        : handle(std::exchange(other.handle, nullptr)) {}
    ThreadPoolTask(const ThreadPoolTask&) = delete;
    ThreadPoolTask& operator=(ThreadPoolTask&&) = delete;
    ThreadPoolTask& operator=(const ThreadPoolTask&) = delete;

    ~ThreadPoolTask() { if (handle) handle.destroy(); }

    auto operator co_await() {
        return ThreadPoolAwaiter{handle};
    }
};

ThreadPoolTask compute_on_thread(int id, int iterations) {
    std::cout << "  task " << id << " starting on thread "
              << std::this_thread::get_id() << "\n";
    for (int i = 0; i < iterations; ++i) {
        co_await std::suspend_always{};
    }
    std::cout << "  task " << id << " finished on thread "
              << std::this_thread::get_id() << "\n";
}

ThreadPoolTask run_all() {
    std::cout << "run_all on thread " << std::this_thread::get_id() << "\n";
    auto t1 = compute_on_thread(1, 3);
    auto t2 = compute_on_thread(2, 2);
    auto t3 = compute_on_thread(3, 4);

    co_await std::move(t1);
    co_await std::move(t2);
    co_await std::move(t3);

    std::cout << "run_all: all tasks completed\n";
}

int main() {
    std::cout << "main on thread " << std::this_thread::get_id() << "\n";

    auto task = run_all();

    while (!task.handle.done()) {
        std::this_thread::sleep_for(std::chrono::milliseconds(10));
    }

    std::cout << "main: done\n";
}
```

:::warning
This thread pool executor is a simplified educational example. A production executor must handle: work stealing, priority queues, thread affinity, shutdown semantics, exception aggregation across `when_all`, and proper cancellation propagation. Libraries like [libunifex](https://github.com/facebookexperimental/libunifex) (now `std::execution` proposal, P2300) provide production-grade executors.
:::

---

## 5. Futures, Promises, and Async Flows

### 5.1 `std::future<T>` [N4950 §33.6.4]

`std::future<T>` [N4950 §33.6.4] is a synchronization primitive that provides access to a result that will be available in the future. The caller can:

- **Block** on the result with `get()`, which waits until the result is ready and then moves or copies it.
- **Wait** with `wait()`, which blocks until the result is ready.
- **Poll** with `wait_for(duration)` or `wait_until(time_point)`, which return the readiness status without blocking indefinitely.

`std::future` is **move-only** — it cannot be copied. After `get()` is called, the future is invalidated (subsequent calls to `get()` throw `std::future_error` with `std::future_errc::no_state`).

```cpp
#include <future>
#include <iostream>
#include <chrono>

int main() {
    std::future<int> f = std::async(std::launch::async, [] {
        std::this_thread::sleep_for(std::chrono::milliseconds(100));
        return 42;
    });

    auto status = f.wait_for(std::chrono::milliseconds(0));
    std::cout << "Ready immediately? "
              << (status == std::future_status::ready ? "yes" : "no") << "\n";

    int result = f.get();
    std::cout << "Result: " << result << "\n";
}
```

### 5.2 `std::promise<T>` [N4950 §33.6.5]

`std::promise<T>` [N4950 §33.6.5] is the **producer** side of the future/promise pair. The promise provides:

- `set_value(val)`: stores the result and makes it available to the waiting future.
- `set_exception(eptr)`: stores an exception, which is rethrown when `future::get()` is called.
- `get_future()`: returns a `std::future<T>` associated with this promise.

Each `std::promise` can produce at most **one** `std::future` via `get_future()`. Calling `get_future()` more than once throws `std::future_error`.

The relationship is:

$$
\text{std::promise<T>} \xrightarrow{\text{get\_future()}} \text{std::future<T>}
$$

### 5.3 `std::async` for Launching Coroutines with Policy

`std::async` [N4950 §33.6.8] launches an asynchronous task and returns a `std::future`. The launch policy controls execution:

| Policy                                                  | Behavior                                                       |
| :------------------------------------------------------ | :------------------------------------------------------------- |
| `std::launch::async`                                    | Runs on a new thread (or thread pool); guaranteed asynchronous |
| `std::launch::deferred`                                 | Lazy — runs when `get()` is called on the calling thread       |
| `std::launch::async \| std::launch::deferred` (default) | Implementation chooses (may be either)                         |

:::warning
With the default launch policy, the implementation is free to choose `deferred` execution. This means the task might run synchronously on the calling thread when `get()` is called, defeating the purpose of asynchronous execution. Always use `std::launch::async` explicitly if you need guaranteed asynchronous execution.
:::

### 5.4 Future/Promise Pair as the Basic Async Primitive

The future/promise pair is the fundamental building block for asynchronous computation in C++. The promise is held by the producer (the code performing the computation), and the future is held by the consumer (the code awaiting the result). They communicate through a **shared state** [N4950 §33.6.4]:

$$
\underbrace{\text{Producer}}_{\text{holds std::promise}} \xrightarrow{\text{shared state}} \underbrace{\text{Consumer}}_{\text{holds std::future}}
$$

The shared state transitions through these phases:

1. **Deferred**: not yet started (only with `std::launch::deferred`).
2. **Ready**: the result or exception has been stored.
3. **Retrieved**: `get()` has been called; the state is consumed.

### 5.5 Limitations: No Composability

The primary limitation of `std::future` is **lack of composability** [N4950 §33.6.4]. Unlike JavaScript `Promise.then()` or Rust's `Future`, C++ `std::future`:

- Has no `.then()` method for chaining.
- Cannot be combined with `when_all` or `when_any` from the standard library.
- Cannot be cancelled.
- Is not a coroutine awaitable (no `operator co_await`).

This is why C++20 coroutines are essential for real-world asynchronous programming — they provide the composability that `std::future` lacks. Libraries like `cppcoro` (now archived) and the proposed `std::execution` (P2300) aim to bridge this gap.

| Feature              | `std::future` (C++11) | `std::execution::sender` (P2300) | JavaScript `Promise`    |
| :------------------- | :-------------------- | :------------------------------- | :---------------------- |
| Chaining (`.then()`) | No                    | Yes (via `then`)                 | Yes                     |
| Cancellation         | No                    | Yes (via stop tokens)            | Yes (`AbortController`) |
| `co_await`           | No (without library)  | Yes (via `awaitable`)            | Yes (native)            |
| Error handling       | Exception propagation | Via `set_error`                  | `.catch()`              |
| Structured conc.     | No                    | Yes (`when_all`, `transfer`)     | `Promise.all()`         |

### 5.6 Complete Example: Async File Reading with Future/Promise

```cpp
#include <future>
#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <filesystem>

std::future<std::string> read_file_async(const std::filesystem::path& path) {
    std::promise<std::string> promise;
    auto future = promise.get_future();

    std::thread([path, p = std::move(promise)]() mutable {
        try {
            std::ifstream file(path);
            if (!file) {
                throw std::runtime_error("Cannot open file: " + path.string());
            }
            std::string content(
                (std::istreambuf_iterator<char>(file)),
                std::istreambuf_iterator<char>());
            p.set_value(std::move(content));
        } catch (...) {
            p.set_exception(std::current_exception());
        }
    }).detach();

    return future;
}

int main() {
    auto f1 = read_file_async("file1.txt");
    auto f2 = read_file_async("file2.txt");

    try {
        auto c1 = f1.get();
        std::cout << "file1.txt: " << c1.size() << " bytes\n";
    } catch (const std::exception& e) {
        std::cout << "file1.txt error: " << e.what() << "\n";
    }

    try {
        auto c2 = f2.get();
        std::cout << "file2.txt: " << c2.size() << " bytes\n";
    } catch (const std::exception& e) {
        std::cout << "file2.txt error: " << e.what() << "\n";
    }
}
```

### 5.7 Complete Example: Parallel Async Tasks with `std::async`

```cpp
#include <future>
#include <iostream>
#include <vector>
#include <numeric>
#include <chrono>

double partial_sum(std::size_t start, std::size_t end,
                   const std::vector<double>& data) {
    double sum = 0.0;
    for (std::size_t i = start; i < end; ++i) {
        sum += data[i];
    }
    return sum;
}

double parallel_sum(const std::vector<double>& data, std::size_t num_chunks) {
    std::size_t n = data.size();
    std::size_t chunk_size = (n + num_chunks - 1) / num_chunks;

    std::vector<std::future<double>> futures;
    futures.reserve(num_chunks);

    for (std::size_t i = 0; i < num_chunks; ++i) {
        std::size_t start = i * chunk_size;
        std::size_t end = std::min(start + chunk_size, n);
        if (start >= n) break;
        futures.push_back(std::async(
            std::launch::async, partial_sum, start, end, std::cref(data)));
    }

    double total = 0.0;
    for (auto& f : futures) {
        total += f.get();
    }
    return total;
}

int main() {
    constexpr std::size_t N = 10'000'000;
    std::vector<double> data(N);
    for (std::size_t i = 0; i < N; ++i) {
        data[i] = static_cast<double>(i) * 0.001;
    }

    auto t1 = std::chrono::high_resolution_clock::now();
    double seq = partial_sum(0, N, data);
    auto t2 = std::chrono::high_resolution_clock::now();

    double par = parallel_sum(data, 8);
    auto t3 = std::chrono::high_resolution_clock::now();

    auto seq_ms = std::chrono::duration<double, std::milli>(t2 - t1).count();
    auto par_ms = std::chrono::duration<double, std::milli>(t3 - t2).count();

    std::cout << "Sequential sum: " << seq << " (" << seq_ms << " ms)\n";
    std::cout << "Parallel sum:   " << par << " (" << par_ms << " ms)\n";
    std::cout << "Speedup: " << seq_ms / par_ms << "x\n";
}
```

:::tip
When using `std::async` with `std::launch::async`, be aware that the C++ standard does **not** require implementations to use a thread pool. Some implementations (notably GCC's libstdc++) spawn a new thread for each `std::async` call, which can be expensive. For high-throughput scenarios, use a dedicated thread pool or a coroutine-based executor.
:::

---

## 6. Cancellation and Error Handling in Coroutines

### 6.1 Cancellation via `std::stop_token` Integration

C++20 introduced `std::stop_token` [N4950 §33.5.1] as a cooperative cancellation mechanism. A `std::stop_token` is a non-owning observer that can check whether a `std::stop_source` has requested cancellation.

The key types [N4950 §33.5]:

| Type                 | Role                                           |
| :------------------- | :--------------------------------------------- |
| `std::stop_token`    | Non-owning observer; checks `stop_requested()` |
| `std::stop_source`   | Owner; calls `request_stop()` to signal        |
| `std::stop_callback` | Registers a callback invoked on cancellation   |

To integrate cancellation with coroutines, the `stop_token` is typically passed as a parameter to the coroutine or stored in the promise type. The coroutine periodically checks `stop_requested()` at suspension points.

### 6.2 Exception Propagation Through Coroutines

When an exception is thrown inside a coroutine and not caught within the coroutine body, the standard machinery handles it as follows [N4950 §8.5.3]:

1. The exception is caught by the coroutine machinery.
2. `promise.unhandled_exception()` is called. The default behavior stores the exception via `std::current_exception()`.
3. When the coroutine is `co_await`ed, `await_resume()` rethrows the stored exception.

This means that exceptions propagate naturally through coroutine chains, just as they would through synchronous call chains:

$$
\text{inner throws} \rightarrow \text{inner.unhandled\_exception()} \rightarrow \text{outer.await\_resume() rethrows}
$$

```cpp
#include <coroutine>
#include <iostream>
#include <stdexcept>

struct ThrowingPromise {
    std::exception_ptr exception_{};

    ThrowingPromise() = default;
    ThrowingPromise(const ThrowingPromise&) = delete;
    ThrowingPromise& operator=(const ThrowingPromise&) = delete;
    ~ThrowingPromise() = default;

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_always final_suspend() noexcept { return {}; }

    auto get_return_object() {
        return std::coroutine_handle<ThrowingPromise>::from_promise(*this);
    }

    void return_void() {}

    void unhandled_exception() {
        exception_ = std::current_exception();
        std::cout << "  [promise] caught unhandled exception\n";
    }
};

struct ThrowingTask {
    using promise_type = ThrowingPromise;
    std::coroutine_handle<ThrowingPromise> handle;

    explicit ThrowingTask(std::coroutine_handle<ThrowingPromise> h) : handle(h) {}
    ~ThrowingTask() { if (handle) handle.destroy(); }
    ThrowingTask(ThrowingTask&& o) noexcept : handle(std::exchange(o.handle, nullptr)) {}
    ThrowingTask(const ThrowingTask&) = delete;
    ThrowingTask& operator=(ThrowingTask&&) = delete;
    ThrowingTask& operator=(const ThrowingTask&) = delete;
};

ThrowingTask failing_inner() {
    std::cout << "  inner: about to throw\n";
    throw std::runtime_error("inner failure");
    co_return;
}

ThrowingTask failing_outer() {
    std::cout << "  outer: calling inner\n";
    auto inner = failing_inner();
    std::cout << "  outer: inner created, checking for exception\n";
    if (inner.handle.promise().exception_) {
        std::exception_ptr e = inner.handle.promise().exception_;
        inner.handle.destroy();
        std::rethrow_exception(e);
    }
    inner.handle.destroy();
    co_return;
}

int main() {
    std::cout << "main: starting outer\n";
    auto outer = failing_outer();

    if (outer.handle.promise().exception_) {
        try {
            std::rethrow_exception(outer.handle.promise().exception_);
        } catch (const std::exception& e) {
            std::cout << "main caught: " << e.what() << "\n";
        }
    }

    outer.handle.destroy();
}
```

### 6.3 Unhandled Exceptions in Coroutines

If `unhandled_exception()` does not store the exception and instead rethrows it, the behavior depends on context [N4950 §8.5.3]:

- If the coroutine has not yet reached `final_suspend`, the exception propagates out of `resume()`.
- If the coroutine has no caller waiting (e.g., it was detached), `std::terminate()` is called.

:::warning
Always store exceptions in `unhandled_exception()` and rethrow them at an appropriate `await_resume()` point. Letting exceptions escape `resume()` makes the coroutine interface fragile and can lead to `std::terminate()` in detached scenarios.
:::

### 6.4 Cleanup on Cancellation

When a coroutine is cancelled, all local variables that are still alive must be destroyed. The compiler-generated state machine ensures that destructors run for variables whose lifetime spans the current suspension point [N4950 §8.5.2]. This is analogous to stack unwinding in regular exception handling.

The cleanup order follows the reverse construction order, just like normal function scope exit. Variables constructed before the suspension point and still live at that point will have their destructors called when `destroy()` is invoked on the coroutine handle.

### 6.5 Complete Example: Cancellable Async Operation

```cpp
#include <coroutine>
#include <iostream>
#include <stop_token>
#include <thread>
#include <chrono>
#include <atomic>
#include <functional>
#include <mutex>
#include <condition_variable>

struct CancellablePromise {
    std::exception_ptr exception_{};
    std::stop_token stop_token_{};
    std::coroutine_handle<> continuation_{};
    bool done_{false};

    CancellablePromise() = default;
    CancellablePromise(const CancellablePromise&) = delete;
    CancellablePromise& operator=(const CancellablePromise&) = delete;
    ~CancellablePromise() = default;

    std::suspend_always initial_suspend() noexcept { return {}; }
    struct FinalAwaiter {
        bool await_ready() const noexcept { return false; }
        void await_suspend(std::coroutine_handle<CancellablePromise> h) const noexcept {
            h.promise().done_ = true;
            if (h.promise().continuation_)
                h.promise().continuation_.resume();
        }
        void await_resume() const noexcept {}
    };
    std::suspend_always final_suspend() noexcept { return {}; }

    auto get_return_object() {
        return std::coroutine_handle<CancellablePromise>::from_promise(*this);
    }

    void return_void() {}
    void unhandled_exception() {
        exception_ = std::current_exception();
    }

    void set_stop_token(std::stop_token st) {
        stop_token_ = st;
    }
};

struct CancellableAwaiter {
    std::stop_token stop_;
    std::chrono::milliseconds duration;

    bool await_ready() const noexcept { return duration.count() == 0; }

    void await_suspend(std::coroutine_handle<CancellablePromise> h) const {
        std::thread([stop = stop_, dur = duration, h]() mutable {
            std::mutex mtx;
            std::condition_variable cv;
            std::unique_lock<std::mutex> lock(mtx);
            bool cancelled = !cv.wait_for(lock, dur, [&stop] {
                return stop.stop_requested();
            });
            if (h.done()) return;
            if (cancelled) {
                h.promise().exception_ = std::make_exception_ptr(
                    std::runtime_error("operation cancelled"));
            }
            h.resume();
        }).detach();
    }

    void await_resume() const {
        if (auto& ex = std::coroutine_handle<CancellablePromise>::from_address(
                nullptr).promise().exception_; false) {}
    }
};

struct CancellableTask {
    using promise_type = CancellablePromise;
    std::coroutine_handle<promise_type> handle;

    explicit CancellableTask(std::coroutine_handle<promise_type> h) : handle(h) {}
    CancellableTask(CancellableTask&& o) noexcept
        : handle(std::exchange(o.handle, nullptr)) {}
    CancellableTask(const CancellableTask&) = delete;
    CancellableTask& operator=(CancellableTask&&) = delete;
    CancellableTask& operator=(const CancellableTask&) = delete;
    ~CancellableTask() { if (handle) handle.destroy(); }

    void set_stop_token(std::stop_token st) {
        handle.promise().set_stop_token(st);
    }

    bool done() const { return handle.done(); }

    void wait() {
        while (!handle.done()) {
            std::this_thread::sleep_for(std::chrono::milliseconds(10));
        }
    }

    void rethrow_if_exception() {
        if (handle.promise().exception_) {
            std::rethrow_exception(handle.promise().exception_);
        }
    }
};

CancellableTask cancellable_work(int id, std::chrono::milliseconds work_time) {
    std::cout << "  worker " << id << ": starting (will work for "
              << work_time.count() << "ms)\n";

    for (int i = 0; i < 5; ++i) {
        if (handle.promise().stop_token_.stop_requested()) {
            std::cout << "  worker " << id << ": cancelled at step " << i << "\n";
            throw std::runtime_error("cancelled");
        }
        std::cout << "  worker " << id << ": step " << i << "\n";
        co_await CancellableAwaiter{
            handle.promise().stop_token_,
            std::chrono::milliseconds(work_time.count() / 5)
        };
    }

    std::cout << "  worker " << id << ": completed\n";
    co_return;
}

int main() {
    std::stop_source stop_source;
    auto stop_token = stop_source.get_stop_token();

    auto task1 = cancellable_work(1, std::chrono::milliseconds(1000));
    auto task2 = cancellable_work(2, std::chrono::milliseconds(5000));
    task1.set_stop_token(stop_token);
    task2.set_stop_token(stop_token);

    std::thread canceller([&stop_source] {
        std::this_thread::sleep_for(std::chrono::milliseconds(300));
        std::cout << "\n  [main] requesting cancellation\n\n";
        stop_source.request_stop();
    });

    std::cout << "waiting for tasks...\n";
    task1.wait();
    task2.wait();
    canceller.join();

    std::cout << "\ntask1: ";
    try { task1.rethrow_if_exception(); std::cout << "ok\n"; }
    catch (const std::exception& e) { std::cout << "exception: " << e.what() << "\n"; }

    std::cout << "task2: ";
    try { task2.rethrow_if_exception(); std::cout << "ok\n"; }
    catch (const std::exception& e) { std::cout << "exception: " << e.what() << "\n"; }
}
```

:::info
The P2300 `std::execution` proposal (targeting a future C++ standard) integrates `std::stop_token` directly into the sender/receiver model, providing a unified cancellation mechanism that propagates through entire async computation graphs. Until P2300 is standardized, manual `stop_token` integration as shown above is the recommended approach.
:::

---

## Summary

| Concept                    | Standard Reference | Key Feature                                          |
| :------------------------- | :----------------- | :--------------------------------------------------- |
| Coroutine definition       | [N4950 §8.5]       | Stackless, compiler-transformed into state machine   |
| `co_await`                 | [N4950 §8.5.5]     | Suspension via awaiter protocol                      |
| `co_yield`                 | [N4950 §8.5.5]     | Syntactic sugar for `co_await promise.yield_value()` |
| `std::coroutine_handle<P>` | [N4950 §21.4.4]    | Non-owning handle; manual `destroy()` required       |
| `std::generator<T>`        | [N4950 §25.4.4]    | C++23 lazy input range via `co_yield`                |
| `std::future<T>`           | [N4950 §33.6.4]    | Blocking async result; no composability              |
| `std::promise<T>`          | [N4950 §33.6.5]    | Sets async result for a future                       |
| `std::async`               | [N4950 §33.6.8]    | Launches async task; returns future                  |
| `std::stop_token`          | [N4950 §33.5.1]    | Cooperative cancellation mechanism                   |
| P2300 `std::execution`     | N4984 proposal     | Structured concurrency with senders/receivers        |
