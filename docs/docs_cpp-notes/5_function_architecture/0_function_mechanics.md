---
title: Function Mechanics and Interop
date: 2026-03-31T00:00:00.000Z
tags:
  - cpp
categories:
  - cpp
slug: function-mechanics-and-interop
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Function Mechanics and Interop

C++ function resolution is not a simple name match. The compiler performs a multi-phase search through namespaces, ranks candidate functions against a strict hierarchy of conversion ranks, and selects a single best viable function — or rejects the call as ambiguous. Beyond resolution, functions interact with the hardware through calling conventions that dictate register usage, stack layout, and inter-language compatibility.

This module covers the mechanics end to end: overload resolution, ABI-level calling conventions, lambda internals, type-erased callable wrappers, and C interoperability.

## 1. Overload Resolution

### 1.1 Name Lookup [N4950 §6.5.4]

Name lookup determines which set of declarations are considered as candidates for a function call. There are three forms of lookup:

1. **Unqualified lookup**: Searches enclosing scopes from innermost to outermost, stopping at the first scope that contains a declaration of the name.
2. **Qualified lookup**: When a name is prefixed with a namespace or class scope (e.g., `std::sort`), lookup searches only that scope and its inline namespaces.
3. **Argument-dependent lookup (ADL)**: Also called Koenig lookup. For unqualified function calls, the namespaces and classes associated with each argument type are additionally searched.

```cpp
#include <iostream>
#include <string>

namespace lib {
    struct S {};
    void print(const S&) { std::cout << "lib::S\n"; }
}

void print(int) { std::cout << "int\n"; }

int main() {
    lib::S s;
    print(s);  // ADL finds lib::print — even though lib:: is not in scope
    print(42); // Unqualified lookup finds ::print(int)
}
```

The ADL rule is the reason `std::cout << "hello"` works: the left operand has type `std::ostream` (in namespace `std`), and the right operand has type `const char[6]` (built-in type, no ADL contribution). ADL adds the namespace `std` to the search set, where `operator<<` is found.

:::info Relevance
ADL is essential for operator overloading and generic code. Without ADL, every call to `operator<<`, `operator==`, or a custom swap function would require explicit namespace qualification, breaking generic programming.
:::

### 1.2 ADL in Detail [N4950 §6.5.4.2]

For each argument in a function call, the following namespaces and classes are added to the lookup set:

- The type of the argument (ignoring top-level cv-qualifiers and references).
- The template type arguments (if the argument type is a class template specialization).
- The type of each base class.
- The type of each member of the class.

The fundamental types (`int`, `double`, `bool`, etc.) and types whose associated namespaces are the global namespace contribute no additional search scope.

```cpp
#include <vector>
#include <iterator>

namespace A {
    struct X {};
    void swap(X&, X&) { /* A's swap */ }
}

namespace B {
    struct Y : A::X {};
}

int main() {
    B::Y y1, y2;
    swap(y1, y2);
    // ADL finds A::swap because:
    //   Y's base class is A::X, which is associated with namespace A
}
```

### 1.3 Overload Resolution Phases [N4950 §12.4.3]

Once name lookup has produced a set of candidate functions, the compiler performs overload resolution in two phases:

**Phase 1: Build the set of viable functions.** A candidate is viable if:

- It has the right number of parameters (or is variadic).
- Each argument can be implicitly converted to the corresponding parameter type.
- If the function has a trailing parameter pack, it can accept any remaining arguments.

**Phase 2: Select the best viable function.** For each argument position, the compiler ranks the implicit conversion sequences required. A function $f_1$ is a better match than $f_2$ if:

- For at least one argument, the conversion for $f_1$ is better than for $f_2$.
- For no argument is the conversion for $f_1$ worse than for $f_2$.

### 1.4 Conversion Ranking [N4950 §12.4.3.2.2]

The conversion ranking hierarchy (from best to worst) is:

| Rank                        | Description                                               | Example                                |
| :-------------------------- | :-------------------------------------------------------- | :------------------------------------- |
| **Exact Match**             | No conversion, or trivial conversion (lval→rval, cv-qual) | `int` → `int`, `int` → `const int&`    |
| **Promotion**               | Integral promotion or floating-point promotion            | `short` → `int`, `float` → `double`    |
| **Standard Conversion**     | Other implicit standard conversions                       | `int` → `double`, `Derived*` → `Base*` |
| **User-Defined Conversion** | One user-defined conversion + standard conv               | `class A` → `class B` (via `B(A)`)     |
| **Ellipsis**                | `...` catch-all                                           | any type                               |

```cpp
#include <iostream>

void f(int)      { std::cout << "int\n"; }
void f(double)   { std::cout << "double\n"; }
void f(long)     { std::cout << "long\n"; }

int main() {
    f(42);       // Exact match → f(int)
    f(3.14);     // Exact match → f(double)
    f(42L);      // Exact match → f(long)  (long is exact match, not promoted)
    f('c');      // Promotion → f(int)     (char promotes to int, not to long or double)
    f(42.f);     // Promotion → f(double)  (float promotes to double)
}
```

### 1.5 Ambiguity and Tie-Breaking

When two viable functions are equally good for every argument, the call is **ambiguous** and the program is ill-formed:

```cpp
#include <iostream>

void g(int, double) { std::cout << "int, double\n"; }
void g(double, int) { std::cout << "double, int\n"; }

int main() {
    g(42, 3.14);   // OK: g(int, double) is better
    g(3.14, 42);   // OK: g(double, int) is better
    // g(42, 42);   // ERROR: ambiguous — g(int, int) matches both equally
    //   g(int, double):  int→int (exact), int→double (promotion)
    //   g(double, int):  int→double (promotion), int→int (exact)
    //   Neither is strictly better → ambiguity
}
```

**Partial ordering** of function templates resolves ambiguities between template functions. When both an ordinary function and a function template are viable, the ordinary function is preferred unless the template provides a more specialized match [N4950 §13.7.6.6.5].

### 1.6 Complete ADL Example: `operator<<`

The canonical ADL scenario is the stream insertion operator:

```cpp
#include <iostream>
#include <string>

namespace physics {
    struct Vec3 {
        double x, y, z;
    };

    std::ostream& operator<<(std::ostream& os, const Vec3& v) {
        return os << '(' << v.x << ", " << v.y << ", " << v.z << ')';
    }
}

int main() {
    physics::Vec3 v{1.0, 2.0, 3.0};
    std::cout << v << '\n';
    // Unqualified lookup for << finds built-in operators and std::operator<<
    // ADL adds namespace physics (associated with Vec3) to the search set
    // physics::operator<<(std::ostream&, const Vec3&) is found and selected
}
```

:::warning
ADL can pull in unexpected overloads from associated namespaces. The "hidden friend" idiom — defining the operator as a friend inside the class — restricts the operator to being found only via ADL, preventing unintended overloads:

```cpp
struct Vec3 {
    double x, y, z;
    friend std::ostream& operator<<(std::ostream& os, const Vec3& v) {
        return os << '(' << v.x << ", " << v.y << ", " << v.z << ')';
    }
};
```

:::

---

## 2. Calling Conventions and Stack Management

The C++ Standard does not prescribe a calling convention [N4950 §8.4.4]. On x86-64 Linux and macOS, the **System V AMD64 ABI** governs how functions pass arguments, return values, and manage the stack. On x86-64 Windows, the **Microsoft x64 ABI** is used instead.

### 2.1 System V AMD64 ABI: Argument Passing

Arguments are classified into four categories: INTEGER, SSE, MEMORY, and X87. The classification determines which registers or stack slots receive each argument:

| Category | Registers / Location                 |
| :------- | :----------------------------------- |
| INTEGER  | RDI, RSI, RDX, RCX, R8, R9 (6 slots) |
| SSE      | XMM0 – XMM7 (8 slots)                |
| MEMORY   | Pushed to the stack (right to left)  |

The first 6 INTEGER-class arguments go into RDI, RSI, RDX, RCX, R8, R9 (in order). The first 8 SSE-class (floating-point) arguments go into XMM0 through XMM7. If both integer and floating-point registers are exhausted, remaining arguments are pushed onto the stack.

```cpp
// Argument passing demonstration
#include <cstdint>

// long add(long a, long b, long c, long d, long e, long f, long g, long h);
//
// Register assignment:
//   a → RDI   b → RSI   c → RDX   d → RCX   e → R8   f → R9
//   g → [RSP+8]   h → [RSP+16]
//
// double mul(double a, double b, double c);
//
// Register assignment:
//   a → XMM0   b → XMM1   c → XMM2
//
// void mixed(int a, double b, int c, double d);
//
// Register assignment:
//   a → EDI   b → XMM0   c → ESI   d → XMM1

extern "C" int64_t add_seven(int64_t a, int64_t b, int64_t c, int64_t d,
                              int64_t e, int64_t f, int64_t g) {
    return a + b + c + d + e + f + g;
}
```

### 2.2 Return Values

| Return Type                                          | Location                                                   |
| :--------------------------------------------------- | :--------------------------------------------------------- |
| `bool`, `char`, `int`, `long`, `long long`, pointers | RAX                                                        |
| `float`, `double`                                    | XMM0                                                       |
| Small structs (≤ 16 bytes, fitting 2 registers)      | RAX + RDX                                                  |
| Large structs (> 16 bytes)                           | Hidden first argument (pointer to caller-allocated memory) |

For large return types, the caller allocates space on the stack and passes a hidden pointer as the first argument. The callee writes the return value to this address and also returns the pointer in RAX.

### 2.3 Stack Frame Layout

At function entry, the x86-64 stack frame typically looks like:

```
High Addresses
┌──────────────────────┐
│  Caller's frame      │
├──────────────────────┤
│  Return address (8B) │  ← pushed by CALL instruction
├──────────────────────┤
│  Saved RBP (8B)      │  ← pushed by prologue (push rbp; mov rbp, rsp)
├──────────────────────┤
│  Local variables     │
│  ...                 │
│  [RSP aligned to 16] │  ← RSP after prologue
├──────────────────────┤
│  Stack arguments     │  ← arguments 7+ (if any)
└──────────────────────┘
Low Addresses
```

The System V ABI requires that `RSP` be 16-byte aligned before a `CALL` instruction. After the call pushes the 8-byte return address, `RSP` is 8 mod 16. The prologue typically subtracts an additional 8 bytes (or aligns the allocation) to restore 16-byte alignment.

```cpp
#include <cstdint>

// Examining the generated assembly (compile with -O1 -fno-omit-frame-pointer)
// $ g++ -S -O1 -fno-omit-frame-pointer -masm=intel example.cpp
//
//   int64_t local_sum(int64_t a, int64_t b) {
//       int64_t x = 10;
//       int64_t y = 20;
//       return a + b + x + y;
//   }
//
// Generated assembly (System V ABI, Intel syntax):
//
//   local_sum:
//       push    rbp
//       mov     rbp, rsp
//       mov     QWORD PTR [rbp-8], 10    ; x = 10
//       mov     QWORD PTR [rbp-16], 20   ; y = 20
//       mov     rax, QWORD PTR [rbp-8]
//       add     rax, QWORD PTR [rbp-16]
//       add     rax, rdi                  ; + a (passed in RDI)
//       add     rax, rsi                  ; + b (passed in RSI)
//       pop     rbp
//       ret
//
// Argument a arrives in RDI, b in RSI.
// x is stored at [rbp-8], y at [rbp-16].
// Return value is placed in RAX.
```

### 2.4 The Red Zone

The System V ABI reserves **128 bytes below RSP** (the "red zone") for use by **leaf functions** — functions that do not call any other functions. A leaf function may use this space for local variables without modifying RSP, avoiding the overhead of stack pointer manipulation.

```
┌──────────────────────┐  ← RSP
│  Red Zone (128B)     │  ← [RSP - 128, RSP) : available to leaf functions
│  (untouchable by     │
│   interrupt handlers)│
├──────────────────────┤  ← RSP - 128
│  ...                 │
```

:::warning
Non-leaf functions (functions that call other functions) must NOT use the red zone. Signal handlers and interrupt contexts may clobber the red zone. Compiler flags like `-mno-red-zone` (used in OS kernels and JIT compilers) disable this optimization.
:::

```cpp
// Leaf function: no CALL instruction, may use the red zone
// $ g++ -O2 -S -o - redzone.cpp | grep -A5 'leaf_fn:'
extern "C" int64_t leaf_fn(int64_t a, int64_t b) {
    return a + b + 1;
}
// At -O2, the compiler may emit no stack frame at all:
//   lea rax, [rdi + rsi + 1]
//   ret

// Non-leaf function: calls another function, must NOT use the red zone
extern "C" int64_t non_leaf_fn(int64_t a, int64_t b) {
    volatile int64_t sink = a + b;  // volatile prevents optimization
    return sink + 1;
    // The call to write the volatile forces a stack frame adjustment
}
```

---

## 3. Lambda Expressions: Capture Layouts and Closure Types

### 3.1 Syntax and Structure [N4950 §8.1.5]

A lambda expression produces a **closure object** — an unnamed object of an unnamed class type (the closure type). The closure type contains:

- A public inline `operator()` corresponding to the lambda's parameters and body.
- Data members corresponding to each captured entity.
- A constructor (since C++14, lambdas are default-constructible if no captures are used).
- A closure type is not a struct/class in the traditional sense but behaves as one.

```cpp
#include <iostream>
#include <utility>

int main() {
    int x = 10;
    int y = 20;

    auto sum = [x, y]() { return x + y; };

    // The closure type is roughly equivalent to:
    // class __lambda_1 {
    //     int x;
    //     int y;
    // public:
    //     __lambda_1(int x_, int y_) : x(x_), y(y_) {}
    //     int operator()() const { return x + y; }
    // };

    std::cout << sum() << '\n';  // 30
}
```

### 3.2 Capture Modes

| Capture Syntax | Meaning                                       |
| :------------- | :-------------------------------------------- |
| `[]`           | No captures                                   |
| `[=]`          | Capture all used variables by value (copy)    |
| `[&]`          | Capture all used variables by reference       |
| `[x]`          | Capture `x` by value                          |
| `[&x]`         | Capture `x` by reference                      |
| `[x, &y]`      | Capture `x` by value, `y` by reference        |
| `[=, &x]`      | Capture all by value, except `x` by reference |
| `[&, x]`       | Capture all by reference, except `x` by value |

```cpp
#include <iostream>
#include <string>

int main() {
    int a = 1;
    int b = 2;
    int c = 3;

    // Mixed capture: a by value, b by reference, c by value
    auto f = [a, &b, c]() {
        // a = 10;   // ERROR: a is const (captured by value in non-mutable lambda)
        b = 20;     // OK: b is captured by reference
        return a + b + c;
    };

    std::cout << f() << '\n';  // 1 + 20 + 3 = 24
    std::cout << b << '\n';    // 20 (b was modified through the reference)

    // Init-capture (C++14): capture with an arbitrary expression
    std::string prefix = "Hello, ";
    auto greet = [prefix = std::move(prefix)](const std::string& name) {
        return prefix + name;
    };
    std::cout << greet("World") << '\n';  // Hello, World
}
```

### 3.3 Mutable Lambdas

By default, a lambda's `operator()` is `const`. The `mutable` keyword removes the `const` qualifier, allowing the lambda to modify its captured-by-value members:

```cpp
#include <iostream>

int main() {
    int counter = 0;

    auto inc = [counter]() mutable {
        return ++counter;
    };

    std::cout << inc() << '\n';  // 1
    std::cout << inc() << '\n';  // 2
    std::cout << inc() << '\n';  // 3
    std::cout << counter << '\n'; // 0 — the original is unchanged

    // Without mutable, this would not compile:
    // auto inc_const = [counter]() { return ++counter; };
    // ERROR: increment of member 'counter' in read-only object
}
```

### 3.4 Generic Lambdas [N4950 §8.1.5.5]

C++14 introduced generic lambdas with `auto` parameters. Each `auto` parameter generates a separate template parameter of the closure type's `operator()`.

```cpp
#include <iostream>
#include <typeinfo>

int main() {
    auto print_type = [](const auto& val) {
        std::cout << typeid(val).name() << ": " << val << '\n';
    };

    print_type(42);       // int: 42
    print_type(3.14);     // double: 3.14
    print_type("hello");  // char const*: hello

    // C++20: explicit template parameter list
    auto add = []<typename T>(T a, T b) -> T {
        return a + b;
    };

    std::cout << add(1, 2) << '\n';       // 3
    std::cout << add(1.5, 2.5) << '\n';   // 4.0

    // C++20: template parameter with constraints
    auto add_numbers = []<typename T>(T a, T b) requires std::integral<T> {
        return a + b;
    };
    // add_numbers(1.5, 2.5);  // ERROR: constraint not satisfied
}
```

:::info Relevance
Generic lambdas are the backbone of STL algorithms. `std::sort`, `std::transform`, `std::find_if` all accept callable objects, and generic lambdas provide the most ergonomic way to pass custom comparators and predicates.
:::

### 3.5 Stateful Lambdas and Lifetime Issues

A lambda that captures by reference holds references to local variables. If the lambda outlives those variables (e.g., by being returned or stored), the references become dangling — undefined behavior.

```cpp
#include <functional>
#include <iostream>
#include <string>

// DANGEROUS: returning a lambda that captures by reference
std::function<int(int)> make_multiplier_bad(int& factor) {
    return [&factor](int x) { return x * factor; };
    // factor is a reference to a local in the caller's scope
    // If the caller's local goes out of scope, this lambda holds a dangling reference
}

// SAFE: capturing by value
std::function<int(int)> make_multiplier_good(int factor) {
    return [factor](int x) { return x * factor; };
    // factor is copied into the closure object
}

int main() {
    auto good = make_multiplier_good(5);
    std::cout << good(10) << '\n';  // 50 — safe, factor is stored by value

    int f = 5;
    auto bad = make_multiplier_bad(f);
    std::cout << bad(10) << '\n';   // 50 — works here, but fragile
    // After f goes out of scope, calling bad() is undefined behavior
}
```

### 3.6 `std::function` vs Lambda: Type Erasure Overhead

A lambda has a **unique, unnameable type**. Two lambdas with identical bodies have different types. This means lambdas cannot be stored in a heterogeneous container or returned as a specific type without type erasure.

`std::function<R(Args...)>` performs type erasure: it wraps any callable with a compatible signature behind a uniform interface. The cost of this flexibility is:

- **Indirection**: each invocation goes through a virtual dispatch or function pointer.
- **Potential heap allocation**: large closures (exceeding the Small Buffer Optimization threshold) are allocated on the heap.
- **No inlining**: the call target is determined at runtime, preventing compiler optimization.

```cpp
#include <functional>
#include <iostream>
#include <chrono>

int main() {
    auto direct_lambda = [](int x) { return x * x; };

    // Direct call: known type, fully inlinable
    volatile int r1 = direct_lambda(5);

    // Through std::function: type erasure, cannot be inlined
    std::function<int(int)> erased = direct_lambda;
    volatile int r2 = erased(5);

    // Benchmark comparison (approximate):
    using namespace std::chrono;
    constexpr int N = 100'000'000;

    auto start = high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        volatile int r = direct_lambda(i);
    }
    auto end = high_resolution_clock::now();
    std::cout << "Direct: " << duration_cast<microseconds>(end - start).count() << " us\n";

    start = high_resolution_clock::now();
    for (int i = 0; i < N; ++i) {
        volatile int r = erased(i);
    }
    end = high_resolution_clock::now();
    std::cout << "std::function: " << duration_cast<microseconds>(end - start).count() << " us\n";
    // Expect: std::function is 2-10x slower due to indirect dispatch
}
```

---

## 4. Type Erasure: Function Pointers, std::function, std::move_only_function

### 4.1 Function Pointers

A function pointer is the most primitive type-erased callable. It stores the address of a free function or a `static` member function. It has zero overhead beyond the pointer indirection itself.

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

**Limitations**: Function pointers cannot capture state. They cannot point to non-static member functions (those require a `this` pointer), and they cannot point to lambdas that capture anything (the closure type is not convertible to a function pointer unless the lambda is stateless).

### 4.2 `std::function<R(Args...)>` [N4950 §22.10]

`std::function` is a polymorphic callable wrapper that can store, copy, and invoke any callable with a compatible signature.

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

### 4.3 Small Buffer Optimization (SBO)

`std::function` typically allocates a small internal buffer (implementation-defined, commonly 16–24 bytes on x86-64). If the stored callable fits within this buffer, no heap allocation occurs. This is the **Small Buffer Optimization**.

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

:::warning
The SBO threshold varies between standard library implementations. libstdc++ (GCC) uses 16 bytes. libc++ (Clang) uses 24 bytes (on 64-bit). If avoiding heap allocation is critical, prefer passing lambdas as template parameters or using auto.
:::

### 4.4 `std::move_only_function` (C++23) [N4950 §22.10.17]

`std::function` requires its stored callable to be copyable. This is a problem for callables that own move-only resources (e.g., `std::unique_ptr`, file handles). C++23 introduces `std::move_only_function<R(Args...)>`, which is a move-only callable wrapper.

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

:::info Relevance
`std::move_only_function` is critical for callback-based APIs where the callback owns exclusive resources (file handles, network connections, GPU buffers). It enables zero-overhead move semantics where `std::function` would force a costly shared_ptr wrapping.
:::

### 4.5 Overhead Comparison

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

---

## 5. C-Interop and FFI

### 5.1 `extern "C"` Linkage [N4950 §9.9]

C++ uses **name mangling** to encode type information into function symbols, enabling overloading. C does not mangle names — each function has a single symbol matching its source name. The `extern "C"` linkage specification disables name mangling, making a C++ function callable from C (and vice versa).

```cpp
// mathlib.cpp
extern "C" {

// These functions are exported with unmangled C linkage:
// Symbol names: "add" and "multiply" (no type encoding)
int add(int a, int b) {
    return a + b;
}

double multiply(double a, double b) {
    return a * b;
}

}  // extern "C"

// Without extern "C", these would have mangled names:
//   _Z3addii      (add(int, int))
//   _Z8multiplydd (multiply(double, double))
int subtract(int a, int b) {
    return a - b;
}
```

### 5.2 Calling C from C++

The standard C library headers are wrapped with `extern "C"` by the C++ standard library headers. When you `#include <cstring>`, the declarations are automatically given C linkage. For your own C libraries, use `extern "C"`:

```cpp
// my_c_api.h — the C header
#ifndef MY_C_API_H
#define MY_C_API_H

#ifdef __cplusplus
extern "C" {
#endif

typedef struct {
    double x;
    double y;
} Point;

Point point_create(double x, double y);
double point_distance(const Point* a, const Point* b);
void point_translate(Point* p, double dx, double dy);

#ifdef __cplusplus
}  // extern "C"
#endif

#endif  // MY_C_API_H
```

```cpp
// my_c_api.c — the C implementation
#include "my_c_api.h"
#include <math.h>

Point point_create(double x, double y) {
    Point p = {x, y};
    return p;
}

double point_distance(const Point* a, const Point* b) {
    double dx = a->x - b->x;
    double dy = a->y - b->y;
    return sqrt(dx * dx + dy * dy);
}

void point_translate(Point* p, double dx, double dy) {
    p->x += dx;
    p->y += dy;
}
```

```cpp
// main.cpp — calling C from C++
#include "my_c_api.h"
#include <cstdio>
#include <memory>

int main() {
    auto deleter = [](Point* p) {
        std::printf("Destroying point\n");
        delete p;
    };
    std::unique_ptr<Point, decltype(deleter)> p(
        new Point(point_create(3.0, 4.0)),
        deleter
    );

    Point origin = point_create(0.0, 0.0);
    double dist = point_distance(p.get(), &origin);
    std::printf("Distance from origin: %f\n", dist);  // 5.000000

    point_translate(p.get(), 1.0, 1.0);
    dist = point_distance(p.get(), &origin);
    std::printf("After translate: %f\n", dist);  // ~4.242641
}
```

### 5.3 Calling C++ from C

Calling C++ functions from C requires a C-compatible entry point — a function with `extern "C"` linkage that wraps the C++ implementation:

```cpp
// widget.cpp — C++ implementation
#include <string>
#include <vector>

class Widget {
    std::string name_;
    std::vector<int> data_;
public:
    Widget(const char* name) : name_(name) {}
    void add_value(int v) { data_.push_back(v); }
    const char* get_name() const { return name_.c_str(); }
    int get_value(int index) const {
        return (index < static_cast<int>(data_.size())) ? data_[index] : -1;
    }
};

// C-compatible opaque handle
extern "C" {
    // Opaque pointer type — C code never sees the full definition
    typedef struct WidgetOpaque* WidgetHandle;

    WidgetHandle widget_create(const char* name) {
        return reinterpret_cast<WidgetHandle>(new Widget(name));
    }

    void widget_destroy(WidgetHandle h) {
        delete reinterpret_cast<Widget*>(h);
    }

    void widget_add_value(WidgetHandle h, int v) {
        reinterpret_cast<Widget*>(h)->add_value(v);
    }

    const char* widget_get_name(WidgetHandle h) {
        return reinterpret_cast<Widget*>(h)->get_name();
    }

    int widget_get_value(WidgetHandle h, int index) {
        return reinterpret_cast<Widget*>(h)->get_value(index);
    }
}
```

```c
/* widget_user.c — calling C++ from C */
#include <stdio.h>

/* Opaque type — only declared, never defined in C */
typedef struct WidgetOpaque* WidgetHandle;

WidgetHandle widget_create(const char* name);
void widget_destroy(WidgetHandle h);
void widget_add_value(WidgetHandle h, int v);
const char* widget_get_name(WidgetHandle h);
int widget_get_value(WidgetHandle h, int index);

int main(void) {
    WidgetHandle w = widget_create("sensor-1");
    widget_add_value(w, 10);
    widget_add_value(w, 20);
    widget_add_value(w, 30);

    printf("Widget: %s\n", widget_get_name(w));
    printf("Value[0] = %d\n", widget_get_value(w, 0));
    printf("Value[1] = %d\n", widget_get_value(w, 1));
    printf("Value[2] = %d\n", widget_get_value(w, 2));

    widget_destroy(w);
    return 0;
}
```

:::warning
The `reinterpret_cast` approach above works on platforms where C and C++ share the same ABI (pointer size, struct layout, calling convention). This is true for x86-64 Linux/macOS (both use the System V ABI). On platforms with divergent C/C++ ABIs, use `void*` handles and pass data through C-compatible types only.
:::

### 5.4 ABI Boundaries: Name Mangling and Layout

At a C/C++ boundary, several ABI properties must align:

| Property           | C ABI                                 | C++ ABI (Itanium, used on Linux/macOS) |
| :----------------- | :------------------------------------ | :------------------------------------- |
| Name mangling      | None — symbol = function name         | Encodes types, namespaces, templates   |
| Calling convention | System V AMD64 (x86-64)               | Same as C (on System V platforms)      |
| Struct layout      | Same as C++ POD                       | Same as C for POD; non-POD differs     |
| Exception handling | N/A (no exceptions)                   | Zero-cost with unwind tables           |
| `bool` size        | Typically 1 byte (implementation-def) | Same as C (implementation-defined)     |

```cpp
#include <cstddef>
#include <cstdio>

// Verifying struct layout compatibility across the C boundary
extern "C" {
struct CPoint {
    double x;
    double y;
    // No virtual functions, no non-POD members → layout is identical in C and C++
};

// This struct has a C-compatible layout
struct CPoint make_cpoint(double x, double y) {
    CPoint p{x, y};
    return p;
}

// C++-specific struct — NOT safe to pass across the boundary
struct ComplexPoint {
    double x, y;
    virtual double magnitude() const { /* ... */ return 0.0; }
    // vtable pointer changes the layout — first member is NOT at offset 0
    // sizeof(ComplexPoint) >= 24 (8-byte vptr + 2*8 bytes)
};
}

int main() {
    static_assert(sizeof(CPoint) == 16);
    static_assert(offsetof(CPoint, x) == 0);
    static_assert(offsetof(CPoint, y) == 8);

    std::printf("sizeof(CPoint) = %zu\n", sizeof(CPoint));       // 16
    std::printf("sizeof(ComplexPoint) = %zu\n", sizeof(ComplexPoint)); // 24 (on x86-64)
}
```

### 5.5 Data Marshalling: Ensuring Compatible Layouts

When passing data across a C/C++ boundary, ensure that:

1. **Structs are POD** (Plain Old Data) or `standard-layout`: no virtual functions, no base classes with virtual functions, no non-static data members of reference type, all non-static data members have the same access control.
2. **Fixed-width types are used** (`int32_t`, not `int`).
3. **No padding surprises**: use `static_assert` and `offsetof` to verify layout, or `#pragma pack` / `alignas` to control it.
4. **No C++ exceptions cross the boundary**: exceptions thrown in C++ code called from C unwind through C frames, which have no unwind information — undefined behavior. Catch all exceptions before returning to C code.

```cpp
#include <cstdint>
#include <cstddef>
#include <cstdio>

// Correct: POD struct with explicit layout guarantees
struct PacketHeader {
    static_assert(offsetof(PacketHeader, magic) == 0);
    int32_t magic;
    int32_t version;
    int64_t timestamp;
    int32_t payload_size;
    int32_t checksum;
};

static_assert(sizeof(PacketHeader) == 24);
static_assert(alignof(PacketHeader) == 8);

// Incorrect: this struct would break C interop
struct BadPacket {
    std::string payload;  // Non-POD: heap allocation, non-trivial destructor
    virtual void validate() {}  // vptr changes layout
};
```

### 5.6 Dynamic Library Loading with `dlfcn.h`

POSIX systems provide `dlopen`, `dlsym`, `dlclose`, and `dlerror` for loading shared libraries at runtime. This enables plugin architectures and runtime code loading.

```cpp
// plugin.cpp — compiled into libplugin.so
// $ g++ -shared -fPIC -o libplugin.so plugin.cpp

#include <cstdint>

extern "C" {

int32_t plugin_version() {
    return 1;
}

int32_t plugin_compute(int32_t x, int32_t y) {
    return x * x + y * y;
}

const char* plugin_name() {
    return "quadratic_plugin";
}

}  // extern "C"
```

```cpp
// loader.cpp — dynamically loads and uses the plugin
// $ g++ -std=c++17 -o loader loader.cpp -ldl
#include <cstdint>
#include <cstdio>
#include <cstdlib>
#include <dlfcn.h>
#include <string>

struct PluginAPI {
    int32_t (*version)();
    int32_t (*compute)(int32_t, int32_t);
    const char* (*name)();
};

PluginAPI load_plugin(const char* path) {
    void* handle = dlopen(path, RTLD_NOW);
    if (!handle) {
        std::fprintf(stderr, "dlopen failed: %s\n", dlerror());
        std::exit(1);
    }

    // Clear any existing error
    dlerror();

    auto load_sym = [&](const char* name) -> void* {
        void* sym = dlsym(handle, name);
        char* err = dlerror();
        if (err) {
            std::fprintf(stderr, "dlsym(%s) failed: %s\n", name, err);
            std::exit(1);
        }
        return sym;
    };

    PluginAPI api{};
    api.version = reinterpret_cast<int32_t(*)()>(load_sym("plugin_version"));
    api.compute = reinterpret_cast<int32_t(*)(int32_t, int32_t)>(load_sym("plugin_compute"));
    api.name    = reinterpret_cast<const char*(*)()>(load_sym("plugin_name"));
    return api;
}

int main() {
    auto plugin = load_plugin("./libplugin.so");

    std::printf("Plugin: %s v%d\n", plugin.name(), plugin.version());
    std::printf("compute(3, 4) = %d\n", plugin.compute(3, 4));  // 25

    // In production code, store handle and call dlclose(handle) when done
}
```

:::warning
The `RTLD_NOW` flag resolves all symbols at load time, surfacing missing symbol errors immediately. `RTLD_LAZY` defers resolution to first use, which can mask errors and cause crashes at unpredictable points. For plugin loading, prefer `RTLD_NOW`.
:::

### 5.7 Common Pitfalls at Language Boundaries

1. **Exceptions crossing the boundary**: A C++ exception that propagates through a C call stack is undefined behavior. Always wrap C++ entry points with `try`/`catch(...)`.

2. **Differing `size_t` between 32-bit and 64-bit code**: If a 32-bit C library passes a pointer-sized value through an `int`, it will truncate on 64-bit systems.

3. **Differing struct packing**: MSVC defaults to 8-byte alignment; GCC defaults to natural alignment. Use explicit packing or fixed-width types.

4. **Static initialization order fiasco**: Global C++ objects with non-trivial constructors may not be initialized before a C `main()` calls them. Prefer the Construct On First Use idiom.

5. **`new`/`delete` mismatch**: Memory allocated with `new` in C++ must be freed with `delete` (not `free()`), and vice versa. If passing ownership of heap memory across the boundary, provide explicit `create`/`destroy` functions in the C API.

```cpp
// Safe C++ entry point wrapping
#include <exception>

extern "C" {
    void safe_entry_point() {
        try {
            // ... C++ code that might throw ...
        } catch (const std::exception& e) {
            // Log and return error code — do NOT let exceptions escape
        } catch (...) {
            // Catch everything else
        }
    }
}
```

---

## Summary

| Topic                | Key Standard Reference | Core Takeaway                                                                      |
| :------------------- | :--------------------- | :--------------------------------------------------------------------------------- |
| Name Lookup & ADL    | [N4950 §6.5.4]         | ADL enables generic operator overloading without explicit qualification            |
| Overload Resolution  | [N4950 §12.4.3]        | Best viable function selected by conversion ranking; ties are ambiguous            |
| Calling Conventions  | [N4950 §8.4.4]         | System V ABI: 6 integer regs, 8 SSE regs, red zone for leaf functions              |
| Lambda Expressions   | [N4950 §8.1.5]         | Closures are unnamed classes; `mutable` removes const; generic lambdas since C++14 |
| `std::function`      | [N4950 §22.10]         | Type-erased wrapper with SBO; heap allocation for large closures                   |
| `move_only_function` | [N4950 §22.10.17]      | Move-only type erasure for exclusive-resource callbacks (C++23)                    |
| `extern "C"`         | [N4950 §9.9]           | Disables name mangling for C interop; catch all exceptions at boundaries           |
