import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';
import Layouts from '../../helper/layouts'
import localStorageHelper from '../../helper/localStorageHelper';
import ModalLayout from '../ModalLayout/ModalLayout';

const Home = () => {
    const [layouts, setLayouts] = useState(localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : "");
    const [selectedGame, setSelectedGame] = useState("");
    const [selectedLayout, setSelectedLayout] = useState("");
    const [info, setInfo] = useState({});

    const [modalLayout, setModalLayout] = useState(false);

    useEffect(() => {
        setSelectedLayout("");
        setInfo({});
    }, [selectedGame])

    useEffect(() => {
        if(selectedLayout) {
            setInfo(localStorageHelper.formatInfo(selectedGame, selectedLayout));
        }
    }, [selectedLayout])

        // useEffect(() => {
        //     console.log(info);
        // }, [info])

    useEffect(() => {
        if(!layouts){
            alert("Local save not found, creating a new one!")
            localStorage.setItem("card-maker-najjar", JSON.stringify(Layouts))
            setLayouts(Layouts)
        }
    }, [layouts])

    return (
        <>
            <Form 
                layouts={layouts}
                setLayouts={(v) => setLayouts(v)}

                info={info}
                setInfo={(v) => setInfo(v)}

                selectedGame={selectedGame}
                setSelectedGame={(v) => setSelectedGame(v)}
                
                selectedLayout={selectedLayout}
                setSelectedLayout={(v) => setSelectedLayout(v)}

                setModalLayout = {(b) => setModalLayout(b)}
            />
            {selectedLayout &&
            <Card
                layouts={layouts}
                info={info}
                selectedGame={selectedGame}
                selectedLayout={selectedLayout}
            />
            }
            <ModalLayout
                layouts={layouts}
                selectedGame={selectedGame}
                selectedLayout={selectedLayout}
                setLayouts={(v) => setLayouts(v)}

                isOpen={modalLayout}
                close = {() => setModalLayout(false)}
                save = {() => localStorageHelper.saveLayout()}
            />
            
        </>
    );
};

export default Home;


