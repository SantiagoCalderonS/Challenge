import { useDispatch } from "react-redux";
import { dar_error } from "../../redux/actions";

const dispatch = useDispatch()

function validaciones (info) {
    info.name === "nombre" && nombre_valido(info.vale)
    info.name === "celular" && nombre_valido(info.vale)

    dispatch(dar_error(false))
}


const nombre_valido = (value) =>{
    if(value.length < 20 ){
        dispatch(dar_error(true))
    }
       
}

const telefono_valido = (value) =>{
    if( isNaN(value) ){
        dispatch(dar_error(true))
    }
       
}