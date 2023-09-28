const initialState= {
    permiso_redux: false,
    inputs: {} 
    }

export default function reducer ( state = initialState, actions) {
    
    switch(actions.type){
        
        case 'PERMISO':
            return {...state, permiso_redux: !state.permiso_redux };
        
        case 'INPUTS':
            return {...state, inputs: actions.payload };

            //repasar funcion del default
            default: return {...state};
    }
};