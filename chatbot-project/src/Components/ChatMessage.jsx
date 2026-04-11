import RobotProfile from '../assets/2.0-robot.png'
import UserProfile from '../assets/2.0-user.png'
import './ChatMessage.css'
function ChatMessage({message,sender}){
    return (
      <div className={
        sender === 'user'  
          ? "chat-message-user" 
          : "chat-message-robot"
      }>
        {sender==="robot" && (
          <img src={RobotProfile}className='chat-message-profile'/>
        )}
        <div className="chat-message-text">
          {message}
        </div>
        {sender==="user" && (
          <img src={UserProfile}className='chat-message-profile'/>
        )}
      </div>
    );
  }
  export default ChatMessage;