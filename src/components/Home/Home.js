import React, { useEffect, useState } from 'react';
import LayoutSelector from '../LayoutSelector/LayoutSelector';
import Form from '../Form/Form';
import Card from '../Card/Card';
import DefaultAllInfo from '../../helper/defaultAllInfo'
import localStorageHelper from '../../helper/localStorageHelper';
import ModalLayout from '../ModalLayout/ModalLayout';
import ModalLayoutEdit from '../ModalLayoutEdit/ModalLayoutEdit';
import ModalGameEdit from '../ModalGameEdit/ModalGameEdit';
import layoutHelper from '../../helper/layoutHelper';
import hatchLogo from '../../images/hatch-transparent.png';
import github from '../../images/githubIcon.png';

const Home = () => {
    const [allInfo, setAllInfo] = useState(localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : "");
    const [selectedGame, setSelectedGame] = useState("");
    const [selectedLayout, setSelectedLayout] = useState("");
    const [cardForm, setCardForm] = useState({});

    const [modalLayout, setModalLayout] = useState(false);
    const [modalLayoutEdit, setModalLayoutEdit] = useState(false);
    const [modalGameEdit, setModalGameEdit] = useState(false);

    useEffect(() => {
        setSelectedLayout("");
        setCardForm({});
    }, [selectedGame])

    useEffect(() => {
        if(selectedLayout) {
            setCardForm(layoutHelper.formatInfo(allInfo, selectedGame, selectedLayout));
        }
    }, [selectedLayout, allInfo, selectedGame])

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
        <div class="home">
            <div class="navbar">
                <div class="logo">
                    <img alt="HATCH" src={hatchLogo} width="50px" height="50px" />
                </div>
                <div class="title">
                    prototype-card-generator
                </div>
                <div class="github">
                    <a href="https://github.com/kyros200/prototype-card-generator" target="_blank" rel="noreferrer">
                        <img alt="Github" title="Go to Repo!" src={github} width="50px" height="50px" />
                    </a>
                </div>
            </div>
            <div class="project">
                <div class="left-side">
                    <div class="top-side">
                        <LayoutSelector
                            allInfo={allInfo}
                            
                            selectedGame={selectedGame}
                            setSelectedGame={(v) => setSelectedGame(v)}
                            
                            selectedLayout={selectedLayout}
                            setSelectedLayout={(v) => setSelectedLayout(v)}

                            setModalLayoutEdit = {(b) => setModalLayoutEdit(b)}
                            setModalGameEdit = {(b) => setModalGameEdit(b)}
                        />
                    </div>
                    {selectedLayout && 
                    <div class="bottom-side">
                        <Form 
                            allInfo={allInfo}

                            cardForm={cardForm}
                            setCardForm={(v) => setCardForm(v)}

                            selectedGame={selectedGame}
                            setSelectedGame={(v) => setSelectedGame(v)}
                            
                            selectedLayout={selectedLayout}
                            setSelectedLayout={(v) => setSelectedLayout(v)}

                            setModalLayout = {(b) => setModalLayout(b)}
                            setModalLayoutEdit = {(b) => setModalLayoutEdit(b)}
                            setModalGameEdit = {(b) => setModalGameEdit(b)}
                        />
                    </div>
                    }
                </div>
                {selectedLayout && 
                <div class="right-side">
                    {selectedLayout &&
                    <Card
                        allInfo={allInfo}
                        cardForm={cardForm}
                        selectedGame={selectedGame}
                        selectedLayout={selectedLayout}
                    />
                    }
                </div>
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
                <ModalLayoutEdit 
                    isOpen={modalLayoutEdit}
                    close = {() => setModalLayoutEdit(false)}

                    selectedLayout={selectedLayout}
                    setSelectedLayout={(v) => setSelectedLayout(v)}
                    selectedGame={selectedGame}

                    allInfo={allInfo}
                    setAllInfo={(v) => setAllInfo(v)}
                    save = {(a) => localStorageHelper.saveAllInfo(a)}
                />
                <ModalGameEdit 
                    isOpen={modalGameEdit}
                    close = {() => setModalGameEdit(false)}

                    selectedGame={selectedGame}
                    setSelectedGame={(v) => setSelectedGame(v)}
                    setSelectedLayout={(v) => setSelectedLayout(v)}

                    allInfo={allInfo}
                    setAllInfo={(v) => setAllInfo(v)}
                    save = {(a) => localStorageHelper.saveAllInfo(a)}
                />
            </div>            
        </div>
    );
};

export default Home;


