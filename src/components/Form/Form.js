import React from 'react';
import layouts from '../../helper/layouts'
import layoutHelper from '../../helper/layoutHelper';

/*
TODO

Colocar dropdown de Game
Colocar dropdow de Layout
Colocar mais campos de layout pra tudo (ex: cor de fundo)
estilizar e ficar minimamente bonito
mudar o input de acordo com o type (txt ser campo livre, num ser apenas numero e virgula, img ter uma validacao de link)
*/

const Form = (props) => {
    const handleChange = (value, field) => {
        let newInfo = {...props.info};

        newInfo[field] = value;

        props.setInfo(newInfo);
    }

    return (
        <>
            <select name="game" id="game" value={props.selectedGame} onChange={(e) => {props.setSelectedGame(e.target.value)}}>
                <option value="">Select a Game...</option>
                {layoutHelper.getGames().map((g) => (
                    <option value={g}>{g}</option>
                ))}
            </select>

            {props.selectedGame &&
            <select name="layout" id="layout" value={props.selectedLayout} onChange={(e) => {props.setSelectedLayout(e.target.value)}}
            >
                <option value="" disabled>Select a Layout...</option>
                {layoutHelper.getLayouts(props.selectedGame).map((l) => (
                    <option value={l}>{l}</option>
                ))}
            </select>
            }

            {
            layouts[props.selectedGame] &&
            (layouts[props.selectedGame][props.selectedLayout] 
            ? 
            layouts[props.selectedGame][props.selectedLayout].map((i) => {
                return(
                    <div>
                        <label>{`${i.label}`}</label>
                        <input onChange={(e) => handleChange(e.target.value, i.label)} value={props.info[i.label]} />
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