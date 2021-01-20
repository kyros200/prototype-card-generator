import React from 'react';
import './SelectHatch.css'

const SelectHatch = (props) => {
    return (
        <select 
            class={`select ${props.style}`}
            style={props.style}
            key={props.key} 
            name={props.name} 
            id={props.id} 
            value={props.value} 
            onChange={props.onChange}
        >
            {props.emptyText && <option value="">{props.emptyText}</option>}
            {props.options.map((g) => (
                <option class="option" key={g.value} value={g.value}>{g.text}</option>
            ))}
        </select>
    );
};

export default SelectHatch;