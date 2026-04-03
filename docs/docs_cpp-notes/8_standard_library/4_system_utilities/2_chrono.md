---
title: Chrono Library
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: chrono-library
---

## The Chrono Library

`std::chrono` (C++11) provides types and functions for representing and manipulating time values.
The library uses the type system to prevent accidental mixing of time units. C++20 extended it with
calendar types (`year`, `month`, `day`, `year_month_day`) and timezone support (`zoned_time`). This
section covers clocks, durations, elapsed time measurement, calendar operations, and time point
formatting.

### Overview

`std::chrono` (C++11) provides types and functions for representing and manipulating time values
[N4950 §29.5]. The library is organized around three core abstractions:

1. **Clocks:** Sources of time (e.g., wall clock, monotonic clock).
2. **Time points:** A specific moment in time relative to a clock's epoch.
3. **Durations:** A span of time (e.g., 500 milliseconds).

The library uses the type system to prevent accidental mixing of units. `std::chrono::milliseconds`
and `std::chrono::seconds` are **different types** — adding them together requires an explicit
conversion.

```
┌──────────────┐  now()   ┌──────────────────┐  -        ┌──────────────┐
│   Clock      │─────────>│   time_point<C>  │──────────>│  duration    │
│  (source)    │          │  (moment in time)│           │  (time span) │
└──────────────┘          └──────────────────┘           └──────────────┘
```

### Clocks

The standard defines three clocks [N4950 §29.5.7]:

| Clock                                | Properties                                                                       | Use Case                              |
| :----------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------ |
| `std::chrono::system_clock`          | Wall clock time; may jump (NTP, DST); epoch is Unix epoch (1970-01-01T00:00:00Z) | Calendar time, timestamps, file times |
| `std::chrono::steady_clock`          | Monotonic; never goes backwards; minimum guaranteed tick period is 1 nanosecond  | Measuring elapsed time, timeouts      |
| `std::chrono::high_resolution_clock` | Alias for the clock with the shortest tick period (often `steady_clock`)         | Benchmarking                          |

:::warning `system_clock::now()` can jump backwards if the system clock is adjusted (e.g., NTP
synchronization, manual correction). **Never use `system_clock` for measuring elapsed time** — it
can produce negative durations. Use `steady_clock` for all elapsed-time measurements. :::

### Durations

A `std::chrono::duration&lt;Rep, Period>` represents a time span where `Rep` is the arithmetic type
(usually `int64_t`) and `Period` is a `std::ratio` compile-time fraction [N4950 §29.5.3].

The standard provides convenient duration typedefs [N4950 §29.5.3.1]:

| Type                          | Period                        |
| :---------------------------- | :---------------------------- |
| `std::chrono::nanoseconds`    | `std::nano` (1/1,000,000,000) |
| `std::chrono::microseconds`   | `std::micro` (1/1,000,000)    |
| `std::chrono::milliseconds`   | `std::milli` (1/1,000)        |
| `std::chrono::seconds`        | `std::ratio&lt;1>` (1)        |
| `std::chrono::minutes`        | `std::ratio&lt;60>`           |
| `std::chrono::hours`          | `std::ratio&lt;3600>`         |
| `std::chrono::days` (C++20)   | `std::ratio&lt;86400>`        |
| `std::chrono::weeks` (C++20)  | `std::ratio&lt;604800>`       |
| `std::chrono::years` (C++20)  | `std::ratio&lt;31556952>`     |
| `std::chrono::months` (C++20) | `std::ratio&lt;2629746>`      |

Duration arithmetic is type-safe and uses `std::common_type` to determine the result type:

```cpp
#include <chrono>
#include <iostream>

void duration_arithmetic() {
    using namespace std::chrono;

    auto total = 2h + 35min + 42s + 500ms;
    // total is of type std::chrono::milliseconds (common type)

    auto total_secs = duration_cast<seconds>(total);
    std::cout << "Total: " << total_secs.count() << " seconds\n";
    // Total: 9342 seconds

    auto floating = duration<double, std::milli>(total);
    std::cout << "Total: " << floating.count() << " ms\n";
    // Total: 9342500 ms

    // Comparison
    auto deadline = 10s;
    auto elapsed = 7s + 500ms;
    if (elapsed < deadline) {
        auto remaining = deadline - elapsed;
        std::cout << "Remaining: " << duration_cast<milliseconds>(remaining).count() << " ms\n";
        // Remaining: 2500 ms
    }
}
```

:::info `std::chrono::duration_cast&lt;D>(d)` performs a truncating conversion. Use
`std::chrono::floor&lt;D>()`, `std::chrono::ceil&lt;D>()`, or `std::chrono::round&lt;D>()` (C++17)
for rounding conversions. These are declared in `<chrono>` [N4950 §29.5.4]. :::

### Measuring Elapsed Time

```cpp
#include <chrono>
#include <iostream>
#include <numeric>
#include <vector>

void elapsed_time_demo() {
    using namespace std::chrono;

    // ── Wall-clock elapsed time ─────────────────────────────────
    auto start = steady_clock::now();

    // Simulate work
    std::vector<double> v(10'000'000);
    std::iota(v.begin(), v.end(), 0.0);
    double sum = std::accumulate(v.begin(), v.end(), 0.0);

    auto end = steady_clock::now();
    auto elapsed_ns = duration_cast<nanoseconds>(end - start);
    auto elapsed_ms = duration<double, std::milli>(end - start);

    std::cout << "Sum: " << sum << "\n";
    std::cout << "Elapsed: " << elapsed_ns.count() << " ns\n";
    std::cout << "Elapsed: " << elapsed_ms.count() << " ms\n";
}

// ── Reusable timer class ─────────────────────────────────────────
#include <chrono>
#include <string>

class Timer {
    std::chrono::steady_clock::time_point start_;
    std::string label_;

public:
    explicit Timer(std::string label = "")
        : start_(std::chrono::steady_clock::now())
        , label_(std::move(label)) {}

    ~Timer() {
        auto elapsed = std::chrono::steady_clock::now() - start_;
        auto ms = std::chrono::duration<double, std::chrono::milli>(elapsed);
        std::cout << "[" << (label_.empty() ? "timer" : label_) << "] "
                  << ms.count() << " ms\n";
    }

    Timer(const Timer&) = delete;
    Timer& operator=(const Timer&) = delete;
};

void timer_class_demo() {
    Timer t("vector init");
    std::vector<int> v(1'000'000);
    for (auto& x : v) x = 42;
    // Destructor prints: [vector init] X.XXX ms
}
```

:::tip The Timer class uses RAII — the elapsed time is printed in the destructor, so it works
correctly even when the scope is exited via an exception. This pattern is used in many C++
benchmarking and logging frameworks. :::

### Calendar and Timezone Support (C++20)

C++20 added calendar types and timezone support to `<chrono>` [N4950 §29.8]:

| Type                              | Purpose                                                     |
| :-------------------------------- | :---------------------------------------------------------- |
| `std::chrono::year`               | Year (e.g., `2026y`)                                        |
| `std::chrono::month`              | Month (1..12, e.g., `March`)                                |
| `std::chrono::day`                | Day of month (1..31, e.g., `31d`)                           |
| `std::chrono::year_month_day`     | Full calendar date                                          |
| `std::chrono::year_month_weekday` | Date specified by weekday (e.g., "second Tuesday of March") |
| `std::chrono::hh_mm_ss`           | Time of day (hours, minutes, seconds, subseconds)           |
| `std::chrono::weekday`            | Day of week (Monday..Sunday, `Mon`, `Tue`, ...)             |
| `std::chrono::tzdb`               | Timezone database                                           |
| `std::chrono::zoned_time`         | A time point in a specific timezone                         |

```cpp
#include <chrono>
#include <iostream>

namespace chrono = std::chrono;

void calendar_demo() {
    // Literal suffixes for calendar types (in namespace std::chrono::literals)
    using namespace chrono::literals;

    chrono::year_month_day date{2026y, chrono::March, 31d};
    std::cout << "Date: " << static_cast<int>(date.year()) << "-"
              << static_cast<unsigned>(date.month()) << "-"
              << static_cast<unsigned>(date.day()) << "\n";

    chrono::weekday wd = chrono::weekday(date);
    std::cout << "Day of week: " << wd << "\n";
    // Day of week: Tue

    // Last day of month
    chrono::year_month_day last_day = chrono::year_month_day{
        date.year() / date.month() / chrono::last
    };
    std::cout << "Last day of month: " << static_cast<unsigned>(last_day.day()) << "\n";
    // Last day of month: 31

    // Second Tuesday of March 2026
    chrono::year_month_weekday ymw{
        2026y, chrono::March, chrono::Tuesday[2]
    };
    std::cout << "2nd Tuesday of March 2026: " << ymw << "\n";

    // Arithmetic
    auto tomorrow = chrono::sys_days(date) + chrono::days{1};
    auto tomorrow_ymd = chrono::year_month_day{tomorrow};
    std::cout << "Tomorrow: " << tomorrow_ymd << "\n";
}

void timezone_demo() {
    using namespace std::chrono;

    auto now = system_clock::now();

    // Convert to local time
    try {
        const auto* tz = locate_zone("America/New_York");
        zoned_time zt{tz, now};
        std::cout << "New York: " << zt << "\n";
    } catch (const std::runtime_error& e) {
        std::cerr << "Timezone not available: " << e.what() << "\n";
    }

    // UTC
    zoned_time utc{"UTC", now};
    std::cout << "UTC:      " << utc << "\n";
}
```

### Formatting Time Points with Calendar

C++20 extended `std::format` to support chrono types [N4950 §29.8.7]:

```cpp
#include <chrono>
#include <format>
#include <iostream>

namespace chrono = std::chrono;

void format_time_demo() {
    using namespace chrono;

    auto now = system_clock::now();

    // Format specifiers follow strftime conventions
    std::cout << std::format("ISO 8601:  {%Y-%m-%dT%H:%M:%SZ}\n", now);
    std::cout << std::format("US date:   {%m/%d/%Y}\n", now);
    std::cout << std::format("Full:      {%A, %B %d, %Y %I:%M:%S %p}\n", now);

    // With timezone
    auto zt = zoned_time{"America/Los_Angeles", now};
    std::cout << std::format("LA time:   {%Y-%m-%d %H:%M:%S %Z}\n", zt);
}
```

:::info The timezone database (`tzdb`) is loaded from the system's IANA timezone database (typically
`/usr/share/zoneinfo/` on Linux). On systems without a system timezone database, the C++ runtime may
provide a minimal built-in database. Call `std::chrono::reload_tzdb()` to reload the database after
a system update. :::

## See Also

- [Filesystem Library](./1_filesystem.md)
- [Random Number Generation](./3_random_numbers.md)
- [Regular Expressions](./4_regular_expressions.md)
