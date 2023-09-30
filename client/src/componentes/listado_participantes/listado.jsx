import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { conseguir_listado } from "../../redux/actions";

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
                     <h1>{L.nombre}</h1>
                )
            })}
           
        </div>
    )
}

export default Listado; 