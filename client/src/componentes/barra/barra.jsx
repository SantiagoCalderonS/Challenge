import { Link } from "react-router-dom";
import style from "./barra.module.css"

const Barra = () => {

    const local = JSON.parse(localStorage.getItem("permiso"))

    return( 
        <div className={style.container}>
            <Link to={"/"}><h1>Inicio</h1></Link>
            {local.permiso && <Link to={"/listado"}><h1>Ver otras respuestas</h1></Link>}
        </div>
    )
}

export default Barra; 