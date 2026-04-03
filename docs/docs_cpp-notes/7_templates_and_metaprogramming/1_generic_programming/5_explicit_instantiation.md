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

:::tip Use `extern template` in header files for templates that are instantiated with common types
(e.g., `int`, `double`, `std::string`). Provide explicit instantiation definitions in a single
`.cpp` file. This reduces compilation time and binary size without sacrificing the flexibility of
templates. :::

## See Also

- [Template Instantiation, Monomorphization, and Code Bloat](./1_instantiation.md)
- [Dependent Names and Two-Phase Lookup](./4_dependent_names.md)
