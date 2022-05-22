import React from 'react';
import "./Chats.css";
import ChatRow from "./ChatRow";

function Chats() {
  return (
    <div className="chats">
        <ChatRow
        name="Scarlett Johansson"
        message="Hey Amik!"
        timestamp="2 sec Ago"
        profilePic="https://drive.google.com/uc?export=view&id=1ZTwWD5wJslMKPfvJWTdUHUS5ZalvPc6y"
        />
        <ChatRow
        name="Ana de Armas"
        message="Are we meeting Today?"
        timestamp="1 hr Ago"
        profilePic="https://drive.google.com/uc?export=view&id=1AZyJbSRq-U8ZPi-MMdv-DlYMuUSxDRQV"
        />
        <ChatRow
        name="Dakota Johnson"
        message="Hey!!"
        timestamp="2 hr Ago"
        profilePic="https://drive.google.com/uc?export=view&id=1pQpvRRvUuv1o5FJSdvIpldDfyc3V_2rq"
        />
        <ChatRow
        name="Elizabeth Olsen"
        message="Stop Ignoring me!"
        timestamp="2 days Ago"
        profilePic="https://drive.google.com/uc?export=view&id=1w7LK6V78MEZw91HEpDMQxBaosl06l5ca"
        />
    </div>
  )
}

export default Chats