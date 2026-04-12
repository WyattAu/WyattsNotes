---
title: Unit Testing
date: 2025-12-10T19:05:13.846Z
tags:
  - cpp
categories:
  - cpp
slug: unit-testing
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

In a standard workflow, unit tests are compiled and executed as part of the build process. The build
system must be capable of resolving testing dependencies, compiling test suites, and executing
verification passes as part of the standard workflow.

This module introduces the integration of **CTest** (the standard CMake test runner) with the two
dominant C++ testing frameworks: **GoogleTest (GTest)** and **Catch2**.

## CTest Architecture

**CTest** is the test orchestration tool distributed with CMake. It does not define how to write
tests (syntax); rather, it defines how to _execute_ them.

CTest operates on a simple protocol:

1. It invokes an executable.
2. If the executable returns Exit Code `0`, the test **PASSED**.
3. If the executable returns non-zero, segfaults, or times out, the test **FAILED**.

While one could manually write a C++ program with `assert()`, professional development requires
frameworks that provide structured assertions, test fixtures, and machine-readable output (XML/JSON)
for CI/CD pipelines.

## Dependency Management Strategy

To ensure build reproducibility, testing frameworks should **not** be installed globally on the
system (e.g., via `apt` or `brew`). Version mismatches between the CI server and local machines
cause divergent behaviors.

The architectural best practice is to compile the test framework from source as part of the project
build using CMake's **FetchContent** module. This locks the framework version to the project commit.

## 1. GoogleTest Integration

GoogleTest is the industry standard for C++ unit testing. It follows a strict xUnit architecture
(Test Cases, Fixtures, Assertions).

### CMake Implementation

The following configuration demonstrates how to fetch GoogleTest 1.14.0 and register a test suite.

**File:** `tests/CMakeLists.txt`

```cmake
include(FetchContent)

# 1. Declare Dependency
FetchContent_Declare(
  googletest
  URL https://github.com/google/googletest/archive/refs/tags/v1.14.0.zip
)

# 2. Make available (downloads and adds targets)
# setting INSTALL_GTEST=OFF prevents installing GTest when running 'make install' on the project
set(INSTALL_GTEST OFF CACHE BOOL "" FORCE)
FetchContent_MakeAvailable(googletest)

# 3. Create Test Executable
add_executable(UnitTests
    test_main.cpp
    test_math.cpp
)

# 4. Link GTest
# GTest::gtest_main includes a standard main() entry point.
target_link_libraries(UnitTests PRIVATE GTest::gtest_main)

# 5. Register with CTest (Modern Discovery)
include(GoogleTest)
gtest_discover_tests(UnitTests)
```

### Discovery Mechanics (`gtest_discover_tests`)

Legacy CMake used `add_test()`, which treated the entire `UnitTests` executable as a single test.
This is undesirable because a crash in test #1 prevents running test #100.

`gtest_discover_tests`:

1. Runs the executable with `--gtest_list_tests` post-build.
2. Parses the output.
3. Registers every individual test case (e.g., `MathTest.Addition`) as a distinct CTest entry.

## 2. Catch2 Integration (v3)

Catch2 is favored for its modern syntax, requiring no compilation of test fixtures for simple cases.
Version 3 (v3) is a significant architectural shift from v2; it is no longer header-only and
requires compilation to improve build times.

### CMake Implementation

**File:** `tests/CMakeLists.txt`

```cmake
include(FetchContent)

# 1. Declare Dependency
FetchContent_Declare(
  Catch2
  URL https://github.com/catchorg/Catch2/archive/refs/tags/v3.4.0.zip
)

# 2. Make available
FetchContent_MakeAvailable(Catch2)

# 3. Create Test Executable
add_executable(CatchTests
    test_main.cpp
    test_vectors.cpp
)

# 4. Link Catch2
# Catch2::Catch2WithMain provides the entry point.
target_link_libraries(CatchTests PRIVATE Catch2::Catch2WithMain)

# 5. Register with CTest
include(Catch)
catch_discover_tests(CatchTests)
```

## Project Structure

A separation of concerns is required between application source code and test code.

```text
ProjectRoot/
├── CMakeLists.txt          # Root definition
├── CMakePresets.json       # Build configuration
├── src/                    # Application Source
│   ├── engine.cpp
│   └── CMakeLists.txt      # Defines library target 'Engine'
├── tests/                  # Test Source
│   ├── test_engine.cpp
│   └── CMakeLists.txt      # Defines executable 'UnitTests'
```

**Root `CMakeLists.txt` Configuration:**

```cmake
cmake_minimum_required(VERSION 3.25)
project(HighPerfSystem LANGUAGES CXX)

# Standard testing hook
enable_testing()

add_subdirectory(src)
add_subdirectory(tests)
```

**Linking Strategy:** The `UnitTests` target inside `tests/CMakeLists.txt` must link against the
library defined in `src/`.

```cmake
target_link_libraries(UnitTests
    PRIVATE
        GTest::gtest_main
        Engine  # The library under test
)
```

## Execution and Verification

### 1. Command Line (CTest)

CTest aggregates results from all registered test suites.

```bash
# 1. Build the project (including tests)
cmake --build build

# 2. Run tests
cd build
ctest --output-on-failure
```

**Key Flags:**

- `--output-on-failure`: Prints stdout/stderr only for failed tests.
- `-j <N>`: Run tests in parallel (e.g., `ctest -j 8`).
- `-R <Regex>`: Run specific tests (e.g., `ctest -R Math` runs only math tests).

### 2. CMake Presets Integration

Define a **Test Preset** in `CMakePresets.json` to standardize execution arguments.

```json
{
  "testPresets": [
    {
      "name": "default",
      "configurePreset": "linux-clang-debug",
      "output": {
        "outputOnFailure": true
      },
      "execution": {
        "jobs": 8,
        "noTestsAction": "error"
      }
    }
  ]
}
```

**Execution:**

```bash
ctest --preset default
```

## Test Fixtures and Lifecycle

Test fixtures provide a mechanism for shared setup and teardown logic across multiple test cases.
This eliminates code duplication when tests require identical preconditions.

### GoogleTest Fixtures

```cpp
#include <gtest/gtest.h>
#include <vector>

class VectorTest : public ::testing::Test {
protected:
    void SetUp() override {
        data = {1, 2, 3, 4, 5};
        data.reserve(100);
    }

    void TearDown() override {
        // Called after each test. Useful for cleanup.
        data.clear();
    }

    std::vector<int> data;
};

TEST_F(VectorTest, SizeIsCorrect) {
    EXPECT_EQ(data.size(), 5u);
}

TEST_F(VectorTest, FrontIsOne) {
    EXPECT_EQ(data.front(), 1);
}

TEST_F(VectorTest, CapacityPreserved) {
    EXPECT_GE(data.capacity(), 100u);
}
```

The `TEST_F` macro registers each test as a method of the `VectorTest` class. `SetUp()` runs before
each test, and `TearDown()` runs after each test. Each test gets a fresh instance of the fixture.

### Catch2 Fixtures

```cpp
#include <catch2/catch_test_macros.hpp>
#include <vector>

struct VectorFixture {
    std::vector<int> data;

    VectorFixture() {
        data = {1, 2, 3, 4, 5};
        data.reserve(100);
    }

    ~VectorFixture() {
        data.clear();
    }
};

TEST_CASE_METHOD(VectorFixture, "Vector size is correct") {
    REQUIRE(data.size() == 5);
}

TEST_CASE_METHOD(VectorFixture, "Vector front is one") {
    REQUIRE(data.front() == 1);
}
```

## Parameterized Tests

Parameterized tests allow running the same test logic with different input data, avoiding copy-paste
of test cases that differ only in their input values.

### GoogleTest Parameterized Tests

```cpp
#include <gtest/gtest.h>
#include <cstdint>

struct PrimeTestParam {
    uint32_t input;
    bool expected;
};

class PrimeTest : public ::testing::TestWithParam<PrimeTestParam> {};

TEST_P(PrimeTest, ReturnsCorrectResult) {
    auto [input, expected] = GetParam();
    // Implementation of is_prime omitted for brevity
    bool result = is_prime(input);
    EXPECT_EQ(result, expected);
}

INSTANTIATE_TEST_SUITE_P(
    PrimeNumbers,
    PrimeTest,
    ::testing::Values(
        PrimeTestParam{2, true},
        PrimeTestParam{3, true},
        PrimeTestParam{4, false},
        PrimeTestParam{5, true},
        PrimeTestParam{9, false},
        PrimeTestParam{17, true},
        PrimeTestParam{25, false}
    )
);
```

With `gtest_discover_tests`, each instantiation appears as a separate test in CTest:
`PrimeNumbers/PrimeTest.ReturnsCorrectResult/0`, `PrimeNumbers/PrimeTest.ReturnsCorrectResult/1`,
etc.

## CMake Test Properties

CTest allows setting properties on individual tests via `set_tests_properties` or through the
discovery commands:

```cmake
# Set timeout for long-running tests
set_tests_properties(LongRunningTest PROPERTIES
    TIMEOUT 60  # seconds
)

# Set environment variables for a test
set_tests_properties(DatabaseTest PROPERTIES
    ENVIRONMENT "DB_HOST=localhost;DB_PORT=5432"
)

# Assign labels for filtering
set_tests_properties(
    NetworkTest
    DatabaseTest
    PROPERTIES
        LABELS "integration;slow"
)

# Skip a test conditionally
set_tests_properties(FlakyTest PROPERTIES
    SKIP_RETURN_CODE 77
)
```

### Running Tests by Label

```bash
# Run only integration tests
ctest -L integration

# Run all tests except slow ones
ctest -LE slow

# Run with a timeout override
ctest --timeout 120
```

## Code Coverage Analysis

Coverage analysis measures which lines, branches, and functions of your source code are exercised by
the test suite. This is critical for identifying untested code paths.

### Using `llvm-cov` (Clang)

```bash
# 1. Compile with coverage instrumentation
clang++ -fprofile-instr-generate -fcoverage-mapping -g -O0 \
    src/engine.cpp tests/test_engine.cpp \
    -lgtest -lgtest_main -pthread -o test_runner

# 2. Run the tests (generates .profraw files)
LLVM_PROFILE_FILE="coverage_%p.profraw" ./test_runner

# 3. Merge profile data
llvm-profdata merge -sparse coverage_*.profraw -o coverage.profdata

# 4. Generate coverage report
llvm-cov show ./test_runner -instr-profile=coverage.profdata \
    -format=html -output-dir=coverage_report

# 5. Summary
llvm-cov report ./test_runner -instr-profile=coverage.profdata
```

### Using `gcov` / `lcov` (GCC)

```bash
# 1. Compile with coverage
g++ --coverage -g -O0 src/engine.cpp tests/test_engine.cpp \
    -lgtest -lgtest_main -pthread -o test_runner

# 2. Run tests (generates .gcda files)
./test_runner

# 3. Generate HTML report with lcov
lcov --capture --directory . --output-file coverage.info
lcov --remove coverage.info '/usr/*' '*/tests/*' '*/third_party/*' \
    --output-file coverage_filtered.info
genhtml coverage_filtered.info --output-directory coverage_report
```

### CMake Integration

```cmake
# Add coverage flags as a separate build type
set(CMAKE_CXX_FLAGS_COVERAGE "-g -O0 --coverage" CACHE STRING "")
set(CMAKE_EXE_LINKER_FLAGS_COVERAGE "--coverage" CACHE STRING "")

# Use via preset or build type:
# cmake --preset coverage
# cmake --build build --config Coverage
```

## Mock Objects and Test Doubles

When testing a component that depends on an external system (database, network, filesystem), you
substitute the real dependency with a **mock** that records calls and returns predefined values.

### GoogleMock (Included with GoogleTest)

```cpp
#include <gmock/gmock.h>
#include <gtest/gtest.h>

class Database {
public:
    virtual ~Database() = default;
    virtual bool insert(const std::string& key, const std::string& value) = 0;
    virtual std::optional<std::string> get(const std::string& key) = 0;
};

class MockDatabase : public Database {
public:
    MOCK_METHOD(bool, insert, (const std::string& key, const std::string& value), (override));
    MOCK_METHOD(std::optional<std::string>, get, (const std::string& key), (override));
};

class Cache {
public:
    Cache(Database& db) : db_(db) {}

    bool put(const std::string& key, const std::string& value) {
        return db_.insert(key, value);
    }

    std::optional<std::string> find(const std::string& key) {
        return db_.get(key);
    }

private:
    Database& db_;
};

TEST(CacheTest, PutDelegatesToDatabase) {
    MockDatabase mock_db;
    Cache cache(mock_db);

    EXPECT_CALL(mock_db, insert("user:1", "Alice"))
        .WillOnce(::testing::Return(true));

    EXPECT_TRUE(cache.put("user:1", "Alice"));
}

TEST(CacheTest, FindReturnsValue) {
    MockDatabase mock_db;
    Cache cache(mock_db);

    EXPECT_CALL(mock_db, get("user:1"))
        .WillOnce(::testing::Return(std::make_optional<std::string>("Alice")));

    auto result = cache.find("user:1");
    ASSERT_TRUE(result.has_value());
    EXPECT_EQ(*result, "Alice");
}
```

## CI/CD Integration Patterns

### GitHub Actions Example

```yaml
name: Tests
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5 # for FetchContent downloads

      - name: Configure
        run: cmake --preset linux-clang-debug

      - name: Build
        run: cmake --build --preset debug

      - name: Test
        run: ctest --preset default

      - name: Coverage
        run: |
          cmake --build build --target coverage
          bash <(curl -s https://codecov.io/bash)
```

### Running Tests with Sanitizers

```cmake
# In CMakePresets.json: sanitizer preset
{
  "configurePresets": [
    {
      "name": "asan",
      "inherits": "base",
      "cacheVariables": {
        "CMAKE_CXX_FLAGS": "-fsanitize=address -fno-omit-frame-pointer",
        "CMAKE_EXE_LINKER_FLAGS": "-fsanitize=address"
      }
    }
  ]
}
```

## Architectural Considerations

1. **Macro Isolation:** Do not expose GTest/Catch2 macros in your public headers. Tests are
   implementation details.
2. **Private Visibility:** If you need to test private class members, prefer the **Friend Fixture**
   pattern or compile private implementations as a separate `OBJECT` library rather than making
   members public.
3. **Sanitizers:** Running tests with Address Sanitizer (ASan) enabled is the primary method for
   detecting memory leaks. Ensure your `testPresets` inherit from sanitizer-enabled build
   configurations.

## Common Pitfalls

### 1. Test Binary Size and Compile Time

As the test suite grows, the test executable becomes large and slow to compile. Split tests into
multiple executables grouped by module:

```cmake
add_executable(EngineTests test_engine.cpp)
target_link_libraries(EngineTests PRIVATE GTest::gtest_main Engine)

add_executable(MathTests test_math.cpp)
target_link_libraries(MathTests PRIVATE GTest::gtest_main MathLib)

gtest_discover_tests(EngineTests)
gtest_discover_tests(MathTests)
```

### 2. Global State Leakage Between Tests

Tests that modify global state (singletons, environment variables, filesystem) can cause ordering
dependencies: test B passes when run alone but fails when run after test A. Use fixtures with proper
setup/teardown to isolate each test.

### 3. Flaky Tests and Timing

Tests that depend on timing (sleep, timeout) are inherently non-deterministic. Avoid them. If timing
is unavoidable, use generous timeouts and mark the test as flaky in CI.

### 4. `gtest_discover_tests` Requires the Binary to Run Post-Build

If the test binary fails to execute during the discovery phase (e.g., missing shared library at
runtime), CMake configuration fails. Ensure all runtime dependencies (`.so`/`.dll` files) are
findable via `LD_LIBRARY_PATH`, `PATH`, or `CMAKE_INSTALL_RPATH`.

### 5. Catch2 v2 to v3 Migration

Catch2 v3 is a compiled library, not header-only. If your project still uses `v2` patterns (e.g.,
`CATCH_CONFIG_MAIN` without linking `Catch2::Catch2Main`), the build will fail. Update all test
targets to link against `Catch2::Catch2WithMain` and remove the `CATCH_CONFIG_MAIN` define.
