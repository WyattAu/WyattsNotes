---
title: Exception Handling
date: 2026-04-04T00:00:00.000Z
tags:
  - Java
categories:
  - Java
slug: exception-handling
---

## Exception Hierarchy

```
Throwable
├── Error
│   ├── OutOfMemoryError
│   ├── StackOverflowError
│   ├── NoClassDefFoundError
│   └── InternalError
└── Exception
    ├── RuntimeException (unchecked)
    │   ├── NullPointerException
    │   ├── IllegalArgumentException
    │   ├── IllegalStateException
    │   ├── IndexOutOfBoundsException
    │   ├── ConcurrentModificationException
    │   └── UnsupportedOperationException
    └── Checked Exceptions
        ├── IOException
        │   ├── FileNotFoundException
        │   └── EOFException
        ├── SQLException
        ├── ClassNotFoundException
        └── InterruptedException
```

`Throwable` sits at the top. The JVM only throws subclasses of `Throwable`. The split into `Error`
and `Exception` is the first critical decision point:

- **`Error`**: JVM-level failures. Application code should almost never catch these. If you catch
  `OutOfMemoryError`, you are guessing about JVM state invariants that may no longer hold.
- **`Exception`**: Application-level failures. This is where you design error handling.

Within `Exception`, the `RuntimeException` subclass marks **unchecked** exceptions — the compiler
does not force you to declare or handle them. Everything else is **checked**.

### When to Use Checked vs Unchecked

| Factor               | Checked                                      | Unchecked                                          |
| -------------------- | -------------------------------------------- | -------------------------------------------------- |
| Recovery expected?   | Yes — caller can meaningfully handle it      | No — typically a programming error                 |
| Compiler enforcement | Required `throws` declaration                | No declaration needed                              |
| API surface impact   | Propagates through every caller in the chain | Stops where it stops                               |
| Example              | `IOException`, `SQLException`                | `NullPointerException`, `IllegalArgumentException` |

The pragmatic rule: use checked exceptions for conditions where the caller **reasonably can and
should** take corrective action. Use unchecked exceptions for programming errors and precondition
violations.

This is not a bright line. The Java standard library itself is inconsistent —
`CloneNotSupportedException` is checked but almost never handled meaningfully, while
`IllegalArgumentException` is unchecked despite being a recoverable validation failure.

### Common Exceptions

```java
// Programming errors (unchecked)
throw new NullPointerException("config must not be null");
throw new IllegalArgumentException("port must be positive, got: " + port);
throw new IllegalStateException("connection not initialized");
throw new IndexOutOfBoundsException("index: " + idx + ", size: " + size);
throw new UnsupportedOperationException("TLS 1.3 not available");

// Environmental failures (checked)
throw new FileNotFoundException("/etc/app/config.properties");
throw new IOException("failed to read from socket");
throw new SQLException("constraint violation: duplicate key");
throw new ClassNotFoundException("com.mysql.cj.jdbc.Driver");
```

## try-catch-finally Mechanics

### Basic Structure

```java
InputStream in = null;
try {
    in = new FileInputStream("data.bin");
    int data = in.read();
    // process data
} catch (FileNotFoundException e) {
    System.err.println("file not found: " + e.getMessage());
} catch (IOException e) {
    System.err.println("I/O error: " + e.getMessage());
} finally {
    if (in != null) {
        try {
            in.close();
        } catch (IOException e) {
            // swallowed — this is the pattern that try-with-resources fixes
        }
    }
}
```

The order matters. Catch blocks are evaluated top-to-bottom; the first matching exception type wins.
A subclass catch block placed after its superclass will never execute:

```java
// COMPILER ERROR: unreachable catch block
try {
    riskyOperation();
} catch (Exception e) {
    // catches everything
} catch (IOException e) {
    // DEAD CODE — IOException is a subclass of Exception
}
```

### Multi-catch (Java 7+)

```java
try {
    parseConfig(path);
} catch (FileNotFoundException | NoSuchFileException e) {
    System.err.println("config file missing: " + path);
} catch (AccessDeniedException | SecurityException e) {
    System.err.println("permission denied: " + path);
}
```

The pipe operator lets you handle multiple exception types with identical logic. The variable `e` is
implicitly `final`. The alternatives cannot be related by subtyping — if one exception type is a
subtype of another, it is a compiler error (e.g., `IOException | FileNotFoundException`).

### try-with-resources (Java 7+)

```java
public String readFile(Path path) throws IOException {
    try (BufferedReader reader = Files.newBufferedReader(path)) {
        StringBuilder sb = new StringBuilder();
        String line;
        while ((line = reader.readLine()) != null) {
            sb.append(line).append('\n');
        }
        return sb.toString();
    }
    // reader.close() is called automatically, even on exception or return
}
```

Multiple resources are closed in **reverse declaration order**, just like nested finally blocks:

```java
try (InputStream in = new FileInputStream("data.bin");
     OutputStream out = new FileOutputStream("copy.bin")) {
    in.transferTo(out);
}
// out.close() is called first, then in.close()
```

The resource must implement `AutoCloseable`. Its `close()` method is called even if the try block
throws. If both the try block and `close()` throw, the `close()` exception is attached as a
**suppressed exception** on the primary exception:

```java
public class DebugResource implements AutoCloseable {
    @Override
    public void close() throws Exception {
        throw new RuntimeException("close failed");
    }

    public static void main(String[] args) {
        try (DebugResource r = new DebugResource()) {
            throw new RuntimeException("operation failed");
        } catch (RuntimeException e) {
            System.err.println("primary: " + e.getMessage());
            for (Throwable suppressed : e.getSuppressed()) {
                System.err.println("suppressed: " + suppressed.getMessage());
            }
        }
    }
    // Output:
    // primary: operation failed
    // suppressed: close failed
}
```

### finally Block Semantics and Gotchas

`finally` executes unless the JVM exits (via `System.exit()` or a fatal `Error` that terminates the
thread). An `OutOfMemoryError` does not typically prevent `finally` from running, but a truly fatal
error (e.g., `StackOverflowError` leaving no stack space, or `VirtualMachineError`) can. There are
also subtle traps:

**Gotcha: Return in finally silently discards the try/catch return value**

```java
public static int dangerousReturn() {
    try {
        return computeValue();
    } catch (Exception e) {
        return -1;
    } finally {
        return 0; // ALWAYS wins — the try/catch return is silently discarded
    }
}
```

This compiles without warnings. Static analysis tools like SpotBugs and SonarQube flag this pattern.
Never return from a `finally` block.

**Gotcha: Exception in finally masks the original exception**

```java
try {
    throw new RuntimeException("primary failure");
} finally {
    throw new RuntimeException("finally failure");
    // The primary exception is LOST. Only "finally failure" propagates.
}
```

Use `try-with-resources` or manually add suppressed exceptions:

```java
try {
    throw new RuntimeException("primary failure");
} finally {
    try {
        // cleanup that might fail
    } catch (Exception e) {
        throw new RuntimeException("finally failure", e);
    }
}
```

## Exception Design Patterns

### Creating Custom Exception Hierarchies

Design exception classes that reflect your domain's error taxonomy:

```java
public abstract class AppException extends RuntimeException {
    private final String errorCode;

    protected AppException(String errorCode, String message) {
        super(message);
        this.errorCode = errorCode;
    }

    protected AppException(String errorCode, String message, Throwable cause) {
        super(message, cause);
        this.errorCode = errorCode;
    }

    public String getErrorCode() {
        return errorCode;
    }
}

public class ValidationException extends AppException {
    private final String field;

    public ValidationException(String field, String message) {
        super("VALIDATION_" + field.toUpperCase(), message);
        this.field = field;
    }

    public String getField() {
        return field;
    }
}

public class ResourceNotFoundException extends AppException {
    private final String resourceType;
    private final Object resourceId;

    public ResourceNotFoundException(String resourceType, Object resourceId) {
        super("NOT_FOUND", resourceType + " not found: " + resourceId);
        this.resourceType = resourceType;
        this.resourceId = resourceId;
    }

    public String getResourceType() {
        return resourceType;
    }

    public Object getResourceId() {
        return resourceId;
    }
}
```

Base your hierarchy on a common superclass so callers can catch at the appropriate granularity:

```java
try {
    userService.createUser(request);
} catch (ValidationException e) {
    return Response.badRequest(e.getField(), e.getMessage());
} catch (ResourceNotFoundException e) {
    return Response.notFound(e.getMessage());
} catch (AppException e) {
    return Response.error(e.getErrorCode(), e.getMessage());
}
```

### Exception Chaining (cause)

Always preserve the original cause when wrapping exceptions. The three-argument constructor of
`RuntimeException` and `Exception` accepts a `Throwable cause`:

```java
public List<User> loadUsers(Path file) {
    try {
        return Files.lines(file)
            .map(this::parseUser)
            .collect(Collectors.toList());
    } catch (IOException e) {
        throw new DataLoadingException("failed to load users from: " + file, e);
    }
}

// Stack trace preserves the full chain:
// DataLoadingException: failed to load users from: users.csv
//   at com.example.UserService.loadUsers(UserService.java:42)
// Caused by: java.io.IOException: users.csv: Permission denied
//   at java.base/java.nio.file.Files.lines(Files.java:4210)
//   at com.example.UserService.loadUsers(UserService.java:39)
```

Without the cause chain, the original failure point is invisible. This is one of the most common
mistakes in Java error handling.

### Exception Translation (Layer Abstraction)

Translate exceptions at architectural boundaries to prevent implementation details from leaking:

```java
// Repository layer — infrastructure detail
public class JpaUserRepository implements UserRepository {
    @Override
    public User findById(Long id) {
        try {
            return entityManager.find(User.class, id);
        } catch (PersistenceException e) {
            throw new RepositoryException("failed to find user: " + id, e);
        }
    }
}

// Service layer — business logic boundary
public class UserService {
    public User getUser(Long id) {
        try {
            User user = userRepository.findById(id);
            if (user == null) {
                throw new ResourceNotFoundException("User", id);
            }
            return user;
        } catch (RepositoryException e) {
            throw new ServiceException("unable to retrieve user: " + id, e);
        }
    }
}
```

The rule: each layer should only throw exceptions meaningful to its callers. A service layer caller
should never see `SQLException` or `PersistenceException`.

### Fail-fast vs Fail-safe

**Fail-fast**: Throw immediately when an invariant is violated. Detect problems as early as
possible:

```java
public void setAge(int age) {
    if (age < 0 || age > 150) {
        throw new IllegalArgumentException("age out of range: " + age);
    }
    this.age = age;
}

// Objects.requireNonNull is the standard fail-fast guard
public void setConfig(Config config) {
    this.config = Objects.requireNonNull(config, "config must not be null");
}
```

**Fail-safe**: Attempt to recover gracefully, returning a default or skipping invalid data:

```java
public List<Integer> parseNumbers(List<String> inputs) {
    List<Integer> results = new ArrayList<>();
    for (String input : inputs) {
        try {
            results.add(Integer.parseInt(input));
        } catch (NumberFormatException e) {
            // skip invalid entries instead of failing the entire operation
        }
    }
    return results;
}
```

Default to fail-fast. It produces clearer diagnostics and prevents corrupted state from propagating.
Choose fail-safe only when partial results are meaningful and the cost of failure is high.

## Checked Exceptions Controversy

### Arguments For Checked Exceptions

- **Compiler-enforced documentation**: The method signature tells you what can go wrong without
  reading implementation
- **Handling is mandatory**: Callers cannot accidentally ignore error conditions
- **Appropriate for recoverable conditions**: `IOException`, `SQLException` are conditions a
  well-written program should handle

### Arguments Against Checked Exceptions

- **Signature pollution**: Adding a checked exception to a low-level method forces every caller up
  the chain to declare or handle it
- **Encourages antipatterns**: Developers write `catch (Exception e) {}` or `throws Exception` to
  satisfy the compiler
- **Versioning friction**: Adding a checked exception to an interface method breaks all
  implementations
- **Lambdas friction**: Checked exceptions are painful with functional interfaces

### How Modern Java Reduces the Need

**`Optional` replaces some checked exception use cases:**

```java
// Instead of throwing checked exceptions for "not found"
public Optional<User> findByName(String name) {
    return users.stream()
        .filter(u -> u.getName().equals(name))
        .findFirst();
}

// Caller decides how to handle absence
User user = userService.findByName("Alice")
    .orElseThrow(() -> new ResourceNotFoundException("User", "Alice"));
```

**Result types (not in the JDK, but common in libraries):**

```java
public sealed interface Result<T> {
    record Success<T>(T value) implements Result<T> {}
    record Failure<T>(Throwable error) implements Result<T> {}

    default T getOrThrow() {
        return switch (this) {
            case Success<T> s -> s.value();
            case Failure<T> f -> {
                if (f.error() instanceof RuntimeException re) throw re;
                throw new RuntimeException(f.error());
            }
        };
    }
}
```

### Checked Exceptions in Lambdas

The standard functional interfaces (`Function`, `Supplier`, etc.) do not declare checked exceptions.
Workarounds:

**Utility wrapper:**

```java
@FunctionalInterface
public interface ThrowingSupplier<T> {
    T get() throws Exception;
}

public static <T> Supplier<T> unchecked(ThrowingSupplier<T> supplier) {
    return () -> {
        try {
            return supplier.get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    };
}

// Usage
List<Path> files = stream.map(unchecked(() -> Paths.get(config.getString("path"))))
    .toList();
```

**Lombok's `@SneakyThrows`:**

```java
import lombok.SneakyThrows;

public class FileLoader {
    @SneakyThrows
    public String readContent(Path path) {
        return Files.readString(path);
    }
    // The IOException is thrown without being declared in the signature
    // Bytecode-level: the method does not have a throws clause
    // This bypasses the compiler check — use sparingly and only when
    // the exception truly should not be handled at this level
}
```

`@SneakyThrows` works by generating bytecode that throws the checked exception without declaring it.
The JVM does not enforce checked exceptions — only the compiler does. Use it when wrapping every
call in a try-catch would add noise without safety.

## Performance Implications

### Exception Creation Cost

Creating an exception is expensive because `Throwable` captures the stack trace by calling
`Throwable.fillInStackTrace()`, which walks the stack via `StackTraceElement`:

```java
// Benchmark: exception creation vs simple object creation
// Creating a simple RuntimeException:    ~1-5 microseconds
// Creating with full stack trace:       ~1-5 microseconds  (stack trace is captured eagerly in HotSpot)
// fillInStackTrace() explicitly:        ~1-10 microseconds
// Throwing and catching (no stack trace): ~0.01 microseconds (near-zero)
```

For hot paths, avoid exceptions entirely. Use return codes, `Optional`, or `null` checks:

```java
// Bad: using exceptions for control flow in a hot path
public int parseIntFast(String s) {
    try {
        return Integer.parseInt(s);
    } catch (NumberFormatException e) {
        return -1;
    }
}

// Good: validate first, or use a non-throwing alternative
public int parseIntFast(String s) {
    if (s == null || s.isEmpty()) return -1;
    for (int i = 0; i < s.length(); i++) {
        if (!Character.isDigit(s.charAt(i))) return -1;
    }
    return Integer.parseInt(s);
}
```

### Disabling Stack Traces

If you throw exceptions in a hot path and do not need stack traces:

```java
public class FastException extends RuntimeException {
    public FastException(String message) {
        super(message, null, false, false);
        // super(message, cause, enableSuppression, writableStackTrace)
        // writableStackTrace=false skips fillInStackTrace()
    }
}
```

This avoids the stack walk cost entirely. The exception still propagates normally, but
`getStackTrace()` returns an empty array.

### HotSpot Optimization

HotSpot treats exception paths as "cold" code. Methods that frequently throw exceptions may be
deoptimized or prevented from being compiled by C2. The JIT compiler assumes the fast (non-throwing)
path is the common case. If exceptions are your normal control flow, you are fighting the optimizer.

### When Exceptions Are Appropriate vs Return Codes

| Criterion                        | Exceptions         | Return Codes          |
| -------------------------------- | ------------------ | --------------------- |
| Frequency of failure             | Rare / exceptional | Common / expected     |
| Performance sensitivity          | Low                | High                  |
| Separation of happy/unhappy path | Clean separation   | Mixed in control flow |
| Forced handling                  | Yes (checked)      | No — easily ignored   |
| Composability                    | Breaks lambdas     | Composes cleanly      |

Rule of thumb: if it happens more than once per thousand calls on the hot path, consider a return
code or `Optional`.

## JVM Internals

### Exception Table in Class File Format

The Java class file format includes an exception table for each method. Each entry maps a range of
bytecode instructions to a handler:

```
Exception table:
  from    to  target type
    0     8    16   Class java/io/FileNotFoundException
    0     8    24   Class java/io/IOException
```

This is what `javap -c` shows:

```java
public void readFile() throws IOException;
    Code:
       0: new           #2      // class FileInputStream
       3: dup
       4: ldc           #3      // String data.bin
       6: invokespecial #4      // Method FileInputStream."<init>":(Ljava/lang/String;)V
       9: astore_1
      10: return
      11: astore_2              // store exception reference
      12: aload_2
      13: invokevirtual #5      // Method FileNotFoundException.printStackTrace
      16: return
      17: astore_3              // store exception reference
      18: aload_3
      19: invokevirtual #6      // Method IOException.printStackTrace
      22: return
    Exception table:
       from    to  target type
           0    10    11   Class java/io/FileNotFoundException
           0    10    17   Class java/io/IOException
```

The exception table is a list of `(start_pc, end_pc, handler_pc, catch_type)` tuples. When an
exception is thrown, the JVM scans the exception table of the current method for a matching entry
where `start_pc &lt;= pc &lt; end_pc` and the thrown exception is assignable to `catch_type`. If no
handler is found, the method frame is popped and the search continues in the caller.

### Stack Unwinding Mechanism

When an exception is thrown:

1. The JVM creates a `Throwable` instance (or uses the one being thrown)
2. `fillInStackTrace()` captures the current stack trace (unless disabled)
3. The JVM searches the current method's exception table for a matching handler
4. If no handler is found, the current frame is popped and the process repeats in the calling method
5. This continues up the call stack until a matching handler is found
6. If no handler is found on any frame, the thread's `UncaughtExceptionHandler` is invoked
7. If there is no uncaught handler, the thread terminates and prints the stack trace to stderr

### Suppressed Exceptions

`Throwable.addSuppressed()` allows attaching secondary exceptions that would otherwise be lost. The
primary use case is try-with-resources:

```java
try (Reader r = new ThrowingReader();       // close() throws IOException
     Writer w = new ThrowingWriter()) {      // close() throws IOException
    throw new IllegalStateException("ops");  // try block throws
}
// The IllegalStateException has two suppressed exceptions:
//   [0] IOException from w.close()
//   [1] IOException from r.close()
```

`addSuppressed()` is also available manually:

```java
try {
    operation();
} catch (Exception primary) {
    Exception secondary = cleanup();
    if (secondary != null) {
        primary.addSuppressed(secondary);
    }
    throw primary;
}
```

## Common Pitfalls

### Catching Exception/Throwable Too Broadly

```java
// BAD: catches everything including RuntimeException subclasses
try {
    riskyOperation();
} catch (Exception e) {
    log.error("something went wrong", e);
}

// WORSE: catches Errors too — including OutOfMemoryError
try {
    riskyOperation();
} catch (Throwable t) {
    log.error("something went wrong", t);
}
```

Catching broadly hides bugs. A `NullPointerException` or `ClassCastException` indicates a
programming error that should propagate, not be swallowed. Catch the most specific exception type
possible.

```java
// GOOD: catch only what you can actually handle
try {
    socket = new Socket(host, port);
} catch (UnknownHostException e) {
    throw new ServiceConfigurationException("unknown host: " + host, e);
} catch (IOException e) {
    throw new ServiceUnavailableException("cannot connect to " + host + ":" + port, e);
}
```

### Empty Catch Blocks

```java
// BAD: silently swallowing exceptions
try {
    int value = Integer.parseInt(input);
} catch (NumberFormatException e) {
    // intentionally empty
}

// BAD: only slightly better
try {
    int value = Integer.parseInt(input);
} catch (NumberFormatException e) {
    e.printStackTrace(); // goes to stderr, not your logging system
}
```

At minimum, log the exception with context. If you truly intend to ignore it, comment explaining
why:

```java
try {
    props.load(new FileInputStream(configFile));
} catch (FileNotFoundException e) {
    // expected on first run — defaults will be used
    log.debug("no config file found at {}, using defaults", configFile);
}
```

### Using Exceptions for Control Flow

```java
// BAD: exception as a loop termination condition
public Iterator<String> parseLines(String text) {
    return new Iterator<>() {
        private int pos = 0;

        @Override
        public boolean hasNext() {
            try {
                text.substring(pos, pos + 1);
                return true;
            } catch (StringIndexOutOfBoundsException e) {
                return false;
            }
        }

        @Override
        public String next() {
            // ...
        }
    };
}

// GOOD: use a proper condition
public Iterator<String> parseLines(String text) {
    return new Iterator<>() {
        private int pos = 0;

        @Override
        public boolean hasNext() {
            return pos < text.length();
        }

        @Override
        public String next() {
            // ...
        }
    };
}
```

Exception-driven control flow is slow, obscure, and defeats JIT optimization. It also makes
debugging harder because the stack trace is noise.

### Losing Stack Traces

```java
// BAD: creating a new exception without preserving the cause
try {
    parseConfig(configFile);
} catch (IOException e) {
    throw new ConfigurationException("config load failed");
    // the IOException stack trace is LOST
}

// GOOD: pass the cause
try {
    parseConfig(configFile);
} catch (IOException e) {
    throw new ConfigurationException("config load failed", e);
}

// BAD: logging and rethrowing — stack trace shows the logging line, not the throw line
try {
    parseConfig(configFile);
} catch (IOException e) {
    log.error("config load failed", e);
    throw new ConfigurationException("config load failed");
}

// GOOD: log and rethrow with cause
try {
    parseConfig(configFile);
} catch (IOException e) {
    log.error("config load failed", e);
    throw new ConfigurationException("config load failed", e);
}
```

### Catching and Wrapping Without Adding Context

```java
// BAD: no additional context — the wrapper adds nothing useful
try {
    db.query(sql);
} catch (SQLException e) {
    throw new RuntimeException(e);
}

// GOOD: add the SQL and parameters that caused the failure
try {
    db.query(sql);
} catch (SQLException e) {
    throw new DataAccessException("query failed: " + sql + ", params: " + params, e);
}
```

### Throwing NullPointerException Explicitly

```java
// BAD: manual NPE — inconsistent with JVM-generated NPEs
if (config == null) {
    throw new NullPointerException("config is null");
}

// GOOD: use the standard utility — produces cleaner stack traces
Objects.requireNonNull(config, "config must not be null");

// GOOD (Java 14+): use null checks in the signature
public void process(@NonNull String input) {
    // javac or IDE generates the null check
}
```

`Objects.requireNonNull` is the canonical way to fail-fast on null arguments. It throws
`NullPointerException` with your message and appears as a single frame in the stack trace, making it
clear where the null check failed.

### InterruptedException Swallowing

```java
// BAD: interrupt flag is cleared, thread may never stop
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    log.warn("sleep interrupted");
}

// GOOD: restore the interrupt status
try {
    Thread.sleep(1000);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
    log.warn("sleep interrupted");
}

// GOOD: propagate as a checked or unchecked exception
try {
    blockingQueue.put(element);
} catch (InterruptedException e) {
    Thread.currentThread().interrupt();
    throw new OperationCancelledException("put cancelled", e);
}
```

When `InterruptedException` is caught, the thread's interrupt flag is **automatically cleared**. If
you do not restore it (via `Thread.currentThread().interrupt()`), the interruption is lost and
cooperative cancellation in the caller breaks.
