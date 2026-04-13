---
title: Installing Compiler
date: 2025-12-10T03:49:29.438Z
tags:
  - cpp
categories:
  - cpp
slug: installing-compiler
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

To develop in C++, a strictly compliant toolchain is required. the following details the
installation of the **LLVM/Clang** and **GCC** toolchains.

The reference environment for this course is **Clang 16+** and **CMake 3.25+**.

## Technical Glossary

- **Clang/LLVM:** A compiler front-end built on the LLVM infrastructure. It is preferred for this
  course due to its modular architecture, superior static analysis, and meaningful error messages.
- **MSYS2:** A software distribution and building platform for Windows. It provides a Unix-like
  environment to manage native Windows software.
- **UCRT64 (Universal C Runtime):** The modern Windows C runtime library. Unlike legacy MinGW (which
  linked against `msvcrt.dll`), UCRT links `ucrtbase.dll` and ensures strict standard compliance,
  proper UTF-8 locale support, and binary compatibility with modern Windows system libraries.
- **Ninja:** A small build system with a focus on speed, designed to replace Make.
- **Target Triple:** A string of the form `<arch>-<vendor>-<os>-<env>` that uniquely identifies a
  compilation target (e.g., `x86_64-pc-linux-gnu`, `aarch64-apple-darwin22`). The compiler driver
  uses this to select the correct code generator and default library paths [N4950 §6.7.1].

## Installation Guide

Select your operating system to view specific installation instructions.

<Tabs>
  <TabItem value="windows" label="Windows (MSYS2 UCRT64)" default>

### Windows: MSYS2 UCRT64 Environment

On Windows, we utilize **MSYS2** to provide a native Clang toolchain that links against the
Universal C Runtime (UCRT). This avoids the legacy `msvcrt.dll` issues and provides a command-line
experience consistent with Linux and macOS.

#### Step 1: Install MSYS2

1. Download the installer (`msys2-x86_64-*.exe`) from the
   [official MSYS2 website](https://www.msys2.org/).
2. Run the installer. Use the default installation folder (`C:\msys64`).
3. When complete, ensure the box **"Run MSYS2 UCRT64 now"** is checked.
   - _Crucial:_ Do not use the "MSYS" or "MINGW64" terminals. You must specifically use the
     **UCRT64** environment to ensure the correct runtime linking.

#### Step 2: Update the Package Database

In the terminal, execute the following to update the system packages:

```bash
pacman -Syu
```

_Note: If the terminal asks to close/restart, allow it, then reopen "MSYS2 UCRT64" from the Start
Menu and run the command again to finish updates._

#### Step 3: Install the Toolchain

Install the Clang compiler, CMake, Ninja, and the LLVM debugging tools (LLDB). We explicitly select
the `ucrt-x86_64` variants.

```bash
pacman -S mingw-w64-ucrt-x86_64-clang \
          mingw-w64-ucrt-x86_64-lld \
          mingw-w64-ucrt-x86_64-lldb \
          mingw-w64-ucrt-x86_64-cmake \
          mingw-w64-ucrt-x86_64-ninja \
          mingw-w64-ucrt-x86_64-make
```

#### Step 4: System Path Configuration

To access these tools from PowerShell, VS Code, or standard Command Prompt, add the binary directory
to your Windows PATH.

1. Press `Win + R`, type `sysdm.cpl`, and press Enter.
2. Go to the **Advanced** tab and click **Environment Variables**.
3. Under **System variables** (bottom pane), locate `Path` and click **Edit**.
4. Click **New** and add the following entry:

   ```bash
   C:\msys64\ucrt64\bin
   ```

5. Click **OK** on all dialogs.

**Warning:** Adding directory to PATH may not be the best practice. Running commands from the
`msys2 ucrt64` terminal can be a better choice if multiple toolchains are installed to prevent
conflicts.

#### Step 5: Verification

Open a **new** PowerShell window and verify the compiler resolves to the UCRT version:

```powershell
clang++ --version
```

**Target Output:** `Target: x86_64-w64-windows-gnu` (The version should be 16.0 or higher).

  </TabItem>
  <TabItem value="debian" label="Debian/Ubuntu">

### Debian/Ubuntu Linux

Debian-based systems utilize `apt`. Ensure your distribution is recent (Ubuntu 22.04+ or Debian 12+)
to support C++23 features.

1. **Update package lists:**

   ```bash
   sudo apt update
   ```

2. **Install dependencies:**

   ```bash
   sudo apt install build-essential cmake ninja-build
   ```

3. **Install LLVM/Clang:** For the latest stable version, use the automatic installation script
   provided by LLVM. This ensures access to the latest standard library implementations.

   ```bash
   bash -c "$(wget -O - https://apt.llvm.org/llvm.sh)"
   ```

4. **Configuration:** The script may install binaries with version suffixes (e.g., `clang++-17`).
   You may need to create symbolic links or use `update-alternatives` if you wish to use the command
   `clang++` directly, though CMake handles versioned compilers automatically.

  </TabItem>
  <TabItem value="rhel" label="RHEL/Fedora">

### Red Hat / Fedora

Fedora generally provides very recent toolchains in its default repositories.

1. **Update system:**

   ```bash
   sudo dnf update
   ```

2. **Install Toolchain:**

   ```bash
   sudo dnf install clang cmake ninja-build lld
   ```

3. **RHEL Specific:** If using RHEL 8/9, the default repositories may be dated. Enable the GCC
   Toolset or LLVM Toolset streams to access C++23 capable compilers.

   ```bash
   # RHEL 9 example: enable the LLVM toolset
   sudo dnf install llvm-toolset
   ```

  </TabItem>
  <TabItem value="arch" label="Arch Linux">

### Arch Linux

Arch Linux provides a rolling release model with the latest stable toolchains available immediately.

1. **Sync and Install:**

   ```bash
   sudo pacman -Syu base-devel clang cmake ninja lld lldb
   ```

  </TabItem>
  <TabItem value="macos" label="macOS">

### macOS

While Xcode provides a version of Clang (`Apple Clang`), it often lags behind upstream LLVM in C++23
feature support. We recommend **Homebrew** to install upstream LLVM.

1. **Install Command Line Tools:** Required for system headers.

   ```bash
   xcode-select --install
   ```

2. **Install LLVM and Build Tools via Homebrew:**

   ```bash
   brew install llvm cmake ninja
   ```

3. **Path Configuration:** Homebrew installs LLVM as "keg-only" to prevent conflicts with system
   tools. You must explicitly add it to your path to use it over Apple Clang.

   Add the following to your `~/.zshrc`:

   ```bash
   export PATH="/opt/homebrew/opt/llvm/bin:$PATH"
   export LDFLAGS="-L/opt/homebrew/opt/llvm/lib"
   export CPPFLAGS="-I/opt/homebrew/opt/llvm/include"
   ```

   Reload the shell:

   ```bash
   source ~/.zshrc
   ```

  </TabItem>
</Tabs>

## Infrastructure Verification

Before proceeding to Module 1.2, verify that the environment can compile and link a C++23 program.

Create a file named `test.cpp`:

```cpp
#include <iostream>
#include <vector>
#include <numeric>

int main() {
    // Test C++20/23 feature: Designated Initializers and Ranges
    struct Config { int id; float value; };
    Config cfg{ .id = 1, .value = 3.14f };

    std::vector<int> data = {1, 2, 3, 4, 5};

    // Verify Output
    if (cfg.value > 3.0f) {
        std::cout << "Environment Verified. Standard: " << __cplusplus << "\n";
        return 0;
    }
    return 1;
}
```

### Compilation Test

Run the following commands in your terminal:

```bash
clang++ -std=c++23 -O3 test.cpp -o infra_test
./infra_test
```

:::warning
If you are using MSVC, replace `clang++` with `cl.exe` and ensure you have the latest
Visual Studio 2022 installed.
:::

**Success Criteria:**

1. No compilation errors or warnings.
2. Output contains "Environment Verified".
3. The output standard version is `202302` (or similar, depending on exact compiler patch level).

## Understanding Compiler Versions and ABI

### Compiler Versioning

Both GCC and Clang follow a `major.minor.patch` versioning scheme. ABI compatibility is guaranteed
within the same major version for GCC, and across Clang versions when using the same `libc++` ABI
version.

| Compiler | Version | C++23 Support | Notes                                  |
| -------- | ------- | ------------- | -------------------------------------- |
| GCC      | 13.x    | Most features | Some C++23 features still experimental |
| GCC      | 14.x    | Full support  | Recommended for production             |
| Clang    | 17.x    | Most features | Requires `-std=c++23` flag             |
| Clang    | 18.x    | Full support  | Recommended for production             |
| MSVC     | 19.38+  | Most features | C++23 support varies by feature        |

### `__cplusplus` Macro

The `__cplusplus` predefined macro indicates which C++ standard the compiler is targeting [N4950
§6.10.9]:

| Flag         | `__cplusplus` Value |
| ------------ | ------------------- |
| `-std=c++17` | `201703L`           |
| `-std=c++20` | `202002L`           |
| `-std=c++23` | `202302L`           |

**Important:** MSVC does not correctly set `__cplusplus` by default. It always reports `199711L`
unless you pass `/Zc:__cplusplus`. This is a long-standing bug acknowledged by Microsoft.

### Detecting the Compiler

```cpp
#include <iostream>

int main() {
#if defined(__clang__)
    std::cout << "Clang " << __clang_major__ << "." << __clang_minor__ << "\n";
#elif defined(__GNUC__)
    std::cout << "GCC " << __GNUC__ << "." << __GNUC_MINOR__ << "\n";
#elif defined(_MSC_VER)
    std::cout << "MSVC " << _MSC_VER << "\n";
#endif

    std::cout << "C++ standard: " << __cplusplus << "\n";

#if __has_include(<ranges>)
    std::cout << "Ranges header available\n";
#endif

#if __has_include(<concepts>)
    std::cout << "Concepts header available\n";
#endif

    return 0;
}
```

## GCC vs Clang vs MSVC: Feature Comparison

The three major C++ compilers differ significantly in diagnostics, optimization capabilities, and
standard library integration. The following matrix compares them across dimensions relevant to
production systems engineering.

### Compiler Feature Matrix

| Feature                     | Clang/LLVM                                  | GCC                                        | MSVC                                    |
| :-------------------------- | :------------------------------------------ | :----------------------------------------- | :-------------------------------------- |
| **License**                 | Apache 2.0 / UIUC                           | GPL v3                                     | Proprietary (VS license)                |
| **Platforms**               | Linux, macOS, Windows, FreeBSD, WebAssembly | Linux, Windows (MinGW), FreeBSD, embedded  | Windows only                            |
| **Default stdlib**          | libc++ (macOS), libstdc++ (Linux)           | libstdc++                                  | MSVC STL                                |
| **Diagnostics quality**     | Excellent (columnar, fix-its, notes)        | Good (improving)                           | Good (improving, C++20+)                |
| **Static analysis**         | Clang-Tidy, Clang Static Analyzer           | `-fanalyzer` (GCC 10+)                     | `/analyze` (Code Analysis)              |
| **Sanitizer support**       | ASan, UBSan, MSan, TSan, libFuzzer          | ASan, UBSan, TSan                          | ASan (partial)                          |
| **LTO**                     | Full LTO + ThinLTO                          | Full LTO + LTO (improving)                 | LTCG (Link-Time Code Generation)        |
| **Modules**                 | C++20 modules (Clang 16+)                   | C++20 modules (GCC 12+)                    | Partial C++20 modules                   |
| **AST dump / tooling**      | `-Xclang -ast-dump`, libclang, libTooling   | No equivalent AST dump                     | No equivalent                           |
| **Cross-compilation**       | `-target` flag, flexible                    | Requires separate cross-toolchain packages | Requires Windows SDK + cross-comp setup |
| **Debug info**              | DWARF 5, CodeView (Windows)                 | DWARF 5                                    | PDB (Program Database)                  |
| **Incremental compilation** | No (requires full recompile)                | No                                         | Edit and Continue (with `link.exe`)     |

### Optimization Comparison

The three compilers employ different optimization strategies. GCC's `-O2` and `-O3` tend to produce
marginally faster binaries for numerical workloads due to aggressive loop vectorization with
Graphite. Clang excels at build-time performance (faster compilation at `-O2`) and produces
competitive binaries via its Polly loop optimizer. MSVC's LTCG is competitive but only within the
Windows ecosystem.

For production C++23 code, the recommendation is:

- **Linux:** Clang 18+ with libc++ for best diagnostics, or GCC 14+ for maximum binary performance.
- **macOS:** Upstream Clang via Homebrew (Apple Clang lags behind on C++23).
- **Windows:** MSVC for native integration, or Clang with MSVC ABI (`clang-cl`) for cross-platform
  parity.

## Compiler Flag Equivalents Across Compilers

One of the challenges of cross-platform C++ development is that equivalent functionality is often
controlled by different flags. The following table maps common flags across the three compilers.

### Standard Selection

| Purpose          | Clang / GCC             | MSVC                       |
| :--------------- | :---------------------- | :------------------------- |
| C++17 strict ISO | `-std=c++17`            | `/std:c++17`               |
| C++20 strict ISO | `-std=c++20`            | `/std:c++20`               |
| C++23 strict ISO | `-std=c++23`            | `/std:c++latest`           |
| GNU extensions   | `-std=gnu++23`          | N/A (MSVC has no GNU mode) |
| No extensions    | `-std=c++23` (implicit) | `/permissive-`             |

### Warning and Error Control

| Purpose                   | Clang / GCC                      | MSVC                     |
| :------------------------ | :------------------------------- | :----------------------- |
| All common warnings       | `-Wall`                          | `/W4`                    |
| Extra warnings            | `-Wextra`                        | `/w14640` (enables more) |
| Pedantic (ISO strictness) | `-Wpedantic`                     | `/permissive-`           |
| Warnings as errors        | `-Werror`                        | `/WX`                    |
| Disable specific warning  | `-Wno-<warning-name>`            | `/wd<warning-number>`    |
| Treat unknown warning err | `-Werror=unknown-warning-option` | N/A                      |

### Optimization and Code Generation

| Purpose                 | Clang / GCC   | MSVC        |
| :---------------------- | :------------ | :---------- |
| No optimization         | `-O0`         | `/Od`       |
| Balanced optimization   | `-O2`         | `/O2`       |
| Aggressive optimization | `-O3`         | `/Ox`       |
| Size optimization       | `-Os`         | `/O1`       |
| Fast math               | `-ffast-math` | `/fp:fast`  |
| Debug info              | `-g`          | `/Zi`       |
| Define macro            | `-DFOO=bar`   | `/DFOO=bar` |
| Include path            | `-I/path`     | `/I/path`   |

### Standard Library Selection (Clang only)

| Purpose                 | Clang               |
| :---------------------- | :------------------ |
| Use libstdc++ (default) | `-stdlib=libstdc++` |
| Use libc++              | `-stdlib=libc++`    |

### Sanitizers

| Purpose            | Clang / GCC                      | MSVC                           |
| :----------------- | :------------------------------- | :----------------------------- |
| Address sanitizer  | `-fsanitize=address`             | `/fsanitize=address` (partial) |
| Undefined behavior | `-fsanitize=undefined`           | N/A                            |
| Thread sanitizer   | `-fsanitize=thread`              | N/A                            |
| Memory sanitizer   | `-fsanitize=memory` (Clang only) | N/A                            |

## Multiple Compiler Setup

### Using `update-alternatives` on Debian/Ubuntu

When multiple compiler versions are installed, you can manage the default compiler:

```bash
# Install multiple versions
sudo apt install clang-17 clang-18

# Configure alternatives
sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-17 100
sudo update-alternatives --install /usr/bin/clang++ clang++ /usr/bin/clang++-18 200

# Switch between versions interactively
sudo update-alternatives --config clang++
```

### Multi-Version Coexistence Without Alternatives

In professional environments, it is common to maintain multiple compiler versions without changing
the system-wide default. CMake makes this straightforward:

```bash
# GCC 14 build
cmake -S . -B build-gcc14 \
  -DCMAKE_C_COMPILER=gcc-14 \
  -DCMAKE_CXX_COMPILER=g++-14

# Clang 18 build (parallel directory)
cmake -S . -B build-clang18 \
  -DCMAKE_C_COMPILER=clang-18 \
  -DCMAKE_CXX_COMPILER=clang++-18

# Both build directories coexist; switch by choosing which one to build
cmake --build build-gcc14
cmake --build build-clang18
```

This pattern is essential for ABI validation: compiling the same code with two different compilers
and verifying that both produce correct output catches compiler-specific bugs and non-portable
constructs.

### CMake Compiler Detection

CMake detects compilers automatically. You can override with:

```bash
# Specify compiler explicitly
cmake -S . -B build \
  -DCMAKE_C_COMPILER=clang-18 \
  -DCMAKE_CXX_COMPILER=clang++-18
```

### Cross-Compiler Project Setup

For projects that must build with multiple compilers (e.g., open-source libraries that support both
GCC and Clang), use CMake's compiler-ID detection to apply conditional flags:

```cmake
cmake_minimum_required(VERSION 3.25)
project(CrossCompiler CXX)

set(CMAKE_CXX_STANDARD 23)
set(CMAKE_CXX_STANDARD_REQUIRED ON)
set(CMAKE_CXX_EXTENSIONS OFF)

if (CMAKE_CXX_COMPILER_ID STREQUAL "Clang")
    add_compile_options(-fcolor-diagnostics)
    if (CMAKE_CXX_COMPILER_VERSION VERSION_GREATER_EQUAL 18)
        add_compile_options(-fsanitize=address -fno-omit-frame-pointer)
        add_link_options(-fsanitize=address)
    endif()
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "GNU")
    add_compile_options(-fdiagnostics-color=always)
    if (CMAKE_CXX_COMPILER_VERSION VERSION_GREATER_EQUAL 13)
        add_compile_options(-fanalyzer)
    endif()
elseif (CMAKE_CXX_COMPILER_ID STREQUAL "MSVC")
    add_compile_options(/W4 /permissive- /Zc:__cplusplus)
endif()
```

## ABI Compatibility Implications of Compiler Choice

The choice of compiler has direct implications for binary compatibility. Key considerations:

### The Itanium C++ ABI

GCC and Clang on Linux share the **Itanium C++ ABI** [Itanium ABI], which defines name mangling,
vtable layout, exception handling, and class layout. This means an object file compiled with GCC can
typically be linked with one compiled by Clang, provided both use the same standard library
implementation and version.

MSVC uses a completely different ABI (the **Microsoft ABI**), which is incompatible at the binary
level with the Itanium ABI. You cannot link a `.obj` produced by MSVC with a `.o` produced by GCC.

### Why `-stdlib=` Matters for ABI

When Clang is used on Linux, it defaults to GCC's `libstdc++`. Switching to `libc++` changes the
standard library ABI. The two libraries implement `std::string`, `std::vector`, and other types with
different memory layouts:

```cpp
#include <iostream>
#include <string>

int main() {
    std::cout << "sizeof(std::string) = " << sizeof(std::string) << "\n";
    // libstdc++ (GCC/Clang default on Linux, 64-bit): 32
    // libc++ (Clang -stdlib=libc++, 64-bit): 24
    // MSVC STL (64-bit): 32
    return 0;
}
```

Mixing object files compiled with different `-stdlib=` values in the same binary produces undefined
behavior because the two libraries disagree on the layout of every standard type.

### ABI Stability Guarantees

| Compiler Pair                                              | Same OS? | ABI Compatible? | Condition                                       |
| :--------------------------------------------------------- | :------- | :-------------- | :---------------------------------------------- |
| GCC 13 $\leftrightarrow$ GCC 14                            | Yes      | Yes             | Same `-stdlib`, same `-D_GLIBCXX_USE_CXX11_ABI` |
| Clang 17 $\leftrightarrow$ Clang 18                        | Yes      | Yes             | Same `-stdlib`, same ABI version                |
| Clang 18 $\leftrightarrow$ GCC 14                          | Linux    | Yes             | Both use `libstdc++`, same ABI flags            |
| Clang 18 (`libc++`) $\leftrightarrow$ GCC 14 (`libstdc++`) | Linux    | **No**          | Different standard library ABIs                 |
| MSVC 2022 $\leftrightarrow$ MinGW Clang                    | Windows  | **No**          | Different C++ ABI (MSVC vs Itanium)             |

See [Language Standard and ABI Compatibility](2_language_standard_and_abi_compatibility.md) for a
deeper treatment of ABI breakage scenarios.

## Common Pitfalls

### Pitfall 1: MSYS2 Environment Confusion

MSYS2 provides three environments: `MSYS`, `MINGW64`, and `UCRT64`. The `MSYS` environment uses
Cygwin-style POSIX emulation and is **not** suitable for native Windows compilation. The `MINGW64`
environment links against the legacy `msvcrt.dll`. Always use `UCRT64` for modern C++ development.

### Pitfall 2: Apple Clang vs Upstream Clang

On macOS, `clang++` resolves to Apple Clang, which is based on an older LLVM fork. Apple Clang lags
1-2 years behind upstream LLVM. To use the latest features, install upstream LLVM via Homebrew and
ensure `/opt/homebrew/opt/llvm/bin` appears before `/usr/bin` in your `PATH`.

```bash
# Verify which clang is being used
which clang++
clang++ --version
# Apple Clang: "Apple clang version 15.x.x"
# Upstream LLVM: "clang version 18.x.x"
```

### Pitfall 3: Inconsistent C++ Standard Between Build and Runtime

If you compile with `-std=c++23` but link against a C++ runtime library built for C++17, you may get
linker errors for missing symbols (e.g., `std::format`, `std::print`). Ensure the C++ standard
library version matches the compiler's standard mode.

### Pitfall 4: Missing `libstdc++` or `libc++` on Linux

GCC links `libstdc++` by default. Clang can use either `libstdc++` (GCC's library) or `libc++`
(LLVM's library). Mixing runtime libraries in the same binary causes undefined behavior:

```bash
# Clang with GCC's standard library (default on most Linux distros)
clang++ -std=c++23 -stdlib=libstdc++ test.cpp

# Clang with LLVM's standard library
clang++ -std=c++23 -stdlib=libc++ test.cpp
```

### Pitfall 5: 32-bit vs 64-bit Target

On Windows with MSYS2, ensure you install the correct architecture. The `ucrt-x86_64` packages
produce 64-bit binaries. If you need 32-bit, use `ucrt-i686` packages. Mixing 32-bit and 64-bit
libraries causes linker errors.

### Pitfall 6: Forgetting `-stdlib=libc++abi` with `-stdlib=libc++`

On Linux, when using Clang with `libc++`, you must also link `libc++abi` for exception handling and
runtime type information support. Omitting it produces linker errors for `__cxa_begin_catch` and
`__gxx_personality_v0`:

```bash
# This will fail at link time on Linux
clang++ -std=c++23 -stdlib=libc++ test.cpp

# This is correct
clang++ -std=c++23 -stdlib=libc++ test.cpp -lc++abi
```

### Pitfall 7: MSVC `__cplusplus` Always Reports 199711L

MSVC sets `__cplusplus` to `199711L` by default regardless of the `/std:` flag, unless
`/Zc:__cplusplus` is specified. This breaks feature detection macros that rely on `__cplusplus`. In
cross-platform code, use `__has_include` and compiler-specific version macros as a workaround, or
always pass `/Zc:__cplusplus`:

```cpp
// This works on Clang/GCC but fails on MSVC without /Zc:__cplusplus
#if __cplusplus >= 202002L
    // C++20 code
#endif

// Portable alternative
#if defined(__cpp_lib_format)
    // std::format is available
#endif
```

## Compiler Flags Reference

### Essential Flags

| Flag                  | Purpose                                           |
| --------------------- | ------------------------------------------------- |
| `-std=c++23`          | Target C++23 standard                             |
| `-O0` / `-O2` / `-O3` | Optimization level (none / balanced / aggressive) |
| `-g`                  | Generate debug information                        |
| `-Wall -Wextra`       | Enable common and extra warnings                  |
| `-Werror`             | Treat warnings as errors                          |
| `-fsanitize=address`  | Enable AddressSanitizer                           |
| `-fno-exceptions`     | Disable exception support                         |

### Clang-Specific Flags

| Flag                  | Purpose                                        |
| --------------------- | ---------------------------------------------- |
| `-stdlib=libc++`      | Use LLVM's standard library instead of GCC's   |
| `-fcolor-diagnostics` | Colored diagnostic output (enabled by default) |
| `-fmodules`           | Enable C++20 modules (experimental)            |

### GCC-Specific Flags

| Flag                         | Purpose                     |
| ---------------------------- | --------------------------- |
| `-fdiagnostics-color=always` | Colored diagnostic output   |
| `-fanalyzer`                 | Enable static analysis pass |

## Verification Checklist

Before starting development, run through this checklist:

1. Compiler version matches the reference environment (Clang 16+ or GCC 13+).
2. `__cplusplus` reports the correct value for the target standard.
3. The infrastructure test compiles and runs without errors.
4. On macOS: `which clang++` points to Homebrew's LLVM, not Apple Clang.
5. On Windows: the MSYS2 UCRT64 terminal is used (not MSYS or MINGW64).
6. On Linux: `ldd` shows the correct standard library linkage.

## See Also

- [Language Standard and ABI Compatibility](2_language_standard_and_abi_compatibility.md)
- [Standard Library Implementation](3_standard_library_implementation.md)
- [Cross-compilation Toolchains](4_crosscompilation_toolchains.md)
- [Linker Configuration](5_linker_configuration.md)

## Appendix: Verifying Standard Library Linkage

After installation, verify that the compiler is correctly linked against the expected standard
library. This is essential for debugging linker errors and ABI mismatches.

### Linux: `ldd` Inspection

```bash
# Verify standard library linkage
ldd ./infra_test
# Expected (libstdc++):
#   libstdc++.so.6 => /usr/lib/x86_64-linux-gnu/libstdc++.so.6
# Expected (libc++):
#   libc++.so.1 => /usr/lib/x86_64-linux-gnu/libc++.so.1
#   libc++abi.so.1 => /usr/lib/x86_64-linux-gnu/libc++abi.so.1
```

### Linux: `readelf` Dynamic Section

```bash
# Show DT_NEEDED entries (shared library dependencies)
readelf -d ./infra_test | grep NEEDED
```

### Windows: `dumpbin` (MSVC) or `objdump` (MinGW)

```powershell
# MSVC: show DLL dependencies
dumpbin /dependents infra_test.exe

# MinGW: show DLL dependencies (using llvm-objdump or gnu objdump)
objdump -p infra_test.exe | grep "DLL Name"
```

### macOS: `otool`

```bash
# Show shared library dependencies
otool -L ./infra_test
# Expected (libc++):
#   /usr/lib/libc++.1.dylib
#   /usr/lib/libSystem.B.dylib
```

### Verifying C++ Standard at Compile Time

```cpp
#include <version>
#include <iostream>

int main() {
    std::cout << "__cplusplus = " << __cplusplus << "\n";

#if __has_cpp_attribute(nodiscard) >= 201907L
    std::cout << "C++20 [[nodiscard]] with reason supported\n";
#endif

#if __cpp_lib_ranges >= 202110L
    std::cout << "C++20 ranges fully supported\n";
#endif

#if __cpp_lib_print >= 202207L
    std::cout << "C++23 std::print supported\n";
#endif

#if __cpp_lib_expected >= 202211L
    std::cout << "C++23 std::expected supported\n";
#endif

    return 0;
}
```

### Cross-Compiler ABI Validation Script

For projects that must build with both GCC and Clang, the following CMake script verifies that both
compilers produce correct output for the same input:

```cmake
# abi_validation.cmake
function(validate_compiler compiler_id compiler_cxx)
    set(bin_dir ${CMAKE_BINARY_DIR}/validate_${compiler_id})
    file(MAKE_DIRECTORY ${bin_dir})

    execute_process(
        COMMAND ${CMAKE_COMMAND}
            -S ${CMAKE_SOURCE_DIR}/tests/abi_check
            -B ${bin_dir}
            -DCMAKE_CXX_COMPILER=${compiler_cxx}
            -DCMAKE_CXX_STANDARD=23
        OUTPUT_QUIET
        ERROR_VARIABLE err
        RESULT_VARIABLE rc
    )

    if (NOT rc EQUAL 0)
        message(WARNING "ABI validation failed for ${compiler_id}: ${err}")
    endif()

    execute_process(
        COMMAND ${CMAKE_COMMAND} --build ${bin_dir}
        OUTPUT_QUIET
        ERROR_VARIABLE err
        RESULT_VARIABLE rc
    )

    if (NOT rc EQUAL 0)
        message(WARNING "ABI validation build failed for ${compiler_id}: ${err}")
    endif()
endfunction()

if (CMAKE_CXX_COMPILER_ID STREQUAL "Clang")
    validate_compiler("GCC" "g++")
    validate_compiler("Clang" "clang++")
endif()
```
