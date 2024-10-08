<div style="font-size: 17px;background: black;padding: 2rem;">

Classes are a template for creating objects. They encapsulate data with code to work on that data. Classes in JS are built on prototypes but also have some syntax and semantics that are unique to classes. They were introduced in ECMAScript 6 (ES6) to make object-oriented programming more straightforward and familiar for developers coming from other programming languages like Java or C++.

Classes are in fact <b><u>"special functions"</u></b>, and just as you can define <b><u>function expressions</u></b> and <b><u>function declarations</u></b>, a class can be defined in two ways: a <b><u>class expression</u></b> or a <b><u>class declaration</u></b>.

## Class Definition

```js
// Declaration
class Rectangle {
  constructor(height, width) { this.height = height; this.width = width; }
}

// Expression; the class is anonymous but assigned to a variable
const Rectangle = class {
  constructor(height, width) { this.height = height; this.width = width; }
};
```

<b style="color:red;">NOTE:</b> Using `typeof` operator on classes will return `function` only.

<b style="color:Gold;">NOTE:</b> Unlike functions, and other JavaScript declarations, class declarations are not hoisted. That means that you must declare a class before using it.

## Class Body

The body of a class is the part that is in curly braces `{}`. This is where you define class members, such as methods or constructor. The body of a class is executed in strict mode even without the `"use strict"` directive.

A class element can be characterized by three aspects:

- <b style="color:Salmon;">Kind</b>: Getter, setter, method, or field
- <b style="color:Salmon;">Location</b>: Static or instance
- <b style="color:Salmon;">Visibility</b>: Public or private

In addition, there are two special class element syntaxes: <b style="color:violet;">constructor</b> and <b style="color:Khaki;">static initialization blocks</b>, with their own references.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Constructor</h3>

The constructor method in JavaScript is a special method used for initializing objects created with a class. It’s called automatically when a new instance of the class is created. It typically assigns initial values to object properties using parameters passed to it. This ensures objects are properly initialized upon creation. There can only be one special method with the name "constructor" in a class — a `SyntaxError` is thrown if the class contains more than one occurrence of a constructor method. A constructor can use the <b style="color:SpringGreen;">super</b> keyword to call the constructor of the super class.

```js
class HD {
  constructor() { this.x = 4; }
}

const obj = new HD();
console.log(obj); // { x:4 }
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Method definitions</h3>

These are functions defined within the class. They define the behavior of the class instances.

```js
class MyClass {
  constructor(name) {
    this.name = name;
  }

  greet() { // can also write as arrow function: `greet: () => ......`
    return `Hello, ${this.name}!`;
  }
}

const obj = new MyClass("Alice");
console.log(obj.greet()); // Output: Hello, Alice!
```

Properties defined using this syntax are own properties of the created object, and they are configurable, enumerable, and writable, just like normal properties.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Getters and Setters</h3>

A getter is a method that gets the value of a specific property. It allows you to access the property value as if it were a regular property, but behind the scenes, a method is called. Getters are defined using the <b style="color:Lime;">get</b> keyword.

A setter is a method that sets the value of a specific property. It allows you to assign a value to a property as if it were a regular property, but behind the scenes, a method is called. Setters are defined using the <b style="color:HotPink;">set</b> keyword.

```js
class User {
  constructor(name) { this._name = name; }
  get name () { return this._name; }
  set name(nameArg) { this._name = nameArg; }
}

let user = new User("Jon Snow"); // constructor sets _name field to 'Jon Snow'
console.log(user.name); // "Jon Snow"
user.name = "Tyrrion";
console.log(user.name); // "Tyrrion"
```

🚨 <b style="color:Crimson;">WARNING</b> 🚨 : If we define a getter with the same name as a property in the class, we will encounter a problem with infinite recursion. In the below code, the `get name()` method will call itself indefinitely when trying to access `this.name`, resulting in a <b><u>stack overflow error</u></b>.

```js
class User {
  constructor(name) { this.name = name; }
  get name() {
    return this.name; // This calls the getter method again, causing infinite recursion
  }
}
let user = new User("John");
console.log(user.name); // This will cause an error
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Class Fields</h3>

Class fields (also known as class properties or instance properties) in JavaScript allow you to define properties directly within the class body, outside of the constructor. They provide a cleaner and more concise way to initialize properties. Class fields can be either public or private.

<b><u>Public Class Fields</u></b>

Public class fields are properties that can be accessed and modified from outside the class. They are defined using the `fieldName = value` syntax directly within the class body.

<b><u>Private Class Fields</u></b>

Private class fields are properties that cannot be accessed or modified from outside the class. They are defined using the `#fieldName` syntax.

```js
class User {
  name; // Public class field
  #password; // Private class field
  constructor(name, password) { this.name = name; this.#password = password; }
  checkPassword(password) {  // Public method to check the password
    return this.#password === password;
  }
}
const user = new User('Alice', 'secret');
console.log(user.name); // Output: Alice
console.log(user.checkPassword('secret')); // Output: true
// Trying to access private field directly will cause an error
// console.log(user.#password); // SyntaxError: Private field '#password' must be declared in an enclosing class
```

<span style="color: Cyan;">Class fields improve readability and maintainability by keeping property declarations close to the top of the class body.</span>

<b style="color:red;">Note:</b> Private properties have the restriction that all property names declared in the same class must be unique. All other public properties do not have this restriction — you can have multiple public properties with the same name, and the last one overwrites the others. This is the same behavior as in `object initializers`.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Static</h3>

The <b style="color:Magenta;">static</b> keyword in JavaScript classes is used to define static methods and properties. Static members are called on the class itself, <span style="color: Orange;">not on instances of the class (FORBIDDEN ❌)</span>. They are typically used for utility functions, constants, or methods that are relevant to the class as a whole rather than to individual instances.

<b><u>Static methods</u></b> are functions that belong to the class itself rather than to any particular instance of the class. They are defined using the `static` keyword.

```js
class MathUtils {
  static add(a, b) { return a + b; }
}
console.log(MathUtils.add(5, 3)); // Output: 8
```

<b style="color:red;">Note:</b>In a static method, the value of `this` refers to the class itself, not an instance of the class. This means that within a static method, `this` can be used to access other static methods and static properties of the class, but it cannot be used to access instance properties or methods.

```js
class User {
  static staticMethod() { console.log(this === User); }
}
User.staticMethod(); // true
```

<b><u>Static properties</u></b> are variables that belong to the class itself, rather than to instances of the class. They are defined using the `static` keyword.

```js
class Geometry {
  static PI = 3.14159;
}
console.log(Geometry.PI); // Output: 3.14159
```

<b style="color: HotPink;"><u>Static initialization blocks</u></b> in JavaScript, introduced in ECMAScript 2022, allow you to run a block of code to initialize static properties of a class. This provides a way to perform more complex static property initialization that can't be achieved with simple assignments. A static initialization block is defined using the `static` keyword followed by a pair of curly braces `{}` containing the initialization code. You can have multiple static initialization blocks in a class, and they are executed in the order they appear. Value of `this` inside static block is class itself again.

```js
class Validator {
  static valid;

  static {
    Validator.valid = true;
    // Perform some validation logic
    const isValid = someValidationFunction();
    if (!isValid) {
      Validator.valid = false;
    }
  }
}

console.log(Validator.valid);
```

## Inheritance

Inheritance in JavaScript allows one class to inherit properties and methods from another class. This is a core concept in object-oriented programming (OOP) that promotes code reuse and hierarchical class structures. JavaScript supports inheritance through the <b style="color:Khaki;">extends</b> keyword and the <b style="color:Coral;">super</b> function.

```js
class Animal {
  constructor(name) { this.name = name; }
  speak() { console.log(`${this.name} makes a noise.`); }
}

class Dog extends Animal {
  constructor(name, breed) {
    // Call the parent class constructor with super
    super(name);
    this.breed = breed;
  }

  speak() { console.log(`${this.name} barks.`); super.speak(); }
}

const dog = new Dog('Rex', 'German Shepherd');
dog.speak(); // Output: Rex barks.
```

- `extends`: Used to create a subclass that inherits from a superclass.
- `super`: Used to call the constructor and methods of the superclass. If there is a constructor present in the subclass, it needs to first call `super()` before using `this`. This allows subclasses to provide specific implementations for inherited methods.It is necessary because `super()` calls the constructor of the superclass, setting up the necessary context for `this`.

**<i>As shown in above code, subclasses can override methods of the superclass. The `super` keyword can also be used to call corresponding methods of super class. Static methods and properties are also inherited. Subclasses can call static methods of the superclass using `super` keyword only.</i>**

<span style="color: Magenta;">Arrow functions do not have their own super.</span>

</div>
