---
id: testing
title: Testing in Java
description:
  Java testing — JUnit 5, Mockito, integration testing, test design patterns, and test coverage.
slug: testing
---

## JUnit 5

JUnit 5 (Jupiter) is the standard testing framework for Java. It consists of three sub-projects:

- **JUnit Platform** — the foundation for launching test frameworks on the JVM.
- **JUnit Jupiter** — the programming model (annotations, assertions) and extension model.
- **JUnit Vintage** — backward compatibility for running JUnit 3 and 4 tests.

### Core Annotations

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @Test
    void addition() {
        assertEquals(4, 2 + 2);
    }

    @Test
    @DisplayName("Division by zero should throw ArithmeticException")
    void divisionByZero() {
        Exception exception = assertThrows(ArithmeticException.class, () -&gt; {
            int result = 1 / 0;
        });
        assertEquals("/ by zero", exception.getMessage());
    }

    @Test
    @Disabled("Not implemented yet")
    void futureFeature() {
        // skipped
    }

    @Test
    @Tag("slow")
    void slowIntegrationTest() {
        // run with: ./gradlew test --tests "*CalculatorTest*" -Djunit.jupiter.tags.include=slow
    }

    @Nested
    @DisplayName("When the calculator is initialized")
    class WhenInitialized {

        @Test
        @DisplayName("should return zero for initial state")
        void initialState() {
            assertEquals(0, new Calculator().getValue());
        }
    }
}
```

### Assertions

```java
import static org.junit.jupiter.api.Assertions.*;

class AssertionExamples {

    @Test
    void basicAssertions() {
        assertEquals(42, compute(), "should return 42");
        assertNotEquals(0, compute());

        assertTrue(isValid(input));
        assertFalse(isEmpty(input));
        assertNull(optionalInput);
        assertNotNull(requiredInput);

        assertSame(instance, getInstance());      // same reference (==)
        assertNotSame(new Object(), new Object()); // different references
    }

    @Test
    void exceptionAssertions() {
        // Assert that a specific exception is thrown
        IllegalArgumentException ex = assertThrows(
            IllegalArgumentException.class,
            () -&gt; validate(-1)
        );
        assertEquals("value must be positive", ex.getMessage());

        // Assert that no exception is thrown
        assertDoesNotThrow(() -&gt; validate(42));
    }

    @Test
    void timeoutAssertions() {
        // Fail if execution takes longer than 1 second
        assertTimeout(Duration.ofSeconds(1), () -&gt; {
            performOperation();
        });

        // Preemptively fail if timeout is exceeded (does not wait for completion)
        assertTimeoutPreemptively(Duration.ofMillis(500), () -&gt; {
            longRunningOperation();
        });
    }

    @Test
    void groupedAssertions() {
        // All assertions are executed, all failures are reported together
        Address address = parseAddress(input);

        assertAll("address",
            () -&gt; assertEquals("123 Main St", address.getStreet()),
            () -&gt; assertEquals("Springfield", address.getCity()),
            () -&gt; assertEquals("IL", address.getState()),
            () -&gt; assertEquals("62701", address.getZip())
        );
    }

    @Test
    void customMessage() {
        assertEquals(expected, actual,
            () -&gt; String.format("Expected %d but got %d for input %s", expected, actual, input));
        // Use lambda for message — evaluated only on failure
    }
}
```

### Test Lifecycle

```java
class LifecycleTest {

    @BeforeAll
    static void setUpAll() {
        // Runs once before ALL tests in this class
        // Must be static (unless using @TestInstance(Lifecycle.PER_CLASS))
        System.out.println("Initializing shared resources");
    }

    @BeforeEach
    void setUp() {
        // Runs before EACH test
        // Instance method — fresh state for each test
        System.out.println("Setting up test " + this.hashCode());
    }

    @Test
    void testOne() {
        System.out.println("Running testOne");
    }

    @Test
    void testTwo() {
        System.out.println("Running testTwo");
    }

    @AfterEach
    void tearDown() {
        // Runs after EACH test — cleanup
        System.out.println("Tearing down test");
    }

    @AfterAll
    static void tearDownAll() {
        // Runs once after ALL tests in this class
        System.out.println("Cleaning up shared resources");
    }
}
```

:::info
By default, JUnit 5 creates a new test instance for each test method (PER_METHOD lifecycle).
Use `@TestInstance(Lifecycle.PER_CLASS)` to create a single instance shared across all test methods.
This allows non-static `@BeforeAll`/`@AfterAll` methods, but tests share instance state, which can
cause interference.
:::

### Parameterized Tests

Parameterized tests run the same test logic with different inputs, eliminating test method
proliferation.

```java
import org.junit.jupiter.params.*;
import org.junit.jupiter.params.provider.*;

class ParameterizedTestExamples {

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void shouldBePositive(int value) {
        assertTrue(value &gt; 0);
    }

    @ParameterizedTest
    @ValueSource(strings = {"racecar", "madam", "level"})
    void shouldBePalindrome(String word) {
        assertTrue(isPalindrome(word));
    }

    @ParameterizedTest
    @NullSource
    @EmptySource
    @ValueSource(strings = {"  ", "\t", "\n"})
    void shouldRejectBlankInputs(String input) {
        assertFalse(isValid(input));
    }

    @ParameterizedTest
    @EnumSource(TimeUnit.class)
    void shouldSupportAllTimeUnits(TimeUnit unit) {
        assertNotNull(unit.toString());
    }

    @ParameterizedTest
    @EnumSource(value = TimeUnit.class, names = {"DAYS", "HOURS"})
    void shouldSupportSpecificTimeUnits(TimeUnit unit) {
        assertTrue(unit.name().equals("DAYS") || unit.name().equals("HOURS"));
    }

    @ParameterizedTest
    @MethodSource("provideInvalidEmails")
    void shouldRejectInvalidEmails(String email) {
        assertFalse(EmailValidator.isValid(email));
    }

    static Stream&lt;Arguments&gt; provideInvalidEmails() {
        return Stream.of(
            Arguments.of(""),
            Arguments.of("not-an-email"),
            Arguments.of("@missing-local.com"),
            Arguments.of("missing-at-sign.com"),
            Arguments.of("spaces in@email.com")
        );
    }

    @ParameterizedTest
    @CsvSource({
        "1, 2, 3",
        "0, 0, 0",
        "-1, 1, 0",
        "100, 200, 300"
    })
    void addition(int a, int b, int expected) {
        assertEquals(expected, a + b);
    }

    @ParameterizedTest
    @CsvFileSource(resources = "/test-data.csv", numLinesToSkip = 1)
    void fromCsvFile(String input, boolean expected) {
        assertEquals(expected, Validator.validate(input));
    }
}
```

## Mockito

Mockito is the dominant mocking framework for Java. It creates mock objects (proxies) that return
configurable values and verify interactions.

### Mocking and Stubbing

```java
import static org.mockito.Mockito.*;

class MockitoBasics {

    @Test
    void basicMocking() {
        // Create a mock
        List&lt;String&gt; mockList = mock(List.class);

        // Stubbing — define behavior
        when(mockList.get(0)).thenReturn("first");
        when(mockList.get(1)).thenThrow(new IndexOutOfBoundsException());
        when(mockList.size()).thenReturn(10);

        // Use the mock
        assertEquals("first", mockList.get(0));
        assertThrows(IndexOutOfBoundsException.class, () -&gt; mockList.get(1));
        assertEquals(10, mockList.size());

        // Verification — assert that methods were called
        verify(mockList).get(0);
        verify(mockList, never()).get(99);
        verify(mockList, times(1)).get(0);
        verify(mockList, atLeast(1)).size();
    }

    @Test
    void argumentMatching() {
        List&lt;String&gt; mockList = mock(List.class);

        // Argument matchers
        when(mockList.get(anyInt())).thenReturn("default");
        when(mockList.contains(eq("hello"))).thenReturn(true);
        when(mockList.contains(startsWith("h"))).thenReturn(true);

        assertEquals("default", mockList.get(42));

        // Custom argument matcher
        when(mockList.add(argThat(s -&gt; s != null && s.length() &gt; 5))).thenReturn(true);
    }
}
```

### Annotations

```java
import org.mockito.*;
import org.mockito.junit.jupiter.MockitoExtension;
import org.junit.jupiter.api.extension.ExtendWith;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @Mock
    private EmailService emailService;

    @InjectMocks
    private UserService userService;

    @Captor
    private ArgumentCaptor&lt;User&gt; userCaptor;

    @Test
    void shouldCreateUserAndSendEmail() {
        // Arrange
        when(userRepository.save(any(User.class))).thenAnswer(invocation -&gt; {
            User user = invocation.getArgument(0);
            user.setId(1L);
            return user;
        });

        // Act
        userService.createUser("alice@example.com", "Alice");

        // Assert — verify interactions
        verify(userRepository).save(userCaptor.capture());
        User savedUser = userCaptor.getValue();
        assertEquals("alice@example.com", savedUser.getEmail());

        verify(emailService).sendWelcomeEmail(eq("alice@example.com"));
    }
}
```

### Stubbing Variations

```java
// thenReturn — fixed return value
when(mock.process()).thenReturn("result");

// thenReturn — chain of return values
when(mock.nextId()).thenReturn(1L, 2L, 3L); // 1st call returns 1, 2nd returns 2, etc.

// thenThrow
when(mock.process()).thenThrow(new RuntimeException("failure"));

// thenAnswer — dynamic return value based on arguments
when(mock.process(anyString())).thenAnswer(invocation -&gt; {
    String arg = invocation.getArgument(0);
    return arg.toUpperCase();
});

// doThrow — for void methods
doThrow(new IllegalStateException()).when(mock).clear();

// doReturn — when spying (real methods are called by default)
List&lt;String&gt; spy = spy(new ArrayList&lt;&gt;());
doReturn("mocked").when(spy).get(0); // bypasses the real get(0)

// doNothing — explicit no-op for void methods
doNothing().when(mock).log(anyString());

// lenient — allow unnecessary stubbing (default strict mode reports unused stubs)
lenient().when(mock.process()).thenReturn("result");
```

### Spy vs Mock

```java
// Mock — all methods are stubbed, real code is NOT executed
List&lt;String&gt; mockList = mock(List.class);

// Spy — wraps a real object, real methods are called unless stubbed
List&lt;String&gt; realList = new ArrayList&lt;&gt;();
List&lt;String&gt; spyList = spy(realList);

spyList.add("real"); // calls the real add method
when(spyList.size()).thenReturn(100); // overrides the real size method
System.out.println(spyList.size()); // 100 (stubbed)
System.out.println(spyList.get(0));   // "real" (real method called)
```

:::warning
When spying, use `doReturn().when(spy)` instead of `when(spy).thenReturn()`. The latter
calls the real method to get the return value before stubbing, which can have side effects or throw
exceptions.
:::

## Integration Testing

### Spring Boot Test Context

```java
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;

@SpringBootTest
@ActiveProfiles("test")
@Transactional // rolls back after each test
class OrderServiceIntegrationTest {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderRepository orderRepository;

    @Test
    void shouldCreateOrder() {
        Order order = orderService.createOrder("product-123", 5);
        assertNotNull(order.getId());
        assertEquals("product-123", order.getProductId());
        assertEquals(5, order.getQuantity());
    }
}
```

### Testcontainers

Testcontainers provides lightweight, throwaway database, message broker, and service containers for
integration tests:

```java
import org.testcontainers.containers.PostgreSQLContainer;
import org.testcontainers.junit.jupiter.Container;
import org.testcontainers.junit.jupiter.Testcontainers;

@Testcontainers
class DatabaseIntegrationTest {

    @Container
    private static final PostgreSQLContainer&lt;?&gt; postgres =
        new PostgreSQLContainer&lt;&gt;("postgres:16-alpine")
            .withDatabaseName("testdb")
            .withUsername("test")
            .withPassword("test");

    @Test
    void shouldConnectToDatabase() {
        String jdbcUrl = postgres.getJdbcUrl();
        try (Connection conn = DriverManager.getConnection(jdbcUrl,
                postgres.getUsername(), postgres.getPassword())) {
            assertTrue(conn.isValid(5));
        }
    }
}
```

### Database Testing Patterns

```java
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
@Testcontainers
class UserRepositoryTest {

    @Container
    private static final PostgreSQLContainer&lt;?&gt; postgres =
        new PostgreSQLContainer&lt;&gt;("postgres:16-alpine");

    @DynamicPropertySource
    static void configureProperties(DynamicPropertyRegistry registry) {
        registry.add("spring.datasource.url", postgres::getJdbcUrl);
        registry.add("spring.datasource.username", postgres::getUsername);
        registry.add("spring.datasource.password", postgres::getPassword);
    }

    @Autowired
    private UserRepository userRepository;

    @Test
    void shouldSaveAndFindUser() {
        User user = new User("alice@example.com", "Alice");
        userRepository.save(user);

        Optional&lt;User&gt; found = userRepository.findByEmail("alice@example.com");
        assertTrue(found.isPresent());
        assertEquals("Alice", found.get().getName());
    }

    @Test
    void shouldReturnEmptyForUnknownEmail() {
        Optional&lt;User&gt; found = userRepository.findByEmail("nonexistent@example.com");
        assertTrue(found.isEmpty());
    }
}
```

## Test Design Patterns

### Arrange-Act-Assert (AAA)

The most widely used test structure. Each test method follows three clear phases:

```java
@Test
void shouldCalculateTotalPrice() {
    // Arrange — set up test data and preconditions
    ShoppingCart cart = new ShoppingCart();
    cart.addItem(new Item("Widget", BigDecimal.valueOf(10.00), 2));
    cart.addItem(new Item("Gadget", BigDecimal.valueOf(25.00), 1));

    // Act — invoke the method under test
    BigDecimal total = cart.calculateTotal();

    // Assert — verify the result
    assertEquals(new BigDecimal("45.00"), total);
}
```

### Given-When-Then (BDD Style)

BDD-style naming using `@DisplayName` and descriptive method names:

```java
@Test
@DisplayName("given a user with expired subscription, when checking access, then should deny")
void expiredSubscriptionDeniesAccess() {
    // Given
    User user = new User("alice@example.com");
    user.setSubscriptionExpiry(LocalDate.now().minusDays(1));

    // When
    boolean hasAccess = accessControl.checkAccess(user, "premium-content");

    // Then
    assertFalse(hasAccess);
}
```

### Test Fixtures

Shared test data and setup using `@BeforeAll`, `@BeforeEach`, or test utility classes:

```java
class OrderProcessorTest {

    private OrderProcessor processor;
    private OrderRepository mockRepo;
    private NotificationService mockNotifier;

    @BeforeEach
    void setUp() {
        mockRepo = mock(OrderRepository.class);
        mockNotifier = mock(NotificationService.class);
        processor = new OrderProcessor(mockRepo, mockNotifier);
    }

    @Test
    void shouldProcessValidOrder() {
        // Uses the fresh processor instance from setUp
        Order order = new Order("product-1", 10, BigDecimal.valueOf(99.99));
        processor.process(order);
        verify(mockRepo).save(order);
    }
}
```

### Test Object Mothers and Builders

```java
// Object Mother — factory methods for test data
public class TestUsers {
    public static User aValidUser() {
        return new User("alice@example.com", "Alice", UserStatus.ACTIVE);
    }

    public static User anExpiredUser() {
        User user = new User("bob@example.com", "Bob", UserStatus.ACTIVE);
        user.setSubscriptionExpiry(LocalDate.now().minusDays(1));
        return user;
    }
}

// Usage in tests
@Test
void shouldActivateUser() {
    User user = TestUsers.aValidUser();
    userService.activate(user);
    assertEquals(UserStatus.ACTIVE, user.getStatus());
}
```

## Test Coverage

### JaCoCo

JaCoCo (Java Code Coverage) is the standard coverage tool. It instruments bytecode to track which
lines, branches, and methods are exercised by tests.

**Gradle configuration:**

```kotlin
plugins {
    jacoco
}

jacoco {
    toolVersion = "0.8.11"
}

tasks.jacocoTestReport {
    dependsOn(tasks.test)

    reports {
        xml.required.set(true)
        html.required.set(true)
    }
}

tasks.jacocoTestCoverageVerification {
    violationRules {
        rule {
            limit {
                minimum = "0.80".toBigDecimal()
            }
        }
    }
}

tasks.check {
    dependsOn(tasks.jacocoTestCoverageVerification)
}
```

**Maven configuration:**

```xml
<plugin>
    <groupId>org.jacoco</groupId>
    <artifactId>jacoco-maven-plugin</artifactId>
    <version>0.8.11</version>
    <executions>
        <execution>
            <goals>
                <goal>prepare-agent</goal>
            </goals>
        </execution>
        <execution>
            <id>report</id>
            <phase>test</phase>
            <goals>
                <goal>report</goal>
            </goals>
        </execution>
        <execution>
            <id>check</id>
            <goals>
                <goal>check</goal>
            </goals>
            <configuration>
                <rules>
                    <rule>
                        <element>BUNDLE</element>
                        <limits>
                            <limit>
                                <counter>LINE</counter>
                                <value>COVEREDRATIO</value>
                                <minimum>0.80</minimum>
                            </limit>
                        </limits>
                    </rule>
                </rules>
            </configuration>
        </execution>
    </executions>
</plugin>
```

### Coverage Metrics

| Metric                   | Description                                           |
| ------------------------ | ----------------------------------------------------- |
| **Line coverage**        | Percentage of source lines exercised by tests         |
| **Branch coverage**      | Percentage of `if`/`else` branches taken              |
| **Method coverage**      | Percentage of methods called                          |
| **Class coverage**       | Percentage of classes with at least one method called |
| **Instruction coverage** | Percentage of bytecode instructions executed          |

:::warning
100% coverage does not mean bug-free code. Coverage measures execution paths, not
correctness. A test that calls a method with wrong inputs and asserts wrong values still contributes
to coverage. Focus on meaningful tests, not the coverage number. Use coverage as a tool to find
untested code, not as a target to gamify.
:::

## Flaky Tests

### Causes of Flakiness

1. **Non-deterministic order** — tests that depend on execution order, hash map iteration order, or
   `HashSet` ordering.
2. **Time-dependent behavior** — tests that depend on wall-clock time, sleep durations, or timeout
   thresholds.
3. **Concurrency** — tests that use threads, `CompletableFuture`, or async operations without proper
   synchronization.
4. **External dependencies** — tests that depend on databases, network services, or file system
   state.
5. **Non-deterministic random** — tests that use `Math.random()` or `ThreadLocalRandom` without
   seeds.

### Strategies for Reliable Tests

```java
// 1. Use seeded random
@Test
void shouldShuffleDeterministically() {
    Random random = new Random(42); // fixed seed
    List&lt;Integer&gt; list = new ArrayList&lt;&gt;(List.of(1, 2, 3, 4, 5));
    Collections.shuffle(list, random);
    // Always produces the same order with seed 42
    assertEquals(List.of(3, 4, 2, 1, 5), list);
}

// 2. Use fake time
@Test
void shouldExpireAfterTimeout() {
    Clock fixedClock = Clock.fixed(Instant.parse("2024-01-01T00:00:00Z"), ZoneOffset.UTC);
    Session session = new Session(fixedClock, Duration.ofMinutes(30));
    assertTrue(session.isValid());

    Clock advancedClock = Clock.offset(fixedClock, Duration.ofMinutes(31));
    Session advancedSession = new Session(advancedClock, Duration.ofMinutes(30));
    assertFalse(advancedSession.isValid());
}

// 3. Use Awaitility for async assertions
@Test
void shouldProcessMessageAsync() {
    messageQueue.send("test-message");

    Awaitility.await()
        .atMost(Duration.ofSeconds(5))
        .until(() -&gt; processor.getProcessedCount() == 1);
}

// 4. Isolate tests — don't share mutable state
class IsolatedTest {
    @BeforeEach
    void freshState() {
        // Reset singletons, clear static state
        TestContext.reset();
    }
}
```

### Retry Mechanism

JUnit 5 does not have a built-in retry mechanism. Use the `junit-pioneer` library or implement a
custom extension:

```java
// Using junit-pioneer
@RepeatedIfExceptionsTest(repeats = 3)
void flakyNetworkTest() {
    // Retries up to 3 times on failure
    webClient.fetchData();
}
```

## Common Pitfalls

### Testing Implementation Details

```java
// BAD — testing internal implementation, not behavior
@Test
void shouldSortInternally() {
    processor.process(data);
    verify(processor).sort(anyList()); // testing that sort is called, not the result
}

// GOOD — testing observable behavior
@Test
void shouldReturnSortedResults() {
    List&lt;String&gt; result = processor.process(data);
    assertEquals(expectedSorted, result);
}
```

### Over-Mocking

```java
// BAD — mocking everything makes the test fragile and meaningless
@Test
void badTest() {
    when(userRepository.findById(1L)).thenReturn(Optional.of(user));
    when(userRepository.save(any())).thenReturn(user);
    when(emailService.send(any())).thenReturn(true);
    when(auditLog.log(any())).thenReturn(null);
    // The test doesn't verify real behavior — it verifies the mock setup
}

// GOOD — mock only external dependencies, test real logic
@Test
void goodTest() {
    when(userRepository.findById(1L)).thenReturn(Optional.of(user));
    when(emailService.send(any())).thenReturn(true);

    userService.deactivateUser(1L);

    verify(emailService).send(eq(user.getEmail()));
    assertEquals(UserStatus.INACTIVE, user.getStatus());
}
```

### Ignoring Test Failures

```bash
# BAD — ignoring test failures in CI
mvn package -DskipTests

# GOOD — fix the failing test or temporarily disable it with @Disabled and a reason
// @Disabled("Fix: issue #1234 — race condition in concurrent cache")
```

### Tests That Depend on Order

```java
// BAD — testTwo depends on testOne's side effects
class OrderDependentTest {
    private static int counter = 0;

    @Test void testOne() { counter++; }
    @Test void testTwo() { assertEquals(2, counter); } // FAILS if testTwo runs first
}

// GOOD — each test sets up its own state
class IndependentTest {
    @Test void testOne() {
        int counter = 1;
        assertEquals(1, counter);
    }
    @Test void testTwo() {
        int counter = 2;
        assertEquals(2, counter);
    }
}
```

### Using `Thread.sleep` in Tests

```java
// BAD — slow and flaky
@Test
void shouldProcessAsync() throws InterruptedException {
    asyncProcessor.submit(task);
    Thread.sleep(5000); // hope it finishes in time
    assertEquals(1, result.get());
}

// GOOD — use Awaitility or CountDownLatch
@Test
void shouldProcessAsync() {
    asyncProcessor.submit(task);
    Awaitility.await()
        .atMost(Duration.ofSeconds(5))
        .pollInterval(Duration.ofMillis(100))
        .until(() -&gt; result.get() == 1);
}
```

### Not Cleaning Up Resources in Tests

```java
// BAD — resources leak, locks held, temp files not deleted
@Test
void shouldWriteToFile() throws IOException {
    FileOutputStream fos = new FileOutputStream("test.txt");
    fos.write(data);
    // fos never closed — file handle leaked
}

// GOOD — use try-with-resources
@Test
void shouldWriteToFile() throws IOException {
    try (FileOutputStream fos = new FileOutputStream("test.txt")) {
        fos.write(data);
    }
    // fos is automatically closed

    // Or use @TempDir for temporary files (JUnit 5)
}

@TempDir Path tempDir;

@Test
void shouldWriteToTempFile() throws IOException {
    Path file = tempDir.resolve("test.txt");
    Files.writeString(file, "data");
    assertTrue(Files.exists(file));
    // tempDir is automatically cleaned up after the test
}
```

