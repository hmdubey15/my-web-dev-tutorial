<div style="font-size: 17px;background: black;padding: 2rem;">

<b><i>Tailwind CSS is a utility-first <span style="color: Purple;">CSS framework</span> with predefined classes that you can use to build and design web pages directly in your markup. It lets you write CSS in your HTML in the form of predefined classes.</i></b>

As a general programming term, a framework is a tool that provides reusable and ready-made components built from the features of an already existing tool. The overall purpose of creating frameworks is to increase development speed by doing less work.

When we say utility-first CSS, we refer to classes in our markup (HTML) with predefined functionalities. This implies that you only have to write a class with predefined styles attached to it, and those styles will be applied to the element.

Example:

```html
<button class="bg-black p-2 rounded">Click me</button>
```

<b style="color:red;">We can use Tailwind CSS in frontend web projects, including JavaScript frameworks like React.js, Next.js, Laravel, Vite, Gatsby, etc.</b>

Tailwind CSS works by scanning all of your HTML files, JavaScript components, and any other templates for class names, generating the corresponding styles and then writing them to a static CSS file.

It's fast, flexible, and reliable — with zero-runtime.

<h3 style="text-decoration: underline;">Here are the key features and concepts of Tailwind CSS:</h3>

- <b style="color: DarkKhaki;">Utility-First:</b> Tailwind CSS promotes a utility-first approach to styling. Instead of writing custom CSS classes for every element in your HTML, you apply pre-defined utility classes directly to your HTML elements. These utility classes encapsulate common CSS properties like margin, padding, text alignment, colors, and more.

- <b style="color: DarkKhaki;">Modular and Composable:</b> Tailwind CSS is modular and composable, meaning you can combine utility classes to create complex and customized styles. This approach promotes reusability and makes it easy to maintain your codebase.

- <b style="color: DarkKhaki;">Responsive Design:</b> Tailwind CSS provides built-in responsive design utilities that allow you to define different styles for various screen sizes. You can use classes like sm: (small screens), md: (medium screens), and lg: (large screens) to adjust the styling based on the viewport size.

- <b style="color: DarkKhaki;">Customization:</b> While Tailwind CSS comes with a set of default utility classes, it's highly customizable. You can configure your own design system by extending or overriding the default styles using a configuration file. This enables you to maintain a consistent design language for your project.

- <b style="color: DarkKhaki;">Just-In-Time (JIT) Compiler:</b> Starting from Tailwind CSS v2.1, it includes a JIT compiler, which generates CSS on-demand based on the classes used in your HTML. This can significantly reduce the overall CSS file size, making your website load faster.

- <b style="color: DarkKhaki;">Plugins and Extensions:</b> Tailwind CSS has a vibrant ecosystem of plugins and extensions created by the community. These plugins add additional utility classes or integrate with other libraries and frameworks, enhancing the framework's functionality.

- <b style="color: DarkKhaki;">Developer Experience:</b> Tailwind CSS aims to improve the developer experience by providing tooling, documentation, and a developer-friendly API. It also integrates well with popular JavaScript frameworks like React, Vue.js, and Angular.

<h3 style="text-decoration: underline;">Why not just use inline styles?</h3>

A common reaction to this approach is wondering, “isn’t this just inline styles?” and in some ways it is — you’re applying styles directly to elements instead of assigning them a class name and then styling that class.

But using utility classes has a few important advantages over inline styles:

- <b style="color: Coral;">Designing with constraints:</b> Using inline styles, every value is a magic number. With utilities, you’re choosing styles from a predefined design system, which makes it much easier to build visually consistent UIs.

- <b style="color: Coral;">Responsive design:</b> You can’t use media queries in inline styles, but you can use Tailwind’s responsive utilities to build fully responsive interfaces easily. Visit this link to view the working - https://tailwindcss.com/docs/responsive-design

- <b style="color: Coral;">Hover, focus, and other states:</b> Inline styles can’t target states like hover or focus, but Tailwind’s state variants make it easy to style those states with utility classes. Visit this link to know the working - https://tailwindcss.com/docs/hover-focus-and-other-states

<h3 style="text-decoration: underline;">Installation</h3>

1. Run command: `npm install tailwindcss`. This will install the tailwind css as node module.
2. Run command `npx tailwindcss init`. This will create a `tailwind.config.js` file.
3. In that file, replace content line with `content: ["./src/**/*.{html,js}"],`
4. Add `@tailwind` directives in `index.css` (can do it in `app.css` also, but then change the same in below command also).

   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

5. Run this command `npx tailwindcss -i ./src/index.css -o ./src/output.css --watch`
6. Start using tailwind css.

<br>

<h4 style="font-size: 24px; border: 2px solid DeepSkyBlue; display: inline; padding: 10px; margin: 35%"><a href="https://nerdcave.com/tailwind-cheat-sheet">TAILWIND CSS CHEATSHEET!</a></h4>

<br>

<div style="border: 4px solid Pink; padding: 10px;">

While you can usually build the bulk of a well-crafted design using a constrained set of design tokens, once in a while you need to break out of those constraints to get things pixel-perfect.

When you find yourself really needing something like `top: 117px` to get a background image in just the right spot, use Tailwind’s square bracket notation to generate a class on the fly with any arbitrary value.

```html
<div class="top-[117px]">
  <!-- ... -->
</div>
```

This works for everything in the framework, including things like background colors, font sizes, pseudo-element content, and more. It’s even possible to use the `theme` function to reference the design tokens in your `tailwind.config.js` file:

```html
<div class="grid grid-cols-[fit-content(theme(spacing.32))]">
  <!-- ... -->
</div>
```

When using a CSS variable as an arbitrary value, wrapping your variable in `var(...)` isn’t needed — just providing the actual variable name is enough:

```html
<div class="bg-[--my-color]">
  <!-- ... -->
</div>
```

</div>

## Directives

Tailwind directives are special instructions used in a CSS file to include different parts of the Tailwind CSS framework. These directives allow you to include Tailwind's preflight (base styles), component styles, and utility classes in your project.

- <b style="color:Gold;">@tailwind</b>
  1. <span style="color:Chartreuse;">@tailwind base</span>: This directive injects Tailwind's base styles (also known as preflight styles) into your CSS. These base styles are a collection of normalized styles designed to provide a consistent base layer across different browsers. They help to reset default browser styles and apply a more consistent look across different browsers.
  2. <span style="color:Chartreuse;">@tailwind components</span>: This directive includes any of the component styles that you have configured in your Tailwind setup. Component styles are predefined sets of CSS classes that are useful for styling common elements like buttons, forms, cards, etc. They are not as frequently used as utility classes but can be handy for more complex design elements.
  3. <span style="color:Chartreuse;">@tailwind utilities</span>: This directive includes Tailwind's utility classes. Utility classes are the core feature of Tailwind CSS, allowing you to apply single-purpose styling directly to your HTML elements. These classes cover a wide range of CSS properties like padding, margin, color, typography, and more.
- <b style="color:Gold;">@apply</b>: This directive allows you to apply a set of utility classes directly within your CSS. This is particularly useful when you want to define reusable styles without creating custom classes or writing additional CSS.

  ```css
  .btn {
    @apply bg-blue-500 text-white font-bold py-2 px-4 rounded;
  }

  .card {
    @apply shadow-lg rounded-lg p-6 bg-white;
  }

  .alert {
    @apply text-red-600 bg-red-100 border border-red-400 p-4 rounded;
  }
  ```

- <b style="color:Gold;">@layer</b>: This directive allows you to define custom styles within the context of Tailwind's layer system. Tailwind organizes its styles into three main layers: `base`, `components`, and `utilities`. By using this directive, you can add your own custom styles to these layers, ensuring they are processed correctly in the build process and that they respect the correct order of application.

  ```css
  @layer base {
    h1 {
      @apply text-2xl font-bold;
    }
  }

  @layer components {
    .btn {
      @apply bg-blue-500 text-white py-2 px-4 rounded;
    }
  }

  @layer utilities {
    .content-auto {
      content-visibility: auto;
    }
  }
  ```

  ```html
  <div class="btn"></div>
  ```

- <b style="color:Gold;">@config</b>: Use directive to specify which config file Tailwind should use when compiling that CSS file. This is useful for projects that need to use different configuration files for different CSS entry points.

  ```css
  @config "./tailwind.site.config.js";

  @tailwind base;
  @tailwind components;
  @tailwind utilities;
  ```

## Functions

In Tailwind CSS, "functions" refer to utility functions that you can use within your Tailwind configuration file (`tailwind.config.js`) to create custom styles, themes, and responsive designs. These functions help you to extend and manipulate Tailwind's default configuration to better suit your project's needs. These functions are evaluated at build-time, and are replaced by static values in your final CSS.

​-> <b style="color:Magenta;">theme()</b>: This function allows you to access your Tailwind theme configuration directly in your CSS.

```js
theme: {
    extend: {
      spacing: {
        '72': '18rem',
      },
      colors: {
        customBlue: '#1c92d2',
      },
    }
 }
```

```css
.content-area {
  height: calc(100vh - theme(spacing.72));
}
```

If you need to access a value that contains a dot (like the 2.5 value in the spacing scale), you can use square bracket notation:

```css
.content-area {
  height: calc(100vh - theme(spacing[2.5]));
}
```

Since Tailwind uses a nested object syntax to define its default color palette, make sure to use dot notation to access the nested colors. Don’t use the dash syntax when accessing nested color values

```css
/* ❌ */
.btn-blue { 
  background-color: theme(colors.blue-500);
} 


/* ✅ */
.btn-blue {
  background-color: theme(colors.blue.500);
}
```

</div>
