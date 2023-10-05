import style from "./tarjeta.module.css"

const Tarjeta = ({usuario}) => {

    

    return(
        <div className={style.tarjeta}>
            <div className={style.a}>
            <h1>NOMMBRE: {usuario.nombre}</h1>
            <h2>TELEFONO: {usuario.celular}</h2>
            <h2>HORA DE INICIO: {usuario.fecha.split("T")[0]}</h2>
            <h2>LENGUAJE: {usuario.lenguaje}</h2>
            <h2>RECOMENDACION: {usuario.informante}</h2>
            <h2>NOTIFICAR: {usuario.confirmacion? "SI":"NO"}</h2>
            </div>
        </div>
    )
}

export default Tarjeta;