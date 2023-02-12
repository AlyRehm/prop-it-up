// always import this
import React from 'react';


// need to create a functional Component. the function itself, named the same as the File. set equal to an arrow function 
const PersonCard = (props) => {

    // required to return all our jsx including one parent component
    return (
        <div>
            <h1>{ props.firstName } { props.lastName } </h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    )
}


// always need to export 
export default PersonCard;