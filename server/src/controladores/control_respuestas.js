const {Encuestado} = require("../../base_datos")

const get_respuestas = async (req, res) =>{//esto no sera accesible sin el "permiso" del post, si está hara esta peticion y obtendra los datos de la solicitud para renderizarlos y que se pueda asegurar de su respuesta



    const {id} = req.query;

    try {

        const Encuestado_id = await Encuestado.findByPk(id)

        if(Encuestado_id !== null){
             res.json({
                mensaje: "Participante ",
            usuario: Encuestado_id
            })

        }else{
            throwError(error)
        }
           
    } catch (error) {

        res.status(404).send(error.message)

    }
}

module.exports = {
    get_respuestas
}