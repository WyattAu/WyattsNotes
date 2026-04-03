---
title: Weak Pointers and Cyclic Reference Breaking
date: 2026-04-03T00:00:00.000Z
tags:
  - Cpp
categories:
  - Cpp
slug: weak-pointers-and-cyclic-references
---

# Weak Pointers and Cyclic Reference Breaking

`std::weak_ptr` is a non-owning observer of a `shared_ptr`-managed object. Its primary use case is
breaking reference cycles in graph structures — the most common source of memory leaks in
`shared_ptr`-heavy codebases.

## 4.1 Definition

`std::weak_ptr<T>` is a non-owning observer of a `shared_ptr`-managed object. It does not
participate in the reference count that determines when the object is destroyed. It holds a **weak
count** in the control block [N4950 §20.11.3].

## 4.2 The `lock()` Method

To access the object through a `weak_ptr`, you must call `lock()`, which returns a `shared_ptr`. If
the object has already been destroyed, `lock()` returns an empty `shared_ptr`:

```cpp
#include <memory>
#include <iostream>

void weak_ptr_demo() {
    auto sp = std::make_shared<int>(42);
    std::weak_ptr<int> wp = sp;

    if (auto locked = wp.lock()) {
        std::cout << "value: " << *locked << "\n";  // 42
        std::cout << "use_count: " << locked.use_count() << "\n";  // 2
    }
    // locked destroyed, use_count back to 1

    sp.reset();  // Destroy the int; strong_count reaches 0

    if (wp.lock()) {
        std::cout << "still alive\n";
    } else {
        std::cout << "object was destroyed\n";  // This branch
    }
}
```

## 4.3 Breaking Cyclic References

The primary use case for `weak_ptr` is breaking reference cycles. Consider a parent-child tree
structure:

```cpp
#include <memory>
#include <iostream>
#include <string>

struct Node;
using NodePtr = std::shared_ptr<Node>;

struct Node {
    std::string name;
    std::weak_ptr<Node> parent;  // weak: avoids cycle
    std::vector<NodePtr> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(NodePtr child) {
        child->parent = /* need shared_ptr to this */;
        children.push_back(std::move(child));
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};
```

The problem: inside `add_child`, we need a `shared_ptr` to `this` to set `child->parent`. But `this`
is a raw pointer. Constructing a `shared_ptr` from `this` would create a **second** control block,
leading to double-free.

The solution is `std::enable_shared_from_this`:

```cpp
#include <memory>
#include <iostream>
#include <string>
#include <vector>

struct Node : std::enable_shared_from_this<Node> {
    std::string name;
    std::weak_ptr<Node> parent;
    std::vector<std::shared_ptr<Node>> children;

    explicit Node(std::string n) : name(std::move(n)) {}

    void add_child(std::shared_ptr<Node> child) {
        child->parent = shared_from_this();  // Safe: returns shared_ptr to *this
        children.push_back(std::move(child));
    }

    void print_tree(int depth = 0) const {
        std::cout << std::string(depth * 2, ' ') << name << "\n";
        for (const auto& child : children) {
            child->print_tree(depth + 1);
        }
    }

    ~Node() {
        std::cout << "~Node(" << name << ")\n";
    }
};

int main() {
    auto root = std::make_shared<Node>("root");
    auto left = std::make_shared<Node>("left");
    auto right = std::make_shared<Node>("right");

    root->add_child(left);
    root->add_child(right);

    root->print_tree();
    // root goes out of scope; strong_count reaches 0; entire tree is destroyed.
    // No memory leak because parent links are weak_ptr.
}
```

Output:

```
root
  left
  right
~Node(right)
~Node(left)
~Node(root)
```

:::warning `std::enable_shared_from_this` only works when the object is **originally** managed by a
`shared_ptr`. If the object is stack-allocated or managed by a `unique_ptr`, calling
`shared_from_this()` is undefined behavior. :::

:::info Relevance Reference cycles are the most common memory leak in `shared_ptr`-heavy codebases.
If you use `shared_ptr` for graph structures (trees, DAGs, observer patterns), always use `weak_ptr`
for back-references. If you can, prefer `unique_ptr` with raw non-owning pointers for tree
structures — the parent owns the children; children hold raw pointers to the parent. :::

## See Also

- [Shared Ownership (std::shared_ptr) and Control Block](3_shared_ptr.md)
- [Common Pitfalls](5_custom_deleters.md)
