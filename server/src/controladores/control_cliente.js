const {Encuestado} = require("../../base_datos")

const post_client = async (req, res) =>{
    
    const {nombre, celular, fecha, lenguaje, informante, confirmacion } = req.body

    
    try {
    if(nombre && celular && lenguaje && informante ){
        const [new_Encuestado, created] = await Encuestado.findOrCreate(
            { 
                where: { celular} ,
                defaults: {
                    nombre:nombre,
                    celular: celular,
                    fecha: fecha, 
                    lenguaje: lenguaje, 
                    informante:informante, 
                    confirmacion:confirmacion
                }
            });

        if(created){
            res.json({
                creado:new_Encuestado,
                permiso: true
            });
        }else{
            res.json({
                mensaje: "Participante ya existente",
                permiso: true
            })
        }
    }else{
        res.status(404).json({mensaje:"datos insuficientes"})
    }

    } catch (error) {

        res.status(404).send(error.message)

    }

}

const put_client = async (req, res) =>{//esto no sera accesible sin el "permiso" del post

    const {id} = req.query;

    try {

        const Encuestado_id = await Encuestado.findByPk(id)


        for (let prop in req.body) {
            Encuestado_id[prop] = req.body[prop];
        }
            
        await Encuestado_id.save()

            res.json({
                mensaje: "Participante cambiado",
                cambiado: Encuestado_id
            })

    } catch (error) {

        res.status(404).send(error.message + "sgbsr")

    }
}

const get_client = async (req, res) =>{

    try {

        const Encuestados = await Encuestado.findAll()

            res.json(Encuestados)

    } catch (error) {

        res.status(404).send(error.message + "sgbsr")

    }
}


//cuando llene el form, se regresa un permiso y la ID, con eso si la persona desea cambiar los datos se debe tener ambos valores para hacer un put llenando el form otra vez

module.exports = {
    post_client,
    put_client,
    get_client
}