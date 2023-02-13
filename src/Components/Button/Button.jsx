import React from 'react';
import './Button.css';


const Button = (props) => {
    return ( <button id='next-button' onClick={props.updateClickCount} > NEXT CARD</button> );
}
 
export default Button;