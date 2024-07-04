<div style="font-size: 17px;background: black;padding: 2rem;">

<b style="color: Chartreuse;">Q1:</b> Predict output:

```js
var x = 21;
var fun = function () {
  console.log(x); // Output?
  var x = 20;
};
fun();
```

<b style="color: Orange;">Ans-1:</b> In JavaScript, variable declarations (`var`) are hoisted to the top of their scope, but their assignments are not. This means that the declaration `var x` inside the function `fun` is hoisted to the top of the function scope, but the assignment `x = 20` remains in its original place. The code effectively becomes:

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

<b style="color: Chartreuse;">Q2:</b> Write polyfill of `_once` in lodash (In Lodash, the `_once` method is used to ensure that a given function is called only once, regardless of how many times it is invoked. After the first call, subsequent calls to the function will return the result of the first invocation.)

<b style="color: Orange;">Ans-2:</b>

```js
function once(callback, context = null) {
  let data = null;
  return function (...args) {
    if (!callback) {
      data = callback.apply(context || this, args); // if `callback` is a method of object, `this` needs to be preserved
      callback = null;
    }
    return data;
  };
}
```

<b style="color: Chartreuse;">Q3:</b> Write polyfill for `_memoize` function of lodash. (This function in Lodash is used to create a memoized version of a given function. The memoized function caches the results of calls with the same arguments, so subsequent calls with the same arguments return the cached result instead of recomputing the value. This can significantly improve performance for expensive or frequently called functions.)

<b style="color: Orange;">Ans-3:</b>

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
memoizedFun(5, 6)
```

<b style="color: Chartreuse;">Q4:</b> What we will be output?

```js
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

<b style="color: Orange;">Ans-4:</b> Object keys are automatically converted into strings. We are trying to set an object as a key to object `a`, with the value of `123`. However, when we stringify an object, it becomes `"[object Object]"`. So what we are saying here, is that `a["[object Object]"] = 123`. Then, we can try to do the same again. `c` is another object that we are implicitly stringifying. So then, `a["[object Object]"] = 456`.

Then, we log `a[b]`, which is actually `a["[object Object]"]`. We just set that to `456`, so it returns `456`.

<b style="color: Chartreuse;">Q5:</b> How can we stringify a particular given set of keys from an object?

<b style="color: Orange;">Ans-5:</b> `JSON.stringify(obj, ["key1", "key2", "key3", .........])`

<b style="color: Chartreuse;">Q6:</b> Predict output.

```js
let obj = {a:1};
let arr = [obj];
obj = null;
console.log(arr);
```

<b style="color: Orange;">Ans-6:</b> `{a:1}`. That is because it is just like assigning `arr[0] = obj` and we are changing just the variable `obj`. If we changed property of `obj` instead, `arr` would have been affected.

<b style="color: Chartreuse;">Q7:</b> What are First-Class objects?

<b style="color: Chartreuse;">Q8:</b> Output??</b>

```js
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

console.log( user.ref.name );
```

<b style="color: Orange;">Ans-8:</b> `undefined`

<b style="color: Chartreuse;">Q9:</b> Output??</b>

```js
const user = {
  name: "Piyush Agarwal!",
  logMessage() {
    console.log(this.name);
  },
};
setTimeout(user.logMessage, 1000);
```

<b style="color: Orange;">Ans-9:</b> After a delay of 1 second, `undefined` is logged to console. While `setTimeout()` function uses the `object.logMessage` as a callback, still, it invokes `object.logMessage` as a regular function, rather than a method because the function is passed by reference but without its original context. And during a regular function invocation `this` equals the global object which is `window` in the case of the browser environment. 

To fix this, we can use `bind`.

```js
setTimeout(user.logMessage.bind(user), 1000); // Output -> Piyush Agarwal!
```

<b style="color: Chartreuse;">Q10:</b> Output??</b>

```js
var status = '😎';

setTimeout(() => {
  const status = '😍';

  const data = {
    status: '🥑',
    getStatus() {
      return this.status;
    },
  };

  console.log(data.getStatus());
  console.log(data.getStatus.call(this)); 
}, 0);
```

<b style="color: Orange;">Ans-10:</b>

Output:

```
🥑
undefined (😎 in browser environment)
```

<b style="color: Chartreuse;">Q11:</b> Differenc between statement and expression?</b>

<b style="color: Orange;">Ans-11:</b> An `expression` is any valid unit of code that resolves to a value. It can be as simple as a literal or as complex as a function invocation. A `statement` performs an action. It is an instruction to perform a specific task. Statements can contain expressions, but they do not return a value themselves (though the expressions within them may). `Ternary operator` is an expression while `if-else` is statement.


<b style="color: Chartreuse;">Q12:</b> Output?</b>

```js
console.log(a);
console.log(b);

var a = b = 5;
```

<b style="color: Orange;">Ans-12:</b> `ReferenceError: b is not defined`

</div>

<!-- <div style="font-size: 17px;background: black;padding: 2rem;"> -->
<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
