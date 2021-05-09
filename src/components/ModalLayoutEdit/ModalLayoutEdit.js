import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import defaultCardCSS from '../../helper/defaultCardCSS';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import InputHatch from '../Hatch/InputHatch/InputHatch';
import CloseIcon from '../../images/closeIcon.png';

const ModalLayoutEdit = (props) => {
    const [name, setName] = useState("");
    const [confirmButton, setConfirmButton] = useState(false);

    const customStyles = {
        content : {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            borderRadius: "16px"
        }
    };

    useEffect(() => {
        setName(props.selectedLayout);
    }, [props.selectedLayout]);

    const saveNewName = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        newAllInfo[props.selectedGame][name] = props.allInfo[props.selectedGame][props.selectedLayout];
        delete newAllInfo[props.selectedGame][props.selectedLayout];

        props.setSelectedLayout(name);
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
        props.close();
    }

    const newLayout = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        const index = Object.keys(newAllInfo[props.selectedGame]).length + 1;
        newAllInfo[props.selectedGame][`NewLayout${index}`] = {
            fields: [],
            card: defaultCardCSS
        };
        props.setSelectedLayout(`NewLayout${index}`);
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
    }

    const deleteLayout = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        props.setSelectedLayout("");
        delete newAllInfo[props.selectedGame][props.selectedLayout];
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
        setConfirmButton(false);
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
                Layout Info
                <img alt="" width="16px" height="16px" style={{cursor: "pointer"}} onClick={() => props.close()} src={CloseIcon} />
            </div>
            {props.selectedLayout &&
            <div>
                <InputHatch onChange={(e) => setName(e.target.value)} value={name} />
                {props.selectedLayout !== name && 
                <ButtonHatch class="confirm" onClick={() => saveNewName()}>Save Name</ButtonHatch>
                }
            </div>
            }
            <ButtonHatch class="new" onClick={() => newLayout()}>New Layout</ButtonHatch>
            {props.selectedLayout &&
                (!confirmButton  ?
                <ButtonHatch class="reject" disabled={name !== props.selectedLayout} onClick={() => setConfirmButton(true)}>Delete Selected Layout</ButtonHatch>
                :
                <ButtonHatch class="reject" disabled={name !== props.selectedLayout} onClick={() => deleteLayout()}>Are you sure? Data will be deleted forever! (Click again to confirm)</ButtonHatch>
                )
            }
        </Modal>
    );
};

export default ModalLayoutEdit;