import React from "react";
import Card from "../Card/Card";

function CardList({flashcards}){
   
    return(
        <div class id= 'card-grid'>
            {flashcards.map(flashcard => {
                return <Card flashcard={flashcard} key={flashcard.id}/>
            })}

        </div>
    )
}
 
export default CardList;