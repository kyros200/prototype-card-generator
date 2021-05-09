import React from 'react';
import Modal from 'react-modal';
import layoutHelper from '../../helper/layoutHelper';
import defaultFieldCSS from '../../helper/defaultFieldCSS';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import SelectHatch from '../Hatch/SelectHatch/SelectHatch';
import InputHatch from '../Hatch/InputHatch/InputHatch';
import CloseIcon from '../../images/closeIcon.png';

const ModalLayout = (props) => {
    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "16px",
            overflowY: "scroll",
            maxHeight: "90%",
            maxWidth: "90%"
        }
    };

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
                <div>
                    {props.selectedGame && props.selectedLayout &&
                    layoutHelper.getFields(props).map((f) =>
                        {
                        return (
                        <div style={{
                            display: 'flex', 
                            flexDirection:"column",
                            border: "1px solid black", 
                            borderRadius: "16px", 
                            boxShadow: "3px 5px rgba(0,0,0,0.3)", 
                            padding: "16px",
                            marginBottom: "16px"
                        }}>
                            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                                <h3 style={{marginTop: "0px"}}>{layoutHelper.getField(props, f)[0].label}</h3>
                                <img width="16px" height="16px" style={{cursor: "pointer"}} onClick={() => removeField(f)} src={CloseIcon} alt="Close"/>
                            </div>
                            <div style={{
                            display: 'flex', 
                            flexWrap: "wrap", 
                            }}>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Field Name</label>
                                    <InputHatch onChange={(e) => handleChangeBase(e, f, "label")} value={layoutHelper.getField(props, f)[0].label} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Field Type</label>
                                    <SelectHatch 
                                    key="type" 
                                    name="type" 
                                    id="type" 
                                    value={layoutHelper.getField(props, f)[0].type} 
                                    onChange={(e) => handleChangeBase(e, f, "type")}
                                    emptyText=""
                                    options={[{value: "txt", text: "Text"}, {value: "img", text: "Image"}]}
                                    />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Width</label>
                                    <InputHatch onChange={(e) => handleChangeStyle(e, "width", f)} value={layoutHelper.getField(props, f)[0].styleField.width} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Height</label>
                                    <InputHatch onChange={(e) => handleChangeStyle(e, "height", f)} value={layoutHelper.getField(props, f)[0].styleField.height} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Offset (Top)</label>
                                    <InputHatch onChange={(e) => handleChangeStyle(e, "top", f)} value={layoutHelper.getField(props, f)[0].styleField.top} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Offset (Left)</label>
                                    <InputHatch onChange={(e) => handleChangeStyle(e, "left", f)} value={layoutHelper.getField(props, f)[0].styleField.left} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Border</label>
                                    <InputHatch onChange={(e) => handleChangeStyle(e, "border", f)} value={layoutHelper.getField(props, f)[0].styleField.border} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Color Text</label>
                                    <InputHatch disabled={layoutHelper.getType(props, f) !== "txt"} onChange={(e) => handleChangeStyle(e, "color", f)} value={layoutHelper.getField(props, f)[0].styleField.color} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Color Background</label>
                                    <InputHatch disabled={layoutHelper.getType(props, f) !== "txt"} onChange={(e) => handleChangeStyle(e, "backgroundColor", f)} value={layoutHelper.getField(props, f)[0].styleField.backgroundColor} />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Horizontal Align</label>
                                    <SelectHatch 
                                        disabled={layoutHelper.getType(props, f) !== "txt"}
                                        key="justifyContent" 
                                        name="justifyContent" 
                                        id="justifyContent" 
                                        value={layoutHelper.getField(props, f)[0].styleField.justifyContent} 
                                        onChange={(e) => handleChangeStyle(e, "justifyContent", f)}
                                        emptyText=""
                                        options={[{text: "Left", value:"flex-start"}, {text: "Center", value:"center"}, {text: "Right", value:"flex-end"}]}
                                    />
                                </div>
                                <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                                    <label for="">Vertical Align</label>
                                    <SelectHatch 
                                        disabled={layoutHelper.getType(props, f) !== "txt"}
                                        key="alignItems" 
                                        name="alignItems" 
                                        id="alignItems" 
                                        value={layoutHelper.getField(props, f)[0].styleField.alignItems}
                                        onChange={(e) => handleChangeStyle(e, "alignItems", f)}
                                        emptyText=""
                                        options={[{text: "Top", value:"flex-start"}, {text: "Center", value:"center"}, {text: "Bottom", value:"flex-end"}]}
                                    />
                                </div>
                            </div>
                        </div>
                        )}
                    )}
                </div>
            </>
        )
    }

    const CardForm = (props) => {
        return (
            <div style={{
                border:"1px solid black", 
                borderRadius:"16px", 
                boxShadow: "3px 5px rgba(0,0,0,0.3)",
                padding: "16px"
            }}>
                <div style={{display: 'flex', flexWrap:"wrap"}}>
                    <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                        <label for="">Width</label>
                        <InputHatch onChange={(e) => handleChangeCard(e, "width")} value={layoutHelper.getCardStyle(props).width} />
                    </div>
                    <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                        <label for="">Height</label>
                        <InputHatch onChange={(e) => handleChangeCard(e, "height")} value={layoutHelper.getCardStyle(props).height} />
                    </div>
                    <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                        <label for="">Border</label>
                        <InputHatch onChange={(e) => handleChangeCard(e, "border")} value={layoutHelper.getCardStyle(props).border} />
                    </div>
                    <div style={{display: 'flex', flexDirection:"column", marginRight:"16px"}}>
                        <label for="">Background Color</label>
                        <InputHatch onChange={(e) => handleChangeCard(e, "backgroundColor")} value={layoutHelper.getCardStyle(props).backgroundColor} />
                    </div>
                </div>
                <ButtonHatch class="confirm" onClick={() => {props.save(); props.close()}}>Save</ButtonHatch>
            </div>
        )
    }
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
            style={customStyles}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => props.close()}
        >
            <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                <h2 style={{marginTop: "0px"}}>Card</h2>
                <img alt="" width="16px" height="16px" style={{cursor: "pointer"}} onClick={() => props.close()} src={CloseIcon} />
            </div>
            {CardForm(props)}
            {FieldsForm(props)}
            <div style={{display:"flex"}}>
                <ButtonHatch class="new" onClick={() => {addField()}}>Add Field</ButtonHatch>
                <ButtonHatch class="confirm" onClick={() => {props.save(); props.close()}}>Save</ButtonHatch>
            </div>
        </Modal>
    );
};

export default ModalLayout;