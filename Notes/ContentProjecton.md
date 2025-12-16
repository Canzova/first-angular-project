
# Using `ng-content` to Wrap Any Component with Styles in Angular

`ng-content` is Angular’s mechanism for **content projection**. It allows you to create a **wrapper component** that can accept and display **any inner content** (including other components) while applying consistent styles or layout.

---

## 1️⃣ What problem does `ng-content` solve?

You want a reusable wrapper (card, layout, panel, etc.) that:

- Wraps **any component or HTML**
- Applies **common styles or structure**
- Does **not care** about what content is inside

Example usage:

```html
<app-card>
  <app-user-profile></app-user-profile>
</app-card>

<app-card>
  <h2>Title</h2>
  <p>Description</p>
</app-card>
````

Here, `<app-card>` is just a styled container.

---

## 2️⃣ Basic `ng-content` Example

### Step 1: Create a wrapper component

```bash
ng generate component card
```

### `card.component.html`

```html
<div class="card">
  <ng-content></ng-content>
</div>
```

### `card.component.css`

```css
.card {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

---

### Step 2: Use it to wrap any content

```html
<app-card>
  <app-user></app-user>
</app-card>

<app-card>
  <h3>Important Info</h3>
  <p>This is projected content</p>
</app-card>
```

✔ Angular inserts the inner content where `<ng-content>` is placed.

---

## 3️⃣ How `ng-content` Works (Mental Model)

Think of `<ng-content>` as a **placeholder**:

```html
<ng-content></ng-content>
```

Meaning:

> “Put whatever is inside my component tag right here.”

Angular **moves DOM nodes**, it does not copy them.

---

## 4️⃣ Styling Projected Content

### Important Rule

* Wrapper styles apply
* Projected content keeps its own styles
* Wrapper **cannot directly style child component internals**

Example:

```css
.card {
  color: #333;
  font-family: Arial;
}
```

✔ Text inside projected components inherits these styles.

---

## 5️⃣ Real-World Example: Layout Wrapper

### `layout.component.html`

```html
<div class="layout">
  <header>Header</header>

  <main>
    <ng-content></ng-content>
  </main>

  <footer>Footer</footer>
</div>
```

### Usage

```html
<app-layout>
  <app-dashboard></app-dashboard>
</app-layout>
```

✔ `<app-dashboard>` is rendered inside `<main>`.

---

## 6️⃣ Multiple Content Slots (`select`)

You can project different content into different locations.

### Wrapper Component

```html
<div class="card">
  <div class="card-header">
    <ng-content select="[card-header]"></ng-content>
  </div>

  <div class="card-body">
    <ng-content></ng-content>
  </div>

  <div class="card-footer">
    <ng-content select="[card-footer]"></ng-content>
  </div>
</div>
```

---

### Usage

```html
<app-card>
  <h3 card-header>Profile</h3>

  <p>User details go here</p>

  <button card-footer>Save</button>
</app-card>
```

✔ Attribute selectors decide where content is projected.

---

## 7️⃣ Wrapping Components (Common UI Pattern)

Example: Button wrapper

```html
<app-button>
  <span>Submit</span>
</app-button>
```

```html
<button class="btn">
  <ng-content></ng-content>
</button>
```

✔ Works with text, icons, or even other components.

---

## 8️⃣ `ng-content` vs `@Input()`

| Use Case            | ng-content | @Input() |
| ------------------- | ---------- | -------- |
| Unknown HTML        | ✅          | ❌        |
| Wrapping components | ✅          | ❌        |
| Simple text         | ❌          | ✅        |
| Layout control      | ✅          | ❌        |

---

## 9️⃣ Limitations of `ng-content`

You **cannot**:

* Modify projected content structure
* Loop over projected nodes
* Conditionally project individual nodes

You **can**:

* Style the wrapper
* Control layout
* Use multiple slots with `select`

---

## 🔟 Conditional Projection (Advanced)

```html
<ng-content *ngIf="showContent"></ng-content>
```

⚠ Projection happens once; toggling removes content from the DOM.

---

## ✅ Summary

`ng-content` allows you to:

* Wrap any component
* Apply reusable styles and layouts
* Build UI shells (cards, layouts, modals)
* Create header/body/footer slots

It is the foundation of many Angular UI libraries (Angular Material, PrimeNG).

---

If you want next:

* Angular Material-style card example
* Styling projected content deeply
* `ng-template` vs `ng-content`
* Tailwind + `ng-content` patterns

```
```
