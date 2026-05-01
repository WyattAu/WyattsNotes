---
title: Constant Expressions
description:
  "C++: Constant Expressions — The Keyword Taxonomy; `const`: Immutability, Not Compile-Time; `const` at Namespace Scope. and examination."
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: constant-expressions
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Compile-time computation is one of C++'s most distinctive capabilities. Unlike C macros or Java
`static final`, C++ constant expressions are type-checked, support full language features (loops,
conditionals, recursion), and can operate on user-defined types. The evolution from C++11
`constexpr` through C++20 `consteval` and `constinit` gives programmers fine-grained control over
exactly when an expression is evaluated. For systems programmers, this means moving error detection
from runtime to compile time -- a zero-cost correctness guarantee.

## The Keyword Taxonomy

| Keyword     | Storage             | Initialization           | Evaluation               | Can be modified? |
| :---------- | :------------------ | :----------------------- | :----------------------- | :--------------- |
| `const`     | Any                 | Runtime or compile-time  | Either                   | No (after init)  |
| `constexpr` | Any                 | **Must be** compile-time | **Must be** compile-time | No (after init)  |
| `consteval` | N/A (function only) | N/A                      | **Must be** compile-time | N/A              |
| `constinit` | Static/Thread       | **Must be** compile-time | Runtime value OK         | Yes (after init) |

## `const`: Immutability, Not Compile-Time

`const` promises that a variable will not be modified after initialization. It does **not**
guarantee compile-time evaluation.

```cpp
void example(int n) {
    const int size = n;          // const but runtime value
    const int buffer_size = 256; // compiler may evaluate at compile time, but not required
    int arr[buffer_size];        // ERROR: buffer_size is not a constant expression
}
```

### `const` at Namespace Scope

A `const` variable at namespace scope has internal linkage by default (unlike `constexpr`):

```cpp
const int kMaxSize = 1024;    // internal linkage
constexpr int kMaxRetries = 3; // internal linkage

// To share across translation units:
extern const int kShared;
// defined in one TU: const int kShared = 42;
```

### `const` vs `constexpr` for Integral Constants

```cpp
const int a = 42;          // usable as constant expression (compiler treats it as one)
constexpr int b = 42;      // guaranteed constant expression

template<int N>
struct Array { int data[N]; };

Array<a> x;  // OK: a is a constant expression (initialized with constant)
Array<b> y;  // OK: b is a constant expression

void f(int n) {
    const int c = n;   // NOT a constant expression (value not known at compile time)
    Array<c> z;        // ERROR: c is not a constant expression
}
```

The rule: a `const` variable is a constant expression **only if** it is initialized with a constant
expression. A `constexpr` variable is **always** a constant expression [N4950 §7.7].

## `constexpr`: Guaranteed Compile-Time Evaluation

`constexpr` (C++11) declares that a variable **must** be initialized with a constant expression, or
that a function **may** be evaluated at compile time [N4950 §7.7].

### `constexpr` Variables

```cpp
constexpr int x = 42;                    // compile-time constant
constexpr double pi = 3.14159265358979;   // compile-time constant
constexpr int y = x + 1;                  // compile-time: 43

void bad() {
    int n = 10;
    constexpr int z = n;  // ERROR: n is not a constant expression
}
```

### `constexpr` Functions: Evolution

#### C++11: Single-Statement `constexpr` Functions

```cpp
constexpr int factorial(int n) {
    return n <= 1 ? 1 : n * factorial(n - 1);
}

constexpr int f5 = factorial(5);  // OK: 120, computed at compile time
int n = 5;
int f_runtime = factorial(n);     // OK: evaluated at runtime (C++11 allows this)
```

C++11 `constexpr` functions could only contain a single `return` statement (with conditional
expressions and recursion).

#### C++14: Relaxed `constexpr` Functions

C++14 removed the single-return restriction. `constexpr` functions can now contain:

- Local variables
- Loops (`for`, `while`, `do-while`)
- Multiple statements
- Mutations of local variables

```cpp
constexpr int fibonacci(int n) {
    if (n <= 1) return n;
    int a = 0, b = 1;
    for (int i = 2; i <= n; ++i) {
        int tmp = a + b;
        a = b;
        b = tmp;
    }
    return b;
}

constexpr int fib10 = fibonacci(10);  // 55, computed at compile time
```

#### C++20: Immediate Functions (`consteval`)

`consteval` (also called "immediate functions") **must** be evaluated at compile time. They cannot
be called at runtime [N4950 §7.7.5].

```cpp
consteval int square(int n) {
    return n * n;
}

constexpr int a = square(5);     // OK: compile-time evaluation
int b = square(5);               // OK: compile-time evaluation (result stored in runtime variable)
int n;
int c = square(n);               // ERROR: n is not a constant expression
```

### `constexpr` Class Types

A class can be used in constant expressions if it has a `constexpr` constructor:

```cpp
struct Point {
    constexpr Point(double x, double y) : x(x), y(y) {}
    constexpr double distance_to(const Point& other) const {
        double dx = x - other.x;
        double dy = y - other.y;
        return dx * dx + dy * dy;
    }
    double x, y;
};

constexpr Point origin{0.0, 0.0};
constexpr Point p{3.0, 4.0};
constexpr double dist_sq = p.distance_to(origin);  // 25.0, compile-time
```

### `constexpr` Containers and `std::string` (C++20)

C++20 made `std::vector` and `std::string` usable in constant expressions (transiently -- they
cannot outlive the constant expression evaluation):

```cpp
#include <string>
#include <vector>

constexpr bool contains(const std::vector<int>& v, int val) {
    for (int x : v) {
        if (x == val) return true;
    }
    return false;
}

constexpr bool result = contains({1, 2, 3, 4, 5}, 3);  // true

constexpr std::string make_greeting(std::string_view name) {
    std::string result = "Hello, ";
    result += name;
    result += "!";
    return result;
}

// Note: the returned string's storage is transient in constexpr context
// Use std::array for compile-time persistent data
```

### Compile-Time String Parsing

```cpp
constexpr int count_chars(std::string_view s, char c) {
    int count = 0;
    for (char ch : s) {
        if (ch == c) ++count;
    }
    return count;
}

constexpr int n = count_chars("hello world", 'l');  // 3

static_assert(n == 3);
```

### Compile-Time Lookup Table

```cpp
template<int N>
constexpr auto make_sqrt_table() {
    std::array<double, N> table{};
    for (int i = 0; i < N; ++i) {
        table[i] = static_cast<double>(i);
        // Newton's method for sqrt
        double x = table[i] / 2.0;
        for (int j = 0; j < 20; ++j) {
            x = (x + table[i] / x) / 2.0;
        }
        table[i] = x;
    }
    return table;
}

constexpr auto sqrt_table = make_sqrt_table<100>();
```

## `constinit`: Compile-Time Initialization, Runtime Value

`constinit` (C++20) guarantees that a variable with static or thread storage duration is initialized
at compile time (zero-initialization or constant initialization), but allows the variable to be
modified at runtime [N4950 §6.6.3.2].

### The Problem `constinit` Solves

```cpp
int random_value() { return 4; }  // pretend this is non-deterministic

constinit int global = 42;        // OK: 42 is a constant expression
// constinit int global2 = random_value();  // ERROR: not a constant expression

int main() {
    global = 100;  // OK: constinit allows modification after initialization
}
```

### `constinit` vs `constexpr` for Static Variables

```cpp
constexpr int a = 42;     // compile-time init, cannot be modified
constinit int b = 42;     // compile-time init, CAN be modified

a = 100;  // ERROR: constexpr variables are const
b = 100;  // OK
```

### `constinit` and the Static Initialization Order Problem

`constinit` guarantees zero-cost startup because the variable undergoes constant initialization --
no dynamic initialization phase, no static initialization order fiasco:

```cpp
struct Config {
    int timeout = 30;
    int retries = 3;
};

constinit Config g_config{};  // constant init: in the binary's .data segment
                               // No dynamic initialization, no order dependency
```

```cpp
struct Logger {
    // constinit requires constexpr constructor
    constexpr Logger() = default;
    void set_level(int l) { level = l; }
    int level = 0;
};

constinit Logger g_logger{};  // constant init, zero overhead
// Later:
g_logger.set_level(3);        // runtime modification is fine
```

### When to Use `constinit` vs `constexpr`

| Scenario                                                      | Use                                   |
| :------------------------------------------------------------ | :------------------------------------ |
| True constant (never changes)                                 | `constexpr`                           |
| Global state initialized at compile time, modified at runtime | `constinit`                           |
| Avoid static initialization order fiasco                      | `constinit` + `constexpr` constructor |
| Performance-critical startup (avoid dynamic init)             | `constinit`                           |

## `if constexpr`

`if constexpr` (C++17) enables compile-time branching. The discarded branch is not instantiated,
which prevents type errors and enables template metaprogramming without SFINAE:

```cpp
#include <type_traits>
#include <string>

template<typename T>
std::string to_string(const T& val) {
    if constexpr (std::is_integral_v<T>) {
        return std::to_string(val);
    } else if constexpr (std::is_floating_point_v<T>) {
        return std::to_string(val);
    } else if constexpr (std::is_same_v<T, std::string>) {
        return val;
    } else {
        static_assert(sizeof(T) == 0, "Unsupported type for to_string");
        return {};
    }
}

std::string s1 = to_string(42);          // uses integral branch
std::string s2 = to_string(3.14);        // uses floating-point branch
std::string s3 = to_string(std::string("hello"));  // uses string branch
// to_string(std::vector<int>{})  // triggers static_assert
```

### `if constexpr` with Fold Expressions

```cpp
template<typename... Args>
void print_all(const Args&... args) {
    if constexpr (sizeof...(args) > 0) {
        ((std::cout << args << " "), ...);
    }
}
```

## `static_assert`: Compile-Time Assertions

`static_assert` verifies a condition at compile time. C++17 added an optional message parameter:

```cpp
static_assert(sizeof(void*) >= 4, "This platform must be at least 32-bit");
static_assert(std::is_trivially_copyable_v<Point>, "Point must be trivially copyable");
```

### `static_assert` with Constant Expressions

```cpp
constexpr int buffer_size = 1024;
static_assert(buffer_size > 0);
static_assert(buffer_size % 16 == 0, "Buffer size must be a multiple of 16");

constexpr int table_size = 256;
static_assert(table_size == 256, "Lookup table must have exactly 256 entries");
```

### C++26: `static_assert` Without Message is Standard

```cpp
static_assert(sizeof(int) == 4);  // C++26: message parameter is optional (already optional in C++17)
```

## Immediately-Invoked Constexpr Functions

A common pattern for computing compile-time constants:

```cpp
constexpr int compute_block_size() {
    return 64 * 1024;  // complex logic here
}

constexpr int BLOCK_SIZE = compute_block_size();

// Or inline:
constexpr int ALIGNMENT = [] {
    int a = 16;
    // complex logic...
    return a;
}();
```

The lambda syntax (C++17 constexpr lambdas) enables inline computation without polluting the
namespace with helper functions.

### `constexpr` Lambda (C++17)

```cpp
constexpr auto add = [](int a, int b) { return a + b; };
static_assert(add(3, 4) == 7);

constexpr auto is_even = [](int n) { return n % 2 == 0; };
static_assert(is_even(4));
static_assert(!is_even(3));
```

## Constexpr Limits and Gotchas

### What Cannot Be `constexpr`

- `reinterpret_cast` (except in C++20 with some restrictions)
- `new` and `delete` (C++20 relaxed for transient allocation)
- `asm` statements
- `goto` statements
- Uninitialized local variables
- Calling non-`constexpr` functions

### C++20: Transient Allocation in `constexpr`

```cpp
constexpr int sum_dynamic() {
    int* p = new int(42);    // transient allocation allowed in constexpr
    int val = *p;
    delete p;
    return val;
}

constexpr int s = sum_dynamic();  // OK: 42
```

The memory must not outlive the constant expression evaluation.

### Undefined Behavior in `constexpr` Context

```cpp
constexpr int bad() {
    int x;
    return x;  // ERROR: reading uninitialized variable in constexpr context
}

constexpr int overflow() {
    int x = INT_MAX;
    return x + 1;  // ERROR: signed integer overflow is UB, detected at compile time
}
```

The compiler must detect UB in `constexpr` evaluation and emit a diagnostic.

## Complete Example: Compile-Time CRC32

```cpp
#include <array>
#include <cstdint>

template<uint32_t Poly>
constexpr auto make_crc_table() {
    std::array<uint32_t, 256> table{};
    for (uint32_t i = 0; i < 256; ++i) {
        uint32_t crc = i;
        for (int j = 0; j < 8; ++j) {
            if (crc & 1)
                crc = (crc >> 1) ^ Poly;
            else
                crc >>= 1;
        }
        table[i] = crc;
    }
    return table;
}

constexpr auto crc_table = make_crc_table<0xEDB88320u>();

constexpr uint32_t crc32(const char* data, size_t len) {
    uint32_t crc = ~uint32_t{0};
    for (size_t i = 0; i < len; ++i) {
        crc = crc_table[(crc ^ static_cast<uint8_t>(data[i])) & 0xFF] ^ (crc >> 8);
    }
    return ~crc;
}

static_assert(crc32("hello", 5) == 0x3610A686u);
```

## Common Pitfalls

### 1. `constexpr` Function Called with Runtime Arguments

A `constexpr` function evaluated at runtime does not have compile-time guarantees. UB checks only
apply when the function is evaluated in a constant expression context:

```cpp
constexpr int divide(int a, int b) { return a / b; }

constexpr int ok = divide(10, 2);     // compile-time, no UB
int a = 10, b = 0;
int boom = divide(a, b);             // runtime, UB (division by zero)
```

### 2. `constinit` with Non-constexpr Constructor

```cpp
struct Widget {
    Widget() {}  // NOT constexpr
};
constinit Widget w;  // ERROR: Widget needs constexpr constructor for constinit
```

### 3. `consteval` Cannot Be Used as a Non-Type Template Argument Source Indirectly

```cpp
consteval int f(int n) { return n * 2; }

template<int N> struct S {};
S<f(5)> s;  // OK: f(5) is evaluated at compile time

int n;
// S<f(n)> s2;  // ERROR: n is not a constant expression
```

### 4. Forgetting `constexpr` on a Function Used in Constant Expressions

```cpp
int factorial(int n) { return n <= 1 ? 1 : n * factorial(n - 1); }
constexpr int val = factorial(5);  // ERROR: factorial is not constexpr
```

### 5. `constexpr` Static Member Definition

```cpp
struct S {
    static constexpr int value = 42;  // declaration, OK in header
};

// Needed in ONE translation unit (before C++17 inline variables):
// constexpr int S::value;

// C++17 solution: use inline
struct S2 {
    static inline constexpr int value = 42;  // inline, no separate definition needed
};
```

## See Also

- **Module 7 (Data Layout)**: Fundamental types, struct layout, and alignment in constant
  expressions
- **Module 8 (Pointers, References, Views)**: Pointer and reference behavior in constexpr context
- **Module 9.2 (Uniform Initialization)**: Brace initialization in constexpr constructors
- **Module 9.3 (Aggregate Initialization)**: `constexpr` aggregates and compile-time struct
  construction
- **Module 10 (Ownership and RAII)**: RAII and constexpr destructors
- **Module 13 (Error Handling)**: `static_assert` as a compile-time error mechanism
