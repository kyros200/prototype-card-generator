import React from 'react';
import layouts from '../../helper/layouts'

/*
TODO

Colocar dropdown de Game
Colocar dropdow de Layout
Colocar mais campos de layout pra tudo (cor de fundo)
estilizar e ficar minimamente bonito
mudar o input de acordo com o type
*/

const Form = (props) => {
    const handleChange = (value, field) => {
        let newInfo = {...props.info};

        newInfo[field] = value;

        props.setInfo(newInfo);
    }

    return (
        <>
            {layouts[props.selectedGame][props.selectedLayout].map((i) => {
                return(
                    <div>
                        <label>{`${i.label}`}</label>
                        <input onChange={(e) => handleChange(e.target.value, i.label)} value={props.info[i.label]} />
                    </div>
                )
            })}
        </>
    );
};

export default Form;