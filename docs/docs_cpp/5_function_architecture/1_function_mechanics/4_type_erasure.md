---
title: Type Erasure — Function Pointers, std::function, std::move_only_function
description:
description: >-
  C++: Type Erasure — Function Pointers, std::function, std::move_only_function — Type Erasure: Function Pointers, std::function, std::move_only_function.
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: type-erasure-function-pointers-std-function-move-only-function
---

# Type Erasure: Function Pointers, std::function, std::move_only_function

Type erasure allows heterogeneous callables to be stored and invoked through a uniform interface.
This section covers the progression from raw function pointers to `std::function` and the C++23
`std::move_only_function`.

## 4.1 Function Pointers

A function pointer is the most primitive type-erased callable. It stores the address of a free
function or a `static` member function. It has zero overhead beyond the pointer indirection itself.

```cpp
#include <cstdio>
#include <cstdint>

int add(int a, int b) { return a + b; }
int mul(int a, int b) { return a * b; }

using BinOp = int(*)(int, int);

int compute(BinOp op, int x, int y) {
    return op(x, y);
}

int main() {
    BinOp ops[2] = {add, mul};
    for (int i = 0; i < 2; ++i) {
        std::printf("ops[%d](3, 4) = %d\n", i, ops[i](3, 4));
    }
    // ops[0](3, 4) = 7
    // ops[1](3, 4) = 12

    static_assert(sizeof(BinOp) == sizeof(void*));
    // A function pointer is a single machine word (8 bytes on x86-64)
}
```

**Limitations**: Function pointers cannot capture state. They cannot point to non-static member
functions (those require a `this` pointer), and they cannot point to lambdas that capture anything
(the closure type is not convertible to a function pointer unless the lambda is stateless).

### Stateless Lambda to Function Pointer Conversion

A stateless lambda (no captures) is implicitly convertible to a function pointer with the same
signature:

```cpp
#include <cstdio>

int main() {
    // Stateless lambda — no captures
    auto greet = [](const char* name) {
        std::printf("Hello, %s\n", name);
    };

    // Implicit conversion to function pointer
    void(*fp)(const char*) = greet;
    fp("World");  // Hello, World

    // Works directly as a C function pointer for callbacks
}
```

This is the one case where a lambda and a function pointer intersect. The closure type for a
stateless lambda has no non-static data members, so its size is 1 byte (the minimum object size in
C++), and it is convertible to a function pointer pointing to its `operator()`.

## 4.2 `std::function<R(Args...)>` [N4950 §22.10]

`std::function` is a polymorphic callable wrapper that can store, copy, and invoke any callable with
a compatible signature.

```cpp
#include <functional>
#include <iostream>
#include <string>
#include <vector>

int main() {
    std::vector<std::function<std::string(int)>> formatters;

    // Free function
    auto hex_fmt = [](int v) -> std::string {
        char buf[32];
        std::snprintf(buf, sizeof(buf), "0x%x", v);
        return buf;
    };

    // Lambda with capture
    int base = 10;
    auto dec_fmt = [base](int v) -> std::string {
        return std::to_string(v) + " (base " + std::to_string(base) + ")";
    };

    formatters.push_back(hex_fmt);
    formatters.push_back(dec_fmt);

    for (const auto& fmt : formatters) {
        std::cout << fmt(255) << '\n';
    }
    // 0xff
    // 255 (base 10)
}
```

### `std::function` Empty State

A default-constructed `std::function` does not hold a callable. Invoking it throws
`std::bad_function_call`:

```cpp
#include <functional>
#include <iostream>

int main() {
    std::function<int(int)> f;

    if (!f) {
        std::cout << "function is empty\n";
    }

    try {
        f(42);  // throws std::bad_function_call
    } catch (const std::bad_function_call& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
}
```

Always check `if (f)` before invoking a `std::function` that may be empty, or initialize it with a
default callable.

## 4.3 Small Buffer Optimization (SBO)

`std::function` typically allocates a small internal buffer (implementation-defined, commonly 16–24
bytes on x86-64). If the stored callable fits within this buffer, no heap allocation occurs. This is
the **Small Buffer Optimization**.

```cpp
#include <functional>
#include <iostream>
#include <cstdint>

struct LargeCallable {
    int64_t data[8] = {};  // 64 bytes — exceeds typical SBO threshold
    int operator()(int x) const { return x + static_cast<int>(data[0]); }
};

struct SmallCallable {
    int64_t data[1] = {42};  // 8 bytes — fits in SBO
    int operator()(int x) const { return x + static_cast<int>(data[0]); }
};

int main() {
    std::function<int(int)> f_small = SmallCallable{};
    std::function<int(int)> f_large = LargeCallable{};

    std::cout << "Small callable: " << f_small(10) << '\n';   // 52
    std::cout << "Large callable: " << f_large(10) << '\n';   // 10

    // f_small likely uses SBO (no heap allocation)
    // f_large triggers heap allocation for the 64-byte closure
}
```

:::warning The SBO threshold varies between standard library implementations. libstdc++ (GCC) uses
16 bytes. libc++ (Clang) uses 24 bytes (on 64-bit). If avoiding heap allocation is critical, prefer
passing lambdas as template parameters or using auto.
:::

### SBO Threshold Across Implementations

| Implementation  | SBO Size | Notes                               |
| :-------------- | :------- | :---------------------------------- |
| libstdc++ (GCC) | 16 bytes | Fits two pointers + small captures  |
| libc++ (Clang)  | 24 bytes | Three pointers + larger captures    |
| MSVC STL        | 16 bytes | Consistent with libstdc++ on x86-64 |

### Detecting SBO at Compile Time

There is no standard way to query the SBO threshold. You can empirically determine it by checking
whether `operator new` is called during construction:

```cpp
#include <functional>
#include <cstdint>
#include <cstdio>

bool allocation_detected = false;

void* operator new(std::size_t size) {
    allocation_detected = true;
    return std::malloc(size);
}

void operator delete(void* ptr) noexcept {
    std::free(ptr);
}

struct SizedCallable {
    char data[24];  // Experiment with different sizes
    int operator()(int x) const { return x; }
};

int main() {
    allocation_detected = false;
    std::function<int(int)> f = SizedCallable{};
    std::printf("24-byte callable: heap allocation = %d\n", allocation_detected);
    // libstdc++: heap allocation = 1 (exceeds 16-byte SBO)
    // libc++:    heap allocation = 0 (fits in 24-byte SBO)
}
```

## 4.4 `std::move_only_function` (C++23) [N4950 §22.10.17]

`std::function` requires its stored callable to be copyable. This is a problem for callables that
own move-only resources (e.g., `std::unique_ptr`, file handles). C++23 introduces
`std::move_only_function<R(Args...)>`, which is a move-only callable wrapper.

```cpp
#include <functional>
#include <iostream>
#include <memory>
#include <cstdio>

// Pre-C++23 workaround: wrapping a unique_ptr-capturing lambda in std::function
// requires an extra shared_ptr layer to make it copyable (ugly, allocates twice).
// With std::move_only_function, this is natural:

int main() {
    auto make_logger = [](std::unique_ptr<std::FILE, decltype(&std::fclose)> fp)
        -> std::move_only_function<void(const char*)>
    {
        return [fp = std::move(fp)](const char* msg) mutable {
            std::fprintf(fp.get(), "[LOG] %s\n", msg);
        };
    };

    auto logger = make_logger(
        std::unique_ptr<std::FILE, decltype(&std::fclose)>(
            std::fopen("/tmp/test.log", "w"), &std::fclose
        )
    );

    logger("Application started");
    logger("Performing computation");
    logger("Application finished");

    // logger is move-only — cannot be copied:
    // auto logger2 = logger;  // ERROR: deleted copy constructor
    auto logger2 = std::move(logger);  // OK: move transfers ownership

    if (logger2) {
        logger2("Moved logger active");
    }
}
```

:::info Relevance `std::move_only_function` is critical for callback-based APIs where the callback
owns exclusive resources (file handles, network connections, GPU buffers). It enables zero-overhead
move semantics where `std::function` would force a costly shared_ptr wrapping.
:::

### `std::move_only_function` with `noexcept` Qualification

`std::move_only_function` supports specifying `noexcept` on the callable signature:

```cpp
#include <functional>

int main() {
    // Accepts callables that may throw
    std::move_only_function<void(int)> f1 = [](int x) { /* may throw */ };

    // Accepts ONLY callables that are noexcept
    std::move_only_function<void(int) noexcept> f2 = [](int x) noexcept { /* guaranteed not to throw */ };

    // f1 = f2;  // OK: noexcept callable is convertible to non-noexcept
    // f2 = f1;  // ERROR: non-noexcept callable is not convertible to noexcept
}
```

This allows APIs to statically enforce that callbacks do not throw, which is critical for
destructors, signal handlers, and real-time systems.

## 4.5 Overhead Comparison

```cpp
#include <functional>
#include <cstdint>
#include <cstdio>

// Pure function pointer: 8 bytes, direct call
using FnPtr = int(*)(int);

// Stateful lambda with small capture: type is unique, sizeof matches capture
// No heap allocation, fully inlinable when type is known at compile time
auto small_lambda = [](int x) { return x * 2; };

// std::function wrapping a small lambda: ~32-48 bytes
// SBO applies, no heap allocation, but indirect call (cannot inline)
std::function<int(int)> fn_small = small_lambda;

// std::function wrapping a large capture: ~32-48 bytes + heap allocation
// Closure stored on heap, double indirection
std::function<int(int)> fn_large = [a = 0, b = 0, c = 0, d = 0](int x) {
    return x + a + b + c + d;
};

int main() {
    std::printf("sizeof(FnPtr):            %zu bytes\n", sizeof(FnPtr));
    std::printf("sizeof(small_lambda):     %zu bytes\n", sizeof(decltype(small_lambda)));
    std::printf("sizeof(std::function):    %zu bytes\n", sizeof(std::function<int(int)>));

    // Typical output on x86-64 with libstdc++:
    // sizeof(FnPtr):            8 bytes
    // sizeof(small_lambda):     1 bytes   (stateless closure)
    // sizeof(std::function):    32 bytes  (includes SBO buffer + vtable ptr)
}
```

## 4.6 Member Function Pointers

A **member function pointer** (MFP) is a distinct type from a regular function pointer. It stores
enough information to call a member function on an object, but its internal representation varies
significantly between compilers and ABIs.

```cpp
#include <cstdio>
#include <cstdint>

struct Widget {
    int value_ = 0;
    int get() const { return value_; }
    void set(int v) { value_ = v; }
    virtual int compute() { return value_ * 2; }
};

struct DerivedWidget : Widget {
    int compute() override { return value_ * 3; }
};

int main() {
    // Non-virtual member function pointer
    auto mfp = &Widget::get;
    int (Widget::*set_mfp)(int) = &Widget::set;

    Widget w;
    w.set(42);

    // Invocation syntax: (object.*mfp)(args)
    int val = (w.*mfp)();
    std::printf("val = %d\n", val);  // 42

    (w.*set_mfp)(100);
    std::printf("after set: %d\n", w.get());  // 100

    // Size: non-virtual MFPs are typically 8 bytes (one pointer)
    std::printf("sizeof non-virtual MFP: %zu\n", sizeof(mfp));

    // Virtual member function pointer
    auto v_mfp = &Widget::compute;
    std::printf("sizeof virtual MFP: %zu\n", sizeof(v_mfp));

    // Virtual dispatch works correctly through MFPs
    DerivedWidget d;
    d.set(10);
    int result = (d.*v_mfp)();  // Calls DerivedWidget::compute
    std::printf("virtual dispatch result: %d\n", result);  // 30
}
```

### Member Function Pointer Size and ABI

The size of a member function pointer is **not standardized**. The Itanium C++ ABI (Linux, macOS)
uses the following representation:

| Scenario                        | Size        | Contents                                           |
| :------------------------------ | :---------- | :------------------------------------------------- |
| Single inheritance, non-virtual | 8 bytes     | Function pointer only                              |
| Multiple inheritance            | 16 bytes    | Function pointer + this-adjustment offset          |
| Virtual inheritance             | 16-24 bytes | Function pointer + vtable offset + this-adjustment |

On the MSVC ABI (Windows), member function pointers use a uniform representation that is always 16
bytes (or larger for virtual inheritance), regardless of the inheritance model.

**Implication:** Never store member function pointers in compact data structures (bit fields, packed
structs) across platforms. Use `std::function` or custom type erasure for portable member function
dispatch.

## 4.7 `std::invoke` and the INVOKE Protocol

`std::invoke` [N4950 §22.10.4] is the uniform mechanism for invoking any callable with arguments. It
implements the **INVOKE expression** defined by the C++ Standard:

```cpp
#include <functional>
#include <cstdio>
#include <string>

struct Printer {
    void print(const std::string& msg) const {
        std::printf("[%s] %s\n", name.c_str(), msg.c_str());
    }
    std::string name;
};

void free_function(int x) {
    std::printf("free: %d\n", x);
}

int main() {
    // 1. Invoke a free function
    std::invoke(free_function, 42);

    // 2. Invoke a member function with object
    Printer p{"App"};
    std::invoke(&Printer::print, p, std::string("hello"));

    // 3. Invoke a member function with pointer
    std::invoke(&Printer::print, &p, std::string("world"));

    // 4. Invoke a member function with smart pointer
    // std::invoke(&Printer::print, std::make_shared<Printer>("Ptr"), "smart");

    // 5. Invoke a member function pointer
    // 6. Invoke a lambda
    std::invoke([](int a, int b) { std::printf("sum: %d\n", a + b); }, 3, 4);

    // std::invoke_result_t gives the return type
    using Result = std::invoke_result_t<decltype(&Printer::print), Printer&, std::string>;
    static_assert(std::is_same_v<Result, void>);
}
```

### `std::invoke_result_t` for SFINAE

`std::invoke_result_t` is critical for constraining templates that accept arbitrary callables:

```cpp
#include <type_traits>
#include <functional>
#include <cstdio>

template <typename F, typename... Args>
auto safe_invoke(F&& f, Args&&... args)
    -> std::invoke_result_t<F, Args...>
{
    using Result = std::invoke_result_t<F, Args...>;
    if constexpr (std::is_void_v<Result>) {
        std::invoke(std::forward<F>(f), std::forward<Args>(args)...);
    } else {
        return std::invoke(std::forward<F>(f), std::forward<Args>(args)...);
    }
}

int main() {
    int result = safe_invoke([](int x) { return x * 2; }, 21);
    std::printf("result = %d\n", result);  // 42
}
```

## 4.8 Implementing a Minimal Type-Erased Callable

Understanding the internal mechanism of `std::function` is valuable for implementing custom
type-erased wrappers with specific constraints (e.g., fixed-size SBO, custom allocator, move-only).

```cpp
#include <cstddef>
#include <cstdint>
#include <cstdio>
#include <utility>
#include <type_traits>

class Task {
    static constexpr std::size_t BUF_SIZE = 32;

    alignas(std::max_align_t) unsigned char buffer_[BUF_SIZE];

    using InvokeFn = void(*)(const unsigned char*, int&);
    using MoveFn   = void(*)(unsigned char*, unsigned char*);
    using DestroyFn = void(*)(unsigned char*);

    InvokeFn  invoke_  = nullptr;
    MoveFn    move_    = nullptr;
    DestroyFn destroy_ = nullptr;

    template <typename F>
    static void invoke_impl(const unsigned char* buf, int& out) {
        const F* f = reinterpret_cast<const F*>(buf);
        out = (*f)(out);
    }

    template <typename F>
    static void move_impl(unsigned char* dst, unsigned char* src) {
        new (dst) F(std::move(*reinterpret_cast<F*>(src)));
        reinterpret_cast<F*>(src)->~F();
    }

    template <typename F>
    static void destroy_impl(unsigned char* buf) {
        reinterpret_cast<F*>(buf)->~F();
    }

public:
    Task() = default;

    Task(const Task&) = delete;
    Task& operator=(const Task&) = delete;

    Task(Task&& other) noexcept
        : invoke_(other.invoke_)
        , move_(other.move_)
        , destroy_(other.destroy_)
    {
        if (move_) {
            move_(buffer_, other.buffer_);
        }
        other.invoke_ = nullptr;
        other.move_ = nullptr;
        other.destroy_ = nullptr;
    }

    template <typename F>
        requires std::is_move_constructible_v<F>
              && std::is_invocable_r_v<int, F, int>
              && sizeof(F) <= BUF_SIZE
    Task(F&& f) {
        using Decayed = std::decay_t<F>;
        static_assert(sizeof(Decayed) <= BUF_SIZE);
        new (buffer_) Decayed(std::forward<F>(f));
        invoke_  = invoke_impl<Decayed>;
        move_    = move_impl<Decayed>;
        destroy_ = destroy_impl<Decayed>;
    }

    Task& operator=(Task&& other) noexcept {
        if (this != &other) {
            if (destroy_) destroy_(buffer_);
            invoke_ = other.invoke_;
            move_ = other.move_;
            destroy_ = other.destroy_;
            if (move_) move_(buffer_, other.buffer_);
            other.invoke_ = nullptr;
            other.move_ = nullptr;
            other.destroy_ = nullptr;
        }
        return *this;
    }

    ~Task() {
        if (destroy_) destroy_(buffer_);
    }

    explicit operator bool() const { return invoke_ != nullptr; }

    int operator()(int x) const {
        int result = x;
        invoke_(buffer_, result);
        return result;
    }
};

int main() {
    Task t1 = [](int x) { return x + 10; };
    Task t2 = [factor = 3](int x) { return x * factor; };

    std::printf("t1(5) = %d\n", t1(5));  // 15
    std::printf("t2(5) = %d\n", t2(5));  // 15

    Task t3 = std::move(t1);
    std::printf("t3(5) = %d\n", t3(5));  // 15
    // t1 is now empty
    std::printf("t1 valid: %d\n", static_cast<bool>(t1));  // 0
}
```

This implementation demonstrates the core technique: function pointers stored alongside a buffer
that holds the concrete callable. The function pointers encode the type-specific behavior (invoke,
move, destroy) while the buffer provides type-erased storage.

## 4.9 Non-Owning Function References

For callback interfaces where the callable's lifetime is guaranteed to outlive the reference, a
non-owning type-erased wrapper avoids both the heap allocation of `std::function` and the
copyability requirement:

```cpp
#include <cstdio>
#include <utility>
#include <type_traits>

template <typename Sig>
class FunctionRef;

template <typename R, typename... Args>
class FunctionRef<R(Args...)> {
    void* obj_ = nullptr;
    R(*invoke_)(void*, Args...) = nullptr;

public:
    FunctionRef() = default;

    template <typename F>
        requires std::is_invocable_r_v<R, F&, Args...>
    FunctionRef(F& f) noexcept
        : obj_(reinterpret_cast<void*>(std::addressof(f)))
        , invoke_([](void* obj, Args... args) -> R {
            return (*reinterpret_cast<F*>(obj))(std::forward<Args>(args)...);
          })
    {}

    R operator()(Args... args) const {
        return invoke_(obj_, std::forward<Args>(args)...);
    }

    explicit operator bool() const { return invoke_ != nullptr; }
};

int main() {
    auto add = [](int a, int b) { return a + b; };
    FunctionRef<int(int, int)> ref = add;
    std::printf("ref(3, 4) = %d\n", ref(3, 4));  // 7

    // No heap allocation. sizeof(FunctionRef) == 2 * sizeof(void*) = 16 bytes
    static_assert(sizeof(FunctionRef<int(int, int)>) == 2 * sizeof(void*));
}
```

`FunctionRef` is 16 bytes (two pointers) on x86-64, has no heap allocation, and the call is indirect
through a function pointer. The tradeoff: the caller must ensure the referenced callable outlives
the `FunctionRef`.

## Common Pitfalls

### 1. `std::function` Copies the Callable

`std::function` stores a copy of the callable. If the lambda captures by value, each copy is
independent. If it captures by reference, the references may dangle:

```cpp
#include <functional>
#include <cstdio>

std::function<int()> make_bad() {
    int x = 42;
    return [&x]() { return x; };  // Dangling reference to stack variable x
}

std::function<int()> make_good() {
    int x = 42;
    return [x]() { return x; };  // Captures by value, safe
}

int main() {
    auto bad = make_bad();
    // bad() is Undefined Behavior: x was destroyed when make_bad returned
    auto good = make_good();
    std::printf("good() = %d\n", good());  // 42
}
```

### 2. Indirect Call Prevents Inlining

`std::function` always performs an indirect call through a function pointer (or vtable). The
compiler cannot inline the callable's body through `std::function`. If performance is critical and
the callable type is known at the call site, pass the callable as a template parameter:

```cpp
#include <cstdio>

// Generic: inlines the callable
template <typename F>
int compute(int x, F&& op) {
    return op(x);  // Inlinable when F is known
}

int main() {
    auto double_it = [](int x) { return x * 2; };
    std::printf("%d\n", compute(21, double_it));  // Likely inlined
}
```

### 3. SBO Threshold is Not Portable

Code that relies on fitting within the SBO threshold of `std::function` may heap-allocate on
different standard library implementations. If you need a guaranteed zero-allocation callable
wrapper, implement a custom type-erased wrapper with a known buffer size (as shown in section 4.8)
or pass lambdas as template parameters.

### 4. `std::move_only_function` Cannot Be Copied into Containers

Standard containers require copyable elements (unless you use move-only containers or
`std::vector<std::unique_ptr<std::move_only_function<...>>>`). Plan your data structures accordingly
when using move-only callables.

:::

:::
