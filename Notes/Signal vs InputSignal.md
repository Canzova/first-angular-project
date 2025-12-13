# Angular Inputs vs Signal Inputs (Classic vs Signals)

This document combines and explains **both responses**:

1. The difference between `@Input()` and `input()`
2. Why change detection runs when a parent changes

---

## 1️⃣ Two Ways to Receive Data from Parent Components

Angular currently provides **two input APIs**:

1. **Classic property-based inputs** using `@Input()`
2. **Signal-based inputs : Immutable** using `input()` (Angular 16+)

They look similar but behave very differently internally.

---

## 2️⃣ Classic `@Input()` (Property-Based Inputs)

```ts
@Input({ required: true }) avatar!: string;
@Input({ required: true }) name!: string;

get imagePath() {
  return '../../assets/users/' + this.avatar;
}
```

### 🔹 How this works

* `avatar` and `name` are **normal class properties**
* Angular assigns values **after component creation**
* `!` tells TypeScript:

  > “Angular will initialize this later”

### 🔹 Characteristics

* Simple and familiar
* Not reactive
* Uses Angular's **zone-based change detection**
* Getters may run many times

---

## 3️⃣ Why Change Detection Runs with `@Input()`

### Example

**Parent component**

```html
<app-user [avatar]="selectedAvatar"></app-user>
```

```ts
selectedAvatar = 'user1.png';

changeAvatar() {
  this.selectedAvatar = 'user2.png';
}
```

### 🔔 What happens when `selectedAvatar` changes?

1. A user action occurs (click, timer, async event)
2. **Zone.js** detects the async task
3. Angular triggers **change detection**
4. Change detection starts at the **root component**
5. Angular walks **down the component tree**
6. When it reaches `app-user`:

   * `avatar` input is updated
   * The **entire child template is re-checked**

### ⚠️ Important

Angular does **not know**:

* Which variable changed
* Which template expression depends on it

So Angular plays safe and checks everything.

This means:

* Getters re-run
* Template expressions re-evaluate
* Performance may degrade in large apps

---

## 4️⃣ Signal-Based `input()` (Angular 16+)

```ts
avatar = input.required<string>();
name = input.required<string>();

imagePath = computed(() => {
  return '../../assets/users/' + this.avatar();
});
```

### 🔹 How this works

* `avatar` and `name` are **signals**
* Signals are **reactive values**
* Values are read by calling them: `avatar()`

### 🔹 Characteristics

* Fully reactive
* No `!` needed
* Works naturally with `computed()` and `effect()`
* Fine-grained updates

---

## 5️⃣ What Happens When Parent Changes a Signal Input

1. Parent updates the input value
2. Angular updates the **signal**
3. The signal system knows:

   * Which computations depend on `avatar()`
4. Only those computations re-run
5. Only DOM nodes using those values update

🚀 No full component re-check

---

## 6️⃣ Big Mental Difference

### `@Input()`

* Component-level checking
* "Something changed → check everything"

### `input()`

* Value-level reactivity
* "This value changed → update dependents only"

---

## 7️⃣ Why Parent Changes Affect Children

Angular uses a **component tree**:

```
AppComponent
 └── ParentComponent
     └── ChildComponent
```

When a parent changes:

* Children might receive new inputs
* So Angular must check children

This is **mandatory** in the classic input system.

---

## 8️⃣ `OnPush` vs Signals

Before signals, Angular introduced:

```ts
changeDetection: ChangeDetectionStrategy.OnPush
```

This reduced checks by:

* Only checking on input reference changes

But:

* Still no dependency tracking
* Still component-level checking

Signals solve this **properly**.

---

## 9️⃣ Side-by-Side Comparison

| Feature                 | `@Input()`    | `input()` (Signals) |
| ----------------------- | ------------- | ------------------- |
| Introduced              | Angular 2     | Angular 16          |
| Type                    | Property      | Signal              |
| Read value              | `this.avatar` | `this.avatar()`     |
| Reactive                | ❌ No          | ✅ Yes               |
| Dependency tracking     | ❌ No          | ✅ Yes               |
| Works with `computed()` | ❌ No          | ✅ Yes               |
| Needs `!`               | ✅ Yes         | ❌ No                |
| Performance             | Medium        | High                |
| Future-proof            | ⚠️ Legacy     | ✅ Recommended       |

---

## 🔑 Key Takeaway

> **`@Input()` triggers component-level change detection, while `input()` triggers value-level reactivity.**

---

## 🧠 Easy Rule to Remember

* `@Input()` → variable
* `input()` → signal
* `computed()` → derived signal

---

## ✅ Recommendation

* **New Angular 16+ projects** → use `input()`
* **Legacy codebases** → keep `@Input()`, migrate gradually

---
