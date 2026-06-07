---
title: Synchronisation
tags:
  - Computing
  - University
---

### 3.1 The Critical Section Problem

Consider $n$ processes sharing a resource. The **critical section** is the code segment accessing
the Resource. A correct solution must satisfy:

1. **Mutual exclusion:** At most one process executes in its critical section at any time.
2. **Progress:** If no process is in its critical section and some wish to enter, only those not in
   their remainder section participate, and the decision cannot be postponed indefinitely.
3. **Bounded waiting:** A bound exists on the number of times other processes enter their critical
   sections after a process has requested entry.

### 3.2 Hardware Support

**Test-and-Set.** Atomic read-and-set instruction:

```c
boolean test_and_set(boolean *target) {
    boolean rv = *target;
    *target = true;
    return rv;
}
```

**Compare-and-Swap (CAS).** Atomically compare and conditionally write:

```c
boolean compare_and_swap(int *value, int expected, int new_value) {
    int temp = *value;
    if (*value == expected) {
        *value = new_value;
    }
    return temp == expected;
}
```

These instructions are the foundation for lock-free and wait-free data structures.

### 3.3 Mutexes

A **mutex** provides exclusive access to a shared resource.

```c
pthread_mutex_t lock;
pthread_mutex_init(&lock, NULL);

pthread_mutex_lock(&lock);
// critical section
pthread_mutex_unlock(&lock);
pthread_mutex_destroy(&lock);
```

**Spinlocks.** A mutex that busy-waits. Useful when the expected wait time is shorter than the
Context-switch overhead.

```c
void spinlock_acquire(volatile int *lock) {
    while (__atomic_test_and_set(lock, __ATOMIC_ACQUIRE)) {
        // busy wait
    }
}

void spinlock_release(volatile int *lock) {
    __atomic_clear(lock, __ATOMIC_RELEASE);
}
```

### 3.4 Semaphores

A **semaphore** is an integer variable $S$ accessed only through two atomic operations:

- **Wait (P):** $P(S)$: while $S \leq 0$ do no-op; $S \leftarrow S - 1$.
- **Signal (V):** $V(S)$: $S \leftarrow S + 1$.

**Counting semaphore:** $S$ takes any non-negative integer. Controls access to a resource with
Multiple instances.

**Binary semaphore:** $S \in \{0, 1\}$. Functionally similar to a mutex, but can be signalled by any
Process (not just the owner).

```c
sem_t mutex;
sem_init(&mutex, 0, 1);

sem_wait(&mutex);
// critical section
sem_post(&mutex);
```

**Theorem 3.1.** Semaphores can implement mutual exclusion correctly if initialised to 1 and used
With `wait` on entry and `signal` on exit.

_Proof._ If the semaphore is 1, the first `wait` decrements it to 0 and enters. Any concurrent
`wait` finds $S = 0$ and blocks. When the first process signals, $S$ becomes 1, waking exactly one
Blocked process. $\blacksquare$

### 3.5 Monitors and Condition Variables

A **monitor** is a high-level synchronisation construct encapsulating shared data and operations,
Allowing only one process to execute within it at any time.

A **condition variable** allows a process to wait for a condition inside a monitor:

```c
pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t cond = PTHREAD_COND_INITIALIZER;
int buffer_count = 0;

// Producer
pthread_mutex_lock(&mutex);
while (buffer_count == BUFFER_SIZE) {
    pthread_cond_wait(&cond, &mutex);
}
buffer_count++;
pthread_cond_signal(&cond);
pthread_mutex_unlock(&mutex);

// Consumer
pthread_mutex_lock(&mutex);
while (buffer_count == 0) {
    pthread_cond_wait(&cond, &mutex);
}
buffer_count--;
pthread_cond_signal(&cond);
pthread_mutex_unlock(&mutex);
```

`pthread_cond_wait` atomically releases the mutex and blocks. On wakeup, it re-acquires the mutex.

### 3.6 Classic Synchronisation Problems

**Producer-Consumer (Bounded Buffer).** A producer writes items to a shared buffer of size $N$; a
Consumer reads them.

```c
sem_t empty, full, mutex;
sem_init(&empty, 0, N);
sem_init(&full, 0, 0);
sem_init(&mutex, 0, 1);

void producer() {
    while (true) {
        item = produce_item();
        sem_wait(&empty);
        sem_wait(&mutex);
        insert_item(item);
        sem_post(&mutex);
        sem_post(&full);
    }
}

void consumer() {
    while (true) {
        sem_wait(&full);
        sem_wait(&mutex);
        item = remove_item();
        sem_post(&mutex);
        sem_post(&empty);
        consume_item(item);
    }
}
```

**Readers-Writers.** Multiple readers access concurrently; writers require exclusive access.

```c
sem_t rw_mutex, mutex;
int read_count = 0;
sem_init(&rw_mutex, 0, 1);
sem_init(&mutex, 0, 1);

void writer() {
    sem_wait(&rw_mutex);
    // write to shared data
    sem_post(&rw_mutex);
}

void reader() {
    sem_wait(&mutex);
    read_count++;
    if (read_count == 1) sem_wait(&rw_mutex);
    sem_post(&mutex);
    // read shared data
    sem_wait(&mutex);
    read_count--;
    if (read_count == 0) sem_post(&rw_mutex);
    sem_post(&mutex);
}
```

**Dining Philosophers.** Five philosophers, five forks between them. Each needs two forks to eat.
Naive solution (one semaphore per fork) deadlocks when all pick up their left fork.

Solutions:

1. **Resource hierarchy:** Pick up lower-numbered fork first.
2. **Arbitrator:** A single semaphore limits concurrent eaters to four.
3. **Chandy-Misra:** Forks are "owned" by a philosopher; others request via messages.

```c
sem_t forks[5];
sem_t room;
for (int i = 0; i < 5; i++) sem_init(&forks[i], 0, 1);
sem_init(&room, 0, 4);

void philosopher(int i) {
    while (true) {
        think();
        sem_wait(&room);
        sem_wait(&forks[i]);
        sem_wait(&forks[(i + 1) % 5]);
        eat();
        sem_post(&forks[(i + 1) % 5]);
        sem_post(&forks[i]);
        sem_post(&room);
    }
}
```

:::caution Common Pitfall Always use a `while` loop (not `if`) when checking conditions with
condition variables. Spurious Wakeups can cause `pthread_cond_wait()` to return without the
condition being signalled. The loop Re-checks the condition after every wakeup.
:::


