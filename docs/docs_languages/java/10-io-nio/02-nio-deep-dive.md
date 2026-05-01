---
id: nio-deep-dive
title: NIO Deep Dive
description:
  NIO Deep Dive — NIO Overview; Buffer vs Stream; Buffers; `ByteBuffer`
  including key definitions, derivations, and problem-solving techniques.
slug: nio-deep-dive
---

## NIO Overview

`java.nio` (New I/O, introduced in JDK 1.4) provides a buffer-oriented, non-blocking alternative to
the stream-based `java.io` API. NIO is designed for high-throughput I/O scenarios: network servers
handling thousands of connections, file operations on large files, and memory-mapped I/O.

### Buffer vs Stream

| Aspect          | Stream I/O (`java.io`)                    | NIO (`java.nio`)                            |
| --------------- | ----------------------------------------- | ------------------------------------------- |
| Data model      | Byte-by-byte or char-by-char              | Blocks of data (buffers)                    |
| Direction       | Unidirectional (InputStream/OutputStream) | Bidirectional (channels)                    |
| Blocking        | Always blocking                           | Blocking or non-blocking                    |
| File operations | Sequential                                | Random access, memory-mapped                |
| Threading model | One thread per connection                 | One thread for many connections (selectors) |

## Buffers

Buffers are the central data containers in NIO. A buffer is a fixed-capacity, in-memory container
for data of a specific primitive type. All buffers extend `Buffer`.

### `ByteBuffer`

`ByteBuffer` is the most commonly used buffer. It holds bytes and provides methods for reading and
writing both primitive types and byte arrays.

```java
// Allocation
ByteBuffer heapBuf = ByteBuffer.allocate(1024);        // heap-allocated
ByteBuffer directBuf = ByteBuffer.allocateDirect(1024); // direct (native memory)

// Wrapping an existing array
byte[] data = "Hello, World!".getBytes(StandardCharsets.UTF_8);
ByteBuffer wrapBuf = ByteBuffer.wrap(data);
```

### Buffer Properties

Every buffer has four core properties:

| Property   | Description                                                                                                                            |
| ---------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `capacity` | Maximum number of elements the buffer can hold. Set at creation, never changes.                                                        |
| `position` | Index of the next element to read or write. Starts at 0, increments on read/write.                                                     |
| `limit`    | First index that should not be read or written. For write mode, equals capacity. For read mode, equals the number of elements written. |
| `mark`     | An optional bookmark (set via `mark()`, reset via `reset()`).                                                                          |

**Invariants:** `0 <= mark <= position <= limit <= capacity`

### Flip, Clear, Compact, Rewind

```java
ByteBuffer buf = ByteBuffer.allocate(256);

// WRITE mode
buf.put("Hello".getBytes(StandardCharsets.UTF_8));
buf.put("World".getBytes(StandardCharsets.UTF_8));
// position = 10, limit = 256

// Flip — prepare for reading (limit = position, position = 0)
buf.flip();
// position = 0, limit = 10

// READ mode
byte[] result = new byte[buf.remaining()];
buf.get(result);
// position = 10, limit = 10

// Clear — prepare for writing again (position = 0, limit = capacity)
buf.clear();
// position = 0, limit = 256

// Compact — copy unread data to the beginning, prepare for writing
// Useful when you've partially read and want to append more data
buf.compact();
// Copies bytes from position..limit to 0..remaining, sets position = remaining

// Rewind — position = 0, limit unchanged (re-read the same data)
buf.rewind();
```

### Direct vs Heap Buffers

```java
// Heap buffer — backed by a regular Java byte array
ByteBuffer heap = ByteBuffer.allocate(1024);
// Allocated on the Java heap, subject to GC
// Fast allocation, fast access from Java code
// When used for I/O, the data must be copied to/from native memory

// Direct buffer — backed by native memory (malloc)
ByteBuffer direct = ByteBuffer.allocateDirect(1024);
// Allocated outside the Java heap, not subject to GC (except the buffer object itself)
// Slower allocation, but avoids copy when used with I/O operations
// The OS can perform DMA (direct memory access) directly to/from the buffer
```

:::info
Use direct buffers when the buffer is long-lived and used for repeated I/O operations. The
allocation cost is amortized over many I/O calls, and the avoidance of heap-to-native copies
improves throughput. Use heap buffers for short-lived buffers where allocation speed matters more
than I/O throughput.
:::

### `get` and `put` Operations

```java
ByteBuffer buf = ByteBuffer.allocate(1024);

// Absolute get/put (specify index, does not modify position)
buf.put(5, (byte) 'X');
byte b = buf.get(5);

// Relative get/put (reads/writes at current position, increments position)
buf.put((byte) 'A');
byte c = buf.get();

// Bulk operations
byte[] src = {1, 2, 3, 4, 5};
buf.put(src);        // puts entire array
buf.put(src, 1, 3);  // puts src[1..3] (bytes 2, 3, 4)

byte[] dst = new byte[5];
buf.get(dst);         // reads 5 bytes into dst

// Primitive type access (ByteBuffer-specific)
buf.putInt(42);        // 4 bytes, big-endian by default
buf.putLong(123456789L);
int val = buf.getInt();
long lval = buf.getLong();

// Byte order
buf.order(ByteOrder.LITTLE_ENDIAN);  // for network protocols, file formats
buf.order(ByteOrder.BIG_ENDIAN);     // default, also ByteOrder.nativeOrder()
```

### `CharBuffer`

`CharBuffer` stores characters. It is often created by wrapping a `String` or by decoding a
`ByteBuffer`:

```java
// From String
CharBuffer cb = CharBuffer.wrap("Hello, World!");

// Decode from ByteBuffer
CharsetDecoder decoder = StandardCharsets.UTF_8.newDecoder();
CharBuffer charBuf = decoder.decode(byteBuffer);

// Encode back to ByteBuffer
CharsetEncoder encoder = StandardCharsets.UTF_8.newEncoder();
ByteBuffer byteBuf = encoder.encode(charBuf);
```

## Channels

Channels represent open connections to I/O sources or sinks (files, sockets). Unlike streams,
channels are bidirectional — a `FileChannel` can both read and write.

### `FileChannel`

`FileChannel` provides random access to files. It is obtained from `FileInputStream`,
`FileOutputStream`, `RandomAccessFile`, or `FileChannel.open()`.

```java
// From FileInputStream (read-only)
try (FileInputStream fis = new FileInputStream("data.bin");
     FileChannel channel = fis.getChannel()) {
    ByteBuffer buf = ByteBuffer.allocate(8192);
    while (channel.read(buf) != -1) {
        buf.flip();
        // process buf
        buf.clear();
    }
}

// From RandomAccessFile (read-write)
try (RandomAccessFile raf = new RandomAccessFile("data.bin", "rw");
     FileChannel channel = raf.getChannel()) {
    ByteBuffer buf = ByteBuffer.allocate(1024);
    channel.read(buf, 4096); // read from offset 4096
    buf.flip();
    channel.write(buf, 8192); // write at offset 8192
}

// Modern API (JDK 7+)
try (FileChannel channel = FileChannel.open(Path.of("data.bin"),
        StandardOpenOption.READ, StandardOpenOption.WRITE)) {
    // read/write operations
}
```

### `transferTo` / `transferFrom`

Zero-copy file operations that transfer data directly between channels without copying through
user-space buffers. On supporting OS/filesystems, this is implemented with `sendfile` or `splice`
system calls.

```java
// Copy a file efficiently (zero-copy when possible)
try (FileChannel src = FileChannel.open(Path.of("source.bin"), StandardOpenOption.READ);
     FileChannel dst = FileChannel.open(Path.of("dest.bin"),
         StandardOpenOption.CREATE, StandardOpenOption.WRITE, StandardOpenOption.TRUNCATE_EXISTING)) {
    long transferred = src.transferTo(0, src.size(), dst);
    System.out.println("Transferred " + transferred + " bytes");
}
```

:::info
`transferTo` may not transfer all requested bytes in a single call (it returns the actual
number transferred). Loop until the return value is zero or an exception is thrown. On Linux with
ext4/xfs, the entire transfer typically completes in a single system call.
:::

### File Locking

`FileLock` provides advisory locking on files. Advisory means the lock is only enforced if all
processes accessing the file cooperate by acquiring locks. The OS does not prevent a process without
a lock from reading or writing.

```java
try (FileChannel channel = FileChannel.open(Path.of("data.lock"),
        StandardOpenOption.CREATE, StandardOpenOption.WRITE)) {

    // Non-blocking lock attempt
    FileLock lock = channel.tryLock();
    if (lock == null) {
        System.out.println("File is locked by another process");
        return;
    }

    try {
        // Critical section — exclusive access to the file
        channel.write(ByteBuffer.wrap("important data".getBytes(StandardCharsets.UTF_8)));
    } finally {
        lock.release();
    }
}

// Shared lock (multiple readers, exclusive writers)
FileLock sharedLock = channel.tryLock(0L, Long.MAX_VALUE, true); // true = shared
FileLock exclusiveLock = channel.tryLock(0L, Long.MAX_VALUE, false); // false = exclusive
```

:::warning
File locks are JVM-scoped, not thread-scoped. If two threads in the same JVM try to
acquire overlapping exclusive locks on the same file, the second `lock()` call throws
`OverlappingFileLockException`. Use `tryLock()` for non-blocking acquisition. Locks are
automatically released when the channel is closed or the JVM exits.
:::

### Socket Channels

```java
// SocketChannel (client-side TCP)
try (SocketChannel channel = SocketChannel.open()) {
    channel.connect(new InetSocketAddress("example.com", 80));
    ByteBuffer buf = ByteBuffer.wrap("GET / HTTP/1.1\r\nHost: example.com\r\n\r\n"
        .getBytes(StandardCharsets.UTF_8));
    channel.write(buf);
    buf.clear();
    channel.read(buf);
    buf.flip();
    System.out.println(StandardCharsets.UTF_8.decode(buf).toString());
}

// ServerSocketChannel (server-side TCP)
try (ServerSocketChannel server = ServerSocketChannel.open()) {
    server.bind(new InetSocketAddress(8080));
    server.configureBlocking(false); // non-blocking mode

    while (true) {
        SocketChannel client = server.accept(); // returns null if no connection
        if (client != null) {
            client.configureBlocking(false);
            // handle client with selector
        }
    }
}

// DatagramChannel (UDP)
try (DatagramChannel channel = DatagramChannel.open()) {
    channel.bind(new InetSocketAddress(9000));
    ByteBuffer buf = ByteBuffer.allocate(1024);
    SocketAddress sender = channel.receive(buf);
    buf.flip();
    channel.send(buf, sender);
}
```

## Selectors

A `Selector` allows a single thread to monitor multiple channels for readiness events (connect,
accept, read, write). This is the foundation of scalable network servers — one thread can handle
thousands of connections.

### `SelectionKey`

A `SelectionKey` represents the registration of a channel with a selector. It contains:

- The channel being monitored.
- The selector it is registered with.
- The set of operations of interest (`OP_ACCEPT`, `OP_CONNECT`, `OP_READ`, `OP_WRITE`).
- The set of operations that are ready.
- An attachment (arbitrary object).

### Selector Event Loop

```java
Selector selector = Selector.open();

ServerSocketChannel server = ServerSocketChannel.open();
server.bind(new InetSocketAddress(8080));
server.configureBlocking(false);
server.register(selector, SelectionKey.OP_ACCEPT);

while (true) {
    int readyCount = selector.select(); // blocks until at least one channel is ready
    if (readyCount == 0) continue;

    Set<SelectionKey> readyKeys = selector.selectedKeys();
    Iterator<SelectionKey> iter = readyKeys.iterator();

    while (iter.hasNext()) {
        SelectionKey key = iter.next();
        iter.remove(); // MUST remove the key after processing

        if (!key.isValid()) continue;

        if (key.isAcceptable()) {
            acceptConnection(key, selector);
        }
        if (key.isReadable()) {
            readFromChannel(key);
        }
        if (key.isWritable()) {
            writeToChannel(key);
        }
    }
}
```

### Accept and Read Handling

```java
private void acceptConnection(SelectionKey key, Selector selector) throws IOException {
    ServerSocketChannel server = (ServerSocketChannel) key.channel();
    SocketChannel client = server.accept();
    if (client != null) {
        client.configureBlocking(false);
        ByteBuffer buffer = ByteBuffer.allocate(4096);
        client.register(selector, SelectionKey.OP_READ, buffer);
    }
}

private void readFromChannel(SelectionKey key) throws IOException {
    SocketChannel client = (SocketChannel) key.channel();
    ByteBuffer buffer = (ByteBuffer) key.attachment();

    int bytesRead = client.read(buffer);
    if (bytesRead == -1) {
        key.cancel();
        client.close();
        return;
    }

    buffer.flip();
    byte[] data = new byte[buffer.remaining()];
    buffer.get(data);
    buffer.clear();

    // Process data, then register for write
    String response = processRequest(data);
    ByteBuffer writeBuf = ByteBuffer.wrap(response.getBytes(StandardCharsets.UTF_8));
    client.register(key.selector(), SelectionKey.OP_WRITE, writeBuf);
}

private void writeToChannel(SelectionKey key) throws IOException {
    SocketChannel client = (SocketChannel) key.channel();
    ByteBuffer buffer = (ByteBuffer) key.attachment();

    client.write(buffer);
    if (!buffer.hasRemaining()) {
        buffer.clear();
        client.register(key.selector(), SelectionKey.OP_READ, buffer);
    }
}
```

### `wakeup`

`selector.wakeup()` causes a currently blocked `select()` call to return immediately. If no
`select()` is in progress, the next `select()` will return immediately. This is useful for thread
coordination:

```java
// From another thread — wake up the selector loop
selector.wakeup();

// In the selector loop
int readyCount = selector.select();
// If woken up, readyCount may be 0 — check for pending state changes
```

## Non-Blocking I/O

In non-blocking mode, `read()` and `write()` return immediately. `read()` returns the number of
bytes read (0 if none available, -1 if the channel is closed). `write()` returns the number of bytes
written (may be less than requested).

```java
channel.configureBlocking(false);

// Non-blocking write — must handle partial writes
ByteBuffer buf = ByteBuffer.wrap(largeData);
while (buf.hasRemaining()) {
    int written = channel.write(buf);
    if (written == 0) {
        // Channel's write buffer is full — register for OP_WRITE
        key.interestOps(key.interestOps() | SelectionKey.OP_WRITE);
        break;
    }
}
```

:::warning
When using non-blocking I/O, you must handle partial reads and writes. A single `read()`
may return fewer bytes than requested, and a single `write()` may accept fewer bytes than provided.
Always check the return value and manage the buffer position accordingly.
:::

## `AsynchronousFileChannel`

Introduced in JDK 7, `AsynchronousFileChannel` provides asynchronous file I/O operations. It
supports two usage patterns: Future-based and callback-based.

### Future-Based Async I/O

```java
try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(
        Path.of("large.dat"),
        StandardOpenOption.READ)) {

    ByteBuffer buffer = ByteBuffer.allocate(8192);
    long position = 0;

    Future<Integer> operation = channel.read(buffer, position);

    while (!operation.isDone()) {
        // Do other work while the read proceeds
        doOtherWork();
    }

    int bytesRead = operation.get(); // blocks until complete (or throws)
    buffer.flip();
    // process data
}
```

### Completion Handler-Based Async I/O

```java
try (AsynchronousFileChannel channel = AsynchronousFileChannel.open(
        Path.of("large.dat"),
        StandardOpenOption.WRITE,
        StandardOpenOption.CREATE)) {

    ByteBuffer buffer = ByteBuffer.wrap("Hello, async world!".getBytes(StandardCharsets.UTF_8));
    long position = 0;

    channel.write(buffer, position, buffer, new CompletionHandler<Integer, ByteBuffer>() {
        @Override
        public void completed(Integer result, ByteBuffer attachment) {
            System.out.println("Wrote " + result + " bytes");
            // The attachment is the buffer we passed in
        }

        @Override
        public void failed(Throwable exc, ByteBuffer attachment) {
            System.err.println("Write failed: " + exc.getMessage());
        }
    });

    // Continue doing other work — the callback runs on a separate thread
}
```

:::info
The completion handler's callback methods are executed by the `AsynchronousFileChannel`'s
thread pool. By default, this is the JVM-wide default `ForkJoinPool`. You can provide a custom
`ExecutorService` via `AsynchronousFileChannel.open(path, options, executor)`.
:::

## `Path` and `Files` Utility Classes

### `Path`

`Path` (JDK 7+) replaces `File` as the primary way to represent file and directory paths. It
supports operations on path components (root, parent, filename) and is immutable.

```java
Path absolute = Path.of("/usr/local/bin/java");
Path relative = Path.of("src/main/resources/config.properties");

// Path operations
Path parent = absolute.getParent();           // /usr/local/bin
Path fileName = absolute.getFileName();       // java
Path root = absolute.getRoot();               // /
int nameCount = absolute.getNameCount();      // 4

// Combining paths
Path combined = Path.of("/home/user").resolve("documents/report.txt");
// /home/user/documents/report.txt

Path normalized = Path.of("/home/user/../admin/./config").normalize();
// /home/admin/config

// Relative path between two paths
Path from = Path.of("/home/user/docs");
Path to = Path.of("/home/user/docs/reports/2024");
Path rel = from.relativize(to);
// reports/2024
```

### `Files` Utility Methods

```java
// Reading
String content = Files.readString(Path.of("config.txt"));
List<String> lines = Files.readAllLines(Path.of("data.csv"));
byte[] bytes = Files.readAllBytes(Path.of("image.png"));

// Streaming lines (memory-efficient for large files)
try (Stream<String> stream = Files.lines(Path.of("large.log"))) {
    stream.filter(line -&gt; line.contains("ERROR"))
          .forEach(System.out::println);
}

// Writing
Files.writeString(Path.of("output.txt"), "Hello, World!");
Files.write(Path.of("data.csv"), lines);
Files.write(Path.of("binary.dat"), bytes, StandardOpenOption.CREATE);

// File operations
Files.createFile(Path.of("new.txt"));
Files.createDirectory(Path.of("newdir"));
Files.createDirectories(Path.of("a/b/c/d")); // creates all parent dirs
Files.delete(Path.of("old.txt"));
Files.deleteIfExists(Path.of("maybe.txt"));
Files.move(Path.of("old.txt"), Path.of("new.txt"), StandardCopyOption.REPLACE_EXISTING);
Files.copy(Path.of("source.txt"), Path.of("dest.txt"), StandardCopyOption.REPLACE_EXISTING);

// File attributes
boolean exists = Files.exists(Path.of("config.txt"));
boolean isRegularFile = Files.isRegularFile(Path.of("data.bin"));
boolean isDirectory = Files.isDirectory(Path.of("src"));
long size = Files.size(Path.of("data.bin"));
FileTime lastModified = Files.getLastModifiedTime(Path.of("config.txt"));

// Walking directory trees
try (Stream<Path> walk = Files.walk(Path.of("src/main/java"))) {
    walk.filter(Files::isRegularFile)
        .filter(p -&gt; p.toString().endsWith(".java"))
        .forEach(System.out::println);
}

// Find files
try (Stream<Path> found = Files.find(Path.of("src"), 10,
        (path, attrs) -&gt; attrs.isRegularFile() && path.toString().endsWith(".java"))) {
    found.forEach(System.out::println);
}
```

## Memory-Mapped Files

`MappedByteBuffer` maps a region of a file directly into memory. Reads and writes to the buffer are
reflected in the file. The OS handles paging — only the portions of the file that are actually
accessed are loaded into physical memory.

```java
try (FileChannel channel = FileChannel.open(Path.of("data.bin"),
        StandardOpenOption.READ, StandardOpenOption.WRITE)) {

    MappedByteBuffer mapped = channel.map(
        FileChannel.MapMode.READ_WRITE,
        0,      // offset
        channel.size()  // size
    );

    // Direct memory access — reads/writes go to the file
    int value = mapped.getInt(0);
    mapped.putInt(0, value + 1);

    // Force writes to disk (like fsync)
    mapped.force();
}
```

### Map Modes

| Mode         | Description                                                                          |
| ------------ | ------------------------------------------------------------------------------------ |
| `READ_ONLY`  | Read-only mapping. Attempts to modify the buffer throw `ReadOnlyBufferException`.    |
| `READ_WRITE` | Read-write mapping. Changes are written back to the file.                            |
| `PRIVATE`    | Copy-on-write. Changes are not written to the file; they are private to this buffer. |

### Use Cases

- **Structured binary file access** — reading/writing fixed-format records at known offsets.
- **Shared memory between processes** — two JVM processes can map the same file and communicate
  through the mapped buffer.
- **Large file processing** — process terabyte-scale files without loading them into JVM heap.

:::warning
`MappedByteBuffer` uses native memory, not the Java heap. It is not subject to GC heap
limits, but it does consume address space. On 32-bit JVMs, you are limited to ~2 GB of mapped
memory. On 64-bit JVMs, the limit is the available virtual address space. Closing the `FileChannel`
does not immediately unmap the buffer — the mapped memory is released when the `MappedByteBuffer`
object is GC'd, which may be delayed.
:::

## Common Pitfalls

### Forgetting to `flip()` Before Reading

```java
ByteBuffer buf = ByteBuffer.allocate(1024);
channel.read(buf);
// BUG — position is at the end, limit is at capacity
byte[] data = new byte[buf.remaining()]; // remaining() returns 0!
buf.get(data); // BufferUnderflowException

// FIX
buf.flip();
byte[] data = new byte[buf.remaining()];
buf.get(data);
```

### Not Handling Partial Writes in Non-Blocking Mode

```java
// BUG — assumes write() writes all bytes
channel.write(buffer); // may write only some bytes

// FIX — loop until all bytes are written
while (buffer.hasRemaining()) {
    channel.write(buffer);
}
```

### Forgetting to `remove()` SelectionKey

```java
// BUG — selectedKeys() returns keys that were ready at the time of select()
// If you don't remove processed keys, select() returns the same keys again
Set<SelectionKey> keys = selector.selectedKeys();
for (SelectionKey key : keys) {
    process(key);
    // BUG — key not removed from the set
}

// FIX
Iterator<SelectionKey> iter = selector.selectedKeys().iterator();
while (iter.hasNext()) {
    SelectionKey key = iter.next();
    iter.remove();
    process(key);
}
```

### `MappedByteBuffer` Memory Leak

```java
// The mapped buffer uses native memory that is not freed until the
// MappedByteBuffer object is GC'd. There is no explicit unmap() method
// in the public API (sun.misc.Cleaner exists but is internal).

// Workaround: ensure the buffer becomes unreachable
public void processFile(Path path) throws IOException {
    MappedByteBuffer buf;
    try (FileChannel fc = FileChannel.open(path, StandardOpenOption.READ)) {
        buf = fc.map(FileChannel.MapMode.READ_ONLY, 0, fc.size());
        processData(buf);
    }
    // buf is now unreachable (assuming processData doesn't store it)
    // GC will eventually clean up the native memory mapping
}
```

### Blocking in Selector Thread

```java
// BUG — performing blocking operations in the selector event loop
if (key.isReadable()) {
    SocketChannel client = (SocketChannel) key.channel();
    ByteBuffer buf = ByteBuffer.allocate(8192);
    client.read(buf);
    // If you do a blocking database call here, the entire selector
    // is blocked — no other connections can be served
    String result = blockingDatabaseCall(); // BAD
}

// FIX — offload blocking work to a separate thread pool
if (key.isReadable()) {
    SocketChannel client = (SocketChannel) key.channel();
    ByteBuffer buf = ByteBuffer.allocate(8192);
    client.read(buf);
    executor.submit(() -&gt; {
        String result = databaseCall();
        // Queue response for writing
    });
}
```

### Using `FileChannel` with `FileInputStream` in Non-Blocking Mode

```java
// BUG — FileChannel does not support non-blocking mode
FileChannel fc = new FileInputStream("data.bin").getChannel();
// fc.configureBlocking(false); // throws NonWritableChannelException or no-op

// FileChannel is always blocking. Only SocketChannel and ServerSocketChannel
// support non-blocking mode. Use AsynchronousFileChannel for async file I/O.
```

### Not Flushing `MappedByteBuffer` Before Closing

```java
// BUG — changes to a MappedByteBuffer may not be written to disk before the
// JVM exits. The OS controls when dirty pages are flushed to disk.
try (FileChannel fc = FileChannel.open(path, READ, WRITE)) {
    MappedByteBuffer buf = fc.map(READ_WRITE, 0, 1024);
    buf.putInt(0, 42);
    // If the JVM crashes here, the write may be lost
} // fc.close() does NOT guarantee flush

// FIX — call force() before closing
try (FileChannel fc = FileChannel.open(path, READ, WRITE)) {
    MappedByteBuffer buf = fc.map(READ_WRITE, 0, 1024);
    buf.putInt(0, 42);
    buf.force(); // forces all dirty pages to disk (like fsync)
}
```

## NIO Performance Considerations

### Buffer Pooling

Allocating direct buffers is expensive (involves a JNI call to allocate native memory). In
high-throughput servers, allocate buffers once and reuse them:

```java
public class BufferPool {
    private final Queue<ByteBuffer> pool = new ConcurrentLinkedQueue<>();
    private final int bufferSize;

    public BufferPool(int bufferSize, int initialCapacity) {
        this.bufferSize = bufferSize;
        for (int i = 0; i &lt; initialCapacity; i++) {
            pool.offer(ByteBuffer.allocateDirect(bufferSize));
        }
    }

    public ByteBuffer acquire() {
        ByteBuffer buf = pool.poll();
        if (buf == null) {
            buf = ByteBuffer.allocateDirect(bufferSize);
        }
        buf.clear();
        return buf;
    }

    public void release(ByteBuffer buf) {
        if (buf.capacity() == bufferSize) {
            pool.offer(buf);
        }
        // If buffer size doesn't match, let it be GC'd
    }
}
```

### Scatter/Gather I/O

Scatter/gather operations read from a channel into multiple buffers (scatter) or write from multiple
buffers to a channel (gather) in a single system call. This reduces the number of context switches
between user space and kernel space.

```java
// Gather write — write headers and body from separate buffers
ByteBuffer header = ByteBuffer.wrap("HTTP/1.1 200 OK\r\nContent-Length: 5\r\n\r\n".getBytes(StandardCharsets.UTF_8));
ByteBuffer body = ByteBuffer.wrap("Hello".getBytes(StandardCharsets.UTF_8));

try (FileChannel fc = FileChannel.open(Path.of("response.bin"), WRITE, CREATE)) {
    ByteBuffer[] buffers = {header, body};
    fc.write(buffers); // single writev system call
}

// Scatter read — read into header and body buffers
ByteBuffer headerBuf = ByteBuffer.allocate(128);
ByteBuffer bodyBuf = ByteBuffer.allocate(1024);

try (FileChannel fc = FileChannel.open(Path.of("request.bin"), READ)) {
    ByteBuffer[] buffers = {headerBuf, bodyBuf};
    long bytesRead = fc.read(buffers);
}
```

### Selectable Channel Thread Model

The classic Reactor pattern with selectors is effective but has limitations:

- **Single selector thread** — all I/O events are processed on one thread. CPU-bound processing
  blocks the selector.
- **Multiple selector threads** — can process I/O events in parallel, but requires careful
  coordination (e.g., `wakeup()` calls).
- **Selector + worker pool** — the selector thread dispatches I/O events; worker threads handle
  business logic. This is the most common production pattern.

```java
ExecutorService workerPool = Executors.newFixedThreadPool(
    Runtime.getRuntime().availableProcessors() * 2);

while (true) {
    selector.select();
    Iterator<SelectionKey> iter = selector.selectedKeys().iterator();
    while (iter.hasNext()) {
        SelectionKey key = iter.next();
        iter.remove();

        if (key.isAcceptable()) {
            accept(key, selector);
        } else if (key.isReadable()) {
            // Dispatch to worker pool instead of processing inline
            workerPool.submit(() -> handleRead(key));
        } else if (key.isWritable()) {
            workerPool.submit(() -> handleWrite(key));
        }
    }
}
```

### `FileChannel` vs `FileInputStream` Performance

For sequential file reads, `FileInputStream` with `BufferedInputStream` is often faster than
`FileChannel` because the buffer reduces the number of system calls. `FileChannel` excels at random
access, `transferTo`/`transferFrom`, and memory-mapped I/O.

```java
// Sequential read — BufferedInputStream is simpler and often faster
try (BufferedInputStream bis = new BufferedInputStream(new FileInputStream("large.dat"))) {
    byte[] buffer = new byte[8192];
    while (bis.read(buffer) != -1) {
        // process
    }
}

// Random access — FileChannel is the right choice
try (RandomAccessFile raf = new RandomAccessFile("index.dat", "r");
     FileChannel fc = raf.getChannel()) {
    for (long offset : offsets) {
        fc.read(buffer, offset);
        // process record at offset
    }
}
```

## Practical NIO Patterns

### A Simple Echo Server

```java
public class EchoServer {
    public static void main(String[] args) throws IOException {
        Selector selector = Selector.open();
        ServerSocketChannel server = ServerSocketChannel.open();
        server.bind(new InetSocketAddress(8080));
        server.configureBlocking(false);
        server.register(selector, SelectionKey.OP_ACCEPT);

        System.out.println("Echo server listening on port 8080");

        while (true) {
            selector.select();
            Iterator<SelectionKey> iter = selector.selectedKeys().iterator();

            while (iter.hasNext()) {
                SelectionKey key = iter.next();
                iter.remove();

                if (key.isAcceptable()) {
                    SocketChannel client = server.accept();
                    if (client != null) {
                        client.configureBlocking(false);
                        client.register(selector, SelectionKey.OP_READ,
                            ByteBuffer.allocate(256));
                    }
                }

                if (key.isReadable()) {
                    SocketChannel client = (SocketChannel) key.channel();
                    ByteBuffer buffer = (ByteBuffer) key.attachment();

                    int bytesRead = client.read(buffer);
                    if (bytesRead == -1) {
                        key.cancel();
                        client.close();
                        continue;
                    }

                    buffer.flip();
                    client.write(buffer);
                    buffer.compact();
                }
            }
        }
    }
}
```

### Reading a Large File in Chunks with FileChannel

```java
public static void processLargeFile(Path path) throws IOException {
    try (FileChannel channel = FileChannel.open(path, StandardOpenOption.READ)) {
        long fileSize = channel.size();
        long position = 0;
        ByteBuffer buffer = ByteBuffer.allocateDirect(8 * 1024 * 1024); // 8 MB direct buffer

        while (position &lt; fileSize) {
            buffer.clear();
            int bytesRead = channel.read(buffer, position);
            if (bytesRead == -1) break;

            buffer.flip();
            processBuffer(buffer); // application-specific processing

            position += bytesRead;
        }
    }
}

private static void processBuffer(ByteBuffer buffer) {
    while (buffer.hasRemaining()) {
        // process data
        byte b = buffer.get();
    }
}
```

