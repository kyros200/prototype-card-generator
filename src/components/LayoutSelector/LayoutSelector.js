import React from 'react';
import layoutHelper from '../../helper/layoutHelper';
import ButtonHatch from '../Hatch/ButtonHatch/ButtonHatch';
import SelectHatch from '../Hatch/SelectHatch/SelectHatch';
import './LayoutSelector.css';

const LayoutSelector = (props) => {
    const handleChageGame = (e) => {
        if (e.target.value === "")
            props.setSelectedLayout("");

        props.setSelectedGame(e.target.value);
    }

    return (
        <div class="container-selector">
            <div class="field" style={{marginRight: "8px"}}>
                <SelectHatch 
                    key="game"
                    name="game" 
                    id="game" 
                    value={props.selectedGame} 
                    onChange={(e) => {handleChageGame(e)}}
                    emptyText="Select a Game..."
                    options={layoutHelper.getGames(props).map(e => {return {value: e, text: e}})}
                />
                <ButtonHatch class="config mini" key="gameModal" onClick={() => props.setModalGameEdit(true)}>
                    Edit Games
                </ButtonHatch>
            </div>

            {props.selectedGame &&
            <div class="field">
                <SelectHatch 
                    key="layout" 
                    name="layout" 
                    id="layout" 
                    value={props.selectedLayout} 
                    onChange={(e) => {props.setSelectedLayout(e.target.value)}}
                    emptyText="Select a Layout..."
                    options={layoutHelper.getLayouts(props, props.selectedGame).map(e => {return {value: e, text: e}})}
                />
                <ButtonHatch class="button config mini" key="layoutModal" onClick={() => props.setModalLayoutEdit(true)}>
                    Edit Layouts
                </ButtonHatch>
            </div>
            }
        </div>
    );
};

export default LayoutSelector;