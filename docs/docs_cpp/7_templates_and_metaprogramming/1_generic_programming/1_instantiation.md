---
title: Template Instantiation, Monomorphization, and Code Bloat
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: template-instantiation-monomorphization-code-bloat
---

# Template Instantiation, Monomorphization, and Code Bloat

Templates are blueprints the compiler uses to generate type-specific code on demand. This process —
called **instantiation** — produces optimized, type-specific functions and classes through
**monomorphization**, but can lead to significant code bloat if not managed carefully.

## Function Templates and Class Templates

A **function template** is a blueprint the compiler uses to generate type-specific functions on
demand [N4950 S13.7]. A **class template** similarly generates type-specific classes [N4950
S13.7.3]. The process of generating concrete code from a template is called **instantiation**.

```cpp
#include <iostream>
#include <vector>
#include <string>

// Function template [N4950 S13.7]
template <typename T>
T max_of(T a, T b) {
    return (a > b) ? a : b;
}

// Class template [N4950 S13.7.3]
template <typename T, typename Allocator = std::allocator<T>>
class Stack {
public:
    void push(const T& value) { data_.push_back(value); }
    void pop() { data_.pop_back(); }
    const T& top() const { return data_.back(); }
    bool empty() const { return data_.empty(); }
private:
    std::vector<T, Allocator> data_;
};

int main() {
    int x = max_of(3, 7);            // instantiates max_of<int>
    double y = max_of(1.5, 2.3);     // instantiates max_of<double>
    std::string s = max_of(std::string{"hello"}, std::string{"world"});

    Stack<int> si;
    si.push(42);
    std::cout << si.top() << "\n";   // prints 42

    Stack<std::string> ss;
    ss.push("generic");
    std::cout << ss.top() << "\n";   // prints "generic"
}
```

The compiler performs **monomorphization**: for each unique set of template arguments used, it
generates a separate copy of the template code. If you call `max_of<int>`, `max_of<double>`, and
`max_of<std::string>`, the compiler produces three distinct functions. This is a form of
compile-time polymorphism --- there is no virtual dispatch, no vtable, and (when inlined) no call
overhead at all.

## Two-Phase Name Lookup

The C++ standard specifies **two-phase name lookup** for templates [N4950 S13.8.3]:

1. **Phase 1 (definition time):** Non-dependent names are looked up when the template is _defined_.
   A name is **non-dependent** if its meaning does not depend on a template parameter.
2. **Phase 2 (instantiation time):** Dependent names (those that _do_ depend on a template
   parameter) are looked up when the template is _instantiated_, using both the declaration context
   and the instantiation context.

```cpp
#include <iostream>

void g(int) { std::cout << "global g(int)\n"; }

template <typename T>
void f(T x) {
    // Phase 1: 'g' is non-dependent -> looked up NOW
    // This calls global g(int) even if a better match exists at instantiation site.
    g(42);
    // Phase 2: 'x' is dependent -> argument-dependent lookup (ADL) at instantiation
    h(x);  // 'h' is dependent: looked up when f<T> is instantiated
}

void g(double) { std::cout << "global g(double)\n"; }

struct S {};
void h(S) { std::cout << "h(S)\n"; }

int main() {
    f(42);       // prints "global g(int)" -- phase-1 binding
    f(3.14);     // STILL prints "global g(int)" -- overload resolution was locked at phase 1
    f(S{});      // prints "global g(int)" then "h(S)"
}
```

:::warning
A non-dependent call like `g(42)` inside a template is bound at definition time [N4950
S13.8.3]. If a better overload of `g` is declared _after_ the template definition, it will **not**
be found. This is the single most surprising aspect of two-phase lookup and a frequent source of
bugs.
:::

### Formal Justification for Two-Phase Lookup

The standard mandates two-phase lookup [N4950 S13.8.3] to preserve a well-defined separation between
the template definition context and the instantiation context. The formal reasoning proceeds from
two requirements:

1. **Early error detection.** Non-dependent names contain no template parameters, so the compiler
   can and must verify their validity at the point of definition. Deferring these checks would allow
   semantic errors to propagate silently until instantiation, making templates unreliable as
   interfaces. Per [N4950 S13.8.3/2]: "If a name does not depend on a template-parameter, the name
   is looked up, the lookup is bound, and the semantic constraints are checked at the point at which
   the name is used."

2. **Late binding for type-dependent behavior.** Dependent names genuinely cannot be resolved at
   definition time. The expression `T::value` has no meaning until `T` is known, and `h(x)` where
   `x` has dependent type `T` may resolve to different overloads depending on what `T` is. Per
   [N4950 S13.8.3/6]: "If a name is dependent, the lookup is postponed until the template-parameter
   list is known."

**Proof that non-dependent names are locked at phase 1.** Consider the following reasoning by
contradiction. Suppose a non-dependent call `g(42)` inside a template `f&lt;T&gt;` were not bound
until instantiation. Then the meaning of `f&lt;int&gt;` and `f&lt;double&gt;` could differ based on
overloads of `g` declared between the two instantiation points. This would make the template's
semantics depend on the order of declarations in the instantiation context --- an undesirable
property for a language that requires separate compilation. The standard therefore locks
non-dependent names at definition time, ensuring that the template has a single, well-defined
meaning regardless of where it is instantiated.

```cpp
#include <iostream>

void process(int x) { std::cout << "process(int): " << x << "\n"; }

template <typename T>
void handler(T x) {
    process(42);   // Phase 1: binds process(int) RIGHT NOW
    process(x);    // Phase 2: dependent -- looked up at instantiation
}

void process(double x) { std::cout << "process(double): " << x << "\n"; }
void process(char x)   { std::cout << "process(char): " << x << "\n"; }

int main() {
    handler(3.14);   // prints "process(int): 42" then "process(double): 3.14"
    // process(42) was locked to process(int) at definition time.
    // process(x) was deferred and finds process(double) at instantiation.
    handler('A');    // prints "process(int): 42" then "process(char): A"
}
```

### Classifying Dependent and Non-Dependent Names

A name is **dependent** if and only if it falls into one of the following categories [N4950
S13.8.3]. This classification determines when the compiler performs name lookup and what
declarations are visible.

| Category                                                   | Example                       | Dependent?    | Lookup Phase |
| ---------------------------------------------------------- | ----------------------------- | ------------- | ------------ |
| Simple unqualified name, no template param involvement     | `x`, `std::cout`              | No            | Phase 1      |
| Qualified name where qualifier is non-dependent            | `std::vector&lt;int&gt;`      | No            | Phase 1      |
| Qualified name where qualifier depends on a template param | `T::value`, `T::iterator`     | Yes           | Phase 2      |
| Unqualified function call with a dependent argument        | `h(x)` where `x` has type `T` | Yes (via ADL) | Phase 2      |
| Unqualified function call with all non-dependent args      | `g(42)`                       | No            | Phase 1      |
| Member access through a dependent object or type           | `this->foo()`, `t.bar()`      | Yes           | Phase 2      |
| Type-dependent expression in `sizeof` / `decltype`         | `sizeof(T)`, `decltype(x)`    | Yes           | Phase 2      |
| `throw` expression with dependent type                     | `throw T{}`                   | Yes           | Phase 2      |
| `new` expression with dependent type                       | `new T()`                     | Yes           | Phase 2      |

The critical distinction is between the first two rows (non-dependent, phase 1) and everything else.
Names in the first two rows are resolved once and permanently at definition time. Names in the
remaining rows are deferred to instantiation time, where they benefit from declarations visible at
the point of instantiation.

## The Instantiation Point

The **point of instantiation (POI)** [N4950 S13.8.2] is the location in the source code where the
compiler logically performs instantiation. Understanding the POI is critical because it determines
which declarations are visible during instantiation and therefore which overload of a function gets
called, which specialization gets selected, and which type aliases are resolved.

For a **function template specialization**, the POI is defined recursively [N4950 S13.8.2/2]:

1. The POI of a function template specialization is the **nearest enclosing namespace scope**
   **after** the declaration that triggers the instantiation.
2. If the instantiation is triggered from within another template, the POI is nested within the POI
   of the enclosing template.

For a **class template specialization**, the POI is the first point at which the class is referenced
in a way that requires a complete type [N4950 S13.8.2/4].

```cpp
#include <iostream>
#include <string>

template <typename T>
std::string type_name() {
    return "unknown";
}

// This full specialization is defined AFTER the primary template
// but BEFORE the point of use. It WILL be found.
template <>
std::string type_name<int>() {
    return "int";
}

void trigger() {
    std::cout << type_name<int>() << "\n";    // POI for type_name<int> is here
    std::cout << type_name<double>() << "\n"; // POI for type_name<double> is here
}

// This specialization is defined AFTER the POI of type_name<double>.
// Per [N4950 S13.8.2/6], this is ill-formed (no diagnostic required).
template <>
std::string type_name<double>() {
    return "double";
}

int main() {
    trigger();
    // Output: "int" then "unknown"
    // type_name<double> specialization is defined after its POI, so it is not used.
    // The behavior is undefined -- no diagnostic is required.
}
```

:::warning
Defining a specialization after its POI is **ill-formed, no diagnostic required** [N4950
S13.8.2/6]. The compiler may silently use the primary template instead. This is one of the most
insidious bugs in template code: the program compiles, links, and runs, but produces wrong results.
Always define specializations before any potential point of use.
:::

### Instantiation Point Bugs

The POI rules interact with header inclusion order in subtle ways. A specialization declared in a
header that is included after the header containing the template definition may or may not be
visible at the POI, depending on the inclusion order in each translation unit:

```cpp
// ===== template_def.hpp =====
#ifndef TEMPLATE_DEF_HPP
#define TEMPLATE_DEF_HPP
#include <string>

template <typename T>
struct Serializer {
    std::string name() const { return "generic"; }
};

#endif

// ===== int_specialization.hpp =====
#ifndef INT_SPECIALIZATION_HPP
#define INT_SPECIALIZATION_HPP
#include "template_def.hpp"

template <>
struct Serializer<int> {
    std::string name() const { return "int"; }
};

#endif

// ===== user.cpp =====
// BUG: template_def.hpp is included before int_specialization.hpp
#include "template_def.hpp"

void early_use() {
    Serializer<int> s;
    // POI for Serializer<int> is after this declaration.
    // int_specialization.hpp has not been included yet,
    // so the primary template is used, not the specialization!
}

#include "int_specialization.hpp"

void late_use() {
    Serializer<int> s;
    // The specialization is now visible, but the POI was already
    // established in early_use(). The behavior depends on the compiler.
}
```

The fix is to include all specializations before the first use. This is why standard library
implementations define specializations of type traits in the same header as the primary template
[N4950 S20.15].

## Code Bloat from Implicit Instantiation

Every distinct set of template arguments produces a new instantiation. Consider:

```cpp
#include <vector>
#include <list>
#include <deque>

template <typename T, typename Container = std::vector<T>>
class PriorityQueue {
    Container data_;
public:
    void insert(const T& v) { data_.push_back(v); }
    bool empty() const { return data_.empty(); }
};

void instantiate_many() {
    PriorityQueue<int, std::vector<int>>    a;
    PriorityQueue<int, std::list<int>>      b;
    PriorityQueue<int, std::deque<int>>     c;
    PriorityQueue<double, std::vector<double>> d;
}
```

This generates **four** distinct class types, each with its own `insert` and `empty` functions. For
large templates used across many translation units, this can cause significant code bloat.

### Template Bloat Mitigation Strategies

There are several well-established techniques for reducing template bloat in large codebases:

**1. `extern template` declarations.** Explicitly suppress implicit instantiation in all but one
translation unit [N4950 S13.9.3]:

```cpp
// In header:
template <typename T>
class HeavyProcessor {
    std::vector<T> data_;
public:
    void process(const T& v) { data_.push_back(v); }
    T result() const;
};

template <typename T>
T HeavyProcessor<T>::result() const {
    T acc{};
    for (const auto& x : data_) acc += x;
    return acc;
}

extern template class HeavyProcessor<int>;
extern template class HeavyProcessor<double>;

// In exactly one .cpp file:
// template class HeavyProcessor<int>;
// template class HeavyProcessor<double>;
```

**2. Type erasure for shared behavior.** When multiple instantiations share identical logic, extract
the common code into a non-templated base class. The type-specific layer is thin:

```cpp
#include <cstddef>
#include <cstring>
#include <cstdlib>

class RawBuffer {
protected:
    void* data_ = nullptr;
    std::size_t size_ = 0;
    std::size_t capacity_ = 0;
    std::size_t elem_size_ = 0;

    void grow() {
        std::size_t new_cap = capacity_ ? capacity_ * 2 : 4;
        void* new_data = std::malloc(new_cap * elem_size_);
        if (data_) {
            std::memcpy(new_data, data_, size_ * elem_size_);
            std::free(data_);
        }
        data_ = new_data;
        capacity_ = new_cap;
    }

    ~RawBuffer() { std::free(data_); }
};

template <typename T>
class TypedBuffer : private RawBuffer {
public:
    TypedBuffer() { elem_size_ = sizeof(T); }

    void push(const T& v) {
        if (size_ == capacity_) grow();
        new (static_cast<char*>(data_) + size_ * elem_size_) T(v);
        ++size_;
    }

    const T& operator[](std::size_t i) const {
        return *static_cast<const T*>(
            static_cast<const char*>(data_) + i * elem_size_);
    }

    std::size_t size() const { return size_; }
};
```

**3. Selective instantiation via out-of-line definitions.** The compiler only instantiates member
functions that are actually called, provided the definitions are outside the class body [N4950
S13.7.5/1]. Moving large member function bodies out of the class can dramatically reduce the number
of instantiations for types that are only partially used:

```cpp
template <typename T>
class Selective {
public:
    void frequently_used();
    void rarely_used();
    void always_inlined() { /* one-liner: instantiated with the class */ }
};

template <typename T>
void Selective<T>::frequently_used() {
    /* large body: only instantiated if called */
}

template <typename T>
void Selective<T>::rarely_used() {
    /* large body: only instantiated if called */
}
```

## Implicit vs Explicit Instantiation

There are three ways templates get instantiated [N4950 S13.9.2]:

1. **Implicit instantiation** -- occurs when the code uses a template specialization (the default).
2. **Explicit instantiation** -- `template class Stack<int>;` forces the compiler to generate the
   specialization in that translation unit.
3. **Explicit instantiation declaration** (`extern template`) -- `extern template class Stack<int>;`
   suppresses implicit instantiation; the specialization must be provided elsewhere.

```cpp
#include <iostream>
#include <vector>
#include <string>

template <typename T>
class Container {
    std::vector<T> data_;
public:
    void push(const T& v) { data_.push_back(v); }
    void pop() { data_.pop_back(); }
    T& back() { return data_.back(); }
    std::size_t size() const { return data_.size(); }
};

// Implicit instantiation: happens automatically when used
void implicit_example() {
    Container<int> ci;
    ci.push(42);
    // Compiler generates Container<int> here
}

// Explicit instantiation definition: forces generation NOW [N4950 S13.9.2]
template class Container<double>;
template class Container<std::string>;

// Explicit instantiation declaration: suppresses implicit instantiation [N4950 S13.9.3]
extern template class Container<long>;
// If another TU provides: template class Container<long>;
// then this TU uses that instantiation instead of generating its own.
```

Implicit instantiation is the most common source of code bloat because every translation unit that
uses `Container<int>` independently generates the same machine code. The linker then picks one copy
and discards the rest, but all TUs still paid the compilation cost. See
[Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md) for the full treatment
of this technique.

### Implicit vs Explicit Instantiation Trade-offs

| Aspect                  | Implicit                             | Explicit (`template class`)      | `extern template`                        |
| ----------------------- | ------------------------------------ | -------------------------------- | ---------------------------------------- |
| When it occurs          | At first use in each TU              | At the declaration site          | Suppressed; provided externally          |
| Compilation cost per TU | Full cost in each TU                 | Full cost in one TU only         | Zero cost in this TU                     |
| Symbol linkage          | Weak (COMDAT)                        | Strong (global)                  | External reference                       |
| ODR safety              | Risk: different macro/include states | Safe: one canonical definition   | Safe: one canonical definition           |
| Flexibility             | Any type, anywhere                   | Must enumerate types upfront     | Must enumerate types upfront             |
| Build time impact       | High (scales with TU count)          | Low (one TU does the work)       | Low (one TU does the work)               |
| Typical use case        | Most application code                | Library headers with known types | Heavy templates in shared libs           |
| Header vs source        | Header only                          | One TU, header declares `extern` | Header declares `extern`, one TU defines |

## How Compilers Implement Template Instantiation

Compilers use one of two strategies for template instantiation [N4950 S13.9]:

- **Greedy (at compile time):** Instantiate every specialization encountered during compilation. GCC
  and Clang use this approach. Each TU emits a weak symbol for each specialization; the linker
  deduplicates.
- **Demand-driven (at link time):** Only instantiate what is actually needed. MSVC uses a variant of
  this approach with incremental compilation.

The greedy approach means that if 50 translation units all include `#include <vector>` and use
`std::vector<int>`, all 50 TUs compile the full `std::vector<int>` implementation. The linker picks
one copy via COMDAT/weak linkage. Compilation time scales linearly with the number of TUs and the
complexity of the templates they use.

```cpp
// Example: observe code bloat with a heavy template
#include <vector>
#include <string>
#include <iostream>

// A deliberately complex template to amplify bloat
template <typename T>
class HeavyContainer {
    std::vector<T> data_;
public:
    void push(const T& v) { data_.push_back(v); }
    void pop() { data_.pop_back(); }
    T& back() { return data_.back(); }
    T& front() { return data_.front(); }
    const T& back() const { return data_.back(); }
    const T& front() const { return data_.front(); }
    std::size_t size() const { return data_.size(); }
    bool empty() const { return data_.empty(); }
    void clear() { data_.clear(); }
    void reserve(std::size_t n) { data_.reserve(n); }
    void shrink_to_fit() { data_.shrink_to_fit(); }
    void resize(std::size_t n) { data_.resize(n); }
    void swap(HeavyContainer& other) { data_.swap(other.data_); }
};

// Each of these generates a separate class with 12 member functions.
void use_many_types() {
    HeavyContainer<int> a;
    HeavyContainer<double> b;
    HeavyContainer<std::string> c;
    HeavyContainer<long> d;
    HeavyContainer<unsigned> e;
    HeavyContainer<float> f;
    HeavyContainer<short> g;
    HeavyContainer<char> h;
    // 8 types x 12 member functions = 96 function instantiations
}
```

### Template Instantiation in Symbol Tables

When a compiler instantiates a template, it generates a mangled symbol name that encodes the
template arguments. On Itanium C++ ABI targets (GCC, Clang on Linux/macOS), the mangling follows the
rules in the [Itanium C++ ABI](https://itanium-cxx-abi.github.io/cxx-abi/abi.html). For example,
`std::vector&lt;int&gt;::push_back(const int&)` produces the mangled name
`_ZNSt6vectorIiSaIiEE9push_backERKi`.

Key implementation details:

1. **Weak linkage (COMDAT).** On ELF platforms (Linux), each TU emits template instantiations as
   weak symbols in COMDAT groups. The linker selects one copy and discards the rest. This is the
   mechanism that makes implicit instantiation work correctly across TUs without ODR violations,
   provided all TUs see the same template definition.

2. **Strong linkage for explicit instantiations.** An explicit instantiation definition emits a
   strong (global) symbol. If two TUs both contain `template class Foo&lt;int&gt;;`, the linker
   reports a duplicate symbol error. This is by design: explicit instantiation is a promise that
   this TU provides the canonical definition.

3. **Incremental compilation (MSVC).** MSVC can defer template instantiation to link time. This
   allows MSVC to avoid re-instantiating templates that have not changed, but can lead to different
   ODR behavior compared to the eager model. A specialization added between compilation and linking
   may be picked up by MSVC but not by GCC/Clang.

4. **Per-TU instantiation caching.** Within a single TU, the compiler instantiates each unique
   `Template&lt;Args...&gt;` combination exactly once. If `std::vector&lt;int&gt;` is used in ten
   different functions within the same TU, the compiler instantiates it once and reuses the result.

```cpp
// Demonstrate weak vs strong linkage behavior
// Compile: g++ -c tu1.cpp tu2.cpp && g++ tu1.o tu2.o

// tu1.cpp
#include <vector>

template <typename T>
class Shared {
public:
    int value = 42;
};

template class Shared<int>;  // Strong symbol

void use_tu1() {
    std::vector<int> v;     // Weak symbol: emitted by every TU that uses it
}

// tu2.cpp
#include <vector>

template <typename T>
class Shared {
public:
    int value = 99;
};

// template class Shared<int>;  // Uncommenting causes linker error:
                                // duplicate symbol for Shared<int>

void use_tu2() {
    std::vector<int> v;     // Weak symbol: deduplicated by linker
}
```

## Debug Builds vs Release Builds for Templates

Template code has a significant asymmetry between debug and release builds:

| Aspect        | Debug (`-O0`)                                      | Release (`-O2` / `-O3`)                   |
| ------------- | -------------------------------------------------- | ----------------------------------------- |
| Inline depth  | None (all calls are real function calls)           | Aggressive (most calls inlined)           |
| Code size     | Large (every specialization emits a separate copy) | Small after inlining + dedup              |
| Compile time  | Slow (every specialization fully compiled)         | Slow compilation, but linker deduplicates |
| Debuggability | Easy: each specialization has a symbol             | Hard: inlined code has no frame           |

In debug builds, every template specialization produces a full function with a mangled symbol name.
A single `std::vector<int>::push_back` call is a real call instruction. In release builds with
optimization, the compiler inlines most small template functions, and the linker removes unused
instantiations via LTO (Link-Time Optimization).

```cpp
#include <vector>
#include <numeric>

// This function's body will be inlined away in release builds
template <typename T>
T sum(const std::vector<T>& v) {
    T result{};
    for (const auto& x : v) result += x;
    return result;
}

int main() {
    std::vector<int> v(1000);
    std::iota(v.begin(), v.end(), 1);
    return sum(v);  // Release: compiled to a single tight loop
}
```

Compile with `-O0 -S` to see the full template instantiation machinery, then with `-O2 -S` to see
how it collapses to a tight loop. The difference can be 10-100x in generated code size for
template-heavy codebases.

## Common Instantiation Errors and How to Read Them

Template instantiation errors are notoriously verbose because the compiler prints the full
instantiation stack trace. The key is to read from the **bottom up** -- the innermost (deepest)
instantiation is where the actual error occurred.

```cpp
#include <vector>
#include <mutex>

template <typename T>
class Container {
    std::vector<T> data_;
public:
    void push(const T& v) {
        data_.push_back(v);
        // If T is not copyable/movable, this line triggers the error.
    }
};

int main() {
    Container<std::mutex> c;      // std::mutex is neither copyable nor movable
    std::mutex m;
    c.push(m);                     // ERROR: copy constructor deleted
}
```

A typical error from this code:

```
error: use of deleted function 'std::mutex::mutex(const std::mutex&)'
   15 |         data_.push_back(v);
      |                       ^
note: in instantiation of member function 'Container<std::mutex>::push' requested here
   20 |     c.push(m);
      |         ^
note: in instantiation of class 'Container<std::mutex>' requested here
   19 |     Container<std::mutex> c;
      |     ^
```

The reading strategy: start from the first error message, then check the `note: in instantiation of`
lines from bottom to top. The deepest `note` is where the template was first requested; the
shallowest is where the actual semantic error was detected.

### Missing `typename` for Dependent Types

```cpp
#include <vector>

template <typename T>
class Wrapper {
    T::value_type x;   // ERROR: need 'typename' before T::value_type
    // Correct: typename T::value_type x;
};
```

The compiler cannot determine whether `T::value_type` is a type or a static member at phase 1 of
lookup. The `typename` keyword tells the compiler "this is a type" [N4950 S13.8.1]. See
[Dependent Names and Two-Phase Lookup](./4_dependent_names.md) for the full treatment.

### SFINAE vs Hard Errors

Not all errors during instantiation are SFINAE-friendly. Only failures in the **immediate context**
of substitution are SFINAE [N4950 S13.9.1]. Errors in the body of a template function are hard
errors:

```cpp
#include <type_traits>
#include <iostream>

template <typename T>
auto safe_value(T t)
    -> decltype(T::nonexistent_member) {  // SFINAE: substitution failure
    return T::nonexistent_member;
}

template <typename T>
auto safe_value(T t)
    -> decltype(t + 1) {                  // SFINAE: substitution failure if T+1 is ill-formed
    return t + 1;
}

template <typename T>
auto safe_value(T t) {
    return T::nonexistent_member;  // HARD ERROR: not in immediate context
}

int main() {
    std::cout << safe_value(42) << "\n";  // ERROR: hard error in third overload
}
```

## Force-Inlining Template Code

For performance-critical template code, you can force inlining with compiler attributes. This is
most useful when profiling shows template function call overhead (typically only in debug builds):

```cpp
#include <vector>
#include <cstdint>

#if defined(__GNUC__) || defined(__clang__)
#define FORCE_INLINE __attribute__((always_inline)) inline
#elif defined(_MSC_VER)
#define FORCE_INLINE __forceinline
#else
#define FORCE_INLINE inline
#endif

// Force-inline a hot template function
template <typename T>
FORCE_INLINE T clamp(T value, T lo, T hi) {
    return (value < lo) ? lo : (value > hi) ? hi : value;
}

template <typename T>
FORCE_INLINE T safe_divide(T num, T den) {
    return (den != 0) ? (num / den) : T{};
}

int main() {
    std::vector<int> v = {10, 20, 30, 40, 50};
    int result = 0;
    for (auto x : v) {
        result += clamp(safe_divide(x, 20), 0, 2);
    }
    return result;
}
```

:::warning
`__attribute__((always_inline))` overrides the compiler's inlining heuristics. Use it
only when profiling confirms the overhead, typically for tiny leaf functions in hot loops. Overusing
it increases code size and can degrade instruction cache performance.
:::

## Common Pitfalls

### ODR Violations from Implicit Instantiation

If two translation units implicitly instantiate the same template with the same arguments but with
different definitions visible (due to conditional includes or macro differences), you get an ODR
(One Definition Rule) violation. The linker may silently pick one or produce confusing errors:

```cpp
// tu1.cpp
#define USE_FAST_PATH 1
#include "template_lib.h"  // might define MyTemplate<T> differently based on USE_FAST_PATH
void use_in_tu1() { MyTemplate<int> obj; }

// tu2.cpp
#define USE_FAST_PATH 0
#include "template_lib.h"
void use_in_tu2() { MyTemplate<int> obj; }
// ODR violation: MyTemplate<int> has two different definitions
```

The fix is to ensure template definitions are identical across all TUs, typically by keeping them in
headers with no conditional compilation affecting the template body.

### Implicit Instantiation of Unused Members

Implicitly instantiating a class template instantiates **all member declarations** (but not
definitions of non-inline member functions). This can cause cascading errors if a member's return
type depends on a type that does not satisfy a requirement:

```cpp
#include <vector>

template <typename T>
class DataStore {
    std::vector<T> data_;
public:
    void add(const T& v) { data_.push_back(v); }
    // This declaration is instantiated even if never called:
    T& get(std::size_t i);
    // If T = void, this declaration is ill-formed because "void&" is not a valid type.
};

// DataStore<void> ds;  // ERROR at declaration, not at use
```

### Instantiation Point and Name Visibility

The POI rules mean that the order of header includes matters for template specializations. A common
mistake is defining a specialization in a `.cpp` file and expecting it to be used in other TUs:

```cpp
// ===== library.hpp =====
template <typename T>
struct Trait { static constexpr int value = 0; };

// ===== library.cpp =====
#include "library.hpp"
template <> struct Trait<int> { static constexpr int value = 42; };

// ===== user.cpp =====
#include "library.hpp"

int main() {
    int x = Trait<int>::value;  // Gets 0, NOT 42!
    // The specialization in library.cpp is not visible here.
    // The POI for Trait<int> is after this declaration in user.cpp,
    // and the specialization from library.cpp is in a different TU.
}
```

The standard permits but does not require the compiler to use specializations from other TUs [N4950
S13.8.2/7]. In practice, no major compiler does so. Specializations must be declared in every TU
that uses them, which means they must go in headers.

### Hidden Instantiation Dependencies

Templates can create hidden compilation dependencies. Including a header that uses a heavy template
forces the including TU to compile that template, even if the heavy template is not directly used by
the includer:

```cpp
// heavy.hpp
#include <map>
#include <string>
#include <vector>

template <typename T>
class HeavyAnalysis {
    std::map<std::string, std::vector<T>> data_;
public:
    void analyze(const std::string& key, const T& value) {
        data_[key].push_back(value);
    }
    T aggregate() const {
        T result{};
        for (const auto& [k, v] : data_)
            for (const auto& x : v)
                result += x;
        return result;
    }
};

// user.cpp
#include "heavy.hpp"
// This TU now pays the full compilation cost of HeavyAnalysis
// for every type used within heavy.hpp, even if user.cpp itself
// never instantiates HeavyAnalysis.
```

## See Also

- [Argument Deduction](./2_argument_deduction.md)
- [Explicit and Partial Specialization](./3_specialization.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
- [Explicit Instantiation and Extern Templates](./5_explicit_instantiation.md)
- [Parameter Packs and Variadic Templates](../3_compile_time_computation/1_parameter_packs.md)
