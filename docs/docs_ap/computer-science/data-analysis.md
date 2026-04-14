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
```

- Automatically resizes.
- Stores objects (not primitives).
- Common methods: `add`, `get`, `set`, `remove`, `size`, `indexOf`, `contains`.

### 2D Arrays

Arrays of arrays, useful for grids, matrices, and tables.

**Java:**

```java
int[][] grid = new int[3][4];
int[][] matrix = {{1, 2, 3}, {4, 5, 6}, {7, 8, 9}};
```

- `grid[row][col]`: row-major order.
- `grid.length`: number of rows.
- `grid[0].length`: number of columns (assuming rectangular).
- Iterating:

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

## Lists in AP CSP

AP CSP uses generic list operations:

| Operation            | Description                                |
| -------------------- | ------------------------------------------ |
| `list[i]`            | Access element at index `i` (1-indexed)    |
| `list[i] ← v`        | Set element at index `i` to value `v`      |
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
s.toUpperCase();  // Returns "HELLO" but s is still "hello"
s = s.toUpperCase();  // Now s is "HELLO"
```

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

:::

## Data Analysis Concepts (CED Unit 3)

### Processing Data

Computers process data to extract information and make decisions. Key operations:

1. **Filtering:** Selecting data that meets criteria.
2. **Mapping/Transforming:** Applying a function to each element.
3. **Reducing/Aggregating:** Combining data into a summary (sum, average, max, min).
4. **Sorting:** Arranging data in a specific order.

### Finding Minimum and Maximum

```
PROCEDURE findMin(list)
{
    min ← list[1]
    FOR EACH item IN list
    {
        IF (item < min)
        {
            min ← item
        }
    }
    RETURN(min)
}
```

### Computing the Average

```
PROCEDURE average(list)
{
    sum ← 0
    FOR EACH item IN list
    {
        sum ← sum + item
    }
    RETURN(sum / LENGTH(list))
}
```

### Counting Occurrences

```
PROCEDURE countIf(list, condition)
{
    count ← 0
    FOR EACH item IN list
    {
        IF (condition(item))
        {
            count ← count + 1
        }
    }
    RETURN(count)
}
```

## Privacy and Security (CED Unit 4)

### Data Privacy

- **Personally identifiable information (PII):** Information that can identify an individual (name,
  SSN, address, etc.).
- **Anonymization:** Removing PII from datasets.
- **Metadata:** Data about data (e.g., timestamps, GPS coordinates in photos).

### Encryption

- **Symmetric encryption:** Same key for encryption and decryption (e.g., AES).
- **Asymmetric encryption:** Public key for encryption, private key for decryption (e.g., RSA).
- **Hashing:** One-way function that produces a fixed-size output. Used for password storage (hash +
  salt).

### Digital Certificates and PKI

- Digital certificates bind a public key to an identity, verified by a certificate authority (CA).
- Public Key Infrastructure (PKI) manages the creation, distribution, and revocation of digital
  certificates.

## Common Pitfalls

1. **Using `==` to compare strings.** Always use `.equals()` for content comparison. `==` compares
   references (memory addresses).
2. **Off-by-one errors with `substring`.** `substring(a, b)` includes index `a` but excludes `b`.
3. **Confusing `ArrayList` size with array length.** Use `list.size()` for ArrayList and
   `arr.length` for arrays.
4. **Forgetting that strings are immutable.** String methods return new strings; they do not modify
   the original.
5. **Not handling empty arrays or null inputs.** Always check boundary conditions.
6. **Confusing row and column indices in 2D arrays.** `grid[row][col]` -- row first, then column.
7. **Integer division in Java.** `5 / 2` equals `2`, not `2.5`. Cast to `double` if needed.

## Practice Questions

1. Write a Java method that finds and returns the mode (most frequent element) in an array of
   integers.

2. Write a Java method `isSorted(int[] arr)` that returns `true` if the array is sorted in ascending
   order.

3. Given a 2D array representing a seating chart (0 = empty, 1 = occupied), write a method that
   counts the number of occupied seats.

4. Write pseudocode for a procedure that removes all occurrences of a given value from a list.

5. Explain the difference between symmetric and asymmetric encryption. When would you use each?

6. Write a Java method that takes a string and returns a new string with all vowels removed.

7. Given an `ArrayList` of student names, write code to find all names that start with the letter
   "A" and store them in a new `ArrayList`.

8. Explain why `==` should not be used to compare String objects in Java, and give an example where
   it would give an incorrect result.
