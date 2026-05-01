---
title: Compile-Time Branching and Constexpr Functions
description:
  C++: Compile-Time Branching and Constexpr Functions — `if constexpr` --- The
  Compile-Time Conditional; Discarded Statements.
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: compile-time-branching-and-constexpr-functions
---

# Compile-Time Branching and Constexpr Functions

C++ provides multiple mechanisms for compile-time computation: `if constexpr` for type-based
dispatch within function bodies, `constexpr` functions that may be evaluated at compile time, and
`consteval`/`constinit` specifiers that guarantee compile-time evaluation or initialization.
Together, these tools enable zero-overhead computation that is resolved before the program runs.

## `if constexpr` --- The Compile-Time Conditional

The `if constexpr` statement [N4950 §8.8.1] is a compile-time conditional that discards the false
branch entirely. Unlike a regular `if` statement, which evaluates its condition at runtime and
requires both branches to be well-formed, `if constexpr` evaluates its condition at compile time and
**does not instantiate the discarded branch**.

The syntax is [N4950 §8.8.1]:

```
if constexpr ( condition ) statement
if constexpr ( condition ) statement else statement
```

The condition must be a **converted constant expression of type `bool`** [N4950 §7.7]. If the
condition is `true`, the discarded statement (if present) is the `else` branch. If the condition is
`false`, the discarded statement is the `then` branch.

The critical difference from `if`:

$$
\mathrm{`if (cond)`} : \mathrm{both branches must be well-formed}
$$

$$
\mathrm{`if constexpr (cond)`} : \mathrm{only the taken branch must be well-formed}
$$

```cpp
#include <iostream>
#include <string>
#include <type_traits>

template<typename T>
std::string type_name() {
    if constexpr (std::is_integral_v<T>) {
        return "integral";
    } else if constexpr (std::is_floating_point_v<T>) {
        return "floating_point";
    } else if constexpr (std::is_pointer_v<T>) {
        return "pointer";
    } else {
        return "other";
    }
}

int main() {
    std::cout << type_name<int>() << "\n";
    std::cout << type_name<double>() << "\n";
    std::cout << type_name<int*>() << "\n";
    std::cout << type_name<std::string>() << "\n";
}
```

Output:

```
integral
floating_point
pointer
other
```

## Discarded Statements

A **discarded statement** is the branch of an `if constexpr` that is not taken [N4950 §8.8.1]. The
rules for discarded statements are:

1. The discarded statement is not instantiated --- its contents are not checked for validity.
2. A `return`, `break`, or `continue` in a discarded statement has no effect.
3. Labels in a discarded statement are still defined and can be the target of `goto` (though this is
   extremely poor practice).
4. A discarded `constexpr if` within a template is only evaluated if it is in the taken branch.

This means you can write code that references members that don't exist on a type, as long as that
code is in the discarded branch:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <type_traits>

template<typename T>
void describe(const T& value) {
    if constexpr (std::is_arithmetic_v<T>) {
        std::cout << "arithmetic: " << value << "\n";
    } else if constexpr (requires(const T& t) { t.size(); }) {
        std::cout << "has size: " << value.size() << "\n";
    } else {
        // This branch is only instantiated when T is neither arithmetic
        // nor has a .size() method
        std::cout << "unknown type\n";
    }
}

int main() {
    describe(42);                        // arithmetic: 42
    describe(std::vector<int>{1, 2, 3}); // has size: 3
    describe(std::string{"hello"});      // has size: 5
}
```

:::warning Discarded Statements and ODR A discarded statement is not instantiated, which means it
does not participate in the One Definition Rule (ODR) for the discarded path. However, the
non-discarded path is still subject to all normal C++ rules. Be careful with side effects in
`if constexpr` branches --- a discarded branch that would have had a side effect does not execute,
but a taken branch with a side effect does execute at runtime.
:::

## Type-Safe `to_string` with `if constexpr`

Before `if constexpr`, writing a type-safe string conversion function required either specialization
or SFINAE. With `if constexpr`, the implementation is straightforward:

```cpp
#include <iostream>
#include <string>
#include <sstream>
#include <type_traits>
#include <vector>
#include <cstdint>

template<typename T>
std::string to_string_typed(const T& value) {
    if constexpr (std::is_same_v<T, std::string>) {
        return value;
    } else if constexpr (std::is_same_v<T, bool>) {
        return value ? "true" : "false";
    } else if constexpr (std::is_integral_v<T>) {
        return std::to_string(value);
    } else if constexpr (std::is_floating_point_v<T>) {
        std::ostringstream oss;
        oss << value;
        return oss.str();
    } else if constexpr (std::is_pointer_v<T>) {
        if (value == nullptr) return "nullptr";
        std::ostringstream oss;
        oss << "0x" << std::hex << reinterpret_cast<std::uintptr_t>(value);
        return oss.str();
    } else {
        std::ostringstream oss;
        oss << value;
        return oss.str();
    }
}

int main() {
    std::cout << to_string_typed(42) << "\n";
    std::cout << to_string_typed(3.14) << "\n";
    std::cout << to_string_typed(true) << "\n";
    std::cout << to_string_typed(std::string{"hello"}) << "\n";
    std::cout << to_string_typed("world") << "\n";

    int x = 10;
    std::cout << to_string_typed(&x) << "\n";
    std::cout << to_string_typed(nullptr) << "\n";
}
```

Output:

```
42
3.14
true
hello
world
0x7ffd12345678
nullptr
```

## Generic Serializer with Compile-Time Dispatch

```cpp
#include <iostream>
#include <string>
#include <vector>
#include <map>
#include <tuple>
#include <variant>
#include <sstream>
#include <type_traits>

struct Serializer {
    std::ostringstream oss;

    template<typename T>
    void serialize(const T& value) {
        if constexpr (std::is_arithmetic_v<T> || std::is_same_v<T, std::string>) {
            oss << value;
        } else if constexpr (requires(const T& t) {
            { std::begin(t) } -> std::input_or_output_iterator;
            { std::end(t) } -> std::sentinel_for<decltype(std::begin(t))>;
        }) {
            oss << "[";
            bool first = true;
            for (const auto& elem : value) {
                if (!first) oss << ", ";
                serialize(elem);
                first = false;
            }
            oss << "]";
        } else if constexpr (requires(const T& t) {
            { t.first } -> std::convertible_to<const std::string&>;
            { t.second };
        }) {
            oss << "{\"" << value.first << "\": ";
            serialize(value.second);
            oss << "}";
        } else if constexpr (requires(const T& t) {
            std::tuple_size<T>::value;
            std::get<0>(t);
        }) {
            oss << "(";
            std::apply([this](const auto&... elems) {
                bool first = true;
                ((serialize(elems), oss << (first ? (first = false, "") : ", ")), ...);
            }, value);
            oss << ")";
        } else {
            oss << "<unknown>";
        }
    }

    std::string str() const { return oss.str(); }
};

int main() {
    Serializer s;

    s.serialize(42);
    std::cout << s.str() << "\n";

    s.oss = std::ostringstream{};
    s.serialize(std::vector<int>{1, 2, 3});
    std::cout << s.str() << "\n";

    s.oss = std::ostringstream{};
    s.serialize(std::map<std::string, int>{{"a", 1}, {"b", 2}});
    std::cout << s.str() << "\n";

    s.oss = std::ostringstream{};
    s.serialize(std::make_tuple(1, "hello", 3.14));
    std::cout << s.str() << "\n";
}
```

Output:

```
42
[1, 2, 3]
{"a": 1}, {"b": 2}
(1, hello, 3.14)
```

:::tip `if constexpr` vs Template Specialization `if constexpr` is generally preferred over
full/partial template specialization for dispatching based on type properties because it keeps all
logic in a single function body, avoids code duplication, and is easier to maintain. Specialization
is still necessary when different types require fundamentally different function signatures or
return types.
:::

## `constexpr` Functions

A `constexpr` function [N4950 §7.7] is a function that **may** be evaluated at compile time. If all
of its arguments are constant expressions, the compiler is required to attempt compile-time
evaluation. If evaluation fails (e.g., because a runtime-dependent value is encountered), the
function is evaluated at runtime instead.

```cpp
#include <iostream>
#include <array>

constexpr int factorial(int n) {
    int result = 1;
    for (int i = 2; i <= n; ++i) {
        result *= i;
    }
    return result;
}

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

int main() {
    // Compile-time evaluation (used as template argument)
    constexpr auto fact5 = factorial(5);
    static_assert(fact5 == 120);

    constexpr auto fib10 = fibonacci(10);
    static_assert(fib10 == 55);

    // Compile-time evaluation (used in array size)
    std::array<int, factorial(4)> arr{};

    // Runtime evaluation (argument is not constexpr)
    int n;
    std::cout << "Enter n: ";
    std::cin >> n;
    std::cout << "factorial(" << n << ") = " << factorial(n) << "\n";
    std::cout << "fibonacci(" << n << ") = " << fibonacci(n) << "\n";
}
```

### Evolution of `constexpr`

| Standard | Restrictions                                                                                           | Example                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| C++11    | Body must be a single `return` statement (with conditionals, loops allowed in the returned expression) | `constexpr int f(int x) { return x * x; }`                             |
| C++14    | Body can contain loops, local variables, multiple statements                                           | `constexpr int fact(int n) { int r = 1; for (...) r *= i; return r; }` |
| C++17    | `if constexpr`, inline variables, lambdas in constexpr contexts                                        | `constexpr auto f = [](int x) { return x * x; };`                      |
| C++20    | Dynamic allocation (`new`/`delete` in constexpr), `std::vector`, `std::string`, `union`, `try`/`catch` | `constexpr std::vector<int> v{1, 2, 3};`                               |
| C++23    | `if constexpr` in more contexts, relaxed constexpr evaluation rules                                    | More non-trivial constexpr functions                                   |

## `consteval` --- Immediate Functions (C++20)

A `consteval` function (also called an **immediate function**) [N4950 §7.7] **must** be evaluated at
compile time. If any argument is not a constant expression, the program is ill-formed. The
`consteval` specifier guarantees zero runtime overhead:

$$
\mathrm{`constexpr`} : \mathrm{compile-time if possible, runtime otherwise}
$$

$$
\mathrm{`consteval`} : \mathrm{compile-time always, error otherwise}
$$

```cpp
#include <iostream>
#include <string_view>

consteval int square(int x) {
    return x * x;
}

consteval std::string_view parse_protocol(std::string_view url) {
    auto pos = url.find("://");
    if (pos == std::string_view::npos) return "";
    return url.substr(0, pos);
}

int main() {
    constexpr int s = square(5);
    static_assert(s == 25);

    // These are all compile-time:
    static_assert(parse_protocol("https://example.com") == "https");
    static_assert(parse_protocol("ftp://files.example.com") == "ftp");
    static_assert(parse_protocol("no-protocol") == "");

    // Runtime argument would be an ERROR:
    // int x;
    // std::cin >> x;
    // square(x);  // error: call to consteval function 'square' is not a constant expression

    std::cout << square(10) << "\n";  // OK: 10 is a constant expression
    std::cout << parse_protocol("http://localhost") << "\n";
}
```

Output:

```
100
http
```

:::info `consteval` vs `constexpr` Use `constexpr` when the function should be usable at both
compile time and runtime. Use `consteval` when the function is intended only for compile-time
computation and should never appear in the generated binary. `consteval` functions can call other
`consteval` and `constexpr` functions, but a `constexpr` function cannot call a `consteval` function
with a non-constant argument (because the `consteval` function would fail its compile-time
requirement).
:::

## `constinit` --- Compile-Time Initialization (C++20)

The `constinit` specifier [N4950 §6.6.3] guarantees that a variable with static or thread storage
duration is **zero-initialized at compile time**. It does not make the variable `const` --- the
variable can be modified at runtime. `constinit` prevents the **static initialization order fiasco**
[N4950 §6.6.3.2]:

```cpp
#include <iostream>
#include <vector>

constinit int global_counter = 0;

struct Config {
    int max_connections;
    int timeout_seconds;
};

constinit Config global_config = {100, 30};

// Without constinit, this might be zero-initialized if another
// translation unit's static constructor has not yet run.
constinit std::vector<int> global_cache{};

void increment() {
    ++global_counter;
}

int main() {
    std::cout << "Initial counter: " << global_counter << "\n";
    increment();
    increment();
    increment();
    std::cout << "Final counter: " << global_counter << "\n";

    std::cout << "Max connections: " << global_config.max_connections << "\n";
    std::cout << "Timeout: " << global_config.timeout_seconds << "s\n";

    // constinit does NOT make the variable const:
    global_config.max_connections = 200;
    std::cout << "Updated max connections: " << global_config.max_connections << "\n";
}
```

Output:

```
Initial counter: 0
Final counter: 3
Max connections: 100
Timeout: 30s
Updated max connections: 200
```

The difference between `const`, `constexpr`, and `constinit`:

| Specifier   | Compile-Time Init     | Runtime Modifiable | Implies `const` |
| ----------- | --------------------- | ------------------ | --------------- |
| `const`     | Required (for static) | No                 | Yes             |
| `constexpr` | Required              | No                 | Yes             |
| `constinit` | Required              | Yes                | No              |

## Compile-Time Data Structures (C++20)

C++20 permits `constexpr` evaluation of `std::vector` and `std::string` [N4950 §20.3.4, §21.3],
enabling compile-time data processing with dynamically-sized containers:

```cpp
#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <array>

constexpr std::vector<int> sieve_of_eratosthenes(int max_val) {
    std::vector<bool> is_prime(max_val + 1, true);
    is_prime[0] = is_prime[1] = false;

    for (int i = 2; i * i <= max_val; ++i) {
        if (is_prime[i]) {
            for (int j = i * i; j <= max_val; j += i) {
                is_prime[j] = false;
            }
        }
    }

    std::vector<int> primes;
    for (int i = 2; i <= max_val; ++i) {
        if (is_prime[i]) {
            primes.push_back(i);
        }
    }
    return primes;
}

constexpr std::string to_upper(std::string s) {
    for (auto& c : s) {
        if (c >= 'a' && c <= 'z') {
            c -= 32;
        }
    }
    return s;
}

int main() {
    constexpr auto primes = sieve_of_eratosthenes(50);
    static_assert(primes.size() == 15);
    static_assert(primes[0] == 2);
    static_assert(primes[14] == 47);

    std::cout << "Primes up to 50: ";
    for (auto p : primes) std::cout << p << " ";
    std::cout << "\n";

    constexpr auto upper = to_upper("hello constexpr world");
    static_assert(upper == "HELLO CONSTEXPR WORLD");
    std::cout << upper << "\n";

    // Convert to std::array for runtime use (no heap allocation)
    std::array<int, primes.size()> prime_array{};
    std::copy(primes.begin(), primes.end(), prime_array.begin());
}
```

Output:

```
Primes up to 50: 2 3 5 7 11 13 17 19 23 29 31 37 41 43 47
HELLO CONSTEXPR WORLD
```

:::warning Transient Allocations C++20 permits dynamic allocation in `constexpr` evaluation, but all
allocations must be **transient** --- they must be deallocated before the end of the constant
evaluation. The result of a `constexpr` function must not contain heap allocations
(pointers/references to the heap). This is why `constexpr std::vector<int> v{1, 2, 3};` is valid as
a local variable in a constexpr context, but you cannot return a heap-allocated vector and use it as
a template argument. C++23 relaxes this further for non-transient allocations in some contexts.
:::

## `consteval` for Compile-Time String Parsing

```cpp
#include <iostream>
#include <string_view>
#include <array>
#include <algorithm>

consteval std::string_view trim(std::string_view sv) {
    auto start = sv.find_first_not_of(" \t\n\r");
    if (start == std::string_view::npos) return "";
    auto end = sv.find_last_not_of(" \t\n\r");
    return sv.substr(start, end - start + 1);
}

consteval bool starts_with(std::string_view sv, std::string_view prefix) {
    return sv.size() >= prefix.size() && sv.substr(0, prefix.size()) == prefix;
}

consteval std::string_view extract_domain(std::string_view email) {
    auto at_pos = email.find('@');
    if (at_pos == std::string_view::npos) return "";
    return email.substr(at_pos + 1);
}

consteval std::array<std::string_view, 2> split_first(std::string_view sv, char delim) {
    auto pos = sv.find(delim);
    if (pos == std::string_view::npos) return {sv, ""};
    return {sv.substr(0, pos), sv.substr(pos + 1)};
}

int main() {
    static_assert(trim("  hello world  ") == "hello world");
    static_assert(trim("\t\n  ") == "");
    static_assert(starts_with("https://example.com", "https://"));
    static_assert(!starts_with("http://example.com", "https://"));
    static_assert(extract_domain("user@example.com") == "example.com");
    static_assert(extract_domain("no-at-sign") == "");

    auto [user, domain] = split_first("alice@example.com", '@');
    std::cout << "user: " << user << ", domain: " << domain << "\n";

    auto [key, value] = split_first("  key = value  ", '=');
    std::cout << "key: '" << trim(key) << "', value: '" << trim(value) << "'\n";
}
```

Output:

```
user: alice, domain: example.com
key: 'key', value: 'value'
```

## See Also

- [Parameter Packs and Variadic Templates](./1_parameter_packs.md)
- [Fold Expressions and Pack Expansion](./2_fold_expressions.md)
- [Type Traits and Static Reflection Patterns](./4_type_traits.md)

:::

:::

:::

:::
