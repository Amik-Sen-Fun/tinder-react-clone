import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Link, useNavigate } from "react-router-dom";

function Header({ backButton }) {
  const history = useNavigate();
  return (
    <div className='header'>
      {backButton ? (
        <IconButton onClick={()=>history(-1)}>
          <ArrowBackIosIcon fontSize = "large" className='Header_icons'/>
          </IconButton>
      ):(
        <IconButton>
          <AccountCircleIcon fontSize = "large" className='Header_icons'/>
        </IconButton>
      )}
        
        <Link to="/">
          <img
          className = "Header_logo"
          src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
          alt = "Tinder Logo"/>
        </Link>
        <Link to="/chats">
          <IconButton>
          <ForumRoundedIcon fontSize = "large" className='Header_icons'/>
          </IconButton>
        </Link>
    </div>
  )
}

export default Header