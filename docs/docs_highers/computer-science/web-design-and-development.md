---
title: Web Design and Development
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

### CSS (Cascading Style Sheets)

CSS controls the visual presentation of HTML elements.

**Three ways to apply CSS:**

1. **Inline:** Directly on an element using the `style` attribute
2. **Internal:** In a `<style>` tag in the `<head>`
3. **External:** In a separate .css file (recommended)

**Selectors:**

```css
/* Element selector */
p {
  color: #333333;
  line-height: 1.6;
}

/* Class selector */
.highlight {
  background-color: #ffff00;
  padding: 4px;
}

/* ID selector */
#main-heading {
  font-size: 2em;
  text-align: center;
}

/* Descendant selector */
nav a {
  text-decoration: none;
  color: #0066cc;
}

/* Pseudo-class */
a:hover {
  text-decoration: underline;
}
```

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

---

## Web Security

### Threats and Countermeasures

**Cross-Site Scripting (XSS):** Attacker injects malicious scripts into web pages viewed by other
users.

**Prevention:** Sanitise and validate all user input. Use `textContent` instead of `innerHTML`.

**SQL Injection:** Attacker inserts malicious SQL code through form inputs.

**Prevention:** Use parameterised queries instead of string concatenation.

```python
# Vulnerable
query = f"SELECT * FROM users WHERE name = '{user_input}'"

# Safe
cursor.execute("SELECT * FROM users WHERE name = ?", (user_input,))
```

**Cross-Site Request Forgery (CSRF):** Attacker tricks the user into performing unwanted actions on
a website where they are authenticated.

**Prevention:** Use CSRF tokens.

**HTTPS:** Encrypts data in transit between client and server. Prevents eavesdropping and
man-in-the-middle attacks.

**Passwords:** Hash and salt passwords before storing. Never store plain text passwords.

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
