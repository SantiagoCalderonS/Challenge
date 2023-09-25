const {Encuestado} = require("../../base_datos")

const post_client = async (req, res) =>{
    
    const {nombre, celular, fecha, lenguajes, informante, confirmacion } = req.body
    console.log(celular, lenguajes[0], informante[0])
    try {

        const [new_Encuestado, created] = await Encuestado.findOrCreate(
            { 
                where: { nombre } ,
                default: {
                    nombre:nombre,
                    celular: celular,
                    fecha: fecha, 
                    lenguajes: lenguajes, 
                    informante:informante, 
                    confirmacion:confirmacion
                }
            });

        if(created){
            res.json(new_Encuestado);
        }else{
            res.json({mensaje: "Participante ya existente"})
        }

    } catch (error) {

        res.status(404).send(error.message)

    }
}


module.exports = {
    post_client
}