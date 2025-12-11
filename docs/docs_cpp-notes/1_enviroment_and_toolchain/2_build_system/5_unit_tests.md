---
title: Unit Testing
date: 2025-12-10T19:05:13.846Z
tags:
  - cpp
categories:
  - cpp
slug: unit-testing
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

In a standard workflow, unit tests are compiled and executed as part of the build process. The build system must be capable of resolving testing dependencies, compiling test suites, and executing verification passes as part of the standard workflow.

This module introduces the integration of **CTest** (the standard CMake test runner) with the two dominant C++ testing frameworks: **GoogleTest (GTest)** and **Catch2**.

## CTest Architecture

**CTest** is the test orchestration tool distributed with CMake. It does not define how to write tests (syntax); rather, it defines how to _execute_ them.

CTest operates on a simple protocol:

1. It invokes an executable.
2. If the executable returns Exit Code `0`, the test **PASSED**.
3. If the executable returns non-zero, segfaults, or times out, the test **FAILED**.

While one could manually write a C++ program with `assert()`, professional development requires frameworks that provide structured assertions, test fixtures, and machine-readable output (XML/JSON) for CI/CD pipelines.

## Dependency Management Strategy

To ensure build reproducibility, testing frameworks should **not** be installed globally on the system (e.g., via `apt` or `brew`). Version mismatches between the CI server and local machines cause divergent behaviors.

The architectural best practice is to compile the test framework from source as part of the project build using CMake's **FetchContent** module. This locks the framework version to the project commit.

## 1. GoogleTest Integration

GoogleTest is the industry standard for C++ unit testing. It follows a strict xUnit architecture (Test Cases, Fixtures, Assertions).

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

Legacy CMake used `add_test()`, which treated the entire `UnitTests` executable as a single test. This is undesirable because a crash in test #1 prevents running test #100.

`gtest_discover_tests`:

1. Runs the executable with `--gtest_list_tests` post-build.
2. Parses the output.
3. Registers every individual test case (e.g., `MathTest.Addition`) as a distinct CTest entry.

## 2. Catch2 Integration (v3)

Catch2 is favored for its modern syntax, requiring no compilation of test fixtures for simple cases. Version 3 (v3) is a significant architectural shift from v2; it is no longer header-only and requires compilation to improve build times.

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

**Linking Strategy:**
The `UnitTests` target inside `tests/CMakeLists.txt` must link against the library defined in `src/`.

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

## Architectural Considerations

1. **Macro Isolation:** Do not expose GTest/Catch2 macros in your public headers. Tests are implementation details.
2. **Private Visibility:** If you need to test private class members, prefer the **Friend Fixture** pattern or compile private implementations as a separate `OBJECT` library rather than making members public.
3. **Sanitizers:** Running tests with Address Sanitizer (ASan) enabled is the primary method for detecting memory leaks. Ensure your `testPresets` inherit from sanitizer-enabled build configurations.
