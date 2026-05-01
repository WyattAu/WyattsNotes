---
title: Binary Formats
description:
  "C++: Binary Formats — The Three Major Formats; 1. ELF (Executable and Linkable Format); 2. PE/COFF (Portable Executable); 3. Mach-O (Mach Object)."
date: 2025-12-12T01:09:24.824Z
tags:
  - cpp
categories:
  - cpp
slug: binary-formats
---

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

When the linker completes its work, it produces a binary file. This file is not merely a linear
sequence of machine code; it is a structured database containing instructions, static data, symbol
tables, relocation entries, and metadata required by the Operating System's **Loader**.

Understanding the structure of this binary is essential for investigating code size bloat, debugging
startup crashes, and understanding how C++ language constructs map to physical memory.

## The Three Major Formats

The format of the binary dictates how the OS parses and maps the file into virtual memory.

### 1. ELF (Executable and Linkable Format)

- **Operating Systems:** Linux, Android, BSD, Solaris, Game Consoles (PlayStation).
- **Architecture:**
  - **Section Header Table:** Used by the Linker. Describes the logical organization of data (e.g.,
    "this is code", "this is debug info").
  - **Program Header Table:** Used by the OS Loader. Describes the physical mapping of file segments
    to memory segments (e.g., "Load this 4KB chunk into address 0x400000 with Read/Execute
    permissions").
- **Characteristics:** Highly flexible and supports arbitrary numbers of sections.

### 2. PE/COFF (Portable Executable)

- **Operating Systems:** Windows, EFI (UEFI Bootloaders).
- **Architecture:**
  - **MS-DOS Stub:** A legacy header ensuring the program prints "This program cannot be run in DOS
    mode" if executed on 16-bit DOS.
  - **PE Header:** Contains the "Optional Header" (which is actually mandatory) defining the entry
    point, stack size, and subsystem (Console vs. GUI).
  - **Data Directories:** Pointers to tables like Imports, Exports, and Resources.

### 3. Mach-O (Mach Object)

- **Operating Systems:** macOS, iOS, watchOS.
- **Architecture:**
  - **Load Commands:** A sequence of headers describing the file layout (e.g., `LC_SEGMENT_64`,
    `LC_MAIN`).
  - **FAT Binaries (Universal):** A wrapper allowing multiple architectures (e.g., x86_64 and arm64)
    to exist in a single file structure, enabling "Universal binaries" for Apple Silicon migration.

### Comparison of Binary Formats

| Aspect               | ELF                  | PE/COFF         | Mach-O             |
| :------------------- | :------------------- | :-------------- | :----------------- |
| **Primary Platform** | Linux, BSD, Android  | Windows, UEFI   | macOS, iOS         |
| **Logical View**     | Section Header Table | Section Table   | Load Commands      |
| **Loader View**      | Program Header Table | Optional Header | `LC_SEGMENT_64`    |
| **Debug Info**       | DWARF (inline)       | PDB (external)  | DWARF (inline)     |
| **Code Signing**     | Optional             | Authenticode    | Mandatory          |
| **Max Sections**     | Unlimited            | 96 (PE32+)      | Unlimited          |
| **Dynamic Linking**  | `.got` + `.plt`      | IAT             | Stub islands + GOT |
| **TLS**              | `.tbss` / `.tdata`   | `.tls` section  | `LC_THREAD_LOCAL`  |

## Standard Sections

Despite the differences in file headers, all three formats organize C++ content into similar logical
**Sections**. Each section has specific memory protection permissions enforced by the hardware
(MMU).

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

- **Cost:** **Zero on disk.** The binary header simply states "Reserve 1024 bytes here." The OS
  Loader allocates zeroed pages in RAM at runtime. Moving large arrays from `.data` to `.bss` is a
  common optimization to reduce binary size.

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

To analyze how your C++ code is being distributed across these sections, utilize platform-specific
binary analysis tools.

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
  <TabItem value="windows" label="Windows (PE)">

**Tool:** `dumpbin` (Developer Command Prompt)

1. **View Section Headers:**

   ```cmd
   dumpbin /HEADERS app.exe
   ```

2. **Analyze Size:** Look for `size of raw data` (Disk usage) vs `virtual size` (RAM usage).
   - Note: `.bss` data will have a Virtual Size &gt; 0 but a Raw Data Size of 0.

  </TabItem>
  <TabItem value="macos" label="macOS (Mach-O)">

**Tool:** `otool` or `size`

1. **View Load Commands:**

   ```bash
   otool -l ./app
   ```

   _Mach-O organizes sections into segments. Look for `segname __TEXT` containing
   `sectname __text`._

2. **View Size:**

   ```bash
   size -m ./app
   ```

  </TabItem>
</Tabs>

## Architectural Implications

### 1. W^X (Write XOR Execute)

Modern operating systems enforce a security policy where memory can be Writable or Executable, but
never both simultaneously.

- `.text` is Executable but not Writable.
- `.data` and `.bss` are Writable but not Executable.
- **Implication:** You cannot generate code at runtime (JIT) in standard C++ without utilizing
  specific OS APIs (`mmap`, `VirtualAlloc`) to explicitly request `RWX` pages, which is flagged by
  security software.

### 2. Static Initialization Order Fiasco

Code in `.init_array` executes before `main`. The order in which object files populate this array is
generally undefined across translation units [N4950 S6.6.3.2].

- **Risk:** If Global A depends on Global B, but A's constructor runs before B's, the program
  crashes.
- **Solution:** Avoid global objects with non-trivial constructors. Use `constinit` (C++20) or the
  "Construct on First Use" idiom (static local variables).

### 3. Binary Bloat Analysis

If a binary is unexpectedly large, check the `.data` section. A large global array initialized to
non-zero values will bloat the file on disk.

- _Optimization:_ Initialize large arrays to zero (moves them to `.bss`).
- _Optimization:_ Use `constexpr` to verify calculations happen at compile time, potentially
  removing the need for data storage if the value is immediate.

---

## ELF Structure in Depth

ELF is the dominant binary format on Linux and forms the basis for understanding how the OS
interacts with compiled C++ code. Every ELF file begins with an ELF header that identifies the file
class (32-bit or 64-bit), endianness, and file type (relocatable, executable, shared object, or core
dump).

### The ELF Header

```bash
readelf -h ./app
```

Key fields in the ELF header:

| Field         | Description                                                           |
| :------------ | :-------------------------------------------------------------------- |
| `e_type`      | `ET_EXEC` (executable), `ET_DYN` (shared/PIE), `ET_REL` (object file) |
| `e_machine`   | Target ISA: `x86-64`, `AArch64`, `RISC-V`, etc.                       |
| `e_phoff`     | Byte offset to the Program Header Table (loader view)                 |
| `e_shoff`     | Byte offset to the Section Header Table (linker view)                 |
| `e_phentsize` | Size of each Program Header entry                                     |
| `e_phnum`     | Number of Program Header entries                                      |

Modern Linux distributions compile executables as Position-Independent Executables (PIE), which
means `e_type` is `ET_DYN` (the same type as shared libraries). This enables Address Space Layout
Randomization (ASLR) for executables.

### Section Header Table vs Program Header Table

These are two orthogonal views of the same binary data:

- **Section Headers** are used by the **linker** and debugger. They describe logical groupings of
  data (code, read-only data, debug info, symbol tables). Section headers are not loaded into memory
  at runtime and can be stripped without affecting execution.
- **Program Headers** are used by the **OS loader**. They describe contiguous memory segments
  (`PT_LOAD`) that must be mapped into the process address space. Each `PT_LOAD` entry specifies the
  virtual address, file offset, size in the file, and size in memory (for `.bss`).

```bash
# Show the mapping between sections and segments
readelf -lS ./app
```

A single `PT_LOAD` segment typically contains multiple sections. For example, the read-only
executable segment might contain `.text`, `.rodata`, and `.eh_frame` sections.

### ELF Layout Diagram

```
File Offset:  0x0000                    0x1000                    0x3000
             +--------------------------+--------------------------+
             | ELF Header (64 bytes)    |                          |
             +--------------------------+    .text section         |
             | Program Header Table     |    (machine code)        |
             +--------------------------+                          |
             |                          +--------------------------+
             |   (padding)              | .rodata section          |
             |                          | (read-only data)         |
             +--------------------------+--------------------------+
             | .data section            | .bss (zeroed, not on     |
             | (initialized data)       |      disk, but in memory)|
             +--------------------------+--------------------------+
             | Section Header Table     | Symbol tables (.symtab)  |
             | (can be stripped)        | String tables (.strtab)  |
             +--------------------------+--------------------------+

Memory View (after OS loader maps PT_LOAD segments):

Virtual Addr: 0x400000 (RX)              0x600000 (RW)
             +--------------------------+--------------------------+
             | .text                    | .data                    |
             | .rodata                  | .bss                     |
             +--------------------------+--------------------------+
             | .got                     | .got (PLT entries)       |
             +--------------------------+--------------------------+
```

The key insight is that sections (linker view) are mapped into segments (loader view). The `.text`
and `.rodata` sections may share a single `PT_LOAD` segment mapped as Read+Execute, while `.data`
and `.bss` share a `PT_LOAD` segment mapped as Read+Write.

### The `.eh_frame` Section

This section contains **exception handling frame information** -- the data required for C++ stack
unwinding during exception propagation and for debuggers to walk the call stack. It is present even
in `-fno-exceptions` builds because it is used by `std::terminate` and signal handlers.

- **Format:** DWARF Call Frame Information (CFI).
- **Size impact:** Can be 5-15% of binary size. The `.eh_frame_hdr` section provides a binary search
  index for faster unwinding.
- **Stripping:** `strip` removes `.symtab` and `.debug_*` sections but preserves `.eh_frame` because
  the runtime needs it.

### The `.got` and `.plt` Sections

These sections implement **dynamic linking** at runtime:

- **GOT (Global Offset Table):** An array of pointers, one per external symbol. Initially points to
  the PLT stub. After resolution, points to the actual function/data.
- **PLT (Procedure Linkage Table):** Code stubs that jump through the GOT. On first call, the stub
  invokes the dynamic loader to resolve the symbol and patch the GOT entry.

```bash
# Inspect PLT entries
objdump -d -j .plt ./app

# Inspect GOT entries
objdump -R ./app
readelf -r ./app
```

### The `.init_array` and `.fini_array` Sections

These are arrays of function pointers that the dynamic loader calls before `main` and after `main`
returns respectively:

- **`.init_array`** (ELF) / **`.ctors`** (legacy): Constructors for global/static C++ objects, plus
  `__libc_csu_init`.
- **`.fini_array`** (ELF) / **`.dtors`** (legacy): Destructors for global/static C++ objects, plus
  `__libc_csu_fini`.

The order of entries within `.init_array` is determined by the linker's input order of object files,
which is not guaranteed to be deterministic across builds or platforms. This is the root cause of
the **Static Initialization Order Fiasco**.

```cpp
// BAD: relies on initialization order across TUs
// TU a.cpp
extern int config_value;
int derived_value = config_value * 2; // UB if a.cpp is linked before config's TU

// GOOD: use constinit (C++20) for constant initialization (no TU ordering issue)
// header.h
inline constinit int config_value = 42; // constant initialization, no .init_array entry

// GOOD: use "construct on first use" idiom
// header.h
int& get_config() {
    static int config_value = 42; // thread-safe since C++11, no ordering issue
    return config_value;
}
```

### Symbol Tables: `.symtab` vs `.dynsym`

ELF binaries contain two symbol tables with distinct purposes:

| Table     | Purpose                                | Loaded at Runtime | Strip-safe         |
| :-------- | :------------------------------------- | :---------------- | :----------------- |
| `.symtab` | Full symbol table (linker + debugger)  | No                | Can be stripped    |
| `.dynsym` | Dynamic symbols (runtime linking only) | Yes               | Cannot be stripped |

- **`.symtab`** contains every symbol: local functions, static variables, debug symbols, and
  exported symbols. It is used by the linker (during linking) and debuggers (during debugging).
  `strip` removes it to reduce binary size.
- **`.dynsym`** contains only symbols that participate in dynamic linking: functions and variables
  imported from or exported to shared libraries. The OS loader reads this table at process startup
  to resolve `GOT` entries.

```bash
# Full symbol table (includes local/static symbols)
readelf -s ./app

# Dynamic symbols only (what the loader needs)
readelf --dyn-syms ./app

# Count exported symbols (potential binary bloat source)
readelf --dyn-syms ./app | grep -c "GLOBAL.*DEFAULT"
```

### Relocation Entries

Relocation entries (`.rela.text`, `.rela.dyn`, `.rela.plt`) tell the linker where to patch addresses
in the binary. There are two types:

1. **`.rela.text`** (section relocations): Applied at static link time by the linker. Used to
   resolve references between sections within the same binary.
2. **`.rela.dyn` / `.rela.plt`** (dynamic relocations): Applied at load time by the dynamic linker.
   Used to resolve references to shared library symbols.

```bash
# View all relocations
readelf -r ./app

# View only dynamic relocations (GOT entries)
readelf -r ./app | grep JUMP_SLOT
```

---

## PE/COFF Structure in Depth

### Import Address Table (IAT)

The Windows equivalent of the GOT+PLT mechanism is the IAT. When a Windows executable calls a
function from a DLL, the call goes through the IAT -- an array of function pointers that the loader
fills in when the DLL is loaded.

Unlike ELF's lazy binding, Windows defaults to load-time binding (all IAT entries are resolved when
the process starts). You can enable delay-load imports for DLLs that may not be needed:

```cmake
# Delay-load a DLL
target_link_options(app PRIVATE /DELAYLOAD:myplugin.dll)
```

### Thread-Local Storage (TLS)

Both ELF and PE have dedicated sections for thread-local variables declared with `thread_local` or
`__declspec(thread)`:

- **ELF:** `.tbss` (uninitialized TLS), `.tdata` (initialized TLS). Access via the `fs` or `gs`
  segment register on x86_64.
- **PE:** `.tls` section with a TLS directory in the data directories. The loader allocates a TLS
  block per thread.

The TLS model affects performance:

| TLS Model          | Description                                             | Overhead                              |
| :----------------- | :------------------------------------------------------ | :------------------------------------ |
| **Global Dynamic** | General case, works for shared libraries and `dlopen`   | Two memory accesses (GOT + TLS block) |
| **Initial Exec**   | Faster, but the TLS block address is known at load time | One memory access                     |
| **Local Exec**     | Fastest, TLS block address is a compile-time constant   | Direct offset from `fs/gs`            |

```cmake
# Optimize TLS for executables (no shared library TLS access)
target_compile_options(app PRIVATE -ftls-model=initial-exec)
```

Use `initial-exec` for performance-critical `thread_local` variables in executables. It breaks if
the variable is accessed from a dynamically loaded shared library.

---

## Mach-O Structure in Depth

Mach-O uses **Load Commands** rather than section/program header tables. Key load commands:

| Load Command         | Description                                                          |
| :------------------- | :------------------------------------------------------------------- |
| `LC_SEGMENT_64`      | Maps a contiguous range of file data to virtual memory               |
| `LC_MAIN`            | Specifies the entry point offset (replaces `LC_UNIXTHREAD`)          |
| `LC_LOAD_DYLIB`      | Records a dependency on a dynamic library (dylib)                    |
| `LC_LOAD_DYLINKER`   | Specifies the path to the dynamic linker (`dyld`)                    |
| `LC_CODE_SIGNATURE`  | Offset and size of the code signature (mandatory on Apple platforms) |
| `LC_DYLD_INFO`       | Locations of rebase and bind information for the loader              |
| `LC_FUNCTION_STARTS` | Table of function entry points for unwinding                         |

### Code Signing on Apple Platforms

Unlike Linux, macOS and iOS require all executables and shared libraries to be cryptographically
signed. The `LC_CODE_SIGNATURE` load command points to a signature that covers specific ranges of
the binary. Modifying any signed byte (including patching instructions) invalidates the signature
and causes the OS to refuse to load the binary.

This has implications for:

- **JIT compilation:** Must use `MAP_JIT` with `pthread_jit_write_protect_np` on ARM64 macOS.
- **Self-modifying code:** Requires re-signing or disabling SIP (System Integrity Protection).

### dyld Shared Cache

macOS optimizes startup by pre-linking all system libraries into a single shared cache
(`/System/Library/dyld/dyld_shared_cache`). This eliminates per-library symbol resolution overhead
and reduces page faults. The cache is mapped read-only and shared across all processes.

---

## Stripping and Debug Information

Debug information is stored in special sections that can be removed without affecting program
execution.

### DWARF Debug Sections (ELF)

| Section         | Content                                                                  |
| :-------------- | :----------------------------------------------------------------------- |
| `.debug_info`   | Core debug info (type descriptions, variable locations)                  |
| `.debug_abbrev` | Abbreviation tables for `.debug_info`                                    |
| `.debug_line`   | Source file/line number mappings                                         |
| `.debug_str`    | String literals (file paths, variable names)                             |
| `.debug_frame`  | Call frame information for unwinding (`.eh_frame` is the runtime subset) |

```bash
# Strip debug symbols (produces a smaller binary but no debugging)
strip ./app

# Extract debug info into a separate file (for distribution)
objcopy --only-keep-debug ./app ./app.debug
strip --strip-debug --strip-unneeded ./app
objcopy --add-gnu-debuglink=./app.debug ./app

# GDB automatically loads the debug file if it's in the same directory
gdb ./app
```

On Windows, debug information is stored in a separate `.pdb` (Program Database) file, not in the
executable itself. MSVC always generates a `.pdb` in debug builds and optionally in release builds
(`/Zi` flag).

---

## Common Pitfalls

- **Assuming `.bss` is "free."** While `.bss` costs nothing on disk, it consumes virtual memory at
  runtime. A 1GB `.bss` array will cause the OS to commit 1GB of zeroed pages (physical memory or
  swap). This is especially problematic on memory-constrained embedded systems.
- **Forgetting that `const` globals go to `.rodata`, not `.data`.** A `const` global initialized to
  a non-zero value does not increase `.data` size -- it increases `.rodata` size. However, if you
  take a pointer to a `const` global and cast away constness, modifying it through that pointer will
  trigger a segfault (`.rodata` is mapped read-only).
- **Not stripping debug symbols for release builds.** An unstripped release binary can be 2-10x
  larger than a stripped one, purely due to DWARF debug sections. Always strip before distribution,
  but keep the debug files for crash analysis.
- **Relying on `.init_array` ordering across translation units.** The order is linker-dependent and
  not specified by the C++ standard [N4950 S6.6.3.2]. Use `constinit` (C++20) or the
  construct-on-first-use idiom to avoid the Static Initialization Order Fiasco entirely.
- **Modifying code sections at runtime on macOS.** Apple's code signing prevents this. Use `MAP_JIT`
  and `pthread_jit_write_protect_np` for legitimate JIT use cases.
- **Mixing `-fPIC` and non-PIC code in shared libraries.** On x86_64, non-PIC code uses absolute
  addressing that requires relocations in `.text`, preventing the OS from sharing the code segment
  across processes. Always compile shared library code with `-fPIC` (or `-fPIE` for executables).
- **Forgetting that `.symtab` is separate from `.dynsym`.** Stripping removes `.symtab` but not
  `.dynsym`. If your binary still has many dynamic symbols, it may be because you are not using
  `-fvisibility=hidden` to limit exports.
- **Assuming sections map 1:1 to segments.** Multiple sections are typically merged into a single
  `PT_LOAD` segment. Understanding this mapping is critical when analyzing memory permissions.

## PE/COFF Section Table in Detail

The PE format organizes sections differently from ELF. Each section has a name (up to 8 characters),
virtual size, virtual address, file offset, and raw data size:

| PE Section     | ELF Equivalent                | Content                                                |
| :------------- | :---------------------------- | :----------------------------------------------------- |
| `.text`        | `.text`                       | Code                                                   |
| `.rdata`       | `.rodata`                     | Read-only data                                         |
| `.data`        | `.data`                       | Initialized writable data                              |
| `.bss`         | `.bss`                        | Uninitialized data (virtual size &gt; 0, raw size = 0) |
| `.pdata`       | `.eh_frame`                   | Exception handling data                                |
| `.rsrc`        | (none)                        | Windows resources (icons, dialogs)                     |
| `.reloc`       | `.rela.dyn`                   | Base relocations (for ASLR)                            |
| `.CRT$XCA-XCZ` | `.init_array` / `.fini_array` | C++ initializers and terminators                       |

### PE Data Directories

The PE Optional Header contains an array of data directories, each pointing to a specific table:

- **Export Table (`IMAGE_DIRECTORY_ENTRY_EXPORT`):** Lists symbols exported by the DLL. Consumed by
  the loader to resolve import references from other binaries.
- **Import Table (`IMAGE_DIRECTORY_ENTRY_IMPORT`):** Lists symbols imported from other DLLs. The
  loader fills in the IAT at load time.
- **Base Relocation Table:** Contains relocations that must be applied if the binary is loaded at an
  address different from its preferred base address (ASLR).
- **TLS Directory:** Points to the `.tls` section and callback functions for thread-local storage.
- **IAT:** The Import Address Table, filled in by the loader.

```cmd
dumpbin /HEADERS app.exe
# Look for "IMAGE_DIRECTORY_ENTRY_EXPORT" and "IMAGE_DIRECTORY_ENTRY_IMPORT"
```

## Mach-O Segments in Detail

Mach-O organizes sections into segments, where each segment has uniform memory protections. Key
segments:

| Mach-O Segment | Sections                                      | Permissions | Content                                       |
| :------------- | :-------------------------------------------- | :---------- | :-------------------------------------------- |
| `__TEXT`       | `__text`, `__stubs`, `__cstring`, `__const`   | R-X         | Code, read-only data                          |
| `__DATA`       | `__data`, `__bss`, `__la_symbol_ptr`, `__got` | RW-         | Writable data, GOT                            |
| `__LINKEDIT`   | (linker metadata)                             | R--         | Symbol table, string table, relocations       |
| `__PAGEZERO`   | (none)                                        | ---         | Null page (catches null pointer dereferences) |

### `__PAGEZERO`

macOS binaries include a `__PAGEZERO` segment mapped at address `0x0` with no permissions. Any
access to a null pointer (or near-null address) triggers a segmentation fault. This is the Mach-O
equivalent of the kernel's mmap of the zero page on Linux.

### Mach-O Bindings

Mach-O uses two types of dynamic bindings:

- **Non-lazy bindings:** Resolved by `dyld` at load time (like PE's IAT).
- **Lazy bindings:** Resolved on first call via stub islands in `__TEXT,__stubs` (like ELF's PLT).

By default, macOS uses lazy bindings for performance. Bindings can be made non-lazy via the
`-bind_at_load` linker flag.

```bash
clang++ -bind_at_load main.o -o app
```

## Analyzing Binary Size

When a binary is larger than expected, a systematic analysis approach helps identify the source of
bloat:

```bash
# Section-level size breakdown (ELF)
size -A ./app

# Per-symbol size (requires debug info)
nm -S --size-sort ./app

# Largest sections
readelf -S ./app | awk '{print $6, $2}' | sort -rn | head -20

# Identify the largest functions (requires debug info)
bloaty --sorted_by=vmss ./app
```

Common sources of binary bloat:

1. **Unstripped debug info:** DWARF sections (`.debug_*`) can be 5-10x the size of the code. Always
   strip for distribution.
2. **Large `.rodata` sections:** String literals, jump tables, and vtables accumulate here. Consider
   string interning or `constexpr` evaluation.
3. **Template instantiation bloat:** Each unique template instantiation produces code. Use
   `extern template` to deduplicate across TUs.
4. **Excessive dynamic symbols:** Each exported symbol adds an entry to `.dynsym` and `.dynstr`. Use
   `-fvisibility=hidden` to reduce exports.

## Cross-Platform Binary Considerations

When building for multiple platforms, the binary format differences affect the build configuration:

```cmake
# Platform-specific link flags
if(APPLE)
    target_link_options(app PRIVATE -Wl,-dead_strip)  # Remove unused code (Mach-O)
elseif(UNIX)
    target_link_options(app PRIVATE -Wl,--gc-sections)  # Remove unused sections (ELF)
    target_link_options(app PRIVATE -Wl,-z,relro,-z,now)  # Security hardening
elseif(WIN32)
    target_link_options(app PRIVATE /OPT:REF /OPT:ICF)  # Remove unused refs, enable ICF
endif()
```

Each platform has different flags for equivalent operations. CMake's `CMAKE_SHARED_LINKER_FLAGS` and
`CMAKE_EXE_LINKER_FLAGS` can be used to set platform-appropriate defaults.

## Debug Sections Across Platforms

Debug information storage differs significantly across the three binary formats:

| Aspect            | ELF (DWARF)              | PE/COFF (PDB)             | Mach-O (DWARF)                       |
| :---------------- | :----------------------- | :------------------------ | :----------------------------------- |
| **Location**      | Inline in binary         | Separate `.pdb` file      | Inline in binary (or `.dSYM` bundle) |
| **Format**        | DWARF 4/5                | CodeView                  | DWARF 4/5                            |
| **Strippable**    | Yes (`strip`)            | Always external           | Yes (`strip`) or `.dSYM`             |
| **Size overhead** | 5-10x binary size        | 0 (separate file)         | 5-10x binary size                    |
| **Tooling**       | `gdb`, `lldb`, `readelf` | `Visual Studio`, `WinDbg` | `lldb`, `dsymutil`                   |

### DWARF Version Progression

DWARF 5 (the latest standardized version) offers significant improvements over DWARF 4:

- Smaller debug info through a more compact abbreviation table.
- Better support for C++ templates and namespaces.
- Faster lookup via a hash-based debug names index.
- Improved debug info for optimized code (location lists, call frame information).

```cmake
# Request DWARF 5 explicitly (GCC 11+, Clang 12+)
target_compile_options(app PRIVATE -gdwarf-5)
```

### Generating dSYM Bundles on macOS

macOS recommends separating debug info into `.dSYM` bundles for distribution:

```bash
# Generate dSYM after building
dsymutil ./app

# The dSYM is placed in app.dSYM/
# Symbolicate crash reports:
atos -o ./app.dSYM/Contents/Resources/DWARF/app -l 0x... < crash.log
```

The `dSYM` bundle is the macOS equivalent of a PDB file: it contains the DWARF debug information
extracted from the binary. The binary is stripped of debug info, and the `dSYM` is archived
separately.

## Binary Signing and Integrity

Beyond macOS code signing, other platforms have integrity mechanisms that affect binary formats:

### ELF File Integrity

Linux does not mandate binary signing, but several mechanisms exist:

- **`ELF NOTE`:** The `.note.gnu.build-id` section contains a hash of the binary's contents, used by
  tools like `coredumpctl` and `systemd-coredump` to match core dumps with binaries.
- **`IMA/EVM`:** Linux Integrity Measurement Architecture can sign ELF binaries for tamper-detection
  on secure boot systems.
- **`fs-verity`:** A filesystem-level integrity mechanism that can verify file contents without
  reading the entire file.

### PE Authenticode

Windows binaries can be signed using Authenticode, which embeds a digital signature in the PE file's
certificate table (pointed to by the `IMAGE_DIRECTORY_ENTRY_SECURITY` data directory).

```cmd
signtool sign /fd sha256 /t http://timestamp.digicert.com app.exe
```

Authenticode signing does not prevent modification (the signature can be stripped), but it allows
verifying the publisher's identity and detecting modifications.

## See Also

- [Linker](./3_linker.md)
- [Name Mangling](./5_name_mangling.md)
- [Symbol Visibility](./2_symbol_visibility.md)
- [The C Runtime (CRT)](../2_modules/4_c_runtime.md)
