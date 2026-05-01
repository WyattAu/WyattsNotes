---
title: I/O, NIO, and the Path API
description:
  I/O, NIO, and the Path API — Classic I/O (java.io); InputStream and
  OutputStream Hierarchy; Reader and Writer Hierarchy, ensuring thorough
  understanding.
date: 2026-04-04T00:00:00.000Z
tags:
  - Java
categories:
  - Java
slug: io-nio-path-api
---

## Classic I/O (java.io)

The `java.io` package has been part of the platform since JDK 1.0. It is stream-oriented: open a
stream, read or write bytes or characters sequentially, and close it. Despite NIO (JDK 1.4) and
NIO.2 (JDK 7), classic I/O remains the foundation for most Java programs.

### InputStream and OutputStream Hierarchy

All byte-oriented I/O in `java.io` derives from `InputStream` and `OutputStream`. The concrete
subclasses handle specific data sources and sinks.

```
InputStream (abstract)
├── FileInputStream        — reads bytes from a file
├── ByteArrayInputStream   — reads from a byte[] in memory
├── BufferedInputStream    — wraps another InputStream with buffering
├── DataInputStream        — reads primitive types (int, long, double, etc.)
├── ObjectInputStream      — deserializes Java objects
├── FilterInputStream      — base class for decorator streams
└── PipedInputStream       — reads from a PipedOutputStream (inter-thread)

OutputStream (abstract)
├── FileOutputStream       — writes bytes to a file
├── ByteArrayOutputStream  — writes to a byte[] in memory
├── BufferedOutputStream   — wraps another OutputStream with buffering
├── DataOutputStream       — writes primitive types
├── ObjectOutputStream     — serializes Java objects
├── FilterOutputStream     — base class for decorator streams
└── PipedOutputStream      — writes to a PipedInputStream (inter-thread)
```

The core contract is minimal: `read()` (one byte), `read(byte[])`, `read(byte[], off, len)` for
input, and `write(int)`, `write(byte[])`, `write(byte[], off, len)` for output. The single-byte
methods are slow; use the bulk methods or wrap with a buffered stream.

```java
try (FileInputStream fis = new FileInputStream("data.bin")) {
    byte[] buffer = new byte[8192];
    int bytesRead;
    while ((bytesRead = fis.read(buffer)) != -1) {
        // process buffer[0..bytesRead-1]
    }
}
```

`FilterInputStream` and `FilterOutputStream` implement the decorator pattern. You layer
functionality by wrapping one stream inside another:

```java
try (DataInputStream dis = new DataInputStream(
        new BufferedInputStream(
            new FileInputStream("records.dat")))) {
    int count = dis.readInt();
    for (int i = 0; i < count; i++) {
        String name = dis.readUTF();
        double value = dis.readDouble();
    }
}
```

The `FilterInputStream`/`FilterOutputStream` classes themselves are mostly pass-through; the
interesting behavior is in their subclasses (`BufferedInputStream`, `DataInputStream`,
`PushbackInputStream`, etc.).

### Reader and Writer Hierarchy

The `Reader`/`Writer` hierarchy (JDK 1.1) handles character I/O with charset conversion. The default
encoding is the platform default charset, which is a source of subtle bugs.

```
Reader (abstract)
├── InputStreamReader  — bridges InputStream → Reader (charset conversion)
├── FileReader          — convenience: InputStreamReader wrapping FileInputStream
├── BufferedReader      — adds readLine() and buffering
├── StringReader        — reads from a String in memory
├── CharArrayReader     — reads from a char[] in memory
├── PipedReader         — reads from a PipedWriter
└── FilterReader        — base class for decorator readers

Writer (abstract)
├── OutputStreamWriter  — bridges Writer → OutputStream (charset conversion)
├── FileWriter          — convenience: OutputStreamWriter wrapping FileOutputStream
├── BufferedWriter      — adds newLine() and buffering
├── StringWriter        — writes to a StringBuffer in memory
├── CharArrayWriter     — writes to a char[] in memory
├── PipedWriter         — writes to a PipedReader
└── FilterWriter        — base class for decorator writers
```

**Always specify the charset explicitly.** Since JDK 11, `FileReader` and `FileWriter` accept a
`Charset` directly. Before that, use `InputStreamReader`/`OutputStreamWriter`.

```java
// Pre-JDK 11
try (BufferedReader br = new BufferedReader(
        new InputStreamReader(new FileInputStream("log.txt"), StandardCharsets.UTF_8))) {
    String line;
    while ((line = br.readLine()) != null) {
        // process line
    }
}

// JDK 11+
try (BufferedReader br = new BufferedReader(
        new FileReader("log.txt", StandardCharsets.UTF_8))) {
    String line;
    while ((line = br.readLine()) != null) {
        // process line
    }
}
```

### Buffered Streams and Buffering Strategy

Buffered streams reduce system-call overhead by reading or writing in chunks (default 8192 bytes).
Every call to `read()` on an unbuffered `FileInputStream` results in a native system call; a
`BufferedInputStream` fills an internal buffer once and serves individual reads from memory.

**Always buffer the outermost layer.** Failing to buffer at all is a performance bug.

```java
// Correct: single buffered layer
try (var in = new BufferedInputStream(new FileInputStream("large.bin"));
     var out = new BufferedOutputStream(new FileOutputStream("copy.bin"))) {
    byte[] buf = new byte[8192];
    int n;
    while ((n = in.read(buf)) != -1) {
        out.write(buf, 0, n);
    }
}
```

`BufferedWriter.newLine()` writes the platform-dependent line separator. `BufferedReader.readLine()`
strips the line terminator and returns `null` at end-of-stream. If you need to distinguish between
`\n`, `\r\n`, and `\r`, use character-level reading instead. `BufferedReader` also exposes `lines()`
which returns a `Stream&lt;String&gt;`.

### File I/O Patterns with try-with-resources

Try-with-resources (JDK 7) is the correct way to manage I/O resources. Every stream, reader, writer,
channel, and `Scanner` implements `AutoCloseable`. Resources are closed in reverse declaration order
even if an exception is thrown.

```java
// Reading a text file line by line (the most common pattern)
try (BufferedReader br = new BufferedReader(
        new FileReader("input.txt", StandardCharsets.UTF_8))) {
    br.lines()
      .filter(line -> !line.isBlank())
      .map(String::strip)
      .forEach(System.out::println);
}
```

```java
// Writing a text file
try (BufferedWriter bw = new BufferedWriter(
        new FileWriter("output.txt", StandardCharsets.UTF_8))) {
    for (String line : data) {
        bw.write(line);
        bw.newLine();
    }
}
```

```java
// Copying a binary file
try (InputStream in = new BufferedInputStream(new FileInputStream(src));
     OutputStream out = new BufferedOutputStream(new FileOutputStream(dst))) {
    in.transferTo(out);  // JDK 9
}
```

`InputStream.transferTo(OutputStream)` (JDK 9) copies all bytes from one stream to another using an
internal buffer. No need for buffered wrappers for the copy itself.

**Common Pitfall:** Forgetting to close a resource leaks file descriptors. In long-running
applications, unclosed descriptors accumulate until the process hits the OS limit (`ulimit -n`). GC
finalization is unreliable for cleanup.

**Common Pitfall:** `BufferedWriter` data is not visible to other processes until `flush()` or
`close()`.

### Serialization and Externalizable

Java serialization (`java.io.Serializable`) converts an object graph into a byte stream and back. It
is deceptively easy to use and deceptively hard to use correctly.

```java
public class User implements Serializable {
    private static final long serialVersionUID = 1L;

    private final String name;
    private final int age;
    private transient String password;  // not serialized

    // constructor, getters...
}
```

Serialization serializes the entire reachable object graph. Serializing a `HashMap` also serializes
every key and value object.

**Common Pitfalls with Serialization:**

- **`serialVersionUID` mismatch.** Not declaring it means the compiler generates one from the class
  structure. Any change breaks deserialization. Always declare it explicitly.
- **Transient fields** are not automatically deserialized. Implement `readObject()` to restore them.
- **Security risk.** Deserializing untrusted data is an RCE vector. Use `ObjectInputFilter` (JDK
  9+).
- **Performance.** Slow compared to protobuf, Avro, or Jackson. Produces large byte streams.

For finer control, implement `Externalizable` instead of `Serializable`. You must implement
`writeExternal(ObjectOutput)` and `readExternal(ObjectInput)`, and provide a zero-arg constructor:

```java
public class Config implements Externalizable {
    private String host;
    private int port;

    // zero-arg constructor required for deserialization
    public Config() {}

    public Config(String host, int port) {
        this.host = host;
        this.port = port;
    }

    @Override
    public void writeExternal(ObjectOutput out) throws IOException {
        out.writeUTF(host);
        out.writeInt(port);
    }

    @Override
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {
        this.host = in.readUTF();
        this.port = in.readInt();
    }
}
```

**Recommendation:** Avoid Java serialization in new code. Use JSON (Jackson), Protocol Buffers, or
another cross-platform format. Java serialization is only appropriate for deep-copying within a
single JVM or integrating with legacy APIs.

### Common Pitfalls with Classic I/O

1. **Encoding mismatches.** Reading a UTF-8 file with the platform default charset corrupts
   multi-byte characters. Always specify `StandardCharsets.UTF_8`.
2. **Resource leaks in exception paths.** Use try-with-resources. This still applies to resources
   that are not `AutoCloseable` (e.g., some third-party library types).
3. **Swallowing exceptions in close().** If the main operation throws and `close()` also throws,
   try-with-resources suppresses the close exception as an add-suppressed.
4. **Buffering without flushing.** Data stays in the buffer until `flush()` or `close()`. If the
   program crashes first, the data is lost.
5. **Mixing Readers and Streams.** Wrapping a `Reader` around an `InputStream` that is also being
   read directly causes data corruption, because the `Reader`'s internal buffer consumes bytes that
   the `InputStream` never sees.

---

## NIO.2 (java.nio.file) — The Path API

NIO.2, introduced in JDK 7 (JSR 203), is a modern file API that addresses the deficiencies of
`java.io.File`. The core types are `Path`, `Paths`, and `Files`.

### Path vs File Comparison

| Feature           | `java.io.File`                         | `java.nio.file.Path`                                    |
| ----------------- | -------------------------------------- | ------------------------------------------------------- |
| Mutability        | Mutable (state changes on each call)   | Immutable                                               |
| Path operations   | Manual string manipulation             | `resolve()`, `normalize()`, `relativize()`              |
| Symbolic links    | `getCanonicalPath()` (throws on error) | `Files.readSymbolicLink()`, `LinkOption.NOFOLLOW_LINKS` |
| Metadata          | `length()`, `lastModified()`           | `Files.getAttribute()`, `Files.readAttributes()`        |
| File watching     | Not supported                          | `WatchService`                                          |
| Atomic operations | Not supported                          | `Files.move()` with `ATOMIC_MOVE`                       |
| Error reporting   | Returns `false` on failure             | Throws checked exceptions with details                  |

`Path` is immutable and separates locating a file (`Path`) from accessing it (`Files`).
`java.io.File` conflates both: its methods like `exists()` and `isDirectory()` query the filesystem
but do not declare `SecurityException`.

```java
// Old way (java.io.File)
File file = new File("/tmp/data/input.txt");
boolean exists = file.exists();  // no exception declared, but may throw SecurityException

// New way (NIO.2)
Path path = Path.of("/tmp/data/input.txt");
boolean exists = Files.exists(path);  // clear API boundary
```

### Path Operations

```java
Path p1 = Path.of("/home/user/docs");
Path p2 = Path.of("report.txt");

// resolve: joins two paths (if p2 is absolute, returns p2)
Path resolved = p1.resolve(p2);  // /home/user/docs/report.txt

// resolveSibling: replaces the last component
Path sibling = p1.resolveSibling("backup");  // /home/user/backup

// normalize: removes . and .. where possible
Path messy = Path.of("/a/b/../c/./d");
Path clean = messy.normalize();  // /a/c/d

// relativize: computes the relative path between two paths
Path base = Path.of("/home/user");
Path target = Path.of("/home/user/docs/report.txt");
Path relative = base.relativize(target);  // docs/report.txt

// subpath: extracts a portion of the path
Path full = Path.of("/a/b/c/d");
Path sub = full.subpath(1, 3);  // b/c (0-indexed, exclusive end)

// getParent, getFileName, getRoot
Path p = Path.of("/home/user/docs/report.txt");
p.getRoot();       // /
p.getParent();     // /home/user/docs
p.getFileName();   // report.txt
```

`Path.of()` is the preferred factory method since JDK 11. Before that, use `Paths.get()`.

**Common Pitfall:** `relativize()` requires both paths to have the same root component. Calling
`Path.of("/a/b").relativize(Path.of("c/d"))` throws `IllegalArgumentException`. If you need to
relativize across roots, you must handle the logic manually.

**Common Pitfall:** `normalize()` does not access the filesystem. It only removes `.` and resolves
`..` syntactically. It does not resolve symbolic links. Use `toRealPath()` to resolve symlinks
(which requires the path to exist).

### Files Utility Class

The `Files` class (JDK 7) is a collection of static methods for file operations. It replaces most
`java.io.File` methods and adds many new ones.

#### Reading and Writing

```java
// Read entire file as a string (JDK 11)
String content = Files.readString(Path.of("config.json"));

// Read all lines into a List<String>
List<String> lines = Files.readAllLines(Path.of("data.csv"), StandardCharsets.UTF_8);

// Lazy stream of lines (does not load entire file into memory)
try (Stream<String> stream = Files.lines(Path.of("huge.log"), StandardCharsets.UTF_8)) {
    stream.filter(line -> line.contains("ERROR"))
          .limit(100)
          .forEach(System.out::println);
}

// Write a string to a file
Files.writeString(Path.of("output.txt"), "hello, world", StandardCharsets.UTF_8,
        StandardOpenOption.CREATE, StandardOpenOption.TRUNCATE_EXISTING);

// Write lines
List<String> data = List.of("line1", "line2", "line3");
Files.write(Path.of("output.txt"), data, StandardCharsets.UTF_8);
```

`Files.readString()` and `Files.writeString()` (JDK 11) are the simplest way to handle small text
files. For large files, use `Files.lines()` or `BufferedReader`.

**Common Pitfall:** `Files.readAllLines()` loads the entire file into memory. For large files, use
`Files.lines()` which returns a lazy `Stream&lt;String&gt;`.

#### Copy, Move, Delete

```java
// Copy a file
Files.copy(src, dst, StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.COPY_ATTRIBUTES);

// Copy a directory (non-recursive — only copies the directory entry)
Files.copy(srcDir, dstDir);

// Move (rename) a file
Files.move(src, dst, StandardCopyOption.REPLACE_EXISTING, StandardCopyOption.ATOMIC_MOVE);

// Delete a file (throws NoSuchFileException if not found)
Files.delete(path);

// Delete if exists (returns false if not found, does not throw)
boolean deleted = Files.deleteIfExists(path);
```

`StandardCopyOption.ATOMIC_MOVE` moves the file atomically (on supported filesystems). Critical for
safe file replacement (write to temp file, then atomic move).

**Common Pitfall:** `Files.delete()` throws `NoSuchFileException` if the file does not exist, and
`DirectoryNotEmptyException` if the directory is not empty. Use `Files.deleteIfExists()` if you want
to ignore a missing file, and use `Files.walkFileTree()` with `DELETE_ON_CLOSE` or manual recursion
to delete a non-empty directory.

```java
// Delete a non-empty directory
Files.walkFileTree(dir, new SimpleFileVisitor<>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) throws IOException {
        Files.delete(file);
        return FileVisitResult.CONTINUE;
    }

    @Override
    public FileVisitResult postVisitDirectory(Path d, IOException exc) throws IOException {
        Files.delete(d);
        return FileVisitResult.CONTINUE;
    }
});
```

### File Attributes and Permissions

NIO.2 provides a rich attribute API through `Files.getAttribute()`, `Files.readAttributes()`, and
the `BasicFileAttributes` interface.

```java
// Read basic attributes in a single system call
BasicFileAttributes attrs = Files.readAttributes(path, BasicFileAttributes.class);
attrs.isRegularFile();
attrs.isDirectory();
attrs.isSymbolicLink();
attrs.size();
attrs.lastModifiedTime();
attrs.creationTime();

// Read POSIX attributes (Unix only)
PosixFileAttributes posixAttrs = Files.readAttributes(path, PosixFileAttributes.class);
Set<PosixFilePermission> perms = posixAttrs.permissions();

// Check and set permissions
boolean canRead = Files.isReadable(path);
boolean canWrite = Files.isWritable(path);
boolean canExecute = Files.isExecutable(path);

// Set permissions
Files.setPosixFilePermissions(path,
    PosixFilePermissions.fromString("rw-r--r--"));

// DOS attributes (Windows)
DosFileAttributes dosAttrs = Files.readAttributes(path, DosFileAttributes.class);
dosAttrs.isReadOnly();
dosAttrs.isHidden();
dosAttrs.isSystem();
```

### Watching for File Changes (WatchService)

`WatchService` (JDK 7) monitors a directory (not individual files) for changes. It uses the
OS-native file notification mechanism when available (inotify on Linux, FSEvents on macOS,
ReadDirectoryChangesW on Windows).

```java
try (WatchService watcher = FileSystems.getDefault().newWatchService()) {
    Path dir = Path.of("/home/user/watched");
    dir.register(watcher,
        StandardWatchEventKinds.ENTRY_CREATE,
        StandardWatchEventKinds.ENTRY_DELETE,
        StandardWatchEventKinds.ENTRY_MODIFY);

    WatchKey key;
    while ((key = watcher.take()) != null) {
        for (WatchEvent&lt;?&gt; event : key.pollEvents()) {
            WatchEvent.Kind&lt;?&gt; kind = event.kind();

            if (kind == StandardWatchEventKinds.OVERFLOW) {
                continue;
            }

            Path changedFile = dir.resolve((Path) event.context());
            System.out.printf("%s: %s%n", kind, changedFile);
        }

        if (!key.reset()) {
            break;  // directory no longer accessible
        }
    }
}
```

**Common Pitfalls:**

- Monitors directories, not files. Watch the parent and filter by filename.
- `ENTRY_MODIFY` may fire multiple times per change; debounce in application code.
- Must call `key.reset()` after processing, or no further events are delivered.
- `event.context()` returns the filename only; resolve it against the watched directory.
- Unreliable on NFS and other network filesystems.

### DirectoryStream and Recursive Directory Traversal

`DirectoryStream` (JDK 7) iterates over directory entries using OS-level iteration (`readdir` on
POSIX), more efficient than `File.listFiles()` which allocates an array up front.

```java
// Iterate over directory entries matching a glob pattern
try (DirectoryStream<Path> stream = Files.newDirectoryStream(
        Path.of("/home/user/docs"), "*.txt")) {
    for (Path entry : stream) {
        System.out.println(entry.getFileName());
    }
}
```

For recursive traversal, use `Files.walkFileTree()`:

```java
// Find all .java files under a directory tree
List<Path> javaFiles = new ArrayList<>();
Files.walkFileTree(Path.of("src"), new SimpleFileVisitor<>() {
    @Override
    public FileVisitResult visitFile(Path file, BasicFileAttributes attrs) {
        if (file.toString().endsWith(".java")) {
            javaFiles.add(file);
        }
        return FileVisitResult.CONTINUE;
    }

    @Override
    public FileVisitResult preVisitDirectory(Path dir, BasicFileAttributes attrs) {
        // Skip .git directories
        if (dir.getFileName() != null && dir.getFileName().toString().equals(".git")) {
            return FileVisitResult.SKIP_SUBTREE;
        }
        return FileVisitResult.CONTINUE;
    }
});
```

Alternatively, `Files.walk()` (JDK 8) returns a lazy `Stream&lt;Path&gt;` for recursive traversal:

```java
// Find all .java files, excluding .git directories
try (Stream<Path> paths = Files.walk(Path.of("src"))) {
    paths.filter(p -> p.toString().endsWith(".java"))
         .filter(p -> !p.startsWith(Path.of("src/.git")))
         .forEach(System.out::println);
}
```

**Common Pitfall:** `Files.walk()` opens a directory stream internally; use try-with-resources or
handles leak. It follows symlinks by default, which can loop if a symlink points to an ancestor. Use
`LinkOption.NOFOLLOW_LINKS` with `walkFileTree()` to prevent this.

---

## NIO Channels and Buffers (java.nio)

The `java.nio` package (JDK 1.4) introduces channels and buffers. Channels are bidirectional and can
operate in non-blocking mode. Buffers provide direct control over memory layout, including off-heap
(native) memory.

### Channel Abstraction

A `Channel` represents an open connection to an I/O source or sink. Unlike streams, channels are
bidirectional where supported and support scatter/gather I/O (multiple buffers in a single call).

Key channel types:

| Channel               | Direction   | Blocking/Non-blocking | Use case                   |
| --------------------- | ----------- | --------------------- | -------------------------- |
| `FileChannel`         | Read/Write  | Blocking only         | File I/O                   |
| `DatagramChannel`     | Read/Write  | Both                  | UDP                        |
| `SocketChannel`       | Read/Write  | Both                  | TCP client                 |
| `ServerSocketChannel` | Accept only | Both                  | TCP server                 |
| `Pipe.SourceChannel`  | Read only   | Blocking only         | Inter-thread communication |
| `Pipe.SinkChannel`    | Write only  | Blocking only         | Inter-thread communication |

You obtain a `FileChannel` from a stream or directly:

```java
// From a stream (the channel shares the stream's position)
try (FileInputStream fis = new FileInputStream("data.bin");
     FileChannel channel = fis.getChannel()) {
    // use channel
}

// Directly (recommended for NIO code)
try (FileChannel channel = FileChannel.open(Path.of("data.bin"),
        StandardOpenOption.READ)) {
    // use channel
}
```

### ByteBuffer

`ByteBuffer` is the fundamental buffer type. It wraps a block of memory (heap or direct) and
maintains four pointers that control how data is read and written:

```
+-------------------+------------------+------------------+
|     capacity      |                  |                  |
+-------------------+------------------+------------------+
|      position     |     remaining    |                  |
+-------------------+------------------+------------------+
0                                                                     limit                                                              capacity
```

- **capacity**: the total size of the buffer, set at creation and never changed.
- **position**: the index of the next element to be read or written.
- **limit**: the first index that should not be read or written.
- **mark**: a saved position (optional, set with `mark()`, restored with `reset()`).

Invariant: `0 &lt;= mark &lt;= position &lt;= limit &lt;= capacity`

#### allocate vs allocateDirect

```java
// Heap buffer: backed by a Java byte array, subject to GC
ByteBuffer heap = ByteBuffer.allocate(8192);

// Direct buffer: backed by native memory, NOT subject to GC
ByteBuffer direct = ByteBuffer.allocateDirect(8192);
```

Heap buffers are cheaper to allocate (GC-managed) and faster for small operations. Direct buffers
use native memory (`malloc`/`mmap`), avoid an extra copy during channel I/O, but are expensive to
allocate and deallocate relies on a `Cleaner` (JDK 9+). Use heap by default; direct for large,
repeated I/O.

#### Buffer Operations: flip, compact, rewind

```java
ByteBuffer buf = ByteBuffer.allocate(256);

buf.put((byte) 1);  // position=1
buf.put((byte) 2);  // position=2
buf.put((byte) 3);  // position=3, limit=256

buf.flip();         // limit=3, position=0  (write mode → read mode)

byte a = buf.get(); // a=1, position=1
byte b = buf.get(); // b=2, position=2

buf.compact();      // copies unread data (byte 3) to index 0, position=1, limit=256
buf.put((byte) 4);  // append after existing data

buf.rewind();       // position=0, limit unchanged (re-read the data)

buf.clear();        // position=0, limit=256 (read mode → write mode)
```

The typical read-loop pattern with `FileChannel`:

```java
try (FileChannel channel = FileChannel.open(Path.of("data.bin"), StandardOpenOption.READ)) {
    ByteBuffer buf = ByteBuffer.allocate(8192);
    while (channel.read(buf) != -1) {
        buf.flip();
        while (buf.hasRemaining()) {
            byte b = buf.get();
            // process byte
        }
        buf.clear();
    }
}
```

**Common Pitfall:** Forgetting to `flip()` before reading, or `clear()` before writing. Think of
`flip()` as "switch from write mode to read mode" and `clear()` as "switch from read mode to write
mode."

### FileChannel

`FileChannel` supports scatter/gather I/O, file locking, memory-mapped files, and bulk transfer.

#### transferTo and transferFrom

```java
// Efficient file copy using transferTo (zero-copy on supported OSes)
try (FileChannel src = FileChannel.open(Path.of("source.bin"), StandardOpenOption.READ);
     FileChannel dst = FileChannel.open(Path.of("dest.bin"),
         StandardOpenOption.WRITE, StandardOpenOption.CREATE)) {
    long transferred = 0;
    long size = src.size();
    while (transferred < size) {
        transferred += src.transferTo(transferred, size - transferred, dst);
    }
}
```

`transferTo()` uses `sendfile` (Linux) or `TransmitFile` (Windows) for zero-copy transfer from page
cache to destination without copying through user space. This is how Netty and Tomcat serve static
files efficiently.

**Common Pitfall:** `transferTo()` may not transfer all bytes in one call; loop until done.

#### Memory-Mapped Files with MappedByteBuffer

```java
try (FileChannel channel = FileChannel.open(Path.of("large.dat"),
        StandardOpenOption.READ, StandardOpenOption.WRITE)) {
    MappedByteBuffer mbb = channel.map(
        FileChannel.MapMode.READ_WRITE,  // READ_ONLY, READ_WRITE, or PRIVATE
        0,                                // offset
        channel.size());                  // size

    // Direct access to file contents via memory
    mbb.putInt(0, 42);           // write an int at offset 0
    int value = mbb.getInt(0);   // read it back

    // Changes are visible to other programs that have mapped the same file
    // (for READ_WRITE mode). Changes may not be flushed to disk until
    // MappedByteBuffer.force() is called or the channel is closed.
    mbb.force();  // flush to disk
}
```

Mapped byte buffers caveats:

- `MapMode.PRIVATE` creates a copy-on-write mapping; changes are not visible to other processes.
- No explicit way to unmap before GC (tied to `Cleaner`). Can exhaust virtual address space on
  32-bit.
- `force()` flushes dirty pages but does not guarantee OS disk cache is flushed to persistent
  storage (use `FileChannel.force(true)` for that).
- If another process truncates the mapped file, accessing the buffer causes SIGBUS (JVM crash).

### SocketChannel and ServerSocketChannel

`SocketChannel` and `ServerSocketChannel` provide non-blocking TCP I/O. In non-blocking mode,
`connect()`, `accept()`, `read()`, and `write()` return immediately if they cannot complete; use a
`Selector` to determine readiness.

```java
// Non-blocking connect
try (SocketChannel channel = SocketChannel.open()) {
    channel.configureBlocking(false);
    channel.connect(new InetSocketAddress("example.com", 80));

    while (!channel.finishConnect()) {
        // do other work while connecting
    }

    ByteBuffer request = ByteBuffer.wrap("GET / HTTP/1.0\r\n\r\n".getBytes(StandardCharsets.UTF_8));
    channel.write(request);

    ByteBuffer response = ByteBuffer.allocate(8192);
    channel.read(response);
    response.flip();
    System.out.println(StandardCharsets.UTF_8.decode(response));
}
```

```java
// Non-blocking server (simplified — use Selector for real code)
try (ServerSocketChannel server = ServerSocketChannel.open()) {
    server.bind(new InetSocketAddress(8080));
    server.configureBlocking(false);
    while (true) {
        SocketChannel client = server.accept();  // returns null if no connection
        if (client != null) {
            client.configureBlocking(false);
            // handle client
        }
    }
}
```

The polling loop above is inefficient. The proper pattern is to use a `Selector` (see next section).

**Common Pitfall:** `write()` may write fewer bytes than the buffer contains; call `write()` again
with the remaining bytes. Call `configureBlocking(false)` _before_ `connect()`, not after.

### Selector and SelectionKey (Reactor Pattern)

`Selector` (JDK 1.4) implements the reactor pattern: a single thread monitors multiple channels for
readiness events and dispatches handlers. This is the foundation of Netty.

```java
try (Selector selector = Selector.open();
     ServerSocketChannel server = ServerSocketChannel.open()) {

    server.bind(new InetSocketAddress(8080));
    server.configureBlocking(false);
    server.register(selector, SelectionKey.OP_ACCEPT);

    while (true) {
        selector.select();  // blocks until at least one channel is ready

        Iterator<SelectionKey> keys = selector.selectedKeys().iterator();
        while (keys.hasNext()) {
            SelectionKey key = keys.next();
            keys.remove();

            if (!key.isValid()) {
                continue;
            }

            if (key.isAcceptable()) {
                SocketChannel client = server.accept();
                client.configureBlocking(false);
                client.register(selector, SelectionKey.OP_READ);
            }

            if (key.isReadable()) {
                SocketChannel client = (SocketChannel) key.channel();
                ByteBuffer buf = ByteBuffer.allocate(8192);
                int bytesRead = client.read(buf);
                if (bytesRead == -1) {
                    key.cancel();
                    client.close();
                    continue;
                }
                buf.flip();
                // process request, then register for write
                client.register(selector, SelectionKey.OP_WRITE, buf);
            }

            if (key.isWritable()) {
                SocketChannel client = (SocketChannel) key.channel();
                ByteBuffer buf = (ByteBuffer) key.attachment();
                client.write(buf);
                if (!buf.hasRemaining()) {
                    key.interestOps(SelectionKey.OP_READ);
                }
            }
        }
    }
}
```

Key concepts:

- **interestOps()** — the operations you registered for (modifiable at any time).
- **readyOps()** — the operations currently ready (checked by `isAcceptable()`, `isReadable()`,
  etc.).
- **attachment()** — arbitrary per-connection state (e.g., an output buffer).

**Common Pitfalls:**

- Must call `iterator.remove()` for each processed key, or the same key loops forever.
- `select()` can return immediately with zero keys if `wakeup()` was called.
- Cancelling a key does not remove it from the selected-keys set until the next `select()`.

---

## Practical Patterns

### Reading and Writing Text Files (UTF-8)

```java
// Small file: read all at once
String content = Files.readString(Path.of("config.json"));

// Small file: write all at once
Files.writeString(Path.of("output.txt"), "hello, world\n");

// Large file: stream line by line
try (Stream<String> lines = Files.lines(Path.of("access.log"), StandardCharsets.UTF_8)) {
    lines.filter(line -> line.contains(" 500 "))
         .forEach(System.out::println);
}

// Large file: write line by line
try (BufferedWriter writer = new BufferedWriter(
        new FileWriter("output.txt", StandardCharsets.UTF_8))) {
    for (String line : data) {
        writer.write(line);
        writer.newLine();
    }
}
```

### Processing Large Files Line by Line

For files too large to fit in memory, process them line by line:

```java
// Lazy count (constant memory)
long errorCount;
try (Stream<String> lines = Files.lines(Path.of("server.log"), StandardCharsets.UTF_8)) {
    errorCount = lines.filter(line -> line.startsWith("[ERROR]")).count();
}

// With state (e.g., CSV parsing)
try (BufferedReader reader = new BufferedReader(
        new FileReader("data.csv", StandardCharsets.UTF_8))) {
    String header = reader.readLine();  // skip header
    String line;
    while ((line = reader.readLine()) != null) {
        String[] fields = line.split(",");
        // process fields
    }
}
```

**Common Pitfall:** `Files.lines()` is backed by a `BufferedReader`. If you short-circuit (e.g.,
`.findFirst()`), the stream is not automatically closed. Always use try-with-resources.

### Binary File I/O

```java
// Read/write binary with precise positioning
try (FileChannel channel = FileChannel.open(Path.of("data.bin"),
        StandardOpenOption.READ, StandardOpenOption.WRITE)) {
    ByteBuffer buf = ByteBuffer.allocate(1024);
    channel.read(buf, 4096);   // read 1024 bytes at offset 4096
    buf.flip();
    buf.rewind();
    channel.write(buf, 8192);  // write at offset 8192
}
```

### Temporary Files

```java
// Create a temporary file
Path temp = Files.createTempFile("prefix-", ".suffix");

// In a specific directory
Path temp = Files.createTempFile(Path.of("/tmp/myapp"), "data-", ".bin");

// Create a temporary directory
Path tempDir = Files.createTempDirectory("myapp-");

// DELETE_ON_CLOSE: deleted when the channel is closed
try (FileChannel channel = FileChannel.open(
        Files.createTempFile("work-", ".dat"),
        StandardOpenOption.DELETE_ON_CLOSE,
        StandardOpenOption.READ,
        StandardOpenOption.WRITE)) {
    // work with the file
}
```

**Common Pitfall:** If the JVM crashes before deletion, the file remains. Use `DELETE_ON_CLOSE` or
register a shutdown hook as a fallback.

### File Locking

`FileLock` provides advisory locking — it only prevents other processes that also use `FileLock`. A
process that ignores the lock can still read or write.

```java
// Exclusive lock (blocks until acquired)
try (FileChannel ch = FileChannel.open(Path.of("data.db"),
        StandardOpenOption.READ, StandardOpenOption.WRITE);
     FileLock lock = ch.lock()) {
    // atomic read-modify-write
}

// Shared lock (multiple readers OK, writers blocked)
try (FileChannel ch = FileChannel.open(Path.of("data.db"), StandardOpenOption.READ);
     FileLock lock = ch.lock(0, Long.MAX_VALUE, true)) {
    // read-only operation
}

// Non-blocking attempt
try (FileChannel ch = FileChannel.open(Path.of("data.db"),
        StandardOpenOption.READ, StandardOpenOption.WRITE)) {
    FileLock lock = ch.tryLock();
    if (lock == null) {
        // lock not available, handle contention
    }
}
```

**Common Pitfalls:**

- Locks are released when the `FileChannel` is closed. If a thread deadlocks while holding a lock,
  it remains held until the thread terminates or JVM exits.
- Unreliable on NFS. Use a distributed lock service (Zookeeper, etcd) instead.
- Overlapping locks from the same JVM may or may not succeed. Use `ReentrantLock` for intra-JVM
  coordination.

---

## Common Pitfalls Summary

| Pitfall                                 | Consequence                             | Fix                                              |
| --------------------------------------- | --------------------------------------- | ------------------------------------------------ |
| Not specifying charset                  | Silent character corruption             | Always use `StandardCharsets.UTF_8`              |
| Not closing resources                   | File descriptor leak                    | Use try-with-resources                           |
| `readAllLines()` on large files         | `OutOfMemoryError`                      | Use `Files.lines()` or `BufferedReader`          |
| Forgetting to `flip()` a buffer         | Reading stale or no data                | Always `flip()` before reading                   |
| Not removing `SelectionKey` from set    | Infinite loop in selector               | Call `iterator.remove()`                         |
| Relying on platform default charset     | Platform-dependent behavior             | Explicit charset on every Reader/Writer          |
| Mixing Reader and Stream on same source | Data corruption from buffer consumption | Use only one abstraction per source              |
| Assuming `transferTo` transfers all     | Partial copy                            | Loop until all bytes transferred                 |
| File locking on NFS                     | Lock not respected                      | Use a distributed lock service (Zookeeper, etcd) |
| `WatchService` not resetting key        | No further events delivered             | Always call `key.reset()`                        |
| Not closing `Files.lines()` stream      | File handle leak                        | Use try-with-resources                           |
