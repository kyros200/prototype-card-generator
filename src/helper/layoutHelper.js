const getField = (props, i) => {
    return (props.selectedGame && props.selectedLayout) ? props.allInfo[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i}) : [];
}

const getType = (props, i) => {
    return getField(props, i).length > 0 ? getField(props, i)[0].type : "txt";
}

const getGames = (props) => {
    return Object.keys(props.allInfo);
}

const getLayouts = (props, game) => {
    return (game && props.allInfo[game]) ? Object.keys(props.allInfo[game]) : [];
}

const formatInfo = (allInfo, game, layout) => {
    return allInfo[game][layout].map((l) => l.label).reduce((t, c) => {t[c] = ""; return t}, {})
}

const getStyle = (props, i) => {
    return getField(props, i).length > 0 ? getField(props, i)[0].styleField : {};
}

const getFields = (props) => {
    return (props.selectedGame && props.selectedLayout) ? props.allInfo[props.selectedGame][props.selectedLayout].map((l) => l.label) : [];
}

const layoutHelper = {getField, getType, getGames, getLayouts, formatInfo, getStyle, getFields};

export default layoutHelper;