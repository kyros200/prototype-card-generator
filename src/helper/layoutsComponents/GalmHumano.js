import React from 'react';
import layouts from '../layouts';

const GalmHumano = (props) => {
    const getType = (i) => {
        return layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].type;
    }

    const getStyle = (i) => {
        return layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].style;
    }

    return (
        <>
            <div style={getStyle("name")}>
                {props.info.name}
            </div>
        </>
    )
}

export default GalmHumano;