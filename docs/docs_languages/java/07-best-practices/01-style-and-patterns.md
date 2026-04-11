---
title: Style and Patterns
date: 2025-06-05T16:00:00.000Z
tags: ['java']
categories: ['java']
slug: style-and-patterns
sidebar_position: 1
---

## Naming Conventions

Naming is the single most visible signal of code quality. Java naming conventions are codified in
the JLS and further elaborated in the Java Language Style Guide. These are not aesthetic
preferences; they carry semantic weight that the compiler, runtime, and human readers all depend on.

### Packages

Package names are all lowercase, with components separated by dots. No underscores, no mixed case.
The reverse domain name convention (`com.example.project`) remains the standard, though many
open-source projects use shorter forms (`org.apache.commons`, `io.netty`).

```java
package com.example.project.domain;       // domain layer
package com.example.project.application;  // application services
package com.example.project.infrastructure.persistence; // infrastructure
```

The JLS permits any valid identifier as a package component, but convention restricts this further:
components should be nouns or very short adjectives, never verbs. A package named
`com.example.utils` is common but imprecise; `com.example.concurrent` or `com.example.text` is
preferable because it describes the _domain_ of the types within.

### Classes and Interfaces

Classes use **PascalCase** (also called UpperCamelCase). Interface names follow the same convention.
There is no universal suffix convention for interfaces; some codebases use a trailing `I`
(`IUserService`), but this is not standard Java practice and is actively discouraged by the Google
Java Style Guide. Prefer descriptive names:

```java
public class HttpRequest { }
public interface UserRepository { }
public abstract class AbstractShape { }
public class RuntimeException extends Exception { }
```

Abstract classes sometimes carry the `Abstract` prefix, and exception classes carry the `Exception`
suffix. Utility classes (classes with only static methods) should be named for what they _provide_,
not that they are utilities: `Collections`, not `CollectionUtils`.

### Methods

Methods use **camelCase** (lowerCamelCase). Method names should be verbs or verb phrases because
methods represent actions:

```java
public void sendMessage(Message message) { }
public Optional<User> findById(Long id) { }
public boolean isAuthenticated() { }
public static <T> List<T> unmodifiableList(List<? extends T> list) { }
```

Boolean-returning methods conventionally begin with `is`, `has`, `can`, `should`, or `will`.
Accessors for non-boolean fields use the `get` prefix; mutators use `set`. These conventions are
required for JavaBeans property introspection and are relied upon by frameworks like Spring,
Jackson, and JPA.

### Constants

Constants are `static final` fields whose value is an immutable object or primitive. They use
**SCREAMING_SNAKE_CASE** with words separated by underscores:

```java
public static final int MAX_RETRY_ATTEMPTS = 3;
public static final String DEFAULT_CHARSET = "UTF-8";
public static final Set<String> SUPPORTED_ALGORITHMS = Set.of("AES", "RSA");
```

A `static final` reference to a mutable object (such as a `HashMap`) is not truly constant, because
the object's state can change. In such cases, the field should either be private with no mutating
accessors, or the object itself should be wrapped in an unmodifiable view.

### Type Parameters

Type parameters use a single uppercase letter. The standard letters carry domain-specific meaning:

| Letter   | Meaning             | Example                        |
| -------- | ------------------- | ------------------------------ |
| `T`      | Type                | `Box<T>`                       |
| `E`      | Element             | `List<E>`                      |
| `K`      | Key                 | `Map<K, V>`                    |
| `V`      | Value               | `Map<K, V>`                    |
| `S`, `U` | Second, third types | `Pair<S, U>`                   |
| `R`      | Return type         | `Function<T, R>`               |
| `N`      | Number              | `Calculator<N extends Number>` |

When a single letter is insufficient, use a descriptive name prefixed with `T`:

```java
public class Repository<TEntity, TId> { }
```

### Local Variables and Parameters

Local variables and parameters use camelCase. Descriptive names are always preferable to
abbreviations, with a small set of universally understood exceptions:

```java
// Good
int index;
String productName;
long elapsedTimeMs;

// Acceptable abbreviations
int id;         // universally understood
String url;     // universally understood
String html;    // universally understood

// Bad
int cnt;        // ambiguous
String pName;   // unclear
long t;         // meaningless
```

:::info
JLS Reference
[JLS §6.1](https://docs.oracle.com/javase/specs/jls/se21/html/jls-6.html#jls-6.1) defines the rules
for declaring names.
[JLS §3.8](https://docs.oracle.com/javase/specs/jls/se21/html/jls-3.html#jls-3.8) defines what
constitutes a valid identifier. Unicode characters are permitted, but ASCII identifiers are the de
facto standard.
:::

## Code Organization

### Package Structure

There are two dominant approaches to organizing packages in Java applications: **layer-first** (also
called technical packaging) and **feature-first** (also called domain packaging).

Layer-first organization groups classes by their technical role:

```
com.example.project/
    controller/
    service/
    repository/
    model/
    config/
```

Feature-first organization groups classes by the business domain they serve:

```
com.example.project/
    user/
        UserController.java
        UserService.java
        UserRepository.java
        User.java
    order/
        OrderController.java
        OrderService.java
        OrderRepository.java
        Order.java
```

Feature-first packaging has a significant advantage for projects of any non-trivial size: it
localizes changes. When a requirement changes for the "user" domain, all the files you need to
modify are in a single package. In layer-first packaging, a change to `User` might require edits
across `controller/`, `service/`, `repository/`, and `model/` -- four separate directories that are
far apart in the tree.

:::tip
Recommendation Use feature-first packaging for any project with more than two bounded
contexts. For small projects or libraries, layer-first packaging remains acceptable.
:::

### Class Structure

The conventional ordering of members within a class, as recommended by the Google Java Style Guide:

1. Static fields
2. Static initializer blocks
3. Instance fields
4. Instance initializer blocks
5. Constructors
6. Static methods
7. Instance methods
8. Nested classes

Within each group, accessibility should decrease: `public` before `protected` before package-private
before `private`. This ordering places the most important, most-stable declarations at the top of
the file.

### One Top-Level Class Per File

The Java Language Specification requires that a public top-level class have the same name as the
file it resides in, and that only one public top-level class exist per compilation unit.
Package-private top-level classes can coexist in the same file, but this is widely considered poor
practice because it makes the types harder to discover.

## Build Tools

### Maven vs Gradle

Maven and Gradle are the two dominant build tools in the Java ecosystem. Both manage dependencies,
compile code, run tests, and package artifacts, but they differ fundamentally in their approach.

#### Maven: Convention Over Configuration

Maven uses a declarative XML-based build lifecycle. A Maven project has a rigidly defined directory
structure and a fixed set of lifecycle phases (`compile`, `test`, `package`, `install`, `deploy`).
The `pom.xml` declares what the project is and what it depends on; the _how_ is handled by plugins
bound to lifecycle phases.

```xml
<project xmlns="http://maven.apache.org/POM/4.0.0"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0
         http://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>

    <groupId>com.example</groupId>
    <artifactId>my-project</artifactId>
    <version>1.0.0</version>
    <packaging>jar</packaging>

    <properties>
        <maven.compiler.source>21</maven.compiler.source>
        <maven.compiler.target>21</maven.compiler.target>
        <project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
    </properties>

    <dependencies>
        <dependency>
            <groupId>org.junit.jupiter</groupId>
            <artifactId>junit-jupiter</artifactId>
            <version>5.10.2</version>
            <scope>test</scope>
        </dependency>
    </dependencies>
</project>
```

Maven's rigidity is its strength and its weakness. New developers can understand any Maven project
instantly because the structure is always the same. But complex build logic requires either verbose
plugin configurations or jumping to external files (Groovy, Ant) which breaks the declarative model.

#### Gradle: Flexible and Performant

Gradle uses a Groovy or Kotlin DSL to define builds as executable code rather than declarative
configuration. It supports incremental builds, build caching, and a configuration avoidance API that
significantly reduces build times for large projects.

```kotlin
plugins {
    java
    application
}

group = "com.example"
version = "1.0.0"

java {
    toolchain {
        languageVersion = JavaLanguageVersion.of(21)
    }
}

repositories {
    mavenCentral()
}

dependencies {
    testImplementation(libs.junit.jupiter)
    testRuntimeOnly(libs.junit.platform.launcher)
}

tasks.test {
    useJUnitPlatform()
}
```

:::tip
Recommendation Use Gradle with the Kotlin DSL for new projects. Gradle's build cache,
incremental compilation, and configuration avoidance yield measurable performance improvements, and
the Kotlin DSL provides type safety and IDE autocompletion. Use Maven when integrating with legacy
enterprise infrastructure that requires it, or when team familiarity makes the trade-off clear.
:::

### Dependency Management

#### Dependency Scopes

Both Maven and Gradle categorize dependencies by scope, controlling when a dependency is available
on the classpath:

| Scope                | Available During  | Packaged Into | Purpose                        |
| -------------------- | ----------------- | ------------- | ------------------------------ |
| `compile` / `api`    | compile + runtime | yes           | Required at all phases         |
| `runtimeOnly`        | runtime only      | yes           | JDBC drivers, logging backends |
| `provided`           | compile only      | no            | Servlet API, JPA API           |
| `testImplementation` | test compile+run  | no            | JUnit, Mockito, testcontainers |

The distinction between `api` and `implementation` in Gradle is critical. A dependency declared as
`api` is transitively exposed to consumers of your library. A dependency declared as
`implementation` is not. Declaring everything as `api` bloats the dependency graph and creates
version conflicts; the default should always be `implementation`.

#### Transitive Dependency Conflicts

When two dependencies require different versions of the same transitive library, the build tool must
resolve the conflict. Maven uses "nearest definition wins" (the shortest path in the dependency tree
takes precedence). Gradle uses the same strategy by default but allows explicit resolution
strategies.

```kotlin
configurations.all {
    resolutionStrategy {
        force("com.fasterxml.jackson.core:jackson-databind:2.17.0")
    }
}
```

Use dependency analysis tools (`mvn dependency:tree`, `gradle dependencies`) regularly to audit your
dependency graph. Undesired transitive dependencies are a source of security vulnerabilities and
classpath conflicts.

## Testing

### JUnit 5 Fundamentals

JUnit 5 (Jupiter) is the standard testing framework for modern Java. It consists of three
subprojects: JUnit Platform (the runtime foundation), JUnit Jupiter (the new API), and JUnit Vintage
(backward compatibility with JUnit 4).

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class UserServiceTest {

    private UserService userService;

    @BeforeEach
    void setUp() {
        userService = new UserService(new InMemoryUserRepository());
    }

    @Test
    @DisplayName("should throw when creating user with null email")
    void createUser_nullEmail_throwsException() {
        var ex = assertThrows(IllegalArgumentException.class,
            () -> userService.createUser(null, "Alice"));

        assertEquals("email must not be null", ex.getMessage());
    }

    @Test
    @DisplayName("should find user by id")
    void findById_existingUser_returnsUser() {
        var user = userService.createUser("alice@example.com", "Alice");

        var found = userService.findById(user.id());

        assertTrue(found.isPresent());
        assertEquals("Alice", found.get().name());
    }
}
```

The lifecycle annotations `@BeforeEach`, `@AfterEach`, `@BeforeAll`, and `@AfterAll` control setup
and teardown. `@BeforeAll` methods must be `static` unless the test class is annotated with
`@TestInstance(Lifecycle.PER_CLASS)`.

### Assertions

JUnit 5 assertions are static methods on `org.junit.jupiter.api.Assertions`. The assertion library
provides variants for different comparison strategies:

```java
assertEquals(expected, actual);              // value equality
assertSame(expected, actual);                // reference equality
assertThrows(Exception.class, () -> { });    // expected exception
assertTimeout(Duration.ofSeconds(1), () -> { }); // timeout
assertAll(                                  // grouped assertions
    () -> assertEquals("Alice", user.name()),
    () -> assertEquals("alice@example.com", user.email()),
    () -> assertNotNull(user.id())
);
```

Grouped assertions with `assertAll` are critical: without them, the first failed assertion aborts
the test and you only learn about one problem per run. With `assertAll`, all assertions execute and
you see every failure in a single pass.

### Parameterized Tests

Parameterized tests run the same test logic with different inputs, eliminating copy-paste test
methods:

```java
import org.junit.jupiter.params.*;
import org.junit.jupiter.params.provider.*;

class EmailValidatorTest {

    @ParameterizedTest
    @NullAndEmptySource
    @ValueSource(strings = { "invalid", "@no-host", "no-at.com" })
    void isValid_invalidEmails_returnsFalse(String email) {
        assertFalse(EmailValidator.isValid(email));
    }

    @ParameterizedTest
    @CsvSource({
        "alice@example.com, true",
        "bob@sub.domain.org, true",
        "no-at, false"
    })
    void isValid_variousEmails_returnsExpectedResult(String email, boolean expected) {
        assertEquals(expected, EmailValidator.isValid(email));
    }

    @ParameterizedTest
    @MethodSource("com.example.test.EmailDataProvider#validEmails")
    void isValid_methodSource(String email) {
        assertTrue(EmailValidator.isValid(email));
    }
}
```

`@MethodSource` accepts a factory method that returns a `Stream`, `Collection`, `Iterator`, or array
of arguments. This is the most flexible parameterization strategy because the data source can be any
method, including one that reads from a file or generates values programmatically.

### Mocking with Mockito

Mockito creates test doubles that verify interactions and stub return values. The goal of mocking is
to isolate the unit under test from its collaborators:

```java
import static org.mockito.Mockito.*;
import static org.mockito.ArgumentMatchers.*;

class OrderServiceTest {

    private final OrderRepository orderRepository = mock(OrderRepository.class);
    private final PaymentGateway paymentGateway = mock(PaymentGateway.class);
    private final OrderService orderService = new OrderService(orderRepository, paymentGateway);

    @Test
    void placeOrder_success_savesAndReturnsOrder() {
        when(orderRepository.nextId()).thenReturn(1L);

        var order = orderService.placeOrder(new OrderRequest("item-1", 2, BigDecimal.TEN));

        verify(orderRepository).save(argThat(saved ->
            saved.getItemId().equals("item-1") && saved.getQuantity() == 2
        ));
        verify(paymentGateway).charge(eq(BigDecimal.valueOf(20)));
    }

    @Test
    void placeOrder_paymentFailure_throwsException() {
        when(orderRepository.nextId()).thenReturn(1L);
        when(paymentGateway.charge(any())).thenThrow(new PaymentDeclinedException("Insufficient funds"));

        assertThrows(PaymentDeclinedException.class,
            () -> orderService.placeOrder(new OrderRequest("item-1", 1, BigDecimal.ONE)));

        verify(orderRepository, never()).save(any());
    }
}
```

The `verify` API with `never()` ensures that when an operation fails partway through, no side
effects leak through. The `argThat` matcher enables assertions on the arguments passed to
collaborators without requiring an equality implementation that may not exist on the domain object.

:::warning
Over-Mocking If a test requires more than three mocks, the unit under test likely has too
many responsibilities. Restructure the code rather than adding more mocks. Tests that mock
extensively tend to be brittle: they break when implementation details change even when the
externally observable behavior is correct.
:::

## Logging

### java.util.logging (JUL)

`java.util.logging` is the JDK's built-in logging framework. It requires zero external dependencies
and is always available. However, its API is verbose, its configuration mechanism (properties files
and programmatic configuration) is unintuitive, and it lacks structured logging support.

```java
import java.util.logging.Level;
import java.util.logging.Logger;

public class PaymentService {
    private static final Logger logger = Logger.getLogger(PaymentService.class.getName());

    public void processPayment(Payment payment) {
        logger.log(Level.INFO, "Processing payment: {0}", payment.getId());
        try {
            gateway.charge(payment.getAmount());
            logger.log(Level.INFO, "Payment {0} processed successfully", payment.getId());
        } catch (PaymentException e) {
            logger.log(Level.SEVERE, "Payment {0} failed: {1}",
                new Object[]{ payment.getId(), e.getMessage() });
        }
    }
}
```

### SLF4J + Logback

SLF4J (Simple Logging Facade for Java) is a logging abstraction, not an implementation. Logback is a
logging implementation that natively implements SLF4J. This separation means your code depends on
the SLF4J API (which is stable and minimal) while the actual logging backend can be swapped without
changing any application code.

```java
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

public class PaymentService {
    private static final Logger logger = LoggerFactory.getLogger(PaymentService.class);

    public void processPayment(Payment payment) {
        logger.info("Processing payment: {}", payment.getId());
        try {
            gateway.charge(payment.getAmount());
            logger.info("Payment {} processed successfully", payment.getId());
        } catch (PaymentException e) {
            logger.error("Payment {} failed", payment.getId(), e);
        }
    }
}
```

The `{}` parameterized formatting is the critical difference. SLF4J defers string concatenation to
the logging framework, which first checks whether the log level is enabled. If `INFO` is disabled,
the string concatenation never occurs. With JUL or `System.out.println`, the concatenation happens
unconditionally, wasting CPU cycles and allocating objects that are immediately discarded.

```xml
<!-- logback.xml -->
<configuration>
    <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
        <encoder>
            <pattern>%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n</pattern>
        </encoder>
    </appender>

    <logger name="com.example" level="DEBUG"/>
    <logger name="org.springframework" level="WARN"/>

    <root level="INFO">
        <appender-ref ref="STDOUT"/>
    </root>
</configuration>
```

:::tip
Recommendation Always use SLF4J for application logging. Use JUL only in library code where
adding external dependencies is undesirable. Never use `System.out.println` for logging in
production code; it cannot be filtered by log level, redirected to files, or formatted consistently.
:::

## Design Patterns

### Singleton

The Singleton pattern restricts instantiation of a class to a single instance. In modern Java, the
preferred approach is the **enum singleton**, which is immune to reflection-based attacks and
serialization breakage:

```java
public enum DatabaseConnectionPool {
    INSTANCE;

    private final HikariDataSource dataSource;

    DatabaseConnectionPool() {
        var config = new HikariConfig();
        config.setJdbcUrl("jdbc:postgresql://localhost/mydb");
        config.setMaximumPoolSize(10);
        this.dataSource = new HikariDataSource(config);
    }

    public Connection getConnection() throws SQLException {
        return dataSource.getConnection();
    }
}
```

The enum approach works because the JVM guarantees that enum constants are initialized exactly once,
and the serialization mechanism handles enum instances specially (they are identified by name, not
by serialized field data). A traditional class-based singleton with a private constructor can be
broken by reflection (`Constructor.setAccessible(true)`) and by deserialization (which creates a new
instance unless `readResolve` is implemented).

:::caution When to Use Singleton Singletons are appropriate for stateless service objects and
expensive resources (connection pools, thread pools). They are inappropriate for stateful objects
that represent business domain concepts, because a global mutable singleton is essentially a hidden
global variable that makes testing difficult and introduces hidden coupling between unrelated parts
of the codebase.
:::

### Factory

The Factory pattern encapsulates object creation behind an interface, decoupling the client from the
concrete class:

```java
public interface DocumentParser {
    Document parse(InputStream input) throws ParseException;
}

public class DocumentParserFactory {
    private final Map<String, DocumentParser> parsers = new HashMap<>();

    public DocumentParserFactory() {
        parsers.put("application/json", new JsonDocumentParser());
        parsers.put("application/xml", new XmlDocumentParser());
        parsers.put("text/csv", new CsvDocumentParser());
    }

    public DocumentParser forContentType(String contentType) {
        var parser = parsers.get(contentType);
        if (parser == null) {
            throw new IllegalArgumentException("Unsupported content type: " + contentType);
        }
        return parser;
    }
}
```

The Factory pattern is most valuable when the concrete type to instantiate depends on runtime
conditions (configuration, input data, environment). If the concrete type is known at compile time
and never changes, a factory adds unnecessary indirection.

### Builder

The Builder pattern provides a fluent API for constructing objects that have many optional
parameters or that require validation across multiple parameters.

#### Why Builder Over Telescoping Constructors

The "telescoping constructor" pattern creates constructors with progressively more parameters:

```java
public class HttpRequest {
    public HttpRequest() { }
    public HttpRequest(String url) { }
    public HttpRequest(String url, String method) { }
    public HttpRequest(String url, String method, Map<String, String> headers) { }
    public HttpRequest(String url, String method, Map<String, String> headers, Duration timeout) { }
    // Every time you add a parameter, you add another constructor
}
```

This approach fails for three reasons:

1. **Readability collapses.** A call like `new HttpRequest("/api", "POST", headers, timeout)` is
   meaningless without checking the constructor signature to determine which argument is which.
2. **Combination explosion.** With 6 optional parameters, you need 2^6 = 64 constructors to cover
   every combination, or callers must pass `null` for parameters they do not care about.
3. **Type unsafety.** If two parameters have the same type, the compiler cannot catch a
   transposition.

The Builder pattern eliminates all three problems:

```java
public class HttpRequest {
    private final String url;
    private final String method;
    private final Map<String, String> headers;
    private final Duration timeout;
    private final String body;

    private HttpRequest(Builder builder) {
        this.url = builder.url;
        this.method = builder.method;
        this.headers = Collections.unmodifiableMap(new HashMap<>(builder.headers));
        this.timeout = builder.timeout;
        this.body = builder.body;
    }

    public static Builder builder(String url) {
        return new Builder(url);
    }

    public static class Builder {
        private final String url;
        private String method = "GET";
        private Map<String, String> headers = new HashMap<>();
        private Duration timeout = Duration.ofSeconds(30);
        private String body = null;

        private Builder(String url) {
            this.url = Objects.requireNonNull(url, "url must not be null");
        }

        public Builder method(String method) {
            this.method = Objects.requireNonNull(method);
            return this;
        }

        public Builder header(String key, String value) {
            this.headers.put(key, value);
            return this;
        }

        public Builder timeout(Duration timeout) {
            this.timeout = Objects.requireNonNull(timeout);
            return this;
        }

        public Builder body(String body) {
            this.body = body;
            return this;
        }

        public HttpRequest build() {
            if (body != null && !"POST".equals(method) && !"PUT".equals(method)) {
                throw new IllegalStateException("Request body is only allowed for POST and PUT");
            }
            return new HttpRequest(this);
        }
    }
}
```

The builder allows named parameters (`method("POST")`), default values (timeout defaults to 30
seconds), and cross-parameter validation in the `build()` method. The resulting client code is
self-documenting:

```java
var request = HttpRequest.builder("https://api.example.com/users")
    .method("POST")
    .header("Content-Type", "application/json")
    .header("Authorization", "Bearer " + token)
    .timeout(Duration.ofSeconds(10))
    .body(jsonPayload)
    .build();
```

In Java 16+, a `record` can replace the mutable Builder inner class when combined with a separate
builder:

```java
public record HttpRequest(
    String url,
    String method,
    Map<String, String> headers,
    Duration timeout,
    String body
) {
    public HttpRequest {
        Objects.requireNonNull(url);
        headers = Collections.unmodifiableMap(new HashMap<>(headers));
    }
}
```

### Strategy

The Strategy pattern defines a family of algorithms, encapsulates each one, and makes them
interchangeable. The key insight is that it replaces conditional logic with polymorphism:

```java
public interface PricingStrategy {
    BigDecimal calculatePrice(Order order);
}

public class RegularPricing implements PricingStrategy {
    @Override
    public BigDecimal calculatePrice(Order order) {
        return order.getBasePrice();
    }
}

public class LoyaltyDiscountPricing implements PricingStrategy {
    private final BigDecimal discountRate;

    public LoyaltyDiscountPricing(BigDecimal discountRate) {
        this.discountRate = discountRate;
    }

    @Override
    public BigDecimal calculatePrice(Order order) {
        return order.getBasePrice().multiply(BigDecimal.ONE.subtract(discountRate));
    }
}

public class BulkDiscountPricing implements PricingStrategy {
    private final int threshold;
    private final BigDecimal discountRate;

    public BulkDiscountPricing(int threshold, BigDecimal discountRate) {
        this.threshold = threshold;
        this.discountRate = discountRate;
    }

    @Override
    public BigDecimal calculatePrice(Order order) {
        if (order.getQuantity() >= threshold) {
            return order.getBasePrice().multiply(BigDecimal.ONE.subtract(discountRate));
        }
        return order.getBasePrice();
    }
}
```

Without Strategy, the pricing logic lives in a single class as a chain of `if-else` or `switch`
statements. Each new pricing rule requires modifying that class, violating the Open/Closed
Principle. With Strategy, adding a new pricing rule means adding a new class that implements
`PricingStrategy` -- no existing code is modified.

### Observer

The Observer pattern defines a one-to-many dependency between objects so that when one object
changes state, all its dependents are notified. Java has built-in support via `java.util.Observable`
(deprecated since Java 9) and the property change support in `java.beans`. In modern Java, the
idiomatic approach uses functional interfaces or the Flow API:

```java
import java.util.concurrent.Flow;
import java.util.concurrent.SubmissionPublisher;
import java.util.concurrent.Flow.Subscriber;
import java.util.concurrent.Flow.Subscription;

public class OrderEventPublisher extends SubmissionPublisher<OrderEvent> {
    public void publishOrderCreated(Order order) {
        submit(new OrderEvent("CREATED", order.getId(), Instant.now()));
    }

    public void publishOrderShipped(Order order) {
        submit(new OrderEvent("SHIPPED", order.getId(), Instant.now()));
    }
}

public class OrderAuditLog implements Subscriber<OrderEvent> {
    private Subscription subscription;

    @Override
    public void onSubscribe(Subscription subscription) {
        this.subscription = subscription;
        subscription.request(Long.MAX_VALUE);
    }

    @Override
    public void onNext(OrderEvent event) {
        auditLog.record("Order %s: %s at %s".formatted(
            event.orderId(), event.type(), event.timestamp()));
    }

    @Override
    public void onError(Throwable throwable) {
        logger.error("Error in order event stream", throwable);
    }

    @Override
    public void onComplete() {
        logger.info("Order event stream completed");
    }
}
```

The `Flow` API (Java 9+) provides reactive-streams-based pub/sub with backpressure, meaning
subscribers control the rate at which they receive items. This prevents fast publishers from
overwhelming slow subscribers.

### Dependency Injection

#### Why Dependency Injection Over Service Locator

A Service Locator is a global registry where objects look up their dependencies:

```java
public class OrderService {
    public void placeOrder(OrderRequest request) {
        var repository = ServiceLocator.get(OrderRepository.class); // hidden dependency
        var gateway = ServiceLocator.get(PaymentGateway.class);     // hidden dependency
        // ...
    }
}
```

Dependency Injection provides dependencies through the constructor (or setters):

```java
public class OrderService {
    private final OrderRepository orderRepository;
    private final PaymentGateway paymentGateway;

    public OrderService(OrderRepository orderRepository, PaymentGateway paymentGateway) {
        this.orderRepository = orderRepository;
        this.paymentGateway = paymentGateway;
    }
}
```

Dependency Injection is preferred for three reasons:

1. **Explicitness.** The constructor signature declares every dependency. A Service Locator hides
   dependencies inside method bodies; you must read every line of code to discover what an object
   depends on. With DI, the dependencies are visible at the point of instantiation.
2. **Testability.** With constructor injection, tests pass mock or stub implementations directly.
   With a Service Locator, tests must either modify global state (setting up the locator before each
   test and tearing it down after) or use PowerMock/inline mocking to intercept the static `get()`
   call. Modifying global state in tests causes test pollution when tests run in parallel.
3. **Compile-time safety.** A missing dependency with DI produces a compilation error (the
   constructor call fails). A missing dependency with a Service Locator produces a
   `NullPointerException` or a `ClassCastException` at runtime -- precisely when you least want to
   discover it.

```java
// Test with DI -- direct, no framework, no global state
var repository = new InMemoryOrderRepository();
var gateway = new StubPaymentGateway();
var service = new OrderService(repository, gateway);
```

Frameworks like Spring and Jakarta EE provide runtime DI via reflection and annotations, but the
principle is the same: dependencies are declared (through constructor parameters, `@Inject`, or
`@Autowired`) rather than looked up imperatively.

## Modern Java Idioms

### Local Variable Type Inference (`var`)

The `var` keyword (Java 10+) infers the type of local variables from the initializer. It does
**not** make Java dynamically typed; the inferred type is a compile-time constant, and the variable
cannot be reassigned to an incompatible type.

```java
// Good: the type is obvious from the right-hand side
var users = new ArrayList<User>();
var entry = Map.entry("key", "value");
var stream = users.stream().filter(u -> u.isActive()).collect(Collectors.toList());

// Bad: the type is not obvious
var result = repository.query(userId);        // what does this return?
var x = processor.transform(input);            // what type is x?
var data = parse(jsonString);                  // String? Map? JsonNode?
```

The rule of thumb: use `var` when the right-hand side makes the type obvious. When the type is a
critical part of the expression's meaning (especially when the right-hand side is a method call with
a non-obvious return type), spell out the type.

### Records

Records (Java 16+) are immutable data carriers that eliminate boilerplate for classes that are
primarily data holders:

```java
public record Point(double x, double y) { }

public record User(Long id, String email, String name, Instant createdAt) {
    public User {
        Objects.requireNonNull(email, "email must not be null");
        Objects.requireNonNull(name, "name must not be null");
    }
}
```

A record automatically generates: a canonical constructor, accessor methods (`email()`, not
`getEmail()`), `equals`, `hashCode`, and `toString`. The compact constructor syntax
(`public User { ... }`) allows validation without declaring fields or assigning parameters.

Records cannot extend other classes (they implicitly extend `java.lang.Record`), and their fields
are implicitly `final`. This makes them unsuitable for mutable domain objects with complex lifecycle
behavior, but ideal for DTOs, value objects, method return types, and keys in collections.

### Sealed Classes

Sealed classes (Java 17+) restrict which classes can extend or implement them, providing exhaustive
pattern matching:

```java
public sealed interface Shape
    permits Circle, Rectangle, Triangle { }

public record Circle(double radius) implements Shape { }
public record Rectangle(double width, double height) implements Shape { }
public record Triangle(double base, double height) implements Shape { }
```

The `permits` clause lists exactly which classes can implement the sealed interface. These permitted
subclasses must be in the same module (if the sealed class is in a named module) or the same package
(if in the unnamed module). Each permitted subclass must be declared `final`, `sealed`, or
`non-sealed`.

### Pattern Matching for `instanceof`

Pattern matching for `instanceof` (Java 16+) combines type testing and casting into a single
operation:

```java
// Before Java 16
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// Java 16+
if (obj instanceof String s) {
    System.out.println(s.length());
}
```

The pattern variable `s` is in scope only in the branch where the pattern matched, preventing
accidental use of a potentially null cast result. This also works with record patterns:

```java
if (shape instanceof Rectangle(double w, double h)) {
    System.out.println("Area: " + (w * h));
}
```

### Switch Expressions

Switch expressions (Java 14+) turn `switch` from a statement into an expression that yields a value:

```java
String result = switch (status) {
    case 200, 201 -> "Success";
    case 400 -> "Bad Request";
    case 401, 403 -> "Unauthorized";
    case 404 -> "Not Found";
    case 500 -> "Internal Server Error";
    default -> "Unknown (" + status + ")";
};
```

The arrow form (`->`) does not fall through; each case is independent. If a case requires multiple
statements, use a block with `yield`:

```java
String result = switch (shape) {
    case Circle c -> {
        double area = Math.PI * c.radius() * c.radius();
        yield "Circle with area " + area;
    }
    case Rectangle r -> "Rectangle " + r.width() + "x" + r.height();
    case Triangle t -> "Triangle base=" + t.base() + " height=" + t.height();
};
```

When combined with sealed classes, the compiler can verify that all permitted subclasses are
covered, making the `default` branch unnecessary:

```java
double area = switch (shape) {
    case Circle c -> Math.PI * c.radius() * c.radius();
    case Rectangle r -> r.width() * r.height();
    case Triangle t -> 0.5 * t.base() * t.height();
    // No default needed -- the compiler knows the set is exhaustive
};
```

### Text Blocks

Text blocks (Java 15+) provide a multiline string literal without escape sequences:

```java
String json = """
    {
        "name": "%s",
        "email": "%s",
        "role": "%s"
    }
    """.formatted(name, email, role);

String query = """
    SELECT u.id, u.name, o.total
    FROM users u
    JOIN orders o ON u.id = o.user_id
    WHERE u.status = 'ACTIVE'
      AND o.created_at > ?
    ORDER BY o.total DESC
    LIMIT ?
    """;
```

The closing `"""` determines the indentation: the compiler strips the common leading whitespace from
all lines based on the position of the closing delimiter. Incidental trailing whitespace on each
line is also stripped.

## Effective Java Principles

### Prefer Immutability

An immutable object is one whose state cannot be modified after construction. Immutability is
preferred because it eliminates entire classes of bugs: race conditions in concurrent code,
unexpected side effects in method calls, and inconsistent state after partial construction.

```java
// Mutable -- prone to errors
public class MutableRange {
    private int lower;
    private int upper;

    public int getLower() { return lower; }
    public void setLower(int lower) {
        if (lower > upper) throw new IllegalArgumentException();
        this.lower = lower;
    }
    public int getUpper() { return upper; }
    public void setUpper(int upper) {
        if (upper < lower) throw new IllegalArgumentException();
        this.upper = upper;
    }
}

// Immutable -- thread-safe, predictable
public record ImmutableRange(int lower, int upper) {
    public ImmutableRange {
        if (lower > upper) throw new IllegalArgumentException(
            "lower (" + lower + ") > upper (" + upper + ")");
    }
}
```

The mutable version has a temporal coupling bug: there is no atomic way to set both `lower` and
`upper` simultaneously. If one thread calls `setLower(5)` and another calls `setUpper(3)`
concurrently, the invariants can be violated even though each setter validates independently. The
immutable version has no such problem because the state is fixed at construction time and validated
atomically in the constructor.

To make a class immutable: declare all fields `final`, make the class `final` (or prevent
subclassing by sealing), do not provide setters, and ensure that all mutable state reachable from
the class (collections, arrays) is defensively copied or wrapped in unmodifiable views.

### Favor Composition Over Inheritance

Inheritance creates a tight coupling between the subclass and the superclass. A change in the
superclass's implementation can break subclasses that depend on its internal behavior, even if the
subclass never overrides the affected methods. This is known as the **fragile base class problem**.

```java
// Inheritance -- fragile coupling
public class CountingHashSet<E> extends HashSet<E> {
    private int addCount = 0;

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);  // BUG: HashSet.addAll() calls add() internally
                                  // so addCount is incremented twice per element
    }
}

// Composition -- robust, decoupled
public class ForwardingSet<E> implements Set<E> {
    private final Set<E> delegate;

    public ForwardingSet(Set<E> delegate) {
        this.delegate = Objects.requireNonNull(delegate);
    }

    @Override public int size() { return delegate.size(); }
    @Override public boolean isEmpty() { return delegate.isEmpty(); }
    @Override public boolean contains(Object o) { return delegate.contains(o); }
    @Override public Iterator<E> iterator() { return delegate.iterator(); }
    @Override public Object[] toArray() { return delegate.toArray(); }
    @Override public <T> T[] toArray(T[] a) { return delegate.toArray(a); }
    @Override public boolean add(E e) { return delegate.add(e); }
    @Override public boolean remove(Object o) { return delegate.remove(o); }
    @Override public boolean containsAll(Collection<?> c) { return delegate.containsAll(c); }
    @Override public boolean addAll(Collection<? extends E> c) { return delegate.addAll(c); }
    @Override public boolean retainAll(Collection<?> c) { return delegate.retainAll(c); }
    @Override public boolean removeAll(Collection<?> c) { return delegate.removeAll(c); }
    @Override public void clear() { delegate.clear(); }
}

public class InstrumentedSet<E> extends ForwardingSet<E> {
    private int addCount = 0;

    public InstrumentedSet(Set<E> delegate) {
        super(delegate);
    }

    @Override
    public boolean add(E e) {
        addCount++;
        return super.add(e);
    }

    @Override
    public boolean addAll(Collection<? extends E> c) {
        addCount += c.size();
        return super.addAll(c);  // Safe: ForwardingSet.addAll delegates to the wrapped Set
                                  // which calls its own add(), not our overridden add()
    }
}
```

In the inheritance version, `addAll` calls `super.addAll()`, which in `HashSet` internally iterates
and calls `add()` -- our overridden `add()`. So each element is counted twice. The composition
version delegates to the wrapped set, which calls its own `add()`, not the forwarding set's `add()`.
The count is correct.

### Minimize Accessibility

The principle of information hiding states that a module should hide its implementation details
behind a well-defined interface. In Java, this is enforced through access modifiers:

| Modifier        | Class | Package | Subclass | World |
| --------------- | ----- | ------- | -------- | ----- |
| `public`        | yes   | yes     | yes      | yes   |
| `protected`     | yes   | yes     | yes      | no    |
| package-private | yes   | yes     | no       | no    |
| `private`       | yes   | no      | no       | no    |

The rule is simple: make every field and method as inaccessible as possible. If a method is only
used within its own class, make it `private`. If it is used by other classes in the same package,
make it package-private. Only promote to `protected` or `public` when there is a clear, documented
reason for wider access.

This matters because accessibility is a contract. A `public` method is part of your API; you are
committing to maintaining its signature and behavior across versions. A `private` method can be
changed, renamed, or deleted without any impact on callers.

### Program to Interfaces

"Program to an interface, not an implementation" means that the declared type of a variable,
parameter, or return value should be the most general interface or abstract class that provides the
required behavior:

```java
// Bad: coupled to a specific implementation
ArrayList<String> names = new ArrayList<>();

// Good: coupled to the abstraction
List<String> names = new ArrayList<>();
```

This allows the implementation to be changed without modifying the client code. If profiling reveals
that a `LinkedList` performs better for the access pattern in question, only the right-hand side
changes. The declared type `List` remains, and all code that uses `names` continues to compile
without modification.

This principle extends to method signatures and fields:

```java
public class UserRepository {
    // Good: field declared as Map, not HashMap
    private final Map<Long, User> cache = new ConcurrentHashMap<>();

    // Good: return type is List, not ArrayList
    public List<User> findActiveUsers() {
        return users.stream()
            .filter(User::isActive)
            .toList();
    }
}
```

## JVM Flags and Performance Tuning

### Essential JVM Flags

The JVM's default settings are adequate for development, but production deployments typically
require explicit configuration. The most important categories of flags are:

**Memory allocation:**

```bash
# Heap size
-Xms2g          # Initial heap size (minimum)
-Xmx4g          # Maximum heap size

# Metaspace (replaces PermGen in Java 8+)
-XX:MetaspaceSize=256m
-XX:MaxMetaspaceSize=512m
```

Setting `-Xms` equal to `-Xmx` eliminates the overhead of heap resizing at runtime. The JVM will
never need to expand or contract the heap, which reduces GC pauses caused by allocation failures.

**Garbage collection:**

```bash
# G1GC (default in Java 9+, good general-purpose collector)
-XX:+UseG1GC
-XX:MaxGCPauseMillis=200        # Target pause time (soft goal)
-XX:G1HeapRegionSize=8m         # Region size (1-32MB, power of 2)

# ZGC (low-latency collector, production-ready since Java 15)
-XX:+UseZGC
-XX:+ZGenerational              # Enable generational ZGC (Java 21+)

# Shenandoah (alternative low-latency collector)
-XX:+UseShenandoahGC
```

G1GC is the default for a reason: it provides a good balance of throughput and pause times for most
workloads. ZGC and Shenandoah target sub-millisecond pause times and are appropriate for
latency-sensitive applications (trading systems, real-time processing) where any noticeable pause is
unacceptable.

**Diagnostics:**

```bash
# Heap dump on OutOfMemoryError
-XX:+HeapDumpOnOutOfMemoryError
-XX:HeapDumpPath=/var/log/app/heapdump.hprof

# GC logging (unified logging, Java 9+)
-Xlog:gc*:file=/var/log/app/gc.log:time,uptime,level,tags:filecount=5,filesize=20m
```

### JIT Compiler

The JVM's Just-In-Time compiler translates frequently executed bytecode into native machine code.
The two JIT compilers are C1 (client compiler, optimized for fast startup and low footprint) and C2
(server compiler, optimized for peak throughput).

```bash
# Tiered compilation (default in most JVMs)
-XX:+TieredCompilation

# Disable C2 (use only C1) -- useful for fast startup in containers
-XX:TieredStopAtLevel=1
```

Tiered compilation starts with the interpreter, profiles the code, compiles hot methods with C1, and
then recompiles the hottest methods with C2 after extensive profiling. Disabling tiered compilation
entirely (`-XX:-TieredCompilation`) forces all compilation to go through C2, which increases peak
throughput but significantly increases warmup time.

### Container Awareness

Modern JVMs (Java 8u191+, Java 11+) automatically detect container limits (cgroups) and set default
memory limits accordingly. Older JVMs ignore container limits and default to the host machine's
total memory, which causes containers to be killed by the OOM killer:

```bash
# Explicit container limits (if auto-detection is insufficient)
-XX:MaxRAMPercentage=75.0   # Use 75% of container memory limit
-XX:InitialRAMPercentage=50.0
```

:::warning
Production Advice Never set `-XX:+AlwaysPreTouch` without understanding its implications.
This flag touches every page in the heap at JVM startup, which forces the operating system to
allocate physical memory for the entire heap immediately. It eliminates page fault pauses during
runtime, but it delays startup and can cause the container to be killed if the memory limit is
tight.
:::
