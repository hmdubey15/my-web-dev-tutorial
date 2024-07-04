<div style="font-size: 17px;background: black;padding: 2rem;">

# Media Queries

Media Queries are a crucial component of responsive web design. They allow you to apply different styles to a document based on various factors such as screen size, device characteristics, and media types. Media queries enable you to create designs that adapt and look good on a variety of devices, from desktop monitors to smartphones and everything in between.

Media queries are typically written using the <b style="color: Chartreuse;">@media</b> rule. The basic syntax is as follows:
```css
@media media_type and (media_feature and|or|not media_feature) {
  /* CSS-Code */
}
```
- `media_type`: Specifies the type of media, such as 'screen', 'print', 'all', etc.
- `media_feature`: Defines the conditions that must be satisfied for the styles inside the media query to take effect.

Operators(meaning of the not, only and and keywords):
- `not`: Inverts the meaning of an entire media query.
- `and`: Combines a media feature with a media type or other media features.
- `or`: Used to apply styles when at least one of the specified conditions is true.

They are all optional. However, if you use not or only, you must also specify a media type.

The result of the query is true if the specified media type matches the type of device the document is being displayed on and all expressions in the media query are true. When a media query is true, the corresponding style sheet or style rules are applied, following the normal cascading rules.

Unless you use the `not` or `only` operators, the media type is optional and the `all` type will be implied.

You can also have different stylesheets for different media:
```html
<link rel="stylesheet" media="mediatype and|not|only (expressions)" href="print.css">
```

<h3 style="text-decoration: underline;">Media Types</h3>

1.) <b style="color: Salmon;">all</b>: Used for all media type devices.<br>
2.) <b style="color: Salmon;">print</b>: Used for printers.<br>
3.) <b style="color: Salmon;">screen</b>: Used for computer screens, tablets, smart-phones etc.<br>
4.) <b style="color: Salmon;">speech</b>: Used for screenreaders that "reads" the page out loud.

<h3 style="text-decoration: underline;">Media Features</h3>

Media features are used to specify conditions such as width, height, device orientation, resolution, etc.
```css
@media screen and (max-width: 600px) {
    /* styles for screens with a maximum width of 600 pixels */
}
```
1.) <b style="color: Salmon;">width</b> and <b style="color: Salmon;">height</b>: Specify the width and height of the viewport.<br>
2.) <b style="color: Salmon;">min-width</b> and <b style="color: Salmon;">max-width</b>: Set minimum and maximum width thresholds.<br>
3.) <b style="color: Salmon;">orientation</b>: Checks whether the device is in portrait or landscape mode.<br>
4.) <b style="color: Salmon;">resolution</b>: Specifies the resolution of the output device.<br>
<b style="color: Chartreuse;">[THE LIST IS VERY LONG. SEARCH AS PER REQUIREMENT]</b>

</div>

<!-- <div style="background: DarkRed;  padding: 0.3rem 0.8rem;"> => HIGHLIGHT -->
<!-- <h3 style="text-decoration: underline;"> => SUBHEADING -->
<!-- <b style="color: Chartreuse;"> => IMPORTANT-1 -->
<!-- <i> => IMPORTANT-2 -->
<!-- <mark style="padding: 0.3rem 0.8rem;"> => IMPORTANT-3 -->
<!-- <b> => IMPORTANT-5 -->
<!-- <b style="color:red;"> => NOTE -->
<!-- <span style="color: Cyan;">-></span> -->
<!-- <span style="color: Salmon;"> -->