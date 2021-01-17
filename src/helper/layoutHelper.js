const getField = (props, i) => {
    return (props.selectedGame && props.selectedLayout) ? props.layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i}) : [];
}

const getType = (props, i) => {
    return getField(props, i).length > 0 ? getField(props, i)[0].type : "txt";
}

const getStyle = (props, i) => {
    return getField(props, i).length > 0 ? getField(props, i)[0].styleField : {};
}

const getFields = (props) => {
    return (props.selectedGame && props.selectedLayout) ? props.layouts[props.selectedGame][props.selectedLayout].map((l) => l.label) : [];
}

const layoutHelper = {getField, getType, getStyle, getFields};

export default layoutHelper;