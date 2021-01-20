import React from 'react';
import Modal from 'react-modal';
import layoutHelper from '../../helper/layoutHelper';
import defaultFieldCSS from '../../helper/defaultFieldCSS';
import localStorageHelper from '../../helper/localStorageHelper';
import ButtonHatch from '../Hatch/ButtonHatch';

const ModalLayout = (props) => {
    const handleChangeStyle = (e, styleField, field) => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        let index = newAllInfo[props.selectedGame][props.selectedLayout].fields.map((f) => f.label).indexOf(field);
        newAllInfo[props.selectedGame][props.selectedLayout].fields[index]['styleField'][styleField] = e.target.value;
        props.setAllInfo(newAllInfo);
    }

    const handleChangeBase = (e, field, where) => {
        updateCardForm(e, field);

        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        let index = newAllInfo[props.selectedGame][props.selectedLayout].fields.map((f) => f.label).indexOf(field);
        newAllInfo[props.selectedGame][props.selectedLayout].fields[index][where] = e.target.value;
        props.setAllInfo(newAllInfo);
    }

    const handleChangeCard = (e, where) => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        newAllInfo[props.selectedGame][props.selectedLayout].card[where] = e.target.value;
        props.setAllInfo(newAllInfo);
    }

    const addField = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        const index = newAllInfo[props.selectedGame][props.selectedLayout].fields.length;
        newAllInfo[props.selectedGame][props.selectedLayout].fields.push({label:`NewField${index}`, type: "txt", styleField: defaultFieldCSS})
        props.setCardForm({...props.cardForm, [`NewField${index}`]: ""});
        props.setAllInfo(newAllInfo);
    }

    const removeField = (field) => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        let index = newAllInfo[props.selectedGame][props.selectedLayout].fields.map((f) => f.label).indexOf(field);
        newAllInfo[props.selectedGame][props.selectedLayout].fields.splice(index, 1);
        updateCardForm("", field, true);
        props.setAllInfo(newAllInfo);
    }

    const updateCardForm = (e, field, isDelete) => {
        let newCardForm = JSON.parse(JSON.stringify(props.cardForm));
        if (!isDelete)
            newCardForm[e.target.value] = props.cardForm[field];
        delete newCardForm[field];
        props.setCardForm(newCardForm);
    }

    const FieldsForm = (props) => {
        return (
            <>
                <h2>Fields</h2>
                <div style={{display: 'flex', margin: "8px 0px"}}>
                    <div style={{width: "3%"}} />
                    <div style={{width: "8%"}}>
                        Field Name
                    </div>
                    <div style={{width: "8%"}}>
                        Field Type
                    </div>
                    <div style={{width: "8%"}}>
                        Width
                    </div>
                    <div style={{width: "8%"}}>
                        Height
                    </div>
                    <div style={{width: "8%"}}>
                        Offset (Top)
                    </div>
                    <div style={{width: "8%"}}>
                        Offset (Left)
                    </div>
                    <div style={{width: "8%"}}>
                        Border
                    </div>
                    <div style={{width: "8%"}}>
                        Color Text
                    </div>
                    <div style={{width: "8%"}}>
                        Color Background
                    </div>
                    <div style={{width: "8%"}}>
                        Horizontal Align
                    </div>
                    <div style={{width: "8%"}}>
                        Vertical Align
                    </div>
                </div>
                {props.selectedGame && props.selectedLayout &&
                layoutHelper.getFields(props).map((f) =>
                    {
                    return (
                    <div style={{display: 'flex', margin: "8px 0px"}}>
                        <div style={{cursor: "pointer", width: "3%"}} onClick={() => removeField(f)}>
                            X
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeBase(e, f, "label")} value={layoutHelper.getField(props, f)[0].label} />
                        </div>
                        <select style={{width: "8%"}} key="type" name="type" id="type" value={layoutHelper.getField(props, f)[0].type} onChange={(e) => handleChangeBase(e, f, "type")}>
                            <option value="txt">Text</option>
                            <option value="img">Image</option>
                        </select>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeStyle(e, "width", f)} value={layoutHelper.getField(props, f)[0].styleField.width} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeStyle(e, "height", f)} value={layoutHelper.getField(props, f)[0].styleField.height} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeStyle(e, "top", f)} value={layoutHelper.getField(props, f)[0].styleField.top} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeStyle(e, "left", f)} value={layoutHelper.getField(props, f)[0].styleField.left} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeStyle(e, "border", f)} value={layoutHelper.getField(props, f)[0].styleField.border} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input disabled={layoutHelper.getType(props, f) !== "txt"} onChange={(e) => handleChangeStyle(e, "color", f)} value={layoutHelper.getField(props, f)[0].styleField.color} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input disabled={layoutHelper.getType(props, f) !== "txt"} onChange={(e) => handleChangeStyle(e, "backgroundColor", f)} value={layoutHelper.getField(props, f)[0].styleField.backgroundColor} />
                        </div>
                        <select disabled={layoutHelper.getType(props, f) !== "txt"} style={{width: "8%"}} key="justifyContent" name="justifyContent" id="justifyContent" value={layoutHelper.getField(props, f)[0].styleField.justifyContent} onChange={(e) => handleChangeStyle(e, "justifyContent", f)}>
                            <option value="flex-start">Left</option>
                            <option value="center">Center</option>
                            <option value="flex-end">Right</option>
                        </select>
                        <select disabled={layoutHelper.getType(props, f) !== "txt"} style={{width: "8%"}} key="alignItems" name="alignItems" id="alignItems" value={layoutHelper.getField(props, f)[0].styleField.alignItems} onChange={(e) => handleChangeStyle(e, "alignItems", f)}>
                            <option value="flex-start">Top</option>
                            <option value="center">Center</option>
                            <option value="flex-end">Bottom</option>
                        </select>
                    </div>
                    )}
                )}
                <ButtonHatch class="new" onClick={() => {addField()}}>Add Field</ButtonHatch>
                <ButtonHatch class="confirm" onClick={() => {props.save(); props.close()}}>Save</ButtonHatch>
            </>
        )
    }

    const CardForm = (props) => {
        return (
            <>
                <h2>Card</h2>
                <div style={{display: 'flex', margin: "8px 0px"}}>
                    <div style={{width: "8%"}}>
                        Width
                    </div>
                    <div style={{width: "8%"}}>
                        Height
                    </div>
                    <div style={{width: "8%"}}>
                        Border
                    </div>
                    <div style={{width: "8%"}}>
                        background Color
                    </div>
                </div>
                {props.selectedGame && props.selectedLayout &&
                (
                    <div style={{display: 'flex', margin: "8px 0px"}}>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeCard(e, "width")} value={layoutHelper.getCardStyle(props).width} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeCard(e, "height")} value={layoutHelper.getCardStyle(props).height} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeCard(e, "border")} value={layoutHelper.getCardStyle(props).border} />
                        </div>
                        <div style={{width: "8%"}}>
                            <input onChange={(e) => handleChangeCard(e, "backgroundColor")} value={layoutHelper.getCardStyle(props).backgroundColor} />
                        </div>
                    </div>
                )}
                <ButtonHatch class="confirm" onClick={() => {props.save(); props.close()}}>Save</ButtonHatch>
            </>
        )
    }
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
        >
            <button onClick={() => {props.close(); props.setAllInfo(localStorageHelper.getJSON())}}>Close</button>
            {CardForm(props)}
            {FieldsForm(props)}
        </Modal>
    );
};

export default ModalLayout;