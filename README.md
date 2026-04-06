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

Perfect buddy 🔥 this is your **Lesson 3 (State + Real Interaction)** — now your project becomes a real React app.

Here’s your clean README 👇

---

# React Basics 🚀

## 📚 Lesson 3: State & Interactivity (Chatbot with useState)

---

## 📌 Lesson Overview

This lesson introduces **React State (`useState`)** — the most important concept in React.

👉 Now your chatbot becomes **interactive**:

* User can type messages
* Messages get stored
* Bot responds automatically

---

## 🧠 Concepts Covered (Lesson 3)

* `useState` Hook
* Controlled Components (input field)
* Event Handling (`onChange`, `onClick`)
* Updating UI dynamically
* Lists & `.map()` rendering
* Unique keys (`key={id}`)

---

## 💻 Code Explanation

---

### 1. useState in App (Main Data Storage)

```jsx
const [chatMessages, setChatMessages] = React.useState([
  {
    message: "hello Chatbot",
    sender: "user",
    id: "id1"
  }
]);
```

👉 Stores all chat messages
👉 When state updates → UI automatically re-renders

---

### 2. Controlled Input (ChatInput)

```jsx
const [inputText, setInputText] = React.useState('');

<input 
  value={inputText}
  onChange={saveInputText}
/>
```

👉 Input is controlled by React state
👉 Always synced with `inputText`

---

### 3. Handling Input Change

```jsx
function saveInputText(event){
  setInputText(event.target.value);
}
```

👉 Updates state when user types

---

### 4. Sending Message (Core Logic 🔥)

```jsx
function sendMessage(){
  const newChatMesage = [
    ...chatMessages,
    {
      message: inputText,
      sender: 'user',
      id: crypto.randomUUID()
    }
  ];

  setChatMessages(newChatMesage);

  const response = Chatbot.getResponse(inputText);

  setChatMessages([
    ...newChatMesage,
    {
      message: response,
      sender: 'robot',
      id: crypto.randomUUID()
    }
  ]);

  setInputText('');
}
```

👉 Steps:

1. Add user message
2. Get bot response
3. Add bot message
4. Clear input

---

### 5. Rendering List of Messages

```jsx
{chatMessages.map((chatMessage) => {
  return (
    <ChatMessage 
      message={chatMessage.message}
      sender={chatMessage.sender}
      key={chatMessage.id}
    />
  );
})}
```

👉 `.map()` converts array → UI
👉 `key` improves performance

---

### 6. Component Structure

* `App` → Manages state
* `ChatInput` → Handles input & sending
* `ChatMessages` → Displays list
* `ChatMessage` → Single message UI

---

## ▶️ How to Run

1. Save file as `index.html`
2. Make sure this script exists:

```html
<script src="https://unpkg.com/supersimpledev/chatbot.js"></script>
```

3. Add images:

* `images/2.0-robot.png`
* `images/2.0-user.png`

4. Open in browser

---

## 🔥 Output

* User types message
* Click **Send**
* Message appears instantly
* Bot replies automatically 🤖

---

## 📌 Key Learning

👉 `useState` = makes UI dynamic
👉 React re-renders automatically when state changes
👉 Data flows from parent → child (props)

---

## ⚠️ Important Note

You used:

```js
setChatMessages(newChatMesage);
setChatMessages([...newChatMesage, {...}]);
```

👉 This works, but better approach is:

* Combine both updates into one (advanced concept: batching)

---

## 🔥 Lesson 3 Summary

In this lesson, you learned:

* How to use `useState`
* How to handle user input
* How to update UI dynamically
* How to build a real working chatbot


