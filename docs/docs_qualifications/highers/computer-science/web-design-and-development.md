---
title: Web Design and Development
description:
  Web Design and Development — Higher Web Design; How the Web Works; HTML
  (HyperText Markup Language); CSS (Cascading Style Sheets).
date: 2026-04-14
tags:
  - Computer Science
  - Highers
categories:
  - Computer Science
slug: web-design-and-development
---

# Web Design and Development

## Higher Web Design

### How the Web Works

**Client-Server Model:**

- **Client:** A web browser (Chrome, Firefox, Safari) that sends requests and displays responses
- **Server:** A computer that stores web pages and responds to client requests

**HTTP/HTTPS:**

- **HTTP** (Hypertext Transfer Protocol): Protocol for transferring web pages
- **HTTPS**: Secure version using TLS/SSL encryption
- Request methods: GET (retrieve data), POST (submit data), PUT (update data), DELETE (remove data)

**DNS (Domain Name System):** Translates domain names (e.g., www.example.com) to IP addresses (e.g.,
93.184.216.34).

**DNS resolution steps:**

1. Browser checks its own cache
2. Operating system checks its DNS cache
3. Query sent to the recursive DNS resolver (ISP)
4. Root name server returns TLD server (e.g., .com)
5. TLD server returns authoritative name server
6. Authoritative server returns the IP address
7. Result is cached at each level

**URL structure:**

```
https://www.example.com:443/path/page.html?query=value#section
  |         |              |   |         |              |        |
 scheme   domain        port  path     file          query   fragment
```

### HTML (HyperText Markup Language)

HTML defines the structure and content of web pages using **elements** (tags).

**Document structure:**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Page Title</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <header>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <h1>Welcome</h1>
      This is a paragraph of text.
      <img src="image.jpg" alt="Description" width="300" />
      <a href="https://example.com">External link</a>
    </main>
    <footer>
      &copy; 2026 Example
    </footer>
  </body>
</html>
```

**Common HTML elements:**

| Element                              | Purpose                    |
| ------------------------------------ | -------------------------- |
| `h1` - `h6`                          | Headings                   |
| `p`                                  | Paragraph                  |
| `a`                                  | Hyperlink                  |
| `img`                                | Image                      |
| `ul`, `ol`, `li`                     | Lists                      |
| `table`, `tr`, `td`, `th`            | Tables                     |
| `form`, `input`, `button`            | Forms                      |
| `div`                                | Generic container (block)  |
| `span`                               | Generic container (inline) |
| `section`, `article`, `aside`, `nav` | Semantic elements          |

**HTML table example:**

```html
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Age</th>
      <th>Grade</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Alice</td>
      <td>17</td>
      <td>A</td>
    </tr>
    <tr>
      <td>Bob</td>
      <td>16</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
```

**Forms:**

```html
<form action="/submit" method="POST">
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" required />

  <label for="email">Email:</label>
  <input type="email" id="email" name="email" required />

  <label for="message">Message:</label>
  <textarea id="message" name="message" rows="4" cols="40"></textarea>

  <button type="submit">Send</button>
</form>
```

**HTML5 input types:**

| Type       | Purpose                     | Validation               |
| ---------- | --------------------------- | ------------------------ |
| `text`     | Plain text                  | None                     |
| `email`    | Email address               | Checks for @ and domain  |
| `number`   | Numeric input               | Only digits and decimals |
| `date`     | Date picker                 | Calendar format          |
| `password` | Password (masked)           | None                     |
| `url`      | Web URL                     | Checks URL format        |
| `range`    | Slider                      | Min/max values           |
| `checkbox` | Multiple selections         | Boolean                  |
| `radio`    | Single selection from group | Requires name attribute  |

### CSS (Cascading Style Sheets)

CSS controls the visual presentation of HTML elements.

**Three ways to apply CSS:**

1. **Inline:** Directly on an element using the `style` attribute
2. **Internal:** In a `<style>` tag in the `<head>`
3. **External:** In a separate .css file (recommended)

**Selectors:**

```css
p {
  color: #333333;
  line-height: 1.6;
}

.highlight {
  background-color: #ffff00;
  padding: 4px;
}

#main-heading {
  font-size: 2em;
  text-align: center;
}

nav a {
  text-decoration: none;
  color: #0066cc;
}

a:hover {
  text-decoration: underline;
}
```

**Selector specificity (high to low):**

1. Inline styles (`style=""`)
2. ID selectors (`#id`)
3. Class selectors (`.class`), attribute selectors, pseudo-classes
4. Element selectors (`p`, `div`)
5. Universal selector (`*`)

**Box Model:** Every element is a box with content, padding, border, and margin.

```
+------------------- margin -------------------+
|  +------------- border -------------+  |
|  |  +--------- padding ---------+  |  |
|  |  |       content            |  |  |
|  |  +---------------------------+  |  |
|  +----------------------------------+  |
+------------------------------------------+
```

```css
.box {
  width: 300px;
  padding: 20px;
  border: 2px solid #333333;
  margin: 15px;
}

.border-box {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 2px solid #333333;
}
```

**Layout with Flexbox:**

```css
.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
}

.sidebar {
  flex: 0 0 250px;
}

.main-content {
  flex: 1;
}
```

**Flexbox properties reference:**

| Property          | Values                                                    | Effect               |
| ----------------- | --------------------------------------------------------- | -------------------- |
| `justify-content` | flex-start, center, flex-end, space-between, space-around | Main axis alignment  |
| `align-items`     | flex-start, center, flex-end, stretch                     | Cross axis alignment |
| `flex-direction`  | row, column, row-reverse, column-reverse                  | Direction of items   |
| `flex-wrap`       | nowrap, wrap                                              | Whether items wrap   |
| `gap`             | length                                                    | Space between items  |

**Layout with CSS Grid:**

```css
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  gap: 16px;
}

.header {
  grid-column: 1 / -1;
}
```

**Responsive design:**

```css
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

@media (max-width: 768px) {
  .grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  body {
    font-size: 14px;
  }
}
```

### JavaScript

JavaScript adds interactivity and dynamic behaviour to web pages.

**Variables:**

```javascript
let name = 'Alice';
const PI = 3.14159;
var oldStyle = 'avoid this';
```

**Functions:**

```javascript
function greet(name) {
  return 'Hello, ' + name + '!';
}

const greet = (name) => `Hello, ${name}!`;
```

**DOM Manipulation:**

```javascript
document.getElementById('output').textContent = 'New text';

document.querySelector('.highlight').style.backgroundColor = 'yellow';

document.querySelectorAll('li').forEach((item) => {
  item.addEventListener('click', () => {
    item.classList.toggle('selected');
  });
});
```

**Event handling:**

```javascript
document.getElementById('myButton').addEventListener('click', function () {
  alert('Button clicked!');
});

document.getElementById('myForm').addEventListener('submit', function (event) {
  event.preventDefault();
  const formData = new FormData(this);
  console.log('Name:', formData.get('name'));
});
```

**Fetch API:**

```javascript
fetch('https://api.example.com/data')
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
```

**Worked Example.** Write JavaScript to validate an email address format.

```javascript
function validateEmail(email) {
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

const email = document.getElementById('email').value;
if (!validateEmail(email)) {
  document.getElementById('emailError').textContent = 'Invalid email format';
}
```

---

## Web Security

### Threats and Countermeasures

**Cross-Site Scripting (XSS):** Attacker injects malicious scripts into web pages viewed by other
users.

**Prevention:** Sanitise and validate all user input. Use `textContent` instead of `innerHTML`.

**SQL Injection:** Attacker inserts malicious SQL code through form inputs.

**Prevention:** Use parameterised queries instead of string concatenation.

```python
query = f"SELECT * FROM users WHERE name = '{user_input}'"

cursor.execute("SELECT * FROM users WHERE name = ?", (user_input,))
```

**Cross-Site Request Forgery (CSRF):** Attacker tricks the user into performing unwanted actions on
a website where they are authenticated.

**Prevention:** Use CSRF tokens.

**HTTPS:** Encrypts data in transit between client and server. Prevents eavesdropping and
man-in-the-middle attacks.

**Passwords:** Hash and salt passwords before storing. Never store plain text passwords.

```python
import hashlib
import os

salt = os.urandom(32)
password_hash = hashlib.pbkdf2_hmac('sha256', password.encode(), salt, 100000)
```

### Content Security Policy (CSP)

CSP is an HTTP header that restricts what resources a page can load, preventing XSS attacks.

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline';
```

## CSS Grid Layout in Detail

### Grid Properties Reference

| Property                | Values                                         | Effect                     |
| ----------------------- | ---------------------------------------------- | -------------------------- |
| `display`              | `grid`                                         | Creates a grid container    |
| `grid-template-columns` | `1fr 2fr 300px` / `repeat(3, 1fr)`             | Defines column sizes        |
| `grid-template-rows`    | `auto 1fr auto`                                | Defines row sizes           |
| `grid-column`           | `1 / 3`                                        | Spans columns 1-2           |
| `grid-row`              | `2 / 4`                                        | Spans rows 2-3              |
| `gap`                   | `16px`                                         | Space between items         |
| `grid-area`             | `header` / `auto`                              | Named grid area            |

### Responsive Design Techniques

**Fluid layouts:** Use percentages and `fr` units instead of fixed pixels.

**Media queries:** Apply different styles at different screen sizes.

```css
/* Mobile first approach */
.container {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
    padding: 16px;
}

@media (min-width: 768px) {
    .container {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .container {
        grid-template-columns: 250px 1fr 200px;
    }
}
```

**Flexible images:**

```css
img {
    max-width: 100%;
    height: auto;
}
```

**Viewport units:**

| Unit  | Description                          |
| ----- | ------------------------------------ |
| `vw`  | 1% of viewport width                 |
| `vh`  | 1% of viewport height                |
| `vmin` | 1% of smaller viewport dimension     |
| `vmax` | 1% of larger viewport dimension      |

## JavaScript in Detail

### DOM Manipulation

```javascript
// Creating elements
const newParagraph = document.createElement('p');
newParagraph.textContent = 'New paragraph';
document.getElementById('container').appendChild(newParagraph);

// Removing elements
const oldElement = document.getElementById('old');
oldElement.remove();

// Modifying attributes
const img = document.querySelector('img');
img.setAttribute('src', 'new-image.jpg');
img.setAttribute('alt', 'New description');
```

### Event Delegation

Instead of adding event listeners to each child element, add one listener to the parent.

```javascript
document.getElementById('list').addEventListener('click', function(event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('selected');
    }
});
```

### Local Storage

```javascript
// Store data
localStorage.setItem('username', 'Alice');

// Retrieve data
const name = localStorage.getItem('username');

// Remove data
localStorage.removeItem('username');

// Clear all data
localStorage.clear();
```

**localStorage vs sessionStorage:**

| Feature        | localStorage                  | sessionStorage              |
| -------------- | ----------------------------- | -------------------------- |
| Persistence    | Survives browser restart      | Lost when tab closes       |
| Scope          | Same origin, all tabs         | Same origin, same tab      |
| Storage limit  | ~5-10 MB                      | ~5-10 MB                   |

## Web Security in Detail

### Cross-Site Request Forgery (CSRF) Prevention

A CSRF token is a unique, unpredictable value embedded in forms. The server verifies the token
matches its expectation before processing the request.

```html
<form action="/transfer" method="POST">
    <input type="hidden" name="csrf_token" value="abc123" />
    <input type="text" name="amount" />
    <button type="submit">Transfer</button>
</form>
```

### Content Security Policy (CSP)

CSP is an HTTP header that restricts what resources a page can load.

```
Content-Security-Policy: default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:
```

### CORS (Cross-Origin Resource Sharing)

CORS allows a server to indicate which origins (domains) are permitted to access its resources.

```
Access-Control-Allow-Origin: https://example.com
Access-Control-Allow-Methods: GET, POST
Access-Control-Allow-Headers: Content-Type
```

### Same-Origin Policy

The Same-Origin Policy prevents a web page from making requests to a different domain than the one
that served the page. This prevents malicious scripts on one page from accessing sensitive data on
another.

**Origin** is defined by the combination of protocol, domain, and port:
- `https://example.com:443/page` and `https://example.com/api` -- same origin.
- `https://example.com` and `http://example.com` -- different origin (different protocol).
- `https://example.com` and `https://api.example.com` -- different origin (different domain).

## Performance Optimization

### Frontend

- **Minify CSS/JS:** Remove whitespace and comments.
- **Compress images:** Use WebP format, lazy loading.
- **Minimise HTTP requests:** Combine files, use sprites.
- **Use a CDN:** Serve static assets from edge servers.
- **Cache resources:** Set appropriate Cache-Control headers.
- **Defer non-critical JS:** Use `defer` or `async` attributes.

### Backend

- **Database optimisation:** Add indexes, optimise queries.
- **Caching:** Cache frequently accessed data (Redis, Memcached).
- **Compression:** Enable gzip compression.
- **Load balancing:** Distribute traffic across multiple servers.

## Practice Questions

19. Write a responsive CSS Grid layout for a page with a header, navigation sidebar (collapsible on
    mobile), main content area, and footer.

20. Explain the Same-Origin Policy and give an example of when it prevents a security issue.

21. Write JavaScript that uses event delegation to handle clicks on a list of items, showing an
    alert with the item's text.

22. Explain what CORS is and why it is necessary. How does a server enable CORS?

23. Write CSS that uses CSS custom properties (variables) for a consistent colour theme.

24. Explain three frontend and three backend performance optimisation techniques.

25. Write HTML that includes form validation using HTML5 attributes (required, pattern, min, max).

26. Explain the difference between `localStorage` and `sessionStorage`. Give an appropriate use
    case for each.

27. Write a Content Security Policy header that only allows scripts from the same origin and
    images from a specific CDN.

28. Explain what event delegation is and why it is more efficient than adding individual event
    listeners.

29. Write JavaScript that implements an image carousel with previous/next buttons and automatic
    advancement every 5 seconds.

30. Explain the difference between graceful degradation and progressive enhancement in web
    development.

---

## Common Pitfalls

1. **Semantic HTML:** Use `nav`, `main`, `section`, `article` instead of generic `div` elements.
   This improves accessibility and SEO.

2. **Box model confusion:** Remember that `width` in the standard box model does NOT include padding
   and border. Use `box-sizing: border-box` to include them.

3. **JavaScript timing:** Scripts in the `<head>` block render unless `defer` or `async` is used.
   Place scripts at the end of `<body>` or use `defer`.

4. **Responsive images:** Always include `alt` text for accessibility and specify width/height to
   prevent layout shift.

5. **SQL injection:** Never concatenate user input directly into SQL queries. Always use
   parameterised queries.

6. **CSS specificity conflicts.** Inline styles override external CSS. Use specificity rules to
   predict which styles apply.

7. **Forgetting to close HTML tags.** Some elements (like `img`, `br`, `input`) are self-closing.
   Others (like `div`, `p`) must be explicitly closed.

---

## Practice Questions

1. Explain the role of DNS in web browsing and describe what happens when you type a URL into the
   browser.

2. Create an HTML form for a user registration page with fields for name, email, password, and date
   of birth. Include appropriate input types and validation.

3. Write CSS for a responsive two-column layout using Flexbox that stacks to a single column on
   screens narrower than 768 px.

4. Write JavaScript code that validates an email address format and displays an error message if
   invalid.

5. Explain the CSS box model and how `box-sizing: border-box` affects element dimensions.

6. Describe three common web security threats and explain how to prevent each one.

7. Write HTML and CSS to create a navigation bar that is horizontal on desktop and collapses into a
   hamburger menu on mobile.

8. Explain the difference between `localStorage` and `sessionStorage` and give an appropriate use
   case for each.

9. Write JavaScript that fetches data from a REST API and dynamically creates a table from the
   results.

10. Explain the difference between GET and POST HTTP methods. When would you use each?

11. Write CSS Grid layout for a page with a header (full width), sidebar (250 px), main content
    (remaining space), and footer (full width).

12. Explain what the Same-Origin Policy is and why it is important for web security.

13. Write HTML that includes a semantic structure with `header`, `nav`, `main`, `article`, and
    `footer` elements.

14. Explain the difference between client-side and server-side validation. Why should both be used?

15. Write JavaScript that implements a simple image slider/carousel with previous and next buttons.

16. Explain what CORS (Cross-Origin Resource Sharing) is and when it is needed.

17. Write a responsive HTML email template that works on both desktop and mobile devices.

18. Describe three ways to improve the performance of a web page. Include both frontend and backend
    techniques.
