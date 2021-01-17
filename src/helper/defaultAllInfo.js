/* example:
    gameX : {
        layoutX: {
            fields: [
                {label: "", type: "", styleField: {}},
                ...
            ],
            component: (props) => Component(props)
        },
        layoutY: { ... },
        ...
    }
*/

import defaultCSS from "./defaultFieldCSS";

const allInfo = {
    galm: {
        humano: [
            {label:'name', type: "txt", styleField: {...defaultCSS, border: "2px solid black", width: "5cm", height: "0.7cm", top:"0.1cm", left:""}}, 
            {label:'hp', type: "txt", styleField: {...defaultCSS, border: "2px solid black", width: "1cm", height: "1cm", top:"0.1cm", left:"7cm"}}, 
            {label:'vp', type: "txt", styleField: {...defaultCSS}}, 
            {label:'active', type: "txt", styleField: {...defaultCSS}}, 
            {label:'activeImage', type: "img", styleField: {...defaultCSS, width: "1cm", height: "1cm", padding:"0cm"}},
            {label:'activeDesc', type: "txt", styleField: {...defaultCSS}}, 
            {label:'special', type: "txt", styleField: {...defaultCSS}}, 
            {label:'specialImage', type: "img", styleField: {...defaultCSS}}, 
            {label:'specialDesc', type: "txt", styleField: {...defaultCSS}},
        ],
        undead: [
            {label:'name', type: "txt", styleField: {}}, 
            {label:'hp', type: "txt", styleField: {}}, 
            {label:'rp', type: "txt", styleField: {}}, 
            {label:'vp', type: "txt", styleField: {}}, 
            {label:'active', type: "txt", styleField: {}}, 
            {label:'activeImage', type: "img", styleField: {}}, 
            {label:'activeDesc', type: "txt", styleField: {}}, 
            {label:'special', type: "txt", styleField: {}}, 
            {label:'specialImage', type: "img", styleField: {}}, 
            {label:'specialDesc', type: "txt", styleField: {}},
        ]
    },
    "3014": {
        evento: [],
        inimigo: [],
        arma: [],
        boss: [],
    },
};

export default allInfo;