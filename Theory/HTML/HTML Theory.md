<div style="font-size: 17px;background: black;padding: 2rem;">

# Bullet Points for basics of HTML

- HTML stands for Hyper Text Markup Language
- HTML is the standard markup language for creating Web pages
- HTML describes the structure of a Web page
- HTML consists of a series of elements
- HTML elements tell the browser how to display the content

Hypertext means that the document contains links that allow the reader to jump to other places in the document or to another document altogether. A Markup Language is a way that computers speak to each other to control how text is processed and presented. To do this HTML uses two things: tags and attributes.

<br>

# Tags:

Tags are used to mark up the start of an HTML element and they are usually enclosed in angle brackets. An example of a tag is: `<h1>`. Most tags must be opened `<h1>` and closed `</h1>` in order to function. Also remember that HTML tags are not case sensitive: `<P>` means the same as `<p>`.

<br>

# Attributes:

Attributes contain additional pieces of information. Attributes take the form of an opening tag and additional info is placed inside. Value of attributes could be in single or double quotes or sometimes without them also. An example of an attribute is:

```
<img src="mydog.jpg" alt="A photo of my dog.">
```

In this instance, the image source (src) and the alt text (alt) are attributes of the `<img>` tag.

<br>

# BASIC STRUCTURE OF HTML PAGE:

```html
<!DOCTYPE html>
<!-- This declaration specifies the language you will write on the page. Here it is HTML5 -->
<html>
  <!-- This element is the root element of an HTML page. It signals that from here we'll write HTML code. -->
  <head>
    <!-- This element contains meta information about the HTML page. -->
    <title>Page Title</title>
    <!-- This element specifies title for webpage (which is shown in the webpage's tab) -->
    <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
    <!-- For adding favicon (small image displayed next to the page title in the browser tab) -->
    <meta name="author" content="Himanshu" />
    <!-- This is where information about the document is stored: character encoding, name (page context), description. -->
  </head>
  <body>
    <!-- Content in body tag will be actually displayed in browser. -->
    <h1>My First Heading</h1>
    <p>My first paragraph.</p>
  </body>
</html>
```

> Link to checkout all HTML tags - https://www.w3schools.com/tags/ref_html_dtd.asp

<hr>

<br>

# HTML Entities

HTML entities are special codes used to represent characters that have a specific meaning in HTML markup, but cannot be directly included in the document due to various reasons, such as reserved characters, character encoding issues, or the need to display characters that have special significance in HTML syntax itself. Entities are used to display characters like "<", ">", "&", etc., without interpreting them as HTML markup.

There are two types of HTML entities:

1.) Named Entities: Named entities consist of a name preceded by an ampersand (&) and followed by a semicolon (;). For example, `&lt;` represents the less-than sign (<), and `&gt;` represents the greater-than sign (>). Some common named entities include:

- `&lt;` - less-than sign (<)
- `&gt;` - greater-than sign (>)
- `&amp;` - ampersand (&)
- `&quot;` - double quotation mark (")
- `&apos;` - apostrophe or single quotation mark (')
- `&nbsp;` - non-breaking space ( )
- `&copy;` - copyright symbol (©)
- `&reg;` - registered trademark symbol (®)

<br>

2.) Numeric Entities: Numeric entities represent characters using their Unicode code points in decimal or hexadecimal format. They consist of an ampersand (&), followed by a pound sign (#), followed by the numeric code, and ending with a semicolon (;). For example, `&#60;` represents the less-than sign (<) using its Unicode code point (U+003C). Numeric entities are particularly useful for representing characters not available on the keyboard or for specifying characters in a specific encoding.

- `&#60;` - less-than sign (<)
- `&#62;` - greater-than sign (>)
- `&#38;` - ampersand (&)
- `&#34;` - double quotation mark (")
- `&#39;` - apostrophe or single quotation mark (')
- `&#160;` - non-breaking space ( )
- `&#169;` - copyright symbol (©)
- `&#174;` - registered trademark symbol (®)

<br>

# LIST OF IMPORTANT TAGS:

## Head:

The HTML head is the contents of the `<head>` element. Unlike the contents of the `<body>` element (which are displayed on the page when loaded in a browser), the head's content is not displayed on the page. Instead, the head's job is to contain metadata about the document and resources that help define the document's behavior, appearance, and how it is processed by browsers and search engines.

**<u>Common elements in `<head>` tag</u>**

- `<title>`: Specifies the title of the webpage. This title appears in the browser’s tab, bookmarks, and search engine results. Ex: `<title>My Awesome Webpage</title>`.
- `<meta>`: Provides metadata about the document. It's attributes:

  - `charset`: Defines the character encoding (e.g., UTF-8).
  - `name` and `content`: Used for specifying keywords, descriptions, and other information for search engines.

  ```html
  <!-- Defines the character encoding -->
  <meta charset="UTF-8" />

  <!-- Provides a description of the webpage for search engines -->
  <meta name="description" content="A detailed description of my awesome webpage." />

  <!-- Sets the viewport to ensure responsive design -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  ```

- `<link>`: Links external resources to the document like CSS stylesheets and icons.

  ```html
  <!-- Link to an external CSS file -->
  <link rel="stylesheet" href="styles.css" />

  <!-- Link to a favicon -->
  <link rel="icon" type="image/png" href="favicon.png" />
  ```

- `<style>`: Contains internal CSS styles that apply to the HTML document. Useful for including quick or page-specific styles without linking an external stylesheet.

  ```html
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
    }
  </style>
  ```

- `<script>`: Embeds or links to JavaScript code that controls interactive behavior on the page.

  ```html
  <!-- Linking to an external JavaScript file -->
  <script src="script.js"></script>
  <!-- Inline JavaScript -->
  <script>
    console.log("Hello, world!");
  </script>
  ```

<br>

## Heading:

HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading. h1 to h6 boldness & font-size keeps decreasing. Browsers automatically add some white space (a margin) before and after a heading.

<br>

## Paragraph:

The HTML `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed.

<br>

## Pre-formatted text:

The HTML `<pre>` element defines preformatted text. The text inside a `<pre>` element is displayed in a fixed-width font (usually Courier), and it preserves both spaces and line breaks. That means the text will be displayed on web page the exact way you have written in code. Example:

```html
<pre>
My Bonnie lies over the ocean.

My Bonnie lies over the sea.

My Bonnie lies over the ocean.

Oh, bring back my Bonnie to me.
</pre>
```

Above code will be displayed on web page like below. But this wouldn't have been the case with `<p>` tag. There all the spaces would have been eaten up by browser.

<pre>
  My Bonnie lies over the ocean.

  My Bonnie lies over the sea.

  My Bonnie lies over the ocean.

  Oh, bring back my Bonnie to me.
</pre>

<br>

## Horizontal rule:

The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. This element is used to separate content (or define a change) in an HTML page. Adds a line from left end to right end of web page where you use it. It doesn't have end tag.

<br>

## Line break:

The HTML `<br>` element defines a line break. Use it if you want a line break (a new line) without starting a new paragraph. It also doesn't have an end tag.

<br>

## Text Formatting:

- `<b>` - <b>Bold text</b>
- `<strong>` - <strong>Important text</strong>
- `<i>` - <i>Italic text</i>
- `<em>` - <i>Emphasized text</i>
- `<mark>` - <mark>Marked text</mark>
- `<small>` - <small>Smaller text</small>
- `<del>` - <del>Deleted text</del>
- `<ins>` - <ins>Inserted text</ins>
- `<sub>` - <sub>Subscript text</sub>
- `<sup>` - <sup>Superscript text</sup>

<br>

## Anchor Tags (Links):

Links are found in nearly all web pages. Links allow users to click their way from page to page. A link does not have to be text. A link can be an image or any other HTML element. The HTML `<a>` tag defines a hyperlink(same as link). It has the following syntax:

```html
<a href="url">link text</a>
```

- The most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.
- The link text is the part that will be visible to the reader.
- Instead of link text, we can also put `<img>` element inside `<a>` tag to use image as link.
- Clicking on the link text, will send the reader to the specified URL address.
- This tag also has a `title` attribute which specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.
- By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link. The `target` attribute specifies where to open the linked document. This attribute can have following values:
  - `_self` : Opens the document in the same window/tab as it was clicked (Default)
  - `_blank`: Opens the document in new window/tab.
  - `_parent` : Opens the document in the parent frame. (Not used much)
  - `_top` : Opens the document in the full body of the window. (Not used much)

Example:

```html
<a href="https://www.w3schools.com/" title="Description" target="_blank">Visit W3Schools.com!</a>
```

Above html code will look like this on web page - <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>

<br>

## Images:

The HTML `<img>` tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. This tag creates a holding space for the referenced image.

The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.

The `<img>` tag has 4 major attributes:

- `src` : Specifies the path(URL) to the image.
- `alt` : Specifies an alternate text for the image, if browser is unable to find image at the given URL or due to any other issue.
- `width` & `height` : These attributes always define the width and height of the image in pixels. <span style="color:SpringGreen;">Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.</span> You can also use CSS to specify the width and height of an image.

```html
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

HTML allows animated gifs. Following extensions are possible - [.jpg, .jpeg, .jfif, .pjpeg, .pjp, png, .svg, .gif, .ico, .cur, .apng]

**Note:** Loading large images takes time, and can slow down your web page. Use images carefully.

<br>

## Table:

HTML tables allow web developers to arrange data into rows and columns. Important tags for making a table are:

- `<table>`: This is the container element for all table-related content. All other table elements must be nested inside this tag.
- `<caption>`: Provides a title or description for the table. It is placed immediately after the opening `<table>` tag. Always use it to provide a brief description of the table -- Accessibility Feature!

- `<thead>`: Groups the header content (typically contains column headings).
- `<tbody>`: Contains the main data of the table.
- `<tfoot>`: Contains footer content, often used for summary or totals. Although it appears in the code after `<thead>` and `<tbody>`, some browsers might render it above the table body for easier viewing in long tables.

- `<tr>`: Represents a table row. All rows (in `<thead>`, `<tbody>`, and `<tfoot>`) use this tag.
- `<th>` (Table Header Cell): Used for cells that act as headers. These cells are usually bold and centered by default. They help define the context for the data cells in the same row or column.
- `<td>` (Table Data Cell): Represents a standard data cell in the table.

- `<colgroup>`: Defines a group of one or more columns in a table for styling or other attributes. It allows you to apply properties to several columns at once.
- `<col>`: Represents an individual column within a `<colgroup>`. You can use it to set width, background color, or other column-specific styling. It has a `span` attribute which specifies the number of columns a `<col>` element should span.

Example :

```html
<table style="border: 1px solid white;">
  <caption>Product List</caption>
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;" span="2">
  </colgroup>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
      <td>100</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Items: 150</td>
    </tr>
  </tfoot>
</table>
```

<table style="border: 1px solid white;">
  <caption>Product List</caption>
  <colgroup>
    <col style="width: 50%;">
    <col style="width: 25%;" span="2">
  </colgroup>
  <thead>
    <tr>
      <th>Product</th>
      <th>Price</th>
      <th>Quantity</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Apple</td>
      <td>$1.00</td>
      <td>50</td>
    </tr>
    <tr>
      <td>Banana</td>
      <td>$0.50</td>
      <td>100</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="3">Total Items: 150</td>
    </tr>
  </tfoot>
</table>

<b style="color:red;">Note-1:</b> A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.

<b style="color:Yellow;">Note-2:</b> Always make sure that the number of cells are the same in each row.

<br>

## Lists:

HTML lists allow web developers to group a set of related items in lists. Generally lists are 2 types - Ordered & Unordered lists.

- An unordered list starts with the `<ul>` tag.
- An ordered list starts with the `<ol>` tag.
- Each list item starts with the `<li>` tag both lists.

```html
<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>
```

<ul>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ul>

```html
<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>
```

<ol>
  <li>Coffee</li>
  <li>Tea</li>
  <li>Milk</li>
</ol>

<b style="color:HotPink;">NOTE:</b> `list-style-type: none;` css can be used to remove bullet points from `<li>` elements.

<div style="font-size: 17px;background: black;padding: 2rem; background-color: rgba(103, 114, 230, 0.2);">

You can use a `<ul>` or `<ol>` inside an `<li>` (list item) element, and it is perfectly valid and commonly used in HTML. This is the proper way to create nested lists, where each `<li>` can contain another list for hierarchical or grouped data.

```html
<ul>
  <li>
    Fruits
    <ul>
      <li>Apples</li>
      <li>Oranges</li>
      <li>Bananas</li>
    </ul>
  </li>
  <li>
    Vegetables
    <ul>
      <li>Carrots</li>
      <li>Potatoes</li>
    </ul>
  </li>
</ul>
```

</div>

<br>

## Form elements:

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;form&gt;</h3>

The `<form>` element is a container for all form controls (input fields, buttons, etc.). It collects and submits user data.

**Attributes:**

- `action`: Specifies the URL where form data is sent (e.g., `action="/submit"`).
- `method`: Defines HTTP method (`GET` or `POST`).
- `target`: Specifies where to open the response (`_self`, `_blank`, `_parent`, `_top`).
- `enctype`: Used with `method="POST"` to specify encoding (`application/x-www-form-urlencoded`, `multipart/form-data`, `text/plain`).
- `autocomplete`: Enables/disables browser autofill (`on`/`off`).
- `novalidate`: Disables built-in validation when submitting the form.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;input&gt;</h3>

The `<input>` element is the most commonly used form control. It allows users to enter data in different formats.

Common `type` Attributes for `<input>`

- `text`: Single-line text input. <input type="text">
- `password`: Masked password input. <input type="password">
- `email`: Validates email format. <input type="email">
- `number`: Accepts only numbers. <input type="number">
- `tel`: Accepts phone numbers. <input type="tel">
- `date`: Select a date from a date picker. <input type="date">
- `time`: Select a time. <input type="time">
- `datetime-local`: Select both date and time. <input type="datetime-local">
- `month`: Select a month and year. <input type="month">
- `week`: Select a week of the year. <input type="week">
- `color`: Color picker input. <input type="color">
- `checkbox`: Allows multiple selections (true/false). <input type="checkbox">
- `radio`: Select only one option in a group. <input type="radio" name="gender">
- `file`: Allows file uploads. <input type="file">
- `range`: Selects a value within a range. <input type="range" min="1" max="10">
- `hidden`: Stores data but is not visible. <input type="hidden" name="userId" value="123">
- `submit`: Submits the form. <input type="submit">
- `reset`: Resets form fields. <input type="reset">
- `button`: Creates a general button. <input type="button" value="Click Me">

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;label&gt;</h3>

The `<label>` element associates a text description with an `<input>` field, improving accessibility.

<label for="email">Email:</label>
<input type="email" id="email" name="email">

```html
<label for="email">Email:</label> <input type="email" id="email" name="email" />
```

The `for` attribute matches the `id` of the `<input>`, linking them.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;textarea&gt;</h3>

Used for multi-line text input (e.g., comments, messages). `rows` and `columns` properties define the size of this element.

<label for="message">Message:</label>
<textarea id="message" name="message" rows="4" cols="50"></textarea>

```html
<label for="message">Message:</label> <textarea id="message" name="message" rows="4" cols="50"></textarea>
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;select&gt; and &lt;option&gt;</h3>

Used to create dropdown lists.

<label for="country">Select Country:</label>
<select id="country" name="country">
  <option value="us">USA</option>
  <option value="uk">UK</option>
  <option value="in">India</option>
</select>

```html
<label for="country">Select Country:</label>
<select id="country" name="country">
  <option value="us">USA</option>
  <option value="uk">UK</option>
  <option value="in">India</option>
</select>
```

**Attributes:**

- `selected`:	Preselects an option.
- `disabled`:	Disables a dropdown option.
- `multiple`:	Allows multiple selections.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;button&gt;</h3>

Creates a clickable button.

<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hello!')">Click Me</button>

```html
<button type="submit">Submit</button>
<button type="reset">Reset</button>
<button type="button" onclick="alert('Hello!')">Click Me</button>
```

- `type="submit"`: Submits form.
- `type="reset"`: Resets form fields.
- `type="button"`: General button.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">&lt;datalist&gt;</h3>

Provides a list of predefined values for an `<input>` field (autocomplete suggestions).

<body>
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser" />
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
</body>

<br>

```html
<label for="browser">Choose a browser:</label>
<input list="browsers" id="browser" name="browser">
<datalist id="browsers">
  <option value="Chrome">
  <option value="Firefox">
  <option value="Safari">
  <option value="Edge">
</datalist>
```

<div style="border: 1px solid yellow; padding: 10px;">

**FORM VALIDATION ATTRIBUTES:**

- `required`:	Field must be filled before submission.
- `min` / `max`: Sets numeric limits.
- `maxlength`: Restricts the maximum number of characters.
- `pattern`: Defines a regex pattern for input validation.
- `readonly`:	Prevents user modification.
- `disabled`:	Disables input field.

```html
<input type="text" required pattern="[A-Za-z]+" maxlength="10">
```

</div>

<br>
<br>

# Block & Inline:

<h3 style="text-decoration: underline;">Block Elements:</h3>

- **Starts on a New Line:** Block-level elements always begin on a new line. This means that they automatically create a "block" or a rectangular area in the layout.
- **Occupies Full Available Width:** By default, block-level elements expand <u>**to fill the full width of their parent container**</u> (unless a width is explicitly set).
- **Vertical Margins:** They respect vertical margin properties. Margins applied to block-level elements affect the spacing between adjacent blocks.
- **Can Contain Other Blocks and Inline Elements:** Block elements can generally house both other block-level elements and inline elements, making them useful for structuring the layout of a page.

Two commonly used block elements are: `<p>` and `<div>`.

- The `<p>` element defines a paragraph in an HTML document.
- The `<div>` element defines a division or a section in an HTML document. It is often used as a container for other HTML elements. It has no required attributes but when used together with CSS, it can be used to style blocks of content.

```html
<p>Hello World</p>
<div>Hello World</div>
```

Following are all block elements:
`<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6>`
`<header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>`

<h3 style="text-decoration: underline;">Inline Elements:</h3>

- **Does Not Start on a New Line:** Inline elements do not force a line break. They appear within the flow of text, meaning multiple inline elements can sit side by side on the same line.
- **Occupies Only Necessary Space:** Inline elements only take up as much width as necessary to contain their content. They do not, by default, stretch to fill the container’s width.
- **Margins and Padding:** Horizontal margins and padding can be applied to inline elements, but <u>**vertical margins and padding may not affect the layout in the same way as with block elements**</u>.
- **Cannot Contain Block-Level Elements:** Inline elements should generally not contain block-level elements because mixing the two can lead to unexpected behavior and is typically not valid HTML structure.

Some inline HTML elements:

`<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q>`
`<samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>`

<h3 style="text-decoration: underline;">Special Case: Inline-Block Elements</h3>

While not strictly one of the two primary categories, inline-block elements combine characteristics of both:

- **Inline Behavior:** They do not force a line break and can sit inline with other elements.
- **Block Characteristics:** They allow setting of width, height, and vertical margins/padding like block-level elements.

Usage Example:

```html
<span style="display: inline-block; width: 100px; height: 50px; background-color: lightblue;">
  Inline-block Element
</span>
```

Inline-block is especially useful when you want an element to flow inline with text but also need control over its dimensions.

<br>

<div style="border: 3px solid Green; padding: 10px;">

An `img` is an inline element but still we can give width and height to it. How???

Because it is an <u>**inline replaced element**</u> unlike `span` for example which is an <u>**inline non-replaced element**</u>.

Replaced elements are those whose appearance and dimensions are defined by an external resource, not by the content inside the element. The browser replaces the element with some external content. Their dimensions can be controlled using `width` and `height` attributes or CSS properties. Examples: `img`, `input`, `textarea`, `select`, `iframe`.

Non-replaced elements are those whose content is defined by the HTML inside the element itself. These elements are rendered by the browser based on their content and styles applied to them. Their dimensions are influenced by their content i.e. we can not give height and width to them. Examples: `span`, `a`, `b`, `mark`, `strong`.

</div>

<br>

<div style="border: 1px solid yellow; padding: 10px; background: rgba(103, 114, 230, 0.2)">

<b>An image `<img />` is contained in a div tag. Image's height is 400px but somehow the div's height is 403.5px. How is that possible?</b>

The issue happened because an `<img>` is an inline element by default, meaning it behaves like text within a line of text. Here’s why that caused extra space:

1. Images as Inline Elements: If the image is an `inline` or `inline-block` element (default behavior for `<img>`), the browser may reserve extra space due to the line box's baseline alignment. This is related to the font size and line height of the parent `div`. Even if no text is present, the `div` inherits a default line height from its parent or the browser’s default stylesheet (e.g., `line-height: normal`), which can add a few pixels of space below the image to account for descenders in text (like the tails of letters "g" or "y"). In this case, the extra `3.5px` could be the result of this spacing.

2. Fixing the Issue

    - `display: block;` makes the `<img>` a block-level element, removing text-like behavior and eliminating the extra space.
    - `line-height: 0;` on container element.
    - Alternatively, `vertical-align: bottom;` or `vertical-align: top;` forces the image to align properly within inline flow.
</div>

</div>
