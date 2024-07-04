<div style="font-size: 17px;background: black;padding: 2rem;">

# <a href="https://www.youtube.com/watch?v=YEmdHbQBCSQ&ab_channel=Coding2GO">CSS Positions</a>

The position property specifies the type of positioning method used for an element. There are five different position values: `static`, `relative`, `fixed`, `absolute` and `sticky`. Elements are then positioned using the `top`, `bottom`, `left`, and `right` properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.

<b style="color: Cyan;">1. Static:</b> Static positioning is the default positioning for elements in HTML and CSS. When an element is set to `position: static;`, it follows the normal flow of the document and is positioned according to the order it appears in the HTML markup. Elements with static positioning do not use properties like `top`, `bottom`, `left`, or `right` to control their position. These properties have no effect when the position is set to `static`.

<b style="color: Cyan;">2. Relative:</b>

- When you apply a `relative` position to an element, it means that the element will be moved from its default or normal (`static`) position(in other words, they are applied relative to where the element would have been if it were not relatively positioned), but it will still occupy space in the document flow as if it hadn't been moved. This means that other elements on the page will not adjust their positions based on the relatively positioned element. In this example, the element will be moved 20 pixels down and 10 pixels to the right from its original position, but <span style="color: Orange;">the space it initially occupied will still be reserved, and other elements will not be affected by its new position</span>.

  ```css
  .element {
    position: relative;
    top: 20px; /* Moves the element 20 pixels down from its normal position */
    left: 10px; /* Moves the element 10 pixels to the right from its normal position */
  }
  ```

- Relative positioning doesn't remove an element from the document flow, unlike `absolute` or `fixed` positioning, which can lead to other elements filling the space left by the moved element.

<b style="color: Cyan;">3. Absolute:</b>

- Absolute positioning in CSS allows you to place an element precisely within its containing element, <u>**relative to its nearest positioned ancestor or the viewport (the browser window)**</u>.
- Absolute positioning removes the element from the normal document flow. It means the element is no longer in its original place in the page layout, and other elements don't consider it for layout purposes.
- To control where the absolutely positioned element appears, you typically use the `top`, `bottom`, `left`, and `right` properties. These properties specify how far the element is positioned from the top, bottom, left, or right of its containing element or the viewport.
- <span style="color: Orange;">By default, the containing element for an absolutely positioned element is its nearest positioned ancestor.</span> A positioned ancestor is an element with a position value of `relative,` `absolute,` or `fixed`. If no such ancestor is found, the element is positioned relative to the viewport (the browser window).
- Absolute positioning allows elements to overlap other elements. When multiple absolutely positioned elements overlap, the <b style="color: Chartreuse;">z-index</b> property can be used to control the stacking order. Elements with a higher `z-index` value appear on top of elements with lower values. If two elements have the same `z-index`, the one defined later in the HTML markup will be on top. Note that **<u>`z-index` can be negative as well</u>**.

<b style="color: Cyan;">4. Fixed:</b>

- Fixed positioning in CSS allows you to position an element relative to the <span style="color: Gold;">browser window (viewport)</span>, rather than its containing element. This is in contrast to the absolutely positioned elements.
- Like absolute positioning, fixed positioning removes the element from the normal document flow. The element no longer occupies space in the layout as other elements do.
- To control where the fixed element appears, you typically use the `top`, `bottom`, `left`, and `right` properties, just like with absolute positioning.
- When multiple fixed-positioned elements overlap, the `z-index` property can be used to control their stacking order.
- Overusing fixed-positioned elements can impact performance, especially on mobile devices. It's essential to use them judiciously and optimize your code for efficiency because each fixed-positioned element on a page triggers the browser's rendering engine to repaint and reflow the page whenever the user scrolls or resizes the viewport. This can be computationally expensive, especially if there are many fixed elements. Frequent repaints and reflows can lead to a noticeable decrease in performance.

<b style="color: Cyan;">5. Sticky:</b>

- Sticky positioning in CSS allows elements to behave as a combination of both `position: relative` and `position: fixed`, based on their scroll position within their containing element.
- A sticky element remains in the normal document flow and behaves like a relatively positioned element and moves with the scrolling content of its containing element until the user scrolls it to a specified scroll position (threshold) within its containing element.
- You control when an element becomes sticky by specifying a `top`, `bottom`, `left`, or `right` offset value. When the user scrolls the element to that offset position within its containing element, it becomes sticky and remains in that position.
- The containing element is the nearest ancestor with overflow (other than visible) and establishes a scrolling context. The sticky element remains within this containing element as it scrolls. If no containing element is found, the sticky element will be relative to the viewport.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Fixed and Sticky</h3>

[Change positions from `fixed` to `sticky` to observe differences]

```html
<!DOCTYPE html>
<html>
  <head>
    <title>HTML Demo</title>
    <link rel="icon" type="image/x-icon" href="./Images/hd_logo.png" />
    <style>
      #main-container {
        overflow: scroll;
        width: 500px;
        height: 500px;
        background-color: red;
      }

      #child-container {
        padding: 10px;
        width: 250px;
        height: 700px;
        background-color: yellow;
      }

      span {
        position: fixed; 
        margin-top: 70px;
        top: 50px;
      }
    </style>
  </head>

  <body>
    <div id="main-container">
      <div id="child-container">
        <h1>Header</h1>
        <span>Hi! I am span element</span>
      </div>
    </div>
    <script src="./JS/demo.js"></script>
  </body>
</html>
```

<b style="color: Yellow; font-size: 25px;">Watch <a href="https://www.youtube.com/shorts/0xdkp7vGKwk">this</a> video to understand difference between fixed and sticky</b>

</div>

<!-- <div style="background: DarkRed;padding: 0.3rem 0.8rem;"> [HIGHLIGHT] -->
<!-- <h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;"> [SUBHEADING] -->
<!-- <b style="color: Chartreuse;"> [NOTE] -->
<!-- <b style="color:red;"> [NOTE-2] -->
<!-- <span style="color: Cyan;"> [IMP] -></span> -->
<!-- <b style="color: Salmon;"> [POINT] -->
