import React from 'react';
import layoutHelper from '../../helper/layoutHelper';
import localStorageHelper from '../../helper/localStorageHelper';

/*
TODO

Colocar mais campos de layout pra tudo (ex: cor de fundo)
estilizar e ficar minimamente bonito
mudar o input de acordo com o type (txt ser campo livre, num ser apenas numero e virgula, img ter uma validacao de link)
*/

const Form = (props) => {
    const handleChange = (value, field) => {
        let newCardForm = {...props.cardForm};

        newCardForm[field] = value;

        props.setCardForm(newCardForm);
    }

    return (
        <>
            <button key="gameModal" onClick={() => props.setModalGameEdit(true)}>
                Edit Games
            </button>
            <select key="game" name="game" id="game" value={props.selectedGame} onChange={(e) => {props.setSelectedGame(e.target.value)}}>
                <option value="">Select a Game...</option>
                {layoutHelper.getGames(props).map((g) => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>

            {props.selectedGame &&
            <>
                <button key="layoutModal" onClick={() => props.setModalLayoutEdit(true)}>
                    Edit Layouts
                </button>
                <select key="layout" name="layout" id="layout" value={props.selectedLayout} onChange={(e) => {props.setSelectedLayout(e.target.value)}}
                >
                    <option value="" disabled>Select a Layout...</option>
                    {layoutHelper.getLayouts(props, props.selectedGame).map((l) => (
                        <option key={l} value={l}>{l}</option>
                    ))}
                </select>
            </>
            }

            {props.selectedLayout &&
            <button key="edit" onClick={() => props.setModalLayout(true)}>
                Edit this card layout
            </button>
            }

            {
            props.allInfo[props.selectedGame] &&
            (props.allInfo[props.selectedGame][props.selectedLayout] 
            ? 
            props.allInfo[props.selectedGame][props.selectedLayout].map((i) => {
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