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

## 3.6 The `noexcept` Operator

The `noexcept` operator is a **compile-time** constant expression that evaluates to `true` if the
given expression is guaranteed not to throw [N4950 §14.5.2]. It does not evaluate the expression at
runtime — it only examines the `noexcept` specifiers of the functions called within it:

```cpp
#include <iostream>
#include <type_traits>
#include <string>
#include <vector>

struct ThrowingCopy {
    std::string data;
    ThrowingCopy() = default;
    ThrowingCopy(const ThrowingCopy& o) : data(o.data) {}  // may throw
    ThrowingCopy(ThrowingCopy&& o) noexcept : data(std::move(o.data)) {}
};

struct NoThrowCopy {
    int data = 0;
    NoThrowCopy() = default;
    NoThrowCopy(const NoThrowCopy& o) = default;  // noexcept
    NoThrowCopy(NoThrowCopy&& o) noexcept = default;
};

int main() {
    std::cout << std::boolalpha;
    std::cout << "int copy is noexcept: "
              << noexcept(NoThrowCopy(ThrowingCopy{})) << "\n";  // false (copy ctor may throw)

    std::cout << "int copy is noexcept: "
              << noexcept(NoThrowCopy(NoThrowCopy{})) << "\n";    // true (copy ctor is noexcept)

    std::cout << "vector push_back (noexcept copy): "
              << noexcept(std::declval&lt;std::vector&lt;NoThrowCopy&gt;&amp;&gt;().push_back(NoThrowCopy{}))
              << "\n";  // true

    std::cout << "vector push_back (throwing copy): "
              << noexcept(std::declval&lt;std::vector&lt;ThrowingCopy&gt;&amp;&gt;().push_back(ThrowingCopy{}))
              << "\n";  // false (reallocation may throw)
}
```

### The `noexcept` Operator vs `noexcept` Specifier

These are two different things:

- **`noexcept(expression)` specifier**: Marks a function as non-throwing if `expression` is true.
- **`noexcept(expression)` operator**: Evaluates at compile time whether `expression` can throw.

They are used together in conditional `noexcept`:

```cpp
#include <utility>
#include <type_traits>

template<typename T>
class Stack {
    T* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t capacity_ = 0;

public:
    void push(const T&amp; value)
        noexcept(std::is_nothrow_copy_constructible_v&lt;T&gt;)
    {
        // ... push implementation
        (void)value;
    }

    void push(T&amp;&amp; value)
        noexcept(std::is_nothrow_move_constructible_v&lt;T&gt;)
    {
        // ... push implementation
        (void)value;
    }
};
```

## 3.7 `noexcept` and STL Container Requirements

The C++ standard library uses `noexcept` specifications extensively to enable optimizations.
Containers like `std::vector` check `noexcept` at compile time to decide whether to move or copy
elements during reallocation [N4950 §22.4.4.4]:

```cpp
#include <iostream>
#include <vector>
#include <string>

int main() {
    std::vector&lt;std::string&gt; v = {"hello", "world"};

    // resize may throw because std::string's copy constructor may throw
    // and reallocation requires moving existing elements
    std::cout << "vector&lt;string&gt; resize: "
              << noexcept(v.resize(100)) << "\n";  // false

    // shrink_to_fit may throw for the same reason
    std::cout << "vector&lt;string&gt; shrink_to_fit: "
              << noexcept(v.shrink_to_fit()) << "\n";  // false

    std::vector&lt;int&gt; vi = {1, 2, 3};
    // int's move is noexcept, so these operations are noexcept
    std::cout << "vector&lt;int&gt; resize: "
              << noexcept(vi.resize(100)) << "\n";  // true
}
```

The relevant type traits for querying noexcept properties:

| Trait                                | Meaning                                          |
| ------------------------------------ | ------------------------------------------------ |
| `std::is_nothrow_constructible`      | Can be constructed without throwing              |
| `std::is_nothrow_move_constructible` | Move constructor is noexcept                     |
| `std::is_nothrow_copy_constructible` | Copy constructor is noexcept                     |
| `std::is_nothrow_move_assignable`    | Move assignment operator is noexcept             |
| `std::is_nothrow_destructible`       | Destructor is noexcept (always true since C++11) |

## 3.8 `noexcept` Function Overloading

Since C++17, `noexcept` is part of the function type. This means you can overload on `noexcept`:

```cpp
#include <iostream>
#include <utility>

void process(int (*callback)()) {
    std::cout << "process: non-noexcept callback\n";
    callback();
}

void process(int (*callback)() noexcept) {
    std::cout << "process: noexcept callback\n";
    callback();
}

int normal_fn() { std::cout << "  normal_fn\n"; return 0; }
int noexcept_fn() noexcept { std::cout << "  noexcept_fn\n"; return 0; }

int main() {
    process(normal_fn);    // calls process(int(*)())  — non-noexcept overload
    process(noexcept_fn);  // calls process(int(*)() noexcept) — noexcept overload

    // Conversion: non-noexcept -> noexcept is allowed
    int (*ns)() noexcept = normal_fn;  // OK: implicit conversion
    ns();

    // Conversion: noexcept -> non-noexcept is allowed
    int (*nt)() = noexcept_fn;  // OK: implicit conversion
    nt();
}
```

This is particularly useful for dispatching to optimized code paths when a callback is known to be
non-throwing.

## 3.9 `noexcept` in Template Metaprogramming

The `noexcept` operator is commonly used in `static_assert` and `if constexpr` to provide
compile-time diagnostics:

```cpp
#include <iostream>
#include <type_traits>
#include <string>

template<typename T>
class MovingQueue {
public:
    static_assert(std::is_nothrow_move_constructible_v&lt;T&gt;,
                  "MovingQueue requires noexcept move-constructible elements");

    void enqueue(T&amp;&amp; value) noexcept {
        // safe to move without try/catch
        (void)value;
    }
};

int main() {
    MovingQueue&lt;int&gt; q1;           // OK: int has noexcept move
    MovingQueue&lt;std::string&gt; q2;  // OK: std::string has noexcept move

    // Uncommenting the following would fail the static_assert:
    // struct Bad { Bad(Bad&amp;&amp;) {} };  // throwing move
    // MovingQueue&lt;Bad&gt; q3;  // compile error
}
```

## Common Pitfalls

### 1. `noexcept` is Not Verified by the Compiler

The compiler does not verify that a `noexcept` function actually cannot throw. If a `noexcept`
function throws, `std::terminate()` is called [N4950 §14.7]. The `noexcept` specifier is a
**promise** by the programmer, not a guarantee checked by the compiler:

```cpp
#include <stdexcept>

// BAD: declared noexcept but actually throws
void dangerous() noexcept {
    throw std::runtime_error{"oops"};  // calls std::terminate()
}

// The compiler will NOT warn about this in most cases
// UBSan can catch some violations at runtime with -fsanitize=unreachable
```

### 2. Forgetting `noexcept` on Move Operations

Move constructors and move assignment operators should almost always be `noexcept`. If they are not,
`std::vector` and other containers will fall back to copying instead of moving during reallocation,
defeating the purpose of move semantics:

```cpp
#include <iostream>
#include <vector>

struct Expensive {
    int data[1024]{};
    Expensive() = default;

    // BAD: throwing move — vector will copy instead of move during reallocation
    Expensive(Expensive&amp;&amp; other) { std::memcpy(data, other.data, sizeof(data)); }

    // GOOD: noexcept move — vector uses move during reallocation
    // Expensive(Expensive&amp;&amp; other) noexcept { std::memcpy(data, other.data, sizeof(data)); }
};

int main() {
    std::vector&lt;Expensive&gt; v;
    for (int i = 0; i &lt; 10; ++i) {
        v.push_back(Expensive{});
    }
    // With throwing move: 9 copies of 4096 bytes during reallocations
    // With noexcept move: 9 moves of 4096 bytes (memcpy) during reallocations
    std::cout << "Done. Size: " << v.size() << "\n";
}
```

### 3. Conditional `noexcept` and Undefined Behavior

When writing conditional `noexcept`, the condition must accurately reflect whether the function can
throw. If the condition evaluates to `true` but the function actually throws, `std::terminate()` is
called. If the condition evaluates to `false` when the function cannot throw, you lose the
optimization benefit but correctness is preserved:

```cpp
#include <iostream>
#include <string>
#include <utility>

template<typename T>
class Container {
    T* data_ = nullptr;
public:
    // CORRECT: noexcept iff T's move constructor is noexcept
    void push_back(T&amp;&amp; val)
        noexcept(std::is_nothrow_move_constructible_v&lt;T&gt;)
    {
        // ... implementation
        (void)val;
    }
};

int main() {
    Container&lt;int&gt; c1;           // push_back is noexcept
    Container&lt;std::string&gt; c2;  // push_back is noexcept (string move is noexcept)
}
```

### 4. `noexcept(false)` on Destructors

Marking a destructor `noexcept(false)` does not make it safe to throw from. If a destructor throws
during stack unwinding (while another exception is active), `std::terminate()` is called regardless
of the `noexcept` specification [N4950 §14.7]. The only safe use of `noexcept(false)` on a
destructor is when you want to catch and handle exceptions thrown by member destructors:

```cpp
#include <iostream>
#include <stdexcept>
#include <exception>

struct Member {
    ~Member() { throw std::runtime_error{"member dtor threw"}; }
};

struct Wrapper {
    Member m;
    ~Wrapper() noexcept(false) {
        try {
            // destructor body runs, m's destructor throws
            // but we catch it here to prevent terminate during unwinding
        } catch (const std::exception&amp; e) {
            std::cerr << "caught in ~Wrapper: " << e.what() << "\n";
            // If another exception is already active, this catch prevents terminate
            // ONLY because the outer exception was not yet in flight when ~Wrapper started
        }
    }
};

int main() {
    // Normal destruction (no active exception) — ~Wrapper's noexcept(false) allows throw
    {
        Wrapper w;
    }  // ~Wrapper runs, ~Member throws, caught inside ~Wrapper

    // During stack unwinding — if ~Member throws, terminate is called
    // even with noexcept(false) on ~Wrapper, because the C++ runtime
    // calls terminate when any destructor throws during unwinding
}
```

## See Also

- [Exception Safety Guarantees](2_exception_safety.md)
- [The Itanium Exception ABI](1_exception_abi.md)

:::
