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

:::warning Adding directory to path may not the best practice, using running commands from the
`msys2 ucrt64` terminal can be a better choice if multiple toolchains are installed to prevent
conflicts. :::

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

:::warning If you are using MSVC, replace `clang++` with `cl.exe` and ensure you have the latest
Visual Studio 2022 installed. :::

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

The `__cplusplus` predefined macro indicates which C++ standard the compiler is targeting:

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

### CMake Compiler Detection

CMake detects compilers automatically. You can override with:

```bash
# Specify compiler explicitly
cmake -S . -B build \
  -DCMAKE_C_COMPILER=clang-18 \
  -DCMAKE_CXX_COMPILER=clang++-18
```

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
