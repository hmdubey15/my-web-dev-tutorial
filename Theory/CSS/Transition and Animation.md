<div style="font-size: 17px;background: black;padding: 2rem;">

# Transition

CSS transitions allow you to animate changes to CSS properties smoothly over a specified duration rather than having them change instantly. They are useful for adding simple animations like hover effects, fading, scaling, or movement.

**BASIC SYNTAX**

```css
element {
  transition: property duration timing-function delay;
}
```

- `property`: The CSS property to animate (e.g., `opacity`, `background-color`, `transform`).
- `duration`: How long the transition lasts (e.g., `0.5s` or `200ms`).
- `timing-function` (OPTIONAL): Defines the speed curve (e.g., `ease`, `linear`(**default**), `ease-in`, `ease-out`, `ease-in-out`).
- `delay` (OPTIONAL): Time before the transition starts.

<u>**EXAMPLE-1: Hover effect**</u>

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  transition: background-color 0.3s ease-in-out;
}

.button:hover {
  background-color: red;
}
```

👉 When the user hovers over `.button`, its background color changes smoothly from `blue` to `red` over `0.3s`.

<u>**Example 2: Multiple Properties**</u>

```css
.box {
  width: 100px;
  height: 100px;
  background-color: green;
  transition: width 0.5s ease, background-color 0.5s linear;
}

.box:hover {
  width: 200px;
  background-color: yellow;
}
```

<u>**Example 3: Using `all`**</u>

```css
.box {
  transition: all 0.4s ease;
}

.box:hover {
  transform: scale(1.2);
  background-color: orange;
  border-radius: 10px;
}
```

👉 `all` applies the transition to all animatable properties.

<u>**Example 4: Transition Delay**</u>

```css
.box {
  transition: transform 0.5s ease-in-out 0.2s;
}

.box:hover {
  transform: rotate(45deg);
}
```

👉 The transition starts `0.2s` after hover and lasts `0.5s`.

<br>

# Animations

CSS animations allow you to create complex, multi-step animations using the `@keyframes` rule. Unlike CSS transitions, which only animate changes between two states, animations can have multiple intermediate steps and can loop infinitely.

**BASIC SYNTAX**

```css
@keyframes animation-name {
  from {
    /* Initial state */
  }
  to {
    /* Final state */
  }
}
```

or using multiple keyframes:

```css
@keyframes animation-name {
  0% { /* Start state */ }
  50% { /* Midway state */ }
  100% { /* End state */ }
}
```

Then, apply it to an element:

```css
.element {
  animation: animation-name duration timing-function delay iteration-count direction fill-mode;
}
```

- `animation-name`:	Name of the `@keyframes` animation.
- `animation-duration`: Time taken for one full cycle (e.g., `2s`, `500ms`).
- `animation-timing-function`: Speed curve (`ease`, `linear`, `ease-in`, `ease-out`, etc.).
- `animation-delay`: Delay before animation starts (`0s` by default).
- `animation-iteration-count`: Number of times the animation runs (`1`, `infinite`, `3`, etc.).
- `animation-direction`: Direction of the animation (`normal`, `reverse`, `alternate`, `alternate-reverse`).
    - `normal`: Runs from `0%` → `100%` (**default**).
    - `reverse`: Runs from `100%` → `0%`.
    - `alternate`: Runs `0%` → `100%`, then `100%` → `0%`.
    - `alternate-reverse`: Runs `100%` → `0%`, then `0%` → `100%`.
- `animation-fill-mode`: Defines the state before and after animation (`none`, `forwards`, `backwards`, `both`).
    - `none`: Element returns to default state after animation ends.
    - `forwards`: Element stays in its final animated state.
    - `backwards`: Element starts in its first keyframe state before animation begins.
    - `both`: Applies both `forwards` and `backwards` effects.
- `animation-play-state`: Controls if the animation is running or paused (`running`, `paused`, `initial`). <span style="color: Coral;">This one is generally meant for controlling animation state with JavaScript.</span>
    - `paused`:	Specifies that the animation is paused	
    - `running`: Default value. Specifies that the animation is running	
    - `initial`: Sets this property to its default value.



<u>**EXAMPLE-1: Spinning Loader**</u>

```css
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.loader {
  width: 50px;
  height: 50px;
  border: 5px solid #ccc;
  border-top: 5px solid blue;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

<u>**EXAMPLE-2: Combining Multiple Animations**</u>

```css
@keyframes move {
  0% { transform: translateX(0); }
  100% { transform: translateX(100px); }
}

@keyframes fade {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.element {
  animation: move 2s ease-in-out infinite, fade 2s linear forwards;
}
```

</div>
