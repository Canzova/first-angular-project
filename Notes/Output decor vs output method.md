# Angular Output vs `output()` (Simple & Clear)

This document explains **how `@Output()` and `output()` are similar** and **when to use which** — in the simplest possible way.

---

## 1️⃣ Purpose (Same for Both)

Both syntaxes are used to:

> **Send data from a child component to a parent component**

Direction:

```
Child → Parent
```

---

## 2️⃣ Classic Way: `@Output()` + `EventEmitter`

```ts
@Output() select = new EventEmitter<string>();
```

### How it works

* `select` is an **EventEmitter**
* Child emits data using:

  ```ts
  this.select.emit(value);
  ```
* Parent listens using:

  ```html
  <app-child (select)="onSelect($event)"></app-child>
  ```

### Characteristics

* Old and well-known syntax
* Works in all Angular versions
* Not reactive
* `EventEmitter` is Angular-specific

---

## 3️⃣ Modern Way: `output()` (Angular 16+)

```ts
select = output<string>();
```

### How it works

* `select` is a **signal-based output**
* Child emits data using:

  ```ts
  this.select.emit(value);
  ```
* Parent listens **the same way**:

  ```html
  <app-child (select)="onSelect($event)"></app-child>
  ```

  **event will have the value emittef from child**

### Characteristics

* New, modern API
* Designed for **signals**
* Cleaner syntax
* Enforces unidirectional data flow

---

## 4️⃣ How They Are Similar

| Feature                      | `@Output()` | `output()` |
| ---------------------------- | ----------- | ---------- |
| Child → Parent communication | ✅           | ✅          |
| Uses `(event)` binding       | ✅           | ✅          |
| Uses `.emit()`               | ✅           | ✅          |
| Parent code changes          | ❌ No        | ❌ No       |

➡️ **From the parent’s perspective, they are identical.**

---

## 5️⃣ Key Difference (One Line)

> **@Output() and output() are both event-based; output() is just a decorator-free, modern API.**

---

## 6️⃣ When to Use Which

### ✅ Use `@Output()` when:

* Working with **Angular < 16**
* Maintaining **legacy code**
* Not using signals at all

---

### ✅ Use `output()` when:

* Angular **16+**
* Using **signals (`input()`, `computed()`)**
* Writing **new components**
* Want cleaner, future-proof code

---

## 7️⃣ Simple Rule to Remember 🧠

```
Old Angular → @Input() + @Output()
New Angular → input() + output()
```

---

## 8️⃣ Final Takeaway

> **Both do the same job, but `output()` fits naturally with the new signals-based Angular architecture.**

Use `output()` for new code.
Use `@Output()` only for legacy support.

---