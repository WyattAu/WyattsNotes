---
title: Filesystem Library
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: filesystem-library
---

## The Filesystem Library

`std::filesystem` (C++17) provides a portable interface for manipulating paths, querying file
metadata, iterating directories, and performing file operations. It abstracts away platform
differences between POSIX and Windows file systems, normalizing path separators, permissions models,
and file metadata into a common interface. This section covers `std::filesystem::path`, directory
iterators, recursive traversal, and common file operations.

### Overview

`std::filesystem` (C++17) provides a portable interface for manipulating paths, querying file
metadata, iterating directories, and performing file operations [N4950 §30.10]. It is declared in
`<filesystem>` and lives in the `std::filesystem` namespace.

The library abstracts away platform differences between POSIX and Windows file systems. Path
separators (`/` vs `\`), permissions models, and file metadata are normalized into a common
interface.

:::info On POSIX systems, `std::filesystem` is implemented on top of POSIX system calls (`stat`,
`opendir`, `readdir`, `unlink`, etc.). On Windows, it uses the Win32 API (`CreateFileW`,
`FindFirstFileW`, etc.). The interface is the same on both platforms, but some features are only
available on one (e.g., file permissions are more expressive on POSIX). :::

### `std::filesystem::path`

`std::filesystem::path` is a portable path type that stores a sequence of path components and
provides methods for manipulation, decomposition, and composition [N4950 §30.10.7].

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_basics() {
    fs::path p = "/usr/local/bin/cpp";

    std::cout << "Path:         " << p << "\n";
    std::cout << "Root name:    " << p.root_name() << "\n";       // "" (no drive on POSIX)
    std::cout << "Root directory: " << p.root_directory() << "\n"; // "/"
    std::cout << "Root path:    " << p.root_path() << "\n";       // "/"
    std::cout << "Relative:     " << p.relative_path() << "\n";   // "usr/local/bin/cpp"
    std::cout << "Parent:       " << p.parent_path() << "\n";     // "/usr/local/bin"
    std::cout << "Filename:     " << p.filename() << "\n";        // "cpp"
    std::cout << "Stem:         " << p.stem() << "\n";            // "cpp"
    std::cout << "Extension:    " << p.extension() << "\n";       // ""

    fs::path p2 = "archive.tar.gz";
    std::cout << "Stem:         " << p2.stem() << "\n";           // "archive.tar"
    std::cout << "Extension:    " << p2.extension() << "\n";      // ".gz"
}
```

#### Path Composition

`fs::path` supports `/` as an operator for path concatenation, which automatically inserts the
correct separator:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_composition() {
    fs::path base = "/home/user";
    fs::path full = base / "projects" / "my_app" / "src" / "main.cpp";
    std::cout << full << "\n";
    // /home/user/projects/my_app/src/main.cpp

    // On Windows, this correctly produces:
    // C:\home\user\projects\my_app\src\main.cpp
    // (even if base is C:/home/user — the / operator normalizes separators)

    fs::path canonical = fs::canonical(full);
    // Resolves symlinks, removes . and .., produces absolute path
}
```

#### Path Iteration

The `begin()` / `end()` methods on `fs::path` iterate over the path components:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void path_iteration() {
    fs::path p = "/usr/local/bin/../lib/libstdc++.so.6";

    for (const auto& component : p) {
        std::cout << "[" << component.string() << "] ";
    }
    // [/] [usr] [local] [bin] [..] [lib] [libstdc++.so.6]
}
```

:::tip `fs::path::lexically_normal()` removes `.` and `..` components without touching the
filesystem. `fs::canonical()` resolves them by actually querying the filesystem (and throws if the
path does not exist). Use `lexically_normal()` for string-level cleanup, `canonical()` when you need
the true absolute path. :::

### Directory Iterators

The library provides two directory iterators [N4950 §30.10.11]:

| Iterator                           | Behavior                                            |
| :--------------------------------- | :-------------------------------------------------- |
| `fs::directory_iterator`           | Iterates over the immediate children of a directory |
| `fs::recursive_directory_iterator` | Iterates over all descendants recursively           |

Both are input iterators and follow the RAII pattern — they close the directory handle in their
destructor.

```cpp
#include <filesystem>
#include <iostream>
#include <string>

namespace fs = std::filesystem;

void list_directory(const fs::path& dir) {
    if (!fs::exists(dir) || !fs::is_directory(dir)) {
        std::cerr << "Not a directory: " << dir << "\n";
        return;
    }

    for (const auto& entry : fs::directory_iterator(dir)) {
        const auto& path = entry.path();
        std::string type = entry.is_directory() ? "[DIR] " : "[FILE]";
        std::uintmax_t size = entry.is_regular_file() ? entry.file_size() : 0;
        std::cout << type << " " << path.filename().string()
                  << " (" << size << " bytes)\n";
    }
}
```

:::warning `fs::directory_iterator` does **not** follow symlinks by default. A symlink to a
directory appears as `is_symlink() == true` and `is_directory() == false`. Use
`fs::directory_options::follow_directory_symlink` to follow symlinks, but be careful of symlink
cycles. :::

### Recursive Directory Listing

```cpp
#include <filesystem>
#include <iomanip>
#include <iostream>
#include <string>

namespace fs = std::filesystem;

void recursive_list(const fs::path& root, int max_depth = 3) {
    if (!fs::exists(root) || !fs::is_directory(root)) {
        std::cerr << "Not a directory: " << root << "\n";
        return;
    }

    std::uintmax_t total_files = 0;
    std::uintmax_t total_dirs = 0;
    std::uintmax_t total_bytes = 0;

    for (const auto& entry : fs::recursive_directory_iterator(
            root, fs::directory_options::skip_permission_denied)) {

        int depth = static_cast<int>(entry.depth());

        if (depth > max_depth) {
            // Prevent descent beyond max_depth by calling disable_recursion_pending
            entry.disable_recursion_pending();
            continue;
        }

        const auto& path = entry.path();
        std::string indent(depth * 2, ' ');

        if (entry.is_directory()) {
            ++total_dirs;
            std::cout << indent << "[DIR]  " << path.filename().string() << "/\n";
        } else if (entry.is_regular_file()) {
            ++total_files;
            std::uintmax_t size = entry.file_size();
            total_bytes += size;
            std::cout << indent << "[FILE] " << path.filename().string()
                      << "  (" << size << " bytes)\n";
        } else if (entry.is_symlink()) {
            std::cout << indent << "[LINK] " << path.filename().string()
                      << " -> " << fs::read_symlink(path).string() << "\n";
        }
    }

    std::cout << "\nSummary: " << total_dirs << " directories, "
              << total_files << " files, " << total_bytes << " bytes\n";
}
```

:::info `fs::directory_options::skip_permission_denied` causes the iterator to silently skip
directories that the current process lacks permission to read. Without this option, a
`fs::filesystem_error` exception is thrown. This is essential for recursively scanning directories
like `/home` or `/tmp` where some subdirectories may have restricted permissions [N4950
§30.10.11.1]. :::

### File Operations

The `std::filesystem` namespace provides free functions for common file operations [N4950
§30.10.14]:

| Function                           | Purpose                                         |
| :--------------------------------- | :---------------------------------------------- |
| `fs::copy(src, dst, options)`      | Copy files or directories                       |
| `fs::copy_file(src, dst, options)` | Copy a single file (overwrite control)          |
| `fs::remove(path)`                 | Remove a file or empty directory                |
| `fs::remove_all(path)`             | Remove a file or directory tree recursively     |
| `fs::rename(old, new)`             | Rename or move a file/directory                 |
| `fs::resize_file(path, size)`      | Truncate or extend a file                       |
| `fs::space(path)`                  | Get disk space info (capacity, free, available) |
| `fs::status(path)`                 | Get file status (type, permissions)             |
| `fs::last_write_time(path)`        | Get/set last modification time                  |
| `fs::create_directory(path)`       | Create a single directory                       |
| `fs::create_directories(path)`     | Create directory tree (like `mkdir -p`)         |
| `fs::current_path()`               | Get/set the current working directory           |
| `fs::temp_directory_path()`        | Get the system temp directory                   |

```cpp
#include <filesystem>
#include <fstream>
#include <iostream>

namespace fs = std::filesystem;

void file_operations_demo(const fs::path& work_dir) {
    fs::create_directories(work_dir / "src");
    fs::create_directories(work_dir / "build");

    fs::path source = work_dir / "src" / "main.cpp";
    {
        std::ofstream f(source);
        f << "#include <iostream>\nint main() { return 0; }\n";
    }

    fs::copy_file(source, work_dir / "build" / "main.cpp.bak",
                  fs::copy_options::overwrite_existing);

    fs::path moved = work_dir / "build" / "backup.cpp";
    fs::rename(work_dir / "build" / "main.cpp.bak", moved);

    fs::space_info si = fs::space(work_dir);
    std::cout << "Capacity:  " << si.capacity << " bytes\n";
    std::cout << "Free:      " << si.free << " bytes\n";
    std::cout << "Available: " << si.available << " bytes\n";

    fs::file_status st = fs::status(source);
    std::cout << "Type: " << (fs::is_regular_file(st) ? "regular file" : "other") << "\n";

    auto perms = st.permissions();
    std::cout << "Readable:  " << ((perms & fs::perms::owner_read) != fs::perms::none) << "\n";
    std::cout << "Writable:  " << ((perms & fs::perms::owner_write) != fs::perms::none) << "\n";
    std::cout << "Executable:" << ((perms & fs::perms::owner_exec) != fs::perms::none) << "\n";

    // Cleanup
    fs::remove_all(work_dir);
    std::cout << "Removed: " << work_dir << "\n";
}
```

:::warning `fs::remove_all()` is dangerous — it recursively deletes an entire directory tree without
confirmation. Never call it with a path derived from untrusted user input without validation. Unlike
`rm -rf`, there is no "trash" or "undo" mechanism. :::

## See Also

- [Chrono Library](./2_chrono.md)
- [Random Number Generation](./3_random_numbers.md)
- [Regular Expressions](./4_regular_expressions.md)
