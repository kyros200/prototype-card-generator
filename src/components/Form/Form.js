import React from 'react';

const Form = (props) => {
    const handleChange = (value, field) => {
        let newInfo = {...props.info};

        newInfo[field] = value;

        props.setInfo(newInfo);
    }

    return (
        <>
            <input onChange={(e) => handleChange(e.target.value, 'name')} value={props.info.name} />
            <input onChange={(e) => handleChange(e.target.value, 'rp')} value={props.info.rp} />
            <input onChange={(e) => handleChange(e.target.value, 'hp')} value={props.info.hp} />
            <input onChange={(e) => handleChange(e.target.value, 'vp')} value={props.info.vp} />
            <input onChange={(e) => handleChange(e.target.value, 'active')} value={props.info.active} />
            <input onChange={(e) => handleChange(e.target.value, 'activeImage')} value={props.info.activeImage} />
            <input onChange={(e) => handleChange(e.target.value, 'activeDesc')} value={props.info.activeDesc} />
            <input onChange={(e) => handleChange(e.target.value, 'special')} value={props.info.special} />
            <input onChange={(e) => handleChange(e.target.value, 'specialImage')} value={props.info.specialImage} />
            <input onChange={(e) => handleChange(e.target.value, 'specialDesc')} value={props.info.specialDesc} />
            {props.info.name}
        </>
    );
};

export default Form;


