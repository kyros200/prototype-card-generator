import React from 'react';
import layoutHelper from '../../helper/layoutHelper';
import ButtonHatch from '../Hatch/ButtonHatch';

const LayoutSelector = (props) => {
    return (
        <>
            <ButtonHatch class="config mini" key="gameModal" onClick={() => props.setModalGameEdit(true)}>
                Edit Games
            </ButtonHatch>
            <select key="game" name="game" id="game" value={props.selectedGame} onChange={(e) => {props.setSelectedGame(e.target.value)}}>
                <option value="">Select a Game...</option>
                {layoutHelper.getGames(props).map((g) => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>

            {props.selectedGame &&
            <>
                <ButtonHatch class="button config mini" key="layoutModal" onClick={() => props.setModalLayoutEdit(true)}>
                    Edit Layouts
                </ButtonHatch>
                <select key="layout" name="layout" id="layout" value={props.selectedLayout} onChange={(e) => {props.setSelectedLayout(e.target.value)}}
                >
                    <option value="" disabled>Select a Layout...</option>
                    {layoutHelper.getLayouts(props, props.selectedGame).map((l) => (
                        <option key={l} value={l}>{l}</option>
                    ))}
                </select>
            </>
            }
        </>
    );
};

export default LayoutSelector;