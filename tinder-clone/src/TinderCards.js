import React, {useState} from 'react'
import "./TinderCards.css"
// import TinderCard from "react-tinder-card";

function TinderCards() {
    // defining the data set that will be shown in the Cards
    const [people, setPeople] = useState([
        {
            name: 'Steve Jobs',
            url: 'https://drive.google.com/uc?export=view&id=1I8HYnIC7mIPjNbNFCD8X2g5A3fAuGzOk'
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
            url: 'https://drive.google.com/uc?export=view&id=1FiBHatIkuK29g5T0ZO5TSl_JS4ICF85U'
        },
    ]);
    // Bad Practice : const People = []; people.push('John');
    // Good Practice : setPeople([...people, 'John']);
  return (
    <div className = "tinderCards">
        TinderCards
        {/* Map is used to iterate through all people objects */}
        {people.map(person => (

                <div className = "card">
                    {/* <h1>{person.name}</h1> */}
                    {/* <img src={person.url} alt = {person.name}/> */}
                </div>

        ))}
    </div>
  )
}

export default TinderCards