<div style="font-size: 17px;background: black;padding: 2rem;">

# <a href="https://github.com/sudheerj/javascript-interview-questions">Questions</a>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-Promise-all">Promise.all polyfill</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-Promise-allSettled">Promise.allSettled polyfill</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Polyfill for `Function.bind`:

<b style="color: Orange;">Ans:</b>

```js
Function.prototype.bindPolyfill = function (o, ...args) {
  if (typeof this != "function") throw new Error(this + " is not callable.");
  const callback = this;
  return function (...args2) {
    return callback.call(o, ...args, ...args2);
  };
};
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-call-method">Function.prototype.call polyfill</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-cloneDeep">Deep Clone with circular reference</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-basic-debounce">Explain and implement debounce functionality:</a>

<b style="color: Orange;">Ans:</b> Debouncing is a technique used to limit the rate at which a particular function is executed, particularly in response to frequent events like scrolling, resizing, or typing. The goal is to ensure that the function is only called once after a certain amount of time has passed since the last invocation of the event, rather than being called every time the event occurs.

**Debounce is most suitable for control events like typing or button clicks.**

Here's a basic explanation of how debounce works:

- When an event occurs, the function is triggered.
- A timer is started.
- If the event occurs again before the timer expires, the timer is reset.
- If the event doesn't occur again before the timer expires, the function is finally executed.

<span style="color:Coral;">We use `apply` in below code instead of directly calling `callback` to handle the case if `callback` wrapped in `debounce` is being called as method of an object. Hence, the context of that object needs to be preserved.</span>

```js
const debounce = (callback, delay = 100) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
};
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-debounce-with-leading-and-trailing-option">Debounce with leading and trailing options</a> [Todo ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Explain and implement throttle functionality:

<b style="color: Orange;">Ans:</b> Throttling is a technique used to limit the rate at which a function is called. Throttling transforms a function such that it can only be called once in a specific interval of time.

**Throttle is most suitable for continuous user events like resizing and scrolling.**

- Call the function immediately the first time.
- After each call, prevent the function from being called again for a certain time period.
- Once that time period has passed, the function can be called again.

```js
function throttle(callback, timeIv) {
  let shouldWait = false;
  return function (...args) {
    if (shouldWait) return;
    callback.apply(this, args);
    shouldWait = true;
    setTimeout(() => {
      shouldWait = false;
    }, timeIv);
  };
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-basic-throttle">Advance throttle with waiting args</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-throttle-with-leading-and-trailing-option">Throttle with leading and trailing options</a> [TODO ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-curry">Curry Functions</a> [Check both approaches: (1) `bind` one (2) simple recursion]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-curry-with-placeholder">Curry with placeholders</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/curry-iii">Curry-3: Non-finite arguments passed in one call</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Predict output:

```js
var x = 21;
var fun = function () {
  console.log(x); // Output?
  var x = 20;
};
fun();
```

<b style="color: Orange;">Ans:</b> In JavaScript, variable declarations (`var`) are hoisted to the top of their scope, but their assignments are not. This means that the declaration `var x` inside the function `fun` is hoisted to the top of the function scope, but the assignment `x = 20` remains in its original place. The code effectively becomes:

```js
var x = 21;

var fun = function () {
  var x; // Declaration is hoisted
  console.log(x); // Output?
  x = 20; // Assignment remains here
};

fun();
```

Therefore, the output of `console.log(x)` will be `undefined`, as the local variable `x` is hoisted and declared without an initial value, shadowing the outer `x` before its assignment.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-once">Implement `once` functionality</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-general-memoization-function">Write polyfill for `_memoize` function of lodash.</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> What we will be output?

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

<b style="color: Orange;">Ans:</b> Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`. However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["[object Object]"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.

Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> How can we stringify a particular given set of keys from an object?

<b style="color: Orange;">Ans:</b> `JSON.stringify(obj, ["key1", "key2", "key3", .........])`

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Predict output.

```js
let obj = { a: 1 };
let arr = [obj];
obj = null;
console.log(arr);
```

<b style="color: Orange;">Ans:</b> `{a:1}`. That is because it is just like assigning `arr[0] = obj` and we are changing just the variable `obj`. If we changed property of `obj` instead, `arr` would have been affected.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Output??</b>

```js
function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

console.log(user.ref.name);
```

<b style="color: Orange;">Ans:</b> `undefined`

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Output??</b>

```js
const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user.logMessage, 1000);
```

<b style="color: Orange;">Ans:</b> After a delay of 1 second, `undefined` is logged to console. While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method because the function is passed by reference but without its original context.

To fix this, we can use `bind`.

```js
setTimeout(user.logMessage.bind(user), 1000); // Output -> Piyush Agarwal!
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Output??</b>

```js
var status = "😎";

setTimeout(() => {
  const status = "😍";

  const data = {
    status: "🥑",
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this));
}, 0);
```

<b style="color: Orange;">Ans:</b>

Output:

```
🥑
undefined (😎 in browser environment)
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Output?</b>

```js
console.log(a);
console.log(b);

var a = (b = 5);
```

<b style="color: Orange;">Ans:</b> `ReferenceError: b is not defined`. The code is equivalent to:

```js
var a; // Due to hoisting, declared at top of scope.

console.log(a);
console.log(b);

b = 5;
a = 5;
```

`b` becomes the global variable but only after it's initialization. Hence, the console statement of `b`, that occurs before initialization will give reference error of `b` being undefined because at that time it is neither declared nor defined.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output

```js
(function () {
  setTimeout(() => {
    console.log(x);
    console.log(y);
  }, 3000);
  var x = "A";
  let y = "B";
})();

(function () {
  for (var i = 0; i < 3; i++) setTimeout(() => console.log(i), 2000);
})();

(function () {
  setTimeout(() => console.log("C"), 2000);
  console.log("D");
  setTimeout(() => console.log("E"), 0);
  console.log("F");
})();
```

<b style="color: Orange;">Ans:</b> D F E 3 3 3 C A B

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Will the type of `new String('')` and `''` be same? Explain.

<b style="color: Orange;">Ans:</b> No. The expression `''` is a primitive string in JavaScript. Primitive types in JavaScript include `string`, `number`, `boolean`, `null`, `undefined`, `symbol`, and `bigint`. Hence, `typeof ''` returns `string`. While the expression `new String('')` creates a `String` object. When you use the `new` keyword with `String()`, it creates an object wrapper around the string. For example in code -> `let objectString = new String('');
`, `objectString` is not a primitive string but an object of type `String`. Hence, `typeof new String('')` returns `object`.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Explain Higher Order Functions in javascript.

<b style="color: Orange;">Ans:</b> Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output for below code.

```js
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

<b style="color: Orange;">Ans:</b> `3 3 3`. Explaination: As we know `var` variable is function scoped or globally scoped, so here `i` will be global variable. Hence, no new scope of `i` is created at every iteration. Now, when the callback function of `setTimeout()` web API is invoked, the JS engine looks for the value of `i` in its execution context. Since the value of `i` is not there, the JS engine will look for the value of `i` in its lexical scope chain. The immediate lexical scope of the callback function is the global scope created by the `var` variable, and the JS engine finds the value of `i` (which is 3 because the `for` loop has ended) and hence logs the value of `i` on the console. Similarly, the other callback functions of `setTimeout()` web API get executed in this fashion.

If we want to print `0 1 2`, one of the ways is create a new function and wrap `setTimeout()` inside that. And pass `i` every time in calling. Because every time you call this function with `i`, it creates a new copy of `i` for `setTimeout()`.

```js
for (var i = 0; i < 3; i++) {
  ((_i) => {
    setTimeout(() => {
      console.log(_i);
    }, 0);
  })(i);
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output for below code.

```js
for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i);
  }, 0);
}
```

<b style="color: Orange;">Ans:</b> `0 1 2`. Explaination: We know that `let` variable creates a block scope. Hence, for each iteration in the `for` loop, a new block scope is created due to the presence of `let` and the value of `i` is unique for each iteration. Now, when the callback function of `setTimeout()` web API is invoked, the JS engine looks for the value of `i` in its execution context. Since the value of `i` is not there, the JS engine will look for the value of `i` in its lexical scope chain. The immediate lexical scope of the callback function is the block scope created by the `let` variable in that particular iteration, and the JS engine finds the value of `i` and hence logs the value of `i` on the console. Similarly, the other callback functions of `setTimeout()` web API get executed in this fashion.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output for below code.

```js
var x = 23;
(function () {
  var x = 43;
  (function random() {
    x++;
    console.log(x);
    var x = 21;
  })();
})();
```

<b style="color: Orange;">Ans:</b> `NaN`. Explaination: `random()` function has functional scope since x is declared and hoisted in the functional scope.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output for below code.

```js
function foo() {
  let x = (y = 0);
  x++;
  y++;
  return x;
}

console.log(foo(), typeof x, typeof y);
```

<b style="color: Orange;">Ans:</b> Of course the return value of `foo()` is `1 `due to the increment operator. But the statement `let x = y = 0` declares a local variable `x`. Whereas `y` declared as a global variable accidentally. This statement is equivalent to:

```js
let x;
window.y = 0;
x = window.y;
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output for below code.

```js
console.log([0] == false);
if ([0]) {
  console.log("I'm True");
} else {
  console.log("I'm False");
}
console.log([1, 2] + [3, 4]);
console.log(NaN == NaN);
console.log([1, 2, 3] == "1,2,3");
```

<b style="color: Orange;">Ans:</b> `True`---`I'm true`---`1,23,4`---`false`---`true`

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output.

```js
try {
  setTimeout(() => {
    console.log("try block");
    throw new Error(`An exception is thrown`);
  }, 1000);
} catch (err) {
  console.log("Error: ", err);
}
```

<b style="color: Orange;">Ans:</b> `try block, Uncaught Error: Exception is thrown`

If you put `setTimeout` / `setInterval` methods inside the try clause and an exception is thrown, the catch clause will not catch any of them. This is because the `try...catch` statement works synchronously, and the function in the above code is executed asynchronously after a certain period of time. Hence, you will see runtime exception without catching the error. To resolve this issue, you have to put the `try...catch` block inside the function as below:

```js
setTimeout(() => {
  try {
    console.log("try block");
    throw new Error(`An exception is thrown`);
  } catch (err) {
    console.log("Error: ", err);
  }
}, 1000);
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output.

```js
let quickPromise = Promise.resolve();
quickPromise.then(() => console.log("promise finished"));
console.log("program finished");
```

<b style="color: Orange;">Ans:</b> `program finished, promise finished`. Even though a promise is resolved immediately, it won't be executed immediately because its `.then/catch/finally` handlers or callbacks(aka task) are pushed into the Microtask queue. Whenever the JavaScript engine becomes free from the current program, it pulls a task from the queue and executes it. This is the reason why last statement is printed first before the log of promise handler.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output.

```js
function greet(greeting, name, message = greeting + " " + name) {
  console.log([greeting, name, message]);
}

greet("Hello", "John");
greet("Hello", "John", "Good morning!");
```

<b style="color: Orange;">Ans:</b> `['Hello', 'John', 'Hello John'], ['Hello', 'John', 'Good morning!']`. Since parameters defined earlier are available to later default parameters, this code snippet doesn't throw any error.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output.

```js
function checkType(num = 1) {
  console.log(typeof num);
}

checkType();
checkType(undefined);
checkType("");
checkType(null);
```

<b style="color: Orange;">Ans:</b> `number, number, string, object`. If the function argument is set implicitly(not passing argument) or explicitly to `undefined`, the value of the argument is the default parameter. Whereas for other falsy values(`''` or `null`), the value of the argument is passed as a parameter.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write output.

```js
function delay() {
  return new Promise((resolve) => setTimeout(resolve, 2000));
}

async function delayedLog(item) {
  await delay();
  console.log(item);
}

async function process(array) {
  array.forEach(async (item) => {
    await delayedLog(item);
  });
  console.log("Process completed!");
}
process([1, 2, 3, 5]);
```

<b style="color: Orange;">Ans:</b> `Process completed! and 1 2 3 5`. The `forEach` method will not wait until all items are finished but it just runs the tasks and goes next. Hence, the last statement is displayed first followed by a sequence of promise resolutions. But you control the array sequence using `for..of` loop:

```js
async function processArray(array) {
  for (const item of array) {
    await delayedLog(item);
  }
  console.log("Process completed!");
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/squash-object">Flatten this nested object / Squash Object.</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/classnames">Implement `classnames` utility function used to join classes</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> How will you check if a variable contains a promise?

<b style="color: Orange;">Ans:</b> `Promise.resolve(data) === data`

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement an event emitter - <a href="https://www.greatfrontend.com/questions/javascript/event-emitter">Ques Link</a>

- Multiple listeners can be registered for one event name.
- `emit` should also return true/false on the basis of whether event got listened.
- `on` and `off` should support chaining.
- Duplicate listeners can be added and they should execute that many times.
- Removing 1 duplicate listener is supposed to remove just one duplicate. Others should remain.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/get-elements-by-style">getElementsByStyleName</a>

<b style="color: Orange;">Ans:</b>

```js
// ❌ Using document.querySelectorAll("*") is not allowed in interviews!

export default function getElementsByStyle(element, property, value) {
  const children = Array.from(element.children),
    res = [];

  children.forEach((child) => {
    if (window.getComputedStyle(child)[property] === value) res.push(child);
    res.push(...getElementsByStyle(child, property, value));
  });

  return res;
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/get-elements-by-class-name"> Implement getElementsByClassName</a>

<b style="color: Orange;">Ans:</b>

```js
const check = (list1, list2) => {
  for (const cn2 of list2) {
    if (list1.find((cn1) => cn1 === cn2)) continue;
    return false;
  }
  return true;
};

export default function getElementsByClassName(element, classNames) {
  const children = Array.from(element.children),
    res = [];

  children.forEach((child) => {
    if (check(Array.from(child.classList), classNames.trim().split(/\s+/))) res.push(child);
    res.push(...getElementsByClassName(child, classNames));
  });

  return res;
}
```

<br>
<hr>
<br>


<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/flatten-deeply-nested-array">Flatten Array by k levels</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/promise-time-limit">Auto reject promise if time limit exceeded</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/compact-object">Remove all values that are falsy</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/memoize-ii">Memoize 2 (Using Trie)</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-JSON-parse">Implement JSON.parse</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Polyfill of promise

<b style="color: Orange;">Ans:</b> https://medium.com/@manojsingh047/polyfill-for-javascript-promise-81053b284e37

```js
function PromisePolyfill(executer) {
  let onResolve,
    onReject,
    isCalled = false,
    isFullfilled = false,
    isRejected = false,
    value,
    error;

  this.then = function (thenHandler) {
    onResolve = thenHandler;
    if (!isCalled && isFullfilled) {
      onResolve(value);
      isCalled = true;
    }
    return this;
  };

  this.catch = function (catchHandler) {
    onReject = catchHandler;
    if (!isCalled && isRejected) {
      onReject(error);
      isCalled = true;
    }
    return this;
  };

  function resolve(res) {
    isFullfilled = true;
    value = res;
    if (!isCalled && typeof onResolve === "function") {
      onResolve(res);
      isCalled = true;
    }
  }

  function reject(err) {
    isRejected = true;
    error = err;
    if (!isCalled && typeof onReject === "function") {
      onReject(err);
      isCalled = true;
    }
  }

  executer(resolve, reject);
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-JSON-stringify">JSON.stringify implementation</a> [TODO ✍️] 🌟🌟🌟🌟🌟

```js
function jsonStringify(value) {
    // Handle primitives (null, boolean, number, string)
    if (value === null) return "null";
    if (typeof value === "boolean" || typeof value === "number") return String(value);
    if (typeof value === "string") return `"${value}"`;

    // Handle arrays
    if (Array.isArray(value)) {
        let arrayValues = value.map(item => jsonStringify(item)).join(",");
        return `[${arrayValues}]`;
    }

    // Handle objects
    if (typeof value === "object") {
        let keys = Object.keys(value);
        let objectValues = keys.map(key => `"${key}":${jsonStringify(value[key])}`).join(",");
        return `{${objectValues}}`;
    }

    // Return undefined for unsupported types (functions, undefined, symbols)
    return undefined;
}

// Example Usage
console.log(jsonStringify({ a: 1, b: "hello", c: [1, 2, 3], d: null })); 
// Output: {"a":1,"b":"hello","c":[1,2,3],"d":null}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/detect-data-type-in-JavaScript">Detect Data Type</a>

<b style="color: Orange;">Ans:</b>

```js
function detectType(data) {
  if (data === undefined) return "undefined";
  else if (data == null || data.constructor == Object) return "null";
  else if (data.constructor == Number) return "number";
  else if (data.constructor == Map) return "map";
  else if (data.constructor == Array) return "array";
  else if (data.constructor == Boolean) return "boolean";
  else if (data.constructor == String) return "string";
  else if (data.constructor == Function) return "function";
  else if (data.constructor == ArrayBuffer) return "arraybuffer";
  else if (data.constructor == Set) return "set";
  else if (data.constructor == Date) return "date";
  else if (data.constructor == Symbol) return "symbol";
  else if (data.constructor == BigInt) return "bigint";
  return "class";
}

// 🌟 Alternate approach! 🌟

function detectTypeAlternate(data) {
  return Object.prototype.toString.call(data).slice(1, -1).split(" ")[1].toLowerCase();
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/check-if-object-instance-of-class/
">Write a function that checks if a given value is an instance of a given class or superclass</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> What is pure function

<b style="color: Orange;">Ans:</b> A pure function in JavaScript is a function that:

1. **Always returns the same output given the same input:** This means that the function's output is solely determined by its input parameters, and it doesn't depend on any external state or variables.
2. **Has no side effects:** This means that the function does not modify any variables outside its scope, or interact with the outside world in any way (e.g., it doesn't perform I/O operations, modify the DOM, etc.).

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> How to block the execution of a thread in JavaScript?

<b style="color: Orange;">Ans:</b> There’s no `sleep()` method in JavaScript so we have to write custom logic for it:

```js
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));

const fun = async () => {
  await sleep(1000);
  console.log("First");
};

fun();
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-deep-equal-isEqual">Check equality of deeply nested object.</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/data-merging">Data Merging</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/deep-omit">Omitted Keys</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/can-you-shuffle-an-array">Shuffle an array with all permutations have equal probabilty of occurrance</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-clearAllTimeout">Clear All Timeouts implementation</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/promisify">Promisify</a> 😵‍💫

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/two-way-binding">2-way binding</a>

<b style="color: Orange;">Ans:</b> `set` property in `defineProperty` can be used like an event listener for changes in an object's key!

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-Array-prototype-map">Array.prototype.map polyfill</a>

<b style="color: Orange;">Ans:</b> Remember 2 things: Don't use forEach directly as it will loop through empty array spots as well and callback function passed to map can also change the array length, so one must extract the length before using it.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-Array-prototype-reduce">Array.prototype.reduce polyfill</a>

<b style="color: Orange;">Ans:</b> A great trick to learn from this question: How will you check if a function is receiving 2nd argument or not, as it could be passed `undefined` as well, so that check won't work! The best way is to take arguments in rest parameter - `...args` and check it's length!

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-lodash-get">lodash \_.get implementation</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-a-sum">Create a sum</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-lazyman">🌟🌟🌟🌟🌟🌟 Microtask-based question</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/retry-promise-on-rejection">auto-Retry promise on rejection </a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/discuss/interview-question/2409192/Uber-or-Phone-Screen-or-Senior-Front-End-Engineer">🌟🌟🌟🌟🌟🌟 Limited concurrent promises</a>

- <a href="https://www.greatfrontend.com/questions/javascript/map-async-limit">Same Q on greatfrontend</a>
- <a href="https://bigfrontend.dev/problem/throttle-Promises">Throttling with limit on concurrent promises</a>
- Watch this video also: **TASK RUNNER**: https://www.youtube.com/watch?v=wkG4dYmmO-A&t=1s&ab_channel=DevtoolsTech

<b style="color: Orange;">Ans:</b> Check bigfrontend.dev for other method

```js
async function runWithConcurrency(tasks, limit) {
  const results = [];
  const executing = [];

  for (const task of tasks) {
    const p = task().then(res => {
      executing.splice(executing.indexOf(p), 1);
      return res;
    });
    results.push(p);
    executing.push(p);

    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }

  return Promise.all(results);
}

// Usage:
const tasks = [() => fetch('url1'), () => fetch('url2'), ...];
runWithConcurrency(tasks, 3).then(console.log);
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://leetcode.com/problems/insert-delete-getrandom-o1">O(1) insertion, deletion and getRandom in a set</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/what-is-composition-create-a-pipe">Function composition pipe()</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-a-counter-object">create a counter object</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-a-counter-object">create a counter object</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/count-function">create a count function</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/create-your-own-new-operator">custom `new` operator</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/merge-identical-API-calls">Merge Identical API Calls</a> [TODO ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/event-delegation">Event Delegation 😵‍💫😵‍💫😵‍💫</a> [TODO ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/write-your-own-instanceof">custom `instanceof` operator</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-object-assign">`Object.assign` polyfill</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-completeAssign">complete assign</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-partial">Partial function (placeholder stuff)</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Remove all extra whitespaces from the string</a>

<b style="color: Orange;">Ans:</b>

```js
str
  .split(" ")
  .filter((c) => c !== "")
  .join(" ");
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/support-negative-Array-index">Support neg indexes - `Proxy` use</a> [TODO ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> What is output of below code

```js
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

Promise.resolve().then(() => {
  console.log("Promise 3");
  setTimeout(() => console.log("Timeout inside Promise"), 0);
});

console.log("End");
```

<b style="color: Orange;">Ans:</b> Start → End → Promise 1 → Promise 3 → Promise 2 → Timeout → Timeout inside Promise

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://bigfrontend.dev/problem/implement-memoizeOne">memoizeOne()</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> What is output of below code

```js
Promise.reject("Initial Error")
  .catch((err) => {
    console.log("Caught:", err);
    throw new Error("New Error");
  })
  .then(() => console.log("This will not run"))
  .catch((err) => console.log("Final Catch:", err.message));
```

<b style="color: Orange;">Ans:</b> Caught: Initial Error → Final Catch: New Error

- The first `.catch()` handles the rejection but throws a new error.
- The subsequent `.then()` is skipped because the new error propagates.
- The final `.catch()` catches the New Error and logs its message.

<br>
<hr>
<br>


<b style="color: Chartreuse;">Q:</b> Custom `setInterval` [TODO ✍️]

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement pausable timer (`setTimeout`)

<b style="color: Orange;">Ans:</b>

```js
let timeoutId = null;
let startTime;
let remainingTime = 5000; // 5 seconds

function startTimer(callback) {
  startTime = Date.now();
  timeoutId = setTimeout(callback, remainingTime);
}

function pauseTimer() {
  if (timeoutId) {
    clearTimeout(timeoutId);
    timeoutId = null;
    remainingTime -= Date.now() - startTime; // Calculate remaining time
  }
}

function resumeTimer(callback) {
  if (!timeoutId) {
    startTimer(callback);
  }
}

// Usage example
startTimer(() => console.log("Timer finished"));
setTimeout(pauseTimer, 2000); // Pause after 2 seconds
setTimeout(() => resumeTimer(() => console.log("Timer finished")), 4000); // Resume after another 2 seconds
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/data-selection">Data Selection: GroupBy kinda</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> <a href="https://www.greatfrontend.com/questions/javascript/debounce-ii">Debounce with cancel and flush</a>

<br>
<hr>
<br>

</div>
