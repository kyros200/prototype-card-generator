import React from 'react';
import ButtonHatch from '../Hatch/ButtonHatch';

const Form = (props) => {
    const handleChange = (value, field) => {
        let newCardForm = {...props.cardForm};

        newCardForm[field] = value;

        props.setCardForm(newCardForm);
    }

    return (
        <>
            {props.selectedLayout &&
            <ButtonHatch class="config" key="edit" onClick={() => props.setModalLayout(true)}>
                Edit this card layout
            </ButtonHatch>
            }

            {
            props.allInfo[props.selectedGame] &&
            (props.allInfo[props.selectedGame][props.selectedLayout] 
            ? 
            props.allInfo[props.selectedGame][props.selectedLayout].fields.map((i) => {
                return(
                    <div key={`field-${i.label}`}>
                        <label>{`${i.label}`}</label>
                        <input onChange={(e) => handleChange(e.target.value, i.label)} value={props.cardForm[i.label]} />
                    </div>
                )
            })
            : 
            <></>)
            }
        </>
    );
};

export default Form;