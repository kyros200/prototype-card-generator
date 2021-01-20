import React from 'react';
import layoutHelper from '../../helper/layoutHelper';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import SelectHatch from '../Hatch/SelectHatch/SelectHatch';

const LayoutSelector = (props) => {
    const handleChageGame = (e) => {
        if (e.target.value === "")
            props.setSelectedLayout("");

        props.setSelectedGame(e.target.value);
    }

    return (
        <>
            <ButtonHatch class="config mini" key="gameModal" onClick={() => props.setModalGameEdit(true)}>
                Edit Games
            </ButtonHatch>
            <SelectHatch 
                key="game" 
                name="game" 
                id="game" 
                value={props.selectedGame} 
                onChange={(e) => {handleChageGame(e)}}
                emptyText="Select a Game..."
                options={layoutHelper.getGames(props).map(e => {return {value: e, text: e}})}
            />

            {props.selectedGame &&
            <>
                <ButtonHatch class="button config mini" key="layoutModal" onClick={() => props.setModalLayoutEdit(true)}>
                    Edit Layouts
                </ButtonHatch>
                <SelectHatch 
                    key="layout" 
                    name="layout" 
                    id="layout" 
                    value={props.selectedLayout} 
                    onChange={(e) => {props.setSelectedLayout(e.target.value)}}
                    emptyText="Select a Layout..."
                    options={layoutHelper.getLayouts(props, props.selectedGame).map(e => {return {value: e, text: e}})}
                />
            </>
            }
        </>
    );
};

export default LayoutSelector;