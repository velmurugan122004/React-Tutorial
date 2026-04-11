import { useState } from "react";
import LoadingGif from '../assets/loading-spinner.gif'
import { Chatbot } from "supersimpledev";
import './ChatInput.css';
function ChatInput({chatMessages,setChatMessages}){
    const [inputText,setInputText]=useState('');
    function saveInputText(event){
      setInputText(event.target.value);
      //console.log(text);
    }
    async function sendMessage(){
      //console.log(inputText);
        // Clear the textbox at the top now because the Chatbot
      // will take some time to load the response. We want
      // to clear the textbox immediately rather waiting
      // for the Chatbot to finish loading.
      // Set isLoading to true at the start, and set it to
      // false after everything is done.


      // We can put this at the top of the function or
      // after the first setChatMessages(). Both work.

      setInputText('');

      const newChatMessage=[
      ...chatMessages,{
        message:inputText,
        sender:'user',
        id:crypto.randomUUID()
      }
      ];
      setChatMessages([
        ...newChatMessage,
        // This creates a temporary Loading... message.
        // Because we don't save this message in newChatMessages,
        // it will be remove later, when we add the response.
        {
          message: <img src={LoadingGif}
          className="loading-spinner" ></img>,
          sender: 'robot',
          id: crypto.randomUUID()
        }
      ]);



      const response=await Chatbot.getResponseAsync(inputText);
      //console.log(response);
      setChatMessages([
      ...newChatMessage,{
        message:response,
        sender:'robot',
        id:crypto.randomUUID()
      }
      ]);
      //setInputText('');
    }
    function handleKeyDown(event){
      //console.log(event.key)
      if(event.key==='Enter'){
        sendMessage();
      }
      if(event.key==='Escape'){
        setInputText('');
      }
    }
    return (
      //<input ></input>this are equal to below code
      <div className="chat-Input-Container">
        {/* self closing element */}
        <input 
          placeholder="Send a mesage to Chatbot" 
          size="30"
          onChange={saveInputText}
          value={inputText}
          onKeyDown={handleKeyDown}
          className="chat-Input"
        />
        <button 
          onClick={sendMessage}
          className="send-button"
        >Send</button>
      </div>
    );
  }
  export default ChatInput;