import React from 'react'
import "./SwipeButtons.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton>
            <ReplayIcon fontSize="large"/>
        </IconButton>
        <IconButton>
            <CloseIcon fontSize="large"/>
        </IconButton>
        <IconButton>
             <StarsIcon  fontSize="large"/>  
        </IconButton>
        <IconButton>
            <FavoriteIcon fontSize="large"/>
        </IconButton>
        <IconButton>
            <BoltIcon fontSize="large"/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons