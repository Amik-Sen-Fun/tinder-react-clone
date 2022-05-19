import React from 'react'
import "./SwipeButtons.css"

import FavoriteIcon from '@mui/icons-material/Favorite';
import StarRateIcon from '@mui/icons-material/StarRate';
import BoltIcon from '@mui/icons-material/Bolt';
import CloseIcon from '@mui/icons-material/Close';
import ReplayIcon from '@mui/icons-material/Replay';
import IconButton from '@mui/material/IconButton';

function SwipeButtons() {
  return (
    <div className="swipeButtons">
        <IconButton>
            <ReplayIcon fontSize="large" className='swipeButton_repeat'/>
        </IconButton>
        <IconButton>
            <CloseIcon fontSize="large" className='swipeButton_close'/>
        </IconButton>
        <IconButton>
             <StarRateIcon fontSize="large" className='swipeButton_star'/>  
        </IconButton>
        <IconButton>
            <FavoriteIcon fontSize="large" className='swipeButton_fav'/>
        </IconButton>
        <IconButton>
            <BoltIcon fontSize="large" className = 'swipeButton_bolt'/>
        </IconButton>
        
    </div>
  )
}

export default SwipeButtons