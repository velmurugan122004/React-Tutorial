import { useState} from 'react';

import './App.css';
import ChatInput from './Components/ChatInput.jsx';
import ChatMessages from './Components/ChatMessages.jsx';
  function App(){
    const [chatMessages,setChatMessages]=useState([]);
    return (
      <div className="app-Cointainer">
        {
          chatMessages.length==0 &&(
            <p className="welcomeMsg">Welcome to the chatbot project! Send a message using the textbox below</p>
          )
        }
        <ChatMessages 
          chatMessages={chatMessages} 
        />
        <ChatInput 
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    );
  }
  export default App;