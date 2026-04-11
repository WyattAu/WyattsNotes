---
title: Annotations and Reflection
date: 2026-04-04T00:00:00.000Z
tags:
  - Java
categories:
  - Java
slug: annotations-reflection
---

## Built-in Annotations

### @Override

`@Override` (JDK 5) marks a method as intending to override a method from a superclass or implement
a method from an interface. The compiler verifies the declaration actually overrides something:

```java
public class Dog {
    @Override
    public String toString() { // compiles — Object.toString() exists
        return "Dog";
    }

    @Override
    public boolean equals(Dog other) { // compile error — does not override Object.equals(Object)
        return false;
    }
}
```

On interfaces (JDK 6+), `@Override` on a method declaration indicates the method is intended to
implement a method from a super-interface:

```java
public interface Animal {
    void speak();
}

public interface LoudAnimal extends Animal {
    @Override
    void speak(); // valid — overrides Animal.speak()
}
```

Always use `@Override` on every overriding method. It catches typos and signature mismatches at
compile time.

### @Deprecated

`@Deprecated` (JDK 5) marks a program element as obsolete. The compiler emits a warning when
deprecated elements are used or overridden:

```java
public class LegacyService {
    @Deprecated(since = "3.0", forRemoval = true)
    public void oldMethod() {
        // do not use — will be removed in a future release
    }

    @Deprecated(since = "3.0", forRemoval = false)
    public void deprecatedMethod() {
        // still works, but prefer newMethod()
    }
}
```

Parameters (all optional, added in JDK 9):

- `since`: version since which the element has been deprecated
- `forRemoval`: whether the element is intended for removal in a future version

`@SuppressWarnings("deprecation")` suppresses the warning at a usage site.

### @SuppressWarnings

`@SuppressWarnings` (JDK 5) suppresses compiler warnings at the declaration level. Common keys:

| Key             | Suppresses                                           |
| --------------- | ---------------------------------------------------- |
| `"unchecked"`   | Unchecked casts and raw type usage                   |
| `"deprecation"` | Use of deprecated APIs                               |
| `"rawtypes"`    | Raw type usage (subset of unchecked)                 |
| `"unused"`      | Unused variables, methods, parameters                |
| `"serial"`      | Missing `serialVersionUID` in Serializable classes   |
| `"varargs"`     | Heap pollution from varargs with non-reifiable types |

Apply at the narrowest scope possible:

```java
public class Config {
    @SuppressWarnings("unchecked")
    public <T> T getSetting(String key, Class<T> type) {
        Object value = rawMap.get(key);
        return type.cast(value);
    }
}
```

### @FunctionalInterface

`@FunctionalInterface` (JDK 8) marks an interface as intended to be a functional interface (SAM type
— single abstract method). The compiler enforces that the interface has exactly one abstract method:

```java
@FunctionalInterface
public interface Predicate<T> {
    boolean test(T t);

    // default methods don't count
    default Predicate<T> and(Predicate<? super T> other) {
        return t -> test(t) && other.test(t);
    }

    // static methods don't count
    static <T> Predicate<T> isEqual(Object targetRef) {
        return (null == targetRef)
                ? Objects::isNull
                : object -> targetRef.equals(object);
    }
}
```

```java
@FunctionalInterface
public interface Broken {
    void run();
    void stop(); // compile error — multiple abstract methods
}
```

The annotation is optional (any interface with one abstract method is a functional interface), but
it makes intent explicit and catches accidental additions.

### Other Built-in Annotations

- `@SafeVarargs` (JDK 7) — suppresses heap pollution warnings on varargs methods/constructors. Must
  be on `final`, `static`, or `private` methods (or constructors). Applying it on non-final instance
  methods is a compile error (JDK 9+).
- `@Native` (JDK 8) — marks a `static final` field as a constant that may be referenced from native
  code. The field must be initialized to a compile-time constant.
- `@Repeatable` (JDK 8) — covered in [Meta-Annotations](#meta-annotations).

## Meta-Annotations

Meta-annotations are annotations that apply to other annotation declarations. They control how
custom annotations behave.

### @Retention

`@Retention` (JDK 5) specifies how long an annotation is retained. Takes a `RetentionPolicy` enum
value:

| Policy    | Retained through                                               |
| --------- | -------------------------------------------------------------- |
| `SOURCE`  | Discarded by the compiler (not in `.class` files)              |
| `CLASS`   | Retained in `.class` files but not loaded at runtime (default) |
| `RUNTIME` | Available at runtime via reflection                            |

```java
@Retention(RetentionPolicy.SOURCE)
public @interface Inline { }

@Retention(RetentionPolicy.CLASS)
public @interface Optimizable { } // not readable at runtime

@Retention(RetentionPolicy.RUNTIME)
public @interface Column { String name(); } // readable via reflection
```

If you need to read annotations at runtime (for framework processing, serialization config, etc.),
use `RUNTIME`. If annotations are purely for compile-time checking (lint rules, code generation),
`SOURCE` is appropriate. `CLASS` is rarely used directly — it exists for tools that process class
files without loading them into the JVM.

### @Target

`@Target` (JDK 5) specifies which program elements an annotation can be applied to. Takes
`ElementType` enum values (combinable with OR):

| ElementType                 | Applies to                                         |
| --------------------------- | -------------------------------------------------- |
| `TYPE`                      | Classes, interfaces, enums, records                |
| `FIELD`                     | Fields (including enum constants)                  |
| `METHOD`                    | Methods                                            |
| `PARAMETER`                 | Method/constructor parameters                      |
| `CONSTRUCTOR`               | Constructors                                       |
| `LOCAL_VARIABLE`            | Local variables                                    |
| `ANNOTATION_TYPE`           | Annotation declarations                            |
| `PACKAGE`                   | Package declarations (in `package-info.java`)      |
| `TYPE_PARAMETER` (JDK 8)    | Type parameter declarations                        |
| `TYPE_USE` (JDK 8)          | Any type use (generics, casts, implements, throws) |
| `MODULE` (JDK 9)            | Module declarations                                |
| `RECORD_COMPONENT` (JDK 16) | Record components                                  |

```java
@Target({ElementType.FIELD, ElementType.PARAMETER})
@Retention(RetentionPolicy.RUNTIME)
public @interface NotNull { }
```

`TYPE_USE` is powerful — it lets you annotate any use of a type:

```java
List<@NotNull String> names;
Map<@NotNull String, @Nullable Integer> data;
void process(@NotNull String input) throws @NotNull IOException;
```

### @Inherited

`@Inherited` (JDK 5) causes an annotation to be inherited by subclasses. Only applies to class
declarations:

```java
@Inherited
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.TYPE)
public @interface Audit { }

@Audit
public class BaseService { }

public class UserService extends BaseService { }
// UserService inherits @Audit from BaseService
```

Limitations:

- Only works for class-level annotations, not methods or fields.
- Only applies to direct inheritance — interfaces implementing other interfaces do not inherit
  annotations.
- A subclass annotation overrides the inherited one.

### @Repeatable

`@Repeatable` (JDK 8) allows the same annotation to be applied multiple times to the same element.
Requires a **container annotation**:

```java
@Repeatable(Schedules.class)
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Schedule {
    String cron();
    String zone() default "UTC";
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Schedules {
    Schedule[] value();
}
```

Usage:

```java
@Schedule(cron = "0 0 8 * * ?", zone = "America/New_York")
@Schedule(cron = "0 0 20 * * ?", zone = "Asia/Tokyo")
public void runDailyReport() { }
```

At runtime, the container annotation is what reflection sees by default. Use
`AnnotatedElement.getAnnotationsByType()` to get individual repeatable annotations regardless of
whether they are stored individually or in a container:

```java
Schedule[] schedules = MyClass.class.getMethod("runDailyReport")
        .getAnnotationsByType(Schedule.class);
```

## Custom Annotation Definition

### Defining an Annotation Type

An annotation type is declared with `@interface`. Methods define the annotation's elements (the
attributes you set when using the annotation). Methods have no parameters, no throws clauses, and
return a limited set of types:

```java
import java.lang.annotation.*;

@Retention(RetentionPolicy.RUNTIME)
@Target({ElementType.TYPE, ElementType.METHOD})
public @interface Config {
    String name();
    int priority() default 0;
    String[] tags() default {};
    Class<?> handler() default Void.class;
}
```

Allowed return types for annotation elements:

- All primitives (`int`, `long`, `boolean`, etc.)
- `String`
- `Class<?>` (or `Class<? extends SomeType>`)
- Enums
- Annotations
- Arrays of any of the above

### Using the Annotation

```java
@Config(name = "payment-service", priority = 1, tags = {"critical", "financial"})
public class PaymentService {

    @Config(name = "processPayment", tags = "core")
    public void processPayment(Order order) { }
}
```

Default values can be omitted. Single-element annotations commonly use `value()`:

```java
@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
public @interface Log {
    String value();
    Level level() default Level.INFO;
}

// Usage — 'value' allows shorthand
@Log("processing order")
@Log(value = "processing order", level = Level.DEBUG)
public void process(Order order) { }
```

### Annotation Processing at Compile Time

The **Annotation Processing API** (`javax.annotation.processing`) runs during compilation. Build
tools like Lombok, MapStruct, and AutoValue use this. Register the processor in
`META-INF/services/javax.annotation.processing.Processor`. Most projects use existing processors
rather than writing their own.

### Runtime Annotation Processing

Reading annotations at runtime with reflection:

```java
Config classConfig = PaymentService.class.getAnnotation(Config.class);
System.out.println(classConfig.name()); // "payment-service"

for (Method method : PaymentService.class.getDeclaredMethods()) {
    if (method.isAnnotationPresent(Config.class)) {
        Config config = method.getAnnotation(Config.class);
        System.out.println(method.getName() + ": " + config.name());
    }
}
```

## Reflection API

### Class Objects

`java.lang.Class<T>` is the entry point for reflection. Every type has a corresponding `Class`
instance:

```java
// Getting a Class object
Class<String> c1 = String.class;
Class<?> c2 = Class.forName("java.lang.String");
Class<?> c3 = "hello".getClass();
Class<?> c4 = String[].class;
Class<?> c5 = int.class;
Class<?> c6 = int[].class;
Class<?> c7 = void.class;
```

Key methods on `Class`:

```java
Class<?> clazz = MyClass.class;

String name = clazz.getName();              // fully qualified name
String simpleName = clazz.getSimpleName();  // simple name
Package pkg = clazz.getPackage();           // package info
Class<?> superclass = clazz.getSuperclass();
Class<?>[] interfaces = clazz.getInterfaces();
int modifiers = clazz.getModifiers();       // Modifier flags
boolean isInterface = clazz.isInterface();
boolean isArray = clazz.isArray();
boolean isPrimitive = clazz.isPrimitive();
boolean isEnum = clazz.isEnum();
boolean isAnnotation = clazz.isAnnotation();
boolean isRecord = clazz.isRecord();        // JDK 16+
Class<?> componentType = clazz.getComponentType(); // for arrays
```

### Field Introspection

```java
Field nameField = Person.class.getDeclaredField("name");
nameField.setAccessible(true);
String name = (String) nameField.get(person); // read
nameField.set(person, "Bob");                  // write

Class<?> type = nameField.getType();
boolean isFinal = Modifier.isFinal(nameField.getModifiers());
```

### Method Introspection

```java
Method substring = String.class.getMethod("substring", int.class, int.class);
String result = (String) substring.invoke("hello world", 0, 5);
Class<?> returnType = substring.getReturnType();
Class<?>[] paramTypes = substring.getParameterTypes();
```

### Constructor Introspection

```java
Constructor<ArrayList> noArgCtor = ArrayList.class.getConstructor();
ArrayList<String> list = noArgCtor.newInstance();
```

### Array and Primitive Reflection

```java
// Array operations
int[] arr = (int[]) Array.newInstance(int.class, 10);
Array.setInt(arr, 0, 42);
int value = Array.getInt(arr, 0);
int length = Array.getLength(arr);

// Primitive wrapper classes
Class<Integer> intClass = int.class;    // primitive
Class<Integer> intWrapper = Integer.class; // wrapper
intClass != intWrapper;                  // true — different Class objects
```

## Runtime Type Introspection Patterns

### Generic Type Resolution

While generic type parameters are erased, you can recover them from field declarations, method
return types, and class hierarchies using `java.lang.reflect.Type`:

```java
import java.lang.reflect.*;
import java.util.*;

public class TypeInspector {

    public static void inspectFields(Class<?> clazz) {
        for (Field field : clazz.getDeclaredFields()) {
            Type genericType = field.getGenericType();
            System.out.println(field.getName() + ": " + genericType.getTypeName());

            if (genericType instanceof ParameterizedType pt) {
                Type rawType = pt.getRawType();
                Type[] typeArgs = pt.getActualTypeArguments();
                for (Type arg : typeArgs) {
                    System.out.println("  arg: " + arg.getTypeName());
                }
            }
        }
    }
}

// For a class with: Map<String, List<Integer>> data;
// inspectFields prints:
// data: java.util.Map<java.lang.String, java.util.List<java.lang.Integer>>
//   arg: java.lang.String
//   arg: java.util.List<java.lang.Integer>
```

### Annotation-Driven Dispatch

A common pattern in frameworks: scan for annotations and build dispatch tables at startup:

```java
public class CommandDispatcher {
    private final Map<String, Method> handlers = new HashMap<>();

    public CommandDispatcher(Object target) {
        for (Method method : target.getClass().getDeclaredMethods()) {
            Command annotation = method.getAnnotation(Command.class);
            if (annotation != null) {
                method.setAccessible(true);
                handlers.put(annotation.value(), method);
            }
        }
    }

    public Object dispatch(String command, Object... args) throws Exception {
        Method handler = handlers.get(command);
        if (handler == null) {
            throw new IllegalArgumentException("Unknown command: " + command);
        }
        return handler.invoke(null, args);
    }
}

@Retention(RetentionPolicy.RUNTIME)
@Target(ElementType.METHOD)
@interface Command {
    String value();
}
```

### Bean Property Introspection

`java.beans.Introspector` (standard library since JDK 1.1) extracts JavaBean properties from a class
based on getter/setter conventions:

```java
import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;

public class BeanUtils {

    public static Map<String, Object> toMap(Object bean) throws Exception {
        Map<String, Object> map = new LinkedHashMap<>();
        BeanInfo info = Introspector.getBeanInfo(bean.getClass(), Object.class);
        for (PropertyDescriptor pd : info.getPropertyDescriptors()) {
            Method reader = pd.getReadMethod();
            if (reader != null) {
                map.put(pd.getName(), reader.invoke(bean));
            }
        }
        return map;
    }
}
```

### Classpath Scanning

Reflection enables runtime classpath scanning (used by Spring, Jersey, etc.) by reading JAR entries
or directory listings. Real implementations must handle JAR files, modules, and edge cases.
Libraries like Reflections or Spring's `ClassPathScanningCandidateComponentProvider` handle these
complexities.

## Dynamic Proxy

### JDK Dynamic Proxy

`java.lang.reflect.Proxy` (JDK 1.3) creates proxy instances for interfaces at runtime. The proxy
dispatches all method calls to an `InvocationHandler`:

```java
import java.lang.reflect.InvocationHandler;
import java.lang.reflect.Method;
import java.lang.reflect.Proxy;

public interface UserService {
    String getUserName(long id);
    void saveUser(String name);
}

public class LoggingInvocationHandler implements InvocationHandler {
    private final Object target;

    public LoggingInvocationHandler(Object target) {
        this.target = target;
    }

    @Override
    public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {
        System.out.println(">> " + method.getName() + " called");
        long start = System.nanoTime();
        try {
            Object result = method.invoke(target, args);
            System.out.println("<< " + method.getName()
                    + " returned in " + (System.nanoTime() - start) + "ns");
            return result;
        } catch (Exception e) {
            System.out.println("<< " + method.getName() + " threw " + e.getCause());
            throw e.getCause();
        }
    }
}
```

Creating and using a proxy:

```java
UserService realService = new UserServiceImpl();
UserService proxy = (UserService) Proxy.newProxyInstance(
        UserService.class.getClassLoader(),
        new Class<?>[] { UserService.class },
        new LoggingInvocationHandler(realService)
);

proxy.getUserName(42);
// >> getUserName called
// << getUserName returned in 1523ns
```

Limitations:

- Only works with **interfaces**, not concrete classes. For class-based proxying, use CGLIB or
  ByteBuddy.
- `equals`, `hashCode`, and `toString` are also dispatched to the handler (default implementations
  in `Proxy`).
- The proxy object is an instance of `java.lang.reflect.Proxy` and all specified interfaces.

### Common Proxy Use Cases

AOP (Spring AOP, transaction management), RPC stubs, Hibernate lazy loading, Mockito/EasyMock test
doubles, and access control (permission checks before method execution).

### Proxy Class Caching

JDK proxies cache generated proxy classes (named `$Proxy0`, `$Proxy1`, etc.). Set
`sun.misc.ProxyGenerator.saveGeneratedFiles=true` to write generated proxy class files to disk for
debugging.

## MethodHandle and VarHandle

### MethodHandle (JDK 7)

`java.lang.invoke.MethodHandle` is a typed, directly executable reference to a method, field, or
constructor. It is the low-level mechanism that the JVM uses internally for `invokedynamic`.

```java
import java.lang.invoke.MethodHandle;
import java.lang.invoke.MethodHandles;
import java.lang.invoke.MethodType;

public class MethodHandleExample {

    public static String greet(String name) {
        return "Hello, " + name;
    }

    public static void main(String[] args) throws Throwable {
        MethodHandles.Lookup lookup = MethodHandles.lookup();

        MethodHandle greet = lookup.findStatic(
                MethodHandleExample.class,
                "greet",
                MethodType.methodType(String.class, String.class)
        );

        String result = (String) greet.invokeExact("World");
        System.out.println(result); // "Hello, World"

        String result2 = (String) greet.invoke("World");
        System.out.println(result2); // "Hello, World"
    }
}
```

`invokeExact` requires the exact argument types (no implicit conversions) and the return type must
match exactly. `invoke` allows implicit conversions as defined by the JVM's method handle adapters.

### MethodHandle vs Reflection

| Aspect         | MethodHandle                      | Reflection (Method)         |
| -------------- | --------------------------------- | --------------------------- |
| Performance    | Can be JIT-optimized,接近直接调用 | Slower, no JIT optimization |
| Access control | Checked at creation time          | Checked at every invocation |
| Type safety    | Enforced at invoke time           | Weaker                      |
| Flexibility    | Adapters for currying, binding    | No built-in adapters        |
| Learning curve | Steeper                           | Simpler API                 |

For performance-critical code, `MethodHandle` is preferred over `Method.invoke()`. The JIT can
inline method handles in many cases, especially after warmup.

### MethodHandle Adapters

```java
MethodHandles.Lookup lookup = MethodHandles.lookup();
MethodHandle greeter = lookup.findStatic(
        MethodHandleExample.class, "greet",
        MethodType.methodType(String.class, String.class));

MethodHandle helloGreeter = greeter.bindTo("World");
String result = (String) helloGreeter.invokeExact(); // "Hello, World"

MethodHandle insertArg = MethodHandles.insertArguments(greeter, 0, "World");
result = (String) insertArg.invokeExact(); // "Hello, World"

MethodHandle asVoid = MethodHandles.dropReturn(greeter);

MethodHandle filter = MethodHandles.filterArguments(greeter, 0,
        lookup.findStatic(String.class, "toUpperCase",
                MethodType.methodType(String.class, String.class)));
result = (String) filter.invokeExact("world"); // "Hello, WORLD"

MethodHandle constant = MethodHandles.constant(String.class, "42");
result = (String) constant.invokeExact(); // "42"
```

### VarHandle (JDK 9)

`java.lang.invoke.VarHandle` provides fine-grained access to fields and array elements with
volatile/atomic semantics. It replaces `sun.misc.Unsafe` field access operations:

```java
import java.lang.invoke.MethodHandles;
import java.lang.invoke.VarHandle;

public class AtomicCounter {
    private volatile long value;

    private static final VarHandle VH;

    static {
        try {
            VH = MethodHandles.lookup()
                    .findVarHandle(AtomicCounter.class, "value", long.class);
        } catch (ReflectiveOperationException e) {
            throw new ExceptionInInitializerError(e);
        }
    }

    public long increment() {
        return VH.getAndAdd(this, 1L);
    }

    public long get() {
        return (long) VH.getVolatile(this);
    }

    public void set(long newValue) {
        VH.setVolatile(this, newValue);
    }

    public boolean compareAndSet(long expected, long newValue) {
        return VH.compareAndSet(this, expected, newValue);
    }
}
```

VarHandle modes:

| Method                        | Memory semantics                      |
| ----------------------------- | ------------------------------------- |
| `get` / `set`                 | Plain (no ordering guarantees)        |
| `getVolatile` / `setVolatile` | Volatile read/write                   |
| `getAcquire` / `setRelease`   | Acquire/release semantics             |
| `getOpaque` / `setOpaque`     | Opaque (no reordering, no visibility) |
| `compareAndSet`               | Atomic CAS                            |
| `getAndAdd`, `getAndSet`      | Atomic RMW                            |

Array VarHandles:

```java
VarHandle arrayVH = MethodHandles.arrayElementVarHandle(int[].class);
int[] arr = {1, 2, 3};
arrayVH.set(arr, 1, 42);                  // arr[1] = 42
int val = (int) arrayVH.getVolatile(arr, 1); // volatile read
```

### Invokedynamic (JDK 7)

`invokedynamic` is a JVM bytecode instruction that defers method linkage to runtime. Foundation for
lambda expressions (JDK 8), dynamic languages (Groovy, JRuby), and string concatenation (JDK 9+).
You rarely use it directly unless building a language runtime — the JVM links the call site through
a `CallSite` object and a bootstrap method.

## Performance Implications of Reflection

### Reflection vs Direct Access

Reflection is significantly slower than direct method calls, especially before JIT warmup. The
overhead comes from:

1. **Permission checks**: Security manager checks (if enabled)
2. **Method resolution**: Looking up the method in the class's method table
3. **Argument boxing/unboxing**: For primitive parameters
4. **No inlining**: The JIT generally cannot inline reflective calls

Benchmark (approximate, HotSpot, after warmup):

```
Direct call:            ~2 ns
MethodHandle.invoke:    ~5-10 ns
Method.invoke:          ~20-50 ns
MethodHandle.invokeExact (warmed up): ~2-5 ns
```

These numbers vary significantly with JVM version, flags, and workload. Always benchmark for your
specific case.

### Mitigating Reflection Overhead

**Cache `Method` objects** — look up once, reuse. Avoid `getMethod()` inside loops.

**Use `MethodHandle` instead of `Method.invoke()`** — JIT can optimize `invokeExact` call sites.

**Code generation** (ByteBuddy, CGLIB, ASM) eliminates reflection entirely by generating bytecode at
runtime. This is what Hibernate, Spring, and Mockito do for performance-critical paths.

### Reflection and JIT Optimization

The JIT compiler cannot optimize through reflection boundaries — a reflective call site is an opaque
barrier. The called method is not inlined, escape analysis doesn't work across it, and loop
optimizations cannot see through reflective dispatch. `MethodHandle.invokeExact` is an exception:
the JIT can sometimes inline through it because the type is known at the call site.

## Common Pitfalls

### Security Manager and Access Control

`setAccessible(true)` bypasses Java's access control. In security-managed environments (JDK 16+ with
strong encapsulation), this throws `InaccessibleObjectException` for module-internal classes:

```
java --add-opens java.base/java.lang=ALL-UNNAMED MyApp
```

Avoid relying on `setAccessible(true)` for JDK-internal classes. The correct approach is to use
public APIs.

### IllegalAccessException on Private Members

Attempting to access private members without `setAccessible(true)` throws `IllegalAccessException`:

```java
Field field = clazz.getDeclaredField("secret");
field.setAccessible(true); // required for private fields
field.get(obj); // OK
```

### Performance Degradation

Reflection in hot paths causes measurable performance degradation. Common mistake: putting
reflection inside a loop that processes millions of items:

```java
// BAD
for (Object item : items) {
    Method getter = item.getClass().getMethod("getValue");
    Object value = getter.invoke(item); // reflection on every iteration
}

// GOOD — cache the method handle outside the loop
MethodHandle getter = MethodHandles.lookup()
        .findVirtual(item.getClass(), "getValue", MethodType.methodType(Object.class));
for (Object item : items) {
    Object value = getter.invoke(item); // much faster after warmup
}
```

### Caching Reflection Results with Wrong Keys

Method lookups are parameter-sensitive. `getMethod("foo", String.class)` and
`getMethod("foo", Object.class)` return different methods. Always include parameter types in your
cache key:

```java
String key = "foo:" + Arrays.toString(paramTypes); // CORRECT
```

### Reflective Access to Generics

After type erasure, you cannot cast to a generic type through reflection without unchecked warnings:

```java
Field field = clazz.getDeclaredField("list");
field.setAccessible(true);
// This is an unchecked cast — the actual runtime type is List (raw)
List<String> list = (List<String>) field.get(obj);
```

The cast succeeds at runtime because erasure reduces it to `(List)`. If the field actually contains
a `List<Integer>`, you get a `ClassCastException` later when accessing elements, not at the cast
site.

### Primitive Type Handling

`Method.invoke()` boxes primitives automatically, which costs in tight loops. Use `Field.setInt()` /
`Field.getInt()` for primitive fields. `Method.invoke` always boxes — consider `MethodHandle` for
performance-critical paths.

### Overloaded Methods and Ambiguity

`Class.getMethod()` requires exact parameter types. For overloaded methods, specify the correct
parameter types:

```java
Method m1 = clazz.getMethod("process", String.class);
Method m2 = clazz.getMethod("process", int.class);
// clazz.getMethod("process"); // throws NoSuchMethodException
```

### Proxy Equals and hashCode

JDK dynamic proxies delegate `equals`, `hashCode`, and `toString` to the `InvocationHandler`. Always
handle these methods in your handler if proxy identity semantics matter:

```java
InvocationHandler handler = (proxy, method, args) -> {
    if (method.getName().equals("toString")) return "Proxy[" + target + "]";
    return method.invoke(target, args);
};
```

### Module System Restrictions (JDK 9+)

The module system restricts reflective access to non-exported packages, affecting deep reflection
into JDK internals (e.g., `sun.misc.Unsafe`) and frameworks that access private members of library
classes. The long-term fix is to use public APIs instead of reaching into internals via reflection.
