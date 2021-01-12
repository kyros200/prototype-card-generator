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
            {Object.keys(props.info).map(f => 
                {
                    switch(layoutHelper.getType(props, f)) {
                        case "txt":
                            return (
                                <div style={layoutHelper.getStyle(props, f)}>
                                    {props.info[f]}
                                </div>
                            )
                        case "img":
                            return (
                                <div style={layoutHelper.getStyle(props, f)}>
                                    <img alt={f} src={props.info[f]} width="100%" height="100%" />
                                </div>
                            )
                        default:
                            return (
                                <div style={layoutHelper.getStyle(props, f)}>
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