import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

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
                <button onClick={() => saveNewName()}>Save Name</button>
                }
            </>
            }
            <button onClick={() => newGame()}>New Game</button>
            {props.selectedGame &&
                (!confirmButton  ?
                <button disabled={name !== props.selectedGame} onClick={() => setConfirmButton(true)}>Delete Selected Game</button>
                :
                <button disabled={name !== props.selectedGame} onClick={() => deleteGame()}>Are you sure? Data will be deleted forever! (Click again to confirm)</button>
                )
            }
        </Modal>
    );
};

export default ModalGameEdit;