const initialState= {
    permiso_redux: false,
    inputs: {} ,
    info : {
        nombre: "",
        celular: null,
        fecha: null,
        lenguaje: "",
        informante: "ssds",
        confirmacion: false
    },
    error: false,
    usuario: {},
    listado: []
    }

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'PERMISO':
            return {...state, permiso_redux: actions.payload};
        
        case 'INPUTS':
            return {...state, inputs: actions.payload };

        case 'INFO':
            return {...state, info: {...state.info, [`${actions.payload.prop}`] : actions.payload.value } }
        
        case 'ERROR':
            return {...state, error: actions.payload};
        
        case 'CONSEGUIR':
            return {...state, usuario: actions.payload.usuario};

        case "LISTADO":
            return {...state, listado: actions.payload}

        case "BORRAR_INFO":
            return {...state, info: {
                nombre: "",
                celular: null,
                fecha: null,
                lenguaje: "",
                informante: "ssds",
                confirmacion: false}};

            //repasar funcion del default
            default: return {...state};
    }
};