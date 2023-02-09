import React, {useState} from "react";



function Card({flashcard}){
 const [flip,setFlip] = useState(false)
    return(
        <div className="card">
        <div className={`card ${flip ? 'flip' : ''}`} onClick={()=> setFlip(!flip)}>
            {flip ? flashcard.definition: flashcard.word}
        </div>
        </div>
    )

}
 
export default Card;