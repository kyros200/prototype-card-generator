import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import DefaultLayout from '../../helper/defaultLayouts'
import localStorageHelper from '../../helper/localStorageHelper';
import ModalLayout from '../ModalLayout/ModalLayout';

const Home = () => {
    const [layouts, setLayouts] = useState(localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : "");
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
        if(!layouts){
            alert("Local save not found, creating a new default one!")
            localStorage.setItem("card-maker-najjar", JSON.stringify(DefaultLayout))
            setLayouts(DefaultLayout)
        }
    }, [layouts])

    // useEffect(() => {
    //     console.log(layouts)
    // }, [])

    return (
        <>
            <Form 
                layouts={layouts}
                setLayouts={(v) => setLayouts(v)}

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
                layouts={layouts}
                cardForm={cardForm}
                selectedGame={selectedGame}
                selectedLayout={selectedLayout}
            />
            }
            <ModalLayout
                layouts={layouts}
                setLayouts={(v) => setLayouts(v)}

                selectedGame={selectedGame}
                selectedLayout={selectedLayout}

                cardForm={cardForm}
                setCardForm={(i) => setCardForm(i)}

                isOpen={modalLayout}
                close = {() => setModalLayout(false)}
                save = {() => localStorageHelper.saveLayout(layouts)}
            />
            
        </>
    );
};

export default Home;


