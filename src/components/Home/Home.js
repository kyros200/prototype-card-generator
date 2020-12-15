import React, { useState } from 'react';
import Form from '../Form/Form';
import Card from '../Card/Card';

const Home = () => {
    const [info, setInfo] = useState({});

    return (
        <>
            <Form 
                info={info}
                setInfo={(v) => setInfo(v)}
            />
            <Card
                info={info}
                setInfo={(v) => setInfo(v)}
            />
        </>
    );
};

export default Home;


