import React, {useState} from 'react';
import "./ChatScreen.css";
import Avatar from '@mui/material/Avatar';


function ChatScreen() {
    const [user_input,setInput] = useState('');
    const [messages,setMessages] = useState([
        {
            name: "Dakota",
            message: "Hey!!",
            image: "https://drive.google.com/uc?export=view&id=1pQpvRRvUuv1o5FJSdvIpldDfyc3V_2rq"

        },{
            name: "Dakota",
            message: "How are you?",
            image: "https://drive.google.com/uc?export=view&id=1pQpvRRvUuv1o5FJSdvIpldDfyc3V_2rq"
        },{
            message:"I am fine, how are you?"
        }
    ]);
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: user_input}]);
        setInput("");
    }
  return (
    <div className="chatScreen">
        <p className="chatScreen-title">You matched with Dakota on 10/09/22</p>
        {messages.map(message =>(
            message.name? (
            <div className="chatScreenMessage">
                <Avatar src={message.image} alt = {message.name}/>
                <p className = "chatScreenText">{message.message}</p>
            </div>
            ):(
            <div className="chatScreenMessage">
                <p className = "chatScreenText_user">{message.message}</p>
            </div>
            )
        ))}
        <div>
            <form className="chatScreenInputBar">
                <input value={user_input} type="text" 
                onChange={(e)=>setInput(e.target.value)}
                className="chatScreenMessageBar" 
                placeholder="Type a message .."/>
                <button onClick = {handleSend} type="submit" className="SendButton">SEND</button>
            </form>
        </div>
    </div>
  )
}

export default ChatScreen