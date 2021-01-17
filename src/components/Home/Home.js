import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import DefaultAllInfo from '../../helper/defaultAllInfo'
import localStorageHelper from '../../helper/localStorageHelper';
import ModalLayout from '../ModalLayout/ModalLayout';

const Home = () => {
    const [allInfo, setAllInfo] = useState(localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : "");
    const [selectedGame, setSelectedGame] = useState("");
    const [selectedLayout, setSelectedLayout] = useState("");
    const [cardForm, setCardForm] = useState({});

    const [modalLayout, setModalLayout] = useState(false);

    useEffect(() => {
        setSelectedLayout("");
        setCardForm({});
    }, [selectedGame])

    useEffect(() => {
        if(selectedLayout) {
            setCardForm(localStorageHelper.formatInfo(selectedGame, selectedLayout));
        }
    }, [selectedLayout])

        // useEffect(() => {
        //     console.log(cardForm);
        // }, [cardForm])

    useEffect(() => {
        if(!allInfo){
            alert("Local save not found, creating a new default one!")
            localStorage.setItem("card-maker-najjar", JSON.stringify(DefaultAllInfo))
            setAllInfo(DefaultAllInfo)
        }
    }, [allInfo])

    // useEffect(() => {
    //     console.log(allInfo)
    // }, [])

    return (
        <>
            <Form 
                allInfo={allInfo}
                setAllInfo={(v) => setAllInfo(v)}

                cardForm={cardForm}
                setCardForm={(v) => setCardForm(v)}

                selectedGame={selectedGame}
                setSelectedGame={(v) => setSelectedGame(v)}
                
                selectedLayout={selectedLayout}
                setSelectedLayout={(v) => setSelectedLayout(v)}

                setModalLayout = {(b) => setModalLayout(b)}
            />
            {selectedLayout &&
            <Card
                allInfo={allInfo}
                cardForm={cardForm}
                selectedGame={selectedGame}
                selectedLayout={selectedLayout}
            />
            }
            <ModalLayout
                allInfo={allInfo}
                setAllInfo={(v) => setAllInfo(v)}

                selectedGame={selectedGame}
                selectedLayout={selectedLayout}

                cardForm={cardForm}
                setCardForm={(i) => setCardForm(i)}

                isOpen={modalLayout}
                close = {() => setModalLayout(false)}
                save = {() => localStorageHelper.saveAllInfo(allInfo)}
            />
            
        </>
    );
};

export default Home;


