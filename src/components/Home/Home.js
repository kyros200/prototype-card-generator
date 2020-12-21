import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';

const Home = () => {
    const [selectedGame, setSelectedGame] = useState("");
    const [selectedLayout, setSelectedLayout] = useState("");
    const [info, setInfo] = useState({});

    useEffect(() => {
        setSelectedLayout("");
    }, [selectedGame])

    return (
        <>
            <Form 
                info={info}
                setInfo={(v) => setInfo(v)}

                selectedGame={selectedGame}
                setSelectedGame={(v) => setSelectedGame(v)}
                
                selectedLayout={selectedLayout}
                setSelectedLayout={(v) => setSelectedLayout(v)}
            />
            {selectedLayout &&
            <Card
                info={info}
                selectedGame={selectedGame}
                selectedLayout={selectedLayout}
            />
            }
        </>
    );
};

export default Home;


