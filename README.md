# React Basics 🚀

A beginner-friendly React learning repository covering core concepts step by step.

---

## 📌 What is React?

React is a **JavaScript library** used to build **user interfaces (UI)** — especially for modern, fast, and interactive web applications.

👉 Simple meaning:
JavaScript is the tool,
React helps you use that tool **easier, faster, and in a structured way**.

👉 Why React?

* Reusable components
* Fast rendering (Virtual DOM)
* Clean and scalable code
* Widely used in industry

---

# 📚 Lesson 1: Introduction to React & JSX

---

## 📂 Lesson Overview

This lesson introduces the **basics of React** using a simple HTML file.

👉 You will learn:

* How to use React with CDN
* What is JSX
* How to render elements on screen

---

## 🧠 Concepts Covered (Lesson 1)

* Introduction to React
* JSX (JavaScript + HTML)
* React Elements
* Rendering using `ReactDOM.createRoot()`
* Expressions inside JSX (`{}`)

---

## 💻 Code Explanation

### 1. Container in HTML

```html
<div class="js-container"></div>
```

👉 React renders UI inside this container

---

### 2. React & Babel CDN

```html
<script src="https://unpkg.com/supersimpledev/react.js"></script>
<script src="https://unpkg.com/supersimpledev/react-dom.js"></script>
<script src="https://unpkg.com/supersimpledev/babel.js"></script>
```

* React → Core library
* ReactDOM → Rendering UI
* Babel → Converts JSX to JavaScript

---

### 3. JSX Element

```jsx
const div = (
  <div>
    <button>hello</button>
    <p>This is the paragraph {2+2}</p>
  </div>
);
```

👉 JSX = HTML inside JavaScript
👉 `{2+2}` → dynamic value (output: 4)

---

### 4. Rendering UI

```javascript
const container = document.querySelector('.js-container');

ReactDOM.createRoot(container).render(div);
```

👉 Connect React to HTML and display content

---

## ▶️ How to Run

1. Save as `index.html`
2. Open in browser

---

## 🔥 Lesson 1 Summary

✔ What React is
✔ How JSX works
✔ How to render UI

---

## 📌 Next Step

➡️ Lesson 2: Components & Reusable UI

---

# 📚 Lesson 2: Components & Reusable UI (Chatbot Example)

---

## 📂 Lesson Overview

This lesson focuses on **React Components** — the core concept of React.

👉 You will learn:

* Create components
* Reuse components
* Pass data using props
* Use fragments
* Render dynamic UI

---

## 🧠 Concepts Covered (Lesson 2)

* Functional Components
* Component Syntax (`<Component />`)
* Props (data passing)
* Destructuring props
* Conditional Rendering (`&&`)
* Fragments (`<> </>`)

---

## 💻 Code Explanation

### 1. Component: ChatInput

```jsx
function ChatInput(){
  return (
    <>
      <input 
        placeholder="Send a message to Chatbot" 
        size="30"
      />
      <button>Send</button>
    </>
  );
}
```

👉 Input + button
👉 Fragment avoids extra `<div>`

---

### 2. Component: ChatMessage

```jsx
function ChatMessage({message, sender}){
  return (
    <div>
      {sender==="robot" && (
        <img src="../images/2.0-robot.png" width="40"/>
      )}
      
      {message}
      
      {sender==="user" && (
        <img src="../images/2.0-user.png" width="40"/>
      )}
    </div>
  );
}
```

👉 Props:

* `message` → text
* `sender` → user / robot

👉 Conditional rendering shows images

---

### 3. Main Component: App

```jsx
function App(){
  return (
    <>
      <ChatInput />
      
      <ChatMessage 
        message="hello Chatbot" 
        sender="user"
      />
      
      <ChatMessage 
        message="Hello! How can I help you?"  
        sender="robot"
      />
    </>
  );
}
```

👉 Reuse components multiple times

---

### 4. Rendering App

```javascript
const container = document.querySelector('.js-container');

ReactDOM.createRoot(container).render(<App />);
```

👉 Render full application

---

## ▶️ How to Run

1. Save as `index.html`
2. Open in browser
3. Add images:

* `images/2.0-robot.png`
* `images/2.0-user.png`

---

## 🔥 Output

* Input box + button
* Chat messages
* User & robot icons

---

## 🔥 Lesson 2 Summary

✔ Components = reusable UI
✔ Props = data passing
✔ Conditional rendering = dynamic UI

---

## 📌 Next Step

➡️ Lesson 3: State & Interactivity (Real chatbot)

---

