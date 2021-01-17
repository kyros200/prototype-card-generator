import React from 'react';
import Modal from 'react-modal';
import layoutHelper from '../../helper/layoutHelper';
import defaultFieldCSS from '../../helper/defaultFieldCSS';

const ModalLayout = (props) => {
    const handleChangeStyle = (e, styleField, field) => {
        let newLayouts = JSON.parse(JSON.stringify(props.layouts));

        let index = newLayouts[props.selectedGame][props.selectedLayout].map((f) => f.label).indexOf(field);

        newLayouts[props.selectedGame][props.selectedLayout][index]['styleField'][styleField] = e.target.value;

        props.setLayouts(newLayouts);
    }

    const handleChangeLabel = (e, field) => {
        updateCardForm(e, field);

        let newLayouts = JSON.parse(JSON.stringify(props.layouts));
        let index = newLayouts[props.selectedGame][props.selectedLayout].map((f) => f.label).indexOf(field);
        newLayouts[props.selectedGame][props.selectedLayout][index].label = e.target.value;
        props.setLayouts(newLayouts);
    }

    const addField = () => {
        let newLayouts = JSON.parse(JSON.stringify(props.layouts));

        const index = newLayouts[props.selectedGame][props.selectedLayout].length;

        newLayouts[props.selectedGame][props.selectedLayout].push({label:`NewField${index}`, type: "txt", styleField: defaultFieldCSS})

        props.setCardForm({...props.cardForm, [`NewField${index}`]: ""});
        props.setLayouts(newLayouts);
    }

    const removeField = (field) => {
        let newLayouts = JSON.parse(JSON.stringify(props.layouts));

        let index = newLayouts[props.selectedGame][props.selectedLayout].map((f) => f.label).indexOf(field);

        newLayouts[props.selectedGame][props.selectedLayout].splice(index, 1);

        updateCardForm("", field, true);

        props.setLayouts(newLayouts);
    }

    function updateCardForm(e, field, isDelete) {
        let newCardForm = JSON.parse(JSON.stringify(props.cardForm));
        if (!isDelete)
            newCardForm[e.target.value] = props.cardForm[field];
        delete newCardForm[field];
        props.setCardForm(newCardForm);
    }
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
        >
            <button onClick={() => props.close()}>Close</button>
            <div style={{display: 'flex', margin: "8px 0px"}}>
                <div style={{width: "3%"}} />
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
                <div style={{width: "20%"}}>
                    Color Text
                </div>
                <div style={{width: "20%"}}>
                    Color Background
                </div>
            </div>
            {props.selectedGame && props.selectedLayout &&
            layoutHelper.getFields(props).map((f) =>
                {
                // console.log(layoutHelper.getField(props, f)[0])
                return (
                <div style={{display: 'flex', margin: "8px 0px"}}>
                    <div style={{cursor: "pointer", width: "3%"}} onClick={() => removeField(f)}>
                        X
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeLabel(e, f)} value={layoutHelper.getField(props, f)[0].label} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "width", f)} value={layoutHelper.getField(props, f)[0].styleField.width} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "height", f)} value={layoutHelper.getField(props, f)[0].styleField.height} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "top", f)} value={layoutHelper.getField(props, f)[0].styleField.top} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "left", f)} value={layoutHelper.getField(props, f)[0].styleField.left} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "border", f)} value={layoutHelper.getField(props, f)[0].styleField.border} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "color", f)} value={layoutHelper.getField(props, f)[0].styleField.color} />
                    </div>
                    <div style={{width: "20%"}}>
                        <input onChange={(e) => handleChangeStyle(e, "backgroundColor", f)} value={layoutHelper.getField(props, f)[0].styleField.backgroundColor} />
                    </div>
                </div>
                )}
            )}
            <button onClick={() => {addField()}}>Add Field</button>
            <button onClick={() => {props.save(); props.close()}}>Save</button>
        </Modal>
    );
};

export default ModalLayout;