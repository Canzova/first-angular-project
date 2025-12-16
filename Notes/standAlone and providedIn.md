# 1️⃣ `standalone: true` in `@Component`

## What problem did Angular solve?

Before Angular 14:

* Every component **had to belong to an NgModule**
* Even small components needed:

  * declarations
  * imports
  * exports

This caused:

* Boilerplate
* Tight coupling to modules
* Harder lazy loading

👉 **Standalone components remove this requirement**

---

## What does `standalone: true` mean?

```ts
@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
})
export class UserComponent {}
```

It means:

> ❝This component does **not belong to any NgModule**❞
> ❝It can be used directly without being declared in a module❞

---

## How standalone components work

### Old (NgModule-based)

```ts
@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule],
})
export class UserModule {}
```

### New (Standalone)

```ts
@Component({
  standalone: true,
  imports: [CommonModule],
})
export class UserComponent {}
```

✔ The component declares **its own dependencies**

---

## Using a standalone component

### In another standalone component

```ts
@Component({
  standalone: true,
  imports: [UserComponent],
  template: `<app-user></app-user>`
})
export class DashboardComponent {}
```

---

### In routing (lazy loading)

```ts
const routes: Routes = [
  {
    path: 'user',
    loadComponent: () =>
      import('./user.component').then(m => m.UserComponent),
  }
];
```

✔ No module needed
✔ Better tree-shaking
✔ Faster builds

---

## What you must remember

When `standalone: true`:

* ❌ Cannot be declared in `NgModule`
* ✅ Must import dependencies directly
* ✅ Can be lazy loaded without modules

---

## When should you use `standalone: true`?

✔ New Angular projects
✔ Reusable UI components
✔ Feature-level components
✔ Lazy-loaded routes

🚫 Legacy module-heavy codebases (unless migrating gradually)

---

# 2️⃣ `providedIn: 'root'` in `@Injectable`

## What problem did Angular solve?

Before Angular 6:

* Services had to be listed in `providers`
* Easy to accidentally create **multiple instances**
* Harder tree-shaking

---

## What does `providedIn: 'root'` mean?

```ts
@Injectable({
  providedIn: 'root'
})
export class AuthService {}
```

It means:

> ❝Create **one single instance** of this service
> ❝Store it in the **application root injector**
> ❝Make it available **everywhere**❞

---

## What does this give you?

✔ Singleton service
✔ No need to add to `providers`
✔ Automatically tree-shaken if unused

---

## How dependency injection works here

```ts
@Injectable({ providedIn: 'root' })
export class LoggerService {}
```

Angular:

* Creates instance **once**
* Shares it across:

  * Components
  * Services
  * Guards
  * Interceptors

---

## Without `providedIn`

```ts
@Injectable()
export class AuthService {}
```

```ts
@Component({
  providers: [AuthService]
})
```

❌ New instance created per component
❌ Hard to manage lifecycle

---

## Other `providedIn` options

| Value        | Scope                        |
| ------------ | ---------------------------- |
| `'root'`     | App-wide singleton           |
| `'platform'` | Shared across Angular apps   |
| `'any'`      | New instance per lazy module |
| `null`       | Manual providers             |

---

## When to use `providedIn: 'root'`

✔ Auth services
✔ API services
✔ State managers
✔ Logging
✔ Utilities

🚫 Component-specific state

---

# 3️⃣ How `standalone` and `providedIn: 'root'` work together

They are **completely independent**, but often used together:

```ts
@Component({
  standalone: true,
  imports: [CommonModule],
})
export class LoginComponent {
  constructor(private auth: AuthService) {}
}
```

```ts
@Injectable({ providedIn: 'root' })
export class AuthService {}
```

✔ Component does not need a module
✔ Service is globally available

---

# 4️⃣ Quick Comparison Table

| Feature       | `standalone: true`           | `providedIn: 'root'` |
| ------------- | ---------------------------- | -------------------- |
| Applies to    | Component / Directive / Pipe | Service              |
| Purpose       | Remove NgModule dependency   | Define DI scope      |
| Scope         | Self-contained UI unit       | App-wide singleton   |
| Introduced in | Angular 14                   | Angular 6            |
| Tree-shaking  | Yes                          | Yes                  |

---

## ✅ Final Summary

### `standalone: true`

* Makes components module-free
* Improves lazy loading
* Reduces boilerplate
* Future of Angular

### `providedIn: 'root'`

* Creates a singleton service
* Automatically provided
* Best practice for shared services

---

If you want next, I can:

* Explain `providedIn: 'any'` with lazy loading
* Show migration from NgModules → Standalone
* Explain Angular DI hierarchy visually
* Explain `bootstrapApplication()` vs `NgModule`

