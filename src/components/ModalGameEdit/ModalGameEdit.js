import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';

const ModalGameEdit = (props) => {
    const [name, setName] = useState("");
    const [confirmButton, setConfirmButton] = useState(false);

    useEffect(() => {
        setName(props.selectedGame);
    }, [props.selectedGame])

    const saveNewName = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        newAllInfo[name] = props.allInfo[props.selectedGame];
        delete newAllInfo[props.selectedGame];

        props.setSelectedLayout("");
        props.setSelectedGame(name);
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
        props.close();
    }

    const newGame = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        const index = Object.keys(newAllInfo).length + 1;
        newAllInfo[`NewGame${index}`] = {};
        props.setSelectedLayout("");
        props.setSelectedGame(`NewGame${index}`);
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
    }

    const deleteGame = () => {
        let newAllInfo = JSON.parse(JSON.stringify(props.allInfo));
        
        props.setSelectedLayout("");
        props.setSelectedGame("");
        delete newAllInfo[props.selectedGame];
        props.setAllInfo(newAllInfo);
        props.save(newAllInfo);
        setConfirmButton(false);
    }
    
    return (
        <Modal
            isOpen={props.isOpen}
            ariaHideApp={false}
        >
            <button onClick={() => props.close()}>Close</button>
            <h2>Game Info</h2>
            {props.selectedGame &&
            <>
                <input onChange={(e) => setName(e.target.value)} value={name} />
                {props.selectedGame !== name && 
                <div  class="button confirm" onClick={() => saveNewName()}>Save Name</div>
                }
            </>
            }
            <ButtonHatch class="new" onClick={() => newGame()}>New Game</ButtonHatch>
            {props.selectedGame &&
                (!confirmButton  ?
                <ButtonHatch class="reject" disabled={name !== props.selectedGame} onClick={() => setConfirmButton(true)}>Delete Selected Game</ButtonHatch>
                :
                <ButtonHatch class="reject" disabled={name !== props.selectedGame} onClick={() => deleteGame()}>Are you sure? Data will be deleted forever! (Click again to confirm)</ButtonHatch>
                )
            }
        </Modal>
    );
};

export default ModalGameEdit;