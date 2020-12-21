import layouts from './layouts'

const getType = (props, i) => {
    return layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].type;
}

const getStyle = (props, i) => {
    return layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].style;
}

const getGames = () => {
    return Object.keys(layouts);
}

const getLayouts = (game) => {
    return game ? Object.keys(layouts[game]) : ['a'];
}

export default {getType, getStyle, getGames, getLayouts};