import { exportComponentAsPNG } from 'react-component-export-image';
import React, { useRef } from 'react';
import layoutHelper from '../../helper/layoutHelper';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import './Card.css';

const ComponentToPrint = React.forwardRef((props, ref) => { 
    return (
        <div 
            ref={ref} 
            style={props.allInfo[props.selectedGame][props.selectedLayout].card}
        >
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
        <div class="containerCard">
            <div class="card-preview">
                <ComponentToPrint {...props} ref={componentRef} />
            </div>
            <div class="card-buttons">
                <ButtonHatch class="config max-width" onClick={() => exportComponentAsPNG(componentRef)}>
                    Export Card as PNG
                </ButtonHatch>
            </div>
        </div>
    );
};

export default Card;