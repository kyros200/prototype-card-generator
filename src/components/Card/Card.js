import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import layoutHelper from '../../helper/layoutHelper';

const ComponentToPrint = React.forwardRef((props, ref) => { 
    return (
        <div 
            ref={ref} 
            style={{
                width: "8.8cm",
                height: "6.35cm",
                border: "0.1cm solid black",
                boxSizing: "border-box",
                position: "relative",
            }}
        >
            {/* {components[props.selectedGame][props.selectedLayout](props)} */}
            {Object.keys(props.cardForm).map(f => 
                {
                    switch(layoutHelper.getType(props, f)) {
                        case "txt":
                            return (
                                <div key={`field-${f}`} style={layoutHelper.getStyle(props, f)}>
                                    {props.cardForm[f]}
                                </div>
                            )
                        case "img":
                            return (
                                <div key={`field-${f}`} style={layoutHelper.getStyle(props, f)}>
                                    <img alt="" title={f} src={props.cardForm[f]} width="100%" height="100%" />
                                </div>
                            )
                        default:
                            return (
                                <div key={`field-${f}`} style={layoutHelper.getStyle(props, f)}>
                                    no type declared
                                </div>
                            )
                    }
                }
            )}
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