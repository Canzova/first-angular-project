Below is **clean, correct Markdown** you can paste directly into a `.md` file.

---

# How to Make a Variable an Object in TypeScript

### `{ name: string; id: number }` vs `type` vs `interface`

In TypeScript, you can define an object shape in **three main ways**:

1. **Inline object type**
2. **`type` alias**
3. **`interface`**

All three define the **structure of an object**, but each has **different use cases**.

---

## 1. Inline Object Type (Quick & Local)

### Example

```ts
let user: { name: string; id: number };

user = {
  name: 'Alice',
  id: 1
};
```

### When to Use

* The object is **used only once**
* The structure is **simple**
* You don’t need reuse or extension

### Pros

* Simple and quick
* No extra declarations

### Cons

* Not reusable
* Harder to read if it grows

---

## 2. `type` Alias (Flexible & Powerful)

### Example

```ts
type User = {
  name: string;
  id: number;
};

let user: User = {
  name: 'Alice',
  id: 1
};
```

### When to Use

* You want **reuse**
* You need **union, intersection, or mapped types**
* You want to compose multiple types

### Advanced Example

```ts
type Admin = User & {
  role: 'admin';
};
```

### Pros

* Very flexible
* Works with unions and intersections
* Great for complex types

### Cons

* Cannot be re-opened (no declaration merging)

---

## 3. `interface` (Best for Object Contracts)

### Example

```ts
interface User {
  name: string;
  id: number;
}

let user: User = {
  name: 'Alice',
  id: 1
};
```

### When to Use

* Defining **object shapes**
* Creating **APIs, models, or class contracts**
* Working with **Angular services, inputs, outputs**

### Extension Example

```ts
interface Admin extends User {
  role: 'admin';
}
```

### Pros

* Readable and clean
* Supports extension
* Supports declaration merging

### Cons

* Less flexible than `type` for unions

---

## 4. `type` vs `interface` — Key Differences

| Feature                     | `type`       | `interface`   |
| --------------------------- | ------------ | ------------- |
| Object shape                | ✅            | ✅             |
| Extendable                  | ✅ (via `&`)  | ✅ (`extends`) |
| Union types                 | ✅            | ❌             |
| Declaration merging         | ❌            | ✅             |
| Preferred for objects       | ⚠️ Sometimes | ✅ Yes         |
| Preferred for complex logic | ✅ Yes        | ❌             |

---

## 5. Which One Should You Use?

### Use Inline Object Types when:

* The object is small
* Used only once
* Local to a function or variable

### Use `interface` when:

* Defining object structures
* Working with Angular components, services, APIs
* You expect extension or implementation

### Use `type` when:

* You need unions or intersections
* You are composing multiple types
* You need advanced type logic

---

## 6. Angular Best Practice

```ts
// ✅ Preferred
interface User {
  id: number;
  name: string;
}
```

```ts
@Input() user!: User;
```

---

## Summary

* Inline object → **quick & local**
* `interface` → **object contracts & models**
* `type` → **complex and flexible typing**

---

## Final Rule of Thumb

> **If it looks like an object → use `interface`**
> **If it behaves like a type → use `type`**

---