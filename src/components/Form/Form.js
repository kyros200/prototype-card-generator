import React from 'react';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import InputHatch from '../Hatch/InputHatch/InputHatch';
import './Form.css';

const Form = (props) => {
    const handleChange = (value, field) => {
        let newCardForm = {...props.cardForm};

        newCardForm[field] = value;

        props.setCardForm(newCardForm);
    }

    return (
        <div class="formContainer">
            {props.selectedLayout &&
            <ButtonHatch class="config" key="edit" onClick={() => props.setModalLayout(true)}>
                Edit this card layout
            </ButtonHatch>
            }

            <div class="fieldsContainer">
                {
                props.allInfo[props.selectedGame] &&
                (props.allInfo[props.selectedGame][props.selectedLayout] 
                ? 
                props.allInfo[props.selectedGame][props.selectedLayout].fields.map((i) => {
                    return(
                        <div key={`field-${i.label}`} class="fieldContainer">
                            <div class="field-label">
                                {`${i.label}`}
                            </div>
                            <div class="field-input">
                                <InputHatch onChange={(e) => handleChange(e.target.value, i.label)} value={props.cardForm[i.label]} />
                            </div>
                        </div>
                    )
                })
                : 
                <></>)
                }
            </div>
        </div>
    );
};

export default Form;