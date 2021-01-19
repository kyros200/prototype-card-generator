/* example:
    gameX : {
        layoutX: {
            fields: [
                {label: "", type: "", styleField: {}},
                ...
            ],
            card: (props) => Component(props)
        },
        layoutY: { ... },
        ...
    }
*/

import defaultFieldCSS from "./defaultFieldCSS";
import defaultCardCSS from "./defaultCardCSS";

const allInfo = {
    galm: {
        humano: {
            fields: [
                {label:'name', type: "txt", styleField: {...defaultFieldCSS, border: "2px solid black", width: "5cm", height: "0.7cm", top:"0.1cm", left:""}}, 
                {label:'hp', type: "txt", styleField: {...defaultFieldCSS, border: "2px solid black", width: "1cm", height: "1cm", top:"0.1cm", left:"7cm"}}, 
                {label:'vp', type: "txt", styleField: {...defaultFieldCSS}}, 
                {label:'active', type: "txt", styleField: {...defaultFieldCSS}}, 
                {label:'activeImage', type: "img", styleField: {...defaultFieldCSS, width: "1cm", height: "1cm", padding:"0cm"}},
                {label:'activeDesc', type: "txt", styleField: {...defaultFieldCSS}}, 
                {label:'special', type: "txt", styleField: {...defaultFieldCSS}}, 
                {label:'specialImage', type: "img", styleField: {...defaultFieldCSS}}, 
                {label:'specialDesc', type: "txt", styleField: {...defaultFieldCSS}},
            ],
            card: defaultCardCSS
        },
        undead: {
            fields: [
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
            ],
            card: defaultCardCSS
        }
    },
};

export default allInfo;