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
mechanism [N4950 §14.2].

## 1.1 Table-Based Unwinding Model

When an exception is thrown, the runtime:

1. Allocates the exception object (on a dedicated heap or in a pre-allocated buffer).
2. Copies or moves the thrown expression into that object. The runtime uses a dedicated allocation
   mechanism for exception objects.
3. Walks the **call stack** using tables generated at compile time.

Each function that may participate in exception handling has two tables embedded in the binary
(usually in the `.eh_frame` / `.gcc_except_table` ELF sections on Linux):

| Table                                  | Purpose                                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **LSDA** (Language-Specific Data Area) | Describes which PC ranges map to which `try`/`catch` blocks.                                                                            |
| **Unwind table**                       | Lists every call site in the function so the unwinder can determine whether the function has a cleanup (destructor call) at each point. |

:::info
On platforms using the Itanium ABI, **no runtime cost** is incurred for `try` blocks when no
exception is thrown. The tables are consulted only during unwinding.
:::

### Alternative Exception Models

| Model                       | Description                                                         | Normal-Path Cost            | Platforms                 |
| :-------------------------- | :------------------------------------------------------------------ | :-------------------------- | :------------------------ |
| **Table-based (zero-cost)** | Static tables describe handlers; unwinder walks stack at throw time | ~0 instructions             | GCC, Clang, MSVC x64      |
| **Setjmp/Longjmp (SJLJ)**   | `setjmp`/`longjmp` at each `try` entry/exit                         | ~10-20 instructions per try | Embedded, older compilers |
| **DWARF CFI**               | DWARF Call Frame Information used for unwinding                     | ~0 instructions             | GCC/Clang (Linux, BSD)    |

The SJLJ model incurs cost on every `try` entry (saving registers via `setjmp`) and every `try` exit
(potentially restoring via `longjmp`). This is why modern compilers default to the table-based model
— it has zero normal-path cost.

## 1.2 Searching for Matching Catch Clauses

The search algorithm [N4950 §14.2] proceeds as follows:

1. The exception object is associated with a `std::type_info` structure describing its dynamic type.
2. Starting from the throw site, the unwinder examines the LSDA of each frame on the call stack.
3. For each `catch` clause, the runtime performs an **exception match**:
   - An exact type match.
   - A base-class match (standard derived-to-base conversion).
   - A pointer or reference conversion to `const`.
   - An ellipsis (`catch (...)`) matches everything.
4. The **first** matching clause in the innermost scope wins.
5. If no frame contains a matching handler, `std::terminate()` is called [N4950 §14.7].

The match is performed using `std::type_info::operator==` or the RTTI comparison function. On
Itanium ABI systems, the `__gxx_personality_v0` personality function performs this comparison by
walking the exception's type info chain.

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

### The Catch-All and Exception Object Slicing

When catching by value (not by reference), the exception object is **sliced** to the catch clause's
static type. This is almost always wrong because it loses the dynamic type information and invokes
an extra copy:

```cpp
#include <iostream>
#include <stdexcept>
#include <typeinfo>

struct AppError : std::runtime_error {
    using std::runtime_error::runtime_error;
    void describe() const { std::cout << "AppError::describe\n"; }
};

void throw_app() { throw AppError{"app failure"}; }

int main() {
    // BAD: caught by value — sliced to std::runtime_error
    try {
        throw_app();
    } catch (std::runtime_error e) {
        std::cout << "type: " << typeid(e).name() << "\n";
        // e.describe();  // ERROR: std::runtime_error has no describe()
        // The dynamic type is LOST
    }

    // GOOD: caught by reference — preserves dynamic type
    try {
        throw_app();
    } catch (const std::runtime_error& e) {
        std::cout << "type: " << typeid(e).name() << "\n";
        // dynamic_cast<const AppError&>(e).describe();  // OK if AppError
    }
}
```

## 1.3 Stack Unwinding and Destructor Invocation

During propagation, the unwinder calls the **destructor of every automatic-duration object
constructed in each abandoned frame** [N4950 §14.2]. This is what makes RAII-based resource
management exception-safe.

### Stack Unwinding Walkthrough

Consider a call stack: `main()` calls `outer()`, which calls `middle()`, which calls `inner()`. When
`inner()` throws:

```
Call stack (top to bottom):
  inner()   <- throw occurs here
  middle()  <- destructors for locals in middle() called
  outer()   <- destructors for locals in outer() called
  main()    <- catch clause found, unwinding stops
```

The unwinder performs the following steps:

1. The exception object is allocated and initialized.
2. The unwinder (`_Unwind_RaiseException`) is called.
3. For each frame on the stack (starting from `inner()`): a. The personality function
   (`__gxx_personality_v0`) is called with the exception object and the frame's context. b. The
   personality function checks the LSDA for a matching `catch` clause. c. If no match, the
   personality function identifies cleanup code (destructor calls for local variables) and the
   unwinder executes those cleanups. d. The frame is popped, and the unwinder moves to the next
   frame.
4. When a matching `catch` is found in `main()`, the unwinder sets the instruction pointer to the
   catch clause's entry point and transfers control.

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

### Proof of the Zero-Cost Principle

**Claim:** In the table-based exception model, the normal (non-throwing) execution path incurs zero
runtime overhead compared to equivalent code without exception handling.

**Proof:**

1. The compiler generates exception handling information (LSDA and unwind tables) as **static data**
   in read-only sections of the binary (`.eh_frame`, `.gcc_except_table`). These tables are not
   loaded into registers or cache during normal execution.
2. The generated machine code for the normal path contains **no instructions** that reference the
   exception tables. There are no conditional branches to check for pending exceptions, no global
   flags, and no extra register saves.
3. The only overhead is binary size: the tables add ~5-15% to the binary. This is a one-time cost at
   load time and does not affect runtime instruction count.
4. Therefore, the instruction count and execution time of the normal path are identical to code
   compiled without exception support.

$\square$

:::tip
If you compile with `-fno-exceptions` (GCC/Clang), `throw` and `try` become compilation
errors. This confirms that exception-neutral code has zero overhead in the normal path.
:::

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

## 1.6 Exception Object Lifetime and Storage

The exception object is allocated by the C++ runtime, not by `new`. The Itanium ABI specifies that
the runtime uses a dedicated allocator (often a thread-local buffer) for small exception objects,
falling back to `malloc` for large ones [N4950 §14.2]. The exception object is destroyed when the
last `catch` clause handling it exits [N4950 §14.2]:

```cpp
#include <iostream>
#include <stdexcept>

struct Tracked {
    int id;
    explicit Tracked(int i) : id(i) { std::cout << "  Tracked(" << id << ") ctor\n"; }
    ~Tracked() { std::cout << "  ~Tracked(" << id << ") dtor\n"; }
    Tracked(const Tracked& o) : id(o.id) { std::cout << "  Tracked(" << id << ") copy\n"; }
};

void throw_tracked() { throw Tracked{1}; }

int main() {
    try {
        throw_tracked();
    } catch (const Tracked& e) {
        std::cout << "caught Tracked " << e.id << "\n";
    }
    std::cout << "after catch\n";
}
// Output:
//   Tracked(1) ctor          (constructed in throw expression)
//   caught Tracked 1         (handler executes)
//   ~Tracked(1) dtor         (destroyed when catch exits)
//   after catch
```

### Rethrowing with `throw;`

The `throw;` statement re-throws the currently handled exception without copying it. This is
critical for preserving the dynamic type when re-throwing from a catch clause that caught a base
class:

```cpp
#include <iostream>
#include <stdexcept>

struct AppError : std::runtime_error {
    using std::runtime_error::runtime_error;
};

struct NetworkError : AppError {
    using AppError::AppError;
};

void handle_and_rethrow() {
    try {
        throw NetworkError{"connection refused"};
    } catch (const AppError& e) {
        std::cout << "handling: " << e.what() << "\n";
        throw;  // re-throws the original NetworkError, NOT sliced
    }
}

int main() {
    try {
        handle_and_rethrow();
    } catch (const NetworkError& e) {
        std::cout << "caught NetworkError: " << e.what() << "\n";
    } catch (const AppError& e) {
        std::cout << "caught AppError: " << e.what() << "\n";
    }
}
// Output:
//   handling: connection refused
//   caught NetworkError: connection refused
```

:::warning
Never write `throw e;` in a catch clause — this creates a **new copy** of `e` using its
static type, slicing the dynamic type. Always use `throw;` to re-throw the original exception.
:::

## 1.7 Cross-Thread Exception Propagation with `std::exception_ptr`

C++11 introduced `std::exception_ptr` to transport exceptions across threads [N4950 §18.8.5]. This
is the only standard mechanism for propagating exceptions from a worker thread to the joining
thread:

```cpp
#include <iostream>
#include <exception>
#include <stdexcept>
#include <thread>
#include <future>

int main() {
    // Using std::async — handles exception_ptr internally
    std::future<int> f = std::async(std::launch::async, []() {
        throw std::runtime_error{"async failure"};
        return 0;
    });

    try {
        int result = f.get();  // re-throws the exception from the worker thread
        (void)result;
    } catch (const std::exception& e) {
        std::cout << "caught from async: " << e.what() << "\n";
    }

    // Manual exception_ptr usage with std::thread
    std::exception_ptr eptr;

    std::thread worker([&eptr]() {
        try {
            throw std::runtime_error{"thread failure"};
        } catch (...) {
            eptr = std::current_exception();  // capture exception
        }
    });

    worker.join();

    if (eptr) {
        try {
            std::rethrow_exception(eptr);  // re-throw in the joining thread
        } catch (const std::exception& e) {
            std::cout << "caught from thread: " << e.what() << "\n";
        }
    }
}
// Output:
//   caught from async: async failure
//   caught from thread: thread failure
```

The implementation allocates a reference-counted exception object on the heap. `std::exception_ptr`
is essentially a shared-ownership smart pointer to this object. The exception is destroyed when the
last `exception_ptr` referencing it is destroyed.

## 1.8 The LSDA Table Format

The LSDA (Language-Specific Data Area) encodes the exception handling information for each function.
On the Itanium ABI, it uses a compact bytecode format:

| Field               | Description                                                             |
| ------------------- | ----------------------------------------------------------------------- |
| **LPStart**         | Base address for landing pad offsets (usually the function entry point) |
| **CallSite Table**  | Array of (begin PC, end PC, landing pad, action) entries                |
| **Action Table**    | Array of type-filter and next-action offsets for catch clause matching  |
| **Type Info Table** | Array of `std::type_info*` pointers referenced by the action table      |

Each call site entry describes a range of PC values in the function. When the unwinder finds that
the current PC falls within a call site range, it checks the action table to determine which catch
clause (if any) handles the exception. The type info table provides the `std::type_info` for the
catch clause's type, enabling the dynamic type comparison.

The personality function (`__gxx_personality_v0` on GCC/Clang) interprets these tables during
unwinding. It is called by the unwinder (`_Unwind_RaiseException`) for each frame on the stack.

## 1.9 `noexcept` and Its Performance Implications

The `noexcept` specifier [N4950 §14.5] guarantees that a function will not throw. If a `noexcept`
function throws anyway, `std::terminate()` is called immediately without stack unwinding.

### Performance Benefits of `noexcept`

1. **Eliminates exception table entries:** The compiler can omit the function's LSDA entry, reducing
   binary size.
2. **Enables optimizations:** The compiler knows the function cannot throw, so it can omit cleanup
   code for temporaries created in the calling function. This can eliminate branches and reduce
   register pressure.
3. **Enables `std::move` in containers:** `std::vector::push_back` uses `noexcept` to decide between
   copy and move during reallocation. If the element's move constructor is `noexcept`, the vector
   moves elements; otherwise, it copies them.

```cpp
#include <iostream>
#include <vector>
#include <string>

struct NoThrowMove {
    std::string data;
    NoThrowMove() = default;
    NoThrowMove(NoThrowMove&&) noexcept = default;
    NoThrowMove(const NoThrowMove&) = default;
};

struct ThrowMove {
    std::string data;
    ThrowMove() = default;
    ThrowMove(ThrowMove&&) = default;  // NOT noexcept
    ThrowMove(const ThrowMove&) = default;
};

int main() {
    std::vector<NoThrowMove> v1;
    std::vector<ThrowMove> v2;

    v1.reserve(1000);
    v2.reserve(1000);

    std::cout << "noexcept move: ";
    for (int i = 0; i < 1000; ++i) v1.push_back(NoThrowMove{});
    std::cout << "done (used move)\n";

    std::cout << "potentially throwing move: ";
    for (int i = 0; i < 1000; ++i) v2.push_back(ThrowMove{});
    std::cout << "done (used copy)\n";

    return 0;
}
```

### `noexcept(false)` and Conditional `noexcept`

`noexcept` can be conditional on a compile-time boolean:

```cpp
template<typename T>
void swap(T& a, T& b) noexcept(std::is_nothrow_move_constructible_v<T> &&
                                std::is_nothrow_move_assignable_v<T>) {
    T tmp = std::move(a);
    a = std::move(b);
    b = std::move(tmp);
}
```

The standard library uses conditional `noexcept` extensively. For example, `std::vector::push_back`
is `noexcept` only if the element's move constructor is `noexcept`.

## 1.10 Exception Safety Levels

The C++ community recognizes three exception safety guarantees [N4950 §14.5]:

| Guarantee    | Description                                                                                                                      | Example                                   |
| :----------- | :------------------------------------------------------------------------------------------------------------------------------- | :---------------------------------------- |
| **No-throw** | The operation never throws. All resources are managed. Destructors, `swap`, move operations.                                     | `~T()`, `std::swap`                       |
| **Strong**   | If the operation fails, the state is rolled back to the pre-operation state (commit-or-rollback).                                | `std::vector::push_back` (single element) |
| **Basic**    | If the operation fails, the object is in a valid state (all invariants hold), but the state may have changed. No resource leaks. | `std::sort`                               |

### Code for Each Safety Level

```cpp
#include <iostream>
#include <vector>
#include <stdexcept>

class BasicSafety {
    std::vector<int> data_;
public:
    void add(int value) {
        // Basic guarantee: if push_back throws, the vector is valid
        // but may or may not contain the new value
        data_.push_back(value);
    }
};

class StrongSafety {
    std::vector<int> data_;
public:
    void add(int value) {
        // Strong guarantee: if the operation fails, state is unchanged
        std::vector<int> new_data = data_;
        new_data.push_back(value);
        data_ = std::move(new_data);
    }
};

class NoThrowSafety {
    std::vector<int> data_;
public:
    void clear() noexcept {
        // No-throw guarantee: always succeeds, never throws
        data_.clear();
    }

    void swap(NoThrowSafety& other) noexcept {
        data_.swap(other.data_);
    }
};
```

## Common Pitfalls

### 1. Throwing from Destructors During Stack Unwinding

If a destructor throws while another exception is already active (during stack unwinding),
`std::terminate()` is called immediately [N4950 §14.7]. This makes destructor throws extremely
dangerous:

```cpp
#include <iostream>
#include <stdexcept>

struct Bad {
    ~Bad() {
        throw std::runtime_error{"destructor threw"};  // DANGEROUS
    }
};

int main() {
    try {
        Bad b;
        throw std::runtime_error{"original exception"};  // stack unwinding begins
    } catch (const std::exception& e) {
        // NEVER REACHED: terminate() called during unwinding
        std::cout << e.what() << "\n";
    }
}
// Output: terminate called after throwing an instance of 'std::runtime_error'
```

### 2. Exceptions and `noexcept` Functions

If an exception escapes a `noexcept` function, `std::terminate()` is called instead of stack
unwinding. This is a deliberate design choice — callers of `noexcept` functions are entitled to
assume no exception propagation overhead:

```cpp
#include <iostream>
#include <stdexcept>

void unexpected_throw() noexcept {
    throw std::runtime_error{"from noexcept function"};
    // std::terminate() is called — no stack unwinding occurs
}

int main() {
    unexpected_throw();
    // never reached
}
```

### 3. Memory Overhead of Exception Tables

The LSDA and unwind tables typically add 5-15% to binary size. In embedded environments with tight
flash budgets, this overhead can be significant. Compiling with `-fno-exceptions` eliminates these
tables entirely, but also disables all `try`/`catch`/`throw` semantics. On bare-metal targets, you
may need to provide a custom `__cxa_pure_virtual` and `__cxa_throw` implementation even when using
`-fno-exceptions` if linked libraries reference these symbols.

### 4. Catching by Value vs Reference

Catching by value slices the exception object and invokes an extra copy constructor. Always catch by
reference (`const T&` or `T&`) to preserve the dynamic type and avoid unnecessary copies. The only
exception is `catch (...)`, which cannot specify a type.

### 5. Exception Specifications (Deprecated)

The dynamic exception specification `throw(T1, T2)` is deprecated since C++11 and removed in C++17.
It was never enforced at compile time and provided no performance benefit. Use `noexcept` (or
`noexcept(false)`) instead.

### 6. `std::terminate` vs. `std::unexpected`

`std::unexpected` (called when a function throws a type not in its exception specification) is
removed in C++17. `std::terminate` is the only termination handler for exception-related violations.

## See Also

- [Exception Safety Guarantees](2_exception_safety.md)
- [The noexcept Specifier](3_noexcept.md)
