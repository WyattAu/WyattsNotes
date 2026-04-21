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
\mathrm{co\_yield} \; \mathrm{expr} \;\equiv\; \mathrm{co\_await} \; \mathrm{promise.yield\_value}(\mathrm{expr})
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

## Coroutine Generator Mechanism

The `std::generator` type works through a `promise_type` that implements `yield_value`.
Understanding this mechanism helps when writing custom generators or debugging generator behavior.

### How `yield_value` Works

When `co_yield expr` is executed, the coroutine:

1. Evaluates `expr` and passes it to `promise.yield_value(expr)`.
2. The promise stores the value (by reference, copy, or move depending on the signature).
3. `yield_value` returns a suspend-awaiter (typically `std::suspend_always`), suspending the
   coroutine.
4. The caller advances the generator's iterator via `++it`, which resumes the coroutine.
5. Execution continues after the `co_yield` until the next `co_yield`, `co_return`, or end of scope.

```cpp
#include <generator>
#include <iostream>
#include <string>
#include <coroutine>

// Custom generator with logging to show the mechanism
template&lt;typename T&gt;
struct DebugGenerator {
    struct promise_type {
        T current_value;
        std::suspend_always yield_value(T value) {
            std::cout << "    [promise] yield_value(" << value << ")\n";
            current_value = std::move(value);
            return {};
        }

        DebugGenerator get_return_object() {
            std::cout << "    [promise] get_return_object\n";
            return DebugGenerator{Handle::from_promise(*this)};
        }

        std::suspend_always initial_suspend() noexcept { return {}; }
        std::suspend_always final_suspend() noexcept { return {}; }
        void return_void() {}
        void unhandled_exception() { throw; }
    };

    using Handle = std::coroutine_handle&lt;promise_type&gt;;
    Handle handle;

    struct sentinel {};
    struct iterator {
        Handle handle;

        iterator& operator++() {
            std::cout << "    [iterator] ++it (resuming coroutine)\n";
            handle.resume();
            return *this;
        }

        T& operator*() const {
            return handle.promise().current_value;
        }

        bool operator==(sentinel) const {
            return handle.done();
        }
    };

    iterator begin() {
        std::cout << "  [gen] begin() (resuming from initial_suspend)\n";
        handle.resume();
        return iterator{handle};
    }

    sentinel end() { return {}; }
};

DebugGenerator&lt;int&gt; counting_generator(int start, int end) {
    std::cout << "  [coroutine] starting\n";
    for (int i = start; i &lt;= end; ++i) {
        co_yield i;
    }
    std::cout << "  [coroutine] done\n";
}

int main() {
    std::cout << "Creating generator\n";
    auto gen = counting_generator(1, 3);
    std::cout << "Iterating\n";
    for (int val : gen) {
        std::cout << "  Got: " << val << "\n";
    }
}
```

## Generator vs Iterator

| Aspect             | Manual Iterator                                               | `std::generator`                           |
| :----------------- | :------------------------------------------------------------ | :----------------------------------------- |
| State storage      | Manual (member variables)                                     | Automatic (coroutine frame)                |
| Suspend/resume     | Not supported                                                 | Built-in (`co_yield` / `co_await`)         |
| Complexity         | Boilerplate-heavy (`begin`, `end`, `operator++`, `operator*`) | Minimal — just write the body              |
| Infinite sequences | Difficult (need sentinel tricks)                              | Natural (`while(true) { co_yield ...; }`)  |
| Exception safety   | Manual                                                        | Stack unwinding on unhandled exception     |
| Composability      | Limited                                                       | Nest coroutines, use range adaptors        |
| Memory overhead    | `sizeof(iterator)`                                            | Coroutine frame (typically ~100-300 bytes) |

## Recursive Generators

Generators can call themselves recursively. Each recursive invocation creates a new coroutine frame
on the heap. This is useful for tree traversal, combinatorial generation, and recursive descent
parsing.

```cpp
#include &lt;generator&gt;
#include &lt;iostream&gt;
#include &lt;memory&gt;
#include &lt;vector&gt;

struct TreeNode {
    int value;
    std::vector&lt;std::unique_ptr&lt;TreeNode&gt;&gt; children;

    explicit TreeNode(int v) : value{v} {}

    void add_child(int v) {
        children.push_back(std::make_unique&lt;TreeNode&gt;(v));
    }
};

std::generator&lt;int&gt; traverse_dfs(TreeNode* node) {
    if (!node) co_return;
    co_yield node-&gt;value;
    for (auto& child : node-&gt;children) {
        for (int val : traverse_dfs(child.get())) {
            co_yield val;
        }
    }
}

std::generator&lt;int&gt; traverse_bfs(TreeNode* root) {
    if (!root) co_return;
    std::vector&lt;TreeNode*&gt; level{root};
    while (!level.empty()) {
        std::vector&lt;TreeNode*&gt; next;
        for (auto* node : level) {
            co_yield node-&gt;value;
            for (auto& child : node-&gt;children) {
                next.push_back(child.get());
            }
        }
        level = std::move(next);
    }
}

int main() {
    TreeNode root{1};
    root.add_child(2);
    root.children[0]-&gt;add_child(4);
    root.children[0]-&gt;add_child(5);
    root.add_child(3);
    root.children[1]-&gt;add_child(6);
    root.children[1]-&gt;add_child(7);
    root.children[1]-&gt;add_child(8);

    std::cout << "DFS: ";
    for (int val : traverse_dfs(&root)) {
        std::cout << val << " ";
    }
    std::cout << "\n";

    std::cout << "BFS: ";
    for (int val : traverse_bfs(&root)) {
        std::cout << val << " ";
    }
    std::cout << "\n";
}
// Output:
// DFS: 1 2 4 5 3 6 7 8
// BFS: 1 2 3 4 5 6 7 8
```

## Composing Generators

Generators can be composed into pipelines. One generator can consume the output of another, and
range adapters can be inserted between them.

```cpp
#include &lt;generator&gt;
#include &lt;iostream&gt;
#include &lt;string&gt;
#include &lt;string_view&gt;
#include &lt;ranges&gt;

namespace rv = std::views;

std::generator&lt;std::string&gt; lines(std::string_view text) {
    std::size_t start = 0;
    while (start &lt; text.size()) {
        auto end = text.find('\n', start);
        if (end == std::string_view::npos) end = text.size();
        co_yield std::string{text.substr(start, end - start)};
        start = end + 1;
    }
}

std::generator&lt;std::string&gt; non_empty(std::generator&lt;std::string&gt; src) {
    for (auto& line : src) {
        if (!line.empty()) {
            co_yield line;
        }
    }
}

std::generator&lt;std::string&gt; trimmed(std::generator&lt;std::string&gt; src) {
    for (auto& line : src) {
        auto start = line.find_first_not_of(" \t");
        auto end = line.find_last_not_of(" \t");
        if (start == std::string::npos) {
            co_yield "";
        } else {
            co_yield line.substr(start, end - start + 1);
        }
    }
}

int main() {
    std::string_view text =
        "  hello\n"
        "\n"
        "  world  \n"
        "\n"
        "  foo\n";

    std::cout << "Non-empty trimmed lines:\n";
    for (const auto& line : trimmed(non_empty(lines(text)))) {
        std::cout << "  [" << line << "]\n";
    }
}
// Output:
// Non-empty trimmed lines:
//   [hello]
//   [world]
//   [foo]
```

## Generator Performance Characteristics

| Metric                     | Typical Value                                    |
| :------------------------- | :----------------------------------------------- |
| Coroutine frame allocation | 1 heap allocation per `std::generator` creation  |
| Frame size                 | ~100–300 bytes (depends on local variables)      |
| Resume/suspend overhead    | ~10–50ns (comparable to a virtual function call) |
| Memory usage (per element) | $\mathcal{O}(1)$ — no accumulation               |
| Cache behavior             | Poor if frame is large and accessed infrequently |

:::warning Heap allocation. Every `std::generator` coroutine frame is heap-allocated. For
microsecond-latency systems, this can be a concern. C++26 is expected to add `std::generator` with
allocator support to allow custom allocation strategies. :::

## Practical Example: State Machine Generator

```cpp
#include &lt;generator&gt;
#include &lt;iostream&gt;
#include &lt;charconv&gt;
#include &lt;string_view&gt;

enum class TokenKind { Number, Plus, Minus, Star, Slash, End };

struct Token {
    TokenKind kind;
    double value = 0.0;
};

std::generator&lt;Token&gt; tokenize(std::string_view input) {
    std::size_t i = 0;
    auto skip_ws = [&] {
        while (i &lt; input.size() && input[i] == ' ') ++i;
    };

    while (i &lt; input.size()) {
        skip_ws();
        if (i &gt;= input.size()) break;

        char c = input[i];
        if (c &gt;= '0' && c &lt;= '9') {
            double value = 0;
            auto [ptr, ec] = std::from_chars(input.data() + i,
                                              input.data() + input.size(), value);
            if (ec == std::errc{}) {
                i = static_cast&lt;std::size_t&gt;(ptr - input.data());
                co_yield Token{TokenKind::Number, value};
            }
        } else {
            switch (c) {
                case '+': co_yield Token{TokenKind::Plus}; break;
                case '-': co_yield Token{TokenKind::Minus}; break;
                case '*': co_yield Token{TokenKind::Star}; break;
                case '/': co_yield Token{TokenKind::Slash}; break;
            }
            ++i;
        }
    }
    co_yield Token{TokenKind::End};
}

int main() {
    std::string_view expr = "3.14 + 42 * 7";
    std::cout << "Tokens:\n";
    for (const auto& tok : tokenize(expr)) {
        switch (tok.kind) {
            case TokenKind::Number:
                std::cout << "  Number: " << tok.value << "\n";
                break;
            case TokenKind::Plus:
                std::cout << "  Plus\n"; break;
            case TokenKind::Minus:
                std::cout << "  Minus\n"; break;
            case TokenKind::Star:
                std::cout << "  Star\n"; break;
            case TokenKind::Slash:
                std::cout << "  Slash\n"; break;
            case TokenKind::End:
                std::cout << "  End\n"; break;
        }
    }
}
```

## Common Pitfalls

- **Dangling references in generators.** If `co_yield` yields a reference to a local variable that
  is modified before the caller reads it, the caller sees the modified value. Always yield by value
  or ensure the referenced object is stable.
- **Forgetting to advance.** A generator's values are only computed when the iterator is advanced.
  If you create a generator but never iterate it, the coroutine body never executes.
- **Exception propagation.** If an exception is thrown inside a generator coroutine and not caught,
  it propagates to the caller on the next `++it` call. Always handle exceptions or document them.
- **Lifetime of captured references.** If a generator coroutine captures a reference (via lambda or
  reference parameter), the referenced object must outlive the generator.
- **Range adaptor eager materialization.** Some range adaptors (like `std::views::reverse`) may need
  to buffer elements, defeating the lazy evaluation benefit of generators.

:::

:::
