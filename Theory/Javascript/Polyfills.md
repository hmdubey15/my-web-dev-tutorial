<div style="font-size: 17px;background: black;padding: 2rem;">

## Caching Decorator (Transparent Caching)

Let’s say we have a function `slow(x)` which is CPU-heavy, but its results are stable. In other words, for the same `x` it always returns the same result. If the function is called often, we may want to cache (remember) the results to avoid spending extra-time on recalculations. But instead of adding that functionality into `slow()` we’ll create a wrapper function, that adds caching. As we’ll see, there are many benefits of doing so.

```js
function cachingDecorator(callbackFun) {
  const cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    // function.apply is necessary because if callback function is a method, `this` keyword in it would become undefined
    if (!cache?.[key]) cache[key] = callbackFun.apply(this, args);
    return cache[key];
  };
}

const decoratedFun = cachingDecorator(function () {
  console.log("Heavy Fun");
});
decoratedFun();
```

This way also has a problem. What if callback function passed has some properties (as it is also object at the end of the day)? That will be lost wrapping it with caching decorator. There exists a way to create decorators that keep access to function properties, but this requires using a special `Proxy` object to wrap a function. It is quite advanced way and won't be needed any sooner.

<h3>Benefits:</h3>

- The `cachingDecorator` is reusable. We can apply it to another function.
- The caching logic is separate, it did not increase the complexity of callback function itself.
- Main code remains simple. If we create global data structure for storing data, we will have to create different data structures for different functions and will have to check in main code everytime if our data is cached or not.

<br>

## Debounce and Throttle

<b style="color: Salmon; font-size: 24px;"> Watch <a href="https://www.youtube.com/watch?v=cjIswDCKgu0&ab_channel=WebDevSimplified">this</a> video for best understanding</b>

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Debounce</h3>

Debouncing is a technique used to limit the rate at which a particular function is executed, particularly in response to frequent events like scrolling, resizing, or typing. The goal is to ensure that the function is only called once after a certain amount of time has passed since the last invocation of the event, rather than being called every time the event occurs.

Here's a basic explanation of how debounce works:

- When an event occurs, the function is triggered.
- A timer is started.
- If the event occurs again before the timer expires, the timer is reset.
- If the event doesn't occur again before the timer expires, the function is finally executed.

Debouncing is typically implemented using timers. Here's a basic explanation of how it works:

```js
const debounce = (func, delay = 500) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Throttle</h3>

Throttling ensures that a function is not called more often than a certain time interval, even if the event triggering the function occurs more frequently. It limits the execution rate of the function to a fixed interval.

Here's a basic explanation of how throttle works:

- When an event occurs, the function is triggered.
- The function is executed immediately.
- Subsequent calls to the function within the throttling interval are ignored.
- Once the throttling interval has elapsed, the next call to the function is allowed, and the process repeats.

Throttling ensures that the function is executed regularly, at a specified interval, regardless of how frequently the event occurs.

```js
// SIMPLE THROTTLE
function throttle(cb, delay) {
  let wait = false;

  return (...args) => {
    if (wait) {
      return;
    }

    cb(...args);
    wait = true;
    setTimeout(() => {
      wait = false;
    }, delay);
  };
}
```

```js
// ADVANCED THROTTLE WITH MEMOIZED ARGS
const throttle = (func, limit = 500) => {
  let shouldWait = false;
  let waitingArgs = null;
  const timeoutFunc = () => {
    if (waitingArgs) {
      func(...waitingArgs);
      waitingArgs = null;
      setTimeout(timeoutFunc, limit);
    } else shouldWait = false;
  };

  return (...args) => {
    if (shouldWait) {
      waitingArgs = args;
      return;
    }
    func(...args);
    shouldWait = true;
    setTimeout(timeoutFunc, limit);
  };
};
```

<br>

## Currying

Currying in JavaScript is a technique where a function with multiple arguments is converted into a sequence of nested functions, each taking a single argument. In simple words, it is a transform that makes `f(a,b,c)` callable as `f(a)(b)(c)`. This allows you to partially apply arguments to a function, creating a new function with fewer arguments. The curried function returns another function until all the arguments are provided, at which point the original function is executed.

```js
function curry(f) {
  // curry(f) does the currying transform
  return function (a) {
    return function (b) {
      return f(a, b);
    };
  };
}

// usage
function sum(a, b) {
  return a + b;
}

function minus(a, b) {
  return a - b;
}

let curriedSum = curry(sum);
let curriedMinus = curry(minus);

console.log(curriedSum(2)(1)); // 3
console.log(curriedMinus(2)(1)); // 1
```

More advanced implementations of currying, such as `_.curry` from lodash library, return a wrapper that allows a function to be called both normally and partially:

```js
function curry(func) {
  return function curried(...args) {
    if (args.length >= func.length) {
      return func.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2)); // concat being done because finally we have to call func from if block and it should get all necessary arguments
      };
    }
  };
}

function sum(a, b, c) {
  return a + b + c;
}

let curriedSum = curry(sum);

alert(curriedSum(1, 2, 3)); // 6, still callable normally
alert(curriedSum(1)(2, 3)); // 6, currying of 1st arg
alert(curriedSum(1)(2)(3)); // 6, full currying
```

When we run it, there are two `if` execution branches:

- If passed `args` count is the same or more than the original function has in its definition (`func.length`) , then just pass the call to it using `func.apply`.
- Otherwise, get a partial: we don’t call `func` just yet. Instead, another wrapper is returned, that will re-apply `curried` providing previous arguments together with the new ones.

<b style="color:red;">NOTE:</b> In this method, the function passed in `curry`, i.e. `sum` should not take arguments via rest parameter. Otherwise `func.length` in polyfill will return `0`.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Usage</h3>

- **Partial Application:** Currying allows you to create pre-configured functions with some arguments already set. This can be useful for functions that are often used with the same initial values.
- **Higher-Order Function Creation:** Currying helps create higher-order functions that return new functions based on the arguments they receive.
- **Improved Code Readability:** For functions with many arguments, currying can enhance readability by breaking them down into smaller, more manageable steps.

<br>

## Deep Copy

```js
// Polyfill for deep copying objects
function deepCopy(obj) {
  // Check if obj is null or not an object
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  // Create an empty object or array to store the copied properties
  var copy = Array.isArray(obj) ? [] : {};

  // Iterate over each property in the original object
  for (var key in obj) {
    // Check if the property is not inherited from the prototype chain
    if (obj.hasOwnProperty(key)) {
      // Recursively copy nested objects or arrays
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}
```

<br>

## Function.bind

```js
Function.prototype.myBind = function (obj, ...args) {
  const fn = this; // this -> object calling this function
  return function (...args2) {
    // We can avoid storing 'this' in constant if we use arrow function(as they don't have their own 'this', they inherit it from the surrounding lexical context.)
    fn.apply(obj, [...args, ...args2]);
  };
};

const myObj = { name: "HD", age: 23 };

function printDetails(city, country) {
  console.log("Name = ", this.name, "| Age = ", this.age, "| City = ", city, "| Country = ", country);
}

const myFun = printDetails.myBind(myObj, "Varanasi");
myFun("India");
```

<br>

## Function.call

```js
Function.prototype.customCall = function (context, ...args) {
  if(typeof this != 'function')
   throw new Error(this + " is not callable.");
  context.f = this;
  return context.f(...args);
};

function fun(college, company) {
  console.log('Name = ', this.name, ', College = ', college, ', Company = ', company);
}

fun.customCall({
  name: "Himanshu",
}, 'NIT JSR', 'Tekion');
```

</div>

<!-- <div style="font-size: 17px;background: black;padding: 2rem;"> -->
<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
