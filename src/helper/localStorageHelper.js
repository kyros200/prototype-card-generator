const getJSON = () => {
    return localStorage.getItem("card-maker-najjar") ? JSON.parse(localStorage.getItem("card-maker-najjar")) : {};
}

const saveAllInfo = (newLayout) => {
    localStorage.setItem("card-maker-najjar", JSON.stringify(newLayout))
}

const localStorageHelper = {
    getJSON, 
    saveAllInfo
};

export default localStorageHelper;