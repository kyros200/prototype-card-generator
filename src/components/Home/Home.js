import React, { useEffect, useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';

const Home = () => {
    const [selectedGame, setSelectedGame] = useState("galm");
    const [selectedLayout, setSelectedLayout] = useState("humano");
    const [info, setInfo] = useState({});

    // useEffect(() => {
    //     console.log(info);
    // }, [info])

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
            <Card
                info={info}
                setInfo={(v) => setInfo(v)}

                selectedGame={selectedGame}
                setSelectedGame={(v) => setSelectedGame(v)}
                
                selectedLayout={selectedLayout}
                setSelectedLayout={(v) => setSelectedLayout(v)}
            />
        </>
    );
};

export default Home;


