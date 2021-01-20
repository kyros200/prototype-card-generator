import React from 'react';
import './ButtonHatch.css'

const ButtonHatch = (props) => {
    return (
        <div class={`button ${props.class}`} style={props.style} key={props.key} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default ButtonHatch;