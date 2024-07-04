<div style="font-size: 17px;background: black;padding: 2rem;">

In JavaScript, modules are a way to organize and structure your code into separate files, each containing related functionality. Modules allow you to break down large applications into smaller, manageable pieces, making it easier to maintain, reuse, and collaborate on code.

JavaScript modules use the `export` and `import` statements to define and import functionality between different files. Here's how they work:

# Exporting from a Module

You can export functions, variables, or objects from a module using the export keyword. There are two main ways to export:

<span style="color: Salmon;">Named Exports:</span> You can export specific functions, variables, or objects by name.

```js
// math.js
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
```

<span style="color: Salmon;">Default Export:</span> You can export a single default function, variable, or object, which is imported without braces `{}`.

```js
// utility.js
export default function greet(name) {
  return `Hello, ${name}!`;
}
```

# Importing into a Module

You can import functionality from other modules using the `import` statement. You can import named exports and default exports.

<span style="color: Salmon;">Named Import:</span>

```js
// app.js
import { add, subtract } from "./math.js";
console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2
```

<span style="color: Salmon;">Default Import:</span>

```js
// app.js
import greet from "./utility.js";
console.log(greet("Alice")); // Output: Hello, Alice!
```

<br>

# Module Loading

JavaScript modules are loaded asynchronously. When a module is imported, its dependencies are fetched and executed before the importing module continues execution. This behavior ensures that modules are loaded in the correct order and that each module's dependencies are resolved before it's executed.

<br>

# Benefits of Modules

- <span style="color: Cyan;">Encapsulation:</span> Modules encapsulate functionality, providing a clean separation of concerns and reducing namespace pollution.
- <span style="color: Cyan;">Reusability:</span> Modules can be reused across different parts of an application or even in different applications.
- <span style="color: Cyan;">Maintainability:</span> Organizing code into modules makes it easier to understand, maintain, and debug.
- <span style="color: Cyan;">Dependency Management:</span> Modules allow you to manage dependencies between different parts of your application.

<br>

# <a href="https://www.youtube.com/watch?v=ddVm53j80vc&list=PLZlA0Gpn_vH85jM1TWO6TdCtSr6ruglWn&index=59&ab_channel=WebDevSimplified">Dynamic Module Imports</a>

The import statements that we looked above are **<u>static imports</u>**. The issue with them is that the code of imported files is downloaded immediately by the browser leading to potentially slow page loads. This is where **<u>dynamic module imports</u>** come in.

Dynamic module imports in JavaScript allow you to load modules conditionally and asynchronously at runtime, rather than having all imports defined statically at the beginning of your scripts. This can be particularly useful for improving performance, reducing initial load times, and handling modules that are only needed under specific conditions.

Dynamic imports are made possible using the <b style="color:Magenta;">import()</b> function, which returns a promise that resolves to the module object.

```js
// Static Import

import User, { printUser } from "./user.js";

// Dynamic Import

import("./user.js")
  .then(({ default: User, printUser }) => {
    // Code that depends on the module
  })
  .catch((error) => {
    // Handle error scenario
  });
```

The default export of the module must actually be destructured from the promise return value. This is why we have the code `default: User` which is mapping the default export to the `User` variable.

Example Scenario: Consider a single-page application (SPA) where certain features or components are only needed under specific conditions -

```js
// main.js
document.getElementById("featureButton").addEventListener("click", async () => {
  try {
    const module = await import("./featureModule.js");
    module.initializeFeature();
  } catch (err) {
    console.error("Failed to load featureModule", err);
  }
});
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Benefits</h3>

- <b style="color:SpringGreen;">Performance Optimization</b>: Load only the necessary parts of your application when they are needed, reducing the initial load time.
- <b style="color:SpringGreen;">Conditional Loading</b>: Dynamically load modules based on certain conditions, such as user actions or specific runtime environments.
- <b style="color:SpringGreen;">Code Splitting</b>: With tools like Webpack, dynamic imports can be used to split your code into smaller chunks that are loaded on demand.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">When to use dynamic importing?</h3>

- We can add intersection observer to observe when a component comes onto screen and only then load the JS.
- Importing numerous language related files during internationalization
- Importing tonnes of components during routing
- Prevent unnecessary polyfill downloads

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
