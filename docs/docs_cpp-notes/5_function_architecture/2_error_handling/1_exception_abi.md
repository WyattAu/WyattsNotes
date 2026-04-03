---
title: The Itanium Exception ABI
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: the-itanium-exception-abi
---

# The Itanium Exception ABI

The dominant exception model on all major platforms (GCC, Clang, MSVC on x64) is the **zero-cost
table-based** model specified informally by the Itanium C++ ABI and adopted as the de-facto standard
mechanism [N4950 §14.3].

## 1.1 Table-Based Unwinding Model

When an exception is thrown, the runtime:

1. Allocates the exception object (on a dedicated heap or in a pre-allocated buffer).
2. Copies or moves the thrown expression into that object via `std::allocator_traits` [N4950
   §17.6.3.6].
3. Walks the **call stack** using tables generated at compile time.

Each function that may participate in exception handling has two tables embedded in the binary
(usually in the `.eh_frame` / `.gcc_except_table` ELF sections on Linux):

| Table                                  | Purpose                                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **LSDA** (Language-Specific Data Area) | Describes which PC ranges map to which `try`/`catch` blocks.                                                                            |
| **Unwind table**                       | Lists every call site in the function so the unwinder can determine whether the function has a cleanup (destructor call) at each point. |

:::info On platforms using the Itanium ABI, **no runtime cost** is incurred for `try` blocks when no
exception is thrown. The tables are consulted only during unwinding. :::

## 1.2 Searching for Matching Catch Clauses

The search algorithm [N4950 §14.4] proceeds as follows:

1. The exception object is associated with a `std::type_info` structure describing its dynamic type.
2. Starting from the throw site, the unwinder examines the LSDA of each frame on the call stack.
3. For each `catch` clause, the runtime performs an **exception match**:
   - An exact type match.
   - A base-class match (standard derived-to-base conversion).
   - A pointer or reference conversion to `const`.
   - An ellipsis (`catch (...)`) matches everything.
4. The **first** matching clause in the innermost scope wins.
5. If no frame contains a matching handler, `std::terminate()` is called [N4950 §14.7].

```cpp
#include <iostream>
#include <stdexcept>

struct AppError : std::runtime_error {
    using std::runtime_error::runtime_error;
};

struct NetworkError : AppError {
    using AppError::AppError;
};

void try_network() {
    throw NetworkError{"connection refused"};
}

int main() {
    try {
        try_network();
    } catch (const NetworkError& e) {
        std::cout << "Caught NetworkError: " << e.what() << "\n";
    } catch (const AppError& e) {
        std::cout << "Caught AppError: " << e.what() << "\n";
    } catch (const std::exception& e) {
        std::cout << "Caught std::exception: " << e.what() << "\n";
    }
    return 0;
}
// Output: Caught NetworkError: connection refused
```

## 1.3 Stack Unwinding and Destructor Invocation

During propagation, the unwinder calls the **destructor of every automatic-duration object
constructed in each abandoned frame** [N4950 §14.3]. This is what makes RAII-based resource
management exception-safe.

```cpp
#include <iostream>
#include <stdexcept>

struct RaiiGuard {
    const char* name;
    explicit RaiiGuard(const char* n) : name(n) {
        std::cout << "  ctor: " << name << "\n";
    }
    ~RaiiGuard() {
        std::cout << "  dtor: " << name << "\n";
    }
};

void inner() {
    RaiiGuard g{"inner"};
    throw std::runtime_error{"fail"};
}

void middle() {
    RaiiGuard g{"middle"};
    inner();
}

void outer() {
    RaiiGuard g{"outer"};
    middle();
}

int main() {
    try {
        outer();
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    return 0;
}
// Output:
//   ctor: outer
//   ctor: middle
//   ctor: inner
//   dtor: inner
//   dtor: middle
//   dtor: outer
//   caught: fail
```

## 1.4 Zero-Cost Principle

In the table-based model, the generated code for a function that uses exceptions is **identical in
the non-throwing path** to a function that does not use exceptions at all. There are:

- No extra branches or flags tested on every `try` entry.
- No per-function "has_exception" global.
- No code-size penalty in the hot path (the tables live in read-only data sections).

:::tip If you compile with `-fno-exceptions` (GCC/Clang), `throw` and `try` become compilation
errors. This confirms that exception-neutral code has zero overhead in the normal path. :::

## 1.5 Performance Comparison: Throw/Catch vs Error Codes

| Metric           | Exception (throw path)            | Error-code check            |
| ---------------- | --------------------------------- | --------------------------- |
| Normal-path cost | ~0 instructions                   | 1 branch + compare per call |
| Throw-path cost  | ~5-20 $\mu s$ (unwinding + alloc) | N/A                         |
| Code size        | +LSDA tables (~1-5% of binary)    | No overhead                 |
| Cognitive cost   | Implicit control flow             | Explicit, pervasive         |

```cpp
#include <iostream>
#include <stdexcept>
#include <chrono>

void throw_error(int depth) {
    if (depth <= 0) throw std::runtime_error{"depth reached"};
    throw_error(depth - 1);
}

int return_error(int depth, int* out) {
    if (depth <= 0) return -1;
    return return_error(depth - 1, out);
}

template <typename F>
auto bench(const char* label, F&& f) {
    auto start = std::chrono::high_resolution_clock::now();
    f();
    auto end = std::chrono::high_resolution_clock::now();
    auto dur = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start);
    std::cout << label << ": " << dur.count() << " ns\n";
    return dur;
}

int main() {
    constexpr int DEPTH = 50;
    constexpr int ITERS = 100'000;

    auto t1 = bench("error codes (no error) ", [&] {
        int v;
        for (int i = 0; i < ITERS; ++i) {
            if (return_error(DEPTH, &v) != 0) { /* handle */ }
        }
    });

    auto t2 = bench("exceptions (caught)   ", [&] {
        for (int i = 0; i < ITERS; ++i) {
            try { throw_error(DEPTH); } catch (...) {}
        }
    });

    auto t3 = bench("exceptions (no throw) ", [&] {
        for (int i = 0; i < ITERS; ++i) {
            try { (void)0; } catch (...) {}
        }
    });

    (void)t1; (void)t2; (void)t3;
    return 0;
}
// Typical output (varies by hardware and compiler):
//   error codes (no error) : ~6000000 ns
//   exceptions (caught)    : ~90000000 ns
//   exceptions (no throw)  : ~400000 ns
```

**Relevance:** The no-throw path of exceptions is faster than error-code checking because it
eliminates the branch. The throw path is significantly slower. Design critical paths to avoid
throwing; use exceptions for truly exceptional conditions.

## See Also

- [Exception Safety Guarantees](2_exception_safety.md)
- [The noexcept Specifier](3_noexcept.md)
