# 📦 Understanding the `assets` Section in `angular.json` (Complete Guide)

The `assets` property in Angular’s `angular.json` tells Angular **which static files or folders should be copied into the final `dist/` build output**. **Angular does build your app when you run ng serve. But it is a development build, not a production build..**

Static files include:

* Images (PNG, JPG, SVG, etc.)
* JSON files
* Icons
* Videos
* Fonts
* Any non-TypeScript file you want to serve publicly

---

# ## 1. Default Assets Configuration

```json
"assets": [
  "src/favicon.ico",
  "src/assets"
]
```

### ✔ What this does

* Copies **everything** inside `src/assets/` → into `dist/assets/`
* Copies `src/favicon.ico` → into `dist/favicon.ico`

### ✔ How to use files from `src/assets/`

If your file is here:

```
src/assets/logo.png
```

Use:

```html
<img src="assets/logo.png">
```

---

# ## 2. Using Custom Asset Rules with `glob` + `input` + `output`

You can add custom folders (inside or outside `src`) using an object:

```json
{
  "glob": "**/*",
  "input": "folder-path",
  "output": "destination-folder"
}
```

---

# ## 3. Meaning of Each Property

### 🔹 **`glob`: "**/*"`**

Tells Angular to include:

> all files and all subfolders

### 🔹 **`input`: "public"`**

Where Angular should **read files from**.
The path is **relative to the `src/` folder**.

Examples:

* `"input": "public"` → means `src/public/`
* `"input": "../public"` → means `public/` outside `src`

### 🔹 **`output`: "assets"`**

Where the files should be placed in the final `dist/` folder.

---

# ## 4. Example: Public Folder INSIDE `src`

```json
"assets": [
  "src/assets",
  {
    "glob": "**/*",
    "input": "public"
  }
]
```

### ✔ Folder structure:

```
src/public/logo.png
```

### ✔ Output after build:

```
dist/app/logo.png
```

### ✔ Use in HTML:

```html
<img src="/logo.png">
```

📌 **Note:** Since no `output` is given, Angular copies files to the **root** of the final build.

---

# ## 5. Example: External Public Folder (OUTSIDE `src`)

```
project-root/
  public/
  src/
```

Add this configuration:

```json
{
  "glob": "**/*",
  "input": "../public",
  "output": "assets"
}
```

### ✔ Output after build:

```
dist/app/assets/logo.png
```

### ✔ Use in HTML:

```html
<img src="assets/logo.png">
```

---

# ## 6. Why External Folders Need Configuration

Angular **only includes files inside `src/`** by default.

If a folder is outside `src`, Angular cannot see it unless you explicitly map it with:

```json
"input": "../folder-name"
```

This tells Angular:

> “Please read this folder even though it is outside `src`.”

---

# ## 7. Summary Table

| Source Folder                    | Configuration                              | Build Output           | HTML Path         |
| -------------------------------- | ------------------------------------------ | ---------------------- | ----------------- |
| `src/assets/`                    | `"src/assets"`                             | `dist/assets/`         | `assets/file.png` |
| `src/public/`                    | `"input": "public"`                        | `dist/file.png`        | `/file.png`       |
| `public/` (outside src) → assets | `"input": "../public", "output": "assets"` | `dist/assets/file.png` | `assets/file.png` |
| `public/` (outside src) → root   | `"input": "../public"`                     | `dist/file.png`        | `/file.png`       |

---

# ## 8. Best Practice

✔ Use **`src/assets/`** for most use cases (recommended).
✔ Only use custom folders (public, shared-root-assets, etc.) if you explicitly need them.
✔ Always restart dev server after adding new assets:

```bash
ng serve
```

---

# ## 9. Common Issues + Fixes

### ❌ Image 404 Not Found?

Check these:

* Wrong path in HTML
* Image not inside the folder Angular copies
* Wrong file name (case-sensitive)
* Wrong `input` or `output` in `angular.json`
* Dev server not restarted

---

# ## 10. Example: Full Working Assets Section

```json
"assets": [
  "src/assets",
  "src/favicon.ico",
  {
    "glob": "**/*",
    "input": "public",
    "output": ""
  },
  {
    "glob": "**/*",
    "input": "../shared-assets",
    "output": "shared"
  }
]
```

---