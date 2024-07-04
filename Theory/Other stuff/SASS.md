<div style="font-size: 17px;background: black;padding: 2rem;">

<b>Sass( Syntactically Awesome Style Sheet) is a CSS pre-processor that is fully compatible with every version of CSS. It is a scripting language (like JS) that is compiled to CSS in the browser. It provides additional benefits over normal CSS styling that enhances the way of writing CSS styles. Since browsers are unable to read a SASS file, therefore, we will need a Sass pre-processor to convert Sass code into standard CSS. This process is called transpiling. So, we need to give a transpiler (some kind of program) some Sass code and then get some CSS code back. It also helps reduce the overall length of the code by discarding the repeated CSS code and therefore saves time. Sass files has the <b style="color: orange;">.scss</b> file extension.

A whole installation process is followed for installing sass which can be referred from internet.

</b>

<h3 style="text-decoration: underline;">1. Variables</h3>

Sass allows you to define variables to store values such as colors, fonts, and sizes. With Sass, you can store information in variables, like: strings, numbers, colors, booleans, lists & nulls. Sass uses the `$` symbol, followed by a `name`, to declare variables:

```
$variablename: value;
```

Example:

```scss
$primary-color: #3498db;
$font-size: 16px;

body {
  background-color: $primary-color;
  font-size: $font-size;
}
```

Sass variables are only available at the level of nesting where they are defined.

```scss
$myColor: red;

h1 {
  $myColor: green;
  color: $myColor;
}

p {
  color: $myColor;
}
```

Will the color of the text inside a `<p>` tag be red or green? It will be red! The other definition, `$myColor: green;` is inside the `<h1>` rule, and will only be available there! So, the CSS output will be:

```css
h1 {
  color: green;
}
p {
  color: red;
}
```

The default behavior for variable scope can be overridden by using the `!global` switch. `!global` indicates that a variable is global, which means that it is accessible on all levels. In above example, we could have written like this:

```scss
...
$myColor: green !global;
...
```

<h3 style="text-decoration: underline;">2. Nesting</h3>

You can nest CSS selectors within one another in Sass, which makes the code more organized and readable, as it reflects the structure of your HTML.

```scss
nav {
  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: inline-block;
      margin-right: 10px;
    }
  }
}
```

In this example, the CSS for the `ul` and `li` elements is nested within the nav selector, reflecting the HTML structure.

<h3 style="text-decoration: underline;">3. Mixins</h3>
Mixins are reusable blocks of CSS code that you can include in multiple places. They are defined using the <b style="color: Chartreuse;">@mixin</b> directive and can accept parameters. Here's an example of a mixin for creating CSS buttons:

<br>

```scss
@mixin button($bg-color, $text-color) {
  background-color: $bg-color;
  color: $text-color;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
}

.primary-button {
  @include button(#3498db, #fff);
}

.secondary-button {
  @include button(#e74c3c, #fff);
}
```

In this example, we define a mixin called `button` that accepts background and text colors as parameters. We then include this mixin in the `.primary-button` and `.secondary-button` classes.

<h3 style="text-decoration: underline;">4. Inheritance</h3>

Sass supports inheritance using the <b style="color: Chartreuse;">@extend</b> directive. This allows one selector to inherit styles from another. Here's an example:

```scss
.error-message {
  border: 1px solid #e74c3c;
  color: #e74c3c;
}

.warning-message {
  @extend .error-message;
  border-color: #f39c12;
  color: #f39c12;
}
```

In this example, the .warning-message selector inherits styles from .error-message, reducing redundancy.

<h3 style="text-decoration: underline;">5. Importing</h3>
You can split your styles into multiple Sass files and use the <b style="color: Chartreuse;">@import</b> directive to combine them. For example, you can have separate files for variables, mixins, and components, and then import them into your main stylesheet.

<br>

```scss
// _variables.scss
$primary-color: #3498db;
$font-size: 16px;

// main.scss
@import "_variables";

body {
  background-color: $primary-color;
  font-size: $font-size;
}
```
When `_` is prepended to a file name of a SCSS file, the parser knows that it is a partial file and it is there only for importing. Sass will not transpile such files. Files named this way are called `partials` in Sass. When importing, the `_` part is optional. Note that we used `variables` to import `_variables.scss`.

<div style="background: DarkRed;  padding: 0.3rem 0.8rem;">

The Sass team discourages the continued use of the `@import` rule. Sass will gradually phase it out over the next few years, and eventually remove it from the language entirely. Prefer the <b style="color: Chartreuse;">@use</b> rule instead.
The `@import` rule has a number of serious issues:

- It makes all variables, mixins, and functions globally accessible. This makes it very difficult for people (or tools) to tell where anything is defined. Because everything’s global, libraries must add a prefix to all their members to avoid naming collisions.
- `@extend` rules are also global, which makes it difficult to predict which style rules will be extended.
- Each stylesheet is executed and its CSS emitted every time it’s @imported, which increases compilation time and produces bloated output.
- There was no way to define private members or placeholder selectors that were inaccessible to downstream stylesheets.

The new module system and the @use rule address all these problems.
</div>

<br>

<b style="color:cyan;">How @use solves the issues</b>

1. With `@use`, variables, mixins, and functions (what Sass calls "members") that start with an `underscore (_)` or `hyphen (-)` are considered private, and not imported.
2. `@use` creates a namespace for each module. This means that variables, mixins, and functions defined in one module are scoped to that module by default, reducing the risk of naming conflicts.

When we `@use` a file, Sass automatically generates a namespace based on the file name:

```scss
@use 'buttons'; // creates a `buttons` namespace
@use 'forms'; // creates a `forms` namespace

// variables: <namespace>.$variable
$btn-color: buttons.$color;
$form-border: forms.$input-border;

// functions: <namespace>.function()
$btn-background: buttons.background();
$form-border: forms.border();

// mixins: @include <namespace>.mixin()
@include buttons.submit();
@include forms.input();
```
We can change or remove the default namespace by adding as name to the import:

```scss
@use 'buttons' as *; // the star removes any namespace
@use 'forms' as f;

$btn-color: $color; // buttons.$color without a namespace
$form-border: f.$input-border; // forms.$input-border with a custom namespace
```
Using as `*` adds a module to the root namespace, so no prefix is required, but those members are still locally scoped to the current document.

<h3 style="text-decoration: underline;">6. Functions </h3>

Sass includes built-in functions for various operations. Here's an example of using the `lighten()` function to adjust a color: 

```scss
$base-color: #3498db;

.lighter-background {
  background-color: lighten($base-color, 20%);
}
```
In this example, we lighten the $base-color by 20%.

Visit this link for all built-in functions: https://www.w3schools.com/sass 
</div>