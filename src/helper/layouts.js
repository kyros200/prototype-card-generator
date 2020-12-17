const layouts = {
    galm: {
        humano: [
            {label:'name', type: "txt", style: {border: "2px solid black", margin:"8px", width: "5cm", height: "0.7cm"}}, 
            {label:'hp', type: "txt", style: {}}, 
            {label:'vp', type: "txt", style: {}}, 
            {label:'active', type: "txt", style: {}}, 
            {label:'activeImage', type: "img", style: {}}, 
            {label:'activeDesc', type: "txt", style: {}}, 
            {label:'special', type: "txt", style: {}}, 
            {label:'specialImage', type: "img", style: {}}, 
            {label:'specialDesc', type: "txt", style: {}},
        ],
        undead: [
            {label:'name', type: "txt", style: {}}, 
            {label:'hp', type: "txt", style: {}}, 
            {label:'rp', type: "txt", style: {}}, 
            {label:'vp', type: "txt", style: {}}, 
            {label:'active', type: "txt", style: {}}, 
            {label:'activeImage', type: "img", style: {}}, 
            {label:'activeDesc', type: "txt", style: {}}, 
            {label:'special', type: "txt", style: {}}, 
            {label:'specialImage', type: "img", style: {}}, 
            {label:'specialDesc', type: "txt", style: {}},
        ],
    },
    "3014": {
        fields: [],
    }
};

export default layouts;