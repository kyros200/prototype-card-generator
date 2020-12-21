/* example:
    game : {
        layoutX: {
            fields: [
                {label: "", type: "", style: {}},
                ...
            ],
            component: (props) => Component(props)
        },
        ...
    }
*/

const defaultCSS = {
    position: "absolute",
    
    boxSizing: "border-box",
    padding: "0cm 0.2cm",
    
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    overflow: "hidden",
}

const layouts = {
    galm: {
        humano: [
            {label:'name', type: "txt", style: {...defaultCSS, border: "2px solid black", width: "5cm", height: "0.7cm", top:"0.1cm", left:""}}, 
            {label:'hp', type: "txt", style: {...defaultCSS, border: "2px solid black", width: "1cm", height: "1cm", top:"0.1cm", left:"7cm"}}, 
            {label:'vp', type: "txt", style: {}}, 
            {label:'active', type: "txt", style: {}}, 
            {label:'activeImage', type: "img", style: {...defaultCSS, width: "1cm", height: "1cm", padding:"0cm"}},
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
        ]
    },
    "3014": {
        evento: [],
        inimigo: [],
        arma: [],
        boss: [],
    },
};

export default layouts;