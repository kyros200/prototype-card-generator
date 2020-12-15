import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import './Card.css';

const ComponentToPrint = React.forwardRef((props, ref) => (
    <div ref={ref} className={"card"}>
        {props.info.name}
    </div>
));

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