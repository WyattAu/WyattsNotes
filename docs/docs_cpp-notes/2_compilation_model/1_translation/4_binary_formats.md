---
title: Binary Formats
date: 2025-12-12T01:09:24.824Z
tags:
  - cpp
categories:
  - cpp
slug: binary-formats
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

When the linker completes its work, it produces a binary file. This file is not merely a linear sequence of machine code; it is a structured database containing instructions, static data, symbol tables, relocation entries, and metadata required by the Operating System's **Loader**.

Understanding the structure of this binary is essential for investigating code size bloat, debugging startup crashes, and understanding how C++ language constructs map to physical memory.

## The Three Major Formats

The format of the binary dictates how the OS parses and maps the file into virtual memory.

### 1. ELF (Executable and Linkable Format)

- **Operating Systems:** Linux, Android, BSD, Solaris, Game Consoles (PlayStation).
- **Architecture:**
  - **Section Header Table:** Used by the Linker. Describes the logical organization of data (e.g., "this is code", "this is debug info").
  - **Program Header Table:** Used by the OS Loader. Describes the physical mapping of file segments to memory segments (e.g., "Load this 4KB chunk into address 0x400000 with Read/Execute permissions").
- **Characteristics:** Highly flexible and supports arbitrary numbers of sections.

### 2. PE/COFF (Portable Executable)

- **Operating Systems:** Windows, EFI (UEFI Bootloaders).
- **Architecture:**
  - **MS-DOS Stub:** A legacy header ensuring the program prints "This program cannot be run in DOS mode" if executed on 16-bit DOS.
  - **PE Header:** Contains the "Optional Header" (which is actually mandatory) defining the entry point, stack size, and subsystem (Console vs. GUI).
  - **Data Directories:** Pointers to tables like Imports, Exports, and Resources.

### 3. Mach-O (Mach Object)

- **Operating Systems:** macOS, iOS, watchOS.
- **Architecture:**
  - **Load Commands:** A sequence of headers describing the file layout (e.g., `LC_SEGMENT_64`, `LC_MAIN`).
  - **FAT Binaries (Universal):** A wrapper allowing multiple architectures (e.g., x86_64 and arm64) to exist in a single file structure, enabling "Universal binaries" for Apple Silicon migration.

## Standard Sections

Despite the differences in file headers, all three formats organize C++ content into similar logical **Sections**. Each section has specific memory protection permissions enforced by the hardware (MMU).

### 1. `.text` (Code Segment)

- **Content:** The compiled machine code instructions.
- **Permissions:** `RX` (Read + Execute).
- **C++ Mapping:** Functions, methods, and lambdas.
- **Security:** The OS prevents writing to this section to thwart Self-Modifying Code exploits.

### 2. `.data` (Initialized Data)

- **Content:** Global and static variables that have a non-zero initial value.
- **Permissions:** `RW` (Read + Write).
- **C++ Mapping:**

  ```cpp
  int global_counter = 42;       // .data
  static int internal_id = 1;    // .data
  ```

- **Cost:** Increases the size of the binary on disk because the values must be stored in the file.

### 3. `.bss` (Block Started by Symbol)

- **Content:** Global and static variables initialized to zero (or uninitialized).
- **Permissions:** `RW` (Read + Write).
- **C++ Mapping:**

  ```cpp
  int zero_counter;              // .bss (Implicitly 0)
  static int buffer[1024];       // .bss
  ```

- **Cost:** **Zero on disk.** The binary header simply states "Reserve 1024 bytes here." The OS Loader allocates zeroed pages in RAM at runtime. Moving large arrays from `.data` to `.bss` is a common optimization to reduce binary size.

### 4. `.rodata` (Read-Only Data)

- **Content:** Immutable constants.
- **Permissions:** `R` (Read Only).
- **Name Variations:** `.rdata` (PE), `__TEXT,__const` (Mach-O).
- **C++ Mapping:**

  ```cpp
  const int config_val = 100;    // .rodata
  const char* str = "Hello";     // The string literal "Hello" is .rodata
  ```

### 5. `.ctors` / `.init_array`

- **Content:** Pointers to functions that must run _before_ `main()`.
- **C++ Mapping:** Constructors of global/static objects.

  ```cpp
  struct System { System() { /* ... */ } };
  System sys; // The constructor call is registered here
  ```

## Platform-Specific Inspection

To analyze how your C++ code is being distributed across these sections, utilize platform-specific binary analysis tools.

<Tabs>
  <TabItem value="linux" label="Linux (ELF)" default>

**Tool:** `readelf` or `size`

1. **View Section Headers:**

   ```bash
   readelf -S ./app
   ```

   _Look for `Flags`: `AX` (Alloc/Execute), `WA` (Write/Alloc)._

2. **View Segment Size Summary:**

   ```bash
   size ./app
   ```

   _Output:_

   ```text
   text    data     bss     dec     hex filename
   2048     512    1024    3584     e00 ./app
   ```

3. **View Program Headers (Loader View):**

   ```bash
   readelf -l ./app
   ```

   _This shows `LOAD` segments, which map sections to memory pages._

  </TabItem>
  <TabItem value="windows" label="Windows (PE)" default>

**Tool:** `dumpbin` (Developer Command Prompt)

1. **View Section Headers:**

   ```cmd
   dumpbin /HEADERS app.exe
   ```

2. **Analyze Size:**
   Look for `size of raw data` (Disk usage) vs `virtual size` (RAM usage).
   - Note: `.bss` data will have a Virtual Size > 0 but a Raw Data Size of 0.

  </TabItem>
  <TabItem value="macos" label="macOS (Mach-O)" default>

**Tool:** `otool` or `size`

1. **View Load Commands:**

   ```bash
   otool -l ./app
   ```

   _Mach-O organizes sections into segments. Look for `segname __TEXT` containing `sectname __text`._

2. **View Size:**

   ```bash
   size -m ./app
   ```

  </TabItem>
</Tabs>

## Architectural Implications

### 1. W^X (Write XOR Execute)

Modern operating systems enforce a security policy where memory can be Writable or Executable, but never both simultaneously.

- `.text` is Executable but not Writable.
- `.data` and `.bss` are Writable but not Executable.
- **Implication:** You cannot generate code at runtime (JIT) in standard C++ without utilizing specific OS APIs (`mmap`, `VirtualAlloc`) to explicitly request `RWX` pages, which is flagged by security software.

### 2. Static Initialization Order Fiasco

Code in `.init_array` executes before `main`. The order in which object files populate this array is generally undefined across translation units.

- **Risk:** If Global A depends on Global B, but A's constructor runs before B's, the program crashes.
- **Solution:** Avoid global objects with non-trivial constructors. Use `constinit` (C++20) or the "Construct on First Use" idiom (static local variables).

### 3. Binary Bloat Analysis

If a binary is unexpectedly large, check the `.data` section. A large global array initialized to non-zero values will bloat the file on disk.

- _Optimization:_ Initialize large arrays to zero (moves them to `.bss`).
- _Optimization:_ Use `constexpr` to verify calculations happen at compile time, potentially removing the need for data storage if the value is immediate.
