import { useState,useEffect} from 'react';
import { Chatbot } from 'supersimpledev';
import './App.css';
import ChatInput from './Components/ChatInput.jsx';
import ChatMessages from './Components/ChatMessages.jsx';
//import {time} from "https://unpkg.com/supersimpledev/dayjs.js";
import dayjs from 'dayjs';
  function App(){
    const [chatMessages,setChatMessages]=useState(JSON.parse(localStorage.getItem('messages'))||[]);
    useEffect(()=>{
      Chatbot.addResponses({
        'goodbye':'Goodbyee. Have a great day buddy',
        'give me a unique id':function(){
          return `Sure! Here's a unique ID:${crypto.randomUUID()}`;
        },
        'who created you':'vels created me',
        'what is your name':`I'm chatbot`,
        'hi':`Hey buddy! 😄
        What’s up? Need help with your chatbot or trying something new? 🚀`,
        'what is the time now':function(){
          return `Sure! buddy time is:${dayjs().format('HH:mm:ss')}`;
        }
      });
    },[]);
    useEffect(() => {
      localStorage.setItem('messages', JSON.stringify(chatMessages));
    }, [chatMessages]);
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