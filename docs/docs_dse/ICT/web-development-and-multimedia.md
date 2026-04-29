---
title: Web Development and Multimedia
date: 2026-04-08T00:00:00.000Z
tags:
  - DSE
  - ICT
categories:
  - DSE
  - ICT
slug: web-development-and-multimedia
---

This document provides in-depth coverage of web development (HTML, CSS, JavaScript), web hosting,
client-side vs server-side processing, multimedia applications, and user interface design. A brief
introduction to HTML, CSS, and JavaScript is available in
[internet-and-data-communications.md](internet-and-data-communications.md).

---

## HTML -- Structure and Semantics

### Document Structure

Every HTML document follows this fundamental structure:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Page description for search engines" />
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Page content here -->
    <script src="script.js"></script>
  </body>
</html>
```

| Component          | Purpose                                                       |
| ------------------ | ------------------------------------------------------------- |
| `<!DOCTYPE html>`  | Declares the document type as HTML5                           |
| `<html lang="en">` | Root element; `lang` specifies the language for accessibility |
| `<head>`           | Metadata, links to external resources, not displayed          |
| `<meta charset>`   | Character encoding (should be UTF-8)                          |
| `<meta viewport>`  | Responsive design settings for mobile devices                 |
| `<title>`          | Browser tab title and search engine result title              |
| `<link>`           | Links to external CSS stylesheets                             |
| `<body>`           | Contains all visible page content                             |
| `<script>`         | Links to or embeds JavaScript code                            |

### Semantic HTML

Semantic elements clearly describe their meaning to both the browser and the developer. Using
semantic HTML improves accessibility, SEO, and code maintainability.

| Semantic Element | Purpose                                          | Non-Semantic Equivalent |
| ---------------- | ------------------------------------------------ | ----------------------- |
| `<header>`       | Introductory content or navigational links       | `<div>`                 |
| `<nav>`          | Navigation links                                 | `<div>`                 |
| `<main>`         | Main content of the page (only one per page)     | `<div>`                 |
| `<article>`      | Self-contained content (blog post, news article) | `<div>`                 |
| `<section>`      | Thematic grouping of content                     | `<div>`                 |
| `<aside>`        | Sidebar, related content                         | `<div>`                 |
| `<footer>`       | Footer information (copyright, links)            | `<div>`                 |
| `<figure>`       | Self-contained content with optional caption     | `<div>`                 |
| `<figcaption>`   | Caption for a `<figure>`                         | `<span>` or ``          |
| `<time>`         | Date/time                                        | `<span>`                |
| `<mark>`         | Highlighted text                                 | `<span>`                |

### HTML Forms

Forms collect user input and submit it to a server for processing.

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="age">Age:</label>
  <input type="number" id="age" name="age" min="1" max="120" />

  <label for="birthday">Birthday:</label>
  <input type="date" id="birthday" name="birthday" />

  <label>Gender:</label>
  <input type="radio" id="male" name="gender" value="male" />
  <label for="male">Male</label>
  <input type="radio" id="female" name="gender" value="female" />
  <label for="female">Female</label>

  <label for="city">City:</label>
  <select id="city" name="city">
    <option value="hong_kong">Hong Kong</option>
    <option value="kowloon">Kowloon</option>
    <option value="nt">New Territories</option>
  </select>

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="50"></textarea>

  <input type="checkbox" id="agree" name="agree" value="yes" />
  <label for="agree">I agree to the terms</label>

  <input type="submit" value="Submit" />
  <input type="reset" value="Reset" />
</form>
```

| Input Type | Purpose                                          | Validation                         |
| ---------- | ------------------------------------------------ | ---------------------------------- |
| `text`     | Single-line text                                 | `maxlength`, `pattern`, `required` |
| `email`    | Email address                                    | Browser validates email format     |
| `password` | Masked text (shows dots)                         | `minlength`, `maxlength`           |
| `number`   | Numeric input                                    | `min`, `max`, `step`               |
| `date`     | Date picker                                      | `min`, `max`                       |
| `radio`    | Single selection from mutually exclusive options | Same `name` groups them            |
| `checkbox` | Multiple selections                              | `checked` attribute                |
| `select`   | Dropdown list                                    | `<option>` elements                |
| `textarea` | Multi-line text                                  | `rows`, `cols`                     |
| `file`     | File upload                                      | `accept` for file types            |
| `hidden`   | Hidden data not visible to user                  | Sent with form submission          |
| `submit`   | Submits the form                                 | Triggers `action` URL              |
| `reset`    | Resets all form fields to defaults               |                                    |

**Form attributes:**

| Attribute     | Description                                                        |
| ------------- | ------------------------------------------------------------------ |
| `action`      | URL where form data is sent                                        |
| `method`      | HTTP method: `GET` (data in URL) or `POST` (data in body)          |
| `enctype`     | How form data is encoded (for file uploads: `multipart/form-data`) |
| `name`        | Name of the form field (used as key when submitted)                |
| `id`          | Unique identifier (used by `<label for>` and JavaScript)           |
| `value`       | Default value of the field                                         |
| `required`    | Field must be filled before submission                             |
| `placeholder` | Hint text shown inside the field before user types                 |
| `autofocus`   | Field receives focus when page loads                               |

### HTML Tables

```html
<table>
  <caption>
    Student Scores
  </caption>
  <thead>
    <tr>
      <th>Name</th>
      <th>Maths</th>
      <th>English</th>
      <th>ICT</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>85</td>
      <td>92</td>
      <td>78</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>72</td>
      <td>65</td>
      <td>88</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Average</td>
      <td>78.5</td>
      <td>78.5</td>
      <td>83</td>
    </tr>
  </tfoot>
</table>
```

| Element     | Purpose                                |
| ----------- | -------------------------------------- |
| `<table>`   | Container for the table                |
| `<caption>` | Table title/description                |
| `<thead>`   | Table header section                   |
| `<tbody>`   | Table body (main data)                 |
| `<tfoot>`   | Table footer section                   |
| `<tr>`      | Table row                              |
| `<th>`      | Header cell (bold, centred by default) |
| `<td>`      | Data cell                              |

---

## CSS -- Styling and Layout

### Selectors

CSS selectors determine which HTML elements are targeted by style rules.

| Selector Type        | Syntax          | Description                        | Specificity |
| -------------------- | --------------- | ---------------------------------- | ----------- |
| **Universal**        | `*`             | Selects all elements               | 0-0-0       |
| **Element**          | `p`             | All `` elements                    | 0-0-1       |
| **Class**            | `.highlight`    | Elements with `class="highlight"`  | 0-1-0       |
| **ID**               | `#header`       | Element with `id="header"`         | 0-1-0-0     |
| **Descendant**       | `div p`         | ``inside any`<div>`                | Additive    |
| **Child**            | `div > p`       | ``that is a direct child of`<div>` | Additive    |
| **Adjacent sibling** | `h1 + p`        | ``immediately after`<h1>`          | Additive    |
| **Attribute**        | `[type="text"]` | Elements with matching attribute   | 0-1-0       |
| **Pseudo-class**     | `a:hover`       | Element in a specific state        | 0-1-0       |
| **Pseudo-element**   | `p::first-line` | Specific part of an element        | 0-0-1       |

**Specificity ordering (low to high):** Universal &lt; Element &lt; Class/Attribute/Pseudo-class
&lt; ID &lt; Inline style &lt; `!important`

### CSS Properties -- Core Reference

#### Text and Font Properties

| Property          | Description                       | Example                                |
| ----------------- | --------------------------------- | -------------------------------------- |
| `font-family`     | Sets the typeface                 | `Arial, sans-serif`                    |
| `font-size`       | Sets text size                    | `16px`, `1.2em`, `120%`                |
| `font-weight`     | Sets text thickness               | `normal`, `bold`, `700`                |
| `font-style`      | Sets italic/oblique               | `normal`, `italic`                     |
| `text-align`      | Horizontal alignment              | `left`, `center`, `right`              |
| `text-decoration` | Underline, overline, line-through | `underline`, `none`                    |
| `line-height`     | Space between lines               | `1.5`, `24px`                          |
| `color`           | Text colour                       | `#333333`, `rgb(51,51,51)`             |
| `letter-spacing`  | Space between characters          | `1px`, `0.05em`                        |
| `text-transform`  | Capitalisation                    | `uppercase`, `lowercase`, `capitalize` |

#### Box Model Properties

The CSS box model describes how every HTML element is rendered as a rectangular box.

```
+--------------------------------------------------+
|                   margin                          |
|  +--------------------------------------------+  |
|  |                  border                      |  |
|  |  +--------------------------------------+  |  |
|  |  |              padding                 |  |  |
|  |  |  +--------------------------------+  |  |  |
|  |  |  |          content                |  |  |  |
|  |  |  +--------------------------------+  |  |  |
|  |  +--------------------------------------+  |  |
|  +--------------------------------------------+  |
+--------------------------------------------------+
```

| Property                 | Description                                     |
| ------------------------ | ----------------------------------------------- |
| `width`, `height`        | Dimensions of the content area                  |
| `padding`                | Space between content and border                |
| `border`                 | Border around the padding                       |
| `margin`                 | Space outside the border                        |
| `box-sizing: border-box` | Includes padding and border in the width/height |

**Total element width** (default `content-box`):

$$
\mathrm&lbrace;Total Width&rbrace; = \mathrm&lbrace;margin-left&rbrace; + \mathrm&lbrace;border-left&rbrace; + \mathrm&lbrace;padding-left&rbrace; + \mathrm&lbrace;width&rbrace; + \mathrm&lbrace;padding-right&rbrace; + \mathrm&lbrace;border-right&rbrace; + \mathrm&lbrace;margin-right&rbrace;
$$

With `box-sizing: border-box`, the `width` property includes content, padding, and border:

$$
\mathrm&lbrace;Total Width&rbrace; = \mathrm&lbrace;margin-left&rbrace; + \mathrm&lbrace;width&rbrace; + \mathrm&lbrace;margin-right&rbrace;
$$

#### Layout Properties

| Property   | Description                                               |
| ---------- | --------------------------------------------------------- |
| `display`  | `block`, `inline`, `inline-block`, `flex`, `grid`, `none` |
| `position` | `static`, `relative`, `absolute`, `fixed`, `sticky`       |
| `float`    | Left/right floating (legacy layout method)                |
| `clear`    | Clear float (`left`, `right`, `both`)                     |
| `overflow` | `visible`, `hidden`, `scroll`, `auto`                     |
| `z-index`  | Stacking order for positioned elements                    |

**Display types:**

| Display Value  | Behaviour                                                           |
| -------------- | ------------------------------------------------------------------- |
| `block`        | Takes full width; starts on new line (e.g., `<div>`, ``)            |
| `inline`       | Takes only content width; flows within text (e.g., `<span>`, `<a>`) |
| `inline-block` | Inline flow but respects width/height                               |
| `flex`         | Flexbox container for flexible 1D layouts                           |
| `grid`         | CSS Grid container for 2D layouts                                   |
| `none`         | Element is hidden and removed from layout flow                      |

### Flexbox Layout

Flexbox is a one-dimensional layout system for arranging items in rows or columns.

```css
.container {
  display: flex;
  flex-direction: row; /* row | row-reverse | column | column-reverse */
  justify-content: center; /* main axis alignment */
  align-items: center; /* cross axis alignment */
  gap: 10px; /* space between items */
  flex-wrap: wrap; /* allow wrapping */
}

.item {
  flex: 1; /* grow equally */
  flex-basis: 200px; /* ideal size */
}
```

| Property          | Values                                                                              | Description                     |
| ----------------- | ----------------------------------------------------------------------------------- | ------------------------------- |
| `flex-direction`  | `row`, `column`, `row-reverse`, `column-reverse`                                    | Direction of main axis          |
| `justify-content` | `flex-start`, `center`, `flex-end`, `space-between`, `space-around`, `space-evenly` | Alignment on main axis          |
| `align-items`     | `stretch`, `flex-start`, `center`, `flex-end`, `baseline`                           | Alignment on cross axis         |
| `flex-wrap`       | `nowrap`, `wrap`, `wrap-reverse`                                                    | Whether items wrap              |
| `gap`             | Length value                                                                        | Space between flex items        |
| `flex-grow`       | Number                                                                              | How much the item grows         |
| `flex-shrink`     | Number                                                                              | How much the item shrinks       |
| `flex-basis`      | Length value                                                                        | Initial size before grow/shrink |

### CSS Grid Layout

CSS Grid is a two-dimensional layout system for creating complex page layouts.

```css
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;
  grid-template-rows: auto 1fr auto;
  gap: 20px;
}

.header {
  grid-column: 1 / -1;
} /* spans all columns */
.sidebar {
  grid-column: 1;
}
.main {
  grid-column: 2 / 4;
} /* spans columns 2 and 3 */
.footer {
  grid-column: 1 / -1;
}
```

| Property                | Description                        |
| ----------------------- | ---------------------------------- |
| `grid-template-columns` | Defines column widths              |
| `grid-template-rows`    | Defines row heights                |
| `grid-column`           | Column start and end positions     |
| `grid-row`              | Row start and end positions        |
| `gap`                   | Space between rows and columns     |
| `grid-area`             | Shorthand for row/column start/end |

### Responsive Design

Responsive design ensures a website displays well on all screen sizes (desktop, tablet, mobile).

**Media queries** apply CSS rules conditionally based on device characteristics.

```css
/* Mobile first (default) */
.container {
  width: 100%;
  padding: 10px;
}

/* Tablet and above */
@media (min-width: 768px) {
  .container {
    width: 750px;
    padding: 20px;
  }
}

/* Desktop and above */
@media (min-width: 1024px) {
  .container {
    width: 960px;
    margin: 0 auto;
  }
}
```

**Responsive units:**

| Unit   | Description                                   |
| ------ | --------------------------------------------- |
| `px`   | Absolute pixels                               |
| `%`    | Percentage of parent element                  |
| `em`   | Relative to the font-size of the element      |
| `rem`  | Relative to the font-size of the root element |
| `vw`   | Percentage of viewport width                  |
| `vh`   | Percentage of viewport height                 |
| `vmin` | Percentage of the smaller viewport dimension  |
| `vmax` | Percentage of the larger viewport dimension   |

### The Three Ways to Apply CSS

| Method             | Syntax                                       | Specificity | Reusability |
| ------------------ | -------------------------------------------- | ----------- | ----------- |
| **Inline style**   | `<p style="color: red;">`                    | Highest     | None        |
| **Internal style** | `<style>` block in `<head>`                  | Medium      | Page-level  |
| **External style** | `<link rel="stylesheet" href="style.css" />` | Medium      | Site-wide   |

External stylesheets are the recommended approach for maintainability, caching, and consistency.

---

## JavaScript -- Programming for the Web

### Variables

```javascript
var oldStyle = 'function-scoped'; // Legacy, avoid in modern code
let counter = 0; // Block-scoped, reassignable
const PI = 3.14159; // Block-scoped, cannot be reassigned
```

| Keyword | Scope    | Reassignable | Hoisted | Use case                    |
| ------- | -------- | ------------ | ------- | --------------------------- |
| `var`   | Function | Yes          | Yes     | Legacy code (avoid)         |
| `let`   | Block    | Yes          | No      | Variables that change       |
| `const` | Block    | No           | No      | Constants, fixed references |

### Data Types

| Type        | Description                                | Examples                               |
| ----------- | ------------------------------------------ | -------------------------------------- |
| `Number`    | All numbers (integer and floating point)   | `42`, `3.14`, `-7`, `Infinity`         |
| `String`    | Text in single, double, or backtick quotes | `'hello'`, `"world"`, `` `template` `` |
| `Boolean`   | Logical values                             | `true`, `false`                        |
| `null`      | Intentional absence of value               | `null`                                 |
| `undefined` | Variable declared but not assigned         | `undefined`                            |
| `Object`    | Key-value pairs                            | `{ name: "Alice", age: 20 }`           |
| `Array`     | Ordered collection                         | `[1, 2, 3, "four"]`                    |

### Functions

```javascript
// Function declaration
function add(a, b) {
  return a + b;
}

// Function expression
var multiply = function (a, b) {
  return a * b;
};

// Arrow function (ES6)
var divide = (a, b) => a / b;

// Function with default parameter
function greet(name, greeting) {
  greeting = greeting || 'Hello';
  return greeting + ', ' + name + '!';
}
```

### Control Structures

```javascript
// If-else
var score = 75;
if (score >= 90) {
  grade = 'A';
} else if (score >= 70) {
  grade = 'B';
} else {
  grade = 'C';
}

// For loop
for (var i = 0; i < 10; i++) {
  console.log(i);
}

// While loop
var count = 5;
while (count > 0) {
  console.log(count);
  count--;
}
```

### DOM Manipulation

The Document Object Model (DOM) represents the HTML document as a tree of objects. JavaScript can
traverse and modify this tree to change page content, structure, and style dynamically.

**Selecting elements:**

```javascript
var element = document.getElementById('myId');
var elements = document.getElementsByClassName('myClass');
var elements = document.getElementsByTagName('p');
var element = document.querySelector('.myClass'); // first match
var elements = document.querySelectorAll('div.item'); // all matches
```

**Modifying content and style:**

```javascript
// Change text content
document.getElementById('demo').textContent = 'New text';
document.getElementById('demo').innerHTML = '<strong>Bold text</strong>';

// Change style
document.getElementById('demo').style.color = 'red';
document.getElementById('demo').style.fontSize = '20px';

// Add/remove CSS classes
document.getElementById('demo').classList.add('highlight');
document.getElementById('demo').classList.remove('highlight');
document.getElementById('demo').classList.toggle('active');

// Create and append elements
var newParagraph = document.createElement('p');
newParagraph.textContent = 'This is a new paragraph.';
document.getElementById('container').appendChild(newParagraph);
```

### Event Handling

Events are actions or occurrences (click, hover, key press, form submission) that JavaScript can
respond to.

```javascript
// Using addEventListener (recommended)
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});

// Event object
document.getElementById('myInput').addEventListener('keyup', function (event) {
  console.log('Key pressed: ' + event.key);
});

// Form submission
document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault(); // prevent page reload
  var name = document.getElementById('nameInput').value;
  if (name === '') {
    alert('Name is required!');
  } else {
    alert('Form submitted: ' + name);
  }
});
```

| Common Events | Trigger                           |
| ------------- | --------------------------------- |
| `click`       | Mouse click on an element         |
| `dblclick`    | Double click                      |
| `mouseover`   | Mouse enters the element          |
| `mouseout`    | Mouse leaves the element          |
| `keydown`     | A key is pressed down             |
| `keyup`       | A key is released                 |
| `submit`      | A form is submitted               |
| `change`      | Form field value changes          |
| `load`        | Page or resource finishes loading |
| `focus`       | Element receives focus            |
| `blur`        | Element loses focus               |

### Arrays

```javascript
var scores = [85, 92, 78, 95, 88];

// Access
console.log(scores[0]); // 85
console.log(scores.length); // 5

// Modify
scores[1] = 96;

// Iterate
for (var i = 0; i < scores.length; i++) {
  console.log(scores[i]);
}

// Common array methods
scores.push(100); // add to end
scores.pop(); // remove from end
scores.unshift(70); // add to beginning
scores.shift(); // remove from beginning
scores.splice(2, 1); // remove 1 element at index 2

// Searching
var index = scores.indexOf(95); // returns index or -1

// Sorting
scores.sort(function (a, b) {
  return a - b;
}); // ascending numeric sort
```

---

## Web Hosting and Domain Names

### Web Hosting Types

| Hosting Type         | Description                                               | Cost     | Performance | Control      | Suitable For                 |
| -------------------- | --------------------------------------------------------- | -------- | ----------- | ------------ | ---------------------------- |
| **Shared hosting**   | Multiple websites share one server's resources            | Low      | Low-Medium  | Limited      | Small sites, beginners       |
| **VPS**              | Virtual Private Server -- partitioned dedicated resources | Medium   | Medium      | High         | Growing sites, custom config |
| **Dedicated server** | Entire physical server for one client                     | High     | High        | Full         | High-traffic, enterprise     |
| **Cloud hosting**    | Resources distributed across multiple servers (scalable)  | Variable | Scalable    | Medium-High  | Variable traffic, apps       |
| **Free hosting**     | Limited resources, often with advertisements              | Free     | Low         | Very limited | Personal projects, testing   |

### Domain Name Registration Process

1. **Choose a domain name:** Select a name that is memorable, relevant, and available.
2. **Check availability:** Use a domain registrar's search tool to verify the name is not already
   registered.
3. **Choose a TLD:** Select the appropriate top-level domain (`.com`, `.org`, `.edu`, `.hk`, etc.).
4. **Register with a registrar:** Use an accredited registrar (e.g., GoDaddy, Namecheap, HKDNR for
   `.hk` domains).
5. **Provide registrant information:** Name, contact details, administrative and technical contacts.
6. **Pay registration fee:** Annual fee varies by TLD and registrar.
7. **Configure DNS records:** Point the domain to your web hosting server by setting A records (for
   IPv4) or CNAME records at your DNS provider.
8. **Wait for propagation:** DNS changes can take up to 48 hours to propagate globally (typically
   much less).

### Uploading Files to a Web Server

| Method               | Description                                                                           |
| -------------------- | ------------------------------------------------------------------------------------- |
| **FTP/SFTP**         | File Transfer Protocol (FTP) or Secure FTP (SFTP) using a client like FileZilla       |
| **Web-based upload** | Control panel provided by the hosting company (cPanel, Plesk)                         |
| **SSH/SCP**          | Secure copy via command line                                                          |
| **Git deployment**   | Push to a repository that triggers automatic deployment (e.g., GitHub Pages, Netlify) |
| **CI/CD**            | Continuous Integration/Continuous Deployment pipelines                                |

---

## Client-Side vs Server-Side Processing

### Comparison

| Aspect                 | Client-Side                              | Server-Side                               |
| ---------------------- | ---------------------------------------- | ----------------------------------------- |
| **Execution location** | User's browser                           | Web server                                |
| **Languages**          | HTML, CSS, JavaScript                    | PHP, Python, Ruby, Java, C#, Node.js      |
| **Response speed**     | Immediate (no server round-trip)         | Requires network request/response cycle   |
| **Server load**        | None (processing on user's device)       | Server handles all processing             |
| **Security**           | Code is visible to the user (not secure) | Code runs on server, hidden from user     |
| **Data access**        | Cannot directly access databases         | Can connect to databases and file systems |
| **Offline capability** | Can work offline (if cached)             | Requires internet connection              |
| **Browser dependency** | Depends on browser compatibility         | Independent of browser                    |

### When to Use Each

| Scenario                                   | Client-Side or Server-Side | Reason                                               |
| ------------------------------------------ | -------------------------- | ---------------------------------------------------- |
| Form input validation (format checking)    | Client-side                | Immediate feedback, reduces server load              |
| Sensitive data validation (password check) | Server-side                | Database access needed; client-side is insecure      |
| User interface animations                  | Client-side                | JavaScript/CSS in browser                            |
| Database queries                           | Server-side                | Direct database access required                      |
| Search engine indexing                     | Server-side                | Search engines need server-rendered content          |
| Image manipulation (resize, filter)        | Client-side (preview)      | For immediate feedback; final processing server-side |
| Payment processing                         | Server-side                | Security: API keys and transaction logic hidden      |

### Server-Side Processing Example

When a user submits a login form:

1. **Client-side:** JavaScript validates that fields are not empty and email format is correct.
2. **Form data** is sent to the server via HTTP POST.
3. **Server-side:** PHP/Python code checks credentials against the database.
4. **Server** sends back a response (success: redirect to dashboard; failure: error message).

---

## Multimedia Applications

### Image Editing

| Feature                 | Description                                                   | Purpose                               |
| ----------------------- | ------------------------------------------------------------- | ------------------------------------- |
| **Cropping**            | Remove outer parts of an image                                | Focus on subject, remove distractions |
| **Resizing**            | Change image dimensions                                       | Fit specific requirements             |
| **Colour adjustment**   | Brightness, contrast, saturation, hue                         | Enhance appearance                    |
| **Layers**              | Stack multiple elements on separate editable layers           | Non-destructive editing               |
| **Selection tools**     | Select specific areas (lasso, magic wand, marquee)            | Edit parts of an image                |
| **Filters and effects** | Apply artistic or corrective effects (blur, sharpen, distort) | Creative and corrective editing       |
| **Text tool**           | Add text overlays                                             | Captions, watermarks, titles          |
| **Clone/stamp tool**    | Copy pixels from one area to another                          | Remove blemishes, duplicate elements  |
| **Colour modes**        | RGB for screen, CMYK for print                                | Output-specific preparation           |

### Video Editing

| Feature                  | Description                                                | Purpose                            |
| ------------------------ | ---------------------------------------------------------- | ---------------------------------- |
| **Timeline editing**     | Arrange clips in sequential order on a timeline            | Assemble the video narrative       |
| **Cutting and trimming** | Remove unwanted segments from clips                        | Tighten the edit                   |
| **Transitions**          | Effects between clips (dissolve, wipe, fade)               | Smooth scene changes               |
| **Audio editing**        | Adjust volume, add background music, voiceover             | Balance audio levels               |
| **Text overlays**        | Titles, subtitles, lower thirds                            | Convey information                 |
| **Colour grading**       | Adjust colour, contrast, and tone                          | Consistent visual style            |
| **Rendering/export**     | Convert the edited project into a distributable video file | Final output in appropriate format |

**Common video formats:**

| Format | Container | Video Codec    | Audio Codec | Typical Use               |
| ------ | --------- | -------------- | ----------- | ------------------------- |
| MP4    | MP4       | H.264 / H.265  | AAC         | Web, streaming, mobile    |
| AVI    | AVI       | Various        | Various     | Legacy Windows            |
| MKV    | MKV       | H.264 / VP9    | AAC / FLAC  | High quality, flexibility |
| MOV    | MOV       | H.264 / ProRes | AAC         | Apple ecosystem           |
| WebM   | WebM      | VP8 / VP9      | Vorbis      | Web (open source)         |

### Animation

| Animation Type     | Description                                                 | Tools                 |
| ------------------ | ----------------------------------------------------------- | --------------------- |
| **Frame-by-frame** | Individual frames drawn/edited sequentially                 | Flash, Toon Boom      |
| **Tweening**       | Software generates intermediate frames between keyframes    | Flash, After Effects  |
| **CSS animation**  | Animated using CSS `@keyframes` and `transition` properties | Text editor           |
| **JavaScript**     | Animated via DOM manipulation and requestAnimationFrame     | Text editor           |
| **SVG animation**  | Animated using SMIL or CSS                                  | Text editor, Inkscape |
| **3D animation**   | Three-dimensional animated models                           | Blender, Maya         |

---

## User Interface Design Principles

### Nielsen's 10 Usability Heuristics

These heuristics, developed by Jakob Nielsen, are widely used principles for evaluating user
interface design.

| Heuristic | Principle                                                   | Description                                                                                                                                                      |
| --------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1         | **Visibility of system status**                             | The system should always inform users about what is going on through appropriate feedback within reasonable time                                                 |
| 2         | **Match between system and the real world**                 | The system should speak the users' language with familiar words, phrases, and concepts rather than system-oriented terms                                         |
| 3         | **User control and freedom**                                | Users need a clearly marked "emergency exit" to leave the unwanted state without having to go through an extended dialogue (e.g., Undo, Redo)                    |
| 4         | **Consistency and standards**                               | Users should not have to wonder whether different words, situations, or actions mean the same thing; follow platform conventions                                 |
| 5         | **Error prevention**                                        | Careful design prevents problems from occurring in the first place; prefer error prevention over error messages                                                  |
| 6         | **Recognition rather than recall**                          | Minimise the user's memory load by making objects, actions, and options visible; the user should not have to remember information from one part to another       |
| 7         | **Flexibility and efficiency of use**                       | Accelerators (shortcuts, expert modes) speed up interaction for experienced users while remaining accessible to novices                                          |
| 8         | **Aesthetic and minimalist design**                         | Dialogues should not contain irrelevant or rarely needed information; every extra unit of information competes with relevant information                         |
| 9         | **Help users recognise, diagnose, and recover from errors** | Error messages should be expressed in plain language, precisely indicate the problem, and constructively suggest a solution                                      |
| 10        | **Help and documentation**                                  | Although better if the system can be used without documentation, it may be necessary to provide help and documentation searchable and focused on the user's task |

### Key Design Principles

| Principle         | Description                                                          | Application Example                      |
| ----------------- | -------------------------------------------------------------------- | ---------------------------------------- |
| **Consistency**   | Same visual style, terminology, and behaviour throughout             | Same button style on all pages           |
| **Feedback**      | Acknowledge user actions with visual, auditory, or haptic cues       | Button colour change on hover/click      |
| **Affordance**    | Design elements should suggest their functionality                   | A raised button looks clickable          |
| **Visibility**    | Important elements should be visible and not hidden                  | Clear navigation menu                    |
| **Accessibility** | Design for users with disabilities (colour blindness, motor, visual) | Alt text for images, keyboard navigation |
| **Hierarchy**     | Organise information by importance using size, colour, position      | Large heading, smaller body text         |
| **Simplicity**    | Keep the interface clean and uncluttered                             | Minimal elements, clear calls to action  |
| **Navigation**    | Users should always know where they are and how to get elsewhere     | Breadcrumbs, navigation menu, sitemap    |

### Colour and Accessibility

| Consideration            | Description                                                                              |
| ------------------------ | ---------------------------------------------------------------------------------------- |
| **Colour contrast**      | Text and background must have sufficient contrast ratio (WCAG AA: 4.5:1 for normal text) |
| **Colour blindness**     | Do not rely solely on colour to convey information; use labels/icons additionally        |
| **Red-green deficiency** | Most common form of colour blindness (affects ~8% of males)                              |
| **High contrast mode**   | Support system-level high contrast settings                                              |

### Mobile Interface Considerations

| Consideration       | Description                                               |
| ------------------- | --------------------------------------------------------- |
| **Touch targets**   | Minimum 44x44 pixels for tap targets (Apple HIG)          |
| **Screen size**     | Design for variable screen sizes; use responsive layout   |
| **Orientation**     | Support both portrait and landscape modes                 |
| **Gesture support** | Support swipe, pinch, and long-press where appropriate    |
| **Performance**     | Minimise data transfer and processing for mobile networks |

---

## Common Pitfalls

1. **Forgetting the DOCTYPE:** Without `<!DOCTYPE html>`, browsers render in quirks mode, which can
   cause inconsistent layout across browsers. Always include it as the first line.

2. **Block vs inline elements:** Block elements (like `<div>`,
   ``) take full width and start on a new line. Inline elements (like `<span>`, `<a>`) take only
   content width and flow within text. You cannot set width/height on inline elements without
   changing their display type.

3. **CSS specificity conflicts:** When multiple rules target the same element, the most specific
   rule wins. `!important` overrides everything but should be used sparingly. Understand the
   specificity hierarchy: inline &gt; ID &gt; class &gt; element.

4. **Box model confusion:** By default, `width` and `height` apply only to the content area, not
   including padding and border. Use `box-sizing: border-box` to include padding and border in the
   specified dimensions.

5. **JavaScript in the wrong place:** If a `<script>` in the `<head>` references DOM elements that
   have not yet loaded, it will fail. Either place scripts at the end of `<body>` or use the `defer`
   attribute.

6. **Event listener attachment before element exists:** If you try to attach an event listener to an
   element that has not been rendered yet, the listener will not be attached. Wrap code in
   `DOMContentLoaded` event or place the script after the HTML element.

7. **Client-side validation is not security:** Client-side validation improves user experience but
   can be bypassed. Always validate on the server side for security-critical operations (passwords,
   payment, data integrity).

8. **Ignoring accessibility:** Missing `alt` text on images, poor colour contrast, and lack of
   keyboard navigation exclude users with disabilities and may violate accessibility legislation.

9. **Responsive design afterthought:** Designing for desktop first and then trying to make it
   responsive is harder than designing mobile-first. Use media queries to progressively enhance
   layouts for larger screens.

10. **Overusing animations:** Excessive animations distract users, slow down perceived performance,
    and can cause motion sickness for some users. Use animations purposefully and respect the
    `prefers-reduced-motion` media query.

---

## Practice Problems

<details>
<summary>Question 1: HTML and Forms</summary>

(a) Write HTML code for a registration form with the following fields: username (text, required),
email (email, required), password (password, required, minimum 8 characters), and a submit button.

(b) Explain the difference between the `GET` and `POST` form methods.

(c) What is the purpose of the `<label>` element, and why is it important?

Answer:

(a)

```html
<form action="/register" method="POST">
  <label for="username">Username:</label>
  <input type="text" id="username" name="username" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="password">Password:</label>
  <input type="password" id="password" name="password" minlength="8" required />

  <input type="submit" value="Register" />
</form>
```

(b) `GET` sends form data as URL parameters (appended to the `action` URL after `?`). It is visible
in the browser address bar, has a length limit (approximately 2048 characters), and should be used
for idempotent requests (search, filter). `POST` sends form data in the HTTP request body, is not
visible in the URL, has no practical length limit, and should be used for data that changes state on
the server (login, registration, payment).

(c) The `<label>` element associates a text description with a form control via the `for` attribute
(matching the input's `id`). It is important because: (1) clicking the label focuses the associated
input, increasing the clickable area for mouse/touch users. (2) Screen readers announce the label
text when the input receives focus, improving accessibility for visually impaired users. (3) It
creates a semantic association between the description and the input field.

</details>

<details>
<summary>Question 2: CSS Layout</summary>

(a) Write CSS to create a flexbox layout with a sidebar (250px wide) on the left and a main content
area that fills the remaining space.

(b) Write a media query that changes the layout to a single column (sidebar on top, content below)
when the screen width is less than 768 pixels.

(c) Explain what `box-sizing: border-box` does and why it is commonly recommended.

Answer:

(a)

```css
.container {
  display: flex;
}

.sidebar {
  width: 250px;
  flex-shrink: 0;
}

.main-content {
  flex: 1;
}
```

(b)

```css
@media (max-width: 767px) {
  .container {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
  }
}
```

(c) `box-sizing: border-box` makes the `width` and `height` properties include the content area,
padding, and border. Without it (the default `content-box`), `width` applies only to the content,
and padding and border are added on top, making the total element wider than specified. This
commonly causes layout issues when elements exceed their container. With `border-box`, if you set
`width: 250px`, the total rendered width including padding and border will be exactly 250px, making
layout calculations predictable. Many developers apply `* { box-sizing: border-box; }` globally.

</details>

<details>
<summary>Question 3: JavaScript DOM and Events</summary>

(a) Write JavaScript code that: (i) finds an element with id `counter`, (ii) adds a click event
listener that increments a counter variable and updates the element's text content to show the
current count.

(b) Write JavaScript to validate a form with id `loginForm`. If the password field (id `pass`) has
fewer than 8 characters, prevent form submission and display an alert.

(c) Explain the difference between `textContent` and `innerHTML`.

Answer:

(a)

```javascript
var count = 0;
var counterElement = document.getElementById('counter');

counterElement.addEventListener('click', function () {
  count++;
  counterElement.textContent = 'Count: ' + count;
});
```

(b)

```javascript
document.getElementById('loginForm').addEventListener('submit', function (event) {
  var password = document.getElementById('pass').value;
  if (password.length < 8) {
    event.preventDefault();
    alert('Password must be at least 8 characters long.');
  }
});
```

(c) `textContent` sets or returns the plain text content of an element. It does not parse HTML tags
-- any HTML tags in the string are treated as literal text. `innerHTML` sets or returns the HTML
content of an element, including any child elements. HTML tags in the string are parsed and rendered
as DOM elements. `textContent` is safer (no XSS risk) and faster. `innerHTML` is needed when you
intentionally want to insert HTML elements.

</details>

<details>
<summary>Question 4: Client-Side vs Server-Side</summary>

An e-commerce website needs to implement the following features. For each, state whether the
processing should be client-side, server-side, or both, and justify your answer.

(a) Displaying a product image gallery with thumbnail navigation.

(b) Checking whether a credit card number has the correct format (16 digits, valid Luhn check).

(c) Processing the payment and deducting the amount from the customer's account.

(d) Showing a "items in cart" counter that updates when the user adds a product.

(e) Searching the product database for items matching a search query.

Answer:

(a) **Client-side.** Image gallery navigation (switching between images, zoom, pan) requires
immediate responsiveness and does not need server involvement. JavaScript handles this in the
browser for the best user experience.

(b) **Both.** Client-side validation provides immediate feedback (format check, Luhn algorithm)
before the form is submitted, improving UX. Server-side validation is essential for security --
client-side checks can be bypassed, and the server must never trust client data.

(c) **Server-side.** Payment processing involves accessing the payment gateway API, verifying
account balances, and modifying financial records. This must happen on the server for security (API
keys must not be exposed to the client) and reliability (client-side processing would be inherently
insecure and unreliable).

(d) **Client-side.** Updating the cart counter is a UI operation that should happen instantly when
the user clicks "Add to cart." JavaScript can update the DOM without a server round-trip. The actual
cart data should be synced with the server (via an AJAX request), but the visual update is
client-side.

(e) **Server-side.** Searching a database requires server-side processing (SQL query). The client
cannot directly access the database. The client sends the search query, and the server returns the
results. Client-side filtering (narrowing already-loaded results) could supplement this.

</details>

<details>
<summary>Question 5: UI Design Evaluation</summary>

A school's library website has the following characteristics:

- The search bar is located at the bottom of the page.
- The navigation menu uses only icons with no text labels.
- Error messages say "Error 404" with no additional explanation.
- The page uses light grey text on a white background.
- Clicking "Back" after submitting a search shows a warning about resubmitting the form.

Evaluate each characteristic against usability principles and suggest improvements.

Answer:

**Search bar at bottom:** Violates the visibility principle. Users expect search at the top of the
page (standard convention). Move the search bar to the header area where it is immediately visible.

**Icon-only navigation:** Violates the recognition rather than recall and accessibility principles.
Icons alone are ambiguous -- users must guess what each icon means. Text labels provide clarity and
help screen readers. Add text labels below or beside each icon.

**"Error 404" messages:** Violates the "help users recognise, diagnose, and recover from errors"
heuristic. Technical error codes are meaningless to most users. Replace with plain language: "The
page you requested could not be found. Here are some suggestions..." with links to common pages.

**Light grey text on white background:** Violates visibility and accessibility principles. The
contrast ratio is insufficient, making text hard to read, especially for users with visual
impairments. Use dark text (e.g., `#333333`) on a white background to meet WCAG AA contrast
requirements (4.5:1).

**Form resubmission warning:** Violates user control and freedom. After form submission, the browser
shows a warning about resubmission when the user navigates back. This indicates the site uses POST
without the Post/Redirect/Get (PRG) pattern. Fix by redirecting (HTTP 302/303) to a results page
after POST processing, so the Back button returns to the form, not the POST request.

</details>
