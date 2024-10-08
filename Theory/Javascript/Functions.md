<div style="font-size: 17px;background: black;padding: 2rem;">

JavaScript functions are defined with the `function` keyword. You can use a <b style="color: Plum;">function declaration</b> or a <b style="color: Plum;">function expression</b>. After a function expression has been stored in a variable, the variable can be used as a function as shown below. <span style="color: Chartreuse;">The () operator is used to invoke (call) the function.</span>

```js
// Function declaration
function myFunction(a, b) {
  return a * b;
}

// Function expression
const x = function (a, b) {
  return a * b;
}; // This function is actually an anonymous function (a function without a name).
x(4, 5);
```

Semicolons are used to separate executable JavaScript statements. Since a function declaration is not an executable statement, it is not common to end it with a semicolon. Functions stored in variables do not need function names. They are always invoked (called) using the variable name.

<b style="color:Orange;">Then only difference between function declarations and function expressions is that function declarations are hoisted and we can use them before defining, whereas function expressions (just like any variables [`let`, `const`, `var`]) are also hoisted but since their initialization will not be hoisted, we can't use them before defining.</b>

<b style="color:Crimson;">Also function declarations are global or function scoped.</b>

```js
console.log(x); // undefined
functionExpression(); // ReferenceError: Cannot access 'functionExpression' before initialization
functionDeclaration(); // DECLARED FUNCTION

var x = 5;

const functionExpression = function () {
    console.log('FUNCTION EXPRESSION');
};

function functionDeclaration() {
    console.log('DECLARED FUNCTION')
}
```

<br>

#  Rest & Spread operators

The `rest parameter (...)` allows a function to treat an indefinite number of arguments as an array:

```js
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);
```

Although the syntax of the spread operator is exactly the same as the rest parameter, the `spread operator (...)` is used to spreading an array, and object literals. We also use spread operators where one or more arguments are expected in a function call.

```js
function myFunc(a, b, c) {
  console.log(a, b, c);
}
const args = [1, 2, 3];
myFunc(...args); // Equivalent to myFunc(1, 2, 3)
```

<b style="color: red;">NOTE:</b> `Rest` operator has to be used at the end, while `Spread` operator can be used in between.

<br>

# The Arguments Object

The `arguments` object in JavaScript is an array-like object that is available inside all functions (<b style="color:red;">NOT arrow functions</b>) and contains all the arguments passed to the function when it was invoked. It provides a way to access the parameters passed to a function without explicitly declaring them.

```js
function example(a, b) {
  console.log(arguments[0]); // Accesses the first argument
  console.log(arguments[1]); // Accesses the second argument
  console.log(arguments.length); // Accesses the number of arguments passed
}
example(1, 2); // Output: 1, 2, 2
```

<b style="color:Gold;">Remember that it is the number of arguments passed in function call, not the number of parameters function declaration is receiving.</b>

```js
function func(a, b=2) {
  console.log(arguments.length); // 1 0
}

func(undefined);
func();
```

<br>

# Self-Invoking Functions

Function expressions can be made "self-invoking". A self-invoking expression is invoked (started) automatically, without being called. Function expressions will execute automatically if the expression is followed by (). You cannot self-invoke a function declaration. You have to add parentheses around the function to indicate that it is a function expression:

```js
(function () {
  let x = "Hello!!"; // I will invoke myself
})();
```

<br>

# Arrow Functions

Arrow functions allows a short syntax for writing function expressions. You don't need the function keyword, the return keyword, and the curly brackets. Example:

```js
// ES5
var x = function (x, y) {
  return x * y;
};
// ES6
const x = (x, y) => x * y;
```

- We can avoid brackets for single argument
- Arrow functions do not have their own `this`, `arguments`, `super`, or `new.target`
- They are always anonymous.
- They are not well suited for defining object methods.
- Arrow functions are hoisted but must be defined before they are used.
- You can only omit the return keyword and the curly brackets if the function is a single statement. Because of this, it might be a good habit to always keep them.
- Whenever returning an object, add parenthesis -> `()`

> Two factors influenced the introduction of arrow functions: shorter functions and non-binding of this.

<br>

# Setting custom 'this' value

The <b style="color: Turquoise;">call()</b>, <b style="color: Turquoise;">apply()</b>, and <b style="color: Turquoise;">bind()</b> methods in JavaScript are used to set the value of the `this` keyword. The `this` keyword always refers to an object. These methods could help us set it's value to custom objects when used in a function.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">call():</h3>

This method allows you to call a function with a specified `this` value and optional arguments.

Syntax: <b style="color: Chartreuse;">function.call(thisArg, arg1, arg2, ...)</b>

- The `thisArg` parameter specifies the value of `this` that should be used when executing the function.
- <b style="color: violet;">If `thisArg` is `null`, `this` inside the calling function is set to global object.</b>
- Additional arguments passed to `call()` are passed to the function as individual arguments.

With the help of this method, an object can use a method belonging to another object. Example below:

<b style="color: Salmon;"><i>It doesn't work with arrow functions. This is because arrow functions do not have their own `this` context.</i></b>

```js
const person = {
  getFullName: function (city, country) {
    return `Hi! I am ${this.firstName} ${this.lastName} from ${city}, ${country}`;
  },
};
const person1 = { firstName: "Himanshu", lastName: "Dubey" };
const fullNameP1 = person.getFullName.call(person1, "Varanasi", "India");
console.log(fullNameP1); // Output: Hi! I am Himanshu Dubey from Varanasi, India
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">apply():</h3>

The only difference between `call()` and `apply()` method is that former one takes the arguments separated by a comma while latter one takes the array of arguments. Rest each and everthing is exactly same.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">bind():</h3>

This method creates a new function that, when called, has its `this` value set to a specific value (passed as an argument) and optionally prepends any arguments to the function call.

Syntax: <b style="color: Chartreuse;">function.bind(thisArg[, arg1[, arg2[, ...]]])</b>

- The `thisArg` parameter specifies the value of `this` that should be used when executing the function.
- Additional arguments passed to `bind()` are prepended to the arguments provided to the newly created function.
- Unlike `call()` and `apply()`, `bind()` does not immediately invoke the function. Instead, it returns a new function with the this value bound.
  <br>

```js
function greet(greeting, punctuation) {
  return greeting + " " + this.name + punctuation;
}

let person = {
  name: "John",
};

// Creating a new function with 'this' set to 'person' and 'greeting' preset to 'Hello'
let boundGreet = greet.bind(person, "Hello");

console.log(boundGreet("!")); // Output: Hello John!
console.log(boundGreet(".")); // Output: Hello John.
```

<div style="background: DarkRed;padding: 0.3rem 0.8rem;">

All three of the call, bind, and apply methods set the `this` argument to the function.

- The `call` and `apply` methods set this to a function and call the function.
- The `bind` method will only set `this` to a function. We will need to separately invoke the function.
</div>

<br>

<div style="border: 1px solid yellow; padding: 10px;">
<h3>Preserving 'this'</h3>

When a function is used as a callback, `this` is lost. This example will try to display the person name after 3 seconds, but it will display undefined instead:

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  display: function () {
    let x = document.getElementById("demo");
    x.innerHTML = this.firstName + " " + this.lastName;
  },
};
setTimeout(person.display, 3000);
```

The `bind()` method solves this problem. It can be used to bind `person.display` to `person`. Modify above code as:

```js
// -- same code as above ---
let display = person.display.bind(person);
setTimeout(display, 3000);
```

</div>

<br>
<br>

<b style="color: Cyan">Chaining `bind` calls does not work as you might expect. This is because `bind` does not allow further re-binding of `this`.</b>

```js
function logMessage() {
  console.log(this.name);
}

const user1 = { name: "John" };
const user2 = { name: "Jane" };

const boundLogMessage = logMessage.bind(user1);
const reBoundLogMessage = boundLogMessage.bind(user2);

reBoundLogMessage(); // Logs: "John"
```

<br>
<br>

<div style="border: 1px solid Violet; padding: 10px;">

<b style="color: LightGreen;">Implicit binding</b> occurs when a function is called as a method of an object. In this context, this is set to the object on which the method is called. <b style="color: Yellow;">Explicit binding</b> occurs when you explicitly set the value of this using `call`, `apply`, or `bind` methods.
</div>

<br>
<br>

# Function closures

<b><i>In JavaScript, closures are a powerful and fundamental concept that allows functions to retain access to variables from their parent scope even after the parent function has finished executing. This means that a function "closes over" its surrounding state, capturing and storing references to variables from the outer scope.</i></b>

Here's a breakdown of how closures work:

<b style="color: Salmon;">1. Lexical Scope:</b> In JavaScript, functions are defined within other functions or blocks, creating a nested structure of scopes. Each function has access to variables in its parent scope, and this access is determined by the lexical scope chain, which is established at the time the function is defined.

<b style="color: Salmon;">2. Closure Creation:</b> When a function is defined within another function and references variables from the outer function's scope, a closure is created. This closure retains a reference to the variables it "closes over," even after the outer function has finished executing and its local variables would normally be garbage-collected.

<b style="color: Salmon;">3. Accessing Outer Variables:</b> The inner function, which forms the closure, can access and manipulate variables from the outer function's scope, even though those variables are no longer in scope outside of the outer function. This is because the closure maintains a reference to those variables.

```js
function outerFunction() {
  let outerVariable = "I am from the outer function";

  function innerFunction() {
    console.log(outerVariable); // Accessing outerVariable from the outer scope
  }

  // Returning the inner function
  return innerFunction;
}

// Call outerFunction to get the inner function
const closureFunction = outerFunction();

// Even though outerFunction has finished executing, closureFunction still has access to outerVariable
closureFunction(); // Output: "I am from the outer function"
```

In this example:

- `innerFunction` is defined inside `outerFunction` and references `outerVariable` from its parent scope.
- When `outerFunction` is called, it returns `innerFunction`.
- The returned `innerFunction` forms a closure over `outerVariable`, retaining access to it even after `outerFunction` has finished executing.
- When `closureFunction` is called, it still has access to `outerVariable` and can log its value.

Closures are commonly used in JavaScript to create private variables, implement data encapsulation, and manage asynchronous operations, among other things. Understanding closures is essential for writing clean, modular, and efficient JavaScript code.

<div style="background: DarkRed;padding: 0.3rem 0.8rem;">
As long as the closure exists, the variables it references will also exist in memory and will not be eligible for garbage collection. This includes both the inner function and the variables it captures from the outer scope.
<br><br>
The closure and its associated variables will only be garbage-collected when there are no more references to the closure or any of its captured variables from other parts of the program. This typically happens when all references to the closure are removed, such as when the closure is no longer reachable from the global scope or any other active parts of the program.
<br><br>
Explicitly release references to objects or variables when they are no longer needed. Set variables to null or undefined within the closure when they are no longer required to ensure that they can be garbage-collected.
</div>

<br>

# The "new Function" syntax

There’s one more way to create a function. It’s rarely used, but sometimes there’s no alternative. <b style="color: MediumSpringGreen;">Function</b> constructor is a built-in constructor function that creates new function objects. You can use it to dynamically create functions from strings of JavaScript code. The syntax for using the this constructor to create functions is as follows:

```js
const myFunction = new Function(arg1, arg2, ..., functionBody);
```

Examples:

```js
let sum = new Function("a", "b", "return a + b");
alert(sum(1, 2)); // 3

let sayHi = new Function('alert("Hello")'); // Without arguments
sayHi(); // Hello
```

The major difference from other ways we’ve seen is that the function is created literally from a string, that is passed at run time. All previous declarations required us, programmers, to write the function code in the script.

This way, we can receive a new function from a server and then execute it:

```js
let str = ... receive the code from a server dynamically ...

let func = new Function(str);
func();
```

It is used in very specific cases, like when we receive code from a server, or to dynamically compile a function from a template, in complex web-applications.

<h3>Closures:</h3>

Usually, a function remembers where it was born in the special property `[[Environment]]`. It references the Lexical Environment from where it’s created. But when a function is created using new Function, its `[[Environment]]` is set to reference not the current Lexical Environment, but the global one. So, such function doesn’t have access to outer variables, only to the global ones.

```js
function getFunc() {
  let value = "test";

  let func = new Function("alert(value)");

  return func;
}

getFunc()(); // error: value is not defined
```

<br>

# Function object

As we already know, a function in JavaScript is a value. Every value in JavaScript has a type. What type is a function? In JavaScript, functions are objects. <span style="color: Cyan;">A good way to imagine functions is as callable “action objects”</span>. We can not only call them, but also treat them as objects: add/remove properties, pass by reference etc.

Function objects contain some useable properties:

- <b style="color: Salmon;">name</b>: A function’s name is accessible as the “name” property. What’s kind of funny, the name-assigning logic is smart. It also assigns the correct name to a function even if it’s created without one, and then immediately assigned. Works for both arrow and regular functions.
- <b style="color: Salmon;">length</b>: It returns the number of function parameters. Note that it <span style="color: pink;">does not return number of parameters passed to function, but just the number arguments it is accepting</span>.

```js
const fun = (a, b, c) => {
  console.log(fun.length); // 3
};
fun();
```

<div>

<!-- <div style="font-size: 17px;background: black;padding: 2rem;"> -->
<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
