---
title: Random Number Generation
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: random-number-generation
---

## Random Number Generation

The `<random>` header provides a modular random number generation system consisting of engines
(stateful objects producing random number sequences), distributions (transforming engine output into
desired statistical distributions), and seed sequences (producing initial state from entropy
sources). This section covers the engine hierarchy, distribution types, seeding strategies, and
practical usage patterns.

### Overview

The `<random>` header [N4950 §29.6] provides a modular random number generation system consisting
of:

1. **Engines:** Stateful objects that produce a sequence of random numbers.
2. **Distributions:** Objects that transform the engine's output into a desired statistical
   distribution.
3. **Seed sequences:** Objects that produce seed values for engines from a small amount of entropy.

The design separates the source of randomness (engine) from the statistical properties
(distribution), allowing any engine to be paired with any distribution.

```
┌───────────────┐    unsigned int sequence    ┌──────────────────┐    T
│   Engine      │─────────────────────────────>│  Distribution    │─────────>
│  (e.g. mt19937)│                              │ (e.g. normal)    │
└───────────────┘                              └──────────────────┘
```

### Random Number Engines

An engine satisfies the **UniformRandomBitGenerator** requirement [N4950 §29.6.3]: it provides
`operator()` that returns a `UIntType` value uniformly distributed over `[min(), max()]`.

| Engine                                     | Period      | State Size | Quality      | Use Case                         |
| :----------------------------------------- | :---------- | :--------- | :----------- | :------------------------------- |
| `std::linear_congruential_engine`          | ~2^32       | Small      | Low          | Legacy (`rand()` equivalent)     |
| `std::mersenne_twister_engine` (`mt19937`) | 2^19937 - 1 | 2500 bytes | High         | General purpose                  |
| `std::mt19937_64`                          | 2^19937 - 1 | 2500 bytes | High         | 64-bit general purpose           |
| `std::subtract_with_carry_engine`          | ~2^63       | Moderate   | Moderate     | Historical                       |
| `std::random_device`                       | N/A         | N/A        | OS-dependent | True entropy (non-deterministic) |

**`std::mt19937`** (Mersenne Twister) is the standard workhorse engine. It has a period of 2^19937 -
1 (a Mersenne prime), which means the sequence does not repeat for all practical purposes. Its state
is 2500 bytes (624 × 32-bit words). It passes most statistical tests but is **not**
cryptographically secure [N4950 §29.6.3.4].

**`std::random_device`** is a non-deterministic uniform random bit generator that obtains entropy
from the operating system (`/dev/urandom` on Linux, `BCryptGenRandom` on Windows) [N4950 §29.6.5.3].

:::warning On some older MinGW implementations, `std::random_device` was implemented with a
fixed-seed PRNG, producing the same sequence on every run. This was a well-known bug. Modern
MinGW-w64 (with GCC 9+) uses the proper OS entropy source. If you need guaranteed non-deterministic
seeds on all platforms, read from `/dev/urandom` (POSIX) or `BCryptGenRandom` (Windows) directly.
:::

### Distributions

Distributions transform the engine's raw output into values drawn from a specific statistical
distribution [N4950 §29.6.4]:

| Distribution                               | Header     | Output Type | Description                             |
| :----------------------------------------- | :--------- | :---------- | :-------------------------------------- |
| `std::uniform_int_distribution&lt;IntT>`   | `<random>` | `IntT`      | Uniform over [a, b]                     |
| `std::uniform_real_distribution&lt;RealT>` | `<random>` | `RealT`     | Uniform over [a, b)                     |
| `std::normal_distribution&lt;RealT>`       | `<random>` | `RealT`     | Normal (Gaussian) with mean μ, stddev σ |
| `std::bernoulli_distribution`              | `<random>` | `bool`      | Bernoulli trial with probability p      |
| `std::binomial_distribution&lt;IntT>`      | `<random>` | `IntT`      | Binomial(n, p)                          |
| `std::poisson_distribution&lt;IntT>`       | `<random>` | `IntT`      | Poisson(λ)                              |
| `std::exponential_distribution&lt;RealT>`  | `<random>` | `RealT`     | Exponential(λ)                          |
| `std::discrete_distribution&lt;IntT>`      | `<random>` | `IntT`      | Arbitrary discrete distribution         |

### Seeded Random Number Generation

```cpp
#include <cstdint>
#include <iostream>
#include <random>
#include <vector>

struct Rng {
    std::mt19937 engine;

    explicit Rng(std::uint32_t seed)
        : engine(seed) {}

    std::uint32_t next_u32() {
        return engine();
    }

    std::uint32_t range(std::uint32_t lo, std::uint32_t hi) {
        std::uniform_int_distribution<std::uint32_t> dist(lo, hi);
        return dist(engine);
    }

    double uniform01() {
        std::uniform_real_distribution<double> dist(0.0, 1.0);
        return dist(engine);
    }

    bool coin_flip(double p = 0.5) {
        std::bernoulli_distribution dist(p);
        return dist(engine);
    }
};

void seeded_rng_demo() {
    // ── Seeded with a fixed seed (reproducible) ──────────────────
    Rng rng(42);

    std::cout << "Reproducible sequence:\n";
    for (int i = 0; i < 5; ++i) {
        std::cout << "  " << rng.range(1, 100);
    }
    std::cout << "\n";
    // Always produces the same 5 numbers

    // ── Seeded with random_device (non-deterministic) ───────────
    std::random_device rd;
    Rng rng2(rd());

    std::cout << "Random sequence:\n";
    for (int i = 0; i < 5; ++i) {
        std::cout << "  " << rng2.range(1, 100);
    }
    std::cout << "\n";

    // ── Seeded with seed_seq (from multiple entropy sources) ─────
    std::uint32_t seed_data[5] = {
        static_cast<std::uint32_t>(std::random_device{}()),
        static_cast<std::uint32_t>(std::random_device{}()),
        0xDEADBEEF,
        static_cast<std::uint32_t>(__LINE__),
        42
    };
    std::seed_seq seq(std::begin(seed_data), std::end(seed_data));

    std::vector<std::uint32_t> seeds(1);
    seq.generate(seeds.begin(), seeds.end());

    Rng rng3(seeds[0]);
    std::cout << "seed_seq seeded: " << rng3.range(1, 100) << "\n";
}
```

:::tip `std::seed_seq` [N4950 §29.6.3.8] takes a sequence of seed values and produces a
well-distributed initial state for the engine. This is important because the Mersenne Twister's
initialization algorithm has known weaknesses when given a single 32-bit seed — some bits of the
initial state may have low entropy. Using `seed_seq` with multiple entropy sources produces a better
initial state. :::

### Sampling from Normal Distribution

```cpp
#include <algorithm>
#include <cmath>
#include <cstdint>
#include <iostream>
#include <numeric>
#include <random>
#include <vector>

struct Histogram {
    std::vector<std::pair<double, double>> bins;
    std::vector<int> counts;

    explicit Histogram(double lo, double hi, int num_bins)
        : bins(num_bins)
        , counts(num_bins, 0) {
        double step = (hi - lo) / num_bins;
        for (int i = 0; i < num_bins; ++i) {
            bins[i] = {lo + i * step, lo + (i + 1) * step};
        }
    }

    void add(double value) {
        for (std::size_t i = 0; i < bins.size(); ++i) {
            if (value >= bins[i].first && value < bins[i].second) {
                ++counts[i];
                return;
            }
        }
        if (!bins.empty()) {
            ++counts.back();
        }
    }

    void print() const {
        int max_count = *std::max_element(counts.begin(), counts.end());
        for (std::size_t i = 0; i < bins.size(); ++i) {
            double mid = (bins[i].first + bins[i].second) / 2.0;
            int bar_len = max_count > 0
                ? static_cast<int>(40.0 * counts[i] / max_count)
                : 0;
            std::cout << std::fixed << std::setprecision(2)
                      << std::setw(6) << mid << " |"
                      << std::string(bar_len, '*')
                      << " " << counts[i] << "\n";
        }
    }
};

void normal_distribution_demo() {
    std::uint32_t seed = 12345;
    std::mt19937 engine(seed);

    const double mean = 0.0;
    const double stddev = 1.0;
    std::normal_distribution<double> dist(mean, stddev);

    const int n = 100'000;
    std::vector<double> samples(n);
    for (int i = 0; i < n; ++i) {
        samples[i] = dist(engine);
    }

    // Compute statistics
    double sample_mean = std::accumulate(samples.begin(), samples.end(), 0.0) / n;
    double sq_sum = 0.0;
    for (double x : samples) {
        sq_sum += (x - sample_mean) * (x - sample_mean);
    }
    double sample_stddev = std::sqrt(sq_sum / n);

    std::cout << "Sample mean:   " << sample_mean << "\n";
    std::cout << "Sample stddev: " << sample_stddev << "\n";
    std::cout << "Expected mean: " << mean << "\n";
    std::cout << "Expected stdd: " << stddev << "\n\n";

    // Print histogram
    Histogram hist(-4.0, 4.0, 16);
    for (double x : samples) {
        hist.add(x);
    }
    hist.print();
}
```

Output (example):

```
Sample mean:   -0.00129
Sample stddev: 0.99897
Expected mean: 0
Expected stdd: 1

 -3.75 |                                      2
 -3.25 |*                                     52
 -2.75 |******                               298
 -2.25 |*************                        689
 -1.75 |********************                 1312
 -1.25 |*****************************        2158
 -0.75 |*********************************    2632
 -0.25 |***********************************  2659
  0.25 |***********************************  2641
  0.75 |*********************************    2637
  1.25 |*****************************        2172
  1.75 |********************                 1336
  2.25 |*************                        693
  2.75 |******                               309
  3.25 |*                                     59
  3.75 |                                      1
```

:::info `std::normal_distribution` uses the Marsaglia polar method internally to transform pairs of
uniform random numbers into normally distributed values [N4950 §29.6.4.4]. This method produces
values in pairs, so the distribution object may cache one value internally for efficiency. :::

## See Also

- [Filesystem Library](./1_filesystem.md)
- [Chrono Library](./2_chrono.md)
- [Regular Expressions](./4_regular_expressions.md)

### Engine State, Serialization, and Reproducibility

Every random number engine maintains internal state that determines the next value in the sequence.
For `std::mt19937`, the state is 624 × 32-bit words (2496 bytes). This state can be saved and
restored using the `<<` and `>>` operators, enabling deterministic replay:

```cpp
#include <iostream>
#include <random>
#include <sstream>

void engine_serialization_demo() {
    std::mt19937 engine(42);

    std::cout << "Before save: " << engine() << " " << engine() << "\n";

    // Save state
    std::ostringstream oss;
    oss << engine;

    // Generate more values
    std::cout << "More values: " << engine() << " " << engine() << "\n";

    // Restore state — subsequent values will match the saved point
    std::istringstream iss(oss.str());
    iss >> engine;

    std::cout << "After restore: " << engine() << " " << engine() << "\n";
    // After restore prints the same values as "More values"
}
```

This serialization is essential for:

- **Reproducible simulations:** Save the engine state at checkpoints and replay from any point.
- **Networked games:** Synchronize the RNG state across clients for deterministic behavior.
- **Fuzz testing:** Record the RNG state that triggered a crash and replay it.

:::warning The `operator<<`/`operator>>` format is **not** portable across compilers or standard
library implementations. GCC libstdc++ and Clang libc++ may produce different binary formats. Use
only the same implementation for save/restore. :::

### `std::random_device` Implementation Details

`std::random_device` is the standard library's interface to OS-provided entropy [N4950 §29.6.5.3]:

| Platform | Implementation (Typical)            | Entropy Source           |
| :------- | :---------------------------------- | :----------------------- |
| Linux    | Reads from `/dev/urandom`           | Kernel CSPRNG (ChaCha20) |
| macOS    | `arc4random_buf` or `/dev/urandom`  | Kernel CSPRNG            |
| Windows  | `BCryptGenRandom` or `RtlGenRandom` | OS cryptographic RNG     |
| MinGW    | Historically broken (fixed GCC 9+)  | Was PRNG, now OS entropy |

```cpp
#include <iostream>
#include <random>

void random_device_props() {
    std::random_device rd;

    std::cout << "Entropy: " << rd.entropy() << "\n";
    // On Linux: typically 32.0 (full 32-bit entropy)
    // On some implementations: 0.0 (entropy estimate not available)

    std::cout << "Min: " << rd.min() << "\n";
    std::cout << "Max: " << rd.max() << "\n";
    // Min: 0, Max: 4294967295 (UINT_MAX) on most platforms
}
```

:::warning `std::random_device::entropy()` returns 0.0 on many implementations even when the device
is truly non-deterministic. A return of 0.0 means "entropy estimate not available," NOT "no
entropy." Do not use this value to decide whether the device is secure. :::

### `std::seed_seq` and Initialization Quality

The Mersenne Twister's standard initialization (`mt19937(seed)`) takes a single 32-bit seed and
expands it into the 624-word state. This expansion has known weaknesses: the lower bits of the
initial state have lower entropy [Matsumoto & Nishimura, 1998]. `std::seed_seq` addresses this by
producing a well-distributed initial state from multiple entropy sources [N4950 §29.6.3.8]:

```cpp
#include <cstdint>
#include <iostream>
#include <random>

void seed_seq_quality_demo() {
    // Weak initialization: single 32-bit seed
    // Only 2^32 possible initial states — not enough for the 2^19937-1 period
    std::mt19937 weak(42);

    // Strong initialization: seed_seq with multiple entropy sources
    std::random_device rd;
    std::seed_seq seq{
        rd(), rd(), rd(), rd(),
        static_cast<std::uint32_t>(0xDEADBEEF),
        static_cast<std::uint32_t>(0xCAFEBABE)
    };

    std::mt19937 strong(seq);

    // seed_seq can also produce a sequence of seed values
    std::vector<std::uint32_t> seeds(10);
    seq.generate(seeds.begin(), seeds.end());

    std::cout << "Generated seeds: ";
    for (auto s : seeds) {
        std::cout << s << " ";
    }
    std::cout << "\n";
}
```

The `std::seed_seq::generate` algorithm uses a warm-up process based on the initialization algorithm
from the Mersenne Twister paper. It performs multiple mixing passes to ensure all bits of the
initial state have high entropy.

### `std::uniform_int_distribution` Modulo Bias

A naive way to generate a random integer in `[0, n)` is `engine() % n`. This introduces **modulo
bias** when `n` does not evenly divide the engine's range [N4950 §29.6.4.1]:

$$P(\text{outcome } k) = \begin{cases} \lceil R / n \rceil / R & \text{if } k \lt R \bmod n \\ \lfloor R / n \rfloor / R & \text{otherwise} \end{cases}$$

where $R = \text{max} - \text{min} + 1$ is the engine's range.

For example, with a 16-bit engine ($R = 65536$) and $n = 3$:

- $65536 = 21845 \times 3 + 1$
- Outcomes 0 and 1 have probability $21846 / 65536$
- Outcome 2 has probability $21845 / 65536$

This bias is small for large ranges, but `std::uniform_int_distribution` eliminates it entirely by
using rejection sampling internally.

### Discrete Distribution: Weighted Random Selection

`std::discrete_distribution` allows sampling from an arbitrary discrete probability distribution
defined by a set of weights [N4950 §29.6.4.5]:

```cpp
#include <iostream>
#include <random>
#include <string>
#include <vector>

void discrete_distribution_demo() {
    std::mt19937 engine(12345);

    // Define a custom distribution over actions
    std::vector<double> weights = {0.50, 0.30, 0.15, 0.05};
    std::vector<std::string> actions = {"idle", "walk", "run", "jump"};

    std::discrete_distribution<int> dist(weights.begin(), weights.end());

    std::vector<int> counts(4, 0);
    constexpr int n = 100'000;

    for (int i = 0; i < n; ++i) {
        int action = dist(engine);
        ++counts[action];
    }

    for (std::size_t i = 0; i < actions.size(); ++i) {
        double freq = static_cast<double>(counts[i]) / n;
        std::cout << actions[i] << ": " << freq
                  << " (expected " << weights[i] << ")\n";
    }
    // idle: ~0.50, walk: ~0.30, run: ~0.15, jump: ~0.05
}
```

:::info `std::discrete_distribution` uses the Walker alias method internally, which provides $O(1)$
sampling time after an $O(n)$ setup phase. This is optimal for distributions that are sampled many
times with the same weights [N4950 §29.6.4.5]. :::

### Poisson and Exponential Distributions

These distributions model event arrival processes and are essential for simulation:

```cpp
#include <cmath>
#include <iostream>
#include <random>
#include <vector>

void arrival_process_demo() {
    std::mt19937 engine(42);

    // Poisson distribution: number of events in a fixed interval
    // Parameter lambda = average rate per interval
    std::poisson_distribution<int> events_per_hour(5.0);

    std::cout << "Events per hour (Poisson, lambda=5):\n";
    for (int i = 0; i < 20; ++i) {
        std::cout << "  " << events_per_hour(engine);
    }
    std::cout << "\n";

    // Exponential distribution: time between events
    // Parameter lambda = rate (events per unit time)
    std::exponential_distribution<double> interarrival(5.0);

    std::cout << "Inter-arrival times (Exponential, lambda=5):\n";
    double total = 0.0;
    for (int i = 0; i < 10; ++i) {
        double t = interarrival(engine);
        total += t;
        std::cout << "  " << t << "s";
    }
    std::cout << "\n";
    std::cout << "Total simulated time: " << total << "s\n";
}
```

### Performance Considerations

| Engine          | State Size | `operator()` Speed  | Memory Footprint |
| :-------------- | :--------- | :------------------ | :--------------- |
| `minstd_rand`   | 4 bytes    | Very fast (LCG)     | Minimal          |
| `mt19937`       | 2500 bytes | Fast (~5 ns/call)   | Large            |
| `mt19937_64`    | 2500 bytes | Fast (~5 ns/call)   | Large            |
| `ranlux48`      | 96 bytes   | Slow (discarding)   | Moderate         |
| `random_device` | N/A        | Very slow (OS call) | None             |

```cpp
#include <chrono>
#include <iostream>
#include <random>

void engine_benchmark() {
    using namespace std::chrono;
    constexpr int iterations = 10'000'000;

    // mt19937
    {
        std::mt19937 engine(42);
        auto start = steady_clock::now();
        volatile std::uint32_t sink = 0;
        for (int i = 0; i < iterations; ++i) {
            sink = engine();
        }
        auto elapsed = duration_cast<milliseconds>(steady_clock::now() - start);
        std::cout << "mt19937: " << elapsed.count() << " ms for "
                  << iterations << " values\n";
    }

    // random_device (MUCH slower — OS syscall per call)
    {
        std::random_device rd;
        auto start = steady_clock::now();
        volatile unsigned int sink = 0;
        for (int i = 0; i < 100'000; ++i) {
            sink = rd();
        }
        auto elapsed = duration_cast<milliseconds>(steady_clock::now() - start);
        std::cout << "random_device: " << elapsed.count() << " ms for "
                  << 100'000 << " values\n";
    }
}
```

:::tip Never use `std::random_device` inside a tight loop. Seed a PRNG engine with one
`random_device` call, then use the engine for all subsequent random values. `random_device` may make
an OS syscall for every call, which is orders of magnitude slower than a PRNG. :::

### Common Pitfalls

1. **Seeding `mt19937` with a single 32-bit value:** The engine has 2496 bytes of state. A single
   32-bit seed can only produce 2^32 distinct initial states — a tiny fraction of the engine's
   2^19937-1 period. Use `std::seed_seq` with multiple entropy sources.

2. **Using `mt19937` for cryptography:** The Mersenne Twister is **not** cryptographically secure.
   Given 624 consecutive outputs, the full internal state can be recovered. Use a CSPRNG (e.g.,
   `std::random_device` backed by `/dev/urandom`, or a library like libsodium) for
   security-sensitive applications.

3. **Creating distributions inside the loop:** `std::uniform_int_distribution` is lightweight, but
   some distributions (like `std::discrete_distribution`) have expensive constructors. Create the
   distribution once and reuse it.

4. **Ignoring thread safety:** None of the standard engine or distribution types are thread-safe.
   Each thread should have its own engine, or access must be protected by a mutex.

5. **Assuming `random_device` is always non-deterministic:** On some older MinGW implementations,
   `random_device` was implemented as a fixed-seed PRNG. Verify on your target platform, or read
   from `/dev/urandom` directly on POSIX systems.

6. **Floating-point distribution bounds:** `std::uniform_real_distribution&lt;double>(0.0, 1.0)`
   produces values in $[0.0, 1.0)$ — the upper bound is exclusive. If you need a closed interval
   $[0.0, 1.0]$, use `std::uniform_real_distribution&lt;double>(0.0, std::nextafter(1.0, 2.0))`.

:::

:::

:::

:::

:::

:::
