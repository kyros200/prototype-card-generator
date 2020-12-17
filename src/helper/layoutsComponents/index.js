import GalmHumano from './GalmHumano';
import GalmUndead from './GalmUndead';

const components = {
    galm: {
        humano: (props) => GalmHumano(props),
        undead: (props) => GalmUndead(props),
    },
    "3014":{

    }
};

export default components;