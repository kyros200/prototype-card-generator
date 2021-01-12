const getString = () => {
    return localStorage.getItem("card-maker-najjar") ? JSON.stringify(localStorage.getItem("card-maker-najjar")) : "";
}

const getJSON = () => {
    return localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : {};
}

const getGames = () => {
    return Object.keys(getJSON());
}

const getLayouts = (game) => {
    return game ? Object.keys(getJSON()[game]) : [];
}

const formatInfo = (game, layout) => {
    return getJSON()[game][layout].map((l) => l.label).reduce((t, c) => {t[c] = ""; return t}, {})
}

const saveLayout = () => {
    console.log("salvando Layout agora");
}

const localStorageHelper = {getString, getJSON, getGames, getLayouts, formatInfo, saveLayout};

export default localStorageHelper;