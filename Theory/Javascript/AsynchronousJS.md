<div style="font-size: 17px;background: black;padding: 2rem;">

# Javascript Async

<span style="font-size: 25px; text-decoration: underline; font-weight: bold">Synchronous vs Asynchronous</span>

As its base JavaScript language is synchronous. Synchronous means the code runs in a particular sequence of instructions given in the program. Each instruction waits for the previous instruction to complete its execution.

```js
console.log("First");
console.log("Second");
console.log("Third");

/*
OUTPUT:
First
Second
Third
*/
```

Due to this nature of synchronous programming, sometimes important instructions get blocked due to some previous instructions, which causes a delay in the user interface. Asynchronous code execution allows to execute next instructions immediately and doesn't block the flow because of previous instructions.

```js
console.log("First");
setTimeout(() => console.log("Second"), 2000);
console.log("Third");

/* 
OUTPUT: 
First
Third
Second
*/
```

Any computation required to be done requires processor for our JavaScript engine to get the job done. Many requests interact with things outside the processor. For example: they may communicate over a network or request data from storage disk. We don't want our processor to sit idle when such things are happening. That's where asynchronous programming enters. There are several mechanisms in JavaScript for handling asynchronous operations:

- Browser API/Web API events or functions. These include methods like setTimeout, or event handlers like click, mouse over, scroll, and many more.
- Callbacks
- Promises
- Async/Await

<span style="font-size: 25px; text-decoration: underline; font-weight: bold">Callback Functions</span><br>
A function passed to another function as an argument is referred to as a callback function. The callback function runs after the completion of the outer function. It is useful to develop an asynchronous JavaScript code.

```js
const numArr = [1, 2];
// Suppose it's an API call which takes 3 seconds
const addNum = (callback) =>
  setTimeout(() => {
    numArr.push(3);
    callback();
  }, 2000);
// And it's an API call which takes 1 second
const showNumArr = () => setTimeout(() => console.log(numArr), 1000);
addNum(showNumArr);
```

Here we cannot call `showNumArr` function separately after `addNum` because former is taking just 1 sec while latter is taking 3. So former will get exacuted and array will be displayed while latter will remain in execution. That's where callback function comes into picture. <br>
<span style="color: Chartreuse;">Callbacks are generally used to continue the execution after completing an asynchronous operation - such are referred to as the asynchronous callbacks.</span>

<div style="font-size: 25px; text-decoration: underline; font-weight: bold">Promises</div>
Promises in real-life express a trust between two or more persons and an assurance that a particular thing will surely happen. In javascript, a Promise is an object which ensures to produce a single value in the future (when required). Promise in javascript is used for managing and tackling asynchronous operations.<br>
<b style="color: lightblue;">Promise allows us to associate handlers with an asynchronous action's eventual success value or failure reason.</b> This lets asynchronous methods return values like synchronous methods: instead of immediately returning the final value, the asynchronous method returns a promise to supply the value at some point in the future.<br>
A Promise is in one of these states:

- `pending`: initial state, neither fulfilled nor rejected.
- `fulfilled`: meaning that the operation was completed successfully.
- `rejected`: meaning that the operation failed.

The eventual state of a pending promise can either be fulfilled with a value or rejected with a reason (error). When either of these options occur, the associated handlers queued up by a promise's `then` method are called. This method takes two arguments, a callback for success and another for failure. Both are optional, so you can add a callback for success or failure only. A promise is said to be settled if it is either fulfilled or rejected, but not pending. When multiple callbacks can be included by invoking then() many times, each of them will be executed in a chain, i.e., one after the other, following the sequence in which they were inserted.

```js
const fetchFruitsPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const errorOccured = true;
    const response = ["Banana", "Mango", "Grapes"];
    const error = "Unexpected occurred!";
    if (!errorOccured) resolve(response);
    else reject(error);
  }, 1000);
});
fetchFruitsPromise.then(
  (response) => console.log("Promise Resolved! Response - ", response),
  (error) => console.log("Something went wrong! Error - ", error)
);
```

`catch` and `finally` methods are an alternate method of handling rejected promises. Both of them just call `then()`(subclassing supported). Like promise in above code can be resolved like this also.

```js
fetchFruitsPromise.then((response) => console.log("Himanshu: Thanks for resolving promise! Response - ", response)).catch((error) => console.log("Himanshu: Very bad bro! Error - ", error));
```

<span style="color: Cyan;">Each `.then()` returns a newly generated promise object, which can optionally be used for chaining.</span> For example:

```js
myPromise.then(handleFulfilledA, handleRejectedA).then(handleFulfilledB, handleRejectedB).then(handleFulfilledC, handleRejectedC);
```

<h3>Constructor of promise:</h3>

The `Promise` constructor in JavaScript is used to create a new promise object, which represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Syntax: <span style="color: Chartreuse;">new Promise(executor);</span>

`executor`: A function that is passed two arguments: `resolve` and `reject`. Inside this function, you perform the asynchronous operation, and then call resolve(value) when the operation succeeds or reject(reason) when it fails.

Important methods in Promise: (Refer this link for all - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)<br>

<u><b style="color: Salmon;">1. Promise.resolve</b></u>:
It is a static method available on the Promise object in JavaScript. It returns a new promise object that is resolved with the given value. If the value is a promise itself, it returns the given promise as-is, without creating a new promise.<br>

Syntax: <span style="color: Chartreuse;">Promise.resolve(value)</span>

`value`: The value with which the returned promise will be resolved. It can be any JavaScript value, including a promise.

1. Resolving with non-promise value:<br>
   ```js
   let promise = Promise.resolve("Hello");
   promise.then(function (value) {
     console.log(value); // Output: Hello
   });
   ```
2. Resolving with promise value:<br>

   ```js
   let innerPromise = new Promise(function (resolve) {
     setTimeout(function () {
       resolve("World");
     }, 1000);
   });

   let promise = Promise.resolve(innerPromise);
   promise.then(function (value) {
     console.log(value); // Output: World
   });
   ```

<u><b style="color: Salmon;">2. Promise.reject</b></u>:
It returns a new promise object that is rejected with the specified reason. This reason typically represents an error or failure condition that occurred during the execution of an asynchronous operation. If you pass a promise to it, the returned promise will be rejected with the same reason (or error) as the promise you passed.<br>

Syntax: <span style="color: Chartreuse;">Promise.reject(reason);</span>

`reason`: The reason for rejecting the promise. It can be any JavaScript value, such as an error object, a string, or any other value that provides context about why the promise was rejected.

```js
let promise = Promise.reject(new Error("Failed to fetch data"));
promise.catch(function (reason) {
  console.error(reason.message); // Output: Failed to fetch data
});
```

It is commonly used to create a promise that is immediately rejected with a predefined error or failure condition. It can be useful for signaling failure in asynchronous operations or for propagating errors in promise chains.

<u><b style="color: Salmon;">3. Promise.all</b></u>:

It is used to wait for multiple promises to fulfill and returns a single promise that resolves when all of the input promises have been fulfilled, or it immediately rejects if any of the input promises reject.<br>

Syntax: <span style="color: Chartreuse;">Promise.all(iterable);</span>

`iterable`: An iterable (such as an array) containing the promises to be awaited.

The returned promise will be fulfilled with an array of values corresponding to the fulfillment values of the input promises, in the same order as the input promises. If any of the input promises reject, the returned promise will be immediately rejected with the reason of the first promise that was rejected.

```js
let promise1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("First resolved");
  }, 1000);
});

let promise2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Second resolved");
  }, 2000);
});

let promise3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve("Third resolved");
  }, 3000);
});

Promise.all([promise1, promise2, promise3])
  .then(function (values) {
    console.log(values); // Output: ["First resolved", "Second resolved", "Third resolved"]
  })
  .catch(function (reason) {
    console.error(reason);
  });
```

If any of the promises reject (which doesn't happen in this example), the `.catch()` method would be called with the rejection reason.

<u><h4>IMPLEMENTATION OF Promise.all</h4></u>

```js
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    let results = [];
    let completedPromises = 0;

    if (promises.length === 0) {
      resolve(results);
      return;
    }

    promises.forEach((promise, index) => {
      promise
        .then((result) => {
          results[index] = result;
          completedPromises++;

          if (completedPromises === promises.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
}
```

<u><b style="color: Salmon;">4. Promise.allSettled</b></u>:

It is used to wait for all promises in an iterable to settle (fulfill or reject), and returns a single promise that resolves with an array of objects once all input promises have settled.

Syntax: <span style="color: Chartreuse;">Promise.allSettled(iterable);</span>

The returned promise will be fulfilled with an array of objects, where each object represents the outcome of each input promise. Each object has the following properties:
- `status`: A string indicating the status of the promise, either "fulfilled" if the promise was fulfilled, or "rejected" if the promise was rejected.
- `value`: The fulfillment value of the promise if it was fulfilled, or the rejection reason if it was rejected.

```js
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First resolved');
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Second rejected');
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third resolved');
    }, 3000);
});

Promise.allSettled([promise1, promise2, promise3])
    .then((results) => {
        console.log(results);
        /*
        Output:
        [
            { status: 'fulfilled', value: 'First resolved' },
            { status: 'rejected', reason: 'Second rejected' },
            { status: 'fulfilled', value: 'Third resolved' }
        ]
        */
    });
```

It is useful when you want to wait for multiple promises to complete regardless of their outcomes, and you need to inspect each promise's result individually. It allows you to handle a mixed array of fulfilled and rejected promises gracefully.

<u><b style="color: Salmon;">5. Promise.any</b></u>:

It is used to wait for the first promise in an iterable to fulfill, and then it returns that promise's value (fulfilled value). If all promises in the iterable reject, it returns a single promise that rejects with an AggregateError object containing information about all the rejections.


Syntax: <span style="color: Chartreuse;">Promise.any(iterable);</span>

```js
const failure = new Promise((resolve, reject) => {
  reject("Always fails");
});

Promise.any([failure]).catch((err) => {
  console.log(err);
});
// AggregateError: No Promise in Promise.any was resolved
```

<u><b style="color: Salmon;">6. Promise.race</b></u>:

It is used to wait for the first promise in an iterable to settle (fulfill or reject), and then it returns that promise's value (fulfilled value) or rejection reason.

Syntax: <span style="color: Chartreuse;">Promise.race(iterable);</span>

The returned promise will be settled (fulfilled or rejected) as soon as the first promise in the iterable settles. If the first settled promise is fulfilled, the returned promise will be fulfilled with that promise's value. If the first settled promise is rejected, the returned promise will be rejected with that promise's rejection reason.

```js
let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('First resolved');
    }, 1000);
});

let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Second rejected');
    }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Third resolved');
    }, 3000);
});

Promise.race([promise1, promise2, promise3])
    .then((value) => {
        console.log(value); // Output: First resolved
    })
    .catch((error) => {
        console.error(error); // This will not execute in this example
    });
```


<div style="font-size: 25px; text-decoration: underline; font-weight: bold">Async/Await</div>

Topic in detail - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function & https://javascript.info/async-await

<div style="text-decoration: underline; font-weight: bold">Async:</div>

The keyword `async` before a function makes the function return a promise. If promise is not returned, JS automatically wraps it in a promise which is resolved with its value. Value is undefined in case return statement is missing. In below given code myFunction1 and myFunction2 are same.

```js
async function myFunction1() {
  return "Hello";
}
function myFunction2() {
  return Promise.resolve("Hello");
}
```

It simply allows us to write promises-based code as if it was synchronous and it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always return a value.<br><br>

<div style="text-decoration: underline; font-weight: bold">Await:</div> Await keyword could be used within the async block only. It makes the code wait until the promise returns a result. Await expressions make promise-returning functions behave as though they're synchronous by suspending execution of that async function until the returned promise is fulfilled or rejected. The resolved value of the promise is treated as the return value of the await expression. Use of async and await enables the use of ordinary try / catch blocks around asynchronous code.

<span style="color: pink;">If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line. We can catch that error using try..catch, the same way as a regular throw.</span>

```js
const fetchData = async () => {
  console.log("Inside fetchData: Initiating API Call");
  try {
    const apiData = await new Promise((resolve, reject) => {
      const isDataFetchSuccessful = false;
      if (isDataFetchSuccessful) resolve({ status: "SUCCESS", data: [] });
      else reject({ status: "FAIL", error: "Something went wrong!" });
    });
    console.log("Data Fetch Successful - Response: ", apiData);
  } catch (error) {
    console.log("Data Fetch Failed - Response: ", error);
  }
};
console.log("Before calling fetchData");
fetchData();
console.log("After calling fetchData");
```

OUTPUT:-

```
Before calling fetchData
Inside fetchData: Initiating API Call
After calling fetchData
Data Fetch Failed - Response:  { status: 'FAIL', error: 'Something went wrong!' }
```

Using await doesn’t cost any CPU resources, because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc. It’s just a more elegant syntax of getting the promise result than `promise.then`. And, it’s easier to read and write.

<span style="color: pink;">If a promise resolves normally, then await promise returns the result. But in the case of a rejection, it throws the error, just as if there were a throw statement at that line. We can catch that error using try..catch, the same way as a regular throw.<span>

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
