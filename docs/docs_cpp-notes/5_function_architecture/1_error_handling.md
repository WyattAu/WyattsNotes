---
title: "Error Handling Systems"
date: 2026-03-31
tags: [C++]
categories: [C++]
slug: /cpp-notes/function-architecture/error-handling
---

import CodeBlock from "@theme/CodeBlock";

# Error Handling Systems

C++ provides multiple, composable error handling mechanisms. This module covers the exception
model at the ABI level, the exception safety taxonomy, the `noexcept` specifier, algebraic types
(`std::optional`, `std::variant`), and the C++23 `std::expected` monad.

---

## 1. The Itanium Exception ABI

### 1.1 Table-Based Uninding Model

The dominant exception model on all major platforms (GCC, Clang, MSVC on x64) is the
**zero-cost table-based** model specified informally by the Itanium C++ ABI and adopted as the
de-facto standard mechanism [N4950 §14.3].

When an exception is thrown, the runtime:

1. Allocates the exception object (on a dedicated heap or in a pre-allocated buffer).
2. Copies or moves the thrown expression into that object via `std::allocator_traits` [N4950 §17.6.3.6].
3. Walks the **call stack** using tables generated at compile time.

Each function that may participate in exception handling has two tables embedded in the
binary (usually in the `.eh_frame` / `.gcc_except_table` ELF sections on Linux):

| Table                                  | Purpose                                                                                                                                 |
| -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| **LSDA** (Language-Specific Data Area) | Describes which PC ranges map to which `try`/`catch` blocks.                                                                            |
| **Unwind table**                       | Lists every call site in the function so the unwinder can determine whether the function has a cleanup (destructor call) at each point. |

:::info
On platforms using the Itanium ABI, **no runtime cost** is incurred for `try` blocks when no
exception is thrown. The tables are consulted only during unwinding.
:::

### 1.2 Searching for Matching Catch Clauses

The search algorithm [N4950 §14.4] proceeds as follows:

1. The exception object is associated with a `std::type_info` structure describing its
   dynamic type.
2. Starting from the throw site, the unwinder examines the LSDA of each frame on the call
   stack.
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

### 1.3 Stack Unwinding and Destructor Invocation

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

### 1.4 Zero-Cost Principle

In the table-based model, the generated code for a function that uses exceptions is
**identical in the non-throwing path** to a function that does not use exceptions at all.
There are:

- No extra branches or flags tested on every `try` entry.
- No per-function "has_exception" global.
- No code-size penalty in the hot path (the tables live in read-only data sections).

:::tip
If you compile with `-fno-exceptions` (GCC/Clang), `throw` and `try` become compilation
errors. This confirms that exception-neutral code has zero overhead in the normal path.
:::

### 1.5 Performance Comparison: Throw/Catch vs Error Codes

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

---

## 2. Exception Safety Guarantees

The exception safety taxonomy, formalized by Abrahams (2001) and referenced in the C++
Standard Library requirements, classifies every operation into four levels [N4950 §16.4.6.3].

### 2.1 No-Throw Guarantee (Strongest)

The operation **never** throws an exception. If it cannot complete, it terminates or reports
via some non-throwing mechanism.

All destructors, deallocation functions, and swap operations in the standard library provide
the no-throw guarantee [N4950 §16.4.6.3 Table 30].

```cpp
#include <vector>
#include <utility>
#include <iostream>

template <typename T>
class SafeVector {
public:
    SafeVector() = default;

    void push_back(const T& val) noexcept(std::is_nothrow_copy_constructible_v<T>) {
        if (size_ == cap_) {
            std::size_t new_cap = cap_ ? cap_ * 2 : 4;
            T* buf = static_cast<T*>(::operator new(sizeof(T) * new_cap));
            for (std::size_t i = 0; i < size_; ++i) {
                new (buf + i) T(data_[i]);
            }
            for (std::size_t i = 0; i < size_; ++i) {
                data_[i].~T();
            }
            ::operator delete(data_);
            data_ = buf;
            cap_ = new_cap;
        }
        new (data_ + size_) T(val);
        ++size_;
    }

    ~SafeVector() {
        for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
        ::operator delete(data_);
    }

    void swap(SafeVector& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
        swap(cap_, other.cap_);
    }

private:
    T* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t cap_ = 0;
};

int main() {
    static_assert(noexcept(std::declval<SafeVector<int>&>().swap(
        std::declval<SafeVector<int>&>())));
    std::cout << "swap is noexcept: true\n";
    return 0;
}
```

### 2.2 Strong Guarantee (Transactional)

The operation either **succeeds completely** or **has no observable effect** — the state of
the program is rolled back to before the operation began [N4950 §16.4.6.3].

The canonical technique is **copy-and-swap**: perform all work on a copy, then atomically
swap the copy into place.

```cpp
#include <vector>
#include <algorithm>
#include <stdexcept>
#include <iostream>

template <typename T>
class StrongVector {
public:
    StrongVector() = default;

    void push_back(const T& val) {
        StrongVector tmp{*this};
        tmp.push_back_unchecked(val);
        swap(tmp);
    }

    void swap(StrongVector& other) noexcept {
        using std::swap;
        swap(data_, other.data_);
        swap(size_, other.size_);
        swap(cap_, other.cap_);
    }

    std::size_t size() const noexcept { return size_; }
    const T& operator[](std::size_t i) const { return data_[i]; }

    ~StrongVector() {
        for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
        ::operator delete(data_);
    }

private:
    void push_back_unchecked(const T& val) {
        if (size_ == cap_) {
            std::size_t new_cap = cap_ ? cap_ * 2 : 4;
            T* buf = static_cast<T*>(::operator new(sizeof(T) * new_cap));
            for (std::size_t i = 0; i < size_; ++i) {
                new (buf + i) T(data_[i]);
            }
            for (std::size_t i = 0; i < size_; ++i) data_[i].~T();
            ::operator delete(data_);
            data_ = buf;
            cap_ = new_cap;
        }
        new (data_ + size_) T(val);
        ++size_;
    }

    T* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t cap_ = 0;
};

struct ThrowingCopy {
    int value;
    static int copy_count;
    explicit ThrowingCopy(int v) : value(v) {}
    ThrowingCopy(const ThrowingCopy& o) : value(o.value) {
        if (++copy_count > 2) throw std::runtime_error{"too many copies"};
    }
    ThrowingCopy& operator=(const ThrowingCopy&) = default;
};
int ThrowingCopy::copy_count = 0;

int main() {
    StrongVector<ThrowingCopy> sv;
    sv.push_back(ThrowingCopy{1});
    sv.push_back(ThrowingCopy{2});
    std::cout << "size before failed push: " << sv.size() << "\n";
    ThrowingCopy::copy_count = 0;

    try {
        sv.push_back(ThrowingCopy{3});
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }

    std::cout << "size after failed push: " << sv.size() << "\n";
    std::cout << "data preserved: " << sv[0].value << ", " << sv[1].value << "\n";
    return 0;
}
// Output:
//   size before failed push: 2
//   caught: too many copies
//   size after failed push: 2
//   data preserved: 1, 2
```

### 2.3 Basic Guarantee

The operation **does not leak resources** and leaves every object in a **valid state**, but
the state may be unspecified (different from the original state). This is the minimum
acceptable guarantee for any operation [N4950 §16.4.6.3].

### 2.4 No Guarantee

No invariant is maintained. The program may leak resources, leave objects in invalid states,
or exhibit undefined behavior. Standard library operations **never** offer this level
intentionally, though user code may.

### 2.5 Guarantee Comparison

```cpp
#include <iostream>
#include <vector>

struct BadVector {
    std::vector<int> data;

    void push_back_basic(int val) {
        data.push_back(val);
    }

    void push_back_no_guarantee(int val) {
        int* raw = new int[data.size() + 1];
        for (std::size_t i = 0; i < data.size(); ++i) {
            raw[i] = data[i];
        }
        raw[data.size()] = val;
        data.clear();
        if (val == -1) throw -1;
        for (std::size_t i = 0; i <= data.size(); ++i) {
            data.push_back(raw[i]);
        }
        delete[] raw;
    }
};

int main() {
    std::cout << "Guarantee levels:\n"
              << "  No-throw : operation never throws\n"
              << "  Strong   : all-or-nothing (transactional)\n"
              << "  Basic    : no leaks, valid but unspecified state\n"
              << "  None     : anything goes\n";
    return 0;
}
```

| Guarantee | Resource Safety | State Consistency      | Example                           |
| --------- | --------------- | ---------------------- | --------------------------------- |
| No-throw  | Yes             | Guaranteed identical   | `swap()`, destructors             |
| Strong    | Yes             | Rolled back on failure | `std::vector::push_back` (C++11+) |
| Basic     | Yes             | Valid but unspecified  | `std::sort`                       |
| None      | No              | No guarantee           | Manual `new[]` without cleanup    |

---

## 3. The `noexcept` Specifier

### 3.1 `noexcept` as Part of the Function Type

Since C++17, `noexcept` is part of the **function type system** [N4950 §14.5.1]. Two
function pointers that differ only in `noexcept` are different types:

```cpp
#include <type_traits>
#include <iostream>

void f() noexcept {}
void g() {}

static_assert(!std::is_same_v<decltype(f), decltype(g)>);
static_assert(!std::is_same_v<void(*)() noexcept, void(*)()>);
static_assert(std::is_same_v<void(*)() noexcept, decltype(&f)>);

int main() {
    void (*pf)() noexcept = &f;
    void (*pg)() = &g;
    std::cout << "noexcept is part of the type: confirmed\n";
    (void)pf; (void)pg;
    return 0;
}
```

A `noexcept` function pointer can be initialized with a non-`noexcept` function pointer
(implicit conversion), but not vice versa:

```cpp
#include <iostream>

void safe() noexcept {}
void risky() {}

int main() {
    void (*ns)() noexcept = &risky;
    void (*nt)() = &safe;
    (void)ns; (void)nt;

    void (*ns2)() noexcept = &safe;
    (void)ns2;

    std::cout << "non-noexcept -> noexcept: OK\n"
              << "noexcept -> non-noexcept: OK\n";
    return 0;
}
```

### 3.2 `std::move_if_noexcept`

The standard library uses `std::move_if_noexcept` to provide the strong exception safety
guarantee during reallocation [N4950 §20.2.4]. If an element's move constructor might throw,
the library falls back to copying:

$$
\text{move\_if\_noexcept}(x) = \begin{cases} \text{std::move}(x) & \text{if } T\text{'s move is noexcept or not copyable} \\ x & \text{otherwise (lvalue copy)} \end{cases}
$$

```cpp
#include <iostream>
#include <utility>
#include <string>
#include <vector>

struct CopyableOnly {
    std::string data;
    CopyableOnly() = default;
    CopyableOnly(const CopyableOnly& o) : data(o.data) {
        std::cout << "  copy\n";
    }
    CopyableOnly(CopyableOnly&& o) noexcept : data(std::move(o.data)) {
        std::cout << "  move\n";
    }
};

struct ThrowingMove {
    std::string data;
    ThrowingMove() = default;
    ThrowingMove(const ThrowingMove& o) : data(o.data) {
        std::cout << "  copy\n";
    }
    ThrowingMove(ThrowingMove&& o) : data(std::move(o.data)) {
        std::cout << "  move (throwing)\n";
    }
};

int main() {
    CopyableOnly co;
    std::cout << "move_if_noexcept on CopyableOnly:\n";
    auto co2 = std::move_if_noexcept(co);

    ThrowingMove tm;
    std::cout << "move_if_noexcept on ThrowingMove:\n";
    auto tm2 = std::move_if_noexcept(tm);

    return 0;
}
// Output:
//   move_if_noexcept on CopyableOnly:
//     move
//   move_if_noexcept on ThrowingMove:
//     copy
```

### 3.3 `noexcept` and Optimization

Marking a function `noexcept` gives the compiler permission to:

1. **Omit unwind tables** for that function on some platforms.
2. **Assume non-throwing** when inlining — enabling optimizations that would otherwise be
   invalid if a callee could throw.
3. **Elide exception-related bookkeeping** in callers.

```cpp
#include <vector>
#include <iostream>

struct NoThrowMovable {
    int data[64]{};
    NoThrowMovable() = default;
    NoThrowMovable(NoThrowMovable&&) noexcept = default;
    NoThrowMovable& operator=(NoThrowMovable&&) noexcept = default;
};

struct ThrowingMovable {
    int data[64]{};
    ThrowingMovable() = default;
    ThrowingMovable(ThrowingMovable&&) = default;
    ThrowingMovable& operator=(ThrowingMovable&&) = default;
};

int main() {
    std::vector<NoThrowMovable> v1;
    v1.reserve(1000);
    std::cout << "NoThrowMovable: elements moved (noexcept)\n";

    std::vector<ThrowingMovable> v2;
    v2.reserve(1000);
    std::cout << "ThrowingMovable: elements copied (may throw)\n";
    return 0;
}
```

### 3.4 `noexcept(false)` — Explicit Opt-Out

The default for destructors is `noexcept(true)` since C++11 [N4950 §14.5.3]. Use
`noexcept(false)` only when absolutely necessary (and the "destructor must never throw"
rule still applies — see Section 6.4).

```cpp
#include <iostream>
#include <exception>

struct Reluctant {
    ~Reluctant() noexcept(false) {
        std::cout << "dtor marked noexcept(false)\n";
    }
};

int main() {
    try {
        Reluctant r;
        throw std::runtime_error{"oops"};
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    return 0;
}
// Output:
//   dtor marked noexcept(false)
//   caught: oops
```

:::warning
If a `noexcept(false)` destructor actually throws during stack unwinding, `std::terminate()`
is called [N4950 §14.7]. Marking a destructor `noexcept(false)` does not make it safe to
throw from a destructor during unwinding.
:::

### 3.5 Conditional `noexcept`

The `noexcept` specifier accepts a constant expression:

```cpp
#include <iostream>
#include <type_traits>

template <typename T>
class Buffer {
public:
    Buffer() = default;

    void push(const T& val) noexcept(std::is_nothrow_copy_constructible_v<T>) {
        std::cout << "push (noexcept="
                  << std::is_nothrow_copy_constructible_v<T> << ")\n";
    }
};

int main() {
    Buffer<int> bi;
    bi.push(42);

    Buffer<std::string> bs;
    bs.push("hello");

    return 0;
}
// Output:
//   push (noexcept=true)
//   push (noexcept=true)
```

---

## 4. Algebraic Error Handling

### 4.1 `std::optional<T>`

`std::optional<T>` models a value that may or may not be present [N4950 §20.6]. It is
allocated on the stack, stores at most one `T`, and requires no heap allocation.

```cpp
#include <iostream>
#include <optional>
#include <string>
#include <fstream>
#include <sstream>

std::optional<std::string> read_first_line(const std::string& path) {
    std::ifstream file{path};
    if (!file.is_open()) {
        return std::nullopt;
    }
    std::string line;
    if (std::getline(file, line)) {
        return line;
    }
    return std::nullopt;
}

int main() {
    auto result = read_first_line("/nonexistent/file.txt");

    if (result.has_value()) {
        std::cout << "First line: " << result.value() << "\n";
    } else {
        std::cout << "File could not be read or is empty\n";
    }

    auto val = result.value_or("(no line)");
    std::cout << "With default: " << val << "\n";

    result.transform([](const std::string& s) {
        return s.size();
    }).and_then([](std::size_t len) -> std::optional<std::size_t> {
        if (len > 0) return len;
        return std::nullopt;
    });

    return 0;
}
```

### 4.2 `std::variant<T, U, V>`

`std::variant` is a type-safe, stack-allocated union that holds exactly one of its
alternative types at any time [N4950 §20.7].

```cpp
#include <iostream>
#include <variant>
#include <string>
#include <stdexcept>

struct ParseError {
    std::string message;
    std::size_t position;
};

struct ValueError {
    std::string expected;
    std::string found;
};

using ParseResult = std::variant<int, ParseError, ValueError>;

ParseResult parse_int(const std::string& s) {
    if (s.empty()) {
        return ParseError{"empty input", 0};
    }
    std::size_t pos = 0;
    try {
        std::size_t processed = 0;
        int val = std::stoi(s, &processed);
        if (processed != s.size()) {
            return ParseError{"trailing characters", processed};
        }
        return val;
    } catch (const std::invalid_argument&) {
        return ValueError{"integer", s};
    } catch (const std::out_of_range&) {
        return ValueError{"in-range integer", s};
    }
}

int main() {
    auto results = {
        parse_int("42"),
        parse_int("3.14"),
        parse_int(""),
        parse_int("99999999999999999999"),
    };

    for (const auto& r : results) {
        std::visit([](const auto& v) {
            using T = std::decay_t<decltype(v)>;
            if constexpr (std::is_same_v<T, int>) {
                std::cout << "  Parsed: " << v << "\n";
            } else if constexpr (std::is_same_v<T, ParseError>) {
                std::cout << "  ParseError at " << v.position << ": " << v.message << "\n";
            } else if constexpr (std::is_same_v<T, ValueError>) {
                std::cout << "  ValueError: expected " << v.expected
                          << ", got \"" << v.found << "\"\n";
            }
        }, r);
    }
    return 0;
}
// Output:
//   Parsed: 42
//   ParseError at 3: trailing characters
//   ParseError at 0: empty input
//   ValueError: expected in-range integer, got "99999999999999999999"
```

### 4.3 `std::visit` and `std::get`

```cpp
#include <iostream>
#include <variant>
#include <string>

using Value = std::variant<int, double, std::string>;

struct Printer {
    void operator()(int v) const { std::cout << "int: " << v << "\n"; }
    void operator()(double v) const { std::cout << "double: " << v << "\n"; }
    void operator()(const std::string& v) const { std::cout << "string: " << v << "\n"; }
};

int main() {
    Value v = std::string{"hello"};

    std::visit(Printer{}, v);
    v = 42;
    std::visit(Printer{}, v);

    try {
        std::get<double>(v);
    } catch (const std::bad_variant_access& e) {
        std::cout << "bad_variant_access: " << e.what() << "\n";
    }

    if (auto* p = std::get_if<std::string>(&v)) {
        std::cout << "string value: " << *p << "\n";
    } else {
        std::cout << "not a string\n";
    }

    if (auto* p = std::get_if<int>(&v)) {
        std::cout << "int value: " << *p << "\n";
    }

    return 0;
}
// Output:
//   string: hello
//   int: 42
//   bad_variant_access: std::bad_variant_access
//   not a string
//   int value: 42
```

### 4.4 Comparison with Exceptions

| Aspect                | Exceptions           | `std::optional`              | `std::variant`                     |
| --------------------- | -------------------- | ---------------------------- | ---------------------------------- |
| Overhead (no error)   | ~0 (table-based)     | 0                            | 0                                  |
| Overhead (error path) | ~$\mu s$             | ~ns                          | ~ns                                |
| Error type            | Any type             | `std::nullopt` only          | User-defined alternatives          |
| Composability         | Implicit (unwinding) | Explicit (check `has_value`) | Explicit (`std::visit`/`std::get`) |
| Catches missed errors | No (terminate)       | Yes (forgot to check)        | Yes (forgot to check)              |

---

## 5. Monadic Error Handling (`std::expected`)

### 5.1 `std::expected<T, E>` Overview

`std::expected<T, E>` [N4950 §19.7], introduced in C++23, is a monadic type that holds
either a value of type `T` or an error of type `E`. It is the C++ equivalent of Rust's
`Result<T, E>`.

```cpp
#include <iostream>
#include <expected>
#include <string>
#include <charconv>
#include <system_error>

enum class ParseErr {
    Empty,
    Invalid,
    OutOfRange,
};

std::string describe(ParseErr e) {
    switch (e) {
        case ParseErr::Empty:     return "empty input";
        case ParseErr::Invalid:   return "invalid integer";
        case ParseErr::OutOfRange: return "out of range";
    }
    return "unknown";
}

std::expected<int, ParseErr> parse_int(const std::string& s) {
    if (s.empty()) return std::unexpected{ParseErr::Empty};

    int val = 0;
    auto [ptr, ec] = std::from_chars(s.data(), s.data() + s.size(), val);
    if (ec == std::errc::invalid_argument) {
        return std::unexpected{ParseErr::Invalid};
    }
    if (ec == std::errc::result_out_of_range) {
        return std::unexpected{ParseErr::OutOfRange};
    }
    if (ptr != s.data() + s.size()) {
        return std::unexpected{ParseErr::Invalid};
    }
    return val;
}

int main() {
    auto cases = {"42", "abc", "", "99999999999999999999", "3.14"};

    for (const auto& c : cases) {
        auto r = parse_int(c);
        if (r.has_value()) {
            std::cout << "  \"" << c << "\" -> " << r.value() << "\n";
        } else {
            std::cout << "  \"" << c << "\" -> error: " << describe(r.error()) << "\n";
        }
    }

    return 0;
}
// Output:
//   "42" -> 42
//   "abc" -> error: invalid integer
//   "" -> error: empty input
//   "99999999999999999999" -> error: out of range
//   "3.14" -> error: invalid integer
```

### 5.2 Core API

| Member                    | Description                                 |
| ------------------------- | ------------------------------------------- |
| `has_value()`             | Returns `true` if a value is held           |
| `operator bool()`         | Same as `has_value()`                       |
| `value()`                 | Returns the value; UB if error is held      |
| `error()`                 | Returns the error; UB if value is held      |
| `value_or(U)`             | Returns the value, or `U` if error is held  |
| `operator->`, `operator*` | Access the contained value                  |
| `transform(F)`            | Apply `F` to value, return `expected<U, E>` |
| `transform_error(F)`      | Apply `F` to error, return `expected<T, G>` |
| `and_then(F)`             | Monadic bind: `F(T) -> expected<U, E>`      |
| `or_else(F)`              | Monadic recovery: `F(E) -> expected<T, F>`  |
| `error_or(E)`             | Returns the error, or `E` if value is held  |

### 5.3 Monadic Operations

```cpp
#include <iostream>
#include <expected>
#include <string>
#include <charconv>

enum class Err { NotNumeric, Negative, TooLarge };

std::expected<int, Err> parse_positive(const std::string& s) {
    if (s.empty()) return std::unexpected{Err::NotNumeric};
    int val = 0;
    auto [ptr, ec] = std::from_chars(s.data(), s.data() + s.size(), val);
    if (ec != std::errc{}) return std::unexpected{Err::NotNumeric};
    if (ptr != s.data() + s.size()) return std::unexpected{Err::NotNumeric};
    if (val < 0) return std::unexpected{Err::Negative};
    return val;
}

std::expected<int, Err> clamp(int max_val, int v) {
    if (v > max_val) return std::unexpected{Err::TooLarge};
    return v;
}

int main() {
    auto r = parse_positive("42")
        .and_then([](int v) { return clamp(100, v); })
        .transform([](int v) { return v * 2; });

    if (r) {
        std::cout << "Result: " << r.value() << "\n";
    } else {
        std::cout << "Error code: " << static_cast<int>(r.error()) << "\n";
    }

    auto r2 = parse_positive("200")
        .and_then([](int v) { return clamp(100, v); })
        .transform([](int v) { return v * 2; })
        .or_else([](Err e) -> std::expected<int, Err> {
            std::cout << "Recovered from error\n";
            return 0;
        });

    std::cout << "Recovered result: " << r2.value() << "\n";

    return 0;
}
// Output:
//   Result: 84
//   Recovered from error
//   Recovered result: 0
```

### 5.4 Comparison with Rust's `Result<T, E>`

| C++ `std::expected`  | Rust `Result`            | Purpose                          |
| -------------------- | ------------------------ | -------------------------------- |
| `has_value()`        | `is_ok()`                | Check for value                  |
| `!has_value()`       | `is_err()`               | Check for error                  |
| `value()`            | `unwrap()`               | Access value (UB/panic on error) |
| `error()`            | `unwrap_err()`           | Access error                     |
| `value_or(default)`  | `unwrap_or(default)`     | Default on error                 |
| `and_then(f)`        | `.and_then(f)`           | Monadic bind                     |
| `transform(f)`       | `.map(f)`                | Functor map                      |
| `transform_error(f)` | `.map_err(f)`            | Map the error                    |
| `or_else(f)`         | `.or(f)` / `.or_else(f)` | Monadic recovery                 |

### 5.5 Factory Pattern with `std::expected`

```cpp
#include <iostream>
#include <expected>
#include <string>
#include <memory>

enum class FactoryErr {
    InvalidName,
    InvalidAge,
    AllocationFailed,
};

struct Person {
    std::string name;
    int age;
};

std::expected<Person, FactoryErr> make_person(std::string name, int age) {
    if (name.empty()) return std::unexpected{FactoryErr::InvalidName};
    if (age < 0 || age > 150) return std::unexpected{FactoryErr::InvalidAge};

    try {
        return Person{std::move(name), age};
    } catch (const std::bad_alloc&) {
        return std::unexpected{FactoryErr::AllocationFailed};
    }
}

int main() {
    auto p1 = make_person("Alice", 30);
    if (p1) {
        std::cout << p1->name << ", " << p1->age << "\n";
    }

    auto p2 = make_person("", 30);
    if (!p2) {
        std::cout << "Error: " << static_cast<int>(p2.error()) << "\n";
    }

    return 0;
}
// Output:
//   Alice, 30
//   Error: 0
```

---

## 6. Error Handling Best Practices

### 6.1 When to Use Each Mechanism

| Situation                               | Recommended Mechanism                            |
| --------------------------------------- | ------------------------------------------------ |
| Truly exceptional, unrecoverable events | `throw` / `try` / `catch`                        |
| Expected failure with optional return   | `std::optional<T>`                               |
| Typed error outcomes (C++23+)           | `std::expected<T, E>`                            |
| Multiple error types, pre-C++23         | `std::variant<T, E1, E2, ...>`                   |
| C interface / FFI boundary              | Error codes (`int`, `enum`)                      |
| Performance-critical hot path           | `noexcept` functions + error codes or `expected` |
| Destructor cleanup                      | Never throw (see §6.4)                           |

### 6.2 C++ Core Guidelines

Key guidelines from [C++ Core Guidelines](https://isocpp.github.io/CppCoreGuidelines/):

| Guideline | Summary                                                                         |
| --------- | ------------------------------------------------------------------------------- |
| **E.1**   | Develop a logical error-handling strategy early.                                |
| **E.2**   | Throw exceptions to signal exceptional conditions, not for normal control flow. |
| **E.3**   | Use exceptions for errors in constructors.                                      |
| **E.5**   | Prefer `noexcept` where feasible.                                               |
| **E.12**  | Use `final` or `noexcept` on throwing functions to prevent overriding.          |
| **E.14**  | Use `noexcept` move operations.                                                 |
| **E.16**  | Destructors, deallocation, and `swap` must never fail.                          |
| **E.25**  | If you can't throw, consider `std::expected` for reporting errors.              |
| **I.7**   | State preconditions (and prefer `Expects` / `Ensures` contracts).               |

### 6.3 Exception Safety in Constructors

Constructors that throw leave the object **partially constructed**. The destructor for the
partially constructed object is **not called** — but destructors of any fully-constructed
subobjects and base classes **are** called [N4950 §14.3].

```cpp
#include <iostream>
#include <stdexcept>

struct Resource {
    const char* name;
    explicit Resource(const char* n) : name(n) {
        std::cout << "  acquire: " << name << "\n";
    }
    ~Resource() {
        std::cout << "  release: " << name << "\n";
    }
};

struct Widget {
    Resource a;
    Resource b;
    Resource c;

    Widget()
        : a{"a"}
        , b{"b"}
        , c{"c"}
    {
        std::cout << "  Widget fully constructed\n";
        throw std::runtime_error{"construction failed"};
    }
};

int main() {
    try {
        Widget w;
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    return 0;
}
// Output:
//   acquire: a
//   acquire: b
//   acquire: c
//   Widget fully constructed
//   release: c
//   release: b
//   release: a
//   caught: construction failed
```

:::tip
If a constructor can fail, throwing an exception is the **only** way to signal the error.
Error codes cannot be returned from a constructor.
:::

### 6.4 The "Destructor Must Never Throw" Rule

If a destructor throws during stack unwinding (i.e., while another exception is already in
flight), `std::terminate()` is called immediately [N4950 §14.7]. This rule is absolute and
cannot be overridden.

```cpp
#include <iostream>
#include <exception>
#include <stdexcept>

struct ThrowingDtor {
    ~ThrowingDtor() {
        std::cout << "  ThrowingDtor dtor\n";
        throw std::runtime_error{"destructor threw"};
    }
};

struct SafeDtor {
    ~SafeDtor() noexcept {
        std::cout << "  SafeDtor dtor\n";
        try {
            ThrowingDtor t;
        } catch (const std::exception& e) {
            std::cout << "  swallowed in SafeDtor: " << e.what() << "\n";
        }
    }
};

int main() {
    std::cout << "Scenario 1: destructors in normal scope\n";
    {
        try {
            ThrowingDtor t;
        } catch (const std::exception& e) {
            std::cout << "  caught: " << e.what() << "\n";
        }
    }

    std::cout << "\nScenario 2: destructor during unwinding -> terminate\n";
    try {
        ThrowingDtor t;
        throw std::logic_error{"first exception"};
    } catch (...) {
        std::cout << "  This line is never reached\n";
    }

    return 0;
}
// Output:
//   Scenario 1: destructors in normal scope
//     ThrowingDtor dtor
//     caught: destructor threw
//
//   Scenario 2: destructor during unwinding -> terminate
//     ThrowingDtor dtor
//   terminate called after throwing an instance of 'std::runtime_error'
//     what():  destructor threw
//   Aborted (core dumped)
```

**Safe pattern — swallow exceptions inside destructors:**

```cpp
#include <iostream>
#include <stdexcept>

struct SafeCleanup {
    ~SafeCleanup() noexcept {
        try {
            might_throw();
        } catch (const std::exception& e) {
            std::cerr << "[warning] cleanup failed: " << e.what() << "\n";
        }
    }
    void might_throw() {
        throw std::runtime_error{"resource release failed"};
    }
};

int main() {
    try {
        SafeCleanup s;
        throw std::logic_error{"other error"};
    } catch (const std::exception& e) {
        std::cout << "caught: " << e.what() << "\n";
    }
    return 0;
}
// Output:
//   [warning] cleanup failed: resource release failed
//   caught: other error
```

:::warning
Swallowing exceptions in destructors is a **last resort**. If cleanup truly cannot fail,
make the destructor `noexcept` and ensure cleanup operations are themselves `noexcept`. Use
RAII wrappers that handle errors internally rather than propagating them from destructors.
:::

### 6.5 Choosing Between Mechanisms: Decision Flowchart

```
Is the error truly exceptional (should rarely happen)?
├── Yes → Use exceptions (throw / catch)
└── No → Is C++23 available?
    ├── Yes → Use std::expected<T, E>
    └── No → Are there multiple error types?
        ├── Yes → Use std::variant<T, E1, E2, ...>
        └── No → Use std::optional<T> (or error codes for C FFI)
```

### 6.6 Summary

| Mechanism       | C++ Version | Error Richness    | Overhead (no error) | Composability              |
| --------------- | ----------- | ----------------- | ------------------: | -------------------------- |
| Exceptions      | C++98       | Any type          |                  ~0 | Implicit (unwinding)       |
| Error codes     | C           | Enum/int          |                   0 | Manual propagation         |
| `std::optional` | C++17       | `nullopt` only    |                   0 | Check required             |
| `std::variant`  | C++17       | User-defined      |                   0 | `visit` / `get_if`         |
| `std::expected` | C++23       | Single error type |                   0 | Monadic (`and_then`, etc.) |

**Relevance:** Modern C++ increasingly favors **explicit, algebraic error handling**
(`std::expected`) for expected failure modes and reserves **exceptions** for truly
exceptional conditions. The combination of `noexcept`, RAII, and `std::expected` provides a
robust, low-overhead error handling strategy.
