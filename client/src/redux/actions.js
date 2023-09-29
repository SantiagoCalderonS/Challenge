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

export const dar_error = (E) =>{
    return{
        type: "ERROR",
        payload: E
    }
}

