<div style="font-size: 17px;background: black;padding: 2rem;">

<b style="color:OrangeRed;">dragstart</b>: Fired once when the user starts dragging an element.

<br>

<b style="color:OrangeRed;">drag</b>: Fired continuously as the element is being dragged. Same as other mouse events, including the position of the cursor.

<br>

<b style="color:OrangeRed;">dragend</b>: Fired when the user releases the mouse button after a drag operation, completing the drag.

<br>

<b style="color:OrangeRed;">dragenter</b>: Fired once when the dragged element enters a valid drop target. To allow the drop, we have to do `event.preventDefault()`.

<br>

<b style="color:OrangeRed;">dragover</b>: Fired continuously while the dragged element is over a valid drop target. To allow the drop, we have to do `event.preventDefault()`.

<br>

<b style="color:OrangeRed;">dragleave</b>: Fired when the dragged element leaves a valid drop target.

<br>

<b style="color:OrangeRed;">drop</b>: Fired when the dragged element is dropped on a valid drop target.

<br>

<b style="color:OrangeRed;">scroll</b>: Fired when target element container is being scrolled. <span style="color: Chartreuse;">Container element must have overflow property set to `auto` / `scroll` and some defined width.</span>


</div>