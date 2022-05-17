import React, {useState} from 'react'
import "./TinderCards.css"
import TinderCard from "./Tinder-Card";

function TinderCards() {
    // defining the data set that will be shown in the Cards
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs', 
            url: 'https://drive.google.com/uc?export=view&id=1NY0vrn7GzlYHlKk7Rynlz21ee1Q_zGYc'
        },
        {
            name: 'Amik Sen',
            url: 'https://drive.google.com/uc?export=view&id=1023md3ZN9dy--aeSgTKXWTsHFp2u8Dgz'
        },
        {
            name: 'Mridul Newar',
            url: 'https://drive.google.com/uc?export=view&id=1Nd3vxasz_MJHV23ocZOTaXMq6cbhTRR8'
        },
        {
            name: 'Dushyant Trivedi',
            url: 'https://drive.google.com/uc?export=view&id=18wsq-iOKzGetWMIfoVPYdpomgVAJUDyN'
        },
        {
            name: 'Bill Gates',
            url: 'https://drive.google.com/uc?export=view&id=18six-cV3eyXTrSdPkjE02fAWId5ns5f8'
        },
    ]);
    // Bad Practice : const People = []; people.push('John');
    // Good Practice : setPeople([...people, 'John']);
    const outOfFrame=(name)=>{
        console.log(name,"left the screen");
    }

    const swipped=(direction, person)=>{
        console.log("Removing:",person);
        console.log("From:", direction);
    }
  return (
    <div className = "tinderCards">
        {/* Map is used to iterate through all people objects */}
        <div className = "tinderCards_">
            {people.map(person => (
                <TinderCard className="swipe" key = {person.name} preventSwipe = {["up", "down"]} onSwipe={(dir)=>swipped(dir,person.name)} onCardLeftScreen={()=>outOfFrame(person.name)}>
                    <div className = "card" style = {{backgroundImage: `url(${person.url})`}}>
                        <h3>{person.name}</h3>
                        {/* <img src={person.url} alt = {person.name}/> */}
                    </div>
                </TinderCard>
            ))}
        </div>
    </div>
  )
}

export default TinderCards