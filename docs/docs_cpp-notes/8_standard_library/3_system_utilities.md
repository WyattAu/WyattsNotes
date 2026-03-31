---
title: System Utilities
date: 2026-03-31T00:00:00.000Z
tags:
  - C++
categories:
  - C++
slug: system-utilities
---

# System Utilities

The C++ standard library provides several utility libraries for interacting with the operating system and performing common computational tasks. This module covers the Filesystem library (`<filesystem>`) for portable path and directory manipulation, the Chrono library (`<chrono>`) for time measurement and calendar operations, the Random Number Generation library (`<random>`) for high-quality stochastic computation, and the Regular Expressions library (`<regex>`) for pattern matching.

---

## 1. The Filesystem Library

### 1.1 Overview

`std::filesystem` (C++17) provides a portable interface for manipulating paths, querying file metadata, iterating directories, and performing file operations [N4950 §30.10]. It is declared in `<filesystem>` and lives in the `std::filesystem` namespace.

The library abstracts away platform differences between POSIX and Windows file systems. Path separators (`/` vs `\`), permissions models, and file metadata are normalized into a common interface.

:::info
On POSIX systems, `std::filesystem` is implemented on top of POSIX system calls (`stat`, `opendir`, `readdir`, `unlink`, etc.). On Windows, it uses the Win32 API (`CreateFileW`, `FindFirstFileW`, etc.). The interface is the same on both platforms, but some features are only available on one (e.g., file permissions are more expressive on POSIX).
:::

### 1.2 `std::filesystem::path`

`std::filesystem::path` is a portable path type that stores a sequence of path components and provides methods for manipulation, decomposition, and composition [N4950 §30.10.7].

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_basics() {
    fs::path p = "/usr/local/bin/cpp";

    std::cout << "Path:         " << p << "\n";
    std::cout << "Root name:    " << p.root_name() << "\n";       // "" (no drive on POSIX)
    std::cout << "Root directory: " << p.root_directory() << "\n"; // "/"
    std::cout << "Root path:    " << p.root_path() << "\n";       // "/"
    std::cout << "Relative:     " << p.relative_path() << "\n";   // "usr/local/bin/cpp"
    std::cout << "Parent:       " << p.parent_path() << "\n";     // "/usr/local/bin"
    std::cout << "Filename:     " << p.filename() << "\n";        // "cpp"
    std::cout << "Stem:         " << p.stem() << "\n";            // "cpp"
    std::cout << "Extension:    " << p.extension() << "\n";       // ""

    fs::path p2 = "archive.tar.gz";
    std::cout << "Stem:         " << p2.stem() << "\n";           // "archive.tar"
    std::cout << "Extension:    " << p2.extension() << "\n";      // ".gz"
}
```

#### Path Composition

`fs::path` supports `/` as an operator for path concatenation, which automatically inserts the correct separator:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_composition() {
    fs::path base = "/home/user";
    fs::path full = base / "projects" / "my_app" / "src" / "main.cpp";
    std::cout << full << "\n";
    // /home/user/projects/my_app/src/main.cpp

    // On Windows, this correctly produces:
    // C:\home\user\projects\my_app\src\main.cpp
    // (even if base is C:/home/user — the / operator normalizes separators)

    fs::path canonical = fs::canonical(full);
    // Resolves symlinks, removes . and .., produces absolute path
}
```

#### Path Iteration

The `begin()` / `end()` methods on `fs::path` iterate over the path components:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_iteration() {
    fs::path p = "/usr/local/bin/../lib/libstdc++.so.6";

    for (const auto& component : p) {
        std::cout << "[" << component.string() << "] ";
    }
    // [/] [usr] [local] [bin] [..] [lib] [libstdc++.so.6]
}
```

:::tip
`fs::path::lexically_normal()` removes `.` and `..` components without touching the filesystem. `fs::canonical()` resolves them by actually querying the filesystem (and throws if the path does not exist). Use `lexically_normal()` for string-level cleanup, `canonical()` when you need the true absolute path.
:::

### 1.3 Directory Iterators

The library provides two directory iterators [N4950 §30.10.11]:

| Iterator                           | Behavior                                            |
| :--------------------------------- | :-------------------------------------------------- |
| `fs::directory_iterator`           | Iterates over the immediate children of a directory |
| `fs::recursive_directory_iterator` | Iterates over all descendants recursively           |

Both are input iterators and follow the RAII pattern — they close the directory handle in their destructor.

```cpp
#include <filesystem>
#include <iostream>
#include <string>

namespace fs = std::filesystem;

void list_directory(const fs::path& dir) {
    if (!fs::exists(dir) || !fs::is_directory(dir)) {
        std::cerr << "Not a directory: " << dir << "\n";
        return;
    }

    for (const auto& entry : fs::directory_iterator(dir)) {
        const auto& path = entry.path();
        std::string type = entry.is_directory() ? "[DIR] " : "[FILE]";
        std::uintmax_t size = entry.is_regular_file() ? entry.file_size() : 0;
        std::cout << type << " " << path.filename().string()
                  << " (" << size << " bytes)\n";
    }
}
```

:::warning
`fs::directory_iterator` does **not** follow symlinks by default. A symlink to a directory appears as `is_symlink() == true` and `is_directory() == false`. Use `fs::directory_options::follow_directory_symlink` to follow symlinks, but be careful of symlink cycles.
:::

### 1.4 Recursive Directory Listing

```cpp
#include <filesystem>
#include <iomanip>
#include <iostream>
#include <string>

namespace fs = std::filesystem;

void recursive_list(const fs::path& root, int max_depth = 3) {
    if (!fs::exists(root) || !fs::is_directory(root)) {
        std::cerr << "Not a directory: " << root << "\n";
        return;
    }

    std::uintmax_t total_files = 0;
    std::uintmax_t total_dirs = 0;
    std::uintmax_t total_bytes = 0;

    for (const auto& entry : fs::recursive_directory_iterator(
            root, fs::directory_options::skip_permission_denied)) {

        int depth = static_cast<int>(entry.depth());

        if (depth > max_depth) {
            // Prevent descent beyond max_depth by calling disable_recursion_pending
            entry.disable_recursion_pending();
            continue;
        }

        const auto& path = entry.path();
        std::string indent(depth * 2, ' ');

        if (entry.is_directory()) {
            ++total_dirs;
            std::cout << indent << "[DIR]  " << path.filename().string() << "/\n";
        } else if (entry.is_regular_file()) {
            ++total_files;
            std::uintmax_t size = entry.file_size();
            total_bytes += size;
            std::cout << indent << "[FILE] " << path.filename().string()
                      << "  (" << size << " bytes)\n";
        } else if (entry.is_symlink()) {
            std::cout << indent << "[LINK] " << path.filename().string()
                      << " -> " << fs::read_symlink(path).string() << "\n";
        }
    }

    std::cout << "\nSummary: " << total_dirs << " directories, "
              << total_files << " files, " << total_bytes << " bytes\n";
}
```

:::info
`fs::directory_options::skip_permission_denied` causes the iterator to silently skip directories that the current process lacks permission to read. Without this option, a `fs::filesystem_error` exception is thrown. This is essential for recursively scanning directories like `/home` or `/tmp` where some subdirectories may have restricted permissions [N4950 §30.10.11.1].
:::

### 1.5 File Operations

The `std::filesystem` namespace provides free functions for common file operations [N4950 §30.10.14]:

| Function                           | Purpose                                         |
| :--------------------------------- | :---------------------------------------------- |
| `fs::copy(src, dst, options)`      | Copy files or directories                       |
| `fs::copy_file(src, dst, options)` | Copy a single file (overwrite control)          |
| `fs::remove(path)`                 | Remove a file or empty directory                |
| `fs::remove_all(path)`             | Remove a file or directory tree recursively     |
| `fs::rename(old, new)`             | Rename or move a file/directory                 |
| `fs::resize_file(path, size)`      | Truncate or extend a file                       |
| `fs::space(path)`                  | Get disk space info (capacity, free, available) |
| `fs::status(path)`                 | Get file status (type, permissions)             |
| `fs::last_write_time(path)`        | Get/set last modification time                  |
| `fs::create_directory(path)`       | Create a single directory                       |
| `fs::create_directories(path)`     | Create directory tree (like `mkdir -p`)         |
| `fs::current_path()`               | Get/set the current working directory           |
| `fs::temp_directory_path()`        | Get the system temp directory                   |

```cpp
#include <filesystem>
#include <fstream>
#include <iostream>

namespace fs = std::filesystem;

void file_operations_demo(const fs::path& work_dir) {
    fs::create_directories(work_dir / "src");
    fs::create_directories(work_dir / "build");

    fs::path source = work_dir / "src" / "main.cpp";
    {
        std::ofstream f(source);
        f << "#include <iostream>\nint main() { return 0; }\n";
    }

    fs::copy_file(source, work_dir / "build" / "main.cpp.bak",
                  fs::copy_options::overwrite_existing);

    fs::path moved = work_dir / "build" / "backup.cpp";
    fs::rename(work_dir / "build" / "main.cpp.bak", moved);

    fs::space_info si = fs::space(work_dir);
    std::cout << "Capacity:  " << si.capacity << " bytes\n";
    std::cout << "Free:      " << si.free << " bytes\n";
    std::cout << "Available: " << si.available << " bytes\n";

    fs::file_status st = fs::status(source);
    std::cout << "Type: " << (fs::is_regular_file(st) ? "regular file" : "other") << "\n";

    auto perms = st.permissions();
    std::cout << "Readable:  " << ((perms & fs::perms::owner_read) != fs::perms::none) << "\n";
    std::cout << "Writable:  " << ((perms & fs::perms::owner_write) != fs::perms::none) << "\n";
    std::cout << "Executable:" << ((perms & fs::perms::owner_exec) != fs::perms::none) << "\n";

    // Cleanup
    fs::remove_all(work_dir);
    std::cout << "Removed: " << work_dir << "\n";
}
```

:::warning
`fs::remove_all()` is dangerous — it recursively deletes an entire directory tree without confirmation. Never call it with a path derived from untrusted user input without validation. Unlike `rm -rf`, there is no "trash" or "undo" mechanism.
:::

---

## 2. The Chrono Library

### 2.1 Overview

`std::chrono` (C++11) provides types and functions for representing and manipulating time values [N4950 §29.5]. The library is organized around three core abstractions:

1. **Clocks:** Sources of time (e.g., wall clock, monotonic clock).
2. **Time points:** A specific moment in time relative to a clock's epoch.
3. **Durations:** A span of time (e.g., 500 milliseconds).

The library uses the type system to prevent accidental mixing of units. `std::chrono::milliseconds` and `std::chrono::seconds` are **different types** — adding them together requires an explicit conversion.

```
┌──────────────┐  now()   ┌──────────────────┐  -        ┌──────────────┐
│   Clock      │─────────>│   time_point<C>  │──────────>│  duration    │
│  (source)    │          │  (moment in time)│           │  (time span) │
└──────────────┘          └──────────────────┘           └──────────────┘
```

### 2.2 Clocks

The standard defines three clocks [N4950 §29.5.7]:

| Clock                                | Properties                                                                       | Use Case                              |
| :----------------------------------- | :------------------------------------------------------------------------------- | :------------------------------------ |
| `std::chrono::system_clock`          | Wall clock time; may jump (NTP, DST); epoch is Unix epoch (1970-01-01T00:00:00Z) | Calendar time, timestamps, file times |
| `std::chrono::steady_clock`          | Monotonic; never goes backwards; minimum guaranteed tick period is 1 nanosecond  | Measuring elapsed time, timeouts      |
| `std::chrono::high_resolution_clock` | Alias for the clock with the shortest tick period (often `steady_clock`)         | Benchmarking                          |

:::warning
`system_clock::now()` can jump backwards if the system clock is adjusted (e.g., NTP synchronization, manual correction). **Never use `system_clock` for measuring elapsed time** — it can produce negative durations. Use `steady_clock` for all elapsed-time measurements.
:::

### 2.3 Durations

A `std::chrono::duration<Rep, Period>` represents a time span where `Rep` is the arithmetic type (usually `int64_t`) and `Period` is a `std::ratio` compile-time fraction [N4950 §29.5.3].

The standard provides convenient duration typedefs [N4950 §29.5.3.1]:

| Type                          | Period                        |
| :---------------------------- | :---------------------------- |
| `std::chrono::nanoseconds`    | `std::nano` (1/1,000,000,000) |
| `std::chrono::microseconds`   | `std::micro` (1/1,000,000)    |
| `std::chrono::milliseconds`   | `std::milli` (1/1,000)        |
| `std::chrono::seconds`        | `std::ratio<1>` (1)           |
| `std::chrono::minutes`        | `std::ratio<60>`              |
| `std::chrono::hours`          | `std::ratio<3600>`            |
| `std::chrono::days` (C++20)   | `std::ratio<86400>`           |
| `std::chrono::weeks` (C++20)  | `std::ratio<604800>`          |
| `std::chrono::years` (C++20)  | `std::ratio<31556952>`        |
| `std::chrono::months` (C++20) | `std::ratio<2629746>`         |

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

:::info
`std::chrono::duration_cast<D>(d)` performs a truncating conversion. Use `std::chrono::floor<D>()`, `std::chrono::ceil<D>()`, or `std::chrono::round<D>()` (C++17) for rounding conversions. These are declared in `<chrono>` [N4950 §29.5.4].
:::

### 2.4 Measuring Elapsed Time

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

:::tip
The Timer class uses RAII — the elapsed time is printed in the destructor, so it works correctly even when the scope is exited via an exception. This pattern is used in many C++ benchmarking and logging frameworks.
:::

### 2.5 Calendar and Timezone Support (C++20)

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

### 2.6 Formatting Time Points with Calendar

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

:::info
The timezone database (`tzdb`) is loaded from the system's IANA timezone database (typically `/usr/share/zoneinfo/` on Linux). On systems without a system timezone database, the C++ runtime may provide a minimal built-in database. Call `std::chrono::reload_tzdb()` to reload the database after a system update.
:::

---

## 3. Random Number Generation

### 3.1 Overview

The `<random>` header [N4950 §29.6] provides a modular random number generation system consisting of:

1. **Engines:** Stateful objects that produce a sequence of random numbers.
2. **Distributions:** Objects that transform the engine's output into a desired statistical distribution.
3. **Seed sequences:** Objects that produce seed values for engines from a small amount of entropy.

The design separates the source of randomness (engine) from the statistical properties (distribution), allowing any engine to be paired with any distribution.

```
┌───────────────┐    unsigned int sequence    ┌──────────────────┐    T
│   Engine      │─────────────────────────────>│  Distribution    │─────────>
│  (e.g. mt19937)│                              │ (e.g. normal)    │
└───────────────┘                              └──────────────────┘
```

### 3.2 Random Number Engines

An engine satisfies the **UniformRandomBitGenerator** requirement [N4950 §29.6.3]: it provides `operator()` that returns a `UIntType` value uniformly distributed over `[min(), max()]`.

| Engine                                     | Period      | State Size | Quality      | Use Case                         |
| :----------------------------------------- | :---------- | :--------- | :----------- | :------------------------------- |
| `std::linear_congruential_engine`          | ~2^32       | Small      | Low          | Legacy (`rand()` equivalent)     |
| `std::mersenne_twister_engine` (`mt19937`) | 2^19937 - 1 | 2500 bytes | High         | General purpose                  |
| `std::mt19937_64`                          | 2^19937 - 1 | 2500 bytes | High         | 64-bit general purpose           |
| `std::subtract_with_carry_engine`          | ~2^63       | Moderate   | Moderate     | Historical                       |
| `std::random_device`                       | N/A         | N/A        | OS-dependent | True entropy (non-deterministic) |

**`std::mt19937`** (Mersenne Twister) is the standard workhorse engine. It has a period of 2^19937 - 1 (a Mersenne prime), which means the sequence does not repeat for all practical purposes. Its state is 2500 bytes (624 × 32-bit words). It passes most statistical tests but is **not** cryptographically secure [N4950 §29.6.3.4].

**`std::random_device`** is a non-deterministic uniform random bit generator that obtains entropy from the operating system (`/dev/urandom` on Linux, `BCryptGenRandom` on Windows) [N4950 §29.6.5.3].

:::warning
On some older MinGW implementations, `std::random_device` was implemented with a fixed-seed PRNG, producing the same sequence on every run. This was a well-known bug. Modern MinGW-w64 (with GCC 9+) uses the proper OS entropy source. If you need guaranteed non-deterministic seeds on all platforms, read from `/dev/urandom` (POSIX) or `BCryptGenRandom` (Windows) directly.
:::

### 3.3 Distributions

Distributions transform the engine's raw output into values drawn from a specific statistical distribution [N4950 §29.6.4]:

| Distribution                            | Header     | Output Type | Description                             |
| :-------------------------------------- | :--------- | :---------- | :-------------------------------------- |
| `std::uniform_int_distribution<IntT>`   | `<random>` | `IntT`      | Uniform over [a, b]                     |
| `std::uniform_real_distribution<RealT>` | `<random>` | `RealT`     | Uniform over [a, b)                     |
| `std::normal_distribution<RealT>`       | `<random>` | `RealT`     | Normal (Gaussian) with mean μ, stddev σ |
| `std::bernoulli_distribution`           | `<random>` | `bool`      | Bernoulli trial with probability p      |
| `std::binomial_distribution<IntT>`      | `<random>` | `IntT`      | Binomial(n, p)                          |
| `std::poisson_distribution<IntT>`       | `<random>` | `IntT`      | Poisson(λ)                              |
| `std::exponential_distribution<RealT>`  | `<random>` | `RealT`     | Exponential(λ)                          |
| `std::discrete_distribution<IntT>`      | `<random>` | `IntT`      | Arbitrary discrete distribution         |

### 3.4 Seeded Random Number Generation

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

:::tip
`std::seed_seq` [N4950 §29.6.3.8] takes a sequence of seed values and produces a well-distributed initial state for the engine. This is important because the Mersenne Twister's initialization algorithm has known weaknesses when given a single 32-bit seed — some bits of the initial state may have low entropy. Using `seed_seq` with multiple entropy sources produces a better initial state.
:::

### 3.5 Sampling from Normal Distribution

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

:::info
`std::normal_distribution` uses the Marsaglia polar method internally to transform pairs of uniform random numbers into normally distributed values [N4950 §29.6.4.4]. This method produces values in pairs, so the distribution object may cache one value internally for efficiency.
:::

---

## 4. Regular Expressions

### 4.1 Overview

`std::regex` (C++11) provides regular expression matching, searching, and replacement [N4950 §30.9]. It is declared in `<regex>` and uses the ECMAScript regex grammar by default.

The library provides three main operations:

| Function                              | Behavior                                                  |
| :------------------------------------ | :-------------------------------------------------------- |
| `std::regex_match(str, regex)`        | Returns `true` if the **entire** string matches the regex |
| `std::regex_search(str, regex)`       | Returns `true` if **any part** of the string matches      |
| `std::regex_replace(str, regex, fmt)` | Replaces all matches with a formatted string              |

:::warning
`std::regex` is notoriously slow on many standard library implementations (particularly GCC's libstdc++, which uses a backtracking NFA engine). For production use with untrusted input, consider:

- **CTRE** (Compile-Time Regular Expressions): header-only, uses CTAD and template metaprogramming to compile regex patterns at compile time.
- **Hand-written parsers:** for simple patterns (e.g., email validation, URL parsing), a hand-written parser is often faster and more readable.
- **RE2:** Google's regex library with guaranteed linear-time matching.
  :::

### 4.2 `std::regex_match` and `std::regex_search`

```cpp
#include <iostream>
#include <regex>
#include <string>

void regex_match_search_demo() {
    std::string text = "The price is $42.99 and the discount is $5.00";

    // regex_match: entire string must match
    std::regex full_pattern(R"(\d+)");
    std::cout << std::regex_match("12345", full_pattern) << "\n";   // true
    std::cout << std::regex_match("abc123", full_pattern) << "\n";   // false

    // regex_search: any substring can match
    std::cout << std::regex_search(text, full_pattern) << "\n";      // true
}
```

### 4.3 `std::smatch` and Capture Groups

`std::smatch` (match results for `std::string`) stores the results of a regex operation, including capture groups [N4950 §30.9.2]:

- `smatch[0]`: The entire match.
- `smatch[1]`, `smatch[2]`, ...: Capture groups in order of their opening parentheses.
- `smatch.prefix()`: The text before the match.
- `smatch.suffix()`: The text after the match.

```cpp
#include <iostream>
#include <regex>
#include <string>

void capture_groups_demo() {
    std::string log_line = "[2026-03-31 14:22:01] [ERROR] Connection timeout";

    std::regex log_pattern(
        R"(\[(\d{4}-\d{2}-\d{2}) (\d{2}:\d{2}:\d{2})\] \[(\w+)\] (.+))"
    );

    std::smatch match;
    if (std::regex_match(log_line, match, log_pattern)) {
        std::cout << "Full match:  " << match[0].str() << "\n";
        std::cout << "Date:        " << match[1].str() << "\n";
        std::cout << "Time:        " << match[2].str() << "\n";
        std::cout << "Level:       " << match[3].str() << "\n";
        std::cout << "Message:     " << match[4].str() << "\n";
        std::cout << "Match count: " << match.size() << "\n";
        // Match count: 5 (0 = full, 1-4 = groups)
    }
}
```

### 4.4 `std::regex_replace`

```cpp
#include <iostream>
#include <regex>
#include <string>

void regex_replace_demo() {
    std::string input = "Name: John Doe, Age: 30, City: New York";

    // Replace all "Key: Value" patterns with "Key=Value"
    std::regex kv_pattern(R"((\w+):\s*(\w[\w\s]*?)(?=,\s*\w+:|$))");
    std::string result = std::regex_replace(input, kv_pattern, "$1=$2");
    std::cout << result << "\n";
    // Name=John Doe, Age=30, City=New York

    // Simple HTML tag removal
    std::string html = "<p>Hello <b>world</b></p>";
    std::regex tag_pattern(R"(<[^>]+>)");
    std::string plain = std::regex_replace(html, tag_pattern, "");
    std::cout << plain << "\n";
    // Hello world
}
```

:::info
In the replacement string, `$&` refers to the entire match, `$1`..`$9` refer to capture groups, and `$$` is a literal `$`. These are defined in [N4950 §30.9.4].
:::

### 4.5 Email Validation with Regex

```cpp
#include <iostream>
#include <regex>
#include <string>
#include <string_view>

class EmailValidator {
    // This pattern matches RFC 5322's "addr-spec" production approximately.
    // A fully RFC-compliant regex would be several thousand characters.
    // This is a practical compromise:
    //   local-part:   alphanumeric + . _ % + -
    //   domain:       alphanumeric + - separated by dots, 2-63 chars per label
    static constexpr std::string_view pattern_str =
        R"(^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,63}$)";

public:
    static bool is_valid(std::string_view email) {
        static const std::regex pattern(std::string(pattern_str));
        return std::regex_match(email.data(),
                                email.data() + email.size(),
                                pattern);
    }
};

void email_validation_demo() {
    struct Test { std::string email; bool expected; };

    Test tests[] = {
        {"user@example.com",            true},
        {"first.last@sub.domain.co.uk", true},
        {"user+tag@gmail.com",          true},
        {"user_name@my-company.org",    true},
        {"",                            false},
        {"missing-at-sign.com",         false},
        {"@missing-local.org",          false},
        {"spaces in@address.com",       false},
        {"double..dots@bad.com",        false},
        {"no-tld@domain.",              false},
    };

    int passed = 0;
    for (const auto& t : tests) {
        bool result = EmailValidator::is_valid(t.email);
        std::cout << (result ? "VALID  " : "INVALID")
                  << " | expected: " << (t.expected ? "VALID  " : "INVALID")
                  << " | " << t.email << "\n";
        if (result == t.expected) ++passed;
    }
    std::cout << "\nPassed: " << passed << "/" << sizeof(tests)/sizeof(tests[0]) << "\n";
}
```

### 4.6 Performance Considerations

The primary performance concern with `std::regex` is **catastrophic backtracking**. A regex like `(a+)+b` applied to the string `"aaaaaaaaaaaaaaaaaaaaaaaaaaaaaac"` can take exponential time because the engine tries every possible partition of the `a` characters between the two nested quantifiers.

```cpp
#include <chrono>
#include <iostream>
#include <regex>
#include <string>

void catastrophic_backtracking_demo() {
    // SAFE: no nested quantifiers — linear time
    std::regex safe_pattern(R"(^a+b$)");
    std::string dangerous_input(30, 'a');  // "aaa...a" (no trailing 'b')

    auto start = std::chrono::steady_clock::now();
    bool safe_result = std::regex_search(dangerous_input, safe_pattern);
    auto elapsed_safe = std::chrono::steady_clock::now() - start;
    std::cout << "Safe pattern:   " << safe_result
              << " (" << std::chrono::duration<double, std::milli>(elapsed_safe).count()
              << " ms)\n";

    // DANGEROUS: nested quantifiers — exponential time
    std::regex dangerous_pattern(R"(^(a+)+b$)");

    start = std::chrono::steady_clock::now();
    bool dangerous_result = std::regex_search(dangerous_input, dangerous_pattern);
    auto elapsed_dangerous = std::chrono::steady_clock::now() - start;
    std::cout << "Dangerous:     " << dangerous_result
              << " (" << std::chrono::duration<double, std::milli>(elapsed_dangerous).count()
              << " ms)\n";
}
```

:::warning
Avoid nested quantifiers in regex patterns: `(a+)+`, `(a*)*`, `(a+)*`. These can trigger exponential backtracking on inputs that nearly match. If you must use them, set a timeout or use a library with guaranteed linear-time matching (RE2, hyperscan).
:::

---

## Summary

| Library    | Header         | Standard | Core Types                                               |
| :--------- | :------------- | :------- | :------------------------------------------------------- |
| Filesystem | `<filesystem>` | C++17    | `fs::path`, `fs::directory_iterator`, `fs::space_info`   |
| Chrono     | `<chrono>`     | C++11    | `system_clock`, `steady_clock`, `duration`, `time_point` |
| Calendar   | `<chrono>`     | C++20    | `year_month_day`, `zoned_time`, `weekday`                |
| Random     | `<random>`     | C++11    | `mt19937`, `random_device`, `uniform_int_distribution`   |
| Regex      | `<regex>`      | C++11    | `std::regex`, `std::smatch`, `std::regex_replace`        |
