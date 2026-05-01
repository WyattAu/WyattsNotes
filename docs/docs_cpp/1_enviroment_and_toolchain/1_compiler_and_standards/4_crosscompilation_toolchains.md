---
title: Cross-compilation Toolchains
description:
  "C++: Cross-compilation Toolchains — The Architecture of a Cross-Toolchain; 1. The Cross-Compiler; 2. The Sysroot; 3. The Binutils."
date: 2025-12-10T05:18:46.463Z
tags:
  - cpp
categories:
  - cpp
slug: cross-compilation-toolchains
---

Cross-compilation is the process of building executable code on one architecture (the **Build
Host**) that is intended to execute on a different architecture or operating system (the
**Target**).

This is distinct from native compilation, where the Build Host and Target are identical.
Cross-compilation is standard practice for embedded systems, mobile development, and CI/CD pipelines
where build agents (often Linux x86_64) must generate binaries for Windows, macOS, or ARM devices.

## The Architecture of a Cross-Toolchain

A functional cross-compilation environment requires three distinct components synchronized to the
specific target.

### 1. The Cross-Compiler

A compiler binary capable of generating machine code for a different architecture. It is typically
named using a **Target Triple** to distinguish it from the native compiler.

**The Target Triple Format:** `<arch>-<vendor>-<sys>-<abi>`

The target triple is standardized by LLVM and GCC as a unique identifier for a compilation target.
Every binary in the cross-toolchain is prefixed with this triple to avoid collision with the host
toolchain.

### 2. The Sysroot

The compiler cannot use the headers (`/usr/include`) or libraries (`/usr/lib`) of the Build Host, as
they correspond to the wrong architecture. The **Sysroot** is a directory structure that mirrors the
root (`/`) of the Target system, containing:

- **Target Headers:** Kernel headers and Standard Library headers (glibc/musl).
- **Target Libraries:** Pre-compiled shared objects (`.so`, `.dll`) and static archives (`.a`,
  `.lib`) for the target architecture.

### 3. The Binutils

Support tools required for linking and object manipulation, also prefixed with the target triple:

- `ld`: The Linker.
- `as`: The Assembler.
- `strip`: Symbol removal tool.
- `objdump`: Binary inspection tool.

## Common Target Triples

The following table lists target triples commonly encountered in cross-compilation.

| Target Platform             | Target Triple           | Notes                                       |
| :-------------------------- | :---------------------- | :------------------------------------------ |
| Linux x86_64 (native)       | `x86_64-linux-gnu`      | Standard Linux desktop/server               |
| Linux ARM64 (AArch64)       | `aarch64-linux-gnu`     | NVIDIA Jetson, AWS Graviton, Raspberry Pi 5 |
| Linux ARM32 (Hard Float)    | `arm-linux-gnueabihf`   | Raspberry Pi 3/4 (32-bit mode)              |
| Linux RISC-V 64             | `riscv64-linux-gnu`     | SiFive boards, RISC-V development           |
| Windows x86_64 (MinGW)      | `x86_64-w64-mingw32`    | Cross-compiling Windows from Linux          |
| Windows ARM64 (MinGW)       | `aarch64-w64-mingw32`   | Windows on ARM                              |
| Android ARM64               | `aarch64-linux-android` | Android NDK (API level appended)            |
| macOS ARM64 (Apple Silicon) | `arm64-apple-darwin22`  | Requires Xcode toolchain on macOS           |
| macOS x86_64                | `x86_64-apple-darwin22` | Intel Macs                                  |
| FreeRTOS ARM Cortex-M4      | `arm-none-eabi`         | Bare metal, no OS                           |
| FreeRTOS ARM Cortex-M7      | `arm-none-eabi`         | Bare metal (same triple, different `-mcpu`) |
| Embedded RISC-V             | `riscv64-unknown-elf`   | Bare metal RISC-V                           |

### Clang's `-target` Flag

Clang uses a unified driver model. Instead of requiring a separate prefixed binary for each target,
Clang accepts a `-target` flag that dynamically selects the code generator:

```bash
# Cross-compile for ARM64 Linux using Clang
clang++ -target aarch64-linux-gnu --sysroot=/usr/aarch64-linux-gnu -std=c++23 main.cpp

# Cross-compile for RISC-V bare metal
clang++ -target riscv64-unknown-elf -march=rv64imac -mabi=lp64 main.cpp

# Cross-compile for Windows from Linux
clang++ -target x86_64-w64-mingw32 --sysroot=/usr/x86_64-w64-mingw32 main.cpp
```

This is fundamentally different from GCC, which requires a separate binary for each target
(`aarch64-linux-gnu-g++`, `x86_64-w64-mingw32-g++`). Clang's approach simplifies CI/CD pipelines
because a single Clang installation can target any architecture.

## CMake Toolchain Files

In modern C++, passing dozens of compiler flags (`--sysroot`, `-target`) via the command line is
fragile and unmaintainable. The industry standard is the **CMake Toolchain File**.

A toolchain file is a CMake script (typically ending in `.cmake`) that presets compilation variables
before the project configuration step.

### Anatomy of a Toolchain File

Create a file named `toolchain-mingw-x64.cmake`:

```cmake
# 1. Define the System Name
# This informs CMake that we are cross-compiling.
# Common values: Linux, Windows, Android, Darwin, Generic (Bare Metal)
set(CMAKE_SYSTEM_NAME Windows)
set(CMAKE_SYSTEM_PROCESSOR x86_64)

# 2. Specify Compilers
# Absolute paths are preferred to ensure reproducibility.
set(CMAKE_C_COMPILER /usr/bin/x86_64-w64-mingw32-gcc)
set(CMAKE_CXX_COMPILER /usr/bin/x86_64-w64-mingw32-g++)
set(CMAKE_RC_COMPILER /usr/bin/x86_64-w64-mingw32-windres) # For Windows Resources

# 3. Define the Sysroot
# The compiler will look here for headers and libraries.
set(CMAKE_SYSROOT /usr/x86_64-w64-mingw32)

# 4. Adjust Search Modes
# Crucial: Tell CMake to look for headers/libs in the Sysroot,
# but look for programs (like Make/Ninja) on the Host.

# Search for programs in the build host directories
set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)

# Search for libraries and headers in the target directories
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE ONLY)
```

### ARM64 Linux Toolchain File

```cmake
# toolchain-aarch64-linux.cmake
set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR aarch64)

set(CMAKE_C_COMPILER aarch64-linux-gnu-gcc)
set(CMAKE_CXX_COMPILER aarch64-linux-gnu-g++)

set(CMAKE_SYSROOT /usr/aarch64-linux-gnu)

set(CMAKE_FIND_ROOT_PATH_MODE_PROGRAM NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE ONLY)
set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE ONLY)

# Ensure the correct standard library is used
set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -D_GLIBCXX_USE_CXX11_ABI=1")
```

### Invoking the Build

Pass the toolchain file to CMake during the configuration phase using `-DCMAKE_TOOLCHAIN_FILE`.

```bash
cmake -S . -B build-win -G Ninja \
    -DCMAKE_TOOLCHAIN_FILE=toolchain-mingw-x64.cmake \
    -DCMAKE_BUILD_TYPE=Release

cmake --build build-win
```

## Practical Scenarios

### Scenario 1: Linux Host $\to$ Windows Target (MinGW-w64)

This is the most common CI/CD scenario, allowing Linux servers to build Windows `.exe` artifacts
without needing a Windows license or VM.

**Prerequisites (Debian/Ubuntu):**

```bash
sudo apt install mingw-w64
```

**Implementation Details:** MinGW-w64 provides a complete sysroot usually located at
`/usr/x86_64-w64-mingw32`. When using `std::thread` in this environment, ensure the POSIX threading
model is selected if the Win32 threading model is insufficient, or link against `mcfgthread` for
C++11 threading compliance.

### Scenario 2: x86_64 Host $\to$ ARM64 Linux Target

Used for deploying high-performance C++ code to edge devices (e.g., NVIDIA Jetson, Raspberry Pi).

**Prerequisites (Debian/Ubuntu):**

```bash
sudo apt install g++-aarch64-linux-gnu
```

**Toolchain Configuration:**

```cmake
set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR aarch64)
set(CMAKE_C_COMPILER aarch64-linux-gnu-gcc)
set(CMAKE_CXX_COMPILER aarch64-linux-gnu-g++)
set(CMAKE_SYSROOT /usr/aarch64-linux-gnu)
```

### Scenario 3: Linux Host $\to$ RISC-V 64 Target

RISC-V is an open ISA gaining traction in embedded and HPC. Cross-compilation setup follows the same
pattern.

**Prerequisites (Debian/Ubuntu):**

```bash
sudo apt install gcc-riscv64-linux-gnu g++-riscv64-linux-gnu
```

**Toolchain Configuration:**

```cmake
set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR riscv64)
set(CMAKE_C_COMPILER riscv64-linux-gnu-gcc)
set(CMAKE_CXX_COMPILER riscv64-linux-gnu-g++)
set(CMAKE_SYSROOT /usr/riscv64-linux-gnu)
```

---

## Handling Dependencies (Vcpkg)

Managing 3rd-party libraries (e.g., Boost, fmt, nlohmann_json) during cross-compilation is complex
because the libraries themselves must be compiled for the target.

**Vcpkg** handles this via "Triplet" files.

1. **Select the Triplet:** Vcpkg ships with community triplets like `x64-mingw-dynamic` or
   `arm64-linux`.
2. **Install Dependencies for Target:**

   ```bash
   ./vcpkg install fmt:x64-mingw-dynamic
   ```

3. **Integrate with CMake:**

   ```bash
   cmake -S . -B build \
       -DCMAKE_TOOLCHAIN_FILE=[path/to/vcpkg]/scripts/buildsystems/vcpkg.cmake \
       -DVCPKG_TARGET_TRIPLET=x64-mingw-dynamic
   ```

_Note: When using Vcpkg, you often do not need to write a manual CMake toolchain file; Vcpkg
generates one dynamically based on the triplet._

## Verification

After building, verify the artifact architecture using the `file` command on Linux/macOS.

**Command:**

```bash
file ./build-win/app.exe
```

**Expected Output:** `PE32+ executable (console) x86-64, for MS Windows`

**Command:**

```bash
file ./build-arm/app
```

**Expected Output:** `ELF 64-bit LSB pie executable, ARM aarch64, version 1 (SYSV)`

If the output indicates `x86-64` and `ELF` (when targeting ARM or Windows), the cross-compilation
configuration failed, and the host compiler was mostly likely used by mistake.

## Sysroot Configuration

The sysroot is the single most critical component of a cross-compilation environment. An incorrectly
configured sysroot produces binaries that cannot execute on the target.

### What a Sysroot Contains

A sysroot is a directory that mirrors the root filesystem of the target:

```text
/usr/aarch64-linux-gnu/          # Sysroot root
  usr/
    include/
      c++/13/              # C++ standard library headers
      linux/               # Kernel headers
      openssl/             # Third-party headers
    lib/
      libc.so.6            # Target C library (glibc/musl)
      libstdc++.so.6       # Target C++ standard library
      libssl.so.3          # Target OpenSSL
      ld-linux-aarch64.so.1 # Target dynamic linker
    bin/
      ld-linux-aarch64.so.1 # Symlink to dynamic linker
  lib/
    libc.so.6
    libgcc_s.so.1
```

### Creating a Sysroot from a Target Device

For embedded targets (Raspberry Pi, Jetson), the cleanest approach is to copy the target's
filesystem:

```bash
# On the target device (Raspberry Pi):
sudo apt install rsync
rsync -a --delete --exclude=/proc --exclude=/sys --exclude=/dev \
    / pi@build-host:/sysroots/raspberry-pi-arm64/
```

### Using a Pre-built Sysroot

Many toolchain vendors provide pre-built sysroots:

```bash
# Android NDK sysroot
$ANDROID_NDK/toolchains/llvm/prebuilt/linux-x86_64/sysroot

# Yocto/OpenEmbedded sysroot
$OECORE_TARGET_SYSROOT
```

### Compiler Flags for Sysroot Selection

```bash
# GCC: --sysroot flag
aarch64-linux-gnu-g++ --sysroot=/sysroots/raspberry-pi-arm64 main.cpp

# Clang: --sysroot and -target flags
clang++ -target aarch64-linux-gnu --sysroot=/sysroots/raspberry-pi-arm64 main.cpp
```

The `--sysroot` flag instructs the compiler to search for headers and libraries under the specified
directory instead of the host system's `/usr/include` and `/usr/lib`.

### Sysroot Best Practices

1. **Keep the sysroot immutable.** Never modify the sysroot in-place. If you need to add libraries,
   install them into a separate overlay directory and use `-L` flags to point the linker there.
2. **Match the sysroot to the target OS version.** A sysroot from Ubuntu 22.04 links against
   `glibc 2.35`. If the target runs Ubuntu 20.04 (glibc 2.31), symbols like `statx` may be missing
   at runtime.
3. **Verify the dynamic linker.** The `INTERP` segment in the ELF binary must point to a dynamic
   linker that exists on the target. Use `readelf -l build/app | grep INTERP` to verify.

## QEMU Emulation for Testing

Cross-compiled binaries cannot run natively on the build host. **QEMU user-mode emulation** allows
running target-architecture binaries on the host by translating system calls.

### Installing QEMU

```bash
# Debian/Ubuntu
sudo apt install qemu-user-static qemu-user

# Verify
qemu-aarch64 -version
```

### Running Cross-Compiled Binaries

```bash
# Run an ARM64 binary on x86_64 host
qemu-aarch64 -L /usr/aarch64-linux-gnu ./build-arm/app

# The -L flag sets the dynamic linker search path to the sysroot
```

### Running Tests with CTest via QEMU

CMake can be configured to wrap test execution in QEMU:

```cmake
set(CMAKE_CROSSCOMPILING ON)
set(CMAKE_SYSTEM_NAME Linux)
set(CMAKE_SYSTEM_PROCESSOR aarch64)

# Tell CMake how to run executables on the build host
set(CMAKE_CROSSCOMPILING_EMULATOR qemu-aarch64;-L;/usr/aarch64-linux-gnu)
```

With this configuration, `ctest` automatically runs each test binary through QEMU:

```bash
cd build-arm && ctest --output-on-failure
# 1/5 Test #1: UnitTest_Vector ........... Passed
# 2/5 Test #2: UnitTest_String ........... Passed
# 3/5 Test #3: IntegrationTest ........... Passed
```

### Limitations of QEMU Emulation

- **Performance:** QEMU user-mode is 5-10x slower than native execution. Full system emulation
  (`qemu-system-*`) is 50-100x slower.
- **Syscall compatibility:** Some syscalls (e.g., advanced networking, specific `ioctl` calls) may
  not be fully emulated.
- **Signal handling:** Signal semantics differ between emulated and native environments.
- **Floating point:** NEON (ARM SIMD) instructions are emulated in software and may produce slightly
  different results than hardware.

## Android NDK Cross-Compilation

The Android NDK provides a complete cross-compilation toolchain for building native C++ code
targeting Android devices.

### NDK Toolchain File

CMake ships with a built-in toolchain file for the NDK:

```bash
cmake -S . -B build-android \
    -DCMAKE_TOOLCHAIN_FILE=$ANDROID_NDK/build/cmake/android.toolchain.cmake \
    -DANDROID_ABI=arm64-v8a \
    -DANDROID_PLATFORM=android-33 \
    -DANDROID_STL=c++_shared
```

### NDK ABI Options

| ABI           | Architecture | Devices                              |
| ------------- | ------------ | ------------------------------------ |
| `armeabi-v7a` | ARM 32-bit   | Older Android devices                |
| `arm64-v8a`   | ARM 64-bit   | Modern Android devices (recommended) |
| `x86`         | x86 32-bit   | Android emulators (older)            |
| `x86_64`      | x86 64-bit   | Android emulators                    |

### NDK STL Options

| STL          | Description     | Use Case                              |
| ------------ | --------------- | ------------------------------------- |
| `c++_shared` | libc++ (shared) | Default, recommended for most apps    |
| `c++_static` | libc++ (static) | Standalone executables, NDK-only apps |
| `none`       | No C++ STL      | Pure C projects                       |

```cmake
# In CMakeLists.txt -- verify the STL at configure time
if(ANDROID)
    message(STATUS "Android ABI: ${ANDROID_ABI}")
    message(STATUS "Android STL: ${ANDROID_STL}")
    message(STATUS "Android Platform: ${ANDROID_PLATFORM}")
endif()
```

## Embedded Target: ARM Cortex-M (Bare Metal)

Bare-metal cross-compilation targets microcontrollers without an operating system. This requires a
different toolchain and approach.

### Installing the ARM Embedded Toolchain

```bash
# Download from ARM's website
wget https://developer.arm.com/-/media/Files/downloads/gnu/13.2.rel1/binrel/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz

# Extract
tar xf arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi.tar.xz
export PATH=$PATH:$PWD/arm-gnu-toolchain-13.2.rel1-x86_64-arm-none-eabi/bin
```

### CMake Toolchain for Bare Metal

```cmake
# toolchain-arm-cortex-m4.cmake
set(CMAKE_SYSTEM_NAME Generic)
set(CMAKE_SYSTEM_PROCESSOR arm)

set(CMAKE_C_COMPILER arm-none-eabi-gcc)
set(CMAKE_CXX_COMPILER arm-none-eabi-g++)
set(CMAKE_ASM_COMPILER arm-none-eabi-gcc)

set(CMAKE_TRY_COMPILE_TARGET_TYPE STATIC_LIBRARY)

# Cortex-M4 with FPU
set(CPU_FLAGS "-mcpu=cortex-m4 -mthumb -mfpu=fpv4-sp-d16 -mfloat-abi=hard")
set(CMAKE_C_FLAGS "${CPU_FLAGS} -Wall -Wextra -fdata-sections -ffunction-sections")
set(CMAKE_CXX_FLAGS "${CMAKE_C_FLAGS} -fno-exceptions -fno-rtti")

# Linker script
set(CMAKE_EXE_LINKER_FLAGS "${CPU_FLAGS} -T${CMAKE_SOURCE_DIR}/stm32f407.ld -Wl,--gc-sections -nostartfiles")

# No default include paths (bare metal)
set(CMAKE_FIND_ROOT_PATH_MODE_INCLUDE NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_LIBRARY NEVER)
set(CMAKE_FIND_ROOT_PATH_MODE_PACKAGE NEVER)
```

### Minimal Bare-Metal CMakeLists.txt

```cmake
cmake_minimum_required(VERSION 3.25)
project(Blink CXX C ASM)

set(CMAKE_CXX_STANDARD 20)

add_executable(blink.elf
    src/main.cpp
    src/startup.s
    src/system.c
)

target_link_libraries(blink.elf PRIVATE
    -lc -lm -lnosys  # Newlib stubs
)
```

### Building and Flashing

```bash
cmake -S . -B build \
    -DCMAKE_TOOLCHAIN_FILE=toolchain-arm-cortex-m4.cmake

cmake --build build

# Flash with OpenOCD
openocd -f interface/stlink.cfg -f target/stm32f4x.cfg \
    -c "program build/blink.elf verify reset exit"
```

### Embedded RISC-V Cross-Compilation

RISC-V bare-metal follows the same pattern. The key difference is the triple and architecture flags:

```cmake
# toolchain-riscv-baremetal.cmake
set(CMAKE_SYSTEM_NAME Generic)
set(CMAKE_SYSTEM_PROCESSOR riscv)

set(CMAKE_C_COMPILER riscv64-unknown-elf-gcc)
set(CMAKE_CXX_COMPILER riscv64-unknown-elf-g++)
set(CMAKE_ASM_COMPILER riscv64-unknown-elf-gcc)

set(CMAKE_TRY_COMPILE_TARGET_TYPE STATIC_LIBRARY)

# RV64IMAC (integer, multiply, atomic, compressed)
set(CPU_FLAGS "-march=rv64imac -mabi=lp64 -mcmodel=medany")
set(CMAKE_C_FLAGS "${CPU_FLAGS} -Wall -Wextra -fdata-sections -ffunction-sections")
set(CMAKE_CXX_FLAGS "${CMAKE_C_FLAGS} -fno-exceptions -fno-rtti")
```

## CMake Cross-Compilation with Conan

Conan provides an alternative to manual toolchain files for cross-compilation. Conan's profile
system handles the toolchain selection, standard library configuration, and dependency resolution
for the target platform.

### Conan Cross-Compilation Workflow

```bash
# Step 1: Install dependencies for the host (target) platform
conan install . \
    --output-folder=build \
    --build=missing \
    -pr:b=profile/build-linux-x64 \
    -pr:h=profile/host-arm64-linux

# Step 2: CMake picks up the generated toolchain and presets
cmake --preset conan-release
cmake --build --preset conan-release
```

Conan generates a `CMakePresets.json` that contains the toolchain file, build directory, and cache
variables. This eliminates the need to write a manual toolchain file when using Conan.

### Conan Profile for ARM64 Cross-Compilation

```ini
# profile/host-arm64-linux
[settings]
os=Linux
arch=armv8
compiler=gcc
compiler.version=13
compiler.libcxx=libstdc++11
compiler.cppstd=20
build_type=Release

[conf]
tools.cmake.cmaketoolchain:generator=Ninja
```

This approach is cleaner than manual toolchain files when dependencies are managed by Conan, because
Conan resolves the dependency graph for the target architecture automatically.

## Cross-Compiling Static Libraries vs Shared Libraries

The choice between static and shared libraries has different implications for cross-compilation than
for native compilation.

### Static Libraries (Recommended for Embedded)

Static libraries (`.a`) are architecture-specific but have no runtime dependency. They are the
default choice for embedded targets and bare-metal environments.

```cmake
# Force static linking in the toolchain
set(BUILD_SHARED_LIBS OFF)
```

### Shared Libraries (Recommended for Linux Targets)

Shared libraries (`.so`) require a matching dynamic linker on the target. When cross-compiling, the
shared libraries must be built for the target architecture, and the `RPATH` must be set correctly so
the executable can find them at runtime.

```cmake
# Set RPATH for the target filesystem
set(CMAKE_INSTALL_RPATH "$ORIGIN/../lib")
set(CMAKE_BUILD_WITH_INSTALL_RPATH TRUE)
```

### Verifying Library Architecture

After building, verify that all libraries are for the correct architecture:

```bash
# Check all .so and .a files in the build directory
find build/ -name "*.so" -o -name "*.a" | xargs file | grep -v "x86-64"
# Should return nothing if cross-compiling for ARM64
```

## Common Pitfalls

1. **Host vs. Build vs. Target confusion:** These three terms describe different roles:
   - **Host:** The machine running the compiler (e.g., x86_64 Linux).
   - **Build:** The machine running the build system (usually same as Host).
   - **Target:** The machine that will execute the binary (e.g., ARM64).

   Confusing these leads to using the host compiler instead of the cross-compiler, producing
   binaries that run on the wrong architecture.

2. **Missing `CMAKE_SYSTEM_NAME`:** If `CMAKE_SYSTEM_NAME` is not set, CMake assumes native
   compilation and will use `find_program` to locate the host compiler, ignoring your cross-compiler
   settings. Always set `CMAKE_SYSTEM_NAME` in your toolchain file.

3. **Wrong dynamic linker:** On Linux targets, the dynamic linker (ld-linux) must match the target
   architecture. If you accidentally link against the host's `ld-linux-x86-64.so.2` in an ARM
   binary, execution will fail with `exec format error`. Use `file` to verify and `readelf -l` to
   inspect the `INTERP` program header.

4. **Forgetting `CMAKE_FIND_ROOT_PATH_MODE`:** Without setting these variables, `find_package()` and
   `find_library()` will search the host filesystem, potentially finding host-architecture
   libraries. Set them to `ONLY` for libraries and includes, and `NEVER` for programs.

5. **Hardcoded paths:** Paths like `/usr/include` in source code or build scripts will resolve to
   the host filesystem during cross-compilation. Use CMake's `find_path()` and generator expressions
   instead of hardcoded includes.

6. **Sysroot version mismatch:** Building against a sysroot from Ubuntu 22.04 (glibc 2.35) and
   deploying to Ubuntu 20.04 (glibc 2.31) causes `version GLIBC_2.34 not found` errors at runtime.
   The sysroot's C library version must be less than or equal to the target's C library version.

7. **QEMU testing false negatives:** Some tests may pass under QEMU but fail on real hardware due to
   differences in FPU rounding, timing behavior, or peripheral access. Always validate on physical
   hardware before shipping embedded firmware.

8. **Not using `CMAKE_TRY_COMPILE_TARGET_TYPE STATIC_LIBRARY`:** For bare-metal targets
   (`CMAKE_SYSTEM_NAME Generic`), CMake's default `try_compile` attempts to link an executable,
   which fails because there is no OS runtime. Setting `CMAKE_TRY_COMPILE_TARGET_TYPE` to
   `STATIC_LIBRARY` avoids this by only compiling to a `.a` file during configuration checks.

9. **Missing `--gc-sections` for embedded:** Embedded targets have limited flash. Without
   `-ffunction-sections -fdata-sections` at compile time and `--gc-sections` at link time, the
   linker includes every function and data object from every linked translation unit, wasting
   significant flash space.

10. **Using `find_package` without `CMAKE_FIND_ROOT_PATH`:** When cross-compiling, `find_package`
    searches the host system by default. If you need to find a package installed in the sysroot, set
    `CMAKE_PREFIX_PATH` to the sysroot's install prefix:

    ```cmake
    set(CMAKE_PREFIX_PATH ${CMAKE_SYSROOT}/usr)
    set(CMAKE_FIND_ROOT_PATH ${CMAKE_SYSROOT})
    ```

## Cross-Compilation Diagnostic Checklist

Use the following checklist to diagnose cross-compilation failures:

1. **Verify the compiler target:**

   ```bash
   aarch64-linux-gnu-g++ -dumpmachine
   # Expected: aarch64-linux-gnu
   ```

2. **Verify the output binary architecture:**

   ```bash
   file build/app
   # Expected: ELF 64-bit LSB pie executable, ARM aarch64
   ```

3. **Verify the dynamic linker (for Linux targets):**

   ```bash
   readelf -l build/app | grep interpreter
   # Expected: [Requesting program interpreter: /lib/ld-linux-aarch64.so.1]
   ```

4. **Verify library dependencies:**

   ```bash
   aarch64-linux-gnu-readelf -d build/app | grep NEEDED
   # Ensure all DT_NEEDED entries are for target-architecture libraries
   ```

5. **Verify no host paths in the binary:**

   ```bash
   strings build/app | grep "/usr/lib/x86_64-linux-gnu"
   # Should return nothing -- any host paths indicate misconfiguration
   ```

6. **Run under QEMU (if available):**

   ```bash
   qemu-aarch64 -L /usr/aarch64-linux-gnu build/app
   ```

## See Also

- [Installing a Compiler](1_installing_compiler.md) -- Setting up native and cross-compilers
- [Standard Library Implementation](3_standard_library_implementation.md) -- Choosing the right
  standard library for the target
- [Linker Configuration](5_linker_configuration.md) -- Cross-linking considerations
- [vcpkg](../3_dependency_management/3_vcpkg.md) -- Cross-compiling dependencies with triplets
- [Conan](../3_dependency_management/4_conan.md) -- Cross-compilation with Conan profiles
