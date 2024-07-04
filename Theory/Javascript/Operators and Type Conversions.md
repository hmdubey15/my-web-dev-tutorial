<div style="font-size: 17px;background: black;padding: 2rem;">

# Type Conversions

In JavaScript, type conversions refer to the process of converting a value from one data type to another. There are two types of type conversions:

1. Implicit Type Conversion (Type Coercion)
2. Explicit Type Conversion (Type Casting)

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Implicit Type Conversion (Type Coercion)</h3>

Type coercion refers to the automatic conversion of values from one data type to another, typically performed during operations or comparisons involving different data types. By using Type Coercion, JavaScript attempts to make the data types compatible to complete the operation or comparison. For example, `alert` automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

Examples:

```js
"5" + 2; // "52" (Number 2 is coerced to a string)
"5" - 2; // 3 (String '5' is coerced to a number)
true + 1; // 2 (true is coerced to 1)
false + 1; // 1 (false is coerced to 0)
null + 5; // 5 (null is coerced to 0)
undefined + 5; // NaN (undefined becomes NaN)
```

- **String Coercion in Concatenation (`+` operator):** The `+` operator is overloaded in JavaScript. It can perform both string concatenation and numeric addition. If either operand is a string, JavaScript will convert the other operand to a string and perform string concatenation.
- **Numeric Coercion in Mathematical Operations (`-`, `*`, `/`, `%`):** Operators like `-`, `*`, `/`, and `%` are used for numeric operations. JavaScript converts all operands to numbers before performing the operation.
- **Comparison Operators (`==`):** For `==`, JavaScript attempts to convert both sides to the same type before comparing. Use `===` to avoid type coercion, as it checks both type and value (strict equality).

  - If one operand is a string and the other is a number, JS converts the string to a number, then compares them. If the string cannot be converted to number, it will be converted to `NaN` and every comparision will yield `false`.
  - If one operand is a boolean, JS converts the boolean to a number (`true` becomes `1`, `false` becomes `0`), then compares them.
  - If one operand is an object and the other is a primitive (number, string, or boolean), JS attempts to convert the object to a primitive (usually via the object's `valueOf()` or `toString()` method).
  - If one is `null` and other is `undefined`, both are considered equal.

  ```js
  5 == "5"; // true (converts '5' to 5)
  0 == false; // true (converts false to 0)
  null == undefined; // true
  [1] == 1   // true (the array [1] is converted to the string "1", and then to the number 1)
  {} == "[object Object]"  // true (empty object is converted to its string representation)
  ```

- **Boolean contexts:** In contexts that expect a boolean (like `if` statements or the condition oprator), JavaScript converts values to `true` or `false`. Falsy values in JavaScript: `false`, `0`, `""`, `null`, `undefined`, `NaN` are all treated as `false`. Everything else is treated as `true` (truthy).

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Explicit Type Conversion (Type Casting)</h3>

In explicit type conversion, you intentionally convert a value from one type to another using JavaScript's built-in functions. Here are some common explicit type conversions:

- **String to Number:**

  ```js
  Number("123"); // 123
  Number("xyz"); // NaN
  ```

  <span style="color: Crimson;">JavaScript uses `NaN` (Not a Number) when a string or other type can't be properly converted to a number.</span> This simply indicates that a value is not a legal number. For example `3/0` will also return `NaN`. To check if a value is `NaN`, we use the <b style="color:Violet;">isNaN()</b> function. It converts the given value to a `Number` type, and then equates to `NaN`.

- **Number to String:**

  ```js
  let str = String(123); // "123"
  let str2 = (123).toString(); // "123"
  ```

- **Boolean to Number:**

  ```js
  let num = Number(true); // 1
  let num2 = Number(false); // 0
  ```

- **Number to Boolean:**

  ```js
  let bool = Boolean(1); // true
  let bool2 = Boolean(0); // false
  ```

<br>

# Nullish coalescing operator `??`

The nullish coalescing operator is written as two question marks `??`. The result of `a ?? b` is:

- if `a` is defined, then `a`,
- if `a` isn’t defined, then `b`.

In other words, `??` returns the first argument if it’s not `null/undefined`. Otherwise, the second one. The nullish coalescing operator isn’t anything completely new. It’s just a nice syntax to get the first “defined” value of the two. We can rewrite `result = a ?? b` using the operators that we already know, like this:

```js
result = a !== null && a !== undefined ? a : b;
```

The common use case for `??` is to provide a default value. For example, here we show user if its value isn’t `null/undefined`, otherwise `"Anonymous"`:

```js
let user;
alert(user ?? "Anonymous"); // Anonymous (user is undefined)
```

We can also use a sequence of `??` to select the first value from a list that isn’t `null/undefined`.

```js
let firstName = null;
let lastName = null;
let nickName = "Supercoder";

// shows the first defined value:
alert(firstName ?? lastName ?? nickName ?? "Anonymous"); // Supercoder
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Comparison with OR operator</h3>

The `OR ||` operator can be used in the same way as `??`. For example, in the code above we could replace ?? with || and still get the same result. Historically, the `OR ||` operator was there first. It’s been there since the beginning of JavaScript, so developers were using it for such purposes for a long time. On the other hand, the `nullish coalescing operator ??` was added to JavaScript only recently, and the reason for that was that people weren’t quite happy with `||`.

The important difference between them is that:

- `||` returns the first truthy value.
- `??` returns the first defined value.

In other words, `||` doesn’t distinguish between `false`, `0`, an empty string `""` and `null/undefined`. They are all the same – falsy values. If any of these is the first argument of `||`, then we’ll get the second argument as the result.

</div>
