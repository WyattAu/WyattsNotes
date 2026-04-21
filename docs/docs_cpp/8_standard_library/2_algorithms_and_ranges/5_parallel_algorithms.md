---
title: Parallel Algorithms
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: parallel-algorithms
---

## Parallel Algorithms and Execution Policies

C++17 introduced execution policies that enable many standard algorithms to run in parallel across
multiple threads. This section covers the three standard execution policies, which algorithms
support parallelism, data race pitfalls, the critical difference between `std::reduce` and
`std::accumulate`, and practical parallel pipeline patterns.

### Execution Policies

C++17 introduced **execution policies** as the first argument to many standard algorithms, enabling
parallel and vectorized execution [N4950 §25.5]. The three standard policies are defined in
`<execution>`:

| Policy                      | Type                  | Behavior [N4950 §25.5.2]                                     |
| --------------------------- | --------------------- | ------------------------------------------------------------ |
| `std::execution::seq`       | Sequenced             | Sequential execution (default if no policy specified)        |
| `std::execution::par`       | Parallel              | May execute in multiple threads                              |
| `std::execution::par_unseq` | Parallel + Vectorized | May execute in multiple threads AND vectorize within threads |

#### Formal Semantics of Execution Policies

The standard defines execution policies via the `is_execution_policy` type trait [N4950 §25.5.1] and
specifies constraints on element access functions:

- **`seq`**: The element access function is invoked sequentially in the calling thread. The
  invocation order is the same as the sequential overload. No concurrency, no vectorization.

- **`par`**: The element access function may be invoked concurrently from multiple threads. The
  standard imposes no ordering guarantee on invocations. The implementation may partition the input
  range and process each partition in a separate thread. Data races in the user function are the
  caller's responsibility.

- **`par_unseq`**: In addition to `par` semantics, the element access function may be vectorized ---
  that is, multiple elements may be processed within a single thread using SIMD instructions (e.g.,
  SSE, AVX). This imposes an additional constraint: **the function must not acquire locks, call
  blocking APIs, or access thread-local storage**, because the same thread may be processing
  multiple elements simultaneously via SIMD lanes [N4950 §25.5.1].

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <chrono>

int main() {
    constexpr std::size_t N = 10'000'000;
    std::vector<int> v(N);
    for (std::size_t i = 0; i < N; ++i) {
        v[i] = static_cast<int>(N - i);  // Reverse-sorted
    }

    // Sequential sort [N4950 §25.5.2]
    auto start = std::chrono::high_resolution_clock::now();
    std::vector<int> v_seq = v;
    std::sort(std::execution::seq, v_seq.begin(), v_seq.end());
    auto end = std::chrono::high_resolution_clock::now();
    auto seq_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    // Parallel sort [N4950 §25.5.2]
    start = std::chrono::high_resolution_clock::now();
    std::vector<int> v_par = v;
    std::sort(std::execution::par, v_par.begin(), v_par.end());
    end = std::chrono::high_resolution_clock::now();
    auto par_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    std::cout << "Sequential sort: " << seq_ms << " ms\n";
    std::cout << "Parallel sort:   " << par_ms << " ms\n";
    std::cout << "Speedup:         " << static_cast<double>(seq_ms) / par_ms << "x\n";

    // Verify correctness
    std::cout << "seq sorted: " << std::ranges::is_sorted(v_seq) << "\n";
    std::cout << "par sorted: " << std::ranges::is_sorted(v_par) << "\n";
}
```

### `std::sort`, `std::for_each`, and `std::reduce` with Parallel Policies

Several standard algorithms accept execution policies [N4950 §25.7]:

- **`std::sort`** [N4950 §25.7.7]: Parallel sort using `par` or `par_unseq`
- **`std::for_each`** [N4950 §25.7.1]: Apply function to each element (parallel with `par`)
- **`std::reduce`** [N4950 §25.7.4]: Parallel reduction (like `accumulate` but with no guaranteed
  order)
- **`std::transform`** [N4950 §25.7.7]: Apply function in parallel
- **`std::count` / `std::count_if`** [N4950 §25.7.1]: Count in parallel
- **`std::find` / `std::find_if`** [N4950 §25.7.2]: Search in parallel
- **`std::copy` / `std::transform`** [N4950 §25.7.7]: Copy/transform in parallel

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <string>

int main() {
    std::vector<int> data(10'000'000);
    for (std::size_t i = 0; i < data.size(); ++i) {
        data[i] = static_cast<int>(i + 1);
    }

    // Parallel for_each [N4950 §25.7.1]
    std::atomic<int> counter{0};
    std::for_each(std::execution::par, data.begin(), data.end(),
        [&counter](int x) {
            // NOTE: counter increment is atomic to avoid data race
            counter.fetch_add(1, std::memory_order_relaxed);
        });
    std::cout << "Processed " << counter.load() << " elements (parallel for_each)\n";

    // Parallel reduce [N4950 §25.7.4]
    // Unlike accumulate, reduce has no guaranteed order of combination
    // This means the binary operation must be commutative and associative
    // for well-defined results
    auto sum = std::reduce(
        std::execution::par,
        data.begin(), data.end(),
        0L  // initial value (use long to avoid overflow)
    );
    std::cout << "Sum (reduce): " << sum << "\n";

    // Parallel transform_reduce [N4950 §25.7.4]
    auto sum_of_squares = std::transform_reduce(
        std::execution::par,
        data.begin(), data.end(),
        0L,
        std::plus<>{},
        [](int x) { return static_cast<long>(x) * x; }
    );
    std::cout << "Sum of squares: " << sum_of_squares << "\n";

    // Parallel count_if [N4950 §25.7.1]
    auto prime_count = std::count_if(
        std::execution::par,
        data.begin(), data.end(),
        [](int n) {
            if (n < 2) return false;
            for (int d = 2; d * d <= n; ++d) {
                if (n % d == 0) return false;
            }
            return true;
        }
    );
    std::cout << "Primes found: " << prime_count << "\n";
}
```

### Data Races in Parallel Algorithms

:::warning The most common pitfall with parallel algorithms is **data races**. When an algorithm
uses `std::execution::par`, the user-provided function objects may be called concurrently from
multiple threads. The standard imposes specific requirements [N4950 §25.5.1]:

1. The function object must not modify elements of the input range (unless the algorithm is
   documented as modifying them, like `sort` or `transform`).
2. If the function object modifies any other data, the caller is responsible for ensuring
   synchronization.
3. Element access functions (including the function object) must not call `std::terminate`, block,
   or access any object that is not element-accessible.

Violating these rules results in **undefined behavior**. :::

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <mutex>
#include <thread>

// DANGEROUS: Data race in parallel algorithm
void bad_example() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    int sum = 0;  // SHARED, unsynchronized!
    // DATA RACE: multiple threads writing to 'sum' concurrently
    // std::for_each(std::execution::par, v.begin(), v.end(),
    //     [&sum](int x) { sum += x; });  // UB!
    std::cout << "This is undefined behavior.\n";
}

// CORRECT: Use reduce (parallel-friendly)
void good_example_reduce() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    // std::reduce is designed for parallel use [N4950 §25.7.4]
    auto sum = std::reduce(
        std::execution::par,
        v.begin(), v.end(),
        0  // identity element for addition
    );
    std::cout << "Sum (reduce): " << sum << "\n";  // 55
}

// CORRECT: Use atomic for simple accumulations
void good_example_atomic() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    std::atomic<int> sum{0};
    std::for_each(std::execution::par, v.begin(), v.end(),
        [&sum](int x) {
            sum.fetch_add(x, std::memory_order_relaxed);
        });
    std::cout << "Sum (atomic): " << sum.load() << "\n";  // 55
}

// CORRECT: Use mutex for complex operations
void good_example_mutex() {
    std::vector<int> v = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};

    std::mutex mtx;
    int sum = 0;
    std::for_each(std::execution::par, v.begin(), v.end(),
        [&sum, &mtx](int x) {
            std::lock_guard lock(mtx);
            sum += x;
        });
    std::cout << "Sum (mutex): " << sum << "\n";  // 55
}

int main() {
    good_example_reduce();
    good_example_atomic();
    good_example_mutex();
}
```

### `std::reduce` vs `std::accumulate`: Order Guarantees

`std::accumulate` [N4950 §25.7.4] processes elements **left to right**, guaranteeing a specific
evaluation order:

$$
\mathrm{accumulate}([a_1, a_2, \ldots, a_n], init, op) = op(\ldots op(op(init, a_1), a_2) \ldots, a_n)
$$

`std::reduce` [N4950 §25.7.4] has **no guaranteed order** when used with parallel execution.
Elements may be combined in any order and in any grouping:

$$
\mathrm{reduce}([a_1, a_2, \ldots, a_n], init, op) = \mathrm{any binary tree of } op \mathrm{ applications}
$$

This means `op` must be **commutative** and **associative** for well-defined results with `reduce`:

$$
op(a, b) = op(b, a) \quad \mathrm{(commutative)}
$$

$$
op(op(a, b), c) = op(a, op(b, c)) \quad \mathrm{(associative)}
$$

```cpp
#include <iostream>
#include <vector>
#include <numeric>
#include <execution>
#include <iomanip>

int main() {
    std::vector<double> values = {1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0};

    // accumulate: left-to-right, deterministic
    auto acc = std::accumulate(values.begin(), values.end(), 0.0);
    std::cout << std::fixed << std::setprecision(15);
    std::cout << "accumulate: " << acc << "\n";

    // reduce: parallel, may produce slightly different result
    // due to different floating-point addition order
    auto red = std::reduce(std::execution::par, values.begin(), values.end(), 0.0);
    std::cout << "reduce (par): " << red << "\n";

    // For floating-point, the results may differ slightly
    // This is a known issue with parallel reduction of floats
    // Both results are "correct" within floating-point semantics

    // Safe use: integer arithmetic where order doesn't matter
    std::vector<int> ints = {1, 2, 3, 4, 5, 6, 7, 8};
    auto int_sum = std::reduce(std::execution::par, ints.begin(), ints.end(), 0);
    std::cout << "Integer sum: " << int_sum << "\n";  // Always 36
}
```

:::warning **Never use `std::reduce` with floating-point arithmetic if you need bit-exact
reproducibility.** Floating-point addition is not associative (e.g.,
`(0.1 + 0.2) + 0.3 != 0.1 + (0.2 + 0.3)` in IEEE 754). Use `std::accumulate` for deterministic
floating-point results, or use compensated summation (Kahan summation) for accuracy. :::

### Proof of Deterministic Results with `std::reduce`

**Theorem.** `std::reduce` with `par` policy produces bit-identical results to `std::accumulate` if
and only if the binary operation `op` is both associative and commutative over the element type.

**Proof.** Let the input be $[a_1, \ldots, a_n]$ with identity `init` and operation `op`.

($\Rightarrow$) Suppose `reduce` always produces the same result as `accumulate`. Then for any
partitioning of the input into subranges
$[a_{l_1}, \ldots, a_{r_1}], \ldots, [a_{l_k}, \ldots,
a_{r_k}]$ where each subrange is reduced
independently and the partial results are combined, the final result equals `accumulate`'s
left-to-right evaluation. This is possible for all partitionings only if `op` is associative
(re-grouping does not change the result) and commutative (re-ordering within or across subranges
does not change the result).

($\Leftarrow$) If `op` is associative and commutative, then any binary tree of `op` applications
over the multiset $\{init, a_1, \ldots, a_n\}$ produces the same result. Since `reduce` may apply
`op` in any tree structure and `accumulate` applies it in one specific left-associative tree, and
both operate on the same multiset, they must produce the same result. QED.

This proof shows why floating-point addition is problematic: IEEE 754 addition is neither
associative nor commutative in general (due to rounding), so `reduce` may produce a different bit
pattern than `accumulate` even though both are "correct" within floating-point semantics.

### Vectorization Hints and `par_unseq`

The `par_unseq` policy [N4950 §25.5.2] permits the implementation to use SIMD vectorization in
addition to multi-threading. This is particularly effective for element-wise operations on arrays of
primitive types:

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <chrono>
#include <cmath>

int main() {
    constexpr std::size_t N = 50'000'000;
    std::vector<double> a(N), b(N), c(N);

    for (std::size_t i = 0; i < N; ++i) {
        a[i] = static_cast<double>(i) * 0.001;
        b[i] = static_cast<double>(i) * 0.002;
    }

    // Sequential transform
    auto start = std::chrono::high_resolution_clock::now();
    std::transform(std::execution::seq, a.begin(), a.end(), b.begin(), c.begin(),
        [](double x, double y) { return std::sqrt(x * x + y * y); });
    auto end = std::chrono::high_resolution_clock::now();
    auto seq_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    // Parallel + vectorized transform
    start = std::chrono::high_resolution_clock::now();
    std::transform(std::execution::par_unseq, a.begin(), a.end(), b.begin(), c.begin(),
        [](double x, double y) { return std::sqrt(x * x + y * y); });
    end = std::chrono::high_resolution_clock::now();
    auto pu_ms = std::chrono::duration_cast<std::chrono::milliseconds>(end - start).count();

    std::cout << "seq:      " << seq_ms << " ms\n";
    std::cout << "par_unseq: " << pu_ms << " ms\n";
}
```

The restriction on `par_unseq` is that the element access function must be **vectorization-safe**:
it must not synchronize with other invocations (no mutexes, no atomics, no blocking calls). This is
because SIMD lanes within a single thread process multiple elements "simultaneously" --- a mutex
acquire in one lane would deadlock the others.

### Interaction with Standard Allocators

Parallel algorithms that modify elements in-place (e.g., `std::sort`, `std::transform`) do not
allocate through user-provided allocators. However, the internal thread management of the parallel
execution engine may allocate through the default allocator for thread-local storage or task
scheduling data structures [N4950 §25.5.1].

If you are using a custom allocator (e.g., `std::pmr`) for your containers, the elements are still
allocated through that allocator, but the parallel algorithm's internal bookkeeping uses the default
allocator. This is generally transparent to the user.

### Complete Parallel Pipeline Example

```cpp
#include <iostream>
#include <vector>
#include <algorithm>
#include <execution>
#include <numeric>
#include <random>
#include <chrono>
#include <string>
#include <cmath>

struct City {
    std::string name;
    double latitude;
    double longitude;
    double population_millions;
};

int main() {
    // Generate sample data
    std::vector<City> cities = {
        {"Tokyo",       35.6762, 139.6503, 37.4},
        {"Delhi",       28.7041,  77.1025, 32.9},
        {"Shanghai",    31.2304, 121.4737, 29.2},
        {"São Paulo",  -23.5505, -46.6333, 22.4},
        {"Mexico City", 19.4326, -99.1332, 21.8},
        {"Cairo",       30.0444,  31.2357, 21.3},
        {"Mumbai",      19.0760,  72.8777, 20.7},
        {"Beijing",     39.9042, 116.4074, 20.9},
        {"Dhaka",       23.8103,  90.4125, 22.5},
        {"Osaka",       34.6937, 135.5023, 19.1},
        {"New York",    40.7128, -74.0060, 18.8},
        {"Karachi",     24.8607,  67.0011, 16.8},
    };

    // 1. Parallel sort by population descending
    std::sort(std::execution::par, cities.begin(), cities.end(),
        [](const City& a, const City& b) {
            return a.population_millions > b.population_millions;
        });

    std::cout << "=== Top 5 Cities by Population ===\n";
    for (std::size_t i = 0; i < 5 && i < cities.size(); ++i) {
        std::cout << "  " << (i + 1) << ". " << cities[i].name
                  << " (" << cities[i].population_millions << "M)\n";
    }

    // 2. Parallel reduce: total population
    auto total_pop = std::reduce(
        std::execution::par,
        cities.begin(), cities.end(),
        0.0,
        [](double acc, const City& c) { return acc + c.population_millions; }
    );
    std::cout << "\nTotal population: " << total_pop << "M\n";

    // 3. Parallel transform_reduce: find max population
    auto max_pop = std::transform_reduce(
        std::execution::par,
        cities.begin(), cities.end(),
        0.0,
        [](double a, double b) { return a > b ? a : b; },
        [](const City& c) { return c.population_millions; }
    );
    std::cout << "Max population: " << max_pop << "M\n";

    // 4. Parallel count_if: cities in Northern hemisphere (lat > 0)
    auto northern = std::count_if(
        std::execution::par,
        cities.begin(), cities.end(),
        [](const City& c) { return c.latitude > 0; }
    );
    std::cout << "Northern hemisphere cities: " << northern << "\n";

    // 5. Parallel for_each: compute and display distance from Tokyo
    const City& tokyo = cities.back();
    auto tokyo_it = std::find_if(cities.begin(), cities.end(),
        [](const City& c) { return c.name == "Tokyo"; });

    if (tokyo_it != cities.end()) {
        std::vector<double> distances(cities.size());

        std::transform(std::execution::par,
            cities.begin(), cities.end(),
            distances.begin(),
            [&tokyo = *tokyo_it](const City& c) {
                auto deg_to_rad = [](double deg) { return deg * 3.14159265 / 180.0; };
                double dlat = deg_to_rad(c.latitude - tokyo.latitude);
                double dlon = deg_to_rad(c.longitude - tokyo.longitude);
                double a = std::sin(dlat / 2) * std::sin(dlat / 2)
                         + std::cos(deg_to_rad(tokyo.latitude))
                         * std::cos(deg_to_rad(c.latitude))
                         * std::sin(dlon / 2) * std::sin(dlon / 2);
                double c_val = 2 * std::atan2(std::sqrt(a), std::sqrt(1 - a));
                return 6371.0 * c_val;
            }
        );

        std::cout << "\n=== Distance from Tokyo ===\n";
        for (std::size_t i = 0; i < cities.size(); ++i) {
            std::cout << "  " << cities[i].name << ": "
                      << static_cast<int>(distances[i]) << " km\n";
        }
    }
}
```

### Comparison Table: Execution Policies

| Property                 | `seq`              | `par`                    | `par_unseq`                 |
| ------------------------ | ------------------ | ------------------------ | --------------------------- |
| Threading                | Single             | Multiple                 | Multiple + SIMD             |
| Ordering guarantee       | Strict             | None                     | None                        |
| Data race safety         | Automatic          | Caller's responsibility  | Caller's responsibility     |
| Locking in user function | Allowed            | Allowed                  | **Forbidden**               |
| Thread-local storage     | Allowed            | Allowed                  | **Forbidden**               |
| Blocking calls           | Allowed            | Allowed                  | **Forbidden**               |
| SIMD auto-vectorization  | Compiler-dependent | Implementation-dependent | Guaranteed permitted        |
| Best for                 | Small data, debug  | Large data, CPU-bound    | Array math, no side effects |

### Algorithmic Parallelism vs Task Parallelism

The C++ parallel algorithms model **algorithmic parallelism**: the implementation decides how to
partition and schedule work across threads. This contrasts with **task parallelism**, where the
programmer explicitly creates and manages threads or tasks (e.g., `std::async`, thread pools).

The key distinction:

- **Algorithmic parallelism** (`std::sort(par, ...)`): The programmer specifies _what_ to compute
  but not _how_ to parallelize. The standard library implementation chooses the partitioning
  strategy, grain size, and thread count. This is declarative and portable but gives less control.

- **Task parallelism** (`std::thread`, `std::async`): The programmer explicitly defines parallel
  tasks and their dependencies. This is imperative and gives full control over synchronization, load
  balancing, and resource usage, but is more error-prone.

```cpp
#include <algorithm>
#include <execution>
#include <vector>
#include <future>
#include <iostream>
#include <numeric>

// Algorithmic parallelism: declarative
void algorithmic_approach(std::vector<double>& data) {
    // The library decides how to parallelize the sort
    std::sort(std::execution::par, data.begin(), data.end());
}

// Task parallelism: imperative
void task_approach(std::vector<double>& data) {
    auto mid = data.begin() + data.size() / 2;

    // Explicitly define two parallel tasks
    auto left = std::async(std::launch::async, [&data, mid] {
        std::sort(data.begin(), mid);
    });
    std::sort(mid, data.end());  // Main thread handles right half
    left.wait();

    // Merge the sorted halves
    std::inplace_merge(data.begin(), mid, data.end());
}

int main() {
    constexpr std::size_t N = 10'000'000;
    std::vector<double> v1(N), v2(N);

    for (std::size_t i = 0; i < N; ++i) {
        v1[i] = v2[i] = static_cast<double>(N - i);
    }

    auto t1 = std::chrono::high_resolution_clock::now();
    algorithmic_approach(v1);
    auto t2 = std::chrono::high_resolution_clock::now();

    auto t3 = std::chrono::high_resolution_clock::now();
    task_approach(v2);
    auto t4 = std::chrono::high_resolution_clock::now();

    auto ms1 = std::chrono::duration_cast<std::chrono::milliseconds>(t2 - t1).count();
    auto ms2 = std::chrono::duration_cast<std::chrono::milliseconds>(t4 - t3).count();

    std::cout << "Algorithmic: " << ms1 << " ms\n";
    std::cout << "Task:         " << ms2 << " ms\n";

    std::cout << "Both sorted: " << std::ranges::is_sorted(v1) << " "
              << std::ranges::is_sorted(v2) << "\n";
}
```

### Parallelism with Standard Allocators

When a parallel algorithm modifies elements in-place (e.g., `std::sort`, `std::transform`), the
element access function runs on multiple threads simultaneously. If the function constructs
temporary objects, those temporaries use the default allocator (`operator new`). The parallel
algorithm's internal thread pool management also uses the default allocator for thread-local
storage.

If you are using PMR allocators for your containers, the elements are still allocated through the
PMR allocator, but the algorithm's internal bookkeeping (task queues, thread contexts) uses the
default allocator. This separation is transparent to the user.

### Complete List of Parallel-Capable Algorithms [N4950 S25.7]

| Algorithm                              | Parallel Overload | Notes                              |
| -------------------------------------- | :---------------: | :--------------------------------- |
| `std::adjacent_difference`             |        Yes        | Left-to-right order not guaranteed |
| `std::adjacent_find`                   |        Yes        | Returns any match                  |
| `std::all_of` / `any_of`               |        Yes        |                                    |
| `std::count` / `count_if`              |        Yes        |                                    |
| `std::equal`                           |        Yes        |                                    |
| `std::exclusive_scan`                  |        Yes        |                                    |
| `std::fill` / `fill_n`                 |        Yes        |                                    |
| `std::find` / `find_end`               |        Yes        |                                    |
| `std::find_first_of`                   |        Yes        |                                    |
| `std::find_if` / `find_if_not`         |        Yes        |                                    |
| `std::for_each`                        |        Yes        |                                    |
| `std::for_each_n`                      |        Yes        |                                    |
| `std::generate` / `generate_n`         |        Yes        |                                    |
| `std::inclusive_scan`                  |        Yes        |                                    |
| `std::is_heap`                         |        Yes        |                                    |
| `std::is_partitioned`                  |        Yes        |                                    |
| `std::is_sorted`                       |        Yes        |                                    |
| `std::is_sorted_until`                 |        Yes        |                                    |
| `std::mismatch`                        |        Yes        |                                    |
| `std::move`                            |        Yes        |                                    |
| `std::none_of`                         |        Yes        |                                    |
| `std::reduce`                          |        Yes        | No ordering guarantee              |
| `std::remove` / `remove_if`            |        Yes        |                                    |
| `std::replace` / `replace_if`          |        Yes        |                                    |
| `std::reverse`                         |        Yes        |                                    |
| `std::rotate`                          |        Yes        |                                    |
| `std::search` / `search_n`             |        Yes        |                                    |
| `std::set_difference`                  |        Yes        |                                    |
| `std::set_intersection`                |        Yes        |                                    |
| `std::set_symmetric_difference`        |        Yes        |                                    |
| `std::set_union`                       |        Yes        |                                    |
| `std::sort`                            |        Yes        |                                    |
| `std::stable_sort`                     |    Yes (C++20)    |                                    |
| `std::swap_ranges`                     |        Yes        |                                    |
| `std::transform`                       |        Yes        |                                    |
| `std::transform_exclusive_scan`        |        Yes        |                                    |
| `std::transform_inclusive_scan`        |        Yes        |                                    |
| `std::transform_reduce`                |        Yes        |                                    |
| `std::uninitialized_fill`              |        Yes        |                                    |
| `std::uninitialized_default_construct` |        Yes        |                                    |
| `std::uninitialized_value_construct`   |        Yes        |                                    |
| `std::min_element` / `max_element`     |        Yes        | Returns any extremum               |
| `std::minmax_element`                  |        Yes        |                                    |

### Common Pitfalls

**1. Using `par_unseq` with locking:** The element access function in `par_unseq` must not acquire
mutexes or use atomics with ordering stronger than `memory_order_relaxed`. SIMD lanes within a
single thread execute in lockstep; a mutex in one lane blocks all lanes in that thread. This is
undefined behavior per [N4950 §25.5.1].

**2. Assuming deterministic execution order with `par`:** The standard guarantees that the output of
`std::sort(std::execution::par, ...)` is a sorted permutation of the input, but it does not
guarantee that elements are processed in any particular order during execution. If the comparison
function has side effects, the behavior is undefined.

**3. False sharing in parallel writes:** When different threads write to adjacent memory locations
(e.g., elements of a `std::vector<int>`), cache line coherence traffic can degrade performance by
10x or more. Structure parallel outputs so that different threads write to different cache lines
(e.g., pad each element to a cache-line size, or use thread-local accumulators).

**4. Not all algorithms benefit from parallelism.** `std::find` on a small vector (e.g., 10
elements) is faster with `seq` because thread creation overhead dominates. Parallelism helps when
$O(n \log n)$ or $O(n)$ work is spread across multiple cores. Rule of thumb: do not parallelize for
fewer than ~10,000 elements.

**5. Exception safety in parallel algorithms.** If the element access function throws, the
implementation calls `std::terminate` [N4950 §25.5.1]. There is no mechanism to catch exceptions
from individual elements and continue. If your function may throw, catch exceptions inside the
function and handle them gracefully.

**6. Deadlock with `par_unseq` and shared state.** The `par_unseq` policy may interleave element
access function invocations from the same thread via SIMD. If the function accesses shared state
without proper atomics, the interleaving causes data races even within a single thread. This is
unique to `par_unseq` and does not occur with `par` (where each thread's invocations are
sequential).

### Parallel `std::for_each_n` and Chunk-Based Processing

`std::for_each_n` applies a function to the first `n` elements. Combined with a parallel policy,
this enables chunk-based processing where you control the grain size:

```cpp
#include <algorithm>
#include <execution>
#include <vector>
#include <iostream>
#include <numeric>

int main() {
    std::vector<int> data(1'000'000);
    std::iota(data.begin(), data.end(), 0);

    // Process in chunks using parallel for_each_n
    std::atomic<long long> sum{0};

    std::for_each_n(std::execution::par,
        data.begin(), data.size(),
        [&sum](int x) {
            sum.fetch_add(x, std::memory_order_relaxed);
        });

    std::cout << "Sum: " << sum.load() << "\n";
    // Expected: 499999500000
}
```

### Parallel `std::copy_if` and `std::partition`

Moving elements based on a predicate is a common parallel pattern:

```cpp
#include <algorithm>
#include <execution>
#include <vector>
#include <iostream>

int main() {
    std::vector<int> data(1'000'000);
    for (std::size_t i = 0; i < data.size(); ++i) {
        data[i] = static_cast<int>(i);
    }

    // Partition: even numbers first, odd numbers after
    auto pivot = std::partition(std::execution::par,
        data.begin(), data.end(),
        [](int x) { return x % 2 == 0; });

    auto even_count = static_cast<std::size_t>(pivot - data.begin());
    std::cout << "Even count: " << even_count << "\n";
    std::cout << "First 5 evens: ";
    for (std::size_t i = 0; i < 5; ++i) std::cout << data[i] << " ";
    std::cout << "\n";

    // Copy evens to a new vector
    std::vector<int> evens;
    evens.reserve(even_count);
    std::copy_if(std::execution::par,
        data.begin(), pivot,
        std::back_inserter(evens),
        [](int) { return true; });

    std::cout << "Copied " << evens.size() << " evens\n";
}
```

:::info Not all algorithms have parallel overloads. The following algorithms do **not** support
execution policies: `std::stable_sort` (until C++20), `std::nth_element` (until C++20), and
`std::inplace_merge`. Check the standard or your compiler's documentation for the full list of
parallel-capable algorithms. :::

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Range Materialization](./4_range_materialization.md)
