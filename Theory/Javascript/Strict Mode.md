<div style="font-size: 17px;background: black;padding: 2rem;">

Strict mode is a feature in JavaScript that allows you to place a program or a function in a "strict" operating context. When you use strict mode, certain actions that would otherwise be silently ignored or would fail will instead generate errors, making them easier to find and debug.

You can enable strict mode for an entire script or a specific function by adding the string `"use strict";` at the beginning of the script or function:

```js
"use strict";
....
....
```

OR

```js
function myFunction() {
  "use strict";
  // Code in strict mode
}
```

<b style="color:red;">NOTE:</b> The "use strict" directive is only recognized at the beginning of a script or a function.

Some key features and behaviors of strict mode include:

1. <b style="color: Salmon;">Disallows Implicit Global Variables:</b> In non-strict mode, declaring a variable without the var, let, or const keyword creates a global variable. In strict mode, this behavior is disallowed, and attempting to assign a value to an undeclared variable will result in a ReferenceError.

2. <b style="color: Salmon;">Eliminates this Coercion:</b> In strict mode, when a function is called as a standalone function (i.e., not as a method of an object), `this` inside the function is undefined rather than referring to the global object (window in browsers, global in Node.js).

3. <b style="color: Salmon;">Disallows Duplicate Property Names:</b> In strict mode, using the same property name multiple times within an object literal or class declaration will result in a syntax error.

4. <b style="color: Salmon;">Disallows Octal Numeric Literals:</b> In strict mode, octal numeric literals (e.g., 012) are not allowed, and attempting to use them will result in a syntax error.

5. <b style="color: Salmon;">Throws Errors on Invalid Usage:</b> Certain actions that are potentially error-prone or ambiguous in non-strict mode, such as deleting undeletable properties, or using with statements, will result in errors in strict mode.

6. <b style="color: Salmon;">Reserved keywords can't be used as varibles:</b> Keywords which are reserved in javascript like `let`, `const`, `eval`, etc cannot be used as variable names in javascript.

7. <b style="color: Salmon;">Duplicating a parameter name is not allowed:</b> This will cause an error in strict mode - `function x(p1, p1) {};`

8. <b style="color: Salmon;">Deleting a variable or function is disallowed:</b> This will cause error in strict mode - `let x = 3.14;
delete x; `.

Strict mode helps prevent common programming mistakes and encourages best practices by making them explicit. It's recommended to use strict mode in all modern JavaScript code.

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
