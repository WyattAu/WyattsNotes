---
title: The noexcept Specifier
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: the-noexcept-specifier
---

# The `noexcept` Specifier

Since C++17, `noexcept` is part of the **function type system** [N4950 §14.5.1]. This has
significant implications for overload resolution, optimization, and exception safety guarantees.

## 3.1 `noexcept` as Part of the Function Type

Since C++17, `noexcept` is part of the **function type system** [N4950 §14.5.1]. Two function
pointers that differ only in `noexcept` are different types:

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

A `noexcept` function pointer can be initialized with a non-`noexcept` function pointer (implicit
conversion), but not vice versa:

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

## 3.2 `std::move_if_noexcept`

The standard library uses `std::move_if_noexcept` to provide the strong exception safety guarantee
during reallocation [N4950 §20.2.4]. If an element's move constructor might throw, the library falls
back to copying:

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

## 3.3 `noexcept` and Optimization

Marking a function `noexcept` gives the compiler permission to:

1. **Omit unwind tables** for that function on some platforms.
2. **Assume non-throwing** when inlining — enabling optimizations that would otherwise be invalid if
   a callee could throw.
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

## 3.4 `noexcept(false)` — Explicit Opt-Out

The default for destructors is `noexcept(true)` since C++11 [N4950 §14.5.3]. Use `noexcept(false)`
only when absolutely necessary (and the "destructor must never throw" rule still applies — see
below).

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

:::warning If a `noexcept(false)` destructor actually throws during stack unwinding,
`std::terminate()` is called [N4950 §14.7]. Marking a destructor `noexcept(false)` does not make it
safe to throw from a destructor during unwinding. :::

## 3.5 Conditional `noexcept`

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

## See Also

- [Exception Safety Guarantees](2_exception_safety.md)
- [The Itanium Exception ABI](1_exception_abi.md)
