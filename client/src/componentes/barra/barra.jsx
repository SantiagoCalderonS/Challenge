import { Link } from "react-router-dom";
import style from "./barra.module.css";
import { useDispatch, useSelector } from "react-redux"

const Barra = () => {

    const permiso = useSelector((state)=>state.permiso_redux)

    return( 
        <div className={style.container}>
            <Link to={"/"}><h1>Inicio</h1></Link>
            {permiso && <Link to={"/listado"}><h1>Ver otras respuestas</h1></Link>}
        </div>
    )
}

export default Barra; 