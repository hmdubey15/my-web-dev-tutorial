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

# HTML Semantics

Semantic elements in HTML are tags that provide meaning or context to the content they enclose, rather than just formatting or presentation. They help define the structure of a web page in a way that is meaningful to both the browser and the developer, as well as assistive technologies like screen readers for users with disabilities. Semantic elements play a crucial role in improving accessibility, search engine optimization (SEO), and maintainability of web pages.

Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.

Examples of semantic elements: `<form>`, `<table>`, and `<article>` - Clearly defines its content.

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

## Heading:

HTML headings are defined with the `<h1>` to `<h6>` tags. `<h1>` defines the most important heading. `<h6>` defines the least important heading. h1 to h6 boldness & font-size keeps decreasing. Browsers automatically add some white space (a margin) before and after a heading.

## Paragraph:

The HTML `<p>` element defines a paragraph. A paragraph always starts on a new line, and browsers automatically add some white space (a margin) before and after a paragraph. With HTML, you cannot change the display by adding extra spaces or extra lines in your HTML code. The browser will automatically remove any extra spaces and lines when the page is displayed.

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

## Horizontal rule:

The `<hr>` tag defines a thematic break in an HTML page, and is most often displayed as a horizontal rule. This element is used to separate content (or define a change) in an HTML page. Adds a line from left end to right end of web page where you use it. It doesn't have end tag.

## Line break:

The HTML `<br>` element defines a line break. Use it if you want a line break (a new line) without starting a new paragraph. It also doesn't have an end tag.

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

## Anchor Tags (Links):

Links are found in nearly all web pages. Links allow users to click their way from page to page. A link does not have to be text. A link can be an image or any other HTML element. The HTML `<a>` tag defines a hyperlink(same as link). It has the following syntax:

```
<a href="url">link text</a>
```

- The most important attribute of the `<a>` element is the href attribute, which indicates the link's destination.
- The link text is the part that will be visible to the reader.
- Instead of link text, we can also put `<img>` element inside `<a>` tag to use image as link.
- Clicking on the link text, will send the reader to the specified URL address.
- This tag also has a title attribute which specifies extra information about an element. The information is most often shown as a tooltip text when the mouse moves over the element.
- By default, the linked page will be displayed in the current browser window. To change this, you must specify another target for the link. The `target` attribute specifies where to open the linked document. This attribute can have following values:
  - `_self` : Opens the document in the same window/tab as it was clicked (Default)
  - `_blank`: Opens the document in new window/tab.
  - `_parent` : Opens the document in the parent frame. (Not used much)
  - `_top` : Opens the document in the full body of the window. (Not used much)

Example:

```
<a href="https://www.w3schools.com/" title="Description" target="_blank">Visit W3Schools.com!</a>
```

Above html code will look like this on web page - <a href="https://www.w3schools.com/">Visit W3Schools.com!</a>

## Images:

The HTML `<img>` tag is used to embed an image in a web page. Images are not technically inserted into a web page; images are linked to web pages. This tag creates a holding space for the referenced image.

The `<img>` tag is empty, it contains attributes only, and does not have a closing tag.

The `<img>` tag has 4 major attributes:

- `src` : Specifies the path(URL) to the image.
- `alt` : Specifies an alternate text for the image, if browser is unable to find image at the given URL or due to any other issue.
- `width` & `height` : These attributes always define the width and height of the image in pixels. Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads. You can also use CSS to specify the width and height of an image.

```
<img src="img_girl.jpg" alt="Girl in a jacket" width="500" height="600">
```

HTML allows animated gifs. Following extensions are possible - [.jpg, .jpeg, .jfif, .pjpeg, .pjp, png, .svg, .gif, .ico, .cur, .apng]

Note: Loading large images takes time, and can slow down your web page. Use images carefully.

## Link Tag:

The `<link>` tag defines the relationship between the current document and an external resource. It is mostly used to link to external style sheets(CSS files) or to add a favicon(small image on tab) to your website. This element is an empty element, it contains attributes only.

> Note: The link element must be embedded in the head section, and it can appear any number of times

- Insert favicon: `<link rel="icon" type="image/x-icon" href="/images/favicon.ico">`
- Insert external style sheet: `<link rel="stylesheet" href="styles.css">`

## Style Tag:

This element contains style information for a document, or part of a document. By default, the style instructions written inside that element are expected to be CSS but it can be controlled by `type` attribute.

```html
<style type="text/css">
  body {
    color: red;
  }
</style>
```

## Table:

HTML tables allow web developers to arrange data into rows and columns. Important tags for making a table are:

- `<table>` tag defines a table.
- `<th>` tags are used for adding column heading. (th stands for table header)
- `<tr>` tags define rows in a table. (tr stands for table row)
- `<td>` tags define cells in a table.

Example :

```
<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>
```

<table>
  <tr>
    <th>Company</th>
    <th>Contact</th>
    <th>Country</th>
  </tr>
  <tr>
    <td>Alfreds Futterkiste</td>
    <td>Maria Anders</td>
    <td>Germany</td>
  </tr>
  <tr>
    <td>Centro comercial Moctezuma</td>
    <td>Francisco Chang</td>
    <td>Mexico</td>
  </tr>
</table>

Note: A table cell can contain all sorts of HTML elements: text, images, lists, links, other tables, etc.

Always make sure that the number of cells are the same in each row.

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

<br>

# Block & Inline:

<h3 style="text-decoration: underline;">Block Elements:</h3>

A block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element. A block-level element always takes up the full width available (stretches out to the left and right as far as it can).

Two commonly used block elements are: `<p>` and `<div>`.

- The `<p>` element defines a paragraph in an HTML document.
- The `<div>` element defines a division or a section in an HTML document. It is often used as a container for other HTML elements. It has no required attributes but when used together with CSS, it can be used to style blocks of content.

```
<p>Hello World</p>
<div>Hello World</div>
```

Following are all block elements:
`<address> <article> <aside> <blockquote> <canvas> <dd> <div> <dl> <dt> <fieldset> <figcaption> <figure> <footer> <form> <h1>-<h6>`
`<header> <hr> <li> <main> <nav> <noscript> <ol> <p> <pre> <section> <table> <tfoot> <ul> <video>`

<h3 style="text-decoration: underline;">Inline Elements:</h3>

An inline element does not start on a new line. It only takes up as much width as necessary. A commonly used inline element is `<span>` which is a container used to mark up a part of a text, or a part of a document. It has no required attributes but when used with CSS, it can be used to style parts of the text. Example usage: `<span>Text</span>`

Some inline HTML elements:

`<a> <abbr> <acronym> <b> <bdo> <big> <br> <button> <cite> <code> <dfn> <em> <i> <img> <input> <kbd> <label> <map> <object> <output> <q>`
`<samp> <script> <select> <small> <span> <strong> <sub> <sup> <textarea> <time> <tt> <var>`

<div style="background: DarkRed;  padding: 0.3rem 0.8rem;">
<b style="color: Yellow;">Important Points regarding display and block elements:</b>

<ol>
<li>An inline element cannot contain a block-level element.</li>
<li>Inline elements take the space according to the size of the element <b>STRICTLY</b>. That means we can't set width and height for them. But we can set width and heght of block elements.</li>
<li>Inline elements can have horizontal margins and padding, but they do not affect the vertical layout of the content. Margins and padding do not create spacing between adjacent inline elements.</li>
</ol>

</div>

<br>
<br>

<div style="border: 3px solid Green; padding: 10px;">

An `img` is an inline element but still we can give width and height to it. How???

Because it is an <u>**inline replaced element**</u> unlike `span` for example which is an <u>**inline non-replaced element**</u>.

Replaced elements are those whose appearance and dimensions are defined by an external resource, not by the content inside the element. The browser replaces the element with some external content. Their dimensions can be controlled using `width` and `height` attributes or CSS properties. Examples: `img`, `input`, `textarea`, `select`, `iframe`.

Non-replaced elements are those whose content is defined by the HTML inside the element itself. These elements are rendered by the browser based on their content and styles applied to them. Their dimensions are influenced by their content i.e. we can not give height and width to them. Examples: `span`, `a`, `b`, `mark`, `strong`.

</div>

<br>
<br>

# Iframes

An iframe, or inline frame, is an HTML element used to embed another HTML document within the current document. It allows you to include content from another source, such as a different web page, into your own page. The content within the iframe is displayed as a separate document, and it can be of a different origin (domain) than the main document.

```html
<iframe src="demo.html"></iframe>
```

Here are the key attributes and features of iframes:

1.) <b style="color: Cyan;">src</b>(source): It is used to specify the URL of the document to be embedded within the iframe. This can be a relative or absolute URL.

2.) <b style="color: Cyan;">width</b> and <b style="color: Cyan;">height</b>: You can set the width and height attributes to define the dimensions of the iframe within your document. These can be specified in pixels or percentage values. We can set them using css as well.

3.) <b style="color: Cyan;">allow</b>: Specifies a <a href="/en-US/docs/Web/HTTP/Permissions_Policy">Permissions Policy</a> for the iframe. The policy defines what features are available to the iframe (for example, access to the `microphone`, `camera`, `battery`, `web-share`, etc.) based on the origin of the request.

4.) <b style="color: Cyan;">name</b>: A targetable name for the embedded browsing context. This can be used in the target attribute of the `<a>`, `<form>`, or `<base>` elements; the formtarget attribute of the `<input>` or `<button>` elements; or the windowName parameter in the window.open() method.

```html
<iframe src="demo_iframe.htm" name="iframe_a" title="Iframe Example"></iframe>
<p><a href="https://www.w3schools.com" target="iframe_a">W3Schools.com</a></p>
```

5.) <b style="color: Cyan;">sandbox</b>: Controls the restrictions applied to the content embedded in the iframe. If we do not set this attribute, full access to the embedded content, including the execution of JavaScript. In other words, the embedded content within the iframe has the same privileges as if it were loaded in the main document. The value of the attribute can either be empty to apply all restrictions, or space-separated tokens to lift particular restrictions, some of them are:

- `allow-downloads`: Allows downloading files through an `<a>` or `<area>` element with the download attribute, as well as through the navigation that leads to a download of a file.
- `allow-same-origin`: The allow-same-origin value in the sandbox attribute of an iframe is used to control whether the embedded content within the iframe is allowed to access resources from the same origin as the containing document. The "same origin" means the same protocol, domain, and port. When this value is present in the sandbox attribute, it indicates that the embedded content has the same origin privileges as the containing document. This means it can perform actions such as accessing data storage/cookies, reading the DOM of the containing document, making XMLHttpRequests, and interacting with JavaScript functions in the parent document, as long as they are from the same origin. This is useful when you want to embed content securely but still allow communication and interaction between the embedded content and the parent document when they share the same origin. [Always be cautious when allowing same-origin access, as it may introduce security risks if not implemented carefully.]
- `allow-scripts`: Allows the page to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.
- `allow-forms`: Allows the page to submit forms. If this keyword is not used, form will be displayed as normal, but submitting it will not trigger input validation, sending data to a web server or closing a dialog.
- `allow-modals`: Allows the page to open modal windows by Window.alert(), Window.confirm(), Window.print() and Window.prompt(), while opening a dialogue(HTML element) is allowed regardless of this keyword. It also allows the page to receive BeforeUnloadEvent event.
- `allow-popups`: Allows popups (like from Window.open(), target="\_blank", Window.showModalDialog()). If this keyword is not used, that functionality will silently fail.

<div style="background: DarkRed;  padding: 0.3rem 0.8rem;">
<b style="color: Chartreuse;">NOTE-1</b>: When the embedded document has the same origin as the embedding page, it is strongly discouraged to use both allow-scripts and allow-same-origin, as that lets the embedded document remove the sandbox attribute — making it no more secure than not using the sandbox attribute at all.

<b style="color: Chartreuse;">NOTE-2</b>: Sandboxing is useless if the attacker can display content outside a sandboxed iframe — such as if the viewer opens the frame in a new tab. Such content should be also served from a separate origin to limit potential damage.

</div>
<br>

<b><i>[VISIT THIS LINK FOR MORE DETAILS ON IFRAME ATTRIBUTES - <a src="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe">iFrame</a>]</i></b>

<h3 style="text-decoration: underline;">Why to use iframe?</h3>

- `Embedding External Content`: You can use iframes to embed content from external sources, such as videos, maps, or other websites, into your own web page. For example, embedding a YouTube video or a Google Map can be achieved using an iframe.

- `Isolating Content`: Iframes provide a level of isolation between the content within the iframe and the content in the parent document. This isolation helps prevent styles and scripts in one part of the page from affecting the rest of the page. It's often used as a sandbox to contain third-party content.

- `Loading Content Dynamically`: You can use JavaScript to dynamically load content into an iframe, allowing you to update parts of a page without requiring a full page reload. This is often done in web applications to create a more seamless user experience.
  ```js
  var iframe = document.getElementById("myIframe");
  iframe.src = "newContent.html";
  ```
- `Creating Modular Web Applications`: In web development, iframes can be used to create modular and extensible applications. Each iframe can represent a separate module or component of the application, and they can communicate with each other using various techniques.

- `Security Considerations`: Iframes can be used to enhance security by isolating potentially untrusted content from the rest of the page. For example, when embedding content from a third-party website, iframes help prevent that content from accessing or modifying the parent document's content through JavaScript.

<div style="background: Yellow; color: black; padding: 0.3rem 0.8rem;">
Warning: Because each browsing context is a complete document environment, every iframe in a page requires increased memory and other computing resources. While theoretically you can use as many iframes as you like, check for performance problems.
</div>

</div>

<!-- <div style="font-size: 17px;background: black;padding: 2rem;"> -->
<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
