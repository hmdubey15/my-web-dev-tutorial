<div style="font-size: 17px;background: black;padding: 2rem;">

# <a href="https://github.com/sudheerj/javascript-interview-questions">Questions</a>

<b style="color: Chartreuse;">Q:</b> Polyfill for `Promise.all`:

<b style="color: Orange;">Ans:</b>

```js
const promiseAll = (promisesArr) =>
  new Promise((resolve, reject) => {
    const n = promisesArr.length;
    if (n == 0) return [];
    const resArr = [];
    let execPromises = 0;
    promisesArr.forEach((promise, index) => {
      // Promise.resolve is being used to handle the case if any element in array is not promise!
      Promise.resolve(promise)
        .then((res) => {
          execPromises++;
          resArr[index] = res;
          if (execPromises == n) resolve(resArr);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
```

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

<b style="color: Chartreuse;">Q:</b> Polyfill for `Function.call`:

<b style="color: Orange;">Ans:</b>

```js
Function.prototype.callPolyfill = function (context, ...args) {
  if (typeof this != "function") throw new Error(this + " is not callable.");
  const fn_name = new Date().getTime().toString();
  Object.defineProperty(context, fn_name, {
    value: this,
    enumerable: false,
  });
  const result = context[fn_name](...args);
  delete context[fn_name];
  return result;
};
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement functionality deep copy:

<b style="color: Orange;">Ans:</b>

```js
function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") return obj;
  var copy = Array.isArray(obj) ? [] : {};
  for (var key in obj) if (Object.hasOwn(obj, key)) copy[key] = deepCopy(obj[key]);
  return copy;
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Explain and implement debounce functionality:

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

Advanced throttle with waiting arguments - <a href="https://www.youtube.com/watch?v=cjIswDCKgu0">LINK</a>

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Explain currying and implement it's code:

<b style="color: Orange;">Ans:</b> Currying in JavaScript is a technique where a function with multiple arguments is converted into a sequence of nested functions, each taking a single argument. In simple words, it is a transform that makes `f(a,b,c)` callable as `f(a)(b)(c)`. This allows you to partially apply arguments to a function, creating a new function with fewer arguments. The curried function returns another function until all the arguments are provided, at which point the original function is executed. Currying allows you to create pre-configured functions with some arguments already set. This can be useful for functions that are often used with the same initial values.

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) return func.apply(this, args);
    else
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
  };
}
```

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

<b style="color: Chartreuse;">Q:</b> Write polyfill of `_once` in lodash (In Lodash, the `_once` method is used to ensure that a given function is called only once, regardless of how many times it is invoked. After the first call, subsequent calls to the function will return the result of the first invocation.)

<b style="color: Orange;">Ans:</b>

```js
var once = function (fn) {
  let alreadyCalled = false;
  return function (...args) {
    if (!alreadyCalled) {
      alreadyCalled = true;
      return fn.apply(this, args);
    }
    return undefined;
  };
};
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Write polyfill for `_memoize` function of lodash. (This function in Lodash is used to create a memoized version of a given function. The memoized function caches the results of calls with the same arguments, so subsequent calls with the same arguments return the cached result instead of recomputing the value. This can significantly improve performance for expensive or frequently called functions.)

<b style="color: Orange;">Ans:</b>

```js
function defaultMemoize(callback, context = null) {
  let cache = {};
  return function (...args) {
    const strArgs = JSON.stringify(args);
    if (!cache[strArgs]) cache[strArgs] = callback.call(context || this, ...args);
    return cache[strArgs];
  };
}

function fun(a, b) {
  console.log("Function Called");
  return a + b;
}

const memoizedFun = defaultMemoize(fun);

memoizedFun(1, 2); // Function Called
memoizedFun(1, 2);
memoizedFun(5, 6); // Function Called
memoizedFun(5, 6);
```

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

<b style="color: Chartreuse;">Q:</b> Differenc between statement and expression?</b>

<b style="color: Orange;">Ans:</b> An `expression` is any valid unit of code that resolves to a value. It can be as simple as a literal or as complex as a function invocation. A `statement` performs an action. It is an instruction to perform a specific task. Statements can contain expressions, but they do not return a value themselves (though the expressions within them may). `Ternary operator` is an expression while `if-else` is statement.

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

<b style="color: Chartreuse;">Q:</b> Blinkit Interview Question: Front and back buttons functionality</b>: https://leetcode.com/problems/design-browser-history/description/

<b style="color: Orange;">Ans:</b> Can't use stack or 2 stacks because if user navigates on some other tab, you'll have to manually empty the stacks. Doubly linked list needs to be used.

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Create Holy Grail Layout (simple HTML page layout as asked in Toddle - https://www.youtube.com/watch?v=WcEop9MnNS4&list=PLe3J6mZBq1xUs529Z-IHiCix4KBm0uLp1&index=2)

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Todo list using Vanilla JS

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

<b style="color: Chartreuse;">Q:</b> Flatten this nested object.

```js
const OBJ = {
  a: { b: { c: 1 }, d: { e: { f: 2 } } },
  g: { h: 3 },
  i: 4,
};
```

<b style="color: Orange;">Ans:</b>

```js
const func = (obj, k = "") => {
  if (typeof obj != "object") return { [k]: obj };
  let o = {};
  for (key in obj) {
    const combinedKey = k === "" ? k + key : `${k}.${key}`;
    o = { ...o, ...func(obj[key], combinedKey) };
  }
  return o;
};

const flattenedObj = func(OBJ);

console.log(flattenedObj);
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement `classnames` utility function used to join classes - <a href="https://www.greatfrontend.com/questions/javascript/classnames">Question Link</a>

<b style="color: Orange;">Ans:</b>

```js
function classnames(...args) {
  return args
    .flatMap((arg) => {
      if (!arg) return []; // Skip falsy values

      if (typeof arg === "string") {
        return arg; // Include plain string class names
      }

      if (typeof arg === "object" && !Array.isArray(arg)) {
        // Include keys from objects with truthy values
        return Object.keys(arg).filter((key) => arg[key]);
      }

      if (Array.isArray(arg)) {
        return classnames(...arg); // Flatten nested arrays recursively
      }

      return [];
    })
    .join(" "); // Join all classes with a space
}
```

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

<b style="color: Orange;">Ans:</b>

```js
export default class EventEmitter {
  constructor() {
    this.emitter = {};
  }

  on(eventName, listener) {
    if (!listener) return this;
    if (this.emitter.hasOwnProperty(eventName)) {
      const map = this.emitter[eventName];
      const data = map.get(listener);
      if (data) map.set(listener, data + 1);
      else map.set(listener, 1);
    } else this.emitter[eventName] = new Map([[listener, 1]]);
    return this;
  }

  off(eventName, listener) {
    if (!this.emitter.hasOwnProperty(eventName) || !listener) return this;
    const map = this.emitter[eventName];
    const data = map.get(listener);
    if (data === 1) map.delete(listener);
    else map.set(listener, data - 1);
    if (this.emitter[eventName].size === 0) delete this.emitter[eventName];
    return this;
  }

  emit(eventName, ...args) {
    if (!this.emitter.hasOwnProperty(eventName)) return false;
    this.emitter[eventName].forEach((freq, listener) => {
      while (freq--) listener(...args);
    });
    return true;
  }
}
```

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement entire Event Loop functionality.

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Implement a function which returns all elements on document with a given style.

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> LRU Cache problem - https://leetcode.com/problems/lru-cache/description/

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Curry with placeholders

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Group By question - https://leetcode.com/problems/group-by

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Flatten Array - https://leetcode.com/problems/flatten-deeply-nested-array

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Promise Time Limit Question - https://leetcode.com/problems/promise-time-limit

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Compact Object - https://leetcode.com/problems/compact-object

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Cache with time limit - https://leetcode.com/problems/cache-with-time-limit/

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Advanced memoize (using Trie) - https://leetcode.com/problems/memoize-ii

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Convert JSON string to object

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b>Uncompress String - https://bigfrontend.dev/problem/uncompress-string

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b>Polyfill of promise

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b>JSON.stringify implementation - https://bigfrontend.dev/problem/implement-JSON-stringify

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Detect data type - https://bigfrontend.dev/problem/detect-data-type-in-JavaScript

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> Check if Object Instance of Class: https://leetcode.com/problems/check-if-object-instance-of-class/

<b style="color: Orange;">Ans:</b> -----------

<br>
<hr>
<br>

<b style="color: Chartreuse;">Q:</b> What is pure function

<b style="color: Orange;">Ans:</b> A pure function in JavaScript is a function that:

1. **Always returns the same output given the same input:** This means that the function's output is solely determined by its input parameters, and it doesn't depend on any external state or variables.
2. **Has no side effects:** This means that the function does not modify any variables outside its scope, or interact with the outside world in any way (e.g., it doesn't perform I/O operations, modify the DOM, etc.).

</div>
