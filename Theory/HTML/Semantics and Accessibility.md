<div style="font-size: 17px;background: black;padding: 2rem;">

# Semantic HTML

Semantic HTML involves using HTML elements that convey meaning about the content they enclose, enhancing clarity for both browsers and developers.

- Examples of non-semantic elements: `<div>` and `<span>` - Tells nothing about its content.
- Examples of semantic elements: `<img>`, `<table>`, and `<article>` - Clearly defines its content.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Common Semantic Elements</h3>

- `<header>`: Introductory content (e.g., site logo, navigation).
- `<nav>`: Primary navigation links.
- `<main>`: The dominant content of the page.
- `<article>`: Self-contained content (e.g., blog post, news story).
- `<section>`: Thematic grouping of content (e.g., chapters, tabs).
- `<aside>`: Tangentially related content (e.g., sidebars, pull quotes).
- `<footer>`: Closing content (e.g., copyright, contact info).
- `<time>`: Machine-readable date/time.
- `<figure>`/`<figcaption>`: Media with a caption.
- `<blockquote>`: Long quotations.
- `<em>`: (emphasis) conveys importance
- `<i>`: (italic) is purely stylistic.

<img src="../../Images/HTML_Semantic.png" width="530px" height="400px" style="margin-left: 300px;" />
<br>

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Accessibility Benefits:</h3>

- Screen readers use semantic tags to interpret page structure, improving navigation for users with disabilities.
- Example: `<nav>` is recognized as a navigation landmark, allowing quick access to menus.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">SEO & Maintainability:</h3>

- Search engines prioritize well-structured content, potentially boosting rankings.
- Code becomes more readable and maintainable (e.g., `<article>` is clearer than `<div class="post">`).

Example code:

```html
<body>
  <header>
    <h1></h1>
    <nav>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </nav>
  </header>

  <main>
    <article>
      <header>
        <h2></h2>
        <p><time datetime=""></time> by <a href="#"></a></p>
      </header>
      <section>
        <h3></h3>
        <p></p>
      </section>
      <section>
        <h3></h3>
        <p></p>
        <figure>
          <img src="" alt="" />
          <figcaption></figcaption>
        </figure>
      </section>
      <section>
        <h3></h3>
        <ul>
          <li><code></code></li>
          <li><code></code></li>
          <li><code></code></li>
        </ul>
      </section>
      <footer>
        <p><a href="#"></a></p>
      </footer>
    </article>

    <aside>
      <h3></h3>
      <ul>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
        <li><a href="#"></a></li>
      </ul>
    </aside>
  </main>

  <footer>
    <p></p>
    <address>
      <a href="mailto:"></a>
    </address>
  </footer>
</body>
```

<br>

# Accessibility

Web Accessibility ensures that websites, tools, and technologies are designed and developed so that people with disabilities can perceive, understand, navigate, and interact with them effectively. It encompasses all disabilities affecting web access, including:

- **Visual** (blindness, low vision, color blindness).
- **Auditory** (deafness, hearing impairments).
- **Motor** (limited mobility, tremors).
- **Cognitive** (dyslexia, ADHD, memory impairments).
- **Situational/Temporary** (broken arm, glare on a screen).

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Importance</h3>

- **Ethical Responsibility:** Inclusive design reflects social equity and human rights.
- **Legal Compliance:**
  - **ADA (Americans with Disabilities Act):** Requires accessibility for public entities in the U.S.
  - **WCAG (Web Content Accessibility Guidelines):** Global standard (versions 2.0/2.1, level AA).
  - **Section 508:** U.S. federal agencies must make digital content accessible.
  - **EU Web Accessibility Directive:** Mandates accessibility for public sector sites in Europe.
- **Business Benefits:** Expands audience reach, improves SEO, reduces legal risks, and enhances usability for all users.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Common Accessibility Barriers</h3>

- **Non-Semantic HTML:** Misusing `<div>` instead of `<button>` or `<nav>`.
- **Missing Alt Text:** Images without descriptions exclude visually impaired users.
- **Poor Contrast:** Low contrast between text and background hinders readability.
- **Inaccessible Forms:** Unlabeled fields or unclear error messages.
- **Keyboard Traps:** Users can’t navigate via keyboard (e.g., custom widgets).
- **Auto-Playing Media:** Disrupts screen readers or users with cognitive disabilities.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">Best Practices & Solutions</h3>

- **Semantic HTML:** Use elements like `<header>`, `<nav>`, `<main>`, and ARIA roles (`role="navigation"`) for clarity.
- **Keyboard Navigation:** Ensure all interactive elements (buttons, links) are focusable and operable via keyboard.
- **Alt Text & Captions:**
  - Describe images contextually (e.g., `<img src="chart.png" alt="Sales growth chart: 20% increase in Q4">`).
  - Provide transcripts for audio/video.
- **Color Contrast:** Users with visual impairments, like low vision or color blindness, need text to stand out clearly against its background. The `Web Content Accessibility Guidelines (WCAG)` recommend a contrast ratio of at least `4.5:1` for normal text and `3:1` for large text. Use the `WebAIM Color Contrast Checker` to verify your design.  
- **Responsive Design:** Ensure mobile accessibility (e.g., touch targets ≥ 44x44px).
- **Testing Tools:**
  - **Automated:** Axe, WAVE, Lighthouse.
  - **Manual:** Screen readers (VoiceOver, NVDA), keyboard-only navigation.

<h3 style="border-bottom: 2px solid white; padding-bottom: 2px; display: inline-block;">WAI-ARIA</h3>

ARIA, which stands for Accessible Rich Internet Applications, is a set of attributes you can add to HTML to make web content—especially dynamic or complex interfaces—more accessible to people using assistive technologies like screen readers. It’s part of the Web Accessibility Initiative (WAI) by the World Wide Web Consortium (W3C) and bridges gaps where standard HTML alone isn’t enough to convey meaning or functionality to users with disabilities.

HTML is great for static content—like paragraphs, headings, and buttons—but modern web applications often include interactive elements like modals, tabs, or custom widgets that HTML wasn’t originally designed to describe fully. For example, a `<div>` styled to look like a button doesn’t inherently tell a screen reader it’s clickable, nor does a custom dropdown menu indicate its state (open or closed) without extra help.

ARIA steps in to provide roles, states, and properties that enhance the accessibility of these elements. It acts like a translator, giving assistive technologies the context they need to interpret and announce content accurately to users who can’t see or interact with the page in a conventional way.

- **Roles:** Define what an element is (e.g., a button, dialog, or menu).  
- **States:** Describe how it’s currently behaving (e.g., expanded, checked, disabled).  
- **Properties:** Add extra details (e.g., a label or description).

ARIA attributes are added directly to HTML elements and work alongside native HTML semantics. Assistive technologies, like screen readers (e.g., JAWS, NVDA, or VoiceOver), read these attributes to provide a richer experience. Importantly, ARIA doesn’t affect how the page looks or behaves for sighted users—it’s purely for accessibility.

Here’s a simple example:

```html
<div role="button" tabindex="0" aria-pressed="false">Toggle</div>
```

- `role="button"`: Tells the screen reader this <div> acts as a button.
- `tabindex="0"`: Makes it focusable with a keyboard (since <div> isn’t naturally focusable).
- `aria-pressed="false"`: Indicates it’s a toggle button that’s currently off.

Without ARIA, a screen reader might just say “div” and leave the user confused about its purpose.

**<u>1. ARIA Roles</u>**

Roles define the purpose of an element and how assistive technologies interpret it. They’re like labels that say, `“This is a [thing].”`

- `role="button"`: Declares an element as a button.
- `role="alert"`: Identifies an important alert message.
- `role="dialog"`: Defines a modal dialog box.
- `role="navigation"`: Marks a section as a navigation menu.
- `role="tabpanel"`: Represents a tab panel in a tabbed interface.

**<u>2. ARIA States</u>**

States describe the current condition of an element, often something that changes dynamically. Examples:

- `aria-expanded="true"`: Indicates a collapsible section (e.g., an accordion) is open.
- `aria-checked="true"`: Shows a checkbox or toggle is selected.
- `aria-disabled="true"`: Marks an element as unusable.

**<u>3. ARIA Properties</u>**

- `aria-label="Close"`: Gives a name to an element with no visible text (e.g., an X button).
- `aria-describedby="error-msg"`: Links an element to a description elsewhere on the page (e.g., an error message).

Properties provide additional context or metadata. Examples:

<b style="color:DarkOrange;">Use ARIA only when necessary—semantic HTML should be the first choice.</b>

</div>
