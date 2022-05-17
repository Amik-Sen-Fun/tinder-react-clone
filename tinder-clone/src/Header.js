import React from 'react';
import "./Header.css";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import IconButton from '@mui/material/IconButton';
import ForumRoundedIcon from '@mui/icons-material/ForumRounded';

function Header() {
  return (
    <div className='header'>
        <IconButton>
        <AccountCircleIcon fontSize = "large" className='Header_icons'/>
        </IconButton>
        <img
        className = "Header_logo"
        src = "https://1000logos.net/wp-content/uploads/2018/07/Tinder-logo.jpg"
        alt = "Tinder Logo"/>
        <IconButton>
        <ForumRoundedIcon fontSize = "large" className='Header_icons'/>
        </IconButton>
        
    </div>
  )
}

export default Header