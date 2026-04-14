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

---

# 📚 Lesson 4: Advanced State, Styling & Hooks (Styled Chatbot)

---

## 📂 Lesson Overview

This lesson upgrades your chatbot into a **real-world UI** using:

* CSS styling 🎨
* Advanced hooks ⚛️
* Better user experience 🚀

👉 You will learn:

* Styling React apps with CSS
* Flexbox layout
* Ternary operator in JSX
* `useEffect`, `useRef` hooks
* Auto-scroll feature
* Loading state handling

---

## 🧠 Concepts Covered (Lesson 4)

* CSS in React
* Flexbox (`display: flex`)
* Ternary operator (`condition ? A : B`)
* Hooks:

  * `useState`
  * `useEffect`
  * `useRef`
* Async functions (`async/await`)
* Event handling (`onKeyDown`)
* Auto-scroll UI

---

## 🎨 1. Styling with CSS

```css id="l4css1"
.app-Cointainer{
  max-width: 600px;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
```

👉 Centered layout
👉 Full height app

---

```css id="l4css2"
.chat-Input-Container{
  display: flex;
}
```

👉 Flexbox for input + button alignment

---

```css id="l4css3"
.chat-message-user{
  display: flex;
  justify-content: end;
}
```

👉 Align user messages to right

---

## ⚛️ 2. useState (Multiple States)

```jsx id="l4c1"
const [inputText,setInputText]=React.useState('');
const [isLoading,setIsLoading]=React.useState(false);
```

👉 `inputText` → stores input
👉 `isLoading` → prevents multiple clicks

---

## ⚡ 3. Async Chatbot (Real Interaction)

```jsx id="l4c2"
async function sendMessage(){
  if (isLoading || inputText === '') return;

  setIsLoading(true);
  setInputText('');
```

👉 Prevent duplicate requests
👉 Clear input immediately

---

```jsx id="l4c3"
const response=await Chatbot.getResponseAsync(inputText);
```

👉 Async API call

---

```jsx id="l4c4"
setIsLoading(false);
```

👉 Reset loading state

---

## ⌨️ 4. Event Handling (Keyboard Support)

```jsx id="l4c5"
function handleKeyDown(event){
  if(event.key==='Enter'){
    sendMessage();
  }
  if(event.key==='Escape'){
    setInputText('');
  }
}
```

👉 Enter → send message
👉 Escape → clear input

---

## 🔀 5. Ternary Operator in JSX

```jsx id="l4c6"
<div className={
  sender === 'user'  
    ? "chat-message-user" 
    : "chat-message-robot"
}>
```

👉 Cleaner alternative to if-else

---

## 🔄 6. useEffect (Auto Scroll)

```jsx id="l4c7"
React.useEffect(()=>{
  const containerElem=chatMessagesRef.current;
  if(containerElem){
    containerElem.scrollTop=containerElem.scrollHeight;
  }
},[chatMessages]);
```

👉 Runs after messages update
👉 Scrolls to latest message

---

## 📌 7. useRef (Access DOM)

```jsx id="l4c8"
const chatMessagesRef=React.useRef(null);
```

👉 Directly access HTML element

---

## 🔄 8. Loading Message UX

```jsx id="l4c9"
{
  message: 'Loading...',
  sender: 'robot',
  id: crypto.randomUUID()
}
```

👉 Temporary message while waiting for response

---

## 💻 Component Flow

👉 `App`
→ stores chat state

👉 `ChatMessages`
→ displays messages + auto-scroll

👉 `ChatInput`
→ handles input + events

👉 `ChatMessage`
→ styled UI

---

## ▶️ How to Run

1. Save as `index.html`
2. Open in browser
3. Required files:

* `chatbot.js`
* `images/2.0-robot.png`
* `images/2.0-user.png`

---

## 🔥 Output

* Styled chatbot UI 💬
* Messages aligned left/right
* Auto scroll enabled
* Enter key support ⌨️
* Loading message ⏳

---

## 📌 Key Learning

👉 Flexbox = layout control
👉 Hooks = powerful React features
👉 useEffect = lifecycle control
👉 useRef = DOM access
👉 Async = real-world apps

---

## 🔥 Lesson 4 Summary

✔ Styled React app
✔ Advanced hooks usage
✔ Better UX (auto-scroll + loading)
✔ Keyboard interactions

# 📚 Lesson 5: Proper React Setup (Vite, NPM & Project Structure)

---

## 📂 Lesson Overview

In this lesson, you move from **basic HTML setup → real industry React setup**.

👉 You will learn:

* How to create a real React project
* Using command line tools
* Installing packages with NPM
* Using Vite for fast development
* Organizing code into modules

---

## 🧠 Concepts Covered (Lesson 5)

* Command Line (CLI)
* NPM (Node Package Manager)
* Vite (modern React setup tool)
* ESLint (code quality tool)
* JavaScript Modules (`import/export`)
* File structure (`.jsx`, `.css`)

---

## ⚙️ 1. What is Command Line?

👉 Command Line = typing commands to control your computer

Examples:

```bash id="l5c1"
cd desktop
mkdir react-app
```

👉 Faster than using mouse

---

## 📦 2. What is NPM?

👉 NPM = Node Package Manager

Used to:

* Install libraries
* Manage dependencies
* Run scripts

Example:

```bash id="l5c2"
npm install
```

---

## ⚡ 3. What is Vite?

👉 Vite is a **modern tool** to create React apps quickly

✔ Faster than older tools
✔ Instant reload (HMR)
✔ Lightweight

---

## 🚀 4. Create React App using Vite

```bash id="l5c3"
npm create vite@latest
```

Then:

```bash id="l5c4"
cd your-project-name
npm install
npm run dev
```

👉 Opens app in browser

---

## 📁 5. Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── components/
 │    ├── ChatInput.jsx
 │    ├── ChatMessage.jsx
 │    ├── ChatMessages.jsx
 ├── styles/
 │    ├── ChatInput.css
 │    ├── ChatMessage.css
```

👉 Clean and scalable structure

---

## 🔗 6. JavaScript Modules

```jsx id="l5c5"
// Export
export default ChatInput;
```

```jsx id="l5c6"
// Import
import ChatInput from './components/ChatInput';
```

👉 Split code into multiple files

---

## 🧹 7. ESLint (Code Quality)

👉 ESLint helps:

* Find errors
* Improve code quality
* Follow best practices

Example warning:

```
Unused variable detected
```

---

## 🧩 8. Separate Components & CSS

👉 Each component gets its own file:

```jsx id="l5c7"
ChatInput.jsx
ChatInput.css
```

👉 Benefits:

* Clean code
* Easy debugging
* Reusable components

---

## 🔄 9. Move Chatbot into Vite Project

👉 Copy your previous chatbot code into:

* `App.jsx`
* Components folder

👉 Convert:

* `<script>` → React files
* Inline CSS → separate `.css`

---

## ▶️ How to Run

```bash
npm install
npm run dev
```

👉 Open browser → see your app

---

## 🔥 Output

* Fully working React app
* Fast development server
* Organized file structure

---

## 📌 Key Learning

👉 CLI = control system
👉 NPM = manage packages
👉 Vite = fast React setup
👉 Modules = clean code
👉 ESLint = better quality

---

## 🔥 Lesson 5 Summary

✔ Setup real React environment
✔ Use modern tools (Vite)
✔ Organize project like industry
✔ Split code into reusable files

# 📚 Lesson 6: Routing in React (Multiple Pages)

---

## 📂 Lesson Overview

In this lesson, you learn how to create **multiple pages in React** using routing.

👉 You will learn:

* What is routing
* How to use `BrowserRouter`
* How to define routes
* How to navigate between pages
* Build multi-page React apps

---

## 🧠 Concepts Covered (Lesson 6)

* Routing in React
* `BrowserRouter`
* `Routes` & `Route`
* `Link` for navigation
* Multiple page structure

---

## 🌐 1. What is Routing?

👉 Routing = switching between different pages **without reloading**

Example:

* `/` → Home page
* `/chat` → Chatbot page

---

## ⚛️ 2. Install React Router

```bash
npm install react-router-dom
```

---

## 🧩 3. Setup BrowserRouter

```jsx id="l6c1"
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

👉 Wrap your app with `BrowserRouter`

---

## 🛣️ 4. Define Routes

```jsx id="l6c2"
import { Routes, Route } from 'react-router-dom';

function App(){
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/chat" element={<Chatbot />} />
    </Routes>
  );
}
```

👉 Each `Route` = one page

---

## 🔗 5. Navigation using Link

```jsx id="l6c3"
import { Link } from 'react-router-dom';

function Navbar(){
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/chat">Chatbot</Link>
    </>
  );
}
```

👉 No page reload
👉 Smooth navigation

---

## 📁 6. Project Structure

```
src/
 ├── App.jsx
 ├── main.jsx
 ├── pages/
 │    ├── Home.jsx
 │    ├── Chatbot.jsx
 ├── components/
 │    ├── Navbar.jsx
```

---

## 💻 Example Pages

### Home Page

```jsx id="l6c4"
function Home(){
  return <h1>Welcome to Home Page</h1>;
}
```

---

### Chatbot Page

```jsx id="l6c5"
function Chatbot(){
  return <h1>Chatbot Page</h1>;
}
```

---

## 🔄 7. Full App Flow

👉 `BrowserRouter`
→ Enables routing

👉 `Routes`
→ Holds all pages

👉 `Route`
→ Defines each page

👉 `Link`
→ Navigation

---

## ▶️ How to Run

```bash
npm run dev
```

👉 Open:

* `/` → Home
* `/chat` → Chatbot

---

## 🔥 Output

* Multiple pages working
* Navigation without refresh
* Clean page structure

---

## 📌 Key Learning

👉 Routing = multi-page apps
👉 BrowserRouter = enables routing
👉 Routes/Route = define pages
👉 Link = navigation

---

## 🔥 Lesson 6 Summary

✔ Created multi-page React app
✔ Used React Router
✔ Navigated between pages
✔ Structured app like real projects

