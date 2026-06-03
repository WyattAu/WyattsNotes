---
title: 'Algorithms -- Diagnostic Tests'
description:
  'Scottish Highers Computer Science Algorithms -- Diagnostic Tests notes covering key definitions,
  core concepts, worked examples, and practice questions for in-depth revision.'
slug: diag-algorithms
hide_table_of_contents: true
---

# Algorithms -- Diagnostic Tests

## Unit Tests

### UT-1: Computational Thinking and Problem Solving

**Question:**

(a) Define the four pillars of computational thinking: decomposition, pattern recognition,
abstraction, and algorithmic thinking. Give an example of each in the context of developing a
program to manage a school library system.

(b) A program needs to determine whether a year is a leap year. The rules are: a year is a leap year
if it is divisible by 4, except if it is divisible by 100, unless it is also divisible by 400. Write
pseudocode for this algorithm.

(c) Explain the difference between an algorithmic approach and a heuristic approach to problem
solving. Give an example of each.

(d) Using the library system scenario, explain how abstraction might be used to simplify the design.
What details would be abstracted away and what would be kept?

**Solution:**

(a)

- **Decomposition**: Breaking a complex problem into smaller, manageable sub-problems. Example: the
  library system can be broken down into sub-problems: managing book records, managing user
  accounts, tracking loans, and handling reservations.
- **Pattern recognition**: Identifying similarities or patterns in problems. Example: the process of
  adding a new book and adding a new user both follow the same pattern: validate input, check for
  duplicates, create record, store in database.
- **Abstraction**: Removing unnecessary details to focus on essential features. Example: when
  designing the book record, the system stores title, author, ISBN, and availability, but not the
  colour of the book cover or the shelf position.
- **Algorithmic thinking**: Developing a step-by-step sequence of instructions to solve a problem.
  Example: writing the logic for the loan process: check book availability, check user has no
  overdue books, record the loan, update book status.

(b)

```
FUNCTION isLeapYear(year) RETURNS Boolean
    IF year % 400 == 0 THEN
        RETURN True
    ELSE IF year % 100 == 0 THEN
        RETURN False
    ELSE IF year % 4 == 0 THEN
        RETURN True
    ELSE
        RETURN False
    ENDIF
ENDFUNCTION
```

Note: the order of checks matters. Divisible by 400 is checked first, then divisible by 100, then
divisible by 4.

(c) An **algorithmic approach** follows a defined, step-by-step procedure that guarantees a correct
solution. Example: bubble sort will always correctly sort a list, given enough time. A **heuristic
approach** uses a rule of thumb or shortcut that does not guarantee an optimal solution but finds a
good solution quickly. Example: a chess-playing program using a heuristic to evaluate board
positions rather than exhaustively calculating every possible move sequence.

(d) Abstraction in the library system involves creating models of the key entities (Book, User,
Loan) that capture only the essential data and behaviour. Details that would be abstracted away
include: the physical appearance of books, the specific names of librarians, the brand of computer
hardware, and the physical layout of the library. Details that would be kept include: book metadata
(title, author, ISBN, genre), user data (name, ID, membership status), and loan logic (borrow date,
return date, overdue status). This simplification allows the programmer to focus on the logic of the
system without being overwhelmed by irrelevant details.

---

### UT-2: Data Structures

**Question:**

(a) Describe the following data structures and give one use case for each: array, linked list,
stack, queue.

(b) Explain the difference between a static array and a dynamic array. State one advantage and one
disadvantage of each.

(c) Draw a diagram showing a stack containing the values 3, 7, and 1 (with 1 being the most recently
pushed). Show the effect of a PUSH(5) operation followed by a POP operation.

(d) Explain why a queue is described as a FIFO data structure. Describe a real-world system that
uses a queue and explain how it maps to the enqueue and dequeue operations.

**Solution:**

(a)

- **Array**: a collection of elements stored in contiguous memory locations, accessed by index. Use
  case: storing a fixed list of student exam scores where random access by index is needed.
- **Linked list**: a collection of nodes where each node contains data and a pointer (reference) to
  the next node. Use case: implementing a playlist where songs can be easily inserted or removed
  without shifting other elements.
- **Stack**: a last-in, first-out (LIFO) data structure where elements are added and removed from
  the same end (the top). Use case: implementing the undo feature in a text editor -- each action is
  pushed onto a stack, and undoing pops the most recent action.
- **Queue**: a first-in, first-out (FIFO) data structure where elements are added at the rear and
  removed from the front. Use case: a print queue where print jobs wait in order of submission.

(b) A **static array** has a fixed size determined at creation and cannot be resized. Advantage:
memory is allocated once and access is fast ($O(1)$). Disadvantage: if the array is too small, it
cannot accommodate more elements; if too large, memory is wasted. A **dynamic array** can resize
itself automatically when more space is needed (typically by allocating a larger array and copying
elements). Advantage: flexible size. Disadvantage: resizing has a time cost ($O(n)$ when resizing),
and the underlying memory may need to be reallocated.

(c) Stack (top on the right):

```
Before operations:  [3, 7, 1]  -- top is 1

After PUSH(5):      [3, 7, 1, 5]  -- top is 5

After POP:           [3, 7, 1]  -- top is 1 (5 is returned and removed)
```

(d) A queue is **FIFO** (first-in, first-out) because the first element added to the queue is the
first element to be removed. This mirrors real-world queuing behaviour. A real-world system: a
customer service call centre where callers are placed in a holding queue. The first caller to ring
is the first to be connected to an agent. **Enqueue** maps to a caller joining the queue (added to
the rear). **Dequeue** maps to a caller being connected to an agent (removed from the front).

---

### UT-3: Algorithm Complexity and Efficiency

**Question:**

(a) Define time complexity and space complexity. Explain the difference between worst-case,
average-case, and best-case time complexity.

(b) State the time complexity (in big-O notation) of the following operations: accessing an element
in an array by index, inserting at the beginning of an unsorted linked list, searching for a value
in a balanced binary search tree, and performing bubble sort on an array of $n$ elements.

(c) Two algorithms solve the same problem. Algorithm A has time complexity $O(n^2)$ and Algorithm B
has time complexity $O(n \log n)$. For $n = 1000$, approximately how many more operations does
Algorithm A perform compared to Algorithm B?

(d) Explain what is meant by a constant-time operation ($O(1)$). Give three examples of operations
that run in constant time.

**Solution:**

(a) **Time complexity** is a measure of how the running time of an algorithm grows as the size of
the input ($n$) increases. **Space complexity** is a measure of how much additional memory an
algorithm uses as the input size grows.

- **Best-case**: the minimum number of operations required (for the most favourable input).
- **Worst-case**: the maximum number of operations required (for the least favourable input).
- **Average-case**: the expected number of operations averaged over all possible inputs.

Big-O notation typically describes the worst-case time complexity.

(b)

- Accessing an element in an array by index: $O(1)$
- Inserting at the beginning of an unsorted linked list: $O(1)$ (update one pointer)
- Searching for a value in a balanced binary search tree: $O(\log n)$
- Bubble sort: $O(n^2)$

(c) Algorithm A: $O(n^2) = 1000^2 = 1,000,000$ operations (approximately). Algorithm B:
$O(n \log n) = 1000 \times 10 \approx 10,000$ operations. Algorithm A performs approximately
$1,000,000 / 10,000 = 100$ times more operations than Algorithm B for $n = 1000$.

(d) A **constant-time operation** ($O(1)$) takes the same amount of time regardless of the size of
the input. The running time does not grow with $n$. Three examples: accessing an array element by
index, pushing an element onto a stack, and checking whether a queue is empty.

---

## Integration Tests

### IT-1: Designing a Software Solution

**Question:**

(a) A taxi company needs a program to manage bookings. The system must store customer details,
record each booking, and assign taxis in the order bookings are received. Identify the most
appropriate data structure for managing the queue of bookings and justify your choice.

(b) Write pseudocode for a procedure that processes the booking queue: it should dequeue the next
booking, check if a taxi is available, and if so assign the taxi and output a confirmation message.
If no taxi is available, the booking should be re-enqueued.

(c) The company also wants to store a list of all completed journeys for reporting purposes. Explain
which data structure would be most suitable and why.

(d) Evaluate whether a linked list or an array would be more appropriate for storing the customer
details. Consider the operations that need to be performed: searching by customer ID, adding new
customers, and removing customers who no longer use the service.

**Solution:**

(a) A **queue** is the most appropriate data structure for managing bookings because taxis should be
assigned in the order bookings are received (FIFO). The first customer to book should be the first
to get a taxi, ensuring fairness. Enqueue when a booking is received; dequeue when assigning a taxi.

(b)

```
PROCEDURE processBookingQueue()
    WHILE bookingQueue is not empty AND taxiAvailable = True
        booking = DEQUEUE(bookingQueue)
        OUTPUT "Taxi assigned to: ", booking.customerName
        OUTPUT "Pickup at: ", booking.pickupAddress
    ENDWHILE
    IF bookingQueue is not empty AND taxiAvailable = False
        OUTPUT "No taxis available. Bookings waiting: ", SIZE(bookingQueue)
    ENDIF
ENDPROCEDURE
```

(c) A **dynamic array** (or a linked list) would be most suitable for storing completed journeys. An
array allows efficient iteration for reporting (generating daily, weekly, or monthly reports). Since
completed journeys only grow over time and are not removed frequently, the contiguous memory layout
of an array provides fast access. If frequent insertion at any position were needed, a linked list
would be better, but for append-only storage with periodic reporting, an array is more efficient.

(d) **Linked list** advantages: efficient insertion and deletion ($O(1)$ when the node is known), no
need to resize. **Array** advantages: fast random access by index ($O(1)$), efficient searching with
binary search if sorted ($O(\log n)$). Since searching by customer ID is a primary operation, an
array (sorted by ID) enables binary search, which is faster than the $O(n)$ linear search required
for a linked list. However, if customers are frequently added and removed, a linked list avoids the
$O(n)$ cost of shifting elements in an array. The best choice depends on which operations are
performed most frequently: if searching dominates, use an array; if insertion and deletion dominate,
use a linked list.

---

### IT-2: Algorithm Analysis and Optimisation

**Question:**

(a) A sorting algorithm makes the following number of comparisons for inputs of different sizes:

| $n$ | Comparisons |
| --- | ----------- |
| 10  | 45          |
| 20  | 190         |
| 30  | 435         |
| 50  | 1225        |

Determine the time complexity of this algorithm from the data. Show your working.

(b) An algorithm processes $n$ items and has time complexity $O(n \log_2 n)$. If it takes 10 seconds
to process 1,000 items, estimate how long it would take to process 1,000,000 items.

(c) Explain the trade-off between time complexity and space complexity. Give an example of an
algorithm that achieves faster time complexity at the cost of increased space complexity.

(d) A developer chooses an algorithm with $O(n^2)$ time complexity over one with $O(n \log n)$
because the constant factors of the $O(n^2)$ algorithm are much smaller. Under what circumstances
might this be a reasonable decision?

**Solution:**

(a) If the complexity is $O(n^2)$, then comparisons $\approx k \cdot n^2$. Testing: for $n = 10$,
$k = 45/100 = 0.45$. For $n = 20$, $k = 190/400 = 0.475$. For $n = 30$, $k = 435/900 = 0.483$. For
$n = 50$, $k = 1225/2500 = 0.49$. The ratio comparisons$/n^2$ is approximately constant at around
$0.48$--$0.49$, confirming the time complexity is $O(n^2)$. This is consistent with an algorithm
such as bubble sort or selection sort.

(b) Time $T = k \cdot n \log_2 n$. For $n = 1000$:
$T = 10 = k \cdot 1000 \cdot \log_2(1000) = k \cdot 1000 \cdot 9.97 \approx k \cdot 9970$. So
$k \approx 10/9970 \approx 0.001003$.

For $n = 1,000,000$:
$T = 0.001003 \cdot 1000000 \cdot \log_2(1000000) = 0.001003 \cdot 1000000 \cdot 19.93 \approx 0.001003 \cdot 19930000 \approx 19993$
seconds $\approx 333$ minutes $\approx 5.6$ hours.

(c) The **time-space trade-off** refers to the principle that an algorithm can often be made faster
by using more memory, or made more memory-efficient by being slower. An example is **merge sort**,
which has $O(n \log n)$ time complexity but requires $O(n)$ additional space for the temporary
arrays used during merging. In contrast, an in-place sort like insertion sort uses $O(1)$ additional
space but has $O(n^2)$ time complexity.

(d) This decision is reasonable when $n$ is small. For small datasets, the constant factors matter
more than the asymptotic growth rate. For example, if $n = 50$ and Algorithm A ($O(n^2)$) has a
constant factor of 1 (giving $50^2 = 2500$ operations) while Algorithm B ($O(n \log n)$) has a
constant factor of 100 (giving $100 \times 50 \times 5.6 = 28000$ operations), Algorithm A would be
faster despite having worse asymptotic complexity. However, for large $n$, the $O(n^2)$ algorithm
will eventually be slower regardless of constant factors.

## Summary

The key principles covered in this topic are linked in the sub-pages above. Focus on understanding
the definitions, applying the formulas or frameworks, and evaluating strengths and limitations of
each approach.

## Worked Examples

Worked examples demonstrating the application of key concepts are covered in the detailed sub-pages
linked above.

## Common Pitfalls

- Confusing LIFO (stack) with FIFO (queue): remember that a stack is last-in first-out, and a queue
  is first-in first-out.
- Assuming big-O notation gives exact operation counts: it describes the growth rate, not the
  precise number of operations.
- Choosing data structures based on theoretical complexity alone without considering practical
  factors such as constant factors, cache locality, and implementation overhead.
- Forgetting that best-case and worst-case complexity can differ dramatically: for example, linear
  search is $O(1)$ in the best case and $O(n)$ in the worst case.
