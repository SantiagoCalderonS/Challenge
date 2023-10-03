import style from "./tarjeta.module.css"

const Tarjeta = ({usuario}) => {



    return(
        <div className={style.tarjeta}>
            <div className={style.a}>
            <h1>{usuario.nombre}</h1>
            <h2>{usuario.celular}</h2>
            <h2>{usuario.fecha}</h2>
            <h2>{usuario.lenguaje}</h2>
            <h2>{usuario.informante}</h2>
            <h2>{usuario.confirmacion}</h2>
            </div>
        </div>
    )
}

export default Tarjeta;