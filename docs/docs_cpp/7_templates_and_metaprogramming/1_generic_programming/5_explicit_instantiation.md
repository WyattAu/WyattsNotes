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

## Formal Semantics: Declaration vs Definition [N4950 §13.9.2]

The C++ Standard distinguishes two forms of explicit instantiation that have fundamentally different
effects on the compilation model:

**Explicit instantiation declaration** (informally "extern template") [N4950 §13.9.2/1]:

```
extern template < template-argument-list > declaration
```

This tells the compiler: "An instantiation of this template with these arguments exists in some
other translation unit. Do **not** implicitly instantiate it here." The effect is that the
translation unit emits an **external reference** (a symbol that the linker must resolve) rather than
generating the instantiation's object code.

**Explicit instantiation definition** [N4950 §13.9.2/2]:

```
template < template-argument-list > declaration
```

This tells the compiler: "Generate the instantiation of this template with these arguments **right
now**, in this translation unit." The effect is that the translation unit emits a **definition**
(the actual generated code) that the linker will make available to all other translation units.

The key distinction from the Standard:

> An entity that is the subject of an explicit instantiation declaration and that is also used other
> than in an unevaluated operand is implicitly instantiated when the entity is odr-used [N4950
> §13.9.2/6].

This means that an `extern template` declaration suppresses implicit instantiation **only for direct
uses**. If the template is used in a context that requires its definition (e.g., taking its address,
or using it in a constant expression), the compiler may still need to instantiate it. The practical
consequence is that `extern template` is most effective for function templates and class templates
whose member functions are called --- the call site emits a reference, not a definition.

## Proof: Explicit Instantiation Definition Prevents Implicit Instantiation

**Claim:** When a translation unit contains an explicit instantiation definition for
`template-name<Args>`, the compiler will not generate a separate implicit instantiation for the same
`template-name<Args>` within that translation unit, even if the template is used.

**Proof sketch by contradiction:**

1. Assume a translation unit `TU` contains both an explicit instantiation definition
   `template class Foo<int>;` and a use of `Foo<int>` that would normally trigger implicit
   instantiation.

2. By [N4950 §13.9.2/2], the explicit instantiation definition causes the compiler to generate the
   full instantiation of `Foo<int>` at that point in the translation unit.

3. If the compiler were to also generate an implicit instantiation at the use site, `TU` would
   contain two definitions of every entity within `Foo<int>` --- the constructor, destructor, member
   functions, and static data members.

4. This violates the **One Definition Rule** [N4950 §6.3/1], which states that "every program shall
   contain exactly one definition of every non-inline function or variable that is odr-used in that
   program."

5. Therefore, the compiler must **not** generate a separate implicit instantiation when an explicit
   instantiation definition is present. The explicit instantiation definition is the sole source of
   the generated code. $\blacksquare$

**Corollary:** The explicit instantiation definition must appear after the full template definition
(or include a header that contains it). If the template definition is incomplete at the point of the
explicit instantiation definition, the program is ill-formed [N4950 §13.9.2/4].

**Corollary:** An explicit instantiation definition in a header file is almost always a mistake.
Every translation unit that includes that header would contain the full instantiation, leading to
multiple definitions across translation units. While the linker typically deduplicates identical
definitions (for non-inline entities, this is technically an ODR violation), the compilation cost is
multiplied across all translation units with no benefit.

## How Extern Templates Reduce Compile Time

When a template is instantiated implicitly, the compiler must perform five steps for every
translation unit:

1. **Parse** the template definition.
2. **Perform name lookup** in both phases [N4950 §13.8].
3. **Substitute** the concrete type arguments (monomorphization).
4. **Compile** the generated code --- type checking, overload resolution, constant evaluation.
5. **Generate** object code --- optimization passes, instruction selection, emission.

For templates with deep instantiation hierarchies (e.g., a
`std::vector<std::map<std::string, std::vector<double>>>`), step 3 alone requires instantiating
dozens of internal templates: the allocator, the pair, the tree node, the iterator, the reverse
iterator, and so on. If 50 translation units all use the same `std::vector<int>`, the compiler
repeats all five steps 50 times.

`extern template` eliminates this redundancy. When a translation unit sees
`extern template class std::vector<int>;`, the compiler:

- Still **parses** the template definition (needed for overload resolution and concept checking).
- Skips **steps 3--5** for that specific instantiation.
- Emits a **symbol reference** to the external instantiation provided by the `.cpp` file that
  contains the explicit instantiation definition.

The savings are proportional to:

$$\mathrm{savings} \propto \mathrm{template\_complexity} \times (\mathrm{num\_TUs} - 1)$$

For a project with 1000 `.cpp` files that all include a heavy templated utility header, the
compilation time reduction can reach 20--40% for the affected templates [N4950 §13.9.3].

## Compile Time Analysis: Quantitative Breakdown

The following table estimates the per-translation-unit cost of each compilation phase for a
hypothetical template `DataProcessor<T>` with 8 member functions, each exercising nontrivial type
deduction and standard library internals:

| Phase                                                    | Implicit Instantiation Cost (per TU) | Extern Template Cost (per TU) | Explicit Defn Cost (per TU, only 1 TU) |
| -------------------------------------------------------- | ------------------------------------ | ----------------------------- | -------------------------------------- |
| Parse template definition                                | ~2 ms                                | ~2 ms                         | ~2 ms                                  |
| Two-phase name lookup                                    | ~1 ms                                | ~1 ms                         | ~1 ms                                  |
| Type substitution / monomorphization                     | ~5 ms                                | 0 ms (skipped)                | ~5 ms                                  |
| Compile generated code (type-check, overload resolution) | ~8 ms                                | 0 ms (skipped)                | ~8 ms                                  |
| Code generation (optimization, emission)                 | ~12 ms                               | 0 ms (skipped)                | ~12 ms                                 |
| **Total per TU**                                         | **~28 ms**                           | **~3 ms**                     | **~28 ms**                             |

For a project with $N = 500$ translation units, the total wall-clock time for this template alone
is:

- **Without `extern template`:** $500 \times 28\mathrm{ms} = 14{,}000\mathrm{ms} = 14\mathrm{s}$
- **With `extern template`:**
  $499 \times 3\mathrm{ms} + 1 \times 28\mathrm{ms} = 1525\mathrm{ms} \approx 1.5\mathrm{s}$

The savings compound multiplicatively across multiple template instantiations. In real-world
codebases with dozens of heavy template headers, `extern template` can reduce total build times by
20--40%.

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

## Interaction with the One Definition Rule (ODR)

The One Definition Rule [N4950 §6.3] is central to understanding why explicit instantiation works
and where it can go wrong.

**ODR compliance with explicit instantiation definition.** An explicit instantiation definition
generates a single, well-defined set of entities for the given template arguments. Because the
definition appears in exactly one translation unit, the ODR is satisfied: there is exactly one
definition of each member function, each static data member, and each member class [N4950
§13.9.2/2].

**ODR violation scenario: multiple explicit instantiation definitions.** If two translation units
both contain `template class Foo<int>;`, the program violates the ODR --- there are two definitions
of every entity in `Foo<int>`. The linker may or may not detect this (it depends on whether the
linker performs strict ODR checking or simply merges identical symbols), but the behavior is
undefined.

**ODR violation scenario: explicit instantiation definition + implicit instantiation.** If one
translation unit contains `template class Foo<int>;` and another translation unit (without an
`extern template` declaration) implicitly instantiates `Foo<int>`, the result is the same ODR
violation as above. The `extern template` declaration is the mechanism that prevents this.

**ODR-safe pattern:**

```cpp
// ---- foo.h ----
template <typename T>
class Foo { /* ... */ };

// Declaration: suppresses implicit instantiation in every TU that includes this header
extern template class Foo<int>;
extern template class Foo<double>;
```

```cpp
// ---- foo.cpp ----
#include "foo.h"

// Definition: the ONE place where Foo<int> and Foo<double> are generated
template class Foo<int>;
template class Foo<double>;
```

This pattern is ODR-safe because:

- `foo.cpp` is the **only** translation unit with the explicit instantiation definitions.
- Every other translation unit includes `foo.h`, which contains `extern template` declarations that
  suppress implicit instantiation.
- The linker resolves the external references from the consuming TUs to the definitions in
  `foo.cpp`.

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
with a particular type. However, selective instantiation is fragile --- adding a call to a new
member function without adding its explicit instantiation causes a linker error.

### Explicit Instantiation of Member Templates

Member templates (template members of a class template) require special attention. An explicit
instantiation of the enclosing class template does **not** automatically instantiate member
templates [N4950 §13.9.2/5]:

```cpp
template <typename T>
class Container {
    std::vector<T> data_;
public:
    void push_back(const T& val) { data_.push_back(val); }

    // Member template: NOT instantiated by `template class Container<int>`
    template <typename U>
    U as() const;
};

// This instantiates push_back but NOT as<U>
template class Container<int>;

// You must explicitly instantiate the member template separately
template int Container<int>::as<int>() const;
template double Container<int>::as<double>() const;
```

This is a common source of linker errors: the developer adds `template class Container<int>` and
expects all members to be instantiated, but member templates require separate explicit
instantiation.

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

## Library Design Patterns with Explicit Instantiation

### Pattern 1: The Facade Header

For a template-heavy library, provide a facade header that includes the full template definition but
also declares common explicit instantiations. The library ships both the facade header and a
pre-compiled object file:

```cpp
// ---- mylib_common.h (shipped with the library) ----
#ifndef MYLIB_COMMON_H
#define MYLIB_COMMON_H

#include "mylib.h"  // Full template definitions

// Suppress implicit instantiation for common types
extern template class mylib::Matrix<double>;
extern template class mylib::Matrix<float>;
extern template mylib::Vector<double> mylib::solve(
    const mylib::Matrix<double>&, const mylib::Vector<double>&);

#endif
```

```cpp
// ---- mylib_common.cpp (compiled into libmylib.a) ----
#include "mylib.h"

template class mylib::Matrix<double>;
template class mylib::Matrix<float>;
template mylib::Vector<double> mylib::solve(
    const mylib::Matrix<double>&, const mylib::Vector<double>&);
```

Consumers include `mylib_common.h` and link against `libmylib.a`. They get the full template
interface but pay the instantiation cost only once.

### Pattern 2: Selective Instantiation for Hot Paths

In performance-critical code, you may want explicit instantiation for types used in hot paths but
implicit instantiation for everything else:

```cpp
// ---- fast_path.h ----
#ifndef FAST_PATH_H
#define FAST_PATH_H

#include "processor.h"

// Only suppress implicit instantiation for the hot-path types
extern template class Processor<double>;
extern template class Processor<float>;

#endif
```

```cpp
// ---- fast_path.cpp ----
#include "fast_path.h"

template class Processor<double>;
template class Processor<float>;
```

Rare types (e.g., `Processor<CustomType>`) fall through to implicit instantiation --- you pay the
cost once, in the single translation unit that uses the rare type.

### Pattern 3: Test Isolation with Explicit Instantiation

In test code, you can use explicit instantiation to force the compiler to generate code for types
that might not be exercised by the production code paths. This catches template instantiation errors
at compile time rather than at the call site:

```cpp
// ---- test_instantiations.cpp ----
#include "mylib.h"

// Force instantiation to catch errors in the template body
template class mylib::Parser<std::string>;
template class mylib::Parser<int>;
template class mylib::Serializer<std::vector<double>>;
```

## Explicit Instantiation and Inline Functions

Member functions defined inside the class body are implicitly `inline` [N4950 §11.4.1]. The
`extern template` mechanism interacts with `inline` in a subtle way:

**`inline` functions are exempt from `extern template` suppression** [N4950 §13.9.3]. If a class
template has inline member functions, those functions will still be implicitly instantiated in every
translation unit that uses them, regardless of `extern template` declarations.

```cpp
template <typename T>
class Foo {
public:
    // This is implicitly inline. extern template does NOT suppress its instantiation.
    T get() const { return value_; }

    // This is NOT inline (defined out-of-line). extern template DOES suppress it.
    T compute() const;
private:
    T value_;
};

// extern template class Foo<int>;
// Effect: suppresses Foo<int>::compute() but NOT Foo<int>::get()
```

This means that `extern template` is only effective for templates whose member functions are defined
**out-of-line**. For a class with all inline members, `extern template` provides zero compile-time
benefit.

**Practical guideline:** If you intend to use `extern template` for compile-time reduction, define
non-trivial member functions out-of-line in the header (or in a separate implementation header
included by the `.cpp` file providing the explicit instantiation definition).

## Explicit Instantiation of Variable Templates (C++14+)

Variable templates can also be explicitly instantiated [N4950 §13.9.2]:

```cpp
template <typename T>
constexpr T pi = T(3.1415926535897932385);

// Explicit instantiation definition
template constexpr double pi<double>;
template constexpr float pi<float>;

// Explicit instantiation declaration
extern template constexpr long double pi<long double>;
```

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
must discard --- you get zero benefit and potentially slower link times.

**Mismatched template arguments.** The arguments in the `extern template` declaration must exactly
match those in the explicit instantiation definition. A common mistake is declaring
`extern template void foo<int>()` but defining `template void foo<unsigned int>()` --- these are
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

**Multiple explicit instantiation definitions across translation units.** If two `.cpp` files both
contain `template class Foo<int>;`, the program has undefined behavior [N4950 §13.9.2/2]. The linker
may merge them silently, emit a multiple-definition error, or produce incorrect code. There must be
exactly one explicit instantiation definition per instantiation.

**Explicit instantiation definition with incomplete type.** If the template argument is an
incomplete type at the point of the explicit instantiation definition, the program is ill-formed
[N4950 §13.9.2/4]. For class templates, the full definition of the class must be visible. For
function templates, the full definition of the function must be visible.

**`extern template` does not affect constexpr evaluation.** A `constexpr` function template that is
subject to an `extern template` declaration can still be invoked in a constant expression context.
In such cases, the compiler performs the instantiation internally for constant evaluation purposes,
but does not emit the generated code as an external symbol. This is an exception to the general rule
and does not cause linker errors.

## Explicit Specialization vs. Explicit Instantiation

These two mechanisms are frequently confused but have fundamentally different semantics:

| Aspect                   | Explicit Instantiation                                             | Explicit Specialization                                      |
| :----------------------- | :----------------------------------------------------------------- | :----------------------------------------------------------- |
| **Syntax**               | `template void foo<int>()`                                         | `template&lt;&gt; void foo<int>()`                           |
| **Effect**               | Forces the compiler to generate code from the **primary template** | Provides a **completely new definition** for a specific type |
| **When used**            | To centralize where instantiation happens                          | When the generic algorithm does not work for a specific type |
| **Can change behavior?** | No --- must match primary template semantics                       | Yes --- can have entirely different logic                    |
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
that use a common type benefit from the module system's built-in deduplication --- the BMI ensures
the template is instantiated once and shared across all importers.

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
