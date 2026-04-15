---
title: Data Analysis
date: 2026-04-14
tags:
  - Computer Science
  - AP
categories:
  - Computer Science
slug: data-analysis
---

## Data Structures (CED Unit 3, AP CS A)

### Arrays

A fixed-size, ordered collection of elements of the same type.

**Java:**

```java
int[] scores = new int[10];
int[] nums = {3, 1, 4, 1, 5, 9};
```

- Index from `0` to `length - 1`.
- $O(1)$ access by index.
- $O(n)$ search (unsorted), $O(\log n)$ search (sorted, binary search).
- Insertion and deletion are $O(n)$ (requires shifting elements).

**Common pitfalls with arrays:**

- `ArrayIndexOutOfBoundsException` when accessing an index outside the valid range.
- The length of a Java array is fixed after creation.
- Java initializes all array elements to default values: 0 for integers, `null` for objects.

**Traversing and processing:**

```java
int[] scores = {85, 92, 78, 95, 88};
int sum = 0;
int max = scores[0];
int min = scores[0];
for (int s : scores) {
    sum += s;
    if (s > max) max = s;
    if (s < min) min = s;
}
double average = (double) sum / scores.length;
```

### ArrayList (AP CS A)

A resizable array from the `java.util` package.

```java
ArrayList<String> names = new ArrayList<String>();
names.add("Alice");
names.add("Bob");
names.add(1, "Charlie");
String s = names.get(0);
names.set(0, "Alicia");
names.remove(2);
int size = names.size();
boolean found = names.contains("Bob");
int index = names.indexOf("Alice");
```

**Array vs ArrayList:**

| Feature         | Array          | ArrayList                |
| --------------- | -------------- | ------------------------ |
| Size            | Fixed          | Dynamic (resizable)      |
| Primitives      | Yes            | No (use wrapper classes) |
| `length`/`size` | `arr.length`   | `list.size()`            |
| Access          | `arr[i]`       | `list.get(i)`            |
| Modify          | `arr[i] = val` | `list.set(i, val)`       |
| Add element     | Not possible   | `list.add(val)`          |

### 2D Arrays

Arrays of arrays, useful for grids, matrices, and tables.

**Java:**

```java
int[][] grid = new int[3][4];
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

- `grid[row][col]`: row-major order.
- `grid.length`: number of rows.
- `grid[0].length`: number of columns.

```java
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[r].length; c++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println();
}
```

:::info[Example: Row and Column Sums]

```java
public static int[] rowSums(int[][] grid) {
    int[] sums = new int[grid.length];
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[r].length; c++) {
            sums[r] += grid[r][c];
        }
    }
    return sums;
}
```

:::

:::info[Example: Transpose a Matrix]

```java
public static int[][] transpose(int[][] matrix) {
    int rows = matrix.length;
    int cols = matrix[0].length;
    int[][] result = new int[cols][rows];
    for (int r = 0; r < rows; r++) {
        for (int c = 0; c < cols; c++) {
            result[c][r] = matrix[r][c];
        }
    }
    return result;
}
```

Time complexity: $O(r \times c)$ where $r$ is rows and $c$ is columns.

:::

## Lists in AP CSP

AP CSP uses generic list operations:

| Operation            | Description                                |
| -------------------- | ------------------------------------------ |
| `list[i]`            | Access element at index `i` (1-indexed)    |
| `list[i] <- v`       | Set element at index `i` to value `v`      |
| `INSERT(list, i, v)` | Insert `v` at index `i`, shifting right    |
| `APPEND(list, v)`    | Add `v` to the end of `list`               |
| `REMOVE(list, i)`    | Remove element at index `i`, shifting left |
| `LENGTH(list)`       | Number of elements in `list`               |

## Strings (AP CS A)

Strings are immutable sequences of characters.

### Common Methods

| Method                      | Description                 | Returns   |
| --------------------------- | --------------------------- | --------- |
| `str.length()`              | Number of characters        | `int`     |
| `str.substring(start)`      | From `start` to end         | `String`  |
| `str.substring(start, end)` | From `start` to `end - 1`   | `String`  |
| `str.indexOf(s)`            | First occurrence of `s`     | `int`     |
| `str.charAt(i)`             | Character at index `i`      | `char`    |
| `str.equals(other)`         | Content equality (not `==`) | `boolean` |
| `str.compareTo(other)`      | Lexicographic comparison    | `int`     |
| `str.toUpperCase()`         | All uppercase               | `String`  |
| `str.toLowerCase()`         | All lowercase               | `String`  |

### String Immutability

Strings cannot be modified after creation. Operations like `substring` and `toUpperCase` return
**new** String objects.

```java
String s = "hello";
s.toUpperCase();
s = s.toUpperCase();
```

**Why immutability matters.** Because strings are immutable, Java can share string literals. If two
variables hold the same string literal, they may point to the same object in memory.

:::info[Example: Reversing a String]

```java
public static String reverse(String s) {
    String result = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s.charAt(i);
    }
    return result;
}
```

Time complexity: $O(n^2)$ because string concatenation creates a new object each time. A more
efficient approach uses `StringBuilder` for $O(n)$.

```java
public static String reverseEfficient(String s) {
    StringBuilder sb = new StringBuilder(s);
    return sb.reverse().toString();
}
```

:::

## Data Analysis Concepts (CED Unit 3)

### Processing Data

1. **Filtering:** Selecting data that meets criteria.
2. **Mapping/Transforming:** Applying a function to each element.
3. **Reducing/Aggregating:** Combining data into a summary (sum, average, max, min).
4. **Sorting:** Arranging data in a specific order.

### Finding Minimum and Maximum

```
PROCEDURE findMin(list)
{
    min <- list[1]
    FOR EACH item IN list
    {
        IF (item < min)
        {
            min <- item
        }
    }
    RETURN(min)
}
```

**Proof of correctness.** The algorithm maintains the invariant: "min is the smallest element among
all elements seen so far." Initially, min = list[1], trivially true. At each step, if the new
element is smaller, we update min. By induction, after all elements, min is the smallest.
$\blacksquare$

### Computing the Average

```
PROCEDURE average(list)
{
    sum <- 0
    FOR EACH item IN list
    {
        sum <- sum + item
    }
    RETURN(sum / LENGTH(list))
}
```

**Edge case.** If the list is empty, division by zero occurs. A robust implementation should check
for this.

### Mode (Most Frequent Element)

```
PROCEDURE findMode(list)
{
    mode <- list[1]
    modeCount <- 1
    FOR i <- 2 TO LENGTH(list)
    {
        count <- 1
        FOR j <- 1 TO i - 1
        {
            IF (list[j] = list[i])
            {
                count <- count + 1
            }
        }
        IF (count > modeCount)
        {
            modeCount <- count
            mode <- list[i]
        }
    }
    RETURN(mode)
}
```

Time complexity: $O(n^2)$. A more efficient $O(n \log n)$ approach sorts the list first.

## Privacy and Security (CED Unit 4)

### Data Privacy

- **Personally identifiable information (PII):** Information that can identify an individual.
- **Anonymization:** Removing PII from datasets before analysis or sharing.
- **Metadata:** Data about data (e.g., timestamps, GPS coordinates in photos).

### Encryption

- **Symmetric encryption:** Same key for encryption and decryption (e.g., AES). Fast.
- **Asymmetric encryption:** Public key for encryption, private key for decryption (e.g., RSA).
  Slower, but no need to share a secret key.
- **Hashing:** One-way function that produces a fixed-size output. Not encryption.

**Salting passwords.** A salt is a random string added to the password before hashing. This prevents
rainbow table attacks.

### Digital Certificates and PKI

- Digital certificates bind a public key to an identity, verified by a certificate authority (CA).
- PKI manages the creation, distribution, and revocation of digital certificates.

## Additional Topics

### Searching in a Sorted ArrayList (AP CS A)

```java
public static int binarySearchList(ArrayList<Integer> list, int target) {
    int low = 0;
    int high = list.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int cmp = Integer.compare(list.get(mid), target);
        if (cmp == 0) return mid;
        else if (cmp < 0) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### For-Each Loop with ArrayList

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

for (String name : names) {
    System.out.println(name);
}
```

### Modifying ArrayList During Iteration

:::warning
Using `for-each` or an enhanced for loop, you cannot modify the ArrayList (add/remove)
during iteration. Use an Iterator or iterate backwards with an index.
:::

```java
for (int i = names.size() - 1; i >= 0; i--) {
    if (names.get(i).length() < 3) {
        names.remove(i);
    }
}
```

### The `Comparable` Interface (AP CS A)

```java
public class Student implements Comparable<Student> {
    private String name;
    private int grade;

    public int compareTo(Student other) {
        return this.grade - other.grade;
    }
}
```

### Big-O Analysis of ArrayList Operations

| Operation          | Average | Worst  |
| ------------------ | ------- | ------ |
| `get(i)`           | $O(1)$  | $O(1)$ |
| `add(item)`        | $O(1)$  | $O(n)$ |
| `add(i, item)`     | $O(n)$  | $O(n)$ |
| `remove(i)`        | $O(n)$  | $O(n)$ |
| `remove(Object)`   | $O(n)$  | $O(n)$ |
| `set(i, item)`     | $O(1)$  | $O(1)$ |
| `contains(Object)` | $O(n)$  | $O(n)$ |
| `indexOf(Object)`  | $O(n)$  | $O(n)$ |

### String Algorithms

**Reversing a string:**

```java
public static String reverse(String s) {
    String result = "";
    for (int i = s.length() - 1; i >= 0; i--) {
        result += s.charAt(i);
    }
    return result;
}
```

**Time complexity:** $O(n^2)$ because string concatenation creates a new object each time. A more
efficient approach uses `StringBuilder` for $O(n)$.

**Counting character frequency:**

```java
public static int[] charFrequency(String s) {
    int[] freq = new int[26];
    for (int i = 0; i < s.length(); i++) {
        char c = s.charAt(i);
        if (c >= 'a' && c <= 'z') {
            freq[c - 'a']++;
        }
    }
    return freq;
}
```

**Time complexity:** $O(n)$.

### Privacy Laws and Regulations

- **GDPR (EU):** Right to access, right to be forgotten, data portability.
- **CCPA (California):** Right to know, right to delete, right to opt out.
- **COPPA (US):** Protects children under 13 online.

### Data Breaches

A data breach is an incident where sensitive data is accessed without authorisation. Consequences
include identity theft, financial loss, and reputational damage.

**Prevention strategies:**

- Encrypt sensitive data at rest and in transit.
- Implement access controls (principle of least privilege).
- Regular security audits and penetration testing.
- Employee training on security awareness.
- Monitor for unusual access patterns.

### The `Math` class in Java (AP CS A)

```java
int abs = Math.abs(-5);           // 5
int max = Math.max(3, 7);          // 7
int min = Math.min(3, 7);          // 3
double sqrt = Math.sqrt(16.0);     // 4.0
int random = (int)(Math.random() * 10); // 0-9
int pow = (int)Math.pow(2, 10);    // 1024
```

### Wrapper Classes and Autoboxing (AP CS A)

| Primitive | Wrapper   |
| --------- | --------- |
| int       | Integer   |
| double    | Double    |
| boolean   | Boolean   |
| char      | Character |

```java
ArrayList<Integer> list = new ArrayList<>();
list.add(5);        // autoboxing: int -> Integer
int value = list.get(0);  // unboxing: Integer -> int
```

### Integer Division and Type Casting

```java
int a = 5 / 2;        // 2 (integer division)
double b = 5.0 / 2;   // 2.5 (double division)
int c = (int) 2.9;    // 2 (truncation)
double d = (double) 5 / 2;  // 2.5
```

:::warning
Always cast to `double` before division when you need a decimal result.
:::

## Practice Questions

1. Write a Java method that finds and returns the mode (most frequent element) in an array of
   integers.

2. Write a Java method `isSorted(int[] arr)` that returns `true` if the array is sorted in ascending
   order.

3. Given a 2D array representing a seating chart (0 = empty, 1 = occupied), write a method that
   counts the number of occupied seats.

4. Write pseudocode for a procedure that removes all occurrences of a given value from a list.

5. Explain the difference between symmetric and asymmetric encryption.

6. Write a Java method that takes a string and returns a new string with all vowels removed.

7. Given an `ArrayList` of student names, write code to find all names that start with "A".

8. Explain why `==` should not be used to compare String objects in Java.

9. Write a Java method that takes a 2D array and returns the sum of the main diagonal elements.

10. Explain what a salt is and why it is important for password security.

11. Write pseudocode for a procedure that finds the median value in a sorted list.

12. Explain the difference between anonymization and encryption.

13. Write a Java method `isPalindrome(String s)` that ignores case and non-alphanumeric characters.

14. Explain the difference between `ArrayIndexOutOfBoundsException` and `NullPointerException`. Give
    an example of code that causes each.

15. Write a Java method that finds the two largest values in an array in a single pass.

16. Write pseudocode for a procedure `mergeSorted(list1, list2)` that merges two sorted lists into
    one sorted list.

17. Explain what metadata is and give two examples where metadata could reveal sensitive
    information.

18. Write a Java method that counts the frequency of each character in a string and returns the
    results in a Map.

19. Explain the difference between an array and an ArrayList. Give three scenarios where you would
    use each.

20. Write a Java method that takes a 2D array and returns the transpose of the matrix. What is the
    time complexity?

### Iterating Over 2D Arrays

**Row-major traversal:**

```java
for (int r = 0; r < grid.length; r++) {
    for (int c = 0; c < grid[r].length; c++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println();
}
```

**Column-major traversal:**

```java
for (int c = 0; c < grid[0].length; c++) {
    for (int r = 0; r < grid.length; r++) {
        System.out.print(grid[r][c] + " ");
    }
    System.out.println();
}
```

### Finding Maximum in a 2D Array

```java
public static int findMax2D(int[][] grid) {
    int max = grid[0][0];
    for (int r = 0; r < grid.length; r++) {
        for (int c = 0; c < grid[r].length; c++) {
            if (grid[r][c] > max) {
                max = grid[r][c];
            }
        }
    }
    return max;
}
```

**Time complexity:** $O(r 	imes c)$ where $r$ is rows and $c$ is columns.

### Jagged Arrays (AP CS A)

A jagged array is a 2D array where rows have different lengths.

```java
int[][] jagged = {
    {1, 2, 3},
    {4, 5},
    {6, 7, 8, 9}
};
```

**Iterating over a jagged array:** Use `grid[r].length` for each row, not `grid[0].length`.

### Enhanced For Loop with 2D Arrays

```java
for (int[] row : grid) {
    for (int val : row) {
        System.out.print(val + " ");
    }
    System.out.println();
}
```

### The `Arrays` Class (AP CS A)

```java
import java.util.Arrays;

int[] arr = {5, 3, 8, 1};
Arrays.sort(arr);                    // [1, 3, 5, 8]
int idx = Arrays.binarySearch(arr, 5); // 2
String s = Arrays.toString(arr);       // "[1, 3, 5, 8]"
```

### Common String Methods in Detail

```java
String s = "Hello, World!";

s.length()              // 13
s.substring(7)          // "World!"
s.substring(0, 5)       // "Hello"
s.indexOf("World")      // 7
s.charAt(1)             // 'e'
s.equals("hello, world!")  // false (case-sensitive)
s.equalsIgnoreCase("hello, world!")  // true
s.compareTo("Hello")    // > 0 (positive)
s.toUpperCase()         // "HELLO, WORLD!"
s.toLowerCase()         // "hello, world!"
s.trim()                // removes leading/trailing whitespace
s.replace("World", "CS") // "Hello, CS!"
```

**String concatenation pitfall:**

```java
String result = "";
for (int i = 0; i < 10000; i++) {
    result += "x";  // Creates 10,000 String objects! O(n^2)
}
// Better:
StringBuilder sb = new StringBuilder();
for (int i = 0; i < 10000; i++) {
    sb.append("x");  // O(n)
}
String result = sb.toString();
```

### Comparing Data with Scatter Plots

Scatter plots are used to visualise the relationship between two variables.

- **Positive correlation:** As x increases, y increases.
- **Negative correlation:** As x increases, y decreases.
- **No correlation:** No visible pattern.

**Correlation does not imply causation.** Two variables may be correlated due to a confounding
variable, not because one causes the other.

### Data Cleaning

Real-world data is often messy and requires cleaning before analysis:

- **Handling missing values:** Remove records, impute with mean/median, or flag as unknown.
- **Removing duplicates:** Prevents double-counting in analysis.
- **Correcting formats:** Standardising date formats, fixing inconsistent capitalisation.
- **Outlier detection:** Identifying and deciding whether to include or exclude extreme values.

## Common Pitfalls

1. **Using `==` to compare strings.** Always use `.equals()` for content comparison.
2. **Off-by-one errors with `substring`.** `substring(a, b)` includes index `a` but excludes `b`.
3. **Confusing `ArrayList` size with array length.** `list.size()` vs `arr.length`.
4. **Forgetting that strings are immutable.** Methods return new strings; they do not modify the
   original.
5. **Not handling empty arrays or null inputs.**
6. **Confusing row and column indices in 2D arrays.** `grid[row][col]`.
7. **Integer division in Java.** `5 / 2` equals `2`, not `2.5`. Cast to `double`.
8. **Confusing `substring` parameters across languages.** Java `substring(1, 4)` returns chars at
   indices 1, 2, 3.

## Additional Topics

### Searching in a Sorted ArrayList (AP CS A)

```java
public static int binarySearchList(ArrayList<Integer> list, int target) {
    int low = 0;
    int high = list.size() - 1;
    while (low <= high) {
        int mid = low + (high - low) / 2;
        int cmp = Integer.compare(list.get(mid), target);
        if (cmp == 0) return mid;
        else if (cmp < 0) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}
```

### For-Each Loop with ArrayList

```java
ArrayList<String> names = new ArrayList<>();
names.add("Alice");
names.add("Bob");
names.add("Charlie");

for (String name : names) {
    System.out.println(name);
}
```

### Modifying ArrayList During Iteration

:::warning
Using `for-each` or an enhanced for loop, you cannot modify the ArrayList (add/remove)
during iteration. Use an Iterator or iterate backwards with an index.
:::

```java
for (int i = names.size() - 1; i >= 0; i--) {
    if (names.get(i).length() < 3) {
        names.remove(i);
    }
}
```

### The `Comparable` Interface (AP CS A)

```java
public class Student implements Comparable<Student> {
    private String name;
    private int grade;

    public int compareTo(Student other) {
        return this.grade - other.grade;
    }
}
```

### Big-O Analysis of ArrayList Operations

| Operation          | Average | Worst  |
| ------------------ | ------- | ------ |
| `get(i)`           | $O(1)$  | $O(1)$ |
| `add(item)`        | $O(1)$  | $O(n)$ |
| `add(i, item)`     | $O(n)$  | $O(n)$ |
| `remove(i)`        | $O(n)$  | $O(n)$ |
| `remove(Object)`   | $O(n)$  | $O(n)$ |
| `set(i, item)`     | $O(1)$  | $O(1)$ |
| `contains(Object)` | $O(n)$  | $O(n)$ |
| `indexOf(Object)`  | $O(n)$  | $O(n)$ |

### Privacy Laws and Regulations

- **GDPR (EU):** Right to access, right to be forgotten, data portability.
- **CCPA (California):** Right to know, right to delete, right to opt out.
- **COPPA (US):** Protects children under 13 online.

### Data Breaches

A data breach is an incident where sensitive data is accessed without authorisation. Consequences
include identity theft, financial loss, and reputational damage.

**Prevention strategies:**

- Encrypt sensitive data at rest and in transit.
- Implement access controls (principle of least privilege).
- Regular security audits and penetration testing.
- Employee training on security awareness.
- Monitor for unusual access patterns.

## Practice Questions

1. Write a Java method that finds and returns the mode (most frequent element) in an array of
   integers.

2. Write a Java method `isSorted(int[] arr)` that returns `true` if the array is sorted in ascending
   order.

3. Given a 2D array representing a seating chart (0 = empty, 1 = occupied), write a method that
   counts the number of occupied seats.

4. Write pseudocode for a procedure that removes all occurrences of a given value from a list.

5. Explain the difference between symmetric and asymmetric encryption.

6. Write a Java method that takes a string and returns a new string with all vowels removed.

7. Given an `ArrayList` of student names, write code to find all names that start with "A".

8. Explain why `==` should not be used to compare String objects in Java.

9. Write a Java method that takes a 2D array and returns the sum of the main diagonal elements.

10. Explain what a salt is and why it is important for password security.

11. Write pseudocode for a procedure that finds the median value in a sorted list.

12. Explain the difference between anonymization and encryption.

13. Write a Java method `isPalindrome(String s)` that ignores case and non-alphanumeric characters.

14. Explain the difference between `ArrayIndexOutOfBoundsException` and `NullPointerException`. Give
    an example of code that causes each.

15. Write a Java method that finds the two largest values in an array in a single pass.

16. Write pseudocode for a procedure `mergeSorted(list1, list2)` that merges two sorted lists into
    one sorted list.

17. Explain what metadata is and give two examples where metadata could reveal sensitive
    information.

18. Write a Java method that counts the frequency of each character in a string and returns the
    results in a Map.
