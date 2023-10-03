import axios from "axios"
import { useState , useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import Input from "../input/input"; 
import Tarjeta from "../tarjeta/tarjeta";
import { dar_permiso, borrar_info } from "../../redux/actions";
import style from "./inicio.module.css"

const Inicio = () => {
    const [acceso, setAcceso] = useState(false) ;
    const inputs = useSelector((state)=> state.inputs)
    const permiso = useSelector((state)=> state.permiso_redux)
    const usuario = useSelector((state)=> state.usuario)
    const dispatch = useDispatch();


    function dar_acceso () {
        console.log(permiso)
        setAcceso(permiso)
    }

    function boton () {
        dispatch(borrar_info())
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
            : (<div>
                <Tarjeta usuario={usuario}/>
                <button onClick={boton} className={style.boton}>CAMBIAR RESPUESTA</button>
                </div>) }
    
        </div>
    )
}

export default Inicio; 