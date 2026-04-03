---
title: Coroutine Handle, Promise Type, and Awaiter
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: coroutine-handle-promise-awaiter
---

# The Coroutine Handle, Promise Type, and Awaiter

This section covers the three interacting components of the C++ coroutine machinery, `co_await`
expression semantics, the promise type vs awaiter distinction, `get_return_object()`,
`await_transform` for custom suspension behavior, and `yield_value`/`return_value` for value
communication.

## The Coroutine Machinery Overview

The C++ coroutine mechanism consists of three interacting components [N4950 §8.5]:

1. **Coroutine handle** (`std::coroutine_handle<P>`): a non-owning reference to the coroutine frame
   [N4950 §21.4.4].
2. **Promise type**: the communication channel between the coroutine author and the caller. Defined
   by the `promise_type` nested type inside the return type [N4950 §8.5.2].
3. **Awaiter type**: the type that controls what happens at each `co_await` suspension point.
   Discovered via the awaitable interface [N4950 §8.5.5].

The relationship between these three is:

$$
\text{Caller} \xrightarrow{\text{invoke}} \text{Coroutine} \xleftrightarrow{\text{promise\_type}} \text{Caller} \xleftrightarrow{\text{awaiter}} \text{co\_await}
$$

## `co_await` Expression Semantics [N4950 §8.5.5]

The expression `co_await expr` is transformed by the compiler into a sequence of calls on an
**awaiter** object. The awaiter is obtained by the following lookup chain [N4950 §8.5.5]:

1. If `expr` has an `operator co_await` member or non-member overload, the result of
   `expr.operator co_await()` (or `operator co_await(expr)`) is the awaiter.
2. Otherwise, if the promise type has `await_transform`, then `promise.await_transform(expr)` is
   called, and the result is the awaiter.
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
- **`coroutine_handle<Z>`**: the coroutine is suspended, and the returned handle is resumed
  (symmetric transfer).

## Promise Type vs Awaiter Type

The **promise type** is the bidirectional communication channel between the coroutine and its
caller. The **awaiter type** is the mechanism that controls individual suspension points.

| Aspect      | Promise Type                                            | Awaiter Type                                          |
| :---------- | :------------------------------------------------------ | :---------------------------------------------------- |
| Lifetime    | Lives for the entire duration of the coroutine frame    | Temporary — lives only for the duration of `co_await` |
| Purpose     | Manages coroutine state, return values, exceptions      | Controls individual suspend/resume behavior           |
| Required by | Every coroutine (via `promise_type` alias)              | Every `co_await` expression                           |
| Key methods | `get_return_object`, `initial_suspend`, `final_suspend` | `await_ready`, `await_suspend`, `await_resume`        |

## `promise_type::get_return_object()`

The `get_return_object()` method [N4950 §8.5.2] is called **before** the coroutine body begins
execution. It produces the value that is returned to the caller. Typically, this is a wrapper type
that holds a `std::coroutine_handle` and provides a convenient API:

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

## `await_transform` for Custom Suspension Behavior

If the promise type defines `await_transform`, every `co_await expr` first passes through it [N4950
§8.5.5]. This allows the promise to intercept and transform any awaitable into a custom awaiter,
enabling library-level control over suspension semantics:

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

## `yield_value` and `return_value`

The promise type communicates values back to the caller through two distinct channels [N4950
§8.5.2]:

- **`co_yield expr`** is syntactic sugar for `co_await promise.yield_value(expr)`. It suspends the
  coroutine and makes `expr` available to the caller.
- **`co_return expr`** calls `promise.return_value(expr)` (or `promise.return_void()` if no value)
  and transitions the coroutine to the final suspend point.

A promise type must define **either** `return_value` or `return_void`, but not both. If the
coroutine uses `co_return;` (no value), `return_void` must be present.

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

## See Also

- [Stackless Coroutine Frames and Heap Allocation](./1_coroutine_frames.md)
- [Generators (std::generator)](./3_generators.md)
- [Task Scheduling and Executors](./4_task_scheduling.md)
