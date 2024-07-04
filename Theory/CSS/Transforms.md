<div style="font-size: 17px;background: black;padding: 2rem;">

CSS transforms are a set of properties that allow you to apply two-dimensional and three-dimensional transformations to elements in your web page. These transformations can alter the position, size, and orientation of elements, enabling you to create visually engaging effects without changing the underlying document structure.

# 2-D transforms

`transform` is the main property we are gonna use it to apply transformations on elements. Following can be used as values(multiple ones of these can be provided):

- <b style="color: Salmon;">translate()</b>: This method moves an element from its current position (according to the parameters given for the X-axis and the Y-axis). If given single value, it moves along X-axis and Y-axis both by that value.

  ```css
  div {
    transform: translate(5px, -8px); /* This element is moved 5 px right and 8 px up from its current position. */
  }
  ```

- <b style="color: Salmon;">rotate()</b>: This method rotates an element clockwise or counter-clockwise according to a given degree. Using negative values will rotate the element counter-clockwise.

  ```css
  div {
    transform: rotate(20deg); /* Rotates the <div> element clockwise with 20 degrees */
  }
  ```

- <b style="color: Salmon;">scale()</b>: This method increases or decreases the size of an element (according to the parameters given for the width and height). If given single value, it is applied on both height and width.

  ```css
  div {
    transform: scale(2, 3); /* Increases the element 2 times of its original width, and 3 times of its original height */
  }

  div {
    transform: scale(0.5); /* Decreases the element to be 2 times of its original width and height */
  }
  ```

- <b style="color: Salmon;">skew()</b>: This method skews an element along the X and Y-axis by the given angles. Behaves same like scale and translate in case single value is provided.

    ```css
    div {
    transform: skew(20deg, 10deg); /* Skewed 20 degrees along the X-axis, and 10 degrees along the Y-axis */
    }
    ```

- <b style="color: Salmon;"> translateX() translateY() scaleX() scaleY() skewX() skewY() </b>: These can be used if we want to transform along any single axis.

- <b style="color: Salmon;">matrix()</b>: This method combines all the 2D transform methods into one. The matrix() method take six parameters - scaleX(), skewY(), skewX(), scaleY(), translateX(), translateY().


<b style="color: SpringGreen;">transform-origin</b> is a property that defines the point around which a transformation is applied to an element. It determines the origin of the transformation, such as the center or a specific corner of the element. By default, the origin of a transform is `center`. Examples of how we can set it:

```css
/* One-value syntax */
transform-origin: 2px;
transform-origin: bottom;

/* x-offset | y-offset */
transform-origin: 3cm 2px;

/* x-offset-keyword | y-offset */
transform-origin: left 2px;

/* x-offset-keyword | y-offset-keyword */
transform-origin: right top;

/* y-offset-keyword | x-offset-keyword */
transform-origin: top right;

/* x-offset | y-offset | z-offset */
transform-origin: 2px 30% 10px;

/* x-offset-keyword | y-offset | z-offset */
transform-origin: left 5px -3px;
```

<div style="border: 1px solid yellow; padding: 10px; background-color: rgba(103, 114, 230, 0.2);">

It is important to set it, especially while using `scale`. Because it would extend to both directions by default.
</div>

<br>

# <a src="https://www.w3schools.com/css/css3_3dtransforms.asp">3-D transforms</a>


</div>
