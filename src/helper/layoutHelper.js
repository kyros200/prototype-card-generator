const getType = (props, i) => {
    return props.layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i}).length > 0 ? props.layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].type : "txt";
}

const getStyle = (props, i) => {
    return props.layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i}).length > 0 ? props.layouts[props.selectedGame][props.selectedLayout].filter((x) => {return x.label === i})[0].style : {};
}

const getFields = (props) => {
    return props.selectedGame && props.selectedLayout ? props.layouts[props.selectedGame][props.selectedLayout].map((l) => l.label) : [];
}

const layoutHelper = {getType, getStyle, getFields};

export default layoutHelper;