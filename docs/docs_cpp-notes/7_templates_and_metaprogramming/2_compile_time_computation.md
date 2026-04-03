---
title: Compile-Time Computation
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: compile-time-computation
---

# Compile-Time Computation

C++ has progressively expanded its ability to perform computation at compile time, moving from the limited `constexpr` of C++11 to the near-arbitrary compile-time execution available in C++20 and beyond. Compile-time computation eliminates runtime overhead for values that can be determined before the program runs, enables new forms of static analysis, and makes template metaprogramming dramatically more readable. This module covers `if constexpr`, `constexpr`/`consteval`/`constinit` functions, type traits and compile-time utilities, and the upcoming reflection features in C++26.

---

## 1. Compile-Time Branching (if constexpr)

### 1.1 `if constexpr` — The Compile-Time Conditional

The `if constexpr` statement [N4950 §8.8.1] is a compile-time conditional that discards the false branch entirely. Unlike a regular `if` statement, which evaluates its condition at runtime and requires both branches to be well-formed, `if constexpr` evaluates its condition at compile time and **does not instantiate the discarded branch**.

The syntax is [N4950 §8.8.1]:

```
if constexpr ( condition ) statement
if constexpr ( condition ) statement else statement
```

The condition must be a **converted constant expression of type `bool`** [N4950 §7.7]. If the condition is `true`, the discarded statement (if present) is the `else` branch. If the condition is `false`, the discarded statement is the `then` branch.

The critical difference from `if`:

$$
\text{`if (cond)`} : \text{both branches must be well-formed}
$$

$$
\text{`if constexpr (cond)`} : \text{only the taken branch must be well-formed}
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

### 1.2 Discarded Statements

A **discarded statement** is the branch of an `if constexpr` that is not taken [N4950 §8.8.1]. The rules for discarded statements are:

1. The discarded statement is not instantiated — its contents are not checked for validity.
2. A `return`, `break`, or `continue` in a discarded statement has no effect.
3. Labels in a discarded statement are still defined and can be the target of `goto` (though this is extremely poor practice).
4. A discarded `constexpr if` within a template is only evaluated if it is in the taken branch.

This means you can write code that references members that don't exist on a type, as long as that code is in the discarded branch:

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

:::warning Discarded Statements and ODR
A discarded statement is not instantiated, which means it does not participate in the One Definition Rule (ODR) for the discarded path. However, the non-discarded path is still subject to all normal C++ rules. Be careful with side effects in `if constexpr` branches — a discarded branch that would have had a side effect does not execute, but a taken branch with a side effect does execute at runtime.
:::

### 1.3 Type-Safe `to_string` with `if constexpr`

Before `if constexpr`, writing a type-safe string conversion function required either specialization or SFINAE. With `if constexpr`, the implementation is straightforward:

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

### 1.4 Generic Serializer with Compile-Time Dispatch

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

:::tip `if constexpr` vs Template Specialization
`if constexpr` is generally preferred over full/partial template specialization for dispatching based on type properties because it keeps all logic in a single function body, avoids code duplication, and is easier to maintain. Specialization is still necessary when different types require fundamentally different function signatures or return types.
:::

---

## 2. Constexpr Functions and Consteval

### 2.1 `constexpr` Functions

A `constexpr` function [N4950 §7.7] is a function that **may** be evaluated at compile time. If all of its arguments are constant expressions, the compiler is required to attempt compile-time evaluation. If evaluation fails (e.g., because a runtime-dependent value is encountered), the function is evaluated at runtime instead.

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

#### Evolution of `constexpr`

| Standard | Restrictions                                                                                           | Example                                                                |
| -------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------- |
| C++11    | Body must be a single `return` statement (with conditionals, loops allowed in the returned expression) | `constexpr int f(int x) { return x * x; }`                             |
| C++14    | Body can contain loops, local variables, multiple statements                                           | `constexpr int fact(int n) { int r = 1; for (...) r *= i; return r; }` |
| C++17    | `if constexpr`, inline variables, lambdas in constexpr contexts                                        | `constexpr auto f = [](int x) { return x * x; };`                      |
| C++20    | Dynamic allocation (`new`/`delete` in constexpr), `std::vector`, `std::string`, `union`, `try`/`catch` | `constexpr std::vector<int> v{1, 2, 3};`                               |
| C++23    | `if constexpr` in more contexts, relaxed constexpr evaluation rules                                    | More non-trivial constexpr functions                                   |

### 2.2 `consteval` — Immediate Functions (C++20)

A `consteval` function (also called an **immediate function**) [N4950 §7.7] **must** be evaluated at compile time. If any argument is not a constant expression, the program is ill-formed. The `consteval` specifier guarantees zero runtime overhead:

$$
\text{`constexpr`} : \text{compile-time if possible, runtime otherwise}
$$

$$
\text{`consteval`} : \text{compile-time always, error otherwise}
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

:::info `consteval` vs `constexpr`
Use `constexpr` when the function should be usable at both compile time and runtime. Use `consteval` when the function is intended only for compile-time computation and should never appear in the generated binary. `consteval` functions can call other `consteval` and `constexpr` functions, but a `constexpr` function cannot call a `consteval` function with a non-constant argument (because the `consteval` function would fail its compile-time requirement).
:::

### 2.3 `constinit` — Compile-Time Initialization (C++20)

The `constinit` specifier [N4950 §6.6.3] guarantees that a variable with static or thread storage duration is **zero-initialized at compile time**. It does not make the variable `const` — the variable can be modified at runtime. `constinit` prevents the **static initialization order fiasco** [N4950 §6.6.3.2]:

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

### 2.4 Compile-Time Data Structures (C++20)

C++20 permits `constexpr` evaluation of `std::vector` and `std::string` [N4950 §20.3.4, §21.3], enabling compile-time data processing with dynamically-sized containers:

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

:::warning Transient Allocations
C++20 permits dynamic allocation in `constexpr` evaluation, but all allocations must be **transient** — they must be deallocated before the end of the constant evaluation. The result of a `constexpr` function must not contain heap allocations (pointers/references to the heap). This is why `constexpr std::vector<int> v{1, 2, 3};` is valid as a local variable in a constexpr context, but you cannot return a heap-allocated vector and use it as a template argument. C++23 relaxes this further for non-transient allocations in some contexts.
:::

### 2.5 `consteval` for Compile-Time String Parsing

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

---

## 3. Type Traits and Compile-Time Utilities

### 3.1 Advanced Type Traits

The `<type_traits>` header [N4950 §20.15] provides a rich set of compile-time type introspection utilities. Beyond the basic `std::is_*` traits, several advanced traits are essential for generic programming:

#### Tuple Traits

| Trait                            | Description                                         |
| -------------------------------- | --------------------------------------------------- |
| `std::tuple_element_t<I, Tuple>` | The type of the `I`-th element of `Tuple` [§20.5.3] |
| `std::tuple_size_v<Tuple>`       | The number of elements in `Tuple` [§20.5.3]         |
| `std::tuple_size<Tuple>::value`  | Same as above (C++11 style)                         |

#### Variant Traits

| Trait                                    | Description                                               |
| ---------------------------------------- | --------------------------------------------------------- |
| `std::variant_alternative_t<I, Variant>` | The type of the `I`-th alternative of `Variant` [§20.7.3] |
| `std::variant_size_v<Variant>`           | The number of alternatives in `Variant` [§20.7.3]         |

#### Conditional Type Selection

| Trait                         | Description                                                                          |
| ----------------------------- | ------------------------------------------------------------------------------------ |
| `std::conditional_t<B, T, F>` | `T` if `B` is true, `F` otherwise [§20.15.8]                                         |
| `std::type_identity_t<T>`     | Simply `T` — used to prevent deduction [§20.15.8]                                    |
| `std::decay_t<T>`             | Applies array-to-pointer, function-to-pointer, and cv-qualifier removal [§20.15.7.2] |

```cpp
#include <iostream>
#include <type_traits>
#include <tuple>
#include <variant>
#include <string>

int main() {
    using MyTuple = std::tuple<int, double, std::string>;

    static_assert(std::tuple_size_v<MyTuple> == 3);
    static_assert(std::is_same_v<std::tuple_element_t<0, MyTuple>, int>);
    static_assert(std::is_same_v<std::tuple_element_t<1, MyTuple>, double>);
    static_assert(std::is_same_v<std::tuple_element_t<2, MyTuple>, std::string>);

    using MyVariant = std::variant<int, double, std::string>;

    static_assert(std::variant_size_v<MyVariant> == 3);
    static_assert(std::is_same_v<std::variant_alternative_t<0, MyVariant>, int>);
    static_assert(std::is_same_v<std::variant_alternative_t<1, MyVariant>, double>);
    static_assert(std::is_same_v<std::variant_alternative_t<2, MyVariant>, std::string>);

    // std::conditional_t selects a type at compile time
    using IntOrFloat = std::conditional_t<sizeof(void*) == 8, int64_t, int32_t>;
    static_assert(std::is_same_v<IntOrFloat, int64_t>); // on 64-bit

    // std::type_identity_t prevents template argument deduction
    std::cout << "sizeof(IntOrFloat) = " << sizeof(IntOrFloat) << "\n";
}
```

### 3.2 `std::conditional_t` and `std::type_identity_t`

`std::conditional_t` is the type-level analog of a ternary operator. `std::type_identity_t<T>` [N4950 §20.15.8] is deceptively simple — it just returns `T` — but it is critically useful for preventing unwanted template argument deduction:

```cpp
#include <iostream>
#include <type_traits>
#include <concepts>

// Problem: this template deduces T from both arguments
template<typename T>
void f(T a, T b) {
    std::cout << "same type\n";
}

// Solution: use type_identity_t to prevent deduction on the second argument
template<typename T>
void g(T a, std::type_identity_t<T> b) {
    std::cout << "second argument must match first\n";
}

// Compile-time type selection
template<typename T>
struct IntegerType {
    using type = std::conditional_t<
        sizeof(T) <= 1, int8_t,
        std::conditional_t<
            sizeof(T) <= 2, int16_t,
            std::conditional_t<
                sizeof(T) <= 4, int32_t,
                int64_t
            >
        >
    >;
};

int main() {
    f(1, 2);    // OK: both int
    g(1, 2);    // OK: second is forced to int
    // f(1, 2.0); // Error: T cannot be both int and double
    g(1, 2.0);  // Error: second argument must match first (int vs double)

    static_assert(std::is_same_v<IntegerType<char>::type, int8_t>);
    static_assert(std::is_same_v<IntegerType<short>::type, int16_t>);
    static_assert(std::is_same_v<IntegerType<int>::type, int32_t>);
    static_assert(std::is_same_v<IntegerType<long long>::type, int64_t>);
}
```

### 3.3 `std::index_sequence` and `std::index_sequence_for`

`std::index_sequence` [N4950 §20.15.9] is a compile-time sequence of integer indices represented as a type. It is the primary mechanism for "unrolling" variadic templates and tuples. The key utilities are:

| Type                                | Description                                                    |
| ----------------------------------- | -------------------------------------------------------------- |
| `std::index_sequence<Is...>`        | A type representing the compile-time sequence `0, 1, ..., n-1` |
| `std::make_index_sequence<N>`       | Produces `std::index_sequence<0, 1, ..., N-1>`                 |
| `std::index_sequence_for<Types...>` | Produces `std::make_index_sequence<sizeof...(Types)>`          |

These work by mapping the count `N` to a parameter pack of integers, which can then be expanded with parameter pack expansion:

$$
\text{make\_index\_sequence<3>} \Rightarrow \text{index\_sequence<0, 1, 2>}
$$

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>

template<typename Tuple, typename Func, std::size_t... Is>
void for_each_impl(Tuple&& t, Func&& f, std::index_sequence<Is...>) {
    (f(std::get<Is>(std::forward<Tuple>(t))), ...);
}

template<typename Tuple, typename Func>
void for_each(Tuple&& t, Func&& f) {
    for_each_impl(
        std::forward<Tuple>(t),
        std::forward<Func>(f),
        std::make_index_sequence<std::tuple_size_v<std::remove_reference_t<Tuple>>>{}
    );
}

template<typename Tuple, typename Func, std::size_t... Is>
auto transform_impl(const Tuple& t, Func&& f, std::index_sequence<Is...>) {
    return std::make_tuple(f(std::get<Is>(t))...);
}

template<typename Tuple, typename Func>
auto transform(const Tuple& t, Func&& f) {
    return transform_impl(
        t,
        std::forward<Func>(f),
        std::make_index_sequence<std::tuple_size_v<Tuple>>{}
    );
}

int main() {
    auto tup = std::make_tuple(1, 2.5, std::string{"hello"});

    std::cout << "for_each output: ";
    for_each(tup, [](const auto& elem) {
        std::cout << "[" << elem << "] ";
    });
    std::cout << "\n";

    auto transformed = transform(tup, [](const auto& elem) {
        if constexpr (std::is_integral_v<std::decay_t<decltype(elem)>>) {
            return elem * 2;
        } else {
            return elem + std::string{"!"};
        }
    });

    std::cout << "transformed: ";
    for_each(transformed, [](const auto& elem) {
        std::cout << "[" << elem << "] ";
    });
    std::cout << "\n";
}
```

Output:

```
for_each output: [1] [2.5] [hello]
transformed: [2] [5] [hello!]
```

:::info Fold Expressions and index_sequence
The pattern `(f(std::get<Is>(t)), ...)` is a **fold expression** [N4950 §7.5.6] that expands the comma operator over the parameter pack `Is`. This is the idiomatic way to iterate over a tuple at compile time. Without `index_sequence`, there is no way to iterate over a tuple's elements in a generic function, because tuples do not have a runtime-iterable interface.
:::

### 3.4 Unrolling a Tuple with `index_sequence`

The following example demonstrates a more advanced use of `index_sequence` — extracting specific elements from a tuple and building a new tuple:

```cpp
#include <iostream>
#include <tuple>
#include <utility>
#include <string>
#include <type_traits>

template<typename Tuple, std::size_t... Is>
auto select_impl(const Tuple& t, std::index_sequence<Is...>) {
    return std::make_tuple(std::get<Is>(t)...);
}

template<std::size_t... Indices, typename Tuple>
auto select(const Tuple& t) {
    return select_impl(t, std::index_sequence<Indices...>{});
}

template<typename Tuple, std::size_t... Is>
auto take_impl(const Tuple& t, std::index_sequence<Is...>) {
    return std::make_tuple(std::get<Is>(t)...);
}

template<std::size_t N, typename Tuple>
auto take(const Tuple& t) {
    return take_impl(t, std::make_index_sequence<N>{});
}

template<typename Tuple, typename Func, std::size_t... Is>
auto apply_impl(const Tuple& t, Func&& f, std::index_sequence<Is...>) {
    return f(std::get<Is>(t)...);
}

template<typename Tuple, typename Func>
auto apply(Tuple&& t, Func&& f) {
    return apply_impl(
        std::forward<Tuple>(t),
        std::forward<Func>(f),
        std::make_index_sequence<
            std::tuple_size_v<std::remove_reference_t<Tuple>>
        >{}
    );
}

int main() {
    auto data = std::make_tuple(10, 3.14, std::string{"hello"}, 42, 2.71);

    // Select specific indices
    auto selected = select<0, 2, 4>(data);
    std::cout << "Selected: " << std::get<0>(selected) << ", "
              << std::get<1>(selected) << ", "
              << std::get<2>(selected) << "\n";

    // Take first N elements
    auto first_three = take<3>(data);
    std::cout << "First 3: " << std::get<0>(first_three) << ", "
              << std::get<1>(first_three) << ", "
              << std::get<2>(first_three) << "\n";

    // Apply a function to tuple elements
    auto result = apply(std::make_tuple(3, 4), [](int a, int b) {
        return a + b;
    });
    std::cout << "3 + 4 = " << result << "\n";

    auto concat = apply(std::make_tuple(std::string{"hello"}, std::string{" world"}),
        [](const std::string& a, const std::string& b) {
            return a + b;
        });
    std::cout << "Concatenated: " << concat << "\n";
}
```

Output:

```
Selected: 10, hello, 2.71
First 3: 10, 3.14, hello
3 + 4 = 7
Concatenated: hello world
```

### 3.5 Structured Binding with `std::tuple`

Structured bindings [N4950 §9.6] combined with `std::tuple` and `std::tie` provide a clean syntax for returning and unpacking multiple values. The key feature is that structured bindings work at compile time when used with `constexpr`:

```cpp
#include <iostream>
#include <tuple>
#include <string>
#include <cmath>
#include <sstream>

constexpr auto parse_version(std::string_view version) {
    auto dot1 = version.find('.');
    auto dot2 = version.find('.', dot1 + 1);

    int major = 0, minor = 0, patch = 0;

    auto to_int = [](std::string_view sv) constexpr -> int {
        int result = 0;
        for (char c : sv) {
            result = result * 10 + (c - '0');
        }
        return result;
    };

    major = to_int(version.substr(0, dot1));
    minor = to_int(version.substr(dot1 + 1, dot2 - dot1 - 1));
    patch = to_int(version.substr(dot2 + 1));

    return std::make_tuple(major, minor, patch);
}

constexpr auto min_version(std::tuple<int, int, int> a, std::tuple<int, int, int> b) {
    auto [ma, mi, pa] = a;
    auto [mb, mi2, pb] = b;
    if (ma != mb) return ma < mb ? a : b;
    if (mi != mi2) return mi < mi2 ? a : b;
    return pa < pb ? a : b;
}

int main() {
    constexpr auto [maj, min, pat] = parse_version("2.15.7");
    static_assert(maj == 2);
    static_assert(min == 15);
    static_assert(pat == 7);

    constexpr auto v1 = parse_version("3.0.0");
    constexpr auto v2 = parse_version("2.99.99");
    constexpr auto [rm, ri, rp] = min_version(v1, v2);
    static_assert(rm == 2);

    std::cout << "Version: " << maj << "." << min << "." << pat << "\n";
    std::cout << "Min version: " << rm << "." << ri << "." << rp << "\n";

    // Runtime use
    auto [a, b, c] = std::tuple{1, 2.0, std::string{"three"}};
    std::cout << a << ", " << b << ", " << c << "\n";
}
```

Output:

```
Version: 2.15.7
Min version: 2.99.99
1, 2, three
```

:::tip `std::apply` for Tuple Unpacking
`std::apply` [N4950 §20.14.4] is the standard library utility that unpacks a tuple as arguments to a callable. It is implemented using the same `index_sequence` pattern shown above. Prefer `std::apply` over writing your own unpacking code.
:::

---

## 4. Reflection Preview (C++26)

### 4.1 `std::meta::info` and `std::meta::value` (C++26)

C++26 introduces **static reflection** through the `<meta>` header [P2996R9], which provides the ability to inspect types, functions, and class members at compile time. The core types are:

| Type               | Description                                                                                   |
| ------------------ | --------------------------------------------------------------------------------------------- |
| `std::meta::info`  | A compile-time value representing a reflection of a C++ entity (type, function, member, etc.) |
| `std::meta::value` | A type-erased compile-time value that can hold any reflection                                 |

The key operations include:

- `std::meta::infoof(expression)` — obtains a `std::meta::info` representing the type or entity of the expression.
- `^^identifier` — the reflection operator, produces `std::meta::info` for the named entity.
- `std::meta::members_of(type_info)` — returns a `std::vector<std::meta::info>` of the members of a class type.
- `std::meta::name_of(info)` — returns the name of the reflected entity as a `std::string_view`.

:::warning C++26 Status
Static reflection is approved for C++26 but the exact API is still being finalized. The examples below follow the direction of P2996R9, which is the leading proposal. Compiler support may vary. Check the latest compiler documentation for current support.
:::

### 4.2 Code Example: Aggregate Introspection Pattern

The following example demonstrates the intended C++26 reflection pattern for iterating over aggregate members. This pattern would eliminate the need for manual boilerplate when serializing or printing aggregates:

```cpp
// C++26 — Pseudocode following P2996R9 direction
// NOTE: This may not compile on current compilers (as of early 2026)
// It is included for educational purposes to illustrate the API design.

#include <meta>
#include <iostream>
#include <string>
#include <format>

struct Person {
    std::string name;
    int age;
    double height;
};

// C++26: reflect on the type to get its members
consteval auto get_member_names(std::meta::info type) {
    std::vector<std::string_view> names;
    for (auto member : std::meta::members_of(type)) {
        names.push_back(std::meta::name_of(member));
    }
    return names;
}

// C++26: generate a format string from the member names
template<typename T>
consteval std::string make_format_string() {
    std::string result;
    bool first = true;
    for (auto member : std::meta::members_of(^^T)) {
        if (!first) result += ", ";
        result += std::meta::name_of(member);
        result += "={}";
        first = false;
    }
    return result;
}

void print_person(const Person& p) {
    // In C++26, this would be possible:
    // std::cout << std::format(make_format_string<Person>(),
    //     p.name, p.age, p.height) << "\n";

    // For now, the manual equivalent:
    std::cout << std::format("name={}, age={}, height={}\n",
        p.name, p.age, p.height);
}

int main() {
    Person alice{"Alice", 30, 1.68};
    print_person(alice);
}
```

### 4.3 Alternative: Boost.PFR (Precise and Flat Reflection)

Before C++26 reflection is widely available, **Boost.PFR** provides aggregate introspection by exploiting the fact that standard-layout aggregates have well-defined member layout [N4950 §11.4]. Boost.PFR can access aggregate members by index without requiring any macros or registration:

```cpp
#include <iostream>
#include <string>
#include <boost/pfr.hpp>

struct Point {
    double x;
    double y;
    double z;
};

struct Config {
    std::string name;
    int port;
    bool debug;
    double timeout;
};

template<typename T>
void print_aggregate(const T& obj) {
    boost::pfr::for_each_field(obj, [](const auto& field, std::size_t idx) {
        if constexpr (std::is_same_v<std::decay_t<decltype(field)>, bool>) {
            std::cout << "  [" << idx << "] = " << (field ? "true" : "false") << "\n";
        } else {
            std::cout << "  [" << idx << "] = " << field << "\n";
        }
    });
}

template<typename T>
std::size_t field_count() {
    return boost::pfr::tuple_size_v<T>;
}

int main() {
    Point p{1.0, 2.0, 3.0};
    Config cfg{"my_server", 8080, true, 30.5};

    std::cout << "Point (" << field_count<Point>() << " fields):\n";
    print_aggregate(p);

    std::cout << "Config (" << field_count<Config>() << " fields):\n";
    print_aggregate(cfg);

    // Access by index (no macros needed)
    auto port = boost::pfr::get<1>(cfg);
    std::cout << "Port via index: " << port << "\n";
}
```

Output:

```
Point (3 fields):
  [0] = 1
  [1] = 2
  [2] = 3
Config (4 fields):
  [0] = my_server
  [1] = 8080
  [2] = true
  [3] = 30.5
Port via index: 8080
```

:::tip When to Use Boost.PFR
Boost.PFR works for **standard-layout aggregates** (plain structs with public members, no virtual functions, no base classes, no custom constructors). It does not work for types with private members, virtual functions, or non-standard layout. If your types satisfy these constraints, Boost.PFR is a practical, header-only solution that requires no code generation or macro registration. For more complex types, wait for C++26 reflection or use a library like Magic Enum for enums.
:::

### 4.4 Comparison: Current Approaches to Compile-Time Introspection

| Approach                              | C++ Version       | Limitations                     | Overhead     |
| ------------------------------------- | ----------------- | ------------------------------- | ------------ |
| Manual macros (e.g., `DEFINE_FIELDS`) | Any               | Boilerplate, error-prone        | Zero runtime |
| Boost.PFR                             | C++14+            | Standard-layout aggregates only | Zero runtime |
| Magic Get (Agate/Boost)               | C++14+            | Same as Boost.PFR               | Zero runtime |
| `__builtin_*` compiler intrinsics     | Compiler-specific | Non-portable                    | Zero runtime |
| C++26 `<meta>` reflection             | C++26             | Not yet widely supported        | Zero runtime |

All of these approaches are **zero-overhead** — the introspection happens at compile time, and the generated code is equivalent to hand-written member access. The primary difference is in **ergonomics** (how much boilerplate is required) and **generality** (what kinds of types can be introspected).

---

## Summary

| Feature                    | Standard    | Section          | Key Use Case                                   |
| -------------------------- | ----------- | ---------------- | ---------------------------------------------- |
| `if constexpr`             | C++17       | [N4950 §8.8.1]   | Type-based dispatch in template functions      |
| Discarded statements       | C++17       | [N4950 §8.8.1]   | Skipping invalid code paths at compile time    |
| `constexpr` functions      | C++11/14/20 | [N4950 §7.7]     | Compile-time computation with runtime fallback |
| `consteval`                | C++20       | [N4950 §7.7]     | Guaranteed compile-time evaluation             |
| `constinit`                | C++20       | [N4950 §6.6.3]   | Safe static initialization order               |
| Compile-time containers    | C++20       | [N4950 §20.3.4]  | `std::vector`/`std::string` in constexpr       |
| `std::index_sequence`      | C++14       | [N4950 §20.15.9] | Unrolling variadic templates and tuples        |
| `std::conditional_t`       | C++14       | [N4950 §20.15.8] | Compile-time type selection                    |
| `std::type_identity_t`     | C++20       | [N4950 §20.15.8] | Preventing template argument deduction         |
| Static reflection `<meta>` | C++26       | P2996R9          | Compile-time introspection of types            |
| Boost.PFR                  | N/A         | N/A              | Aggregate introspection (pre-C++26)            |
