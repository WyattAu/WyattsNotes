---
title: Code Coverage
description:
description: >-
  C++ environment and toolchain: Code Coverage — Instrumentation Mechanics; The Two Ecosystems; 1. GCC Workflow: gcov & lcov; Prerequisites.
date: 2025-12-11T01:23:02.734Z
tags:
  - cpp
categories:
  - cpp
slug: code-coverage
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

Code coverage is a metric used to calculate the percentage of source code executed during the
testing phase. In high-reliability C++ systems, coverage analysis is essential for identifying
untested logical branches and dead code.

Unlike dynamic analysis (Sanitizers) which checks for correctness, coverage checking checks for
completeness.

## Instrumentation Mechanics

Coverage tools work by **instrumenting** the binary. During compilation, the compiler inserts hidden
counter instructions at the entry points of every **Basic Block** (a linear sequence of code with
one entry and one exit).

When the program runs, these counters increment. Upon process termination, the runtime writes the
counter data to raw profile files on the disk, which are then mapped back to the source code by
analysis tools.

:::warning Performance Overhead Instrumentation significantly increases binary size and execution
time. Coverage builds should never be used for performance benchmarking or production release
artifacts.
:::

## The Two Ecosystems

There are two primary coverage implementations in the modern C++ landscape:

1. **Gcov (GCC):** The traditional approach. Generates `.gcno` (notes) files during build and
   `.gcda` (data) files during execution.
2. **Source-Based Coverage (Clang/LLVM):** The modern approach. Uses the LLVM profile runtime. It is
   generally faster and handles C++ templates and inlined functions with greater precision.

## 1. GCC Workflow: gcov & lcov

This workflow applies to GCC on Linux and MinGW-w64 on Windows.

### Prerequisites

- **gcov:** Included with GCC.
- **lcov:** A graphical frontend for gcov.
- **genhtml:** Generates HTML reports from lcov data.

### Step 1: Compilation Flags

To instrument the binary, pass `--coverage` to both the compiler and the linker. This is a shorthand
for `-fprofile-arcs -ftest-coverage` and linking `libgcov`.

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

Use `llvm-cov` to display the results. Note that `llvm-cov` requires the executable to map the
counters back to the source.

```bash
# Console Summary
llvm-cov report ./app -instr-profile=app.profdata

# HTML Export
llvm-cov show ./app -instr-profile=app.profdata -format=html -output-dir=coverage_report
```

## CMake Integration Strategy

To maintain a clean build architecture, coverage logic should be encapsulated within the build
system but guarded by a configuration option. We do not want coverage flags leaking into Release or
standard Debug builds.

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

Instead of manually typing `lcov` or `llvm-cov` commands, define a custom CMake target to automate
the generation.

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

In a CI environment (GitHub Actions, GitLab CI), the goal is to fail the build if coverage drops
below a threshold or to upload reports to visualization services.

### 1. Artifact Upload

Do not commit coverage artifacts. Instead, configure the CI pipeline to upload the `coverage_html`
directory as a build artifact for manual inspection.

### 2. Services (Codecov / Coveralls)

Services like Codecov ingest the raw reports (XML or LCOV format) and provide pull-request
integration (e.g., "This PR decreases coverage by 2%").

To support these services, `llvm-cov` can export to LCOV format:

```bash
llvm-cov export ./app -instr-profile=app.profdata -format=lcov > coverage.info
```

## Coverage Metrics: Line vs. Branch vs. Function

Coverage tools report multiple metrics, each measuring a different aspect of test completeness.

### Line Coverage

The simplest metric: the percentage of source lines that execute at least once during testing.

```text
Lines: 847/1200 (70.6%)
```

**Limitation:** A line containing a complex ternary expression counts as "covered" if any branch
executes. Line coverage alone can give a false sense of completeness.

### Branch Coverage

Measures the percentage of conditional branches (if/else, switch, ternary) where **both** the true
and false paths have been taken.

```text
Branches: 234/300 (78.0%)
```

**Example:**

```cpp
int classify(int x) {
    if (x > 0) {       // Branch 1: true
        return 1;
    } else if (x < 0) { // Branch 2: true (only if Branch 1 was false)
        return -1;
    } else {
        return 0;       // Branch 1: false AND Branch 2: false
    }
}
```

If tests only call `classify(1)` and `classify(-1)`, line coverage is 100% (all lines execute), but
branch coverage is 83% (the `return 0` path is never taken).

### Function Coverage

Measures the percentage of functions that have been called at least once.

```text
Functions: 45/50 (90.0%)
```

**Limitation:** Calling a function once only proves the entry point is reached. It does not verify
internal logic.

### Metric Comparison

| Metric        | Granularity              | False Confidence Risk | Cost to Achieve High % |
| ------------- | ------------------------ | --------------------- | ---------------------- |
| **Line**      | Coarse                   | High                  | Low                    |
| **Branch**    | Medium                   | Low                   | Medium                 |
| **Function**  | Coarse (per-function)    | High                  | Low                    |
| **Condition** | Fine (per-subexpression) | Very Low              | High                   |

**Industry standard for critical systems:** Branch coverage &gt; 80%, line coverage &gt; 90%. For
safety-critical (automotive, medical), branch coverage &gt; 95% is often required (per ISO 26262 /
IEC 62304).

## gcov File Format: `.gcno` and `.gcda`

Understanding the gcov file format helps diagnose coverage issues.

### `.gcno` (GCN Notes)

Generated at **compile time** by `-ftest-coverage`. Contains:

- The source file name and line number mapping.
- Basic block structure (the CFG - control flow graph).
- Edge counts between basic blocks (initialized to zero).
- Location of counters in the generated object file.

### `.gcda` (GCN Data)

Generated at **runtime** when the instrumented program exits. Contains:

- The actual execution counts for each basic block.
- Arc transitions (how many times each branch was taken).
- Summary statistics (total runs, total counts).

### File Generation Timeline

```text
Compile:  main.cpp  →  main.o + main.gcno
Link:     main.o    →  app
Run:      ./app     →  main.gcda (written at exit)
Analyze:  gcov main.gcno main.gcda → main.cpp.gcov
```

### Common File Issues

- **Stale `.gcda` files:** If you recompile without running the program, old `.gcda` files from a
  previous run remain. Always run the program after recompilation, or delete `.gcda` files before
  analysis.
- **Missing `.gcda` files:** If the program crashes (segfault) without calling `atexit()` handlers,
  `.gcda` files may not be written. Use `__gcov_flush()` to force-write coverage data at specific
  checkpoints.

```cpp
#include <gcov.h>  // GCC-specific

void critical_section() {
    // Force flush coverage data before risky operation
    __gcov_flush();
    perform_risky_operation();
}
```

## Code Coverage Exclude Patterns

Not all code should contribute to coverage metrics. Test harnesses, generated code, and third-party
templates inflate coverage numbers without providing value.

### Excluding Files with lcov

```bash
lcov --capture --directory . --output-file coverage.info \
    --exclude '*/test/*' \
    --exclude '*/generated/*' \
    --exclude '*/third_party/*' \
    --exclude '/usr/*'
```

### Excluding Code with Compiler Attributes

GCC and Clang support the `__attribute__((no_sanitize("coverage")))` attribute (Clang) or pragmas to
exclude specific functions:

```cpp
// GCC: exclude a function from coverage
void debug_only_function() __attribute__((no_instrument_function));

void debug_only_function() {
    // This function will not appear in coverage reports
}
```

```cpp
// Clang: exclude using -fprofile-exclude
// clang++ -fprofile-instr-generate -fcoverage-mapping \
//        -fprofile-exclude='*/test/*.cpp'
```

### Excluding Lines with Annotations

lcov respects exclusion markers in source comments:

```cpp
// LCOV_EXCL_START
void internal_debug_dump() {
    // This entire function is excluded from coverage
    std::cerr << "Debug dump...\n";
}
// LCOV_EXCL_STOP

int main() {
    // LCOV_EXCL_LINE — only this line is excluded
    return 0;
}
```

## HTML Report Generation

### lcov/genhtml Report

```bash
# Full pipeline
lcov --capture --directory . --output-file coverage.info
lcov --remove coverage.info '/usr/*' '*/test/*' --output-file coverage_filtered.info
genhtml coverage_filtered.info \
    --output-directory coverage_html \
    --legend \
    --show-details \
    --branch-coverage \
    --title "MyProject Coverage Report"
```

**Output structure:**

```text
coverage_html/
├── index.html          # Summary page with overall metrics
├── index.html.sort.html # Sorted by coverage percentage
├── main.cpp.gcov.html   # Per-file detailed report
└── ...
```

### llvm-cov HTML Report

```bash
llvm-cov show ./app \
    -instr-profile=app.profdata \
    -format=html \
    -output-dir=coverage_html \
    -title "MyProject Coverage" \
    -show-line-counts-or-regions \
    -show-branches=percent
```

Clang's HTML report is generally considered more readable than lcov's, with color-coded regions and
branch coverage percentages inline.

### Coverage Report Integration (Codecov Example)

For CI integration with Codecov:

```yaml
# GitHub Actions
- name: Generate coverage report
  run: |
    cmake --build build
    cd build && ctest
    llvm-profdata merge -sparse default.profraw -o coverage.profdata
    llvm-cov export ./UnitTests \
        -instr-profile=coverage.profdata \
        -format=lcov > coverage.info

- name: Upload to Codecov
  uses: codecov/codecov-action@v4
  with:
    files: build/coverage.info
    fail_ci_if_error: true
    flags: unittests
```

## Coverage Thresholds in CI

Enforcing minimum coverage thresholds prevents regressions.

### CMake/CTest Integration

CTest supports coverage thresholds since CMake 3.28:

```cmake
if(ENABLE_COVERAGE)
    # GCC coverage setup
    add_compile_options(--coverage -g -O0)
    add_link_options(--coverage)

    # Define coverage target
    add_custom_target(coverage
        COMMAND lcov --capture --directory . --output-file coverage.info
        COMMAND lcov --remove coverage.info '/usr/*' '*/test/*' --output-file coverage_filtered.info
        COMMAND genhtml coverage_filtered.info --output-directory coverage_html
        WORKING_DIRECTORY ${CMAKE_BINARY_DIR}
    )

    # Enforce minimum coverage (CMake 3.28+)
    add_custom_target(coverage-check
        COMMAND ${CMAKE_COMMAND}
            -DCOVERAGE_FILE=${CMAKE_BINARY_DIR}/coverage_filtered.info
            -DMIN_LINE_COVERAGE=80
            -DMIN_BRANCH_COVERAGE=70
            -P ${CMAKE_SOURCE_DIR}/cmake/check_coverage.cmake
        DEPENDS coverage
    )
endif()
```

**cmake/check_coverage.cmake:**

```cmake
file(READ "${COVERAGE_FILE}" COVERAGE_DATA)
string(REGEX MATCH "lines...: ([0-9.]+)%" _line_match "${COVERAGE_DATA}")
string(REGEX MATCH "functions...: ([0-9.]+)%" _func_match "${COVERAGE_DATA}")

set(LINE_COV ${CMAKE_MATCH_1})
set(FUNC_COV ${CMAKE_MATCH_1})

message(STATUS "Line coverage: ${LINE_COV}% (minimum: ${MIN_LINE_COVERAGE}%)")
message(STATUS "Function coverage: ${FUNC_COV}%")

if(LINE_COV LESS MIN_LINE_COVERAGE)
    message(FATAL_ERROR "Line coverage ${LINE_COV}% is below threshold ${MIN_LINE_COVERAGE}%")
endif()
```

### CI Pipeline Example (GitHub Actions)

```yaml
- name: Build with coverage
  run: cmake -S . -B build -DENABLE_COVERAGE=ON && cmake --build build

- name: Run tests
  run: cd build && ctest --output-on-failure

- name: Check coverage threshold
  run: cmake --build build --target coverage-check
```

## Common Pitfalls

1. **Running coverage builds in production:** Coverage instrumentation adds 20-50% overhead. Never
   deploy instrumented binaries to production. Use separate build configurations for coverage and
   release.
2. **Stale `.gcda` files from previous runs:** Always clean the build directory or delete `.gcda`
   files before running tests. Otherwise, coverage data from a previous run may be merged with the
   current run, producing inaccurate results.
3. **Optimized builds hiding dead code:** Compiling with `-O2` or higher may eliminate unreachable
   code, causing it to appear as "not covered" rather than "dead code." Always compile with `-O0`
   for coverage builds.
4. **Coverage of third-party code:** Including system headers or vcpkg libraries in coverage reports
   inflates numbers. Always filter them out with `lcov --remove` or `llvm-cov` exclude paths.
5. **Multi-process coverage merge:** When running tests in parallel (e.g., `ctest -j8`), each
   process writes to the same `.gcda` file. Use `LLVM_PROFILE_FILE="app-%p.profraw"` (Clang) or set
   `GCOV_PREFIX` (GCC) to separate output per process.

## See Also

- [Unit Tests](5_unit_tests.md) — Writing tests that drive coverage analysis
- [Build Caching](4_build_caching.md) — Avoiding cache poisoning with instrumented builds
- [CMake Targets and Properties](1_cmake_targets_properties_generator.md) — Custom targets for
  coverage automation

:::
