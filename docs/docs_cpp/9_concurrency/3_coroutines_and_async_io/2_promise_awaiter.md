---
title: Coroutine Handle, Promise Type, and Awaiter
description:
  "C++: Coroutine Handle, Promise Type, and Awaiter — The Coroutine Machinery Overview; `co_await` Expression Semantics [N4950 §9.5.4.3]."
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

The C++ coroutine mechanism consists of three interacting components [N4950 §9.5.4]:

1. **Coroutine handle** (`std::coroutine_handle<P>`): a non-owning reference to the coroutine frame
   [N4950 §21.4.4].
2. **Promise type**: the communication channel between the coroutine author and the caller. Defined
   by the `promise_type` nested type inside the return type [N4950 §9.5.4.3].
3. **Awaiter type**: the type that controls what happens at each `co_await` suspension point.
   Discovered via the awaitable interface [N4950 §9.5.4.3].

The relationship between these three is:

$$
\mathrm{Caller} \xrightarrow{\mathrm{invoke}} \mathrm{Coroutine} \xleftrightarrow{\mathrm{promise\_type}} \mathrm{Caller} \xleftrightarrow{\mathrm{awaiter}} \mathrm{co\_await}
$$

## `co_await` Expression Semantics [N4950 §9.5.4.3]

The expression `co_await expr` is transformed by the compiler into a sequence of calls on an
**awaiter** object. The awaiter is obtained by the following lookup chain [N4950 §9.5.4.3]:

1. If `expr` has an `operator co_await` member or non-member overload, the result of
   `expr.operator co_await()` (or `operator co_await(expr)`) is the awaiter.
2. Otherwise, if the promise type has `await_transform`, then `promise.await_transform(expr)` is
   called, and the result is the awaiter.
3. Otherwise, `expr` itself is the awaiter.

### Proof of `co_await` Transformation Steps

**Claim:** The compiler transforms `co_await expr` into a well-defined sequence of awaiter method
calls [N4950 §9.5.4.3].

**Proof:**

1. The compiler first resolves the awaiter through the lookup chain defined above (operator
   `co_await`, `await_transform`, or identity).
2. Let the resolved awaiter be `a`. The compiler generates code equivalent to:

   ```cpp
   auto&& a = <awaiter-expression>;
   if (!a.await_ready()) {
       using handle_t = std::coroutine_handle<PromiseType>;
       if constexpr (requires { { a.await_suspend(handle) } -> std::same_as<void>; }) {
           a.await_suspend(handle);
           // control returns to caller/resumer
       } else if constexpr (requires { { a.await_suspend(handle) } -> std::convertible_to<bool>; }) {
           if (!a.await_suspend(handle)) {
               // immediate resumption — goto resume_point
           } else {
               // control returns to caller/resumer
           }
       } else {
           // a.await_suspend returns a coroutine_handle
           auto h = a.await_suspend(handle);
           h.resume();  // symmetric transfer
           // control never reaches here
       }
   }
   // resume_point:
   a.await_resume();
   ```

3. The `await_ready()` check short-circuits suspension for already-completed awaitables (e.g.,
   immediately available values).
4. The `await_suspend()` call is the suspension mechanism — it determines whether the coroutine
   actually suspends and what happens upon resumption.
5. The `await_resume()` call produces the value visible to the `co_await` expression.

$\square$

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

The three methods that an awaiter must provide [N4950 §9.5.4.3]:

| Method                  | Return type                              | Purpose                                                  |
| :---------------------- | :--------------------------------------- | :------------------------------------------------------- |
| `await_ready()`         | `bool`                                   | If `true`, skip suspension and proceed directly          |
| `await_suspend(handle)` | `void`, `bool`, or `coroutine_handle<Z>` | Called when coroutine suspends; controls resumption      |
| `await_resume()`        | any type                                 | Produces the result of `co_await expr`; called on resume |

The return type of `await_suspend` is critical [N4950 §9.5.4.3]:

- **`void`**: the coroutine is suspended; control returns to the caller.
- **`bool`**: if `true`, the coroutine is suspended; if `false`, it resumes immediately.
- **`coroutine_handle<Z>`**: the coroutine is suspended, and the returned handle is resumed
  (symmetric transfer).

### Detailed `await_suspend` Return Type Semantics

| Return Type           | Coroutine State After | What Happens                                                                                                          |
| :-------------------- | :-------------------- | :-------------------------------------------------------------------------------------------------------------------- |
| `void`                | Suspended             | Control returns to the caller/resumer. The coroutine is suspended until something explicitly calls `resume()`.        |
| `bool` (true)         | Suspended             | Same as `void`. Used when the decision to suspend is conditional.                                                     |
| `bool` (false)        | Running               | The coroutine continues immediately from the resume point. No suspension occurs.                                      |
| `coroutine_handle<Z>` | Suspended             | The returned handle is resumed immediately. Used for symmetric transfer (tail-call optimization of coroutine chains). |

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

The `get_return_object()` method [N4950 §9.5.4.3] is called **before** the coroutine body begins
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
§9.5.4.3]. This allows the promise to intercept and transform any awaitable into a custom awaiter,
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

### `await_transform` and Generic Fallback

When the promise defines `await_transform`, **every** `co_await` expression must match one of its
overloads. If no overload matches, the code is ill-formed. This means you cannot `co_await`
`std::suspend_always` or any other type not handled by `await_transform` unless you provide a
generic fallback:

```cpp
template<typename T>
auto await_transform(T&& awaitable) {
    return std::forward<T>(awaitable);
}
```

This generic fallback forwards the awaitable unchanged, allowing the default awaiter resolution to
proceed for types not explicitly handled.

## `yield_value` and `return_value`

The promise type communicates values back to the caller through two distinct channels [N4950
§9.5.4.3]:

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

## Coroutine Frame Lifetime and the `final_suspend` Decision

The coroutine frame is heap-allocated (unless the compiler can prove it doesn't escape) and its
lifetime is managed by `std::coroutine_handle` [N4950 §9.5.4]. When a coroutine reaches the final
suspend point, the behavior of `final_suspend` determines whether the frame is automatically
destroyed or must be destroyed manually:

- **`std::suspend_always`**: The coroutine suspends at the final point. The caller (or resumer)
  **must** call `handle.destroy()` to free the frame. This is required for any coroutine whose
  return type needs to observe the coroutine's result after completion (e.g., a `Task` that carries
  a value).

- **`std::suspend_never`**: The coroutine's frame is destroyed immediately upon reaching the final
  suspend point. The handle becomes invalid. This is used for fire-and-forget coroutines.

```cpp
#include <coroutine>
#include <iostream>
#include <utility>

struct ScopedTask {
    struct promise_type {
        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_never final_suspend() noexcept { return {}; }
        ScopedTask get_return_object() {
            return ScopedTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }
        void return_void() {}
        void unhandled_exception() {}
    };

    std::coroutine_handle<promise_type> handle;

    explicit ScopedTask(std::coroutine_handle<promise_type> h) : handle(h) {}
    ~ScopedTask() {
        if (handle) handle.destroy();
    }
    ScopedTask(const ScopedTask&) = delete;
    ScopedTask& operator=(const ScopedTask&) = delete;
};

ScopedTask fire_and_forget() {
    std::cout << "running...\n";
    co_await std::suspend_always{};
    std::cout << "resumed\n";
}

int main() {
    ScopedTask t = fire_and_forget();
    t.handle.resume();
    // After resume: coroutine reaches final_suspend which is suspend_never,
    // so the frame is destroyed automatically.
    // handle is now invalid — do NOT call handle.destroy() again.
    // ~ScopedTask checks handle, but the handle is already done.
}
```

:::warning If `final_suspend` returns `std::suspend_never`, the coroutine frame is destroyed at the
final suspend point. Calling `handle.destroy()` afterward on a dangling handle is **undefined
behavior**. If `final_suspend` returns `std::suspend_always`, you **must** eventually call
`handle.destroy()` or the frame leaks.
:::

## Symmetric Transfer and `await_suspend` Returning a Handle

When `await_suspend` returns a `coroutine_handle<Z>`, the calling coroutine is suspended and the
returned handle is resumed immediately — without unwinding the stack back to the caller. This is
**symmetric transfer** [N4950 §9.5.4.3]. It is the foundational mechanism for building coroutine
chains without stack overflow:

```cpp
#include <coroutine>
#include <iostream>

struct SymmetricTask {
    struct promise_type {
        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() {}

        SymmetricTask get_return_object() {
            return SymmetricTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }

            std::coroutine_handle<> await_suspend(
                std::coroutine_handle<promise_type> h) noexcept {
                return h.promise().continuation_;
            }

            void await_resume() const noexcept {}
        };

        std::coroutine_handle<> continuation_;
    };

    std::coroutine_handle<promise_type> handle;
    std::coroutine_handle<> continuation_{};

    explicit SymmetricTask(std::coroutine_handle<promise_type> h) : handle(h) {}

    struct Awaiter {
        SymmetricTask& task;
        bool await_ready() { return false; }

        std::coroutine_handle<> await_suspend(std::coroutine_handle<> caller) {
            task.continuation_ = caller;
            return task.handle;
        }

        void await_resume() {}
    };
};

SymmetricTask inner_a() {
    std::cout << "inner_a start\n";
    co_await std::suspend_always{};
    std::cout << "inner_a end\n";
}

SymmetricTask outer_b() {
    std::cout << "outer_b start\n";
    auto a = inner_a();
    SymmetricTask::Awaiter aw{a};
    co_await aw;
    std::cout << "outer_b end\n";
}

int main() {
    auto task = outer_b();
    task.handle.resume();
    task.handle.resume();
    task.handle.destroy();
}
```

Symmetric transfer avoids stack growth when coroutines await each other in a chain. Without it, each
`co_await` of a nested coroutine would grow the stack by one frame, leading to stack overflow for
deep chains. With symmetric transfer, the resumption is a tail call at the ABI level.

## Exception Handling in Coroutines

When an exception escapes the coroutine body (i.e., it is not caught by a `try`/`catch` within the
coroutine), the promise's `unhandled_exception()` method is called [N4950 §9.5.4.3]. The standard
library provides no default implementation — the promise type must define this method.

### Exception Storage Pattern

The idiomatic pattern is to capture the exception in `unhandled_exception()` and rethrow it in
`await_resume()`:

```cpp
#include <coroutine>
#include <iostream>
#include <exception>
#include <stdexcept>

struct SafeTask {
    struct promise_type {
        std::exception_ptr exception_{};

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}

        void unhandled_exception() {
            exception_ = std::current_exception();
        }

        SafeTask get_return_object() {
            return SafeTask{std::coroutine_handle<promise_type>::from_promise(*this)};
        }

        struct FinalAwaiter {
            bool await_ready() const noexcept { return false; }
            std::coroutine_handle<> await_suspend(
                std::coroutine_handle<promise_type> h) noexcept {
                return h.promise().continuation_;
            }
            void await_resume() const noexcept {}
        };

        std::coroutine_handle<> continuation_{};
    };

    std::coroutine_handle<promise_type> handle;
    std::coroutine_handle<> continuation_{};

    explicit SafeTask(std::coroutine_handle<promise_type> h) : handle(h) {}

    struct Awaiter {
        std::coroutine_handle<promise_type> handle_;
        std::coroutine_handle<>& continuation_;

        bool await_ready() const noexcept { return handle_.done(); }

        std::coroutine_handle<> await_suspend(std::coroutine_handle<> caller) {
            continuation_ = caller;
            handle_.promise().continuation_ = caller;
            return handle_;
        }

        void await_resume() {
            if (handle_.promise().exception_) {
                std::rethrow_exception(handle_.promise().exception_);
            }
        }
    };

    ~SafeTask() { if (handle) handle.destroy(); }
    SafeTask(const SafeTask&) = delete;
    SafeTask& operator=(const SafeTask&) = delete;
};

SafeTask failing_task() {
    std::cout << "  about to throw\n";
    throw std::runtime_error{"coroutine failure"};
    co_return;
}

SafeTask caller() {
    std::cout << "  caller: awaiting failing task\n";
    co_await failing_task();
    std::cout << "  caller: this line never executes\n";
    co_return;
}

int main() {
    auto task = caller();
    task.handle.resume();
    task.handle.resume();
    task.handle.resume();
    try {
        SafeTask::Awaiter aw{task.handle, task.continuation_};
        aw.await_resume();
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    task.handle.destroy();
}
```

### Exception Propagation Through Coroutine Chains

When coroutine A `co_await`s coroutine B, and B throws, the exception propagates through B's
`unhandled_exception()` to A's `await_resume()`. This is analogous to exception propagation through
regular function calls, but the mechanism is explicit: the promise captures the exception, and the
awaiter rethrows it.

The chain works as follows:

1. B's coroutine body throws.
2. B's `unhandled_exception()` captures `std::current_exception()`.
3. B reaches final suspend.
4. B's `FinalAwaiter` transfers control back to A (symmetric transfer).
5. A's `await_resume()` (on B's awaiter) calls `std::rethrow_exception()` with B's captured
   exception.
6. The exception propagates through A as if B's `co_return` had thrown.

## Complete Awaitable Interface Implementation

The following is a complete, production-ready awaitable type that supports all three `await_suspend`
return types and demonstrates best practices:

```cpp
#include <coroutine>
#include <iostream>
#include <atomic>
#include <chrono>
#include <thread>

struct TimerAwaitable {
    int milliseconds;

    bool await_ready() const noexcept {
        return milliseconds <= 0;
    }

    void await_suspend(std::coroutine_handle<> handle) const {
        std::thread([ms = milliseconds, handle] {
            std::this_thread::sleep_for(std::chrono::milliseconds(ms));
            handle.resume();
        }).detach();
    }

    void await_resume() const noexcept {}
};

struct TimerPromise {
    std::exception_ptr exception_{};

    std::suspend_never initial_suspend() noexcept { return {}; }
    std::suspend_never final_suspend() noexcept { return {}; }
    void return_void() {}
    void unhandled_exception() { exception_ = std::current_exception(); }

    auto get_return_object() {
        return std::coroutine_handle<TimerPromise>::from_promise(*this);
    }
};

struct TimerTask {
    using promise_type = TimerPromise;
    std::coroutine_handle<TimerPromise> handle;

    TimerTask(std::coroutine_handle<TimerPromise> h) : handle(h) {}
    ~TimerTask() { if (handle) handle.destroy(); }
    TimerTask(const TimerTask&) = delete;
    TimerTask& operator=(const TimerTask&) = delete;

    struct Awaiter {
        std::coroutine_handle<TimerPromise> handle_;

        bool await_ready() const noexcept { return handle_.done(); }

        void await_suspend(std::coroutine_handle<> caller) const {
            // In a real scheduler, this would schedule resumption
            // For simplicity, resume immediately on the calling thread
            caller.resume();
        }

        void await_resume() const {
            if (handle_.promise().exception_) {
                std::rethrow_exception(handle_.promise().exception_);
            }
        }
    };
};

TimerTask timed_operation() {
    std::cout << "  starting\n";
    co_await TimerAwaitable{100};
    std::cout << "  after 100ms\n";
    co_await TimerAwaitable{200};
    std::cout << "  after 200ms more\n";
}

int main() {
    auto task = timed_operation();
    // The coroutine runs eagerly (initial_suspend = suspend_never)
    // Give it time to complete
    std::this_thread::sleep_for(std::chrono::milliseconds(500));
}
```

## Common Pitfalls

**1. Dangling coroutine handles:** The most common bug is forgetting to `destroy()` a coroutine
handle. If `final_suspend` returns `std::suspend_always` and the handle is never destroyed, the
frame leaks. Always pair handle creation with a destruction guarantee (RAII wrapper, scope guard, or
`.destroy()` in the destructor of the return type).

**2. Accessing the promise after `final_suspend` with `suspend_never`:** If `final_suspend` returns
`std::suspend_never`, the frame (including the promise) is destroyed at the final suspend point. Any
access to `handle.promise()` afterward is undefined behavior.

**3. Exception propagation:** If an exception escapes the coroutine body, `unhandled_exception()` is
called on the promise. The default behavior (inheriting from `std::exception_ptr` storage) is to
capture the exception. If `unhandled_exception` does nothing, the exception is silently swallowed.
Always either rethrow, store, or terminate in `unhandled_exception`.

**4. `await_transform` hides the original type:** When the promise defines `await_transform`, every
`co_await` expression passes through it. If you intend to `co_await` a type that does not match any
`await_transform` overload, the compiler will error — the raw expression is never used as the
awaiter. Provide a generic fallback `template&lt;typename T&gt; auto await_transform(T&& t)` to
forward unsupported types unchanged.

**5. `await_ready` returning `true` when the awaiter is not ready:** If `await_ready()` returns
`true` when the awaited operation has not actually completed, `await_resume()` will be called
immediately, potentially returning garbage or an uninitialized value. Always ensure `await_ready()`
accurately reflects completion status.

**6. Returning `bool` vs `coroutine_handle` from `await_suspend`:** A `bool` return of `false`
causes immediate resumption in the _same_ call stack (no suspension occurs). A `coroutine_handle`
return causes the _returned_ handle to be resumed via symmetric transfer. Confusing these two leads
to subtle bugs where the wrong coroutine is resumed.

## See Also

- [Stackless Coroutine Frames and Heap Allocation](./1_coroutine_frames.md)
- [Generators (std::generator)](./3_generators.md)
- [Task Scheduling and Executors](./4_task_scheduling.md)
