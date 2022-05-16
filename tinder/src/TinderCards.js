import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "react-tinder-card";

function TinderCards() {
    // defining the data set that will be shown in the Cards
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            urls: ''
        },
        {
            name: 'Amik Sen',
            urls: ''
        },
        {
            name: 'Mridul Newar',
            urls: ''
        },
        {
            name: 'Dushyant Trivedi',
            urls: ''
        },
        {
            name: 'Bill Gates',
            urls: ''
        },
    ]);
    // Bad Practice : const People = []; people.push('John');
    // Good Practice : setPeople([...people, 'John']);
  return (
    <div className = "tinderCards">
        TinderCards
    </div>
  )
}

export default TinderCards