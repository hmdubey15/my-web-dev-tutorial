<div style="font-size: 17px;background: black;padding: 2rem;">

As we know, there are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever). In contrast, objects are used to store keyed collections of various data and more complex entities. <span style="color: Violet;">An object is a collection of key-value pairs where each key is a string (or symbol) and each value can be any data type, including other objects.</span> Objects in JavaScript are dynamic, meaning you can add, modify, or remove properties at any time. This flexibility makes them extremely versatile and widely used in JavaScript programming.

An empty object can be created using one of two syntaxes:

```js
let user = new Object(); // "object constructor" syntax
let user = {}; // "object literal" syntax
```

Usually, the figure brackets `{...}` are used. That declaration is called an `object literal`.

We can immediately put some properties into `{...}` as `“key: value”` pairs:

```js
// an object
let user = {
  name: "John", // by key "name" store value "John"
  age: 30, // by key "age" store value 30
};
```

A `property` has a `key` (also known as “name” or “identifier”) before the colon `":"` and a `value` to the right of it. In the user object, there are two properties:

- The first property has the key `"name"` and the value `"John"`.
- The second one has the key `"age"` and the value `30`.

<h3><u>Operations on objects</u></h3>

- <b style="color:Salmon;">Reading properties: </b>You can access the properties of an object using `dot notation` or `bracket notation` => `user.name` and `user['name']` both will give value of the key `name` i.e. `'John'`. Please note that the string inside the brackets is properly quoted (any type of quotes will do). Dot notation can't be used with space separated keys, keys starting with symbols(except `$` and `_`) and keys that are stored in variables.
- <b style="color:Salmon;">Changing properties: </b>We can directly change the properties of objects => `user.name = 50`, `user['age'] = 40`, etc.
- <b style="color:Salmon;">Deleting properties: </b>To remove a property, we can use the <span style="color:LawnGreen;">delete</span> operator => `delete user.age;`.
- <b style="color:Salmon;">Extracting all keys and values of object: </b><span style="color:LawnGreen;">Object.keys(`obj`)</span> will return an array of keys of `obj`, <span style="color:LawnGreen;">Object.values(`obj`)</span> will return array of values of `obj`, <span style="color:LawnGreen;">Object.entries(`obj`)</span> will return an array of key/value pairs(also stored in array) of `obj` and <span style="color:LawnGreen;">Object.fromEntries(`entries`)</span> will return an object (performs just reverse stuff of `Object.entries()`)
- <b style="color:Salmon;">Property existence test</b>: A notable feature of objects in JavaScript, compared to many other languages, is that it’s possible to access any property. There will be no error if the property doesn’t exist! Reading a non-existing property just returns `undefined`. So we can easily test whether the property exists:

  ```js
  let user = {};
  console.log(user.noSuchProperty === undefined); // true means "no such property"
  ```

  There’s also a special operator <span style="color:LawnGreen;">in</span> to test that.

  ```js
  let user = { name: "John", age: 30 };
  console.log("age" in user); // true, user.age exists
  console.log("blabla" in user); // false, user.blabla doesn't exist
  ```

  Why does the `in` operator exist? Isn’t it enough to compare against `undefined`? Well, most of the time the comparison with `undefined` works fine. But there’s a special case when it fails, but `in` works correctly. It’s when an object property exists, but stores `undefined` => `let obj = {a: undefined}`.

- <b style="color:Salmon;">Looping through properties</b>: To walk over all keys of an object, there exists a special form of the loop: `for..in`. This is a completely different thing from the `for(;;)` construct that we studied before.

  ```js
  let user = {
    name: "John",
    age: 30,
    isAdmin: true,
  };

  for (let key in user) {
    // keys
    alert(key); // name, age, isAdmin
    // values for the keys
    alert(user[key]); // John, 30, true
  }
  ```

<br>

<b style="color:Magenta;">Note:</b> There are no limitations on property names. They can be any strings or symbols (a special type for identifiers, to be covered later). Other types are automatically converted to strings. For instance, a number `0` becomes a string `"0"` when used as a property key. There’s a minor gotcha with a special property named `__proto__`. We can’t set it to a non-object value. It is explained in prototypes and inheritence chapter.

<div style="border: 2px solid hotpink; padding: 10px;">

When we use objects as keys for other objects, the keys are implicitly converted to strings. However, when we stringify an object, it becomes `"[object Object]"`. Hence, using an object as a key can lead to unexpected behavior.

</div>

<br>

<h3><u>Order of keys</u></h3>

<b style="color:Gold;">The properties of objects are sorted in a special manner - integer properties are sorted, others appear in creation order.</b>

```js
let obj = {
  3: "c",
  2: "b",
  1: "a",
  userName: "HD",
  profession: "SE",
  location: "Bangalore",
};

for (let key in obj) {
  console.log(key); // 1 2 3 userName profession location
}
```

The “integer property” term here means a string that can be converted to-and-from an integer without a change. So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not.

<h3><u>Object Destructuring</u></h3>

It a convenient way to extract multiple properties from an object and assign them to variables in a single statement. It simplifies code by providing a concise syntax for extracting values from objects and allows you to access nested properties easily.

<b style="color:DarkOrchid;">Basic syntax:</b>

```js
let { a, b } = { a: 1, b: 2, c: 3 }; // a -> 1 & b -> 2
```

We should have an existing object on the right side, that we want to split into variables. The left side contains an object-like “pattern” for corresponding properties. In the simplest case, that’s a list of variable names in `{...}`.

<b style="color:DarkOrchid;">Changing variable name:</b>

If we want to assign a property to a variable with another name, then we can set the variable name using a colon:

```js
let { a: p, b: q } = { a: 1, b: 2, c: 3 }; // p -> 1 & q -> 2
```

<b style="color:DarkOrchid;">Passing default values:</b>

If property is defined, we can pass default values.

```js
let { a: p, b: q, c = 5 } = { a: 1, b: 2, c: 3 }; // p -> 1 & q -> 2 & c -> 5
```

<b style="color:DarkOrchid;">Rest syntax:</b>

You can use the rest syntax `(...)` to collect remaining properties into a new object.

```js
const { firstName, ...rest } = person;

console.log(firstName); // Output: 'John'
console.log(rest); // Output: { lastName: 'Doe', age: 30 }
```

<b style="color:DarkOrchid;">Nested objects:</b>

You can destructure nested objects by specifying the nested structure within the curly braces.

```js
const user = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    country: "USA",
  },
};

const {
  name,
  address: { city, country },
} = user;

console.log(name); // Output: 'John'
console.log(city); // Output: 'New York'
console.log(country); // Output: 'USA'
```

<br>

# Object references and copying

<b style="color: IndianRed">Unlike primitive data types, a variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.</b> Suppose object is: `let user = { name: "John" };` => The object is stored somewhere in memory, while the `user` variable has a `reference` to it. When we perform actions with the object, e.g. take a property `user.name`, the JavaScript engine looks at what’s at that address and performs the operation on the actual object. Hence, <b style="color: IndianRed">when an object variable is copied, the reference is copied, but the object itself is not duplicated.</b>

```js
let user = { name: "John" };
let admin = user;
admin.name = "Pete"; // changed by the "admin" reference
console.log(user.name); // 'Pete', changes are seen from the "user" reference

const user2 = { name: "John" };
console.log(user === user2); // False as both are two independent objects
```

<h3><u>Deep copy and shallow copy</u></h3>

In JavaScript, <span style="color: Orange">deep copy</span> and <span style="color: Orange">shallow copy</span> are two different ways of copying objects. A shallow copy creates a new object that references the same properties as the original object, while a deep copy creates a new object that has its own copies of all the properties of the original object.

Here is an example of a shallow copy:

```js
const originalObject = {
  name: "John Doe",
  age: 30,
};

const shallowCopy = originalObject;

shallowCopy.age = 31;

console.log(originalObject.age); // 31
```

In this example, we create a new object called `shallowCopy` and assign it the value of the `originalObject` object. This means that `shallowCopy` is now a reference to the same object in memory as `originalObject`. When we change the age property of `shallowCopy`, the change is also reflected in `originalObject`, because they are both referencing the same object.

Here is an example of a deep copy:

```js
const originalObject = {
  name: "John Doe",
  age: 30,
};

const deepCopy = JSON.parse(JSON.stringify(originalObject));

deepCopy.age = 31;

console.log(originalObject.age); // 30
```

In this example, we create a new object called `deepCopy` using the <b style="color: IndianRed">JSON.parse() <span style="color: white; font-weight: normal;">and</span> JSON.stringify()</b> methods. This creates a new object that has its own copies of all the properties of the `originalObject` object. When we change the age property of `deepCopy`, the change is not reflected in `originalObject`, because they are now two separate objects.

<b style="color: Coral;">If we try to do deep copy by spread operator syntax, nested objects reference will remain same</b>

While the `JSON.stringify()` and `JSON.parse()` method is convenient and widely used, it's important to be aware of these limitations and consider alternative methods.

- <b>Loss of Function Properties:</b> If the object contains functions or non-serializable properties such as symbols, they will be lost during the serialization process.

- <b>Circular References:</b> If the object contains circular references (where properties reference each other in a loop), `JSON.stringify()` will throw an error.

- <b>Performance:</b> For large objects, the serialization and deserialization process can be slower compared to other methods, especially if the object contains complex nested structures.

These problems are solved by a new method - <b style="color: IndianRed">structuredClone(`obj`)</b>. It is a global method. `console.log(window)` will show it.

```js
let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};
let clone = structuredClone(user);
console.log(user.sizes === clone.sizes); // false, different objects
```

<br>

# Constructor Functions

The regular `{}` syntax allows us to create one object. But often we need to create many similar objects, like multiple users or menu items and so on. That can be done using <span style="color: Cyan;">constructor functions</span> and the `new` operator.

Constructor functions technically are regular functions. There are two conventions though:

1. They are named with capital letter first.
2. They should be executed only with "new" operator.

```js
function User(name) {
  this.name = name;
  this.isAdmin = false;
}
let user = new User("Jack"); // user -> {name: "Jack", isAdmin: false}
```

<span style="color: Cyan;">We can avoid parentheses if we don't want to pass arguments.

<b style="color:red;">NOTE: </b>Since arrow functions do not have `this`, they can't be used for creating constructor functions.

If you call a constructor function without the `new` keyword, it behaves like a regular function call rather than a constructor call. In this case, the function will execute as a normal function, and this will refer to the global object (window in browsers, global in Node.js) instead of a new object.

When a function is executed with <b style="color:orange;">new</b>, it does the following steps:

1. A new empty object is created and assigned to `this`.
2. The function body executes. Usually it modifies `this`, adds new properties to it.
3. The value of `this` is returned.

In other words, `new User(...)` does something like:

```js
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}
```

If we have many lines of code all about creation of a single complex object, we can wrap them in an immediately called constructor function, like this:

```js
// create a function and immediately call it with new
let user = new (function () {
  this.name = "John";
  this.isAdmin = false;

  // ...other code for user creation
  // maybe complex logic and statements
  // local variables etc
})();
```

This constructor can’t be called again, because it is not saved anywhere, just created and called. So this trick aims to encapsulate the code that constructs the single object, without future reuse.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Return from constructors</h3>

Usually, constructors do not have a `return` statement. Their task is to write all necessary stuff into `this`, and it automatically becomes the result.

But if there is a `return` statement, then the rule is simple:

- If `return` is called with an object, then the object is returned instead of `this`.
- If `return` is called with a primitive, it’s ignored.

In other words, `return` with an object returns that object, in all other cases `this` is returned.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Methods in constructor</h3>

Using constructor functions to create objects gives a great deal of flexibility. The constructor function may have parameters that define how to construct the object, and what to put in it.

Of course, we can add to `this` not only properties, but methods as well.

For instance, `new User(name)` below creates an object with the given `name` and the method `sayHi`:

```js
function User(name) {
  this.name = name;

  this.sayHi = function () {
    alert("My name is: " + this.name);
  };
}

let john = new User("John");

john.sayHi(); // My name is: John

/*
john = {
   name: "John",
   sayHi: function() { ... }
}
*/
```

To create complex objects, there’s a more advanced syntax, <b style="color: Orange;">classes</b>.

<br>

# Global Object

The global object provides variables and functions that are available anywhere. By default, those that are built into the language or the environment. In a browser it is named `window`, for Node.js it is `global`, for other environments it may have another name. Recently, `globalThis` was added to the language, as a standardized name for a global object, that should be supported across all environments. It’s supported in all major browsers. All properties of the global object can be accessed directly:

```js
alert("Hello");
// is the same as
window.alert("Hello");
```

In a browser, global functions and variables declared with `var` (not `let/const`!) become the property of the global object:

```js
var gVar = 5;
let gLet = 7;
alert(window.gVar); // 5 (became a property of the global object)
alert(window.gLet); // undefined (doesn't become a property of the global object)
```

Function declarations have the same effect (statements with function keyword in the main code flow, not function expressions).Please don’t rely on that! This behavior exists for compatibility reasons. Modern scripts use JavaScript modules where such a thing doesn’t happen.

If a value is so important that you’d like to make it available globally, write it directly as a property:

```js
// make current user information global, to let all scripts access it
window.currentUser = {
  name: "John",
};

// somewhere else in code
alert(currentUser.name); // John

// or, if we have a local variable with the name "currentUser"
// get it from window explicitly (safe!)
alert(window.currentUser.name); // John
```

That said, using global variables is generally discouraged. There should be as few global variables as possible. The code design where a function gets “input” variables and produces certain “outcome” is clearer, less prone to errors and easier to test than if it uses outer or global variables.

<h3>Using for polyfills</h3>

We use the global object to test for support of modern language features. For instance, test if a built-in `Promise` object exists (it doesn’t in really old browsers):

```js
if (!window.Promise) {
  alert("Your browser is really old!");
}
```

If there’s none (say, we’re in an old browser), we can create <b style="color: Violet;">“polyfills”: add functions that are not supported by the environment, but exist in the modern standard</b>.

```js
if (!window.Promise) {
  window.Promise = ... // custom implementation of the modern language feature
}
```

<br>

# `Object` constructor function

The `Object()` constructor turns the input into an object. Its behavior depends on the input's type.

```js
console.log(new Object()); // {}
console.log(new Object(null)); // {}
console.log(new Object(undefined)); // {}
console.log(new Object(4)); // [Number: 4]
console.log(new Object({ a: 1 })); // {a: 1}

console.log(Object()); // {}
console.log(Object("ABC")); // [String: 'ABC']
```

<b style="color: red;">Note:</b> Object() can be called with or without new, but sometimes with different effects. See Return value.

- <b style="color: Orange;">Object.assign(<span style="color: Yellow; font-weight: normal;">target, source</span>)</b>: Copies enumerable own properties from one or more source objects to a target object.
- <b style="color: Orange;">Object.create(<span style="color: Yellow; font-weight: normal;">proto_obj</span>)</b>: Creates a new object with the specified prototype object and properties.
- <b style="color: Orange;">Object.defineProperty(<span style="color: Yellow; font-weight: normal;">obj, prop, descriptor</span>)</b>: Adds the named property described by a descriptor to an object. `prop` is name of key of the property to be defined or modified while `descriptor` describes the property.
- <b style="color: Orange;">Object.defineProperties(<span style="color: Yellow; font-weight: normal;">obj, props</span>)</b>: Does same as above but adding multiple keys simultaneously is possible. `props` = an object whose keys represent the names of properties to be defined or modified and whose values are objects describing those properties.
- <b style="color: Orange;">Object.values(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Returns an array of a given object's **own**(not from prototype) enumerable property values.
- <b style="color: Orange;">Object.keys(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Returns an array of a given object's **own**(not from prototype) enumerable property names.
- <b style="color: Orange;">Object.entries(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Returns an array of a given object's own enumerable string-keyed property `[key, value]` pairs.
- <b style="color: Orange;">Object.freeze(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: It freezes the object passed. A frozen object can no longer be changed: new properties cannot be added, existing properties cannot be removed, their enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.
- <b style="color: Orange;">Object.isFrozen(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Determines if passed object is frozen or not.
- <b style="color: Orange;">Object.seal(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: A sealed object has a fixed set of properties: new properties cannot be added, existing properties cannot be removed, their enumerability and configurability cannot be changed, and its prototype cannot be re-assigned.
- <b style="color: Orange;">Object.isSealed(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Checks if passed object is sealed.
- <b style="color: Orange;">Object.getPrototypeOf(<span style="color: Yellow; font-weight: normal;">obj</span>)</b>: Returns the prototype (internal `[[Prototype]]` property) of the specified object.
- <b style="color: Orange;">Object.setPrototypeOf(<span style="color: Yellow; font-weight: normal;">obj, proto_obj</span>)</b>: Sets the prototype (internal `[[Prototype]]` property) of the specified object.
- <b style="color: Orange;">Object.is(<span style="color: Yellow; font-weight: normal;">val1, val2</span>)</b>: It determines whether two values are the same value. The only difference between `Object.is()` and `===` is in their treatment of signed zeros and `NaN` values. The `===` operator (and the == operator) treats the number values `-0` and `+0` as equal, but treats `NaN` as not equal to each other.
- <b style="color: Orange;">Object.hasOwn(<span style="color: Yellow; font-weight: normal;">obj, key</span>)</b>: Returns `true` if the specified object has the indicated property as its own property. If the property is inherited, or does not exist, the method returns `false`. It is intended as a replacement for `Object.prototype.hasOwnProperty()`.

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

```js
const proto = { a: 1 };
const obj = Object.create(proto);
console.log(obj.__proto__); // { a: 1 }
```

```js
const object1 = {};
Object.defineProperty(object1, "property1", {
  value: 42,
  writable: false,
});
object1.property1 = 77; // Throws an error in strict mode
console.log(object1.property1); // Expected output: 42
```

```js
const object1 = {};
Object.defineProperties(object1, {
  property1: {
    value: 42,
    writable: true,
  },
  property2: {},
});
console.log(object1.property1); // Expected output: 42
```

```js
console.log(Object.is(NaN, 0 / 0)); // true
console.log(NaN === 0 / 0); // false

console.log(Object.is(+0, -0)); // false
console.log(+0 === -0); // true
```

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
