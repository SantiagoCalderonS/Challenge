import axios from "axios"

export const dar_permiso = (P) =>{
    console.log(P)
    return{
        type: "PERMISO",
        payload: P
    }
}

export const inputs = (I) =>{
    return{
        type: "INPUTS",
        payload: I
    }
}

export const dar_info = (IN) =>{
    return{
        type: "INFO",
        payload: IN
    }
}

export const borrar_info = (IN) =>{
    return{
        type: "BORRAR_INFO",
    }
}


export const dar_error = (E) =>{
    return{
        type: "ERROR",
        payload: E
    }
}

export const conseguir_usuario = (ID) =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/respuestas?id=${ID}`); // request
            console.log(data)
            return dispatch({
                type: "CONSEGUIR",
                payload: data,
            });
        } catch (error) {
          window.alert("akdjkdjsnca")
        }
    };
}

export const conseguir_listado = () =>{
    return async (dispatch) => {
        try {
            const {data} = await axios.get(`http://localhost:3001/cliente/`); // request
            console.log(data)
            return dispatch({
                type: "LISTADO",
                payload: data.encuestados,
            });
        } catch (error) {
          window.alert("akdjkdjsnca")
        }
    };
}

/**  */
