---
title: Explicit Instantiation and Extern Templates
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: explicit-instantiation-and-extern-templates
---

# Explicit Instantiation and Extern Templates

When templates are instantiated implicitly in every translation unit that uses them, compilation
time and binary size can grow significantly. C++ provides **explicit instantiation** and **extern
template** declarations to control exactly where instantiation happens, allowing you to centralize
common instantiations in a single translation unit.

To control where instantiation happens, C++ provides **explicit instantiation** and **extern
template** declarations [N4950 §13.9.3]:

- `template void foo<int>();` --- _forces_ instantiation in this translation unit.
- `extern template void foo<int>();` --- _suppresses_ implicit instantiation in this translation
  unit; the instantiation must exist elsewhere.

```cpp
// ---- utils.h ----
#ifndef UTILS_H
#define UTILS_H
#include <vector>
#include <string>

template <typename T>
std::vector<T> range(T start, T end) {
    std::vector<T> result;
    for (T i = start; i < end; ++i)
        result.push_back(i);
    return result;
}

// Explicit instantiation declarations [N4950 §13.9.3]
extern template std::vector<int>    range(int, int);
extern template std::vector<double> range(double, double);
extern template std::vector<std::string> range(std::string, std::string);

#endif // UTILS_H
```

```cpp
// ---- utils.cpp ----
#include "utils.h"

// Explicit instantiation definitions [N4950 §13.9.2]
// These definitions live in ONE translation unit.
template std::vector<int>    range(int, int);
template std::vector<double> range(double, double);
template std::vector<std::string> range(std::string, std::string);
```

```cpp
// ---- main.cpp ----
#include "utils.h"
#include <iostream>

int main() {
    auto v1 = range(0, 5);       // uses instantiation from utils.cpp
    auto v2 = range(0.0, 3.0);   // uses instantiation from utils.cpp
    for (auto x : v1) std::cout << x << " ";
    std::cout << "\n";
    for (auto x : v2) std::cout << x << " ";
    std::cout << "\n";
}
```

:::tip
Use `extern template` in header files for templates that are instantiated with common types
(e.g., `int`, `double`, `std::string`). Provide explicit instantiation definitions in a single
`.cpp` file. This reduces compilation time and binary size without sacrificing the flexibility of
templates.
:::

## How Extern Templates Reduce Compile Time

When a template is instantiated implicitly, the compiler must perform five steps for every
translation unit:

1. **Parse** the template definition.
2. **Perform name lookup** in both phases [N4950 §13.8].
3. **Substitute** the concrete type arguments (monomorphization).
4. **Compile** the generated code — type checking, overload resolution, constant evaluation.
5. **Generate** object code — optimization passes, instruction selection, emission.

For templates with deep instantiation hierarchies (e.g., a
`std::vector<std::map<std::string, std::vector<double>>>`), step 3 alone requires instantiating
dozens of internal templates: the allocator, the pair, the tree node, the iterator, the reverse
iterator, and so on. If 50 translation units all use the same `std::vector<int>`, the compiler
repeats all five steps 50 times.

`extern template` eliminates this redundancy. When a translation unit sees
`extern template class std::vector<int>;`, the compiler:

- Still **parses** the template definition (needed for overload resolution and concept checking).
- Skips **steps 3–5** for that specific instantiation.
- Emits a **symbol reference** to the external instantiation provided by the `.cpp` file that
  contains the explicit instantiation definition.

The savings are proportional to:

$$\text{savings} \propto \text{template\_complexity} \times (\text{num\_TUs} - 1)$$

For a project with 1000 `.cpp` files that all include a heavy templated utility header, the
compilation time reduction can reach 20–40% for the affected templates [N4950 §13.9.3].

## Compilation Speed: Concrete Comparison

Consider a header containing a moderately complex template:

```cpp
// ---- heavy_utils.h ----
#ifndef HEAVY_UTILS_H
#define HEAVY_UTILS_H

#include <vector>
#include <string>
#include <algorithm>
#include <numeric>
#include <ranges>

template <typename T>
class DataProcessor {
    std::vector<T> data_;
public:
    void push_back(const T& val) { data_.push_back(val); }
    void push_back(T&& val) { data_.push_back(std::move(val)); }

    T sum() const {
        return std::accumulate(data_.begin(), data_.end(), T{});
    }

    T mean() const {
        if (data_.empty()) return T{};
        return sum() / static_cast<T>(data_.size());
    }

    void sort() {
        std::ranges::sort(data_);
    }

    void transform(const auto& func) {
        for (auto& elem : data_) elem = func(elem);
    }

    std::vector<T> filtered(const auto& pred) const {
        std::vector<T> result;
        for (const auto& elem : data_)
            if (pred(elem)) result.push_back(elem);
        return result;
    }

    std::size_t size() const noexcept { return data_.size(); }
    bool empty() const noexcept { return data_.empty(); }
};

#endif // HEAVY_UTILS_H
```

Without `extern template`, every translation unit that includes this header and instantiates
`DataProcessor<double>` must compile all member functions. With `extern template`, only one
translation unit does the heavy lifting:

```cpp
// ---- heavy_utils.h (with extern template additions) ----
// ... same template definition as above ...

extern template class DataProcessor<int>;
extern template class DataProcessor<double>;
extern template class DataProcessor<std::string>;
```

```cpp
// ---- heavy_utils.cpp ----
#include "heavy_utils.h"

template class DataProcessor<int>;
template class DataProcessor<double>;
template class DataProcessor<std::string>;
```

```cpp
// ---- consumer.cpp ----
#include "heavy_utils.h"
#include <iostream>

int main() {
    DataProcessor<int> dp;
    for (int i = 0; i < 100; ++i) dp.push_back(i);
    dp.transform([](int x) { return x * x; });
    std::cout << dp.sum() << "\n";
}
```

In a project with 200 translation units, the compilation cost for `DataProcessor<double>` drops from
200 full instantiations to 1, with 199 translation units emitting only a symbol reference.

## Interaction with Header-Only Libraries

Many modern C++ libraries (e.g., fmt, spdlog, nlohmann/json, Eigen) are header-only. This creates a
tension: header-only libraries are trivial to integrate (no linking step), but they can dramatically
increase compilation time because every template instantiation is repeated in every translation
unit.

**Strategy: Provide explicit instantiation definitions for the types you use most.**

Create a dedicated `.cpp` file that instantiates the library's templates with your common types:

```cpp
// ---- fmt_inst.cpp ----
#include <fmt/format.h>
#include <fmt/ranges.h>

template struct fmt::formatter<std::vector<int>>;
template struct fmt::formatter<std::vector<double>>;
template struct fmt::formatter<std::string>;
```

```cpp
// ---- fmt_inst.h ----
#ifndef FMT_INST_H
#define FMT_INST_H

#include <fmt/format.h>
#include <fmt/ranges.h>
#include <vector>
#include <string>

extern template struct fmt::formatter<std::vector<int>>;
extern template struct fmt::formatter<std::vector<double>>;
extern template struct fmt::formatter<std::string>;

#endif // FMT_INST_H
```

Then include `fmt_inst.h` instead of `fmt/format.h` in your `.cpp` files. The template definitions
are still visible (through the include), but the `extern template` declarations suppress redundant
instantiation.

:::warning
This approach requires that you keep your instantiation list in sync with actual usage.
Forgetting to add a new type results in a linker error (if you only include `fmt_inst.h`) or a
silent fallback to implicit instantiation (if the full header is also included). Always add both the
declaration and the definition in the same commit.
:::

## Linker Errors: Missing Explicit Instantiation Definitions

The most common error when using `extern template` is providing the declaration without the
definition:

```
undefined reference to `std::vector<int> range<int>(int, int)'
```

This occurs when:

1. A header declares `extern template std::vector<int> range(int, int);`
2. No `.cpp` file provides `template std::vector<int> range(int, int);`
3. A translation unit calls `range(0, 5)`, emitting an external symbol reference that the linker
   cannot resolve.

**Diagnostic checklist:**

1. Does the `.cpp` providing the explicit instantiation definition **include the full template
   definition** (not just a forward declaration)?
2. Is the `.cpp` being compiled and linked? Verify with your build system (check `CMakeLists.txt`,
   `Makefile`, or `meson.build`).
3. Do the template arguments match **exactly**? `range<int>` and `range<unsigned int>` are different
   instantiations.
4. For class templates, did you use `template class` (not `template void`)?
5. Are the affected functions `constexpr` or `inline`? These are implicitly `inline` and may not
   respect `extern template` suppression in all compilers [N4950 §13.9.3].

## Explicit Instantiation for Class Templates

Class template explicit instantiation instantiates **all** non-template member functions, member
classes, static data members, and member templates at once [N4950 §13.9.2]:

```cpp
template <typename T, typename Allocator = std::allocator<T>>
class Vector {
    T* data_;
    std::size_t size_;
    std::size_t capacity_;
    Allocator alloc_;
public:
    explicit Vector(std::size_t n = 0);
    ~Vector();
    void push_back(const T& val);
    T& operator[](std::size_t i);
    const T& operator[](std::size_t i) const;
    std::size_t size() const noexcept;
    // ...
};

// Instantiates ALL member functions of Vector<int>
template class Vector<int>;

// Instantiates ALL member functions of Vector<double, std::allocator<double>>
template class Vector<double>;
```

You can also explicitly instantiate individual member functions:

```cpp
// Only instantiates Vector<int>::push_back
template void Vector<int>::push_back(const int&);

// Only instantiates Vector<int>::operator[]
template int& Vector<int>::operator[](std::size_t);
```

This selective approach is useful when a class has many member functions but only a few are used
with a particular type. However, selective instantiation is fragile — adding a call to a new member
function without adding its explicit instantiation causes a linker error.

## Comparison of Approaches

| Approach                                  | Compile Time       | Binary Size                           | Link Time        | Flexibility                                           | Maintenance Burden |
| ----------------------------------------- | ------------------ | ------------------------------------- | ---------------- | ----------------------------------------------------- | ------------------ |
| Implicit instantiation only               | Slowest (repeated) | Largest (duplicates stripped at link) | Fastest          | Full                                                  | None               |
| `extern template` + explicit defn         | Faster             | Smaller                               | Slightly slower  | Full for declared types; implicit fallback for others | Low                |
| Explicit instantiation only (no `extern`) | Same as implicit   | Same as implicit                      | Same as implicit | Full                                                  | Low                |
| Non-template wrappers                     | Fastest            | Smallest                              | Fastest          | Limited to wrapped types                              | Medium             |
| PIMPL / type erasure                      | Fastest            | Smallest                              | Fastest          | Opaque types only                                     | High               |

## Common Pitfalls

**Forgetting `extern template` in the header.** If you provide the explicit instantiation definition
in a `.cpp` file but do not suppress implicit instantiation in the header, every translation unit
still performs the full instantiation. The explicit definition becomes dead code that the linker
must discard — you get zero benefit and potentially slower link times.

**Mismatched template arguments.** The arguments in the `extern template` declaration must exactly
match those in the explicit instantiation definition. A common mistake is declaring
`extern template void foo<int>()` but defining `template void foo<unsigned int>()` — these are
different instantiations and the linker will report an unresolved symbol for one and a duplicate
symbol for the other.

**`extern template` and `inline` functions.** Member functions defined inside the class body are
implicitly `inline`. `extern template` does not suppress implicit instantiation of `inline`
functions [N4950 §13.9.3]. Only out-of-line member function definitions are suppressed. This means
that if all your member functions are defined inside the class, `extern template` provides no
compile-time benefit.

**Changing template arguments after adding `extern template`.** If you add a new type to your
`extern template` declarations but forget the corresponding explicit instantiation definition, the
linker fails. Always add both in the same commit. Better yet, use a script or build system check to
verify consistency.

**ODR violations with conditional compilation.** If the explicit instantiation definition is guarded
by `#ifdef` but the `extern template` declaration is not (or vice versa), some translation units may
see the `extern` declaration while others do not. This can lead to ODR violations or mysterious
linker errors. Keep the `extern` declarations and explicit definitions in sync.

## Explicit Specialization vs. Explicit Instantiation

These two mechanisms are frequently confused but have fundamentally different semantics:

| Aspect                   | Explicit Instantiation                                             | Explicit Specialization                                      |
| :----------------------- | :----------------------------------------------------------------- | :----------------------------------------------------------- |
| **Syntax**               | `template void foo<int>()`                                         | `template&lt;&gt; void foo<int>()`                           |
| **Effect**               | Forces the compiler to generate code from the **primary template** | Provides a **completely new definition** for a specific type |
| **When used**            | To centralize where instantiation happens                          | When the generic algorithm does not work for a specific type |
| **Can change behavior?** | No — must match primary template semantics                         | Yes — can have entirely different logic                      |
| **Standard reference**   | [N4950 §13.9.2]                                                    | [N4950 §13.7.3]                                              |

```cpp
#include <iostream>
#include <cstring>

template <typename T>
T max_value(T a, T b) {
    return (a > b) ? a : b;
}

// Explicit instantiation: generate max_value<int> from the primary template
template int max_value(int, int);

// Explicit specialization: provide a DIFFERENT implementation for const char*
template <>
const char* max_value<const char*>(const char* a, const char* b) {
    return (std::strcmp(a, b) > 0) ? a : b;
}

int main() {
    std::cout << max_value(3, 7) << "\n";                   // Uses primary template
    std::cout << max_value("alpha", "beta") << "\n";        // Uses specialization
}
```

The specialization for `const char*` uses `strcmp` instead of `operator>`, which is essential
because `operator>` on raw pointers compares addresses, not lexicographic order. You cannot achieve
this behavior change with explicit instantiation alone.

## `extern template` and the C++20 Module Interaction

When a template is defined in a C++20 module and exported, the `extern template` mechanism is
largely superseded by the module system. The module interface unit (`.cppm`) serves a similar role
to a header with `extern template` declarations: downstream importers see the template definition
but do not re-instantiate unless they use a new type.

However, `extern template` remains useful within **non-module code** and in the transition period
where a codebase mixes modules and traditional headers. If a module exports a template, importers
that use a common type benefit from the module system's built-in deduplication — the BMI ensures the
template is instantiated once and shared across all importers.

For header-only libraries consumed via the Global Module Fragment, you can still use
`extern template` inside the module to suppress redundant instantiation:

```cpp
// utils.cppm
module;

#include <vector>

export template <typename T>
class DataBuffer {
    std::vector<T> data_;
public:
    void push(const T& val) { data_.push_back(val); }
    std::size_t size() const { return data_.size(); }
};

// Still valid inside a module: suppress implicit instantiation
extern template class DataBuffer<int>;
extern template class DataBuffer<double>;

export template class DataBuffer<int>;
export template class DataBuffer<double>;
```

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
- [Template Argument Deduction and CTAD](./2_argument_deduction.md)
- [SFINAE and Partial Specialization](./3_specialization.md)

:::

:::
