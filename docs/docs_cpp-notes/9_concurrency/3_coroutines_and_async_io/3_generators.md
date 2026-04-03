---
title: Generators (std::generator)
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: generators-std-generator
---

# Generators (`std::generator<T>`) and Synchronous Yielding

This section covers C++23's `std::generator<T>`, `co_yield` as syntactic sugar, lazy evaluation
semantics, a comparison with Python generators, and a complete Fibonacci generator example with
composable pipeline operations.

## `std::generator<T>` (C++23)

C++23 introduced `std::generator<T>` [N4950 §25.4.4], a standard library type that wraps a coroutine
producing a sequence of values via `co_yield`. It is an input iterator whose `operator++` resumes
the coroutine and whose `operator*` returns the yielded value.

The declaration (simplified) [N4950 §25.4.4]:

```cpp
template<class Ref, class V = remove_cvref_t<Ref>, class Allocator = allocator<char>>
class generator : public ranges::view_interface<generator<Ref, V, Allocator>> {
    // ...
};
```

`std::generator<T>` is a **view** — it is lightweight, non-owning, and models `input_range`. Values
are computed lazily on demand.

## `co_yield` as Syntactic Sugar

The expression `co_yield expr` is defined by the standard as [N4950 §8.5.5]:

$$
\text{co\_yield} \; \text{expr} \;\equiv\; \text{co\_await} \; \text{promise.yield\_value}(\text{expr})
$$

This means that `co_yield` requires the promise type to have a `yield_value` method that returns an
awaiter. The `std::generator` promise type internally stores the yielded value and returns a
`std::suspend_always` awaiter to suspend the coroutine until the caller requests the next value.

## Lazy Iteration

The defining characteristic of a generator is **lazy evaluation**. No values are computed until the
iterator is advanced. This makes generators suitable for representing potentially infinite
sequences, large data pipelines, or expensive computations where only a prefix of the results is
needed.

The memory usage of a generator is $\mathcal{O}(d)$ where $d$ is the depth of the coroutine's local
variable state that crosses a suspend point — typically constant and independent of the number of
values produced.

## Comparison with Python Generators

| Feature                     | Python `generator`                        | C++ `std::generator<T>` (C++23)                |
| :-------------------------- | :---------------------------------------- | :--------------------------------------------- |
| Syntax                      | `yield expr`                              | `co_yield expr`                                |
| Return type                 | Implicit                                  | `std::generator<T>` or custom                  |
| Type safety                 | Dynamically typed                         | Statically typed (templates)                   |
| Lazy evaluation             | Yes                                       | Yes                                            |
| Composable via `yield from` | Yes (`yield from gen`)                    | Via nested coroutine calls or range adapters   |
| Exception propagation       | `throw` inside generator caught by caller | Same — exceptions propagate through `co_await` |
| Standard library support    | Built-in since Python 2.2                 | C++23 (`<generator>`)                          |

## Complete Example: Fibonacci Generator with `std::generator`

```cpp
#include <generator>
#include <iostream>
#include <cstdint>

std::generator<std::uint64_t> fibonacci() {
    std::uint64_t a = 0, b = 1;
    while (true) {
        co_yield a;
        auto next = a + b;
        a = b;
        b = next;
    }
}

std::generator<std::uint64_t> take(std::generator<std::uint64_t> src, std::size_t n) {
    std::size_t count = 0;
    for (auto val : src) {
        if (count >= n) co_return;
        co_yield val;
        ++count;
    }
}

std::generator<std::uint64_t> even_fibonacci() {
    for (auto val : fibonacci()) {
        if (val > 4'000'000) co_return;
        if (val % 2 == 0) co_yield val;
    }
}

int main() {
    std::cout << "First 15 Fibonacci numbers:\n";
    for (auto val : take(fibonacci(), 15)) {
        std::cout << "  " << val << "\n";
    }

    std::cout << "\nEven Fibonacci numbers under 4,000,000:\n";
    std::uint64_t sum = 0;
    for (auto val : even_fibonacci()) {
        std::cout << "  " << val << "\n";
        sum += val;
    }
    std::cout << "Sum: " << sum << "\n";
}
```

Output:

```
First 15 Fibonacci numbers:
  0
  1
  1
  2
  3
  5
  8
  13
  21
  34
  55
  89
  144
  233
  377

Even Fibonacci numbers under 4,000,000:
  0
  2
  8
  34
  144
  610
  2584
  10946
  46368
  196418
  832040
  3524578
Sum: 4613732
```

:::tip `std::generator` is composable with C++20 ranges. You can pipe a generator into
`std::views::filter`, `std::views::transform`, etc. However, be aware that range adaptors are eager
on the iteration step — each `++it` call on the adapted view will advance the underlying generator
by one element. :::

## See Also

- [Stackless Coroutine Frames and Heap Allocation](./1_coroutine_frames.md)
- [Coroutine Handle, Promise Type, and Awaiter](./2_promise_awaiter.md)
- [Task Scheduling and Executors](./4_task_scheduling.md)
