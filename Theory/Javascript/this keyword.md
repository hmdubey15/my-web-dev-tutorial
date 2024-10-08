<div style="font-size: 17px;background: black;padding: 2rem;">

In JavaScript, the `this` keyword refers to an object. Which object depends on how `this` is being invoked (used or called). The `this` keyword refers to different objects depending on how it is used. Basically the value of `this` depends on in which context it appears: function, class, or global.3

# Global scope

When code is executed in the global scope (i.e., not inside any function), value of `this` is `window`, in case of `nodejs`, it is `Global object`. In case of `vs code` or other JS compilers, they have `empty object {}` as global object as they can't afford to implement browser or nodejs global object apis and properties. As it is there for debugging, so empty global object suffices.

```js
console.log(this); // {} / Window / Global object depending on scope
```

<br>

# Regular Functions 

Inside a function, the value of this depends on how the function is called. Think about this as a hidden parameter of a function — just like the parameters declared in the function definition, this is a binding that the language creates for you when the function body is evaluated.

1. <b style="color: Aqua;">Standalone function:</b> In `non-strict mode`, when a regular function is called in the global context (i.e., not as a method of an object or within another function), `this` refers to the `global object` (window in a web browser, global in Node.js). In `strict mode`, when a regular function is called in the global context, `this` is `undefined`.

    ```js
    // Non-strict mode
    function globalFunction() {
        console.log(this);
    }
    globalFunction(); // Output: Window (in a browser)
    ```

    ```js
    // Strict mode
    'use strict';
    function strictGlobalFunction() {
        console.log(this);
    }
    strictGlobalFunction(); // Output: undefined
    ```

2. <b style="color: Aqua;">As a method of object:</b> When a regular function is called as a method of an object, `this` refers to the object itself.

    ```js
    const obj = {
        name: 'Object',
        method: function() {
            console.log(this.name);
        }
    };
    obj.method(); // Output: 'Object'
    ```
3. <b style="color: Aqua;">In constructor function:</b> When a regular function is used as a constructor with the `new` keyword, `this` refers to the newly created object instance.
    ```js
    function Person(name) {
        this.name = name;
    }

    const john = new Person('John');
    console.log(john.name); // Output: 'John'
    ```
4. <b style="color: Aqua;">Explicit Binding:</b> When a regular function's `call()`, `apply()`, or `bind()` method is used, `this` is explicitly set to the value passed as the first argument.
    ```js
    const person = {
        name: 'John'
    };

    function greet() {
        console.log('Hello, ' + this.name + '!');
    }

    greet.call(person); // Output: 'Hello, John!'
    ```

<br>

# Arrow functions

Arrow functions do not have their own `this` binding. The value of `this` is lexically bound to the enclosing scope, meaning it retains the value of `this` from the surrounding code where the arrow function is defined. Unlike regular functions, arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical context in which they are defined.

- <b style="color: Coral;">Arrow Function in Global Context:</b> If an arrow function is defined in the global scope, `this` inside the arrow function will be the same as `this` in the global scope.

  ```js
  // Arrow function in global context
  const globalArrow = () => {
    console.log("Inside globalArrow, this is:", this);
  };

  globalArrow(); // Output: Inside globalArrow, this is: Window (or global object in Node.js)
  ```

- <b style="color: Coral;">Arrow Function as a Method:</b> If an arrow function is used as a method of an object, `this` inside the arrow function will be the same as `this` in the enclosing scope where the object method is defined, not the object itself.

    ```js
    // Object with a method using arrow function
    const obj = {
      name: "Object",
      method: () => {
        console.log("Inside method, this is:", this);
        console.log("Name:", this.name); // Accesses global object property
      },
    };

    obj.method(); // Output: Inside method, this is: Window (or global object in Node.js)
                 //         Name: undefined
    ```

- <b style="color: Coral;">Arrow Function inside Regular Function:</b> If an arrow function is defined inside a regular function, this inside the arrow function will be the same as this in the regular function.
    ```js
    // Regular function with an arrow function inside
    function regularFunction() {
        console.log('Inside regularFunction, this is:', this);

        const arrowFunction = () => {
            console.log('Inside arrowFunction, this is:', this);
        };

        arrowFunction();
    }

    regularFunction(); // Output: Inside regularFunction, this is: Window (or global object in Node.js)
                      //         Inside arrowFunction, this is: Window (or global object in Node.js)
    ```

- <b style="color: Coral;">Arrow Function inside Constructor:</b> If an arrow function is defined inside a constructor function, this inside the arrow function will be the same as this in the constructor function.

    ```js
    // Constructor function with an arrow function inside
    function Constructor() {
        console.log('Inside Constructor, this is:', this);

        const arrowFunction = () => {
            console.log('Inside arrowFunction, this is:', this);
        };

        arrowFunction();
    }

    new Constructor(); // Output: Inside Constructor, this is: Constructor {}
                      //         Inside arrowFunction, this is: Constructor {}
    ```

<br>

# Event Handler

In event handler functions (e.g., DOM event listeners), `this` often refers to the DOM element that triggered the event. However, this behavior can be different depending on how the event listener is attached.

```js
<button onclick="removeElement(this)">Click to Remove Me!</button>
<script>
function removeElement(elementObj) {
 elementObj.style.display='none';
}
</script>
```

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
