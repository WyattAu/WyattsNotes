---
title: Code Coverage
date: 2025-12-11T01:23:02.734Z
tags:
  - cpp
categories:
  - cpp
slug: code-coverage
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Code coverage is a metric used to calculate the percentage of source code executed during the testing phase. In high-reliability C++ systems, coverage analysis is essential for identifying untested logical branches and dead code.

Unlike dynamic analysis (Sanitizers) which checks for correctness, coverage checking checks for completeness.

## Instrumentation Mechanics

Coverage tools work by **instrumenting** the binary. During compilation, the compiler inserts hidden counter instructions at the entry points of every **Basic Block** (a linear sequence of code with one entry and one exit).

When the program runs, these counters increment. Upon process termination, the runtime writes the counter data to raw profile files on the disk, which are then mapped back to the source code by analysis tools.

:::warning Performance Overhead
Instrumentation significantly increases binary size and execution time. Coverage builds should never be used for performance benchmarking or production release artifacts.
:::

## The Two Ecosystems

There are two primary coverage implementations in the modern C++ landscape:

1. **Gcov (GCC):** The traditional approach. Generates `.gcno` (notes) files during build and `.gcda` (data) files during execution.
2. **Source-Based Coverage (Clang/LLVM):** The modern approach. Uses the LLVM profile runtime. It is generally faster and handles C++ templates and inlined functions with greater precision.

## 1. GCC Workflow: gcov & lcov

This workflow applies to GCC on Linux and MinGW-w64 on Windows.

### Prerequisites

- **gcov:** Included with GCC.
- **lcov:** A graphical frontend for gcov.
- **genhtml:** Generates HTML reports from lcov data.

### Step 1: Compilation Flags

To instrument the binary, pass `--coverage` to both the compiler and the linker. This is a shorthand for `-fprofile-arcs -ftest-coverage` and linking `libgcov`.

```bash
g++ -std=c++23 --coverage -g -O0 main.cpp -o app
```

### Step 2: Execution

Run the application (or test suite). This generates `.gcda` files alongside the object files.

```bash
./app
```

### Step 3: Report Generation

Use `lcov` to capture the data and `genhtml` to visualize it.

```bash
# 1. Capture coverage data
lcov --capture --directory . --output-file coverage.info

# 2. Filter out system headers and external libraries (optional but recommended)
lcov --remove coverage.info '/usr/*' '*/vcpkg/*' --output-file coverage_filtered.info

# 3. Generate HTML report
genhtml coverage_filtered.info --output-directory out
```

Open `out/index.html` in a browser to view line-by-line coverage.

## 2. Clang Workflow: Source-Based Coverage

This workflow applies to Clang on Linux, macOS, and MSYS2.

### Prerequisites

- **llvm-profdata:** Merges raw profile data.
- **llvm-cov:** Maps profiles to source code.

### Step 1: Compilation Flags

Clang requires specific flags to enable the source-based profiling runtime.

```bash
clang++ -std=c++23 -fprofile-instr-generate -fcoverage-mapping -g -O0 main.cpp -o app
```

### Step 2: Execution

Run the application. By default, LLVM writes to `default.profraw`.

```bash
LLVM_PROFILE_FILE="app-%p.profraw" ./app
```

_Note: `%p` expands to the process ID, useful for multi-process applications._

### Step 3: Indexing

Merge the raw profiles into an indexed format optimized for viewing.

```bash
llvm-profdata merge -sparse app-*.profraw -o app.profdata
```

### Step 4: Visualization

Use `llvm-cov` to display the results. Note that `llvm-cov` requires the executable to map the counters back to the source.

```bash
# Console Summary
llvm-cov report ./app -instr-profile=app.profdata

# HTML Export
llvm-cov show ./app -instr-profile=app.profdata -format=html -output-dir=coverage_report
```

## CMake Integration Strategy

To maintain a clean build architecture, coverage logic should be encapsulated within the build system but guarded by a configuration option. We do not want coverage flags leaking into Release or standard Debug builds.

### Implementation

Add the following logic to your root `CMakeLists.txt` or a dedicated module.

```cmake
option(ENABLE_COVERAGE "Enable code coverage instrumentation" OFF)

if(ENABLE_COVERAGE)
    if(CMAKE_CXX_COMPILER_ID MATCHES "GNU")
        # GCC Configuration
        add_compile_options(--coverage -g -O0)
        add_link_options(--coverage)
    elseif(CMAKE_CXX_COMPILER_ID MATCHES "Clang")
        # Clang Configuration
        add_compile_options(-fprofile-instr-generate -fcoverage-mapping -g -O0)
        add_link_options(-fprofile-instr-generate -fcoverage-mapping)
    else()
        message(FATAL_ERROR "Code coverage not supported for this compiler")
    endif()
endif()
```

### Defining a Coverage Target

Instead of manually typing `lcov` or `llvm-cov` commands, define a custom CMake target to automate the generation.

```cmake
if(ENABLE_COVERAGE AND CMAKE_CXX_COMPILER_ID MATCHES "Clang")
    find_program(LLVM_PROFDATA llvm-profdata REQUIRED)
    find_program(LLVM_COV llvm-cov REQUIRED)

    add_custom_target(coverage-report
        COMMAND ${LLVM_PROFDATA} merge -sparse default.profraw -o coverage.profdata
        COMMAND ${LLVM_COV} show $<TARGET_FILE:UnitTests>
                -instr-profile=coverage.profdata
                -format=html
                -output-dir=coverage_html
        COMMAND ${LLVM_COV} report $<TARGET_FILE:UnitTests>
                -instr-profile=coverage.profdata
        WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
        COMMENT "Generating HTML coverage report..."
    )
endif()
```

### Execution

1. **Configure:** `cmake -S . -B build -DENABLE_COVERAGE=ON`
2. **Build:** `cmake --build build`
3. **Run Tests:** `cd build && ctest`
4. **Generate Report:** `cmake --build build --target coverage-report`

## Continuous Integration (CI) Best Practices

In a CI environment (GitHub Actions, GitLab CI), the goal is to fail the build if coverage drops below a threshold or to upload reports to visualization services.

### 1. Artifact Upload

Do not commit coverage artifacts. Instead, configure the CI pipeline to upload the `coverage_html` directory as a build artifact for manual inspection.

### 2. Services (Codecov / Coveralls)

Services like Codecov ingest the raw reports (XML or LCOV format) and provide pull-request integration (e.g., "This PR decreases coverage by 2%").

To support these services, `llvm-cov` can export to LCOV format:

```bash
llvm-cov export ./app -instr-profile=app.profdata -format=lcov > coverage.info
```
