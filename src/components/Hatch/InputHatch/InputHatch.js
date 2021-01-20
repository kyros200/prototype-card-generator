import React from 'react';
import './InputHatch.css'

const InputHatch = (props) => {
    return (
        <input {...props}  class={`input ${props.class}`}/>
    );
};

export default InputHatch;