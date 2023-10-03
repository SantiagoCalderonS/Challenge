import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { conseguir_listado } from "../../redux/actions";
import Tarjeta from "../tarjeta/tarjeta";

const Listado = () => {

    const listado = useSelector((state)=> state.listado)
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(conseguir_listado())
    },[])

    return( 
        <div>
            {listado.map((L)=>{
                return(
                     <Tarjeta usuario={L}/>
                )
            })}
           
        </div>
    )
}

export default Listado; 