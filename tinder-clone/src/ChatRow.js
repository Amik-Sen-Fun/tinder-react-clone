import React from 'react';
import "./ChatRow.css"
import Avatar from '@mui/material/Avatar';
import {Link} from "react-router-dom";
function ChatRow({ name,message,timestamp,profilePic }) {
  return (
    <Link to = {`/chats/${name}`}>
    <div className = "chat-row">
      <Avatar src={profilePic} alt={name} className="chat-avatar"/>
      <div className="chat-row-message">
        <h2>{name}</h2>
        <p>{message}</p>
      </div>
      <p className="chat-timestamp">{timestamp}</p>
    </div>
    </Link>
  )
}

export default ChatRow