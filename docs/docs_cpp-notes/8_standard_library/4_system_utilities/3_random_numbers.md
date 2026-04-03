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

> **Cross-reference:** See
> [A-Level Maths: Statistical Distributions](../../../../docs_ALevel-notes/maths/statistics/04-statistical-distributions.md)
> for the mathematical foundations of the binomial, normal, and Poisson distributions.
> **Cross-reference:** See
> [A-Level Further Maths: Poisson and Geometric Distributions](../../../../docs_ALevel-notes/further-maths/further-statistics/01-poisson-and-geometric-distributions.md)
> for deeper coverage of Poisson and geometric distributions. **Cross-reference:** See
> [A-Level Further Maths: Exponential Distribution and Continuous Random Variables](../../../../docs_ALevel-notes/further-maths/further-statistics/02-exponential-and-continuous-random-variables.md)
> for the theory behind the exponential distribution.

## See Also

- [Filesystem Library](./1_filesystem.md)
- [Chrono Library](./2_chrono.md)
- [Regular Expressions](./4_regular_expressions.md)
