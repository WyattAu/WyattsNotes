---
title: Type Erasure — Function Pointers, std::function, std::move_only_function
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
passing lambdas as template parameters or using auto. :::

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
move semantics where `std::function` would force a costly shared_ptr wrapping. :::

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

## See Also

- [Lambda Expressions](3_lambdas.md)
- [C-Interop and FFI](5_c_interop.md)
