import React from 'react';


const Collection = ({collection, getAllCards}) => {

    function handleClick () {
        console.log(collection.id) 
        getAllCards(collection.id);

    }
    return ( <div onClick={handleClick}>
        {collection.title}
    </div> );
}
 
export default Collection;

