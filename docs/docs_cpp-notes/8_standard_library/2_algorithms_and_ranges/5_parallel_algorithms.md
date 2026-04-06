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
\text{accumulate}([a_1, a_2, \ldots, a_n], init, op) = op(\ldots op(op(init, a_1), a_2) \ldots, a_n)
$$

`std::reduce` [N4950 §25.7.4] has **no guaranteed order** when used with parallel execution.
Elements may be combined in any order and in any grouping:

$$
\text{reduce}([a_1, a_2, \ldots, a_n], init, op) = \text{any binary tree of } op \text{ applications}
$$

This means `op` must be **commutative** and **associative** for well-defined results with `reduce`:

$$
op(a, b) = op(b, a) \quad \text{(commutative)}
$$

$$
op(op(a, b), c) = op(a, op(b, c)) \quad \text{(associative)}
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
    const City& tokyo = cities.back();  // After sort, Tokyo should be first
    // Find Tokyo
    auto tokyo_it = std::find_if(cities.begin(), cities.end(),
        [](const City& c) { return c.name == "Tokyo"; });

    if (tokyo_it != cities.end()) {
        std::vector<double> distances(cities.size());

        std::transform(std::execution::par,
            cities.begin(), cities.end(),
            distances.begin(),
            [&tokyo = *tokyo_it](const City& c) {
                // Haversine approximation (simplified)
                auto deg_to_rad = [](double deg) { return deg * 3.14159265 / 180.0; };
                double dlat = deg_to_rad(c.latitude - tokyo.latitude);
                double dlon = deg_to_rad(c.longitude - tokyo.longitude);
                double a = std::sin(dlat / 2) * std::sin(dlat / 2)
                         + std::cos(deg_to_rad(tokyo.latitude))
                         * std::cos(deg_to_rad(c.latitude))
                         * std::sin(dlon / 2) * std::sin(dlon / 2);
                double c_val = 2 * std::atan2(std::sqrt(a), std::sqrt(1 - a));
                return 6371.0 * c_val;  // Earth radius in km
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

:::info Not all algorithms have parallel overloads. The following algorithms do **not** support
execution policies: `std::stable_sort` (until C++20), `std::nth_element` (until C++20), and
`std::inplace_merge`. Check the standard or your compiler's documentation for the full list of
parallel-capable algorithms. :::

## See Also

- [Iterator-Sentinel Model](./1_iterator_sentinel.md)
- [Range Adaptors, Views, Composition](./2_range_adaptors.md)
- [Projections and Callable Objects](./3_projections.md)
- [Range Materialization](./4_range_materialization.md)

:::

:::

:::
