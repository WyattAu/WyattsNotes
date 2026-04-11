---
title: Cross-compilation Toolchains
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

Examples:

- `x86_64-w64-mingw32-g++`: 64-bit Intel, Windows Target, MinGW environment.
- `aarch64-linux-gnu-g++`: 64-bit ARM, Linux Target, GNU ABI.
- `arm-none-eabi-g++`: 32-bit ARM, Bare Metal (No OS), Embedded ABI.

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
├── usr/
│   ├── include/
│   │   ├── c++/13/              # C++ standard library headers
│   │   ├── linux/               # Kernel headers
│   │   └── openssl/             # Third-party headers
│   ├── lib/
│   │   ├── libc.so.6            # Target C library (glibc/musl)
│   │   ├── libstdc++.so.6       # Target C++ standard library
│   │   ├── libssl.so.3          # Target OpenSSL
│   │   └── ld-linux-aarch64.so.1 # Target dynamic linker
│   └── bin/
│       └── ld-linux-aarch64.so.1 # Symlink to dynamic linker
└── lib/
    ├── libc.so.6
    └── libgcc_s.so.1
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
# In CMakeLists.txt — verify the STL at configure time
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

## See Also

- [Installing a Compiler](1_installing_compiler.md) — Setting up native and cross-compilers
- [Standard Library Implementation](3_standard_library_implementation.md) — Choosing the right
  standard library for the target
- [Linker Configuration](5_linker_configuration.md) — Cross-linking considerations
- [vcpkg](../3_dependency_management/3_vcpkg.md) — Cross-compiling dependencies with triplets
