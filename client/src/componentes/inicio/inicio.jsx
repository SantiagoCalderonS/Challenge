import axios from "axios"
import { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../input/input"; 
import Tarjeta from "../tarjeta/tarjeta";
import { dar_permiso } from "../../redux/actions";

const Inicio = () => {
    const [acceso, setAcceso] = useState(false) ;
    const inputs = useSelector((state)=> state.inputs)
    const permiso = useSelector((state)=> state.permiso_redux)
    const info = useSelector((state)=> state.info)
    const usuario = useSelector((state)=> state.usuario)
    const dispatch = useDispatch();


    function dar_acceso () {
        console.log(permiso)
        setAcceso(permiso)
    }

    function boton () {
        dispatch(dar_permiso(false))
    }

    useEffect(()=>{
       dar_acceso()
        
    },[permiso])

    return(
        <div>
            { !acceso? (
                <div>
                    <form>
                    {inputs?.items?.map((I)=>{
                        return(
                            <Input I={I}/>
                        )
                    })}
                    </form>
            </div>
            )
            : (<Tarjeta usuario={usuario}/>) }
            <button onClick={boton}>CAMBIAR RESPUESTA</button>
    
        </div>
    )
}

export default Inicio; 