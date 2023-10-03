
const Tarjeta = ({usuario}) => {

    return(
        <div>
            <h1>{usuario.nombre}</h1>
            <h2>{usuario.celular}</h2>
        </div>
    )
}

export default Tarjeta;