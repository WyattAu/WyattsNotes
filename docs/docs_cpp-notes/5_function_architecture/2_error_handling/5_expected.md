---
title: Monadic Error Handling — std::expected
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: monadic-error-handling-std-expected
---

# Monadic Error Handling (`std::expected`)

`std::expected<T, E>` [N4950 §19.7], introduced in C++23, is a monadic type that holds either a
value of type `T` or an error of type `E`. It is the C++ equivalent of Rust's `Result<T, E>`.

## 5.1 `std::expected<T, E>` Overview

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

## 5.2 Core API

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

## 5.3 Monadic Operations

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

## 5.4 Comparison with Rust's `Result<T, E>`

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

## 5.5 Factory Pattern with `std::expected`

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

## Error Handling Best Practices

### When to Use Each Mechanism

| Situation                               | Recommended Mechanism                            |
| --------------------------------------- | ------------------------------------------------ |
| Truly exceptional, unrecoverable events | `throw` / `try` / `catch`                        |
| Expected failure with optional return   | `std::optional<T>`                               |
| Typed error outcomes (C++23+)           | `std::expected<T, E>`                            |
| Multiple error types, pre-C++23         | `std::variant<T, E1, E2, ...>`                   |
| C interface / FFI boundary              | Error codes (`int`, `enum`)                      |
| Performance-critical hot path           | `noexcept` functions + error codes or `expected` |
| Destructor cleanup                      | Never throw (see below)                          |

### C++ Core Guidelines

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

### Exception Safety in Constructors

Constructors that throw leave the object **partially constructed**. The destructor for the partially
constructed object is **not called** — but destructors of any fully-constructed subobjects and base
classes **are** called [N4950 §14.3].

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

:::tip If a constructor can fail, throwing an exception is the **only** way to signal the error.
Error codes cannot be returned from a constructor. :::

### The "Destructor Must Never Throw" Rule

If a destructor throws during stack unwinding (i.e., while another exception is already in flight),
`std::terminate()` is called immediately [N4950 §14.7]. This rule is absolute and cannot be
overridden.

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
//     terminate called after throwing an instance of 'std::runtime_error'
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

:::warning Swallowing exceptions in destructors is a **last resort**. If cleanup truly cannot fail,
make the destructor `noexcept` and ensure cleanup operations are themselves `noexcept`. Use RAII
wrappers that handle errors internally rather than propagating them from destructors. :::

### Choosing Between Mechanisms: Decision Flowchart

```
Is the error truly exceptional (should rarely happen)?
├── Yes → Use exceptions (throw / catch)
└── No → Is C++23 available?
    ├── Yes → Use std::expected<T, E>
    └── No → Are there multiple error types?
        ├── Yes → Use std::variant<T, E1, E2, ...>
        └── No → Use std::optional<T> (or error codes for C FFI)
```

### Summary

| Mechanism       | C++ Version | Error Richness    | Overhead (no error) | Composability              |
| --------------- | ----------- | ----------------- | ------------------: | -------------------------- |
| Exceptions      | C++98       | Any type          |                  ~0 | Implicit (unwinding)       |
| Error codes     | C           | Enum/int          |                   0 | Manual propagation         |
| `std::optional` | C++17       | `nullopt` only    |                   0 | Check required             |
| `std::variant`  | C++17       | User-defined      |                   0 | `visit` / `get_if`         |
| `std::expected` | C++23       | Single error type |                   0 | Monadic (`and_then`, etc.) |

**Relevance:** Modern C++ increasingly favors **explicit, algebraic error handling**
(`std::expected`) for expected failure modes and reserves **exceptions** for truly exceptional
conditions. The combination of `noexcept`, RAII, and `std::expected` provides a robust, low-overhead
error handling strategy.

## See Also

- [Algebraic Error Handling — std::optional and std::variant](4_optional_variant.md)
- [The noexcept Specifier](3_noexcept.md)
- [Exception Safety Guarantees](2_exception_safety.md)

:::

:::
