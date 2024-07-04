<div style="font-size: 17px;background: black;padding: 2rem;">

The Fetch API is a modern JavaScript interface for making network requests (HTTP requests) in web browsers and Node.js environments. It provides a more powerful and flexible way to perform asynchronous communication with web servers compared to older APIs like XMLHttpRequest (XHR).

The main function of the Fetch API is to fetch resources (such as JSON data, HTML pages, images, etc.) from a network.
It uses the fetch() method, which takes a URL as its first argument and returns a Promise that resolves to the Response object representing the response to the request. It uses the <b style="color: LawnGreen;">fetch()</b> method, which takes a URL as its first argument and returns a Promise that resolves to the Response object representing the response to the request.

Fetch API is promise-based, meaning it uses Promises to handle asynchronous operations. You can use `.then()` and .`catch()` methods (or `async-await`) to handle success and error responses respectively.

<h4>Syntax</h4>

```js
fetch(url [, options])
  .then(response => {
    // Handle response
  })
  .catch(error => {
    // Handle error
  });
```

- <b style="color: Chartreuse;">url:</b> The URL to access.
- <b style="color: Chartreuse;">Request Object(options):</b> Represents the request to be made. It allows you to customize various aspects of the request such as headers, method, body, etc.
- <b style="color: Chartreuse;">Response Object:</b> Represents the response received from the server. It provides methods and properties to access response data such as status, headers, body, etc.

Example request:

```js
const mockApiCall = async () => {
  try {
    let url = "https://06f36437b00f4150b9892f52f5af15ad.api.mockbin.io/";
    let response = await fetch(url);
    let data = await response.json(); // To get body of response
    console.log({ data });
  } catch (error) {
    console.log("Error occured: ", error);
  }
};

mockApiCall();
```

## Response

- <b style="color: Salmon;">response.status</b>: Response status code
- <b style="color: Salmon;">response.ok</b>: `true` if the status is `200-299`. <b style="color:red;">(Most used)</b>
- <b style="color: Salmon;">response.headers</b>: Map-like object with HTTP headers.
- <b style="color: Salmon;">response.text()</b>: Return the response as text.
- <b style="color: Salmon;">response.json()</b>: Parse the response as JSON object. <b style="color:red;">(Most used)</b>
- <b style="color: Salmon;">response.formData()</b>: Return the response as FormData object (multipart/form-data encoding, see the next chapter).
- <b style="color: Salmon;">response.blob()</b>: Return the response as Blob (binary data with type).
- <b style="color: Salmon;">response.arrayBuffer()</b>: Return the response as ArrayBuffer (low-level binary data).

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Status</h3>

HTTP response status codes (or simply status codes) are 3-digit codes issued by server in response to browser-side request from a client. These status codes serve as a means of quick and concise communication on how the server worked on and responded to the client's request. 

Some famous codes are:

- <span style="color: Red;">404 Not Found</span>: This status code indicates that the server can’t find anything matching the Request-URI. Links that lead to a 404 page are often called broken or dead links
- <span style="color: Orange;">500 Internal Server Error</span>: This status code indicates that the server encountered an unexpected condition which prevented it from fulfilling the request.
- <span style="color: DarkOrange;">501 Not Implemented</span>: This status code means that the server does not support the functionality required to fulfill the request.
- <span style="color: HotPink;">401 Unauthorized</span>: This status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource. This status is sent with a WWW-Authenticate header that contains information on how to authorize correctly. With this status code, it is possible to repeat the request by including authentication in order to access the target resource.  This status is similar to `403 Forbidden`, but in this case, authentication is possible.
- <span style="color: LawnGreen;">200 OK</span>: This status code indicates that the request has succeeded.

<a href="https://learning.mlytics.com/the-internet/http-response-status-codes">Click here</a> to see meanings of all the status codes.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Response Headers</h3>

HTTP response headers are key-value pairs sent by a server in response to a client's HTTP request. These headers provide additional information about the requested resource, how it should be handled, and how the client and server should interact. Response headers are an integral part of both HTTP request and response messages, but they do not directly pertain to the data contained within the message body. Instead, they provide metadata about the response's handling and transmission.

Here's an overview of some common HTTP response headers:

- <b style="color: Khaki;">Status-Line</b>: This is not technically a header but rather the initial line of the response that includes the HTTP version, status code, and reason phrase. For example: `HTTP/1.1 200 OK`
- <b style="color: Khaki;">Date</b>: Indicates the date and time when the response was generated by the server.
- <b style="color: Khaki;">Server</b>: Specifies information about the server software that generated the response.
- <b style="color: Khaki;">Content-Type</b>: Specifies the media type (MIME type) of the response body. For example, `text/html`, `application/json`, `image/jpeg`, etc.
- <b style="color: Khaki;">Content-Length</b>: Indicates the size of the response body in bytes.
- <b style="color: Khaki;">Content-Encoding</b>: Specifies the encoding applied to the response body, such as `gzip`, `deflate`, or `br` (Brotli).
- <b style="color: Khaki;">Content-Language</b>: Specifies the natural language(s) of the intended audience for the enclosed content.
- <b style="color: Khaki;">Cache-Control</b>: Directives for caching mechanisms in both requests and responses. It can control caching on client-side caches, intermediary proxies, and the server itself.
- <b style="color: Khaki;">ETag</b>: A unique identifier for the version of the requested resource, used for cache validation and conditional requests.
- <b style="color: Khaki;">Expires</b>: Specifies the date/time after which the response is considered stale and should not be used.
- <b style="color: Khaki;">Last-Modified</b>: Indicates the date and time when the requested resource was last modified.
- <b style="color: Khaki;">Location</b>: Used in redirections (status codes 3xx) to indicate the URL to which the client should redirect.
- <b style="color: Khaki;">Set-Cookie</b>: Sets a cookie on the client's browser. Used for session management, tracking, and authentication.
- <b style="color: Khaki;">WWW-Authenticate</b>: Indicates the authentication scheme(s) the server supports and the realm for which authentication is required.
- <b style="color: Khaki;">Allow</b>: Specifies the HTTP methods supported by the resource.
- <b style="color: Khaki;">Access-Control-Allow-Origin</b>: Used in Cross-Origin Resource Sharing (CORS) to specify which origins are allowed to access the resource.
- <b style="color: Khaki;">Strict-Transport-Security</b>: Instructs the browser to only access the site over HTTPS for a specified duration.

<div style="border: 2px solid LightCoral; padding: 10px;">
<h4 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">ETag</h4>

ETag, or entity tag, is an HTTP response header field that helps with caching behavior by making it easy to check whether a resource has changed. ETag is an opaque identifier assigned by a Web server to a specific version of a resource found at a URL. ETag can help caches be more efficient and save bandwidth.

- The server receives an HTTP request for a particular resource.
- The server generates a response and attached an ETag header. For Eg: ETag: “response_version1”.
- The server sends the response with the above header with the status code 200. Then the application represents the resource and at the same time caches the resource copy along with header information.
- Later the same application makes another request for the same resource with following conditional request header: `If-None-Match`: “response_version1”
- On receiving the request for the resource along with the `If-None-Match` header, the server-side logic compare the current value of the ETag identifier on the server-side and the one which is received in the request header.
- If the request’s `If-None-Match` is the same as the currently generated value of ETag on the server, then status code 304 (Not Modified) with the empty body is sent back and the application uses the cached copy of the resource.
- If the request’s `If-None-Match` value doesn’t match the currently generated/assigned value of ETag (say “response_version2”) for the same resource then the server sends back the new content in the body along with status code 200. The ‘ETag’ header with the new value is also included in the response. The application uses the new resource and updates its cache with the new data.
</div>

## Request Object (options)

Here’s the full list of all possible fetch options with their default values (alternatives in comments):

```js
let promise = fetch(url, {
  method: "GET", // POST, PUT, DELETE, etc.
  headers: {
    // the content type header value is usually auto-set
    // depending on the request body
    "Content-Type": "text/plain;charset=UTF-8"
  },
  body: undefined, // string, FormData, Blob, BufferSource, or URLSearchParams
  // or an url from the current origin
  referrerPolicy: "strict-origin-when-cross-origin", // no-referrer-when-downgrade, no-referrer, origin, same-origin...
  mode: "cors", // same-origin, no-cors
  credentials: "same-origin", // omit, include
  cache: "default", // no-store, reload, no-cache, force-cache, or only-if-cached
  redirect: "follow", // manual, error
  integrity: "", // a hash, like "sha256-abcdef1234567890"
  keepalive: false, // true
  signal: undefined, // AbortController to abort request
  window: window // null
});
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Method</h3>

An HTTP request method, also known as an HTTP verb, is a way to indicate the action that an API client will perform on a resource. Each method is assigned a specific purpose, such as creating, reading, updating, or deleting a resource. Request methods are case-sensitive and should always be noted in upper case.

Some popular HTTP methods include:

- <b style="color: Violet;">GET</b>: Used to read/retrieve data from a web server. GET returns an HTTP status code of 200 (OK) if the data is successfully retrieved from the server.
- <b style="color: Violet;">POST</b>: Used to send data (file, form data, etc.) to the server. On successful creation, it returns an HTTP status code of 201.
- <b style="color: Violet;">PUT</b>: Used to modify the data on the server. It replaces the entire content at a particular location with data that is passed in the body payload. If there are no resources that match the request, it will generate one.
- <b style="color: Violet;">PATCH</b>: It is similar to PUT request, but the only difference is, it modifies a part of the data. It will only replace the conten</b>t that you want to update.
- <b style="color: Violet;">DELETE</b>: Used to delete the data on the server at a specified location.

Without options(no second arg), API call is a simple `GET` request, downloading the contents of the `url`.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Headers</h3>

Request headers are sent by the client to provide additional information about the request being made, which helps the server tailor the response. They can include details such as the client's user agent, the content type of the request body, authentication credentials, and more. Here's a detailed explanation of request headers:

- <b style="color:OliveDrab;">Host</b>: Specifies the domain name of the server being requested. Example: `Host: www.example.com`
- <b style="color:OliveDrab;">User-Agent</b>: Identifies the client making the request, typically the web browser or HTTP client. Example: `User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.99 Safari/537.36`
- <b style="color:OliveDrab;">Accept</b>: Specifies the media types that the client can understand. Example: `Accept: application/json, text/plain, */*`
- <b style="color:OliveDrab;">Content-Type</b>: Specifies the media type of the request body. Example: `Content-Type: application/json`
- <b style="color:OliveDrab;">Authorization</b>: Provides credentials for authentication. Example (Basic Authentication): `Authorization: Basic dXNlcm5hbWU6cGFzc3dvcmQ=`
- <b style="color:OliveDrab;">Cookie</b>: Contains previously set cookies sent by the server. Example: `Cookie: sessionId=123456789`
- <b style="color:OliveDrab;">Referer</b>: Specifies the URL of the previous web page from which the request was initiated. Example: `Referer: https://www.example.com/page1.html`
- <b style="color:OliveDrab;">Origin</b>: Indicates the origin server of the request (used in CORS). Example: `Origin: https://www.example.com`
- <b style="color:OliveDrab;">Content-Length</b>: Specifies the length of the request body in bytes. Example: `Content-Length: 123`
- <b style="color:OliveDrab;">Accept-Language</b>: Specifies the preferred language of the response content. `Example: Accept-Language: en-US,en;q=0.9`

Clients can also send custom headers to provide additional information or to communicate with specific server-side functionalities. Custom headers are defined by the client and server and are not part of the standard HTTP specification.

```js
X-Custom-Header: Value
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Body</h3>

The request body in an HTTP request contains data that is sent from the client (e.g., a web browser or application) to the server. It is used to provide additional information to the server, such as form data, JSON data, file uploads, etc. The structure and content of the request body depend on the HTTP method being used and the specific requirements of the server's API.

It is typically used with "create" and "update" operations, such as `POST`, `PUT`, and `PATCH`. For example, when creating a resource using `POST` or `PUT`, the request body usually contains the representation of the resource to be created.

Request bodies can be of any format, such as JSON, XML, PDF, or Http Forms. The `Content-Type` header indicates the server's understanding type of request. Common media types include `application/json`, `application/x-www-form-urlencoded`, `multipart/form-data`, etc.

Example: 

```js
fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ key: 'value' })
})
```

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Referrer Policy</h3>

The Referrer Policy is an HTTP header that allows web developers to control how much referrer information (i.e., the URL of the previous web page) is included in the Referer header of outgoing requests from their site. It provides a way to manage the amount of information shared with other websites when users navigate from one page to another. Referrer Policy helps protect user privacy and security while also enabling developers to customize the behavior of their web applications.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Mode</h3>

The request `mode` is an option available in the Fetch API that allows you to specify how cross-origin requests are handled. It determines the CORS (Cross-Origin Resource Sharing) behavior for the request. The mode affects whether the browser will include certain CORS-related headers and whether cookies and authentication credentials will be sent with the request. The request mode option is particularly useful when making requests to resources on different origins (domains).

<h4>Common Values:</h4>

- <span style="color: Chartreuse;">"cors"</span> – the default, cross-origin requests are allowed, as described in Fetch: Cross-Origin Requests,
- <span style="color: Chartreuse;">"same-origin"</span> – cross-origin requests are forbidden,
- <span style="color: Chartreuse;">"no-cors"</span> – only safe cross-origin requests are allowed.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Credentials</h3>

The `credentials` option specifies whether `fetch` should send cookies and HTTP-Authorization headers with the request.

- <span style="color: Chartreuse;">"same-origin"</span> – the default, don’t send for cross-origin requests,
- <span style="color: Chartreuse;">"include"</span> – always send, requires Access-Control-Allow-Credentials from cross-origin server in order for JavaScript to access the response, that was covered in the chapter Fetch: Cross-Origin Requests,
- <span style="color: Chartreuse;">"omit"</span> – never send, even for same-origin requests.

## Cross-Origin Requests 

Cross-Origin requests (also known as CORS, which stands for Cross-Origin Resource Sharing) are HTTP requests made from one domain (origin) to another domain. In web development, an "origin" is defined by the combination of the protocol (e.g., HTTP, HTTPS), domain (e.g., example.com), and port (e.g., :80, :443) of a web page or API endpoint. When a resource (such as a script, stylesheet, or API endpoint) is served from a different origin than the requesting page, it's considered a cross-origin request.

 By default, web browsers enforce security policies that restrict cross-origin requests to prevent potential security vulnerabilities, such as CSRF (Cross-Site Request Forgery) and leaking sensitive information.

<h4>To enable cross-origin requests, the server hosting the requested resource must include appropriate CORS headers in its responses. These headers include:</h4>

- <span style="color: Yellow;">Access-Control-Allow-Origin</span>: Specifies which origins are allowed to access the resource. It can be set to a specific origin, "*", or a list of origins.
- <span style="color: Yellow;">Access-Control-Allow-Methods</span>: Specifies which HTTP methods are allowed when accessing the resource.
- <span style="color: Yellow;">Access-Control-Allow-Headers</span>: Specifies which headers are allowed in the request.
- <span style="color: Yellow;">Access-Control-Allow-Credentials</span>: Indicates whether credentials (such as cookies and authorization headers) can be sent with the request.

<h4>Use Cases for Cross-Origin Requests:</h4>

- Accessing resources from a CDN (Content Delivery Network).
- Consuming APIs from third-party services.
- Embedding resources (such as fonts, scripts, and images) from external sources in web pages.

<b style="color: Red;">Note:</b> Cross-origin requests can introduce security risks if not handled properly. It's essential to implement appropriate security measures and validate incoming requests to prevent attacks such as CSRF and XSS (Cross-Site Scripting).

</div>

<!-- <div style="font-size: 17px;background: black;padding: 2rem;"> -->
<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
<!-- <div style="border: 1px solid yellow; padding: 10px;"> [BORDER] -->
