import React from 'react';
import './ButtonHatch.css'

const ButtonHatch = (props) => {
    return (
        <div class={`button ${props.class}`} key={props.key} onClick={props.onClick}>
            {props.children}
        </div>
    );
};

export default ButtonHatch;