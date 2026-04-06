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

### File Metadata and `fs::file_time_type`

`fs::file_time_type` represents file timestamps [N4950 §30.10.7.3]. In C++17/20, this is a
`std::chrono::time_point` using a filesystem-specific clock. In C++20, conversions between
`file_time_type` and `std::chrono::system_clock::time_point` are possible via `clock_cast`:

```cpp
#include <chrono>
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void file_time_demo(const fs::path& file) {
    auto ftime = fs::last_write_time(file);

    // C++20: convert to system_clock time_point
    auto sctp = std::chrono::clock_cast<std::chrono::system_clock>(ftime);

    // Format the time
    std::time_t tt = std::chrono::system_clock::to_time_t(sctp);
    std::tm* tm = std::localtime(&tt);
    char buf[64];
    std::strftime(buf, sizeof(buf), "%Y-%m-%d %H:%M:%S", tm);
    std::cout << "Last modified: " << buf << "\n";

    // Set modification time (copy from another file)
    // fs::last_write_time(target, fs::last_write_time(source));
}
```

:::warning On Windows with MSVC, `fs::file_time_type` historically used a resolution of 100
nanoseconds (Windows FILETIME), while on POSIX it used 1-second resolution (`stat` `st_mtime`).
C++20 improves this, but portability issues remain for sub-second precision. Always test on your
target platforms. :::

### Permissions

File permissions on `std::filesystem` are modeled as a bitmask of `fs::perms` enumerators [N4950
§30.10.7.4]. These map directly to POSIX permission bits on Linux and are partially supported on
Windows:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void permissions_demo(const fs::path& file) {
    // Query permissions
    auto perms = fs::status(file).permissions();

    auto has = [&](fs::perms p) {
        return (perms & p) != fs::perms::none;
    };

    std::cout << "Owner read:  " << has(fs::perms::owner_read) << "\n";
    std::cout << "Owner write: " << has(fs::perms::owner_write) << "\n";
    std::cout << "Owner exec:  " << has(fs::perms::owner_exec) << "\n";
    std::cout << "Group read:  " << has(fs::perms::group_read) << "\n";
    std::cout << "Others read: " << has(fs::perms::others_read) << "\n";

    // Set permissions (POSIX-style octal: 0644)
    fs::permissions(file,
        fs::perms::owner_read | fs::perms::owner_write |
        fs::perms::group_read |
        fs::perms::others_read,
        fs::perm_options::replace);

    // Add execute permission for owner
    fs::permissions(file,
        fs::perms::owner_exec,
        fs::perm_options::add);
}
```

| `fs::perm_options` | Effect                                                |
| :----------------- | :---------------------------------------------------- |
| `replace`          | Replace current permissions with the given bitmask    |
| `add`              | Add the given permission bits to the current set      |
| `remove`           | Remove the given permission bits from the current set |
| `nofollow`         | Do not follow symlinks (applicable on POSIX)          |

:::warning On Windows, `fs::permissions` can only control the read-only attribute. Group and other
permissions are not supported. The `owner_exec` permission is not meaningful on Windows. :::

### Symbolic Links

`std::filesystem` distinguishes between the symlink itself and its target [N4950 §30.10.10]:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void symlink_demo(const fs::path& dir) {
    fs::path target = dir / "original.txt";
    fs::path link = dir / "link_to_original";

    // Create a file and a symlink to it
    {
        std::ofstream f(target);
        f << "original content";
    }

    fs::create_symlink(target, link);

    // status() follows symlinks, symlink_status() does not
    std::cout << "status(target):          " << fs::status(target) << "\n";
    std::cout << "status(link):            " << fs::status(link) << "\n";       // regular file
    std::cout << "symlink_status(link):    " << fs::symlink_status(link) << "\n"; // symlink

    std::cout << "is_symlink(link):        " << fs::is_symlink(link) << "\n";   // true
    std::cout << "is_regular_file(link):   " << fs::is_regular_file(link) << "\n"; // true (follows)

    // Read the symlink target
    fs::path resolved = fs::read_symlink(link);
    std::cout << "Symlink target: " << resolved << "\n";

    // Resolve the full path (follows symlinks)
    fs::path canonical_path = fs::canonical(link);
    std::cout << "Canonical: " << canonical_path << "\n";

    // Cleanup
    fs::remove(link);
    fs::remove(target);
}
```

### File Size and Disk Space

```cpp
#include <filesystem>
#include <iostream>
#include <vector>

namespace fs = std::filesystem;

void disk_space_demo(const fs::path& dir) {
    fs::space_info space = fs::space(dir);

    auto to_gb = [](std::uintmax_t bytes) {
        return static_cast<double>(bytes) / (1024.0 * 1024.0 * 1024.0);
    };

    std::cout << "Capacity:  " << to_gb(space.capacity) << " GB\n";
    std::cout << "Free:      " << to_gb(space.free) << " GB\n";
    std::cout << "Available: " << to_gb(space.available) << " GB\n";

    // "Free" may include space reserved for root (on POSIX).
    // "Available" is the space available to unprivileged processes.
    // On most systems: available &lt;= free &lt;= capacity.
}

void directory_size(const fs::path& root) {
    std::uintmax_t total_size = 0;
    std::uintmax_t file_count = 0;

    for (const auto& entry : fs::recursive_directory_iterator(
            root, fs::directory_options::skip_permission_denied)) {
        if (entry.is_regular_file()) {
            total_size += entry.file_size();
            ++file_count;
        }
    }

    std::cout << "Total size: " << total_size << " bytes ("
              << file_count << " files)\n";
}
```

### Path Canonicalization and `weakly_canonical`

`fs::canonical` resolves symlinks and normalizes the path, but requires that every component exists.
`fs::weakly_canonical` [N4950 §30.10.7.7] resolves as much as it can, leaving non-existent
components untouched:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void canonical_demo() {
    // canonical() throws if any component doesn't exist
    // fs::canonical("/nonexistent/path/file.txt");  // throws

    // weakly_canonical() resolves existing components, leaves the rest
    fs::path wc = fs::weakly_canonical("/home/user/nonexistent/dir/file.txt");
    std::cout << "Weakly canonical: " << wc << "\n";
    // /home/user/nonexistent/dir/file.txt
    // (assuming /home/user exists but /home/user/nonexistent does not)

    // lexically_normal() is purely string-based — no filesystem access
    fs::path normalized = fs::path("/a/b/../c/./d").lexically_normal();
    std::cout << "Lexically normal: " << normalized << "\n";
    // /a/c/d
}
```

### Filesystem Error Handling

All `fs::` functions throw `fs::filesystem_error` on failure [N4950 §30.10.5]. This exception
carries two paths (the source and target of the operation) and a `std::error_code`:

```cpp
#include <filesystem>
#include <iostream>

namespace fs = std::filesystem;

void error_handling_demo() {
    fs::path nonexistent = "/this/path/does/not/exist";

    try {
        fs::copy(nonexistent, "/tmp/backup");
    } catch (const fs::filesystem_error& e) {
        std::cout << "Error: " << e.what() << "\n";
        std::cout << "Path 1: " << e.path1() << "\n";
        std::cout << "Path 2: " << e.path2() << "\n";
        std::cout << "Error code: " << e.code() << "\n";
        // Error code: system:2 (No such file or directory)
    }

    // Non-throwing overload — returns error code
    std::error_code ec;
    fs::file_size(nonexistent, ec);
    if (ec) {
        std::cout << "Error (non-throwing): " << ec.message() << "\n";
    }
}
```

:::tip Use the `std::error_code` overloads in performance-critical code or when errors are expected
(e.g., checking if a file exists by trying to open it). Exception-based error handling has overhead
from stack unwinding, while error codes do not. :::

### Temporary Files and Atomic Write Patterns

A common pattern for safe file writing is to write to a temporary file, then atomically rename it:

```cpp
#include <filesystem>
#include <fstream>
#include <string>

namespace fs = std::filesystem;

void atomic_write(const fs::path& target, std::string_view content) {
    fs::path temp = target;
    temp += ".tmp";

    // Write to temporary file
    {
        std::ofstream f(temp, std::ios::binary);
        if (!f) {
            throw std::runtime_error("Cannot create temp file: " + temp.string());
        }
        f.write(content.data(), static_cast<std::streamsize>(content.size()));
    }

    // Atomic rename (on POSIX, rename is atomic for same-filesystem renames)
    fs::rename(temp, target);

    // On POSIX: rename() replaces the target atomically.
    // On Windows: rename() fails if target exists. Use MoveFileEx with MOVEFILE_REPLACE_EXISTING.
    // std::filesystem::rename handles this difference, but the atomicity guarantee
    // may differ across platforms.
}
```

### Common Pitfalls

1. **`fs::path` comparison is lexicographic:** `fs::path("a/b") != fs::path("a//b")` — they are not
   the same path object even though they refer to the same file. Use `fs::canonical()` or
   `fs::equivalent()` for semantic comparison.

2. **`fs::remove_all` is not undoable:** There is no "trash" mechanism. Once called, the files are
   gone. Never call it with untrusted input without validation.

3. **Symlink cycles:** `fs::recursive_directory_iterator` can follow symlink cycles indefinitely if
   you use `follow_directory_symlink`. Use `directory_options::follow_directory_symlink` with
   caution, and consider tracking visited directories by device/inode to detect cycles.

4. **Path separator on Windows:** `fs::path` uses the preferred separator on construction, but the
   `/` operator always works on both platforms. Avoid hardcoding `\\` — always use `/` or
   `fs::path::preferred_separator`.

5. **`fs::exists` TOCTOU race:** The check `if (fs::exists(p)) fs::remove(p)` is vulnerable to a
   time-of-check-to-time-of-use (TOCTOU) race — another process may create or delete the file
   between the check and the removal. Prefer just performing the operation and handling the error.

6. **File permissions on Windows:** The POSIX permission model does not map cleanly to Windows ACLs.
   `fs::permissions` on Windows can only reliably set/clear the read-only attribute. Do not rely on
   group/other permissions on Windows.

:::

:::

:::

:::

:::

:::

:::

:::
