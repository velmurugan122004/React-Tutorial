import RobotProfile from '../assets/2.0-robot.png'
import UserProfile from '../assets/profile-1.jpg'
import './ChatMessage.css'
import dayjs from 'dayjs'
function ChatMessage({message,sender,time}){
  //console.log(dayjs().format('HH:mm:ss'))
  //const time=dayjs().format('HH:mm:ss');
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
          {time &&(<div className='chat-time-message'>
            {dayjs(time).format('h:mma')}
          </div>
          )}
        </div>
        {sender==="user" && (
          <img src={UserProfile}className='chat-message-profile'/>
        )}
      </div>
    );
  }
  export default ChatMessage;