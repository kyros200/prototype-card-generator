import React, { useEffect } from 'react';
import layoutHelper from '../../helper/layoutHelper';

const LayoutSelector = (props) => {
    useEffect(() => {
        console.log(props);
    }, [])
    return (
        <>
            <div class="button config" key="gameModal" onClick={() => props.setModalGameEdit(true)}>
                Edit Games
            </div>
            <select key="game" name="game" id="game" value={props.selectedGame} onChange={(e) => {props.setSelectedGame(e.target.value)}}>
                <option value="">Select a Game...</option>
                {layoutHelper.getGames(props).map((g) => (
                    <option key={g} value={g}>{g}</option>
                ))}
            </select>

            {props.selectedGame &&
            <>
                <div class="button config" key="layoutModal" onClick={() => props.setModalLayoutEdit(true)}>
                    Edit Layouts
                </div>
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