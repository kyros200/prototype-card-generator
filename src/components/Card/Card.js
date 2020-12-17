import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import './Card.css';
import components from '../../helper/layoutsComponents/index'


const ComponentToPrint = React.forwardRef((props, ref) => { 
    return (
        <div ref={ref} className={"card"}>
            {components[props.selectedGame][props.selectedLayout](props)}
        </div>
    )
});

const Card = (props) => {
    const componentRef = useRef();

    return (
        <>
            <ComponentToPrint {...props} ref={componentRef} />
            <button onClick={() => exportComponentAsPNG(componentRef)}>
                Export As PNG
            </button>
        </>
    );
};

export default Card;