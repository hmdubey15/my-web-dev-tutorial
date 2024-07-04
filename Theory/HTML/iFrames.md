<div style="font-size: 17px;background: black;padding: 2rem;">

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