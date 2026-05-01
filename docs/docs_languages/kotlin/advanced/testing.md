---
title: Testing
description:
  Testing — Dependencies; JUnit 5 Basics; Test Annotations; Assertion Libraries
  with worked examples and exam-style questions.
slug: testing
date: 2026-04-18
tags:
  - Kotlin
categories:
  - Kotlin
---

## Dependencies

```kotlin
dependencies {
    testImplementation("org.jetbrains.kotlin:kotlin-test")
    testImplementation("org.jetbrains.kotlin:kotlin-test-junit5")
    testImplementation("org.junit.jupiter:junit-jupiter-api:5.11.0")
    testImplementation("org.junit.jupiter:junit-jupiter-params:5.11.0")
    testRuntimeOnly("org.junit.jupiter:junit-jupiter-engine:5.11.0")
    testImplementation("io.mockk:mockk:1.13.12")
    testImplementation("net.jqwik:jqwik:1.9.0")
}

tasks.test {
    useJUnitPlatform()
}
```

## JUnit 5 Basics

### Test Annotations

```kotlin
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.BeforeAll
import org.junit.jupiter.api.AfterAll
import org.junit.jupiter.api.DisplayName
import org.junit.jupiter.api.Nested
import org.junit.jupiter.api.assertThrows
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class UserServiceTest {

    private lateinit var service: UserService

    @BeforeEach
    fun setUp() {
        service = UserService(UserRepository())
    }

    @Test
    @DisplayName("should create user with valid input")
    fun createUser() {
        val user = service.create("alice@example.com", "Alice")
        assertEquals("Alice", user.name)
        assertTrue(user.active)
    }

    @Test
    fun `should throw when email is invalid`() {
        val exception = assertThrows<IllegalArgumentException> {
            service.create("not-an-email", "Alice")
        }
        assertEquals("Invalid email format", exception.message)
    }
}
```

### Assertion Libraries

Kotlin provides its own assertion functions via `kotlin-test`, which work with any test framework.

```kotlin
import kotlin.test.assertEquals
import kotlin.test.assertNotEquals
import kotlin.test.assertTrue
import kotlin.test.assertFalse
import kotlin.test.assertNull
import kotlin.test.assertNotNull
import kotlin.test.assertFailsWith
import kotlin.test.assertContains

assertEquals(expected, actual)
assertTrue(condition, "message when false")
assertFailsWith<IllegalStateException> { riskyOperation() }
assertNull(value)
assertNotNull(value) {
    // block receives non-null value
}
```

### Nested Tests

```kotlin
class StackTest {

    @Nested
    @DisplayName("when empty")
    inner class WhenEmpty {

        @Test
        fun `push adds element`() {
            val stack = Stack<Int>()
            stack.push(1)
            assertEquals(1, stack.size)
        }

        @Test
        fun `pop throws`() {
            val stack = Stack<Int>()
            assertFailsWith<NoSuchElementException> {
                stack.pop()
            }
        }
    }

    @Nested
    @DisplayName("when non-empty")
    inner class WhenNonEmpty {

        private val stack = Stack<Int>().also {
            it.push(1)
            it.push(2)
            it.push(3)
        }

        @Test
        fun `pop returns last pushed`() {
            assertEquals(3, stack.pop())
        }

        @Test
        fun `size decreases after pop`() {
            stack.pop()
            assertEquals(2, stack.size)
        }
    }
}
```

## MockK

MockK is the primary mocking library for Kotlin. It handles `final` classes (Kotlin classes are
final by default), coroutines, object singletons, and companion objects -- all of which are
problematic for Mockito.

### Basic Mocking

```kotlin
import io.mockk.mockk
import io.mockk.every
import io.mockk.verify
import io.mockk.slot

class OrderServiceTest {

    private val repository = mockk<OrderRepository>()
    private val notifier = mockk<EmailNotifier>(relaxed = true)
    private val service = OrderService(repository, notifier)

    @Test
    fun `should create order and send notification`() {
        every { repository.save(any()) } returns Order(id = 1L, status = "CREATED")

        val order = service.createOrder("user@example.com", listOf("item1", "item2"))

        assertEquals("CREATED", order.status)

        val orderSlot = slot<Order>()
        verify(exactly = 1) { repository.save(capture(orderSlot)) }
        verify(exactly = 1) { notifier.sendOrderConfirmation(any(), any()) }
    }
}
```

### Relaxed Mocks

A relaxed mock returns default values for all function calls without explicit stubbing. Useful when
you only care about verifying specific interactions.

```kotlin
val repository = mockk<Repository>(relaxed = true)
// all methods return defaults: 0, false, null, emptyList(), etc.
```

### Capturing Arguments

```kotlin
val captor = slot<User>()
every { repository.save(capture(captor)) } returns Unit

service.createUser("Alice")

assertEquals("Alice", captor.captured.name)
```

### Mocking Coroutines

```kotlin
import io.mockk.coEvery
import io.mockk.coVerify

class OrderServiceTest {

    private val api = mockk<OrderApi>()
    private val service = OrderService(api)

    @Test
    fun `should fetch orders`() = runTest {
        coEvery { api.fetchOrders(1L) } returns listOf(
            Order(1L, "pending"),
            Order(2L, "shipped")
        )

        val orders = service.getOrders(1L)

        assertEquals(2, orders.size)
        coVerify { api.fetchOrders(1L) }
    }
}
```

### Mocking Object Singletons and Companion Objects

```kotlin
object Logger {
    fun log(message: String) { println(message) }
}

class MyTest {
    @Test
    fun test() {
        mockkObject(Logger)
        every { Logger.log(any()) } just Runs

        // test code

        verify { Logger.log("expected message") }
        unmockkObject(Logger)
    }
}
```

### Mocking Static Methods (Java Interop)

```kotlin
mockkStatic(System::class)
every { System.currentTimeMillis() } returns 1000L
// test
unmockkStatic(System::class)
```

## Parameterized Tests

JUnit 5 Jupiter Params provides data-driven testing.

### @MethodSource

```kotlin
import org.junit.jupiter.params.ParameterizedTest
import org.junit.jupiter.params.provider.MethodSource
import org.junit.jupiter.params.provider.Arguments
import org.junit.jupiter.params.provider.Arguments.arguments

class MathTest {

    @ParameterizedTest(name = "max({0}, {1}) == {2}")
    @MethodSource("maxProvider")
    fun `max returns larger value`(a: Int, b: Int, expected: Int) {
        assertEquals(expected, maxOf(a, b))
    }

    companion object {
        @JvmStatic
        fun maxProvider(): Stream<Arguments> = Stream.of(
            arguments(1, 2, 2),
            arguments(5, 3, 5),
            arguments(-1, -5, -1),
            arguments(0, 0, 0)
        )
    }
}
```

### @CsvSource and @ValueSource

```kotlin
@ParameterizedTest
@CsvSource(value = [
    "abc, true",
    "ab, false",
    "a, false",
    "'', false"
])
fun `isPalindrome`(input: String, expected: Boolean) {
    assertEquals(expected, input.isPalindrome())
}

@ParameterizedTest
@ValueSource(ints = [2, 4, 6, 8, 10])
fun `even numbers`(number: Int) {
    assertTrue(number % 2 == 0)
}
```

### @EnumSource

```kotlin
@ParameterizedTest
@EnumSource(value = Direction::class, mode = EnumSource.Mode.EXCLUDE, names = ["NORTH"])
fun `directions other than north`(direction: Direction) {
    assertNotEquals(Direction.NORTH, direction)
}
```

## Property-Based Testing with jqwik

Property-based testing verifies that properties hold across a wide range of randomly generated
inputs, rather than testing specific examples.

```kotlin
import net.jqwik.api.ForAll
import net.jqwik.api.Property
import net.jqwik.api.constraints.Positive

class StringProperties {

    @Property
    fun `reversing a string twice returns the original`(@ForAll input: String) {
        assertEquals(input, input.reversed().reversed())
    }

    @Property
    fun `trim does not change strings without leading or trailing whitespace`(
        @ForAll input: String
    ) {
        val trimmed = input.trim()
        if (trimmed == input) {
            assertEquals(input, input.trim())
        }
    }

    @Property
    fun `addition is commutative`(@ForAll a: Int, @ForAll b: Int) {
        assertEquals(a + b, b + a)
    }

    @Property
    fun `addition is associative`(
        @ForAll a: Int,
        @ForAll b: Int,
        @ForAll c: Int
    ) {
        assertEquals((a + b) + c, a + (b + c))
    }

    @Property
    fun `list size after filtering non-negative is at most original size`(
        @ForAll list: List<@Positive Int>
    ) {
        val filtered = list.filter { it >= 0 }
        assertTrue(filtered.size <= list.size)
    }
}
```

### Shrinking

When jqwik finds a failing case, it automatically shrinks the input to the smallest failing example.
For example, if a list of 100 elements triggers a failure, jqwik will try smaller lists to find the
minimal failing input.

## Test Fixtures

Use `@TempDir` for temporary file system operations and `@TestInstance` for shared test instances.

```kotlin
import org.junit.jupiter.api.TestInstance
import org.junit.jupiter.api.io.TempDir
import java.nio.file.Path

@TestInstance(TestInstance.Lifecycle.PER_CLASS)
class FileProcessorTest {

    @TempDir
    lateinit var tempDir: Path

    private lateinit var processor: FileProcessor

    @BeforeAll
    fun setup() {
        processor = FileProcessor(tempDir)
    }

    @Test
    fun `should process file`() {
        val file = tempDir.resolve("input.txt").toFile()
        file.writeText("test data")

        val result = processor.process(file)

        assertEquals("processed: test data", result)
    }
}
```

## Coroutine Testing

Use `kotlinx-coroutines-test` for testing suspend functions.

```kotlin
import kotlinx.coroutines.test.runTest

class UserRepositoryTest {

    private val api = mockk<UserApi>()
    private val repository = UserRepository(api)

    @Test
    fun `should fetch user`() = runTest {
        coEvery { api.getUser(1L) } returns User(1L, "Alice")

        val user = repository.getUser(1L)

        assertEquals("Alice", user.name)
    }
}
```

`runTest` provides control over virtual time -- `delay()` advances the virtual clock without actual
waiting.

```kotlin
@Test
fun `timeout fires after delay`() = runTest {
    val result = withTimeoutOrNull(1000L) {
        delay(500)
        "done"
    }
    assertEquals("done", result)
}
```

## Common Pitfalls

- \*\* Using Mockito with Kotlin classes. Mockito cannot mock final classes or `object` declarations
  without the `mockito-inline` extension. Use MockK instead.
- \*\* Forgetting `runTest` for coroutine tests. Calling suspend functions from a regular `@Test`
  function requires a coroutine scope.
- \*\* Not cleaning up mocks in `@AfterEach` or `@AfterAll`. Use `unmockkAll()` or `unmockkObject()`
  to prevent mock state from leaking between tests.
- \*\* Using `assertEquals` for data classes without understanding structural equality. Data classes
  implement `equals()` structurally, so `assertEquals` compares all properties. This is correct but
  may mask changes to unrelated fields.
- \*\* Over-relying on relaxed mocks. Relaxed mocks return default values for all interactions,
  which means you may not notice when the code under test calls methods you did not expect. Use
  strict mocks by default and relax only when necessary.
