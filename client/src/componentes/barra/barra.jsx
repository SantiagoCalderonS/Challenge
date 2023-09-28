import { Link } from "react-router-dom";
import style from "./barra.module.css"

const Barra = () => {
    return( 
        <div className={style.container}>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/listado"}>Ver otras respuestas</Link>
        </div>
    )
}

export default Barra; 