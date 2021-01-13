import React from 'react';
import Modal from 'react-modal';
import layoutHelper from '../../helper/layoutHelper';

const ModalLayout = (props) => {
    const handleChange = (e, styleField, field) => {
        let newLayouts = JSON.parse(JSON.stringify(props.layouts));

        let index = newLayouts[props.selectedGame][props.selectedLayout].map((f) => f.label).indexOf(field);

        newLayouts[props.selectedGame][props.selectedLayout][index]['styleField'][styleField] = e.target.value;

        props.setLayouts(newLayouts)
    }
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
        >
            <button onClick={() => props.close()}>Close</button>
            <div style={{display: 'flex', margin: "8px 0px"}}>
                <div style={{width: "20%"}}>
                    Field Name
                </div>
                <div style={{width: "20%"}}>
                    Width
                </div>
                <div style={{width: "20%"}}>
                    Height
                </div>
                <div style={{width: "20%"}}>
                    Offset (Top)
                </div>
                <div style={{width: "20%"}}>
                    Offset (Left)
                </div>
                <div style={{width: "20%"}}>
                    Border
                </div>
            </div>
            {props.selectedGame && props.selectedLayout &&
            layoutHelper.getFields(props).map((f) =>
                {
                // console.log(layoutHelper.getField(props, f)[0])
                return (
                <div style={{display: 'flex', margin: "8px 0px"}}>
                    <div style={{width: "20%"}}>
                        {f}
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChange(e, "width", f)} value={layoutHelper.getField(props, f)[0].styleField.width} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChange(e, "height", f)} value={layoutHelper.getField(props, f)[0].styleField.height} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChange(e, "top", f)} value={layoutHelper.getField(props, f)[0].styleField.top} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChange(e, "left", f)} value={layoutHelper.getField(props, f)[0].styleField.left} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChange(e, "border", f)} value={layoutHelper.getField(props, f)[0].styleField.border} />
                    </div>
                </div>
                )}
            )}
            <button onClick={() => props.save()}>Save</button>
        </Modal>
    );
};

export default ModalLayout;